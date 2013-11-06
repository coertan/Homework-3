/*  populateMenu.js
    
*/




/* sortObjArray()
    sorts an array of objects by a given property name
    the property values are compared using standard 
    operators, so this will work for string, numeric,
    boolean, or date values

    objArray        array of objects to sort
    propName        property name to sort by

    returns undefined (array is sorted in place)
*/
function sortObjArray(objArray, propName) {
    if (!objArray.sort)
        throw new Error('The objArray parameter does not seem to be an array (no sort method)');

    //sort the array supplying a custom compare function
    objArray.sort(function(a,b) {
        
        //note: this compares only one property of the objects
        //see the optional step where you can add support for 
        //a secondary sort key (i.e., sort by another property)
        //if the first property values are equal
        if (a[propName] < b[propName])
            return -1;
        else if (a[propName] === b[propName])
            return 0;
        else
            return 1;
    });
} //sortObjArray()




$( function(){
   // sortObjArray(com.dawgpizza.menu, 'name');

    renderPizza(com.dawgpizza.menu.pizzas);
    renderDrink(com.dawgpizza.menu.drinks);
    renderDessert(com.dawgpizza.menu.desserts);

});


function renderPizza(entries) {
    
    //our 2 templates
    var templateMeat = $('.template-meat');
    var templateVeggie = $('.template-vegetarian');

    //our 4 containers
    var meatPizza = $('.meatpizza');
    var veggiePizza = $('.veggiepizza');

    var instance;

    veggiePizza.hide();
    veggiePizza.empty();
    meatPizza.hide();
    meatPizza.empty();

    $.each(entries, function(){
        if(this.vegetarian){  //vegetarian pizza
            instance  = templateVeggie.clone();
            instance.find('.name').html(this.name);
            instance.find('.desc').html(this.description);
            instance.find('.price').html('$' + this.prices[0] + '/ $' +this.prices[1] + '/ $' + this.prices[2]);
            instance.removeClass('template-vegetarian');
            veggiePizza.append(instance);
        }else{
            instance  = templateMeat.clone();
            instance.find('.name').html(this.name);
            instance.find('.desc').html(this.description);
            instance.find('.price').html('$' + this.prices[0] + '/ $' +this.prices[1] + '/ $' + this.prices[2]);
            instance.removeClass('template-meat');
            meatPizza.append(instance);
        }

    });
    meatPizza.fadeIn();
    veggiePizza.fadeIn();
}

function renderPizza(entries) {
    
    //our 2 templates
    var templateMeat = $('.template-meat');
    var templateVeggie = $('.template-vegetarian');

    //our 4 containers
    var meatPizza = $('.meatpizza');
    var veggiePizza = $('.veggiepizza');

    var instance;

    veggiePizza.hide();
    veggiePizza.empty();
    meatPizza.hide();
    meatPizza.empty();

    $.each(entries, function(){
        if(this.vegetarian){  //vegetarian pizza
            instance  = templateVeggie.clone();
            instance.find('.name').html(this.name);
            instance.find('.desc').html(this.description);
            instance.find('.price').html('$' + this.prices[0] + '/ $' +this.prices[1] + '/ $' + this.prices[2]);
            instance.removeClass('template-vegetarian');
            veggiePizza.append(instance);
        }else{
            instance  = templateMeat.clone();
            instance.find('.name').html(this.name);
            instance.find('.desc').html(this.description);
            instance.find('.price').html('$' + this.prices[0] + '/ $' +this.prices[1] + '/ $' + this.prices[2]);
            instance.removeClass('template-meat');
            meatPizza.append(instance);
        }

    });
    meatPizza.fadeIn();
    veggiePizza.fadeIn();
}

function renderDrink(entries) {
    
    //our 2 templates
    var templateDrink = $('.template-drink');

    //our 4 containers
    var drinks = $('.drinks');
    var instance;
    drinks.hide();
    drinks.empty();

    $.each(entries, function(){

        instance  = templateDrink.clone();
        instance.find('.menu1').html(this.name + ' $' + this.price);
        drinks.append(instance);
        

    });
    drinks.fadeIn();
}
function renderDessert(entries) {
    
    //our 2 templates
    var templateDessert = $('.template-dessert');

    //our 4 containers
    var desserts = $('.desserts');
    var instance;
    desserts.hide();
    desserts.empty();

    $.each(entries, function(){

        instance  = templateDessert.clone();
        instance.find('.menu1').html(this.name + ' $' + this.price);
        desserts.append(instance);
        

    });
    desserts.fadeIn();
}
