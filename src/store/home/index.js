import { reqCategoryList, reqGetBannerList, reqFloorList } from "@/api"
//home模块的小仓库
//start:仓库存储数据的地方
//mutations:修改start的唯一手段
//actions:处理actions，可以书写自己的业务范围，也可以处理异步
//getters:理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
const state = {
    //state中的数据默认初始值别瞎写
    categoryList: [],
    //轮播图的数据
    bannerList: [],
    //floor组件的数据
    floorList: []
}
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    },
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList
    },
    GETFLOORLIST(state, floorList) {
        state.floorList = floorList
    },
}
const actions = {
    //通过API了吗的接口函数调用，向服务器发请求，获取服务器的数据
    async categoryList({ commit }) {
        let result = await reqCategoryList()
        if (result.code == 200) {
            commit('CATEGORYLIST', result.data)
        }
    },
    //获取首页轮播图的数据
    async getBannerList({ commit }) {
        let result = await reqGetBannerList();
        if (result.code == 200) {
            commit('GETBANNERLIST', result.data)
        }
    },
    //获取floor数据
    async getFloorList({ commit }) {
        let result = await reqFloorList();
        if (result.code == 200) {
            commit('GETFLOORLIST', result.data)
        }
    }
}

const getters = {}
export default {
    state,
    mutations,
    actions,
    getters
}