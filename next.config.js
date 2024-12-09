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
          source: '/category/aws', //tags added
          destination: '/tags/aws',
          permanent: true,
        },
        {
          source: '/category/bash',
          destination: '/tags/bash',
          permanent: true,
        },
        {
          source: '/category/blog',
          destination: '/tags/blog',
          permanent: true,
        },
        {
          source: '/category/career',
          destination: '/tags/career',
          permanent: true,
        },
        {
          source: '/category/devops',
          destination: '/tags/devops',
          permanent: true,
        },
        {
          source: '/category/ufw',
          destination: '/tags/ufw',
          permanent: true,
        },
        {
          source: '/category/javascript',
          destination: '/tags/javascript',
          permanent: true,
        },
        {
          source: '/category/laravel',
          destination: '/tags/laravel',
          permanent: true,
        },
        {
          source: '/category/linux',
          destination: '/tags/linux',
          permanent: true,
        },
        {
          source: '/category/yearinreview',
          destination: '/tags/yearinreview',
          permanent: true,
        },
        {
          source: '/category/mysql',
          destination: '/tags/mysql',
          permanent: true,
        },
        {
          source: '/category/php',
          destination: '/tags/php',
          permanent: true,
        },
        {
          source: '/category/security',
          destination: '/tags/security',
          permanent: true,
        },
        {
          source: '/category/slack',
          destination: '/tags/slack',
          permanent: true,
        },
        {
          source: '/category/tech',
          destination: '/tags/tech',
          permanent: true,
        },
        {
          source: '/category/docker',
          destination: '/tags/docker',
          permanent: true,
        },
        {
          source: '/category/firewall',
          destination: '/tags/firewall',
          permanent: true,
        },
        {
          source: '/category/github',
          destination: '/tags/github',
          permanent: true,
        },
        {
          source: '/category/ubuntu',
          destination: '/tags/ubuntu',
          permanent: true,
        },
        {
          source: '/add-free-cloudflare-ssl-in-aws-ec2-instance',
          destination: '/blog/add-free-ssl-in-ec2-instaces', // Matching last slug
          permanent: true,
        },
        {
          source: '/best-vps-hosting-in-2024',
          destination: '/',
          permanent: true,
        },
        {
          source: '/best-ways-to-use-clear-cache-command-in-laravel',
          destination: '/blog/laravel/best-ways-to-use-clear-cache-command-in-laravel',
          permanent: true,
        },
        {
          source: '/can-not-access-ssh-in-aws-after-enable-ufw-firewall',
          destination: '/blog/cant-use-ssh-after-enable-ufu-in-aws-ec2',
          permanent: true,
        },
        {
          source: '/ubuntu-create-mysql-backup-and-telegram-notification',
          destination: '/blog/ubuntu-create-mysql-backup-and-telegram-notification',
          permanent: true,
        },
        {
          source: '/configuring-different-or-america-time-zone-in-laravel',
          destination: '/blog/set-usa-or-america-timezone-in-laravel',
          permanent: true,
        },
        {
          source: '/create-local-backup-of-mongodb-and-send-telegram-notification',
          destination: '/blog/mongodb-backup-locally-with-telegram-notification',
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
          source: '/how-to-add-an-ssh-key-in-github-from-your-linux-and-windows',
          destination: '/blog/add-ssh-key-in-github-from-linux-windows',
          permanent: true,
        },
        {
          source: '/how-to-add-auto-mount-ebs-drive-into-ec2',
          destination: '/blog/how-to-auto-mount-ebs-drive-into-ec2',
          permanent: true,
        },
        {
          source: '/how-to-destroy-dev-career-in-a-short',
          destination: '/blog/how-to-destroy-dev-career-in-a-short',
          permanent: true,
        },
        {
          source: '/how-to-find-hcf-lcm-in-javascript-with-example-code',
          destination: '/blog/how-to-fin-hcf-and-lcm-in-javascript-with-example',
          permanent: true,
        },
        {
          source: '/how-to-generate-and-read-sitemap-xml-file-in-laravel-11',
          destination: '/',
          permanent: true,
        },
        {
          source: '/how-to-get-json-data-from-url-in-laravel',
          destination: '/blog/laravel/how-to-get-json-data-from-url-in-laravel',
          permanent: true,
        },
        {
          source: '/how-to-get-laravel-logs-in-instantly-in-slack-channel',
          destination: '/blog/laravel/send-laravel-logs-to-slack-channel',
          permanent: true,
        },
        {
          source: '/how-to-manage-ubuntu-users',
          destination: '/blog/linux/mongodb-backup-locally-with-telegram-notification',
          permanent: true,
        },
        {
          source: '/laravel-10-send-sms-with-twilio-integration',
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
          source: '/laravel-hashing-encryption-and-how-its-works',
          destination: '/blog/laravel/laravel-hashing-encryption-explained-copy',
          permanent: true,
        },
        {
          source: '/laravel-login-url-change-via-fortify',
          destination: '/blog/laravel/laravel-fortify-login-url-change',
          permanent: true,
        },
        {
          source: '/laravel-sail-sqlstatehy000-2002-no-such-file-or-directory-in-docker',
          destination:
            '/blog/laravel/laravel-sail-sqlstatehy000-2002-no-such-file-or-directory-in-docker',
          permanent: true,
        },
        {
          source: '/laravel-zip-file-creating-and-dowload-example',
          destination: '/blog/laravel/laravel-zip-file-creating-and-dowload',
          permanent: true,
        },
        {
          source: '/pure-function-in-javascript',
          destination: '/blog/javascript-fundamentals/Pure-function-in-javascript',
          permanent: true,
        },
        {
          source: '/remove-last-item-from-laravel-collection-example',
          destination: '/blog/laravel/remove-last-item-from-laravel-collection-example',
          permanent: true,
        },
        {
          source: '/secure-your-ubuntu-server-with-ufw-and-allow-specific-ip-access',
          destination: '/blog/ubuntu/install-ubuntu-firewall-for-specific-ip',
          permanent: true,
        },
        {
          source:
            '/solving-mime-type-issues-in-laravel-livewire-filament-with-nginx-vhost-configuration-2',
          destination:
            '/blog/laravel/solving-meme-type-issues-in-laravel-livewire-filament-with-nginx-server',
          permanent: true,
        },
        {
          source:
            '/solving-mime-type-issues-in-laravel-livewire-filament-with-nginx-vhost-configuration',
          destination:
            '/blog/laravel/solving-mime-type-issues-in-laravel-livewire-filament-with-nginx-server',
          permanent: true,
        },
        {
          source: '/some-es6-features-example-compare-to-es5',
          destination: '/blog/some-es6-features-example-compare-to-es5',
          permanent: true,
        },
        {
          source:
            '/sqlstatehy000-1698-access-denied-for-user-rootlocalhost-cant-log-into-phpmyadmin',
          destination: '/blog/sqlstate-hy000-1698-access-denied-for-root-user',
          permanent: true,
        },
        {
          source: '/understand-javascript-closure-with-example',
          destination: '/blog/javascript-fundamentals/what-is-javascript-closure',
          permanent: true,
        },
        {
          source: '/understanding-the-use-of-laravel-optional-helper-function',
          destination: '/blog/laravel/understanding-the-use-of-laravels-optional-helper-function',
          permanent: true,
        },
        {
          source: '/use-laravel-withcount-withsum-withavg-and-withexists-methods-in-eloquent',
          destination:
            '/blog/laravel/mastering-laravel-eloquent-comprehensive-guide-withcount-withsum-withavg-withexists-methods',
          permanent: true,
        },
        {
          source: '/use-of-this-keyword-in-javascript',
          destination: '/blog/javascript-fundamentals/what-is-this-keyword-javascript',
          permanent: true,
        },
        {
          source: '/vuejs-syllabus-for-beginners-to-quick-start',
          destination: '/blog/vuejs-syllabus-roadmap-for-beginners-to-quick-start',
          permanent: true,
        },
        {
          source: '/what-i-achieved-in-2021',
          destination: '/blog/what-i-achieved-in-2021',
          permanent: true,
        },
        {
          source: '/what-is-javascript-callback-function-and-how-it-works',
          destination: '/blog/javascript-fundamentals/what-is-callback-function-in-javascript',
          permanent: true,
        },
        {
          source: '/what-is-javascript-hoisting',
          destination: '/blog/javascript-fundamentals/what-is-javascript-hoisting',
          permanent: true,
        },
        {
          source: '/zsh-command-not-found-laravel',
          destination: '/blog/laravel/laravel-commad-not-found',
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
