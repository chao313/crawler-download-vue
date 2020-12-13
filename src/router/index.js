import Vue from 'vue'
import Router from 'vue-router'


/**
 * 管理边栏的地方
 */
Vue.use(Router)

/* Layout */
import Layout from '@/views/layout/Layout'
//登陆界面
const Login = r => require.ensure([], () => r(require('@/views/login/index')), 'login')
const AdminLogin = r => require.ensure([], () => r(require('@/views/login/AdminIndex')), 'AdminLogin')
const ForgetPassword = r => require.ensure([], () => r(require('@/views/login/ForgetPassword')), 'ForgetPassword')


const ResourceManagerList = r => require.ensure([], () => r(require('@/views/ResourceManager/List')), 'ResourceManagerList')
const ResourceManagerAdd = r => require.ensure([], () => r(require('@/views/ResourceManager/Add')), 'ResourceManagerAdd')
const ResourceManagerView = r => require.ensure([], () => r(require('@/views/ResourceManager/View')), 'ResourceManagerView')

/* ProjectModuleUpdate更新 */
const ProjectModuleView = r => require.ensure([], () => r(require('@/views/ProjectModule/view')), 'ProjectModuleView')
/* ProjectModuleEdit编辑 */
const ProjectModuleEdit = r => require.ensure([], () => r(require('@/views/ProjectModule/edit')), 'ProjectModuleEdit')
/* ProjectModuleList列表 */
const ProjectModuleList = r => require.ensure([], () => r(require('@/views/ProjectModule/list')), 'ProjectModuleList')
/* ProjectModuleAdd添加 */
const ProjectModuleAdd = r => require.ensure([], () => r(require('@/views/ProjectModule/add')), 'ProjectModuleAdd')

export const constantRouterMap = [
    {
        path: '',
        component: Layout,
        redirect: '/ResourceManagerList',
        name: 'resourceManager',
        meta: {
            title: '资源管理'
        },
        noDropdown: true,
        children: [
            {
                path: 'ResourceManagerList',
                component: ResourceManagerList,
                name: 'ResourceManagerList',
                meta: {
                    title: '资源列表'
                },
                hidden: false
            }, {
                path: 'ResourceManagerAdd',
                component: ResourceManagerAdd,
                name: 'ResourceManagerAdd',
                meta: {
                    title: '资源添加'
                },
                hidden: false
            },
            {
                path: 'ResourceManagerView',
                component: ResourceManagerView,
                name: 'ResourceManagerView',
                meta: {
                    title: '资源查看'
                },
                hidden: true
            }
        ]
    },
    {
        path: '',
        component: Layout,
        redirect: '/homepage',
        name: 'HomePage',
        meta: {
            title: '业务管理'
        },
        noDropdown: true,
        children: [
            {
                path: 'ProjectModulelist',
                component: ProjectModuleList,
                name: 'ProjectModuleList',
                meta: {
                    title: 'ProjectModuleList列表'
                },
                hidden: false
            },

            {
                path: 'ProjectModuleview',
                component: ProjectModuleView,
                name: 'ProjectModuleView',
                meta: {
                    title: 'ProjectModuleUpdate更新'
                },
                hidden: true
            }
            ,
            {
                path: 'ProjectModuleedit',
                component: ProjectModuleEdit,
                name: 'ProjectModuleEdit',
                meta: {
                    title: 'ProjectModuleEdit编辑'
                },
                hidden: true
            }
            ,
            {
                path: 'ProjectModuleadd',
                component: ProjectModuleAdd,
                name: 'ProjectModuleAdd',
                meta: {
                    title: 'ProjectModuleAdd添加'
                },
                hidden: true
            }

        ]
    },
    {
        path: '/login',
        component: Login,
        hidden: true
    },
    {
        path: '/AdminLogin',
        component: AdminLogin,
        hidden: false
    },
    {
        path: '/ForgetPassword',
        component: ForgetPassword,
        hidden: false
    }
]
export const routerMap = {
    "9901": {
        path: 'test/test',
        component: Login,
        name: 'UserMgt',
        meta: {
            title: '用户管理'
        }
    }
}
export default new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({
        y: 0
    }),
    routes: constantRouterMap
})
