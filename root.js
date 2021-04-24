let a=parseInt(prompt("Enter first(a) value"))
let b=parseInt(prompt("Enter second(b) value"))
let c=parseInt(prompt("Enter third(c) value"))
let dis=(b*b)-(4*a*c)
let disF=(dis)^(1/2)
switch (true) {
    case (dis>0):
        let root1=(-b+ disF)/(2*a)
        let root2=(-b- disF)/(2*a)
        console.log("first root is: "+root1);
        console.log("second root is: "+root2);
        break;
    case (dis<0):
        let real=-b/(2*a)
        console.log("real part is"+real);
        let imag=disF/(2*a);
        console.log("imaginary part is "+imag);
        break;
    case(dis==0):
         let root3=-b/(2*a);
         console.log("roots are: "+root3);  

    default:
        break;
}