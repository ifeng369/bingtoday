import { get } from "https";
import { appendFile } from "fs";
import { join } from "path";


const option = {headers:{'X-Forwarded-For':'223.5.5.5'}}
get('https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1',option, (res) => {
    console.log(`Got response: ${res.statusCode}`);
    var str = ""
    res.on("data", (data) => {
        str += data
    })
    res.on("end", () => {
        const json = JSON.parse(str).images[0];
        const saveStr = JSON.stringify({startdate:json.startdate,enddate:json.enddate,url:json.url,title:json.title})
        appendFile('data.json', saveStr+"\r\n",'utf8', function (err) {
            console.log(err)
        })
    })
}).on('error', (e) => {
    console.log(`Got error: ${e.message}`);
});
