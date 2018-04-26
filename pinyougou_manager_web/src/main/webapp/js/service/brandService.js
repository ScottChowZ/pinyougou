app.service("brandService",function ($http) {
    this.search=function (pageNum,pageSize,searchEntity) {//分页条件查询
        return   $http.post('../brand/search.do?pageNum='+pageNum+'&&pageSize='+pageSize,searchEntity)
    }
    this.deleteBrand=function (selectIds) {
        return $http.post('../brand/delete.do?ids='+selectIds)
    }
    this.findOne=function (id) {
        return $http.post('../brand/findbyid.do?id='+id)
    }
    this.saveBrand=function (entity) {


        return  $http.post('../brand/savebrand.do',entity)
    }
    this.updateBrand=function (entity) {

        return $http.post('../brand/update.do',entity)
    }
    this.findAll=function () {

        return  $http.post('../brand/findAll.do')
    }
    this.selectOptionList=function(){
        return $http.get('../brand/selectOptionList.do');
    }

})