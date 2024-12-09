const { withContentlayer } = require('next-contentlayer2')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

// You might need to insert additional domains in script-src if you are using external services
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' giscus.app *.umami.is *.googlesyndication.com *.eleavers.com pagead2.googlesyndication.com www.googletagservices.com ep2.adtrafficquality.google *.google.com;
  style-src 'self' 'unsafe-inline';
  img-src * blob: data: https://googleads.g.doubleclick.net;
  media-src *.s3.amazonaws.com;
  connect-src *;
  font-src 'self';
  frame-src giscus.app *.github.io googleads.g.doubleclick.net *.adtrafficquality.google https://www.google.com;;
`

const securityHeaders = [
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, ''),
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
]

const output = process.env.EXPORT ? 'export' : undefined
const basePath = process.env.BASE_PATH || undefined
const unoptimized = process.env.UNOPTIMIZED ? true : undefined

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
module.exports = () => {
  const plugins = [withContentlayer, withBundleAnalyzer]
  return plugins.reduce((acc, next) => next(acc), {
    output,
    basePath,
    reactStrictMode: true,
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'i.gr-assets.com', // Goodreads book covers
        },
        {
          protocol: 'https',
          hostname: 'i.scdn.co', // Spotify album covers
        },
        {
          protocol: 'https',
          hostname: 'm.media-amazon.com', // IMDB movie posters
        },
      ],
      unoptimized,
    },

    async redirects() {
      return [
        {
          source: '/What-I-achieved-in-2021',
          destination: '/blog/What-I-achieved-in-2021',
          permanent: true,
        },
        {
          source: '/add-free-ssl-in-ec2-instaces',
          destination: '/blog/add-free-ssl-in-ec2-instaces',
          permanent: true,
        },
        {
          source: '/add-ssh-key-in-github-from-linux-windows',
          destination: '/blog/add-ssh-key-in-github-from-linux-windows',
          permanent: true,
        },
        {
          source: '/cant-use-ssh-after-enable-ufu-in-aws-ec2',
          destination: '/blog/cant-use-ssh-after-enable-ufu-in-aws-ec2',
          permanent: true,
        },
        {
          source: '/composer-install-or-update-on-ubuntu-linux',
          destination: '/blog/composer-install-or-update-on-ubuntu-linux',
          permanent: true,
        },
        {
          source: '/how-to-auto-mount-ebs-drive-into-ec2',
          destination: '/blog/how-to-auto-mount-ebs-drive-into-ec2',
          permanent: true,
        },
        {
          source: '/how-to-destroy-dev-career-in-a-short',
          destination: '/blog/how-to-destroy-dev-career-in-a-short',
          permanent: true,
        },
        {
          source: '/how-to-fin-hcf-and-lcm-in-javascript-with-example',
          destination: '/blog/how-to-fin-hcf-and-lcm-in-javascript-with-example',
          permanent: true,
        },
        {
          source: '/how-to-install-ubuntu-firewall-for-spacifi-ip',
          destination: '/blog/how-to-install-ubuntu-firewall-for-spacifi-ip',
          permanent: true,
        },
        {
          source: '/laravel-commad-not-found',
          destination: '/blog/laravel-commad-not-found',
          permanent: true,
        },
        {
          source: '/mongodb-backup-locally-with-telegram-notification',
          destination: '/blog/mongodb-backup-locally-with-telegram-notification',
          permanent: true,
        },
        {
          source: '/playing-with-laravel-array-and-collection',
          destination: '/blog/playing-with-laravel-array-and-collection',
          permanent: true,
        },
        {
          source: '/send-laravel-logs-to-slack-channel',
          destination: '/blog/send-laravel-logs-to-slack-channel',
          permanent: true,
        },
        {
          source: '/set-usa-or-america-timezone-in-laravel',
          destination: '/blog/set-usa-or-america-timezone-in-laravel',
          permanent: true,
        },
        {
          source: '/some-es6-features-example-compare-to-es5',
          destination: '/blog/some-es6-features-example-compare-to-es5',
          permanent: true,
        },
        {
          source: '/some-popular-subdomain-finder-tools-in-linux',
          destination: '/blog/some-popular-subdomain-finder-tools-in-linux',
          permanent: true,
        },
        {
          source: '/sqlstate-hy000-1698-access-denied-for-root-user',
          destination: '/blog/sqlstate-hy000-1698-access-denied-for-root-user',
          permanent: true,
        },
        {
          source: '/sqlstate-hy000-2002-no-such-file-or-directory',
          destination: '/blog/sqlstate-hy000-2002-no-such-file-or-directory',
          permanent: true,
        },
        {
          source: '/ubuntu-create-mysql-backup-and-telegram-notification',
          destination: '/blog/ubuntu-create-mysql-backup-and-telegram-notification',
          permanent: true,
        },
        {
          source: '/vuejs-syllabus-roadmap-for-beginners-to-quick-start',
          destination: '/blog/vuejs-syllabus-roadmap-for-beginners-to-quick-start',
          permanent: true,
        },
        {
          source: '/Pure-function-in-javascript',
          destination: '/blog/javascript-fundamentals/Pure-function-in-javascript',
          permanent: true,
        },
        {
          source: '/what-is-callback-function-in-javascript',
          destination: '/blog/javascript-fundamentals/what-is-callback-function-in-javascript',
          permanent: true,
        },
        {
          source: '/what-is-javascript-closure',
          destination: '/blog/javascript-fundamentals/what-is-javascript-closure',
          permanent: true,
        },
        {
          source: '/what-is-javascript-hoisting',
          destination: '/blog/javascript-fundamentals/what-is-javascript-hoisting',
          permanent: true,
        },
        {
          source: '/what-is-this-keyword-javascript',
          destination: '/blog/javascript-fundamentals/what-is-this-keyword-javascript',
          permanent: true,
        },
        {
          source: '/best-ways-to-use-clear-cache-command-in-laravel',
          destination: '/blog/laravel/best-ways-to-use-clear-cache-command-in-laravel',
          permanent: true,
        },
        {
          source: '/drag-and-drop-file-upload-via-filepond-in-laravel',
          destination: '/blog/laravel/drag-and-drop-file-upload-via-filepond-in-laravel',
          permanent: true,
        },
        {
          source: '/form-request-has-file-check-in-laravel',
          destination: '/blog/laravel/form-request-has-file-check-in-laravel',
          permanent: true,
        },
        {
          source: '/how-to-get-json-data-from-url-in-laravel',
          destination: '/blog/laravel/how-to-get-json-data-from-url-in-laravel',
          permanent: true,
        },
        {
          source: '/laravel-10-simple-sms-integration-with-twilio',
          destination: '/blog/laravel/laravel-10-simple-sms-integration-with-twilio',
          permanent: true,
        },
        {
          source: '/laravel-eager-loading-lets-supercharge-query-performance',
          destination: '/blog/laravel/laravel-eager-loading-lets-supercharge-query-performance',
          permanent: true,
        },
        {
          source: '/laravel-eloquent-wherein-queries-made-easy',
          destination: '/blog/laravel/laravel-eloquent-wherein-queries-made-easy',
          permanent: true,
        },
        {
          source: '/laravel-fortify-login-url-change',
          destination: '/blog/laravel/laravel-fortify-login-url-change',
          permanent: true,
        },
        {
          source: '/laravel-hashing-encryption-explained-copy',
          destination: '/blog/laravel/laravel-hashing-encryption-explained-copy',
          permanent: true,
        },
        {
          source: '/laravel-zip-file-creating-and-dowload',
          destination: '/blog/laravel/laravel-zip-file-creating-and-dowload',
          permanent: true,
        },
        {
          source:
            '/mastering-laravel-eloquent-comprehensive-guide-withcount-withsum-withavg-withexists-methods',
          destination:
            '/blog/laravel/mastering-laravel-eloquent-comprehensive-guide-withcount-withsum-withavg-withexists-methods',
          permanent: true,
        },
        {
          source: '/remove-last-item-from-laravel-collection-example',
          destination: '/blog/laravel/remove-last-item-from-laravel-collection-example',
          permanent: true,
        },
        {
          source: '/solving-meme-type-issues-in-laravel-livewire-filament-with-nginx-server',
          destination:
            '/blog/laravel/solving-meme-type-issues-in-laravel-livewire-filament-with-nginx-server',
          permanent: true,
        },
        {
          source: '/understanding-the-use-of-laravels-optional-helper-function',
          destination: '/blog/laravel/understanding-the-use-of-laravels-optional-helper-function',
          permanent: true,
        },
        {
          source: '/mongodb-backup-locally-with-telegram-notification',
          destination: '/blog/linux/mongodb-backup-locally-with-telegram-notification',
          permanent: true,
        },
        {
          source: '/nested-route/introducing-multi-part-posts-with-nested-routing',
          destination: '/blog/nested-route/introducing-multi-part-posts-with-nested-routing',
          permanent: true,
        },
      ]
    },
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: securityHeaders,
        },
      ]
    },
    webpack: (config) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgoConfig: {
                plugins: [
                  {
                    name: 'prefixIds',
                    params: {
                      delim: '__',
                      prefixIds: true,
                      prefixClassNames: true,
                    },
                  },
                ],
              },
            },
          },
        ],
      })

      return config
    },
  })
}
