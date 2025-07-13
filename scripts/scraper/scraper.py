import json
from selenium import webdriver
from interface import Faculty
from data import LectureAttributes

class Scraper(Faculty):
    def __init__(self, faculty: str, url: str):
        super().__init__(faculty_name=faculty, url=url)
        
    def execute(self) -> None:
        driver = webdriver.Chrome()
        lectures = self._scrape(driver)
        driver.quit()
        
        faculty_filename = f'data/{self.faculty_name}.json'
        with open(faculty_filename, 'w', encoding='utf-8') as f:
            json.dump([lecture.dict() for lecture in lectures], f, ensure_ascii=False, indent=4)