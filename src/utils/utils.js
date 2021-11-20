export function getSubStr(str) {
    if (!str) return ''
    console.log(str);
    var subStr1 = str.substr(0, 4);
    var subStr2 = str.substr(str.length - 4, 4);
    var subStr = subStr1 + '...' + subStr2;
    return subStr;
}
