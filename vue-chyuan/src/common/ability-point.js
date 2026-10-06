export class AbilityPoint {
    constructor(str, dex, int, luk) {
        /** 力量 */
        this.str = str;
        /** 敏捷 */
        this.dex = dex;
        /** 智力 */
        this.int = int;
        /** 幸運 */
        this.luk = luk;
    }
    /** 隨機取得能力值 */
    static generateRandom() {
        const points = [4, 4, 4, 4];
        for (let i = 0; i < 9; i++) {
            points[Math.floor(Math.random() * 4)]++;
        }
        return new AbilityPoint(...points);
    }
}