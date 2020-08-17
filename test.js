////work stuff--back button all surv. not on count of 0--
//change the color of radiobutton when clicked
$("radio").click(function(){
  $("button").removeClass("active");
  $(this).addClass("active");
});


var data = {};
// data.key1 = ['val1'];create key-value
// data.key1.push('val2');append value

/////validate long form data
    $(document).ready(function() {
      var validator = $("#my_form").validate({
      ignore:  ":hidden:not(.my_item)",

        rules: {
          survey_d: {
            required:
            function(){
              var survey = data.Abuse_Or_Trauma;
              var ptsd_data = data.PTSD;
              if (survey == 'no history of abuse or lingering trauma') {
                return false;}
              else if (ptsd_data == undefined){return true}
                else { return false;;}}},

           no_meds: {
                required: function(){
                  var if_meds = data.MedsToCheck;
                  if (if_meds == undefined) {
                    return true}
                    else {return false}}},

           no_allergy: {
             required: function(){
               var if_allergy = data.AllergyToCheck;
               if (if_allergy == undefined) {
                 return true}
                 else {return false}}},


          cond: {
            required: '#list_medical_cond:blank'
          },
          surg: {
            required: '#list_surgeries:blank'
          },

          who: {
            required: function(){
              var if_family = data.Family_History;
              if (if_family == undefined) {
                return true}
                else {return false}}},

          what: {
            required: function(){
              var if_family = data.Family_History;
              if (if_family == undefined) {
                return true}
                else {return false}}},
              },

        messages: {
            age: "Enter your age in numbers",
            employment: "Please specify employment",
            education: "Please specify education",
            relationship: "Please specify relationship",
            no_meds: "Add medication or select 'none'-- then submit again",
            no_allergy: "Add allergy or select 'none'-- then submit again",
            cond: "Enter medical conditions or select 'none'-- then submit again",
            surg: "Enter surgeries or select 'none'-- then submit again",
            caffeine_num: "Enter a number or decimal",
            smoke_type: "Select type",
            nic_freq: "Please enter frequency number or decimal",
            nic_duration: "Please enter how long number or decimal",
            rec_type: "Please enter drug(s) or select 'No' if none",
            rec_freq: "Please enter how often or select 'No' if none",
            alcohol_freq: "Please enter number or decimal or select 'No' if none",
            who: "Please add family member or select 'No' if none",
            what: "Please add mental health issue or select 'No' if none",
            what_treatment: "Please enter reason for treatment or select 'No' if none",
            last_treatment: "Please enter last appointment date or select 'No' if none",
            hosp_times: "Please eneter number of times or select 'No' if none",
            recent_hosp: "Please eneter most recent time or select 'No' if none",
            sex: "Please select sex before submitting",
            nic: "Please select one before submitting",
            rec: "Please select one before submitting",
            alcohol: "Please select one before submitting",
            preg: "Please select one before submitting",
            sex_active: "Please select one before submitting",
            contra: "Please select one before submitting",
            preg_c: "Please select one before submitting",
            legal: "Please select one before submitting",
            ptsd: "Please select one before submitting",
            survey: "Please select one before submitting",
            safe: "Please select one before submitting",
            suicide: "Please select one before submitting",
            fam_hx: "Please select one before submitting",
            psy_hx: "Please select one before submitting",
            admit: "Please select one before submitting",
            survey_d: "Please answer all questions-- then submit again",
            cc: "Please enter an answer",
          },

        errorPlacement: function(error, element) {
                if (element.attr("name") == "no_meds") {
                    error.appendTo("#error_meds")}
                else if (element.attr("name") == "age") {
                    error.appendTo("#error_age")}
                else if (element.attr("name") == "no_allergy") {
                    error.appendTo("#error_allergy")}
                else if (element.attr("name") == "age") {
                    error.appendTo("#error_age")}
                else if (element.attr("name") == "cond") {
                    error.appendTo("#error_cond")}
                else if (element.attr("name") == "surg") {
                    error.appendTo("#error_surg")}
                else if (element.attr("name") == "caffeine_num") {
                    error.appendTo("#error_caffeine")}
                else if (element.attr("name") == "sex") {
                    error.appendTo("#error_sex")}
                else if (element.attr("name") == "nic") {
                    error.appendTo("#error_nic")}
                else if (element.attr("name") == "rec") {
                    error.appendTo("#error_rec")}
                else if (element.attr("name") == "alcohol") {
                    error.appendTo("#error_alcohol")}
                else if (element.attr("name") == "preg") {
                    error.appendTo("#error_preg")}
                else if (element.attr("name") == "sex_active") {
                    error.appendTo("#error_sex_active")}
                else if (element.attr("name") == "contra") {
                    error.appendTo("#error_contra")}
                else if (element.attr("name") == "preg_c") {
                    error.appendTo("#error_preg_c")}
                else if (element.attr("name") == "legal") {
                    error.appendTo("#error_legal")}
                else if (element.attr("name") == "ptsd") {
                    error.appendTo("#error_ptsd")}
                else if (element.attr("name") == "survey") {
                    error.appendTo("#error_survey")}
                else if (element.attr("name") == "safe") {
                    error.appendTo("#error_safe")}
                else if (element.attr("name") == "suicide") {
                    error.appendTo("#error_suicide")}
                else if (element.attr("name") == "fam_hx") {
                    error.appendTo("#error_fam_hx")}
                else if (element.attr("name") == "psy_hx") {
                    error.appendTo("#error_psy_hx")}
                else if (element.attr("name") == "admit") {
                    error.appendTo("#error_admit")}
                else if (element.attr("name") == "survey_d") {
                  error.appendTo("#error_survey_d")}

                     else {
                    error.insertAfter(element);}},

        onfocusout: false,
        invalidHandler: function(form, validator) {
            var errors = validator.numberOfInvalids();
            if (errors) {
                validator.errorList[0].element.focus();
              if($(validator.errorList[0].element).is(":hidden")) {
                  // $("#error_survey_d").focus();
                  $('html, body').animate({
                      scrollTop: $("#abuse_hx_box").offset().top
                    });}}},
          });});


    $('#done_hx').click(function() {
        if ($("#my_form").valid()) {
          // $("#my_form").submit();
          finished();}
        else {return false};
    });
///end of log form validator


///validater spelled different than other validate form, do I need a unique variable? Who knows.
    $(document).ready(function() {
      var validater = $("#cc_form").validate({
        rules: {},
        messages: {
            cc: "Please enter an answer",
          },
        errorPlacement: function(error, element) {
                 if (element.attr("name") == "cc") {
                  error.appendTo("#cc_error")}
                     else {
                    error.insertAfter(element);}},
        onfocusout: false,
        invalidHandler: function(form, validater) {
            var errors = validater.numberOfInvalids();
            if (errors) {
                validater.errorList[0].element.focus();}
        }});});

/////validator for age if memory Problems
$(document).ready(function() {
  var validater = $("#age_form").validate({
    rules: {},
    messages: {
        age_60: "Please enter a number",
      },
    errorPlacement: function(error, element) {
             if (element.attr("name") == "age_60") {
              error.appendTo("#age_error_60")}
                 else {
                error.insertAfter(element);}},
    onfocusout: false,
    invalidHandler: function(form, validater) {
        var errors = validater.numberOfInvalids();
        if (errors) {
            validater.errorList[0].element.focus();}
    }});});



///////php trial
// var pt_packet = {"Packet" : data}
// function send_to_php() {
// $(document).ready(function() {
// console.log(pt_packet)
// pt_packets = JSON.stringify(pt_packet)
// var request = $.ajax({
//     url: "post_results.php",
//     type: 'POST',
//     data: pt_packets,
//     success: function(result) {
//     $("#note").append(result)}})
// })}


function send_to_php() {
$(document).ready(function() {
  // var pt_packets = JSON.stringify(data);
// pt_packet = JSON.stringify(pt_packets)
console.log(data)
// console.log(pt_packet)
$.ajax({
    url: "post_results.php",
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',
    success: function(result) {
    $("#note").append(result)}})
})}


///functions for button presses at beginning of survey
function new_pt() {
    jQuery(function($) {
        $("#new_old_what").slideUp(750);
        $( "#if_new_pt" ).delay(1000).slideDown(750);})
        data.Patient_Type = ['New Patient'];
      };
















function old_pt() {
    jQuery(function($) {
        $("#new_old_what").slideUp(750);
      //   $( "#if_new_pt" ).delay(1000).slideDown(750);})
      //   data.Patient_Type = ['Returning Patient'];
      // };
data.Chief_Complaint = ['Mood issues'];
  data.Panic = ['Denies'];
  data.Age = ['25'];
    data.Anxiety = ["12"];
      data.Medical_Condition = ["bum knee", "head hurt"];
      data.School = ["studet"];
      data.Employment = ['Full-time'];
print_data()})}




















function new_or_old_pt() {
    jQuery(function($) {
        $("#welcome_page").slideUp(750);
        $( "#new_old_what" ).delay(1000).slideDown(750);})
      };

