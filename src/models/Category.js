import { Record, Map } from 'immutable'

const Category = Record({
  id: undefined,
  name: '',
  game: undefined,
  nominees: new Map(),
  point_value: undefined,
  winner: undefined
});

export default Category;
