import { Dircetive , ElementRef , Renderer } from 'angular2/core';

@Dircetive({
	selector : [auto-grow]
	host : {
			'(focus'): 'onFocus()',
			'(blur') : 'onBlur()'
	}
})
export class AutoGrowDirective {

	onFocus : void {
		this.renderer.setElementStyle(this.el.nativeElement,'width','200');
	}
	onBlur : void{
		this.renderer.setElementStyle(this.el.nativeElement,'width','200');
	}
	constructor(private el : ElementRef, private renderer : Renderer){}
}