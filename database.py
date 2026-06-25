from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
db = SQLAlchemy(app)

# USER TABLE
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    mobile = db.Column(db.String(15), unique=True)

# ORDER TABLE
class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    product = db.Column(db.String(100))
    status = db.Column(db.String(50))

db.create_all()

# LOGIN
@app.route('/login', methods=['POST'])
def login():
    data = request.json
    mobile = data['mobile']

    user = User.query.filter_by(mobile=mobile).first()
    if not user:
        user = User(mobile=mobile)
        db.session.add(user)
        db.session.commit()

    return jsonify({"status": "success"})

# PLACE ORDER
@app.route('/order', methods=['POST'])
def order():
    data = request.json
    product = data['product']

    new_order = Order(product=product, status="Processing")
    db.session.add(new_order)
    db.session.commit()

    return jsonify({"order_id": new_order.id})

# TRACK ORDER
@app.route('/track/<int:id>')
def track(id):
    order = Order.query.get(id)
    if order:
        return jsonify({"status": order.status})
    return jsonify({"status": "Not Found"})

app.run(debug=True)
