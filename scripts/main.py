import os
import threading
from data import get_urls, Urls
from scraper import Scraper

def main():
    urls: Urls = get_urls()
    threads: list[threading.Thread] = []
    
    # 'data'ディレクトリを作成
    os.makedirs('data', exist_ok=True)
    
    for faculty_name, url in urls.items():
        scraper_instance = Scraper(faculty_name, url)
        thread = threading.Thread(target=scraper_instance.execute)
        threads.append(thread)
        thread.start()
    
    for thread in threads:
        thread.join()

if __name__ == "__main__":
    main()