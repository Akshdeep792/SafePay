# importing important modules
from distutils.util import convert_path
from flask import Flask, request
from flask_cors import CORS
import json
from face_rec import FaceRec, user
from PIL import Image
import base64
import io
import os
import shutil
import time
import requests


app = Flask(__name__)

CORS(app,resources={r"/*":{"origins":"*"}})


@app.route('/api/verify', methods=['POST', 'GET']) # request coming from react
def api():
    data = request.get_json() # getting json data
    resp = 'Unknown'
    directory1 = './stranger' # this is to store webcam picture that is going to be verified

    if data:
        if os.path.exists(directory1):
            shutil.rmtree(directory1) # removes previous directory
            os.remove('known.jpeg') # removes previously present image

        if not os.path.exists(directory1):
            try:
                os.mkdir(directory1) #making new directory for new request
                time.sleep(1)
                result1 = data['data'] # getting unknown image
                result2 = data['known'] # getting known image
                print(result2)
                b = bytes(result1, 'utf-8')
                image = b[b.find(b'/9'):]
                im = Image.open(io.BytesIO(base64.b64decode(image)))
                im.save(directory1+'/stranger.jpeg') # save image to direcotry

                response = requests.get(result2) 
                open('known.jpeg', 'wb').write(response.content) #saving image of known person as known.jpeg and will remove next time auto

                if user.recognize_faces() == 'User': #if face recognized than it will reutrn user else Unknown # this is calling method of class present in face_rec
                    resp = 'User'
                else:
                    resp = 'Unknown'
            except:
                pass

    return resp


if __name__ == '__main__':
    app.run(debug=True, port=5001)