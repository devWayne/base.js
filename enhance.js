if($==undefined){
	var $=function(){}
}
(function($){

	if (typeof exports !== 'undefined') {
		if (typeof module !== 'undefined' && module.exports) {
			exports = module.exports = $;
		}
		else if (typeof define === 'function' && define.cmd) {
		    define(function(require, exports, module) {
		      module.exports = exports = $;
		    });
		}
	    else if (typeof define === 'function' && define.amd) {
	   		 define('enhance', [], $);
	  	}
	  	else{
	  		exports.$ = $;
	  	}	
	}


	var ArrProto = Array.prototype,
		ObjProto = Object.prototype,
		FunProto = Function.prototype;


	var ForEach = ArrProto.forEach,
		Map = ArrProto.map,
		Reduce = ArrProto.reduce,
		ReduceRight = ArrProto.ReduceRight,
		Filter = ArrProto.filter,
		Every = ArrProto.every,
		Some = ArrProto.some,
		Index = ArrProto.index,
		LastIndex = ArrProto.lastIndex,
		IsArray = Array.IsArray;



	$.each = function(obj, iterator) {
		var results = {};
		if (obj == null) return results;

	}

})($)

