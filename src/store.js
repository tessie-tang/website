import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // HOME
    home: {
      base_url: 'https://tessietang-1255766843.cos.na-ashburn.myqcloud.com/tessietang.com/home',
      cover: 'cover.jpg',
      projects: [
        {
          base_url: 'https://tessietang-1255766843.cos.na-ashburn.myqcloud.com/tessietang.com/pkchem',
          cover: 'cover.jpg',
          url: '/project/pkchem',
          title: 'PKchem Factory Safety Management System (SMS)',
          description: 'Product Design / April 22 - Present'
        },
        {
          base_url: 'https://tessietang-1255766843.cos.na-ashburn.myqcloud.com/tessietang.com/shanghai',
          cover: 'cover.jpg',
          url: '/project/shanghai',
          title: 'SeeDAO Metaverse ShangHai City',
          description: 'Product Design / April 22 - August 22'
        },
        {
          base_url: 'https://tessietang-1255766843.cos.na-ashburn.myqcloud.com/tessietang.com/museum',
          cover: 'cover.jpg',
          url: '/project/museum',
          title: 'Palace Museum Educational AR Game',
          description: 'Product Design / February 22 - April 22'
        }
      ]
    },
    // HEADER
    header: {
      menus: [
        {
          title: 'Portfolio',
          url: '/'
        },
        {
          title: 'Resume',
          url: ''
        },
        {
          title: 'About',
          url: '/#/about'
        }
      ]
    },
    // PKCHEM
    pkchem: {
      base_url: 'https://tessietang-1255766843.cos.na-ashburn.myqcloud.com/tessietang.com/pkchem',
      // COVER
      cover: {
        slogan: 'Affordable chemical production SMS designed for small factories with legacy systems',
        title: 'PKchem Factory Safety Management System (SMS)',
        base_url: 'https://tessietang-1255766843.cos.na-ashburn.myqcloud.com/tessietang.com/pkchem',
        image: 'cover.jpg',
        nda: 'PKchem Engineering',
        overview: [
          [
            {
              title: 'Duration',
              description: 'April 22 - Present'
            },
            {
              title: 'Tools',
              description: 'Figma, Jira'
            }
          ],
          [
            {
              title: 'Company',
              description: 'PKchem Engineering'
            }
          ],
          [
            {
              title: 'My Role',
              description: 'I am currently responsible for creating the end-to-end UX design of a safety inspection management platform that utilizes NFC and GPS technologies.'
            }
          ]
        ]
      },
      // OVERVIEW
      overview: {
        h1: 'Overview: Safety Inspection in China',
        p1: 'China\'s industrial accident and death rates are among the <strong class="orange">highest in the world</strong>, killing more than 30,000+ people yearly. (2018, National Bureau of Statistics) Our petrochemical experts estimated that, in China, at least 10,000+ small and medium size chemical factories are <strong class="orange">operating without routine safety inspections.</strong> Those factories pose significant risks to their workers, neighboring residents, and the environment.',
        img1: [
          {
            title: 'Natural Disaster',
            url: 'natural_disaster.jpg'
          },
          {
            title: 'Chemical Leak',
            url: 'chemical_spill.jpg'
          },
          {
            title: 'Corrosion',
            url: 'corrosion.jpg'
          }
        ],
        h2: 'Factories on Tight Budget 💸',
        p2: 'To address this issue, in 2016, Chinese national legislators introduced a series of laws to ensure essential safety inspections are performed in every chemical factory. To legally operate, <strong class="orange">each factory has to upload the latest inspection results</strong> to the National Energy Commission\'s database weekly. Yet, most factories fail to compile as they operate on thin profit margins 😰 and are incentivized to <strong class="orange">upload fake data - "cook the books."</strong>',
        note2: '<strong>NOTE 📝: </strong>complies with safety regulations = weekly inspection data + signature + proof of presence',
        h3: 'Goal 🎯',
        p3_a: 'The project started with a request from our consulting team to develop <strong class="orange">an industrial productivity app</strong> for safety inspectors who walk around the factory with paper and pencils. They wanted an app that:',
        img3_a: 'overview_equation_a.jpg',
        p3_b: 'Though, as a product designer, I want people who use the tool daily to feel productive and happy. So I set my product goals also to include <strong class="orange">user experience</strong>:',
        img3_b: 'overview_equation_b.jpg',
        h4: 'Solution ✔️',
        list4: [
          'Use GPS and NFC for factory floor plan guide and inspection signature',
          'Build control panel website for managers to assign inspection tasks and monitor data',
          'Create a mobile app that uses GPS+NFC technologies to assist routine inspection',
          'Utilize algorithm to generate inspection routes that reduce travel distance for inspectors.'
        ]
      },
      // RESEARCH PROCESS
      research_process: {
        // H1
        h1: 'On-Site Research 🛫',
        p1: 'To better understand our clients, I traveled with our consulting team to <strong class="orange">3 factories in Shanxi (山西) and Guizhou (贵州)</strong> and lived in the factories for a week.',
        img1: [
          [
            'research_visit_1.jpg',
            'research_visit_2.jpg'
          ],
          [
            'research_visit_3.jpg',
            'research_visit_4.jpg'
          ],
          [
            'research_visit_5.jpg'
          ]
        ],
        // H2
        h2: 'Understand the Job 💼',
        p2: 'Designing the app starts with understanding the nature of a safety inspector\'s job. From reading instruction manuals, going through training materials, and interviewing experts from our safety consulting team, <strong class="orange">I identified the following responsibilities of a safety inspector and manager</strong>:',
        compare2: {
          inspector: {
            title: 'Safety Inspector 👷',
            list: [
              'Record readings of different mechanical meters',
              'Smell for chemical & gas leakage',
              'Check for safety hazards such as wet floor',
              'Check if all tools/valves/switches are placed correctly',
              'Check all protective gears (ex. safety goggles)'
            ]
          },
          manager: {
            title: 'Manager 🧑‍💻',
            list: [
              'Assign safety inspection tasks',
              'Check if all safety inspections are completed on time',
              'Check for safety hazards from inspection results',
              'Deal with safety hazards once identified',
              'Sign and report inspection results to supervisors'
            ]
          }
        },
        // H3
        h3: 'Experience the Job ❤️',
        note3: '<strong>NOTE 📝: </strong>Employees\' experience of doing a job is often neglected when designing a productivity tool. The lack of user understanding introduces unnecessary work that frustrates users 😥 and slows productivity 📉.',
        p3: 'To better empathize with safety inspectors, <strong class="orange">I volunteered to work as an "assistant inspector" for three days</strong>. I followed two safety inspectors during their shifts, observing their actions, interviewing them along the way, and performing some basic inspection tasks myself. <strong class="orange">I also interviewed managers from all three factories I visited</strong>, trying to understand their routine and pain points.',
        img3: [
          'research_experience_1.jpg',
          'research_experience_2.jpg',
          'research_experience_3.jpg'
        ],
        interviews3: {
          title: 'Some interview transcripts that inspired us:',
          list: [
            {
              author: 'Inspector A',
              content: '<strong class="gray">Doing this job is like running a marathon</strong>. Everyday, we climb stairs and ladders; We also do a lot of walking, getting from one building to another. Some buildings are almost a kilometer apart (0.62 miles)'
            },
            {
              author: 'Manager A',
              content: 'Walking around the factory is just a tiny part of the job. <strong class="gray">You then need signatures from a whole bunch of people</strong>: your manager, group leader, the outside audit... 🤦 That is required by law.'
            },
            {
              author: 'Inspector B',
              content: 'It would be wonderful to have all these data digitized. Look at all these paper reports. <strong class="gray">It takes hours to go through.</strong>'
            }
          ]
        },
        // H4
        h4: 'Understand the Competitive Landscape 🔭',
        p4: 'Industrial software is often not available to the public. To better understand our competitors\' solutions, <strong class="orange">our consulting team and I attended Huawei and its partners\' smart factory open house events</strong>, listening to presentations, learning their design, and getting some on-hands experience with their products.',
        features4: {
          title: 'Some features they provided:',
          list: [
            {
              title: '🕑 Clock-in System',
              content: 'Use GPS devices, Bluetooth/Infrared beacon, and AI powered surveillance camera to track inspector\'s movement.',
              img: 'clock_in.jpg',
              img_description: 'Bluetooth Scanner with Checkpoint Beacon'
            },
            {
              title: '🔐 Regulation Compliance',
              content: 'Use face recognition or finger print to digitally sign inspection data',
              img: 'regulation.jpg',
              img_description: 'Fingerprint Reader for Authentication'
            },
            {
              title: '📊 Data Management',
              content: 'Most software vendors have dedicated software for Windows system that shows basic inspection data. They don\'t have software for task assignment or inspection route optimization.',
              img: 'features_data_management.jpg',
              img_description: 'Windows Inspection Management System'
            }
          ]
        },
        takeaways4: {
          title: 'Key Takeaways form Our Visits:',
          list: [
            'Functionally ⚙️ -> Most vendors only focus on regulation compliance with features like digital signature and inspection tracking.',
            'Cost 💰 -> Their solutions have dedicated hardware (especially the tracking beacons) and proprietary AI that makes the system <strong class="orange">unaffordable to deploy in a large factory</strong>.'
          ]
        },
        // H5
        h5: 'Survey 📝',
        p5: 'We structured a survey for safety inspectors for researching different parts of the job of safety inspection. We collected 25 samples in total.',
        img5: 'research_survey.jpg',
        img5_description: 'Safety Inspector Survey Results',
        question_aspects5: {
          title: 'The survey covered questions in the following aspects:',
          list: [
            'Technology Usage',
            'Satisfaction Level',
            'Work Intensity',
            'Emotional Feelings'
          ]
        },
        key_findings5: {
          title: 'Some Key Findings:',
          list: [
            `<strong>📱 Technology Usage:</strong> 52% of them have little to no experience with management software.`,
            `<strong>🏃🏻‍♀️Physically Intensive:</strong> 48% of them think that their inspection route is unnecessarily long.`,
            `<strong>📚 Instruction Manual:</strong> 80% of them think that instruction manuals are essential during their shift.`,
            `<strong>📅 Job Experience:</strong> 72% of them have a job experience that is less than one year. Some work part-time.`
          ]
        }
      },
      // INSIGHTS
      insights: {
        // h1
        h1: 'User Journey 🚶',
        p1: 'After I collected and neatened our interview data, I created a <strong class="orange">user journey map</strong> to unfold how users react to different stages of a typical safety inspection shift. We found frustrations at almost every step of the work routine, <strong class="orange">mainly due to inefficiency and unnecessary work</strong>.',
        img1: 'user_journey.jpg',
        // h2
        h2: 'Translating Insights into Features',
        p2: 'Learning from our research findings, I organized several cross-functional design meetings with our consulting & engineering team to <strong class="orange">inform everyone about my findings and brainstorm ideas</strong>. We identified major user pain points within two weeks and translated them into potential features.',
        img2: 'user_need.jpg'
      },
      // DESIGN PROCESS
      design_process: {
        // h1
        h1: 'Design Process',
        // h2
        h2: 'Understand NFC 📶',
        p2: 'NFC stickers are cheap, so we bought 100 of them for $7. We tested out the functionalities that NFC technology provides. We learned that we could write data to each NFC sticker, and a phone with an NFC reader could pick up the data by just tapping on it. From this experiment, we learned that <strong class="orange">we could use NFC as an entry point for our user experience.</strong> Also, GPS location tracking lets us know if an NFC sticker has been moved to another location.',
        // h3
        h3: 'Information Architecture 🗺️',
        p3: 'I created the information architecture for both the safety inspector\'s app and the manager\'s web control panel. The flows outlined the different screens and features I would need to create wireframes for.',
        img3: 'info_architecture.jpg',
        // h4
        h4: 'Paper Prototype ✏️',
        p4: 'In the initial design phase, I started iterating my wireframe designs on paper. For each iteration, I conduct preliminary usability testing and improve my design based on user feedback on the <strong class="orange">usability, accessibility, and discoverability</strong> of the low-fidelity prototype.',
        // h5
        h5: 'Design the Safety Inspector App 📱',
        p5: 'After prototyping, I focused my attention on the UX design of the app client, translating my paper prototype into <strong class="orange">high-fidelity wireframes</strong>. With the help of our consulting team, I tested the wireframes with three workers in a factory setting and iterated on the design based on user preferences for information extraction, visual appeal, and working habits.',
        feature5: {
          title: 'Some Features the App Offers:',
          list: [
            {
              title: 'Home Screen & NFC Scan',
              content: 'Display tasks (bottom) and quick action buttons (top) on the home screen. Scan NFC tags with a single tap or shake the phone 👋.',
              img: 'demo_1.jpg'
            },
            {
              title: 'Task Documents & Community Support',
              content: 'Each task has rich documentation (text, images, videos, contacts). You can also get help from co-workers in the comment section 📝.',
              img: 'demo_2.jpg'
            },
            {
              title: 'Contact & Chat',
              content: 'You can directly contact your supervisor and co-workers from an organizational contact list for help and support 💬.',
              img: 'demo_3.jpg'
            },
            {
              title: 'Authorization',
              content: 'Use face recognition to sign safety inspection documents that comply with safety regulations 🔐.',
              img: 'demo_4.jpg'
            }
          ]
        }
      },
      next_step: {
        title: 'Next Step: Design the Manager Web Panel ⏩',
        content: 'This project is a continuing project, and I will be working with my team to hit the target of launching the PKchem NFC+GPS Factory Safety Management System (SMS) in <strong class="orange">April 2023</strong>  🎯. I will be updating our teams\' progress once there\'s any progress.'
      },
      takeways: {
        title: 'Takeaways',
        list: [
          {
            title: 'Experience is the best teacher 👩🏻‍🏫',
            content: 'I learned a lot from being in the factory and following our users in their work routine. <strong class="orange">Experience what the user experience</strong> is a useful tool for capturing many insights about the user. You can observe a lot of details about the user\'s story than you simply just interview them.'
          },
          {
            title: 'Team Collaboration 👥',
            content: 'Working on a project with different stakeholders with diverse backgrounds, I learned that it is crucial to <strong class="orange">do your homework</strong> and understand their needs and pain points before you start your design meetings. It will avoid a lot of conflicts and unnecessary communications.'
          }
        ]
      }
    },
    // SHANGHAI
    shanghai: {
      base_url: 'https://tessietang-1255766843.cos.na-ashburn.myqcloud.com/tessietang.com/shanghai',
      // COVER
      cover: {
        slogan: 'Explore life in a virtual city as a digital citizen during COVID-19 lockdown.',
        title: 'SeeDAO Metaverse ShangHai City',
        base_url: 'https://tessietang-1255766843.cos.na-ashburn.myqcloud.com/tessietang.com/shanghai',
        image: 'cover.jpg',
        nda: 'SeeDAO LLC',
        overview: [
          [
            {
              title: 'Duration',
              description: 'April 22 - August 22'
            },
            {
              title: 'Tools',
              description: 'Figma, Jira, WebGL, VueJS, ArcGIS'
            }
          ],
          [
            {
              title: 'Company',
              description: 'This project is incubated by SeeDAO, an NFT and blockchain incubator with an evaluation of $30 million (2021).'
            }
          ],
          [
            {
              title: 'My Role',
              description: 'I worked as the sole product designer + researcher at SeeDAO. I also did some software development work.'
            }
          ]
        ]
      },
      // OVERVIEW
      overview: {
        // H1
        h1: 'Overview: the COVID Lockdown 😷',
        p1: 'Shanghai, the largest city in China, was in total lockdown in April 2022 due to rising COVID-19 cases. Twenty-five million Shanghai citizens were <strong class="blue">forced to stay home for months</strong> as city officials banned all social and economic activities as part of China\'s "zero-COVID" policy. People were frustrated by the months long lockdown. As a result, <strong class="blue">anger 😡 and anxiety 😰</strong> flooded social medias online.',
        img1: [
          {
            title: 'Locked at Home',
            url: 'overview_home.jpg'
          },
          {
            title: 'Rising Food Prices',
            url: 'overview_food.jpg'
          },
          {
            title: 'Empty Streets',
            url: 'overview_empty_street.jpg'
          }
        ],
        // H2
        h2: 'Inspiration 💡',
        p2: 'The project started from a comment from BaiYu, our product manager, who looked at the empty streets outside and wished that, in a virtual ShangHai, he could go to a nightclub <strong class="blue">like the pandemic never happened.</strong>',
        img2: {
          url: 'inspiration.jpg',
          description: 'Photo by BaiYu During Partial Lockdown'
        },
        // H3
        h3: 'Goal 🎯',
        p3: 'Create a virtual online city where people can distract themselves from the frustrating reality and immerse themselves in a <strong class="blue">virtual world full of hope and freedom 🕊️</strong>.',
        // H4
        h4: 'Solution ✔️',
        list4: [
          'Create a beautiful virtual ShangHai city landscape',
          'Build online space for virtual cultural & social events',
          'Give users creative freedom to change the city\'s outlook'
        ]
      },
      // TIMELINE
      timeline: {
        h1: 'Project Timeline 🗓',
        img1: 'timeline.jpg',
        h2: 'Collaborative Design 🤝',
        p2: 'Leveraging the power of crowd wisdom, my team and I organized <strong class="blue">bi-weekly community design meetings</strong> with our 100+ DAO (decentralized autonomous organization) members to vote on product design decisions and organize user research.',
        img2: {
          url: 'meeting.jpg',
          description: 'One of Many Virtual DAO Meetings'
        }
      },
      // RESEARCH PROCESS
      research_process: {
        // H1
        h1: 'Research Process',
        // H2
        h2: '1. Interview: Who are Our Virtual Citizens? 👤',
        p2: 'A good city is like a good party, and we want to learn who\'s coming. In the initial research phase, my team and I spent time interviewing 15+ ShangHai citizens from our DAO to gain insights into <strong class="blue">their lives and what they miss most about life before lockdown.</strong>',
        interview2: {
          h1: 'A few people we interviewed:',
          img1: 'interview.jpg',
          h2: 'Some interview transcripts that inspired us:',
          list2: [
            {
              content: 'I\'m not a Buddhist, but every year, I would come to the <strong class="blue">ChengHuang Temple (城隍庙)</strong> to join tens of thousands of ShangHainese, and pray to the Buddha, wishing my family the best.',
              img: 'temple.jpg'
            },
            {
              content: 'I can see the streets, but there\'s a fence. I feel like I am in a cage. All I want is to <strong class="blue">get out and walk and never stop</strong>.',
              img: 'street.jpg'
            },
            {
              content: 'I miss <strong class="blue">the noise, the craziness, the freedom of clubs and bars</strong>. I tried drinking with friends online, but our rooms were so static that it was depressing.',
              img: 'bar.jpg'
            }
          ]
        },
        // H3
        h3: 'Competitive Analysis: How to Design a City?  🏙',
        p3: 'Developing on insights from our potential users, my team and I spent time analyzing <strong class="blue">direct and indirect competitors</strong> to learn how to build a 3D city that recreates life in ShangHai. <strong class="blue">I tried out 15+ games and apps that include a 3D city experience</strong>, learning from their best practices and evaluating their experience and features.'
      },
      insights: {
        h1: 'Synthesizing Insights 🤔',
        p1: 'After taking notes and documenting our research findings, my team and I created an <strong class="blue">affinity map</strong> to organize our insights and identify the scope of the app. We grouped our findings into <strong class="blue">four key themes:</strong>',
        img1: 'insights.jpg'
      },
      ideation: {
        h1: 'Ideation 💡',
        p1: 'Learning from our research findings, I compiled a list of feature and design decisions and proposed our findings during our DAO\'s design meetings. Leveraging the power of collaborative design, my team, along with <strong class="blue">100+ DAO members, contributed and debated about 50+ design ideas and narrowed it down to 20+ ideas through community voting.</strong>',
        h2: 'Some important design decisions:',
        table2: {
          data: [
            {
              name: '👩‍🎤 Avatar & Costume',
              vote: '83%',
              description: '83% of our DAO members considered virtual avatars as essential for self-expression.'
            },
            {
              name: '🏠 3D Buildings',
              vote: '65%',
              description: 'About 65% think users could place custom 3D models of buildings on their private land.'
            },
            {
              name: '🏕️ Private Land Ownership',
              vote: '70%',
              description: '70% think private land ownership increases users\' sense of belonging.'
            },
            {
              name: '🌼 Items',
              vote: '63%',
              description: '63% think that users should be able to place 3D models of items on city land.'
            },
            {
              name: '🎵 Music & Ambient Sound',
              vote: '76%',
              description: '76% think having radio like background music will make the city more lively.'
            },
            {
              name: '🌧 Weather System',
              vote: '68%',
              description: '68% think that having the virtual city match real-time weather is a cool idea.'
            }
          ],
          columns: [
            {
              field: 'name',
              label: 'Name'
            },
            {
              field: 'vote',
              label: 'Vote'
            },
            {
              field: 'description',
              label: 'Description'
            }
          ]
        }
      },
      design_process: {
        // H1
        h1: 'Design Process',
        // H2
        h2: '1. Map Out the City 🏙',
        p2: 'It\'s hard to conceptualize a 3D city using just paper and pencils. So before we started prototyping, my team and I created a <strong class="blue">3D map of ShangHai using ArcGIS and Mapbox GL</strong> and used it as the basis for our design.',
        img2: {
          url: '3d.jpg',
          description: 'Model for the Oriental Pearl Tower'
        },
        // H3
        h3: 'Design & Iteration 📐',
        p3: 'I started overlaying our UX design elements onto the 3D map to create low-fi and mid-fi wireframes. Our team was pressured to launch in April, so <strong class="blue">I organized daily design meetings for a week and quickly iterated on feedback</strong> that our product team and fans had on the visual appeal, usability, and information organization of the UX design. We had a final design ready for our engineering team in two weeks.',
        img3: {
          url: 'lofi.jpg',
          description: 'Part of 4th Iteration'
        },
        // H4
        h4: 'Main Features',
        list4: [
          {
            title: 'Events & Chat 💬',
            content: 'See what\'s happening in the virtual city by just glancing at online events (left), live chat (right), and pinpoints on the map.',
            img: 'demo_1.jpg'
          },
          {
            title: 'Land & Collectables 🏠',
            content: 'Place, edit, or remodelling your collectable items and virtual properties/buildings.',
            img: 'demo_2.jpg'
          },
          {
            title: 'Neighborhood 🏙',
            content: 'Interact with a neighborhood by clicking on the building. Leave a note on the building\'s message board (left) if you like.',
            img: 'demo_3.jpg'
          },
          {
            title: 'Metaverse 🔮',
            content: 'Custom built metaverse room for each piece of virtual land (1km x 1km).',
            img: 'demo_4.jpg'
          }
        ],
        // H5
        h5: 'Visual Identity',
        colors5: {
          title: 'Colors',
          list: [
            {
              color: '#64D8C7',
              content: 'Primary Green'
            },
            {
              color: '#A7E9F2',
              content: 'Secondary Green'
            },
            {
              color: '#6870B4',
              content: 'Primary Purple'
            },
            {
              color: '#BCD0FF',
              content: 'Secondary Purple'
            },
            {
              color: '#000000',
              content: 'Primary Black'
            },
            {
              color: '#FFFFFF',
              content: 'Primary White'
            }
          ]
        },
        icon5: {
          img: 'icon.jpg',
          title: 'Icons'
        },
        topography5: {
          img: 'font.jpg',
          title: 'Topography'
        }
      },
      takeways: {
        title: 'Takeaways',
        list: [
          {
            title: 'Flexible Design 🧘‍♀️',
            content: ' It is important to <strong class="blue">consider limitations in time and resources</strong> when conducting research and designing UI. Choose adaptively what design strategy you want to apply to maximize return.'
          },
          {
            title: 'Community Design 👥',
            content: 'Working with your users and team members is an excellent way to <strong class="blue">speed up the design process</strong> by having constant feedback and inputs from stakeholders.'
          },
          {
            title: 'Be Creative 🎮',
            content: 'Designing a 3D city is essentially designing a game. It is essential to understand the product\'s story and be <strong class="blue">creative with your design and research tools</strong> to work with non-traditional UI elements.'
          }
        ]
      }
    },
    museum: {
      base_url: 'https://tessietang-1255766843.cos.na-ashburn.myqcloud.com/tessietang.com/museum',
      // COVER
      cover: {
        slogan: 'Explore AR and Gamification in Teaching History.',
        title: 'Palace Museum Educational AR Game',
        base_url: 'https://tessietang-1255766843.cos.na-ashburn.myqcloud.com/tessietang.com/museum',
        image: 'cover.jpg',
        overview: [
          [
            {
              title: 'Duration',
              description: 'February 22 - April 22'
            },
            {
              title: 'Tools',
              description: 'Figma, Unity, React Native'
            }
          ],
          [
            {
              title: 'Background',
              description: 'This is a practice project for my Google UX certificate & Harvard CS50 assignment.'
            }
          ]
        ]
      },
      background: {
        h1: 'Background',
        p1: 'Leveraging new media like AR and interactive apps, museums are exploring new ways to teach history through technology. For my Google UX Certificate class project, I used the Palace Museum as an example to <strong class="purple">design an educational AR game</strong>. The museum is home to over 1.8 million pieces of art, mainly from the imperial collection of the Ming and Qing dynasties.'
      },
      research_process: {
        h1: 'Research Process',
        // H2
        h2: 'Define the issue ❓',
        p2: 'Education in arts, history, and culture is essential to a child\'s personal development. Yet, many museums, like the Palace Museum, merely display items and do not provide a lot of historical context to the visitors, let alone gain the kids\' interest. The <strong class="purple">lack of engagement with kids</strong> hurts the experience of visiting the museum.',
        // H3
        h3: 'Competitive Analysis 📊',
        competitive_analysis3: [
          {
            title: 'The Louvre & Nintendo',
            content: 'Virtual guide tour at the Louvre using Nintendo 3DS. A game-like interface with interactive conversations, animations, and close inspection of artwork.',
            img: 'museum_competitive_1.jpg'
          },
          {
            title: 'Museum of the City of New York',
            content: 'Huge projection of Monet\'s artworks with touch and body sensors. Water and plants in the painting interact with user movements.',
            img: 'museum_competitive_2.jpg'
          },
          {
            title: 'Cooper Hewitt Museum',
            content: 'Touch screen design that allows users to explore architectural designs with mini-games, graphs, and animations.',
            img: 'museum_competitive_3.jpg'
          }
        ],
        // H4
        h4: 'Construct Portfolio 👤',
        img4: 'persona.jpg',
        // H5
        h5: 'User Journey Map 🗺️',
        img5: 'user_journey.jpg'
      },
      ideation: {
        h1: 'Ideation',
        solution: {
          title: 'Solutions 💡',
          list: [
            'Use Meaningful Gamefiction theories to create a treasure hunt game.',
            'Utilize AR technology to display 3D models of art pieces on a mobile app.',
            'The visitors can claim digital NFT collections after they find the art treasures.'
          ]
        },
        gamification: {
          title: 'Why Gamification? 🎮',
          content: 'Gamification is the use of game design elements in non-game contexts. It creates an exploratory and fun experience through rewards for game activities. Gamification systems focusing on Badges, Levels and Leaderboards, Achievements, and Points will be referred to in this paper as BLAP gamification.',
          img: 'gamification.jpg'
        },
        theory: {
          title: 'Some Theories I Used 🤔',
          img: 'theories.jpg'
        }
      },
      design_process: {
        h1: 'Design Process',
        flowchart: {
          title: 'Flow Chart 📈',
          img: 'flowchart.jpg'
        },
        storyboard: {
          title: 'Storyboard 📝',
          img: 'storyboard.jpg'
        }
      },
      visual: {
        title: 'Visual Elements',
        content: 'I designed the visual components for the app.',
        img: 'visual.jpg'
      },
      develop: {
        title: 'Development Process',
        content: 'I created an Android prototype app using Unity 3D.',
        img: 'code.jpg'
      },
      demo: {
        h1: 'Design Demo',
        img1: 'demo.jpg'
      }
    }
  }
})

export default store
