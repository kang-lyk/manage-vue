<template>
    <div>
        <a-layout class="home">
            <a-layout-sider>
                <h1 class="logo">
                    衣联网
                </h1>
                <LeftMenu />
            </a-layout-sider>
            <a-layout>
                <a-layout-header class="header">
                    <a-icon
                        type="bars"
                        :style="{ fontSize: '26px', color: '#999' }"
                        class="leftMenuBtn"
                    />
                    <TopHeader class="topMenu" />
                </a-layout-header>
                <a-layout-content class="homeContent">
                    <a-breadcrumb class="breadcrumb">
                        <a-breadcrumb-item>
                            <a-icon type="home" />
                        </a-breadcrumb-item>
                        <a-breadcrumb-item><a href="">商品</a></a-breadcrumb-item>
                        <a-breadcrumb-item><a href="">商品详情</a></a-breadcrumb-item>
                    </a-breadcrumb>
                    <router-view />
                </a-layout-content>
            </a-layout>
        </a-layout>
    </div>
</template>
<style lang="scss">

.home {
    height: 100vh;
    .logo {
        color: #fff;
        text-align: center;
        line-height: 2em;
    }
    .header {
        background-color: #fff;
        padding: 0;
        box-shadow: 0 2px 8px #f0f1f2;
    }
    .breadcrumb {
        margin: 10px 0;
    }
    .topMenu {
        float: right;
    }
    .leftMenuBtn {
        margin-left: 20px;
    }
    .homeContent {
        padding: 0 20px 20px 20px;
    }
}
</style>

<script>
// @ is an alias to /src
import LeftMenu from '@/components/LeftMenu.vue'
import TopHeader from '@/components/TopHeader.vue'

export default {
    name: 'Home',
    components: {
        LeftMenu,
        TopHeader
    }
}
</script>
