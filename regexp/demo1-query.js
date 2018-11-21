
//获取location.search某字段

class Url {
  constructor(url) {
    if (typeof url !== 'string'){
      throw new TypeError('url must be a string');
    }
    this.query = url.split('?')[1];
  }

  getQuery() {
    if (this.query){
      return '?' + this.query;
    } else {
      return '';
    }
  }

  getQueryValueByKey(key) {
    let re = new RegExp('(?:^|&)'+ key + '=(.*?)(?:&|$)', 'ig');
    let query = this.query;
    let result = re.exec(query);

    if (result) {
      return result[1];
    } else {
      return result;
    }
  }

  getKeys() {
    let re = /([^=]+)=(?:.*?)(?:&|$)/g;
    let query = this.query;
    let keys = new Set();
    for(; ;){
      let key = re.exec(query);
      if (!key) {
        break;
      }
      keys.add(key[1]);
    }

    return Array.from(keys);
  }
}

let url = 'https://www.google.com/search?num=20&newwindow=1&source=hp&ei=w9NtWuvaLMvYzgLTsJOAAQ&q=%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F&oq=%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F&gs_l=psy-ab.3...2389.10619.0.10906.27.19.0.0.0.0.0.0..0.0....0...1.1j4.64.psy-ab..27.0.0.0...0.bwOMMJGspws&source=1234';

let urlObj = new Url(url);
console.log(urlObj.getQuery())
console.log(urlObj.getKeys())
console.log(urlObj.getQueryValueByKey('source'))