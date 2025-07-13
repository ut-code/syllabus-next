import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        // 13列のグリッドを定義
        "11": "repeat(11, minmax(0, 1fr))",
        "13": "repeat(13, minmax(0, 1fr))",
      },
      gridTemplateRows: {
        // 15行のグリッドを定義
        "15": "repeat(15, minmax(0, 1fr))",
      },
    },

    colors: {
      /*
       * global.cssで定義した色の定義を参照
       * (ダークモードかライトモードかで色が変わる)
       *
       * Material designに乗っ取った配色となっている
       * 色の種類は 1-3次色とエラー色の4種類が定義されており、
       * それぞれに対し、containerとonの属性が存在
       *
       * on-xxx : xxxが背景の時の文字色
       * xxx-container : よりbgに近い、明るいxxx色(FAB(浮いて見えるボタン)や、
       * on-xxx-container : container-xxxが背景の時の文字色(トグルの塗りつぶし、input要素の塗りつぶしなどに用いる)
       *
       * material designの公式ドキュメント
       * 具体的な使い方などはこちらを参照
       * https://m3.material.io/styles/color/roles
       *
       */

      /* 1次色 テーマとなる色 強調したい要素に用いる */
      primary: "rgb(var(--color-primary) / <alpha-value>)",
      "on-primary": "rgb(var(--color-on-primary) / <alpha-value>)", // テーマ色が背景の時の文字色
      "primary-container":
        "rgb(var(--color-primary-container) / <alpha-value>)", // よりbgに近い、明るいテーマ色(FAB(浮いて見えるボタン)や、トグルの塗りつぶし、input要素の塗りつぶしなどに用いる)
      "on-primary-container":
        "rgb(var(--color-on-primary-container) / <alpha-value>)", // primary-containerが背景の時の文字色

      /* 2次色 テーマより控えめな色 primaryほど強調したくない要素に用いる */
      secondary: "rgb(var(--color-secondary) / <alpha-value>)", // primaryに対して目立たない色(そこまで重要でないUIに用いる)
      "on-secondary": "rgb(var(--color-on-secondary) / <alpha-value>)", // secondaryが背景の時の文字色
      "secondary-container":
        "rgb(var(--color-secondary-container) / <alpha-value>)", // 明るい(目立たない)secondary色
      "on-secondary-container":
        "rgb(var(--color-on-secondary-container) / <alpha-value>)", // secondary-containerが背景の時の文字色

      /* 3次色 テーマとは異なる色相でアクセントとなる ユーザーの目線を引く */
      tertiary: "rgb(var(--color-tertiary) / <alpha-value>)", // テーマ色と対照的なアクセントとなり、ユーザーの目線を誘導できる
      "on-tertiary": "rgb(var(--color-on-tertiary) / <alpha-value>)", // tertiaryが背景の時の文字色
      "tertiary-container":
        "rgb(var(--color-tertiary-container) / <alpha-value>)", // 明るいtertiary色
      "on-tertiary-container":
        "rgb(var(--color-on-tertiary-container) / <alpha-value>)", // tertiary-containerが背景の時の文字色

      /* エラー色 目立つ */
      error: "rgb(var(--color-error) / <alpha-value>)", // エラーを示す色
      "on-error": "rgb(var(--color-on-error) / <alpha-value>)", // errorが背景の時の文字色
      "error-container": "rgb(var(--color-error-container) / <alpha-value>)", // 明るいerror色
      "on-error-container":
        "rgb(var(--color-on-error-container) / <alpha-value>)", // error-containerが背景の時の文字色

      /*
       * 背景色(レガシー?)
       * レガシーな色の定義で、surfaceを用いるよう公式ドキュメントに記載がある(らしいが、見つからない)
       * https://stackoverflow.com/questions/77292102/what-are-the-guidelines-on-when-to-use-surface-vs-background-color-in-materi
       *
       * 公式の使用例でも主にsurfaceを用いているため、surfaceを用いるようにしたい
       */
      background: "rgb(var(--color-background) / <alpha-value>)",
      "on-background": "rgb(var(--color-on-background) / <alpha-value>)",

      /* 背景色 */
      // 画面全体を覆う色はsurface containerを用いて、
      // コンテンツを表示する(カード)要素の背景はsurfaceを用いる
      surface: "rgb(var(--color-surface) / <alpha-value>)",
      "on-surface": "rgb(var(--color-on-surface) / <alpha-value>)",

      // surface container
      // 明(lowest) -> 暗(highest)
      "surface-container-lowest":
        "rgb(var(--color-surface-container-lowest) / <alpha-value>)",
      "surface-container-low":
        "rgb(var(--color-surface-container-low) / <alpha-value>)",
      "surface-container":
        "rgb(var(--color-surface-container) / <alpha-value>)",
      "surface-container-high":
        "rgb(var(--color-surface-container-high) / <alpha-value>)",
      "surface-container-highest":
        "rgb(var(--color-surface-container-highest) / <alpha-value>)",

      "surface-variant": "rgb(var(--color-surface-variant) / <alpha-value>)", // surfaceよりも暗い色
      "on-surface-variant":
        "rgb(var(--color-on-surface-variant) / <alpha-value>)", // surface-variantが背景の時の文字色

      /* アウトライン */
      // 2種類のアウトライン色
      outline: "rgb(var(--color-outline) / <alpha-value>)", // インプットフィールドなど、重要な要素に用いる
      "outline-variant": "rgb(var(--color-outline-variant) / <alpha-value>)", // 要素の装飾に用いる(分割線など)

      /* inverse colors*/
      // 背景色と文字色のコントラストを逆転する
      "inverse-surface": "rgb(var(--color-inverse-surface) / <alpha-value>)",
      "inverse-on-surface":
        "rgb(var(--color-inverse-on-surface) / <alpha-value>)",
      "inverse-primary": "rgb(var(--color-inverse-primary) / <alpha-value>)", // inverse-surface上のprimary色

      /* Fixed accent colors */
      // ダークとライトモードで変化しない色設定
      // fixed背景には、on-xxx-fixedで文字(アイコン)を記述する
      "primary-fixed": "rgb(var(--color-primary-fixed) / <alpha-value>)",
      "on-primary-fixed": "rgb(var(--color-on-primary-fixed) / <alpha-value>)",
      "primary-fixed-dim":
        "rgb(var(--color-primary-fixed-dim) / <alpha-value>)",
      "on-primary-fixed-variant":
        "rgb(var(--color-on-primary-fixed-variant) / <alpha-value>)",
      "secondary-fixed": "rgb(var(--color-secondary-fixed) / <alpha-value>)",
      "on-secondary-fixed":
        "rgb(var(--color-on-secondary-fixed) / <alpha-value>)",
      "secondary-fixed-dim":
        "rgb(var(--color-secondary-fixed-dim) / <alpha-value>)",
      "on-secondary-fixed-variant":
        "rgb(var(--color-on-secondary-fixed-variant) / <alpha-value>)",
      "tertiary-fixed": "rgb(var(--color-tertiary-fixed) / <alpha-value>)",
      "on-tertiary-fixed":
        "rgb(var(--color-on-tertiary-fixed) / <alpha-value>)",
      "tertiary-fixed-dim":
        "rgb(var(--color-tertiary-fixed-dim) / <alpha-value>)",
      "on-tertiary-fixed-variant":
        "rgb(var(--color-on-tertiary-fixed-variant) / <alpha-value>)",

      /* dim and bright */
      // 通常のsurfaceと違い、
      // dim : ライトモードで、やや暗い色となる(ダークモードでは変わらない)
      // bright : ダークモードで、やや明るい色となる(ライトモードでは変わらない)
      "surface-dim": "rgb(var(--color-surface-dim) / <alpha-value>)",
      "surface-bright": "rgb(var(--color-surface-bright) / <alpha-value>)",

      /* その他 */
      shadow: "rgb(var(--color-shadow) / <alpha-value>)", // 影
      scrim: "rgb(var(--color-scrim) / <alpha-value>)", // スクリム(背景を暗くして目立たなくする際の色。モーダルなどで使用)

      "surface-tint": "rgb(var(--color-surface-tint) / <alpha-value>)", // !!非推奨!!

      /* テキスト色 */
      "text-default": "rgb(var(--color-text-default) / <alpha-value>)",
    },
  },
  plugins: [],
};
export default config;
