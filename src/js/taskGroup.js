import TaskView from './taskView';

class taskGroup {

    constructor(taskGroupID, taskGroupName, taskGroupStyle, bgcolor, taskList, login) {
        // console.log('taskGroup Loaded...');
        this.taskGroupID = taskGroupID;
        this.taskGroupName = taskGroupName;
        this.taskGroupStyle = taskGroupStyle;
        this.taskList = taskList;
        this.taskGroupList = [];
        this.bgcolor = bgcolor;
        this.element = document.createElement("div");
        this.element.id = this.taskGroupID;
        this.element.className = `${this.taskGroupStyle} ${this.bgcolor}`
        this.element.onclick = this.click;
        this.login = login;
    }
    click = () => {
        new TaskView(this.taskGroupID, this.taskGroupName, this.bgcolor, this.taskList, this.login);
        // taskView.render();
    }

    countDone = () => {
        let counter = 0;
        for (let i = 0; i < this.taskGroupList.length; i++) {
            if (this.taskGroupList[i].isDone === true) counter++;
        }
        return counter;
    }

    render() {
        this.taskGroupList = [];
        for (let task of this.taskList) {
            if (task.groupType == this.taskGroupID) {
                this.taskGroupList.push(task);
            }
        }
        const tasksDone = this.countDone();
        const progress = (tasksDone / this.taskGroupList.length) * 100
        if (this.taskGroupStyle == 'list') {
            this.element.innerHTML = `<i class="fas fa-clipboard-list"></i>
                                        <h2>${this.taskGroupName}</h2>
                                        <div class="line"></div>
                                        <div class = "progressBar">
                                            <div class = "progressBarBorder"></div>
                                            <div class = "progressBarProgress barBG${this.bgcolor}" style = "width: ${progress}%"></div>
                                        </div>
                                        <h4>${tasksDone}/${this.taskGroupList.length}</h4>`
            document.getElementById('root').appendChild(this.element);
        }
        else {
            this.element.innerHTML = `<i class="fas fa-plus"></i>
                                    <h2>${this.taskGroupName}</h2>`
            document.getElementById('root').appendChild(this.element);
        }
    }

}

export default taskGroup;