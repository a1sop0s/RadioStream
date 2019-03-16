const { Command } = require('discord-akairo');
const axios = require('axios');

    class NowPlaying extends Command {
        constructor() {
            super('nowplaying', {
                aliases: ['nowplaying', 'np', 'playing'],
                channel: 'guild',
                ownerOnly: true
            });
        }
        async exec(message) {
            axios.get('https://dad.akaver.com/api/SongTitles/SKYMEDIAALL')
            .then(async function(response) {
                await console.log('Received!');
                let result = await response.data.StationHistoryList.find(station => station.StationName === 'RETRO');
                result = await result.SongHistoryList.find(song => song.Count == 0);
                
                if (result) {
                    console.log(result.Title, result.Artist)
                    const resultEmbed = message.client.util.embed({
                        color: 0xE50A7E,
                        fields: [
                            {
                                name: "Title",
                                value: result.Title,
                                inline: true
                            },
                            {
                                name: "Artist",
                                value: result.Artist,
                                inline: true
                            }
                        ],
                        thumbnail: {
                            url: 'https://i.imgur.com/CQQGfsZ.png'
                        }
                    });
                    return message.channel.send({ embed: resultEmbed });
                }
            })
            .catch(function (err) {
                console.error(err);
            });
        }
    }
module.exports = NowPlaying;