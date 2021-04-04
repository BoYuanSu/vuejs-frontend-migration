const FormAddMovie = {
  name: 'form-add-movie',
  template: require('./form-add-movie.html'),
  data: function () {
    return {
      fields: [
        {
          name: 'input-title-ch',
          label: 'Title in Chinese',
          value: '',
          type: 'text',
          rules: 'required|min:1|max:50',
          placeholder: '金牌特務',
        },
        {
          name: 'input-title-eng',
          label: 'Title in Englis',
          value: '',
          type: 'text',
          rules: 'required|min:1|max:100|special',
          placeholder: 'Kingsman',
        },
        {
          name: 'input-intro',
          label: 'Intro',
          value: '',
          type: 'text',
          rules: 'required|intro|min:10|max:255',
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
      console.log('🚀 ~ submitHandler');
    },
    reset: function () {
      this.fields.forEach((field) => (field.value = ''));
    },
  },
};

export default FormAddMovie;
