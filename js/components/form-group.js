const FormGroup = {
  name: 'form-group',
  template: require('./form-group.html'),
  props: {
    name: { type: String, required: true },
    label: { type: String, required: true },
    value: { type: String, required: true },
    type: { type: String, required: true },
    rules: { type: String, default: '' },
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

export default FormGroup;
