//新增待辦事項區域
const txt = document.querySelector(".txt");
//+按鈕
const save = document.querySelector(".save");
//清單
const list = document.querySelector(".list");
const btns = document.querySelector(".btns");
//待完成按鈕
const undo = document.querySelector(".undo");
let data = [
{   content:"吃飯",
    status:"待完成"
},
{
    content:"喝水",
    status:"待完成",
},
{
    content:"睡覺",
    status:"已完成"
}
];
//初始化資料
function renderData(){
    let str="";
    data.forEach(function(a,b){
    if (a.status =="待完成"){
        str+=`<li class="list-item"><input class="checkbox" type="checkbox" data-status=${a.status} data-num=${b}>
        <span>${a.content}</span><input type="image" src="https://hexschool.github.io/js-todo/assets/cancel.jpg" alt="delete" class="delete" data-num=${b}></li>`;
    }
    else{
        str+=`<li class="list-item"><input checked class="checkbox" type="checkbox" data-status=${a.status} data-num=${b}>
        <span class="done-item">${a.content}</span><input type="image" src="https://hexschool.github.io/js-todo/assets/cancel.jpg" alt="delete" class="delete" data-num=${b}></li>`;
    }
    
    
})
list.innerHTML= str;
}
//篩選
//待完成
undo.addEventListener("click",function(a,b){
    data.forEach(function(item){
        
        
    })
})
//待完成項目計算
//已完成




//新增功能

save.addEventListener("click",function(){
    if(txt.value ==""){
        return
    }
    let obj = {};
    obj.content = txt.value;
    obj.status = "待完成";
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
    renderData();

})

//一次清楚已完成項目