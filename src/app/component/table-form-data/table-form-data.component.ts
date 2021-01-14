import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-table-form-data',
  templateUrl: './table-form-data.component.html',
  styleUrls: ['./table-form-data.component.scss']
})
export class TableFormDataComponent implements OnInit {

  constructor(private router: ActivatedRoute, private route: Router) {  }

  data: any = []

  ngOnInit(): void {
    if (sessionStorage.getItem("is_reloaded")){
      this.loadFormData('Reloaded');
    } else {
      this.loadFormData('loaded');
      sessionStorage.setItem("is_reloaded", 'true');
    }   
  }

  loadFormData(data: string) {
    var dataForm = this.router.snapshot.queryParams.data;
    var decryptedData = JSON.parse(window.atob(dataForm));
    var result: any = localStorage.getItem('user');
    if(result && result != 'null'){
      this.data = JSON.parse(result);
      data === 'loaded' ? this.data.push(decryptedData) : '';
      localStorage.setItem('user', JSON.stringify(this.data));
    }else{
      data === 'loaded' ? this.data.push(decryptedData) : '';
      localStorage.setItem('user', JSON.stringify(this.data));
    }  
  }

  gotoHomePage() {
    sessionStorage.clear();
    this.route.navigate(['/']);
  }

}
