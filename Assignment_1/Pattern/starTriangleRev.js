
// 2. * * * * *
//    * * * *
//    * * * 
//    * *
//    *

const starTraingleReverse = () => {
    let str = ""
    for (var i = 5; i > 0; i--) {
        for (var j = i; j > 0; j--) {
            str += '* '
        }
        str += '\n'
    }
    console.log(str);
}
starTraingleReverse()