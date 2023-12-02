---
title: 'Applying the GitHub Dark Theme to Miniflux with GPT'
date: '2023-05-06'
# TODO: cover
---

I use the [GitHub dark theme](https://github.com/vv9k/vim-github-dark) for both my
[VS Code](https://marketplace.visualstudio.com/items?itemName=GitHub.github-vscode-theme) and
terminal setup, and wanted to experiment with applying the theme to my self-hosted
[Miniflux](https://github.com/miniflux/v2) app as I find the default colour scheme quite dull and
poor for readability; plus consistency is key of course.

[Miniflux](https://github.com/miniflux/v2) offers a primitive CSS override via the settings page, so
the goals for this experiment were:

1. Find the GitHub dark theme colour palette
2. Find the [Miniflux](https://github.com/miniflux/v2) theme CSS custom properties
3. Craft an [OpenAI GPT prompt](https://platform.openai.com/docs/introduction) using the
   `v3.5-turbo` and apply it
4. Write no actual CSS

<!-- TODO: Turn quotes in to Notion callouts. -->

> ℹ️ [Miniflux](https://github.com/miniflux/v2) is a “minimalist and opinionated feed reader” mainly
> used for RSS that you can self-host.

## Screenshots

### Before

![Untitled](Applying%20the%20GitHub%20Dark%20Theme%20to%20Miniflux%20with%20GP%200c61e65b8a8b43c6bbf4e9f0f598ce6a/Untitled.png)

### After

![Untitled](Applying%20the%20GitHub%20Dark%20Theme%20to%20Miniflux%20with%20GP%200c61e65b8a8b43c6bbf4e9f0f598ce6a/Untitled%201.png)

## Generating

Finding a full colour palette for the theme was tricky, however I found the best to be from the
[vv9k/vim-github-dark](https://github.com/vv9k/vim-github-dark) repo (see `ghdark.vim`). This gave
us 10 colours for inspiration:

```
base0:      #0d1117
base1:      #161b22
base2:      #21262d
base3:      #89929b
base4:      #c6cdd5
base5:      #ecf2f8
red:        #fa7970
orange:     #faa356
green:      #7ce38b
lightblue:  #a2d2fb
blue:       #77bdfb
purple:     #cea5fb
```

![Untitled](Applying%20the%20GitHub%20Dark%20Theme%20to%20Miniflux%20with%20GP%200c61e65b8a8b43c6bbf4e9f0f598ce6a/Untitled%202.png)

The [Miniflux](https://github.com/miniflux/v2) theme CSS custom properties can be found within the
`:root` block of `system.css`. I removed any lines which were not related to colour (to reduce
prompt size), and replaced any existing hex values with `#blank`, as GPT would only change around
10-20% of the theme if existing values were present. This gives us:

```css
:root {
  --body-color: #blank;
  --body-background: #blank;
  --hr-border-color: #blank;
  /* ... */
}
```

When crafting the final prompts, I needed to:

- Split it in two as the CSS code block hit the character limit for `v3.5-turbo`
- Instruct GPT to not include any explanation as it was explaining why each colour was used
- Adjust the theme for links as GPT was using blue for nearly all text values

```
Using this colour palette (GitHub dark theme) as inspiration:

base0: #0d1117
base1: #161b22
base2: #21262d
base3: #89929b
base4: #c6cdd5
base5: #ecf2f8
red: #fa7970
orange: #faa356
green: #7ce38b
light blue: #a2d2fb
blue: #77bdfb
purple: #cea5fb

Amend these CSS values (`#blank`) to create a new theme:

:root {
  --body-color: #blank;
  --body-background: #blank;
  --hr-border-color: #blank;
  /* ... */
}

- Do not use blue for links, use `base5` instead
- Do not include any explanation, just the code block
```

Followed by:

```
Apply the same change to these CSS values (`#blank`) following the
same theme as before:

:root {
  --page-header-title-border-color: #blank;
  --logo-color: #blank;
  --logo-hover-color-span: #blank;
  /* ... */
}
```

## Thoughts

I was impressed by GPT’s ability to generate only using the names of the CSS custom properties,
without any existing colour values. I found the limitations of `v3.5-turbo` the most interesting
part:

- Being unable to return only the diff of the CSS code block
- Wanting to explain why all the changes were made
- Being overly zealous with the colour blue

Overall, applying the theme was a success; I was able to generate a custom theme without writing any
CSS. If you're looking to customize your [Miniflux](https://github.com/miniflux/v2) theme, I highly
recommend giving this method a try.

## Reference

- Amended raw CSS with `#blank`

```css
:root {
  --body-color: #blank;
  --body-background: #blank;
  --hr-border-color: #blank;
  --title-color: #blank;
  --link-color: #blank;
  --link-focus-color: #blank;
  --link-hover-color: #blank;
  --link-visited-color: #blank;
  --header-list-border-color: #blank;
  --header-link-color: #blank;
  --header-link-focus-color: #blank;
  --header-link-hover-color: #blank;
  --header-active-link-color: #blank;
  --table-border-color: #blank;
  --table-th-background: #blank;
  --table-th-color: #blank;
  --table-tr-hover-background-color: #blank;
  --table-tr-hover-color: #blank;
  --button-primary-border-color: #blank;
  --button-primary-background: #blank;
  --button-primary-color: #blank;
  --button-primary-focus-border-color: #blank;
  --button-primary-focus-background: #blank;
  --input-background: #blank;
  --input-color: #blank;
  --input-placeholder-color: #blank;
  --input-focus-color: #blank;
  --input-focus-border-color: #blank;
  --input-focus-box-shadow: #blank;
  --alert-color: #blank;
  --alert-background-color: #blank;
  --alert-border-color: #blank;
  --alert-success-color: #blank;
  --alert-success-background-color: #blank;
  --alert-success-border-color: #blank;
  --alert-error-color: #blank;
  --alert-error-background-color: #blank;
  --alert-error-border-color: #blank;
  --alert-info-color: #blank;
  --alert-info-background-color: #blank;
  --alert-info-border-color: #blank;
  --page-header-title-border-color: #blank;
  --logo-color: #blank;
  --logo-hover-color-span: #blank;
  --panel-background: #blank;
  --panel-border-color: #blank;
  --panel-color: #blank;
  --modal-background: #blank;
  --modal-color: #blank;
  --modal-box-shadow: 2px 0 5px 0 #blank;
  --pagination-link-color: #blank;
  --pagination-border-color: #blank;
  --category-color: #blank;
  --category-background-color: #blank;
  --category-border-color: #blank;
  --category-link-color: #blank;
  --category-link-hover-color: #blank;
  --item-border-color: #blank;
  --item-status-read-title-link-color: #blank;
  --item-status-read-title-focus-color: #blank;
  --item-meta-focus-color: #blank;
  --item-meta-li-color: #blank;
  --current-item-border-color: #blank;
  --entry-header-border-color: #blank;
  --entry-header-title-link-color: #blank;
  --entry-content-color: #blank;
  --entry-content-code-color: #blank;
  --entry-content-code-background: #blank;
  --entry-content-code-border-color: #blank;
  --entry-content-quote-color: #blank;
  --entry-content-abbr-border-color: #blank;
  --entry-enclosure-border-color: #blank;
  --parsing-error-color: #blank;
  --feed-parsing-error-background-color: #blank;
  --feed-parsing-error-border-color: #blank;
  --feed-has-unread-background-color: #blank;
  --feed-has-unread-border-color: #blank;
  --category-has-unread-background-color: #blank;
  --category-has-unread-border-color: #blank;
  --keyboard-shortcuts-li-color: #blank;
  --counter-color: #blank;
}
```

- Final CSS for [Miniflux](https://github.com/miniflux/v2)

```css
.entry-content {
  font-size: 1em;
}

.item {
  border: none;
}

:root {
  --item-status-read-title-link-color: var(--link-color);
}

:root {
  --body-color: #ecf2f8;
  --body-background: #0d1117;
  --hr-border-color: #21262d;
  --title-color: #a2d2fb;
  --link-color: #ecf2f8;
  --link-focus-color: #c6cdd5;
  --link-hover-color: #89929b;
  --link-visited-color: #c6cdd5;
  --header-list-border-color: #21262d;
  --header-link-color: #ecf2f8;
  --header-link-focus-color: #c6cdd5;
  --header-link-hover-color: #89929b;
  --header-active-link-color: #a2d2fb;
  --table-border-color: #21262d;
  --table-th-background: #161b22;
  --table-th-color: #ecf2f8;
  --table-tr-hover-background-color: #21262d;
  --table-tr-hover-color: #ecf2f8;
  --button-primary-border-color: #7ce38b;
  --button-primary-background: #7ce38b;
  --button-primary-color: #0d1117;
  --button-primary-focus-border-color: #21262d;
  --button-primary-focus-background: #21262d;
  --input-background: #161b22;
  --input-color: #ecf2f8;
  --input-placeholder-color: #89929b;
  --input-focus-color: #ecf2f8;
  --input-focus-border-color: #77bdfb;
  --input-focus-box-shadow: 0 0 0 2px #21262d;
  --alert-color: #ecf2f8;
  --alert-background-color: #0d1117;
  --alert-border-color: #21262d;
  --alert-success-color: #ecf2f8;
  --alert-success-background-color: #7ce38b;
  --alert-success-border-color: #21262d;
  --alert-error-color: #ecf2f8;
  --alert-error-background-color: #fa7970;
  --alert-error-border-color: #21262d;
  --alert-info-color: #ecf2f8;
  --alert-info-background-color: #21262d;
  --alert-info-border-color: #21262d;
  --page-header-title-border-color: #21262d;
  --logo-color: #a2d2fb;
  --logo-hover-color-span: #77bdfb;
  --panel-background: #161b22;
  --panel-border-color: #21262d;
  --panel-color: #ecf2f8;
  --modal-background: #0d1117;
  --modal-color: #ecf2f8;
  --modal-box-shadow: 2px 0 5px 0 #21262d;
  --pagination-link-color: #ecf2f8;
  --pagination-border-color: #21262d;
  --category-color: #ecf2f8;
  --category-background-color: #21262d;
  --category-border-color: #21262d;
  --category-link-color: #ecf2f8;
  --category-link-hover-color: #a2d2fb;
  --item-border-color: #21262d;
  --item-status-read-title-link-color: #a2d2fb;
  --item-status-read-title-focus-color: #c6cdd5;
  --item-meta-focus-color: #c6cdd5;
  --item-meta-li-color: #ecf2f8;
  --current-item-border-color: #77bdfb;
  --entry-header-border-color: #21262d;
  --entry-header-title-link-color: #ecf2f8;
  --entry-content-color: #ecf2f8;
  --entry-content-code-color: #a2d2fb;
  --entry-content-code-background: #161b22;
  --entry-content-code-border-color: #21262d;
  --entry-content-quote-color: #c6cdd5;
  --entry-content-abbr-border-color: #21262d;
  --entry-enclosure-border-color: #21262d;
  --parsing-error-color: #ecf2f8;
  --feed-parsing-error-background-color: #fa7970;
  --feed-parsing-error-border-color: #21262d;
  --feed-has-unread-background-color: #7ce38b;
  --feed-has-unread-border-color: #21262d;
  --category-has-unread-background-color: #7ce38b;
  --category-has-unread-border-color: #21262d;
  --keyboard-shortcuts-li-color: #ecf2f8;
  --counter-color: #ecf2f8;
}
```
