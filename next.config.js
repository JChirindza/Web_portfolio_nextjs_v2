module.exports = {
    reactStrictMode: true,
    webpack: function(config) {
        config.module.rules.push({
            test: /\.md$/,
            use: 'raw-loader',
        })
        return config
    },

    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
}