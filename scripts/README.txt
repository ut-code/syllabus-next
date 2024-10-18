# 後期課程の授業をスクレイピングするスクリプト

## 1. Quick Start
https://catalog.he.u-tokyo.ac.jp/resultにある授業情報を取得するスクリプトです。ページに移動したときに、
左側に学科を選ぶとhttps://catalog.he.u-tokyo.ac.jp/result?type=ug&faculty_id=1のようになります。faculty_idが学科のIDです。
data.pyのUrlsに学部とそのurlを追加してください。すでに全ての学科のIDが入っているので、特に追加するような状況にならない限りは変更する必要はありません。

以下のコマンドを実行すると、/dataに授業情報がjson形式で保存されます。

```bash
cd /path/to/scripts
pip3 install -r requirements.txt
python3 main.py
```