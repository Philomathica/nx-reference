import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationActionTiming, routerReducer, StoreRouterConnectingModule, DEFAULT_ROUTER_FEATURENAME } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(DEFAULT_ROUTER_FEATURENAME, routerReducer, { initialState: {} }),
    StoreRouterConnectingModule.forRoot({ navigationActionTiming: NavigationActionTiming.PostActivation }),
  ],
})
export class SharedCustomRouterDataAccessModule {}
