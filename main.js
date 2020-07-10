// import { COUNTRIES } from "./modules/countries";


const COUNTRIES = [
    {id: "Al", name: "Albania", capital: "Tirana",  population: 3038594, eu: false},
    {id: "Ad", name: "Andorra", capital: "Andora", population: 78014, eu: false},
    {id: "Am", name: "Armenia", capital: "Yerevan", population: 2956900, eu: false},
    {id: "At", name: "Austria", capital: "Vienna", population: 8859992, eu: true},
    {id: "Az", name: "Azerbaijan", capital: "Baku", population: 0, eu: true},
    {id: "Be", name: "Belgium", capital: "Brussels", population: 0, eu: true},
    {id: "By", name: "Belarus", capital: "Minsk", population: 0, eu: true},
    {id: "Bih", name: "Bosnia and Herzegovina", capital: "Sarajevo", population: 3301000, eu: true},
    {id: "Bg", name: "Bulgaria", capital: "Sofia", population: 6951482, eu: true},
    {id: "Hr", name: "Croatia", capital: "Zagreb", population: 4076246, eu: true},
    {id: "Cz", name: "Czech Republic", capital: "Prague", population: 10693939, eu: true},
    {id: "Dk", name: "Denmark", capital: "Copenhagen", population: 5824857, eu: true},
    {id: "Est", name: "Estonia", capital: "Tallinn", population: 1328976, eu: true},
    {id: "Fi", name: "Finland", capital: "Helsinki", population: 5528737, eu: true},
    {id: "Fr", name: "France", capital: "Paris", population: 67081000, eu: true},
    {id: "Gr", name: "Greece", capital: "Athens", population: 10724599, eu: true},
    {id: "Es", name: "Spain", capital: "Madrid", population: 47431256, eu: true},
    {id: "Cy", name: "Cyprus", capital: "Nicosia", population: 1189265, eu: true},
    {id: "Ge", name: "Georgia", capital: "Tbilisi", population: 3716858, eu: true},
    {id: "De", name: "Germany", capital: "Berlin", population: 83166711, eu: true},
    {id: "Hu", name: "Hungary", capital: "Budapest", population: 9772756, eu: true},
    {id: "Is", name: "Iceland", capital: "Reykjavik", population: 364134, eu: true},
    {id: "Irl", name: "Ireland", capital: "Dublin", population:  4921500, eu: true},
    {id: "It", name: "Italy", capital: "Rome", population: 60317116, eu: true},
    {id: "Kos", name: "Kosovo", capital: "Pristina", population: 1810463, eu: true},
    {id: "Lv", name: "Latvia", capital: "Riga", population: 1919968, eu: true},
    {id: "Li", name: "Liechtenstein", capital: "Vaduz", population: 38749, eu: true},
    {id: "Lt", name: "Lithuania", capital: "Vilnius", population: 2794329, eu: true},
    {id: "Lu", name: "Luxembourg", capital: "Luxembourg City", population: 626108, eu: true},
    {id: "Mt", name: "Malta", capital: "Valletta", population: 493559, eu: true},
    {id: "Md", name: "Moldova", capital: "Chișinău", population: 2640400, eu: true},
    {id: "Mc", name: "Monaco", capital: "Monaco", population: 38300, eu: true},
    {id: "Mne", name: "Montenegro", capital: "Podgorica", population: 622359, eu: true},
    {id: "Nl", name: "Netherlands", capital: "Amsterdam", population: 17418808, eu: true},
    {id: "Mk", name: "North Macedonia", capital: "Skopje", population: 2077132, eu: true},
    {id: "No", name: "Norway", capital: "Oslo", population:  5367580, eu: true},
    {id: "Pl", name: "Poland", capital: "Warsaw", population: 38383000, eu: true},
    {id: "Pt", name: "Portugal", capital: "Lisbon", population: 10295909, eu: true},
    {id: "Ro", name: "Romania", capital: "Bucharest", population: 19405156, eu: true},
    {id: "Ru", name: "Russia", capital: "Moscow", population: 146748590, eu: true},
    {id: "Sm", name: "San Marino", capital: "San Marino", population: 33344, eu: true},
    {id: "Srb", name: "Serbia", capital: "Belgrade", population: 6963764, eu: true},
    {id: "Sk", name: "Slovakia", capital: "Bratislava", population: 5457926, eu: true},
    {id: "Slo", name: "Slovenia", capital: "Ljubljana", population: 2095861, eu: true},
    {id: "Se", name: "Sweden", capital: "Stockholm", population: 10343403, eu: true},
    {id: "Ch", name: "Switerland", capital: "Bern", population: 8570146, eu: true},
    {id: "Tr", name: "Turkey", capital: "Ankara", population: 83154997, eu: true},
    {id: "Ua", name: "Ukraine", capital: "Kiev", population: 41660982, eu: true},
    {id: "Gb", name: "United Kingdom", capital: "London", population: 67886004, eu: true},
    {id: "Va", name: "Vatican", capital: "Vatican City", population: 825, eu: true},
]

