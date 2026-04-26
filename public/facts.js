// Credits to https://www.thefactsite.com/bread-facts/ for bread facts
const breadFacts = [
  "Archaeologists found evidence of breadmaking from 30,000 years ago.",
  "The Sumerians were the first to make bread rise.",
  "Ancient Europeans used beer to make their bread rise.",
  "Sourdough bread has been made for over 5,500 years.",
  "Tortillas were an ancient Mayan staple.",
  "France bakes around 6 billion baguettes per year."
];

function breadfact(){
    const random = Math.floor(Math.random() * breadFacts.length);
    document.getElementById("fact").textContent = breadFacts[random];
}