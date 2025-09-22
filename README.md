# Banana News
News, tech, politics, games, geography, maths and science site
# 1500 commits on main repository, 100 commits on new repository! 💯 🎉🥳
# The all-new Banana News with eleventy SSG and nunjucks!
# Banana News

News, tech, politics, games, geography, maths and science site

## How to add a page

1. Add your page to the top nav bar in `_includes/base.njk` (or `_includes/chinese.njk` for Chinese pages). If you don’t want it in the top nav bar, add it to the dropdown.
2. Add your page’s body content like this:
    ```
    ---
    layout: "base.njk"
    title: "Home" # The site will handle adding " - Banana News"
    ---
    Your page's body content goes here, without topnavs, head tags, footers or stylesheets.
    Example:
    <h1>THIS IS MY AMAZING PAGE</h1>
    <p>A little bit of page content</p>
    ```
3. Create your new page as an HTML file in the root folder (top level of the repository).
4. If your page includes CSS, create a new CSS file in `styles` named `[your page name].css`. Add `<link rel="stylesheet" href="/styles/yourpage.css">` in the head tag of your page’s template.
5. If your page includes JS, create a new JS file in `scripts` and link it at the bottom of your page. For maths pages, you can use `1stgrade.js` if all you need is "reveal answer".

## Troubleshooting

- Styling is weird or missing.
- Page doesn’t have your styling.
- Need to update scripts for the whole website, not just your page.
- No scripts or buttons don’t work.
- Page not found when clicking a link.
- Images not loading.

**Fixes and tips:**
- Check your CSS file is linked correctly (`/styles/mypage.css` in the head). If styling is weird, make sure that your CSS targets elements unique to your page (e.g. IDs or Classes like `# and .`, not general elements like `body`
- For scripts, link your file at the bottom of your page or in the template. You'll need to create a new script file with your JS in `/scripts`. If it is a Maths page, simply link to 1stgrade.js. Currently (as of 1-2, 3-4, 5-6 and 7-9 pages, there is only reveal answer and dice roll code. If you need anything else, just add it to the file!
- For links, use `/page` instead of `page.html` or `/page.html`.
- For images, use `/images/image.png` and check your path and file extension.

If you need help or instructions aren’t clear, contact the maintainer.

---

Check that everything’s working by loading the website in your browser!



# The instructions above are the Clear and Concise version by Github Copilot. Below is the original:
How to add a page:
1. Go into _includes/base.njk (or _includes/chinese.njk if you are making a chinese page) and add a page inside the top nav bar in that file. If you don't want it in the topnav bar, add it to the div options in your desired page (e.g. Index, Maths, Fun...)
2. Add your page's body content to the code like this:
<code>
---
layout: "base.njk"
title: "Home" (this is a comment: Notice that there is no - Banana News, that will be automatically handled)
---
Your page's body content goes here, without anything like topnavs, head tags, footers or stylesheets.
e.g. 
&lt;h1&gt;THIS IS MY AMAZING PAGE&lt;/h1&gt;
&lt;p&gt;A little bit of page content&lt;/p&gt;
</code>

3. Create your new page as a HTML page in the root folder (The top level of the Github repository)
4. <mark>If the file includes CSS, create a new CSS file in styles and name it "[your page name here].css". Then, add <code>&lt;link rel="stylesheet" href="/styles/yourpage.css"&gt;</code> in the head tag of _includes/base.njk or (_includes/chinese.njk)</mark>
5. If your page includes JS (<mark>To the other collaborator on this website: it's probably a maths page, so if all the JS you need is just reveal answer, simply add <code>&lt;script src="/scripts/1stgrade.js"&gt;&lt;/script&gt;</code> to the bottom of your body tag, like how we usually include scripts. If there's other JS functionality which is not already included in 1stgrade.js, like lets say flip a coin or something, add that JS to 1stgrade.js</mark>) If it's not a math page, simply make a new JS file in scripts, e.g. /scripts/file.js and add &lt;script src="/scripts/file.js"&gt;&lt;/script&gt; to the bottom of your page's body tag.
## Step 6: CHECK THAT EVERYTHING'S WORKING. If there's one of these problems, this readme will definitely have the fix:
<ul>
<li>styling is weird</li>
<li>Your page doesn't have your styling</li>
<li>I wanted to update scripts for the whole website, not just my page</li>
<li>No scripts (nothing happens when you click buttons or do other things)</li>
<li>When you click a link it says Page not found</li>
<li>Images not loading</li>


## If you have a problem that's not above or can't understand instructions, please contact me and I will help
Check that everything's working. Load the website in your browser. If there's anything funny going on with the CSS, go into your newly added mypage.css, and see if there's anything that selects general parts of a website, like body{} or h1{} or div{} or p{}, and change it to an ID or class selector that's unique to your page, like #myContainer{} or .mathsdiv{}, etc.

If the CSS for your page is not showing, check that you linked correctly to /styles/mypage.css (with the /) <b>This link should be inside the head tag of _includes/base or chinese.njk</b>. You should also check that your CSS file actually has stuff that will affect your page. If you changed "body" to #myContainer in the CSS file, but didn't update the HTML, you need to also update the HTML to add a &lt;div id="myContainer"&gt;&lt;/div&gt; (step 4)

If nothing happens when you click a button, which is a problem with the script, check that you've linked the bottom of your page to a script that you created (or 1stgrade.js for maths) and that you've added your scripts to that script file (like adding dice roll to 1stgrade.js)(step 5.)
If you want your script to control the whole website, like main.js, simply add &lt;script src="/scripts/your_script.js"&gt;&lt;/script&gt; to the bottom of the body tag in _includes/base or chinese.njk

If there's an error saying page not found or we can't get that page, or something where the page doesn't load when you click on a link, it's almost certainly because of your path. Go into the link that you click to get to the page, and see if it has a / in front of the path. If it doesn't, add a /.

All links to other pages should not be page or page.html or /page.html, but they should be /page, because the program has automatically generated pages that don't have the  which look simpler and more clean.

If your image is not loading, it's almost certainly for the same reason, so go into it and check that you have /images/image.png/JPG/jpeg.... If it's still not working, check inside your images folder to see if you have the image. If that's not working, and you're using an absolute URL, like https://science.com/chemistry.png, check if that image still exists. This has happened before with a 5c coin image for the fun page.

