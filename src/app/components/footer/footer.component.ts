import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app-reducer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
  song: string = "song";
  singer: string = "singer";
  $musicSubscription: Subscription | null = null;
  constructor(private store: Store<AppState>) {

  }


  ngOnInit(): void {
    let me = this;
    me.$musicSubscription = me.store.select('music').subscribe({
      next: (value) => {
        console.log('[SUCCESS]', value);
        me.singer = value.singer;
        me.song = value.song;
      },
      error: (error) => {
        console.log('[ERROR]', error);
      },
      complete: () => {
        console.log('[COMPLETE] MUSIC');
      }
    });

  }

  ngOnDestroy(): void {
    let me = this;
    me.$musicSubscription && me.$musicSubscription.unsubscribe();
  }


}
