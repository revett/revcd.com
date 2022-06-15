# revcd.com

👋 Website

## Development

### Development Server

```
./node_modules/.bin/parcel src/index.html -p 80
```

> I usually run it within a local Node container, see
> [`container-node`](https://github.com/revett/dotfiles/blob/main/.aliases).

### Compile CSS

[TailwindCSS](https://tailwindcss.com) is compiled using
[PostCSS](https://postcss.org) during the [ParcelJS](https://parceljs.org) build
process.
