/* -----------------------------------
【003】英語の略語生成プログラム

■問題
By the way を "BTW"、 Oh, my God! を "OMG" のように
海外では英単語の頭文字をとった略語が使われます。
英語の文章が与えられるので、それぞれの単語の頭文字を抽出し
略語を生成するプログラムを作成してください。


■INPUTされる値
S1 ... SN
半角スペース区切りでN個の英単語が文字列形式で与えられる

■I/O例
INPUT  | by the way
OUTPUT | btw

INPUT  | for your information
OUTPUT | fyi

■条件
英単語は全て小文字で与えられる
1 <= 英単語の長さ <= 20
1 <= 英単語数 <= 10
----------------------------------- */

// 例1
const data = 'by the way';
// 例2
// const data = 'for your information';

// コードを記述してみよう！
console.log(data);