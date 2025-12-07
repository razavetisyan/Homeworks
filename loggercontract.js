
class Description{
    constructor(){
        if(new.target == Description){
            throw new Error("cheq karox jarangel");
        }
    }

    log(){
        throw new Error("interface class e");
    }
    warn(){
        throw new Error("interface class e");
    }
    error(){
        throw new Error("interface class e");
    }
}

class ConsoleLogger extends Description{
    constructor(){
        super();
    }
    log(msg){
        console.log("LOG",msg);
    }
    warn(msg){
        console.log("WARN",msg);
    }
    error(msg){
        console.log("ERROR",msg);
    }
}

class MemoryLogger extends Description{
    constructor(){
        super();
        this.array = [];
    }
    log(msg){
        this.array.push({"LOG" : msg});
    }
    warn(msg){
        this.array.push({"WARN" : msg});
    }
    error(msg){
        this.array.push({"ERROR" : msg});
    }
}
