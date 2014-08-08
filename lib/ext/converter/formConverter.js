/*
 * fis
 * http://fis.baidu.com/
 * 2014/8/7
 */

'use strict';

var Converter = require('../../converter.js');
var logger = require('../../logger.js')('FormConverter');
var util = require('util');
var FormData = require('form-data');
var iconv = require('iconv-lite');
var _ = require('underscore');

function FormConverter(){
    Converter.call(this);
}

util.inherits(FormConverter, Converter);

FormConverter.prototype.unpack = function(options){
    //since form unpack rely on http headers, so we don't implement form unpack
    throw new Error('Not Implemented');
};

FormConverter.prototype.pack = function(options, data){
    data = data || {};
    var formData = new FormData();
    //only handle fisrt level key-value
    _.map(data, function(value, key){
        if (_.isString(value)){
            value = iconv.encode(value, options.encoding);
        }
        formData.append(key, value);
    });
    options.headers = options.headers || {};
    options.headers['Content-Type'] =  "multipart/form-data;boundary=" + formData.getBoundary();
    return formData;
};

FormConverter.prototype.getName = function(){
    return 'form';
};

module.exports = FormConverter;
