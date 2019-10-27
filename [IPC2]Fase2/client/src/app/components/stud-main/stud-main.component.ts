import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stud-main',
  templateUrl: './stud-main.component.html',
  styleUrls: ['./stud-main.component.css']
})
export class StudMainComponent implements OnInit {

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  probando(){
    sessionStorage.setItem('usuario','0');
    this.router.navigate(['/']);  
  }
}
