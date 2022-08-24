# revcd.com

Codebase for my personal website.

## Development

### Development Server

Start a local Node container (see [`container-node`](https://github.com/revett/dotfiles/blob/main/.aliases)), then:

```bash
yarn start
```

### Compile CSS

[TailwindCSS](https://github.com/tailwindlabs/tailwindcss) is compiled using
[PostCSS](https://github.com/postcss/postcss) during the
[ParcelJS](https://github.com/parcel-bundler/parcel) build process.

## Technologies

- [ParcelJS](https://github.com/parcel-bundler/parcel) for Javascript
  compilation
- [PostCSS](https://github.com/postcss/postcss) for CSS pre-processing
- [Sharp](https://github.com/lovell/sharp) for image processing
- [TailwindCSS](https://github.com/tailwindlabs/tailwindcss) as the CSS
  framework
- [Vercel](https://github.com/vercel/vercel) for deployment and hosting
