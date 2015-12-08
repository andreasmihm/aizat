angular.module('PackageApp').controller('AddCtrl', function($scope, packageService) {
    $scope.addPack = function() {
        if ($scope.sender && $scope.recipient && $scope.description) {
            var newPack = {
                id: $scope.sender.charAt(0).toUpperCase() + $scope.recipient.charAt(0).toUpperCase() + getRandom(),
                sen: $scope.sender,
                rec: $scope.recipient,
                desc: $scope.description,
                status: 'processing'
            };
            packageService.addPack(newPack);
            flushFields();
            $scope.modalVis = false;
        }
    }
    
    $scope.modalVis = false;

    function flushFields() {
        $scope.sender = '';
        $scope.recipient = '';
        $scope.description = '';
    };

    function getRandom() {
        return Math.floor(Math.random() * (9999 - 1111) + 1111);
    }
});
