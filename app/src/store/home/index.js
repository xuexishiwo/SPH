import {reqCategoryList} from "@/api";
import { reqBannerList, reqFloorList } from "../../api";
//home模块的小仓库
const state={
    //state中数据的初始值别瞎写，服务器返回对象，服务器返回数组。【根据接口返回值初始化的】
    categoryList:[],
    //轮播图的数据
    bannerList:[],
    //floor的数据
    floorList:[],
};
//mutations是唯一修改state的地方
const mutations={
    CATEGORYLIST(state,categoryList){
        state.categoryList=categoryList;
    },
    GETBANNERLIST(state,bannerList){
        state.bannerList=bannerList;
    },
    GETFLOORLIST(state,floorList){
        state.floorList=floorList
    }
  
};
//action用户处理派发action地方的，可以书写异步语句，
const actions={
   async categoryList({commit}){
        let result=await reqCategoryList();
        if(result.code===200){
            commit("CATEGORYLIST",result.data);
        }
    },
    //获取首页轮播图的数组
   async getBannerList({commit}){
       let result=await reqBannerList();
       if(result.code===200){
        commit("GETBANNERLIST",result.data)
       }
    },

    //获取floor数据
    async getFloorList({commit}){
        let result=await reqFloorList();
        if(result.code===200){
            commit("GETFLOORLIST",result.data)
        }
    }
};
const getters={};

export default{
    state,
    mutations,
    actions,
    getters,
}