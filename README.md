
# twentytwenty-zkm

## Overview

A modern WordPress development environment featuring custom themes and plugins, including the React-powered `wpr-contact-form` plugin.

## Installation

With Docker installed and running, in Terminal:

```sh
git clone git@github.com:zkm/twentytwenty-zkm.git
cd twentytwenty-zkm
./start_docker_compose.sh
```

Then in your browser:
- http://localhost:2000

## Custom Plugins

### wpr-contact-form

- Modern contact form built with React 19+ and Webpack 5
- Accessible, responsive, and easy to customize
- See `wp-content/plugins/wpr-contact-form/README.md` for usage and development details

## Development Notes

- React and Webpack are used for modern JS development in plugins
- Use `yarn build` or `yarn prod` in plugin directories to build assets
- All code is up-to-date with current best practices (React 18+/19+, no @babel/polyfill)
