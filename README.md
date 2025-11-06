# Banana
## 500 commits!! 🥳🎉🥳🎉
## The all-new Banana with eleventy SSG and nunjucks!
News, tech, politics, games, geography, maths and science site
<img src="/images/logosvg.svg" height="200px" alt="Our logo">
<details>
<summary><h2>How to write a news article</h2></summary>

1. Create a markdown file. It's actually very easy, just search up markdown. You can also look inside the code of this README. Some basics: heading = # heading, h2 = ## heading, etc. Normal text = normal text, bold or italic: &ast;&ast;bold&ast;&ast; and italics with underscore (_) around it
2. Send the markdown code to the owners
</details>

## How to add a page

1. Add your page to the top nav bar in `_includes/base.njk` (or `_includes/chinese.njk` for Chinese pages). If you don’t want it in the top nav bar, add it to the dropdown.
2. Add your page’s body content like this:
    ```
    ---
    layout: "base.njk"
    title: "Home" # The site will handle adding " - Banana"
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
- Check your CSS file is linked correctly (`/styles/mypage.css` in the head). If styling is weird, make sure that your CSS targets elements unique to your page (e.g. IDs or Classes like `# and .`, not general elements like `body`)
- For scripts, link your file at the bottom of your page or in the template. You'll need to create a new script file with your JS in `/scripts`. If it is a Maths page, simply link to 1stgrade.js. Currently (as of 1-2, 3-4, 5-6 and 7-9 pages), there is only reveal answer and dice roll code. If you need anything else, just add it to the file!
- For links, use `/page` instead of `page.html`, `/page.html` or `page`.
- For images, use `/images/image.png` and check your path and file extension.
- Make sure you do not have infinitely running loops as it will crash the client's tab/browser (e.g. `while(true){}`). 

If you need help or instructions aren’t clear, contact the maintainer.

---

Check that everything’s working by loading the website in your browser!
