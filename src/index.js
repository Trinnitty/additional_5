module.exports = function check(str, bracketsConfig) {
  var arr = str.split('');
  var stack = []; 
  for(var i=0; i<arr.length; i++){
  	var ans = open(arr[i]);
  	if(ans){
  		stack.push(arr[i]);
      var s1 = stack[stack.length-1];
      var s2 = stack[stack.length-2];
      if(s1==s2){
        if(match(s1,s2)){
        var h  = stack.pop();
        var h1 = stack.pop();
        };
      };

  	}else {
  		if(stack.length==0){
  			return false;
  		};
  	   var pop = stack.pop();
  	   var find = match(pop,arr[i]);
  	   if(!find){
  		    return false;
  	};
   };
  };
function open(n){
	for(var i=0; i<bracketsConfig.length; i++){
		if(n==bracketsConfig[i][0]){
			return true;
		};
	};
	return false;
};

function match(pop,close){
	for(var i=0; i<bracketsConfig.length; i++){
		if(pop===bracketsConfig[i][0] && close===bracketsConfig[i][1]){
			return true;
		};
	};
	return false;
};

	if(stack.length==0){
		return true;
	} else{ return false};
};

