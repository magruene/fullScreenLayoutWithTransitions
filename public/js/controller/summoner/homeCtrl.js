angular.module('manageThatBetter')
    .controller("SummonerHomeController", function ($scope, $document, Summoner, $mdUtil, $mdSidenav) {

        $scope.loading = false;
        $scope.input = {};

        $scope.openLeftMenu = function () {
            $mdSidenav('left').toggle();
        };

        $scope.searchBySummonerName = function () {
            $scope.loading = true;
            $scope.summoners = undefined;
            Summoner.getByName({names: $scope.input.summonerName}, function (response) {
                $scope.loading = false;
                $scope.summoners = response.summoners;
                console.log($scope.summoners);
            });
        }

        $scope.toggleLeft = buildToggler('left');
        $scope.toggleRight = buildToggler('right');
        /**
         * Build handler to open/close a SideNav; when animation finishes
         * report completion in console
         */
        function buildToggler(navID) {
            var debounceFn =  $mdUtil.debounce(function(){
                $mdSidenav(navID)
                    .toggle()
                    .then(function () {
                        $log.debug("toggle " + navID + " is done");
                    });
            },300);
            return debounceFn;
        }
    })

    .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
        $scope.close = function () {
            $mdSidenav('left').close()
                .then(function () {
                    $log.debug("close LEFT is done");
                });
        };
    })
    .controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
        $scope.close = function () {
            $mdSidenav('right').close()
                .then(function () {
                    $log.debug("close RIGHT is done");
                });
        };
    });
