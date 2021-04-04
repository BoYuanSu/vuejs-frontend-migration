const MovieItem = {
  name: 'movie-item',
  template: require('./movie-item.html'),
  props: {
    item: { type: Object, required: true },
  },
};

export default MovieItem;
