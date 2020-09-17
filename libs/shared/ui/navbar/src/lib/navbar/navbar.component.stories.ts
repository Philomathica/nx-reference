/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { NavbarComponent } from './navbar.component';

export default {
  title: 'NavbarComponent',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [],
  },
  component: NavbarComponent,
  props: {},
});
