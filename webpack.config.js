const path=require('path')
const VueLoaderPlugin=require('vue-loader/lib/plugin')
module.exports={
  // model:'none',
  entry:'./src/main.ts',
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'main.min.js'
  },
  module:{
    rules:[
      {test:/\.css$/,use:['style-loader','css-loader']},
      {test:/\.vue$/,use:['vue-loader']},
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
            appendTsSuffixTo: [/\.vue$/]
        }
}
    ]
  },
  resolve:{
    alias:{
      'vue$':'vue/dist/vue.js'
    }
  },
  plugins:[new VueLoaderPlugin()]
}