

// 다른 전역 변수와 충돌을 피하기 위해 이름공간을 생성
var rj3 = {};

// svg라는 하위 이름공간을 만든다.
rj3.svg = {}


rj3.syg.line = function(){
    var getX = function(point){
        return point[0];
    }
    var getY = function(point){
        return point[1];
    }
    interpolate = function(points){
        return points.join("L");
    }


    function line(data){
        var segments = [],
            points = [],
            i = -1,
            n = data.length, 
            d;
        function segment(){
            segments.push("M", interpolate(points))
        }
        while(++i <n ){
            d = data[i];
            points.push([+getX.call(this,d,i), +getY.call(this, d, i)]);
        }
        if(points.length){
            segment();
        }
        return segment.length? segments.join(""): null;
        

    }

    line.x = function(funcToGetX){
        if(!arguments.length){
            return getX;
        }
        getX = funcToGetX;
        return line;
    };
    line.y = function(funcToGetY){
        if(!arguments.length){
            return getY;
        }
        getY = funcToGetY;
        return line;
    }
    return line;
}