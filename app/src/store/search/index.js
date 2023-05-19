//search模块的小仓库
import { reqSearchList } from "@/api"
const state={
    searchList:{}
};
const mutations={
    GETSEARCHLIST(state,searchList){
        state.searchList=searchList;
    }
};
const actions={
    async getSearchList({commit},params){
        //params形参：是当用户派发action的时候，第二个参数传递过来的，至少是一个空对象
        let result=await reqSearchList(params);
        if(result.code==200){
            commit("GETSEARCHLIST",result.data)
        }
    }
   
};
//计算属性
//getters的作用：简化仓库中的数据，方便组件获取数据
const getters={
    //当前形参，当前仓库中的state，并非大仓库中的state
    goodsList(){       
    }
};

export default{
    state,
    mutations,
    actions,
    getters,
}