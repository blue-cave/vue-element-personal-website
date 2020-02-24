/**
 * @author xusy
 * @creed: 这里是菜单的设计，这样可以自由的更改菜单的模式，不必要在<el-menu></el-menu>中写成死数据
 * @date 2020/2/24 20:26
 */

export default [
  {
    'name': '首页',
    'path': '/home-page'
  },
  {
    'name': '测试',
    'path': '/test1',
    // 图标样式
    'icon': 'my-insight-icon',
    // 子路由
    'childNav': [
      {
        'name': '分析项目',
        'icon': '',
        'path': 'qwe'
      }
    ]
  }
]
