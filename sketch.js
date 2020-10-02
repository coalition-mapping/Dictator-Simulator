//Create variables here
var population, matgaths, foodgaths, food, materials, homes, tax, money,homeless
var matgathsp,matgathsm,foodgathsp,foodgathsm,taxp,taxm,homesp,homesm
var buttonPressed, anger, gamestate, endtime, eventnumber
function preload()
{
	//load images here
}

function setup() {
	createCanvas(1000, 600);
  population=100
  matgaths=0
  foodgaths=0
  materials=0
  food=100
  homes=0
  tax=0
  eventnumber=0
  money=100000
  anger=0
  gamestate="play"
  endtime=0;

  matgathsp=new plusButton(800,300,"+");
  matgathsm=new plusButton(900,300,"-");
  foodgathsp=new plusButton(800,400,"+");
  foodgathsm=new plusButton(900,400,"-");
  taxp=new plusButton(450,200,"+");
  taxm=new plusButton(550,200,"-");
  homesp=new plusButton(100,500,"+");
  homesm=new plusButton(200,500,"-");
}

alert("Increase farmers and hunters")
function draw() {  
  if(population-4*homes<0){
    homeless=0;
  }
  else{
    homeless=population-4*homes
  }
  background("white")
  //add styles here
  if(gamestate==="play"){
  matgathsm.display();
  matgathsp.display();
  foodgathsm.display();
  foodgathsp.display();
  taxm.display();
  taxp.display();
  homesm.display();
  homesp.display();
  textSize(100);
  text("Population: "+population,150,100);
  textSize(20);
  
  text("$100 an hour",650,300);
  text("Material Gatherers",780,280)
  text(matgaths,850,316)

  text("$100 an hour",650,400);
  text("Farmers and Hunters",770,380)
  text(foodgaths,850,416)

  text("Taxes",480,190);
  text(tax+"%",495,215)

  text("Food: "+food,120,300);
  text("Materials: "+materials,110,400)

  text("Houses",120,480);
  text(homes,150,515);

  text("Homeless: "+homeless,780,480)
  text("Money: "+money,440,150)
  text("Citizen's anger: "+anger,430,250)

  taxm.button.mousePressed(function(){
    if(tax>0){
    tax=tax-1;
    }
  })
  taxp.button.mousePressed(function(){
    tax=tax+1;
  })
  homesp.button.mousePressed(function(){
    if(materials>20){
      homes=homes+1;
      materials=materials-20
      money=money-1000;
    }
  })
  homesm.button.mousePressed(function(){
    homes=homes-1;
    materials=materials+20;
    money=money+100
    anger=anger+1;
  })
  foodgathsp.button.mousePressed(function(){
    if(foodgaths+matgaths<population){
      foodgaths=foodgaths+1;
    }
  })
  foodgathsm.button.mousePressed(function(){
    if(foodgaths>0){
      foodgaths=foodgaths-1;
    }
  })
  matgathsp.button.mousePressed(function(){
    if(foodgaths+matgaths<population){
      matgaths=matgaths+1;
    }
  })
  matgathsm.button.mousePressed(function(){
    if(matgaths>0){
      matgaths=matgaths-1;
    }
  })

  if(frameCount%30===0){
    food=food+foodgaths
    materials=materials+2*matgaths
    money=money-50*(matgaths+foodgaths);
    money=money+Math.ceil(tax*population/10);
    if(homeless>0){
      population=population-Math.ceil(1/20*homeless);
    }
  }
  if(frameCount%150===0){
    food=food-1/10*population
  }
  if(frameCount%600===0){
    population=population+population
  }
  if(food<=0){
    if(frameCount%30){
      food=0;
      population=population-1;
    }
  }
  if(money<0){
    anger=100
  }
  if(tax>30&&frameCount%30){
    anger=anger+1;
  }
  if(anger===100){
    alert("Your citizens revolted and you were overthrown.")
    gamestate="end"
    endtime=frameCount
  }
  if(population===0){
    alert("All of your citizens died.")
    gamestate="end"
    endtime=frameCount
  }
  if(frameCount%1800===0){
    eventnumber=Math.round(random(1,5));
    switch(eventnumber){
      case 1:Tornado();
      break;
      case 2:Flood();
      break;
      case 3:Drought();
      break;
      case 4:Hurricane();
      break;
      case 5:Tornado();
      break;
    }
  }
  if(matgaths<0){
    matgaths=0
  }
  if(foodgaths<0){
    foodgaths=0
  }
  if(materials<0){
    materials=0;
  }
  if(food<0){
    food=0;
  }
  if(homes<0){
    homes=0;
  }
  if(frameCount%120===0&&anger>0){
    anger=anger-1;
  }
  food=Math.ceil(food);
  if(money<10,000){
    alert("Increase tax or decrease farmers/hunters or material gatherers");
  }
  }
  if(gamestate==="end"){
    matgathsm.hide();
    matgathsp.hide();
    taxp.hide();
    taxm.hide();
    foodgathsp.hide();
    foodgathsm.hide();
    homesm.hide();
    homesp.hide();
    textSize(50)
    text("You survived for "+endtime+" frames.",100,200)
  }
}