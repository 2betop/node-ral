/**
 * @file node-ral
 * @author hefangshi@baidu.com
 * http://fis.baidu.com/
 * 2016/8/18
 */

'use strict';

var ralP = require('./ral.js');
var assert = require('assert');

ralP('REDIS', {
    // 指定SOAP method
    method: 'set',
    data: {
        key: 'foo',
        value: 'bar'
    }
}).then(function (data) {
    console.log(data);
    return ralP('REDIS', {
        // 指定SOAP method
        method: 'get',
        data: {
            key: 'foo',
        }
    }
}).then(function (data) {
    assert.ok(data === 'bar');
    return ralP('REDIS', {
        // 指定SOAP method
        method: 'get',
        data: {
            key: 'foo',
        }
    }
}).then(function (data) {
    assert.ok(data === 'bar');
    return ralP('REDIS', {
        // 指定SOAP method
        method: 'get',
        data: 'foo'
    }
}).then(function (data) {
    assert.ok(data === 'bar');
}).catch(function (err) {
    assert.fail(err, null);
});
