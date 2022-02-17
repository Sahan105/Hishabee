const btns = document.querySelectorAll(".b");
const storeProducts = document.querySelectorAll(".store-product");

console.log(storeProducts);

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", (e) => {
    // This is the pitch of shit...Seraching this error whole night but i cant figure out the error..
    const filter = e.target.dataset.filter;

    e.preventDefault();
    console.log(filter);

    storeProducts.forEach((product) => {
      if (filter === "all") {
        product.style.display = "grid";
      } else {
        if (product.classList.contains(filter)) {
          product.style.display = "grid";
        } else {
          product.style.display = "none";
        }
      }
    });
  });
}

const add = document.getElementsByClassName("add");
const sub = document.getElementsByClassName("sub");
// increament and decremen btn

for (var i = 0; i < add.length; i++) {
  var button = add[i];

  button.addEventListener("click", function (e) {
    var btnclick = e.target;

    var input = btnclick.parentElement.children[5];
    console.log(input);
    var inputValue = input.value;
    var newVal = parseInt(inputValue) + 1;
    input.value = newVal;
  });
}

// decrement value

for (var i = 0; i < sub.length; i++) {
  var button = sub[i];

  button.addEventListener("click", function (e) {
    var btnclick = e.target;
    var input = btnclick.parentElement.children[5];

    var inputValue = input.value;
    var newVal = parseInt(inputValue) - 1;
    if (newVal >= 0) {
      input.value = newVal;
    } else {
      alert("Product cant be less than zero");
      input.value = 0;
    }
  });
}
// Another filter
// function filterObject(c) {
//   var x, i;
//   x = document.getElementsByClassName("store-product");
//   if (c == "all") c = "";
//   for (i = 0; i < x.length; i++) {
//     if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
//   }
// }
// function addClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     if (arr1.indexOf(arr1[i]) == -1) {
//       element.className += " " + arr2[i];
//     }
//   }
// }
// function removeClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     while (arr1.indexOf(arr2[i]) > -1) {
//       arr1.splice(arr1.indexOf(arr2[i], 1));
//     }
//   }
//   element.className = arr1.join(" ");
// }
