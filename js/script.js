const fileUrl = 'data/items';

fetch(fileUrl)
    .then(response => {
        if (!response.ok) throw new Error('File not found or failed to fetch');
        return response.text();
    })
    .then(content => {
        let items = content.split('\n');
        showData(items)

        setInterval(() => {
            showData(items)
        }, 10000);
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('output').textContent = 'Error';
    });



function showData(items) {
    document.getElementById('output').innerText = getData(items);
}

function getData(motivations, count = 1) {
    let data = [];
    for (let i = 0; i < count; i++) {
        let itemCount = motivations.length;
        let randomInt = Math.floor(Math.random() * itemCount);

        data.push(motivations[randomInt] || null);
        motivations.splice(randomInt, 1);
    }

    return data.filter(item => item !== null);
}