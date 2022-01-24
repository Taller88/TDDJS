(function(){
    var objData = [
        {x:100, y:60},
        {x:190, y:160},
        {x:10, y:60}
    ],
    arrayData = objData.map(function(d){
        return [+d.x, +d.y]
    }),
    lineGenerator = rj3.svg.line(),
    path = lineGenerator(arrayData);
})
