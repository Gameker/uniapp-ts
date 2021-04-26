<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  mpType: "app",
  onLaunch() {
    console.log("App Launch");
  },
  onShow() {
    console.log("App Show");
  },
  onHide() {
    console.log("App Hide");
  },
});
</script>

<style lang="scss">
/*每个页面公共css */
@import "uview-ui/index.scss";
uni-view#u-left-column,
uni-view#u-right-column {
  overflow: auto;
}
</style>
