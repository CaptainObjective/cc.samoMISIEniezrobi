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
        // console.log(this);
        Query.test();
    }
    render() {
        this.element.innerHTML = `<p>${this.name}</p>`;
        document.getElementById('root').appendChild(this.element);
    }
}

export default Task;