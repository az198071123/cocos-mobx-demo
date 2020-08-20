/**
 * 单纯的label渲染
 */
import { observer, render } from "../scripts/observer";
import { stores, SimpleStore } from "./store";

@cc._decorator.ccclass
@observer
export default class TotalLabel extends cc.Component {
    public get store() {
        console.log('this.node.name', this.node.name);
        return stores[Number(this.node.name)];
    }

    @render protected render() {
        if (!this.store.total) {
            this.node.getComponent(cc.Label).string = "请点击按钮"
        } else {
            this.node.getComponent(cc.Label).string = `点击按钮${this.store.total}次`
        }
    }
}