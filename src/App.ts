import { Chat } from '@livestorm/plugin'

export default function() {
  function replaceFromString(words, string) {
    return words.reduce((result, word) => result.replace(word, '****'), string)
  };
  function matchWords(string, regex) {
    return string.match(regex)
  };
  const insultRegex = /fuck|bite/ig;
  Chat.intercept(insultRegex, (message) => {
    const insultList = matchWords(message.content, insultRegex);
    const filteredMessage = replaceFromString(insultList, message.content);
    Chat.broadcast({ text: `${filteredMessage}` });
  })
}
