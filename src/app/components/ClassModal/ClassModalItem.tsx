

import React from 'react';

/**
 * 講義詳細を表示するモーダルの中で利用する
 * 項目タイトルとその説明をセットで表示するコンポーネント
 * @param param0 プロパティ
 * @param param0.title 項目タイトル
 * @param param0.description 詳細な説明
 * @returns コンポーネント
 */
const ClassModalItem = ({ title, description }:{title:string, description:string}) => {
    return (
        <div className="flex flex-col w-full h-full my-4">
        <h3 className="text-lg text-secondary">{title}</h3>
        <div className="my-1 h-px bg-secondary" />
        <p>{description}</p>
        </div>
    );
}

export default ClassModalItem;