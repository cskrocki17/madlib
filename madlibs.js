//Cherylann Skrocki
//Mad Libs

//Initialize variables
var sentence = [];
var replacements = [];
var index = 0;

//Initialize users
alert("filler go away");
alert("Enter after each word, end with shift 6");

//fill sentence
populate(index,sentence,"word");
alert (sentence);
index = 0;
//specifiy positions
populate(index,replacements,"position");
alert (replacements);
index = 0
replace(index,sentence,replacements,"part of speech")
alert(sentence)

function populate(sindex,sarray,label){
	
	do{
		sarray[sindex]=prompt("Next " + label + "?");
		sindex = sindex+1;
	}
	while(sarray[sindex-1] != "^");
	console.log(sarray);
	sarray.splice(-1,1);
	return sarray;
}

function replace(sindex,sarray,rarray,label){
	
	for (sindex = 0; sindex < rarray.length; sindex++){
		sarray[rarray[sindex]] = prompt ("Next " + label + "?");
	}
	return sarray;
}