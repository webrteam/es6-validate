/**
 * Created by likaituan on 16/03/2017.
 */

module.exports = {
    // 检查是否为空
    noEmpty: function (value, rule) {
        return value === '' && this.tip.please_input(rule.title);
    },

    // 检查是否已选择
    needSelect: function (value, rule) {
        return value === '' && this.tip.please_select(rule.title);
    },

    // 检查是否纯数字
    number: function (value, rule) {
        return /\D/.test(value) && this.tip.number(rule.title);
    },

    // 检查是否字符
    string: function (value, rule) {
        return /^.+$/.test(value) === false && this.tip.string(rule.title);
    },

    // 检查是否单词
    word: function (value, rule) {
        return /^\w+$/.test(value) === false && this.tip.word(rule.title);
    },

    // 检查是否中文
    chinese: function (value, rule) {
        return /^[\u4e00-\u4fa5]$/.test(value) === false && this.tip.word(rule.title);
    },

    // 检查字符长度是否是某个固定长度
    len: function (value, rule, ruleValue) {
        return value.length !== ruleValue && this.tip.len(rule.title, ruleValue);
    },

    // 检查字符长度是否在某个区间
    lenRange: function (value, rule, ruleValue) {
        var [len1, len2] = ruleValue;
        if (value.length < len1 || value.length > len2) {
            return this.tip.lenRange(rule.title, len1, len2);
        }
    },

    // 检查是否在集合中
    sets: function (value, rule, ruleValue) {
        return ruleValue.includes(value) === false && this.tip.sets(rule.title, ruleValue.join(','));
    },

    // 检查格式是否正确
    re: function (value, rule, ruleValue) {
        return ruleValue.test(value) === false && this.tip.format(rule.title);
    },

    // 检查与参数中某个值是否相同
    same: function (value, rule, ruleValue, params) {
        return params[ruleValue] !== value && this.tip.same(rule.title, rule.title2);
    },

    // 检查与参数中某个值是否不相同
    diff: function (value, rule, ruleValue, params) {
        return params[ruleValue] === value && this.tip.diff(rule.title, rule.title2);
    },

    // 检查其它 (ruleValue类型为function)
    other: function (value, rule, ruleValue, params) {
        var message = ruleValue.call(this, value, rule, params);
        if (message === true) {
            return true;
        }
        if (typeof message === 'function') {
            message = message(rule.title);
        }
        return message || ruleValue.tip || this.tip.invalid(rule.title);
    }
};
