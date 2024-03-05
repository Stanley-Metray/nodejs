
let playerId = undefined;

document.getElementById('search-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('/search-player', new FormData(e.target), {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.status === 200) {
            const player = await response.data;
            playerId = player.id;
            setPlayerToUI(player);
        }
    } catch (error) {
        const mes = await error.response.data;
        alert(mes);
    }
});


function setPlayerToUI(player) {
    document.getElementById('name').value = player.name;
    document.getElementById('dob').value = player.dob;
    document.getElementById('photourl').value = player.photourl;
    document.getElementById('birthplace').value = player.birthplace;
    document.getElementById('career').value = player.career;
    document.getElementById('numberofmatches').value = player.numberofmatches;
    document.getElementById('score').value = player.score;
    document.getElementById('fifties').value = player.fifties;
    document.getElementById('centuries').value = player.centuries;
    document.getElementById('wickets').value = player.wickets;
    document.getElementById('average').value = player.average;
}


document.getElementById('update-player-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
        const formData = new FormData(e.target);
        formData.append('id', playerId);

        const response = await axios.post('/update-player', formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const res = await response.data;
        if (res === true)
            alert("Updated");
        else
            alert("Failed to update");
    } catch (error) {
        console.log(error);
    }
});