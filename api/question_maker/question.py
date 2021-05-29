from summa import keywords
from summa.summarizer import summarize
import random


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
                arr1[c] = wrd.strip()
                c = c+1
                wrd = ""

        i = 1
        while i > 0:
            ran = random.randint(0, (len(arr1)-1))
            if len(arr1[ran]) > 3:
                i = 0
                key = arr1[ran]

        aq[ctr] = key
        ctr = ctr+1
        c = 0
    print(aq)
    ctr = 0
    q_a_arr = [0]*len(arr)
    for x in arr:
        '''print("question:-\n")
        print(x.replace(aq[ctr], "___________")+"\n")
        print("answer:-\n")
        print(aq[ctr]+"\n\n\n")
        ctr = ctr+1'''
        q_a_arr[ctr] = {"answers": aq[ctr],
                        "question": x.replace(aq[ctr], "___________")}
        ctr = ctr+1
    return q_a_arr
