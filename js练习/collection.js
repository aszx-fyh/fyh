//var _=require("underscore")._;
var array1=[1,3,4,5,6]
_.each(array1,(value,index)=>{console.log(index+":"+value)});
_.map(array1,(value,index)=>{
    return value*3;
});//[3, 9, 12, 15, 18]

/*reduce: 集合元素合并集的到memo*/
_.reduce(array1,(prev,cur)=>{
    return prev+cur;
},0);//19

/* _.filter(list, predicate, [context]) */
_.filter(array1,(value)=>{
    return value%2==0;
});

/*find_.find(list, predicate, [context]) 
**只会找第一个匹配的元素，没有则返回undefined
*/
_.find(array1,(value)=>{
    return value%2==0;
});//4

/*where_.where(list, properties) */
var listOfPlays=[
{"title":"The tempest",author:"Shakespeare",year:1600},
{"title":"Cymbeline",author:"Aifen",year:1520},
{"title":"A ken",author:"Lia",year:1800},
{"title":"J k",author:"Shakespeare",year:1600}
]
_.where(listOfPlays,{title:"A ken",author:"Lia"});//[{"title":"A ken",author:"Lia",year:1800}]
_.where(listOfPlays,{year:1600});

/* reject_.reject(list, predicate, [context]) 
** 返回list中没有通过predicate真值检测的元素集合，与filter相反。
*/
_.reject(array1,(value)=>{
    return value%2==0;
});//[1,3,5]
/**
 *every_.every(list, [predicate], [context])  
 */
_.every([true, 1, null, 'yes'], _.identity);//false