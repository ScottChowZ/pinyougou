package com.scott.controller;

import com.alibaba.dubbo.config.annotation.Reference;
import com.scott.pojo.TbBrand;
import com.scott.serllergoods.service.BrandService;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author scott
 * @version 1.0
 * @description com.scott.controller
 * @date 2018/4/21
 */
@Controller
@RequestMapping("/brand")

public class BrandController {
     @Reference
    private BrandService brandService;
    @RequestMapping("/findAll")
    @ResponseBody
    public List<TbBrand> findAll(){
        return brandService.findAll();
    }

}
