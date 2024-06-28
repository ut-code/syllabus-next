import React from "react";
import {
  ClassMark,
  FaqItem,
  FilterCard,
  HowToUseItem,
  QuickStartItem,
} from "./HowToUseItem";
import { MdOutlineInfo } from "react-icons/md";

const Blue: React.FC<{ children: string }> = ({ children }) => {
  return <span className="text-tertiary">{children}</span>;
};

const HowToUsePage: React.FC = () => {
  return (
    <>
      <HowToUseItem title="Quick Start">
        本サービスは以下の3つの手順で使用を開始できます。
        <ol className="list-decimal list-inside mt-8">
          <QuickStartItem title="所属の設定">
            開始後”はじめる”をクリックすると、使用者の所属を入力する画面が表示されます。ここで項目を入力後”OK”を選択してください。
          </QuickStartItem>
          <QuickStartItem title="時間割の編集">
            画面上部のタブ(ヘッダー)から”Edit”を選択し、時間割編集モードに入ってください。ここでは様々な条件で講義を検索できます
            (詳しくは**時間割を編集**の項目を参照)
            。ここでは例として、曜限の指定により授業を検索してみます。画面上部の時間割表からお好きな曜限を選択します。検索結果一覧が更新されるため、ここから好きな講義を選択してください。講義の詳細が表示されるため、画面右上の
            <Blue>”追加”</Blue>
            ボタンをクリックしてください。以上で講義を時間割に追加することができました。
          </QuickStartItem>
          <QuickStartItem title="時間割の閲覧">
            画面上部のタブ (ヘッダー)
            の”View”を選択してください。先ほど選択した講義が追加されていることを確認できます。講義をクリックすると、その詳細情報が表示されます。
            <br />
            普段はViewモードで使用し、履修登録期間はEditモードで編集すると便利です。
          </QuickStartItem>
        </ol>
      </HowToUseItem>

      <HowToUseItem title="所属の設定">
        使用者の所属（クラス）を設定することで、そのクラスの
        <Blue>必修科目や推奨科目が自動で登録され、</Blue>
        手間を省くことができます。
        仮に一つも授業が登録されていない、真っ新な状態から作成したい場合は
        <Blue>”必修を自動入力”</Blue>
        のチェックを外してください。
        <div className="bg-surface-container-high mt-8 p-4">
          <div className="mb-4 text-lg flex items-center">
            <MdOutlineInfo className="mr-2 text-xl" /> 注意
          </div>
          <div>
            英語や基礎実験などは同じクラスの中でも履修が分かれるため、「必修を自動入力」を押して進むと考えられる全ての授業が登録され「英語二列S(FLOW)(14)」のように表示されてしまいます。
            <br />
            自分の取る先生の授業以外は削除するとよいでしょう。
          </div>
        </div>
      </HowToUseItem>
      <HowToUseItem title="時間割を編集 (Editモード)">
        1. 画面上部のタブ(ヘッダー)から
        <Blue>”Edit”</Blue>
        を選択し、時間割編集モードに入ります。 <br />
        2.
        お好きな検索条件でフィルターを掛けます(下記”検索フィルター一覧”を参照)。そのつど検索結果が更新されます。
        <br />
        3.
        条件に合う講義が一覧表示されます。好きな講義を選択すると詳細画面が表示されるため、右上の
        <Blue>”追加”</Blue>
        ボタンから時間割表に追加します。
        <div className="flex flex-wrap gap-4 pt-8">
          <FilterCard
            title="フリーワード"
            detail="入力フィールドの右にあるボタンから、検索対象を「講義名」と「講義の情報全て」をスイッチできます。"
            onReset="変化しません"
          />
          <FilterCard
            title="曜限"
            detail="上部の時間割表からコマを選択します。複数選択が可能です。例えば月曜１限のコマと月曜３限のコマをクリックすると、月曜１限もしくは月曜３限に開かれる科目のみが表示されます。1つも選択していない場合、曜限フィルターはかかりません。"
            onReset="全選択"
          />
          <FilterCard
            title="学期"
            detail="開講区分S, A, S1, S2, A1, A2でフィルターを掛けます。S（セメスター制）でフィルターを掛けた場合、S1やS2（ターム制）の講義は除外されるので注意しましょう。"
            onReset="全選択"
          />
          <FilterCard
            title="評価方法"
            detail="出席やテスト、レポートなど、特定の評価方法を含める、または除外するフィルターを掛けます。評価方法の有無はシラバスの情報のみから判断しているため、正しくない場合があります。"
            onReset="選択解除"
          />
          <FilterCard
            title="種別"
            detail="基礎、要求、主題、展開、総合でフィルターを掛けます。"
            onReset="総合のみ選択"
          />
          <FilterCard
            title="登録"
            detail="既に時間割に追加されているか否かでフィルターを掛けます。"
            onReset="全選択"
          />
        </div>
      </HowToUseItem>
      <HowToUseItem title="時間割を閲覧 (Viewモード)">
        画面上部のタブ(ヘッダー)から
        <Blue>”View”</Blue>
        を選択し、時間割編集モードに入ります。
        <br />
        講義を選択すると、その詳細情報を見ることができます。
        <br />
        その講義が<Blue>必修</Blue>
        (もしくは)
        <Blue>推奨</Blue>
        である場合、講義名に下記マークが付けられます。
        <div className="flex flex-wrap gap-8 pt-8">
          <ClassMark
            title="必修"
            detail="前期課程修了要件に入っており、必ず取らなければなりません。"
            mark={<span className="text-error">◆</span>}
          />
          <div className="w-[1px] bg-outline/30"></div>
          <ClassMark
            title="推奨"
            detail="前期課程修了要件に指定がありますが、他の講義との選択制になっている講義です。取ると履修が捗るため「必修」ではなく「推奨」の表示としています。"
            mark={<Blue>▲</Blue>}
          />
        </div>
      </HowToUseItem>
      <HowToUseItem title="FAQ">
          <FaqItem question="カレンダーから授業を削除したい">
            画面上部のタブから<Blue>”Edit”</Blue>
            を選択し、時間割編集モードに入ります。「検索結果:○○件」の右側にある「登録中の講義」を押すと、現在カレンダーに登録されている講義の一覧が、検索結果と同じように表示されます。削除したい講義の欄にある
            <Blue>”削除”</Blue>
            ボタンをクリックします。
          </FaqItem>
          <FaqItem question="表示されている単位数は、どのように計算している？">
            基本的には、登録している授業の全ての単位数を足し算しています。ただし、同じ曜限に同じ名前の科目が複数ある場合は、1つの授業のみとみなして単位計算に含めています。
          </FaqItem>
          <FaqItem question="講義名につけられた”（数字）”は何ですか?">
            その曜限に開講される必修講義に選択肢がある場合に付与される数字です。選択肢の数を示しています。自分の受ける講義が確定したら、上記の「カレンダーから授業を削除したい」に従って、関係ない講義を削除しましょう。
          </FaqItem>
          <FaqItem question="探している講義が検索結果に表示されない">
            検索フィルターによりはじかれている可能性があります。曜限によるフィルターや検索条件を見直してください。
          </FaqItem>
          <FaqItem question="同じ講義が複数コマに登録された">
            所属により開講時間が異なる場合に起こります。シラバスの情報をもとに適切な講義のみを残してください(Editモードから不要な講義を削除できます)。
          </FaqItem>
          <FaqItem question="サービスを向上してください">
            こちらの
            <a href="https://forms.gle/stBdKuCsXm8LUdBm8">
              ご意見・お問い合わせフォーム
            </a>
            からご意見をお寄せください。
          </FaqItem>
      </HowToUseItem>
    </>
  );
};

export default HowToUsePage;
