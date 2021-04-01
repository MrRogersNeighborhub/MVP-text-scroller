import React, { useState } from 'react';

const App = (props) => {
  const story = {
    'title': {
      text: 'Welcome to Siddhartha!',
      choices: [
        {
          text: '[Click here to continue]',
          next: 1,
        }, { text: null }
      ]
    },
    1: {
      text: 'You awaken to find your mind is lingering on some flash of a dream you can\'t seem to remember, but there is some faint impression that something is missing. You consider bringing this feeling to your father.',
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
      text: 'You have this feeling that this unsettled yearning is something that words of wisdom cannot quiet. You tell your father that you cannot follow in his footsteps, cannot become one of the local wise men. You want to relinquish yourelf of all of the comforts and riches he has afforded you and try and find something deeper. Your father looks into your eyes. "Are you sure," he asks.',
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
      text: 'Your father smiles. "I have seen something growing in you for some time. I trust that this journey will talk to those things you could never speak. I love you." Your father brings you close and holds you for a moment. Some part of you says that you will never see him again, and this thought makes you cling to him for a moment longer. As you start to loosen your arms, you hear someone approaching. You turn to see your friend, Govinda. "Can I come with you," he asks.',
      choices: [
        {
          text: '"Of course!"',
          next: 7
        }, { text: null }
      ]
    },
    7: {
      text: 'Time passes. It was difficult at first, begging for each of your meals. You missed the comforts of your home. You missed your father. But you have gained some small satiation for the hungers in your heart. You have found companionship among the other monks. Begging has taught you humility. One day, you and Govinda hear word of a man that has attained enlightenment. "This man, Gotama, has found the way," Govinda tells you. "Maybe we should follow him?"',
      choices: [
        {
          text: 'You tell Govinda, "there is no knowledge in that man that I cannot find within myself."',
          next: 7,
        },
        {
          text: '"I will accompany you on this path."',
          next: 9,
        }
      ]
    },
    8: {
      text: 'You think to yourself, "I will renounce food. Maybe that will lead me towards enlightenment." You reach day 6 without food. You sit down to reflect. When you open your eyes again, you are laying on the ground, your head in Govinda\'s lap',
      choices: [
        {
          text: '"I will join you in following Gotama"',
          next: 9,
        }, { text: null }
      ]
    },
    9: {
      text: 'You and Govinda find the group following Gotama and join them. Gotama\'s teachings are insightful, and you feel your spiritual self growing. But as time passes, you start to find contradictions in Gotama\'s teachings.',
      choices: [
        {
          text: 'Seek answers through meditation',
          next: 10,
        },
        {
          text: 'Tell Govinda that you yearn for something more',
          next: 11,
        }
      ]
    },
    10: {
      text: 'After a month spent in deep meditation, you find you still have questions unanswered',
      choices: [
        {
          text: 'You tell Govinda that you still yearn for something more',
          next: 11,
        }, { text: null }
      ]
    },
    11: {
      text: 'You leave Gotama and Govinda. You find a ferryman that can take you across the river, towards the city. You graciously accept his offer and climb aboard. As you cross the river, you cannot help but notice that the ferryman radiates contentness. You arrive at the other side of the river, thank the ferryman, and make your way into the city.',
      choices: [
        {
          text: 'You see an attractive woman starring seductively in yout direction. You think to yourself, "there can be no path to enlightenment here. You decide to return to Govinda, to Gotama.',
          next: 12,
        },
        {
          text: 'You see an attractive woman and approach her',
          next: 17,
        }
      ]
    },
    12: {
      text: 'You walk back to the river. While waiting for the ferryman, you sit next to the river. As you sit, you hear something. It is the faint sound of words, but you can\'t make them out. You open your eyes and see that you are alone.',
      choices: [
        {
          text: 'You think to yourself, "am I going mad? How would I know?"',
          next: 13,
        },
        {
          text: 'You think to yourself, "something feels wrong, maybe I should go back to the city and sleep this off."',
          next: 16,
        }
      ]
    },
    13: {
      text: 'You begin to walk back towards the city, but the voice gets clearer. You think, "I must be going mad. I shouldn\'t go back. What if they put me to death? If my life as I know it is over, I want to be surrounded by beauty in my final moments."',
      choices: [
        {
          text: 'You walk to the top of the nearest mountain',
          next: 14,
        },
        {
          text: 'You walk back to the river you first heard the voice',
          next: 15,
        }
      ]
    },
    14: {
      text: 'The voice speaks to you again, but it\'s too late. You have already made your decision.',
      choices: [
        {
          text: 'You jump',
          next: 'ending-one',
        }, { text: null }
      ]
    },
    'ending-one': {
      text: 'As you fall to ground below, you close your eyes. You suddently feel a gust of wind. Suddenly, you feel the warmth of ground below you. When you open your eyes, you find that you have been miracelously blown back up to the top of the mountain. You hear the voice clearly now, and decide to share with the wisdom of the voice with the rest of the world.',
      choices: [
        {
          text: 'GAME OVER',
          next: null,
        },
        {
          text: '[Restart]',
          next: 'title',
        }
      ]
    },
    15: {
      text: 'You hear the voice again, but the words are still unclear. You have made your decision.',
      choices: [
        {
          text: 'You jump into the water, and let the river take you away',
          next: 'ending-two'
        }, { text: null }
      ]
    },
    'ending-two': {
      text: 'As the river washes over you, your mind flashes back to that woman in the city, to Govinda, to your father. You grasp your final breath before sinking into an unknown darkness.',
      choices: [
        {
          text: 'GAME OVER',
          next: null,
        },
        {
          text: '[Restart]',
          next: 'title',
        }
      ]
    },
    16: {
      text: 'You go back to the city, and the woman that caught you eye when you first entered the city approaches you and says, "is there something I can do for you?"',
      choices: [
        {
          text: 'Tell her everything',
          next: 17,
        }, { text: null }
      ]
    },
    17: {
      text: 'You start to tell the woman about where you have been, that you have been looking for answers, but she quickly stops you. "What is wrong with enjoying this world around you?"',
      choices: [
        {
          text: 'You think to yourself, "maybe if I can persuade her into realizing there is more to life, maybe teaching will bring me some of the answers I seek."',
          next: 18,
        },
        {
          text: 'You think to yourself, "maybe there is some merit in that. Maybe there is something to be gained from pursuing a life of pleasure." You reply, "How?"',
          next: 19,
        }
      ]
    },
    18: {
      text: '"Have you considered what more there is to this existence?" She sends you away.',
      choices: [
        {
          text: 'Try again?',
          next: 19
        }, { text: null }
      ]
    },
    19: {
      text: '"I\'m sorry," you tell her.',
      choices: [
        {
          text: '"Can you show me what it means to enjoy this world?"',
          next: 20
        }, { text: null }
      ]
    },
    20: {
      text: 'A smile sneaks into the corners of her mouth. "You\'re going to need more money than a beggar has."',
      choices: [
        {
          text: 'Tell her, "Then I will get however much money is required."',
          next: 21,
        },
        {
          text: '"How much is required," you ask',
          next: 21,
        }
      ]
    },
    21: {
      text: 'You take a job working for a sea merchant. After a few weeks of hard work, you return to the woman with money resting in the pocket of your tailored clothes. She tells you her name is Kamala and invites you inside.',
      choices: [
        {
          text: 'Continue...',
          next: 22,
        }, { text: null }
      ]
    },
    22: {
      text: 'As time passes, you visit Kamala less often. You have become a wealthy merchant. You have grown to enjoy gambling and liquor and make less time to visit her.',
      choices: [
        {
          text: 'You have heard of a new earthly pleasure and decide to seek it out',
          next: 'ending-three',
        },
        {
          text: 'You feel you have lost touch with the hunger in your heart and decide to leave all of this behind',
          next: 23,
        }
      ]
    },
    'ending-three': {
      text: 'You walk into a building. The air is heavy with a smell you have never smelt before. An old man hands you a pipe and a small bowl. A woman lights the pipe and the world melts away.',
      choices: [
        {
          text: 'GAME OVER',
          next: null,
        },
        {
          text: '[Restart]',
          next: 'title',
        }
      ]
    },
    23: {
      text: 'Ashamed of the person you have become, you leave the city in the middle of the night. You head towards the river and sit next to it for a moment.',
      choices: [
        {
          text: 'You cannot stand to see another day, and so, you throw yourself into the water',
          next: 'ending-two',
        },
        {
          text: 'Your mind feels trouble so you decided to lay down',
          next: 24,
        }
      ]
    },
    24: {
      text: 'When you open your eyes, you realize that you must have fallen asleep. Someone says, "are you alright?" The voice is familiar. You open your eyes to find Govinda looking back at you. "I came across you in the night, and decided to watch over you, and protect you from any wild animals," he says.',
      choices: [
        {
          text: '"Govinda, it\'s me! Siddhartha!"',
          next: 25,
        }, { text: null }
      ]
    },
    25: {
      text: '"You are a wealthy man now?," he asks. "I am nothing anymore," you say. "You should join us," he says. "Gotama is a very wise man."',
      choices: [
        {
          text: 'Tell Govinda you cannot join him. You have seen what that path has to teach, and you need something more.',
          next: 26,
        }, { text: null }
      ]
    },
    26: {
      text: '"Then I must go. Take care, dear friend." Govinda rises to his feet, and rejoins his companions.',
      choices: [
        {
          text: 'Still feeling lost, you wait for Govinda to disappear from your viewpoint, before rolling into the river.',
          next: 'ending-two',
        },
        {
          text: 'You take a moment, and recall the ferryman you met some years ago. You remember the way he radiated happiness. You stand and decide to find him.',
          next: 27,
        }
      ]
    },
    27: {
      text: 'You find the ferryman. He introduces himself as Vasudeva. You tell Vasudeva that you wish to find the happiness you see in him. He tells you he has obtained a great sense of peace from studying the river.',
      choices: [
        {
          text: 'Ask him if he can help you study the river',
          next: 28,
        }, { text: null }
      ]
    },
    28: {
      text: 'Years pass. You start to gain a spiritual enlightenment like you have never experienced before. One day, while sitting next to the river, you hear the river\'s voice clearly.',
      choices: [
        {
          text: 'Om',
          next: 29,
        }, { text: null }
      ]
    },
    29: {
      text: 'You are now an old man who sees that all forms of life are interconnected in a cycle without beginning or end. Life and death, joy and sorrow, good and evil are all parts of the whole and are necessary to understand the meaning of life. One day, Govinda returns. He tells you that he heard there is a man that lives by the river that has reached enlightenment.',
      choices: [
        {
          text: 'Tell him that there is no one person that can tell him the secret to enlightenment. Then, ask him to kiss your forehead.',
          next: 'final-ending',
        },
        {
          text: 'Tell him the secret to enlightenment.',
          next: 'prompt',
        }
      ]
    },
    'final-ending': {
      text: 'Upon kissing your forehead, a perfect image of unity overwhelms Govinda\'s mind. You both sit in peace by the river, finally having reached enlightenment.',
      choices: [
        {
          text: 'GAME OVER',
          next: null,
        },
        {
          text: '[Restart]',
          next: 'title',
        }
      ]
    },
    'prompt': {
      text: null,
      choices: [
        {
          next: null
        }, { text: null }
      ]
    }
  }

  const [currentPage, changePage] = useState('title');
  const [color, changeColor] = useState('lime');

  const handleChangePage = (value) => {
    changePage(value);
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
      <div
        className="story"
        style={{color: color}}>
          { currentPage === 'prompt' ? <div>testing</div> : null }
            { currentPage === 'title' ?
              <h1 style={{ cursor: 'default' }}>{ story[currentPage].text }</h1> :
              <h3 style={{ cursor: 'default' }}>{ story[currentPage].text }</h3>
            }
            { console.log(currentPage) }
            <br></br>
            { story[currentPage].choices[0].next ?
              <div
                style={{ cursor: 'pointer' }}
                onClick={ () => { handleChangePage(story[currentPage].choices[0].next) } }>
                  { story[currentPage].choices[0].text }
              </div> :
              <div
                style={{ cursor: 'default' }}>
                { story[currentPage].choices[0].text }
              </div>
            }
            <br></br>
            { story[currentPage].choices[1].text ?
              <div
                style={{ cursor: 'pointer' }}
                onClick={ () => { handleChangePage(story[currentPage].choices[1].next) } }>
                  { story[currentPage].choices[1].text }
              </div> :
              null
            }
      </div>
    </div>
  )
}

export default App;