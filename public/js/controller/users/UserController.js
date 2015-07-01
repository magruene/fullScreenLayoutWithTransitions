angular
    .module('manageThatBetter')
    .controller('UserController', function ($scope, userService, $mdSidenav, $mdBottomSheet, $log, $q) {
        $scope.selected = null;
        $scope.users = [];

        // Load all registered users

        userService
            .loadAllUsers()
            .then(function (users) {
                $scope.users = [].concat(users);
                $scope.selected = users[0];
            });

        // *********************************
        // Internal methods
        // *********************************

        /**
         * First hide the bottomsheet IF visible, then
         * hide or Show the 'left' sideNav area
         */
        $scope.toggleUsersList = function () {
            var pending = $mdBottomSheet.hide() || $q.when(true);

            pending.then(function () {
                $mdSidenav('left').toggle();
            });
        }

        /**
         * Select the current avatars
         * @param menuId
         */
        $scope.selectUser = function (user) {
            $scope.selected = angular.isNumber(user) ? $scope.users[user] : user;
            $scope.toggleUsersList();
        }

        /**
         * Show the bottom sheet
         */
        $scope.showContactOptions = function ($event) {
            var user = $scope.selected;

            return $mdBottomSheet.show({
                parent: angular.element(document.getElementById('content')),
                templateUrl: 'public/html/users/view/contactSheet.html',
                controller: ['$mdBottomSheet', ContactPanelController],
                controllerAs: "cp",
                bindToController: true,
                targetEvent: $event
            }).then(function (clickedItem) {
                clickedItem && $log.debug(clickedItem.name + ' clicked!');
            });

            /**
             * Bottom Sheet controller for the Avatar Actions
             */
            function ContactPanelController($mdBottomSheet) {
                this.user = user;
                this.actions = [
                    {name: 'Phone', icon: 'phone', icon_url: 'public/assets/svg/phone.svg'},
                    {name: 'Twitter', icon: 'twitter', icon_url: 'public/assets/svg/twitter.svg'},
                    {name: 'Google+', icon: 'google_plus', icon_url: 'public/assets/svg/google_plus.svg'},
                    {name: 'Hangout', icon: 'hangouts', icon_url: 'public/assets/svg/hangouts.svg'}
                ];
                this.submitContact = function (action) {
                    $mdBottomSheet.hide(action);
                };
            }
        }

    }
);

/**
 * Main Controller for the Angular Material Starter App
 * @param $scope
 * @param $mdSidenav
 * @param avatarsService
 * @constructor
 */


