function createRectangle(){
    return rectangle = {
        length : 1,
        breadth : 2,

        // draw: function(){
        //     console.log('Drawing reactangle');
        // }
        draw(){
            console.log('Drawing rectangle');
        },
        areaOfRectangle(){
            console.log(length*breadth);
        }
    }
}
// rectangle.length;
let rectangle1 = createRectangle();
console.log(rectangle1);
console.log(rectangle1.length); 
console.log(rectangle1.bradth);
console.log(rectangle1.draw());
console.log(object)