document.getElementById('send-btn').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    const chatbox = document.getElementById('messages');
    
    // Append user's message
    const userMessage = document.createElement('div');
    userMessage.textContent = "You: " + userInput;
    chatbox.appendChild(userMessage);
    
    // Send message to the server
    fetch('/chat', {
        method: 'POST',
        body: new URLSearchParams({message: userInput}),
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    })
    .then(response => response.json())
    .then(data => {
        // Append bot's response
        const botMessage = document.createElement('div');
        botMessage.textContent = "Bot: " + data.response;
        chatbox.appendChild(botMessage);
        
        // Scroll to the bottom
        chatbox.scrollTop = chatbox.scrollHeight;
    });
    
    // Clear input field
    document.getElementById('user-input').value = '';
});
