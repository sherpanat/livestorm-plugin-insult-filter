import { Chat } from '@livestorm/plugin'
const Filter = require('bad-words'), filter = new Filter();
const frenchBadwords = require('french-badwords-list');
filter.addWords(...frenchBadwords.array);

export default function() {
  Chat.intercept(/.*/, (message) => {
    const filteredMessage = filter.clean(message.content);
    Chat.broadcast({ text: `${filteredMessage}` });
  })
}
