$(document).ready(function()
{
  placement();
  
  $(window).resize(function()
  {
    placement();
  });
  
  //Home page link styling
  $( "div.block-button" )
  .mouseenter(function() {
    $(this).addClass("div-hover");
    $(this).addClass("mouse-pointer");
  })
  .mouseleave(function() {
    $(this).removeClass("div-hover");
    $(this).removeClass("mouse-pointer");
  });
  
  $("ul.nav.nav-tabs").find("a")
  .mouseenter(function()
  {
    $(this).addClass("mouse-pointer");
  })
  .mouseleave(function() {
    $(this).removeClass("mouse-pointer");
  });
  
  $( "div.modal-content" )
  .mouseenter(function() {
    $(this).addClass("mouse-on-modal");
  })
  .mouseleave(function() {
    $(this).removeClass("mouse-on-modal");
  });
  
  $("li").click(function()
  {
    if($(this).attr("role") === "presentation")
    {
      if($(this).hasClass("close") === false)
      {
        if($(this).closest("div").hasClass("resume-section"))
        {
          $("div.resume-section").children("ul").children("li").removeClass("last-click");
        }
        if($(this).closest("div").hasClass("github-section"))
        {
          $("div.github-section").children("ul").children("li").removeClass("last-click");
        }
        if($(this).closest("div").hasClass("myCCO-section"))
        {
          $("div.myCCO-section").children("ul").children("li").removeClass("last-click");
        }
        if($(this).closest("div").hasClass("linkedIn-section"))
        {
          $("div.linkedIn-section").children("ul").children("li").removeClass("last-click");
        }
        $(this).addClass("last-click");
      }
    }
  });
  
  $("div.block.block-button").click(function()
  {
    if($(this).attr("data-target") === "#resume")
    {
      if($("div#resume").find("li.active").hasClass("close"))
      {
        $("div#resume").find("li.active").removeClass("active");
        $("div#resume").find("li.last-click").addClass("active");
      }
    }
    if($(this).attr("data-target") === "#github")
    {
      if($("div#github").find("li.active").hasClass("close"))
      {
        $("div#github").find("li.active").removeClass("active");
        $("div#github").find("li.last-click").addClass("active");
      }
    }
    if($(this).attr("data-target") === "#myCCO")
    {
      if($("div#myCCO").find("li.active").hasClass("close"))
      {
        $("div#myCCO").find("li.active").removeClass("active");
        $("div#myCCO").find("li.last-click").addClass("active");
      }
    }
    if($(this).attr("data-target") === "#linkedIn")
    {
      if($("div#linkedIn").find("li.active").hasClass("close"))
      {
        $("div#linkedIn").find("li.active").removeClass("active");
        $("div#linkedIn").find("li.last-click").addClass("active");
      }
    }
  });
  
  $("li.close").click(function()
  {
    $("div.block-button.link1").removeClass("div-active");
    $("div.block-button.link2").removeClass("div-active");
    $("div.block-button.link3").removeClass("div-active");
    $("div.block-button.link4").removeClass("div-active");
  });
  
  $("div.home.block").click(function() {
    $("div.block-button.link1").removeClass("div-active");
    $("div.block-button.link2").removeClass("div-active");
    $("div.block-button.link3").removeClass("div-active");
    $("div.block-button.link4").removeClass("div-active");
  });
  
  $("div.modal").click(function() {
    if($("div.modal-content").hasClass("mouse-on-modal") === false)
    {
      $("div.block-button.link1").removeClass("div-active");
      $("div.block-button.link2").removeClass("div-active");
      $("div.block-button.link3").removeClass("div-active");
      $("div.block-button.link4").removeClass("div-active");
    }
  });
  
  $("#resume").on("shown.bs.modal", function()
  {
    //iframe sizing.
  $("iframe").css("height", $(window).height() - $("ul.nav.nav-tabs").find("li").height - 5);
    
    textPlacement($("div.resume-section").children("ul.nav.nav-tabs").find("li.link1").find("a"), $("div.resume-section").children("ul.nav.nav-tabs").find("li.link1").find("p"));
    textPlacement($("div.resume-section").children("ul.nav.nav-tabs").find("li.link2").find("a"), $("div.resume-section").children("ul.nav.nav-tabs").find("li.link2").find("p"));
  });
  
  $("#github").on("shown.bs.modal", function()
  {
    //iframe sizing.
  $("iframe").css("height", $(window).height() - $("ul.nav.nav-tabs").find("li").height() - 5);
    
    textPlacement($("div.github-section").children("ul.nav.nav-tabs").find("li.link1").find("a"), $("div.github-section").children("ul.nav.nav-tabs").find("li.link1").find("p"));
    textPlacement($("div.github-section").children("ul.nav.nav-tabs").find("li.link2").find("a"), $("div.github-section").children("ul.nav.nav-tabs").find("li.link2").find("p"));
  });
  
  $("#myCCO").on("shown.bs.modal", function()
  {
    //iframe sizing.
  $("iframe").css("height", $(window).height() - $("ul.nav.nav-tabs").find("li").height() - 5);
    
    textPlacement($("div.myCCO-section").children("ul.nav.nav-tabs").find("li.link1").find("a"), $("div.myCCO-section").children("ul.nav.nav-tabs").find("li.link1").find("p"));
    textPlacement($("div.myCCO-section").children("ul.nav.nav-tabs").find("li.link2").find("a"), $("div.myCCO-section").children("ul.nav.nav-tabs").find("li.link2").find("p"));
  });
  
  $("#linkedIn").on("shown.bs.modal", function()
  {
    //iframe sizing.
  $("iframe").css("height", $(window).height() - $("ul.nav.nav-tabs").find("li").height() - 5);
    
    textPlacement($("div.linkedIn-section").children("ul.nav.nav-tabs").find("li.link1").find("a"), $("div.linkedIn-section").children("ul.nav.nav-tabs").find("li.link1").find("p"));
    textPlacement($("div.linkedIn-section").children("ul.nav.nav-tabs").find("li.link2").find("a"), $("div.linkedIn-section").children("ul.nav.nav-tabs").find("li.link2").find("p"));
  });
  
  $("div.block.block-button").click(function() {
    $(this).addClass("div-active");
  });
});

