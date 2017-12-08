$(document).ready(function() {

  var $logo = $(".invis"); // the logo selector
  var $root = $(".dot");
  var $funpick = {
    "0" : ["alone with a dot", "../../playground/keyframes.html"],
    //"1" : ["Donnie Darko", "https://docs.google.com/document/d/19G-H8h1p6fIzHYQgtvLpb3TfH7ROX3EgzihiBFT_QE4/edit?usp=sharing"],
    //"2" : ["Ratatoie", "https://docs.google.com/document/d/1rQeHUMgJKPxwKAKDAIvT1GTuHBNphXEv3uNMHqFA3HU/edit?usp=sharing"],
    "1" : ["CSS Animations", "../resources/Keyframes CheatSheet.pdf"],
    "2" : ["Productivity Hacking", "http://www.jamesmaa.com/2012/12/02/james-maas-productivity-hacking-guide/"],
    "3" : ["Old Minecraft Mods", "https://www.planetminecraft.com/member/copper-sulfate/"],
    "4" : ["Dynamic Planet Notes", "https://docs.google.com/document/d/1ylIeElYrcm_4QdQprXTkzr71W9aAPLRamSC1RF9-1m8/edit?usp=sharing"],
    "5" : ["Top Ten Movies", "https://docs.google.com/document/d/1MxZvgES9jKtQBMRXjx4Jjf_Uh-deGi8vC2q0mV2vb3A/edit?usp=sharing"],
    //"8" : ["Tips for Regents Interview", "https://docs.google.com/document/d/1HpzL5ATrXyj1TWiSVbakZFBqSG3ZZkCzbN6h3-ofTFM/edit?usp=sharing"]
  }

  $logo.click(function() {
    window.open("../../index.html", "_self");
  });

  $logo.hover(function() {
    $(".logo").css("opacity", "1");

  }, function() {
    $(".logo").css("opacity", "0.6");
  });

  $root.click(function()  {
  	var index = Math.floor(Math.random() * 6);
    var element = $funpick[index.toString()];
    $(".texter").text(element[0])
    setTimeout(() => {
      window.open(element[1], "_blank").focus();
    }, 1000);
    setTimeout(() => {
      $(".texter").text("");
    }, 1100);
  });
});
