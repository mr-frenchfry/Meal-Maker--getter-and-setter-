const menu = {
    _meal: ' ',
    _price: 0,
    set meal(mealToCheck){
      if(typeof mealToCheck === 'string'){
        return this._meal = mealToCheck;
      }
    },
    set price(priceToCheck){
      if(typeof priceToCheck === 'number'){
        return this._price= priceToCheck;
      }
    },
    get todaysSpecial(){
      if (this._meal && this._price){
        return `Todays Special is ${this._meal} for ${this._price}`;
      }else{
        return 'Meal or price was not set correctly!';
      }
    }
  };
  //properties w/ _ should not be directyl manipulated
  //menu._meal = 100;
  //menu._price = 'a';
  //console.log(menu);
  //console.log(this.mealToCheck);
  
  //testing to set the values of_meal & _price
  menu._meal = 'meat';
  menu._price = 7;
  //console.log(menu);
  console.log(menu.todaysSpecial);
  