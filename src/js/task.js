import Query from './query';

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
        console.log(this);
    }

zdarzenie(e){
    e.stopPropagation();
e.target.parentNode.firstChild.style.textDecoration = "line-throughe.";
}

     

    render() {
        this.element.innerHTML = `<button class="button done"><img class="icons" src="./src/img/png/003-check.png"/></button>
        <p>${this.name}</p> 
        <button class="button"> <img  class="icons"  src="./src/img/png/001-rubbish.png"/></button> <button class="button">
        <img class="icons" src="./src/img/png/002-doodles.png"/></button>`;
        document.getElementById('root').appendChild(this.element);
      };
    
    

    
       


}

export default Task;