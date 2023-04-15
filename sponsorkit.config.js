import { defineConfig, presets } from "sponsorkit";

presets.xxl = {
  ...presets.xl,
  avatar: {
    size: 110,
  },
};

presets.largeFix = {
  ...presets.large,
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
      title: "Backers",
      preset: presets.base,
    },
    {
      title: "Sponsors",
      monthlyDollars: 5,
      preset: presets.medium,
    },
    {
      title: "Silver Sponsors",
      monthlyDollars: 10,
      preset: presets.largeFix,
    },
    {
      title: "Gold Sponsors",
      monthlyDollars: 25,
      preset: presets.xl,
    },
    {
      title: "Platinum Sponsors",
      monthlyDollars: 50,
      preset: presets.xxl,
    },
  ],
});
