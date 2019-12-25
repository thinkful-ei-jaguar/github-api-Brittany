const BASE_URL = 'https://api.github.com';

const formHandler = () => {
    $('#search-form').submit(e => {
        e.preventDefault();
        const username = $('#github-username').val();
        fetch(`${BASE_URL}/users/${username}/repos`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            }
        })
            .then(res => res.json())
            .then(results => {
                const repoList = results.map(repo => generateRepo(repo)).join('');
                $('#repo-list').html(repoList);
            })
            .catch(e => console.log(e))
    })
}

const generateRepo = repo => {
    return `<li>
        <h1>Name: ${repo.name}</h1>
        <h2>URL: <a target="_blank" href="${repo.url}">${repo.url}</a></h2>
    </li>`
}

$(formHandler()); 