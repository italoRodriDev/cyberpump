import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { SkeletonListComponent } from './skeleton-list/skeleton-list.component';
import { AnimationListComponent } from './animation-list/animation-list.component';

@NgModule({
  declarations: [
    SkeletonListComponent,
    AnimationListComponent
  ],
  imports: [CommonModule, LazyLoadImageModule],
  exports: [
    SkeletonListComponent,
    AnimationListComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedComponentsModule {}
