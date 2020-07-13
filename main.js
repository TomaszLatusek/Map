// import { COUNTRIES } from "./modules/countries";
const COUNTRIES = [
    {id: "Al", name: "Albania", capital: "Tirana",  population: 3038594, eu: false, schengen: false},
    {id: "Ad", name: "Andorra", capital: "Andora", population: 78014, eu: false, schengen: false},
    {id: "Am", name: "Armenia", capital: "Yerevan", population: 2956900, eu: false, schengen: false},
    {id: "At", name: "Austria", capital: "Vienna", population: 8859992, eu: true, schengen: true},
    {id: "Az", name: "Azerbaijan", capital: "Baku", population: 0, eu: false, schengen: false},
    {id: "Be", name: "Belgium", capital: "Brussels", population: 0, eu: true, schengen: true},
    {id: "By", name: "Belarus", capital: "Minsk", population: 0, eu: false, schengen: false},
    {id: "Bih", name: "Bosnia and Herzegovina", capital: "Sarajevo", population: 3301000, eu: false, schengen: false},
    {id: "Bg", name: "Bulgaria", capital: "Sofia", population: 6951482, eu: true, schengen: false},
    {id: "Hr", name: "Croatia", capital: "Zagreb", population: 4076246, eu: true, schengen: false},
    {id: "Cz", name: "Czech Republic", capital: "Prague", population: 10693939, eu: true, schengen: true},
    {id: "Dk", name: "Denmark", capital: "Copenhagen", population: 5824857, eu: true, schengen: true},
    {id: "Est", name: "Estonia", capital: "Tallinn", population: 1328976, eu: true, schengen: true},
    {id: "Fi", name: "Finland", capital: "Helsinki", population: 5528737, eu: true, schengen: true},
    {id: "Fr", name: "France", capital: "Paris", population: 67081000, eu: true, schengen: true},
    {id: "Gr", name: "Greece", capital: "Athens", population: 10724599, eu: true, schengen: true},
    {id: "Es", name: "Spain", capital: "Madrid", population: 47431256, eu: true, schengen: true},
    {id: "Cy", name: "Cyprus", capital: "Nicosia", population: 1189265, eu: true, schengen: false},
    {id: "Ge", name: "Georgia", capital: "Tbilisi", population: 3716858, eu: false, schengen: false},
    {id: "De", name: "Germany", capital: "Berlin", population: 83166711, eu: true, schengen: true},
    {id: "Hu", name: "Hungary", capital: "Budapest", population: 9772756, eu: true, schengen: true},
    {id: "Is", name: "Iceland", capital: "Reykjavik", population: 364134, eu: false, schengen: true},
    {id: "Irl", name: "Ireland", capital: "Dublin", population:  4921500, eu: true, schengen: false},
    {id: "It", name: "Italy", capital: "Rome", population: 60317116, eu: true, schengen: true},
    {id: "Kos", name: "Kosovo", capital: "Pristina", population: 1810463, eu: false, schengen: false},
    {id: "Lv", name: "Latvia", capital: "Riga", population: 1919968, eu: true, schengen: true},
    {id: "Li", name: "Liechtenstein", capital: "Vaduz", population: 38749, eu: false, schengen: true},
    {id: "Lt", name: "Lithuania", capital: "Vilnius", population: 2794329, eu: true, schengen: true},
    {id: "Lu", name: "Luxembourg", capital: "Luxembourg City", population: 626108, eu: true, schengen: true},
    {id: "Mt", name: "Malta", capital: "Valletta", population: 493559, eu: true, schengen: true},
    {id: "Md", name: "Moldova", capital: "Chișinău", population: 2640400, eu: false, schengen: false},
    {id: "Mc", name: "Monaco", capital: "Monaco", population: 38300, eu: false, schengen: false},
    {id: "Mne", name: "Montenegro", capital: "Podgorica", population: 622359, eu: false, schengen: false},
    {id: "Nl", name: "Netherlands", capital: "Amsterdam", population: 17418808, eu: true, schengen: true},
    {id: "Mk", name: "North Macedonia", capital: "Skopje", population: 2077132, eu: false, schengen: false},
    {id: "No", name: "Norway", capital: "Oslo", population:  5367580, eu: false, schengen: true},
    {id: "Pl", name: "Poland", capital: "Warsaw", population: 38383000, eu: true, schengen: true},
    {id: "Pt", name: "Portugal", capital: "Lisbon", population: 10295909, eu: true, schengen: true},
    {id: "Ro", name: "Romania", capital: "Bucharest", population: 19405156, eu: true, schengen: false},
    {id: "Ru", name: "Russia", capital: "Moscow", population: 146748590, eu: false, schengen: false},
    {id: "Sm", name: "San Marino", capital: "San Marino", population: 33344, eu: false, schengen: false},
    {id: "Srb", name: "Serbia", capital: "Belgrade", population: 6963764, eu: false, schengen: false},
    {id: "Sk", name: "Slovakia", capital: "Bratislava", population: 5457926, eu: true, schengen: true},
    {id: "Slo", name: "Slovenia", capital: "Ljubljana", population: 2095861, eu: true, schengen: true},
    {id: "Se", name: "Sweden", capital: "Stockholm", population: 10343403, eu: true, schengen: true},
    {id: "Ch", name: "Switzerland", capital: "Bern", population: 8570146, eu: false, schengen: true},
    {id: "Tr", name: "Turkey", capital: "Ankara", population: 83154997, eu: false, schengen: false},
    {id: "Ua", name: "Ukraine", capital: "Kiev", population: 41660982, eu: false, schengen: false},
    {id: "Gb", name: "United Kingdom", capital: "London", population: 67886004, eu: false, schengen: false},
    {id: "Va", name: "Vatican", capital: "Vatican City", population: 825, eu: false, schengen: false},
]

