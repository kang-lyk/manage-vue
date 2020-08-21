<template>
    <div>
        <a-form
            :form="form"
            @submit="handleSubmit"
        >
            <a-form-item>
                <a-input
                    html-type="text"
                    size="large"
                    placeholder="用户名"
                    v-decorator="usernameDecorator"
                >
                    <a-icon
                        slot="prefix"
                        type="user"
                    />
                </a-input>
            </a-form-item>
            <a-form-item>
                <a-input
                    :type="passwordType"
                    size="large"
                    placeholder="密码"
                    v-decorator="passwordDecorator"
                >
                    <a-icon
                        slot="prefix"
                        type="lock"
                    />
                    <a-icon
                        slot="suffix"
                        type="eye"
                        @click="changePasswordType"
                    />
                </a-input>
            </a-form-item>
            <a-form-item>
                <a-checkbox v-decorator="[]">
                    自动登录
                </a-checkbox>
            </a-form-item>
            <a-form-item>
                <a-button
                    type="primary"
                    size="large"
                    block
                    html-type="submit"
                >
                    登录
                </a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script>
export default {
    name: 'AccountFrom',
    data () {
        return {
            passwordType: 'password',
            form: this.$form.createForm(this, { name: 'coordinated' }),
            usernameDecorator: [
                'username',
                {
                    rules: [
                        {
                            required: true,
                            message: '请输入用户名'
                        }
                    ]
                }
            ],
            passwordDecorator: [
                'password',
                {
                    rules: [
                        {
                            required: true,
                            message: '请输入密码'
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        /**
         * 显示隐藏代码
         */
        changePasswordType () {
            if (this.passwordType === 'password') {
                this.passwordType = 'text'
            } else {
                this.passwordType = 'password'
            }
        },
        /**
         * 提交表单
         */
        handleSubmit (even) {
            even.preventDefault()
            this.form.validateFields((err, values) => {
                if (!err) {
                    this.$eellyAjax({
                        url: '/login',
                        data: values
                    })
                }
            })
        }
    }
}
</script>
