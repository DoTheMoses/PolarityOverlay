//
function poll_handler() {
  load_data();
  
  if (timestamp != timestampOld)
    doUpdate = true;
  
  if (!animating && doUpdate)
    updateBoard();
}

// this function pulls values from the Stream Cotrol XML document for use in other files
function getValueFromTag (xmlDoc,tag) {
    if (xmlDoc.getElementsByTagName(tag).length != 0 ) {
        if (xmlDoc.getElementsByTagName(tag)[0].childNodes.length == 0) {
            return '';
        } else {
            return xmlDoc.getElementsByTagName(tag)[0].childNodes[0].nodeValue;
        }
    } else {
        return '';
    }
}

/*function check_char_color_valid () {
  var characters_array = [
      ["Bowser", "black", "blue", "red"],
      ["Captain Falcon","black", "blue", "red", "green"],
      ["Donkey Kong","red"],
      ["Dr Mario","red"],
      ["Falco","red"],
      ["Fox","red"],
      ["Ganondorf","red"],
      ["Ice Climbers","red"],
      ["Jigglypuff","red"],
      ["Kirby","red"],
      ["Link","red"],
      ["Luigi", "red"],
      ["Mario", "red"],
      ["Marth", "red"],
      ["Mewtwo", "red"],
      ["Mr Game & Watch", "red"],
      ["Ness", "red"],
      ["Peach", "red"],
      ["Pichu", "red"],
      ["Pikachu", "red"],
      ["Roy", "red"],
      ["Samus", "red"],
      ["Sheik", "red"],
      ["Yoshi", "red"],
      ["Young Link", "red"],
      ["Zelda","red", "blue"]


    ];

// check if game + character + color combination is valid

  var character = "Zelda";
  var color = "reee";
  var characater_valid, color_valid;

  for(i = 0; i < characters_array.length; i++){
    if (characters_array[i][0] == character) {
      characater_valid = 1;

      for(j = 0; j < characters_array[i].length; j++){
        if (characters_array[i][j] == color)
          color_valid = 1;
      }
    }
  } // for loop (i)



  if(color_valid == 1 && characater_valid == 1){
    alert("both valid!");

  }*/


function show_lower_third_casters() {
  $('#scene_wrapper_casters').tween({
    opacity: {start: 0,stop: 100,time: 0.5,duration: 1,effect: 'easeIn'},
    onStop: function(){animating = false;}
  });
}

function hide_lower_third_casters() {
  $('#scene_wrapper_casters').tween({
    opacity: {start: 100,stop: 0,time: 0.5,duration: 1,effect: 'easeOut'},
    onStop: function(){animating = false;}
  });
}

function show_lower_third() {
  $('#scene_wrapper_lower_third').tween({
    opacity: {start: 0,stop: 100,time: 0.5,duration: 1,effect: 'easeIn'},
    onStop: function(){animating = false;}
  });
}

function hide_lower_third() {
  $('#scene_wrapper_lower_third').tween({
    opacity: {start: 100,stop: 0,time: 0.5,duration: 1,effect: 'easeOut'},
    onStop: function(){animating = false;}
  });
}

