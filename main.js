let t_inner = 0; // 円内の点の数

for (let i = 0; i < 100000000; i++) {
    //※for文内はモンテカルロ法を用いた円周率測定である
    x = Math.random(); // 乱数
    y = Math.random(); // 乱数
    r = Math.sqrt(x * x + y * y);

    if (r < 1) {
        t_inner++;
    }
    //※以下のif文はサンプリング用
    if (i == 100) {
        var x1 = 4 * t_inner / i;
    }
    if (i == 1000) {
        var x2 = 4 * t_inner / i;
    }
    if (i == 10000) {
        var x3 = 4 * t_inner / i;
    }
    if (i == 100000) {
        var x4 = 4 * t_inner / i;
    }
    if (i == 1000000) {
        var x5 = 4 * t_inner / i;
    }
    if (i == 10000000) {
        var x6 = 4 * t_inner / i;
    }
}

// グラフ制作に必要なパッケージの読み込み
google.load('visualization', '1', { 'packages': ['corechart'], 'language': 'ja' });

//グラフ描画のためのコールパック関数をセット
google.setOnLoadCallback(drawChart);

function drawChart() {
    //データを用意
    let dataArray = [
        ['回数', '数字', '円周率'],
        ['100回', x1, 3.1415],
        ['1000回', x2, 3.1415],
        ['10000回', x3, 3.1415],
        ['100000回', x4, 3.1415],
        ['1000000回', x5, 3.1415],
        ['10000000回', x6, 3.1415]
    ];
    let dataTable = google.visualization.arrayToDataTable(dataArray);

    //グラフのオプションを記述（タイトルと幅と高さ）
    let options = {
        'title': '',
    };
    // どのタイプのグラフを、どこに出力するかを指定
    let chart1 = new google.visualization.LineChart(document.getElementById('chart1'));

    // グラフの描画
    chart1.draw(dataTable, options);
}

window.onresize = function () {
    drawChart();
};