/**
 * 判断url是否是http或https 
 * @param {string} path
 * @returns {Boolean}
 */
 export function isHttp(url) {
  return url.indexOf('http://') !== -1 || url.indexOf('https://') !== -1
}

/**
 * 判断path是否为外链
 * @param {string} path
 * @returns {Boolean}
 */
 export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}

/**
 * @param {string} url
 * @returns {Boolean}
 */
export function validURL(url) {
  const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return reg.test(url)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

/**
 * @param {string} email
 * @returns {Boolean}
 */
export function validEmail(email) {
  const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return reg.test(email)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function isString(str) {
  if (typeof str === 'string' || str instanceof String) {
    return true
  }
  return false
}

/**
 * @param {Array} arg
 * @returns {Boolean}
 */
export function isArray(arg) {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
  return Array.isArray(arg)
}

/* 验证银行账号*/
export function isvalidateBankCard(rule, value, callback) {
  const reg = /^[0-9]\d{7,29}$/
  if (!value) {
    callback(new Error('请输入银行账号'))
  } else if (!reg.test(value)) {
    callback(new Error('请输入正确的银行账号'))
  } else {
    callback()
  }
}

// 验证可输入数字加小数点后四位
export function numberFilter(val){
  let str = val.replace(/[^\d.]/g, "")
  str.replace(/^./g,"");
  str.replace(/.{2}/g,".");
  str.replace(".","$#$").replace(/./g,"").replace("$#$",".")
  let spotStr = str.indexOf('.') != -1 ? '.' : ''
  let arr = str.split('.')
  if(arr[1] && arr[1].length > 2){
    arr[1] = arr[1].slice(0,2)
  }
  str = `${arr[0]}${spotStr}${arr[1] && arr[1].length > 0 ? arr[1] : ''}`
  return str
}

// 验证可输入正整数
export function numberIntFilter(val){
  let str = val.replace(/[^\d]/g, "")
  return str
}

// 表格代替表单，表格验证触发并返回结果
export function putFormValidation(arr, proxy) {
  return new Promise((resolve, reject) => {
    (async () => {
      let list = []
      for(let i = 0; i < arr.length; i++) {
        const item = proxy.$refs[arr[i]].formValidation()
        let {valid, hints} = await item
        list.push(valid)
      }
      let isTrue = !list.includes(false)
      resolve(isTrue)
    })()
  })
}