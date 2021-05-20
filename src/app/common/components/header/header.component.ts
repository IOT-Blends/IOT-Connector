import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isUserLoggedIn$!: Observable<any>;
  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.isUserLoggedIn$ = this.commonService.isUserLoggedIn$;
  }

  onLogout() {
    this.commonService.isUserLoggedIn(false);
  }
}
