// todo 這是官方的元件
import Vue from 'vue';
import VueRouter from 'vue-router';

// todo 這是我們自定的元件 (這裡的 @ 是 src 的縮寫，所以他可以用 .. 代替)
import Home from '@/components/HelloWorld';
// import Home from '../components/HelloWorld';
import Page from '@/components/allPages/page'
import Page1 from '@/components/allPages/page1';
import Page2 from '@/components/allPages/page2';
import Page3 from '@/components/allPages/page3';

// todo 啟用他
Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {
            name:'首頁', //元件呈現的名稱
            path:'/index', //對應的虛擬路徑
            component:Home, //對應的元件
        },
        {
            name:'分頁',
            path:'/page',
            component:Page,
            children:[
                {
                    name:'分頁一', //元件呈現的名稱
                    path:'', //對應的虛擬路徑
                    component:Page1, //對應的元件
                },
                {
                    name:'分頁二', //元件呈現的名稱
                    path:'/page/child2', //對應的虛擬路徑
                    component:Page2, //對應的元件
                },
                {
                    name:'分頁三', //元件呈現的名稱
                    path:'/page/child3', //對應的虛擬路徑
                    component:Page3, //對應的元件
                },
            ],
        }
    ],
});