function myFunction(array1, array2) {
    const obj = {}
    array1.forEach((item,index) => {
        obj[item] = array2[index]
    })
    return obj
}


console.log(myFunction(['a','b','c'],[1,2,3]))
console.log(myFunction(['a','b','c'],[1,() => {}, {name: 'khriztian'}]))
console.log(myFunction(['name','hobbies','isAdmin'],['khriztian',['music', 'tv series'], false]))