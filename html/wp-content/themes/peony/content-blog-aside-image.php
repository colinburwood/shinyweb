<?php  
	$display_image = peony_option('archive_display_image');
	$display_meta_readmore   = peony_option('display_meta_readmore');
	$post_class         = 'entry-box-wrap';
	$has_post_thumbnail = '';
	if ( $display_image == '1' && has_post_thumbnail() ){
		$post_class = 'entry-box-wrap has-post-thumbnail';
		$has_post_thumbnail = '1';
	}
 ?>
<div id="post-<?php the_ID(); ?>" <?php post_class( $post_class ); ?>>
  <article class="entry-box">
  <?php if (  $has_post_thumbnail == '1' ) :
         $image_attributes = wp_get_attachment_image_src( get_post_thumbnail_id(get_the_ID()), "related-post" );
  ?>
    <div class="entry-image">
      <div class="img-box figcaption-middle text-center fade-in"> <?php the_post_thumbnail();  ?>
        <div class="img-overlay">
          <div class="img-overlay-container">
            <div class="img-overlay-content">
              <div class="img-overlay-icons"> <a href="<?php the_permalink();?>"><i class="fa fa-link"></i></a> <a rel="prettyPhoto" href="<?php echo esc_url($image_attributes[0]);?>"><i class="fa fa-search"></i></a> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <?php endif;?>
    <div class="entry-main">
      <div class="entry-header">
        <h2 class="entry-title"><a href="<?php the_permalink();?>"><?php the_title();?></a></h2>
        <?php peony_posted_on();?>
      </div>
      <div class="entry-summary"><?php echo peony_get_summary();?></div>
      <?php if ( $display_meta_readmore == '1' ): ?>
          <div class="entry-footer">
              <a href="<?php the_permalink();?>" class="btn-normal peony_display_meta_readmore"><?php _e('Read More','peony');?> &gt;&gt;</a>
          </div>
          <?php endif; ?>
    </div>
  </article>
</div>
