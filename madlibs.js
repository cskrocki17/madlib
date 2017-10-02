//Cherylann Skrocki
//Mad Libs

var sentence = [];
var replacements = [];
var index = 0;

alert("filler go away");
alert("End with shift 6");
populate(index,sentence);
alert (populate(index,sentence));

function populate(sindex,sarray){
	
	do{
		sarray[sindex] = prompt("Next Word?");
		sindex = sindex+1;
	}
	while(sarray[sindex-1] != "^");
	console.log(sarray);
	return sarray;
}
