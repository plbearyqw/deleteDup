function deleteDup(arr){
          let arList = [];
          arr.forEach(function(item){                    
                    if(arList.toString() === [].toString()
                              || !arList.includes(item)){
                              arList.push(item);
                    }
          });
          return arList;
}