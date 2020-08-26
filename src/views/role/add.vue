<template>
  <div>
    <el-dialog
      :before-close="reset"
      :title="isShow.isAdd?'添加角色':'编辑角色'"
      :visible.sync="isShow.dialogShow"
      center
    >
      <el-form :model="roleForm" :rules="rules" ref="ruleForm">
        <el-form-item prop="rolename" label="角色名称：" :label-width="formLabelWidth">
          <el-input v-model="roleForm.rolename"></el-input>
        </el-form-item>
        <el-form-item label="角色权限：" :label-width="formLabelWidth">
          <!--             树形结构
            data	展示数据	array
            node-key	每个树节点用来作为唯一标识的属性，整棵树应该是唯一的	String
            props	配置选项，具体看下表	object
            default-expand-all	是否默认展开所有节点	boolean
          show-checkbox	节点是否可被选择	boolean
          
          getCheckedKeys	若节点可被选择（即 show-checkbox 为 true），则返回目前被选中的节点的 key 所组成的数组
setCheckedKeys	通过 keys 设置目前勾选的节点，使用此方法必须设置 node-key 属性	
default-checked-keys	默认勾选的节点的 key 的数组
check-strictly	在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false
          -->
          <el-tree
            :data="get_MenuList"
            show-checkbox
            default-expand-all
            node-key="id"
            ref="tree"
            :props="defaultProps"
            :default-checked-keys="defaultChecked"
            check-strictly
          ></el-tree>
        </el-form-item>
        <el-form-item label="状态：" :label-width="formLabelWidth">
          <el-switch
            v-model="roleForm.status"
            active-color="#13ce66"
            inactive-color="#ff4949"
            :active-value="1"
            :inactive-value="2"
          ></el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="reset">取 消</el-button>
        <el-button type="primary" @click="add('ruleForm')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
//引入接口
import { getRoleAdd, getRoleInfo, getRoleEdit } from "../../util/axios";
export default {
  data() {
    return {
      editId: 0,
      defaultChecked: [], //默认勾选的key
      formLabelWidth: "120px", //lable宽度
      roleForm: {
        rolename: "",
        status: 1,
      },
      rules: {
        rolename: [
          //代表加红色星标
          { required: true, message: "请输入角色名称", trigger: "blur" },
          //验证字符数
          { min: 2, max: 8, message: "长度在 2 到 8 个字符", trigger: "blur" },
        ],
      },
      defaultProps: {
        //树结构的显示配置项
        children: "children",
        label: "title",
      },
    };
  },
  mounted() {
    //组件一加载获取菜单列表
    this.getMenuListAction();
    //获取角色列表
    this.getRoleListAction();
  },
  computed: {
    ...mapGetters(["get_MenuList"]),
  },
  props: ["isShow"],
  methods: {
    reset() {
      //清空表单信息
      this.roleForm = {
        rolename: "",
        status: 1,
      };
      //清空tree结构权限的选择状态
      this.$refs.tree.setCheckedKeys([]);
      //子组件去修改父组件的弹框状态
      this.$emit("closeDialog", false);
    },
    //触发菜单列表的调取
    ...mapActions(["getMenuListAction", "getRoleListAction"]),
    //点击弹框获取一条数据
    update(id) {
      this.editId = id;
      getRoleInfo({ id }).then((res) => {
        if (res.code === 200) {
          console.log(res, "一条数据");
          this.roleForm = res.list;
          //得到的数组要做二次转换
          this.defaultChecked = this.roleForm.menus
            ? this.roleForm.menus.split(",")
            : [];
        }
      });
    },
    //添加表单事件
    add(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //菜单权限 存放的是菜单编号，用逗号隔开 '1,2,3,4,27'
          this.roleForm.menus = this.$refs.tree.getCheckedKeys().join(",");
          //调取接口
          //是否调取新增事件还是编辑事件
          if (this.isShow.isAdd) {
            //调取添加接口
            getRoleAdd(this.roleForm).then((res) => {
              if (res.code === 200) {
                this.$message.success(res.msg);
                //关闭弹框并清空
                this.reset();
                //重新调取列表
                this.getRoleListAction();
              }
            });
          } else {
            //id编号，必填项  对数据进行编辑
            this.roleForm.id = this.editId;
            // //调取添加接口
            getRoleEdit(this.roleForm).then((res) => {
              if (res.code === 200) {
                this.$message.success(res.msg);
                //关闭弹框并清空
                this.reset();
                //重新调取列表
                this.getRoleListAction();
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
};
</script>

<style  lang="" scoped>
</style>
