import requests as r
import re
import time

if __name__ == '__main__':
    url = 'http://202.38.93.111:15003/?token=tokennnnnnnnn'
    s = r.session()
    data = {
        'b6': 1537228672809126000,
        'b9': 1024819115206088101,
        'submit': '操作！'
    }
    _ = s.post(url, data=data).text
    _ = re.findall(r'电子秤上已有 (.*?)/20 斤的瓜。', _)[0]
    print(_)  # -4096

    data = {
        'b6': 680,
        'b9': 4,
        'submit': '操作！'
    }
    time.sleep(3)
    _ = s.post(url, data=data).text
    print(_)
