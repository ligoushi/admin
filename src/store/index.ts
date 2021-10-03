import { IMenu, IUserInfo } from '@/api/types/common'
import { MENU, USER } from '@/utils/constans'
import { getItem } from '@/utils/storage'
import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { getters } from './getters'
import { mutations } from './mutations'
const state = {
  isCollapse: false,
  user: getItem<{ token: string } & IUserInfo>(USER),
  menus: getItem<IMenu>(MENU) || [] as IMenu[],
  _defaultMapView: '', // 默认地图view
  _defaultXZQHVisible: false, // 行政区划面板显示/隐藏
  _defaultMapTreeVisible: false, // 地图目录树显示/隐藏
  _defaultQueryResultVisible: false, // 空间查询结果面板
  _defaultQueryResult: [] // 空间查询结果
}
export type State = typeof state
export const key:InjectionKey<Store<State>> = Symbol('store')
export const store = createStore<State>({
  state,
  getters,
  mutations
})
// 封装简化后的useStore方法
export function useStore () {
  // 这里把key传进去
  return baseUseStore(key)
}
