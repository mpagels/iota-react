# REACT IOTA

![IOTA-Logo](docs/iota-logo.jpg)

This is a test project of mine to get familiar with the [iota.js](https://github.com/iotaledger/iota.js) library.

The WebApp is build with react and

- let you send messages to the tangle
- and inspect all previous messages sent through the app
- You can click on a link in the message area and you will redirect to the tangle explorer

You can visit the [live version](https://iota-react.vercel.app/) here and send some messages to the tangle.
It's super ugly, but I just want to test the functionallity. ;-)

## Want to install the app on your local machine?

The app should also work in localhost environment.
Please try it out. You need to do the following:

- Clone the repo
- `cd` in it
- and run `npm install`.
- After that you need to create a `.env` file in the root of the project.
- You can use the `.template.env` file and remove the `.template` and change the content.

```
REACT_APP_INDEX=<hereYourIndex>
REACT_APP_API_ENDPOINT=https://chrysalis-nodes.iota.org
```

The `REACT_APP_INDEX` as I understand it, can be anything.

Here is a working example:

```
REACT_APP_INDEX=React
REACT_APP_API_ENDPOINT=https://chrysalis-nodes.iota.org
```

And here the folder structure after the `.env` file is created:

```
iota-react
├── .env
├── .git
├── .gitignore
├── node_modules
├── package-lock.json
├── package.json
├── public
├── README.md
└── src
```

Then run `npm start` and the project should start and you can visit `localhost:3006` in your browser.

## Get in touch with me

I really like IOTA. I think it has a lot of potential. I would love to get in touch if someone want to talk about some interesting use cases.

I'm available in the IOTA discord channel  
<a href="https://discord.iota.org/"><img src="https://img.shields.io/static/v1?style=for-the-badge&message=Discord&color=5865F2&logo=Discord&logoColor=FFFFFF&label=" /></a>  
User: boa_11#8008
