<?php
	
	$about_active     = 'nav-tab-active';
	$changelog_active = '';
	$content          = __('Mageewp Page Layout, accompanied with different kinds of page layout styles, makes page building and editing a much easier thing.Mageewp Page Layout also comes with pre-set modules like Banner, promo, service and team etc., which will help users build their site page layout from blank canvas whithin few minutes. More page layout styles you can expect from our new updates.', 'mageewp-page-layout');
	
	if ( isset($_GET['tab']) && $_GET['tab'] == 'mpl_changelog' ){
		
		$about_active     = '';
		$changelog_active = 'nav-tab-active';
		$content          = __("= 1.0.4 - 21/03/2017 =
* Add - Added animate and video background features for sections
* Add - Added section - Slider
* Add - Added section - Counter
* Add - Added section - Call To Action
* Add - Added section features - Testimonials Type
* Add - Added templates - Homepage Onetone
* Update - Updated templates - About 1
* Update - Updated templates - Contact 1
* Update - Updated templates - Services 1
* Update - Updated templates - 404/Homepage Classic
* Combine - Combined all section services

= 1.0.3 - 07/03/2017 =
* Fix - Fixed custom section issue 
* Fix - Fixed image upload issue
* Add - Added about Template
* Add - Added contact Template
* Add - Added services Template
* Add - Added 404 Template

= 1.0.2 - 06/03/2017 =
* Add - Added section - Clients
* Add - Added section - Promo 2
* Add - Added section - Service 2
* Add - Added section - Service 3
* Add - Added section - Skill 2
* Add - Added section - Google Map
* Add - Added section - Facebook Feed
* Add - Added section - Rencent Product
* Feature - Drag and drop order sections

= 1.0.1 - 23/02/2017 =
* Improved sections performance
* Fix - Fixed default value issue of section styling", 'mageewp-page-layout');
		
		}
?>
<h2 class="nav-tab-wrapper">
<a class="nav-tab <?php echo $about_active;?>" href="?page=mageewp_page_layout"><?php _e('About Mageewp Page Layout', 'mageewp-page-layout');?></a>
<a class="nav-tab <?php echo $changelog_active;?>" href="?page=mageewp_page_layout&tab=mpl_changelog"><?php _e('Change Log', 'mageewp-page-layout');?></a>
</h2>
<div class="mpl-info">
<p>
<?php echo str_replace("\r\n","<br>",$content);?>
</p>
</div>

