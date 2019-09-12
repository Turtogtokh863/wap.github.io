$(function(){

	$('#bookingForm').submit(function(event){
  	
    event.preventDefault();
    $('#errors').empty();
    submitFlag = true;

    const name = $('#name').val();
    const state = $('#state').val();
    const street = $('#street').val();
    const zipcode = $('#zipcode').val();
    const seat = $('input[name="seats"]').val() ;
    
    if(name === '' ) {
        $('#errors').css('background', '#ffdddd');
        $('#errors').append('Name must be longer than 1 character. <br/>');
        color: red;
      submitFlag = false;
    }
    
    if(street === ''){
        $('#errors').append('Street cannot be null. <br/>');
        street.css("border-color", "red");
      submitFlag = false;
    }
    if(state === ''){
        $('#errors').append('State cannot be null. <br/>');
        street.css("border-color", "red");
      submitFlag = false;
    }
    
     if(zipcode === ''){
    	$('#errors').append('Zipcode cannot be null. <br/>');
      submitFlag = false;
    }
    
    if( seat > 200){
    		$('#errors').append('You can not book more than 200 seats. <br/>');
      	submitFlag = false;
    }
    else if(seat == 0 ) {
        $('#errors').append('Seat must be greater than zero. <br/>');
      submitFlag = false;
    }

    

	if($('input[name="taxi"]:checked').val() === undefined){
    	$('#errors').append('You must select taxi type. <br/>');
      submitFlag = false;
    }
    
    if($('input[name="Extras"]:checked').val() === undefined){
    	$('#errors').append('You must check one extra. <br/>');
      submitFlag = false;
    }
 
 		if(submitFlag){
    	this.submit();
    }
    
  });

});

