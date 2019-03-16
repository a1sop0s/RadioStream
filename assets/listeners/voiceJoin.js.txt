const { Listener } = require('discord-akairo');

    class VoiceListener extends Listener {
        constructor() {
            super('ready', {
                emitter: 'client',
                event: 'ready'
            });
        }

        async exec() {
        }
    }
module.exports = VoiceListener;