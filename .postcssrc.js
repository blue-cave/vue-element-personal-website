// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    // 由于cssnext也具有autoprefixer,只需要一个就够了，所以把默认的autoprefixer删除掉
    // "autoprefixer": {},
    // 下面是自适应
    "postcss-aspect-ratio-mini": {},
    "postcss-write-svg": {
      utf8: false
    },
    "postcss-cssnext": {},
    "postcss-px-to-viewport": {
      viewportWidth: 1920,     //  视窗的宽度，对应的是我们设计稿的宽度，移动端一般是750，如果是pc端那就是类似1920这样的尺寸
      viewportHeight: 1080,    // 视窗的高度，移动端一般指定1334，也可以不配置，如果是pc端那就是类似1080这样的尺寸
      unitPrecision: 3,       // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
      viewportUnit: 'vw',    // 指定需要转换成的视窗单位，建议使用vw
      selectorBlackList: ['.ignore', '.hairlines'],  // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
      minPixelValue: 1,      // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
      mediaQuery: false      // 允许在媒体查询中转换`px`
    },
    "postcss-viewport-units":{},
    "cssnano": {
      preset: "default", // 设置成default将不会启用autoprefixer
      "postcss-zindex": false // postcss-zindex设置成false，如果不这样做，z-index的值就会重置为1，所以千万记得将postcss-zindex设置为false。
    }
  }
}
