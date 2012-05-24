/* Author:
*/

$(document).ready(function(){

});

$("#hlc h1").hover(function(){
	$(this).addClass("boundRect");
	$(this).attr("contentEditable", "true");
	$("#hrc").show();
},function(){
	$(this).removeClass("boundRect");
	$(this).attr("contentEditable", "false");
	$("#hrc").hide();
});


