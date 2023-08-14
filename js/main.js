$(" .text").hide();
// ----------------------------------singers---------------------------------
$("#singerOne").click(function () {
  $(" #singerOne .text").slideToggle(1000);
  $(" #singerTwo .text").slideUp(1000);
  $(" #singerThree .text").slideUp(1000);
  $(" #singerFour .text").slideUp(1000);
});
$("#singerTwo").click(function () {
  $(" #singerTwo .text").slideToggle(1000);
  $(" #singerOne .text").slideUp(1000);
  $(" #singerThree .text").slideUp(1000);
  $(" #singerFour .text").slideUp(1000);
});
$("#singerThree").click(function () {
  $(" #singerThree .text").slideToggle(1000);
  $(" #singerTwo .text").slideUp(1000);
  $(" #singerOne .text").slideUp(1000);
  $(" #singerFour .text").slideUp(1000);
});
$("#singerFour").click(function () {
  $(" #singerFour .text").slideToggle(1000);
  $(" #singerTwo .text").slideUp(1000);
  $(" #singerThree .text").slideUp(1000);
  $(" #singerOne .text").slideUp(1000);
});
$(".layer #open").click(function () {
  let width = $("#slider ").outerWidth();
  console.log(width);
  $("#slider").css({ left: "0", transition: "all 1s" });
  $(".layer #open").css({ left: "240.413px", transition: "all 1s" });
});
$("#closeBtn").click(() => {
  $("#slider").css({ left: "-240.413px", transition: "all 1s" });
  $(".layer #open").css({ left: "0", transition: "all 1s" });
});

// ------------------countDown-------------------------
var countDownDate = new Date("Oct 25, 2023 ").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = ` ${days} D `;
  document.getElementById("mins").innerHTML = ` ${hours} H `;
  document.getElementById("hours").innerHTML = ` ${minutes} M `;
  document.getElementById("sec").innerHTML = ` ${seconds} S `;
}, 1000);

// -------------------------contact-------------------------------------
$("#contact .col-12 span").text(`100`);
let count = 0;
let chars = 0;
$("#contact textarea").keydown((e) => {
  $("#contact .col-12 span").text(count);

  if (count < 1) {
    $("#contact .col-12 span").text(`your available character finished`);
  }
  let clicked = e.key;
  if (clicked != "Backspace") {
    chars += $(this).val.length;
    count = 100 - chars;
    console.log(count);
    console.log("no");
  } else if (clicked == "Backspace") {
    console.log("back");
    count = count + 1;
  }
});
// ---------------smooth scrolling----------------------------
$("#home ul a").click((e) => {
  let selected = $(e.target).attr("href");
  let selectedTop = $(selected).offset().top;
  console.log(selectedTop);
  $("body,html").animate(
    {
      scrollTop: selectedTop,
    },
    1000
  );
});
