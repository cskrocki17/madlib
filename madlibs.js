//Cherylann Skrocki
//Mad Libs

//Initialize variables
var sentence = [];
var replacements = [];
var index = 0;

//Initialize users
alert("filler go away");
alert("Enter after each word, end with shift 6. When you see 'next position' type the position of the word you'd like to replace, start counting at 0.");

//fill sentence
populate(index,sentence,"word");
alert (sentence);
index = 0;
//specifiy positions
populate(index,replacements,"position");
alert (replacements);
index = 0;
replace(index,sentence,replacements,"part of speech");
alert(sentence);
//switch people
//train filler
alert("Creator leave, filler return. Enter words that match the parts of speech displayed");
index = 0;
//show sentence
replace(index,sentence,replacements,"replacement");
//show sentence with spaces instead of commas
sentenceString = sentence.join(' ');
alert(sentenceString.toString());

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
		if (label == "replacement"){
			sarray[rarray[sindex]] =  prompt("Provide a "+sarray[rarray[sindex]]+ " here: ");
		}
		else{
			sarray[rarray[sindex]] = prompt ("Next " + label + "?");			
		}
	}
	return sarray;
}
