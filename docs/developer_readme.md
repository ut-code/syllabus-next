## セットアップ

リポジトリをクローンした後、必要なパッケージをインストールする必要があります。  
リポジトリのルートディレクトリで以下のコマンドを実行してください。

```bash
bun install --frozen-lockfile
```

## 開発

開発モードを実行するには、以下のコマンドを実行してください。

```bash
bun dev
```

コードをプッシュする前に、コード品質をチェックするために以下のコマンドを実行してください。

```bash
bun check
```

もしコード品質チェックでエラーがある場合は、以下のコマンドを実行して修正してください。

```bash
bun fix
```

## モックモード

モックモードを実行するには、以下のコマンドを実行してください。

```bash
bun dev:mock
```

このコマンドを実行すると、モックデータを使用してアプリケーションが実行されます。

## 関数やクラスの説明

### 1. Userのデータを扱う場合 (src/app/utils/user.ts)

Userのデータは`User`クラスを使用して扱います。Userのデータは以下の場合があります。

- `bun dev:mock`を実行した場合
  - Userはモックのデータが使用されます。
- `bun dev`を実行した場合
  - UserはlocalStorageに保存されたデータが使用されます。

ただ、まだユーザを登録する機能がないので、mockでユーザを作成する必要があります。

## 推奨 VS Code 設定

```json
{
	"editor.codeActionsOnSave": {
		"source.biome": "always",
		"source.organizeImports.biome": "always"
	}
}
```

## Storybookの使用
```bash
bun run storybook
```
 - localhost:6006にStorybookが立ち上がるので、そこでUIを確認してください。
