// Search Functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    let posts = [];

    // Load posts data - use relative path for GitHub Pages
    const baseUrl = window.location.pathname.replace(/\/$/, '');
    const indexPath = baseUrl + '/index.json';
    
    fetch(indexPath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Index not found');
            }
            return response.json();
        })
        .then(data => {
            posts = data;
            console.log('Search index loaded:', posts.length, 'posts');
        })
        .catch(err => {
            console.log('Search index not available:', err);
            // Try alternative path
            fetch('/index.json')
                .then(response => response.json())
                .then(data => {
                    posts = data;
                    console.log('Search index loaded from root:', posts.length, 'posts');
                })
                .catch(e => console.log('Failed to load search index'));
        });

    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const query = e.target.value.toLowerCase().trim();
            
            if (query.length < 2) {
                searchResults.innerHTML = '';
                searchResults.style.display = 'none';
                return;
            }

            const results = posts.filter(post => {
                return post.title.toLowerCase().includes(query) ||
                       post.content.toLowerCase().includes(query) ||
                       (post.tags && post.tags.some(tag => tag.toLowerCase().includes(query)));
            }).slice(0, 5);

            displayResults(results, query);
        });

        // Close search results when clicking outside
        document.addEventListener('click', function(e) {
            if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
                searchResults.style.display = 'none';
            }
        });
    }

    function displayResults(results, query) {
        if (results.length === 0) {
            searchResults.innerHTML = '<div class="search-no-results">Không tìm thấy kết quả</div>';
            searchResults.style.display = 'block';
            return;
        }

        const html = results.map(post => `
            <a href="${post.permalink}" class="search-result-item">
                <div class="search-result-title">${highlightText(post.title, query)}</div>
                <div class="search-result-excerpt">${highlightText(truncate(post.content, 100), query)}</div>
            </a>
        `).join('');

        searchResults.innerHTML = html;
        searchResults.style.display = 'block';
    }

    function highlightText(text, query) {
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    }

    function truncate(text, length) {
        if (text.length <= length) return text;
        return text.substr(0, length) + '...';
    }
});

// Table of Contents
document.addEventListener('DOMContentLoaded', function() {
    const postContent = document.querySelector('.post-content');
    const tocContainer = document.getElementById('toc');
    
    if (postContent && tocContainer) {
        const headings = postContent.querySelectorAll('h2, h3');
        
        if (headings.length > 0) {
            let tocHTML = '<div class="toc-title">Mục lục</div><ul class="toc-list">';
            
            headings.forEach((heading, index) => {
                const id = `heading-${index}`;
                heading.id = id;
                
                const level = heading.tagName === 'H2' ? 'toc-level-1' : 'toc-level-2';
                tocHTML += `<li class="${level}"><a href="#${id}">${heading.textContent}</a></li>`;
            });
            
            tocHTML += '</ul>';
            tocContainer.innerHTML = tocHTML;
            
            // Highlight active section on scroll
            window.addEventListener('scroll', highlightTOC);
        } else {
            tocContainer.style.display = 'none';
        }
    }
    
    function highlightTOC() {
        const headings = document.querySelectorAll('.post-content h2, .post-content h3');
        const tocLinks = document.querySelectorAll('.toc-list a');
        
        let current = '';
        headings.forEach(heading => {
            const rect = heading.getBoundingClientRect();
            if (rect.top <= 100) {
                current = heading.id;
            }
        });
        
        tocLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
});
