import { get } from "https";
import { appendFile } from "fs";
import { join } from "path";



get('https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1', (res) => {
    console.log(`Got response: ${res.statusCode}`);
    var str = ""
    res.on("data", (data) => {
        str += data
    })
    res.on("end", () => {
        const json = JSON.parse(str).images[0];
        const saveStr = JSON.stringify({startdate:json.startdate,fullstartdate:json.fullstartdate,enddate:json.enddate,url:json.url,title:json.title,copyright:json.copyright})
        appendFile('data.json', saveStr+"\r\n",'utf8', function (err) {
            console.log(err)
        })
    })
}).on('error', (e) => {
    console.log(`Got error: ${e.message}`);
});