function mood() {
    jQuery(function($) {
      var cc_var = $("#something_else_cc_answer").val();
      data.CC = [cc_var];
        $("#somethingelse_page").slideUp(750);
        $( "#mood_page" ).delay(1000).slideDown(750);})
        data.Chief_Complaint = ['Mood issues'];
      };

function memory() {
    jQuery(function($) {
      var cc_var = $("#something_else_cc_answer").val();
      data.CC = [cc_var];
        $("#somethingelse_page").slideUp(750);
        $( "#memory_page" ).delay(1000).slideDown(750);})
        data.Chief_Complaint = ['Memory issues'];
      };

function ptsd() {
    jQuery(function($) {
      var cc_var = $("#something_else_cc_answer").val();
      data.CC = [cc_var];
        $("#somethingelse_page").slideUp(750);
        $( "#ptsd_page" ).delay(1000).slideDown(750);})
        data.Chief_Complaint = ['PTSD'];
        $("#ptsd_in_hx").css("display", "none")
      };

function anxiety() {
    jQuery(function($) {
      var cc_var = $("#something_else_cc_answer").val();
      data.CC = [cc_var];
        $("#somethingelse_page").slideUp(750);
        $( "#anxiety_page" ).delay(1000).slideDown(750);})
        data.Chief_Complaint = ['Anxiety'];
      };

function somethingelse(site) {
    jQuery(function($) {
        data.Chief_Complaint = ['Something Else'];
        $("#if_new_pt").slideUp(750);
        $( "#somethingelse_page" ).delay(1000).slideDown(750);
        $(site).delay(1000).slideDown(750);
      })};

function yes_ptsd_start() {
    jQuery(function($) {
        $("#ptsd_1q").slideUp(750);
        $( "#start_ptsd" ).delay(1000).slideDown(750);})
      };

function no_ptsd_start() {
    jQuery(function($) {
        $("#ptsd_1q").slideUp(750);
        $( "#start_ptsd" ).delay(1000).slideDown(750);})
      };

      function done_ph9q() {
          jQuery(function($) {
              $("#mood_page").slideUp(750);
              $( "#digfast_page" ).delay(1000).slideDown(750);})
            };

            function open_panic() {
                jQuery(function($) {
                    $("#anx").slideUp(750);
                    $( "#panic_pre" ).delay(1000).slideDown(750);})
                  };

            function panic_or_not(do_we) {
                if (do_we == '1'){
                  jQuery(function($) {
                      $("#anx").slideUp(750);
                      $("#panic_pre").slideUp(750);
                      $( "#panic" ).delay(1000).slideDown(750);})};
                if (do_we == '0'){
                  data.Panic = ['Denies']
                  jQuery(function($) {
                      $("#anxiety_page").slideUp(750);
                      $( "#history" ).delay(1000).slideDown(750);})}}

//only depression screen for MCI if over 60
  function age_pre_60() {
    var age = $("#age_pre").val();
    data.Age = [age];
    if (age > 59) {
      jQuery(function($) {
          $("#age_bar").slideUp(750);
          $( "#over_60" ).delay(1000).slideDown(750);
        $( "#age_q" ).css("display", "none");
      $( "#age_1" ).toggle(500);
          $( "#age_2" ).toggle(500);
      })}
    else {
      jQuery(function($) {
          $("#memory_page").slideUp(750);
          $( "#history" ).delay(1000).slideDown(750);
        $( "#age_q" ).toggle(500);
      $( "#age_1" ).toggle(500);
      $( "#age_2" ).toggle(500);})}};

              function else_hx() {
                  jQuery(function($) {
                    var cc_var = $("#something_else_cc_answer").val();
                      $("#somethingelse_page").slideUp(750);
                      $( "#history" ).delay(1000).slideDown(750);
                      data.CC = [cc_var];})};


                      function start_hx(page) {
                        jQuery(function($) {
                            $(page).slideUp(750);
                            $( "#history" ).delay(1000).slideDown(750);
                          })};

                      function hx_2() {
                        jQuery(function($) {
                            $("#history").slideUp(750);
                            $( "#history_2" ).delay(1000).slideDown(750);})
                          };

//validates "5 words or so CC" is filled out then sends to correct survey
function sendto(cc) {
  if ($("#cc_form").valid()) {
    window[cc]();}
  else {return false};}

//function called when next, sends to validate an age was input
  function age_valid(cc) {
    if ($("#age_form").valid()) {
      send_php(age);
      age_pre_60()}
    else {return false};}

