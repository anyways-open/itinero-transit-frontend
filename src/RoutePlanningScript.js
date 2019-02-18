// This script contains all code necessary to access the api


var host = "https://api.anyways.eu/transit"
//var host = "http://routing1.anyways.eu:5001";
//var host = "https://genk.anyways.eu/transit"
  
// Execute the given function at a later time (e.g. at a callback).
// Usage: g = delay(f, 1, 2, 3); ... more code or a callback ... ; g() 
function delay(delayed, arg1, arg2, arg3){
    return function(){
        delayed(arg1, arg2, arg3);
    };
}

function searchStation(query, callback){
    if(query.length < 1){
        return;
    }
    $.getJSON(host+"/LocationsByName?name="+query,callback);
}


/**** Journey querying setup *****/

function lookupJourney(fromId,  toId, departureTimeUTC, transferTime, callback, failCallback){
      
    let query = host+"/journey?from="+encodeURIComponent(fromId)+
                    "&to="+encodeURIComponent(toId)+
                    "&departure="+encodeURIComponent(departureTimeUTC)+
                    "&internalTransferTime="+transferTime;
    $.getJSON(query, callback)
        .fail(failCallback);
}

