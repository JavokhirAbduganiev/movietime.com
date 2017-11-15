/* Below codes are here to activate search function in about page */

function wordSearch() {
	var keyword = document.getElementById("keyword").value;	// getting text from textarea input
    var text = document.getElementById("textToSearch").innerHTML; //getting text from div 
	var openningTag ="<c>";
	var closingTag  = "</c>";
	
	var textLength = keyword.length;	//the length of keyword 
	var indices  = getIndicesOf(keyword, text);	 // get all found indices from div text
	var changingLength = 0;	// to count changes made by adding openningTag and closingTag. At the beginning it is equal to 0
		
	for(var i = 0; i< indices.length; i++)
	{
		// we are adding opening tag
		var StartIndex = (indices[i]+  changingLength);
		// we divide our text to add "<b>" before keyword
		text = text.substr(0,StartIndex) + openningTag + text.substr(StartIndex);
		
		changingLength += openningTag.length; //updating changes done by "<b>"
		
		//here we are adding closing tag
		var LastIndexOfKeyword = indices[i] + textLength + changingLength;
		// we divide our text to add </b> after keyword
		text = text.substr(0, LastIndexOfKeyword) + closingTag + text.substr(LastIndexOfKeyword);
		
		changingLength += closingTag.length; //updating changes done by "</b>"
	}

	document.getElementById("textToSearch").innerHTML = text;
}

function getIndicesOf(searchStr, str) {
	//making strings lowercase
	searchStr = searchStr.toLowerCase();
	str = str.toLowerCase();
	
  var searchStrLen = searchStr.length; 
  var indices = [];
  var startIndex = 0;
	
	
    while ((index = str.indexOf(searchStr, startIndex)) > -1) {
        indices.push(index); //adding element to array
        startIndex = index + searchStrLen; //updating startIndex to start after found text  
    }
    return indices; //return all found indices 
}