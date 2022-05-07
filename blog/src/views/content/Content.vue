<template>
  <div class="content">
    <div class="content-core">
      <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="listData">
        <div slot="footer">访问量 : 99</div>
        <a-list-item slot="renderItem" key="item.title" slot-scope="item, index">
          <template v-for="{ type, text } in actions" slot="actions">
        <span :key="type">
          <a-icon :type="type" style="margin-right: 8px"/>
          {{ text }}
        </span>
          </template>
          <div>
            <a-list-item-meta :description="item.description" :date="item.date">
              <a slot="title" :href="item.href">{{ item.title }}</a>
              <a style="float: right" slot="title" :href="item.href">
                <img
                  style="margin: auto 5px"
                  slot="extra"
                  width="18"
                  alt="logo"
                  src="../../assets/img/date.svg"
                />{{ item.date }}</a>
            </a-list-item-meta>
          </div>
          <div>
            <a-button size="small" style="float: right; font-size: 10px; background-color: #7CA384; color: #F7F7F7"
                      slot="actions" href="" @click="GetContent">查看详情
            </a-button>
            <a-button size="small" style="float: right; margin: 0 10px; font-size: 10px; background-color: #F7F7F7; color: #7CA384"
                      slot="actions" href="" @click="GetEdit">编辑
            </a-button>
            <span style="float: right; margin: 2px 0px 0 0; color: #7CA384" @click="showDeleteConfirm">
              <a-icon style="font-size: 20px" type="delete" />
            </span>


          </div>
        </a-list-item>
      </a-list>
    </div>
  </div>
</template>

<script>
const listData = [];
listData.push({
  href: 'https://www.antdv.com/',
  title: `Spring整合Mybatis Java代码配置`,
  date: '2022-03-20',
  description:
    'Spring整合Mybatis-Maven  导入依赖以及一些配置  注意Spring整合Mybatis需要引入Mybatis-Spring的依赖...',
});
listData.push({
  href: 'https://www.antdv.com/',
  title: `如何用centos7搭建一个个人博客`,
  date: '2022-03-21',
  description:
    '准备工作:一台电脑或者服务器 ; 安装好VMware Workstation Pro ; 准备一个centos7或者7以上的镜像(Redhat也可以)...',
});
listData.push({
  href: 'https://www.antdv.com/',
  title: `解决Java无法运行 控制台编码乱码问题`,
  date: '2022-03-22',
  description:
    '输入java不显示，输入javac编码混乱...',
});
listData.push({
  href: 'https://www.antdv.com/',
  title: `解决Java无法运行 控制台编码乱码问题`,
  date: '2022-03-22',
  description:
    '输入java不显示，输入javac编码混乱...',
});listData.push({
  href: 'https://www.antdv.com/',
  title: `解决Java无法运行 控制台编码乱码问题`,
  date: '2022-03-22',
  description:
    '输入java不显示，输入javac编码混乱...',
});listData.push({
  href: 'https://www.antdv.com/',
  title: `解决Java无法运行 控制台编码乱码问题`,
  date: '2022-03-22',
  description:
    '输入java不显示，输入javac编码混乱...',
});listData.push({
  href: 'https://www.antdv.com/',
  title: `解决Java无法运行 控制台编码乱码问题`,
  date: '2022-03-22',
  description:
    '输入java不显示，输入javac编码混乱...',
});listData.push({
  href: 'https://www.antdv.com/',
  title: `解决Java无法运行 控制台编码乱码问题`,
  date: '2022-03-22',
  description:
    '输入java不显示，输入javac编码混乱...',
});listData.push({
  href: 'https://www.antdv.com/',
  title: `解决Java无法运行 控制台编码乱码问题`,
  date: '2022-03-22',
  description:
    '输入java不显示，输入javac编码混乱...',
});

export default {
  name: "Content",
  data() {
    return {
      listData,
      pagination: {
        onChange: page => {
          console.log(page);
        },
        pageSize: 3,
      },
      actions: [
        {type: 'star-o', text: '156'},
        {type: 'like-o', text: '156'},
        {type: 'message', text: '2'},
      ],
    };
  },
  methods: {
    GetEdit() {
      this.$router.push({ path: '../edit' })
    },
    GetContent() {
      this.$router.push({ path: '../details' })
    },
    showDeleteConfirm() {
      this.$confirm({
        title: '您确定要删除吗?',
        content: '删除后将无法回复',
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
        centered: 'false',
        onOk() {
          console.log('OK');
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    },
  }

}
</script>

<style lang="less" scoped>
.content {
  //height: 100%;
  .content-core {
    padding: 0 20px;
    //background-color: #7CA384;
    background-color: #f6f4f0;
  }
}
</style>
