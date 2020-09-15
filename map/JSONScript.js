$('document').ready(function(){
	
})

function intialized(){
	var mapOption = {zoom:14, center:{lat: 40.7405, lng: -73.9832} }
	
	var map = new google.maps.Map(document.getElementById("map"), mapOption);
	var markers = new google.maps.Marker({position: {lat: 40.7405, lng: -73.9832}, map: map})
	loadJSON(
	(returnedData)=>
	{
		let array = JSON.parse(returnedData)
		
		const options = {         
			 position: {lat: Number(array.data[0][13]), lng: Number(array.data[0][14])}, 
			 map: map
			
			 }
		//var markers = new google.maps.Marker(options)
		console.log(marker)
		//var markers = new google.maps.Marker({position: {lat: Number(array.data[1][13]), lng: Number(array.data[1][14])}, map: map});
		console.log(''lol')
		for(var i = 0; i < array.data.length; i++)
		{
			var marker = new google.maps.Marker({position: {lat: Number(array.data[i][13]), lng: Number(array.data[i][14])}, map: map})
			console.log(i)
		}
	}
	)
	
	
	
}

 function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'https://data.cityofnewyork.us/api/views/bmxf-3rd4/rows.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }
			