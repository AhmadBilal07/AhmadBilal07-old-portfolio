  window.onscroll = function() {myFunction()};

  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }


  $(function(){
  $("#navbar a").click(function(){
    $("a").removeClass('active');
    $(this).addClass('active');    
    return true;
  })
  })


  $(".SubCon1").on('mouseenter', () => {
  $("#web1").attr("src","web2.png");
  $("#web1").animate({height: '+=100px',
  width: '+=100px',},300);

  }).on('mouseleave',()=>
  {
  $("#web1").attr("src","web.png");
  $("#web1").animate({height: '-=100px',
  width: '-=100px',},300);

  })

  $(".SubCon2").on('mouseenter', () => {
  $("#ML1").attr("src","ML2.png");
  $("#ML1").animate({height: '+=100px',
  width: '+=100px',},300);
  }).on('mouseleave',()=>
  {
  $("#ML1").attr("src","ML.png");
  $("#ML1").animate({height: '-=100px',
  width: '-=100px',},300);

  })

  $(".SubCon3").on('mouseenter', () => {

  $("#blog1").attr("src","blog3.png");
  $("#blog1").animate({height: '+=100px',
  width: '+=100px',},300);
  }).on('mouseleave',()=>
  {
  $("#blog1").attr("src","blog1.png");
  $("#blog1").animate({height: '-=100px',
  width: '-=100px',},300);
  })


$(function(){
  $("#button").click(function(){
    
 alert("hi");
    return true;
  })
  })

