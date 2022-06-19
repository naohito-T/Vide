import { DocumentData } from 'firebase/firestore';

export interface IRequestsHomeAPI {
  /**
   * @desc firebase firestore用
   */

  /** @desc 指定された単一コレクション内の一つのドキュメントを取得する(ドキュメントID自動でよく、下のやつで取得する) */
  fetchDocumentInFireStore(
    collectionName: string,
    documentId: string
  ): Promise<DocumentData>;

  /** @desc 指定された単一コレクション内のドキュメントを全て取得する(ドキュメントID自動でいい) */
  fetchDocumentAllInFireStore(
    collectionName: string,
    orderItem?: string
  ): Promise<DocumentData[]>;

  /**
   * @desc firebase Storage用
   */
  /** @desc 指定ディレクトリ内にある、単一のファイルURLを取得する */
  fetchDownloadURL(childDir: string, fileName: string): Promise<string>;
  /** @desc storageにある対象のディレクトリにある全ての画像URLをgetする */
  fetchDownloadURLs(childDir: string): Promise<string[]>;
}
