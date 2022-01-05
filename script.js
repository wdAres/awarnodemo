filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("Card");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3AddClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3RemoveClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

const counters = document.querySelectorAll('.counter');
const speed = 5 ;

 counters.forEach(counter=> {
   const updateCount = () => {
   const target = +counter.getAttribute('data-target');
   const count = +counter.innerText;
   const inc = target/speed ;

   if (count<target) {
     counter.innerText= count + inc ;
     setTimeout(updateCount , 1);
   } else {
     count.innerText=target;
   }
  }
  updateCount();
   
 });