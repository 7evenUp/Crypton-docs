// @ts-check
import { defineConfig, passthroughImageService } from "astro/config"
import starlight from "@astrojs/starlight"

// https://astro.build/config
export default defineConfig({
  image: {
    service: passthroughImageService(),
  },
  integrations: [
    starlight({
      title: "Crypton docs",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/7evenUp/Crypton-docs",
        },
      ],
      sidebar: [
        {
          label: "ID-Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "ID Auth", slug: "guides/id-auth" },
            { label: "ID Search Params", slug: "guides/search-params" },
          ],
        },
      ],
    }),
  ],
})
