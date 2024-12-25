/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/', // The old home page path
          destination: 'https://www.gofamy.com', // The new home page URL
          permanent: true, // Indicates a 301 permanent redirect
        },
        {
          source: '/buy-youtube-views', // The old URL path
          destination: 'https://www.gofamy.com/buy-youtube-views', // The new URL path
          permanent: true, // Indicates a 301 permanent redirect
        },
        {
          source: '/buy-youtube-subscribers', // The old URL path
          destination: 'https://www.gofamy.com/buy-youtube-subscribers', // The new URL path
          permanent: true, // Indicates a 301 permanent redirect
        },
        {
          source: '/buy-youtube-likes', // The old URL path
          destination: 'https://www.gofamy.com/buy-youtube-likes', // The new URL path
          permanent: true, // Indicates a 301 permanent redirect
        },
        {
            source: '/buy-youtube-comments', // The old URL path
            destination: 'https://www.gofamy.com/buy-youtube-comments', // The new URL path
            permanent: true, // Indicates a 301 permanent redirect
        },
        {
            source: '/buy-youtube-short-views', // The old URL path
            destination: 'https://www.gofamy.com/buy-youtube-short-views', // The new URL path
            permanent: true, // Indicates a 301 permanent redirect
        },
        {
            source: '/buy-youtube-live-stream-views-viewers', // The old URL path
            destination: 'https://www.gofamy.com/buy-youtube-live-stream-views-viewers', // The new URL path
            permanent: true, // Indicates a 301 permanent redirect
        },
        {
            source: '/buy-facebook-followers',
            destination: 'https://www.gofamy.com/buy-facebook-followers',
            permanent: true,
        },
        {
            source: '/buy-facebook-likes',
            destination: 'https://www.gofamy.com/buy-facebook-likes',
            permanent: true,
        },
        {
            source: '/buy-facebook-video-views',
            destination: 'https://www.gofamy.com/buy-facebook-video-views',
            permanent: true,
        },
        {
            source: '/buy-facebook-comments',
            destination: 'https://www.gofamy.com/buy-facebook-comments',
            permanent: true,
        },
        {
            source: '/buy-facebook-page-likes',
            destination: 'https://www.gofamy.com/buy-facebook-page-likes',
            permanent: true,
        },
        {
            source: '/buy-facebook-live-stream-views-viewers',
            destination: 'https://www.gofamy.com/buy-facebook-live-stream-views-viewers',
            permanent: true,
        },
        {
            source: '/buy-instagram-followers',
            destination: 'https://www.gofamy.com/buy-instagram-followers',
            permanent: true,
        },
        {
            source: '/buy-instagram-likes',
            destination: 'https://www.gofamy.com/buy-instagram-likes',
            permanent: true,
        },
        {
            source: '/buy-instagram-reels-likes',
            destination: 'https://www.gofamy.com/buy-instagram-reels-likes',
            permanent: true,
        },
        {
            source: '/buy-instagram-reels-views',
            destination: 'https://www.gofamy.com/buy-instagram-reels-views',
            permanent: true,
        },
        {
            source: '/buy-instagram-reels-comments',
            destination: 'https://www.gofamy.com/buy-instagram-reels-comments',
            permanent: true,
        },
        {
            source: '/buy-instagram-reels-story-views',
            destination: 'https://www.gofamy.com/buy-instagram-story-views',
            permanent: true,
        },
        {
            source: '/buy-instagram-target-likes',
            destination: 'https://www.gofamy.com/buy-instagram-target-likes',
            permanent: true,
        },
        {
            source: '/buy-instagram-target-followers',
            destination: 'https://www.gofamy.com/buy-instagram-target-followers',
            permanent: true,
        },
        {
            source: '/buy-instagram-live-stream-views',
            destination: 'https://www.gofamy.com/buy-instagram-live-stream-views',
            permanent: true,
        },
        {
            source: '/buy-twitter-followers',
            destination: 'https://www.gofamy.com/buy-twitter-followers',
            permanent: true,
        },
        {
            source: '/buy-twitter-likes',
            destination: 'https://www.gofamy.com/buy-twitter-likes',
            permanent: true,
        },
        {
            source: '/buy-twitter-retweets',
            destination: 'https://www.gofamy.com/buy-twitter-retweets',
            permanent: true,
        },
        {
            source: '/buy-twitter-video-views',
            destination: 'https://www.gofamy.com/buy-twitter-video-views',
            permanent: true,
        },
        {
            source: '/buy-tiktok-followers',
            destination: 'https://www.gofamy.com/buy-tiktok-followers',
            permanent: true,
        },
        {
            source: '/buy-tiktok-likes',
            destination: 'https://www.gofamy.com/buy-tiktok-likes',
            permanent: true,
        },
        {
            source: '/buy-tiktok-views',
            destination: 'https://www.gofamy.com/buy-tiktok-views',
            permanent: true,
        },
        {
            source: '/buy-tiktok-comments',
            destination: 'https://www.gofamy.com/buy-tiktok-comments',
            permanent: true,
        },
        {
            source: '/buy-spotify-followers',
            destination: 'https://www.gofamy.com/buy-spotify-followers',
            permanent: true,
        },
        {
            source: '/buy-spotify-plays',
            destination: 'https://www.gofamy.com/buy-spotify-plays',
            permanent: true,
        },
        {
            source: '/buy-soundcloud-followers',
            destination: 'https://www.gofamy.com/buy-soundcloud-followers',
            permanent: true,
        },
        {
            source: '/buy-soundcloud-plays',
            destination: 'https://www.gofamy.com/buy-soundcloud-plays',
            permanent: true,
        },
        {
            source: '/buy-linkedin-followers',
            destination: 'https://www.gofamy.com/buy-linkedin-followers',
            permanent: true,
        },
        {
            source: '/buy-linkedin-connections',
            destination: 'https://www.gofamy.com/buy-linkedin-connections',
            permanent: true,
        },
        {
            source: '/buy-linkedin-likes',
            destination: 'https://www.gofamy.com/buy-linkedin-likes',
            permanent: true,
        },
        {
            source: '/buy-pinterest-followers',
            destination: 'https://www.gofamy.com/buy-pinterest-followers',
            permanent: true,
        },
        {
            source: '/buy-pinterest-reactions',
            destination: 'https://www.gofamy.com/buy-pinterest-reactions',
            permanent: true,
        },
        {
            source: '/buy-pinterest-likes',
            destination: 'https://www.gofamy.com/buy-pinterest-likes',
            permanent: true,
        },
        {
            source: '/buy-snapchat-followers',
            destination: 'https://www.gofamy.com/buy-snapchat-followers',
            permanent: true,
        },
        {
            source: '/buy-snapchat-likes',
            destination: 'https://www.gofamy.com/buy-snapchat-likes',
            permanent: true,
        },
        {
            source: '/buy-threads-likes',
            destination: 'https://www.gofamy.com/buy-threads-likes',
            permanent: true,
        },
        {
            source: '/buy-threads-comments',
            destination: 'https://www.gofamy.com/buy-threads-comments',
            permanent: true,
        },
        {
            source: '/buy-twitch-followers',
            destination: 'https://www.gofamy.com/buy-twitch-followers',
            permanent: true,
        },
        {
            source: '/buy-twitch-views',
            destination: 'https://www.gofamy.com/buy-twitch-views',
            permanent: true,
        },
        {
            source: '/buy-twitch-live-viewers',
            destination: 'https://www.gofamy.com/buy-twitch-live-viewers',
            permanent: true,
        },
      ];
    },
  };
  
  export default nextConfig;
  