from flask import Flask, jsonify, request, json
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import cross_origin, CORS

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:@localhost/DevCo'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)


####################################
#       Developers table
####################################

class Developers(db.Model):
    name = db.Column(db.String(25))
    password = db.Column(db.String(25))
    email = db.Column(db.String(25), primary_key=True)
    scaleJava = db.Column(db.String(25))
    scalePython = db.Column(db.String(25))
    scaleC = db.Column(db.String(25))
    scaleGo = db.Column(db.String(25))

    def __init__(self, name, password, email, scaleJava, scalePython, scaleC, scaleGo):
        self.name = name
        self.password = password
        self.email = email
        self.scaleJava = scaleJava
        self.scalePython = scalePython
        self.scaleC = scaleC
        self.scaleGo = scaleGo

class DeveloperSchema(ma.Schema):
    class Meta:
        fields = ('name', 'password', 'email', 'scaleJava', 'scalePython', 'scaleC', 'scaleGo')

dev_schema = DeveloperSchema()
devs_schema = DeveloperSchema(many=True)


@app.route('/devReg', methods = ['POST'])
@cross_origin()
def devReg():
    name = request.json['name']
    password = request.json['password']
    email = request.json['email']
    scaleJava = request.json['scaleJava']
    scalePython = request.json['scalePython']
    scaleC = request.json['scaleC']
    scaleGo = request.json['scaleGo']

    dev_exist = Developers.query.filter_by(email=email).first()

    if dev_exist:
        return {
            'msg': 'This email already exists',
            'success':False
        }

    dev = Developers(name, password, email, scaleJava, scalePython, scaleC, scaleGo)
    db.session.add(dev)
    db.session.commit()

    return {
            'msg': '',
            'success':True
        }


####################################
#       Companies table
####################################

class Companies(db.Model):
    name = db.Column(db.String(25), primary_key=True)
    password = db.Column(db.String(25))
    industry = db.Column(db.String(50))

    def __init__(self, name, password, industry):
        self.name = name
        self.password = password
        self.industry = industry

class CompanySchema(ma.Schema):
    class Meta:
        fields = ('name', 'password', 'industry')

com_schema = CompanySchema()
coms_schema = CompanySchema(many=True)


@app.route('/comReg', methods = ['POST'])
@cross_origin()
def comReg():
    name = request.json['name']
    password = request.json['password']
    industry = request.json['industry']

    com_exist = Companies.query.filter_by(name=name).first()

    if com_exist:
        return {
            'msg': 'This name already exists',
            'success':False
        }

    dev = Companies(name, password, industry)
    db.session.add(dev)
    db.session.commit()

    return {
            'msg': '',
            'success':True
        }


####################################
#           Routes
####################################

@app.route('/login', methods = ['POST'])
@cross_origin()
def login():

    username = request.json['email']
    password = request.json['password']


    dev_exist = Developers.query.filter_by(email=username).first()
    com_exist = Companies.query.filter_by(name=username).first()

    if not dev_exist and not com_exist:
        return {
            'msg': 'This name/email does not exist',
            'success':False
        }
    user = ''
    if dev_exist:
        user = Developers.query.get(username)
    else:
        user = Companies.query.get(username)

    check_password = user.password == password

    if not check_password:
            return {
                'msg': 'Incorrect password',
                'success':False
            }

    return {
        'msg':'',
        'success':True
    }






@app.route('/get', methods = ['GET'])
def get():
    all_devs = Developers.query.all()
    results = devs_schema.dump(all_devs)
    return jsonify(results)

@app.route('/get/<username>', methods = ['GET'])
def details(username):
    dev = Developers.query.get(username)
    return dev_schema.jsonify(dev)

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
