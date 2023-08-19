
$(document).ready(function() {
    general_utils();
    blog_posts();
})


function general_utils() {
    // smooth scrolling for nav links
    $('.head-menu-wrap a').smoothScroll();
    $('.extra-link a').smoothScroll();
    $('.profile-pic-link').smoothScroll();

    $('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width: $(this).attr('data-percent')
		}, 1000);
	});
}

function blog_posts() {

    // keeping it static, can be fetched from a blog dynamically as well
    let posts = [
        {
	    url: 'https://senator-dev.blogspot.com/2023/08/demystifying-python-beginners-guide.html',
            title: 'DEMYSTIFYING PYTHON: A BEGINNER’S GUIDE',
        },
        {
            url: 'https://senator-dev.blogspot.com/2023/08/embracing-pythonic-path-tales-of-junior.html',
            title: 'TALES OF A JUNIOR PROGRAMMER',
        },
        {
            url: 'https://senator-dev.blogspot.com/2023/04/the-future-of-wearable.html',
            title: 'THE FUTURE OF WEARABLE',
        },
        {
            url: 'https://senator-dev.blogspot.com/2023/04/5-tips-to-improve-your-time-management.html',
            title: '5 TIPS TO IMPROVE YOUR TIME MANAGEMENT SKILLS',
        },
        //{
          //  url: 'https://www.nagekar.com/2018/07/eli5-how-https-works.html',
           // title: 'ELI5 - How HTTPS Works',
       // },
    ];

    let post_html = [];

    for(let post of posts) {

        let tags;
        
        if(post.tags) {
            tags = post.tags.map(tag => {
                return `<a href="https://senator-dev.blogspot.com/tags#${tag}">${tag}</a>`
            })
        }

        let post_template = `
        <div class="blog-post" onclick="blog_link_click('${post.url}');">

            <div class="blog-link">
    
                <h3><a href="${post.url}">${post.title}</a></h3>            

            </div>
    
            <div class="blog-goto-link">
                <img class="blog-arrow" src="/assets/images/right-open-mini.svg"/>
            </div>
        </div>
        `;

        post_html.push(post_template);
    }

    // for the more posts link
    let post_template = `
    <div class="blog-post more-blogs" onclick="blog_link_click('https://senator-dev.blogspot.com');">

        <div class="blog-link">

            <h3><a href="https://senator-dev.blogspot.com">Visit the blog for more posts</a></h3>            

        </div>

        <div class="blog-goto-link">
            <img class="blog-arrow" src="/assets/images/right-open-mini.svg"/>
        </div>
    </div>
    `;

    post_html.push(post_template);

    $('#rss-feeds').html(post_html);

}

function blog_link_click(url) {
    window.location = url;
}
