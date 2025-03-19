import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: any = {}; 
  @Output() remove = new EventEmitter<number>(); 
  likes: number = 0; 

  likeProduct() {
    this.likes++; 
  }

  share(productLink: string) {
    const text = `Посмотри этот товар: ${productLink}`;
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(text)}`;
    window.open(telegramUrl, '_blank');
  }

  deleteProduct() {
    this.remove.emit(this.product.id);
  }
}
