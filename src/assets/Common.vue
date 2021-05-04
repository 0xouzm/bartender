<script type="text/javascript">
// 定义一些公共的属性和方法
const menus = {
  1: {
    id: 1,
    text: '如果现在正有人在你的胃里唱歌 , 会发生什么 ?',
    _text: 'IF SOMEONE IS SINGING IN YOUR STOMACH, WHAT WILL HAPPEN?',

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
    text: '为工作没赶上饭点? 你是不是传说中把工作当饭吃的加班狂魔?',
    _text: "DIDN'T EAT FOR WORK? ARE YOU THE OVERTIME MAD?",

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

    children: [
      {
        id: 16,
        final: true,
        value: '心酸情歌',
        _value: 'Sad love songs',
      },
      {
        id: 17,
        final: true,
        _value: 'Rock songs',
        value: '摇滚forever',
      },
      {
        id: 18,
        final: true,
        _value: 'Dance rhythm',
        value: '能蹦的就行',
      },
      {
        id: 19,
        final: true,
        _value: 'Classic oldies',
        value: '怀旧金曲',
      },
    ],
  },
  9: {
    id: 9,
    _text: 'WHICH FLAVOR OF HOT POT WOULD YOU CHOOSE?',
    text: '终于可以想吃哪锅就选哪锅了 , 你会选?',

    children: [
      {
        id: 20,
        final: true,
        value: '辣锅加辣',
        _value: 'Hot and spicy',
      },
      {
        id: 21,
        final: true,
        _value: 'Classic light soup',
        value: '经典清汤',
      },
      {
        id: 22,
        final: true,
        value: 'Sour soup',
        _value: '带劲酸汤',
      },
      {
        id: 23,
        final: true,
        _value: 'Variety of flavors',
        value: '拼锅',
      },
    ],
  },
  10: {
    id: 10,
    _text: 'HOW TO GET ALONG WITH FRIENDS WHO ARE JEALOUS?',
    text: '当TA问你, 遇到“柠檬精”怎么办?',

    children: [
      {
        id: 24,
        final: true,
        value: '多吃点柠檬',
        _value: 'Eat more lemons',
      },
      {
        id: 25,
        final: true,
        _value: 'It\'s okay to have some "bitter"',
        value: '吃点苦头没事',
      },
      {
        id: 26,
        final: true,
        value: '增强免疫力，遇谁都不怕',
        _value: 'Enhance immunity, not afraid of anyone',
      },
      {
        id: 27,
        _value: 'How far is how far to hide',
        final: true,
        value: '有多远躲多远',
      },
    ],
  },
  11: {
    id: 11,
    _text: 'AFTER HANGOVER, WHAT WOULD YOU CHOOSE TO DRINK TO SOBER?',
    text: '喝到宿醉 , 会来点什么解解酒?',

    children: [
      {
        id: 28,
        final: true,
        value: '小甜水',
        _value: 'Sweet water',
      },
      {
        id: 29,
        final: true,
        _value: 'Herbal tea',
        value: '草本茶',
      },
      {
        id: 30,
        final: true,
        value: '柠檬水',
        _value: 'Lemonade',
      },
      {
        id: 31,
        final: true,
        _value: 'Coffee',
        value: '咖啡',
      },
    ],
  },
  12: {
    id: 12,
    _text: 'THIS FILM WAS SELECTED, IS THERE ANY BETTER MATCH?',
    text: '电影选好了 , 再来点什么和电影更配的?',

    children: [
      {
        id: 32,
        final: true,
        value: '点上香薰',
        _value: 'Aromatherapy',
      },
      {
        id: 33,
        _value: 'Fruity beer',
        value: '果味啤酒',
        final: true,
      },
      {
        id: 34,
        final: true,
        value: '来根烟',
        _value: 'Cigarette',
      },
      {
        id: 35,
        final: true,
        _value: 'People together',
        value: '一起看的人',
      },
    ],
  },
  13: {
    id: 13,
    _text: 'TIRED OF WATCHING MOVIES, WHAT WOULD YOU CHOOSE?',
    text: '看电影看得饿了 , 补充点什么再继续?',

    children: [
      {
        id: 36,
        value: '酸甜果盘',
        _value: 'Fruit plate',
        final: true,
      },
      {
        id: 37,
        final: true,
        _value: 'Chocolate',
        value: '能量巧克力',
      },
      {
        id: 38,
        value: '补脑坚果',
        final: true,
        _value: 'Nuts',
      },
      {
        id: 39,
        _value: 'Refreshing soda',
        final: true,
        value: '醒脑汽水',
      },
    ],
  },
  14: {
    id: 14,
    _text: 'WHAT DO YOU CHOOSE TO DO DURING YOUR BREAK?',
    text: '躺着干点什么好呢?',

    children: [
      {
        id: 40,
        value: '晒太阳',
        final: true,
        _value: 'Bask in the sun',
      },
      {
        id: 41,
        _value: 'Lying down to eat, eating to lying down',
        final: true,
        value: '躺着吃，吃到躺',
      },
      {
        id: 42,
        final: true,
        value: '继续打游戏',
        _value: 'Keep playing the game',
      },
      {
        id: 43,
        _value: 'Chat with friends',
        final: true,
        value: '和人闲聊',
      },
    ],
  },
  15: {
    id: 15,
    _text: 'WHAT DO YOU WANT TO EXPERIENCE NEXT TRIP?',
    text: '终于可以出去玩了! 下个想体验的是什么?',

    children: [
      {
        id: 44,
        value: '异国自驾游',
        final: true,
        _value: 'Exotic self-driving tour',
      },
      {
        id: 45,
        final: true,
        _value: 'Monuments in history books, such as pyramids',
        value: '历史书上的古迹,比如金字塔',
      },
      {
        id: 46,
        final: true,
        value: '滑着雪过圣诞节',
        _value: 'Skiing in the snow for christmas',
      },
      {
        id: 47,
        final: true,
        _value: 'Green adventures such as forest and grassland hikes',
        value: '森林、草原徒步...来场绿色探险',
      },
    ],
  },
}
const wines = {
  16: {
    id: 16,
    text: '美味酸酒',
    _text: 'DELICIOUS SOUR',
    vol: 15,
    ingredient: '苹果白兰地， 桃子力娇酒， 青柠，苏打水。',
    _ingredient: 'apple jack, peach liqueur, lime, soda.',
    price: 95,
  },
  17: {
    id: 17,
    text: '临别一语',
    _text: 'LAST WORD',
    vol: 24,
    _ingredient: 'gin, maraschino, green chartreuse, lime.',
    ingredient: '金酒, 野樱桃酒, 绿查特酒, 青柠。',
    price: 95,
  },
  18: {
    id: 18,
    text: '复活药水 2 号',
    _text: 'CORPSE REVIVER #2',
    vol: 19,
    ingredient: '金酒,\n 利莱酒, 君度橙酒, 柠檬。',
    _ingredient: 'gin, \n lillet, cointreau, lemon.',
    price: 90,
  },
  19: {
    id: 19,
    text: '黄鸟',
    _text: 'YELLOW BIRD',
    vol: 19,
    ingredient: '朗姆,\n' + '加利安诺, 君度橙酒, 青柠, 橙子。',
    _ingredient: 'rum,\n' + 'galliano vanilla, cointreau, lime, orange.',
    price: 95,
  },
  20: {
    id: 20,
    text: '法外狂徒',
    _text: 'ILLEGAL',
    vol: 19,
    ingredient: '烟熏龙舌兰, 朗姆, 自制法兰纳姆, 野樱桃酒, 青柠。',
    _ingredient: 'mezcal, rum, falernum, maraschino, lime.',
    price: 95,
  },
  21: {
    id: 21,
    text: '古巴原版莫吉托',
    _text: 'MOJITO BY CUBA',
    vol: 13,
    ingredient: '朗姆, 青柠, 薄荷, 苏打水。',
    _ingredient: 'rum,\n' + 'lime, mint, soda.',
    price: 90,
  },
  22: {
    id: 22,
    text: 'Tender 玛格丽特',
    _text: 'TENDER MARGARITA',
    vol: 20,
    ingredient: '龙舌兰酒, 龙舌兰糖, 青柠, 雪利酒醋。',
    _ingredient: 'tequila,\n' + 'agave nectar, lime, sherry vinegar.',
    price: 95,
  },
  23: {
    id: 23,
    text: '特立尼达酸酒',
    _text: 'T RININDAD SOUR',
    vol: 18,
    ingredient: '安歌天娜苦精, 黑麦威士忌, orgeat, 柠檬。',
    _ingredient: 'angostura, rye,\n' + 'orgeat, lemon.',
    price: 120,
  },

  24: {
    id: 24,
    text: '红宝石菲士',
    _text: 'RUBY FIZZ',
    vol: 11,
    ingredient: '黑刺莓金酒, 石榴力娇酒, 青柠, 蛋清。',
    _ingredient: 'sloe gin, pomegranate liqueur, lime, egg white.',
    price: 95,
  },

  25: {
    id: 25,
    text: '白色尼格罗尼',
    _text: 'WHITE NEGRONI',
    vol: 19,
    ingredient: '金酒,\n' + '白苦精, 好奇美国佬。',
    _ingredient: 'gin,\n' + 'bianco bitter, cocchi americano.',
    price: 90,
  },

  26: {
    id: 26,
    text: '盘尼西林',
    _text: 'PENICILLIN',
    vol: 19,
    ingredient: '威士忌, 泥煤威士忌, 姜, 柠檬,\n' + '枫糖, 蛋清。',
    _ingredient: 'whisky, peated whisky, ginger, lemon,\n' + 'maple syrup, egg-white.',
    price: 105,
  },

  27: {
    id: 27,
    text: '性感沙滩 2 号',
    _text: 'SEX\n' + 'ON THE BEACH #2',
    vol: 12,
    ingredient: '伏特加,\n' + '蜜瓜力娇酒,\n' + '黑加仑, 蔓越莓, 菠萝, 青柠。',
    _ingredient: 'vodka,\n' + 'midori, cassis,\n' + 'cranberry, pineapple, lime.',
    price: 90,
  },

  28: {
    id: 28,
    text: '老毛子的春天',
    _text: 'RUSSIAN SPRING PUNCH',
    vol: 14,
    ingredient: '伏特加, 黑加仑力娇酒, 柠檬,\n' + '气泡酒。',
    _ingredient: 'vodka, cassis liqueur, lemon,\n' + 'prosecco.',
    price: 90,
  },

  29: {
    id: 29,
    text: '无法无天',
    _text: 'SCOFFLAW',
    vol: 32,
    ingredient: '黑麦威士忌, \n干味美思, 柠檬 红石榴糖浆。',
    _ingredient: 'rye,\n' + 'dry vermouth, lemon, grenadine',
    price: 100,
  },

  30: {
    id: 30,
    text: '飞行',
    _text: 'AVIATION',
    vol: 21,
    ingredient: '金酒, 野樱桃酒, 青柠, 紫罗兰。',
    _ingredient: 'gin, maraschino, lime, violet.',
    price: 90,
  },

  31: {
    id: 31,
    text: '左轮手枪',
    _text: 'REVOLVER',
    vol: 21,
    ingredient: '波本威士忌, 咖啡利口酒, 橙子苦精。',
    _ingredient: 'bourbon, coffee liqueur, orange bitters.',
    price: 100,
  },

  32: {
    id: 32,
    text: '在水一方',
    _text: 'WATER LILY',
    vol: 13,
    ingredient: '金酒,\n' + '紫罗兰, 蔓越莓汁, 柠檬。',
    _ingredient: 'gin,\n' + 'voilet,\n' + 'cranberry juice, lemon.',
    price: 95,
  },

  33: {
    id: 33,
    text: '偷着乐宾治',
    _text: 'PROHIBITION PUNCH',
    vol: 12,
    ingredient: '香料朗姆,\n' + '柑曼怡, 百香果, 蔓越莓, 青柠, 气泡酒。',
    _ingredient: 'spice rum, grand marnier, passionfruit, cranberry, lime,\n' + 'prosecco.',
    price: 95,
  },

  34: {
    id: 34,
    text: '一脱成名',
    _text: 'NAKED\n' + '& FAMOUS',
    vol: 19,
    ingredient: '烟熏龙舌兰, 阿佩罗橙酒, 黄查特酒, 青柠。',
    _ingredient: 'mezcal,\n' + 'aperol, yellow chartreuse, lime.',
    price: 95,
  },

  35: {
    id: 35,
    text: '床笫之间',
    _text: 'BETWEEN\n' + 'THE SHEETS',
    vol: 26,
    ingredient: '干邑白兰地, 廊酒, 君度橙酒, 柠檬。',
    _ingredient: 'cognac,\n' + 'benedictine, cointreau, lemon.',
    price: 100,
  },

  36: {
    id: 36,
    text: '僵尸',
    _text: 'ZOMBIE',
    vol: 21,
    ingredient: '混调朗姆酒, 杏子白兰地, 百香果糖浆,\n' + '菠萝, 青柠。',
    _ingredient: 'rum, brown cacao liqueur, passion fruit syrup, pineapple, lime.',
    price: 95,
  },

  37: {
    id: 37,
    text: '混血姑娘',
    _text: 'MULATA DAIQUIRI',
    vol: 20,
    ingredient: '朗姆, 棕可可力娇酒, 青柠。',
    _ingredient: 'rum,\n' + 'brown cacao liqueur, lime.',
    price: 90,
  },

  38: {
    id: 38,
    text: '酒谷堡',
    _text: 'FORT LAUDERDALE COCKTAIL',
    vol: 19,
    ingredient: '金酒, 金巴利苦酒, 柠檬,\n' + '杏仁糖浆。',
    _ingredient: 'gin, campari, apricot, lemon,\n' + 'orgeat.',
    price: 90,
  },
  39: {
    id: 39,
    text: '黄瓜菲士',
    _text: 'CUCUMBER GIN FIZZ',
    vol: 12,
    ingredient: '金酒, 接骨木花, 利莱酒, 青柠, 黄瓜苏打水。',
    _ingredient: 'gin, elderflower, lillet, lime, cucumber soda.',
    price: 100,
  },

  40: {
    id: 40,
    text: '新加坡司令',
    _text: 'SINGAPORE SLING',
    vol: 12,
    ingredient: '金酒,\n' + '樱桃力娇酒, 君度橙酒, 廊酒, 菠萝汁, 柠檬。',
    _ingredient: 'gin,\n' + 'cherry liqueur, cointreau, benedictine, pineapple, lemon.',
    price: 90,
  },

  41: {
    id: 41,
    text: '晨光飞逝',
    _text: 'MORNING GLORY FIZZ',
    vol: 12,
    ingredient: '威士忌,\n' + '柠檬,\n' + '苦艾酒, 蛋清, 苏打水。',
    _ingredient: 'whisky,\n' + 'lemon,\n' + 'absinthe, egg white, soda.',
    price: 95,
  },

  42: {
    id: 42,
    text: '披荆斩棘',
    _text: 'BRAMBLE',
    vol: 16,
    ingredient: '金酒, 黑莓力娇酒, 柠檬, 糖。',
    _ingredient: 'gin, chambord, lemon, sugar.',
    price: 95,
  },

  43: {
    id: 43,
    text: '法式马天尼',
    _text: 'FRENCH MARTINI',
    vol: 17,
    ingredient: '伏特加, 黑莓力娇酒, 菠萝, 柠檬。',
    _ingredient: 'vodka, chambord, pineapple, lemon.',
    price: 90,
  },

  44: {
    id: 44,
    text: '深沟',
    _text: 'DONGA PUNCH',
    vol: 15,
    ingredient: '金朗姆, 西柚, 青柠, 肉桂糖浆。',
    _ingredient: 'gold rum, grapefruit, lime, cinnamon syrup.',
    price: 90,
  },

  45: {
    id: 45,
    text: '血与沙',
    _text: 'BLOOD & SAND',
    vol: 17,
    ingredient: '威士忌,\n' + '血橙, 甜味美思, 樱桃力娇酒。',
    _ingredient: 'whisky,\n' + 'blood orange, sweet vermouth, cherry liqueur.',
    price: 95,
  },

  46: {
    id: 46,
    text: '僵尸1934 复刻版',
    _text: 'ZOMBIE, 1934 RETRO',
    vol: 17,
    ingredient: '自制法兰纳姆(含姜、肉桂、丁香), 朗姆,\n' + '西柚, 青柠。',
    _ingredient: 'falernum (ginger, cinnamon, clove), rum,\n' + 'grapefruit, lime.',
    price: 100,
  },

  47: {
    id: 47,
    text: '纸飞机',
    _text: 'PAPER PLANE',
    vol: 24,
    ingredient: '波本威士忌, 阿玛罗, 阿佩罗橙酒, 柠檬。',
    _ingredient: 'bourbon, amaro, aperol, lemon.',
    price: 95,
  },
}

export default {
  menus: menus,
  wines: wines,
}
</script>
