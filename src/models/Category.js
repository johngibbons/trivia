import { Record, Map } from 'immutable'

const Category = Record({
  id: undefined,
  name: '',
  game: undefined,
  nominees: new Map(),
  value: 0
});

export default Category;
