<template>
    <header class="home_header">
        <div class="head_a">
            <img class="head_img" :src="homeIcon" alt="Home">
            首页
        </div>
        <div>磁维教育</div>
        <div class="head_a" @click="changeNav">
            <img class="head_img" :src="workIcon" alt="Home">
            菜单
        </div>
    </header>
</template>
<script>
export default {
    data () {
        return {
             homeIcon: require('@/assets/nav/home.png'),
            workIcon: require('@/assets/nav/work.png'),
        }
    },
    methods: {
        changeNav () {
            this.$emit('changeNav')
        }
    }
}
</script>
<style scoped>
.home_header{
    position: absolute;
    left: 24px; right: 24px; top: 0;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
}
.head_a{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
}
.head_img{
    width: 16px;
    margin-right: 8px;
}
</style>