const endpoint = "http://ec2-15-165-205-186.ap-northeast-2.compute.amazonaws.com:8080/DBSG/";
const endpointSub = "http://15.164.93.237:8080/";
const tagList = [ "오븐없는 3끼  ", "에어프라이어 없는 3끼  ", "불 없는 3끼  ", "전자렌지만 있는 3끼  ",
		"봄같은 3끼  ", "여름적인 3끼", "가을스런 3끼", "겨울나는 3끼", "우리 아가를 위한 3끼",
		"엄마를 위한 3끼", "우리나라 3끼", "중국 3끼", "일본 3끼", "양식 3끼", "아시아 3끼",
		"살이 빠질 3끼", "피부가 좋아질 3끼", "독소가 빠질 3끼", "근손실을 막아줄 3끼", "자양장강제같은 3끼",
		"밥 3끼", "떠 먹을 3끼", "뽂아먹는 3끼", "달다구리 3끼", "마시는 3끼", "찍어먹는 3끼",
		"밥이랑 먹는 3끼", "날로 먹는 3끼", "익혀먹는 3끼", "무'쳐'먹는 3끼", "술 친구 3끼", "어서오 3끼",
		"손수 싸온 3끼", "속 풀릴 3끼", "자취 3끼", "명절 3끼", "내 3끼(데이트/이벤트)",
		"오래오래 해먹을 3끼", "빨리 먹는 3끼", "주워 먹는 3끼", "모르는 3끼", "분식 3끼", ];

$(document).ready(function() {
	createTags();

});

var menuName = document.getElementById("menuName");
var reqMaterial = document.getElementById("reqMaterial");
var needlessMaterial = document.getElementById("needlessMaterial");
var description = document.getElementById("description");
var isKidOnly = document.getElementById("isKidOnly");
var images = document.getElementById("images");

function settingBtn() {
	menuName.value = "김치찌개 ";
	reqMaterial.value = "김치, 양파, 찌개용고기";
	needlessMaterial.value = "뿌링클, 치즈볼";
	description.value = "세상에서 제일 맛있는 레시피지 뭐야.";
	totalTime.value = "600";
}

function createTags() {
	var checkboxSpan = document.getElementById("checkboxSpan")

	for (let i = 0; i < tagList.length; i++) {

		if (i < 4) {
			if (i == 0) {
				var newP = document.createElement("p")
				newP.innerHTML = "도구별"
				checkboxSpan.appendChild(newP);
			}
			createEle(i)
		} else if (i < 8) {
			if (i == 4) {
				var newP = document.createElement("p")
				newP.innerHTML = "계절별"
				checkboxSpan.appendChild(newP);
			}
			createEle(i)
		}else if (i < 10) {
			if (i == 8) {
				var newP = document.createElement("p")
				newP.innerHTML = "엄마와 아기"
				checkboxSpan.appendChild(newP);
			}
			createEle(i)
		}
		else if (i < 15) {
			if (i == 10) {
				var newP = document.createElement("p")
				newP.innerHTML = "카테고리 별"
				checkboxSpan.appendChild(newP);
			}
			createEle(i)
		}
		else if (i < 20) {
			if (i == 15) {
				var newP = document.createElement("p")
				newP.innerHTML = "뷰티/건강식"
				checkboxSpan.appendChild(newP);
			}
			createEle(i)
		}
		else if (i < 30) {
			if (i == 20) {
				var newP = document.createElement("p")
				newP.innerHTML = "종류별"
				checkboxSpan.appendChild(newP);
			}
			createEle(i)
		}
		else  {
			if (i == 30) {
				var newP = document.createElement("p")
				newP.innerHTML = "상황별"
				checkboxSpan.appendChild(newP);
			}
			createEle(i)
		}
	}

}

function createEle(idx) {
	var newLable = document.createElement("label")
	newLable.innerHTML = tagList[idx];

	checkboxSpan.appendChild(newLable);

	var newTag = document.createElement("input")
	newTag.setAttribute("name", "tag");

	newTag.setAttribute("type", "checkbox");
	newTag.setAttribute("value", idx);

	newLable.appendChild(newTag);
}

var menuform = document.getElementById("menuform");

menuform.addEventListener("submit", function() {

	let imagePath = images.value.lastIndexOf("\\") + 1

})