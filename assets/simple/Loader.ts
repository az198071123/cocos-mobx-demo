/**
 * 程序入口, 加载各种prefab
 */
import TimePlugin from "./TimePlugin";
import { SimpleStore, stores } from "./store";

const { ccclass, property } = cc._decorator

@ccclass
export default class Loader extends cc.Component {
    @property([cc.Node]) anchor: cc.Node[] = []
    @property([cc.Prefab]) prefab: cc.Prefab[] = []
    public onLoad() {
        this.anchor.forEach((node, index) => {
            node.name = index.toString();
            stores.push(new SimpleStore)
            this.prefab.forEach(p => {
                const pNode = cc.instantiate(p);
                pNode.name = index.toString();
                node.addChild(pNode)
            })
            node.scale = 0.5
            node.addComponent(TimePlugin);
        })
    }
}