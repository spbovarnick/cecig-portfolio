# UX/UI Designer Portfolio

This app was built with [Next.js v14](https://nextjs.org/) and [next-sanity](https://github.com/sanity-io/next-sanity) headless CMS to provide an artist with a more streamlined and less cumbersome self-managed portfolio than an integrated CMS allows.

# Replicating

In order to reuse this repository, you'll need to set up a Sanity project. After cloning this repo, you can do with the following command:
```npm -y create sanity@latest```
from the root level of the project. Refer to the sanity docs as needed!

This project also utilizes on demand revalidation per this [brief tutorial](https://www.sanity.io/guides/sanity-webhooks-and-on-demand-revalidation-in-nextjs). You'll need to set up an `app/api/revalidation` route and include a webhook secret in your `.env`. Revalidation is handy in development and can be utilized in production as well by replacing the URL route the hook should hit with your deployed URL.