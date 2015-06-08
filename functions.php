<?php 
class BS3_Walker_Nav_Menu extends Walker_Nav_Menu {
    /**
	 * Traverse elements to create list from elements.
	 *
	 * Display one element if the element doesn't have any children otherwise,
	 * display the element and its children. Will only traverse up to the max
	 * depth and no ignore elements under that depth. It is possible to set the
	 * max depth to include all depths, see walk() method.
	 *
	 * This method shouldn't be called directly, use the walk() method instead.
	 *
	 * @since 2.5.0
	 *
	 * @param object $element Data object
	 * @param array $children_elements List of elements to continue traversing.
	 * @param int $max_depth Max depth to traverse.
	 * @param int $depth Depth of current element.
	 * @param array $args
	 * @param string $output Passed by reference. Used to append additional content.
	 * @return null Null on failure with no changes to parameters.
	 */
    function display_element( $element, &$children_elements, $max_depth, $depth, $args, &$output ) {
        $id_field = $this->db_fields['id'];

        if ( isset( $args[0] ) && is_object( $args[0] ) )
        {
            $args[0]->has_children = ! empty( $children_elements[$element->$id_field] );

        }

        return parent::display_element( $element, $children_elements, $max_depth, $depth, $args, $output );
    }

    /**
	 * @see Walker::start_el()
	 * @since 3.0.0
	 *
	 * @param string $output Passed by reference. Used to append additional content.
	 * @param object $item Menu item data object.
	 * @param int $depth Depth of menu item. Used for padding.
	 * @param int $current_page Menu item ID.
	 * @param object $args
	 */
    function start_el( &$output, $item, $depth = 0, $args = array(), $id = 0 ) {
        if ( is_object($args) && !empty($args->has_children) )
        {
            $link_after = $args->link_after;
            $args->link_after = '</a><button class="btn-nav"><span class="show glyphicon-plus glyphicon"></span></button><a style="display: none;">';
        }

        parent::start_el($output, $item, $depth, $args, $id);

        if ( is_object($args) && !empty($args->has_children) )
            $args->link_after = $link_after;
    }

    /**
	 * @see Walker::start_lvl()
	 * @since 3.0.0
	 *
	 * @param string $output Passed by reference. Used to append additional content.
	 * @param int $depth Depth of page. Used for padding.
	 */
    function start_lvl( &$output, $depth = 0, $args = array() ) {
        $indent = str_repeat("\t", $depth);
        $output .= "\n$indent<ul class=\"dropdown-menu list-unstyled\">\n";
    }
}

add_filter('nav_menu_link_attributes', function($atts, $item, $args) {
    if ( $args->has_children )
    {
        $atts['data-toggle'] = '';
        $atts['class'] = 'dropdown-toggle';
    }

    return $atts;
}, 10, 3);

function wpbootstrap_scripts_with_jquery()
{
    $js_directory = get_template_directory_uri() . '/bootstrap/js/'; 
    wp_register_script( 'bootstrap', $js_directory . 'bootstrap.js', 'jquery', '1.0' ); 
    wp_register_script( 'menu', $js_directory . 'script.js', 'jquery', '1.0' ); 
    wp_register_script( 'hyphenator', $js_directory . 'hyphenator.js', 'jquery', '1.0' );
    wp_enqueue_script( 'jquery' ); 
    wp_enqueue_script( 'bootstrap' ); 
    wp_enqueue_script( 'menu' ); 
    wp_enqueue_script( 'hyphenator' );
}
add_action( 'wp_enqueue_scripts', 'wpbootstrap_scripts_with_jquery' );

function custom_excerpt_length( $length ) {
    return 20;
}
add_filter( 'excerpt_length', 'custom_excerpt_length', 999 );
// Menus de navigation
register_nav_menu('primary', __('Primary Menu'));
function catch_that_image() {
    global $post, $posts;
    $first_img = '';
    ob_start();
    ob_end_clean();
    $output = preg_match_all('/<img.+src=[\'"]([^\'"]+)[\'"].*>/i', $post->post_content, $matches);
    $first_img = $matches [1] [0];

    if(empty($first_img)){ //Defines a default image
        $first_img = get_template_directory_uri() . '/bootstrap/img/default.jpg';
    }
    return $first_img;
}
function shortened_title() {
    $original_title = get_the_title();
    $title = html_entity_decode($original_title, ENT_QUOTES, "UTF-8");
    // indiquer le nombre de caratère
    $limit = "65";
    // fin du titre couper
    $ending="...";
    if(strlen($title) >= ($limit+3)) {
        $title = substr($title, 0, $limit) . $ending; 
    }
    echo $title;
}

function add_scripts() {
    wp_enqueue_script( 'jquery' );
    wp_enqueue_script( 'jquery-ui-autocomplete' );
    wp_register_style( 'jquery-ui-styles','http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery-ui.css' );
    wp_enqueue_style( 'jquery-ui-styles' );
    wp_register_script( 'my-autocomplete', get_template_directory_uri() . '/bootstrap/js/my-autocomplete.js', array( 'jquery', 'jquery-ui-autocomplete' ), '1.0', false );
    wp_localize_script( 'my-autocomplete', 'MyAutocomplete', array( 'url' => admin_url( 'admin-ajax.php' ) ) );
    wp_enqueue_script( 'my-autocomplete' );
}

add_action( 'wp_enqueue_scripts', 'add_scripts' );

function my_search() {
    $term = strtolower( $_GET['term'] );
    $suggestions = array();

    $loop = new WP_Query( 's=' . $term );

    while( $loop->have_posts() ) {
        $loop->the_post();
        $suggestion = array();
        $suggestion['label'] = get_the_title();
        $suggestion['link'] = get_permalink();

        $suggestions[] = $suggestion;
    }

    wp_reset_query();


    $response = json_encode( $suggestions );
    echo $response;
    exit();

}

add_action( 'wp_ajax_my_search', 'my_search' );
add_action( 'wp_ajax_nopriv_my_search', 'my_search' );

?>
