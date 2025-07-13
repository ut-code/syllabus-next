import type React from "react";
import { HowToUseItem } from "../how-to-use/HowToUseItem";

const Notion: React.FC = () => {
  return (
    <div>
      <HowToUseItem title="特に注意すること">
        <ul className="list-disc pl-5 space-y-3">
          <li>
            <span className="text-red-600 font-bold underline">英語中級</span>・
            <span className="text-red-600 font-bold underline">
              初年次ゼミナール
            </span>
            には抽選があるので、期日までに希望を出す
          </li>
          <li>クラス指定の総合科目は必ずしも履修する必要はない</li>
          <li>
            1セメスターにつき、履修可能なのは
            <span className="text-red-600">30</span>単位まで (集中講義,
            TLPを除く)
          </li>
          <li>総合科目よりも基礎科目の成績を優先する</li>
          <li>前期課程修了には追加で2~4単位必要になる</li>
        </ul>
      </HowToUseItem>

      <HowToUseItem title="単位数の数え方">
        <ul className="list-disc pl-5 space-y-3">
          <li>ターム制で週1コマ → 1単位</li>
          <li>ターム制で週2コマ → 2単位</li>
          <li>セメスター制で週1コマ → 2単位</li>
          <li>実験や実習は上記の半分の単位</li>
        </ul>
      </HowToUseItem>
      {/* <HowToUseItem title="進学に必要な単位">
        <FaqItem question="文科一類">
        <ul className="list-disc pl-5 space-y-2">
              <li>英語一列＆二列</li>
              <li>(第二外国語)一列＆二列</li>
              <li>
                情報(希望者は発展内容を扱う情報αに変更可。)
              </li>
              <li>身体運動・健康科学実習</li>
              <li>初年次ゼミナール文科</li>
              <li>
                人文科学(「哲学」「倫理」「歴史」「心理」「ことばと文学」から2分野以上にわたり4単位以上)
              </li>
              <li>
                社会科学(「法Ⅰ+法Ⅱ」または「政治Ⅰ+政治Ⅱ」を含み8単位以上)
              </li>
            </ul>
        </FaqItem>
      </HowToUseItem> */}
      <HowToUseItem title="進学に必要な単位(基礎科目)">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="border-2 border-primary p-4 rounded-lg col-span-2">
            <h3 className="text-xl font-bold text-blue-600">文科一類</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>英語一列＆二列</li>
              <li>(第二外国語)一列＆二列</li>
              <li>情報(希望者は発展内容を扱う情報αに変更可。)</li>
              <li>身体運動・健康科学実習</li>
              <li>初年次ゼミナール文科</li>
              <li>
                人文科学(「哲学」「倫理」「歴史」「心理」「ことばと文学」から2分野以上にわたり4単位以上)
              </li>
              <li>社会科学(「法Ⅰ+法Ⅱ」または「政治Ⅰ+政治Ⅱ」を含み8単位以上)</li>
            </ul>
          </div>
          <div className="border-2 border-primary p-4 rounded-lg col-span-2">
            <h3 className="text-xl font-bold text-blue-600">文科二類</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>英語一列＆二列</li>
              <li>(第二外国語)一列＆二列</li>
              <li>情報(希望者は発展内容を扱う情報αに変更可。)</li>
              <li>身体運動・健康科学実習</li>
              <li>初年次ゼミナール文科</li>
              <li>
                人文科学(「哲学」「倫理」「歴史」「心理」「ことばと文学」から2分野以上にわたり4単位以上)
              </li>
              <li>
                社会科学：「経済Ⅰ」「経済Ⅱ」「数学Ⅰ」「数学Ⅱ」から4単位以上を含み8単位以上
              </li>
            </ul>
          </div>
          <div className="border-2 border-primary p-4 rounded-lg col-span-2">
            <h3 className="text-xl font-bold text-blue-600">文科三類</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>英語一列＆二列</li>
              <li>(第二外国語)一列＆二列</li>
              <li>情報(希望者は発展内容を扱う情報αに変更可。)</li>
              <li>身体運動・健康科学実習</li>
              <li>初年次ゼミナール文科</li>
              <li>
                人文科学(「哲学」「倫理」「歴史」「心理」「ことばと文学」から2分野以上にわたり4単位以上)
              </li>
              <li>
                　社会科学：「法」「政治」「社会」「経済」「数学」から2分野以上にわたり4単位以上
              </li>
            </ul>
          </div>
          <div className="border-2 border-primary p-4 rounded-lg col-span-2">
            <h3 className="text-xl font-bold text-blue-600">理科一類</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>英語一列＆二列</li>
              <li>(第二外国語)一列＆二列</li>
              <li>情報(希望者は発展内容を扱う情報αに変更可。)</li>
              <li>身体運動・健康科学実習</li>
              <li>初年次ゼミナール理科</li>
              <li>
                基礎実験(1A1ターム、1A2ターム、2S1タームのもの。2S2タームの基礎実験は任意。希望者は発展内容を扱う基礎実験αに変更可。)
              </li>
              <li>
                数理科学(数理科学基礎、数理科学基礎演習、数学基礎理論演習、微分積分学（①、②、演習）、線型代数学（①、②、演習）)
              </li>
              <li>
                力学A、電磁気学A(入試で物理を受けなかった人は力学B、電磁気学Bに変更可。)
              </li>
              <li>熱力学(入試で物理を受けなかった人は化学熱力学に変更可。)</li>
              <li>構造化学(希望者は発展内容を扱う構造化学αに変更可。)</li>
              <li>生命科学、物性化学(2年生)</li>
            </ul>
          </div>
        </div>
      </HowToUseItem>
      <HowToUseItem title="進学に必要な単位(基礎科目以外)　※既習外国語が英語の場合">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="border-2 border-primary p-4 rounded-lg">
            <h3 className="text-xl font-bold text-blue-600">
              文科一類、文科二類
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                総合A~C系列：2系列以上で<span className="text-red-600">6</span>
                単位
              </li>
              <li>
                総合D~F系列：2系列以上で<span className="text-red-600">6</span>
                単位
              </li>
              <li>
                総合L系列：「英語中級」「英語上級」から3単位以上、初修外国語の演習①と②、その他から2単位以上
              </li>
              <li>主題科目：2単位以上</li>
              <li>展開科目：0単位以上(履修しなくても良い)</li>
              <li>さらに、前期課程修了に必要な単位：4単位</li>
            </ul>
          </div>
          <div className="border-2 border-primary p-4 rounded-lg">
            <h3 className="text-xl font-bold text-blue-600">文科三類</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                総合A~C、L系列：「英語中級」「英語上級」から3単位以上、初修外国語の演習①と②、その他から3系列以上にわたり10単位以上
              </li>
              <li>
                総合D~F系列：<span className="text-red-600">8</span>単位以上
              </li>
              <li>主題科目：2単位以上</li>
              <li>展開科目：0単位以上(履修しなくても良い)</li>
              <li>さらに、前期課程修了に必要な単位：4単位</li>
            </ul>
          </div>
          <div className="border-2 border-primary p-4 rounded-lg col-span-2">
            <h3 className="text-xl font-bold text-blue-600">
              理科一類、理科二類、理科三類
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>総合A~D系列：2系列以上にわたり6単位以上</li>
              <li>総合E~F系列：2系列以上にわたり6単位以上</li>
              <li>
                総合L系列：「英語中級」「英語上級」から3単位以上(既修外国語が英語の場合)
              </li>
              <li>主題科目：2単位以上</li>
              <li>展開科目：0単位以上(履修しなくても良い)</li>
              <li>
                さらに、前期課程修了に必要な単位：理科一類は3単位、理科二類と理科三類は2単位
              </li>
            </ul>
          </div>
        </div>
      </HowToUseItem>
    </div>
  );
};

export default Notion;
