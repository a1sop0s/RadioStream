const { Command } = require('discord-akairo');
const DataStream = 'https://datastreamlinkgoeshere.com/yep.mp4';

    class PlayCommand extends Command {
        constructor() {
            super('play', {
                aliases: ['play', 'stream'],
                channel: 'guild',
                ownerOnly: true
            });
        }
        async exec(message) {
            const VoiceChannel = message.member.voice.channel
            
            if (VoiceChannel) {
                const connection = await VoiceChannel.join();
                connection.play(DataStream);
            } else {
                message.reply("you aren't in a voice channel.");
            }

        }
    }

module.exports = PlayCommand;

