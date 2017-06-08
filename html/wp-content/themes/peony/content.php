<?php
/**
 * @package peony
 */
	$display_image = peony_option('archive_display_image');
	$display_meta_readmore   = peony_option('display_meta_readmore');
	
	$post_class = 'entry-box-wrap';
	$has_post_thumbnail = '';
	if ( $display_image == '1' && has_post_thumbnail() ){
		$post_class = 'entry-box-wrap has-post-thumbnail';
		$has_post_thumbnail = '1';
		}
?>

<div id="post-<?php the_ID(); ?>" <?php post_class( $post_class ); ?>>
  <article class="entry-box">
  <?php if ( $has_post_thumbnail == '1' ): ?>
      <div class="feature-img-box">
          <div class="img-box figcaption-middle text-center from-top fade-in">
              <a href="<?php the_permalink();?>">
                  	<?php the_post_thumbnail(); ?>
                  <div class="img-overlay">
                      <div class="img-overlay-container">
                          <div class="img-overlay-content">
                              <i class="fa fa-plus"></i>
                          </div>
                      </div>                                                        
                  </div>
              </a>
          </div>                                                 
      </div>
	<?php endif; ?>
      <div class="entry-main">
          <div class="entry-header">
          <?php the_title( sprintf( '<a href="%s" rel="bookmark"><h1 class="entry-title">', esc_url( get_permalink() ) ), '</h1></a>' ); ?>
              <?php if ( 'post' == get_post_type() ) : ?>
              <ul class="entry-meta">
                  <?php peony_posted_on(); ?>
              </ul>
              <?php endif; ?>
          </div>
          <div class="entry-summary"><?php echo peony_get_summary();?></div>
          <?php if ( $display_meta_readmore == '1' ): ?>
          <div class="entry-footer">
              <a href="<?php the_permalink();?>" class="btn-normal peony_display_meta_readmore"><?php _e( 'Read More', 'peony' );?> &gt;&gt;</a>
          </div>
	<?php endif; ?>
      </div>
  </article>
</div>