class plusButton{
    constructor(x,y,str,num){
        this.button=createButton(str); 
        this.x=x
        this.y=y 
        this.va=num
        this.str=str
    }
    display(){
        this.button.position(this.x,this.y);
        //this.button.mousePressed(change)
    }
    hide(){
        this.button.hide();
    }
    // change(){
    //     if(str==="+"){
    //         this.va=this.va+1;
    //     }
    //     if(str==="-"&&this.va>0){
    //         this.va=this.va-1;
    //     }

    // }
}