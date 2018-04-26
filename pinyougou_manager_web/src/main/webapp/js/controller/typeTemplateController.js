app.controller("typeTemplateController",function ($scope,$controller,typeTemplateService,brandService,specificationService) {
    $controller("baseController",{$scope:$scope})
    $scope.searchEntity={};//初始化对象
    $scope.search=function (pageNum,pageSize) {
        typeTemplateService.search(pageNum,pageSize,$scope.searchEntity).success(
            function (respone) {
                $scope.list=respone.rows;
                $scope.paginationConf.totalItems=respone.total;
            }
        )
    }
   /* $scope.brandList = {
        data: [{id:1,text:'bug'},{id:2,text:'duplicate'},{id:3,text:'invalid'},{id:4,text:'wontfix'}]
    };*/
    $scope.brandList={data:[]};//品牌列表
    //读取品牌列表
    $scope.findBrandList=function(){

        brandService.selectOptionList().success(
            function(response){
                $scope.brandList={data:response};
            }
        );
    }
$scope.specList={data:[]};//规格列表

    $scope.findSpecList=function () {
        specificationService.selectOptionList().success(
            function (response) {
                $scope.specList={data:response};

            }
        )
    }
    $scope.addTableRow=function(){//
        $scope.entity.customAttributeItems.push({});
    }
    $scope.deleTableRow=function(index){

        $scope.entity.customAttributeItems.splice(index,1);//删除
    }

    $scope.save=function () {


        typeTemplateService.save($scope.entity).success(
            function (respone) {
                if(respone.success){
                    $scope.reloadList();
                }else {
                    alert(respone.message)
                }
            }
        )
    }
    $scope.delete=function () {

     typeTemplateService.delete($scope.selectIds).success(
         function (respone) {
             if(respone.success){
                 $scope.reloadList();
             }else {
                 alert(respone.message)
             }
         }
     )
    }

    $scope.findOne=function (id) {
        typeTemplateService.findOne(id).success(
            function (respone) {

                $scope.entity=respone;
                $scope.entity.brandIds=  JSON.parse($scope.entity.brandIds);//转换品牌列表
                $scope.entity.specIds=  JSON.parse($scope.entity.specIds);//转换规格列表
                $scope.entity.customAttributeItems= JSON.parse($scope.entity.customAttributeItems);//转换扩展属性

            }
        )
    }
})