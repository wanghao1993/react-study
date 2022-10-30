import React from 'react'
import MovieItem from './movieitem'
const hotMovie = [
    {
      "bingeWatch": 0,
      "boxInfo": "上映31天，累计票房145975万",
      "cat": "剧情,战争",
      "civilPubSt": 0,
      "comingTitle": "9月30日 周五",
      "desc": "主演:张译,王俊凯,殷桃",
      "dir": "饶晓志",
      "dur": 137,
      "effectShowNum": 0,
      "followst": 0,
      "fra": "美国,加拿大,澳大利亚,新西兰,英国,爱尔兰,新加坡,巴基斯坦,荷兰,比利时,卢森堡,中国香港,中国澳门",
      "frt": "2022-10-21,2022-10-21,2022-10-27,2022-10-27,2022-10-27,2022-10-27,2022-10-28,2022-10-28,2022-10-28,2022-10-28,2022-10-28,2022-10-28,2022-10-28",
      "globalReleased": true,
      "haspromotionTag": false,
      "headLineShow": false,
      "id": 1224712,
      "img": "https://p0.pipi.cn/mmdb/25bfd6ddb53c7e5015d23c5bc24d876c03d41.jpg?imageMogr2/thumbnail/2500x2500%3E",
      "isRevival": false,
      "late": false,
      "localPubSt": 0,
      "mark": false,
      "mk": 9.6,
      "movieType": 0,
      "nm": "万里归途",
      "pn": 235,
      "preSale": 0,
      "preShow": false,
      "proScore": 0,
      "proScoreNum": 0,
      "pubDate": 1664467200000,
      "pubDesc": "2022-09-30 18:00中国大陆上映",
      "pubShowNum": 0,
      "recentShowDate": 1667059200000,
      "recentShowNum": 0,
      "rt": "2022-09-30",
      "sc": 9.6,
      "scm": "",
      "scoreLabel": "猫眼购票评分",
      "showCinemaNum": 202,
      "showInfo": "今天202家影院放映2886场",
      "showNum": 2886,
      "showStateButton": {
        "color": "#F03D37",
        "content": "购票",
        "onlyPreShow": false
      },
      "showTimeInfo": "2022-09-30上映",
      "showst": 3,
      "snum": 370735,
      "star": "张译,王俊凯,殷桃",
      "totalShowNum": 7251,
      "ver": "IMAX 2D/杜比影院 2D/中国巨幕2D/CINITY 2D/2D",
      "videoId": 489966,
      "videoName": "《万里归途》抉择版预告，张译“失约”家人万茜逆行踏上撤侨路",
      "videourl": "https://vod.pipi.cn/fec9203cvodtransbj1251246104/74f1e8af387702306416447219/v.f42906.mp4",
      "vnum": 16,
      "vodPlay": false,
      "wish": 319610,
      "wishst": 0
    },
    {
      "bingeWatch": 0,
      "boxInfo": "上映52天，累计票房49350万",
      "cat": "喜剧,剧情",
      "civilPubSt": 0,
      "comingTitle": "9月9日 周五",
      "desc": "主演:马丽,常远,魏翔",
      "dir": "张栾",
      "dur": 111,
      "effectShowNum": 0,
      "followst": 0,
      "fra": "中国香港,中国澳门,中国香港,中国澳门",
      "frt": "2022-10-01 00:00:00,2022-10-01 00:00:00,2022-10-06 00:00:00,2022-10-06 00:00:00",
      "globalReleased": true,
      "haspromotionTag": false,
      "headLineShow": false,
      "id": 1335230,
      "img": "https://p0.pipi.cn/mmdb/25bfd65133951bd7c350c83d1c59b6c75a0cb.jpg?imageMogr2/thumbnail/2500x2500%3E",
      "isRevival": false,
      "late": false,
      "localPubSt": 0,
      "mark": false,
      "mk": 9.1,
      "movieType": 0,
      "nm": "哥，你好",
      "pn": 117,
      "preSale": 0,
      "preShow": false,
      "proScore": 0,
      "proScoreNum": 0,
      "pubDate": 1662652800000,
      "pubDesc": "2022-09-09 12:00中国大陆上映",
      "pubShowNum": 0,
      "recentShowDate": 1667059200000,
      "recentShowNum": 0,
      "rt": "2022-09-09",
      "sc": 9.1,
      "scm": "金牌人气喜剧阵容 感动治愈",
      "scoreLabel": "猫眼购票评分",
      "showCinemaNum": 180,
      "showInfo": "今天180家影院放映928场",
      "showNum": 928,
      "showStateButton": {
        "color": "#F03D37",
        "content": "购票",
        "onlyPreShow": false
      },
      "showTimeInfo": "2022-09-09上映",
      "showst": 3,
      "snum": 121784,
      "star": "马丽,常远,魏翔",
      "totalShowNum": 2399,
      "ver": "IMAX 2D/中国巨幕2D/CINITY 2D/2D",
      "videoId": 489777,
      "videoName": "《哥，你好》今日上映曝终极预告 合家欢乐迎中秋",
      "videourl": "https://vod.pipi.cn/fec9203cvodtransbj1251246104/3ebbc90a387702305762746101/v.f42905.mp4",
      "vnum": 15,
      "vodPlay": false,
      "wish": 436760,
      "wishst": 0
    },
    {
      "bingeWatch": 0,
      "boxInfo": "上映30天，累计票房7794万",
      "cat": "喜剧,动画,冒险",
      "civilPubSt": 0,
      "comingTitle": "10月1日 周六",
      "desc": "主演:鞠萍,董浩,陈怡",
      "dir": "何澄,刘可欣",
      "dur": 81,
      "effectShowNum": 0,
      "followst": 0,
      "globalReleased": true,
      "haspromotionTag": false,
      "headLineShow": false,
      "id": 1475162,
      "img": "https://p0.pipi.cn/mmdb/25bfd65187a923be12b8607870b84d901af50.jpg?imageMogr2/thumbnail/2500x2500%3E",
      "isRevival": false,
      "late": false,
      "localPubSt": 0,
      "mark": false,
      "mk": 9.2,
      "movieType": 0,
      "nm": "新大头儿子和小头爸爸5：我的外星朋友",
      "pn": 43,
      "preSale": 0,
      "preShow": false,
      "proScore": 0,
      "proScoreNum": 0,
      "pubDate": 1664553600000,
      "pubDesc": "2022-10-01 08:00中国大陆上映",
      "pubShowNum": 0,
      "recentShowDate": 1667059200000,
      "recentShowNum": 0,
      "rt": "2022-10-01",
      "sc": 9.2,
      "scm": "全家看大头 点亮中国孩子航天梦",
      "scoreLabel": "猫眼购票评分",
      "showCinemaNum": 173,
      "showInfo": "今天173家影院放映349场",
      "showNum": 349,
      "showStateButton": {
        "color": "#F03D37",
        "content": "购票",
        "onlyPreShow": false
      },
      "showTimeInfo": "2022-10-01上映",
      "showst": 3,
      "snum": 16612,
      "star": "鞠萍,董浩,陈怡",
      "totalShowNum": 462,
      "ver": "2D",
      "videoId": 490015,
      "videoName": "电影《新大头儿子5》终极预告 国庆太空相见 欢乐励志共圆航天梦",
      "videourl": "https://vod.pipi.cn/fec9203cvodtransbj1251246104/ec60681b387702306557683169/v.f42905.mp4",
      "vnum": 13,
      "vodPlay": false,
      "wish": 112166,
      "wishst": 0
    },
    {
      "bingeWatch": 0,
      "boxInfo": "上映31天，累计票房20180万",
      "cat": "剧情",
      "civilPubSt": 0,
      "comingTitle": "9月30日 周五",
      "desc": "主演:李冰冰,冯绍峰,黄晓明",
      "dir": "陈国辉",
      "dur": 97,
      "effectShowNum": 0,
      "followst": 0,
      "globalReleased": true,
      "haspromotionTag": false,
      "headLineShow": false,
      "id": 1438600,
      "img": "https://p0.pipi.cn/mmdb/25bfd6ddb53338925739ddde572ed1be162d4.jpg?imageMogr2/thumbnail/2500x2500%3E",
      "isRevival": false,
      "late": false,
      "localPubSt": 0,
      "mark": false,
      "mk": 9.3,
      "movieType": 0,
      "nm": "平凡英雄",
      "pn": 81,
      "preSale": 0,
      "preShow": false,
      "proScore": 0,
      "proScoreNum": 0,
      "pubDate": 1664467200000,
      "pubDesc": "2022-09-30 14:00中国大陆上映",
      "pubShowNum": 0,
      "recentShowDate": 1667059200000,
      "recentShowNum": 0,
      "rt": "2022-09-30",
      "sc": 9.3,
      "scm": "",
      "scoreLabel": "猫眼购票评分",
      "showCinemaNum": 192,
      "showInfo": "今天192家影院放映774场",
      "showNum": 774,
      "showStateButton": {
        "color": "#F03D37",
        "content": "购票",
        "onlyPreShow": false
      },
      "showTimeInfo": "2022-09-30上映",
      "showst": 3,
      "snum": 33454,
      "star": "李冰冰,冯绍峰,黄晓明",
      "totalShowNum": 2046,
      "ver": "IMAX 2D/杜比影院 2D/中国巨幕2D/CINITY 2D/2D",
      "videoId": 490030,
      "videoName": "电影《平凡英雄》今日正式上映 李冰冰冯绍峰争分夺秒上演极限营救",
      "videourl": "https://vod.pipi.cn/fec9203cvodtransbj1251246104/9622113a387702306597347167/v.f42905.mp4",
      "vnum": 12,
      "vodPlay": false,
      "wish": 31951,
      "wishst": 0
    },
    {
      "bingeWatch": 0,
      "boxInfo": "上映87天，累计票房67680万",
      "cat": "动作,科幻,冒险",
      "civilPubSt": 0,
      "comingTitle": "8月5日 周五",
      "desc": "主演:古天乐,刘青云,刘嘉玲",
      "dir": "吴炫辉",
      "dur": 99,
      "effectShowNum": 0,
      "followst": 0,
      "fra": "中国香港,香港国际电影节",
      "frt": "2022-08-25,2022-08-18",
      "globalReleased": true,
      "haspromotionTag": false,
      "headLineShow": false,
      "id": 249033,
      "img": "https://p0.pipi.cn/mmdb/25bfd6dd0300fa7a35f2aa050da82ba12c344.jpg?imageMogr2/thumbnail/2500x2500%3E",
      "isRevival": false,
      "late": false,
      "localPubSt": 0,
      "mark": false,
      "mk": 9.1,
      "movieType": 0,
      "nm": "明日战记",
      "pn": 112,
      "preSale": 0,
      "preShow": false,
      "proScore": 0,
      "proScoreNum": 0,
      "pubDate": 1659628800000,
      "pubDesc": "2022-08-05 10:00中国大陆上映",
      "pubShowNum": 0,
      "recentShowDate": 1667059200000,
      "recentShowNum": 0,
      "rt": "2022-08-05",
      "sc": 9.1,
      "scm": "古天乐诚意监制华语首部机甲科幻",
      "scoreLabel": "猫眼购票评分",
      "showCinemaNum": 84,
      "showInfo": "今天84家影院放映201场",
      "showNum": 201,
      "showStateButton": {
        "color": "#F03D37",
        "content": "购票",
        "onlyPreShow": false
      },
      "showTimeInfo": "2022-08-05上映",
      "showst": 3,
      "snum": 372241,
      "star": "古天乐,刘青云,刘嘉玲",
      "totalShowNum": 547,
      "ver": "IMAX 2D/杜比影院 2D/中国巨幕2D/CINITY 2D/2D/4DX/全景声",
      "videoId": 489194,
      "videoName": "《明日战记》终极预告 古天乐刘青云并肩作战营救末世",
      "videourl": "https://vod.pipi.cn/fec9203cvodtransbj1251246104/d8c98a0b387702304105588630/v.f42905.mp4",
      "vnum": 24,
      "vodPlay": false,
      "wish": 371844,
      "wishst": 0
    },
    {
      "bingeWatch": 0,
      "boxInfo": "上映30天，累计票房3042万",
      "cat": "奇幻,冒险,动画",
      "civilPubSt": 0,
      "comingTitle": "10月1日 周六",
      "desc": "主演:依诺,林浪,温池禹",
      "dir": "蔡尚铭,陈思琳",
      "dur": 80,
      "effectShowNum": 0,
      "followst": 0,
      "globalReleased": true,
      "haspromotionTag": false,
      "headLineShow": false,
      "id": 1322292,
      "img": "https://p0.pipi.cn/mmdb/25bfd6515bfddd0fafd7c3dd3050c2bd8ef10.jpg?imageMogr2/thumbnail/2500x2500%3E",
      "isRevival": false,
      "late": false,
      "localPubSt": 0,
      "mark": false,
      "mk": 0,
      "movieType": 0,
      "nm": "我是霸王龙",
      "pn": 124,
      "preSale": 0,
      "preShow": false,
      "proScore": 0,
      "proScoreNum": 0,
      "pubDate": 1664553600000,
      "pubDesc": "2022-10-01 10:00中国大陆上映",
      "pubShowNum": 0,
      "recentShowDate": 1667059200000,
      "recentShowNum": 0,
      "rt": "2022-10-01",
      "sc": 0,
      "scm": "",
      "scoreLabel": "暂无评分",
      "showCinemaNum": 115,
      "showInfo": "今天115家影院放映188场",
      "showNum": 188,
      "showStateButton": {
        "color": "#F03D37",
        "content": "购票",
        "onlyPreShow": false
      },
      "showTimeInfo": "2022-10-01上映",
      "showst": 3,
      "snum": 7047,
      "star": "依诺,林浪,温池禹",
      "totalShowNum": 197,
      "ver": "3D/2D",
      "videoId": 490132,
      "videoName": "电影《我是霸王龙》全国热映中，欢迎来到恐龙世界",
      "videourl": "https://vod.pipi.cn/fec9203cvodtransbj1251246104/6bd84d99387702307124394987/v.f42905.mp4",
      "vnum": 12,
      "vodPlay": false,
      "wish": 64172,
      "wishst": 0
    },
    {
      "bingeWatch": 0,
      "boxInfo": "上映30天，累计票房2966万",
      "cat": "动画",
      "civilPubSt": 0,
      "comingTitle": "10月1日 周六",
      "desc": "主演:蒋丽,邵敏佳,赵路",
      "dir": "爱丽丝·布莱哈特",
      "dur": 90,
      "effectShowNum": 0,
      "followst": 0,
      "globalReleased": true,
      "haspromotionTag": false,
      "headLineShow": false,
      "id": 1325640,
      "img": "https://p0.pipi.cn/mmdb/25bfd6dde7af2a2c9550c833532b5ce9e07fc.jpg?imageMogr2/thumbnail/2500x2500%3E",
      "isRevival": false,
      "late": false,
      "localPubSt": 0,
      "mark": false,
      "mk": 8.4,
      "movieType": 0,
      "nm": "新灰姑娘2",
      "pn": 25,
      "preSale": 0,
      "preShow": false,
      "proScore": 0,
      "proScoreNum": 0,
      "pubDate": 1664553600000,
      "pubDesc": "2022-10-01 09:30中国大陆上映",
      "pubShowNum": 0,
      "recentShowDate": 1667059200000,
      "recentShowNum": 0,
      "rt": "2022-10-01",
      "sc": 8.4,
      "scm": "",
      "scoreLabel": "猫眼购票评分",
      "showCinemaNum": 128,
      "showInfo": "今天128家影院放映201场",
      "showNum": 201,
      "showStateButton": {
        "color": "#F03D37",
        "content": "购票",
        "onlyPreShow": false
      },
      "showTimeInfo": "2022-10-01上映",
      "showst": 3,
      "snum": 8398,
      "star": "蒋丽,邵敏佳,赵路",
      "totalShowNum": 203,
      "ver": "2D",
      "videoId": 490044,
      "videoName": "电影《新灰姑娘2》梦想成真预告片发布！正在热映",
      "videourl": "https://vod.pipi.cn/fec9203cvodtransbj1251246104/124ca8be387702306670100205/v.f42905.mp4",
      "vnum": 6,
      "vodPlay": false,
      "wish": 76137,
      "wishst": 0
    },
    {
      "bingeWatch": 0,
      "boxInfo": "上映52天，累计票房10369万",
      "cat": "爱情,喜剧",
      "civilPubSt": 0,
      "comingTitle": "9月9日 周五",
      "desc": "主演:黄子华,邓丽欣,张继聪",
      "dir": "陈咏燊",
      "dur": 116,
      "effectShowNum": 0,
      "followst": 0,
      "fra": "中国香港,北京国际电影节,远东国际电影节",
      "frt": "2022-09-08 00:00:00,2022-08-19 00:00:00,2022-04-24 00:00:00",
      "globalReleased": true,
      "haspromotionTag": false,
      "headLineShow": false,
      "id": 1433654,
      "img": "https://p0.pipi.cn/mmdb/25bfd6512ffdddbe12f0ee77e460504b2653b.jpg?imageMogr2/thumbnail/2500x2500%3E",
      "isRevival": false,
      "late": false,
      "localPubSt": 0,
      "mark": false,
      "mk": 8.7,
      "movieType": 0,
      "nm": "还是觉得你最好",
      "pn": 62,
      "preSale": 0,
      "preShow": false,
      "proScore": 0,
      "proScoreNum": 0,
      "pubDate": 1662652800000,
      "pubDesc": "2022-09-09 09:00中国大陆上映",
      "pubShowNum": 0,
      "recentShowDate": 1667059200000,
      "recentShowNum": 0,
      "rt": "2022-09-09",
      "sc": 8.7,
      "scm": "够港风，够热辣，够好笑！",
      "scoreLabel": "猫眼购票评分",
      "showCinemaNum": 103,
      "showInfo": "今天103家影院放映299场",
      "showNum": 299,
      "showStateButton": {
        "color": "#F03D37",
        "content": "购票",
        "onlyPreShow": false
      },
      "showTimeInfo": "2022-09-09上映",
      "showst": 3,
      "snum": 35750,
      "star": "黄子华,邓丽欣,张继聪",
      "totalShowNum": 829,
      "ver": "2D",
      "videoId": 489667,
      "videoName": "《还是觉得你最好》终极预告，爱情喜剧中秋见",
      "videourl": "https://vod.pipi.cn/43903a81vodtransgzp1251246104/c137e930387702305370819228/v.f42905.mp4",
      "vnum": 6,
      "vodPlay": false,
      "wish": 56464,
      "wishst": 0
    },
    {
      "bingeWatch": 0,
      "boxInfo": "上映28天，累计票房1935万",
      "cat": "灾难,剧情",
      "civilPubSt": 0,
      "comingTitle": "10月3日 周一",
      "desc": "主演:甄子丹,韩雪,贾冰",
      "dir": "罗志良",
      "dur": 108,
      "effectShowNum": 0,
      "followst": 0,
      "globalReleased": true,
      "haspromotionTag": false,
      "headLineShow": false,
      "id": 1370418,
      "img": "https://p0.pipi.cn/mmdb/25bfd6518d32ff0e1392574fa4e6235babea6.jpg?imageMogr2/thumbnail/2500x2500%3E",
      "isRevival": false,
      "late": false,
      "localPubSt": 0,
      "mark": false,
      "mk": 0,
      "movieType": 0,
      "nm": "搜救",
      "pn": 91,
      "preSale": 0,
      "preShow": false,
      "proScore": 0,
      "proScoreNum": 0,
      "pubDate": 1664726400000,
      "pubDesc": "2022-10-03 10:00中国大陆上映",
      "pubShowNum": 0,
      "recentShowDate": 1667059200000,
      "recentShowNum": 0,
      "rt": "2022-10-03",
      "sc": 0,
      "scm": "",
      "scoreLabel": "暂无评分",
      "showCinemaNum": 119,
      "showInfo": "今天119家影院放映239场",
      "showNum": 239,
      "showStateButton": {
        "color": "#F03D37",
        "content": "购票",
        "onlyPreShow": false
      },
      "showTimeInfo": "2022-10-03上映",
      "showst": 3,
      "snum": 17988,
      "star": "甄子丹,韩雪,贾冰",
      "totalShowNum": 576,
      "ver": "2D",
      "videoId": 490043,
      "videoName": "《搜救》发布“孤注一掷”版终极预告 父母，是孩子最后一道防线",
      "videourl": "https://vod.pipi.cn/fec9203cvodtransbj1251246104/29064111387702306660296902/v.f42905.mp4",
      "vnum": 7,
      "vodPlay": false,
      "wish": 35570,
      "wishst": 0
    },
    {
      "bingeWatch": 0,
      "boxInfo": "上映51天，累计票房7660万",
      "cat": "剧情,家庭",
      "civilPubSt": 0,
      "comingTitle": "9月10日 周六",
      "desc": "主演:吴彦姝,奚美娟,文淇",
      "dir": "杨荔钠",
      "dur": 109,
      "effectShowNum": 0,
      "followst": 0,
      "fra": "北京国际电影节",
      "frt": "2022-08-19 00:00:00",
      "globalReleased": true,
      "haspromotionTag": false,
      "headLineShow": false,
      "id": 1435019,
      "img": "https://p0.pipi.cn/mmdb/25bfd633f2ab12e19b501542745749d344737.jpg?imageMogr2/thumbnail/2500x2500%3E",
      "isRevival": false,
      "late": false,
      "localPubSt": 0,
      "mark": false,
      "mk": 9.1,
      "movieType": 0,
      "nm": "妈妈！",
      "pn": 131,
      "preSale": 0,
      "preShow": false,
      "proScore": 0,
      "proScoreNum": 0,
      "pubDate": 1662739200000,
      "pubDesc": "2022-09-10 09:00中国大陆上映",
      "pubShowNum": 0,
      "recentShowDate": 1667059200000,
      "recentShowNum": 0,
      "rt": "2022-09-10",
      "sc": 9.1,
      "scm": "",
      "scoreLabel": "猫眼购票评分",
      "showCinemaNum": 72,
      "showInfo": "今天72家影院放映132场",
      "showNum": 132,
      "showStateButton": {
        "color": "#F03D37",
        "content": "购票",
        "onlyPreShow": false
      },
      "showTimeInfo": "2022-09-10上映",
      "showst": 3,
      "snum": 21815,
      "star": "吴彦姝,奚美娟,文淇",
      "totalShowNum": 428,
      "ver": "CINITY 2D/2D",
      "videoId": 489798,
      "videoName": "亲情电影《妈妈！》今日上映 吴彦姝奚美娟诠释患病母女坚守相拥暖彻中秋",
      "videourl": "https://vod.pipi.cn/fec9203cvodtransbj1251246104/e9c0560a387702305808173034/v.f42905.mp4",
      "vnum": 11,
      "vodPlay": false,
      "wish": 196090,
      "wishst": 0
    },
    {
      "bingeWatch": 0,
      "boxInfo": "上映52天，累计票房5594万",
      "cat": "爱情,亲情,剧情",
      "civilPubSt": 0,
      "comingTitle": "9月9日 周五",
      "desc": "主演:周迅,郑秀文,易烊千玺",
      "dir": "张艾嘉,李少红,陈冲",
      "dur": 116,
      "effectShowNum": 0,
      "followst": 0,
      "fra": "中国香港,中国澳门",
      "frt": "2022-11-10 00:00:00,2022-11-10 00:00:00",
      "globalReleased": true,
      "haspromotionTag": false,
      "headLineShow": false,
      "id": 1359285,
      "img": "https://p0.pipi.cn/mmdb/25bfd6ddc69b12030c50153593395ee91ec39.jpg?imageMogr2/thumbnail/2500x2500%3E",
      "isRevival": false,
      "late": false,
      "localPubSt": 0,
      "mark": false,
      "mk": 9,
      "movieType": 0,
      "nm": "世间有她",
      "pn": 20,
      "preSale": 0,
      "preShow": false,
      "proScore": 0,
      "proScoreNum": 0,
      "pubDate": 1662652800000,
      "pubDesc": "2022-09-09 18:00中国大陆上映",
      "pubShowNum": 0,
      "recentShowDate": 1667059200000,
      "recentShowNum": 0,
      "rt": "2022-09-09",
      "sc": 9,
      "scm": "易烊千玺哭戏太绝了",
      "scoreLabel": "猫眼购票评分",
      "showCinemaNum": 12,
      "showInfo": "今天12家影院放映30场",
      "showNum": 30,
      "showStateButton": {
        "color": "#F03D37",
        "content": "购票",
        "onlyPreShow": false
      },
      "showTimeInfo": "2022-09-09上映",
      "showst": 3,
      "snum": 35440,
      "star": "周迅,郑秀文,易烊千玺",
      "totalShowNum": 73,
      "ver": "中国巨幕2D/CINITY 2D/2D",
      "videoId": 489733,
      "videoName": "《世间有她》终极预告，9月9日暖心上映",
      "videourl": "https://vod.pipi.cn/fec9203cvodtransbj1251246104/ee6af3fe387702305690495948/v.f42905.mp4",
      "vnum": 10,
      "vodPlay": false,
      "wish": 408113,
      "wishst": 0
    },
    {
      "bingeWatch": 0,
      "boxInfo": "上映31天，累计票房8559万",
      "cat": "历史",
      "civilPubSt": 0,
      "comingTitle": "9月30日 周五",
      "desc": "主演:刘烨,韩雪,林永健",
      "dir": "宁海强",
      "dur": 105,
      "effectShowNum": 0,
      "followst": 0,
      "globalReleased": true,
      "haspromotionTag": false,
      "headLineShow": false,
      "id": 1413861,
      "img": "https://p0.pipi.cn/mmdb/25bfd6dd7a3ddd5bf171f700040d22d304789.jpg?imageMogr2/thumbnail/2500x2500%3E",
      "isRevival": false,
      "late": false,
      "localPubSt": 0,
      "mark": false,
      "mk": 0,
      "movieType": 0,
      "nm": "钢铁意志",
      "pn": 78,
      "preSale": 0,
      "preShow": false,
      "proScore": 0,
      "proScoreNum": 0,
      "pubDate": 1664467200000,
      "pubDesc": "2022-09-30中国大陆上映",
      "pubShowNum": 0,
      "recentShowDate": 1667059200000,
      "recentShowNum": 0,
      "rt": "2022-09-30",
      "sc": 0,
      "scm": "",
      "scoreLabel": "暂无评分",
      "showCinemaNum": 96,
      "showInfo": "今天96家影院放映160场",
      "showNum": 160,
      "showStateButton": {
        "color": "#F03D37",
        "content": "购票",
        "onlyPreShow": false
      },
      "showTimeInfo": "2022-09-30上映",
      "showst": 3,
      "snum": 2600,
      "star": "刘烨,韩雪,林永健",
      "totalShowNum": 340,
      "ver": "2D",
      "videoId": 490037,
      "videoName": "《钢铁意志》终极预告片930温情献映",
      "videourl": "https://vod.pipi.cn/fec9203cvodtransbj1251246104/7042dc92387702306613183658/v.f42905.mp4",
      "vnum": 6,
      "vodPlay": false,
      "wish": 7648,
      "wishst": 0
    }
  ]
export default class Mheader extends React.Component {
    componentDidMount() {
        this.setState({
            movieList: hotMovie
        })
    }
    constructor() {
        super()
        this.state = {
            movieList: []
        }
    }
    render() {
        return <div style={{ background: '#fff' }}>
            <div style={{ color: '#999', height: '32px', lineHeight: '32px' }} > 最受欢迎的电影</div>
            <div className='movie-items' style={{ display: 'flex', overflow: 'auto', }}>
                { this.state.movieList.map(item => <MovieItem key={ item.id } movieProps={item}></MovieItem>) }
            </div>
        </div>
    }
}
