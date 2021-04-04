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
    listMovies: [],
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
      ADD_MOVIE: function (movie) {
        this.listMovies.splice(0, 0, movie);
      },
      GET_MOVIES: function () {
        const res = this.$service({
          ...API.Movie_List,
        })
          .then((res) => {
            this.listMovies = res.data;
            return res.data;
          })
          .catch((error) => {
            return [];
          });
      },
    },
  });
})();
