var data = {};

// data.key1 = ['val1'];create key-value
// data.key1.push('val2');append value
//
// console.log(data.key1);




function new_pt() {
    jQuery(function($) {
        $("#new_old_what").slideUp(750);
        $( "#if_new_pt" ).delay(1000).slideDown(750);})
        data.Patient_Type = ['New Patient'];
      };

function old_pt() {
    jQuery(function($) {
        $("#new_old_what").slideUp(750);
        $( "#if_old_pt" ).delay(1000).slideDown(750);})
        data.Patient_Type = ['Returning Patient'];
      };

function new_or_old_pt() {
    jQuery(function($) {
        $("#welcome_page").slideUp(750);
        $( "#new_old_what" ).delay(1000).slideDown(750);})
      };

function mood() {
    jQuery(function($) {
        $("#if_new_pt").slideUp(750);
        $( "#mood_page" ).delay(1000).slideDown(750);})
        data.Cheif_Complaint = ['Mood issues'];
      };

function memory() {
    jQuery(function($) {
        $("#if_new_pt").slideUp(750);
        $( "#memory_page" ).delay(1000).slideDown(750);})
        data.Cheif_Complaint = ['Memory issues'];
      };

function ptsd() {
    jQuery(function($) {
        $("#if_new_pt").slideUp(750);
        $( "#ptsd_page" ).delay(1000).slideDown(750);})
        data.Cheif_Complaint = ['PTSD'];
      };

function anxiety() {
    jQuery(function($) {
        $("#if_new_pt").slideUp(750);
        $( "#anxiety_page" ).delay(1000).slideDown(750);})
        data.Cheif_Complaint = ['Anxiety'];
      };

function somethingelse() {
    jQuery(function($) {
        $("#if_new_pt").slideUp(750);
        $( "#somethingelse_page" ).delay(1000).slideDown(750);})
        data.Cheif_Complaint = ['Something else'];
      };





