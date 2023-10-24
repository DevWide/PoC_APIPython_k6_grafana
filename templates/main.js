document.addEventListener("DOMContentLoaded", function() {
    fetch('/api/filmes') 
        .then(response => response.json())
        .then(data => {
            const filmeList = document.getElementById('filmes-list');
            data.forEach(filme => {
                const filmeItem = document.createElement('li');
                filmeItem.textContent = '${filme.titulo} (${filme.ano})';
                filmeList.appendChild(filmeItem);
            });
        })
        .catch(error => {
            console.error('Error ao buscar dados da API:', error);
        });
})