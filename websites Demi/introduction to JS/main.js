var attempt=0 
function wrong(){
    attempt=attempt+1
    document.getElementById("count").innerHTML=attempt;
    document.getElementById("img_car").src="https://pics.clipartpng.com/Red_Cabriolet_Car_PNG_Clip_Art-3040.png";
}
function right(){
    attempt=attempt+1
    document.getElementById("count").innerHTML=attempt
document.getElementById("img_car").src="https://static.vecteezy.com/system/resources/previews/000/550/435/non_2x/stylized-convertible-sports-car-vector.jpg"
}
function reset(){
    attempt=0
    document.getElementById("count").innerHTML=attempt;
    document.getElementById("img_car").src="https://pics.clipartpng.com/Red_Cabriolet_Car_PNG_Clip_Art-3040.png";
}