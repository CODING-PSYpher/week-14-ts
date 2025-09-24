function first():number{
   return 2
    
}
function second():number{
    return 67;
    
}
function sum(first: () => number, second: () => number): void {
    console.log(first() + second());
}

sum(first, second)