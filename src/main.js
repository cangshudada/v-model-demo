import Vue from './Vue'

const vue = new Vue({
    el: '#app',
    data: {
        message: 'vue实现双向数据绑定了'
    }
})

window.vue = vue