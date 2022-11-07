/*Encontrar mayor, menor y tercer menor:
Calcular la suma de las cifras impares de números comprendidos entre 1000 y 9999 :
Convertir una cantidad de soles a dólares y de dólares a euros :
Calcular la suma de las cifras de un número de 5 cifras, las cuales no sean primos y sean impares :*/
function variable(){
    var a=5;
    let x=10;
    var a="10";
    const a1 = "20";
    document.getElementById("var1").innerHTML=a;
    document.getElementById("let1").innerHTML=x;
    document.getElementById("const1").innerHTML=a1;
}
function valores(){
    var a, b, c;
    a=10;
    b=100;
    c=a>b;
    document.getElementById("var1").innerHTML=c;
    c=a+b;
    document.getElementById("let1").innerHTML=c;

}
function mayor(){
    let n1, n2, n3,n4,n5,mayor;
    n1=document.getElementById("n1").value;
    n2=document.getElementById("n2").value;
    n3=document.getElementById("n3").value;
    n4=document.getElementById("n4").value;
    n5=document.getElementById("n5").value;
    if(n1>n2 && n1>n3 && n1>n4 && n1>n5){mayor=n1;}
    if(n2>n1 && n2>n3 && n2>n4 && n2>n5){mayor=n2;}
    if(n3>n2 && n3>n1 && n3>n4 && n3>n5){mayor=n3;}
    if(n4>n2 && n4>n3 && n4>n1 && n4>n5){mayor=n4;}
    if(n5>n2 && n5>n3 && n5>n4 && n5>n1){mayor=n5;}
    document.getElementById("mayor").innerHTML=mayor;
}
function menos(){
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
}
function tercer(){
    let n1, n2, n3,n4,n5, menor,m3,m2;
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
    if(n1==menor){
        if(n2<n3 && n2<n4 && n2<n5){m2=n2;}
        if(n3<n2 && n3<n4 && n3<n5){m2=n3;}
        if(n4<n3 && n4<n2 && n4<n5){m2=n4;}
        if(n5<n3 && n5<n4 && n5<n2){m2=n5;}
    }
    if(n2==menor){
        if(n1<n3 && n1<n4 && n1<n5){m2=n1;}
        if(n3<n1 && n3<n4 && n3<n5){m2=n3;}
        if(n4<n3 && n4<n1 && n4<n5){m2=n4;}
        if(n5<n3 && n5<n4 && n5<n1){m2=n5;}
    }
    if(n3==menor){
        if(n2<n1 && n2<n4 && n2<n5){m2=n2;}
        if(n1<n2 && n1<n4 && n1<n5){m2=n1;}
        if(n4<n1 && n4<n2 && n4<n5){m2=n4;}
        if(n5<n1 && n5<n4 && n5<n2){m2=n5;}
    }
    if(n4==menor){
        if(n2<n3 && n2<n1 && n2<n5){m2=n2;}
        if(n3<n2 && n3<n1 && n3<n5){m2=n3;}
        if(n1<n3 && n1<n2 && n1<n5){m2=n1;}
        if(n5<n3 && n5<n4 && n5<n2){m2=n5;}
    }
    if(n5==menor){
        if(n2<n3 && n2<n4 && n2<n5){m2=n2;}
        if(n3<n2 && n3<n4 && n3<n5){m2=n3;}
        if(n4<n3 && n4<n2 && n4<n5){m2=n4;}
        if(n1<n3 && n1<n4 && n1<n2){m2=n1;}
    }
    //tercer menor
    if(n1==m2){
        if(n2<n3 && n2<n4 && n2<n5){m3=n2}
        if(n3<n2 && n3<n4 && n3<n5){m3=n3}
        if(n4<n5 && n4<n3 && n4<n2){m3=n4}
        if(n5<n4 && n5<n3 && n5<n2){m3=n5}
    }
    if(n2==m2){
        if(n3<n4 && n3<n5){m3=n3}
        if(n4<n3 && n4<n5){m3=n4}
        if(n5<n4 && n5<n3){m3=n5}
    }
    if(n3==m2){
        if(n4<n5){m3=n4}
        if(n5<n4){m3=n5}
    }
    if(n4==m2){
        if(n5<n4){m3=n5}
    }
    document.getElementById("segundo").innerHTML=m2;
    
}