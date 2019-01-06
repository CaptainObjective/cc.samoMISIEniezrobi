import check from '../img/003-check.png';
import rubbish from '../img/001-rubbish.png';
import change from '../img/002-doodles.png';
import bear from '../img/bear.png';
import Query from './query';

class Task {

    constructor(name, bgcolor, id, taskGroup, login, refreshView = null) {
        this.name = name;
        this.bgcolor = bgcolor;
        this.element = document.createElement("div");
        this.id = id;
        this.element.className = `btn btn-lg btn-block ${this.bgcolor}`
        this.element.onclick = this.click;
        this.taskGroup = taskGroup;
        this.login = login;
        this.refreshView = refreshView;
        this.czyupdate = false;
    }

    click = (e) => {
        //co ma sie zadziać po kliknieciu
        if (e.target.className === "icons _add") {
            Query.addTask(e.target.parentNode.nextSibling.nextSibling.firstChild.value, this.taskGroup, 2, false, this.login).then(() => { this.refreshView() })
            // location.reload();
        }
        if (e.target.className === "icons check") {
            e.target.parentNode.nextSibling.nextSibling.style.textDecoration = "line-through";
            e.target.src = `${bear}`;

        }
        else if (e.target.className === "icons rubbish") {

            Query.deleteTask(this.id).then(() => { this.refreshView() })
            // location.reload();


        }

        else if (e.target.className === "icons change") {
            // najpierw trzeba kliknac 'icons change', pozniej edytowac zadanie i pozniej znowu kliknac 'icons change'
            if (this.czyupdate == false) {
                e.target.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML = `<input type="text" placeholder='Edytuj zadanie...' style='text-align:center'></input>`
                this.czyupdate = true;
                this.click();
            }
            this.czypdate = false;
            Query.updateTask(this.id, e.target.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.firstChild.value).then(() => { this.refreshView() })
            // location.reload();

        }
    }
    // Query.test();

    render() {
        this.element.innerHTML = `<button class="button"><img class="icons check" src="${check}"/></button>
        <p>${this.name}</p> 
        <button class="button"> <img  class="icons rubbish"  src="${rubbish}"/></button> <button class="button">
        <img class="icons change" src="${change}"/></button>`;


        (this.id == "add new") && (this.element.innerHTML =
            `<button class="button"><img class="icons _add" src="${check}"/></button>
        <p><input type="text" placeholder="${this.name}"/></p>`);

        document.getElementById('root').appendChild(this.element);
    }
}

export default Task;