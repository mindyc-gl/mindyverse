/* =====================================================================
   MINDYVERSE — app
   A small hash router renders every page from window.MV (js/content.js).
   ===================================================================== */
(function () {
'use strict';
const MV = window.MV;
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine = matchMedia('(hover:hover) and (pointer:fine)').matches;
const app = document.getElementById('app');
const IMG = n => `assets/img/${n}.webp`;
document.documentElement.classList.add('js');

/* ---------- language ---------- */
let L = 'en';
try { const s = localStorage.getItem('mv-lang'); if (s === 'en' || s === 'zh') L = s; else if ((navigator.language || '').toLowerCase().startsWith('zh')) L = 'zh'; } catch (_) {}
const x = () => (L === 'zh' ? 1 : 0);
const tx = v => (Array.isArray(v) ? (v[x()] ?? v[0]) : v || '');
const UI = {
  n_home:['Home','首页'], n_series:['Series','短剧'], n_archive:['Archive','档案馆'], n_worlds:['Worlds','世界'], n_gallery:['Gallery','展厅'], n_passport:['Passport','梦境护照'], n_studio:['Studio','工作室'], n_shop:['Shop','商店'], menu:['Menu','菜单'],
  tagline:['Another World Awaits.','另一个世界，正在等你。'], made:['An original story world by Mindy Chen.','Mindy Chen 的原创故事宇宙。'],
  series_title:['When the Dream Remembers You','当梦记得你'],
  enter:['Enter the World','进入世界'], watch:['Watch the Series','观看短剧'], skip:['Skip intro','跳过'],
  core:['You were never just dreaming.','你从来都不只是在做梦。'],
  portal_k:['A portal to the worlds we dreamed of, but never got to visit.','通往那些我们梦见过、却从未去过的世界。'],
  s_series:['The Series','短剧'], all_eps:['All episodes','全部剧集'], ep:['EP.','第'], ep_suffix:['',' 集'],
  s_meaning:['Two meanings','名字的两层意思'], m1:['I · The dream','一 · 梦'], m2:['II · The dreamer','二 · 做梦的人'],
  s_archive:['The Dream Archive','梦境档案馆'], archive_h:['What crossed over','穿越过来的东西'], archive_p:['Every episode unlocks a file: the background, the clues, the object that crossed over. New files open as new episodes are released.','每一集都会解锁一份档案：故事背景、线索，以及穿越过来的那件物品。新剧集发布时，新的档案随之开启。'],
  unlocked:['Unlocked','已解锁'], locked:['Locked','未解锁'], locked_msg:['This file opens with the next episode.','这份档案会随下一集开启。'], open_file:['Open file','打开档案'],
  s_worlds:['The Worlds','世界'], worlds_p:['Six worlds so far. Every Mira keeps the same face and a different light.','目前有六个世界。每一个 Mira 都有同一张脸，和不同的光。'],
  s_chars:['Every Mira','每一个 Mira'], explore:['Explore','探索'],
  s_passport:['Dream Passport','梦境护照'], passport_q:['Which world remembers you?','哪个世界记得你？'], passport_p:['Four quick questions. One world. A passport card you can keep.','四个小问题，一个世界，一张属于你的护照卡。'], start:['Begin','开始'],
  s_gallery:['The Gallery','视觉展厅'], gallery_p:['Key art, scenes, characters and posters from Mindyverse.','Mindyverse 的主视觉、场景、角色与海报。'],
  cat_all:['All','全部'], cat_poster:['Posters','海报'], cat_scene:['Scenes','场景'], cat_character:['Characters','角色'], cat_world:['Worlds','世界'],
  s_studio:['The Studio','工作室'], studio_p:['Mindyverse is also a small creative studio for AI storytelling, characters and visual worlds.','Mindyverse 也是一个小型创意工作室，专注 AI 叙事、角色与视觉世界。'],
  s_shop:['The Dream Shop','梦境商店'], shop_p:['Posters, wallpapers and prints from Mindyverse are on the way.','Mindyverse 的海报、壁纸和艺术印刷品正在准备中。'], soon:['Coming soon','即将推出'],
  watch_yt:['Watch on YouTube','在 YouTube 观看'], full_ep:['Watch the full episode on YouTube','在 YouTube 观看完整剧集'], share:['Share','分享'], copied:['Link copied','链接已复制'],
  prev:['Previous','上一集'], next:['Next','下一集'], none:['No more yet','暂无'],
  f_episode:['Episode','剧集'], f_world:['World','世界'], f_file:['Archive file','档案'], f_chars:['Characters','角色'],
  background:['Background','故事背景'], clues:['Clues','隐藏线索'], object:['The object','神秘物件'], foreshadow:['What comes next','未来伏笔'], tbd:['To be revealed. Edit this in js/content.js when the story is ready.','尚未公布。故事确定后，在 js/content.js 里填写。'],
  back_archive:['Back to the archive','返回档案馆'], back_worlds:['Back to the worlds','返回世界'], watch_ep:['Watch the episode','观看这一集'],
  role:['Role','身份'], look:['Look','视觉设定'], symbol:['Symbol','标志'], appears:['Appears in','出场'], not_yet:['Not in an episode yet.','尚未在剧集中登场。'],
  q_of:['Question','问题'], your_world:['Your world','你的世界'], save:['Save card','保存卡片'], again:['Try again','重新测试'], saved_note:['Card saved.','卡片已保存。'], save_fail:['Saving is not available here. Take a screenshot of the card instead.','这里无法直接保存，请截图保存卡片。'],
  collab:['Work together','合作'], name:['Name','姓名'], email:['Email','邮箱'], company:['Brand or company','品牌或公司'], ptype:['Project','项目类型'], msg:['Tell me about it','简单介绍一下'], send:['Send','发送'],
  form_note:['The contact form is not connected yet. For now, reach Mindy through YouTube.','联系表单尚未接通。目前请通过 YouTube 联系 Mindy。'],
  notify:['Tell me when it opens','开张时通知我'], notify_note:['Sign-ups are not connected yet. Follow on YouTube for the launch.','订阅尚未接通。请关注 YouTube 获取上新消息。'],
  related:['Related','相关'], see_char:['Character','角色'], see_world:['World','世界'], shop_link:['Prints are coming to the Dream Shop','印刷品即将上架梦境商店'],
  preview_only:['Preview clip · full episode on YouTube','预览片段 · 完整剧集请到 YouTube'], no_preview:['Full episode on YouTube','完整剧集在 YouTube'],
  close:['Close','关闭'], of:['of','/'], home_series_p:['A girl in the city. A door in her dreams. Three episodes so far, and the story keeps going.','城市里的一个女孩，梦里的一扇门。已经发布三集，故事还在继续。'],
  studio_cta:['Start a collaboration','开始合作'],
  s_extras:['Extras','周边'], extras_h:['Beyond the episodes','剧集之外'], extras_p:['Shorts and side stories from the world of the series.','来自剧集世界的短片与番外。'], watch_short:['Watch on YouTube','在 YouTube 观看'],
  journey_k:['Behind the worlds','创作历程'], journey_h:['The Making of Mindyverse','Mindyverse 是怎样诞生的'], journey_p:['Character packs, worlds and the steps behind every episode.','角色包、世界设定，以及每一集背后的创作过程。'], journey_cta:['Step inside the studio','走进幕后'],
  process:['Process','创作流程'], process_h:['From idea to episode','从一个念头到一集短剧'], packs_k:['Character packs','角色包'], packs_h:['Mira, on paper','纸上的 Mira'], packs_p:['The reference sheets that keep Mira the same girl in every world.','让 Mira 在每个世界里都是同一个女孩的设定图。'],
  timeline_k:['Timeline','时间线'], timeline_h:['How it came together','一步步成形'], timeline_p:['The order in which the world was built.','这个世界被搭建起来的顺序。'],
  every_dream:['Every dream leaves a trace.','每个梦，都会留下痕迹。'], journey:['Start the journey','开始旅程'], discover:['Discover the world that calls to you.','找到正在呼唤你的那个世界。'], trailer:['Watch trailer','观看预告'],
  tag_all:['All','全部'], tag_episodes:['Episodes','剧集'], tag_characters:['Characters','角色'], tag_worlds:['Worlds','世界'], tag_objects:['Objects','物件'], tag_secrets:['Secrets','秘密'],
  fragments:['Fragments of Another World','另一个世界的碎片'], fragments_p:['A collection of places that exist somewhere between dreams and imagination.','一些存在于梦境与想象之间的地方。'],
  studio_h:['Where imagination meets AI.','想象力与 AI 相遇的地方。'], studio_p2:['I create cinematic stories, original characters and visual worlds, powered by imagination and AI.','我用想象力和 AI，创作电影感故事、原创角色和视觉世界。'], collab_us:['Collaborate with us','合作洽谈'],
  shop_h:['Take a piece of the dream home.','把梦的一角带回家。'], shop_p2:['Digital art, wallpapers and more, for those who believe another world is waiting.','数字艺术、壁纸，以及更多，献给相信另一个世界正在等待的人。'],
  tab_about:['About','简介'], tab_worlds:['Worlds','世界'], tab_appear:['Appearances','出场'], tab_gallery:['Gallery','图集'], chars_p:['Same soul. Different worlds.','同一个灵魂，不同的世界。']
};
const t = k => tx(UI[k]);

/* ---------- lookups ---------- */
const byId = (arr, id) => arr.find(o => o.id === id);
const epNo = e => (L === 'zh' ? `第 ${+e.no} 集` : `EP.${e.no}`);
const moonSvg = (cls = '') => `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M14.6 2.8a9.2 9.2 0 1 0 6.6 13.5A7.6 7.6 0 0 1 14.6 2.8Z"/></svg>`;
const ytIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M8 5v14l11-7z"/></svg>';
const released = () => MV.episodes.filter(e => e.status === 'released');
const ytUrl = id => (/^https?:/.test(id) ? id : `https://www.youtube.com/shorts/${id}`);
const epLink = e => (e.youtube ? ytUrl(e.youtube) : MV.site.youtube);
const ytEmbed = (id, title) => `<iframe src="https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1&playsinline=1" title="${title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>`;
const paras = s => s.split(/\n\n+/).map(p => `<p>${p}</p>`).join('');

/* ---------- ornaments ---------- */
const STAR = '<svg class="o-star" viewBox="0 0 60 24" aria-hidden="true"><path fill="currentColor" d="M30 1l2.2 8.8L41 12l-8.8 2.2L30 23l-2.2-8.8L19 12l8.8-2.2Z"/><path fill="none" stroke="currentColor" stroke-width=".8" d="M17 12c-4 0-6-3-10-3M43 12c4 0 6-3 10-3M17 12c-4 0-6 3-10 3M43 12c4 0 6 3 10 3"/></svg>';
const CRES = '<svg class="o-cres" viewBox="0 0 40 20" aria-hidden="true"><path fill="currentColor" d="M22.5 2.5a7.5 7.5 0 1 0 5.4 11A6.2 6.2 0 0 1 22.5 2.5Z"/><path fill="none" stroke="currentColor" stroke-width=".8" d="M11 10H2M29 10h9"/></svg>';
const Frame = (inner, cls = '') => `<div class="gf ${cls}">${STAR}${inner}${CRES}</div>`;
const Ribbon = (label, cls = '') => `<span class="ribbon ${cls}">${label}</span>`;
const ICONS = {
  film: '<path d="M4 5h16v14H4zM8 5v14M16 5v14M4 9h4M4 15h4M16 9h4M16 15h4"/>',
  person: '<circle cx="12" cy="8" r="3.5"/><path d="M5 20c1-4 4-6 7-6s6 2 7 6"/>',
  brush: '<path d="M14 4l6 6-8 8H6v-6z"/><path d="M11 7l6 6"/>',
  globe: '<circle cx="12" cy="12" r="8"/><path d="M4 12h16M12 4c3 3 3 13 0 16M12 4c-3 3-3 13 0 16"/>',
  compass: '<circle cx="12" cy="12" r="8"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
  spark: '<path d="M12 3v5M12 16v5M3 12h5M16 12h5M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3"/>'
};
const Icon = n => `<svg class="ic" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round">${ICONS[n] || ''}</svg>`;
const src = s => (s.includes('.') ? `assets/img/${s}` : IMG(s));
function Art(slot, cls = '') {
  const a = MV.art[slot];
  return a.fit === 'cover'
    ? `<div class="art ${cls}"><img class="art-main cover" src="${src(a.src)}" alt="" style="object-position:${a.pos || '50% 50%'}"></div>`
    : `<div class="art ${cls}"><img class="art-bg" src="${src(a.src)}" alt=""><img class="art-main" src="${src(a.src)}" alt="" style="object-position:${a.pos || '50% 50%'}"></div>`;
}

/* ---------- components ---------- */
function EpisodeCard(e) {
  return `<a class="epc rv" href="#${e.id}">${Frame(`<div class="epc-img"><img src="${IMG(e.cover)}" alt="" loading="lazy"></div>`, 'rect')}
    <div class="epc-t"><span class="epc-no">${epNo(e)}</span><span class="epc-title">${tx(e.title)}</span>${e.coverLine ? `<span class="epc-line">${tx(e.logline)}</span>` : ''}</div></a>`;
}
function UpcomingCard() {
  const u = MV.site.upcoming; if (!u) return '';
  return `<div class="epc locked rv" aria-label="${t('soon')}">${Frame(`<div class="epc-img"><div class="lockmoon">${moonSvg()}<svg class="lk" viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="11" width="12" height="9" rx="1.5" fill="none" stroke="currentColor"/><path d="M8.5 11V8a3.5 3.5 0 0 1 7 0v3" fill="none" stroke="currentColor"/></svg></div></div>`, 'rect')}
    <div class="epc-t"><span class="epc-no">${L === 'zh' ? `第 ${+u.no} 集` : 'EP.' + u.no}</span><span class="epc-title">${tx(u.title)}</span></div></div>`;
}
function ArchiveCard(f) {
  const inner = `<div class="fc-img"><img src="${IMG(f.image)}" alt="" loading="lazy">${f.unlocked ? '' : `<div class="lockmoon">${moonSvg()}</div>`}</div>
    <div class="fc-body"><span class="fc-no">FILE ${f.no}</span><span class="fc-t">${tx(f.title)}</span><span class="fc-s">${tx(f.tagline || f.summary)}</span>${Ribbon(f.unlocked ? t('unlocked') : t('locked'), f.unlocked ? '' : 'dim')}</div>`;
  return f.unlocked
    ? `<a class="fc rv" href="#${f.id}" data-tags="${(f.tags || []).join(' ')}">${Frame(inner, 'arch')}</a>`
    : `<button type="button" class="fc locked rv" data-locked="${f.id}" data-tags="${(f.tags || []).join(' ')}" aria-label="${t('locked')}: FILE ${f.no}">${Frame(inner, 'arch')}</button>`;
}
function WorldCard(w) {
  return `<div class="world rv" style="--wc:${w.color}"><img src="${IMG(w.image)}" alt="" loading="lazy"><div><span class="k">${tx(w.kind)}</span><span class="h3">${tx(w.name)}</span><p>${tx(w.text)}</p></div></div>`;
}
const Head = (eyebrow, title, p, h = 'h2') => `<div class="head"><span class="eyebrow rv">${eyebrow}</span><h${h === 'h1' ? 1 : 2} class="${h} rv">${title}</h${h === 'h1' ? 1 : 2}>${p ? `<p class="lede rv">${p}</p>` : ''}</div>`;
const Cap = s => `<span class="capsd">${s}</span>`;
const Manifesto = () => `<section class="sec manifesto"><div class="wrap"><div class="mf rv">${STAR.replace('o-star', 'o-star big')}<p class="mf-q">${tx(MV.series.manifesto)}</p><p class="mf-n">${tx(MV.series.manifestoNote)}</p></div></div></section>`;
function ExtraCard(x) {
  return `<a class="xc rv" href="${ytUrl(x.youtube)}" target="_blank" rel="noopener">${Frame(`<div class="xc-img"><img src="${IMG(x.image)}" alt="" loading="lazy"><span class="xc-play">${ytIcon}</span></div>`, 'rect')}
    <div class="xc-b"><span class="eyebrow">${tx(x.kind)}</span><span class="h3">${tx(x.title)}</span><p class="muted">${tx(x.line)}</p><span class="link">${t('watch_short')} ↗</span></div></a>`;
}
const Extras = () => MV.extras && MV.extras.length ? `<section class="sec" style="padding-top:0"><div class="wrap">${Head(t('s_extras'), Cap(t('extras_h')), t('extras_p'))}<div class="xgrid">${MV.extras.map(ExtraCard).join('')}</div></div></section>` : '';
const JourneyCard = () => `<section class="sec" style="padding-top:0"><div class="wrap"><a class="jc rv" href="#journey">${Frame(`<div class="jc-in"><div class="jc-img"><img src="${IMG('pack-ref')}" alt="" loading="lazy" draggable="false"></div><div class="jc-b"><span class="eyebrow">${t('journey_k')}</span><span class="h2">${Cap(t('journey_h'))}</span><p class="lede">${t('journey_p')}</p><span class="link">${t('journey_cta')} →</span></div></div>`, 'rect')}</a></div></section>`;

/* ---------- pages ---------- */
const Pages = {
  home() {
    const eps = released(), S = MV.site;
    return `
    <section class="hero" id="hero">
      ${Art('homeHero', 'hero-art')}
      <div class="hero-frame" aria-hidden="true"><i class="hf-l"></i><i class="hf-r"></i></div>
      <div class="hero-shade"></div>
      <p class="hero-poem">${t('portal_k')}</p>
      <div class="hero-social">${[['YouTube', S.youtube], ['Instagram', S.instagram], ['TikTok', S.tiktok]].filter(o => o[1]).map(o => `<a href="${o[1]}" target="_blank" rel="noopener">${o[0]}</a>`).join('')}</div>
      <div class="hero-c">
        ${STAR.replace('o-star', 'o-star big')}
        <h1 class="p-mark" id="pmark" aria-label="MINDYVERSE">MINDYVERSE</h1>
        <p class="p-sub">${t('tagline')}</p>
      </div>
      <div class="hero-b">
        <div class="row"><a class="btn gold" href="#world" data-door>${t('enter')}</a><a class="btn navy" href="#series">${t('watch')}</a></div>
        <p class="hero-core">${t('core')}</p>
      </div>
    </section>

    <section class="sec" id="home-series"><div class="wrap">
      <div class="split">
        <div class="stack">${Head(t('s_series'), Cap(t('series_title')), tx(MV.series.subline))}<div class="row rv"><a class="btn" href="#series">${t('all_eps')}</a></div></div>
        <div class="eps4">${eps.map(EpisodeCard).join('')}${UpcomingCard()}</div>
      </div>
    </div></section>

    <section class="sec meaning-sec"><div class="wrap">
      <span class="eyebrow rv">${t('s_meaning')}</span>
      <div class="meaning" style="margin-top:22px">
        <div class="rv"><b>${t('m1')}</b><p>${tx(MV.series.meanings[0])}</p></div>
        <div class="rv"><b>${t('m2')}</b><p>${tx(MV.series.meanings[1])}</p></div>
      </div>
    </div></section>

    ${Manifesto()}
    ${Extras()}
    <section class="sec"><div class="wrap">
      <div class="center-head">${Head(t('s_archive'), Cap(t('s_archive')), t('every_dream'))}</div>
      <div class="files">${MV.archive.map(ArchiveCard).join('')}</div>
    </div></section>

    <section class="sec" style="padding-top:0"><div class="wrap">
      <div class="band rv"><img src="${IMG('world-mirror')}" alt="" loading="lazy"><div>
        <span class="eyebrow">${t('s_passport')}</span><h2 class="h2">${t('passport_q')}</h2><p class="lede">${t('passport_p')}</p>
        <div class="row"><a class="btn gold" href="#passport">${t('journey')}</a></div></div></div>
    </div></section>
    ${JourneyCard()}`;
  },

  series() {
    const eps = released();
    return `<section class="split-hero">
      ${Art('seriesHero', 'sh-art')}
      <div class="sh-shade"></div>
      <div class="wrap sh-in">
        <div class="stack sh-copy">
          <span class="eyebrow rv">${t('s_series')}</span>
          <h1 class="h1 rv">${Cap(t('series_title'))}</h1>
          <p class="lede rv">${tx(MV.series.subline)}</p>
          <div class="row rv"><a class="btn" href="#${eps[0].id}"><span class="play">${ytIcon}</span>${t('trailer')}</a></div>
        </div>
      </div>
    </section>
    <section class="sec" style="padding-top:clamp(28px,4vw,56px)"><div class="wrap">
      <div class="eps4 wide">${eps.map(EpisodeCard).join('')}${UpcomingCard()}</div>
      <div class="meaning" style="margin-top:90px">
        <div class="rv"><b>${t('m1')}</b><p>${tx(MV.series.meanings[0])}</p></div>
        <div class="rv"><b>${t('m2')}</b><p>${tx(MV.series.meanings[1])}</p></div>
      </div>
    </div></section>
    ${Manifesto()}
    ${Extras()}`;
  },

  episode(id) {
    const list = released(), i = list.findIndex(e => e.id === id), e = list[i];
    if (!e) return Pages.home();
    const prev = list[i - 1], next = list[i + 1], f = byId(MV.archive, e.archive), w = byId(MV.worlds, e.world);
    const player = (MV.site.embed && e.youtube && !/^https?:/.test(e.youtube))
      ? ytEmbed(e.youtube, tx(e.title))
      : e.video
      ? `<video src="${e.video}" poster="${IMG(e.cover)}" controls playsinline preload="metadata"></video><span class="tag">${tx(e.videoLabel) || t('preview_only')}</span>`
      : `<img src="${IMG(e.cover)}" alt=""><div class="ov">${moonSvg('cv-moon')}<span class="cv-series">${t('no_preview')}</span><a class="btn gold" href="${epLink(e)}" target="_blank" rel="noopener">${ytIcon}${t('watch_yt')}</a></div>`;
    return `<section class="wrap"><div class="epd">
      <div class="rv">${Frame(`<div class="player">${player}</div>`, 'rect tall')}</div>
      <div class="epd-info">
        <span class="eyebrow rv">${t('series_title')} · ${epNo(e)}</span>
        <h1 class="h1 rv">${Cap(tx(e.title))}</h1>
        <p class="it rv">${tx(e.logline)}</p>
        <div class="syn rv">${paras(tx(e.synopsis))}</div>
        <div class="row rv"><a class="btn gold" href="${epLink(e)}" target="_blank" rel="noopener">${ytIcon}${t('full_ep')}</a><button class="btn" type="button" id="share">${t('share')}</button></div>
        <dl class="facts rv">
          <div><dt>${t('f_world')}</dt><dd>${tx(w.name)}</dd></div>
          <div><dt>${t('f_file')}</dt><dd>${f ? `<a href="#${f.id}">FILE ${f.no} · ${tx(f.title)}</a>` : '—'}</dd></div>
          <div><dt>${t('f_chars')}</dt><dd>${e.characters.map(cid => { const c = byId(MV.characters, cid); return `<a href="#mira-${c.id}">${tx(c.name)}</a>`; }).join(' · ')}</dd></div>
        </dl>
        <div class="pn rv">
          ${prev ? `<a href="#${prev.id}"><small>← ${t('prev')}</small><b>${tx(prev.title)}</b></a>` : `<span><small>← ${t('prev')}</small><b>${t('none')}</b></span>`}
          ${next ? `<a class="r" href="#${next.id}"><small>${t('next')} →</small><b>${tx(next.title)}</b></a>` : `<span class="r"><small>${t('next')} →</small><b>${t('soon')}</b></span>`}
        </div>
      </div></div></section>
      ${f ? `<section class="sec"><div class="wrap"><div class="files" style="grid-template-columns:minmax(0,300px)">${ArchiveCard(f)}</div></div></section>` : ''}`;
  },

  archive() {
    const tabs = ['all', 'episodes', 'characters', 'worlds', 'objects', 'secrets'];
    return `<section class="ph arch-ph"><div class="wrap center-head">${Head(t('s_archive'), Cap(t('s_archive')), t('every_dream'), 'h1')}
      <div class="filters rv" role="group" aria-label="Filter">${tabs.map((c, i) => `<button class="chip" type="button" data-ftag="${c}" aria-pressed="${i === 0}">${t('tag_' + c)}</button>`).join('')}</div></div></section>
    <section class="sec" style="padding-top:0"><div class="wrap"><div class="files" id="files">${MV.archive.map(ArchiveCard).join('')}</div></div></section>`;
  },

  file(id) {
    const f = byId(MV.archive, id);
    if (!f || !f.unlocked) return Pages.archive();
    const e = byId(MV.episodes, f.episode);
    const list = items => `<ol class="clues">${items.map((c, i) => `<li><b>${String(i + 1).padStart(2, '0')}</b><span>${tx(c)}</span></li>`).join('')}</ol>`;
    return `<section class="wrap"><div class="fd">
      <div>${Frame(`<div class="fd-img"><img src="${IMG(f.image)}" alt=""><div class="unlock"><svg viewBox="0 0 100 100"><path d="M62 14a38 38 0 1 0 24 58A30 30 0 0 1 62 14Z" pathLength="1"/></svg></div></div>`, 'arch')}</div>
      <div class="stack" style="gap:26px">
        <span class="fd-stamp">${moonSvg('cv-moon')} FILE ${f.no} · ${t('unlocked')}</span>
        <h1 class="h1 rv" style="font-size:clamp(40px,5.2vw,78px);overflow-wrap:anywhere">${Cap(tx(f.title))}</h1>
        <p class="it rv">${tx(f.tagline || f.summary)}</p>
        <div class="stack rv"><span class="eyebrow">${t('background')}</span><p class="lede">${tx(f.background)}</p></div>
        <div class="stack rv"><span class="eyebrow">${t('clues')}</span>${list(f.clues)}</div>
        ${f.object ? `<div class="obj rv">${moonSvg()}<div><span class="eyebrow">${t('object')}</span><div class="h3" style="margin-top:8px">${tx(f.object.name)}</div><p class="muted">${tx(f.object.note)}</p></div></div>` : ''}
        <div class="stack rv"><span class="eyebrow">${t('foreshadow')}</span>${f.foreshadow ? `<p class="lede">${tx(f.foreshadow)}</p>` : `<p class="placeholder">${t('tbd')}</p>`}</div>
        <div class="row rv">${e ? `<a class="btn gold" href="#${e.id}">${t('watch_ep')} · ${epNo(e)}</a>` : ''}<a class="btn" href="#archive">${t('back_archive')}</a></div>
      </div></div></section>`;
  },

  world(sel) { return Pages.character(sel || 'mira'); },

  character(id) {
    const c = byId(MV.characters, id) || MV.characters[0];
    return `<section class="cw" id="cw" data-c="${c.id}">
      <div class="cw-bg"><img id="cwBg" src="${IMG(c.image)}" alt=""></div>
      <div class="wrap cw-in">
        <nav class="cw-list" aria-label="${t('s_chars')}">${MV.characters.map(o => `<a href="#mira-${o.id}" data-cid="${o.id}" aria-current="${o.id === c.id}">${tx(o.name)}</a>`).join('')}</nav>
        <div class="cw-fig"><img id="cwImg" src="${IMG(c.image)}" alt="${tx(c.name)}"></div>
        <div class="cw-info" id="cwInfo">${CharInfo(c)}</div>
      </div>
    </section>
    <section class="sec"><div class="wrap">${Head(t('s_worlds'), Cap(t('s_worlds')), t('worlds_p'))}<div class="worlds">${MV.worlds.map(WorldCard).join('')}</div></div></section>`;
  },

  gallery() {
    const cats = ['all', 'character', 'world', 'scene', 'poster'];
    return `<section class="split-hero gal-hero">
      <div class="wrap gh-in">
        <div class="stack">
          <span class="eyebrow rv">${t('s_gallery')}</span>
          <h1 class="h1 rv">${Cap(t('fragments'))}</h1>
          <p class="lede rv">${t('fragments_p')}</p>
          <div class="filters rv" role="group" aria-label="Filter">${cats.map((c, i) => `<button class="chip" type="button" data-cat="${c}" aria-pressed="${i === 0}">${t('cat_' + c)}</button>`).join('')}</div>
        </div>
        <div class="rv">${Frame(Art('gallery', 'gh-art'), 'rect')}</div>
      </div>
    </section>
    <section class="sec" style="padding-top:clamp(20px,3vw,40px)"><div class="wrap">
      <div class="gal" id="gal">${MV.gallery.map((g, i) => `<button type="button" class="gi ${g.size} rv" data-g="${i}" data-cat="${g.cat}"><img src="${IMG(g.img)}" alt="${tx(g.title)}" loading="lazy"><figcaption>${tx(g.title)}</figcaption></button>`).join('')}</div>
    </div></section>`;
  },

  passport() {
    const R = MV.passport.results;
    return `<section class="wrap"><div class="pp">
      <div class="q" id="quiz">
        <svg class="pp-moon" viewBox="0 0 100 100" aria-hidden="true"><path fill="currentColor" d="M62 14a38 38 0 1 0 24 58A30 30 0 0 1 62 14Z"/></svg>
        <span class="eyebrow">${t('s_passport')}</span>
        <h1 class="h1" style="font-size:clamp(44px,5.6vw,80px)">${t('passport_q')}</h1>
        <p class="lede">${t('discover')}</p>
        <div class="row"><button class="btn gold" type="button" id="pstart">${t('journey')}</button></div>
      </div>
      <div class="tarot" id="tarot">${Object.keys(R).map(k => { const r = R[k], w = byId(MV.worlds, r.world); return `<div class="tc" data-k="${k}">${Frame(`<div class="tc-img"><img src="${IMG(r.image)}" alt="" loading="lazy"></div><div class="tc-b"><span class="tc-n">${tx(w.name)}</span><span class="tc-w">${tx(r.who)}</span></div>`, 'arch')}</div>`; }).join('')}</div>
    </div></section>`;
  },

  studio() {
    return `<section class="split-hero">
      ${Art('studio', 'sh-art right')}
      <div class="sh-shade"></div>
      <div class="wrap sh-in"><div class="stack sh-copy">
        <span class="eyebrow rv">${t('s_studio')}</span>
        <h1 class="h1 rv">${Cap(t('studio_h'))}</h1>
        <p class="lede rv">${t('studio_p2')}</p>
        <div class="row rv"><a class="btn gold" href="#collab" data-scroll>${t('collab_us')}</a></div>
      </div></div>
    </section>
    <section class="sec" style="padding-top:clamp(28px,4vw,56px)"><div class="wrap">
      <div class="icons">${MV.services.map(s => `<div class="rv">${Icon(s.icon)}<b>${tx(s.t)}</b><p>${tx(s.d)}</p></div>`).join('')}</div>
    </div></section>
    <section class="sec" style="padding-top:0" id="collab"><div class="wrap">
      ${Head(t('collab'), Cap(t('collab')), '')}
      <form class="form rv" id="cform" novalidate>
        <div class="field"><label for="c-name">${t('name')}</label><input id="c-name" name="name" autocomplete="name" required></div>
        <div class="field"><label for="c-email">${t('email')}</label><input id="c-email" name="email" type="email" autocomplete="email" required></div>
        <div class="field"><label for="c-co">${t('company')}</label><input id="c-co" name="company" autocomplete="organization"></div>
        <div class="field"><label for="c-type">${t('ptype')}</label><select id="c-type" name="type">${MV.services.map(s => `<option>${tx(s.t)}</option>`).join('')}</select></div>
        <div class="field full"><label for="c-msg">${t('msg')}</label><textarea id="c-msg" name="message"></textarea></div>
        <div class="full row"><button class="btn gold" type="submit">${t('send')}</button></div>
        <p class="note" id="cnote" hidden></p>
      </form>
    </div></section>`;
  },

  shop() {
    return `<section class="split-hero">
      ${Art('shop', 'sh-art right')}
      <div class="sh-shade"></div>
      <div class="wrap sh-in"><div class="stack sh-copy">
        <span class="eyebrow rv">${t('s_shop')}</span>
        <h1 class="h1 rv">${Cap(t('shop_h'))}</h1>
        <p class="lede rv">${t('shop_p2')}</p>
        <div class="row rv"><span class="btn" style="cursor:default">${t('soon')}</span></div>
      </div></div>
    </section>
    <section class="sec" style="padding-top:clamp(28px,4vw,56px)"><div class="wrap">
      <div class="shop">${MV.shop.map(p => `<div class="prod rv">${Frame(`<div class="im"><img src="${IMG(p.img)}" alt="" loading="lazy"></div>`, 'rect')}<span class="h3" style="font-size:22px;text-align:center">${tx(p.t)}</span>${Ribbon(t('soon'), 'dim')}</div>`).join('')}</div>
      <form class="form rv" id="nform" style="margin:64px auto 0;grid-template-columns:1fr auto;align-items:end;max-width:640px" novalidate>
        <div class="field"><label for="n-email">${t('email')}</label><input id="n-email" type="email" autocomplete="email"></div>
        <button class="btn gold" type="submit">${t('notify')}</button>
        <p class="note" id="nnote" hidden></p>
      </form>
    </div></section>`;
  },

  journey() {
    const J = MV.journey;
    return `<section class="split-hero">
      <div class="art sh-art right protect"><img class="art-bg" src="${IMG('pack-ref')}" alt="" draggable="false"><img class="art-main" src="${IMG('pack-ref')}" alt="" draggable="false" style="object-fit:cover;object-position:60% 30%"></div>
      <div class="sh-shade"></div>
      <div class="wrap sh-in"><div class="stack sh-copy">
        <span class="eyebrow rv">${t('journey_k')}</span>
        <h1 class="h1 rv">${Cap(t('journey_h'))}</h1>
        <p class="lede rv">${tx(J.intro)}</p>
      </div></div>
    </section>
    <section class="sec" style="padding-top:clamp(28px,4vw,56px)"><div class="wrap">
      ${Head(t('process'), Cap(t('process_h')), '')}
      <ol class="proc">${J.steps.map(st => `<li class="rv"><b>${tx(st.t)}</b><span>${tx(st.d)}</span></li>`).join('')}</ol>
    </div></section>
    <section class="sec" style="padding-top:0"><div class="wrap">
      ${Head(t('packs_k'), Cap(t('packs_h')), t('packs_p'))}
      <div class="packs protect">${J.packs.map((pk, i) => `<figure class="pk rv ${i % 2 ? 'alt' : ''}">${Frame(`<div class="pk-img"><img src="${IMG(pk.img)}" alt="${tx(pk.title)}" loading="lazy" draggable="false"><i class="shield" aria-hidden="true"></i></div>`, 'rect')}<figcaption><span class="eyebrow">${String(i + 1).padStart(2, '0')}</span><span class="h3">${tx(pk.title)}</span><p class="muted">${tx(pk.note)}</p></figcaption></figure>`).join('')}</div>
    </div></section>
    <section class="sec" style="padding-top:0"><div class="wrap">
      ${Head(t('timeline_k'), Cap(t('timeline_h')), t('timeline_p'))}
      <ol class="tl">${J.timeline.map(it => `<li class="rv">${moonSvg('tl-m')}<div><b>${tx(it.t)}</b><p class="muted">${tx(it.d)}</p></div></li>`).join('')}</ol>
    </div></section>
    ${Extras()}
    ${Manifesto()}`;
  },

  notfound() { return Pages.home(); }
};

function CharInfo(c) {
  const w = byId(MV.worlds, c.world);
  const eps = c.episodes.map(eid => byId(MV.episodes, eid)).filter(Boolean);
  const files = c.files.map(fid => byId(MV.archive, fid)).filter(Boolean);
  const gal = MV.gallery.filter(g => g.char === c.id).slice(0, 4);
  const thumbs = (gal.length ? gal.map(g => g.img) : [c.image, w.image]).concat(MV.characters.filter(o => o.id !== c.id).map(o => o.image)).slice(0, 4);
  return `<span class="eyebrow">${tx(w.name)} · ${tx(w.kind)}</span>
    <h1 class="h1 cw-name">${tx(c.name)}</h1>
    <p class="it">${tx(c.sub)}</p>
    <p class="lede">${tx(c.intro)}</p>
    <div class="tabs" role="tablist">${['about', 'worlds', 'appear', 'gallery'].map((k, i) => `<button type="button" role="tab" data-tab="${k}" aria-selected="${i === 0}">${t('tab_' + k)}</button>`).join('')}</div>
    <div class="tabp" data-p="about"><div class="words-row">${tx(c.words).map(s => `<span>${s}</span>`).join('')}</div><dl class="facts"><div><dt>${t('role')}</dt><dd>${tx(c.role)}</dd></div><div><dt>${t('symbol')}</dt><dd>${tx(c.symbol)}</dd></div></dl><p>${tx(c.look)}</p></div>
    <div class="tabp" data-p="worlds" hidden><p class="h3">${tx(w.name)}</p><p class="muted">${tx(w.text)}</p></div>
    <div class="tabp" data-p="appear" hidden>${eps.length || files.length ? `<div class="mini">${eps.map(e => `<a class="chip" href="#${e.id}">${epNo(e)} · ${tx(e.title)}</a>`).join('')}${files.map(f => `<a class="chip" href="#${f.id}">FILE ${f.no}</a>`).join('')}</div>` : `<p class="muted">${t('not_yet')}</p>`}</div>
    <div class="tabp" data-p="gallery" hidden><a class="link" href="#gallery">${t('s_gallery')} →</a></div>
    <div class="thumbs">${thumbs.map(s => `<img src="${IMG(s)}" alt="" loading="lazy">`).join('')}</div>`;
}

/* ---------- router ---------- */
function resolve(h) {
  if (!h || h === 'home' || h === 'top') return ['home'];
  if (/^ep-\d+$/.test(h)) return ['episode', h];
  if (/^file-\d+$/.test(h)) return ['file', h];
  if (/^mira-[a-z]+$/.test(h)) return ['character', h.slice(5)];
  if (h === 'world') return ['character', 'mira'];
  if (Pages[h] && h !== 'episode' && h !== 'file' && h !== 'character') return [h];
  return null;
}
const TITLES = { journey: 'journey_k', series: 'n_series', archive: 'n_archive', world: 'n_worlds', gallery: 'n_gallery', passport: 'n_passport', studio: 'n_studio', shop: 'n_shop' };
let current = '', firstRender = true;
function render(h, scroll = true) {
  const r = resolve(h) || ['home'];
  current = h;
  app.innerHTML = Pages[r[0]](r[1]);
  document.title = r[0] === 'home' ? 'MINDYVERSE · Another World Awaits.' : `${r[0] === 'episode' ? tx(byId(MV.episodes, r[1]).title) : r[0] === 'file' ? 'FILE ' + byId(MV.archive, r[1]).no : r[0] === 'character' ? tx((byId(MV.characters, r[1]) || MV.characters[0]).name) : t(TITLES[r[0]])} · MINDYVERSE`;
  const navKey = r[0] === 'character' ? 'world' : r[0] === 'episode' ? 'series' : r[0] === 'file' ? 'archive' : r[0];
  document.querySelectorAll('.nav a').forEach(a => a.setAttribute('aria-current', a.getAttribute('href') === '#' + navKey ? 'page' : 'false'));
  if (scroll) scrollTo(0, 0);
  mount(r[0]);
}
function go(h, door) {
  if (h === current) return;
  const run = () => { render(h); };
  if (!door || reduce) { run(); return; }
  const pt = document.getElementById('pt');
  pt.classList.add('close');
  setTimeout(() => { run(); setTimeout(() => pt.classList.remove('close'), 120); }, 600);
}
document.addEventListener('click', e => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  if (a.hasAttribute('data-scroll')) { e.preventDefault(); const el = document.getElementById(a.getAttribute('href').slice(1)); if (el) el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' }); return; }
  const h = a.getAttribute('href').slice(1);
  if (h === 'app') return;
  if (!resolve(h)) return;
  e.preventDefault();
  closeMenu();
  const door = a.hasAttribute('data-door') || (resolve(h)[0] !== resolve(current || 'home')[0]);
  try { history.pushState(null, '', '#' + h); } catch (_) {}
  go(h, door);
});
addEventListener('popstate', () => { const h = location.hash.slice(1); if (resolve(h) || !h) go(h, false); });

/* ---------- per-page behaviour ---------- */
let cleanup = [];
function mount(page) {
  cleanup.forEach(f => f()); cleanup = [];
  reveal();
  if (page === 'home') mountHero();
  if (page === 'archive') mountArchive();
  if (page === 'journey' || page === 'home') protect();
  if (page === 'character' || page === 'world') mountCharacter();
  if (page === 'gallery') mountGallery();
  if (page === 'passport') mountPassport();
  if (page === 'studio') mountForm('cform', 'cnote', 'form_note');
  if (page === 'shop') mountForm('nform', 'nnote', 'notify_note');
  const sh = document.getElementById('share'); if (sh) sh.addEventListener('click', share);
  app.querySelectorAll('[data-locked]').forEach(b => b.addEventListener('click', () => { b.classList.remove('shake'); void b.offsetWidth; b.classList.add('shake'); toast(t('locked_msg')); }));
  if (fine && !reduce) tilt();
}
function reveal() {
  if (reduce || !('IntersectionObserver' in window)) { app.querySelectorAll('.rv').forEach(el => el.classList.add('in')); return; }
  const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }), { threshold: .1, rootMargin: '0px 0px -5% 0px' });
  app.querySelectorAll('.rv').forEach((el, i) => { el.style.transitionDelay = (i % 4) * 90 + 'ms'; io.observe(el); });
  // anything already on screen shows immediately
  requestAnimationFrame(() => app.querySelectorAll('.rv').forEach(el => { if (el.getBoundingClientRect().top < innerHeight) el.classList.add('in'); }));
  cleanup.push(() => io.disconnect());
}
function tilt() {
  const h = e => { const c = e.target.closest('.epc .gf,.fc .gf,.world,.tc .gf'); if (!c) return; const r = c.getBoundingClientRect(), px = (e.clientX - r.left) / r.width - .5, py = (e.clientY - r.top) / r.height - .5; c.style.transform = `perspective(900px) rotateY(${px * 7}deg) rotateX(${-py * 7}deg) translateY(-6px)`; };
  const o = e => { const c = e.target.closest('.epc .gf,.fc .gf,.world,.tc .gf'); if (c && !c.contains(e.relatedTarget)) c.style.transform = ''; };
  app.addEventListener('pointermove', h); app.addEventListener('pointerout', o);
  cleanup.push(() => { app.removeEventListener('pointermove', h); app.removeEventListener('pointerout', o); });
}

