// next.config.mjs

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/buy-youtube-views',
          has: [
            {
              type: 'host',
              value: 'www.tubeviews.co',
            },
          ],
          destination: 'https://www.gofamy.com/buy-youtube-views',
          permanent: true, // 301 Redirect
        },
        {
          source: '/buy-youtube-subscribers',
          has: [
            {
              type: 'host',
              value: 'www.tubeviews.co',
            },
          ],
          destination: 'https://www.gofamy.com/buy-youtube-subscribers',
          permanent: true, // 301 Redirect
        },
        {
          source: '/buy-youtube-likes',
          has: [
            {
              type: 'host',
              value: 'www.tubeviews.co',
            },
          ],
          destination: 'https://www.gofamy.com/buy-youtube-likes',
          permanent: true, // 301 Redirect
        },
        {
          source: '/buy-youtube-comments',
          has: [
            {
              type: 'host',
              value: 'www.tubeviews.co',
            },
          ],
          destination: 'https://www.gofamy.com/buy-youtube-comments',
          permanent: true, // 301 Redirect
        },
        {
          source: '/buy-instagram-followers',
          has: [
            {
              type: 'host',
              value: 'www.tubeviews.co',
            },
          ],
          destination: 'https://www.gofamy.com/buy-instagram-followers',
          permanent: true, // 301 Redirect
        },
        {
          source: '/buy-instagram-likes',
          has: [
            {
              type: 'host',
              value: 'www.tubeviews.co',
            },
          ],
          destination: 'https://www.gofamy.com/buy-instagram-likes',
          permanent: true, // 301 Redirect
        },
        {
          source: '/buy-instagram-comments',
          has: [
            {
              type: 'host',
              value: 'www.tubeviews.co',
            },
          ],
          destination: 'https://www.gofamy.com/buy-instagram-comments',
          permanent: true, // 301 Redirect
        },
        {
          source: '/buy-twitter-followers',
          has: [
            {
              type: 'host',
              value: 'www.tubeviews.co',
            },
          ],
          destination: 'https://www.gofamy.com/buy-twitter-followers',
          permanent: true, // 301 Redirect
        },
        {
          source: '/buy-twitter-likes',
          has: [
            {
              type: 'host',
              value: 'www.tubeviews.co',
            },
          ],
          destination: 'https://www.gofamy.com/buy-twitter-likes',
          permanent: true, // 301 Redirect
        },
        {
          source: '/buy-twitter-retweets',
          has: [
            {
              type: 'host',
              value: 'www.tubeviews.co',
            },
          ],
          destination: 'https://www.gofamy.com/buy-twitter-retweets',
          permanent: true, // 301 Redirect
        },
        {
          source: '/buy-tiktok-followers',
          has: [
            {
              type: 'host',
              value: 'www.tubeviews.co',
            },
          ],
          destination: 'https://www.gofamy.com/buy-tiktok-followers',
          permanent: true, // 301 Redirect
        },
        {
          source: '/buy-tiktok-likes',
          has: [
            {
              type: 'host',
              value: 'www.tubeviews.co',
            },
          ],
          destination: 'https://www.gofamy.com/buy-tiktok-likes',
          permanent: true, // 301 Redirect
        },
        {
          source: '/buy-tiktok-views',
          has: [
            {
              type: 'host',
              value: 'www.tubeviews.co',
            },
          ],
          destination: 'https://www.gofamy.com/buy-tiktok-views',
          permanent: true, // 301 Redirect
        },
        {
          source: '/buy-tiktok-comments',
          has: [
            {
              type: 'host',
              value: 'www.tubeviews.co',
            },
          ],
          destination: 'https://www.gofamy.com/buy-tiktok-comments',
          permanent: true, // 301 Redirect
        },
        {
          source: '/buy-twitch-followers',
          has: [
            {
              type: 'host',
              value: 'www.tubeviews.co',
            },
          ],
          destination: 'https://www.gofamy.com/buy-twitch-followers',
          permanent: true, // 301 Redirect
        },
        {
          source: '/buy-twitch-views',
          has: [
            {
              type: 'host',
              value: 'www.tubeviews.co',
            },
          ],
          destination: 'https://www.gofamy.com/buy-twitch-views',
          permanent: true, // 301 Redirect
        },
        {
          source: '/buy-twitch-live-stream-views',
          has: [
            {
              type: 'host',
              value: 'www.tubeviews.co',
            },
          ],
          destination: 'https://www.gofamy.com/buy-twitch-live-stream-views',
          permanent: true, // 301 Redirect
        },
        {
          source: '/buy-spotify-plays',
          has: [
            {
              type: 'host',
              value: 'www.tubeviews.co',
            },
          ],
          destination: 'https://www.gofamy.com/buy-spotify-plays',
          permanent: true, // 301 Redirect
        },
        {
          source: '/buy-spotify-followers',
          has: [
            {
              type: 'host',
              value: 'www.tubeviews.co',
            },
          ],
          destination: 'https://www.gofamy.com/buy-spotify-followers',
          permanent: true, // 301 Redirect
        },
        {
          source: '/buy-spotify-monthly-listeners',
          has: [
            {
              type: 'host',
              value: 'www.tubeviews.co',
            },
          ],
          destination: 'https://www.gofamy.com/buy-spotify-monthly-listeners',
          permanent: true, // 301 Redirect
        },
        {
          source: '/buy-spotify-pre-saves',
          has: [
            {
              type: 'host',
              value: 'www.tubeviews.co',
            },
          ],
          destination: 'https://www.gofamy.com/buy-spotify-pre-saves',
          permanent: true, // 301 Redirect
        },
        {
          source: '/buy-spotify-saves',
          has: [
            {
              type: 'host',
              value: 'www.tubeviews.co',
            },
          ],
          destination: 'https://www.gofamy.com/buy-spotify-saves',
          permanent: true, // 301 Redirect
        },
        {
          source: '/buy-spotify-playlist-plays',
          has: [
            {
              type: 'host',
              value: 'www.tubeviews.co',
            },
          ],
          destination: 'https://www.gofamy.com/buy-spotify-playlist-plays',
          permanent: true, // 301 Redirect
        },
        {
          source: '/buy-linkedin-followers',
          has: [
            {
              type: 'host',
              value: 'www.tubeviews.co',
            },
          ],
          destination: 'https://www.gofamy.com/buy-linkedin-followers',
          permanent: true, // 301 Redirect
        },
        {
          source: '/buy-linkedin-connections',
          has: [
            {
              type: 'host',
              value: 'www.tubeviews.co',
            },
          ],
          destination: 'https://www.gofamy.com/buy-linkedin-connections',
          permanent: true, // 301 Redirect
        },
        {
          source: '/buy-linkedin-recommendations',
          has: [
            {
              type: 'host',
              value: 'www.tubeviews.co',
            },
          ],
          destination: 'https://www.gofamy.com/buy-linkedin-recommendations',
          permanent: true, // 301 Redirect
        },
        {
          source: '/buy-linkedin-endorsements',
          has: [
            {
              type: 'host',
              value: 'www.tubeviews.co',
            },
          ],
          destination: 'https://www.gofamy.com/buy-linkedin-endorsements',
          permanent: true, // 301 Redirect
        },
        {
          source: '/buy-linkedin-employees',
          has: [
            {
              type: 'host',
              value: 'www.tubeviews.co',
            },
          ],
          destination: 'https://www.gofamy.com/buy-linkedin-employees',
          permanent: true, // 301 Redirect
        },
      ];
    },
  };
  
  export default nextConfig;
  
