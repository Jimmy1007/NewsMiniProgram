Page({

  //初始化
  data: {
    newsId: 0,
    newsDetail: {}
  },

  //存储第一个页面传递过来的newsId并调用新闻详情函数
  onLoad: function (options) {
    let newsId = options.newsId;
    // console.log(newsId);
    if (newsId) {
      this.setData({
        newsId: newsId
      });
    }
    this.getNewsDetail();

  },

  //下拉刷新，调用getNewsDetail函数重新取新闻详情信息
  onPullDownRefresh() {
    this.getNewsDetail(() => wx.stopPullDownRefresh());
  },

  //调用接口, 根据newsId获取新闻详情信息
  getNewsDetail(cb) {
    wx.request({
      url: 'https://test-miniprogram.com/api/news/detail',
      data: {
        id: this.data.newsId
      },
      success: (res) => {
        let news = res.data.result;
        //console.log(news);
        let date = new Date(news.date);
        this.setData({
          newsDetail: {
            id: news.id,
            title: news.title,
            date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`,
            source: news.source === '' ? '未知来源' : news.source,
            readCount: news.readCount,
            firstImage: news.firstImage === '' ? '' : news.firstImage,
            content: news.content
          }
        });
      },
      complete: () => {
        cb && cb();
      }
    });
  }
})