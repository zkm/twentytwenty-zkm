/* global window, document */

import React from 'react';
import { createRoot } from 'react-dom/client';
import Widget from './containers/Widget.jsx';

document.addEventListener('DOMContentLoaded', function() {
	const widget_containers = document.querySelectorAll('.wp-reactivate-widget');

	for (let i = 0; i < widget_containers.length; ++i) {
		const objectId = widget_containers[i].getAttribute('data-object-id');

	const root = createRoot(widget_containers[i]);
	root.render(<Widget wpObject={window[objectId]} />);
	}
});
