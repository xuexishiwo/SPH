import {reqCategoryList} from "@/api";
//home模块的小仓库
const state={
    //state中数据的初始值别瞎写，服务器返回对象，服务器返回数组。【根据接口返回值初始化的】
    categoryList:[],
    
};
//mutations是唯一修改state的地方
const mutations={
    CATEGORYLIST(state,categoryList){
        state.categoryList=categoryList;
    },
  
};
//action用户处理派发action地方的，可以书写异步语句，
const actions={
   async categoryList({commit}){
        let result=await reqCategoryList();
        if(result.code===200){
            commit("CATEGORYLIST",result.data);
        }
    },
};
const getters={};

export default{
    state,
    mutations,
    actions,
    getters,
}