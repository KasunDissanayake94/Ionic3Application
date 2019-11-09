import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../../service/user-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  searchName: string ;
  items: any;

  constructor(private userService: UserServiceService) { }

  ngOnInit() {
  }

  searchMusicTrack(key: any) {
    this.searchName  = key.target.value;
    this.userService.getMusicTrackByName(this.searchName).subscribe( res => {
      this.items = res.results.trackmatches.track;
      console.log(this.items);
    });


  }
}
