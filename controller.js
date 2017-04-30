function FormController($scope) {
    $scope.comment = [];

    $scope.btn_add = function() {
        if($scope.txtcomment !=''){
        $scope.comment.push($scope.txtcomment);
        $scope.txtcomment = "";
        }
    }

    $scope.removeItem = function($index) {
        $scope.comment.splice($index, 1);
    }

    $scope.appDetails = {
  		title: "Post Your Comment",
  		btnText: "Post Comment",
      label: "Comments",
      placeholder: "Your Comment",
      delete: "x"
  	};
}
