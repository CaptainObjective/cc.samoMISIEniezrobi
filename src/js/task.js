import Query from './query';
import check from '../img/003-check.png';
import rubbish from '../img/001-rubbish.png';
import change from '../img/002-doodles.png';
import bear from '../img/bear.png';
class Task {

    constructor(name, bgcolor, id, refreshView=null) {
        this.name = name;
        this.bgcolor = bgcolor;
        this.element = document.createElement("div");
        this.id = id;
        this.element.className = `btn btn-lg btn-block ${this.bgcolor}`
        this.element.onclick = this.click;
        this.refreshView=refreshView;
    }

    click = (e) => {
        //co ma sie zadziać po kliknieciu
    if (e.target.className==="icons _add" ) {
        Query.addTask(e.target.parentNode.nextSibling.nextSibling.firstChild.value);
        location.reload();
    }
     if (e.target.className==="icons check" ){
        e.target.parentNode.nextSibling.nextSibling.style.textDecoration = "line-through";
        e.target.src=`${bear}`;

    }
    else if (e.target.className==="icons rubbish" ){
        // console.log();
        Query.deleteTask(this.id);
        // this.refreshView();
        location.reload();


    }
    else if (e.target.className==="icons change" ){
        // console.log();
 

    }
    }
        // Query.test();
    
    render() {
        this.element.innerHTML = `<button class="button"><img class="icons check" src="${check}"/></button>
        <p>${this.name}</p> 
        <button class="button"> <img  class="icons rubbish"  src="${rubbish}"/></button> <button class="button">
        <img class="icons change" src="${change}"/></button>`;


        (this.id=="add new") && (this.element.innerHTML = 
        `<button class="button"><img class="icons _add" src="${check}"/></button>
        <p><input type="text" placeholder="${this.name}"/></p>`);

       document.getElementById('root').appendChild(this.element);
    }
}

export default Task;