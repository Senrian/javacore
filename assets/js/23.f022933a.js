(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{254:function(a,t,s){"use strict";s.r(t);var e=s(11),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"java-开发环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java-开发环境"}},[a._v("#")]),a._v(" Java 开发环境")]),a._v(" "),s("blockquote",[s("p",[a._v("📌 "),s("strong",[a._v("关键词：")]),a._v(" JAVA_HOME、CLASSPATH、Path、环境变量、IDE")])]),a._v(" "),s("h2",{attrs:{id:"下载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载"}},[a._v("#")]),a._v(" 下载")]),a._v(" "),s("p",[a._v("进入 "),s("a",{attrs:{href:"http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("JDK 官方下载地址"),s("OutboundLink")],1),a._v(" ，根据自己的环境选择下载所需版本。")]),a._v(" "),s("h2",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),s("p",[a._v("windows 环境的 jdk 包是 exe 安装文件，启动后根据安装向导安装即可。")]),a._v(" "),s("p",[a._v("Linux 环境的 jdk 包，解压到本地即可。")]),a._v(" "),s("h2",{attrs:{id:"环境变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境变量"}},[a._v("#")]),a._v(" 环境变量")]),a._v(" "),s("h3",{attrs:{id:"windows"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[a._v("#")]),a._v(" Windows")]),a._v(" "),s("p",[a._v("计算机 > 属性 > 高级系统设置 > 环境变量")]),a._v(" "),s("p",[a._v("添加以下环境变量：")]),a._v(" "),s("p",[s("code",[a._v("JAVA_HOME")]),a._v("："),s("code",[a._v("C:\\Program Files (x86)\\Java\\jdk1.8.0_91")]),a._v(" （根据自己的实际路径配置）")]),a._v(" "),s("p",[s("code",[a._v("CLASSPATH")]),a._v("："),s("code",[a._v(".;%JAVA_HOME%\\lib\\dt.jar;%JAVA_HOME%\\lib\\tools.jar;")]),a._v(' （注意前面有个"."）')]),a._v(" "),s("p",[s("code",[a._v("Path")]),a._v("："),s("code",[a._v("%JAVA_HOME%\\bin;%JAVA_HOME%\\jre\\bin;")])]),a._v(" "),s("h3",{attrs:{id:"linux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[a._v("#")]),a._v(" Linux")]),a._v(" "),s("p",[a._v("执行 "),s("code",[a._v("vi /etc/profile")]),a._v(" ，编辑环境变量文件")]),a._v(" "),s("p",[a._v("添加两行：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("JAVA_HOME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("path/to/java\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")])]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("JAVA_HOME/bin:JAVA_HOME/jre/bin:\n")])])]),s("p",[a._v("执行 "),s("code",[a._v("source /etc/profile")]),a._v(" ，立即生效。")]),a._v(" "),s("h2",{attrs:{id:"测试安装成功"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#测试安装成功"}},[a._v("#")]),a._v(" 测试安装成功")]),a._v(" "),s("p",[a._v("执行命令 "),s("code",[a._v("java -version")]),a._v(" ，如果安装成功，会打印当前 java 的版本信息。")]),a._v(" "),s("h2",{attrs:{id:"开发工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发工具"}},[a._v("#")]),a._v(" 开发工具")]),a._v(" "),s("p",[a._v("工欲善其事，必先利其器。编写 Java 程序，当然有必要选择一个合适的 IDE。")]),a._v(" "),s("p",[a._v("IDE（Integrated Development Environment，即集成开发环境）是用于提供程序开发环境的应用程序，一般包括代码编辑器、编译器、调试器和图形用户界面等工具。")]),a._v(" "),s("p",[a._v("常见的 Java IDE 如下：")]),a._v(" "),s("ul",[s("li",[a._v("Eclipse - 一个开放源代码的、基于 Java 的可扩展开发平台。")]),a._v(" "),s("li",[a._v("NetBeans - 开放源码的 Java 集成开发环境，适用于各种客户机和 Web 应用。")]),a._v(" "),s("li",[a._v("IntelliJ IDEA - 在代码自动提示、代码分析等方面的具有很好的功能。")]),a._v(" "),s("li",[a._v("MyEclipse - 由 Genuitec 公司开发的一款商业化软件，是应用比较广泛的 Java 应用程序集成开发环境。")]),a._v(" "),s("li",[a._v("EditPlus - 如果正确配置 Java 的编译器“Javac”以及解释器“Java”后，可直接使用 EditPlus 编译执行 Java 程序。")])]),a._v(" "),s("h2",{attrs:{id:"第一个程序：hello-world"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第一个程序：hello-world"}},[a._v("#")]),a._v(" 第一个程序：Hello World")]),a._v(" "),s("p",[a._v("添加 HelloWorld.java 文件，内容如下：")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("HelloWorld")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Hello World"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("执行后，控制台输出：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Hello World\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);