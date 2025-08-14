<?php 
// Properly enqueue parent and child theme styles
add_action( 'wp_enqueue_scripts', 'tt_child_enqueue_styles' );
function tt_child_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( 'child-style',
        get_stylesheet_directory_uri() . '/style.css',
        array( 'parent-style' ),
        wp_get_theme()->get('Version')
    );
}

// Include theme configuration files
$configure_files = array(
    'cpt-taxonomy.php',
    'utilities.php',
    'configure.php',
    'js-css.php',
    'shortcodes.php',
    'acf.php',
);

foreach ( $configure_files as $file ) {
    $file_path = get_stylesheet_directory() . '/configure/' . $file;

    if ( file_exists( $file_path ) ) {
        require_once( $file_path );
    }
}

// Include admin-related file if in the admin area
if ( is_admin() ) {
    $admin_file = get_stylesheet_directory() . '/configure/admin.php';

    if ( file_exists( $admin_file ) ) {
        require_once( $admin_file );
    }
}

// Add social icons.
add_filter( 'twentytwenty_svg_icons_social', 'customize_social_icons' );
function customize_social_icons( $icons ) {
    // Define constants for social icons if not already defined
    if ( ! defined( 'ICON_STACKOVERFLOW' ) ) {
        define( 'ICON_STACKOVERFLOW', '<svg class="svg-icon" aria-hidden="true" role="img" focusable="false" width="24" height="24" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg"><path d="M189.4,629.2v65.3h315.2v-65.3H189.4z M194.8,511.9l-4.5,65.3
	l314.4,21.3l4.1-64.9L194.8,511.9L194.8,511.9z M97.9,484.8V800H150H563h33.2V484.8h-52.1v262.7H150V484.8H97.9L97.9,484.8z M218.6,373.1L203,436.3l305.8,75.9l15.6-63.6L218.6,373.1z M286.3,215.1l-33.2,56.2L524.8,431l33.2-56.6L286.3,215.1z M452.1,65.3 l-54.2,36.5l175.3,261.5l54.2-36.1L452.1,65.3L452.1,65.3z M663.9,0l-64.9,7.8l38.2,312.8l64.9-7.8L663.9,0z" /></svg>' );
    }
    
    if ( ! defined( 'ICON_X' ) ) {
        define( 'ICON_X', '<svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M14.258 10.152L23.176 0h-2.113l-7.747 8.813L7.133 0H0l9.352 13.328L0 23.973h2.113l8.176-9.309 6.531 9.309h7.133zm-2.895 3.293l-.949-1.328L2.875 1.56h3.246l6.086 8.523.945 1.328 7.91 11.078h-3.246zm0 0"></path></svg>' );
    }

    // Map social icons
    $social_icons = array(
        'stackoverflow' => ICON_STACKOVERFLOW,
        'x' => ICON_X,
        // Add more icons as needed
    );

    // Merge the custom icons with the existing icons
    return array_merge( $icons, $social_icons );
}

// Add 'rel="me"' attribute to social menu links
add_filter( 'nav_menu_link_attributes', 'add_rel_attribute_to_social_menu_link', 10, 4 );
function add_rel_attribute_to_social_menu_link( $atts, $item, $args, $depth ) {
    if ( $args->theme_location === 'social' ) {
        $atts['rel'] = 'me';
    }
    return $atts;
}

// Remove comments template
function remove_comments_template() {
    remove_filter('comments_template', 'twentytwenty_comments_template_loader');
}
add_action('init', 'remove_comments_template');

function add_fediverse_meta_tag() {
    echo '<meta name="fediverse:creator" content="@zachschneider@mastodon.social">' . "\n";
}
add_action('wp_head', 'add_fediverse_meta_tag', 1);

