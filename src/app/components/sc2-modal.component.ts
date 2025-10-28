import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sc2-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="sc2-modal-backdrop" (click)="onClose()"></div>
    <div class="sc2-modal-window">
      <button class="sc2-modal-close" (click)="onClose()" aria-label="Закрыть окно">×</button>
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .sc2-modal-backdrop {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0,0,0,0.65);
      z-index: 1000;
    }
    .sc2-modal-window {
      position: fixed;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      min-width: 340px;
      max-width: 90vw;
      background: linear-gradient(180deg, #232a36 0%, #10141a 100%);
      border: 3px solid #3e4a5c;
      border-radius: 14px;
      box-shadow: 0 0 32px 8px #000a, 0 0 0 4px #2e3a4c;
      z-index: 1010;
      padding: 32px 28px 24px 28px;
      color: #e0e6f0;
      font-family: 'EuropeExt', 'Orbitron', Arial, sans-serif;
      text-align: left;
      overflow: auto;
    }
    .sc2-modal-close {
      position: absolute;
      top: 12px; right: 18px;
      background: linear-gradient(180deg, #3e4a5c 0%, #232a36 100%);
      border: 2px solid #6e7a8c;
      border-radius: 50%;
      color: #e0e6f0;
      font-size: 1.6rem;
      width: 36px; height: 36px;
      cursor: pointer;
      box-shadow: 0 2px 8px #000a;
      transition: background 0.2s, box-shadow 0.2s;
    }
    .sc2-modal-close:hover {
      background: #5e6a7c;
      box-shadow: 0 4px 16px #000c;
    }
  `]
})
export class Sc2ModalComponent {
  @Input() open = false;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
