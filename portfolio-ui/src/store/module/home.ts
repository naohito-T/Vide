import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";
import { Firestore, DocumentData } from "firebase/firestore";
import { store } from "./stores";
import { api } from "@/lib/api";

@Module({ store, dynamic: true, name: "home", namespaced: true })
export class HomeModule extends VuexModule {
  /** 単一のコレクション内のドキュメントリスト */
  private _snapList: DocumentData[] | null = null; // undefinedだとリアクティブの追跡が終わる

  private homeAPI = api.home;

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
  public async fetchDocsInCollection(db: Firestore, colName: string) {
    return await this.homeAPI.fetchDocsInCollection(db, colName).then((r) => {
      this.setSnapList(r);
    });
  }
}
