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
"classsimstr_1_1lstring.html#a9959513e8a072c51620248c4a29f4196",
"classsimstr_1_1sstring.html#a73806fa93c9ec619ba93d479d413ea0f",
"classsimstr_1_1str__algs.html#ab38e5cc7893a20e69cdf03d88232b49c",
"classsimstr_1_1str__src__algs.html#a9b9958a7ba764ec2ee03fd5f205e3bcd",
"namespacesimstr.html#a46fe7e669051cea6d5406e8b61ba10fa",
"structsimstr_1_1simple__str.html#ab630d62252bf1210f573a8c7222942c8",
"structsimstr_1_1simple__str__nt.html#af893677739e0d24418f6acc0a29090cc",
"structsimstr_1_1str__src__nt.html#a63742e2c0e55c85b0569f6a0004e5418"
];

var SYNCONMSG = 'нажмите на выключить для синхронизации панелей';
var SYNCOFFMSG = 'нажмите на включить для синхронизации панелей';