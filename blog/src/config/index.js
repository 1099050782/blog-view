module.exports = {
  dev:{
    proxyTable :{
      '/api':{
        target: "http://192.168.1.161:8888/",
        changeOrigin:true,
        pathRewrite:{
          '^/api':''
        }
      }
    }
  }
}
