
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
module.exports.getStringWhere= function getString(colums,table,findCondition,peramiter) {
    let SQLstring=``;
    let cols=""

    for (let i = 0; i < colums.length; i++) {
        cols += colums[i];
        if(i<colums.length-1) {
            cols+=","
        }
    }

    SQLstring =`select ${cols} from ${table} where ${findCondition}='${peramiter}';`
    return SQLstring;
}
module.exports.setString = function setString(values,colums,table) {
    let SQLstring =``;
    let cols="";
    for (let i = 0; i < colums.length; i++) {
        cols += colums[i];
        if(i<colums.length-1) {
            cols+=","
        }
    }
    let Values="";
    for (let i = 0; i < values.length; i++) {
        Values += values[i];
        if(i<values.length-1) {
            Values+=",";
        }
    }
    SQLstring =`INSERT INTO ${table} (${cols}) VALUES (${Values})`
    return SQLstring;
}
module.exports.sqlMap = function(keys,values) {
    console.log(keys.length);
    console.log(values.length);
    if(keys.length===values.length) {
    for (let i = 0; i < keys.length; i++) {
        if(keys[i]==="string") {
            values[i] = `'${values[i]}'`
        } //other values dont need to be maped
    }
    console.log(values)
    return values;
    } else {
        //throw error
    }
}