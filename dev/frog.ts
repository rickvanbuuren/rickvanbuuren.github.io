/// <reference path="game.ts" />

class Frog {
    
    private _div: HTMLElement;
    public x:number;
    public y:number;
    private width:number;
    private height:number;
    private xspeed:number;
    private yspeed:number;
    private _lifes:number;

    public get div(): HTMLElement {
		return this._div;
    }
    
    public get lives(): number {
		return this._lifes;
	}

    constructor(x:number, y:number) {
        this._div = document.createElement("frog");
        document.body.appendChild(this._div);

        this._lifes = 3;
        this.width = 34;
        this.height = 46;
        this.x = x;
        this.y = y;
        this.xspeed = 30;
        this.yspeed = 57

        this._div.style.transform = "translate("+this.x+"px, "+this.y+"px) rotate(270deg)" 

        document.body.addEventListener('keydown', ()=> this.move(event:KeyboardEvent))
    }

    private move(e:KeyboardEvent):void {
        var code = e.keyCode ? e.keyCode : e.which;
            if (code === 38) { //up key
                this.y -= this.yspeed;
                this._div.style.transform = "translate("+this.x+"px, "+this.y+"px) rotate(270deg)"
            } else if (code === 40) { //down key
                console.log(this.y)
                if(this.y > 733){
                    this.y += 0;
                }else{
                    this.y += this.yspeed;
                }
                this._div.style.transform = "translate("+this.x+"px, "+this.y+"px) rotate(90deg)"
            } else if(code === 37){  //left key
                this.x = Math.max(109, this.x-this.xspeed);
                this._div.style.transform = "translate("+this.x+"px, "+this.y+"px) rotate(180deg)"
            } else if(code === 39){  //right key
                this.x = Math.min(735, this.x+this.xspeed);
                this._div.style.transform = "translate("+this.x+"px, "+this.y+"px) rotate(0deg)"
            }
    }

    public getRectangle() {
        return this._div.getBoundingClientRect();
    }

    public setBegin(){
        this.x = 400;
        this.y = 790;
        this._div.style.transform = "translate("+this.x+"px, "+this.y+"px) rotate(270deg)"
    }
}