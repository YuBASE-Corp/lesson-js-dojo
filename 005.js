/* -----------------------------------
【005】ブログ記事の概要文

■問題
あなたはブログ記事サイトを作成することになりました
ブログ記事本文の文字列が与えられるので
20文字以下であればそのまま文章を出力し
21文字以上であれば20文字まで文章を出力し、半角ドット３つ(...)を出力してください

■INPUTされる値
S
文字列 S

■I/O例
INPUT  | 私はその人を常に先生と呼んでいた
OUTPUT | 私はその人を常に先生と呼んでいた

INPUT  | だからここでもただ先生と書くだけで本名は打ち明けない。これは世間を憚る遠慮というよりも、その方が私にとって自然だからである
OUTPUT | だからここでもただ先生と書くだけで本名は...

■条件
文字列Sは全角文字で構成された文章
1 <= 文字列Sの文字数 <= 100
----------------------------------- */

// 例1
const data = '私はその人を常に先生と呼んでいた';
// 例2
// const data = 'だからここでもただ先生と書くだけで本名は打ち明けない。これは世間を憚る遠慮というよりも、その方が私にとって自然だからである';

// コードを記述してみよう！
console.log(data);