import fetch from "node-fetch";
import cheerio from "cheerio";

export async function handler(event, context) {
  try {
    const blockjump = await fetch("https://banananews.netlify.app/blockjump.html");
    const response = await fetch("https://banananews.netlify.app/TAS.html");
    const html = await response.text();
    const content = cheerio.load(html);
    const blockjumphtml = cheerio.load( await (await blockjump).text());
    blockjumphtml("script").attr("src", "/scripts/blockjumpTAS.js");
    content("#header").html("Welcome to the TAS page. ");
    content("#main").html(blockjumphtml);
    return {
      statusCode: 200,
      headers: { "Content-Type": "text/html" },
      body: content.html()
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: `Error fetching HTML: ${error.message}`
    };
  }
}
