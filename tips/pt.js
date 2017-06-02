/**
 * Created by li on 2017/3/16.
 */

var {toFun} = require('./toFun');

// 葡语规则提示
module.exports = toFun({
    empty: '{0} Não pode ser vazio',
    please_input: 'Insira {0}, por favor',
    please_select: 'Escolha {0}, por favor',

    // 数据类型
    number: '{0} Número obrigatório',
    string: '{0} não pode conter espaços',
    word: '{0} deve apenas conter números',
    chinese: '{0} Chinês obrigatório',
    sets: 'O conteúdo deve só conter em {0}',

    // 格式
    number_or_letter: '{0} Usuário deve ser composto apenas de números e letras.',
    number_and_letter: '{0} Inclusão com números e letras obrigatório',
    format: '{0} Formato incorreto',
    invalid: '{0} Inválido',

    // 数字大小
    more_than: '{0} Maior de {1} caracteres obrigatório',
    less_than: '{0} Menos de {2} caracteres obrigatório',
    min: '{0} Mínimo de {1} {2}',
    max: '{0} Máximo de {1} {2}',
    between: '{0} Apenas intervalo entre {1} e {2}',

    // 数字位数
    bit: 'Extenção de número de {0} incorreto',
    minBit: 'Extenção de número de {0} não pode ser menor do que {1} caracteres',
    maxBit: 'Extenção de número de {0} não pode maior do que {1} caracteres',

    // 字符串长度
    len: '{0} Cumprimento incorreto',
    lenRange: '{0} Cuprimento deve ter no mínimo de {1} caracteres e no máximo de {2} caracteres',
    minLen: '{0} Cumprimento não pode ser menor que {1} caracteres',
    maxLen: '{0} Cumprimento não pode ser maior que {1} {2} caracteres',

    // 字节长度
    byte: '{0} only has {1} chinese or {2} english',
    minByte: '{0} cumprimento n {1} chinese or {2} english',
    maxByte: '{0} length cannon more than {1} chinese or {2} english',

    // 日期
    minDate: '{0} não pode ser menor do que {1} dias',
    maxDate: '{0} não pode ser maior do que {1} dias',

    // 密码输入不一致
    // NoConsistent:'{0}A senha de comfirmar deve ser igual com a senha de inserir'
    same: 'A senha inserida deve ser a mesma senha de confirmação',

    // 是否不重复
    diff: 'O {0} atual não pode ser igual com outro {0} digitado da referência'
});
