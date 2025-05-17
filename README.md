<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>calcultor</title>
    <link rel="stylesheet" href="calculator.css">
     <script src="index4.js"async></script>
</head>
<body>
    <div class="f1">
        
        
        <div class="raki">
            <h4>SIMPLE INTEREST CALCULATOR</h4>
            
            Enter actual amount:<br><input type="number" id="initialamount"  placeholder="originl amount"><br>
             Enter interest rate:<br><input type="number" id="interestrate"  placeholder="interest rate"><br>
              Enter months:<br><input type="number" id="totalmonths"  placeholder="months" value="0"><br>
             Enter days:<br><input type="number" id="totaldays"     placeholder="days" value="0"><br>
              <P id="demo1"> total interest:-</P>
              <p id="demo">Total amount including interest:-  </p>
             
            
            <button onclick="calculate()">Submit</button>
            

        </div>
    </div>
</body>
</html>
*{
    padding:0;
    margin:0;
    font-family:sans-serif;
    box-sizing: border-box;
}
body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}


.raki {
    display: flex;
    flex-direction: column; 

}
  

 



.raki p{
    color:red;
    font-family: Arial, Helvetica, sans-serif;
    font-style: italic;
    font-weight:bold;
    font-size: large;
    margin-top: 20px;
    
    padding: 10px;
}



    

.raki h4{
    text-align: center;
    font-size: 20px;
    color:blue;
    text-decoration: underline;
    
    margin-bottom:10px;
}

.raki input {
    padding: 10px;
    margin: 8px ;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 16px;
}
.raki button {
    padding: 10px;
    margin-top:30px;
    margin-left: 50%;
    background-color: #4CAF50;
    color: white;
    border: none;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
}

.raki button:hover {
    background-color: #45a049;
}

@media (max-width: 800px) {
    .f1 {
        padding: 10px;
        width: 95%;
    }

    .raki input, .raki button {
        font-size: 14px;
    }
}
@media (min-width:800px) {
    .f1 {
        padding: 10px;
        width: 70%;
    }
}
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
