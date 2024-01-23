# Playwright Automation Starter Repo

If you want to crawl, scrape, sync, record, download, aggregate, automate, or generate with ease, this is the starter for you.

Just clone and go.

Features:

- [x] [Playwright](https://playwright.dev/) for top-shelf browser automation.
- [x] [Typescript](https://www.typescriptlang.org/) for type safety.
- [x] [dotenv](https://www.npmjs.com/package/dotenv) and [dotenv-cli](https://www.npmjs.com/package/dotenv-cli) for environment config.
- [x] [BrowserCat](https://www.browsercat.com) for easy, fast, and affordable headless browser hosting.

## Getting Started

### 1. Create Your Automation Project

First, clone the starter repo:

```bash
git clone https://github.com/browsercat/browser-automation-starter.git
git remote rm origin
cd automation-starter
```

Next, install your dependencies:

```bash
npm install
npm playwright install
```

### 2. Run Your Script Locally

Run the sample automation with the following:

```bash
npm run dev
```

Whoa, you scraped BrowserCat! And you generate images and PDFs in `.output/`. Nice.

Now or later, open `src/automate.ts`, and try to tweak some of the behavior.

To run the script in watch mode, run:

```bash
npm run dev:watch
```

### 3. Run Your Script in the Cloud

The repo is setup to run your code on BrowserCat's infrastructure, then send the response back to your computer.

[Sign up for a free plan](https://app.browsercat.com/sign-up), then [create an API key](https://app.browsercat.com/keys).

Store the key in your `.env` file...

```bash
mv .env.default .env
```

```bash
BROWSERCAT_API_KEY={YOUR_API_KEY}
```

With your API key in place, you can run your commands in the cloud:

```bash
npm run dev:bcat
# or
npm run dev:bcat:watch
```

> #### 💡 When to use BrowserCat vs. local browsers
>
> In local development and at small scale, running a local browser will be faster. But BrowserCat really shines when:
>
> - You need to deploy your code.
> - You need to run lots of simultaneous requests.
> - You need to target a specific geographic region.
> - Or you want to test in a production setting.
>
> As in: Save your BrowserCat credits for when you need them. They're cheap, but we still don't want you wasting money!

### 4. Test Your Scripts

This repo is setup for full e2e testing of your scripts. Run the suite once or in watch mode:

```bash
npm run test
npm run test:watch
```

Or run the tests in the cloud:

```bash
npm run test:bcat
npm run test:bcat:watch
```

Run these tests during deployment to ensure your code is always in working condition.

### 5. Speed Up Your CI/CD Tests

BrowserCat can make your CI/CD tests faster and more reliable. How?

CI/CD containers are often low-power, low-memory, and low-CPU. This is great for keeping costs down, but it's not great for running headless browsers.

We've seen users cut their CI/CD from over an hour to under 10 minutes just by adding BrowserCat to the mix.

A github workflow is included in your starter. To get started:

1. [Create a Github repo](https://github.com/new)
2. Store your BrowserCat API key in

  ```text
  > Your Repo 
    > Settings (tab) 
      > Secrets and variables (sidebar)
        > Actions 
          > New repository secret (button)
              Name: BROWSERCAT_API_KEY
              Secret: {YOUR_API_KEY}
  ```

3. Link your repo and push your code:

  ```bash
  git remote add origin <YOUR_REPO_URL>
  git push --set-upstream origin main # or master
  ```

4. View the results at

  ```text
  > Your Repo
    > Actions (tab)
      > Run tests (sidebar)
  ```

> #### 💡 BrowserCat and CI/CD
>
> The value of using BrowserCat for CI/CD scales with your usage. We can parallelize your tests far, far better than any deployment platform.

### 6. Automate Everything!

Keep growing your powers with Playwright and BrowserCat. Browser automation is a rare and powerful skill in a world of increasing complexity.

Here are some resources to help you along the way:

- [BrowserCat blog](https://www.browsercat.com/blog)
- [BrowserCat docs](https://www.browsercat.com/docs)
- [Playwright docs](https://playwright.dev/docs/intro)
