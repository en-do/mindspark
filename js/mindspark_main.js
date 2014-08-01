$(document).ready(function(){
/* IE* placeholder fix */
	var IE='\v'=='v'
	if (IE) {
		$('[placeholder]').focus(function() {
			var input = $(this);
			if (input.val() == input.attr('placeholder')) {
				input.val('');
				input.removeClass('placeholder');
			}
			}).blur(function() {
				var input = $(this);
				if (input.val() == '' || input.val() == input.attr('placeholder')) {
					input.addClass('placeholder');
					input.val(input.attr('placeholder'));
				}
			}).blur();
		$('[placeholder]').parents('form').submit(function() {
			$(this).find('[placeholder]').each(function() {
				var input = $(this);
				if (input.val() == input.attr('placeholder')) {
					input.val('');
				}
			})
		});
	}
/* Other stuff */
/* animation arrow */
	/*function loop2() {
		var $a_left = $( ".arrow_l" ),
			$a_right = $( ".arrow_r" );
		$a_left.animate({
			left: "480"
			}, 800, function() {

			});
		$a_right.animate({
			right: "480"
			}, 800, function() {
				
			});
		$a_left.animate({
			left: "500"
			}, 700, function() {

			});
		$a_right.animate({
			right: "500"
			}, 700, function() {
				loop2();
			});
	}*/

});


$(document).ready(function(){
/* IE* placeholder fix */
	var IE='\v'=='v'
	if (IE) {
		$('[placeholder]').focus(function() {
			var input = $(this);
			if (input.val() == input.attr('placeholder')) {
				input.val('');
				input.removeClass('placeholder');
			}
			}).blur(function() {
				var input = $(this);
				if (input.val() == '' || input.val() == input.attr('placeholder')) {
					input.addClass('placeholder');
					input.val(input.attr('placeholder'));
				}
			}).blur();
		$('[placeholder]').parents('form').submit(function() {
			$(this).find('[placeholder]').each(function() {
				var input = $(this);
				if (input.val() == input.attr('placeholder')) {
					input.val('');
				}
			})
		});
	}
/* Other stuff */

	/* animation arrow */
	/*function loop2() {
		var $a_left = $( ".arrow_l" ),
			$a_right = $( ".arrow_r" );
		$a_left.animate({
			left: "480"
			}, 800, function() {

			});
		$a_right.animate({
			right: "480"
			}, 800, function() {
				
			});
		$a_left.animate({
			left: "500"
			}, 700, function() {

			});
		$a_right.animate({
			right: "500"
			}, 700, function() {
				loop();
			});
	}*/

/* popup choose */
	$('.close-popup').on('click', function() {
		$('#exit_pop, #overlay').hide(300);
	});

/* exit pop*/
	if ($("#exit_pop").length) {
			var ouiBo = ouibounce($('#exit_pop')[0], {
				aggressive: true,
				timer: 1,
				sensitivity: 2,
				callback: function() { $("#overlay").show(); loop2(); $("body").addClass("no_scroll");}
			});
		}
		$("#exit_pop").find(".close-popup").on('click', function(e) {
			$("#overlay").css("display","none");
			$("#exit_pop").css("display","none");
			$("body").removeClass("no_scroll");
			return false;
		});
		$("#overlay").on('click', function(e) {
			$("#overlay").css("display","none");
			$("#exit_pop").css("display","none");
			$("body").removeClass("no_scroll");
			return false;
		});
		$("#exit_pop").find(".btn-convert-now").on('click', function(e) {
			$("#overlay").css("display","none");
			$("#exit_pop").css("display","none");
			$("body").removeClass("no_scroll");
			return false;
		});
		
});
