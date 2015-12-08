angular.module('PackageApp').controller('StatusCtrl', function($scope, packageService, checkedStatus) {
    $scope.getNumberStatus = function(status) {
        return packageService.getPackByStatus(status).length;
    }
    
    $scope.showAll = function(){
        checkedStatus.flush();
    }
    
    $scope.filterStatus = function(stat){
        checkedStatus.toggle(stat);
    }
    $scope.checked = function(stat){
        return checkedStatus.check(stat);
    }
}).factory('checkedStatus', function() {
    var checked = [];
    return {
        check: function(stat) {
            if(checked.length > 0)
                return (checked.indexOf(stat) > -1) ? true : false;
            else
                return true;
        },
        toggle: function(stat) {
            if (checked.indexOf(stat) == -1)
                return checked.push(stat);
            else
                checked = checked.filter(function(elem) {
                    return elem !== stat;
                });
        },
        flush: function(){
            checked = [];
        }
    }
}).filter('status', ['checkedStatus', function(checkedStatus) {
    return function(packs) {
        return packs.filter(function(pack){
            return checkedStatus.check(pack.status);
        });
    };
}]);