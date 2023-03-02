import { Component, OnInit } from '@angular/core';
import { BcmService } from 'src/app/services/bcm.service';
import { BcmPlayer } from 'src/models/bcm-player';

@Component({
  selector: 'app-better-completions-matter',
  templateUrl: './better-completions-matter.component.html',
  styleUrls: ['./better-completions-matter.component.scss']
})
export class BetterCompletionsMatterComponent implements OnInit {
  playerList: any = null;

  constructor() { }

  ngOnInit(): void {
    
  }

}
