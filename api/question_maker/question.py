from summa import keywords
from summa.summarizer import summarize
import random
import string
from nltk.corpus import stopwords


def Q_generation(text1):
    arr = summarize(text1, split=True, ratio=0.7)
    arr1 = []
    aq = [0]*len(arr)
    wrd = ""
    c = 0
    ctr = 0

    for x in arr:
        # print(x+"\n")
        '''if keywords.keywords(x) != '':
            aq[ctr] = keywords.keywords(x)
            ctr = ctr+1
        else:'''
        key = ""
        x = x.strip()+" "
        for n in x:
            if n == ' ':
                c = c+1

        arr1 = [0] * c
        c = 0

        for n in x:
            wrd = wrd+n
            if n == ' ':
                arr1[c] = wrd.strip().lower()
                c = c+1
                wrd = ""

        arrnosw = []

        for n in arr1:
            if not n in stopwords.words('english'):
                arrnosw.append(n)

        i = 1
        while i > 0:
            ran = random.randint(0, (len(arrnosw)-1))
            if len(arrnosw[ran]) > 3:
                i = 0
                key = arrnosw[ran]

        aq[ctr] = key
        ctr = ctr+1
        c = 0
    print(aq)
    ctr = 0
    q_a_arr = [0]*len(arr)
    for x in arr:
        # print("question:-\n")
        #print(x.lower().replace(aq[ctr], "___________", 1)+"\n")
        # print("answer:-\n")
        # print(aq[ctr]+"\n\n\n")
        #ctr = ctr+1
        q_a_arr[ctr] = {"answers": aq[ctr],
                        "question": x.lower().replace(aq[ctr], "___________")}
        ctr = ctr+1
    return q_a_arr
