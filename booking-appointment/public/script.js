const appointmentForm = document.getElementById('appointment-form');


if (appointmentForm) {
    appointmentForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/add-appointment', new FormData(e.target), {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const data = await res.data;
            showAppointments(data);

        } catch (error) {
            console.log(error);
        }
    });
}


function showAppointments(data) {
    const appointments = document.getElementById('appointments');

    if (appointments) {
        let html = "";

        data.forEach((user, index) => {
            html += `<li class='d-flex flex-row gap-2'>
            ${index+1}.<strong>${user.username}</strong>,
            <span>${user.phone}</span>,
            <span>${user.email}</span>
            <button onclick='deleteAppointment(event)' id=${user.id} class='btn btn-danger btn-sm'>Delete</button></li>`;
        });

        appointments.innerHTML = html;
    }
}


async function deleteAppointment(event)
{
    try {
        const res = await axios.post('/delete-appointment', JSON.stringify({id:event.target.id}), {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await res.data;
        showAppointments(data);

    } catch (error) {
        console.log(error);
    }
}

document.addEventListener('DOMContentLoaded', async()=>{
    try {
        const res = await axios.get('/get-all-appointments');
        const data = await res.data;
        showAppointments(data);
    } catch (error) {
        console.log(error);
    }
});