'use strict';

/*
 * THE PAINTINGS
 * -------------
 * Everything the gallery says about each painting lives here, in the
 * order they hang (placement.js decides where each position is).
 *
 *   file         the photograph in images/; the build makes the web copies
 *                images/web/<slug>.webp (2048 px) and <slug>-1024.webp
 *   title        shown on the wall card and in the stories
 *   medium       shown above the title
 *   size         real size in centimetres, [height, width]; it also sets
 *                how fine the canvas weave is drawn
 *   description  the words, one blank line between paragraphs
 *   visit        (optional) a short film of the painting coming to life,
 *                offered on laptops and desktops as "Visit what remained":
 *                { video: 'visits/<slug>.mp4' } (the file goes in static/visits/)
 *
 * To add a painting: put its photo in images/ and add an entry here.
 */

module.exports = [
	{
		file: "IMG_20250717_102753.jpg",
		slug: "love-me-like-i-am-already-dead",
		visit: { video: 'visits/love-me-like-i-am-already-dead.mp4' },
		title: "Love me like I am Already Dead",
		medium: 'Oil on canvas',
		size: [61, 91],
		description: `We live in a world soaked in hypocrisy. We’re told not to “speak ill of the dead,” yet we spend lifetimes speaking ill of the living. We judge, ignore, neglect—and then pretend to mourn with grace when it’s too late. People say beautiful things at funerals, but only after burying a lifetime of cruelty or silence.

Why?

Because the dead are easier to love. They don’t talk back. They don’t disappoint. They don’t challenge your beliefs or make demands of your time or empathy. The dead become perfect in memory—flaws forgotten, expectations erased. To love someone who’s no longer here is safe. You get to shape them however you want. You don’t have to face the complexity of who they really were, or who you failed to be for them.

And this is what I’ve seen, over and over. People rarely offer love when it matters. Parents, siblings, friends, partners—their love is often conditional. Measured. Dependent on how useful, agreeable, or flawless you are. You can pour yourself out for them, break yourself trying to be enough, and still fall short. You can live your whole life waiting for a kind word that never comes.

But when you die, everything changes.

Suddenly, you were “the kindest soul,” “too good for this world,” “someone we didn’t deserve.” The same people who made you feel small now speak of you with reverence. They bring flowers. They cry. They whisper prayers. But none of it is for you anymore. The flowers don’t heal what they broke. The prayers don’t reach ears that have gone silent. These gestures are not for the dead—they’re for the living. For their guilt. For their comfort. For their image.

“You brought me flowers when I could no longer smell them.
You reached for my hand when it was already cold.”

This work is not just about death—it’s about being noticed only when you’re gone. It’s about how easily people forget your flaws once you’re no longer around to inconvenience them. How we wait for silence to speak love. How we mourn more for our comfort than for the person who’s passed.

It asks one question, quietly but sharply:

Why must someone die before we finally decide they were worthy of love?`
	},
	{
		file: "lv_0_20260703041118.jpg",
		slug: "the-hardest-gift-i-gave",
		title: "The Hardest Gift I Gave",
		medium: 'Oil on canvas',
		size: [91, 61],
		description: `True love is an act of shelter, but it is incredibly easy for that shelter to quietly warp into a cage. We fall into the trap of believing that because we love someone deeply, they belong near us, that our affection is enough to justify keeping them close, even when their spirit is pulling toward a completely different horizon. But love isn't a possession. It isn't a debt or a contract of ownership. Realising that you are holding someone back against their will, and choosing to unlatch the door anyway, is perhaps the rawest, most devastating form of love there is. It is the moment you value their breathing room more than your own comfort.

But there is a second, heavier truth hidden in that departure, and it rests entirely in the feather left behind in her fingers. Freedom is rarely a clean break; it demands a physical toll. The bird didn't just fly away unharmed. It had to leave a part of itself behind in order to slip through the bars. That single feather is the currency of its flight. It means that when we finally let someone go, they don't leave whole, and we don't end up completely empty-handed. They leave a piece of their identity locked in our grasp, a permanent casualty of the time they spent confined. She is left holding the physical receipt of his freedom, a reminder that the hardest gift you can give someone always costs a piece of both of you.`
	},
	{
		file: "lv_0_20260707024023.jpg",
		slug: "a-private-eulogy",
		title: "A Private Eulogy",
		medium: 'Oil on canvas',
		size: [91, 61],
		description: `There is a unique kind of sorrow in mourning something you were never supposed to have, or holding onto a loss the world expects you to simply forget. When grief is disallowed by circumstances, society, or our own rigid rules, it cannot be shared. It becomes an isolated country.

In A Private Eulogy, the subject turns her back completely to the world. Her posture is not collapsed in defeat; it is held together with immense, quiet effort, the rigid stillness of someone delivering a final, silent tribute inside her own mind. Clad in a heavy black shroud of self-imposed composure, she creates a boundary that no one else can cross.

She sits alone, at the altar of her own thoughts, giving a beautiful, unauthorized goodbye to a memory that only she is left to honor. We will never know exactly what she is honoring. The viewer is left standing outside the door of her thoughts, witnessing the sheer gravity of a quiet, beautiful goodbye.`
	},
	{
		file: "lv_0_20260914002544.jpg",
		slug: "the-guardians-i-built-to-defend",
		title: "The Guardians I Built to Defend",
		medium: 'Oil on canvas',
		size: [91, 61],
		description: `I built them one at a time, though I don't remember choosing to. I only remember needing them.

The first stands above, where thought begins. It doesn't watch the world, it watches me: deciding, in silence, what takes root and what dissolves before it ever becomes belief. I never asked for a guardian of the mind. I just found myself with one, already old, already certain of its job.

The second lies across my mouth. Every word has to pass beneath it first: weighed, questioned, sometimes let through, sometimes swallowed whole. I built this one out of every "should I say this" I ever asked myself and answered wrong, out of every sentence I decided, halfway through, not to finish.

The third turns away, facing down, toward everything I've carried but never looked at directly. It doesn't guard my face or my words. It holds what's buried. And the second guardian leans back against it, quietly confessing what I already knew: my voice was never really mine alone. It rests on everything underneath it that I haven't processed yet.

Between the first guardian and the second, only one eye stays uncovered. Mind, contained. Voice, filtered. And still, I see.

I built these so carefully, so early, that I forgot they were built at all.

This isn't a portrait of a woman hiding behind her defenses. It's a portrait of the defenses themselves, raised by her for her so quietly that even she had to look twice to recognize it as her own.`
	},
	{
		file: "between-grief-and-acceptance.jpg",
		slug: "between-grief-and-acceptance",
		title: "Between Grief and Acceptance",
		medium: 'Oil on canvas',
		size: [61, 91],
		description: `Something has just finished. Not with a blow you could point to, not with any sound loud enough to call an ending. It simply stopped, the way a breath you've been holding without noticing finally has to let go on its own.

And what's left is this: a body that hasn't moved yet. Not because it can't. Moving would mean deciding what to call this, grief or relief, and right now it doesn't have to choose. It can be both at once, sitting in the same chest, breathing the same air.

The hand still curls around the shape of what it used to hold, even though there's nothing left in it. That's the strange part nobody warns you about, how long the hand keeps the memory of weight after the weight itself is gone. You open your fingers and they still won't lie flat. Something in you is still holding on, out of habit more than hope.

Somewhere close, a thin line of smoke keeps rising on its own, unbothered, indifferent to whatever you're feeling. Time doesn't pause to let you finish. It just keeps climbing upward while you're still sitting in the wreckage of the moment, and somehow that keeps going. Life continuing without asking your permission first.

This is what it looks like when you finally understand that something cannot be undone, and instead of breaking, you just go quiet. You sit with the absence like it's something you can still hold, even though it isn't, even though your hands are already empty. And underneath the ache of that, so faint you almost miss it, is a lightness. The kind that only shows up once you stop carrying something you were never meant to carry forever.

Not the fall. Not the healing. Just the long, still breath in between, where losing something and finally being free of it turn out to be the same exact feeling, wearing two different names.`
	},
	{
		file: "uncertainty.jpg",
		slug: "uncertainty",
		title: "Uncertainty",
		medium: 'Oil on canvas',
		size: [91, 61],
		description: `The moment right before the crown touches your head.
Not yet crowned.
Not yet forgotten.
Just suspended.

That's what uncertainty feels like. Like someone holding a version of your worth just above you, close enough to taste, far enough to keep you reaching. You have no idea if it'll be placed on your head or taken away the moment you start to believe you deserve it.

It's about the aching pause life holds you in the mid-air between "what is" and "what could have been."

It's about the people who make you feel like you're extraordinary, only to leave you questioning if you ever were.

It's about promises unspoken but implied, gestures that said everything but meant nothing.

And maybe that's what life is. A series of held crowns and hollow hands. Moments where you almost became something more. Moments where you almost believed.

Have you never wondered how life can take you from a high to a hollow in a moment. How the ground can vanish beneath your feet, and yet you learn to walk anyway.

Faiz once wrote:

دل نا امید تو نہیں ناکام ہی تو ہے
لمبی ہے غم کی شام مگر شام ہی تو ہے

(The heart is not hopeless—just defeated a little,
The evening of sorrow is long, but just an evening still.)

Maybe that's the strange mercy in all this, that just as the good times don't last forever, maybe the bad ones won't either and we go on. Certain only of uncertainty.`
	},
	{
		file: "everything-else-was-easier-to-perform.jpg",
		slug: "everything-else-was-easier-to-perform",
		title: "Everything Else Was Easier To Perform",
		medium: 'Oil on canvas',
		size: [91, 61],
		description: `There is a kind of honesty the body can't help but give away, and a kind it learns to hold back. Hands can be taught to rest gently. Posture can settle into ease. Even fabric, draped just so, catching light in the right places, can be arranged to look like comfort. Almost everything about us can be practiced until it looks true, even when it isn't quite.

The face is different. It says things before we mean to say them. The flicker before a smile, the pause before composure, the small ache that shows up in the eyes when nothing else has moved. It is the one part of us that was never very good at lying. So maybe it makes sense that if any part of us needed protecting, it would be that one.

She looks completely at ease. The kind of comfort you can't fake, or so it seems. She is warm, present, close enough to reach. She offers almost everything a person can offer without saying a word, comfort, beauty, closeness, her hand resting easily like she has nothing to hide.

And that's exactly what makes it work. No one looking at her would think anything is missing. She isn't cold or distant. She isn't guarded in any way you could point to. That's the quiet part of it. The protection is so convincing that it doesn't even look like protection. People don't walk away feeling like they were kept out. They walk away thinking they saw her completely.

Only she knows they didn't.

That's the ache underneath all of it. Not that she hides, but that the hiding costs her nothing on the surface. She gets to be close to people, liked by people, comfortable in front of people, and still keep the one part of herself that actually could be hurt somewhere no one thinks to look. It isn't a wall anyone can see. It's just a very convincing kind of openness, one that gives everything except the one thing that was never really safe to give.

Maybe that's the most human thing about her. Not that she hides something, we all do that. But that she's learned how to hide it so well that even the people closest to her never notice there was a door there at all.`
	},
	{
		file: "longing.jpg",
		slug: "longing",
		title: "Longing",
		medium: 'Oil on canvas',
		size: [91, 61],
		description: `I was reading this book called On Earth We're Briefly Gorgeous, and there was this line that really hit me: "I miss you more than I remember you." And I guess it stuck with me, and while painting this, I immediately knew what I wanted to name it.

I think "longing" is such a weirdly beautiful word because it doesn't have a single meaning. It's like a mirror that reflects whatever is missing in you. Some people would say that longing means to want something. But I think longing is not just wanting; it's wanting while you're also losing hope. It's not just about missing someone it's about carrying them inside you even though you know that you might not see them again.

All our lives, we long for certain things: some long for a certain kind of love, some for a different life, and some long for a version of themselves they once were or hope to become. And sometimes, we do get all those things. But then life, being life, takes them away. And then we find ourselves at the bottom with not just longing but mourning, because longing, after all, is mourning in silence.

So one might wonder, wouldn't it be better if one had never gotten to experience that? Unfulfilled dreams leave behind the pain of "What could've been?" But the memory of a beautiful life once lived is more haunting than the absence of it ever was.

Bahadur Shah Zafar wrote in one of his poems:

ان حسرتوں سے کہہ دو کہیں اور جا بسیں
اتنی جگہ کہاں ہے دل داغدار میں

"Tell these longings to settle somewhere else,
For how much room remains in this scarred chest?"`
	},
	{
		file: "holding-on-to-what-never-was.jpg",
		slug: "holding-on-to-what-never-was",
		title: "Holding On To What Never Was",
		medium: 'Oil on canvas',
		size: [91, 61],
		description: `Sometimes we hold on to things, people, memories, and even places, not because we believe they’ll return, but because the idea of letting them go feels like admitting they never mattered in the first place. As long as holding on isn’t weighing us down, it reminds us of our capacity to love and how strong we are.

But sometimes, we hold on to what never truly existed and I believe that’s one of the most painful forms of grief one can experience. Because in your mind, it all feels so real that it becomes your reality. I think it's human nature to stay in our comfort zones, and holding on to just the idea of something gives us comfort. Sometimes, fantasy feels safer than reality.

Yet fantasy often arises from something that was once real, a moment of connection, a kind word spoken at the right time and a right place, someone who made you feel seen or valued. It’s not always about the event itself, but the spark it ignited within you. Because in the end, fantasy is a reflection of the reality you wished for.

The problem begins when reality no longer breathes life into that fantasy. With time, we come to realize that what we’ve been holding on to, whether it’s a person, a memory, a place, or a moment, is merely a possibility. And so we find ourselves asking:

"Was it ever real, or just beautiful enough to believe in?"`
	},
	{
		file: "but-i-gave-you-comfort.jpg",
		slug: "but-i-gave-you-comfort",
		title: "But I Gave You Comfort!",
		medium: 'Oil on canvas',
		size: [91, 61],
		description: `I wasn’t looking, but these words found me and they stayed:

"دھوپ سہہ کر جو سایہ دیا
وہ سایہ زخم سا لگتا ہے"

"The shade you offered after the scorching sun—
now feels like a wound itself."

“But I gave you comfort” is not a neutral statement rather a very defensive one.
It’s something said to dismiss your pain.
It turns love into currency, care into justification, and ignores the sword entirely.

There’s a certain kind of pain that doesn’t come from strangers. It comes from people who were close, those who claimed love, friendship, care. And when you finally gather the strength to speak, to say, “You hurt me…”
they look at you, confused or angry, and say:
“But I gave you comfort.”
As if that cancels everything.
As if kind gestures undo sharp words.
As if staying makes the silence less cruel.
As if buying gifts erases the control.
As if providing shelter means the home wasn’t suffocating.
And somehow, you're left being the one who feels guilty.
For naming the pain.
For remembering the things they pretend never happened.
For bleeding in a place that looked like love.

It’s the voice of a parent who says “I gave you everything” when reminded of emotional neglect.
The partner who says “I loved you” when reminded of how they made you feel small.
The friend who says “I was there for you” when they weren’t, at least not in the way it mattered.

Sometimes the softest words leave the deepest wounds and the hardest part isn’t the pain itself,
but the loneliness of having no one willing to admit it happened.`
	}
];
