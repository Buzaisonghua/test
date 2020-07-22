<template>
    <div class="home" @scroll.passive="scroll">
        <Header @changeNav="changeNav"/>
        <Nav @closeNav="closeNav" :show="showNav"/>
        <img :src="banner" class="banner" alt="banner">
        <div ref="suggest">
            <Suggest :show="showSuggest"/>
        </div>
        <div ref="teacher">
            <Teacher :show="showTeacher"/>
        </div>
        <div ref="direct">
            <Direct :show="showDirect"/>
        </div>
        <div ref="lista">
            <Suggest :show="showLista"/>
        </div>
        <div ref="listb">
            <Teacher :show="showListb"/>
        </div>
        <div ref="listc">
            <Direct :show="showListc"/>
        </div>
        <div ref="listd">
            <Suggest :show="showListd"/>
        </div>
        <div ref="liste">
            <Teacher :show="showListe"/>
        </div>
        <div ref="listf">
            <Direct :show="showListf"/>
        </div>
    </div>
</template>
<script>
import Nav from './tem/Nav'
import Header from './tem/Header'
import Suggest from './tem/Suggest'
import Teacher from './tem/Teacher'
import Direct from './tem/Direct'
export default {
    data () {
        return{
            banner: require('@/assets/home/banner.png'),
            showNav: false, 
            showSuggest: false,
            showTeacher: false,
            showDirect: false,
            showLista: false,
            showListb: false,
            showListc: false,
            showListd: false,
            showListe: false,
            showListf: false
        }
    },
    components: {
        Nav,
        Header,
        Suggest,
        Teacher,
        Direct
    },
    computed: {
        scrollHeight: () => event.target.scrollHeight
    },
    methods: {
        closeNav () { this.showNav = false },
        changeNav() { this.showNav = true },
        showScroll (top) {
            const bodyHeight = document.body.clientHeight
            const topList = top + bodyHeight
            const suggestTop = this.$refs.suggest.offsetTop
            const suggestHeight = this.$refs.suggest.clientHeight
            const teacherTop = this.$refs.teacher.offsetTop
            const teacherHeight = this.$refs.teacher.clientHeight
            const directTop = this.$refs.direct.offsetTop
            const directHeight = this.$refs.direct.clientHeight
            const listaTop = this.$refs.lista.offsetTop
            const listaHeight = this.$refs.lista.clientHeight
            const listbTop = this.$refs.listb.offsetTop
            const listbHeight = this.$refs.listb.clientHeight
            const listcTop = this.$refs.listc.offsetTop
            const listcHeight = this.$refs.listc.clientHeight
            const listdTop = this.$refs.listd.offsetTop
            const listdHeight = this.$refs.listd.clientHeight
            const listeTop = this.$refs.liste.offsetTop
            const listeHeight = this.$refs.liste.clientHeight
            const listfTop = this.$refs.listf.offsetTop
            const listfHeight = this.$refs.listf.clientHeight
            if (top < suggestTop + suggestHeight && suggestTop < topList) {
                this.showSuggest = true
            } else {
                this.showSuggest = false
            }
            if (top < teacherTop + teacherHeight && teacherTop < topList) {
                this.showTeacher = true
            } else {
                this.showTeacher = false
            }
            if (top < directTop + directHeight && directTop < topList) {
                this.showDirect = true
            } else {
                this.showDirect = false
            }
            if (top < listaTop + listaHeight && listaTop < topList) {
                this.showLista = true
            } else {
                this.showLista = false
            }
            if (top < listbTop + listbHeight && listbTop < topList) {
                this.showListb = true
            } else {
                this.showListb = false
            }
            if (top < listcTop + listcHeight && listcTop < topList) {
                this.showListc = true
            } else {
                this.showListc = false
            }
            if (top < listdTop + listdHeight && listdTop < topList) {
                this.showListd = true
            } else {
                this.showListd = false
            }
            if (top < listeTop + listeHeight && listeTop < topList) {
                this.showListe = true
            } else {
                this.showListe = false
            }
            if (top < listfTop + listfHeight && listfTop < topList) {
                this.showListf = true
            } else {
                this.showListf = false
            }
        },
        scroll (event) {
            this.showScroll(event.target.scrollTop)
        }
    },
    mounted () {
        this.showScroll(0)
    }
}
</script>
<style scoped>
.home{
    height: 100%;
    overflow-y: scroll;
}
.banner{
    width: 100%;
    height: 200px;
    box-shadow:  0 3px 6px 3px #ccc;
}
</style>