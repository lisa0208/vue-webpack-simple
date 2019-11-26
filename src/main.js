import getData from './util';
import Vue from 'vue';
import App from './App.vue';

import './style/common.scss';

// Vue.component('my-component', {
//     template: '<img width="200" height="200" :src="url" />',
//     data() {
//       return {
//         url: require('./img/logo.jpg')
//       }
//     }
//   })
var app = new Vue({
    el: '#app',
    template: '<app />',
    components: { App },
    data: {
        message: 'Hello vue! '
    },
    methods: {
        async fetchData() {
          const data = await getData();
          this.message = data;
          this.getNum(function(resolve){console.log( '我是' + resolve)},function(reject){console.log( '我是' + reject)});
        },
        getNum(resolve, reject){
          let time = Math.random() * 3;
          setTimeout( function(){
            if( time < 1.5 ){
              console.log('我是<1的')
              resolve('200 OK');
            }
            else{
              console.log('我是>2的')
              reject('500 NO')
            }
          }, 1000)

          new Promise(this.getNum).then(function(result){
            console.log('成功: '+ result)
          }).catch(function(reason){
            console.log('失败：'+ reason)
          })
        }
    },
    created(){
        this.fetchData();
    }
});
