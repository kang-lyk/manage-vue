<template>
    <div class="error">
        <h1>404</h1>
        <h2>抱歉，你访问的页面不还在</h2>
    </div>
</template>
<style lang="scss" scoped>
    .error {
        text-align: center;
        padding: 100;
        &>h1 {
           font-size: 36px;
        }
        &>h2 {
            font-size: 24px;
            color: #666666;
            margin-top: 2em;
        }
    }
</style>

<script>
export default {
    name: 'Page404'
}
</script>
