import axios from 'axios';

export class LineAtClass {
  private apiBaseUrl: string;

  constructor(p: {
    apiBaseUrl: string
  }) {
    this.apiBaseUrl = p.apiBaseUrl
  }


  // 廣播消息
  broadcastMessage = async function(message: string): Promise<void> {
    try {
      const response = await axios.post(`${this.apiBaseUrl}/broadcast`, {
        message: message,
      });
      console.log('廣播成功:', response.data);
    } catch (error) {
      console.error('廣播失敗:', (error as Error).message);
    }
  }

  // 推送消息給單個使用者
  pushToUser = async function(userId: string, message: string): Promise<void> {
    try {
      const response = await axios.post(`${this.apiBaseUrl}/push`, {
        user_id: userId,
        message: message,
      });
      console.log('推送成功:', response.data);
    } catch (error) {
      console.error('推送失敗:', (error as Error).message);
    }
  }

    // 推送消息給多個使用者
    multiPushToUsers = async function(userIds: string[], message: string): Promise<void> {
      try {
        const response = await axios.post(`${this.apiBaseUrl}/multi-push`, {
          user_ids: userIds,
          message: message,
        });
        console.log('多個推送成功:', response.data);
      } catch (error) {
        console.error('多個推送失敗:', (error as Error).message);
      }
    }

    sendMultiPageMessage = async function (pages: Array<{
      page: number;
      content: string;
    }>): Promise<void> {
      try {
        const response = await axios.post(`${this.apiBaseUrl}/multi-page`, {
          pages: pages,
        });
        console.log('多頁訊息發送成功:', response.data);
      } catch (error) {
        console.error('多頁訊息發送失敗:', (error as Error).message);
      }
    }
    
    sendRichTextMessage = async function(elements: Array<{
      type: 'text' | 'image';
      content?: string;
      url?: string;
      caption?: string;
    }>): Promise<void> {
      try {
        const response = await axios.post(`${this.apiBaseUrl}/rich-text`, {
          elements: elements,
        });
        console.log('圖文訊息發送成功:', response.data);
      } catch (error) {
        console.error('圖文訊息發送失敗:', (error as Error).message);
      }
    }
}