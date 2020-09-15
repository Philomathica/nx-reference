const isProd =
  process.argv.includes('--prod') ||
  process.argv.includes('-c=production') ||
  process.argv.includes('--c=production') ||
  process.argv.includes('--configuration=production') ||
  process.argv.some((x) => x.includes(':production'));

if (isProd) {
  process.env['NODE_ENV'] = 'production';
}

module.exports = (config) => {
  config.module.rules.push({
    test: /\.scss$/,
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        ident: 'postcss',
        syntax: 'postcss-scss',
        plugins: ['postcss-import', 'tailwindcss', 'autoprefixer'],
      },
    },
  });

  return config;
};
