$(document).ready(function() { 
  var modal = document.getElementById("myModal");
  var span = document.getElementById("close");
  $("#formOne").submit(function(event) {
    var name = $("input#name").val();
    var about = $("input#about").val();
    var date = $("input#date").val();
    var time = $("input#time").val();
    
    

    $(".info").append("<h2> Booking Successful! </h2>" + "<br>" + name + "<br>" + about + "<br>" + date + "<br>" + time);
    
    modal.style.display = "block";

    event.preventDefault();

    span.onclick = function() {
      modal.style.display = "none";
    }
  
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  


  });


  
});