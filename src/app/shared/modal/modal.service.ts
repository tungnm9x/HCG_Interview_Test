// import { Injectable, TemplateRef, ViewContainerRef } from '@angular/core';
// import { OverlayConfig } from '@angular/cdk/overlay';

// @Injectable({
//   providedIn: 'root',
// })
// export class ModalService {

//   overlayRef:

//   constructor(private viewContainerRef: ViewContainerRef) {
//     const overlayRef = overlay.create({
//       height: '20vh',
//       width: '80vw',
//       .... // an example of creating an overlay
//     });
//   }

//   open(tpl: TemplateRef<unknown>) {
//     const config = new OverlayConfig({
//       hasBackdrop: true,
//       panelClass: ['modal', 'active'],
//       backdropClass: 'modal-backdrop',
//       scrollStrategy: this.overlay.scrollStrategies.block(),
//     });
//     this.overlayRef = this.overlay.create(config);
//     this.overlayRef.attach(new TemplatePortal(this.tpl, this.viewContainerRef));
//   }

//   close(){
//     this.overlayRef.dispose();
//   }
// }
