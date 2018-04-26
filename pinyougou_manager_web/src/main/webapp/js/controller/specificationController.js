app.controller("specification",function ($scope,$controller,specificationService) {
    $controller("baseController",{$scope:$scope})
    $scope.searchEntity={};//初始化对象
    $scope.search=function (pageNum,pageSize) {
        specificationService.search(pageNum,pageSize,$scope.searchEntity).success(
            function (respone) {
                $scope.list=respone.rows;
                $scope.paginationConf.totalItems=respone.total;
            }
        )
    }
    $scope.findOne=function (id) {//修改查找

        specificationService.findOne(id).success(
            function (respone) {

                $scope.entity=respone;
            }
        )

    }
    $scope.addTableRow=function(){//添加输入框
        $scope.entity.specificationOptionList.push({});
    }
    $scope.deleTableRow=function(index){
        $scope.entity.specificationOptionList.splice(index,1);//删除输入框
    }
 $scope.save=function () {//保存规格编辑
 specificationService.save($scope.entity).success(
     function (respone) {
             if(respone.success){
                 $scope.reloadList();
             }else{
                 alert(respone.message)
             }
     }
 )
}
$scope.delete=function () {
specificationService.delete($scope.selectIds).success(
    function (respone) {
        if(respone.success){
            $scope.reloadList();
        }else {
            alert(respone.message)
        }
    }
)

}

})