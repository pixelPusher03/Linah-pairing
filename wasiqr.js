let express = require("express");
let {
  toBuffer
} = require("qrcode");
const fs = require('fs');
let app = global.app = express();
const PORT = process.env.PORT || 0xbd6;
const makeWASocket = require('@adiwajshing/baileys')["default"];
const pino = require("pino");
const router = express.Router();
const {
  delay,
  useSingleFileAuthState,
  makeInMemoryStore
} = require("@adiwajshing/baileys");
const PastebinAPI = require("pastebin-js");
const pastebin = new PastebinAPI("5f4ilKJVJG-0xbJTXesajw64LgSAAo-L");
app.use('/', router.get('/', (_0x1c3213, _0x44fa0e) => {
  var _0x4d968d = '';
  var _0x57b7ce = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".length;
  for (var _0x4f281b = 0x0; _0x4f281b < 0x9; _0x4f281b++) {
    _0x4d968d += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(Math.random() * _0x57b7ce));
  }
  function _0x23847d() {
    const _0x1e4ebb = '' + _0x4d968d;
    const {
      state: _0x27d51d,
      saveState: _0x320993
    } = useSingleFileAuthState(_0x1e4ebb);
    try {
      let _0x3cf006 = [0x3, 0xca2, 0x9];
      const _0x93c955 = makeWASocket({
        'logger': pino({
          'level': "silent"
        }),
        'printQRInTerminal': true,
        'browser': ["linah by: thedeveloper03", 'safari', '1.0.0'],
        'auth': _0x27d51d,
        'version': _0x3cf006
      });
      _0x93c955.ev.on("connection.update", async _0x3f3030 => {
        console.log(_0x3f3030);
        if (_0x3f3030.qr !== undefined) {
          _0x44fa0e.end(await toBuffer(_0x3f3030.qr));
        }
        const {
          connection: _0x3d568d,
          lastDisconnect: _0x374e09
        } = _0x3f3030;
        if (_0x3d568d == "open") {
          let _0x31444f = await pastebin.createPasteFromFile(_0x1e4ebb, 'Miku_session', null, 0x0, 'N');
          data = _0x31444f.replace("https://pastebin.com/", '');
          await delay(0x1f4);
          await _0x93c955.sendMessage(_0x93c955.user.id, {
            'text': btoa(data)
          });
          await delay(0x1f4);
          const _0x5ac8a6 = fs.readFileSync(_0x1e4ebb);
          let _0x454bf8 = btoa(data);
          console.log(_0x454bf8);
          await _0x93c955.sendMessage(_0x93c955.user.id, {
            'document': _0x5ac8a6,
            'mimetype': "application/json",
            'fileName': "session.json"
          });
          await _0x93c955.sendMessage(_0x93c955.user.id, {
            'image': {
              'url': "https://telegra.ph/file/b81cfddc613538af66aa9.jpg"
            },
            'caption': "\nHello, I am *The Developer03*, The developer of this bot.\n\nDownload *session.json* and upload on your GitHub fork.\n\nHaving trouble? Check my tutorial.\n\nPlease support me by following me on Github.\n\t\t\t\t\t\t\t",
            'footer': "Fantox",
            'templateButtons': [{
              'urlButton': {
                'displayText': "My Github",
                'url': "https://github.com/byte-smith03"
              }
            }, {
              'urlButton': {
                'displayText': "Deploy Tutorial",
                'url': 'https://lina-bots.vercel.app'
              }
            }]
          });
          await fs.unlinkSync(_0x1e4ebb);
          exec(rs);
          process.exit(0x0);
        }
        if (_0x3d568d === "close" && _0x374e09 && _0x374e09.error && _0x374e09.error.output.statusCode != 0x191) {
          _0x23847d();
        }
      });
      _0x93c955.ev.on("creds.update", _0x320993);
      _0x93c955.ev.on("messages.upsert", () => {});
    } catch (_0x41c44d) {
      console.log(_0x41c44d);
    }
  }
  _0x23847d();
}));
app.listen(PORT, () => console.log("App listened on port", PORT));
function makeid() {
  var _0x1ebefe = '';
  var _0x222245 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".length;
  for (var _0x3fe74b = 0x0; _0x3fe74b < 0x9; _0x3fe74b++) {
    _0x1ebefe += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(Math.random() * _0x222245));
  }
  return _0x1ebefe;
}