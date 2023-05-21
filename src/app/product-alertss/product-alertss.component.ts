import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alertss',
  templateUrl: './product-alertss.component.html',
  styleUrls: ['./product-alertss.component.css'],
})
export class ProductAlertssComponent {
  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();
}
