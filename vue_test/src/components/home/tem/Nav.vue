<template>
    <div class="nav">
        <div v-if="show" @click="close" class="nav_shade"></div>
        <transition name="nav">
            <div v-if="show" class="nav_box">
                <NavList v-for="(item, index) in list" :index="index" :len="list.length" :item="item" :key="item.title"/>
            </div>
        </transition>    
    </div>
</template>
<script>
import NavList from './NavList'
export default {
    components: {
        NavList
    },
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            list: [
                {
                    title: '网站首页',
                    name: 'Home',
                    icon: require('@/assets/nav/home.png') // 可优化换成icon图标
                },
                {
                    title: '关于磁维',
                    name: 'List1',
                    icon: require('@/assets/nav/home.png') // 可优化换成icon图标
                },
                {
                    title: '磁维师资',
                    name: 'List2',
                    icon: require('@/assets/nav/home.png') // 可优化换成icon图标
                },
                {
                    title: '课程介绍',
                    name: 'List3',
                    icon: require('@/assets/nav/home.png')// 可优化换成icon图标
                },
                {
                    title: '网站首页1',
                    name: 'Home',
                    icon: require('@/assets/nav/home.png')// 可优化换成icon图标
                },
                {
                    title: '关于磁维2',
                    name: 'List1',
                    icon: require('@/assets/nav/home.png') // 可优化换成icon图标
                },
                {
                    title: '磁维师资3',
                    name: 'List2',
                    icon: require('@/assets/nav/home.png') // 可优化换成icon图标
                },
                {
                    title: '课程介绍4',
                    name: 'List3',
                    icon: require('@/assets/nav/home.png') // 可优化换成icon图标
                },
                {
                    title: '网站首页5',
                    name: 'Home',
                    icon: require('@/assets/nav/home.png') // 可优化换成icon图标
                },
                {
                    title: '关于磁维6',
                    name: 'List1',
                    icon: require('@/assets/nav/home.png') // 可优化换成icon图标
                },
                {
                    title: '磁维师资7',
                    name: 'List2',
                    icon: require('@/assets/nav/home.png') // 可优化换成icon图标
                },
                {
                    title: '课程介绍8',
                    name: 'List3',
                    icon: require('@/assets/nav/home.png')// 可优化换成icon图标
                },
                {
                    title: '网站首页9',
                    name: 'Home',
                    icon: require('@/assets/nav/home.png') // 可优化换成icon图标
                },
                {
                    title: '关于磁维10',
                    name: 'List1',
                    icon: require('@/assets/nav/home.png') // 可优化换成icon图标
                },
                {
                    title: '磁维师资11',
                    name: 'List2',
                    icon: require('@/assets/nav/home.png') // 可优化换成icon图标
                },
                {
                    title: '课程介绍12',
                    name: 'List3',
                    icon: require('@/assets/nav/home.png')// 可优化换成icon图标
                }
            ]
        }
    },
    methods: {
        close () {
            this.$emit('closeNav')
        }
    }
}
</script>
<style scoped>
    .nav{
        height: 100%;
        position: absolute;
    }
    .nav_shade{
        content: '';
        display: inline-block;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 10;
        background: rgba(0, 0, 0, .5);
    }
    .nav_box{
        width: 50%;
        height: 100%;
        background: #333;
        position: fixed;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 100;
        overflow-y: auto;
    }
    .nav-enter{
        transform: translateX(100%);
        opacity: 1;
    }
    .nav-enter-active{
        transition: all .6s ease;
    }
    .nav-leave-to{
        transform: translateX(100%);
        opacity: 0;
    }
    .nav-leave-active {
        transition: all .6s ease;
    }
</style>
