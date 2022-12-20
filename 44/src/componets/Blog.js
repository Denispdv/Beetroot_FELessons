import '../assets/css/Blog.css';

function Blog() {
    return (
        <div className="blog">
            <Logo/>
            <div className="blog__title">Blog name</div>
            <div class="blog__social">
                <SocialItem/>  {/* class="social-item" */}
                <SocialItem/>
                <SocialItem/>
                <SocialItem/>
                <SocialItem/>
            </div>
        </div>
    )
}

export default Blog;