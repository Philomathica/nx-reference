/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { CardComponent } from './card.component';

export default {
  title: 'CardComponent',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [],
  },
  component: CardComponent,
  props: {},
});
