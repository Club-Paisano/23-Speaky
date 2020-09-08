//jshint esversion: 6

/*
Author: Anthony Noel

-On this page if you click on a word it will be spoken!

Future Dev:

*/

const textParagraph = document.querySelector("p");

const addWordSpans = () => {
  //Get textcontent from paragraph text
    //Split them into array
  let words = textParagraph.textContent.split(" ").join("</span> <span>");
  //Return them back into words as the innerhtml
  textParagraph.innerHTML = words;
};
const toggleHighlight = (element) => {
  element.classList.toggle("highlight");
  element.style.setProperty("--spanWidth",`${element.getBoundingClientRect().width}`);
  element.style.setProperty("--spanHeight",`${element.getBoundingClientRect().height}`);
};

const speakWord = (element) => {

  let utterance = new SpeechSynthesisUtterance(`${element.textContent}`);
  speechSynthesis.speak(utterance);

};
function wordClicked() {
    //Toggle the highlightclass
    toggleHighlight(this);
    //speak the word clicked
    speakWord(this);
}

const initPage = ()=> {
  addWordSpans();
  const allSpans = document.querySelectorAll("span");
  allSpans.forEach(span => {
    span.addEventListener("click", wordClicked);
  });
};

initPage();
