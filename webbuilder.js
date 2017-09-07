$('#alert1').on('closed.bs.alert', function () {
 $("#alert2").show(1000);
})


function update(){
    
     $("iframe").contents().find("html").html("<html><head><style type='text/css'>"+"html{color:white;}" + $("#cssPanel").val() + " </style></head> <body> " + $("#htmlPanel").val() +"</body></html>");
    
    document.getElementById("outputPanel").contentWindow.eval($("#jsPanel").val());
  
    
}





//Hover for Button
$(".toggleButton").hover(function(){
    
    $(this).addClass("highlightButton");
    

},function(){
    
    $(this).removeClass("highlightButton");
    
});






$(".toggleButton").click(function(){
    
    $(".alert").remove();
    
   $("#alert").remove();
    //change background of element when clicked
    $(this).toggleClass("active1");
    
    
    // remove hover color
    $(this).removeClass("highlightButton");
    
    
    

    //hide or show
     var panelId = $(this).attr("id") + "Box";

    $("#" + panelId).toggleClass("hidden");
    
    
    
    // divide the width
     var activePanel = 4 - $(".hidden").length;
    
    $(".Box").width(($(window).width() / activePanel));
    
  
   
    
});




//Set height of text area
$(".panel").height($(window).height() - $("#header").height() - $(".panelTitle").height() -$(".save").height() );

$("#outputPanel").height($(window).height() - $("#header").height() - $(".panelTitle").height() +17  );




 update();

//Update output
$("textarea").on('change paste keyup', function(){
    
  update();
  
});
  





//save files


///////////////////////////////////////////////////////////////////////////////////////////////

 function saveTextAsFilehtml()
  {
	var textToWrite = document.getElementById("htmlPanel").value;
	var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
	var fileNameToSaveAs = document.getElementById("inputFileNameToSaveAshtml").value;

	var downloadLink = document.createElement("a");
	downloadLink.download = fileNameToSaveAs;
	downloadLink.innerHTML = "Download File";
	if (window.webkitURL != null)
	{
		// Chrome allows the link to be clicked
		// without actually adding it to the DOM.
		downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
	}
	else
	{
		// Firefox requires the link to be added to the DOM
		// before it can be clicked.
		downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
		downloadLink.onclick = destroyClickedElement;
		downloadLink.style.display = "none";
		document.body.appendChild(downloadLink);
	}

	downloadLink.click();
}

//////////////////////////////////////////////////////////////////////////////////////////////////
function saveTextAsFilecss()
  {
	var textToWrite = document.getElementById("cssPanel").value;
	var textFileAsBlob = new Blob([textToWrite], {type:'text/css'});
	var fileNameToSaveAs = document.getElementById("inputFileNameToSaveAscss").value;

	var downloadLink = document.createElement("a");
	downloadLink.download = fileNameToSaveAs;
	downloadLink.innerHTML = "Download File";
	if (window.webkitURL != null)
	{
		// Chrome allows the link to be clicked
		// without actually adding it to the DOM.
		downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
	}
	else
	{
		// Firefox requires the link to be added to the DOM
		// before it can be clicked.
		downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
		downloadLink.onclick = destroyClickedElement;
		downloadLink.style.display = "none";
		document.body.appendChild(downloadLink);
	}

	downloadLink.click();
}

/////////////////////////////////////////////////////////////////////////////////////////////////
function saveTextAsFilejs()
  {
	var textToWrite = document.getElementById("jsPanel").value;
	var textFileAsBlob = new Blob([textToWrite], {type:'text/javascript'});
	var fileNameToSaveAs = document.getElementById("inputFileNameToSaveAsjs").value;

	var downloadLink = document.createElement("a");
	downloadLink.download = fileNameToSaveAs;
	downloadLink.innerHTML = "Download File";
	if (window.webkitURL != null)
	{
		// Chrome allows the link to be clicked
		// without actually adding it to the DOM.
		downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
	}
	else
	{
		// Firefox requires the link to be added to the DOM
		// before it can be clicked.
		downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
		downloadLink.onclick = destroyClickedElement;
		downloadLink.style.display = "none";
		document.body.appendChild(downloadLink);
	}

	downloadLink.click();
}


////////////////////////////////////////////////////////////////////////////////////////////////

function destroyClickedElementhtml(event)
{
	document.body.removeChild(event.target);
}
///////////////////////////////////////////////////////////////////////////////////////////
function loadFileAsTexthtml()
{
	var fileToLoad = document.getElementById("fileToLoadhtml").files[0];

	var fileReader = new FileReader();
	fileReader.onload = function(fileLoadedEvent) 
	{
		var textFromFileLoaded = fileLoadedEvent.target.result;
		document.getElementById("htmlPanel").value = textFromFileLoaded;
	};
	fileReader.readAsText(fileToLoad, "UTF-8");
}
  
//////////////////////////////////////////////////////////////////////////////////////////////////



function loadFileAsTextcss()
{
	var fileToLoad = document.getElementById("fileToLoadcss").files[0];

	var fileReader = new FileReader();
	fileReader.onload = function(fileLoadedEvent) 
	{
		var textFromFileLoaded = fileLoadedEvent.target.result;
		document.getElementById("cssPanel").value = textFromFileLoaded;
	};
	fileReader.readAsText(fileToLoad, "UTF-8");
}
  
//////////////////////////////////////////////////////////////////////////////////////////////////



function loadFileAsTextjs()
{
	var fileToLoad = document.getElementById("fileToLoadjs").files[0];

	var fileReader = new FileReader();
	fileReader.onload = function(fileLoadedEvent) 
	{
		var textFromFileLoaded = fileLoadedEvent.target.result;
		document.getElementById("jsPanel").value = textFromFileLoaded;
	};
	fileReader.readAsText(fileToLoad, "UTF-8");
}
  
//////////////////////////////////////////////////////////////////////////////////////////////////