var eu = 0;

$("li, path, g").click(function(){

    var info = document.getElementsByClassName("info")[0];
    info.innerHTML = '';

    for(var i = 0; i < COUNTRIES.length; i++){
        if($(this).attr("id") == COUNTRIES[i].id || $(this).attr("id") == COUNTRIES[i].id.toLowerCase()){

            var country = document.getElementById((COUNTRIES[i].id).toLowerCase());
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
                flag.src = ('./flags/' + COUNTRIES[i].id + '.png');
                flag.style.maxHeight = "100px";
                flag.style.padding = "0px 50px";

            var emblem = document.createElement("img");
                emblem.src = ('./emblems/' + COUNTRIES[i].id + '.png');
                emblem.style.maxWidth = "100px";

                document.getElementsByClassName("images")[0].appendChild(flag);
                document.getElementsByClassName("images")[0].appendChild(emblem);

            var capital = document.createElement("h2");
                capital.innerHTML = "Capital city: " + COUNTRIES[i].capital;
                document.getElementsByClassName("info")[0].appendChild(capital);

            var population = document.createElement("h2");
                population.innerHTML = "Population: " + COUNTRIES[i].population;
                document.getElementsByClassName("info")[0].appendChild(population);
                
                country.style.fill = "rgb(88, 152, 172)";
                console.log(COUNTRIES[i].id);
                list.style.backgroundColor = "#E4E4E4"; 


            if(country.getElementsByTagName("ellipse")[0]){
                console.log(this);
                country.getElementsByTagName("ellipse")[0].style.opacity = "0.65";
            }

        } else {
            if(document.getElementById((COUNTRIES[i].id).toLowerCase()).style.fill != "rgb(12, 60, 153)"){
                document.getElementById((COUNTRIES[i].id).toLowerCase()).style.fill = "#c0c0c0";
            }
            document.getElementById(COUNTRIES[i].id).style.backgroundColor = "white";
            if(document.getElementById((COUNTRIES[i].id).toLowerCase()).getElementsByTagName("ellipse")[0]){
                document.getElementById((COUNTRIES[i].id).toLowerCase()).getElementsByTagName("ellipse")[0].style.opacity = "0";
            }
        }
    }
})

// h1.style.background = "linear-gradient(to left, rgba(255,255,255,0) 0.00000005%, rgba(255,255,255,1)), url('./flags/pl.png')";

$(".country").hover(function(){
    if(this.style.fill != "rgb(88, 152, 172)" && this.style.fill != "rgb(12, 60, 153)"){
        $(this).css("fill", "rgba(88, 152, 172, 0.5)");
    } else if(this.style.fill === "rgb(12, 60, 153)"){
        $(this).css("opacity", "0.8");
    }
    $(this).css("cursor", "pointer");
    }, function(){
        if(this.style.fill != "rgb(88, 152, 172)" && this.style.fill != "rgb(12, 60, 153)"){
            $(this).css("fill", "#c0c0c0");
        } else if(this.style.fill === "rgb(12, 60, 153)"){
            $(this).css("opacity", "1");
        }
  });

  $("li").hover(function(){
      if(this.style.backgroundColor != "rgb(228, 228, 228)"){
        $(this).css("background-color", "rgb(118, 211, 240)");
        $(this).css("color", "white");
        $(this).css("cursor", "pointer");
      } else {
        $(this).css("color", "rgb(118, 211, 240)");
      }
  }, function(){
      if(this.style.backgroundColor != "rgb(228, 228, 228)"){
        $(this).css("color", "rgb(88, 152, 172)");
        $(this).css("background-color", "white");
      } else {
        $(this).css("color", "rgb(88, 152, 172)");
      }
  });

  $(".eu").click(function(){
      for(var i = 0; i < COUNTRIES.length; i++){
          country = document.getElementById((COUNTRIES[i].id).toLowerCase());
          if(COUNTRIES[i].eu && !eu){
            country.style.fill = "rgb(12, 60, 153)";
          } else if(eu){
            country.style.fill = "#c0c0c0";
          }
      }
      if(eu){
          eu = 0;
      } else eu = 1;
  })

  $("ellipse").hover(function(){
    if(this.style.opacity != "0.65"){
        $(this).css("opacity", "0.5");
      }
  }, function(){
    if(this.style.opacity != "0.65"){
        $(this).css("opacity", "0");
      }
  })