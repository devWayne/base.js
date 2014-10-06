var _ = function() {

}

if (typeof exports !== 'undefined') {
	if (typeof module !== 'undefined' && module.exports) {
		exports = module.exports = _;
	}
	else if (typeof define === 'function' && define.cmd) {
    define(function(require, exports, module) {
      module.exports = exports = _;
    }
    else if (typeof define === 'function' && define.amd) {
    define('enhance', [], _);
  	}
	exports._ = _;
}


var ArrProto = Array.prototype,
	var ObjProto = Object.prototype,
		var FunProto = function.prototype;


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



_.each = function(obj, iterator) {
	var results = {};
	if (obj == null) return results;

}