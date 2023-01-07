const rect ={
    perimeter: (x,y)=> 2*(x+y),
    area:(x,y)=> (x*y)
};

const solveRect=(l, b)=>{
    console.log("Solve rectangle for l="+ l + " and b=" + b);

    if(l<=0 || b<=0){
        console.log("Dimensions of rectangle should not be less than zero");
    }else{
        console.log("Area of rectangle:", rect.area(l, b));
        console.log("Perimeter of rectangle:", rect.perimeter(l, b));
    }
};

solveRect(2, 4);
solveRect(-3, -5);
solveRect(0, 5);