$(document).ready(function() {
///disables buttons for 1.25sec so you dont double click
  $('input[type="button"]').click(function(){
  var that = this;
  $(this).css('color','#3299e9');
  $(this).prop('disabled', true);
  setTimeout(function(){
      $(that).prop('disabled', false);
    }, 1250)});


//functionality of all the radiobuttons in the survey
$("input[name='sex']").change(function(){
  if ($(this).val() == 'Male') {
        data.Sex = ['male'];
          $( "#if_female" ).delay(200).slideUp(1000)}
       else if ($(this).val() == 'Female') {
         data.Sex = ['female']
           $( "#if_female" ).delay(200).slideDown(1000)}});


           $("input[name='nic']").change(function(){
             if ($(this).val() == 'Yes') {
                   data.Smoker = ['Yes'];
                   $( "#nic_box" ).delay(200).slideDown(1000)}
                  else if ($(this).val() == 'No') {
                    data.Smoker = ['Denies'];
                      $( "#nic_box" ).delay(200).slideUp(1000)}});


$("input[name='rec']").change(function(){
  if ($(this).val() == 'Yes') {
        data.RecDrugs = ['Yes'];
        $( "#rec_box" ).delay(200).slideDown(1000)}
       else if ($(this).val() == 'No') {
         data.RecDrugs = ['Denies'];
          $( "#rec_box" ).delay(200).slideUp(1000)}});


          $("input[name='alcohol']").change(function(){
            if ($(this).val() == 'Yes') {
                  data.Alcohol = ['Yes'];
                  $( "#alcohol_box" ).delay(200).slideDown(1000)}
                 else if ($(this).val() == 'No') {
                   data.Alcohol = ['Denies'];
                    $( "#alcohol_box" ).delay(200).slideUp(1000)}});


        $("input[name='preg']").change(function(){
          if ($(this).val() == 'Yes') {
                data.Pregnant = ['Yes'];
              $( "#prego_box" ).delay(200).slideUp(1000);
            $( "#prego_box_2" ).delay(200).slideUp(1000)}
               else if ($(this).val() == 'No') {
                 data.Pregnant = ['Denies'];
                 $( "#prego_box" ).delay(200).slideDown(1000)
                 $( "#prego_box_2" ).delay(200).slideDown(1000)}});


 $("input[name='sex_active']").change(function(){
   if ($(this).val() == 'Yes') {
         data.SexuallyActive = ['Yes'];
       $( "#sex_active_box" ).delay(200).slideDown(1000)}
        else if ($(this).val() == 'No') {
          data.SexuallyActive = ['Denies'];
          $( "#sex_active_box" ).delay(200).slideUp(1000)}});


                  $("input[name='contra']").change(function(){
                    if ($(this).val() == 'Yes') {
                          data.Contraception = ['Yes']}
                         else if ($(this).val() == 'No') {
                           data.Contraception = ['Denies'];}});


 $("input[name='preg_c']").change(function(){
   if ($(this).val() == 'Yes') {
         data.PregnantChance = ['Yes'];}
        else if ($(this).val() == 'No') {
          data.PregnantChance = ['Denies'];}});


                    $("input[name='legal']").change(function(){
                      if ($(this).val() == 'Yes') {
                            data.Legal = ['has past/present legal troubles'];}
                           else if ($(this).val() == 'No') {
                             data.Legal = ['denies any past or present legal history'];}});


 $("input[name='ptsd']").change(function(){
   if ($(this).val() == 'Yes') {
     data.Abuse_Or_Trauma = ['a past history of abuse/lingering trauma'];
     $( "#abuse_hx_box" ).delay(200).slideDown(1000)}
        else if ($(this).val() == 'No') {
          data.Abuse_Or_Trauma = ['no history of abuse or lingering trauma']
        $( "#abuse_hx_box" ).delay(200).slideUp(1000)};});


                      $("input[name='survey']").change(function(){
                        if ($(this).val() == 'Yes') {
                          $("input[name='survey']").attr('checked',false);
                          $("input[name='survey']").removeClass("selected");
                              ptsd_answer(1, 'hx');}
                             else if ($(this).val() == 'No') {
                               $("#yes_abuse_survey").removeClass("selected");
                               ptsd_answer(0, 'hx');}});


 $("input[name='safe']").change(function(){
   if ($(this).val() == 'Yes') {
        data.Safe = ['reports feeling safe at home'];}
        else if ($(this).val() == 'No') {
          data.Safe = ['reports not feeling safe at home'];}});


                $("input[name='suicide']").change(function(){
                  if ($(this).val() == 'Yes') {
                     data.Suicide = ['Agrees to seriously considering/past suicide attempts'];}
                       else if ($(this).val() == 'No') {
                         data.Suicide = ['Denies seriously considering or past suicide attempts'];}});


 $("input[name='fam_hx']").change(function(){
   if ($(this).val() == 'Yes') {
    $( "#family_hx_box" ).delay(200).slideDown(1000)}
        else if ($(this).val() == 'No') {
        data.Family_History = ['no family history of mental illness'];
        $( "#family_hx_box" ).delay(200).slideUp(1000)};});


                $("input[name='psy_hx']").change(function(){
                  if ($(this).val() == 'Yes') {
                       data.Psych_Care = ['Yes'];
                  $( "#psych_care_box" ).delay(200).slideDown(1000)}
                       else if ($(this).val() == 'No') {
                          data.Psych_Care = ['denies previous psychiatric care'];
                       $( "#psych_care_box" ).delay(200).slideUp(1000)};});


 $("input[name='admit']").change(function(){
   if ($(this).val() == 'Yes') {
      data.Hospital = ['Yes'];
   $( "#psych_hosp_box" ).delay(200).slideDown(1000)}
        else if ($(this).val() == 'No') {
           data.Hospital = ['Denies any psychiatric hospital admits'];
        $( "#psych_hosp_box" ).delay(200).slideUp(1000)};});

//collapses meds allergies surgeires and conditions if clicked 'none'
    $('#no_surg').click(function(){
    $('#surg').toggle(750);
      });

    $('#no_cond').click(function(){
    $('#cond').toggle(750);
      });

            $('#no_meds').click(function(){
            $('#add_meds').toggle(750);
              });

            $('#no_allergy').click(function(){
            $('#no_allergy_box').toggle(750);
              });

//turns button white after clicking so they dont stay gray and look like you cant click again
//should make a simple function were i a better person
$('#an11').click(function(){
$('#an11').delay(500).css('color','white');
  });
$('#an21').click(function(){
$('#an21').delay(500).css('color','white');
  });
$('#an31').click(function(){
$('#an31').delay(500).css('color','white');
  });
$('#an41').click(function(){
$('#an41').delay(500).css('color','white');
  });
$('#an51').click(function(){
$('#an51').delay(500).css('color','white');
  });

    $('#an12').click(function(){
$('#an12').delay(500).css('color','white');
  });
$('#an22').click(function(){
$('#an22').delay(500).css('color','white');
  });
$('#an32').click(function(){
$('#an32').delay(500).css('color','white');
  });
$('#an42').click(function(){
$('#an42').delay(500).css('color','white');
  });

        $('#an1').click(function(){
        $('#an1').delay(500).css('color','white');
          });

        $('#an2').click(function(){
        $('#an2').delay(500).css('color','white');
          });

        $('#an3').click(function(){
        $('#an3').delay(500).css('color','white');
          });

        $('#an4').click(function(){
        $('#an4').delay(500).css('color','white');
          });

              $('#yes_memory').click(function(){
              $('#yes_memory').delay(500).css('color','white');
                });

              $('#no_memory').click(function(){
              $('#no_memory').delay(500).css('color','white');
                });

      $('#no_ptsd').click(function(){
      $('#no_ptsd').delay(500).css('color','white');
        });

      $('#yes_ptsd').click(function(){
      $('#yes_ptsd').delay(500).css('color','white');
        });

      $('#yes_digfast').click(function(){
      $('#yes_digfast').delay(500).css('color','white');
        });

      $('#no_digfast').click(function(){
      $('#no_digfast').delay(500).css('color','white');
        });

$('#yes_abuse_survey').click(function(){
$('#yes_abuse_survey').delay(500).css('color','white');
  $('#yes_abuse_survey').delay(500).css('background-color', '#007bff')
  });

  $('#no_abuse_survey').click(function(){
  $('#no_abuse_survey').delay(500).css('color','white');
  $('#no_abuse_survey').delay(500).css('background-color', '#007bff')
    });

          $('#done_hx').click(function(){
          $('#done_hx').delay(500).css('color','white');
            $('#done_hx').delay(500).css('background-color', '#007bff')
            });

//takes medication dose frequency and name and shows it to patient when inputed and adds to lists to check and display for provider
          var med_num = 1
          $("#add_med").click(function(){
            var med = $( '#med_name' ).val();
            var dose = $( '#med_dose' ).val();
            var freq = $( '#med_freq' ).val();

            $( '#med_name' ).val('');
            $( '#med_dose' ).val('');
            $( '#med_freq' ).val('');

            $( "#added_meds" ).append(med_num, '.   ', med, ' ', dose, ' ', freq, ' ', '<br>');
            med_num ++
            med_to_data = med + ' ' + dose + ' ' + freq

            if (!('Medications' in data)) {
              data.Medications = [med_to_data]
              data.MedsToCheck = [med]}

            else if (('Medications' in data)) {
              data.Medications.push(med_to_data)
              data.MedsToCheck.push(med);}});


          var allergy_num = 1
          $("#add_allergy").click(function(){
            var allergy_name = $( '#allergy_name' ).val();
            var allergy_reaction = $( '#allergy_reaction' ).val();

            $( '#allergy_name' ).val('');
            $( '#allergy_reaction' ).val('');

            $( "#added_allergy" ).append(allergy_num, '.   ', allergy_name, ' ', 'causes ', allergy_reaction, '<br>');
            allergy_num ++
            allergy_to_data = allergy_name + ' CAUSES ' + allergy_reaction

            if (!('MedAllergy' in data)) {
              data.MedAllergy = [allergy_to_data]
              data.AllergyToCheck = [allergy_name]}

            else if (('MedAllergy' in data)) {
              data.MedAllergy.push(allergy_to_data);
              data.AllergyToCheck.push(allergy_name);}});

//takes family history of disease and adds them together to show to patient and provider later
          var family_num = 1
          $("#add_family").click(function(){
            var who = $( '#who' ).val();
            var what = $( '#what' ).val();

            $( '#who' ).val('');
            $( '#what' ).val('');

            $( "#added_family" ).append(family_num, '.   ', who, ' - ', what, '<br>');
            family_num ++

            family_to_push = who + ' - ' + what

            if (!('Family_History' in data)) {
              data.Family_History = ["family history of mental illness: " + family_to_push]}

            else if (('Family_History' in data)) {
              data.Family_History.push("\ and\ " + family_to_push)};
          });})

