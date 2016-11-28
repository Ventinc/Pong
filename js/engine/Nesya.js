class Nesya{
	constructor(canvas){
		this._canvas = canvas;
		this._canvas.width = 800;
		this._canvas.height = 600;
		this._context = canvas.getContext('2d');
	}

	draw(){
		this._context.fillRect(0, 0, this._canvas.width, this._canvas.height);
	}

	start(){
		this.draw();
	}
}