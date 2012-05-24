/* Author:
*/

$(document).ready(function(){

});

hedit= 0;
$(".hoverable").hover(function(){
	$(this).addClass("boundRect");
	//$(this).attr("contentEditable", "true");	
	$(this).children(".hrc").append("<a href='#' id=hedit> Edit </a>");
	$(this).children(".hrc").show();
},function(){
	$(this).removeClass("boundRect");
	//$(this).attr("contentEditable", "false");
	$(".hrc").hide();
	$("#hedit").remove();
});

$("#hedit").live("click", function(){
	var parent= $(this).parent().parent();
	var editable = $(parent).find(".editable");
	//var id = $(parent).attr("id");
	//alert(id);
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
		$(this).html("Edit");
		hedit=0;
	}
});


