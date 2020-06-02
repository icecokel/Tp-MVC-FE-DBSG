const endpoint = "http://ec2-15-165-205-186.ap-northeast-2.compute.amazonaws.com:8080/DBSG/";
const endpointSub = "http://15.164.93.237:8080/";

var recipeProcess = document.getElementById("recipeProcess");
var recipeList = [];

function test() {
	var url = endpoint + "test";

	$.ajax({
		// contentType : 'application/json; charset=UTF-8',
		url : url,
		success : function(data) {
			console.log("성공");
			console.log(data);
		},
		error : function(e) {

			console.log("연결 에러 ");
			console.log(e);
		}
	})
}

var processNum = 0;

function recipeProcessAdd() {
	processNum++
	var htmls = "";

	var newDiv = document.createElement("div")
	newDiv.setAttribute("class", "newDiv");
	newDiv.setAttribute("id", "proDiv" + processNum);
	
	
	
	
	htmls += "<span >" + processNum + "</span>" + "&nbsp" + "&nbsp";
	htmls += "<input type='text' id= 'action" + processNum
			+ "' placeholder='액션'/>";
	htmls += "Fire"
	htmls += "<input type='radio' name ='fire" + processNum + "' value='1'/>";
	htmls += "<input type='radio' name ='fire" + processNum + "' value='2'/>";
	htmls += "<input type='radio' name ='fire" + processNum + "' value='3'/>";
	htmls += "<input type='radio' name ='fire" + processNum + "' value='4'/>";
	htmls += "<input type='radio' name ='fire" + processNum + "' value='5'/>";
	htmls += "<lable>소요시간</label>";
	htmls += "<select id='hour" + processNum + "'>";
	
	for(let h = 0 ; h < 24 ;h++){
		htmls += "<option value='"+h+"'>"+h+"(시)</option>"
	}
	
	htmls +="</select>"
	htmls += "<select id='minute" + processNum + "'>";	
		for(let m = 0 ; m < 60 ; m++){
			htmls += "<option value='"+m+"'>"+m+"(분</option>"
		}
	htmls +="</select>"
	
	htmls += "<select id='seconds" + processNum + "'>";	
		for(let s = 0 ; s < 60 ; s = s + 10){
			htmls += "<option value='"+s+"'>"+s+"(초)</option>"
		}
	htmls +="</select>"
	htmls += "<input type='file' placeholder='이미지' accept='.jpg,.jpeg,.gif,.png'/>";
	htmls += "<button onclick='recipeProcessDelete(" + processNum
			+ ")'>삭제</button>";

	newDiv.innerHTML = htmls

	console.log(newDiv);

	recipeProcess.appendChild(newDiv);

}

function createJSON() {
	console.log(object.menu);

	var parentDiv = document.getElementById("recipeProcess").children
	
	let len = parentDiv.length;
	
	console.log(parentDiv);
	
	for (let i = 0; i < len; i++) {
		
		let num = parseInt(parentDiv[i].id.substring(6))
		
		
		let recipe_processNo = i + 1;
		let recipe_action = document.getElementById("action"+num).value

		var fire = document.getElementsByName("fire" + num)

		let recipe_fire = ""
		for (let j = 0; j < 5; j++) {
			if (fire[j].checked) {
				recipe_fire = j + 1
			}
		}
		
		let hour = document.getElementById("hour"+num).value
		let minute = document.getElementById("minute"+num).value
		let seconds = document.getElementById("seconds"+num).value
		
		//조리시간을 초로 환산
		let recipe_reqTime = parseInt(hour)*1800 + parseInt(minute)*60 + parseInt(seconds);
		
		
		var recipe = {
			"recipe_processNo" : recipe_processNo,
			"recipe_action" : recipe_action,
			"recipe_fire" : recipe_fire,
			"recipe_reqTime" : recipe_reqTime,
		}

		recipeList.push(recipe)
	}

	object.recipe = recipeList;
	console.log(object)

}

function recipeProcessDelete(idx) {
	let delDiv = document.getElementById("proDiv" + idx);
	
	recipeProcess.removeChild(delDiv);

}
