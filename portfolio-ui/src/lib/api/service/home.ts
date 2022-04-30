import { DocumentData } from 'firebase/firestore';

export interface IRequestsHomeAPI {
  fetchDocsInCollection(colName: string): Promise<DocumentData[]>;
  /** @desc 指定ディレクトリ内にある、単一のファイルURLを取得する */
  fetchDownloadURL(childDir: string, fileName: string): Promise<string>;
  /** @desc storageにある対象のディレクトリにある全ての画像URLをgetする */
  fetchDownloadURLs(childDir: string): Promise<string[]>;
}
