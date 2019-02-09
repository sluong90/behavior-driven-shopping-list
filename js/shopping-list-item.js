class ShoppingListItem {
    constructor(name, description, isDone){
        this.name = name;
        this.description = description;
        this.isDone = isDone;
    }

    check(){
        this.isDone = true;
    }

    uncheck(){
        this.isDone = false;
    }

    render(){
        var htmlStr = `<li class="completed_${this.isDone}"><span>${this.name}</span> <span>${this.description}</span></li>`
        return htmlStr;
    }
}