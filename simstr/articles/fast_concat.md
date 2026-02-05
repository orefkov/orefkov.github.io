# So how do you quickly concatenate strings?
(and not just strings)

All practicing programmers have to concatenate strings.
Precisely concatenate, we don’t have some JavaScript or PHP, in C++ we have this fancy word for it.Programmers in other languages ​​simply "add" strings
together without much thought, without even thinking about this operation. After all, what could be simpler than
```js
return "The answer is " + str_answer + ", count is " + count;
```
But while it's forgivable for script kiddies not to think about the meaning behind such a simple notation, it's unacceptable for an experienced
developer to approach such an important issue so irresponsibly. An experienced developer, imagining
such C++ code, immediately sees the terrifying abyss of problems that such an approach can create.

- *What type is `str_answer`?* Okay, if it's `std::string`, we can concatenate it with a string literal.
But what if, in the spirit of the latest optimization trends (after all, it's been 9 years since 2017), we use `std::string_view` for it?
Convert the literal `"The answer is "` to `std::string` or the variable `str_answer`?
Okay, considering that concatenation of `std::string` and `std::string_view` isn't even supported in all compilers
since C++26, we'll convert the variable `str_answer` to `std::string` in this case (it's not clear then,
why did they "optimize" `std::string_view`?).
- *What type is `count`?* It's most likely a number, but you can't just add a number to a string. Should we use
`std::to_string`, creating another `std::string`? Okay... Luckily, we need to get an `std::string`,
and not, say, an `std::u16string`; they haven't implemented the `std::to_u16string` method yet.
- *"The answer is " and ", count is " - are literals that add to `std::string` as a `const char*`*.
So, `strlen` will be called. I wonder if the compiler will be able to optimize and calculate their length at compile time?
Oh well, it seems like `constexpr` is in the addition, let's hope so.

This is the first level of problems for now. And let's say we successfully solved them, creating the following code:
```cpp
std::string make_answer(std::string_view str_answer, int count) {
    return "The answer is " + std::string{str_answer}
        + ", count is " + std::to_string(count);
}
```
It sounds like "Hurray!", but it's somehow not loud enough...
Because an experienced developer sees that 5 (five!) temporary intermediate `std::string` objects are created here,
into which characters are sequentially transferred from one object to another.

It's good if the resulting strings are small and fall under SSO (as we know, standard x64 strings of 32 bytes can store up to 15 characters without memory allocation).
It's good that standard strings are written intelligently,
and take full advantage of the power of rvalue references, using `append` and `std::move` when adding to temporary objects.
This allows for some optimization. But even if it wanted to, the compiler can't throw away these five
temporary objects and is required to call at least five destructors for them, checking whether they are empty and whether it needs to
call `delete` on the character buffers. Although we understand that they will all be empty, since they are ultimately moved into
the resulting object, and such a check is simply a waste of time. Let's not forget that the compiler also has to
provide for exceptions by generating code to clean up these temporary objects during stack unwinding.

Yes, if this code isn't running in a critical execution region, then modern processors will tolerate anything, but this
is not the path of an experienced master. A master strives for perfection. So, he starts trying out different options and taking measurements.

So, maybe the problem is that there are too many temporary objects and character movements between them?
Let's try to do everything in one go, since we have std::stringstream and std::format:
```cpp
std::string make_answer_format(std::string_view str_answer, int count) {
    return std::format("The answer is {}, count is {}", str_answer, count);
}

std::string make_answer_stream(std::string_view str_answer, int count) {
    std::stringstream s;
    s << "The answer is " << str_answer << ", count is " << count;
    return s.str();
}
```
Surprisingly, measurements show that this approach is a complete failure. A link to all the benchmarks will be below.
`std::format` loses to string concatenation in this situation, and `std::stringstream` loses to
`std::format` by a factor of two. And this is under Linux; under Windows it's even worse.

