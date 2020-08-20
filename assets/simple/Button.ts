/**
 * 按钮, 点击的时候修改 store.timestamp
 */
import { stores, SimpleStore } from "./store";
import { action } from "mobx";

@cc._decorator.ccclass
export default class Button extends cc.Component {
    public get store() {
        console.log('this.node.name', this.node.name);
        return stores[Number(this.node.name)];
    }

    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onClick.bind(this))
    }
    @action
    private onClick() {
        this.store.timestamp = Date.now()
    }
}