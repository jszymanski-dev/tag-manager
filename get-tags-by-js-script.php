<?php

// Exit if no URL in GET
// if ( empty($_SERVER['HTTP_REFERER']) ) header('Location: /admin');
if ( empty($_SERVER['HTTP_REFERER'])) {
	http_response_code('404');
	exit();
	
}

header('Content-Type: application/javascript');

$url = ! empty($_GET['u']) ? urldecode($_GET['u']) : '';

require_once './.functions.php';

$db = new DB('tags');

$tags = $db->get_tags_by_url( $url );

if ( $tags ) :

	$tags = explode(PHP_EOL, $tags);
	$tags = array_map(
		function($el) {
			return trim($el);
		}, $tags
	);
	$tags = array_filter($tags,
		function($el) {
			return $el !== '';
		}
	);
	$tags = array_map(
		function($el) {
			return ' ' . $el;
		}, $tags
	);
	$tags = trim(implode('', $tags));
	$tags = str_replace("'", "\'", $tags);
	
?>
document.body.appendChild(document.createRange().createContextualFragment('<?=$tags?>'));
<?php
else :

	echo "// silence is gold";

endif;
exit();
?>