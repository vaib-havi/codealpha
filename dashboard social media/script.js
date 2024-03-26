document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('login-btn');
    const loginSection = document.getElementById('login-section');
    const feedsSection = document.getElementById('feeds-section');
    const loginForm = document.getElementById('login-form');
    const feedContainer = document.getElementById('feed-container');

    loginBtn.addEventListener('click', function() {
        loginSection.style.display = 'block';
        feedsSection.style.display = 'none';
    });

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Perform login logic (not implemented in this example)
        // After successful login, fetch feeds and display them
        simulateFetchFeeds();
    });

    function simulateFetchFeeds() {
        // Simulated feeds for demonstration
        const feeds = [
            { platform: 'Twitter', content: 'This is a tweet!', visitors: 100, followers: 500, unfollowed: 10 },
            { platform: 'Facebook', content: 'This is a Facebook post!', visitors: 200, followers: 1000, unfollowed: 20 },
            { platform: 'Instagram', content: 'This is an Instagram post!', visitors: 300, followers: 1500, unfollowed: 15 }
        ];

        // Display feeds
        feedContainer.innerHTML = '';
        feeds.forEach(feed => {
            const feedItem = document.createElement('div');
            feedItem.classList.add('feed-item');
            feedItem.innerHTML = `
                <h3>${feed.platform}</h3>
                <p>${feed.content}</p>
                <ul>
                    <li>Visitors: ${feed.visitors}</li>
                    <li>Followers: ${feed.followers}</li>
                    <li>Unfollowed: ${feed.unfollowed}</li>
                </ul>
            `;
            feedContainer.appendChild(feedItem);
        });

        // Show feeds section
        loginSection.style.display = 'none';
        feedsSection.style.display = 'block';
    }
});