/////Start DIGFAST
 var digfast_total = 0;
     var digfast_count = 0;
     var flags_to_push = []
     var digfast_questions = [
       '…you felt so good or so hyper that other people thought you were not your normal self or you were so hyper that you got into trouble?',
     '…you were so irritable that you shouted at people or started fights or arguments?',
     '…you felt much more self-confident than usual?',
     '…you got much less sleep than usual and found you didn’t really miss it',
     '…you were much more talkative or spoke faster than usual?',
     "…thoughts raced through your head or you couldn’t slow your mind down?",
     "…you were so easily distracted by things around you that you had trouble concentrating or staying on track?",
     "…you had much more energy than usual?",
     "…you were much more active or did many more things than usual?",
     "…you were much more social or outgoing than usual, for example, you telephoned friends in the middle of the night?",
     "…you were much more interested in sex than usual?",
     "…you did things that were unusual for you or that other people might have thought were excessive, foolish, or risky?",
     "…the act of spending money got you or your family in trouble?",
    " Think about these last 12 questions-- have several of these ever happened during the same period of time?",
    "How much of a problem did any of these cause you — like being able to work; having family, money, or legal troubles; getting into arguments or fights?",
];
///called every answer inputted for DIGFAST
     function digfast_but(digfast_ans, digfast_val) {

jQuery(function($) {
if (digfast_count > 0) {
  $("#back_digfast").show(750);}
})

if (!('DIGFAST_Depression_Flags' in data)) {
  data.DIGFAST_Flags = []}
//for each question, if yes adds to total score, marks last answer yes for back button functionality, pushes andwer to provider note
if(digfast_count == 0) {
  if (digfast_ans == 0) {
    digfast_total ++;
    last_an = 1;
    flags_to_push.push('felt so good or so hyper that other people thought they were not their normal self or were so hyper that they got into trouble');
  } else {last_an = 0}};
if(digfast_count == 1) {
  if (digfast_ans == 0) {
    digfast_total ++;
    last_an = 1;
    flags_to_push.push('were so irritable that they shouted at people or started fights or arguments');
  } else {last_an = 0}};
if(digfast_count == 2) {
  if (digfast_ans == 0) {
    digfast_total ++;
    last_an = 1;
    flags_to_push.push('felt much more self-confident than usual?');
  } else {last_an = 0}};
if(digfast_count == 3) {
    if (digfast_ans == 0) {
  digfast_total ++;
  last_an = 1;
  flags_to_push.push('got much less sleep than usual and found you didn’t really miss it');
} else {last_an = 0}};
if(digfast_count == 4) {
    if (digfast_ans == 0) {
  digfast_total ++;
  last_an = 1;
  flags_to_push.push('were much more talkative or spoke faster than usual');
} else {last_an = 0}};
if(digfast_count == 5) {
    if (digfast_ans == 0) {
  digfast_total ++;
  last_an = 1;
  flags_to_push.push('thoughts raced through their head or they couldn’t slow their mind down');
} else {last_an = 0}};
if(digfast_count == 6) {
    if (digfast_ans == 0) {
  digfast_total ++;
  last_an = 1;
flags_to_push.push('were so easily distracted by things around them that they had trouble concentrating or staying on track?');
} else {last_an = 0}};
if(digfast_count == 7) {
    if (digfast_ans == 0) {
  digfast_total ++;
  last_an = 1;
  flags_to_push.push('had much more energy than usual');
} else {last_an = 0}};
if(digfast_count == 8) {
    if (digfast_ans == 0) {
  digfast_total ++;
  last_an = 1;
flags_to_push.push(' were much more active or did many more things than usual');
} else {last_an = 0}};
if(digfast_count == 9) {
    if (digfast_ans == 0) {
  digfast_total ++;
  last_an = 1;
  flags_to_push.push('were much more social or outgoing than usual, for example, telephoning friends in the middle of the night');}
  else {last_an = 0}};
if(digfast_count == 10) {
    if (digfast_ans == 0) {
  digfast_total ++;
  last_an = 1;
  flags_to_push.push('were much more interested in sex than usual');
} else {last_an = 0}};
if(digfast_count == 11) {
    if (digfast_ans == 0) {
  digfast_total ++;
  last_an = 1;
  flags_to_push.push('did things that were unusual for them or that other people might have thought were excessive, foolish, or risky');
} else {last_an = 0}}
if(digfast_count == 12) {
    if (digfast_ans == 0) {
  digfast_total ++;
  last_an = 1;
flags_to_push.push("spending money got them or their family in trouble");
} else {last_an = 0}};

//change answer type to last question ones if yes to any prior question
if (digfast_count > 12) {
    if (digfast_total > 0) {
      //question asked only if answered yes to 1 or more
jQuery(function($) {
     $('#digfast_display').fadeOut(500, function() {
           $(this).text(digfast_questions[digfast_count]).fadeIn(500);
         })})
         jQuery(function($) {
             $("#first_answers_digfast").slideUp(750);
             $( "#last_answers_digfast" ).delay(1000).slideDown(750);});}
else {
  //FIX THIS WTF
  start_hx('#digfast_page')
  data.DIGFAST = [digfast_total]
  data.DIGFAST_Flags.push(flags_to_push)}}

if(digfast_count == 13) {
    if (digfast_total > 1) {
      if (digfast_ans == 0) {
        last_an = 1;
  data.DIGFAST_Same_Time = ['**patient states several of these symptoms happened during the same period of time**'];
}}};
//pushes the answer to the 4 answer type to flags
if(digfast_count == 14) {
  flags_to_push.push(digfast_val);
  start_hx('#digfast_page')
  data.DIGFAST = [digfast_total]
var dig_pop = data.DIGFAST_Flags;
   /////////////////// data.DIGFAST_Dif =

  data.DIGFAST_Flags.push(flags_to_push)
  jQuery(function($) {
       $('#digfast_display').fadeOut(500, function() {
             $(this).text(digfast_questions[digfast_count]).fadeIn(500);
           })})}
 digfast_count ++;
 jQuery(function($) {
      $('#digfast_display').fadeOut(500, function() {
            $(this).text(digfast_questions[digfast_count]).fadeIn(500);
          })})}

  //back button for digfast
  function digfast_back() {
    if (digfast_count > 0) {
  if (last_an = 1) {
  flags_to_push.splice(-1,1);
digfast_total --};
  digfast_count --;
  jQuery(function($) {
       $('#digfast_display').fadeOut(500, function() {
             $(this).text(digfast_questions[digfast_count]).fadeIn(500);})})}}
////////End DIGFAST    https://www.ohsu.edu/sites/default/files/2019-06/cms-quality-bipolar_disorder_mdq_screener.pdf

////Start PH9Q
var ph9q_count = 0;
var flags_to_push_ph9q = [];
var ph9q_all = [];
var ph9q_questions = [
'Little interest or pleasure in doing things',
'Feeling down, depressed, or hopeless',
'Trouble falling/staying asleep, sleeping too much',
'Feeling tired or having little energy',
"Poor appetite or overeating",
"Feeling bad about yourself or that you are a failure or have let yourself or your family down",
"Trouble concentrating on things, such as reading the newspaper or watching television",
"Moving or speaking so slowly that other people could have noticed. Or being so fidgety or restless that you have been moving around a lot more than usual",
"Thoughts that you would be better off dead or of hurting yourself in some way"];
function ph9q_but(ph9q_ans, typed_ans) {

jQuery(function($) {
if (ph9q_count > 0) {
                $("#back_ph9q").show(750)}})

  /// For each question in the set, if it flags as positive, add 1 to total
  ///score AND marks it to minus the answer if back button pressed after (last_an=1).
  ///else last_an=0 does not take away answer in list.
  if(ph9q_count == 0) {
    if (ph9q_ans > 0) {
      last_an = 1;
      flags_to_push_ph9q.push('Little interest or pleasure in doing things--' + typed_ans);
    }  else {last_an = 0}}
    if(ph9q_count == 1) {
      if (ph9q_ans > 0) {
        last_an = 1;
        flags_to_push_ph9q.push('Feeling down, depressed, or hopeless--' + typed_ans);
    }  else {last_an = 0}}
  if(ph9q_count == 2) {
    if (ph9q_ans > 0) {
      last_an = 1;
      flags_to_push_ph9q.push('Trouble falling/staying asleep, sleeping too much--' + typed_ans);
    }  else {last_an = 0}}
if(ph9q_count == 3) {
  if (ph9q_ans > 0) {
    last_an = 1;
    flags_to_push_ph9q.push('Feeling tired or having little energy--' + typed_ans);
    }  else {last_an = 0}}
  if(ph9q_count == 4) {
    if (ph9q_ans > 0) {
      last_an = 1;
      flags_to_push_ph9q.push('Poor appetite or overeating--' + typed_ans);
    }  else {last_an = 0}}
if(ph9q_count == 5) {
  if (ph9q_ans > 0) {
    last_an = 1;
    flags_to_push_ph9q.push('Feeling bad about yourself or that you are a failure or have let yourself or your family down--' + typed_ans);
    }  else {last_an = 0}}
  if(ph9q_count == 6) {
    if (ph9q_ans > 0) {
      last_an = 1;
      flags_to_push_ph9q.push('Trouble concentrating on things, such as reading the newspaper or watching television--' + typed_ans);
    }  else {last_an = 0}}
if(ph9q_count == 7) {
  if (ph9q_ans > 0) {
    last_an = 1;
    flags_to_push_ph9q.push('Moving or speaking so slowly that other people could have noticed. Or the opposite; being so fidgety or restless that you have been moving around a lot more than usual--' + typed_ans);
    }  else {last_an = 0}}
  if(ph9q_count == 8) {
    if (ph9q_ans > 0) {
      last_an = 1;
      flags_to_push_ph9q.push('Thoughts that you would be better off dead or of hurting yourself in some way--' + typed_ans);
    }  else {last_an = 0}}


  if(ph9q_count == 8) {
    jQuery(function($) {
      $('#ph9q_display').fadeOut(500, function() {
            $(this).text('If you checked off any problem on this questionnaire so far, how difficult have these problems made it for you to do your work, take care of things at home, or get along with other people?').fadeIn(500)});

      $('#an1').fadeOut(500, function() {
            $(this).prop('value', 'Not difficult at all').fadeIn(500);
          });
      $('#an2').fadeOut(500, function() {
            $(this).prop('value', 'Somewhat difficult').fadeIn(500);
          });
      $('#an3').fadeOut(500, function() {
            $(this).prop('value', 'Very difficult').fadeIn(500);
          });
      $('#an4').fadeOut(500, function() {
            $(this).prop('value', 'Extremely difficult').fadeIn(500);
        });
        })}
///last question has different answer buttons
  else if (ph9q_count > 8) {
    if (ph9q_ans == 1) {
      data.ph9q_diff = ['Not difficult at all']
    };
    if (ph9q_ans == 2) {
      data.ph9q_diff = ['Somewhat difficult']
    };
    if (ph9q_ans == 3) {
      data.ph9q_diff = ['Very difficult']
    };
    if (ph9q_ans == 4) {
      data.ph9q_diff = ['Extremely difficult']
    };
    data.ph9q_Flags = [flags_to_push_ph9q];
    var ph9q_sum = ph9q_all.reduce(function(a, b){
    return a + b;
}, 0);
    data.ph9q_Total = [ph9q_sum];
    done_ph9q()}
  else {
       jQuery(function($) {
         $('#ph9q_display').fadeOut(500, function() {
               $(this).text(ph9q_questions[ph9q_count]).fadeIn(500);
             })})};
     ph9q_count ++;};
     //end//
     ///back button function for ph9q
     function ph9q_back() {
     if (ph9q_count == 9) {
       $('#an1').fadeOut(500, function() {
             $(this).prop('value', 'Not at all').fadeIn(500);
           });
       $('#an2').fadeOut(500, function() {
             $(this).prop('value', 'Several days').fadeIn(500);
           });
       $('#an3').fadeOut(500, function() {
             $(this).prop('value', 'More than half the days').fadeIn(500);
           });
       $('#an4').fadeOut(500, function() {
             $(this).prop('value', 'Nearly everyday').fadeIn(500);
         });}
         if (ph9q_count > 0) {
     if (last_an = 1) {
     flags_to_push_ph9q.splice(-1,1);}
     ph9q_all.splice(-1,1);
     ph9q_count --;
     jQuery(function($) {
       $('#ph9q_display').fadeOut(500, function() {
             $(this).text(ph9q_questions[ph9q_count]).fadeIn(500);})})}}
