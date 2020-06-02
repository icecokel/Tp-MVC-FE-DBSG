<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<%@ include file="../include/header.jsp"%>

<section>

	<div align='center'>
		<h1>DB 출력 페이지</h1>
		
		<input type="text" id="searchText" placeholder="검색어를 입력해주세요"/>
		<button onclick="searchMenu()">검색</button>
		<div align="center" id="searchedList">
				<table id="searchedTable" border="1" style="visibility:hidden;">
					<tr>
						<td>메뉴번호</td>
						<td>이미지</td>
						<td>메뉴이름</td>
						<td>메뉴설명</td>
						<td>재료</td>
						<td>별점</td>
						<td>태그</td>
						<td>예상조리시간</td>
						<td>즐찾 수</td>
						<td>조회수</td>
					</tr>
				</table>
		</div>
		<hr />
		
		<div align="center" id="listDiv">
				<table id="listTable" border="1">
					<tr>
						<td>메뉴번호</td>
						<td>이미지</td>
						<td>메뉴이름</td>
						<td>메뉴설명</td>
						<td>재료</td>
						<td>별점</td>
						<td>태그</td>
						<td>예상조리시간</td>
						<td>즐찾 수</td>
						<td>조회수</td>
					</tr>
				</table>		

		</div>
	</div>
</section>

<script src="/webfe/resources/scripts/list.js"></script>
<%@ include file="../include/footer.jsp"%>