<script type="text/javascript">
// 定义一些公共的属性和方法
const menus = {
  1: {
    id: 1,
    text: '如果现在正有人在你的胃里唱歌 , 会发生什么 ?',
    _text: 'IF SOMEONE IS SINGING IN YOUR STOMACH, WHAT WILL HAPPEN?',
    final: false,
    children: [
      {
        id: 2,
        value: '声音会淹没在刚吃完堆成山的食物中',
        _value: 'The sound will drown in just eaten mountains of foods',
      },
      {
        id: 3,
        value: '胃里空空如也，全是回声',
        _value: 'The stomach is empty, full of echoes',
      },
    ],
  },
  2: {
    id: 2,
    text: '聚餐后， 和小伙伴一起来的么',
    _text: 'DID YOU COME WITH YOUR FRIENDS AFTER THE DINNER?',
    final: false,
    children: [
      {
        id: 4,
        value: '没有，一个人就是一座城',
        _value: "No, I'm the only one",
      },
      {
        id: 5,
        value: '当然，谁也不能先走',
        _value: 'Yes, prepare to stay drunk with friends',
      },
    ],
  },
  3: {
    id: 3,
    text: '为工作没赶上饭点? 你是不是传说中把工作当 饭吃的加班狂魔?',
    _text: "DIDN'T EAT FOR WORK? ARE YOU THE OVERTIME MAD?",
    final: false,
    children: [
      {
        id: 6,
        value: '摇头，一个以行动坚定反对“996”的打工人',
        _value: 'No, resolutely opposed to "996"',
      },
      {
        id: 7,
        _value: 'Still, always......',
        value: '加班拌饭，996，007，711...什么没体验过 ?',
      },
    ],
  },
  4: {
    id: 4,
    _text: 'WHAT DEGREE OF LONELINESS CAN YOU ACCEPT?',
    text: '“一人行国际挑战赛”来了 , 你能接受的最高境界是?',
    final: false,
    children: [
      {
        id: 8,
        value: '一个人去唱 K',
        _value: 'Go to karaoke alone',
      },
      {
        id: 9,
        _value: 'Eat hot pot alone',
        value: '一个人吃火锅',
      },
    ],
  },
  5: {
    id: 5,
    _text: 'IF YOU ARE NOT DRUNK, CAN YOU TALK FREELY WITH YOUR FRIENDS?',
    text: '偷问一句 , 身边的小伙伴 是不醉也能聊的那种吗?',
    final: false,
    children: [
      {
        id: 10,
        value: '什么都能聊，知道我干过最蠢的事',
        _value: 'Yes, he/she knows the stupidest thing about me',
      },
      {
        id: 11,
        _value: 'No, more drink, more chats',
        value: '醉点好，酒不来两口，话都说不出口',
      },
    ],
  },
  6: {
    id: 6,
    _text: 'GREAT! NOW THAT YOU ARE FREE, WHY NOT PICK A MOVIE TO WATCH?',
    text: '棒!既然有空 , 不如我们来挑部电影看看?',
    final: false,
    children: [
      {
        id: 12,
        value: '治愈一点的，能笑出眼泪或者哭到崩溃',
        _value: 'A touching movie, best to laugh with tears or collapse and cry',
      },
      {
        id: 13,
        _value: 'Love to burn the brain, the better the more special movie',
        value: '就爱烧脑，脑回路越清奇越好',
      },
    ],
  },
  7: {
    id: 7,
    _text: 'WHAT ARE YOU GOING TO DO DURING THE HOLIDAYS?',
    text: '百年难遇的假期来了 , 你想做点什么?',
    final: false,
    children: [
      {
        id: 14,
        value: '找个好酒店!旅行嘛，就是换个地方躺着',
        _value: 'Lying in a better place is the best holiday',
      },
      {
        id: 15,
        _value: "Places I haven't been to, things I haven't done",
        value: '去没去过的地方做没做过的事',
      },
    ],
  },
  8: {
    id: 8,
    _text: 'IS YOUR SHOW TIME!WHICH TYPE OF SONG IS YOUR MUST-SING LIST?',
    text: '个人演唱会开始! 必点歌单是?',
    final: false,
    children: [
      {
        id: 16,
        value: '心酸情歌',
        _value: 'Sad love songs',
      },
      {
        id: 17,
        _value: 'Rock songs',
        value: '摇滚forever',
      },
      {
        id: 18,
        _value: 'Dance rhythm',
        value: '能蹦的就行',
      },
      {
        id: 19,
        _value: 'Classic oldies',
        value: '怀旧金曲',
      },
    ],
  },
  9: {
    id: 9,
    _text: 'WHICH FLAVOR OF HOT POT WOULD YOU CHOOSE?',
    text: '终于可以想吃哪锅就选哪锅了 , 你会选?',
    final: false,
    children: [
      {
        id: 20,
        value: '辣锅加辣',
        _value: 'Hot and spicy',
      },
      {
        id: 21,
        _value: 'Classic light soup',
        value: '经典清汤',
      },
      {
        id: 22,
        value: 'Sour soup',
        _value: '带劲酸汤',
      },
      {
        id: 23,
        _value: 'Variety of flavors',
        value: '拼锅',
      },
    ],
  },
  10: {
    id: 10,
    _text: 'HOW TO GET ALONG WITH FRIENDS WHO ARE JEALOUS?',
    text: '当TA问你, 遇到“柠檬精”怎么办?',
    final: false,
    children: [
      {
        id: 24,
        value: '多吃点柠檬',
        _value: 'Eat more lemons',
      },
      {
        id: 25,
        _value: 'It\'s okay to have some "bitter"',
        value: '吃点苦头没事',
      },
      {
        id: 26,
        value: '增强免疫力，遇谁都不怕',
        _value: 'Enhance immunity, not afraid of anyone',
      },
      {
        id: 27,
        _value: 'How far is how far to hide',
        value: '有多远躲多远',
      },
    ],
  },
  11: {
    id: 11,
    _text: 'AFTER HANGOVER, WHAT WOULD YOU CHOOSE TO DRINK TO SOBER?',
    text: '喝到宿醉 , 会来点什么解解酒?',
    final: false,
    children: [
      {
        id: 28,
        value: '小甜水',
        _value: 'Sweet water',
      },
      {
        id: 29,
        _value: 'Herbal tea',
        value: '草本茶',
      },
      {
        id: 30,
        value: '柠檬水',
        _value: 'Lemonade',
      },
      {
        id: 31,
        _value: 'Coffee',
        value: '咖啡',
      },
    ],
  },
  12: {
    id: 12,
    _text: 'THIS FILM WAS SELECTED, IS THERE ANY BETTER MATCH?',
    text: '电影选好了 , 再来点什么和电影更配的?',
    final: false,
    children: [
      {
        id: 32,
        value: '点上香薰',
        _value: 'Aromatherapy',
      },
      {
        id: 33,
        _value: 'Fruity beer',
        value: '果味啤酒',
      },
      {
        id: 34,
        value: '来根烟',
        _value: 'Cigarette',
      },
      {
        id: 35,
        _value: 'People together',
        value: '一起看的人',
      },
    ],
  },
  13: {
    id: 13,
    _text: 'TIRED OF WATCHING MOVIES, WHAT WOULD YOU CHOOSE?',
    text: '看电影看得饿了 , 补充点什么再继续?',
    final: false,
    children: [
      {
        id: 36,
        value: '酸甜果盘',
        _value: 'Fruit plate',
      },
      {
        id: 37,
        _value: 'Chocolate',
        value: '能量巧克力',
      },
      {
        id: 38,
        value: '补脑坚果',
        _value: 'Nuts',
      },
      {
        id: 39,
        _value: 'Refreshing soda',
        value: '醒脑汽水',
      },
    ],
  },
  14: {
    id: 14,
    _text: 'WHAT DO YOU CHOOSE TO DO DURING YOUR BREAK?',
    text: '躺着干点什么好呢?',
    final: false,
    children: [
      {
        id: 40,
        value: '晒太阳',
        _value: 'Bask in the sun',
      },
      {
        id: 41,
        _value: 'Lying down to eat, eating to lying down',
        value: '躺着吃，吃到躺',
      },
      {
        id: 42,
        value: '继续打游戏',
        _value: 'Keep playing the game',
      },
      {
        id: 43,
        _value: 'Chat with friends',
        value: '和人闲聊',
      },
    ],
  },
  15: {
    id: 15,
    _text: 'WHAT DO YOU WANT TO EXPERIENCE NEXT TRIP?',
    text: '终于可以出去玩了! 下个想体验的是什么?',
    final: false,
    children: [
      {
        id: 44,
        value: '异国自驾游',
        _value: 'Exotic self-driving tour',
      },
      {
        id: 45,
        _value: 'Monuments in history books, such as pyramids',
        value: '历史书上的古迹,比如金字塔',
      },
      {
        id: 46,
        value: '滑着雪过圣诞节',
        _value: 'Skiing in the snow for christmas',
      },
      {
        id: 47,
        _value: 'Green adventures such as forest and grassland hikes',
        value: '森林、草原徒步...来场绿色探险',
      },
    ],
  },

  // 4: {
  //   id: 4,
  //   text: '444',
  //   final: true,
  // },
}
const wines = []

export default {
  menus: menus,
  wines: wines,
}
</script>
