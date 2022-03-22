import {User} from "../_models";
import {UserService} from "../_services";
import {Component, Input} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  templateUrl: './home.component.html',
})

export class HomeComponent {
    loading = false;
    users: User[];
    @Input() orderedProducts: any[];
    orderReady: boolean = false;

    constructor(private userService: UserService, private router: Router) { }

    serveOrder() {
      console.log(this.orderReady + "Order served");
      console.log("redirect to bill page");
      this.router.navigate(['/bill']);
    }

    ngOnInit() {
    }
}
