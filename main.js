var mouseevent = "";
var last_pos_x, last_pos_y;

var canvas = document.getElementById("myCanvas");
var cntx = canvas.getContext("2d");

color = "Black";
line_width = 1;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    color = document.getElementById("color").value;
    line_width = document.getElementById("circle_width").value;
    radius=document.getElementById("circle_radius").value;

    mouseevent = "mousedown";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    mouseevent = "mouseup";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    current_pos_x = e.clientX - canvas.offsetLeft;
    current_pos_y = e.clientY - canvas.offsetTop;

    if (mouseevent == "mousedown") {
        cntx.beginPath();
        cntx.strokeStyle = color;
        cntx.lineWidth = line_width;


        console.log("current positon of X and Y = ");
        console.log("X= " + current_pos_x + " y=" + current_pos_y);

        cntx.arc(current_pos_x, current_pos_y,radius,0,2*Math.PI);
        cntx.stroke();
    }
    
}