////END OF PH9Q


///Start memory
     var flags_to_push_memory = []
     var memory_total = 0;
     var memory_count = 0;
     var last_an = 0
     var memory_questions = [
       'Are you basically satisfied with your life?',
     'Have you dropped many of your activities and interests?',
     'Do you feel that your life is empty?',
     'Do you often get bored?',
     'Are you in good spirits most of the time?',
     "Are you afraid that something bad is going to happen to you?",
     "Do you feel happy most of the time?",
     "Do you often feel helpless?",
     "Do you prefer to stay at home, rather than going out and doing things?",
     "Do you feel that you have more problems with memory than most?",
     "Do you think it is wonderful to be alive now?",
     "Do you feel worthless the way you are now?",
     "Do you feel full of energy?",
    "Do you feel that your situation is hopeless?",
    "Do you think that most people are better off than you are?",
];
     function memory_but(memory_ans) {

/// For each question in the set, if it flags as positive, add 1 to total
///score AND marks it to minus the answer if back button pressed after (last_an=1).
///else last_an=0 does not take away answer in list.

if (memory_count == 0) {
    jQuery(function($) {
        $("#back_memory").toggle(750);})}
if (memory_count > 0) {
            jQuery(function($) {
                $("#back_memory").toggle(750);})}
       
if(memory_count == 0) {
  if (memory_ans == 0) {
    memory_total ++;
    last_an = 1
    flags_to_push_memory.push('not basically satisfied with life');
  } else {
    last_an = 0}}
if(memory_count == 1) {
  if (memory_ans == 1) {
    memory_total ++;
    last_an = 1
    flags_to_push_memory.push('has dropped many of thier activities and interests');
  } else {
    last_an = 0}}
if(memory_count == 2) {
  if (memory_ans == 1) {
    memory_total ++;
    last_an = 1
    flags_to_push_memory.push('feels life is empty');
  } else {
    last_an = 0}}
if(memory_count == 3) {
    if (memory_ans == 1) {
  memory_total ++;
  last_an = 1
  flags_to_push_memory.push('is often bored');
} else {
  last_an = 0}}
if(memory_count == 4) {
    if (memory_ans == 0) {
  memory_total ++;
  last_an = 1
  flags_to_push_memory.push('is not in good spirits most of the time');
} else {
  last_an = 0}}
if(memory_count == 5) {
    if (memory_ans == 1) {
  memory_total ++;
  last_an = 1
  flags_to_push_memory.push('feels afraid something bad is going to happen to them');
} else {
  last_an = 0}}
if(memory_count == 6) {
    if (memory_ans == 0) {
  memory_total ++;
  last_an = 1
  flags_to_push_memory.push('does not feel happy most of the time');
} else {
  last_an = 0}}
if(memory_count == 7) {
    if (memory_ans == 1) {
  memory_total ++;
  last_an = 1
  flags_to_push_memory.push('often feels helpless');
} else {
  last_an = 0}}
if(memory_count == 8) {
    if (memory_ans == 1) {
  memory_total ++;
  last_an = 1
  flags_to_push_memory.push('prefers to stay home rather than going out and doing things');
} else {
  last_an = 0}}
if(memory_count == 9) {
    if (memory_ans == 1) {
  memory_total ++;
  last_an = 1
  flags_to_push_memory.push('feels like they have more problems with memory than most');
} else {
  last_an = 0}}
if(memory_count == 10) {
    if (memory_ans == 0) {
  memory_total ++;
  last_an = 1
  flags_to_push_memory.push('does not think it is wonderful to be alive now');
} else {
  last_an = 0}}
if(memory_count == 11) {
    if (memory_ans == 1) {
  memory_total ++;
  last_an = 1
  flags_to_push_memory.push('feels worthless the way they are now');
} else {
  last_an = 0}}
if(memory_count == 12) {
    if (memory_ans == 0) {
  memory_total ++;
  last_an = 1
  flags_to_push_memory.push('does not feel full of energy');
} else {
  last_an = 0}}
if(memory_count == 13) {
    if (memory_ans == 1) {
  memory_total ++;
  last_an = 1
  flags_to_push_memory.push('feels that their situation is hopeless');
} else {
  last_an = 0}}
if(memory_count == 14) {
    if (memory_ans == 1) {
  memory_total ++;
  last_an = 1
  flags_to_push_memory.push('feels that most people are better off than they are');
} else {last_an = 0};

  start_hx('#memory_page')
  data.Memory_Depression_Flags = [flags_to_push_memory]
  data.Memory_Depression = [memory_total];}

 jQuery(function($) {
   $('#memory_display').fadeOut(500, function() {
         $(this).text(memory_questions[memory_count]).fadeIn(500);
       })});
 memory_count ++;};

 //back button for memory
 function memory_back() {
    if (memory_count > 0) {
   if (last_an == 1) {
 flags_to_push_memory.splice(-1,1);
memory_total --};
 memory_count --;
 jQuery(function($) {
   $('#memory_display').fadeOut(500, function() {
         $(this).text(memory_questions[memory_count]).fadeIn(500);})})}}
/// END OF MEMORY COUNTER////

///Start PTSD
var ptsd_total = 0;
var ptsd_count = 0;
var flags_to_push_ptsd = []
var ptsd_questions = [
  'had nightmares about the event(s) or thought about the event(s) when you did not want to?',
  'tried hard not to think about the event(s) or went out of your way to avoid situations that reminded you of the event(s)?',
  'been constantly on guard, watchful, or easily startled?',
  'felt numb or detached from people, activities, or your surroundings?',
  'felt guilty or unable to stop blaming yourself or others for the event(s) or any problems the event(s) may have caused?',];
function ptsd_answer(ans, loc) {

if (ptsd_count == 0) {
    jQuery(function($) {
        $("#back_ptsd").toggle(750);})}
if (ptsd_count > 0) {
            jQuery(function($) {
                $("#back_ptsd").toggle(750);})}
  
  
  if(ptsd_count == 0) {
      if (ans == 1) {
    ptsd_total ++;
    last_an = 1;
    flags_to_push_ptsd.push('had nightmares about the trauma or thought about the trauma when they did not want to');
  } else {last_an = 0}}
  if(ptsd_count == 1) {
      if (ans == 1) {
    ptsd_total ++;
    last_an = 1;
    flags_to_push_ptsd.push('tried hard not to think about the trauma or went out of their way to avoid situations that reminded them of the trauma');
  } else {last_an = 0}}
  if(ptsd_count == 2) {
      if (ans == 1) {
    ptsd_total ++;
    last_an = 1;
    flags_to_push_ptsd.push('have been constantly on guard, watchful, or easily startled');
  } else {last_an = 0}}
  if(ptsd_count == 3) {
      if (ans == 1) {
    ptsd_total ++;
    last_an = 1;
    flags_to_push_ptsd.push('felt numb or detached from people, activities, or their surroundings');
  } else {last_an = 0}}
  if(ptsd_count == 4) {
      if (ans == 1) {
    ptsd_total ++;
    last_an = 1;
    flags_to_push_ptsd.push('felt guilty or unable to stop blaming themself or others for the trauma or any problems the trauma may have caused');};
    data.PTSD = [ptsd_total];
    data.PTSD_Flags = [flags_to_push_ptsd]
    if (loc == 'cc') {
    start_hx('#ptsd_page');}
    if (loc == 'hx') {
        jQuery(function($) {
          $( "#ptsd_in_hx" ).delay(200).slideUp(1000)})};}

    if (loc == 'cc') {
    jQuery(function($) {
     $('#ptsd_display').fadeOut(500, function() {
     $(this).text(ptsd_questions[ptsd_count]).fadeIn(500);
   })});}

   if (loc == 'hx') {
   jQuery(function($) {
    $('#abuse_survery_questions_hx').fadeOut(500, function() {
    $(this).text(ptsd_questions[ptsd_count]).fadeIn(500);
  })});}
   ptsd_count ++
  };

