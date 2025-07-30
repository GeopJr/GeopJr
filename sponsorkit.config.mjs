import { defineConfig, tierPresets } from "sponsorkit";

tierPresets.xxl = {
  ...tierPresets.xl,
  avatar: {
    size: 110,
  },
};

tierPresets.largeFix = {
  ...tierPresets.large,
  name: {
    maxLength: 14,
  },
};

export default defineConfig({
  github: {
    login: process.env.SPONSORKIT_GITHUB_LOGIN ?? "GeopJr",
    token: process.env.SPONSORKIT_GITHUB_TOKEN,
  },
  width: 800,
  formats: ["json", "svg", "png"],
  tiers: [
    {
      title: 'Past Sponsors',
      monthlyDollars: -1,
      preset: tierPresets.xs,
    },
    {
      title: "Backers",
      preset: tierPresets.base,
    },
    {
      title: "Sponsors",
      monthlyDollars: 5,
      preset: tierPresets.medium,
    },
    {
      title: "Silver Sponsors",
      monthlyDollars: 10,
      preset: tierPresets.largeFix,
    },
    {
      title: "Gold Sponsors",
      monthlyDollars: 25,
      preset: tierPresets.xl,
    },
    {
      title: "Platinum Sponsors",
      monthlyDollars: 50,
      preset: tierPresets.xxl,
    },
  ],
  renders: [
    {
      name: 'sponsors'
    },
    {
      name: 'sponsors.wide',
      width: 1200,
    },
    {
      name: 'sponsors.circle',
      renderer: 'circles'
    },
    {
      name: 'sponsors.dark',
      color: '#fff',
      svgInlineCSS: `${defineConfig.svgInlineCSS} text {fill:white;font-weight:600;}`
    }
  ]
});
