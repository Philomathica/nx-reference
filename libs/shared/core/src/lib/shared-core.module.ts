import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { PreloadAllModules, RouterModule } from '@angular/router';

import { SharedCustomRouterDataAccessModule } from '@nx-reference/shared/custom-router/data-access';

import { extModules } from './build-specifics';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled', preloadingStrategy: PreloadAllModules }),
    StoreModule.forRoot(
      {},
      {
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
          strictStateSerializability: true,
          strictActionSerializability: true,
          strictActionWithinNgZone: true,
          strictActionTypeUniqueness: true,
        },
      },
    ),
    SharedCustomRouterDataAccessModule,
    extModules,
  ],
  exports: [RouterModule],
})
export class SharedCoreModule {}
