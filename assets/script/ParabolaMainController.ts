import { _decorator, Component, Node, Vec2,input,Input,UITransform,Vec3, Sprite } from 'cc';
import {BanZhuan} from './BanZhuan';
const { ccclass, property } = _decorator;

@ccclass('ParabolaMainController')
export class ParabolaMainController extends Component {

    @property(Node)
    public hand : Node | null;

    @property(Node)
    public banzhuan : BanZhuan;

    public startPoint : Vec2  = new Vec2();

    public hudu = 0;
    public lidu = 0;


    onLoad(){
    }

    start() {
        console.log('start开始')
        // 触摸开始
        input.on(Input.EventType.TOUCH_START,function(event){
            console.log('触摸开始')
            //获取触点位置信息
            const locationUi = event.getUILocation();
            //将触电位置转为vec3
            const los = new Vec3(locationUi.x,locationUi.y,0);
            //将节点hand放于触点位置
            this.hand.setWorldPosition(los);
        },this);
    }

    update(deltaTime: number) {
        
    }
}

