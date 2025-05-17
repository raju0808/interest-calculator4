
function cal(a,b,c=0,e=0)
{
   let d=a*(b/100)
   let f=d*c
   let m=(((e*100)/30)/100)
   let g=((m*(b/100))*a)
   let r=f+g
   return r
   
}

function calculate() {
    let a = parseFloat(document.getElementById("initialamount").value);
    let b = parseFloat(document.getElementById("interestrate").value);
    let c = parseFloat(document.getElementById("totalmonths").value);
    let e = parseFloat(document.getElementById("totaldays").value);
    if (isNaN(a) || isNaN(b)){
        document.getElementById("demo").innerHTML = "Please enter valid numbers.";
        return;
    }

 let result = cal(a, b, c,e);
    document.getElementById("demo1").innerHTML ="total interest:-"+result;
    document.getElementById("demo").innerHTML = "total amount including interest:-"+(result+a);
}