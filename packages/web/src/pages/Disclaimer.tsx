import type React from "react";
import { FaqItem, HowToUseItem } from "../app/how-to-use/HowToUseItem";

const Blue: React.FC<{ children: string }> = ({ children }) => {
  return <span className="text-tertiary">{children}</span>;
};

const disclaimer: React.FC = () => {
  return (
    <HowToUseItem title="免責事項">
      <FaqItem question="情報の精度">
        本サービスにより提供されているデータは、
        <a href="https://utas.adm.u-tokyo.ac.jp/campusweb/campusportal.do">
          <Blue>UTAS</Blue>
        </a>
        と
        <a href="https://catalog.he.u-tokyo.ac.jp">
          <Blue>東京大学授業カタログ</Blue>
        </a>
        がオンラインで公開している情報をベースとしています。データの正確性に関しては保証いたしかねますので、履修の際は必ず公式の資料に目を通してください。本サービスの利用によって生じたいかなる損害についても
        ut.code(); は責任を負いません。
      </FaqItem>
      <FaqItem question="成績評価方法の検索">
        本サービスが提供する成績評価方法の検索機能は、公式に提供されている成績評価方法の情報から「試験」「レポート」などの文字列を検索することにより提供されています。手作業での検証はしておりませんのでご留意ください。
      </FaqItem>
      <FaqItem question="LocalStorageの利用">
        本サービスでは、通信量の削減のため、初回アクセス時に全てのデータをダウンロードしてLocalStorageに保存しています。この情報は、2回目以降のアクセス時に読み込みを高速化する以外の用途には使用されません。
      </FaqItem>
      <FaqItem question="本サービスと東京大学の関係">
        本サービスは ut.code();
        によって運営されており、東京大学は一切運営に関与していません。本サービスが提供するデータは教養学部前期課程教務課に確認の上、機械的に取得されたものです。なお、本サービスで利用されているデータの一切は
        ut.code(); が保有するサーバーに保存されています。
      </FaqItem>
      <FaqItem question="ライセンス">
        本サービスは
        <a href="https://www.apache.org/licenses/LICENSE-2.0.txt">
          <Blue>Apacheライセンス バージョン2.0</Blue>
        </a>
        の下で提供されている Google Material Icons をその一部に含みます。
      </FaqItem>
    </HowToUseItem>
  );
};
export default disclaimer;
