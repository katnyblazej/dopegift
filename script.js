var selectedValue = "forhim";
var childCounter = 0;
var jsonObj = '';

window.load = init;

function init() {

    jsonObj = JSON.parse(this.examplejson);
    console.log(jsonObj);
   
    var GET = {};
    var query = window.location.search.substring(1).split("&");
    for (var i = 0, max = query.length; i < max; i++) {
        if (query[i] === "") // check for trailing & with no param
            continue;

        var param = query[i].split("=");
        GET[decodeURIComponent(param[0])] = decodeURIComponent(param[1] || "");
    }
    console.log(GET);
    console.log(GET.Use_Id);

    var sectionsToShow =  document.getElementById("forhim");
    sectionsToShow.style.display = 'block';
    console.log(sectionsToShow);
}

function getSelectedValue() {
    selectedValue = document.getElementById("forWho").value;
    showContent();
    //   console.log(selectedValue);
}


/*function showContent() {
    console.log('inside showContent');
    var temp = document.getElementById("forHimScroll");
    var clon = temp.content.cloneNode(true);
    console.log(document.body.childElementCount);
    if(childCounter > 0) {
        console.log('document.body.hasChildNodes');
        document.body.removeAttributeNode();
        childCounter--;
    }
    document.body.appendChild(clon);
    childCounter++;
}*/



function showContent(selectedValue) {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
        console.log(section);
        if (section.id === this.selectedValue) {
            console.log('insinde if');
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });

    //showCategory();
}

function showCategory() {
    const cars = ["Saab", "Volvo", "BMW"];
    var list = document.getElementById("displayList");

    cars.forEach(car => {
        let item = document.createElement("li");
        item.innerText = car;
        list.appendChild(item);
      })

}

var examplejson = "[ { \"items\": [ { \"name\": \"Ksiazka\", \"imgUrl\": \"takiitakiurl\", \"amazonRef\": \"takiitakiRef\" }, { \"name\": \"Ksiazka\", \"imgUrl\": \"takiitakiurl\", \"amazonRef\": \"takiitakiRef\" }, { \"name\": \"Ksiazka\", \"imgUrl\": \"takiitakiurl\", \"amazonRef\": \"takiitakiRef\" }, { \"name\": \"Ksiazka\", \"imgUrl\": \"takiitakiurl\", \"amazonRef\": \"takiitakiRef\" }, { \"name\": \"Ksiazka\", \"imgUrl\": \"takiitakiurl\", \"amazonRef\": \"takiitakiRef\" } ] }, { \"items\": [ { \"name\": \"Ksiazka\", \"imgUrl\": \"takiitakiurl\", \"amazonRef\": \"takiitakiRef\" }, { \"name\": \"Ksiazka\", \"imgUrl\": \"takiitakiurl\", \"amazonRef\": \"takiitakiRef\" }, { \"name\": \"Ksiazka\", \"imgUrl\": \"takiitakiurl\", \"amazonRef\": \"takiitakiRef\" }, { \"name\": \"Ksiazka\", \"imgUrl\": \"takiitakiurl\", \"amazonRef\": \"takiitakiRef\" }, { \"name\": \"Ksiazka\", \"imgUrl\": \"takiitakiurl\", \"amazonRef\": \"takiitakiRef\" } ] } ]";