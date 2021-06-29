const txt = document.querySelector(".txt");
const save = document.querySelector(".save");
const list = document.querySelector(".list");

let data = [];
//初始化資料
function renderData(){
    let str="";
    data.forEach(function(a,b){
    
    str+=`<li>${a.content}<input type="button" value="Delete" class="delete" data-num=${b}></li>`;
    
})
list.innerHTML= str;
}

//新增功能

save.addEventListener("click",function(){
    if(txt.value ==""){
        alert("NULL,PLEASE REWRITE");
        return
    }
    let obj = {};
    obj.content = txt.value;
    data.push(obj);
    renderData();
    txt.value="";
})

//刪除功能

list.addEventListener("click",function(e){
    if(e.target.getAttribute("class") !== "delete"){
        return
    };
    
    let num = e.target.getAttribute("data-num");
    data.splice(num,1);
    alert("LIST IS ALREADY DELETE");
    renderData();

})