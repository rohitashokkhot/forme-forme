/* Author:
*/

$(document).ready(function(){

});

hedit= 0;
$(".hoverable").live("mouseenter",function(){
	//$("#editmenu").remove();
	$(this).addClass("boundRect");
	if(hedit==0)
		$(this).children(".hrc").append("<div id=editmenu><a href='#' id=hedit>Edit</a><a href='#' id=hduplicate>Duplicate</a><a href='#' id=hcancel>Cancel</a></div>");
	$(this).children(".hrc").show();
}).live("mouseleave",function(){
	$(this).removeClass("boundRect");
	if(hedit==0)
	{
		$(this).children(".hrc").hide();
		//var editable=$(this).find(".editable");
		//$(editable).attr("contentEditable", "false");
		$("#editmenu").remove();
	}
});

$("#hedit").live("click", function(){
	var parent= $(this).parent().parent().parent();
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

$("#hduplicate").live("click", function(){
	//alert("hi");
	//$("#editmenu").remove();
	var parent= $(this).parent().parent();
	var gparent = $(parent).parent();
	var clone = $(parent).siblings();
	var content = $(clone).html();
	//alert(content);
	var ucontent ="<div class='hoverable hc'> <div class='hlc'>" + content + "</div><div class=hrc style='display:none'></div></div>";
	//alert(ucontent);
	//$("#formcontent").append(ucontent);
	$(ucontent).insertAfter($(gparent));
});



