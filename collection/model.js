var Model={
    inherited(){},
    created(){},
    prototype:{
        init(){}//空的init函数
    },
    create(){ //创建模型
        let obj=Object.create(this);//以调用者为原型创建一个对象(对象关联)
        obj.parent=this;//在新对象中以parent属性保存调用者(保存的是引用)
        obj.prototype=obj.fn=Object.create(this.prototype);//将调用者的prototype和新对象的prototype对象关联
        //用prototype属性充当__proto__
        obj.created();//新对象的created函数调用,做其他事情
        this.inherited(obj);//
        return obj;
    },
    init(){//创建模型实例
        let instance=Object.create(this.prototype);
        instance.parent=this;
        instance.init.apply(instance,arguments);//obj.init(bar,foo);
        return instance;
    }
}