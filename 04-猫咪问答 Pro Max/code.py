import requests as r

if __name__ == '__main__':
    url = 'http://202.38.93.111:10001/'

    data = {
        'q1': '',
        'q2': 5,
        'q3': 'Development Team of Library',
        'q4': 13,
        'q5': '/dev/null'
    }
    header = {
        'cookie': 'COOKIEEEEEEEEEE'
    }

    for y in range(2014, 2018):
        for m in range(1, 13):
            for d in range(1, 32):
                ys = str(y)
                ms = str(m).zfill(2)
                ds = str(d).zfill(2)
                data['q1'] = f'{ys}{ms}{ds}'

                print(data['q1'])
                s = r.session()
                _ = s.post(url, data=data, headers=header).text

                if '没有全部答对' not in _:
                    print(_)
                    input()
