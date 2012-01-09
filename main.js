define(["./data"], function(data){
	
// module object
var c = {};
c.calculateStyle = function(style, breakIndex, kwArgs) {
	style.fill = data["seq"][kwArgs.numClasses][kwArgs.colorSchemeName].colors[breakIndex];
}
return c;
});