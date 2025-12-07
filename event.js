
const EventEmmiter = (Base) => class extends Base{
    constructor(){
        super();
        this.eventList = {};
    }

    on(eventName,handler){
        this.eventList[eventName].push(handler);
    }

    emit(eventName,data){
        
        this.eventList[eventName].forEach(handler => handler(data));
    }

    off(eventName, handler){

        this.eventList[eventName] == this.eventList[eventName].filter(h => h != handler);
    }

}

class GameEngine{
    
    start(){
        this.emit("start",{message : "Game started !!!"});

        this.update();
    }

    update(){
        this.emit("update",{ time : Date.now()});
    }
}

Object.assign(GameEngine.prototype, EventEmmiter);