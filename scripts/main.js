$(document).ready(function(){

  var totalSteps = 4;
  var currentStep = 1;

  function updateUI(){
    //Toggling the hide button on the base of step number
    currentStep > 1 ? $("#prevBtn").removeClass('hide') : $("#prevBtn").addClass('hide');
    currentStep == totalSteps ? $("#nextBtn").addClass('finish') : $("#nextBtn").removeClass('finish');
  }

  $("#nextBtn").click(function(){
    if(currentStep < totalSteps){

      // Rotating the circles
      $(".circles")
        .removeClass('rotate-' + String(((360/4) * currentStep) - 90))
        .addClass('rotate-' + String(((360/4) * currentStep)));
      
      //Animating the content and icons
      $("#info-" + currentStep + ", #icon-" + currentStep)
        .removeClass('active')
        .addClass('toLeft');

      $("#info-" + (currentStep + 1) + ", #icon-" + (currentStep + 1))
        .addClass('active');
      
      //Incrementing the Step
      currentStep += 1;

      updateUI();
    }
  });

  $("#prevBtn").click(function(){
    console.log("current step" + currentStep);
    if(currentStep <= totalSteps){

      $(".circles")
        .removeClass('rotate-' + (currentStep - 1)  * 90)
        .addClass('rotate-' + (currentStep - 2) * 90);

      //Animating the content and icons
      $("#info-" + (currentStep) + ", #icon-" + (currentStep))
        .removeClass('active');
        
      $("#info-" + (currentStep - 1) + ", #icon-" + (currentStep - 1))
        .removeClass('toLeft')
        .addClass('active');
        
      currentStep = currentStep - 1;

      updateUI();
    }
  })
});