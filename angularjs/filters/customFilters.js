angular.module("customFilters", [])
        .filter("unique", function(){
            return function(data, propertyName){
                if(angular.isArray(data) && angular.isString(propertyName)){
                    let results = [];
                    let keys = {};
                    for(let i=0; i < data.length; i++){
                        let val = data[i][propertyName];
                        if(angular.isUndefined(keys[val])){
                            keys[val] = true;
                            results.push(val);
                        }
                    }
                    return results;
                }else{
                    return data;
                }
            }
        });