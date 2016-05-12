var CronJob = require('cron').CronJob;
var moment = require('moment');
var request = require('request');

// IRKitServiceまわり
var endpoint = 'http://192.168.3.102:8080/IRKitService/api/send/';
var eight = endpoint + 'tv_eight';
var blue = endpoint + 'tv_blue';
var red = endpoint + 'tv_red';
var green = endpoint + 'tv_green';
var yellow = endpoint + 'tv_yellow';

// 5:57
first = new CronJob({
    cronTime: '*/10 57 5 * * *', // 5:57に10秒ごと
    start: true,
    timeZone: 'Asia/Tokyo',
    onTick: function(){
        req(endpoint + 'tv_pow');
        req(eight);
        var hand = Math.floor( Math.random() * 3 ); // 0~2の乱数
        jyanken(hand);
    }
});
// 6:57
second= new CronJob({
    cronTime: '*/10 57 6 * * *', // 6:57に10秒ごと
    start: true,
    timeZone: 'Asia/Tokyo',
    onTick: function(){
        var hand = Math.floor( Math.random() * 3 ); // 0~2の乱数
        jyanken(hand);
    }
});
// 7:24
third = new CronJob({
    cronTime: '*/10 24 7 * * *', // 7:24に10秒ごと
    start: true,
    timeZone: 'Asia/Tokyo',
    onTick: function(){
        var hand = Math.floor( Math.random() * 3 ); // 0~2の乱数
        jyanken(hand);
    }
});
// 7:57
fourth = new CronJob({
    cronTime: '*/10 57 7 * * *', // 7:57に10秒ごと
    start: true,
    timeZone: 'Asia/Tokyo',
    onTick: function(){
        var hand = Math.floor( Math.random() * 3 ); // 0~2の乱数
        jyanken(hand);
    }
});

function jyanken(hand){
    switch(hand){
    case 0:
        req(blue);
        break;
    case 1:
        req(red);
        break;
    case 2:
        req(green);
        break;
    }
}

// get request
function req(url){
    request(url, function(err, res, body){
        if(!err && res.statusCode == 200){
            console.log(url);
        }
    });
}
        
