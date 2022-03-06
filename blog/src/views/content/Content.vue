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
                      slot="actions" href="">查看详情
            </a-button>
            <a-button size="small" style="float: right; margin: 0 10px; font-size: 10px; background-color: #F7F7F7; color: #7CA384"
                      slot="actions" href="">编辑
            </a-button>
          </div>
        </a-list-item>
      </a-list>
    </div>
  </div>
</template>

<script>
const listData = [];
for (let i = 0; i < 25; i++) {
  listData.push({
    href: 'https://www.antdv.com/',
    title: `ant design vue part ${i}`,
    date: '2022-02-22',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
  });
}

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
