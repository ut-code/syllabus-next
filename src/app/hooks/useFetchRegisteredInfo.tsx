"use client";

/**
 * `useFetchRegisteredInfo`
 *
 * このフックは、ローカルストレージから登録情報を取得し、状態として保持します。
 * @returns {object} - `registerdInfo` と `setRegisterdInfo` を含むオブジェクト
 * @returns {Registertype} return.registerdInfo - 登録情報
 * @returns {React.Dispatch<React.SetStateAction<Registertype>>} return.setRegisterdInfo - 登録情報を更新するための関数
 */

import { useState, useEffect } from "react";
import { RegisterType } from "@/type";

const useFetchRegisteredInfo = (): {
  registeredInfo: RegisterType;
  setRegisteredInfo: React.Dispatch<React.SetStateAction<RegisterType>>;
} => {
  const [registeredInfo, setRegisteredInfo] = useState<RegisterType>({
    stream: undefined,
    grade: undefined,
    classNumber: undefined,
  });

  // SSRで初期化されないように、useEffectでローカルストレージから取得
  useEffect(() => {
    // 一度登録情報を取得したら、再度取得しない 無限ループを防ぐ
    if (
      registeredInfo.stream &&
      registeredInfo.grade &&
      registeredInfo.classNumber
    ) {
      return;
    }

    const _stream = localStorage.getItem("stream");
    const _grade = localStorage.getItem("grade");
    const _classNumber = localStorage.getItem("classNumber");

    if (_stream && _grade && _classNumber) {
      setRegisteredInfo({
        stream: _stream,
        grade: _grade,
        classNumber: _classNumber,
      });
    }
  }, [registeredInfo]);

  return { registeredInfo, setRegisteredInfo };
};

export default useFetchRegisteredInfo;
