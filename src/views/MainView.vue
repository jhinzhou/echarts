<template>
  <div class="main">
    <div class="visual_chart" id="china"></div>
    <div class="cicle3"></div>
    <div class="cicle4"></div>
    <div class="cicle5"></div>
    <div class="cicle6"></div>
    <div class="cicle7"></div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
import china from '../assets/json/china.json'
import { mapData } from '../../public/map'
const showEcharts = () => {
  var chartDom = document.getElementById('china')
  var myChart = echarts.init(chartDom)
  var option = {
    title: {
      text: '',
      left: 'center',
      textStyle: {
        color: '#fff'
      }
    },
    legend: {
      show: false,
      orient: 'vertical',
      top: 'bottom',
      left: 'right',
      data: ['地点', '线路'],
      textStyle: {
        color: '#fff'
      }
    },
    geo: {
      map: 'china',
      label: {
        emphasis: {
          show: false
        }
      },
      roam: true,
      itemStyle: {
        normal: {
          areaColor: 'rgba(7,21,57,0.5)',
          borderColor: '#0177ff'
        },
        emphasis: {
          areaColor: '#071537' //鼠标指上市时的颜色
        }
      }
    },
    series: [
      {
        name: '地点',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
          brushType: 'stroke'
        },
        label: {
          emphasis: {
            show: true,
            position: 'right',
            formatter: '{b}'
          }
        },
        symbolSize: 2,
        showEffectOn: 'render',
        itemStyle: {
          normal: {
            color: '#46bee9'
          }
        },
        data: mapData.citys
      },
      {
        name: '线路',
        type: 'lines',
        coordinateSystem: 'geo',
        zlevel: 2,
        large: true,
        effect: {
          show: true,
          constantSpeed: 30,
          symbol: 'pin',
          symbolSize: 3,
          trailLength: 0
        },
        lineStyle: {
          normal: {
            color: echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: '#58B3CC'
                },
                {
                  offset: 1,
                  color: '#F58158'
                }
              ],
              false
            ),
            width: 1,
            opacity: 0.2,
            curveness: 0.1
          }
        },
        data: mapData.moveLines
      }
    ]
  }

  option && myChart.setOption(option)
}

onMounted(() => {
  echarts.registerMap('china', { geoJSON: china })
  showEcharts()
})
</script>
<style scoped>
.main {
  height: 100%;
  width: 100%;
}
.visual_chart {
  opacity: 0.8;
  width: 100%;
  height: 70%;
}
</style>
