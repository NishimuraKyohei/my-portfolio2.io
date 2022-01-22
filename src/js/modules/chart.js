import $ from 'jquery';
import { Chart } from 'chart.js';
import 'jquery-inview';

export default function animateChart() {
  Chart.plugins.register({
    afterDatasetsDraw: function (chart, easing) {
        var ctx = chart.ctx;

        chart.data.datasets.forEach(function (dataset, i) {
            var meta = chart.getDatasetMeta(i);
            if (!meta.hidden) {
                meta.data.forEach(function (element, index) {
                    // 値の表示
                    ctx.fillStyle = 'rgb(0, 0, 0,0.8)';//文字の色
                    var fontSize = 12;//フォントサイズ
                    var fontStyle = 'normal';//フォントスタイル
                    var fontFamily = 'Arial';//フォントファミリー
                    ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);

                    var dataString = dataset.data[index].toString();

                    // 値の位置
                    ctx.textAlign = 'center';//テキストを中央寄せ
                    ctx.textBaseline = 'middle';//テキストベースラインの位置を中央揃え

                    var padding = 5;//余白
                    var position = element.tooltipPosition();
                    ctx.fillText(dataString, position.x, position.y - (fontSize / 2) - padding);

                });
            }
        });
    }
});


  //=========== 棒グラフ（縦） ============//
  $('#p-skills__chart').on('inview', function(event, isInView) {//画面上に入ったらグラフを描画
    if (isInView) {
    var ctx=document.getElementById("p-skills__chart");//グラフを描画したい場所のid
    var chart = new Chart(ctx,{
    type:'pie',//グラフのタイプ
    data:{//グラフのデータ
    labels:["HTML/CSS","scss/ejs","JavaScript","webpack","node.js",],//データの名前
    datasets:[{
        label:"フロントスキル",//グラフのタイトル
        backgroundColor:["#BB5179","#FAFF67", "#58A27C","#3C00FF","#BB5179","#FAFF67",],//グラフの色
        data:["20","20","20","20","20",]//横列に並ぶデータ
      }]
    },
    options:{//グラフのオプション
    legend:{
      display: true//グラフの説明を非表示
    },
    tooltips:{//グラフへカーソルを合わせた際の詳細表示の設定
      callbacks:{
          label: function (tooltipItem, data) {
        return data.labels[tooltipItem.index]+ ": "+ data.datasets[0].data[tooltipItem.index] + "%";//%を最後につける
      }
      },
    },
    title:{//上部タイトル表示の設定
      display: true,
      fontSize:10,
      text: '単位：%'
    },
  }
  });

  }
  });
}