//back button for ptsd
  function ptsd_back(loc) {
    if (ptsd_count > 0) {
    if (last_an == 1) {
  flags_to_push_ptsd.splice(-1,1);
  ptsd_total --;}
  if (loc == 'cc') {
  jQuery(function($) {
    $('#ptsd_display').fadeOut(500, function() {
      $(this).text(ptsd_questions[ptsd_count]).fadeIn(500);})})}
      else {
        jQuery(function($) {
          $('#abuse_survery_questions_hx').fadeOut(500, function() {
            $(this).text(ptsd_questions[ptsd_count]).fadeIn(500);})})}}}
////////////////////END OF PTSD

///////////////Start Anxiety
var anxiety_total = 0;
var flags_to_push_anxiety = [];
var anxiety_count = 0
var anxiety_questions = [
  'Feeling nervous, anxious, or on edge',
  'Not being able to stop or control worrying.',
  'Worrying too much about different things.',
  'Trouble relaxing.',
  'Being so restless that it\'s hard to sit still.',
  'Becoming easily annoyed or irritable.',
  'Feeling afraid as if something awful might happen.',];
function anxiety_answer(ans, num) {
Window.numvar = num

if (anxiety_count == 0) {
    jQuery(function($) {
        $("#back_anxiety").toggle(750);})}
if (anxiety_count > 0) {
            jQuery(function($) {
                $("#back_anxiety").toggle(750);})}
  
  
if (num == 1) {
  anx_score = 'several days'};
  if (num == 2) {
    anx_score = 'more than half the days'};
    if (num == 3) {
      anx_score = 'nearly everyday'};


  if(anxiety_count == 0) {
      if (!(ans == 'Not at all')) {
    anxiety_total += num;
    last_an = 1
    flags_to_push_anxiety.push('Not being able to stop or control worrying --\ ' + anx_score);} else {last_an = 0}}
  if(anxiety_count == 1) {
      if (!(ans == 'Not at all')) {
    anxiety_total += num;
    last_an = 1
    flags_to_push_anxiety.push('Not being able to stop or control worrying --\ ' + anx_score);} else {last_an = 0}}
  if(anxiety_count == 2) {
      if (!(ans == 'Not at all')) {
    anxiety_total += num;
    last_an = 1
    flags_to_push_anxiety.push('Worrying too much about different things --\ ' + anx_score);} else {last_an = 0}}
  if(anxiety_count == 3) {
      if (!(ans == 'Not at all')) {
    anxiety_total += num;
    last_an = 1
    flags_to_push_anxiety.push('Having trouble relaxing --\ ' + anx_score);} else {last_an = 0}}
  if(anxiety_count == 4) {
      if (!(ans == 'Not at all')) {
    anxiety_total += num;
    last_an = 1
    flags_to_push_anxiety.push('Being so restless that it\'s hard to sit still --\ ' + anx_score);} else {last_an = 0}}
  if(anxiety_count == 5) {
      if (!(ans == 'Not at all')) {
    anxiety_total += num;
    last_an = 1
    flags_to_push_anxiety.push('Becoming easily annoyed or irritable --\ ' + anx_score);} else {last_an = 0}}
  if(anxiety_count == 6) {
      if (!(ans == 'Not at all')) {
    anxiety_total += num;
    last_an = 1
    flags_to_push_anxiety.push('Feeling afraid as if something awful might happen --\ ' + anx_score)} else {last_an = 0};
    data.Anxiety = [anxiety_total];
    data.Anxiety_Flags = [flags_to_push_anxiety]
    open_panic()
  };

    jQuery(function($) {
     $('#anxiety_display').fadeOut(500, function() {
     $(this).text(anxiety_questions[anxiety_count]).fadeIn(500);
   })});
   anxiety_count ++
  };

//back button for anxiety
  function anxiety_back() {
    if (anxiety_count > 0) {
    if (last_an == 1) {
  flags_to_push_anxiety.splice(-1,1);
  anxiety_count --};
  anxiety_total = anxiety_total - Window.numvar;
  jQuery(function($) {
    $('#anxiety_display').fadeOut(500, function() {
      $(this).text(anxiety_questions[anxiety_count]).fadeIn(500);})})}}
  /////END OF Anxiety

///Start Panic
var panic_total = 0;
var panic_count = 0;
var flags_to_push_panic = []
var panic_questions = [
  'felt moments of sudden terror, fear or fright, sometimes out of the blue (i.e., a panic attack)',
  'felt anxious, worried, or nervous about having more panic attacks',
  'had thoughts of losing control, dying, going crazy, or other bad things happening because of panic attacks',
  'felt a racing heart, sweaty, trouble breathing, faint, or shaky',
  'felt tense muscles, felt on edge or restless, or had trouble relaxing or trouble sleeping',
'avoided, or did not approach or enter, situations in which panic attacks might occur',
'left situations early, or participated only minimally, because of panic attacks',
'spent a lot of time preparing for, or procrastinating about (putting off), situations in which panic attacks might occur',
'distracted myself to avoid thinking about panic attacks',
'needed help to cope with panic attacks (e.g., alcohol or medication, superstitious objects, other people',];
function panic_answer(num) {
Window.numvar = num
    if (num == 1) {
      pnc_score = 'occasionally'};
      if (num == 2) {
        pnc_score = 'half of the time'};
        if (num == 3) {
          pnc_score = 'most of the time'};
          if (num == 4) {
            pnc_score = 'all of the time'};
  
if (panic_count == 0) {
    jQuery(function($) {
        $("#back_panic").toggle(750);})}
if (panic_count > 0) {
            jQuery(function($) {
                $("#back_panic").toggle(750);})}

  if(panic_count == 0) {
      if (num > 0) {
        last_an = 1;
    panic_total += num;
    flags_to_push_panic.push('Felt moments of sudden terror, fear or fright, sometimes out of the blue (i.e., a panic attack) --\ ' + pnc_score);
  } else {last_an = 0}};
  if(panic_count == 1) {
      if (num > 0) {
        last_an = 1;
    panic_total += num;
    flags_to_push_panic.push('Felt anxious, worried, or nervous about having more panic attacks --\ ' + pnc_score);
  } else {last_an = 0}};
  if(panic_count == 2) {
      if (num > 0) {
        last_an = 1;
    panic_total += num;
    flags_to_push_panic.push('Had thoughts of losing control, dying, going crazy, or other bad things happening because of panic attacks --\ ' + pnc_score);
  } else {last_an = 0}};
  if(panic_count == 3) {
      if (num > 0) {
        last_an = 1;
    panic_total += num;
    flags_to_push_panic.push('Felt a racing heart, sweaty, trouble breathing, faint, or shaky --\ ' + pnc_score);
  } else {last_an = 0}};
  if(panic_count == 4) {
      if (num > 0) {
        last_an = 1;
    panic_total += num;
    flags_to_push_panic.push('Felt tense muscles, felt on edge or restless, or had trouble relaxing or trouble sleeping --\ ' + pnc_score);
  } else {last_an = 0}};
  if(panic_count == 5) {
      if (num > 0) {
        last_an = 1;
    panic_total += num;
    flags_to_push_panic.push('Avoided, or did not approach or enter, situations in which panic attacks might occur --\ ' + pnc_score);
  } else {last_an = 0}};
  if(panic_count == 6) {
      if (num > 0) {
        last_an = 1;
    panic_total += num;
    flags_to_push_panic.push('Left situations early, or participated only minimally, because of panic attacks --\ ' + pnc_score);
  } else {last_an = 0}};
  if(panic_count == 7) {
      if (num > 0) {
        last_an = 1;
    panic_total += num;
    flags_to_push_panic.push('Spent a lot of time preparing for, or procrastinating about (putting off), situations in which panic attacks might occur --\ ' + pnc_score);
  } else {last_an = 0}};
  if(panic_count == 8) {
      if (num > 0) {
        last_an = 1;
    panic_total += num;
    flags_to_push_panic.push('Distracted myself to avoid thinking about panic attacks --\ ' + pnc_score);
  } else {last_an = 0}};
  if(panic_count == 9) {
      if (num > 0) {
        last_an = 1;
    panic_total += num;
    flags_to_push_panic.push('Needed help to cope with panic attacks (e.g., alcohol or medication, superstitious objects, other people --\ ' + pnc_score);};
    panic_calc = Math.round(panic_total / 10)
    data.Panic = [panic_calc];
    start_hx('#anxiety_page');
  data.Panic_Flags = [flags_to_push_panic];}

    jQuery(function($) {
     $('#panic_display').fadeOut(500, function() {
     $(this).text(panic_questions[panic_count]).fadeIn(500);
   })});
   panic_count ++
  };
