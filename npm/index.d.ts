declare module '@apiverve/wordopposite' {
  export interface wordoppositeOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface wordoppositeResponse {
    status: string;
    error: string | null;
    data: WordOppositesData;
    code?: number;
  }


  interface WordOppositesData {
      word:      string;
      opposites: string[];
  }

  export default class wordoppositeWrapper {
    constructor(options: wordoppositeOptions);

    execute(callback: (error: any, data: wordoppositeResponse | null) => void): Promise<wordoppositeResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: wordoppositeResponse | null) => void): Promise<wordoppositeResponse>;
    execute(query?: Record<string, any>): Promise<wordoppositeResponse>;
  }
}
