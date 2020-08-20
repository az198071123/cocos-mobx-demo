/**
 * 用来处理一些逻辑事物的节点, 本身不具备什么渲染功能
 */
import { observer, react, reactor } from "../scripts/observer";
import { action } from "mobx";
import { SimpleStore, stores } from "./store";
@cc._decorator.ccclass
@observer
export default class TimePlugin extends cc.Component {
    public get store() {
        console.log('this.node.name', this.node.name);
        return stores[Number(this.node.name)];
    }
    public start() {
        this.schedule(this.updateCurrentTime, 1)
    }

    // 定时修改 store.currentTime 数据
    @action updateCurrentTime() {
        this.store.currentTime = Date.now()
    }

    /**
     * 观测 store.timestamp, 当timestamp发生改变的时候, 对total进行++操作
     */
    @reactor
    protected reactorTimestamp() {
        return react(() => this.store.timestamp, timestamp => {
            if (timestamp) {//如果不是初始状态, 则total++
                this.store.total++
            }
        })
    }
    // @reactor(() => store.timestamp)
    // protected reactorTimestamp2(timestamp: number) {
    //     if (timestamp) {
    //         this.store.total++
    //     }
    // }
}