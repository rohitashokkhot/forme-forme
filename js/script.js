/* Author:
*/

$(document).ready(function(){

});

var hedit= 0;
var qblock=0;
var qno=1;
var rbox=1;
var qradiobox=1;
$(".hoverable").live("mouseenter",function(){
	//$("#editmenu").remove();
	$(this).addClass("boundRect");
	if(hedit==0)
		$(this).children(".hrc").append("<div id=editmenu><a href='#' id=hedit>Edit</a><a href='#' id=hduplicate>Duplicate</a><a href='#' id=hdelete>Delete</a></div>");
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
	if($(parent).hasClass('qblock'))
		qblock=1;
	else
		qblock=0;
	//alert(qblock);	
	var editable = $(parent).find(".editable");
	
	if(hedit==0)
	{
		$(editable).attr("contentEditable", "true");
		$(editable).siblings(".responsebox").html("");
		if(qblock==1)
		{
			var dropbox = "<div id='qmenu'>Question type: <select id=passbox><option value=1 selected='selected'>Short answer</option><option value=2>Long answer</option><option value=3>Multiple choices</option></select></div>";
			//$(parent).find(".selectbox").show();
			$(editable).after(dropbox);
		}
		$(editable).focus();
		$(this).html("Save");
		hedit=1;
	}
	else
	{
		$(editable).attr("contentEditable", "false");
		$(this).html("Saved");
		hedit=0;
		$(parent).find("#qmenu").remove();
		$(parent).find(".addmore").remove();
	}
});

$("#hduplicate").live("click", function(){
	//alert("hi");
	//$("#editmenu").remove();
	if(hedit==0)
	{
		qno++;
		var parent= $(this).parent().parent();
		var gparent = $(parent).parent();
		var clone = $(parent).siblings();
		//rbox=1;
		var response = $(clone).children(".responsebox");
		var questiontitle = $(clone).children(".qtitle").html();
		//alert(questiontitle);
		if($(response).hasClass("multchoice"))
		{	
			
			var radbox= "<input type='radio' id='q"+ qno +"r"+ rbox +"' value='"+ rbox +"'  name= 'q"+ qno +"r' />";
			var secondhalf="";
			$(response).children("span").each(function(){
				var label = $(this).html();
				rbox++;
				//isradio=1;
				secondhalf = secondhalf + radbox + "<span>" + label + "</span> <br/>";
			});
			//qradiobox++;
			var second = "<div class='responsebox shortans'>" + secondhalf + "</div>";
			//alert(second);
		}
		first = "<div class='editable qtitle'>"+ questiontitle + "</div>"; 
		
		content= first + second;
		//alert(content);
		//if (qblock=0)
		var precontent ="<div class='hoverable hc slide qblock' style='display:none'>";
		var ucontent =precontent + "<div class='hlc'>" + content + "</div><div class=hrc style='display:none'></div></div>";
		//alert(ucontent);
		//$("#formcontent").append(ucontent);
		$(ucontent).insertAfter($(gparent));
		
		$(".slide").slideDown("slow", function(){
			//$(this).removeClass('slide');
		});
	}
});


$("select#passbox").live('change',function () {
	var val= $(this).val();
	//alert(val);
	//var parent = $(this).parent();
	var sib = $(this).parent().siblings(".responsebox");
	if(val==1)
	{
		$(sib).attr("class", "");
		$(sib).addClass("shortans");
		$(sib).addClass("responsebox");
		$(sib).html("<input type='text' name='tb"+ qno +"' id='tb"+ qno +"'/>");
	}
	else if(val==2)
	{
		$(sib).attr("class", "");
		$(sib).addClass("longans");
		$(sib).addClass("responsebox");
		$(sib).html("<textarea rows='2' cols='50' name='mtb"+ qno +"' id='mtb"+ qno +"'/>");
	}
	else if(val==3)
	{
		$(sib).attr("class", "");
		$(sib).addClass("multchoice");
		$(sib).addClass("responsebox");
		rbox=1;
		var radiobox1 = "<input type='radio' name= 'q"+ qno +"r' id='q"+ qno +"option"+ rbox +"' value='"+ rbox +"' /><span><input type='text' class='radiotext'/></span>";
		rbox++;
		var radiobox2 = "<input type='radio' name= 'q"+ qno +"r' id='q"+ qno +"option"+ rbox +"' value='"+ rbox +"' /><span><input type='text' class='radiotext'/></span>";
		rbox++;
		$(sib).html(radiobox1 + "<br />" + radiobox2 + "<br/> <a href='#' class='addmore'> Add more </a>");
		//qradiobox++;
	}
});

$("input.radiotext").live('focusout',function () {
	var val= $(this).val();
	//alert(val);
	var parent= $(this).parent();
	if(val)
		$(parent).html("<span class='radiospan'>" + val + "</span>");
});

$(".addmore").live("click", function(){

	var radiobox = "<input type='radio' name= 'q"+ qno +"r' id='q"+qno+"option" + rbox +"' value='"+ rbox +"' /><span><input type='text' class='radiotext'/></span><br/>";
	//qradiobox++;
	rbox++;
	$(this).before(radiobox);
	
});

$("span.radiospan").live('click',function () {
	var val= $(this).html();
	//alert(val);
	$(this).parent().html("<input type='text' class='radiotext'/>");
});


$("#hdelete").live("click", function(){
	//alert("hi");
	//$("#editmenu").remove();
	var parent= $(this).parent().parent();
	var gparent = $(parent).parent();

	$(gparent).slideUp("slow", function(){
		$(this).remove();
	});
});


$("#btnSubmit").live("click", function(){
	$("div .hoverable").removeClass("hoverable");
	var ques= $("#formcontent").html();
	//alert(ques);
	$.post('submit.php',{ques:ques}, function(data){
        //alert(data);
		
		$("#questions").html("Your form is ready at: <a href='form.php'>form</php>");
    }); 
});