/* home hero: letters, parallax, the window frame opens as you scroll */
function mountHero() {
  const hero = document.getElementById('hero'); if (!hero) return;
  const pm = document.getElementById('pmark');
  pm.innerHTML = [...'MINDYVERSE'].map((c, i) => `<span class="ch" aria-hidden="true" style="animation-delay:${(firstRender ? 1.4 : .2) + i * .07}s">${c}</span>`).join('');
  let mx = 0, my = 0, tmx = 0, tmy = 0, raf = 0;
  const art = hero.querySelector('.art-main'), bg = hero.querySelector('.art-bg');
  function frame() {
    const p = Math.min(1, Math.max(0, scrollY / (hero.offsetHeight * .8)));
    hero.style.setProperty('--p', reduce ? 0 : p.toFixed(3));
    mx += (tmx - mx) * .05; my += (tmy - my) * .05;
    if (!reduce) { art.style.translate = `${mx * -18}px ${my * -12 + p * 60}px`; if (bg) bg.style.translate = `${mx * 10}px ${my * 8}px`; }
    raf = requestAnimationFrame(frame);
  }
  const pm2 = e => { tmx = e.clientX / innerWidth - .5; tmy = e.clientY / innerHeight - .5; };
  addEventListener('pointermove', pm2, { passive: true });
  frame();
  cleanup.push(() => { cancelAnimationFrame(raf); removeEventListener('pointermove', pm2); });
}
function protect() {
  app.querySelectorAll('.protect, .jc').forEach(el => {
    el.addEventListener('contextmenu', e => e.preventDefault());
    el.addEventListener('dragstart', e => e.preventDefault());
  });
}
function mountArchive() {
  app.querySelectorAll('[data-ftag]').forEach(b => b.addEventListener('click', () => {
    app.querySelectorAll('[data-ftag]').forEach(o => o.setAttribute('aria-pressed', o === b));
    app.querySelectorAll('#files .fc').forEach(f => { const ok = b.dataset.ftag === 'all' || f.dataset.tags.split(' ').includes(b.dataset.ftag); f.hidden = !ok; if (ok) f.classList.add('in'); });
  }));
}
function mountCharacter() {
  const cw = document.getElementById('cw'); if (!cw) return;
  const tabs = () => cw.querySelectorAll('[data-tab]').forEach(b => b.addEventListener('click', () => {
    cw.querySelectorAll('[data-tab]').forEach(o => o.setAttribute('aria-selected', o === b));
    cw.querySelectorAll('.tabp').forEach(p => { p.hidden = p.dataset.p !== b.dataset.tab; });
  }));
  tabs();
  cw.querySelector('.cw-list').addEventListener('click', e => {
    const a = e.target.closest('[data-cid]'); if (!a) return;
    e.preventDefault(); e.stopPropagation();
    const c = byId(MV.characters, a.dataset.cid); if (!c || cw.dataset.c === c.id) return;
    cw.dataset.c = c.id; current = 'mira-' + c.id;
    try { history.pushState(null, '', '#mira-' + c.id); } catch (_) {}
    cw.querySelectorAll('[data-cid]').forEach(o => o.setAttribute('aria-current', o === a));
    cw.classList.add('swap');
    setTimeout(() => {
      document.getElementById('cwImg').src = IMG(c.image); document.getElementById('cwImg').alt = tx(c.name);
      document.getElementById('cwBg').src = IMG(c.image);
      document.getElementById('cwInfo').innerHTML = CharInfo(c); tabs();
      document.title = tx(c.name) + ' · MINDYVERSE';
      cw.classList.remove('swap');
    }, reduce ? 0 : 450);
  });
}

