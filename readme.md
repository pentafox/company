# Pentafox Company Website

***

## Features

- [X] 💅 [`styled-components`](https://www.styled-components.com/) v4
- [X] 🤠 [`react-bootstrap`](https://react-bootstrap.github.io/) uses Bootstrap v4
- [X] 🤠 [`FontAwesome Icons`](https://fontawesome.com/icons?m=free) - as React component
- [X] 💯 Optimized with [Google Lighthouse](https://developers.google.com/web/tools/lighthouse/) (including test)
- [X] 🤩 Page Transitions, component-based (with no-js support)
- [X] 👮‍♂️ `IntersectionObserver`, component-based (with polyfill)
- [X] 🌿 React Context for global UI state, with SSR
- [X] 🔥 Code Splitting of CSS and JS (component based)
- [X] 🔪 Inline SVG support
- [X] ⚙️ One config file for site-wide settings
- [X] 💙 Most social + meta tags in one component
- [X] 🖼 All favicons generated, only one icon file needed
- [X] 🌐 Offline support
- [X] 📄 Manifest support
- [X] 🗺 Sitemap support
- [X] 📱 Generated media queries for easy use
- [X] 😎 [Prettier](https://prettier.io/) for code style
- [X] 👷‍♂️ [CircleCI](https://circleci.com/) support
- [X] 🐙 Schema JSONLD
- [X] 🔎 [`size-plugin`](https://github.com/GoogleChromeLabs/size-plugin) to keep an eye on your bundle sizes
- [X] 👨‍🏫 ESLint (based on [`eslint-plugin-react`](./.eslintrc))

## Usage

[![Edit on CodeSandbox](https://cdn.rawgit.com/fabe/1dd805eed0153b47aba2b50cea2469ec/raw/64b0ea90c2a425d3847da908053f5f337128259b/edit-on-codesandbox-32px.svg)](https://codesandbox.io/s/github/pentafox/company)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/pentafox/company)

```bash
# To install dependencies
npm install

# To develop
npm run develop

# To build
npm run build

# To test SSR (for Lighthouse etc.)
npm run ssr

# To format JS (precommit)
npm run format

# To generate favicons (included in `build`)
npm run build:favicons
```

## Configuration

Find the site-wide configuration in `site-config.js`.

```js
module.exports = {
  siteTitle: `Pentafox`,
  siteTitleShort: `Pentafox`,
  siteDescription: `Technology at your doorsteps.`,
  siteUrl: `https://pentafox.in`,
  themeColor: `#000`,
  backgroundColor: `#fff`,
  pathPrefix: null,
  logo: path.resolve(__dirname, 'src/images/logo.png'),
  social: {
    twitter: `pentafox`
  }
};
```

> 🚨 Don't forget to update the `robots.txt` inside `static/`!

## Folder structure
```bash
├── gatsby-browser.js # Specify how Gatsby renders pages in the browser
├── gatsby-config.js # Gatsby config, mostly taken from `site-config.js`
├── gatsby-node.js # Modify webpack config
├── gatsby-ssr.js # Specify how Gatsby builds pages
├── site-config.js # Global settings for the whole site, used by multiple scripts
├── content # Content & data, in both json and markdown
├── src
│   ├── components
│   │   ├── head # All meta tags etc.
│   │   ├── layout # Layout component
│   │   │   ├── layout.css.js # .css.js for component's `styled-components`
│   │   │   └── layout.js
│   │   └── transition # Page Transition component, used by Gatsby APIs
│   ├── constants # Site-wide constants (breakpoints, colors, etc.)
│   ├── containers # Container components if store is needed
│   ├── helpers
│   │   ├── schemaGenerator.js # Generates JSON-LD schema.org snippets
│   │   └── mediaTemplates.js # Creates media queries for styled-components
│   ├── images # Images needed by the site/theme (not content)
│   ├── pages
│   ├── store # Store and provider of a React.createContext instance
│   └── global.css.js # Global CSS
└── scripts
    ├── lighthouse.test.js # Tests the site specified inside `site-config.js` with Google Lighthouse (WIP)
    └── favicons.js # Generates favicons and manifest using one png only.
```
