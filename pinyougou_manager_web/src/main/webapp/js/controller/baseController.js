app.controller("baseController",function ($scope) {
    //分页控件配置
    $scope.paginationConf = {//页面初始化调用
        currentPage: 1,
        totalItems: 10,
        itemsPerPage: 10,
        perPageOptions: [10, 20, 30, 40, 50],
        onChange: function(){

            $scope.reloadList();//调用函数刷新
        }
    };
    $scope.reloadList=function(){

        $scope.search( $scope.paginationConf.currentPage, $scope.paginationConf.itemsPerPage);
    }

    $scope.selectIds=[];//初始化数组
    $scope.selectCheckbox=function(id,$event){//$event为dom
        if($event.target.checked){

            $scope.selectIds.push(id);
        }else {
            $scope.selectIds.splice($scope.selectIds.indexOf(id),1)
        }

    }

})