from flask import Flask
from flask_sock import Sock

app = Flask(__name__)
sock = Sock(app)

@sock.route('/echo')
def echo(ws):
    while True:
        data = ws.receive()
        ws.send(data[::-1])

if __name__ == '__main__':
    app.run(debug=True)


