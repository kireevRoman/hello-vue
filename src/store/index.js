import {createStore} from "vuex";
import {posts} from "@/store/modules/posts";
import {postsDetail} from "@/store/modules/post-detail";
import {user} from "@/store/modules/user";

export default createStore({
    state: {

    },
    modules: {
        posts,
        postsDetail,
        user
    }
})