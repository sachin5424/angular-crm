import { Component ,OnInit,OnDestroy} from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  destroyed = new Subject<void>();
  currentScreenSize!: string;

  // Create a map to display breakpoint names for demonstration purposes.
  displayNameMap = new Map([
    [Breakpoints.XSmall, '1'],
    [Breakpoints.Small, '3'],
    [Breakpoints.Medium, '3'],
    [Breakpoints.Large, '4'],
    [Breakpoints.XLarge, '4'],
  ]);

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ]).pipe(takeUntil(this.destroyed)).subscribe(result => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            this.currentScreenSize = this.displayNameMap.get(query) ?? 'Unknown';
          }
        }
    });
  }
 ngOnInit(){

 }
  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
}

