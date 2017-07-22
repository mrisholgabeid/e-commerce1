/*

jQuery(document).ready(function() {
	jQuery(".item").hover(function() {
		jQuery(".item").addClass("hovered");

		if(!(jQuery(".item")).hasClass("hovered")) {
			jQuery(".item").addClass("not_hovered");
		};
	});
});

*/

jQuery(document).ready(function() {
	//Hide the actual message first
	jQuery(".message_hover").hide();

	//Add and event listener for when a user hovers over the message icon
	jQuery(".message").click(function() {
		jQuery(".message_hover").fadeIn();
	});

	//Add and event listener for when a user hovers over the message icon
	jQuery(".message").mouseout(function() {
		jQuery(".message_hover").fadeOut();
	});

	jQuery(".item").append("<h6 class='category'>CATEGORY</h6>");


});
	