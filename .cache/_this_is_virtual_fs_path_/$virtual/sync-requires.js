
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/georginahowe/Projects/rateaway/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/georginahowe/Projects/rateaway/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/georginahowe/Projects/rateaway/src/pages/index.js")),
  "component---src-pages-rating-markdown-remark-frontmatter-slug-jsx": preferDefault(require("/Users/georginahowe/Projects/rateaway/src/pages/rating/{markdownRemark.frontmatter__slug}.jsx"))
}

