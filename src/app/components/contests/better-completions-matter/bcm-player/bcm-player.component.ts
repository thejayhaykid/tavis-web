import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BcmService } from 'src/app/services/bcm.service';

@Component({
  selector: 'app-bcm-player',
  templateUrl: './bcm-player.component.html',
  styleUrls: ['./bcm-player.component.scss']
})
export class BcmPlayerComponent implements OnInit {
  id: number | null = null;
  bcmPlayerSummary: any = null;

  constructor(
    private route: ActivatedRoute,
    private bcmService: BcmService
  ) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id')!);
    
    this.bcmService.getBcmPlayer(this.id).subscribe(data => {
      console.log(data);
      this.bcmPlayerSummary = data;
    });
  }

}
