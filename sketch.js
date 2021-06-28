//Create variables here
var dog;
var sadDog, happyDog;
var database;
var foodS, foodStock;

function preload()
{
	//load images here
  sadDog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png")
}

function setup() {
  
	createCanvas(500, 500);
  dog = createSprite(250, 250, 20, 20);
  dog.addImage(sadDog)
  dog.scale = 0.1;

  database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  
}

function readStock(data){
  foodS-data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food: x
  })
}



function draw() {  
  background(46, 139, 87)
  dog.display();

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }

  drawSprites();
  //add styles here

}



