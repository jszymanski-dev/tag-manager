<?php

require_once '.functions.php';

$db = new DB('tags');

// var_dump($db->new_tag('Pinterest Nanolash', 's'));
// print_r($db->urls_details(3));
// $db->save_file('test-file', 'sadsdasd');
// $db->delete_file('test-file');

// var_dump( $db->edit_tag(2, '', '', '<!-- Pinterest tag -->') );

if ( ! isset($_POST['action']) ) exit();

if ( $_POST['action'] === 'add_new_teg' ) {
	$data = $_POST['data'];
	$results = $db->new_tag($data['title'], $data['description'], $data['content']);
	echo $results ? json_encode($results) : json_encode(['error' => 1]);
	
} elseif ( $_POST['action'] === 'edit_tag' ) {
	$data = $_POST['data'];
	$results = $db->edit_tag( $data['id'], $data['title'], $data['description'], $data['content'], $data['active'] );
	echo $results ? json_encode($results) : json_encode(['error' => 1]);
	
} elseif ( $_POST['action'] === 'get_tag_details' ) {
	$data = $_POST['data'];
	$results = $db->tag_details( $data['id'] );
	echo $results ? json_encode($results) : json_encode(['error' => 1]);

} elseif ( $_POST['action'] === 'get_urls_list' ) {
	$data = $_POST['data'];
	$results = $db->urls_details( $data['id'] );
	echo $results ? json_encode($results) : json_encode(['error' => 1]);
	
} elseif ( $_POST['action'] === 'edit_urls_list' ) {
	$data = $_POST['data'];
	$results = $db->update_urls( $data['id'], $data['urls_list'] );
	echo $results ? json_encode(['success' => 1]) : json_encode(['error' => 1]);
	
} elseif ( $_POST['action'] === 'delete_tag' ) {
	$data = $_POST['data'];
	$results = $db->remove_tag( $data['id'] );
	echo $results ? json_encode(['id' => $data['id']]) : json_encode(['error' => 1]);
	
}

?>