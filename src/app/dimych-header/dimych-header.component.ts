import { NgOptimizedImage } from '@angular/common'
import {Component, OnInit} from '@angular/core';

import { CronJob } from 'cron';

@Component({
  selector: 'app-dimych-header',
  templateUrl: './dimych-header.component.html',
  styleUrls: ['./dimych-header.component.css']
})
export class DimychHeaderComponent implements OnInit {

  dimychPukanState = {
    temperature: 36
  }

  job : any;

  ngOnInit() {
    // fetch('https://cors-anywhere.herokuapp.com/https://support.activision.com/onlineservices.Call%20of%20Duty:%20Modern%20Warfare%20II.html').then(response => {
    //   console.log(response);
    //   const readValue = response.text();
    //   console.log(readValue)
    // })

    // Set up fake pukan temperature progression
    this.job = new CronJob(
      // '5,10,15,20,25,30,35,40,45,50,55,0 * * * * *',
      '0,1,5,17,21,29,34,37,38,39,41,50,55 * * * * *',
      () => this.changePukanState.call(this),
      null,
      true
    );
    console.log('Cron job should be configured...')
  }

  private changePukanState() {
    // random_number * 100 + 36 - min t = 36, max t = 135
    this.dimychPukanState.temperature = Math.floor(Math.random() * 100 + 36);
    console.log('New Dimych temperature: ' + this.dimychPukanState.temperature);

    // modify pukan indicator
  }
}

