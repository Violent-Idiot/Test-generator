import PyPDF2
import textract


def parser(loc):
    filename = loc
    print(loc)
    pdfFileObj = open(filename, "rb")
    pdfReader = PyPDF2.PdfFileReader(pdfFileObj)
    num_pages = pdfReader.numPages
    count = 0
    text = ""
    text = textract.process(filename, encoding='utf_8')
    print(text)
    return str(text.decode()).replace('\r', '').replace('\n', ' ').replace('\f', '')
