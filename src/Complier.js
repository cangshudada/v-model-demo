import Watcher from './Watcher';

const REG = /\{\{(.*)\}\}/

class Complier {
    constructor(el, vm) {
        this.el = document.querySelector(el);
        this.vm = vm;

        this.frag = this._createFragment()

        console.log('this.el :', this.el);
        console.log('this.frag :', this.frag);

        this.el.appendChild(this.frag)
    }

    _createFragment() {
        let frag = document.createDocumentFragment();
        let child;
        while (child = this.el.firstChild) {
            this._complie(child)
            frag.appendChild(child)
        }
        return frag
    }

    _complie(node) {
        if (node.nodeType === 1) {
            let attr = node.attributes
            if(attr.hasOwnProperty('v-model')){
                let name = attr['v-model'].nodeValue;
                node.addEventListener('input',e =>{
                    this.vm[name] = e.target.value
                })
                node.value = this.vm[name]
            }
        }

        // 文本节点
        if (node.nodeType === 3) {
            if(REG.test(node.nodeValue)){
                let name = RegExp.$1;
                name = name.trim();
                new Watcher(node,name,this.vm)
            }
        }
    }
}

export default Complier;