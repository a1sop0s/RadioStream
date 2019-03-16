const { Command } = require('discord-akairo');

    class StopCommand extends Command {
        constructor() {
            super('stop', {
                aliases: ['stop', 'pause', 'stfu'],
                channel: 'guild',
                ownerOnly: true
            });
        }
        async exec(message) {
            const VoiceChannel = message.member.voice.channel
            
            if (VoiceChannel) {
                const connection = message.guild.me.voice.channel;
                await connection.leave();
                message.channel.send('✅ left the channel.')
            } else {
                return;
            }

        }
    }

module.exports = StopCommand;

