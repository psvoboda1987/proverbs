const fileUrl = 'data/items';

fetch(fileUrl)
    .then(response => {
        if (!response.ok) throw new Error('File not found or failed to fetch');
        return response.text();
    })
    .then(content => {
        let items = content.split('\n');
        let urlParams = new URLSearchParams(window.location.search);
        let count = parseInt(urlParams.get('count')) || 1;
        let data = getData(items, count);
       
        for (let i = 0; i < data.length; i++) {
            document.getElementById('output').innerHTML += `<h3>${data[i]}</h3>`;
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('output').textContent = 'Error fetching the file.';
    });

function getData(motivations, count) {
    let data = [];
    for (let i = 0; i < count; i++) {
        let itemCount = motivations.length;
        let randomInt = Math.floor(Math.random() * itemCount);

        data.push(motivations[randomInt] || null);
        motivations.splice(randomInt, 1);
    }

    return data.filter(item => item !== null);
}