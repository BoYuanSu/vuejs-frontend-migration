import Vue from 'vue';
import MovieItem from './components/movie-item';
import FormGroup from './components/form-group';
import FormAddMovie from './components/form-add-movie';

import VeeValidate from './plugins/vee-validate';
import service from './plugins/service';

import * as API from './api';

(function () {
  const data = {
    title: 'My Movie List',
    listMovies: [
      {
        ch_name: '載入中...',
        eng_name: 'loading...',
        intro: '',
      },
    ],
  };

  Vue.prototype.$service = service;

  Vue.use(VeeValidate);

  Vue.component(FormGroup.name, FormGroup);

  new Vue({
    el: '#app',
    data: data,
    components: {
      MovieItem,
      FormAddMovie,
    },
    mounted: function () {
      this.GET_MOVIES();
    },
    methods: {
      GET_MOVIES: function () {
        const res = this.$service({
          ...API.Movie_List,
        })
          .then((res) => {
            this.listMovies = res.data
            return res.data;
          })
          .catch((error) => {
            return [];
          });
      },
    },
  });
})();
