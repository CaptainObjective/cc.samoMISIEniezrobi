import TaskView from './taskView';

class taskGroup {

    constructor(taskGroupID, taskGroupName, taskGroupDes, taskGroupStyle, bgcolor, taskLength) {
        console.log('taskGroup Loaded...');
        this.taskGroupID = taskGroupID;
        this.taskGroupName = taskGroupName;
        this.taskGroupDes = taskGroupDes; // zamiast tego jakiś obrazek moze iść
        this.taskGroupStyle = taskGroupStyle;// customowe style do napisana w SCSS tu tylko przekazać nazwe klasy, ewentualnie mozna to wywalić i ostylować ID
        this.taskLength = taskLength;
        this.bgcolor = bgcolor; //kolor tła z bootstrapa
        this.element = document.createElement("div");
        this.element.id = this.taskGroupID;
        this.element.className = `${this.taskGroupStyle} ${this.bgcolor}`
        this.element.onclick = this.click;
        console.log(this.taskGroupStyle);
    }
    click = () => {
        const taskView = new TaskView(this.taskGroupName, this.bgcolor);
        taskView.render();
    }
    render() {
        // Oczywiscie caly ten HTML można zmienić ja to zakodowalem tylko by pokazać koncepcje
        console.log(this.taskGroupStyle);
        if(this.taskGroupStyle == 'list'){
            this.element.innerHTML = `<i class="fas fa-clipboard-list"></i>
                                        <h2>${this.taskGroupName}</h2>
                                        <div class="line"></div>
                                        <div class = "progressBarBorder"></div>
                                        <h4>0/${this.taskLength}</h4>`
            document.getElementById('root').appendChild(this.element);
        }
        else{
            this.element.innerHTML = `<i class="fas fa-plus"></i>
                                    <h2>${this.taskGroupName}</h2>`
            document.getElementById('root').appendChild(this.element);
        }
    }

}

export default taskGroup;