import { Directive, ElementRef, Renderer } from '@angular/core'

@Directive({
    selector: '[customHighlight]'
})
export class HighlightDirective{
    constructor(private elem: ElementRef, renderer: Renderer){ 
        renderer.setElementClass(elem.nativeElement, 'app-highlight', true);
    }

}