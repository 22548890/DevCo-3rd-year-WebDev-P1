import MySQLdb 
from flask import Flask, render_template 
from sqlalchemy import create_engine
from flask_sqlalchemy import SQLAlchemy 
app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:webdev@localhost:3800/webdev'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)


class dev(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    firstname = db.Column(db.String(64), index=True)
    locations = db.Column(db.Integer, index=True)
    contractlength = db.Column(db.String(256))
    descript = db.Column(db.String(20))
    lang = db.Column(db.String(120), index=True)
    docp = db.Column(db.Date(), index=True)
    contractval = db.Column(db.Integer, index=True)

@app.route('/')
def index(): 
 
    users = dev.query
    return render_template('index.html', title='Basic Table',
                           users=users) 

if __name__ == '__main__':
    app.run()