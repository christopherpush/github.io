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
        $( "#if_new_pt" ).delay(1000).slideDown(750);})
        data.Patient_Type = ['Returning Patient'];
      };

function new_or_old_pt() {
    jQuery(function($) {
        $("#welcome_page").slideUp(750);
        $( "#new_old_what" ).delay(1000).slideDown(750);})
      };

function mood() {
    jQuery(function($) {
      var cc_var = $("#something_else_cc_answer").val();
      data.CC = [cc_var];
      data.Survey = ['PHQ-9']
        $("#somethingelse_page").slideUp(750);
        $( "#mood_page" ).delay(1000).slideDown(750);})
        data.Cheif_Complaint = ['Mood issues'];
      };

function memory() {
    jQuery(function($) {
      var cc_var = $("#something_else_cc_answer").val();
      data.CC = [cc_var];
        $("#somethingelse_page").slideUp(750);
        $( "#memory_page" ).delay(1000).slideDown(750);})
        data.Cheif_Complaint = ['Memory issues'];
      };

function ptsd() {
    jQuery(function($) {
      var cc_var = $("#something_else_cc_answer").val();
      data.CC = [cc_var];
        $("#somethingelse_page").slideUp(750);
        $( "#ptsd_page" ).delay(1000).slideDown(750);})
        data.Cheif_Complaint = ['PTSD'];
      };

function anxiety() {
    jQuery(function($) {
      var cc_var = $("#something_else_cc_answer").val();
      data.CC = [cc_var];
        $("#somethingelse_page").slideUp(750);
        $( "#anxiety_page" ).delay(1000).slideDown(750);})
        data.Cheif_Complaint = ['Anxiety'];
      };

function somethingelse(site) {
    jQuery(function($) {
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



  function age_pre() {
    var age = $("#age_pre").val();
    data.Age = [age];
    if (age > 59) {
      jQuery(function($) {
          $("#age_bar").slideUp(750);
          $( "#over_65" ).delay(1000).slideDown(750);})
        }
    else {
      jQuery(function($) {
          $("#memory_page").slideUp(750);
          $( "#history" ).delay(1000).slideDown(750);})
    }};


              function else_hx() {
                  jQuery(function($) {
                    var cc_var = $("#something_else_cc_answer").val();
                      $("#somethingelse_page").slideUp(750);
                      $( "#history" ).delay(1000).slideDown(750);
                      data.CC = [cc_var];
                    })};



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
          data.Legal = ['has past/present legal troubles']
          });

        $('#no_legal').click(function(){
        $('#yes_legal').css('color','white');
          data.Legal = ['denies any past or present legal hisotry']
          });

            $('#yes_abuse').click(function(){
            $('#no_abuse').css('color','white');
              data.Abuse_Or_Trauma = ['a past history of abuse/lingering trauma']
              });

            $('#no_abuse').click(function(){
            $('#yes_abuse').css('color','white');
              data.Abuse_Or_Trauma = ['no history of abuse or lingering trauma']
          });

        $('#no_safe').click(function(){
        $('#yes_safe').css('color','white');
          data.Safe = ['reports not feeling safe at home']
          });

        $('#yes_safe').click(function(){
        $('#no_safe').css('color','white');
          data.Safe = ['reports feeling safe at home']
          });

            $('#no_suicide').click(function(){
            $('#yes_suicide').css('color','white');
              data.Suicide = ['Denies seriously considering or past suicide attempts']
              });

            $('#yes_suicide').click(function(){
            $('#no_suicide').css('color','white');
            data.Suicide = ['Agrees to seriously considering/past suicide attempts']
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
            data.Alcohol = ['Denies'];
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
      data.RecDrugs = ['Yes'];
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
      data.Hospital = ['Yes'];
        });

      $('#psych_hosp_no').click(function(){
      $('#psych_hosp_yes').css('color','white');
        data.Hospital = ['Denies any psychiatric hospital admits'];
        });

            $('#no_mental_care').click(function(){
            $('#yes_mental_care').css('color','white');
                  data.Psych_Care = ['Denies previous psychiatric care']
              });

            $('#yes_mental_care').click(function(){
            $('#no_mental_care').css('color','white');
                  data.Psych_Care = ['Yes']
              });

      $('#no_family_hx').click(function(){
      $('#yes_family_hx').css('color','white');
      data.Family_History = ['no family history of mental illness']
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


      $('#1_digfast').click(function(){
      $('#1_digfast').delay(500).css('color','white');
        });

      $('#2_digfast').click(function(){
      $('#2_digfast').delay(500).css('color','white');
        });


      $('#3_digfast').click(function(){
      $('#3_digfast').delay(500).css('color','white');
        });

      $('#4_digfast').click(function(){
      $('#4_digfast').delay(500).css('color','white');
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
              data.Family_History = ["family history of mental illness" + family_to_push]}

            else if (('Family_History' in data)) {
              data.Family_History.push("\ and\ " + family_to_push)};
          });





})



