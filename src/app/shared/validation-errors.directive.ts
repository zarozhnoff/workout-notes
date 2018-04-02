import {Directive, HostListener, Input, OnInit} from '@angular/core';

@Directive({
    selector: '[validation-errors]'
})
export class ValidationErrorsDirective implements OnInit {
    private errorsBlock:HTMLElement;

    @Input() errorsId:string;


    ngOnInit() {
        this.errorsBlock = document.getElementById(this.errorsId);
        this.errorsBlock.style.display = "none";
    }

    @HostListener("focus")
    public onFocus():void {
        this.errorsBlock.style.display = "none";
    }

    @HostListener("focusout")
    public onFocusOut():void {
        this.errorsBlock.style.display = "block";
    }
}