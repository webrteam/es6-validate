/**
 * Created by likaituan on 16/03/2017.
 */

var {toFun} = require('./toFun');

// 中文规则提示
module.exports = toFun({
    empty: '{0}不能为空',
    please_input: '请输入 {0}',
    please_select: '请选择 {0}',

    // 数据类型
    number: '{0}必须为有效数字',
    string: '{0}不能包含空格',
    word: '{0}只能是有效字符',
    chinese: '{0}必须是中文',
    sets: '{0}的值只能是{1}之一',

    // 格式
    number_or_letter: '{0}不能包含除数字或字母或下划线外的字符',
    number_and_letter: '{0}必须是数字和字母的组合',
    format: '{0}格式不对',
    invalid: '{0} 无效',

    // 数字大小
    more_than: '{0}必须大于{1}',
    less_than: '{0}必须小于{2}',
    min: '{0}不能小于{1}{2}',
    max: '{0}不能大于{1}{2}',
    between: '{0}只能在{1}和{2}之间',

    // 数字位数
    bit: '{0}位数不对',
    minBit: '{0}位数不能小于{1}位',
    maxBit: '{0}位数不能大于{1}位',

    // 字符串长度
    len: '{0}长度应为{1}',
    lenRange: '{0} 长度必须在 {1} 和 {2} 之间',
    minLen: '{0}长度不能小于{1}{2}',
    maxLen: '{0}长度不能大于{1}{2}',

    // 字节长度
    byte: '{0}只能是{1}个中文或{2}个英文',
    minByte: '{0}长度不能小于{1}个中文或{2}个英文',
    maxByte: '{0}长度不能大于{1}个中文或{2}个英文',

    // 日期
    minDate: '{0}不能小于{1}天',
    maxDate: '{0}不能大于{1}天',

    // 是否不一致
    diff: '两次输入的{0}一致',
    // 是否一致
    same: '两次输入的{0}不一致'
});
