import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, map, Observable, of, subscribeOn, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-component',
  standalone: true,
  imports: [],
  templateUrl: './component.component.html',
  styleUrl: './component.component.scss'
})
export class ComponentComponent implements OnInit, OnDestroy {

  $subscription!: Subscription;
  // dummy observable that will always leak
  dummy_observable: Observable<any> = new Observable(observer => {
    const timeoutid = setInterval(() => {
      observer.next('👉 will display each second!')
    }, 1000);

    return () => clearInterval(timeoutid);
  });

  ngOnInit(): void {
    console.log("🟢 Componnet has been mounted");

    // making sure to log the observable for visual confirmation
    this.$subscription = this.dummy_observable
      .subscribe({
        next: (value: any) => {
          console.log(value);

        },
        error: (err: Error) => { console.error(err) }
      })
  }

  ngOnDestroy(): void {
    console.log('🔴 Component has been destroyed');

    Object.entries(this).forEach(([k, v]) => {
      if (k.indexOf('$') === 0 && v instanceof (Subscription))
        v.unsubscribe();
    })
  }
}
