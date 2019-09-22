class Dep{
    constructor(){
        this.list = []
    }
    listen(subs){
        this.list.push(subs)
    }
    notify(){
        for (let index = 0; index < this.list.length; index++) {
            this.list[index].update()
        }
    }
}

Dep.prototype.target = null;

export default Dep