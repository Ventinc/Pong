class Rect{
	constructor(w, h){
		this.pos = new Vec;
		this.size = new Vec(w, h);
	}

	get left(){
		return this.pos.x - this.size.x / 2;
	}

	get right(){
		return this.pos.x + this.size.x / 2;
	}

	get top(){
		return this.pos.y - this.size.y / 2;
	}

	get bottom(){
		return this.pos.y + this.size.y / 2;
	}
}