So what to do? Actually, the strategy for fast string concatenation has been around for a long time: first calculate
the length of the result, allocate the required amount of space, and copy the characters directly into this buffer, avoiding
creating temporary intermediate strings. An experienced developer rolls up their sleeves and gets down to business:
```cpp
std::string make_answer_append(std::string_view str_answer, int count) {
    static const auto s1 = "The answer is "sv, s2 = ", count is "sv;
    char buf[40];
    size_t count_len = std::to_chars(buf, std::end(buf), count).ptr - buf;
    std::string res;
    res.reserve(s1.length() + s2.length() + str_answer.length() + count_len);
    res = s1;
    res.append(str_answer);
    res.append(s2);
    res.append(buf, count_len);
    return res;
}
```
After running the tests and seeing the results, an experienced developer would rightfully shout "Bingo!!!"
This method confidently outperforms simple addition, on average by a factor of one and a half to two.

But does he have the right to exclaim "Eureka"? No, and once again, no.
Look at the sheer volume of code he had to write for such a simple operation.
If you were to write every string addition in a program like this, you might not even have time to write it.

And this is still a simple case. Numbers may need to be output in more than just decimal format. Strings may need to be used for more than
just `char` - the standard actually has five character types for strings, and `std::to_chars` only exists for `char`.
You may also need to "concatenate" strings from a container into a single string, or replace substrings with other substrings during addition.
Or, depending on conditions, append one or another to a string.

Is there a way to write all these concatenations as easily as simple string addition,
but still as efficiently as manual optimization?

