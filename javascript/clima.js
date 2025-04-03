let url = 'http://api.weatherapi.com/v1';
async function clima() {
    let clima = document.getElementById('clima').value
    let teste = document.getElementById('search').value;
    let api = await fetch(`${url}/current.json?key=86b1a8f0b7ab49a8aff234055242611&q=${teste}&aqi=yes`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });

    if(api.ok){
        let resposta = await api.json();         
        console.log(resposta);
    } else {
        console.error('Error fetching data:', api.statusText);
    }

    let api2 = await fetch(`${url}/current.json?key=86b1a8f0b7ab49a8aff234055242611&q=${teste}&aqi=yes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            
        },
        body: JSON.stringify({
           temp_c: clima
        })
    });

    if(api2.ok){
        let resposta = await api.json();         
        console.log(resposta);
    } else {
        console.error('Error fetching data:', api.statusText);
    }

   
}



clima();
