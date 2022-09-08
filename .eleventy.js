module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass/");
// Copy `img/` to `_site/img`
  eleventyConfig.addPassthroughCopy("./src/images");
  eleventyConfig.addWatchTarget("./src/**/*.html");

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
