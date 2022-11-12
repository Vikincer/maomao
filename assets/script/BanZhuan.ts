import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BanZhuan')
export class BanZhuan extends Component {
    public fly : boolean;
    public v_x : number = 0;
    public v_y : number = 0;
    start() {

    }

    update(deltaTime : number) {
        if (this.fly) {
            this.node.x += this.v_x * deltaTime;
            // 模拟重力加速度
            this.v_y -= 500 * deltaTime;
            // this.node.y += this.v_y * deltaTime;
        }
    }
}

