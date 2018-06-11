import fly from 'flyio' 
fly.config.baseURL='http://localhost:3000';

fly.interceptors.request.use(function(req){
  
})

fly.interceptors.response.use(function(response){
    //只将请求结果的data字段返回
    console.log('response',response);
    
    return response
},
function(error){
    //发生网络错误后会走到这里
    //return Promise.resolve("ssss")
    console.log('请求错误',error);
    
})

export default fly;