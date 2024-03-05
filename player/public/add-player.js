document.getElementById('add-player-form').addEventListener('submit', async(e)=>{
    e.preventDefault();
    try {
        const response = await axios.post('/add-player', new FormData(e.target), {
            headers : {
                'Content-Type' : 'application/json'
            }
        });
        const data = await response.data;
        alert(`Player ${data.name} Added`);
    } catch (error) {
        console.log(error);
    }
});