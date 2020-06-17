console.log('Before');

getUser(1, getRepositories);

console.log('After');


function getRepositories(user) {
    getRepositories(user.gitHubUsername, getCommits);
}

function getCommits(repositories) {
    getCommits(repo, dispalyCommits);
}

function dispalyCommits(commits) {
    console.log(commits)
}



// Callbacks
// Promises
// Async/await

function getUser(id, callback) {
    setTimeout(() => {
        console.log('reading user from a database...');
        callback({id: id, gitHubUsername: 'mosh'});
    }, 2000);
}

function getRepositories(username, callback) {
    setTimeout(() => {
        console.log('fetching repos', username);
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000);
}