// 定義選單資料，包含連結名稱與網址
const menuItems = [
    //{ name: "Home", url: "https://example.com/home", description: "" },
    { name: "海大社團活動管理系統", url: "https://sclub.ntou.edu.tw/", description: "場地租借及租借狀態查詢" },
    { name: "海大地圖索引", url: "https://bar-a-killer.github.io/ntoumap/", description: "校園地圖查詢" },
    { name: "海大全校授權軟體下載網", url: "https://software.ntou.edu.tw/", description: "下載各種免費授權軟體(請記得使用VPN連接)" },
    { name: "教學務系統", url: "https://ais.ntou.edu.tw/", description: "選課、請假、查課表等等重要功能" }
];

// 選取選單列表容器
const menuList = document.getElementById("menuList");

// 生成選單項目
menuItems.forEach(item => {
    let li = document.createElement("li"); // 創建列表項目
    let a = document.createElement("a");   // 創建連結
    a.textContent = item.name;             // 設定連結文字
    a.href = item.url;                     // 設定連結網址
    // 創建描述部分
    let description = document.createElement("span");
    description.classList.add("description");
    description.textContent = item.description;

    // 組合並添加到選單中
    li.appendChild(a);                  
    li.appendChild(description);
    menuList.appendChild(li);          
});

// 回到頂部功能
window.onscroll = function() {
    displayBackToTopButton();
};

function displayBackToTopButton() {
    const backToTopBtn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopBtn.style.display = "block"; // 顯示按鈕
    } else {
        backToTopBtn.style.display = "none"; // 隱藏按鈕
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // 平滑回到頂部
    });
}
