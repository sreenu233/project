 
$(document).on('click','.search-sb',function(e){
  e.preventDefault();
  if($('#search-input').val()!=''){
    $('#search-form')[0].submit();
  }else{
    $(".search-wrap").toggle();
  }
  
});
$(document).on('click','#scroll-aboutus',function() {
    $('html,body').animate({
        scrollTop: $("#aboutsec").offset().top},
        'slow');
});
$(document).ready(function(){
  $("#highContrastWhite").click(function(){
    //$("body").addClass('high-contrast-white');
    $("body").removeClass('high-contrast-white');
    $("body").removeClass('high-contrast-black');
    $("body").removeClass('font-increase-minus');
    $("body").removeClass('font-increase-none');
    $("body").removeClass('font-increase-plus');
    changeDesign('colorContrast','white');
  });

  $("#highContrastBlack").click(function(){
    $("body").addClass('high-contrast-black');
    $("body").removeClass('high-contrast-white');
    $("body").removeClass('font-increase-minus');
    $("body").removeClass('font-increase-none');
    $("body").removeClass('font-increase-plus');
    changeDesign('colorContrast','black');
  });

  var resize = new Array('.resizable');
  resize = resize.join(',');
  var count =0;
  var countDecrease =0;
  //resets the font size when "reset" is clicked
  var resetFont = $(resize).css('font-size');
    $(".reset").click(function(){
      $(resize).css('font-size', 10);
      changeDesign('fontContrast',10);
	     count =0;
      countDecrease =0;
    });
  
  //increases font size when "+" is clicked
  $(".increase").click(function(){
  if(count<3){
    var originalFontSize = $(resize).css('font-size');
    var originalFontNumber = parseFloat(originalFontSize, 10);
    
    var newFontSize = originalFontNumber*1.05;
    if(newFontSize<=11.5763){
      $(resize).css('font-size', newFontSize);
      changeDesign('fontContrast',newFontSize);
    }
    
	count++;
	countDecrease--;
	}
    return false;
  });
  
  //decrease font size when "-" is clicked
  
  $(".decrease").click(function(){
  if(countDecrease<3){
    var originalFontSize = $(resize).css('font-size');
    var originalFontNumber = parseFloat(originalFontSize, 10);
    var newFontSize = originalFontNumber*0.95;
    if(newFontSize>=8.57375){
      $(resize).css('font-size', newFontSize);
      changeDesign('fontContrast',newFontSize);
    }
	count--;
	countDecrease++;
	}
    return false;
  });
  function changeDesign(type,type_value){
    $.ajax({
      url: "/admin/ajax/changeFrontDesign",
      type: "POST",
      data: {type:type,type_value:type_value},
      beforeSend : function()
      {
          $(".button-loading").show();
          $('.savedraft-button').prop('disabled', true);
      },
      success: function(data)
      {   
      },
      error: function(e) 
      {
          $(".button-loading").show();
          $('.savedraft-button').prop('disabled', true);
      }          
    });
  }
  $('#play').on('click', function(event) {
    //currentPlayingTrack.play();

    $('#pause').show();
    $('#play').hide();
  });

  $('#pause').on('click', function(event) {
    //currentPlayingTrack.pause();
    $('#pause').hide();
    $('#play').show();
  });
	
  $('#pause').on('click', function(e) {
    $('#owl-carousel5').trigger('stop.owl.autoplay');
  })
  $('#play').on('click', function(e) {
      $('#owl-carousel5').trigger('play.owl.autoplay');
  })

  $('#play1').on('click', function(event) {
    //currentPlayingTrack.play();

    $('#pause1').show();
    $('#play1').hide();
  });

  $('#pause1').on('click', function(event) {
    //currentPlayingTrack.pause();
    $('#pause1').hide();
    $('#play1').show();
  });
	
  $('#pause1').on('click', function(e) {
      $('#owl-carousel6').trigger('stop.owl.autoplay');
  });
  $('#play1').on('click', function(e) {
      $('#owl-carousel6').trigger('play.owl.autoplay');
  });

  $('#play2').on('click', function(event) {
    //currentPlayingTrack.play();

    $('#pause2').show();
    $('#play2').hide();
  });

  $('#pause2').on('click', function(event) {
    //currentPlayingTrack.pause();
    $('#pause2').hide();
    $('#play2').show();
  });
	$('#pause2').on('click', function(e) {
      $('#owl-carousel4').trigger('stop.owl.autoplay');
  });
  $('#play2').on('click', function(e) {
      $('#owl-carousel4').trigger('play.owl.autoplay');
  });

  $(".notificationsnew").click(function(){
    $(".notifications").toggle();
    var user_type=$(this).attr('user-type');
    console.log(user_type);
    $.ajax({
      url: "/admin/ajax/unreadNotification",
      type: "POST",
      data: {user_type:user_type},
      beforeSend : function()
      {
          $(".button-loading").show();
          $('.savedraft-button').prop('disabled', true);
      },
      success: function(data)
      {   
          if(data==1){
            $('.notificationsnew span').html('0');
          }
      },
      error: function(e) 
      {
          $(".button-loading").show();
          $('.savedraft-button').prop('disabled', true);
      }          
    });
  });
  
});
$(document).on('click', '.misReportBtnAply', function(e) {
  e.preventDefault();
  $('#task').val('');
  $('#page').val('');
  $('#frmlist')[0].submit();
});
$(document).on('change', '.misReportTypeSelect', function() {
  console.log("sdsfsd");
  var reportType=$(this).val();
  $('input').val('');
  $('select').val('');
  $(this).val(reportType);
  $('#frmlist')[0].submit();
});
