import Vue from 'vue'
export default Vue.component('App',{
data(){
return {
  xx:'wnima'
}
},
methods:{
  ff(){
    let nine='99'
    this.xx=nine
  }
},
template:`
<div @click="ff()">hh{{xx}}</div>
`,
created(){},components:{}
})