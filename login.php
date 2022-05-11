<?php

require_once './.functions.php';

if ( isset($_POST['usr']) && isset($_POST['pwd']) )
	if ( ($error_msg = login( $_POST['usr'], $_POST['pwd'] )) === '' ) header('Location: /admin');

if ( is_logged() ) header('Location: /admin');

?>
<!DOCTYPE html>
<html lang="en" class="h-100">
<head>
	<?php include('_header.php'); ?>
	<title>Tag Manager - Login</title>
</head>
<body class="d-flex h-100 flex-column bg-info bg-opacity-50">

	<?php include('_nav.php'); ?>

	<main class="container mt-5 pt-5">
		<div class="row justify-content-center">
			<div class="col-12 col-md-8 col-lg-6 col-xl-5">
				<div class="py-4 px-2 px-md-4 p-lg-5 border rounded-3 shadow bg-white">
					<div class="h3 text-center">Sign in</div>
					<form action="/login" method="POST" class="mt-5">
						<div class="form-floating mb-3">
							<input type="text" id="usr" name="usr" class="form-control" placeholder="user" required>
							<label for="usr">Username</label>
						</div>
						<div class="form-floating">
							<input type="password" id="pwd" name="pwd" class="form-control" placeholder="password" required>
							<label for="pwd">Password</label>
						</div>
						<div class="mb-3">
							<p class="text-danger"><?=isset($error_msg) ? $error_msg : '&nbsp;'?></p>
						</div>
						<div class="mt-4 text-center">
							<button class="btn btn-dark btn-lg">Sign in</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</main>

	<?php include('_footer.php'); ?>
	
</body>
</html>