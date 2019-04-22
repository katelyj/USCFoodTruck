//send diagnostic output to console
//(Ctrl-Shift-J in Chromium & Firefox to reveal console)

//info variables

var truckmanlist = ["Food-Truck Man", "FTM/1.jpg", "tr"]
var jclist = ["J.C. Food Court", "JCF/1.jpg", "jc"]
var tacolist = ["El Taco Gourmet", "ETG/1.jpg", "ta"]
var tastylist = ["Tasty Wok Express", "TWE/1.jpg", "ar"];
var chineselist = ["Chinese Street Food", "CSF/1.jpg", "am"]

var masterList = [truckmanlist, jclist, tacolist, tastylist, chineselist];

//map

var mymap = L.map("mapid").setView([34.026, -118.289], 17);

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>', Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
    id: "mapbox.streets",
    accessToken: "pk.eyJ1Ijoia2F0ZWx5aiIsImEiOiJjanJqbDM1azcwZHQ3NDNvM3kyYzcyYmxkIn0.9mj3cfrLubaTrN9pm1jazw"
}).addTo(mymap);

//popups

var truckman = L.marker([34.025561, -118.288524]).addTo(mymap); 
truckman.bindPopup("<b>Food-Truck Man</b><br><i>The Pink Truck</i><br><a href='#wrapper' onclick='infoDisplay(0)'>[More Info]</a>");

var jc = L.marker([34.025561, -118.288689]).addTo(mymap); 
jc.bindPopup("<b>J.C. Food Court</b><br><i>The Red and White Truck</i><br><a href='#wrapper' onclick='infoDisplay(1)'>[More Info]</a>");

var taco = L.marker([34.025561, -118.288926]).addTo(mymap); 
taco.bindPopup("<b>El Taco Gourmet</b><br><i>The Blue Truck</i><br><a href='#wrapper' onclick='infoDisplay(2)'>[More Info]</a>");

var tasty = L.marker([34.025561, -118.289194]).addTo(mymap); 
tasty.bindPopup("<b>Tasty Wok Express</b><br><i>The White Truck</i><br><a href='#wrapper' onclick='infoDisplay(3)'>[More Info]</a>");

var chinese = L.marker([34.025561, -118.289473]).addTo(mymap); 
chinese.bindPopup("<b>Chinese Street Food</b><br><i>The Red Truck</i><br><a href='#wrapper' onclick='infoDisplay(4)'>[More Info]</a>");

//info links

var infoDisplay = function(num) {

    document.getElementById("infoArea").innerHTML = "";

    //name
    var n = document.createElement("H2");
    n.innerHTML = "<br>" + masterList[num][0];
    //description
    var b = document.createElement("P");
    b.innerHTML = "<img src='photos/" + masterList[num][1] + "' height=150' width='250'></img>";
    //link
    var l = document.createElement("P")
    l.innerHTML = "<a href=#" + masterList[num][2] + " class='scrollLink'>Read More</a><br><br><i>Or scroll to read them all...</i><br><br><br></center>";

    document.getElementById("infoArea").appendChild(n);
    document.getElementById("infoArea").appendChild(b);
    document.getElementById("infoArea").appendChild(l);

}

//scrolling to a section

$(document).ready(function(){
    $( "a.scrollLink" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 5000);
    });
});

//photo gallery

function myFunction(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg");
    // Get the image text
    var imgText = document.getElementById("imgtext");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
  }