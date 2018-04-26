app.service("specificationService",function ($http) {
    this.search=function (pageNum,pageSize,searchEntity) {//分页条件查询
        return   $http.post('../specification/findPage.do?page='+pageNum+'&&rows='+pageSize,searchEntity)
    }
    this.findOne=function (id) {//修改查询
        return $http.post('../specification/findOne.do?id='+id)
    }
   this.save=function (entity) {
       return  $http.post('../specification/add.do',entity)
   }
   this.delete=function(selectIds){
       return $http.post('../specification/delete.do?ids='+selectIds)
   }
    this.selectOptionList=function () {
        return $http.post('../specification/selectOptionList.do');
    }

    })