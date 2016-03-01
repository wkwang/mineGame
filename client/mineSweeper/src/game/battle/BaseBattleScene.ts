/**
 *
 * @author 
 *
 */
class BaseBattleScene implements IBattleScene {
    battleGrid: GridData;
    
    //初始化时需要格子数据
	public constructor(gridData) {
        this.battleGrid = gridData;
	}
}
