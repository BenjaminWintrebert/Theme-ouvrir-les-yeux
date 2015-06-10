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
    wp_enqueue_script( 'jquery' ); 
    wp_enqueue_script( 'bootstrap' ); 
    wp_enqueue_script( 'menu' );
}
add_action( 'wp_enqueue_scripts', 'wpbootstrap_scripts_with_jquery' );

function custom_excerpt_length( $length ) {
    return 40;
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
function new_title($after = '', $length) {
    $shtitle = explode(' ', get_the_title(), $length);
    if (count($shtitle)>=$length) {
        array_pop($shtitle);
        $shtitle = implode(" ",$shtitle). $after;
    } else {
        $shtitle = implode(" ",$shtitle);
    }
    return $shtitle;
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

if ( function_exists('register_sidebar') )
    register_sidebar(array('name'=>'Sidebar',
                           'before_widget' => '<div>',
                           'after_widget' => '</div>',
                           'before_title' => '<h3>',
                           'after_title' => '</h3>',
                          ));

function wp_bootstrap_pagination( $args = array() ) {

    $defaults = array(
        'range'           => 5,
        'custom_query'    => FALSE,
        'previous_string' => __( '<i class="glyphicon glyphicon-chevron-left"></i>', 'text-domain' ),
        'next_string'     => __( '<i class="glyphicon glyphicon-chevron-right"></i>', 'text-domain' ),
        'before_output'   => '<div class="post-nav"><ul class="pager">',
        'after_output'    => '</ul></div>'
    );

    $args = wp_parse_args(
        $args,
        apply_filters( 'wp_bootstrap_pagination_defaults', $defaults )
    );

    $args['range'] = (int) $args['range'] - 1;
    if ( !$args['custom_query'] )
        $args['custom_query'] = @$GLOBALS['wp_query'];
    $count = (int) $args['custom_query']->max_num_pages;
    $page  = intval( get_query_var( 'paged' ) );
    $ceil  = ceil( $args['range'] / 2 );

    if ( $count <= 1 )
        return FALSE;

    if ( !$page )
        $page = 1;

    if ( $count > $args['range'] ) {
        if ( $page <= $args['range'] ) {
            $min = 1;
            $max = $args['range'] + 1;
        } elseif ( $page >= ($count - $ceil) ) {
            $min = $count - $args['range'];
            $max = $count;
        } elseif ( $page >= $args['range'] && $page < ($count - $ceil) ) {
            $min = $page - $ceil;
            $max = $page + $ceil;
        }
    } else {
        $min = 1;
        $max = $count;
    }

    $echo = '';
    $previous = intval($page) - 1;
    $previous = esc_attr( get_pagenum_link($previous) );

    $firstpage = esc_attr( get_pagenum_link(1) );
    if ( $firstpage && (1 != $page) )
        $echo .= '<li class="previous"><a title="' . __( 'Aller à la première page ', 'text-domain') .'" href="' . $firstpage . '">' . __( 'Première', 'text-domain' ) . '</a></li>';
    if ( $previous && (1 != $page) )
        $echo .= '<li><a href="' . $previous . '" title="' . __( 'Aller à la page précédente', 'text-domain') . '">' . $args['previous_string'] . '</a></li>';

    if ( !empty($min) && !empty($max) ) {
        for( $i = $min; $i <= $max; $i++ ) {
            if ($page == $i) {
                $echo .= '<li class="active"><span title="' . __( 'Vous êtes à la page ' .$i, 'text-domain') .'" class="active">' . str_pad( (int)$i, 2, '0', STR_PAD_LEFT ) . '</span></li>';
            } else {
                $echo .= sprintf( '<li><a title="' . __( 'Aller à la page ' .$i, 'text-domain') .'"  href="%s">%002d</a></li>', esc_attr( get_pagenum_link($i) ), $i );
            }
        }
    }

    $next = intval($page) + 1;
    $next = esc_attr( get_pagenum_link($next) );
    if ($next && ($count != $page) )
        $echo .= '<li><a href="' . $next . '" title="' . __( 'Aller à la page suivante', 'text-domain') . '">' . $args['next_string'] . '</a></li>';

    $lastpage = esc_attr( get_pagenum_link($count) );
    if ( $lastpage ) {
        $echo .= '<li class="next"><a title="' . __( 'Aller à la dernière page','text-domain') .'" href="' . $lastpage . '">' . __( 'Dernière', 'text-domain' ) . '</a></li>';
    }
    if ( isset($echo) )
        echo $args['before_output'] . $echo . $args['after_output'];
}
?>
