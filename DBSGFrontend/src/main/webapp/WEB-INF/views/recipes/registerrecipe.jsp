<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>

<%@ include file="../include/header.jsp"%>

<style>
#main {
	background-color: rgba(255, 255, 255, 0.65);
}
</style>

<section>

	<div align="center">


		<div id="main">

			<h1>레시피 등록 페이지</h1>

			<hr />
			<button onclick="recipeProcessAdd()">레시피 추가하기</button>
			<div id="recipeProcess"></div>
			<hr />
			<br />
			<Button onclick="sendJSON()">레시피 등록하기</Button>
			<Button onclick="createJSON()">test</Button>

		</div>
	</div>

</section>

<script>
	var object = new Object();

	var isKidOnly = ""

	if ('${menu.isKidOnly}' == "on") {
		isKidOnly = "Y"
	} else {
		isKidOnly = "N"
	}

	var totalTime = '${menu.totalTime}'
	var menu = {
		"menu_writer" : "admin",
		"menu_category" : "0",
		"menu_description" : '${menu.menu_description}',
		"menu_tag" : '${menu.menu_tag}',
		"menu_name" : '${menu.menu_name}',
		"menu_reqMaterial" : '${menu.menu_reqMaterial}',
		"menu_needlessMaterial" : '${menu.menu_needlessMaterial}',
		"menu_kids" : isKidOnly,
		"menu_totalTime" : totalTime,
		"menu_image":"",
	}

	object.menu = menu;
</script>
<script src="/webfe/resources/scripts/registerrecipe.js"></script>

<%@ include file="../include/footer.jsp"%>



