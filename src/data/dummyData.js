import { List, Map } from "immutable";

const cardData = List([
  Map({
    id: 0,
    title: `Men's rights activists slams video game company over unreal hair expectations`,
    description: `'Moustache Mountain', a men's rights activist group who has become famous over the last few months for their notorious takes on the atrocities faced by men, have found their next scapegoat in the video game company Naughty Dog and their video game character Nathan Drake of the Uncharted franchise. They are furious about the fact that this character who jumps of mountains, boats and planes while shooting others in the face, somehow manages to keep his perfect hairstyle intact. "It's outrageous!" says Dozovic, a member of the group. "Me mates lost their hairline starting in their early 20s and this 30+ or something guy has hair that even a swim under water cannot dishevel". A lot of them believe this creates unreal expectations which is apparently why they are all still single.`,
    tags: ["Hair", "Rights"],
    image: "nathan.jpg",
    isLiked: true,
    isDisliked: false,
    isBookmarked: true
  }),
  Map({
    id: 1,
    title: "Youngster condemned for mocking blind lawyer who fights crime",
    description: `Gautham Lal has a blast from his past as a picture he posted on Facebook 2 years ago has come back to haunt him. The picture in question shows him acting to be blind in front of Daredevil, the alter-ego of Matt Murdock, a blind lawyer of the firm 'Nelson & Murdock'. Twitter went crazy when this picture resurfaced and have shamed the youngster for his act and demands an apology for disrespecting a man who does so much for the society. When reached for a statement Gautham said "It's a cosplayer! It's from Delhi Comic-con!". As he went on about the incident, he slowly broke down in tears. "I have been put to shame. My parents see me as an embarrassment. I got fired from my job...". It was brought to light later on that his parents dis-inherited him and kicked him out of the house.`,
    tags: ["Youth", "Blind lawyers"],
    image: "daredevil.jpg",
    isLiked: false,
    isDisliked: false,
    isBookmarked: false
  }),
  Map({
    id: 2,
    title: "Outrage as the top woman wrestler calls herself 'The Man'",
    description: `Becky Lynch, a professional wrestler working for WWE, is at an all time career high at the moment. A sudden surge in popularity has made her the fan favorite and she looks on to main-event this year's Wrestlemania. A lot of this has to do with her new on-screen personality where she calls herself 'The Man'. But a lot women's rights group have taken a issue with this. Karen, a member from one such group wrote on Twitter, "She should be calling herself 'The Woman' and show that our gender is not inferior". Becky has responded to similar statements before and repeated it over the weekend, "The top person in any industry has always been called 'The Man'. And for some case it has always been a man. By me calling myself 'The Man' I am showing that it has nothing to do with the gender. Anyone can be 'The  Man' of any industry."`,
    tags: ["WWE", "Becky"],
    image: "becky.jpg",
    isLiked: false,
    isDisliked: false,
    isBookmarked: false
  }),
  Map({
    id: 3,
    title:
      "Keeper refuses to get substituted. Coined to be the next Chelsea Manager",
    description: `Chelsea keeper Kepa Arrizabalaga seemed to have picked up an injury as the Carabao Cup final seemed to reach penalties when Chelsea manager Maurizio Sarri decided to get him substituted and not aggravate an injury and risk losing in the penalties. But things took a turn when Kepa refused to come off and started shouting at the manager 'No' over an over. Sarri stormed to the dugout visibily irate. The fans coined this as technical move from Kepa and already sees as him as the next manager of Chelsea. While some are worried about his place in the squad and urges him to "apologise and say Sarri or he will not get to be the Kepa again". It seems Kepa's debut managerial move was not so successful as Chelsea went on to lose in the penalties.`,
    tags: ["Football", "Chelsea"],
    image: "kepa.jpg",
    isLiked: false,
    isDisliked: false,
    isBookmarked: false
  }),
  Map({
    id: 4,
    title: "Facebook's open source JavaScript library React!",
    description:
      "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies as it is Open source software. It is mostly used for the development of single-page web and mobile applications. As React applications gets complex additional libraries are used for state management, routing and interacting with APIs. It works on the concept of a Virtual DOM. React makes changes to the virtual DOM and then updates the browser's DOM when needed. This allows the programmer to write code as if the entire page is rendered on each change, while the React libraries only render subcomponents that actually change. This is carried out by the fact that each and every part of the page can be constructed as a Component which helps in breaking down and solving the problem more efficiently.",
    tags: ["Programming", "JavaScript"],
    image: "react.jpg",
    isLiked: false,
    isDisliked: false,
    isBookmarked: false
  })
]);

export default cardData;
