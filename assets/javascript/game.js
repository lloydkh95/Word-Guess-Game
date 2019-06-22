// Create an array of words
const words = ['fat', 'lazy', 'hungry'];
// Chose word randomly
let randNum = Math.floor(Math.random() * words.length);
let chooseword = word[randNum];
let rightWord = [];
let wrongWord = [];
let underScore = [];
// testing
let docUnderScore = document.getElementsByClassName('underScore');
let docRightGuess = document.getElementsByClassName('rightGuess');
// Create underscores based on length of words
let generateUnderScore = () => {
    for(let i = 0; i < choosenWord.length; i++){
        underScore.push('_');
        underScore.join('_');
        
    }
    return underScore;
}

console.log(generateUnderScore());
// Get users guess
document.addEventListener('keypress', (event) => {
    let keyword = String.fromCharCode(event.keycode);
    // if users guess is right
    if(choosenWord.indexOf(keyword)> -1){
    // add to right words array
    rightWord.push(keyword);
    underScore[chosenWord.indexOf(keyword)] = keyword;
    docUnderscore[0].innerHTML = underSxore.join(' ');
    if(underScore.join('') == choosenWord){
        alert('You Win');
    }
    {
        else {
            wrongWord.push(keyword);
        }
    }
});

generateUnderScore();
// Check if guess is right
// if right push to right array
// if wrong push to wrong array