import { initializer } from '@fx-consulting/microfrontends';

initializer().then(() => import('./bootstrap'));
