<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  mpType: "app",
  onLaunch() {
    console.log("App Launch");
    // document.addEventListener("keydown", async (e: KeyboardEvent) => {
    //   if (e) {
    //     await this.$ajax.base.reset();
    //   }
    // });
    // document.addEventListener("click", async (e) => {
    //   if (e) {
    //     await this.$ajax.base.reset();
    //   }
    // });
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
.u-column {
  overflow: auto;
}
</style>
