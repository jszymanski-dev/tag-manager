<?php

require_once './.functions.php';

if ( ! is_logged() ) header('Location: /login');

$db = new DB('tags');

?>
<!DOCTYPE html>
<html lang="en" class="h-100">
<head>
	<?php include('_header.php'); ?>
	<title>Tag Manager - Dashboard</title>
</head>
<body class="d-flex h-100 flex-column bg-light">

	<?php include('_nav.php'); ?>
	
	<main class="container border border-top-0 bg-white mb-auto pt-3 pb-3">
		<div class="row">
			<div class="col-12">
				<button class="btn btn-success w-100 js-add-new-tag">Add new tag</button>
			</div>
		</div>

		<div class="row mt-5">
			<div class="col-12">
				<div class="h3 mb-0">
					Your tags
					<button class="btn btn-sm btn-link" data-bs-toggle="modal" data-bs-target="#how-to-use">How to use?</button>
					<button class="btn btn-sm btn-link d-none" id="clear-cache">Clear cache</button>
				</div>
			</div>
		</div>

		<?php $tags = $db->tag_details( 0, false ); ?>
		<?php if ( ! $tags ) : ?>
			<?php $tags = []; ?>
		
			<div class="row">
				<div class="col">No tags</div>
			</div>

		<?php endif; ?>

		<?php $tags['new'] = []; ?>
		
		<div class="row mt-4 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-2">

			<?php if ( $tags ) : foreach ( $tags as $id => $tag ) : ?>
				<?php
					$active      = array_key_exists('active', $tag) ? $tag['active'] : 1;
					$title       = array_key_exists('title', $tag) ? $tag['title'] : '';
					$description = array_key_exists('description', $tag) ? $tag['description'] : '';
				?>
		
				<div class="tm-tag col" <?=$id === 'new' ? 'style="display: none;"' : ''?>>
					<div class="card h-100 text-center text-dark bg-light" data-tag-id="<?=$id?>">

						<div
							class="card-image-top py-2 py-md-3 py-xl-4 bg-dark <?=$active ? 'bg-opacity-50' : 'bg-opacity-10'?> fs-2 fw-bold lh-1 font-monospace text-white"
							data-active="&lt;/&gt;"
							data-inactive="inactive"
						><?=$active ? '&lt;/&gt;' : 'inactive'?></div>

						<div class="card-body d-flex flex-column h-100">
							<div class="mb-auto">
								<h5 class="tm-tag__title card-title fw-bold mb-4"><?=$title?></h5>
								<div class="tm-tag__description"><?=$description?></div>
							</div>
							<div class="mt-4">
								<button type="button" class="js-edit-tag btn btn-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Edit tag"><i class="bi bi-tag"></i></button>
								<button type="button" class="js-edit-urls btn btn-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Edit URLs list"><i class="bi bi-list-check"></i></button>
								<button type="button" class="js-delete-tag btn btn-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Remove tag"><i class="bi bi-trash"></i></button>
							</div>
						</div>
						
					</div>
				</div>

			<?php endforeach; endif; ?>

		</div>
	</main>

	<div class="modal fade" id="edit-tag" tabindex="-1" aria-hidden="true">
		<div class="modal-dialog modal-xl">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" data-title-edit="Edit tag" data-title-add="Add new tag">Edit tag</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<form id="edit-tag-form">
					<div class="modal-body">
						<div class="mb-3">
							<label for="edit-tag-title" class="form-label">Title*</label>
							<input type="text" id="edit-tag-title" name="edit-tag-title" class="form-control" required>
						</div>
						<div class="mb-3">
							<label for="edit-tag-description" class="form-label">Description</label>
							<textarea type="text" id="edit-tag-description" name="edit-tag-description" class="form-control" rows="3"></textarea>
						</div>
						<div class="mb-3">
							<label for="edit-tag-content" class="form-label">Tag*</label>
							<textarea type="text" id="edit-tag-content" name="edit-tag-content" class="form-control" rows="10" required></textarea>
						</div>
						<div class="mb-3 form-check form-switch">
							<input type="checkbox" id="edit-tag-active" name="edit-tag-active" class="form-check-input">
							<label for="edit-tag-active" class="form-check-label">Tag active</label>
						</div>
						<p><small id="new-tag-info">CAUTION: New tags are always enabled by default.<br></small>
						<small>* Required</small></p>
						<input type="hidden" id="edit-tag-id">
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Anuluj</button>
						<button type="submit" class="js-edit-tag-save btn btn-primary">Save</button>
					</div>
				</form>
			</div>
		</div>
	</div>

	<div class="modal fade" id="edit-urls" tabindex="-1" aria-hidden="true">
		<div class="modal-dialog modal-xl">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" data-title-edit="Edit URLs list">Edit URLs list</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<form id="edit-urls-form">
					<div class="modal-body">
						<div class="mb-3">
							<label for="edit-urls-list" class="form-label">Tag*</label>
							<div class="form-text mt-0 mb-2">If the URL points to the home page, it must end with <code class="bg-light border px-1">/</code>, i.e. <code class="bg-light border px-1">http://example.com/</code></div>
							<textarea type="text" id="edit-urls-list" name="edit-urls-list" class="form-control" rows="20"></textarea>
						</div>
						<input type="hidden" id="edit-urls-id">
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Anuluj</button>
						<button type="submit" class="js-edit-urls-save btn btn-primary">Save</button>
					</div>
				</form>
			</div>
		</div>
	</div>

	<div class="modal fade" id="delete-tag" tabindex="-1" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">Are you sure you want to permanently remove this tag?</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<form id="delete-tag-form">
					<div class="modal-body">
						<div class="input-group mb-3">
							<div class="input-group-text">Title: </div>
							<input type="text" class="form-control" id="delete-tag-title" value="Tytuł" disabled readonly>
						</div>
						<input type="hidden" id="delete-tag-id">
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Anuluj</button>
						<button type="submit" class="js-delete-tag-save btn btn-danger">Remove</button>
					</div>
				</form>
			</div>
		</div>
	</div>

	<!-- Modal -->
	<div class="modal fade" id="how-to-use" tabindex="-1" aria-hidden="true">
		<div class="modal-dialog modal-xl">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">How to use</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<p>Paste the code below at the beginning of your page's <code class="bg-light border px-1"><?=htmlspecialchars('<body>')?></code> section.</p>
					<p><pre class="bg-light border p-2"><?=htmlspecialchars($cfg['tag-script'])?></pre></p>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
				</div>
			</div>
		</div>
	</div>

	<div class="alerts container">
		<div class="row">
			<div class="col">
				<div class="alerts--error alert alert-danger " role="alert">
					Wystąpił błąd! Prosimy spróbować ponownie.
				</div>
			</div>
		</div>
	</div>

	<?php include('_footer.php'); ?>

</body>
</html>