function Tornado(){
    food=food-Math.ceil(1/4*food);
    homes=homes-Math.ceil(1/2*homes)
    matgaths=matgaths-5;
    foodgaths=foodgaths-5;
    population=population-20;
    alert("A tornado came and reaked havoc. You lost 1/2 of your homes, 1/4 of your food,\
 5 material gatherers, 5 farmers/hunters, and 10 jobless people.\
 Add more farmers/hunters, and some homes.");
}

function Flood(){
    food=food-Math.ceil(1/2*food);
    homes=homes-Math.ceil(1/2*homes);
    matgaths=matgaths-5;
    foodgaths=foodgaths-5;
    population=population-30;
    alert("A flood decimated a lot. You lost 1/2 of your homes, 1/2 of your food,\
 5 material gatherers, 5 farmers/hunters, and 20 jobless people.\
 Add more farmers/hunters, and some homes.");
}

function Drought(){
    food=food-Math.ceil(1/2*food);
    matgaths=matgaths-3;
    foodgaths=foodgaths-3;
    population=population-20;
    alert("There was no rainfall for a while. You lost 1/2 of your food,\
 3 material gatherers, 3 farmers/hunters, and 14 jobless people.\
 Add some more farmers/hunters.");
}

function Hurricane(){
    food=food-Math.ceil(1/2*food);
    homes=homes-Math.ceil(2/3*homes);
    foodgaths=foodgaths-1;
    matgaths=matgaths-1;
    population=population-4;
    alert("Hurricane Sandy came by to say hello. You lost 1/2 of your food,\
 2/3 of your homes, 1 material gatherer, 1 farmer/hunter, and 2 jobless people.\
 Add more homes and a few farmers/hunters.");
}