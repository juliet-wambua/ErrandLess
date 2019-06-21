
// var form =onclick="document.getElementById('form').style.display=''"
//  var =onclick="document.getElementById('login-form').style.display='none'" 




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
            // var total = parseInt(typeOfErand) + parseInt(Time) + parseInt(Cost);
            order = order +1;
            qgrandTotal = grandTotal + total;
      
      
            var newJob = new job(typeOfErrand, Time, Cost, total);
      
            var newRow = '<tr><th scope="row">' + newJob.orderNo + '</th><td id="Errand">' + $("#Errand option:selected").text() + " - " + newJob.typeOfErrand + '</td><td id="Days">' + $("#Days option:selected").text() + " - " + newJob.Time + '</td><td id="Pay">' + $("#Pay option:selected").text() + " - " + newJob.Cost + '</td><td id="total">' + newPizza.total + '</td></tr>'

      
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
                        document.getElementById("time").innerHTML = "Thank you for choosing Errands.Visit our page for another Errand service.";
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



