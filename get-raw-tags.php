<?php

$url = ! empty($_GET['u']) ? urldecode($_GET['u']) : '';

if ( ! $url ) exit();

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

require_once './.functions.php';

$db = new DB('tags');

$tags = $db->get_tags_by_url( $url );

if ( $tags ) echo $tags;

exit();