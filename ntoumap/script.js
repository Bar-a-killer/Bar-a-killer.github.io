function processText() {
    // 獲取輸入的文字
    var inputText = document.getElementById('inputText').value;
    inputText = inputText.trim();
    inputText = inputText.toUpperCase();
    let match = inputText.match(/([a-zA-Z]+)(\d+)/);
    var locate = match[1];
    var classnum = match[2];
    var error = 0;
    if(classnum.length === 3) {
        var floor = classnum[0];
    }
    else if(classnum.length === 4) {
        var floor = classnum[0] + classnum[1];
    }
    else {
        error = 1;
    }
    
    const locations = {
        "AAC": "水生動物研究中心",
        "BOH": "人文大樓",
        "СС3": "電算中心三樓",//
        "CE-": "工學院大樓",//
        "CLS": "生命科學院館",
        "EE1": "電機一館",//
        "EE2": "電機二館",//
        "FRB": "第一餐廳",
        "FSH": "環漁系館",
        "GH1": "綜合一館",//
        "GH2": "綜合二館",//
        "GH3": "綜合三館",//
        "GRC": "綜合研究中心",
        "GYM": "體育館",
        "HR1": "河工一館",//
        "HR2": "河工二館",//1
        "HRE": "海工館",
        "INS": "資工系館",
        "IVY": "沛華大樓",
        "LIB": "圖書館大樓",
        "MAF": "海事大樓",
        "MEA": "機械A館",
        "MEB": "機械B館",
        "MFE": "食科工程館",
        "MFS": "食品科學館",
        "NAV": "商船大樓",
        "NVA": "造船系館",
        "OCE": "海洋系館",
        "SAH": "海空大樓",
        "SPF": "體育場地",
        "STA": "育樂館",
        "STM": "航管大樓",
        "TEC": "技術大樓",
        "UAH": "空蝕水槽",
        "SAC": "學生活動中心",
        "ADM": "行政大樓",
        "ODB": "海大意象館（海洋夢想基地）",
        "FSB": "食安所館",
        "ECG": "電資暨綜合教學大樓"
    };
    
    
    locate = locations[locate] || "error";
    if(locate === "error") {
        error = 1;
    }
    // 顯示處理後的文字
    if(error === 0) {
        document.getElementById('result').textContent =  locate + floor + "樓" + classnum + "教室";
    }
    else {
        document.getElementById('result').textContent =  "格式錯誤或此教室不存在，請檢查輸入格式";
    }
    
}