# Install Package in your project

npm i @maankhalife/accordion

Remember to include Tailwind CSS file in header of calling page otherwise formatting will not work. Check example in #how to use it# below.

# Acknowlegment

To create this component, I followed the following example and tried not to change the code that much:
https://svelte.dev/repl/0d592275ba814ea682a4292b401f0421?version=3.48.0

# How to use it

This component applies to one single accordion item. In order to use it, one needs to loop through each data record to fill the accordion.
Please check the example below:
https://svelte.dev/repl/f95564f476074203b033e4ffbfd43a7e?version=3.48.0

# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm init svelte

# create a new project in my-app
npm init svelte my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
