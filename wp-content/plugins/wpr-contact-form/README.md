## WPR Contact Form

A modern WordPress contact form plugin built with React. This plugin replaces traditional PHP-based forms with a fast, interactive React-powered form, and is designed to be a drop-in replacement for Gravity Forms or similar plugins.

### Features
- React-based contact form with first/last name, email, question, and message fields
- AJAX submission (no page reload)
- Customizable via shortcode attributes
- Easy to style and extend

### Usage
1. **Build the plugin assets:**
	```sh
	yarn build   # for development
	yarn prod    # for production
	```
2. **Activate the plugin** in your WordPress admin.
3. **Add the shortcode** to any page or post:
	```
	[wpr-contact-form title="Contact Us"]
	```
	You can customize the `title` attribute as needed.

### Development
- React components are in `app/components/` and `app/containers/`.
- Webpack config: `webpack.config.js`
- Tests: `__tests__/`

### Author
Zach Schneider