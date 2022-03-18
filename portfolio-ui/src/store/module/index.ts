import { getModule } from "vuex-module-decorators";
import { HomeModule } from "./home";

export interface Stores {
  home: HomeModule;
}

const home = getModule(HomeModule);

const stores: Stores = {
  home,
};

export { stores };