/* gallery: filters + lightbox */
function mountGallery() {
  const gal = document.getElementById('gal');
  app.querySelectorAll('[data-cat].chip').forEach(b => b.addEventListener('click', () => {
    app.querySelectorAll('.chip[data-cat]').forEach(o => o.setAttribute('aria-pressed', o === b));
    gal.querySelectorAll('.gi').forEach(g => { g.hidden = !(b.dataset.cat === 'all' || g.dataset.cat === b.dataset.cat); if (!g.hidden) g.classList.add('in'); });
  }));
  gal.addEventListener('click', e => { const g = e.target.closest('.gi'); if (g) lightbox(+g.dataset.g); });
}
function lightbox(i) {
  const g = MV.gallery[i], c = g.char && byId(MV.characters, g.char), w = g.world && byId(MV.worlds, g.world);
  const el = document.createElement('div'); el.className = 'lb'; el.setAttribute('role', 'dialog'); el.setAttribute('aria-modal', 'true'); el.setAttribute('aria-label', tx(g.title));
  el.innerHTML = `<div class="lb-img"><img src="${IMG(g.img)}" alt="${tx(g.title)}"></div>
    <div class="lb-side"><span class="eyebrow">${t('cat_' + g.cat)} · ${i + 1} ${t('of')} ${MV.gallery.length}</span><h2 class="h3" style="font-size:34px">${tx(g.title)}</h2>
      ${c || w ? `<div class="stack" style="gap:10px"><span class="eyebrow" style="color:var(--mist-2)">${t('related')}</span><div class="mini">${c ? `<a class="chip" href="#mira-${c.id}">${tx(c.name)}</a>` : ''}${w ? `<span class="chip" style="cursor:default">${tx(w.name)}</span>` : ''}</div></div>` : ''}
      <a class="link" href="#shop">${t('shop_link')} →</a>
      <div class="row"><button class="btn sm" type="button" data-nav="-1">←</button><button class="btn sm" type="button" data-nav="1">→</button></div></div>
    <button class="btn sm lb-x" type="button" data-x>${t('close')} ✕</button>`;
  document.body.appendChild(el); document.body.style.overflow = 'hidden';
  const close = () => { el.remove(); document.body.style.overflow = ''; removeEventListener('keydown', key); };
  const nav = d => { close(); lightbox((i + d + MV.gallery.length) % MV.gallery.length); };
  const key = e => { if (e.key === 'Escape') close(); if (e.key === 'ArrowRight') nav(1); if (e.key === 'ArrowLeft') nav(-1); };
  el.addEventListener('click', e => { if (e.target === el || e.target.closest('[data-x]') || e.target.closest('a')) close(); const n = e.target.closest('[data-nav]'); if (n) nav(+n.dataset.nav); });
  addEventListener('keydown', key);
  el.querySelector('[data-x]').focus();
}

