!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(3),n=o(4),i=o(8);alert("hola");var a=new i.Limite(0,10),u=new r.GeneradorFlota,c=new n.Flota;u.generar(c.barcosArray,3,a);for(var s=0;s<c.barcosArray.length;s++)for(var f=0;f<c.barcosArray[s].position.length;f++)console.log(c.barcosArray[s].position[f].coordenada.toString())},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Coordenada=void 0;var r=o(2),n=function(){function e(e,t){this._x=e,this._y=t}return e.prototype.mover=function(e){e==r.Sentido.abajo?this.bajar():this.avanzar()},Object.defineProperty(e.prototype,"x",{get:function(){return this._x},set:function(e){this._x=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"y",{get:function(){return this._y},set:function(e){this._y=e},enumerable:!1,configurable:!0}),e.prototype.equals=function(e){return this.x==e.x||this.y==e.y},e.prototype.bajar=function(){this.y++},e.prototype.avanzar=function(){this.x++},e.prototype.toString=function(){return this.x.toString()+" - "+this.y.toString()},e}();t.Coordenada=n},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Sentido=void 0,function(e){e[e.abajo=0]="abajo",e[e.derecha=1]="derecha"}(t.Sentido||(t.Sentido={}))},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GeneradorFlota=void 0;var r=o(1),n=o(2),i=o(5),a=function(){function e(){}return e.prototype.generar=function(e,t,o){do{var a=Math.floor(Math.random()*(o.max-o.min+1)+o.min),u=Math.floor(Math.random()*(o.max-o.min+1)+o.min),c=void 0;c=Math.round(Math.random())?n.Sentido.abajo:n.Sentido.derecha;var s=new r.Coordenada(a,u),f=new i.Barco(1,s,c);0==e.length&&e.push(f);for(var d=!1,l=0;l<e.length;l++)e[l].compruebaSolapamiento(f.position)&&(l=e.length,d=!0);d||e.push(f)}while(e.length!=t)},e}();t.GeneradorFlota=a},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Flota=void 0;var r=function(){function e(){this._barcosArray=[]}return Object.defineProperty(e.prototype,"barcosArray",{get:function(){return this._barcosArray},enumerable:!1,configurable:!0}),e.prototype.addBarco=function(e){this.barcosArray.push(e)},e}();t.Flota=r},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Barco=void 0;var r=o(6),n=o(1),i=o(7),a=function(){function e(e,t,o){this._size=e,this._position=[],this.crearBarco(t,o)}return e.prototype.crearBarco=function(e,t){for(var o=0;o<this.size;o++)this.position.push(new r.Casilla(new n.Coordenada(e.x,e.y),i.Estado.indemne)),e.mover(t)},e.prototype.compruebaSolapamiento=function(e){for(var t=0;t<e.length;t++)for(var o=0;o<this.position.length;o++)if(this.position[o].coordenada.equals(e[t].coordenada))return!0;return!1},Object.defineProperty(e.prototype,"position",{get:function(){return this._position},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),e}();t.Barco=a},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Casilla=void 0;var r=function(){function e(e,t){this._coordenada=e,this._estado=t}return Object.defineProperty(e.prototype,"coordenada",{get:function(){return this._coordenada},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"estado",{get:function(){return this._estado},enumerable:!1,configurable:!0}),e}();t.Casilla=r},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Estado=void 0,function(e){e[e.tocado=0]="tocado",e[e.indemne=1]="indemne"}(t.Estado||(t.Estado={}))},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Limite=void 0;var r=function(){function e(e,t){this._min=e,this._max=t}return Object.defineProperty(e.prototype,"max",{get:function(){return this._max},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"min",{get:function(){return this._min},enumerable:!1,configurable:!0}),e}();t.Limite=r}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsby9jb29yZGVuYWRhLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbG8vc2VudGlkby50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxvL2dlbmVyYWRvckZsb3RhLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbG8vZmxvdGEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsby9iYXJjby50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxvL2Nhc2lsbGEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsby9lc3RhZG8udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsby9saW1pdGUudHMiXSwibmFtZXMiOlsiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJpIiwibCIsIm1vZHVsZXMiLCJjYWxsIiwibSIsImMiLCJkIiwibmFtZSIsImdldHRlciIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsInQiLCJtb2RlIiwiX19lc01vZHVsZSIsIm5zIiwiY3JlYXRlIiwia2V5IiwiYmluZCIsIm4iLCJvYmplY3QiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJhbGVydCIsImxpbWl0ZSIsIkxpbWl0ZSIsImdlbmVyYWRvciIsIkdlbmVyYWRvckZsb3RhIiwiZmxvdGEiLCJGbG90YSIsImdlbmVyYXIiLCJiYXJjb3NBcnJheSIsImluZGV4IiwibGVuZ3RoIiwiamluZGV4IiwicG9zaXRpb24iLCJjb25zb2xlIiwibG9nIiwiY29vcmRlbmFkYSIsInRvU3RyaW5nIiwiX3giLCJfeSIsIm1vdmVyIiwiZGlyZWN0aW9uIiwiU2VudGlkbyIsImFiYWpvIiwidGhpcyIsImJhamFyIiwiYXZhbnphciIsInhzIiwieXMiLCJlcXVhbHMiLCJjb29yZG5hZGEiLCJ4IiwieSIsIkNvb3JkZW5hZGEiLCJudW1lcm8iLCJwb3NpY2lvblgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJtYXgiLCJtaW4iLCJwb3NpY2lvblkiLCJzZW50aWRvIiwicm91bmQiLCJkZXJlY2hhIiwiY29vcmQiLCJiYXJjbyIsIkJhcmNvIiwicHVzaCIsImIiLCJjb21wcnVlYmFTb2xhcGFtaWVudG8iLCJfYmFyY29zQXJyYXkiLCJhZGRCYXJjbyIsIl9zaXplIiwiaW5pdGlhbCIsIl9wb3NpdGlvbiIsImNyZWFyQmFyY28iLCJzaXplIiwiQ2FzaWxsYSIsIkVzdGFkbyIsImluZGVtbmUiLCJjYXNpbGxhIiwiaW5kZXhqIiwiX2Nvb3JkZW5hZGEiLCJfZXN0YWRvIiwiX21pbiIsIl9tYXgiXSwibWFwcGluZ3MiOiJhQUNFLElBQUlBLEVBQW1CLEdBR3ZCLFNBQVNDLEVBQW9CQyxHQUc1QixHQUFHRixFQUFpQkUsR0FDbkIsT0FBT0YsRUFBaUJFLEdBQVVDLFFBR25DLElBQUlDLEVBQVNKLEVBQWlCRSxHQUFZLENBQ3pDRyxFQUFHSCxFQUNISSxHQUFHLEVBQ0hILFFBQVMsSUFVVixPQU5BSSxFQUFRTCxHQUFVTSxLQUFLSixFQUFPRCxRQUFTQyxFQUFRQSxFQUFPRCxRQUFTRixHQUcvREcsRUFBT0UsR0FBSSxFQUdKRixFQUFPRCxRQUtmRixFQUFvQlEsRUFBSUYsRUFHeEJOLEVBQW9CUyxFQUFJVixFQUd4QkMsRUFBb0JVLEVBQUksU0FBU1IsRUFBU1MsRUFBTUMsR0FDM0NaLEVBQW9CYSxFQUFFWCxFQUFTUyxJQUNsQ0csT0FBT0MsZUFBZWIsRUFBU1MsRUFBTSxDQUFFSyxZQUFZLEVBQU1DLElBQUtMLEtBS2hFWixFQUFvQmtCLEVBQUksU0FBU2hCLEdBQ1gsb0JBQVhpQixRQUEwQkEsT0FBT0MsYUFDMUNOLE9BQU9DLGVBQWVi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T0MsVUFFMUVOLEVBQVFsQyxNQUFNQyxJQUlmLFlBQUE2QixzQkFBUCxTQUE2QlcsR0FDekIsSUFBSyxJQUFJbkQsRUFBUSxFQUFHQSxFQUFRbUQsRUFBUWxELE9BQVFELElBQ3hDLElBQUssSUFBSW9ELEVBQVMsRUFBR0EsRUFBU3RDLEtBQUtYLFNBQVNGLE9BQVFtRCxJQUNoRCxHQUFHdEMsS0FBS1gsU0FBU2lELEdBQVE5QyxXQUFXYSxPQUFPZ0MsRUFBUW5ELEdBQU9NLFlBQ3RELE9BQU8sRUFJbkIsT0FBTyxHQUVYLHNCQUFJLHVCQUFRLEMsSUFBWixXQUNJLE9BQU9RLEtBQUsrQixXLGdDQUVoQixzQkFBSSxtQkFBSSxDLElBQVIsV0FDSSxPQUFPL0IsS0FBSzZCLE8sZ0NBRXBCLEVBOUJBLEdBQWEsRUFBQU4sUywrRkNGYixpQkFDSSxXQUFvQmdCLEVBQWdDQyxHQUFoQyxLQUFBRCxjQUFnQyxLQUFBQyxVQVN4RCxPQU5JLHNCQUFJLHlCQUFVLEMsSUFBZCxXQUNJLE9BQU94QyxLQUFLdUMsYSxnQ0FFaEIsc0JBQUkscUJBQU0sQyxJQUFWLFdBQ0ksT0FBT3ZDLEtBQUt3QyxTLGdDQUVwQixFQVZBLEdBQWEsRUFBQU4sVyw4RkNIYixTQUFZQyxHQUNSLHVCQUFPLHlCQURYLENBQVksRUFBQUEsU0FBQSxFQUFBQSxPQUFNLE0sOEZDQWxCLGlCQUVJLFdBQW9CTSxFQUFzQkMsR0FBdEIsS0FBQUQsT0FBc0IsS0FBQUMsT0FROUMsT0FOSSxzQkFBSSxrQkFBRyxDLElBQVAsV0FDSSxPQUFPMUMsS0FBSzBDLE0sZ0NBRWhCLHNCQUFJLGtCQUFHLEMsSUFBUCxXQUNJLE9BQU8xQyxLQUFLeUMsTSxnQ0FFcEIsRUFWQSxHQUFhLEVBQUE5RCIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQge0dlbmVyYWRvckZsb3RhfSBmcm9tIFwiLi9tb2RlbG8vZ2VuZXJhZG9yRmxvdGFcIjtcclxuaW1wb3J0IHtGbG90YX0gZnJvbSBcIi4vbW9kZWxvL2Zsb3RhXCI7XHJcbmltcG9ydCB7TGltaXRlfSBmcm9tIFwiLi9tb2RlbG8vbGltaXRlXCI7XHJcblxyXG5hbGVydChcImhvbGFcIik7XHJcbmxldCBsaW1pdGU6TGltaXRlID0gbmV3IExpbWl0ZSgwLDEwKTtcclxubGV0IGdlbmVyYWRvcjpHZW5lcmFkb3JGbG90YSA9IG5ldyBHZW5lcmFkb3JGbG90YSgpO1xyXG5sZXQgZmxvdGE6RmxvdGEgPSBuZXcgRmxvdGEoKTtcclxuZ2VuZXJhZG9yLmdlbmVyYXIoZmxvdGEuYmFyY29zQXJyYXksMyxsaW1pdGUpO1xyXG5mb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZmxvdGEuYmFyY29zQXJyYXkubGVuZ3RoOyBpbmRleCsrKXtcclxuICAgIGZvciAobGV0IGppbmRleCA9IDA7IGppbmRleDwgZmxvdGEuYmFyY29zQXJyYXlbaW5kZXhdLnBvc2l0aW9uLmxlbmd0aDsgamluZGV4Kyspe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGZsb3RhLmJhcmNvc0FycmF5W2luZGV4XS5wb3NpdGlvbltqaW5kZXhdLmNvb3JkZW5hZGEudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBTZW50aWRvIH0gZnJvbSBcIi4vc2VudGlkb1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvb3JkZW5hZGEge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfeDpudW1iZXIscHJpdmF0ZSBfeTpudW1iZXIpe1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtb3ZlcihkaXJlY3Rpb246U2VudGlkbyl7XHJcbiAgICAgICAgaWYoZGlyZWN0aW9uPT1TZW50aWRvLmFiYWpvKXtcclxuICAgICAgICAgICAgdGhpcy5iYWphcigpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLmF2YW56YXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldCB4KCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3g7XHJcbiAgICB9XHJcbiAgICBzZXQgeCh4czpudW1iZXIpe1xyXG4gICAgICAgIHRoaXMuX3ggPSB4cztcclxuICAgIH1cclxuICAgIGdldCB5KCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3k7XHJcbiAgICB9XHJcbiAgICBzZXQgeSh5czpudW1iZXIpe1xyXG4gICAgICAgIHRoaXMuX3kgPSB5cztcclxuICAgIH1cclxuICAgIHB1YmxpYyBlcXVhbHMoY29vcmRuYWRhOkNvb3JkZW5hZGEpOmJvb2xlYW57XHJcbiAgICByZXR1cm4gdGhpcy54PT1jb29yZG5hZGEueHx8dGhpcy55PT1jb29yZG5hZGEueTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYmFqYXIoKXtcclxuICAgICAgICB0aGlzLnkrKztcclxuICAgIH1cclxuICAgIHB1YmxpYyBhdmFuemFyKCl7XHJcbiAgICAgICAgdGhpcy54Kys7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTpzdHJpbmd7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueC50b1N0cmluZygpK1wiIC0gXCIrdGhpcy55LnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZW51bSBTZW50aWRve1xyXG4gICAgYWJham8sZGVyZWNoYVxyXG59IiwiLy9HZW5lcmFyIHVuYSBzZXJpZSBkZSBiYXJjb3Mgc2luIHNvbGFwYXJzZSB5IHF1ZSBzb3J0ZWFuIGxhIHBvc2ljaW9uIGluaWNpYWwgZGUgY2FkYSBiYXJjb1xyXG4vL3kgZWwgc2VudGlkbyBlbiBxdWUgY3JlY2VuLCBhZGVtYXMgZWwgYXJyYXkgZGUgYmFyY29zIGNyZWFkbyBhc2VndXJhIHF1ZSBuaW5ndW5vIHNlIGhhIHNvbGFwYWRvLlxyXG4vL05lY2VzaXRhIGNvbm9jZXIgbGEgcG9zaWNpb24gbWF4aW1hIGEgbGEgcXVlIHB1ZWRlIGRlc3BsZWdhciB1biBiYXJjbyhtYXggZmlsYSBvIGNvbHVtbmEpXHJcbmltcG9ydCB7Q29vcmRlbmFkYX0gZnJvbSBcIi4vY29vcmRlbmFkYVwiO1xyXG5pbXBvcnQge1NlbnRpZG99IGZyb20gXCIuL3NlbnRpZG9cIjtcclxuaW1wb3J0IHtCYXJjb30gZnJvbSBcIi4vYmFyY29cIjtcclxuaW1wb3J0IHtMaW1pdGV9IGZyb20gXCIuL2xpbWl0ZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdlbmVyYWRvckZsb3RhIHtcclxuXHJcbiAgICBnZW5lcmFyKGJhcmNvc0FycmF5OkJhcmNvW10sIG51bWVybzpudW1iZXIsIGxpbWl0ZTpMaW1pdGUpe1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgbGV0IHBvc2ljaW9uWDogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGxpbWl0ZS5tYXggLSBsaW1pdGUubWluICsgMSkgKyBsaW1pdGUubWluKTtcclxuICAgICAgICAgICAgbGV0IHBvc2ljaW9uWTogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGxpbWl0ZS5tYXggLSBsaW1pdGUubWluICsgMSkgKyBsaW1pdGUubWluKTtcclxuICAgICAgICAgICAgbGV0IHM6IG51bWJlciA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgICAgIGxldCBzZW50aWRvOiBTZW50aWRvO1xyXG4gICAgICAgICAgICBpZiAocykge1xyXG4gICAgICAgICAgICAgICAgc2VudGlkbyA9IFNlbnRpZG8uYWJham87XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZW50aWRvID0gU2VudGlkby5kZXJlY2hhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBjb29yZDogQ29vcmRlbmFkYSA9IG5ldyBDb29yZGVuYWRhKHBvc2ljaW9uWCwgcG9zaWNpb25ZKTtcclxuICAgICAgICAgICAgbGV0IGJhcmNvOiBCYXJjbyA9IG5ldyBCYXJjbygxLCBjb29yZCwgc2VudGlkbyk7XHJcbiAgICAgICAgICAgIGlmIChiYXJjb3NBcnJheS5sZW5ndGg9PTApe1xyXG4gICAgICAgICAgICAgICAgYmFyY29zQXJyYXkucHVzaChiYXJjbyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGJhcmNvc0FycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJhcmNvc0FycmF5W2luZGV4XS5jb21wcnVlYmFTb2xhcGFtaWVudG8oYmFyY28ucG9zaXRpb24pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPSBiYXJjb3NBcnJheS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgYiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFiKXtcclxuICAgICAgICAgICAgICAgIGJhcmNvc0FycmF5LnB1c2goYmFyY28pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfXdoaWxlIChiYXJjb3NBcnJheS5sZW5ndGghPW51bWVybyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBCYXJjbyB9IGZyb20gXCIuL2JhcmNvXCI7XHJcblxyXG4vL0VzIGxhIGNsYXNlIHF1ZSBjb250aWVuZSB0b2RvcyBsb3MgYmFyY29zLi4uXHJcbmV4cG9ydCBjbGFzcyBGbG90YSB7XHJcbiAgICBwcml2YXRlIF9iYXJjb3NBcnJheTpCYXJjb1tdID0gW107XHJcblxyXG4gICAgZ2V0IGJhcmNvc0FycmF5KCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JhcmNvc0FycmF5O1xyXG4gICAgfVxyXG4gICAgYWRkQmFyY28oYmFyY286QmFyY28pe1xyXG4gICAgICAgIHRoaXMuYmFyY29zQXJyYXkucHVzaChiYXJjbyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBDYXNpbGxhIH0gZnJvbSBcIi4vY2FzaWxsYVwiO1xyXG5pbXBvcnQgeyBDb29yZGVuYWRhIH0gZnJvbSBcIi4vY29vcmRlbmFkYVwiO1xyXG5pbXBvcnQgeyBFc3RhZG8gfSBmcm9tIFwiLi9lc3RhZG9cIjtcclxuaW1wb3J0IHsgU2VudGlkbyB9IGZyb20gXCIuL3NlbnRpZG9cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXJjbyB7XHJcbiAgICBwcml2YXRlIF9wb3NpdGlvbjpDYXNpbGxhW109W107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2l6ZTpudW1iZXIsIGluaXRpYWw6Q29vcmRlbmFkYSxkaXJlY3Rpb246U2VudGlkbyl7XHJcbiAgICAgICAgdGhpcy5jcmVhckJhcmNvKGluaXRpYWwsZGlyZWN0aW9uKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgY3JlYXJCYXJjbyhpbml0aWFsOkNvb3JkZW5hZGEsZGlyZWN0aW9uOlNlbnRpZG8pe1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLnNpemU7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5wdXNoKG5ldyBDYXNpbGxhKG5ldyBDb29yZGVuYWRhKGluaXRpYWwueCxpbml0aWFsLnkpLEVzdGFkby5pbmRlbW5lKSk7XHJcbiAgICAgICAgICAgIC8vRXMgbGEgY29vcmRlbmFkYSBsYSBxdWUgdGllbmUgcXVlIGNvbXByb2JhciBsYSBkaXJlY2Npb24gZGVsIGJhcmNvXHJcbiAgICAgICAgICAgIGluaXRpYWwubW92ZXIoZGlyZWN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbXBydWViYVNvbGFwYW1pZW50byhjYXNpbGxhOkNhc2lsbGFbXSk6Ym9vbGVhbntcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY2FzaWxsYS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXhqID0gMDsgaW5kZXhqIDwgdGhpcy5wb3NpdGlvbi5sZW5ndGg7IGluZGV4aisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnBvc2l0aW9uW2luZGV4al0uY29vcmRlbmFkYS5lcXVhbHMoY2FzaWxsYVtpbmRleF0uY29vcmRlbmFkYSkpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGdldCBwb3NpdGlvbigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wb3NpdGlvbjtcclxuICAgIH1cclxuICAgIGdldCBzaXplKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpemU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBDb29yZGVuYWRhIH0gZnJvbSBcIi4vY29vcmRlbmFkYVwiO1xyXG5pbXBvcnQgeyBFc3RhZG8gfSBmcm9tIFwiLi9lc3RhZG9cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDYXNpbGxhIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2Nvb3JkZW5hZGE6Q29vcmRlbmFkYSwgcHJpdmF0ZSBfZXN0YWRvOkVzdGFkbyl7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldCBjb29yZGVuYWRhKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nvb3JkZW5hZGE7XHJcbiAgICB9XHJcbiAgICBnZXQgZXN0YWRvKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VzdGFkbztcclxuICAgIH1cclxufSIsImV4cG9ydCBlbnVtIEVzdGFkb3tcclxuICAgIHRvY2FkbyxpbmRlbW5lXHJcbn0iLCJleHBvcnQgY2xhc3MgTGltaXRlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9taW46IG51bWJlciwgcHJpdmF0ZSBfbWF4OiBudW1iZXIpIHtcclxuICAgIH1cclxuICAgIGdldCBtYXgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWF4O1xyXG4gICAgfVxyXG4gICAgZ2V0IG1pbigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9taW47XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9