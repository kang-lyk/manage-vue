<template>
    <div>
        <a-menu
            theme="dark"
            mode="inline"
            :default-selected-keys="['0']"
            :default-open-keys="['sub1']"
        >
            <a-menu-item key="0">
                <a-icon type="user" />
                <span>菜单1</span>
            </a-menu-item>
            <a-sub-menu key="sub0">
                <p slot="title">
                    <a-icon type="mail" />
                    <span>有子菜单</span>
                </p>
                <a-menu-item key="5">
                    Option 5
                </a-menu-item>
                <a-menu-item key="6">
                    Option 6
                </a-menu-item>
                <a-menu-item key="7">
                    Option 7
                </a-menu-item>
                <a-menu-item key="8">
                    Option 8
                </a-menu-item>
            </a-sub-menu>
            <a-menu-item key="2">
                <a-icon type="video-camera" />
                <span>菜单2</span>
            </a-menu-item>
            <a-menu-item key="3">
                <a-icon type="upload" />
                <span>菜单3</span>
            </a-menu-item>
        </a-menu>
    </div>
</template>

<script>
export default {
    name: 'LeftMenu'
}
</script>
