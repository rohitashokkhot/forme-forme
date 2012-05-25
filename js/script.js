/* Author:
*/

$(document).ready(function(){

});

hedit= 0;
$(".hoverable").editing=0;
$(".hoverable").hover(function(){
	$(this).addClass("boundRect");
	if(hedit==0)
		$(this).children(".hrc").append("<a href='#' id=hedit> Edit </a>");
	$(this).children(".hrc").show();
},function(){
	$(this).removeClass("boundRect");
	if(hedit==0)
	{
		$(".hrc").hide();
		//var editable=$(this).find(".editable");
		//$(editable).attr("contentEditable", "false");
		$("#hedit").remove();
	}
});

$("#hedit").live("click", function(){
	var parent= $(this).parent().parent();
	var editable = $(parent).find(".editable");
	if(hedit==0)
	{
		$(editable).attr("contentEditable", "true");
		$(editable).focus();
		$(this).html("Save");
		hedit=1;
	}
	else
	{
		$(editable).attr("contentEditable", "false");
		$(this).html("Saved");
		hedit=0;
	}
});


