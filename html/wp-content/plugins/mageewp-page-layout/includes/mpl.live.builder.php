<?php

if (!defined('ABSPATH')) {
    header('HTTP/1.0 403 Forbidden');
    exit;
}

$id = isset( $_GET['id'] ) ? esc_attr( $_GET['id'] ) : 0;

if (FALSE === get_post_status($id)) {
    echo '<script type="text/javascript">window.location.href="'.admin_url('/post.php?action=edit&post='.$id).'";</script>';
    return;
}

$link = get_permalink($id);
if (is_ssl()) {
	$link = str_replace('http:', 'https:', $link);
}

$data = get_post_meta($id, 'mpl_data', true);

if (!is_array($data))
	$data = array( "mode" => "mpl", "classes" => "", "css" => "");

$data["mode"] = 'mpl';

if (!add_post_meta($id, 'mpl_data', $data, true))
	update_post_meta($id, 'mpl_data', $data);

if (strpos($link, '?') === false)
	$link .= '?mpl_action=live-editor';
else 
	$link .= '&mpl_action=live-editor';
    
?>
<div id="mpladminbar">
	<ul class="mpl-bar-left">
		<li class="mpl-logo">Mageewp Page Layout</li>
	</ul>
	<ul class="mpl-bar-right">
		<li class="mobile"><i class="fa-mobile"></i></li>
		<li class="tablet"><i class="fa-tablet"></i></li>
		<li class="desktop"><i class="fa-desktop"></i></li>
		<li class="remove"><i class="fa-trash-o">&nbsp;Remove All Section</i></li>
		<li class="import"><i class="fa-pencil-square-o">&nbsp;Import Templates</i></li>
		<li class="add"><i class="fa-plus">&nbsp;Add Section</i></li>
		<li class="save"><i class="fa-check ">&nbsp;Update</i></li>
		<li class="exit"><i class="fa-sign-in">&nbsp;Exit</i></li>
	</ul>
</div>
<div id="mpl-live-frame-wrp">
	<iframe id="mpl-live-frame" src="<?php echo esc_url( $link ); ?>"></iframe>
    <div id="mpl-live-frame-resizer"></div>
</div>
<div style="height: 0px;width: 0px;overflow:hidden;">
	<?php wp_editor('', 'mpl-editor-preload', array("wpautop" => false, "quicktags" => true)); ?>
</div>
<script type="text/javascript">
	jQuery('#wpadminbar,#wpfooter,#adminmenuwrap,#adminmenuback,#adminmenumain,#screen-meta').remove();
</script>