from click import password_option
from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import cross_origin, CORS

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:1234@localhost/DevCo'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)

# table in database for Developers
class Developers(db.Model):
    username = db.Column(db.String(25), primary_key=True)
    password = db.Column(db.String(25))
    email = db.Column(db.String(25))

    def __init__(self, username, password, email):
        self.username = username
        self.password = password
        self.email = email


class DeveloperSchema(ma.Schema):
    class Meta:
        fields = ('username', 'password', 'email')

dev_schema = DeveloperSchema()
devs_schema = DeveloperSchema(many=True)

@app.route('/get', methods = ['GET'])
def get():
    all_devs = Developers.query.all()
    results = devs_schema.dump(all_devs)
    return jsonify(results)

@app.route('/get/<username>', methods = ['GET'])
def details(username):
    dev = Developers.query.get(username)
    return dev_schema.jsonify(dev)

@app.route('/registration', methods = ['POST'])
@cross_origin()
def registration():
    username = request.json['username']
    password = request.json['password']
    email = request.json['email']

    devs = Developers(username, password, email)
    db.session.add(devs)
    db.session.commit()

    response = dev_schema.jsonify(devs)
    return response

@app.route('/update/<username>', methods = ['PUT'])
def update(username):
    dev = Developers.query.get(username)

    password = request.json['password']
    email = request.json['email']

    dev.password = password
    dev.email = email

    db.session.commit()
    return dev_schema.jsonify(dev)


@app.route('/delete/<username>', methods = ['DELETE'])
def delete(username):
    dev = Developers.query.get(username)
    db.session.delete(dev)
    db.session.commit()

    return dev_schema.jsonify(dev)    


if __name__ == "__main__":
    app.run(debug=True)