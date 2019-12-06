import {
  Directive,
  ElementRef,
  Renderer2,
  HostBinding,
  HostListener
} from "@angular/core";

@Directive({
  selector: "[appShadow]"
})
export class ShadowDirective {
  @HostBinding("class.box-shadow") shadow: boolean;

  constructor(private elementRef: ElementRef) {}

  @HostListener("mouseenter") mouseover() {
    this.shadow = true;
  }

  @HostListener("mouseleave") mouseout() {
    this.shadow = false;
  }
}
