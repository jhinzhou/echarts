const mapData = {
  citys: [
    {
      name: '苏州',
      value: [120.62, 31.32, 40],
      symbolSize: 10,
      itemStyle: { normal: { color: '#F58158' } }
    },
    {
      name: '广西',
      value: [108.327546, 22.815478, -1],
      symbolSize: 3,
      itemStyle: { normal: { color: '#58B3CC' } }
    },
    {
      name: '福建',
      value: [119.295144, 26.10078, -1],
      symbolSize: 3,
      itemStyle: { normal: { color: '#58B3CC' } }
    },
    {
      name: '浙江',
      value: [120.152792, 30.267447, -2],
      symbolSize: 3,
      itemStyle: { normal: { color: '#58B3CC' } }
    },
    {
      name: '山东',
      value: [117.020359, 36.66853, -6],
      symbolSize: 3,
      itemStyle: { normal: { color: '#58B3CC' } }
    },
    {
      name: '连云港',
      value: [119.221611, 34.596653, 1],
      symbolSize: 3,
      itemStyle: { normal: { color: '#58B3CC' } }
    },
    {
      name: '内蒙古',
      value: [111.765618, 40.817498, -23],
      symbolSize: 3,
      itemStyle: { normal: { color: '#58B3CC' } }
    },
    {
      name: '广州',
      value: [113.264435, 23.129163, 13],
      symbolSize: 3,
      itemStyle: { normal: { color: '#58B3CC' } }
    },
    {
      name: '海阳',
      value: [121.158434, 36.776378, 1],
      symbolSize: 2,
      itemStyle: { normal: { color: '#58B3CC' } }
    },
    {
      name: '阳江',
      value: [111.95, 21.85, 1],
      symbolSize: 2,
      itemStyle: { normal: { color: '#58B3CC' } }
    },
    {
      name: '青岛',
      value: [120.38264, 36.067082, 52],
      symbolSize: 3,
      itemStyle: { normal: { color: '#F58158' } }
    },
    {
      name: '温州',
      value: [120.699367, 27.994267, 1],
      symbolSize: 2,
      itemStyle: { normal: { color: '#F58158' } }
    },
    {
      name: '烟台',
      value: [121.447935, 37.463822, 24],
      symbolSize: 2,
      itemStyle: { normal: { color: '#F58158' } }
    },
    {
      name: '呼和浩特',
      value: [111.749181, 40.842585, 10],
      symbolSize: 2,
      itemStyle: { normal: { color: '#F58158' } }
    },
    {
      name: '辽宁',
      value: [123.42944, 41.835441, -58],
      symbolSize: 3,
      itemStyle: { normal: { color: '#58B3CC' } }
    },
    {
      name: '大连',
      value: [121.614682, 38.914003, 40],
      symbolSize: 3,
      itemStyle: { normal: { color: '#F58158' } }
    },
    {
      name: '陕西',
      value: [108.954239, 34.265472, -2],
      symbolSize: 2,
      itemStyle: { normal: { color: '#58B3CC' } }
    },
    {
      name: '山西',
      value: [112.562398, 37.873532, -3],
      symbolSize: 2,
      itemStyle: { normal: { color: '#58B3CC' } }
    },
    {
      name: '贵阳',
      value: [106.630154, 26.647661, 2],
      symbolSize: 2,
      itemStyle: { normal: { color: '#F58158' } }
    },
    {
      name: '南昌',
      value: [115.858198, 28.682892, 2],
      symbolSize: 2,
      itemStyle: { normal: { color: '#F58158' } }
    },
    {
      name: '成都',
      value: [104.066541, 30.572269, 1],
      symbolSize: 2,
      itemStyle: { normal: { color: '#F58158' } }
    },
    {
      name: '郑州',
      value: [113.625368, 34.7466, 1],
      symbolSize: 2,
      itemStyle: { normal: { color: '#F58158' } }
    },
    {
      name: '西宁',
      value: [101.74, 36.56, 1],
      symbolSize: 2,
      itemStyle: { normal: { color: '#F58158' } }
    },
    {
      name: '北海',
      value: [109.12, 21.49, 1],
      symbolSize: 2,
      itemStyle: { normal: { color: '#F58158' } }
    },
    {
      name: '汕头',
      value: [116.69, 23.39, 1],
      symbolSize: 2,
      itemStyle: { normal: { color: '#F58158' } }
    },
    {
      name: '银川',
      value: [106.27, 38.47, 1],
      symbolSize: 2,
      itemStyle: { normal: { color: '#F58158' } }
    },
    {
      name: '湖南',
      value: [112.98381, 28.112444, -1],
      symbolSize: 2,
      itemStyle: { normal: { color: '#58B3CC' } }
    },
    {
      name: '湖北',
      value: [114.341862, 30.546498, -4],
      symbolSize: 2,
      itemStyle: { normal: { color: '#58B3CC' } }
    },
    {
      name: '九江',
      value: [116.0, 29.7, -4],
      symbolSize: 2,
      itemStyle: { normal: { color: '#58B3CC' } }
    },
    {
      name: '佛山',
      value: [112.8955, 23.1097, -4],
      symbolSize: 2,
      itemStyle: { normal: { color: '#58B3CC' } }
    },
    {
      name: '保定',
      value: [115.0488, 39.0948, -4],
      symbolSize: 2,
      itemStyle: { normal: { color: '#58B3CC' } }
    },
    {
      name: '南宁',
      value: [108.479, 23.1152, -4],
      symbolSize: 2,
      itemStyle: { normal: { color: '#58B3CC' } }
    },
    {
      name: '南昌',
      value: [116.0046, 28.6633, -4],
      symbolSize: 2,
      itemStyle: { normal: { color: '#58B3CC' } }
    },
    {
      name: '咸阳',
      value: [108.4131, 34.8706, -4],
      symbolSize: 2,
      itemStyle: { normal: { color: '#58B3CC' } }
    },
    {
      name: '哈尔滨',
      value: [127.9688, 45.368, -4],
      symbolSize: 2,
      itemStyle: { normal: { color: '#58B3CC' } }
    },
    {
      name: '唐山',
      value: [118.4766, 39.6826, -4],
      symbolSize: 2,
      itemStyle: { normal: { color: '#58B3CC' } }
    },
    {
      name: '大同',
      value: [113.7854, 39.8035, -4],
      symbolSize: 2,
      itemStyle: { normal: { color: '#58B3CC' } }
    },
    {
      name: '天津',
      value: [117.4219, 39.4189, -4],
      symbolSize: 2,
      itemStyle: { normal: { color: '#58B3CC' } }
    },
    {
      name: '太原',
      value: [112.3352, 37.9413, -4],
      symbolSize: 2,
      itemStyle: { normal: { color: '#58B3CC' } }
    },
    {
      name: '威海',
      value: [121.9482, 37.1393, -4],
      symbolSize: 2,
      itemStyle: { normal: { color: '#58B3CC' } }
    },
    {
      name: '廊坊',
      value:[ 116.521, 39.0509, -4],
      symbolSize: 2,
      itemStyle: { normal: { color: '#58B3CC' } }
    },
    {
      name: '延安',
      value: [109.1052, 36.4252, -4],
      symbolSize: 2,
      itemStyle: { normal: { color: '#58B3CC' } }
    },
    {
      name: '张家口',
      value: [115.1477, 40.8527, -4],
      symbolSize: 2,
      itemStyle: { normal: { color: '#58B3CC' } }
    },
    {
      name: '承德',
      value: [117.5757, 41.4075, -4],
      symbolSize: 2,
      itemStyle: { normal: { color: '#58B3CC' } }
    },
    {
      name: '柳州',
      value: [109.3799, 24.9774, -4],
      symbolSize: 2,
      itemStyle: { normal: { color: '#58B3CC' } }
    },
    {
      name: '株洲',
      value: [113.5327, 27.0319, -4],
      symbolSize: 2,
      itemStyle: { normal: { color: '#58B3CC' } }
    },
    {
      name: '武汉',
      value: [114.3896, 30.6628, -4],
      symbolSize: 2,
      itemStyle: { normal: { color: '#58B3CC' } }
    },
    {
      name: '湘潭',
      value: [112.5439, 27.7075, -4],
      symbolSize: 2,
      itemStyle: { normal: { color: '#58B3CC' } }
    },
    {
      name: '滨州',
      value: [117.8174, 37.4963, -4],
      symbolSize: 2,
      itemStyle: { normal: { color: '#58B3CC' } }
    },
    {
      name: '潍坊',
      value: [119.0918, 36.524, -4],
      symbolSize: 2,
      itemStyle: { normal: { color: '#58B3CC' } }
    },
    {
      name: '金华',
      value: [120.0037, 29.1028, -4],
      symbolSize: 2,
      itemStyle: { normal: { color: '#58B3CC' } }
    },
    {
      name: '铜川',
      value: [109.0393, 35.1947, -4],
      symbolSize: 2,
      itemStyle: { normal: { color: '#58B3CC' } }
    },
    {
      name: '银川',
      value: [106.3586, 38.1775, -4],
      symbolSize: 2,
      itemStyle: { normal: { color: '#58B3CC' } }
    },
    {
      name: '镇江',
      value: [119.4763, 31.9702, -4],
      symbolSize: 2,
      itemStyle: { normal: { color: '#58B3CC' } }
    },
    {
      name: '长春',
      value: [125.8154, 44.2584, -4],
      symbolSize: 2,
      itemStyle: { normal: { color: '#58B3CC' } }
    },
    {
      name: '长沙',
      value: [113.0823, 28.2568, -4],
      symbolSize: 2,
      itemStyle: { normal: { color: '#58B3CC' } }
    },
    {
      name: '长治',
      value: [112.8625, 36.4746, -4],
      symbolSize: 2,
      itemStyle: { normal: { color: '#58B3CC' } }
    },
    {
      name: '阳泉',
      value: [113.4778, 38.0951, -4],
      symbolSize: 2,
      itemStyle: { normal: { color: '#58B3CC' } }
    }
  ],
  moveLines: [
    {
      fromName: '苏州',
      toName: '广西',
      coords: [
        [120.62, 31.32],
        [108.327546, 22.815478]
      ]
    },
    {
      fromName: '苏州',
      toName: '福建',
      coords: [
        [120.62, 31.32],
        [119.295144, 26.10078]
      ]
    },
    {
      fromName: '苏州',
      toName: '浙江',
      coords: [
        [120.62, 31.32],
        [120.152792, 30.267447]
      ]
    },
    {
      fromName: '苏州',
      toName: '山东',
      coords: [
        [120.62, 31.32],
        [117.020359, 36.66853]
      ]
    },
    {
      fromName: '苏州',
      toName: '连云港',
      coords: [
        [120.62, 31.32],
        [119.221611, 34.596653]
      ]
    },
    {
      fromName: '苏州',
      toName: '内蒙古',
      coords: [
        [120.62, 31.32],
        [111.765618, 40.817498]
      ]
    },
    {
      fromName: '苏州',
      toName: '广州',
      coords: [
        [120.62, 31.32],
        [113.264435, 23.129163]
      ]
    },
    {
      fromName: '苏州',
      toName: '海阳',
      coords: [
        [120.62, 31.32],
        [121.158434, 36.776378]
      ]
    },
    {
      fromName: '苏州',
      toName: '阳江',
      coords: [
        [120.62, 31.32],
        [111.95, 21.85]
      ]
    },
    {
      fromName: '苏州',
      toName: '青岛',
      coords: [
        [120.62, 31.32],
        [120.38264, 36.067082]
      ]
    },
    {
      fromName: '苏州',
      toName: '温州',
      coords: [
        [120.62, 31.32],
        [120.699367, 27.994267]
      ]
    },
    {
      fromName: '苏州',
      toName: '烟台',
      coords: [
        [120.62, 31.32],
        [121.447935, 37.463822]
      ]
    },
    {
      fromName: '苏州',
      toName: '呼和浩特',
      coords: [
        [120.62, 31.32],
        [111.749181, 40.842585]
      ]
    },
    {
      fromName: '苏州',
      toName: '辽宁',
      coords: [
        [120.62, 31.32],
        [123.42944, 41.835441]
      ]
    },
    {
      fromName: '苏州',
      toName: '大连',
      coords: [
        [120.62, 31.32],
        [121.614682, 38.914003]
      ]
    },
    {
      fromName: '苏州',
      toName: '陕西',
      coords: [
        [120.62, 31.32],
        [108.954239, 34.265472]
      ]
    },
    {
      fromName: '苏州',
      toName: '陕西',
      coords: [
        [120.62, 31.32],
        [112.562398, 37.873532]
      ]
    },
    {
      fromName: '苏州',
      toName: '贵阳',
      coords: [
        [120.62, 31.32],
        [106.630154, 26.647661]
      ]
    },
    {
      fromName: '苏州',
      toName: '南昌',
      coords: [
        [120.62, 31.32],
        [115.858198, 28.682892]
      ]
    },
    {
      fromName: '苏州',
      toName: '成都',
      coords: [
        [120.62, 31.32],
        [104.066541, 30.572269]
      ]
    },
    {
      fromName: '苏州',
      toName: '郑州',
      coords: [
        [120.62, 31.32],
        [113.625368, 34.7466]
      ]
    },
    {
      fromName: '苏州',
      toName: '西宁',
      coords: [
        [120.62, 31.32],
        [101.74, 36.56]
      ]
    },
    {
      fromName: '苏州',
      toName: '北海',
      coords: [
        [120.62, 31.32],
        [109.12, 21.49]
      ]
    },
    {
      fromName: '苏州',
      toName: '汕头',
      coords: [
        [120.62, 31.32],
        [116.69, 23.39]
      ]
    },
    {
      fromName: '苏州',
      toName: '银川',
      coords: [
        [120.62, 31.32],
        [106.27, 38.47]
      ]
    },
    {
      fromName: '苏州',
      toName: '湖南',
      coords: [
        [120.62, 31.32],
        [112.98381, 28.112444]
      ]
    },
    {
      fromName: '苏州',
      toName: '湖北',
      coords: [
        [120.62, 31.32],
        [114.341862, 30.546498]
      ]
    },
    {
      fromName: '苏州',
      toName: '九江',
      coords: [
        [120.62, 31.32],
        [116.0, 29.7]
      ]
    },
    {
      fromName: '苏州',
      toName: '佛山',
      coords: [
        [120.62, 31.32],
        [112.8955, 23.1097]
      ]
    },
    {
      fromName: '苏州',
      toName: '保定',
      coords: [
        [120.62, 31.32],
        [115.0488, 39.0948]
      ]
    },
    {
      fromName: '苏州',
      toName: '南宁',
      coords: [
        [120.62, 31.32],
        [108.479, 23.1152]
      ]
    },
    {
      fromName: '苏州',
      toName: '南昌',
      coords: [
        [120.62, 31.32],
        [116.0046, 28.6633]
      ]
    },
    {
      fromName: '苏州',
      toName: '咸阳',
      coords: [
        [120.62, 31.32],
        [108.4131, 34.8706]
      ]
    },
    {
      fromName: '苏州',
      toName: '哈尔滨',
      coords: [
        [120.62, 31.32],
        [127.9688, 45.368]
      ]
    },
    {
      fromName: '苏州',
      toName: '唐山',
      coords: [
        [120.62, 31.32],
        [118.4766, 39.6826]
      ]
    },
    {
      fromName: '苏州',
      toName: '大同',
      coords: [
        [120.62, 31.32],
        [113.7854, 39.8035]
      ]
    },
    {
      fromName: '苏州',
      toName: '天津',
      coords: [
        [120.62, 31.32],
        [117.4219, 39.4189]
      ]
    },
    {
      fromName: '苏州',
      toName: '太原',
      coords: [
        [120.62, 31.32],
        [112.3352, 37.9413]
      ]
    },
    {
      fromName: '苏州',
      toName: '威海',
      coords: [
        [120.62, 31.32],
        [121.9482, 37.1393]
      ]
    },
    {
      fromName: '苏州',
      toName: '廊坊',
      coords: [
        [120.62, 31.32],
        [116.521, 39.0509]
      ]
    },
    {
      fromName: '苏州',
      toName: '延安',
      coords: [
        [120.62, 31.32],
        [109.1052, 36.4252]
      ]
    },
    {
      fromName: '苏州',
      toName: '张家口',
      coords: [
        [120.62, 31.32],
        [115.1477, 40.8527]
      ]
    },
    {
      fromName: '苏州',
      toName: '承德',
      coords: [
        [120.62, 31.32],
        [117.5757, 41.4075]
      ]
    },
    {
      fromName: '苏州',
      toName: '柳州',
      coords: [
        [120.62, 31.32],
        [109.3799, 24.9774]
      ]
    },
    {
      fromName: '苏州',
      toName: '株洲',
      coords: [
        [120.62, 31.32],
        [113.5327, 27.0319]
      ]
    },
    {
      fromName: '苏州',
      toName: '武汉',
      coords: [
        [120.62, 31.32],
        [114.3896, 30.6628]
      ]
    },
    {
      fromName: '苏州',
      toName: '湘潭',
      coords: [
        [120.62, 31.32],
        [112.5439, 27.7075]
      ]
    },
    {
      fromName: '苏州',
      toName: '滨州',
      coords: [
        [120.62, 31.32],
        [117.8174, 37.4963]
      ]
    },
    {
      fromName: '苏州',
      toName: '潍坊',
      coords: [
        [120.62, 31.32],
        [119.0918, 36.524]
      ]
    },
    {
      fromName: '苏州',
      toName: '金华',
      coords: [
        [120.62, 31.32],
        [120.0037, 29.1028]
      ]
    },
    {
      fromName: '苏州',
      toName: '铜川',
      coords: [
        [120.62, 31.32],
        [109.0393, 35.1947]
      ]
    },
    {
      fromName: '苏州',
      toName: '银川',
      coords: [
        [120.62, 31.32],
        [106.3586, 38.1775]
      ]
    },
    {
      fromName: '苏州',
      toName: '镇江',
      coords: [
        [120.62, 31.32],
        [119.4763, 31.9702]
      ]
    },
    {
      fromName: '苏州',
      toName: '长春',
      coords: [
        [120.62, 31.32],
        [125.8154, 44.2584]
      ]
    },
    {
      fromName: '苏州',
      toName: '长沙',
      coords: [
        [120.62, 31.32],
        [113.0823, 28.2568]
      ]
    },
    {
      fromName: '苏州',
      toName: '长治',
      coords: [
        [120.62, 31.32],
        [112.8625, 36.4746]
      ]
    },
    {
      fromName: '苏州',
      toName: '阳泉',
      coords: [
        [120.62, 31.32],
        [113.4778, 38.0951]
      ]
    }
  ]
}
export { mapData }
