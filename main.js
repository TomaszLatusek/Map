// import { COUNTRIES } from "./modules/countries";


const COUNTRIES = [
    {id: "Al", name: "Albania", capital: "Tirana",  population: 3038594, ue: false},
    {id: "Ad", name: "Andorra", capital: "Andora", population: 78014, ue: false},
    {id: "Am", name: "Armenia", capital: "Yerevan", population: 2956900, ue: false},
    {id: "At", name: "Austria", capital: "Vienna", population: 8859992, ue: true},
    {id: "Az", name: "Azerbaijan", capital: "Baku", population: 0, ue: true},
    {id: "Be", name: "Belgium", capital: "Brussels", population: 0, ue: true},
    {id: "By", name: "Belarus", capital: "Minsk", population: 0, ue: true},
    {id: "Bih", name: "Bosnia and Herzegovina", capital: "Sarajevo", population: 3301000, ue: true},
    {id: "Bg", name: "Bulgaria", capital: "Sofia", population: 6951482, ue: true},
    {id: "Hr", name: "Croatia", capital: "Zagreb", population: 4076246, ue: true},
    {id: "Cz", name: "Czech Republic", capital: "Prague", population: 10693939, ue: true},
    {id: "Dk", name: "Denmark", capital: "Copenhagen", population: 5824857, ue: true},
    {id: "Est", name: "Estonia", capital: "Tallinn", population: 1328976, ue: true},
    {id: "Fi", name: "Finland", capital: "Helsinki", population: 5528737, ue: true},
    {id: "Fr", name: "France", capital: "Paris", population: 67081000, ue: true},
    {id: "Gr", name: "Greece", capital: "Athens", population: 10724599, ue: true},
    {id: "Es", name: "Spain", capital: "Madrid", population: 47431256, ue: true},
    {id: "Cy", name: "Cyprus", capital: "Nicosia", population: 1189265, ue: true},
    {id: "Ge", name: "Georgia", capital: "Tbilisi", population: 3716858, ue: true},
    {id: "De", name: "Germany", capital: "Berlin", population: 83166711, ue: true},
    {id: "Hu", name: "Hungary", capital: "Budapest", population: 9772756, ue: true},
    {id: "Is", name: "Iceland", capital: "Reykjavik", population: 364134, ue: true},
    {id: "Irl", name: "Ireland", capital: "Dublin", population:  4921500, ue: true},
    {id: "It", name: "Italy", capital: "Rome", population: 60317116, ue: true},
    {id: "Kos", name: "Kosovo", capital: "Pristina", population: 1810463, ue: true},
    {id: "Lv", name: "Latvia", capital: "Riga", population: 1919968, ue: true},
    {id: "Li", name: "Liechtenstein", capital: "Vaduz", population: 38749, ue: true},
    {id: "Lt", name: "Lithuania", capital: "Vilnius", population: 2794329, ue: true},
    {id: "Lu", name: "Luxembourg", capital: "Luxembourg City", population: 626108, ue: true},
    {id: "Mt", name: "Malta", capital: "Valletta", population: 493559, ue: true},
    {id: "Md", name: "Moldova", capital: "Chișinău", population: 2640400, ue: true},
    {id: "Mc", name: "Monaco", capital: "Monaco", population: 38300, ue: true},
    {id: "Mne", name: "Montenegro", capital: "Podgorica", population: 622359, ue: true},
    {id: "Nl", name: "Netherlands", capital: "Amsterdam", population: 17418808, ue: true},
    {id: "Mk", name: "North Macedonia", capital: "Skopje", population: 2077132, ue: true},
    {id: "No", name: "Norway", capital: "Oslo", population:  5367580, ue: true},
    {id: "Pl", name: "Poland", capital: "Warsaw", population: 38383000, ue: true},
    {id: "Pt", name: "Portugal", capital: "Lisbon", population: 10295909, ue: true},
    {id: "Ro", name: "Romania", capital: "Bucharest", population: 19405156, ue: true},
    {id: "Ru", name: "Russia", capital: "Moscow", population: 146748590, ue: true},
    {id: "Sm", name: "San Marino", capital: "San Marino", population: 33344, ue: true},
    {id: "Srb", name: "Serbia", capital: "Belgrade", population: 6963764, ue: true},
    {id: "Sk", name: "Slovakia", capital: "Bratislava", population: 5457926, ue: true},
    {id: "Slo", name: "Slovenia", capital: "Ljubljana", population: 2095861, ue: true},
    {id: "Se", name: "Sweden", capital: "Stockholm", population: 10343403, ue: true},
    {id: "Ch", name: "Switerland", capital: "Bern", population: 8570146, ue: true},
    {id: "Tr", name: "Turkey", capital: "Ankara", population: 83154997, ue: true},
    {id: "Ua", name: "Ukraine", capital: "Kiev", population: 41660982, ue: true},
    {id: "Gb", name: "United Kingdom", capital: "London", population: 67886004, ue: true},
    {id: "Va", name: "Vatican", capital: "Vatican City", population: 825, ue: true},
]


