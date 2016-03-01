/**
 *
 * @author 
 *
 */
class GridData {
    public row: number;
    public column: number;
    
    public gridArr: Array<number>;
    //初始化网格，需要行数和列数
    public constructor(row: number, column: number) {
        this.row = row;
        this.column = column;
        this.gridArr = new Array();
        for(var i = 0;i < this.row;i++) {
            for(var j = 0;j < this.row;j++) {
                this.gridArr[i][j] = 0
            }
        }
	}
}
