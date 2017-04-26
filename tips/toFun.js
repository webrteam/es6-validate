/**
 * Created by likaituan on 16/03/2017.
 */

exports.toFun = function (tips) {
    var funList = {};
    for (var key in tips) {
        funList[key] = exports.getFun(key, tips[key]);
    }
    return funList;
};

exports.getFun = function (key, val) {
    return function (...args) {
        // var args = Array.from(arguments);
        return val.replace(/\{(\d+)\}/g, (_, n) => {
            return args[n];
        });
    };
};
