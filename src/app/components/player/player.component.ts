import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BcmService } from 'src/app/services/bcm.service';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
})
export class PlayerComponent implements OnInit {
  id: number | null = null;
  bcmPlayerSummary: any = null;
  rgscSummary: any = null;

  constructor(
    private route: ActivatedRoute,
    private bcmService: BcmService,
    private playerService: PlayerService
  ) {}

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id')!);

    this.bcmService.getBcmPlayer(this.id).subscribe((data) => {
      console.log(data);
      this.bcmPlayerSummary = data;
    });

    this.bcmService.getBcmRgsc(this.id).subscribe((data) => {
      console.log(data);
      this.rgscSummary = data;
    });
  }
}
