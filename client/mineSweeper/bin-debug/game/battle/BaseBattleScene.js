/**
 *
 * @author
 *
 */
var BaseBattleScene = (function () {
    //初始化时需要格子数据
    function BaseBattleScene(gridData) {
        this.battleGrid = gridData;
    }
    var d = __define,c=BaseBattleScene,p=c.prototype;
    return BaseBattleScene;
})();
egret.registerClass(BaseBattleScene,'BaseBattleScene',["IBattleScene"]);
