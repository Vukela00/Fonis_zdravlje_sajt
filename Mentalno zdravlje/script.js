$( function() {
    $( "#accordion" ).accordion();
    $("#button1").click(function(){
      $("#grupa2").hide();
      $("#grupa3").hide();
       $("#grupa1").toggle(2000);
      
    });
    $("#button2").click(function(){
      $("#grupa1").hide();
      $("#grupa3").hide();
       $("#grupa2").toggle(2000);
    });
    $("#button3").click(function(){
      $("#grupa1").hide();
      $("#grupa2").hide();
      $("#grupa3").toggle(2000);
    });
  } );

  var textWrapper = document.querySelector('.ml1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml1 .letter',
    scale: [0.3,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 70 * (i+1)
  }).add({
    targets: '.ml1 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700,
    offset: '-=875',
    delay: (el, i, l) => 80 * (l - i)
  }).add({
    targets: '.ml1',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });