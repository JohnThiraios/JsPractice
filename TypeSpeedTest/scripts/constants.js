const wpmTile = document.querySelector(".tile_wpm");
const accuracyTile = document.querySelector(".tile_accuracye");
const timeTile = document.querySelector(".tile_time");

const textAreaInput = document.querySelector(".text-area_input");
const textAreaText = document.querySelector(".text-area_text");

const resetButton = document.querySelector(".reset");

const keys = document.querySelectorAll(".key");

const word = document.querySelector("#word-template").content;

const validInputKeys =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz[];',./";

const ignoredKeys = ["Shift", "Capslock"];

const punctuationOrSpace = ",.;";

const paragraphs = [
  `Polar bears are big, white bears that live in the cold parts of the world, like the North Pole.`,
  `Internal peace is the feeling of being calm and content inside yourself, even when things around you are chaotic. It's like having a quiet place within your mind where you can go to find tranquility and solace.`,
  `Limitlessness is the idea of having no boundaries or restrictions. It's like having endless possibilities and opportunities ahead of you. When you feel limitless, you're free to dream big and chase after your goals without fear of hitting a wall.`,
  `Synchronicity is when things happen in a way that seems connected but maybe aren't supposed to be. It's like when you're thinking about someone, and then they call you out of the blue.`,
  `When you are in the flow state, everything feels just right. It's like being in a groove where everything clicks smoothly. Your mind is clear, and you're focused completely on what you're doing.`,
  `The top eateries aren't just places where you eat food. They're special spots that make you feel good and remember the food for a long time.`,
  `The big body of water that covers most of our world is called the ocean. It is very big and very deep, with many different kinds of animals and plants living inside it.`,
  `ChatGPT is a clever computer program that talks with people like me. It knows a lot of things and can help with questions or just have a chat.`,
  `Dogs are furry friends that many people love. They come in different shapes and sizes, from tiny ones that fit in your hand to big ones that can pull sleds.`,

  "Gourmet havens are more than mere establishments for dining; they are sanctuaries of culinary delight, where every dish tells a story and every bite is a lasting memory.",
  "The finest restaurants offer an escape from the ordinary, a place where ambiance and flavors blend to create an unforgettable experience that lingers long after the last course has been savored.",
  "These distinguished locales are not just about sustenance; they are temples of taste, where the art of cooking is revered, and each meal is a celebration of the senses.",
  "A premier dining spot is a tapestry of sensations, weaving together exquisite tastes, enchanting aromas, and a warm atmosphere that makes every occasion special.",
  "Such esteemed eateries serve as culinary landmarks, etching their unique flavors and impeccable service into the hearts of all who visit.",
  "They are the jewels of gastronomy, where the passion for food and excellence in service create a dining experience that transcends the simple act of eating.",
  "These are the places where cuisine meets artistry, and every plate is a masterpiece, crafted with the utmost care and presented with flair.",
  "The crème de la crème of restaurants are those that offer a symphony of flavors, harmoniously combined to provide a meal that is as delightful to the palate as it is to the soul.",
  "They stand out as oases of culinary genius, where innovative dishes and classic techniques come together to form a menu that is both familiar and thrillingly new.",
  "These top-tier dining establishments are anchors of culture, reflecting the essence of their locale through food that is as rich in history as it is in taste.",

  "Libraries are not just repositories of books; they are sanctuaries of knowledge, where every shelf holds a universe waiting to be explored, and the silence is filled with the whispers of countless stories.",
  "Gardens are more than plots of earth; they are canvases of nature, where each flower is a brushstroke of color and every season paints a different masterpiece.",
  "Theaters are not mere buildings where plays are performed; they are gateways to other worlds, where the stage becomes a portal to adventures, emotions, and lives lived in the span of a few hours.",
  "Music venues resonate with more than sound; they are the heartbeats of melody, where rhythms and harmonies unite to create a language understood by all who listen.",
  "Museums are not just halls filled with artifacts; they are time machines, where history breathes and every exhibit tells a tale of human endeavor, creativity, and the march of civilizations.",
  "Schools are more than structures of learning; they are the forges of the future, where young minds are shaped and the leaders of tomorrow are molded through wisdom and discovery.",
  "Bridges are not simply structures that span distances; they are symbols of connection, linking places and people, and serving as monuments to human ingenuity and the desire to come together.",
  "Sports arenas are more than venues for competition; they are amphitheaters of passion, where every match is a saga of triumph and defeat, and the echoes of cheering fans linger long after the game.",
  "Art studios are not just workspaces for artists; they are wellsprings of creation, where inspiration is transformed into visual expressions that speak of emotions, dreams, and the human experience.",
  "Observatories are more than just windows to the stars; they are the lenses through which we gaze into the vastness of space, seeking to understand our place in the cosmos and the mysteries that lie beyond our world.",
];

const getRandomParagraph = () => {
  return paragraphs[Math.floor(Math.random() * paragraphs.length)].split(" ");
};

export {
  wpmTile,
  accuracyTile,
  timeTile,
  textAreaInput,
  textAreaText,
  getRandomParagraph,
  validInputKeys,
  resetButton,
  paragraphs,
  ignoredkeys,
  keys,
  punctuationOrSpace,
};
