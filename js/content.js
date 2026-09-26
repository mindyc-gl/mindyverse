/* =====================================================================
   MINDYVERSE — content
   Everything on the site that you will want to change lives in this file.
   Text is written as [English, 中文]. Images live in assets/img, video in assets/video.
   To add an episode, archive file, character, world or gallery piece:
   copy one block, change the fields, save. Nothing else needs to change.
   ===================================================================== */
window.MV = {

  site: {
    youtube: 'https://www.youtube.com/@mindyverse.youtube',
    instagram: '',            // add your Instagram URL here to show it
    tiktok: '',               // add your TikTok URL here to show it
    email: '',                // add a public collaboration email to show it
    upcoming: { no: '04', title: ['Coming soon', '即将推出'] },   // teaser card for the next episode; set to null to hide
    portfolio: 'https://mindyc-gl.github.io/',
    embed: true              // true: play YouTube videos inside the page; false: open them on YouTube
  },

  /* ---------- Key art slots ----------
     src: file name in assets/img (a name without extension means .webp).
     fit: 'cover' for a 16:9 image made for the slot, 'portrait' to show a vertical image with a soft blurred frame.
     When your new images are ready, e.g. put home-hero.jpg in assets/img and change the line to
     homeHero: { src: 'home-hero.jpg', fit: 'cover' }                                               */
  art: {
    homeHero:   { src: 'portal-dream', fit: 'portrait', pos: '50% 40%' },
    seriesHero: { src: 'char-mira',    fit: 'portrait', pos: '50% 30%' },
    studio:     { src: 'file-003',     fit: 'portrait', pos: '50% 40%' },
    shop:       { src: 'g-poster-awaits', fit: 'portrait', pos: '50% 40%' },
    gallery:    { src: 'world-celestial', fit: 'portrait', pos: '50% 35%' }
  },

  /* ---------- The Series ---------- */
  series: {
    title: ['When the Dream Remembers You', '当梦记得你'],
    subline: ['Even when you forget your dreams, perhaps they never forget you.', '即使你忘了自己的梦，也许，梦从未忘记你。'],
    manifesto: ['Real life may have no magic. That does not mean we are meant to live only one life.', '现实也许没有魔法，但这不代表，我们注定只能过一种人生。'],
    manifestoNote: ['A fantasy about dreams slipping into reality, and a story about an ordinary girl finding herself in the real world.', '这是一个关于梦境入侵现实的奇幻故事，也是一个普通女孩在现实里寻找自己的故事。'],
    meanings: [
      ['The dream world remembers you. What you saw was never only a dream.', '梦里的世界记得你。你看见的，从来不只是梦。'],
      ['Your dreams remember you, too. Even when real life is not what you hoped, the world you once wanted is still waiting.', '你的梦想也记得你。即使现实不尽如人意，你曾向往的那个世界，依然在等你。']
    ]
  },

  episodes: [
    {
      id: 'ep-01', no: '01', status: 'released',
      title: ['The Portal', '传送门'],
      logline: ['Would you go through?', '你会走进去吗？'],
      synopsis: ['Mira falls asleep in a candlelit room. A golden door appears where no door should be. Behind it: a city floating above the clouds, a masked ball, and a stranger who wears her moon.',
                 'Mira 在烛光房间里睡着。一扇金色的门出现在本不该有门的地方。门后是云海上的浮空之城、一场假面舞会，还有一个戴着她的月亮的陌生人。'],
      cover: 'ep01', video: 'assets/video/ep01-preview.mp4', videoLabel: ['Episode preview · 31 sec', '剧集预览 · 31 秒'],
      youtube: 'CRZgur6OZ48', archive: 'file-001', characters: ['mira', 'dark'], world: 'celestial'
    },
    {
      id: 'ep-02', no: '02', status: 'released',
      title: ['The Reflection', '倒影'],
      logline: ['Some reflections don’t follow.', '有些倒影，不会跟着你动。'],
      synopsis: ['Last night, Mira opened a door that shouldn’t exist. But the door wasn’t the strangest thing she found. In a palace of mirrors, her reflection stops following her.',
                 '昨晚，Mira 打开了一扇不该存在的门。但那扇门，并不是她发现的最奇怪的东西。在镜之宫殿里，她的倒影不再跟着她动。'],
      cover: 'ep02', video: '', youtube: 'PNDe39S4y7g', archive: 'file-002', characters: ['mira', 'dark'], world: 'mirror'
    },
    {
      id: 'ep-03', no: '03', status: 'released',
      title: ['The Awakening', '醒来'],
      logline: ['She thought she had woken from the dream. But the dream had never let her go.', '她以为自己只是从梦里醒来，却不知道，那个世界从未放她离开。'],
      coverLine: true,
      synopsis: [
        'In that world, she had seen floating castles, dazzling moonlight, and an unfamiliar version of herself in the mirror.\n\nThen she woke up.\n\nMorning light falls into a small rented apartment. No magic, no castle, no one waiting for her. Only a new rejection email on her phone, and a part-time shift about to begin.\n\nMira is as ordinary as a young woman can be. She once had big hopes for the future, but reality always finds a way to remind her that life will not unfold the way she imagined.\n\nShe turns off the alarm, fixes her hair, pulls on an oversized work T-shirt, and gives the mirror a slightly tired smile.\n\nAnother day.\n\nShe believes that impossible world has faded with the dream.\n\nUntil she leaves the room, and her reflection does not leave with her.\n\nAnd the crescent on the back of her neck quietly begins to glow.',
        '在那个世界里，她曾见过漂浮的城堡、璀璨的月光，以及镜子中另一个陌生的自己。\n\n然后，她醒了。\n\n清晨的阳光照进狭小的出租公寓。没有魔法，没有城堡，也没有人在等待她。只有手机里新收到的求职拒信，以及即将开始的兼职工作。\n\nMira 是一个再普通不过的年轻女孩。她也曾对未来充满期待，但现实似乎总有办法提醒她，生活并不会按照想象中的样子展开。\n\n她关掉闹钟，整理头发，换上宽大的工作 T 恤，对着镜子露出一个略显疲惫的微笑。\n\n又是新的一天。\n\n她以为，那个不可思议的世界已经随着梦境消失。\n\n直到她离开房间之后，镜子里的倒影却没有跟着离开。\n\n而她颈后的那枚月牙，正悄悄亮起。'
      ],
      cover: 'ep03', video: '', youtube: '8WFwgjOWtMM', archive: 'file-003', characters: ['mira'], world: 'city'
    }
    /* Next episode: copy a block above, set status: 'released', and add its cover image. */
  ],

  /* ---------- Extras: shorts and side stories around the series ---------- */
  extras: [
    { id: 'training-season', youtube: 'yeI-al5SfGA', image: 'extra-training',
      kind: ['Special · Short', '番外 · 短片'], title: ['Training Season', 'Training Season'],
      line: ['Wait until you see her final form. Celestial, Vampire, Ocean, Fallen Angel and Dark Mira, all in one short.', '等你看到她的最终形态。天界、吸血鬼、海洋、堕天使、暗夜，每一个 Mira 都在这支短片里。'] }
  ],

  /* ---------- The making of Mindyverse (character packs are view-only) ---------- */
  journey: {
    intro: ['Every Mira begins long before the camera moves: a face that has to stay the same across worlds, a palette for every realm, a moon that means something. This is where that work lives.',
            '每一个 Mira，在镜头动起来之前很久就开始了：一张要在所有世界里保持不变的脸、每个国度的色彩、一轮有意义的月亮。这里记录的，就是这些幕后的工作。'],
    steps: [
      { t: ['Character bible', '角色设定'], d: ['Face, eyes, hair, outfits, expressions and poses are fixed in reference sheets, so Mira is recognizable in every shot and every world.', '脸、眼睛、发型、服装、表情和姿势都写进设定图，让 Mira 在每个镜头、每个世界里都认得出来。'] },
      { t: ['Worlds & palettes', '世界与配色'], d: ['Each realm gets its own light, color and symbol: pearl and gold, velvet red, jellyfish blue, eclipse black.', '每个国度都有自己的光、颜色和符号：珍珠与金、天鹅绒红、水母蓝、日食黑。'] },
      { t: ['Key frames', '关键画面'], d: ['Every scene starts as still images: the room, the light, the moment before something changes.', '每个场景先做成静帧：房间、光线，以及一切改变之前的那一刻。'] },
      { t: ['Motion', '让画面动起来'], d: ['Stills become moving shots with image-to-video, kept as single continuous takes whenever possible.', '用图生视频把静帧变成镜头，尽可能一镜到底。'] },
      { t: ['Story & edit', '故事与剪辑'], d: ['Shots, captions and music are cut into a vertical short for YouTube.', '把镜头、字幕和音乐剪成一支竖屏短片，发布在 YouTube。'] }
    ],
    timeline: [
      { t: ['The emblem and the first door', '徽章与第一扇门'], d: ['The M-shaped portal emblem, the crescent mark, and the candlelit room where it all starts.', 'M 形的传送门徽章、新月标志，以及一切开始的烛光房间。'] },
      { t: ['EP.01 The Portal', 'EP.01 传送门'], d: ['Mira opens the door and walks into the floating city.', 'Mira 推开门，走进浮空之城。'] },
      { t: ['EP.02 The Reflection', 'EP.02 倒影'], d: ['The mirror palace, and the first appearance of Dark Mira.', '镜之宫殿，暗夜 Mira 第一次出现。'] },
      { t: ['Training Season', 'Training Season'], d: ['Every version of Mira, side by side for the first time.', '所有版本的 Mira，第一次同框。'] },
      { t: ['The character bible', '角色设定集'], d: ['Original Mira, Initial Form, Real-world Mira and all alternate versions, written down.', '初始 Mira、初始形态、现实中的 Mira 和所有版本，整理成设定集。'] },
      { t: ['EP.03 The Awakening', 'EP.03 醒来'], d: ['The dream follows her into the real world.', '梦，跟着她来到了现实。'] }
    ],
    packs: [
      { img: 'pack-ref', title: ['Mira · Character Reference', 'Mira · 角色设定'], note: ['Face details, expressions, signature elements, alternate versions, world environments and poses for video.', '五官细节、表情、标志元素、不同版本、世界环境与视频用姿势。'] },
      { img: 'pack-original', title: ['Original Mira', '初始 Mira'], note: ['The dream-world look: ivory lace, burgundy bows, the gold crescent.', '梦中世界的造型：象牙白蕾丝、酒红蝴蝶结、金色新月。'] },
      { img: 'pack-initial', title: ['Mira · Initial Form', 'Mira · 初始形态'], note: ['Body views, outfit details, expressions and scene references.', '全身视图、服装细节、表情与场景参考。'] },
      { img: 'pack-real', title: ['Mira · Real World', 'Mira · 现实世界'], note: ['The city version: a black T-shirt, a braid, a small apartment and a big skyline.', '城市版本：黑色 T 恤、一条麻花辫、小小的公寓和大大的天际线。'] },
      { img: 'pack-episode3', title: ['EP.03 Story Board', 'EP.03 分镜'], note: ['Key moments from The Awakening, from 5:17 a.m. to the glowing mark.', '《醒来》的关键画面，从清晨 5:17 到发光的印记。'] }
    ]
  },

  /* ---------- The Dream Archive ---------- */
  archive: [
    {
      id: 'file-001', no: '001', tags: ['episodes','worlds','objects'], tagline: ['The beginning of another world.', '另一个世界的开端。'], title: ['The Portal', '传送门'], unlocked: true, episode: 'ep-01', image: 'file-001',
      summary: ['The first crossing. A door opens in a room that was only ever a bedroom.', '第一次穿越。一扇门，在一间普通的卧室里打开。'],
      background: ['Mira has the same dream again and again: a candlelit room, a full moon behind the window, and a gold-framed door with a crescent carved above it. This time, it opens.',
                   'Mira 一次次做着同一个梦：烛光房间、窗外的满月，和一扇刻着新月的金框门。这一次，门开了。'],
      clues: [
        ['The crescent carved above the door matches the necklace she wakes up holding.', '门上刻的新月，和她醒来时握着的项链一模一样。'],
        ['At the masked ball, a stranger wears the same crescent at her throat.', '假面舞会上，一个陌生女人的颈间也戴着同样的新月。'],
        ['The city is lit, but no one in it casts a shadow toward the moon.', '城市灯火通明，却没有人的影子朝向月亮。']
      ],
      object: { name: ['The Crescent Necklace', '新月项链'], note: ['Glows when a door is near.', '门靠近时，它会发光。'] },
      foreshadow: null
    },
    {
      id: 'file-002', no: '002', tags: ['episodes','characters','objects'], tagline: ['Someone was waiting inside the mirror.', '有人在镜子里等她。'], title: ['The Reflection', '倒影'], unlocked: true, episode: 'ep-02', image: 'file-002',
      summary: ['A mirror that answers back.', '一面会回应你的镜子。'],
      background: ['Inside the palace, Mira finds a tall gold mirror. The girl inside has her face, a darker crown, and a moon of her own. When the glass breaks, it breaks into a crescent.',
                   '宫殿深处，Mira 发现一面金色的落地镜。镜中的女孩有着她的脸、一顶更暗的王冠，还有属于她自己的月亮。镜面碎裂时，裂痕拼成了一弯新月。'],
      clues: [
        ['Her reflection touches the glass a moment before she does.', '她的倒影，比她早一秒触碰镜面。'],
        ['The other Mira’s crescent is silver, not gold.', '另一个 Mira 的新月是银色的，不是金色。'],
        ['The shards show other rooms, other worlds.', '碎片里映出的是别的房间、别的世界。']
      ],
      object: { name: ['The Mirror', '镜子'], note: ['Some reflections don’t follow.', '有些倒影，不会跟着你动。'] },
      foreshadow: null
    },
    {
      id: 'file-003', no: '003', tags: ['episodes','characters','secrets'], tagline: ['Some things follow us home.', '有些东西，会跟着我们回家。'], title: ['The Mark', '印记'], unlocked: true, episode: 'ep-03', image: 'file-003',
      summary: ['The dream leaves something behind.', '梦，留下了痕迹。'],
      background: ['Back in the real world: a small rented apartment, a rejection email, a part-time shift. Mira believes the dream is over. Then it follows her out of the room.',
                   '回到现实：狭小的出租公寓、一封求职拒信、一份即将开始的兼职。Mira 以为梦已经结束，它却跟着她走出了房间。'],
      clues: [
        ['The alarm always reads 5:17 when she wakes from the dream.', '每次从梦里醒来，闹钟都停在 5:17。'],
        ['A sticky note on her wall: A Brighter Me Is Coming.', '墙上的便签写着：A Brighter Me Is Coming。'],
        ['A glowing crescent on the back of her neck, exactly where the necklace rests.', '她后颈上发光的新月，正好在项链垂下的位置。']
      ],
      object: { name: ['The Mark', '印记'], note: ['Proof that it was not only a dream.', '证明那不只是梦。'] },
      foreshadow: null
    },
    {
      id: 'file-004', no: '004', tags: ['secrets'], tagline: ['The next memory has not surfaced.', '下一段记忆还没有浮现。'], title: ['Unknown', '未知'], unlocked: false, episode: null, image: 'file-004',
      summary: ['Unlocks with the next episode.', '下一集发布时解锁。'],
      background: null, clues: [], object: null, foreshadow: null
    }
  ],

  /* ---------- Worlds ---------- */
  worlds: [
    { id: 'city', name: ['The City', '城市'], kind: ['The real world', '现实世界'], image: 'world-city', color: '#B8A28A',
      text: ['A small apartment, a laptop full of applications, a skyline at sunrise. Where Mira lives, and where she wakes up at 5:17.', '一间小公寓、一台装满求职申请的电脑、日出时的天际线。Mira 生活的地方，也是她每次 5:17 醒来的地方。'] },
    { id: 'celestial', sub: ['Light, hope, rebirth.', '光、希望、重生。'], name: ['The Celestial City', '天界之城'], kind: ['Floating city', '浮空之城'], image: 'world-celestial', color: '#E3C58C',
      text: ['Pearl-white castles over a sea of clouds, under a moon too large to be real. The first world behind the door.', '云海之上的珍珠白城堡，头顶一轮大得不真实的月亮。门后的第一个世界。'] },
    { id: 'crimson', name: ['The Crimson Kingdom', '绯红王国'], kind: ['Red Moon Castle', '红月城堡'], image: 'world-crimson', color: '#A3303F',
      text: ['Velvet, roses and a blood-red moon over black towers. Home of Vampire Mira.', '天鹅绒、玫瑰，黑色高塔上悬着血红的月亮。吸血鬼 Mira 的国度。'] },
    { id: 'mirror', name: ['The Mirror Realm', '镜之国度'], kind: ['Mirror Palace', '镜之宫殿'], image: 'world-mirror', color: '#8E8AA0',
      text: ['Candlelit halls lined with gold mirrors. Every reflection here has a will of its own. Home of Dark Mira.', '点满蜡烛的长廊，挂满金色的镜子。这里的每个倒影都有自己的意志。暗夜 Mira 的国度。'] },
    { id: 'ocean', sub: ['Flow, heal, explore.', '流动、治愈、探索。'], name: ['The Underwater Palace', '水下宫殿'], kind: ['Ocean world', '海洋世界'], image: 'world-ocean', color: '#6FA9C7',
      text: ['Crystal halls, jellyfish light and water that remembers. Home of Ocean Mira.', '水晶回廊、水母的光，还有记得一切的水。海洋 Mira 的国度。'] },
    { id: 'ruins', name: ['The Ruins Temple', '废墟神殿'], kind: ['Beneath the eclipse', '日食之下'], image: 'world-ruins', color: '#9C8570',
      text: ['Broken columns under a black sun. Home of Fallen Angel Mira.', '黑色太阳下的断柱残垣。堕天使 Mira 的国度。'] }
  ],

  /* ---------- Characters ---------- */
  characters: [
    { id: 'mira', sub: ['Same girl. Different worlds.', '同一个女孩，不同的世界。'], name: ['Mira', 'Mira'], world: 'city', image: 'char-mira', alt: 'char-real',
      role: ['The dreamer', '做梦的人'], words: [['Curious', 'Strong', 'Soft', 'Complex'], ['好奇', '坚强', '温柔', '复杂']],
      intro: ['A young woman in a modern city, looking for work and holding on to who she wants to be. At night she dreams of a world that seems to know her name.',
              '生活在现代城市的年轻女孩，一边找工作，一边努力守住想成为的自己。到了夜里，她梦见一个似乎认识她的世界。'],
      look: ['Champagne-blonde hair, light grey-blue eyes, ivory lace and a burgundy bow in the dream; a black T-shirt and a braid in the city.', '香槟金长发、浅灰蓝的眼睛。梦里是象牙白蕾丝配酒红蝴蝶结，城市里是黑色 T 恤和一条麻花辫。'],
      symbol: ['The gold crescent', '金色新月'], episodes: ['ep-01', 'ep-02', 'ep-03'], files: ['file-001', 'file-002', 'file-003'] },
    { id: 'dark', sub: ['The one who stayed in the mirror.', '留在镜子里的那一个。'], name: ['Dark Mira', '暗夜 Mira'], world: 'mirror', image: 'char-dark',
      role: ['The reflection', '倒影'], words: [['Chaos', 'Truth', 'Self'], ['混沌', '真相', '自我']],
      intro: ['Regal, cold and commanding. The version of Mira that lives on the other side of the glass, and the one she is most afraid to meet.', '高贵、冷漠、气场强大。住在镜子另一边的 Mira，也是她最害怕遇见的那个自己。'],
      look: ['Black lace, a dark crown, a silver crescent. Same face, colder light.', '黑色蕾丝、暗色王冠、银色新月。同一张脸，更冷的光。'],
      symbol: ['The silver crescent', '银色新月'], episodes: ['ep-01', 'ep-02'], files: ['file-002'] },
    { id: 'vampire', sub: ['Queen of the red moon.', '红月之下的女王。'], name: ['Vampire Mira', '吸血鬼 Mira'], world: 'crimson', image: 'char-vampire',
      role: ['Queen of the red moon', '红月女王'], words: [['Passion', 'Freedom', 'Power'], ['激情', '自由', '力量']],
      intro: ['Seductive and dangerous. She takes what the original Mira is too careful to ask for.', '诱惑而危险。她拿走的，是原本的 Mira 太小心而不敢开口要的东西。'],
      look: ['Burgundy velvet, roses, a blood-red moon behind her.', '酒红天鹅绒、玫瑰，身后一轮血月。'],
      symbol: ['The red moon', '血月'], episodes: [], files: [] },
    { id: 'celestial', name: ['Celestial Mira', '天界 Mira'], world: 'celestial', image: 'char-celestial',
      role: ['The light', '光'], words: [['Light', 'Hope', 'Rebirth'], ['光', '希望', '重生']],
      intro: ['Divine and radiant. Mira as she might be if she believed the world was on her side.', '神圣而耀眼。如果 Mira 相信世界站在她这边，她或许就是这个样子。'],
      look: ['Pearl and gold, a sunburst crown, the floating city behind her.', '珍珠与金、日芒王冠，身后是浮空之城。'],
      symbol: ['The sunburst crown', '日芒王冠'], episodes: [], files: [] },
    { id: 'ocean', name: ['Ocean Mira', '海洋 Mira'], world: 'ocean', image: 'char-ocean',
      role: ['The tide', '潮汐'], words: [['Flow', 'Heal', 'Explore'], ['流动', '治愈', '探索']],
      intro: ['Ethereal and fluid. She lets things move through her instead of holding on.', '空灵而流动。她让一切从身边流过，而不是紧紧抓住。'],
      look: ['Silver-blue silk, pearls, jellyfish light.', '银蓝色丝绸、珍珠、水母的光。'],
      symbol: ['The pearl', '珍珠'], episodes: [], files: [] },
    { id: 'fallen', sub: ['Pain, beauty, transform.', '痛、美、蜕变。'], name: ['Fallen Angel Mira', '堕天使 Mira'], world: 'ruins', image: 'char-fallen',
      role: ['The fall', '坠落'], words: [['Pain', 'Beauty', 'Transform'], ['痛', '美', '蜕变']],
      intro: ['Tragic and powerful. Proof that falling is also a way to change.', '悲伤而强大。她证明了，坠落也是一种改变。'],
      look: ['Black wings, feathers, an eclipse overhead.', '黑色羽翼、散落的羽毛，头顶一轮日食。'],
      symbol: ['The eclipse', '日食'], episodes: [], files: [] }
  ],

  /* ---------- Gallery ---------- */
  gallery: [
    { img: 'g-poster-awaits', cat: 'poster', title: ['Another World Awaits', '另一个世界，正在等你'], world: 'celestial', size: 'tall' },
    { img: 'g-scene-ball', cat: 'scene', title: ['The Masked Ball', '假面舞会'], world: 'celestial', char: 'mira', size: 'tall' },
    { img: 'g-poster-sides', cat: 'poster', title: ['All Sides of Me', '我的每一面'], char: 'mira', size: 'tall' },
    { img: 'g-scene-mirror', cat: 'scene', title: ['The Other Mira', '另一个 Mira'], world: 'mirror', char: 'dark', size: 'tall' },
    { img: 'g-sheet-ref', cat: 'character', title: ['Mira · Character Reference', 'Mira · 角色设定'], char: 'mira', size: 'wide' },
    { img: 'g-scene-city', cat: 'scene', title: ['Beyond the Door', '门的另一边'], world: 'celestial', size: 'tall' },
    { img: 'g-ig-glow', cat: 'poster', title: ['Some Doors Only Appear', '有些门只为你出现'], char: 'mira', size: 'square' },
    { img: 'g-scene-shatter', cat: 'scene', title: ['Shattered', '碎裂'], world: 'mirror', char: 'dark', size: 'tall' },
    { img: 'g-vampire-throne', cat: 'character', title: ['Vampire Mira', '吸血鬼 Mira'], world: 'crimson', char: 'vampire', size: 'tall' },
    { img: 'g-ig-window', cat: 'world', title: ['Maybe We Dream of Other Worlds', '也许我们梦见的是别的世界'], world: 'celestial', size: 'square' },
    { img: 'g-scene-morning', cat: 'scene', title: ['5:17 a.m.', '清晨 5:17'], world: 'city', char: 'mira', size: 'tall' },
    { img: 'g-sheet-original', cat: 'character', title: ['Original Mira', '初始 Mira'], char: 'mira', size: 'wide' },
    { img: 'g-poster-other', cat: 'poster', title: ['The Other Mira · Title Card', '另一个 Mira · 片尾'], world: 'mirror', size: 'tall' },
    { img: 'g-ig-cat', cat: 'world', title: ['A Brighter Me, New Worlds', '更好的我，新的世界'], world: 'celestial', size: 'square' },
    { img: 'g-scene-leave', cat: 'scene', title: ['Leaving for the Day', '出门'], world: 'city', char: 'mira', size: 'tall' },
    { img: 'g-sheet-real', cat: 'character', title: ['Real-world Mira', '现实中的 Mira'], world: 'city', char: 'mira', size: 'wide' },
    { img: 'g-poster-see', cat: 'poster', title: ['I See Different You', '我看见不同的你'], size: 'tall' },
    { img: 'g-ig-letter', cat: 'world', title: ['Different Worlds, Same Girl', '不同的世界，同一个女孩'], world: 'celestial', size: 'square' },
    { img: 'g-reach', cat: 'scene', title: ['Reach', '伸手'], char: 'mira', size: 'tall' },
    { img: 'g-scene-moon', cat: 'scene', title: ['Her Moon', '她的月亮'], char: 'mira', size: 'tall' }
  ],

  /* ---------- Dream Passport ---------- */
  passport: {
    questions: [
      { q: ['It is 3 a.m. and you cannot sleep. You…', '凌晨三点，你睡不着。你会……'],
        a: [ ['Open the window and look for the moon', '打开窗，找月亮', 'celestial'], ['Light a candle and write down what you want', '点一支蜡烛，写下你想要的', 'crimson'], ['Look into the mirror a little too long', '在镜子前看得太久', 'mirror'] ] },
      { q: ['Choose something to carry through the door.', '选一样东西，带着它穿过那扇门。'],
        a: [ ['A feather made of light', '一根光做的羽毛', 'celestial'], ['A single red rose', '一支红玫瑰', 'crimson'], ['A silver hand mirror', '一面银色手镜', 'mirror'] ] },
      { q: ['What do you secretly want?', '你心里真正想要的是……'],
        a: [ ['A fresh start', '重新开始', 'celestial'], ['To stop asking for permission', '不再请求任何人的允许', 'crimson'], ['To know who I really am', '知道真正的自己是谁', 'mirror'] ] },
      { q: ['Pick the light you would walk toward.', '选一束你会走向的光。'],
        a: [ ['Pearl and gold', '珍珠与金', 'celestial'], ['Candle and velvet red', '烛光与绛红', 'crimson'], ['Midnight silver', '午夜银', 'mirror'] ] }
    ],
    results: {
      celestial: { world: 'celestial', image: 'world-celestial', who: ['For those who still believe in wonder.', '给仍然相信奇迹的人。'], line: ['The Celestial City remembers you. You were always meant to begin again.', '天界之城记得你。你本来就注定，可以重新开始。'] },
      crimson:   { world: 'crimson',   image: 'world-crimson', who: ['For those drawn to beautiful darkness.', '给被美丽黑暗吸引的人。'],   line: ['The Crimson Kingdom remembers you. What you want was never too much.', '绯红王国记得你。你想要的，从来都不算过分。'] },
      mirror:    { world: 'mirror',    image: 'world-mirror', who: ['For those searching for another version of themselves.', '给寻找另一个自己的人。'],    line: ['The Mirror Realm remembers you. Every version of you is still you.', '镜之国度记得你。每一个版本的你，都还是你。'] }
    }
  },

  /* ---------- Studio ---------- */
  services: [
    { icon: 'film', t: ['AI Cinematic Storytelling', 'AI 电影感叙事'], d: ['Short vertical films with a consistent character, a story arc and a finished edit.', '有固定角色、完整故事线和成片剪辑的竖屏短片。'] },
    { icon: 'person', t: ['Original Character Development', '原创角色开发'], d: ['Character bibles, reference sheets and alternate versions that stay recognizable shot to shot.', '角色设定集、参考图和不同版本，保证每个镜头都认得出是同一个人。'] },
    { icon: 'brush', t: ['AI Visual Art', 'AI 视觉艺术'], d: ['Key art, posters and campaign imagery in a cohesive visual language.', '风格统一的主视觉、海报和宣传图。'] },
    { icon: 'globe', t: ['Creative Direction', '创意指导'], d: ['Mood, palette, typography and motion rules for a project or a brand.', '为项目或品牌制定氛围、色彩、字体和动效规范。'] },
    { icon: 'compass', t: ['Fantasy Worldbuilding', '奇幻世界观构建'], d: ['Worlds with their own places, symbols and rules, ready to grow into a series.', '有自己地点、符号和规则的世界，可以延展成系列内容。'] },
    { icon: 'spark', t: ['Brand Collaborations', '品牌合作'], d: ['AI-led creative for brands that want story, not just visuals.', '为想要故事、而不只是画面的品牌，提供 AI 创意内容。'] }
  ],

  /* ---------- Dream Shop (coming soon, no prices) ---------- */
  shop: [
    { img: 'g-poster-awaits', t: ['Digital art posters', '数字艺术海报'] },
    { img: 'g-ig-window', t: ['Mindyverse wallpapers', 'Mindyverse 壁纸'] },
    { img: 'char-dark', t: ['Character collections', '角色主题系列'] },
    { img: 'g-scene-city', t: ['Art prints', '艺术印刷品'] }
  ]
};