$(document).ready(function() {

  $('input[type="button"]').click(function(){
  $(this).css('color','#3299e9');
    });




  $("#psych_hosp_yes").click(function(event) {
    jQuery(function($) {
      $( "#psych_hosp_box" ).delay(200).slideDown(1000)})});


  $("#psych_hosp_no").click(function(event) {
    jQuery(function($) {
      $( "#psych_hosp_box" ).delay(200).slideUp(1000)})});



      $("#yes_mental_care").click(function(event) {
        jQuery(function($) {
          $( "#psych_care_box" ).delay(200).slideDown(1000)})});


      $("#no_mental_care").click(function(event) {
        jQuery(function($) {
          $( "#psych_care_box" ).delay(200).slideUp(1000)})});




  $("#yes_family_hx").click(function(event) {
    jQuery(function($) {
      $( "#family_hx_box" ).delay(200).slideDown(1000)})});


  $("#no_family_hx").click(function(event) {
    jQuery(function($) {
      $( "#family_hx_box" ).delay(200).slideUp(1000)})});




      $("#no_prego").click(function(event) {
        jQuery(function($) {
          $( "#prego_box" ).delay(200).slideDown(1000)
          $( "#prego_box_2" ).delay(200).slideDown(1000)
        })});


      $("#yes_prego").click(function(event) {
        jQuery(function($) {
          $( "#prego_box" ).delay(200).slideUp(1000)})});




  $("#yes_sex").click(function(event) {
    jQuery(function($) {
      $( "#sex_active_box" ).delay(200).slideDown(1000)})});


  $("#no_sex").click(function(event) {
    jQuery(function($) {
      $( "#sex_active_box" ).delay(200).slideUp(1000)})});



          $("#yes_nic").click(function(event) {
            jQuery(function($) {
              $( "#nic_box" ).delay(200).slideDown(1000)})});


          $("#no_nic").click(function(event) {
            jQuery(function($) {
              $( "#nic_box" ).delay(200).slideUp(1000)})});


    $("#yes_alcohol").click(function(event) {
      jQuery(function($) {
        $( "#alcohol_box" ).delay(200).slideDown(1000)})});


    $("#no_alcohol").click(function(event) {
      jQuery(function($) {
        $( "#alcohol_box" ).delay(200).slideUp(1000)})});


            $("#yes_rec").click(function(event) {
              jQuery(function($) {
                $( "#rec_box" ).delay(200).slideDown(1000)})});


            $("#no_rec").click(function(event) {
              jQuery(function($) {
                $( "#rec_box" ).delay(200).slideUp(1000)})});





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







        $('#yes_legal').click(function(){
        $('#no_legal').css('color','white');
          data.Legal = ['Yes']
          });

        $('#no_legal').click(function(){
        $('#yes_legal').css('color','white');
          data.Legal = ['No']
          });

            $('#yes_abuse').click(function(){
            $('#no_abuse').css('color','white');
              data.Abuse_Or_Trauma = ['Yes']
              });

            $('#no_abuse').click(function(){
            $('#yes_abuse').css('color','white');
              data.Abuse_Or_Trauma = ['Yes']
          });

        $('#no_safe').click(function(){
        $('#yes_safe').css('color','white');
          data.Safe = ['No']
          });

        $('#yes_safe').click(function(){
        $('#no_safe').css('color','white');
          data.Safe = ['Yes']
          });

            $('#no_suicide').click(function(){
            $('#yes_suicide').css('color','white');
              data.Suicide = ['No']
              });

            $('#yes_suicide').click(function(){
            $('#no_suicide').css('color','white');
            data.Suicide = ['Yes']
          });

      $('#yes_chance').click(function(){
      $('#no_chance').css('color','white');
        data.PregnantChance = ['Yes']
        });

      $('#no_chance').click(function(){
      $('#yes_chance').css('color','white');
        data.PregnantChance = ['No']
        });

            $('#no_sex_contra').click(function(){
            $('#yes_sex_contra').css('color','white');
              data.Contraception = ['No']
              });

            $('#yes_sex_contra').click(function(){
            $('#no_sex_contra').css('color','white');
              data.Contraception = ['Yes']
              });

      $('#no_nic').click(function(){
      $('#yes_nic').css('color','white');
      data.Smoker = ['Denies'];
        });

      $('#yes_nic').click(function(){
      $('#no_nic').css('color','white');
      data.Smoker = ['Yes'];
        });

            $('#no_alcohol').click(function(){
            $('#yes_alcohol').css('color','white');
            data.Alcohol = ['Denies']
              });

            $('#yes_alcohol').click(function(){
            $('#no_alcohol').css('color','white');
            data.Alcohol = ['Yes']
              });

      $('#no_rec').click(function(){
      $('#yes_rec').css('color','white');
      data.RecDrugs = ['Denies'];
        });

      $('#yes_rec').click(function(){
      $('#no_rec').css('color','white');
      data.RecDrugs = ['Yes']
        });

            $('#Male').click(function(){
            $('#Female').css('color','white');
            data.Sex = ['Male'];
            jQuery(function($) {
              $( "#if_female" ).delay(200).slideUp(1000)});
              });

            $('#Female').click(function(){
            $('#Male').css('color','white');
            data.Sex = ['Female']
            jQuery(function($) {
              $( "#if_female" ).delay(200).slideDown(1000)});
              });

      $('#psych_hosp_yes').click(function(){
      $('#psych_hosp_no').css('color','white');
      data.Hospital = ['Yes']
        });

      $('#psych_hosp_no').click(function(){
      $('#psych_hosp_yes').css('color','white');
        data.Hospital = ['Denies']
        });

            $('#no_mental_care').click(function(){
            $('#yes_mental_care').css('color','white');
                  data.Psych_Care = ['Denies']
              });

            $('#yes_mental_care').click(function(){
            $('#no_mental_care').css('color','white');
                  data.Psych_Care = ['Yes']
              });

      $('#no_family_hx').click(function(){
      $('#yes_family_hx').css('color','white');
        });

      $('#yes_family_hx').click(function(){
      $('#no_family_hx').css('color','white');
        });

            $('#yes_sex').click(function(){
            $('#no_sex').css('color','white');
              data.SexuallyActive = ['Yes']
              });

            $('#no_sex').click(function(){
            $('#yes_sex').css('color','white');
              data.SexuallyActive = ['No']
              });

      $('#yes_prego').click(function(){
      $('#no_prego').css('color','white');
      data.Pregnant = ['Yes']
        });

      $('#no_prego').click(function(){
      $('#yes_prego').css('color','white');
      data.Pregnant = ['Denies']
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
              data.Family_History = [family_to_push]}

            else if (('Family_History' in data)) {
              data.Family_History.push(family_to_push)};
          });





})

