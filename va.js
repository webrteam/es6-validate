/**
 * Created by likaituan on 18/02/2017.
 */

var verify = require('./verify');
var tip = require('./tip');

module.exports = {
    // 检查整个表单
    chkForm: function (params = {}, chkParams = {}, lang = 'pt') {
        verify.tip = tip[lang];
        for (var key in chkParams) {
            var value = params[key] || '';
            var rule = chkParams[key];
            // console.log({key, value, rule});
            var message = this.chkItem(value, rule, params);
            if (typeof message === 'string') {
                return {success: false, message, key};
            }
        }
        return {
            success: true
        };
    },

    // 检查单项数据
    chkItem: function (value, rule, params) {
        if (rule.allowEmpty && value === '') {
            return true;
        }
        if (rule.extend) {
            for (var k in rule.extend) {
                if (rule.hasOwnProperty(k) === false) {
                    rule[k] = rule.extend[k];
                }
            }
        }
        var message;
        for (var ruleKey in rule) {
            var fun = verify[ruleKey];
            if (fun) {
                var ruleValue = rule[ruleKey];
                message = fun.call(verify, value, rule, ruleValue, params);
                // console.log({value, ruleKey, ruleValue, message});
                if (typeof message === 'string') {
                    break;
                }
            }
        }
        return message;
    },

    limitNumber: function (store, event) {
        event.target.value = event.target.value.replace(/\D/, '');
    }
};
