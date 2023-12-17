import imgGitHubTheme from "./assets/posts/applying-github-dark-theme.png"
import imgMonzo from "./assets/posts/automating-simple-personal-finance.png"
import imgHiking from "./assets/posts/hiking-bobotov-kuk.png"
import imgNowSummer2022 from "./assets/posts/now-summer-autumn.png"
import postGitHubTheme from "./posts/applying-github-dark-theme-miniflux-gpt.md"
import postMonzo from "./posts/automating-simple-personal-finance-system-with-monzo.md"
import postHiking from "./posts/hiking-bobotov-kuk-sedlo-zabljak-gpx.md"
import postNowSummer2022 from "./posts/now/summer-autumn-2022.md"

const posts = [
  {
    title: "Hiking Bobotov Kuk - Sedlo to Žabljak GPX Routes",
    date: "26 Aug 2023",
    path: "/hiking-bobotov-kuk-sedlo-zabljak-gpx",
    content: postHiking,
    imageUrl: imgHiking,
  },
  {
    title: "Automating a Simple Personal Finance System with Monzo",
    date: "16 May 2023",
    path: "/automating-simple-personal-finance-system-with-monzo",
    content: postMonzo,
    imageUrl: imgMonzo,
  },
  {
    title: "Applying the GitHub Dark Theme to Miniflux with GPT",
    date: "6 May 2023",
    path: "/applying-github-dark-theme-miniflux-gpt",
    content: postGitHubTheme,
    imageUrl: imgGitHubTheme,
  },
  {
    title: "Now - Summer / Autumn 2022",
    date: "30 Nov 2022",
    path: "/now/summer-autumn-2022",
    content: postNowSummer2022,
    imageUrl: imgNowSummer2022,
  },
]

export default posts
