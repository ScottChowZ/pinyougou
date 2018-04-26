app.controller("mycontroller",function ($scope,$controller,brandService) {
   $controller("baseController",{$scope:$scope})
    $scope.findAll=function () {
        brandService.findAll().success(//查所有品牌
            function (respone) {
                $scope.list=respone;
            })
    }

    /*  $scope.findPage=function () {
          $http.post('../brand/findPage.do?pageNum='+$scope.paginationConf.currentPage+'&&pageSize='+$scope.paginationConf.itemsPerPage).success(
              function (respone) {
                  $scope.list=respone.rows;
                  $scope.paginationConf.totalItems=respone.total;
              }
          )

      }*/
    $scope.saveBrand=function () {//保存
        var way=brandService.saveBrand($scope.entity);
        if($scope.entity.id!=null){
            way=brandService.updateBrand($scope.entity);
        }
        way.success(
            function (respone) {
                if(respone.success){
                    $scope.reloadList();
                }else{
                    alert(respone.message)
                }
            }
        )
    }

    $scope.findOne=function (id) {//修改查找

        brandService.findOne(id).success(
            function (respone) {

                $scope.entity=respone;
            }
        )

    }

    $scope.deleteBrand=function () {//删除
        brandService.deleteBrand($scope.selectIds).success(
            function (respone) {
                if(respone.success){
                    $scope.reloadList();
                }else {
                    alert(respone.message)
                }
            })
    }
    $scope.searchEntity={};//初始化对象

    $scope.search=function (pageNum,pageSize) {
        brandService.search(pageNum,pageSize,$scope.searchEntity).success(
            function (respone) {
                $scope.list=respone.rows;
                $scope.paginationConf.totalItems=respone.total;
            }
        )
    }

})