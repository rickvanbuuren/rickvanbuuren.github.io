/// <reference path="game.ts" />

class Car {
    protected _div:HTMLElement;
    protected x:number;
    protected y:number;
    protected width:number;
    protected height:number;
    protected speed:number;

    public get div(): HTMLElement {
		return this._div;
	}

    constructor(x:number, y:number) { 
        this.speed = Math.random() * 4 + 1;
        this.width = 58;
        this.height = 50;
        this.x = x;
        this.y = y;
    }
    
    public move():void {
        this.x += this.speed;
        if(this.x > 772) this.x = -50;
        this._div.style.transform = "translate("+this.x+"px, "+this.y+"px)";
    }

    public getRectangle() {
        return this._div.getBoundingClientRect()
    }

}   