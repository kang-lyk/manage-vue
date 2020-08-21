<template>
    <div>
        <a-layout class="login">
            <a-layout-content class="loginBox">
                <a-tabs default-active-key="0">
                    <a-tab-pane
                        key="0"
                        tab="账号登录"
                    >
                        <AccountFrom class="formBox" />
                    </a-tab-pane>
                    <a-tab-pane
                        key="1"
                        tab="手机登录"
                    >
                        <MobileFrom class="formBox" />
                    </a-tab-pane>
                </a-tabs>
            </a-layout-content>
            <a-layout-footer class="footer">
                2019 联美技术部出品
            </a-layout-footer>
        </a-layout>
    </div>
</template>

<style lang="scss" scoped>
    .login {
        min-height: 540px;
        height: 100vh;
        .ant-tabs-nav-wrap {
            text-align: center;
        }
    }
    .loginBox {
        flex: 1 1 auto;
        padding-top: 80px;
        width: 368px;
        margin: 0 auto;
    }
    .formBox {
        margin-top: 30px;
    }
    .footer {
        text-align: center;
    }
</style>

<script>
import Vue from 'vue'
import { Tabs, Layout } from 'ant-design-vue'
import AccountFrom from '@/components/login/AccountFrom.vue'
import MobileFrom from '@/components/login/MobileFrom.vue'

Vue.use(Tabs)
Vue.use(Layout)

export default {
    name: 'Login',
    components: {
        AccountFrom,
        MobileFrom
    }
}
</script>
