import { Component, OnInit } from '@angular/core';

import { NavController } from "@ionic/angular";
import { ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aux-main',
  templateUrl: './aux-main.page.html',
  styleUrls: ['./aux-main.page.scss'],
})
export class AuxMainPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  probando(){
    sessionStorage.setItem('usuario','0');
    this.router.navigate(['/']);  
  }
}
