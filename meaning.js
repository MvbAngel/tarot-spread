const cardMeanings = {
    "The Fool": {
      upright: "New beginnings, taking a leap of faith, new possibilities lie ahead, a new journey is about to begin.",
      reversed: "Recklessness, taken advantage of, inconsideration"
    },
    "The Magician": {
      upright: "Using all of your past experiences to create a new future, alchemizing your reality, taking confident action forward.",
      reversed: "Trickery, illusions, out of touch"
    },
    "The High Priestess": {
      upright: "Intuition, gaining insight and power, secrets coming to light, spiritual insight, mystery ahead.",
      reversed: "Ignoring intuition causes inner confusion."
    },
    "The Empress": {
      upright: "Divine Femininity, receiving, creation, pregnancy, nurturing yourself or those around you or being nurtured and cared for, a new opportunity is afoot, abundance.",
      reversed: "Creative blocks or smothering tendencies emerge."
    },
    "The Emperor": {
      upright: "Divine Masculinity, stability, security, ambition, power, authority figure or stepping into a position of authority yourself, promotion.",
      reversed: "Abuse of power or loss of control surfaces."
    },
    "The Hierophant": {
      upright: "Tradition, marriage, religion, higher education or learning, seeking guidance from wise figures or elders in order to complete a task.",
      reversed: "Rebellion against tradition causes isolation"
    },
    "The Lovers": {
      upright: "Temptation, commitment, balancing masculine and feminine energy, being at a crossroads and needing to make a clear choice, partnerships (romantic or business).",
      reversed: "Disharmony or poor relationship choices appear."
    },
    "The Chariot": {
      upright: "Moving ahead, positive forward momentum, motivation, letting go of the past in order to step into the future, determination, fame, tapping into confidence and feeling self-assured in your path.",
      reversed: "Lack of direction and scattered focus stall progress."
    },
    "Strength": {
      upright: "Triumph over a difficult or long-standing situation, self-sufficiency, overcoming temptation or stagnation, internal mastery.",
      reversed: "Self-doubt or suppressed emotions weaken resolve."
    },
    "The Hermit": {
      upright: "Solitude, time alone, taking a break from others in order to clearly hear your own inner voice, withdrawal from society, reflection, self-awareness, soul-searching, meditation or retreat.",
      reversed: "Withdrawal becomes loneliness or avoidance."
    },
    "Wheel of Fortune": {
      upright: "Drastic change, destiny, fate, good luck coming your way, things taking a 180-degree turn from what you are currently experiencing (or have experienced in the past), aligning with your higher purpose.",
      reversed: "Unexpected setbacks or bad luck disrupt plans."
    },
    "Justice": {
      upright: "Fairness, legal matters, contracts being signed, responsibility, karma, law and order, restoring equilibrium to a chaotic situation.",
      reversed: "Injustice, dishonesty, or bias clouds fairness."
    },
    "The Hanged Man": {
      upright: "Change of perspective, an ultimate test of surrender, breaking old patterns, seeing things from a new perspective, letting go, a waiting period (suspension), the liminal space between stages of life, waiting, sacrifice.",
      reversed: "Stubbornness blocks needed perspective."
    },
    "Death": {
      upright: "The cycle of life-death-life, phoenix rising from the ashes, increased self-awareness that is brought on by loss or endings, grief, letting go of attachments, rebirth, intense and sudden change.",
      reversed: "Resistance to change causes stagnation."
    },
    "Temperance": {
      upright: "Balance being restored, symbiosis, equal give and take in a situation, divine intervention that could not have been created through your own action, patience, building a home.",
      reversed: "Imbalance or excess throws life off-kilter."
    },
    "The Devil": {
      upright: "Obligation, hedonism, addictions, patterned thoughts and behaviors that need to be controlled, living in a state of fear, feeling trapped, needing to deal with the parts of your subconscious that are ruling your life negatively.",
      reversed: "Breaking free from unhealthy bonds or addictions."
    },
    "The Tower": {
      upright: "Sudden destruction, breaking down old patterns and belief systems that no longer serve a positive purpose, sudden endings, danger, catastrophic events, renovation of your life, ripping everything apart to be able to start over from scratch, leveling the foundation.",
      reversed: "Fear delays necessary upheaval and transformation."
    },
    "The Star": {
      upright: "Keeping the faith, holding on to hope, new fertile ground, inspiration, believing in a better future, feeling blessed by the universe, fulfilled dreams.",
      reversed: "Hopelessness or doubt clouds inspiration."
    },
    "The Moon": {
      upright: "Confusion, everything is not as it seems, deception, illusions, insecurity, being dishonest with oneself, following things blindly.",
      reversed: "Clarity comes after confusion or illusion."
    },
    "The Sun": {
      upright: "Good fortune, positive outcomes, prosperity, happy outcomes, abundance, success, childlike joy, enlightenment, illumination on a once-confusing or mysterious situation, marriage, achievement.",
      reversed: "Temporary setbacks dim joy or optimism."
    },
    "Judgement": {
      upright: "Resurrection, facing a situation head on, dealing with karma or past situations, renewal, life-calling, sorting out complex situations.",
      reversed: " Self-criticism or avoidance blocks growth."
    },
    "The World": {
      upright: "Completion, end of a cycle, successful conclusions, resting before starting a new chapter, a situation coming full circle, travel, endless possibilities.",
      reversed: "Delays or loose ends prevent completion."
    },
    "Ace of Cups": {
      upright: "New beginnings in love, creating a deep romantic connection, creativity, birth, can predict a baby girl.",
      reversed: "Emotional blocks or withheld feelings arise."
    }, 
    "Two of Cups": {
      upright: "Love, soulmates, divine partnership, deep friendship bonds being created, union, perfect harmony, a sense of togetherness.",
      reversed: "Breakdowns in communication or disharmony in relationships."
    },  
    "Three of Cups": {
      upright: "Celebration, group endeavors, weddings, third-party situations, co-collaboration, reconciliation of a relationship from the past.",
      reversed: "Overindulgence or toxic social dynamics."
    },  
    "Four of Cups": {
      upright: "Boredom, melancholy, lack of excitement, a grass-is-always-greener complex, comparison, missing the point, a great awakening.",
      reversed: "New perspectives open after a period of apathy."
    },  
    "Five of Cups": {
      upright: "grief, sorrow, loss, sadness, emotional pain, a good omen that love is awaiting you in the future (as two cups are still left standing).",
      reversed: "Acceptance and healing from past grief."
    },  
    "Six of Cups": {
      upright: "Past life connections, nostalgia, childlike joy, someone returning from your past, memories, reunion, sweetness, kindness, gentleness, ease, simplicity.",
      reversed: "Being stuck in nostalgia or unrealistic memories."
    },  
    "Seven of Cups": {
      upright: "Illusions, deception, needing to make a choice, discernment is needed for a situation, decision paralysis or indecisiveness, many ideas and inspiration to the point of being overwhelming.",
      reversed: "Clarity follows illusion or confusion."
    },  
    "Eight of Cups": {
      upright: "Leaving a situation behind, walking away from something emotionally draining, abandonment, escapism, time to make a change, breakups, taking a break.",
      reversed: "Fear of leaving behind the familiar."
    },  
    "Nine of Cups": {
      upright: "Wish fulfillment, overindulgence, greed, happy partnerships, dreams materializing, satisfaction.",
      reversed: "Superficial satisfaction or greed taints fulfillment."
    },  
    "Ten of Cups": {
      upright: "Long-term relationships, family-building, home, fairytale endings, things ending up better than you could have imagined, achieving your desires.",
      reversed: "Disconnection or broken family dynamics arise."
    },  
    "Page of Cups": {
      upright: "Expressing true feelings, affection, sweetness, innocence, tenderness, love letters, romantic messages arriving, good news afoot.",
      reversed: "Emotional immaturity or creative blocks."
    },  
    "Knight of Cups": {
      upright: "A romantic suitor, following your heart, being swept off your feet, receiving an offer or apology, use discernment for potential trickery or sweet-talking.",
      reversed: "Moodiness or unrealistic romantic expectations."
    },  
    "Queen of Cups": {
      upright: "Psychic visionary, an emotional or loving woman, being prone to deep or overwhelming emotions, melancholy, deep and intuitive insights arriving that will help to clear your future.",
      reversed: "Over-sensitivity or emotional withdrawal."
    },  
    "King of Cups": {
      upright: "Clarity, emotional balance, intuition, emotional maturity, devotion, a socially celebrated and accepted man.",
      reversed: " Emotional manipulation or instability."
    }, 
    "Ace of Pentacles": {
      upright: "New opportunities with work or money, new income or revenue streams, successful investments, good fortune, inheritance, stable foundation being built, new job or business.",
      reversed: "Missed financial opportunities or instability."
    }, 
    "Two of Pentacles": {
      upright: "Bringing balance, releasing stress, no longer overworking, transition, ups and downs, you are supported to make a difficult decision.",
      reversed: "Poor time management or overcommitment."
    },  
    "Three of Pentacles": {
      upright: "Building a solid foundation, working with others or collaborating, learning from others, planning, long-term goals.",
      reversed: "Lack of teamwork or recognition."
    },  
    "Four of Pentacles": {
      upright: "Greed, closed-off-ness, fear of loss, unwillingness to share success or financial gain.",
      reversed: "Greed or fear of letting go blocks abundance."
    },  
    "Five of Pentacles": {
      upright: "Feeling left out or rejected, poverty, dark night of the soul, loss, lack of resources, comparison to what others have, someone acting cold.",
      reversed: "Recovery from hardship or financial loss."
    },  
    "Six of Pentacles": {
      upright: "Balance, paying off debts, shared wealth, combining finances with another for a home or project, giving without the expectation of receiving anything in return, philanthropy, support, unity, community.",
      reversed: "One-sided giving or strings attached."
    },  
    "Seven of Pentacles": {
      upright: "Investments or investing your time/energy into someone or something, planning, patience, the beginning of something that will grow, long-term goals, commitment, stability, building a strong foundation.",
      reversed: "Impatience or wasted effort causes frustration."
    },  
    "Eight of Pentacles": {
      upright: "Hard work, apprenticeship, work or employment being a main focus, learn now for your future, discipline, diligence, tediousness or monotony.",
      reversed: "Lack of focus or carelessness in work."
    },  
    "Nine of Pentacles": {
      upright: "Independence, finding your niche, entrepreneurship, going off on your own path, achievements, prosperity, freedom, wisdom.",
      reversed: "Dependency or false sense of security."
    },  
    "Ten of Pentacles": {
      upright: "Generational wealth, large sums of money, unexpected financial windfalls, financial security, stability, a happy family life, prosperity.",
      reversed: "Disruption in family or long-term goals."
    },  
    "Page of Pentacles": {
      upright: "Good news arriving, the ability to grow, learning new life lessons, a young student, setting goals, loyalty.",
      reversed: "Laziness or lack of follow-through."
    },  
    "Knight of Pentacles": {
      upright: "Reliability, stability, patience, slow forward movement in the right direction, a tortoise-and-hare complex, things may seem bleak or behind but they will prosper later on.",
      reversed: "Stagnation or obsessive routine."
    },  
    "Queen of Pentacles": {
      upright: "A motherly figure, nurturing, a high-paying job or promotion arriving, financial security, opulence, luxury, spending more time connecting your mind, body, and spirit.",
      reversed: "Overworking or neglecting self-care."
    },  
    "King of Pentacles": {
      upright: "A mature and grounded energy, building an empire, being at the top of your career or industry, power, prosperity, discipline, abundance, being in a position to give back to others.",
      reversed: "Greed, materialism, or corrupt authority."
    },     
    "Ace of Swords": {
      upright: "New contracts being signed, new thoughts or ideas arriving that change the course of your life, connecting and communicating with new people, clarity, truth, inspiration, raw and undeniable power.",
      reversed: "Mental fog or misinformation clouds judgment."
    }, 
    "Two of Swords": {
      upright: "Confusion, being at a crossroads, indecision, stalemate, limited communication, making a difficult or scary decision.",
      reversed: "Indecision leads to anxiety or pressure."
    },  
    "Three of Swords": {
      upright: "Heartbreak, breakup, despair, infidelity, pain, rejection, love triangle, poor health.",
      reversed: "Healing begins after deep emotional pain."
    },  
    "Four of Swords": {
      upright: "Needing to rest before the universe makes you rest, a much-needed break, rest, recuperation, vacation, solitude, temporary peace.",
      reversed: "Restlessness or avoidance of necessary rest."
    },  
    "Five of Swords": {
      upright: "Cowardliness in conflict, pride, grave loss, defeat, unnecessary arguments, gossip, suspicion, jealousy, there is a snake in your inner circle.",
      reversed: "Regret or desire to make amends surfaces."
    },  
    "Six of Swords": {
      upright: "Moving on to better things or people, healing, moving forward, leaving a tumultuous past behind you, relief, spiritual guidance, travel.",
      reversed: "Difficulty moving on from past struggles."
    },  
    "Seven of Swords": {
      upright: "Deception, either someone is deceiving you or you are deceiving yourself, lying, manipulation, dishonesty, lies, theft, enemies, spying, cunning behavior is afoot.",
      reversed: "Secrets revealed or self-deception uncovered."
    },  
    "Eight of Swords": {
      upright: "Victimization, anxiety, being caught in the mind and causing unnecessary suffering, your thoughts are out of control, embarrassment, slander.",
      reversed: "Liberation from limiting beliefs or fears."
    },  
    "Nine of Swords": {
      upright: "Sleepless nights, mental anguish, insomnia, despair, anxiety, fear, stressful environment, outside experiences are causing you to question yourself.",
      reversed: "Release from anxiety or growing mental clarity."
    },  
    "Ten of Swords": {
      upright: "End of a cycle, betrayal, being back-stabbed, complete ruination of a situation, martyrdom, the worst has now passed.",
      reversed: "Recovery and rising after betrayal or loss."
    },  
    "Page of Swords": {
      upright: "Spying, stalking social media or being stalked, gossip, curiosity, rebellion, exams or studying for something, immaturity, needing to grow up.",
      reversed: "Gossip or scatterbrained curiosity."
    },  
    "Knight of Swords": {
      upright: "An aggressive figure, rushing to conclusions, coming in as quickly as one leaves, knee-jerk reactions, decisions being made hastily, hasty behavior.",
      reversed: "Impulsiveness or aggression without foresight."
    },  
    "Queen of Swords": {
      upright: "A cold figure, someone who has a hard outer shell but is extremely sensitive underneath it all, divorce, logic, righteousness, bitterness, an authoritative figure, cutting straight to the point.",
      reversed: "Coldness or overly critical thinking."
    },  
    "King of Swords": {
      upright: "An intelligent figure, seriousness, regal behavior, research being conducted, control over one’s emotions, ability to think rationally in difficult situations, inventive, clear thinking is needed for a situation.",
      reversed: "Tyranny, manipulation, or misuse of logic."
    },    
    "Ace of Wands": {
      upright: "A new and passionate beginning, bright future, new business or family, could predict a baby boy being conceived or born, good news.",
      reversed: "Missed opportunities or lack of inspiration."
    }, 
    "Two of Wands": {
      upright: "Partnership, letting go of the past in order to move ahead with a new decision, collaboration, forward movement, leaving something behind.",
      reversed: "Fear of the unknown blocks progress."
    },  
    "Three of Wands": {
      upright: "Manifestation, old seeds that were planted in the past coming to fruition, patience, exploring the world, traveling, opportunities arriving, teamwork.",
      reversed: "Delayed results or failed expectations."
    },  
    "Four of Wands": {
      upright: "Marriage, home-building, aligning with your path and purpose, connecting with the right people, a sense of belonging, matching the frequency of what you want in life, alignment.",
      reversed: "Instability or tension in home or relationships."
    },  
    "Five of Wands": {
      upright: "Competition, argumentative conversations, bickering, disagreements, conflict, others fighting over you or a shared idea, resistance.",
      reversed: "Avoiding conflict leads to unresolved tension."
    },  
    "Six of Wands": {
      upright: "Victory, completion, celebration, being or feeling admired by others, accomplishments, moment of glory, arrogance, success going to your head.",
      reversed: "Lack of recognition or false pride emerges."
    },  
    "Seven of Wands": {
      upright: "Courage, defending your honor, negotiation, defensiveness, miscommunications, high-stakes situations, dedication to a path or project.",
      reversed: "Feeling overwhelmed or giving up too easily."
    },  
    "Eight of Wands": {
      upright: "Travel, communication, quick changes, vitality, letters or emails coming in that change the course of your life.",
      reversed: "Delays, miscommunication, or scattered energy."
    },  
    "Nine of Wands": {
      upright: "Roadblocks, pressure, delays, persistence is needed for the situation at hand, test of faith, sickness or injuries that put you out of commission.",
      reversed: "Burnout or unwillingness to persevere."
    },  
    "Ten of Wands": {
      upright: "Burdens, fatigue, stress, hard work, achievement, finalizing a hard or tedious project, ending a cycle of taking on too much, putting down obligation or responsibilities.",
      reversed: "Letting go of burdens or feeling crushed by them."
    },  
    "Page of Wands": {
      upright: "Courage, going on a journey, enthusiasm, spiritual teachings or educational opportunities, impulsiveness, thrill, excitement, new ideas.",
      reversed: "Immaturity or impulsiveness hinders growth."
    },  
    "Knight of Wands": {
      upright: "Power, passion, energy, lust, adventure, an upcoming trip, meeting someone who opens your eyes to a new way of living.",
      reversed: "Recklessness or scattered energy causes chaos."
    },  
    "Queen of Wands": {
      upright: "Ambition, confidence, lust, a strong-willed woman (either stepping into this energy or being met with someone externally who has this presence).",
      reversed: "Insecurity or jealousy undermines confidence."
    },  
    "King of Wands": {
      upright: "Authority, incoming changes, successful or prosperous future ahead, a man in leadership, becoming a person of importance to others.",
      reversed: "Tyranny or ego-driven leadership dominates."
    },    
  };

