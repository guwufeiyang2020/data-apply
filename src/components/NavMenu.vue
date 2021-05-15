<template>
	<div class="nav-menu">
		<el-menu-item v-for="navMenu in noChildren" :index="navMenu.id" :key="navMenu.id">
			<p slot="title" @click.stop="clickMenu(navMenu)">
        <i :class="'el-icon-' + navMenu.icon"></i>
        {{navMenu.label}}
      </p>
		</el-menu-item>
		<el-submenu v-for="navMenu in hasChildren" :key="navMenu.id" :index="navMenu.id">
			<template slot="title" @click.stop="clickMenu(navMenu)">
				<p>
          <i :class="'el-icon-' + navMenu.icon"></i>
          {{navMenu.label}}
        </p>
			</template>
			<nav-menu :navMenus="navMenu.children"></nav-menu>
		</el-submenu>
	</div>
</template>

<script>
export default {
  name: 'NavMenu',
  props: {
    navMenus: Array
  },
  computed: {
    noChildren () {
      if(this.navMenus && this.navMenus.length > 0) {
        return this.navMenus.filter(item => !item.children);
      } else {
        return [];
      }
    },
    hasChildren() {
      if(this.navMenus && this.navMenus.length > 0) {
        return this.navMenus.filter(item => item.children);
      } else {
        return [];
      }
    }
  },
  data() {
    return {

    };
  },
  methods: {
    clickMenu(menu) {
      this.$router.push({ path: menu.path });
    }
  }
};
</script>

<style lang="scss" scoped>
.nav-menu {
	/deep/ .el-submenu {
		float: left;
		.el-submenu__title {
			padding: 0 .35rem 0 .1rem;
			display: flex;
			align-items: center;
			.el-submenu__icon-arrow {
				margin-top: -0.06rem;
			}
		}
	}
}
</style>
