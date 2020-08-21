<template>
    <ul class="topList">
        <li class="topList-item">
            <a-badge count="8">
                <a-icon
                    type="bell"
                    class="bell"
                />
            </a-badge>
        </li>
        <li class="topList-item">
            <a-popover placement="bottom">
                <a-avatar
                    :size="34"
                    icon="user"
                />
                毛绒匪
                <template slot="content">
                    <p>
                        <a-icon type="user" />
                        个人中心
                    </p>
                    <p>
                        <a-icon type="setting" />
                        店铺设置
                    </p>
                    <router-link to="/login">
                        <a-icon type="poweroff" />
                        退出登录
                    </router-link>
                </template>
            </a-popover>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
    li {
        list-style: none;
        margin: 0;
    }
    .topList {
        display: flex;
        height: 100%;
        &>li {
            flex: 0 1 auto;
            padding: 0 20px;
            &:hover {
                background-color: rgba(0,0,0,.025);
                cursor: pointer;
            }
        }
        .bell {
            font-size: 20px;
        }
    }
</style>

<script>
export default {
    name: 'TopHeader'
}
</script>
