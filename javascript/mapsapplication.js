var mapApplication = function (){

	//add member here

	var mapsModel = {
		fromAddress: ko.observable(),
		toAddress: ko.observable()
	};
	// method to add custom binding handler to the KO
	var configureBindingHandlers = function(){
		// custom binding for address auto complete
		ko.bindingHandlers.addressAutoComplete = {
			init: function(element, valueAccessor){
				//create autocomplete object
				var autocomplete = new google.maps.places.Autocomplete(element, {types:['geocode']});
				// when user selects an address from the drop down, populate the address in the model.
				var value = valueAccessor();
				google.maps.event.addListener(autocomplete, 'place_changed', function(){
					var place = autocomplete.getPlace();
					console.log(place);
					value(place);
				});
			}
		};
	};
	
	var init = function(){
	// add code to initialise the module
		ko.applyBindings(mapApplication);
	};
	
	// execute the init function when the DOM is ready
	$(init);

	return {
	// add member that will be exposed publicly
	mapsModel: mapsModel
	};
}();