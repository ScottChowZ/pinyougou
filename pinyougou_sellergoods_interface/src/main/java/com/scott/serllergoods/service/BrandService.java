package com.scott.serllergoods.service;

import com.scott.pojo.TbBrand;
import entity.PageResult;

import java.util.List;
import java.util.Map;

/**
 * @author scott
 * @version 1.0
 * @description com.scott.serllergoods.service
 * @date 2018/4/21
 */
public interface BrandService {
    public List<TbBrand> findAll();
    public PageResult findPage(int pageNum,int pageSize);
    public void saveBrand(TbBrand tbBrand);
    public TbBrand findById(Long id);
    public void update(TbBrand tbBrand);
    public  void deleteBrand(Long[] ids);
    public PageResult search(TbBrand tbBrand,int pageNum,int pageSize);

    List<Map> selectOptionList();
}
