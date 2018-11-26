const categories = [
  { code: 'gn', name: '国内' },
  { code: 'gj', name: '国际' },
  { code: 'cj', name: '财经' },
  { code: 'yl', name: '娱乐' },
  { code: 'js', name: '军事' },
  { code: 'ty', name: '体育' },
  { code: 'other', name: '其他' }
];


Page({
  data: {
    categories: categories,
    selectedCategoryCode: categories[0].code, //当前选中的新闻类别，默认选中第一个
    newsListMap: {},
    hotNews: {
      title: '加载中...',
      source: '',
      date: '',
      firstImage: '/images/cloudy-bg.png'
    },
    swiperHeight: 0
  },

  
})