/* dream passport */
function mountPassport() {
  const P = MV.passport, quiz = document.getElementById('quiz'), tarot = document.getElementById('tarot');
  let step = 0, score = {};
  document.getElementById('pstart').addEventListener('click', ask);
  function ask() {
    tarot.classList.remove('done'); tarot.querySelectorAll('.tc').forEach(c => c.classList.remove('win', 'lose'));
    const q = P.questions[step];
    quiz.innerHTML = `<span class="eyebrow">${t('s_passport')}</span>
      <div class="dots">${P.questions.map((_, i) => `<i class="${i <= step ? 'on' : ''}"></i>`).join('')}</div>
      <span class="step">${t('q_of')} ${step + 1} ${t('of')} ${P.questions.length}</span>
      <p class="h3">${tx(q.q)}</p>
      <div class="opts">${q.a.map((a, i) => `<button class="opt" type="button" data-w="${a[2]}"><i>${'ABC'[i]}</i>${tx(a)}</button>`).join('')}</div>`;
    quiz.querySelectorAll('.opt').forEach(b => b.addEventListener('click', () => { score[b.dataset.w] = (score[b.dataset.w] || 0) + 1; step++; step < P.questions.length ? ask() : result(); }));
  }
  function result() {
    const k = Object.keys(P.results).sort((a, b) => (score[b] || 0) - (score[a] || 0))[0], R = P.results[k], w = byId(MV.worlds, R.world);
    tarot.classList.add('done');
    tarot.querySelectorAll('.tc').forEach(c => { c.classList.toggle('win', c.dataset.k === k); c.classList.toggle('lose', c.dataset.k !== k); });
    quiz.innerHTML = `<span class="eyebrow">${t('your_world')}</span><h1 class="h1" style="font-size:clamp(44px,5.6vw,80px)">${Cap(tx(w.name))}</h1><p class="it">${tx(R.line)}</p><p class="lede">${tx(w.text)}</p>
      <div class="row"><button class="btn gold" type="button" id="psave">${t('save')}</button><button class="btn" type="button" id="pagain">${t('again')}</button></div>`;
    document.getElementById('pagain').addEventListener('click', () => { step = 0; score = {}; ask(); });
    document.getElementById('psave').addEventListener('click', () => saveCard(R, w));
  }
}
function saveCard(R, w) {
  const W = 1080, H = 1920, c = document.createElement('canvas'); c.width = W; c.height = H; const g = c.getContext('2d');
  const img = new Image(); img.onload = () => {
    const s = Math.max(W / img.width, H / img.height); g.drawImage(img, (W - img.width * s) / 2, (H - img.height * s) / 2, img.width * s, img.height * s);
    let gr = g.createLinearGradient(0, 0, 0, H); gr.addColorStop(0, 'rgba(12,11,16,.8)'); gr.addColorStop(.3, 'rgba(12,11,16,0)'); gr.addColorStop(.5, 'rgba(12,11,16,0)'); gr.addColorStop(1, 'rgba(12,11,16,.96)'); g.fillStyle = gr; g.fillRect(0, 0, W, H);
    g.strokeStyle = 'rgba(231,206,156,.6)'; g.lineWidth = 3; g.strokeRect(36, 36, W - 72, H - 72);
    g.textAlign = 'center'; g.fillStyle = '#E7CE9C'; g.font = '44px Cinzel, serif'; g.fillText('M I N D Y V E R S E', W / 2, 150);
    g.beginPath(); g.arc(W / 2, 1180, 46, 0, Math.PI * 2); g.fill(); g.globalCompositeOperation = 'destination-out'; g.beginPath(); g.arc(W / 2 + 26, 1164, 40, 0, Math.PI * 2); g.fill(); g.globalCompositeOperation = 'source-over';
    g.fillStyle = '#9D99A8'; g.font = '30px Cinzel, serif'; g.fillText('DREAM PASSPORT', W / 2, 1290);
    g.fillStyle = '#F0E8DA'; g.font = (L === 'zh' ? '600 84px "Noto Serif SC", serif' : '500 104px "Cormorant Garamond", serif'); g.fillText(tx(w.name), W / 2, 1420);
    g.fillStyle = '#CFC6B8'; g.font = (L === 'zh' ? '44px "Noto Serif SC", serif' : 'italic 50px "Cormorant Garamond", serif');
    wrapText(g, tx(R.line), W / 2, 1520, 860, L === 'zh' ? 66 : 64);
    g.fillStyle = '#9D99A8'; g.font = '28px Cinzel, serif'; g.fillText('ANOTHER WORLD AWAITS.', W / 2, H - 110);
    c.toBlob(b => { try { const a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = 'mindyverse-dream-passport.png'; document.body.appendChild(a); a.click(); a.remove(); toast(t('saved_note')); } catch (_) { toast(t('save_fail')); } }, 'image/png');
  };
  img.onerror = () => toast(t('save_fail'));
  img.src = IMG(R.image);
}
function wrapText(g, s, cx, y, maxW, lh) {
  const words = L === 'zh' ? [...s] : s.split(' '); let line = '';
  words.forEach(wd => { const test = line + (L === 'zh' ? '' : line ? ' ' : '') + wd; if (g.measureText(test).width > maxW && line) { g.fillText(line, cx, y); y += lh; line = wd; } else line = test; });
  g.fillText(line, cx, y);
}

