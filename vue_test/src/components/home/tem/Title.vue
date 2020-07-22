<template>
    <div :class="{'show': show}" class="title">{{ name }}</div>
</template>
<script>
export default {
    props: {
        name: {
            type: String,
            default: ''
        },
        show: {
            type: Boolean,
            default: false
        }
    }
}
</script>
<style scoped>
    .title{
        height: 40px;
        width: 75%;
        background-color: orange; /* 不支持线性的时候显示 */
        background-image: linear-gradient(to right, #fff , orange);
        display: flex;
        align-items: center;
        padding-left: 12px;
        font-family: 'SourceHanSansCN';
        font-weight:bold;
        color:rgba(27,27,27,1);
        margin: 24px 0;
        border-radius: 0 6px 6px 0;
        opacity: 0;
        transform: translateX(-100%);
    }
    .show {
        opacity: 1;
        transform: translateX(0);
        transition: 600ms ease all;
    }
</style>