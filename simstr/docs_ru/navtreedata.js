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
      [ "Строки в С++", "overview.html#autotoc_md16", [
        [ "Что было и есть", "overview.html#autotoc_md17", [
          [ "Ресурсы", "overview.html#autotoc_md18", null ],
          [ "Мутабельность / иммутабельность", "overview.html#autotoc_md19", null ],
          [ "Конкатенация строк", "overview.html#autotoc_md20", null ]
        ] ],
        [ "Библиотека simstr", "overview.html#autotoc_md21", [
          [ "Классы строк.", "overview.html#autotoc_md22", [
            [ "Первый самый простой класс строки называется, естественно, simple_str :)", "overview.html#autotoc_md23", null ],
            [ "Второй класс — simple_str_nt", "overview.html#autotoc_md24", null ],
            [ "Класс sstring (shared string).", "overview.html#autotoc_md25", null ],
            [ "Класс lstring<K, N, forShared> (local string)", "overview.html#autotoc_md26", null ]
          ] ],
          [ "Строковые выражения", "overview.html#autotoc_md27", [
            [ "expr_spaces<ТипСимвола, КоличествоСимволов, Символ = ' '>{}", "overview.html#autotoc_md28", null ],
            [ "expr_pad<ТипСимвола>{КоличествоСимволов, Символ = ' '}", "overview.html#autotoc_md29", null ],
            [ "e_repeat{Str, count}", "overview.html#autotoc_md30", null ],
            [ "e_choice(bool Condition, StrExpr1, StrExpr2)", "overview.html#autotoc_md31", null ],
            [ "e_if(bool Condition, StrExpr1)", "overview.html#autotoc_md32", null ],
            [ "expr_num<ТипСимвола>(ЦелоеЧисло)", "overview.html#autotoc_md33", null ],
            [ "expr_real<ТипСимвола>(ВещественноеЧисло)", "overview.html#autotoc_md34", null ],
            [ "e_join<bool ПослеПоследнего = false, bool ТолькоНеПустые = false>>(контейнер, \"Разделитель\")", "overview.html#autotoc_md35", null ],
            [ "e_repl(ИсходнаяСтрока, \"Искать\", \"Заменять\")", "overview.html#autotoc_md36", null ],
            [ "expr_replaced<ТипСимвола>{ИсходнаяСтрока, Искать, Заменять}", "overview.html#autotoc_md37", null ],
            [ "empty_expr<ТипСимвола>", "overview.html#autotoc_md38", null ],
            [ "Свои строковые выражения", "overview.html#autotoc_md39", null ]
          ] ],
          [ "Класс chunked_string_builder", "overview.html#autotoc_md40", null ]
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
"classsimstr_1_1str__algs.html#ab3f6c202d1c1723297d46a45d82c5808",
"classsimstr_1_1str__src__algs.html#a9bded9dcb3da163cf73d690dd63a73d4",
"namespacesimstr.html#a535ff50092fb0783922615ee0d3af5a2",
"structsimstr_1_1simple__str.html#ac82f1096d596015340377b58704030cf",
"structsimstr_1_1str__src.html#a108d9cd0dc24f5d395e838a3ef20d846",
"structsimstr_1_1str__src__nt.html#a73806fa93c9ec619ba93d479d413ea0f"
];

var SYNCONMSG = 'нажмите на выключить для синхронизации панелей';
var SYNCOFFMSG = 'нажмите на включить для синхронизации панелей';