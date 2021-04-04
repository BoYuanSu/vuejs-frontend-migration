import { ValidationObserver, ValidationProvider, extend } from 'vee-validate';

import { required, min, max } from 'vee-validate/dist/rules';

export default {
  install(Vue) {
    Vue.component('ValidationObserver', ValidationObserver);
    Vue.component('ValidationProvider', ValidationProvider);

    extend('required', {
      ...required,
      message: '必填',
    });

    extend('min', {
      ...min,
      message: '長度至少為 {length} 個字',
    });
    extend('max', {
      ...max,
      message: '長度不可超過 {length} 個字',
    });

    extend('special', (value) => {
      const reg = /[\$\%\^\&\*]+/;
      return !reg.test(value) || '不可包含字元  $, %, ^, &, *';
    });

    extend('intro', (value) => {
      const reg = /^Intro/;
      return reg.test(value) || 'Please start with Intro. e.g. Intro: This is ...';
    });
  },
};
