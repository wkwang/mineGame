/**
 *
 * @author
 *
 */
var GridData = (function () {
    //初始化网格，需要行数和列数
    function GridData(row, column) {
        this.row = row;
        this.column = column;
        this.gridArr = new Array();
        for (var i = 0; i < this.row; i++) {
            for (var j = 0; j < this.row; j++) {
                this.gridArr[i][j] = 0;
            }
        }
    }
    var d = __define,c=GridData,p=c.prototype;
    return GridData;
})();
egret.registerClass(GridData,'GridData');
