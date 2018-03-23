function areaOfATriangle(height, base){
	
	var answer = 0.5 * base * height

	return answer;


}

var area = areaOfATriangle( 12 ,6);
var x= areaOfATriangle( 14,7);
var y= areaOfATriangle( 20 ,12);


print(area);
print(x);
print(y);

// console.log("Triangle one:"+area);

// console.log("Triangle two:"+x);


// console.log("Triangle three:"+y);

function print(answer){
	console.log("area of Triangle :" + answer);
}



