<template>
  <el-container class="home-container">
    <!-- 头部 -->
    <el-header>
      <div>
        <img src="../assets/logo.png" alt="" />
        <!-- <span>后台管理系统</span> -->
        <h2>后台管理系统</h2>
      </div>
      <el-button type="info" @click="exit">退出</el-button>
    </el-header>
    <!-- 页面主体 -->
    <el-container>
      <!-- 左侧边栏-->
      <el-aside :width="isToggle?'200px':'64px'">
        <el-menu
          class="el-menu-vertical-demo"
          background-color="bisque"
          text-color="#fff"
          active-text-color="#ffd04b"
          unique-opened
          router
        >
        <div class="toggle-button" @click="toggleBtn">|||</div>
          <!--一级菜单 -->
          <el-submenu :index="menu.id" v-for="menu in menuList" :key="menu.id">
            
            <!-- 一级菜单模板区域-->
            <template slot="title">
              <!--图标 -->
              <i :class="menu.icon"></i>
              <!--文本 -->
              <span>{{ menu.title }}</span>
            </template>
            <!--二级菜单 -->
            <el-menu-item
              :index="item.id"
              v-for="item in menu.children"
              :key="item.id"
            >
              <template>
                <i :class="item.icon"></i>
                <span>{{ item.title }}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右侧内容主体 -->
      <el-main>
        <router-view> </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      isToggle:'true',
      menuList: [
        {
          id: 1,
          icon: "el-icon-user-solid",
          title: "用户管理",
          children: [
            {
              id: 1 - 1,
              icon: "el-icon-menu",
              title: "添加用户",
            },
            {
              id: 1 - 2,
              icon: "el-icon-menu",
              title: "删除用户",
            },
            {
              id: 1 - 3,
              icon: "el-icon-menu",
              title: "修改用户",
            },
            {
              id: 1 - 4,
              icon: "el-icon-menu",
              title: "查询用户",
            },
          ],
        },
        {
          id: 2,
          icon: "el-icon-s-goods",
          title: "商品管理",
          children: [
            {
              id: 2 - 1,
              icon: "el-icon-menu",
              title: "添加商品",
            },
            {
              id: 2 - 2,
              icon: "el-icon-menu",
              title: "删除商品",
            },
            {
              id: 2 - 3,
              icon: "el-icon-menu",
              title: "修改商品",
            },
            {
              id: 2 - 4,
              icon: "el-icon-menu",
              title: "查询商品",
            },
          ],
        },
      ],
    };
  },
  methods:{
    exit(){
      this.$router.push(
        {
          path:'/login'
        }
      )
    },
    toggleBtn(){
      this.isToggle = !this.isToggle;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-container {
  height: 100vh;
}
img {
  height: 60px;
  margin: 0 15px;
}
.el-header {
  /* background-color: #373d41; */
  background-color: wheat;
  display: flex;
  justify-content: space-between;
  /* padding-left: 0px; */
  align-items: center;
  color: white;
}
.el-header div {
  display: flex;
  align-items: center;
}
.el-aside {
  /* background-color: #333744; */
  background-color: bisque;
}
.el-main {
  background-color: #eaedf1;
}
.el-submenu{
  background: chartreuse;
}
.toggle-button{
  font-size: 20px;
  letter-spacing: 5px;
  cursor: pointer;
  line-height: 100%;
}

</style>
