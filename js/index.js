$(document).ready(function(){
	$('#hamb').click(function(){
		$('.menu').toggleClass('open');
    $(this).toggleClass('open');
	});
  $('#down').click(function() {
    scrollIntoView('.hier')
  })
});

function scrollIntoView(eleID) {
   var e = document.getElementById("eleID");
   if (!!e && e.scrollIntoView) {
       e.scrollIntoView();
   }
}
