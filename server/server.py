from flask import Flask
from flask_sock import Sock
from datetime import datetime
import json


app = Flask(__name__)
sock = Sock(app)


@sock.route('/ws')
def ws(sock):
    while True:
        data = sock.receive()
        response = json.loads(data)

        print(response)

        if response['messageType'] == 3:
            new_dict = {'messageType': 1, 
                        'message': {'status': 'Active', 'changeTime': datetime.now().strftime('%Y-%d-%m %H:%M:%S'), 
                                    **response['message']}}
            sock.send(json.dumps(new_dict))
            
            
        

if __name__ == '__main__':
    app.run(debug=True)


