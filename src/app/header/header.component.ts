import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { NavigationItem,Category } from './../models/models';
import { Component,ElementRef,OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('modalTitle') modalTitle!: ElementRef;
  @ViewChild('container',{read: ViewContainerRef,static: true})
  container!: ViewContainerRef;
  navigationList: NavigationItem[] = [
    {
      category: "Thiết bị điện tử",
      subcategories: ["mobiles","laptops"]
    },
    {
      category: "nội thất",
      subcategories: ["chairs","tables"]
    }
  ];
  constructor() {}

  ngOnInit(): void {
    
  }

  openModal(name: string){
    this.container.clear();
    let componentType!: Type<any>;
    if(name === 'login'){
      componentType = LoginComponent;
      this.modalTitle.nativeElement.textContent = 'Nhập thông tin đăng nhập';
    } 
    if(name === 'register'){
      componentType = RegisterComponent;
      this.modalTitle.nativeElement.textContent = 'Nhập thông tin đăng ký';
    } 
    this.container.createComponent(componentType);
  }

}
