let obj = {}
let proxy = new Proxy(obj, {
    get: function(target, prop) {
        console.log('获取属性' + prop + '的值')
        return target[prop]
    },
    set: function(target, prop, value) {
        target[prop] = value
        if (prop === 'count') {
            console.log('特殊属性执行计算逻辑')
        }
    },
    deleteProperty(target, prop) {
        console.info('删除对象属性，prop=' + prop)
        delete target[prop]
    }
})

proxy.count = 1;
console.info(proxy.count)

// 对象 get set函数
let _innerValue = 1
let outValue = {
    get value() {
        console.info('获取对象的值')
        return _innerValue
    },
    set value(val) {
        console.info('设置对象的值')
        _innerValue = val
    }
}

outValue.value = 2;
console.info(outValue.value)