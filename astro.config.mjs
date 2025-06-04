// @ts-check
import { defineConfig } from "astro/config"
import starlight from "@astrojs/starlight"

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Crypton docs",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
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
