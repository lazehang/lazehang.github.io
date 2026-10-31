module.exports = {
    siteMetadata: {
        title: `Mangal Hang Limbu | Full-stack developer (Hong Kong)`,
        author: {
            name: `Mangal Hang Limbu`,
            summary: `Full-stack engineer with 7+ years building web products in Hong Kong. Comfortable across React, Vue, Nuxt, Next.js, Node, TypeScript, PHP, and Laravel.`
        },
        description: `Portfolio of Mangal Hang Limbu (lazehang) — full-stack web developer in Hong Kong.`,
        siteUrl: `https://www.lazehang.com`,
        social: {}
    },
    plugins: [
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                postCssPlugins: [
                    require('tailwindcss'),
                    require('./tailwind.config.js') // Optional: Load custom Tailwind CSS configuration
                ]
            }
        },
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/blog`,
                name: `blog`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`
            }
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 630
                        }
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`
                        }
                    },
                    `gatsby-remark-prismjs`,
                    `gatsby-remark-copy-linked-files`,
                    `gatsby-remark-smartypants`
                ]
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        // {
        //   resolve: `gatsby-plugin-google-analytics`,
        //   options: {
        //     trackingId: `ADD YOUR TRACKING ID HERE`,
        //   },
        // },
        {
            resolve: `gatsby-plugin-feed`,
            options: {
                query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
                feeds: [
                    {
                        serialize: ({ query: { site, allMarkdownRemark } }) => {
                            return allMarkdownRemark.nodes.map(node => {
                                return Object.assign({}, node.frontmatter, {
                                    description: node.excerpt,
                                    date: node.frontmatter.date,
                                    url:
                                        site.siteMetadata.siteUrl +
                                        node.fields.slug,
                                    guid:
                                        site.siteMetadata.siteUrl +
                                        node.fields.slug,
                                    custom_elements: [
                                        { 'content:encoded': node.html }
                                    ]
                                })
                            })
                        },
                        query: `
              {
                allMarkdownRemark(
                  sort: { frontmatter: { date: DESC } },
                ) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
                        output: '/rss.xml',
                        title: 'Mangal Hang Limbu'
                    }
                ]
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Mangal Hang Limbu`,
                short_name: `lazehang`,
                start_url: `/`,
                background_color: `#ffffff`,
                // This will impact how browsers show your PWA/website
                // https://css-tricks.com/meta-theme-color-and-trickery/
                theme_color: `#111111`,
                display: `minimal-ui`,
                icon: `src/images/favicon_io/android-chrome-512x512.png`, // This path is relative to the root of the site.
                icons: [
                    {
                        src: `src/images/favicon_io/android-chrome-192x192.png`,
                        sizes: `192x192`,
                        type: `image/png`
                    },
                    {
                        src: `src/images/favicon_io/android-chrome-512x512.png`,
                        sizes: `512x512`,
                        type: `image/png`
                    },
                    {
                        src: `src/images/favicon_io/favicon-32x32.png`,
                        sizes: `32x32`,
                        type: `image/png`
                    },
                    {
                        src: `src/images/favicon_io/favicon-16x16.png`,
                        sizes: `16x16`,
                        type: `image/png`
                    }
                ]
            }
        },
        `gatsby-plugin-react-helmet`,
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
        {
            resolve: `gatsby-plugin-google-fonts-v2`,
            options: {
                fonts: [
                    {
                        family: `Poppins:wght@400;600;900`
                    }
                ]
            }
        },
        {
            resolve: 'gatsby-plugin-google-tagmanager',
            options: {
                id: 'GTM-KP5ZTGH',

                // Include GTM in development.
                //
                // Defaults to false meaning GTM will only be loaded in production.
                includeInDevelopment: false,

                defaultDataLayer: { platform: 'gatsby' },

                enableWebVitalsTracking: true
            }
        },
        {
            resolve: 'gatsby-plugin-sitemap'
        }
    ]
}
