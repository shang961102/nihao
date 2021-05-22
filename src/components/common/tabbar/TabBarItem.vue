<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActive" ><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon_active"></slot></div>
        <div :style="activeStyle"><slot name="item-text"></slot></div>
        <!-- 计算属性动态绑定样式style -->
        <!-- <div :style="isActive ? {color: this.activeColor} : {}"><slot name="item-text"></slot></div> -->
    </div>
</template>
<script>
export default {
    name: "TabBarItem",
    props: {
        path: String,
        activeColor: {
            type: String,
            default: 'red'
        }
    },
    data() {
        return {
            // isActive: true,
        }
    },
    computed: {
        isActive() {
            return this.$route.path.indexOf(this.path) !== -1
        },
        activeStyle() {
            return this.isActive ? {color: this.activeColor} : {}
        }
    },
    methods: {
        itemClick() {
            this.$router.replace(this.path)
        }
    }
}
</script>
<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  
}
.tab-bar-item img {
    width: 24px;
    height: 24px;
}

</style>