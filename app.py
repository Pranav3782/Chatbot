from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.form['message']
    
    # Simple responses based on user input
    if "hello" in user_input.lower():
        response = "Hello! Welcome to the Travel Buddy. How can I assist you with your travel plans today?"
    elif "destination" in user_input.lower():
        response = "We have amazing suggestions for destinations! Are you looking for mountains, beaches, or a cultural experience?"
    elif "thank you" in user_input.lower():
        response = "You're welcome! Happy travels!"
    else:
        response = "I'm here to help with your travel questions. Please ask me anything!"
    
    return jsonify({"response": response})

if __name__ == '__main__':
    app.run(debug=True)
