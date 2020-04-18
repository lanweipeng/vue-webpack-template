const path=require('path')
const VueLoaderPlugin=require('vue-loader/lib/plugin')
module.exports={
  // model:'none',
  entry:'./src/main.js',
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'main.min.js'
  },
  module:{
    rules:[
      {test:/\.css$/,use:['style-loader','css-loader']},
      {test:/\.vue$/,use:['vue-loader']}
    ]
  },
  resolve:{
    alias:{
      'vue$':'vue/dist/vue.js'
    }
  },
  plugins:[new VueLoaderPlugin()]
}