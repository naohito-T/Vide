import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { DocumentData } from 'firebase/firestore';
import { store } from './stores';
import { api } from '@/lib/api';
import { NullPointerError } from '@/lib/error';

@Module({ store, dynamic: true, name: 'home', namespaced: true })
export class HomeModule extends VuexModule {
  /** 単一のコレクション内のドキュメントリスト */
  private _snapList: DocumentData[] | null = null; // undefinedだとリアクティブの追跡が終わる

  /** @desc storage: 特定のディレクトリにあるimageダウンロードURL */
  private _storageFileURL: string | null = null;

  /** @desc storage: 特定のディレクトリにあるimageダウンロードURL一覧 */
  private _storageFileURLs: string[] | null = null;

  /**
   * @desc フロント側はここから取得しろ
   */

  public get getSnapList(): DocumentData[] | null {
    return this._snapList;
  }

  public get getStorageFileURL(): string {
    if (!this._storageFileURL) {
      throw new NullPointerError('this._storageFileURL: null');
    }
    return this._storageFileURL;
  }

  public get getStorageFileURLs(): string[] {
    if (!this._storageFileURLs) {
      throw new NullPointerError('this._storageFileURLs: null');
    }
    return this._storageFileURLs;
  }

  /**
   * @desc setter
   */

  @Mutation
  private setSnapList(snapshotList: DocumentData[]) {
    this._snapList = snapshotList;
  }

  @Mutation
  private setStorageURL(storageFileURL: string) {
    this._storageFileURL = storageFileURL;
  }

  @Mutation
  private setStorageURLs(storageFileURLs: string[]) {
    this._storageFileURLs = storageFileURLs;
  }

  /**
   * @desc action
   */

  @Action({ rawError: true })
  public async fetchDocumentAllInFireStore(
    colName: string,
    orderItem?: string
  ): Promise<DocumentData[]> {
    const docs = await api.home
      .fetchDocumentAllInFireStore(colName, orderItem)
      .then((r) => {
        this.setSnapList(r);
        return r;
      });
    return docs;
  }

  @Action({ rawError: true })
  public async fetchDownloadURL(
    childDir: string,
    fileName: string
  ): Promise<string> {
    const url = await api.home
      .fetchDownloadURL(childDir, fileName)
      .then((r) => {
        this.setStorageURL(r);
        return r;
      });
    return url;
  }

  @Action({ rawError: true })
  public async fetchDownloadURLs(childDir: string): Promise<string[]> {
    const urls = await api.home.fetchDownloadURLs(childDir).then((r) => {
      this.setStorageURLs(r);
      return r;
    });
    return urls;
  }
}
