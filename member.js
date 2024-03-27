function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'modules/skills/views/member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindController: True,
        scope: {
            member: 'm'
        }
    };
}