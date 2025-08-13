/* global window, document */

import React from 'react';
import { createRoot } from 'react-dom/client';
import Shortcode from './containers/Shortcode.jsx';

document.addEventListener('DOMContentLoaded', function() {
	const shortcode_containers = document.querySelectorAll('.wp-reactivate-shortcode');

	for (let i = 0; i < shortcode_containers.length; ++i) {
		const objectId = shortcode_containers[i].getAttribute('data-object-id');

	const root = createRoot(shortcode_containers[i]);
	root.render(<Shortcode wpObject={window[objectId]} />);
	}
});
