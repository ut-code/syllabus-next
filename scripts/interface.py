from abc import ABC, abstractmethod

from pydantic import BaseModel
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.chrome.webdriver import WebDriver
from selenium.webdriver.common.by import By

from data import LectureAttributes

class Faculty(ABC):
    def __init__(self, faculty_name: str, url: str) -> None:
        self._faculty_name = faculty_name
        self._url = url

    @property
    def faculty_name(self):
        return self._faculty_name

    @property
    def url(self):
        return self._url

    @abstractmethod
    def execute(self):
        pass

    def _scrape(self, driver: WebDriver) -> list[LectureAttributes]:
        url = self.url
        page = 1
        lecture_attributes_list: list[LectureAttributes] = []
    
        while True:
            paginated_url = url + str(page)
            driver.get(paginated_url)
            detail_buttons = driver.find_elements(
                By.CLASS_NAME, "catalog-search-result-card-header-detail-link"
            )
    
            if not detail_buttons:
                break
    
            for i in range(len(detail_buttons)):
                driver.get(paginated_url)
                detail_buttons = driver.find_elements(
                    By.CLASS_NAME, "catalog-search-result-card-header-detail-link"
                )
                detail_buttons[i].click()
    
                lecture_attributes = self._fetch_attributes(driver)
                lecture_attributes_list.append(lecture_attributes)
    
                driver.back()
    
            page += 1
    
        return lecture_attributes_list

    def _fetch_attributes(self, driver: WebDriver) -> LectureAttributes:
        try:
            name = driver.find_elements(
                By.CSS_SELECTOR, ".catalog-page-detail-table-cell.name-cell"
            )[1].text
        except (IndexError, NoSuchElementException):
            name = None

        try:
            teacher = driver.find_elements(
                By.CSS_SELECTOR, ".catalog-page-detail-table-cell.lecturer-cell"
            )[1].text
        except (IndexError, NoSuchElementException):
            teacher = None

        try:
            semester = driver.find_elements(
                By.CSS_SELECTOR, ".catalog-page-detail-table-cell.semester-cell"
            )[1].text
        except (IndexError, NoSuchElementException):
            semester = None

        try:
            period = driver.find_elements(
                By.CSS_SELECTOR, ".catalog-page-detail-table-cell.period-cell"
            )[1].text
        except (IndexError, NoSuchElementException):
            period = None

        try:
            code = driver.find_elements(
                By.CSS_SELECTOR, ".catalog-page-detail-table-cell.code-cell"
            )[1].text
        except (IndexError, NoSuchElementException):
            code = None

        class_attributes = LectureAttributes(
            name=name,
            faculty=self.faculty_name,
            teacher=teacher,
            semester=semester,
            credits=credits,
            period=period,
            code=code,
        )

        return class_attributes
