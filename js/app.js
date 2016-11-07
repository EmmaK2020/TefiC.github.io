$(document).ready(function(){
	//FOR NAVBAR ANIMATION TRANSITION WHEN USER SCROLLS
	$(window).on('scroll touchmove', function() {

		if($(document).scrollTop()>window.innerHeight - 200){
			$('.header-main-div').addClass('header-scrolled');
		}else{
			$('.header-main-div').removeClass('header-scrolled');
		}

		$('.menu-icon-main-div').attr('height', '100%');

	});

	//TODO: TO OPEN DROPDOWN MENU ?????????????????????????????
	$('.menu-icon-main-div').click(function(){

			//Enter
			$('.dropdown-content').toggleClass('dropdown-inactive');
			$('.dropdown-content').toggleClass('dropdown-active');
		}
	);
});



// MAP ------------------------------------------------------------------------------

var map;

 function initMap() {

   map = new google.maps.Map(document.getElementById('map'), {
	  center: {lat: 40.7413549, lng: -73.99802439999996},
	  zoom: 13
   });

   //Initialize info window and empty markers array
  var largeInfoWindow = new google.maps.InfoWindow({
  	maxWidth: 200
  });
  var bounds = new google.maps.LatLngBounds();
  var markers = [];

  //Locations array
  var locations = [
	{title: "My Current Location", location: {lat:10.1579, lng:-67.9972}, description:'I currently live in Venezuela.', path: '../img/venezuela-min.png'},
	{title: "My alma mater", location: {lat:37.3861, lng: -122.0839}, description: "I acquired critical Sillicon Valley skills in Front End Web Development through Udacity's Nanodegree, based in Mountain View, California.", path: '../img/udacity-min.png'},
 	{title: 'Constant Learning', location:{lat:42.3736, lng: -71.1097}, description: "Learning is endless, and MITx has been a my introduction to the amazing world of algorithms. 99% score on their 'Introduction to computer science and programming' course and taking new courses every month",  path: '../img/mitx-min.png'}
 ];


  //For loop that loops through locatins array. extracts title and position of each location and
  // adds a marker for each one with individual properties. Then it pushes each marker to the markers array
  // and adds an event listener that executes a function that populates the marker
  for(i=0; i<locations.length; i++){

	var title = locations[i].title;
	var position = locations[i].location;
	var description = locations[i].description;
	var path = locations[i].path;

	var marker = new google.maps.Marker({
	  position: position,
	  map: map,
	  title: title,
	  description: description,
	  path: path
	});

	markers.push(marker);

	bounds.extend(marker.position);

	marker.addListener('click', function(){
	  populateInfoWindow(this, largeInfoWindow);
	});
}

map.fitBounds(bounds);


  //Function that populates the marker when its clicked. It sets the markers properties
  // and its html structure. It defines where it opens and adds a listener to close the window
		function populateInfoWindow(marker, infowindow){
			if(infowindow.marker != marker){

				infowindow.marker = marker;

				if (marker.path != undefined){
					infowindow.setContent(
						'<div class="infowindow-div">'+
						'<img class="infowindow-image" src="' + marker.path + '">' +
						'<p class="infowindow-text">' + marker.description + '</p>' +
						'</div>'
					);
				} else {
					infowindow.setContent(
						'<div class="infowindow-div">'+
						'<p class="infowindow-text">' + marker.description + '</p>' +
						'</div>'
					);
				}

				infowindow.open(map, marker);
				infowindow.addListener('closeclick', function(){
					infowindow.marker = null;
				});
		}
	}

}

function googleMapsFailed() {
	alert("Sorry, I couldn't load Google Maps")
}


