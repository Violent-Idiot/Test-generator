import os
from flask import Flask, flash, request, redirect, url_for
from werkzeug.utils import secure_filename
from flask_cors import CORS

from question_maker.pipelines import pipeline
import torch

from extractor.parser import parser

UPLOAD_FOLDER = "./uploads"
ALLOWED_EXTENSIONS = {"pdf"}
app = Flask(__name__)
CORS(app)
app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER
app.debug = True


def allowed_file(filename):
    return "." in filename and filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route("/upload", methods=["GET", "POST"])
def upload_file():
    if request.method == "POST":
        if "file" not in request.files:
            flash("No file part")
            return {"success": False}
        file = request.files["file"]
        if file.filename == "":
            flash("No selected file")
            return {"success": False}
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            loc = os.path.join(app.config["UPLOAD_FOLDER"], filename)
            file.save(loc)
            # parser(loc)
            data = parser(loc)
            print(data)
            nlp = pipeline("multitask-qa-qg")
            return {"success": True, "data": nlp(data)}
