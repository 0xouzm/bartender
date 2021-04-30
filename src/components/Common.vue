<script type="text/javascript">
// 定义一些公共的属性和方法
const menus = {
  1: {
    text: '111',
    children: [
      {
        id: 2,
        value: '222',
      },
      {
        id: 3,
        value: '333',
      },
    ],
  },
  2: {
    text: '222',
    children: [
      {
        id: 4,
        value: '444',
      },
      {
        id: 5,
        value: '555',
      },
    ],
  },
  3: {
    text: '333',
    children: [
      {
        id: 6,
        value: '666',
      },
      {
        id: 7,
        value: '777',
      },
    ],
  },
}
function commonFun() {
  console.log('公共方法')
}
// 暴露出这些属性和方法
export default {
  menus: menus,
  commonFun,
}
</script>
