<template>
    <div class="demo">
        <div class="content">
            内容内容内容内容内容内容内容内容内容内容内容内容
            <button @click="isShow = true">显示</button>
        </div>

        <div ref="modal"
             :class="{isShow}"
             class="modal"
             @click="isShow = false">
        </div>
    </div>
</template>

<style lang="scss" src="./index.scss"></style>

<script src="./index.js"></script>
