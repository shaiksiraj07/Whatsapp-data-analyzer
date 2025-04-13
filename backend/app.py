from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
from chat_parser import parse_chat, export_csv

app = Flask(__name__)
CORS(app)

@app.route('/analyze', methods=['POST'])
def analyze():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400
    file = request.files['file']
    content = file.read().decode('utf-8')
    result = parse_chat(content)
    export_csv(result['last_7_days'], result['active_users'], result['joined_users'])
    return jsonify(result)

@app.route('/download-report', methods=['GET'])
def download_report():
    return send_file('report.csv', as_attachment=True)

if __name__ == '__main__':
    app.run(debug=True)
