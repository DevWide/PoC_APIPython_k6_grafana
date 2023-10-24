from flask import Flask, render_template

app = Flask(__name__)

def obter_dados_da_api():
    filmes = [
        {"id": 1, "titulo": "O futuro do cinema", "ano": 2023},
        {"id": 2, "titulo": "A volta dos que não foram", "ano": 1987},
        {"id": 3, "titulo": "Sempre estando com você", "ano": 1994},
    ]
    return filmes

@app.route('/filmes', methods=['GET'])
def get_filmes():
    filmes = obter_dados_da_api()
    return render_template('filmes.html', filmes=filmes)
    #return jsonify(filmes)

if __name__ == '__main__':
    app.run()