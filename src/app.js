import Vue from 'vue'
import questions from "../js/questions"

Vue.prototype.$http = require('axios')

const app = new Vue({
    el: '#app',
    components:{
        questions
    }
});
