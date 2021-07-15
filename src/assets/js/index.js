function scrollall(){
    $(window).on('scroll',function(){
        if ($(window).scrollTop() >= 1) {
          $('.header1').addClass('fixedHeader');
      } else {
          $('.header1').removeClass('fixedHeader');
      }
      });
}
function dropdown1(){
  $(document).on('click','.joinUs',function(){
    $('.joinDrop').slideDown();
  });
  
  document.addEventListener("mousedown", function (event) {
     if (event.target.closest(".joinPos"))
         return;
     $('.joinDrop').slideUp();
  });
}

// function imgremovefunction(getclass) {
//   alert(getclass);
// }

function uploader(){

    function readURL(input, imgControlName) {
        if (input.files && input.files[0]) {
          var reader = new FileReader();
          reader.onload = function(e) {
            $(imgControlName).attr('src', e.target.result);
            //$(input).parent().siblings('.preview1').attr('src', e.target.result);
          }
          reader.readAsDataURL(input.files[0]);
        }
      }
      
      $("#imag1").change(function() {
        // add your logic to decide which image control you'll use
        var imgControlName = "#ImgPreview1";
        readURL(this, imgControlName);
        $('.preview1').addClass('it');
        $('.btn-rmv1').addClass('rmv');
        $('#ImgPreview1').css('display','block');
      });

      $("#imag2").change(function() {
        // add your logic to decide which image control you'll use
        var imgControlName = "#ImgPreview2";
        readURL(this, imgControlName);
        $('.preview2').addClass('it');
        $('.btn-rmv2').addClass('rmv');
        $('#ImgPreview2').css('display','block');
      });
      $("#imag3").change(function() {
        // add your logic to decide which image control you'll use
        var imgControlName = "#ImgPreview3";
        readURL(this, imgControlName);
        $('.preview3').addClass('it');
        $('.btn-rmv3').addClass('rmv');
        $('#ImgPreview3').css('display','block');
      });
      $("#imag4").change(function() {
        // add your logic to decide which image control you'll use
        var imgControlName = "#ImgPreview4";
        readURL(this, imgControlName);
        $('.preview4').addClass('it');
        $('.btn-rmv4').addClass('rmv');
        $('#ImgPreview4').css('display','block');
      });
      $("#imag5").change(function() {
        // add your logic to decide which image control you'll use
        var imgControlName = "#ImgPreview5";
        readURL(this, imgControlName);
        $('.preview5').addClass('it');
        $('.btn-rmv5').addClass('rmv');
        $('#ImgPreview5').css('display','block');
      });
      $("#imag6").change(function() {
        // add your logic to decide which image control you'll use
        var imgControlName = "#ImgPreview6";
        readURL(this, imgControlName);
        $('.preview6').addClass('it');
        $('.btn-rmv6').addClass('rmv');
        $('#ImgPreview6').css('display','block');
      });
      
      $("#removeImage1").click(function(e) {
        e.preventDefault();
        $("#imag1").val("");
        $("#ImgPreview1").attr("src", "");
        $('#ImgPreview1').css('display','none');
        $('.preview1').removeClass('it');
        $('.btn-rmv1').removeClass('rmv');
      });
      $("#removeImage2").click(function(e) {
        e.preventDefault();
        $("#imag2").val("");
        $("#ImgPreview2").attr("src", "");
        $('#ImgPreview2').css('display','none');
        $('.preview2').removeClass('it');
        $('.btn-rmv2').removeClass('rmv');
      });
      $("#removeImage3").click(function(e) {
        e.preventDefault();
        $("#imag3").val("");
        $("#ImgPreview3").attr("src", "");
        $('#ImgPreview3').css('display','none');
        $('.preview3').removeClass('it');
        $('.btn-rmv3').removeClass('rmv');
      });
      $("#removeImage4").click(function(e) {
        e.preventDefault();
        $("#imag4").val("");
        $("#ImgPreview4").attr("src", "");
        $('#ImgPreview4').css('display','none');
        $('.preview4').removeClass('it');
        $('.btn-rmv4').removeClass('rmv');
      });
      $("#removeImage5").click(function(e) {
        e.preventDefault();
        $("#imag5").val("");
        $("#ImgPreview5").attr("src", "");
        $('#ImgPreview5').css('display','none');
        $('.preview5').removeClass('it');
        $('.btn-rmv5').removeClass('rmv');
      });
      $("#removeImage6").click(function(e) {
        e.preventDefault();
        $("#imag6").val("");
        $("#ImgPreview6").attr("src", "");
        $('#ImgPreview6').css('display','none');
        $('.preview6').removeClass('it');
        $('.btn-rmv6').removeClass('rmv');
      });
      
}





function country(){
  $(document).on('click','.phonecode ul li.iti__country',function(){
 var x = $(this).find('.iti__dial-code').text();

 $('.code').attr('value',x);
  });

}

function checkClicker(){
  $(document).on('click','.checkClick',function(){
   $('.checkShow').slideDown();
  });
}

function active(){
  $(document).on('click','.customRadio label',function(){
    $('.customRadio label').removeClass('active');
    $(this).addClass('active');
  });
}

function notification(){
  $(document).on('click','.notification',function(){
    $('.notiAl').slideDown();
  });
  
  document.addEventListener("mousedown", function (event) {
     if (event.target.closest(".notiAl,.notification"))
         return;
     $('.notiAl').hide();
  });
}


function dropdown(){
$(document).on('click','.showDrop',function(){
  $('.showProto').slideDown();
});
}


function Active(){
  $(document).on('click','.vicleDet',function(){
    $('.vicleDet').removeClass('active');
    $(this).addClass('active');
  });
}

function scrolled(){

  $(".bookingNow").click(function() {
    $('html, body').animate({
        scrollTop: $(".Makebooking").offset().top
    }, 1000);
});
}