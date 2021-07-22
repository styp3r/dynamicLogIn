$(".emailInput").click(()=>{
  $(".waveAnimation1").addClass("wave1");
  $(".waveAnimation2").addClass("wave2");
});

$(".logInButton").hover(()=>{
  $(".wave1").addClass("blueHue1");
  $(".wave2").addClass("blueHue2");
}, ()=>{
  $(".wave1").removeClass("blueHue1");
  $(".wave2").removeClass("blueHue2");
});
