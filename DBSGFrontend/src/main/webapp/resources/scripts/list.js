const endpoint = "http://ec2-15-165-205-186.ap-northeast-2.compute.amazonaws.com:8080/DBSG/";

const cetegoryList = [ "0", "1", "2", "3" ]

$(document).ready(function() {
	getList();

});

function searchMenu() {
	var searchText = document.getElementById("searchText").value

	
	if(searchText.length <1){
		return
	}
	let url = endpoint + "/menu/search/"

	searchedDel();

	$.ajax({
		url : url + searchText,
		type : 'GET',
		success : function(data) {
			let result = data.menuSearch;
			let len = result.length

			for (let i = 0; i < len; i++) {
				createItem(result[i], "searchedTable")
			}
		}
	})
}

function searchedDel() {
	var parent = document.getElementById("searchedTable");
	let len = parent.children.length
	
	console.log(parent.children)
	
	for(let i = 1 ; i < len ; i++){
		console.log(parent.children[1]);
		parent.removeChild(parent.children[1])
	}
}
function getList() {
	let url = endpoint + "menu/list"

	$.ajax({
		url : url,
		type : 'GET',
		success : function(data) {
			var list = data.menulist;
			let len = list.length; // 메뉴 배열의 크기
			console.log(data)
			for (let i = 0; i < len; i++) {
				//
				createItem(list[i], "listTable")
			}

		}

	})
}

function createItem(obj, parent) {
	// 부모 table
	var parent = document.getElementById(parent);

	parent.style.visibility = "visible";

	var tr = document.createElement("tr");
	tr.setAttribute("id", "item" + obj.menu_no);

	let tdNo = document.createElement("td")
	tdNo.innerText = obj.menu_no;
	tr.appendChild(tdNo);

	let tdImage = document.createElement("td")
	tdImage.innerText = obj.menu_image
	tr.appendChild(tdImage);

	let tdName = document.createElement("td")
	tdName.innerText = obj.menu_name
	tr.appendChild(tdName);

	let tdDesc = document.createElement("td")
	tdDesc.innerText = obj.menu_description
	tr.appendChild(tdDesc);

	let tdDMaterial = document.createElement("td")
	tdDMaterial.innerText = obj.menu_reqMaterial
	tr.appendChild(tdDMaterial);

	let tdStar = document.createElement("td")
	tdStar.innerText = obj.menu_star
	tr.appendChild(tdStar);

	let tdTag = document.createElement("td")
	tdTag.innerText = obj.menu_tag
	tr.appendChild(tdTag);

	let tdTime = document.createElement("td")
	tdTime.innerText = obj.menu_totalTime
	tr.appendChild(tdTime);

	let tdpre = document.createElement("td")
	tdpre.innerText = obj.preferCnt
	tr.appendChild(tdpre);

	let tdReadCnt = document.createElement("td")
	tdReadCnt.innerText = obj.readCnt
	tr.appendChild(tdReadCnt);

	parent.appendChild(tr);

}