var eu = 0;
var schengen = 0;

$("li, path, g, button").click(function () {
  var info = document.getElementsByClassName("info")[0];
  info.innerHTML = "";

  for (var i = 0; i < COUNTRIES.length; i++) {
    if (
      $(this).attr("id") == COUNTRIES[i].id ||
      $(this).attr("id") == COUNTRIES[i].id.toLowerCase()
    ) {
      var country = document.getElementById(COUNTRIES[i].id.toLowerCase());
      var list = document.getElementById(COUNTRIES[i].id);

      $(".info").css("justify-content", "flex-start");

      var h1 = document.createElement("h1");
      h1.innerHTML = COUNTRIES[i].name;
      document.getElementsByClassName("info")[0].appendChild(h1);

      var images = document.createElement("div");
      images.className = "images";
      document.getElementsByClassName("info")[0].appendChild(images);
      images.style.display = "flex";
      images.style.flexDirection = "row";
      images.style.flexWrap = "wrap";
      // images.style.justifyContent = "space-evenly";
      images.style.alignItems = "center";
      images.style.paddingBottom = "50px";

      var flag = document.createElement("img");
      flag.src = "./flags/" + COUNTRIES[i].id + ".png";
      flag.style.maxHeight = "100px";
      flag.style.padding = "0px 50px";

      var emblem = document.createElement("img");
      emblem.src = "./emblems/" + COUNTRIES[i].id + ".png";
      emblem.style.maxWidth = "100px";

      document.getElementsByClassName("images")[0].appendChild(flag);
      document.getElementsByClassName("images")[0].appendChild(emblem);

      var capital = document.createElement("h2");
      capital.innerHTML = "Capital city: " + COUNTRIES[i].capital;
      document.getElementsByClassName("info")[0].appendChild(capital);

      var population = document.createElement("h2");
      population.innerHTML = "Population: " + COUNTRIES[i].population;
      document.getElementsByClassName("info")[0].appendChild(population);

      if(!eu || !schengen){
        country.style.fill = "rgb(88, 152, 173)";
      }else{
        country.style.fill = "rgb(88, 152, 172)";
      }
      console.log(COUNTRIES[i].id);
      list.style.backgroundColor = "#E4E4E4";

      if (country.getElementsByTagName("ellipse")[0]) {
        console.log(this);
        country.getElementsByTagName("ellipse")[0].style.opacity = "0.65";
      }
    } else {
      document.getElementById(COUNTRIES[i].id.toLowerCase()).style.fill = "#c0c0c0";
      document.getElementById(COUNTRIES[i].id).style.backgroundColor = "white";
      if (
        document
          .getElementById(COUNTRIES[i].id.toLowerCase())
          .getElementsByTagName("ellipse")[0]
      ) {
        document
          .getElementById(COUNTRIES[i].id.toLowerCase())
          .getElementsByTagName("ellipse")[0].style.opacity = "0";
      }
      if (eu) {
        eu = 0;
      }
      if (schengen) {
        schengen = 0;
      }
    }
  }
});

