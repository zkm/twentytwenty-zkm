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


/**
 * 1. Map social icons.
 *
 * @hooked twentytwenty_social_icons_map
 *
 * @param array $icons Mapped icons.
 *
 * @return array $icons Newly mapped icons.
 */
add_filter( 'twentytwenty_social_icons_map', function( $icons ) {
    $icons['stackoverflow'] = array(
        'stackoverflow.com',
        // Add other URLs as needed
    );

    return $icons;
}, 10, 1 );
/**
 * 2. Add social icons.
 *
 * @hooked twentytwenty_svg_icons_social
 *
 * @param array $icons Registered icons.
 *
 * @return array $icons Newly registered icons.
 */

add_filter( 'twentytwenty_svg_icons_social', function( $icons ) {
    $icons['stackoverflow'] = '<svg className="svg-icon" aria-hidden="true" role="img" focusable="false" width="24" height="24" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg"><path d="M189.4,629.2v65.3h315.2v-65.3H189.4z M194.8,511.9l-4.5,65.3
	l314.4,21.3l4.1-64.9L194.8,511.9L194.8,511.9z M97.9,484.8V800H150H563h33.2V484.8h-52.1v262.7H150V484.8H97.9L97.9,484.8z M218.6,373.1L203,436.3l305.8,75.9l15.6-63.6L218.6,373.1z M286.3,215.1l-33.2,56.2L524.8,431l33.2-56.6L286.3,215.1z M452.1,65.3 l-54.2,36.5l175.3,261.5l54.2-36.1L452.1,65.3L452.1,65.3z M663.9,0l-64.9,7.8l38.2,312.8l64.9-7.8L663.9,0z" /></svg>';

    return $icons;
}, 10, 1 );

function add_rel_attribute_to_social_menu_link($atts, $item, $args, $depth) {
    if ($args->theme_location === 'social') {
        $atts['rel'] = 'me';
    }
    return $atts;
}
add_filter('nav_menu_link_attributes', 'add_rel_attribute_to_social_menu_link', 10, 4);

