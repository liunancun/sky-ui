<template>
  <div :class="{'hide-sidebar':!this.sidebar.opened}" class="page">
    <el-pagination
      background
      :page-size.sync="pageSize"
      :total="total"
      :current-page.sync="currentPage"
      :layout="layout"
      :page-sizes="sizes"
      :class="{'fixed-page':fixed}"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Page",
  props: {
    size: {
      type: Number,
      default: 10
    },
    total: {
      required: true,
      type: Number
    },
    current: {
      type: Number,
      default: 1
    },
    layout: {
      type: String,
      default: "total, sizes, prev, pager, next, jumper"
    },
    sizes: {
      type: Array,
      default() {
        return [10, 30, 50, 100, 300, 500, 1000];
      }
    },
    fixed: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    ...mapGetters(["sidebar"]),
    pageSize: {
      get() {
        return this.size;
      },
      set(size) {
        this.$emit("update:size", size);
      }
    },
    currentPage: {
      get() {
        return this.current;
      },
      set(current) {
        this.$emit("update:current", current);
      }
    }
  },
  methods: {
    handleSizeChange(size) {
      this.$emit("change", { current: this.currentPage, size: size });
    },
    handleCurrentChange(current) {
      this.$emit("change", { current: current, size: this.pageSize });
    }
  }
};
</script>

<style lang="scss" scoped>
.page {
  height: 68px;
}
.fixed-page {
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - 210px);
  transition: width 0.28s;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  padding-left: 20px;
}
.hide-sidebar > .fixed-page {
  width: calc(100% - 54px);
}
.mobile .fixed-page {
  width: 100%;
}
</style>