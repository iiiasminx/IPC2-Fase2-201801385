import { Component, OnInit } from '@angular/core';

import { NavController } from "@ionic/angular";
import { ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stud-main',
  templateUrl: './stud-main.page.html',
  styleUrls: ['./stud-main.page.scss'],
})
export class StudMainPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  probando(){
    sessionStorage.setItem('usuario','0');
    this.router.navigate(['/']);  
  }

}
