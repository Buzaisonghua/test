<template>
    <div class="suggest_main">
        <Title :show="show" name="直播中心"/>
        <div class="box">
            <div :class="{'show': show}" class="suggest_list">
                <video class="suggest_img" v-for="item in list" :key="item.name" width="44%" height="100" controls>
                    <source :src="item.img" type="video/mp4">
                </video>
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
                    img: require('@/assets/home/direct.mp4'),
                    name: 'img1'
                },
                {
                    img: require('@/assets/home/direct.mp4'),
                    name: 'img2'
                },
                {
                    img: require('@/assets/home/direct.mp4'),
                    name: 'img3'
                },
                {
                    img: require('@/assets/home/direct.mp4'),
                    name: 'img5'
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
    background-color: #ccc;
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