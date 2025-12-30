// Search Functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    let posts = [];

    // Load posts data - get base path from current location
    const pathSegments = window.location.pathname.split('/').filter(p => p);
    // If we're in a GitHub Pages project (not root), use the first segment as base
    let basePath = '/';
    if (pathSegments.length > 0 && window.location.hostname.includes('github.io')) {
        basePath = '/' + pathSegments[0] + '/';
    }
    const indexUrl = basePath + 'index.json';
    
    console.log('Loading search index from:', indexUrl);
    
    fetch(indexUrl)
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
            
            // Smooth scroll for TOC links
            const tocLinks = document.querySelectorAll('.toc-list a');
            tocLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href').substring(1);
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                        const headerOffset = 80;
                        const elementPosition = targetElement.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                        
                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                    }
                });
            });
            
            // Highlight active section on scroll
            let ticking = false;
            window.addEventListener('scroll', function() {
                if (!ticking) {
                    window.requestAnimationFrame(function() {
                        highlightTOC();
                        ticking = false;
                    });
                    ticking = true;
                }
            });
            
            // Initial highlight
            highlightTOC();
        } else {
            tocContainer.style.display = 'none';
        }
    }
    
    function highlightTOC() {
        const headings = document.querySelectorAll('.post-content h2, .post-content h3');
        const tocLinks = document.querySelectorAll('.toc-list a');
        
        if (headings.length === 0) return;
        
        let current = '';
        const scrollPosition = window.scrollY + 150; // Offset để highlight sớm hơn
        
        // Tìm heading gần nhất với vị trí scroll hiện tại
        headings.forEach((heading, index) => {
            const headingTop = heading.offsetTop;
            
            if (scrollPosition >= headingTop) {
                current = heading.id;
            }
        });
        
        // Nếu ở đầu trang, highlight heading đầu tiên
        if (!current && headings.length > 0) {
            current = headings[0].id;
        }
        
        // Update active class
        tocLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
});
