<form role="search" class="search-form" action="<?php echo esc_url(home_url('/'));?>">
 <div>
  <label class="sr-only"><?php _e("Search for","peony");?>:</label>
   <input type="text" name="s" value="<?php the_search_query(); ?>" placeholder="<?php esc_attr_e("Search","peony");?>&hellip;">
   <input type="submit" value="">
  </div>
 </form>