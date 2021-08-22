var myTaskList = document.getElementsByTagName("li");
for(var i = 0; i < myTaskList.length; i++){
    var span = document.createElement("span");
    var text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(text);
    myTaskList[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for(i = 0; i < close.length; i++){
    close[i].onclick = () => {
        var div = document.getElementsByTagName('li').parentElement;
        div.style.display = "none";
    }
}

var list = document.querySelector('ul');
list.addEventListener("click", (ev) => {
    if(ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

function newTask() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var textNode = document.createTextNode(inputValue);
    li.appendChild(textNode);

    if(inputValue === ''){
        alert("That's not a task!");
    }   else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("span");
    var text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(text);
    li.appendChild(span);

    for(var i = 0; i < close.length; i++){
        close[i].onclick = () => {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}