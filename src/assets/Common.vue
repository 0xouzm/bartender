<script type="text/javascript">
// 定义一些公共的属性和方法
const menus = {
  1: {
    id: 1,
    text: '如果现在正有人在你的胃里唱歌 , 会发生什么 ?',
    _text: 'IF SOMEONE\n' + 'IS SINGING\n' + 'IN YOUR STOMACH, WHAT WILL HAPPEN?',
    final: false,
    children: [
      {
        id: 2,
        value: '222',
        _value: '222',
      },
      {
        id: 3,
        value: '333',
        _value: '333',
      },
    ],
  },
  2: {
    id: 2,
    text: '222',
    _text: '222',
    final: false,
    children: [
      {
        id: 4,
        value: '444',
        _value: '444',
      },
      {
        id: 5,
        value: '555',
        _value: '555',
      },
    ],
  },
  3: {
    id: 3,
    text: '333',
    final: false,
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
  4: {
    id: 4,
    text: '444',
    final: true,
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