//back button for panic
  function panic_back() {
      if (anxiety_count > 0) {
    if (last_an == 1) {
  flags_to_push_panic.splice(-1,1);
  panic_total = panic_total - Window.numvar}
  panic_count --;
  jQuery(function($) {
   $('#panic_display').fadeOut(500, function() {
   $(this).text(panic_questions[panic_count]).fadeIn(500);})})}}
  /////END OF Panic

//////////////END OF QUESTIONAIRES///////////////////////


    /////function for callbacks and api to get rxcui and med interactions
    function get_rxcuis () {
      var med_list_url = [];
      var rxcui = []
      var med_list = data.MedsToCheck;
      ///going to get rxcui for drugs
data.MedsToCheck.forEach(function(element) {med_list_url.push(element)});
      med_list_url.forEach(function(element) {
        if (typeof url_for_rxui === 'undefined') {
          url_for_rxui = [("https://rxnav.nlm.nih.gov/REST/approximateTerm.json?term=" + element + "&maxEntries=1&option=0")]}
        else {
          url_for_rxui.push(("https://rxnav.nlm.nih.gov/REST/approximateTerm.json?term=" + element + "&maxEntries=1&option=0"))}});

    url_for_rxui.forEach(function(element){
          $(document).ready(function() {
            $.ajax({
                url: element,
                type: 'GET',
                success: function(returned){
                    if (!(returned.approximateGroup.candidate[0].rxcui == undefined)) {
                  rxcui.push(returned.approximateGroup.candidate[0].rxcui);
                  send_rxcui_list(rxcui, med_list)}
                else {send_rxcui_list(rxcui, med_list)}}
            });})})}


    function send_rxcui_list(rxcui, med_list) {
      if (rxcui.length == med_list.length) {
    ///adding drug rxcui to make a url and checking interactions
    rxcui_list = 'https://rxnav.nlm.nih.gov/REST/interaction/list.json?rxcuis=';
    list_url = rxcui.join('+')
    var med_interactions = []
    data.Med_Interactions = []
    rxcui_url_inter = rxcui_list + list_url
          $(document).ready(function() {
            $.ajax({
                url: rxcui_url_inter,
                type: 'GET',
                ///grabbing just the description of each med interaction
                success: function(returned){
                  console.log(returned)

                  for (var x = 0; x < returned.fullInteractionTypeGroup[0].fullInteractionType.length; x++) {
                    for (var y = 0; y < returned.fullInteractionTypeGroup[0].fullInteractionType[x].interactionPair.length; y++) {
                      data.Med_Interactions.push(returned.fullInteractionTypeGroup[0].fullInteractionType[x].interactionPair[y].description);
                    console.log(returned.fullInteractionTypeGroup[0].fullInteractionType[x].interactionPair[y].description);
                    }}
                  print_data()
            }});})}}

///necessary vars for finished
  var listed_num = []
  var ph9q_total = 0;
  var surg_checked = [];

///called when sumbitted-- check to see if med interactions available to be checked, if not moves on
function finished() {
  var med_list = data.MedsToCheck;
  if (!(med_list == undefined)) {
if (med_list.length > 1) {
get_rxcuis()}}
else {
  print_data()
}}

