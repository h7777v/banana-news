const handlebarsPlugin = require("@11ty/eleventy-plugin-handlebars");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(handlebarsPlugin);
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("scripts");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("shareimages");
  eleventyConfig.addPassthroughCopy("data");
  eleventyConfig.addPassthroughCopy("server");
  eleventyConfig.addPassthroughCopy("fonts");
};