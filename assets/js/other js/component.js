//=================================================
// The page loader Wrapper
//=================================================
const loaderWrapperSection = document.querySelector("#loaderWrapperSection");
const loaderWrapper = `
<div class="loader_wrapper">
    <div class="loader"></div>
    <div class="loader"></div>
    <div class="loader"></div>
</div>
`;
loaderWrapperSection.innerHTML = loaderWrapper;

//=================================================
// Paint brush Conntainer
//=================================================
const paintBrushSection = document.querySelector("#paintBrushSection");
const paintBrushCon = `
<div class="color_icon_section">
    <!-- open the con -->
    <div class="btn_changecolor">
        <i class="fas fa-cog spin"></i>
    </div>
    <!-- the con itself -->
    <div class="color_changer_container">
        <div class="txt">
            Change Color Here
        </div>
        <i class="fas fa-paint-brush" id="red"></i>
        <i class="fas fa-paint-brush" id="blue"></i>
        <i class="fas fa-paint-brush" id="green"></i>
        <i class="fas fa-paint-brush" id="orange"></i>
        <i class="fas fa-paint-brush" id="gold"></i>
        <i class="fas fa-paint-brush" id="purple"></i>
        <i class="fas fa-paint-brush" id="pink"></i>
        <i class="fas fa-paint-brush" id="brown"></i>
        <i class="fas fa-paint-brush" id="gray"></i>
        <i class="fas fa-paint-brush" id="skyblue"></i>
    </div>
</div>
`;
paintBrushSection.innerHTML = paintBrushCon;

//=================================================
// Link Container (link to another page)
//=================================================
const linkToPagesSection = document.querySelector("#linkToPagesSection");
const linkToPagesCon = `
<!-- this only show on mobile screen -->
<i class="fas fa-align-center open_close"></i>
<!-- ends here -->
<div class="links_icon_section">
    <div class="link_container">
        <span class="the_links" id="home_link"><a href="index.html">HOME</a></span>
        <i class="fas fa-home fa-fw" id="home_link_btn"></i>
    </div>
    <div class="link_container">
        <span class="the_links" id="blog_link"><a href="about.html">about</a></span>
        <i class="fas fa-user fa-fw" id="blog_link_btn"></i>
    </div>
    <div class="link_container">
        <span class="the_links" id="story_link"><a href="portfolio.html">portfiolo</a></span>
        <i class="fas fa-briefcase fa-fw" id="story_link_btn"></i>
    </div>
    <div class="link_container">
        <span class="the_links" id="about_link"><a href="blog.html">blog</a></span>
        <i class="fas fas fa-comments fa-fw" id="about_link_btn"></i>
    </div>
    <div class="link_container">
        <span class="the_links" id="contact_link"><a href="contact.html">contact</a></span>
        <i class="fas fa-envelope fa-fw" id="contact_link_btn"></i>
    </div>
</div>
`;
linkToPagesSection.innerHTML = linkToPagesCon;
