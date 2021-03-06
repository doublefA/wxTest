Component({
  properties: {
    selected: { // 属性名
      type: Number, 
      value: 0, 
      observer(newVal, oldVal, changedPath) {
      }
    },
  },
  data: {
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [
      {
      pagePath: "/pages/index/index",
      iconPath: "/images/icon_home.jpg",
      selectedIconPath: "/images/icon_home_2.jpg",
      text: "首页"
      }, 
      {
        pagePath: "/pages/lxjsq/lxjsq",
        iconPath: "/images/icon_list.jpg",
        selectedIconPath: "/images/icon_list_2.jpg",
        text: "咨询"
      },  
      {
        pagePath: "/pages/lxjsq/lxjsq",
      iconPath: "/images/icon_component.png",
      selectedIconPath: "/images/icon_component_HL.png",
      text: "利息计算器"
      }, 
      {
        pagePath: "/pages/calc/calc",
      iconPath: "/images/icon_API.png",
      selectedIconPath: "/images/icon_API_HL.png",
      text: "设置"
    }
    ]
  }, 
  attached() {
  },
  onLoad: function (options) {

  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
       /* selected: data.index, */
      })
    }
  }
})