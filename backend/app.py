from unittest import result
from flask import Flask, jsonify, request, json, session
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

# Table for many to many relationship
developer_contract = db.Table('developer_contract',
    db.Column('developer_id', db.Integer, db.ForeignKey('developer.id')),
    db.Column('contract_id', db.Integer, db.ForeignKey('contract.id'))
)

# Current Company name / Dev email and type = company/developer
session_user = {
    'id':'',
    'username':'',
    'type':''
}

#######################################################
#       Developers table
#######################################################

class Developer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(25))
    password = db.Column(db.String(25))
    email = db.Column(db.String(25))
    scaleJava = db.Column(db.String(25))
    scalePython = db.Column(db.String(25))
    scaleC = db.Column(db.String(25))
    scaleGo = db.Column(db.String(25))

    contracts_applied = db.relationship('Contract', secondary=developer_contract, backref='developers_applied', lazy=True)

    def __init__(self, name, password, email, scaleJava, scalePython, scaleC, scaleGo):
        self.name = name
        self.password = password
        self.email = email
        self.scaleJava = scaleJava
        self.scalePython = scalePython
        self.scaleC = scaleC
        self.scaleGo = scaleGo
        self.contracts_applied = []

class DeveloperSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'password', 'email', 'scaleJava', 'scalePython', 'scaleC', 'scaleGo')

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

    session_user['id'] = dev.id
    session_user['username'] = email
    session_user['type'] = 'dev'

    return {
        'msg': '',
        'success':True
    }


@app.route('/devEdit', methods = ['PUT'])
@cross_origin()
def devEdit():
    name = request.json['name']
    password = request.json['password']
    email = request.json['email']
    scaleJava = request.json['scaleJava']
    scalePython = request.json['scalePython']
    scaleC = request.json['scaleC']
    scaleGo = request.json['scaleGo']

    if session_user['username'] != email:
        dev_exist = Developer.query.filter_by(email=email).first()
        com_exist = Company.query.filter_by(name=email).first()

        if dev_exist or com_exist:
            return {
                'msg': 'This email already exists',
                'success':False
            }

    dev = Developer.query.get(session_user['id'])

    dev.name = name
    dev.password = password
    dev.email = email
    dev.scaleJava = scaleJava
    dev.scalePython = scalePython
    dev.scaleC = scaleC
    dev.scaleGo = scaleGo
    
    db.session.commit()

    session_user['username'] = email

    return {
        'msg': '',
        'success':True
    }

@app.route('/devDelete', methods = ['DELETE'])
@cross_origin()
def devDelete():
    dev = Developer.query.get(session_user['id'])
    db.session.delete(dev)
    db.session.commit()

    session_user['id'] = ''
    session_user['username'] = ''
    session_user['type'] = ''

    return dev_schema.jsonify(dev) 


#######################################################
#       Companies table
#######################################################

class Company(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(25))
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
        fields = ('id', 'name', 'password', 'industry')

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

    com = Company(name, password, industry)
    db.session.add(com)
    db.session.commit()

    session_user['id'] = com.id
    session_user['username'] = name
    session_user['type'] = 'com'

    return {
        'msg': '',
        'success':True
    }

@app.route('/comEdit', methods = ['PUT'])
@cross_origin()
def comEdit():
    name = request.json['name']
    password = request.json['password']
    industry = request.json['industry']

    com_exist = Company.query.filter_by(name=name).first()
    dev_exist = Developer.query.filter_by(email=name).first()

    if session_user['username'] != name:
        if com_exist or dev_exist:
            return {
                'msg': 'This name already exists',
                'success':False
            }

    com = Company.query.get(session_user['id'])

    com.name = name
    com.password = password
    com.industry = industry

    db.session.commit()

    session_user['username'] = name

    return {
        'msg': '',
        'success':True
    }

