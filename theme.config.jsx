export default {
  logo: (
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      <img
        style={{ width: "32px" }}
        src="https://lh3.googleusercontent.com/QYboAltyb8rm_Tavk1gJMQRL20lZcC3fYPsAoIhC7lQXhF6FBQ55l6t8xdztW7WRhjpYCAXdsTxuQx9JRgsKY0HDXgs=w128-h128-e365-rj-sc0x00ffffff"
      />
      <span>Erin</span>
    </div>
  ),
  project: {
    link: "https://github.com/Developer27149/Erin",
  },
  head: (
    <>
      <title>Erin - 极简的 chrome 新标签页插件</title>
      <link
        rel="icon"
        type="image/x-icon"
        href="https://lh3.googleusercontent.com/QYboAltyb8rm_Tavk1gJMQRL20lZcC3fYPsAoIhC7lQXhF6FBQ55l6t8xdztW7WRhjpYCAXdsTxuQx9JRgsKY0HDXgs=w128-h128-e365-rj-sc0x00ffffff"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Erin - 极简的 chrome 新标签页插件" />
      <meta
        property="og:description"
        content="重新定义你的 chrome 新标签页，配合精美的 UI 界面，再集成许多实用的功能"
      />
    </>
  ),
  darkMode: true,
  chat: {
    link: "https://twitter.com/miaocai0",
    icon: (
      <svg width="24" height="24" viewBox="0 0 248 204">
        <path
          fill="currentColor"
          d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07a50.338 50.338 0 0 0 22.8-.87C27.8 117.2 10.85 96.5 10.85 72.46v-.64a50.18 50.18 0 0 0 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71a143.333 143.333 0 0 0 104.08 52.76 50.532 50.532 0 0 1 14.61-48.25c20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26a50.69 50.69 0 0 1-22.2 27.93c10.01-1.18 19.79-3.86 29-7.95a102.594 102.594 0 0 1-25.2 26.16z"
        />
      </svg>
    ),
  },
  banner: {
    key: "0.2.1-release",
    text: (
      <a
        href="https://chrome.google.com/webstore/detail/erin/nobdiagkeelcndaijbdninbmjkdahggd?hl=zh-CN&authuser=0"
        target="_blank"
      >
        🎉 Erin 发布了 v0.2.8 版本，新增每日壁纸尝鲜功能，快来下载安装吧 →
      </a>
    ),
  },
  editLink: {
    component: "",
  },
  feedback: {
    useLink: () => "https://github.com/Developer27149/Erin/issues",
    content: <span>欢迎提出 issue 或建议 →</span>,
  },
};
