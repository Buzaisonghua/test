<template>
    <div class="nav_list" @click="goNav(item)" :class="{'isFirst': index === 0, 'isLast': index === len - 1}">
        <img class="nav_list_img" :src="item.icon" :alt="item.title">
        <span>{{ item.title }}</span>
    </div>
</template>
<script>
export default {
    props: {
        item: {
            type: Object,
            default: () => ({})
        },
        index: {
            type: Number,
            default: 0
        },
        len: {
            type: Number,
            default: 0
        }
    },
    methods: {
        goNav (item) {
            this.$router.push({name: item.name})
        }
    }
}
</script>
<style>
   .nav_list{
       color: #fff;
       font-size: 12px;
       margin: 0 20px;
       height: 50px;
       border-bottom: 1px solid #fff;
       display: flex;
       align-items: center;
   } 
   .nav_list_img{
       width: 16px;
       margin: 0 16px;
   }
   .isFirst{
       padding-top: 24px;
   }
   .isLast{
       padding-bottom: 24px;
       border-bottom: 0 none;
   }
</style>