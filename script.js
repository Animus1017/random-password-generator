const pl=document.querySelector('[pl]');
const slider=document.querySelector('[slider]');
let plen=10;
handleslider();
slider.addEventListener('input',(e)=>{
    plen=e.target.value;
    handleslider();
});
function handleslider(){
    slider.value=plen;
    pl.textContent=plen;
    const min=slider.min;
    const max=slider.max;
    slider.style.backgroundSize=((plen-min)*100/(max-min))+"% 100%";
}




const s='~`!@#$%^&*()_-+={[}]|:;"<,>.?/';
function integer(min,max){
    return Math.floor(Math.random()*(max-min))+min;
}
function num(){
    return integer(0,9);
}
function ucase(){
    return String.fromCharCode(integer(65,91));
}
function lcase(){
    return String.fromCharCode(integer(97,123));
}
function symbol(){
    return s[integer(0,s.length)];
}
const check1=document.querySelector('[check1]');
const check2=document.querySelector('[check2]');
const check3=document.querySelector('[check3]');
const check4=document.querySelector('[check4]');
const checkboxes=document.querySelectorAll('input[type=checkbox]');
let count=0;
function checkchange(){
    count=0;
    checkboxes.forEach((check)=>{
        if(check.checked)
        count++;
    });
    if(plen<count){
        plen=count;
        handleslider();
    }
}
checkboxes.forEach((check)=>{
    check.addEventListener('change',checkchange);
});


let pass="";
let display=document.querySelector('[display]');
let genbtn=document.querySelector('[genbtn]');
genbtn.addEventListener('click',()=>{
    if(count==0)
    return;
    pass="";
    let arr=[];
    if(check1.checked)
    arr.push(ucase);
    if(check2.checked)
    arr.push(lcase);
    if(check3.checked)
    arr.push(num);
    if(check4.checked)
    arr.push(symbol);
    for(let i=0;i<count;i++){
        pass+=arr[i]();
    }
    for(let i=0;i<(plen-count);i++){
        let rand=integer(0,arr.length)
        pass+=arr[rand]();
    }
    pass=shuffle(Array.from(pass));
    display.value=pass;
    calc();
});
function shuffle(arr){
    for(let i=arr.length-1;i>0;i--){
        let rand=integer(0,i+1);
        let temp=arr[i];
        arr[i]=arr[rand];
        arr[rand]=temp;
    }
    return arr.join("");
}






let copymsg=document.querySelector('[copymsg]');
let copybtn=document.querySelector('.copybtn');
async function copy(){
    try{
        await navigator.clipboard.writeText(display.value);
    }
    catch(e){
        copymsg.innerText='Failed';
    }
    copymsg.classList.add('opacity-100');
    setTimeout(()=>{
        copymsg.classList.remove('opacity-100')
    },2000);    
}
copybtn.addEventListener('click',()=>{
    if(display.value)
    copy(); 
});



let indic=document.querySelector('[indicator]');
function calc(){
    let u=false;
    let l=false;
    let n=false;
    let s=false;
    if(check1.checked) u=true;
    if(check2.checked) l=true;
    if(check3.checked) n=true;
    if(check4.checked) s=true;
    if(plen>=8 && u && l && (n || s))
    indic.classList.add('bg-[#0f0]','shadow-[0_0_12px_1px_#0f0]');
    else if(plen>=5 && (u || l) && (n || s))
    indic.classList.add('bg-[#ff0]','shadow-[0_0_12px_1px_#ff0]');
    else
    indic.classList.add('bg-[#f00]','shadow-[0_0_12px_1px_#f00]');
}



