$(document).ready(function(){
  var slideIndex = 0;
 showSlides();

 function showSlides() {
   var i;
   var slides = document.getElementsByClassName("mySlides");
   var dots = document.getElementsByClassName("dot");
   for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
   }
   slideIndex++;
   if (slideIndex > slides.length) {slideIndex = 1}
   for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active", "");
   }
   slides[slideIndex-1].style.display = "block";
   dots[slideIndex-1].className += " active";
   setTimeout(showSlides, 2000); // Change image every 2 seconds
 }
});
$(document).ready(function(){
    $('.btn.order').click(function() {
        var typeOfErrand = $("#Errand option:selected").val();
        var Time = $("#Days option:selected").val();
        var Cost = $("#Pay option:selected").val();
        var total = parseInt(typeOfErrand) + parseInt(Time) + parseInt(Cost);
        var order = 1;
        var grandTotal = 0;

        $("table").show();
        $(".additional-buttons").show();
        // $(".btn.order").hide();
        
        $("#typeOfErrand").html($("#Errand option:selected").text() + " - " + typeOfErrand);
        $("#Time").html($("#Days option:selected").text() + " - " + Time);
        $("#Cost").html($("#Pay option:selected").text() + " - " + Cost);
        $("#Total").html(total);

        function job(typeOfErrand, Time, Cost, total, orderNo) {
        this.typeOfErrand = typeOfErrand;
        this.Time = Time;
        this.Cost = Cost;
        this.total = total;
        this.orderNo = orderNo;
        }

        $('.btn.order').click(function() {
            var typeOfErrand = $("#Errand option:selected").val();
            var Time = $("#Days option:selected").val();
            var Cost = $("#Pay option:selected").val();
            // var total = parseInt(typeOfErrand) + parseInt(Time) + parseInt(Cost);
            order = order +1;
            grandTotal = grandTotal + total;
      
      
            var newJob = new job(typeOfErrand, Time, Cost, total);
      
            var newRow = '<tr><th scope="row">' + newJob.orderNo + '</th><td id="Errand">' + $("#Errand option:selected").text() + " - " + newJob.typeOfErrand + '</td><td id="Days">' + $("#Days option:selected").text() + " - " + newJob.Time + '</td><td id="Pay">' + $("#Pay option:selected").text() + " - " + newJob.Cost + '</td><td id="total">' + '</td></tr>'

      
            $("#Job").append(newRow);
          });
      
        //   $(".btn.check-out").click(function() {
        //     $(".btn.add-pizza").hide();
        //     $(".btn.check-out").hide();
        //     $(".additional-info").show();
        //     $(".btn.yes").show();
        //     $(".btn.no").show();
        //     $(".additional-info .location").hide();
        //     grandTotal = grandTotal + total;
      
        //     $(".additional-info h3 span").html(grandTotal);
        //   });



    });
      
    $(document).ready(function(){
        $("form").on("submit", function(e){
            e.preventDefault();
            var date = $("input[type=date]").val(),
                time = $("input[type=time]").val(),
                targetTime = new Date(date + " " + time);
            if(targetTime < Date.now()){
                alert("Can only countdown to time before now.");
                return false;
            } 
            var interval = setInterval(function(){
                    var timeLeft = (((+targetTime - Date.now())/1000)|0);
                    $("span").html(
                        timeLeft.format()
                        +" seconds left until "+targetTime.toString()+"."
                    );
                    if(!timeLeft){
                        clearInterval(interval);
                        document.getElementById("timez").innerHTML = "Thank you for choosing Errands.Visit our page for another Errand service.";
                    };
                }, 500);
        });
      
        Number.prototype.format = function(){
            return [
                (this/86400|0), "days",
                (this/3600|0) % 24 , "hours",
                (this/60|0) % 60 , "minutes",
                (this|0) % 60 , "seconds"
            ].join(" ");
        };
      });


});

window.addEventListener('load', function() {
    document.querySelector('input[type="file"]').addEventListener('change', function() {
        if (this.files && this.files[0]) {
            var img = document.querySelector('img');  // $('img')[0]
            img.src = URL.createObjectURL(this.files[0]); // set src to file url
            img.onload = imageIsLoaded; // optional onload event listener
        }
    });
  });
  
  function imageIsLoaded(e) { alert("image is uploaded"); }

function myFunction(){
  var x = document.getElementById("myFile");
  var txt = "";
  if ('files' in x) {
    if (x.files.length == 0) {
      txt = "Select one or more files.";
    } else {
      for (var i = 0; i < x.files.length; i++) {
        txt += "<br><strong>" + (i+1) + ". file</strong><br>";
        var file = x.files[i];
        if ('name' in file) {
          txt += "name: " + file.name + "<br>";
        }
        if ('size' in file) {
          txt += "size: " + file.size + " bytes <br>";
        }
      }
    }
  } 
  else {
    if (x.value == "") {
      txt += "Select one or more files.";
    } else {
      txt += "The files property is not supported by your browser!";
      txt  += "<br>The path of the selected file: " + x.value; // If the browser does not support the files property, it will return the path of the selected file instead. 
    }
  }
  document.getElementById("demo").innerHTML = txt;
}

$("button").click( function() {
    $('form').each(function() {
      this.reset();
  });
});