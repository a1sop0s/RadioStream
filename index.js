const { AkairoClient, CommandHandler, ListenerHandler } = require('discord-akairo');
const dotenv = require('dotenv');

const config = require('./config.json');
let method = null;

    class RetroClient extends AkairoClient {
        constructor() {
            super({
                ownerID: '106833080060231680'
            }, {
                disableEveryone: true
            });

            this.commandHandler = new CommandHandler(this, {
                directory: './assets/commands',
                prefix: config.prefix,
                allowMention: true,
                defaultPrompt: {
                    timeout: 'Time ran out, command has been cancelled.',
                    ended: 'Too many retries, command has been cancelled.',
                    cancel: 'Command has been cancelled.',
                    retries: 4,
                    time: 15000
                }
            });

            this.listenerHandler = new ListenerHandler(this, {
                directory: './assets/commands'
            });

            this.listenerHandler.setEmitters({
                commandHandler: this.commandHandler,
                listenerHandler: this.listenerHandler
            });

            this.setup();
        }
        setup() {
            this.commandHandler.loadAll();
            this.commandHandler.useListenerHandler();
            this.listenerHandler.loadAll();
        }

        async login() {
            dotenv.config()
            if (process.env.TOKEN) {
                method = process.env.TOKEN;
            } else {
                method = config.token;
            }
            super.login(method);
        }
    }
module.exports = RetroClient;