// Get the modal
var modal1 = document.getElementById('myModal1');
var modal2 = document.getElementById('myModal2');
var modal3 = document.getElementById('myModal3');

// Get the button that opens the modal
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var span3 = document.getElementsByClassName("close")[2];

// When the user clicks the button, open the modal 
btn1.onclick = function () {
    "use strict";
    modal1.style.display = "block";
};
btn2.onclick = function () {
    "use strict";
    modal2.style.display = "block";
};
btn3.onclick = function () {
    "use strict";
    modal3.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span1.onclick = function () {
    "use strict";
    modal1.style.display = "none";
};
span2.onclick = function () {
    "use strict";
    modal2.style.display = "none";
};
span3.onclick = function () {
    "use strict";
    modal3.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    "use strict";
    if (event.target === modal1) {
        modal1.style.display = "none";
    }
    if (event.target === modal2) {
        modal2.style.display = "none";
    }
    if (event.target === modal3) {
        modal3.style.display = "none";
    }
};