/**
 * label组件, 用来显示当前时间
 */
import { observer, render } from "../scripts/observer";
import { stores, SimpleStore } from "./store";
import { computed } from "mobx";

@cc._decorator.ccclass
@observer
export default class TimeLabel extends cc.Component {
    public get store() {
        console.log('this.node.name', this.node.name);
        return stores[Number(this.node.name)];
    }

    @computed get time() {
        const t = new Date(this.store.currentTime)
        const fmt = (t: number) => t < 10 ? '0' + t : t
        return [t.getHours(), t.getMinutes(), t.getSeconds()].map(x => x < 10 ? '0' + x : x).join(':')
    }
    @render protected render() {
        this.node.getComponent(cc.Label).string = `当前时间${this.time}累计点击次数${this.store.total}次`
    }
}