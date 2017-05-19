export default class Point {
	private x: number;
	private y: number;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}

	public show() {
		if (this.x > 3) {
			return [this.x, this.y].join('@');
		}
		else {
			return 'nono';
		}
	}
}
