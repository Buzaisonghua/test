<template>
    <div class="teacher">
        <Title :show="show" name="师资力量"/>
        <img class="img" :class="{'show': show}" src="@/assets/home/teacher.png" alt="teacher">
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
    }
}
</script>
<style scoped>
    .teacher{
        overflow: hidden;
    }
    .img{
        width: 100%;
        transform: translateY(110%);
    }
    .show{
        transform: translateY(0);
        transition: 600ms ease all;
    }
</style>