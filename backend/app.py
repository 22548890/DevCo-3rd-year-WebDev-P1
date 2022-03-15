from flask import Flask, jsonify, request, json
from flask_sqlalchemy import SQLAlchemy 
from flask_marshmallow import Marshmallow
from flask_cors import cross_origin, CORS
from datetime import datetime

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:1234@localhost/DevCo'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)

session_user = {
    'username':'Banana',
    'type':''
}

#######################################################
#       Developers table
#######################################################

class Developer(db.Model):
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

    dev_exist = Developer.query.filter_by(email=email).first()
    com_exist = Company.query.filter_by(name=email).first()

    if dev_exist or com_exist:
        return {
            'msg': 'This email already exists',
            'success':False
        }

    dev = Developer(name, password, email, scaleJava, scalePython, scaleC, scaleGo)
    db.session.add(dev)
    db.session.commit()

    session_user['username'] = email
    session_user['type'] = 'dev'

    return {
            'msg': '',
            'success':True
        }


@app.route('/devUpdate', methods = ['PUT'])
@cross_origin()
def devUpdate():
    name = request.json['name']
    password = request.json['password']
    email = request.json['email']
    scaleJava = request.json['scaleJava']
    scalePython = request.json['scalePython']
    scaleC = request.json['scaleC']
    scaleGo = request.json['scaleGo']

    dev = Developer.query.get(session_user['username'])

    dev.name = name
    dev.password = password
    dev.email = email
    dev.scaleJava = scaleJava
    dev.scalePython = scalePython
    dev.scaleC = scaleC
    dev.scaleGo = scaleGo
    
    db.session.commit()

    session_user['username'] = email

    return dev_schema.jsonify(dev)

@app.route('/devDelete', methods = ['DELETE'])
@cross_origin()
def devDelete():
    dev = Developer.query.get(session_user['username'])
    db.session.delete(dev)
    db.session.commit()

    return dev_schema.jsonify(dev) 


#######################################################
#       Companies table
#######################################################

class Company(db.Model):
    name = db.Column(db.String(25), primary_key=True)
    password = db.Column(db.String(25))
    industry = db.Column(db.String(50))

    contracts = db.relationship('Contract', backref='company', lazy=True)

    def __init__(self, name, password, industry):
        self.name = name
        self.password = password
        self.industry = industry
        self.contracts = []

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

    com_exist = Company.query.filter_by(name=name).first()
    dev_exist = Developer.query.filter_by(email=name).first()

    if com_exist or dev_exist:
        return {
            'msg': 'This name already exists',
            'success':False
        }

    dev = Company(name, password, industry)
    db.session.add(dev)
    db.session.commit()

    session_user['username'] = name
    session_user['type'] = 'com'

    return {
            'msg': '',
            'success':True
        }

@app.route('/comUpdate', methods = ['PUT'])
@cross_origin()
def comUpdate():
    name = request.json['name']
    password = request.json['password']
    industry = request.json['industry']

    com = Company.query.get(session_user['username'])

    com.name = name
    com.password = password
    com.industry = industry

    db.session.commit()

    session_user['username'] = name

    return com_schema.jsonify(com)

@app.route('/comDelete', methods = ['DELETE'])
@cross_origin()
def comDelete():
    com = Company.query.get(session_user['username'])
    db.session.delete(com)
    db.session.commit()

    return com_schema.jsonify(com)


#######################################################
#           Contracts
#######################################################

class Contract(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    company_name = db.Column(db.String(25), db.ForeignKey('company.name'))
    contract_length = db.Column(db.Float)
    contract_value = db.Column(db.Float)
    contract_description = db.Column(db.Text())
    progamming_language = db.Column(db.String(25))
    location = db.Column(db.String(10))
    date = db.Column(db.DateTime, default=datetime.utcnow)

    

    def __init__(self, contract_length, contract_value, contract_description, programming_language, location):
        self.company_name = session_user['username']
        self.contract_length = contract_length
        self.contract_value = contract_value
        self.contract_description = contract_description
        self.progamming_language = programming_language
        self.location = location

class ContractSchema(ma.Schema):
    class Meta:
        fields = ('id', 'company_name', 'contract_length', 'contract_value', 'contract_description', 'programming_language', 'location', 'date')

contract_schema = ContractSchema()
contract_schema = ContractSchema(many=True)


@app.route('/createContract', methods = ['POST'])
@cross_origin()
def createContract():
    # company_name = request.json['company_name']
    contract_length = request.json['contract_length']
    contract_value= request.json['contract_value']
    contract_description = request.json['contract_description']
    programming_language = request.json['programming_language']
    location = request.json['location']

    contract = Contract(contract_length, contract_value, contract_description, programming_language, location)

    company = Company.query.get(session_user['username'])
    company.contracts.append(contract)

    db.session.add(contract)
    db.session.commit()

    return {
            'msg': '',
            'success':True
        }    

#######################################################
#           Routes
#######################################################

@app.route('/login', methods = ['POST'])
@cross_origin()
def login():
    
    username = request.json['email']
    password = request.json['password']


    dev_exist = Developer.query.filter_by(email=username).first()
    com_exist = Company.query.filter_by(name=username).first()

    if not dev_exist and not com_exist:
        return {
            'msg': 'This name/email does not exist',
            'success':False
        }
    user = ''
    if dev_exist:
        user = Developer.query.get(username)
        session_user['username'] = username
        session_user['type'] = 'dev'
    else:
        user = Company.query.get(username)
        session_user['username'] = username
        session_user['type'] = 'com'

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









@app.route('/get<username>', methods = ['GET'])
def getAll(username):
    company = Company.query.get(username)
    contracts = company.contracts
    results = contract_schema.dump(contracts)
    return jsonify(results)    

if __name__ == "__main__":
    app.run(debug=True)