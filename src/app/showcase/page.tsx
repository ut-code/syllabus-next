"use client"

import { useState } from "react"
import { FilterUI } from "@/app/components/FilterUI/FilterUI"
import TimetableFrame from "@/app/components/Timetable/timetableFrame"
import ClassModal from "@/app/components/ClassModal"
import { ClassDataType, RegisterType, Semester } from "@/app/type"
import Link from "next/link"

export default function ShowcasePage() {
  const [showClassModal, setShowClassModal] = useState(false)
  const [selectedClass, setSelectedClass] = useState<ClassDataType | null>(null)

  // サンプルデータ
  const sampleClass: ClassDataType = {
    code: "0505003",
    type: "基礎科目",
    category: "基礎科目 人文科学",
    semester: "A1",
    dayPeriod: [{ day: "mon", period: 2 }],
    classroom: "駒場1号館 101教室",
    titleJp: "現代哲学",
    lecturer: "教授 山田太郎",
    titleEn: "Modern Philosophy",
    lecturerEn: "Prof. Taro Yamada",
    ccCode: "PHI101",
    credits: 2,
    detail: "この授業では現代哲学の主要な思想家と概念について学びます。",
    schedule: "毎週月曜2限",
    methods: "講義形式",
    evaluation: "レポート70%、平常点30%",
    notes: "特になし",
    class: "文科一類",
    guidance: "初回授業で説明",
    guidanceDate: "4月10日",
    guidancePeriod: "2限",
    time: 90,
    timeCompensation: "なし",
    targetClass: [["文科一類"], ["文科二類"]],
    importance: [["必修"], ["選択"]],
    shortenedCategory: "基礎",
    shortenedEvaluation: "レポート",
    shortenedClassroom: "駒場1-101"
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
            titleJp: "社会学入門",
            titleEn: "Introduction to Sociology",
            dayPeriod: [{ day: "tue", period: 3 }]
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
          <Link href="/" className="text-primary hover:underline">
            ← ホームに戻る
          </Link>
        </div>

        <div className="space-y-12">
          {/* FilterUI セクション */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">FilterUI - フィルター機能</h2>
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
            <div className="bg-surface rounded-lg p-4 shadow-md overflow-x-auto">
              <TimetableFrame 
                hasSaturday={false}
                classSlotElement={(classes) => (
                  <div className="w-full h-full flex items-center justify-center">
                    {classes.map((c, i) => (
                      <div
                        className="flex w-full h-full items-center justify-center min-w-0 m-1"
                        key={i}
                      >
                        <div className="cursor-pointer bg-secondary/10 w-full h-5/6 max-w-40">
                          <div className="m-2 text-sm font-bold truncate">
                            {c.titleJp}
                          </div>
                          <div className="m-2 text-xs text-text-default/50 text-wrap">
                            {c.classroom}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                periodSlotElement={(p) => <div className="text-center font-medium">{p}限</div>}
                daySlotElement={(d) => {
                  const dayMap = {
                    mon: "月",
                    tue: "火",
                    wed: "水",
                    thu: "木",
                    fri: "金",
                    sat: "土"
                  };
                  return <div className="text-center font-medium">{dayMap[d]}</div>;
                }}
              />
            </div>
          </section>

          {/* ClassModal セクション */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">ClassModal - 授業詳細モーダル</h2>
            <button
              onClick={handleClassClick}
              className="bg-primary text-on-primary px-6 py-3 rounded-lg hover:bg-primary-container transition-colors"
            >
              サンプル授業の詳細を表示
            </button>
            
            {showClassModal && selectedClass && (
              <ClassModal
                isOpen={showClassModal}
                onCloseButtonClicked={() => setShowClassModal(false)}
                classData={selectedClass}
              />
            )}
          </section>
        </div>
      </div>
    </div>
  )
}
