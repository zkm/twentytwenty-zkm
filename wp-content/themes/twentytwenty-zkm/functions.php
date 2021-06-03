<?php 
// Import Parent Theme
add_action( 'wp_enqueue_scripts', 'tt_child_enqueue_parent_styles' );
function tt_child_enqueue_parent_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri().'/style.css' );
}

// CPT TAXONOMY
include( 'configure/cpt-taxonomy.php' );

// Utilities
include( 'configure/utilities.php' );

// CONFIG
include( 'configure/configure.php' );

// JAVASCRIPT & CSS
include( 'configure/js-css.php' );

// SHORTCODES
include( 'configure/shortcodes.php' );

// ACF
include( 'configure/acf.php' );

// HOOKS ADMIN
if( is_admin()) {
	include( 'configure/admin.php' );
}
