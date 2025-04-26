import MainComponent from "@/components/wrap/MainComponent.vue";
import Sub1Component from "@/components/wrap/sub/Sub1Component.vue";
import Sub2Component from "@/components/wrap/sub/Sub2Component.vue";
import Sub3Component from "@/components/wrap/sub/Sub3Component.vue";
import Sub4Component from "@/components/wrap/sub/Sub4Component.vue";
import {
    createRouter,
    createWebHistory
} from "vue-router";

const routes = [

    // 메인
    {
        path: '/',
        name: 'home',
        component: MainComponent
    },
    // 서브1
    {
        path: '/sub1',
        name: 'sub1',
        component: Sub1Component
    },
    {
        path: '/sub2',
        name: 'sub2',
        component: Sub2Component
    },
    {
        path: '/sub3',
        name: 'sub3',
        component: Sub3Component
    },
    {
        path: '/sub4',
        name: 'sub4',
        component: Sub4Component
    },
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});
export default router;