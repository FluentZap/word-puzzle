var answer;
var vowels = ["a", "e", "i", "o", "u"];
var question = "";

$(document).ready(function () {
  $("#scramble").click(function() {
    answer = $("#textInput").val();
    question = scramble($("#textInput").val());

    $("#puzzleDisplay").text(question);
    $("#question").fadeOut(function () {
      $("#answer").fadeIn();
    });
  });

$("#solve").click(function() {
  var guess = $("#textInputAnswer").val();
  var correct = true;

  if(guess.length === answer.length) {
    var guessLower = guess.slice().toLowerCase();
    var answerLower = answer.slice().toLowerCase();

    for(var i=0; i < answer.length; i++) {

      if(guessLower[i] != answerLower[i]) {
        correct = false;
      }
    }

  } else {
    correct = false;
  }

  if(correct === true) {
    $("#showAnswer").text(answer);
    $("#correct").show();
  } else {
    $("#answer").effect("shake");
  }

});

});


function scramble(scrambleWord) {
  var isVowel;
  var puzzle = "";
  
  for(var i=0; i < scrambleWord.length; i++) {
    //letter = "p"
    var letter = scrambleWord[i];
    var letterLower = scrambleWord[i].toLowerCase();

    isVowel = false;
    //v = 0
    for(var v=0; v < vowels.length; v++) {
      if(letterLower === vowels[v]) isVowel = true;
          }

    if (isVowel === true) {
      puzzle += "-";
    } else {
      puzzle += letter;
    }
  }
  return puzzle;
}
