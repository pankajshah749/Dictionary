const dictionary = document.querySelector('dictionary');
const form = document.querySelector('form');
const word = document.querySelector('.word');
const phonetic = document.querySelector('.phonetic');
const example = document.querySelector('.synonyms');
const audio = document.querySelector('.speak');
const speech = document.querySelector('.speech');


form.addEventListener('submit', function (e) {
   e.preventDefault();
   const inputBox = document.querySelector('.value').value;
   fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputBox}`)
      .then(function (data) {
         return data.json();
      })
      .then(function (jsondata) {

         word.innerHTML = jsondata[0].word;
         phonetic.innerHTML = jsondata[0].phonetic;
         example.innerHTML = jsondata[0].meanings[0].synonyms.join;
         speech.innerHTML = jsondata[0].meanings[0].partOfSpeech;
            // console.log(jsondata[0].example)
         console.log(jsondata[0].meanings[0].definitions[0].definition);

         
      });


});

