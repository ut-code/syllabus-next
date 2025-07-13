import { ClassDataType } from "@/app/type";

/**
 * 講義詳細モーダルの動作確認に利用するサンプルデータ
 */
export const SampleClasses: ClassDataType[] = [
  {
    code: "30003",
    type: "基礎",
    category: "数理科学",
    semester: "S1",
    dayPeriod: [
      { day: "mon", period: 1 },
      { day: "wed", period: 1 },
    ],
    classroom: "駒場5号館 523教室",
    titleJp: "数理科学基礎",
    lecturer: "逆井 卓也",
    titleEn: "Basics of Mathematical Sciences",
    lecturerEn: "SAKASAI Takuya",
    ccCode: "CAS-FC1871L1",
    credits: 2,
    detail:
      "科学・技術の礎となる数理科学の基礎的内容を学び, 高等学校で学んだ数学から大学で学ぶ数学への橋渡しとする.\n\n講義は微分積分と線型代数の二つのテーマからなり, それぞれ通しの授業として開講される. 本科目の講義内容はS2タームから始まる「微分積分学」「線型代数学」に接続する.",
    schedule:
      "講義内容はおおむね以下の通りであるが, 担当教員によっては順序や内容に一部変更が加えられる場合がある.\n\n微分積分\n● 極限と連続性\n実数の連続性. 関数や数列の極限値の厳密な定義, 極限の基本性質, 連続関数の定義, 最大値・最小値の存在, 中間値の定理.\n● 1変数関数の微分\n逆関数の微分, 種々の関数, 原始関数, 微分方程式(変数分離形).\n● 2変数関数のグラフと偏微分\n偏微分係数と偏導関数の定義と計算, 偏微分係数を用いて接平面を表す方法.\n\n線型代数\n● 平面や空間のベクトル\n平面での一次変換とその線型性. 空間ベクトルの内積や外積, 平面のパラメータ表示と方程式. 一般次元の数ベクトル.\n● 行列とその演算\n行列の導入, 行列の和・スカラー倍・積, 逆行列の定義とその2次正方行列の場合の計算, 線型写像とその基本的な性質(特に行列の積との関連).\n● 連立一次方程式と基本変形\n行列による連立一次方程式の表示, 基本変形による解法.\n\n以上の項目に加えて, 述語論理(全称命題, 存在命題, 命題の否定など)および集合と写像(集合の用語と記法. 写像の定義域, 制限, 合成. 単射, 全射, 逆写像など)を学ぶ.\n\nなお, 実数の連続性の詳細や有界閉区間上の連続関数の最大値・最小値の存在, 中間値の定理の証明は「解析学基礎」(一年生も履修可能)で扱う.",
    methods:
      "講義形式であるが, 担当教員によっては適宜小テストやレポートを課すことがある. 成績評価は主として期末試験によって行なう.",
    evaluation:
      "主としてS1ターム末に行われる定期試験によるが, 担当教員によっては小テストやレポートを含めて評価する場合がある.",
    notes:
      "この科目は, S1タームを通じて各週2回の講義からなり, S1ターム末に行われる定期試験は、両曜日の内容を併せたものに対して行われる. この科目の微分積分の部分は, S2ターム及びAセメスターの「微分積分学」に接続し, 線型代数の部分はS2ターム及びAセメスターの「線型代数学」に接続する.",
    class: "1年 理二三(1-7)",
    guidance: "なし",
    guidanceDate: "",
    guidancePeriod: "",
    time: 90,
    timeCompensation:
      "授業の前または後に合計15分程度, 質疑応答の時間を設ける. ",
    targetClass: [
      [
        "s2_1",
        "s3_1",
        "s2_2",
        "s3_2",
        "s2_3",
        "s3_3",
        "s2_4",
        "s3_4",
        "s2_5",
        "s3_5",
        "s2_6",
        "s3_6",
        "s2_7",
        "s3_7",
      ],
      [],
    ],
    importance: [["l1", "l2", "l3", "s1", "s2", "s3"], []],
    shortenedCategory: "基礎",
    shortenedEvaluation: "試験レポ平常",
    shortenedClassroom: "523",
  },
  {
    code: "40303",
    type: "基礎",
    category: "基礎実験",
    semester: "S2",
    dayPeriod: "集中",
    classroom: "その他(学内等) シラバス参照",
    titleJp: "生命科学実験α",
    lecturer: "市橋 伯一",
    titleEn: "Experiments (Biological Sciences)",
    lecturerEn: "ICHIHASHI Norikazu",
    ccCode: "CAS-FC1860E1",
    credits: 1,
    detail:
      "アドバンスト理科・研究入門(生命科学実験α)では、世界的に活躍する担当教員の研究室に意欲溢れる受講者を受け入れ、基礎実験の単位互換として、各研究室で行われている最先端の研究テーマを題材とした実験的研究に取り組みます。\n最先端の研究を体験する中で、実験の方法とデータの取り扱いを学び、研究者としての基本的なスキルを身につけます。\n将来研究者となる高い意欲を持つ駒場生の履修を待っています。",
    schedule:
      "各研究室での授業計画は、関連ホームページ http://kis.c.u-tokyo.ac.jp/ に掲載される「詳細はこちら」を参照してください。",
    methods: "各研究室で担当教員の指導のもと対面授業を行います。",
    evaluation:
      "出席状況、提出物などの状況、研究の達成度などをもとに評価します。",
    notes:
      "S1基礎実験科目「基礎生命科学実験α」を受講していることが前提となります。受講人数に空きがある場合のみ、各研究室で履修者の選抜を行います。各研究室で履修者の選抜を行います。\n各研究室の受け入れ人数は1-2名を予定しています。\n履修希望者は関連ホームページ http://kis.c.u-tokyo.ac.jp/ に掲載される各研究室の授業内容(「詳細はこちら」)を確認した上で、ガイダンスとその後に行われる選抜に参加してください。\n(*)・「基礎生命科学実験α」は、全科類の学生が選抜に参加可能\n(文科生は要求科目として履修、理科一類生はグループ3を選択した場合のみ)\n・「生命科学実験α」は、理科生のみ選抜に参加可能\n(理科一類生はグループ3を選択した場合のみ)\n\nアドバンスト理科・研究入門(基礎生命科学実験α)のオンライン(zoom)ガイダンス\n2024年3月21日(木)13時00分~\n参加 Zoom ミーティング\n【Zoom URLはポータル等にてご確認ください】\n\nこのガイダンスでは、アドバンスト理科・研究入門(基礎生命科学実験α)の全体についての紹介と、各研究室で行う研究内容の紹介、質疑応答を行います。\nその後、各研究室で選抜を行います。\n選抜方法は各研究室で異なりますので、関連ホームページに掲載される各研究室の「詳細はこちら」を確認してください。\n\nオンラインガイダンスへの参加は、各研究室の選抜を受けるための必須条件ではありません。\nしかしながら、アドバンスト理科・研究入門(基礎生命科学実験α)と通常の基礎実験の違いを理解し、本当に履修を希望するかどうかを考えるため、ガイダンスに参加し疑問点を解決しておくことを勧めます。\n\nガイダンス開催日時や各研究室での選抜日時に都合がつかず、ガイダンスや選抜に参加できない場合は、関連ホームページにある問い合わせ先に、受講希望の担当教員を明記した上でその旨を連絡してください。必ず希望通りに対応できるとは限りませんが、可能な範囲で対応します。\n\n選抜結果はS1タームの最初の週までに発表します(詳細は後日お知らせします)。\n\nアドバンスト理科・研究入門の開講曜限は、担当教員と履修者で相談して改めて決定します。\nそのため、本来受講するはずだった基礎実験の曜限とは必ずしも同じになりません。\n本来基礎実験を受講するはずだった曜限は別の授業を履修できます。",
    class: "2年 理科",
    guidance: "別日",
    guidanceDate: "2024年 03月 21日",
    guidancePeriod:
      'その他(「授業目標、概要」参照)/Others(Refer to "Course Objectives")',
    time: 105,
    timeCompensation: "",
    targetClass: [[], ["s1_all", "s2_all", "s3_all"]],
    importance: [["l1", "l2", "l3", "s1", "s2", "s3"], []],
    shortenedCategory: "基礎",
    shortenedEvaluation: "レポ出席",
    shortenedClassroom: "他(学内等)",
  },
  {
    code: "50033",
    type: "基礎",
    category: "既修外国語",
    semester: "A",
    dayPeriod: [
      {
        day: "mon",
        period: 2,
      },
    ],
    classroom: "駒場5号館 516教室",
    titleJp: "英語二列W(ALESA)",
    lecturer: "Simon Perry",
    titleEn: "English Language",
    lecturerEn: "Simon Perry",
    ccCode: "CAS-FC1114S3",
    credits: 2,
    detail:
      "This course introduces students to the skill of building an effective written argument in English supported by sources and evidence, and to the conventions of formal writing. By the end of the course, students will:\n- be able to present a clear position which is supported by evidence and addresses alternative points of view;\n- understand the organisation and rhetorical features of an argumentative essay;\n- be familiar with basic stylistic conventions of academic writing.",
    schedule: "",
    methods:
      "Class activities will include reading and analyzing argumentative writing in English; developing a position on an issue on the basis of individual research; engaging in a variety of pre-writing exercises; writing and revising; and using peer feedback to improve students’ own and others’ work in discussion and written comments.\n\nThe class is taught in English, and students are encouraged to speak English in class. Graduate-student teaching assistants are available in the Komaba Writers’ Studio to help students with their research, writing, and discussion.",
    evaluation:
      "Grades are based on writing assignments, discussion, and participation in class activities.",
    notes: "",
    class: "1年 文一二(8,22)文三(5,7,9)",
    guidance: "なし",
    guidanceDate: "",
    guidancePeriod: "",
    time: 90,
    timeCompensation:
      "Students will be encouraged to contact the instructor by email when they have further questions.",
    targetClass: [
      ["l1_8", "l2_8", "l1_22", "l2_22", "l3_5", "l3_7", "l3_9"],
      [],
    ],
    importance: [["l1", "l2", "l3", "s1", "s2", "s3"], []],
    shortenedCategory: "基礎",
    shortenedEvaluation: "レポ出席平常",
    shortenedClassroom: "516",
  },
  {
    code: "51320",
    type: "総合",
    category: "A(思想・芸術)",
    semester: "A",
    dayPeriod: [
      {
        day: "mon",
        period: 2,
      },
    ],
    classroom: "駒場12号館 1232教室",
    titleJp: "外国文学",
    lecturer: "Barnaby Ralph",
    titleEn: "Foreign Literature",
    lecturerEn: "Barnaby Ralph",
    ccCode: "CAS-GC1A17L1",
    credits: 2,
    detail:
      "Students who take this course will reinforce their knowledge of Western literature, history, and culture, whilst learning about how works can be connected thematically. They will be introduced to key critical terms and will also have opportunities for discussion and a chance to develop their academic writing skills. It is intended to offer information that can continue to be valuable for their future studies.",
    schedule:
      'Week One: The beginnings of Western Literature, including Homer and Greek tragedy\nWeek Two: Greece to Rome, including Horace\'s "Ars Poetica"\nWeek Three: The rise of English, including Anglo-Saxon poetry\nWeek Four: Middle English, Chaucer, and the battle over language\nWeek Five: The Elizabethan period and the plays of Shakespeare\nWeek Six: The short seventeenth century - war, plague, fire, and Milton\nWeek Seven: The long eighteenth century and the satires of Swift and Pope\nWeek Eight: The rise of Romanticism and Sensibility\nWeek Nine: British Imperialism and the nineteenth century\nWeek Ten: Literature in the New World, Manifest Destiny, and the American Dream\nWeek Eleven: Modernism and the search for meaning\nWeek Twelve: In-class test\nWeek Thirteen: Literature from the late twentieth century to today',
    methods:
      "This class shall be conducted using a lecture/discussion format. Handouts will be given each week and these shall form a kind of textbook on which the final examination will be based.",
    evaluation:
      "In-class work (including homework): 20%\nTest: 30%\nEssay: 50%",
    notes:
      "Each week, homework will be given. It is expected that this will be completed by the next class and this will be checked.",
    class: "1年 文科 理科 2年 文科 理科",
    guidance: "なし",
    guidanceDate: "",
    guidancePeriod: "",
    time: 90,
    timeCompensation:
      "The shortened class time wil be compensated for through homework assignments and set readings.",
    targetClass: [
      ["l1_all", "l2_all", "l3_all", "s1_all", "s2_all", "s3_all"],
      ["l1_all", "l2_all", "l3_all", "s1_all", "s2_all", "s3_all"],
    ],
    importance: [[], []],
    shortenedCategory: "総合A",
    shortenedEvaluation: "レポ",
    shortenedClassroom: "1232",
  },
];
