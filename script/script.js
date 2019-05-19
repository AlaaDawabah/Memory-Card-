var score = 0;
var removed = 0;
var num = 0; //number of clicks at first equal to zero
var arr = [];//array of back image name is empty at first
var rem = [];//array of elements clicked is empty at first
var button = document.getElementById("btn");//get the Play Again button
var cards = document.querySelectorAll(".front");//get all ids with class=front
var newCards = Array.from(cards)//Array of front images
var s = document.getElementById("scorevalue");
var txt = document.createTextNode(score);//Create node for score in HTML
s.appendChild(txt);
var random = document.getElementsByClassName("back");
var randomArray = Array.from(random);
console.log(randomArray);
function flip() {
  var parent = this.parentElement.style.transform = "rotateY(-180deg)";//rotate the parent of front and back image
  var dataname = this.getAttribute("data-name");//get the name attribute of picture
  // console.log(dataname);
  this.style.backfaceVisibility = "hidden";//hide the back face of front image
  this.parentElement.lastElementChild.style.visibility = "visible";
  num = num + 1;//increment number by 1 
  // console.log(num);
  var children = this.parentElement.lastElementChild;//get the back image
  // console.log(children);
  rem.push(children);//push the back image in the elements clicked array
  // console.log(rem);
  arr.push(dataname);//push the name attribute in the image name array
  console.log(arr);
  if (num >= 2 && arr[0] != arr[1]) {//compare if 2 clicks occured and their name attribute is not equal
    setTimeout(function () {
      unflip();//call unflip function
      num = 0;//set number of elements clicked back to zero
      arr = [];//empty the back image name 
      rem = [];//empty the array of elements clicked
      // console.log(arr);
      // console.log(num);
      console.log("unflip " + num)
    }, 500);
  }
  if (num == 2 && arr[0] == arr[1]) {
    setTimeout(function () {//compare if 2 clicks occured and their name attribute is equal
      removecard();//call removecard function
      num = 0;//set number of elements clicked back to zero
      console.log("remove " + num)
      arr = [];//empty the back image name 
      //console.log(arr);
      rem = [];//empty the array of elements clicked
      console.log(num);
    }, 500);
  }
  children.style.visibility = "visible";//reset back image visible
}

function removecard() {
  console.log("remove started");
  rem[0].style.transform = "scale(1.2)";
  rem[0].style.transition = "all .3s ease-in-out";
  rem[1].style.transform = "scale(1.2)";
  rem[1].style.transition = "all .3s ease-in-out";
  console.log("hi");
  rem[0].style.visibility = "hidden";//hide the back image
  rem[1].style.visibility = "hidden";//hide the back image
  score += 100;//increment score by 100
  console.log(score);
  s.innerHTML = (score);//update score in HTML
  removed += 2;//increment the remoced cards by 2 
  if (removed >= 12) {
    var victory = document.getElementById("victory");
    victory.style.display = "block";//display YOU'VE WON !!
    button.style.visibility = "visible";//display Play Again button
    // console.log(victory);
    console.log("remove finished");

  }
  console.log("remove finished");
}
function unflip() {
  console.log("unflip started");
  rem[0].parentElement.style.transform = "none";//unset the rotate
  rem[1].parentElement.style.transform = "none";//unset the rotate
  score -= 20;//decrement score by 20
  if (score < 0) {
    score = 0;
  }
  s.innerHTML = (score);//update score in HTML
  console.log("unflip finished");
}
function playAgain() {
  // console.log("load");
  window.location.reload(); // reload the page again if Play Again button is clicked
  // console.log("loaded");
}

newCards.map(paper => paper.addEventListener("click", flip));//listen on each card been clicked
button.addEventListener("click", playAgain);//listen on button for click
