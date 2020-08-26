<template>
  <div>
    <!-- 面包屑 -->
    <el-bread></el-bread>
    <!-- 添加按钮 -->
    <div>
      <el-button @click="openDialog" type="primary" size="mini" plain>添加</el-button>
    </div>
    <el-table :data="get_MenuList" border row-key="id" default-expand-all :tree-props="{children: 'children'}">
      <el-table-column prop="id" label="菜单编号" width="180"></el-table-column>
      <el-table-column prop="title" label="菜单名称" width="180"></el-table-column>
      <el-table-column prop="pid" label="上级菜单"></el-table-column>
      <el-table-column prop="icon" label="菜单图标" width="180"></el-table-column>
      <el-table-column prop="url" label="菜单地址" width="180"></el-table-column>
      <el-table-column prop="status" label="状态">
        <template slot-scope="item">
          <el-tag v-if="item.row.status ==1" type="success">正常</el-tag>
          <el-tag v-else type="danger">禁用</el-tag>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="item">
          <el-button type="primary" @click="edit(item.row.id)" icon="el-icon-edit" circle></el-button>
          <el-button type="danger" @click="del(item.row.id)" icon="el-icon-delete" circle></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 
      弹出对话框   
    -->
    <el-dialog :before-close="reset" :title="isAdd?'添加菜单':'编辑菜单'" :visible.sync="dialogShow" center>
      <el-form :model="menuForm" :rules="rules" ref="ruleForm">
        <el-form-item prop="title" label="菜单名称：" :label-width="formLabelWidth">
          <el-input v-model="menuForm.title"></el-input>
        </el-form-item>
        <el-form-item prop="pid" label="上级菜单：" :label-width="formLabelWidth">
          <el-select v-model="menuForm.pid" placeholder="请选择">
            <el-option value disabled>--请选择--</el-option>
            <el-option label="顶级菜单" :value="0">顶级菜单</el-option>
            <el-option
              v-for="item in get_MenuList"
              :key="item.id"
              :label="item.title"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="菜单类型：" :label-width="formLabelWidth">
          <el-radio v-model="menuForm.type" :label="1">目录</el-radio>
          <el-radio v-model="menuForm.type" :label="2">菜单</el-radio>
        </el-form-item>
        <el-form-item v-if='menuForm.type==1' prop="icon" label="菜单图标：" :label-width="formLabelWidth">
          <el-input v-model="menuForm.icon"></el-input>
        </el-form-item>
        <el-form-item v-if='menuForm.type==2' label="菜单地址：" :label-width="formLabelWidth">
          <el-input v-model="menuForm.url"></el-input>
        </el-form-item>
        <el-form-item label="状态：" :label-width="formLabelWidth">
          <el-switch
            v-model="menuForm.status"
            active-color="#13ce66"
            inactive-color="#ff4949"
            :active-value="1"
            :inactive-value="2"
          ></el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="reset">取 消</el-button>
        <el-button @click="add('ruleForm')" type="primary">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
//引入封装接口
import {
  getMenuAdd,
  getMenuList,
  getMenuInfo,
  getMenuEdit,
  getMenuDel,
} from "../util/axios";
import elBread from "../components/elBread";

export default {
  data() {
    return {
      editId: 0, //编辑删除用的
      isAdd: true, //是否是添加
      formLabelWidth: "120px", //lable宽度
      menuForm: {
        title: "",
        pid: 0,
        type: 1, //类型1目录2菜单
        url: "",
        //  status: true,
        status: 1,
        icon: "",
      },
      dialogShow: false, //控制对话框的显示隐藏
     // tableData: [],
      //表单验证（根据产品需求制定）
      rules: {
        title: [
          //代表加红色星标
          { required: true, message: "请输入菜单名称", trigger: "blur" },
          //验证字符数
          { min: 2, max: 9, message: "长度在 3 到 9 个字符", trigger: "blur" },
        ],
        pid: [
          //代表加红色星标
          { required: true, message: "请选择上级菜单", trigger: "change" },
        ],
      },
    };
  },
  mounted() {
    //页面一加载就获取菜单列表
   // this.get_menu_list();
   this.getMenuListAction()
  },
    computed: {
    ...mapGetters(['get_MenuList'])
  },
  methods: {
    //封装打开弹框事件(新增按钮)
    openDialog() {
      this.isAdd = true;
      this.dialogShow = true;
    },
    //编辑事件
    edit(id) {
      this.editId = id;
      //更改isAdd状态
      this.isAdd = false;
      getMenuInfo({ id }).then((res) => {
        console.log(res, "一条数据");
        if (res.code == 200) {
          this.dialogShow = true;
          this.menuForm = res.list;
        }
      });
    },
    //删除事件
    del(id) {
      this.$confirm("确定要删除该数据吗", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          //调取删除接口
          getMenuDel({id}).then((res) => {
            if (res.code === 200) {
              this.$message({
                type: "success",
                message: res.msg,
              });
              //重新调取列表接口
              this.getMenuListAction()
            }else{
              this.$message.error(res.msg)
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
    //封装获取菜单列表
    ...mapActions(['getMenuListAction']),
    //关闭弹框事件
    //封装一个清空事件
    reset() {
      //方法一
      this.menuForm = {
        title: "",
        pid: 0,
        type: 1, //类型1目录2菜单
        url: "",
        //  status: true,
        status: 1,
        icon: "",
      };
      this.dialogShow = false;
    },
    //添加表单事件
    add(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.isAdd) {
            //调取添加接口
            getMenuAdd(this.menuForm).then((res) => {
              if (res.code === 200) {
                this.$message.success(res.msg);
                //关闭弹框并清空
                this.reset();
                //重新调取列表
                this.getMenuListAction();
              }
            });
          } else {
            //id编号，必填项  对数据进行编辑
            this.menuForm.id = this.editId;
            //调取添加接口
            getMenuEdit(this.menuForm).then((res) => {
              if (res.code === 200) {
                this.$message.success(res.msg);
                //关闭弹框并清空
                this.reset();
                //重新调取列表
                this.getMenuListAction();
              }
            });
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
  components: {
    elBread,
  },
};
</script>

<style  lang="stylus" scoped>
.el-button {
  margin-bottom: 15px;
}
</style>
