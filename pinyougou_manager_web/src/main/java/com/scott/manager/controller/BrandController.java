package com.scott.manager.controller;

import com.alibaba.dubbo.config.annotation.Reference;
import com.scott.pojo.TbBrand;
import com.scott.serllergoods.service.BrandService;

import entity.PageResult;
import entity.Result;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.sound.midi.Soundbank;
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
    @RequestMapping("/findPage")
    @ResponseBody
    public PageResult findPage(int pageNum,int pageSize){
        PageResult page = brandService.findPage(pageNum, pageSize);
        System.out.println("::::1");
        return  page;
    }
    @RequestMapping("/savebrand")
    @ResponseBody
    public Result saveBrand(@RequestBody TbBrand tbBrand){
        Result result = new Result();
        try {
            brandService.saveBrand(tbBrand);
            result.setSuccess(true);
            result.setMessage("增加成功");
        } catch (Exception e) {
            result.setSuccess(false);
            result.setMessage("增加失败");
            e.printStackTrace();
        }


        return  result;
    }

    @RequestMapping("findbyid")
    @ResponseBody
public  TbBrand findById(Long id){

        TbBrand tbBrand = brandService.findById(id);

    return tbBrand;
}
@RequestMapping("update")
@ResponseBody
public  Result updataBrand(@RequestBody TbBrand tbBrand){
    Result result = new Result();
    try {
        brandService.update(tbBrand);
        result.setSuccess(true);
        result.setMessage("更改成功");
    } catch (Exception e) {
        result.setSuccess(false);
        result.setMessage("更改失败");
        e.printStackTrace();
    }


    return  result;
}
@RequestMapping("delete")
@ResponseBody
public  Result deleteBrand(Long[]ids ){

    Result result = new Result();
    try {
        brandService.deleteBrand(ids);
        result.setSuccess(true);
        result.setMessage("删除成功");
    } catch (Exception e) {
        result.setSuccess(false);
        result.setMessage("删除失败");
        e.printStackTrace();
    }

    return result;
}
    @RequestMapping("/search")
    @ResponseBody
    public PageResult search(@RequestBody TbBrand tbBrand,Integer pageNum,Integer pageSize){
        PageResult page = brandService.search(tbBrand,pageNum, pageSize);

        return  page;
    }
}
