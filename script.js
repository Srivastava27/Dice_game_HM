let btns=document.querySelectorAll(".dice");
// console.log(btns);

for(let i of btns){
    i.addEventListener("click",roll);
}

// function dis(clk){
//     clk.disabled=true;
// }



let spans=document.querySelectorAll("span");
// console.log(spans[3]);

function roll(event){
    
    let active="";
    active=active+event.target.id;
    // console.log(active);


    let rand=parseInt(Math.random()*7);
    // console.log(rand);


    for(let i=1;i<spans.length;i++){
        if(active.toUpperCase()==spans[i].id){
           spans[i].innerHTML=rand;

       } 
    }
}


    let end_btn=document.getElementById("endButton");
    console.log(end_btn);

    end_btn.addEventListener("click",end);

    function end(){
        let max=0;
        for(let i=1;i<spans.length;i++){
            if(spans[i].innerHTML>max){
                max=spans[i].innerHTML;
            }
        }
        console.log("Winner",max)
    }

