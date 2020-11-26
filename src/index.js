export default {
 install(Vue) {
    Vue.prototype.$group_array=function(array,key,format='object'){
        if(!format==='array' || !format==='object'){
            return 'Invalid format supplied';
        }

        if(!Array.isArray(array)){
            return 'Parameter 1 must be an array';
        }
        if(!key){
            return 'Key must be supplied';
        }

        let groupKey=key;

         //get all instances of the needed key
        function pluck(array, key) {
            return array.map(o => o[key]);
        }

        //get the unique keys
        let keys=new Set(pluck(array,groupKey));

        let grouped=[];
        let objGrouped={};

        keys.forEach(key=>{
            let items=array.filter(item=>item[groupKey]===key);
            if(format==='array'){
                grouped.push(items);
            }
            else if(format==='object'){
                objGrouped[key]=items;
            }
        })

        if(format==='object'){
            return objGrouped;
        }
        else{
            return grouped;
        }
    }
 }
};