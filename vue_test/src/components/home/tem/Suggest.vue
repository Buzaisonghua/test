<template>
    <div class="suggest_main">
        <Title :show="show" name="课程介绍"/>
        <div class="box">
            <div :class="{'show': show}" class="suggest_list">
                <img class="suggest_img" v-for="item in list" :src="item.img" :alt="item.name" :key="item.name" >
            </div>
        </div>
    </div>
</template>
<script>
import Title from './Title'
export default {
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    components: {
        Title
    },
    data () {
        return {
            list: [
                {
                    img: require('@/assets/home/section05_pic_01.png'),
                    name: 'img1'
                },
                {
                    img: require('@/assets/home/section05_pic_01.png'),
                    name: 'img2'
                },
                {
                    img: require('@/assets/home/section05_pic_01.png'),
                    name: 'img3'
                },
                {
                    img: require('@/assets/home/section05_pic_01.png'),
                    name: 'img4'
                },
                {
                    img: require('@/assets/home/section05_pic_01.png'),
                    name: 'img5'
                },
                {
                    img: require('@/assets/home/section05_pic_01.png'),
                    name: 'img6'
                }
            ]
        }
    }
}
</script>
<style scoped>
.suggest_img{
    width: 44%;
    margin-left: 4%;
    margin-bottom: 12px;
}
.box{
    overflow: hidden;
} 
.suggest_list{
    transform: translateY(110%);
}
.show{
    transform: translateY(0);
    transition: 600ms ease all;
}
</style>