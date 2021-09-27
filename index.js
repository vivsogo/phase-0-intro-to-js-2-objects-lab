// Write your solution in this file!
const employee ={name:"vaule1", streetAddress: "vaule2"};
function updateEmployeeWithKeyAndValue(obj,key,value){
    return {...obj,
        [key]:value,
    }
};
function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value){
    obj[key]= value;
    return obj;
};
function deleteFromEmployeeByKey(obj,key){
    const newobj={...obj};
    delete newobj.key;
    return {newobj};
}
function destructivelyDeleteFromEmployeeByKey(obj,key){
    delete obj[key];
    return obj;
}