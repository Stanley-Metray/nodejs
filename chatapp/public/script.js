const loginForm = document.getElementById('loginForm');

if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        localStorage.setItem("username", document.getElementById('username').value);
        window.location.href = '/chat';
    });
}


const chatForm = document.getElementById('chatForm');

if (chatForm) {
    chatForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        formData.append('username', localStorage.getItem('username'));

        const res = await axios.post('/chat', formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await res.data;
        const chatContainer = document.getElementById('chat');

        let chatData = "";

        data.forEach((msg) => {
            chatData += `<p><strong>${msg.username}</strong> : ${msg.message}</p>`;
        });

        chatContainer.innerHTML = chatData;
    });
}

document.addEventListener('DOMContentLoaded', async (e) => {
    const chatContainer = document.getElementById('chat');
    if (chatContainer) {
        setInterval(async () => {
            const res = await axios.get('/get-chat-data');
            const data = await res.data;

            let chatData = "";

            data.forEach((msg) => {
                chatData += `<p><strong>${msg.username}</strong> : ${msg.message}</p>`;
            });

            chatContainer.innerHTML = chatData;
        }, 1000);
    }
})

