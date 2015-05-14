$(function(){
    
    // Monitor the send button and trigger when it's clicked
    $("#send").click(function(){
        // Get the entered input values from the input boxes and save them into variables
        var name = $("#name").val();
        var message = $("#message").val();
        
        var chatMessageHTML = "<div class=\"message\"><b>"+name+": </b>"+message+"</div>";
            $("#chat").append(chatMessageHTML);
        
        // return false so that the send button doesn't activate the default form submission 
        // mechanism and only does what we tell it to.
        return false;
    });
    
});