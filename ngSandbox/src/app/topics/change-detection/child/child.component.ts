import {
  AfterViewChecked,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  standalone: true,
  imports: [
    NgForOf
  ]
})
export class ChildComponent implements OnInit, OnChanges, DoCheck, AfterViewChecked {
  // TODO: разобраться как именно работает !
  @Input() value!: number;
  logs: string[] = [];

  ngOnInit(): void {
    this.log('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.log(`ngOnChanges: value = ${changes['value'].currentValue}`);
  }

  ngDoCheck(): void {
    this.log('ngDoCheck');
  }

  ngAfterViewChecked(): void {
    this.log('ngAfterViewChecked');
  }

  private log(message: string) {
    const timestamp = new Date().toLocaleTimeString();
    this.logs.push(`[${timestamp}] ${message}`);
    console.log(message);
    ;
  }
}
