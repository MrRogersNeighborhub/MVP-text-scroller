// class StoryTree {
//   constructor(page, value, next, altValue) {
//     this.page = page;
//     this.value = value;
//     this.altValue = altValue;
//     this.next =[];
//     this.nextPage = next;
//     this.count = 0;
//   }
// }

// const storyTree = new StoryTree(0, 'title');

// const pageOne = new StoryTree(1, 'Living with your father');
// storyTree.next.push(pageOne);
// const firstOptionforPageOne = new StoryTree(null, 'Gain knowledge from your father', 1);
// const secondOptionforPageOne = new StoryTree(null, 'Leave home for a life of asceticism', 2);
// pageOne.next.push(firstOptionforPageOne, secondOptionforPageOne);

// const pageTwo = new StoryTree(2, 'Living as a beggar');
// secondOptionforPageOne.next.push(pageTwo);
// const firstOptionforPageTwo = new StoryTree(null, 'Go back home', 1);
// const secondOptionforPageTwo = new StoryTree(null, 'Accept a life of no worldly possessions', 3);
// pageTwo.next.push(firstOptionforPageTwo, secondOptionforPageTwo);

// const pageThree = new StoryTree(3, 'Discover Gotama');
// secondOptionforPageTwo.next.push(pageThree);
// const firstOptionforPageThree = new StoryTree(null, 'Go on a hunger strike', 4, 'Stop living a life of asceticism and, instead, follow Gotama');
// pageThree.next.push(firstOptionforPageThree);

// const pageFour = new StoryTree(4, 'Following Gotama');
// firstOptionforPageThree.next.push(pageFour);
// const firstOptionforPageFour = new StoryTree(null, 'Seek answers through meditation', 4);
// const secondOptionforPageFour = new StoryTree(null, 'Leave your life following Gotama with your friend Govinda and take a ferry to the city to pursue a life of pleasure', 5);
// pageFour.next.push(firstOptionforPageFour, secondOptionforPageFour);

// const pageFive = new StoryTree(5, 'Starting a life of physical please');
// secondOptionforPageFour.next.push(pageFive);
// const firstOptionforPageFive = new StoryTree(null, 'Realize there can be no enlightenment in this life and return to your friend', 4);
// const secondOptionforPageFive = new StoryTree(null, 'Start a business as a merchant');
// pageFive.next.push(firstOptionforPageFive, secondOptionforPageFive);

// const pageSix = new StoryTree(6, 'Embracing a life of pleasure');
// secondOptionforPageFive.next.push(pageSix);
// const firstOptionforPageSix = new StoryTree(null, 'Find an opium den', /* Ending one, death in an opium den */);
// const secondOptionforPageSix = new StoryTree(null, 'Leave in the middle of the night', 7);
// pageSix.next.push(firstOptionforPageSix, secondOptionforPageSix);

// const pageSeven = new StoryTree(7, 'Awaken by the river');
// secondOptionforPageSix.next.push(pageSeven);
// const firstOptionforPageSeven = new StoryTree(null, 'Join your friend', /* Ending two, spend the rest of your life looking for nirvana with your friend */);
// const secondOptionforPageSeven = new StoryTree(null, 'Go back to the ferryman', 8);
// pageSeven.next.push(firstOptionforPageSeven, secondOptionforPageSeven);

// const pageEight = new StoryTree(8, 'Reconvening with the ferryman');
// secondOptionforPageSeven.next.push(pageEight);
// const firstOptionforPageEight = new StoryTree(null, 'Ask for the secret to happiness', 8);
// const secondOptionforPageEight = new StoryTree(null, 'Ask for work', 9);
// pageEight.next.push(firstOptionforPageEight, secondOptionforPageEight);

// const pageNine = new StoryTree(9, 'Reuniting with Kamala');
// secondOptionforPageEight.next.push(pageNine);
// const firstOptionforPageNine = new StoryTree(null, 'Take her son back to the city', /* Ending three, you raise your son, but he eventually leaves you */);
// const secondOptionforPageNine = new StoryTree(null, 'Raise your son by the river', 10);
// pageNine.next.push(firstOptionforPageNine, secondOptionforPageNine);

// const pageTen = new StoryTree(10, 'Your son steals your belongings and leaves in the night');
// secondOptionforPageNine.next.push(pageTen);
// const firstOptionforPageTen = new StoryTree(null, 'You can never stop searching for your son', /* Ending three, you find and raise your son, but he eventually leaves you */);
// const secondOptionforPageTen = new StoryTree(null, 'You realize that chasing your son would be futile, so you stay by with the river', 11);
// pageTen.next.push(firstOptionforPageTen, secondOptionforPageTen);

// const pageEleven = new StoryTree(11, 'Living as a ferryman');
// secondOptionforPageTen.next.push(pageEleven);
// const firstOptionforPageEleven = new StoryTree(null, 'Tell your friend the secret of nirvana');
// const secondOptionforPageEleven = new StoryTree(null, 'Tell your friend to kiss your forehead');
// pageEleven.next.push(firstOptionforPageEleven, secondOptionforPageEleven);



// module.export = {
//   storyTree,
// }