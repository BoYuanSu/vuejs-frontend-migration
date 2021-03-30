(function () {
  const MovieItem = {
    name: 'movie-item',
    template: '#movie-item',
    props: {
      item: { type: Object, required: true },
    },
  };
  const FormGroup = {
    name: 'form-group',
    template: '#form-group',
    props: {
      name: { type: String, required: true },
      label: { type: String, required: true },
      value: { type: String, required: true },
      type: { type: String, required: true },
      placeholder: { type: String, default: '' },
    },
    computed: {
      observeValue: {
        get: function () {
          return this.value;
        },
        set: function (value) {
          this.$emit('input', value);
        },
      },
    },
  };
  const FormAddMovie = {
    name: 'form-add-movie',
    template: '#form-add-movie',
    data: function () {
      return {
        fields: [
          {
            name: 'input-title-ch',
            label: 'Title in Chinese',
            value: '',
            type: 'text',
            placeholder: '金牌特務',
          },
          {
            name: 'input-title-eng',
            label: 'Title in Englis',
            value: '',
            type: 'text',
            placeholder: 'Kingsman',
          },
          {
            name: 'input-intro',
            label: 'Intro',
            value: '',
            type: 'text',
            placeholder: '是一部於2015年上映，由英國、美國合拍的諜報喜劇動作片...',
          },
        ],
      };
    },
    computed: {
      formData: function () {
        return this.fields.reduce((data, field) => {
          data[field.name] = field.value;
          return data;
        }, {});
      },
    },
    methods: {
      submitHandler: function () {
        console.log('🚀 ~ submitHandler', this.formData);
        this.reset()
      },
      reset: function () {
        this.fields.forEach((field) => (field.value = ''));
      },
    },
  };
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
  Vue.component(MovieItem.name, MovieItem);
  Vue.component(FormGroup.name, FormGroup);
  Vue.component(FormAddMovie.name, FormAddMovie);

  new Vue({
    el: '#app',
    data: data,
  });
})();
