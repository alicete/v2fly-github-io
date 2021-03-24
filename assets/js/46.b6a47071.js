(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{424:function(a,t,v){"use strict";v.r(t);var r=v(9),_=Object(r.a)({},(function(){var a=this,t=a.$createElement,v=a._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[v("h1",{attrs:{id:"第三步-开始开发"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第三步-开始开发"}},[a._v("#")]),a._v(" 第三步：开始开发")]),a._v(" "),v("h2",{attrs:{id:"基本"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#基本"}},[a._v("#")]),a._v(" 基本")]),a._v(" "),v("h3",{attrs:{id:"版本控制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#版本控制"}},[a._v("#")]),a._v(" 版本控制")]),a._v(" "),v("p",[a._v("Git")]),a._v(" "),v("h3",{attrs:{id:"分支-branch"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分支-branch"}},[a._v("#")]),a._v(" 分支（Branch）")]),a._v(" "),v("p",[a._v("本项目只使用一个分支，即 master 。所有更改全部提交进 master，并确保 master 在任一时刻都是可编译可使用的。")]),a._v(" "),v("h3",{attrs:{id:"发布-release"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#发布-release"}},[a._v("#")]),a._v(" 发布（Release）")]),a._v(" "),v("p",[a._v("尽量使用自动化工具发布，比如 v2ray-core 使用 GitHub Actions 作为自动编译和发布工具。")]),a._v(" "),v("h3",{attrs:{id:"引用其它项目"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#引用其它项目"}},[a._v("#")]),a._v(" 引用其它项目")]),a._v(" "),v("ul",[v("li",[a._v("Golang\n"),v("ul",[v("li",[a._v("产品代码建议使用 Golang 标准库和 "),v("code",[a._v("golang.org/x/")]),a._v(" 下的库；")]),a._v(" "),v("li",[a._v("如需引用其它项目，请事先创建 issue 讨论；")])])]),a._v(" "),v("li",[a._v("其它\n"),v("ul",[v("li",[a._v("只要不违反双方的协议（本项目为 MIT），且对项目有帮助的工具，都可以使用。")])])])]),a._v(" "),v("h2",{attrs:{id:"开发流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#开发流程"}},[a._v("#")]),a._v(" 开发流程")]),a._v(" "),v("h3",{attrs:{id:"写代码之前"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#写代码之前"}},[a._v("#")]),a._v(" 写代码之前")]),a._v(" "),v("p",[a._v("发现任何问题，或对项目有任何想法，请创建 Issue 讨论以减少重复劳动和消耗在代码上的时间。")]),a._v(" "),v("h3",{attrs:{id:"修改代码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#修改代码"}},[a._v("#")]),a._v(" 修改代码")]),a._v(" "),v("ul",[v("li",[a._v("Golang\n"),v("ul",[v("li",[a._v("请参考 "),v("a",{attrs:{href:"https://golang.org/doc/effective_go.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Effective Go"),v("OutboundLink")],1),a._v("；")]),a._v(" "),v("li",[a._v("每一次 push 之前，请在项目根目录运行："),v("code",[a._v("go generate format.go")]),a._v("；")]),a._v(" "),v("li",[a._v("每一次 push 之前，请确保测试通过："),v("code",[a._v("go test ./...")]),a._v("；")]),a._v(" "),v("li",[a._v("若修改了 proto 文件，则需要重新生成 "),v("code",[a._v("pb.go")]),a._v(" 文件，请在项目根目录运行："),v("code",[a._v("go generate proto.go")]),a._v("；")]),a._v(" "),v("li",[a._v("提交 pull request 之前，请确保新增代码有超过 70% 的代码覆盖率（code coverage）；")])])]),a._v(" "),v("li",[a._v("其它\n"),v("ul",[v("li",[a._v("请注意代码的可读性。")])])])]),a._v(" "),v("h3",{attrs:{id:"pull-request"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#pull-request"}},[a._v("#")]),a._v(" Pull Request")]),a._v(" "),v("ul",[v("li",[a._v("提交 PR 之前，请先运行 "),v("code",[a._v("git pull https://github.com/v2fly/v2ray-core.git")]),a._v(" 以确保 merge 可顺利进行；")]),a._v(" "),v("li",[a._v("一个 PR 只做一件事，如有对多个 bug 的修复，请对每一个 bug 提交一个 PR；")]),a._v(" "),v("li",[a._v("由于 Golang 的特殊需求（Package path），Go 项目的 PR 流程和其它项目有所不同：\n"),v("ol",[v("li",[a._v("先 Fork 本项目，创建自己的 "),v("code",[a._v("github.com/your/v2ray-core")]),a._v(" 仓库；")]),a._v(" "),v("li",[a._v("克隆自己的 v2ray 仓库到本地："),v("code",[a._v("git clone https://github.com/your/v2ray-core.git")]),a._v("；")]),a._v(" "),v("li",[a._v("基于 "),v("code",[a._v("master")]),a._v(" 分支创建新的分支；")]),a._v(" "),v("li",[a._v("在自行创建的分支上作修改并提交修改(commit)；")]),a._v(" "),v("li",[a._v("在推送(push)修改完成的分支到自己的仓库前，先切换到 "),v("code",[a._v("master")]),a._v(" 分支，运行 "),v("code",[a._v("git pull https://github.com/v2fly/v2ray-core.git")]),a._v(" 拉取最新的远端代码；")]),a._v(" "),v("li",[a._v("如果上一步拉取得到了新的远端代码，则切换到之前自己创建的分支，运行 "),v("code",[a._v("git rebase master")]),a._v(" 执行分支合并操作。如遇到文件冲突，则需要解决冲突；")]),a._v(" "),v("li",[a._v("上一步处理完毕后，就可以把自己创建的分支推送到自己的仓库："),v("code",[a._v("git push -u origin your-branch")])]),a._v(" "),v("li",[a._v("最后，把自己仓库的新推送的分支往 "),v("code",[a._v("v2fly/v2ray-core")]),a._v(" 的 "),v("code",[a._v("master")]),a._v(" 分支发 PR 即可；")]),a._v(" "),v("li",[a._v("请在 PR 的标题和正文中，完整表述此次 PR 解决的问题 / 新增的功能 / 代码所做的修改的用意等；")]),a._v(" "),v("li",[a._v("耐心等待开发者的回应。")])])])]),a._v(" "),v("h3",{attrs:{id:"对代码的修改"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#对代码的修改"}},[a._v("#")]),a._v(" 对代码的修改")]),a._v(" "),v("h4",{attrs:{id:"功能性问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#功能性问题"}},[a._v("#")]),a._v(" 功能性问题")]),a._v(" "),v("p",[a._v("请提交至少一个测试用例（Test Case）来验证对现有功能的改动。")]),a._v(" "),v("h4",{attrs:{id:"性能相关"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#性能相关"}},[a._v("#")]),a._v(" 性能相关")]),a._v(" "),v("p",[a._v("请提交必要的测试数据来证明现有代码的性能缺陷，或是新增代码的性能提升。")]),a._v(" "),v("h4",{attrs:{id:"新功能"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#新功能"}},[a._v("#")]),a._v(" 新功能")]),a._v(" "),v("ul",[v("li",[a._v("如果新增功能对已有功能不影响，请提供可以开启/关闭的开关（如 flag），并使新功能保持默认关闭的状态；")]),a._v(" "),v("li",[a._v("大型新功能（比如增加一个新的协议）开发之前，请先提交一个 issue，讨论完毕之后再进行开发。")])]),a._v(" "),v("h4",{attrs:{id:"其它"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#其它"}},[a._v("#")]),a._v(" 其它")]),a._v(" "),v("p",[a._v("视具体情况而定。")]),a._v(" "),v("h2",{attrs:{id:"v2ray-编码规范"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#v2ray-编码规范"}},[a._v("#")]),a._v(" V2Ray 编码规范")]),a._v(" "),v("p",[a._v("以下内容适用于 V2Ray 中的 Golang 代码。")]),a._v(" "),v("h3",{attrs:{id:"代码结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#代码结构"}},[a._v("#")]),a._v(" 代码结构")]),a._v(" "),v("div",{staticClass:"language-bash extra-class"},[v("pre",{pre:!0,attrs:{class:"language-bash"}},[v("code",[a._v("v2ray-core\n├── app        // 应用模块\n│   ├── router // 路由\n├── common     // 公用代码\n├── proxy      // 通讯协议\n│   ├── blackhole\n│   ├── dokodemo-door\n│   ├── freedom\n│   ├── socks\n│   ├── vmess\n├── transport  // 传输模块\n")])])]),v("h3",{attrs:{id:"编码规范"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#编码规范"}},[a._v("#")]),a._v(" 编码规范")]),a._v(" "),v("p",[a._v("基本与 Golang 官方所推荐做法一致，有一些例外。写在这里以方便大家熟悉 Golang。")]),a._v(" "),v("h4",{attrs:{id:"命名"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#命名"}},[a._v("#")]),a._v(" 命名")]),a._v(" "),v("ul",[v("li",[a._v("文件和目录名尽量使用单个英文单词，比如 hello.go；\n"),v("ul",[v("li",[a._v("如果实在没办法，则目录使用连接线／文件名使用下划线连接两个（或多个单词），比如 hello-world/hello_again.go；")]),a._v(" "),v("li",[a._v("测试代码使用 _test.go 结尾；")])])]),a._v(" "),v("li",[a._v("类型使用 Pascal 命名法，比如 ConnectionHandler；\n"),v("ul",[v("li",[a._v("对缩写不强制小写，即 HTML 不必写成 Html；")])])]),a._v(" "),v("li",[a._v("公开成员变量也使用 Pascal 命名法；")]),a._v(" "),v("li",[a._v("私有成员变量使用 "),v("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E9%A7%9D%E5%B3%B0%E5%BC%8F%E5%A4%A7%E5%B0%8F%E5%AF%AB",target:"_blank",rel:"noopener noreferrer"}},[a._v("小驼峰式命名法"),v("OutboundLink")],1),a._v(" ，如 "),v("code",[a._v("privateAttribute")]),a._v(" ；")]),a._v(" "),v("li",[a._v("为了方便重构，方法建议全部使用 Pascal 命名法；\n"),v("ul",[v("li",[a._v("完全私有的类型放入 "),v("code",[a._v("internal")]),a._v(" 。")])])])]),a._v(" "),v("h4",{attrs:{id:"内容组织"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#内容组织"}},[a._v("#")]),a._v(" 内容组织")]),a._v(" "),v("ul",[v("li",[a._v("一个文件包含一个主要类型，及其相关的私有函数等；")]),a._v(" "),v("li",[a._v("测试相关的文件，如 Mock 等工具类，放入 testing 子目录。")])])])}),[],!1,null,null,null);t.default=_.exports}}]);