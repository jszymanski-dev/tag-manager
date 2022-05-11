const buttonSpinnerHtml = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> ';

$(document).ready(function() {
	var editTagModalElement = $('#edit-tag');
	var editTagModal = new bootstrap.Modal(editTagModalElement, {});

	var editUrlsModalElement = $('#edit-urls');
	var editUrlsModal = new bootstrap.Modal(editUrlsModalElement, {});

	var deleteTagModalElement = $('#delete-tag');
	var deleteTagModal = new bootstrap.Modal(deleteTagModalElement, {});

	var tooltipTriggerList = [].slice.call($('[data-bs-toggle="tooltip"]'))
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl)
	});


	$('.js-add-new-tag').click(function() {

		editTagModalElement.find('.modal-title').text(editTagModalElement.find('.modal-title').data('title-add'));
		editTagModalElement.find('#edit-tag-title').val('');
		editTagModalElement.find('#edit-tag-description').val('');
		editTagModalElement.find('#edit-tag-content').val('');
		editTagModalElement.find('#edit-tag-id').val('');
		editTagModalElement.find('#edit-tag-active').parent().fadeOut(0);
		editTagModalElement.find('#edit-tag-active').prop('checked', false);
		editTagModalElement.find('#new-tag-info').fadeIn(0);
		editTagModal.show();

	});

	$('#edit-tag-form').submit(function(e) {

		e.preventDefault();

		if ( ! $(this).eq(0)[0].checkValidity() ) return;
		
		var action = $('#edit-tag-id').val() === '' ? 'add_new_teg' : 'edit_tag';
		
		var request = $.ajax({
			type: "POST",
			url: "/api",
			data: {
				action: action,
				data: {
					id          : editTagModalElement.find('#edit-tag-id').val(),
					title       : editTagModalElement.find('#edit-tag-title').val(),
					description : editTagModalElement.find('#edit-tag-description').val(),
					content     : editTagModalElement.find('#edit-tag-content').val(),
					active      : editTagModalElement.find('#edit-tag-active').prop('checked') ? 1 : 0,
				},
			},
		});

		if ( action === 'add_new_teg' ) {
			request.done(function(data) {
				data = JSON.parse(data);
				// console.log(data);

				if ( typeof data.error === 'undefined' ) {
	
					var newTag = $('.tm-tag [data-tag-id="new"]');
					var newTagTemplate = newTag.parent()[0].outerHTML;

					data = data[Object.keys(data)[0]];
		
					newTag.attr('data-tag-id', data.id).data('tag-id', data.id);
					newTag.find('.tm-tag__title').text(data.title);
					newTag.find('.tm-tag__description').text(data.description);
					
					editTagModal.hide();
					$( newTagTemplate ).insertAfter( newTag.parent() );
					newTag.parent().fadeIn();
					
				} else {

					var alert = $('.alerts--error');
					alert.fadeIn(0);
					editTagModal.hide();
					setTimeout(() => {alert.fadeOut()}, 3000);
					
				}
				
			});
			
		} else if ( action === 'edit_tag' ) {
			request.done(function(data) {
				data = JSON.parse(data);
				// console.log(data);

				if ( typeof data.error === 'undefined' ) {
	
					var tag;

					data = data[Object.keys(data)[0]];
					tag = $('.tm-tag [data-tag-id="'+data.id+'"]')
		
					tag.find('.tm-tag__title').text(data.title);
					tag.find('.tm-tag__description').text(data.description);

					if ( data.active ) {
						tag.find('.card-image-top')
							.addClass('bg-opacity-50')
							.removeClass('bg-opacity-10')
							.text( tag.find('.card-image-top').data('active') );
						
					} else {
						tag.find('.card-image-top')
							.addClass('bg-opacity-10')
							.removeClass('bg-opacity-50')
							.text( tag.find('.card-image-top').data('inactive') );

					}
					
					editTagModal.hide();
					
				} else {

					var alert = $('.alerts--error');
					alert.fadeIn(0);
					editTagModal.hide();
					setTimeout(() => {alert.fadeOut()}, 3000);
					
				}
				
			});
			
		}
		
		
	});

	$('#edit-urls-form').submit(function(e) {

		e.preventDefault();

		if ( ! $(this).eq(0)[0].checkValidity() ) return;
		
		var action = 'edit_urls_list';
		
		$.ajax({
			type: "POST",
			url: "/api",
			data: {
				action: action,
				data: {
					id        : editUrlsModalElement.find('#edit-urls-id').val(),
					urls_list : editUrlsModalElement.find('#edit-urls-list').val().split("\n"),
				},
			},
		}).done(function(data) {
			data = JSON.parse(data);
			// console.log(data);

			if ( typeof data.error === 'undefined' ) {

				editUrlsModal.hide();
				
			} else {

				var alert = $('.alerts--error');
				alert.fadeIn(0);
				editUrlsModal.hide();
				setTimeout(() => {alert.fadeOut()}, 3000);
				
			}
			
		});
		
	});

	$('#delete-tag-form').submit(function(e) {

		e.preventDefault();

		if ( ! $(this).eq(0)[0].checkValidity() ) return;
		
		var action = 'delete_tag';
		
		$.ajax({
			type: "POST",
			url: "/api",
			data: {
				action: action,
				data: {
					id : deleteTagModalElement.find('#delete-tag-id').val(),
				},
			},
		}).done(function(data) {
			data = JSON.parse(data);
			// console.log(data);

			if ( typeof data.error === 'undefined' ) {

				deleteTagModal.hide();

				setTimeout(() => {

					$('[data-tag-id="'+data.id+'"').parent().fadeOut(300);
					
					setTimeout(() => {
						$('[data-tag-id="'+data.id+'"').parent().remove();
					}, 500);

				}, 500);
				
			} else {

				var alert = $('.alerts--error');
				alert.fadeIn(0);
				deleteTagModal.hide();
				setTimeout(() => {alert.fadeOut()}, 3000);
				
			}
			
		});
		
	});

	$(document).on('click', '.js-edit-tag', function() {
		var clickedBtn = $(this);
		clickedBtn.data('html', clickedBtn.html());
		clickedBtn.html(buttonSpinnerHtml);
		$('.js-edit-tag, .js-edit-urls, .js-delete-tag').attr('disabled', true);
		$('.tooltip').fadeOut(0);

		var action = 'get_tag_details';

		$.ajax({
			type: "POST",
			url: "/api",
			data: {
				action: action,
				data: {
					id : clickedBtn.parents('[data-tag-id]').data('tag-id'),
				},
			},
		}).done(function(data) {
			data = JSON.parse(data);
			// console.log(data);

			if ( typeof data.error === 'undefined' ) {

				data = data[Object.keys(data)[0]];

				editTagModalElement.find('.modal-title').html(editTagModalElement.find('.modal-title').data('title-edit') + ': <b>' + data.title + '</b>');
				editTagModalElement.find('#edit-tag-title').val(data.title);
				editTagModalElement.find('#edit-tag-description').val(data.description);
				editTagModalElement.find('#edit-tag-content').val(data.content);
				editTagModalElement.find('#edit-tag-id').val(data.id);
				editTagModalElement.find('#edit-tag-active').parent().fadeIn(0);
				editTagModalElement.find('#edit-tag-active').prop('checked', data.active);
				editTagModalElement.find('#new-tag-info').fadeOut(0);
				editTagModal.show();

				clickedBtn.html( clickedBtn.data('html') );
				$('.js-edit-tag, .js-edit-urls, .js-delete-tag').removeAttr('disabled');
				
			} else {
				
				var alert = $('.alerts--error');
				alert.fadeIn(0);
				setTimeout(() => {alert.fadeOut()}, 3000);
				
				clickedBtn.html( clickedBtn.data('html') );
				$('.js-edit-tag, .js-edit-urls, .js-delete-tag').removeAttr('disabled');
				
			}

		});
		
	});
	
	$(document).on('click', '.js-edit-urls', function() {
		var clickedBtn = $(this);
		clickedBtn.data('html', clickedBtn.html());
		clickedBtn.html(buttonSpinnerHtml);
		$('.js-edit-tag, .js-edit-urls, .js-delete-tag').attr('disabled', true);
		$('.tooltip').fadeOut(0);

		var action = 'get_urls_list';

		$.ajax({
			type: "POST",
			url: "/api",
			data: {
				action: action,
				data: {
					id : clickedBtn.parents('[data-tag-id]').data('tag-id'),
				},
			},
		}).done(function(data) {
			data = JSON.parse(data);
			// console.log(data);

			if ( typeof data.error === 'undefined' ) {

				var title = clickedBtn.parents('.card-body').find('.tm-tag__title').text();
				data = data[Object.keys(data)[0]];

				editUrlsModalElement.find('.modal-title').html(editUrlsModalElement.find('.modal-title').data('title-edit') + ': <b>' + title + '</b>');
				editUrlsModalElement.find('#edit-urls-id').val(clickedBtn.parents('[data-tag-id]').data('tag-id'));
				editUrlsModalElement.find('#edit-urls-list').val(data.join("\n"));
				editUrlsModal.show();

				clickedBtn.html( clickedBtn.data('html') );
				$('.js-edit-tag, .js-edit-urls, .js-delete-tag').removeAttr('disabled');
				
			} else {
				
				var alert = $('.alerts--error');
				alert.fadeIn(0);
				setTimeout(() => {alert.fadeOut()}, 3000);
				
				clickedBtn.html( clickedBtn.data('html') );
				$('.js-edit-tag, .js-edit-urls, .js-delete-tag').removeAttr('disabled');
				
			}

		});

	});

	$(document).on('click', '.js-delete-tag', function() {

		var clickedBtn = $(this);
		deleteTagModalElement.find('#delete-tag-id').val( clickedBtn.parents('[data-tag-id]').data('tag-id') );
		deleteTagModalElement.find('#delete-tag-title').val( clickedBtn.parents('[data-tag-id]').find('.tm-tag__title').text() );

		deleteTagModal.show();
		
	});

	$(document).on('click', '#clear-cache', function() {
		var clickedBtn = $(this);
		clickedBtn.attr('disabled', true);
		clickedBtn.data('html', clickedBtn.html());
		clickedBtn.html(buttonSpinnerHtml);

		$.ajax({
			type: "GET",
			url: "/api",
		}).done(function(data) {
			var success = 0;

			if ( success ) {
				clickedBtn.html( '<span class="text-success">DONE</span>' );
			} else {
				clickedBtn.html( '<span class="text-danger">ERROR</span>' );
			}
			setTimeout(function() {
				clickedBtn.html( clickedBtn.data('html') );
				clickedBtn.removeAttr('disabled');
			}, 3000);
		});
	});

	// Trigger
	// $('.js-add-new-tag').trigger('click');
	
});