function placement()
{
  //Size blocks.
  $("div.block").css("height", $("div.block").width());
  
  $("div.space").css("height", $(window).height() - (2 * $("div.block-button").width()));
  
  $("div.modal-dialog").css("width", $(window).width()/* - ($("div.block-button").width() / 2)*/);
  $("div.modal-dialog").css("height", $(window).height());
  //$("div.modal-dialog").css("margin-top", $("div.block-button").height() / 8);
  
  $("ul.nav-tabs").children("li.2").css("width", $("div.section").width() / 2);
  $("ul.nav-tabs").children("li.3").css("width", $("div.section").width() / 3);
  $("ul.nav-tabs").children("li.4").css("width", $("div.section").width() / 4);
  $("ul.nav-tabs").children("li.5").css("width", $("div.section").width() / 5);
  if($("div.block-button").height > 0)
    $("ul.nav-tabs").children("li").css("height", $("div.block-button").height() / 2);
  else
    $("ul.nav-tabs").children("li").css("height", $(window).height() / 12);
  
  //iframe sizing.
  $("div.tabpanel").css("height", $(window).height() - $("ul.nav.nav-tabs").find("li").height());
  $("iframe").css("height", $(window).height() - $("ul.nav.nav-tabs").find("li").height() - 5);
    
  //Place text.
  textPlacement($("div.block-button.link1"), $("div.block-button.link1").find("p"));
  textPlacement($("div.block-button.link2"), $("div.block-button.link2").find("p"));
  textPlacement($("div.block-button.link3"), $("div.block-button.link3").find("p"));
  textPlacement($("div.block-button.link4"), $("div.block-button.link4").find("p"));
  
  textPlacement($("div.space.block.block-empty"), $("div.space.block.block-empty").children("h1.header"));
  
  textPlacement($("div.designs-section").children("ul.nav.nav-tabs").find("li.link1").find("a"), $("div.myCCO-section").children("ul.nav.nav-tabs").find("li.link1").find("p"));
  textPlacement($("div.designs-section").children("ul.nav.nav-tabs").find("li.link2").find("a"), $("div.myCCO-section").children("ul.nav.nav-tabs").find("li.link2").find("p"));
  
  textPlacement($("div.websites-section").children("ul.nav.nav-tabs").find("li.link1").find("a"), $("div.github-section").children("ul.nav.nav-tabs").find("li.link1").find("p"));
  textPlacement($("div.websites-section").children("ul.nav.nav-tabs").find("li.link2").find("a"), $("div.github-section").children("ul.nav.nav-tabs").find("li.link2").find("p"));

  textPlacement($("div.reflections-section").children("ul.nav.nav-tabs").find("li.link1").find("a"), $("div.linkedIn-section").children("ul.nav.nav-tabs").find("li.link1").find("p"));
  textPlacement($("div.reflections-section").children("ul.nav.nav-tabs").find("li.link2").find("a"), $("div.linkedIn-section").children("ul.nav.nav-tabs").find("li.link2").find("p"));
  
  textPlacement($("div.resume-section").children("ul.nav.nav-tabs").find("li.link1").find("a"), $("div.resume-section").children("ul.nav.nav-tabs").find("li.link1").find("p"));
  textPlacement($("div.resume-section").children("ul.nav.nav-tabs").find("li.link2").find("a"), $("div.resume-section").children("ul.nav.nav-tabs").find("li.link2").find("p"));
}

function textPlacement(div, text)
{
  text.css("margin-top", (div.height() / 2) - (text.height() / 2));
  text.css("margin-left", (div.width() / 2) - (text.width() / 2));
}
