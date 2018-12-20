import Query from './query';
import check from '../img/003-check.png';
import rubbish from '../img/001-rubbish.png';
import done from '../img/002-doodles.png';
class Task {

    constructor(name, bgcolor) {
        this.name = name;
        this.bgcolor = bgcolor;
        this.element = document.createElement("div");
        this.element.id = this.name;
        this.element.className = `btn btn-primary btn-lg btn-block ${this.bgcolor}`
        this.element.onclick = this.click;
    
    }
    click = () => {
        //co ma sie zadziać po kliknieciu
        console.log(this.name);
        // Query.test();
    }
    render() {
       this.element.innerHTML = `<button class="button done"><img class="icons" src="${check}"/></button>
        <p>${this.name}</p> 
        <button class="button"> <img  class="icons"  src="${rubbish}"/></button> <button class="button">
        <img class="icons" src="${done}"/></button>`;
       document.getElementById('root').appendChild(this.element);
    }
}

export default Task;