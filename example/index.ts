import BoomJS from '../src/index';
function example() {
  document.body.innerHTML = `
  <div id="head_wrapper" class="head_wrapper s-isindex-wrap nologin"><div class="s_form s_form_nologin"><div class="s_form_wrapper soutu-env-mac soutu-env-index"><style>.index-logo-srcnew,.index-logo-peak {display: none;}@media (-webkit-min-device-pixel-ratio: 2),(min--moz-device-pixel-ratio: 2),(-o-min-device-pixel-ratio: 2),(min-device-pixel-ratio: 2){.index-logo-src {display: none;}.index-logo-srcnew {display: inline;}}</style><div id="lg" class="s-p-top"><img hidefocus="true" id="s_lg_img" class="index-logo-src" src="//www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png" width="270" height="129" onerror="this.src='//www.baidu.com/img/flexible/logo/pc/index.png';this.onerror=null;" usemap="#mp"><img hidefocus="true" id="s_lg_img_new" class="index-logo-srcnew" src="//www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png" width="270" height="129" onerror="this.src='//www.baidu.com/img/flexible/logo/pc/index@2.png';this.onerror=null;" usemap="#mp"><map name="mp"><area style="outline:none;" hidefocus="true" shape="rect" coords="0,0,270,129" href="//www.baidu.com/s?wd=%E4%BB%8A%E6%97%A5%E6%96%B0%E9%B2%9C%E4%BA%8B&amp;tn=SE_PclogoS_8whnvm25&amp;sa=ire_dl_gh_logo&amp;rsv_dl=igh_logo_pcs" onmousedown="return ns_c({fm: 'tab', tab: 'felogo', rsv_platform: 'wwwhome' })" target="_blank" title="点击一下，了解更多"></map></div><a href="/" id="result_logo" onmousedown="return c({'fm':'tab','tab':'logo'})"><img class="index-logo-src" src="//www.baidu.com/img/flexible/logo/pc/result.png" alt="到百度首页" title="到百度首页"><img class="index-logo-srcnew" src="//www.baidu.com/img/flexible/logo/pc/result@2.png" alt="到百度首页" title="到百度首页"><img class="index-logo-peak" src="//www.baidu.com/img/flexible/logo/pc/peak-result.png" alt="到百度首页" title="到百度首页"></a><form id="form" name="f" action="/s" class="fm"><input type="hidden" name="ie" value="utf-8"><input type="hidden" name="f" value="8"><input type="hidden" name="rsv_bp" value="1"><input type="hidden" name="rsv_idx" value="1"><input type="hidden" name="ch" value=""><input type="hidden" name="tn" value="baidu"><input type="hidden" name="bar" value=""><span class="bg s_ipt_wr quickdelete-wrap"><span class="ipt_rec" style="display: block;"></span><span class="soutu-btn"></span><input id="kw" name="wd" class="s_ipt" value="" maxlength="255" autocomplete="off"><a href="javascript:;" id="quickdelete" title="清空" class="quickdelete" style="top: 0px; right: 0px; display: none;"></a><span class="soutu-hover-tip" style="display: none;">按图片搜索</span><span class="voice-hover" style="display: none;">按语音搜索</span></span><span class="bg s_btn_wr"><input type="submit" id="su" value="百度一下" class="bg s_btn"></span><span class="tools"><span id="mHolder"><div id="mCon"><span>输入法</span></div><ul id="mMenu"><li><a href="javascript:;" name="ime_hw">手写</a></li><li><a href="javascript:;" name="ime_py">拼音</a></li><li class="ln"></li><li><a href="javascript:;" name="ime_cl">关闭</a></li></ul></span></span><input type="hidden" name="rn" value=""><input type="hidden" name="fenlei" value="256"><input type="hidden" name="oq" value=""><input type="hidden" name="rsv_pq" value="f9a57d98000b518a"><input type="hidden" name="rsv_t" value="cc08dd3jk51ANT1RJovF8gARUbqwfSGr4RXz17Emu7rn0I1lx0T0l0gFvW0"><input type="hidden" name="rqlang" value="cn"><input type="hidden" name="rsv_enter" value="1"><input type="hidden" name="rsv_dl" value="ib"></form><div id="m" class="under-tips s_lm_hide "><div id="lm-new"></div></div><textarea id="hotsearch_data" style="display:none;">{"hotsearch":[{"pure_title": "钟南山:新冠病毒出现环境传人","linkurl": "https%3A//www.baidu.com/s%3Fcl%3D3%26tn%3Dbaidutop10%26fr%3Dtop1000%26wd%3D%25E9%2592%259F%25E5%258D%2597%25E5%25B1%25B1%253A%25E6%2596%25B0%25E5%2586%25A0%25E7%2597%2585%25E6%25AF%2592%25E5%2587%25BA%25E7%258E%25B0%25E7%258E%25AF%25E5%25A2%2583%25E4%25BC%25A0%25E4%25BA%25BA%26rsv_idx%3D2%26rsv_dl%3Dfyb_n_homepage%26hisfilter%3D1","views": "","isViewed": "","isNew": "","heat_score": "4780402","hotTags": "3"},{"pure_title": "月壤开箱视频来了","linkurl": "https%3A//www.baidu.com/s%3Fcl%3D3%26tn%3Dbaidutop10%26fr%3Dtop1000%26wd%3D%25E6%259C%2588%25E5%25A3%25A4%25E5%25BC%2580%25E7%25AE%25B1%25E8%25A7%2586%25E9%25A2%2591%25E6%259D%25A5%25E4%25BA%2586%26rsv_idx%3D2%26rsv_dl%3Dfyb_n_homepage%26hisfilter%3D1","views": "","isViewed": "","isNew": "","heat_score": "4613088","hotTags": "1"},{"pure_title": "打了新冠疫苗后还要不要戴口罩","linkurl": "https%3A//www.baidu.com/s%3Fcl%3D3%26tn%3Dbaidutop10%26fr%3Dtop1000%26wd%3D%25E6%2589%2593%25E4%25BA%2586%25E6%2596%25B0%25E5%2586%25A0%25E7%2596%25AB%25E8%258B%2597%25E5%2590%258E%25E8%25BF%2598%25E8%25A6%2581%25E4%25B8%258D%25E8%25A6%2581%25E6%2588%25B4%25E5%258F%25A3%25E7%25BD%25A9%26rsv_idx%3D2%26rsv_dl%3Dfyb_n_homepage%26hisfilter%3D1","views": "","isViewed": "","isNew": "","heat_score": "4451630","hotTags": "3"},{"pure_title": "美制裁77个实体 涉中国高校企业","linkurl": "https%3A//www.baidu.com/s%3Fcl%3D3%26tn%3Dbaidutop10%26fr%3Dtop1000%26wd%3D%25E7%25BE%258E%25E5%2588%25B6%25E8%25A3%258177%25E4%25B8%25AA%25E5%25AE%259E%25E4%25BD%2593%2B%25E6%25B6%2589%25E4%25B8%25AD%25E5%259B%25BD%25E9%25AB%2598%25E6%25A0%25A1%25E4%25BC%2581%25E4%25B8%259A%26rsv_idx%3D2%26rsv_dl%3Dfyb_n_homepage%26hisfilter%3D1","views": "","isViewed": "","isNew": "","heat_score": "4295823","hotTags": "0"},{"pure_title": "转存！新冠疫苗去哪接种?","linkurl": "https%3A//www.baidu.com/s%3Fcl%3D3%26tn%3Dbaidutop10%26fr%3Dtop1000%26wd%3D%25E8%25BD%25AC%25E5%25AD%2598%2521%25E6%2596%25B0%25E5%2586%25A0%25E7%2596%25AB%25E8%258B%2597%25E5%258E%25BB%25E5%2593%25AA%25E6%258E%25A5%25E7%25A7%258D%253F%26rsv_idx%3D2%26rsv_dl%3Dfyb_n_homepage%26hisfilter%3D1","views": "","isViewed": "","isNew": "","heat_score": "4145469","hotTags": "0"},{"pure_title": "31省区市新增17例确诊","linkurl": "https%3A//www.baidu.com/s%3Fcl%3D3%26tn%3Dbaidutop10%26fr%3Dtop1000%26wd%3D31%25E7%259C%2581%25E5%258C%25BA%25E5%25B8%2582%25E6%2596%25B0%25E5%25A2%259E17%25E4%25BE%258B%25E7%25A1%25AE%25E8%25AF%258A%26rsv_idx%3D2%26rsv_dl%3Dfyb_n_homepage%26hisfilter%3D1","views": "","isViewed": "","isNew": "","heat_score": "4000377","hotTags": "0"},{"pure_title": "林志玲自曝正积极备孕","linkurl": "https%3A//www.baidu.com/s%3Fcl%3D3%26tn%3Dbaidutop10%26fr%3Dtop1000%26wd%3D%25E6%259E%2597%25E5%25BF%2597%25E7%258E%25B2%25E7%25A7%25AF%25E6%259E%2581%25E5%25A4%2587%25E5%25AD%2595%26rsv_idx%3D2%26rsv_dl%3Dfyb_n_homepage%26hisfilter%3D1","views": "","isViewed": "","isNew": "","heat_score": "3860364","hotTags": "0"},{"pure_title": "辽宁新增1例本土确诊病例","linkurl": "https%3A//www.baidu.com/s%3Fcl%3D3%26tn%3Dbaidutop10%26fr%3Dtop1000%26wd%3D%25E8%25BE%25BD%25E5%25AE%2581%25E6%2596%25B0%25E5%25A2%259E1%25E4%25BE%258B%25E6%259C%25AC%25E5%259C%259F%25E7%25A1%25AE%25E8%25AF%258A%25E7%2597%2585%25E4%25BE%258B%26rsv_idx%3D2%26rsv_dl%3Dfyb_n_homepage%26hisfilter%3D1","views": "","isViewed": "","isNew": "","heat_score": "3725251","hotTags": "0"},{"pure_title": "王毅谈美制裁中企和个人:不分是非","linkurl": "https%3A//www.baidu.com/s%3Fcl%3D3%26tn%3Dbaidutop10%26fr%3Dtop1000%26wd%3D%25E7%258E%258B%25E6%25AF%2585%25E8%25B0%2588%25E7%25BE%258E%25E5%2588%25B6%25E8%25A3%2581%25E4%25B8%25AD%25E4%25BC%2581%25E5%2592%258C%25E4%25B8%25AA%25E4%25BA%25BA%253A%25E4%25B8%258D%25E5%2588%2586%25E6%2598%25AF%25E9%259D%259E%26rsv_idx%3D2%26rsv_dl%3Dfyb_n_homepage%26hisfilter%3D1","views": "","isViewed": "","isNew": "","heat_score": "3594868","hotTags": "0"},{"pure_title": "哪些人将接种新冠疫苗?官方回应","linkurl": "https%3A//www.baidu.com/s%3Fcl%3D3%26tn%3Dbaidutop10%26fr%3Dtop1000%26wd%3D%25E5%2593%25AA%25E4%25BA%259B%25E4%25BA%25BA%25E5%25B0%2586%25E6%258E%25A5%25E7%25A7%258D%25E6%2596%25B0%25E5%2586%25A0%25E7%2596%25AB%25E8%258B%2597%253F%25E5%25AE%2598%25E6%2596%25B9%25E5%259B%259E%25E5%25BA%2594%26rsv_idx%3D2%26rsv_dl%3Dfyb_n_homepage%26hisfilter%3D1","views": "","isViewed": "","isNew": "","heat_score": "3469047","hotTags": "3"},{"pure_title": "嫦娥五号任务月球样品正式交接","linkurl": "https%3A//www.baidu.com/s%3Fcl%3D3%26tn%3Dbaidutop10%26fr%3Dtop1000%26wd%3D%25E5%25AB%25A6%25E5%25A8%25A5%25E4%25BA%2594%25E5%258F%25B7%25E4%25BB%25BB%25E5%258A%25A1%25E6%259C%2588%25E7%2590%2583%25E6%25A0%25B7%25E5%2593%2581%25E6%25AD%25A3%25E5%25BC%258F%25E4%25BA%25A4%25E6%258E%25A5%26rsv_idx%3D2%26rsv_dl%3Dfyb_n_homepage%26hisfilter%3D1","views": "","isViewed": "","isNew": "","heat_score": "3347631","hotTags": "0"},{"pure_title": "奥巴马2020年度最爱影视","linkurl": "https%3A//www.baidu.com/s%3Fcl%3D3%26tn%3Dbaidutop10%26fr%3Dtop1000%26wd%3D%25E5%25A5%25A5%25E5%25B7%25B4%25E9%25A9%25AC2020%25E5%25B9%25B4%25E5%25BA%25A6%25E6%259C%2580%25E7%2588%25B1%25E5%25BD%25B1%25E8%25A7%2586%26rsv_idx%3D2%26rsv_dl%3Dfyb_n_homepage%26hisfilter%3D1","views": "","isViewed": "","isNew": "","heat_score": "3230464","hotTags": "0"},{"pure_title": "暴食催吐管在电商平台公开售卖","linkurl": "https%3A//www.baidu.com/s%3Fcl%3D3%26tn%3Dbaidutop10%26fr%3Dtop1000%26wd%3D%25E6%259A%25B4%25E9%25A3%259F%25E5%2582%25AC%25E5%2590%2590%25E7%25AE%25A1%25E5%259C%25A8%25E7%2594%25B5%25E5%2595%2586%25E5%25B9%25B3%25E5%258F%25B0%25E5%2585%25AC%25E5%25BC%2580%25E5%2594%25AE%25E5%258D%2596%26rsv_idx%3D2%26rsv_dl%3Dfyb_n_homepage%26hisfilter%3D1","views": "","isViewed": "","isNew": "","heat_score": "3117397","hotTags": "0"},{"pure_title": "拜登团队回应五角大楼暂停过渡","linkurl": "https%3A//www.baidu.com/s%3Fcl%3D3%26tn%3Dbaidutop10%26fr%3Dtop1000%26wd%3D%25E6%258B%259C%25E7%2599%25BB%25E5%259B%25A2%25E9%2598%259F%25E5%259B%259E%25E5%25BA%2594%25E4%25BA%2594%25E8%25A7%2592%25E5%25A4%25A7%25E6%25A5%25BC%25E6%259A%2582%25E5%2581%259C%25E8%25BF%2587%25E6%25B8%25A1%26rsv_idx%3D2%26rsv_dl%3Dfyb_n_homepage%26hisfilter%3D1","views": "","isViewed": "","isNew": "","heat_score": "3008288","hotTags": "0"},{"pure_title": "一名韩国新冠病例曾在东莞活动","linkurl": "https%3A//www.baidu.com/s%3Fcl%3D3%26tn%3Dbaidutop10%26fr%3Dtop1000%26wd%3D%25E4%25B8%2580%25E5%2590%258D%25E9%259F%25A9%25E5%259B%25BD%25E6%2596%25B0%25E5%2586%25A0%25E7%2597%2585%25E4%25BE%258B%25E6%259B%25BE%25E5%259C%25A8%25E4%25B8%259C%25E8%258E%259E%25E6%25B4%25BB%25E5%258A%25A8%26rsv_idx%3D2%26rsv_dl%3Dfyb_n_homepage%26hisfilter%3D1","views": "","isViewed": "","isNew": "","heat_score": "2902998","hotTags": "0"},{"pure_title": "东北零下30度吹泡泡瞬间结冰花","linkurl": "https%3A//www.baidu.com/s%3Fcl%3D3%26tn%3Dbaidutop10%26fr%3Dtop1000%26wd%3D%25E4%25B8%259C%25E5%258C%2597%25E9%259B%25B6%25E4%25B8%258B30%25E5%25BA%25A6%25E5%2590%25B9%25E6%25B3%25A1%25E6%25B3%25A1%25E7%259E%25AC%25E9%2597%25B4%25E7%25BB%2593%25E5%2586%25B0%25E8%258A%25B1%26rsv_idx%3D2%26rsv_dl%3Dfyb_n_homepage%26hisfilter%3D1","views": "","isViewed": "","isNew": "","heat_score": "2801393","hotTags": "1"},{"pure_title": "瑞士同性婚姻合法化法案通过","linkurl": "https%3A//www.baidu.com/s%3Fcl%3D3%26tn%3Dbaidutop10%26fr%3Dtop1000%26wd%3D%25E7%2591%259E%25E5%25A3%25AB%25E5%2590%258C%25E6%2580%25A7%25E5%25A9%259A%25E5%25A7%25BB%25E5%2590%2588%25E6%25B3%2595%25E5%258C%2596%25E6%25B3%2595%25E6%25A1%2588%25E9%2580%259A%25E8%25BF%2587%26rsv_idx%3D2%26rsv_dl%3Dfyb_n_homepage%26hisfilter%3D1","views": "","isViewed": "","isNew": "","heat_score": "2703344","hotTags": "1"},{"pure_title": "南非新冠病毒出现变异","linkurl": "https%3A//www.baidu.com/s%3Fcl%3D3%26tn%3Dbaidutop10%26fr%3Dtop1000%26wd%3D%25E5%258D%2597%25E9%259D%259E%25E6%2596%25B0%25E5%2586%25A0%25E7%2597%2585%25E6%25AF%2592%25E5%2587%25BA%25E7%258E%25B0%25E5%258F%2598%25E5%25BC%2582%26rsv_idx%3D2%26rsv_dl%3Dfyb_n_homepage%26hisfilter%3D1","views": "","isViewed": "","isNew": "","heat_score": "2608727","hotTags": "0"},{"pure_title": "黑龙江新增无症状感染者2例","linkurl": "https%3A//www.baidu.com/s%3Fcl%3D3%26tn%3Dbaidutop10%26fr%3Dtop1000%26wd%3D%25E9%25BB%2591%25E9%25BE%2599%25E6%25B1%259F%25E6%2596%25B0%25E5%25A2%259E%25E6%2597%25A0%25E7%2597%2587%25E7%258A%25B6%25E6%2584%259F%25E6%259F%2593%25E8%2580%25852%25E4%25BE%258B%26rsv_idx%3D2%26rsv_dl%3Dfyb_n_homepage%26hisfilter%3D1","views": "","isViewed": "","isNew": "","heat_score": "2517422","hotTags": "0"},{"pure_title": "中国女足年终排名亚洲第三","linkurl": "https%3A//www.baidu.com/s%3Fcl%3D3%26tn%3Dbaidutop10%26fr%3Dtop1000%26wd%3D%25E4%25B8%25AD%25E5%259B%25BD%25E5%25A5%25B3%25E8%25B6%25B3%25E5%25B9%25B4%25E7%25BB%2588%25E6%258E%2592%25E5%2590%258D%25E4%25BA%259A%25E6%25B4%25B2%25E7%25AC%25AC%25E4%25B8%2589%26rsv_idx%3D2%26rsv_dl%3Dfyb_n_homepage%26hisfilter%3D1","views": "","isViewed": "","isNew": "","heat_score": "2429312","hotTags": "0"},{"pure_title": "北京新增2例境外输入关联病例","linkurl": "https%3A//www.baidu.com/s%3Fcl%3D3%26tn%3Dbaidutop10%26fr%3Dtop1000%26wd%3D%25E5%258C%2597%25E4%25BA%25AC%25E6%2596%25B0%25E5%25A2%259E2%25E4%25BE%258B%25E5%25A2%2583%25E5%25A4%2596%25E8%25BE%2593%25E5%2585%25A5%25E7%25A1%25AE%25E8%25AF%258A%25E5%2585%25B3%25E8%2581%2594%25E7%2597%2585%25E4%25BE%258B%26rsv_idx%3D2%26rsv_dl%3Dfyb_n_homepage%26hisfilter%3D1","views": "","isViewed": "","isNew": "","heat_score": "2344286","hotTags": "3"},{"pure_title": "天津女排第13次夺联赛冠军","linkurl": "https%3A//www.baidu.com/s%3Fcl%3D3%26tn%3Dbaidutop10%26fr%3Dtop1000%26wd%3D%25E5%25A4%25A9%25E6%25B4%25A5%25E5%25A5%25B3%25E6%258E%2592%25E7%25AC%25AC13%25E6%25AC%25A1%25E5%25A4%25BA%25E8%2581%2594%25E8%25B5%259B%25E5%2586%25A0%25E5%2586%259B%26rsv_idx%3D2%26rsv_dl%3Dfyb_n_homepage%26hisfilter%3D1","views": "","isViewed": "","isNew": "","heat_score": "2262236","hotTags": "0"},{"pure_title": "东北劳动力平均年龄近40岁","linkurl": "https%3A//www.baidu.com/s%3Fcl%3D3%26tn%3Dbaidutop10%26fr%3Dtop1000%26wd%3D%25E4%25B8%259C%25E5%258C%2597%25E5%258A%25B3%25E5%258A%25A8%25E5%258A%259B%25E5%25B9%25B3%25E5%259D%2587%25E5%25B9%25B4%25E9%25BE%2584%25E8%25BF%259140%25E5%25B2%2581%26rsv_idx%3D2%26rsv_dl%3Dfyb_n_homepage%26hisfilter%3D1","views": "","isViewed": "","isNew": "","heat_score": "2106651","hotTags": "0"},{"pure_title": "收费站10秒KO两男子 当事人道歉","linkurl": "https%3A//www.baidu.com/s%3Fcl%3D3%26tn%3Dbaidutop10%26fr%3Dtop1000%26wd%3D%25E6%2594%25B6%25E8%25B4%25B9%25E7%25AB%259910%25E7%25A7%2592KO%25E4%25B8%25A4%25E7%2594%25B7%25E5%25AD%2590%2B%25E5%25BD%2593%25E4%25BA%258B%25E4%25BA%25BA%25E9%2581%2593%25E6%25AD%2589%26rsv_idx%3D2%26rsv_dl%3Dfyb_n_homepage%26hisfilter%3D1","views": "","isViewed": "","isNew": "","heat_score": "2032918","hotTags": "0"},{"pure_title": "辛选又一网红主播涉虚假宣传被封","linkurl": "https%3A//www.baidu.com/s%3Fcl%3D3%26tn%3Dbaidutop10%26fr%3Dtop1000%26wd%3D%25E8%25BE%259B%25E9%2580%2589%25E5%258F%2588%25E4%25B8%2580%25E7%25BD%2591%25E7%25BA%25A2%25E4%25B8%25BB%25E6%2592%25AD%25E6%25B6%2589%25E8%2599%259A%25E5%2581%2587%25E5%25AE%25A3%25E4%25BC%25A0%25E8%25A2%25AB%25E5%25B0%2581%26rsv_idx%3D2%26rsv_dl%3Dfyb_n_homepage%26hisfilter%3D1","views": "","isViewed": "","isNew": "","heat_score": "1961766","hotTags": "0"},{"pure_title": "本科保姆大材小用?当事学校发声","linkurl": "https%3A//www.baidu.com/s%3Fcl%3D3%26tn%3Dbaidutop10%26fr%3Dtop1000%26wd%3D%25E6%259C%25AC%25E7%25A7%2591%25E4%25BF%259D%25E5%25A7%2586%25E5%25A4%25A7%25E6%259D%2590%25E5%25B0%258F%25E7%2594%25A8%253F%25E5%25BD%2593%25E4%25BA%258B%25E5%25AD%25A6%25E6%25A0%25A1%25E5%258F%2591%25E5%25A3%25B0%26rsv_idx%3D2%26rsv_dl%3Dfyb_n_homepage%26hisfilter%3D1","views": "","isViewed": "","isNew": "","heat_score": "1893104","hotTags": "0"},{"pure_title": "王嘉尔歌词回应夜店传闻","linkurl": "https%3A//www.baidu.com/s%3Fcl%3D3%26tn%3Dbaidutop10%26fr%3Dtop1000%26wd%3D%25E7%258E%258B%25E5%2598%2589%25E5%25B0%2594%25E6%25AD%258C%25E8%25AF%258D%25E5%259B%259E%25E5%25BA%2594%25E5%25A4%259C%25E5%25BA%2597%25E4%25BC%25A0%25E9%2597%25BB%26rsv_idx%3D2%26rsv_dl%3Dfyb_n_homepage%26hisfilter%3D1","views": "","isViewed": "","isNew": "","heat_score": "1826845","hotTags": "0"},{"pure_title": "英国新冠感染率重新升到1以上","linkurl": "https%3A//www.baidu.com/s%3Fcl%3D3%26tn%3Dbaidutop10%26fr%3Dtop1000%26wd%3D%25E8%258B%25B1%25E5%259B%25BD%25E6%2596%25B0%25E5%2586%25A0%25E6%2584%259F%25E6%259F%2593%25E7%258E%2587%25E9%2587%258D%25E6%2596%25B0%25E5%258D%2587%25E5%2588%25B01%25E4%25BB%25A5%25E4%25B8%258A%26rsv_idx%3D2%26rsv_dl%3Dfyb_n_homepage%26hisfilter%3D1","views": "","isViewed": "","isNew": "","heat_score": "1762906","hotTags": "0"},{"pure_title": "法院回应女子忍40年家暴离婚被驳回","linkurl": "https%3A//www.baidu.com/s%3Fcl%3D3%26tn%3Dbaidutop10%26fr%3Dtop1000%26wd%3D%25E6%25B3%2595%25E9%2599%25A2%25E5%259B%259E%25E5%25BA%2594%25E5%25A5%25B3%25E5%25AD%2590%25E5%25BF%258D40%25E5%25B9%25B4%25E5%25AE%25B6%25E6%259A%25B4%25E7%25A6%25BB%25E5%25A9%259A%25E8%25A2%25AB%25E9%25A9%25B3%25E5%259B%259E%26rsv_idx%3D2%26rsv_dl%3Dfyb_n_homepage%26hisfilter%3D1","views": "","isViewed": "","isNew": "","heat_score": "1701204","hotTags": "1"}]}</textarea></div></div></div>
  `;
  const boomjs = new BoomJS();
  const ele: HTMLElement = document.querySelector('#su');
  console.log('ele', ele);
  boomjs.boom(ele);
}
example();