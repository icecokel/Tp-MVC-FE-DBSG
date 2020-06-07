<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<%@ include file="../include/header.jsp"%>

<style>
#main {
	background-color: rgba(255, 255, 255, 0.65);
}
p {
 font-weight: bold;
}
</style>

<section>

	<div align='center'>


		<div id="main">


			<h1>메뉴 등록 페이지</h1>
			<Button onclick="settingBtn()">세팅 버튼</Button>
			
			<br />


			<form method="post" id="menuform" enctype="multipart/form-data"
				action="/webfe/recipes/registerrecipe">
								
				<input type="text" placeholder="메뉴이름" id="menuName" name="menu_name" /><br />

				<label> 태그선택하기 </label><br />
				 <span id="checkboxSpan"> 
				 
				 </span>

					<br /> <input type="text"
					id="reqMaterial" name="menu_reqMaterial" placeholder="필수재료" /><br />


				<input type="text" id="needlessMaterial"
					name="menu_needlessMaterial" placeholder="선택재료" /><br />




				<textarea id="description" name="menu_description" cols=30 rows=20></textarea>
				<br /> <input type="file" id="images" placeholder="이미지"
					accept=".jpg,.jpeg,.gif,.png" /><br /> 
					<label>이 메뉴는 어린이 전용인가요 ?</label>
					<input type="checkbox" id="menu_kids" name="isKidOnly" /> <br />
					 <input
					type="text" id="totalTime" name="totalTime" placeholder="예상 전체 소요시간" /><br /> <br />

				<input type="submit" value="메뉴등록하기" />
			</form>
		</div>
	</div>
</section>

<script src="/webfe/resources/scripts/registermenu.js"></script>
<%@ include file="../include/footer.jsp"%>