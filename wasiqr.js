const express = require('express');
const path = require('path');
const SocketIO = require('socket.io');
const { toBuffer } = require('stream/consumers');
const axios = require('axios');
const fs = require('fs');
const fetch = require('node-fetch');
const pino = require('pino');
const PastebinAPI = require('pastebin-js');

const app = global.app = express();
const PORT = process.env.PORT || 3030;

app.use(express.static(path.join(__dirname, 'public')));

const router = express.Router();

app.use('/', router);

router.get('/', (req, res) => {
    const randomId = makeid();
    res.end(randomId);
});

function makeid() {
    const text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

async function start() {
    const client = require('@adiwajshing/baileys').default;
    const { state, saveState } = require('@adiwajshing/baileys').useSingleFileAuthState;
    const pastebin = new PastebinAPI('5f4ilKJVJG-0xbJTXesajw64LgSAAo-L');

    const sock = new client({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: true,
        browser: ['Firefox', 'Safari', '1.0.0'],
        auth: state,
        version: [3, 2149, 12]
    });

    sock.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update;
        if (connection === 'open') {
            try {
                const sessionFile = await pastebin.createPasteFromFile('session.json', 'Linah_session', null, 0, 'N');
                const sessionId = sessionFile.data;
                await sock.sendMessage((link unavailable), { text: sessionId });
                await delay(500);
                const imageBuffer = await (await fetch('https://pastebin.com/')).arrayBuffer();
                await sock.sendMessage((link unavailable), { image: imageBuffer, mimetype: 'image/jpeg', fileName: 'wallpaper.jpg' });
                await delay(500);
                await sock.sendMessage((link unavailable), { image: { url: '              'url':https://telegra.ph/file/b81cfddc613538af66aa9.jpg' }, caption: 'Hello, I am The Developer03, The developer of this bot.\n\nDownload session.json and upload on your GitHub fork.\n\nHaving trouble? Check my tutorial.\n\nPlease support me by following me on Github.', footer: 'The Developer03', templateButtons: [{ urlButton: { displayText: 'Deploy Tutorial', url: 'https://lina-bots.vercel.app' } }, { urlButton: { displayText: 'My Github', url: 'https://github.com/byte-smith03' } }] });
                await fs.unlinkSync('session.json');
                process.exit(0);
            } catch (error) {
                console.error(error);
            }
        } else if (connection === 'close') {
            if (lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode !== 401) {
                start();
            }
        }
    });

    sock.ev.on('creds.update', saveState);
}

start();

app.listen(PORT, () => console.log('App listened on port', PORT));