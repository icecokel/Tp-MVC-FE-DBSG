<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<meta charset="UTF-8">

<!-- header.jsp 파일을 추가 -->
<%@ include file="include/header.jsp"%>
<style>
#tt,h3 {
	color: white;
}



</style>
<section>

	<div align="center">
		<a href="/webfe/recipes/list"><Button>DB 출력 페이지</Button> <br /></a> <a
			href="/webfe/recipes/registermenu"><Button>DB 입력 페이지</Button> <br /></a>
		<hr />

		<h3>쿼리생성</h3>
		<input type="text" id="tftagId" placeholder="VALUES"
			onKeyDown="onKeyDown();" /> <br />

		<div id="tt"></div>


	</div>

</section>
<script>
	var tags = ""

	function onKeyDown() {
		if (event.keyCode == 13) {
			var tftagId = document.getElementById("tftagId");
			var tag = tftagId.value;
			var tt = document.getElementById("tt");

			tags += 'insert into tag (tag_name) VALUES ("' + tag + '")<br/>';
			tt.innerHTML = tags;
			tftagId.value = "";
			tftagId.focus();

		}
	}
</script>


<%@ include file="include/footer.jsp"%>

