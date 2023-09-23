document.addEventListener('DOMContentLoaded', () => {
    const nameEl = document.querySelector('#name');
    const usernameEl = document.querySelector('#username');
    const avatarEl = document.querySelector('#avatar');
    const reposEl = document.querySelector('#repos');
    const followersEl = document.querySelector('#followers');
    const followingEl = document.querySelector('#following');
    const linkEl = document.querySelector('#link');

    fetch('https://api.github.com/users/rhnrod')
        .then((res)=> {
            return res.json();
        })
        .then((json) => {
            nameEl.innerText = json.name;
            usernameEl.innerText = json.login;
            avatarEl.src = json.avatar_url;
            followersEl.innerText = json.followers;
            followingEl.innerText = json.following;
            reposEl.innerText = json.public_repos;
            linkEl.href = json.html_url;
        })
})