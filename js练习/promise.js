let p=Promise.resolve(12);
let p1=new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('resolve p1');
        }, 4000);
});

let p2=new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject('reject p2');
    }, 2000);
});

Promise.all([p,p2,p1]).then((res)=>{
    console.log('all',res);
}).catch(error=>{
    console.log('catch',error);
});


Vue.prototype.keyQuery = function (keyword, queryTyp) {
    let dataJson = {
      userId: 'b77e3b75-7dde-4704-bc98-7ac698052e08',
      scenicAreaId: localStorage.getItem('scenicAreaIdStorage'),
      queryTyp: queryTyp,
      keyword: keyword,
    }
    return this.$http({
      method: "get",
      url: "/feapi/globalInfo/keyQuery",
      params: dataJson,
      dataType: "json",
      crossDomain: true,
      cache: false,
    }).then(resolve => {
      var keyQueryStorage = resolve.data.result;
      keyQueryStorage = JSON.stringify(keyQueryStorage); //转化为JSON字符串
      localStorage.setItem("keyQueryStorage", keyQueryStorage);

      console.log('我在请求', JSON.parse(localStorage.getItem("keyQueryStorage")))
      return Promise.resolve(1111);
    }), reject => {
      return Promise.reject(error)
    };
  };