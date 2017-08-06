import {Component} from '@angular/core';

@Component({
  selector: 'event-list',
  styleUrls: ['./event-list.component.css'],
  templateUrl: './event-list.component.html'
})
export class EventListComponent {
    slogan: string = 'Show no arrogance and lower your voice.';
    showingSlogan: boolean = false;
    showSlogan():void {
        this.showingSlogan = !this.showingSlogan;
    }
}
