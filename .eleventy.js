module.exports = eleventyConfig => {
  // Converts numbers to uppercase letters, i.e. 1 => A, 2 => B etc.
  eleventyConfig.addFilter('numToUpperCase', num => String.fromCharCode(64 + num));
  // generate random number between one and num:
  eleventyConfig.addFilter('random', num => Math.ceil(Math.random() * num));

  return {
    dir: {
      input: 'src',
      output: 'public',
    },
  };
};