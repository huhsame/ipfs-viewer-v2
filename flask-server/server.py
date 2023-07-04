from flask import Flask

app = Flask(__name__)


@app.route("/users")
def users():
    return {"users": [{"id": 1, "name": "John"}, {"id": 1, "name": "huhsame"}]}


if __name__ == "__main__":
    app.run(debug=True)