// h1.style.background = "linear-gradient(to left, rgba(255,255,255,0) 0.00000005%, rgba(255,255,255,1)), url('./flags/pl.png')";

$(".country").hover(
  function () {
    if (this.style.fill != "rgb(88, 152, 172)") {
      if (this.style.fill === "rgb(88, 152, 173)") {
        $(this).css("opacity", "0.8");
      } else {
        $(this).css("fill", "rgba(88, 152, 172, 0.5)");
      }
    }
    $(this).css("cursor", "pointer");
  },
  function () {
    if (this.style.fill != "rgb(88, 152, 172)") {
      if (this.style.fill === "rgb(88, 152, 173)") {
        $(this).css("opacity", "1");
      } else {
        $(this).css("fill", "#c0c0c0");
      }
    }
  }
);

$("li").hover(
  function () {
    if (this.style.backgroundColor != "rgb(228, 228, 228)") {
      $(this).css("background-color", "rgb(118, 211, 240)");
      $(this).css("color", "white");
      $(this).css("cursor", "pointer");
    } else {
      $(this).css("color", "rgb(118, 211, 240)");
    }
  },
  function () {
    if (this.style.backgroundColor != "rgb(228, 228, 228)") {
      $(this).css("color", "rgb(88, 152, 172)");
      $(this).css("background-color", "white");
    } else {
      $(this).css("color", "rgb(88, 152, 172)");
    }
  }
);

$("ellipse").hover(
    function () {
      if (this.style.opacity != "0.65") {
        $(this).css("opacity", "0.5");
      }
    },
    function () {
      if (this.style.opacity != "0.65") {
        $(this).css("opacity", "0");
      }
    }
  );

  

$(".eu").click(function () {
  $(".info").css("justify-content", "flex-start");

  var h1 = document.createElement("h1");
  h1.innerHTML = "European Union";
  document.getElementsByClassName("info")[0].appendChild(h1);

  var images = document.createElement("div");
  images.className = "images";
  document.getElementsByClassName("info")[0].appendChild(images);
  images.style.display = "flex";
  images.style.flexDirection = "row";
  images.style.flexWrap = "wrap";
  // images.style.justifyContent = "space-evenly";
  images.style.alignItems = "center";
  images.style.paddingBottom = "50px";

  var flag = document.createElement("img");
  flag.src = "./flags/Eu.png";
  flag.style.maxHeight = "100px";
  flag.style.padding = "0px 50px";

  document.getElementsByClassName("images")[0].appendChild(flag);

  // var capital = document.createElement("h2");
  //     capital.innerHTML = "Capital city: " + COUNTRIES[i].capital;
  //     document.getElementsByClassName("info")[0].appendChild(capital);

  // var population = document.createElement("h2");
  //     population.innerHTML = "Population: " + COUNTRIES[i].population;
  //     document.getElementsByClassName("info")[0].appendChild(population);

  for (var i = 0; i < COUNTRIES.length; i++) {
    country = document.getElementById(COUNTRIES[i].id.toLowerCase());
    if (COUNTRIES[i].eu && !eu) {
      country.style.fill = "rgb(88, 152, 173)";
    } else if (eu) {
      country.style.fill = "#c0c0c0";
    }
  }
  if (eu) {
    eu = 0;
  } else eu = 1;
});

$(".schengen").click(function () {
    $(".info").css("justify-content", "flex-start");
  
    var h1 = document.createElement("h1");
    h1.innerHTML = "Schengen Area";
    document.getElementsByClassName("info")[0].appendChild(h1);
    
    // var capital = document.createElement("h2");
    //     capital.innerHTML = "Capital city: " + COUNTRIES[i].capital;
    //     document.getElementsByClassName("info")[0].appendChild(capital);
  
    // var population = document.createElement("h2");
    //     population.innerHTML = "Population: " + COUNTRIES[i].population;
    //     document.getElementsByClassName("info")[0].appendChild(population);
  
    for (var i = 0; i < COUNTRIES.length; i++) {
      country = document.getElementById(COUNTRIES[i].id.toLowerCase());
      if (COUNTRIES[i].schengen && !schengen) {
        country.style.fill = "rgb(88, 152, 173)";
      } else if (schengen || country.style.fill === "rgb(88, 152, 172)") {
        country.style.fill = "#c0c0c0";
      }
    }
    if (schengen) {
      schengen = 0;
    } else schengen = 1;
  });
  
  