@app.route('/comDelete', methods = ['DELETE'])
@cross_origin()
def comDelete():
    com = Company.query.get(session_user['id'])
    db.session.delete(com)
    db.session.commit()

    session_user['id'] = ''
    session_user['username'] = ''
    session_user['type'] = ''

    return com_schema.jsonify(com)


#######################################################
#           Contracts
#######################################################

class Contract(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    company_id = db.Column(db.Integer, db.ForeignKey('company.id'))
    contract_name = db.Column(db.String(25))
    contract_length = db.Column(db.String(25))
    contract_value = db.Column(db.Float)
    contract_description = db.Column(db.Text())
    progamming_language = db.Column(db.String(25))
    location = db.Column(db.String(10))
    open = db.Column(db.Boolean, default=True)
    date = db.Column(db.DateTime, default=datetime.utcnow)



    def __init__(self, contract_name, contract_length, contract_value, contract_description, programming_language, location):
        self.company_id = session_user['id']
        self.contract_name = contract_name
        self.contract_length = contract_length
        self.contract_value = contract_value
        self.contract_description = contract_description
        self.progamming_language = programming_language
        self.location = location

class ContractSchema(ma.Schema):
    class Meta:
        fields = ('id', 'company_id', 'contract_name', 'contract_length', 'contract_value', 'contract_description', 'programming_language', 'location', 'open', 'date')

contract_schema = ContractSchema()
contracts_schema = ContractSchema(many=True)


@app.route('/createContract', methods = ['POST'])
@cross_origin()
def createContract():
    contract_name = request.json['contract_name']
    contract_length = request.json['contract_length']
    contract_value= request.json['contract_value']
    contract_description = request.json['contract_description']
    programming_language = request.json['programming_language']
    location = request.json['location']

    contract = Contract(contract_name, contract_length, contract_value, contract_description, programming_language, location)

    company = Company.query.get(session_user['id'])
    company.contracts.append(contract)

    db.session.add(contract)
    db.session.commit()

    results = contract_schema.dump(contract)
    return jsonify(results)   

@app.route('/applyContract<contract_id>', methods = ['POST'])
@cross_origin()
def applyContract(contract_id):
    developer = Developer.query.get(session_user['id'])
    contract = Contract.query.get(contract_id)
    developer.contracts_applied.append(contract)
    contract.developers_applied.append(developer)

    db.session.commit()

    return {
            'msg': '',
            'success':True
        }    

@app.route('/getContract/<id>', methods = ['GET'])
@cross_origin()
def getContract(id):
    contract = Contract.query.get(id)
    results = contract_schema.dump(contract)
    return jsonify(results)

@app.route('/getContracts', methods = ['GET'])
@cross_origin()
def getContracts():
    contracts = Contract.query.all()
    results = contracts_schema.dump(contracts)
    return jsonify(results)


@app.route('/comGetContracts', methods = ['GET'])
@cross_origin()
def comGetContracts():
    company = Company.query.get(session_user['id'])
    contracts = company.contracts
    results = contracts_schema.dump(contracts)
    return jsonify(results) 



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
        user = Developer.query.get(dev_exist.id)
        session_user['id'] = user.id
        session_user['username'] = username
        session_user['type'] = 'dev'
    else:
        user = Company.query.get(com_exist.id)
        session_user['id'] = user.id
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







# @app.route('/comGetContracts<username>', methods = ['GET'])
# def comGetContracts(username):
#     company = Company.query.get(username)
#     contracts = company.contracts
#     results = contracts_schema.dump(contracts)
#     return jsonify(results)    

@app.route('/devGetContracts<email>', methods = ['GET'])
def devGetContracts(email):
    dev = Developer.query.get(email)
    contracts = dev.contracts_applied
    results = contracts_schema.dump(contracts)
    return jsonify(results) 

@app.route('/conGetDevs<id>', methods = ['GET'])
def conGetDevs(id):
    con = Contract.query.get(id)
    devs = con.developers_applied
    results = devs_schema.dump(devs)
    return jsonify(results) 

if __name__ == "__main__":
    app.run(debug=True)