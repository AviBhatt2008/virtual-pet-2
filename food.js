class Food
{
    constructor()
    {
        // load image
        this.image = loadImage("Milk.png")
    }
    getFoodStock()
    {
        // refer to food
        foodStockRef = database.ref("food");
        // get value in database
        foodStockRef.on("value", (data) => 
        {
            foodStock = data.val();
        });
    }
    updateFoodStock(x)
    {
        // update food in database to be foodStock
        database.ref("/").update(
            {
                food: x
            }
        )
    }
    deductFood()
    {
        // subtract 1 from foodStock
        foodStock -= 1;
    }
    display()
    {
        // display bottles with ten in a row
        imageMode(CENTER);
        var x = width/2 - 100;
        var y = height/2 - 250;
        if(foodStock!==0)
        {
            for(var i = 0; i < foodStock; i++)
            {
                if(i % 10 === 0)
                {
                    y += 50;
                    x = width/2 - 150;
                }
                image(this.image, x, y, 50, 50)
                x += 30;

            }
        }
    }
}