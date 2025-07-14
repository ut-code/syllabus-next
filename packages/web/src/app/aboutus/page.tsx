import type React from "react";
import { HowToUseItem } from "../how-to-use/HowToUseItem";

const _Blue: React.FC<{ children: string }> = ({ children }) => {
  return <span className="text-tertiary">{children}</span>;
};

const AboutUs: React.FC = () => {
  return (
    <HowToUseItem title="About us">
      私たち ut.code();
      は、2019年度に発足した東京大学のプログラミングサークルです。主にWeb関連の技術を用い、私たちの生活を彩るプログラムを開発することを目標としています。
      <br />
      <a href="https://line.me/R/ti/p/%40nlr3843e">LINE add friend</a>
      <br />
      <a href="https://twitter.com/utokyo_code">X(旧Twitter)</a>
      <br />
      <a href="https://utcode.net">Webサイト</a>
    </HowToUseItem>
  );
};
export default AboutUs;
