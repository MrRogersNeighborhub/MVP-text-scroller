import React, { useState } from 'react';
import Title from './Title.jsx';
// import StoryTree from './story/storyTree.js';

const App = (props) => {
  const story = {
    1: {
      text: 'You awaken to find your mind is lingering on some flash of a dream you can\'t seem to remember, but there is some faint impression that something is missing. You consider bringing this feeling to your father, but then some part of you fears that, although he is someone that is well respsected, he might not have the answers you feel you need.',
      choices: [
        {
          text: 'Ask your father for words of wisdom',
          next: 2,
        },
        {
          text: 'Leave home for a life of poverty',
          next: 5,
        }
      ]
    },
    2: {
      text: 'Your father tells you, "By whomsoever no evil is done in deed, or word, or thought, him I call a holy man who is guarded in these three."',
      choices: [
        {
          text: 'Ask your father for something more',
          next: 3,
        },
        {
          text: 'Leave home for a life of poverty',
          next: 5,
        }
      ]
    },
    3: {
      text: 'Your father tells you, "One dwells in suffering if one is without reverence and deference."',
      choices: [
        {
          text: 'Ask your father for something more',
          next: 4,
        },
        {
          text: 'Leave home for a life of poverty',
          next: 5,
        }
      ]
    },
    4: {
      text: 'Your father tells you, "A wise man once asked the Blessed One, "Are you a God?" "No, wise man," said the Blessed One. "Are you a saint?" "No, wise man," said the Blessed One. "Are you a magician?" "No, wise man," said the Blessed One. "What are you then?" "I am awake.""',
      choices: [
        {
          text: 'Ask your father for something more',
          next: 2,
        },
        {
          text: 'Leave home for a life of poverty',
          next: 5,
        }
      ]
    },
    5: {
      text: 'You have this feeling that this unsettled yearning is something that words of wisdom cannot quiet. You tell your father that you cannot follow in his footsteps. You want to relinquish yourelf of all of these comforts and riches and try and find something deeper. Your father looks into your eyes. "Are you sure?", he asks.',
      choices: [
        {
          text: '"I\'m not sure."',
          next: 1,
        },
        {
          text: '"I think it\'s what I must do."',
          next: 6,
        }
      ]
    },
    6: {
      text: 'Your father smiles. "I have seen something growing in you for some time. I trust that this journey will talk to those things you could never speak. I love you." Your father brings you close and holds you for a moment. Some part of you says that you will never see him again, and this thought makes you cling to him for a moment longer. As you start to loosen your arms, you hear someone approaching. You turn to see your friend, Govinda. "Can I come with you?", he asks.',
      choices: [
        {
          text: '"Of course!"',
          next: 7
        }, { text: null }
      ]
    },
    7: {
      text: 'Time passes. It was difficult at first, begging for each of your meals. You missed the comforts of your home. You missed your father. But you have gained some small satiation in those hungers in your heart. Begging has taught you humility. One day, you and Govinda hear word of a man that has attained enlightenment. "This man, Gotama, has found the way.", Govinda tells you. "Maybe we should follow him?"',
      choices: [
        {
          text: 'You tell Govinda, "there is no knowledge in that man that I cannot find within myself." "I will renounce food until I find enlightenment.", you think to yourself',
          next: 7,
        },
        {
          text: '"I will accompany you on this path."',
          next: 8,
        }
      ]
    },
    8: {
      text: 'It is day 6 without food. You sit down to reflect. When you open your eyes again, you are laying on the ground, your head in Govinda\'s lap',
      choices: [
        {
          text: '"I will join you in following Gotama"',
          next: 9,
        }, { text: null }
      ]
    },
    9: {
      text: 'Following Gotama',
      choices: [
        {
          text: 'Seek answers through meditation',
          next: 10,
        },
        {
          text: 'Tell Govinda that you still yearn for something more.',
          next: 11,
        }
      ]
    },
    10: {
      text: 'After a month spent in deep meditation, you find you still have questions unanswered',
      choices: [
        {
          text: 'Tell Govinda that you still yern for something more.',
          next: 11,
        }, { text: null }
      ]
    },
    11: {
      text: 'Starting a life of physical pleasure',
      choices: [
        {
          text: 'You quickly realize this is not the path to enlightenment, and so, decide to leave and go back to Gotama.',
          next: 12,
        },
        {
          text: 'You spot an attractive woman and approach her.',
          next: 17,
        }
      ]
    },
    12: {
      text: 'You walk back to the river, back to Gotama, back to Govinda. While waiting for the ferryman, you sit next to the river. As you sit, you hear something. The sound is like speech, but you can\'t make out the words. You open your eyes and see that you are alone.',
      choices: [
        {
          text: 'You think to yourself, "am I going mad? How would I know?"',
          next: 13,
        },
        {
          text: 'Something feels wrong, maybe I should go back to the city and sleep this off.',
          next: 16,
        }
      ]
    },
    13: {
      text: 'You begin to walk back towards the city, but the voice only gets clearer. You think, "I must be going mad. I shouldn\'t go back. What if they put me to death? If my life as I know it is over, I want to be surrounded by beauty in my final moments."',
      choices: [
        {
          text: 'You walk to the top of the nearest mountain.',
          next: 14,
        },
        {
          text: 'You walk back to the river you first heard the voice.',
          next: 15,
        }
      ]
    },
    14: {
      text: 'The voice speaks to you again, but it\'s too late. You have already made your decision.',
      choices: [
        {
          text: 'You jump.',
          next: 'ending-one',
        }, { text: null }
      ]
    },
    15: {
      text: 'You hear the voice again, but the words are still unclear. You have made your decision.',
      choices: [
        {
          text: 'You jump into the water, and let the river take you away.',
          next: 'ending-two'
        }, { text: null }
      ]
    },
    16: {
      text: 'You go back to the city, and the woman that caught you eye when you first entered the city approaches you and says, "is there something I can do for you?"',
      choices: [
        {
          text: 'Tell her everything.',
          next: 17,
        }, { text: null }
      ]
    },
    17: {
      text: 'You start to tell the woman about where you have been, that you have been looking for enlightenment, but she quickly stops you. "What is wrong with enjoying this world around you?"',
      choices: [
        {
          text: 'You think to yourself, "maybe if I can persuade her into realizing there is more to life, maybe teaching will bring me some of the answers I seek."',
          next: 18,
        },
        {
          text: 'You think to yourself, "maybe there is some merit in that. Maybe there is something to be gained from pursuing a life of pleasure." You reply, "Is there something you want to teach me?"',
          next: 19,
        }
      ]
    },
    17: {
      text: 'She sends you away.',
      choices: [
        {}, {}
      ]
    },
    18: {
      text: 'A smile starts to sneak into the corners of her mouth. "You\'re going to need more money than a beggar has."',
      choices: [
        {
          text: 'Let\'s get a job!!'
        }, {}
      ]
    },
    // 19: {
    //   text: ,
    //   choices: [
    //     {}, {}
    //   ]
    // },
    // 20: {
    //   text: ,
    //   choices: [
    //     {}, {}
    //   ]
    // },
    // 21: {
    //   text: ,
    //   choices: [
    //     {}, {}
    //   ]
    // },
  }
  const [showTitle, setPage] = useState(true);
  const [currentPage, changePage] = useState(1);
  const [color, changeColor] = useState('lime');

  const handleChangePage = (value) => {
    changePage(value);
  }

  const continueStory = (e) => {
    setPage(false);
  }

  const handleChangeColor = (e) => {
    color === 'lime' ? changeColor('white') : changeColor('lime');
  }

  return (
    <div>
      <button
        style={ color === 'lime' ? { color: 'white' } : { color: 'lime' }}
        onClick={ handleChangeColor } >
          &#9673;
      </button>
      <div className="story" style={{color: color}} onClick={ continueStory }>
        { showTitle ? <Title /> : <h2>{ story[currentPage].text }</h2> }
        { showTitle ? null : <div style={{ cursor: 'pointer' }} onClick={ () => { handleChangePage(story[currentPage].choices[0].next) } }>
          { story[currentPage].choices[0].text }
        </div>}
        { showTitle ? null : story[currentPage].choices[1].text? <div style={{ cursor: 'pointer' }} onClick={ () => { handleChangePage(story[currentPage].choices[1].next) } }>
          { story[currentPage].choices[1].text }
        </div> : null }
      </div>
    </div>
  )
}

export default App;