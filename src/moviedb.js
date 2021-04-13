import movieDB from "moviedb";
const mdb = movieDB("a36aec7af913a76e6a05f68e2d9d8d0b");

export default class MovieDB {
  static searchMulti(query) {
    return new Promise((resolve, reject) => {
      return mdb.searchMulti({ query }, (err, res) =>
        res ? resolve(res) : reject(err)
      );
    });
  }
}
