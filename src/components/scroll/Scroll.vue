<template>
  <div class="swiper" ref="swiper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
    name: "Scroll",
    props: {
        probeType: {
            type: Number,
            default() {
                return 0
            }
        }
    },
    scrollbar: {
        type: [Boolean, Object],
        default() {
            return ture
        }
    },
    data() {
    return {
        scroll: null
        }
    },
    mounted() {
        this.scroll = new BScroll(this.$refs.swiper, {
            click: true,
            probeType: this.probeType,
            scrollbar: this.scrollbar
        })
        this.scroll.on('scroll', (position) => {
            this.$emit('scroll',position)
        })
    },
    methods: {
        scrollTo(x, y, timer = 500) {
            this.scroll.scrollTo(x, y, timer)
        },
        refresh() {
            this.scroll.refresh()
        },
        getScrollY() {
            return this.scroll ? this.scroll.y:0
        }
    }

}

</script>
<style scoped>
</style>