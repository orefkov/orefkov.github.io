/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "simstr", "index.html", [
    [ "Библиотека simstr.", "index.html", "index" ],
    [ "Обзор", "overview.html", [
      [ "Строки в С++", "overview.html#autotoc_md19", [
        [ "Что было и есть", "overview.html#autotoc_md20", [
          [ "Ресурсы", "overview.html#autotoc_md21", null ],
          [ "Мутабельность / иммутабельность", "overview.html#autotoc_md22", null ],
          [ "Конкатенация строк", "overview.html#autotoc_md23", null ]
        ] ],
        [ "Библиотека simstr", "overview.html#autotoc_md24", [
          [ "Классы строк.", "overview.html#autotoc_md25", [
            [ "Первый самый простой класс строки называется, естественно, simple_str :)", "overview.html#autotoc_md26", null ],
            [ "Второй класс — simple_str_nt", "overview.html#autotoc_md27", null ],
            [ "Класс sstring (shared string).", "overview.html#autotoc_md28", null ],
            [ "Класс lstring<K, N, forShared> (local string)", "overview.html#autotoc_md29", null ]
          ] ],
          [ "Строковые выражения", "overview.html#autotoc_md30", [
            [ "expr_spaces<ТипСимвола, КоличествоСимволов, Символ = ' '>{}", "overview.html#autotoc_md31", null ],
            [ "expr_pad<ТипСимвола>{КоличествоСимволов, Символ = ' '}", "overview.html#autotoc_md32", null ],
            [ "e_repeat{Str, count}", "overview.html#autotoc_md33", null ],
            [ "e_choice(bool Condition, StrExpr1, StrExpr2)", "overview.html#autotoc_md34", null ],
            [ "e_if(bool Condition, StrExpr1)", "overview.html#autotoc_md35", null ],
            [ "expr_num<ТипСимвола>(ЦелоеЧисло)", "overview.html#autotoc_md36", null ],
            [ "expr_real<ТипСимвола>(ВещественноеЧисло)", "overview.html#autotoc_md37", null ],
            [ "e_join<bool ПослеПоследнего = false, bool ТолькоНеПустые = false>>(контейнер, \"Разделитель\")", "overview.html#autotoc_md38", null ],
            [ "e_repl(ИсходнаяСтрока, \"Искать\", \"Заменять\")", "overview.html#autotoc_md39", null ],
            [ "expr_replaced<ТипСимвола>{ИсходнаяСтрока, Искать, Заменять}", "overview.html#autotoc_md40", null ],
            [ "empty_expr<ТипСимвола>", "overview.html#autotoc_md41", null ],
            [ "Свои строковые выражения", "overview.html#autotoc_md42", null ]
          ] ],
          [ "Класс chunked_string_builder", "overview.html#autotoc_md43", null ]
        ] ]
      ] ]
    ] ],
    [ "Разделы", "topics.html", "topics" ],
    [ "Пространства имен", "namespaces.html", [
      [ "Пространства имен", "namespaces.html", "namespaces_dup" ],
      [ "Члены пространств имен", "namespacemembers.html", [
        [ "Указатель", "namespacemembers.html", null ],
        [ "Функции", "namespacemembers_func.html", null ],
        [ "Переменные", "namespacemembers_vars.html", null ],
        [ "Определения типов", "namespacemembers_type.html", null ],
        [ "Перечисления", "namespacemembers_enum.html", null ],
        [ "Элементы перечислений", "namespacemembers_eval.html", null ]
      ] ]
    ] ],
    [ "Концепты", "concepts.html", "concepts" ],
    [ "Классы", "annotated.html", [
      [ "Классы", "annotated.html", "annotated_dup" ],
      [ "Алфавитный указатель классов", "classes.html", null ],
      [ "Иерархия классов", "hierarchy.html", "hierarchy" ],
      [ "Члены классов", "functions.html", [
        [ "Указатель", "functions.html", "functions_dup" ],
        [ "Функции", "functions_func.html", "functions_func" ],
        [ "Элементы перечислений", "functions_eval.html", null ]
      ] ]
    ] ],
    [ "Файлы", "files.html", [
      [ "Файлы", "files.html", "files_dup" ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"annotated.html",
"classsimstr_1_1lstring.html#a885c6a5a9ecf6417993824dbb4425af6",
"classsimstr_1_1sstring.html#a4e79e99462478b57d62873f7942ff2b6",
"classsimstr_1_1str__algs.html#a4b10b1045e187638501edb2bcedc475a",
"classsimstr_1_1str__mutable.html#ac0ee55594becb6b2c2b98df722cc7a33",
"functions_func.html",
"structsimstr_1_1expr__to__std__string.html",
"structsimstr_1_1simple__str__nt.html#a149f566252aa85b548e243440e8ffe30",
"structsimstr_1_1str__src.html#a2c3965cc964a2ec2dd021295320af926",
"structsimstr_1_1str__src__nt.html#a610d501d16ab38c3efb1427f14ea7f67"
];

var SYNCONMSG = 'нажмите на выключить для синхронизации панелей';
var SYNCOFFMSG = 'нажмите на включить для синхронизации панелей';