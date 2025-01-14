(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{398:function(n,e,t){"use strict";t.r(e);var r=t(0),a=Object(r.a)({},(function(){var n=this,e=n._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h2",{attrs:{id:"背景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[n._v("#")]),n._v(" 背景")]),n._v(" "),e("p",[n._v("官网文档给出了 pnpm 的三大优势[1]：")]),n._v(" "),e("ol",[e("li",[n._v("节省磁盘空间。")]),n._v(" "),e("li",[n._v("提高安装速度。")]),n._v(" "),e("li",[n._v("创建一个非扁平的 node_modules 目录")])]),n._v(" "),e("p",[n._v("这里不对第三点展开讨论，主要是看中 pnpm 的第一、二点特性。在实际开发中，经常存在多个 Node 项目需要复用依赖的情况，npm 一直没有给出优雅的解决方式。空间的浪费，对于丐版的 MAC 就有些捉襟见肘了。另一痛点是npm 的下载速度感人，经常出去兜个圈，它还在下载中。")]),n._v(" "),e("p",[n._v("pnpm 给出的解决方案是通过软链接与硬链接[2]的方式将不同项目的同个文件串联起来，从而能够提高效率。相较于 yarn 有巨大提升，如果 yarn 对比 npm 是 minor 级别的提升，那 pnpm 的特性，算得上 major 级别的更新了[3]。")]),n._v(" "),e("h2",{attrs:{id:"安装方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装方式"}},[n._v("#")]),n._v(" 安装方式")]),n._v(" "),e("ol",[e("li",[n._v("安装 pnpm")])]),n._v(" "),e("blockquote",[e("p",[n._v("这里借助了 brew， 官网提供了多样的安装模式。（pnpm 提供了管理 Node 版本的能力，有兴趣的小伙伴，可以不借助 npm，独立安装 pnpm ）")])]),n._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[n._v("brew "),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("install")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("pnpm")]),n._v("\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[n._v("设置命令自动补全")])]),n._v(" "),e("blockquote",[e("p",[n._v("若不喜欢 tab 补全可以跳过这一步")])]),n._v(" "),e("p",[n._v("指定 shell 安装补全命令，成功后重启 shell")]),n._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 输入该命令后选择对应的 shell")]),n._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("pnpm")]),n._v(" install-completion\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 或者 追加 shell 为参数")]),n._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("pnpm")]),n._v(" install-completion "),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("zsh")]),n._v("\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br")])]),e("ol",{attrs:{start:"3"}},[e("li",[n._v("配置 .npmrc\n在 MAC OS 下，默认不会采用硬链接的方式进行文件安装[5]，所以需要指定安装模式。\n在 .npmrc 中，追加配置  package-import-method [6]")])]),n._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# .npmrc")]),n._v("\npackage-import-method"),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v("hardlink\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br")])]),e("h2",{attrs:{id:"faq"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[n._v("#")]),n._v(" FAQ")]),n._v(" "),e("h3",{attrs:{id:"pnpm-缩减了多少空间"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pnpm-缩减了多少空间"}},[n._v("#")]),n._v(" pnpm  缩减了多少空间？")]),n._v(" "),e("p",[n._v("单一项目:\nCourse (467.7 MB) => Course(400.0 MB)"),e("br"),n._v("\n多项目:\nProject (12GB) => Project (4.9G)\n磁盘可用空间:\nHD(97.51) => HD(120.34)    Tips:（这里测量有误差，因为后续有对磁盘存储优化，可以自己测量一下）")]),n._v(" "),e("p",[n._v("当某个包在项目里取消依赖了，全局的包怎么释放？\n这里分为两种情况讨论：")]),n._v(" "),e("ol",[e("li",[n._v("仅有当前项目引用该包。")]),n._v(" "),e("li",[n._v("删除本地包pnpm remove "),e("package",{attrs:{name:""}})],1),n._v(" "),e("li",[n._v("删除 .pnpm 中的包 pnpm prune")]),n._v(" "),e("li",[n._v("删除仓库中未引用的包 pnpm store prune [7]。")]),n._v(" "),e("li",[n._v("有多个项目引用该包。\n上述命令不会影响该包，若是手动删除引用，也不会影响到其它项目的引用（硬链接概念）。")])]),n._v(" "),e("h2",{attrs:{id:"相关链接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#相关链接"}},[n._v("#")]),n._v(" 相关链接")]),n._v(" "),e("blockquote",[e("p",[n._v("吐槽一句 ， pnpm 的 中文文档很友好，对比 npm 好多了。")])]),n._v(" "),e("h3",{attrs:{id:"引用链接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#引用链接"}},[n._v("#")]),n._v(" 引用链接")]),n._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"https://pnpm.io/zh/motivation",target:"_blank",rel:"noopener noreferrer"}},[n._v("项目初衷 | pnpm"),e("OutboundLink")],1)]),n._v(" "),e("li",[e("a",{attrs:{href:"https://www.runoob.com/note/29134",target:"_blank",rel:"noopener noreferrer"}},[n._v("Linux 硬链接与软链接"),e("OutboundLink")],1)]),n._v(" "),e("li",[e("a",{attrs:{href:"https://www.kochan.io/nodejs/why-should-we-use-pnpm.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("Why should we use pnpm"),e("OutboundLink")],1)]),n._v(" "),e("li",[e("a",{attrs:{href:"https://pnpm.io/zh/installation",target:"_blank",rel:"noopener noreferrer"}},[n._v("安装 | pnpm"),e("OutboundLink")],1)]),n._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/pnpm/pnpm/issues/6880",target:"_blank",rel:"noopener noreferrer"}},[n._v("Running out of disk space on macos"),e("OutboundLink")],1)]),n._v(" "),e("li",[e("a",{attrs:{href:"https://pnpm.io/zh/npmrc#package-import-method",target:"_blank",rel:"noopener noreferrer"}},[n._v("package-import-method | pnpm"),e("OutboundLink")],1)]),n._v(" "),e("li",[e("a",{attrs:{href:"https://pnpm.io/zh/cli/store#prune",target:"_blank",rel:"noopener noreferrer"}},[n._v("pnpm store | pnpm"),e("OutboundLink")],1)])]),n._v(" "),e("h3",{attrs:{id:"好文推荐"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#好文推荐"}},[n._v("#")]),n._v(" 好文推荐")]),n._v(" "),e("p",[e("a",{attrs:{href:"https://juejin.cn/post/7242677017035751483",target:"_blank",rel:"noopener noreferrer"}},[n._v("pnpm store的文件保存结构 - 掘金 (juejin.cn)"),e("OutboundLink")],1)]),n._v(" "),e("p",[e("a",{attrs:{href:"https://base64.guru/converter/decode/hex",target:"_blank",rel:"noopener noreferrer"}},[n._v("Base64 to Hex | Base64 Decode | Base64 Converter | Base64"),e("OutboundLink")],1)]),n._v(" "),e("p",[e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/546400909",target:"_blank",rel:"noopener noreferrer"}},[n._v("新一代包管理工具 pnpm 使用心得 - 知乎 (zhihu.com)"),e("OutboundLink")],1)]),n._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/pnpm/pnpm/issues/794",target:"_blank",rel:"noopener noreferrer"}},[n._v("pnpm always links to local /node_modules/.registry.npmjs.org/ folder; ignores store-path config · Issue #794 · pnpm/pnpm (github.com)"),e("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=a.exports}}]);