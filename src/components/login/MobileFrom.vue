<template>
    <div>
        <a-form>
            <a-form-item>
                <a-input
                    size="large"
                    placeholder="手机号"
                >
                    <a-icon
                        slot="prefix"
                        type="mobile"
                    />
                </a-input>
            </a-form-item>
            <a-form-item>
                <a-row>
                    <a-col :span="17">
                        <a-input
                            size="large"
                            placeholder="短信"
                        >
                            <a-icon
                                slot="prefix"
                                type="mail"
                            />
                        </a-input>
                    </a-col>
                    <a-col
                        :span="7"
                        class="msgBtnBox"
                    >
                        <a-button size="large">
                            发送信息
                        </a-button>
                    </a-col>
                </a-row>
            </a-form-item>
            <a-form-item>
                <a-checkbox>自动登录</a-checkbox>
            </a-form-item>
            <a-form-item>
                <a-button
                    type="primary"
                    size="large"
                    block
                >
                    登录
                </a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<style lang="scss">
    .msgBtnBox {
        padding-left: 10px;
    }
</style>

<script>
export default {
    name: 'MobileFrom'
}
</script>
