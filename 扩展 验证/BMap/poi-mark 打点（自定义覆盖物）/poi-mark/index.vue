<template>
    <div class="poi-mark">
        <div class="poi-mark-create"
            @click="markCreate">
            <span class="mark-location"></span>
            <span class="mark-prompt">标记</span>
            <div class="mark-tooltip-create">
                点击此处，开启地图标记模式
                <br>
                单击标记可拖动，双击标记可移除
            </div>
        </div>

        <span class="poi-mark-clear">
            <Icon type="close-circled"
                @click.native="markClear">
            </Icon>

            <div class="mark-tooltip-clear">
                点击此处，移除所有标记
            </div>
        </span>
    </div>
</template>

<style src="./index.scss" lang="scss"></style>

<script src="./index.js"></script>
