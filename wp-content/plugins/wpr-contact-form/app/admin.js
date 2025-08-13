/* global window, document */

import React from 'react';
import { createRoot } from 'react-dom/client';
import Admin from './containers/Admin.jsx';

document.addEventListener('DOMContentLoaded', function() {
	const root = createRoot(document.getElementById('wp-reactivate-admin'));
	root.render(<Admin wpObject={window.wpr_object} />);
});
