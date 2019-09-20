$(function() {
    $("#send").click(updateGuests);
});

function updateGuests() {
    var first = $("#first").val();
    var last = $("#last").val();
    
    $.ajax("guest.ajax", {
		"type": "post",
		"data": {
        	"first": first,
                "last": last
		}
    }).done(displayGuests);
}

function displayGuests(data) {


    for(var i in data){
        var firstName = data[i].first;
        var lastName = data[i].last;
        var element = firstName + " " + lastName + "</br>";

    }
    $("#guestList").append(element);
   // $("#guestList").html(guestList);

    
}