$("li, path, g").click(function(){

    var info = document.getElementsByClassName("info")[0];
    info.innerHTML = '';

    for(var i = 0; i < COUNTRIES.length; i++){
        if($(this).attr("id") == COUNTRIES[i].id || $(this).attr("id") == COUNTRIES[i].id.toLowerCase()){

            var country = document.getElementById((COUNTRIES[i].id).toLowerCase());
            var list = document.getElementById(COUNTRIES[i].id);
           
            var div1 = document.createElement("div");
                div1.className = "countryName";
                document.getElementsByClassName("info")[0].appendChild(div1);
                div1.style.display = "flex";
                div1.style.flexDirection = "row";
                div1.style.flexWrap = "wrap";   
                div1.style.justifyContent = "space-evenly";
                div1.style.alignItems = "center";
                div1.style.backgroundColor = "rgb(118, 211, 240)";

            var h1 = document.createElement("h1");
                h1.innerHTML = COUNTRIES[i].name;
                if(COUNTRIES[i].name.length > 9){
                    h1.style.padding = "50px 10px";
                } 
                
            var flag = document.createElement("img");
                flag.src = ('./flags/' + COUNTRIES[i].id + '.png');
                flag.style.maxHeight = "50px";

            var emblem = document.createElement("img");
                emblem.src = ('./emblems/' + COUNTRIES[i].id + '.png');
                emblem.style.maxHeight = "100px";

                document.getElementsByClassName("countryName")[0].appendChild(h1);
                document.getElementsByClassName("countryName")[0].appendChild(flag);
                document.getElementsByClassName("countryName")[0].appendChild(emblem);

            var capital = document.createElement("h2");
                capital.innerHTML = "Capital city: " + COUNTRIES[i].capital;
                document.getElementsByClassName("info")[0].appendChild(capital);

            var population = document.createElement("h2");
                population.innerHTML = "Population: " + COUNTRIES[i].population;
                document.getElementsByClassName("info")[0].appendChild(population);
                
                country.style.fill = "rgb(88, 152, 172)";
                console.log(COUNTRIES[i].id);
                list.style.backgroundColor = "#E4E4E4"; 
        } else {
            document.getElementById((COUNTRIES[i].id).toLowerCase()).style.fill = "#c0c0c0";
            document.getElementById(COUNTRIES[i].id).style.backgroundColor = "white";
        }
    }
})

// h1.style.background = "linear-gradient(to left, rgba(255,255,255,0) 0.00000005%, rgba(255,255,255,1)), url('./flags/pl.png')";

$(".country").hover(function(){
    if(this.style.fill != "rgb(88, 152, 172)"){
        $(this).css("fill", "rgba(88, 152, 172, 0.5)");
    }
    $(this).css("cursor", "pointer");
    }, function(){
        if(this.style.fill != "rgb(88, 152, 172)"){
            $(this).css("fill", "#c0c0c0");
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