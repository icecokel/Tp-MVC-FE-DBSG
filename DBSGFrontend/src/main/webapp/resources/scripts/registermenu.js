const endpoint = "http://ec2-15-165-205-186.ap-northeast-2.compute.amazonaws.com:8080/DBSG/";
const endpointSub = "http://15.164.93.237:8080/";
let tagList= ["#매운요리","#국물요리","#자취요리","#불없는요리"];

function test() {
	var url = endpoint + "test";

	$.ajax({
		// contentType : 'application/json; charset=UTF-8',
		url : url,
		success : function(data) {
			console.log(data);
		},
		error : function(e) {
			console.log(e);
		}

	})

}


var menuName = document.getElementById("menuName");
var cetegory = document.getElementById("cetegory");
var reqMaterial = document.getElementById("reqMaterial");
var needlessMaterial = document.getElementById("needlessMaterial");
var description = document.getElementById("description");
var isKidOnly = document.getElementById("isKidOnly");
var images = document.getElementById("images");




function settingBtn() {
	menuName.value = "김치찌개 ";
	cetegory.value = "한식";
	reqMaterial.value = "김치, 양파, 찌개용고기";
	needlessMaterial.value = "뿌링클, 치즈볼";
	description.value = "세상에서 제일 맛있는 레시피지 뭐야.";
}

function createTags(){
	var checkboxSpan = document.getElementById("checkboxSpan")
	
	
	for(let i =0 ; i < tagList.length; i++){
		var newTag = document.createElement("input")
		newTag.setAttribute("name","tag");
		
		newTag.setAttribute("type","checkbox");
		newTag.setAttribute("value",tagList[i]);
		
		var newLable = document.createElement("label")
		newLable.innerHTML = tagList[i];
		
		checkboxSpan.appendChild(newLable);
		checkboxSpan.appendChild(newTag);
	}
	
}

var menuform = document.getElementById("menuform");

menuform.addEventListener("submit", function() {

	var tag = document.getElementsByName("tag");

	if (cetegory.value == "none"){
		
		alert("Check Category")
				cetegory.focus();	
		return;
	}
	
	// 어린이 전용 서비스 체크
	var kids = "";
	if(isKidOnly.checked){
		kids ="Y"
	}else{
		kids ="N"
	}
	// 체크된 태그 정리
	var tags = "";
	for(let i = 0 ; i< tag.length ; i++){
		
		if(tag[i].checked){
			
			tags += tag[i].value
		}
	}

	// tag post 전송
	let hiddenSpan = document.getElementById("hiddenSpan")
	var hiddenData = document.createElement("input")
	hiddenData.setAttribute("type","hidden");
	hiddenData.setAttribute("name","menu_tag");
	hiddenData.setAttribute("value",tags);
	hiddenSpan.appendChild(hiddenData);
	
	let imagePath = images.value.lastIndexOf("\\") +1
	
	

//	$.ajax({
//		contentType : 'application/json; charset=UTF-8',
//		url : "/webfe/recipes/registerrecipe",
//		type :'post',
//		data : JSON.stringify(menu),
//		success : function(data){
//			console.log(data);
//		}
//	})
	
})