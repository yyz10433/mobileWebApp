/**
 * storage 二次封装
 */

class storage {


  private storage = window.localStorage;

  /**
   * 获取存储
   */
  getStorage(key: string = '') {   
    if (!key) {
      throw new Error('key is undefined');
    }
    const itemVal = this.storage.getItem(key) as any;
    if (!itemVal) {
      return false;
    }
    return itemVal;
  }



  /**
   * 设置存储信息
   */
  setStorage(key: string, value: any) {
    if (!key && !value) {
      throw new Error('please set correct key and value');
    }

    this.storage.setItem(key, value);
    return 'set success';
  }


  /**
   * 移除指定的key
   */
  removeStorage(key: string) {
    if (!key) {
      throw new Error('key is undefined');
    }

    this.storage.removeItem(key);
    return 'remove success';
  }
}



export const localStorage = new storage();
