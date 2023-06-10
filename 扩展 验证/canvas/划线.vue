<template>
    <canvas ref="canvas"
            width="100%"
            height="100%">
    </canvas>
</template>

<script>
export default {
  name: "划线",

  props: {
    data: {
      type: Array,
      default: () => {
        return [1.2, 3, 1.5, 2.8, 3.8];
      }
    },

    xaxisMargin: {
      type: Number,
      default: 50
    },

    numberMultiple: {
      type: Number,
      default: 100
    }
  },

  mounted() {
      // 初始化
      this.init();
  },

  methods: {
    init() {
      var ctx = this.$refs.canvas.getContext("2d");
      ctx.beginPath();
      ctx.strokeStyle = "green"; //红色

      this.data.forEach((item, index) => {
        ctx.lineTo((this.xaxisMargin * index) + 3, item * this.numberMultiple);

        ctx.fillText(index, this.xaxisMargin * index, (item * this.numberMultiple) - 4);
      });

      ctx.stroke();
    }
  }
};
</script>