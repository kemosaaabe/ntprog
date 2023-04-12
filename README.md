## At first to run server you need create virtual venv
**Make sure you have python installed**

in the console enter the following:
```
cd server
python -m venv venv
```
### Next start the server
```
cd venv\Scripts
activate
pip install Flask flask-sock
cd ..
cd ..
python server.py
```

## Next run the client. At first you need install node modules
**Make sure you have Node.js at least 14.0.0 and npm at least 5.6**

in the second console enter the following:
```
cd client
npm i
```

### Next start the client
```
npm start
```

# *Enjoy testing the site in your browser!*
