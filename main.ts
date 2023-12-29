import { LineAtClass } from "./util/line-at";

(async () => {
  const lineAtClass = new LineAtClass({
    apiBaseUrl: ""
  })

  // 使用範例
  lineAtClass.broadcastMessage('這是一則廣播消息');
  lineAtClass.pushToUser('目標使用者的ID', '這是推送給單個使用者的消息');
  lineAtClass.multiPushToUsers(['使用者1的ID', '使用者2的ID'], '這是推送給多個使用者的消息');
  lineAtClass.sendMultiPageMessage([
    { page: 1, content: '這是第一頁的內容' },
    { page: 2, content: '這是第二頁的內容' },
  ])
  lineAtClass.sendRichTextMessage([
    { type: 'text', content: '歡迎使用我們的服務！' },
    { type: 'image', url: 'https://example.com/image.jpg', caption: '圖片說明' },
  ])
})()
