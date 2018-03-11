import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
    selector: '[showInputValidation]'
})
export class ShowInputValidationDirective implements OnInit {
    private input: HTMLInputElement;
    private errorsBlock: HTMLElement;

    @Input() errorsElementId: string;

    constructor(private elementRef: ElementRef) {
        this.input = elementRef.nativeElement;
    }

    ngOnInit() {
        this.errorsBlock = document.getElementById(this.errorsElementId);
        this.hideErrors();
    }

    @HostListener("focus")
    public onFocus(): void {
        this.input.classList.remove("is-valid");
        this.input.classList.remove("is-invalid");
        this.hideErrors();
    }

    @HostListener("focusout")
    public onFocusOut(): void {
        if (this.input.validity.valid) {
            this.input.classList.add("is-valid");
            this.input.classList.remove("is-invalid");

            return;
        }
        this.input.classList.add("is-invalid");
        this.input.classList.remove("is-valid");
        this.showErrors();
    }


    private showErrors(): void {
        if (this.errorsBlock != null) {
            this.errorsBlock.style.display = "block";
        }
    }

    private hideErrors(): void {
        if (this.errorsBlock != null) {
            this.errorsBlock.style.display = "none";
        }
    }
}