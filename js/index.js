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
        ch_name: 'movie_info.ch_name',
        eng_name: 'movie_info.ch_name',
        intro: 'movie_info.ch_name',
      },
      {
        ch_name: 'movie_info.ch_name',
        eng_name: 'movie_info.ch_name',
        intro: 'movie_info.ch_name',
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
        .then(res=>{
          return res.data
        })
        .catch((error) => {
          return [];
        });
        console.log('🚀 ~ GET_MOVIES ~ res', res);
      },
    },
  });
})();
