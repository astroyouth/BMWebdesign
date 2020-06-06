// Generating time for intro page
var today = new Date();
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var dayName = days[today.getDay()];
var hours = today.getHours()
var minutes = today.getMinutes()
function pad_with_zeroes(number, length) {
    var my_string = '' + number;
    while (my_string.length < length) {
        my_string = '0' + my_string;
    }
    return my_string;
}
hours = pad_with_zeroes(hours, 2)
minutes = pad_with_zeroes(minutes, 2)
$('#home p #hour').text(hours);
$('#home p #minutes').text(minutes);
$('#home p #day').text(dayName);
if(today.getHours()<12){
    $('#home p #timeOfDay').text('morning');
}else if(today.getHours()>15){
    $('#home p #timeOfDay').text('evening');
}else{
    $('#home p #timeOfDay').text('afternoon');
}
$("card-img-top").on("click", function(){ 
})

// animating scrolling effect from left
// $(document).ready(function(){
//     $(window).scroll(function(){
//         if($(this).scrollTop() >0){
//             $(".anileft").css({"opacity": "0"})
//         }else{
//             $(".anileft").css({"opacity": "1"})
//         }
//     })
// })

