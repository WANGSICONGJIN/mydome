<template>
  <div>
    <el-table :data="get_UserList" border>
      <el-table-column prop="uid" label="用户编号" width="180"></el-table-column>
      <el-table-column prop="username" label="用户名称" width="180"></el-table-column>
      <el-table-column prop="rolename" label="所属角色" width="180"></el-table-column>
      <el-table-column prop="status" label="状态">
        <template slot-scope="item">
          <el-tag v-if="item.row.status ==1" type="success">正常</el-tag>
          <el-tag v-else type="danger">禁用</el-tag>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="item">
          <el-button type="primary" @click="update(item.row.uid)" icon="el-icon-edit" circle></el-button>
          <el-button type="danger" icon="el-icon-delete" @click="del(item.row.uid)" circle></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      :page-size="pageInfo.size"
      @current-change="getChange"
      @prev-click="prevInfo"
      @next-click="nextInfo"
    ></el-pagination>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
//调用接口
import {
  getUserDel,
  getUserCount,
  getUserAdd,
  getUserEdit,
} from "../../util/axios";
export default {
  data() {
    return {
      total: 0, //总条数
      pageInfo: {
        //分页的信息
        size: 2, //查询条数
        page: 1, //页码数
      },
      changePage: 1,
    };
  },
  mounted() {
    //页面一加载调取总条数
    this.getCount();
    this.getUserListAction(this.pageInfo);
  },
  computed: {
    ...mapGetters(["get_UserList"]),
  },
  methods: {
    ...mapActions(["getUserListAction"]),
    //点击编辑按钮传uid
    update(uid) {
      this.$emit("update", {
        uid,
        isAdd: false,
        changePage: this.changePage,
      });
    },
    //删除数据
    del(uid) {
      this.$confirm("确定要删除该数据吗", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          //调取删除接口
          getUserDel({ uid }).then((res) => {
            if (res.code === 200) {
              this.$message({
                type: "success",
                message: res.msg,
              });
              //重新调取列表接口
              this.getCount();
            } else {
              this.$message.error(res.msg);
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    //获取总条数
    getCount() {
      console.log("被add调取111111");
      getUserCount().then((res) => {
        if (res.code === 200) {
          console.log(res, "总条数");
          this.total = res.list[0].total;
          //逻辑判断
          //首先判断数组是不是只有一条数据并且它并不是第一页，如果是 page页面--
          if (this.pageInfo.page != 1 && this.get_UserList.length == 1) {
            this.pageInfo.page--;
          }
          //重新调取列表
          this.getUserListAction(this.pageInfo);
        }
      });
    },
    //当页面发生变化的时候会调用当前方法
    getChange(n) {
      console.log(n, "当前的页面");
      this.pageInfo.page = n;
      this.changePage = n;
      //重新调取列表
      this.getUserListAction(this.pageInfo);
    },
    //上一页事件
    prevInfo(n) {
      console.log(n, "当前页");
      this.pageInfo.page = n;
      this.changePage = n;
      //重新调取列表
      this.getUserListAction(this.pageInfo);
    },
    //下一页事件
    nextInfo(n) {
      console.log(n, "当前页");
      this.pageInfo.page = n;
      this.changePage = n;
      //重新调取列表
      this.getUserListAction(this.pageInfo);
    },
  },
};
</script>

<style  lang="" scoped>
.el-pagination {
  float: right;
  margin: 16px 0;
}
</style>


