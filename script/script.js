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
        if($(this).closest("div").hasClass("websites-section"))
        {
          $("div.websites-section").children("ul").children("li").removeClass("last-click");
        }
        if($(this).closest("div").hasClass("reflections-section"))
        {
          $("div.reflections-section").children("ul").children("li").removeClass("last-click");
        }
        if($(this).closest("div").hasClass("designs-section"))
        {
          $("div.designs-section").children("ul").children("li").removeClass("last-click");
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
    if($(this).attr("data-target") === "#websites")
    {
      if($("div#websites").find("li.active").hasClass("close"))
      {
        $("div#websites").find("li.active").removeClass("active");
        $("div#websites").find("li.last-click").addClass("active");
      }
    }
    if($(this).attr("data-target") === "#reflections")
    {
      if($("div#reflections").find("li.active").hasClass("close"))
      {
        $("div#reflections").find("li.active").removeClass("active");
        $("div#reflections").find("li.last-click").addClass("active");
      }
    }
    if($(this).attr("data-target") === "#designs")
    {
      if($("div#designs").find("li.active").hasClass("close"))
      {
        $("div#designs").find("li.active").removeClass("active");
        $("div#designs").find("li.last-click").addClass("active");
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
  
  $("#reflections").on("shown.bs.modal", function()
  {
    //iframe sizing.
  $("iframe").css("height", $(window).height() - $("ul.nav.nav-tabs").find("li").height() - 5);
    
    textPlacement($("div.reflections-section").children("ul.nav.nav-tabs").find("li.link1").find("a"), $("div.reflections-section").children("ul.nav.nav-tabs").find("li.link1").find("p"));
    textPlacement($("div.reflections-section").children("ul.nav.nav-tabs").find("li.link2").find("a"), $("div.reflections-section").children("ul.nav.nav-tabs").find("li.link2").find("p"));
    textPlacement($("div.reflections-section").children("ul.nav.nav-tabs").find("li.link3").find("a"), $("div.reflections-section").children("ul.nav.nav-tabs").find("li.link3").find("p"));
    textPlacement($("div.reflections-section").children("ul.nav.nav-tabs").find("li.link4").find("a"), $("div.reflections-section").children("ul.nav.nav-tabs").find("li.link4").find("p"));
  });
  
  $("#websites").on("shown.bs.modal", function()
  {
    //iframe sizing.
  $("iframe").css("height", $(window).height() - $("ul.nav.nav-tabs").find("li").height() - 5);
    
    textPlacement($("div.websites-section").children("ul.nav.nav-tabs").find("li.link1").find("a"), $("div.websites-section").children("ul.nav.nav-tabs").find("li.link1").find("p"));
    textPlacement($("div.websites-section").children("ul.nav.nav-tabs").find("li.link2").find("a"), $("div.websites-section").children("ul.nav.nav-tabs").find("li.link2").find("p"));
    textPlacement($("div.websites-section").children("ul.nav.nav-tabs").find("li.link3").find("a"), $("div.websites-section").children("ul.nav.nav-tabs").find("li.link3").find("p"));
    textPlacement($("div.websites-section").children("ul.nav.nav-tabs").find("li.link4").find("a"), $("div.websites-section").children("ul.nav.nav-tabs").find("li.link4").find("p"));
  });
  
  $("#designs").on("shown.bs.modal", function()
  {
    //iframe sizing.
  $("iframe").css("height", $(window).height() - $("ul.nav.nav-tabs").find("li").height() - 5);
    
    textPlacement($("div.designs-section").children("ul.nav.nav-tabs").find("li.link1").find("a"), $("div.designs-section").children("ul.nav.nav-tabs").find("li.link1").find("p"));
    textPlacement($("div.designs-section").children("ul.nav.nav-tabs").find("li.link2").find("a"), $("div.designs-section").children("ul.nav.nav-tabs").find("li.link2").find("p"));
    textPlacement($("div.designs-section").children("ul.nav.nav-tabs").find("li.link3").find("a"), $("div.designs-section").children("ul.nav.nav-tabs").find("li.link3").find("p"));
    textPlacement($("div.designs-section").children("ul.nav.nav-tabs").find("li.link4").find("a"), $("div.designs-section").children("ul.nav.nav-tabs").find("li.link4").find("p"));
    textPlacement($("div.designs-section").children("ul.nav.nav-tabs").find("li.link5").find("a"), $("div.designs-section").children("ul.nav.nav-tabs").find("li.link5").find("p"));
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
  
  textPlacement($("div.designs-section").children("ul.nav.nav-tabs").find("li.link1").find("a"), $("div.designs-section").children("ul.nav.nav-tabs").find("li.link1").find("p"));
  textPlacement($("div.designs-section").children("ul.nav.nav-tabs").find("li.link2").find("a"), $("div.designs-section").children("ul.nav.nav-tabs").find("li.link2").find("p"));
  textPlacement($("div.designs-section").children("ul.nav.nav-tabs").find("li.link3").find("a"), $("div.designs-section").children("ul.nav.nav-tabs").find("li.link3").find("p"));
  textPlacement($("div.designs-section").children("ul.nav.nav-tabs").find("li.link4").find("a"), $("div.designs-section").children("ul.nav.nav-tabs").find("li.link4").find("p"));
  textPlacement($("div.designs-section").children("ul.nav.nav-tabs").find("li.link5").find("a"), $("div.designs-section").children("ul.nav.nav-tabs").find("li.link5").find("p"));
  
  textPlacement($("div.websites-section").children("ul.nav.nav-tabs").find("li.link1").find("a"), $("div.websites-section").children("ul.nav.nav-tabs").find("li.link1").find("p"));
  textPlacement($("div.websites-section").children("ul.nav.nav-tabs").find("li.link2").find("a"), $("div.websites-section").children("ul.nav.nav-tabs").find("li.link2").find("p"));
  textPlacement($("div.websites-section").children("ul.nav.nav-tabs").find("li.link3").find("a"), $("div.websites-section").children("ul.nav.nav-tabs").find("li.link3").find("p"));
  textPlacement($("div.websites-section").children("ul.nav.nav-tabs").find("li.link4").find("a"), $("div.websites-section").children("ul.nav.nav-tabs").find("li.link4").find("p"));

  textPlacement($("div.reflections-section").children("ul.nav.nav-tabs").find("li.link1").find("a"), $("div.reflections-section").children("ul.nav.nav-tabs").find("li.link1").find("p"));
  textPlacement($("div.reflections-section").children("ul.nav.nav-tabs").find("li.link2").find("a"), $("div.reflections-section").children("ul.nav.nav-tabs").find("li.link2").find("p"));
  textPlacement($("div.reflections-section").children("ul.nav.nav-tabs").find("li.link3").find("a"), $("div.reflections-section").children("ul.nav.nav-tabs").find("li.link3").find("p"));
  textPlacement($("div.reflections-section").children("ul.nav.nav-tabs").find("li.link4").find("a"), $("div.reflections-section").children("ul.nav.nav-tabs").find("li.link4").find("p"));
  
  textPlacement($("div.resume-section").children("ul.nav.nav-tabs").find("li.link1").find("a"), $("div.resume-section").children("ul.nav.nav-tabs").find("li.link1").find("p"));
  textPlacement($("div.resume-section").children("ul.nav.nav-tabs").find("li.link2").find("a"), $("div.resume-section").children("ul.nav.nav-tabs").find("li.link2").find("p"));
}

function textPlacement(div, text)
{
  text.css("margin-top", (div.height() / 2) - (text.height() / 2));
  text.css("margin-left", (div.width() / 2) - (text.width() / 2));
}