/* forms (not connected to a backend yet) */
function mountForm(fid, nid, key) {
  const f = document.getElementById(fid), n = document.getElementById(nid);
  f.addEventListener('submit', e => { e.preventDefault(); n.hidden = false; n.innerHTML = `${t(key)} <a class="link" href="${MV.site.youtube}" target="_blank" rel="noopener">YouTube ↗</a>`; });
}

/* share */
function share() {
  const url = location.href;
  if (navigator.share) { navigator.share({ title: document.title, url }).catch(() => {}); return; }
  try { navigator.clipboard.writeText(url).then(() => toast(t('copied')), () => toast(url)); } catch (_) { toast(url); }
}
let toastT;
function toast(msg) {
  let el = document.querySelector('.toast'); if (!el) { el = document.createElement('div'); el.className = 'toast'; el.setAttribute('role', 'status'); document.body.appendChild(el); }
  el.textContent = msg; el.classList.add('on'); clearTimeout(toastT); toastT = setTimeout(() => el.classList.remove('on'), 2600);
}

/* ---------- header, menu, language ---------- */
const hd = document.getElementById('hd'), menu = document.getElementById('menu'), mb = document.getElementById('menuBtn');
addEventListener('scroll', () => hd.classList.toggle('solid', scrollY > 40), { passive: true });
function closeMenu() { menu.hidden = true; mb.setAttribute('aria-expanded', 'false'); document.body.style.overflow = ''; }
mb.addEventListener('click', () => { const open = menu.hidden; menu.hidden = !open; mb.setAttribute('aria-expanded', open); document.body.style.overflow = open ? 'hidden' : ''; menu.querySelectorAll('a').forEach((a, i) => a.style.setProperty('--i', i)); });
addEventListener('keydown', e => { if (e.key === 'Escape' && !menu.hidden) closeMenu(); });
function setLang(l) {
  L = l; document.documentElement.lang = l === 'zh' ? 'zh' : 'en';
  document.querySelectorAll('[data-t]').forEach(el => { el.textContent = t(el.dataset.t); });
  document.querySelectorAll('.lang button').forEach(b => b.setAttribute('aria-pressed', b.dataset.l === l));
  const S = MV.site;
  document.getElementById('ftLinks').innerHTML = [[t('watch_yt'), S.youtube, 1], ['Instagram', S.instagram], ['TikTok', S.tiktok]].filter(o => o[1]).map(o => `<a class="btn ${o[2] ? 'gold' : ''} sm" href="${o[1]}" target="_blank" rel="noopener">${o[0]}</a>`).join('') + (S.email ? `<span class="chip" style="cursor:text;user-select:all">${S.email}</span>` : '') + `<a class="btn sm" href="${S.portfolio}" target="_blank" rel="noopener">Mindy Chen ↗</a>`;
  try { localStorage.setItem('mv-lang', l); } catch (_) {}
  if (current !== undefined && !firstRender) render(current, false);
}
document.querySelectorAll('.lang button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.l)));

/* ---------- gold dust ---------- */
(function dust() {
  const cv = document.getElementById('dust'), g = cv.getContext('2d'); let W, H, P = [], mx = -999, my = -999;
  function size() { const d = Math.min(devicePixelRatio || 1, 2); W = innerWidth; H = innerHeight; cv.width = W * d; cv.height = H * d; g.setTransform(d, 0, 0, d, 0, 0); P = Array.from({ length: Math.round(W * H / 11000) }, () => ({ x: Math.random() * W, y: Math.random() * H, r: .3 + Math.random() * 1.4, v: .05 + Math.random() * .25, ph: Math.random() * 6.3 })); }
  function tick() { g.clearRect(0, 0, W, H); for (const p of P) { p.ph += .01; p.y -= p.v; p.x += Math.sin(p.ph) * .2; const dx = p.x - mx, dy = p.y - my; if (dx * dx + dy * dy < 12000) { p.x += dx / 60; p.y += dy / 60; } if (p.y < -4) { p.y = H + 4; p.x = Math.random() * W; } const a = .18 + .3 * Math.sin(p.ph * 2); g.fillStyle = `rgba(231,206,156,${Math.max(0, a).toFixed(2)})`; g.beginPath(); g.arc(p.x, p.y, p.r, 0, 7); g.fill(); } requestAnimationFrame(tick); }
  addEventListener('pointermove', e => { mx = e.clientX; my = e.clientY; }, { passive: true });
  addEventListener('resize', size); size(); if (!reduce) tick();
})();

/* ---------- boot ---------- */
setLang(L);
render(location.hash.slice(1) || 'home', false);
firstRender = false;
const loader = document.getElementById('loader');
const done = () => loader.classList.add('done');
if (reduce) done(); else { addEventListener('load', () => setTimeout(done, 900)); setTimeout(done, 2600); }
})();
