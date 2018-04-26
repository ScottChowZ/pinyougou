app.service("typeTemplateService",function ($http) {
        this.search=function (pageNum,pageSize,searchEntity) {//分页条件查询
            return   $http.post('../typeTemplate/search.do?page='+pageNum+'&&rows='+pageSize,searchEntity)
        }
        this.save=function (entiry) {

            return $http.post('../typeTemplate/add.do',entiry)
        }
      this.delete=function (selectIds) {

            return  $http.post('../typeTemplate/delete.do?ids='+selectIds)
      }
      this.findOne=function (id) {

          return $http.post('../typeTemplate/findOne.do?id='+id);
      }
})