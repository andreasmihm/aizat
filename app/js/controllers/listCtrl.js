angular.module('PackageApp').controller('ListCtrl', function($scope, packageService) {

    $scope.packs = packageService.getPacks();

    $scope.getClass = function(id) {
        var stat = packageService.getPackByID(id)[0].status;
        switch (stat) {
            case 'processing':
                return 'warning';
                break;
            case 'transit':
                return 'info';
                break;
            case 'retour':
                return 'danger';
                break;
            case 'delivered':
                return 'success';
                break;

            default:
                return 'default';
        }
    }
    $scope.cycStatus = function(id) {
        packageService.changeStatus(id);
    }
    $scope.delete = function(id) {
        packageService.deletePack(id);
        $scope.packs = packageService.getPacks();
    }

});