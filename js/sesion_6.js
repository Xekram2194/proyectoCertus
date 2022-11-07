function mayor(){
    let n1, n2, n3,n4,n5,mayor;
    n1 = parse.float(document.getElementById("n1").value);
    n2 = parse.float(document.getElementById("n2").value);
    n3 = parse.float(document.getElementById("n3").value);
    n4 = parse.float(document.getElementById("n4").value);
    n5 = parse.float(document.getElementById("n5").value);
    if(n1>n2){if(n1>n3){if(n1>n4){if(n1>n5){mayor=n1;}}}}
    if(n2>n1){if(n2>n3){if(n2>n4){if(n2>n5){mayor=n2;}}}}
    if(n3>n1){if(n3>n2){if(n3>n4){if(n3>n5){mayor=n3;}}}}
    if(n4>n1){if(n4>n3){if(n4>n2){if(n4>n5){mayor=n4;}}}}
    if(n5>n1){if(n5>n3){if(n5>n4){if(n5>n2){mayor=n5;}}}}
    /*if(n1>n2 && n1>n3 && n1>n4 && n1>n5){mayor=n1;}
    if(n2>n1 && n2>n3 && n2>n4 && n2>n5){mayor=n2;}
    if(n3>n2 && n3>n1 && n3>n4 && n3>n5){mayor=n3;}
    if(n4>n2 && n4>n3 && n4>n1 && n4>n5){mayor=n4;}
    if(n5>n2 && n5>n3 && n5>n4 && n5>n1){mayor=n5;}*/
    document.getElementById("mayor").innerHTML=mayor;
    return mayor;
}
function menor(){
    let n1, n2, n3,n4,n5, menor;
    n1=document.getElementById("n1").value;
    n2=document.getElementById("n2").value;
    n3=document.getElementById("n3").value;
    n4=document.getElementById("n4").value;
    n5=document.getElementById("n5").value;
    if(n1<n2 && n1<n3 && n1<n4 && n1<n5){menor=n1;}
    if(n2<n1 && n2<n3 && n2<n4 && n2<n5){menor=n2;}
    if(n3<n2 && n3<n1 && n3<n4 && n3<n5){menor=n3;}
    if(n4<n2 && n4<n3 && n4<n1 && n4<n5){menor=n4;}
    if(n5<n2 && n5<n3 && n5<n4 && n5<n1){menor=n5;}
    document.getElementById("menor").innerHTML=menor;
    return menor;
}