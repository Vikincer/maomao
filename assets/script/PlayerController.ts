import { _decorator, Component, Node,EventMouse, input, Input,Color,Camera, geometry, PhysicsSystem } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PlayerController')
export class PlayerController extends Component {

    @property(Camera)
    public mainCamera : Camera | null = null;

    @property(Node)
    public body : Node | null = null;

    public _ray : geometry.Ray = new geometry.Ray();

    start() {
    }

    update(deltaTime: number) {
        
    }
    onLoad(){
        input.on(Input.EventType.MOUSE_DOWN,this.onMouseDown1,this);        //检测碰撞体
    }
    public onMouseDown1(event : EventMouse){
        //基于摄像机  画射线
        this.mainCamera?.screenPointToRay(event.getLocation().x,event.getLocation().y,this._ray);
        //基于物理碰撞器的射线检测
        //当点击 node 时 控制台打印“node——”
        if(PhysicsSystem.instance.raycast(this._ray)){
            const r = PhysicsSystem.instance.raycastResults;
            for(let index = 0; index < r.length; index ++){
                const element = r[index];
                console.log('当前点击' + element.collider.node.uuid);
                if(element.collider.node.uuid == this.body?.uuid){
                    console.log('node——');
                }
            }
        }
    }
    public onMouseDown(event) {
        let mouseType = event.getButton();
        if (mouseType === EventMouse.BUTTON_LEFT) {
            // 鼠标左键按下
        } else if (mouseType === EventMouse.BUTTON_MIDDLE) {
            // 鼠标中键按下
        } else if (mouseType === EventMouse.BUTTON_RIGHT) {
            // 鼠标右键按
        }
    }   
    lateUpdate(){
        
    }
    onDestroy () {
        this.node.off(Node.EventType.MOUSE_DOWN, this.onMouseDown1, this);
    }
    onEnable(){
        
    }
    onDisable(){
        
    }
}

