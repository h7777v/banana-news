module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("scripts");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("shareimages");
  eleventyConfig.addPassthroughCopy("data");
  eleventyConfig.addPassthroughCopy("server");
};