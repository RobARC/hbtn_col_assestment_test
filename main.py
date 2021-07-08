#!/usr/bin/python3
""" main module """
from flask import Flask, redirect
from flask_mysqldb import MySQL
from backend.auth import auth

app = Flask(__name__)
app.register_blueprint(auth, url_prefix="")

#MySQL connection
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER)'] = 'hbtn_user1'
app.config['MYSQL_PASSWORD'] = 'password'
app.config['MYSQL_DB'] = 'hbtn_assesment'
mysql = MySQL(app)

#settings
app.secret_key = 'mysecretkey'

@app.route('/')
def home():
    return '<h1>Test!</h1>'

if __name__ == '__main__':
    app.run(port=8000, debug=True)
