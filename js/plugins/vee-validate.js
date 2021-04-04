import { ValidationObserver, ValidationProvider, extend } from 'vee-validate';

import { required, max } from 'vee-validate/dist/rules';

export default {
  install(Vue) {
    Vue.component('ValidationObserver', ValidationObserver);
    Vue.component('ValidationProvider', ValidationProvider);

    extend('required', {
      ...required,
      message: '必填',
    });
  },
};
