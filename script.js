function todo(){
    var item=document.getElementById("todoform").value
    var text=document.createTextNode(item)
    var Newitem=document.createElement("li")
Newitem.append(text)
document.getElementById(todo).appendChild(Newitem)
}