/*
 * fis
 * http://fis.baidu.com/
 * 2014/8/8
 */

'use strict';

var http = require('http');
var url = require('url');

module.exports.bookService = function(port){
    return http.createServer(function (request, response) {
        var info = url.parse(request.url);
        var pathname =info.pathname;
        if (pathname === '/error'){
            response.writeHead(503, {
                'Content-Type': 'text/plain'
            });
            response.end();
        }else if (pathname === '/404'){
            response.writeHead(404, {
                'Content-Type': 'text/plain'
            });
            response.write('404');
            response.end();
        }else{
            response.writeHead(200, {
                'Content-Type': 'application/json'
            });
            response.write(JSON.stringify({

            }));
            response.end();
        }
    }).listen(port);
};