import http from 'http';
import date from "./date"
import getURL from "./getURL"
http.createServer(function (req,res){
    res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
    res.write(date()+ "<br>");
    res.write(getURL.getPath(req)+"<br>")
    res.write(getURL.getParamsURL(req)+"<br>")
    res.end('Hello KTPM0121, chúc bạn thành công với nodejs');
}).listen(8080);
