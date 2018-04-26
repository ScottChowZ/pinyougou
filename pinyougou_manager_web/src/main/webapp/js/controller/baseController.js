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
    //提取json字符串数据中某个属性，返回拼接字符串 逗号分隔[{"id":1,"text":"联想"},{"id":3,"text":"三星"},{"id":7,"text":"中兴"}]
    $scope.jsonToString=function(jsonString,key){
        var json=JSON.parse(jsonString);//将json字符串转换为json数组

        var value="";
        for(var i=0;i<json.length;i++){
            if(i>0){
                value+=","
            }
            value+=json[i][key];//根据key获得值并拼接  联想,三星,中兴
        }
        return value;
    }


})