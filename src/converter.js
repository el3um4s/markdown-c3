"use strict";

function convert() {
  	const text = document.getElementById('editor').value;
	const converter = new showdown.Converter();
 	return converter.makeHtml(text);
};

function handleFiles(file) {
	const fileToLoad = document.getElementById("upload-file").files[0];
	let fileReader = new FileReader();
	fileReader.onload = function(fileLoadedEvent){
      const textFromFileLoaded = fileLoadedEvent.target.result;
      document.getElementById("editor").value = textFromFileLoaded;
	  document.getElementById('preview').innerHTML = '';
	  document.getElementById('upload-file').value = null;
		// const text = document.getElementById('editor').value;
		/*
		const converter = new showdown.Converter();
		const html = converter.makeHtml(textFromFileLoaded);
		let target = document.getElementById('preview');
		target.innerHTML = html;*/
	
  	};
	
	fileReader.readAsText(fileToLoad, "UTF-8");
}


// https://www.javascripture.com/FileReader
// https://stackoverflow.com/questions/31746837/reading-uploaded-text-file-contents-in-html
function loadFileAsText(){
  var fileToLoad = document.getElementById("fileToLoad").files[0];

  var fileReader = new FileReader();
  fileReader.onload = function(fileLoadedEvent){
      var textFromFileLoaded = fileLoadedEvent.target.result;
      document.getElementById("inputTextToSave").value = textFromFileLoaded;
  };

  fileReader.readAsText(fileToLoad, "UTF-8");
}