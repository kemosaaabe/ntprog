from flask import Flask
from flask_sock import Sock
from datetime import datetime
import json
import random
import asyncio


app = Flask(__name__)
sock = Sock(app)

def getRandomStatus(statuses):
    return statuses[random.randint(0, len(statuses - 1))]

statuses = ['Filled', 'Rejected', 'Cancelled']

@sock.route('/ws')
def ws(sock):
    while True:
        data = sock.receive()
        response = json.loads(data)

        print(response)

        if response['messageType'] == 1:
            new_dict = {'messageType': 1, 
                        'message': {'status': 'Active', 'changeTime': datetime.now().strftime('%Y-%d-%m %H:%M:%S'), 
                                    **response['message']}}
            sock.send(json.dumps(new_dict))

            execution_report = {'messageType': 3, 'message': 'data added successfully'}
            sock.send(json.dumps(execution_report))


        if response['messageType'] == 2:
            new_dict = {'messageType': 4, 
                        'message': {'status': statuses[response['message']['newStatus']], 'changeTime': datetime.now().strftime('%Y-%d-%m %H:%M:%S'), 
                                    **response['message']}}
            sock.send(json.dumps(new_dict))

            if new_dict['message']['status'] == 'Rejected':
                execution_report = {'messageType': 2, 'message': {'reason': 'your application has been rejected'}}
                sock.send(json.dumps(execution_report))

            else: 
                execution_report = {'messageType': 3, 'message': 'data updated successfully'}
                sock.send(json.dumps(execution_report))


if __name__ == '__main__':
    app.run(debug=True)


