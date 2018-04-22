package com.scott.service;

import com.alibaba.dubbo.config.annotation.Service;
import com.scott.mapper.TbBrandMapper;
import com.scott.pojo.TbBrand;
import com.scott.serllergoods.service.BrandService;
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
}
