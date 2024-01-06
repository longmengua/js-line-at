import axios from 'axios';

/**
 * apiBaseUrl => https://api.line.me/v2/bot/message/push
*/
interface TextMessageType {
  to: string | string[];
  messages: Array<{
    type: string;
    text: string;
  }>;
}

interface CardBasedMessageType {
  to: string | string[];
  messages: Array<{
    type: string;
    altText: string;
    template: {
      type: string;
      thumbnailImageUrl: string;
      title: string;
      text: string;
      actions: Array<{
        type: string;
        label: string;
        text?: string;
        uri?: string;
      }>;
    };
  }>;
}

interface RichMessageType {
  to: string | string[];
  messages: Array<{
    type: string;
    altText: string;
    contents: {
      type: string;
      body: {
        type: string;
        layout: string;
        contents: Array<{
          type: string;
          text: string;
        }>
      };
    };
  }>
}

interface PhotoMessageType {
  to: string | string[];
  messages: Array<{
    type: string;
    originalContentUrl: string;
    previewImageUrl: string;
  }>;
}

export type LineAtMessageType = PhotoMessageType | RichMessageType | CardBasedMessageType | TextMessageType | any
export class LineAtClass {
  private apiBaseUrl: string = "https://api.line.me/v2/bot/message/push";
  private channelAccessToken: string;

  constructor(p: {
    apiBaseUrl?: string,
    channelAccessToken: string,
  }) {
    if (p.apiBaseUrl) this.apiBaseUrl = p.apiBaseUrl

    this.channelAccessToken = p.channelAccessToken
  }

  sendMessage = async (messages: LineAtMessageType[]): Promise<any> => {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.channelAccessToken}`
    };

    const promises = messages.map(async (m) => {
      const res = await axios.post(this.apiBaseUrl, m, { headers })
      return res
    })

    return await Promise.allSettled(promises)
  }
}