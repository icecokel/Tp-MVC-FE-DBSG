package com.dbsg.webfe;

import java.util.Enumeration;
import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.multipart.MultipartHttpServletRequest;

@Controller
public class TestController {

	@GetMapping("recipes/registermenu")
	public String registermenu(Model model) {

		return "recipes/registermenu";
	}

	@PostMapping("recipes/registerrecipe")
	// public String registerrecipe(Model model, @RequestBody HashMap<String,Object>
	// map) {
	public String registerrecipe(Model model, MultipartHttpServletRequest request) {

		Map<String, Object> map = new HashMap<>();

//	    request안에 모든 데이터 확인하기.
		Enumeration params = request.getParameterNames();

		System.out.println("----------------------------");
		while (params.hasMoreElements()) {
			String name = (String) params.nextElement();
			System.out.println(name + " : " + request.getParameter(name));
			
			map.put(name, request.getParameter(name));
		}
		System.out.println("----------------------------");


		model.addAttribute("menu", map);

		 System.out.println(model.getAttribute("menu"));

		return "recipes/registerrecipe";
	}

	@GetMapping("recipes/list")
	public String dbList(Model model) {

		return "recipes/list";
	}
}
