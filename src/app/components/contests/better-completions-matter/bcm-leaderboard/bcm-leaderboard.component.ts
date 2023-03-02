import { Component, OnInit } from '@angular/core';
import { BcmService } from 'src/app/services/bcm.service';

@Component({
  selector: 'app-bcm-leaderboard',
  templateUrl: './bcm-leaderboard.component.html',
  styleUrls: ['./bcm-leaderboard.component.scss']
})
export class BcmLeaderboardComponent implements OnInit {

  constructor(private bcmService: BcmService) { }

  public leaderboard: any = null;
  public lastScan: Date | null = null;

  ngOnInit(): void {
    this.bcmService.getBcmLeaderboardList().subscribe(data => {
      console.log(data);
      this.leaderboard = data;
      this.lastScan = this.leaderboard![0].player.lastSync; //TODO: improve this
    })
  }
}