So, an experienced programmer adds two lines to the code:
```cpp
#include <simstr/strexpr.h>
using namespace simstr;
```
and adds another method to its measurements:
```cpp
std::string make_answer_strexpr(ssa str_answer, int count) {
    return "The answer is " + str_answer + ", count is " + count;
}
```
And now let's finally look at
[the results of all measurements with Compiler Explorer](https://godbolt.org/z/TYePsjTPv).
```
Run on (2 X 2303.05 MHz CPU s)
Load Average: 0.28, 0.33, 0.41
------------------------------------------------------------------------------
Benchmark                                    Time             CPU   Iterations
------------------------------------------------------------------------------
do_make_answer<make_answer_str>            130 ns         95.4 ns      7369631
do_make_answer<make_answer_format>         368 ns          165 ns      7422333
do_make_answer<make_answer_stream>         748 ns          422 ns      1546946
do_make_answer<make_answer_append>         111 ns         60.3 ns      9724967
do_make_answer<make_answer_strexpr>       79.5 ns         32.9 ns     21483240
```
Now it's time to shout "Eureka!" The code, which turned out to be as simple as any JavaScript, turned out to be the fastest, outperforming our manually
optimized code by about 20%. And all thanks to the [simstr string library](https://github.com/orefkov/simstr) and the "string expression" technique it uses.

## How does it work?
The thing is that the simstr library doesn't actually use either "concatenation" or "addition" of strings.
It uses "string expressions" to add strings together. This is the basis for the fast addition technique. The second is that in C++, intermediate temporary
objects live until the end of an expression, until the semicolon. Let's take a closer look.

A string expression isn't a string, but an "instruction" on how to assemble a string.
You could call it a "string generator." It's an object of any type that satisfies the concept of `StrExpr`:
```cpp
template<typename A>
concept StrExpr = requires(const A& a) {
    typename std::remove_cvref_t<A>::symb_type;
    { a.length() } -> std::convertible_to<size_t>;
    { a.place(std::declval<typename std::remove_cvref_t<A>::symb_type*>()) }
        -> std::same_as<typename std::remove_cvref_t<A>::symb_type*>;
};
```
That is, it knows what character type it's operating on, it has a `length()` method that returns
the length of the string it generates, and it has a `place(ptr)` method, in which it actually generates the string,
placing the string's characters into the provided buffer.

When we want to "materialize" a string generated by a string expression, we first ask it for
the length of the result, then allocate the required location, and then ask the string object to place its string
in that location. Nothing complicated so far, and it's still unclear why this is called an "expression."
Watch your hands. We create a template class that joins two string expressions:
```cpp
template<StrExpr A, StrExprForType<typename A::symb_type> B>
struct strexprjoin {
    using symb_type = typename A::symb_type;
    const A& a;
    const B& b;
    constexpr strexprjoin(const A& a_, const B& b_) : a(a_), b(b_){}

    constexpr size_t length() const noexcept {
        return a.length() + b.length();
    }

    constexpr symb_type* place(symb_type* p) const noexcept {
        return b.place(a.place(p));
    }
};
```
It stores references to the two string expressions passed to it. When asked for a length, it
returns the sum of the lengths of the two expressions, and when asked to store the result, it places the first expression into the buffer, followed by the second.

And then a bit of template magic:
```cpp
template<StrExpr A, StrExprForType<typename A::symb_type> B>
constexpr strexprjoin<A, B> operator+(const A&a, const B& b) {
    return {a, b};
}
```
Now, when we add two string expressions of any type, a temporary object of type
`strexprjoin<A,B>` is created, which stores references to its terms—the string expressions—and which
exists until the end of the expression, up to the semicolon. Most importantly, this object also satisfies the concept
`StrExpr`, meaning it is itself a string expression, and the addition operation can be applied to it again, chained together, creating a new
`strexprjoin` object that references the previous chain of expressions and the new term. Thus, the end result is a temporary object that stores references
to all the terms of the expression.

All owned string types in simstr can be initialized from any string expression.
They request its length, allocate space, and materialize the expression into that space. Mutable string types in simstr can also be used for insertions and
replacements, similarly obtaining the required length, allocating space, and placing the expression's characters into that space.

For compatibility with standard strings, "string expression" objects contain a conversion operator
to a standard string, performing the same algorithm—calculating the length, allocating space, and placing characters.
When used in C++20, `resize()` and `data()` are used for this; starting with C++23, `resize_and_overwrite()` is used.

Also, all string types in `simstr` satisfy the concept of a string expression, so they can directly serve as addends in addition operations
with other string expressions. In this case, they simply copy themselves to the specified location.

But string expressions aren't limited to simply copying strings. After all, they are "generators." We can, for example, create
a type that generates a specified number of specified characters. Or one that converts a number to a string.
Or, depending on the condition, returning the result of one or another string expression.
The library also overloads the operations for adding a string expression to a string literal, or a number, as well as standard strings.

Look at the code from the example above in more detail:
```cpp
std::string make_answer_strexpr(ssa str_answer, int count) {
    return "The answer is " + str_answer + ", count is " + count;
}
```
The `ssa` type is `simstr::simple_str<char>` - an analogue of `std::string_view`, that is, simply a pointer to the text and its length.
It can be initialized from any `simstr` string objects, from string literals, as well as
`std::basic_string` and `std::basic_string_view`. Therefore, using it as a function parameter instead of
`std::string_view` won't break existing code; as you can see, the function can be called just fine with `std::string_view`.
However, this type is also a string expression, and therefore can be concatenated with a string literal. Thus, `"The answer is " + str_answer`
creates a new temporary object—a string expression. Adding `", count is "` to it creates a new string object, storing a reference
to the previous one and to the string literal. Finally, a number is added to it, creating a string expression subobject that converts the
number to a string. Finally, the conversion method to `std::string` is called on this resulting object, which materializes the string expression
into the resulting string.

Some might argue that in this method we are not getting rid of temporary intermediate objects.
Yes, that's true. But all these objects are simple and primitive - often they simply consist of references to other objects.
They are all created on the stack, have trivial constructors and destructors, do not use dynamic memory,
their entire lives are clearly visible to the compiler, and it does a great job of optimizing their use.
Look, for example, how beautifully [GCC was able to optimize a small concatenation](https://godbolt.org/z/r1GMc4xKM) -
there was no trace of these intermediate objects left, and he simply inserted a copy of the characters into the string buffer.
You can also compare it with code generation using the classical concatenation method - there is more code, clearly visible
all destructors of intermediate `std::string`. Clang so far copes with optimization a little worse, but not critically.

The simstr library isn't limited to implementing efficient string concatenation. It also contains many other useful algorithms.

Benchmarks for various use cases can be found [here](https://orefkov.github.io/simstr/results.html).

I think the question of how to most efficiently concatenate strings is answered.
