package com.scott.sellergoods.service.impl;

import com.alibaba.dubbo.config.annotation.Service;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.scott.mapper.TbBrandMapper;
import com.scott.pojo.TbBrand;
import com.scott.pojo.TbBrandExample;
import com.scott.serllergoods.service.BrandService;
import entity.PageResult;
import entity.Result;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * @author scott
 * @version 1.0
 * @description com.scott.service
 * @date 2018/4/21
 */
@Service
public class BrandServiceImpl implements BrandService {
    @Autowired
private TbBrandMapper tbBrandMapper;
    @Override
    public List<TbBrand> findAll() {

        return tbBrandMapper.selectByExample(null);
    }

    @Override
    public PageResult findPage(int pageNum, int pageSize) {
        PageHelper.startPage(pageNum,pageSize);//下面第一个查询会被分页

        Page<TbBrand> page =(Page<TbBrand>) tbBrandMapper.selectByExample(null);//要获得总数据要用page
        PageResult pageResult = new PageResult();
        pageResult.setRows(page.getResult());//总数据
        pageResult.setTotal(page.getTotal());//总数
        return pageResult;
    }

    @Override
    public void saveBrand(TbBrand tbBrand) {
       tbBrandMapper.insert(tbBrand);

    }

    @Override
    public TbBrand findById(Long id) {
        TbBrand tbBrand = tbBrandMapper.selectByPrimaryKey(id);
        System.out.println("444"+tbBrand.getName());
        return tbBrand;
    }

    @Override
    public void update(TbBrand tbBrand) {

        tbBrandMapper.updateByPrimaryKey(tbBrand);
    }

    @Override
    public void deleteBrand(Long[] ids) {
        for (Long id : ids) {
            tbBrandMapper.deleteByPrimaryKey(id);
        }

    }
    @Override
public  PageResult search(TbBrand tbBrand,int pageNum, int pageSize){

    PageHelper.startPage(pageNum,pageSize);//下面第一个查询会被分页
        TbBrandExample example = new TbBrandExample();
        TbBrandExample.Criteria criteria = example.createCriteria();
        if(tbBrand!=null){

            if(tbBrand.getName()!=null&&tbBrand.getName().length()>0){
              criteria.andNameLike("%"+tbBrand.getName()+"%");
            }
            if(tbBrand.getFirstChar()!=null&&tbBrand.getFirstChar().length()>0){
              criteria.andFirstCharEqualTo(tbBrand.getFirstChar());
            }
        }
    Page<TbBrand> page =(Page<TbBrand>) tbBrandMapper.selectByExample(example);//要获得总数据要用page
    PageResult pageResult = new PageResult();
    pageResult.setRows(page.getResult());//总数据
    pageResult.setTotal(page.getTotal());//总数
    return pageResult;
}
}
