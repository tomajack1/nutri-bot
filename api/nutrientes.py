from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

tabela_alimentos = {
    "arroz": {"quantidade": "100g", "kcal": 130, "carbo": 28, "proteina": 2.5, "gordura": 0.3},
    "frango": {"quantidade": "150g grelhado", "kcal": 330, "carbo": 0, "proteina": 35, "gordura": 20},
    "ovo": {"quantidade": "1 unidade", "kcal": 70, "carbo": 0.4, "proteina": 6, "gordura": 5},
    "banana": {"quantidade": "1 média", "kcal": 89, "carbo": 23, "proteina": 1, "gordura": 0.3}
}

@app.route("/api/nutrientes", methods=["POST"])
def analisar_refeicao():
    data = request.get_json()
    texto_refeicao = data.get("refeicao", "").lower()

    alimentos_resposta = []
    total_kcal = total_carbo = total_proteina = total_gordura = 0

    for alimento, info in tabela_alimentos.items():
        if alimento in texto_refeicao:
            alimentos_resposta.append({
                "nome": f"{alimento.capitalize()} ({info['quantidade']})",
                "kcal": info['kcal'],
                "carbo": info['carbo'],
                "proteina": info['proteina'],
                "gordura": info['gordura']
            })
            total_kcal += info['kcal']
            total_carbo += info['carbo']
            total_proteina += info['proteina']
            total_gordura += info['gordura']

    return jsonify({
        "alimentos": alimentos_resposta,
        "total": {
            "kcal": round(total_kcal, 1),
            "carbo": round(total_carbo, 1),
            "proteina": round(total_proteina, 1),
            "gordura": round(total_gordura, 1)
        }
    })

handler = app
