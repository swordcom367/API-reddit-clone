
module.exports.getString= function getString(colums,table) {
    let SQLstring=``;
    let cols=""

    for (let i = 0; i < colums.length; i++) {
        cols += colums[i];
        if(i<colums.length-1) {
            cols+=","
        }
    }

    SQLstring =`select ${cols} from ${table}`
    return SQLstring;
}
// module.exports.getString= function getString(colums,table,findCondition,peramiter) {
//     let SQLstring=``;
//     let cols=""

//     for (let i = 0; i < colums.length; i++) {
//         cols += colums[i];
//         if(i<colums.length-1) {
//             cols+=","
//         }
//     }

//     SQLstring =`select ${cols} from ${table} where ${findCondition}='${peramiter}';`
//     return SQLstring;
// }