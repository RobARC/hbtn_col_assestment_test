#!/usr/bin/python3
from flask import render_template, Blueprint
from main import mysql

#setting Blueprint
auth = Blueprint("auth", __name__, template_folder="templates")


@auth.route('/')
def index():
    return render_template('home.html')

@auth.route('/login')
def signin():
    return render_template('index.html')

@auth.route('/signup')
def signup():
    return render_template('signup.html')