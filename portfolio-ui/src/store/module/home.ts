import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { DocumentData } from 'firebase/firestore';
import { store } from './stores';
import { api } from '@/lib/api';
import { commonErrorHandler } from '@/lib/error';

@Module({ store, dynamic: true, name: 'home', namespaced: true })
export class HomeModule extends VuexModule {
  /** 単一のコレクション内のドキュメントリスト */
  private _snapList: DocumentData[] | null = null; // undefinedだとリアクティブの追跡が終わる

  /** フロント側はここから取得しろ */
  public get snapList(): DocumentData[] | null {
    return this._snapList;
  }

  /** setter */
  @Mutation
  private setSnapList(snapshotList: DocumentData[]) {
    this._snapList = snapshotList;
  }

  /** action */
  @Action({ rawError: true })
  public async fetchDocsInCollection(colName: string): Promise<DocumentData[]> {
    const docs = await api.home.fetchDocsInCollection(colName).then((r) => {
      this.setSnapList(r);
      return r;
    });
    return docs;
  }
}
