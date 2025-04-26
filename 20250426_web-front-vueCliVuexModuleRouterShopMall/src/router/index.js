import MainComponent from "@/components/wrap/MainComponent.vue";
import {
    createRouter,
    createWebHistory
} from "vue-router";

const routes = [{ // 메인
        path: '/',
        name: 'home',
        component: MainComponent
    },
    { // 서브1

    },
    { // 서브2

    },
    { // 서브3

    },
    { // 서브4

    }
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});
export default router;