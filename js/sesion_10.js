function serie3(){
    n=8;
    v=1;
    x=3;
    while(v<=n){
        console.log(x);
        if(x==5){x=2;}
        x++;
        v++;
    }
}

//arreglos
function serie3_arreglo(){
    n=8;
    v=1;
    let a=[];
    a[v-1]=3;
    while(v<=n){
        console.log(a);
        document.getElementById("serieRputa2").innerHTML=a;
        if(v%3==0)a.push(3);
        else a.push(a[v-1]+1);
        v++;//valor avance
    }
}

function uno() {
    let a = [];
    let b = [];
    i=1;
    p=0;
    a[p]=1;
    b[p]=0;
    while(i<=8){
        if(i%2==0){a.push();}
        else b.push();
        console.log(a,b);
        i++;
    }
    /*for (i=1; i<9; i++){
        if (i%2==1){
            console.log(a);
            document.getElementById("serieRputa2").innerHTML=a;
        } else {
            console.log(b);
            document.getElementById("serieRputa2").innerHTML=b;
        }
    }*/
}
function serie2(){
    n=8;
    let x=[];
    i=1;
    p=0;
    x[p]=-1;
    while(i<=n){
        p++;
        x[p]=x[p-1]*-1
        console.log(x[p]);
        i++;
    }
    /*for(x=-1,i=1;i<=n;i++,x*=-1){
        console.log(x);
    }*/
}
function serie3(){
    n=7;
    x=1;
    s=1;
    i=0;
    let a = [];
    while(i<=n){
        a.push(s*x);
        console.log(a[i]);
        if(x==2){
            x=0;
            s=s*-1;
        }
        i++;
        x++;
    }
/*
    for(x=1,s=1,i=1;i<=n;i++,x++){
        console.log(s*x);
        if(x==2){
            x=0;
            s=s*-1;
        }
    }*/
}