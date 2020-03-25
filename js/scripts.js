$(document).ready(function() { 
 $("#formOne").submit(function(event) {
    var name = $("input#name").val();
    var about = $("input#about").val();
    var date = $("input#date").val();
    var time = $("input#time").val();
    alert(name + about + date + time);

    $(".info").append(name + "<br>" + about + "<br>" + date + "<br>" + time);
    event.preventDefault();


  });
});