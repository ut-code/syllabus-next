/**
 * Homeページコンポーネント
 * @returns HomeページのJSXエレメント
 */

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer/page";

export default function Home(): JSX.Element {
  return (
    <div>
      <Header />
      <main style={{paddingTop: '60px'}}>
        <h1>履修上の注意</h1>
        <h2>特に注意すること</h2>
        <ul>
          <li>
            <span
              style={{ color: "red", fontWeight: "bold", textDecoration: "underline" }}
            >
              英語中級
            </span>
            ・
            <span
              style={{ color: "red", fontWeight: "bold", textDecoration: "underline" }}
            >
              初年次ゼミナール
            </span>
            には抽選があるので、期日までに希望を出す
          </li>
          <li>クラス指定の総合科目(いわゆる準必修)は必ずしも履修する必要はない</li>
          <li>
            1セメスターにつき、履修可能なのは
            <span style={{ color: "red" }}>30</span>
            単位まで(集中講義, TLPを除く)。ただし「優」や「優上」をたくさん獲得すると次のセメスターからこの制限を解放できる。（詳しくは履修の手引き p10を参照）
          </li>
          <li>総合科目よりも基礎科目の成績を優先する(後で点数を塗り替えることができないため)</li>
          <li>
            以下に記載のもの以外に、前期課程修了には追加で2~4単位必要になる(単位数は科類によって異なる)。総計で文系は56単位以上、理系は63単位
          </li>
        </ul>
        <h2>単位数の数え方</h2>
        <ul>
          <li>ターム制で週1コマ(計7コマ)の講義/演習 → 1単位</li>
          <li>ターム制で週2コマ(計13コマ)の講義/演習 → 2単位</li>
          <li>セメスター制で週1コマ(計13コマ)の講義/演習 → 2単位</li>
          <li>実験や実習は上記の半分の単位</li>
        </ul>
        <h2>進学に必要な単位(基礎科目を除く)</h2>
        <ul style={{ border: "2px solid #000" }}>
          <h3 style={{ color: "blue" }}>文科一類、文科二類</h3>
          <ul>
            <li>
              総合科目
              <ul>
                <li>
                  A~C系列：2系列以上にわたり<span style={{ color: "red" }}>6</span>単位以上
                </li>
                <li>
                  D~F系列：2系列以上にわたり<span style={{ color: "red" }}>6</span>単位以上
                </li>
                <li>
                  L系列：「英語中級」「英語上級」から<span style={{ color: "red" }}>3</span>単位以上(既修外国語が英語の場合)、 初修外国語の演習①と②、その他から<span style={{ color: "red" }}>2</span>単位以上
                </li>
              </ul>
            </li>
            <li>主題科目：<span style={{ color: "red" }}>2</span>単位以上</li>
            <li>展開科目：0単位以上(履修しなくても良い)</li>
            <li>
              さらに、前期課程修了に必要な単位：<span style={{ color: "red" }}>4</span>単位
            </li>
          </ul>
        </ul>
        <ul style={{ border: "2px solid #000" }}>
          <h3 style={{ color: "blue" }}>文科三類</h3>
          <ul>
            <li>
              総合科目
              <ul>
                <li>
                  A~C、L系列：「英語中級」「英語上級」から<span style={{ color: "red" }}>3</span>単位以上(既修外国語が英語の場合)、 初修外国語の演習①と②、その他から3系列以上にわたり<span style={{ color: "red" }}>10</span>単位以上
                </li>
                <li>
                  D~F系列：2系列以上にわたり<span style={{ color: "red" }}>8</span>単位以上
                </li>
              </ul>
            </li>
            <li>主題科目：<span style={{ color: "red" }}>2</span>単位以上</li>
            <li>展開科目：0単位以上(履修しなくても良い)</li>
            <li>
              さらに、前期課程修了に必要な単位：<span style={{ color: "red" }}>4</span>単位
            </li>
          </ul>
        </ul>
        <ul style={{ border: "2px solid #000" }}>
          <h3 style={{ color: "blue" }}>理科一類、理科二類、理科三類</h3>
          <ul>
            <li>
              総合科目
              <ul>
                <li>
                  A~D系列：2系列以上にわたり<span style={{ color: "red" }}>6</span>単位以上
                </li>
                <li>
                  E~F系列：2系列以上にわたり<span style={{ color: "red" }}>6</span>単位以上
                </li>
                <li>
                  L系列：「英語中級」「英語上級」から<span style={{ color: "red" }}>3</span>単位以上(既修外国語が英語の場合)、 その他から0単位以上 <br /> (「英語中級」「英語上級」以外は履修しなくても良い)
                </li>
              </ul>
            </li>
            <li>主題科目：<span style={{ color: "red" }}>2</span>単位以上</li>
            <li>展開科目：0単位以上(履修しなくても良い)</li>
            <li>
              さらに、前期課程修了に必要な単位：理科一類は<span style={{ color: "red" }}>3</span>単位、理科二類と理科三類は<span style={{ color: "red" }}>2</span>単位
            </li>
          </ul>
        </ul>
        <h2>進学に必要な単位(基礎科目)</h2>
        <ul style={{ border: "2px solid #000" }}>
          <h3 style={{ color: "blue" }}>文科一類</h3>
          <ul>
            <li>英語一列＆二列</li>
            <li>(第二外国語)一列＆二列</li>
            <li>
              情報(希望者は発展内容を扱う<span style={{ color: "blue" }}>情報α</span>に変更可。)
            </li>
            <li>身体運動・健康科学実習</li>
            <li>初年次ゼミナール文科</li>
            <li>
              人文科学(
              <span style={{ color: "red" }}>「哲学」「倫理」「歴史」「心理」「ことばと文学」</span>から2分野以上にわたり<span style={{ color: "red" }}>4</span>単位以上)
            </li>
            <li>
              社会科学(「法Ⅰ<span style={{ color: "red", fontWeight: "bold" }}>+</span>法Ⅱ」または「政治Ⅰ<span style={{ color: "red", fontWeight: "bold" }}>+</span>政治Ⅱ」を含み<span style={{ color: "red" }}>8</span>単位以上)
            </li>
          </ul>
        </ul>
        <ul style={{ border: "2px solid #000" }}>
          <h3 style={{ color: "blue" }}>文科二類</h3>
          <ul>
            <li>英語一列＆二列</li>
            <li>(第二外国語)一列＆二列</li>
            <li>
              情報(希望者は発展内容を扱う<span style={{ color: "blue" }}>情報α</span>に変更可。)
            </li>
            <li>身体運動・健康科学実習</li>
            <li>初年次ゼミナール文科</li>
            <li>
              人文科学(
              <span style={{ color: "red" }}>「哲学」「倫理」「歴史」「心理」「ことばと文学」</span>から2分野以上にわたり<span style={{ color: "red" }}>4</span>単位以上)
            </li>
            <li>
              社会科学(「法Ⅰ<span style={{ color: "red", fontWeight: "bold" }}>+</span>法Ⅱ」または「政治Ⅰ<span style={{ color: "red", fontWeight: "bold" }}>+</span>政治Ⅱ」を含み<span style={{ color: "red" }}>8</span>単位以上)
            </li>
          </ul>
        </ul>
        <ul style={{ border: "2px solid #000" }}>
          <h3 style={{ color: "blue" }}>文科三類</h3>
          <ul>
            <li>英語一列＆二列</li>
            <li>(第二外国語)一列＆二列</li>
            <li>
              情報(希望者は発展内容を扱う<span style={{ color: "blue" }}>情報α</span>に変更可。)
            </li>
            <li>身体運動・健康科学実習</li>
            <li>初年次ゼミナール文科</li>
            <li>
              人文科学(
              <span style={{ color: "red" }}>「哲学」「倫理」「歴史」「心理」「ことばと文学」</span>から2分野以上にわたり<span style={{ color: "red" }}>4</span>単位以上)
            </li>
            <li>
              社会科学(「法Ⅰ<span style={{ color: "red", fontWeight: "bold" }}>+</span>法Ⅱ」または「政治Ⅰ<span style={{ color: "red", fontWeight: "bold" }}>+</span>政治Ⅱ」を含み<span style={{ color: "red" }}>8</span>単位以上)
            </li>
          </ul>
        </ul>
        <ul style={{ border: "2px solid #000" }}>
          <h3 style={{ color: "blue" }}>理科一類、理科二類</h3>
          <ul>
            <li>英語一列＆二列</li>
            <li>(第二外国語)一列＆二列</li>
            <li>
              情報(希望者は発展内容を扱う<span style={{ color: "blue" }}>情報α</span>に変更可。)
            </li>
            <li>身体運動・健康科学実習</li>
            <li>初年次ゼミナール理科</li>
            <li>
              人文科学・社会科学から<span style={{ color: "red" }}>6</span>単位以上
            </li>
            <li>
              数学・統計<span style={{ color: "red" }}>8</span>単位以上(理科三類は<span style={{ color: "red" }}>4</span>単位以上)
            </li>
            <li>物理・化学・生物・地学から2分野以上にわたり8単位以上</li>
          </ul>
        </ul>
      </main>
      <Footer />
    </div>
  );
}
