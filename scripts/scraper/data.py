from pydantic import BaseModel

class Urls(dict[str, str]):
    law: str
    medicine: str
    engineering: str
    arts: str
    science: str
    agriculture: str
    economics: str
    education: str
    liberal_arts: str
    pharmacy: str

"""
スクレイピングしたい学部のurlをここに追加する. 
追加するurlはhttps://catalog.he.u-tokyo.ac.jpにおいて、左の検索欄から学部を指定した時のurlにしてください. formatは
https://catalog.he.u-tokyo.ac.jp/result?type=ug&faculty_id=[number]&page=とすれば大丈夫です。
"""
urls = Urls(
    law="https://catalog.he.u-tokyo.ac.jp/result?type=ug&faculty_id=1&page=",
    medicine="https://catalog.he.u-tokyo.ac.jp/result?type=ug&faculty_id=2&page=",
    engineering="https://catalog.he.u-tokyo.ac.jp/result?type=ug&faculty_id=3&page=",
    arts="https://catalog.he.u-tokyo.ac.jp/result?type=ug&faculty_id=4&page=",
    science="https://catalog.he.u-tokyo.ac.jp/result?type=ug&faculty_id=5&page=",
    agriculture="https://catalog.he.u-tokyo.ac.jp/result?type=ug&faculty_id=6&page=",
    economics="https://catalog.he.u-tokyo.ac.jp/result?type=ug&faculty_id=7&page=",
    liberal_arts="https://catalog.he.u-tokyo.ac.jp/result?type=ug&faculty_id=8&page=",
    education="https://catalog.he.u-tokyo.ac.jp/result?type=ug&faculty_id=9&page=",
    pharmacy="https://catalog.he.u-tokyo.ac.jp/result?type=ug&faculty_id=10&page=",
)

def get_urls() -> Urls:
    return urls

class LectureAttributes(BaseModel):
    name: str | None
    teacher: str | None
    semester: str | None
    period: str | None
    code: str | None
   