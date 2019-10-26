import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css']
})
export class AdminMainComponent implements OnInit {

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  probando(){
    sessionStorage.setItem('usuario','0');
    this.router.navigate(['/']);  
  }

}
