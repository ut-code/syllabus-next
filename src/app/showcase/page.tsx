"use client"

import { useState } from "react"
import FilterUI from "@/components/FilterUI/FilterUI"
import TimetableFrame from "@/components/Timetable/timetableFrame"
import ClassModal from "@/components/ClassModal"
import { Class, RegisterType, Semester } from "@/type"
import Link from "next/link"

export default function ShowcasePage() {
  const [showClassModal, setShowClassModal] = useState(false)
  const [selectedClass, setSelectedClass] = useState<Class | null>(null)

  // サンプルデータ
  const sampleClass: Class = {
    code: "0505003",
    type: "基礎科目",
    subtype: "基礎科目 人文科学",
    classNumber: "文科一類",
    className: "現代哲学",
    credit: 2,
    targetGrade: ["1年", "2年"],
    semester: "A1" as Semester,
    evaluation: ["レポート", "平常点"],
    instructor: "教授 山田太郎",
    dayAndPeriod: [{ day: "月", period: 2 }],
    classroom: "駒場1号館 101教室",
    abstract: "この授業では現代哲学の主要な思想家と概念について学びます。",
    caution: "特になし",
    classNumberJa: "文科一類",
    classNameJa: "現代哲学",
    instructorJa: "教授 山田太郎",
    abstractJa: "この授業では現代哲学の主要な思想家と概念について学びます。",
    cautionJa: "特になし",
    onlineInfo: "",
    link: "https://example.com"
  }

  const dummyRegisterData: RegisterType = {
    timetable: {
      S1: {},
      S2: {},
      A1: {
        月2: { classData: sampleClass },
        火3: {
          classData: {
            ...sampleClass,
            code: "0505004",
            className: "社会学入門",
            classNameJa: "社会学入門",
            dayAndPeriod: [{ day: "火", period: 3 }]
          }
        }
      },
      A2: {},
      W: {},
      "通年": {}
    },
    allClasses: [sampleClass],
    filterCondition: {
      conditions: [],
      keywords: []
    }
  }

  const handleClassClick = () => {
    setSelectedClass(sampleClass)
    setShowClassModal(true)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">コンポーネント一覧</h1>
          <p className="text-text-secondary mb-4">
            シ楽バスの主要なコンポーネント
          </p>
          <Link href="/" className="text-primary hover:underline">
            ← ホームに戻る
          </Link>
        </div>

        <div className="space-y-12">
          {/* FilterUI セクション */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">FilterUI - フィルター機能</h2>
            <p className="text-text-secondary mb-4">
              授業を様々な条件で絞り込むことができるフィルターコンポーネントです。
            </p>
            <div className="bg-surface rounded-lg p-4 shadow-md">
              <FilterUI 
                registerData={dummyRegisterData}
                setRegisterData={() => {}}
                search={() => {}}
                isSearched={false}
              />
            </div>
          </section>

          {/* Timetable セクション */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Timetable - 時間割表示</h2>
            <p className="text-text-secondary mb-4">
              選択した授業を時間割形式で表示するコンポーネントです。A1ターム（月2、火3）にサンプル授業が表示されています。
            </p>
            <div className="bg-surface rounded-lg p-4 shadow-md overflow-x-auto">
              <TimetableFrame 
                registerData={dummyRegisterData}
                semester="A1"
                setClickedClassModal={() => {}}
                setClickedClass={() => {}}
              />
            </div>
          </section>

          {/* ClassModal セクション */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">ClassModal - 授業詳細モーダル</h2>
            <p className="text-text-secondary mb-4">
              授業の詳細情報を表示するモーダルコンポーネントです。
            </p>
            <button
              onClick={handleClassClick}
              className="bg-primary text-on-primary px-6 py-3 rounded-lg hover:bg-primary-container transition-colors"
            >
              サンプル授業の詳細を表示
            </button>
            
            {showClassModal && selectedClass && (
              <ClassModal
                clickedClass={selectedClass}
                setClickedClassModal={setShowClassModal}
                registerData={dummyRegisterData}
                setRegisterData={() => {}}
              />
            )}
          </section>

          {/* 機能説明 */}
          <section className="mt-12 p-6 bg-surface-variant rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">各コンポーネントの機能</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">🔍 FilterUI</h3>
                <ul className="list-disc list-inside space-y-1 text-text-secondary">
                  <li>授業タイプ（基礎科目、総合科目など）での絞り込み</li>
                  <li>評価方法（試験、レポート、平常点）での絞り込み</li>
                  <li>フリーワード検索</li>
                  <li>学期選択</li>
                  <li>登録済み授業の表示切り替え</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">📅 Timetable</h3>
                <ul className="list-disc list-inside space-y-1 text-text-secondary">
                  <li>選択した学期の時間割を表示</li>
                  <li>曜日・時限ごとに授業を配置</li>
                  <li>授業をクリックして詳細表示</li>
                  <li>レスポンシブ対応</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">📋 ClassModal</h3>
                <ul className="list-disc list-inside space-y-1 text-text-secondary">
                  <li>授業の詳細情報（単位数、教員、教室など）を表示</li>
                  <li>授業概要と注意事項の確認</li>
                  <li>時間割への登録・削除機能</li>
                  <li>モーダル表示で操作性を向上</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
