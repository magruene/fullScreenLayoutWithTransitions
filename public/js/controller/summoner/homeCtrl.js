angular.module('manageThatBetter')
    .controller("SummonerHomeController", function ($scope, $document, Summoner) {

        $scope.loading = false;
        $scope.input = {};

        $scope.switchToCreateMode = function () {
            $scope.inCreateMode = true;
            $scope.newStory = {};
        };

        $scope.returnToHome = function () {
            $scope.inCreateMode = false;
            $scope.inEditMode = false;
            $scope.newStory = {};
        };

        $scope.switchToEditMode = function (story) {
            $scope.inEditMode = true;
            $scope.newStory = story;
        };

        $scope.activateTab = function(index) {
            $scope.removeClassFromAllContents();
            var tabContent= $document[0].getElementById("tab" + index);
            var wrappedElement = angular.element(tabContent);
            wrappedElement.addClass("current");
        }

        $scope.removeClassFromAllContents = function () {
            var tabContents= $document[0].document.getElementsByClassName("tabContents");
            var wrappedElement = angular.element(tabContents);
            tabContents.removeClass("current");
        }

        $scope.searchBySummonerName = function () {
            $scope.loading = true;
            $scope.summoners = undefined;
            Summoner.getByName({names: $scope.input.summonerName}, function (response) {
                $scope.loading = false;
                $scope.summoners = response.summoners;
                console.log($scope.summoners);
            });
        }
});