///called after med interactions or if none, creates the note
function print_data() {
if (!('Age' in data)) {
  var age = $("#age").val();
  data.Age = [age];}

var pt_employment = $("#employment").find('option:selected').attr('id');
data.Employment = [pt_employment];

var pt_school = $("#school").find('option:selected').attr('id');
data.School = [pt_school];

var pt_relation = $("#pt_relationship").find('option:selected').attr('id');
if (pt_relation == 'unmarried') {
  var pt_to_relate = "an " + pt_relation}
  else {pt_to_relate = "a " + pt_relation}
data.Relationship = [pt_to_relate];

  surg_checked = $('input:checkbox:checked.surg_checkbox').map(function(){
    return this.value; }).get().join(", ");
    var list_surgeries = $("#list_surgeries").val();
    surg_checked = surg_checked + ",\ " + list_surgeries;

  conds_checked = $('input:checkbox:checked.cond_checkbox').map(function(){
    return this.value; }).get().join(", ");
        var list_medical_cond = $("#list_medical_cond").val();
    conds_checked = conds_checked + ",\ " + list_medical_cond;

      if (!('Medical_Condition' in data)) {
        data.Medical_Condition = [conds_checked]}

      else if (('Medications' in data)) {
        data.Medical_Condition.push(conds_checked)};

      if (!('Surgical_History' in data)) {
        data.Surgical_History = [surg_checked]}

      else if (('Surgical_History' in data)) {
        data.Surgical_History.push(surg_checked)};

  var smoke_type = $("#smoke_type").find('option:selected').attr('id');
  var smoke_freq = $("#nic_freq").val();
  var smoke_dur = $("#nic_duration").val();
 var smoke = ",\ smokes\ " + smoke_type + "<br>" + smoke_freq + "\ pack/puff per day\ " + "for\ " + smoke_dur + "\ (years)" ;
if (data.Smoker == "Yes") {
  data.Smoker.push(smoke);}

var caf_num = $("#caffeine_num").val();
    data.Caffeine = [caf_num]

var rec_type = $("#rec_type").val();
var rec_freq = $("#rec_freq").val();
var rec = ", uses\ " + rec_type + "\ " + rec_freq
if (data.RecDrugs == "Yes") {
data.RecDrugs.push(rec);}

var alcohol_freq = $("#alcohol_freq").val();
var alcohol_use = ",\ " + alcohol_freq + "\ (drinks per week)";
if (data.Alcohol == "Yes") {
data.Alcohol.push(alcohol_use);};

var hosp_times = $("#hosp_times").val();
var recent_hosp = $("#recent_hosp").val();
var hosp_data = "Has\ " + hosp_times + "\ prior psychiatric hospital admit(s), most recently" + "\ \"" + recent_hosp + "\"" ;
if (data.Hospital == "Yes") {
data.Hospital = [hosp_data];}

var what_treatment = $("#what_treatment").val();
var last_treatment = $("#last_treatment").val();
var treatment_push =  "has been previously treated for\ " + "\"" + what_treatment + "\"" + "\ and their last appointment was\ " + "\"" + last_treatment + "\"" ;
if (data.Psych_Care == "Yes") {
data.Psych_Care = [treatment_push];};

if ($('#no_allergy').is(":checked")) {
  data.MedAllergy = ['Denies']
  data.AllergyToCheck = ['Denies']};

if ($('#no_meds').is(":checked")) {
  data.Medications = ['Denies']
  data.MedsToCheck = ['Denies']};

if ($('#no_cond').is(":checked")) {
  data.Medical_Condition = ['Denies']};

if ($('#no_surg').is(":checked")) {
  data.Surgical_History = ['Denies']};

///adding all the final data to a note
  jQuery(function($) {
      $("#history").slideUp(750);
      $( "#note" ).delay(1000).slideDown(750);})

    jQuery(document).ready(function(){

      $("#cc").append(data.CC);
      $("#1relationship").append(data.Relationship);
      $("#1age").append(data.Age);
      $("#1sex").append(data.Sex);
      $("#1chiefc").append(data.Chief_Complaint);

      med_data = data.Medications
      data.Medications.forEach(function(element) {
      $("#1medications").append("   " + element + "<br/>");})

      data.MedAllergy.forEach(function(element) {
      $("#1allergies").append(element + " , ");})

      $("#1medical_cond").append(data.Medical_Condition);
      $("#1surgeries").append(data.Surgical_History);

        var emp_b = data.Employment;
        var emp_a = emp_b.toString().replace("_", "\ ")
      $("#1employment").append(emp_a);


        var edu_b = data.School;
        var edu_a = edu_b.toString().replace("_", "\ ")
      $("#1education").append(data.School);
      $("#1smoke").append(data.Smoker);
      $("#1drink").append(data.Alcohol);
      $("#1rec").append(data.RecDrugs);
      $("#1psych").append(data.Psych_Care);
      $("#1hosp").append(data.Hospital);
      $("#1legal").append(data.Legal);
      $("#1abuse").append(data.Abuse_Or_Trauma);
      $("#1safe").append(data.Safe);
      $("#1suicide").append(data.Suicide);
      $("#1family").append("\ " + data.Family_History);
      $("#caffeine_num_entered").append( data.Caffeine);

        if (data.Sex == "female") {
  jQuery(document).ready(function(){
      $( "#preg_disp" ).slideDown(750);

      $("#chance_p_q").append(data.PregnantChance);
      $("#cont_q").append(data.Contraception);
      $("#sex_act_q").append(data.SexuallyActive);
      $("#cur_preg_q").append(data.Pregnant);})};

////putting all the questionaire data into a neat format, flagging all the positive answers for each questionaire
      if (data.Chief_Complaint == "Mood issues") {
            jQuery(document).ready(function(){
      var ph9q_data = data.ph9q_Flags;
      var diff = data.ph9q_diff
      var digfast_data = data.DIGFAST_Flags;
      var ph9q_list = [];
            ph9q_data.forEach(function(element) {
              ph9q_list.push(element)});
          var digfast_list = [];
                digfast_data.forEach(function(element) {
                  digfast_list.push(element)});

                  $("#post_questions").append("<hr><strong>Patient Health Questionnaire-9</strong><br>Patient scored a <strong>" + data.ph9q_Total + "</strong>"
                  + " and agrees that in the last two weeks the following symptoms that have made their life\ " + diff + ": <br>");
                       $("#post_questions").append("<br>");
                  ph9q_list[0].forEach(function(element) {
                    $("#post_questions").append("<li>" + element + "</li>")});
                    $("#post_questions").append("<br><em>Patient Health Questionnaire-9 (Depression) KEY:<br>0-4	-- Minimal or none,	Monitor; may not require treatment<br>5-9 --	Mild,	Use clinical judgment (symptom duration, functional impairment) to determine necessity of treatment<br>10-14	-- Moderate,  Use clinical judgment (symptom duration, functional impairment) to determine necessity of treatment<br>15-19	-- Moderately severe,	Warrants active treatment with psychotherapy, medications, or combination<br>20-27	-- Severe<br>(88% sensitive and 85% specific for Depression if score 10 or above</em>");
///sensitivity 88% and specificity 85% -- (Levis 2019)
/// **Cutoff 10 points**
///0-4	Minimal or none	Monitor; may not require treatment
//5-9	Mild	Use clinical judgment (symptom duration, functional impairment) to determine necessity of treatment
//10-14	Moderate  Use clinical judgment (symptom duration, functional impairment) to determine necessity of treatment
//15-19	Moderately severe	Warrants active treatment with psychotherapy, medications, or combination
//20-27	Severe
                  $("#post_questions").append("<hr><strong>Mood Disorder Questionnaire</strong><br>Patient scored a <strong>" + data.DIGFAST + "</strong>"
                  + " and has had the following symptoms in the past: <br>");
                $("#post_questions").append("<br>");
                  digfast_list[0].forEach(function(element) {
                  $("#post_questions").append("<li>" + element + "</li>");})
                    $("#post_questions").append(data.DIGFAST_Same_Time);
                  $("#post_questions").append("<br><em>Mood Disorder Questionnaire KEY:<br>A score of 7 and above is 73% sensitive and a 90% specific for a mood disorder</em>");
                })}
///Yes to 7+ AND Yes to question 2 AND moderate/serious problem in question 3
///https://www.ohsu.edu/sites/default/files/2019-06/cms-quality-bipolar_disorder_mdq_screener.pdf
///0.73 sensitivity and a 0.90 specificity

      if (data.Chief_Complaint == "Anxiety") {
          jQuery(document).ready(function(){
      var gad_data = data.Anxiety_Flags
      var gad_list = [];
      gad_data.forEach(function(element) {
        gad_list.push(element)});
        var panic_data = data.Panic_Flags
        var panic_list = [];
        panic_data.forEach(function(element) {
          panic_list.push(element)});

          $("#post_questions").append("<hr><strong>General Anxiety Disorder-7 scale</strong><br>Patient scored a <strong>" + data.Anxiety + "</strong>"
          + " and in the last two weeks agrees to: <br>");
                     $("#post_questions").append("<br>");
          gad_list[0].forEach(function(element) {
          $("#post_questions").append("<li>" + element + "</li>")});
            $("#post_questions").append("<br><em>General Anxiety Disorder-7 KEY:<br>5-9	-- Mild, Monitor<br>10*-14	-- Moderate,	Possible clinically significant condition<br>>15	-- Severe, Active treatment probably warranted<br>*For Panic Disorder, Social Phobia, & PTSD, cutoff score of 8 may be used for optimal sensitivity/specificity</em>");
///5-9	Mild	-- Monitor
///10*-14	-- Moderate	Possible clinically significant condition
///>15	Severe	-- Active treatment probably warranted
///*For Panic Disorder, Social Phobia, & PTSD, cutoff score of 8 may be used for optimal sensitivity/specificity

          $("#post_questions").append("<hr><strong>Severity Measure for Panic Disorder—Adult</strong><br>Patient scored a <strong>" + data.Panic + "</strong>"
          + " and agreed to the following statement(s) regarding the last 7 days: <br>");
                     $("#post_questions").append("<br>");
          panic_list[0].forEach(function(element) {
          $("#post_questions").append("<li>" + element + "</li>");})
          $("#post_questions").append("<br><em>Severity Measure for Panic Disorder—Adult KEY:<br>0 -- None<br>1 -- Mild<br>2 -- Moderate<br>3 -- Severe<br>4 -- Extreme</em><br>");})}
///  per file:///C:/Users/UW2001480/Downloads/APA_DSM5_Severity-Measure-For-Panic-Disorder-Adult.pdf
///   average rounded to the nearest whole number:
///   0-none
///   1-mild
///   2-moderate
///   3-severe
///   4- extreme

      if (data.Chief_Complaint == "Memory issues") {
        jQuery(document).ready(function(){
      var mem_data = data.Memory_Depression_Flags
      var mem_list = [];
      mem_data.forEach(function(element) {
        mem_list.push(element)});
        $("#post_questions").append("<hr><strong>Geriatric Depression Scale</strong><br>Patient scored a <strong>" + data.Memory_Depression + "</strong>"
       + "<br> and: <br>");
                   $("#post_questions").append("<br>");
      mem_list[0].forEach(function(element) {
        $("#post_questions").append("<li>" + element + "</li>")});
        $("#post_questions").append("<br><em>Geriatric Depression Scale KEY:<br>0-4 -- Considered normal<br>5-8 -- Indicate mild depression<br>9-11 -- Indicate moderate depression<br>12-15 -- Indicate severe depression<br>92% sensitivity and a 89% specificity when evaluated against diagnostic criteria</em>");})}

/// 92% sensitivity and a 89% specificity when evaluated against diagnostic criteria.
///Scores of 0-4 are considered normal, depending on age, education, and complaints;
///5-8 indicate mild depression; 9-11 indicate moderate depression; and 12-15 indicate severe depression.
//<!--The end of 'memory' Chief complaint option. RECCOMENDATIONS INCLUDE LABS AND A NON CONTRAST HEAD CT OR MRI. Geriatric depression score reccomended.
///per: Adelman, A. M., & Daly, M. P. (2005). Initial evaluation of the patient with suspected dementia. American family physician, 71(9), 1745–1750.-->
        if (data.Abuse_Or_Trauma == "a past history of abuse/lingering trauma") {
              jQuery(document).ready(function() {
        var ptsd_data = data.PTSD_Flags
        var ptsd_list = [];
        ptsd_data.forEach(function(element) {
          ptsd_list.push(element)});
          $("#post_questions").append("<hr><strong>Primary Care PTSD Screen for DSM-5</strong><br>Patient scored a <strong>" + data.PTSD + "</strong>"
          + "\ and marked that in the last month they: <br>");
                         $("#post_questions").append("<br>");
      ptsd_list[0].forEach(function(element) {
        $("#post_questions").append("<li>" + element + "</li>")});
          $("#post_questions").append("<br><em>Primary Care PTSD Screen for DSM-5 KEY:<br>A score of 3 or more is 93% sensitive for PTSD</em><br>")})}
        else if (data.Chief_Complaint == "PTSD") {
          jQuery(document).ready(function(){
    var ptsd_data = data.PTSD_Flags
    var ptsd_list = [];
    ptsd_data.forEach(function(element) {
      ptsd_list.push(element)});
      $("#post_questions").append("<hr><strong>Primary Care PTSD Screen for DSM-5</strong><br>Patient scored a <strong>" + data.PTSD + "</strong>"
      + "\ and marked that in the last month they: <br>");
                     $("#post_questions").append("<br>");
  ptsd_list[0].forEach(function(element) {
    $("#post_questions").append("<li>" + element + "</li>")});
      $("#post_questions").append("<br><em>Primary Care PTSD Screen for DSM-5 KEY:<br>A score of 3 or more is 93% sensitive for PTSD</em><br>")})};
///3+ for most is indicitive of a diagnosis 93% sensitive
///***  score of 3 or more is trigger for ptsd per https://www.ptsd.va.gov/professional/assessment/documents/pc-ptsd5-screen.pdf  ****

///get uniques only
function getUniqueValues(array) {
return array.map(function(item) { return item; })
.filter(function (item, index, self){ return self.indexOf(item) === index; });} // distinc

var med_interact = data.Med_Interactions;
var unique_interact = [];
unique_interact = getUniqueValues(med_interact);
///unique_interact = [...new Set(med_interact)];
if (unique_interact.length > 0) {
    jQuery(document).ready(function(){
      $("#med_interactions").append("<strong><h4>Important Medication Interactions to Consider:<h4></strong><br>");
  unique_interact.forEach(function(element) {
    $("#med_interactions").append("<li><strong>" + element + "</strong></li>")})})}
});
send_to_php();
}; ////end of creating note 'finished'
