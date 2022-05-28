# SafePay

This project uses face recognition as a security for online transactions. Now there will no more online scams as it also stores identity of person doing transactions.

## Content 
[Demo](#demo)  
[Installation](#installation)  
[Folder Structure and Description](#FS)  
[Documentation](#documentation)




## Demo

Insert gif or link to demo


## Installation

First clone this repo

```bash
  git clone https://github.com/Akshdeep792/SafePay.git
  cd SafePay
```
Then Install Dependencies  
### Make sure you have nodejs installed in your system
  #### For Node server
 ```bash
  npm install
```
#### For Frontend 
```bash
  cd client 
  npm install
```
## I have deployed flask backend to heroku. There is no need to run following command.If it not worked than you can run following commands. You can skip this for now
### Make sure you have python installed in your system

```bash
cd Flask-Backend
pip3 install click
pip3 install cmake
pip3 install Pillow
pip3 install dlib
pip3 install face_recognition
pip3 install flask
pip3 install gunicorn
pip3 install Flask-Cors
```
#### Create .env file (Most Important)  
example.env
```bash
MONGO_URL_LOCAL="local host mongo url"
MONGO_URL="Atlas url"
JWT_SECRET="JWT token secret key"
JWT_LIFETIME=1d


CLOUDINARY_NAME="you will get when you create account"
CLOUDINARY_API_KEY="this also"
CLOUDINARY_API_SECRET="this also"

SAFEPAY_MAIL="nodemailer_mail_from where you want to send email to user"
SAFEPAY_PASSWORD="nodemailer_password"
```

All the Dependencies have been installed. Now you should run the project

For MERN open git terminal and Run in main project directory 
```bash
    npm start
```
Above command will start React and Nodejs concurrently (You can see script in package.json)

For Flask-Backend open second Git terminal and run
### I have deployed flask backend to heroku. There is no need to run following command.It will work finally.If it not worked than you can run following commands and replace the command shown in follwing link
[Code](https://drive.google.com/file/d/1HyoF_oj9PIJBb0iCL-r6rYjEyJZDN_pe/view?usp=sharing)
with following command in appContext.js
```bash
 await axios.post('http://localhost:5000/api/verify'
```
```bash
    cd flask-backend 
    python app.py
```

Now Watch Demo and Enjoy!
## Documentation

### Tech Stack
[ReactJs](https://reactjs.org/docs/getting-started.html)  
[NodeJs](https://nodejs.org/en/)  
[ExpressJs](https://expressjs.com/)  
[Mongo Db](https://www.mongodb.com/docs/)  
[Flask](https://flask.palletsprojects.com/en/2.1.x/)  

#### npm Packages used:  
[bcryptJs](https://www.npmjs.com/package/bcrypt)  
[cloudinary](https://www.npmjs.com/package/cloudinary)  
[dotenv](https://www.npmjs.com/package/dotenv)  
[express-async-errors](https://www.npmjs.com/package/express-async-errors)  
[https-status-codes](https://www.npmjs.com/package/http-status-codes)    
[jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)   
[mongoose](https://mongoosejs.com/docs/)  
[morgan](https://www.npmjs.com/package/morgan)  
[validator](https://www.npmjs.com/package/validator)  
[concurrently](https://www.npmjs.com/package/concurrently)  
[nodemon](https://www.npmjs.com/package/nodemon)  

#### In ReactJs  
[axios](https://www.npmjs.com/package/axios)  
[cloudinary-react](https://www.npmjs.com/package/cloudinary-react)  
[moment](https://www.npmjs.com/package/moment)  
[normalize.css](https://www.npmjs.com/package/normalize.css)  
[react-icons](https://www.npmjs.com/package/react-icons)  
[react-router-dom](https://www.npmjs.com/package/react-router-dom)  
[react-webcam](https://www.npmjs.com/package/react-webcam)  
[styled-components](https://www.npmjs.com/package/styled-components)  

#### Flask Pip

[click](https://pypi.org/project/click/)  
[cmake](https://pypi.org/project/cmake/)  
[Pillow](https://pypi.org/project/Pillow/)  
[dlib](http://dlib.net/)  
[face-recognition](https://pypi.org/project/face-recognition/)  
[gunicorn](https://pypi.org/project/gunicorn/)  
[Flask-Cors](https://pypi.org/project/Flask-Cors/)  





