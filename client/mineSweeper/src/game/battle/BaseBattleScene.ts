/**
 *
 * @author wkwang
 *
 */
class BaseBattleScene implements IBattleScene {
    battleGrid: GridData;

    public row: number;
    public column: number;
    public gridArr: Array<GridData>;
    
    //初始化时需要格子数据
    public constructor(row: number,column: number) {
        this.init();
    }
	
    //初始化grid数据
    public init() {
        this.gridArr = new Array();
        for(var i = 0;i < this.row;i++) {
            for(var j = 0;j < this.column;j++) {
                var _grid: GridData = new GridData();
                _grid.index = i * this.column + j;
                _grid.type = MineEnum.TYPE_NONE;
                this.gridArr[i][j] = _grid;
            }
        }
    }
	
    //随机生成地雷
    public setMineByRandom(count: number) {
        for(var i = 0;i < count;i++) {
            this.setOneMineByRandom()
        }
    }
	
    //随机生成一个地雷
    public setOneMineByRandom() {
        var _row: number = Math.floor(Math.random() * this.row);
        var _column: number = Math.floor(Math.random() * this.column);
        if(this.checkIsMine(this.gridArr[_row][_column]) == false) {
            (this.gridArr[_row][_column] as GridData).type = MineEnum.TYPE_MINE;
        } else {
            this.setOneMineByRandom();
        }
    }
	
    //检查是否是地雷
    public checkIsMine(value) {
        return value != MineEnum.TYPE_MINE;
    }
	
    //计算地雷数量
    public getMineCount() {
        var count: number = 0;
        for(var i = 0;i < this.row;i++) {
            for(var j = 0;j < this.column;j++) {
                if(this.checkIsMine(this.gridArr[i][j]) == true) {
                    count++;
                }
            }
        }
        return count;
    }
}
