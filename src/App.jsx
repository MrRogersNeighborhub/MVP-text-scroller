import React, { useState } from 'react';
import Title from './pages/Title.jsx';
// import StoryTree from './story/storyTree.js';

const App = (props) => {
  const story = {
    1: {
      text: 'Living with your father',
      choices: [
        {
          text: 'Ask your father for words of wisdom',
          next: 2,
        },
        {
          text: 'Leave home for a life of asceticism',
          next: 5,
        }
      ]
    },
    2: {
      text: 'Your father tells you, "One dwells in suffering if one is without reverence and deference".',
      choices: [
        {
          text: 'Ask your father for words of wisdom',
          next: 3,
        },
        {
          text: 'Leave home for a life of asceticism',
          next: 5,
        }
      ]
    },
    3: {
      text: 'Your father tells you, "A Brahmin once asked the Blessed One, "Are you a God?" "No, Brahmin," said the Blessed One. "Are you a saint?" "No, Brahmin," said the Blessed One. "Are you a magician?" "No, Brahmin," said the Blessed One. "What are you then?" "I am awake.""',
      choices: [
        {
          text: 'Ask your father for words of wisdom',
          next: 4,
        },
        {
          text: 'Leave home for a life of asceticism',
          next: 5,
        }
      ]
    },
    4: {
      text: 'Your father tells you, "By whomsoever no evil is done in deed, or word, or thought, him I call a holy man who is guarded in these three."',
      choices: [
        {
          text: 'Ask your father for words of wisdom',
          next: 2,
        },
        {
          text: 'Leave home for a life of asceticism',
          next: 5,
        }
      ]
    },
    5: {
      text: 'Living as a beggar',
      choices: [
        {
          text: 'Go back home',
          next: 1,
        },
        {
          text: 'Accept a life of no worldly possessions',
          next: 6,
        }
      ]
    },
    6: {
      text: 'Learn of Gotama',
      choices: [
        {
          text: 'You think to yourself, "there is no knowledge in that man that I cannot find within myself. I will renounce food until I find enlightenment."',
          next: 7,
        },
        {
          text: '"I will accompany you on this path."',
          next: 8,
        }
      ]
    },
    7: {
      text: 'Day 6 of your hunger strike, you are taking time to reflect through meditation. When you open your eyes again, you are laying on the ground, your head in Govinda\'s lap',
      choices: [
        {
          text: '"I will join you in following Gotama"',
          next: 8,
        },
        {
          text: null
        }
      ]
    },
    8: {
      text: 'Following Gotama',
      choices: [
        {
          text: 'Seek answers threw meditation',
          next: 9,
        },
        {
          text: 'Tell Govinda that you still yern for something more.',
          next: 10,
        }
      ]
    },
    9: {
      text: 'After a month spent in deep meditation, you find you still have questions unanswered',
      choices: [
        {
          text: 'Tell Govinda that you still yern for something more.',
          next: 10,
        }
      ]
    },
    // 6: {
    //   text: ,
    //   choices: []
    // },
    // 7: {
    //   text: ,
    //   choices: []
    // },
    // 8: {
    //   text: ,
    //   choices: []
    // },
    // 9: {
    //   text: ,
    //   choices: []
    // },
    // 10: {
    //   text: ,
    //   choices: []
    // },
    // 11: {
    //   text: ,
    //   choices: []
    // }
    // 1: {
    //   text: 'This is a test',
    //   choices: [
    //     {
    //       text: 'Is this working?',
    //       next: 2
    //     },
    //     {
    //       text: 'This is working!',
    //       next: 3
    //     }
    //   ]
    // },
    // 2: {
    //   text: 'We did it!!',
    //   choices: [
    //     {
    //       text: 'Is this working?',
    //       next: 2
    //     },
    //     {
    //       text: 'This is working!',
    //       next: 3
    //     }
    //   ]
    // },
    // 3: {
    //   text: 'We still did it!!',
    //   choices: [
    //     {
    //       text: 'Is this working?',
    //       next: 2
    //     },
    //     {
    //       text: 'This is working!',
    //       next: 3
    //     }
    //   ]
    // }
  }
  const [showTitle, setPage] = useState(true);
  const [currentPage, changePage] = useState(1);

  const handleChangePage = (value) => {
    changePage(value);
  }

  const continueStory = (e) => {
    setPage(false);
  }

  return (
    <div>
      <div onClick={ continueStory }>
        { showTitle ? <Title /> : <p>{ story[currentPage].text }</p> }
        { showTitle ? null : <div onClick={ () => { handleChangePage(story[currentPage].choices[0].next) } }>
          { story[currentPage].choices[0].text }
        </div>}
        { showTitle ? null : story[currentPage].choices[1].text? <div onClick={ () => { handleChangePage(story[currentPage].choices[1].next) } }>
          { story[currentPage].choices[1].text }
        </div> : null }
      </div>
    </div>
  )
}

export default App;