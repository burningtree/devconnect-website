/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack: (config, { webpack }) => {
    return {
      ...config,
      plugins: [
        new webpack.DefinePlugin({
          devMode: process.env.NODE_ENV !== 'production',
        }),
        ...config.plugins,
      ],
      module: {
        ...config.module,
        rules: [
          {
            test: /\.svg$/,
            use: ['@svgr/webpack'],
          },
          {
            test: /\.(glsl|vs|fs|vert|frag)$/,
            exclude: /node_modules/,
            use: ['raw-loader', 'glslify-loader'],
          },
          ...config.module.rules,
        ],
      },
    }
  },
}
