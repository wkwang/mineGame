/**
 *
 * @author wkwang
 *
 */
var BaseBattleScene = (function () {
    //初始化时需要格子数据
    function BaseBattleScene(row, column) {
        this.init();
    }
    var d = __define,c=BaseBattleScene,p=c.prototype;
    //初始化grid数据
    p.init = function () {
        this.gridArr = new Array();
        for (var i = 0; i < this.row; i++) {
            for (var j = 0; j < this.column; j++) {
                var _grid = new GridData();
                _grid.index = i * this.column + j;
                _grid.type = MineEnum.TYPE_NONE;
                this.gridArr[i][j] = _grid;
            }
        }
    };
    //随机生成地雷
    p.setMineByRandom = function (count) {
        for (var i = 0; i < count; i++) {
            this.setOneMineByRandom();
        }
    };
    //随机生成一个地雷
    p.setOneMineByRandom = function () {
        var _row = Math.floor(Math.random() * this.row);
        var _column = Math.floor(Math.random() * this.column);
        if (this.checkIsMine(this.gridArr[_row][_column]) == false) {
            this.gridArr[_row][_column].type = MineEnum.TYPE_MINE;
        }
        else {
            this.setOneMineByRandom();
        }
    };
    //检查是否是地雷
    p.checkIsMine = function (value) {
        return value != MineEnum.TYPE_MINE;
    };
    //计算地雷数量
    p.getMineCount = function () {
        var count = 0;
        for (var i = 0; i < this.row; i++) {
            for (var j = 0; j < this.column; j++) {
                if (this.checkIsMine(this.gridArr[i][j]) == true) {
                    count++;
                }
            }
        }
        return count;
    };
    return BaseBattleScene;
})();
egret.registerClass(BaseBattleScene,'BaseBattleScene',["IBattleScene"]);
