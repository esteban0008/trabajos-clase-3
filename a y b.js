function sonIguales (a, b){
    if (a.length!==b.length){
        return false
    } 
    for (let i=0; i<a.length; i++){
        if (a[i]!==b[i]){
            return false
        }

    }
    return true  
}
console.log(sonIguales ([2, 3, 4], [2, 3, 4]))
console.log(sonIguales ([2, 3, 4], [2, 3, 4]))