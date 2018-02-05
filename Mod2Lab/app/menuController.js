app.controller('menuController', [
    '$scope',
    function($scope) {
        $scope.model = {
            title: 'Our Menu',
            mainDish: {}
        };
        $scope.$watch('model.mainDish.name', function(newValue, oldValue) {
            if (oldValue === 'BBQ Chicken Pizza') {
                alert('Why don\'t you select BBQ Chicken Pizza');
            }
        });
        $scope.changeMainDish = function(item, price) {
            $scope.model.mainDish.name = item;
            $scope.model.mainDish.price = '$' + price;
        }
    }
]);