var ph9q_count = 0;
var ph9q_questions = [
'Little interest or pleasure in doing things',
'Feeling down, depressed, or hopeless',
'Trouble falling/staying asleep, sleeping too much',
'Feeling tired or having little energy',
"Poor appetite or overeating",
"Feeling bad about yourself or that you are a failure or have let yourself or your family down",
"Trouble concentrating on things, such as reading the newspaper or watching television",
"Moving or speaking so slowly that other people could have noticed. Or the opposite; being so fidgety or restless that you have been moving around a lot more than usual",
"Thoughts that you would be better off dead or of hurting yourself in some way"];
function ph9q_but(ph9q_ans) {

if (!('ph9q' in data)) {
  data.ph9q = [ph9q_ans]}

else if (('ph9q' in data)) {
  data.ph9q.push(ph9q_ans)};

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

  else if (ph9q_count > 8) {
    start_hx()}
  else {
       jQuery(function($) {
         $('#ph9q_display').fadeOut(500, function() {
               $(this).text(ph9q_questions[ph9q_count]).fadeIn(500);
             })})};
     ph9q_count ++;};


function start_hx() {
  jQuery(function($) {
      $("#mood_page").slideUp(750);
      $( "#history" ).delay(1000).slideDown(750);})
    };

function hx_2() {
  jQuery(function($) {
      $("#history").slideUp(750);
      $( "#history_2" ).delay(1000).slideDown(750);})
    };


///necessary vars
  var listed_num = []
  var ph9q_total = 0;
  var surg_checked = [];

function finished() {




/////////////This is calc total ph9q score
  $.each(data, function(key, value) {
    if (key == 'ph9q') {
        listed_num += (value)}});

array_num = listed_num.split(',');

for (var i = 0; i < array_num.length; i++) {
  array_numb = parseInt(array_num[i], 10)
  ph9q_total += array_numb};
data.ph9q_Total = [ph9q_total];
////////////////

var age = $("#age").val();
data.Age = [age];

var pt_employment = $("#employment").find('option:selected').attr('id');
data.Employment = [pt_employment];

var pt_school = $("#school").find('option:selected').attr('id');
data.School = [pt_school];

var pt_relation = $("#pt_relationship").find('option:selected').attr('id');
data.Relationship = [pt_relation];



  surg_checked = $('input:checkbox:checked.surg_checkbox').map(function(){
    return this.value; }).get().join(", ");
    var list_surgeries = $("#list_surgeries").val();
    surg_checked = surg_checked + ", " + list_surgeries;

  conds_checked = $('input:checkbox:checked.cond_checkbox').map(function(){
    return this.value; }).get().join(", ");
        var list_medical_cond = $("#list_medical_cond").val();
    conds_checked = conds_checked + ", " + list_medical_cond;

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
 var smoke = smoke_type + " " + smoke_freq + " ( packs/pulls/dips per day)" + smoke_dur + " (years)"
  if ("Denies" in data.Smoker) {
       }
  else {
  data.Smoker.push(smoke);
}

var rec_type = $("#rec_type").val();
var rec_freq = $("#rec_freq").val();
var rec = rec_type + " " + rec_freq
if ("Denies" in data.RecDrugs){
    }
else {
data.RecDrugs.push(rec);
}


var alcohol_freq = $("#alcohol_freq").val();
var alcohol_use = alcohol_freq + " drinks per week"
if ("Denies" in data.Alcohol){
    }
else {
data.Alcohol.push(alcohol_use);}



var hosp_times = $("#hosp_times").val();
var recent_hosp = $("#recent_hosp").val();
var hosp_data = 'visits: ' + hosp_times + ' most recent: ' + recent_hosp
if ("Denies" in data.Hospital){
    }
else {
data.Hospital.push(hosp_data);}



var what_treatment = $("#what_treatment").val();
var last_treatment = $("#last_treatment").val();
var treatment_push = 'prior treatment for: ' + what_treatment + ' most recent appointment: ' + last_treatment
if ("Denies" in data.Psych_Care){
    }
else {
data.Psych_Care.push(hosp_data);};


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



  jQuery(function($) {
      $("#algorx").slideUp(750);
      $( "#after_submit" ).delay(1000).slideDown(750);})

    jQuery(document).ready(function(){
      jQuery.each(data, function(i, val) {
      $("#after_submit").append(i + " => " + val + "<br/>");
  })});








  };
