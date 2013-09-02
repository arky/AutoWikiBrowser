/*
* Simple prototype code: Search and replace all "to" 
* 
*/

// Get the innerHTML of Visual editor content
var content = document.getElementsByClassName("ve-ce-documentNode")[0].innerHTML; 

//replace all matching 'to' words with '2'
newcontent = content.replace(/\bto\b/ig, "2");

//Re-populate Visual editor content 
document.getElementsByClassName("ve-ce-documentNode")[0].innerHTML=newcontent;