function done_ph9q() {
    jQuery(function($) {
        $("#mood_page").slideUp(750);
        $( "#digfast_page" ).delay(1000).slideDown(750);})
        data.Survey.push('Mood Disorder Questionnaire')
      };

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
     "…spending money got you or your family in trouble?",
    " Think about these last 12 questions-- have several of these ever happened during the same period of time?",
    "How much of a problem did any of these cause you — like being able to work; having family, money, or legal troubles; getting into arguments or fights?",
];
     function digfast_but(digfast_ans, digfast_val) {


if (!('DIGFAST_Depression_Flags' in data)) {
  data.DIGFAST_Flags = []}

if(digfast_count == 0) {
  if (digfast_ans == 0) {
    digfast_total ++;
    flags_to_push.push('felt so good or so hyper that other people thought they were not their normal self or were so hyper that they got into trouble');
  }}
if(digfast_count == 1) {
  if (digfast_ans == 0) {
    digfast_total ++;
    flags_to_push.push('were so irritable that they shouted at people or started fights or arguments');
  }}
if(digfast_count == 2) {
  if (digfast_ans == 0) {
    digfast_total ++;
    flags_to_push.push('felt much more self-confident than usual?');
  }}
if(digfast_count == 3) {
    if (digfast_ans == 0) {
  digfast_total ++;
  flags_to_push.push('got much less sleep than usual and found you didn’t really miss it');
}}
if(digfast_count == 4) {
    if (digfast_ans == 0) {
  digfast_total ++;
  flags_to_push.push('were much more talkative or spoke faster than usual');
}}
if(digfast_count == 5) {
    if (digfast_ans == 0) {
  digfast_total ++;
  flags_to_push.push('thoughts raced through their head or they couldn’t slow their mind down');
}}
if(digfast_count == 6) {
    if (digfast_ans == 0) {
  digfast_total ++;
flags_to_push.push('were so easily distracted by things around them that they had trouble concentrating or staying on track?');
}}
if(digfast_count == 7) {
    if (digfast_ans == 0) {
  digfast_total ++;
  flags_to_push.push('had much more energy than usual');
}}
if(digfast_count == 8) {
    if (digfast_ans == 0) {
  digfast_total ++;
flags_to_push.push(' were much more active or did many more things than usual');
}}
if(digfast_count == 9) {
    if (digfast_ans == 0) {
  digfast_total ++;
  flags_to_push.push('were much more social or outgoing than usual, for example, telephoning friends in the middle of the night');
}}
if(digfast_count == 10) {
    if (digfast_ans == 0) {
  digfast_total ++;
  flags_to_push.push('were much more interested in sex than usual');
}}
if(digfast_count == 11) {
    if (digfast_ans == 0) {
  digfast_total ++;
  flags_to_push.push('did things that were unusual for them or that other people might have thought were excessive, foolish, or risky');
}}
if(digfast_count == 12) {
    if (digfast_ans == 0) {
  digfast_total ++;
flags_to_push.push("spending money got them or their family in trouble");
}}

if (digfast_count > 12) {
    if (digfast_total > 0) {
jQuery(function($) {
     $('#digfast_display').fadeOut(500, function() {
           $(this).text(digfast_questions[digfast_count]).fadeIn(500);
         })})
         jQuery(function($) {
             $("#first_answers_digfast").slideUp(750);
             $( "#last_answers_digfast" ).delay(1000).slideDown(750);});
       }
else {
  start_hx('#digfast_page')
  data.DIGFAST = [digfast_total]
  data.DIGFAST_Flags.push(flags_to_push)}}

if(digfast_count == 13) {
    if (digfast_total > 1) {
      if (digfast_ans == 0) {
  flags_to_push.push(' AND SEVERAL OF THESE HAPPENED DURING THE SAME PERIOD OF TIME');
}}
//change answer type to last question ones
};
//pushes the answer to the 4 answer type to flags
if(digfast_count == 14) {
  flags_to_push.push(digfast_val);
  start_hx('#digfast_page')
  data.DIGFAST = [digfast_total]
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

////////End DIGFAST    https://www.ohsu.edu/sites/default/files/2019-06/cms-quality-bipolar_disorder_mdq_screener.pdf





////Start PH9Q
var ph9q_count = 0;
var flags_to_push_ph9q = []
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
function ph9q_but(ph9q_ans, typed_ans) {


if (!('ph9q' in data)) {
  data.ph9q = [ph9q_ans]}

else if (('ph9q' in data)) {
  data.ph9q.push(ph9q_ans)};

  if(ph9q_count == 0) {
    if (ph9q_ans > 0) {
      flags_to_push_ph9q.push('Little interest or pleasure in doing things--' + typed_ans);
    }}
    if(ph9q_count == 1) {
      if (ph9q_ans > 0) {
        flags_to_push_ph9q.push('Feeling down, depressed, or hopeless--' + typed_ans);
      }}
  if(ph9q_count == 2) {
    if (ph9q_ans > 0) {
      flags_to_push_ph9q.push('Trouble falling/staying asleep, sleeping too much--' + typed_ans);
    }}
if(ph9q_count == 3) {
  if (ph9q_ans > 0) {
    flags_to_push_ph9q.push('Feeling tired or having little energy--' + typed_ans);
  }}
  if(ph9q_count == 4) {
    if (ph9q_ans > 0) {
      flags_to_push_ph9q.push('Poor appetite or overeating--' + typed_ans);
    }}
if(ph9q_count == 5) {
  if (ph9q_ans > 0) {
    flags_to_push_ph9q.push('Feeling bad about yourself or that you are a failure or have let yourself or your family down--' + typed_ans);
  }}
  if(ph9q_count == 6) {
    if (ph9q_ans > 0) {
      flags_to_push_ph9q.push('Trouble concentrating on things, such as reading the newspaper or watching television--' + typed_ans);
    }}
if(ph9q_count == 7) {
  if (ph9q_ans > 0) {
    flags_to_push_ph9q.push('Moving or speaking so slowly that other people could have noticed. Or the opposite; being so fidgety or restless that you have been moving around a lot more than usual--' + typed_ans);
  }}
  if(ph9q_count == 8) {
    if (ph9q_ans > 0) {
      flags_to_push_ph9q.push('Thoughts that you would be better off dead or of hurting yourself in some way--' + typed_ans);
    }}




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
    data.ph9q_Flags = [flags_to_push_ph9q]
    done_ph9q()}
  else {
       jQuery(function($) {
         $('#ph9q_display').fadeOut(500, function() {
               $(this).text(ph9q_questions[ph9q_count]).fadeIn(500);
             })})};
     ph9q_count ++;};
////END OF PH9Q



///Start memory

     var memory_total = 0;
     var memory_count = 0;
     var memory_questions = [
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

if (!('Memory_Depression_Flags' in data)) {
  data.Memory_Depression_Flags = []}

if(memory_count == 0) {
  if (memory_ans == 0) {
    memory_total ++;
    data.Memory_Depression_Flags.push('not basically satisfied with life');
  }}
if(memory_count == 1) {
  if (memory_ans == 1) {
    memory_total ++;
    data.Memory_Depression_Flags.push('has dropped many of thier activities and interests');
  }}
if(memory_count == 2) {
  if (memory_ans == 1) {
    memory_total ++;
    data.Memory_Depression_Flags.push('feels life is empty');
  }}
if(memory_count == 3) {
    if (memory_ans == 1) {
  memory_total ++;
  data.Memory_Depression_Flags.push('is often bored');
}}
if(memory_count == 4) {
    if (memory_ans == 0) {
  memory_total ++;
  data.Memory_Depression_Flags.push('is not in good spirits most of the time');
}}
if(memory_count == 5) {
    if (memory_ans == 1) {
  memory_total ++;
  data.Memory_Depression_Flags.push('feels afraid something bad is going to happen to them');
}}
if(memory_count == 6) {
    if (memory_ans == 0) {
  memory_total ++;
  data.Memory_Depression_Flags.push('does not feel happy most of the time');
}}
if(memory_count == 7) {
    if (memory_ans == 1) {
  memory_total ++;
  data.Memory_Depression_Flags.push('often feels helpless');
}}
if(memory_count == 8) {
    if (memory_ans == 1) {
  memory_total ++;
  data.Memory_Depression_Flags.push('prefers to stay home rather than going out and doing things');
}}
if(memory_count == 9) {
    if (memory_ans == 1) {
  memory_total ++;
  data.Memory_Depression_Flags.push('feels like they have more problems with memory than most');
}}
if(memory_count == 10) {
    if (memory_ans == 0) {
  memory_total ++;
  data.Memory_Depression_Flags.push('does not think it is wonderful to be alive now');
}}
if(memory_count == 11) {
    if (memory_ans == 1) {
  memory_total ++;
  data.Memory_Depression_Flags.push('feels worthless the way they are now');
}}
if(memory_count == 12) {
    if (memory_ans == 0) {
  memory_total ++;
  data.Memory_Depression_Flags.push('does not feel full of energy');
}}
if(memory_count == 13) {
    if (memory_ans == 1) {
  memory_total ++;
  data.Memory_Depression_Flags.push('feels that their situation is hopeless');
}}
if(memory_count == 14) {
    if (memory_ans == 1) {
  memory_total ++;
  data.Memory_Depression_Flags.push('feels that most people are better off than they are');
}}



if (memory_count == 15) {
  start_hx('#memory_page')

  if (!('Memory_Depression' in data)) {
    data.Memory_Depression = [memory_total]}}

   jQuery(function($) {
     $('#memory_display').fadeOut(500, function() {
           $(this).text(memory_questions[memory_count]).fadeIn(500);
         })});
 memory_count ++;};
/// END OF MEMORY COUNTER////




///Start PTSD
var ptsd_total = 0;
var ptsd_count = 0;
var ptsd_questions = [
  'tried hard not to think about the event(s) or went out of your way to avoid situations that reminded you of the event(s)?',
  'been constantly on guard, watchful, or easily startled?',
  'felt numb or detached from people, activities, or your surroundings?',
  'felt guilty or unable to stop blaming yourself or others for the event(s) or any problems the event(s) may have caused?',];
function ptsd_answer(ans) {

if (!('PTSD_Flags' in data)) {
  data.PTSD_Flags = []}

  if(ptsd_count == 0) {
      if (ans == 1) {
    ptsd_total ++;
    data.PTSD_Flags.push('had nightmares about the trauma or thought about the trauma when they did not want to');
  }}
  if(ptsd_count == 1) {
      if (ans == 1) {
    ptsd_total ++;
    data.PTSD_Flags.push('tried hard not to think about the trauma or went out of their way to avoid situations that reminded them of the trauma');
  }}
  if(ptsd_count == 2) {
      if (ans == 1) {
    ptsd_total ++;
    data.PTSD_Flags.push('has been constantly on guard, watchful, or easily startled');
  }}
  if(ptsd_count == 3) {
      if (ans == 1) {
    ptsd_total ++;
    data.PTSD_Flags.push('felt numb or detached from people, activities, or their surroundings');
  }}
  if(ptsd_count == 4) {
      if (ans == 1) {
    ptsd_total ++;
    data.PTSD_Flags.push('felt guilty or unable to stop blaming themself or others for the trauma or any problems the trauma may have caused');};
    data.PTSD = [ptsd_total];
    start_hx('#ptsd_page');}

    jQuery(function($) {
     $('#ptsd_display').fadeOut(500, function() {
     $(this).text(ptsd_questions[ptsd_count]).fadeIn(500);
   })});
   ptsd_count ++
  };

///END OF PTSD






///Start Anxiety
var anxiety_total = 0;
var anxiety_count = 0;
var anxiety_questions = [
  'Not being able to stop or control worrying.',
  'Worrying too much about different things.',
  'Trouble relaxing.',
  'Being so restless that it\'s hard to sit still.',
'Becoming easily annoyed or irritable.',
'Feeling afraid as if something awful might happen.',];
function anxiety_answer(ans, num) {

if (num == 1) {
  anx_score = 'several days'};
  if (num == 2) {
    anx_score = 'more than half the days'};
    if (num == 3) {
      anx_score = 'nearly everyday'};


if (!('Anxiety_Flags' in data)) {
  data.Anxiety_Flags = []};

  if(anxiety_count == 0) {
      if (!(ans == 'Not at all')) {
    anxiety_total += num;
    data.Anxiety_Flags.push('Not being able to stop or control worrying ', anx_score);}}
  if(anxiety_count == 1) {
      if (!(ans == 'Not at all')) {
    anxiety_total += num;
    data.Anxiety_Flags.push('Worrying too much about different things ', anx_score);}}
  if(anxiety_count == 2) {
      if (!(ans == 'Not at all')) {
    anxiety_total += num;
    data.Anxiety_Flags.push('Trouble relaxing ', anx_score);}}
  if(anxiety_count == 3) {
      if (!(ans == 'Not at all')) {
    anxiety_total += num;
    data.Anxiety_Flags.push('Being so restless that it\'s hard to sit still ', anx_score);}}
  if(anxiety_count == 4) {
      if (!(ans == 'Not at all')) {
    anxiety_total += num;
    data.Anxiety_Flags.push('Becoming easily annoyed or irritable ', anx_score);}}
  if(anxiety_count == 5) {
      if (!(ans == 'Not at all')) {
    anxiety_total += num;
    data.Anxiety_Flags.push('felt numb or detached from people, activities, or their surroundings ', anx_score);}}
  if(anxiety_count == 6) {
      if (!(ans == 'Not at all')) {
    anxiety_total += num;
    data.Anxiety_Flags.push('Feeling afraid as if something awful might happen ', anx_score)};
    data.Anxiety = [anxiety_total]
    open_panic()
  };

    jQuery(function($) {
     $('#anxiety_display').fadeOut(500, function() {
     $(this).text(anxiety_questions[anxiety_count]).fadeIn(500);
   })});
   anxiety_count ++
  };
  /////END OF Anxiety





















///Start Panic
var panic_total = 0;
var panic_count = 0;
var panic_questions = [
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

    if (num == 1) {
      pnc_score = 'occasionally'};
      if (num == 2) {
        pnc_score = 'half of the time'};
        if (num == 3) {
          pnc_score = 'most of the time'};
          if (num == 4) {
            pnc_score = 'all of the time'};

if (!('Panic_Flags' in data)) {
  data.Panic_Flags = []}

  if(panic_count == 0) {
      if (num > 0) {
    panic_total += num;
    data.Panic_Flags.push('Felt moments of sudden terror, fear or fright, sometimes out of the blue (i.e., a panic attack) ', pnc_score);
  }}
  if(panic_count == 1) {
      if (num > 0) {
    panic_total += num;
    data.Panic_Flags.push('Felt anxious, worried, or nervous about having more panic attacks ', pnc_score);
  }}
  if(panic_count == 2) {
      if (num > 0) {
    panic_total += num;
    data.Panic_Flags.push('Had thoughts of losing control, dying, going crazy, or other bad things happening because of panic attacks ', pnc_score);
  }}
  if(panic_count == 3) {
      if (num > 0) {
    panic_total += num;
    data.Panic_Flags.push('Felt a racing heart, sweaty, trouble breathing, faint, or shaky ', pnc_score);
  }}
  if(panic_count == 4) {
      if (num > 0) {
    panic_total += num;
    data.Panic_Flags.push('Felt tense muscles, felt on edge or restless, or had trouble relaxing or trouble sleeping ', pnc_score);
  }}
  if(panic_count == 5) {
      if (num > 0) {
    panic_total += num;
    data.Panic_Flags.push('Avoided, or did not approach or enter, situations in which panic attacks might occur ', pnc_score);
  }}
  if(panic_count == 6) {
      if (num > 0) {
    panic_total += num;
    data.Panic_Flags.push('Left situations early, or participated only minimally, because of panic attacks ', pnc_score);
  }}
  if(panic_count == 7) {
      if (num > 0) {
    panic_total += num;
    data.Panic_Flags.push('Spent a lot of time preparing for, or procrastinating about (putting off), situations in which panic attacks might occur ', pnc_score);
  }}
  if(panic_count == 8) {
      if (num > 0) {
    panic_total += num;
    data.Panic_Flags.push('Distracted myself to avoid thinking about panic attacks ', pnc_score);
  }}
  if(panic_count == 9) {
      if (num > 0) {
    panic_total += num;
    data.Panic_Flags.push('Needed help to cope with panic attacks (e.g., alcohol or medication, superstitious objects, other people ', pnc_score);};
    data.Panic = [panic_total];
    start_hx('#anxiety_page');}

    jQuery(function($) {
     $('#panic_display').fadeOut(500, function() {
     $(this).text(panic_questions[panic_count]).fadeIn(500);
   })});
   panic_count ++
  };

  /////END OF Panic




function start_hx(page) {
  jQuery(function($) {
      $(page).slideUp(750);
      $( "#history" ).delay(1000).slideDown(750);})
    };

function hx_2() {
  jQuery(function($) {
      $("#history").slideUp(750);
      $( "#history_2" ).delay(1000).slideDown(750);})
    };








    /////function for callbacks and api to get rxcui and med interactions
    function get_rxcuis () {
      var med_list_url = [];
      var rxcui = []
      var med_list = data.MedsToCheck;
      ///going to get rxcui for drugs
      data.MedsToCheck.forEach(element => med_list_url.push(element));
      med_list_url.forEach((element) => {
        if (typeof url_for_rxui === 'undefined') {
          url_for_rxui = [("https://rxnav.nlm.nih.gov/REST/approximateTerm.json?term=" + element + "&maxEntries=1&option=0")]}
        else {
          url_for_rxui.push(("https://rxnav.nlm.nih.gov/REST/approximateTerm.json?term=" + element + "&maxEntries=1&option=0"))}});

    url_for_rxui.forEach((element) => {
          $(document).ready(function() {
            $.ajax({
                url: element,
                type: 'GET',
                success: function(returned){
                  rxcui.push(returned.approximateGroup.candidate[0].rxcui);

                  send_rxcui_list(rxcui, med_list)}
            });})})}


    function send_rxcui_list(rxcui, med_list) {
      if (rxcui.length == med_list.length) {
    ///adding drug rxcui and checking interactions
    rxcui_list = 'https://rxnav.nlm.nih.gov/REST/interaction/list.json?rxcuis=';
    list_url = rxcui.join('+')
    var med_interactions = []
    data.Med_Interactions = ['Interactions: ']
    rxcui_url_inter = rxcui_list + list_url
          $(document).ready(function() {
            $.ajax({
                url: rxcui_url_inter,
                type: 'GET',
                success: function(returned){
                  for (var i = 0; i < returned.fullInteractionTypeGroup[0].fullInteractionType[0].interactionPair.length; i++) {
                  data.Med_Interactions.push(returned.fullInteractionTypeGroup[0].fullInteractionType[0].interactionPair[i].description);}
                  print_data()
            }});})}}




///necessary vars
  var listed_num = []
  var ph9q_total = 0;
  var surg_checked = [];

function finished() {
  var med_list = data.MedsToCheck;
  if (!(med_list == undefined)) {
if (med_list.length > 1) {
get_rxcuis()}}
else {
  print_data()
}}


function print_data() {
/////////////This is calc total ph9q score
if (('ph9q' in data)) {

  $.each(data, function(key, value) {
    if (key == 'ph9q') {
        listed_num += (value)}});

array_num = listed_num.split(',');

for (var i = 0; i < array_num.length; i++) {
  array_numb = parseInt(array_num[i], 10)
  ph9q_total += array_numb};
data.ph9q_Total = [ph9q_total];}
////////////////

if (!('Age' in data)) {
  var age = $("#age").val();
  data.Age = [age];}

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
 var smoke = ",\ smokes\ " + smoke_type + "<br>" + smoke_freq + "\ pack/puff per day\ " + "for\ " + smoke_dur + "\ (years)" ;
if (data.Smoker == "Yes") {
  data.Smoker.push(smoke);}


var rec_type = $("#rec_type").val();
var rec_freq = $("#rec_freq").val();
var rec = "Uses\ " + rec_type + "\ " + rec_freq
if (data.RecDrugs == "Yes") {
data.RecDrugs.push(rec);}


var alcohol_freq = $("#alcohol_freq").val();
var alcohol_use = ",\ " + alcohol_freq + "\ (drinks per week)";
if (data.Alcohol == "Yes") {
data.Alcohol.push(alcohol_use);};



var hosp_times = $("#hosp_times").val();
var recent_hosp = $("#recent_hosp").val();
var hosp_data = "Has\ " + hosp_times + "prior psychiartic hospital admit(s), most recently" + "\"" + recent_hosp + "\"" ;
if (data.Hospital == "Yes") {
data.Hospital = [hosp_data];}


var what_treatment = $("#what_treatment").val();
var last_treatment = $("#last_treatment").val();
var treatment_push =  "has been previously treated for\ " + "\"" + what_treatment + "\"" + "and their last appointment was\ " + "\"" + last_treatment + "\"" ;
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



  jQuery(function($) {
      // $("#algorx").slideUp(750);
      $("#history").slideUp(750);
      $( "#note" ).delay(1000).slideDown(750);
      $( "#after_submit" ).delay(1000).slideDown(750);})


    jQuery(document).ready(function(){

      $("#cc").append(data.CC);
      $("#1relationship").append(data.Relationship);
      $("#1age").append(data.Age);
      $("#1sex").append(data.Sex);
      $("#1chiefc").append(data.Cheif_Complaint);

      med_data = data.Medications
      data.Medications.forEach((element) => {
      $("#1medications").append("   " + element + "<br/>");})


      data.MedAllergy.forEach((element) => {
      $("#1allergies").append(element + " , ");})

      $("#1medical_cond").append(data.Medical_Condition);
      $("#1surgeries").append(data.Surgical_History);
      $("#1employment").append(data.Employment);
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


      var survery_data = data.Survey


      if (data.Cheif_Complaint == "Mood issues"){
            jQuery(document).ready(function(){
      var ph9q_data = data.ph9q_Flags;
      var diff = data.ph9q_diff
      var digfast_data = data.DIGFAST_Flags;
      var ph9q_list = [];
            ph9q_data.forEach((element) => {
              ph9q_list.push(element)});
          var digfast_list = [];
                digfast_data.forEach((element) => {
                  digfast_list.push(element)});

                  $("#post_questions").append(" <br>---------------<br>Patient scored " + data.ph9q_Total + "on the PH9-Q scale"
                  + " and agrees to the following symptoms that have made their life\ " + diff + ":");
                  ph9q_list[0].forEach((element) => {
                    $("#post_questions").append("   " + element + "<br/>---<br/>")});


                  $("#post_questions").append(" <br>---------------<br>Patient scored " + data.DIGFAST + "on the Severity Measure for Panic Disorder—Adult"
                  + " and agrees to:");
                  digfast_list.forEach((element) => {
                  $("#post_questions").append("   " + element + "<br/>---<br/>")
                })})}

      if (data.Cheif_Complaint == "Anxiety"){
          jQuery(document).ready(function(){
      var gad_data = data.Anxiety_Flags
      var gad_list = [];
      gad_data.forEach((element) => {
        gad_list.push(element)});
        var panic_data = data.Panic_Flags
        var panic_list = [];
        panic_data.forEach((element) => {
          panic_list.push(element)});

          $("#post_questions").append(" <br>---------------<br>Patient scored " + data.Anxiety + "on the General Anxiety Disorder-7 scale"
          + " and agrees to:");
          gad_list.forEach((element) => {
          $("#post_questions").append("   " + element + "<br/>")});

          $("#post_questions").append(" <br>---------------<br>Patient scored " + data.Panic + "on the Severity Measure for Panic Disorder—Adult"
          + " and agreed to the following statement(s):");
          panic_list.forEach((element) => {
          $("#post_questions").append("   " + element + "<br/>");
        })})}


      if (data.Cheif_Complaint == "Memory issues"){
        jQuery(document).ready(function(){
      var mem_data = data.Memory_Depression_Flags
      var mem_list = [];
      mem_data.forEach((element) => {
        mem_list.push(element)});
        $("#post_questions").append(" <br>---------------<br>Patient scored " + data.Memory_Depression + "on the Geriatric Depression Scale"
       + " and has:");
      mem_list.forEach((element) => {
        $("#post_questions").append("   " + element + "<br/>")})})}


        if (data.Cheif_Complaint == "PTSD"){
              jQuery(document).ready(function(){
        var ptsd_data = data.PTSD_Flags
        var ptsd_list = [];
        ptsd_data.forEach((element) => {
          ptsd_list.push(element)});
        $("#post_questions").append(" <br>---------------<br>Patient scored " + data.PTSD + "on the Primary Care PTSD Screen for DSM-5"
        + " and agrees to:");
      ptsd_list.forEach((element) => {
        $("#post_questions").append("   " + element + "<br/>")})})}

  });




  };
