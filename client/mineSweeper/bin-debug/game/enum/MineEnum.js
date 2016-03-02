/**
 *
 * @author wkwang
 *
 */
var MineEnum = (function () {
    function MineEnum() {
    }
    var d = __define,c=MineEnum,p=c.prototype;
    MineEnum.TYPE_NONE = 0; //空地类型
    MineEnum.TYPE_MINE = -1; //地雷类型
    return MineEnum;
})();
egret.registerClass(MineEnum,'MineEnum');
