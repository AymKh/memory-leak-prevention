import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-component',
  standalone: true,
  imports: [],
  templateUrl: './component.component.html',
  styleUrl: './component.component.scss'
})
export class ComponentComponent implements OnInit, OnDestroy {

  // dummy observable that will always leak
  $dummy_observable: Observable<any> = new Observable(observer => {
    const timeoutid = setInterval(() => {
      observer.next('👉 will display each second!')
    }, 1000);
  });

  ngOnInit(): void {
    console.log("🟢 Componnet has been mounted");

    // making sure to log the observable for visual confirmation
    this.$dummy_observable
      .subscribe({
        next: (value: any) => {
          console.log(value);

        },
        error: (err: Error) => { console.error(err) }
      })
  }

  ngOnDestroy(): void {
    console.log('🔴 Component has been destroyed');
  }
}
