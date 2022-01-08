import {
  MapTo
} from '@adobe/aem-angular-editable-components';
import { Component, Input, OnInit } from '@angular/core';

const CheckoutEditConfig = {
  emptyLabel: 'Checkout Component',
  isEmpty: cqModel =>
    !cqModel || !cqModel.title || cqModel.title.trim().length < 1
};

@Component({
  selector: 'app-checkout',
  styleUrls: ['./checkout.component.css'],
  templateUrl: './checkout.component.html'
})
export class CheckoutComponent implements OnInit{
    @Input() title: string;

      constructor() { }

      ngOnInit(): void {
        console.log('inside ngOnInit from checkout component');
      }
}

MapTo('eatonspa/components/checkout')(CheckoutComponent,CheckoutEditConfig);