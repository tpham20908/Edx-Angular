app.controller('menuController', [
    '$scope',
    function($scope) {
        $scope.model = {title: 'Our Menu'};
        $scope.$watch('model.mainDish', function(newValue, oldValue) {
            if (oldValue === 'BBQ Chicken Pizza') {
                alert('Why don\'t you select BBQ Chicken Pizza');
            }
        });
        $scope.changeMainDish = function(item) {
            $scope.model.mainDish = item;
        }
    }
]);