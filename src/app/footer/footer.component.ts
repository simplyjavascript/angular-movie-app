import {
  Component,
  OnInit,
  OnChanges,
  AfterViewInit,
  AfterContentInit,
  OnDestroy,
  AfterViewChecked,
  AfterContentChecked
} from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent
  implements
    OnInit,
    OnChanges,
    AfterViewInit,
    AfterViewChecked,
    AfterContentInit,
    AfterContentChecked,
    OnDestroy {
  constructor() {
    //console.log("1. Constructor");
  }
  ngOnInit() {
    //console.log("2. OnInit");
  }
  ngOnChanges(changes): void {
    //console.log("3. OnChanges");
  }
  ngAfterViewInit(): void {
    //console.log("4. After View Init");
  }
  ngAfterViewChecked(): void {
    //console.log("5. After View Checked");
  }
  ngAfterContentInit(): void {
    //console.log("6. After Content Init");
  }
  ngAfterContentChecked(): void {
    //console.log("7. After Content Checked");
  }
  ngOnDestroy(): void {
    //console.log("8. On Destroy");
  }
  // ngDoCheck(): void {}
}
