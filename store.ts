import { proxy } from "valtio";

type Store = {
  isLoader: boolean;
};

export const store = proxy<Store>({
  isLoader: true,
});
