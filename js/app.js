function myCtrl($scope,$timeout){
	var updateClock=function(){
		$scope.clock=new Date();
		$timeout(function(){
			updateClock()
		},1000);
	};
	updateClock()
}

// function myCtrl($scope){
// 	$scope.clock={
// 		now:new Date;
// 	};
// 	var updateClock=function(){
// 		$scope.clock.now=new Date
// 	};
// 	setInterval(function(){
// 		$scope.$apply(updateClock)
// 	},1000);
// 	updateClock()
// }