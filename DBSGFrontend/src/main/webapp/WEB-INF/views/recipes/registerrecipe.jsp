<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<%@ include file="../include/header.jsp"%>

<section>

	<div align="center">
	
	
		<div>
			<h1>레시피 등록 페이지</h1>
			
			<Button onclick="test()">HTTP 통신 테스트 버튼</Button>
			<br />

			<hr />
			<button onclick="recipeProcessAdd()">레시피 추가하기</button>
			<div id="recipeProcess">
				

			</div>
			<hr />
			<br /><Button>레시피 등록하기</Button>
			<Button onclick="createJSON()">test</Button>

		</div>
	</div>

</section>
<script>
var object = new Object();
var menu = {
	"menu_description" : '${menu.menu_description}',
	"menu_tag" : '${menu.menu_tag}',
	"menu_cetegory" : '${menu.menu_cetegory}',
	"menu_name" : '${menu.menu_name}',
	"menu_reqMaterial" : '${menu.menu_reqMaterial}',
	"menu_needlessMaterial" : '${menu.menu_needlessMaterial}',
}

object.menu = menu;


</script>
<script src="/webfe/resources/scripts/registerrecipe.js"></script>

<%@ include file="../include/footer.jsp"%>



