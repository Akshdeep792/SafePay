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
CORS(app)


@app.route('/api/verify', methods=['POST', 'GET'])
def api():
    data = request.get_json()
    resp = 'Unknown'
    directory1 = './stranger'

    if data:
        if os.path.exists(directory1):
            shutil.rmtree(directory1)
            os.remove('known.jpeg')

        if not os.path.exists(directory1):
            try:
                os.mkdir(directory1)
                time.sleep(1)
                result1 = data['data']
                result2 = data['known']
                print(result2)
                b = bytes(result1, 'utf-8')
                image = b[b.find(b'/9'):]
                im = Image.open(io.BytesIO(base64.b64decode(image)))
                im.save(directory1+'/stranger.jpeg')

                response = requests.get(result2)
                open('known.jpeg', 'wb').write(response.content)

                if user.recognize_faces() == 'User':
                    resp = 'User'
                else:
                    resp = 'Unknown'
            except:
                pass

    return resp


if __name__ == '__main__':
    app.run()
