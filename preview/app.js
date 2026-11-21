"use strict";(()=>{var At=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var Tm=At((M7,Am)=>{"use strict";var Ui=document.getElementById("loader"),Hi=Ui&&Ui.querySelector(".loader-name"),ll=0,Xf=0,Yf=!1,F4=performance.now(),Bi=.06,Gi=0,gu=0,Mm=!1,G4=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;function H4(t){if(!Hi)return;let e=Hi.offsetWidth||1,r=(e*(1.14-1.28*t)-e).toFixed(1)+"px 0";Hi.style.webkitMaskPosition=r,Hi.style.maskPosition=r}function Em(t){let e=Math.min(.05,gu?(t-gu)/1e3:.016);gu=t;let o=Yf?.75:.22+(Bi-Gi)*1.2;if(Gi=Math.min(Bi,Gi+Math.max(0,o)*e),G4&&(Gi=Bi),H4(Gi),Yf&&Gi>=.999){Mm||(Mm=!0,setTimeout(zm,650));return}requestAnimationFrame(Em)}Hi&&requestAnimationFrame(Em);function km(){let t=ll?Xf/Math.max(ll,24):0;Bi=Math.max(Bi,Math.min(.9,.06+t*.84))}function zm(){Ui&&(Ui.classList.add("done"),setTimeout(()=>Ui.remove(),1400))}function xu(){Yf||(Yf=!0,window.__galleryReady=!0,Ui&&(Bi=1,Hi||zm()))}var Sm=null;function U4(){clearTimeout(Sm),Xf>=ll&&performance.now()-F4>600&&(Sm=setTimeout(()=>{Xf>=ll&&xu()},450))}setTimeout(xu,2e4);var B4=t=>/(^|\/)(res|images)\//.test(t),Vf=window.fetch.bind(window);async function j4(t,e){let o=await Vf(t+".gz",e);if(!o.ok)throw new Error("no .gz");let r=new Uint8Array(await o.arrayBuffer());if(!(r[0]===31&&r[1]===139))return new Response(r);let n=new Blob([r]).stream().pipeThrough(new DecompressionStream("gzip")),a=await new Response(n).arrayBuffer();return new Response(a,{status:200,headers:{"Content-Type":"application/octet-stream"}})}window.fetch=function(t,e){let o=typeof t=="string"?t:t&&t.url||"";if(!B4(o))return Vf(t,e);ll++,km();let r=a=>(Xf++,km(),U4(),a),n;return/\.bin$/.test(o)&&typeof DecompressionStream!="undefined"?n=j4(o,e).catch(()=>Vf(t,e)):n=Vf(t,e),n.then(r,a=>{throw r(),a})};Am.exports={finish:xu}});var Ar=At((k7,Om)=>{"use strict";var Lm=typeof navigator!="undefined"&&navigator.userAgent||"",W4=typeof window!="undefined"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches&&!window.matchMedia("(any-pointer: fine)").matches,Ma=/Android|iPhone|iPad|iPod|Mobile|Silk|Kindle|webOS|BlackBerry|Opera Mini|IEMobile/i.test(Lm)||/Macintosh/.test(Lm)&&typeof navigator!="undefined"&&navigator.maxTouchPoints>1||W4,Nm=typeof window!="undefined"&&window.devicePixelRatio||1,qo={isPhone:Ma,pixelRatio:Ma?Math.min(Nm,1.5):Math.min(Nm,2),reflection:!Ma,gardenDetail:Ma?0:1,leafShare:Ma?.65:1,motion:!Ma,post:Ma?1:2,level:Ma?1:0};qo.scale=1;var V4=Ma?.55:.6,fl=0,Kf=0,hl=0,ul=0,ji=1,dl=0,Qf=48,Wi=null,yu=0;function X4(t){Wi={fps:t,scale:qo.scale},qo.scale>.86?qo.scale=.85:qo.reflection?qo.stepDown():qo.scale>.71?qo.scale=.7:qo.stepDown()||(qo.scale=Math.max(V4,qo.scale-.1))}var Rm=!0;try{/[?&]noadapt\b/.test(location.search)&&(Rm=!1)}catch(t){}qo.frame=t=>{if(!Rm)return;if(!(t>0)||t>1){fl=0,Kf=0;return}if(fl+=t,Kf++,fl<.75)return;let e=Kf/fl;if(fl=0,Kf=0,dl>0&&(dl-=.75,dl<=0&&(ji=1)),Wi){if(e<Wi.fps*1.08&&Wi.scale>qo.scale){if(++yu>=2){qo.scale=1,ji=1,dl=0,Qf=Math.min(Qf,e*.85),yu=0,hl=0,Wi=null;return}}else yu=0;Wi=null}if(e<Qf){if(ul=0,++hl>=2){if(hl=0,qo.scale>.61&&qo.climbed){ji=qo.scale-.05,dl=40,qo.scale=ji,qo.climbed=!1;return}X4(e)}}else e>Math.max(Qf*1.15,55)?(hl=0,++ul>=6&&qo.scale<ji-.001?(qo.scale=Math.min(ji,qo.scale+.05),qo.climbed=!0,ul=0):ul>=6&&(qo.climbed=!1)):(hl=0,ul=0)};qo.stepDown=()=>{if(qo.reflection)qo.reflection=!1;else if(qo.gardenDetail>0||qo.motion)qo.gardenDetail=0,qo.motion=!1,qo.leafShare=Math.min(qo.leafShare,.65);else if(qo.post>0)qo.post--;else return!1;return qo.level++,!0};Om.exports=qo});var bu=At((S7,Cm)=>{"use strict";Cm.exports=[{file:"IMG_20250717_102753.jpg",slug:"love-me-like-i-am-already-dead",title:"Love me like I am Already Dead",medium:"Oil on canvas",size:[61,91],description:`We live in a world soaked in hypocrisy. We\u2019re told not to \u201Cspeak ill of the dead,\u201D yet we spend lifetimes speaking ill of the living. We judge, ignore, neglect\u2014and then pretend to mourn with grace when it\u2019s too late. People say beautiful things at funerals, but only after burying a lifetime of cruelty or silence.

Why?

Because the dead are easier to love. They don\u2019t talk back. They don\u2019t disappoint. They don\u2019t challenge your beliefs or make demands of your time or empathy. The dead become perfect in memory\u2014flaws forgotten, expectations erased. To love someone who\u2019s no longer here is safe. You get to shape them however you want. You don\u2019t have to face the complexity of who they really were, or who you failed to be for them.

And this is what I\u2019ve seen, over and over. People rarely offer love when it matters. Parents, siblings, friends, partners\u2014their love is often conditional. Measured. Dependent on how useful, agreeable, or flawless you are. You can pour yourself out for them, break yourself trying to be enough, and still fall short. You can live your whole life waiting for a kind word that never comes.

But when you die, everything changes.

Suddenly, you were \u201Cthe kindest soul,\u201D \u201Ctoo good for this world,\u201D \u201Csomeone we didn\u2019t deserve.\u201D The same people who made you feel small now speak of you with reverence. They bring flowers. They cry. They whisper prayers. But none of it is for you anymore. The flowers don\u2019t heal what they broke. The prayers don\u2019t reach ears that have gone silent. These gestures are not for the dead\u2014they\u2019re for the living. For their guilt. For their comfort. For their image.

\u201CYou brought me flowers when I could no longer smell them.
You reached for my hand when it was already cold.\u201D

This work is not just about death\u2014it\u2019s about being noticed only when you\u2019re gone. It\u2019s about how easily people forget your flaws once you\u2019re no longer around to inconvenience them. How we wait for silence to speak love. How we mourn more for our comfort than for the person who\u2019s passed.

It asks one question, quietly but sharply:

Why must someone die before we finally decide they were worthy of love?`},{file:"lv_0_20260703041118.jpg",slug:"the-hardest-gift-i-gave",title:"The Hardest Gift I Gave",medium:"Oil on canvas",size:[91,61],description:`True love is an act of shelter, but it is incredibly easy for that shelter to quietly warp into a cage. We fall into the trap of believing that because we love someone deeply, they belong near us, that our affection is enough to justify keeping them close, even when their spirit is pulling toward a completely different horizon. But love isn't a possession. It isn't a debt or a contract of ownership. Realising that you are holding someone back against their will, and choosing to unlatch the door anyway, is perhaps the rawest, most devastating form of love there is. It is the moment you value their breathing room more than your own comfort.

But there is a second, heavier truth hidden in that departure, and it rests entirely in the feather left behind in her fingers. Freedom is rarely a clean break; it demands a physical toll. The bird didn't just fly away unharmed. It had to leave a part of itself behind in order to slip through the bars. That single feather is the currency of its flight. It means that when we finally let someone go, they don't leave whole, and we don't end up completely empty-handed. They leave a piece of their identity locked in our grasp, a permanent casualty of the time they spent confined. She is left holding the physical receipt of his freedom, a reminder that the hardest gift you can give someone always costs a piece of both of you.`},{file:"lv_0_20260707024023.jpg",slug:"a-private-eulogy",title:"A Private Eulogy",medium:"Oil on canvas",size:[91,61],description:`There is a unique kind of sorrow in mourning something you were never supposed to have, or holding onto a loss the world expects you to simply forget. When grief is disallowed by circumstances, society, or our own rigid rules, it cannot be shared. It becomes an isolated country.

In A Private Eulogy, the subject turns her back completely to the world. Her posture is not collapsed in defeat; it is held together with immense, quiet effort, the rigid stillness of someone delivering a final, silent tribute inside her own mind. Clad in a heavy black shroud of self-imposed composure, she creates a boundary that no one else can cross.

She sits alone, at the altar of her own thoughts, giving a beautiful, unauthorized goodbye to a memory that only she is left to honor. We will never know exactly what she is honoring. The viewer is left standing outside the door of her thoughts, witnessing the sheer gravity of a quiet, beautiful goodbye.`},{file:"lv_0_20260914002544.jpg",slug:"the-guardians-i-built-to-defend",title:"The Guardians I Built to Defend",medium:"Oil on canvas",size:[91,61],description:`I built them one at a time, though I don't remember choosing to. I only remember needing them.

The first stands above, where thought begins. It doesn't watch the world, it watches me: deciding, in silence, what takes root and what dissolves before it ever becomes belief. I never asked for a guardian of the mind. I just found myself with one, already old, already certain of its job.

The second lies across my mouth. Every word has to pass beneath it first: weighed, questioned, sometimes let through, sometimes swallowed whole. I built this one out of every "should I say this" I ever asked myself and answered wrong, out of every sentence I decided, halfway through, not to finish.

The third turns away, facing down, toward everything I've carried but never looked at directly. It doesn't guard my face or my words. It holds what's buried. And the second guardian leans back against it, quietly confessing what I already knew: my voice was never really mine alone. It rests on everything underneath it that I haven't processed yet.

Between the first guardian and the second, only one eye stays uncovered. Mind, contained. Voice, filtered. And still, I see.

I built these so carefully, so early, that I forgot they were built at all.

This isn't a portrait of a woman hiding behind her defenses. It's a portrait of the defenses themselves, raised by her for her so quietly that even she had to look twice to recognize it as her own.`},{file:"between-grief-and-acceptance.jpg",slug:"between-grief-and-acceptance",title:"Between Grief and Acceptance",medium:"Oil on canvas",size:[61,91],description:`Something has just finished. Not with a blow you could point to, not with any sound loud enough to call an ending. It simply stopped, the way a breath you've been holding without noticing finally has to let go on its own.

And what's left is this: a body that hasn't moved yet. Not because it can't. Moving would mean deciding what to call this, grief or relief, and right now it doesn't have to choose. It can be both at once, sitting in the same chest, breathing the same air.

The hand still curls around the shape of what it used to hold, even though there's nothing left in it. That's the strange part nobody warns you about, how long the hand keeps the memory of weight after the weight itself is gone. You open your fingers and they still won't lie flat. Something in you is still holding on, out of habit more than hope.

Somewhere close, a thin line of smoke keeps rising on its own, unbothered, indifferent to whatever you're feeling. Time doesn't pause to let you finish. It just keeps climbing upward while you're still sitting in the wreckage of the moment, and somehow that keeps going. Life continuing without asking your permission first.

This is what it looks like when you finally understand that something cannot be undone, and instead of breaking, you just go quiet. You sit with the absence like it's something you can still hold, even though it isn't, even though your hands are already empty. And underneath the ache of that, so faint you almost miss it, is a lightness. The kind that only shows up once you stop carrying something you were never meant to carry forever.

Not the fall. Not the healing. Just the long, still breath in between, where losing something and finally being free of it turn out to be the same exact feeling, wearing two different names.`},{file:"uncertainty.jpg",slug:"uncertainty",title:"Uncertainty",medium:"Oil on canvas",size:[91,61],description:`The moment right before the crown touches your head.
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

\u062F\u0644 \u0646\u0627 \u0627\u0645\u06CC\u062F \u062A\u0648 \u0646\u06C1\u06CC\u06BA \u0646\u0627\u06A9\u0627\u0645 \u06C1\u06CC \u062A\u0648 \u06C1\u06D2
\u0644\u0645\u0628\u06CC \u06C1\u06D2 \u063A\u0645 \u06A9\u06CC \u0634\u0627\u0645 \u0645\u06AF\u0631 \u0634\u0627\u0645 \u06C1\u06CC \u062A\u0648 \u06C1\u06D2

(The heart is not hopeless\u2014just defeated a little,
The evening of sorrow is long, but just an evening still.)

Maybe that's the strange mercy in all this, that just as the good times don't last forever, maybe the bad ones won't either and we go on. Certain only of uncertainty.`},{file:"everything-else-was-easier-to-perform.jpg",slug:"everything-else-was-easier-to-perform",title:"Everything Else Was Easier To Perform",medium:"Oil on canvas",size:[91,61],description:`There is a kind of honesty the body can't help but give away, and a kind it learns to hold back. Hands can be taught to rest gently. Posture can settle into ease. Even fabric, draped just so, catching light in the right places, can be arranged to look like comfort. Almost everything about us can be practiced until it looks true, even when it isn't quite.

The face is different. It says things before we mean to say them. The flicker before a smile, the pause before composure, the small ache that shows up in the eyes when nothing else has moved. It is the one part of us that was never very good at lying. So maybe it makes sense that if any part of us needed protecting, it would be that one.

She looks completely at ease. The kind of comfort you can't fake, or so it seems. She is warm, present, close enough to reach. She offers almost everything a person can offer without saying a word, comfort, beauty, closeness, her hand resting easily like she has nothing to hide.

And that's exactly what makes it work. No one looking at her would think anything is missing. She isn't cold or distant. She isn't guarded in any way you could point to. That's the quiet part of it. The protection is so convincing that it doesn't even look like protection. People don't walk away feeling like they were kept out. They walk away thinking they saw her completely.

Only she knows they didn't.

That's the ache underneath all of it. Not that she hides, but that the hiding costs her nothing on the surface. She gets to be close to people, liked by people, comfortable in front of people, and still keep the one part of herself that actually could be hurt somewhere no one thinks to look. It isn't a wall anyone can see. It's just a very convincing kind of openness, one that gives everything except the one thing that was never really safe to give.

Maybe that's the most human thing about her. Not that she hides something, we all do that. But that she's learned how to hide it so well that even the people closest to her never notice there was a door there at all.`},{file:"longing.jpg",slug:"longing",title:"Longing",medium:"Oil on canvas",size:[91,61],description:`I was reading this book called On Earth We're Briefly Gorgeous, and there was this line that really hit me: "I miss you more than I remember you." And I guess it stuck with me, and while painting this, I immediately knew what I wanted to name it.

I think "longing" is such a weirdly beautiful word because it doesn't have a single meaning. It's like a mirror that reflects whatever is missing in you. Some people would say that longing means to want something. But I think longing is not just wanting; it's wanting while you're also losing hope. It's not just about missing someone it's about carrying them inside you even though you know that you might not see them again.

All our lives, we long for certain things: some long for a certain kind of love, some for a different life, and some long for a version of themselves they once were or hope to become. And sometimes, we do get all those things. But then life, being life, takes them away. And then we find ourselves at the bottom with not just longing but mourning, because longing, after all, is mourning in silence.

So one might wonder, wouldn't it be better if one had never gotten to experience that? Unfulfilled dreams leave behind the pain of "What could've been?" But the memory of a beautiful life once lived is more haunting than the absence of it ever was.

Bahadur Shah Zafar wrote in one of his poems:

\u0627\u0646 \u062D\u0633\u0631\u062A\u0648\u06BA \u0633\u06D2 \u06A9\u06C1\u06C1 \u062F\u0648 \u06A9\u06C1\u06CC\u06BA \u0627\u0648\u0631 \u062C\u0627 \u0628\u0633\u06CC\u06BA
\u0627\u062A\u0646\u06CC \u062C\u06AF\u06C1 \u06A9\u06C1\u0627\u06BA \u06C1\u06D2 \u062F\u0644 \u062F\u0627\u063A\u062F\u0627\u0631 \u0645\u06CC\u06BA

"Tell these longings to settle somewhere else,
For how much room remains in this scarred chest?"`},{file:"holding-on-to-what-never-was.jpg",slug:"holding-on-to-what-never-was",title:"Holding On To What Never Was",medium:"Oil on canvas",size:[91,61],description:`Sometimes we hold on to things, people, memories, and even places, not because we believe they\u2019ll return, but because the idea of letting them go feels like admitting they never mattered in the first place. As long as holding on isn\u2019t weighing us down, it reminds us of our capacity to love and how strong we are.

But sometimes, we hold on to what never truly existed and I believe that\u2019s one of the most painful forms of grief one can experience. Because in your mind, it all feels so real that it becomes your reality. I think it's human nature to stay in our comfort zones, and holding on to just the idea of something gives us comfort. Sometimes, fantasy feels safer than reality.

Yet fantasy often arises from something that was once real, a moment of connection, a kind word spoken at the right time and a right place, someone who made you feel seen or valued. It\u2019s not always about the event itself, but the spark it ignited within you. Because in the end, fantasy is a reflection of the reality you wished for.

The problem begins when reality no longer breathes life into that fantasy. With time, we come to realize that what we\u2019ve been holding on to, whether it\u2019s a person, a memory, a place, or a moment, is merely a possibility. And so we find ourselves asking:

"Was it ever real, or just beautiful enough to believe in?"`},{file:"but-i-gave-you-comfort.jpg",slug:"but-i-gave-you-comfort",title:"But I Gave You Comfort!",medium:"Oil on canvas",size:[91,61],description:`I wasn\u2019t looking, but these words found me and they stayed:

"\u062F\u06BE\u0648\u067E \u0633\u06C1\u06C1 \u06A9\u0631 \u062C\u0648 \u0633\u0627\u06CC\u06C1 \u062F\u06CC\u0627
\u0648\u06C1 \u0633\u0627\u06CC\u06C1 \u0632\u062E\u0645 \u0633\u0627 \u0644\u06AF\u062A\u0627 \u06C1\u06D2"

"The shade you offered after the scorching sun\u2014
now feels like a wound itself."

\u201CBut I gave you comfort\u201D is not a neutral statement rather a very defensive one.
It\u2019s something said to dismiss your pain.
It turns love into currency, care into justification, and ignores the sword entirely.

There\u2019s a certain kind of pain that doesn\u2019t come from strangers. It comes from people who were close, those who claimed love, friendship, care. And when you finally gather the strength to speak, to say, \u201CYou hurt me\u2026\u201D
they look at you, confused or angry, and say:
\u201CBut I gave you comfort.\u201D
As if that cancels everything.
As if kind gestures undo sharp words.
As if staying makes the silence less cruel.
As if buying gifts erases the control.
As if providing shelter means the home wasn\u2019t suffocating.
And somehow, you're left being the one who feels guilty.
For naming the pain.
For remembering the things they pretend never happened.
For bleeding in a place that looked like love.

It\u2019s the voice of a parent who says \u201CI gave you everything\u201D when reminded of emotional neglect.
The partner who says \u201CI loved you\u201D when reminded of how they made you feel small.
The friend who says \u201CI was there for you\u201D when they weren\u2019t, at least not in the way it mattered.

Sometimes the softest words leave the deepest wounds and the hardest part isn\u2019t the pain itself,
but the loneliness of having no one willing to admit it happened.`}]});var Zf=At((E7,Im)=>{"use strict";var q0={instagram:"muzammil_qureshi",email:"muzammilqureshi100@gmail.com"},Pm='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/></svg>',$m='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M3.5 7l8.5 6 8.5-6"/></svg>';q0.instagramUrl="https://instagram.com/"+q0.instagram;q0.mailUrl="mailto:"+q0.email+"?subject="+encodeURIComponent("Your paintings");q0.icons=t=>`
	<a class="${t}" href="${q0.instagramUrl}" target="_blank" rel="noopener" aria-label="Instagram: @${q0.instagram}" title="Instagram">${Pm}</a>
	<a class="${t}" href="${q0.mailUrl}" aria-label="Email ${q0.email}" title="Email">${$m}</a>`;q0.line=t=>`
	<span class="${t}">
		<a href="${q0.instagramUrl}" target="_blank" rel="noopener">${Pm}<span>@${q0.instagram}</span></a>
		<a href="${q0.mailUrl}">${$m}<span>${q0.email}</span></a>
	</span>`;Im.exports=q0});var pl=At((z7,qm)=>{"use strict";qm.exports=t=>{if(!t)return"";let e=[];return t.medium&&e.push(t.medium),t.size&&t.size.length===2&&e.push(t.size[0]+" \xD7 "+t.size[1]+" cm"),e.join("  \xB7  ")}});var wu=At((A7,Gm)=>{"use strict";var Y4=bu(),K4=Zf(),Dm=pl(),Q4=Ar(),Va=t=>String(t).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Z4=`
.plist {
	position: fixed; inset: 0; z-index: 300;
	overflow-y: auto; -webkit-overflow-scrolling: touch;
	background: #14100c; color: #f4ecdf;
	font-family: 'Cormorant Garamond', Georgia, serif;
	opacity: 0; transition: opacity .5s ease;
}
.plist.on { opacity: 1; }
.plist * { box-sizing: border-box; }
.plist-head { max-width: 1100px; margin: 0 auto; padding: clamp(28px, 6vw, 72px) 20px 10px; text-align: center; }
.plist-head h1 { margin: 0; font-weight: 500; font-size: clamp(40px, 7vw, 72px); letter-spacing: .01em; }
.plist-motto { margin: 12px 0 18px; font-style: italic; font-size: clamp(18px, 2.2vw, 22px); line-height: 1.4; opacity: .9; }
.plist-contact { display: flex; justify-content: center; flex-wrap: wrap; gap: 6px 20px; font-size: 16px; }
.plist-contact a { display: inline-flex; align-items: center; gap: 7px; min-height: 36px; color: #e9cf9a; text-decoration: none; }
.plist-close {
	position: fixed; top: 12px; right: 14px; min-height: 44px; padding: 0 16px; z-index: 2;
	border: 1px solid rgba(244,236,223,.32); border-radius: 999px; background: rgba(20,15,10,.6);
	color: #f4ecdf; font: 500 12px/1 Georgia, serif; letter-spacing: .16em; text-transform: uppercase; cursor: pointer;
}
.plist-grid { max-width: 1100px; margin: 0 auto; padding: 30px 20px 80px; display: grid; gap: 56px 40px; grid-template-columns: repeat(auto-fill, minmax(min(100%, 440px), 1fr)); }
.plist-item img { display: block; width: 100%; height: auto; background: #241c15; box-shadow: 0 18px 40px rgba(0,0,0,.45); }
.plist-meta { margin: 18px 0 4px; font: 500 12px/1.4 Georgia, serif; letter-spacing: .24em; text-transform: uppercase; color: #e9cf9a; }
.plist-item h2 { margin: 0 0 10px; font-weight: 500; font-size: clamp(26px, 3vw, 34px); line-height: 1.1; }
.plist-item details summary { cursor: pointer; font-style: italic; font-size: 17px; opacity: .85; }
.plist-item details p { margin: 12px 0 0; white-space: pre-line; font-size: 18px; line-height: 1.6; color: rgba(244,236,223,.9); }
.plist-note { max-width: 640px; margin: 0 auto; padding: 0 20px; text-align: center; font-size: 16px; opacity: .75; }
`,D0=null;function J4(t){if(D0){D0.hidden=!1,requestAnimationFrame(()=>D0.classList.add("on"));return}let e=document.createElement("style");e.textContent=Z4,document.head.appendChild(e);let o=!Q4.isPhone;D0=document.createElement("div"),D0.className="plist",D0.setAttribute("role","region"),D0.setAttribute("aria-label","All paintings"),D0.innerHTML=`
		${t?"":'<button type="button" class="plist-close">Back to the gallery</button>'}
		<header class="plist-head">
			<h1>Muzammil</h1>
			<p class="plist-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</p>
			${K4.line("plist-contact")}
		</header>
		${t?'<p class="plist-note">This device could not open the 3D gallery, so here are the paintings on their own.</p>':""}
		<main class="plist-grid">
			${Y4.map(n=>`
			<article class="plist-item" id="${Va(n.slug)}">
				<img loading="lazy" decoding="async" alt="${Va(n.title)}, ${Va(Dm(n))}"
					src="images/web/${Va(n.slug)}${o?"":"-1024"}.webp"
					onerror="this.onerror=null;this.src='images/${Va(n.file)}'">
				<p class="plist-meta">${Va(Dm(n))}</p>
				<h2>${Va(n.title)}</h2>
				<details><summary>Read its story</summary>
					${String(n.description).split(/\n\s*\n/).map(a=>`<p>${Va(a.trim())}</p>`).join("")}
				</details>
			</article>`).join("")}
		</main>`,["mousedown","pointerdown","click","wheel","touchstart","touchmove","keydown"].forEach(n=>D0.addEventListener(n,a=>a.stopPropagation(),{passive:!0}));let r=D0.querySelector(".plist-close");r&&r.addEventListener("click",Fm),document.body.appendChild(D0),requestAnimationFrame(()=>D0.classList.add("on"))}function Fm(){D0&&(D0.classList.remove("on"),setTimeout(()=>{D0.hidden=!0},500),location.hash==="#list"&&history.replaceState(null,"",location.pathname+location.search))}Gm.exports={show:J4,hide:Fm}});var Hm=At((_u,Mu)=>{(function(t,e){typeof _u=="object"&&typeof Mu!="undefined"?Mu.exports=e():typeof define=="function"&&define.amd?define(e):t.Stats=e()})(_u,function(){var t=function(){function e(d){return n.appendChild(d.dom),d}function o(d){for(var u=0;u<n.children.length;u++)n.children[u].style.display=u===d?"block":"none";r=d}var r=0,n=document.createElement("div");n.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",n.addEventListener("click",function(d){d.preventDefault(),o(++r%n.children.length)},!1);var a=(performance||Date).now(),s=a,i=0,c=e(new t.Panel("FPS","#0ff","#002")),h=e(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var f=e(new t.Panel("MB","#f08","#201"));return o(0),{REVISION:16,dom:n,addPanel:e,showPanel:o,begin:function(){a=(performance||Date).now()},end:function(){i++;var d=(performance||Date).now();if(h.update(d-a,200),d>s+1e3&&(c.update(1e3*i/(d-s),100),s=d,i=0,f)){var u=performance.memory;f.update(u.usedJSHeapSize/1048576,u.jsHeapSizeLimit/1048576)}return d},update:function(){a=this.end()},domElement:n,setMode:o}};return t.Panel=function(e,o,r){var n=1/0,a=0,s=Math.round,i=s(window.devicePixelRatio||1),c=80*i,h=48*i,f=3*i,d=2*i,u=3*i,v=15*i,l=74*i,p=30*i,m=document.createElement("canvas");m.width=c,m.height=h,m.style.cssText="width:80px;height:48px";var g=m.getContext("2d");return g.font="bold "+9*i+"px Helvetica,Arial,sans-serif",g.textBaseline="top",g.fillStyle=r,g.fillRect(0,0,c,h),g.fillStyle=o,g.fillText(e,f,d),g.fillRect(u,v,l,p),g.fillStyle=r,g.globalAlpha=.9,g.fillRect(u,v,l,p),{dom:m,update:function(x,y){n=Math.min(n,x),a=Math.max(a,x),g.fillStyle=r,g.globalAlpha=1,g.fillRect(0,0,c,v),g.fillStyle=o,g.fillText(s(x)+" "+e+" ("+s(n)+"-"+s(a)+")",f,d),g.drawImage(m,u+i,v,l-i,p,u,v,l-i,p),g.fillRect(u+l-i,v,i,p),g.fillStyle=r,g.globalAlpha=.9,g.fillRect(u+l-i,v,i,s((1-x/y)*p))}}},t})});var Um=At((ku,Su)=>{(function(t,e){typeof ku=="object"&&typeof Su!="undefined"?Su.exports=e():typeof define=="function"&&define.amd?define(e):t.createREGL=e()})(ku,function(){"use strict";var t=function(b){return b instanceof Uint8Array||b instanceof Uint16Array||b instanceof Uint32Array||b instanceof Int8Array||b instanceof Int16Array||b instanceof Int32Array||b instanceof Float32Array||b instanceof Float64Array||b instanceof Uint8ClampedArray},e=function(b,z){for(var P=Object.keys(z),it=0;it<P.length;++it)b[P[it]]=z[P[it]];return b},o=`
`;function r(b){return typeof atob!="undefined"?atob(b):"base64:"+b}function n(b){var z=new Error("(regl) "+b);throw console.error(z),z}function a(b,z){b||n(z)}function s(b){return b?": "+b:""}function i(b,z,P){b in z||n("unknown parameter ("+b+")"+s(P)+". possible values: "+Object.keys(z).join())}function c(b,z){t(b)||n("invalid parameter type"+s(z)+". must be a typed array")}function h(b,z){switch(z){case"number":return typeof b=="number";case"object":return typeof b=="object";case"string":return typeof b=="string";case"boolean":return typeof b=="boolean";case"function":return typeof b=="function";case"undefined":return typeof b=="undefined";case"symbol":return typeof b=="symbol"}}function f(b,z,P){h(b,z)||n("invalid parameter type"+s(P)+". expected "+z+", got "+typeof b)}function d(b,z){b>=0&&(b|0)===b||n("invalid parameter type, ("+b+")"+s(z)+". must be a nonnegative integer")}function u(b,z,P){z.indexOf(b)<0&&n("invalid value"+s(P)+". must be one of: "+z)}var v=["gl","canvas","container","attributes","pixelRatio","extensions","optionalExtensions","profile","onDone"];function l(b){Object.keys(b).forEach(function(z){v.indexOf(z)<0&&n('invalid regl constructor argument "'+z+'". must be one of '+v)})}function p(b,z){for(b=b+"";b.length<z;)b=" "+b;return b}function m(){this.name="unknown",this.lines=[],this.index={},this.hasErrors=!1}function g(b,z){this.number=b,this.line=z,this.errors=[]}function x(b,z,P){this.file=b,this.line=z,this.message=P}function y(){var b=new Error,z=(b.stack||b).toString(),P=/compileProcedure.*\n\s*at.*\((.*)\)/.exec(z);if(P)return P[1];var it=/compileProcedure.*\n\s*at\s+(.*)(\n|$)/.exec(z);return it?it[1]:"unknown"}function w(){var b=new Error,z=(b.stack||b).toString(),P=/at REGLCommand.*\n\s+at.*\((.*)\)/.exec(z);if(P)return P[1];var it=/at REGLCommand.*\n\s+at\s+(.*)\n/.exec(z);return it?it[1]:"unknown"}function _(b,z){var P=b.split(`
`),it=1,bt=0,nt={unknown:new m,0:new m};nt.unknown.name=nt[0].name=z||y(),nt.unknown.lines.push(new g(0,""));for(var ft=0;ft<P.length;++ft){var Ot=P[ft],qt=/^\s*#\s*(\w+)\s+(.+)\s*$/.exec(Ot);if(qt)switch(qt[1]){case"line":var jt=/(\d+)(\s+\d+)?/.exec(qt[2]);jt&&(it=jt[1]|0,jt[2]&&(bt=jt[2]|0,bt in nt||(nt[bt]=new m)));break;case"define":var Dt=/SHADER_NAME(_B64)?\s+(.*)$/.exec(qt[2]);Dt&&(nt[bt].name=Dt[1]?r(Dt[2]):Dt[2]);break}nt[bt].lines.push(new g(it++,Ot))}return Object.keys(nt).forEach(function(Qt){var re=nt[Qt];re.lines.forEach(function(Ct){re.index[Ct.number]=Ct})}),nt}function M(b){var z=[];return b.split(`
`).forEach(function(P){if(!(P.length<5)){var it=/^ERROR:\s+(\d+):(\d+):\s*(.*)$/.exec(P);it?z.push(new x(it[1]|0,it[2]|0,it[3].trim())):P.length>0&&z.push(new x("unknown",0,P))}}),z}function k(b,z){z.forEach(function(P){var it=b[P.file];if(it){var bt=it.index[P.line];if(bt){bt.errors.push(P),it.hasErrors=!0;return}}b.unknown.hasErrors=!0,b.unknown.lines[0].errors.push(P)})}function R(b,z,P,it,bt){if(!b.getShaderParameter(z,b.COMPILE_STATUS)){var nt=b.getShaderInfoLog(z),ft=it===b.FRAGMENT_SHADER?"fragment":"vertex";dt(P,"string",ft+" shader source must be a string",bt);var Ot=_(P,bt),qt=M(nt);k(Ot,qt),Object.keys(Ot).forEach(function(jt){var Dt=Ot[jt];if(!Dt.hasErrors)return;var Qt=[""],re=[""];function Ct(Zt,Z){Qt.push(Zt),re.push(Z||"")}Ct("file number "+jt+": "+Dt.name+`
`,"color:red;text-decoration:underline;font-weight:bold"),Dt.lines.forEach(function(Zt){if(Zt.errors.length>0){Ct(p(Zt.number,4)+"|  ","background-color:yellow; font-weight:bold"),Ct(Zt.line+o,"color:red; background-color:yellow; font-weight:bold");var Z=0;Zt.errors.forEach(function(ht){var Ht=ht.message,he=/^\s*'(.*)'\s*:\s*(.*)$/.exec(Ht);if(he){var St=he[1];switch(Ht=he[2],St){case"assign":St="=";break}Z=Math.max(Zt.line.indexOf(St,Z),0)}else Z=0;Ct(p("| ",6)),Ct(p("^^^",Z+3)+o,"font-weight:bold"),Ct(p("| ",6)),Ct(Ht+o,"font-weight:bold")}),Ct(p("| ",6)+o)}else Ct(p(Zt.number,4)+"|  "),Ct(Zt.line+o,"color:red")}),typeof document!="undefined"&&!window.chrome?(re[0]=Qt.join("%c"),console.log.apply(console,re)):console.log(Qt.join(""))}),a.raise("Error compiling "+ft+" shader, "+Ot[0].name)}}function A(b,z,P,it,bt){if(!b.getProgramParameter(z,b.LINK_STATUS)){var nt=b.getProgramInfoLog(z),ft=_(P,bt),Ot=_(it,bt),qt='Error linking program with vertex shader, "'+Ot[0].name+'", and fragment shader "'+ft[0].name+'"';typeof document!="undefined"?console.log("%c"+qt+o+"%c"+nt,"color:red;text-decoration:underline;font-weight:bold","color:red"):console.log(qt+o+nt),a.raise(qt)}}function F(b){b._commandRef=y()}function C(b,z,P,it){F(b);function bt(qt){return qt?it.id(qt):0}b._fragId=bt(b.static.frag),b._vertId=bt(b.static.vert);function nt(qt,jt){Object.keys(jt).forEach(function(Dt){qt[it.id(Dt)]=!0})}var ft=b._uniformSet={};nt(ft,z.static),nt(ft,z.dynamic);var Ot=b._attributeSet={};nt(Ot,P.static),nt(Ot,P.dynamic),b._hasCount="count"in b.static||"count"in b.dynamic||"elements"in b.static||"elements"in b.dynamic}function H(b,z){var P=w();n(b+" in command "+(z||y())+(P==="unknown"?"":" called from "+P))}function I(b,z,P){b||H(z,P||y())}function V(b,z,P,it){b in z||H("unknown parameter ("+b+")"+s(P)+". possible values: "+Object.keys(z).join(),it||y())}function dt(b,z,P,it){h(b,z)||H("invalid parameter type"+s(P)+". expected "+z+", got "+typeof b,it||y())}function $t(b){b()}function kt(b,z,P){b.texture?u(b.texture._texture.internalformat,z,"unsupported texture format for attachment"):u(b.renderbuffer._renderbuffer.format,P,"unsupported renderbuffer format for attachment")}var mt=33071,st=9728,Wt=9984,we=9985,_e=9986,Ve=9987,Ie=5120,xo=5121,ro=5122,pt=5123,X=5124,gt=5125,Nt=5126,ce=32819,xe=32820,ne=33635,Bt=34042,rt=36193,Xt={};Xt[Ie]=Xt[xo]=1,Xt[ro]=Xt[pt]=Xt[rt]=Xt[ne]=Xt[ce]=Xt[xe]=2,Xt[X]=Xt[gt]=Xt[Nt]=Xt[Bt]=4;function Te(b,z){return b===xe||b===ce||b===ne?2:b===Bt?4:Xt[b]*z}function Jt(b){return!(b&b-1)&&!!b}function It(b,z,P){var it,bt=z.width,nt=z.height,ft=z.channels;a(bt>0&&bt<=P.maxTextureSize&&nt>0&&nt<=P.maxTextureSize,"invalid texture shape"),(b.wrapS!==mt||b.wrapT!==mt)&&a(Jt(bt)&&Jt(nt),"incompatible wrap mode for texture, both width and height must be power of 2"),z.mipmask===1?bt!==1&&nt!==1&&a(b.minFilter!==Wt&&b.minFilter!==_e&&b.minFilter!==we&&b.minFilter!==Ve,"min filter requires mipmap"):(a(Jt(bt)&&Jt(nt),"texture must be a square power of 2 to support mipmapping"),a(z.mipmask===(bt<<1)-1,"missing or incomplete mipmap data")),z.type===Nt&&(P.extensions.indexOf("oes_texture_float_linear")<0&&a(b.minFilter===st&&b.magFilter===st,"filter not supported, must enable oes_texture_float_linear"),a(!b.genMipmaps,"mipmap generation not supported with float textures"));var Ot=z.images;for(it=0;it<16;++it)if(Ot[it]){var qt=bt>>it,jt=nt>>it;a(z.mipmask&1<<it,"missing mipmap data");var Dt=Ot[it];if(a(Dt.width===qt&&Dt.height===jt,"invalid shape for mip images"),a(Dt.format===z.format&&Dt.internalformat===z.internalformat&&Dt.type===z.type,"incompatible type for mip image"),!Dt.compressed)if(Dt.data){var Qt=Math.ceil(Te(Dt.type,ft)*qt/Dt.unpackAlignment)*Dt.unpackAlignment;a(Dt.data.byteLength===Qt*jt,"invalid data for image, buffer size is inconsistent with image format")}else Dt.element||Dt.copy}else b.genMipmaps||a((z.mipmask&1<<it)===0,"extra mipmap data");z.compressed&&a(!b.genMipmaps,"mipmap generation for compressed images not supported")}function He(b,z,P,it){var bt=b.width,nt=b.height,ft=b.channels;a(bt>0&&bt<=it.maxTextureSize&&nt>0&&nt<=it.maxTextureSize,"invalid texture shape"),a(bt===nt,"cube map must be square"),a(z.wrapS===mt&&z.wrapT===mt,"wrap mode not supported by cube map");for(var Ot=0;Ot<P.length;++Ot){var qt=P[Ot];a(qt.width===bt&&qt.height===nt,"inconsistent cube map face shape"),z.genMipmaps&&(a(!qt.compressed,"can not generate mipmap for compressed textures"),a(qt.mipmask===1,"can not specify mipmaps and generate mipmaps"));for(var jt=qt.images,Dt=0;Dt<16;++Dt){var Qt=jt[Dt];if(Qt){var re=bt>>Dt,Ct=nt>>Dt;a(qt.mipmask&1<<Dt,"missing mipmap data"),a(Qt.width===re&&Qt.height===Ct,"invalid shape for mip images"),a(Qt.format===b.format&&Qt.internalformat===b.internalformat&&Qt.type===b.type,"incompatible type for mip image"),Qt.compressed||(Qt.data?a(Qt.data.byteLength===re*Ct*Math.max(Te(Qt.type,ft),Qt.unpackAlignment),"invalid data for image, buffer size is inconsistent with image format"):Qt.element||Qt.copy)}}}}var S=e(a,{optional:$t,raise:n,commandRaise:H,command:I,parameter:i,commandParameter:V,constructor:l,type:f,commandType:dt,isTypedArray:c,nni:d,oneOf:u,shaderError:R,linkError:A,callSite:w,saveCommandRef:F,saveDrawInfo:C,framebufferFormat:kt,guessCommand:y,texture2D:It,textureCube:He}),Ge=0,je=0,Je=5,Mo=6;function vo(b,z){this.id=Ge++,this.type=b,this.data=z}function Ro(b){return b.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}function Ao(b){if(b.length===0)return[];var z=b.charAt(0),P=b.charAt(b.length-1);if(b.length>1&&z===P&&(z==='"'||z==="'"))return['"'+Ro(b.substr(1,b.length-2))+'"'];var it=/\[(false|true|null|\d+|'[^']*'|"[^"]*")\]/.exec(b);if(it)return Ao(b.substr(0,it.index)).concat(Ao(it[1])).concat(Ao(b.substr(it.index+it[0].length)));var bt=b.split(".");if(bt.length===1)return['"'+Ro(b)+'"'];for(var nt=[],ft=0;ft<bt.length;++ft)nt=nt.concat(Ao(bt[ft]));return nt}function Jo(b){return"["+Ao(b).join("][")+"]"}function Wn(b,z){return new vo(b,Jo(z+""))}function lr(b){return typeof b=="function"&&!b._reglType||b instanceof vo}function et(b,z){if(typeof b=="function")return new vo(je,b);if(typeof b=="number"||typeof b=="boolean")return new vo(Je,b);if(Array.isArray(b))return new vo(Mo,b.map((P,it)=>et(P,z+"["+it+"]")));if(b instanceof vo)return b;S(!1,"invalid option type in uniform "+z)}var U={DynamicVariable:vo,define:Wn,isDynamic:lr,unbox:et,accessor:Jo},Q={next:typeof requestAnimationFrame=="function"?function(b){return requestAnimationFrame(b)}:function(b){return setTimeout(b,16)},cancel:typeof cancelAnimationFrame=="function"?function(b){return cancelAnimationFrame(b)}:clearTimeout},j=typeof performance!="undefined"&&performance.now?function(){return performance.now()}:function(){return+new Date};function Tt(){var b={"":0},z=[""];return{id:function(P){var it=b[P];return it||(it=b[P]=z.length,z.push(P),it)},str:function(P){return z[P]}}}function Kt(b,z,P){var it=document.createElement("canvas");e(it.style,{border:0,margin:0,padding:0,top:0,left:0}),b.appendChild(it),b===document.body&&(it.style.position="absolute",e(b.style,{margin:0,padding:0}));function bt(){var Ot=window.innerWidth,qt=window.innerHeight;if(b!==document.body){var jt=b.getBoundingClientRect();Ot=jt.right-jt.left,qt=jt.bottom-jt.top}it.width=P*Ot,it.height=P*qt,e(it.style,{width:Ot+"px",height:qt+"px"})}var nt;b!==document.body&&typeof ResizeObserver=="function"?(nt=new ResizeObserver(function(){setTimeout(bt)}),nt.observe(b)):window.addEventListener("resize",bt,!1);function ft(){nt?nt.disconnect():window.removeEventListener("resize",bt),b.removeChild(it)}return bt(),{canvas:it,onDestroy:ft}}function Rt(b,z){function P(it){try{return b.getContext(it,z)}catch(bt){return null}}return P("webgl")||P("experimental-webgl")||P("webgl-experimental")}function _t(b){return typeof b.nodeName=="string"&&typeof b.appendChild=="function"&&typeof b.getBoundingClientRect=="function"}function fe(b){return typeof b.drawArrays=="function"||typeof b.drawElements=="function"}function Ft(b){return typeof b=="string"?b.split():(S(Array.isArray(b),"invalid extension array"),b)}function ye(b){return typeof b=="string"?(S(typeof document!="undefined","not supported outside of DOM"),document.querySelector(b)):b}function ue(b){var z=b||{},P,it,bt,nt,ft={},Ot=[],qt=[],jt=typeof window=="undefined"?1:window.devicePixelRatio,Dt=!1,Qt=function(Zt){Zt&&S.raise(Zt)},re=function(){};if(typeof z=="string"?(S(typeof document!="undefined","selector queries only supported in DOM enviroments"),P=document.querySelector(z),S(P,"invalid query string for element")):typeof z=="object"?_t(z)?P=z:fe(z)?(nt=z,bt=nt.canvas):(S.constructor(z),"gl"in z?nt=z.gl:"canvas"in z?bt=ye(z.canvas):"container"in z&&(it=ye(z.container)),"attributes"in z&&(ft=z.attributes,S.type(ft,"object","invalid context attributes")),"extensions"in z&&(Ot=Ft(z.extensions)),"optionalExtensions"in z&&(qt=Ft(z.optionalExtensions)),"onDone"in z&&(S.type(z.onDone,"function","invalid or missing onDone callback"),Qt=z.onDone),"profile"in z&&(Dt=!!z.profile),"pixelRatio"in z&&(jt=+z.pixelRatio,S(jt>0,"invalid pixel ratio"))):S.raise("invalid arguments to regl"),P&&(P.nodeName.toLowerCase()==="canvas"?bt=P:it=P),!nt){if(!bt){S(typeof document!="undefined","must manually specify webgl context outside of DOM environments");var Ct=Kt(it||document.body,Qt,jt);if(!Ct)return null;bt=Ct.canvas,re=Ct.onDestroy}ft.premultipliedAlpha===void 0&&(ft.premultipliedAlpha=!0),nt=Rt(bt,ft)}return nt?{gl:nt,canvas:bt,container:it,extensions:Ot,optionalExtensions:qt,pixelRatio:jt,profile:Dt,onDone:Qt,onDestroy:re}:(re(),Qt("webgl not supported, try upgrading your browser or graphics drivers http://get.webgl.org"),null)}function Me(b,z){var P={};function it(ft){S.type(ft,"string","extension name must be string");var Ot=ft.toLowerCase(),qt;try{qt=P[Ot]=b.getExtension(Ot)}catch(jt){}return!!qt}for(var bt=0;bt<z.extensions.length;++bt){var nt=z.extensions[bt];if(!it(nt))return z.onDestroy(),z.onDone('"'+nt+'" extension is not supported by the current WebGL context, try upgrading your system or a different browser'),null}return z.optionalExtensions.forEach(it),{extensions:P,restore:function(){Object.keys(P).forEach(function(ft){if(P[ft]&&!it(ft))throw new Error("(regl): error restoring extension "+ft)})}}}function Re(b,z){for(var P=Array(b),it=0;it<b;++it)P[it]=z(it);return P}var pe=5120,Ue=5121,Ye=5122,se=5123,eo=5124,ko=5125,Io=5126;function Oe(b){for(var z=16;z<=1<<28;z*=16)if(b<=z)return z;return 0}function qe(b){var z,P;return z=(b>65535)<<4,b>>>=z,P=(b>255)<<3,b>>>=P,z|=P,P=(b>15)<<2,b>>>=P,z|=P,P=(b>3)<<1,b>>>=P,z|=P,z|b>>1}function oo(){var b=Re(8,function(){return[]});function z(nt){var ft=Oe(nt),Ot=b[qe(ft)>>2];return Ot.length>0?Ot.pop():new ArrayBuffer(ft)}function P(nt){b[qe(nt.byteLength)>>2].push(nt)}function it(nt,ft){var Ot=null;switch(nt){case pe:Ot=new Int8Array(z(ft),0,ft);break;case Ue:Ot=new Uint8Array(z(ft),0,ft);break;case Ye:Ot=new Int16Array(z(2*ft),0,ft);break;case se:Ot=new Uint16Array(z(2*ft),0,ft);break;case eo:Ot=new Int32Array(z(4*ft),0,ft);break;case ko:Ot=new Uint32Array(z(4*ft),0,ft);break;case Io:Ot=new Float32Array(z(4*ft),0,ft);break;default:return null}return Ot.length!==ft?Ot.subarray(0,ft):Ot}function bt(nt){P(nt.buffer)}return{alloc:z,free:P,allocType:it,freeType:bt}}var B=oo();B.zero=oo();var yt=3408,Yt=3410,Le=3411,$e=3412,un=3413,d0=3414,P0=3415,dn=33901,A0=33902,pn=3379,To=3386,r0=34921,on=36347,Vn=36348,K0=35661,Q0=35660,tn=34930,kr=36349,Tn=34076,Hr=34024,Fo=7936,vn=7937,Sr=7938,zs=35724,ia=34047,As=36063,xf=34852,Ga=3553,ki=34067,Bc=34069,M1=33984,ba=6408,jc=5126,T0=5121,Wc=36160,Ts=36053,_b=36064,Mb=16384,kb=function(b,z){var P=1;z.ext_texture_filter_anisotropic&&(P=b.getParameter(ia));var it=1,bt=1;z.webgl_draw_buffers&&(it=b.getParameter(xf),bt=b.getParameter(As));var nt=!!z.oes_texture_float;if(nt){var ft=b.createTexture();b.bindTexture(Ga,ft),b.texImage2D(Ga,0,ba,1,1,0,ba,jc,null);var Ot=b.createFramebuffer();if(b.bindFramebuffer(Wc,Ot),b.framebufferTexture2D(Wc,_b,Ga,ft,0),b.bindTexture(Ga,null),b.checkFramebufferStatus(Wc)!==Ts)nt=!1;else{b.viewport(0,0,1,1),b.clearColor(1,0,0,1),b.clear(Mb);var qt=B.allocType(jc,4);b.readPixels(0,0,1,1,ba,jc,qt),b.getError()?nt=!1:(b.deleteFramebuffer(Ot),b.deleteTexture(ft),nt=qt[0]===1),B.freeType(qt)}}var jt=typeof navigator!="undefined"&&(/MSIE/.test(navigator.userAgent)||/Trident\//.test(navigator.appVersion)||/Edge/.test(navigator.userAgent)),Dt=!0;if(!jt){var Qt=b.createTexture(),re=B.allocType(T0,36);b.activeTexture(M1),b.bindTexture(ki,Qt),b.texImage2D(Bc,0,ba,3,3,0,ba,T0,re),B.freeType(re),b.bindTexture(ki,null),b.deleteTexture(Qt),Dt=!b.getError()}return{colorBits:[b.getParameter(Yt),b.getParameter(Le),b.getParameter($e),b.getParameter(un)],depthBits:b.getParameter(d0),stencilBits:b.getParameter(P0),subpixelBits:b.getParameter(yt),extensions:Object.keys(z).filter(function(Ct){return!!z[Ct]}),maxAnisotropic:P,maxDrawbuffers:it,maxColorAttachments:bt,pointSizeDims:b.getParameter(dn),lineWidthDims:b.getParameter(A0),maxViewportDims:b.getParameter(To),maxCombinedTextureUnits:b.getParameter(K0),maxCubeMapSize:b.getParameter(Tn),maxRenderbufferSize:b.getParameter(Hr),maxTextureUnits:b.getParameter(tn),maxTextureSize:b.getParameter(pn),maxAttributes:b.getParameter(r0),maxVertexUniforms:b.getParameter(on),maxVertexTextureUnits:b.getParameter(Q0),maxVaryingVectors:b.getParameter(Vn),maxFragmentUniforms:b.getParameter(kr),glsl:b.getParameter(zs),renderer:b.getParameter(vn),vendor:b.getParameter(Fo),version:b.getParameter(Sr),readFloat:nt,npotTextureCube:Dt}};function Ur(b){return!!b&&typeof b=="object"&&Array.isArray(b.shape)&&Array.isArray(b.stride)&&typeof b.offset=="number"&&b.shape.length===b.stride.length&&(Array.isArray(b.data)||t(b.data))}var fr=function(b){return Object.keys(b).map(function(z){return b[z]})},yf={shape:Ab,flatten:zb};function Sb(b,z,P){for(var it=0;it<z;++it)P[it]=b[it]}function Eb(b,z,P,it){for(var bt=0,nt=0;nt<z;++nt)for(var ft=b[nt],Ot=0;Ot<P;++Ot)it[bt++]=ft[Ot]}function Pp(b,z,P,it,bt,nt){for(var ft=nt,Ot=0;Ot<z;++Ot)for(var qt=b[Ot],jt=0;jt<P;++jt)for(var Dt=qt[jt],Qt=0;Qt<it;++Qt)bt[ft++]=Dt[Qt]}function $p(b,z,P,it,bt){for(var nt=1,ft=P+1;ft<z.length;++ft)nt*=z[ft];var Ot=z[P];if(z.length-P===4){var qt=z[P+1],jt=z[P+2],Dt=z[P+3];for(ft=0;ft<Ot;++ft)Pp(b[ft],qt,jt,Dt,it,bt),bt+=nt}else for(ft=0;ft<Ot;++ft)$p(b[ft],z,P+1,it,bt),bt+=nt}function zb(b,z,P,it){var bt=1;if(z.length)for(var nt=0;nt<z.length;++nt)bt*=z[nt];else bt=0;var ft=it||B.allocType(P,bt);switch(z.length){case 0:break;case 1:Sb(b,z[0],ft);break;case 2:Eb(b,z[0],z[1],ft);break;case 3:Pp(b,z[0],z[1],z[2],ft,0);break;default:$p(b,z,0,ft,0)}return ft}function Ab(b){for(var z=[],P=b;P.length;P=P[0])z.push(P.length);return z}var k1={"[object Int8Array]":5120,"[object Int16Array]":5122,"[object Int32Array]":5124,"[object Uint8Array]":5121,"[object Uint8ClampedArray]":5121,"[object Uint16Array]":5123,"[object Uint32Array]":5125,"[object Float32Array]":5126,"[object Float64Array]":5121,"[object ArrayBuffer]":5121},Tb=5120,Lb=5122,Nb=5124,Rb=5121,Ob=5123,Cb=5125,Pb=5126,$b=5126,Ls={int8:Tb,int16:Lb,int32:Nb,uint8:Rb,uint16:Ob,uint32:Cb,float:Pb,float32:$b},Ib=35048,qb=35040,bf={dynamic:Ib,stream:qb,static:35044},S1=yf.flatten,Ip=yf.shape,qp=35044,Db=35040,E1=5121,z1=5126,Ha=[];Ha[5120]=1,Ha[5122]=2,Ha[5124]=4,Ha[5121]=1,Ha[5123]=2,Ha[5125]=4,Ha[5126]=4;function wf(b){return k1[Object.prototype.toString.call(b)]|0}function Dp(b,z){for(var P=0;P<z.length;++P)b[P]=z[P]}function Fp(b,z,P,it,bt,nt,ft){for(var Ot=0,qt=0;qt<P;++qt)for(var jt=0;jt<it;++jt)b[Ot++]=z[bt*qt+nt*jt+ft]}function Fb(b,z,P,it){var bt=0,nt={};function ft(Z){this.id=bt++,this.buffer=b.createBuffer(),this.type=Z,this.usage=qp,this.byteLength=0,this.dimension=1,this.dtype=E1,this.persistentData=null,P.profile&&(this.stats={size:0})}ft.prototype.bind=function(){b.bindBuffer(this.type,this.buffer)},ft.prototype.destroy=function(){re(this)};var Ot=[];function qt(Z,ht){var Ht=Ot.pop();return Ht||(Ht=new ft(Z)),Ht.bind(),Qt(Ht,ht,Db,0,1,!1),Ht}function jt(Z){Ot.push(Z)}function Dt(Z,ht,Ht){Z.byteLength=ht.byteLength,b.bufferData(Z.type,ht,Ht)}function Qt(Z,ht,Ht,he,St,me){var Lt;if(Z.usage=Ht,Array.isArray(ht)){if(Z.dtype=he||z1,ht.length>0){var te;if(Array.isArray(ht[0])){Lt=Ip(ht);for(var zt=1,ee=1;ee<Lt.length;++ee)zt*=Lt[ee];Z.dimension=zt,te=S1(ht,Lt,Z.dtype),Dt(Z,te,Ht),me?Z.persistentData=te:B.freeType(te)}else if(typeof ht[0]=="number"){Z.dimension=St;var Be=B.allocType(Z.dtype,ht.length);Dp(Be,ht),Dt(Z,Be,Ht),me?Z.persistentData=Be:B.freeType(Be)}else t(ht[0])?(Z.dimension=ht[0].length,Z.dtype=he||wf(ht[0])||z1,te=S1(ht,[ht.length,ht[0].length],Z.dtype),Dt(Z,te,Ht),me?Z.persistentData=te:B.freeType(te)):S.raise("invalid buffer data")}}else if(t(ht))Z.dtype=he||wf(ht),Z.dimension=St,Dt(Z,ht,Ht),me&&(Z.persistentData=new Uint8Array(new Uint8Array(ht.buffer)));else if(Ur(ht)){Lt=ht.shape;var to=ht.stride,ae=ht.offset,Vt=0,Mt=0,Qe=0,lo=0;Lt.length===1?(Vt=Lt[0],Mt=1,Qe=to[0],lo=0):Lt.length===2?(Vt=Lt[0],Mt=Lt[1],Qe=to[0],lo=to[1]):S.raise("invalid shape"),Z.dtype=he||wf(ht.data)||z1,Z.dimension=Mt;var Se=B.allocType(Z.dtype,Vt*Mt);Fp(Se,ht.data,Vt,Mt,Qe,lo,ae),Dt(Z,Se,Ht),me?Z.persistentData=Se:B.freeType(Se)}else ht instanceof ArrayBuffer?(Z.dtype=E1,Z.dimension=St,Dt(Z,ht,Ht),me&&(Z.persistentData=new Uint8Array(new Uint8Array(ht)))):S.raise("invalid buffer data")}function re(Z){z.bufferCount--,it(Z);var ht=Z.buffer;S(ht,"buffer must not be deleted already"),b.deleteBuffer(ht),Z.buffer=null,delete nt[Z.id]}function Ct(Z,ht,Ht,he){z.bufferCount++;var St=new ft(ht);nt[St.id]=St;function me(zt){var ee=qp,Be=null,to=0,ae=0,Vt=1;return Array.isArray(zt)||t(zt)||Ur(zt)||zt instanceof ArrayBuffer?Be=zt:typeof zt=="number"?to=zt|0:zt&&(S.type(zt,"object","buffer arguments must be an object, a number or an array"),"data"in zt&&(S(Be===null||Array.isArray(Be)||t(Be)||Ur(Be),"invalid data for buffer"),Be=zt.data),"usage"in zt&&(S.parameter(zt.usage,bf,"invalid buffer usage"),ee=bf[zt.usage]),"type"in zt&&(S.parameter(zt.type,Ls,"invalid buffer type"),ae=Ls[zt.type]),"dimension"in zt&&(S.type(zt.dimension,"number","invalid dimension"),Vt=zt.dimension|0),"length"in zt&&(S.nni(to,"buffer length must be a nonnegative integer"),to=zt.length|0)),St.bind(),Be?Qt(St,Be,ee,ae,Vt,he):(to&&b.bufferData(St.type,to,ee),St.dtype=ae||E1,St.usage=ee,St.dimension=Vt,St.byteLength=to),P.profile&&(St.stats.size=St.byteLength*Ha[St.dtype]),me}function Lt(zt,ee){S(ee+zt.byteLength<=St.byteLength,"invalid buffer subdata call, buffer is too small.  Can't write data of size "+zt.byteLength+" starting from offset "+ee+" to a buffer of size "+St.byteLength),b.bufferSubData(St.type,ee,zt)}function te(zt,ee){var Be=(ee||0)|0,to;if(St.bind(),t(zt)||zt instanceof ArrayBuffer)Lt(zt,Be);else if(Array.isArray(zt)){if(zt.length>0)if(typeof zt[0]=="number"){var ae=B.allocType(St.dtype,zt.length);Dp(ae,zt),Lt(ae,Be),B.freeType(ae)}else if(Array.isArray(zt[0])||t(zt[0])){to=Ip(zt);var Vt=S1(zt,to,St.dtype);Lt(Vt,Be),B.freeType(Vt)}else S.raise("invalid buffer data")}else if(Ur(zt)){to=zt.shape;var Mt=zt.stride,Qe=0,lo=0,Se=0,yo=0;to.length===1?(Qe=to[0],lo=1,Se=Mt[0],yo=0):to.length===2?(Qe=to[0],lo=to[1],Se=Mt[0],yo=Mt[1]):S.raise("invalid shape");var no=Array.isArray(zt.data)?St.dtype:wf(zt.data),mo=B.allocType(no,Qe*lo);Fp(mo,zt.data,Qe,lo,Se,yo,zt.offset),Lt(mo,Be),B.freeType(mo)}else S.raise("invalid data for buffer subdata");return me}return Ht||me(Z),me._reglType="buffer",me._buffer=St,me.subdata=te,P.profile&&(me.stats=St.stats),me.destroy=function(){re(St)},me}function Zt(){fr(nt).forEach(function(Z){Z.buffer=b.createBuffer(),b.bindBuffer(Z.type,Z.buffer),b.bufferData(Z.type,Z.persistentData||Z.byteLength,Z.usage)})}return P.profile&&(z.getTotalBufferSize=function(){var Z=0;return Object.keys(nt).forEach(function(ht){Z+=nt[ht].stats.size}),Z}),{create:Ct,createStream:qt,destroyStream:jt,clear:function(){fr(nt).forEach(re),Ot.forEach(re)},getBuffer:function(Z){return Z&&Z._buffer instanceof ft?Z._buffer:null},restore:Zt,_initBuffer:Qt}}var Gb=0,Hb=0,Ub=1,Bb=1,jb=4,Wb=4,Si={points:Gb,point:Hb,lines:Ub,line:Bb,triangles:jb,triangle:Wb,"line loop":2,"line strip":3,"triangle strip":5,"triangle fan":6},Vb=0,Xb=1,Vc=4,Yb=5120,Ei=5121,Gp=5122,zi=5123,Hp=5124,Ns=5125,A1=34963,Kb=35040,Qb=35044;function Zb(b,z,P,it){var bt={},nt=0,ft={uint8:Ei,uint16:zi};z.oes_element_index_uint&&(ft.uint32=Ns);function Ot(Zt){this.id=nt++,bt[this.id]=this,this.buffer=Zt,this.primType=Vc,this.vertCount=0,this.type=0}Ot.prototype.bind=function(){this.buffer.bind()};var qt=[];function jt(Zt){var Z=qt.pop();return Z||(Z=new Ot(P.create(null,A1,!0,!1)._buffer)),Qt(Z,Zt,Kb,-1,-1,0,0),Z}function Dt(Zt){qt.push(Zt)}function Qt(Zt,Z,ht,Ht,he,St,me){Zt.buffer.bind();var Lt;if(Z){var te=me;!me&&(!t(Z)||Ur(Z)&&!t(Z.data))&&(te=z.oes_element_index_uint?Ns:zi),P._initBuffer(Zt.buffer,Z,ht,te,3)}else b.bufferData(A1,St,ht),Zt.buffer.dtype=Lt||Ei,Zt.buffer.usage=ht,Zt.buffer.dimension=3,Zt.buffer.byteLength=St;if(Lt=me,!me){switch(Zt.buffer.dtype){case Ei:case Yb:Lt=Ei;break;case zi:case Gp:Lt=zi;break;case Ns:case Hp:Lt=Ns;break;default:S.raise("unsupported type for element array")}Zt.buffer.dtype=Lt}Zt.type=Lt,S(Lt!==Ns||!!z.oes_element_index_uint,"32 bit element buffers not supported, enable oes_element_index_uint first");var zt=he;zt<0&&(zt=Zt.buffer.byteLength,Lt===zi?zt>>=1:Lt===Ns&&(zt>>=2)),Zt.vertCount=zt;var ee=Ht;if(Ht<0){ee=Vc;var Be=Zt.buffer.dimension;Be===1&&(ee=Vb),Be===2&&(ee=Xb),Be===3&&(ee=Vc)}Zt.primType=ee}function re(Zt){it.elementsCount--,S(Zt.buffer!==null,"must not double destroy elements"),delete bt[Zt.id],Zt.buffer.destroy(),Zt.buffer=null}function Ct(Zt,Z){var ht=P.create(null,A1,!0),Ht=new Ot(ht._buffer);it.elementsCount++;function he(St){if(!St)ht(),Ht.primType=Vc,Ht.vertCount=0,Ht.type=Ei;else if(typeof St=="number")ht(St),Ht.primType=Vc,Ht.vertCount=St|0,Ht.type=Ei;else{var me=null,Lt=Qb,te=-1,zt=-1,ee=0,Be=0;Array.isArray(St)||t(St)||Ur(St)?me=St:(S.type(St,"object","invalid arguments for elements"),"data"in St&&(me=St.data,S(Array.isArray(me)||t(me)||Ur(me),"invalid data for element buffer")),"usage"in St&&(S.parameter(St.usage,bf,"invalid element buffer usage"),Lt=bf[St.usage]),"primitive"in St&&(S.parameter(St.primitive,Si,"invalid element buffer primitive"),te=Si[St.primitive]),"count"in St&&(S(typeof St.count=="number"&&St.count>=0,"invalid vertex count for elements"),zt=St.count|0),"type"in St&&(S.parameter(St.type,ft,"invalid buffer type"),Be=ft[St.type]),"length"in St?ee=St.length|0:(ee=zt,Be===zi||Be===Gp?ee*=2:(Be===Ns||Be===Hp)&&(ee*=4))),Qt(Ht,me,Lt,te,zt,ee,Be)}return he}return he(Zt),he._reglType="elements",he._elements=Ht,he.subdata=function(St,me){return ht.subdata(St,me),he},he.destroy=function(){re(Ht)},he}return{create:Ct,createStream:jt,destroyStream:Dt,getElements:function(Zt){return typeof Zt=="function"&&Zt._elements instanceof Ot?Zt._elements:null},clear:function(){fr(bt).forEach(re)}}}var Up=new Float32Array(1),Jb=new Uint32Array(Up.buffer),tw=5123;function Bp(b){for(var z=B.allocType(tw,b.length),P=0;P<b.length;++P)if(isNaN(b[P]))z[P]=65535;else if(b[P]===1/0)z[P]=31744;else if(b[P]===-1/0)z[P]=64512;else{Up[0]=b[P];var it=Jb[0],bt=it>>>31<<15,nt=(it<<1>>>24)-127,ft=it>>13&1023;if(nt<-24)z[P]=bt;else if(nt<-14){var Ot=-14-nt;z[P]=bt+(ft+1024>>Ot)}else nt>15?z[P]=bt+31744:z[P]=bt+(nt+15<<10)+ft}return z}function kn(b){return Array.isArray(b)||t(b)}var jp=function(b){return!(b&b-1)&&!!b},ew=34467,ca=3553,T1=34067,_f=34069,Rs=6408,L1=6406,Mf=6407,Xc=6409,kf=6410,Wp=32854,N1=32855,Vp=36194,ow=32819,nw=32820,rw=33635,aw=34042,R1=6402,Sf=34041,O1=35904,C1=35906,Ai=36193,P1=33776,$1=33777,I1=33778,q1=33779,Xp=35986,Yp=35987,Kp=34798,Qp=35840,Zp=35841,Jp=35842,tv=35843,ev=36196,Ti=5121,D1=5123,F1=5125,Yc=5126,sw=10242,iw=10243,cw=10497,G1=33071,lw=33648,fw=10240,hw=10241,H1=9728,uw=9729,U1=9984,ov=9985,nv=9986,B1=9987,dw=33170,Ef=4352,pw=4353,vw=4354,mw=34046,gw=3317,xw=37440,yw=37441,bw=37443,rv=37444,Kc=33984,ww=[U1,nv,ov,B1],zf=[0,Xc,kf,Mf,Rs],Er={};Er[Xc]=Er[L1]=Er[R1]=1,Er[Sf]=Er[kf]=2,Er[Mf]=Er[O1]=3,Er[Rs]=Er[C1]=4;function Li(b){return"[object "+b+"]"}var av=Li("HTMLCanvasElement"),sv=Li("OffscreenCanvas"),iv=Li("CanvasRenderingContext2D"),cv=Li("ImageBitmap"),lv=Li("HTMLImageElement"),fv=Li("HTMLVideoElement"),_w=Object.keys(k1).concat([av,sv,iv,cv,lv,fv]),Ni=[];Ni[Ti]=1,Ni[Yc]=4,Ni[Ai]=2,Ni[D1]=2,Ni[F1]=4;var p0=[];p0[Wp]=2,p0[N1]=2,p0[Vp]=2,p0[Sf]=4,p0[P1]=.5,p0[$1]=.5,p0[I1]=1,p0[q1]=1,p0[Xp]=.5,p0[Yp]=1,p0[Kp]=1,p0[Qp]=.5,p0[Zp]=.25,p0[Jp]=.5,p0[tv]=.25,p0[ev]=.5;function hv(b){return Array.isArray(b)&&(b.length===0||typeof b[0]=="number")}function uv(b){if(!Array.isArray(b))return!1;var z=b.length;return!(z===0||!kn(b[0]))}function Os(b){return Object.prototype.toString.call(b)}function dv(b){return Os(b)===av}function pv(b){return Os(b)===sv}function Mw(b){return Os(b)===iv}function kw(b){return Os(b)===cv}function Sw(b){return Os(b)===lv}function Ew(b){return Os(b)===fv}function j1(b){if(!b)return!1;var z=Os(b);return _w.indexOf(z)>=0?!0:hv(b)||uv(b)||Ur(b)}function vv(b){return k1[Object.prototype.toString.call(b)]|0}function zw(b,z){var P=z.length;switch(b.type){case Ti:case D1:case F1:case Yc:var it=B.allocType(b.type,P);it.set(z),b.data=it;break;case Ai:b.data=Bp(z);break;default:S.raise("unsupported texture type, must specify a typed array")}}function mv(b,z){return B.allocType(b.type===Ai?Yc:b.type,z)}function gv(b,z){b.type===Ai?(b.data=Bp(z),B.freeType(z)):b.data=z}function Aw(b,z,P,it,bt,nt){for(var ft=b.width,Ot=b.height,qt=b.channels,jt=ft*Ot*qt,Dt=mv(b,jt),Qt=0,re=0;re<Ot;++re)for(var Ct=0;Ct<ft;++Ct)for(var Zt=0;Zt<qt;++Zt)Dt[Qt++]=z[P*Ct+it*re+bt*Zt+nt];gv(b,Dt)}function Af(b,z,P,it,bt,nt){var ft;if(typeof p0[b]!="undefined"?ft=p0[b]:ft=Er[b]*Ni[z],nt&&(ft*=6),bt){for(var Ot=0,qt=P;qt>=1;)Ot+=ft*qt*qt,qt/=2;return Ot}else return ft*P*it}function Tw(b,z,P,it,bt,nt,ft){var Ot={"don't care":Ef,"dont care":Ef,nice:vw,fast:pw},qt={repeat:cw,clamp:G1,mirror:lw},jt={nearest:H1,linear:uw},Dt=e({mipmap:B1,"nearest mipmap nearest":U1,"linear mipmap nearest":ov,"nearest mipmap linear":nv,"linear mipmap linear":B1},jt),Qt={none:0,browser:rv},re={uint8:Ti,rgba4:ow,rgb565:rw,"rgb5 a1":nw},Ct={alpha:L1,luminance:Xc,"luminance alpha":kf,rgb:Mf,rgba:Rs,rgba4:Wp,"rgb5 a1":N1,rgb565:Vp},Zt={};z.ext_srgb&&(Ct.srgb=O1,Ct.srgba=C1),z.oes_texture_float&&(re.float32=re.float=Yc),z.oes_texture_half_float&&(re.float16=re["half float"]=Ai),z.webgl_depth_texture&&(e(Ct,{depth:R1,"depth stencil":Sf}),e(re,{uint16:D1,uint32:F1,"depth stencil":aw})),z.webgl_compressed_texture_s3tc&&e(Zt,{"rgb s3tc dxt1":P1,"rgba s3tc dxt1":$1,"rgba s3tc dxt3":I1,"rgba s3tc dxt5":q1}),z.webgl_compressed_texture_atc&&e(Zt,{"rgb atc":Xp,"rgba atc explicit alpha":Yp,"rgba atc interpolated alpha":Kp}),z.webgl_compressed_texture_pvrtc&&e(Zt,{"rgb pvrtc 4bppv1":Qp,"rgb pvrtc 2bppv1":Zp,"rgba pvrtc 4bppv1":Jp,"rgba pvrtc 2bppv1":tv}),z.webgl_compressed_texture_etc1&&(Zt["rgb etc1"]=ev);var Z=Array.prototype.slice.call(b.getParameter(ew));Object.keys(Zt).forEach(function(O){var ct=Zt[O];Z.indexOf(ct)>=0&&(Ct[O]=ct)});var ht=Object.keys(Ct);P.textureFormats=ht;var Ht=[];Object.keys(Ct).forEach(function(O){var ct=Ct[O];Ht[ct]=O});var he=[];Object.keys(re).forEach(function(O){var ct=re[O];he[ct]=O});var St=[];Object.keys(jt).forEach(function(O){var ct=jt[O];St[ct]=O});var me=[];Object.keys(Dt).forEach(function(O){var ct=Dt[O];me[ct]=O});var Lt=[];Object.keys(qt).forEach(function(O){var ct=qt[O];Lt[ct]=O});var te=ht.reduce(function(O,ct){var ot=Ct[ct];return ot===Xc||ot===L1||ot===Xc||ot===kf||ot===R1||ot===Sf||z.ext_srgb&&(ot===O1||ot===C1)?O[ot]=ot:ot===N1||ct.indexOf("rgba")>=0?O[ot]=Rs:O[ot]=Mf,O},{});function zt(){this.internalformat=Rs,this.format=Rs,this.type=Ti,this.compressed=!1,this.premultiplyAlpha=!1,this.flipY=!1,this.unpackAlignment=1,this.colorSpace=rv,this.width=0,this.height=0,this.channels=0}function ee(O,ct){O.internalformat=ct.internalformat,O.format=ct.format,O.type=ct.type,O.compressed=ct.compressed,O.premultiplyAlpha=ct.premultiplyAlpha,O.flipY=ct.flipY,O.unpackAlignment=ct.unpackAlignment,O.colorSpace=ct.colorSpace,O.width=ct.width,O.height=ct.height,O.channels=ct.channels}function Be(O,ct){if(!(typeof ct!="object"||!ct)){if("premultiplyAlpha"in ct&&(S.type(ct.premultiplyAlpha,"boolean","invalid premultiplyAlpha"),O.premultiplyAlpha=ct.premultiplyAlpha),"flipY"in ct&&(S.type(ct.flipY,"boolean","invalid texture flip"),O.flipY=ct.flipY),"alignment"in ct&&(S.oneOf(ct.alignment,[1,2,4,8],"invalid texture unpack alignment"),O.unpackAlignment=ct.alignment),"colorSpace"in ct&&(S.parameter(ct.colorSpace,Qt,"invalid colorSpace"),O.colorSpace=Qt[ct.colorSpace]),"type"in ct){var ot=ct.type;S(z.oes_texture_float||!(ot==="float"||ot==="float32"),"you must enable the OES_texture_float extension in order to use floating point textures."),S(z.oes_texture_half_float||!(ot==="half float"||ot==="float16"),"you must enable the OES_texture_half_float extension in order to use 16-bit floating point textures."),S(z.webgl_depth_texture||!(ot==="uint16"||ot==="uint32"||ot==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),S.parameter(ot,re,"invalid texture type"),O.type=re[ot]}var be=O.width,bo=O.height,L=O.channels,E=!1;"shape"in ct?(S(Array.isArray(ct.shape)&&ct.shape.length>=2,"shape must be an array"),be=ct.shape[0],bo=ct.shape[1],ct.shape.length===3&&(L=ct.shape[2],S(L>0&&L<=4,"invalid number of channels"),E=!0),S(be>=0&&be<=P.maxTextureSize,"invalid width"),S(bo>=0&&bo<=P.maxTextureSize,"invalid height")):("radius"in ct&&(be=bo=ct.radius,S(be>=0&&be<=P.maxTextureSize,"invalid radius")),"width"in ct&&(be=ct.width,S(be>=0&&be<=P.maxTextureSize,"invalid width")),"height"in ct&&(bo=ct.height,S(bo>=0&&bo<=P.maxTextureSize,"invalid height")),"channels"in ct&&(L=ct.channels,S(L>0&&L<=4,"invalid number of channels"),E=!0)),O.width=be|0,O.height=bo|0,O.channels=L|0;var q=!1;if("format"in ct){var K=ct.format;S(z.webgl_depth_texture||!(K==="depth"||K==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),S.parameter(K,Ct,"invalid texture format");var J=O.internalformat=Ct[K];O.format=te[J],K in re&&("type"in ct||(O.type=re[K])),K in Zt&&(O.compressed=!0),q=!0}!E&&q?O.channels=Er[O.format]:E&&!q?O.channels!==zf[O.format]&&(O.format=O.internalformat=zf[O.channels]):q&&E&&S(O.channels===Er[O.format],"number of channels inconsistent with specified format")}}function to(O){b.pixelStorei(xw,O.flipY),b.pixelStorei(yw,O.premultiplyAlpha),b.pixelStorei(bw,O.colorSpace),b.pixelStorei(gw,O.unpackAlignment)}function ae(){zt.call(this),this.xOffset=0,this.yOffset=0,this.data=null,this.needsFree=!1,this.element=null,this.needsCopy=!1}function Vt(O,ct){var ot=null;if(j1(ct)?ot=ct:ct&&(S.type(ct,"object","invalid pixel data type"),Be(O,ct),"x"in ct&&(O.xOffset=ct.x|0),"y"in ct&&(O.yOffset=ct.y|0),j1(ct.data)&&(ot=ct.data)),S(!O.compressed||ot instanceof Uint8Array,"compressed texture data must be stored in a uint8array"),ct.copy){S(!ot,"can not specify copy and data field for the same texture");var be=bt.viewportWidth,bo=bt.viewportHeight;O.width=O.width||be-O.xOffset,O.height=O.height||bo-O.yOffset,O.needsCopy=!0,S(O.xOffset>=0&&O.xOffset<be&&O.yOffset>=0&&O.yOffset<bo&&O.width>0&&O.width<=be&&O.height>0&&O.height<=bo,"copy texture read out of bounds")}else if(!ot)O.width=O.width||1,O.height=O.height||1,O.channels=O.channels||4;else if(t(ot))O.channels=O.channels||4,O.data=ot,!("type"in ct)&&O.type===Ti&&(O.type=vv(ot));else if(hv(ot))O.channels=O.channels||4,zw(O,ot),O.alignment=1,O.needsFree=!0;else if(Ur(ot)){var L=ot.data;!Array.isArray(L)&&O.type===Ti&&(O.type=vv(L));var E=ot.shape,q=ot.stride,K,J,G,D,W,N;E.length===3?(G=E[2],N=q[2]):(S(E.length===2,"invalid ndarray pixel data, must be 2 or 3D"),G=1,N=1),K=E[0],J=E[1],D=q[0],W=q[1],O.alignment=1,O.width=K,O.height=J,O.channels=G,O.format=O.internalformat=zf[G],O.needsFree=!0,Aw(O,L,D,W,N,ot.offset)}else if(dv(ot)||pv(ot)||Mw(ot))dv(ot)||pv(ot)?O.element=ot:O.element=ot.canvas,O.width=O.element.width,O.height=O.element.height,O.channels=4;else if(kw(ot))O.element=ot,O.width=ot.width,O.height=ot.height,O.channels=4;else if(Sw(ot))O.element=ot,O.width=ot.naturalWidth,O.height=ot.naturalHeight,O.channels=4;else if(Ew(ot))O.element=ot,O.width=ot.videoWidth,O.height=ot.videoHeight,O.channels=4;else if(uv(ot)){var $=O.width||ot[0].length,T=O.height||ot.length,Y=O.channels;kn(ot[0][0])?Y=Y||ot[0][0].length:Y=Y||1;for(var tt=yf.shape(ot),xt=1,wt=0;wt<tt.length;++wt)xt*=tt[wt];var vt=mv(O,xt);yf.flatten(ot,tt,"",vt),gv(O,vt),O.alignment=1,O.width=$,O.height=T,O.channels=Y,O.format=O.internalformat=zf[Y],O.needsFree=!0}O.type===Yc?S(P.extensions.indexOf("oes_texture_float")>=0,"oes_texture_float extension not enabled"):O.type===Ai&&S(P.extensions.indexOf("oes_texture_half_float")>=0,"oes_texture_half_float extension not enabled")}function Mt(O,ct,ot){var be=O.element,bo=O.data,L=O.internalformat,E=O.format,q=O.type,K=O.width,J=O.height;to(O),be?b.texImage2D(ct,ot,E,E,q,be):O.compressed?b.compressedTexImage2D(ct,ot,L,K,J,0,bo):O.needsCopy?(it(),b.copyTexImage2D(ct,ot,E,O.xOffset,O.yOffset,K,J,0)):b.texImage2D(ct,ot,E,K,J,0,E,q,bo||null)}function Qe(O,ct,ot,be,bo){var L=O.element,E=O.data,q=O.internalformat,K=O.format,J=O.type,G=O.width,D=O.height;to(O),L?b.texSubImage2D(ct,bo,ot,be,K,J,L):O.compressed?b.compressedTexSubImage2D(ct,bo,ot,be,q,G,D,E):O.needsCopy?(it(),b.copyTexSubImage2D(ct,bo,ot,be,O.xOffset,O.yOffset,G,D)):b.texSubImage2D(ct,bo,ot,be,G,D,K,J,E)}var lo=[];function Se(){return lo.pop()||new ae}function yo(O){O.needsFree&&B.freeType(O.data),ae.call(O),lo.push(O)}function no(){zt.call(this),this.genMipmaps=!1,this.mipmapHint=Ef,this.mipmask=0,this.images=Array(16)}function mo(O,ct,ot){var be=O.images[0]=Se();O.mipmask=1,be.width=O.width=ct,be.height=O.height=ot,be.channels=O.channels=4}function Po(O,ct){var ot=null;if(j1(ct))ot=O.images[0]=Se(),ee(ot,O),Vt(ot,ct),O.mipmask=1;else if(Be(O,ct),Array.isArray(ct.mipmap))for(var be=ct.mipmap,bo=0;bo<be.length;++bo)ot=O.images[bo]=Se(),ee(ot,O),ot.width>>=bo,ot.height>>=bo,Vt(ot,be[bo]),O.mipmask|=1<<bo;else ot=O.images[0]=Se(),ee(ot,O),Vt(ot,ct),O.mipmask=1;ee(O,O.images[0]),O.compressed&&(O.internalformat===P1||O.internalformat===$1||O.internalformat===I1||O.internalformat===q1)&&S(O.width%4===0&&O.height%4===0,"for compressed texture formats, mipmap level 0 must have width and height that are a multiple of 4")}function Nn(O,ct){for(var ot=O.images,be=0;be<ot.length;++be){if(!ot[be])return;Mt(ot[be],ct,be)}}var Xn=[];function So(){var O=Xn.pop()||new no;zt.call(O),O.mipmask=0;for(var ct=0;ct<16;++ct)O.images[ct]=null;return O}function qn(O){for(var ct=O.images,ot=0;ot<ct.length;++ot)ct[ot]&&yo(ct[ot]),ct[ot]=null;Xn.push(O)}function nn(){this.minFilter=H1,this.magFilter=H1,this.wrapS=G1,this.wrapT=G1,this.anisotropic=1,this.genMipmaps=!1,this.mipmapHint=Ef}function Rn(O,ct){if("min"in ct){var ot=ct.min;S.parameter(ot,Dt),O.minFilter=Dt[ot],ww.indexOf(O.minFilter)>=0&&!("faces"in ct)&&(O.genMipmaps=!0)}if("mag"in ct){var be=ct.mag;S.parameter(be,jt),O.magFilter=jt[be]}var bo=O.wrapS,L=O.wrapT;if("wrap"in ct){var E=ct.wrap;typeof E=="string"?(S.parameter(E,qt),bo=L=qt[E]):Array.isArray(E)&&(S.parameter(E[0],qt),S.parameter(E[1],qt),bo=qt[E[0]],L=qt[E[1]])}else{if("wrapS"in ct){var q=ct.wrapS;S.parameter(q,qt),bo=qt[q]}if("wrapT"in ct){var K=ct.wrapT;S.parameter(K,qt),L=qt[K]}}if(O.wrapS=bo,O.wrapT=L,"anisotropic"in ct){var J=ct.anisotropic;S(typeof J=="number"&&J>=1&&J<=P.maxAnisotropic,"aniso samples must be between 1 and "),O.anisotropic=ct.anisotropic}if("mipmap"in ct){var G=!1;switch(typeof ct.mipmap){case"string":S.parameter(ct.mipmap,Ot,"invalid mipmap hint"),O.mipmapHint=Ot[ct.mipmap],O.genMipmaps=!0,G=!0;break;case"boolean":G=O.genMipmaps=ct.mipmap;break;case"object":S(Array.isArray(ct.mipmap),"invalid mipmap type"),O.genMipmaps=!1,G=!0;break;default:S.raise("invalid mipmap type")}G&&!("min"in ct)&&(O.minFilter=U1)}}function Dn(O,ct){b.texParameteri(ct,hw,O.minFilter),b.texParameteri(ct,fw,O.magFilter),b.texParameteri(ct,sw,O.wrapS),b.texParameteri(ct,iw,O.wrapT),z.ext_texture_filter_anisotropic&&b.texParameteri(ct,mw,O.anisotropic),O.genMipmaps&&(b.hint(dw,O.mipmapHint),b.generateMipmap(ct))}var Fn=0,a0={},v0=P.maxTextureUnits,Sn=Array(v0).map(function(){return null});function fo(O){zt.call(this),this.mipmask=0,this.internalformat=Rs,this.id=Fn++,this.refCount=1,this.target=O,this.texture=b.createTexture(),this.unit=-1,this.bindCount=0,this.texInfo=new nn,ft.profile&&(this.stats={size:0})}function m0(O){b.activeTexture(Kc),b.bindTexture(O.target,O.texture)}function Go(){var O=Sn[0];O?b.bindTexture(O.target,O.texture):b.bindTexture(ca,null)}function We(O){var ct=O.texture;S(ct,"must not double destroy texture");var ot=O.unit,be=O.target;ot>=0&&(b.activeTexture(Kc+ot),b.bindTexture(be,null),Sn[ot]=null),b.deleteTexture(ct),O.texture=null,O.params=null,O.pixels=null,O.refCount=0,delete a0[O.id],nt.textureCount--}e(fo.prototype,{bind:function(){var O=this;O.bindCount+=1;var ct=O.unit;if(ct<0){for(var ot=0;ot<v0;++ot){var be=Sn[ot];if(be){if(be.bindCount>0)continue;be.unit=-1}Sn[ot]=O,ct=ot;break}ct>=v0&&S.raise("insufficient number of texture units"),ft.profile&&nt.maxTextureUnits<ct+1&&(nt.maxTextureUnits=ct+1),O.unit=ct,b.activeTexture(Kc+ct),b.bindTexture(O.target,O.texture)}return ct},unbind:function(){this.bindCount-=1},decRef:function(){--this.refCount<=0&&We(this)}});function _o(O,ct){var ot=new fo(ca);a0[ot.id]=ot,nt.textureCount++;function be(E,q){var K=ot.texInfo;nn.call(K);var J=So();return typeof E=="number"?typeof q=="number"?mo(J,E|0,q|0):mo(J,E|0,E|0):E?(S.type(E,"object","invalid arguments to regl.texture"),Rn(K,E),Po(J,E)):mo(J,1,1),K.genMipmaps&&(J.mipmask=(J.width<<1)-1),ot.mipmask=J.mipmask,ee(ot,J),S.texture2D(K,J,P),ot.internalformat=J.internalformat,be.width=J.width,be.height=J.height,m0(ot),Nn(J,ca),Dn(K,ca),Go(),qn(J),ft.profile&&(ot.stats.size=Af(ot.internalformat,ot.type,J.width,J.height,K.genMipmaps,!1)),be.format=Ht[ot.internalformat],be.type=he[ot.type],be.mag=St[K.magFilter],be.min=me[K.minFilter],be.wrapS=Lt[K.wrapS],be.wrapT=Lt[K.wrapT],be}function bo(E,q,K,J){S(!!E,"must specify image data");var G=q|0,D=K|0,W=J|0,N=Se();return ee(N,ot),N.width=0,N.height=0,Vt(N,E),N.width=N.width||(ot.width>>W)-G,N.height=N.height||(ot.height>>W)-D,S(ot.type===N.type&&ot.format===N.format&&ot.internalformat===N.internalformat,"incompatible format for texture.subimage"),S(G>=0&&D>=0&&G+N.width<=ot.width&&D+N.height<=ot.height,"texture.subimage write out of bounds"),S(ot.mipmask&1<<W,"missing mipmap data"),S(N.data||N.element||N.needsCopy,"missing image data"),m0(ot),Qe(N,ca,G,D,W),Go(),yo(N),be}function L(E,q){var K=E|0,J=q|0||K;if(K===ot.width&&J===ot.height)return be;be.width=ot.width=K,be.height=ot.height=J,m0(ot);for(var G=0;ot.mipmask>>G;++G){var D=K>>G,W=J>>G;if(!D||!W)break;b.texImage2D(ca,G,ot.format,D,W,0,ot.format,ot.type,null)}return Go(),ft.profile&&(ot.stats.size=Af(ot.internalformat,ot.type,K,J,!1,!1)),be}return be(O,ct),be.subimage=bo,be.resize=L,be._reglType="texture2d",be._texture=ot,ft.profile&&(be.stats=ot.stats),be.destroy=function(){ot.decRef()},be}function Lo(O,ct,ot,be,bo,L){var E=new fo(T1);a0[E.id]=E,nt.cubeCount++;var q=new Array(6);function K(D,W,N,$,T,Y){var tt,xt=E.texInfo;for(nn.call(xt),tt=0;tt<6;++tt)q[tt]=So();if(typeof D=="number"||!D){var wt=D|0||1;for(tt=0;tt<6;++tt)mo(q[tt],wt,wt)}else if(typeof D=="object")if(W)Po(q[0],D),Po(q[1],W),Po(q[2],N),Po(q[3],$),Po(q[4],T),Po(q[5],Y);else if(Rn(xt,D),Be(E,D),"faces"in D){var vt=D.faces;for(S(Array.isArray(vt)&&vt.length===6,"cube faces must be a length 6 array"),tt=0;tt<6;++tt)S(typeof vt[tt]=="object"&&!!vt[tt],"invalid input for cube map face"),ee(q[tt],E),Po(q[tt],vt[tt])}else for(tt=0;tt<6;++tt)Po(q[tt],D);else S.raise("invalid arguments to cube map");for(ee(E,q[0]),P.npotTextureCube||S(jp(E.width)&&jp(E.height),"your browser does not support non power or two texture dimensions"),xt.genMipmaps?E.mipmask=(q[0].width<<1)-1:E.mipmask=q[0].mipmask,S.textureCube(E,xt,q,P),E.internalformat=q[0].internalformat,K.width=q[0].width,K.height=q[0].height,m0(E),tt=0;tt<6;++tt)Nn(q[tt],_f+tt);for(Dn(xt,T1),Go(),ft.profile&&(E.stats.size=Af(E.internalformat,E.type,K.width,K.height,xt.genMipmaps,!0)),K.format=Ht[E.internalformat],K.type=he[E.type],K.mag=St[xt.magFilter],K.min=me[xt.minFilter],K.wrapS=Lt[xt.wrapS],K.wrapT=Lt[xt.wrapT],tt=0;tt<6;++tt)qn(q[tt]);return K}function J(D,W,N,$,T){S(!!W,"must specify image data"),S(typeof D=="number"&&D===(D|0)&&D>=0&&D<6,"invalid face");var Y=N|0,tt=$|0,xt=T|0,wt=Se();return ee(wt,E),wt.width=0,wt.height=0,Vt(wt,W),wt.width=wt.width||(E.width>>xt)-Y,wt.height=wt.height||(E.height>>xt)-tt,S(E.type===wt.type&&E.format===wt.format&&E.internalformat===wt.internalformat,"incompatible format for texture.subimage"),S(Y>=0&&tt>=0&&Y+wt.width<=E.width&&tt+wt.height<=E.height,"texture.subimage write out of bounds"),S(E.mipmask&1<<xt,"missing mipmap data"),S(wt.data||wt.element||wt.needsCopy,"missing image data"),m0(E),Qe(wt,_f+D,Y,tt,xt),Go(),yo(wt),K}function G(D){var W=D|0;if(W!==E.width){K.width=E.width=W,K.height=E.height=W,m0(E);for(var N=0;N<6;++N)for(var $=0;E.mipmask>>$;++$)b.texImage2D(_f+N,$,E.format,W>>$,W>>$,0,E.format,E.type,null);return Go(),ft.profile&&(E.stats.size=Af(E.internalformat,E.type,K.width,K.height,!1,!0)),K}}return K(O,ct,ot,be,bo,L),K.subimage=J,K.resize=G,K._reglType="textureCube",K._texture=E,ft.profile&&(K.stats=E.stats),K.destroy=function(){E.decRef()},K}function En(){for(var O=0;O<v0;++O)b.activeTexture(Kc+O),b.bindTexture(ca,null),Sn[O]=null;fr(a0).forEach(We),nt.cubeCount=0,nt.textureCount=0}ft.profile&&(nt.getTotalTextureSize=function(){var O=0;return Object.keys(a0).forEach(function(ct){O+=a0[ct].stats.size}),O});function fa(){for(var O=0;O<v0;++O){var ct=Sn[O];ct&&(ct.bindCount=0,ct.unit=-1,Sn[O]=null)}fr(a0).forEach(function(ot){ot.texture=b.createTexture(),b.bindTexture(ot.target,ot.texture);for(var be=0;be<32;++be)if(ot.mipmask&1<<be)if(ot.target===ca)b.texImage2D(ca,be,ot.internalformat,ot.width>>be,ot.height>>be,0,ot.internalformat,ot.type,null);else for(var bo=0;bo<6;++bo)b.texImage2D(_f+bo,be,ot.internalformat,ot.width>>be,ot.height>>be,0,ot.internalformat,ot.type,null);Dn(ot.texInfo,ot.target)})}function Fs(){for(var O=0;O<v0;++O){var ct=Sn[O];ct&&(ct.bindCount=0,ct.unit=-1,Sn[O]=null),b.activeTexture(Kc+O),b.bindTexture(ca,null),b.bindTexture(T1,null)}}return{create2D:_o,createCube:Lo,clear:En,getTexture:function(O){return null},restore:fa,refresh:Fs}}var Ua=36161,Tf=32854,xv=32855,yv=36194,bv=33189,wv=36168,_v=34041,Mv=35907,kv=34836,Sv=34842,Ev=34843,Br=[];Br[Tf]=2,Br[xv]=2,Br[yv]=2,Br[bv]=2,Br[wv]=1,Br[_v]=4,Br[Mv]=4,Br[kv]=16,Br[Sv]=8,Br[Ev]=6;function zv(b,z,P){return Br[b]*z*P}var Lw=function(b,z,P,it,bt){var nt={rgba4:Tf,rgb565:yv,"rgb5 a1":xv,depth:bv,stencil:wv,"depth stencil":_v};z.ext_srgb&&(nt.srgba=Mv),z.ext_color_buffer_half_float&&(nt.rgba16f=Sv,nt.rgb16f=Ev),z.webgl_color_buffer_float&&(nt.rgba32f=kv);var ft=[];Object.keys(nt).forEach(function(Ct){var Zt=nt[Ct];ft[Zt]=Ct});var Ot=0,qt={};function jt(Ct){this.id=Ot++,this.refCount=1,this.renderbuffer=Ct,this.format=Tf,this.width=0,this.height=0,bt.profile&&(this.stats={size:0})}jt.prototype.decRef=function(){--this.refCount<=0&&Dt(this)};function Dt(Ct){var Zt=Ct.renderbuffer;S(Zt,"must not double destroy renderbuffer"),b.bindRenderbuffer(Ua,null),b.deleteRenderbuffer(Zt),Ct.renderbuffer=null,Ct.refCount=0,delete qt[Ct.id],it.renderbufferCount--}function Qt(Ct,Zt){var Z=new jt(b.createRenderbuffer());qt[Z.id]=Z,it.renderbufferCount++;function ht(he,St){var me=0,Lt=0,te=Tf;if(typeof he=="object"&&he){var zt=he;if("shape"in zt){var ee=zt.shape;S(Array.isArray(ee)&&ee.length>=2,"invalid renderbuffer shape"),me=ee[0]|0,Lt=ee[1]|0}else"radius"in zt&&(me=Lt=zt.radius|0),"width"in zt&&(me=zt.width|0),"height"in zt&&(Lt=zt.height|0);"format"in zt&&(S.parameter(zt.format,nt,"invalid renderbuffer format"),te=nt[zt.format])}else typeof he=="number"?(me=he|0,typeof St=="number"?Lt=St|0:Lt=me):he?S.raise("invalid arguments to renderbuffer constructor"):me=Lt=1;if(S(me>0&&Lt>0&&me<=P.maxRenderbufferSize&&Lt<=P.maxRenderbufferSize,"invalid renderbuffer size"),!(me===Z.width&&Lt===Z.height&&te===Z.format))return ht.width=Z.width=me,ht.height=Z.height=Lt,Z.format=te,b.bindRenderbuffer(Ua,Z.renderbuffer),b.renderbufferStorage(Ua,te,me,Lt),S(b.getError()===0,"invalid render buffer format"),bt.profile&&(Z.stats.size=zv(Z.format,Z.width,Z.height)),ht.format=ft[Z.format],ht}function Ht(he,St){var me=he|0,Lt=St|0||me;return me===Z.width&&Lt===Z.height||(S(me>0&&Lt>0&&me<=P.maxRenderbufferSize&&Lt<=P.maxRenderbufferSize,"invalid renderbuffer size"),ht.width=Z.width=me,ht.height=Z.height=Lt,b.bindRenderbuffer(Ua,Z.renderbuffer),b.renderbufferStorage(Ua,Z.format,me,Lt),S(b.getError()===0,"invalid render buffer format"),bt.profile&&(Z.stats.size=zv(Z.format,Z.width,Z.height))),ht}return ht(Ct,Zt),ht.resize=Ht,ht._reglType="renderbuffer",ht._renderbuffer=Z,bt.profile&&(ht.stats=Z.stats),ht.destroy=function(){Z.decRef()},ht}bt.profile&&(it.getTotalRenderbufferSize=function(){var Ct=0;return Object.keys(qt).forEach(function(Zt){Ct+=qt[Zt].stats.size}),Ct});function re(){fr(qt).forEach(function(Ct){Ct.renderbuffer=b.createRenderbuffer(),b.bindRenderbuffer(Ua,Ct.renderbuffer),b.renderbufferStorage(Ua,Ct.format,Ct.width,Ct.height)}),b.bindRenderbuffer(Ua,null)}return{create:Qt,clear:function(){fr(qt).forEach(Dt)},restore:re}},wa=36160,W1=36161,Cs=3553,Lf=34069,Av=36064,Tv=36096,Lv=36128,Nv=33306,Rv=36053,Nw=36054,Rw=36055,Ow=36057,Cw=36061,Pw=36193,$w=5121,Iw=5126,Ov=6407,Cv=6408,qw=6402,Dw=[Ov,Cv],V1=[];V1[Cv]=4,V1[Ov]=3;var Nf=[];Nf[$w]=1,Nf[Iw]=4,Nf[Pw]=2;var Fw=32854,Gw=32855,Hw=36194,Uw=33189,Bw=36168,Pv=34041,jw=35907,Ww=34836,Vw=34842,Xw=34843,Yw=[Fw,Gw,Hw,jw,Vw,Xw,Ww],Ri={};Ri[Rv]="complete",Ri[Nw]="incomplete attachment",Ri[Ow]="incomplete dimensions",Ri[Rw]="incomplete, missing attachment",Ri[Cw]="unsupported";function Kw(b,z,P,it,bt,nt){var ft={cur:null,next:null,dirty:!1,setFBO:null},Ot=["rgba"],qt=["rgba4","rgb565","rgb5 a1"];z.ext_srgb&&qt.push("srgba"),z.ext_color_buffer_half_float&&qt.push("rgba16f","rgb16f"),z.webgl_color_buffer_float&&qt.push("rgba32f");var jt=["uint8"];z.oes_texture_half_float&&jt.push("half float","float16"),z.oes_texture_float&&jt.push("float","float32");function Dt(ae,Vt,Mt){this.target=ae,this.texture=Vt,this.renderbuffer=Mt;var Qe=0,lo=0;Vt?(Qe=Vt.width,lo=Vt.height):Mt&&(Qe=Mt.width,lo=Mt.height),this.width=Qe,this.height=lo}function Qt(ae){ae&&(ae.texture&&ae.texture._texture.decRef(),ae.renderbuffer&&ae.renderbuffer._renderbuffer.decRef())}function re(ae,Vt,Mt){if(ae)if(ae.texture){var Qe=ae.texture._texture,lo=Math.max(1,Qe.width),Se=Math.max(1,Qe.height);S(lo===Vt&&Se===Mt,"inconsistent width/height for supplied texture"),Qe.refCount+=1}else{var yo=ae.renderbuffer._renderbuffer;S(yo.width===Vt&&yo.height===Mt,"inconsistent width/height for renderbuffer"),yo.refCount+=1}}function Ct(ae,Vt){Vt&&(Vt.texture?b.framebufferTexture2D(wa,ae,Vt.target,Vt.texture._texture.texture,0):b.framebufferRenderbuffer(wa,ae,W1,Vt.renderbuffer._renderbuffer.renderbuffer))}function Zt(ae){var Vt=Cs,Mt=null,Qe=null,lo=ae;typeof ae=="object"&&(lo=ae.data,"target"in ae&&(Vt=ae.target|0)),S.type(lo,"function","invalid attachment data");var Se=lo._reglType;return Se==="texture2d"?(Mt=lo,S(Vt===Cs)):Se==="textureCube"?(Mt=lo,S(Vt>=Lf&&Vt<Lf+6,"invalid cube map target")):Se==="renderbuffer"?(Qe=lo,Vt=W1):S.raise("invalid regl object for attachment"),new Dt(Vt,Mt,Qe)}function Z(ae,Vt,Mt,Qe,lo){if(Mt){var Se=it.create2D({width:ae,height:Vt,format:Qe,type:lo});return Se._texture.refCount=0,new Dt(Cs,Se,null)}else{var yo=bt.create({width:ae,height:Vt,format:Qe});return yo._renderbuffer.refCount=0,new Dt(W1,null,yo)}}function ht(ae){return ae&&(ae.texture||ae.renderbuffer)}function Ht(ae,Vt,Mt){ae&&(ae.texture?ae.texture.resize(Vt,Mt):ae.renderbuffer&&ae.renderbuffer.resize(Vt,Mt),ae.width=Vt,ae.height=Mt)}var he=0,St={};function me(){this.id=he++,St[this.id]=this,this.framebuffer=b.createFramebuffer(),this.width=0,this.height=0,this.colorAttachments=[],this.depthAttachment=null,this.stencilAttachment=null,this.depthStencilAttachment=null}function Lt(ae){ae.colorAttachments.forEach(Qt),Qt(ae.depthAttachment),Qt(ae.stencilAttachment),Qt(ae.depthStencilAttachment)}function te(ae){var Vt=ae.framebuffer;S(Vt,"must not double destroy framebuffer"),b.deleteFramebuffer(Vt),ae.framebuffer=null,nt.framebufferCount--,delete St[ae.id]}function zt(ae){var Vt;b.bindFramebuffer(wa,ae.framebuffer);var Mt=ae.colorAttachments;for(Vt=0;Vt<Mt.length;++Vt)Ct(Av+Vt,Mt[Vt]);for(Vt=Mt.length;Vt<P.maxColorAttachments;++Vt)b.framebufferTexture2D(wa,Av+Vt,Cs,null,0);b.framebufferTexture2D(wa,Nv,Cs,null,0),b.framebufferTexture2D(wa,Tv,Cs,null,0),b.framebufferTexture2D(wa,Lv,Cs,null,0),Ct(Tv,ae.depthAttachment),Ct(Lv,ae.stencilAttachment),Ct(Nv,ae.depthStencilAttachment);var Qe=b.checkFramebufferStatus(wa);!b.isContextLost()&&Qe!==Rv&&S.raise("framebuffer configuration not supported, status = "+Ri[Qe]),b.bindFramebuffer(wa,ft.next?ft.next.framebuffer:null),ft.cur=ft.next,b.getError()}function ee(ae,Vt){var Mt=new me;nt.framebufferCount++;function Qe(Se,yo){var no;S(ft.next!==Mt,"can not update framebuffer which is currently in use");var mo=0,Po=0,Nn=!0,Xn=!0,So=null,qn=!0,nn="rgba",Rn="uint8",Dn=1,Fn=null,a0=null,v0=null,Sn=!1;if(typeof Se=="number")mo=Se|0,Po=yo|0||mo;else if(!Se)mo=Po=1;else{S.type(Se,"object","invalid arguments for framebuffer");var fo=Se;if("shape"in fo){var m0=fo.shape;S(Array.isArray(m0)&&m0.length>=2,"invalid shape for framebuffer"),mo=m0[0],Po=m0[1]}else"radius"in fo&&(mo=Po=fo.radius),"width"in fo&&(mo=fo.width),"height"in fo&&(Po=fo.height);("color"in fo||"colors"in fo)&&(So=fo.color||fo.colors,Array.isArray(So)&&S(So.length===1||z.webgl_draw_buffers,"multiple render targets not supported")),So||("colorCount"in fo&&(Dn=fo.colorCount|0,S(Dn>0,"invalid color buffer count")),"colorTexture"in fo&&(qn=!!fo.colorTexture,nn="rgba4"),"colorType"in fo&&(Rn=fo.colorType,qn?(S(z.oes_texture_float||!(Rn==="float"||Rn==="float32"),"you must enable OES_texture_float in order to use floating point framebuffer objects"),S(z.oes_texture_half_float||!(Rn==="half float"||Rn==="float16"),"you must enable OES_texture_half_float in order to use 16-bit floating point framebuffer objects")):Rn==="half float"||Rn==="float16"?(S(z.ext_color_buffer_half_float,"you must enable EXT_color_buffer_half_float to use 16-bit render buffers"),nn="rgba16f"):(Rn==="float"||Rn==="float32")&&(S(z.webgl_color_buffer_float,"you must enable WEBGL_color_buffer_float in order to use 32-bit floating point renderbuffers"),nn="rgba32f"),S.oneOf(Rn,jt,"invalid color type")),"colorFormat"in fo&&(nn=fo.colorFormat,Ot.indexOf(nn)>=0?qn=!0:qt.indexOf(nn)>=0?qn=!1:qn?S.oneOf(fo.colorFormat,Ot,"invalid color format for texture"):S.oneOf(fo.colorFormat,qt,"invalid color format for renderbuffer"))),("depthTexture"in fo||"depthStencilTexture"in fo)&&(Sn=!!(fo.depthTexture||fo.depthStencilTexture),S(!Sn||z.webgl_depth_texture,"webgl_depth_texture extension not supported")),"depth"in fo&&(typeof fo.depth=="boolean"?Nn=fo.depth:(Fn=fo.depth,Xn=!1)),"stencil"in fo&&(typeof fo.stencil=="boolean"?Xn=fo.stencil:(a0=fo.stencil,Nn=!1)),"depthStencil"in fo&&(typeof fo.depthStencil=="boolean"?Nn=Xn=fo.depthStencil:(v0=fo.depthStencil,Nn=!1,Xn=!1))}var Go=null,We=null,_o=null,Lo=null;if(Array.isArray(So))Go=So.map(Zt);else if(So)Go=[Zt(So)];else for(Go=new Array(Dn),no=0;no<Dn;++no)Go[no]=Z(mo,Po,qn,nn,Rn);S(z.webgl_draw_buffers||Go.length<=1,"you must enable the WEBGL_draw_buffers extension in order to use multiple color buffers."),S(Go.length<=P.maxColorAttachments,"too many color attachments, not supported"),mo=mo||Go[0].width,Po=Po||Go[0].height,Fn?We=Zt(Fn):Nn&&!Xn&&(We=Z(mo,Po,Sn,"depth","uint32")),a0?_o=Zt(a0):Xn&&!Nn&&(_o=Z(mo,Po,!1,"stencil","uint8")),v0?Lo=Zt(v0):!Fn&&!a0&&Xn&&Nn&&(Lo=Z(mo,Po,Sn,"depth stencil","depth stencil")),S(!!Fn+!!a0+!!v0<=1,"invalid framebuffer configuration, can specify exactly one depth/stencil attachment");var En=null;for(no=0;no<Go.length;++no)if(re(Go[no],mo,Po),S(!Go[no]||Go[no].texture&&Dw.indexOf(Go[no].texture._texture.format)>=0||Go[no].renderbuffer&&Yw.indexOf(Go[no].renderbuffer._renderbuffer.format)>=0,"framebuffer color attachment "+no+" is invalid"),Go[no]&&Go[no].texture){var fa=V1[Go[no].texture._texture.format]*Nf[Go[no].texture._texture.type];En===null?En=fa:S(En===fa,"all color attachments much have the same number of bits per pixel.")}return re(We,mo,Po),S(!We||We.texture&&We.texture._texture.format===qw||We.renderbuffer&&We.renderbuffer._renderbuffer.format===Uw,"invalid depth attachment for framebuffer object"),re(_o,mo,Po),S(!_o||_o.renderbuffer&&_o.renderbuffer._renderbuffer.format===Bw,"invalid stencil attachment for framebuffer object"),re(Lo,mo,Po),S(!Lo||Lo.texture&&Lo.texture._texture.format===Pv||Lo.renderbuffer&&Lo.renderbuffer._renderbuffer.format===Pv,"invalid depth-stencil attachment for framebuffer object"),Lt(Mt),Mt.width=mo,Mt.height=Po,Mt.colorAttachments=Go,Mt.depthAttachment=We,Mt.stencilAttachment=_o,Mt.depthStencilAttachment=Lo,Qe.color=Go.map(ht),Qe.depth=ht(We),Qe.stencil=ht(_o),Qe.depthStencil=ht(Lo),Qe.width=Mt.width,Qe.height=Mt.height,zt(Mt),Qe}function lo(Se,yo){S(ft.next!==Mt,"can not resize a framebuffer which is currently in use");var no=Math.max(Se|0,1),mo=Math.max(yo|0||no,1);if(no===Mt.width&&mo===Mt.height)return Qe;for(var Po=Mt.colorAttachments,Nn=0;Nn<Po.length;++Nn)Ht(Po[Nn],no,mo);return Ht(Mt.depthAttachment,no,mo),Ht(Mt.stencilAttachment,no,mo),Ht(Mt.depthStencilAttachment,no,mo),Mt.width=Qe.width=no,Mt.height=Qe.height=mo,zt(Mt),Qe}return Qe(ae,Vt),e(Qe,{resize:lo,_reglType:"framebuffer",_framebuffer:Mt,destroy:function(){te(Mt),Lt(Mt)},use:function(Se){ft.setFBO({framebuffer:Qe},Se)}})}function Be(ae){var Vt=Array(6);function Mt(lo){var Se;S(Vt.indexOf(ft.next)<0,"can not update framebuffer which is currently in use");var yo={color:null},no=0,mo=null,Po="rgba",Nn="uint8",Xn=1;if(typeof lo=="number")no=lo|0;else if(!lo)no=1;else{S.type(lo,"object","invalid arguments for framebuffer");var So=lo;if("shape"in So){var qn=So.shape;S(Array.isArray(qn)&&qn.length>=2,"invalid shape for framebuffer"),S(qn[0]===qn[1],"cube framebuffer must be square"),no=qn[0]}else"radius"in So&&(no=So.radius|0),"width"in So?(no=So.width|0,"height"in So&&S(So.height===no,"must be square")):"height"in So&&(no=So.height|0);("color"in So||"colors"in So)&&(mo=So.color||So.colors,Array.isArray(mo)&&S(mo.length===1||z.webgl_draw_buffers,"multiple render targets not supported")),mo||("colorCount"in So&&(Xn=So.colorCount|0,S(Xn>0,"invalid color buffer count")),"colorType"in So&&(S.oneOf(So.colorType,jt,"invalid color type"),Nn=So.colorType),"colorFormat"in So&&(Po=So.colorFormat,S.oneOf(So.colorFormat,Ot,"invalid color format for texture"))),"depth"in So&&(yo.depth=So.depth),"stencil"in So&&(yo.stencil=So.stencil),"depthStencil"in So&&(yo.depthStencil=So.depthStencil)}var nn;if(mo)if(Array.isArray(mo))for(nn=[],Se=0;Se<mo.length;++Se)nn[Se]=mo[Se];else nn=[mo];else{nn=Array(Xn);var Rn={radius:no,format:Po,type:Nn};for(Se=0;Se<Xn;++Se)nn[Se]=it.createCube(Rn)}for(yo.color=Array(nn.length),Se=0;Se<nn.length;++Se){var Dn=nn[Se];S(typeof Dn=="function"&&Dn._reglType==="textureCube","invalid cube map"),no=no||Dn.width,S(Dn.width===no&&Dn.height===no,"invalid cube map shape"),yo.color[Se]={target:Lf,data:nn[Se]}}for(Se=0;Se<6;++Se){for(var Fn=0;Fn<nn.length;++Fn)yo.color[Fn].target=Lf+Se;Se>0&&(yo.depth=Vt[0].depth,yo.stencil=Vt[0].stencil,yo.depthStencil=Vt[0].depthStencil),Vt[Se]?Vt[Se](yo):Vt[Se]=ee(yo)}return e(Mt,{width:no,height:no,color:nn})}function Qe(lo){var Se,yo=lo|0;if(S(yo>0&&yo<=P.maxCubeMapSize,"invalid radius for cube fbo"),yo===Mt.width)return Mt;var no=Mt.color;for(Se=0;Se<no.length;++Se)no[Se].resize(yo);for(Se=0;Se<6;++Se)Vt[Se].resize(yo);return Mt.width=Mt.height=yo,Mt}return Mt(ae),e(Mt,{faces:Vt,resize:Qe,_reglType:"framebufferCube",destroy:function(){Vt.forEach(function(lo){lo.destroy()})}})}function to(){ft.cur=null,ft.next=null,ft.dirty=!0,fr(St).forEach(function(ae){ae.framebuffer=b.createFramebuffer(),zt(ae)})}return e(ft,{getFramebuffer:function(ae){if(typeof ae=="function"&&ae._reglType==="framebuffer"){var Vt=ae._framebuffer;if(Vt instanceof me)return Vt}return null},create:ee,createCube:Be,clear:function(){fr(St).forEach(te)},restore:to})}var Qw=5126,$v=34962;function X1(){this.state=0,this.x=0,this.y=0,this.z=0,this.w=0,this.buffer=null,this.size=0,this.normalized=!1,this.type=Qw,this.offset=0,this.stride=0,this.divisor=0}function Zw(b,z,P,it,bt){for(var nt=P.maxAttributes,ft=new Array(nt),Ot=0;Ot<nt;++Ot)ft[Ot]=new X1;var qt=0,jt={},Dt={Record:X1,scope:{},state:ft,currentVAO:null,targetVAO:null,restore:re()?St:function(){},createVAO:me,getVAO:Zt,destroyBuffer:Qt,setVAO:re()?Z:ht,clear:re()?Ht:function(){}};function Qt(Lt){for(var te=0;te<ft.length;++te){var zt=ft[te];zt.buffer===Lt&&(b.disableVertexAttribArray(te),zt.buffer=null)}}function re(){return z.oes_vertex_array_object}function Ct(){return z.angle_instanced_arrays}function Zt(Lt){return typeof Lt=="function"&&Lt._vao?Lt._vao:null}function Z(Lt){if(Lt!==Dt.currentVAO){var te=re();Lt?te.bindVertexArrayOES(Lt.vao):te.bindVertexArrayOES(null),Dt.currentVAO=Lt}}function ht(Lt){if(Lt!==Dt.currentVAO){if(Lt)Lt.bindAttrs();else for(var te=Ct(),zt=0;zt<ft.length;++zt){var ee=ft[zt];ee.buffer?(b.enableVertexAttribArray(zt),b.vertexAttribPointer(zt,ee.size,ee.type,ee.normalized,ee.stride,ee.offfset),te&&ee.divisor&&te.vertexAttribDivisorANGLE(zt,ee.divisor)):(b.disableVertexAttribArray(zt),b.vertexAttrib4f(zt,ee.x,ee.y,ee.z,ee.w))}Dt.currentVAO=Lt}}function Ht(){fr(jt).forEach(function(Lt){Lt.destroy()})}function he(){this.id=++qt,this.attributes=[];var Lt=re();Lt?this.vao=Lt.createVertexArrayOES():this.vao=null,jt[this.id]=this,this.buffers=[]}he.prototype.bindAttrs=function(){for(var Lt=Ct(),te=this.attributes,zt=0;zt<te.length;++zt){var ee=te[zt];ee.buffer?(b.enableVertexAttribArray(zt),b.bindBuffer($v,ee.buffer.buffer),b.vertexAttribPointer(zt,ee.size,ee.type,ee.normalized,ee.stride,ee.offset),Lt&&ee.divisor&&Lt.vertexAttribDivisorANGLE(zt,ee.divisor)):(b.disableVertexAttribArray(zt),b.vertexAttrib4f(zt,ee.x,ee.y,ee.z,ee.w))}for(var Be=te.length;Be<nt;++Be)b.disableVertexAttribArray(Be)},he.prototype.refresh=function(){var Lt=re();Lt&&(Lt.bindVertexArrayOES(this.vao),this.bindAttrs(),Dt.currentVAO=this)},he.prototype.destroy=function(){if(this.vao){var Lt=re();this===Dt.currentVAO&&(Dt.currentVAO=null,Lt.bindVertexArrayOES(null)),Lt.deleteVertexArrayOES(this.vao),this.vao=null}jt[this.id]&&(delete jt[this.id],it.vaoCount-=1)};function St(){var Lt=re();Lt&&fr(jt).forEach(function(te){te.refresh()})}function me(Lt){var te=new he;it.vaoCount+=1;function zt(ee){S(Array.isArray(ee),"arguments to vertex array constructor must be an array"),S(ee.length<nt,"too many attributes"),S(ee.length>0,"must specify at least one attribute");var Be={},to=te.attributes;to.length=ee.length;for(var ae=0;ae<ee.length;++ae){var Vt=ee[ae],Mt=to[ae]=new X1,Qe=Vt.data||Vt;if(Array.isArray(Qe)||t(Qe)||Ur(Qe)){var lo;te.buffers[ae]&&(lo=te.buffers[ae],t(Qe)&&lo._buffer.byteLength>=Qe.byteLength?lo.subdata(Qe):(lo.destroy(),te.buffers[ae]=null)),te.buffers[ae]||(lo=te.buffers[ae]=bt.create(Vt,$v,!1,!0)),Mt.buffer=bt.getBuffer(lo),Mt.size=Mt.buffer.dimension|0,Mt.normalized=!1,Mt.type=Mt.buffer.dtype,Mt.offset=0,Mt.stride=0,Mt.divisor=0,Mt.state=1,Be[ae]=1}else bt.getBuffer(Vt)?(Mt.buffer=bt.getBuffer(Vt),Mt.size=Mt.buffer.dimension|0,Mt.normalized=!1,Mt.type=Mt.buffer.dtype,Mt.offset=0,Mt.stride=0,Mt.divisor=0,Mt.state=1):bt.getBuffer(Vt.buffer)?(Mt.buffer=bt.getBuffer(Vt.buffer),Mt.size=(+Vt.size||Mt.buffer.dimension)|0,Mt.normalized=!!Vt.normalized||!1,"type"in Vt?(S.parameter(Vt.type,Ls,"invalid buffer type"),Mt.type=Ls[Vt.type]):Mt.type=Mt.buffer.dtype,Mt.offset=(Vt.offset||0)|0,Mt.stride=(Vt.stride||0)|0,Mt.divisor=(Vt.divisor||0)|0,Mt.state=1,S(Mt.size>=1&&Mt.size<=4,"size must be between 1 and 4"),S(Mt.offset>=0,"invalid offset"),S(Mt.stride>=0&&Mt.stride<=255,"stride must be between 0 and 255"),S(Mt.divisor>=0,"divisor must be positive"),S(!Mt.divisor||!!z.angle_instanced_arrays,"ANGLE_instanced_arrays must be enabled to use divisor")):"x"in Vt?(S(ae>0,"first attribute must not be a constant"),Mt.x=+Vt.x||0,Mt.y=+Vt.y||0,Mt.z=+Vt.z||0,Mt.w=+Vt.w||0,Mt.state=2):S(!1,"invalid attribute spec for location "+ae)}for(var Se=0;Se<te.buffers.length;++Se)!Be[Se]&&te.buffers[Se]&&(te.buffers[Se].destroy(),te.buffers[Se]=null);return te.refresh(),zt}return zt.destroy=function(){for(var ee=0;ee<te.buffers.length;++ee)te.buffers[ee]&&te.buffers[ee].destroy();te.buffers.length=0,te.destroy()},zt._vao=te,zt._reglType="vao",zt(Lt)}return Dt}var Iv=35632,Jw=35633,t4=35718,e4=35721;function o4(b,z,P,it){var bt={},nt={};function ft(Z,ht,Ht,he){this.name=Z,this.id=ht,this.location=Ht,this.info=he}function Ot(Z,ht){for(var Ht=0;Ht<Z.length;++Ht)if(Z[Ht].id===ht.id){Z[Ht].location=ht.location;return}Z.push(ht)}function qt(Z,ht,Ht){var he=Z===Iv?bt:nt,St=he[ht];if(!St){var me=z.str(ht);St=b.createShader(Z),b.shaderSource(St,me),b.compileShader(St),S.shaderError(b,St,me,Z,Ht),he[ht]=St}return St}var jt={},Dt=[],Qt=0;function re(Z,ht){this.id=Qt++,this.fragId=Z,this.vertId=ht,this.program=null,this.uniforms=[],this.attributes=[],this.refCount=1,it.profile&&(this.stats={uniformsCount:0,attributesCount:0})}function Ct(Z,ht,Ht){var he,St,me=qt(Iv,Z.fragId),Lt=qt(Jw,Z.vertId),te=Z.program=b.createProgram();if(b.attachShader(te,me),b.attachShader(te,Lt),Ht)for(he=0;he<Ht.length;++he){var zt=Ht[he];b.bindAttribLocation(te,zt[0],zt[1])}b.linkProgram(te),S.linkError(b,te,z.str(Z.fragId),z.str(Z.vertId),ht);var ee=b.getProgramParameter(te,t4);it.profile&&(Z.stats.uniformsCount=ee);var Be=Z.uniforms;for(he=0;he<ee;++he)if(St=b.getActiveUniform(te,he),St)if(St.size>1)for(var to=0;to<St.size;++to){var ae=St.name.replace("[0]","["+to+"]");Ot(Be,new ft(ae,z.id(ae),b.getUniformLocation(te,ae),St))}else Ot(Be,new ft(St.name,z.id(St.name),b.getUniformLocation(te,St.name),St));var Vt=b.getProgramParameter(te,e4);it.profile&&(Z.stats.attributesCount=Vt);var Mt=Z.attributes;for(he=0;he<Vt;++he)St=b.getActiveAttrib(te,he),St&&Ot(Mt,new ft(St.name,z.id(St.name),b.getAttribLocation(te,St.name),St))}it.profile&&(P.getMaxUniformsCount=function(){var Z=0;return Dt.forEach(function(ht){ht.stats.uniformsCount>Z&&(Z=ht.stats.uniformsCount)}),Z},P.getMaxAttributesCount=function(){var Z=0;return Dt.forEach(function(ht){ht.stats.attributesCount>Z&&(Z=ht.stats.attributesCount)}),Z});function Zt(){bt={},nt={};for(var Z=0;Z<Dt.length;++Z)Ct(Dt[Z],null,Dt[Z].attributes.map(function(ht){return[ht.location,ht.name]}))}return{clear:function(){var Z=b.deleteShader.bind(b);fr(bt).forEach(Z),bt={},fr(nt).forEach(Z),nt={},Dt.forEach(function(ht){b.deleteProgram(ht.program)}),Dt.length=0,jt={},P.shaderCount=0},program:function(Z,ht,Ht,he){S.command(Z>=0,"missing vertex shader",Ht),S.command(ht>=0,"missing fragment shader",Ht);var St=jt[ht];St||(St=jt[ht]={});var me=St[Z];if(me&&(me.refCount++,!he))return me;var Lt=new re(ht,Z);return P.shaderCount++,Ct(Lt,Ht,he),me||(St[Z]=Lt),Dt.push(Lt),e(Lt,{destroy:function(){if(Lt.refCount--,Lt.refCount<=0){b.deleteProgram(Lt.program);var te=Dt.indexOf(Lt);Dt.splice(te,1),P.shaderCount--}St[Lt.vertId].refCount<=0&&(b.deleteShader(nt[Lt.vertId]),delete nt[Lt.vertId],delete jt[Lt.fragId][Lt.vertId]),Object.keys(jt[Lt.fragId]).length||(b.deleteShader(bt[Lt.fragId]),delete bt[Lt.fragId],delete jt[Lt.fragId])}})},restore:Zt,shader:qt,frag:-1,vert:-1}}var n4=6408,Qc=5121,r4=3333,Rf=5126;function a4(b,z,P,it,bt,nt,ft){function Ot(Dt){var Qt;z.next===null?(S(bt.preserveDrawingBuffer,'you must create a webgl context with "preserveDrawingBuffer":true in order to read pixels from the drawing buffer'),Qt=Qc):(S(z.next.colorAttachments[0].texture!==null,"You cannot read from a renderbuffer"),Qt=z.next.colorAttachments[0].texture._texture.type,nt.oes_texture_float?(S(Qt===Qc||Qt===Rf,"Reading from a framebuffer is only allowed for the types 'uint8' and 'float'"),Qt===Rf&&S(ft.readFloat,"Reading 'float' values is not permitted in your browser. For a fallback, please see: https://www.npmjs.com/package/glsl-read-float")):S(Qt===Qc,"Reading from a framebuffer is only allowed for the type 'uint8'"));var re=0,Ct=0,Zt=it.framebufferWidth,Z=it.framebufferHeight,ht=null;t(Dt)?ht=Dt:Dt&&(S.type(Dt,"object","invalid arguments to regl.read()"),re=Dt.x|0,Ct=Dt.y|0,S(re>=0&&re<it.framebufferWidth,"invalid x offset for regl.read"),S(Ct>=0&&Ct<it.framebufferHeight,"invalid y offset for regl.read"),Zt=(Dt.width||it.framebufferWidth-re)|0,Z=(Dt.height||it.framebufferHeight-Ct)|0,ht=Dt.data||null),ht&&(Qt===Qc?S(ht instanceof Uint8Array,"buffer must be 'Uint8Array' when reading from a framebuffer of type 'uint8'"):Qt===Rf&&S(ht instanceof Float32Array,"buffer must be 'Float32Array' when reading from a framebuffer of type 'float'")),S(Zt>0&&Zt+re<=it.framebufferWidth,"invalid width for read pixels"),S(Z>0&&Z+Ct<=it.framebufferHeight,"invalid height for read pixels"),P();var Ht=Zt*Z*4;return ht||(Qt===Qc?ht=new Uint8Array(Ht):Qt===Rf&&(ht=ht||new Float32Array(Ht))),S.isTypedArray(ht,"data buffer for regl.read() must be a typedarray"),S(ht.byteLength>=Ht,"data buffer for regl.read() too small"),b.pixelStorei(r4,4),b.readPixels(re,Ct,Zt,Z,n4,Qt,ht),ht}function qt(Dt){var Qt;return z.setFBO({framebuffer:Dt.framebuffer},function(){Qt=Ot(Dt)}),Qt}function jt(Dt){return!Dt||!("framebuffer"in Dt)?Ot(Dt):qt(Dt)}return jt}function Oi(b){return Array.prototype.slice.call(b)}function Ci(b){return Oi(b).join("")}function s4(){var b=0,z=[],P=[];function it(Qt){for(var re=0;re<P.length;++re)if(P[re]===Qt)return z[re];var Ct="g"+b++;return z.push(Ct),P.push(Qt),Ct}function bt(){var Qt=[];function re(){Qt.push.apply(Qt,Oi(arguments))}var Ct=[];function Zt(){var Z="v"+b++;return Ct.push(Z),arguments.length>0&&(Qt.push(Z,"="),Qt.push.apply(Qt,Oi(arguments)),Qt.push(";")),Z}return e(re,{def:Zt,toString:function(){return Ci([Ct.length>0?"var "+Ct.join(",")+";":"",Ci(Qt)])}})}function nt(){var Qt=bt(),re=bt(),Ct=Qt.toString,Zt=re.toString;function Z(ht,Ht){re(ht,Ht,"=",Qt.def(ht,Ht),";")}return e(function(){Qt.apply(Qt,Oi(arguments))},{def:Qt.def,entry:Qt,exit:re,save:Z,set:function(ht,Ht,he){Z(ht,Ht),Qt(ht,Ht,"=",he,";")},toString:function(){return Ct()+Zt()}})}function ft(){var Qt=Ci(arguments),re=nt(),Ct=nt(),Zt=re.toString,Z=Ct.toString;return e(re,{then:function(){return re.apply(re,Oi(arguments)),this},else:function(){return Ct.apply(Ct,Oi(arguments)),this},toString:function(){var ht=Z();return ht&&(ht="else{"+ht+"}"),Ci(["if(",Qt,"){",Zt(),"}",ht])}})}var Ot=bt(),qt={};function jt(Qt,re){var Ct=[];function Zt(){var St="a"+Ct.length;return Ct.push(St),St}re=re||0;for(var Z=0;Z<re;++Z)Zt();var ht=nt(),Ht=ht.toString,he=qt[Qt]=e(ht,{arg:Zt,toString:function(){return Ci(["function(",Ct.join(),"){",Ht(),"}"])}});return he}function Dt(){var Qt=['"use strict";',Ot,"return {"];Object.keys(qt).forEach(function(Zt){Qt.push('"',Zt,'":',qt[Zt].toString(),",")}),Qt.push("}");var re=Ci(Qt).replace(/;/g,`;
`).replace(/}/g,`}
`).replace(/{/g,`{
`),Ct=Function.apply(null,z.concat(re));return Ct.apply(null,P)}return{global:Ot,link:it,block:bt,proc:jt,scope:nt,cond:ft,compile:Dt}}var Pi="xyzw".split(""),qv=5121,$i=1,Y1=2,K1=0,Q1=1,Z1=2,J1=3,Of=4,Dv=5,Fv=6,Gv="dither",Hv="blend.enable",Uv="blend.color",tu="blend.equation",eu="blend.func",Bv="depth.enable",jv="depth.func",Wv="depth.range",Vv="depth.mask",ou="colorMask",Xv="cull.enable",Yv="cull.face",nu="frontFace",ru="lineWidth",Kv="polygonOffset.enable",au="polygonOffset.offset",Qv="sample.alpha",Zv="sample.enable",su="sample.coverage",Jv="stencil.enable",tm="stencil.mask",iu="stencil.func",cu="stencil.opFront",Zc="stencil.opBack",em="scissor.enable",Cf="scissor.box",_a="viewport",Jc="profile",Ps="framebuffer",tl="vert",el="frag",$s="elements",Is="primitive",qs="count",Pf="offset",$f="instances",ol="vao",lu="Width",fu="Height",Ii=Ps+lu,qi=Ps+fu,i4=_a+lu,c4=_a+fu,om="drawingBuffer",nm=om+lu,rm=om+fu,l4=[eu,tu,iu,cu,Zc,su,_a,Cf,au],Di=34962,f4=34963,h4=35632,u4=35633,am=3553,d4=34067,p4=2884,v4=3042,m4=3024,g4=2960,x4=2929,y4=3089,b4=32823,w4=32926,_4=32928,hu=5126,If=35664,qf=35665,Df=35666,uu=5124,Ff=35667,Gf=35668,Hf=35669,du=35670,Uf=35671,Bf=35672,jf=35673,nl=35674,rl=35675,al=35676,sl=35678,il=35680,sm=4,cl=1028,Ds=1029,im=2304,pu=2305,M4=32775,k4=32776,S4=519,Ba=7680,cm=0,lm=1,fm=32774,E4=513,hm=36160,z4=36064,la={0:0,1:1,zero:0,one:1,"src color":768,"one minus src color":769,"src alpha":770,"one minus src alpha":771,"dst color":774,"one minus dst color":775,"dst alpha":772,"one minus dst alpha":773,"constant color":32769,"one minus constant color":32770,"constant alpha":32771,"one minus constant alpha":32772,"src alpha saturate":776},um=["constant color, constant alpha","one minus constant color, constant alpha","constant color, one minus constant alpha","one minus constant color, one minus constant alpha","constant alpha, constant color","constant alpha, one minus constant color","one minus constant alpha, constant color","one minus constant alpha, one minus constant color"],Fi={never:512,less:513,"<":513,equal:514,"=":514,"==":514,"===":514,lequal:515,"<=":515,greater:516,">":516,notequal:517,"!=":517,"!==":517,gequal:518,">=":518,always:519},ja={0:0,zero:0,keep:7680,replace:7681,increment:7682,decrement:7683,"increment wrap":34055,"decrement wrap":34056,invert:5386},dm={frag:h4,vert:u4},vu={cw:im,ccw:pu};function Wf(b){return Array.isArray(b)||t(b)||Ur(b)}function pm(b){return b.sort(function(z,P){return z===_a?-1:P===_a?1:z<P?-1:1})}function $0(b,z,P,it){this.thisDep=b,this.contextDep=z,this.propDep=P,this.append=it}function Wa(b){return b&&!(b.thisDep||b.contextDep||b.propDep)}function Ln(b){return new $0(!1,!1,!1,b)}function Z0(b,z){var P=b.type;if(P===K1){var it=b.data.length;return new $0(!0,it>=1,it>=2,z)}else if(P===Of){var bt=b.data;return new $0(bt.thisDep,bt.contextDep,bt.propDep,z)}else{if(P===Dv)return new $0(!1,!1,!1,z);if(P===Fv){for(var nt=!1,ft=!1,Ot=!1,qt=0;qt<b.data.length;++qt){var jt=b.data[qt];if(jt.type===Q1)Ot=!0;else if(jt.type===Z1)ft=!0;else if(jt.type===J1)nt=!0;else if(jt.type===K1){nt=!0;var Dt=jt.data;Dt>=1&&(ft=!0),Dt>=2&&(Ot=!0)}else jt.type===Of&&(nt=nt||jt.data.thisDep,ft=ft||jt.data.contextDep,Ot=Ot||jt.data.propDep)}return new $0(nt,ft,Ot,z)}else return new $0(P===J1,P===Z1,P===Q1,z)}}var vm=new $0(!1,!1,!1,function(){});function A4(b,z,P,it,bt,nt,ft,Ot,qt,jt,Dt,Qt,re,Ct,Zt){var Z=jt.Record,ht={add:32774,subtract:32778,"reverse subtract":32779};P.ext_blend_minmax&&(ht.min=M4,ht.max=k4);var Ht=P.angle_instanced_arrays,he=P.webgl_draw_buffers,St={dirty:!0,profile:Zt.profile},me={},Lt=[],te={},zt={};function ee(L){return L.replace(".","_")}function Be(L,E,q){var K=ee(L);Lt.push(L),me[K]=St[K]=!!q,te[K]=E}function to(L,E,q){var K=ee(L);Lt.push(L),Array.isArray(q)?(St[K]=q.slice(),me[K]=q.slice()):St[K]=me[K]=q,zt[K]=E}Be(Gv,m4),Be(Hv,v4),to(Uv,"blendColor",[0,0,0,0]),to(tu,"blendEquationSeparate",[fm,fm]),to(eu,"blendFuncSeparate",[lm,cm,lm,cm]),Be(Bv,x4,!0),to(jv,"depthFunc",E4),to(Wv,"depthRange",[0,1]),to(Vv,"depthMask",!0),to(ou,ou,[!0,!0,!0,!0]),Be(Xv,p4),to(Yv,"cullFace",Ds),to(nu,nu,pu),to(ru,ru,1),Be(Kv,b4),to(au,"polygonOffset",[0,0]),Be(Qv,w4),Be(Zv,_4),to(su,"sampleCoverage",[1,!1]),Be(Jv,g4),to(tm,"stencilMask",-1),to(iu,"stencilFunc",[S4,0,-1]),to(cu,"stencilOpSeparate",[cl,Ba,Ba,Ba]),to(Zc,"stencilOpSeparate",[Ds,Ba,Ba,Ba]),Be(em,y4),to(Cf,"scissor",[0,0,b.drawingBufferWidth,b.drawingBufferHeight]),to(_a,_a,[0,0,b.drawingBufferWidth,b.drawingBufferHeight]);var ae={gl:b,context:re,strings:z,next:me,current:St,draw:Qt,elements:nt,buffer:bt,shader:Dt,attributes:jt.state,vao:jt,uniforms:qt,framebuffer:Ot,extensions:P,timer:Ct,isBufferArgs:Wf},Vt={primTypes:Si,compareFuncs:Fi,blendFuncs:la,blendEquations:ht,stencilOps:ja,glTypes:Ls,orientationType:vu};S.optional(function(){ae.isArrayLike=kn}),he&&(Vt.backBuffer=[Ds],Vt.drawBuffer=Re(it.maxDrawbuffers,function(L){return L===0?[0]:Re(L,function(E){return z4+E})}));var Mt=0;function Qe(){var L=s4(),E=L.link,q=L.global;L.id=Mt++,L.batchId="0";var K=E(ae),J=L.shared={props:"a0"};Object.keys(ae).forEach(function($){J[$]=q.def(K,".",$)}),S.optional(function(){L.CHECK=E(S),L.commandStr=S.guessCommand(),L.command=E(L.commandStr),L.assert=function($,T,Y){$("if(!(",T,"))",this.CHECK,".commandRaise(",E(Y),",",this.command,");")},Vt.invalidBlendCombinations=um});var G=L.next={},D=L.current={};Object.keys(zt).forEach(function($){Array.isArray(St[$])&&(G[$]=q.def(J.next,".",$),D[$]=q.def(J.current,".",$))});var W=L.constants={};Object.keys(Vt).forEach(function($){W[$]=q.def(JSON.stringify(Vt[$]))}),L.invoke=function($,T){switch(T.type){case K1:var Y=["this",J.context,J.props,L.batchId];return $.def(E(T.data),".call(",Y.slice(0,Math.max(T.data.length+1,4)),")");case Q1:return $.def(J.props,T.data);case Z1:return $.def(J.context,T.data);case J1:return $.def("this",T.data);case Of:return T.data.append(L,$),T.data.ref;case Dv:return T.data.toString();case Fv:return T.data.map(function(tt){return L.invoke($,tt)})}},L.attribCache={};var N={};return L.scopeAttrib=function($){var T=z.id($);if(T in N)return N[T];var Y=jt.scope[T];Y||(Y=jt.scope[T]=new Z);var tt=N[T]=E(Y);return tt},L}function lo(L){var E=L.static,q=L.dynamic,K;if(Jc in E){var J=!!E[Jc];K=Ln(function(D,W){return J}),K.enable=J}else if(Jc in q){var G=q[Jc];K=Z0(G,function(D,W){return D.invoke(W,G)})}return K}function Se(L,E){var q=L.static,K=L.dynamic;if(Ps in q){var J=q[Ps];return J?(J=Ot.getFramebuffer(J),S.command(J,"invalid framebuffer object"),Ln(function(D,W){var N=D.link(J),$=D.shared;W.set($.framebuffer,".next",N);var T=$.context;return W.set(T,"."+Ii,N+".width"),W.set(T,"."+qi,N+".height"),N})):Ln(function(D,W){var N=D.shared;W.set(N.framebuffer,".next","null");var $=N.context;return W.set($,"."+Ii,$+"."+nm),W.set($,"."+qi,$+"."+rm),"null"})}else if(Ps in K){var G=K[Ps];return Z0(G,function(D,W){var N=D.invoke(W,G),$=D.shared,T=$.framebuffer,Y=W.def(T,".getFramebuffer(",N,")");S.optional(function(){D.assert(W,"!"+N+"||"+Y,"invalid framebuffer object")}),W.set(T,".next",Y);var tt=$.context;return W.set(tt,"."+Ii,Y+"?"+Y+".width:"+tt+"."+nm),W.set(tt,"."+qi,Y+"?"+Y+".height:"+tt+"."+rm),Y})}else return null}function yo(L,E,q){var K=L.static,J=L.dynamic;function G(N){if(N in K){var $=K[N];S.commandType($,"object","invalid "+N,q.commandStr);var T=!0,Y=$.x|0,tt=$.y|0,xt,wt;return"width"in $?(xt=$.width|0,S.command(xt>=0,"invalid "+N,q.commandStr)):T=!1,"height"in $?(wt=$.height|0,S.command(wt>=0,"invalid "+N,q.commandStr)):T=!1,new $0(!T&&E&&E.thisDep,!T&&E&&E.contextDep,!T&&E&&E.propDep,function(De,ho){var Ee=De.shared.context,Xe=xt;"width"in $||(Xe=ho.def(Ee,".",Ii,"-",Y));var ao=wt;return"height"in $||(ao=ho.def(Ee,".",qi,"-",tt)),[Y,tt,Xe,ao]})}else if(N in J){var vt=J[N],Gt=Z0(vt,function(De,ho){var Ee=De.invoke(ho,vt);S.optional(function(){De.assert(ho,Ee+"&&typeof "+Ee+'==="object"',"invalid "+N)});var Xe=De.shared.context,ao=ho.def(Ee,".x|0"),$o=ho.def(Ee,".y|0"),xn=ho.def('"width" in ',Ee,"?",Ee,".width|0:","(",Xe,".",Ii,"-",ao,")"),I0=ho.def('"height" in ',Ee,"?",Ee,".height|0:","(",Xe,".",qi,"-",$o,")");return S.optional(function(){De.assert(ho,xn+">=0&&"+I0+">=0","invalid "+N)}),[ao,$o,xn,I0]});return E&&(Gt.thisDep=Gt.thisDep||E.thisDep,Gt.contextDep=Gt.contextDep||E.contextDep,Gt.propDep=Gt.propDep||E.propDep),Gt}else return E?new $0(E.thisDep,E.contextDep,E.propDep,function(De,ho){var Ee=De.shared.context;return[0,0,ho.def(Ee,".",Ii),ho.def(Ee,".",qi)]}):null}var D=G(_a);if(D){var W=D;D=new $0(D.thisDep,D.contextDep,D.propDep,function(N,$){var T=W.append(N,$),Y=N.shared.context;return $.set(Y,"."+i4,T[2]),$.set(Y,"."+c4,T[3]),T})}return{viewport:D,scissor_box:G(Cf)}}function no(L,E){var q=L.static,K=typeof q[el]=="string"&&typeof q[tl]=="string";if(K){if(Object.keys(E.dynamic).length>0)return null;var J=E.static,G=Object.keys(J);if(G.length>0&&typeof J[G[0]]=="number"){for(var D=[],W=0;W<G.length;++W)S(typeof J[G[W]]=="number","must specify all vertex attribute locations when using vaos"),D.push([J[G[W]]|0,G[W]]);return D}}return null}function mo(L,E,q){var K=L.static,J=L.dynamic;function G(T){if(T in K){var Y=z.id(K[T]);S.optional(function(){Dt.shader(dm[T],Y,S.guessCommand())});var tt=Ln(function(){return Y});return tt.id=Y,tt}else if(T in J){var xt=J[T];return Z0(xt,function(wt,vt){var Gt=wt.invoke(vt,xt),De=vt.def(wt.shared.strings,".id(",Gt,")");return S.optional(function(){vt(wt.shared.shader,".shader(",dm[T],",",De,",",wt.command,");")}),De})}return null}var D=G(el),W=G(tl),N=null,$;return Wa(D)&&Wa(W)?(N=Dt.program(W.id,D.id,null,q),$=Ln(function(T,Y){return T.link(N)})):$=new $0(D&&D.thisDep||W&&W.thisDep,D&&D.contextDep||W&&W.contextDep,D&&D.propDep||W&&W.propDep,function(T,Y){var tt=T.shared.shader,xt;D?xt=D.append(T,Y):xt=Y.def(tt,".",el);var wt;W?wt=W.append(T,Y):wt=Y.def(tt,".",tl);var vt=tt+".program("+wt+","+xt;return S.optional(function(){vt+=","+T.command}),Y.def(vt+")")}),{frag:D,vert:W,progVar:$,program:N}}function Po(L,E){var q=L.static,K=L.dynamic;function J(){if($s in q){var T=q[$s];Wf(T)?T=nt.getElements(nt.create(T,!0)):T&&(T=nt.getElements(T),S.command(T,"invalid elements",E.commandStr));var Y=Ln(function(xt,wt){if(T){var vt=xt.link(T);return xt.ELEMENTS=vt,vt}return xt.ELEMENTS=null,null});return Y.value=T,Y}else if($s in K){var tt=K[$s];return Z0(tt,function(xt,wt){var vt=xt.shared,Gt=vt.isBufferArgs,De=vt.elements,ho=xt.invoke(wt,tt),Ee=wt.def("null"),Xe=wt.def(Gt,"(",ho,")"),ao=xt.cond(Xe).then(Ee,"=",De,".createStream(",ho,");").else(Ee,"=",De,".getElements(",ho,");");return S.optional(function(){xt.assert(ao.else,"!"+ho+"||"+Ee,"invalid elements")}),wt.entry(ao),wt.exit(xt.cond(Xe).then(De,".destroyStream(",Ee,");")),xt.ELEMENTS=Ee,Ee})}return null}var G=J();function D(){if(Is in q){var T=q[Is];return S.commandParameter(T,Si,"invalid primitve",E.commandStr),Ln(function(tt,xt){return Si[T]})}else if(Is in K){var Y=K[Is];return Z0(Y,function(tt,xt){var wt=tt.constants.primTypes,vt=tt.invoke(xt,Y);return S.optional(function(){tt.assert(xt,vt+" in "+wt,"invalid primitive, must be one of "+Object.keys(Si))}),xt.def(wt,"[",vt,"]")})}else if(G)return Wa(G)?G.value?Ln(function(tt,xt){return xt.def(tt.ELEMENTS,".primType")}):Ln(function(){return sm}):new $0(G.thisDep,G.contextDep,G.propDep,function(tt,xt){var wt=tt.ELEMENTS;return xt.def(wt,"?",wt,".primType:",sm)});return null}function W(T,Y){if(T in q){var tt=q[T]|0;return S.command(!Y||tt>=0,"invalid "+T,E.commandStr),Ln(function(wt,vt){return Y&&(wt.OFFSET=tt),tt})}else if(T in K){var xt=K[T];return Z0(xt,function(wt,vt){var Gt=wt.invoke(vt,xt);return Y&&(wt.OFFSET=Gt,S.optional(function(){wt.assert(vt,Gt+">=0","invalid "+T)})),Gt})}else if(Y&&G)return Ln(function(wt,vt){return wt.OFFSET="0",0});return null}var N=W(Pf,!0);function $(){if(qs in q){var T=q[qs]|0;return S.command(typeof T=="number"&&T>=0,"invalid vertex count",E.commandStr),Ln(function(){return T})}else if(qs in K){var Y=K[qs];return Z0(Y,function(wt,vt){var Gt=wt.invoke(vt,Y);return S.optional(function(){wt.assert(vt,"typeof "+Gt+'==="number"&&'+Gt+">=0&&"+Gt+"===("+Gt+"|0)","invalid vertex count")}),Gt})}else if(G)if(Wa(G)){if(G)return N?new $0(N.thisDep,N.contextDep,N.propDep,function(wt,vt){var Gt=vt.def(wt.ELEMENTS,".vertCount-",wt.OFFSET);return S.optional(function(){wt.assert(vt,Gt+">=0","invalid vertex offset/element buffer too small")}),Gt}):Ln(function(wt,vt){return vt.def(wt.ELEMENTS,".vertCount")});var tt=Ln(function(){return-1});return S.optional(function(){tt.MISSING=!0}),tt}else{var xt=new $0(G.thisDep||N.thisDep,G.contextDep||N.contextDep,G.propDep||N.propDep,function(wt,vt){var Gt=wt.ELEMENTS;return wt.OFFSET?vt.def(Gt,"?",Gt,".vertCount-",wt.OFFSET,":-1"):vt.def(Gt,"?",Gt,".vertCount:-1")});return S.optional(function(){xt.DYNAMIC=!0}),xt}return null}return{elements:G,primitive:D(),count:$(),instances:W($f,!1),offset:N}}function Nn(L,E){var q=L.static,K=L.dynamic,J={};return Lt.forEach(function(G){var D=ee(G);function W(N,$){if(G in q){var T=N(q[G]);J[D]=Ln(function(){return T})}else if(G in K){var Y=K[G];J[D]=Z0(Y,function(tt,xt){return $(tt,xt,tt.invoke(xt,Y))})}}switch(G){case Xv:case Hv:case Gv:case Jv:case Bv:case em:case Kv:case Qv:case Zv:case Vv:return W(function(N){return S.commandType(N,"boolean",G,E.commandStr),N},function(N,$,T){return S.optional(function(){N.assert($,"typeof "+T+'==="boolean"',"invalid flag "+G,N.commandStr)}),T});case jv:return W(function(N){return S.commandParameter(N,Fi,"invalid "+G,E.commandStr),Fi[N]},function(N,$,T){var Y=N.constants.compareFuncs;return S.optional(function(){N.assert($,T+" in "+Y,"invalid "+G+", must be one of "+Object.keys(Fi))}),$.def(Y,"[",T,"]")});case Wv:return W(function(N){return S.command(kn(N)&&N.length===2&&typeof N[0]=="number"&&typeof N[1]=="number"&&N[0]<=N[1],"depth range is 2d array",E.commandStr),N},function(N,$,T){S.optional(function(){N.assert($,N.shared.isArrayLike+"("+T+")&&"+T+".length===2&&typeof "+T+'[0]==="number"&&typeof '+T+'[1]==="number"&&'+T+"[0]<="+T+"[1]","depth range must be a 2d array")});var Y=$.def("+",T,"[0]"),tt=$.def("+",T,"[1]");return[Y,tt]});case eu:return W(function(N){S.commandType(N,"object","blend.func",E.commandStr);var $="srcRGB"in N?N.srcRGB:N.src,T="srcAlpha"in N?N.srcAlpha:N.src,Y="dstRGB"in N?N.dstRGB:N.dst,tt="dstAlpha"in N?N.dstAlpha:N.dst;return S.commandParameter($,la,D+".srcRGB",E.commandStr),S.commandParameter(T,la,D+".srcAlpha",E.commandStr),S.commandParameter(Y,la,D+".dstRGB",E.commandStr),S.commandParameter(tt,la,D+".dstAlpha",E.commandStr),S.command(um.indexOf($+", "+Y)===-1,"unallowed blending combination (srcRGB, dstRGB) = ("+$+", "+Y+")",E.commandStr),[la[$],la[Y],la[T],la[tt]]},function(N,$,T){var Y=N.constants.blendFuncs;S.optional(function(){N.assert($,T+"&&typeof "+T+'==="object"',"invalid blend func, must be an object")});function tt(Ee,Xe){var ao=$.def('"',Ee,Xe,'" in ',T,"?",T,".",Ee,Xe,":",T,".",Ee);return S.optional(function(){N.assert($,ao+" in "+Y,"invalid "+G+"."+Ee+Xe+", must be one of "+Object.keys(la))}),ao}var xt=tt("src","RGB"),wt=tt("dst","RGB");S.optional(function(){var Ee=N.constants.invalidBlendCombinations;N.assert($,Ee+".indexOf("+xt+'+", "+'+wt+") === -1 ","unallowed blending combination for (srcRGB, dstRGB)")});var vt=$.def(Y,"[",xt,"]"),Gt=$.def(Y,"[",tt("src","Alpha"),"]"),De=$.def(Y,"[",wt,"]"),ho=$.def(Y,"[",tt("dst","Alpha"),"]");return[vt,De,Gt,ho]});case tu:return W(function(N){if(typeof N=="string")return S.commandParameter(N,ht,"invalid "+G,E.commandStr),[ht[N],ht[N]];if(typeof N=="object")return S.commandParameter(N.rgb,ht,G+".rgb",E.commandStr),S.commandParameter(N.alpha,ht,G+".alpha",E.commandStr),[ht[N.rgb],ht[N.alpha]];S.commandRaise("invalid blend.equation",E.commandStr)},function(N,$,T){var Y=N.constants.blendEquations,tt=$.def(),xt=$.def(),wt=N.cond("typeof ",T,'==="string"');return S.optional(function(){function vt(Gt,De,ho){N.assert(Gt,ho+" in "+Y,"invalid "+De+", must be one of "+Object.keys(ht))}vt(wt.then,G,T),N.assert(wt.else,T+"&&typeof "+T+'==="object"',"invalid "+G),vt(wt.else,G+".rgb",T+".rgb"),vt(wt.else,G+".alpha",T+".alpha")}),wt.then(tt,"=",xt,"=",Y,"[",T,"];"),wt.else(tt,"=",Y,"[",T,".rgb];",xt,"=",Y,"[",T,".alpha];"),$(wt),[tt,xt]});case Uv:return W(function(N){return S.command(kn(N)&&N.length===4,"blend.color must be a 4d array",E.commandStr),Re(4,function($){return+N[$]})},function(N,$,T){return S.optional(function(){N.assert($,N.shared.isArrayLike+"("+T+")&&"+T+".length===4","blend.color must be a 4d array")}),Re(4,function(Y){return $.def("+",T,"[",Y,"]")})});case tm:return W(function(N){return S.commandType(N,"number",D,E.commandStr),N|0},function(N,$,T){return S.optional(function(){N.assert($,"typeof "+T+'==="number"',"invalid stencil.mask")}),$.def(T,"|0")});case iu:return W(function(N){S.commandType(N,"object",D,E.commandStr);var $=N.cmp||"keep",T=N.ref||0,Y="mask"in N?N.mask:-1;return S.commandParameter($,Fi,G+".cmp",E.commandStr),S.commandType(T,"number",G+".ref",E.commandStr),S.commandType(Y,"number",G+".mask",E.commandStr),[Fi[$],T,Y]},function(N,$,T){var Y=N.constants.compareFuncs;S.optional(function(){function vt(){N.assert($,Array.prototype.join.call(arguments,""),"invalid stencil.func")}vt(T+"&&typeof ",T,'==="object"'),vt('!("cmp" in ',T,")||(",T,".cmp in ",Y,")")});var tt=$.def('"cmp" in ',T,"?",Y,"[",T,".cmp]",":",Ba),xt=$.def(T,".ref|0"),wt=$.def('"mask" in ',T,"?",T,".mask|0:-1");return[tt,xt,wt]});case cu:case Zc:return W(function(N){S.commandType(N,"object",D,E.commandStr);var $=N.fail||"keep",T=N.zfail||"keep",Y=N.zpass||"keep";return S.commandParameter($,ja,G+".fail",E.commandStr),S.commandParameter(T,ja,G+".zfail",E.commandStr),S.commandParameter(Y,ja,G+".zpass",E.commandStr),[G===Zc?Ds:cl,ja[$],ja[T],ja[Y]]},function(N,$,T){var Y=N.constants.stencilOps;S.optional(function(){N.assert($,T+"&&typeof "+T+'==="object"',"invalid "+G)});function tt(xt){return S.optional(function(){N.assert($,'!("'+xt+'" in '+T+")||("+T+"."+xt+" in "+Y+")","invalid "+G+"."+xt+", must be one of "+Object.keys(ja))}),$.def('"',xt,'" in ',T,"?",Y,"[",T,".",xt,"]:",Ba)}return[G===Zc?Ds:cl,tt("fail"),tt("zfail"),tt("zpass")]});case au:return W(function(N){S.commandType(N,"object",D,E.commandStr);var $=N.factor|0,T=N.units|0;return S.commandType($,"number",D+".factor",E.commandStr),S.commandType(T,"number",D+".units",E.commandStr),[$,T]},function(N,$,T){S.optional(function(){N.assert($,T+"&&typeof "+T+'==="object"',"invalid "+G)});var Y=$.def(T,".factor|0"),tt=$.def(T,".units|0");return[Y,tt]});case Yv:return W(function(N){var $=0;return N==="front"?$=cl:N==="back"&&($=Ds),S.command(!!$,D,E.commandStr),$},function(N,$,T){return S.optional(function(){N.assert($,T+'==="front"||'+T+'==="back"',"invalid cull.face")}),$.def(T,'==="front"?',cl,":",Ds)});case ru:return W(function(N){return S.command(typeof N=="number"&&N>=it.lineWidthDims[0]&&N<=it.lineWidthDims[1],"invalid line width, must be a positive number between "+it.lineWidthDims[0]+" and "+it.lineWidthDims[1],E.commandStr),N},function(N,$,T){return S.optional(function(){N.assert($,"typeof "+T+'==="number"&&'+T+">="+it.lineWidthDims[0]+"&&"+T+"<="+it.lineWidthDims[1],"invalid line width")}),T});case nu:return W(function(N){return S.commandParameter(N,vu,D,E.commandStr),vu[N]},function(N,$,T){return S.optional(function(){N.assert($,T+'==="cw"||'+T+'==="ccw"',"invalid frontFace, must be one of cw,ccw")}),$.def(T+'==="cw"?'+im+":"+pu)});case ou:return W(function(N){return S.command(kn(N)&&N.length===4,"color.mask must be length 4 array",E.commandStr),N.map(function($){return!!$})},function(N,$,T){return S.optional(function(){N.assert($,N.shared.isArrayLike+"("+T+")&&"+T+".length===4","invalid color.mask")}),Re(4,function(Y){return"!!"+T+"["+Y+"]"})});case su:return W(function(N){S.command(typeof N=="object"&&N,D,E.commandStr);var $="value"in N?N.value:1,T=!!N.invert;return S.command(typeof $=="number"&&$>=0&&$<=1,"sample.coverage.value must be a number between 0 and 1",E.commandStr),[$,T]},function(N,$,T){S.optional(function(){N.assert($,T+"&&typeof "+T+'==="object"',"invalid sample.coverage")});var Y=$.def('"value" in ',T,"?+",T,".value:1"),tt=$.def("!!",T,".invert");return[Y,tt]})}}),J}function Xn(L,E){var q=L.static,K=L.dynamic,J={};return Object.keys(q).forEach(function(G){var D=q[G],W;if(typeof D=="number"||typeof D=="boolean")W=Ln(function(){return D});else if(typeof D=="function"){var N=D._reglType;N==="texture2d"||N==="textureCube"?W=Ln(function($){return $.link(D)}):N==="framebuffer"||N==="framebufferCube"?(S.command(D.color.length>0,'missing color attachment for framebuffer sent to uniform "'+G+'"',E.commandStr),W=Ln(function($){return $.link(D.color[0])})):S.commandRaise('invalid data for uniform "'+G+'"',E.commandStr)}else kn(D)?W=Ln(function($){var T=$.global.def("[",Re(D.length,function(Y){return S.command(typeof D[Y]=="number"||typeof D[Y]=="boolean","invalid uniform "+G,$.commandStr),D[Y]}),"]");return T}):S.commandRaise('invalid or missing data for uniform "'+G+'"',E.commandStr);W.value=D,J[G]=W}),Object.keys(K).forEach(function(G){var D=K[G];J[G]=Z0(D,function(W,N){return W.invoke(N,D)})}),J}function So(L,E){var q=L.static,K=L.dynamic,J={};return Object.keys(q).forEach(function(G){var D=q[G],W=z.id(G),N=new Z;if(Wf(D))N.state=$i,N.buffer=bt.getBuffer(bt.create(D,Di,!1,!0)),N.type=0;else{var $=bt.getBuffer(D);if($)N.state=$i,N.buffer=$,N.type=0;else if(S.command(typeof D=="object"&&D,"invalid data for attribute "+G,E.commandStr),"constant"in D){var T=D.constant;N.buffer="null",N.state=Y1,typeof T=="number"?N.x=T:(S.command(kn(T)&&T.length>0&&T.length<=4,"invalid constant for attribute "+G,E.commandStr),Pi.forEach(function(De,ho){ho<T.length&&(N[De]=T[ho])}))}else{Wf(D.buffer)?$=bt.getBuffer(bt.create(D.buffer,Di,!1,!0)):$=bt.getBuffer(D.buffer),S.command(!!$,'missing buffer for attribute "'+G+'"',E.commandStr);var Y=D.offset|0;S.command(Y>=0,'invalid offset for attribute "'+G+'"',E.commandStr);var tt=D.stride|0;S.command(tt>=0&&tt<256,'invalid stride for attribute "'+G+'", must be integer betweeen [0, 255]',E.commandStr);var xt=D.size|0;S.command(!("size"in D)||xt>0&&xt<=4,'invalid size for attribute "'+G+'", must be 1,2,3,4',E.commandStr);var wt=!!D.normalized,vt=0;"type"in D&&(S.commandParameter(D.type,Ls,"invalid type for attribute "+G,E.commandStr),vt=Ls[D.type]);var Gt=D.divisor|0;"divisor"in D&&(S.command(Gt===0||Ht,'cannot specify divisor for attribute "'+G+'", instancing not supported',E.commandStr),S.command(Gt>=0,'invalid divisor for attribute "'+G+'"',E.commandStr)),S.optional(function(){var De=E.commandStr,ho=["buffer","offset","divisor","normalized","type","size","stride"];Object.keys(D).forEach(function(Ee){S.command(ho.indexOf(Ee)>=0,'unknown parameter "'+Ee+'" for attribute pointer "'+G+'" (valid parameters are '+ho+")",De)})}),N.buffer=$,N.state=$i,N.size=xt,N.normalized=wt,N.type=vt||$.dtype,N.offset=Y,N.stride=tt,N.divisor=Gt}}J[G]=Ln(function(De,ho){var Ee=De.attribCache;if(W in Ee)return Ee[W];var Xe={isStream:!1};return Object.keys(N).forEach(function(ao){Xe[ao]=N[ao]}),N.buffer&&(Xe.buffer=De.link(N.buffer),Xe.type=Xe.type||Xe.buffer+".dtype"),Ee[W]=Xe,Xe})}),Object.keys(K).forEach(function(G){var D=K[G];function W(N,$){var T=N.invoke($,D),Y=N.shared,tt=N.constants,xt=Y.isBufferArgs,wt=Y.buffer;S.optional(function(){N.assert($,T+"&&(typeof "+T+'==="object"||typeof '+T+'==="function")&&('+xt+"("+T+")||"+wt+".getBuffer("+T+")||"+wt+".getBuffer("+T+".buffer)||"+xt+"("+T+'.buffer)||("constant" in '+T+"&&(typeof "+T+'.constant==="number"||'+Y.isArrayLike+"("+T+".constant))))",'invalid dynamic attribute "'+G+'"')});var vt={isStream:$.def(!1)},Gt=new Z;Gt.state=$i,Object.keys(Gt).forEach(function(Xe){vt[Xe]=$.def(""+Gt[Xe])});var De=vt.buffer,ho=vt.type;$("if(",xt,"(",T,")){",vt.isStream,"=true;",De,"=",wt,".createStream(",Di,",",T,");",ho,"=",De,".dtype;","}else{",De,"=",wt,".getBuffer(",T,");","if(",De,"){",ho,"=",De,".dtype;",'}else if("constant" in ',T,"){",vt.state,"=",Y1,";","if(typeof "+T+'.constant === "number"){',vt[Pi[0]],"=",T,".constant;",Pi.slice(1).map(function(Xe){return vt[Xe]}).join("="),"=0;","}else{",Pi.map(function(Xe,ao){return vt[Xe]+"="+T+".constant.length>"+ao+"?"+T+".constant["+ao+"]:0;"}).join(""),"}}else{","if(",xt,"(",T,".buffer)){",De,"=",wt,".createStream(",Di,",",T,".buffer);","}else{",De,"=",wt,".getBuffer(",T,".buffer);","}",ho,'="type" in ',T,"?",tt.glTypes,"[",T,".type]:",De,".dtype;",vt.normalized,"=!!",T,".normalized;");function Ee(Xe){$(vt[Xe],"=",T,".",Xe,"|0;")}return Ee("size"),Ee("offset"),Ee("stride"),Ee("divisor"),$("}}"),$.exit("if(",vt.isStream,"){",wt,".destroyStream(",De,");","}"),vt}J[G]=Z0(D,W)}),J}function qn(L,E){var q=L.static,K=L.dynamic;if(ol in q){var J=q[ol];return J!==null&&jt.getVAO(J)===null&&(J=jt.createVAO(J)),Ln(function(D){return D.link(jt.getVAO(J))})}else if(ol in K){var G=K[ol];return Z0(G,function(D,W){var N=D.invoke(W,G);return W.def(D.shared.vao+".getVAO("+N+")")})}return null}function nn(L){var E=L.static,q=L.dynamic,K={};return Object.keys(E).forEach(function(J){var G=E[J];K[J]=Ln(function(D,W){return typeof G=="number"||typeof G=="boolean"?""+G:D.link(G)})}),Object.keys(q).forEach(function(J){var G=q[J];K[J]=Z0(G,function(D,W){return D.invoke(W,G)})}),K}function Rn(L,E,q,K,J){var G=L.static,D=L.dynamic;S.optional(function(){var Ee=[Ps,tl,el,$s,Is,Pf,qs,$f,Jc,ol].concat(Lt);function Xe(ao){Object.keys(ao).forEach(function($o){S.command(Ee.indexOf($o)>=0,'unknown parameter "'+$o+'"',J.commandStr)})}Xe(G),Xe(D)});var W=no(L,E),N=Se(L,J),$=yo(L,N,J),T=Po(L,J),Y=Nn(L,J),tt=mo(L,J,W);function xt(Ee){var Xe=$[Ee];Xe&&(Y[Ee]=Xe)}xt(_a),xt(ee(Cf));var wt=Object.keys(Y).length>0,vt={framebuffer:N,draw:T,shader:tt,state:Y,dirty:wt,scopeVAO:null,drawVAO:null,useVAO:!1,attributes:{}};if(vt.profile=lo(L,J),vt.uniforms=Xn(q,J),vt.drawVAO=vt.scopeVAO=qn(L,J),!vt.drawVAO&&tt.program&&!W&&P.angle_instanced_arrays){var Gt=!0,De=tt.program.attributes.map(function(Ee){var Xe=E.static[Ee];return Gt=Gt&&!!Xe,Xe});if(Gt&&De.length>0){var ho=jt.getVAO(jt.createVAO(De));vt.drawVAO=new $0(null,null,null,function(Ee,Xe){return Ee.link(ho)}),vt.useVAO=!0}}return W?vt.useVAO=!0:vt.attributes=So(E,J),vt.context=nn(K,J),vt}function Dn(L,E,q){var K=L.shared,J=K.context,G=L.scope();Object.keys(q).forEach(function(D){E.save(J,"."+D);var W=q[D],N=W.append(L,E);Array.isArray(N)?G(J,".",D,"=[",N.join(),"];"):G(J,".",D,"=",N,";")}),E(G)}function Fn(L,E,q,K){var J=L.shared,G=J.gl,D=J.framebuffer,W;he&&(W=E.def(J.extensions,".webgl_draw_buffers"));var N=L.constants,$=N.drawBuffer,T=N.backBuffer,Y;q?Y=q.append(L,E):Y=E.def(D,".next"),K||E("if(",Y,"!==",D,".cur){"),E("if(",Y,"){",G,".bindFramebuffer(",hm,",",Y,".framebuffer);"),he&&E(W,".drawBuffersWEBGL(",$,"[",Y,".colorAttachments.length]);"),E("}else{",G,".bindFramebuffer(",hm,",null);"),he&&E(W,".drawBuffersWEBGL(",T,");"),E("}",D,".cur=",Y,";"),K||E("}")}function a0(L,E,q){var K=L.shared,J=K.gl,G=L.current,D=L.next,W=K.current,N=K.next,$=L.cond(W,".dirty");Lt.forEach(function(T){var Y=ee(T);if(!(Y in q.state)){var tt,xt;if(Y in D){tt=D[Y],xt=G[Y];var wt=Re(St[Y].length,function(Gt){return $.def(tt,"[",Gt,"]")});$(L.cond(wt.map(function(Gt,De){return Gt+"!=="+xt+"["+De+"]"}).join("||")).then(J,".",zt[Y],"(",wt,");",wt.map(function(Gt,De){return xt+"["+De+"]="+Gt}).join(";"),";"))}else{tt=$.def(N,".",Y);var vt=L.cond(tt,"!==",W,".",Y);$(vt),Y in te?vt(L.cond(tt).then(J,".enable(",te[Y],");").else(J,".disable(",te[Y],");"),W,".",Y,"=",tt,";"):vt(J,".",zt[Y],"(",tt,");",W,".",Y,"=",tt,";")}}}),Object.keys(q.state).length===0&&$(W,".dirty=false;"),E($)}function v0(L,E,q,K){var J=L.shared,G=L.current,D=J.current,W=J.gl;pm(Object.keys(q)).forEach(function(N){var $=q[N];if(!(K&&!K($))){var T=$.append(L,E);if(te[N]){var Y=te[N];Wa($)?T?E(W,".enable(",Y,");"):E(W,".disable(",Y,");"):E(L.cond(T).then(W,".enable(",Y,");").else(W,".disable(",Y,");")),E(D,".",N,"=",T,";")}else if(kn(T)){var tt=G[N];E(W,".",zt[N],"(",T,");",T.map(function(xt,wt){return tt+"["+wt+"]="+xt}).join(";"),";")}else E(W,".",zt[N],"(",T,");",D,".",N,"=",T,";")}})}function Sn(L,E){Ht&&(L.instancing=E.def(L.shared.extensions,".angle_instanced_arrays"))}function fo(L,E,q,K,J){var G=L.shared,D=L.stats,W=G.current,N=G.timer,$=q.profile;function T(){return typeof performance=="undefined"?"Date.now()":"performance.now()"}var Y,tt;function xt(Ee){Y=E.def(),Ee(Y,"=",T(),";"),typeof J=="string"?Ee(D,".count+=",J,";"):Ee(D,".count++;"),Ct&&(K?(tt=E.def(),Ee(tt,"=",N,".getNumPendingQueries();")):Ee(N,".beginQuery(",D,");"))}function wt(Ee){Ee(D,".cpuTime+=",T(),"-",Y,";"),Ct&&(K?Ee(N,".pushScopeStats(",tt,",",N,".getNumPendingQueries(),",D,");"):Ee(N,".endQuery();"))}function vt(Ee){var Xe=E.def(W,".profile");E(W,".profile=",Ee,";"),E.exit(W,".profile=",Xe,";")}var Gt;if($){if(Wa($)){$.enable?(xt(E),wt(E.exit),vt("true")):vt("false");return}Gt=$.append(L,E),vt(Gt)}else Gt=E.def(W,".profile");var De=L.block();xt(De),E("if(",Gt,"){",De,"}");var ho=L.block();wt(ho),E.exit("if(",Gt,"){",ho,"}")}function m0(L,E,q,K,J){var G=L.shared;function D(N){switch(N){case If:case Ff:case Uf:return 2;case qf:case Gf:case Bf:return 3;case Df:case Hf:case jf:return 4;default:return 1}}function W(N,$,T){var Y=G.gl,tt=E.def(N,".location"),xt=E.def(G.attributes,"[",tt,"]"),wt=T.state,vt=T.buffer,Gt=[T.x,T.y,T.z,T.w],De=["buffer","normalized","offset","stride"];function ho(){E("if(!",xt,".buffer){",Y,".enableVertexAttribArray(",tt,");}");var Xe=T.type,ao;if(T.size?ao=E.def(T.size,"||",$):ao=$,E("if(",xt,".type!==",Xe,"||",xt,".size!==",ao,"||",De.map(function(xn){return xt+"."+xn+"!=="+T[xn]}).join("||"),"){",Y,".bindBuffer(",Di,",",vt,".buffer);",Y,".vertexAttribPointer(",[tt,ao,Xe,T.normalized,T.stride,T.offset],");",xt,".type=",Xe,";",xt,".size=",ao,";",De.map(function(xn){return xt+"."+xn+"="+T[xn]+";"}).join(""),"}"),Ht){var $o=T.divisor;E("if(",xt,".divisor!==",$o,"){",L.instancing,".vertexAttribDivisorANGLE(",[tt,$o],");",xt,".divisor=",$o,";}")}}function Ee(){E("if(",xt,".buffer){",Y,".disableVertexAttribArray(",tt,");",xt,".buffer=null;","}if(",Pi.map(function(Xe,ao){return xt+"."+Xe+"!=="+Gt[ao]}).join("||"),"){",Y,".vertexAttrib4f(",tt,",",Gt,");",Pi.map(function(Xe,ao){return xt+"."+Xe+"="+Gt[ao]+";"}).join(""),"}")}wt===$i?ho():wt===Y1?Ee():(E("if(",wt,"===",$i,"){"),ho(),E("}else{"),Ee(),E("}"))}K.forEach(function(N){var $=N.name,T=q.attributes[$],Y;if(T){if(!J(T))return;Y=T.append(L,E)}else{if(!J(vm))return;var tt=L.scopeAttrib($);S.optional(function(){L.assert(E,tt+".state","missing attribute "+$)}),Y={},Object.keys(new Z).forEach(function(xt){Y[xt]=E.def(tt,".",xt)})}W(L.link(N),D(N.info.type),Y)})}function Go(L,E,q,K,J){for(var G=L.shared,D=G.gl,W,N=0;N<K.length;++N){var $=K[N],T=$.name,Y=$.info.type,tt=q.uniforms[T],xt=L.link($),wt=xt+".location",vt;if(tt){if(!J(tt))continue;if(Wa(tt)){var Gt=tt.value;if(S.command(Gt!==null&&typeof Gt!="undefined",'missing uniform "'+T+'"',L.commandStr),Y===sl||Y===il){S.command(typeof Gt=="function"&&(Y===sl&&(Gt._reglType==="texture2d"||Gt._reglType==="framebuffer")||Y===il&&(Gt._reglType==="textureCube"||Gt._reglType==="framebufferCube")),"invalid texture for uniform "+T,L.commandStr);var De=L.link(Gt._texture||Gt.color[0]._texture);E(D,".uniform1i(",wt,",",De+".bind());"),E.exit(De,".unbind();")}else if(Y===nl||Y===rl||Y===al){S.optional(function(){S.command(kn(Gt),"invalid matrix for uniform "+T,L.commandStr),S.command(Y===nl&&Gt.length===4||Y===rl&&Gt.length===9||Y===al&&Gt.length===16,"invalid length for matrix uniform "+T,L.commandStr)});var ho=L.global.def("new Float32Array(["+Array.prototype.slice.call(Gt)+"])"),Ee=2;Y===rl?Ee=3:Y===al&&(Ee=4),E(D,".uniformMatrix",Ee,"fv(",wt,",false,",ho,");")}else{switch(Y){case hu:S.commandType(Gt,"number","uniform "+T,L.commandStr),W="1f";break;case If:S.command(kn(Gt)&&Gt.length===2,"uniform "+T,L.commandStr),W="2f";break;case qf:S.command(kn(Gt)&&Gt.length===3,"uniform "+T,L.commandStr),W="3f";break;case Df:S.command(kn(Gt)&&Gt.length===4,"uniform "+T,L.commandStr),W="4f";break;case du:S.commandType(Gt,"boolean","uniform "+T,L.commandStr),W="1i";break;case uu:S.commandType(Gt,"number","uniform "+T,L.commandStr),W="1i";break;case Uf:S.command(kn(Gt)&&Gt.length===2,"uniform "+T,L.commandStr),W="2i";break;case Ff:S.command(kn(Gt)&&Gt.length===2,"uniform "+T,L.commandStr),W="2i";break;case Bf:S.command(kn(Gt)&&Gt.length===3,"uniform "+T,L.commandStr),W="3i";break;case Gf:S.command(kn(Gt)&&Gt.length===3,"uniform "+T,L.commandStr),W="3i";break;case jf:S.command(kn(Gt)&&Gt.length===4,"uniform "+T,L.commandStr),W="4i";break;case Hf:S.command(kn(Gt)&&Gt.length===4,"uniform "+T,L.commandStr),W="4i";break}E(D,".uniform",W,"(",wt,",",kn(Gt)?Array.prototype.slice.call(Gt):Gt,");")}continue}else vt=tt.append(L,E)}else{if(!J(vm))continue;vt=E.def(G.uniforms,"[",z.id(T),"]")}Y===sl?(S(!Array.isArray(vt),"must specify a scalar prop for textures"),E("if(",vt,"&&",vt,'._reglType==="framebuffer"){',vt,"=",vt,".color[0];","}")):Y===il&&(S(!Array.isArray(vt),"must specify a scalar prop for cube maps"),E("if(",vt,"&&",vt,'._reglType==="framebufferCube"){',vt,"=",vt,".color[0];","}")),S.optional(function(){function I0(jr,_m){L.assert(E,jr,'bad data or missing for uniform "'+T+'".  '+_m)}function mu(jr){S(!Array.isArray(vt),"must not specify an array type for uniform"),I0("typeof "+vt+'==="'+jr+'"',"invalid type, expected "+jr)}function zr(jr,_m){Array.isArray(vt)?S(vt.length===jr,"must have length "+jr):I0(G.isArrayLike+"("+vt+")&&"+vt+".length==="+jr,"invalid vector, should have length "+jr,L.commandStr)}function wm(jr){S(!Array.isArray(vt),"must not specify a value type"),I0("typeof "+vt+'==="function"&&'+vt+'._reglType==="texture'+(jr===am?"2d":"Cube")+'"',"invalid texture type",L.commandStr)}switch(Y){case uu:mu("number");break;case Ff:zr(2,"number");break;case Gf:zr(3,"number");break;case Hf:zr(4,"number");break;case hu:mu("number");break;case If:zr(2,"number");break;case qf:zr(3,"number");break;case Df:zr(4,"number");break;case du:mu("boolean");break;case Uf:zr(2,"boolean");break;case Bf:zr(3,"boolean");break;case jf:zr(4,"boolean");break;case nl:zr(4,"number");break;case rl:zr(9,"number");break;case al:zr(16,"number");break;case sl:wm(am);break;case il:wm(d4);break}});var Xe=1;switch(Y){case sl:case il:var ao=E.def(vt,"._texture");E(D,".uniform1i(",wt,",",ao,".bind());"),E.exit(ao,".unbind();");continue;case uu:case du:W="1i";break;case Ff:case Uf:W="2i",Xe=2;break;case Gf:case Bf:W="3i",Xe=3;break;case Hf:case jf:W="4i",Xe=4;break;case hu:W="1f";break;case If:W="2f",Xe=2;break;case qf:W="3f",Xe=3;break;case Df:W="4f",Xe=4;break;case nl:W="Matrix2fv";break;case rl:W="Matrix3fv";break;case al:W="Matrix4fv";break}if(E(D,".uniform",W,"(",wt,","),W.charAt(0)==="M"){var $o=Math.pow(Y-nl+2,2),xn=L.global.def("new Float32Array(",$o,")");Array.isArray(vt)?E("false,(",Re($o,function(I0){return xn+"["+I0+"]="+vt[I0]}),",",xn,")"):E("false,(Array.isArray(",vt,")||",vt," instanceof Float32Array)?",vt,":(",Re($o,function(I0){return xn+"["+I0+"]="+vt+"["+I0+"]"}),",",xn,")")}else Xe>1?E(Re(Xe,function(I0){return Array.isArray(vt)?vt[I0]:vt+"["+I0+"]"})):(S(!Array.isArray(vt),"uniform value must not be an array"),E(vt));E(");")}}function We(L,E,q,K){var J=L.shared,G=J.gl,D=J.draw,W=K.draw;function N(){var ao=W.elements,$o,xn=E;return ao?((ao.contextDep&&K.contextDynamic||ao.propDep)&&(xn=q),$o=ao.append(L,xn)):$o=xn.def(D,".",$s),$o&&xn("if("+$o+")"+G+".bindBuffer("+f4+","+$o+".buffer.buffer);"),$o}function $(){var ao=W.count,$o,xn=E;return ao?((ao.contextDep&&K.contextDynamic||ao.propDep)&&(xn=q),$o=ao.append(L,xn),S.optional(function(){ao.MISSING&&L.assert(E,"false","missing vertex count"),ao.DYNAMIC&&L.assert(xn,$o+">=0","missing vertex count")})):($o=xn.def(D,".",qs),S.optional(function(){L.assert(xn,$o+">=0","missing vertex count")})),$o}var T=N();function Y(ao){var $o=W[ao];return $o?$o.contextDep&&K.contextDynamic||$o.propDep?$o.append(L,q):$o.append(L,E):E.def(D,".",ao)}var tt=Y(Is),xt=Y(Pf),wt=$();if(typeof wt=="number"){if(wt===0)return}else q("if(",wt,"){"),q.exit("}");var vt,Gt;Ht&&(vt=Y($f),Gt=L.instancing);var De=T+".type",ho=W.elements&&Wa(W.elements);function Ee(){function ao(){q(Gt,".drawElementsInstancedANGLE(",[tt,wt,De,xt+"<<(("+De+"-"+qv+")>>1)",vt],");")}function $o(){q(Gt,".drawArraysInstancedANGLE(",[tt,xt,wt,vt],");")}T?ho?ao():(q("if(",T,"){"),ao(),q("}else{"),$o(),q("}")):$o()}function Xe(){function ao(){q(G+".drawElements("+[tt,wt,De,xt+"<<(("+De+"-"+qv+")>>1)"]+");")}function $o(){q(G+".drawArrays("+[tt,xt,wt]+");")}T?ho?ao():(q("if(",T,"){"),ao(),q("}else{"),$o(),q("}")):$o()}Ht&&(typeof vt!="number"||vt>=0)?typeof vt=="string"?(q("if(",vt,">0){"),Ee(),q("}else if(",vt,"<0){"),Xe(),q("}")):Ee():Xe()}function _o(L,E,q,K,J){var G=Qe(),D=G.proc("body",J);return S.optional(function(){G.commandStr=E.commandStr,G.command=G.link(E.commandStr)}),Ht&&(G.instancing=D.def(G.shared.extensions,".angle_instanced_arrays")),L(G,D,q,K),G.compile().body}function Lo(L,E,q,K){Sn(L,E),q.useVAO?q.drawVAO?E(L.shared.vao,".setVAO(",q.drawVAO.append(L,E),");"):E(L.shared.vao,".setVAO(",L.shared.vao,".targetVAO);"):(E(L.shared.vao,".setVAO(null);"),m0(L,E,q,K.attributes,function(){return!0})),Go(L,E,q,K.uniforms,function(){return!0}),We(L,E,E,q)}function En(L,E){var q=L.proc("draw",1);Sn(L,q),Dn(L,q,E.context),Fn(L,q,E.framebuffer),a0(L,q,E),v0(L,q,E.state),fo(L,q,E,!1,!0);var K=E.shader.progVar.append(L,q);if(q(L.shared.gl,".useProgram(",K,".program);"),E.shader.program)Lo(L,q,E,E.shader.program);else{q(L.shared.vao,".setVAO(null);");var J=L.global.def("{}"),G=q.def(K,".id"),D=q.def(J,"[",G,"]");q(L.cond(D).then(D,".call(this,a0);").else(D,"=",J,"[",G,"]=",L.link(function(W){return _o(Lo,L,E,W,1)}),"(",K,");",D,".call(this,a0);"))}Object.keys(E.state).length>0&&q(L.shared.current,".dirty=true;")}function fa(L,E,q,K){L.batchId="a1",Sn(L,E);function J(){return!0}m0(L,E,q,K.attributes,J),Go(L,E,q,K.uniforms,J),We(L,E,E,q)}function Fs(L,E,q,K){Sn(L,E);var J=q.contextDep,G=E.def(),D="a0",W="a1",N=E.def();L.shared.props=N,L.batchId=G;var $=L.scope(),T=L.scope();E($.entry,"for(",G,"=0;",G,"<",W,";++",G,"){",N,"=",D,"[",G,"];",T,"}",$.exit);function Y(De){return De.contextDep&&J||De.propDep}function tt(De){return!Y(De)}if(q.needsContext&&Dn(L,T,q.context),q.needsFramebuffer&&Fn(L,T,q.framebuffer),v0(L,T,q.state,Y),q.profile&&Y(q.profile)&&fo(L,T,q,!1,!0),K)q.useVAO?q.drawVAO?Y(q.drawVAO)?T(L.shared.vao,".setVAO(",q.drawVAO.append(L,T),");"):$(L.shared.vao,".setVAO(",q.drawVAO.append(L,$),");"):$(L.shared.vao,".setVAO(",L.shared.vao,".targetVAO);"):($(L.shared.vao,".setVAO(null);"),m0(L,$,q,K.attributes,tt),m0(L,T,q,K.attributes,Y)),Go(L,$,q,K.uniforms,tt),Go(L,T,q,K.uniforms,Y),We(L,$,T,q);else{var xt=L.global.def("{}"),wt=q.shader.progVar.append(L,T),vt=T.def(wt,".id"),Gt=T.def(xt,"[",vt,"]");T(L.shared.gl,".useProgram(",wt,".program);","if(!",Gt,"){",Gt,"=",xt,"[",vt,"]=",L.link(function(De){return _o(fa,L,q,De,2)}),"(",wt,");}",Gt,".call(this,a0[",G,"],",G,");")}}function O(L,E){var q=L.proc("batch",2);L.batchId="0",Sn(L,q);var K=!1,J=!0;Object.keys(E.context).forEach(function(xt){K=K||E.context[xt].propDep}),K||(Dn(L,q,E.context),J=!1);var G=E.framebuffer,D=!1;G?(G.propDep?K=D=!0:G.contextDep&&K&&(D=!0),D||Fn(L,q,G)):Fn(L,q,null),E.state.viewport&&E.state.viewport.propDep&&(K=!0);function W(xt){return xt.contextDep&&K||xt.propDep}a0(L,q,E),v0(L,q,E.state,function(xt){return!W(xt)}),(!E.profile||!W(E.profile))&&fo(L,q,E,!1,"a1"),E.contextDep=K,E.needsContext=J,E.needsFramebuffer=D;var N=E.shader.progVar;if(N.contextDep&&K||N.propDep)Fs(L,q,E,null);else{var $=N.append(L,q);if(q(L.shared.gl,".useProgram(",$,".program);"),E.shader.program)Fs(L,q,E,E.shader.program);else{q(L.shared.vao,".setVAO(null);");var T=L.global.def("{}"),Y=q.def($,".id"),tt=q.def(T,"[",Y,"]");q(L.cond(tt).then(tt,".call(this,a0,a1);").else(tt,"=",T,"[",Y,"]=",L.link(function(xt){return _o(Fs,L,E,xt,2)}),"(",$,");",tt,".call(this,a0,a1);"))}}Object.keys(E.state).length>0&&q(L.shared.current,".dirty=true;")}function ct(L,E){var q=L.proc("scope",3);L.batchId="a2";var K=L.shared,J=K.current;Dn(L,q,E.context),E.framebuffer&&E.framebuffer.append(L,q),pm(Object.keys(E.state)).forEach(function(D){var W=E.state[D],N=W.append(L,q);kn(N)?N.forEach(function($,T){q.set(L.next[D],"["+T+"]",$)}):q.set(K.next,"."+D,N)}),fo(L,q,E,!0,!0),[$s,Pf,qs,$f,Is].forEach(function(D){var W=E.draw[D];W&&q.set(K.draw,"."+D,""+W.append(L,q))}),Object.keys(E.uniforms).forEach(function(D){var W=E.uniforms[D].append(L,q);Array.isArray(W)&&(W="["+W.join()+"]"),q.set(K.uniforms,"["+z.id(D)+"]",W)}),Object.keys(E.attributes).forEach(function(D){var W=E.attributes[D].append(L,q),N=L.scopeAttrib(D);Object.keys(new Z).forEach(function($){q.set(N,"."+$,W[$])})}),E.scopeVAO&&q.set(K.vao,".targetVAO",E.scopeVAO.append(L,q));function G(D){var W=E.shader[D];W&&q.set(K.shader,"."+D,W.append(L,q))}G(tl),G(el),Object.keys(E.state).length>0&&(q(J,".dirty=true;"),q.exit(J,".dirty=true;")),q("a1(",L.shared.context,",a0,",L.batchId,");")}function ot(L){if(!(typeof L!="object"||kn(L))){for(var E=Object.keys(L),q=0;q<E.length;++q)if(U.isDynamic(L[E[q]]))return!0;return!1}}function be(L,E,q){var K=E.static[q];if(!K||!ot(K))return;var J=L.global,G=Object.keys(K),D=!1,W=!1,N=!1,$=L.global.def("{}");G.forEach(function(Y){var tt=K[Y];if(U.isDynamic(tt)){typeof tt=="function"&&(tt=K[Y]=U.unbox(tt));var xt=Z0(tt,null);D=D||xt.thisDep,N=N||xt.propDep,W=W||xt.contextDep}else{switch(J($,".",Y,"="),typeof tt){case"number":J(tt);break;case"string":J('"',tt,'"');break;case"object":Array.isArray(tt)&&J("[",tt.join(),"]");break;default:J(L.link(tt));break}J(";")}});function T(Y,tt){G.forEach(function(xt){var wt=K[xt];if(U.isDynamic(wt)){var vt=Y.invoke(tt,wt);tt($,".",xt,"=",vt,";")}})}E.dynamic[q]=new U.DynamicVariable(Of,{thisDep:D,contextDep:W,propDep:N,ref:$,append:T}),delete E.static[q]}function bo(L,E,q,K,J){var G=Qe();G.stats=G.link(J),Object.keys(E.static).forEach(function(W){be(G,E,W)}),l4.forEach(function(W){be(G,L,W)});var D=Rn(L,E,q,K,G);return En(G,D),ct(G,D),O(G,D),e(G.compile(),{destroy:function(){D.shader.program.destroy()}})}return{next:me,current:St,procs:function(){var L=Qe(),E=L.proc("poll"),q=L.proc("refresh"),K=L.block();E(K),q(K);var J=L.shared,G=J.gl,D=J.next,W=J.current;K(W,".dirty=false;"),Fn(L,E),Fn(L,q,null,!0);var N;Ht&&(N=L.link(Ht)),P.oes_vertex_array_object&&q(L.link(P.oes_vertex_array_object),".bindVertexArrayOES(null);");for(var $=0;$<it.maxAttributes;++$){var T=q.def(J.attributes,"[",$,"]"),Y=L.cond(T,".buffer");Y.then(G,".enableVertexAttribArray(",$,");",G,".bindBuffer(",Di,",",T,".buffer.buffer);",G,".vertexAttribPointer(",$,",",T,".size,",T,".type,",T,".normalized,",T,".stride,",T,".offset);").else(G,".disableVertexAttribArray(",$,");",G,".vertexAttrib4f(",$,",",T,".x,",T,".y,",T,".z,",T,".w);",T,".buffer=null;"),q(Y),Ht&&q(N,".vertexAttribDivisorANGLE(",$,",",T,".divisor);")}return q(L.shared.vao,".currentVAO=null;",L.shared.vao,".setVAO(",L.shared.vao,".targetVAO);"),Object.keys(te).forEach(function(tt){var xt=te[tt],wt=K.def(D,".",tt),vt=L.block();vt("if(",wt,"){",G,".enable(",xt,")}else{",G,".disable(",xt,")}",W,".",tt,"=",wt,";"),q(vt),E("if(",wt,"!==",W,".",tt,"){",vt,"}")}),Object.keys(zt).forEach(function(tt){var xt=zt[tt],wt=St[tt],vt,Gt,De=L.block();if(De(G,".",xt,"("),kn(wt)){var ho=wt.length;vt=L.global.def(D,".",tt),Gt=L.global.def(W,".",tt),De(Re(ho,function(Ee){return vt+"["+Ee+"]"}),");",Re(ho,function(Ee){return Gt+"["+Ee+"]="+vt+"["+Ee+"];"}).join("")),E("if(",Re(ho,function(Ee){return vt+"["+Ee+"]!=="+Gt+"["+Ee+"]"}).join("||"),"){",De,"}")}else vt=K.def(D,".",tt),Gt=K.def(W,".",tt),De(vt,");",W,".",tt,"=",vt,";"),E("if(",vt,"!==",Gt,"){",De,"}");q(De)}),L.compile()}(),compile:bo}}function T4(){return{vaoCount:0,bufferCount:0,elementsCount:0,framebufferCount:0,shaderCount:0,textureCount:0,cubeCount:0,renderbufferCount:0,maxTextureUnits:0}}var L4=34918,N4=34919,mm=35007,R4=function(b,z){if(!z.ext_disjoint_timer_query)return null;var P=[];function it(){return P.pop()||z.ext_disjoint_timer_query.createQueryEXT()}function bt(Ht){P.push(Ht)}var nt=[];function ft(Ht){var he=it();z.ext_disjoint_timer_query.beginQueryEXT(mm,he),nt.push(he),Ct(nt.length-1,nt.length,Ht)}function Ot(){z.ext_disjoint_timer_query.endQueryEXT(mm)}function qt(){this.startQueryIndex=-1,this.endQueryIndex=-1,this.sum=0,this.stats=null}var jt=[];function Dt(){return jt.pop()||new qt}function Qt(Ht){jt.push(Ht)}var re=[];function Ct(Ht,he,St){var me=Dt();me.startQueryIndex=Ht,me.endQueryIndex=he,me.sum=0,me.stats=St,re.push(me)}var Zt=[],Z=[];function ht(){var Ht,he,St=nt.length;if(St!==0){Z.length=Math.max(Z.length,St+1),Zt.length=Math.max(Zt.length,St+1),Zt[0]=0,Z[0]=0;var me=0;for(Ht=0,he=0;he<nt.length;++he){var Lt=nt[he];z.ext_disjoint_timer_query.getQueryObjectEXT(Lt,N4)?(me+=z.ext_disjoint_timer_query.getQueryObjectEXT(Lt,L4),bt(Lt)):nt[Ht++]=Lt,Zt[he+1]=me,Z[he+1]=Ht}for(nt.length=Ht,Ht=0,he=0;he<re.length;++he){var te=re[he],zt=te.startQueryIndex,ee=te.endQueryIndex;te.sum+=Zt[ee]-Zt[zt];var Be=Z[zt],to=Z[ee];to===Be?(te.stats.gpuTime+=te.sum/1e6,Qt(te)):(te.startQueryIndex=Be,te.endQueryIndex=to,re[Ht++]=te)}re.length=Ht}}return{beginQuery:ft,endQuery:Ot,pushScopeStats:Ct,update:ht,getNumPendingQueries:function(){return nt.length},clear:function(){P.push.apply(P,nt);for(var Ht=0;Ht<P.length;Ht++)z.ext_disjoint_timer_query.deleteQueryEXT(P[Ht]);nt.length=0,P.length=0},restore:function(){nt.length=0,P.length=0}}},O4=16384,C4=256,P4=1024,$4=34962,gm="webglcontextlost",xm="webglcontextrestored",ym=1,I4=2,q4=3;function bm(b,z){for(var P=0;P<b.length;++P)if(b[P]===z)return P;return-1}function D4(b){var z=ue(b);if(!z)return null;var P=z.gl,it=P.getContextAttributes(),bt=P.isContextLost(),nt=Me(P,z);if(!nt)return null;var ft=Tt(),Ot=T4(),qt=nt.extensions,jt=R4(P,qt),Dt=j(),Qt=P.drawingBufferWidth,re=P.drawingBufferHeight,Ct={tick:0,time:0,viewportWidth:Qt,viewportHeight:re,framebufferWidth:Qt,framebufferHeight:re,drawingBufferWidth:Qt,drawingBufferHeight:re,pixelRatio:z.pixelRatio},Zt={},Z={elements:null,primitive:4,count:-1,offset:0,instances:-1},ht=kb(P,qt),Ht=Fb(P,Ot,z,St),he=Zw(P,qt,ht,Ot,Ht);function St(We){return he.destroyBuffer(We)}var me=Zb(P,qt,Ht,Ot),Lt=o4(P,ft,Ot,z),te=Tw(P,qt,ht,function(){Be.procs.poll()},Ct,Ot,z),zt=Lw(P,qt,ht,Ot,z),ee=Kw(P,qt,ht,te,zt,Ot),Be=A4(P,ft,qt,ht,Ht,me,te,ee,Zt,he,Lt,Z,Ct,jt,z),to=a4(P,ee,Be.procs.poll,Ct,it,qt,ht),ae=Be.next,Vt=P.canvas,Mt=[],Qe=[],lo=[],Se=[z.onDestroy],yo=null;function no(){if(Mt.length===0){jt&&jt.update(),yo=null;return}yo=Q.next(no),v0();for(var We=Mt.length-1;We>=0;--We){var _o=Mt[We];_o&&_o(Ct,null,0)}P.flush(),jt&&jt.update()}function mo(){!yo&&Mt.length>0&&(yo=Q.next(no))}function Po(){yo&&(Q.cancel(no),yo=null)}function Nn(We){We.preventDefault(),bt=!0,Po(),Qe.forEach(function(_o){_o()})}function Xn(We){P.getError(),bt=!1,nt.restore(),Lt.restore(),Ht.restore(),te.restore(),zt.restore(),ee.restore(),he.restore(),jt&&jt.restore(),Be.procs.refresh(),mo(),lo.forEach(function(_o){_o()})}Vt&&(Vt.addEventListener(gm,Nn,!1),Vt.addEventListener(xm,Xn,!1));function So(){Mt.length=0,Po(),Vt&&(Vt.removeEventListener(gm,Nn),Vt.removeEventListener(xm,Xn)),Lt.clear(),ee.clear(),zt.clear(),te.clear(),me.clear(),Ht.clear(),he.clear(),jt&&jt.clear(),Se.forEach(function(We){We()})}function qn(We){S(!!We,"invalid args to regl({...})"),S.type(We,"object","invalid args to regl({...})");function _o(J){var G=e({},J);delete G.uniforms,delete G.attributes,delete G.context,delete G.vao,"stencil"in G&&G.stencil.op&&(G.stencil.opBack=G.stencil.opFront=G.stencil.op,delete G.stencil.op);function D(W){if(W in G){var N=G[W];delete G[W],Object.keys(N).forEach(function($){G[W+"."+$]=N[$]})}}return D("blend"),D("depth"),D("cull"),D("stencil"),D("polygonOffset"),D("scissor"),D("sample"),"vao"in J&&(G.vao=J.vao),G}function Lo(J,G){var D={},W={};return Object.keys(J).forEach(function(N){var $=J[N];if(U.isDynamic($)){W[N]=U.unbox($,N);return}else if(G&&Array.isArray($)){for(var T=0;T<$.length;++T)if(U.isDynamic($[T])){W[N]=U.unbox($,N);return}}D[N]=$}),{dynamic:W,static:D}}var En=Lo(We.context||{},!0),fa=Lo(We.uniforms||{},!0),Fs=Lo(We.attributes||{},!1),O=Lo(_o(We),!1),ct={gpuTime:0,cpuTime:0,count:0},ot=Be.compile(O,Fs,fa,En,ct),be=ot.draw,bo=ot.batch,L=ot.scope,E=[];function q(J){for(;E.length<J;)E.push(null);return E}function K(J,G){var D;if(bt&&S.raise("context lost"),typeof J=="function")return L.call(this,null,J,0);if(typeof G=="function")if(typeof J=="number")for(D=0;D<J;++D)L.call(this,null,G,D);else if(Array.isArray(J))for(D=0;D<J.length;++D)L.call(this,J[D],G,D);else return L.call(this,J,G,0);else if(typeof J=="number"){if(J>0)return bo.call(this,q(J|0),J|0)}else if(Array.isArray(J)){if(J.length)return bo.call(this,J,J.length)}else return be.call(this,J)}return e(K,{stats:ct,destroy:function(){ot.destroy()}})}var nn=ee.setFBO=qn({framebuffer:U.define.call(null,ym,"framebuffer")});function Rn(We,_o){var Lo=0;Be.procs.poll();var En=_o.color;En&&(P.clearColor(+En[0]||0,+En[1]||0,+En[2]||0,+En[3]||0),Lo|=O4),"depth"in _o&&(P.clearDepth(+_o.depth),Lo|=C4),"stencil"in _o&&(P.clearStencil(_o.stencil|0),Lo|=P4),S(!!Lo,"called regl.clear with no buffer specified"),P.clear(Lo)}function Dn(We){if(S(typeof We=="object"&&We,"regl.clear() takes an object as input"),"framebuffer"in We)if(We.framebuffer&&We.framebuffer_reglType==="framebufferCube")for(var _o=0;_o<6;++_o)nn(e({framebuffer:We.framebuffer.faces[_o]},We),Rn);else nn(We,Rn);else Rn(null,We)}function Fn(We){S.type(We,"function","regl.frame() callback must be a function"),Mt.push(We);function _o(){var Lo=bm(Mt,We);S(Lo>=0,"cannot cancel a frame twice");function En(){var fa=bm(Mt,En);Mt[fa]=Mt[Mt.length-1],Mt.length-=1,Mt.length<=0&&Po()}Mt[Lo]=En}return mo(),{cancel:_o}}function a0(){var We=ae.viewport,_o=ae.scissor_box;We[0]=We[1]=_o[0]=_o[1]=0,Ct.viewportWidth=Ct.framebufferWidth=Ct.drawingBufferWidth=We[2]=_o[2]=P.drawingBufferWidth,Ct.viewportHeight=Ct.framebufferHeight=Ct.drawingBufferHeight=We[3]=_o[3]=P.drawingBufferHeight}function v0(){Ct.tick+=1,Ct.time=fo(),a0(),Be.procs.poll()}function Sn(){te.refresh(),a0(),Be.procs.refresh(),jt&&jt.update()}function fo(){return(j()-Dt)/1e3}Sn();function m0(We,_o){S.type(_o,"function","listener callback must be a function");var Lo;switch(We){case"frame":return Fn(_o);case"lost":Lo=Qe;break;case"restore":Lo=lo;break;case"destroy":Lo=Se;break;default:S.raise("invalid event, must be one of frame,lost,restore,destroy")}return Lo.push(_o),{cancel:function(){for(var En=0;En<Lo.length;++En)if(Lo[En]===_o){Lo[En]=Lo[Lo.length-1],Lo.pop();return}}}}var Go=e(qn,{clear:Dn,prop:U.define.bind(null,ym),context:U.define.bind(null,I4),this:U.define.bind(null,q4),draw:qn({}),buffer:function(We){return Ht.create(We,$4,!1,!1)},elements:function(We){return me.create(We,!1)},texture:te.create2D,cube:te.createCube,renderbuffer:zt.create,framebuffer:ee.create,framebufferCube:ee.createCube,vao:he.createVAO,attributes:it,frame:Fn,on:m0,limits:ht,hasExtension:function(We){return ht.extensions.indexOf(We.toLowerCase())>=0},read:to,destroy:So,_gl:P,_refresh:Sn,poll:function(){v0(),jt&&jt.update()},now:fo,stats:Ot});return z.onDone(null,Go),Go}return D4})});var Gs=At((T7,Bm)=>{"use strict";var ka=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],Sa=(t,e)=>[t[0]+e[0],t[1]+e[1],t[2]+e[2]],ha=(t,e)=>[t[0]*e,t[1]*e,t[2]*e],Jf=(t,e)=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2],vl=(t,e)=>[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]],Eu=t=>Math.hypot(t[0],t[1],t[2]),Tr=t=>{let e=Eu(t)||1;return[t[0]/e,t[1]/e,t[2]/e]};function Vi(t,e){let o=t.length-1,r=Math.min(Math.max(e,0),1)*o,n=Math.min(o-1,Math.floor(r)),a=r-n,s=t[Math.max(0,n-1)],i=t[n],c=t[n+1],h=t[Math.min(o,n+2)],f=[0,0,0];for(let d=0;d<3;d++)f[d]=.5*(2*i[d]+(-s[d]+c[d])*a+(2*s[d]-5*i[d]+4*c[d]-h[d])*a*a+(-s[d]+3*i[d]-3*c[d]+h[d])*a*a*a);return f}function t6(t,e){return Vi(t.map(o=>[o,0,0]),e)[0]}function e6(t,e,o,r){let n={curMat:[0,0,0]},s={r:[1,0,0,0,1,0,0,0,1],t:[0,0,0],s:1},i=[];n.save=()=>{i.push({r:s.r.slice(),t:s.t.slice(),s:s.s})},n.restore=()=>{s=i.pop()};let c=(u,v)=>{let l=new Array(9);for(let p=0;p<3;p++)for(let m=0;m<3;m++)l[p*3+m]=u[p*3]*v[m]+u[p*3+1]*v[3+m]+u[p*3+2]*v[6+m];return l},h=u=>[s.r[0]*u[0]+s.r[1]*u[1]+s.r[2]*u[2],s.r[3]*u[0]+s.r[4]*u[1]+s.r[5]*u[2],s.r[6]*u[0]+s.r[7]*u[1]+s.r[8]*u[2]];n.translate=(u,v,l)=>{let p=h([u,v,l]);s.t=[s.t[0]+p[0]*s.s,s.t[1]+p[1]*s.s,s.t[2]+p[2]*s.s]},n.scale=u=>{s.s*=u},n.rotateY=u=>{let v=Math.cos(u),l=Math.sin(u);s.r=c(s.r,[v,0,l,0,1,0,-l,0,v])},n.vert=(u,v,l)=>{let p=l||n.curMat,m=h(u),g=Tr(h(v));return t.push(m[0]*s.s+s.t[0],m[1]*s.s+s.t[1],m[2]*s.s+s.t[2]),e.push(g[0],g[1],g[2]),r.push(p[0],p[1],p[2]),t.length/3-1};let f=u=>[t[u*3],t[u*3+1],t[u*3+2]],d=u=>[e[u*3],e[u*3+1],e[u*3+2]];return n.tri=(u,v,l)=>{let p=f(u),m=vl(ka(f(v),p),ka(f(l),p)),g=Sa(Sa(d(u),d(v)),d(l));Jf(m,g)<0?o.push(u,l,v):o.push(u,v,l)},n.box=(u,v,l,p,m,g,x)=>{let y=[[[u,v,l],[p,v,l],[u,m,l],[p,m,l],[0,0,-1]],[[p,v,g],[u,v,g],[p,m,g],[u,m,g],[0,0,1]],[[u,v,g],[u,v,l],[u,m,g],[u,m,l],[-1,0,0]],[[p,v,l],[p,v,g],[p,m,l],[p,m,g],[1,0,0]],[[u,m,l],[p,m,l],[u,m,g],[p,m,g],[0,1,0]],[[u,v,g],[p,v,g],[u,v,l],[p,v,l],[0,-1,0]]];for(let w of y){let _=n.vert(w[0],w[4],x),M=n.vert(w[1],w[4],x),k=n.vert(w[2],w[4],x),R=n.vert(w[3],w[4],x);n.tri(_,M,k),n.tri(M,R,k)}},n.surface=(u,v,l,p)=>{p=p||{};let m=.001,g=_=>Math.min(1,Math.max(0,_)),x=[],y=[];for(let _=0;_<=v;_++){let M=[],k=[];for(let R=0;R<=l;R++){let A=_/v,F=R/l,C=u(A,F),H=Math.min(1-m,Math.max(m,A)),I=p.wrapV?F:Math.min(1-m,Math.max(m,F)),V=ka(u(g(H+m),I),u(g(H-m),I)),dt=p.wrapV?I+m:g(I+m),$t=p.wrapV?I-m:g(I-m),kt=ka(u(H,dt),u(H,$t)),mt=vl(V,kt);Eu(mt)<1e-14&&(mt=p.inside?ka(C,p.inside(A,F)):[0,1,0]),mt=Tr(mt),p.inside&&Jf(mt,ka(C,p.inside(A,F)))<0&&(mt=ha(mt,-1));let st=p.mat?p.mat(A,F,C):null;M.push(n.vert(C,mt,st)),p.double&&k.push(n.vert(C,ha(mt,-1),st))}x.push(M),y.push(k)}let w=_=>{for(let M=0;M<v;M++)for(let k=0;k<l;k++){let R=_[M][k],A=_[M+1][k],F=_[M][k+1],C=_[M+1][k+1];n.tri(R,A,F),n.tri(A,C,F)}};w(x),p.double&&w(y)},n.ellipsoid=(u,v,l,p,m)=>{m=m||{};let g=m.warp||null;n.surface((x,y)=>{let w=x*Math.PI,_=y*Math.PI*2,M=g?g(x,y):1;return[u[0]+v[0]*M*Math.sin(w)*Math.cos(_),u[1]+v[1]*M*Math.cos(w),u[2]+v[2]*M*Math.sin(w)*Math.sin(_)]},l||10,p||14,{wrapV:!0,inside:()=>u,mat:m.mat})},n.tube=(u,v,l,p,m)=>{m=m||{};let g=40,x=[],y=null;for(let M=0;M<=g;M++){let k=M/g,R=Vi(u,Math.max(0,k-.01)),A=Vi(u,Math.min(1,k+.01)),F=Tr(ka(A,R)),C;if(y)C=Tr(ka(y,ha(F,Jf(y,F))));else{let H=Math.abs(F[1])<.9?[0,1,0]:[1,0,0];C=Tr(vl(F,H))}x.push({N:C,B:Tr(vl(F,C))}),y=C}let w=M=>{let k=Math.min(Math.max(M,0),1)*g,R=Math.min(g-1,Math.floor(k)),A=k-R,F=x[R],C=x[R+1];return{N:Tr(Sa(ha(F.N,1-A),ha(C.N,A))),B:Tr(Sa(ha(F.B,1-A),ha(C.B,A)))}},_=m.squash||[1,1];n.surface((M,k)=>{let R=Vi(u,M),A=w(M),F=v(M),C=k*Math.PI*2;return Sa(R,Sa(ha(A.N,Math.cos(C)*F*_[0]),ha(A.B,Math.sin(C)*F*_[1])))},l||12,p||8,{wrapV:!0,inside:M=>Vi(u,M),mat:m.mat})},n.lathe=(u,v,l,p,m)=>{m=m||{};let g=[];for(let x=0;x<u.length-1;x++){let y=u[x+1][0]-u[x][0],w=u[x+1][1]-u[x][1];g.push(Tr([w,-y,0]))}for(let x=0;x<u.length-1;x++){let y=u[x],w=u[x+1],_=x===0||y[2]===1,M=x===u.length-2||w[2]===1,k=_?g[x]:Tr(Sa(g[x-1],g[x])),R=M?g[x]:Tr(Sa(g[x],g[x+1])),A=[],F=[];for(let C=0;C<=p;C++){let H=C/p*Math.PI*2,I=Math.cos(H),V=Math.sin(H),dt=m.mat?m.mat(H,y[1]):null,$t=m.mat?m.mat(H,w[1]):null;A.push(n.vert([v+y[0]*I,y[1],l+y[0]*V],[k[0]*I,k[1],k[0]*V],dt)),F.push(n.vert([v+w[0]*I,w[1],l+w[0]*V],[R[0]*I,R[1],R[0]*V],$t))}for(let C=0;C<p;C++)n.tri(A[C],A[C+1],F[C]),n.tri(A[C+1],F[C+1],F[C])}},n}Bm.exports={createBuilder:e6,catmull:Vi,curve1:t6,sub:ka,add:Sa,mul:ha,dot:Jf,cross:vl,norm:Tr,len:Eu}});var Xm=At((L7,Vm)=>{"use strict";var{norm:th,add:eh,mul:Xa,sub:o6,cross:jm}=Gs(),Wm=Math.PI*2,n6=(t,e,o)=>{let r=Math.min(1,Math.max(0,(o-t)/(e-t)));return r*r*(3-2*r)};function r6(t){let e=t>>>0;return()=>{e|=0,e=e+1831565813|0;let o=Math.imul(e^e>>>15,1|e);return o=o+Math.imul(o^o>>>7,61|o)^o,((o^o>>>14)>>>0)/4294967296}}function a6(t,e,o,r,n,a){let s=(u,v)=>[7,u*a,v];t.curMat=[0,0,0],t.box(e-a*1.36,r,o-a*1.36,e+a*1.36,r+.22,o+a*1.36),t.lathe([[a*1.24,r+.22,1],[a*1.3,r+.27],[a*1.31,r+.32],[a*1.26,r+.37,1],[a*1.1,r+.4],[a*1.14,r+.44,1],[a*1.18,r+.47],[a*1.1,r+.52,1],[a*.96,r+.55]],e,o,56,{mat:s});let i=r+.55,c=n-i,h=20,f=6,d=a*.075;return t.surface((u,v)=>{let l=i+u*c,p=a*(.96-.12*u),m=v*Wm,g=v*h%1,x=p-d*4*g*(1-g);return[e+x*Math.cos(m),l,o+x*Math.sin(m)]},10,h*f,{wrapV:!0,inside:u=>[e,i+u*c,o],mat:(u,v)=>[7,v*Wm*a,i+u*c]}),t.lathe([[a*.8,n-.02,1],[a*.9,n+.02],[a*.9,n+.07,1],[a*.82,n+.09,1],[a*.86,n+.13],[a*1.06,n+.2],[a*1.22,n+.28],[a*1.28,n+.33,1]],e,o,56,{mat:s}),t.curMat=[0,0,0],t.box(e-a*1.42,n+.33,o-a*1.42,e+a*1.42,n+.53,o+a*1.42),n+.53}function s6(t,e,o){t.curMat=[1,0,0],t.lathe([[e*1.1,0,1],[e*1.1,o*.14,1],[e*1.04,o*.14,1],[e*1.04,o*.2],[e*.97,o*.26,1],[e*.95,o*.26,1],[e*.95,o*.8,1],[e*.98,o*.8,1],[e*1.03,o*.86],[e*1.05,o*.92,1],[e*1.05,o,1],[e*.5,o,1],[0,o]],0,0,72)}function i6(t,e,o,r,n){t.save(),t.translate(e,0,o),s6(t,r,n),t.restore()}function c6(t,e,o,r,n,a){let s=r6(r),i=a?th([a[0],0,a[1]]):null;t.save(),t.translate(e,0,o),t.scale(n||1),t.curMat=[3,0,0],t.lathe([[.17,0,1],[.2,.02],[.28,.13],[.36,.3],[.395,.47],[.38,.62],[.32,.74],[.29,.8],[.292,.82,1],[.325,.84],[.335,.88,1],[.3,.905,1],[.275,.895,1],[.272,.85]],0,0,48),t.curMat=[5,0,0],t.lathe([[.272,.85,1],[.1,.868],[0,.872]],0,0,24);let c=11,h=.86;for(let f=0;f<c;f++){let d=f>=c-2,u=f*2.399963+s()*.5,v=[Math.cos(u),0,Math.sin(u)],l=[-Math.sin(u),0,Math.cos(u)],p=f*.618%1,m=d?.06+s()*.06:.12+.62*p,g=1;if(i){let mt=v[0]*i[0]+v[2]*i[2];g=.25+.75*n6(-.7,.5,mt),m*=g}let x=d?1.1+s()*.25:.85+.55*(1-p*.55)+s()*.15,y=d?1+s()*.2:.95+s()*.28,w=d?.055:.215+s()*.05,_=.04+s()*.05,M=[v[0]*_,h,v[2]*_],k=[M[0]+v[0]*Math.sin(m)*x*.92,M[1]+Math.cos(m)*x,M[2]+v[2]*Math.sin(m)*x*.92],R=[M[0]+v[0]*Math.sin(m*.5)*x*.45,M[1]+x*.5,M[2]+v[2]*Math.sin(m*.5)*x*.45];t.curMat=[4,0,0],t.tube([M,R,k],mt=>.02-.008*mt,8,7);let A=24,F=m*.9+.05,C=m+(d?.12:(.95+.45*p)*(.35+.65*g)),H=[k],I=[],V=k;for(let mt=0;mt<A;mt++){let st=mt/A,Wt=F+(C-F)*st*st,we=[v[0]*Math.sin(Wt),Math.cos(Wt),v[2]*Math.sin(Wt)];I.push(we),V=eh(V,Xa(we,y/A)),H.push(V)}I.push(I[I.length-1]);let dt=mt=>{let st=mt*A,Wt=Math.min(A-1,Math.floor(st)),we=st-Wt;return eh(Xa(H[Wt],1-we),Xa(H[Wt+1],we))},$t=mt=>{let st=mt*A,Wt=Math.min(A,Math.floor(st)),we=Math.min(A,Wt+1),_e=st-Wt;return th(eh(Xa(I[Wt],1-_e),Xa(I[we],_e)))},kt=(s()-.5)*.5;t.curMat=[2,0,0],t.surface((mt,st)=>{let Wt=st*2-1,we=dt(mt),_e=$t(mt),Ve=kt*mt,Ie=eh(Xa(l,Math.cos(Ve)),Xa(jm(_e,l),Math.sin(Ve)));Ie=th(o6(Ie,Xa(_e,Ie[0]*_e[0]+Ie[1]*_e[1]+Ie[2]*_e[2])));let xo=th(jm(Ie,_e)),ro=w*Math.pow(Math.sin(Math.PI*Math.pow(mt,.72)),.85),pt=.3*ro*Math.abs(Wt)+.012*Math.sin(mt*40+Wt*2)*Math.abs(Wt)*(d?0:1),X=-.1*ro*Wt*Wt*Wt*Wt,gt=pt+X;return[we[0]+Ie[0]*Wt*ro+xo[0]*gt,we[1]+Ie[1]*Wt*ro+xo[1]*gt,we[2]+Ie[2]*Wt*ro+xo[2]*gt]},14,8,{double:!0,mat:(mt,st)=>[2,st*2-1,mt]})}t.restore()}Vm.exports={addFlutedColumn:a6,addStatue:i6,addPlant:c6}});var Ya=At((N7,Zm)=>{"use strict";var Pt={xc:7,r:2.5,spring:4.7};Pt.x0=Pt.xc-Pt.r;Pt.x1=Pt.xc+Pt.r;Pt.top=Pt.spring+Pt.r;var F0=.06,ln=.1,Ym=.08,oh=Pt.r,nh=[Pt.x0+oh/3,Pt.x0+2*oh/3,Pt.xc+oh/3,Pt.xc+2*oh/3],Xi=.28,zu=[.95,1.65,2.35,3.05,3.75],Km=[1.05,1.8],ml=[8,0,0],hr=[0,0,0];function Lr(t,e,o,r,n,a,s,i){t.box(Math.min(e,n),Math.min(o,a),Math.min(r,s),Math.max(e,n),Math.max(o,a),Math.max(r,s),i)}function Yi(t,e,o,r,n,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),h=t.vert(r,a,s),f=t.vert(n,a,s);t.tri(i,c,h),t.tri(i,h,f)}function rh(t,e,o,r,n,a,s=48,i=0,c=Math.PI){let h=(f,d,u)=>[Pt.xc+d*Math.cos(f),Pt.spring+d*Math.sin(f),u];for(let f=0;f<s;f++){let d=i+(c-i)*f/s,u=i+(c-i)*(f+1)/s,v=(d+u)/2;Yi(t,h(d,e,n),h(u,e,n),h(u,o,n),h(d,o,n),[0,0,1],a),Yi(t,h(d,o,r),h(u,o,r),h(u,e,r),h(d,e,r),[0,0,-1],a),Yi(t,h(d,e,r),h(u,e,r),h(u,e,n),h(d,e,n),[-Math.cos(v),-Math.sin(v),0],a),Yi(t,h(u,o,r),h(d,o,r),h(d,o,n),h(u,o,n),[Math.cos(v),Math.sin(v),0],a)}}function l6(t){let r=a=>[Pt.xc+Pt.r*Math.cos(a),Pt.spring+Pt.r*Math.sin(a)],n=a=>{let s=Math.cos(a),i=Math.sin(a),c=Math.abs(s)>1e-6?Pt.r/Math.abs(s):1/0,h=i>1e-6?(8-Pt.spring)/i:1/0,f=Math.min(c,h);return[Math.min(Pt.x1,Math.max(Pt.x0,Pt.xc+s*f)),Math.min(8,Pt.spring+i*f)]};for(let a=0;a<48;a++){let s=Math.PI*a/48,i=Math.PI*(a+1)/48,c=r(s),h=r(i),f=n(s),d=n(i);for(let[v,l]of[[.35,1],[-.35,-1]])Yi(t,[c[0],c[1],v],[h[0],h[1],v],[d[0],d[1],v],[f[0],f[1],v],[0,0,l],hr);let u=(s+i)/2;Yi(t,[c[0],c[1],-.35],[h[0],h[1],-.35],[h[0],h[1],.35],[c[0],c[1],.35],[-Math.cos(u),-Math.sin(u),0],hr)}}function f6(t){Lr(t,-.35,0,-.35,Pt.x0,8,.35,hr),Lr(t,Pt.x1,0,-.35,14+.35,8,.35,hr),l6(t),Qm(t)}function Qm(t){Lr(t,Pt.x0-.32,.3,.35,Pt.x0,Pt.spring,.35+.07,hr),Lr(t,Pt.x1,.3,.35,Pt.x1+.32,Pt.spring,.35+.07,hr),Lr(t,Pt.x0-.32-.05,0,.35,Pt.x0,.3,.35+.07+.04,hr),Lr(t,Pt.x1,0,.35,Pt.x1+.32+.05,.3,.35+.07+.04,hr),Lr(t,Pt.x0-.32-.06,Pt.spring-.12,.35,Pt.x0,Pt.spring,.35+.07+.05,hr),Lr(t,Pt.x1,Pt.spring-.12,.35,Pt.x1+.32+.06,Pt.spring,.35+.07+.05,hr),rh(t,Pt.r,Pt.r+.32,.35,.35+.07,hr),rh(t,Pt.r+.32,Pt.r+.32+.06,.35,.35+.07+.03,hr),Lr(t,Pt.xc-.22,Pt.top-.08,.35,Pt.xc+.22,Pt.top+.32+.12,.35+.07+.06,hr)}function h6(t,e){e=e||"all";let o=e==="all",r=o||e==="fixed",n=-Ym/2,a=Ym/2,s=(u,v,l,p,m=0)=>Lr(t,u-m,v,n,l+m,p,a,ml),i=u=>Pt.spring+Math.sqrt(Math.max(0,Pt.r*Pt.r-(u-Pt.xc)*(u-Pt.xc))),c=e==="right"?Pt.xc:Pt.x0,h=e==="left"?Pt.xc:Pt.x1,f=u=>o||e==="left"&&u<Pt.xc||e==="right"&&u>Pt.xc,d=o?null:Pt.spring-.06;if(r){s(Pt.x0,0,Pt.x0+ln,Pt.spring),s(Pt.x1-ln,0,Pt.x1,Pt.spring),rh(t,Pt.r-ln,Pt.r,n,a,ml,64),s(Pt.x0,0,Pt.x1,.05),s(Pt.x0,Pt.spring-.06,Pt.x1,Pt.spring+.06);for(let u of Km)rh(t,u-F0/2,u+F0/2,n,a,ml,48)}if(o){s(Pt.x0,0,Pt.x1,Xi),s(Pt.xc-ln/2,0,Pt.xc+ln/2,Pt.top-ln*.5);for(let u of nh)s(u-F0/2,Xi,u+F0/2,i(u)-ln*.5);for(let u of zu)s(Pt.x0,u-F0/2,Pt.x1,u+F0/2)}else if(e==="fixed"){s(Pt.xc-ln/2,Pt.spring+.06,Pt.xc+ln/2,Pt.top-ln*.5);for(let u of nh)s(u-F0/2,Pt.spring+.06,u+F0/2,i(u)-ln*.5)}else{let u=e==="left"?Pt.x0+ln:Pt.x1-ln;s(Math.min(u,u+(e==="left"?ln*.8:-ln*.8)),.05,Math.max(u,u+(e==="left"?ln*.8:-ln*.8)),d),s(c,.05,h,Xi),s(c,d-.07,h,d);let v=e==="left"?Pt.xc-ln/2:Pt.xc;s(v,.05,v+ln/2,d);for(let l of nh)f(l)&&s(l-F0/2,Xi,l+F0/2,d-.07);for(let l of zu)s(c,l-F0/2,h,l+F0/2)}for(let u of[-1,1]){let v=Pt.xc+u*.16;f(v)&&(Lr(t,v-.02,1.05,a,v+.02,1.13,a+.06,ml),Lr(t,v-(u>0?0:.14),1.07,a+.05,v+(u>0?.14:0),1.11,a+.08,ml))}}function u6(t){t=t||"all";let e=[],o=0,{x0:r,x1:n,xc:a,r:s,spring:i}=Pt;if(t!=="fixed"){let h=t==="right"?a:r,f=t==="left"?a:n;if(e.push([h,0,o],[f,0,o],[f,i,o],[h,0,o],[f,i,o],[h,i,o]),t!=="all")return e}let c=48;for(let h=0;h<c;h++){let f=Math.PI*h/c,d=Math.PI*(h+1)/c;e.push([a,i,o],[a+s*Math.cos(f),i+s*Math.sin(f),o],[a+s*Math.cos(d),i+s*Math.sin(d),o])}return e}var Wo=t=>t.toFixed(4);function d6(){let t=nh.map(r=>`vb = max(vb, barCover(abs(q.x - ${Wo(r)}), ${Wo(F0/2)}, soft));`).join(`
		`),e=zu.map(r=>`hb = max(hb, barCover(abs(q.y - ${Wo(r)}), ${Wo(F0/2)}, soft));`).join(`
		`),o=Km.map(r=>`ab = max(ab, barCover(abs(rr - ${Wo(r)}), ${Wo(F0/2)}, soft));`).join(`
		`);return`
	float barCover(float d, float hw, float soft) {
		return 1.0 - smoothstep(hw - soft, hw + soft, d);
	}

	// how open the doorway is at a point (x, y) on a plane, 0..1
	float doorOpen(vec2 q, float soft) {
		float side = smoothstep(${Wo(Pt.x0)} - soft, ${Wo(Pt.x0)} + soft, q.x)
		           * (1.0 - smoothstep(${Wo(Pt.x1)} - soft, ${Wo(Pt.x1)} + soft, q.x));
		float above = smoothstep(-soft, soft, q.y);
		float rr = length(q - vec2(${Wo(Pt.xc)}, ${Wo(Pt.spring)}));
		float arch = q.y < ${Wo(Pt.spring)} ? 1.0 : 1.0 - smoothstep(${Wo(Pt.r)} - soft, ${Wo(Pt.r)} + soft, rr);
		return side * above * arch;
	}

	// light that reaches floor point p through the door, 0..1
	float doorLight(vec3 p, vec3 toLight) {
		if (p.z < 0.3 || toLight.z > -0.01) return 0.0;
		// through the inner face of the wall
		float tIn = (${Wo(.35)} - p.z) / toLight.z;
		float tMid = (0.0 - p.z) / toLight.z;
		float tOut = (${Wo(-.35)} - p.z) / toLight.z;
		vec2 qIn = (p + toLight * tIn).xy;
		vec2 q = (p + toLight * tMid).xy;
		vec2 qOut = (p + toLight * tOut).xy;
		float dist = length(toLight * tMid);
		float soft = 0.006 + 0.016 * dist;
		float open = doorOpen(qIn, soft) * doorOpen(qOut, soft);
		if (open <= 0.0) return 0.0;

		// the frame: outer jambs, arched head, transom, rails, stiles, bars
		float rr = length(q - vec2(${Wo(Pt.xc)}, ${Wo(Pt.spring)}));
		float vb = barCover(abs(q.x - ${Wo(Pt.xc)}), ${Wo(ln/2)}, soft);
		${t}
		float hb = barCover(abs(q.y - ${Wo(Pt.spring)}), 0.06, soft);
		hb = max(hb, 1.0 - smoothstep(${Wo(Xi)} - soft, ${Wo(Xi)} + soft, q.y));
		float hRows = 0.0;
		{
			float hb2 = 0.0;
			${e.replace(/hb = max\(hb,/g,"hb2 = max(hb2,")}
			hRows = q.y < ${Wo(Pt.spring)} ? hb2 : 0.0;
		}
		float ab = 0.0;
		${o}
		ab = q.y > ${Wo(Pt.spring)} ? ab : 0.0;
		float frame = max(
			barCover(abs(q.x - ${Wo(Pt.x0+ln/2)}), ${Wo(ln/2)}, soft),
			barCover(abs(q.x - ${Wo(Pt.x1-ln/2)}), ${Wo(ln/2)}, soft));
		frame = q.y < ${Wo(Pt.spring)} ? frame : barCover(abs(rr - ${Wo(Pt.r-ln/2)}), ${Wo(ln/2)}, soft);
		float cover = max(max(max(vb, hb), max(hRows, ab)), frame);
		return open * (1.0 - cover * 0.92);
	}`}Zm.exports={addEntranceWall:f6,addSurround:Qm,addFrames:h6,glassPanes:u6,doorLightGLSL:d6,DOOR:Pt,WALL:.35}});var Qi=At((R7,r2)=>{"use strict";var Us=1.1583333333333334,Bs=(13.05-8*.16)/9,Tu=Us+.16,Lu=Bs+.16,za=14/2-7.75/2,ur=15,gl=za+7.75,Ea=ur+13.05,dr=.3,Aa={y:8+.18,inset:.15},Hs={y:8+.36,inset:dr},Nu=8+.2,xl=8+.62,Ru=8+.9,Ou=.016,o2=.28,n2=.66,p6=(()=>{let t=[-.15,1,.3],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>o/e)})(),v6=(()=>{let t=[.42,1,-.32],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>o/e)})(),m6=[9,0,0],g0=[10,0,0];function Ki(t,e,o,r,n,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),h=t.vert(r,a,s),f=t.vert(n,a,s);t.tri(i,c,h),t.tri(i,h,f)}function G0(t,e,o,r,n,a,s){Ki(t,[e,a,o],[r,a,o],[r,a,n],[e,a,n],[0,-1,0],s)}function Au(t,e,o,r,n,a,s,i){Ki(t,[e,a,o],[r,a,o],[r,s,o],[e,s,o],[0,0,1],i),Ki(t,[r,a,n],[e,a,n],[e,s,n],[r,s,n],[0,0,-1],i),Ki(t,[e,a,n],[e,a,o],[e,s,o],[e,s,n],[1,0,0],i),Ki(t,[r,a,o],[r,a,n],[r,s,n],[r,s,o],[-1,0,0],i)}function Jm(t,e,o,r,n){G0(t,e[0],e[1],e[2],o[1],r,n),G0(t,e[0],o[3],e[2],e[3],r,n),G0(t,e[0],o[1],o[0],o[3],r,n),G0(t,o[2],o[1],e[2],o[3],r,n)}var t2=t=>za+t*Tu,e2=t=>ur+t*Lu;function g6(t,e,o=48){let r=[za-dr,ur-dr,gl+dr,Ea+dr],n=(h,f)=>[h[0]+f,h[1]+f,h[2]-f,h[3]-f],a=n(r,Aa.inset),s=n(r,Hs.inset);G0(t,0,0,14,r[1],8,e),G0(t,0,r[3],14,o,8,e),G0(t,0,r[1],r[0],r[3],8,e),G0(t,r[2],r[1],14,r[3],8,e);let i=.06,c=.06;t.box(r[0]-i,8-c,r[1]-i,r[2]+i,8,r[1],g0),t.box(r[0]-i,8-c,r[3],r[2]+i,8,r[3]+i,g0),t.box(r[0]-i,8-c,r[1],r[0],8,r[3],g0),t.box(r[2],8-c,r[1],r[2]+i,8,r[3],g0),Au(t,...r.slice(0,2),...r.slice(2),8,Aa.y,g0),Jm(t,r,a,Aa.y,g0),Au(t,...a.slice(0,2),...a.slice(2),Aa.y,Hs.y,g0),Jm(t,a,s,Hs.y,g0);for(let h=1;h<6;h++){let f=t2(h)-.16;t.box(f,Nu,ur,f+.16,Hs.y,Ea,g0)}for(let h=1;h<9;h++){let f=e2(h)-.16;t.box(za,Nu,f,gl,Hs.y,f+.16,g0)}for(let h=0;h<9;h++)for(let f=0;f<6;f++){let d=t2(f),u=e2(h);Au(t,d,u,d+Us,u+Bs,Hs.y,Ru,g0),G0(t,d,u,d+Us,u+Bs,Ru,m6),x6(t,d+Us/2,u+Bs/2,Us/2,Bs/2)}}function x6(t,e,o,r,n){let a=xl,s=Ou;G0(t,e-r,o-s,e+r,o+s,a,g0),G0(t,e-s,o-n,e+s,o+n,a,g0);for(let i of[1,-1]){let c=Math.hypot(r,n),h=r/c,f=i*n/c,d=-f*s,u=h*s;Ki(t,[e-h*c+d,a,o-f*c+u],[e+h*c+d,a,o+f*c+u],[e+h*c-d,a,o+f*c-u],[e-h*c-d,a,o-f*c-u],[0,-1,0],g0)}for(let i of[o2,n2]){let c=i*r,h=i*n;G0(t,e-c-s,o-h-s,e+c+s,o-h+s,a,g0),G0(t,e-c-s,o+h-s,e+c+s,o+h+s,a,g0),G0(t,e-c-s,o-h+s,e-c+s,o+h-s,a,g0),G0(t,e+c-s,o-h+s,e+c+s,o+h-s,a,g0)}}var so=t=>t.toFixed(4);function y6(){return`
	// by day the sun, high and a little towards the entrance; by night
	// the moon, lower and from the other side, so its squares of light
	// reach across the floor to the foot of the wall. (When the light is
	// switched, the squares slide from one to the other.)
	const vec3 SKY_SUN_DAY = vec3(${p6.map(so).join(", ")});
	const vec3 SKY_MOON = vec3(${v6.map(so).join(", ")});
	vec3 skySun() { return normalize(mix(SKY_SUN_DAY, SKY_MOON, night)); }
	#define SKY_SUN skySun()

	float rectOpen(vec2 q, vec4 r, float soft) {
		vec2 lo = smoothstep(r.xy - soft, r.xy + soft, q);
		vec2 hi = 1.0 - smoothstep(r.zw - soft, r.zw + soft, q);
		return lo.x * lo.y * hi.x * hi.y;
	}

	// inside a pane (not on a beam)? 0..1
	float paneOpen(vec2 q, float soft) {
		vec2 rel = q - vec2(${so(za)}, ${so(ur)});
		vec2 pitch = vec2(${so(Tu)}, ${so(Lu)});
		vec2 cell = floor(rel / pitch);
		if (cell.x < 0.0 || cell.y < 0.0 || cell.x > ${so(5)} || cell.y > ${so(8)}) return 0.0;
		vec2 loc = rel - cell * pitch;
		return rectOpen(loc, vec4(0.0, 0.0, ${so(Us)}, ${so(Bs)}), soft);
	}

	float barCov(float d, float soft) {
		return 1.0 - smoothstep(${so(Ou)} - soft, ${so(Ou)} + soft, d);
	}

	// sunlight reaching point p through the skylight, 0..1
	float skylightAt(vec3 p) {
		if (p.y > ${so(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q0 = (p + L * ((${so(8)} - p.y) / L.y)).xz;
		vec2 q1 = (p + L * ((${so(Aa.y)} - p.y) / L.y)).xz;
		vec2 qb = (p + L * ((${so(Nu)} - p.y) / L.y)).xz;
		vec2 q2 = (p + L * ((${so(Hs.y)} - p.y) / L.y)).xz;
		float tG = (${so(xl)} - p.y) / L.y;
		vec2 qg = (p + L * tG).xz;
		vec2 qt = (p + L * ((${so(Ru)} - p.y) / L.y)).xz;
		float soft = 0.004 + 0.007 * tG;
		float open = rectOpen(q0, vec4(${so(za-dr)}, ${so(ur-dr)}, ${so(gl+dr)}, ${so(Ea+dr)}), soft)
		           * rectOpen(q1, vec4(${so(za-dr+Aa.inset)}, ${so(ur-dr+Aa.inset)}, ${so(gl+dr-Aa.inset)}, ${so(Ea+dr-Aa.inset)}), soft)
		           * paneOpen(qb, soft) * paneOpen(q2, soft) * paneOpen(qt, soft);
		if (open <= 0.0) return 0.0;
		// the glazing, measured from the centre of this pane
		vec2 rel = qg - vec2(${so(za)}, ${so(ur)});
		vec2 pitch = vec2(${so(Tu)}, ${so(Lu)});
		vec2 paneHalf = vec2(${so(Us/2)}, ${so(Bs/2)});
		vec2 c = rel - floor(rel / pitch) * pitch - paneHalf;
		vec2 ac = abs(c);
		vec2 an = ac / paneHalf;                       // 0 at the centre, 1 at the pane's edge
		float hm = min(paneHalf.x, paneHalf.y);
		float ring = max(an.x, an.y);
		float cover = max(barCov(ac.x, soft), barCov(ac.y, soft));
		cover = max(cover, barCov(abs(an.x - an.y) * hm * 0.7071, soft));
		cover = max(cover, barCov(abs(ring - ${so(o2)}) * hm, soft));
		cover = max(cover, barCov(abs(ring - ${so(n2)}) * hm, soft));
		return open * (1.0 - cover * 0.9);
	}

	// the same light for the beams in the air: the whole opening glows a
	// little, and the panes and bars show in it, softly
	float skylightVol(vec3 p) {
		if (p.y > ${so(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q = (p + L * ((${so(xl)} - p.y) / L.y)).xz;
		float open = rectOpen(q, vec4(${so(za)}, ${so(ur)}, ${so(gl)}, ${so(Ea)}), 0.25);
		if (open <= 0.0) return 0.0;
		return open * (0.13 + 0.87 * skylightAt(p));
	}

	// light thrown back up by the bright squares on the floor: strongest
	// on what stands beside them and faces them (the lower walls, the
	// pillars, the statues, the ceiling above), fading with distance
	float skylightBounce(vec3 p, vec3 n) {
		if (p.x > 14.2 || p.x < -0.4) return 0.0;
		vec3 L = SKY_SUN;
		vec2 c = vec2(${so(14/2)}, ${so((ur+Ea)/2)}) - L.xz * (${so(xl)} / L.y);
		vec2 d = max(abs(p.xz - c) - vec2(${so(7.75/2)}, ${so(13.05/2)}), 0.0);
		float fall = 1.0 / (1.0 + 0.09 * (dot(d, d) + p.y * p.y * 0.6));
		vec3 to = normalize(vec3(c.x, -0.4, c.y) - p);
		return fall * (0.3 + 0.7 * max(dot(n, to), 0.0));
	}

	// a soft daylight glow under the lantern
	float skylightGlow(vec3 p) {
		float z = smoothstep(${so(ur-3)}, ${so(ur+2)}, p.z)
		        * (1.0 - smoothstep(${so(Ea-2)}, ${so(Ea+3)}, p.z));
		float x = 1.0 - 0.35 * smoothstep(${so(7.75/2)}, ${so(14/2)}, abs(p.x - ${so(14/2)}));
		return z * x;
	}`}r2.exports={addSkylight:g6,skylightGLSL:y6,Z_START:ur,Z_END:Ea,GLASS_Y:xl,HEIGHT:8}});var k0=At((O7,l2)=>{"use strict";var Ji=Ya(),Iu=8,fn=.35,le={x0:13.65,x1:38.12,z0:41,z1:47.2,zc:44.1,hallEnd:50.65,spring:5.6,crown:Iu},a2=(le.z1-le.z0)/2,Cu=le.crown-le.spring,$u=(Cu*Cu+a2*a2)/(2*Cu),qu=le.crown-$u;function Zi(t){let e=t-le.zc;return qu+Math.sqrt(Math.max(0,$u*$u-e*e))}var Ke={first:17.43,pitch:4.4,count:5,halfW:1.2,sill:.75,spring:4.3},Wr=Array.from({length:Ke.count},(t,e)=>Ke.first+e*Ke.pitch),i2=Wr.slice(1).map(t=>t-Ke.pitch/2),b6=[Wr[0],Wr[2],Wr[4]],sh=[Wr[1],Wr[3]],J0={r:1.3,sill:.62,spring:3.3},Ko=[0,0,0],yl=[11,0,0],Ka=[10,0,0],bl=[8,0,0];function s0(t,e,o,r,n,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),h=t.vert(r,a,s),f=t.vert(n,a,s);t.tri(i,c,h),t.tri(i,h,f)}function tr(t,e,o,r,n,a,s,i){t.box(Math.min(e,n),Math.min(o,a),Math.min(r,s),Math.max(e,n),Math.max(o,a),Math.max(r,s),i)}function wl(t,e){let{u0:o,u1:r,w0:n,w1:a,top:s,holes:i,mat:c}=e,h=new Set([o,r]);for(let p of i){h.add(p.u0),h.add(p.u1);let m=Math.max(8,Math.ceil((p.u1-p.u0)/(p.step||.08)));for(let g=1;g<m;g++)h.add(p.u0+(p.u1-p.u0)*g/m)}for(let p of e.cuts||[])h.add(p);let f=e.topStep||.5;for(let p=o;p<r;p+=f)h.add(p);let d=[...h].filter(p=>p>=o-1e-9&&p<=r+1e-9).sort((p,m)=>p-m),u=(p,m)=>p.bot?p.bot(m):p.bottom,v=(p,m)=>{let g=s(p),x=m.map(_=>[Math.max(0,u(_,p)),Math.min(_.head(p),g)]).filter(_=>_[1]>_[0]).sort((_,M)=>_[0]-M[0]),y=[],w=0;for(let _ of x)_[0]>w+1e-6&&y.push([w,_[0]]),w=Math.max(w,_[1]);return g>w+1e-6&&y.push([w,g]),y},l=(p,m,g)=>[p,m,g];for(let p=0;p<d.length-1;p++){let m=d[p],g=d[p+1],x=(m+g)/2,y=i.filter(A=>x>A.u0&&x<A.u1),w=y.length?Math.max(m,Math.max(...y.map(A=>A.u0))+1e-7):m,_=y.length?Math.min(g,Math.min(...y.map(A=>A.u1))-1e-7):g,M=v(w,y),k=v(_,y),R=Math.min(M.length,k.length);for(let A=0;A<R;A++){let[F,C]=M[A],[H,I]=k[A];C-F<1e-6&&I-H<1e-6||(s0(t,l(m,F,a),l(g,H,a),l(g,I,a),l(m,C,a),[0,0,1],c),e.frontOnly||s0(t,l(g,H,n),l(m,F,n),l(m,C,n),l(g,I,n),[0,0,-1],c))}}e.noEnds||(s0(t,l(o,0,n),l(o,0,a),l(o,s(o),a),l(o,s(o),n),[-1,0,0],c),s0(t,l(r,0,a),l(r,0,n),l(r,s(r),n),l(r,s(r),a),[1,0,0],c));for(let p of i){if(p.noReveal)continue;let m=p.mat||e.revealMat||c,g=Math.max(0,u(p,p.u0+1e-7)),x=Math.max(0,u(p,p.u1-1e-7)),y=Math.min(p.head(p.u0+1e-7),s(p.u0)),w=Math.min(p.head(p.u1-1e-7),s(p.u1));y>g+1e-6&&s0(t,l(p.u0,g,a),l(p.u0,g,n),l(p.u0,y,n),l(p.u0,y,a),[1,0,0],m),w>x+1e-6&&s0(t,l(p.u1,x,n),l(p.u1,x,a),l(p.u1,w,a),l(p.u1,w,n),[-1,0,0],m);let _=Math.max(8,Math.ceil((p.u1-p.u0)/(p.step||.06)));for(let M=0;M<_;M++){let k=p.u0+(p.u1-p.u0)*M/_,R=p.u0+(p.u1-p.u0)*(M+1)/_,A=Math.max(k,p.u0+1e-7),F=Math.min(R,p.u1-1e-7),C=Math.min(p.head(A),s(k)),H=Math.min(p.head(F),s(R));if(!(C>=s(k)-1e-6&&H>=s(R)-1e-6)){let dt=R-k,$t=H-C,kt=Math.hypot(dt,$t)||1;s0(t,l(k,C,n),l(R,H,n),l(R,H,a),l(k,C,a),[$t/kt,-dt/kt,0],m)}let I=u(p,A),V=u(p,F);if(I>1e-6||V>1e-6){let dt=R-k,$t=V-I,kt=Math.hypot(dt,$t)||1;s0(t,l(R,V,n),l(k,I,n),l(k,I,a),l(R,V,a),[-$t/kt,dt/kt,0],m)}}}}var Pu=(t,e,o)=>r=>{let n=r-t;return o+Math.sqrt(Math.max(0,e*e-n*n))};function w6(t,e){let o=J0.r,r=J0.sill,n=J0.spring,a=le.z0,s=24,i=(v,l,p)=>[e+Math.cos(v)*l,p,a-Math.sin(v)*l];for(let v=0;v<s;v++){let l=Math.PI*v/s,p=Math.PI*(v+1)/s,m=[-Math.cos(l),0,Math.sin(l)],g=[-Math.cos(p),0,Math.sin(p)],x=[t.vert(i(l,o,r),m,Ko),t.vert(i(p,o,r),g,Ko),t.vert(i(p,o,n),g,Ko),t.vert(i(l,o,n),m,Ko)];t.tri(x[0],x[1],x[2]),t.tri(x[0],x[2],x[3])}let c=12,h=(v,l)=>[e+Math.cos(v)*Math.cos(l)*o,n+Math.sin(l)*o,a-Math.sin(v)*Math.cos(l)*o],f=(v,l)=>[-Math.cos(v)*Math.cos(l),-Math.sin(l),Math.sin(v)*Math.cos(l)];for(let v=0;v<s;v++)for(let l=0;l<c;l++){let p=Math.PI*v/s,m=Math.PI*(v+1)/s,g=Math.PI/2*l/c,x=Math.PI/2*(l+1)/c,y=[t.vert(h(p,g),f(p,g),Ka),t.vert(h(m,g),f(m,g),Ka),t.vert(h(m,x),f(m,x),Ka),t.vert(h(p,x),f(p,x),Ka)];t.tri(y[0],y[1],y[2]),t.tri(y[0],y[2],y[3])}for(let v=1;v<8;v++){let l=Math.PI*v/8,p=[];for(let m=0;m<=10;m++){let g=Math.PI/2*m/10*.97;p.push(h(l,g).map((x,y)=>x-f(l,g)[y]*.02))}t.tube(p,m=>.035*(1-m*.6),12,6,{mat:()=>Ka})}let d=t.vert([e,r,a],[0,1,0],Ko);for(let v=0;v<s;v++){let l=Math.PI*v/s,p=Math.PI*(v+1)/s;t.tri(d,t.vert(i(l,o,r),[0,1,0],Ko),t.vert(i(p,o,r),[0,1,0],Ko))}tr(t,e-o-.12,r-.1,a,e+o+.12,r+.02,a+.12,Ko),tr(t,e-o-.16,r-.2,a,e+o+.16,r-.1,a+.07,Ko);let u=.16;for(let v=0;v<s;v++){let l=Math.PI*v/s,p=Math.PI*(v+1)/s,m=(g,x,y)=>[e+Math.cos(g)*x,n+Math.sin(g)*x,y];s0(t,m(l,o,a+.05),m(p,o,a+.05),m(p,o+u,a+.05),m(l,o+u,a+.05),[0,0,1],Ko),s0(t,m(l,o+u,a),m(p,o+u,a),m(p,o+u,a+.05),m(l,o+u,a+.05),[Math.cos((l+p)/2),Math.sin((l+p)/2),0],Ko),s0(t,m(l,o,a),m(p,o,a),m(p,o,a+.05),m(l,o,a+.05),[-Math.cos((l+p)/2),-Math.sin((l+p)/2),0],Ko)}for(let v of[-1,1]){let l=e+v*o,p=e+v*(o+u);tr(t,l,r,a,p,n,a+.05,Ko),tr(t,l-v*.02,n-.12,a,p+v*.06,n,a+.09,Ko)}tr(t,e-.11,n+o-.04,a,e+.11,n+o+u+.1,a+.09,Ko),t.lathe([[.66,r,1],[.66,r+.06,1],[.62,r+.1],[.6,r+.3],[.64,r+.34,1],[.64,r+.4,1],[0,r+.4]],e,a-.62,40,{mat:()=>Ko})}var _6=J0.sill+.4,M6=le.z0-.62;function k6(t){s0(t,[14,0,le.z0-fn],[le.x1+fn,0,le.z0-fn],[le.x1+fn,0,le.z1+fn],[14,0,le.z1+fn],[0,1,0],Ko),t.curMat=yl,wl(t,{u0:14+fn,u1:le.x1+2*fn,w0:le.z0-2*fn,w1:le.z0,top:()=>le.spring,holes:sh.map(h=>({u0:h-J0.r,u1:h+J0.r,bottom:J0.sill,head:Pu(h,J0.r,J0.spring),noReveal:!0})),mat:yl,cuts:[le.x1]});for(let h of sh)w6(t,h);t.save(),t.translate(0,0,le.z1),t.rotateY(Math.PI),t.translate(-(le.x1+2*fn),0,-2*fn);let e=h=>le.x1+2*fn-h;wl(t,{u0:e(le.x1+2*fn),u1:e(13.65),w0:0,w1:2*fn,top:()=>le.spring,holes:Wr.map(h=>({u0:e(h+Ke.halfW),u1:e(h-Ke.halfW),bottom:Ke.sill,head:Pu(e(h),Ke.halfW,Ke.spring)})),mat:yl,revealMat:Ko}),t.restore(),t.save(),t.translate(le.x1,0,0),t.rotateY(-Math.PI/2);let o=Ji.DOOR,r=le.zc,n=o.r;wl(t,{u0:le.z0-2*fn,u1:le.z1+2*fn,w0:-2*fn,w1:0,top:h=>h<le.z0||h>le.z1?le.spring:Zi(h),topStep:.15,holes:[{u0:r-n,u1:r+n,bottom:0,head:Pu(r,n,o.spring)}],mat:yl,revealMat:Ko}),t.restore(),t.save(),t.translate(14+fn,0,0),t.rotateY(-Math.PI/2),wl(t,{u0:le.z0,u1:le.z1,w0:-0,w1:2*fn,top:()=>Iu,topStep:.15,holes:[{u0:le.z0,u1:le.z1,bottom:0,head:h=>Zi(h)}],mat:yl,revealMat:Ko}),t.restore();let a=14+fn,s=Math.ceil((le.x1-a)/1),i=28,c=[];for(let h=0;h<=s;h++){let f=a+(le.x1-a)*h/s,d=[];for(let u=0;u<=i;u++){let v=le.z0+(le.z1-le.z0)*u/i,l=Zi(v),p=[0,qu-l,le.zc-v],m=Math.hypot(p[1],p[2]);d.push(t.vert([f,l,v],[0,p[1]/m,p[2]/m],Ka))}c.push(d)}for(let h=0;h<s;h++)for(let f=0;f<i;f++)t.tri(c[h][f],c[h+1][f],c[h][f+1]),t.tri(c[h+1][f],c[h+1][f+1],c[h][f+1])}function s2(t,e,o,r){let a=[];for(let s=0;s<=32;s++){let i=le.z0+(le.z1-le.z0)*s/32,c=Zi(i),h=qu-c,f=le.zc-i,d=Math.hypot(h,f),u=[c+h/d*r,i+f/d*r];a.push({y:c,z:i,iy:u[0],iz:u[1],n:[0,h/d,f/d]})}for(let s=0;s<32;s++){let i=a[s],c=a[s+1];s0(t,[e-o,i.iy,i.iz],[e+o,i.iy,i.iz],[e+o,c.iy,c.iz],[e-o,c.iy,c.iz],i.n,Ko),s0(t,[e-o,i.y,i.z],[e-o,i.iy,i.iz],[e-o,c.iy,c.iz],[e-o,c.y,c.z],[-1,0,0],Ko),s0(t,[e+o,i.iy,i.iz],[e+o,i.y,i.z],[e+o,c.y,c.z],[e+o,c.iy,c.iz],[1,0,0],Ko)}}function ah(t,e,o,r){let s=o,i=o+r*.16;tr(t,e-.28,0,s,e+.28,le.spring-.3,i,Ko),tr(t,e-.28-.06,0,s,e+.28+.06,.32,o+r*(.16+.05),Ko),tr(t,e-.28-.05,le.spring-.3,s,e+.28+.05,le.spring-.1,o+r*(.16+.05),Ko),tr(t,e-.28-.1,le.spring-.1,s,e+.28+.1,le.spring,o+r*(.16+.1),Ko)}function S6(t,e){let o=Zi(le.zc),r=[[0,o-.13,1],[.05,o-.125],[.12,o-.1],[.16,o-.06,1],[.22,o-.05],[.3,o-.075],[.4,o-.06],[.48,o-.03,1],[.55,o-.035],[.7,o-.025],[.82,o-.012,1],[.95,o+.03]];t.lathe(r,e,le.zc,48,{mat:()=>Ka});for(let n=0;n<8;n++){let a=n*Math.PI/4,s=e+Math.cos(a)*.32,i=le.zc+Math.sin(a)*.32;t.save(),t.translate(s,o-.07,i),t.rotateY(-a),t.curMat=Ka,t.ellipsoid([0,0,0],[.13,.03,.06],6,10),t.restore()}}function E6(t){t.curMat=Ko;for(let[e,o]of[[le.z0,1],[le.z1,-1]])tr(t,14.35,le.spring-.12,e,le.x1,le.spring,e+o*.1,Ko),tr(t,14.35,le.spring-.04,e,le.x1,le.spring+.05,e+o*.18,Ko);for(let[e,o]of[[le.z0,1],[le.z1,-1]])tr(t,14.35,0,e,le.x1,.42,e+o*.12,Ko),tr(t,14.35,.42,e,le.x1,.5,e+o*.07,Ko);for(let e of i2)s2(t,e,.24,.16),ah(t,e,le.z0,1),ah(t,e,le.z1,-1);for(let e of[14.35+.28,le.x1-.28])s2(t,e,.28,.22),ah(t,e,le.z0,1),ah(t,e,le.z1,-1);for(let e of Wr)S6(t,e)}function z6(t){let e=le.z1+fn,o=e-.04,r=e+.04,n=(i,c,h,f)=>tr(t,i,c,o,h,f,r,bl),a=Ke.halfW,s=(i,c,h,f,d,u)=>{let v=(l,p,m)=>[i+p*Math.cos(l),Ke.spring+p*Math.sin(l),m];for(let l=0;l<u;l++){let p=f+(d-f)*l/u,m=f+(d-f)*(l+1)/u;s0(t,v(p,c,o),v(m,c,o),v(m,h,o),v(p,h,o),[0,0,-1],bl),s0(t,v(p,h,r),v(m,h,r),v(m,c,r),v(p,c,r),[0,0,1],bl)}};for(let i of Wr){let c=i-a,h=i+a;n(c,Ke.sill,c+.07,Ke.spring),n(h-.07,Ke.sill,h,Ke.spring),n(c,Ke.sill,h,Ke.sill+.07),n(c,Ke.spring-.04,h,Ke.spring+.04);for(let d of[-.5,0,.5])n(i+d*a-.022,Ke.sill,i+d*a+.022,Ke.spring);let f=6;for(let d=1;d<f;d++){let u=Ke.sill+(Ke.spring-Ke.sill)*d/f;n(c,u-.02,h,u+.02)}s(i,a-.07,a,0,Math.PI,32),s(i,.42,.46,0,Math.PI,20);for(let d=1;d<6;d++){let u=Math.PI*d/6,v=Math.cos(u),l=Math.sin(u),p=.02,m=(g,x)=>[i+v*g-l*p*x,Ke.spring+l*g+v*p*x];s0(t,[...m(.44,-1),o],[...m(a-.05,-1),o],[...m(a-.05,1),o],[...m(.44,1),o],[0,0,-1],bl),s0(t,[...m(.44,1),r],[...m(a-.05,1),r],[...m(a-.05,-1),r],[...m(.44,-1),r],[0,0,1],bl)}}}function A6(){let t=[],e=le.z1+fn;for(let o of Wr){let r=o-Ke.halfW,n=o+Ke.halfW;t.push([r,Ke.sill,e],[n,Ke.sill,e],[n,Ke.spring,e],[r,Ke.sill,e],[n,Ke.spring,e],[r,Ke.spring,e]);for(let a=0;a<24;a++){let s=Math.PI*a/24,i=Math.PI*(a+1)/24;t.push([o,Ke.spring,e],[o+Ke.halfW*Math.cos(s),Ke.spring+Ke.halfW*Math.sin(s),e],[o+Ke.halfW*Math.cos(i),Ke.spring+Ke.halfW*Math.sin(i),e])}}return t}function c2(t,e){t.save(),t.translate(le.x1+fn,0,le.zc-7),t.rotateY(-Math.PI/2),e(),t.restore()}function T6(t){c2(t,()=>{Ji.addSurround(t),Ji.addFrames(t,"fixed")})}function L6(t){return Ji.glassPanes(t||"fixed").map(([o,r,n])=>[le.x1+fn-n,r,le.zc-7+o])}function N6(t){k6(t),E6(t),z6(t),T6(t),t.curMat=[0,0,0]}var R6={x:le.x1+fn,zLo:le.zc-Ji.DOOR.r,zHi:le.zc+Ji.DOOR.r},Oo=t=>t.toFixed(4);function O6(){return`
	// by day soft light from the sky over the garden, straight in; by
	// night the moon, standing off to one side, so the window shapes
	// fall slanted across the corridor floor
	const vec3 WIN_SKY_DAY = vec3(0.0, 0.58, 0.81);
	const vec3 WIN_MOON = vec3(0.36, 0.50, 0.79);
	vec3 winSky() { return normalize(mix(WIN_SKY_DAY, WIN_MOON, night)); }
	#define WIN_SKY winSky()

	float winBar(float d, float hw, float soft) {
		return 1.0 - smoothstep(hw - soft, hw + soft, d);
	}

	// how open the window wall is at (x, y) on its plane, 0..1
	float winOpen(vec2 q, float soft) {
		float k = floor((q.x - ${Oo(Ke.first)}) / ${Oo(Ke.pitch)} + 0.5);
		if (k < 0.0 || k > ${Oo(Ke.count-1)}) return 0.0;
		float dx = q.x - (${Oo(Ke.first)} + k * ${Oo(Ke.pitch)});
		float side = 1.0 - smoothstep(${Oo(Ke.halfW)} - soft, ${Oo(Ke.halfW)} + soft, abs(dx));
		float sill = smoothstep(${Oo(Ke.sill)} - soft, ${Oo(Ke.sill)} + soft, q.y);
		float r = length(vec2(dx, q.y - ${Oo(Ke.spring)}));
		float head = q.y < ${Oo(Ke.spring)} ? 1.0 : 1.0 - smoothstep(${Oo(Ke.halfW)} - soft, ${Oo(Ke.halfW)} + soft, r);
		float open = side * sill * head;
		// the black glazing bars, softly
		float cover = 0.0;
		cover = max(cover, winBar(abs(dx), 0.022, soft));
		cover = max(cover, winBar(abs(abs(dx) - ${Oo(Ke.halfW*.5)}), 0.022, soft));
		float rowH = ${Oo((Ke.spring-Ke.sill)/6)};
		float ry = (q.y - ${Oo(Ke.sill)}) / rowH;
		cover = max(cover, q.y < ${Oo(Ke.spring)} ? winBar(abs(fract(ry + 0.5) - 0.5) * rowH, 0.02, soft) : 0.0);
		cover = max(cover, q.y > ${Oo(Ke.spring)} ? winBar(abs(r - 0.44), 0.02, soft) : 0.0);
		return open * (1.0 - cover * 0.75);
	}

	// daylight reaching point p from the windows
	float windowLight(vec3 p, vec3 n) {
		if (p.x < ${Oo(le.x0)} || p.z < ${Oo(le.z0-.1)} || p.z > ${Oo(le.z1)}) return 0.0;
		float ndl = max(dot(n, WIN_SKY), 0.0);
		if (ndl <= 0.0) return 0.0;
		float tIn = (${Oo(le.z1)} - p.z) / WIN_SKY.z;
		float tOut = (${Oo(le.z1+2*fn)} - p.z) / WIN_SKY.z;
		vec3 a = p + WIN_SKY * tIn;
		vec3 b = p + WIN_SKY * tOut;
		float soft = 0.03 + 0.05 * tIn;
		float open = winOpen(vec2(a.x, a.y), soft) * winOpen(vec2(b.x, b.y), soft);
		return open * ndl;
	}

	// a small hidden lamp in the crown of each niche, lighting the
	// statue and the curved back from above and slightly in front
	vec3 nicheLamp(vec3 p) {
		float best = 1e3;
		vec3 lamp = vec3(0.0);
		${sh.map(t=>`{ float d = abs(p.x - ${Oo(t)}); if (d < best) { best = d; lamp = vec3(${Oo(t)}, ${Oo(J0.spring+.55)}, ${Oo(le.z0-.15)}); } }`).join(`
		`)}
		return lamp;
	}

	float nicheLight(vec3 p, vec3 n) {
		if (p.z > ${Oo(le.z0+1.6)} || p.z < ${Oo(le.z0-J0.r-.1)} || p.x < ${Oo(le.x0)}) return 0.0;
		vec3 lamp = nicheLamp(p);
		vec3 d = lamp - p;
		float dist = length(d);
		vec3 L = d / dist;
		// a cone pointing down into the niche
		float cone = smoothstep(0.35, 0.75, dot(-L, normalize(vec3(0.0, -1.0, 0.35))));
		float inside = 1.0 - smoothstep(${Oo(J0.r)}, ${Oo(J0.r+.5)}, abs(p.x - lamp.x));
		return max(dot(n, L), 0.0) * cone * inside / (1.0 + 0.35 * dist * dist);
	}

	// soft general daylight in the corridor, strongest near the glass
	float corridorGlow(vec3 p) {
		if (p.x < ${Oo(le.x0-1)}) return 0.0;
		float inC = smoothstep(${Oo(le.z0-1.5)}, ${Oo(le.z0)}, p.z) * smoothstep(${Oo(le.x0-1)}, ${Oo(le.x0+1)}, p.x);
		float near = 0.55 + 0.45 * smoothstep(${Oo(le.z0)}, ${Oo(le.z1)}, p.z);
		return inC * near;
	}`}l2.exports={wallWithHoles:wl,windowLightGLSL:O6,addWing:N6,windowGlass:A6,farDoorGlass:L6,atFarDoor:c2,FAR_DOOR:R6,vaultY:Zi,C:le,NICHE_X:sh,NICHE:J0,NICHE_PLINTH_TOP:_6,NICHE_STATUE_Z:M6,WIN:Ke,winCentres:Wr,piers:i2,PAINTING_X:b6,HEIGHT:Iu}});var Nr=At((C7,u2)=>{"use strict";var Du=k0(),an=8,oc=.35,js=14,ec=4,ke={x0:js+oc,x1:js+oc+2*ec,z0:5.9-ec,z1:5.9+ec,zc:5.9,cx:js+oc+ec,arch:{r:2.6,spring:4.4},dome:{r:3.3,base:an},oculus:3.3};ke.domeTop=ke.dome.base+ke.dome.r;var nc={spokes:16,ringE:[.42,.95],bar:.035},Yn={sxz:1.32,sy:1.6,yaw:.6};Yn.crownC=[ke.cx,.4+3.4*Yn.sy,ke.zc];Yn.crownR=[2.3*Yn.sxz,1.9*Yn.sy,2.3*Yn.sxz];Yn.trunkR=.26*Yn.sxz;Yn.trunkTop=.4+2.2*Yn.sy;var f2={inner:1.05,outer:1.62,seat:.48,soil:.4},lh=(()=>{let t=[.2,1,-.15],e=Math.hypot(...t);return t.map(o=>o/e)})(),i0=[0,0,0],tc=[11,0,0],ih=[10,0,0],ch=[9,0,0],C6=[5,0,0],Fu=[3,0,0];function Ta(t,e,o,r,n,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),h=t.vert(r,a,s),f=t.vert(n,a,s);t.tri(i,c,h),t.tri(i,h,f)}function H0(t,e,o,r,n,a,s,i){t.box(Math.min(e,n),Math.min(o,a),Math.min(r,s),Math.max(e,n),Math.max(o,a),Math.max(r,s),i)}var P6=(t,e,o)=>r=>{let n=r-t;return o+Math.sqrt(Math.max(0,e*e-n*n))};function $6(t){t.save(),t.translate(js+oc,0,0),t.rotateY(-Math.PI/2),Du.wallWithHoles(t,{u0:0,u1:Du.C.z0,w0:0,w1:2*oc,top:()=>an,holes:[{u0:ke.zc-ke.arch.r,u1:ke.zc+ke.arch.r,bottom:0,head:P6(ke.zc,ke.arch.r,ke.arch.spring),step:.05}],mat:tc,revealMat:i0,topStep:1}),t.restore();let e=js-oc;for(let[s,i]of[[0,ke.zc-ke.arch.r],[ke.zc+ke.arch.r,Du.C.z0]])H0(t,e-.12,0,s,e,.42,i,i0),H0(t,e-.07,.42,s,e,.5,i,i0);let o=e,r=.24,n=40,a=(s,i,c)=>[c,ke.arch.spring+Math.sin(s)*i,ke.zc+Math.cos(s)*i];for(let s=0;s<n;s++){let i=Math.PI*s/n,c=Math.PI*(s+1)/n;Ta(t,a(i,ke.arch.r,o-.07),a(c,ke.arch.r,o-.07),a(c,ke.arch.r+r,o-.07),a(i,ke.arch.r+r,o-.07),[-1,0,0],i0),Ta(t,a(i,ke.arch.r+r,o),a(c,ke.arch.r+r,o),a(c,ke.arch.r+r,o-.07),a(i,ke.arch.r+r,o-.07),[0,Math.sin((i+c)/2),Math.cos((i+c)/2)],i0),Ta(t,a(i,ke.arch.r,o),a(c,ke.arch.r,o),a(c,ke.arch.r,o-.07),a(i,ke.arch.r,o-.07),[0,-Math.sin((i+c)/2),-Math.cos((i+c)/2)],i0)}H0(t,o-.12,ke.arch.spring+ke.arch.r-.06,ke.zc-.17,o,ke.arch.spring+ke.arch.r+r+.16,ke.zc+.17,i0);for(let s of[-1,1]){let i=ke.zc+s*ke.arch.r,c=ke.zc+s*(ke.arch.r+r);H0(t,o-.07,0,i,o,ke.arch.spring,c,i0),H0(t,o-.13,ke.arch.spring-.16,i-s*.03,o,ke.arch.spring,c+s*.08,i0),H0(t,o-.12,0,i-s*.03,o,.5,c+s*.06,i0)}}function I6(t){let{x0:e,x1:o,z0:r,z1:n}=ke;Ta(t,[js,0,r],[o,0,r],[o,0,n],[js,0,n],[0,1,0],i0),t.curMat=tc,Ta(t,[o,0,r],[o,0,n],[o,an,n],[o,an,r],[-1,0,0],tc),Ta(t,[e,0,r],[o,0,r],[o,an,r],[e,an,r],[0,0,1],tc),Ta(t,[o,0,n],[e,0,n],[e,an,n],[o,an,n],[0,0,-1],tc),Ta(t,[e,0,n],[e,0,r],[e,an,r],[e,an,n],[1,0,0],tc),H0(t,o-.12,0,r,o,.42,n,i0),H0(t,e,0,r,o,.42,r+.12,i0),H0(t,e,0,n-.12,o,.42,n,i0),H0(t,o-.2,an-.3,r,o,an,n,i0),H0(t,e,an-.3,r,o,an,r+.2,i0),H0(t,e,an-.3,n-.2,o,an,n,i0),H0(t,e,an-.3,r,e+.2,an,n,i0);let a=ke.dome.r,s=48,i=[];for(let g=0;g<=s;g++){let x=Math.PI*2*g/s;i.push([ke.cx+Math.cos(x)*a,ke.zc+Math.sin(x)*a])}let c=g=>{let x=Math.abs(Math.cos(g)),y=Math.abs(Math.sin(g));return Math.min(ec/Math.max(x,1e-6),ec/Math.max(y,1e-6))};for(let g=0;g<s;g++){let x=Math.PI*2*g/s,y=Math.PI*2*(g+1)/s,w=c(x),_=c(y),M=[ke.cx+Math.cos(x)*w,an,ke.zc+Math.sin(x)*w],k=[ke.cx+Math.cos(y)*_,an,ke.zc+Math.sin(y)*_];Ta(t,[i[g][0],an,i[g][1]],[i[g+1][0],an,i[g+1][1]],k,M,[0,-1,0],ih)}t.lathe([[a+.02,an-.18,1],[a-.12,an-.18,1],[a-.12,an-.06,1],[a-.05,an,1],[a,an+.02]],ke.cx,ke.zc,s,{mat:()=>i0});let h=16,f=(g,x,y)=>[ke.cx+Math.cos(g)*Math.cos(x)*y,ke.dome.base+Math.sin(x)*y,ke.zc+Math.sin(g)*Math.cos(x)*y],d=Math.PI/2;for(let g=0;g<s;g++)for(let x=0;x<h;x++){let y=Math.PI*2*g/s,w=Math.PI*2*(g+1)/s,_=d*x/h,M=d*(x+1)/h,k=(A,F)=>[-Math.cos(A)*Math.cos(F),-Math.sin(F),-Math.sin(A)*Math.cos(F)],R=[t.vert(f(y,_,a),k(y,_),ch),t.vert(f(w,_,a),k(w,_),ch),t.vert(f(w,M,a),k(w,M),ch),t.vert(f(y,M,a),k(y,M),ch)];t.tri(R[0],R[1],R[2]),t.tri(R[0],R[2],R[3])}for(let g=0;g<nc.spokes;g++){let x=Math.PI*2*g/nc.spokes,y=[];for(let w=0;w<=14;w++)y.push(f(x,(d-.06)*w/14,a-.04));t.tube(y,()=>.04,20,6,{mat:()=>ih})}for(let g of nc.ringE){let x=Math.cos(g)*(a-.04),y=ke.dome.base+Math.sin(g)*(a-.04),w=[];for(let _=0;_<=72;_++){let M=Math.PI*2*_/72;w.push([ke.cx+Math.cos(M)*x,y,ke.zc+Math.sin(M)*x])}t.tube(w,()=>.035,72,6,{mat:()=>ih})}t.ellipsoid([ke.cx,ke.dome.base+a-.06,ke.zc],[.16,.08,.16],6,12,{mat:()=>ih});let u=.46,v=.55,l=.12,p=(g,x,y,w)=>{H0(t,g,u-.08,x,y,u,w,Fu);let _=y-g>w-x?[g+.25,y-.25]:[g+.06,y-.06],M=y-g>w-x?[x+.06,w-.06]:[x+.25,w-.25];H0(t,_[0],0,M[0],_[1],u-.08,M[1],Fu)};p(o-l-v,r+1.1,o-l,n-1.1),p(e+1,r+l,o-1.1,r+l+v),p(e+1,n-l-v,o-1.1,n-l);let m=f2;t.lathe([[m.outer,0,1],[m.outer,m.seat-.1,1],[m.outer+.07,m.seat-.07,1],[m.outer+.07,m.seat,1],[m.inner-.05,m.seat,1],[m.inner-.05,m.seat-.06,1],[m.inner,m.seat-.08,1],[m.inner,m.soil]],ke.cx,ke.zc,64,{mat:()=>Fu}),t.lathe([[m.inner,m.soil,1],[0,m.soil+.03]],ke.cx,ke.zc,48,{mat:()=>C6})}function q6(t){$6(t),I6(t),t.curMat=[0,0,0]}var Qo=t=>t.toFixed(4);function h2(){let t=ke.dome.r,e=nc.ringE.map(o=>Math.cos(o)*t);return`
	const vec3 SHAFT = vec3(${Qo(lh[0])}, ${Qo(lh[1])}, ${Qo(lh[2])});

	// how much sun the glass dome lets through towards p (0..1): the round
	// opening, less the soft shadows of its ribs and rings (worked out on
	// the dome's base, where the frame is seen almost straight on)
	float oculusOpen(vec3 p) {
		float t = (${Qo(ke.dome.base+.6)} - p.y) / SHAFT.y;
		vec3 q = p + SHAFT * t;
		vec2 d2 = q.xz - vec2(${Qo(ke.cx)}, ${Qo(ke.zc)});
		float d = length(d2);
		float soft = 0.02 + 0.012 * t;
		float open = 1.0 - smoothstep(${Qo(t-.15)} - soft, ${Qo(t-.15)} + soft, d);
		float hw = ${Qo(nc.bar)};
		float cover = 0.0;
		${e.map(o=>`cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, abs(d - ${Qo(o)})));`).join(`
		`)}
		float ang = atan(d2.y, d2.x);
		float stp = ${Qo(Math.PI*2/nc.spokes)};
		float da = abs(mod(ang + stp * 0.5, stp) - stp * 0.5);
		cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, d * sin(da)));
		cover = max(cover, 1.0 - smoothstep(0.16 - soft, 0.16 + soft, d));
		return open * (1.0 - cover * 0.85);
	}

	// the tree's own shade: its crown lets dappled light through, its
	// trunk blocks it
	float treeShade(vec3 p) {
		vec3 c = vec3(${Qo(Yn.crownC[0])}, ${Qo(Yn.crownC[1])}, ${Qo(Yn.crownC[2])});
		vec3 r = vec3(${Qo(Yn.crownR[0])}, ${Qo(Yn.crownR[1])}, ${Qo(Yn.crownR[2])});
		vec3 oc = (p - c) / r, dd = SHAFT / r;
		float a = dot(dd, dd), b = dot(oc, dd), cc = dot(oc, oc) - 1.0;
		float disc = b * b - a * cc;
		float tr = 1.0;
		if (disc > 0.0) {
			float sq = sqrt(disc);
			float t0 = max(0.0, (-b - sq) / a), t1 = (-b + sq) / a;
			float len = max(0.0, t1 - t0);
			if (len > 0.0) {
				vec3 m = p + SHAFT * (t0 + t1) * 0.5;
				float gaps = sin(m.x * 4.1 + m.y * 1.3) * sin(m.z * 3.7 - m.y * 2.1) * sin(m.x * 2.3 + m.z * 2.9);
				gaps = smoothstep(0.15, 0.55, gaps);
				tr = mix(exp(-len * 1.4), 1.0, gaps * exp(-len * 0.35));
			}
		}
		// the trunk, a leaning column near the middle
		float tt = (${Qo(Yn.trunkTop)} - p.y) / SHAFT.y;
		if (tt > 0.0) {
			vec2 o = p.xz - vec2(${Qo(ke.cx)}, ${Qo(ke.zc)});
			vec2 dir = SHAFT.xz;
			float k = clamp(-dot(o, dir) / dot(dir, dir), 0.0, tt);
			float dist = length(o + dir * k);
			tr *= smoothstep(${Qo(Yn.trunkR*.7)}, ${Qo(Yn.trunkR*1.3)}, dist);
		}
		return tr;
	}`}function D6(){return`
	${h2()}

	// sunlight through the oculus reaching p (0..1)
	float alcoveSun(vec3 p, vec3 n) {
		if (p.x < ${Qo(ke.x0-.75)} || p.z < ${Qo(ke.z0-.5)} || p.z > ${Qo(ke.z1+.5)}) return 0.0;
		float ndl = max(dot(n, SHAFT), 0.0);
		if (ndl <= 0.0) return 0.0;
		return ndl * oculusOpen(p) * treeShade(p);
	}

	// soft daylight filling the court, brightest under the dome
	float alcoveGlow(vec3 p) {
		if (p.x < ${Qo(ke.x0-1.5)} || p.z < ${Qo(ke.z0-1.5)} || p.z > ${Qo(ke.z1+1.5)}) return 0.0;
		float inside = smoothstep(${Qo(ke.x0-1.2)}, ${Qo(ke.x0+.6)}, p.x);
		float d = length(p.xz - vec2(${Qo(ke.cx)}, ${Qo(ke.zc)}));
		return inside * (0.55 + 0.45 * smoothstep(0.0, 8.0, p.y)) * (1.0 - 0.35 * smoothstep(1.0, 5.0, d));
	}`}u2.exports={addAlcove:q6,alcoveLightGLSL:D6,oculusGLSL:h2,A:ke,BENCH:f2,SHAFT:lh,TREE:Yn}});var c0=At((P7,p2)=>{"use strict";var Vr=0;try{let t=location.search;/[?&]night\b/.test(t)&&(Vr=1)}catch(t){}var La=Vr,Gu=0,d2=[],fh={tick(t){let e=Gu?Math.min(.1,t-Gu):0;if(Gu=t,La!==Vr){let o=e/2.4;La=Vr>La?Math.min(Vr,La+o):Math.max(Vr,La-o)}return fh.night},get night(){return La*La*(3-2*La)},get isNight(){return Vr===1},get settled(){return La===Vr},set(t){Vr=t?1:0,d2.forEach(e=>e(Vr))},toggle(){fh.set(!Vr)},onChange(t){d2.push(t)}};fh.GLSL=`
uniform float night;
vec3 toNight(vec3 c, float keep) {
	float l = dot(c, vec3(0.299, 0.587, 0.114));
	vec3 n = mix(vec3(l), c, 0.35) * vec3(0.55, 0.70, 1.05) * keep;
	return mix(c, n, night);
}
`;p2.exports=fh});var Za=At(($7,kl)=>{"use strict";var Hu=c0(),{C:Uu}=k0(),{A:hh,BENCH:_l}=Nr(),Kn=Math.PI,F6=[18,29,40],uh=.575,Qa=[],Ml=(t,e,o,r,n,a,s)=>Qa.push(Object.assign({x:t,y:e,z:o,o:r,back:n,hw:a,s:1,k:1,range:7,mount:"wall"},s||{}));F6.forEach(t=>{Ml(1.25+uh+.48,3.25,t,[1,0],.48,uh,{s:1.2}),Ml(12.75-uh-.48,3.25,t,[-1,0],.48,uh,{s:1.2})});[3,11].forEach(t=>Ml(t,3.45,Uu.hallEnd-.5,[0,-1],.5,99,{s:1.2}));var G6=[14.63,19.63,24.03,28.43,32.83,Uu.x1-.28];G6.forEach(t=>Ml(t,3.15,Uu.z0+.16+.44,[0,1],.44,.28));[3,8.8].forEach(t=>Ml(.35+.44,2.75,t,[1,0],.44,99));{let t=(_l.inner+_l.outer)/2,e=Math.atan2(-1.12,-.98);Qa.push({x:hh.cx+Math.cos(e)*t,y:_l.seat+.155,z:hh.zc+Math.sin(e)*t,o:[Math.cos(e),Math.sin(e)],back:0,hw:0,ring:[hh.cx,hh.zc,_l.outer+.07,_l.seat],s:.52,k:2.2,range:3.6,mount:"table"})}var Bu=.13,dh=.21,l0=Bu/Math.cos(Kn/6),jo=t=>t.toFixed(4);function v2(t){let o=(t||Qa.map((r,n)=>n)).map(r=>{let n=Qa[r],a=-n.o[1],s=n.o[0],i=n.mount==="table"?`
				// the bench it stands on hides the floor under and around it
				if (p.y < ${jo(n.ring[3]-.03)}) {
					float tt = ${jo(n.y-n.ring[3])} / max(-D.y, 1e-3);
					vec2 hit = vec2(${jo(n.x)}, ${jo(n.z)}) + D.xz * tt - vec2(${jo(n.ring[0])}, ${jo(n.ring[1])});
					T *= smoothstep(${jo(n.ring[2]-.02)}, ${jo(n.ring[2]+.12)}, length(hit));
				}`:"",c=n.mount==="wall"?`
				{
					// what it hangs on stands behind it and hides what lies beyond
					float behind = -dot(D.xz, vec2(${jo(n.o[0])}, ${jo(n.o[1])}));
					if (behind > ${jo(n.back+.06)}) {
						float side = abs(dot(D.xz, vec2(${jo(a)}, ${jo(s)}))) * ${jo(n.back)} / behind;
						T *= smoothstep(${jo(n.hw-.04)}, ${jo(n.hw+.04)}, side);
					}
				}`:"";return`
			{
				vec3 D = p - vec3(${jo(n.x)}, ${jo(n.y)}, ${jo(n.z)});
				float d2 = dot(D, D);
				if (d2 < ${jo(n.range*n.range)}) {
					float d = sqrt(d2);
					// the direction in the lantern's own frame
					float c = ${jo(Math.cos(Math.atan2(n.o[1],n.o[0])))}, s = ${jo(Math.sin(Math.atan2(n.o[1],n.o[0])))};
					vec3 q = vec3(D.x * c + D.z * s, D.y, -D.x * s + D.z * c);
					float T = lanternGlass(q, 0.10 + 0.05 * d);
					${c}${i}
					float fl = 0.90 + 0.06 * sin(time * 6.1 + ${jo(r*1.7)}) + 0.04 * sin(time * 15.3 + ${jo(r*2.9)}) * sin(time * 1.9 + ${jo(r*.6)});
					float lam = max(dot(N, -D / d), 0.0) * 0.85 + 0.15;
					float fall = 1.0 / (1.0 + d2 * ${jo(1/(n.s*n.s))}) * (1.0 - smoothstep(${jo(n.range*.6)}, ${jo(n.range)}, d));
					sum += ${jo(n.k)} * T * fl * lam * fall;
				}
			}`}).join("");return`
	// how much of a lantern's light gets out in direction q (lantern frame,
	// y up): through the leaded glass, past the iron posts, a little
	// through the vents in the roof and the open work under the base
	float lanternGlass(vec3 q, float blur) {
		float h = length(q.xz) + 1e-5;
		float az = atan(q.z, q.x);
		// which of the six panels, and where across it
		float t = mod(az + ${jo(Kn/6)}, ${jo(Kn/3)}) - ${jo(Kn/6)};
		float U = tan(t) / ${jo(Math.tan(Kn/6))};
		float V = (q.y / h) * (${jo(Bu/dh)} / cos(t));
		// the diamond lattice of lead: its shadow soft, as a flame is not
		// a point, and softer the further it falls
		float s1 = U * 1.5 + V * 2.0, s2 = U * 1.5 - V * 2.0;
		float e1 = 0.5 - abs(fract(s1) - 0.5), e2 = 0.5 - abs(fract(s2) - 0.5);
		float lead = 1.0 - smoothstep(0.0, 0.05 + blur, min(e1, e2));
		float T = 1.0 - 0.48 * lead;
		// the iron posts at the corners
		T *= 1.0 - 0.6 * smoothstep(0.80 - blur, 1.0, abs(U));
		// the rails at top and bottom, and beyond them the roof and base
		float inGlass = 1.0 - smoothstep(0.80 - blur, 1.05 + blur * 2.0, abs(V));
		float leak = V > 0.0 ? 0.26 : 0.40;
		// and a little light that is not patterned at all: the glow of
		// the warm glass itself
		return mix(mix(leak, T, inGlass), 1.0, 0.18);
	}
	vec3 lanternLight(vec3 p, vec3 N) {
		if (night <= 0.001) return vec3(0.0);
		float sum = 0.0;
		${o}
		return vec3(1.0, 0.74, 0.42) * sum * 1.5 * night;
	}`}var hn=0,H6=1;function U6(){let t=[],e=[],o=[],r=[],n=[],a=(v,l,p,m)=>(t.push(v[0],v[1],v[2]),e.push(l[0],l[1],l[2]),o.push(p),r.push(m?m[0]:0,m?m[1]:0),t.length/3-1),s=(v,l)=>[v[0]-l[0],v[1]-l[1],v[2]-l[2]],i=(v,l)=>[v[1]*l[2]-v[2]*l[1],v[2]*l[0]-v[0]*l[2],v[0]*l[1]-v[1]*l[0]],c=v=>{let l=Math.hypot(v[0],v[1],v[2])||1;return[v[0]/l,v[1]/l,v[2]/l]};function h(v,l,p,m,g,x){let y=c(i(s(l,v),s(m,v))),w=a(v,y,g,[0,0]),_=a(l,y,g,[1,0]),M=a(p,y,g,[1,1]),k=a(m,y,g,[0,1]);n.push(w,_,M,w,M,k),x&&n.push(w,M,_,w,k,M)}function f(v,l,p){for(let x=0;x<v.length;x++){let y=v[Math.max(0,x-1)],w=v[Math.min(v.length-1,x+1)],_=c(s(w,y)),M=Math.abs(_[1])>.9?[1,0,0]:[0,1,0],k=c(i(_,M)),R=i(k,_),A=typeof l=="function"?l(x/(v.length-1)):l;for(let F=0;F<=6;F++){let C=F/6*Kn*2,H=Math.cos(C),I=Math.sin(C),V=[k[0]*H+R[0]*I,k[1]*H+R[1]*I,k[2]*H+R[2]*I];a([v[x][0]+V[0]*A,v[x][1]+V[1]*A,v[x][2]+V[2]*A],V,p)}}let g=t.length/3-v.length*7;for(let x=0;x<v.length-1;x++)for(let y=0;y<6;y++){let w=g+x*7+y,_=w+6+1;n.push(w,_,w+1,w+1,_,_+1)}}function d(v,l,p,m,g,x,y,w,_){let M=(k,R,A)=>{let F=x+Kn/6+A*Kn/3;return[v[0]+Math.cos(F)*k,R,v[2]+Math.sin(F)*k]};for(let k=0;k<6;k++)h(M(m,l,k+1),M(m,l,k),M(g,p,k),M(g,p,k+1),y);if(w&&g>0)for(let k=0;k<6;k++){let R=a([v[0],p,v[2]],[0,1,0],y),A=a(M(g,p,k),[0,1,0],y),F=a(M(g,p,k+1),[0,1,0],y);n.push(R,F,A)}if(_&&m>0)for(let k=0;k<6;k++){let R=a([v[0],l,v[2]],[0,-1,0],y),A=a(M(m,l,k),[0,-1,0],y),F=a(M(m,l,k+1),[0,-1,0],y);n.push(R,A,F)}}function u(v,l,p,m,g,x,y){let w=[];for(let M=0;M<=18;M++){let k=M/18,R=(y||0)+k*m*Kn*2,A=p*(1-.75*k);w.push([v[0]+l[0]*Math.cos(R)*A,v[1]+Math.sin(R)*A,v[2]+l[2]*Math.cos(R)*A])}f(w,g,x)}return Qa.forEach(v=>{let l=v.s,p=Math.atan2(v.o[1],v.o[0]),m=[v.x,v.y,v.z],g=(w,_,M)=>[v.x+v.o[0]*w-v.o[1]*(M||0),v.y+_,v.z+v.o[1]*w+v.o[0]*(M||0)],x=v.y-dh*l,y=v.y+dh*l;for(let w=0;w<6;w++){let _=p+Kn/6+w*Kn/3,M=_+Kn/3,k=l0*l*.97,R=[v.x+Math.cos(_)*k,x,v.z+Math.sin(_)*k],A=[v.x+Math.cos(M)*k,x,v.z+Math.sin(M)*k];h(A,R,[R[0],y,R[2]],[A[0],y,A[2]],H6,!0)}for(let w=0;w<6;w++){let _=p+Kn/6+w*Kn/3,M=l0*l;f([[v.x+Math.cos(_)*M,x-.02*l,v.z+Math.sin(_)*M],[v.x+Math.cos(_)*M,y+.02*l,v.z+Math.sin(_)*M]],.011*l,hn)}d(m,x-.035*l,x,l0*l*1.12,l0*l*1.12,p,hn,!0,!0),d(m,x-.1*l,x-.035*l,l0*l*.55,l0*l*1,p,hn,!1,!0),d(m,x-.17*l,x-.1*l,0,l0*l*.55,p,hn,!1,!1);for(let w=0;w<6;w++){let _=p+w*Kn/3,M=Bu*l*1.06,k=[v.x+Math.cos(_)*M,x-.06*l,v.z+Math.sin(_)*M];u(k,[-Math.sin(_),0,Math.cos(_)],.03*l,.85,.004*l,hn,.3)}d(m,y,y+.03*l,l0*l*1.14,l0*l*1.14,p,hn,!1,!0),d(m,y+.03*l,y+.2*l,l0*l*1.14,l0*l*.32,p,hn,!1,!1),d(m,y+.2*l,y+.27*l,l0*l*.34,l0*l*.34,p,hn,!1,!1),d(m,y+.27*l,y+.37*l,l0*l*.42,0,p,hn,!1,!0),f([[v.x,y+.36*l,v.z],[v.x,y+.47*l,v.z]],w=>.01*l*(1-.7*w),hn),d([v.x,0,v.z],y+.44*l,y+.47*l,.018*l,0,p,hn,!1,!0);for(let w=0;w<6;w++){let _=p+Kn/6+w*Kn/3,M=l0*l*1.14,k=[v.x+Math.cos(_)*M,y+.03*l,v.z+Math.sin(_)*M];f([k,[k[0],k[1]+.09*l,k[2]]],R=>.008*l*(1-.8*R),hn),d([k[0],0,k[2]],k[1]+.035*l,k[1]+.06*l,.014*l,.014*l,_,hn,!0,!0)}if(v.mount==="wall"){let w=v.back,_=x-.32,M=g(-w,0,0);((C,H,I)=>{let V=[v.o[0],0,v.o[1]],dt=[-v.o[1],0,v.o[0]],$t=(st,Wt,we)=>[M[0]+dt[0]*st+V[0]*we,Wt,M[2]+dt[2]*st+V[2]*we],kt=.03,mt=.065;h($t(-I,C,mt),$t(I,C,mt),$t(I,H,mt),$t(-I,H,mt),hn,!0),h($t(I,C,kt),$t(I,C,mt),$t(I,H,mt),$t(I,H,kt),hn,!0),h($t(-I,C,mt),$t(-I,C,kt),$t(-I,H,kt),$t(-I,H,mt),hn,!0),h($t(-I,H,mt),$t(I,H,mt),$t(I,H,kt),$t(-I,H,kt),hn,!0),h($t(-I,C,kt),$t(I,C,kt),$t(I,C,mt),$t(-I,C,mt),hn,!0),d([M[0]+V[0]*mt,0,M[2]+V[2]*mt],H,H+.05,I*.6,0,p,hn,!1,!0),d([M[0]+V[0]*mt,0,M[2]+V[2]*mt],C-.05,C,0,I*.6,p,hn,!1,!1)})(_-.2,_+.2,.07);let R=[];for(let C=0;C<=14;C++){let H=C/14,I=-w+.05+H*(w-.05),V=_+.04+(x-.17*l-_-.04)*Math.pow(H,2.2);R.push(g(I,V-v.y,0))}f(R,C=>.022*(1-.3*C),hn);let A=[];for(let C=0;C<=10;C++){let H=C/10;A.push(g(-w+.05+H*w*.6,_-.14+H*.16+.05*Math.sin(H*Kn)-v.y,0))}f(A,.009,hn);let F=A[A.length-1];u([F[0]-v.o[0]*.03,F[1]+.02,F[2]-v.o[1]*.03],[v.o[0],0,v.o[1]],.045,1.1,.007,hn,-.4),[.3,.55].forEach(C=>{let H=R[Math.round(C*14)],I=A[Math.round(C/.62*10)]||A[10];f([H,I],.006,hn)}),[-1,1].forEach(C=>{let H=g(-.05,-dh*l-.2*l,0);u([H[0]-v.o[1]*C*.05,H[1],H[2]+v.o[0]*C*.05],[-v.o[1]*C,0,v.o[0]*C],.05*l,.9,.006,hn,Kn)})}else for(let w=0;w<3;w++){let _=p+w*Kn*2/3,M=[v.x+Math.cos(_)*l0*l*.7,x-.035*l,v.z+Math.sin(_)*l0*l*.7],k=[v.x+Math.cos(_)*l0*l*1.25,x-.17*l,v.z+Math.sin(_)*l0*l*1.25];f([M,k],.012*l,hn)}}),{pos:t,nrm:e,kind:o,uv:r,elems:n}}kl.exports=t=>{let e=U6(),o=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec3 position, normal;
		attribute float kind;
		attribute vec2 uv;
		varying vec3 v_pos, v_n;
		varying float v_kind;
		varying vec2 v_uv;
		void main() {
			v_pos = position; v_n = normal; v_kind = kind; v_uv = uv;
			vec3 p = position; p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`
		precision highp float;
		uniform float time, night;
		varying vec3 v_pos, v_n;
		varying float v_kind;
		varying vec2 v_uv;
		${v2()}
		void main() {
			vec3 N = normalize(v_n);
			if (!gl_FrontFacing) N = -N;
			// the room's own light: warm by day, cold and dim at night
			vec3 amb = mix(vec3(0.46, 0.42, 0.37), vec3(0.055, 0.065, 0.095), night) * (0.7 + 0.3 * N.y);
			vec3 col;
			if (v_kind > 0.5) {
				// the glass: a lattice of lead over pale amber panes
				float s1 = (v_uv.x - 0.5) * 3.0 + (v_uv.y - 0.5) * 4.0;
				float s2 = (v_uv.x - 0.5) * 3.0 - (v_uv.y - 0.5) * 4.0;
				float e1 = 0.5 - abs(fract(s1) - 0.5), e2 = 0.5 - abs(fract(s2) - 0.5);
				float lead = 1.0 - smoothstep(0.035, 0.07, min(e1, e2));
				float rim = 1.0 - smoothstep(0.0, 0.05, min(v_uv.y, 1.0 - v_uv.y));
				lead = max(lead, rim);
				// by day: old glass, catching a little of the room
				vec3 day = vec3(0.62, 0.55, 0.42) * (0.55 + 0.45 * N.y * N.y) * amb * 1.4 + vec3(0.06, 0.05, 0.04);
				// at night: lit from within, brightest towards the flame
				float fl = 0.90 + 0.07 * sin(time * 6.1 + v_pos.x * 3.0) + 0.03 * sin(time * 17.0 + v_pos.z * 5.0);
				float hot = exp(-pow(length(v_uv - vec2(0.5, 0.42)) * 2.2, 2.0));
				vec3 glow = mix(vec3(1.0, 0.55, 0.20), vec3(1.0, 0.86, 0.60), hot) * (0.9 + 2.2 * hot) * fl;
				vec3 pane = mix(day, glow, night);
				col = mix(pane, vec3(0.04, 0.035, 0.03) * (amb + 0.1), lead);
			} else {
				// the iron: dark, with a dull warm sheen where the flame
				// catches it
				vec3 base = vec3(0.070, 0.058, 0.048);
				col = base * (amb * 1.6 + lanternLight(v_pos, N) * 0.5);
				col += vec3(0.95, 0.70, 0.40) * pow(max(N.y, 0.0), 4.0) * mix(0.02, 0.0, night);
			}
			gl_FragColor = vec4(col, 1.0);
		}`,attributes:{position:e.pos,normal:e.nrm,kind:e.kind,uv:e.uv},elements:e.elems,uniforms:{time:t.context("time"),night:()=>Hu.night}}),r=[],n=[];Qa.forEach((s,i)=>{[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(c=>{r.push(c[0],c[1]),n.push(s.x,s.y,s.z,s.s+i*.001)})});let a=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale, time;
		attribute vec2 corner;
		attribute vec4 at;
		varying vec2 v_uv;
		varying float v_fl;
		void main() {
			float i = fract(at.w) * 1000.0;
			v_fl = 0.90 + 0.06 * sin(time * 6.1 + i * 1.7) + 0.04 * sin(time * 15.3 + i * 2.9);
			vec3 right = vec3(view[0][0], view[1][0], view[2][0]);
			vec3 up = vec3(view[0][1], view[1][1], view[2][1]);
			vec3 p = at.xyz + (right * corner.x + up * corner.y) * 1.1 * floor(at.w * 100.0 + 0.5) / 100.0;
			v_uv = corner;
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`
		precision highp float;
		uniform float night;
		varying vec2 v_uv;
		varying float v_fl;
		void main() {
			float r = length(v_uv);
			vec3 col = vec3(1.0, 0.62, 0.28) * (pow(max(1.0 - r, 0.0), 3.0) * 0.30 + pow(max(1.0 - r, 0.0), 8.0) * 0.35) * v_fl;
			gl_FragColor = vec4(col * night * 0.6, 1.0);
		}`,attributes:{corner:r,at:n},count:r.length/2,uniforms:{time:t.context("time"),night:()=>Hu.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(){o(),Hu.night>.01&&a()}};kl.exports.lanternGLSL=v2;kl.exports.LANTERNS=Qa;kl.exports.TREE_LANTERN=[Qa.length-1]});var es=At((I7,er)=>{"use strict";var B6=c0(),Vo=Math.PI,Qn=t=>(+t).toFixed(4),j6=t=>`vec3(${Qn(t[0])}, ${Qn(t[1])}, ${Qn(t[2])})`,Ze={x:-7,z:44.5},go=5.2,x0=15,ze={z0:42.6,z1:46.4,zc:44.5,spring:4,r:1.9},ua={z0:42.2,z1:46.8,top:6.3,x:.35},mh=[Ze.x-Math.sqrt(go*go-3.05*3.05),0,0],On={x0:-2.05+mh[0],x1:mh[0],z0:41.45,z1:47.55,top:4.3},ju=[[On.x1+.05,2.35,On.z0-.45],[On.x1+.05,2.35,On.z1+.45]].map(([t,e,o])=>{let r=Math.atan2(o-Ze.z,t-Ze.x);return[Ze.x+Math.cos(r)*(go-.16),e,Ze.z+Math.sin(r)*(go-.16)]}),Ho={ri:3.4,ro:go,a0:-35*Vo/180,rise:.1836,step:3.6*Vo/180,n:88,thick:.36};Ho.k=Ho.rise/Ho.step;var U0=t=>Ho.a0-t,ts=t=>t*Ho.k,mn={x:Ze.x+.1,z:Ze.z-.15,yaw:-Vo/2,scale:1.3},Na=mn.scale/1.1,Sl={keyX0:mn.x-.524*Na,keyX1:mn.x+.491*Na,keyTop:.647*Na,keyFront:mn.z+.808*Na,keyBack:mn.z+.72*Na,stoolX:mn.x-.041*Na,stoolZ:mn.z+1.122*Na,stoolFront:mn.z+.96*Na,stoolTop:.37*Na,heading:Vo},vh=[[3.6,44.5],[.6,44.5],[-2.2,44.7],[-4.5,46.5],[-7,47.2],[-9.4,46.6],[-10.5,44.9],[-10.9,43.2]];function g2(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let o=e;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}function W6(t,e){let o=1e9;for(let r=0;r<vh.length-1;r++){let[n,a]=vh[r],[s,i]=vh[r+1],c=s-n,h=i-a,f=Math.max(0,Math.min(1,((t-n)*c+(e-a)*h)/(c*c+h*h)));o=Math.min(o,Math.hypot(t-n-c*f,e-a-h*f))}return o}var ph=t=>ze.spring+Math.sqrt(Math.max(0,ze.r*ze.r-(t-ze.zc)*(t-ze.zc))),Ja=t=>Ze.x+Math.sqrt(Math.max(0,go*go-(t-Ze.z)*(t-Ze.z)));function rc(t,e){return Math.hypot(t-Ze.x,e-Ze.z)<go||t<=0&&t>Ze.x&&e>ze.z0&&e<ze.z1||t>On.x0&&t<On.x1&&e>On.z0&&e<On.z1}function V6(t,e){if(Math.hypot(t-Ze.x,e-Ze.z)<Ho.ri-.05)return 99;let r=Math.atan2(e-Ze.z,t-Ze.x),n=Ho.a0-r;for(;n<0;)n+=2*Vo;for(;n>=2*Vo;)n-=2*Vo;return n>Ho.n*Ho.step?99:ts(n)-Ho.thick}function X6(){let t=[],e=g2(1729),o=(a,s,i)=>{for(let c=Math.max(0,t.length-400);c<t.length;c++){let h=t[c];if(!(h[1]>.01)&&Math.hypot(h[0]-a,h[2]-s)<i+h[3]+.012)return!0}return!1},r=(a,s)=>{let i=a-mn.x,c=s-mn.z,h=Math.cos(mn.yaw),f=Math.sin(mn.yaw),d=(h*i-f*c)/mn.scale,u=(f*i+h*c)/mn.scale;return d>-1.05&&d<1.3&&u>-.7&&u<.72},n=0;for(;t.length<980&&n<6e4;){n++;let s=e()<.55?1.25+e()*2.1:1.25+Math.sqrt(e())*(go-1.45),i=e()*2*Vo,c=Ze.x+Math.cos(i)*s,h=Ze.z+Math.sin(i)*s;if(!rc(c,h)||s>go-.18||r(c,h)||W6(c,h)<.62||V6(c,h)<2.3||c<On.x1+.9)continue;let f=.022+e()*.02;if(o(c,h,f))continue;let d=e()<.15?.22+e()*.14:.05+e()*.15;t.push([c,0,h,f,d,e()*100])}for(let a=1;a<26;a++){let s=a<12?3:2;for(let i=0;i<s;i++){let c=(a+.25+e()*.5)*Ho.step,h=U0(c),f=Ho.ri+.55+e()*(Ho.ro-Ho.ri-.75),d=.022+e()*.016;t.push([Ze.x+Math.cos(h)*f,(a+1)*Ho.rise,Ze.z+Math.sin(h)*f,d,.05+e()*.14,e()*100])}}for(let a of ju)for(let[s,i,c]of[[0,0,.26],[.06,.05,.18],[-.05,-.04,.14]])t.push([a[0]+s,a[1],a[2]+i,.024,c,e()*100]);for(let a of[On.z0-.35,On.z1+.35])for(let s=0;s<9;s++){let i=On.x1+.35+e()*.5,c=a+(e()-.5)*.5;Math.hypot(i-Ze.x,c-Ze.z)>go-.15||t.push([i,0,c,.026+e()*.014,.18+e()*.3,e()*100])}return t}function Y6(t){let o=g2(77),r=[];for(let n=0;n<14;n++){let a=t[Math.floor(o()*t.length)];r.push([a[0],a[1]+a[4],a[2]])}for(let n=0;n<12;n++){let a=r.map(()=>[0,0,0,0]);for(let s of t){let i=[s[0],s[1]+s[4],s[2]],c=0,h=1e9;r.forEach((f,d)=>{let u=(i[0]-f[0])**2+(i[1]-f[1])**2*4+(i[2]-f[2])**2;u<h&&(h=u,c=d)}),a[c][0]+=i[0],a[c][1]+=i[1],a[c][2]+=i[2],a[c][3]++}r=a.map((s,i)=>s[3]?[s[0]/s[3],s[1]/s[3],s[2]/s[3],s[3]]:r[i])}return r.filter(n=>n[3]>0).map(n=>[n[0],n[1]+.12,n[2],n[3]/t.length])}var Wu=X6(),m2=Y6(Wu.filter(t=>t[1]<2||t[1]>2.5)).concat(ju.map(t=>[t[0],t[1]+.35,t[2],.035]));function x2(){return`
	vec3 roomLight(vec3 p, vec3 N, vec3 V, float gloss, out vec3 spec) {
		spec = vec3(0.0);
		vec3 col = vec3(0.0);
		float floorK = (p.y < 0.02 && N.y > 0.9) ? 1.0 : 0.0;
		${m2.map((e,o)=>`
		{
			vec3 d = ${j6(e)} - p;
			float dd = dot(d, d);
			vec3 L = d * inversesqrt(dd);
			float fl = 0.86 + 0.08 * sin(time * ${Qn(5.3+o*.71)} + ${Qn(o*1.9)}) + 0.06 * sin(time * ${Qn(11.7+o*1.3)} + ${Qn(o*.7)});
			float w = ${Qn(e[3]*m2.length)} * fl;
			float lam = max(dot(N, L), 0.0) * 0.82 + 0.18;
			col += w * lam / (0.7 + dd * 0.42);
			// the floor glows in pools round the candles
			col += w * floorK * 0.9 / (0.02 + dd * 7.0);
			spec += w * pow(max(dot(N, normalize(L + V)), 0.0), mix(10.0, 180.0, gloss)) * gloss * 1.6 / (0.25 + dd * 0.9);
		}`).join("")}
		col *= vec3(1.0, 0.56, 0.24) * 0.62;
		spec *= vec3(1.0, 0.62, 0.30) * 0.62;
		// light from the oculus, high above: pale by day, moonlight at night
		float up = smoothstep(0.0, ${Qn(x0)}, p.y);
		vec3 sky = mix(vec3(0.10, 0.095, 0.085), vec3(0.030, 0.045, 0.085), night);
		col += sky * (0.35 + 0.65 * up) * (0.55 + 0.45 * max(N.y, 0.0)) * (0.6 + 0.4 * max(-dot(N, normalize(p - vec3(${Qn(Ze.x)}, ${Qn(x0)}, ${Qn(Ze.z)}))), 0.0));
		// and straight down from it a soft pool falls on the piano and
		// whoever is playing it: it catches his shoulders, his hair, the
		// edge of the lid, and lifts them out of the dark
		float pool = 1.0 - smoothstep(0.5, 2.9, length(p.xz - vec2(${Qn(Sl.stoolX)}, ${Qn(Sl.keyFront+.1)})));
		col += mix(vec3(0.34, 0.32, 0.29), vec3(0.16, 0.24, 0.42), night) * pool * pool * (0.12 + 0.88 * max(N.y, 0.0)) * 1.15;
		// a little of the hall's light comes in through the arch
		float near = smoothstep(-4.5, 0.4, p.x) * (1.0 - smoothstep(4.4, 6.5, p.y));
		vec3 hall = mix(vec3(0.55, 0.50, 0.42), vec3(0.16, 0.15, 0.17), night);
		col += hall * near * near * (0.35 + 0.65 * max(N.x, 0.0));
		return col;
	}
	vec3 roomHaze(vec3 p, vec3 eye, vec3 col) {
		float d = length(p - eye);
		float h = 1.0 - exp(-d * 0.045);
		float low = 1.0 - smoothstep(0.0, 6.0, p.y);
		return mix(col, vec3(0.16, 0.085, 0.035) * (0.45 + 0.55 * low), h * 0.55);
	}`}var co={FLOOR:0,WALL:1,STEP:2,SOFFIT:3,STRING:4,CEIL:5,OCULUS:6,HALLSTONE:7,IRON:8,RAILING:9,CANDLE:10};function y2(){let t={pos:[],nrm:[],kind:[],uv:[],idx:[]};return t.v=(e,o,r,n)=>(t.pos.push(e[0],e[1],e[2]),t.nrm.push(o[0],o[1],o[2]),t.kind.push(r),t.uv.push(n?n[0]:0,n?n[1]:0),t.pos.length/3-1),t.quad=(e,o,r,n,a,s,i)=>{let c=t.v(e,a,s,i&&i[0]),h=t.v(o,a,s,i&&i[1]),f=t.v(r,a,s,i&&i[2]),d=t.v(n,a,s,i&&i[3]);t.idx.push(c,h,f,c,f,d)},t.tri=(e,o,r,n,a)=>{let s=t.v(e,n,a),i=t.v(o,n,a),c=t.v(r,n,a);t.idx.push(s,i,c)},t}function K6(){let t=y2(),e=(r,n,a)=>[Ze.x+Math.cos(r)*n,a,Ze.z+Math.sin(r)*n],o=r=>[Math.cos(r),0,Math.sin(r)];for(let n=0;n>On.x0-.01;n-=.25)for(let a=41.2;a<47.8;a+=.2){let s=n-.25,i=n,c=a,h=a+.2;if(!(rc(s,c)||rc(i,c)||rc(s,h)||rc(i,h)||rc((s+i)/2,(c+h)/2)))continue;let f=c,d=h;s>Ja(ze.z0)-.3&&(f=Math.max(f,ze.z0),d=Math.min(d,ze.z1),d<=f)||t.quad([s,0,f],[s,0,d],[i,0,d],[i,0,f],[0,1,0],co.FLOOR)}{for(let n=0;n<360;n++){let a=n/360*2*Vo,s=(n+1)/360*2*Vo,i=(a+s)/2,c=e(i,go,0),h=0;c[0]>Ze.x&&c[2]>ze.z0-.02&&c[2]<ze.z1+.02&&(h=Math.max(ph(Math.min(Math.max(e(a,go,0)[2],ze.z0),ze.z1)),ph(Math.min(Math.max(e(s,go,0)[2],ze.z0),ze.z1)))),c[0]<Ze.x&&c[2]>On.z0-.02&&c[2]<On.z1+.02&&(h=On.top);let f=a*go,d=s*go,u=o(a).map(p=>-p),v=o(s).map(p=>-p),l=[h];for(let p=Math.ceil(h/2.5)*2.5;p<x0;p+=2.5)p>h+.01&&l.push(p);l.push(x0);for(let p=0;p<l.length-1;p++){let m=l[p],g=l[p+1],x=t.v(e(a,go,m),u,co.WALL,[f,m]),y=t.v(e(s,go,m),v,co.WALL,[d,m]),w=t.v(e(s,go,g),v,co.WALL,[d,g]),_=t.v(e(a,go,g),u,co.WALL,[f,g]);t.idx.push(x,y,w,x,w,_)}}for(let[n,a,s]of[[6.55,.22,.07],[0,.32,.05]])for(let i=0;i<360;i++){let c=i/360*2*Vo,h=(i+1)/360*2*Vo,f=(c+h)/2,d=e(f,go,0);if(n<1&&(d[0]>Ze.x&&d[2]>ze.z0&&d[2]<ze.z1||d[0]<Ze.x&&d[2]>On.z0&&d[2]<On.z1))continue;let u=go-s;t.quad(e(c,u,n),e(h,u,n),e(h,u,n+a),e(c,u,n+a),o(f).map(v=>-v),co.WALL,[[c*go,n+100],[h*go,n+100],[h*go,n+a+100],[c*go,n+a+100]]),t.quad(e(c,u,n+a),e(h,u,n+a),e(h,go,n+a),e(c,go,n+a),[0,1,0],co.WALL,[[0,200],[0,200],[0,200],[0,200]]),n>1&&t.quad(e(c,go,n),e(h,go,n),e(h,u,n),e(c,u,n),[0,-1,0],co.WALL,[[0,200],[0,200],[0,200],[0,200]])}}{let r=ua.x;for(let[a,s]of[[ze.z0,1],[ze.z1,-1]]){let i=Ja(a);t.quad([r,0,a],[i,0,a],[i,ze.spring,a],[r,ze.spring,a],[0,0,s],co.WALL,[[r,0],[i,0],[i,ze.spring],[r,ze.spring]])}let n=40;for(let a=0;a<n;a++){let s=a/n*Vo,i=(a+1)/n*Vo,c=ze.zc-Math.cos(s)*ze.r,h=ze.zc-Math.cos(i)*ze.r,f=ze.spring+Math.sin(s)*ze.r,d=ze.spring+Math.sin(i)*ze.r,u=[0,-Math.sin(s),Math.cos(s)],v=[0,-Math.sin(i),Math.cos(i)],l=t.v([r,f,c],u,co.WALL,[r,s*ze.r]),p=t.v([Ja(c),f,c],u,co.WALL,[Ja(c),s*ze.r]),m=t.v([Ja(h),d,h],v,co.WALL,[Ja(h),i*ze.r]),g=t.v([r,d,h],v,co.WALL,[r,i*ze.r]);t.idx.push(l,p,m,l,m,g)}}{let r=ua.x,n=.05;for(let h=ua.z0;h<ua.z1-1e-6;h+=n){let f=h,d=Math.min(ua.z1,h+n),v=(l=>l>ze.z0&&l<ze.z1)((f+d)/2)?Math.max(ph(f),ph(d)):0;t.quad([r,v,f],[r,v,d],[r,ua.top,d],[r,ua.top,f],[1,0,0],co.HALLSTONE,[[f,v],[d,v],[d,ua.top],[f,ua.top]])}let a=.32,s=.06,i=r+s,c=36;for(let h=0;h<c;h++){let f=h/c*Vo,d=(h+1)/c*Vo,u=(g,x)=>[i,ze.spring+Math.sin(g)*x,ze.zc-Math.cos(g)*x],v=ze.r,l=ze.r+a;t.quad(u(f,v),u(d,v),u(d,l),u(f,l),[1,0,0],co.HALLSTONE,[[0,300],[0,300],[1,300],[1,300]]);let p=(g,x,y)=>[y,ze.spring+Math.sin(g)*x,ze.zc-Math.cos(g)*x],m=[0,Math.sin((f+d)/2),-Math.cos((f+d)/2)];t.quad(p(f,l,r),p(d,l,r),p(d,l,i),p(f,l,i),m,co.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),t.quad(p(f,v,r),p(d,v,r),p(d,v,i),p(f,v,i),m.map(g=>-g),co.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}for(let[h,f,d]of[[ze.z0-a,ze.z0,-1],[ze.z1,ze.z1+a,1]]){t.quad([i,0,h],[i,0,f],[i,ze.spring,f],[i,ze.spring,h],[1,0,0],co.HALLSTONE,[[0,300],[1,300],[1,300],[0,300]]);let u=d<0?h:f,v=d<0?f:h;t.quad([r,0,u],[i,0,u],[i,ze.spring,u],[r,ze.spring,u],[0,0,d],co.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),t.quad([r,0,v],[i,0,v],[i,ze.spring,v],[r,ze.spring,v],[0,0,-d],co.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);let l=ze.spring-.16,p=.16,m=.11,g=Math.min(h,f)-.05,x=Math.max(h,f)+.05;t.quad([r+m,l,g],[r+m,l,x],[r+m,l+p,x],[r+m,l+p,g],[1,0,0],co.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),t.quad([r,l+p,g],[r+m,l+p,g],[r+m,l+p,x],[r,l+p,x],[0,1,0],co.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),t.quad([r,l,g],[r,l,x],[r+m,l,x],[r+m,l,g],[0,-1,0],co.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);for(let y of[g,x])t.quad([r,l,y],[r+m,l,y],[r+m,l+p,y],[r,l+p,y],[0,0,y===g?-1:1],co.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}{let h=ze.spring+ze.r-.05,f=ze.spring+ze.r+a+.12,d=.16,u=.22,v=i+.04;t.quad([v,h,ze.zc-d],[v,h,ze.zc+d],[v,f,ze.zc+u],[v,f,ze.zc-u],[1,0,0],co.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);for(let l of[-1,1])t.quad([r,h,ze.zc+l*d],[v,h,ze.zc+l*d],[v,f,ze.zc+l*u],[r,f,ze.zc+l*u],[0,0,l],co.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);t.quad([r,f,ze.zc-u],[v,f,ze.zc-u],[v,f,ze.zc+u],[r,f,ze.zc+u],[0,1,0],co.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}}{let{x0:r,x1:n,z0:a,z1:s,top:i}=On;t.quad([r,0,a],[r,0,s],[r,i,s],[r,i,a],[1,0,0],co.WALL,[[a,0],[s,0],[s,i],[a,i]]);for(let[h,f]of[[a,1],[s,-1]]){let d=Ze.x-Math.sqrt(go*go-(h-Ze.z)*(h-Ze.z));t.quad([r,0,h],[d,0,h],[d,i,h],[r,i,h],[0,0,f],co.WALL,[[r,0],[d,0],[d,i],[r,i]])}let c=24;for(let h=0;h<c;h++){let f=a+(s-a)*h/c,d=a+(s-a)*(h+1)/c,u=Ze.x-Math.sqrt(go*go-(f-Ze.z)**2),v=Ze.x-Math.sqrt(go*go-(d-Ze.z)**2);t.quad([r,i,f],[u,i,f],[v,i,d],[r,i,d],[0,-1,0],co.WALL,[[0,200],[0,200],[0,200],[0,200]])}for(let h=0;h<c;h++){let f=a+(s-a)*h/c,d=a+(s-a)*(h+1)/c,u=Ze.x-Math.sqrt(go*go-(f-Ze.z)**2)+.05,v=Ze.x-Math.sqrt(go*go-(d-Ze.z)**2)+.05;t.quad([u,i-.3,f],[v,i-.3,d],[v,i,d],[u,i,f],[1,0,0],co.WALL,[[0,200],[0,200],[0,200],[0,200]])}}{let n=[1.15,1.6,2.3,3,3.35,4.2,go];for(let a=0;a<120;a++){let s=a/120*2*Vo,i=(a+1)/120*2*Vo,c=(s+i)/2;c>Vo&&(c-=2*Vo);for(let h=0;h<n.length-1;h++){let f=n[h],d=n[h+1],u=c*180/Vo;f>=3.3&&u>8&&u<85||t.quad(e(s,f,x0),e(s,d,x0),e(i,d,x0),e(i,f,x0),[0,-1,0],co.CEIL,[[s*f,f],[s*d,d],[i*d,d],[i*f,f]])}t.quad(e(s,1.15,x0),e(i,1.15,x0),e(i,1.15,x0+.7),e(s,1.15,x0+.7),o(c).map(h=>-h),co.CEIL,[[0,400],[0,400],[0,400],[0,400]]),t.tri([Ze.x,x0+.7,Ze.z],e(i,1.15,x0+.7),e(s,1.15,x0+.7),[0,-1,0],co.OCULUS)}}{let r=Ho.ri,n=Ho.ro,a=Ho.n*Ho.step;for(let c=0;c<Ho.n;c++){let h=c*Ho.step,f=(c+1)*Ho.step,d=U0(h),u=U0(f),v=(c+1)*Ho.rise,l=c*Ho.rise,p=2;for(let x=0;x<p;x++){let y=d+(u-d)*x/p-(x===0?.004:0),w=d+(u-d)*(x+1)/p;t.quad(e(y,r,v),e(y,n,v),e(w,n,v),e(w,r,v),[0,1,0],co.STEP,[[r*y,c],[n*y,c],[n*w,c],[r*w,c]])}let m=[-Math.sin(d),0,Math.cos(d)],g=d-.004;t.quad(e(g,r,l),e(g,n,l),e(g,n,v),e(g,r,v),m,co.STEP,[[r*d,c+.5],[n*d,c+.5],[n*d,c+.5],[r*d,c+.5]]),t.quad(e(d,r,ts(h)+.06),e(u,r,ts(f)+.06),e(u,r,v),e(g,r,v),o((d+u)/2).map(x=>-x),co.STEP,[[0,500],[0,500],[0,500],[0,500]])}let s=Math.ceil(a/(1.2*Vo/180)),i=[r,r+.6,r+1.2,n];for(let c=0;c<s;c++){let h=c/s*a,f=(c+1)/s*a,d=U0(h),u=U0(f),v=ts(h),l=ts(f),p=v-Ho.thick,m=l-Ho.thick,g=o(d).map(k=>-k),x=o(u).map(k=>-k),y=t.v(e(d,r,p),g,co.STRING,[h*r,0]),w=t.v(e(u,r,m),x,co.STRING,[f*r,0]),_=t.v(e(u,r,l+.06),x,co.STRING,[f*r,1]),M=t.v(e(d,r,v+.06),g,co.STRING,[h*r,1]);t.idx.push(y,w,_,y,_,M);for(let k=0;k<i.length-1;k++){let R=i[k],A=i[k+1],F=C=>{let H=o(C);return[-H[0]*.12,-.99,-H[2]*.12]};t.quad(e(d,R,p),e(d,A,p),e(u,A,m),e(u,R,m),F((d+u)/2),co.SOFFIT,[[h*R,R],[h*A,A],[f*A,A],[f*R,R]])}}}return t}function Q6(){let t=y2(),e=Ho.ri+.045,o=Ho.n*Ho.step,r=Math.ceil(o/(.8*Vo/180)),n=.92,a=(c,h,f)=>[Ze.x+Math.cos(c)*h,f,Ze.z+Math.sin(c)*h],s=c=>[Math.cos(c),0,Math.sin(c)];for(let c=0;c<r;c++){let h=c/r*o,f=(c+1)/r*o,d=U0(h),u=U0(f),v=ts(h)+.06,l=ts(f)+.06,p=s(d).map(k=>-k),m=s(u).map(k=>-k),g=h*e,x=f*e,y=t.v(a(d,e,v),p,co.RAILING,[g,0]),w=t.v(a(u,e,l),m,co.RAILING,[x,0]),_=t.v(a(u,e,l+n),m,co.RAILING,[x,n]),M=t.v(a(d,e,v+n),p,co.RAILING,[g,n]);t.idx.push(y,w,_,y,_,M)}((c,h,f,d)=>{let v=p=>{let m=U0(p),g=ts(p)+.06+h,x=a(m,e+c,g),y=s(m),w=[];for(let _=0;_<8;_++){let M=_/8*2*Vo,k=[y[0]*Math.cos(M),Math.sin(M),y[2]*Math.cos(M)];w.push([[x[0]+k[0]*f,x[1]+k[1]*f,x[2]+k[2]*f],k])}return w},l=v(0);for(let p=1;p<=r;p++){let m=v(p/r*o);for(let g=0;g<8;g++){let x=(g+1)%8,y=t.v(l[g][0],l[g][1],d),w=t.v(m[g][0],m[g][1],d),_=t.v(m[x][0],m[x][1],d),M=t.v(l[x][0],l[x][1],d);t.idx.push(y,w,_,y,_,M)}l=m}})(0,n+.02,.028,co.IRON);for(let c of ju){let h=Math.atan2(c[2]-Ze.z,c[0]-Ze.x),f=[Math.cos(h),0,Math.sin(h)],d=12;for(let p=0;p<d;p++){let m=p/d*2*Vo,g=(p+1)/d*2*Vo,x=(y,w,_)=>[c[0]+Math.cos(y)*w,_,c[2]+Math.sin(y)*w];t.quad(x(m,.16,c[1]),x(g,.16,c[1]),x(g,.13,c[1]-.05),x(m,.13,c[1]-.05),[Math.cos(m)*.6,.8,Math.sin(m)*.6],co.IRON),t.quad(x(m,.16,c[1]),x(g,.16,c[1]),x(g,0,c[1]+.002),x(m,0,c[1]+.002),[0,1,0],co.IRON)}let u=[c[0]+f[0]*.16,c[1]-.35,c[2]+f[2]*.16],v=[-f[2],0,f[0]],l=.018;t.quad([u[0]-v[0]*l,u[1],u[2]-v[2]*l],[u[0]+v[0]*l,u[1],u[2]+v[2]*l],[c[0]+v[0]*l,c[1]-.05,c[2]+v[2]*l],[c[0]-v[0]*l,c[1]-.05,c[2]-v[2]*l],[-f[0],.5,-f[2]],co.IRON)}{let c=U0(0),h=a(c,e,0),f=10;for(let d=0;d<f;d++){let u=d/f*2*Vo,v=(d+1)/f*2*Vo,l=(p,m,g)=>[h[0]+Math.cos(p)*m,g,h[2]+Math.sin(p)*m];t.quad(l(u,.035,0),l(v,.035,0),l(v,.035,n+.1),l(u,.035,n+.1),[Math.cos((u+v)/2),0,Math.sin((u+v)/2)],co.IRON),t.quad(l(u,.06,n+.1),l(v,.06,n+.1),l(v,.03,n+.2),l(u,.03,n+.2),[Math.cos((u+v)/2)*.8,.6,Math.sin((u+v)/2)*.8],co.IRON)}}return t}function Z6(){let t=[],e=[],o=[],r=[];for(let a of Wu){let[s,i,c,h,f,d]=a,u=t.length/3;for(let l=0;l<=7;l++){let p=l/7*2*Vo+d,m=Math.cos(p),g=Math.sin(p);t.push(s+m*h,i,c+g*h,s+m*h,i+f,c+g*h),e.push(m,0,g,m,0,g),o.push(0,f,d,1,f,d)}for(let l=0;l<7;l++){let p=u+l*2;r.push(p,p+2,p+3,p,p+3,p+1)}let v=t.length/3;t.push(s,i+f-.006,c),e.push(0,1,0),o.push(2,f,d);for(let l=0;l<7;l++){let p=l/7*2*Vo+d;t.push(s+Math.cos(p)*h,i+f,c+Math.sin(p)*h),e.push(0,1,0),o.push(1,f,d)}for(let l=0;l<7;l++)r.push(v,v+1+l,v+1+(l+1)%7)}return{pos:t,nrm:e,info:o,idx:r}}function J6(){let t=[],e=[],o=[],r=[];for(let n of Wu){let[a,s,i,,c,h]=n,f=t.length/3;for(let d of[[-1,0],[1,0],[1,1],[-1,1]])t.push(a,s+c+.004,i),e.push(d[0],d[1]),o.push(h);r.push(f,f+1,f+2,f,f+2,f+3)}return{ctr:t,corner:e,ph:o,idx:r}}function t_(t){let e=new DataView(t),o=e.getUint32(4,!0),r=e.getUint32(8,!0),n=[],a=[];for(let g=0;g<3;g++)n.push(e.getFloat32(12+g*4,!0)),a.push(e.getFloat32(24+g*4,!0));let s=36,i=new Uint16Array(t,s,o*3);s+=o*6;let c=new Uint16Array(t,s,r);s+=r*2;let h=new Int8Array(t,s,o*3);s+=o*3;let f=new Uint8Array(t,s,o),d=new Float32Array(o*3),u=new Float32Array(o*3),v=new Float32Array(o),l=Math.cos(mn.yaw),p=Math.sin(mn.yaw),m=mn.scale;for(let g=0;g<o;g++){let x=(n[0]+i[g*3]/65535*a[0])*m,y=(n[1]+i[g*3+1]/65535*a[1])*m,w=(n[2]+i[g*3+2]/65535*a[2])*m;d[g*3]=mn.x+l*x+p*w,d[g*3+1]=y,d[g*3+2]=mn.z-p*x+l*w;let _=h[g*3]/127,M=h[g*3+1]/127,k=h[g*3+2]/127;u[g*3]=l*_+p*k,u[g*3+1]=M,u[g*3+2]=-p*_+l*k,v[g]=f[g]}return{pos:d,nrm:u,mat:v,idx:new Uint32Array(c)}}function e_(){let t=[],e=(d,u)=>[Ze.x+Math.cos(d)*u,Ze.z+Math.sin(d)*u];t.push([[0,ze.z0],[Ja(ze.z0),ze.z0]]),t.push([[Ja(ze.z1),ze.z1],[0,ze.z1]]);let o=Math.asin((ze.z1-Ze.z)/go),r=72;for(let d=0;d<r;d++){let u=o+d/r*(2*Vo-2*o),v=o+(d+1)/r*(2*Vo-2*o);t.push([e(u,go-.25),e(v,go-.25)])}let n=mh[0]-.55+.35;t.push([[n,On.z0],[n,On.z1]]);let a=2.4/Ho.k,s=12;for(let d=0;d<s;d++){let u=U0(d/s*a),v=U0((d+1)/s*a);t.push([e(u,Ho.ri-.2),e(v,Ho.ri-.2)])}t.push([e(U0(0),Ho.ri-.2),e(U0(0),go)]),t.push([e(U0(a),Ho.ri-.2),e(U0(a),go)]);let i=Math.cos(mn.yaw),c=Math.sin(mn.yaw),h=mn.scale,f=[[-1,-.62],[1.25,-.62],[1.25,.62],[-1,.62]].map(([d,u])=>[mn.x+(i*d+c*u)*h,mn.z+(-c*d+i*u)*h]);for(let d=0;d<4;d++)t.push([f[d],f[(d+1)%4]]);return t}er.exports=t=>{let e=K6(),o=Q6(),r=Z6(),n=J6(),a=Za(),s=`
	precision highp float;
	${B6.GLSL}
	uniform float time;
	${x2()}
	${a.lanternGLSL()}
	float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
	float vnoise(vec2 p) {
		vec2 i = floor(p), f = fract(p);
		vec2 u = f * f * (3.0 - 2.0 * f);
		return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
	}
	float fbm(vec2 p) { return vnoise(p) * 0.5 + vnoise(p * 2.1) * 0.25 + vnoise(p * 4.3) * 0.125 + vnoise(p * 8.7) * 0.0625; }
	// limestone: warm, chalky, with fossil flecks and soft cloudy patches
	vec3 limestone(vec2 q) {
		float n = fbm(q * 1.3);
		float fine = vnoise(q * 37.0);
		vec3 c = mix(vec3(0.62, 0.56, 0.47), vec3(0.74, 0.68, 0.58), n);
		c *= 0.92 + 0.08 * fine;
		c *= 1.0 - 0.12 * smoothstep(0.82, 0.95, vnoise(q * 9.0));
		return c;
	}`,i=`
	precision highp float;
	uniform mat4 proj, view;
	uniform float yScale;
	attribute vec3 position, normal;
	attribute float kind;
	attribute vec2 uv;
	varying vec3 v_pos, v_n, v_eye;
	varying float v_kind;
	varying vec2 v_uv;
	void main() {
		v_pos = position; v_n = normal; v_kind = kind; v_uv = uv;
		v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
		vec3 p = position; p.y *= yScale;
		gl_Position = proj * view * vec4(p, 1.0);
	}`,c=t({vert:i,frag:`${s}
		varying vec3 v_pos, v_n, v_eye;
		varying float v_kind;
		varying vec2 v_uv;
		void main() {
			vec3 N = normalize(v_n);
			if (!gl_FrontFacing) N = -N;
			vec3 V = normalize(v_eye - v_pos);
			float k = v_kind;
			vec3 base;
			float gloss = 0.08;
			if (k < 0.5) {
				// floor: the gallery's own chequered marble, carried through the
				// doorway on the same grid so the tiles run on without a break
				float tileSize = 0.62;
				vec2 tq = mat2(0.70711, 0.70711, -0.70711, 0.70711) * (v_pos.xz - vec2(7.0, 0.0));
				vec2 tile = floor(tq / tileSize);
				float checker = mod(tile.x + tile.y, 2.0);
				float rnd = hash(tile);
				vec3 lightTile = vec3(0.80, 0.74, 0.60) * (0.93 + 0.10 * rnd);
				vec3 darkTile = vec3(0.028, 0.026, 0.024) + vec3(0.012) * rnd;
				float vein = abs(sin(tq.x * 5.5 + tq.y * 2.0 + sin(tq.y * 1.6) + rnd * 6.0));
				vein = 1.0 - smoothstep(0.0, 0.09, vein);
				base = mix(lightTile, darkTile, checker);
				base = mix(base, base * 0.80, vein * 0.35 * (1.0 - checker));
				base = mix(base, base * 1.5 + 0.02, vein * 0.18 * checker);
				vec2 jt = abs(fract(tq / tileSize) - 0.5);
				base *= 1.0 - 0.25 * smoothstep(0.488, 0.498, max(jt.x, jt.y));
				// polished: it takes the candles and the oculus as a long sheen
				gloss = mix(0.55, 0.85, checker);
			} else if (k < 1.5) {
				// the walls: dressed limestone in courses (uv: metres round, up)
				vec2 q = v_uv;
				float row = floor(q.y / 0.62);
				float jx = abs(fract(q.x / 1.3 + row * 0.5 + 0.13) - 0.5);
				float jy = abs(fract(q.y / 0.62) - 0.5);
				float joint = q.y > 99.0 ? 0.0 : max(smoothstep(0.486, 0.497, jx), smoothstep(0.47, 0.49, jy));
				base = limestone(q * 0.9 + vec2(row * 3.1, row)) * 1.02;
				base *= 0.95 + 0.08 * hash(vec2(floor(q.x / 1.3 + row * 0.5 + 0.13), row));
				// tool marks across each block
				base *= 0.96 + 0.04 * sin(q.x * 70.0 + vnoise(q * 6.0) * 4.0);
				base *= 1.0 - 0.35 * joint;
				// higher up, sooted a little by the candles' smoke
				base *= 1.0 - 0.25 * smoothstep(3.0, ${Qn(x0)}, v_pos.y);
			} else if (k < 2.5) {
				// the steps: a greyer, harder stone, worn paler in the middle
				float r = length(v_pos.xz - vec2(${Qn(Ze.x)}, ${Qn(Ze.z)}));
				base = limestone(v_pos.xz * 1.4 + v_uv * 0.3) * vec3(0.90, 0.88, 0.86);
				base *= 1.0 + 0.10 * (1.0 - smoothstep(0.0, 0.6, abs(r - ${Qn((Ho.ri+Ho.ro)/2)})));
				gloss = 0.12;
			} else if (k < 4.5) {
				// the ribbon under the stair and its string: smooth, plastered,
				// paler than the walls
				base = vec3(0.78, 0.74, 0.67) * (0.96 + 0.06 * fbm(v_uv * 2.0));
				gloss = 0.05;
			} else if (k < 5.5) {
				base = vec3(0.50, 0.46, 0.40) * (0.9 + 0.1 * fbm(v_uv));
			} else if (k < 6.5) {
				// the sky through the oculus
				vec3 sky = mix(vec3(0.62, 0.62, 0.60), vec3(0.05, 0.075, 0.15), night);
				// iron glazing bars: a ring and spokes
				vec2 q = v_pos.xz - vec2(${Qn(Ze.x)}, ${Qn(Ze.z)});
				float rr = length(q), aa = atan(q.y, q.x);
				float bars = max(1.0 - smoothstep(0.012, 0.022, abs(rr - 0.62)), 1.0 - smoothstep(0.012, 0.022, abs(fract(aa / 6.2831 * 12.0) - 0.5) * rr * 0.52));
				sky *= 1.0 - 0.9 * bars;
				gl_FragColor = vec4(sky, 1.0);
				return;
			} else {
				// the surround, seen from the hall: its cream stone in the hall's light
				base = limestone(v_pos.zy * 1.1) * vec3(0.86, 0.84, 0.80);
				vec3 hall = vec3(1.25, 1.12, 0.94) * (0.62 + 0.38 * max(N.x, 0.0)) * (0.8 + 0.2 * N.y);
				vec3 c = base * (toNight(hall, 0.55) * mix(1.0, 0.55, night) + lanternLight(v_pos, N));
				// in the passage it falls into the room's own light
				if (N.x < 0.5) { vec3 s; c = mix(c, base * roomLight(v_pos, N, V, 0.0, s), 0.5); }
				gl_FragColor = vec4(c, 1.0);
				return;
			}
			vec3 spec;
			vec3 light = roomLight(v_pos, N, V, gloss, spec);
			vec3 col = base * light + spec * 0.6;
			// under the stair, and high up, a deeper dark
			col *= mix(0.55, 1.0, smoothstep(-0.95, -0.2, N.y));
			col = roomHaze(v_pos, v_eye, col);
			gl_FragColor = vec4(col, 1.0);
		}`,attributes:{position:e.pos,normal:e.nrm,kind:e.kind,uv:e.uv},elements:new Uint32Array(e.idx),cull:{enable:!1}}),h=t({vert:i,frag:`${s}
		varying vec3 v_pos, v_n, v_eye;
		varying float v_kind;
		varying vec2 v_uv;
		void main() {
			vec3 N = normalize(v_n);
			if (!gl_FrontFacing) N = -N;
			vec3 V = normalize(v_eye - v_pos);
			if (v_kind > 8.5) {
				// the iron: interlaced arcs, like the scales of a net
				vec2 q = v_uv;
				float h = 0.92;
				float y = q.y / h;
				float w = 0.018;
				// rails at the foot and under the handrail
				float bar = step(y, 0.07) * step(0.035, y) + step(0.955, y);
				// two families of curved bars crossing
				float P = 0.36;
				float s1 = (q.x + 0.18 * sin(y * 3.1416)) / P + y * 1.25;
				float s2 = (q.x - 0.18 * sin(y * 3.1416)) / P - y * 1.25;
				float d1 = abs(fract(s1) - 0.5) * P, d2 = abs(fract(s2) - 0.5) * P;
				float lattice = step(0.07, y) * step(y, 0.955) * (step(P * 0.5 - w, d1) + step(P * 0.5 - w, d2));
				if (bar + lattice < 0.5) discard;
			}
			vec3 base = vec3(0.018, 0.016, 0.015);
			vec3 spec;
			vec3 light = roomLight(v_pos, N, V, 0.6, spec);
			vec3 col = base * light + spec * 0.55;
			col = roomHaze(v_pos, v_eye, col);
			gl_FragColor = vec4(col, 1.0);
		}`,attributes:{position:o.pos,normal:o.nrm,kind:o.kind,uv:o.uv},elements:new Uint32Array(o.idx),cull:{enable:!1}}),f=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec3 position, normal, info;
		varying vec3 v_pos, v_n, v_eye, v_info;
		void main() {
			v_pos = position; v_n = normal; v_info = info;
			v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
			vec3 p = position; p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`${s}
		varying vec3 v_pos, v_n, v_eye, v_info;
		void main() {
			vec3 N = normalize(v_n);
			vec3 V = normalize(v_eye - v_pos);
			// v_info: 0 at the foot .. 1 at the rim, 2 the wick's dish; height; phase
			float t = v_info.x;
			float ph = v_info.z;
			// no two candles are the same wax: ivory, cream, a few yellowed
			vec3 base = mix(vec3(0.88, 0.83, 0.72), vec3(0.80, 0.70, 0.50), fract(ph * 0.371));
			// wax that has run down the side and set: paler ridges, each
			// ending in a bead, more of them on a candle that has burned low
			float ang = atan(N.z, N.x);
			float run = vnoise(vec2(ang * 3.2 + ph, ph * 7.0));
			float len = 0.25 + 0.75 * vnoise(vec2(ang * 3.2 + ph + 9.0, 2.0));
			float drip = smoothstep(0.58, 0.72, run) * smoothstep(1.0 - len, 1.0 - len + 0.08, t) * step(t, 1.5);
			float bead = smoothstep(0.58, 0.75, run) * (1.0 - smoothstep(0.0, 0.07, abs(t - (1.0 - len)))) * step(t, 1.5);
			N = normalize(N + vec3(-sin(ang), 0.0, cos(ang)) * (vnoise(vec2(ang * 3.2 + ph + 0.15, ph * 7.0)) - run) * 2.5 * drip);
			base = mix(base, base * 1.12 + 0.03, drip * 0.7);
			vec3 spec;
			vec3 light = roomLight(v_pos, N, V, 0.35, spec);
			vec3 col = base * light + spec * (0.35 + 0.6 * bead + 0.25 * drip);
			// each flame gutters to its own rhythm (three unrelated beats,
			// and now and then it nearly goes out and catches again)
			float fl = 0.80 + 0.12 * sin(time * 9.0 + ph * 3.0) * sin(time * 2.3 + ph) + 0.08 * sin(time * 17.0 + ph * 5.0);
			fl *= 1.0 - 0.45 * smoothstep(0.93, 1.0, sin(time * 0.7 + ph * 13.0));
			// the wax is lit from inside by its flame: brightest in the rim,
			// reddening as the light sinks down through it
			float depth = v_info.y * (1.0 - t);
			float glow = t > 1.5 ? 1.0 : smoothstep(0.30, 0.0, depth);
			vec3 inner = mix(vec3(1.0, 0.34, 0.08), vec3(1.0, 0.70, 0.36), smoothstep(0.12, 0.0, depth));
			col += inner * glow * glow * 0.95 * fl;
			// the pool of melted wax round the wick: clear, dark at the wick,
			// with one small bright point of the flame in it
			if (t > 1.5) {
				col = mix(col, vec3(1.0, 0.78, 0.45) * 1.1 * fl, 0.55);
			}
			col = roomHaze(v_pos, v_eye, col);
			gl_FragColor = vec4(col, 1.0);
		}`,attributes:{position:r.pos,normal:r.nrm,info:r.info},elements:new Uint32Array(r.idx),cull:{enable:!1}}),d=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float time, halo;
		attribute vec3 ctr;
		attribute vec2 corner;
		attribute float ph;
		varying vec2 v_uv;
		varying float v_fl, v_lean, v_ph;
		void main() {
			vec3 right = vec3(view[0][0], view[1][0], view[2][0]);
			// a flame is never still: it stretches and shrinks, leans with
			// the air in the room (a slow draught they all share, plus each
			// one's own tremble), and now and then gutters low
			float fl = 0.80 + 0.12 * sin(time * 9.0 + ph * 3.0) * sin(time * 2.3 + ph) + 0.08 * sin(time * 17.0 + ph * 5.0);
			float gutter = smoothstep(0.93, 1.0, sin(time * 0.7 + ph * 13.0));
			fl *= 1.0 - 0.45 * gutter;
			float draught = sin(time * 0.31 + ctr.x * 0.9 + ctr.z * 0.6) * 0.6 + sin(time * 0.83 + ctr.z * 1.7) * 0.4;
			float lean = draught * 0.55 + 0.45 * sin(time * 3.1 + ph * 5.0) + gutter * sin(time * 23.0 + ph) * 0.8;
			// (each candle's flame is its own size)
			float size = 0.8 + 0.5 * fract(ph * 0.618);
			float w = halo > 0.5 ? 0.10 : 0.0105 * size;
			float h = halo > 0.5 ? 0.10 : 0.040 * size * (0.7 + 0.45 * fl);
			vec3 c = ctr + vec3(0.0, halo > 0.5 ? 0.016 : 0.004, 0.0);
			vec3 p = c + right * corner.x * w + vec3(0.0, (halo > 0.5 ? corner.y * 2.0 - 1.0 : corner.y) * h, 0.0);
			v_uv = corner; v_fl = fl; v_lean = lean; v_ph = ph;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`
		precision highp float;
		uniform float halo, night, time;
		varying vec2 v_uv;
		varying float v_fl, v_lean, v_ph;
		void main() {
			if (halo > 0.5) {
				// the glow in the air round it: tight and hot at the flame,
				// wide and faint beyond
				vec2 d = vec2(v_uv.x, v_uv.y * 2.0 - 1.0);
				float r2 = dot(d, d);
				float g = (exp(-r2 * 22.0) * 0.30 + exp(-r2 * 4.5) * 0.11) * v_fl;
				gl_FragColor = vec4(vec3(1.0, 0.50, 0.17) * g, 1.0);
				return;
			}
			float y = v_uv.y;
			// the tip bends with the air, and wavers
			float bend = clamp(v_lean, -1.2, 1.2) * 0.26 * y * y + 0.06 * sin(time * 13.0 + v_ph * 7.0 + y * 6.0) * y;
			float x = v_uv.x - bend;
			// a teardrop: full low down, drawn out to a point at the top
			float wid = pow(max(0.0, y * (1.0 - y)) * 4.0, 0.55) * (1.0 - 0.62 * y) * 0.78;
			float ax = abs(x);
			float body = 1.0 - smoothstep(wid * 0.45, wid, ax);
			body *= smoothstep(0.0, 0.10, y);
			// inside it: almost clear and blue where it leaves the wick, a
			// dark heart just above, then the bright yellow body, and a
			// thin orange skin at the edge and the tip
			float k = ax / max(wid, 1e-3);
			vec3 yellow = vec3(1.0, 0.86, 0.50);
			vec3 orange = vec3(1.0, 0.46, 0.10);
			vec3 col = mix(yellow, orange, smoothstep(0.35, 1.0, k) * 0.8 + smoothstep(0.55, 1.0, y) * 0.6);
			float dark = (1.0 - smoothstep(0.0, 0.5, k)) * (1.0 - smoothstep(0.10, 0.36, y));
			col = mix(col, vec3(0.30, 0.12, 0.03), dark * 0.75);
			float root = 1.0 - smoothstep(0.03, 0.20, y);
			col = mix(col, vec3(0.22, 0.34, 0.95), root * 0.85);
			float bright = mix(3.4, 1.1, root) * (0.75 + 0.35 * v_fl);
			// the wick: a short dark curl standing in the root of the flame
			float wick = (1.0 - smoothstep(0.02, 0.07, abs(v_uv.x - 0.10 * y))) * (1.0 - smoothstep(0.10, 0.20, y));
			gl_FragColor = vec4(col * body * bright * (1.0 - 0.9 * wick), 1.0);
		}`,attributes:{ctr:n.ctr,corner:n.corner,ph:n.ph},elements:new Uint32Array(n.idx),uniforms:{halo:t.prop("halo")},depth:{enable:!0,mask:!1},cull:{enable:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),u=null;fetch("res/piano.bin").then(m=>{if(!m.ok)throw new Error("Could not load piano.bin");return m.arrayBuffer()}).then(m=>{let g=t_(m);u=t({vert:`
				precision highp float;
				uniform mat4 proj, view;
				uniform float yScale;
				attribute vec3 position, normal;
				attribute float mat;
				varying vec3 v_pos, v_n, v_eye;
				varying float v_mat;
				void main() {
					v_pos = position; v_n = normal; v_mat = mat;
					v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
					vec3 p = position; p.y *= yScale;
					gl_Position = proj * view * vec4(p, 1.0);
				}`,frag:`${s}
				varying vec3 v_pos, v_n, v_eye;
				varying float v_mat;
				void main() {
					vec3 N = normalize(v_n);
					if (!gl_FrontFacing) N = -N;
					vec3 V = normalize(v_eye - v_pos);
					float m = v_mat;
					vec3 base; float gloss; float refl = 0.0;
					if (m < 0.5) { base = vec3(0.010, 0.009, 0.009); gloss = 0.95; refl = 1.0; }          // black lacquer
					else if (m < 1.5) { base = vec3(0.46, 0.33, 0.13); gloss = 0.7; }                     // the gilded iron frame, strings
					else if (m < 2.5) { base = vec3(0.42, 0.26, 0.12) * (0.85 + 0.15 * vnoise(v_pos.xz * vec2(40.0, 3.0))); gloss = 0.3; }   // soundboard
					else if (m < 3.5) { base = vec3(0.80, 0.77, 0.68); gloss = 0.5; }                     // ivory keys
					else if (m < 4.5) { base = vec3(0.015, 0.013, 0.012); gloss = 0.7; }                  // ebony keys
					else if (m < 5.5) { base = vec3(0.025, 0.020, 0.018); gloss = 0.35; }                 // the bench's leather
					else { base = vec3(0.30, 0.24, 0.12); gloss = 0.8; }                                  // brass casters
					vec3 spec;
					vec3 light = roomLight(v_pos, N, V, gloss, spec);
					vec3 col = base * light + spec * (m < 0.5 ? 1.4 : 0.8);
					if (refl > 0.5) {
						// the lacquer mirrors the sea of candles: a warm, broken glitter
						// low down, the dark room above
						vec3 Rv = reflect(-V, N);
						float low = smoothstep(0.25, -0.15, Rv.y);
						vec2 dir = Rv.xz / max(0.15, length(Rv.xz));
						float sparkle = pow(vnoise(dir * 38.0 + Rv.y * 25.0), 6.0) * 4.0 + pow(vnoise(dir * 90.0 + 3.0), 10.0) * 6.0;
						float fres = 0.05 + 0.95 * pow(1.0 - max(dot(N, V), 0.0), 5.0);
						col += vec3(1.0, 0.55, 0.20) * (low * (0.05 + sparkle * 0.25)) * (0.4 + fres * 1.6);
						col += mix(vec3(0.05, 0.045, 0.04), vec3(0.015, 0.02, 0.035), night) * fres * smoothstep(-0.1, 0.6, Rv.y);
					}
					col = roomHaze(v_pos, v_eye, col);
					gl_FragColor = vec4(col, 1.0);
				}`,attributes:{position:g.pos,normal:g.nrm,mat:g.mat},elements:g.idx,cull:{enable:!1}})}).catch(m=>console.error(m));let v=(()=>{let m=[],g=[],x=[],y=[],_=[Ze.x,x0-.3,Ze.z],M=[Sl.stoolX,.02,Sl.keyFront+.1],k=1.25,R=2.35;for(let A=0;A<=40;A++){let F=A/40*2*Vo,C=Math.cos(F),H=Math.sin(F);m.push(_[0]+C*k,_[1],_[2]+H*k,M[0]+C*R,M[1],M[2]+H*R),g.push(C,.08,H,C,.08,H),x.push(1,0)}for(let A=0;A<40;A++){let F=A*2;y.push(F,F+1,F+3,F,F+3,F+2)}return{pos:m,nrm:g,hh:x,idx:y}})(),l=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		attribute vec3 position, normal;
		attribute float hh;
		varying vec3 v_pos, v_n, v_eye;
		varying float v_h;
		void main() {
			v_pos = position; v_n = normal; v_h = hh;
			v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
			gl_Position = proj * view * vec4(position, 1.0);
		}`,frag:`
		precision highp float;
		uniform float night, time;
		varying vec3 v_pos, v_n, v_eye;
		varying float v_h;
		float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
		float vnoise(vec2 p) {
			vec2 i = floor(p), f = fract(p);
			vec2 u = f * f * (3.0 - 2.0 * f);
			return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
		}
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			// thick where you look through the middle of it, nothing at its edge
			float thick = pow(abs(dot(normalize(v_n), V)), 1.6);
			float wisps = 0.55 + 0.45 * vnoise(vec2(atan(v_n.z, v_n.x) * 2.0 + time * 0.03, v_pos.y * 0.35 - time * 0.05));
			float fade = smoothstep(0.0, 0.12, v_h) * (0.45 + 0.55 * v_h);
			vec3 col = mix(vec3(1.0, 0.93, 0.82) * 0.030, vec3(0.50, 0.66, 1.0) * 0.060, night);
			gl_FragColor = vec4(col * thick * wisps * fade, 1.0);
		}`,attributes:{position:v.pos,normal:v.nrm,hh:v.hh},elements:v.idx,depth:{enable:!0,mask:!1},cull:{enable:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});function p(m){let g=m&&m.reflected;c(),h(),f(),u&&u(),g||(l(),d({halo:1}),d({halo:0}))}return p};er.exports.C=Ze;er.exports.R=go;er.exports.PASS=ze;er.exports.SURR=ua;er.exports.OFF=mh;er.exports.BAY=On;er.exports.PATH=vh;er.exports.PIANO=mn;er.exports.PLAY=Sl;er.exports.TOP=x0;er.exports.roomGLSL=x2;er.exports.segments=e_});var T2=At((q7,A2)=>{"use strict";var o_=Gs(),{addFlutedColumn:b2,addStatue:n_,addPlant:r_}=Xm(),w2=Ya(),a_=Qi(),Xr=k0(),s_=Nr(),sc=es(),Co=14,Pn=Xr.C.hallEnd+.35,Zo=8,Bo=.35,Vu=1.15,Xu=1.15,Yu=[18,29,40],i_=[[[0,0],[0,sc.PASS.z0]],[[0,sc.PASS.z1],[0,Pn]],[[Co,Pn],[Co,0]],[[0,0],[Co,0]],[[Co,Pn],[0,Pn]]],S2=[];for(let t of Yu)for(let e of[1.25,Co-1.25]){let o=Vu/2,r=Xu/2;S2.push([[e-o,t-r],[e+o,t-r]],[[e+o,t-r],[e+o,t+r]],[[e+o,t+r],[e-o,t+r]],[[e-o,t+r],[e-o,t-r]])}var xh=12,E2=2.95,z2=.62,wh=E2+z2,yh=[{file:"venus.bin",x:1.85,z:Pn-1.6,yaw:2.67,height:5.2,pedestal:!0,mat:1},{file:"david.bin",x:Co-2.1,z:Pn-1.6,yaw:-2.67,height:5.2,pedestal:!0,mat:1},{file:"pieta.bin",x:1.75,z:5.9,yaw:Math.PI/2,height:3.6,base:1,mat:1},{file:"spinario.bin",x:Xr.NICHE_X[0],z:Xr.NICHE_STATUE_Z,yaw:-.35,height:1.85,base:Xr.NICHE_PLINTH_TOP,mat:3},{file:"charioteer.bin",x:Xr.NICHE_X[1],z:Xr.NICHE_STATUE_Z+.1,yaw:0,height:2.95,base:Xr.NICHE_PLINTH_TOP,mat:3}],c_={x0:Bo,x1:3.15,z0:3.6,z1:8.2,top:1},_2=.8,_h=1.17,El=[];[{z:10.4,dz:-.7},{z:19.2,dz:.7},{z:27.8,dz:-.7}].forEach((t,e)=>{El.push({x:1,z:t.z,seed:11+e*7,away:[1,t.dz]}),El.push({x:Co-1,z:t.z,seed:53+e*5,away:[-1,t.dz]})});function Ku(t,e,o,r){return[[[t-o,e-r],[t+o,e-r]],[[t+o,e-r],[t+o,e+r]],[[t+o,e+r],[t-o,e+r]],[[t-o,e+r],[t-o,e-r]]]}var Mh=[];for(let t of[-1,1])Mh.push(...Ku(Co/2+t*wh,xh,.85,.85));for(let t of yh.filter(e=>e.pedestal))Mh.push(...Ku(t.x,t.z,_h*1.1,_h*1.1));for(let t of El)Mh.push(...Ku(t.x,t.z,.42,.42));var l_=i_.concat(S2,Mh,sc.segments());function f_(t){let o=new Map,r=(n,a,s)=>{let i=n+":"+a;o.has(i)||o.set(i,[]);let c=o.get(i);c.includes(s)||c.push(s)};for(let n of t){let a=Math.floor(Math.min(n[0][0],n[1][0])/4)-1,s=Math.floor(Math.max(n[0][0],n[1][0])/4)+1,i=Math.floor(Math.min(n[0][1],n[1][1])/4)-1,c=Math.floor(Math.max(n[0][1],n[1][1])/4)+1;for(let h=a;h<=s;h++)for(let f=i;f<=c;f++)r(h,f,n)}return{get(n,a){let s=Math.floor(n/4),i=Math.floor(a/4),c=[];for(let h=-1;h<=1;h++)for(let f=-1;f<=1;f++){let d=o.get(s+h+":"+(i+f));d&&c.push(...d)}return[...new Set(c)]}}}var bh=[],Cn={curMat:[0,0,0]};function Qu(t,e,o,r,n,a,s){let i=t.length/3;t.push(...o,...r,...n,...a),e.push(...s,...s,...s,...s);let c=Cn.curMat;return bh.push(...c,...c,...c,...c),[i,i+2,i+1,i+1,i+2,i+3]}function Uo(t,e,o,r,n,a,s,i,c){let h=(f,d,u,v,l)=>{o.push(...Qu(t,e,f,d,u,v,l))};h([r,n,a],[s,n,a],[r,i,a],[s,i,a],[0,0,-1]),h([s,n,c],[r,n,c],[s,i,c],[r,i,c],[0,0,1]),h([r,n,c],[r,n,a],[r,i,c],[r,i,a],[-1,0,0]),h([s,n,a],[s,n,c],[s,i,a],[s,i,c],[1,0,0]),h([r,i,a],[s,i,a],[r,i,c],[s,i,c],[0,1,0]),h([r,n,c],[s,n,c],[r,n,a],[s,n,a],[0,-1,0])}function ac(t,e,o,r,n){let a=Cn,s=a.vert(t,n),i=a.vert(e,n),c=a.vert(o,n),h=a.vert(r,n);a.tri(s,i,c),a.tri(i,h,c)}function M2(t,e,o,r,n,a,s){for(let i=0;i<s;i++){let c=Math.PI*i/s,h=Math.PI*(i+1)/s,f=Math.cos(c),d=Math.sin(c),u=Math.cos(h),v=Math.sin(h),l=[t+o*f,e+o*d],p=[t+o*u,e+o*v],m=[t+r*f,e+r*d],g=[t+r*u,e+r*v];ac([l[0],l[1],n],[p[0],p[1],n],[m[0],m[1],n],[g[0],g[1],n],[0,0,-1]),ac([l[0],l[1],a],[p[0],p[1],a],[m[0],m[1],a],[g[0],g[1],a],[0,0,1]);let x=(c+h)/2;ac([l[0],l[1],n],[p[0],p[1],n],[l[0],l[1],a],[p[0],p[1],a],[-Math.cos(x),-Math.sin(x),0]),ac([m[0],m[1],n],[g[0],g[1],n],[m[0],m[1],a],[g[0],g[1],a],[Math.cos(x),Math.sin(x),0])}}function h_(t,e,o,r,n,a,s){for(let i=0;i<s;i++){let c=Math.PI*i/s,h=Math.PI*(i+1)/s,f=t+o*Math.cos(c),d=e+o*Math.sin(c),u=t+o*Math.cos(h),v=e+o*Math.sin(h);ac([f,d,n],[u,v,n],[f,r,n],[u,r,n],[0,0,-1]),ac([f,d,a],[u,v,a],[f,r,a],[u,r,a],[0,0,1])}}function u_(t,e,o,r){let n=Co/2,a=E2,s=3,i=a+.42,c=i+.15,h=z2,f=wh,d=5.98,u=r-.45,v=r+.45,l=64,p=b2(Cn,n-f,r,0,d,h);b2(Cn,n+f,r,0,d,h),Cn.curMat=[0,0,0],M2(n,s,a,i,u,v,l),M2(n,s,i,c,u-.07,v+.07,l),h_(n,s,c,p+.05,u,v,l);for(let g of[-1,1]){let x=n+g*(c-.02),y=n+g*f;Uo(t,e,o,Math.min(x,y),s,u,Math.max(x,y),p+.05,v)}for(let g of[-1,1]){let x=n+g*(a-.05),y=n+g*(a+.85);Uo(t,e,o,Math.min(x,y),s-.16,r-.6,Math.max(x,y),s,r+.6)}let m=f+h*1.42+.45;Uo(t,e,o,n-m,p,r-.7,n+m,p+.44,r+.7),Uo(t,e,o,n-m+.12,p+.44,r-.62,n+m-.12,p+.7,r+.62),Uo(t,e,o,n-m-.1,p+.7,r-.84,n+m+.1,p+.84,r+.84),Uo(t,e,o,n-m-.22,p+.84,r-.96,n+m+.22,p+1,r+.96),Uo(t,e,o,n-.3,s+a-.1,r-.56,n+.3,p,r+.56)}function k2(t,e,o,r,n){Uo(t,e,o,r-.72,0,n-.72,r+.72,.2,n+.72),Uo(t,e,o,r-.58,.2,n-.58,r+.58,.4,n+.58),Uo(t,e,o,r-Vu/2,.4,n-Xu/2,r+Vu/2,Zo-1.35,n+Xu/2),Uo(t,e,o,r-.67,.42,n-.67,r+.67,.62,n+.67),Uo(t,e,o,r-.67,Zo-1.58,n-.67,r+.67,Zo-1.35,n+.67),Uo(t,e,o,r-.82,Zo-1.35,n-.82,r+.82,Zo-1.05,n+.82),Uo(t,e,o,r-.66,Zo-1.05,n-.66,r+.66,Zo-.78,n+.66),Uo(t,e,o,r-.92,Zo-.78,n-.92,r+.92,Zo-.55,n+.92),Uo(t,e,o,r-.78,Zo-.55,n-.78,r+.78,Zo-.3,n+.78),Uo(t,e,o,r-.92,Zo-.3,n-.92,r+.92,Zo-.1,n+.92)}function gh(t,e,o,r,n){n==="left"?(Uo(t,e,o,-.08,1,r-3.8/2,.14,5.7,r+3.8/2),Uo(t,e,o,-.08-.04,1+.18,r-3.8/2+.18,.18,5.7-.18,r+3.8/2-.18)):(Uo(t,e,o,Co-.14,1,r-3.8/2,Co+.08,5.7,r+3.8/2),Uo(t,e,o,Co-.18,1+.18,r-3.8/2+.18,Co+.08+.04,5.7-.18,r+3.8/2-.18))}function d_(t,e,o,r){Uo(t,e,o,.65,Zo-.16,r-1.65,.65+.22,Zo,r+1.65),Uo(t,e,o,Co-.65-.22,Zo-.16,r-1.65,Co-.65,Zo,r+1.65),Uo(t,e,o,.65,Zo-.16,r-1.65,Co-.65,Zo,r-1.43),Uo(t,e,o,.65,Zo-.16,r+1.43,Co-.65,Zo,r+1.65),o.push(...Qu(t,e,[.65+.22,Zo-.16,r-1.43],[Co-.65-.22,Zo-.16,r-1.43],[.65+.22,Zo-.16,r+1.43],[Co-.65-.22,Zo-.16,r+1.43],[0,-1,0]))}A2.exports=function(){let t=[],e=[],o=[];bh=[],Cn=o_.createBuilder(t,e,o,bh),o.push(...Qu(t,e,[0,0,0],[Co,0,0],[0,0,Pn],[Co,0,Pn],[0,1,0])),a_.addSkylight(Cn,[0,0,0],Pn),Cn.curMat=[0,0,0];{let c=sc.SURR;Uo(t,e,o,-Bo,0,0,Bo,Zo,c.z0),Uo(t,e,o,-Bo,0,c.z1,Bo,Zo,Pn),Uo(t,e,o,-Bo,c.top,c.z0,Bo,Zo,c.z1)}Uo(t,e,o,Co-Bo,0,Xr.C.z1,Co+Bo,Zo,Pn-Bo),Uo(t,e,o,Co-Bo-.12,0,Xr.C.z1+2*Bo,Co-Bo,.42,Pn-Bo),Uo(t,e,o,Co-Bo-.07,.42,Xr.C.z1+2*Bo,Co-Bo,.5,Pn-Bo);for(let[c,h]of[[0,sc.SURR.z0],[sc.SURR.z1,Pn-Bo]])Uo(t,e,o,Bo,0,c,Bo+.12,.42,h),Uo(t,e,o,Bo,.42,c,Bo+.07,.5,h);Uo(t,e,o,Bo,0,Pn-Bo-.12,Co-Bo,.42,Pn-Bo),Uo(t,e,o,Bo,.42,Pn-Bo-.07,Co-Bo,.5,Pn-Bo),w2.addEntranceWall(Cn),w2.addFrames(Cn),Cn.curMat=[0,0,0],Uo(t,e,o,-Bo,0,Pn-Bo,Co+Bo,Zo,Pn+Bo),u_(t,e,o,xh);for(let c of Yu)k2(t,e,o,1.25,c),k2(t,e,o,Co-1.25,c);gh(t,e,o,22,"left"),gh(t,e,o,25,"right"),gh(t,e,o,33,"left"),gh(t,e,o,36,"right");let r=[4,9,34,39,44,49];for(let c of r)d_(t,e,o,c);Xr.addWing(Cn),Cn.curMat=[0,0,0];for(let c of yh.filter(h=>h.pedestal))n_(Cn,c.x,c.z,_h,_2);{let c=c_;Cn.curMat=[0,0,0],Cn.box(c.x0,0,c.z0-.08,c.x1+.08,.16,c.z1+.08,[0,0,0]),Cn.box(c.x0,.16,c.z0+.04,c.x1-.04,c.top-.14,c.z1-.04,[0,0,0]),Cn.box(c.x0,c.top-.14,c.z0-.02,c.x1+.03,c.top-.06,c.z1+.02,[0,0,0]),Cn.box(c.x0,c.top-.06,c.z0-.06,c.x1+.07,c.top,c.z1+.06,[0,0,0])}s_.addAlcove(Cn);for(let c of El)r_(Cn,c.x,c.z,c.seed,1,c.away);Cn.curMat=[0,0,0];let n=[[[Co,Pn-.35],[0,Pn-.35]],[[0,3],[0,10]],[[Co,15],[Co,22]],[[0,24],[0,31]],[[Co,33],[Co,40]],[[0,41],[0,46]]],a=f_(l_),s=(c,h)=>{let f=0,d=1/0;return n.forEach((u,v)=>{let l=(u[0][0]+u[1][0])/2,p=(u[0][1]+u[1][1])/2,m=Math.hypot(c-l,h-p);m<d&&(d=m,f=v)}),f},i=[];for(let c=0;c<10;c++)i.push({c:[0,0,0,0],d:[1,0,0,0]});return{placements:n,lights:i,statues:yh,occluders:[...Yu.flatMap(c=>[[1.25,c,.78],[Co-1.25,c,.78]]),[Co/2-wh,xh,.86],[Co/2+wh,xh,.86],...yh.filter(c=>c.pedestal).map(c=>[c.x,c.z,_h*1.12]),...El.map(c=>[c.x,c.z,.34])],pedestalTop:_2,mat:bh,getAreaIndex:s,getGridSegments:(c,h)=>a.get(c,h),getGridParts:(c,h)=>a.get(c,h),position:t,normal:e,elements:o}}});var Zu=At((D7,L2)=>{"use strict";var{doorLightGLSL:p_}=Ya(),{skylightGLSL:v_}=Qi(),{windowLightGLSL:m_,C:pr}=k0(),{alcoveLightGLSL:g_}=Nr(),Rr=t=>t.toFixed(4),x_=(()=>{let t=[-.22,.6,-.77],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>(o/e).toFixed(4)).join(", ")})();L2.exports=(t,e,o,r)=>{let a=(e.occluders||[]).slice(0,24).map(([v,l,p])=>`ao = min(ao, contact(v_pos.xz, vec2(${v.toFixed(3)}, ${l.toFixed(3)}), ${p.toFixed(3)}));`).join(`
      `),s={c:[0,0,0,0],d:[1,0,0,0]},i=-1,c=[],h=v=>{let l=v&&v.tick!==void 0?v.tick:0;if(l!==i||c.length===0){i=l;let p=e.viewer||[7,2,20];for(c=e.lights.filter(m=>m.c[3]>.5).map(m=>({l:m,d:Math.hypot(m.c[0]-p[0],m.c[2]-p[2])})).sort((m,g)=>m.d-g.d).slice(0,8).map(m=>m.l);c.length<8;)c.push(s)}return c},f={},d="",u="";for(let v=0;v<8;v++)f["lightC"+v]=l=>h(l)[v].c,f["lightD"+v]=l=>h(l)[v].d,d+="uniform vec4 lightC"+v+", lightD"+v+`;
`,u+="pic += pictureLight(lightC"+v+", lightD"+v+`, v_pos, N);
`;return t({frag:`
    precision highp float;

    uniform float yScale;
    uniform float mirrorOn;
    uniform float night;   // 0 by day, 1 at night
    uniform float time;
    ${Za().lanternGLSL()}

    varying vec3 v_pos;
    varying vec3 v_relativepos;
    varying vec3 v_normal;
    varying vec3 v_eye;
    varying vec3 v_mat;

    ${d}

    // ---------------------------------------------------------
    // SMALL NOISE TOOLKIT
    // ---------------------------------------------------------

    float hash12(vec2 p) {
      vec3 p3 = fract(vec3(p.x, p.y, p.x) * 0.1031);
      p3 += dot(p3, p3.yzx + 33.33);
      return fract((p3.x + p3.y) * p3.z);
    }

    float vnoise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      f = f * f * (3.0 - 2.0 * f);
      return mix(
        mix(hash12(i), hash12(i + vec2(1.0, 0.0)), f.x),
        mix(hash12(i + vec2(0.0, 1.0)), hash12(i + vec2(1.0, 1.0)), f.x),
        f.y
      );
    }

    float fbm(vec2 p) {
      float s = 0.0;
      float a = 0.5;
      for (int i = 0; i < 3; i++) {
        s += a * vnoise(p);
        p = p * 2.03 + vec2(1.7, 9.2);
        a *= 0.5;
      }
      return s;
    }

    float fadeFar(float a, float b, float x) {
      return 1.0 - smoothstep(a, b, x);
    }

    ${p_()}

    ${v_()}

    ${m_()}

    ${g_()}

    vec3 skyAbove(vec3 dir) {
      float h = clamp(dir.y, 0.0, 1.0);
      vec3 col = mix(vec3(0.80, 0.86, 0.92), vec3(0.42, 0.60, 0.86), smoothstep(0.55, 1.0, h));
      vec2 cp = dir.xz / max(dir.y, 0.2) * 1.6;
      float c = smoothstep(0.50, 0.78, fbm(cp * 0.7 + vec2(3.1, 7.4)));
      vec3 day = mix(col, vec3(0.97, 0.96, 0.93), c * 0.65);
      // night: deep blue, lit by the moon, with thin silver cloud
      // (no painted stars: they read as specks on the glass)
      vec3 nsky = mix(vec3(0.05, 0.07, 0.12), vec3(0.018, 0.028, 0.06), smoothstep(0.3, 1.0, h));
      nsky = mix(nsky, vec3(0.20, 0.23, 0.30), c * 0.5);
      return mix(day, nsky, night);
    }

    // soft darkening of the floor around something standing on it
    float contact(vec2 p, vec2 c, float r) {
      float d = length(p - c) - r;
      return mix(0.55, 1.0, smoothstep(-0.05, 0.75, d));
    }

    float bell(float x) {
      return exp(-x * x);
    }

    // 2D texture coordinates picked from the dominant axis of the face
    vec2 planeUV(vec3 p, vec3 n) {
      vec3 a = abs(n);
      if (a.x > 0.5) return p.zy;
      if (a.z > 0.5) return p.xy;
      return p.xz;
    }

    // ---------------------------------------------------------
    // PICTURE LIGHT
    // A slim bar hung above the frame. It throws a soft pool of
    // light down the wall and over the painting.
    // ---------------------------------------------------------

    float pictureLight(vec4 C, vec4 D, vec3 p, vec3 n) {
      if (C.w < 0.5) return 0.0;

      float along = dot(p - C.xyz, D.xyz);
      vec3 closest = C.xyz + D.xyz * clamp(along, -D.w, D.w);

      vec3 L = closest - p;
      float d = length(L) + 0.001;
      L /= d;

      float ndl = max(dot(n, L), 0.0);
      float atten = 1.0 / (1.0 + d * d / 5.0);

      // shines downwards only and stays close to its own painting
      float below = smoothstep(-0.05, 0.60, C.y - p.y);
      float side = 1.0 - smoothstep(D.w + 0.3, D.w + 2.4, abs(along));

      return pow(ndl, 0.6) * atten * below * side;
    }

    void main() {

      vec3 N = normalize(v_normal);
      vec3 V = normalize(v_eye - v_pos);
      float dist = length(v_relativepos);

      // The mirrored floor pass skips the expensive noise detail.
      bool detail = yScale > 0.0;

      // ---------------------------------------------------------
      // SURFACE CLASSIFICATION
      // ---------------------------------------------------------

      // Material ids (see decor.js)
      float matId = v_mat.x;
      float isObj = step(0.5, matId);
      float isStatue = step(0.5, matId) * step(matId, 1.5);
      float isLeaf = step(1.5, matId) * step(matId, 2.5);
      float isPot = step(2.5, matId) * step(matId, 3.5);
      float isStem = step(3.5, matId) * step(matId, 4.5);
      float isSoil = step(4.5, matId) * step(matId, 5.5);
      float isFluted = step(6.5, matId) * step(matId, 7.5);
      float isSteel = step(7.5, matId) * step(matId, 8.5);
      float isSky = step(8.5, matId) * step(matId, 9.5);
      float isCream = step(9.5, matId) * step(matId, 10.5);

      // Floor: an upward face lying at y = 0 (not column bases)
      float isFloor =
        step(0.99, N.y) *
        (1.0 - smoothstep(0.01, 0.05, abs(v_pos.y))) *
        (1.0 - isObj);

      // Ceiling and coffer undersides
      float isCeiling =
        step(N.y, -0.9) * step(6.5, v_pos.y);

      // The four plain room walls (plaster). Everything else that is
      // vertical (pillars, arch, skirting) is marble.
      float isShell = clamp(
        step(abs(v_pos.x - 0.35), 0.02) * step(0.5, N.x) +
        step(abs(v_pos.x - 13.65), 0.02) * step(0.5, -N.x) +
        step(abs(v_pos.z - ${Rr(pr.hallEnd)}), 0.02) * step(0.5, -N.z) +
        step(abs(v_pos.z - 0.35), 0.02) * step(0.5, N.z) +
        step(10.5, matId) * step(matId, 11.5),
        0.0, 1.0);


      // ---------------------------------------------------------
      // MATERIAL PALETTE (warm greige, like the reference gallery)
      // ---------------------------------------------------------

      vec3 plaster      = vec3(0.71, 0.65, 0.54);
      vec3 plasterShade = vec3(0.60, 0.54, 0.44);
      vec3 marbleBase   = vec3(0.79, 0.74, 0.64);
      vec3 marbleVein   = vec3(0.46, 0.41, 0.34);
      vec3 ceilingMat   = vec3(0.56, 0.51, 0.42);

      vec3 tileLight    = vec3(0.80, 0.74, 0.60);   // darker cream instead of white
      vec3 tileDark     = vec3(0.028, 0.026, 0.024);


      // ---------------------------------------------------------
      // WALL / PILLAR MATERIAL
      // ---------------------------------------------------------

      vec2 uv = planeUV(v_pos, N);

      // the round fluted shafts carry their own texture coordinates
      uv = mix(uv, v_mat.yz, isFluted);

      // Plaster: soft mottled limestone wash
      vec3 wallMaterial = plaster;
      if (detail && isShell > 0.5) {
        float mott = fbm(uv * 0.9);
        float cloud = fbm(uv * 2.6 + 4.0);
        wallMaterial = mix(plaster, plasterShade, smoothstep(0.35, 0.75, mott) * 0.55);
        wallMaterial *= 0.95 + 0.10 * cloud;
        // hand-finished plaster: broad, very gentle unevenness, a hint
        // of trowel strokes, and a little grime along the foot of the wall
        float broad = vnoise(uv * 0.22 + 11.0);
        wallMaterial *= 0.955 + 0.09 * broad;
        float trowel = vnoise(vec2(uv.x * 1.6 + uv.y * 0.5, uv.y * 7.0)) * fadeFar(4.0, 14.0, dist);
        wallMaterial *= 0.985 + 0.03 * trowel;
        wallMaterial *= mix(0.88, 1.0, smoothstep(0.05, 0.9, v_pos.y));
      }

      // Marble: warped veins with a cloudy body
      vec3 marbleMaterial = marbleBase;
      if (detail && isShell < 0.5 && isFloor < 0.5) {
        vec2 m = uv * 1.3;
        float warp = fbm(m * 0.8);
        float v1 = abs(sin((m.x * 0.8 + m.y * 1.7) * 2.2 + warp * 7.0));
        float v2 = abs(sin((m.x * 1.9 - m.y * 0.6) * 4.5 + warp * 11.0));
        float line1 = 1.0 - smoothstep(0.0, 0.10, v1);
        float line2 = 1.0 - smoothstep(0.0, 0.05, v2);
        // a soft vein, wider and lower in contrast than a crack, with a
        // faint halo where the mineral bleeds into the stone
        float halo1 = 1.0 - smoothstep(0.0, 0.32, v1);
        float tone = vnoise(m * 0.35 + 7.0);
        marbleMaterial = marbleBase * (0.92 + 0.14 * warp);
        // warmer and cooler drifts through the block
        marbleMaterial *= mix(vec3(1.02, 1.0, 0.96), vec3(0.97, 0.99, 1.02), tone);
        marbleMaterial = mix(marbleMaterial, marbleVein, clamp(line1 * 0.20 + halo1 * 0.08 + line2 * 0.08, 0.0, 1.0) * fadeFar(6.0, 26.0, dist * 0.8));
      }

      vec3 material = mix(marbleMaterial, wallMaterial, isShell);


      // ---------------------------------------------------------
      // FLOOR MATERIAL: polished chequered marble
      // ---------------------------------------------------------

      float tileSize = 0.62;
      vec2 tq = mat2(0.70711, 0.70711, -0.70711, 0.70711) * (v_pos.xz - vec2(7.0, 0.0));
      vec2 tile = floor(tq / tileSize);
      float checker = mod(tile.x + tile.y, 2.0);
      float rnd = hash12(tile);

      vec3 lightTile = tileLight * (0.93 + 0.10 * rnd);
      vec3 darkTile  = tileDark + vec3(0.012) * rnd;

      float vein = abs(sin(tq.x * 5.5 + tq.y * 2.0 + sin(tq.y * 1.6) + rnd * 6.0));
      vein = 1.0 - smoothstep(0.0, 0.09, vein);

      vec3 floorMaterial = mix(lightTile, darkTile, checker);
      floorMaterial = mix(floorMaterial, floorMaterial * 0.80, vein * 0.35 * (1.0 - checker));
      floorMaterial = mix(floorMaterial, floorMaterial * 1.5 + 0.02, vein * 0.18 * checker);

      // hair-line grout between tiles
      vec2 tf = fract(tq / tileSize);
      float edge = min(min(tf.x, 1.0 - tf.x), min(tf.y, 1.0 - tf.y)) * tileSize;
      float grout = (1.0 - smoothstep(0.0, 0.006, edge)) * fadeFar(8.0, 30.0, dist);
      floorMaterial *= 1.0 - 0.28 * grout;

      // wear: the polish is duller where people walk (down the middle of
      // the hall and along the corridor), with fine scuffs in the
      // direction of travel; each tile also keeps a slightly different
      // polish of its own
      float lane = exp(-pow((v_pos.x - 7.0) / 2.3, 2.0)) * step(v_pos.x, 13.6)
                 + exp(-pow((v_pos.z - ${Rr((pr.z0+pr.z1)/2)}) / 1.3, 2.0)) * step(14.0, v_pos.x);
      float scuff = 0.0;
      float wear = 0.0;
      if (isFloor > 0.5) {
        if (detail) {
          scuff = vnoise(v_pos.xz * vec2(9.0, 1.4)) * vnoise(v_pos.xz * vec2(2.0, 0.5) + 5.0);
          scuff *= fadeFar(3.0, 16.0, dist);
        }
        wear = clamp(lane * (0.55 + 0.45 * vnoise(v_pos.xz * 0.6)), 0.0, 1.0);
      }
      float tilePolish = 0.86 + 0.28 * hash12(tile + 17.0);
      floorMaterial = mix(floorMaterial, floorMaterial * 0.94 + vec3(0.012, 0.011, 0.009), wear * 0.5 + scuff * 0.35);

      material = mix(material, floorMaterial, isFloor);
      material = mix(material, ceilingMat, isCeiling);


      // ---------------------------------------------------------
      // STATUES: carved in the same tone as the plaster walls, so
      // they sit quietly and leave the attention to the paintings
      // ---------------------------------------------------------

      vec3 statueMaterial = mix(plaster, plasterShade, 0.30);
      if (detail) {
        float sm = fbm(vec2(v_pos.x * 2.3 + v_pos.z * 1.7, v_pos.y * 2.9));
        statueMaterial *= 0.95 + 0.08 * sm;
      }
      material = mix(material, statueMaterial, isStatue);


      // ---------------------------------------------------------
      // PLANTS
      // ---------------------------------------------------------

      float across = abs(v_mat.y);
      float along = v_mat.z;

      vec3 leafDark = vec3(0.050, 0.190, 0.058);
      vec3 leafLight = vec3(0.165, 0.395, 0.105);
      vec3 leafMaterial = mix(leafDark, leafLight, 0.30 + 0.55 * along * (1.0 - 0.45 * across));
      float rib = 1.0 - smoothstep(0.0, 0.05, across);
      leafMaterial = mix(leafMaterial, vec3(0.34, 0.50, 0.19), rib * 0.75);
      float veins = pow(abs(sin((along * 64.0 - across * 6.0) * 3.14159)), 12.0);
      leafMaterial *= 1.0 - 0.12 * veins * (1.0 - rib);
      leafMaterial *= 1.0 - 0.28 * smoothstep(0.80, 1.0, across);

      material = mix(material, leafMaterial, isLeaf);
      material = mix(material, vec3(0.150, 0.285, 0.090), isStem);
      material = mix(material, vec3(0.022, 0.018, 0.014), isSoil);
      material = mix(material, vec3(0.010, 0.010, 0.011), isPot);
      material = mix(material, vec3(0.045, 0.045, 0.048), isSteel);

      // cream plaster of the skylight, with a faint carved texture
      vec3 creamMat = vec3(0.84, 0.80, 0.70);
      if (detail) {
        creamMat *= 0.95 + 0.08 * fbm(vec2(v_pos.x + v_pos.y, v_pos.z + v_pos.y) * 6.0);
      }
      material = mix(material, creamMat, isCream);


      // ---------------------------------------------------------
      // MUSEUM LIGHTING (dimmer, moodier)
      // ---------------------------------------------------------

      vec3 lightDirection = normalize(vec3(-0.32, 0.92, -0.40));
      float diffuse = max(dot(N, lightDirection), 0.0);

      // the room's own lamps are kept low: most of the light is daylight
      // from the skylight, the windows, the door and the oculus
      float light = 0.47 + diffuse * 0.2;
      // the painting walls sit a touch darker so each picture light reads
      // as its own pool
      light -= 0.045 * isShell * (1.0 - isCeiling);

      // Light from the bar above each painting
      float pic = 0.0;
      ${u}

      // Corridor glow and the end wall light
      light += (1.0 - smoothstep(7.0, 35.0, abs(v_pos.z - 29.0))) * 0.04;
      light += (1.0 - smoothstep(2.0, 16.0, abs(v_pos.z - ${Rr(pr.hallEnd-1.6)}))) * 0.09 * (1.0 - smoothstep(14.5, 18.0, v_pos.x));

      // Walls fall into shadow towards the ceiling
      light *= mix(0.80, 1.0, min(1.0, fadeFar(4.5, 8.0, v_pos.y) + isFloor));

      light += (1.0 - smoothstep(0.0, 3.5, v_pos.y)) * 0.03;

      // the grand arch's fluted columns: a soft warm uplight from the
      // floor, so the arch reads as the gallery's centrepiece
      light += isFluted * 0.16 * (1.0 - smoothstep(0.0, 6.5, v_pos.y)) * (0.6 + 0.4 * max(N.y * -0.5 + 0.5, 0.0));

      // carved forms: a soft side light and a little fill so the
      // folds and features read without the statue standing out
      vec3 sculptKey = normalize(vec3(0.45, 0.75, -0.50));
      float sculpt = max(dot(N, sculptKey), 0.0);
      light = mix(light, 0.42 + sculpt * 0.42 + max(dot(N, V), 0.0) * 0.12, isStatue);
      light += max(dot(N, V), 0.0) * 0.10 * isLeaf;

      // dim the room as a whole; the picture lights stay strong
      light *= ${.6.toFixed(3)};
      // at night the room itself sinks into darkness
      light *= mix(1.0, 0.42, night);

      // ---------------------------------------------------------
      // DAYLIGHT THROUGH THE DOOR
      // A warm pool on the floor in the shape of the door, crossed
      // by the soft shadows of the metal bars, plus a gentle glow on
      // everything near the entrance.
      // ---------------------------------------------------------
      float inZ = max(v_pos.z - 0.35, 0.0);
      float spill = 0.0;
      if (v_pos.z < 12.0 && v_pos.z > 0.30) {
        if (isFloor > 0.5) {
          float through = doorLight(v_pos, vec3(${x_}));
          spill = through * 1.6 * (1.0 - smoothstep(4.0, 11.0, inZ) * 0.5);
        }
        spill += exp(-inZ / 2.4) * 0.24 * (1.0 - isCeiling * 0.5);
      }
      // (at night the door's light is lamplight from the street: dimmer)
      light += spill * 0.55 * mix(1.0, 0.22, night);

      // ---------------------------------------------------------
      // SUNLIGHT THROUGH THE SKYLIGHT
      // Bright squares on the floor (and the foot of the walls),
      // each crossed by the shadows of its glazing bars, and a soft
      // daylight glow under the glass.
      // ---------------------------------------------------------
      float sun = 0.0;
      float glow = skylightGlow(v_pos);
      if (glow > 0.0 && v_pos.y < 7.9 && isSky < 0.5) {
        float ndl = max(dot(N, SKY_SUN), 0.0);
        if (ndl > 0.0) sun = skylightAt(v_pos) * ndl;
      }
      // by night the same squares are moonlight: a little softer, the
      // glow around them much weaker, so the pattern stands alone in the dark
      light += sun * 0.85 * mix(1.0, 1.75, night) + glow * 0.05 * (1.0 - isCeiling) * mix(1.0, 1.1, night);
      // the coffers glow with daylight, brighter towards the glass
      light += isCream * (0.18 + 0.42 * smoothstep(8.0, 8.62, v_pos.y)) * glow * mix(1.0, 0.55, night);

      // ---------------------------------------------------------
      // DAYLIGHT IN THE NEW CORRIDOR
      // Soft window shapes from the garden windows on the floor and
      // the painting wall, and a gentle glow throughout.
      // ---------------------------------------------------------
      // ---------------------------------------------------------
      // THE TREE ALCOVE: a shaft of sun through the oculus and a soft
      // daylight glow in the little court
      // ---------------------------------------------------------
      float aSun = alcoveSun(v_pos, N);
      float aGlow = alcoveGlow(v_pos);
      light += aSun * 1.8 * mix(1.0, 1.45, night) + aGlow * 0.5 * (1.0 - 0.3 * isCeiling) * mix(1.0, 0.2, night);
      light += isCream * aGlow * 0.18 * smoothstep(8.0, 10.5, v_pos.y) * mix(1.0, 0.2, night);
      sun = max(sun, aSun);

      float winL = windowLight(v_pos, N);
      float cg = corridorGlow(v_pos);
      light += winL * 0.48 * mix(1.0, 1.35, night) + cg * 0.16 * (1.0 - 0.4 * isCeiling) * mix(1.0, 0.7, night);

      // the little lamps in the statue niches
      float nl = nicheLight(v_pos, N);
      light += nl * 1.1;

      // soft contact shadows where pillars, statues and plants meet the floor
      if (isFloor > 0.5) {
        float ao = 1.0;
        ${a}
        // and a little darker along the foot of the walls
        float wallD = v_pos.x - 0.35;
        if (v_pos.x < 14.0) wallD = min(wallD, ${Rr(pr.hallEnd)} - v_pos.z);
        if (v_pos.x < 14.0 && (v_pos.z < ${Rr(pr.z0)} || v_pos.z > ${Rr(pr.z1)})) wallD = min(wallD, 13.65 - v_pos.x);
        if (v_pos.x > 13.65 && v_pos.z > ${Rr(pr.z0-1)}) wallD = min(min(min(wallD, v_pos.z - ${Rr(pr.z0)}), ${Rr(pr.z1)} - v_pos.z), ${Rr(pr.x1)} - v_pos.x);
        ao *= mix(0.72, 1.0, smoothstep(0.0, 0.55, wallD));
        light *= ao;
      }

      // tungsten-warm picture lights against cooler daylight from the
      // skylight, the windows and the dome: the mix of the two is what
      // real gallery light looks like
      // (at night the picture lights burn lower and yellower, like lanterns,
      // so the moon and the lanterns carry the room)
      vec3 pictureTint = mix(vec3(1.0, 0.90, 0.74), vec3(1.0, 0.82, 0.52) * 0.30, night);
      float daylight = glow * 0.05 + cg * 0.16 + aGlow * 0.5 + winL * 0.48;
      float coolShare = clamp(daylight / max(light, 0.05), 0.0, 1.0) * (1.0 - clamp(sun * 2.0 + spill, 0.0, 1.0));
      vec3 spillTint = mix(vec3(1.0), vec3(1.10, 0.95, 0.78), clamp(spill * 2.0, 0.0, 1.0));
      // sunlight warm by day; moonlight silver-blue by night
      vec3 moonTint = vec3(0.70, 0.82, 1.12);
      spillTint = mix(spillTint, mix(vec3(1.08, 1.0, 0.86), moonTint * 1.18, night), clamp((sun + winL * 0.6) * 1.5, 0.0, 1.0));
      spillTint *= mix(vec3(1.0), vec3(0.93, 0.97, 1.05), coolShare * 0.7);
      // and the dark itself is cold at night, except near the door's lamplight
      spillTint *= mix(vec3(1.0), mix(vec3(0.66, 0.76, 0.98), vec3(1.05, 0.86, 0.62), clamp(spill * 2.0, 0.0, 1.0)), night);
      vec3 finalColour = material * (vec3(light) * spillTint + pictureTint * pic * ${.78.toFixed(3)} * (1.0 - 0.5 * isFloor));

      // lantern light, patterned by the leaded glass, at night
      finalColour += material * lanternLight(v_pos, N);

      // light bounced off the warm floor onto the lower walls and columns
      finalColour += material * vec3(1.0, 0.84, 0.62) * 0.05 * mix(1.0, 0.3, night) * ${.6.toFixed(3)}
        * (1.0 - smoothstep(0.0, 2.4, v_pos.y)) * (1.0 - isFloor) * (1.0 - abs(N.y));

      // and the sunlit (or moonlit) squares under the skylight throw their
      // own light back into the room: warm by day, faint and cold by night
      float bounce = skylightBounce(v_pos, N) * (1.0 - isFloor) * (1.0 - isSky);
      finalColour += material * mix(vec3(1.0, 0.86, 0.66) * 0.17, vec3(0.62, 0.74, 1.0) * 0.12, night) * bounce * ${.6.toFixed(3)};

      // polished marble (columns, arch, skirting): a soft highlight of the
      // daylight that drifts across the stone as you move, rougher in places
      float isMarble = (1.0 - isShell) * (1.0 - isObj) * (1.0 - isFloor) * (1.0 - isCeiling) * (1.0 - isCream) + isFluted;
      if (detail && isMarble > 0.5) {
        vec3 Hm = normalize(lightDirection + V);
        float rough = 0.55 + 0.45 * vnoise(uv * 1.7 + 3.0);
        float gloss = pow(max(dot(N, Hm), 0.0), mix(60.0, 14.0, rough));
        float fresM = 0.04 + 0.96 * pow(1.0 - max(dot(N, V), 0.0), 5.0);
        finalColour += vec3(1.0, 0.96, 0.88) * (gloss * 0.07 * (1.0 - rough * 0.6) + fresM * 0.05) * (light + pic * 0.5);
      }

      // a dull sheen on the black steel frames
      vec3 Hst = normalize(lightDirection + V);
      finalColour += vec3(0.30, 0.29, 0.27) * pow(max(dot(N, Hst), 0.0), 24.0) * 0.25 * isSteel;

      // leaves catch a soft sheen
      vec3 Hs = normalize(lightDirection + V);
      finalColour += vec3(0.55, 0.65, 0.45) * pow(max(dot(N, Hs), 0.0), 36.0) * 0.20 * isLeaf * ${.6.toFixed(3)};


      // ---------------------------------------------------------
      // FLOOR: the moving lamp glare has been removed, the marble
      // keeps its colour and its picture-light pools only.
      // ---------------------------------------------------------


      // ---------------------------------------------------------
      // GLOSSY BLACK POTS: soft reflection of the lit room
      // ---------------------------------------------------------

      if (isPot > 0.5) {
        vec3 R = reflect(-V, N);
        vec3 env = mix(vec3(0.035, 0.033, 0.030), vec3(0.58, 0.54, 0.47), smoothstep(0.05, 0.85, R.y));
        float fres = 0.18 + 0.82 * pow(1.0 - max(dot(N, V), 0.0), 3.0);
        float hot = pow(max(dot(R, normalize(vec3(-0.30, 0.90, -0.30))), 0.0), 70.0);
        finalColour += (env * fres * 0.70 + vec3(1.0, 0.97, 0.92) * hot * 0.80) * ${.6.toFixed(3)};

        // black statues in the niches: crisp highlights from the niche lamp
        // and a soft sheen of the lit niche wall around them
        if (v_pos.z < ${Rr(pr.z0+.3)} && v_pos.x > ${Rr(pr.x0)}) {
          vec3 Lp = normalize(nicheLamp(v_pos) - v_pos);
          float spec = pow(max(dot(R, Lp), 0.0), 60.0);
          float sheen = pow(max(dot(R, Lp), 0.0), 8.0);
          finalColour += vec3(1.0, 0.95, 0.86) * (spec * 1.6 + sheen * 0.22) + vec3(0.62, 0.58, 0.52) * fres * 0.25;
        }
      }


      // ---------------------------------------------------------
      // GRADING + ATMOSPHERE
      // ---------------------------------------------------------

      finalColour.r *= 1.025;
      finalColour.g *= 1.008;
      finalColour.b *= 0.955;

      float atmosphere = fadeFar(8.0, 60.0, dist);
      finalColour = mix(finalColour * 0.80, finalColour, atmosphere);
      // the far end of the gallery sinks into a faint warm haze: lower in
      // contrast and colour, so the room feels deeper
      float far = 1.0 - atmosphere;
      float lum = dot(finalColour, vec3(0.299, 0.587, 0.114));
      finalColour = mix(finalColour, vec3(lum), far * 0.22);
      finalColour = mix(finalColour, mix(vec3(0.30, 0.27, 0.23), vec3(0.06, 0.075, 0.11), night) * ${.6.toFixed(3)}, far * 0.16);

      // ---------------------------------------------------------
      // POLISHED FLOOR
      // The room is also drawn upside down beneath the floor; the
      // floor lets some of it through, more at grazing angles and more
      // on the black tiles than the cream ones.
      // ---------------------------------------------------------
      // the sky through the glass is simply the sky
      if (isSky > 0.5) {
        vec3 dirUp = normalize(v_pos - v_eye);
        finalColour = skyAbove(dirUp * vec3(1.0, sign(dirUp.y), 1.0)) * 0.92;
        // the sun itself, blazing through the glass (the dome over the
        // tree has its own sun, a little to one side)
        vec3 sunDir = v_pos.x > 14.0 ? SHAFT : SKY_SUN;
        float sd = max(dot(dirUp * vec3(1.0, sign(dirUp.y), 1.0), sunDir), 0.0);
        // by day the sun; by night the moon in the same place: a small
        // bright disc with a cold halo
        vec3 bodyCol = mix(vec3(1.0, 0.92, 0.78) * (pow(sd, 48.0) * 1.8 + pow(sd, 6.0) * 0.3),
                           vec3(0.86, 0.9, 1.0) * (smoothstep(0.9993, 0.9996, sd) * 2.4 + pow(sd, 160.0) * 0.5 + pow(sd, 10.0) * 0.12), night);
        finalColour = finalColour * mix(1.08, 1.0, night) + bodyCol;
      }

      float alpha = 1.0;
      if (isFloor > 0.5) {
        if (yScale < 0.0) discard;
        float cosV = clamp(V.y, 0.0, 1.0);
        // a high polish: a clear reflection even looking down, a mirror at grazing angles
        float refl = 0.16 + 0.58 * pow(1.0 - cosV, 3.0);
        refl *= mix(0.72, 1.0, checker);
        refl *= 1.0 - 0.5 * grout;
        refl *= tilePolish * (1.0 - 0.32 * wear - 0.30 * scuff);
        alpha = 1.0 - refl * mirrorOn;
        // the bright pool of daylight washes the reflection out a little
        alpha = mix(alpha, 1.0, clamp(spill * 0.4 + sun * 0.4, 0.0, 0.45));
      }

      gl_FragColor = vec4(finalColour, alpha);
    }`,vert:`
    precision highp float;

    uniform mat4 proj;
    uniform mat4 view;
    uniform float yScale;

    attribute vec3 position;
    attribute vec3 normal;
    attribute vec3 a_mat;

    varying vec3 v_pos;
    varying vec3 v_relativepos;
    varying vec3 v_normal;
    varying vec3 v_eye;
    varying vec3 v_mat;

    void main() {

      vec3 pos = position;
      v_mat = a_mat;

      // Keep original world position for material calculations.
      v_pos = pos;
      v_normal = normal;
      v_relativepos = (view * vec4(pos, 1.0)).xyz;

      // Camera position in world space, recovered from the view matrix
      vec3 t = view[3].xyz;
      v_eye = -vec3(
        dot(view[0].xyz, t),
        dot(view[1].xyz, t),
        dot(view[2].xyz, t)
      );

      // in the reflection beneath the floor, the eye is mirrored too
      v_eye.y *= yScale;

      pos.y *= yScale;

      gl_Position = proj * view * vec4(pos, 1.0);
    }`,attributes:{position:e.position,normal:e.normal,a_mat:e.mat},uniforms:f,blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"zero"}},elements:new Uint32Array(e.elements),offset:r?t.prop("offset"):0,count:r?t.prop("count"):e.elements.length})}});var R2=At((F7,N2)=>{"strict mode";var y_="https://api.artic.edu/api/v1/artworks/search",b_=({image_id:t},e)=>`https://www.artic.edu/iiif/2/${t}/full/${e},/0/default.jpg`,w_="?query[bool][must][][term][classification_titles.keyword]=painting&query[bool][must][][term][is_public_domain]=true",__="&fields=image_id,title,artist_title",M_={low:400,mid:843,high:1686};N2.exports={fetchList:async function(t,e){let o=y_+w_+__+`&from=${t}&size=${e}`;return(await fetch(o).then(n=>n.json())).data.filter(n=>n.image_id)},fetchImage:async function(t,e){let o=b_(t,M_[e]),r=await fetch(o).then(n=>n.blob());return{title:t.title+" - "+t.artist_title,image:r}}}});var P2=At((G7,C2)=>{"use strict";var k_=bu(),S_=Ar(),E_=t=>"images/web/"+t.slug+(S_.isPhone?"-1024":"")+".webp";async function O2(t){let e=await fetch(t);if(!e.ok)throw new Error("Could not load "+t);return e.blob()}C2.exports={fetchList:async function(t,e){return k_.slice(t,t+e).map((o,r)=>({...o,image_id:t+r}))},fetchImage:async function(t){let e;try{e=await O2(E_(t))}catch(o){e=await O2("images/"+t.file)}return{title:t.title,image:e}}}});var I2=At((H7,$2)=>{"strict mode";$2.exports={default:"local",artic:R2(),local:P2()}});var td=At((U7,D2)=>{"strict mode";var Ws=document.createElement("canvas"),Ju=Ws.width=Ws.height=1024,os=Ws.getContext("2d");os.mozImageSmoothingEnabled=!1;os.webkitImageSmoothingEnabled=!1;os.font="32px Verdana";os.textBaseline="bottom";os.fillStyle="#aaa";function q2(t,e,o,r){var n=e,a,s=0,i=0,c=e.split(" "),h,f;for(h=f=c.length;t.measureText(n).width>o&&h>1;){h--,n=a="";for(var d=0;d<f;d++)d<h?(n+=c[d],d+1<h&&(n+=" ")):(a+=c[d],d+1<f&&(a+=" "))}return r.push(n),i=t.measureText(n).width,a&&(s=q2(t,a,o,r),s>i&&(i=s)),i}D2.exports={init(t,e,o=Ju){var r=[];q2(os,e,Math.min(o*Ju,Ju),r),os.clearRect(0,0,Ws.width,Ws.height);for(var n=0;n<r.length;n++)os.fillText(r[n],0,Ws.height-(Math.max(r.length,3)-n)*32);return t({data:Ws,min:"mipmap",mipmap:"nice",flipY:!0})},draw(t){return t({frag:`
            precision mediump float;
            uniform sampler2D tex;
            varying vec2 uv;
        
            void main () {
                float c = texture2D(tex, uv).r;
                gl_FragColor = vec4(0,0,0, c);
            }`,vert:`
            precision highp float;
            uniform mat4 proj, view, model;
            uniform float yScale;
            attribute vec2 pos;
            varying vec2 uv;
            void main () {
                uv = pos;
                vec4 mpos = model * vec4(pos, 0.001, 1);
                mpos.y *= yScale;
                gl_Position = proj * view * mpos;
            }`,attributes:{pos:[0,0,1,0,0,1,1,1,0,1,1,0]},uniforms:{model:t.prop("textmodel"),tex:t.prop("text")},count:6,blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}})}}});var H2=At((B7,G2)=>{"strict mode";var ed=I2(),z_=new URLSearchParams(window.location.search).get("api"),F2=ed[z_]||ed[ed.default],A_=td(),od={},cc=[],T_=2;function L_(t){return(!navigator.connection||navigator.connection.downlink<T_)&&(t=t=="high"?"mid":"low"),t}var N_=Ar(),ic=document.createElement("canvas");ic.width=ic.height=N_.isPhone?1024:2048;var ad=ic.getContext("2d");ad.imageSmoothingEnabled=!0;ad.imageSmoothingQuality="high";var nd=!1,R_=t=>[(cc.pop()||t.texture)([[[200,200,200]]]),e=>(cc.pop()||t.texture)([[[0,0,0,0]]]),1];async function rd(t,e,o){nd===!1&&(nd=t.hasExtension("EXT_texture_filter_anisotropic")?t._gl.getParameter(t._gl.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0);let r,n;try{let a=await F2.fetchImage(e,L_(o));n=a.title,r=await createImageBitmap(a.image),ad.drawImage(r,0,0,ic.width,ic.height)}catch(a){return console.error(a),o=="high"?await rd(t,e,"low"):R_(t)}return[(cc.pop()||t.texture)({data:ic,min:"mipmap",mipmap:"nice",aniso:nd,flipY:!0}),a=>A_.init(cc.pop()||t.texture,n,a),r.width/r.height]}G2.exports={fetch:(t,e=10,o="low",r,n)=>{let a=Object.keys(od).length;F2.fetchList(a,e).then(s=>{e=s.length,s.map(i=>{if(od[i.image_id]){--e===0&&n();return}od[i.image_id]=i,rd(t,i,o).then(([c,h,f])=>{r({...i,tex:c,textGen:h,aspect:f}),--e===0&&n()})})})},load:(t,e,o="low")=>{e.tex||e.loading||(e.loading=!0,rd(t,e,o).then(([r,n])=>{e.loading=!1,e.tex=r,e.text=n(e.width)}))},unload:t=>{t.tex&&(cc.push(t.tex),t.tex=void 0),t.text&&(cc.push(t.text),t.text=void 0)}}});var B2=At((j7,U2)=>{U2.exports=O_;function O_(){var t=new Float32Array(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var W2=At((W7,j2)=>{j2.exports=C_;function C_(t){var e=new Float32Array(16);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}});var X2=At((V7,V2)=>{V2.exports=P_;function P_(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}});var sd=At((X7,Y2)=>{Y2.exports=$_;function $_(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var Q2=At((Y7,K2)=>{K2.exports=I_;function I_(t,e){if(t===e){var o=e[1],r=e[2],n=e[3],a=e[6],s=e[7],i=e[11];t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=o,t[6]=e[9],t[7]=e[13],t[8]=r,t[9]=a,t[11]=e[14],t[12]=n,t[13]=s,t[14]=i}else t[0]=e[0],t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=e[1],t[5]=e[5],t[6]=e[9],t[7]=e[13],t[8]=e[2],t[9]=e[6],t[10]=e[10],t[11]=e[14],t[12]=e[3],t[13]=e[7],t[14]=e[11],t[15]=e[15];return t}});var J2=At((K7,Z2)=>{Z2.exports=q_;function q_(t,e){var o=e[0],r=e[1],n=e[2],a=e[3],s=e[4],i=e[5],c=e[6],h=e[7],f=e[8],d=e[9],u=e[10],v=e[11],l=e[12],p=e[13],m=e[14],g=e[15],x=o*i-r*s,y=o*c-n*s,w=o*h-a*s,_=r*c-n*i,M=r*h-a*i,k=n*h-a*c,R=f*p-d*l,A=f*m-u*l,F=f*g-v*l,C=d*m-u*p,H=d*g-v*p,I=u*g-v*m,V=x*I-y*H+w*C+_*F-M*A+k*R;return V?(V=1/V,t[0]=(i*I-c*H+h*C)*V,t[1]=(n*H-r*I-a*C)*V,t[2]=(p*k-m*M+g*_)*V,t[3]=(u*M-d*k-v*_)*V,t[4]=(c*F-s*I-h*A)*V,t[5]=(o*I-n*F+a*A)*V,t[6]=(m*w-l*k-g*y)*V,t[7]=(f*k-u*w+v*y)*V,t[8]=(s*H-i*F+h*R)*V,t[9]=(r*F-o*H-a*R)*V,t[10]=(l*M-p*w+g*x)*V,t[11]=(d*w-f*M-v*x)*V,t[12]=(i*A-s*C-c*R)*V,t[13]=(o*C-r*A+n*R)*V,t[14]=(p*y-l*_-m*x)*V,t[15]=(f*_-d*y+u*x)*V,t):null}});var e3=At((Q7,t3)=>{t3.exports=D_;function D_(t,e){var o=e[0],r=e[1],n=e[2],a=e[3],s=e[4],i=e[5],c=e[6],h=e[7],f=e[8],d=e[9],u=e[10],v=e[11],l=e[12],p=e[13],m=e[14],g=e[15];return t[0]=i*(u*g-v*m)-d*(c*g-h*m)+p*(c*v-h*u),t[1]=-(r*(u*g-v*m)-d*(n*g-a*m)+p*(n*v-a*u)),t[2]=r*(c*g-h*m)-i*(n*g-a*m)+p*(n*h-a*c),t[3]=-(r*(c*v-h*u)-i*(n*v-a*u)+d*(n*h-a*c)),t[4]=-(s*(u*g-v*m)-f*(c*g-h*m)+l*(c*v-h*u)),t[5]=o*(u*g-v*m)-f*(n*g-a*m)+l*(n*v-a*u),t[6]=-(o*(c*g-h*m)-s*(n*g-a*m)+l*(n*h-a*c)),t[7]=o*(c*v-h*u)-s*(n*v-a*u)+f*(n*h-a*c),t[8]=s*(d*g-v*p)-f*(i*g-h*p)+l*(i*v-h*d),t[9]=-(o*(d*g-v*p)-f*(r*g-a*p)+l*(r*v-a*d)),t[10]=o*(i*g-h*p)-s*(r*g-a*p)+l*(r*h-a*i),t[11]=-(o*(i*v-h*d)-s*(r*v-a*d)+f*(r*h-a*i)),t[12]=-(s*(d*m-u*p)-f*(i*m-c*p)+l*(i*u-c*d)),t[13]=o*(d*m-u*p)-f*(r*m-n*p)+l*(r*u-n*d),t[14]=-(o*(i*m-c*p)-s*(r*m-n*p)+l*(r*c-n*i)),t[15]=o*(i*u-c*d)-s*(r*u-n*d)+f*(r*c-n*i),t}});var n3=At((Z7,o3)=>{o3.exports=F_;function F_(t){var e=t[0],o=t[1],r=t[2],n=t[3],a=t[4],s=t[5],i=t[6],c=t[7],h=t[8],f=t[9],d=t[10],u=t[11],v=t[12],l=t[13],p=t[14],m=t[15],g=e*s-o*a,x=e*i-r*a,y=e*c-n*a,w=o*i-r*s,_=o*c-n*s,M=r*c-n*i,k=h*l-f*v,R=h*p-d*v,A=h*m-u*v,F=f*p-d*l,C=f*m-u*l,H=d*m-u*p;return g*H-x*C+y*F+w*A-_*R+M*k}});var a3=At((J7,r3)=>{r3.exports=G_;function G_(t,e,o){var r=e[0],n=e[1],a=e[2],s=e[3],i=e[4],c=e[5],h=e[6],f=e[7],d=e[8],u=e[9],v=e[10],l=e[11],p=e[12],m=e[13],g=e[14],x=e[15],y=o[0],w=o[1],_=o[2],M=o[3];return t[0]=y*r+w*i+_*d+M*p,t[1]=y*n+w*c+_*u+M*m,t[2]=y*a+w*h+_*v+M*g,t[3]=y*s+w*f+_*l+M*x,y=o[4],w=o[5],_=o[6],M=o[7],t[4]=y*r+w*i+_*d+M*p,t[5]=y*n+w*c+_*u+M*m,t[6]=y*a+w*h+_*v+M*g,t[7]=y*s+w*f+_*l+M*x,y=o[8],w=o[9],_=o[10],M=o[11],t[8]=y*r+w*i+_*d+M*p,t[9]=y*n+w*c+_*u+M*m,t[10]=y*a+w*h+_*v+M*g,t[11]=y*s+w*f+_*l+M*x,y=o[12],w=o[13],_=o[14],M=o[15],t[12]=y*r+w*i+_*d+M*p,t[13]=y*n+w*c+_*u+M*m,t[14]=y*a+w*h+_*v+M*g,t[15]=y*s+w*f+_*l+M*x,t}});var i3=At((tz,s3)=>{s3.exports=H_;function H_(t,e,o){var r=o[0],n=o[1],a=o[2],s,i,c,h,f,d,u,v,l,p,m,g;return e===t?(t[12]=e[0]*r+e[4]*n+e[8]*a+e[12],t[13]=e[1]*r+e[5]*n+e[9]*a+e[13],t[14]=e[2]*r+e[6]*n+e[10]*a+e[14],t[15]=e[3]*r+e[7]*n+e[11]*a+e[15]):(s=e[0],i=e[1],c=e[2],h=e[3],f=e[4],d=e[5],u=e[6],v=e[7],l=e[8],p=e[9],m=e[10],g=e[11],t[0]=s,t[1]=i,t[2]=c,t[3]=h,t[4]=f,t[5]=d,t[6]=u,t[7]=v,t[8]=l,t[9]=p,t[10]=m,t[11]=g,t[12]=s*r+f*n+l*a+e[12],t[13]=i*r+d*n+p*a+e[13],t[14]=c*r+u*n+m*a+e[14],t[15]=h*r+v*n+g*a+e[15]),t}});var l3=At((ez,c3)=>{c3.exports=U_;function U_(t,e,o){var r=o[0],n=o[1],a=o[2];return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t[4]=e[4]*n,t[5]=e[5]*n,t[6]=e[6]*n,t[7]=e[7]*n,t[8]=e[8]*a,t[9]=e[9]*a,t[10]=e[10]*a,t[11]=e[11]*a,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}});var h3=At((oz,f3)=>{f3.exports=B_;function B_(t,e,o,r){var n=r[0],a=r[1],s=r[2],i=Math.sqrt(n*n+a*a+s*s),c,h,f,d,u,v,l,p,m,g,x,y,w,_,M,k,R,A,F,C,H,I,V,dt;return Math.abs(i)<1e-6?null:(i=1/i,n*=i,a*=i,s*=i,c=Math.sin(o),h=Math.cos(o),f=1-h,d=e[0],u=e[1],v=e[2],l=e[3],p=e[4],m=e[5],g=e[6],x=e[7],y=e[8],w=e[9],_=e[10],M=e[11],k=n*n*f+h,R=a*n*f+s*c,A=s*n*f-a*c,F=n*a*f-s*c,C=a*a*f+h,H=s*a*f+n*c,I=n*s*f+a*c,V=a*s*f-n*c,dt=s*s*f+h,t[0]=d*k+p*R+y*A,t[1]=u*k+m*R+w*A,t[2]=v*k+g*R+_*A,t[3]=l*k+x*R+M*A,t[4]=d*F+p*C+y*H,t[5]=u*F+m*C+w*H,t[6]=v*F+g*C+_*H,t[7]=l*F+x*C+M*H,t[8]=d*I+p*V+y*dt,t[9]=u*I+m*V+w*dt,t[10]=v*I+g*V+_*dt,t[11]=l*I+x*V+M*dt,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t)}});var d3=At((nz,u3)=>{u3.exports=j_;function j_(t,e,o){var r=Math.sin(o),n=Math.cos(o),a=e[4],s=e[5],i=e[6],c=e[7],h=e[8],f=e[9],d=e[10],u=e[11];return e!==t&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[4]=a*n+h*r,t[5]=s*n+f*r,t[6]=i*n+d*r,t[7]=c*n+u*r,t[8]=h*n-a*r,t[9]=f*n-s*r,t[10]=d*n-i*r,t[11]=u*n-c*r,t}});var v3=At((rz,p3)=>{p3.exports=W_;function W_(t,e,o){var r=Math.sin(o),n=Math.cos(o),a=e[0],s=e[1],i=e[2],c=e[3],h=e[8],f=e[9],d=e[10],u=e[11];return e!==t&&(t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=a*n-h*r,t[1]=s*n-f*r,t[2]=i*n-d*r,t[3]=c*n-u*r,t[8]=a*r+h*n,t[9]=s*r+f*n,t[10]=i*r+d*n,t[11]=c*r+u*n,t}});var g3=At((az,m3)=>{m3.exports=V_;function V_(t,e,o){var r=Math.sin(o),n=Math.cos(o),a=e[0],s=e[1],i=e[2],c=e[3],h=e[4],f=e[5],d=e[6],u=e[7];return e!==t&&(t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=a*n+h*r,t[1]=s*n+f*r,t[2]=i*n+d*r,t[3]=c*n+u*r,t[4]=h*n-a*r,t[5]=f*n-s*r,t[6]=d*n-i*r,t[7]=u*n-c*r,t}});var y3=At((sz,x3)=>{x3.exports=X_;function X_(t,e,o){var r,n,a,s=o[0],i=o[1],c=o[2],h=Math.sqrt(s*s+i*i+c*c);return Math.abs(h)<1e-6?null:(h=1/h,s*=h,i*=h,c*=h,r=Math.sin(e),n=Math.cos(e),a=1-n,t[0]=s*s*a+n,t[1]=i*s*a+c*r,t[2]=c*s*a-i*r,t[3]=0,t[4]=s*i*a-c*r,t[5]=i*i*a+n,t[6]=c*i*a+s*r,t[7]=0,t[8]=s*c*a+i*r,t[9]=i*c*a-s*r,t[10]=c*c*a+n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t)}});var w3=At((iz,b3)=>{b3.exports=Y_;function Y_(t,e,o){var r=e[0],n=e[1],a=e[2],s=e[3],i=r+r,c=n+n,h=a+a,f=r*i,d=r*c,u=r*h,v=n*c,l=n*h,p=a*h,m=s*i,g=s*c,x=s*h;return t[0]=1-(v+p),t[1]=d+x,t[2]=u-g,t[3]=0,t[4]=d-x,t[5]=1-(f+p),t[6]=l+m,t[7]=0,t[8]=u+g,t[9]=l-m,t[10]=1-(f+v),t[11]=0,t[12]=o[0],t[13]=o[1],t[14]=o[2],t[15]=1,t}});var M3=At((cz,_3)=>{_3.exports=K_;function K_(t,e){return t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=e[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var S3=At((lz,k3)=>{k3.exports=Q_;function Q_(t,e){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e[0],t[13]=e[1],t[14]=e[2],t[15]=1,t}});var z3=At((fz,E3)=>{E3.exports=Z_;function Z_(t,e){var o=Math.sin(e),r=Math.cos(e);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r,t[6]=o,t[7]=0,t[8]=0,t[9]=-o,t[10]=r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var T3=At((hz,A3)=>{A3.exports=J_;function J_(t,e){var o=Math.sin(e),r=Math.cos(e);return t[0]=r,t[1]=0,t[2]=-o,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=o,t[9]=0,t[10]=r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var N3=At((uz,L3)=>{L3.exports=tM;function tM(t,e){var o=Math.sin(e),r=Math.cos(e);return t[0]=r,t[1]=o,t[2]=0,t[3]=0,t[4]=-o,t[5]=r,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var O3=At((dz,R3)=>{R3.exports=eM;function eM(t,e){var o=e[0],r=e[1],n=e[2],a=e[3],s=o+o,i=r+r,c=n+n,h=o*s,f=r*s,d=r*i,u=n*s,v=n*i,l=n*c,p=a*s,m=a*i,g=a*c;return t[0]=1-d-l,t[1]=f+g,t[2]=u-m,t[3]=0,t[4]=f-g,t[5]=1-h-l,t[6]=v+p,t[7]=0,t[8]=u+m,t[9]=v-p,t[10]=1-h-d,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var P3=At((pz,C3)=>{C3.exports=oM;function oM(t,e,o,r,n,a,s){var i=1/(o-e),c=1/(n-r),h=1/(a-s);return t[0]=a*2*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a*2*c,t[6]=0,t[7]=0,t[8]=(o+e)*i,t[9]=(n+r)*c,t[10]=(s+a)*h,t[11]=-1,t[12]=0,t[13]=0,t[14]=s*a*2*h,t[15]=0,t}});var I3=At((vz,$3)=>{$3.exports=nM;function nM(t,e,o,r,n){var a=1/Math.tan(e/2),s=1/(r-n);return t[0]=a/o,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(n+r)*s,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*n*r*s,t[15]=0,t}});var D3=At((mz,q3)=>{q3.exports=rM;function rM(t,e,o,r){var n=Math.tan(e.upDegrees*Math.PI/180),a=Math.tan(e.downDegrees*Math.PI/180),s=Math.tan(e.leftDegrees*Math.PI/180),i=Math.tan(e.rightDegrees*Math.PI/180),c=2/(s+i),h=2/(n+a);return t[0]=c,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=h,t[6]=0,t[7]=0,t[8]=-((s-i)*c*.5),t[9]=(n-a)*h*.5,t[10]=r/(o-r),t[11]=-1,t[12]=0,t[13]=0,t[14]=r*o/(o-r),t[15]=0,t}});var G3=At((gz,F3)=>{F3.exports=aM;function aM(t,e,o,r,n,a,s){var i=1/(e-o),c=1/(r-n),h=1/(a-s);return t[0]=-2*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*c,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*h,t[11]=0,t[12]=(e+o)*i,t[13]=(n+r)*c,t[14]=(s+a)*h,t[15]=1,t}});var U3=At((xz,H3)=>{var sM=sd();H3.exports=iM;function iM(t,e,o,r){var n,a,s,i,c,h,f,d,u,v,l=e[0],p=e[1],m=e[2],g=r[0],x=r[1],y=r[2],w=o[0],_=o[1],M=o[2];return Math.abs(l-w)<1e-6&&Math.abs(p-_)<1e-6&&Math.abs(m-M)<1e-6?sM(t):(f=l-w,d=p-_,u=m-M,v=1/Math.sqrt(f*f+d*d+u*u),f*=v,d*=v,u*=v,n=x*u-y*d,a=y*f-g*u,s=g*d-x*f,v=Math.sqrt(n*n+a*a+s*s),v?(v=1/v,n*=v,a*=v,s*=v):(n=0,a=0,s=0),i=d*s-u*a,c=u*n-f*s,h=f*a-d*n,v=Math.sqrt(i*i+c*c+h*h),v?(v=1/v,i*=v,c*=v,h*=v):(i=0,c=0,h=0),t[0]=n,t[1]=i,t[2]=f,t[3]=0,t[4]=a,t[5]=c,t[6]=d,t[7]=0,t[8]=s,t[9]=h,t[10]=u,t[11]=0,t[12]=-(n*l+a*p+s*m),t[13]=-(i*l+c*p+h*m),t[14]=-(f*l+d*p+u*m),t[15]=1,t)}});var j3=At((yz,B3)=>{B3.exports=cM;function cM(t){return"mat4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+")"}});var lc=At((bz,W3)=>{W3.exports={create:B2(),clone:W2(),copy:X2(),identity:sd(),transpose:Q2(),invert:J2(),adjoint:e3(),determinant:n3(),multiply:a3(),translate:i3(),scale:l3(),rotate:h3(),rotateX:d3(),rotateY:v3(),rotateZ:g3(),fromRotation:y3(),fromRotationTranslation:w3(),fromScaling:M3(),fromTranslation:S3(),fromXRotation:z3(),fromYRotation:T3(),fromZRotation:N3(),fromQuat:O3(),frustum:P3(),perspective:I3(),perspectiveFromFieldOfView:D3(),ortho:G3(),lookAt:U3(),str:j3()}});var Y3=At((wz,X3)=>{"use strict";var V3=H2(),zn=lc(),Vs=k0(),lM=3e3,kh="high",id,Al=.36,Tl=13.64,fc=Vs.C.hallEnd-.01,Ll=Vs.C.z0+.01,fM=.356,hM=13.644,uM=Vs.C.hallEnd-.006,dM=Vs.C.z0+.006,pM=.12,Eh=4,hc=t=>S0[t]&&S0[t].cy||Eh,cd=.26,vM=5.6,mM=7,S0=[{side:"right",z:34.5},{side:"right",z:23.5},{side:"left",z:23.5},{side:"end",z:fc},{side:"left",z:34.5},{side:"right",z:14.6},{side:"left",z:14.6,maxW:3.7,maxH:3.7},{side:"corridor",x:Vs.PAINTING_X[0],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:Vs.PAINTING_X[1],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:Vs.PAINTING_X[2],cy:3,maxW:3.3,maxH:3.73}];function gM(t,e){let o=e&&e.maxH||vM,r=e&&e.maxW||mM,n=Math.min(o,r/t);return{width:n*t,height:n}}function xM(t,e,o){let r=S0[o],n=[],a=hc(o)-e/2;return r.side==="left"?(zn.fromTranslation(n,[Al,a,r.z+t/2]),zn.rotateY(n,n,Math.PI/2)):r.side==="right"?(zn.fromTranslation(n,[Tl,a,r.z-t/2]),zn.rotateY(n,n,-Math.PI/2)):r.side==="corridor"?zn.fromTranslation(n,[r.x-t/2,a,Ll]):(zn.fromTranslation(n,[7+t/2,a,fc]),zn.rotateY(n,n,Math.PI)),zn.scale(n,n,[t,e,pM]),n}function yM(t,e,o){let r=S0[o],n=[],a=hc(o)-e/2;return r.side==="left"?(zn.fromTranslation(n,[Al,a,r.z+t/2]),zn.rotateY(n,n,Math.PI/2)):r.side==="right"?(zn.fromTranslation(n,[Tl,a,r.z-t/2]),zn.rotateY(n,n,-Math.PI/2)):r.side==="corridor"?zn.fromTranslation(n,[r.x-t/2,a,Ll]):(zn.fromTranslation(n,[7+t/2,a,fc]),zn.rotateY(n,n,Math.PI)),n}function bM(t,e,o){let r=S0[o],n=[],a=hc(o)-e/2-cd-.38;return r.side==="left"?(zn.fromTranslation(n,[fM,a,r.z+t/2]),zn.rotateY(n,n,Math.PI/2)):r.side==="right"?(zn.fromTranslation(n,[hM,a,r.z-t/2]),zn.rotateY(n,n,-Math.PI/2)):r.side==="corridor"?zn.fromTranslation(n,[r.x-t/2,a,dM]):(zn.fromTranslation(n,[7+t/2,a,uM]),zn.rotateY(n,n,Math.PI)),zn.scale(n,n,[2,2,2]),n}function wM(t,e,o){let r=S0[o],n=hc(o)-e/2-cd-.38;return r.side==="left"?[Al+.55,n,r.z]:r.side==="right"?[Tl-.55,n,r.z]:r.side==="corridor"?[r.x,n,Ll+.55]:[7,n,fc-.55]}var zl=.42;function Sh(t,e,o,r,n,a){return[e[0]*r,e[1]*r,e[2]*r,0,0,n,0,0,o[0]*a,o[1]*a,o[2]*a,0,t[0],t[1],t[2],1]}function _M(t,e,o){let r=S0[o],n,a,s;r.side==="left"?(n=[Al,r.z],a=[0,0,1],s=[1,0,0]):r.side==="right"?(n=[Tl,r.z],a=[0,0,1],s=[-1,0,0]):r.side==="corridor"?(n=[r.x,Ll],a=[1,0,0],s=[0,0,1]):(n=[7,fc],a=[1,0,0],s=[0,0,-1]);let i=hc(o)+e/2+cd+.3,c=Math.min(2.4,Math.max(.9,t*.55)),h=(v,l)=>[n[0]+s[0]*v,l,n[1]+s[2]*v],f=[.075,.062,.05],d=[{fixmodel:Sh(h(.014,i),a,s,.1,.13,.028),fixcol:f,fixglow:0},{fixmodel:Sh(h(zl/2,i),a,s,.02,.02,zl),fixcol:f,fixglow:0},{fixmodel:Sh(h(zl,i),a,s,c,.034,.05),fixcol:f,fixglow:0},{fixmodel:Sh(h(zl-.012,i-.019),a,s,c*.94,.006,.028),fixcol:f,fixglow:1}],u=h(zl,i-.02);return{fixtures:d,light:{c:[u[0],u[1],u[2],1],d:[a[0],a[1],a[2],c/2]}}}X3.exports=(t,e)=>{let o=[],r=[],n=a=>{let s=a.image_id;if(!S0[s])return;let{width:i,height:c}=gM(a.aspect,S0[s]),h=_M(i,c,s);e&&e.lights&&s<e.lights.length&&(e.lights[s]=h.light),o.push({...a,fixtures:h.fixtures,side:S0[s].side,model:xM(i,c,s),framemodel:yM(i,c,s),framesize:[i,c],textmodel:bM(i,c,s),text:a.textGen(i),width:i,height:c,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:wM(i,c,s),paintingPosition:S0[s].side==="left"?[Al+.05,Eh,S0[s].z]:S0[s].side==="right"?[Tl-.05,Eh,S0[s].z]:S0[s].side==="corridor"?[S0[s].x,hc(s),Ll+.05]:[7,Eh,fc-.05],textGen:null})};return V3.fetch(t,S0.length,kh,n,()=>{}),{update:()=>{r=o,r.forEach(a=>{V3.load(t,a,kh)}),kh="low",id&&clearTimeout(id),id=setTimeout(()=>{kh="high"},lM)},batch:()=>r,interactables:()=>r.map((a,s)=>({side:a.side,width:a.width,index:s,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:a.plaquePosition,paintingPosition:a.paintingPosition}))}}});var J3=At((_z,Z3)=>{"use strict";var MM=td(),K3=Ar(),Q3=[[-.02,.125],[-.02,.15],[.035,.15],[.07,.12],[.07,.17],[.185,.17],[.185,.19],[.215,.19],[.26,.03]];function kM(){let t=[[0,0],[1,0],[1,1],[0,1]],e=[];Q3.forEach(([r,n])=>{t.forEach(([a,s])=>e.push([a,s,r,n]))});let o=[];for(let r=0;r<Q3.length-1;r++)for(let n=0;n<4;n++){let a=(n+1)%4,s=r*4+n,i=r*4+a,c=(r+1)*4+n,h=(r+1)*4+a;o.push(s,i,h,s,h,c)}return{verts:e,elems:o}}var SM=`#extension GL_OES_standard_derivatives : enable
precision highp float;
uniform vec2 fsize;
uniform mat4 view;
uniform float night;
varying vec2 v_l;
varying vec3 v_vpos;

float sst(float e0, float e1, float x) {
	float t = clamp((x - e0) / (e1 - e0), 0.0, 1.0);
	return t * t * (3.0 - 2.0 * t);
}

float hash21(vec2 p) {
	vec3 p3 = fract(vec3(p.x, p.y, p.x) * 0.1031);
	p3 += dot(p3, p3.yzx + 33.33);
	return fract((p3.x + p3.y) * p3.z);
}

float vnoise(vec2 p) {
	vec2 i = floor(p), f = fract(p);
	f = f * f * (3.0 - 2.0 * f);
	return mix(mix(hash21(i), hash21(i + vec2(1.0, 0.0)), f.x),
	           mix(hash21(i + vec2(0.0, 1.0)), hash21(i + vec2(1.0, 1.0)), f.x), f.y);
}

// soft ellipse with a domed height
float disc(vec2 p, vec2 r, float aa) {
	vec2 q = p / r;
	float d = length(q);
	float k = aa / min(r.x, r.y);
	float cov = sst(1.0 + k, 1.0 - k, d);
	return cov * (sqrt(clamp(1.0 - d * d, 0.0, 1.0)) * 0.8 + 0.2);
}

// fan shaped palmette growing along +y from the origin
float palmette(vec2 p, float R, float aa) {
	float r = length(p) + 0.00001;
	float ang = atan(p.x, p.y + 0.00001);
	float Rt = R * (0.5 + 0.5 * abs(cos(ang * 5.0)));
	float cov = sst(0.0, aa, Rt - r) * sst(1.32, 1.22, abs(ang));
	float h = clamp((1.0 - r / Rt) * 1.6, 0.0, 1.0) * 0.75 + 0.25;
	float boss = sst(0.012 + aa, 0.012, r);
	return max(cov * h, boss);
}

void main() {
	float px = max(fwidth(v_l.x) + fwidth(v_l.y), 0.0001);
	float aa = clamp(px * 1.3, 0.0007, 0.02);
	float stipFade = 1.0 - sst(0.002, 0.005, px);

	float sdx = max(-v_l.x, v_l.x - fsize.x);
	float sdy = max(-v_l.y, v_l.y - fsize.y);

	float h = 0.0;
	float g = 1.0;

	if (sdx > 0.0 && sdy > 0.0) {
		// ---------------- CORNER ROSETTE BLOCK ----------------
		vec2 q = vec2(sdx, sdy) - 0.13;
		float r = length(q) + 0.00001;
		float ang = atan(q.y, q.x);
		float Rt = 0.1 * (0.55 + 0.45 * abs(cos(ang * 4.0)));
		float ros = sst(0.0, aa, Rt - r) * (clamp((1.0 - r / Rt) * 1.5, 0.0, 1.0) * 0.7 + 0.3);
		float boss = sst(0.028 + aa, 0.028, r);
		float ra = fract(ang / 6.2831853 * 12.0) - 0.5;
		float beads = disc(vec2(ra * 0.06, r - 0.112), vec2(0.0125), aa) * step(0.09, r);
		h = max(max(ros, boss), beads * 0.9);
		float st = step(0.78, hash21(floor(vec2(sdx, sdy) / 0.004))) * stipFade;
		g = mix(0.18 + 0.25 * st, 1.0, sst(0.02, 0.1, h));
	} else {
		float a;
		float s;
		if (sdx > sdy) { a = sdx; s = v_l.y; } else { a = sdy; s = v_l.x; }
		float st = step(0.78, hash21(floor(vec2(s, a) / 0.004))) * stipFade;

		if (a < 0.035) {
			// ---------------- BEAD AND REEL ----------------
			float pA = 0.04;
			float bead = disc(vec2((fract(s / pA) - 0.5) * pA, a - 0.0075), vec2(0.0165), aa);
			float reel = disc(vec2((fract(s / pA + 0.5) - 0.5) * pA, a - 0.0075), vec2(0.006, 0.0165), aa);
			float zA = max(bead, reel * 0.8);
			h = 0.25 + 0.7 * zA;
			g = mix(0.18 + 0.25 * st, 1.0, sst(0.02, 0.1, zA));
		} else if (a < 0.07) {
			// ---------------- TWISTED ROPE COVE ----------------
			float rope = 0.5 + 0.5 * sin((s + a * 3.0) * 6.2831853 / 0.03);
			h = 0.2 + 0.55 * rope;
			g = 0.65;
		} else if (a < 0.185) {
			// ---------------- PALMETTE AND VINE FRIEZE ----------------
			float P = 0.23;
			float xa = (fract(s / P) - 0.5) * P;
			float xb = (fract(s / P + 0.5) - 0.5) * P;
			float pa = palmette(vec2(xa, a - 0.085), 0.078, aa);
			float pb = palmette(vec2(xb, 0.172 - a), 0.062, aa);
			float aStem = 0.1275 + 0.022 * sin(s / P * 6.2831853);
			float stem = sst(0.0045 + aa, 0.0025, abs(a - aStem));
			float sg = sign(sin(s / P * 12.5663706));
			float dots = disc(vec2((fract(s / P * 2.0 + 0.25) - 0.5) * P * 0.5, a - 0.1275 - 0.036 * sg), vec2(0.007), aa);
			float hC = max(max(pa, pb), max(stem * 0.7, dots * 0.85));
			h = hC;
			g = mix(0.18 + 0.25 * st, 1.0, sst(0.02, 0.1, hC));
		} else if (a < 0.215) {
			// ---------------- EGG AND DART ----------------
			float pD = 0.045;
			float egg = disc(vec2((fract(s / pD) - 0.5) * pD, a - 0.2), vec2(0.0185, 0.0125), aa);
			float dx = (fract(s / pD + 0.5) - 0.5) * pD;
			float dart = sst(0.0, aa, 0.0045 * (1.0 - abs(a - 0.2) / 0.014) - abs(dx)) * step(abs(a - 0.2), 0.014);
			float hD = max(egg, dart * 0.8);
			h = hD;
			g = mix(0.18 + 0.25 * st, 1.0, sst(0.02, 0.1, hD));
		} else {
			// ---------------- FLUTED OUTER SLOPE ----------------
			float rib = 0.5 + 0.5 * cos(s * 6.2831853 / 0.03);
			float prof = clamp((a - 0.215) / 0.045, 0.0, 1.0);
			h = (0.35 + 0.55 * rib) * (1.0 - 0.5 * prof);
			g = 1.0 - 0.35 * sst(0.25, 0.26, a);
		}
	}

	// far away the fine carving melts into an even gilt tone
	float fade = sst(0.012, 0.03, px);
	h = mix(h, 0.45, fade);
	g = mix(g, 0.8, fade);

	// --- lighting: flat bevel normal + embossed relief from the ornament ---
	vec3 n = normalize(cross(dFdx(v_vpos), dFdy(v_vpos)));
	if (n.z < 0.0) n = -n;
	vec2 grad = vec2(dFdx(h), dFdy(h)) * (0.006 / px);
	grad = clamp(grad, vec2(-1.5), vec2(1.5));
	n = normalize(n + vec3(-grad.x, -grad.y, 0.0) * 0.9);

	vec3 key = normalize(vec3(-0.4, 0.55, 0.75));
	vec3 v = normalize(-v_vpos);
	float diff = max(dot(n, key), 0.0);
	float nh = max(dot(n, normalize(key + v)), 0.0);

	// --- gilding: real metal, so its colour comes from what it reflects
	// (the warm lit room above, the dark floor below), with sharp
	// highlights on the raised carving ---
	float hc = clamp(h, 0.0, 1.0);
	float n1 = vnoise(v_l * 7.0) * 0.6 + vnoise(v_l * 23.0 + 5.0) * 0.4;
	// rubbed gilding on the high points and the corners, where hands
	// and dusters touch it; grime settles in the hollows
	float corner = 1.0 - smoothstep(0.0, 0.35, min(min(v_l.x + 0.26, fsize.x + 0.26 - v_l.x), min(v_l.y + 0.26, fsize.y + 0.26 - v_l.y)));
	float rub = clamp(smoothstep(0.62, 0.95, hc) * (0.45 + 0.55 * n1) + corner * 0.35 * n1, 0.0, 1.0) * (1.0 - fade);
	float bole = smoothstep(0.86, 0.97, n1) * rub * (1.0 - fade);
	float grime = (1.0 - g) * 0.6 + (1.0 - hc) * 0.25;
	float rough = clamp(0.38 + 0.22 * n1 - rub * 0.2 + grime * 0.35, 0.12, 0.9);

	vec3 F0 = mix(vec3(0.95, 0.70, 0.30), vec3(1.0, 0.84, 0.50), rub * 0.6) * mix(0.35, 1.0, hc);
	vec3 upV = normalize(view[1].xyz);
	vec3 R = reflect(-v, n);
	float ry = dot(R, upV);
	vec3 env = mix(vec3(0.07, 0.055, 0.04), vec3(0.62, 0.53, 0.40), smoothstep(-0.35, 0.55, ry));
	env += vec3(1.0, 0.9, 0.7) * pow(max(ry, 0.0), 10.0) * 0.6;
	// by night the room the gilding reflects is dark, and cold
	env *= mix(vec3(1.0), vec3(0.28, 0.32, 0.42), night);
	float spec = pow(nh, mix(110.0, 18.0, rough));
	vec3 col = F0 * (env * (1.0 - rough * 0.4) + diff * 0.62 + 0.12) + F0 * spec * (1.4 - rough);

	// red bole showing through where the gold has worn thin
	col = mix(col, vec3(0.30, 0.11, 0.05) * (0.35 + 0.5 * diff), bole * 0.55);
	// the dark recesses of the carving
	col *= mix(0.2, 1.0, g) * (1.0 - grime * 0.15);
	// a breath of dust on the upward faces of the frame
	col = mix(col, vec3(0.42, 0.38, 0.32) * (0.4 + 0.6 * diff), smoothstep(0.6, 1.0, dot(n, upV)) * 0.12);
	col *= 0.9;
	float dist = length(v_vpos);
	col *= mix(0.68, 1.0, 1.0 - sst(8.0, 55.0, dist));
	gl_FragColor = vec4(col, 1.0);
}`,EM=`
precision highp float;
uniform mat4 proj, view, model;
uniform float yScale;
uniform vec2 fsize;
attribute vec4 prof;
varying vec2 v_l;
varying vec3 v_vpos;
void main() {
	float ox = prof.x > 0.5 ? fsize.x + prof.z : -prof.z;
	float oy = prof.y > 0.5 ? fsize.y + prof.z : -prof.z;
	v_l = vec2(ox, oy);
	vec4 mpos = model * vec4(ox, oy, prof.w, 1.0);
	mpos.y *= yScale;
	vec4 vp = view * mpos;
	v_vpos = vp.xyz;
	gl_Position = proj * vp;
}`;Z3.exports=t=>{let e=MM.draw(t),o=t({frag:`#extension GL_OES_standard_derivatives : enable
	#ifdef GL_FRAGMENT_PRECISION_HIGH
	precision highp float;
	#else
	precision mediump float;
	#endif
	uniform sampler2D tex;
	uniform vec2 psize;      // the painting's size in the gallery, metres
	uniform vec2 canvasCm;   // its real size, centimetres (width, height)
	uniform float texel;     // one texel of the painting's picture
	uniform float detail;    // 1: canvas weave, varnish and relief
	uniform float yScale;    // -1 in the mirrored floor
	uniform float night, time;
	${Za().lanternGLSL()}
	varying vec3 uv;
	varying vec3 v_world;
	varying vec3 v_eye;
	varying vec3 v_lamp;
	varying vec3 v_n;
	varying vec3 v_t;
	varying vec3 v_b;

	// http://madebyevan.com/shaders/fast-rounded-rectangle-shadows/
	vec4 erf(vec4 x) {
		vec4 s = sign(x), a = abs(x);
		x = 1.0 + (0.278393 + (0.230389 + 0.078108 * (a * a)) * a) * a;
		x *= x;
		return s - s / (x * x);
	}
	float boxShadow(vec2 lower, vec2 upper, vec2 point, float sigma) {
		vec4 query = vec4(point - lower, point - upper);
		vec4 integral = 0.5 + 0.5 * erf(query * (sqrt(0.5) / sigma));
		return (integral.x - integral.z) * (integral.y - integral.w);
	}

	float luma(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }

	float hash2(vec2 p) {
		vec3 p3 = fract(vec3(p.x, p.y, p.x) * 0.1031);
		p3 += dot(p3, p3.yzx + 33.33);
		return fract((p3.x + p3.y) * p3.z);
	}
	float vnoise2(vec2 p) {
		vec2 i = floor(p), g = fract(p);
		g = g * g * (3.0 - 2.0 * g);
		return mix(mix(hash2(i), hash2(i + vec2(1.0, 0.0)), g.x),
		           mix(hash2(i + vec2(0.0, 1.0)), hash2(i + vec2(1.0, 1.0)), g.x), g.y);
	}

	// how much light the bar above reaches a point of the canvas (in
	// metres from its bottom left corner): three points along the bar,
	// falling off with distance and angle like a real lamp
	float lampAt(vec2 q) {
		float e = 0.0;
		for (int i = -1; i <= 1; i++) {
			vec3 L = vec3(psize.x * 0.5 + float(i) * min(1.1, psize.x * 0.27), psize.y + 0.56, 0.30) - vec3(q, 0.0);
			float d2 = dot(L, L) + 0.9;
			e += ((L.z + 0.25) / sqrt(d2)) / d2;
		}
		return e;
	}

	void main () {
		float frontMask = smoothstep(0.9, 1.0, uv.z);
		float paintingMask = step(0.001, uv.z);

		// the shadow on the wall: the whole frame, cast a little downwards
		// by the light above it
		vec2 pm = uv.xy * psize;
		float FW = 0.26;
		float shadowAlpha = 0.62 * boxShadow(vec2(-FW + 0.02, -FW - 0.10), psize + vec2(FW - 0.02, FW - 0.07), pm, 0.07);

		float wrapping = 0.005 * sign(uv.x-.5) * (1.-uv.z);
		float sideShading = pow(uv.z/4.0, 0.1);
		vec2 st = uv.xy - vec2(wrapping, 0.);
		vec3 col = texture2D(tex, st).rgb;

		if (paintingMask > 0.5 && frontMask > 0.0) {
			// ---- the light pool from the picture light ----
			float pool = lampAt(pm) / lampAt(psize * vec2(0.5, 0.62));
			pool = clamp(pool, 0.0, 1.8);
			float lamp = 0.88 + 0.26 * pow(pool, 0.5);

			vec3 N = v_n;
			float sheen = 0.0;
			if (detail > 0.5 && yScale > 0.0) {
				// ---- canvas weave: ~13 threads a centimetre, at its real
				// size; it melts away where a thread is smaller than a pixel
				vec2 T = st * canvasCm * 13.0;
				float fw = max(fwidth(T.x), fwidth(T.y));
				float wAmp = 1.0 - smoothstep(0.12, 0.30, fw);
				vec2 f = fract(T);
				float over = mod(floor(T.x) + floor(T.y), 2.0);
				vec2 g = vec2(cos(3.14159 * f.x) * mix(0.55, 1.0, over),
				              cos(3.14159 * f.y) * mix(1.0, 0.55, over));
				// little irregularities in the threads
				g *= 0.8 + 0.4 * fract(sin(dot(floor(T), vec2(12.9898, 78.233))) * 43758.5453);
				g *= 0.32 * wAmp;

				// ---- the paint itself. Oil is laid thin in the darks, where
				// the weave of the canvas shows through it, and thick in the
				// lights, where it stands up off the canvas and buries the weave
				float tone = luma(col);
				float body = smoothstep(0.18, 0.75, tone);
				g *= mix(1.35, 0.45, body);

				// a relief that follows the brushwork in the photograph ...
				float tx = texel * 2.0;
				float lx = luma(texture2D(tex, st + vec2(tx, 0.0)).rgb) - luma(texture2D(tex, st - vec2(tx, 0.0)).rgb);
				float ly = luma(texture2D(tex, st + vec2(0.0, tx)).rgb) - luma(texture2D(tex, st - vec2(0.0, tx)).rgb);
				g += vec2(lx, ly) * (0.9 + 0.9 * body);

				// ... the drag of the bristles: fine ridges running along each
				// stroke (across the way the tone changes), a few to the
				// centimetre, fading out where they are too small to see
				vec2 cm = st * canvasCm;
				vec2 grad = vec2(lx, ly);
				float turn = vnoise2(cm * 0.07) * 6.2831;
				vec2 along = normalize(vec2(-grad.y, grad.x) * 14.0 + vec2(cos(turn), sin(turn)));
				vec2 across = vec2(-along.y, along.x);
				vec2 sc = vec2(dot(cm, along) * 0.9, dot(cm, across) * 5.5);
				float bAmp = 1.0 - smoothstep(0.25, 0.6, max(fwidth(sc.x), fwidth(sc.y)));
				float e = 0.35;
				float b0 = vnoise2(sc);
				float bx = vnoise2(sc + vec2(0.0, e)) - b0;
				g += across * bx * (0.35 + 0.75 * body) * bAmp;

				// ... and the canvas is cloth on a stretcher, never perfectly
				// flat: it swells and dips by a hair, which is what makes the
				// light break across it
				vec2 sag = vec2(vnoise2(cm * 0.045 + 3.1), vnoise2(cm * 0.045 + 11.7)) - 0.5;
				g += sag * 0.07;

				N = normalize(v_n - v_t * g.x - v_b * g.y);

				// the tops of the threads and ridges catch the light, the
				// hollows between them hold a little shadow
				vec3 Lw = normalize(v_lamp - v_world);
				float flatL = max(dot(v_n, Lw), 0.05);
				float lit = max(dot(N, Lw), 0.0) / flatL;
				col *= mix(1.0, clamp(lit, 0.72, 1.3), 0.5);
				col *= 1.0 - 0.06 * wAmp * (1.0 - 0.6 * body) * (1.0 - abs(f.x - 0.5) * 2.0) * (1.0 - abs(f.y - 0.5) * 2.0);

				// ---- the varnish: a satin highlight of the lamp that slides
				// over the surface as you move, glossier where the paint is
				// rich and a little sunk-in (matt) in patches, as real
				// varnish dries; and at low angles the whole surface takes
				// on a faint veil of the room's light
				vec3 V = normalize(v_eye - v_world);
				vec3 H = normalize(Lw + V);
				float nh = max(dot(N, H), 0.0);
				float fres = 0.04 + 0.96 * pow(1.0 - max(dot(N, V), 0.0), 5.0);
				float gloss = 0.55 + 0.45 * smoothstep(0.30, 0.70, vnoise2(cm * 0.11 + 7.3));
				sheen = (pow(nh, 90.0) * 0.10 * gloss + pow(nh, 18.0) * 0.022) * min(pool, 1.2) + fres * (0.03 + 0.03 * gloss);
				// the same highlight, tight, on the wet-looking ridges of thick paint
				sheen += pow(nh, 220.0) * 0.12 * body * gloss * min(pool, 1.2);
			}

			// ---- oil paint, not a screen: highlights roll off softly,
			// colours a touch quieter
			col = col * (1.08 - 0.12 * col);
			col = mix(vec3(luma(col)), col, 0.95);

			col *= mix(1.0, lamp, frontMask);
			col += vec3(1.0, 0.93, 0.80) * sheen * frontMask;
			// at night: the picture light low and lantern-yellow, so the
			// painting glows softly instead of shining
			vec3 paint = col;
			col *= mix(vec3(1.0), vec3(0.50, 0.47, 0.40), night);
			// and the moon, cool and soft, from the skylight
			col += paint * vec3(0.11, 0.13, 0.18) * night * frontMask;
			// and the lanterns nearby warm it
			col += paint * lanternLight(v_world, N) * 1.1 * frontMask;

			// ---- the frame's inner lip: its shadow falls on the canvas,
			// deepest along the top where the light comes from
			float lipX = min(pm.x, psize.x - pm.x) - 0.02;
			float lipTop = psize.y - pm.y - 0.02;
			float lipBot = pm.y - 0.02;
			float lip = (1.0 - 0.42 * (1.0 - smoothstep(0.0, 0.07, lipTop)))
			          * (1.0 - 0.22 * (1.0 - smoothstep(0.0, 0.03, lipX)))
			          * (1.0 - 0.12 * (1.0 - smoothstep(0.0, 0.015, lipBot)));
			col *= mix(1.0, lip, frontMask);
		}

		col *= mix(sideShading, 1., frontMask);
		gl_FragColor = mix(vec4(0.,0.,0.,shadowAlpha), vec4(col,1.), paintingMask);
	}`,vert:`
	precision highp float;
	uniform mat4 proj, view, model;
	uniform float yScale;
	uniform vec2 psize;
	attribute vec3 pos;
	varying vec3 uv;
	varying vec3 v_world;
	varying vec3 v_eye;
	varying vec3 v_lamp;
	varying vec3 v_n;
	varying vec3 v_t;
	varying vec3 v_b;
	void main () {
		vec3 p = pos;
		// the shadow quad reaches out past the frame (0.5 m all round)
		vec2 e = step(1.05, p.xy) - step(p.xy, vec2(-0.05));
		p.xy += e * (0.5 / psize - 0.1);
		uv = p;
		vec4 mpos = model * vec4(p, 1);
		v_world = mpos.xyz;
		// the canvas's own directions in the room
		v_n = normalize((model * vec4(0.0, 0.0, 1.0, 0.0)).xyz);
		v_t = normalize((model * vec4(1.0, 0.0, 0.0, 0.0)).xyz);
		v_b = normalize((model * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
		// the picture light's bar (see placement.js: 0.30 m above the
		// frame, 0.42 m out from the wall)
		v_lamp = (model * vec4(0.5, 1.0 + 0.56 / psize.y, 0.42 / 0.12, 1.0)).xyz;
		vec3 t = view[3].xyz;
		v_eye = -vec3(dot(view[0].xyz, t), dot(view[1].xyz, t), dot(view[2].xyz, t));
		mpos.y *= yScale;
		gl_Position = proj * view * mpos;
	}`,attributes:{pos:[0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,-.1,-.1,0,1.1,-.1,0,-.1,1.1,0,1.1,1.1,0]},elements:[0,1,2,3,2,1,1,0,5,4,5,0,3,1,7,5,7,1,0,2,4,6,4,2,8,9,4,5,4,9,9,11,5,7,5,11,11,10,7,6,7,10,10,8,6,4,6,8],uniforms:{model:t.prop("model"),tex:t.prop("tex"),psize:t.prop("framesize"),canvasCm:(s,i)=>i.size?[i.size[1],i.size[0]]:[61,91],texel:1/(K3.isPhone?1024:2048),detail:()=>K3.post===0?0:1},blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}}),r=kM(),n=t({frag:SM,vert:EM,attributes:{prof:r.verts},elements:r.elems,uniforms:{model:t.prop("framemodel"),fsize:t.prop("framesize")},cull:{enable:!1},blend:{enable:!1}}),a=t({frag:`#extension GL_OES_standard_derivatives : enable
precision highp float;
uniform vec3 fixcol;
uniform float fixglow;
varying vec3 v_vpos;
void main() {
	vec3 n = normalize(cross(dFdx(v_vpos), dFdy(v_vpos)));
	if (n.z < 0.0) n = -n;
	vec3 key = normalize(vec3(-0.35, 0.65, 0.70));
	vec3 col = fixcol * (0.40 + 0.90 * max(dot(n, key), 0.0));
	col = mix(col, vec3(1.0, 0.88, 0.62), fixglow);
	gl_FragColor = vec4(col, 1.0);
}`,vert:`
precision highp float;
uniform mat4 proj, view, model;
uniform float yScale;
attribute vec3 pos;
varying vec3 v_vpos;
void main() {
	vec4 mpos = model * vec4(pos, 1.0);
	mpos.y *= yScale;
	vec4 vp = view * mpos;
	v_vpos = vp.xyz;
	gl_Position = proj * vp;
}`,attributes:{pos:[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5],[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]]},elements:[0,1,2,0,2,3,4,5,6,4,6,7,0,1,5,0,5,4,2,3,7,2,7,6,0,3,7,0,7,4,1,2,6,1,6,5],uniforms:{model:t.prop("fixmodel"),fixcol:t.prop("fixcol"),fixglow:t.prop("fixglow")},cull:{enable:!1},blend:{enable:!1}});return function(s){o(s),n(s);let i=[];s.forEach(c=>{c.fixtures&&i.push(...c.fixtures)}),i.length&&a(i),e(s)}}});var Qs=At((kz,Qr)=>{"use strict";var Ne=Math.PI,lt=t=>(+t).toFixed(4),de=[-90,0,0],Ut=16,Ce=22,po=7.8,mr=11.6,y0=.55,gr=(mr-po)/(Ut/2),ve={c:[3.6,8.6,13.6,18.6],hw:1.3,sill:.62,spring:4.9};ve.top=ve.spring+ve.hw;var B0={cols:[-.65,0,.65],rowH:.71,w:.055,ring:.78},Ra={rafter:Ce/12,rafterW:.1,purlin:1,purlinW:.07},Pl=[5.5,11,16.5],No={cx:Ut/2,hw:1.12,spring:3.95,pier:1.05,face:Ce-1.45,back:Ce-.2,floor:.66,top:6.55};No.x0=No.cx-No.hw-No.pier;No.x1=No.cx+No.hw+No.pier;var ut={x0:Ut/2-1.7,x1:Ut/2+1.7,z0:Ce-No.face+.44,z1:Ce-8.2,curb:.5,top:.36},uo={cx:Ut/2,cz:18.1,ri:1.66,ro:2.06,top:6,hw:.84,spring:3.4,cornice:4.85,cloth:2.35,gap:1.05},tg=[.647,.614,.279,-.154,-.322,-.191,-.012,.041,-.087,-.551,-.876,-1,.368,.414,.325,.162,.216,.345,.495,.35,.369,-.7,-.522,-.318,-.128,-.041,.581,.696,.442,.274,.394,.607,.713,-.498,-.313,.401,.802,.751,-.174,-.702,-.917,-.992,-.883,.29,.475,.557,.55,.426,.135,-.125,-.259,-.391,-.671,-.951,-.964,-.727,-.471,-.32,-.244,-.123,.166,.573,.775,.395],Gn=t=>ut.z1-(t-5.6)/11*(ut.z1-ut.z0),yn={x:Ut/2,z:1,plinth:No.floor+.26,height:2.75,yaw:.35,file:"res/nymph.bin"},zh=Ce-yn.z,vr=(()=>{let t=[-.68,.6,.36],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>o/e)})(),fd=t=>[t[0]+de[0],t[1]+de[1],t[2]+de[2]];function dd(){let t=ve.c.map(o=>`
		{
			float dz = q.z - ${lt(o)};
			float inside = smoothstep(-b, b, ${lt(ve.hw)} - abs(dz)) * smoothstep(-b, b, q.y - ${lt(ve.sill)});
			float arch = smoothstep(-b, b, ${lt(ve.hw)} - length(vec2(dz, max(q.y - ${lt(ve.spring)}, 0.0))));
			o = max(o, inside * arch);
		}`).join(""),e=ve.c.map(o=>`
		{
			float dz = q.z - ${lt(o)};
			if (abs(dz) < ${lt(ve.hw+.2)}) {
				${B0.cols.map(r=>`bar = max(bar, 1.0 - smoothstep(${lt(B0.w*.5)} - b, ${lt(B0.w*.5)} + b, abs(dz - ${lt(r)})));`).join(`
				`)}
				float ry = q.y - ${lt(ve.sill)};
				float tr = abs(ry - ${lt(B0.rowH)} * floor(ry / ${lt(B0.rowH)} + 0.5));
				if (q.y < ${lt(ve.spring+.02)}) bar = max(bar, 1.0 - smoothstep(${lt(B0.w*.5)} - b, ${lt(B0.w*.5)} + b, tr));
				float rr = length(vec2(dz, q.y - ${lt(ve.spring)}));
				if (q.y > ${lt(ve.spring)}) bar = max(bar, 1.0 - smoothstep(${lt(B0.w*.5)} - b, ${lt(B0.w*.5)} + b, abs(rr - ${lt(B0.ring)})));
				// the frame round the opening
				bar = max(bar, 1.0 - smoothstep(0.0, b + 0.03, ${lt(ve.hw)} - max(abs(dz), q.y > ${lt(ve.spring)} ? rr : 0.0)));
			}
		}`).join("");return`
	const vec3 STUDIO_SUN = vec3(${lt(vr[0])}, ${lt(vr[1])}, ${lt(vr[2])});

	// how open a window is at (y, z) on the wall's face; b softens edges
	float studioWinOpen(vec3 q, float b) {
		float o = 0.0;
		${t}
		return o;
	}
	float studioWinBars(vec3 q, float b) {
		float bar = 0.0;
		${e}
		return bar;
	}

	float studioVineClump(float u, float seed) {
		return step(-0.25, 0.5 * sin(u * 1.9 + seed) + 0.5 * sin(u * 0.77 + seed * 1.3));
	}
	// how much of the sun the flowering vine takes at a point under a beam
	// (d: distance across the beam, u, v: along and across for the dapple)
	float studioVineShade(float d, float u, float v, float seed) {
		float band = smoothstep(0.5, 0.2, abs(d));
		float dap = 0.5 + 0.5 * sin(u * 23.0 + v * 9.0 + seed) * sin(v * 29.0 - u * 7.0 + seed * 2.0);
		dap = smoothstep(0.2, 0.65, dap);
		return band * studioVineClump(u, seed) * dap * 0.85;
	}

	float studioSun0(vec3 pw) {
		vec3 p = pw - vec3(${lt(de[0])}, ${lt(de[1])}, ${lt(de[2])});
		vec3 S = STUDIO_SUN;
		// the niche: inside its hollow, the sun gets in only through the arch;
		// elsewhere its block of stone stands in the way of some of the light
		{
			// (worked as if the niche stood against the far wall: z turned round)
			vec3 q = vec3(${lt(Ut)} - p.x, p.y, ${lt(Ce)} - p.z);
			vec3 Sq = vec3(-S.x, S.y, -S.z);
			float dxn = q.x - ${lt(No.cx)};
			if (abs(dxn) < ${lt(No.hw)} && q.z > ${lt(No.face)} && q.y > ${lt(No.floor-.05)} && q.y < ${lt(No.spring)} + sqrt(max(${lt(No.hw*No.hw)} - dxn * dxn, 0.0))) {
				if (Sq.z >= 0.0) return 0.0;
				vec3 hf = q + Sq * ((${lt(No.face)} - q.z) / Sq.z);
				float hx = hf.x - ${lt(No.cx)};
				float edge = ${lt(No.hw)} - abs(hx);
				float topY = ${lt(No.spring)} + sqrt(max(${lt(No.hw*No.hw)} - hx * hx, 0.0));
				float soft = 0.02 + 0.03 * (${lt(No.face)} - q.z) / Sq.z;
				float inA = smoothstep(-soft, soft, edge) * smoothstep(-soft, soft, topY - hf.y);
				if (inA <= 0.0) return 0.0;
			} else {
				vec3 bmin = vec3(${lt(No.x0-.2)}, 0.0, ${lt(No.face-.3)}), bmax = vec3(${lt(No.x1+.2)}, ${lt(6.95)}, ${lt(Ce)});
				vec3 inv = 1.0 / Sq;
				vec3 t0 = (bmin - q) * inv, t1 = (bmax - q) * inv;
				vec3 tn = min(t0, t1), tf = max(t0, t1);
				float a = max(max(tn.x, tn.y), tn.z), bb = min(min(tf.x, tf.y), tf.z);
				if (bb > max(a, 0.0) && a > 0.0) return 0.0;
			}
		}
		// where the ray towards the sun leaves through the left wall
		float tw = (0.0 - p.x) / S.x;
		// and where it rises past the eaves
		float te = (${lt(po)} - p.y) / S.y;
		if (tw > 0.0 && tw < te) {
			vec3 h0 = p + S * tw;
			if (h0.z < 0.0 || h0.z > ${lt(Ce)}) return 0.0;
			vec3 h1 = p + S * ((${lt(-y0)} - p.x) / S.x);
			vec3 hm = p + S * ((${lt(-y0*.5)} - p.x) / S.x);
			float b = 0.006 + 0.0075 * tw;
			float open = min(studioWinOpen(h0, b), studioWinOpen(h1, b));
			if (open <= 0.0) return 0.0;
			float bar = studioWinBars(hm, b);
			return open * (1.0 - bar) * 0.92;
		}
		// up through the roof: the trusses' tie beams first
		vec3 he = p + S * max(te, 0.0);
		float vis = 1.0;
		if (p.y < ${lt(po)}) {
			if (he.z < 0.0 || he.z > ${lt(Ce)} || he.x < 0.0 || he.x > ${lt(Ut)}) return 0.0;
			float be = 0.01 + 0.008 * te;
			${Pl.map(o=>`vis *= smoothstep(0.08 - be, 0.08 + be, abs(he.z - ${lt(o)}));`).join(`
			`)}
			// the bougainvillea along the tie beams
			${Ks.filter(o=>o[0]==="truss").map(([o,r,n])=>`vis *= 1.0 - studioVineShade(he.z - ${lt(r)}, he.x, he.z, ${lt(n)});`).join(`
			`)}
		}
		// then the glass: the two slopes of the roof
		float tl = (${lt(gr)} * p.x - p.y + ${lt(po)}) / (S.y - ${lt(gr)} * S.x);
		float tr = (${lt(gr)} * (${lt(Ut)} - p.x) - p.y + ${lt(po)}) / (S.y + ${lt(gr)} * S.x);
		float t = 1e9;
		vec3 h = vec3(0.0);
		vec3 hl = p + S * tl, hr = p + S * tr;
		if (tl > 0.0 && hl.x >= -0.01 && hl.x <= ${lt(Ut/2+.01)}) { t = tl; h = hl; }
		if (tr > 0.0 && tr < t && hr.x >= ${lt(Ut/2-.01)} && hr.x <= ${lt(Ut+.01)}) { t = tr; h = hr; }
		if (t > 1e8) return 0.0;
		if (h.z < 0.0 || h.z > ${lt(Ce)}) return 0.0;
		float b = 0.008 + 0.0075 * t;
		float rz = abs(h.z - ${lt(Ra.rafter)} * floor(h.z / ${lt(Ra.rafter)} + 0.5));
		float bar = 1.0 - smoothstep(${lt(Ra.rafterW*.5)} - b, ${lt(Ra.rafterW*.5)} + b, rz);
		// the ridge beam
		bar = max(bar, 1.0 - smoothstep(0.14 - b, 0.14 + b, abs(h.x - ${lt(Ut/2)})));
		// the old glass is grimy: it lets less through than the windows,
		// unevenly, so the roof's light falls in soft dim drifts and the
		// windows' patterned beams are the bright, dramatic ones
		float pat = 0.42 + 0.3 * smoothstep(-0.6, 0.6, sin(h.x * 0.9 + 1.3) * sin(h.z * 0.7 + 0.4) + 0.4 * sin(h.x * 2.1 - h.z * 1.7));
		// and the vine along the rafters and the ridge
		${Ks.filter(o=>o[0]==="rafter").map(([o,r,n])=>`pat *= 1.0 - studioVineShade(h.z - ${lt(r)}, h.x, h.z, ${lt(n)});`).join(`
		`)}
		pat *= 1.0 - studioVineShade(h.x - ${lt(Ut/2)}, h.z, h.x, 0.9);
		return vis * (1.0 - bar) * pat * 0.78;
	}

	// the rotunda: its ring of stone stops the sun except through the
	// arches; its sheer cloth lets about half through
	float rotHit(vec2 c, vec2 d, float a, float R, out float t1, out float t2) {
		float b = dot(c, d), cc = dot(c, c) - R * R, disc = b * b - a * cc;
		if (disc <= 0.0) { t1 = t2 = -1.0; return 0.0; }
		float q = sqrt(disc);
		t1 = (-b - q) / a; t2 = (-b + q) / a;
		return 1.0;
	}
	float rotOpen(vec3 h, float R) {
		float an = atan(h.x - ${lt(uo.cx)}, h.z - ${lt(uo.cz)});
		float m = an - 1.5707963 * floor(an / 1.5707963 + 0.5);
		float d = R * sin(m);
		return (abs(d) < ${lt(uo.hw)} && h.y < ${lt(uo.spring)} + sqrt(max(${lt(uo.hw*uo.hw)} - d * d, 0.0))) ? 1.0 : 0.0;
	}
	float rotShade(vec3 pw) {
		vec3 p = pw - vec3(${lt(de[0])}, ${lt(de[1])}, ${lt(de[2])});
		vec3 S = STUDIO_SUN;
		vec2 c = p.xz - vec2(${lt(uo.cx)}, ${lt(uo.cz)});
		vec2 d = S.xz;
		float a = dot(d, d);
		float k = 1.0, t1, t2;
		// the stone (as one thin ring at the middle of the wall)
		if (rotHit(c, d, a, ${lt((uo.ri+uo.ro)/2)}, t1, t2) > 0.0) {
			if (t1 > 0.03) { vec3 h = p + S * t1; if (h.y < ${lt(uo.top-.2)} && rotOpen(h, ${lt((uo.ri+uo.ro)/2)}) < 0.5) return 0.0; }
			if (t2 > 0.03) { vec3 h = p + S * t2; if (h.y < ${lt(uo.top-.2)} && rotOpen(h, ${lt((uo.ri+uo.ro)/2)}) < 0.5) return 0.0; }
		}
		// the cloth, except where it parts on the pool's line
		if (rotHit(c, d, a, ${lt(uo.cloth+.15)}, t1, t2) > 0.0) {
			for (int i = 0; i < 2; i++) {
				float t = i == 0 ? t1 : t2;
				if (t > 0.08) {
					vec3 h = p + S * t;
					float an = atan(h.x - ${lt(uo.cx)}, h.z - ${lt(uo.cz)});
					float lat = ${lt(uo.cloth+.15)} * abs(sin(an));
					bool gap = lat < ${lt(uo.gap)} && h.y < ${lt(uo.top)};
					if (h.y < ${lt(uo.top)} && !gap) k *= 0.5;
				}
			}
		}
		return k;
	}
	float studioSun(vec3 pw) { float s0 = studioSun0(pw); return s0 > 0.0 ? s0 * rotShade(pw) : 0.0; }`}function Oa(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let o=e;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}var Et={FLOOR:0,PLASTER:1,STONE:2,STEEL:3,WATER:4,PAD:5,PETAL:6,STAMEN:7,MARBLE:8,WOOD:9,GESSO:10,PAINT:11,POT:12,SHADE:13,BULB:14,NICHE:15,JAR:16,SOIL:17,BRUSH:18,TRAVERTINE:19,CLOTH:20,WMARBLE:21,REDDOOR:22,REDPANEL:23,DARKWOOD:24,BRASS:25,BRACT:26,KEYHOLE:27,ROCK:28,OLDSTONE:29,HOLLOW:30};function hd(){let t={pos:[],nrm:[],kind:[],uv:[],anchor:[],idx:[]};return t.float=null,t.v=(e,o,r,n)=>(t.pos.push(e[0]+de[0],e[1]+de[1],e[2]+de[2]),t.nrm.push(o[0],o[1],o[2]),t.kind.push(r),t.uv.push(n?n[0]:0,n?n[1]:0),t.float?t.anchor.push(t.float[0]+de[0],t.float[1]+de[2],t.float[2],1):t.anchor.push(0,0,0,0),t.pos.length/3-1),t.quad=(e,o,r,n,a,s,i)=>{let c=t.v(e,a,s,i&&i[0]),h=t.v(o,a,s,i&&i[1]),f=t.v(r,a,s,i&&i[2]),d=t.v(n,a,s,i&&i[3]);t.idx.push(c,h,f,c,f,d)},t.box=(e,o,r,n,a,s,i,c)=>{let h=c||{};h.top||t.quad([e,a,r],[e,a,s],[n,a,s],[n,a,r],[0,1,0],i,[[e,r],[e,s],[n,s],[n,r]]),h.bottom||t.quad([e,o,r],[n,o,r],[n,o,s],[e,o,s],[0,-1,0],i,[[e,r],[n,r],[n,s],[e,s]]),h.x0||t.quad([e,o,r],[e,o,s],[e,a,s],[e,a,r],[-1,0,0],i,[[r,o],[s,o],[s,a],[r,a]]),h.x1||t.quad([n,o,s],[n,o,r],[n,a,r],[n,a,s],[1,0,0],i,[[s,o],[r,o],[r,a],[s,a]]),h.z0||t.quad([n,o,r],[e,o,r],[e,a,r],[n,a,r],[0,0,-1],i,[[n,o],[e,o],[e,a],[n,a]]),h.z1||t.quad([e,o,s],[n,o,s],[n,a,s],[e,a,s],[0,0,1],i,[[e,o],[n,o],[n,a],[e,a]])},t.tbox=(e,o,r,n,a,s,i,c,h)=>{let f=Math.cos(r),d=Math.sin(r),u=Math.cos(h||0),v=Math.sin(h||0),l=(g,x,y)=>{let w=a+(x-a)*u-y*v*0,_=y+(x-a)*v,M=a+(x-a)*u;return[e+f*g+d*_,M,o-d*g+f*_]},p=g=>{let x=g[1]*u-g[2]*v,y=g[2]*u+g[1]*v;return[f*g[0]+d*y,x,-d*g[0]+f*y]},m=(g,x,y,w,_)=>t.quad(l(...g),l(...x),l(...y),l(...w),p(_),c,[[g[0]+g[2],g[1]],[x[0]+x[2],x[1]],[y[0]+y[2],y[1]],[w[0]+w[2],w[1]]]);m([-n,s,-i],[-n,s,i],[n,s,i],[n,s,-i],[0,1,0]),m([-n,a,-i],[n,a,-i],[n,a,i],[-n,a,i],[0,-1,0]),m([-n,a,-i],[-n,a,i],[-n,s,i],[-n,s,-i],[-1,0,0]),m([n,a,i],[n,a,-i],[n,s,-i],[n,s,i],[1,0,0]),m([n,a,-i],[-n,a,-i],[-n,s,-i],[n,s,-i],[0,0,-1]),m([-n,a,i],[n,a,i],[n,s,i],[-n,s,i],[0,0,1])},t.beam=(e,o,r,n,a)=>{let s=[o[0]-e[0],o[1]-e[1],o[2]-e[2]],i=Math.hypot(...s),c=s.map(l=>l/i),h=a||(Math.abs(c[1])>.9?[1,0,0]:[0,1,0]),f=[c[1]*h[2]-c[2]*h[1],c[2]*h[0]-c[0]*h[2],c[0]*h[1]-c[1]*h[0]],d=Math.hypot(...f);f=f.map(l=>l/d),h=[f[1]*c[2]-f[2]*c[1],f[2]*c[0]-f[0]*c[2],f[0]*c[1]-f[1]*c[0]];let u=(l,p,m)=>[l[0]+f[0]*r*p+h[0]*r*m,l[1]+f[1]*r*p+h[1]*r*m,l[2]+f[2]*r*p+h[2]*r*m],v=[[[1,-1],[1,1],f],[[1,1],[-1,1],h],[[-1,1],[-1,-1],f.map(l=>-l)],[[-1,-1],[1,-1],h.map(l=>-l)]];for(let[l,p,m]of v)t.quad(u(e,...l),u(o,...l),u(o,...p),u(e,...p),m,n,[[0,0],[i,0],[i,1],[0,1]])},t.lathe=(e,o,r,n,a)=>{let s=a||32,i=r.map(([c,h],f)=>{let d=r[Math.max(0,f-1)],u=r[Math.min(r.length-1,f+1)],v=u[0]-d[0],l=u[1]-d[1],p=Math.hypot(v,l)||1,m=l/p,g=-v/p,x=[];for(let y=0;y<=s;y++){let w=y/s*2*Ne;x.push(t.v([e+Math.cos(w)*c,h,o+Math.sin(w)*c],[Math.cos(w)*m,g,Math.sin(w)*m],n,[y/s*c*2*Ne,h]))}return x});for(let c=0;c<i.length-1;c++)for(let h=0;h<s;h++){let f=i[c][h],d=i[c][h+1],u=i[c+1][h+1],v=i[c+1][h];t.idx.push(f,v,u,f,u,d)}},t}var da=t=>Math.abs(t)>=ve.hw?null:ve.spring+Math.sqrt(ve.hw*ve.hw-t*t),Ks=[["truss",Pl[0],3.1],["truss",Pl[1],5.4],["truss",Pl[2],7.7],["rafter",Ra.rafter*2,1.7],["rafter",Ra.rafter*5,8.5],["rafter",Ra.rafter*8,13.6],["rafter",Ra.rafter*10,17],["ridge",Ut/2,.9],...[.75,...ve.c.slice(1).map((t,e)=>(t+ve.c[e])/2),Ce-.75].map((t,e)=>["wall",t,2.3+e*4.1])],Il=(t,e)=>.5*Math.sin(t*1.9+e)+.5*Math.sin(t*.77+e*1.3)>-.25,zM=t=>t<Ut/2?po+gr*t:po+gr*(Ut-t);function Lh(t,e,o){return t==="wall"?[.12,o,e]:t==="truss"?[o,po-.12,e]:t==="rafter"?[o,zM(o)-.2,e]:[e,mr-.32,o]}var Nh=t=>t==="ridge"?[.4,Ce-.4]:t==="wall"?[.15,po-.05]:[.35,Ut-.35],b0={w:1.72,spring:2.05,r:2.05,frame:.21,zl:Ce-.05,zf:Ce-.13};b0.c=b0.r-b0.w/2;var Or=(t,e)=>{let o=b0.r+(e||0),r=Math.abs(t)+b0.c;return r>=o?b0.spring:b0.spring+Math.sqrt(o*o-r*r)};b0.top=Or(0);function AM(t){let e=Ut/2,{w:o,frame:r,zl:n,zf:a}=b0,s=o/2,i=s+r,c=.02;for(let M=-i;M<i-1e-6;M+=c){let k=M,R=Math.min(i,M+c),A=(k+R)/2,F=Or(k,r),C=Or(R,r),H=0,I=0;Math.abs(A)<s&&(H=Or(k),I=Or(R)),Math.abs(A)>=s;{let V=Math.abs(A)<s?H:0,dt=Math.abs(A)<s?I:0;t.quad([e+R,dt,a],[e+k,V,a],[e+k,F,a],[e+R,C,a],[0,0,-1],Et.DARKWOOD,[[R,dt],[k,V],[k,F],[R,C]])}t.quad([e+k,F,a],[e+k,F,Ce],[e+R,C,Ce],[e+R,C,a],[0,1,0],Et.DARKWOOD,[[k,0],[k,1],[R,1],[R,0]]),Math.abs(A)<s&&t.quad([e+k,H,a],[e+R,I,a],[e+R,I,n],[e+k,H,n],[0,-1,0],Et.DARKWOOD,[[k,0],[R,0],[R,1],[k,1]])}for(let M of[-1,1])t.quad([e+M*i,0,a],[e+M*i,0,Ce],[e+M*i,b0.spring,Ce],[e+M*i,b0.spring,a],[M,0,0],Et.DARKWOOD,[[0,0],[1,0],[1,1],[0,1]]),t.quad([e+M*s,0,a],[e+M*s,b0.spring,a],[e+M*s,b0.spring,n],[e+M*s,0,n],[-M,0,0],Et.DARKWOOD,[[0,0],[1,0],[1,1],[0,1]]),t.box(e+M*(s+r/2)-r/2-.04,0,a-.04,e+M*(s+r/2)+r/2+.04,.42,Ce,Et.DARKWOOD);let h=40;for(let M=0;M<h;M++){let k=-s+2*s*M/h,R=-s+2*s*(M+1)/h;t.beam([e+k,Or(k)+.03,a-.015],[e+R,Or(R)+.03,a-.015],.018,Et.DARKWOOD)}for(let M of[-1,1])t.beam([e+M*(s+.03),.42,a-.015],[e+M*(s+.03),b0.spring+.02,a-.015],.018,Et.DARKWOOD);for(let M=-s;M<s-1e-6;M+=c){let k=M,R=Math.min(s,M+c),A=Or(k),F=Or(R);t.quad([e+R,0,n],[e+k,0,n],[e+k,A,n],[e+R,F,n],[0,0,-1],Et.REDDOOR,[[R,0],[k,0],[k,A],[R,F]])}let f=s-.2,d=.3,u=2.12,v=n-.006,l=.05,p=(M,k,R,A)=>t.box(e+M,k,v-.018,e+R,A,v,Et.REDDOOR);p(-f,d,f,d+l),p(-f,u-l,f,u),p(-f,d,-f+l,u),p(f-l,d,f,u),t.box(e-f+.14,d+.14,v-.022,e+f-.14,u-.14,v,Et.REDDOOR);let m=2.36;p(-s+.08,u+.06,s-.08,u+.12);for(let M of[-1,1]){let R=s-.17;for(let A=.07;A<R-1e-6;A+=c){let F=A,C=Math.min(R,A+c),H=Or(F,-.18),I=Or(C,-.18);if(H<=m+.02&&I<=m+.02)continue;let V=$t=>e+M*$t,dt=[[V(F),m,v+.004],[V(C),m,v+.004],[V(C),Math.max(m,I),v+.004],[V(F),Math.max(m,H),v+.004]];M>0?t.quad(dt[1],dt[0],dt[3],dt[2],[0,0,-1],Et.REDPANEL,[[C,0],[F,0],[F,1],[C,1]]):t.quad(...dt,[0,0,-1],Et.REDPANEL,[[F,0],[C,0],[C,1],[F,1]])}}t.beam([e,m-.02,v-.008],[e,Or(0,-.12),v-.008],.03,Et.REDDOOR),t.beam([e-s+.1,m-.01,v-.006],[e+s-.1,m-.01,v-.006],.014,Et.REDDOOR);let g=e-s+.15,x=1.06,y=v-.03;t.box(g-.034,x-.2,y-.008,g+.034,x+.17,y+.012,Et.BRASS);for(let[M,k]of[[x+.2,.026],[x+.235,.016],[x-.23,.026],[x-.265,.016]])t.lathe(g,y-.002,[[0,M-k],[k,M-k*.4],[k,M+k*.4],[0,M+k]],Et.BRASS,12);for(let M=0;M<6;M++){let k=x-.17+M*.065;for(let R of[-1,1])t.beam([g+R*.034,k,y-.01],[g+R*.041,k+.03,y-.01],.006,Et.BRASS)}let w=y-.008,_=(M,k,R)=>{for(let A=0;A<R;A++){let F=Ne*A/R,C=Ne*(A+1)/R;for(let H=0;H<16;H++){let I=2*Ne*H/16,V=2*Ne*(H+1)/16,dt=(we,_e)=>[g+k*Math.sin(we)*Math.cos(_e),x+.03+k*Math.sin(we)*Math.sin(_e),M-k*Math.cos(we)],$t=(we,_e)=>[Math.sin(we)*Math.cos(_e),Math.sin(we)*Math.sin(_e),-Math.cos(we)],kt=t.v(dt(F,I),$t(F,I),Et.BRASS),mt=t.v(dt(F,V),$t(F,V),Et.BRASS),st=t.v(dt(C,V),$t(C,V),Et.BRASS),Wt=t.v(dt(C,I),$t(C,I),Et.BRASS);t.idx.push(kt,mt,st,kt,st,Wt)}}};t.beam([g,x+.03,w],[g,x+.03,w-.05],.011,Et.BRASS),_(w-.075,.034,10),t.box(g-.008,x-.1,y-.0125,g+.008,x-.06,y-.0085,Et.KEYHOLE)}var eg=[0,Ne/2,Ne,-Ne/2],ld=t=>{let e=Ne/2;return t-Math.round(t/e)*e},Ol=t=>{let e=Math.abs(t);return uo.top-.55*Math.pow(Math.max(0,Math.sin(e*3+.6)),6)-.25*Math.pow(Math.max(0,Math.sin(e*7+1.9)),8)-.06*Math.sin(e*23)};function TM(t){let{cx:e,cz:o,ri:r,ro:n,hw:a,spring:s}=uo,i=Et.OLDSTONE,c=(u,v,l)=>[e+Math.sin(u)*v,l,o+Math.cos(u)*v],h=u=>s+Math.sqrt(Math.max(0,a*a-u*u)),f=(u,v)=>{let l=[];for(let g=0;g<=160;g++)l.push(-Ne+2*Ne*g/160);let m=Math.asin(Math.min(.999,a/u));for(let g of eg)for(let x of[-1,1])l.push(((g+x*m+Ne)%(2*Ne)+2*Ne)%(2*Ne)-Ne);l.sort((g,x)=>g-x);for(let g=0;g<l.length-1;g++){let x=l[g],y=l[g+1];if(y-x<1e-5)continue;let w=ld((x+y)/2),_=Math.abs(u*Math.sin(w))<a&&Math.abs(w)<Ne/4,M=kt=>_?h(u*Math.sin(ld(kt))):0,k=[Math.sin(x)*v,0,Math.cos(x)*v],R=[Math.sin(y)*v,0,Math.cos(y)*v],A=c(x,u,M(x)),F=c(y,u,M(y)),C=c(y,u,Ol(y)),H=c(x,u,Ol(x)),I=t.v(A,k,i,[u*x,A[1]]),V=t.v(F,R,i,[u*y,F[1]]),dt=t.v(C,R,i,[u*y,C[1]]),$t=t.v(H,k,i,[u*x,H[1]]);if(v>0?t.idx.push(I,V,dt,I,dt,$t):t.idx.push(I,dt,V,I,$t,dt),v>0){let kt=c(x,r,Ol(x)),mt=c(y,r,Ol(y));t.quad(H,C,mt,kt,[0,1,0],i,[[H[0],H[2]],[C[0],C[2]],[mt[0],mt[2]],[kt[0],kt[2]]])}}};f(n,1),f(r,-1);for(let u of eg){let v=[Math.sin(u),0,Math.cos(u)],l=[Math.cos(u),0,-Math.sin(u)],p=(x,y,w)=>[e+v[0]*Math.sqrt(y*y-x*x)+l[0]*x,w,o+v[2]*Math.sqrt(y*y-x*x)+l[2]*x];for(let x of[-1,1]){let y=x*a,w=[-l[0]*x,0,-l[2]*x];t.quad(p(y,r,0),p(y,n,0),p(y,n,s),p(y,r,s),w,i,[[0,0],[1,0],[1,1],[0,1]])}let m=20;for(let x=0;x<m;x++){let y=-a+2*a*x/m,w=-a+2*a*(x+1)/m,_=(y+w)/2,M=h(_),k=[-(l[0]*_),-(M-s),-(l[2]*_)],R=Math.hypot(...k),A=k.map(F=>F/R);t.quad(p(y,r,h(y)),p(w,r,h(w)),p(w,n,h(w)),p(y,n,h(y)),A,i,[[y,0],[w,0],[w,1],[y,1]])}let g=n+.05;for(let x=0;x<24;x++){let y=Ne*x/24,w=Ne*(x+1)/24,_=a+.08,M=k=>{let R=Math.cos(k)*_;return p(Math.max(-g+.01,Math.min(g-.01,R)),g,s+Math.sin(k)*_)};t.beam(M(y),M(w),.06,i)}for(let x of[-1,1]){let y=p(x*(a+.1),n+.06,s-.15),w=p(x*(a+.1),n+.06,s);t.beam(y,w,.14,i)}t.beam(p(0,n+.07,s+a-.05),p(0,n+.07,s+a+.3),.13,i)}let d=(u,v,l,p,m)=>{for(let x=0;x<96;x++){let y=-Ne+2*Ne*x/96,w=-Ne+2*Ne*(x+1)/96,_=ld((y+w)/2);if(m&&Math.abs(v*Math.sin(_))<a+.05&&Math.abs(_)<Ne/4)continue;let M=[Math.sin(y),0,Math.cos(y)],k=[Math.sin(w),0,Math.cos(w)],R=t.v(c(y,v,l),M,i,[v*y,l]),A=t.v(c(w,v,l),k,i,[v*w,l]),F=t.v(c(w,v,p),k,i,[v*w,p]),C=t.v(c(y,v,p),M,i,[v*y,p]);t.idx.push(R,A,F,R,F,C),t.quad(c(y,v,p),c(w,v,p),c(w,u,p),c(y,u,p),[0,1,0],i,[[y,0],[w,0],[w,1],[y,1]]),t.quad(c(y,u,l),c(w,u,l),c(w,v,l),c(y,v,l),[0,-1,0],i,[[y,0],[w,0],[w,1],[y,1]])}};d(n-.02,n+.12,0,.38,!0),d(n-.02,n+.1,uo.cornice-.12,uo.cornice,!1),d(n-.02,n+.2,uo.cornice,uo.cornice+.2,!1);for(let u of[Ne/4,3*Ne/4,-Ne/4,-3*Ne/4]){let v=.3/n;for(let[l,p,m,g]of[[n,n+.07,.38,uo.cornice-.12]]){let x=u-v,y=u+v,w=[Math.sin(u),0,Math.cos(u)];t.quad(c(x,p,m),c(y,p,m),c(y,p,g),c(x,p,g),w,i,[[x*p,m],[y*p,m],[y*p,g],[x*p,g]]);for(let[_,M]of[[x,-1],[y,1]]){let k=[Math.cos(_)*M,0,-Math.sin(_)*M];t.quad(c(_,l,m),c(_,p,m),c(_,p,g),c(_,l,g),k,i,[[0,m],[1,m],[1,g],[0,g]])}}}}function LM(){let{cx:t,cz:e,ro:o}=uo,r=[],n=[],a=[],s=[],i=v=>{let l=(v/(2*Ne)*4%1+1)%1*64,p=Math.floor(l),m=l-p;return tg[p%64]*(1-m)+tg[(p+1)%64]*m},c=Oa(9090),h=Math.asin(Math.min(.999,uo.gap/uo.cloth)),f=[[h,Ne-h],[-Ne+h,-h]],d=46,u=8;for(let[v,l]of f){let p=Math.round((l-v)*uo.cloth/.035),m=r.length/3,g=[],x=[];for(let w=0;w<=p;w++)x.push(.25+.3*c());for(let w=0;w<=d+u;w++){let _=[];for(let M=0;M<=p;M++){let k=v+(l-v)*M/p,R=Ol(k)+.04,A=Math.min(k-v,l-k)*uo.cloth,F,C;if(w<=d){let H=w/d;C=R*(1-H);let I=.5*Math.pow(H,2.2)+.1*Math.sqrt(H),V=(.05+.34*Math.pow(H,1.3))*i(k),dt=(.02+.07*H)*Math.sin(k*uo.cloth/.16+2*i(k*1.7)),$t=.03*(1-H)*Math.sin(k*uo.cloth/.055)+.015*Math.sin(k*uo.cloth/.031+H*3),kt=dt+$t,mt=.12*Math.exp(-A/.25)*Math.sin(A*18)*H;F=o+.05+I+V+kt+mt,w===0&&(F=o-.15,C=R+.02)}else{let H=(w-d)/u;F=o+.05+.6+.39*i(k)+H*x[M]*(.7+.3*(1+i(k+.3))),C=.012+.05*Math.max(0,Math.sin(H*7+k*23))*(1-H)+.03*(1-H)}_.push([t+Math.sin(k)*F,C,e+Math.cos(k)*F])}g.push(_)}for(let w=0;w<g.length;w++)for(let _=0;_<=p;_++){let M=g[w][_],k=g[w][Math.max(_-1,0)],R=g[w][Math.min(_+1,p)],A=g[Math.max(w-1,0)][_],F=g[Math.min(w+1,g.length-1)][_],C=[R[0]-k[0],R[1]-k[1],R[2]-k[2]],H=[F[0]-A[0],F[1]-A[1],F[2]-A[2]],I=[C[1]*H[2]-C[2]*H[1],C[2]*H[0]-C[0]*H[2],C[0]*H[1]-C[1]*H[0]],V=Math.hypot(...I)||1;I=I.map(dt=>dt/V),r.push(M[0]+de[0],M[1]+de[1],M[2]+de[2]),n.push(...I),a.push((v+(l-v)*_/p)*uo.cloth,w/(d+u))}let y=p+1;for(let w=0;w<g.length-1;w++)for(let _=0;_<p;_++){let M=m+w*y+_;s.push(M,M+1,M+y+1,M,M+y+1,M+y)}}for(let v of[Ne/2,-Ne/2]){let l=r.length/3,p=40,m=30,g=[Math.sin(v),0,Math.cos(v)],x=[Math.cos(v),0,-Math.sin(v)];for(let y=0;y<=m;y++)for(let w=0;w<=p;w++){let _=-uo.hw+2*uo.hw*w/p,M=y/m,R=(uo.spring+Math.sqrt(Math.max(0,uo.hw*uo.hw-_*_))-.02)*(1-M)+.01,A=(uo.ri+uo.ro)/2+.06*Math.sin(_*34)*(.3+M)+.12*M*M,F=[t+g[0]*A+x[0]*_,R,e+g[2]*A+x[2]*_];r.push(F[0]+de[0],F[1]+de[1],F[2]+de[2]);let C=[g[0]+x[0]*Math.cos(_*34)*.6,.1,g[2]+x[2]*Math.cos(_*34)*.6],H=Math.hypot(...C);n.push(C[0]/H,C[1]/H,C[2]/H),a.push(_,M)}for(let y=0;y<m;y++)for(let w=0;w<p;w++){let _=l+y*(p+1)+w;s.push(_,_+1,_+p+2,_,_+p+2,_+p+1)}}return{pos:r,nrm:n,uv:a,idx:s}}function NM(t,e){let o=t.pos.length/3;for(let r=0;r<e.pos.length;r+=3){let n=e.pos[r]-de[0],a=e.pos[r+2]-de[2];t.pos.push(Ut-n+de[0],e.pos[r+1],Ce-a+de[2]),t.nrm.push(-e.nrm[r],e.nrm[r+1],-e.nrm[r+2])}t.kind.push(...e.kind),t.uv.push(...e.uv),t.anchor.push(...e.anchor);for(let r of e.idx)t.idx.push(r+o)}function RM(t){let{cx:e,hw:o,spring:r,pier:n,face:a,back:s,floor:i,x0:c,x1:h}=No,f=Et.OLDSTONE,d=Et.HOLLOW,u=s-o,v=5.35,l=m=>r+Math.sqrt(Math.max(0,o*o-(m-e)*(m-e)));t.box(c-.1,0,a-.28,h+.1,i-.06,Ce,f,{bottom:!0}),t.box(c-.14,i-.06,a-.34,h+.14,i,Ce,f),t.box(e-.95,ut.top,a-.62,e+.95,ut.top+.15,a-.28,f,{bottom:!0});for(let[m,g]of[[c,e-o],[e+o,h]]){t.box(m,i,a+.03,g,v,Ce,d,{bottom:!0});let x=m<e?m:g,y=m<e?g:m,w=m<e?1:-1,_=11,M=(v-.38-i)/_;for(let k=0;k<_;k++){let R=i+k*M+.018,A=i+(k+1)*M-.018,F=k%2===0,C=x+w*.01,H=F?y-w*.01:x+w*(n*.66);if(t.box(Math.min(C,H),R,a-.06,Math.max(C,H),A,a+.03,f,{z1:!0}),!F){let V=x+w*(n*.66+.025),dt=y-w*.01;t.box(Math.min(V,dt),R,a-.02,Math.max(V,dt),A,a+.03,f,{z1:!0})}let I=x-w*.035;t.box(Math.min(I,x+w*.02),R,a-.035,Math.max(I,x+w*.02),A,F?a+.9:a+.55,f)}t.box(m-.05,v-.38,a-.07,g+.05,v-.3,Ce,f),t.box(m-.02,v-.3,a-.03,g+.02,v-.12,Ce,f),t.box(m-.09,v-.12,a-.11,g+.09,v,Ce,f)}let p=.03;for(let m=e-o;m<e+o-1e-6;m+=p){let g=m,x=Math.min(e+o,m+p);t.quad([x,l(x),a+.02],[g,l(g),a+.02],[g,v,a+.02],[x,v,a+.02],[0,0,-1],f,[[x,l(x)],[g,l(g)],[g,v],[x,v]])}{let g=o+.07;for(let y=0;y<36;y++){let w=Ne*y/36,_=Ne*(y+1)/36;t.beam([e+Math.cos(w)*g,r+Math.sin(w)*g,a-.02],[e+Math.cos(_)*g,r+Math.sin(_)*g,a-.02],.065,f,[0,0,1])}for(let y of[-1,1])t.box(e+y*o-.16,r-.14,a-.06,e+y*o+.16,r,a+.4,f);let x=r+o;t.quad([e-.17,x+.32,a-.08],[e+.17,x+.32,a-.08],[e+.11,x-.06,a-.08],[e-.11,x-.06,a-.08],[0,0,-1],f,[[0,1],[1,1],[1,0],[0,0]]);for(let y of[-1,1])t.quad([e+y*.11,x-.06,a-.08],[e+y*.17,x+.32,a-.08],[e+y*.17,x+.32,a+.02],[e+y*.11,x-.06,a+.02],[y,-.15,0],f,[[0,0],[1,0],[1,1],[0,1]]);t.quad([e-.11,x-.06,a-.08],[e+.11,x-.06,a-.08],[e+.11,x-.06,a+.02],[e-.11,x-.06,a+.02],[0,-1,0],f,[[0,0],[1,0],[1,1],[0,1]])}for(let m of[-1,1]){let g=e+m*o;t.quad([g,i,a],[g,i,u],[g,r,u],[g,r,a],[-m,0,0],d,[[a,i],[u,i],[u,r],[a,r]])}{for(let y=0;y<40;y++){let w=Ne*y/40,_=Ne*(y+1)/40,M=(R,A)=>[e+Math.cos(R)*o,r+Math.sin(R)*o,A],k=[-Math.cos((w+_)/2),-Math.sin((w+_)/2),0];t.quad(M(w,a),M(_,a),M(_,u),M(w,u),k,d,[[o*w+0,a],[o*_,a],[o*_,u],[o*w,u]])}for(let y=0;y<40;y++){let w=Ne*y/40,_=Ne*(y+1)/40,M=(H,I)=>[e+Math.cos(H)*o,I,u+Math.sin(H)*o],k=H=>[-Math.cos(H),0,-Math.sin(H)],R=t.v(M(w,i),k(w),d,[o*w,i]),A=t.v(M(_,i),k(_),d,[o*_,i]),F=t.v(M(_,r),k(_),d,[o*_,r]),C=t.v(M(w,r),k(w),d,[o*w,r]);t.idx.push(R,A,F,R,F,C)}let x=[];for(let y=0;y<=14;y++){let w=Ne/2*y/14,_=[];for(let M=0;M<=40;M++){let k=Ne*M/40,R=[Math.cos(k)*Math.cos(w),Math.sin(w),Math.sin(k)*Math.cos(w)];_.push(t.v([e+o*R[0],r+o*R[1],u+o*R[2]],R.map(A=>-A),d,[o*k,r+o*w]))}x.push(_)}for(let y=0;y<14;y++)for(let w=0;w<40;w++){let _=x[y][w],M=x[y][w+1],k=x[y+1][w+1],R=x[y+1][w];t.idx.push(_,M,k,_,k,R)}t.box(e-o,i-.02,a-.02,e+o,i,s,d,{bottom:!0,x0:!0,x1:!0,z1:!0})}t.box(yn.x-.6,i,zh-.5,yn.x+.6,yn.plinth-.05,zh+.55,f,{bottom:!0}),t.box(yn.x-.64,yn.plinth-.05,zh-.54,yn.x+.64,yn.plinth,zh+.59,f),t.box(c-.06,v,a-.08,h+.06,v+.32,Ce,f),t.box(c-.02,v+.32,a-.02,h+.02,v+.78,Ce,f),t.box(c-.12,v+.78,a-.16,h+.12,v+.86,Ce,f),t.box(c-.2,v+.86,a-.26,h+.2,v+1.02,Ce,f);{let m=v+.55,g=.34,x=.2,y=28,w=[];for(let _=0;_<=4;_++){let M=_/4,k=[];for(let R=0;R<=y;R++){let A=2*Ne*R/y,F=.09*Math.sqrt(Math.max(0,1-M*M))+.01;k.push(t.v([e+Math.cos(A)*g*M,m+Math.sin(A)*x*M,a-.02-F],[Math.cos(A)*M*.6,Math.sin(A)*M*.6,-1],f,[Math.cos(A)*M,Math.sin(A)*M]))}w.push(k)}for(let _=0;_<4;_++)for(let M=0;M<y;M++){let k=w[_][M],R=w[_][M+1],A=w[_+1][M+1],F=w[_+1][M];t.idx.push(k,F,A,k,A,R)}for(let _=0;_<y;_++){let M=2*Ne*_/y,k=2*Ne*(_+1)/y;t.beam([e+Math.cos(M)*(g+.03),m+Math.sin(M)*(x+.03),a-.04],[e+Math.cos(k)*(g+.03),m+Math.sin(k)*(x+.03),a-.04],.025,f,[0,0,1])}for(let _ of[-1,1])for(let M=0;M<14;M++){let k=1.8*Ne*M/14,R=1.8*Ne*(M+1)/14,A=.1*(1-M/16),F=.1*(1-(M+1)/16),C=e+_*(g+.16),H=m;t.beam([C+_*Math.cos(k)*A,H+Math.sin(k)*A,a-.04],[C+_*Math.cos(R)*F,H+Math.sin(R)*F,a-.04],.018,f,[0,0,1])}}{let m=v+1.02,g=.62,x=(h-c)/2+.2,y=a-.2,w=M=>m+g*(1-Math.abs(M-e)/x);for(let M=e-x;M<e+x-1e-6;M+=.1){let k=M,R=Math.min(e+x,M+.1);t.quad([R,m,y],[k,m,y],[k,w(k),y],[R,w(R),y],[0,0,-1],f,[[R,m],[k,m],[k,w(k)],[R,w(R)]])}let _=Math.hypot(x,g);for(let M of[-1,1]){let k=[M*g/_,x/_,0],R=e+M*(x+.06);t.quad([e,m+g+.06,y-.06],[R,m-.02,y-.06],[R,m-.02,Ce],[e,m+g+.06,Ce],k,f,[[0,y],[_,y],[_,Ce],[0,Ce]]),t.quad([e,m+g+.06,y-.06],[e,m+g-.06,y-.06],[R,m-.12,y-.06],[R,m-.02,y-.06],[0,0,-1],f,[[0,1],[0,0],[_,0],[_,1]])}}}function OM(t){let e=Oa(77);for(let[o,r,n]of Ks){let[a,s]=Nh(o);for(let i=0;i<2;i++){let c=null;for(let h=a;h<=s;h+=.18){let f=Lh(o,r,h),d=Math.sin(h*3.1+i*2+n)*.07,u=Math.cos(h*2.3+i+n)*.05,v=o==="wall"?.25+.5*h/po:0,l=o==="wall"?[.05+Math.abs(u)*.6,f[1],f[2]+d*(1.5+i)*(1+2*v)+(i-.5)*v]:o==="ridge"?[f[0]+d,f[1]+u+.12,f[2]]:[f[0],f[1]+u+.12,f[2]+d];c&&(o==="wall"||Il(h,n)||e()<.5)&&t.beam(c,l,(o==="wall"?.022*(1.2-h/po):.012)+.008*e(),Et.WOOD),c=l}}}}function CM(t){let e=Oa(4242),o=(n,a)=>!(n>ut.x0-ut.curb-.1&&n<ut.x1+ut.curb+.1&&a>ut.z0-ut.curb-.1&&a<ut.z1+ut.curb+.1)&&n>.2&&n<Ut-.2&&a>.3&&a<Ce-.4,r=(n,a,s,i)=>{let c=.022+e()*.022,h=e()*2*Ne,f=Math.cos(h),d=Math.sin(h),u=(l,p)=>[n+(l*f-p*d)*c,a+.004*l*p,s+(l*d+p*f)*c],v=i?2:0;t.quad(u(-1,-1),u(-1,1),u(1,1),u(1,-1),[0,1,0],Et.BRACT,[[v,0],[v,1],[v+1,1],[v+1,0]])};for(let[n,a,s]of Ks){let[i,c]=Nh(n);for(let h=i;h<=c;h+=.05){if(!Il(h,s)||e()>.55)continue;let f=Lh(n,a,h),d=f[0]+(e()-.5)*1.8,u=f[2]+(e()-.5)*1.8;o(d,u)&&r(d,.004,u,e()<.18)}}for(let n=0;n<260;n++){let a=Math.floor(e()*4),s,i;a<2?(s=a?ut.x1+ut.curb+.12+e()*e()*.9:ut.x0-ut.curb-.12-e()*e()*.9,i=ut.z0+e()*(ut.z1-ut.z0)):(i=a===2?ut.z0-ut.curb-.12-e()*e()*.9:ut.z1+ut.curb+.12+e()*e()*.9,s=ut.x0+e()*(ut.x1-ut.x0)),o(s,i)&&r(s,.004,i,e()<.18)}for(let n=0;n<70;n++){let a=ut.x0+.08+e()*(ut.x1-ut.x0-.16),s=ut.z0+.08+e()*(ut.z1-ut.z0-.16);Math.hypot(a-yn.x,s-yn.z)<.6||(t.float=[a,s,a*5.1+s*2.9],r(a,.016,s,e()<.2),t.float=null)}}function PM(t,e,o){let r=(a,s,i,c,h)=>{let f=t.pos.length/3,d=Math.cos(i),u=Math.sin(i),v=Math.cos(c),l=Math.sin(c),p=[d,0,-u],m=[u*l,v,d*l],g=[p[1]*m[2]-p[2]*m[1],p[2]*m[0]-p[0]*m[2],p[0]*m[1]-p[1]*m[0]],x=h?.95:o()*.8;for(let[y,w]of[[0,0],[1,0],[1,1],[0,1]]){let _=(y-.5)*s,M=(w-.5)*s;t.pos.push(a[0]+p[0]*_+m[0]*M+de[0],a[1]+p[1]*_+m[1]*M+de[1],a[2]+p[2]*_+m[2]*M+de[2]),t.nrm.push(...g),t.uv.push(y,w),t.shade.push(x),t.flower.push(1)}t.idx.push(f,f+1,f+2,f,f+2,f+3)};function n(a,s,i){let c=s/po,h=Math.min(.15+.9*c,a<1||a>Ce-1?.6:1.15),f=Math.round(3+7*c),d=s<1?0:Math.round((2+9*c)*(Il(s*1.4,i)?1:.45));for(let u=0;u<f;u++){let v=o()*2*Ne;e([.04+o()*.22,s+(o()-.5)*.12,a+(o()-.5)*2*h],[Math.cos(v)*.4+.5,-.2-o()*.5,Math.sin(v)],[0,0,1],.07+o()*.06,.1)}for(let u=0;u<d;u++)r([.06+o()*.28,s+(o()-.5)*.18,a+(o()-.5)*2*h*.9],.34+o()*.32,o()*2*Ne,(o()-.5)*2.4,o()<.14);if(s>3&&o()<.05){let u=[.15,s,a+(o()-.5)*2*h],v=.4+o()*1.2;for(let l=0;l<v;l+=.13)u=[u[0]+.03,u[1]-.13,u[2]+(o()-.5)*.06],r([u[0],u[1],u[2]],(.26+o()*.2)*(1-.4*l/v),o()*2*Ne,(o()-.5)*.8,o()<.15)}}for(let[a,s,i]of Ks){let[c,h]=Nh(a);for(let f=c;f<=h;f+=.1){if(a==="wall"){n(s,f,i);continue}if(!Il(f,i))continue;let d=Lh(a,s,f),u=()=>(o()-.5)*.7,v=4+Math.floor(o()*4);for(let l=0;l<v;l++){let p=a==="ridge"?[d[0]+u(),d[1]-o()*.25,d[2]+u()*.4]:[d[0]+u()*.4,d[1]-o()*.25,d[2]+u()];r(p,.42+o()*.4,o()*2*Ne,(o()-.5)*2.4,o()<.16)}for(let l=0;l<5;l++){let p=o()*2*Ne;e([d[0]+u()*.6,d[1]-o()*.2,d[2]+u()*.6],[Math.cos(p),-.3-o()*.5,Math.sin(p)],[-Math.sin(p),0,Math.cos(p)],.08+o()*.06,.1)}if(o()<.22){let l=.5+o()*2,p=[d[0],d[1],d[2]],m=[(o()-.5)*.08,(o()-.5)*.08];for(let g=0;g<l;g+=.13){p=[p[0]+m[0],p[1]-.13,p[2]+m[1]];let x=(.3+o()*.22)*(1-.4*g/l);if(r([p[0]+(o()-.5)*.08,p[1],p[2]+(o()-.5)*.08],x,o()*2*Ne,(o()-.5)*.8,o()<.15),o()<.6){let y=o()*2*Ne;e([p[0],p[1],p[2]],[Math.cos(y),-.6,Math.sin(y)],[-Math.sin(y),0,Math.cos(y)],.05+o()*.04,.1)}}}}}}var og=(()=>{let t=Oa(9001),e=[],o=[];for(let[n,a,s]of Ks){let[i,c]=Nh(n);for(let h=i;h<=c;h+=.1)Il(h,s)&&o.push(Lh(n,a,h))}let r=o.filter(n=>n[0]>ut.x0-.6&&n[0]<ut.x1+.6&&n[2]>ut.z0&&n[2]<ut.z1);for(let n=0;n<64;n++){let a=n%2===0&&r.length?r:o,s=a[Math.floor(t()*a.length)];e.push({start:[s[0]+(t()-.5)*.4,s[1]-.25-t()*.3,s[2]+(t()-.5)*.4],period:18+t()*22,offset:t()*60,drift:[(t()-.5)*1.6,(t()-.5)*1.6],speed:.45+t()*.25,seed:t(),white:t()<.18?1:0})}return e})(),rs=[ut.x0+.06,ut.z0+.06,ut.x1-.06,ut.z1-.06];function $M(t,e){let o=e+t.offset,r=Math.floor(o/t.period),n=o-r*t.period,a=.6+.4*Math.sin(r*1.7+t.seed*5),s=t.start[0]+t.drift[0]*a,i=t.start[2]+t.drift[1]*a,c=s>rs[0]&&s<rs[2]&&i>rs[1]&&i<rs[3],h=c?.017:.006,f=(t.start[1]-h)/t.speed;return{ph:n,Tf:f,lx:s,lz:i,inPool:c}}var Yr=[{at:[Ut/2-.8,Gn(7.6)],dir:.9,len:.92,kind:0,sip:21,first:9},{at:[Ut/2+.9,Gn(11.6)],dir:3.6,len:.74,kind:1,sip:29,first:17},{at:[Ut/2-.3,Gn(12.8)],dir:5.2,len:.86,kind:2,sip:25,first:4},{at:[Ut/2+1,Gn(7)],dir:2.2,len:.7,kind:1,sip:33,first:23},{at:[Ut/2-1.1,Gn(10.4)],dir:4.4,len:.82,kind:0,sip:27,first:13},{at:[Ut/2+.4,Gn(9)],dir:1.4,len:.94,kind:2,sip:31,first:28},{at:[Ut/2-.9,Gn(13)],dir:5.9,len:.66,kind:1,sip:23,first:6},{at:[Ut/2+1.1,Gn(12.6)],dir:3,len:.8,kind:0,sip:35,first:31}],Xs=[ut.x0+.5,ut.z0+.5,ut.x1-.5,ut.z1-.55],Nl=[ut.x0+.25,ut.z0+.25,ut.x1-.25,ut.z1-.3],Cl=12,Rl=-.36,ud=[];function IM(){let t=d=>{let u=Math.sin(d*12.9898+78.233)*43758.5453;return u-Math.floor(u)},e=Yr.map((d,u)=>({k:d,i:u,x:d.at[0],z:d.at[1],th:d.dir,w:0,v:.08,y:-.17,ph:u*2.1,pitch:0,kappa:0,thrust:0,amp:.2,stroking:u%2===0,modeT:t(u*3.1)*3,aim:d.dir,nextAim:t(u*7.7)*5,yAim:-.17,nextY:t(u*5.9)*8,gx:d.at[0],gz:d.at[1],nextSip:d.first,sipT:-1,bite:0,notice:0})),o=[],r=[];for(let d=0;d<Cl;d++)r.push({x:0,z:0,alive:0,born:0,seed:d*.37});let n={on:!1,x:0,z:0,t0:0},a=0,s=0,i=d=>Math.atan2(Math.sin(d),Math.cos(d)),c=()=>t(++s*1.618+a*.37);return{fish:e,events:o,crumbs:r,feed:n,drop:(d,u)=>{d=Math.max(Nl[0],Math.min(Nl[2],d)),u=Math.max(Nl[1],Math.min(Nl[3],u)),Object.assign(n,{on:!0,x:d,z:u,t0:a}),r.forEach((v,l)=>{let p=t(a+l)*Math.PI*2,m=.04+.16*Math.sqrt(t(a*1.7+l*3.1));Object.assign(v,{x:d+Math.cos(p)*m,z:u+Math.sin(p)*m,alive:1,born:a+t(l*5.3+a)*.35})}),o.push([d,u,a,1]);for(let v of e)v.notice=a+.3+Math.hypot(v.x-d,v.z-u)*.35+t(v.i*9.1+a)*.7},step:d=>{a+=d;let u=a,v=0;for(let l of r)!l.alive||u<l.born||(v++,l.x+=Math.sin(u*.7+l.seed*11)*.004*d,l.z+=Math.cos(u*.6+l.seed*7)*.004*d);if(n.on&&(v===0&&u>n.t0+1||u>n.t0+40)){n.on=!1;for(let l of r)l.alive=0}for(let l of e){let{k:p}=l,m=p.len,g=n.on&&u>l.notice;(u>l.nextAim||Math.hypot(l.gx-l.x,l.gz-l.z)<.7)&&(l.gx=Xs[0]+c()*(Xs[2]-Xs[0]),l.gz=Xs[1]+c()*(Xs[3]-Xs[1]),l.nextAim=u+12+c()*14),l.aim=Math.atan2(l.gz-l.z,l.gx-l.x)+.35*Math.sin(u*.21+l.i*1.7);let x=l.aim,y=.7,w=null;if(g){let st=1e9;for(let _e of r){if(!_e.alive||u<_e.born)continue;let Ve=Math.hypot(_e.x-l.x,_e.z-l.z)+.1*Math.sin(l.i*3.3+_e.seed*9);Ve<st&&(st=Ve,w=_e)}let Wt=w?w.x:n.x,we=w?w.z:n.z;x=Math.atan2(we-l.z,Wt-l.x),l.aim=x,y=1.8}let _=.6+m*.8+l.v*2,M=g?Nl:Xs,k=0;for(let st of[0,.5,-.5]){let Wt=l.x+Math.cos(l.th+st)*_,we=l.z+Math.sin(l.th+st)*_;k=Math.max(k,Math.max(M[0]-Wt,Wt-M[2],M[1]-we,we-M[3],0))}if(k>0){let st=(M[0]+M[2])/2,Wt=(M[1]+M[3])/2+Math.sin(l.i*2.3)*1.5,we=Math.atan2(Wt-l.z,st-l.x),_e=Math.min(1,k*2.2);x=l.th+i(we-l.th)*_e+i(x-l.th)*(1-_e),g||(l.aim=x),y=Math.max(y,.6+_e*.8)}let R=0;for(let st of e){if(st===l)continue;let Wt=st.x-l.x,we=st.z-l.z,_e=Math.hypot(Wt,we),Ve=(g?.4:1)*(m+st.k.len)/2+.2;if(_e<Ve&&Math.abs(st.y-l.y)<.14){let Ie=i(Math.atan2(we,Wt)-l.th);(Math.abs(Ie)<1.6||_e<Ve*.5)&&(R-=Math.sign(Ie||1)*(Ve-_e)/Ve*(Math.abs(Ie)<1.6?1:.6))}}let A=i(x-l.th)+R*(g?.4:2);l.modeT-=d,g?(l.stroking=!0,l.modeT=Math.max(l.modeT,.4)):l.modeT<=0&&(l.stroking=!l.stroking,l.modeT=l.stroking?1.2+c()*1.6:1.6+c()*3.2),!l.stroking&&(Math.abs(A)>.9||l.v<.035)&&(l.stroking=!0,l.modeT=1+c()*.8),!g&&l.sipT<0&&u>l.nextSip&&(l.sipT=0,l.nextSip=u+p.sip*(.7+.6*c()));let F=0;if(l.sipT>=0){let st=l.sipT;l.sipT+=d,F=Math.min(1,st/1.6)*(1-Math.max(0,Math.min(1,(st-2.6)/1.6))),st<1.7&&l.sipT>=1.7&&o.push([l.x+Math.cos(l.th)*.03,l.z+Math.sin(l.th)*.03,u,.9]),st<2.4&&l.sipT>=2.4&&o.push([l.x,l.z,u,.55]),(l.sipT>4.2||g)&&(l.sipT=-1)}let C=(l.stroking?g?2.4:1:0)*(1-.6*F);l.thrust+=(C-l.thrust)*Math.min(d*3,1);let H=g?.9:.55;l.v+=(l.thrust*.085*(.7+.4*m)-H*l.v)*d,l.v=Math.max(l.v,.008);let I=.35+.65*Math.min(1,l.thrust),V=Math.max(-y,Math.min(y,A*1.3))*I;l.w+=(V-l.w)*Math.min(d*2.2,1),l.th+=l.w*d,u>l.nextY&&(l.yAim=-(.13+c()*.1),l.nextY=u+6+c()*10);let dt=l.yAim;if(F>0&&(dt+=(-.045-dt)*F),g){let st=w?w.x:n.x,Wt=w?w.z:n.z,we=1-Math.min(1,Math.max(0,(Math.hypot(st-l.x,Wt-l.z)-.15)/.9));if(dt+=(-.04-dt)*we,w&&u>l.bite&&l.y>-.08){let _e=l.x+Math.cos(l.th)*.02,Ve=l.z+Math.sin(l.th)*.02;Math.hypot(w.x-_e,w.z-Ve)<.09&&(w.alive=0,l.bite=u+1.3,o.push([w.x,w.z,u,.75]))}}l.x+=Math.cos(l.th)*l.v*d,l.z+=Math.sin(l.th)*l.v*d,l.x=Math.max(ut.x0+.15,Math.min(ut.x1-.15,l.x)),l.z=Math.max(ut.z0+.15,Math.min(ut.z1-.15,l.z));let $t=(dt-l.y)*Math.min(d*(g?2:.8),1);l.y+=$t,l.pitch+=(Math.max(-.4,Math.min(.4,$t/d/Math.max(l.v,.06)))-l.pitch)*Math.min(d*2.5,1);let kt=Math.max(-1/m,Math.min(1/m,l.w/Math.max(l.v,.1)));l.kappa+=(kt-l.kappa)*Math.min(d*4,1);let mt=.12+.88*Math.min(1.4,l.thrust)+.4*Math.min(1,Math.abs(l.w));l.amp+=(mt-l.amp)*Math.min(d*2,1),l.ph+=d*(2+5.5*Math.min(1.6,l.thrust))*(.75+.35/Math.sqrt(m))}for(;o.length&&u-o[0][2]>10;)o.shift()},get t(){return a}}}function qM(){let t=hd();{let e=ut.x0-ut.curb,o=ut.x1+ut.curb,r=ut.z0-ut.curb,n=ut.z1+ut.curb,a=[[0,0,Ut,r],[0,n,Ut,Ce],[0,r,e,n],[o,r,Ut,n]];for(let[s,i,c,h]of a)for(let d=s;d<c-1e-6;d+=1)for(let u=i;u<h-1e-6;u+=1){let v=d,l=Math.min(c,d+1),p=u,m=Math.min(h,u+1);t.quad([v,0,p],[v,0,m],[l,0,m],[l,0,p],[0,1,0],Et.FLOOR,[[v,p],[v,m],[l,m],[l,p]])}}for(let e of[0,1]){let o=e?Ut:0,r=e?Ut+y0:-y0,n=e?[-1,0,0]:[1,0,0],a=.04;for(let v=0;v<Ce-1e-6;v+=a){let l=v,p=Math.min(Ce,v+a),m=(l+p)/2,g=null;if(!e)for(let y of ve.c)da(m-y)!==null&&(g=[ve.sill,Math.min(da(l-y)||ve.spring,da(p-y)||ve.spring)]);let x=g?[[0,g[0]],[g[1],po]]:[[0,po]];for(let[y,w]of x)w<=y||(e?t.quad([o,y,p],[o,y,l],[o,w,l],[o,w,p],n,Et.ROCK,[[p,y],[l,y],[l,w],[p,w]]):t.quad([o,y,l],[o,y,p],[o,w,p],[o,w,l],n,Et.ROCK,[[l,y],[p,y],[p,w],[l,w]]))}if(!e)for(let v of ve.c){for(let g of[-1,1]){let x=v+g*ve.hw,y=[0,0,-g],w=[o,ve.sill,x],_=[r,ve.sill,x],M=[r,ve.spring,x],k=[o,ve.spring,x];g>0!=!!e?t.quad(w,_,M,k,y,Et.ROCK,[[0,ve.sill],[y0,ve.sill],[y0,ve.spring],[0,ve.spring]]):t.quad(k,M,_,w,y,Et.ROCK,[[0,ve.spring],[y0,ve.spring],[y0,ve.sill],[0,ve.sill]])}let l=28;for(let g=0;g<l;g++){let x=g/l*Ne,y=(g+1)/l*Ne,w=v+Math.cos(x)*ve.hw,_=v+Math.cos(y)*ve.hw,M=ve.spring+Math.sin(x)*ve.hw,k=ve.spring+Math.sin(y)*ve.hw,R=[0,-Math.sin((x+y)/2),-Math.cos((x+y)/2)];e?t.quad([o,M,w],[r,M,w],[r,k,_],[o,k,_],R,Et.ROCK,[[0,x],[y0,x],[y0,y],[0,y]]):t.quad([o,k,_],[r,k,_],[r,M,w],[o,M,w],R,Et.ROCK,[[0,y],[y0,y],[y0,x],[0,x]])}let p=e?Ut-.08:-y0,m=e?Ut+y0:.08;t.box(p,ve.sill-.09,v-ve.hw-.12,m,ve.sill,v+ve.hw+.12,Et.OLDSTONE)}let s=e?Ut:0,i=e?-1:1,c=Et.OLDSTONE,h=Math.min(s,s+i*.32),f=Math.max(s,s+i*.32);t.box(h,po-.55,0,f,po-.3,Ce,c);let d=Math.min(s,s+i*.42),u=Math.max(s,s+i*.42);t.box(d,po-.3,0,u,po-.12,Ce,c)}for(let[e,o]of[[0,1],[Ce,-1]]){for(let s=0;s<32;s++){let i=s/32*Ut,c=(s+1)/32*Ut,h=d=>d<Ut/2?po+gr*d:po+gr*(Ut-d),f=o>0?[[c,0],[i,0],[i,h(i)],[c,h(c)]]:[[i,0],[c,0],[c,h(c)],[i,h(i)]];t.quad(...f.map(([d,u])=>[d,u,e]),[0,0,o],Et.ROCK,f.map(([d,u])=>[d,u]))}let n=o>0?0:Ce-.32,a=o>0?.32:Ce;t.box(0,po-.55,n,Ut,po-.3,a,Et.OLDSTONE)}AM(t);{let e=hd();RM(e),NM(t,e)}TM(t);{let{x0:e,x1:o,z0:r,z1:n,curb:a,top:s}=ut,i=.06,c=.08;t.box(e-a,0,r-a,e,s-c,n+a,Et.OLDSTONE,{bottom:!0}),t.box(o,0,r-a,o+a,s-c,n+a,Et.OLDSTONE,{bottom:!0}),t.box(e,0,r-a,o,s-c,r,Et.OLDSTONE,{bottom:!0}),t.box(e,0,n,o,s-c,n+a,Et.OLDSTONE,{bottom:!0}),t.box(e-a-i,s-c,r-a-i,e+i*.5,s,n+a+i,Et.OLDSTONE),t.box(o-i*.5,s-c,r-a-i,o+a+i,s,n+a+i,Et.OLDSTONE),t.box(e+i*.5,s-c,r-a-i,o-i*.5,s,r+i*.5,Et.OLDSTONE),t.box(e+i*.5,s-c,n-i*.5,o-i*.5,s,n+a+i,Et.OLDSTONE);let h=.5;for(let f=e;f<o-1e-6;f+=h)for(let d=r;d<n-1e-6;d+=h){let u=f,v=Math.min(o,f+h),l=d,p=Math.min(n,d+h);t.quad([u,0,l],[u,0,p],[v,0,p],[v,0,l],[0,1,0],Et.WATER,[[u,l],[u,p],[v,p],[v,l]])}}return t}function DM(t){for(let o of[0]){let r=o?Ut+y0*.5:-y0*.5,n=.05,a=B0.w*.5;for(let s of ve.c){for(let i of B0.cols){let c=da(i)-.01;t.box(r-n,ve.sill,s+i-a,r+n,c,s+i+a,Et.STEEL)}for(let i=ve.sill+B0.rowH;i<ve.spring+.01;i+=B0.rowH)t.box(r-n,i-a,s-ve.hw,r+n,i+a,s+ve.hw,Et.STEEL);for(let[i,c]of[[ve.hw-.03,.06],[B0.ring,a]])for(let f=0;f<24;f++){let d=f/24*Ne,u=(f+1)/24*Ne;t.beam([r,ve.spring+Math.sin(d)*i,s+Math.cos(d)*i],[r,ve.spring+Math.sin(u)*i,s+Math.cos(u)*i],c,Et.STEEL,[1,0,0])}for(let i of[-1,1])t.box(r-n,ve.sill,s+i*(ve.hw-.03)-.03,r+n,ve.spring,s+i*(ve.hw-.03)+.03,Et.STEEL);t.box(r-n,ve.sill,s-ve.hw,r+n,ve.sill+.06,s+ve.hw,Et.STEEL)}}let e=o=>o<Ut/2?po+gr*o:po+gr*(Ut-o);for(let o=0;o<=12;o++){let r=o*Ra.rafter;for(let[n,a]of[[-.3,Ut/2],[Ut/2,Ut+.3]])t.beam([n,e(Math.max(0,Math.min(Ut,n)))-.1,r],[a,e(a)-.1,r],.06,Et.STEEL)}t.beam([Ut/2,mr-.14,-.2],[Ut/2,mr-.14,Ce+.2],.12,Et.STEEL);for(let o of[.05,Ut-.05])t.beam([o,po-.05,0],[o,po-.05,Ce],.1,Et.STEEL);for(let o of Pl){t.box(-.05,po-.13,o-.08,Ut+.05,po+.13,o+.08,Et.STEEL),t.beam([Ut/2,po,o],[Ut/2,mr-.2,o],.07,Et.STEEL);for(let r of[-1,1])t.beam([Ut/2+r*Ut/4,po,o],[Ut/2,mr-.4,o],.055,Et.STEEL),t.beam([Ut/2+r*Ut/4,po,o],[Ut/2+r*Ut/4,e(Ut/2+r*Ut/4)-.2,o],.045,Et.STEEL),t.beam([Ut/2+r*(Ut/2-.1),po,o],[Ut/2+r*Ut/4,e(Ut/2+r*Ut/4)-.2,o],.045,Et.STEEL);for(let r of[-1,1])t.box(Ut/2+r*Ut/4-.12,po-.18,o-.1,Ut/2+r*Ut/4+.12,po+.18,o+.1,Et.STEEL)}}function FM(t){let e=Oa(311),o=[],r=[[ut.x0+.9,Gn(6.6),.9,11],[ut.x1-.8,Gn(8.4),.85,10],[ut.x0+.8,Gn(10.6),.8,9],[ut.x1-.9,Gn(12.4),.9,11],[ut.x0+1,Gn(13.9),.65,7],[Ut/2+.2,Gn(9.6),.5,4],[ut.x1-.7,Gn(15.9),.6,6]];for(let[a,s,i,c]of r)for(let h=0;h<c;h++)for(let f=0;f<40;f++){let d=e()*2*Ne,u=i*Math.sqrt(e()),v=a+Math.cos(d)*u,l=s+Math.sin(d)*u,p=.15+e()*.17;if(!(v-p<ut.x0+.04||v+p>ut.x1-.04||l-p<ut.z0+.04||l+p>ut.z1-.04)&&!(Math.hypot(v-yn.x,l-yn.z)<.62+p)&&!o.some(m=>Math.hypot(m[0]-v,m[1]-l)<(m[2]+p)*.93)){o.push([v,l,p,e()*2*Ne,e()]);break}}for(let[a,s,i,c,h]of o){ud.push([a,s,i]),t.float=[a,s,h*7.3+i*13];let f=28,d=4,u=i*1.08,v=[];for(let l=0;l<=d;l++){let p=[];for(let m=0;m<f;m++){let g=m/f*2*Ne,x=l/d,y=g-c,w=.012+.004*(1-x*x)+.006*Math.pow(x,6)*(.5+.5*Math.sin(g*3+h*9));p.push(t.v([a+Math.cos(g)*u*x,w,s+Math.sin(g)*u*x],[0,1,0],Et.PAD,[.5+.5*x*Math.sin(y),.5+.5*x*Math.cos(y)]))}v.push(p)}for(let l=0;l<d;l++)for(let p=0;p<f;p++){let m=v[l][p],g=v[l][(p+1)%f],x=v[l+1][(p+1)%f],y=v[l+1][p];t.idx.push(m,g,x,m,x,y)}}t.float=null;let n=[[ut.x0+.75,Gn(6.9),1],[ut.x1-.65,Gn(8.1),.85],[ut.x1-.95,Gn(12.6),1.1],[ut.x0+.95,Gn(10.3),.8],[ut.x1-.55,Gn(15.6),.9],[ut.x0+1.05,Gn(13.7),.75]];for(let[a,s,i]of n){t.float=[a,s,a*3.7+s*1.3];let c=.17;[[12,1,70],[10,.86,48],[8,.66,26]].forEach(([f,d,u],v)=>{for(let l=0;l<f;l++){let p=2*Ne*l/f+v*.33,m=(90-(90-u)*i)*Ne/180,g=6,x=4,y=[];for(let w=0;w<=g;w++){let _=w/g,M=(.18+.82*Math.sin(Ne*Math.min(1,Math.pow(_,.8)*.75+.1)))*.36*d*c,k=[];for(let R=0;R<=x;R++){let A=R/x*2-1,F=A*M,C=Math.abs(A)*Math.abs(A)*.12*d*c,H=_*d*c,I=H*Math.cos(m),V=H*Math.sin(m)+C,dt=a+Math.cos(p)*I-Math.sin(p)*F,$t=s+Math.sin(p)*I+Math.cos(p)*F;k.push(t.v([dt,.03+V,$t],[-Math.cos(p)*Math.sin(m)*.6,.8,-Math.sin(p)*Math.sin(m)*.6],Et.PETAL,[(v===2?.5:0)+.5*(.5+.5*A*.92),.98-_*.96]))}y.push(k)}for(let w=0;w<g;w++)for(let _=0;_<x;_++){let M=y[w][_],k=y[w][_+1],R=y[w+1][_+1],A=y[w+1][_];t.idx.push(M,k,R,M,R,A,M,R,k,M,A,R)}}}),t.lathe(a,s,[[0,.03+.05*c*4],[.025,.03+.045*c*4],[.032,.035],[0,.03]],Et.STAMEN,12)}t.float=null}function GM(t){let e=Oa(907);{t.box(1.25-.48,.86-.06,11.1-1.35,1.25+.48,.86,11.1+1.35,Et.WOOD);for(let i of[-1,1])for(let c of[-1,1])t.box(1.25+i*(.48-.08)-.04,0,11.1+c*(1.35-.1)-.04,1.25+i*(.48-.08)+.04,.86-.06,11.1+c*(1.35-.1)+.04,Et.WOOD);t.box(1.25-.48+.06,.16,11.1-1.35+.1,1.25+.48-.06,.19,11.1+1.35-.1,Et.WOOD);for(let i=0;i<11;i++){let c=1.25+(e()-.5)*.6,h=11.1+(e()-.5)*2.2,f=.035+e()*.04,d=.09+e()*.14;if(t.lathe(c,h,[[0,.86],[f,.86],[f*1.02,.86+d*.9],[f*.9,.86+d],[0,.86+d]],i%3?Et.JAR:Et.POT,14),i%3===0)for(let u=0;u<7;u++){let v=e()*2*Ne,l=.28+e()*.12,p=.12+e()*.2;t.beam([c,.86+.03,h],[c+Math.cos(v)*p*l,.86+.03+l,h+Math.sin(v)*p*l],.0055,Et.BRUSH)}}t.box(1.25-.3,.86,11.1+.7,1.25+.15,.86+.02,11.1+1.15,Et.WOOD)}for(let o=0;o<5;o++){let r=.55+e()*.6,n=.75+e()*.8,a=19.3+o*.16,s=.25+o*.07,i=.17,c=[s+n*Math.sin(i)*0,n,a];t.quad([s+.18,0,a-r/2],[s+.18,0,a+r/2],[s+.18-n*Math.sin(i),n*Math.cos(i),a+r/2],[s+.18-n*Math.sin(i),n*Math.cos(i),a-r/2],[Math.cos(i),Math.sin(i),0],o%2?Et.WOOD:Et.GESSO,[[0,0],[1,0],[1,1],[0,1]])}for(let o of ig)t.beam([o[0],po,o[2]],[o[0],o[1]+.05,o[2]],.008,Et.STEEL),t.lathe(o[0],o[2],[[.04,o[1]+.06],[.06,o[1]+.02],[.16,o[1]-.09],[.29,o[1]-.22],[.33,o[1]-.28],[.32,o[1]-.285]],Et.SHADE,32),t.lathe(o[0],o[2],[[0,o[1]-.25],[.06,o[1]-.2],[0,o[1]-.12]],Et.BULB,12)}var ig=[[4.2,4.6,7.33],[11.8,4.6,7.33],[4.2,4.6,16.5],[11.8,4.6,16.5]],Mz=[[ut.x0-1,ut.z0-1,1],[ut.x1+1,ut.z0-1,.95],[ut.x0-1,ut.z1+1,1.15],[ut.x1+1,ut.z1+1,1.1],[.9,1.3,1.25],[Ut-.9,Ce-1.2,1.3]],ng=[[0,0,.16,.5],[.16,0,.34,.4],[.35,0,.5,.36],[.5,0,.66,.38],[.68,0,.84,.42],[0,.6,.19,1],[.2,.57,.36,1],[.41,.6,.58,1]];function HM(){let t={pos:[],nrm:[],uv:[],shade:[],flower:[],idx:[]},e=Oa(1213),o=(r,n,a,s,i)=>{let c=ng[Math.floor(e()*ng.length)],h=(c[2]-c[0])/(c[3]-c[1]),f=s*h*1,d=5,u=t.pos.length/3,v=.6+e()*.4;for(let l=0;l<=d;l++){let p=l/d,m=i*p*p*s,g=[r[0]+n[0]*p*s,r[1]+n[1]*p*s-m,r[2]+n[2]*p*s];for(let x of[-.5,.5]){t.pos.push(g[0]+a[0]*x*f+de[0],g[1]+a[1]*x*f-Math.abs(x)*.08*f+de[1],g[2]+a[2]*x*f+de[2]);let y=[n[1]*a[2]-n[2]*a[1],n[2]*a[0]-n[0]*a[2],n[0]*a[1]-n[1]*a[0]],w=Math.hypot(...y)||1;t.nrm.push(y[0]/w,Math.abs(y[1]/w)+.2,y[2]/w),t.uv.push(x<0?c[0]:c[2],c[3]-(c[3]-c[1])*p),t.shade.push(v),t.flower.push(0)}}for(let l=0;l<d;l++){let p=u+l*2;t.idx.push(p,p+1,p+3,p,p+3,p+2)}};PM(t,o,e);for(let[r,n,a]of[[ut.x0-.3,ut.z1+.3,-1],[ut.x1+.3,ut.z0-.3,1],[ut.x0-.3,ut.z0-.2,-1]])for(let s=0;s<26;s++){let i=e()*2*Ne,c=r+(e()-.3)*.5*-a,h=n+(e()-.5)*.8,f=ut.top+.01-Math.max(0,Math.abs(c-r)-.1)*.6*e();o([c,Math.max(.05,f),h],[Math.cos(i),-.15,Math.sin(i)],[-Math.sin(i),0,Math.cos(i)],.08+e()*.05,.12)}return t}function UM(){let t=hd();for(let o of[0]){let r=o?Ut+y0*.5+.01:-y0*.5-.01,n=o?[-1,0,0]:[1,0,0];for(let a of ve.c)for(let i=a-ve.hw;i<a+ve.hw-1e-6;i+=.05){let c=i,h=Math.min(a+ve.hw,i+.05),f=da(c-a+1e-4)||ve.spring,d=da(h-a-1e-4)||ve.spring;o?t.quad([r,ve.sill,h],[r,ve.sill,c],[r,f,c],[r,d,h],n,0,[[h,ve.sill],[c,ve.sill],[c,f],[h,d]]):t.quad([r,ve.sill,c],[r,ve.sill,h],[r,d,h],[r,f,c],n,0,[[c,ve.sill],[h,ve.sill],[h,d],[c,f]])}}let e=Math.hypot(gr,1);return t.quad([0,po+.002,Ce],[0,po+.002,0],[Ut/2,mr+.002,0],[Ut/2,mr+.002,Ce],[gr/e,-1/e,0].map(o=>-o).map((o,r)=>r===1?-Math.abs(o):o),1,[[0,Ce],[0,0],[Ut/2,0],[Ut/2,Ce]]),t.quad([Ut,po+.002,0],[Ut,po+.002,Ce],[Ut/2,mr+.002,Ce],[Ut/2,mr+.002,0],[-gr/e,-1/e,0],1,[[Ut,0],[Ut,Ce],[Ut/2,Ce],[Ut/2,0]]),t}var Ys={ivy:[[.00293,.0127,.12207,.23633],[.13037,.00586,.24463,.24414],[.25293,.0166,.37207,.23242],[.37793,.02344,.49707,.22656],[.50293,.01367,.62207,.23535],[.62793,.03418,.74707,.21582]],blade:[[.01855,.50391,.02832,.99512],[.05762,.50391,.08301,.99512],[.10889,.50391,.12549,.99609],[.1582,.50391,.16943,.99512],[.19922,.50391,.22266,.99512],[.25,.50391,.26562,.99609],[.29932,.50391,.31006,.99609],[.33008,.50781,.37305,.99121],[.38721,.50391,.40918,.99609]],daisy:[[.75684,.00586,.86768,.24414],[.87793,.00781,.99707,.24121],[.00342,.25586,.12158,.49414],[.12842,.25586,.24609,.49414],[.25293,.25684,.37207,.49219],[.37891,.25586,.49609,.49316]],weed:[[.50293,.25781,.62207,.49121],[.62793,.26562,.74707,.48438],[.75293,.26855,.87207,.48047],[.88281,.25586,.99219,.49414],[.44043,.50977,.55957,.73926],[.5752,.50586,.67432,.74414],[.69043,.50586,.80908,.74414],[.81738,.50586,.93213,.74414],[.44043,.75781,.55957,.99219]],rleaf:[[.69824,.75586,.78076,.99414],[.79834,.75586,.88867,.99414],[.9043,.75586,.99072,.99414],[.94043,.54395,.99707,.70605]],petal:[[.56445,.75391,.68555,.99609]]},BM=[[.248,.8613],[.3438,.9785],[.4492,.584],[.5957,.3281],[.5371,.918],[.1699,.4062],[.752,.6699],[.5879,.2207],[.3789,.8477],[.2637,.2266],[.6758,.7422],[.6016,.0273],[.5762,.502],[.0469,.5078],[.1406,.7773],[.791,.7539],[.6113,.5605],[.9121,.6777],[.6523,.1523],[.2871,.3301],[.2109,.832],[.4297,.625],[.168,.4434],[.1348,.1211],[.9668,.0859],[.3164,.873],[.1777,.7539],[.0215,.3281],[.6719,.334],[.9844,.6172],[.6523,.3828],[.1152,.2988],[.0176,.1328],[.207,.0996],[.6152,.9844],[.0234,.0117],[.0723,.6328],[.2695,.7695],[.2539,.9395],[.502,.9941],[.1504,.9961],[.957,.8145],[.5117,.123],[.4062,.4941],[.0547,.1387],[.4375,.2949],[.373,.2109],[.1699,.3086],[.5176,.6445],[.4863,.3027],[.877,.6602],[.5977,.8887],[.5488,.0098],[.5156,.5332],[.6973,.1094],[.4707,.2051],[.498,.7559],[.0312,.7363],[.2051,.4629],[.541,.8379],[.8398,.8965],[.1426,.1855],[.3711,.1172],[.1328,.9082],[.75,.9629],[.2812,.0449],[.6367,.4277],[.2051,.9824],[.7012,.9766],[.0059,.9102],[.7168,.3379],[.1602,.584],[.8594,.1973],[.3516,.7227],[.0918,.9727],[.416,.3359],[.6465,.9355],[.3418,.627],[.7578,.332],[.0293,.6973],[.9004,.957],[.7012,.7617],[.1855,.8652],[.6914,.8184],[.5684,.543],[.6523,.8672],[.5742,.7441],[.2949,.4121],[.2363,.6387],[.25,.1953],[.0352,.5918],[.248,.293],[.0762,.4863],[.9785,.4922],[.9004,.7305],[.9277,.5527],[.9395,.125],[.3691,.8789],[.4805,.0469],[.5703,.4551],[.4199,.2246],[.0371,.625],[.3281,.4941],[.1152,.6094],[.2793,.834],[.5039,.166],[.4609,.5312],[.0645,.7715],[.6035,.7227],[.4746,.6348],[.6777,.5684],[.2773,.4512],[.8008,.1191],[.3945,.9297],[.2109,.6855],[.5977,.1875],[.5195,.0742],[.1309,.4609],[.9531,.4277],[.4785,.9648],[.543,.3262],[.9121,.041],[.5059,.7188],[.0098,.2969],[.8438,.3789],[.1504,.2637],[.7969,.873],[.8613,.9863],[.834,.7461],[.377,.6211],[.791,.7227],[.6758,.8457],[.7832,.8066],[.834,.5293],[.1973,.6562],[.8281,.9609],[.5332,.7773],[.9062,.8008],[.3262,.0234],[.8984,.7676]],uc={IVY:0,BLADE:1,DAISY:2,WEED:3,ROSE:4,RLEAF:5,GRAPE:6},rg=[[[.006,.013,-.051],[-.04,-.022,.004],[-.029,.026,-.015]],[[-.094,.019,.023],[.014,-.004,-.003],[.06,.026,-.027]],[[-.034,-.031,.002],[-.019,.07,-.028],[-.07,.018,-.039]],[[.102,-.049,-.011],[.057,-.046,.157],[.042,-.031,.089]],[[.026,.006,.019],[-.038,-.037,-.073],[-.042,-.019,.021]],[[.088,-.048,.008],[.143,-.012,.005],[-.044,.033,.028]],[[.039,-.084,-.04],[-.054,-.031,.031],[.076,.028,.014]],[[.082,-.037,-.05],[-.078,.011,.004],[-.076,-.047,.042]]],jM=2;function WM(){let t={pos:[],nrm:[],uv:[],info:[],idx:[]},e=[],o={pos:[],nrm:[],uv:[],info:[],idx:[]},r=t,n=Oa(2718),a=pt=>{let X=Math.hypot(pt[0],pt[1],pt[2])||1;return[pt[0]/X,pt[1]/X,pt[2]/X]},s=(pt,X)=>[pt[1]*X[2]-pt[2]*X[1],pt[2]*X[0]-pt[0]*X[2],pt[0]*X[1]-pt[1]*X[0]],i=(pt,X)=>pt[0]*X[0]+pt[1]*X[1]+pt[2]*X[2],c=(pt,X,gt)=>[pt[0]+X[0]*gt,pt[1]+X[1]*gt,pt[2]+X[2]*gt],h=pt=>pt[Math.floor(n()*pt.length)],f=pt=>(pt[2]-pt[0])*jM/(pt[3]-pt[1]),d=(pt,X,gt,Nt,ce,xe)=>(r.pos.push(pt[0]+de[0],pt[1]+de[1],pt[2]+de[2]),r.nrm.push(X[0],X[1],X[2]),r.uv.push(gt[0],gt[1]),r.info.push(Nt,ce,xe),r.pos.length/3-1),u=(pt,X,gt,Nt,ce,xe,ne,Bt,rt)=>{let Xt=rt?2:1,Te=r.pos.length/3;for(let Jt=0;Jt<=Xt;Jt++){let It=Jt/Xt,He=rt?c(c(pt,gt,It),Bt,rt*It*It):c(pt,gt,It),S=Nt[3]+(Nt[1]-Nt[3])*It;d(c(He,X,-1),ne,[Nt[0],S],ce,xe,It),d(c(He,X,1),ne,[Nt[2],S],ce,xe,It)}for(let Jt=0;Jt<Xt;Jt++){let It=Te+Jt*2;r.idx.push(It,It+1,It+3,It,It+3,It+2)}},v=null,l=[...Ys.ivy,...Ys.ivy,...Ys.weed.slice(0,7)],p=[0,1,0],m=(pt,X,gt,Nt,ce)=>{let xe=h(l),ne=s(gt,X),Bt=a(c(c(X,gt,n()*.9-.25),ne,(n()-.5)*.8)),rt=a(c(gt,Bt,-i(gt,Bt))),Xt=(n()-.5)*2,Te=Math.cos(Xt),Jt=Math.sin(Xt);rt=a(c(c([0,0,0],rt,Te),s(Bt,rt),Jt));let It=s(rt,Bt),He=Nt*f(xe);u(c(pt,rt,-Nt*.18),c([0,0,0],It,He/2),c([0,0,0],rt,Nt),xe,ce,uc.IVY,Bt)},g=(pt,X,gt,Nt,ce)=>{let xe=Math.floor(n()*rg.length),ne=rg[xe],Bt=s(gt,X),rt=a(c(c(X,gt,n()*.8-.3),Bt,(n()-.5)*.9)),Xt=a(c(gt,rt,-i(gt,rt))),Te=n()*2*Ne,Jt=Math.cos(Te),It=Math.sin(Te);Xt=a(c(c([0,0,0],Xt,Jt),s(rt,Xt),It));let He=s(Xt,rt),S=xe%4/4,Ge=Math.floor(xe/4)/2,je=1.4,Je=[],Mo=r.pos.length/3;for(let vo=0;vo<3;vo++)for(let Ro=0;Ro<3;Ro++){let Ao=Ro/2-.5,Jo=.5-vo/2;Je.push(c(c(c(pt,He,Ao*Nt),Xt,Jo*Nt),rt,ne[vo][Ro]*Nt*je))}for(let vo=0;vo<3;vo++)for(let Ro=0;Ro<3;Ro++){let Ao=Math.max(Ro-1,0),Jo=Math.min(Ro+1,2),Wn=Math.max(vo-1,0),lr=Math.min(vo+1,2),et=c(Je[vo*3+Jo],Je[vo*3+Ao],-1),U=c(Je[Wn*3+Ro],Je[lr*3+Ro],-1),Q=a(s(et,U));i(Q,rt)<0&&(Q=Q.map(j=>-j)),d(Je[vo*3+Ro],Q,[S+Ro/2*.25,Ge+vo/2*.5],ce,uc.GRAPE,1)}for(let vo=0;vo<2;vo++)for(let Ro=0;Ro<2;Ro++){let Ao=Mo+vo*3+Ro;r.idx.push(Ao,Ao+1,Ao+4,Ao,Ao+4,Ao+3)}},x=(pt,X,gt,Nt,ce,xe,ne,Bt,rt,Xt=.3)=>{let Te=Math.max(3,Math.round(ce*2.4*ne)),Jt=[];for(let He=0;He<Te;He++){let S=Nt+(n()-.5)*ce,Ge=Math.min(1,Math.abs(S-Nt)/(ce/2+.001)),je=xe*(.6+.4*n())*(1-.5*Ge*Ge);Jt.push([S,Bt||n()*.15,(n()-.5)*.5,je,0])}let It=0;for(;Jt.length&&It++<4e3;){let[He,S,Ge,je,Je]=Jt.pop(),Mo=S;for(let vo=0;vo<260&&(Ge+=(n()-.5)*.45,Ge=Math.max(-1,Math.min(1,Ge)),He+=Math.sin(Ge)*.09,S+=(Bt?-1:1)*Math.cos(Ge)*.09,!(Bt?Mo-S>je||S<(rt?rt(He):.05):S-Mo>je));vo++){let Ao=Bt?(Mo-S)/je:(S-Mo)/je,Jo=n()<.9*ne?n()<.5?2:1:0;for(let Wn=0;Wn<Jo;Wn++){let lr=.015+n()*.11,et=He+(n()-.5)*.2,U=S+(n()-.5)*.12;if(v&&v(et,U))continue;let Q=c(c(c(pt,X,et),p,U),gt,lr),j=(.14+.1*n())*(Bt?1.05-.3*Ao:1.2-.4*Ao),Tt=.45+.55*(lr/.125)*(.6+.4*n());n()<Xt?n()<.55&&g(Q,gt,p,j*1.7,Tt):m(Q,gt,p,j,Tt)}Je<2&&n()<.035&&Jt.push([He,S,Ge+(n()<.5?-.7:.7),je*(.35+.4*n())*(1-Ao*.5),Je+1])}}},y=(pt,X,gt,Nt,ce)=>{let xe=h(Ys.rleaf),ne=a(c(c(X,gt,n()*.8-.1),s(gt,X),(n()-.5)*.9)),Bt=a(c(gt,ne,-i(gt,ne))),rt=(n()-.5)*3,Xt=Math.cos(rt),Te=Math.sin(rt);Bt=a(c(c([0,0,0],Bt,Xt),s(ne,Bt),Te));let Jt=s(Bt,ne);u(c(pt,Bt,-Nt*.1),c([0,0,0],Jt,Nt*f(xe)/2),c([0,0,0],Bt,Nt),xe,ce,uc.RLEAF,ne)},w=(pt,X,gt,Nt,ce,xe,ne)=>{let Bt=Math.max(3,Math.round(ce*2.2)),rt=(He,S,Ge)=>c(c(c(pt,X,He),p,S),gt,Ge),Xt=y,Te=null,Jt=(He,...S)=>{v&&v(i(c(He,pt,-1),X),He[1])||Xt(He,...S)},It=(He,S,Ge)=>{v&&v(i(c(He,pt,-1),X),He[1])||e.push({at:He,f:S,size:Ge,spin:n()*2*Ne})};for(let He=0;He<Bt;He++){let S=Nt+(n()-.5)*ce*.35,Ge=.05,je=(n()-.5)*1.4,Je=xe*(.6+.4*n()),Mo=(S-Nt)/(ce/2+.001);for(let vo=0;vo<200&&Ge<Je&&(je+=(n()-.5)*.3+Mo*.012+(Ge>Je*.6?Math.sign(je||1)*.02:0),je=Math.max(-1.25,Math.min(1.25,je)),S+=Math.sin(je)*.08,Ge+=Math.cos(je)*.08,!(Math.abs(S-Nt)>ce*.6));vo++){let Ro=Ge/Je;for(let Ao=0;Ao<(n()<.8?2:1);Ao++){let Jo=.02+n()*.12;Jt(rt(S+(n()-.5)*.16,Ge+(n()-.5)*.12,Jo),gt,p,.07+n()*.05,.5+.5*n())}if(Ro>.2&&n()<ne*(.018+.038*Ro)){let Ao=1+Math.floor(n()*3);for(let Jo=0;Jo<Ao;Jo++){let Wn=a(c(c(gt,p,(n()-.4)*.8),s(p,gt),(n()-.5)*.9));It(rt(S+(n()-.5)*.22,Ge+(n()-.5)*.2,.16+n()*.1),Wn,.19+n()*.09)}for(let Jo=0;Jo<3;Jo++)Jt(rt(S+(n()-.5)*.25,Ge+(n()-.5)*.2,.05+n()*.08),gt,p,.07+n()*.04,.6+.4*n())}}}},_=(pt,...X)=>w(pt.o,pt.u,pt.n,...X),M={o:[0,0,0],u:[1,0,0],n:[0,0,1]},k={o:[0,0,Ce],u:[1,0,0],n:[0,0,-1]},R={o:[Ut,0,0],u:[0,0,1],n:[-1,0,0]},A=(pt,...X)=>x(pt.o,pt.u,pt.n,...X);A(M,4.1,3,7,1.5),A(M,12,3.4,5.8,1.3),A(M,1,2.2,4.2,1.2),A(M,15,2,5,1.2),_(M,3.6,3.2,5.6,1.1),_(M,12.6,3,4.8,1),_(M,.9,1.6,3.2,.8);{let pt=No.face-.26,X={o:[0,0,Ce-pt+.03],u:[1,0,0],n:[0,0,1]},gt=5.35+1.02;x(X.o,X.u,X.n,Ut-No.x1+1,1.9,2.2,1.2,gt,()=>3.2),x(X.o,X.u,X.n,Ut-No.x0-.5,.8,1,.8,gt,()=>4.6);for(let Nt=0;Nt<70;Nt++){let ce=No.x0+.2+Math.pow(n(),1.6)*2.4,xe=(No.x1-No.x0)/2+.2,ne=gt+.62*(1-Math.abs(ce-No.cx)/xe)+.02;m([Ut-ce,ne+n()*.05,.1+n()*(Ce-pt-.15)],a([0,1,.3]),[0,0,1],.08+n()*.05,.7+.3*n())}}v=(pt,X)=>Math.abs(pt-Ut/2)<b0.w/2+b0.frame+.12&&X<b0.top+b0.frame+.12,A(k,5.3,3.2,6.2,1.4),A(k,11,3.6,7,1.4),A(k,1.2,2.4,4.4,1.2),A(k,14.9,2.2,5.4,1.2),x(k.o,k.u,k.n,Ut/2+.3,3.8,1.8,1.3,5.4,pt=>Math.abs(pt-Ut/2)<1.25?4.15:2.4),_(k,5.6,3.4,5.2,1.2),_(k,10.6,3.6,5.8,1.2),_(k,14.6,2,4,.9),v=null,A(R,2.6,4,7,1.4),A(R,9.2,4.6,5.4,1.2),A(R,15.6,5,7.4,1.5),A(R,20.9,2,4,1.2),_(R,3.2,3.6,5.4,1.1),_(R,8.6,3,4.2,1),_(R,13.4,3.2,5.8,1.1),_(R,18.6,3.4,5,1.2),v=(pt,X)=>ve.c.some(gt=>{let Nt=da(pt-gt);return Nt!==null&&Math.abs(pt-gt)<ve.hw+.06&&X>ve.sill-.05&&X<Nt+.06});for(let[pt,X]of Ks.filter(gt=>gt[0]==="wall")){let gt=X<1||X>Ce-1;x([0,0,0],[0,0,1],[1,0,0],X,gt?1:1.7,po-.6,gt?.9:1.1,0,null,.85)}for(let pt of ve.c)x([0,0,0],[0,0,1],[1,0,0],pt,ve.hw*2.3,1.6,.8,po-.6,X=>da(X-pt)!==null?da(X-pt)+.15:po-2.2,.85);v=null,r=o;let F=(pt,X,gt,Nt,ce,xe,ne)=>{let Bt=h(Ys.blade),rt=[Math.cos(xe),0,Math.sin(xe)],Xt=Math.max(Nt*.16,.012);u([pt,X,gt],[-rt[2]*Xt/2,0,rt[0]*Xt/2],[rt[0]*ce*Nt*.4,Nt,rt[2]*ce*Nt*.4],Bt,ne,uc.BLADE,a([rt[0]*.5,1,rt[2]*.5]),rt,Nt>.12?Nt*ce*.6:0)},C=(pt,X,gt,Nt,ce)=>{for(let xe=0;xe<ce;xe++){let ne=n()*2*Ne,Bt=n()*.035;F(pt+Math.cos(ne)*Bt,X,gt+Math.sin(ne)*Bt,Nt*(.45+.55*n()),.25+.75*n(),ne+(n()-.5),.6+.4*n())}},H=(pt,X,gt,Nt)=>{let ce=4+Math.floor(n()*3),xe=n()*2*Ne;for(let ne=0;ne<ce;ne++){let Bt=h(Ys.weed),rt=xe+ne*2*Ne/ce+(n()-.5)*.4,Xt=[Math.cos(rt),0,Math.sin(rt)],Te=.35+n()*.45,Jt=Nt*(.7+.5*n()),It=[Xt[0]*Math.cos(Te)*Jt,Math.sin(Te)*Jt,Xt[2]*Math.cos(Te)*Jt],He=Jt*f(Bt);u([pt,X+.004,gt],[-Xt[2]*He/2,0,Xt[0]*He/2],It,Bt,.7+.3*n(),uc.WEED,a([-Xt[0]*Math.sin(Te),Math.cos(Te),-Xt[2]*Math.sin(Te)]),[0,-1,0],Jt*.15)}},I=(pt,X,gt)=>{let Nt=.05+n()*.12;F(pt,X,gt,Nt+.02,.15,n()*2*Ne,.8);let ce=h(Ys.daisy),xe=.03+n()*.025,ne=(n()-.5)*.6,Bt=n()*2*Ne,rt=[Math.cos(Bt)*xe*2,Math.sin(ne)*xe,Math.sin(Bt)*xe*2],Xt=[-Math.sin(Bt)*xe,0,Math.cos(Bt)*xe];u([pt-Math.cos(Bt)*xe,X+Nt,gt-Math.sin(Bt)*xe],Xt,rt,ce,1,uc.DAISY,[0,1,0]),H(pt,X,gt,.04)},V=(pt,X,gt,Nt)=>{let ce=n();ce<.8?C(pt,X,gt,Nt?.2+.3*n():.08+.1*n(),Nt?5+Math.floor(n()*6):3+Math.floor(n()*3)):ce<.93?H(pt,X,gt,Nt?.09+.06*n():.06+.03*n()):I(pt,X,gt)},dt=ut.x0-ut.curb-.08,$t=ut.x1+ut.curb+.08,kt=ut.z0-ut.curb-.08,mt=ut.z1+ut.curb+.08,st=Ut-No.x1-.16,Wt=Ut-No.x0+.16,we=Ce-No.face+.36,_e=(pt,X)=>Math.hypot(pt-uo.cx,X-uo.cz),Ve=(pt,X)=>_e(pt,X)>uo.ri-.1&&_e(pt,X)<uo.ro+1.6||pt>dt&&pt<$t&&X>kt&&X<mt||pt>st&&pt<Wt&&X<we||Math.abs(pt-Ut/2)<1.15&&X>Ce-.5||pt<.06||pt>Ut-.06||X<.06||X>Ce-.06,Ie=(pt,X)=>{let gt=Math.min(pt,Ut-pt,X,Ce-X),Nt=Math.max(dt-pt,pt-$t,kt-X,X-mt),ce=Math.max(st-pt,pt-Wt,X-we);return Math.min(gt,Math.max(Nt,0)+(Nt<0?9:0),Math.max(ce,0)+(ce<0?9:0))},xo=(pt,X)=>.5+.5*Math.sin(pt*.9+1.3)*Math.sin(X*.7-.4)+.25*Math.sin(pt*2.3+X*1.7);for(let pt=0;pt*2<Ut;pt++)for(let X=0;X*2<Ce;X++)for(let[gt,Nt]of BM){let ce=(pt+gt)*2,xe=(X+Nt)*2;if(Ve(ce,xe))continue;let ne=Ie(ce,xe),Bt=(ne<1.2?.75-.4*ne:.2)*Math.max(.2,xo(ce,xe));n()<Bt&&V(ce,.002,xe,ne<.8&&n()<.85)}let ro=(pt,X,gt)=>{let Nt=Math.hypot(X[0]-pt[0],X[1]-pt[1]);for(let ce=0;ce<Nt;ce+=.08){if(n()>.8)continue;let xe=ce/Nt,ne=.04+Math.pow(n(),2)*.3,Bt=pt[0]+(X[0]-pt[0])*xe+gt[0]*ne,rt=pt[1]+(X[1]-pt[1])*xe+gt[1]*ne;Ve(Bt,rt)||V(Bt,.002,rt,!0)}};ro([0,0],[0,Ce],[1,0]),ro([Ut,0],[Ut,Ce],[-1,0]),ro([0,0],[Ut,0],[0,1]),ro([0,Ce],[Ut,Ce],[0,-1]),ro([dt,kt],[$t,kt],[0,-1]),ro([dt,kt],[dt,mt],[-1,0]),ro([$t,kt],[$t,mt],[1,0]),ro([st,we],[Wt,we],[0,1]),ro([st,0],[st,we],[-1,0]),ro([Wt,0],[Wt,we],[1,0]);for(let pt=0;pt<60;pt++){let X=Math.floor(n()*3),gt,Nt;X<2?(gt=X?ut.x1+.08+n()*.38:ut.x0-.08-n()*.38,Nt=ut.z0+n()*(ut.z1-ut.z0)):(Nt=ut.z1+.08+n()*.38,gt=ut.x0+n()*(ut.x1-ut.x0)),C(gt,ut.top,Nt,.04+.06*n(),2+Math.floor(n()*3))}return{walls:t,ground:o,roses:e}}var VM=`
	float hash13(vec3 p3) {
		p3 = fract(p3 * 0.1031);
		p3 += dot(p3, p3.zyx + 31.32);
		return fract((p3.x + p3.y) * p3.z);
	}
	float vnoise3(vec3 p) {
		vec3 i = floor(p), f = fract(p);
		f = f * f * (3.0 - 2.0 * f);
		return mix(mix(mix(hash13(i), hash13(i + vec3(1, 0, 0)), f.x), mix(hash13(i + vec3(0, 1, 0)), hash13(i + vec3(1, 1, 0)), f.x), f.y),
		           mix(mix(hash13(i + vec3(0, 0, 1)), hash13(i + vec3(1, 0, 1)), f.x), mix(hash13(i + vec3(0, 1, 1)), hash13(i + vec3(1, 1, 1)), f.x), f.y), f.z);
	}
	float fbm3(vec3 p) {
		float s = 0.0, a = 0.5;
		for (int i = 0; i < 5; i++) { s += a * vnoise3(p); p = p * 2.03 + 7.1; a *= 0.5; }
		return s;
	}
`,XM=ig.map(t=>fd([t[0],t[1]-.22,t[2]])),Kr=`
	${VM}
	${dd()}

	// the sky outside: what the windows and the roof show, and what
	// lights the room when the sun does not
	vec3 studioSky(vec3 d) {
		float up = clamp(d.y, -0.2, 1.0);
		vec3 dayZen = vec3(0.22, 0.45, 0.85), dayHor = vec3(0.86, 0.90, 0.92);
		vec3 day = mix(dayHor, dayZen, pow(max(up, 0.0), 0.55));
		float sd = max(dot(d, STUDIO_SUN), 0.0);
		day += vec3(1.0, 0.86, 0.62) * (pow(sd, 6.0) * 0.45 + pow(sd, 60.0) * 0.8);
		vec3 nZen = vec3(0.012, 0.022, 0.05), nHor = vec3(0.05, 0.065, 0.10);
		vec3 nite = mix(nHor, nZen, pow(max(up, 0.0), 0.5));
		// the moon, its halo, and the stars
		nite += vec3(0.55, 0.65, 0.9) * (pow(sd, 12.0) * 0.12 + pow(sd, 120.0) * 0.4) + vec3(0.95, 0.97, 1.0) * smoothstep(0.99955, 0.9997, sd) * 3.0;
		vec3 sg = floor(d * 260.0);
		float star = step(0.9965, hash13(sg)) * smoothstep(0.02, 0.2, d.y) * (0.5 + 0.5 * sin(time * 2.0 + hash13(sg + 3.0) * 30.0));
		nite += vec3(0.9, 0.93, 1.0) * star * 0.7;
		return mix(day, nite, night);
	}

	// the light reaching a point: sun through the openings, the sky
	// through the glass, light bounced off the sunlit floor, and at night
	// the pendant lamps. Returns diffuse light; spec gets the sun's glint.
	vec3 studioLight(vec3 pw, vec3 N, vec3 V, float gloss, out vec3 spec, out float sunVis) {
		vec3 p = pw - vec3(${lt(de[0])}, ${lt(de[1])}, ${lt(de[2])});
		float vis = studioSun(pw + N * 0.03);
		sunVis = vis;
		vec3 sunC = mix(vec3(1.0, 0.84, 0.62) * 4.6, vec3(0.50, 0.64, 1.0) * 1.6, night);
		float lam = max(dot(N, STUDIO_SUN), 0.0);
		vec3 col = sunC * vis * lam;
		vec3 Hh = normalize(STUDIO_SUN + V);
		spec = sunC * vis * pow(max(dot(N, Hh), 0.0), mix(16.0, 400.0, gloss)) * mix(0.04, 1.0, gloss) * (lam > 0.0 ? 1.0 : 0.0);

		// skylight: the roof is glass, the walls are full of windows
		float upF = 0.5 + 0.5 * N.y;
		float hgt = clamp(p.y / ${lt(po)}, 0.0, 1.0);
		// corners and the foot of the walls get less of the sky
		float dw = min(min(p.x, ${lt(Ut)} - p.x), min(p.z, ${lt(Ce)} - p.z));
		float occ = mix(0.55, 1.0, smoothstep(0.0, 2.2, dw)) * mix(0.72, 1.0, smoothstep(0.0, 2.5, p.y));
		// (kept low and cool: the shade is deep and a little green-grey, so
		// the room feels old and still and the sunbeams carry the drama)
		vec3 skyC = mix(vec3(0.50, 0.55, 0.54), vec3(0.020, 0.032, 0.065), night);
		col += skyC * (0.18 + 0.55 * upF) * occ * (0.85 + 0.3 * hgt) * 0.22;
		// the bright left windows, seen from walls and things facing them
		col += mix(vec3(1.0, 0.86, 0.66), vec3(0.06, 0.08, 0.14), night) * max(-N.x, 0.0) * 0.12 * occ;
		// light thrown back up off the sunlit floor: warm, from below
		float pools = mix(1.0, 0.15, night);
		col += vec3(0.95, 0.68, 0.42) * pools * (0.07 + 0.18 * max(-N.y, 0.0)) * (1.0 - smoothstep(0.5, 6.0, p.y)) * smoothstep(0.0, 1.2, dw);

		// the lamps (by night)
		if (night > 0.01) {
			${XM.map(t=>`
			{
				vec3 d = vec3(${lt(t[0])}, ${lt(t[1])}, ${lt(t[2])}) - pw;
				float dd = dot(d, d);
				vec3 Ld = d * inversesqrt(dd);
				// the shade throws the light downwards
				float cone = smoothstep(0.05, 0.55, Ld.y);
				float w = night * 6.5 * cone / (1.0 + dd * 0.9);
				col += vec3(1.0, 0.66, 0.36) * w * (max(dot(N, Ld), 0.0) * 0.85 + 0.15);
				spec += vec3(1.0, 0.7, 0.4) * w * pow(max(dot(N, normalize(Ld + V)), 0.0), mix(16.0, 300.0, gloss)) * gloss;
			}`).join("")}
		}
		return col;
	}

	// the dusty, sun-warmed air between the eye and a surface
	vec3 studioAir(vec3 col, vec3 pw, vec3 eye) {
		float d = length(pw - eye);
		float h = 1.0 - exp(-d * 0.06);
		// thicker low down, where the damp hangs over the floor and the pool
		float low = 1.0 - smoothstep(0.0, 3.0, (pw.y + eye.y) * 0.5);
		vec3 airC = mix(vec3(0.17, 0.17, 0.16), vec3(0.012, 0.018, 0.035), night);
		return mix(col, airC, clamp(h * (0.42 + 0.25 * low), 0.0, 0.8));
	}
`;function YM(t){let e=new DataView(t),o=e.getUint32(4,!0),r=e.getUint32(8,!0),n=[],a=[];for(let f=0;f<3;f++)n.push(e.getFloat32(12+f*4,!0)),a.push(e.getFloat32(24+f*4,!0));let s=36,i=new Uint16Array(t,s,o*3);s+=o*6;let c=new Uint16Array(t,s,r);s+=r*2;let h=new Int8Array(t,s,o*3);return{nV:o,nI:r,mn:n,sz:a,pos:i,idx:c,nrm:h}}function or(t,e,o){let r=o&&o.wrap||"clamp",n=t.texture({data:[[[0,0,0,0]]],min:"linear",mag:"linear"}),a={tex:n,ready:!1};return fetch(e).then(s=>{if(!s.ok)throw new Error("Could not load "+e);return s.blob()}).then(s=>createImageBitmap(s,{premultiplyAlpha:"none"}).catch(()=>new Promise((i,c)=>{let h=new Image;h.onload=()=>i(h),h.onerror=c,h.src=URL.createObjectURL(s)}))).then(s=>{n({data:s,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrap:r}),a.ready=!0}).catch(s=>console.error(s)),a}var Ah=128,Th=Math.round((ut.z1-ut.z0)/(11/372)),$l=(ut.x1-ut.x0)/Ah,cg=(ut.z1-ut.z0)/Th,KM=.02,lg=`
	float simDec(vec2 c) { return (floor(c.x * 255.0 + 0.5) * 256.0 + floor(c.y * 255.0 + 0.5)) / 65535.0 * 2.0 - 1.0; }
	vec2 simEnc(float h) {
		float v = floor(clamp(h * 0.5 + 0.5, 0.0, 1.0) * 65535.0 + 0.5);
		float hi = floor(v / 256.0);
		return vec2(hi, v - hi * 256.0) / 255.0;
	}
`,ns=`
	uniform float stime;
	uniform highp sampler2D simTex;
	${lg}
	float simAt(vec2 i) {
		i = clamp(i, vec2(0.0), vec2(${Ah-1}.0, ${Th-1}.0));
		return simDec(texture2D(simTex, (i + 0.5) / vec2(${Ah}.0, ${Th}.0)).rg);
	}
	// the height of the water at world xz (metres, tiny)
	float poolHeight(vec2 xz) {
		float h = 0.0018 * sin(xz.x * 2.1 + stime * 0.55) * sin(xz.y * 1.7 - stime * 0.43)
		        + 0.0010 * sin(xz.x * 3.7 - xz.y * 2.9 + stime * 0.8);
#ifndef NO_SIM
		vec2 g = (xz - vec2(${lt(ut.x0+de[0])}, ${lt(ut.z0+de[2])})) / vec2(${lt($l)}, ${lt(cg)}) - 0.5;
		vec2 i = floor(g), fr = g - i;
		float sh = mix(mix(simAt(i), simAt(i + vec2(1.0, 0.0)), fr.x), mix(simAt(i + vec2(0.0, 1.0)), simAt(i + vec2(1.0, 1.0)), fr.x), fr.y);
		h += sh * ${lt(KM)};
#endif
		return h;
	}
`,ag=`
	precision highp float;
	uniform mat4 proj, view;
	uniform float yScale;
	attribute vec3 position, normal;
	attribute float kind;
	attribute vec2 uv;
	attribute vec4 anchor;
	varying vec3 v_pos, v_nrm, v_eye;
	varying float v_kind;
	varying vec2 v_uv;
	${ns}
	void main() {
		vec3 q = position;
		vec3 n = normal;
		if (anchor.w > 0.5) {
			// floating: a slow wander, a slow turn, and riding the water
			vec2 c = anchor.xy;
			float sd = anchor.z;
			vec2 drift = vec2(sin(stime * 0.045 + sd * 6.3), cos(stime * 0.037 + sd * 4.1)) * 0.05;
			float rot = sin(stime * 0.05 + sd * 9.0) * 0.18;
			vec2 rel = q.xz - c;
			float cr = cos(rot), sr = sin(rot);
			rel = vec2(cr * rel.x - sr * rel.y, sr * rel.x + cr * rel.y);
			vec2 cc = c + drift;
			q.xz = cc + rel;
			// lift and tilt with the water under it
			float h0 = poolHeight(cc);
			float e = 0.08;
			vec2 grad = vec2(poolHeight(cc + vec2(e, 0.0)) - h0, poolHeight(cc + vec2(0.0, e)) - h0) / e;
			q.y += h0 * 1.4 + dot(rel, grad) * 1.4;
			n = normalize(vec3(n.x - grad.x * n.y, n.y, n.z - grad.y * n.y));
		}
		v_pos = q; v_nrm = n; v_kind = kind; v_uv = uv;
		vec3 t = view[3].xyz;
		v_eye = -vec3(dot(view[0].xyz, t), dot(view[1].xyz, t), dot(view[2].xyz, t));
		v_eye.y *= yScale;
		vec3 p = q; p.y *= yScale;
		gl_Position = proj * view * vec4(p, 1.0);
	}`,QM=`
	precision highp float;
	uniform float night, time, yScale, mirrorOn;
	uniform sampler2D padTex, petalTex, reflTex;
	uniform sampler2D rockCol, rockNrm, oldCol, oldNrm, floorCol, floorNrm;
	uniform vec2 reflSize;
	uniform float reflOn;
	uniform mat4 view;
	${ns}
	varying vec3 v_pos, v_nrm, v_eye;
	varying float v_kind;
	varying vec2 v_uv;
	${Kr}

	bool is(float k) { return abs(v_kind - k) < 0.5; }

	// a photographed stone laid flat on a face, along the face's main axis:
	// its texture coordinates and the directions of the picture's right and up
	void planar(vec3 p, vec3 N, float scale, out vec2 uv, out vec3 T, out vec3 B) {
		vec3 a = abs(N);
		if (a.y > a.x && a.y > a.z) { uv = p.xz; T = vec3(1.0, 0.0, 0.0); B = vec3(0.0, 0.0, -1.0); }
		else if (a.x > a.z) { uv = vec2(p.z, -p.y); T = vec3(0.0, 0.0, 1.0); B = vec3(0.0, 1.0, 0.0); }
		else { uv = vec2(p.x, -p.y); T = vec3(1.0, 0.0, 0.0); B = vec3(0.0, 1.0, 0.0); }
		uv /= scale;
	}
	// the stone's relief from its normal map (rg), and its hollows (b)
	vec3 bumped(vec3 N, vec3 T, vec3 B, vec4 tn, float k) {
		vec2 d = tn.rg * 2.0 - 1.0;
		return normalize(N + (T * d.x + B * d.y) * k);
	}
	// the old stone's colour: greyed, cooled, a little green, as in his photograph
	vec3 oldTone(vec3 tc) {
		float lum = dot(tc, vec3(0.3, 0.59, 0.11));
		return mix(vec3(lum), tc, 0.42) * vec3(1.06, 1.10, 1.06);
	}

	void main() {
		vec3 pw = v_pos;
		vec3 p = pw - vec3(${lt(de[0])}, ${lt(de[1])}, ${lt(de[2])});
		vec3 V = normalize(v_eye - pw);
		vec3 N = normalize(v_nrm);
		if (dot(N, V) < 0.0 && !is(${Et.PETAL}.0)) N = -N;
		if (is(${Et.PETAL}.0) && dot(N, V) < 0.0) N = -N;

		// in the reflection under the floor, the floor and the water are not drawn
		bool floorish = is(${Et.FLOOR}.0) || is(${Et.WATER}.0);
		if (yScale < 0.0 && floorish) discard;

		// fallen bracts: little papery hearts, pink or white
		if (is(${Et.BRACT}.0)) {
			vec2 u = vec2(fract(v_uv.x), v_uv.y) * 2.0 - 1.0;
			float heart = length(vec2(u.x * 1.1, u.y + 0.15 * abs(u.x) * 2.0 - 0.1)) ;
			if (heart > 0.85 + 0.1 * sin(atan(u.y, u.x) * 3.0)) discard;
		}
		vec3 base = vec3(0.5);
		float gloss = 0.1;
		float checker = 0.0;
		float rough = 1.0;
		float aoK = 1.0;
		float sss = 0.0;

		if (is(${Et.ROCK}.0)) {
			// rough walling: uneven slabs of pale coral stone bedded in lime,
			// greyed by age, damp and darker at the foot, streaked where rain
			// once ran down
			vec2 uv; vec3 T, B;
			planar(p, N, 2.0, uv, T, B);
			vec3 tc = texture2D(rockCol, uv).rgb; tc *= tc;
			vec4 tn = texture2D(rockNrm, uv);
			float lum = dot(tc, vec3(0.3, 0.59, 0.11));
			base = mix(vec3(lum), tc, 0.5) * vec3(1.62, 1.64, 1.56);
			base *= 0.86 + 0.24 * fbm3(p * vec3(0.22, 0.16, 0.22) + 5.0);
			float streak = fbm3(vec3((p.x + p.z) * 1.6, p.y * 0.1, 3.0));
			base = mix(base, base * vec3(0.72, 0.75, 0.70), smoothstep(0.52, 0.78, streak) * 0.8);
			base *= mix(0.66, 1.0, smoothstep(0.0, 1.3, p.y + 0.4 * streak));
			base *= mix(1.0, 0.84, smoothstep(${lt(po-2.2)}, ${lt(po)}, p.y));
			N = bumped(N, T, B, tn, 1.4);
			aoK = mix(0.42, 1.0, tn.b);
			gloss = 0.05;
		} else if (is(${Et.OLDSTONE}.0) || is(${Et.HOLLOW}.0)) {
			// old weathered limestone, dressed in blocks: grey and lichened,
			// darker and greener low down and where the water has been
			vec2 uv; vec3 T, B;
			planar(p, N, 1.7, uv, T, B);
			vec3 tc = texture2D(oldCol, uv).rgb; tc *= tc;
			vec4 tn = texture2D(oldNrm, uv);
			base = oldTone(tc) * 1.18;
			base *= 0.86 + 0.26 * fbm3(p * 0.5 + 9.0);
			float streak = fbm3(vec3((p.x + p.z) * 3.0, p.y * 0.25, 7.0));
			base = mix(base, base * vec3(0.55, 0.58, 0.52), smoothstep(0.55, 0.8, streak) * 0.75);
			// moss and wet near the water and the floor
			float low = 1.0 - smoothstep(0.0, ${lt(ut.top+.35)}, p.y);
			float moss = low * smoothstep(0.35, 0.65, fbm3(p * 4.0 + 2.0));
			base = mix(base, vec3(0.10, 0.12, 0.065), moss * 0.6);
			base *= mix(0.72, 1.0, smoothstep(0.0, 0.22, p.y));
			if (is(${Et.HOLLOW}.0)) {
				// the hollow: older, damper, never washed by the sun
				base *= vec3(0.70, 0.73, 0.68) * (0.85 + 0.15 * smoothstep(${lt(No.floor)}, ${lt(No.spring)}, p.y));
			}
			N = bumped(N, T, B, tn, 1.1);
			aoK = mix(0.5, 1.0, tn.b);
			gloss = 0.08;
		} else if (is(${Et.PLASTER}.0) || is(${Et.NICHE}.0)) {
			// old lime plaster: warm, patchy, with a soft trowelled bloom
			float big = fbm3(p * vec3(0.35, 0.45, 0.35));
			float mid = fbm3(p * 1.6 + 3.0);
			float fine = vnoise3(p * 14.0);
			vec3 a = vec3(0.70, 0.60, 0.47), b = vec3(0.84, 0.76, 0.63);
			base = mix(a, b, smoothstep(0.3, 0.7, big));
			base *= 0.86 + 0.22 * mid + 0.05 * fine;
			// damp stains low down, soot high up
			base *= mix(0.86, 1.0, smoothstep(0.0, 1.4, p.y + 0.6 * mid));
			base *= mix(1.0, 0.9, smoothstep(${lt(po-2)}, ${lt(po)}, p.y));
			// where the plaster has come away, old brick shows through
			float bare = smoothstep(0.70, 0.74, fbm3(p * vec3(0.5, 0.8, 0.5) + 11.0)) * smoothstep(0.4, 1.6, p.y) * 0.85;
			vec2 bk = (abs(N.x) > 0.5 ? p.zy : p.xy) * vec2(1.0 / 0.23, 1.0 / 0.075);
			bk.x += floor(bk.y) * 0.5;
			float mortar = max(smoothstep(0.9, 0.97, fract(bk.x)), smoothstep(0.82, 0.92, fract(bk.y)));
			vec3 brick = mix(vec3(0.55, 0.30, 0.20), vec3(0.42, 0.25, 0.18), vnoise3(vec3(floor(bk), 0.0) * 0.7)) * (0.85 + 0.3 * hash13(vec3(floor(bk), 1.0)));
			brick = mix(brick, vec3(0.62, 0.58, 0.52), mortar);
			base = mix(base, brick, bare);
			if (is(${Et.NICHE}.0)) base *= 0.55;
			gloss = 0.04;
		} else if (is(${Et.STONE}.0)) {
			float n = fbm3(p * vec3(1.2, 2.5, 1.2));
			base = mix(vec3(0.72, 0.66, 0.56), vec3(0.84, 0.79, 0.70), n) * (0.92 + 0.12 * vnoise3(p * 20.0));
			gloss = 0.12;
		} else if (is(${Et.TRAVERTINE}.0)) {
			// travertine: bands, little holes, a warm cream
			float band = fbm3(vec3(p.x * 0.4, p.y * 9.0 + fbm3(p * 1.5) * 2.0, p.z * 0.4));
			base = mix(vec3(0.73, 0.65, 0.53), vec3(0.88, 0.82, 0.72), band);
			float pit = smoothstep(0.84, 0.9, vnoise3(p * 55.0));
			base *= 1.0 - pit * 0.18;
			// wet and darker just above the water
			base *= mix(0.78, 1.0, smoothstep(0.0, 0.12, p.y));
			gloss = 0.18;
		} else if (is(${Et.STEEL}.0)) {
			base = vec3(0.035, 0.036, 0.038) * (0.8 + 0.4 * vnoise3(p * 3.0));
			gloss = 0.45;
		} else if (is(${Et.FLOOR}.0)) {
			// flagstones: irregular grey slabs, worn and uneven, with grass and
			// moss in the joints between them (res/studio/floor_*)
			vec2 uv = p.xz / 2.0;
			vec3 tc = texture2D(floorCol, uv).rgb; tc *= tc;
			vec4 tn = texture2D(floorNrm, uv);
			float lum = dot(tc, vec3(0.3, 0.59, 0.11));
			float green = smoothstep(-0.01, 0.035, sqrt(tc.g) - 0.5 * (sqrt(tc.r) + sqrt(tc.b)));
			// the stones greyed like his photograph, the joints kept green
			base = mix(mix(vec3(lum), tc, 0.35) * vec3(1.18, 1.20, 1.16), tc * vec3(0.62, 1.12, 0.42), green);
			base *= 0.84 + 0.28 * fbm3(vec3(p.xz * 0.3, 4.0));
			// damp and darker near the walls and round the pool
			float wallD = min(min(p.x, ${lt(Ut)} - p.x), min(p.z, ${lt(Ce)} - p.z));
			base *= mix(0.72, 1.0, smoothstep(0.0, 1.2, wallD));
			N = normalize(N + (vec3(1.0, 0.0, 0.0) * (tn.r * 2.0 - 1.0) + vec3(0.0, 0.0, -1.0) * (tn.g * 2.0 - 1.0)) * 1.2);
			gloss = 0.12;
			aoK = mix(0.5, 1.0, tn.b) * mix(0.62, 1.0, smoothstep(0.0, 0.9, wallD));
			// the curb throws a soft shadow round the pool
			vec2 dq = max(vec2(${lt(ut.x0-ut.curb)} - p.x, p.x - ${lt(ut.x1+ut.curb)}), vec2(${lt(ut.z0-ut.curb)} - p.z, p.z - ${lt(ut.z1+ut.curb)}));
			float dpool = max(max(dq.x, dq.y), 0.0);
			aoK *= mix(0.7, 1.0, smoothstep(0.0, 0.4, dpool));
		} else if (is(${Et.WMARBLE}.0)) {
			// white statuary marble, polished: a soft grey cloud and fine veins
			float cl = fbm3(p * 1.4 + 2.0);
			float v1 = abs(sin(p.x * 3.1 + p.z * 1.7 + p.y * 5.0 + cl * 7.0));
			float vein = (1.0 - smoothstep(0.0, 0.05, v1)) * 0.7 + (1.0 - smoothstep(0.0, 0.02, abs(sin(p.z * 6.3 - p.x * 2.2 + cl * 11.0)))) * 0.3;
			base = mix(vec3(0.68, 0.68, 0.66), vec3(0.76, 0.76, 0.74), cl);
			base = mix(base, vec3(0.50, 0.51, 0.52), vein * 0.45);
			base *= mix(0.8, 1.0, smoothstep(0.0, 0.1, p.y));
			gloss = 0.88;
		} else if (is(${Et.REDDOOR}.0) || is(${Et.REDPANEL}.0)) {
			// deep crimson paint over wood: a soft sheen, the grain just showing
			float grain = vnoise3(vec3(p.x * 40.0, p.y * 2.0, p.z * 40.0));
			base = vec3(0.30, 0.022, 0.026) * (0.88 + 0.2 * grain);
			if (is(${Et.REDPANEL}.0)) base *= 0.55;
			gloss = 0.62;
		} else if (is(${Et.DARKWOOD}.0)) {
			float grain = vnoise3(vec3(p.x * 3.0, p.y * 45.0, p.z * 3.0));
			base = mix(vec3(0.030, 0.019, 0.014), vec3(0.062, 0.040, 0.028), grain);
			gloss = 0.35;
		} else if (is(${Et.BRASS}.0)) {
			base = vec3(0.60, 0.44, 0.17) * (0.85 + 0.25 * vnoise3(p * 90.0));
			gloss = 0.78;
		} else if (is(${Et.KEYHOLE}.0)) {
			base = vec3(0.004);
		} else if (is(${Et.BRACT}.0)) {
			float white = step(1.5, v_uv.x);
			base = mix(vec3(0.62, 0.03, 0.22), vec3(0.86, 0.80, 0.80), white) * (0.8 + 0.3 * hash13(floor(p * 30.0)));
			sss = 0.5;
		} else if (is(${Et.WATER}.0)) {
			base = vec3(0.012, 0.018, 0.014);
			gloss = 1.0;
		} else if (is(${Et.PAD}.0)) {
			vec4 tx = texture2D(padTex, v_uv);
			if (tx.a < 0.5) discard;
			base = tx.rgb * tx.rgb * (0.8 + 0.35 * vnoise3(vec3(p.xz * 1.3, 2.0)));
			gloss = 0.55;
		} else if (is(${Et.PETAL}.0)) {
			vec4 tx = texture2D(petalTex, v_uv);
			if (tx.a < 0.45) discard;
			base = tx.rgb * tx.rgb;
			sss = 0.6;
			gloss = 0.25;
		} else if (is(${Et.STAMEN}.0)) {
			base = vec3(0.95, 0.66, 0.12);
			gloss = 0.2;
		} else if (is(${Et.MARBLE}.0)) {
			// the nymph, aged like the niche: weathered pale stone gone grey,
			// rain streaks down her, grime in the folds and under her, lichen at the foot
			vec3 w = pow(abs(N), vec3(4.0)); w /= (w.x + w.y + w.z);
			vec3 tc = texture2D(oldCol, p.zy * 0.9).rgb * w.x + texture2D(oldCol, p.xz * 0.9).rgb * w.y + texture2D(oldCol, p.xy * 0.9).rgb * w.z;
			tc *= tc;
			base = mix(vec3(0.27, 0.26, 0.225), oldTone(tc) * 1.05, 0.65);
			float rain = fbm3(vec3(p.x * 7.0, p.y * 0.7, p.z * 7.0));
			base *= mix(1.0, 0.5, smoothstep(0.5, 0.8, rain));
			// grey-green lichen in blotches
			float lich = smoothstep(0.58, 0.72, fbm3(p * 9.0 + 4.0));
			base = mix(base, vec3(0.14, 0.15, 0.11), lich * 0.55);
			base *= mix(0.62, 1.0, smoothstep(-0.7, 0.35, N.y));
			float foot = 1.0 - smoothstep(${lt(yn.plinth)}, ${lt(yn.plinth+.7)}, p.y);
			base = mix(base, base * vec3(0.55, 0.62, 0.48), foot * smoothstep(0.4, 0.7, fbm3(p * 6.0)));
			sss = 0.06;
			gloss = 0.14;
		} else if (is(${Et.WOOD}.0)) {
			float g = vnoise3(vec3(p.x * 2.0, p.y * 30.0, p.z * 2.0));
			base = mix(vec3(0.26, 0.15, 0.08), vec3(0.42, 0.27, 0.15), g) * (0.85 + 0.2 * vnoise3(p * 5.0));
			gloss = 0.2;
		} else if (is(${Et.GESSO}.0)) {
			base = vec3(0.86, 0.83, 0.76) * (0.95 + 0.08 * vnoise3(p * 30.0));
		} else if (is(${Et.PAINT}.0)) {
			// a canvas in progress (until his own go here): a warm toned
			// ground, a loose underpainting and a few strokes
			vec2 u = fract(v_uv);
			float idx = floor(v_uv.x);
			float sk = fbm3(vec3(u * vec2(3.0, 4.0), idx * 3.7));
			vec3 ground = mix(vec3(0.55, 0.36, 0.22), vec3(0.72, 0.56, 0.40), sk);
			float fig = smoothstep(0.32, 0.2, length((u - vec2(0.5, 0.58 + 0.04 * idx)) * vec2(1.4, 0.9)) + 0.15 * sk);
			base = mix(ground, vec3(0.22, 0.13, 0.08), fig * 0.6);
			base = mix(base, vec3(0.86, 0.80, 0.70), smoothstep(0.74, 0.8, fbm3(vec3(u * 9.0, idx))) * 0.5);
			float weave = 0.5 + 0.5 * sin(u.x * 610.0) * sin(u.y * 920.0);
			base *= 0.95 + 0.05 * weave;
			gloss = 0.3;
		} else if (is(${Et.POT}.0)) {
			base = vec3(0.025, 0.025, 0.028);
			gloss = 0.85;
		} else if (is(${Et.SOIL}.0)) {
			base = vec3(0.10, 0.07, 0.05) * (0.7 + 0.5 * vnoise3(p * 40.0));
		} else if (is(${Et.SHADE}.0)) {
			base = vec3(0.03);
			gloss = 0.6;
		} else if (is(${Et.BULB}.0)) {
			vec3 glow = mix(vec3(0.75, 0.70, 0.62) * 0.35, vec3(1.0, 0.75, 0.45) * 3.5, night);
			gl_FragColor = vec4(sqrt(glow), 1.0);
			return;
		} else if (is(${Et.JAR}.0)) {
			base = mix(vec3(0.55, 0.42, 0.25), vec3(0.75, 0.70, 0.62), hash13(floor(p * 3.0)));
			gloss = 0.7;
		} else if (is(${Et.BRUSH}.0)) {
			base = mix(vec3(0.42, 0.10, 0.06), vec3(0.75, 0.62, 0.38), step(${lt(.86+.24)}, p.y));
			gloss = 0.5;
		} else if (is(${Et.CLOTH}.0)) {
			float sp = smoothstep(0.86, 0.88, vnoise3(vec3(p.xz * 14.0, 5.0))) * smoothstep(0.5, 0.7, vnoise3(vec3(p.xz * 1.5, 1.0)));
			float sp2 = smoothstep(0.88, 0.9, vnoise3(vec3(p.xz * 19.0, 9.0))) * smoothstep(0.55, 0.75, vnoise3(vec3(p.xz * 1.2, 4.0)));
			base = vec3(0.52, 0.48, 0.42) * (0.9 + 0.12 * vnoise3(p * 25.0));
			base = mix(base, vec3(0.62, 0.30, 0.14), sp * 0.8);
			base = mix(base, vec3(0.20, 0.25, 0.35), sp2 * 0.7);
		}

		vec3 spec;
		float sunVis;
		vec3 light = studioLight(pw, N, V, gloss, spec, sunVis);
		vec3 col = base * light * aoK;

		// a soft sheen of light through the skin of petals and marble
		if (sss > 0.0) {
			float back = max(dot(-N, STUDIO_SUN), 0.0) * sunVis;
			float wrap = max(dot(N, STUDIO_SUN) + 0.5, 0.0) / 1.5 * sunVis;
			col += base * vec3(1.0, 0.82, 0.62) * (back * 0.8 + wrap * 0.6) * sss * mix(1.0, 0.1, night);
		}

		// reflections of the room and sky in the glossy things
		vec3 R = reflect(-V, N);
		float fres = pow(1.0 - max(dot(N, V), 0.0), 5.0);
		vec3 env = studioSky(R) * mix(0.35, 0.12, smoothstep(0.0, 0.5, -R.y)) * 0.8;
		col += spec;
		if (is(${Et.POT}.0) || is(${Et.STEEL}.0) || is(${Et.SHADE}.0) || is(${Et.JAR}.0)) {
			col += env * (0.04 + 0.6 * fres) * gloss * 1.2;
		}
		if (is(${Et.BRASS}.0)) {
			col = base * light * 0.35 + spec * base * 2.5 + env * base * 1.6;
		}
		if (is(${Et.REDDOOR}.0) || is(${Et.REDPANEL}.0) || is(${Et.WMARBLE}.0)) {
			col += env * (0.03 + 0.5 * fres) * gloss;
		}

		col = studioAir(col, pw, v_eye);

		float alpha = 1.0;
		if (is(${Et.FLOOR}.0)) {
			// worn stone: no mirror, just a faint sheen of the room at grazing angles
			float cosV = clamp(V.y, 0.0, 1.0);
			alpha = 1.0 - 0.1 * pow(1.0 - cosV, 4.0) * mirrorOn;
		}
		if (is(${Et.WATER}.0)) {
			// still, dark water: almost a mirror, the sky's light on it, a
			// very slow breath of ripples
			// the moving surface: its slope from the swell and the rings
			float e = ${lt($l)};
			float h0 = poolHeight(pw.xz);
			vec2 grad = vec2(poolHeight(pw.xz + vec2(e, 0.0)) - poolHeight(pw.xz - vec2(e, 0.0)), poolHeight(pw.xz + vec2(0.0, e)) - poolHeight(pw.xz - vec2(0.0, e))) / (2.0 * e);
			vec3 Nw = normalize(vec3(-grad.x, 1.0, -grad.y));
			float stir = clamp(length(grad) * 6.0, 0.0, 1.0);
			float cosV = clamp(dot(Nw, V), 0.0, 1.0);
			float F = 0.02 + 0.98 * pow(1.0 - cosV, 5.0);
			float refl = mix(0.30, 0.95, F);
			// the sun (or the moon) glinting on the moving water
			vec3 Rw = reflect(-V, Nw);
			float glint = pow(max(dot(Rw, STUDIO_SUN), 0.0), 900.0) * sunVis;
			vec3 glintC = mix(vec3(1.0, 0.92, 0.78) * 9.0, vec3(0.75, 0.85, 1.0) * 3.0, night);
			col = base * light * 0.35;
			// where the rings pass, crests tipped away from you catch the bright
			// roof, troughs show the dark depth
			float side = clamp(dot(grad, normalize(V.xz + vec2(1e-4))) * 9.0, -1.0, 1.0);
			vec3 hi = studioSky(Rw) * mix(0.55, 0.30, night) + light * 0.04;
			vec3 lo = vec3(0.008, 0.011, 0.010);
			vec3 ringC = mix(lo, hi, 0.5 + 0.5 * side);
			col = mix(col, ringC, stir * (reflOn > 0.5 ? 0.25 : 0.6));
			col = studioAir(col, pw, v_eye);
			alpha = 1.0 - refl * mirrorOn * (1.0 - stir * 0.6);
			if (reflOn > 0.5 && mirrorOn > 0.5) {
				// the room's reflection, bent by the slope of the water under it
				vec3 dN = Nw - vec3(0.0, 1.0, 0.0);
				vec3 rgt = vec3(view[0].x, view[1].x, view[2].x), upv = vec3(view[0].y, view[1].y, view[2].y);
				float dist = length(v_eye - pw);
				vec2 off = vec2(dot(dN, rgt), dot(dN, upv)) * 0.3 / (1.0 + dist * 0.2);
				vec3 rc = texture2D(reflTex, clamp(gl_FragCoord.xy / reflSize + off, vec2(0.001), vec2(0.999))).rgb;
				col = mix(col, rc * rc, refl * (1.0 - stir * 0.3));
				alpha = 1.0;
			}
			col += glintC * glint;
			alpha = max(alpha, glint);
			if (mirrorOn < 0.5) { col = mix(col, studioSky(Rw) * 0.35, F); alpha = 1.0; }
		}

		col = max(col, vec3(0.0));
		gl_FragColor = vec4(sqrt(col), alpha);
	}`;Qr.exports=function(t){let e=qM();DM(e),FM(e),GM(e),OM(e),CM(e);let o={enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"zero"}},r=performance.now(),n={t:0},a=0,s=t._gl,i=!!(s&&s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS)>0),c=U=>i?U:`#define NO_SIM
`+U,h=(()=>{let U=Ah,Q=Th,j=new Uint8Array(U*Q*4);for(let se=0;se<U*Q;se++)j[se*4]=128,j[se*4+2]=128;let Tt=()=>t.framebuffer({color:t.texture({width:U,height:Q,data:j,min:"nearest",mag:"nearest",wrap:"clamp"}),depth:!1,stencil:!1}),Kt=[Tt(),Tt()],Rt=0,_t=new Uint8Array(U*Q*4);for(let se=0;se<Q;se++)for(let eo=0;eo<U;eo++){let ko=ut.x0+(eo+.5)*$l,Io=ut.z0+(se+.5)*cg,Oe=Math.abs(ko-yn.x)<.43&&Math.abs(Io-yn.z)<.43,qe=0;for(let B of ud)qe=Math.max(qe,1-Math.min(1,Math.max(0,(Math.hypot(ko-B[0],Io-B[1])-B[2]*.7)/(B[2]*.3))));let oo=(se*U+eo)*4;_t[oo]=Oe?0:255,_t[oo+1]=Math.round(qe*255),_t[oo+3]=255}let fe=t.texture({width:U,height:Q,data:_t,min:"nearest",mag:"nearest",wrap:"clamp"}),Ft=16,ye=[];for(let se=0;se<Ft;se++)ye.push([0,0,0,.04]);let ue={prev:t.prop("prev"),mask:fe};for(let se=0;se<Ft;se++)ue["src["+se+"]"]=(eo=>()=>ye[eo])(se);let Me=Math.pow(.36*(1/60)/$l,2),Re=t({vert:"precision highp float; attribute vec2 position; varying vec2 uv; void main() { uv = position * 0.5 + 0.5; gl_Position = vec4(position, 0.0, 1.0); }",frag:`
			precision highp float;
			uniform highp sampler2D prev, mask;
			uniform vec4 src[${Ft}];
			varying vec2 uv;
			${lg}
			void main() {
				vec2 px = 1.0 / vec2(${U}.0, ${Q}.0);
				vec4 c = texture2D(prev, uv);
				vec4 m = texture2D(mask, uv);
				float h = simDec(c.rg), hp = simDec(c.ba);
				if (m.r < 0.5) { gl_FragColor = vec4(simEnc(0.0), simEnc(0.0)); return; }
				// the neighbours (a wall or the plinth turns the wave back)
				float hs[4];
				vec2 d[4];
				d[0] = vec2(px.x, 0.0); d[1] = vec2(-px.x, 0.0); d[2] = vec2(0.0, px.y); d[3] = vec2(0.0, -px.y);
				float lap = -4.0 * h;
				for (int k = 0; k < 4; k++) {
					vec2 q = uv + d[k];
					bool inside = q.x > 0.0 && q.x < 1.0 && q.y > 0.0 && q.y < 1.0 && texture2D(mask, q).r > 0.5;
					lap += inside ? simDec(texture2D(prev, q).rg) : h;
				}
				// the pads hush the small waves under them
				float damp = mix(0.996, 0.95, m.g);
				float hn = h + (h - hp) * damp + ${lt(Me)} * lap;
				hn *= 0.9993;
				// whatever touched the water this moment
				vec2 p = vec2(${lt(ut.x0+de[0])}, ${lt(ut.z0+de[2])}) + uv * vec2(${lt(ut.x1-ut.x0)}, ${lt(ut.z1-ut.z0)});
				for (int i = 0; i < ${Ft}; i++) {
					vec4 s = src[i];
					if (s.z == 0.0) continue;
					vec2 dd = p - s.xy;
					hn += s.z * exp(-dot(dd, dd) / (s.w * s.w));
				}
				gl_FragColor = vec4(simEnc(clamp(hn, -1.0, 1.0)), simEnc(h));
			}`,attributes:{position:[-1,-1,1,-1,-1,1,1,1]},primitive:"triangle strip",count:4,framebuffer:t.prop("out"),uniforms:ue,depth:{enable:!1,mask:!1},blend:{enable:!1},cull:{enable:!1},viewport:{x:0,y:0,width:U,height:Q}}),pe=[],Ue=0,Ye=0;return{tex:()=>Kt[Rt].color[0],drop(se,eo,ko,Io){pe.push([se,eo,Ue,ko,0,Io||.035]),typeof window!="undefined"&&window.__dropLog&&window.__dropLog.push([se,eo,Ue,ko])},advance(se,eo){let ko=se-Ue-Ye;if(ko<0||ko>2){Ue=se,Ye=0;return}Ye+=ko;let Io=0;for(;Ye>=1/60&&Io<8;){Ye-=1/60,Ue+=1/60,Io++;let Oe=0;for(let qe=pe.length-1;qe>=0;qe--){let oo=pe[qe],B=Ue-oo[2];if(B>1.4){pe.splice(qe,1);continue}if(Oe>=Ft)continue;let yt=oo[3]*.05*Math.sin(B*2*Math.PI*2.4)*Math.exp(-B*3.2),Yt=ye[Oe++];Yt[0]=oo[0],Yt[1]=oo[1],Yt[2]=yt,Yt[3]=oo[5]}for(let qe of eo){if(Oe>=Ft)break;let oo=ye[Oe++];oo[0]=qe[0],oo[1]=qe[1],oo[2]=qe[2],oo[3]=qe[3]}for(;Oe<Ft;Oe++)ye[Oe][2]=0;Re({prev:Kt[Rt].color[0],out:Kt[1-Rt]}),Rt=1-Rt}Io===8&&(Ye=0,Ue=se)},read(){return t.read({framebuffer:Kt[Rt]})}}})(),f=()=>{n.t=(performance.now()-r)/1e3,typeof window!="undefined"&&window.__studioFreeze!=null&&(n.t=window.__studioFreeze);for(let j of og){let Tt=$M(j,n.t),Kt=Tt.ph-Tt.Tf;Tt.inPool&&Kt>=0&&Kt<.5&&!(j.heard>n.t-1)&&(j.heard=n.t,h.drop(Tt.lx+de[0],Tt.lz+de[2],1.1,.04))}let U=n.t-X.sim.t;for((U<0||U>120)&&(U=Math.min(Math.max(U,0),120));U>1e-6;){let j=Math.min(U,.05);X.sim.step(j),U-=j}for(let j of X.sim.events)j[2]>a&&(a=j[2],h.drop(j[0]+de[0],j[1]+de[2],j[3]*1.3,j[3]>=1?.07:.04));let Q=[];for(let j of X.sim.fish){let Tt=Math.min(1,Math.max(0,(j.y+.15)/.09));if(Tt<=0)continue;let Kt=.008*Tt*Math.min(1.5,j.v/.15);Q.push([j.x+de[0]+Math.cos(j.th)*.02,j.z+de[2]+Math.sin(j.th)*.02,Kt,.045]),Q.push([j.x+de[0]-Math.cos(j.th)*.14,j.z+de[2]-Math.sin(j.th)*.14,-Kt,.055])}h.advance(n.t,Q)},d={stime:()=>n.t,simTex:()=>h.tex()};typeof location!="undefined"&&/tourdebug/.test(location.search)&&(window.__studioClock=n,window.__pondSim=h);let u=t.texture({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"}),v=[4,4],l=0,p=t({}),m=()=>p(U=>{let Q=U.viewportWidth,j=U.viewportHeight;u.width!==Q||u.height!==j?u({copy:!0,width:Q,height:j,min:"linear",mag:"linear",wrap:"clamp"}):u.subimage({copy:!0,width:Q,height:j}),v[0]=Q,v[1]=j,l=1}),g=or(t,"res/pond/lilypad.webp"),x=or(t,"res/pond/petals.webp"),y=or(t,"res/studio/rock_col.webp",{wrap:"repeat"}),w=or(t,"res/studio/rock_nrm.webp",{wrap:"repeat"}),_=or(t,"res/studio/oldstone_col.webp",{wrap:"repeat"}),M=or(t,"res/studio/oldstone_nrm.webp",{wrap:"repeat"}),k=or(t,"res/studio/floor_col.webp",{wrap:"repeat"}),R=or(t,"res/studio/floor_nrm.webp",{wrap:"repeat"}),A=Object.assign({padTex:()=>g.tex,petalTex:()=>x.tex,reflTex:()=>u,reflSize:()=>v,reflOn:()=>l,rockCol:()=>y.tex,rockNrm:()=>w.tex,oldCol:()=>_.tex,oldNrm:()=>M.tex,floorCol:()=>k.tex,floorNrm:()=>R.tex},d),F=(U,Q)=>t({vert:c(ag),frag:QM,attributes:{position:U.pos,normal:U.nrm,kind:U.kind,uv:U.uv,anchor:U.anchor&&U.anchor.length?U.anchor:new Float32Array(U.pos.length/3*4)},elements:new Uint32Array(U.idx),count:Q||U.idx.length,uniforms:A,cull:{enable:!1},blend:o}),C=F(e),H=null;fetch(yn.file).then(U=>{if(!U.ok)throw new Error("Could not load "+yn.file);return U.arrayBuffer()}).then(U=>{let Q=YM(U),j={pos:[],nrm:[],kind:[],uv:[],anchor:null,idx:[]},Tt=yn.height,Kt=Math.cos(yn.yaw),Rt=Math.sin(yn.yaw);for(let _t=0;_t<Q.nV;_t++){let fe=(Q.mn[0]+Q.pos[_t*3]/65535*Q.sz[0])*Tt,Ft=(Q.mn[1]+Q.pos[_t*3+1]/65535*Q.sz[1])*Tt,ye=(Q.mn[2]+Q.pos[_t*3+2]/65535*Q.sz[2])*Tt;j.pos.push(yn.x+Kt*fe+Rt*ye+de[0],yn.plinth+Ft+de[1],yn.z-Rt*fe+Kt*ye+de[2]);let ue=Q.nrm[_t*3]/127,Me=Q.nrm[_t*3+1]/127,Re=Q.nrm[_t*3+2]/127;j.nrm.push(Kt*ue+Rt*Re,Me,-Rt*ue+Kt*Re),j.kind.push(Et.MARBLE),j.uv.push(0,0)}for(let _t=0;_t<Q.nI;_t++)j.idx.push(Q.idx[_t]);H=F(j)}).catch(U=>console.error(U));let I=or(t,"res/tree/leaves.webp"),V=HM(),dt=t({vert:c(`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec3 position, normal;
		attribute vec2 uv;
		attribute float shade, flower;
		varying vec3 v_pos, v_nrm, v_eye;
		varying vec2 v_uv;
		varying float v_shade, v_flower;
		void main() {
			v_pos = position; v_nrm = normal; v_uv = uv; v_shade = shade; v_flower = flower;
			vec3 t = view[3].xyz;
			v_eye = -vec3(dot(view[0].xyz, t), dot(view[1].xyz, t), dot(view[2].xyz, t));
			v_eye.y *= yScale;
			vec3 p = position; p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`),frag:`
		precision highp float;
		uniform float night, time;
		uniform sampler2D tex;
		varying vec3 v_pos, v_nrm, v_eye;
		varying vec2 v_uv;
		varying float v_shade, v_flower;
		${Kr}
		vec2 hash22(vec2 p) {
			vec3 a = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
			a += dot(a, a.yzx + 33.33);
			return fract((a.xx + a.yz) * a.zy);
		}
		// a clump of bougainvillea: papery bracts in threes, magenta or white
		vec4 blossom(vec2 uv, float seed) {
			vec2 c = uv - 0.5;
			float edge = length(c) * 2.0;
			if (edge > 0.95) return vec4(0.0);
			vec2 q = uv * 4.0 + seed * 13.0;
			vec2 cell = floor(q), fq = fract(q);
			float best = 0.0; float tone = 0.0; vec2 bl = vec2(0.0);
			for (int j = -1; j <= 1; j++) for (int i = -1; i <= 1; i++) {
				vec2 o = vec2(float(i), float(j));
				vec2 h = hash22(cell + o);
				if (h.x > 0.96) continue;
				vec2 ctr = o + 0.2 + 0.6 * hash22(cell + o + 7.0);
				vec2 d = fq - ctr;
				float rot = h.y * 6.283;
				// three bracts round the centre
				for (int k = 0; k < 3; k++) {
					float a = rot + float(k) * 2.094;
					vec2 bc = vec2(cos(a), sin(a)) * 0.2;
					vec2 dd = d - bc;
					float m = smoothstep(0.26, 0.2, length(dd * vec2(1.0, 1.25)));
					if (m > best) { best = m; tone = h.y; bl = dd; }
				}
			}
			best *= smoothstep(0.95, 0.6, edge + 0.25 * (hash22(cell).x - 0.5));
			return vec4(bl, tone, best);
		}
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			vec3 N = normalize(v_nrm);
			if (dot(N, V) < 0.0) N = -N;
			if (v_flower > 0.5) {
				vec4 b = blossom(v_uv, v_shade);
				if (b.w < 0.5) discard;
				bool white = v_shade > 0.9 || b.z > 0.93;
				vec3 pink = mix(vec3(0.62, 0.02, 0.24), vec3(0.78, 0.08, 0.36), b.z);
				vec3 base = white ? vec3(0.84, 0.80, 0.80) : pink;
				// the bract's veins and its paler heart
				base *= 0.8 + 0.3 * smoothstep(0.25, 0.0, length(b.xy));
				vec3 spec; float sv;
				vec3 light = studioLight(v_pos, N, V, 0.3, spec, sv);
				float through = max(dot(-N, STUDIO_SUN), 0.0) * sv;
				vec3 col = base * light + base * vec3(1.0, 0.75, 0.8) * through * 2.6 * (1.0 - night) + spec * 0.15;
				col = studioAir(col, v_pos, v_eye);
				gl_FragColor = vec4(sqrt(max(col, 0.0)), 1.0);
				return;
			}
			vec4 t = texture2D(tex, v_uv);
			if (t.a < 0.5) discard;
			vec3 base = t.rgb * t.rgb * vec3(0.8, 0.95, 0.75) * v_shade;
			vec3 spec; float sv;
			vec3 light = studioLight(v_pos, N, V, 0.4, spec, sv);
			// light through the leaf
			float through = max(dot(-N, STUDIO_SUN), 0.0) * sv;
			vec3 col = base * light + base * vec3(0.9, 1.0, 0.5) * through * 2.2 * (1.0 - night) + spec * 0.3;
			col = studioAir(col, v_pos, v_eye);
			gl_FragColor = vec4(sqrt(max(col, 0.0)), 1.0);
		}`,attributes:{position:V.pos,normal:V.nrm,uv:V.uv,shade:V.shade,flower:V.flower},elements:new Uint32Array(V.idx),uniforms:{tex:I.tex},cull:{enable:!1}}),$t=or(t,"res/studio/plants.webp"),kt=or(t,"res/studio/vleaves.webp"),mt=WM(),st=U=>t({vert:c(`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec3 position, normal, info;
		attribute vec2 uv;
		varying vec3 v_pos, v_nrm, v_eye, v_info;
		varying vec2 v_uv;
		void main() {
			v_pos = position; v_nrm = normal; v_uv = uv; v_info = info;
			vec3 t = view[3].xyz;
			v_eye = -vec3(dot(view[0].xyz, t), dot(view[1].xyz, t), dot(view[2].xyz, t));
			v_eye.y *= yScale;
			vec3 p = position; p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`),frag:`
		precision highp float;
		uniform float night, time;
		uniform sampler2D tex, tex2;
		varying vec3 v_pos, v_nrm, v_eye, v_info;
		varying vec2 v_uv;
		${Kr}
		void main() {
			vec4 tx = v_info.y > 5.5 ? texture2D(tex2, v_uv) : texture2D(tex, v_uv);
			if (tx.a < 0.5) discard;
			vec3 V = normalize(v_eye - v_pos);
			vec3 N = normalize(v_nrm);
			if (dot(N, V) < 0.0) N = -N;
			float type = v_info.y;
			vec3 base = tx.rgb * tx.rgb;
			float gloss = 0.3, through = 1.8;
			vec3 trC = vec3(0.9, 1.0, 0.5);
			if (type < 0.5) {
				// ivy: the photographed leaves deepened to an old ivy's dark green
				float l = dot(base, vec3(0.3, 0.59, 0.11));
				base = mix(vec3(l), base, 1.3) * vec3(0.42, 0.60, 0.36);
				gloss = 0.55; through = 1.2;
			} else if (type < 1.5) {
				base *= vec3(0.80, 0.92, 0.62);
				// darker down in the grass, near the ground
				base *= mix(0.35, 1.0, smoothstep(0.0, 0.7, v_info.z));
			} else if (type < 2.5) {
				gloss = 0.15; through = 0.8;
			} else if (type < 3.5) {
				base *= vec3(0.62, 0.78, 0.5);
			} else if (type < 4.5) {
				// rose petals: dark red velvet, the sun glowing red through them
				gloss = 0.22; through = 1.6; trC = vec3(1.0, 0.35, 0.35);
			} else if (type > 5.5) {
				// the vine's leaves, as photographed, a little deepened for the shade of the room
				base *= vec3(0.78, 0.86, 0.68);
				gloss = 0.4; through = 1.3;
			} else {
				// the rose's own leaves: a deeper, bluer green than the ivy
				base *= vec3(0.55, 0.72, 0.5);
				gloss = 0.45; through = 1.0;
			}
			base *= v_info.x;
			vec3 spec; float sv;
			vec3 light = studioLight(v_pos, N, V, gloss, spec, sv);
			float tr = max(dot(-N, STUDIO_SUN), 0.0) * sv;
			vec3 col = base * light + base * trC * tr * through * (1.0 - night) + spec * 0.2 * gloss;
			col = studioAir(col, v_pos, v_eye);
			gl_FragColor = vec4(sqrt(max(col, 0.0)), 1.0);
		}`,attributes:{position:U.pos,normal:U.nrm,uv:U.uv,info:U.info},elements:new Uint32Array(U.idx),uniforms:{tex:$t.tex,tex2:kt.tex},cull:{enable:!1}}),Wt=st(mt.walls),we=LM(),_e=t({vert:c(`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec3 position, normal;
		attribute vec2 uv;
		varying vec3 v_pos, v_nrm, v_eye;
		varying vec2 v_uv;
		void main() {
			v_pos = position; v_nrm = normal; v_uv = uv;
			vec3 t = view[3].xyz;
			v_eye = -vec3(dot(view[0].xyz, t), dot(view[1].xyz, t), dot(view[2].xyz, t));
			v_eye.y *= yScale;
			vec3 p = position; p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`),frag:`
		precision highp float;
		uniform float night, time;
		varying vec3 v_pos, v_nrm, v_eye;
		varying vec2 v_uv;
		${Kr}
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			vec3 N = normalize(v_nrm);
			float facing = dot(N, V);
			if (facing < 0.0) N = -N;
			float cosV = abs(facing);
			// the net: fine threads, and the threads' own unevenness in streaks down the fall
			vec2 w = v_uv * vec2(260.0, 900.0);
			float threads = max(smoothstep(0.78, 0.98, abs(sin(w.x))), smoothstep(0.78, 0.98, abs(sin(w.y))));
			float streak = 0.5 + 0.5 * sin(v_uv.x * 41.0 + sin(v_uv.y * 9.0 + v_uv.x * 3.0) * 2.0);
			float sheer = 0.3 + 0.14 * streak + 0.08 * threads;
			// edge on, the net closes up into solid colour
			float a = clamp(sheer + (1.0 - sheer) * pow(1.0 - cosV, 2.6) * 0.9, 0.0, 0.9);
			vec3 base = vec3(0.14, 0.006, 0.03) * (0.8 + 0.4 * streak);
			vec3 spec; float sv;
			vec3 light = studioLight(v_pos, N, V, 0.35, spec, sv);
			float tr = max(dot(-N, STUDIO_SUN), 0.0) * sv * (1.0 - night * 0.6);
			float sheen = pow(1.0 - cosV, 3.0);
			// (a little of the room's own dim light caught in the net, so it reads even in the shade)
			vec3 col = base * (light + vec3(0.35, 0.3, 0.28)) * (1.0 + 1.6 * sheen) + vec3(0.3, 0.012, 0.025) * tr * 0.45 + spec * 0.03;
			col = studioAir(col, v_pos, v_eye);
			gl_FragColor = vec4(sqrt(max(col, 0.0)) * a, a);
		}`,attributes:{position:we.pos,normal:we.nrm,uv:we.uv},elements:new Uint32Array(we.idx),cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",srcAlpha:"one",dstRGB:"one minus src alpha",dstAlpha:"one minus src alpha"}}}),Ve=or(t,"res/studio/rose_col.webp"),Ie=null;fetch("res/studio/rose.bin").then(U=>{if(!U.ok)throw new Error("Could not load res/studio/rose.bin");return U.arrayBuffer()}).then(U=>{let Q=new DataView(U).getUint32(4,!0),j=new Float32Array(U,8,Q*8),Tt=new Float32Array(mt.roses.length*Q*3),Kt=new Float32Array(Tt.length),Rt=new Float32Array(mt.roses.length*Q*2),_t=0;for(let fe of mt.roses){let Ft=fe.f,ye=Math.abs(Ft[1])>.9?[1,0,0]:[0,1,0],ue=[ye[1]*Ft[2]-ye[2]*Ft[1],ye[2]*Ft[0]-ye[0]*Ft[2],ye[0]*Ft[1]-ye[1]*Ft[0]],Me=Math.hypot(...ue),Re=ue.map(ko=>ko/Me),pe=[Ft[1]*Re[2]-Ft[2]*Re[1],Ft[2]*Re[0]-Ft[0]*Re[2],Ft[0]*Re[1]-Ft[1]*Re[0]],Ue=Math.cos(fe.spin),Ye=Math.sin(fe.spin),se=Re.map((ko,Io)=>ko*Ue+pe[Io]*Ye),eo=pe.map((ko,Io)=>ko*Ue-Re[Io]*Ye);for(let ko=0;ko<Q;ko++){let Io=j[ko*8],Oe=j[ko*8+1],qe=j[ko*8+2],oo=j[ko*8+3],B=j[ko*8+4],yt=j[ko*8+5];for(let Yt=0;Yt<3;Yt++)Tt[_t*3+Yt]=fe.at[Yt]+de[Yt]+(se[Yt]*Io+eo[Yt]*Oe+Ft[Yt]*qe)*fe.size,Kt[_t*3+Yt]=se[Yt]*oo+eo[Yt]*B+Ft[Yt]*yt;Rt[_t*2]=j[ko*8+6],Rt[_t*2+1]=j[ko*8+7],_t++}}Ie=t({vert:c(`
				precision highp float;
				uniform mat4 proj, view;
				uniform float yScale;
				attribute vec3 position, normal;
				attribute vec2 uv;
				varying vec3 v_pos, v_nrm, v_eye;
				varying vec2 v_uv;
				void main() {
					v_pos = position; v_nrm = normal; v_uv = uv;
					vec3 t = view[3].xyz;
					v_eye = -vec3(dot(view[0].xyz, t), dot(view[1].xyz, t), dot(view[2].xyz, t));
					v_eye.y *= yScale;
					vec3 p = position; p.y *= yScale;
					gl_Position = proj * view * vec4(p, 1.0);
				}`),frag:`
				precision highp float;
				uniform float night, time;
				uniform sampler2D tex;
				varying vec3 v_pos, v_nrm, v_eye;
				varying vec2 v_uv;
				${Kr}
				void main() {
					vec3 V = normalize(v_eye - v_pos);
					vec3 N = normalize(v_nrm);
					if (dot(N, V) < 0.0) N = -N;
					vec3 base = texture2D(tex, v_uv).rgb; base *= base;
					vec3 spec; float sv;
					vec3 light = studioLight(v_pos, N, V, 0.25, spec, sv);
					// velvet: a soft sheen at the petals' edges, and the sun glowing red through them
					float rim = pow(1.0 - max(dot(N, V), 0.0), 2.0);
					float tr = max(dot(-N, STUDIO_SUN), 0.0) * sv * (1.0 - night);
					vec3 col = base * light * (1.0 + 0.35 * rim) + base * vec3(1.0, 0.3, 0.3) * tr * 1.5 + spec * 0.05;
					col = studioAir(col, v_pos, v_eye);
					gl_FragColor = vec4(sqrt(max(col, 0.0)), 1.0);
				}`,attributes:{position:Tt,normal:Kt,uv:Rt},count:_t,uniforms:{tex:Ve.tex},cull:{enable:!1}})}).catch(U=>console.error(U));let xo=st(mt.ground);typeof location!="undefined"&&/tourdebug/.test(location.search)&&console.log("studio greenery: ivy verts",mt.walls.pos.length/3,"ground verts",mt.ground.pos.length/3);let ro=(()=>{let U={corner:[],start:[],par:[],misc:[],idx:[]};return og.forEach((Q,j)=>{for(let Tt of[[-1,-1],[1,-1],[1,1],[-1,1]])U.corner.push(Tt[0],Tt[1]),U.start.push(Q.start[0]+de[0],Q.start[1],Q.start[2]+de[2]),U.par.push(Q.period,Q.offset,Q.drift[0],Q.drift[1]),U.misc.push(Q.speed,Q.seed,Q.white);U.idx.push(j*4,j*4+1,j*4+2,j*4,j*4+2,j*4+3)}),U})(),pt=t({vert:c(`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec2 corner;
		attribute vec3 start;
		attribute vec4 par;
		attribute vec3 misc;
		varying vec3 v_pos, v_nrm, v_eye;
		varying vec2 v_uv;
		varying float v_white, v_fade;
		${ns}
		mat3 rotAxis(vec3 a, float t) {
			float c = cos(t), s = sin(t), ic = 1.0 - c;
			return mat3(c + a.x * a.x * ic, a.y * a.x * ic + a.z * s, a.z * a.x * ic - a.y * s,
			            a.x * a.y * ic - a.z * s, c + a.y * a.y * ic, a.z * a.y * ic + a.x * s,
			            a.x * a.z * ic + a.y * s, a.y * a.z * ic - a.x * s, c + a.z * a.z * ic);
		}
		void main() {
			float P = par.x, speed = misc.x, seed = misc.y;
			float tt = stime + par.y;
			float cyc = floor(tt / P);
			float ph = tt - cyc * P;
			float m = 0.6 + 0.4 * sin(cyc * 1.7 + seed * 5.0);
			vec2 land = start.xz + par.zw * m;
			vec2 lq = land - vec2(${lt(de[0])}, ${lt(de[2])});
			bool inPool = lq.x > ${lt(rs[0])} && lq.x < ${lt(rs[2])} && lq.y > ${lt(rs[1])} && lq.y < ${lt(rs[3])};
			float rest = inPool ? 0.017 : 0.006;
			float Tf = (start.y - rest) / speed;
			float s = clamp(ph / Tf, 0.0, 1.0);
			float size = 0.03 + 0.012 * seed;
			vec3 local = vec3(corner.x, 0.0, corner.y) * size;
			vec3 n = vec3(0.0, 1.0, 0.0);
			vec3 pos;
			if (ph < Tf) {
				// falling: a lazy sway from side to side, tumbling as it goes
				vec2 sway = vec2(sin(tt * 1.3 + seed * 7.0), cos(tt * 1.05 + seed * 3.0)) * 0.35 * sin(s * 3.14159);
				pos = vec3(start.x + (land.x - start.x) * s + sway.x, start.y - (start.y - rest) * s, start.z + (land.y - start.z) * s + sway.y);
				vec3 ax = normalize(vec3(sin(seed * 11.0), 0.6, cos(seed * 7.0)));
				mat3 R = rotAxis(ax, tt * (2.0 + seed * 2.5));
				// it flutters flatter as it slows near the ground
				local = R * local; n = R * n;
			} else {
				pos = vec3(land.x, rest, land.y);
				float a = seed * 6.283;
				mat3 Y = rotAxis(vec3(0.0, 1.0, 0.0), a);
				local = Y * local;
				if (inPool) {
					// floating: carried slowly, riding the swell and the rings
					float age = ph - Tf;
					pos.xz += vec2(sin(age * 0.12 + seed * 9.0), cos(age * 0.1 + seed * 5.0)) * 0.06 * min(age * 0.2, 1.0);
					float h0 = poolHeight(pos.xz);
					vec2 grad = vec2(poolHeight(pos.xz + vec2(0.05, 0.0)) - h0, poolHeight(pos.xz + vec2(0.0, 0.05)) - h0) / 0.05;
					pos.y += h0 * 1.4;
					local.y += dot(local.xz, grad) * 1.4;
					n = normalize(vec3(-grad.x, 1.0, -grad.y));
				}
			}
			// grow out of the flower at the start, fade away at the end
			v_fade = smoothstep(0.0, 1.2, ph) * (1.0 - smoothstep(P - 3.0, P - 0.2, ph));
			vec3 q = pos + local * (0.4 + 0.6 * v_fade);
			v_pos = q; v_nrm = n; v_uv = corner * 0.5 + 0.5; v_white = misc.z;
			vec3 t = view[3].xyz;
			v_eye = -vec3(dot(view[0].xyz, t), dot(view[1].xyz, t), dot(view[2].xyz, t));
			v_eye.y *= yScale;
			vec3 p = q; p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`),frag:`
		precision highp float;
		uniform float night, time;
		varying vec3 v_pos, v_nrm, v_eye;
		varying vec2 v_uv;
		varying float v_white, v_fade;
		${Kr}
		void main() {
			vec2 u = v_uv * 2.0 - 1.0;
			float heart = length(vec2(u.x * 1.1, u.y + 0.15 * abs(u.x) * 2.0 - 0.1));
			if (heart > 0.85 + 0.1 * sin(atan(u.y, u.x) * 3.0)) discard;
			if (v_fade < 0.02) discard;
			vec3 V = normalize(v_eye - v_pos);
			vec3 N = normalize(v_nrm);
			if (dot(N, V) < 0.0) N = -N;
			vec3 base = mix(vec3(0.62, 0.03, 0.22), vec3(0.86, 0.80, 0.80), v_white);
			base *= 0.85 + 0.25 * smoothstep(0.9, 0.0, heart);
			vec3 spec; float sv;
			vec3 light = studioLight(v_pos, N, V, 0.3, spec, sv);
			float through = abs(dot(N, STUDIO_SUN)) * sv;
			vec3 col = base * light + base * vec3(1.0, 0.75, 0.8) * through * 1.6 * (1.0 - night);
			col = studioAir(col, v_pos, v_eye);
			gl_FragColor = vec4(sqrt(max(col, 0.0)), 1.0);
		}`,attributes:{corner:ro.corner,start:ro.start,par:ro.par,misc:ro.misc},elements:new Uint32Array(ro.idx),uniforms:d,cull:{enable:!1}}),X={sim:IM(),ready:!1};ql=X.sim,typeof location!="undefined"&&/tourdebug/.test(location.search)&&(window.__koi=X.sim);let gt=Object.assign({},d);Yr.forEach((U,Q)=>{gt["koiA["+Q+"]"]=()=>{let j=X.sim.fish[Q];return[j.x+de[0],j.y,j.z+de[2],j.th]},gt["koiB["+Q+"]"]=()=>{let j=X.sim.fish[Q];return[j.kappa,j.ph,j.amp,j.pitch]}});let Nt=(()=>{let Q=Math.round(96*(ut.z1-ut.z0)/(ut.x1-ut.x0)),j=new Uint8Array(96*Q*4),Tt=[-vr[0]/vr[1]*-Rl,-vr[2]/vr[1]*-Rl],Kt=96/(ut.x1-ut.x0),Rt=Q/(ut.z1-ut.z0);for(let _t=0;_t<Q;_t++)for(let fe=0;fe<96;fe++){let Ft=ut.x0+(fe+.5)/Kt,ye=ut.z0+(_t+.5)/Rt,ue=0;for(let Me of ud){let Re=Math.hypot(Ft-(Me[0]+Tt[0]),ye-(Me[1]+Tt[1]));ue=Math.max(ue,1-Math.min(1,Math.max(0,(Re-Me[2]*.82)/(Me[2]*.35))))}j[(_t*96+fe)*4]=Math.round(ue*255),j[(_t*96+fe)*4+3]=255}return t.texture({width:96,height:Q,data:j,min:"linear",mag:"linear"})})(),ce=`
		uniform vec4 koiA[${Yr.length}], koiB[${Yr.length}];
		// where we see a point under the water: at the surface's own depth
		vec4 underPos(vec3 q, mat4 proj, mat4 view, float order) {
			vec3 tr = view[3].xyz;
			vec3 eye = -vec3(dot(view[0].xyz, tr), dot(view[1].xyz, tr), dot(view[2].xyz, tr));
			vec4 cq = proj * view * vec4(q, 1.0);
			vec3 sp = eye + (q - eye) * (eye.y / max(eye.y - q.y, 1e-4));
			vec4 cs = proj * view * vec4(sp, 1.0);
			float zs = cs.z / cs.w;
			// a whisker in front of the water, keeping near-before-far among
			// themselves
			float z = zs - 3e-5 + clamp((cq.z / cq.w - zs) * 1e-3, 0.0, 2e-5) * order;
			return vec4(cq.xy, z * cq.w, cq.w);
		}
		vec3 eyeOf(mat4 view) {
			vec3 tr = view[3].xyz;
			return -vec3(dot(view[0].xyz, tr), dot(view[1].xyz, tr), dot(view[2].xyz, tr));
		}
	`,xe=`
		uniform vec4 koiA[${Yr.length}], koiB[${Yr.length}];
		uniform sampler2D padShadow;
		const vec3 W_SUN = vec3(${lt(vr[0])}, ${lt(vr[1])}, ${lt(vr[2])});
		// light focused by the moving surface onto what's beneath it
		float caustic(vec2 p, float t) {
			vec2 q = p * 7.0;
			float c = 0.0;
			for (int i = 0; i < 3; i++) {
				q += vec2(sin(q.y * 0.9 + t * 0.9), cos(q.x * 0.8 - t * 0.7)) * 0.55;
				c += abs(sin(q.x) + sin(q.y));
			}
			return pow(max(1.0 - c / 3.6, 0.0), 2.5) * 4.0;
		}
		// how much a pad shades a point at height y below it
		float padShade(vec3 pw) {
			vec2 lp = pw.xz - vec2(${lt(de[0])}, ${lt(de[2])});
			// (the picture is for the bed; nearer the surface the shadow sits nearer the pad)
			vec2 back = W_SUN.xz / W_SUN.y * (pw.y - ${lt(Rl)});
			vec2 uv = (lp - back - vec2(${lt(ut.x0)}, ${lt(ut.z0)})) / vec2(${lt(ut.x1-ut.x0)}, ${lt(ut.z1-ut.z0)});
			return texture2D(padShadow, uv).r;
		}
		// the sun's share of the light under the water at pw
		vec3 underSun(vec3 pw, vec3 N, float sv, out vec3 sunPart) {
			vec3 sunC = mix(vec3(1.0, 0.84, 0.62) * 4.6, vec3(0.50, 0.64, 1.0) * 1.6, night);
			sunPart = sunC * sv * max(dot(N, W_SUN), 0.0);
			float ca = caustic(pw.xz - W_SUN.xz / W_SUN.y * pw.y, stime);
			return sunPart * (1.0 - 0.85 * padShade(pw)) * (0.35 + 1.25 * ca);
		}
		// the water's surface over a point under it, as the eye sees it: the
		// room's reflection (bent by the waves), the sun's glint, and the rest
		// let through from below
		uniform sampler2D reflTex;
		uniform vec2 reflSize;
		uniform float reflOn;
		uniform mat4 view;
		vec3 throughSurface(vec3 under, vec3 pw, vec3 eye) {
			vec3 S = eye + (pw - eye) * (eye.y / max(eye.y - pw.y, 1e-4));
			float e = ${lt($l)};
			vec2 grad = vec2(poolHeight(S.xz + vec2(e, 0.0)) - poolHeight(S.xz - vec2(e, 0.0)), poolHeight(S.xz + vec2(0.0, e)) - poolHeight(S.xz - vec2(0.0, e))) / (2.0 * e);
			vec3 Nw = normalize(vec3(-grad.x, 1.0, -grad.y));
			vec3 V = normalize(eye - S);
			float cosV = clamp(dot(Nw, V), 0.0, 1.0);
			float R = mix(0.06, 1.0, pow(1.0 - cosV, 5.0));
			vec3 Rw = reflect(-V, Nw);
			vec3 rc;
			if (reflOn > 0.5) {
				vec3 dN = Nw - vec3(0.0, 1.0, 0.0);
				vec3 rgt = vec3(view[0].x, view[1].x, view[2].x), upv = vec3(view[0].y, view[1].y, view[2].y);
				float dist = length(eye - S);
				vec2 off = vec2(dot(dN, rgt), dot(dN, upv)) * 0.3 / (1.0 + dist * 0.2);
				rc = texture2D(reflTex, clamp(gl_FragCoord.xy / reflSize + off, vec2(0.001), vec2(0.999))).rgb;
				rc *= rc;
			} else {
				rc = studioSky(Rw) * 0.35;
			}
			float glint = pow(max(dot(Rw, STUDIO_SUN), 0.0), 900.0) * studioSun(S + vec3(0.0, 0.02, 0.0));
			vec3 glintC = mix(vec3(1.0, 0.92, 0.78) * 9.0, vec3(0.75, 0.85, 1.0) * 3.0, night);
			// a passing ring bends the light from below into bright and dark bands
			float ring = clamp(dot(grad, normalize(V.xz + vec2(1e-4))) * 12.0, -1.0, 1.0);
			float stir = clamp(length(grad) * 8.0, 0.0, 1.0);
			under *= 1.0 + 0.55 * ring * stir;
			return under * (1.0 - R) + rc * R + glintC * glint;
		}
		// what the water does to light that comes back up through it
		float showThrough(vec3 V) {
			float cosV = clamp(V.y, 0.0, 1.0);
			float Fr = 0.02 + 0.98 * pow(1.0 - cosV, 5.0);
			return 1.0 - mix(0.05, 0.93, Fr);
		}
	`,ne=(()=>{let U=[],Q=[],j=[],Tt=[],Kt=(Me,Re,pe,Ue,Ye)=>(U.push(Me+de[0],Re,pe+de[2]),Q.push(...Ue),j.push(Ye),U.length/3-1),Rt=(Me,Re,pe,Ue,Ye,se,eo)=>{let ko=U.length/3;for(let Io=0;Io<=Ue;Io++)for(let Oe=0;Oe<=Ye;Oe++)Kt(Me[0]+Re[0]*Io/Ue+pe[0]*Oe/Ye,Me[1]+Re[1]*Io/Ue+pe[1]*Oe/Ye,Me[2]+Re[2]*Io/Ue+pe[2]*Oe/Ye,se,eo);for(let Io=0;Io<Ue;Io++)for(let Oe=0;Oe<Ye;Oe++){let qe=ko+Io*(Ye+1)+Oe;Tt.push(qe,qe+1,qe+Ye+2,qe,qe+Ye+2,qe+Ye+1)}},{x0:_t,x1:fe,z0:Ft,z1:ye}=ut,ue=Rl;return Rt([_t,ue,Ft],[fe-_t,0,0],[0,0,ye-Ft],8,22,[0,1,0],0),Rt([_t,0,Ft],[0,0,ye-Ft],[0,ue,0],22,2,[1,0,0],1),Rt([fe,0,Ft],[0,0,ye-Ft],[0,ue,0],22,2,[-1,0,0],1),Rt([_t,0,Ft],[fe-_t,0,0],[0,ue,0],8,2,[0,0,1],1),Rt([_t,0,ye],[fe-_t,0,0],[0,ue,0],8,2,[0,0,-1],1),{pos:U,nrm:Q,kd:j,idx:Tt}})(),Bt=or(t,"res/pond/gravel.jpg",{wrap:"repeat"}),rt=Object.assign({padShadow:Nt,gravel:()=>Bt.tex,reflTex:()=>u,reflSize:()=>v,reflOn:()=>l},gt),Xt=t({vert:c(`
		precision highp float;
		uniform mat4 proj, view;
		attribute vec3 position, normal;
		attribute float kd;
		varying vec3 v_pos, v_nrm, v_eye;
		varying float v_kd;
		${ns}
		${ce}
		void main() {
			vec3 q = position;
			float h0 = poolHeight(q.xz);
			vec2 grad = vec2(poolHeight(q.xz + vec2(0.03, 0.0)) - h0, poolHeight(q.xz + vec2(0.0, 0.03)) - h0) / 0.03;
			q.xz -= grad * (-q.y) * 1.2;
			v_pos = q; v_nrm = normal; v_kd = kd; v_eye = eyeOf(view);
			gl_Position = underPos(q, proj, view, 0.0);
		}`),frag:`
		precision highp float;
		uniform float night, time;
		uniform sampler2D gravel;
		varying vec3 v_pos, v_nrm, v_eye;
		varying float v_kd;
		${ns}
		${Kr}
		${xe}
		float klen(int i) {
			${Yr.map((U,Q)=>`if (i == ${Q}) return ${lt(U.len)};`).join(" ")}
			return 0.45;
		}
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			vec3 N = normalize(v_nrm);
			vec3 base;
			if (v_kd < 0.5) {
				base = texture2D(gravel, v_pos.xz * 1.9).rgb;
				base = base * base * vec3(1.25, 1.18, 1.0);
			} else {
				// the marble going down into the water, greening towards the bed
				vec2 wp = abs(N.x) > 0.5 ? v_pos.zy : v_pos.xy;
				base = vec3(0.70, 0.68, 0.62) * (0.92 + 0.12 * fract(sin(dot(floor(wp * 40.0), vec2(12.9, 78.2))) * 43758.5));
				base = mix(base, vec3(0.10, 0.13, 0.07), smoothstep(-0.05, ${lt(Rl)}, v_pos.y) * 0.75);
			}
			vec3 spec; float sv;
			vec3 light = studioLight(vec3(v_pos.x - W_SUN.x / W_SUN.y * v_pos.y, 0.02, v_pos.z - W_SUN.z / W_SUN.y * v_pos.y), N, V, 0.1, spec, sv);
			vec3 sunPart;
			vec3 lit = underSun(v_pos, N, sv, sunPart);
			// the koi's shadows, softer the higher they swim above the bed
			float sh = 0.0;
			for (int i = 0; i < ${Yr.length}; i++) {
				vec4 A = koiA[i];
				float len = klen(i);
				vec2 F = vec2(cos(A.w), sin(A.w));
				vec2 c = A.xz - F * len * 0.42 - W_SUN.xz / W_SUN.y * (A.y - v_pos.y);
				vec2 d = v_pos.xz - c;
				float h = A.y - v_pos.y;
				float ell = pow(dot(d, F) / (len * 0.46), 2.0) + pow(dot(d, vec2(-F.y, F.x)) / (len * 0.12 + h * 0.08), 2.0);
				sh = max(sh, smoothstep(1.0, 0.25, ell) * (0.75 - h * 0.6));
			}
			lit *= 1.0 - sh;
			vec3 col = base * ((light - sunPart) * 0.9 + lit);
			// down through the water and back up again
			float path = -v_pos.y * (1.0 + 1.0 / max(V.y, 0.25));
			vec3 tr = exp(-path * vec3(0.75, 0.38, 0.48));
			col = col * tr + vec3(0.012, 0.020, 0.015) * (1.0 - tr) * mix(1.0, 0.12, night);
			col = throughSurface(col, v_pos, v_eye);
			col = studioAir(col, v_pos, v_eye);
			gl_FragColor = vec4(sqrt(max(col, 0.0)), 1.0);
		}`,attributes:{position:ne.pos,normal:ne.nrm,kd:ne.kd},elements:new Uint16Array(ne.idx),uniforms:rt,cull:{enable:!1},depth:{enable:!0,mask:!1,func:"less"},blend:o}),Te=or(t,"res/koi.webp"),Jt=null,It=null;fetch("res/koi.bin").then(U=>{if(!U.ok)throw new Error("Could not load res/koi.bin");return U.arrayBuffer()}).then(U=>{let Q=new DataView(U),j=Q.getUint32(4,!0),Tt=Q.getUint32(8,!0),Kt=Q.getFloat32(12,!0),Rt=16,_t=new Uint16Array(U,Rt,j);Rt+=j*2;let fe=new Int16Array(U,Rt,j*2);Rt+=j*4;let Ft=new Uint16Array(U,Rt,j*2);Rt+=j*4;let ye=new Uint16Array(U,Rt,Tt);Rt+=Tt*2;let ue=new Int8Array(U,Rt,j*3);Rt+=j*3;let Me=new Uint8Array(U,Rt,j*2),Re=Yr.length,pe=new Float32Array(j*3*Re),Ue=new Float32Array(j*3*Re),Ye=new Float32Array(j*2*Re),se=new Float32Array(j*2*Re),eo=new Float32Array(j*4*Re);Yr.forEach((Oe,qe)=>{for(let oo=0;oo<j;oo++){let B=qe*j+oo;pe[B*3]=_t[oo]/65535*1.2,pe[B*3+1]=fe[oo*2]/32767*Kt,pe[B*3+2]=fe[oo*2+1]/32767*Kt,Ue[B*3]=ue[oo*3]/127,Ue[B*3+1]=ue[oo*3+1]/127,Ue[B*3+2]=ue[oo*3+2]/127,Ye[B*2]=Ft[oo*2]/65535,Ye[B*2+1]=Ft[oo*2+1]/65535,se[B*2]=Me[oo*2]/255,se[B*2+1]=Me[oo*2+1]/255,eo[B*4]=Oe.len,eo[B*4+1]=Oe.kind,eo[B*4+2]=qe,eo[B*4+3]=0}});let ko=[],Io=[];for(let Oe=0;Oe<Re;Oe++)for(let qe=0;qe<Tt;qe+=3){let oo=ye[qe],B=ye[qe+1],yt=ye[qe+2];(Math.max(Me[oo*2],Me[B*2],Me[yt*2])>140?Io:ko).push(oo+Oe*j,B+Oe*j,yt+Oe*j)}It={body:t.elements({data:new Uint32Array(ko),type:"uint32"}),fins:t.elements({data:new Uint32Array(Io),type:"uint32"})},Jt=t({vert:c(`
				precision highp float;
				uniform mat4 proj, view;
				attribute vec3 loc, nrm;
				attribute vec2 uv, fin;
				attribute vec4 km;
				varying vec3 v_pos, v_nrm, v_eye;
				varying vec2 v_uv;
				varying float v_kind, v_fin, v_depth, v_seed, v_u;
				${ns}
				${ce}
				void main() {
					float len = km.x;
					int fi = int(km.z + 0.5);
					vec4 A = koiA[0], B = koiB[0];
					for (int i = 1; i < ${Yr.length}; i++) if (i == fi) { A = koiA[i]; B = koiB[i]; }
					float th = A.w, kap = B.x, ph = B.y, beat = B.z, pitch = B.w;
					vec3 f = vec3(cos(th), 0.0, sin(th));
					vec3 nl = vec3(-sin(th), 0.0, cos(th));
					// the spine bends along the arc of the turn, behind the nose
					float u = loc.x;
					float s = max(u, 0.0) * len;
					float ka = abs(kap) < 1e-3 ? 1e-3 : kap;
					vec3 P = A.xyz - f * (sin(ka * s) / ka) + nl * ((1.0 - cos(ka * s)) / ka);
					P.y = A.y - pitch * s;
					vec3 F = normalize(f * cos(ka * s) - nl * sin(ka * s) + vec3(0.0, pitch, 0.0));
					vec3 Sd = normalize(vec3(-F.z, 0.0, F.x));
					vec3 Up = cross(Sd, F);
					// the swimming wave: small at the head, wide at the tail, bigger
					// when it swims faster or turns
					// (beat: how hard the tail is working, 0.1 gliding .. 1.5 hurrying)
					float amp = (0.004 + 0.085 * u * u) * beat;
					float sway = amp * sin(ph - 6.0 * u);
					float dsway = amp * cos(ph - 6.0 * u) * -6.0;
					vec3 L = loc;
					// the fins trail and ripple a little behind the body
					sway += fin.x * 0.012 * sin(ph * 1.3 - 9.0 * u) * (0.6 + 0.4 * u);
					// the pectoral fins paddle slowly, and fold back when it hurries
					float pect = fin.y;
					float fast = smoothstep(0.8, 1.5, beat);
					// gliding, they spread and scull slowly; stroking, they fold back
					L.z += pect * (0.03 + 0.03 * (1.0 - fast)) * sin(stime * (1.6 + 0.3 * km.z) + sign(L.y) * 0.9 + km.z);
					L.y *= 1.0 - 0.35 * pect * fast;
					L.x += pect * 0.05 * fast;
					vec3 q = P + Sd * (L.y + sway) * len + Up * L.z * len - F * (L.x - u) * len;
					vec3 n = normalize(F * (nrm.x - nrm.y * dsway) + Sd * nrm.y + Up * nrm.z);
					// seen through the moving surface, it wavers a little
					float h0 = poolHeight(q.xz);
					vec2 grad = vec2(poolHeight(q.xz + vec2(0.02, 0.0)) - h0, poolHeight(q.xz + vec2(0.0, 0.02)) - h0) / 0.02;
					q.xz -= grad * (-q.y) * 1.3;
					q.y = min(q.y, -0.006);
					v_pos = q; v_nrm = n; v_uv = uv; v_kind = km.y; v_seed = km.z; v_fin = fin.x; v_depth = max(-q.y, 0.0); v_u = u;
					v_eye = eyeOf(view);
					gl_Position = underPos(q, proj, view, 1.0);
				}`),frag:`
				precision highp float;
				uniform float night, time;
				uniform sampler2D koiTex;
				varying vec3 v_pos, v_nrm, v_eye;
				varying vec2 v_uv;
				varying float v_kind, v_fin, v_depth, v_seed, v_u;
				${ns}
				${Kr}
				${xe}
				void main() {
					vec3 V = normalize(v_eye - v_pos);
					vec3 N = normalize(v_nrm);
					if (dot(N, V) < 0.0) N = -N;
					vec3 t = texture2D(koiTex, v_uv).rgb;
					vec3 lin = t * t;
					// the model is a kohaku; the others are recoloured from it,
					// keeping its scales and the fine rays of its fins
					float lum = dot(lin, vec3(0.3, 0.59, 0.11));
					float red = clamp((t.r - t.g) * 2.2, 0.0, 1.0);
					float jit = fract(sin(v_seed * 91.7) * 4375.85);
					vec3 base = lin;
					float gloss = 0.55, metal = 0.35;
					if (v_kind < 0.5) {
						// yamabuki: metallic gold all over
						base = mix(vec3(1.0, 0.46, 0.05), vec3(1.0, 0.56, 0.10), jit) * (0.40 + 0.72 * lum) * mix(1.0, 0.85, red);
						gloss = 0.85; metal = 1.0;
					} else if (v_kind > 1.5) {
						// orange all over, the old patches a deeper red
						base = mix(vec3(0.98, 0.40, 0.05) * (0.45 + 0.7 * lum), vec3(0.82, 0.12, 0.03) * (0.5 + 0.6 * lum), red);
						gloss = 0.7; metal = 0.6;
					} else {
						base = mix(lin, lin * vec3(1.0, 0.92 + 0.1 * jit, 0.9), 0.5);
					}
					// the dark eyes stay dark
					base = mix(base, lin, smoothstep(0.08, 0.02, lum));
					float a = mix(1.0, 0.68, v_fin);
					vec3 spec; float sv;
					vec3 light = studioLight(vec3(v_pos.x - W_SUN.x / W_SUN.y * v_pos.y, 0.02, v_pos.z - W_SUN.z / W_SUN.y * v_pos.y), N, V, gloss, spec, sv);
					vec3 sunPart;
					vec3 lit = underSun(v_pos, N, sv, sunPart);
					float att = exp(-v_depth * 0.8);
					// sunlight through the thin fins
					float through = v_fin * max(dot(-N, W_SUN), 0.0) * sv;
					vec3 col = base * (((light - sunPart) + lit) * att + through * 0.8 * att * mix(vec3(1.0, 0.85, 0.6), vec3(0.4, 0.5, 0.8), night));
					// rounded: lit from above through the water, the belly in shade,
					// a sheen of the bright surface along the flanks
					col *= mix(0.42, 1.2, smoothstep(-0.7, 0.85, N.y));
					float rim = pow(1.0 - max(dot(N, V), 0.0), 3.0) * smoothstep(-0.2, 0.6, N.y);
					col += mix(base, vec3(1.0), 0.4) * rim * 0.35 * mix(1.0, 0.15, night) * att;
					col += spec * (0.15 + 0.85 * metal) * att * (1.0 - 0.85 * padShade(v_pos)) * (1.0 - v_fin * 0.7) * mix(vec3(1.0), base * 2.0, metal);
					// the water takes the colour away with depth
					vec3 tr = exp(-v_depth * vec3(1.9, 1.15, 1.3));
					col = col * tr + vec3(0.010, 0.016, 0.012) * (1.0 - tr) * mix(1.0, 0.1, night);
					col = throughSurface(col, v_pos, v_eye);
					col = studioAir(col, v_pos, v_eye);
					a *= mix(1.0, exp(-v_depth * 0.5), 0.5);
					gl_FragColor = vec4(sqrt(max(col, 0.0)), a);
				}`,attributes:{loc:pe,nrm:Ue,uv:Ye,fin:se,km:eo},elements:t.prop("els"),uniforms:Object.assign({koiTex:()=>Te.tex,padShadow:Nt,reflTex:()=>u,reflSize:()=>v,reflOn:()=>l},gt),cull:{enable:!1},colorMask:t.prop("color"),depth:{enable:!0,mask:t.prop("write"),func:t.prop("func")},blend:o}),X.ready=!0}).catch(U=>console.error(U));let He=()=>{Jt&&(Jt({els:It.body,color:[!1,!1,!1,!1],write:!0,func:"less"}),Jt({els:It.body,color:[!0,!0,!0,!0],write:!1,func:"lequal"}),Jt({els:It.fins,color:[!0,!0,!0,!0],write:!1,func:"less"}))},S=(()=>{let U={cp:[],ci:[],idx:[]};for(let Q=0;Q<Cl;Q++){let j=U.cp.length/3,Tt=5,Kt=7;for(let Rt=0;Rt<=Tt;Rt++)for(let _t=0;_t<Kt;_t++){let fe=Rt/Tt*Math.PI,Ft=_t/Kt*Math.PI*2,ye=1+.35*Math.sin(Ft*3+Q*1.7)*Math.sin(fe*2+Q);U.cp.push(Math.sin(fe)*Math.cos(Ft)*ye,Math.cos(fe)*.6,Math.sin(fe)*Math.sin(Ft)*ye*(.8+.4*(Q*.37%1))),U.ci.push(Q)}for(let Rt=0;Rt<Tt;Rt++)for(let _t=0;_t<Kt;_t++){let fe=j+Rt*Kt+_t,Ft=j+Rt*Kt+(_t+1)%Kt,ye=j+(Rt+1)*Kt+_t,ue=j+(Rt+1)*Kt+(_t+1)%Kt;U.idx.push(fe,Ft,ue,fe,ue,ye)}}return U})(),Ge=Object.assign({},d);for(let U=0;U<Cl;U++)Ge["crumbs["+U+"]"]=()=>{let Q=X.sim.crumbs[U],j=X.sim.t,Tt=Q.alive?Math.min(1,Math.max(0,(j-Q.born)/.25)):0;return[Q.x+de[0],Q.z+de[2],Tt,Q.seed]};let je=t({vert:c(`
		precision highp float;
		uniform mat4 proj, view;
		uniform vec4 crumbs[${Cl}];
		attribute vec3 cp;
		attribute float ci;
		varying vec3 v_pos, v_nrm, v_eye;
		${ns}
		void main() {
			int k = int(ci + 0.5);
			vec4 c = crumbs[0];
			for (int i = 1; i < ${Cl}; i++) if (i == k) c = crumbs[i];
			float sz = 0.016 * (0.8 + 0.5 * fract(c.w * 3.7)) * c.z;
			float h0 = poolHeight(c.xy);
			vec3 q = vec3(c.x, 0.003 + h0 * 1.4, c.y) + cp * sz;
			v_pos = q; v_nrm = normalize(cp);
			vec3 tr = view[3].xyz;
			v_eye = -vec3(dot(view[0].xyz, tr), dot(view[1].xyz, tr), dot(view[2].xyz, tr));
			gl_Position = proj * view * vec4(q, 1.0);
			if (c.z < 0.01) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
		}`),frag:`
		precision highp float;
		uniform float night, time;
		varying vec3 v_pos, v_nrm, v_eye;
		${Kr}
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			vec3 N = normalize(v_nrm);
			vec3 spec; float sv;
			vec3 light = studioLight(v_pos, N, V, 0.2, spec, sv);
			vec3 base = vec3(0.78, 0.60, 0.36) * (0.85 + 0.3 * fract(sin(dot(floor(v_pos.xz * 900.0), vec2(12.9, 78.2))) * 43758.5));
			// wet underneath
			base *= mix(0.55, 1.0, smoothstep(-0.4, 0.4, N.y));
			vec3 col = studioAir(base * light + spec * 0.1, v_pos, v_eye);
			gl_FragColor = vec4(sqrt(max(col, 0.0)), 1.0);
		}`,attributes:{cp:S.cp,ci:S.ci},elements:new Uint32Array(S.idx),uniforms:Ge,cull:{enable:!1}}),Je=UM(),Mo=t({vert:c(ag),frag:`
		precision highp float;
		uniform float night, time;
		varying vec3 v_pos, v_nrm, v_eye;
		varying float v_kind;
		varying vec2 v_uv;
		${Kr}
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			vec3 N = normalize(v_nrm);
			if (dot(N, V) < 0.0) N = -N;
			float F = 0.04 + 0.96 * pow(1.0 - max(dot(N, V), 0.0), 5.0);
			vec3 p = v_pos - vec3(${lt(de[0])}, ${lt(de[1])}, ${lt(de[2])});
			float dust = fbm3(p * vec3(1.5, 3.0, 1.5)) * (v_kind > 0.5 ? 1.0 : 0.6);
			// streaks where old rain has run down the roof
			float streak = v_kind > 0.5 ? smoothstep(0.55, 0.9, vnoise3(vec3(p.z * 9.0, p.x * 0.6, 0.0))) * 0.5 : 0.0;
			vec3 c = mix(vec3(0.85, 0.80, 0.72), vec3(0.12, 0.13, 0.17), night) * (dust * 0.5 + streak);
			float a = clamp(0.05 + dust * 0.16 + streak * 0.2 + F * 0.4, 0.0, 0.6);
			vec3 col = mix(c, studioSky(reflect(-V, N)), F / max(a, 0.01) * 0.4);
			// the roof: old plain glass, grimed and streaked, dimming the sky
			if (v_kind > 0.5) {
				float grime = smoothstep(0.25, 0.75, vnoise3(vec3(p.x * 0.35, p.z * 0.28, 2.0)));
				col = mix(col, mix(vec3(0.26, 0.27, 0.24), vec3(0.03, 0.035, 0.05), night), 0.6 + 0.3 * grime);
				a = max(a, 0.48 + 0.25 * (1.0 - grime));
			}
			gl_FragColor = vec4(sqrt(max(col, 0.0)), a);
		}`,attributes:{position:Je.pos,normal:Je.nrm,kind:Je.kind,uv:Je.uv,anchor:Je.anchor},uniforms:d,elements:new Uint32Array(Je.idx),cull:{enable:!1},depth:{mask:!1},blend:o}),vo=(()=>{let U={pos:[],idx:[]},Q=300,j=24,Tt=12;for(let Kt=0;Kt<=Tt;Kt++){let Rt=-.25*Ne+Kt/Tt*.75*Ne;for(let _t=0;_t<=j;_t++){let fe=_t/j*2*Ne;U.pos.push(de[0]+Ut/2+Q*Math.cos(Rt)*Math.cos(fe),Q*Math.sin(Rt),de[2]+Ce/2+Q*Math.cos(Rt)*Math.sin(fe))}}for(let Kt=0;Kt<Tt;Kt++)for(let Rt=0;Rt<j;Rt++){let _t=Kt*(j+1)+Rt,fe=_t+1,Ft=_t+j+2,ye=_t+j+1;U.idx.push(_t,fe,Ft,_t,Ft,ye)}return U})(),Ro=t({vert:c(`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec3 position;
		varying vec3 v_pos, v_eye;
		void main() {
			v_pos = position;
			vec3 t = view[3].xyz;
			v_eye = -vec3(dot(view[0].xyz, t), dot(view[1].xyz, t), dot(view[2].xyz, t));
			v_eye.y *= yScale;
			vec3 p = position; p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`),frag:`
		precision highp float;
		uniform float night, time;
		varying vec3 v_pos, v_eye;
		${Kr}
		void main() {
			vec3 d = normalize(v_pos - v_eye);
			vec3 col = studioSky(d) * 1.15;
			// a far line of trees in the haze, and the meadow before them
			float az = atan(d.z, d.x);
			float tl = 0.045 + 0.05 * fbm3(vec3(az * 7.0, 0.0, 1.0)) + 0.025 * vnoise3(vec3(az * 40.0, 0.0, 2.0));
			float ground = smoothstep(0.004, -0.004, d.y);
			vec3 trees = mix(vec3(0.42, 0.46, 0.30), vec3(0.62, 0.60, 0.48), 0.5 + 0.5 * vnoise3(vec3(az * 30.0, d.y * 60.0, 0.0)));
			trees = mix(trees, studioSky(vec3(d.x, 0.02, d.z)), 0.45);
			trees = mix(trees, toNightC(trees), night);
			float inTrees = smoothstep(tl + 0.004, tl - 0.004, d.y) * (1.0 - ground);
			col = mix(col, trees * 1.15, inTrees);
			vec3 meadow = mix(vec3(0.55, 0.55, 0.32), vec3(0.75, 0.70, 0.50), vnoise3(vec3(d.xz * 80.0, 0.0)));
			meadow = mix(meadow, toNightC(meadow), night);
			col = mix(col, meadow, ground);
			gl_FragColor = vec4(sqrt(max(col, 0.0)), 1.0);
		}`.replace("${LIGHT}","").replace("void main() {",`vec3 toNightC(vec3 c) { float l = dot(c, vec3(0.3, 0.59, 0.11)); return vec3(l) * vec3(0.06, 0.08, 0.14); }
		void main() {`),attributes:{position:vo.pos},elements:new Uint32Array(vo.idx),cull:{enable:!1}}),Ao=typeof navigator!="undefined"&&/Mobi|Android|iPhone|iPad/.test(navigator.userAgent),Jo=Ao?2600:6500,Wn=[];{let U=Oa(4242),Q=(Tt,Kt,Rt)=>{let _t=-Tt/vr[0],fe=Kt+vr[1]*_t,Ft=Rt+vr[2]*_t;return ve.c.some(ye=>{let ue=da(Ft-ye);return ue!==null&&fe>ve.sill&&fe<ue})},j=0;for(;Wn.length<Jo&&j++<Jo*60;){let Tt=[.2+U()*(Ut-.4),.1+U()*(po+1),.2+U()*(Ce-.4)];Wn.length<Jo*.8&&!Q(...Tt)||Wn.push([...Tt,U()])}}let lr=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float time, night, pixelScale;
		attribute vec4 seed;
		varying float v_light, v_seed, v_spark;
		${dd()}
		void main() {
			float s = seed.w * 6.2831;
			vec3 p = seed.xyz;
			// slow drifting and turning, a faint settling, never in step
			p += vec3(sin(time * 0.10 + s * 3.0) * 0.32 + sin(time * 0.043 + s * 7.0) * 0.2,
			          sin(time * 0.07 + s * 5.0) * 0.25 - 0.015 * time * (0.4 + seed.w),
			          cos(time * 0.085 + s * 2.0) * 0.32 + cos(time * 0.037 + s * 9.0) * 0.2);
			p.y = mod(p.y - 0.1, ${lt(po+1)}) + 0.1;
			p += vec3(${lt(de[0])}, ${lt(de[1])}, ${lt(de[2])});
			float light = studioSun(p);
			// a faint few in the shade too, so the dark air is not empty
			float dim = 0.05 * (1.0 - night * 0.5);
			v_seed = seed.w;
			v_spark = step(0.955, fract(seed.w * 37.0));
			vec4 vp = view * vec4(p, 1.0);
			float dist = max(-vp.z, 0.05);
			gl_Position = proj * vp;
			float lit = max(light, dim * step(0.7, fract(seed.w * 11.0)));
			if (lit <= 0.01 || vp.z > -0.15) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); gl_PointSize = 0.0; v_light = 0.0; return; }
			float sharp = clamp(pixelScale * (0.9 + 1.3 * seed.w) / dist, 1.3, 5.0);
			// near the lens they swim out of focus into soft discs
			float blur = 1.0 - smoothstep(0.4, 2.2, dist);
			float size = sharp + blur * ${Ao?"12.0":"20.0"} * (0.6 + 0.4 * seed.w);
			if (v_spark > 0.5) size = max(size, pixelScale * 9.0 / dist + 5.0);
			gl_PointSize = size;
			v_light = lit * (v_spark > 0.5 ? 1.0 : pow(sharp / size, 1.2) * (1.0 + 2.0 * blur));
		}`,frag:`
		precision highp float;
		uniform float time, night;
		varying float v_light, v_seed, v_spark;
		void main() {
			vec2 q = gl_PointCoord - 0.5;
			float r = length(q) * 2.0;
			vec3 c = mix(vec3(1.0, 0.90, 0.72), vec3(0.75, 0.84, 1.0), night);
			if (v_spark > 0.5) {
				// a glint: it flashes now and then as the fleck turns
				float ph = fract(time * (0.08 + 0.12 * v_seed) + v_seed * 13.0);
				float flash = smoothstep(0.0, 0.04, ph) * (1.0 - smoothstep(0.04, 0.22, ph));
				float core = exp(-r * r * 30.0);
				float star = exp(-abs(q.x) * 70.0) * exp(-abs(q.y) * 5.0) + exp(-abs(q.y) * 70.0) * exp(-abs(q.x) * 5.0);
				float a = (core * 1.6 + star * 0.9) * flash + core * 0.15;
				gl_FragColor = vec4(c * vec3(1.0, 0.97, 0.92) * a * v_light * 2.2, 1.0);
				return;
			}
			float point = exp(-r * r * 3.2) * (1.0 - smoothstep(0.85, 1.0, r));
			float t1 = sin(time * (0.9 + v_seed * 2.3) + v_seed * 40.0), t2 = sin(time * (0.37 + v_seed * 1.1) + v_seed * 17.0);
			float tw = 0.35 + 0.65 * smoothstep(-0.6, 1.0, t1 * t2 + 0.35 * t1);
			gl_FragColor = vec4(c * point * v_light * tw * 1.1, 1.0);
		}`,attributes:{seed:Wn},count:Jo,primitive:"points",uniforms:{pixelScale:U=>U.viewportHeight*.0055},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});function et(U){U&&U.reflected||(m(),f()),Ro(),C(),U&&U.reflected||(Xt(),He(),je()),H&&H(),dt(),Wt(),Ie&&Ie(),U&&U.reflected||xo(),pt(),_e(),U&&U.reflected||(Mo(),lr())}return et};var ql=null;function ZM(t,e){if(e[1]>=-1e-4)return null;let o=-t[1]/e[1],r=t[0]+e[0]*o-de[0],n=t[2]+e[2]*o-de[2];return r<ut.x0||r>ut.x1||n<ut.z0||n>ut.z1?null:[r+de[0],n+de[2]]}function JM(t,e){ql&&ql.drop(t-de[0],e-de[2])}function t8(){return!!(ql&&ql.feed.on)}var sg=[{from:[8,1.65,21.75],to:[8,1.7,21.2],at:[8,2.3,1],fov:52},{from:[8,1.65,21.1],to:[8,1.7,19.1],at:[8,2.4,1],fov:58},{from:[3.6,1.65,20.5],to:[4.6,1.75,18.7],at:[8.8,2.7,1.5],fov:58},{from:[8,1.45,11.2],to:[8,1.55,8.4],at:[8,2.5,.5],fov:46},{from:[8.9,3.9,11.4],to:[7.4,3.7,10.2],at:[8,-.2,7.2],fov:50,pond:!0},{from:[5.1,1.5,5.8],to:[5.7,1.7,4.6],at:[8,2.6,.8],fov:44},{from:[10.6,1.6,2.4],to:[9.7,1.7,3.6],at:[8,2.4,22],fov:60},{from:[2.6,1.5,19],to:[3.6,1.6,17.4],at:[8,6.8,8],fov:62}],dc=11;function e8(t){let e=sg.length,o=Math.floor(t/dc)%e,r=t%dc/dc,n=r*r*(3-2*r),a=sg[o],s=a.from.map((c,h)=>c+(a.to[h]-c)*n),i=Math.max(0,1-Math.min(r*dc,(1-r)*dc)/.7);return{eye:fd(s),target:fd(a.at),fov:a.fov,roll:0,fade:i,pond:!!a.pond&&i<.05,shot:Math.floor(t/dc)}}Qr.exports.previewCam=e8;Qr.exports.poolHit=ZM;Qr.exports.feedAt=JM;Qr.exports.feeding=t8;Qr.exports.sunGLSL=dd;Qr.exports.O=de;Qr.exports.SIZE={W:Ut,L:Ce,H:po,RIDGE:mr};Qr.exports.BOX=[de[0]-.8,0,de[2]-.8,de[0]+Ut+.8,mr+.5,de[2]+Ce+.8];Qr.exports.AIR_BOX=[de[0],0,de[2],de[0]+Ut,mr,de[2]+Ce]});var Oh=At((Sz,vg)=>{"use strict";var{A:w0}=Nr(),{C:Hn}=k0(),{DOOR:pc}=Ya(),f0=es(),vc=Qs(),ug=Hn.hallEnd+.35,dg={arch:[13.6,0,w0.zc-w0.arch.r-.3,14.4,w0.arch.spring+w0.arch.r+.3,w0.zc+w0.arch.r+.3],mouth:[13.3,0,Hn.z0-.3,14.3,8.2,Hn.z1+.3],stair:[-.5,0,f0.SURR.z0-.2,.5,f0.SURR.top+.3,f0.SURR.z1+.2],door:[pc.x0-.4,0,-.5,pc.x1+.4,pc.top+.4,.5],windows:[15.6,.4,Hn.z1-.2,36.9,6.4,Hn.z1+.9],farDoor:[Hn.x1-.2,0,Hn.zc-pc.r-.4,Hn.x1+.9,pc.top+.4,Hn.zc+pc.r+.4]},Ca={court:[w0.x0-.4,0,w0.z0-.3,w0.x1+.3,w0.domeTop+.5,w0.z1+.3],stair:[f0.C.x-f0.R-2.6,0,f0.C.z-f0.R-1.5,.5,15.6,f0.C.z+f0.R+1.5],street:[-60,-1,-140,74,60,.6],garden:[10,-1,Hn.z1,46,60,Hn.z1+110],florence:[Hn.x1,-1,Hn.zc-30,Hn.x1+80,60,Hn.zc+30],studio:vc.BOX},o8=[[0,0,0,14,0,ug],[13.6,0,Hn.z0,Hn.x1+.4,0,Hn.z1],[w0.x0-.4,0,w0.z0,w0.x1,0,w0.z1],[f0.C.x-f0.R-2.6,0,f0.C.z-f0.R,.4,0,f0.C.z+f0.R],[vc.BOX[0],0,vc.BOX[2],vc.BOX[3],0,vc.BOX[5]]],n8={hall:{court:["arch"],stair:["stair"],street:["door"],garden:["mouth","windows"],florence:["mouth","farDoor"]},wing:{court:["mouth","arch"],stair:["mouth","stair"],street:["mouth","door"],garden:["windows"],florence:["farDoor"]},court:{stair:["arch","stair"],street:["arch","door"],garden:["arch","mouth","windows"],florence:["arch","mouth","farDoor"]},stair:{court:["stair","arch"],street:["stair","door"],garden:["stair","mouth","windows"],florence:["stair","mouth","farDoor"]}},Gl=new Float64Array(24),Zr=[7,2,2],pg=0,Pa="out",Rh=!0;try{/[?&]nocull\b/.test(location.search)&&(Rh=!1)}catch(t){}var Dl={court:!0,stair:!0,street:!0,garden:!0,florence:!0,studio:!1},Fl={court:!0,stair:!0,street:!0,garden:!0,florence:!0,studio:!1},fg=!0;function r8(t){let e=i=>[t[i],t[4+i],t[8+i],t[12+i]],o=e(0),r=e(1),n=e(2),a=e(3),s=(i,c,h,f)=>{for(let d=0;d<4;d++)Gl[i*4+d]=c[d]+h*f[d]};s(0,a,1,o),s(1,a,-1,o),s(2,a,1,r),s(3,a,-1,r),s(4,a,1,n),s(5,a,-1,n)}function as(t,e){if(!Rh)return!0;let o=e?-t[4]:t[1],r=e?-t[1]:t[4];for(let n=0;n<6;n++){let a=Gl[n*4],s=Gl[n*4+1],i=Gl[n*4+2],c=Gl[n*4+3],h=a>0?t[3]:t[0],f=s>0?r:o,d=i>0?t[5]:t[2];if(a*h+s*f+i*d+c<0)return!1}return!0}var pd=(t,e)=>Zr[0]>t[0]-e&&Zr[0]<t[3]+e&&Zr[2]>t[2]-e&&Zr[2]<t[5]+e;function a8(t){if(pd(t,.6))return null;let e=1/0,o=-1/0;for(let r=0;r<4;r++){let n=(r&1?t[3]:t[0])-Zr[0],a=(r&2?t[5]:t[2])-Zr[2],s=Math.atan2(n,a)-pg;s-=Math.round(s/(2*Math.PI))*2*Math.PI,e=Math.min(e,s),o=Math.max(o,s)}return o-e>Math.PI?null:[e,o]}function hg(t,e,o){let r=-Math.PI,n=Math.PI,a=s=>{let i=a8(s);return i?(r=Math.max(r,i[0]-.03),n=Math.min(n,i[1]+.03),r<=n):!0};for(let s of t){let i=dg[s];if(!pd(i,.6)&&(!as(i,o)||!a(i)))return!1}return as(e,o)&&a(e)}function s8(){let t=Zr[0],e=Zr[2],o=vc.BOX;return t>o[0]&&t<o[3]&&e>o[2]&&e<o[5]?"studio":t<0&&e>f0.C.z-f0.R-1.5&&t>f0.C.x-f0.R-2.6?"stair":t>14.1&&e>w0.z0-.3&&e<w0.z1+.3&&t<w0.x1+.3?"court":t>13.9&&e>Hn.z0-.4&&e<Hn.z1+.1&&t<Hn.x1+.3?"wing":t>=0&&t<=14.1&&e>.3&&e<ug?"hall":"out"}var i8={PORTAL:dg,ROOM:Ca,update(t,e,o){let r=new Array(16);for(let n=0;n<4;n++)for(let a=0;a<4;a++){let s=0;for(let i=0;i<4;i++)s+=e[i*4+a]*t[n*4+i];r[n*4+a]=s}r8(r),Zr[0]=o[0],Zr[1]=o[1],Zr[2]=o[2],pg=Math.atan2(-t[2],-t[10]),Pa=s8();for(let n in Ca){if(n==="studio"||Pa==="studio"){Dl[n]=Fl[n]=n==="studio"&&Pa==="studio";continue}if(!Rh||Pa==="out"||Pa===n||pd(Ca[n],.3))Dl[n]=as(Ca[n],!1)||Pa===n,Fl[n]=as(Ca[n],!0)||Pa===n;else{let a=n8[Pa][n];Dl[n]=a?hg(a,Ca[n],!1):as(Ca[n],!1),Fl[n]=a?hg(a,Ca[n],!0):as(Ca[n],!0)}}fg=!Rh||o8.some(n=>as(n,!1))},get zone(){return Pa},room(t,e){return e?Fl[t]:Dl[t]},box(t,e,o){return o&&!(e?Fl[o]:Dl[o])?!1:as(t,e)},get floor(){return fg}};vg.exports=i8});var gg=At((Ez,mg)=>{"use strict";var c8=Zu(),l8=Oh();function f8(t){let e=new DataView(t);if(String.fromCharCode(e.getUint8(0),e.getUint8(1),e.getUint8(2),e.getUint8(3))!=="STAT")throw new Error("Not a statue file");let r=e.getUint32(4,!0),n=e.getUint32(8,!0),a=[],s=[];for(let d=0;d<3;d++)a.push(e.getFloat32(12+d*4,!0)),s.push(e.getFloat32(24+d*4,!0));let i=36,c=new Uint16Array(t,i,r*3);i+=r*6;let h=new Uint16Array(t,i,n);i+=n*2;let f=new Int8Array(t,i,r*3);return{nV:r,nI:n,mn:a,sz:s,pos:c,idx:h,nrm:f}}mg.exports=(t,e)=>{let o=[],r=[],n=[],a=[],s=null,i=e.statues.length,c=[],h=(d,u)=>{let v=o.length/3,l=u.height*.75,p=u.base!==void 0?u.base:e.pedestalTop;c.push({offset:a.length,count:d.nI,box:[u.x-l,p-.1,u.z-l,u.x+l,p+u.height+.2,u.z+l]});let m=u.height,g=Math.cos(u.yaw),x=Math.sin(u.yaw),y=u.base!==void 0?u.base:e.pedestalTop;for(let w=0;w<d.nV;w++){let _=(d.mn[0]+d.pos[w*3]/65535*d.sz[0])*m,M=(d.mn[1]+d.pos[w*3+1]/65535*d.sz[1])*m,k=(d.mn[2]+d.pos[w*3+2]/65535*d.sz[2])*m;o.push(u.x+g*_+x*k,y+M,u.z-x*_+g*k);let R=d.nrm[w*3]/127,A=d.nrm[w*3+1]/127,F=d.nrm[w*3+2]/127;r.push(g*R+x*F,A,-x*R+g*F),n.push(u.mat||1,0,0)}for(let w=0;w<d.nI;w++)a.push(v+d.idx[w])},f=()=>{a.length!==0&&(s=c8(t,{position:o,normal:r,mat:n,elements:a,lights:e.lights,get viewer(){return e.viewer}},!1,!0))};return e.statues.forEach(d=>{fetch("res/"+d.file).then(u=>{if(!u.ok)throw new Error("Could not load "+d.file);return u.arrayBuffer()}).then(u=>h(f8(u),d)).catch(u=>console.error(u)).then(()=>{--i===0&&f()})}),function(d){if(!s)return;let u=!!(d&&d.reflected),v=c.filter(l=>l8.box(l.box,u));v.length&&s(v)}}});var Ag=At((zz,md)=>{"use strict";var h8=Gs(),Zn=1.29032,Js=[9.2968,2,5.9],u8=[[.767398,.00185,-.10827],[.010515,.769952,.087681],[-.107774,.08829,-.762374]],Ch=2147.64,xg=725,yg=1288,bg=1450,wg=2576,nr=-5.197,ei=3.865,ss=10.135,oi=-14.679,Hl=-30.229,Ul=7.232,_g=-45.713,mc=17.1*Zn,ti=16.6*Zn,Bl=16.6*Zn,Mg=[6.9,17.1],Ph=[2.95,16.6],d8=1.6,p8=0,v8=1,kg=2,vd=3,Sg=4,Eg=5,m8=6;function g8(){let t=[],e=[],o=[],r=[],n=h8.createBuilder(t,e,o,r),a=(h,f,d,u,v,l,p=1,m=1)=>{let g=[];for(let x=0;x<=p;x++){let y=[];for(let w=0;w<=m;w++){let _=[h[0]+f[0]*x/p+d[0]*w/m,h[1]+f[1]*x/p+d[1]*w/m,h[2]+f[2]*x/p+d[2]*w/m],M=l(_);y.push(n.vert(_,u,[v,M[0],M[1]]))}g.push(y)}for(let x=0;x<p;x++)for(let y=0;y<m;y++)n.tri(g[x][y],g[x+1][y],g[x][y+1]),n.tri(g[x+1][y],g[x+1][y+1],g[x][y+1])},s=h=>f=>[(Js[2]-f[2])/Zn-h,f[1]/Zn];a([-60,0,-.36],[130,0,0],[0,0,-140],[0,1,0],p8,h=>[h[0]/Zn,h[2]/Zn],13,14),a([ei,0,nr],[0,0,oi-nr],[0,mc,0],[1,0,0],v8,s(8.6),6,6),a([-40,0,nr],[ei+40,0,0],[0,mc,0],[0,0,1],kg,h=>[(ei-h[0])/Zn,h[1]/Zn],8,4),a([-40,0,-.36],[0,0,nr+.36],[0,mc,0],[1,0,0],kg,h=>[-h[2]/Zn,h[1]/Zn]),a([ss,0,-80],[0,0,nr+80],[0,ti,0],[-1,0,0],Sg,s(8.6),12,6),a([ss,0,nr],[60,0,0],[0,ti,0],[0,0,1],Eg,h=>[(h[0]-ss)/Zn,h[1]/Zn],8,4),a([70,0,nr],[0,0,-.36-nr],[0,ti,0],[-1,0,0],Eg,h=>[-h[2]/Zn,h[1]/Zn]);let i=h=>[(h[0]-Js[0])/Zn+4.18,h[1]/Zn];a([-20,0,Hl],[Ul+20,0,0],[0,Bl,0],[0,0,1],vd,i,8,6),a([Ul,0,Hl],[0,0,_g-Hl],[0,Bl,0],[1,0,0],vd,s(28),4,4),a([Ul,0,_g],[ss-Ul,0,0],[0,ti,0],[0,0,1],Sg,h=>[(h[0]-Js[0])/Zn,h[1]/Zn],2,4),a([-20,0,oi],[0,0,Hl-oi],[0,Bl,0],[1,0,0],vd,s(16),4,4);let c=(h,f,d,u)=>a(h,f,d,u,m8,()=>[0,0],4,4);return c([-300,-20,-300],[600,0,0],[0,320,0],[0,0,1]),c([-300,300,-300],[600,0,0],[0,0,300],[0,-1,0]),c([-300,-20,0],[0,0,-300],[0,320,0],[1,0,0]),c([300,-20,-300],[0,0,300],[0,320,0],[-1,0,0]),{position:t,normal:e,elements:o,attr:r}}function Zs(t,e,o,r){let n=t.texture({data:[[r]],...o,min:"linear",mag:"linear"});return fetch(e).then(a=>{if(!a.ok)throw new Error("Could not load "+e);return a.blob()}).then(a=>createImageBitmap(a)).then(a=>{n({data:a,...o,min:"mipmap",mipmap:"nice",mag:"linear"})}).catch(a=>console.error(a)),n}var Jr=t=>"vec3("+t.map(e=>e.toFixed(4)).join(", ")+")",x8=[[[-.35,0,-.35],[14.35,9.2,50]],[[-40,0,oi],[ei,mc,nr]],[[ss,0,-80],[70,ti,nr]],[[-20,0,-80],[Ul,Bl,Hl]],[[-40,0,-80],[-20,Bl,oi]]],y8=x8.map(t=>`if (hitBox(ro, rd, ${Jr(t[0])}, ${Jr(t[1])}, 1e4) ) return 0.0;`).join(`
		`),zg="mat3("+[0,1,2].map(t=>[0,1,2].map(e=>u8[e][t].toFixed(6)).join(", ")).join(", ")+")",b8=`
precision highp float;

uniform sampler2D photo, photoNight, photoMask, pinkTex, yellowTex, creamTex, cobbleTex;
uniform float time;
uniform float night;   // 0 by day, 1 at night

varying vec3 v_pos;
varying vec3 v_normal;
varying vec3 v_attr;
varying vec3 v_eye;

const vec3 SUN = ${Jr([-.25,.4,.88].map(t=>t/Math.hypot(-.25,.4,.88)))};

float hash(vec2 p) {
	vec3 p3 = fract(vec3(p.xyx) * 0.1031);
	p3 += dot(p3, p3.yzx + 33.33);
	return fract((p3.x + p3.y) * p3.z);
}

float vnoise(vec2 p) {
	vec2 i = floor(p), f = fract(p);
	f = f * f * (3.0 - 2.0 * f);
	return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x),
	           mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
}

float fbm(vec2 p) {
	float s = 0.0, a = 0.5;
	for (int i = 0; i < 5; i++) {
		s += a * vnoise(p);
		p = p * 2.03 + vec2(1.7, 9.2);
		a *= 0.5;
	}
	return s;
}

// does a ray (ro + rd t, 0 < t < tMax) pass through a box?
bool hitBox(vec3 ro, vec3 rd, vec3 bmin, vec3 bmax, float tMax) {
	vec3 inv = 1.0 / rd;
	vec3 t0 = (bmin - ro) * inv;
	vec3 t1 = (bmax - ro) * inv;
	vec3 tn3 = min(t0, t1), tf3 = max(t0, t1);
	float tn = max(max(tn3.x, tn3.y), tn3.z);
	float tf = min(min(tf3.x, tf3.y), tf3.z);
	return tf > max(tn, 0.0) && tn < tMax;
}

float sunRay(vec3 ro, vec3 rd) {
	${y8}
	return 1.0;
}

// three slightly different sun directions give a soft shadow edge
float sunVisible(vec3 p, vec3 n) {
	vec3 ro = p + n * 0.03;
	vec3 side = normalize(cross(SUN, vec3(0.0, 1.0, 0.0)));
	vec3 up = cross(side, SUN);
	return (sunRay(ro, SUN)
	      + sunRay(ro, normalize(SUN + up * 0.035 + side * 0.02))
	      + sunRay(ro, normalize(SUN - up * 0.035 - side * 0.02))) / 3.0;
}

// can the photo's camera see this point? (the side buildings may hide it)
bool photoSees(vec3 p) {
	vec3 ro = ${Jr(Js)};
	vec3 rd = p - ro;
	if (hitBox(ro, rd, ${Jr([-40,0,oi])}, ${Jr([ei-.02,mc,nr])}, 0.995)) return false;
	if (hitBox(ro, rd, ${Jr([ss+.02,0,-80])}, ${Jr([70,ti,nr])}, 0.995)) return false;
	return true;
}

// is this point sky in the photo? (only meaningful inside the photo)
bool photoSky(vec3 p) {
	vec3 pc = ${zg} * (p - ${Jr(Js)});
	if (pc.z < 0.2) return false;
	vec2 uv = vec2(
		(${xg.toFixed(2)} + ${Ch.toFixed(3)} * pc.x / pc.z) / ${bg.toFixed(1)},
		(${yg.toFixed(2)} - ${Ch.toFixed(3)} * pc.y / pc.z) / ${wg.toFixed(1)}
	);
	if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) return false;
	return texture2D(photoMask, uv).r < 0.5;
}

// photo colour and how much to trust it (0..1)
vec4 photoAt(vec3 p, vec3 n, vec3 eye) {
	vec3 pc = ${zg} * (p - ${Jr(Js)});
	if (pc.z < 0.2) return vec4(0.0);
	vec2 uv = vec2(
		(${xg.toFixed(2)} + ${Ch.toFixed(3)} * pc.x / pc.z) / ${bg.toFixed(1)},
		(${yg.toFixed(2)} - ${Ch.toFixed(3)} * pc.y / pc.z) / ${wg.toFixed(1)}
	);
	vec2 e = min(uv, 1.0 - uv);
	float w = smoothstep(0.002, 0.02, min(e.x, e.y));
	if (w <= 0.0) return vec4(0.0);
	w *= smoothstep(0.35, 0.75, texture2D(photoMask, uv).r);
	if (w <= 0.0) return vec4(0.0);
	if (!photoSees(p)) return vec4(0.0);
	// if we see this surface much more square-on than the photo did,
	// the photo would look smeared: hand over to the painted facade
	float camCos = abs(dot(normalize(p - ${Jr(Js)}), n));
	float eyeCos = abs(dot(normalize(p - eye), n));
	float stretch = eyeCos / max(camCos, 0.001);
	w *= 1.0 - smoothstep(2.2, 3.6, stretch);
	// by night, the same street after rain (res/street/photo_night.jpg)
	vec3 c = texture2D(photo, uv).rgb;
	if (night > 0.0) c = mix(c, texture2D(photoNight, uv).rgb, night);
	return vec4(c, w);
}

vec3 skyColour(vec3 dir) {
	float h = clamp(dir.y, 0.0, 1.0);
	vec3 horizon = vec3(1.00, 0.80, 0.58);
	vec3 belt = vec3(0.98, 0.72, 0.66);
	vec3 zenith = vec3(0.47, 0.62, 0.84);
	vec3 col = mix(horizon, belt, smoothstep(0.02, 0.18, h));
	col = mix(col, zenith, smoothstep(0.15, 0.65, h));
	// slow drifting clouds, lit gold from below
	vec2 cp = dir.xz / max(dir.y, 0.06) * 0.9 + vec2(time * 0.012, time * 0.004);
	float c = fbm(cp * 0.6);
	c = smoothstep(0.52, 0.80, c) * smoothstep(0.02, 0.12, h);
	vec3 cloud = mix(vec3(1.0, 0.86, 0.70), vec3(1.0, 0.95, 0.88), fbm(cp * 1.7));
	return mix(col, cloud, c * 0.75);
}

void main() {
	float kind = v_attr.x;
	vec2 fuv = v_attr.yz;
	vec3 N = normalize(v_normal);
	vec3 V = v_pos - v_eye;
	float dist = length(V);

	if (kind > 5.5) {
		vec3 sk = skyColour(normalize(V));
		// the night sky: deep blue with a few stars
		vec3 nd = normalize(V);
		vec3 ns = mix(vec3(0.03, 0.045, 0.085), vec3(0.01, 0.016, 0.035), smoothstep(0.0, 0.7, nd.y));
		gl_FragColor = vec4(mix(sk, ns, night), 1.0);
		return;
	}

	// ---------- painted fallback ----------
	vec3 base;
	if (kind < 0.5) {
		base = texture2D(cobbleTex, fuv / ${d8.toFixed(2)}).rgb;
	} else if (kind < 2.5) {
		base = texture2D(pinkTex, vec2(fuv.x / ${Mg[0].toFixed(2)}, 1.0 - fuv.y / ${Mg[1].toFixed(2)})).rgb;
	} else if (kind < 3.5) {
		base = texture2D(yellowTex, vec2(fuv.x / ${Ph[0].toFixed(2)}, 1.0 - fuv.y / ${Ph[1].toFixed(2)})).rgb;
	} else {
		base = texture2D(creamTex, vec2(fuv.x / ${Ph[0].toFixed(2)}, 1.0 - fuv.y / ${Ph[1].toFixed(2)})).rgb;
	}

	// ---------- the photograph, where it can be trusted ----------
	bool projectable = kind < 0.5 || (kind > 0.5 && kind < 1.5) || (kind > 2.5 && kind < 4.5);
	if (kind < 0.5) {
		// the photo only shows ground inside the alley, or beyond its corners
		bool inAlley = v_pos.x > ${(ei-.05).toFixed(3)} && v_pos.x < ${(ss+.05).toFixed(3)};
		projectable = inAlley || v_pos.z < ${oi.toFixed(3)};
		projectable = projectable && v_pos.z < ${(nr+4.5).toFixed(3)};
	}
	// the yellow building ends at its real roofline
	if (kind > 2.5 && kind < 3.5 && v_pos.y > 15.0 && photoSky(v_pos)) discard;

	float photoW = 0.0;
	if (projectable) {
		vec4 ph = photoAt(v_pos, N, v_eye);
		// (the painted facades go to night on their own: dark, cold)
		base = mix(base, base * vec3(0.16, 0.2, 0.3), night);
		base = mix(base, ph.rgb, ph.a);
		photoW = ph.a;
	} else {
		base = mix(base, base * vec3(0.16, 0.2, 0.3), night);
	}

	// ---------- golden afternoon ----------
	base = pow(base, vec3(0.94)) * vec3(1.05, 1.0, 0.90);

	float ndl = max(dot(N, SUN), 0.0);
	float lit = ndl > 0.0 ? sunVisible(v_pos, N) : 0.0;
	vec3 shade = vec3(0.80, 0.80, 0.86);
	vec3 sun = vec3(1.30, 1.02, 0.66);
	vec3 col = base * (shade + sun * ndl * lit * 0.95);

	// warm haze with distance
	col = mix(col, vec3(1.0, 0.86, 0.68), (1.0 - exp(-dist / 140.0)) * 0.35);

	// ---------- after rain, at night ----------
	if (night > 0.0) {
		// the night photograph already holds its light: no sun on it
		// (lifted a little: seen from inside the gallery it reads darker)
		vec3 nc = base * 2.3;
		if (kind < 0.5) {
			// wet stone: the lamp reflections shimmer as the water moves
			float warmth = clamp((nc.r - nc.b) * 4.0, 0.0, 1.0);
			float ripple = vnoise(vec2(v_pos.x * 7.0, v_pos.z * 1.6 - time * 0.9))
			             * vnoise(vec2(v_pos.x * 2.3 + time * 0.25, v_pos.z * 4.0));
			nc *= 1.0 + warmth * (ripple * 1.5 - 0.4);
			// little glints coming and going on the cobbles
			float g = hash(floor(v_pos.xz * 38.0) + floor(time * 3.0));
			nc += vec3(1.0, 0.75, 0.45) * warmth * step(0.985, g) * 0.5;
		}
		// a thin mist hanging low over the street, drifting
		float mist = vnoise(vec2(v_pos.x * 0.35 + time * 0.08, v_pos.z * 0.25 - time * 0.03)) * (1.0 - smoothstep(0.0, 3.0, v_pos.y));
		nc = mix(nc, vec3(0.10, 0.12, 0.17), mist * 0.35);
		// cold, damp distance
		nc = mix(nc, vec3(0.025, 0.035, 0.06), (1.0 - exp(-dist / 90.0)) * 0.5);
		col = mix(col, nc, night);
	}

	gl_FragColor = vec4(col, 1.0);
}`,w8=`
precision highp float;
uniform mat4 proj, view;
uniform float yScale;
attribute vec3 position, normal, attr;
varying vec3 v_pos, v_normal, v_attr, v_eye;
void main() {
	v_pos = position;
	v_normal = normal;
	v_attr = attr;
	vec3 t = view[3].xyz;
	v_eye = -vec3(dot(view[0].xyz, t), dot(view[1].xyz, t), dot(view[2].xyz, t));
	vec3 p = position;
	p.y *= yScale;
	gl_Position = proj * view * vec4(p, 1.0);
}`,_8=c0();md.exports=t=>{let e=g8(),o={wrapS:"clamp",wrapT:"clamp",flipY:!1},r={wrapS:"mirror",wrapT:"clamp",flipY:!1},n={wrapS:"repeat",wrapT:"repeat",flipY:!1},a=Zs(t,"res/street/photo.jpg",o,[190,160,120]),s=Zs(t,"res/street/photo_night.jpg",o,[12,14,22]),i=Zs(t,"res/street/photo_mask.png",o,[255,255,255]),c=Zs(t,"res/street/facade_pink.jpg",r,[200,150,135]),h=Zs(t,"res/street/facade_yellow.jpg",r,[225,180,95]),f=Zs(t,"res/street/facade_cream.jpg",r,[215,200,175]),d=Zs(t,"res/street/cobbles.jpg",n,[95,95,95]),u=Date.now(),v=t({frag:b8,vert:w8,attributes:{position:e.position,normal:e.normal,attr:e.attr},elements:new Uint32Array(e.elements),uniforms:{photo:a,photoMask:i,pinkTex:c,yellowTex:h,creamTex:f,cobbleTex:d,photoNight:s,night:()=>_8.night,time:()=>(Date.now()-u)/1e3}});return function(){v()}};md.exports.layout={MOUTH_Z:nr,PINK_X:ei,RIGHT_X:ss,PINK_H:mc,CREAM_H:ti,S:Zn}});var Ng=At((Az,Lg)=>{"use strict";var M8=c0().GLSL,{glassPanes:k8}=Ya(),Tg=k0();function S8(){let t=[],e=[],o=(r,n)=>{for(let a of r)t.push(a),e.push(n)};return o(k8(),[0,0,1]),o(Tg.windowGlass(),[0,0,1]),o(Tg.farDoorGlass(),[1,0,0]),{position:t,normal:e}}Lg.exports=t=>{let e=S8(),o=t({frag:`
		precision highp float;
		${M8}
		varying vec3 v_pos;
		varying vec3 v_eye;
		varying vec3 v_n;
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			float c = abs(dot(V, v_n));
			float fres = pow(1.0 - c, 3.0);
			// a couple of soft diagonal sheens
			float d = (v_pos.x + v_pos.z) * 0.55 + v_pos.y * 0.85;
			float sheen = smoothstep(0.35, 0.0, abs(fract(d * 0.22) - 0.5)) * 0.05
			            + smoothstep(0.08, 0.0, abs(fract(d * 0.22 + 0.17) - 0.5)) * 0.04;
			float a = 0.05 + 0.32 * fres + sheen;
			vec3 col = mix(vec3(0.80, 0.86, 0.90), vec3(1.0, 0.95, 0.86), 0.4);
			gl_FragColor = vec4(toNight(col, 0.35), a);
		}`,vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec3 position, normal;
		varying vec3 v_pos, v_eye, v_n;
		void main() {
			v_pos = position;
			v_n = normal;
			vec3 t = view[3].xyz;
			v_eye = -vec3(dot(view[0].xyz, t), dot(view[1].xyz, t), dot(view[2].xyz, t));
			vec3 p = position;
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,attributes:{position:e.position,normal:e.normal},count:e.position.length,cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}});return function(){o()}}});var Xg=At((Tz,wd)=>{"use strict";var Ig=c0().GLSL,E8=Gs(),gd=Ar(),{wallWithHoles:z8,C:ls}=k0(),Pe=.28,at={westBack:14.4,westCol:15-Pe,eastCol:37.4+Pe,eastBack:41.8,south:ls.z1+.7,northCol:ls.z1+.7+16,northBack:ls.z1+.7+19,cx:(15+37.4)/2,cz:(ls.z1+.7+ls.z1+.7+16-Pe)/2},Xo={x0:at.westCol+Pe,x1:at.eastCol-Pe,z0:at.south,z1:at.northCol-Pe},L0=3.3,Vl=.92,fs=5.6,Rg=6,Cr=11.9,cs=9.6,zo={x0:at.cx-2.9,x1:at.cx+2.9,top:14.4},Hh=7,qg=4,yd=(at.eastCol-at.westCol)/Hh,A8=(at.northCol-at.south)/qg,Dg=3,Yl=.26,si=1.4,ri=1.1,Ih=3,pa=(()=>{let t=[.3,.82,-.49],e=Math.hypot(...t);return t.map(o=>o/e)})(),ge={GROUND:0,BRICK:1,STONE:2,MARBLE:3,HEDGE:4,POT:5,ROOF:6,SHUTTER:7,PANE:8,PLASTER:9,BARK:10,IRON:11,SKY:12,LEAD:13,FARBRICK:14,DARK:15,SOIL:16},va=[],Fg=(t,e,o)=>[at.cx+t,e,at.cz+o],qh=Fg(-5.9,0,3.4),hs=.85,is={c:[qh[0],4.6*hs+.5,qh[2]],r:[5*hs,3.6*hs,4.5*hs]},Gg=[{d:[0,4.4,0],r:[3.9,2.6,3.6],n:230},{d:[-2.7,4,-1.2],r:[2.6,2.1,2.4],n:105},{d:[2.7,4.5,-1.6],r:[2.5,2.2,2.3],n:105},{d:[.8,6.9,.8],r:[2.6,2,2.5],n:105},{d:[-1.6,6.1,2],r:[2.2,1.9,2],n:80},{d:[2.3,3.4,1.8],r:[2,1.5,1.9],n:60}].map(t=>({c:[qh[0]+t.d[0]*hs,t.d[1]*hs+.5,qh[2]+t.d[2]*hs],r:t.r.map(e=>e*hs),n:t.n}));for(let t of Gg)va.push({...t,cell:0,leaf:[.5,.7,.46],bloom:[1,1,1],size:[.95,1.35],magnolia:1,shadow:1});var T8=[3.6,6.3,9];for(let t of T8){let e=8.6+t%1.7*.6;va.push({c:Fg(t,e/2+.5,5.2),r:[.9,e/2,.9],cell:1,leaf:[.5,.64,.5],bloom:[1,1,1],n:180,size:[.72,.98],spindle:1,shadow:1})}var L8=[{d:[-8.4,-4],bloom:[1,.62,.78]},{d:[-3.6,-4.6],bloom:[1,.98,.94]},{d:[3.8,-4.3],bloom:[1,.98,.94]},{d:[8.5,-4],bloom:[1,.58,.72]}].map(t=>({x:at.cx+t.d[0],z:at.cz+t.d[1],bloom:t.bloom}));for(let t of L8)va.push({c:[t.x,.95,t.z],r:[1.25,.95,1.1],cell:3,leaf:[.7,.86,.58],bloom:t.bloom,n:80,size:[.55,.8],shadow:1});var bd=[45,135,225,315].map(t=>{let e=t*Math.PI/180;return[at.cx+Math.cos(e)*2.3,at.cz+Math.sin(e)*2.3]});for(let[t,e]of bd)va.push({c:[t,1.85,e],r:[.62,.55,.62],cell:3,leaf:[.78,.95,.55],bloom:[1.25,1,.25],n:36,size:[.32,.42],shadow:1});var Hg=[];{let t=(o,r,n,a,s,i)=>{let c=Math.hypot(n-o,a-r),h=Math.floor(c/.9);for(let f=0;f<=h;f++){let d=f/h,u=o+(n-o)*d,v=r+(a-r)*d;s!==void 0&&Math.abs((n!==o?u:v)-s)<i||Hg.push([u,v])}};t(Xo.x0+.45,Xo.z0+1.2,Xo.x0+.45,Xo.z1-.45,at.cz,1),t(Xo.x1-.45,Xo.z0+1.2,Xo.x1-.45,Xo.z1-.45,at.cz,1),t(Xo.x0+.45,Xo.z1-.45,Xo.x1-.45,Xo.z1-.45,at.cx,1.9)}var N8=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],Dh=t=>{let e=Math.hypot(t[0],t[1],t[2])||1;return[t[0]/e,t[1]/e,t[2]/e]};function xc(t,e,o,r,n,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),h=t.vert(r,a,s),f=t.vert(n,a,s);t.tri(i,c,h),t.tri(i,h,f)}function Jn(t,e,o,r,n,a,s,i){t.box(Math.min(e,n),Math.min(o,a),Math.min(r,s),Math.max(e,n),Math.max(o,a),Math.max(r,s),[i,0,0])}function R8(t,e,o){return{vert:(r,n,a)=>t.vert(e(r),o(n),a),tri:t.tri}}var O8={north:[t=>[t[0],t[1],at.northCol-t[2]],t=>[t[0],t[1],-t[2]]],west:[t=>[at.westCol+t[2],t[1],t[0]],t=>[t[2],t[1],t[0]]],east:[t=>[at.eastCol-t[2],t[1],t[0]],t=>[-t[2],t[1],t[0]]]};function Ug(t,e,o,r,n){let a=[];for(let s=0;s<o;s++){let i=t+s*e+(s===0?r:.02),c=t+(s+1)*e-(s===o-1?n:.02);a.push([i,c,t+(s+.5)*e])}return a}var C8=Ug(at.westCol,yd,Hh,Pe+Yl,Pe+Yl),Og=Ug(at.south,A8,qg,.32,Pe+Yl),gc=[at.cx-32.35,at.northCol-77],P8=Array.from({length:Hh-1},(t,e)=>at.westCol+(e+1)*yd),Bg=t=>(t[1]-t[0])/2-.2,Xl=t=>(t[0]+t[1])/2;function $8(t,e){let o=Xl(t),r=Bg(t);return{u0:t[0],u1:t[1],bottom:e?0:Vl,head:n=>{let a=Math.abs(n-o);return a<r?L0+Math.sqrt(r*r-a*a):L0},step:.05}}function I8(t,e,o){return{u0:t-o,u1:t+o,bot:r=>e-Math.sqrt(Math.max(0,o*o-(r-t)*(r-t))),head:r=>e+Math.sqrt(Math.max(0,o*o-(r-t)*(r-t))),step:.04,mat:[ge.STONE,0,0]}}function q8(t,e,o,r){return{u0:t-e/2,u1:t+e/2,bottom:o,head:()=>r,step:.5,mat:[ge.STONE,0,0]}}function Cg(t,e,o){let[r,n]=O8[e],a=R8(t,r,n),s=[];o.arches.forEach((f,d)=>s.push($8(f,d===o.open)));let i=[];for(let f of o.bays||o.arches){let d=Xl(f);o.oculi&&s.push(I8(d,6.85,.3)),i.push({c:d,y0:o.win[0],y1:o.win[1],w:1.05})}for(let f of o.extraWindows||[])i.push(f);for(let f of i)s.push(q8(f.c,f.w,f.y0,f.y1));for(let f of o.extraHoles||[])s.push(f);z8(a,{u0:o.u0,u1:o.u1,w0:-Pe,w1:Pe,top:o.top,holes:s,mat:[ge.BRICK,0,0],revealMat:[ge.BRICK,0,0],noEnds:o.noEnds,cuts:o.cuts,topStep:.25});let c=(f,d,u,v,l,p,m)=>{let g=r([f,d,u]),x=r([v,l,p]);Jn(t,g[0],g[1],g[2],x[0],x[1],x[2],m)},h=(f,d,u,v,l,p)=>xc(a,f,d,u,v,l,[p,0,0]);for(let f of o.arches){let d=Xl(f),u=Bg(f),v=28;for(let l of[Pe,-Pe]){let p=l>0?1:-1,m=l+p*.025;for(let g=0;g<v;g++){let x=Math.PI*g/v,y=Math.PI*(g+1)/v,w=(C,H)=>[d+Math.cos(C)*H,L0+Math.sin(C)*H],_=w(x,u),M=w(y,u),k=w(x,u+.26),R=w(y,u+.26);h([_[0],_[1],m],[M[0],M[1],m],[R[0],R[1],m],[k[0],k[1],m],[0,0,p],ge.STONE);let A=Math.cos((x+y)/2),F=Math.sin((x+y)/2);h([k[0],k[1],l],[R[0],R[1],l],[R[0],R[1],m],[k[0],k[1],m],[A,F,0],ge.STONE)}}}if(o.arches.forEach((f,d)=>{d!==o.open&&c(f[0]-.02,Vl,-Pe-.05,f[1]+.02,Vl+.09,Pe+.05,ge.STONE)}),c(o.u0,Rg,-Pe,o.u1,Rg+.18,Pe+.09,ge.STONE),c(o.u0,o.win[0]-.12,Pe-.01,o.u1,o.win[0],Pe+.06,ge.STONE),o.cornice)for(let[f,d,u]of o.cornice)c(f,u-.22,Pe-.01,d,u,Pe+.16,ge.STONE),c(f,u,Pe-.01,d,u+.16,Pe+.42,ge.STONE);for(let{c:f,y0:d,y1:u,w:v,door:l}of i){let p=v/2;if(h([f-p-.01,d,.06],[f+p+.01,d,.06],[f+p+.01,u,.06],[f-p-.01,u,.06],[0,0,1],l?ge.DARK:ge.PANE),l){c(f-p-.16,0,Pe-.01,f-p,u+.16,Pe+.07,ge.STONE),c(f+p,0,Pe-.01,f+p+.16,u+.16,Pe+.07,ge.STONE),c(f-p-.16,u,Pe-.01,f+p+.16,u+.2,Pe+.09,ge.STONE),c(f-p,0,.07,f+p,u-.02,.12,ge.SHUTTER),c(f-.012,0,.12,f+.012,u-.02,.14,ge.DARK);continue}for(let m of[-1,1]){let g=f+m*p;c(g+m*.02,d+.02,Pe+.02,g+m*(p+.025),u-.02,Pe+.06,ge.SHUTTER)}c(f-p-.09,u,Pe-.01,f+p+.09,u+.16,Pe+.05,ge.STONE),c(f-p-.09,d-.1,Pe-.01,f+p+.09,d,Pe+.09,ge.STONE),c(f-.015,d,.06,f+.015,u,.09,ge.SHUTTER),c(f-p,(d+u)/2-.015,.06,f+p,(d+u)/2+.015,.09,ge.SHUTTER)}if(o.oculi)for(let f of o.bays||o.arches){let d=Xl(f);h([d-.31,6.54,0],[d+.31,6.54,0],[d+.31,7.16,0],[d-.31,7.16,0],[0,0,1],ge.DARK)}for(let f of o.cols){let d=Vl+.09,u=r([f,0,0]);Jn(t,u[0]-.24,d,u[2]-.24,u[0]+.24,d+.12,u[2]+.24,ge.MARBLE),t.lathe([[.23,d+.12,1],[.24,d+.17],[.2,d+.24],[.215,d+.28],[.17,d+.34,1],[.165,d+.6],[.155,L0-.5],[.15,L0-.38,1],[.175,L0-.34,1],[.17,L0-.3],[.2,L0-.22],[.27,L0-.15],[.29,L0-.12,1]],u[0],u[2],18,{mat:()=>[ge.MARBLE,0,0]}),Jn(t,u[0]-.29,L0-.12,u[2]-.29,u[0]+.29,L0+.01,u[2]+.29,ge.STONE)}o.walk&&o.walk(t)}function D8(t){let e=[-1,0,1].map(n=>{let a=at.cx+n*1.7;return{u0:a-.6,u1:a+.6,bottom:11,head:s=>12.9+Math.sqrt(Math.max(0,.36-(s-a)*(s-a))),step:.04,mat:[ge.STONE,0,0]}});Cg(t,"north",{u0:at.westCol-Pe,u1:at.eastCol+Pe,top:n=>n>zo.x0+1e-6&&n<zo.x1-1e-6?zo.top:Cr,cuts:[zo.x0,zo.x0+1e-5,zo.x1-1e-5,zo.x1],arches:C8,open:Dg,cols:P8,oculi:!0,win:[8,9.9],extraHoles:e,cornice:[[at.westCol-Pe-3.3,zo.x0,Cr],[zo.x1,at.eastCol+Pe+3.3,Cr],[zo.x0-.2,zo.x1+.2,zo.top]],walk:n=>{Jn(n,Xo.x0,fs,at.northCol+Pe,Xo.x1,fs+.2,at.northBack,ge.PLASTER),Jn(n,Xo.x0,0,at.northBack,Xo.x1,fs,at.northBack+.3,ge.PLASTER);for(let a of[at.cx-7.2,at.cx,at.cx+7.2])xc(n,[a-.8,0,at.northBack-.01],[a+.8,0,at.northBack-.01],[a+.8,2.9,at.northBack-.01],[a-.8,2.9,at.northBack-.01],[0,0,-1],[ge.DARK,0,0]),Jn(n,a-.98,0,at.northBack-.06,a+.98,3.12,at.northBack,ge.STONE),xc(n,[a-.8,0,at.northBack-.07],[a+.8,0,at.northBack-.07],[a+.8,2.9,at.northBack-.07],[a-.8,2.9,at.northBack-.07],[0,0,-1],[ge.DARK,0,0])}}),xc(t,[zo.x0,11,at.northCol+.2],[zo.x1,11,at.northCol+.2],[zo.x1,13.6,at.northCol+.2],[zo.x0,13.6,at.northCol+.2],[0,0,-1],[ge.DARK,0,0]),Jn(t,zo.x0+.3,10.88,at.northCol-Pe-.06,zo.x1-.3,11,at.northCol-Pe+.1,ge.STONE),Jn(t,at.westBack,fs+.2,at.northBack,at.eastBack,Cr,at.northBack+3.4,ge.BRICK),Jn(t,at.westBack,cs,at.northCol-Pe,at.westCol-Pe,Cr,at.northCol+Pe,ge.BRICK),Jn(t,at.eastCol+Pe,cs,at.northCol-Pe,at.eastBack,Cr,at.northCol+Pe,ge.BRICK),Jn(t,at.westBack,fs+.2,at.northCol+Pe+.12,at.eastBack,Cr,at.northBack,ge.BRICK),jl(t,[at.westBack-.5,Cr+.16,at.northCol-Pe-.42],[zo.x0-at.westBack+.5,0,0],[0,2.6,4.4],ge.ROOF),jl(t,[zo.x1,Cr+.16,at.northCol-Pe-.42],[at.eastBack+.5-zo.x1,0,0],[0,2.6,4.4],ge.ROOF),jl(t,[zo.x0-.3,zo.top+.16,at.northCol-Pe-.42],[zo.x1-zo.x0+.6,0,0],[0,1.4,3],ge.ROOF),Pg(t,[zo.x0-.3,zo.top+.16,at.northCol-Pe-.42],[zo.x0-.3,zo.top+1.56,at.northCol-Pe+2.58],[zo.x0-.3,zo.top+.16,at.northCol-Pe+2.58],[-1,0,0],ge.BRICK),Pg(t,[zo.x1+.3,zo.top+.16,at.northCol-Pe-.42],[zo.x1+.3,zo.top+1.56,at.northCol-Pe+2.58],[zo.x1+.3,zo.top+.16,at.northCol-Pe+2.58],[1,0,0],ge.BRICK),Jn(t,zo.x0,Cr,at.northCol+Pe,zo.x1,zo.top,at.northCol+2.6,ge.BRICK);for(let[n,a]of[[at.cx-9.8,at.northBack+.6],[at.cx+9.4,at.northBack+.4],[at.cx-4.6,at.northBack+1]])Jn(t,n-.4,12.5,a-.4,n+.4,15.4,a+.4,ge.BRICK),Jn(t,n-.52,15.4,a-.52,n+.52,15.62,a+.52,ge.STONE);let o=(n,a,s)=>{let i=n==="west"?-1:1,c=[];Og.forEach((d,u)=>{let v=Xl(d);u===1?c.push({c:v,y0:0,y1:2.9,w:1.4,door:!0}):c.push({c:v,y0:1,y1:2.75,w:1.05}),c.push({c:v,y0:3.85,y1:5.45,w:1.05})}),Cg(t,n,{u0:at.south,u1:at.northCol-Pe,top:()=>cs,arches:[],bays:Og,cols:[],win:[7.45,8.85],extraWindows:c,noEnds:!0,cornice:[[at.south,at.northCol-Pe,cs]]}),Jn(t,a,0,at.south,s+i*(Pe+.12),cs,at.northBack+.3,ge.BRICK);let h=s-i*Pe;Jn(t,h,0,at.south,h-i*.06,.55,at.northCol-Pe,ge.STONE);let f=s-i*(Pe+.42);jl(t,[f,cs+.16,at.south],[0,0,at.northCol-Pe-at.south],[a-f+i*.4,1.9,0],ge.ROOF)};o("west",at.westBack,at.westCol),o("east",at.eastBack,at.eastCol);let r=ls.x1+.7;Jn(t,13.65,7.4,at.south-.02,r,7.62,at.south+.14,ge.STONE),Jn(t,13.65,10.4,at.south-.02,r,10.6,at.south+.38,ge.STONE),jl(t,[13.65,10.6,at.south+.38],[r-13.65,0,0],[0,2.2,-5],ge.ROOF)}function Pg(t,e,o,r,n,a){let s=[a,0,0];t.tri(t.vert(e,n,s),t.vert(o,n,s),t.vert(r,n,s))}function jl(t,e,o,r,n){let a=Dh([o[1]*r[2]-o[2]*r[1],o[2]*r[0]-o[0]*r[2],o[0]*r[1]-o[1]*r[0]]),s=a[1]<0?a.map(h=>-h):a,i=(h,f)=>[e[0]+o[0]*h+r[0]*f,e[1]+o[1]*h+r[1]*f,e[2]+o[2]*h+r[2]*f];xc(t,i(0,0),i(1,0),i(1,1),i(0,1),s,[n,0,0]);let c=.08;xc(t,i(0,0),i(1,0),[i(1,0)[0],i(1,0)[1]-c,i(1,0)[2]],[i(0,0)[0],i(0,0)[1]-c,i(0,0)[2]],Dh([-r[0],0,-r[2]]),[n,0,0])}function F8(t){let e=at.westBack,o=at.eastBack,r=at.south,n=at.northBack,a=36,s=22,i=[];for(let c=0;c<=a;c++){i.push([]);for(let h=0;h<=s;h++){let f=[e+(o-e)*c/a,0,r+(n-r)*h/s];i[c].push(t.vert(f,[0,1,0],[ge.GROUND,0,0]))}}for(let c=0;c<a;c++)for(let h=0;h<s;h++)t.tri(i[c][h],i[c+1][h],i[c+1][h+1]),t.tri(i[c][h],i[c+1][h+1],i[c][h+1])}var Wl=.46,ai=.58,ni=[[-.5,0],[-.52,.45],[-.46,.78],[-.3,.95],[0,1],[.3,.95],[.46,.78],[.52,.45],[.5,0]];function G8(t,e,o){let r=ri+o,n=(t>0?Xo.x1-at.cx:at.cx-Xo.x0)-si-o,a=ri+o,s=(e>0?Xo.z1-at.cz:at.cz-Xo.z0)-si-o,i=Ih+o,c=Math.sqrt(i*i-r*r),h=Math.sqrt(i*i-a*a),f=[[r,c],[r,s],[n,s],[n,a],[h,a]],d=Math.atan2(a,h),u=Math.atan2(c,r);for(let v=1;v<10;v++){let l=d+(u-d)*v/10;f.push([Math.cos(l)*i,Math.sin(l)*i])}return f.map(([v,l])=>[at.cx+t*v,at.cz+e*l])}function H8(t,e,o){let r=o[0]-e[0],n=o[1]-e[1],a=Math.hypot(r,n),s=r/a,i=n/a,c=-i,h=s,f=Wl*.5,d=-f,u=a+f,v=[],l=Math.max(1,Math.ceil((u-d)/1));for(let p=0;p<=l;p++){let m=d+(u-d)*p/l,g=[];for(let x=0;x<ni.length;x++){let[y,w]=ni[x],_=Math.min(ni.length-2,x),M=ni[Math.max(0,x-1)],k=ni[Math.min(ni.length-1,x+1)],R=(k[0]-M[0])*Wl,F=(k[1]-M[1])*ai,C=-R,H=Math.hypot(F,C)||1,I=[e[0]+s*m+c*y*Wl,w*ai,e[1]+i*m+h*y*Wl],V=[c*(-F/H),-C/H,h*(-F/H)];g.push(t.vert(I,V[1]<-.2?[c*Math.sign(y),.3,h*Math.sign(y)]:V,[ge.HEDGE,0,0]))}v.push(g)}for(let p=0;p<l;p++)for(let m=0;m<ni.length-1;m++)t.tri(v[p][m],v[p+1][m],v[p+1][m+1]),t.tri(v[p][m],v[p+1][m+1],v[p][m+1]);for(let[p,m]of[[0,-1],[l,1]]){let g=v[p],x=t.vert([e[0]+s*(p?u:d),ai*.5,e[1]+i*(p?u:d)],[s*m,0,i*m],[ge.HEDGE,0,0]);for(let y=0;y<g.length-1;y++)t.tri(x,g[y],g[y+1])}}function U8(t){for(let e of[-1,1])for(let o of[-1,1]){let r=G8(e,o,.3);for(let n=0;n<r.length;n++)H8(t,r[n],r[(n+1)%r.length])}}function B8(t){let e=at.cx,o=at.cz,r=()=>[ge.STONE,0,0];t.lathe([[1.45,0,1],[1.45,.14,1],[1.12,.14,1],[1.12,.3,1],[0,.3]],e,o,8,{mat:r}),t.lathe([[.76,.3,1],[.8,.38,1],[.74,.44],[.76,.7],[.82,.9],[.8,1.02,1],[.88,1.06,1],[.88,1.18,1],[.6,1.18,1],[.6,.98]],e,o,24,{mat:r}),t.lathe([[.6,.98,1],[0,.98]],e,o,16,{mat:()=>[ge.DARK,0,0]});let n={mat:()=>[ge.IRON,0,0]};t.tube([[e-.72,1.1,o],[e-.72,1.9,o],[e-.7,2.3,o]],()=>.035,8,6,n),t.tube([[e+.72,1.1,o],[e+.72,1.9,o],[e+.7,2.3,o]],()=>.035,8,6,n);let a=[];for(let s=0;s<=10;s++){let i=Math.PI*s/10;a.push([e-Math.cos(i)*.7,2.3+Math.sin(i)*.45,o])}t.tube(a,()=>.03,20,6,n),t.tube([[e-.45,2.25,o],[e,2.38,o],[e+.45,2.25,o]],()=>.02,8,5,n),t.ellipsoid([e,2.32,o],[.03,.13,.13],6,10,n);for(let s of[-1,1]){let i=[];for(let c=0;c<=12;c++){let h=c/12*Math.PI*1.6,f=.16*(1-c/16);i.push([e+s*(.72-.18+Math.cos(h)*f*s*-1+0),1.95+Math.sin(h)*f,o])}t.tube(i,()=>.016,16,5,n)}}function j8(t){for(let[e,o]of bd)t.lathe([[.26,0,1],[.3,.06],[.36,.42],[.38,.5,1],[.44,.52,1],[.44,.64,1],[.38,.66,1],[.37,.6]],e,o,20,{mat:()=>[ge.POT,0,0]}),t.lathe([[.37,.6,1],[0,.6]],e,o,12,{mat:()=>[ge.SOIL,0,0]}),t.tube([[e,.6,o],[e+.02,1,o-.01],[e-.01,1.45,o+.02]],r=>.045-r*.02,6,6,{mat:()=>[ge.BARK,0,0]})}function W8(t){let[e,,o]=is.c,r=Wg(7),n=[[-1.8,.4,3.6],[1.6,-.9,3.9],[.4,1.9,3.4],[-.6,-1.7,4.2],[2.1,1.2,3.2]];for(let[a,s,i]of n){let c=[[e+a*.05,0,o+s*.05],[e+a*.25,i*.35,o+s*.25],[e+a*.6,i*.7,o+s*.6],[e+a,i,o+s],[e+a*1.35+(r()-.5),i+1.4,o+s*1.35+(r()-.5)]];t.tube(c,h=>.2*(1-h*.75),14,9,{mat:()=>[ge.BARK,0,0]});for(let h=0;h<2;h++){let f=.55+h*.2,d=[e+a*f,i*f,o+s*f],u=r()*Math.PI*2;t.tube([d,[d[0]+Math.cos(u)*1.3,d[1]+.9,d[2]+Math.sin(u)*1.3],[d[0]+Math.cos(u)*2.3,d[1]+1.4+r(),d[2]+Math.sin(u)*2.3]],v=>.08*(1-v*.7),8,6,{mat:()=>[ge.BARK,0,0]})}}for(let a of va.filter(s=>s.spindle))t.tube([[a.c[0],0,a.c[2]],[a.c[0],1.4,a.c[2]]],()=>.12,3,7,{mat:()=>[ge.BARK,0,0]})}function V8(t){let e=()=>[ge.FARBRICK,0,0],o=()=>[ge.LEAD,0,0],r=(a,s,i,c,h,f)=>{t.lathe([[i+.3,20,1],[i+.3,c-1.2,1],[i+.8,c-.9,1],[i+.8,c,1],[i,c,1]],a,s,28,{mat:e});let d=[];for(let v=0;v<=12;v++){let l=v/12*Math.PI/2,p=Math.cos(l)*i,m=Math.sin(l)*h;f&&(p*=1-.18*Math.sin(l*2)),d.push([Math.max(p,i*.12),c+m])}t.lathe(d,a,s,28,{mat:o});let u=c+h;t.lathe([[i*.13,u-.2,1],[i*.13,u+3,1],[i*.18,u+3.2,1],[i*.02,u+6.4]],a,s,10,{mat:o})};Jn(t,14,0,104,52,26,150,ge.FARBRICK),t.lathe([[3,26],[.1,32]],33,108,4,{mat:e}),r(26,124,7.2,33,9.5,!0),r(40.5,116,6,31,8,!0),r(16.5,117,5.5,30,7.2,!0),t.lathe([[6.4,20,1],[6.4,34,1],[6.9,34.4,1],[6,34.4,1],[.6,46.5,1],[.15,50]],33,132,24,{mat:o});let n=(a,s,i)=>{Jn(t,a-1.8,0,s-1.8,a+1.8,i,s+1.8,ge.FARBRICK),t.lathe([[1.9,i,1],[1.6,i+3.5,1],[1.2,i+3.5,1],[1.2,i+6,1],[.9,i+6.2,1],[.05,i+13]],a,s,8,{mat:e})};n(20.5,109,36),n(46.5,112,38)}function X8(t){let o=[at.cx,0,at.cz],r=24,n=10,a=[];for(let s=0;s<=r;s++){a.push([]);let i=-Math.PI*.62+Math.PI*1.24*s/r;for(let c=0;c<=n;c++){let h=Math.PI/2*(c/n)-.05,f=[Math.sin(i)*Math.cos(h),Math.sin(h),Math.cos(i)*Math.cos(h)],d=[o[0]+f[0]*420,o[1]+f[1]*420,o[2]+f[2]*420];a[s].push(t.vert(d,[-f[0],-f[1],-f[2]],[ge.SKY,0,0]))}}for(let s=0;s<r;s++)for(let i=0;i<n;i++)t.tri(a[s][i],a[s+1][i],a[s+1][i+1]),t.tri(a[s][i],a[s+1][i+1],a[s][i+1])}function Y8(){let t=[],e=[],o=[],r=[],n=E8.createBuilder(t,e,o,r);return F8(n),D8(n),U8(n),B8(n),j8(n),W8(n),n.save(),n.translate(gc[0],0,gc[1]),V8(n),n.restore(),X8(n),{position:t,normal:e,elements:o,attr:r}}var jg=[[[13.65,0,ls.z0-.7],[ls.x1+.7,10.6,at.south]],[[at.westBack,fs,at.northCol-Pe],[at.eastBack,Cr,at.northBack+3.4]],[[zo.x0,Cr,at.northCol-Pe],[zo.x1,zo.top,at.northCol+2.6]],[[at.westBack,0,at.south],[at.westCol+Pe,cs,at.northBack+.3]],[[at.eastCol-Pe,0,at.south],[at.eastBack,cs,at.northBack+.3]],[[14+gc[0],0,104+gc[1]],[52+gc[0],26,150+gc[1]]]];function K8(t,e,o,r){let n=.001,a=1e9;for(let s=0;s<3;s++){if(Math.abs(e[s])<1e-9){if(t[s]<o[s]||t[s]>r[s])return!1;continue}let i=(o[s]-t[s])/e[s],c=(r[s]-t[s])/e[s];if(i>c&&([i,c]=[c,i]),n=Math.max(n,i),a=Math.min(a,c),n>a)return!1}return!0}function $h(t,e,o,r){let n=[(t[0]-o[0])/r[0],(t[1]-o[1])/r[1],(t[2]-o[2])/r[2]],a=[e[0]/r[0],e[1]/r[1],e[2]/r[2]],s=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],i=n[0]*a[0]+n[1]*a[1]+n[2]*a[2],c=n[0]*n[0]+n[1]*n[1]+n[2]*n[2]-1,h=i*i-s*c;if(h<=0)return 0;let f=Math.sqrt(h),d=Math.max(0,(-i-f)/s),u=(-i+f)/s;return Math.max(0,u-d)}function xd(t){for(let[e,o]of jg)if(K8(t,pa,e,o))return 0;return 1}function Wg(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let o=e;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}function Q8(){let t=[],e=[],o=[],r=[],n=[],a=[],s=[],i=Wg(21),c=(l,p,m,g,x,y,w)=>{let _=t.length/3;for(let[M,k]of[[-1,-1],[1,-1],[1,1],[-1,1]])t.push(...l),e.push(M,k),o.push(p,m,g),r.push(...x),n.push(...y),a.push(...w);s.push(_,_+1,_+2,_,_+2,_+3)},h=(l,p)=>{let m=1;for(let g of va){if(g===p||!g.shadow)continue;let x=$h(l,pa,g.c,g.r);x>0&&(m*=Math.exp(-x*.9))}return m},f=va.map(l=>({...l,pts:null}));for(let l of f)for(let p=0;p<l.n;p++){let m;do m=[i()*2-1,i()*2-1,i()*2-1];while(m[0]*m[0]+m[1]*m[1]+m[2]*m[2]>1);let g=Math.hypot(m[0],m[1],m[2])||1,x=Math.pow(i(),.35)*.98,y=[m[0]/g*x,m[1]/g*x,m[2]/g*x];if(l.spindle){let I=y[1],V=Math.sqrt(Math.max(.02,1-I*I))*(I>0?1-I*.55:1+I*.25),dt=Math.hypot(y[0],y[2])||1,$t=V*Math.min(1,dt*1.4);y=[y[0]/dt*$t,I,y[2]/dt*$t]}l.magnolia&&y[1]<-.55&&(y[1]=-.55+(y[1]+.55)*.35);let w=[l.c[0]+y[0]*l.r[0],l.c[1]+y[1]*l.r[1],l.c[2]+y[2]*l.r[2]],_,M;if(l.magnolia){let I=0;for(let $t of Gg)I=Math.max(I,$h(w,pa,$t.c,$t.r));_=Math.exp(-I*1.1);let V=1;for(let $t of va)if(!$t.magnolia&&$t.shadow){let kt=$h(w,pa,$t.c,$t.r);kt>0&&(V*=Math.exp(-kt*.9))}_*=xd(w)*V;let dt=N8(w,is.c);M=Dh([dt[0]/is.r[0]+y[0]*.5,dt[1]/is.r[1]+y[1]*.5,dt[2]/is.r[2]+y[2]*.5]),x=Math.min(1,Math.hypot(dt[0]/is.r[0],dt[1]/is.r[1],dt[2]/is.r[2])*.6+x*.4)}else{let I=$h(w,pa,l.c,l.r);_=Math.exp(-I*(l.spindle?2.2:1.25)),_*=xd(w)*h(w,va[f.indexOf(l)]),M=Dh([y[0]/l.r[0],y[1]/l.r[1],y[2]/l.r[2]])}let k=Math.max(0,M[0]*pa[0]+M[1]*pa[1]+M[2]*pa[2]),R=.25+.75*Math.pow(x,1.5)*(.65+.35*(M[1]*.5+.5)),A=l.size[0]+(l.size[1]-l.size[0])*i(),F=.85+i()*.3,C=l.leaf.map(I=>I*F),H=l.cell;l.cell===3&&i()<.35&&(H=2),c(w,A,H,i()*Math.PI*2,[_,R,.35+.65*k],C,l.bloom)}for(let[l,p]of Hg){let m=i()<.5;for(let g=0;g<3;g++){let x=[l+(i()-.5)*.7,.28+i()*.22,p+(i()-.5)*.5],y=xd(x)*h(x,null);c(x,.32+i()*.12,i()<.7?3:2,i()*6.28,[y,.6+i()*.3,.8],[.75,.9,.6],m?[1,.55,.75]:[.85,.8,1.15])}}let d=s.length/6,u=Array.from({length:d},(l,p)=>p);for(let l=d-1;l>0;l--){let p=Math.floor(i()*(l+1));[u[l],u[p]]=[u[p],u[l]]}let v=[];for(let l of u)for(let p=0;p<6;p++)v.push(s[l*6+p]);return{center:t,corner:e,par:o,light:r,tint:n,bloom:a,elements:v}}var Ae=t=>t.toFixed(4),Kl=t=>`vec3(${Ae(t[0])}, ${Ae(t[1])}, ${Ae(t[2])})`,Vg=`
const vec3 SUN = ${Kl(pa)};
const vec3 SUN_COL = vec3(1.95, 1.76, 1.48);
const vec3 SKY_AMB = vec3(0.47, 0.53, 0.63);
const vec3 BOUNCE = vec3(0.42, 0.36, 0.28);

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float hash3(vec3 p) { return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
float noise(vec2 p) {
	vec2 i = floor(p), f = fract(p);
	f = f * f * (3.0 - 2.0 * f);
	return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
}
float noise3(vec3 p) {
	vec3 i = floor(p), f = fract(p);
	f = f * f * (3.0 - 2.0 * f);
	float a = mix(mix(hash3(i), hash3(i + vec3(1,0,0)), f.x), mix(hash3(i + vec3(0,1,0)), hash3(i + vec3(1,1,0)), f.x), f.y);
	float b = mix(mix(hash3(i + vec3(0,0,1)), hash3(i + vec3(1,0,1)), f.x), mix(hash3(i + vec3(0,1,1)), hash3(i + vec3(1,1,1)), f.x), f.y);
	return mix(a, b, f.z);
}
float fbm(vec2 p) {
	float s = 0.0, a = 0.5;
	for (int i = 0; i < 5; i++) { s += a * noise(p); p *= 2.03; a *= 0.5; }
	return s;
}

vec3 tonemap(vec3 c) {
	c *= 0.92;
	vec3 x = c * (2.51 * c + 0.03) / (c * (2.43 * c + 0.59) + 0.14);
	return clamp(x, 0.0, 1.0);
}
`,Z8=jg.map(([t,e])=>`if (hitBox(ro, SUN, ${Kl(t)}, ${Kl(e)})) return 0.0;`).join(`
	`),J8=va.filter(t=>t.shadow).map(t=>`tr *= crownShade(ro, ${Kl(t.c)}, ${Kl(t.r)}, ${t.spindle?"1.8":"1.0"});`).join(`
	`),tk=(t,e,o,r,n,a,s,i,c)=>`
	{
		float t = (${Ae(e)} - ro.${t}) / SUN.${t};
		if (t > 0.0) {
			vec3 q = ro + SUN * t;
			float u = q.${t==="z"?"x":"z"};
			if (q.y < ${Ae(fs)} && u > ${Ae(o-Pe)} && u < ${Ae(o+r*n+Pe)}) {
				float k = floor((u - ${Ae(o)}) / ${Ae(r)});
				float a = ${Ae(o)} + k * ${Ae(r)} + (k < 0.5 ? ${Ae(a)} : 0.02);
				float b = ${Ae(o)} + (k + 1.0) * ${Ae(r)} - (k > ${Ae(n-1.5)} ? ${Ae(s)} : 0.02);
				float c = 0.5 * (a + b), r = 0.5 * (b - a) - 0.2;
				float d = abs(u - c);
				float sill = abs(k - ${Ae(i)}) < 0.5 ? 0.0 : ${Ae(Vl+.09)};
				bool hole = (q.y > sill && q.y < ${Ae(L0)} && u > a && u < b && d < 0.5 * (b - a) - 0.17)
					|| (q.y >= ${Ae(L0)} && d * d + (q.y - ${Ae(L0)}) * (q.y - ${Ae(L0)}) < r * r);
				if (!hole && ${c}) return 0.0;
			}
		}
	}`,Fh=ri+.3,Gh=ri+.3,Ql=Ih+.3,$g=Xo.x1-at.cx-si-.3,ek=Xo.z1-at.cz-si-.3,ok=at.cz-Xo.z0-si-.3,nk=Math.sqrt(Ql*Ql-Fh*Fh),rk=Math.sqrt(Ql*Ql-Gh*Gh),ak=[[at.cx,at.cz,.86,1.18],[at.cx,at.cz,1.25,.3],...bd.map(([t,e])=>[t,e,.42,.65])].map(([t,e,o,r])=>`if (hitCyl(ro, vec2(${Ae(t)}, ${Ae(e)}), ${Ae(o)}, ${Ae(r)})) return 0.0;`).join(`
	`),sk=`
float segDist(vec2 p, vec2 a, vec2 b) {
	vec2 pa = p - a, ba = b - a;
	float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
	return length(pa - ba * h);
}

// distance to the nearest hedge line
float hedgeDist(vec2 xz) {
	vec2 q = abs(xz - vec2(${Ae(at.cx)}, ${Ae(at.cz)}));
	float b1 = xz.y > ${Ae(at.cz)} ? ${Ae(ek)} : ${Ae(ok)};
	vec2 A = vec2(${Ae(Fh)}, ${Ae(nk)}), Bp = vec2(${Ae(Fh)}, b1), C = vec2(${Ae($g)}, b1);
	vec2 D = vec2(${Ae($g)}, ${Ae(Gh)}), E = vec2(${Ae(rk)}, ${Ae(Gh)});
	float d = min(min(segDist(q, A, Bp), segDist(q, Bp, C)), min(segDist(q, C, D), segDist(q, D, E)));
	float ang = atan(q.y, q.x);
	if (ang > atan(E.y, E.x) && ang < atan(A.y, A.x)) d = min(d, abs(length(q) - ${Ae(Ql)}));
	return d;
}

bool hitCyl(vec3 ro, vec2 c, float r, float h) {
	if (ro.y > h) return false;
	vec2 oc = ro.xz - c, d = SUN.xz;
	float A = dot(d, d), B = dot(oc, d), C = dot(oc, oc) - r * r;
	float disc = B * B - A * C;
	if (disc <= 0.0) return false;
	float s = sqrt(disc);
	float tf = (-B + s) / A;
	if (tf <= 0.0) return false;
	float tn = max((-B - s) / A, 0.0);
	return ro.y + SUN.y * tn < h;
}

bool hitBox(vec3 ro, vec3 rd, vec3 a, vec3 b) {
	vec3 inv = 1.0 / rd;
	vec3 t0 = (a - ro) * inv, t1 = (b - ro) * inv;
	vec3 lo = min(t0, t1), hi = max(t0, t1);
	float tn = max(max(lo.x, lo.y), lo.z), tf = min(min(hi.x, hi.y), hi.z);
	return tf > max(tn, 0.001);
}

float crownShade(vec3 ro, vec3 c, vec3 r, float k) {
	vec3 oc = (ro - c) / r, dd = SUN / r;
	float A = dot(dd, dd), B = dot(oc, dd), C = dot(oc, oc) - 1.0;
	float disc = B * B - A * C;
	if (disc <= 0.0) return 1.0;
	float s = sqrt(disc);
	float t0 = max(0.0, (-B - s) / A), t1 = (-B + s) / A;
	float d = max(0.0, t1 - t0);
	if (d <= 0.0) return 1.0;
	// dappled: gaps in the leaves let spots of sun through
	vec3 q = ro + SUN * (t0 + t1) * 0.5;
	float gaps = smoothstep(0.62, 0.8, noise3(q * 1.7)) * 0.8;
	return mix(exp(-d * 1.1 * k), 1.0, gaps * exp(-d * 0.25));
}

float sunVisible(vec3 p, vec3 n) {
	vec3 ro = p + n * 0.03;
	${Z8}
	${tk("z",at.northCol,at.westCol,yd,Hh,Pe+Yl,Pe+Yl,Dg,"ro.z > "+Ae(at.northCol-Pe))}
	// on lighter settings only the buildings cast shadows
	if (gardenDetail < 0.5) return 1.0;
	${ak}
	if (ro.y < ${Ae(ai)} && ro.x > ${Ae(Xo.x0)} && ro.x < ${Ae(Xo.x1)}) {
		for (int i = 1; i <= 4; i++) {
			float t = float(i) / 4.0 * (${Ae(ai)} - ro.y) / SUN.y;
			vec3 q = ro + SUN * t;
			float w = ${Ae(Wl*.5)} * sqrt(max(0.0, 1.0 - pow(q.y / ${Ae(ai)}, 4.0)));
			if (hedgeDist(q.xz) < w) return 0.0;
		}
	}
	float tr = 1.0;
	${J8}
	return tr;
}
`,ik=`
precision highp float;
${Ig}
varying vec3 v_pos, v_normal, v_attr, v_eye;
uniform float time, gardenDetail;
${Vg}
${sk}

vec3 skyColor(vec3 d) {
	float h = max(d.y, 0.0);
	vec3 zen = vec3(0.20, 0.42, 0.80);
	vec3 hor = vec3(0.70, 0.80, 0.90);
	vec3 c = mix(hor, zen, pow(h, 0.55));
	float s = max(dot(d, SUN), 0.0);
	c += vec3(1.0, 0.9, 0.7) * (pow(s, 8.0) * 0.25 + pow(s, 200.0) * 2.0);
	// clouds on a high plane
	if (d.y > 0.02 && gardenDetail > 0.5) {
		vec2 uv = d.xz / d.y * 0.9 + vec2(time * 0.004, 0.0);
		float cl = fbm(uv * 0.55 + 3.0);
		cl = smoothstep(0.44, 0.78, cl) * smoothstep(0.02, 0.25, d.y);
		float lit = 0.88 + 0.12 * fbm(uv * 0.55 + 3.3);
		c = mix(c, vec3(1.0, 0.99, 0.97) * lit, cl * 0.9);
	}
	return c;
}

vec3 brick(vec2 q, float pink) {
	float row = floor(q.y / 0.072);
	float off = mod(row, 2.0) * 0.14;
	float col = floor((q.x + off) / 0.28);
	vec2 f = vec2(fract((q.x + off) / 0.28), fract(q.y / 0.072));
	float h = hash(vec2(col, row));
	vec3 c = mix(vec3(0.62, 0.36, 0.24), vec3(0.76, 0.52, 0.34), h);
	c = mix(c, vec3(0.70, 0.40, 0.32), pink);
	c *= 0.82 + 0.3 * hash(vec2(row, col * 1.7));
	float m = step(f.x, 0.05) + step(f.y, 0.14);
	vec3 mortar = vec3(0.74, 0.68, 0.58);
	vec3 b = mix(c, mortar, clamp(m, 0.0, 1.0) * 0.7);
	// old lime wash in patches, and some weathering
	float wash = smoothstep(0.5, 0.8, noise(q * vec2(0.5, 0.9)));
	b = mix(b, vec3(0.80, 0.66, 0.50), wash * 0.4);
	b *= 0.9 + 0.2 * noise(q * vec2(0.13, 0.4));
	return b;
}

void main() {
	float kind = floor(v_attr.x + 0.5);
	vec3 N = normalize(v_normal);
	vec3 V = v_eye - v_pos;
	float dist = length(V);
	V /= dist;

	if (kind == ${ge.SKY}.0) {
		gl_FragColor = vec4(toNight(tonemap(skyColor(normalize(v_pos - v_eye)) * 1.05), 0.45), 1.0);
		return;
	}

	vec3 P = v_pos;
	vec3 base = vec3(0.7);
	float spec = 0.0;
	float ao = 1.0;
	float far = 0.0;

	// coordinates along a surface for patterns
	vec2 wq = abs(N.x) > 0.5 ? P.zy : (abs(N.z) > 0.5 ? P.xy : P.xz);
	float lod = smoothstep(14.0, 40.0, dist);

	if (kind == ${ge.GROUND}.0) {
		bool yard = P.x > ${Ae(Xo.x0)} && P.x < ${Ae(Xo.x1)} && P.z < ${Ae(Xo.z1)};
		if (!yard) {
			// stone slabs under the arcades
			vec2 g = P.xz / 0.62;
			vec2 fg = fract(g);
			float h = hash(floor(g));
			base = mix(vec3(0.66, 0.60, 0.52), vec3(0.76, 0.70, 0.62), h);
			base *= 1.0 - 0.25 * (step(fg.x, 0.03) + step(fg.y, 0.03)) * (1.0 - lod);
			spec = 0.15;
		} else {
			float ex = min(P.x - ${Ae(Xo.x0)}, ${Ae(Xo.x1)} - P.x);
			float ez = min(P.z - ${Ae(Xo.z0)}, ${Ae(Xo.z1)} - P.z);
			float edge = min(ex, ez);
			float dx = abs(P.x - ${Ae(at.cx)}), dz = abs(P.z - ${Ae(at.cz)});
			float rc = length(vec2(dx, dz));
			if (edge < ${Ae(si)}) {
				// brick path laid in rows, with a stone kerb
				vec2 q = ex < ez ? P.zx : P.xz;
				base = brick(q * vec2(1.0, 2.6), 0.4) * 0.9;
				if (abs(edge - ${Ae(si)}) < 0.08) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (rc < ${Ae(Ih)}) {
				// brick in rings round the wellhead
				float ang = atan(P.z - ${Ae(at.cz)}, P.x - ${Ae(at.cx)});
				vec2 q = vec2(ang * rc, rc);
				base = brick(q * vec2(1.0, 2.6), 0.5) * 0.92;
				if (abs(rc - ${Ae(Ih)}) < 0.1) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (dx < ${Ae(ri)} || dz < ${Ae(ri)}) {
				// pale gravel
				float g = noise(P.xz * 40.0) * 0.6 + noise(P.xz * 9.0) * 0.4;
				base = mix(vec3(0.66, 0.58, 0.46), vec3(0.86, 0.79, 0.66), mix(g, 0.5, lod));
				base *= 0.94 + 0.12 * noise(P.xz * 1.3);
				float e = min(${Ae(ri)} - min(dx, dz), 1.0);
				base *= 0.9 + 0.1 * smoothstep(0.0, 0.2, e);
			} else {
				// lawn
				float n1 = noise(P.xz * 0.35), n2 = noise(P.xz * 2.1), n3 = noise(P.xz * 23.0);
				base = mix(vec3(0.20, 0.36, 0.10), vec3(0.36, 0.52, 0.16), n1 * 0.6 + n2 * 0.4);
				base = mix(base, vec3(0.42, 0.50, 0.20), smoothstep(0.6, 0.85, n2) * 0.35);
				base *= 0.82 + 0.3 * mix(n3, 0.5, lod);
				// mown stripes
				base *= 0.96 + 0.06 * step(0.5, fract(P.x / 1.6));
				// daisies
				float d = step(0.985, hash(floor(P.xz * 9.0))) * (1.0 - lod);
				base = mix(base, vec3(0.95, 0.94, 0.86), d * 0.8);
			}
			ao *= 0.72 + 0.28 * smoothstep(0.0, 1.6, edge);
			ao *= 0.55 + 0.45 * smoothstep(0.2, 0.75, hedgeDist(P.xz));
			ao *= 0.6 + 0.4 * smoothstep(0.85, 1.6, length(P.xz - vec2(${Ae(at.cx)}, ${Ae(at.cz)})));
		}
	} else if (kind == ${ge.BRICK}.0) {
		float pink = smoothstep(0.4, 0.6, noise(wq * 0.05 + 7.0));
		base = mix(brick(wq, 0.25 * pink), vec3(0.68, 0.46, 0.33), lod * 0.6);
		base *= 1.0 - 0.18 * smoothstep(0.0, 1.5, 1.6 - P.y) * noise(wq * 1.5);
		ao *= 0.78 + 0.22 * smoothstep(0.0, 1.2, P.y);
	} else if (kind == ${ge.STONE}.0) {
		float n = noise(wq * 3.0) * 0.5 + noise(wq * 0.7) * 0.5;
		base = mix(vec3(0.74, 0.70, 0.62), vec3(0.86, 0.83, 0.76), n);
		spec = 0.1;
	} else if (kind == ${ge.MARBLE}.0) {
		// red Verona marble
		float n = noise3(P * vec3(5.0, 1.5, 5.0)) * 0.6 + noise3(P * 14.0) * 0.4;
		base = mix(vec3(0.56, 0.32, 0.25), vec3(0.68, 0.42, 0.33), n);
		base = mix(base, vec3(0.80, 0.66, 0.56), smoothstep(0.66, 0.74, noise3(P * 9.0 + 3.0)) * 0.35);
		spec = 0.35;
	} else if (kind == ${ge.HEDGE}.0) {
		float n = noise3(P * 9.0) * 0.55 + noise3(P * 2.5) * 0.45;
		base = mix(vec3(0.05, 0.16, 0.04), vec3(0.22, 0.38, 0.10), n);
		ao *= 0.55 + 0.45 * smoothstep(0.0, ${Ae(ai)}, P.y) * (0.6 + 0.4 * n);
		N = normalize(N + vec3(noise3(P * 13.0) - 0.5, 0.0, noise3(P * 13.0 + 5.0) - 0.5) * 0.9);
	} else if (kind == ${ge.POT}.0) {
		base = mix(vec3(0.66, 0.34, 0.20), vec3(0.75, 0.44, 0.28), noise(wq * 6.0));
	} else if (kind == ${ge.SOIL}.0) {
		base = vec3(0.20, 0.14, 0.09);
	} else if (kind == ${ge.ROOF}.0) {
		// rows of curved clay tiles
		float along = abs(N.x) > abs(N.z) ? P.z : P.x;
		float rib = abs(fract(along / 0.24) - 0.5) * 2.0;
		float h = hash(vec2(floor(along / 0.24), floor(P.y / 0.42)));
		base = mix(vec3(0.58, 0.30, 0.20), vec3(0.72, 0.44, 0.30), h);
		base = mix(base, vec3(0.45, 0.42, 0.36), smoothstep(0.55, 0.85, noise(P.xz * 0.6)) * 0.4);
		base *= mix(0.62 + 0.38 * (1.0 - rib * rib), 0.85, lod);
	} else if (kind == ${ge.SHUTTER}.0) {
		float slat = fract(P.y / 0.07);
		base = vec3(0.17, 0.30, 0.20) * (0.75 + 0.25 * smoothstep(0.1, 0.5, slat));
	} else if (kind == ${ge.PANE}.0) {
		vec3 R = reflect(-V, N);
		base = vec3(0.03, 0.035, 0.04);
		vec3 refl = skyColor(normalize(vec3(R.x, abs(R.y), R.z))) * 0.25;
		gl_FragColor = vec4(toNight(tonemap(base + refl * (0.4 + 0.6 * pow(1.0 - abs(dot(N, V)), 3.0))), 0.45), 1.0);
		return;
	} else if (kind == ${ge.PLASTER}.0) {
		base = mix(vec3(0.82, 0.76, 0.64), vec3(0.88, 0.83, 0.72), noise(wq * 1.3));
		// a darker dado on the back walls
		if (abs(N.y) < 0.5 && P.y < 1.1) base *= 0.82;
	} else if (kind == ${ge.BARK}.0) {
		base = mix(vec3(0.30, 0.27, 0.24), vec3(0.45, 0.42, 0.38), noise3(P * vec3(8.0, 2.0, 8.0)));
	} else if (kind == ${ge.IRON}.0) {
		base = vec3(0.07, 0.07, 0.07);
		spec = 0.4;
	} else if (kind == ${ge.LEAD}.0) {
		base = mix(vec3(0.30, 0.33, 0.35), vec3(0.40, 0.43, 0.45), noise(P.xy * 0.5));
		// ribs on the domes
		float a = atan(P.z - floor(P.z / 50.0) * 50.0, 1.0);
		base *= 0.9 + 0.1 * step(0.5, fract(a * 6.0));
		far = 1.0;
	} else if (kind == ${ge.FARBRICK}.0) {
		base = mix(vec3(0.66, 0.46, 0.34), vec3(0.74, 0.54, 0.40), noise(P.xy * 0.3));
		// a row of small arches under the eaves and some dark windows
		far = 1.0;
	} else if (kind == ${ge.DARK}.0) {
		base = vec3(0.025, 0.022, 0.02);
	}

	// ---------- light ----------

	// in the arcade walks the sky is mostly hidden
	bool walk = (P.x < ${Ae(at.westCol)} || P.x > ${Ae(at.eastCol)} || P.z > ${Ae(at.northCol)}) && P.y < ${Ae(fs+.05)} && P.z > ${Ae(at.south-.1)} && P.z < ${Ae(at.northBack+.5)};
	float skyVis = 0.55 + 0.45 * N.y;
	if (walk) {
		float depth = P.z > ${Ae(at.northCol)} ? P.z - ${Ae(at.northCol)} : (P.x < ${Ae(at.westCol)} ? ${Ae(at.westCol)} - P.x : P.x - ${Ae(at.eastCol)});
		skyVis = mix(0.36, 0.14, clamp(depth / 3.0, 0.0, 1.0)) * (0.8 + 0.2 * N.y);
		if (N.y < -0.5) skyVis = 0.18;
	}

	float ndl = max(dot(N, SUN), 0.0);
	float sun = ndl > 0.0 ? sunVisible(P, normalize(v_normal)) : 0.0;

	vec3 amb = SKY_AMB * skyVis + BOUNCE * (0.35 - 0.25 * N.y) * (walk ? 1.4 : 1.0);
	vec3 col = base * (amb * ao + SUN_COL * ndl * sun);

	// a little sheen on stone and marble
	vec3 H = normalize(SUN + V);
	col += SUN_COL * spec * pow(max(dot(N, H), 0.0), 40.0) * sun * 0.6;

	// distant buildings fade into the air
	float haze = 1.0 - exp(-dist / (far > 0.5 ? 160.0 : 400.0));
	col = mix(col, vec3(0.68, 0.76, 0.86), haze * (far > 0.5 ? 0.5 : 0.25));

	gl_FragColor = vec4(toNight(tonemap(col), 0.45), 1.0);
}`,ck=`
precision highp float;
uniform mat4 proj, view;
uniform float yScale;
attribute vec3 position, normal, attr;
varying vec3 v_pos, v_normal, v_attr, v_eye;
void main() {
	v_pos = position;
	v_normal = normal;
	v_attr = attr;
	vec3 t = view[3].xyz;
	v_eye = -vec3(dot(view[0].xyz, t), dot(view[1].xyz, t), dot(view[2].xyz, t));
	vec3 p = position;
	p.y *= yScale;
	gl_Position = proj * view * vec4(p, 1.0);
}`,lk=`
precision highp float;
uniform mat4 proj, view;
uniform float yScale, time;
attribute vec3 center, par, light, tint, bloom;
attribute vec2 corner;
varying vec2 v_uv;
varying vec3 v_light, v_tint, v_bloom, v_pos;
void main() {
	vec3 c = center;
	// a gentle breeze
	float sway = sin(time * 1.3 + c.x * 0.7 + c.z * 0.5) * 0.025 * max(c.y - 1.0, 0.0) / 6.0;
	c.x += sway;
	c.z += sway * 0.6;
	c.y *= yScale;
	vec4 vp = view * vec4(c, 1.0);
	float s = par.x, rot = par.z;
	vec2 o = vec2(cos(rot) * corner.x - sin(rot) * corner.y, sin(rot) * corner.x + cos(rot) * corner.y);
	vp.xy += o * s * 0.5 * vec2(1.0, yScale);
	gl_Position = proj * vp;
	float cell = par.y;
	vec2 cuv = corner * 0.5 + 0.5;
	v_uv = (vec2(mod(cell, 2.0), floor(cell / 2.0)) + vec2(cuv.x, 1.0 - cuv.y)) * 0.5;
	v_light = light;
	v_tint = tint;
	v_bloom = bloom;
	v_pos = center;
}`,fk=`
precision highp float;
${Ig}
uniform sampler2D leaves;
varying vec2 v_uv;
varying vec3 v_light, v_tint, v_bloom, v_pos;
${Vg}
void main() {
	vec4 t = texture2D(leaves, v_uv);
	if (t.a < 0.5) discard;
	float white = smoothstep(0.45, 0.7, min(t.r, min(t.g, t.b)));
	float lum = dot(t.rgb, vec3(0.33));
	vec3 base = mix(t.rgb * v_tint * 1.15, v_bloom * (0.7 + 0.3 * lum), white);
	float sun = v_light.x, occl = v_light.y, facing = v_light.z;
	// leaves glow a little when the sun is behind them
	vec3 col = base * (SKY_AMB * 0.75 * occl + BOUNCE * 0.25 + SUN_COL * sun * (0.25 + 0.75 * facing) * 0.95);
	col += vec3(0.9, 0.95, 0.8) * sun * facing * 0.05;
	gl_FragColor = vec4(toNight(tonemap(col), 0.45), 1.0);
}`;function hk(t,e,o){let r=t.texture({data:[[o]],min:"linear",mag:"linear"});return fetch(e).then(n=>{if(!n.ok)throw new Error("Could not load "+e);return n.blob()}).then(n=>createImageBitmap(n,{premultiplyAlpha:"none"})).then(n=>r({data:n,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(n=>console.error(n)),r}wd.exports=t=>{let e=Y8(),o=Q8(),r=hk(t,"res/garden/foliage.webp",[0,0,0,0]),n=Date.now(),a=()=>gd.motion?window.__streetClock!==void 0?window.__streetClock:(Date.now()-n)/1e3:20,s=t({frag:ik,vert:ck,attributes:{position:e.position,normal:e.normal,attr:e.attr},elements:new Uint32Array(e.elements),uniforms:{time:a,gardenDetail:()=>gd.gardenDetail}}),i=t({frag:fk,vert:lk,attributes:{center:o.center,corner:o.corner,par:o.par,light:o.light,tint:o.tint,bloom:o.bloom},elements:new Uint32Array(o.elements),uniforms:{leaves:r,time:a},cull:{enable:!1},count:()=>Math.floor(o.elements.length*gd.leafShare/6)*6});return function(){s(),i()}};wd.exports.layout={G:at,YARD:Xo,SUN:pa}});var Jg=At((Lz,Zg)=>{"use strict";var uk=c0().GLSL,dk=Gs(),{C:Qg}=k0(),N0=Qg.x1+.35,Sd=Qg.zc,_d=[N0-7.3,2,Sd],Yg=5.2*Math.PI/180,Kg=2100,pk=725,vk=1288,mk=1450,gk=2576,$a=Sd-3.2,jh=Sd+3.3,Md=N0+5,kd=N0+11.7,yc=3.9,Zl=N0+22.7,Uh=40;function xk(){let t=[],e=[],o=[],r=[],n=dk.createBuilder(t,e,o,r),a=(f,d,u,v,l,p)=>{let m=[];for(let g=0;g<=l;g++){m.push([]);for(let x=0;x<=p;x++){let y=[0,1,2].map(w=>f[w]+d[w]*g/l+u[w]*x/p);m[g].push(n.vert(y,v,[0,0,0]))}}for(let g=0;g<l;g++)for(let x=0;x<p;x++)n.tri(m[g][x],m[g+1][x],m[g+1][x+1]),n.tri(m[g][x],m[g+1][x+1],m[g][x+1])},s=jh-$a,i=.7;a([N0-i,0,$a],[Md-N0+i,0,0],[0,0,s],[0,1,0],6,4);let c=kd-Md,h=Math.hypot(c,yc);return a([Md,0,$a],[c,yc,0],[0,0,s],[-yc/h,c/h,0],6,4),a([kd,yc,$a],[Zl-kd,0,0],[0,0,s],[0,1,0],6,4),a([N0-i,0,$a],[Zl-N0+i,0,0],[0,Uh,0],[0,0,1],12,12),a([N0-i,0,jh],[Zl-N0+i,0,0],[0,Uh,0],[0,0,-1],12,12),a([Zl,0,$a],[0,Uh,0],[0,0,s],[-1,0,0],8,4),a([N0-i,Uh,$a],[Zl-N0+i,0,0],[0,0,s],[0,-1,0],6,4),{position:t,normal:e,elements:o,attr:r}}var j0=t=>t.toFixed(5),Bh=[[N0+3.4,3.7,$a+.01,1],[N0+8.6,4.1,jh-.01,-1],[N0+14.8,yc+3.3,$a+.01,1],[N0+19.6,yc+3.6,jh-.01,-1]],yk=`
precision highp float;
${uk}
uniform sampler2D photo;
uniform float time;
varying vec3 v_pos;
varying vec3 v_normal;
const int NLAMP = ${Bh.length};
vec4 LAMP[NLAMP];

void main() {
	${Bh.map((t,e)=>`LAMP[${e}] = vec4(${j0(t[0])}, ${j0(t[1])}, ${j0(t[2])}, ${j0(t[3])});`).join(`
	`)}
	vec3 d = v_pos - vec3(${j0(_d[0])}, ${j0(_d[1])}, ${j0(_d[2])});
	float c = ${j0(Math.cos(Yg))}, s = ${j0(Math.sin(Yg))};
	float fw = d.x * c + d.y * s;
	float up = -d.x * s + d.y * c;
	fw = max(fw, 0.05);
	vec2 px = vec2(${j0(pk)} + ${j0(Kg)} * d.z / fw, ${j0(vk)} - ${j0(Kg)} * up / fw);
	vec2 uv = px / vec2(${j0(mk)}, ${j0(gk)});
	vec2 cuv = clamp(uv, vec2(0.002), vec2(0.998));
	vec3 col = texture2D(photo, cuv).rgb;
	// beyond the edge of the photo, soften what is smeared in from the edge
	float outside = length(max(abs(uv - 0.5) - 0.5, 0.0));
	// (a very blurred sample there, so it reads as a wall in shade, not as streaks)
	vec3 soft = texture2D(photo, cuv, 7.0).rgb * vec3(0.95, 0.9, 0.82);
	col = mix(col, soft, smoothstep(0.0, 0.06, outside));
	// the photo is a little dark for a sunny day
	col = pow(col, vec3(0.9)) * 1.08;
	vec3 lit = toNight(col, 0.28);
	// the street's lamps: old iron lanterns on brackets high on the house
	// walls, burning low; warm pools on the walls and the paving under them
	float lampK = mix(0.22, 1.0, night);
	vec3 albedo = pow(col, vec3(1.1)) * 1.3 + 0.03;
	for (int i = 0; i < ${Bh.length}; i++) {
		vec4 L = LAMP[i];                       // x, y, z, side (+1 left wall, -1 right)
		vec3 d = L.xyz - v_pos;
		float dd = dot(d, d);
		float fl = 0.92 + 0.05 * sin(time * 7.3 + float(i) * 2.1) + 0.03 * sin(time * 17.0 + float(i));
		// the wall it hangs on is lit across, the paving from above
		float face = v_normal.y > 0.5 ? max(normalize(d).y, 0.0) : 0.35 + 0.65 * max(dot(v_normal, normalize(d)), 0.0);
		lit += albedo * vec3(1.0, 0.62, 0.30) * face * fl * lampK * 3.2 / (0.6 + dd * 0.45);
	}
	gl_FragColor = vec4(lit, 1.0);
}`,bk=`
precision highp float;
uniform mat4 proj, view;
uniform float yScale;
attribute vec3 position, normal;
varying vec3 v_pos;
varying vec3 v_normal;
void main() {
	v_pos = position;
	v_normal = normal;
	vec3 p = position;
	p.y *= yScale;
	gl_Position = proj * view * vec4(p, 1.0);
}`;Zg.exports=t=>{let e=xk(),o=t.texture({data:[[[120,105,85]]],min:"linear",mag:"linear"});fetch("res/florence/photo.jpg").then(i=>{if(!i.ok)throw new Error("Could not load the Florence photo");return i.blob()}).then(i=>createImageBitmap(i)).then(i=>o({data:i,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(i=>console.error(i));let r=t({frag:yk,vert:bk,attributes:{position:e.position,normal:e.normal},elements:new Uint32Array(e.elements),uniforms:{photo:o},cull:{enable:!1}}),n={pos:[],nrm:[],k:[],idx:[]},a=(i,c,h)=>{let[f,d,u]=i,v=[[[1,0,0],[0,1,0],[0,0,1]],[[-1,0,0],[0,1,0],[0,0,-1]],[[0,0,1],[0,1,0],[-1,0,0]],[[0,0,-1],[0,1,0],[1,0,0]],[[0,1,0],[0,0,1],[1,0,0]],[[0,-1,0],[0,0,1],[-1,0,0]]];for(let[l,p,m]of v){let g=n.pos.length/3;for(let[x,y]of[[-1,-1],[1,-1],[1,1],[-1,1]])n.pos.push(f+l[0]*c[0]+p[0]*x*c[0]+m[0]*y*c[0],d+l[1]*c[1]+p[1]*x*c[1]+m[1]*y*c[1],u+l[2]*c[2]+p[2]*x*c[2]+m[2]*y*c[2]),n.nrm.push(...l),n.k.push(h);n.idx.push(g,g+1,g+2,g,g+2,g+3)}};for(let i of Bh){let c=i[3],h=i[2]+c*.42;a([i[0],i[1],h],[.11,.17,.11],1);for(let f of[-1,1])for(let d of[-1,1])a([i[0]+f*.11,i[1],h+d*.11],[.014,.18,.014],0);a([i[0],i[1]+.2,h],[.15,.03,.15],0),a([i[0],i[1]+.27,h],[.05,.05,.05],0),a([i[0],i[1]-.19,h],[.09,.025,.09],0),a([i[0],i[1]+.34,i[2]+c*.21],[.015,.015,.21],0),a([i[0],i[1]+.15,i[2]+c*.03],[.04,.24,.03],0)}let s=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec3 position, normal;
		attribute float k;
		varying vec3 v_n, v_pos;
		varying float v_k;
		void main() {
			v_n = normal; v_k = k; v_pos = position;
			vec3 p = position; p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`
		precision highp float;
		uniform float night, time;
		varying vec3 v_n, v_pos;
		varying float v_k;
		void main() {
			float lampK = mix(0.22, 1.0, night);
			float fl = 0.92 + 0.06 * sin(time * 7.3 + v_pos.x) + 0.03 * sin(time * 17.0);
			if (v_k > 0.5) {
				gl_FragColor = vec4(vec3(1.0, 0.62, 0.30) * (0.45 + 1.5 * lampK) * fl, 1.0);
				return;
			}
			// old black iron, catching a little of its own light from below
			vec3 c = vec3(0.025, 0.022, 0.02) * (0.6 + 0.4 * max(v_n.y, 0.0));
			c += vec3(0.30, 0.18, 0.08) * lampK * max(-v_n.y, 0.0) * 0.4;
			gl_FragColor = vec4(c, 1.0);
		}`,attributes:{position:n.pos,normal:n.nrm,k:n.k},elements:new Uint16Array(n.idx),cull:{enable:!1}});return function(){r(),s()}}});var rx=At((Nz,nx)=>{"use strict";var wk=c0().GLSL,{A:Vh,BENCH:zd,SHAFT:Ed,TREE:Jl,oculusGLSL:_k}=Nr(),Mk=Ar(),Wh=Jl.sxz,tx=Jl.sy,ex=Jl.yaw;function kk(t){let e=new DataView(t),o=e.getUint32(4,!0),r=e.getUint32(8,!0),n=e.getUint32(12,!0),a=[0,1,2].map(u=>e.getFloat32(16+u*4,!0)),s=[0,1,2].map(u=>e.getFloat32(28+u*4,!0)),i=40,c=new Uint16Array(t,i,o*3);i+=o*6;let h=new Uint16Array(t,i,o*2);i+=o*4;let f=new Int8Array(t,i,o*3);i+=o*3,i=i+3&-4;let d=new Uint32Array(t,i,n);return{nV:o,nWood:r,nI:n,mn:a,sz:s,pos:c,uv:h,nrm:f,idx:d}}function Sk(t){let e=new Float32Array(t.nV*3),o=new Float32Array(t.nV*3),r=new Float32Array(t.nV*2),n=new Float32Array(t.nV),a=Math.cos(ex),s=Math.sin(ex);for(let i=0;i<t.nV;i++){let c=(t.mn[0]+t.pos[i*3]/65535*t.sz[0])*Wh,h=(t.mn[1]+t.pos[i*3+1]/65535*t.sz[1])*tx,f=(t.mn[2]+t.pos[i*3+2]/65535*t.sz[2])*Wh;e[i*3]=Vh.cx+a*c+s*f,e[i*3+1]=zd.soil+.02+h,e[i*3+2]=Vh.zc-s*c+a*f;let d=t.nrm[i*3]/127/Wh,u=t.nrm[i*3+1]/127/tx,v=t.nrm[i*3+2]/127/Wh,l=Math.hypot(d,u,v)||1;d/=l,u/=l,v/=l,o[i*3]=a*d+s*v,o[i*3+1]=u,o[i*3+2]=-s*d+a*v,r[i*2]=t.uv[i*2]/65535,r[i*2+1]=t.uv[i*2+1]/65535,n[i]=i>=t.nWood?1:0}return{position:e,normal:o,uv:r,leaf:n,elements:t.idx}}function ox(t,e,o,r){let n=t.texture({data:[[r]],min:"linear",mag:"linear"});return fetch(e).then(a=>{if(!a.ok)throw new Error("Could not load "+e);return a.blob()}).then(a=>createImageBitmap(a,{premultiplyAlpha:"none"}).catch(()=>new Promise((s,i)=>{let c=new Image;c.onload=()=>s(c),c.onerror=i,c.src=URL.createObjectURL(a)}))).then(a=>n({data:a,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",...o})).catch(a=>console.error(a)),n}var h0=t=>t.toFixed(4),bc=Jl.crownC,wc=Jl.crownR,Ek=`
precision highp float;
uniform mat4 proj, view;
uniform float yScale, time;
attribute vec3 position, normal;
attribute vec2 uv;
attribute float leaf;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_leaf, v_shade;
varying vec3 v_eye;

const vec3 SHAFT = vec3(${h0(Ed[0])}, ${h0(Ed[1])}, ${h0(Ed[2])});

void main() {
	vec3 p = position;
	// the air in the court is never quite still. The whole tree leans
	// with it, slowly, more the higher and the further out on a limb
	// (wood and leaves together, so every leaf stays on its twig) ...
	float h = max(p.y - 1.2, 0.0);
	vec2 out2 = p.xz - vec2(${h0(Vh.cx)}, ${h0(Vh.zc)});
	float reach = h * (0.5 + 0.35 * length(out2));
	float breeze = sin(time * 0.43 + p.x * 0.35 + p.z * 0.27) * 0.6 + sin(time * 0.19 + 1.7) * 0.4;
	p.x += breeze * 0.010 * reach;
	p.z += (sin(time * 0.37 + p.z * 0.41 + 2.1) * 0.6 + sin(time * 0.23) * 0.4) * 0.008 * reach;
	// ... each bough nods on its own ...
	float bough = sin(time * 0.9 + floor(p.y * 0.8) * 2.4 + atan(out2.y, out2.x) * 2.0);
	p.y += bough * 0.006 * reach;
	// ... and now and then a breath passes through the crown and the
	// leaves it touches shiver
	float gustWave = smoothstep(0.55, 1.0, sin(time * 0.31 + p.x * 0.6 - p.z * 0.4 + p.y * 0.3));
	float shiver = 0.25 + 0.75 * gustWave;
	p.x += leaf * sin(time * 3.1 + p.y * 7.3 + p.z * 5.9) * 0.009 * shiver * min(h, 2.5);
	p.y += leaf * sin(time * 2.7 + p.x * 6.1 + p.z * 4.3) * 0.006 * shiver * min(h, 2.5);
	p.z += leaf * cos(time * 2.3 + p.x * 6.7) * 0.008 * shiver * min(h, 2.5);
	v_pos = p;
	v_n = normal;
	v_uv = uv;
	v_leaf = leaf;
	vec3 tv = view[3].xyz;
	v_eye = -vec3(dot(view[0].xyz, tv), dot(view[1].xyz, tv), dot(view[2].xyz, tv));
	v_eye.y *= yScale;

	// how much of the crown lies between this point and the oculus
	vec3 cc = vec3(${h0(bc[0])}, ${h0(bc[1])}, ${h0(bc[2])});
	vec3 cr = vec3(${h0(wc[0])}, ${h0(wc[1])}, ${h0(wc[2])});
	vec3 oc = (p - cc) / cr, dd = SHAFT / cr;
	float a = dot(dd, dd), b = dot(oc, dd), c = dot(oc, oc) - 1.0;
	float disc = b * b - a * c;
	float inside = 0.0;
	if (disc > 0.0) {
		float sq = sqrt(disc);
		inside = max(0.0, (-b + sq) / a - max(0.0, (-b - sq) / a));
	}
	v_shade = exp(-inside * 1.3);

	p.y *= yScale;
	gl_Position = proj * view * vec4(p, 1.0);
}`,us=Za(),zk=`
precision highp float;
${wk}
uniform float time;
${us.lanternGLSL(us.TREE_LANTERN)}
const vec3 LANTERN_POS = vec3(${us.LANTERNS[us.TREE_LANTERN[0]].x.toFixed(3)}, ${us.LANTERNS[us.TREE_LANTERN[0]].y.toFixed(3)}, ${us.LANTERNS[us.TREE_LANTERN[0]].z.toFixed(3)});
uniform sampler2D leaves, bark;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_leaf, v_shade;
varying vec3 v_eye;

${_k()}

float hash3(vec3 p) {
	p = fract(p * 0.1031);
	p += dot(p, p.yzx + 33.33);
	return fract((p.x + p.y) * p.z);
}
float noise3(vec3 p) {
	vec3 i = floor(p), g = fract(p);
	g = g * g * (3.0 - 2.0 * g);
	return mix(mix(mix(hash3(i), hash3(i + vec3(1, 0, 0)), g.x), mix(hash3(i + vec3(0, 1, 0)), hash3(i + vec3(1, 1, 0)), g.x), g.y),
	           mix(mix(hash3(i + vec3(0, 0, 1)), hash3(i + vec3(1, 0, 1)), g.x), mix(hash3(i + vec3(0, 1, 1)), hash3(i + vec3(1, 1, 1)), g.x), g.y), g.z);
}

float oculusSun(vec3 p) {
	return oculusOpen(p);
}

void main() {
	vec3 N = normalize(v_n);
	vec3 V = normalize(v_eye - v_pos);
	vec3 base;
	float rough = 0.0;
	if (v_leaf > 0.5) {
		vec4 t = texture2D(leaves, v_uv);
		// (seen from across the hall a leaf is smaller than a pixel, and a
		// hard cut-out would thin the crown away to nothing: further off,
		// more of each leaf is kept, so the tree stays as full as it is)
		float away = length(v_eye - v_pos);
		if (t.a < mix(0.5, 0.2, smoothstep(2.5, 11.0, away))) discard;
		base = t.rgb * vec3(0.92, 1.0, 0.86);
		// no two sprays of leaves are the same green: some younger and
		// yellower, some older and darker, a few just turning
		float kind = noise3(v_pos * 1.7);
		float fine = noise3(v_pos * 9.0);
		base *= mix(vec3(0.80, 0.86, 0.78), vec3(1.12, 1.10, 0.92), kind);
		base = mix(base, base * vec3(1.25, 1.02, 0.62), smoothstep(0.80, 0.97, fine) * 0.55);
		base *= 0.9 + 0.2 * fine;
		if (!gl_FrontFacing) N = -N;
	} else {
		// bark from the three sides, blended by the normal
		vec3 w = abs(N);
		w = pow(w, vec3(4.0));
		w /= (w.x + w.y + w.z);
		vec3 q = v_pos * 0.9;
		base = texture2D(bark, q.yz).rgb * w.x + texture2D(bark, q.xz).rgb * w.y + texture2D(bark, q.xy).rgb * w.z;
		// the furrows of the bark are deep and dark, the ridges catch the
		// light; a little moss low down and on the side away from the sun
		float ridge = dot(base, vec3(0.333));
		rough = smoothstep(0.18, 0.55, ridge);
		base *= 0.74 + 0.36 * rough;
		float moss = smoothstep(0.45, 0.75, noise3(v_pos * vec3(2.3, 1.1, 2.3))) * (1.0 - smoothstep(0.4, 2.6, v_pos.y)) * (0.4 + 0.6 * max(-dot(N, SHAFT), 0.0));
		base = mix(base, base * vec3(0.78, 0.95, 0.60) + vec3(0.006, 0.014, 0.003), moss * 0.4);
	}

	// depth in the crown: darker deep inside
	vec3 rel = (v_pos - vec3(${h0(bc[0])}, ${h0(bc[1])}, ${h0(bc[2])})) / vec3(${h0(wc[0])}, ${h0(wc[1])}, ${h0(wc[2])});
	float outer = clamp(length(rel), 0.0, 1.0);
	float ao = mix(0.38, 1.0, outer * outer) * (0.75 + 0.25 * smoothstep(0.4, 2.0, v_pos.y));
	// and the trunk darkens where it meets the soil
	ao *= 0.6 + 0.4 * smoothstep(${h0(zd.soil)}, ${h0(zd.soil+.5)}, v_pos.y);

	// soft daylight in the court, coming mostly from above
	float up = 0.6 + 0.4 * N.y;
	float light = (0.40 + 0.24 * up) * ao;

	// the shaft of sun through the oculus, broken into flecks by the
	// leaves above: they drift as the crown moves
	float dapple = mix(1.0, smoothstep(0.30, 0.62, noise3(v_pos * 3.1 + vec3(time * 0.07, 0.0, time * 0.05))), 0.75 * (1.0 - v_shade * 0.6));
	float lit = oculusSun(v_pos) * v_shade * dapple;
	float ndl = v_leaf > 0.5 ? (0.35 + 0.65 * abs(dot(N, SHAFT))) : max(dot(N, SHAFT), 0.0) * (0.6 + 0.4 * rough);
	float sun = lit * ndl;
	light += sun * 1.5;

	vec3 col = base * light * vec3(1.03, 1.0, 0.94);
	if (v_leaf > 0.5) {
		// a leaf with the sun behind it lights up from inside, most of all
		// when you look towards the sun through it
		float behind = max(dot(-N, SHAFT), 0.0);
		float towards = pow(max(dot(-V, SHAFT), 0.0), 2.0);
		col += base * vec3(0.80, 0.95, 0.30) * lit * (0.30 + 0.9 * behind * (0.4 + 1.6 * towards));
		// and its waxy face throws a small cold glint of the sky
		vec3 H = normalize(SHAFT + V);
		col += vec3(0.9, 0.95, 1.0) * pow(max(dot(N, H), 0.0), 42.0) * (0.10 + 0.55 * lit) * ao;
		// the edge of the crown against the bright dome: a thin rim
		col += base * pow(1.0 - abs(dot(N, V)), 3.0) * 0.18 * outer;
	}
	// at night the little lantern on the bench glints on the bark and
	// the undersides of the leaves
	vec3 lan = lanternLight(v_pos, v_leaf > 0.5 ? normalize(LANTERN_POS - v_pos) : N);
	gl_FragColor = vec4(toNight(col, 1.15) + base * lan * 1.2, 1.0);
}`;nx.exports=t=>{let e=null,o=ox(t,"res/tree/leaves.webp",{wrapS:"clamp",wrapT:"clamp"},[60,80,40,0]),r=ox(t,"res/tree/bark.jpg",{wrapS:"repeat",wrapT:"repeat"},[90,80,70]),n=Date.now();return fetch("res/tree.bin").then(a=>{if(!a.ok)throw new Error("Could not load the tree");return a.arrayBuffer()}).then(a=>{let s=Sk(kk(a));e=t({vert:Ek,frag:zk,attributes:{position:s.position,normal:s.normal,uv:s.uv,leaf:s.leaf},elements:s.elements,uniforms:{leaves:o,bark:r,time:()=>Mk.motion?typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-n)/1e3:0},cull:{enable:!1}})}).catch(a=>console.error(a)),function(){e&&e()}}});var Qh=At((Rz,cx)=>{"use strict";var _c=es(),Ak="res/audio/go-tomorrow.mp3",Tk="res/audio/go-tomorrow.json",sx="gallery-sound",Xh=[_c.PIANO.x,1,_c.PIANO.z],Lk=_c.R,rr=!0;try{localStorage.getItem(sx)==="off"&&(rr=!1)}catch(t){}var $n=null,E0=null,tf=null,ef=null,ds=null,Ia=null,ii=!1,Yh=null,ax=[],Nk=(typeof performance!="undefined"?performance.now():0)/1e3;function Rk(t){let e=Math.floor(t.sampleRate*2.6),o=t.createBuffer(2,e,t.sampleRate),r=12345,n=()=>(r=r*16807%2147483647,r/10737418235e-1-1);for(let a=0;a<2;a++){let s=o.getChannelData(a),i=0;for(let c=0;c<e;c++){let h=c/t.sampleRate,f=.25+.6*Math.exp(-h*2.2);i+=(n()-i)*f,s[c]=i*Math.pow(1-c/e,2.2)*Math.exp(-h*1.5)*(h<.012?h/.012:1)}}return o}function Ok(){if($n)return;$n=new Audio,$n.src=Ak,$n.loop=!0,$n.preload="auto",$n.crossOrigin="anonymous";let t=window.AudioContext||window.webkitAudioContext;if(!t){$n.volume=.2;return}try{E0=new t;let e=E0.createMediaElementSource($n);ds=E0.createBiquadFilter(),ds.type="lowpass",ds.frequency.value=1500,ds.Q.value=.4,tf=E0.createGain(),tf.gain.value=0,ef=E0.createGain(),ef.gain.value=0;let o=E0.createConvolver();o.buffer=Rk(E0),Ia=E0.createGain(),Ia.gain.value=rr?1:0,e.connect(ds),ds.connect(tf),tf.connect(Ia),ds.connect(o),o.connect(ef),ef.connect(Ia),Ia.connect(E0.destination)}catch(e){E0=null,$n.volume=.2}}function ix(){if(ii||!rr)return;Ok();let t=()=>$n.play().then(()=>{ii=!0}).catch(()=>{});E0&&E0.state==="suspended"?E0.resume().then(t,t):t()}typeof window!="undefined"&&(["pointerdown","pointerup","touchend","keydown","click"].forEach(t=>window.addEventListener(t,ix,{capture:!0,passive:!0})),document.addEventListener("visibilitychange",()=>{!$n||!ii||(document.hidden?$n.pause():rr&&$n.play().catch(()=>{}))}),fetch(Tk).then(t=>t.ok?t.json():null).then(t=>{if(!t)return;let e=o=>{let r=o.map(s=>s[2]).sort((s,i)=>s-i),n=r[Math.floor(r.length*.03)]||0,a=r[Math.floor(r.length*.97)]||1;return o.map(s=>({t:s[0],w:s[1],x:Math.max(0,Math.min(1,(s[2]-n)/Math.max(a-n,.001)))}))};Yh={left:e(t.l),right:e(t.r),level:t.e,dur:t.d}}).catch(()=>{}));var Kh={AT:Xh,listen(t){if(!E0||!ii)return;let e=t[0]-Xh[0],o=t[2]-Xh[2],r=Math.hypot(e,o,(t[1]-Xh[1])*.5),n=Math.hypot(t[0]-_c.C.x,t[2]-_c.C.z)<Lk+.4||t[0]<-.2&&Math.abs(t[2]-_c.C.z)<4,a,s,i;if(n){let h=Math.max(0,Math.min(1,(r-1.2)/5));a=1-.3*h,s=.22+.16*h,i=16e3}else{let h=5.5/Math.max(r,5.5),f=t[0]>14.2&&t[2]<12?.6:1;a=.5*Math.pow(h,1.5)*f,s=.34*Math.pow(h,.95)*f,i=(650+9e3*Math.pow(h,1.3))*(f<1?.7:1)}let c=E0.currentTime;tf.gain.setTargetAtTime(a,c,.35),ef.gain.setTargetAtTime(s,c,.35),ds.frequency.setTargetAtTime(i,c,.35)},time(){let t=Yh&&Yh.dur||158;return $n&&ii&&!$n.paused||$n&&ii?$n.currentTime%t:((performance.now()/1e3-Nk)%t+t)%t},get cues(){return Yh},get on(){return rr},set(t){rr=!!t;try{localStorage.setItem(sx,rr?"on":"off")}catch(e){}rr?(ix(),$n&&ii&&$n.play().catch(()=>{}),Ia&&Ia.gain.setTargetAtTime(1,E0.currentTime,.2)):Ia?Ia.gain.setTargetAtTime(0,E0.currentTime,.15):$n&&$n.pause(),ax.forEach(e=>e(rr))},toggle(){Kh.set(!rr)},onChange(t){ax.push(t)},button(t){let e='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="M15.5 9a4.2 4.2 0 0 1 0 6M18 6.5a7.8 7.8 0 0 1 0 11"/></svg>',o='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="M16 9.5l5 5M21 9.5l-5 5"/></svg>',r=document.createElement("button");r.type="button",r.className=t+" sound-toggle";let n=()=>{r.innerHTML=rr?e:o,r.setAttribute("aria-label",rr?"Turn the music off":"Turn the music on"),r.title=rr?"Music on":"Music off",r.setAttribute("aria-pressed",rr?"true":"false")};return n(),Kh.onChange(n),["mousedown","pointerdown"].forEach(a=>r.addEventListener(a,s=>s.stopPropagation())),r.addEventListener("click",a=>{a.stopPropagation(),Kh.toggle()}),r}};cx.exports=Kh});var yx=At((Oz,Rd)=>{"use strict";var Ld=c0().GLSL,{A:lx,BENCH:vx,oculusGLSL:mx}=Nr(),fx=Ar(),gx=es(),hx=Qh(),Ck=1.74,Pk=1.877,R0=Ck/Pk,li={x:lx.cx-1.22,z:lx.zc+.02,hipY:vx.seat+.115},sn=(t,e)=>[t[3]*e[0]+t[0]*e[3]+t[1]*e[2]-t[2]*e[1],t[3]*e[1]-t[0]*e[2]+t[1]*e[3]+t[2]*e[0],t[3]*e[2]+t[0]*e[1]-t[1]*e[0]+t[2]*e[3],t[3]*e[3]-t[0]*e[0]-t[1]*e[1]-t[2]*e[2]],ta=t=>[-t[0],-t[1],-t[2],t[3]],vs=(t,e)=>{let o=Math.hypot(t[0],t[1],t[2])||1,r=Math.sin(e/2);return[t[0]/o*r,t[1]/o*r,t[2]/o*r,Math.cos(e/2)]},Zh=(t,e,o)=>sn(vs([0,0,1],o*Math.PI/180),sn(vs([0,1,0],e*Math.PI/180),vs([1,0,0],t*Math.PI/180))),Nd=t=>{let e=Math.hypot(...t)||1;return t.map(o=>o/e)},ma=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],nf=(t,e)=>[t[0]+e[0],t[1]+e[1],t[2]+e[2]],ps=(t,e)=>[t[0]*e,t[1]*e,t[2]*e],Td=(t,e)=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2],t1=t=>Math.hypot(t[0],t[1],t[2]),of=t=>{let e=t1(t)||1;return[t[0]/e,t[1]/e,t[2]/e]},o1=(t,e)=>[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]],$k=(t,e)=>{let o=[t[0],t[1],t[2]],r=ps(o1(o,e),2);return nf(nf(e,ps(r,t[3])),o1(o,r))},Ik=(t,e)=>{let o=o1(t,e),r=1+Td(t,e);return r<1e-6?[0,0,1,0]:Nd([o[0],o[1],o[2],r])};function xr(t,e,o){let[r,n,a,s]=e,i=r*r,c=n*n,h=a*a,f=r*n,d=r*a,u=n*a,v=s*r,l=s*n,p=s*a;return[(1-2*(c+h))*o[0],2*(f+p)*o[0],2*(d-l)*o[0],0,2*(f-p)*o[1],(1-2*(i+h))*o[1],2*(u+v)*o[1],0,2*(d+l)*o[2],2*(u-v)*o[2],(1-2*(i+c))*o[2],0,t[0],t[1],t[2],1]}function t0(t,e){let o=new Array(16);for(let r=0;r<4;r++)for(let n=0;n<4;n++)o[r*4+n]=t[n]*e[r*4]+t[4+n]*e[r*4+1]+t[8+n]*e[r*4+2]+t[12+n]*e[r*4+3];return o}function Ad(t){let e=Math.hypot(t[0],t[1],t[2]),o=Math.hypot(t[4],t[5],t[6]),r=Math.hypot(t[8],t[9],t[10]),n=t[0]/e,a=t[1]/e,s=t[2]/e,i=t[4]/o,c=t[5]/o,h=t[6]/o,f=t[8]/r,d=t[9]/r,u=t[10]/r,v=n+c+u,l;if(v>0){let p=Math.sqrt(v+1)*2;l=[(h-d)/p,(f-s)/p,(a-i)/p,p/4]}else if(n>c&&n>u){let p=Math.sqrt(1+n-c-u)*2;l=[p/4,(i+a)/p,(f+s)/p,(h-d)/p]}else if(c>u){let p=Math.sqrt(1+c-n-u)*2;l=[(i+a)/p,p/4,(d+h)/p,(f-s)/p]}else{let p=Math.sqrt(1+u-n-c)*2;l=[(f+s)/p,(d+h)/p,p/4,(a-i)/p]}return Nd(l)}var e1={LeftUpLeg:[-62,10,0],LeftLeg:[122,0,0],LeftFoot:[30,0,0],RightUpLeg:[0,-3,-2],RightLeg:[4,0,0],RightFoot:[35,-12,0],Neck:[10,0,0],Head:[6,0,0],LeftShoulder:[0,0,6],LeftArm:[-112.4,3.4,62.5],LeftForeArm:[0,-122.6,0],LeftHand:[0,0,-10],RightShoulder:[0,0,0],RightArm:[0,78,-8],RightForeArm:[0,14,0],RightHand:[0,0,0]};for(let t of["Left","Right"]){let e=t==="Left"?-1:1,o=t==="Left"?1:.35;["Index","Middle","Ring","Pinky"].forEach((r,n)=>{e1[t+"Hand"+r+"1"]=[0,0,e*(18+n*6)*o],e1[t+"Hand"+r+"2"]=[0,0,e*(26+n*6)*o],e1[t+"Hand"+r+"3"]=[0,0,e*16*o]})}function ci(t,e,o){let r=t-e;return r-=Math.round(r),Math.exp(-(r/o)*(r/o))}function ux(t){let e=9+20*Math.cos(2*Math.PI*t),o=4+13*ci(t,.14,.07)+57*ci(t,.72,.12),r=5*ci(t,.06,.04)-9*ci(t,.42,.12)+17*ci(t,.62,.05)-3*ci(t,.85,.1),n=-26*ci(t,.58,.06);return{hip:e,knee:o,ankle:r,toe:n}}function qk(t){let e=(t%1+1)%1,o=ux(e),r=ux(e+.5),n=Math.cos(2*Math.PI*e),a=Math.sin(2*Math.PI*e);return{swing:{LeftArm:[16*n,0,0],RightArm:[-16*n,0,0],LeftForeArm:[0,-14-8*Math.max(0,-n),0],RightForeArm:[0,14+8*Math.max(0,n),0]},pose:{Hips:[0,5*a,1.5*Math.cos(4*Math.PI*e)],Spine1:[3,-4*a,0],LeftUpLeg:[-o.hip,0,0],LeftLeg:[o.knee,0,0],LeftFoot:[o.ankle,0,0],LeftToeBase:[o.toe,0,0],RightUpLeg:[-r.hip,0,0],RightLeg:[r.knee,0,0],RightFoot:[r.ankle,0,0],RightToeBase:[r.toe,0,0],LeftArm:[0,0,-78],RightArm:[0,0,78],LeftHand:[0,0,-8],RightHand:[0,0,8]},sway:.022*n}}var dx=`
precision highp float;
uniform mat4 proj, view;
uniform float yScale;
attribute vec3 position, normal;
attribute vec2 uv;
varying vec3 v_pos, v_n, v_eye;
varying vec2 v_uv;
void main() {
	v_pos = position;
	vec3 tt = view[3].xyz;
	v_eye = -vec3(dot(view[0].xyz, tt), dot(view[1].xyz, tt), dot(view[2].xyz, tt));
	v_n = normal;
	v_uv = uv;
	vec3 p = position;
	p.y *= yScale;
	gl_Position = proj * view * vec4(p, 1.0);
}`,n1=Za(),px=`#extension GL_OES_standard_derivatives : enable
precision highp float;
${Ld}
uniform float time;
${gx.roomGLSL()}
${n1.lanternGLSL(n1.TREE_LANTERN)}
uniform sampler2D tex;
uniform float alphaCut, skin, glowLight, kind, alphaScale;
uniform vec3 glowPos;
// in the confessional: the priest's lamp (xyz, strength), and how much of
// the court's own light reaches him (0 there)
uniform vec4 boothLamp;
uniform float court;
// 1 in the stair hall: lit by the candles round the piano
uniform float candle;
varying vec3 v_pos, v_n, v_eye;
varying vec2 v_uv;
${mx()}
float chash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float cnoise(vec2 p) {
	vec2 i = floor(p), g = fract(p);
	g = g * g * (3.0 - 2.0 * g);
	return mix(mix(chash(i), chash(i + vec2(1.0, 0.0)), g.x), mix(chash(i + vec2(0.0, 1.0)), chash(i + vec2(1.0, 1.0)), g.x), g.y);
}
// bends the surface by a height h (no need for the cloth's own directions)
vec3 bump(vec3 N, vec3 p, float h, float k) {
	vec3 dpx = dFdx(p), dpy = dFdy(p);
	float dhx = dFdx(h), dhy = dFdy(h);
	vec3 r1 = cross(dpy, N), r2 = cross(N, dpx);
	float det = dot(dpx, r1);
	vec3 g = sign(det) * (dhx * r1 + dhy * r2);
	return normalize(abs(det) * N - k * g);
}
void main() {
	vec4 t = texture2D(tex, v_uv);
	t.a *= alphaScale;
	if (t.a < alphaCut) discard;
	float gloss = 0.0;
	float hairStreak = 0.5;
	float relief = 0.0;     // stitching and knitting stand up off the cloth
	float scarfK = 0.0;
	// the outfit: a long black wool overcoat, a ribbed roll-neck, pleated
	// pinstripe trousers, a leather belt and shoes, a maroon scarf
	// (scripts/avatar/build_outfit.py makes them)
	if (kind > 0.5) {
		float n = fract(sin(dot(floor(v_uv * vec2(900.0, 900.0)), vec2(12.9898, 78.233))) * 43758.5453);
		if (kind < 1.5) {
			t.rgb = vec3(0.038, 0.037, 0.040) * (0.9 + 0.2 * n);
			gloss = 0.05;
			// where it is sewn: a seam down the middle of the back and one
			// down each side, the hem stitched up, the cuffs stitched round
			float seam = 0.0;
			if (abs(v_uv.x) < 1.0) {
				float sx = min(abs(v_uv.x), abs(abs(v_uv.x) - 0.314));
				seam = (1.0 - smoothstep(0.0006, 0.0020, sx)) * (1.0 - smoothstep(1.50, 1.56, v_uv.y));
				seam = max(seam, 1.0 - smoothstep(0.0012, 0.0032, abs(v_uv.y - 0.385)));
			} else if (abs(v_uv.x) < 8.0) {
				seam = 1.0 - smoothstep(0.0012, 0.0032, abs(v_uv.y - 0.700));
			}
			t.rgb *= 1.0 - 0.5 * seam;
			relief = -seam * 0.0012;
		} else if (kind < 2.5) {
			float rib = abs(fract(v_uv.x / 0.007) - 0.5) * 2.0;
			t.rgb = vec3(0.032, 0.031, 0.034) * (0.75 + 0.45 * smoothstep(0.2, 0.8, rib));
			gloss = 0.02;
		} else if (kind < 3.5) {
			float d = abs(fract(v_uv.x / 0.016) - 0.5) * 0.016;
			float stripe = 1.0 - smoothstep(0.0004, 0.0011, d);
			t.rgb = mix(vec3(0.034, 0.034, 0.037), vec3(0.22, 0.22, 0.24), stripe * 0.75);
			gloss = 0.04;
		} else if (kind < 4.5) {
			bool buckle = abs(v_uv.x) < 0.028;
			t.rgb = buckle ? vec3(0.62, 0.62, 0.64) : vec3(0.025, 0.022, 0.02);
			gloss = buckle ? 0.9 : 0.35;
		} else if (kind < 6.5) {
			float l = dot(t.rgb, vec3(0.33));
			t.rgb = vec3(0.022, 0.02, 0.019) + vec3(0.05) * l * l;
			gloss = 0.55;
		} else if (kind > 8.5) {
			// his hair: sculpted locks (scripts/avatar/character.py). uv.x is
			// the lock's number plus the way round it, uv.y the way along it
			// (-1 marks the close dark cap under the locks)
			if (v_uv.x < -0.5) {
				t.rgb = vec3(0.012, 0.010, 0.009);
				hairStreak = 0.35;
			} else {
				float id = floor(v_uv.x), round_ = fract(v_uv.x);
				float h1 = fract(sin(id * 12.9898) * 43758.5453);
				// the strands that make up a lock: fine lines running its length
				float s1 = sin(round_ * 6.2831 * 9.0 + h1 * 6.0 + v_uv.y * 1.5);
				float s2 = sin(round_ * 6.2831 * 23.0 + h1 * 17.0);
				hairStreak = 0.5 + 0.26 * s1 + 0.20 * s2;
				// black, with the brown in it where a strand lightens; no two
				// locks quite the same, and the ends a shade paler
				t.rgb = vec3(0.085, 0.064, 0.050) * (0.40 + 1.05 * hairStreak) * (0.78 + 0.44 * h1) * (0.85 + 0.30 * v_uv.y);
			}
			gloss = 0.0;
		} else if (kind > 7.5) {
			// socks: fine charcoal wool in narrow ribs
			float rib = abs(fract(v_uv.x * 900.0) - 0.5) * 2.0;
			t.rgb = vec3(0.030, 0.029, 0.033) * (0.78 + 0.32 * smoothstep(0.2, 0.8, rib) + 0.1 * n);
			gloss = 0.02;
		} else {
			// the scarf: thick maroon wool, hand knitted. Each rib is a column
			// of little V stitches; the yarn is heathered, no two rows one red
			scarfK = 1.0;
			float cx = v_uv.x / 0.0074;
			float fx = fract(cx) - 0.5;
			float st = abs(fract(v_uv.y / 0.0080 + abs(fx) * 1.5) - 0.5) * 2.0;
			float ridge = smoothstep(0.0, 0.75, 1.0 - abs(fx) * 2.0);
			float knit = ridge * (0.5 + 0.5 * smoothstep(0.1, 0.9, st));
			// (far off the stitches are smaller than a pixel: their average)
			float near = 1.0 - smoothstep(0.35, 1.1, fwidth(cx));
			knit = mix(0.55, knit, near);
			float heather = fract(sin(dot(floor(vec2(cx, v_uv.y / 0.0080)), vec2(12.9898, 78.233))) * 43758.5453);
			t.rgb = vec3(0.40, 0.050, 0.075) * (0.30 + 0.85 * knit) * (0.84 + 0.30 * heather * near + 0.08 * n);
			relief = knit * 0.0016 * near;
			gloss = 0.0;
		}
	}
	vec3 N = normalize(v_n);
	if (!gl_FrontFacing) N = -N;
	vec3 V = normalize(v_eye - v_pos);
	// cloth is never smooth: it lies in soft folds and creases (long
	// ones down the coat and trousers, shorter across the knit), and a
	// woven surface has a grain that breaks the light up
	float cloth = step(0.5, kind) * (1.0 - step(3.5, kind)) + step(6.5, kind) * (1.0 - step(8.5, kind));
	float isHair = step(8.5, kind);
	vec3 hairT = vec3(0.0, 1.0, 0.0);
	if (cloth > 0.5) {
		float folds = cnoise(v_uv * vec2(34.0, 9.0)) * 0.6 + cnoise(v_uv * vec2(70.0, 22.0) + 5.0) * 0.4;
		float grain = cnoise(v_uv * 520.0);
		float fade = 1.0 - smoothstep(0.0005, 0.004, fwidth(v_uv.x) + fwidth(v_uv.y));
		// (the big folds are modelled; these are the small ones between them)
		N = bump(N, v_pos, folds * 0.007 + grain * 0.0006 * fade + relief, 1.0);
		// the hollows of the folds hold a little shadow
		t.rgb *= 0.86 + 0.28 * folds;
	}
	if (isHair > 0.5 && v_uv.x > -0.5) {
		// the strands run the length of the lock; each one tilts the light
		// a little its own way
		vec3 dpx = dFdx(v_pos), dpy = dFdy(v_pos);
		vec3 along = cross(dpy, N) * dFdx(v_uv.y) + cross(N, dpx) * dFdy(v_uv.y);
		float al = length(along);
		if (al > 1e-7) {
			hairT = along / al;
			N = normalize(N + normalize(cross(N, hairT)) * (hairStreak - 0.5) * 0.75);
		}
	}
	// soft daylight in the court, mostly from above
	float up = 0.55 + 0.45 * N.y;
	float light = (0.36 + 0.22 * up) * mix(0.5, 1.0, court);
	// sun through the glass dome, dappled by the tree
	float ndl = max(dot(N, SHAFT), 0.0);
	float sun = ndl * oculusOpen(v_pos) * treeShade(v_pos) * court;
	light += sun * 1.25;
	// a little light from the glowing brush above his head
	vec3 gl = glowPos - v_pos;
	float gd = length(gl);
	light += glowLight * max(dot(N, gl / gd), 0.0) / (1.0 + 6.0 * gd * gd);
	vec3 col = t.rgb * light * vec3(1.03, 1.0, 0.95);
	// skin: a warm glow where light passes through, and a soft sheen
	col += skin * t.rgb * vec3(0.20, 0.06, 0.03) * (0.4 + sun);
	// (his skin is a puppet's: matte, and the light sinks a little way
	// into it, so its shadows are warm and soft, and where it is thin and
	// turns away from you, ears, nostrils, the edge of a cheek, it glows)
	float thin = pow(1.0 - max(dot(N, V), 0.0), 2.2);
	col += skin * t.rgb * vec3(0.55, 0.16, 0.08) * thin * (0.22 + 0.6 * sun) * (1.0 - candle);
	vec3 H = normalize(SHAFT + V);
	col += vec3(1.0, 0.95, 0.85) * pow(max(dot(N, H), 0.0), 40.0) * sun * (0.06 + 0.1 * skin);
	// polish on leather and metal, and a soft sheen on the cloth
	vec3 R = reflect(-V, N);
	col += vec3(0.9, 0.88, 0.85) * gloss * (pow(max(dot(R, SHAFT), 0.0), 30.0) * (0.3 + sun) + 0.08 * smoothstep(0.2, 1.0, R.y));
	// wool has a nap: where the cloth turns away from you its fibres
	// catch whatever light there is, a soft pale edge, never a shine
	col += vec3(0.11, 0.11, 0.12) * cloth * pow(1.0 - max(dot(N, V), 0.0), 2.6) * (0.35 + light);
	col += vec3(0.05, 0.05, 0.055) * step(0.5, kind) * (1.0 - cloth) * pow(1.0 - max(dot(N, V), 0.0), 3.0);
	// the scarf is soft and hairy: its own red glows along its edges
	col += vec3(0.30, 0.045, 0.06) * scarfK * pow(1.0 - max(dot(N, V), 0.0), 1.8) * (0.3 + light);
	col = toNight(col, 0.85);
	// at the piano: nothing but the candles on the floor round him and
	// the pale light falling from the oculus
	if (candle > 0.5) {
		vec3 spc;
		vec3 rl = roomLight(v_pos, N, V, clamp(gloss, 0.0, 1.0), spc);
		col = t.rgb * rl * mix(1.3, 0.95, skin) + spc * (0.15 + gloss);
		col += skin * t.rgb * vec3(0.16, 0.05, 0.02) * rl;
		col += skin * t.rgb * vec3(0.55, 0.16, 0.08) * pow(1.0 - max(dot(N, V), 0.0), 2.2) * rl * 0.7;
		float edge = pow(1.0 - max(dot(N, V), 0.0), 2.6);
		col += (vec3(0.16) * cloth + vec3(0.05) * (1.0 - cloth)) * edge * rl * 1.6;
		col += vec3(0.30, 0.045, 0.06) * scarfK * pow(1.0 - max(dot(N, V), 0.0), 1.8) * rl;
	}
	// the confessional's lamp, warm, in front of him and to the side, with
	// a soft rim on his hair where it wraps round
	if (boothLamp.w > 0.0) {
		vec3 bl = boothLamp.xyz - v_pos;
		float bd = length(bl);
		float lam = max(dot(N, bl / bd), 0.0);
		float wrap = max(dot(N, bl / bd) * 0.5 + 0.5, 0.0);
		col += t.rgb * vec3(1.0, 0.70, 0.40) * boothLamp.w * (lam * 0.8 + wrap * 0.25) / (1.0 + bd * bd * 1.6);
		col += vec3(1.0, 0.75, 0.45) * boothLamp.w * 0.22 * pow(1.0 - max(dot(N, V), 0.0), 2.5) * wrap;
		// and a little of the booth's light through the brass behind him
		vec3 gl2 = vec3(-1.30, 1.75, 43.62) - v_pos;
		float g2 = length(gl2);
		col += t.rgb * vec3(1.0, 0.78, 0.55) * 2.6 * (max(dot(N, gl2 / g2), 0.0) * 0.8 + 0.1) / (1.0 + g2 * g2 * 3.0);
		col += vec3(1.0, 0.8, 0.6) * 0.06 * pow(1.0 - max(dot(N, V), 0.0), 2.0) * max(dot(N, gl2 / g2), 0.0);
	}
	// at night, the little lantern by his head: warm on his face and coat,
	// and a glint on the leather
	if (isHair > 0.5) {
		// hair shines along its length, not like a surface: a narrow pale
		// band where the light meets the strands square on, and a wider,
		// warmer one beside it
		vec3 Lh = normalize(vec3(0.25, 1.0, 0.2));
		vec3 Hh = normalize(Lh + V);
		float a1 = dot(normalize(hairT + N * (hairStreak - 0.5) * 0.4), Hh);
		float a2 = dot(normalize(hairT - N * 0.28), Hh);
		float band1 = pow(max(1.0 - a1 * a1, 0.0), 26.0);
		float band2 = pow(max(1.0 - a2 * a2, 0.0), 7.0);
		float lit = (candle > 0.5 ? 0.85 : 0.45 + sun) * mix(1.0, 0.4, night) * max(dot(N, Lh) * 0.6 + 0.4, 0.0);
		col += (vec3(0.80, 0.76, 0.70) * band1 * 0.30 + vec3(0.36, 0.24, 0.14) * band2 * 0.20) * lit * (0.5 + hairStreak);
		// and each lock is edged with light where it turns away, which is
		// what separates one from the next
		col += vec3(0.13, 0.11, 0.09) * pow(1.0 - max(dot(N, V), 0.0), 2.0) * lit * (0.6 + 0.8 * hairStreak);
		// the locks sink into shadow between one another
		col *= 0.72 + 0.56 * smoothstep(0.25, 0.8, hairStreak);
	}
	vec3 lan = lanternLight(v_pos, N) * (1.0 - candle);
	col += t.rgb * lan * (1.3 + 1.2 * skin) + lan * gloss * 0.4;
	gl_FragColor = vec4(col, t.a);
}`;function Dk(t,e){let o=t.texture({data:[[[120,100,90,255]]],min:"linear",mag:"linear"});return fetch(e).then(r=>{if(!r.ok)throw new Error("Could not load "+e);return r.blob()}).then(r=>createImageBitmap(r,{premultiplyAlpha:"none"}).catch(()=>new Promise((n,a)=>{let s=new Image;s.onload=()=>n(s),s.onerror=a,s.src=URL.createObjectURL(r)}))).then(r=>o({data:r,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(r=>console.error(r)),o}var xx={w:.13,h:.2},Jh=t=>.011*(1-Math.pow(1-t,3));function Fk(){let t=[],e=[],o=[],r=[],n=[],a=(p,m,g,x,y,w,_)=>{let M=t.length/3;[p,m,g,x].forEach((k,R)=>{t.push(...k),e.push(...y),o.push(..._[R]),r.push(w)}),n.push(M,M+1,M+2,M,M+2,M+3)},{w:s,h:i}=xx,c=i/2,h=[[0,1],[1,1],[1,0],[0,0]],f=-.006,d=s+.001,u=c+.001;a([0,f,-u],[d,f,-u],[d,f,u],[0,f,u],[0,-1,0],1,[[0,1],[1,1],[1,0],[0,0]]),a([0,f+.001,-u],[0,f+.001,u],[d,f+.001,u],[d,f+.001,-u],[0,1,0],2,h),a([-d,f,-u],[0,f,-u],[0,f,u],[-d,f,u],[0,-1,0],2,h),a([-d,f+.001,-u],[-d,f+.001,u],[0,f+.001,u],[0,f+.001,-u],[0,1,0],2,h);let v=8;for(let p of[1,-1]){for(let g=0;g<v;g++){let x=g/v,y=(g+1)/v,w=(.002+x*(s-.002))*p,_=(.002+y*(s-.002))*p,M=Jh(x),k=Jh(y),R=p>0?x:1-x,A=p>0?y:1-y,F=1,C=-(k-M)/(_-w);a([w,M,-c],[_,k,-c],[_,k,c],[w,M,c],[C,F,0],3,[[R,1],[A,1],[A,0],[R,0]]),a([w,f+.001,c],[_,f+.001,c],[_,k,c],[w,M,c],[0,0,1],4,h),a([w,M,-c],[_,k,-c],[_,f+.001,-c],[w,f+.001,-c],[0,0,-1],4,h)}let m=s*p;a([m,f+.001,-c],[m,Jh(1),-c],[m,Jh(1),c],[m,f+.001,c],[p,0,0],4,h)}let l=10;for(let p=0;p<l;p++){let m=p/l,g=(p+1)/l,x=t.length/3;for(let[y,w]of[[m,-c],[g,-c],[g,c],[m,c]])t.push(y,0,w),e.push(0,1,0),o.push(y,(w+c)/i),r.push(5);n.push(x,x+1,x+2,x,x+2,x+3)}return{pos:t,nrm:e,uv:o,kind:r,idx:n}}function Gk(){if(typeof document=="undefined")return null;let t=document.createElement("canvas");t.width=512,t.height=768;let e=t.getContext("2d");e.fillStyle="#ebe5d8",e.fillRect(0,0,512,768);let o=7,r=()=>(o=o*16807%2147483647,o/2147483647),n=(s,i,c,h,f,d,u)=>{for(let v=0;v<d;v++){let l=s+(r()-.5)*c*2,p=i+(r()-.5)*h*2,m=20+r()*60,g=e.createRadialGradient(l,p,0,l,p,m);g.addColorStop(0,`rgba(${f},${u})`),g.addColorStop(1,`rgba(${f},0)`),e.fillStyle=g,e.fillRect(l-m,p-m,m*2,m*2)}},a=e.createRadialGradient(236,280,10,256,300,125);a.addColorStop(0,"#3d4866"),a.addColorStop(1,"#232a3d"),e.fillStyle=a,e.beginPath(),e.arc(256,300,122,0,Math.PI*2),e.fill(),e.fillStyle="#b8873f",e.beginPath(),e.moveTo(64,452);for(let s=64;s<=448;s+=16)e.lineTo(s,446+r()*4);for(let s=448;s>=64;s-=16)e.lineTo(s,466+r()*4);e.fill(),e.strokeStyle="#2b2f3a",e.lineCap="round",[[120,392,500,5],[160,352,530,4],[205,307,558,3]].forEach(([s,i,c,h])=>{e.lineWidth=h,e.beginPath(),e.moveTo(s,c),e.lineTo(i,c),e.stroke()});for(let s=0;s<9e3;s++)e.fillStyle=`rgba(90,80,60,${r()*.05})`,e.fillRect(r()*512,r()*768,1,1);return t}var Hk=`
precision highp float;
uniform mat4 proj, view, model;
uniform float yScale, turn, fold;
attribute vec3 position, normal;
attribute vec2 uv;
attribute float kind;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_kind;
void main() {
	vec3 p = position;
	vec3 n = normal;
	if (kind > 4.5) {
		// the loose page: hinged at the spine, lying on his right when
		// turn = 0 and on his left when turn = 1, bending as it goes
		float a = turn * 3.14159;
		float u = p.x;
		float th = a + sin(a) * 0.55 * (u - 0.5);
		float r = u * ${xx.w.toFixed(3)};
		p = vec3(-cos(th) * r, sin(th) * r + 0.0125, p.z);
		n = vec3(sin(th), cos(th), 0.0);
	}
	// each half turns about the spine towards +Y, so the open book stands
	// as a roof
	float sg = p.x >= 0.0 ? 1.0 : -1.0;
	float ca = cos(fold), sa = sin(fold) * sg;
	p = vec3(p.x * ca - p.y * sa, p.x * sa + p.y * ca, p.z);
	n = vec3(n.x * ca - n.y * sa, n.x * sa + n.y * ca, n.z);
	vec4 wp = model * vec4(p, 1.0);
	v_pos = wp.xyz;
	v_n = mat3(model) * n;
	v_uv = uv;
	v_kind = kind;
	wp.y *= yScale;
	gl_Position = proj * view * wp;
}`,Uk=`
precision highp float;
${Ld}
uniform float time;
${n1.lanternGLSL(n1.TREE_LANTERN)}
uniform sampler2D cover;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_kind;
${mx()}
void main() {
	vec3 N = normalize(v_n);
	if (!gl_FrontFacing) N = -N;
	vec3 base;
	if (v_kind < 1.5) base = texture2D(cover, v_uv).rgb;
	else if (v_kind < 2.5) base = vec3(0.86, 0.83, 0.76);
	else if (v_kind < 4.5) {
		base = vec3(0.93, 0.90, 0.83);
		if (v_kind < 3.5) {
			// faint lines of print
			float line = step(0.5, fract(v_uv.y * 34.0)) * step(0.12, v_uv.x) * step(v_uv.x, 0.88) * step(0.08, v_uv.y) * step(v_uv.y, 0.92);
			base *= 1.0 - 0.18 * line;
		} else {
			base *= 0.85 + 0.15 * step(0.5, fract(v_pos.y * 900.0));
		}
	} else {
		base = vec3(0.95, 0.92, 0.85);
		float line = step(0.5, fract(v_uv.y * 34.0)) * step(0.12, v_uv.x) * step(v_uv.x, 0.88) * step(0.08, v_uv.y) * step(v_uv.y, 0.92);
		base *= 1.0 - 0.14 * line;
	}
	float light = 0.42 + 0.2 * (0.5 + 0.5 * N.y);
	light += max(dot(N, SHAFT), 0.0) * oculusOpen(v_pos) * treeShade(v_pos) * 1.2;
	gl_FragColor = vec4(toNight(base * light, 0.85) + base * lanternLight(v_pos, N), 1.0);
}`;function Bk(){let t=[],e=[],o=[],r=[],n=[],a=[.36,.11,.07],s=[.1,.07,.05],i=[.78,.76,.72],c=[.55,.41,.26],h=[.8,.55,.22],f=[[0,-.15,h,2],[.0012,-.147,h,2],[.004,-.138,h,2],[.0058,-.125,c,2],[.0064,-.112,c,2],[.006,-.104,c,2],[.0066,-.102,i,1],[.0066,-.08,i,1],[.0062,-.074,i,1],[.0068,-.072,i,1],[.007,-.066,i,1],[.0058,-.064,a,0],[.0062,-.04,a,0],[.0058,0,a,0],[.0046,.06,a,0],[.0036,.11,a,0],[.003,.13,s,0],[.0026,.136,s,0],[0,.139,s,0]],d=16;for(let u=0;u<f.length;u++){let[v,l,p,m]=f[u],g=m===2?.45:1;for(let x=0;x<=d;x++){let y=x/d*Math.PI*2;t.push(Math.cos(y)*v,l,Math.sin(y)*v*g);let w=Math.max(u-1,0),_=Math.min(u+1,f.length-1),M=f[_][0]-f[w][0],k=f[_][1]-f[w][1],R=Math.hypot(M,k)||1;e.push(Math.cos(y)*k/R,-M/R,Math.sin(y)*k/R/g),o.push(...p),r.push(m)}}for(let u=0;u<f.length-1;u++)for(let v=0;v<d;v++){let l=u*(d+1)+v,p=l+d+1;n.push(l,p,l+1,l+1,p,p+1)}return{pos:t,nrm:e,col:o,mat:r,idx:n}}var jk=`
precision highp float;
uniform mat4 proj, view, model;
uniform float yScale;
attribute vec3 position, normal, color;
attribute float mat;
varying vec3 v_n, v_col, v_pos, v_eye;
varying float v_mat, v_y;
void main() {
	vec4 wp = model * vec4(position, 1.0);
	v_n = mat3(model) * normal;
	v_col = color;
	v_mat = mat;
	v_y = position.y;
	v_pos = wp.xyz;
	vec3 tt = view[3].xyz;
	v_eye = -vec3(dot(view[0].xyz, tt), dot(view[1].xyz, tt), dot(view[2].xyz, tt));
	wp.y *= yScale;
	gl_Position = proj * view * wp;
}`,Wk=`
precision highp float;
${Ld}
uniform float pulse;
varying vec3 v_n, v_col, v_pos, v_eye;
varying float v_mat, v_y;
void main() {
	vec3 N = normalize(v_n);
	if (!gl_FrontFacing) N = -N;
	vec3 V = normalize(v_eye - v_pos);
	vec3 L = normalize(vec3(0.2, 1.0, -0.15));
	float diff = 0.45 + 0.55 * max(dot(N, L), 0.0);
	vec3 col = v_col * diff;
	vec3 R = reflect(-V, N);
	if (v_mat < 0.5) col += vec3(0.5, 0.42, 0.35) * pow(max(dot(R, L), 0.0), 24.0) * 0.35;
	else if (v_mat < 1.5) col = v_col * (0.35 + 0.4 * diff) + vec3(0.9, 0.88, 0.82) * (pow(max(dot(R, L), 0.0), 18.0) + 0.25 * smoothstep(0.0, 1.0, R.y));
	else col *= 0.8 + 0.2 * fract(sin(dot(floor(v_pos.xz * 4000.0), vec2(12.9898, 78.233))) * 43758.5453);
	// only the wet paint on the tip holds a faint warm light
	col += vec3(0.30, 0.18, 0.05) * smoothstep(-0.128, -0.150, v_y) * (0.4 + 0.3 * pulse);
	gl_FragColor = vec4(toNight(col, 0.85), 1.0);
}`,Vk=`
precision highp float;
uniform mat4 proj, view;
uniform vec3 center;
uniform float size, yScale;
attribute vec2 corner;
varying vec2 v_c;
void main() {
	vec3 c = center;
	c.y *= yScale;
	vec4 vp = view * vec4(c, 1.0);
	vp.xy += corner * size;
	v_c = corner;
	gl_Position = proj * vp;
}`,Xk=`
precision highp float;
uniform float pulse;
varying vec2 v_c;
void main() {
	float d = length(v_c);
	float g = exp(-d * d * 6.0) * 0.10 + exp(-d * d * 30.0) * 0.08;
	gl_FragColor = vec4(vec3(1.0, 0.80, 0.45) * g * (0.75 + 0.25 * pulse), 1.0);
}`;Rd.exports=t=>{let e="res/avatar/",o=null,r=Date.now(),n=()=>typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-r)/1e3,a={glowPos:[li.x,1.9,li.z],glow:0};Promise.all([fetch(e+"avatar.json").then(A=>A.json()),fetch(e+"avatar.bin").then(A=>A.arrayBuffer())]).then(([A,F])=>{o=h(A,F)}).catch(A=>console.error(A));let s=null;Promise.all([fetch(e+"motion.json").then(A=>A.ok?A.json():null),fetch(e+"motion.bin").then(A=>A.ok?A.arrayBuffer():null)]).then(([A,F])=>{if(!A||!F)return;let C={};for(let H in A.clips){let I=A.clips[H],V=I.bones.length,dt=new Float32Array(F,I.mean,V*4),$t={};I.bones.forEach((kt,mt)=>{$t[kt]=[dt[mt*4],dt[mt*4+1],dt[mt*4+2],dt[mt*4+3]]}),C[H]=Object.assign({},I,{Q:new Int16Array(F,I.q,I.frames*V*4),H:new Float32Array(F,I.hips,I.frames*3),meanQ:$t})}s=C}).catch(()=>{});function i(A,F){let C=A.frames,H=A.bones.length,I=(F%C+C)%C,V=Math.floor(I)%C,dt=(V+1)%C,$t=I-Math.floor(I),kt={};for(let Wt=0;Wt<H;Wt++){let we=(V*H+Wt)*4,_e=(dt*H+Wt)*4,Ve=A.Q[we],Ie=A.Q[we+1],xo=A.Q[we+2],ro=A.Q[we+3],pt=A.Q[_e],X=A.Q[_e+1],gt=A.Q[_e+2],Nt=A.Q[_e+3];Ve*pt+Ie*X+xo*gt+ro*Nt<0&&(pt=-pt,X=-X,gt=-gt,Nt=-Nt),kt[A.bones[Wt]]=Nd([Ve+(pt-Ve)*$t,Ie+(X-Ie)*$t,xo+(gt-xo)*$t,ro+(Nt-ro)*$t])}let mt=V*3,st=dt*3;return{q:kt,hips:[A.H[mt]+(A.H[st]-A.H[mt])*$t,A.H[mt+1]+(A.H[st+1]-A.H[mt+1])*$t,A.H[mt+2]+(A.H[st+2]-A.H[mt+2])*$t]}}let c=t.texture({data:[[[255,255,255,255]]]});function h(A,F){let C=(et,U)=>new Float32Array(F,et,U),H=A.bones,I=H.length,V={};H.forEach((et,U)=>{V[et.name]=U});let dt=[];for(let et=0;et<I;et++)dt.push(Array.from(C(A.ibm+et*64,16)));let $t=H.map(et=>xr(et.t,et.r,et.s)),kt=[];for(let et=0;et<I;et++){let U=H[et].parent;kt[et]=U<0?$t[et]:t0(kt[U],$t[et])}let mt=kt.map(Ad),st=A.meshes.map(et=>{let U=C(et.pos,et.n*3),Q=C(et.nrm,et.n*3),j=C(et.uv,et.n*2),Tt=new Uint8Array(F,et.jnt,et.n*4),Kt=C(et.wgt,et.n*4),Rt=new Uint16Array(F,et.idx,et.ni),_t={};for(let se in et.morphs){let eo=et.morphs[se];_t[se]={idx:new Uint16Array(F,eo.idx,eo.n),d:C(eo.d,eo.n*3)}}let fe=new Float32Array(et.n*3),Ft=new Float32Array(et.n*3),ye=new Float32Array(et.n*3),ue=t.buffer({data:fe,usage:"dynamic"}),Me=t.buffer({data:Ft,usage:"dynamic"}),Re=/avaturn_hair/.test(et.name),pe=/EyeAO|Eyelash/.test(et.name),Ue=/Body|Head/.test(et.name),Ye=et.kind||0;return{m:et,pos:U,nrm:Q,uv:j,jnt:Tt,wgt:Kt,idx:Rt,morphs:_t,outP:fe,outN:Ft,work:ye,pb:ue,nbuf:Me,tex:et.tex?Dk(t,e+et.tex):c,kind:Ye,alphaScale:/EyeAO/.test(et.name)?.25:1,blend:et.blend||Re,alphaCut:Re?.35:pe?.02:0,skin:Ue?1:0}}),Wt=t({vert:dx,frag:px,attributes:{position:t.prop("pb"),normal:t.prop("nb"),uv:t.prop("uv")},elements:t.prop("el"),uniforms:{tex:t.prop("tex"),alphaCut:t.prop("alphaCut"),skin:t.prop("skin"),kind:t.prop("kind"),alphaScale:t.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow,boothLamp:()=>M&&!k?M.lamp:[0,0,0,0],court:()=>M||k?0:1,candle:()=>k?1:0},cull:{enable:!1}}),we=t({vert:dx,frag:px,attributes:{position:t.prop("pb"),normal:t.prop("nb"),uv:t.prop("uv")},elements:t.prop("el"),uniforms:{tex:t.prop("tex"),alphaCut:t.prop("alphaCut"),skin:t.prop("skin"),kind:t.prop("kind"),alphaScale:t.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow,boothLamp:()=>M&&!k?M.lamp:[0,0,0,0],court:()=>M||k?0:1,candle:()=>k?1:0},cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"one minus src alpha"}}}),_e=.3;for(let et of st)if(et.uvBuf=t.buffer(et.uv),/Body/.test(et.m.name)){let U=[],Q=[];for(let j=0;j<et.idx.length;j+=3){let Tt=et.idx[j],Kt=et.idx[j+1],Rt=et.idx[j+2];(et.pos[Tt*3+1]<_e&&et.pos[Kt*3+1]<_e&&et.pos[Rt*3+1]<_e?Q:U).push(Tt,Kt,Rt)}et.el=t.elements({data:new Uint16Array(U),type:"uint16"}),Q.length&&(et.sockEl=t.elements({data:new Uint16Array(Q),type:"uint16"}))}else et.el=t.elements({data:et.idx,type:"uint16"});let Ve=kt[V.Hips],Ie=vs([1,0,0],-Math.PI/2),xo=t0(xr([li.x-Ve[12]*R0,li.hipY-Ve[14]*R0,li.z+Ve[13]*R0],Ie,[1,1,1]),xr([0,0,0],[0,0,0,1],[R0,R0,R0])),ro=new Array(I),pt=-1,X=(et,U,Q)=>t0(xr([et,0,U],vs([0,1,0],Q),[1,1,1]),xr([0,0,0],[0,0,0,1],[R0,R0,R0])),gt=["LeftFoot","RightFoot","LeftToeBase","RightToeBase"].map(et=>V[et]),Nt=gt.map(et=>kt[et][13]*R0);function ce(et){if(s&&s.walk)return xe(et);let U=qk(et.phase),Q={},j=Ft=>{for(let ye in Ft){let ue=Ft[ye],Me=Zh(ue[0],ue[1],ue[2]);Q[ye]=Q[ye]?sn(Q[ye],Me):Me}};j(U.swing),j(U.pose);let Tt=Math.cos(et.heading),Kt=-Math.sin(et.heading),Rt=X(et.x+Tt*U.sway,et.z+Kt*U.sway,et.heading),_t=new Array(I);for(let Ft=0;Ft<I;Ft++){let ye=H[Ft],ue=$t[Ft],Me=Q[ye.name];if(Me){let Re=mt[Ft],pe=sn(ta(Re),sn(Me,Re));ue=xr(ye.t,sn(ye.r,pe),ye.s)}_t[Ft]=ye.parent<0?t0(Rt,ue):t0(_t[ye.parent],ue)}let fe=1/0;gt.forEach((Ft,ye)=>{fe=Math.min(fe,_t[Ft][13]-Nt[ye])});for(let Ft=0;Ft<I;Ft++)_t[Ft]=_t[Ft].slice(),_t[Ft][13]-=fe,ro[Ft]=t0(_t[Ft],dt[Ft]);return{blink:0}}function xe(et){let U=s.walk,Q=i(U,(et.phase+U.phase0)*U.frames),j=X(et.x,et.z,et.heading),Tt=new Array(I),Kt=V.Hips;for(let _t=0;_t<I;_t++){let fe=H[_t],Ft=$t[_t],ye=Q.q[fe.name];if(ye){let ue=mt[_t],Me=sn(ta(ue),sn(ye,ue)),Re=_t===Kt?[fe.t[0]+Q.hips[0],fe.t[1]+Q.hips[1],fe.t[2]+Q.hips[2]]:fe.t;Ft=xr(Re,sn(fe.r,Me),fe.s)}Tt[_t]=fe.parent<0?t0(j,Ft):t0(Tt[fe.parent],Ft)}let Rt=1/0;gt.forEach((_t,fe)=>{Rt=Math.min(Rt,Tt[_t][13]-Nt[fe])});for(let _t=0;_t<I;_t++)Tt[_t]=Tt[_t].slice(),Tt[_t][13]-=Rt,ro[_t]=t0(Tt[_t],dt[_t]);return{blink:0}}function ne(et,U){let Q=Math.sin(et*2*Math.PI/4.6),j=Math.sin(et*.37)*.6+Math.sin(et*.83+1)*.4,Tt={LeftUpLeg:[-86,-6,0],RightUpLeg:[-84,7,0],LeftLeg:[88,0,0],RightLeg:[82,0,0],LeftFoot:[-4,0,0],RightFoot:[-2,0,0],Spine:[6,0,0],Spine1:[5+Q*.8,0,0],Spine2:[4+Q*.6,0,0],Neck:[10,0,0],Head:[12+j*2,j*2.5,0],LeftArm:[0,0,-72],RightArm:[0,0,72],LeftForeArm:[0,-62,0],RightForeArm:[0,62,0],LeftHand:[0,0,-10],RightHand:[0,0,10]},Kt={};for(let ue in Tt){let Me=Tt[ue];Kt[ue]=Zh(Me[0],Me[1],Me[2])}let Rt=X(U.x,U.z,U.heading),_t=new Array(I);for(let ue=0;ue<I;ue++){let Me=H[ue],Re=$t[ue],pe=Kt[Me.name];if(pe){let Ue=mt[ue],Ye=sn(ta(Ue),sn(pe,Ue));Re=xr(Me.t,sn(Me.r,Ye),Me.s)}_t[ue]=Me.parent<0?t0(Rt,Re):t0(_t[Me.parent],Re)}let Ft=_t[V.Hips][13]-(U.y+.1);for(let ue=0;ue<I;ue++)_t[ue]=_t[ue].slice(),_t[ue][13]-=Ft,ro[ue]=t0(_t[ue],dt[ue]);let ye=et%4.1;return{blink:ye<.16?Math.sin(ye/.16*Math.PI):0}}let Bt=et=>[kt[et][12],kt[et][13],kt[et][14]],rt=(et,U)=>{let Q=of(et),j=of(ma(U,ps(Q,Td(U,Q)))),Tt=o1(Q,j);return Ad([Q[0],Q[1],Q[2],0,j[0],j[1],j[2],0,Tt[0],Tt[1],Tt[2],0,0,0,0,1])},Xt={};for(let et of["Left","Right"]){let U=V[et+"Arm"],Q=V[et+"ForeArm"],j=V[et+"Hand"],Tt=V[et+"HandMiddle1"];Xt[et]={a:U,f:Q,h:j,upper:t1(ma(Bt(Q),Bt(U)))*R0,fore:t1(ma(Bt(j),Bt(Q)))*R0,dir0:of(ma(Bt(Q),Bt(U))),qf0:rt(ma(Bt(j),Bt(Q)),[0,1,0]),qh0:rt(ma(Bt(Tt),Bt(j)),[0,1,0])}}let Te={};for(let et of["Left","Right"])Te[Xt[et].a]={side:et,part:0},Te[Xt[et].f]={side:et,part:1},Te[Xt[et].h]={side:et,part:2};function Jt(et,U,Q){if(!et||!et.length)return{x:.5,lift:0,press:0,finger:1,busy:0};let j=0,Tt=et.length-1,Kt=-1;for(;j<=Tt;){let eo=j+Tt>>1;et[eo].t<=U?(Kt=eo,j=eo+1):Tt=eo-1}let Rt=et[et.length-1],_t=et[0],fe=Kt>=0?et[Kt]:{t:Rt.t-Q,x:Rt.x,w:Rt.w},Ft=Kt+1<et.length?et[Kt+1]:{t:_t.t+Q,x:_t.x,w:_t.w},ye=Math.max(.05,Ft.t-fe.t),ue=Math.min(.14,ye*.45),Me=Math.max(0,Math.min(1,(U-fe.t-ue)/Math.max(ye-ue-.03,.02))),Re=Me*Me*(3-2*Me),pe=U-fe.t,Ue=(.55+.45*fe.w)*Math.exp(-pe/.11),Ye=Ft.t-U,se=Ye<.05?(.55+.45*Ft.w)*(1-Ye/.05):0;return{x:fe.x+(Ft.x-fe.x)*Re,lift:Math.sin(Math.PI*Me)*Math.min(.05,.012+ye*.03)*(ye>2.5?.4:1),press:Math.max(Ue,se),finger:se>Ue?((Kt+1)*7+3)%4:(Math.max(Kt,0)*7+3)%4,busy:Math.exp(-pe/.9)}}let It={lean:0,turn:0,nod:0,pedal:0,last:-1},He=["Index","Middle","Ring","Pinky"];function S(et){let U=gx.PLAY,Q=hx.cues,j=hx.time(),Tt=Q&&Q.dur||158,Kt={Left:Jt(Q&&Q.left,j,Tt),Right:Jt(Q&&Q.right,j,Tt)},Rt=.35;if(Q&&Q.level&&Q.level.length){let Oe=j*8,qe=Math.floor(Oe)%Q.level.length,oo=(qe+1)%Q.level.length;Rt=Q.level[qe]+(Q.level[oo]-Q.level[qe])*(Oe-Math.floor(Oe))}let _t=It.last<0?0:Math.min(.1,Math.max(0,et-It.last));It.last=et;let fe=Oe=>Math.min(1,_t*Oe);It.lean+=(Rt-It.lean)*fe(1.2),It.turn+=(Kt.Right.busy-Kt.Left.busy-It.turn)*fe(1.5),It.nod+=(Math.max(Kt.Right.press,Kt.Left.press*.7)-It.nod)*fe(6),It.pedal+=((Kt.Left.busy>.35?1:.15)-It.pedal)*fe(5);let Ft=Math.sin(et*2*Math.PI/4.6),ye=Math.sin(j*.41)*.6+Math.sin(j*.17+1)*.4,ue={LeftUpLeg:[-80,-9,0],RightUpLeg:[-77,9,0],LeftLeg:[86,0,0],RightLeg:[64,0,0],LeftFoot:[-2,0,0],RightFoot:[12-10*It.pedal,0,0],Spine:[9+3.5*It.lean+ye*1.6,It.turn*2.5,-It.turn*1.6],Spine1:[7+Ft*.8+2.5*It.lean,It.turn*2.5,-It.turn*1.2],Spine2:[6+Ft*.6+ye*.8,It.turn*1.5,0],Neck:[13+3*It.lean,It.turn*3,0],Head:[15+It.nod*3.5+ye*1.5,It.turn*5,ye*1.5]};for(let Oe of["Left","Right"]){let qe=Oe==="Left"?-1:1,oo=Kt[Oe];He.forEach((B,yt)=>{let Yt=yt===oo.finger?oo.press:oo.press*.2;ue[Oe+"Hand"+B+"1"]=[0,0,qe*(20+3*yt+20*Yt)],ue[Oe+"Hand"+B+"2"]=[0,0,qe*(26+4*yt-6*Yt)],ue[Oe+"Hand"+B+"3"]=[0,0,qe*14]}),ue[Oe+"HandThumb1"]=[0,qe*-18,qe*10]}let Me={};for(let Oe in ue){let qe=ue[Oe];Me[Oe]=Zh(qe[0],qe[1],qe[2])}let Re=kt[V.Hips][13]*R0,pe=t0(xr([U.stoolX,U.stoolTop+.1-Re,U.stoolFront+.15],vs([0,1,0],U.heading),[1,1,1]),xr([0,0,0],[0,0,0,1],[R0,R0,R0])),Ue=(U.keyX0+U.keyX1)/2,Ye={};for(let Oe of["Left","Right"]){let qe=Kt[Oe],oo=Oe==="Left"?Ue-.4+.33*qe.x:Ue+.07+.33*qe.x;Ye[Oe]=[oo,U.keyTop+.062+qe.lift-qe.press*.012,U.keyFront+.075]}let se=new Array(I),eo={},ko=[0,1,0];for(let Oe=0;Oe<I;Oe++){let qe=H[Oe],oo=$t[Oe],B=Me[qe.name],yt=Te[Oe];if(yt){let Yt=Xt[yt.side];if(yt.part===0){let Le=se[qe.parent],$e=t0(Le,$t[Oe]),un=[$e[12],$e[13],$e[14]],d0=sn(Ad(Le),ta(mt[qe.parent])),P0=ma(Ye[yt.side],un),dn=t1(P0),A0=(Yt.upper+Yt.fore)*.995;dn>A0&&(P0=ps(P0,A0/dn),dn=A0);let pn=ps(P0,1/dn),To=(Yt.upper*Yt.upper-Yt.fore*Yt.fore+dn*dn)/(2*dn),r0=Math.sqrt(Math.max(0,Yt.upper*Yt.upper-To*To)),on=[yt.side==="Left"?-.6:.6,-.8,.3];on=of(ma(on,ps(pn,Td(on,pn))));let Vn=nf(un,nf(ps(pn,To),ps(on,r0)));Yt.T=nf(un,P0),Yt.elbow=Vn;let K0=of(ma(Vn,un)),Q0=sn(Ik($k(d0,Yt.dir0),K0),d0);eo[Oe]=Q0,B=sn(ta(d0),Q0)}else if(yt.part===1){let Le=sn(rt(ma(Yt.T,Yt.elbow),ko),ta(Yt.qf0));eo[Oe]=Le,B=sn(ta(eo[qe.parent]),Le)}else{let Le=Kt[yt.side],$e=sn(rt([yt.side==="Left"?.12:-.12,-.2-.1*Le.press,-1],ko),ta(Yt.qh0));eo[Oe]=$e,B=sn(ta(eo[qe.parent]),$e)}}if(B){let Yt=mt[Oe],Le=sn(ta(Yt),sn(B,Yt));oo=xr(qe.t,sn(qe.r,Le),qe.s)}se[Oe]=qe.parent<0?t0(pe,oo):t0(se[qe.parent],oo)}for(let Oe=0;Oe<I;Oe++)ro[Oe]=t0(se[Oe],dt[Oe]);a.pianist={head:[se[V.Head][12],se[V.Head][13],se[V.Head][14]]};let Io=et%4.3;return{blink:Io<.16?Math.sin(Io/.16*Math.PI):0}}function Ge(et,U){if(k)return S(et);if(M)return ne(et,M);if(U)return ce(U);let Q=Math.sin(et*2*Math.PI/4.2),j=et%3.7,Tt=j<.16?Math.sin(j/.16*Math.PI):0,Kt=Math.sin(et*.45),Rt=Math.sin(et*.31+.8),_t=Math.max(0,Math.sin(et*.085)-.75)*4,fe={RightArm:[0,-22*_t,11*Kt],RightForeArm:[0,8+26*_t,0],RightHand:[38*Rt,0,6*Math.sin(et*.7)],LeftUpLeg:[0,0,3.2*Math.sin(et*.36)],RightFoot:[5*Math.sin(et*.52+.4),0,0],Head:[0,1.6*Math.sin(et*.21),0]};["Index","Middle","Ring","Pinky"].forEach((pe,Ue)=>{let Ye=Math.sin(et*1.1-Ue*.5);fe["RightHand"+pe+"1"]=[0,0,8+12*Ye],fe["RightHand"+pe+"2"]=[0,0,6+10*Ye]});let Ft={},ye=(pe,Ue)=>{for(let Ye in pe){let se=pe[Ye],eo=Zh(se[0]*Ue,se[1]*Ue,se[2]*Ue);Ft[Ye]=Ft[Ye]?sn(Ft[Ye],eo):eo}};ye(e1,1),ye({Spine1:[Q*.8,0,0],Spine2:[Q*.6,0,0]},1),ye(fe,1);let ue=new Array(I),Me=new Array(I);for(let pe=0;pe<I;pe++){let Ue=H[pe],Ye=$t[pe],se=Ft[Ue.name];if(se){let eo=mt[pe],ko=sn(ta(eo),sn(se,eo));Ye=xr(Ue.t,sn(Ue.r,ko),Ue.s)}ue[pe]=Ue.parent<0?t0(xo,Ye):t0(ue[Ue.parent],Ye),Me[pe]=null}for(let pe=0;pe<I;pe++)ro[pe]=t0(ue[pe],dt[pe]);let Re=pe=>[pe[12],pe[13],pe[14]];return a.headPos=Re(ue[V.Head]),a.hipsPos=Re(ue[V.Hips]),a.headM=ue[V.Head],{blink:Tt}}function je(et,U){let{pos:Q,nrm:j,jnt:Tt,wgt:Kt,outP:Rt,outN:_t,work:fe,m:Ft}=et,ye=Ft.n,ue=Q;if(U){fe.set(Q);for(let Me in et.morphs){let Re=U[Me]||0;if(Re<=0)continue;let pe=et.morphs[Me];for(let Ue=0;Ue<pe.idx.length;Ue++){let Ye=pe.idx[Ue]*3;fe[Ye]+=pe.d[Ue*3]*Re,fe[Ye+1]+=pe.d[Ue*3+1]*Re,fe[Ye+2]+=pe.d[Ue*3+2]*Re}}ue=fe}for(let Me=0;Me<ye;Me++){let Re=ue[Me*3],pe=ue[Me*3+1],Ue=ue[Me*3+2],Ye=j[Me*3],se=j[Me*3+1],eo=j[Me*3+2],ko=0,Io=0,Oe=0,qe=0,oo=0,B=0;for(let Yt=0;Yt<4;Yt++){let Le=Kt[Me*4+Yt];if(Le===0)continue;let $e=ro[Tt[Me*4+Yt]];ko+=Le*($e[0]*Re+$e[4]*pe+$e[8]*Ue+$e[12]),Io+=Le*($e[1]*Re+$e[5]*pe+$e[9]*Ue+$e[13]),Oe+=Le*($e[2]*Re+$e[6]*pe+$e[10]*Ue+$e[14]),qe+=Le*($e[0]*Ye+$e[4]*se+$e[8]*eo),oo+=Le*($e[1]*Ye+$e[5]*se+$e[9]*eo),B+=Le*($e[2]*Ye+$e[6]*se+$e[10]*eo)}Rt[Me*3]=ko,Rt[Me*3+1]=Io,Rt[Me*3+2]=Oe;let yt=Math.hypot(qe,oo,B)||1;_t[Me*3]=qe/yt,_t[Me*3+1]=oo/yt,_t[Me*3+2]=B/yt}Ft.grid&&!Mo&&!M&&!k&&Je(et),et.sway&&Wn(et),et.pb.subdata(Rt),et.nbuf.subdata(_t)}function Je(et){let[U,Q]=et.m.grid,j=et.outP,Tt=et.outN,Kt=vx.seat+.012;for(let Rt=1;Rt<U;Rt++){let _t=Math.pow(1-Rt/(U-1),1.5);for(let fe=0;fe<Q;fe++){let Ft=(Rt*Q+fe)*3;j[Ft+1]>Kt?j[Ft+1]=Kt+(j[Ft+1]-Kt)*Math.max(_t,.15):j[Ft+1]=Kt}}for(let Rt=0;Rt<Tt.length;Rt+=3)Tt[Rt]=0,Tt[Rt+1]=1,Tt[Rt+2]=0}let Mo=!1,vo=(et,U,Q,j,Tt)=>({bone:V[et],rate:U,damp:Q,drag:j,most:Tt,x:[0,0,0],v:[0,0,0],p:null,vel:[0,0,0]}),Ro={head:vo("Head",15,.32,.012,.035),chest:vo("Spine2",9,.38,.03,.1),hips:vo("Hips",7,.42,.045,.16)},Ao=-1;function Jo(et){let U=Ao<0?0:et-Ao;Ao=et;for(let Q in Ro){let j=Ro[Q],Tt=ro[j.bone],Kt=kt[j.bone],Rt=Kt[12],_t=Kt[13],fe=Kt[14],Ft=[Tt[0]*Rt+Tt[4]*_t+Tt[8]*fe+Tt[12],Tt[1]*Rt+Tt[5]*_t+Tt[9]*fe+Tt[13],Tt[2]*Rt+Tt[6]*_t+Tt[10]*fe+Tt[14]];if(!j.p||!(U>0)||U>.25||Math.hypot(Ft[0]-j.p[0],Ft[1]-j.p[1],Ft[2]-j.p[2])>.5){j.p=Ft,j.x=[0,0,0],j.v=[0,0,0],j.vel=[0,0,0];continue}let ye=[(Ft[0]-j.p[0])/U,(Ft[1]-j.p[1])/U,(Ft[2]-j.p[2])/U],ue=Math.max(1,Math.ceil(U/.016)),Me=U/ue;for(let pe=0;pe<3;pe++){let Ue=Math.max(-30,Math.min(30,(ye[pe]-j.vel[pe])/U)),Ye=-ye[pe]*j.drag;for(let se=0;se<ue;se++)j.v[pe]+=((Ye-j.x[pe])*j.rate*j.rate-2*j.damp*j.rate*j.v[pe]-Ue)*Me,j.x[pe]+=j.v[pe]*Me}let Re=Math.hypot(j.x[0],j.x[1],j.x[2]);if(Re>j.most){let pe=j.most/Re;j.x=[j.x[0]*pe,j.x[1]*pe,j.x[2]*pe]}j.p=Ft,j.vel=ye}}for(let et of st){let U=et.m,Q=U.n,j=null,Tt=null;if(U.kind===9){Tt="head",j=new Float32Array(Q);for(let Kt=0;Kt<Q;Kt++){let Rt=et.uv[Kt*2]<-.5?0:et.uv[Kt*2+1];j[Kt]=Rt*Rt}}else if(U.name==="scarf"){Tt="chest",j=new Float32Array(Q);for(let Kt=0;Kt<Q;Kt++)j[Kt]=f(1.52,1.12,et.pos[Kt*3+1])}else if(U.grid){Tt="hips",j=new Float32Array(Q);let Kt=U.grid[0],Rt=U.grid[1];for(let _t=0;_t<Q;_t++)j[_t]=Math.pow(Math.floor(_t/Rt)/(Kt-1),1.6)}j&&(et.sway=j,et.spring=Ro[Tt],et.loose=Tt)}function Wn(et){if(!Mo&&!k&&!M)return;let U=et.spring.x,Q=et.sway,j=et.outP;if(!(Math.abs(U[0])+Math.abs(U[1])+Math.abs(U[2])<1e-5))for(let Tt=0,Kt=Q.length;Tt<Kt;Tt++){let Rt=Q[Tt];Rt>0&&(j[Tt*3]+=U[0]*Rt,j[Tt*3+1]+=U[1]*Rt,j[Tt*3+2]+=U[2]*Rt)}}function lr(et,U){Mo=!!U;let Q=Ge(et,U);Jo(et);let j={eyeBlinkLeft:Q.blink,eyeBlinkRight:Q.blink};for(let Tt of st)je(Tt,Object.keys(Tt.morphs).length?j:null);a.pose=Q}return{parts:st,update:lr,drawOpaque:Wt,drawBlend:we,state:a}}function f(A,F,C){let H=Math.min(1,Math.max(0,(C-A)/(F-A)));return H*H*(3-2*H)}let d=Fk(),u=Gk(),v=u?t.texture({data:u,flipY:!1,min:"linear",mag:"linear"}):c,l=t({vert:Hk,frag:Uk,attributes:{position:d.pos,normal:d.nrm,uv:d.uv,kind:d.kind},elements:new Uint16Array(d.idx),uniforms:{model:t.prop("model"),turn:0,fold:1.12,cover:v},cull:{enable:!1}}),p=Bk(),m=t({vert:jk,frag:Wk,attributes:{position:p.pos,normal:p.nrm,color:p.col,mat:p.mat},elements:new Uint16Array(p.idx),uniforms:{model:t.prop("model"),pulse:t.prop("pulse")},cull:{enable:!1}}),g=t({vert:Vk,frag:Xk,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{center:t.prop("center"),size:t.prop("size"),pulse:t.prop("pulse")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});function x(A){let F=A.headM,C=st=>{let Wt=Math.hypot(...st)||1;return st.map(we=>we/Wt)},H=C([F[4],F[5],F[6]]),I=C([F[8],F[9],F[10]]),V=H,dt=I.map(st=>-st),$t=[dt[1]*V[2]-dt[2]*V[1],dt[2]*V[0]-dt[0]*V[2],dt[0]*V[1]-dt[1]*V[0]],kt=A.headPos,mt=[0,1,2].map(st=>kt[st]+H[st]*.06+I[st]*.185);return[$t[0],$t[1],$t[2],0,dt[0],dt[1],dt[2],0,V[0],V[1],V[2],0,mt[0],mt[1],mt[2],1]}let y=-1,w="",_=null,M=null,k=!1;function R(A){if(!o)return;let F=(fx.motion,n()),C=_?[_.x,_.z,_.heading,_.phase].map(I=>I.toFixed(4)).join():"";(M||k||C!==w||!_&&Math.abs(F-y)>(fx.isPhone?1/30:0))&&(o.update(F,_),y=F,w=C);for(let I of o.parts)I.blend||(o.drawOpaque({pb:I.pb,nb:I.nbuf,uv:I.uvBuf,el:I.el,tex:I.tex,alphaCut:I.alphaCut,skin:I.skin,kind:I.kind,alphaScale:I.alphaScale}),I.sockEl&&o.drawOpaque({pb:I.pb,nb:I.nbuf,uv:I.uvBuf,el:I.sockEl,tex:c,alphaCut:0,skin:0,kind:8,alphaScale:1}));let H=o.state;if(H.headM&&!_&&!M&&!k){l({model:x(H)});let I=H.headPos,V=Math.sin(F*1.3)*.02,dt=[I[0],I[1]+.62+V,I[2]+.05],$t=F*.6,kt=xr(dt,sn(vs([0,1,0],$t),vs([0,0,1],.18)),[1.2,1.2,1.2]),mt=.5+.5*Math.sin(F*2);m({model:kt,pulse:mt}),a.glowPos=dt,a.glow=.06+.03*mt,g({center:[dt[0],dt[1]-.12,dt[2]],size:.1,pulse:mt})}for(let I of o.parts)I.blend&&o.drawBlend({pb:I.pb,nb:I.nbuf,uv:I.uvBuf,el:I.el,tex:I.tex,alphaCut:I.alphaCut,skin:I.skin,kind:I.kind,alphaScale:I.alphaScale})}return R.state=a,R.place=li,R.setWalk=A=>{_=A||null,_&&(a.glow=0)},R.setSeat=A=>{M=A||null,a.glow=M?0:a.glow,y=-1},R.setPiano=A=>{A=!!A,A!==k&&(k=A,k&&(a.glow=0),y=-1)},R};Rd.exports.PLACE=li});var Od=At((Cz,bx)=>{"use strict";bx.exports={name:"Muzammil",title:"Hi, I\u2019m Muzammil.",text:`I\u2019m a self-taught artist. I paint emotions. Grief, longing, love, and the quiet ways we keep holding on. I borrow the light and stillness of the Renaissance to talk about very modern feelings.

This gallery is my portfolio, built brick by pixel, so my work has a home that never closes. Every painting comes with a few words, because some feelings need both a frame and a sentence.

You\u2019ll find me in the tree court, catching sunlight and trying not to get too absorbed. Wander the halls, stay as long as you like, and don\u2019t worry about the time. In here, the only thing that\u2019s drying is the paint.`}});var Pd=At((Pz,Ex)=>{"use strict";var kx=Ar(),wx=pl(),ms=t=>String(t).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function Cd(){return kx.isPhone||!window.matchMedia||!window.matchMedia("(pointer: fine)").matches?!1:window.innerWidth>=900&&window.innerHeight>=520}var Yk=`
.visit-btn {
	display: inline-flex;
	align-items: center;
	gap: 10px;
	min-height: 40px;
	padding: 0 18px 0 14px;
	border: 1px solid rgba(233,207,154,.6);
	border-radius: 999px;
	background: rgba(233,207,154,.10);
	color: #f4ecdf;
	font: 500 12px/1 Georgia, serif;
	letter-spacing: .2em;
	text-transform: uppercase;
	cursor: pointer;
	pointer-events: auto;
	transition: background .35s ease, border-color .35s ease, box-shadow .35s ease;
}
.visit-btn:hover {
	background: rgba(233,207,154,.22);
	border-color: #e9cf9a;
	box-shadow: 0 0 24px rgba(233,207,154,.18);
}
.visit-btn:focus-visible { outline: 2px solid #e9cf9a; outline-offset: 3px; }
.visit-btn svg { flex: none; }
.visit-btn .visit-play { transition: transform .35s ease; }
.visit-btn:hover .visit-play { transform: scale(1.12); }
.visit-row { display: block; margin: 2px 0 18px; }

.visit {
	position: fixed;
	inset: 0;
	z-index: 400;
	background: #000;
	opacity: 0;
	transition: opacity 1.1s ease;
	overflow: hidden;
	font-family: 'Cormorant Garamond', Georgia, serif;
	color: #f4ecdf;
	cursor: default;
}
.visit.on { opacity: 1; }
.visit video, .visit .visit-art {
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
}
.visit video { object-fit: cover; opacity: 0; transition: opacity 1.6s ease; }
.visit.playing video { opacity: 1; }
/* the painting itself, fading up out of the film's last frame */
.visit .visit-art {
	object-fit: contain;
	padding: 12vh 8vw calc(8.5vh + 150px);
	box-sizing: border-box;
	opacity: 0;
	transform: scale(1.04);
	transition: opacity 2.4s ease, transform 6s cubic-bezier(.2,.7,.2,1);
	filter: drop-shadow(0 24px 50px rgba(0,0,0,.6));
}
.visit.resolved .visit-art { opacity: 1; transform: none; }
.visit.resolved video { opacity: 0; transition: opacity 2.4s ease; }

/* cinema bars that close in, a vignette and a breath of film grain */
.visit-bar {
	position: absolute;
	left: 0; right: 0;
	height: 0;
	background: #000;
	z-index: 3;
	transition: height 1.4s cubic-bezier(.6,0,.2,1);
}
.visit-bar.top { top: 0; }
.visit-bar.bottom { bottom: 0; }
.visit.on .visit-bar { height: 8.5vh; }
.visit-vignette {
	position: absolute;
	inset: 0;
	z-index: 2;
	pointer-events: none;
	background: radial-gradient(ellipse at center, rgba(0,0,0,0) 55%, rgba(0,0,0,.55) 100%);
}
.visit-grain {
	position: absolute;
	inset: -50%;
	width: 200%;
	height: 200%;
	z-index: 2;
	pointer-events: none;
	opacity: .07;
	mix-blend-mode: overlay;
	image-rendering: pixelated;
}

/* words */
.visit-title {
	position: absolute;
	left: 6vw;
	bottom: calc(8.5vh + 28px);
	z-index: 4;
	max-width: 60vw;
	opacity: 0;
	transform: translateY(10px);
	transition: opacity 1.6s ease, transform 1.8s cubic-bezier(.2,.7,.2,1);
	text-shadow: 0 2px 20px rgba(0,0,0,.8);
	pointer-events: none;
}
.visit-title.on { opacity: 1; transform: none; }
.visit-kicker { display: block; font: 500 11px/1.4 Georgia, serif; letter-spacing: .38em; text-transform: uppercase; color: #e9cf9a; }
.visit-name { display: block; margin-top: 8px; font-size: clamp(28px, 3.2vw, 46px); font-weight: 500; line-height: 1.05; }
.visit-meta { display: block; margin-top: 8px; font: 500 12px/1.4 Georgia, serif; letter-spacing: .24em; text-transform: uppercase; opacity: .8; }

.visit-end {
	position: absolute;
	right: 6vw;
	bottom: calc(8.5vh + 28px);
	z-index: 4;
	display: flex;
	gap: 10px;
	opacity: 0;
	transition: opacity 1.4s ease 1.2s;
	pointer-events: none;
}
.visit.resolved .visit-end { opacity: 1; pointer-events: auto; }
.visit-end button, .visit-skip, .visit-close {
	min-height: 40px;
	padding: 0 18px;
	border-radius: 999px;
	border: 1px solid rgba(244,236,223,.35);
	background: rgba(20,15,10,.35);
	color: #f4ecdf;
	font: 500 11px/1 Georgia, serif;
	letter-spacing: .2em;
	text-transform: uppercase;
	cursor: pointer;
	transition: background .3s ease, border-color .3s ease;
}
.visit-end button.primary { border-color: rgba(233,207,154,.6); background: rgba(233,207,154,.14); }
.visit-end button:hover, .visit-skip:hover, .visit-close:hover { background: rgba(60,45,30,.55); border-color: rgba(244,236,223,.6); }
.visit-close {
	position: absolute;
	top: calc(8.5vh + 18px);
	right: 22px;
	z-index: 5;
	width: 40px;
	padding: 0;
	font: 22px/1 Georgia, serif;
	letter-spacing: 0;
	opacity: .7;
}
.visit-skip {
	position: absolute;
	right: 6vw;
	bottom: calc(8.5vh + 28px);
	z-index: 4;
	opacity: 0;
	transition: opacity .8s ease;
}
.visit.playing .visit-skip { opacity: .6; }
.visit.playing .visit-skip:hover { opacity: 1; }
.visit.resolved .visit-skip { display: none; }
.visit button:focus-visible { outline: 2px solid #e9cf9a; outline-offset: 3px; }

@media (prefers-reduced-motion: reduce) {
	.visit .visit-art { transform: none; transition: opacity 1.2s ease; }
	.visit-grain { display: none; }
}
`,_x=!1;function Sx(){if(_x)return;_x=!0;let t=document.createElement("style");t.textContent=Yk,document.head.appendChild(t)}var Kk='<svg class="visit-play" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="10.2"/><path d="M10 8.4l6 3.6-6 3.6z" fill="currentColor" stroke="none"/></svg>';function Qk(t){return!t||!t.visit||!Cd()?"":(Sx(),`<button type="button" class="visit-btn" data-visit="${ms(t.slug||"")}" aria-label="Visit what remained: watch ${ms(t.title)} come to life">${Kk}<span>Visit what remained</span></button>`)}function Zk(t){let e=t.getContext("2d");t.width=t.height=160;let o=e.createImageData(160,160),r=!0,n=0;return function a(s){if(r){if(s-n>70){n=s;let i=o.data;for(let c=0;c<i.length;c+=4){let h=Math.random()*255;i[c]=i[c+1]=i[c+2]=h,i[c+3]=255}e.putImageData(o,0,0),t.style.transform=`translate(${(Math.random()*6-3).toFixed(1)}%, ${(Math.random()*6-3).toFixed(1)}%)`}requestAnimationFrame(a)}}(0),()=>{r=!1}}var rf=null;function Jk(t){if(rf||!t||!t.visit)return;Sx();let e=document.activeElement;document.body.classList.add("visiting");let o="images/web/"+t.slug+(kx.isPhone?"-1024":"")+".webp",r=document.createElement("div");r.className="visit",r.setAttribute("role","dialog"),r.setAttribute("aria-modal","true"),r.setAttribute("aria-label","Visiting "+t.title),r.innerHTML=`
		<video muted playsinline preload="auto" ${t.visit.poster?`poster="${ms(t.visit.poster)}"`:""}></video>
		<img class="visit-art" alt="${ms(t.title)}, ${ms(wx(t))}" src="${ms(o)}">
		<canvas class="visit-grain" aria-hidden="true"></canvas>
		<div class="visit-vignette" aria-hidden="true"></div>
		<div class="visit-bar top" aria-hidden="true"></div>
		<div class="visit-bar bottom" aria-hidden="true"></div>
		<div class="visit-title">
			<span class="visit-kicker">A visit</span>
			<span class="visit-name">${ms(t.title)}</span>
			<span class="visit-meta">${ms(wx(t))}</span>
		</div>
		<button type="button" class="visit-close" aria-label="Return to the gallery">\xD7</button>
		<button type="button" class="visit-skip">Skip</button>
		<div class="visit-end">
			<button type="button" class="primary" data-act="back">Return to the gallery</button>
			<button type="button" data-act="again">Watch again</button>
		</div>`,document.body.appendChild(r);let n=r.querySelector("video"),a=r.querySelector(".visit-title"),s=Zk(r.querySelector(".visit-grain")),i=[],c=(m,g)=>i.push(setTimeout(m,g)),h=m=>m.stopPropagation();["mousedown","pointerdown","click","wheel","touchstart","touchmove"].forEach(m=>r.addEventListener(m,h));let f=m=>{m.key==="Escape"?(m.preventDefault(),p()):m.key===" "&&!(m.target&&m.target.tagName==="BUTTON")&&(m.preventDefault(),v()),m.stopImmediatePropagation()};window.addEventListener("keydown",f,!0);let d=m=>m.stopImmediatePropagation();window.addEventListener("keyup",d,!0);let u=!1;function v(){u||(u=!0,a.classList.add("on"),r.classList.add("resolved"),c(()=>{let m=r.querySelector('[data-act="back"]');m&&m.focus({preventScroll:!0})},1300))}function l(){u=!1,r.classList.remove("resolved"),a.classList.remove("on");try{n.currentTime=0}catch(g){}let m=n.play();m&&m.catch&&m.catch(()=>v()),r.classList.add("playing"),c(()=>{u||a.classList.add("on")},1600),c(()=>{u||a.classList.remove("on")},6200)}n.addEventListener("timeupdate",()=>{n.duration&&n.currentTime>n.duration-1.2&&v()}),n.addEventListener("ended",v),n.addEventListener("error",v);function p(){if(rf){rf=null,i.forEach(clearTimeout),r.classList.remove("on");try{n.pause()}catch(m){}window.removeEventListener("keydown",f,!0),window.removeEventListener("keyup",d,!0),document.body.classList.remove("visiting"),setTimeout(()=>{s(),r.remove(),e&&e.focus&&e.focus({preventScroll:!0})},1150)}}r.querySelector(".visit-close").addEventListener("click",p),r.querySelector(".visit-skip").addEventListener("click",()=>{try{n.pause()}catch(m){}v()}),r.querySelector(".visit-end").addEventListener("click",m=>{let g=m.target.closest("button");g&&(g.dataset.act==="back"&&p(),g.dataset.act==="again"&&(i.forEach(clearTimeout),l()))}),n.src=t.visit.video,rf={close:p},requestAnimationFrame(()=>{r.classList.add("on"),c(l,1300)})}var Mx={};function tS(t){if(!t||!t.visit||Mx[t.visit.video]||!Cd())return;Mx[t.visit.video]=!0;let e=document.createElement("link");e.rel="preload",e.as="video",e.href=t.visit.video,document.head.appendChild(e)}Ex.exports={available:Cd,button:Qk,open:Jk,warm:tS,get active(){return!!rf}}});var Tx=At(($z,Ax)=>{"use strict";var eS=Ar(),zc=[0,0],Mc=[0,0],qa=null,Id=0;if(typeof window!="undefined"){window.addEventListener("pointermove",e=>{e.pointerType!=="touch"&&(zc[0]=Math.max(-1,Math.min(1,e.clientX/window.innerWidth*2-1)),zc[1]=Math.max(-1,Math.min(1,e.clientY/window.innerHeight*2-1)),Id=performance.now())},{passive:!0});let t=()=>{Id=performance.now()};["wheel","touchstart","touchmove","keydown","pointerdown"].forEach(e=>window.addEventListener(e,t,{passive:!0,capture:!0})),window.addEventListener("deviceorientation",e=>{e.gamma===null||e.beta===null||(qa||(qa=[e.gamma,e.beta]),qa[0]+=(e.gamma-qa[0])*.01,qa[1]+=(e.beta-qa[1])*.01,zc[0]=Math.max(-1,Math.min(1,(e.gamma-qa[0])/14)),zc[1]=Math.max(-1,Math.min(1,(e.beta-qa[1])/14)))},{passive:!0})}var zx=0,kc=null,r1=null,ga=[0,0,0],$d=0,Sc=null,Ec=0,fi={eye:[0,0,0],target:[0,0,0],fov:50,roll:0},oS={apply(t,e){let o=Math.min(.1,Math.max(0,e-zx));zx=e;let r=t.eye,n=t.target,a=[n[0]-r[0],n[1]-r[1],n[2]-r[2]],s=Math.hypot(a[0],a[1],a[2])||1;a=[a[0]/s,a[1]/s,a[2]/s];let i=[-a[2],0,a[0]],c=Math.hypot(i[0],i[2])||1;i=[i[0]/c,0,i[2]/c];let h=[i[1]*a[2]-i[2]*a[1],i[2]*a[0]-i[0]*a[2],i[0]*a[1]-i[1]*a[0]],f=!kc;if(kc&&o>0){let y=[r[0]-kc[0],r[1]-kc[1],r[2]-kc[2]],w=Math.hypot(y[0],y[1],y[2]);if(w>2.5)f=!0;else{let M=Math.min(1,o*5);for(let k=0;k<3;k++)ga[k]+=(y[k]/o-ga[k])*M}let _=Math.hypot(n[0]-r1[0],n[1]-r1[1],n[2]-r1[2]);Ec=w/o<.12&&_/o<.2?Ec+o:0}f&&(ga[0]=ga[1]=ga[2]=0,Ec=0),kc=r.slice(),r1=n.slice(),$d=Math.hypot(ga[0],ga[1],ga[2]);let d=Math.min(1,o*2.6);Mc[0]+=(zc[0]-Mc[0])*d,Mc[1]+=(zc[1]-Mc[1])*d;let u=Math.max(.03,Math.min(.32,s*.05)),v=(eS.isPhone&&!qa?1.5:1)*Math.min(1,Ec/2.5),l=(Math.sin(e*.131)*.55+Math.sin(e*.071+1.3)*.45)*u*.55*v,p=Math.sin(e*.097+.6)*u*.16*v,m=Mc[0]*u+l,g=-Mc[1]*u*.45+p;for(let y=0;y<3;y++)fi.eye[y]=r[y]+i[y]*m+h[y]*g,fi.target[y]=n[y]+(i[y]*m+h[y]*g)*.12;r[1]>.05&&(fi.eye[1]=Math.max(.05,fi.eye[1]));let x=ga[0]*i[0]+ga[2]*i[2];return fi.fov=t.fov+Math.min(3.5,$d*.55),fi.roll=(t.roll||0)+Math.max(-.035,Math.min(.035,-x*.006)),fi},pull(t,e){(Sc===null||!(Math.abs(t.focus-Sc)<40))&&(Sc=t.focus);let o=1/60;Sc+=(t.focus-Sc)*Math.min(1,o*3.2),t.focus=Sc,t.aperture>0&&(t.aperture*=1+.25*Math.min(1,Ec/3))},get speed(){return $d},get resting(){return Ec>2&&performance.now()-Id>2e3}};Ax.exports=oS});var qd=At((Iz,Lx)=>{Lx.exports=1e-6});var Dd=At((qz,Nx)=>{Nx.exports=nS;function nS(){var t=new Float32Array(3);return t[0]=0,t[1]=0,t[2]=0,t}});var Ox=At((Dz,Rx)=>{Rx.exports=rS;function rS(t){var e=new Float32Array(3);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}});var Fd=At((Fz,Cx)=>{Cx.exports=aS;function aS(t,e,o){var r=new Float32Array(3);return r[0]=t,r[1]=e,r[2]=o,r}});var Gd=At((Gz,Px)=>{Px.exports=sS;function sS(t,e){var o=e[0],r=e[1],n=e[2],a=o*o+r*r+n*n;return a>0&&(a=1/Math.sqrt(a),t[0]=e[0]*a,t[1]=e[1]*a,t[2]=e[2]*a),t}});var Hd=At((Hz,$x)=>{$x.exports=iS;function iS(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}});var Fx=At((Uz,Dx)=>{Dx.exports=lS;var Ix=Fd(),qx=Gd(),cS=Hd();function lS(t,e){var o=Ix(t[0],t[1],t[2]),r=Ix(e[0],e[1],e[2]);qx(o,o),qx(r,r);var n=cS(o,r);return n>1?0:Math.acos(n)}});var Hx=At((Bz,Gx)=>{Gx.exports=fS;function fS(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}});var Bx=At((jz,Ux)=>{Ux.exports=hS;function hS(t,e,o,r){return t[0]=e,t[1]=o,t[2]=r,t}});var Wx=At((Wz,jx)=>{jx.exports=uS;var Ud=qd();function uS(t,e){var o=t[0],r=t[1],n=t[2],a=e[0],s=e[1],i=e[2];return Math.abs(o-a)<=Ud*Math.max(1,Math.abs(o),Math.abs(a))&&Math.abs(r-s)<=Ud*Math.max(1,Math.abs(r),Math.abs(s))&&Math.abs(n-i)<=Ud*Math.max(1,Math.abs(n),Math.abs(i))}});var Xx=At((Vz,Vx)=>{Vx.exports=dS;function dS(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]}});var Kx=At((Xz,Yx)=>{Yx.exports=pS;function pS(t,e,o){return t[0]=e[0]+o[0],t[1]=e[1]+o[1],t[2]=e[2]+o[2],t}});var Bd=At((Yz,Qx)=>{Qx.exports=vS;function vS(t,e,o){return t[0]=e[0]-o[0],t[1]=e[1]-o[1],t[2]=e[2]-o[2],t}});var Jx=At((Kz,Zx)=>{Zx.exports=Bd()});var jd=At((Qz,t5)=>{t5.exports=mS;function mS(t,e,o){return t[0]=e[0]*o[0],t[1]=e[1]*o[1],t[2]=e[2]*o[2],t}});var o5=At((Zz,e5)=>{e5.exports=jd()});var Wd=At((Jz,n5)=>{n5.exports=gS;function gS(t,e,o){return t[0]=e[0]/o[0],t[1]=e[1]/o[1],t[2]=e[2]/o[2],t}});var a5=At((tA,r5)=>{r5.exports=Wd()});var i5=At((eA,s5)=>{s5.exports=xS;function xS(t,e,o){return t[0]=Math.min(e[0],o[0]),t[1]=Math.min(e[1],o[1]),t[2]=Math.min(e[2],o[2]),t}});var l5=At((oA,c5)=>{c5.exports=yS;function yS(t,e,o){return t[0]=Math.max(e[0],o[0]),t[1]=Math.max(e[1],o[1]),t[2]=Math.max(e[2],o[2]),t}});var h5=At((nA,f5)=>{f5.exports=bS;function bS(t,e){return t[0]=Math.floor(e[0]),t[1]=Math.floor(e[1]),t[2]=Math.floor(e[2]),t}});var d5=At((rA,u5)=>{u5.exports=wS;function wS(t,e){return t[0]=Math.ceil(e[0]),t[1]=Math.ceil(e[1]),t[2]=Math.ceil(e[2]),t}});var v5=At((aA,p5)=>{p5.exports=_S;function _S(t,e){return t[0]=Math.round(e[0]),t[1]=Math.round(e[1]),t[2]=Math.round(e[2]),t}});var g5=At((sA,m5)=>{m5.exports=MS;function MS(t,e,o){return t[0]=e[0]*o,t[1]=e[1]*o,t[2]=e[2]*o,t}});var y5=At((iA,x5)=>{x5.exports=kS;function kS(t,e,o,r){return t[0]=e[0]+o[0]*r,t[1]=e[1]+o[1]*r,t[2]=e[2]+o[2]*r,t}});var Vd=At((cA,b5)=>{b5.exports=SS;function SS(t,e){var o=e[0]-t[0],r=e[1]-t[1],n=e[2]-t[2];return Math.sqrt(o*o+r*r+n*n)}});var _5=At((lA,w5)=>{w5.exports=Vd()});var Xd=At((fA,M5)=>{M5.exports=ES;function ES(t,e){var o=e[0]-t[0],r=e[1]-t[1],n=e[2]-t[2];return o*o+r*r+n*n}});var S5=At((hA,k5)=>{k5.exports=Xd()});var Yd=At((uA,E5)=>{E5.exports=zS;function zS(t){var e=t[0],o=t[1],r=t[2];return Math.sqrt(e*e+o*o+r*r)}});var A5=At((dA,z5)=>{z5.exports=Yd()});var Kd=At((pA,T5)=>{T5.exports=AS;function AS(t){var e=t[0],o=t[1],r=t[2];return e*e+o*o+r*r}});var N5=At((vA,L5)=>{L5.exports=Kd()});var O5=At((mA,R5)=>{R5.exports=TS;function TS(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t}});var P5=At((gA,C5)=>{C5.exports=LS;function LS(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t}});var I5=At((xA,$5)=>{$5.exports=NS;function NS(t,e,o){var r=e[0],n=e[1],a=e[2],s=o[0],i=o[1],c=o[2];return t[0]=n*c-a*i,t[1]=a*s-r*c,t[2]=r*i-n*s,t}});var D5=At((yA,q5)=>{q5.exports=RS;function RS(t,e,o,r){var n=e[0],a=e[1],s=e[2];return t[0]=n+r*(o[0]-n),t[1]=a+r*(o[1]-a),t[2]=s+r*(o[2]-s),t}});var G5=At((bA,F5)=>{F5.exports=OS;function OS(t,e){e=e||1;var o=Math.random()*2*Math.PI,r=Math.random()*2-1,n=Math.sqrt(1-r*r)*e;return t[0]=Math.cos(o)*n,t[1]=Math.sin(o)*n,t[2]=r*e,t}});var U5=At((wA,H5)=>{H5.exports=CS;function CS(t,e,o){var r=e[0],n=e[1],a=e[2],s=o[3]*r+o[7]*n+o[11]*a+o[15];return s=s||1,t[0]=(o[0]*r+o[4]*n+o[8]*a+o[12])/s,t[1]=(o[1]*r+o[5]*n+o[9]*a+o[13])/s,t[2]=(o[2]*r+o[6]*n+o[10]*a+o[14])/s,t}});var j5=At((_A,B5)=>{B5.exports=PS;function PS(t,e,o){var r=e[0],n=e[1],a=e[2];return t[0]=r*o[0]+n*o[3]+a*o[6],t[1]=r*o[1]+n*o[4]+a*o[7],t[2]=r*o[2]+n*o[5]+a*o[8],t}});var V5=At((MA,W5)=>{W5.exports=$S;function $S(t,e,o){var r=e[0],n=e[1],a=e[2],s=o[0],i=o[1],c=o[2],h=o[3],f=h*r+i*a-c*n,d=h*n+c*r-s*a,u=h*a+s*n-i*r,v=-s*r-i*n-c*a;return t[0]=f*h+v*-s+d*-c-u*-i,t[1]=d*h+v*-i+u*-s-f*-c,t[2]=u*h+v*-c+f*-i-d*-s,t}});var Y5=At((kA,X5)=>{X5.exports=IS;function IS(t,e,o,r){var n=o[1],a=o[2],s=e[1]-n,i=e[2]-a,c=Math.sin(r),h=Math.cos(r);return t[0]=e[0],t[1]=n+s*h-i*c,t[2]=a+s*c+i*h,t}});var Q5=At((SA,K5)=>{K5.exports=qS;function qS(t,e,o,r){var n=o[0],a=o[2],s=e[0]-n,i=e[2]-a,c=Math.sin(r),h=Math.cos(r);return t[0]=n+i*c+s*h,t[1]=e[1],t[2]=a+i*h-s*c,t}});var J5=At((EA,Z5)=>{Z5.exports=DS;function DS(t,e,o,r){var n=o[0],a=o[1],s=e[0]-n,i=e[1]-a,c=Math.sin(r),h=Math.cos(r);return t[0]=n+s*h-i*c,t[1]=a+s*c+i*h,t[2]=e[2],t}});var ey=At((zA,ty)=>{ty.exports=FS;var gs=Dd()();function FS(t,e,o,r,n,a){var s,i;for(e||(e=3),o||(o=0),r?i=Math.min(r*e+o,t.length):i=t.length,s=o;s<i;s+=e)gs[0]=t[s],gs[1]=t[s+1],gs[2]=t[s+2],n(gs,gs,a),t[s]=gs[0],t[s+1]=gs[1],t[s+2]=gs[2];return t}});var ny=At((AA,oy)=>{oy.exports={EPSILON:qd(),create:Dd(),clone:Ox(),angle:Fx(),fromValues:Fd(),copy:Hx(),set:Bx(),equals:Wx(),exactEquals:Xx(),add:Kx(),subtract:Bd(),sub:Jx(),multiply:jd(),mul:o5(),divide:Wd(),div:a5(),min:i5(),max:l5(),floor:h5(),ceil:d5(),round:v5(),scale:g5(),scaleAndAdd:y5(),distance:Vd(),dist:_5(),squaredDistance:Xd(),sqrDist:S5(),length:Yd(),len:A5(),squaredLength:Kd(),sqrLen:N5(),negate:O5(),inverse:P5(),normalize:Gd(),dot:Hd(),cross:I5(),lerp:D5(),random:G5(),transformMat4:U5(),transformMat3:j5(),transformQuat:V5(),rotateX:Y5(),rotateY:Q5(),rotateZ:J5(),forEach:ey()}});var sy=At((TA,ay)=>{"use strict";function ry(){let t={};return{on(e,o){return(t[e]=t[e]||[]).push(o),this},emit(e,o){(t[e]||[]).slice().forEach(r=>r(o))}}}ay.exports=function(e){let o=e.ownerDocument||document,r=ry(),n=null,a={dx:0,dy:0,dt:0},s=0,i=()=>o.pointerLockElement||o.webkitPointerLockElement||null,c=()=>{if(i())return;let f=e.requestPointerLock||e.webkitRequestPointerLock;if(f)try{let d=f.call(e);d&&d.catch&&d.catch(()=>{})}catch(d){}};e.addEventListener("mousedown",c,!1);let h=()=>{if(!i()){n&&(r.emit("release"),n.emit("end"),n=null);return}n=ry(),s=Date.now(),r.emit("attain",n)};return o.addEventListener("pointerlockchange",h),o.addEventListener("webkitpointerlockchange",h),o.addEventListener("pointerlockerror",()=>r.emit("error")),(o.body||e).addEventListener("mousemove",f=>{n&&(a.dx=f.movementX||f.webkitMovementX||0,a.dy=f.movementY||f.webkitMovementY||0,a.dt=Date.now()-s,r.emit("data",a),n.emit("data",a))},!1),r.request=c,r.target=i,r.release=()=>{i()&&(o.exitPointerLock||o.webkitExitPointerLock).call(o)},r}});var hy=At((RA,fy)=>{"use strict";var hi=lc(),ui=ny(),GS=sy(),LA=Math.PI/4,NA=Math.PI/6,iy=2,HS=1,US=2.4,BS=2.4,jS=1e3,WS=5,VS=7,Qd=k0().C,af=[[7,1.6],[7,Qd.zc],[Qd.x1-2.95,Qd.zc]],xs=af.slice(1).map((t,e)=>{let o=af[e],r=t[0]-o[0],n=t[1]-o[1],a=Math.hypot(r,n);return{a:o,len:a,dir:[r/a,n/a]}}),Zd=xs.reduce((t,e)=>t+e.len,0);function cy(t){let e=Math.max(0,Math.min(Zd,t));for(let r of xs){if(e<=r.len)return[r.a[0]+r.dir[0]*e,r.a[1]+r.dir[1]*e];e-=r.len}let o=af[af.length-1];return[o[0],o[1]]}function XS(t){let e=0;for(let r=0;r<xs.length;r++){let n=xs[r],a=e+n.len;if(t<a-1e-4||r===xs.length-1){let s=n.dir,c=t<=e+1e-4&&r>0?xs[r-1].dir:n.dir;return{ahead:s,back:[-c[0],-c[1]]}}e=a}let o=xs[xs.length-1].dir;return{ahead:o,back:[-o[0],-o[1]]}}var YS=Math.PI/4,KS=7,QS=140,ZS=70,ly=(t,e,o)=>(1-t)*e+t*o,JS=t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2;fy.exports=function({getGridSegments:t,getGridParts:e},o){var r=[0,Math.PI],n=[0,Math.PI],a=0,s=[0,0,0],i=[VS,iy,af[0][1]],c=0,h=1,f=0,d=[.707,0,.707],u=[0,1,0],v=[0,0,0],l=.5,p=hi.identity([]),m=hi.identity([]),g=!1,x=[0,0,0],y=[0,0,0],w=1,_=!1;let M=X=>{r[1]+=X*YS},k=(X,gt,Nt)=>{if(X=Math.max(Math.min(X,100),-100),gt=Math.max(Math.min(gt,100),-100),r[0]=0,_){a=0;return}for(a+=X;a>=Nt;)M(1),a-=Nt;for(;a<=-Nt;)M(-1),a+=Nt};GS(document.body).on("attain",X=>{X.on("data",gt=>{k(gt.dx,gt.dy,QS)})});let A=null,F=null,C=0,H={x:0,y:0},I=58,V=document.createElement("div");V.id="museum-mobile-controls",V.innerHTML=`

		<div
			id="museum-joystick"
			aria-label="Move"
		>
			<div
				id="museum-joystick-knob"
			></div>
		</div>

		<div
			id="museum-look-hint"
		>
			SWIPE TO TURN
		</div>
	`,document.body.appendChild(V);let dt=V.querySelector("#museum-joystick"),$t=V.querySelector("#museum-joystick-knob"),kt=()=>{$t.style.transform="translate(-50%, -50%)",s[0]=0,s[2]=0},mt=X=>{let gt=X.clientX-H.x,Nt=X.clientY-H.y,ce=Math.hypot(gt,Nt);if(ce>I&&(gt=gt/ce*I,Nt=Nt/ce*I),$t.style.transform=`translate(
				calc(-50% + ${gt}px),
				calc(-50% + ${Nt}px)
			)`,ce<10){s[0]=0,s[2]=0;return}let ne=gt/I,Bt=Nt/I;s[0]=0,s[2]=Math.abs(Bt)>.15?Bt:0},st=(X,gt)=>{for(let Nt=0;Nt<X.length;Nt++)if(X[Nt].identifier===gt)return X[Nt];return null},Wt=X=>!!(X&&X.closest&&X.closest(".painting-plaque, .story-overlay, .story-card, .story-close, button")),we=X=>{if(!Wt(X.target)&&(X.cancelable&&X.preventDefault(),!_))for(let gt=0;gt<X.changedTouches.length;gt++){let Nt=X.changedTouches[gt];if(A===null&&Nt.clientX<window.innerWidth*.48){A=Nt.identifier;let ce=dt.getBoundingClientRect();H.x=ce.left+ce.width/2,H.y=ce.top+ce.height/2,mt(Nt)}else F===null&&Nt.clientX>=window.innerWidth*.48&&(F=Nt.identifier,C=Nt.clientX,a=0)}},_e=X=>{if(Wt(X.target)||(X.cancelable&&X.preventDefault(),_))return;let gt=A===null?null:st(X.touches,A);gt&&mt(gt);let Nt=F===null?null:st(X.touches,F);if(Nt){let ce=Nt.clientX-C;C=Nt.clientX,k(ce,0,ZS)}},Ve=X=>{if(!Wt(X.target)){X.cancelable&&X.preventDefault();for(let gt=0;gt<X.changedTouches.length;gt++){let Nt=X.changedTouches[gt];Nt.identifier===A&&(A=null,kt()),Nt.identifier===F&&(F=null)}}};document.addEventListener("touchstart",we,{passive:!1}),document.addEventListener("touchmove",_e,{passive:!1}),document.addEventListener("touchend",Ve,{passive:!1}),document.addEventListener("touchcancel",Ve,{passive:!1});let Ie=document.createElement("style");Ie.textContent=`

		#museum-mobile-controls {

			display: none;

			position: fixed;

			inset: 0;

			z-index: 15;

			pointer-events: none;

			touch-action: none;

			user-select: none;

		}


		#museum-joystick {

			position: absolute;

			left: 24px;

			bottom: 28px;

			width: 116px;

			height: 116px;

			border-radius: 50%;

			border:
				1px solid
				rgba(
					226,
					195,
					128,
					.42
				);

			background:
				rgba(
					20,
					15,
					10,
					.22
				);

			box-shadow:
				inset 0 0 22px
				rgba(
					255,
					220,
					140,
					.06
				);

			pointer-events:
				auto;

			touch-action:
				none;
		}


		#museum-joystick-knob {

			position: absolute;

			left: 50%;

			top: 50%;

			width: 48px;

			height: 48px;

			border-radius: 50%;

			border:
				1px solid
				rgba(
					244,
					215,
					135,
					.55
				);

			background:
				rgba(
					191,
					145,
					54,
					.38
				);

			box-shadow:
				0 3px 14px
				rgba(
					0,
					0,
					0,
					.3
				),

				inset 0 0 12px
				rgba(
					255,
					235,
					180,
					.12
				);

			transform:
				translate(
					-50%,
					-50%
				);
		}


		#museum-look-hint {

			position: absolute;

			right: 18px;

			bottom: 34px;

			color:
				rgba(
					245,
					232,
					205,
					.32
				);

			font:
				10px
				Georgia,
				serif;

			letter-spacing:
				.16em;

			pointer-events:
				none;
		}


		@media
		(max-width: 900px)
		and
		(pointer: coarse) {

			#museum-mobile-controls {

				display:
					block;
			}
		}
	`,document.head.appendChild(Ie);var xo={};let ro=X=>{if(X.defaultPrevented||X.ctrlKey||X.altKey||X.metaKey)return;let gt=X.type==="keydown";xo[X.code]=gt,gt&&!X.repeat&&!_&&((X.code==="KeyA"||X.code==="ArrowLeft")&&M(-1),(X.code==="KeyD"||X.code==="ArrowRight")&&M(1)),g=!1;let Nt=xo.KeyW||xo.ArrowUp?1:0;s=[0,0,(xo.KeyS||xo.ArrowDown?1:0)-Nt],X.preventDefault()};window.addEventListener("keydown",ro),window.addEventListener("keyup",ro);var pt=0;return{pos:i,fmouse:n,forward:d,up:u,setPaused:X=>{_=!!X,_&&(s[0]=0,s[2]=0,kt())},place:(X,gt)=>{c=Math.max(0,Math.min(Zd,X));let Nt=cy(c);i[0]=Nt[0],i[2]=Nt[1],r[1]=gt,n[1]=gt,a=0,h=1},view:()=>p,proj:()=>(hi.perspective(m,o(),window.innerWidth/window.innerHeight,.1,700),m),tick:({time:X})=>{let gt=X-pt;pt=X;let Nt=[0,0,0],ce=[];ui.set(d,Math.sin(n[1]),0,-Math.cos(n[1])),ui.set(u,0,1,0);let xe=g?BS:US,ne=Math.sin(r[1]),Bt=-Math.cos(r[1]),rt=XS(c),Xt=ne*rt.ahead[0]+Bt*rt.ahead[1],Te=ne*rt.back[0]+Bt*rt.back[1],Jt=h;Math.max(Xt,Te)>.3&&(Jt=Xt>=Te?1:-1);let It=_?0:-s[2]*xe;f+=(It-f)*(1-Math.exp(-Math.min(gt,.1)*5.5)),It===0&&Math.abs(f)<.01&&(f=0);let He=f*Jt*Math.min(gt,.1);_&&(s[0]=0,s[2]=0,He=0,f=0),He!==0&&(h=Math.sign(He)*Math.sign(-s[2]||1)),c=Math.max(0,Math.min(Zd,c+He));let S=cy(c);ui.set(v,S[0]-i[0],0,S[1]-i[2]);let Ge=ui.len(v);Ge===0&&l!==.25&&(l=(Math.abs((l+.5)%1-.5)-.25)*.8+.25,(l+.01)%.25<.02&&(l=.25));let je=l;if(l+=Ge/(g?WS:jS),i[1]=iy,ui.add(i,i,v),w<1){w+=gt/HS,w=Math.min(w,1);let Je=JS(w);ui.set(i,ly(Je,x[0],y[0]),i[1],ly(Je,x[2],y[2]))}n[0]=0,n[1]+=(r[1]-n[1])*Math.min(1,Math.min(gt,.1)*KS),Math.abs(r[1]-n[1])<5e-4&&(n[1]=r[1]),hi.identity(p),hi.rotateX(p,p,0),hi.rotateY(p,p,n[1]),hi.translate(p,p,ui.scale(Nt,i,-1))}}}});var py=At((OA,dy)=>{"use strict";var{skylightGLSL:tE,Z_START:eE,Z_END:oE,GLASS_Y:nE}=Qi(),{oculusGLSL:rE,A:di}=Nr(),{windowLightGLSL:aE,C:a1}=k0(),{doorLightGLSL:sE}=Ya(),s1=c0(),Ac=Oh(),uy=Qs(),Pr=t=>t.toFixed(4),Jd=.1,tp=700,Tc={exposure:.88,shafts:1,bloom:1,vignette:.42,grain:.032};function iE(t,e){let o=e[0],r=e[1],n=e[2],a=e[3],s=e[4],i=e[5],c=e[6],h=e[7],f=e[8],d=e[9],u=e[10],v=e[11],l=e[12],p=e[13],m=e[14],g=e[15],x=o*i-r*s,y=o*c-n*s,w=o*h-a*s,_=r*c-n*i,M=r*h-a*i,k=n*h-a*c,R=f*p-d*l,A=f*m-u*l,F=f*g-v*l,C=d*m-u*p,H=d*g-v*p,I=u*g-v*m,V=x*I-y*H+w*C+_*F-M*A+k*R;return V?(V=1/V,t[0]=(i*I-c*H+h*C)*V,t[1]=(n*H-r*I-a*C)*V,t[2]=(p*k-m*M+g*_)*V,t[3]=(u*M-d*k-v*_)*V,t[4]=(c*F-s*I-h*A)*V,t[5]=(o*I-n*F+a*A)*V,t[6]=(m*w-l*k-g*y)*V,t[7]=(f*k-u*w+v*y)*V,t[8]=(s*H-i*F+h*R)*V,t[9]=(r*F-o*H-a*R)*V,t[10]=(l*M-p*w+g*x)*V,t[11]=(d*w-f*M-v*x)*V,t[12]=(i*A-s*C-c*R)*V,t[13]=(o*C-r*A+n*R)*V,t[14]=(p*y-l*_-m*x)*V,t[15]=(f*_-d*y+u*x)*V,t):null}function cE(t,e,o){let r=new Array(16);for(let n=0;n<4;n++)for(let a=0;a<4;a++){let s=0;for(let i=0;i<4;i++)s+=e[i*4+a]*o[n*4+i];r[n*4+a]=s}for(let n=0;n<16;n++)t[n]=r[n];return t}var lE=`
precision highp float;
attribute vec2 position;
varying vec2 uv;
void main() {
	uv = position * 0.5 + 0.5;
	gl_Position = vec4(position, 0.0, 1.0);
}`;dy.exports=(t,e)=>{let o=!!e.isPhone,r=t.hasExtension("webgl_depth_texture"),n=o?10:18,a=()=>e.post>=2?2:4,s=st=>t.texture(Object.assign({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"},st||{})),i=()=>t.framebuffer({color:s(),depth:!1}),c=s(),h=r?t.texture({width:4,height:4,format:"depth",type:"uint32"}):null,f=t.framebuffer({color:c,depth:h||!0}),d=[i(),i()],u=[i(),i()],v=[i(),i()],l=[i(),i()],p=new Array(16).fill(0),m=new Array(16).fill(0),g=[0,0,0],x={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},y={position:[-1,-1,3,-1,-1,3]},w=(st,Wt,we)=>t(Object.assign({vert:lE,frag:st,attributes:y,count:3,depth:{enable:!1,mask:!1},cull:{enable:!1},blend:{enable:!1},uniforms:Wt,framebuffer:t.prop("out")},we||{})),_=[2.6,0,eE-3.2,12.6,nE,oE+.4],M=[di.x0-.2,0,di.z0,di.x1,di.domeTop,di.z1],k=[a1.x0,0,a1.z0,a1.x1,7.6,a1.z1],R=[.35,0,.35,13.65,7.6,9],A=uy.AIR_BOX,F=st=>`vec3(${Pr(st[0])}, ${Pr(st[1])}, ${Pr(st[2])}), vec3(${Pr(st[3])}, ${Pr(st[4])}, ${Pr(st[5])})`,C=w(`
	precision highp float;
	varying vec2 uv;
	uniform sampler2D depthTex;
	uniform mat4 invVP;
	uniform vec3 eye;
	uniform float time;
	uniform float night;
	uniform vec4 strength;   // skylight, dome, windows, door
	uniform float strength5; // the studio's windows and glass roof

	float hash12(vec2 p) {
		vec3 p3 = fract(vec3(p.x, p.y, p.x) * 0.1031);
		p3 += dot(p3, p3.yzx + 33.33);
		return fract((p3.x + p3.y) * p3.z);
	}
	float vnoise(vec2 p) {
		vec2 i = floor(p);
		vec2 g = fract(p);
		g = g * g * (3.0 - 2.0 * g);
		return mix(mix(hash12(i), hash12(i + vec2(1.0, 0.0)), g.x),
		           mix(hash12(i + vec2(0.0, 1.0)), hash12(i + vec2(1.0, 1.0)), g.x), g.y);
	}

	${tE()}
	${rE()}
	${aE()}
	${sE()}
	${uy.sunGLSL()}

	// the air is not perfectly even: slow drifting wisps of dust
	float air(vec3 p) {
		vec2 a = p.xz * 0.55 + vec2(p.y * 0.35 + time * 0.05, -p.y * 0.2 - time * 0.03);
		vec2 b = p.zy * 0.9 + vec2(time * 0.04, p.x * 0.3);
		float n = vnoise(a) * vnoise(b + 3.7);
		float day = 0.2 + 1.7 * n * n;
		float nightAir = 0.08 + 2.6 * n * n * n;
		return mix(day, nightAir, night);
	}

	// Henyey-Greenstein: air scatters more light the closer you look
	// towards the sun
	float phase(float c, float g) {
		float g2 = g * g;
		return (1.0 - g2) / pow(1.0 + g2 - 2.0 * g * c, 1.5) * 0.25;
	}

	vec2 hitBox(vec3 ro, vec3 rd, vec3 lo, vec3 hi) {
		vec3 inv = 1.0 / rd;
		vec3 t0 = (lo - ro) * inv;
		vec3 t1 = (hi - ro) * inv;
		vec3 tn = min(t0, t1);
		vec3 tf = max(t0, t1);
		return vec2(max(max(tn.x, tn.y), max(tn.z, 0.0)), min(min(tf.x, tf.y), tf.z));
	}

	void main() {
		float d = texture2D(depthTex, uv).r;
		vec4 w = invVP * vec4(uv * 2.0 - 1.0, d * 2.0 - 1.0, 1.0);
		vec3 P = w.xyz / w.w;
		vec3 rd = P - eye;
		float len = length(rd);
		rd /= len;
		len = min(len, 90.0);

		// a different start for each pixel; the blur afterwards evens it out
		float jit = hash12(gl_FragCoord.xy + fract(time * 7.13) * 61.0);
		const int N = ${n};
		vec3 sum = vec3(0.0);

		// the skylight
		if (strength.x > 0.0) {
			vec2 t = hitBox(eye, rd, ${F(_)});
			t.y = min(t.y, len);
			if (t.y > t.x) {
				float st = (t.y - t.x) / float(N);
				float acc = 0.0;
				for (int i = 0; i < N; i++) {
					vec3 p = eye + rd * (t.x + (float(i) + jit) * st);
					acc += mix(skylightVol(p), skylightAt(p), night) * air(p);
				}
				float ph = phase(dot(rd, SKY_SUN), 0.55) + 0.035;
				sum += mix(vec3(1.0, 0.86, 0.64), vec3(0.62, 0.74, 1.0) * 1.15, night) * acc * st * ph * strength.x;
			}
		}

		// the glass dome over the tree
		if (strength.y > 0.0) {
			vec2 t = hitBox(eye, rd, ${F(M)});
			t.y = min(t.y, len);
			if (t.y > t.x) {
				float st = (t.y - t.x) / float(N);
				float acc = 0.0;
				for (int i = 0; i < N; i++) {
					vec3 p = eye + rd * (t.x + (float(i) + jit) * st);
					if (p.y < ${Pr(di.dome.base)} && p.x > ${Pr(di.x0-.1)}) acc += oculusOpen(p) * treeShade(p) * air(p);
				}
				float ph = phase(dot(rd, SHAFT), 0.6) + 0.05;
				sum += mix(vec3(1.0, 0.88, 0.68), vec3(0.62, 0.74, 1.0) * 1.2, night) * acc * st * ph * strength.y;
			}
		}

		// the corridor windows
		if (strength.z > 0.0) {
			vec2 t = hitBox(eye, rd, ${F(k)});
			t.y = min(t.y, len);
			if (t.y > t.x) {
				float st = (t.y - t.x) / float(N);
				float acc = 0.0;
				for (int i = 0; i < N; i++) {
					vec3 p = eye + rd * (t.x + (float(i) + jit) * st);
					acc += windowLight(p, WIN_SKY) * air(p);
				}
				float ph = phase(dot(rd, WIN_SKY), 0.45) + 0.05;
				sum += mix(vec3(0.86, 0.90, 1.0), vec3(0.55, 0.68, 1.0), night) * acc * st * ph * strength.z;
			}
		}

		// the entrance door
		if (strength.w > 0.0) {
			vec2 t = hitBox(eye, rd, ${F(R)});
			t.y = min(t.y, len);
			if (t.y > t.x) {
				float st = (t.y - t.x) / float(N);
				float acc = 0.0;
				vec3 L = normalize(vec3(-0.22, 0.60, -0.77));
				for (int i = 0; i < N; i++) {
					vec3 p = eye + rd * (t.x + (float(i) + jit) * st);
					acc += doorLight(p, L) * air(p);
				}
				float ph = phase(dot(rd, L), 0.5) + 0.05;
				sum += mix(vec3(1.0, 0.85, 0.66), vec3(1.0, 0.70, 0.40) * 0.45, night) * acc * st * ph * strength.w;
			}
		}

		// the studio: its windows and its glass roof
		if (strength5 > 0.0) {
			vec2 t = hitBox(eye, rd, ${F(A)});
			t.y = min(t.y, len);
			if (t.y > t.x) {
				float st = (t.y - t.x) / float(N);
				float acc = 0.0;
				for (int i = 0; i < N; i++) {
					vec3 p = eye + rd * (t.x + (float(i) + jit) * st);
					acc += studioSun(p) * air(p);
				}
				float ph = phase(dot(rd, STUDIO_SUN), 0.6) + 0.04;
				sum += mix(vec3(1.0, 0.84, 0.62), vec3(0.62, 0.74, 1.0) * 1.15, night) * acc * st * ph * strength5;
			}
		}

		gl_FragColor = vec4(sum, 1.0);
	}`,{depthTex:()=>h,invVP:()=>p,eye:()=>g,time:t.context("time"),night:()=>s1.night,strength:()=>H,strength5:()=>I}),H=[0,0,0,0],I=0;function V(){let st=Tc.shafts*x.shafts,Wt=s1.night;return H[0]=Ac.box(_)?.06*st*(1+.9*Wt):0,H[1]=Ac.box(M,!1,"court")?.1*st*(1+.9*Wt):0,H[2]=Ac.box(k)?.07*st*(1+.4*Wt):0,H[3]=Ac.box(R)?.04*st*(1-.75*Wt):0,Ac.zone==="studio"?(H[0]=H[1]=H[2]=H[3]=0,I=.065*st*(1+1*Wt)):I=0,H[0]+H[1]+H[2]+H[3]+I>5e-4}let dt=w(`
	precision highp float;
	varying vec2 uv;
	uniform sampler2D src;
	uniform vec2 dir;
	void main() {
		vec3 c = texture2D(src, uv).rgb * 0.2270270;
		c += texture2D(src, uv + dir * 1.3846154).rgb * 0.3162162;
		c += texture2D(src, uv - dir * 1.3846154).rgb * 0.3162162;
		c += texture2D(src, uv + dir * 3.2307692).rgb * 0.0702703;
		c += texture2D(src, uv - dir * 3.2307692).rgb * 0.0702703;
		gl_FragColor = vec4(c, 1.0);
	}`,{src:t.prop("src"),dir:(st,Wt)=>[Wt.dir[0]/Wt.size[0],Wt.dir[1]/Wt.size[1]]}),$t=w(`
	precision highp float;
	varying vec2 uv;
	uniform sampler2D src;
	uniform vec2 texel;
	uniform float threshold;
	void main() {
		vec3 c = texture2D(src, uv + texel * vec2(-1.0, -1.0)).rgb;
		c += texture2D(src, uv + texel * vec2(1.0, -1.0)).rgb;
		c += texture2D(src, uv + texel * vec2(-1.0, 1.0)).rgb;
		c += texture2D(src, uv + texel * vec2(1.0, 1.0)).rgb;
		c *= 0.25;
		if (threshold > 0.0) {
			// only what is bright: the glass, the sun on the floor, the lamps
			vec3 lin = c * c;
			float l = dot(lin, vec3(0.2126, 0.7152, 0.0722));
			float k = smoothstep(threshold, threshold + 0.35, l);
			c = lin * k;
		}
		gl_FragColor = vec4(c, 1.0);
	}`,{src:t.prop("src"),texel:(st,Wt)=>[.5/Wt.size[0],.5/Wt.size[1]],threshold:t.prop("threshold")}),kt=w(`
	precision highp float;
	varying vec2 uv;
	uniform sampler2D scene, depthTex, soft, bloomA, bloomB, shafts;
	uniform vec2 res;
	uniform float time, exposure, vignette, grain, letterbox, fade, aperture, focus, hasDepth, bloomK, night;
	uniform vec3 fadeColor;

	float hash12(vec2 p) {
		vec3 p3 = fract(vec3(p.x, p.y, p.x) * 0.1031);
		p3 += dot(p3, p3.yzx + 33.33);
		return fract((p3.x + p3.y) * p3.z);
	}

	float luma(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }

	// edge smoothing (FXAA, the small version)
	vec3 fxaa(vec2 p) {
		vec2 px = 1.0 / res;
		vec3 rgbNW = texture2D(scene, p + vec2(-1.0, -1.0) * px).rgb;
		vec3 rgbNE = texture2D(scene, p + vec2(1.0, -1.0) * px).rgb;
		vec3 rgbSW = texture2D(scene, p + vec2(-1.0, 1.0) * px).rgb;
		vec3 rgbSE = texture2D(scene, p + vec2(1.0, 1.0) * px).rgb;
		vec3 rgbM = texture2D(scene, p).rgb;
		float lNW = luma(rgbNW), lNE = luma(rgbNE), lSW = luma(rgbSW), lSE = luma(rgbSE), lM = luma(rgbM);
		float lMin = min(lM, min(min(lNW, lNE), min(lSW, lSE)));
		float lMax = max(lM, max(max(lNW, lNE), max(lSW, lSE)));
		vec2 dir = vec2(-((lNW + lNE) - (lSW + lSE)), ((lNW + lSW) - (lNE + lSE)));
		float reduce = max((lNW + lNE + lSW + lSE) * 0.03125, 1.0 / 128.0);
		float rcp = 1.0 / (min(abs(dir.x), abs(dir.y)) + reduce);
		dir = clamp(dir * rcp, -8.0, 8.0) * px;
		vec3 a = 0.5 * (texture2D(scene, p + dir * (1.0 / 3.0 - 0.5)).rgb + texture2D(scene, p + dir * (2.0 / 3.0 - 0.5)).rgb);
		vec3 b = a * 0.5 + 0.25 * (texture2D(scene, p + dir * -0.5).rgb + texture2D(scene, p + dir * 0.5).rgb);
		float lB = luma(b);
		return (lB < lMin || lB > lMax) ? a : b;
	}

	float linearDepth(float d) {
		float z = d * 2.0 - 1.0;
		return 2.0 * ${Pr(Jd)} * ${Pr(tp)} / (${Pr(tp+Jd)} - z * ${Pr(tp-Jd)});
	}

	// a filmic curve (ACES, fitted): soft shoulder, rich toe
	vec3 aces(vec3 x) {
		return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
	}

	void main() {
		vec2 p = uv;

		// letterbox: the picture is framed by black bars top and bottom
		float bar = letterbox * 0.11;
		if (p.y < bar || p.y > 1.0 - bar) {
			gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
			return;
		}

		vec3 c = fxaa(p);

		// a real lens: towards the corners the colours part by a hair
		vec2 off = p - 0.5;
		float edge = dot(off, off);
		float fringe = smoothstep(0.06, 0.45, edge);
		if (fringe > 0.0) {
			c.r = mix(c.r, texture2D(scene, p - off * edge * 0.010).r, fringe);
			c.b = mix(c.b, texture2D(scene, p + off * edge * 0.010).b, fringe);
		}

		// depth of field: blend towards the soft picture away from the subject
		if (aperture > 0.0 && hasDepth > 0.5) {
			float z = linearDepth(texture2D(depthTex, p).r);
			// (things nearer than the subject soften a little less, so a leaf
			// drifting before a painting still reads)
			float coc = clamp(abs(z - focus) / max(max(z, focus), 0.5) * aperture, 0.0, 1.0);
			c = mix(c, texture2D(soft, p).rgb, smoothstep(0.0, 1.0, coc));
		}

		// into linear light
		vec3 lin = pow(c, vec3(2.2));

		// darker, more ambient: the room sinks, the light stays light
		float L = dot(lin, vec3(0.2126, 0.7152, 0.0722));
		lin *= mix(0.62, 1.0, smoothstep(0.04, 0.55, L)) * exposure;

		// the light shafts and the glow add light
		lin += texture2D(shafts, p).rgb;
		// (the wide glow is halation: warm round the sun, cold round the moon)
		lin += (texture2D(bloomA, p).rgb * 0.45 + texture2D(bloomB, p).rgb * 0.6 * mix(vec3(1.06, 0.94, 0.80), vec3(0.86, 0.94, 1.08), night)) * bloomK;

		// a soft shoulder instead of a hard clip
		vec3 over = max(lin - 0.7, 0.0);
		lin = min(lin, 0.7) + 0.3 * (1.0 - exp(-over / 0.3));

		vec3 col = pow(lin, vec3(1.0 / 2.2));

		// a gentle S-curve, warm shadows, a touch less saturation
		col = col * col * (3.0 - 2.0 * col) * (0.35 + 0.15 * night) + col * (0.65 - 0.15 * night);
		float l2 = luma(col);
		// by night the shadows turn cold and blue-green, like moonlit film
		col = mix(col, col * mix(vec3(1.05, 0.99, 0.90), vec3(0.86, 0.97, 1.10), night), (1.0 - smoothstep(0.0, 0.5, l2)) * 0.7);
		col = mix(vec3(l2), col, 0.93 - 0.13 * night);

		// vignette
		vec2 q = (p - 0.5) * vec2(res.x / res.y, 1.0);
		float vig = 1.0 - smoothstep(0.35, 1.25, length(q * vec2(0.82, 1.0)) * 1.15) * vignette;
		col *= vig;

		// film grain, stronger in the shadows
		float n = hash12(gl_FragCoord.xy + fract(time * 13.37) * 113.0) - 0.5;
		col += n * grain * (1.0 - 0.6 * luma(col));

		col = mix(col, fadeColor, fade);
		gl_FragColor = vec4(col, 1.0);
	}`,{scene:()=>c,depthTex:()=>h||c,soft:()=>d[0],bloomA:()=>u[0],bloomB:()=>v[0],shafts:()=>l[0],res:()=>[f.width,f.height],time:t.context("time"),exposure:()=>Tc.exposure*x.exposure,vignette:()=>Math.min(1,Tc.vignette+x.vignette+.22*s1.night+(Ac.zone==="studio"?.2:0)),night:()=>s1.night,grain:()=>Tc.grain,bloomK:()=>Tc.bloom,letterbox:()=>x.letterbox,fade:()=>x.fade,fadeColor:()=>x.fadeColor,aperture:()=>e.post>=2?x.aperture:0,focus:()=>x.focus,hasDepth:r?1:0},{framebuffer:null}),mt=t({framebuffer:()=>f});return{shot:x,look:Tc,hasDepth:r,capture(st,Wt,we){let _e=Math.max(.4,Math.min(1,e.scale||1)),Ve=Math.max(2,Math.round(st.drawingBufferWidth*_e/2)*2),Ie=Math.max(2,Math.round(st.drawingBufferHeight*_e/2)*2);(f.width!==Ve||f.height!==Ie)&&f.resize(Ve,Ie);let xo=Math.max(1,Math.ceil(Ve/2)),ro=Math.max(1,Math.ceil(Ie/2));d.forEach(pt=>pt.resize(xo,ro)),u.forEach(pt=>pt.resize(Math.max(1,Math.ceil(Ve/4)),Math.max(1,Math.ceil(Ie/4)))),v.forEach(pt=>pt.resize(Math.max(1,Math.ceil(Ve/8)),Math.max(1,Math.ceil(Ie/8)))),l.forEach(pt=>pt.resize(Math.max(1,Math.ceil(Ve/a())),Math.max(1,Math.ceil(Ie/a())))),cE(m,Wt.proj,Wt.view),iE(p,m),g[0]=Wt.eye[0],g[1]=Wt.eye[1],g[2]=Wt.eye[2],mt(()=>{t.clear({color:[0,0,0,1],depth:1}),we()})},present(){let st=Wt=>[Wt.width,Wt.height];r&&e.post>=1&&V()?(C({out:l[0]}),dt({out:l[1],src:l[0],dir:[1,0],size:st(l[0])}),dt({out:l[0],src:l[1],dir:[0,1],size:st(l[0])})):t.clear({color:[0,0,0,1],framebuffer:l[0]}),$t({out:d[0],src:c,size:[f.width,f.height],threshold:0}),dt({out:d[1],src:d[0],dir:[1,0],size:st(d[0])}),dt({out:d[0],src:d[1],dir:[0,1],size:st(d[0])}),$t({out:u[0],src:d[0],size:st(d[0]),threshold:.42}),dt({out:u[1],src:u[0],dir:[1,0],size:st(u[0])}),dt({out:u[0],src:u[1],dir:[0,1],size:st(u[0])}),$t({out:v[0],src:u[0],size:st(u[0]),threshold:0}),dt({out:v[1],src:v[0],dir:[1.5,0],size:st(v[0])}),dt({out:v[0],src:v[1],dir:[0,1.5],size:st(v[0])}),kt({out:null})}}}});var yy=At((CA,xy)=>{"use strict";var vy=c0().GLSL,fE=Gs(),ep=Ya(),{C:hE,FAR_DOOR:uE}=k0(),dE=100*Math.PI/180,my=t=>[uE.x-t[2],t[1],hE.zc-7+t[0]],gy=t=>[-t[2],t[1],t[0]];function pE(t){let e=[],o=[],r=[],n=[],a=fE.createBuilder(e,o,r,n);ep.addFrames(a,t);let s=ep.glassPanes(t),i=c=>{let h=[];for(let f=0;f<c.length;f+=3)h.push([c[f],c[f+1],c[f+2]]);return h};return{position:i(e),normal:i(o),elements:r,glass:s}}xy.exports=t=>{let e=ep.DOOR,o=["left","right"].map(f=>{let d=pE(f),u=d.position.length;return{part:f,hinge:f==="left"?e.x0:e.x1,sign:f==="left"?-1:1,src:d.position.map(v=>v.slice()),srcN:d.normal.map(v=>v.slice()),srcG:d.glass.map(v=>v.slice()),pos:t.buffer({data:new Float32Array(u*3),usage:"dynamic"}),nrm:t.buffer({data:new Float32Array(u*3),usage:"dynamic"}),gpos:t.buffer({data:new Float32Array(d.glass.length*3),usage:"dynamic"}),gnrm:t.buffer({data:new Float32Array(d.glass.length*3),usage:"dynamic"}),el:t.elements({data:new Uint32Array(d.elements),type:"uint32"}),glassCount:d.glass.length,outP:new Float32Array(u*3),outN:new Float32Array(u*3),outG:new Float32Array(d.glass.length*3),outGN:new Float32Array(d.glass.length*3)}}),r=null;function n(f){if(f!==r){r=f;for(let d of o){let u=d.sign*f,v=Math.cos(u),l=Math.sin(u),p=x=>{let y=x[0]-d.hinge,w=x[2];return[d.hinge+y*v+w*l,x[1],-y*l+w*v]},m=x=>[x[0]*v+x[2]*l,x[1],-x[0]*l+x[2]*v];d.src.forEach((x,y)=>{let w=my(p(x));d.outP.set(w,y*3),d.outN.set(gy(m(d.srcN[y])),y*3)});let g=gy(m([0,0,1]));d.srcG.forEach((x,y)=>{d.outG.set(my(p(x)),y*3),d.outGN.set(g,y*3)}),d.pos.subdata(d.outP),d.nrm.subdata(d.outN),d.gpos.subdata(d.outG),d.gnrm.subdata(d.outGN)}}}n(0);let a=`
	precision highp float;
	uniform mat4 proj, view;
	uniform float yScale;
	attribute vec3 position, normal;
	varying vec3 v_pos, v_n, v_eye;
	void main() {
		v_pos = position;
		v_n = normal;
		vec3 t = view[3].xyz;
		v_eye = -vec3(dot(view[0].xyz, t), dot(view[1].xyz, t), dot(view[2].xyz, t));
		v_eye.y *= yScale;
		vec3 p = position;
		p.y *= yScale;
		gl_Position = proj * view * vec4(p, 1.0);
	}`,s=t({vert:a,frag:`
		precision highp float;
		${vy}
		varying vec3 v_pos, v_n, v_eye;
		void main() {
			vec3 N = normalize(v_n);
			if (!gl_FrontFacing) N = -N;
			vec3 V = normalize(v_eye - v_pos);
			vec3 L = normalize(vec3(1.0, 0.6, 0.2));
			float d = max(dot(N, L), 0.0);
			vec3 col = vec3(0.045, 0.045, 0.048) * (0.35 + 0.5 * d);
			vec3 H = normalize(L + V);
			col += vec3(0.30, 0.29, 0.27) * pow(max(dot(N, H), 0.0), 24.0) * 0.18;
			gl_FragColor = vec4(toNight(col, 0.22), 1.0);
		}`,attributes:{position:t.prop("pos"),normal:t.prop("nrm")},elements:t.prop("el"),cull:{enable:!1}}),i=t({vert:a,frag:`
		precision highp float;
		${vy}
		varying vec3 v_pos, v_n, v_eye;
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			float c = abs(dot(V, normalize(v_n)));
			float fres = pow(1.0 - c, 3.0);
			float d = (v_pos.x + v_pos.z) * 0.55 + v_pos.y * 0.85;
			float sheen = smoothstep(0.35, 0.0, abs(fract(d * 0.22) - 0.5)) * 0.05;
			float a = 0.05 + 0.32 * fres + sheen;
			gl_FragColor = vec4(toNight(mix(vec3(0.80, 0.86, 0.90), vec3(1.0, 0.95, 0.86), 0.4), 0.22), a);
		}`,attributes:{position:t.prop("pos"),normal:t.prop("nrm")},count:t.prop("count"),cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}}),c=0,h=()=>{n(c*dE);for(let f of o)s({pos:f.pos,nrm:f.nrm,el:f.el})};return h.glass=()=>{for(let f of o)i({pos:f.gpos,nrm:f.gnrm,count:f.glassCount})},h.setOpen=f=>{c=f||0},h.openNow=()=>c,h}});var wy=At((PA,by)=>{"use strict";var vE=c0().GLSL,{skylightGLSL:mE}=Qi(),{oculusGLSL:gE}=Nr(),{windowLightGLSL:xE}=k0(),ea=.22;function yE(){let t=[],e=[],o=[],r=[],s=(f,d)=>{let u=ea*.2*Math.pow(Math.sin(Math.PI*Math.pow(f,.85)),.9)*(d>0?1.06:.94),v=f*ea-ea*.12,l=d*u,p=Math.abs(d)*u*.42-.14*f*f*ea;p+=Math.sin(f*17+(d>0?0:2.1))*.012*ea*d*d;let m=(f-.3)*.55,g=Math.cos(m),x=Math.sin(m),y=p*g-l*x,w=p*x+l*g;return[v,y,w+.05*ea*f*f]},i=(f,d)=>{let v=s(Math.min(1,f+.01),d),l=s(Math.max(0,f-.01),d),p=s(f,Math.min(1,d+.01)),m=s(f,Math.max(-1,d-.01)),g=[v[0]-l[0],v[1]-l[1],v[2]-l[2]],x=[p[0]-m[0],p[1]-m[1],p[2]-m[2]],y=[x[1]*g[2]-x[2]*g[1],x[2]*g[0]-x[0]*g[2],x[0]*g[1]-x[1]*g[0]],w=Math.hypot(y[0],y[1],y[2])||1,_=y[1]<0?-1:1;return[y[0]/w*_,y[1]/w*_,y[2]/w*_]};for(let f=0;f<=18;f++){let d=f/18;for(let u=0;u<=5*2;u++){let v=u/5-1;t.push(s(d,v)),e.push(i(Math.min(.97,Math.max(.03,d)),v)),o.push([d,v])}}let c=5*2+1;for(let f=0;f<18;f++)for(let d=0;d<c-1;d++){let u=f*c+d,v=u+1,l=u+c,p=l+1;r.push([u,l,v],[v,l,p])}let h=t.length;return t.push([-ea*.12,0,-.003],[-ea*.12,0,.003],[-ea*.24,-.01,.0015],[-ea*.24,-.01,-.0015]),e.push([0,1,0],[0,1,0],[0,1,0],[0,1,0]),o.push([0,0],[0,0],[-.1,0],[-.1,0]),r.push([h,h+2,h+1],[h,h+3,h+2]),{pos:t,nrm:e,uv:o,idx:r}}by.exports=t=>{let e=yE(),o=t({vert:`
		precision highp float;
		uniform mat4 proj, view, model;
		uniform float yScale;
		attribute vec3 position;
		attribute vec3 normal;
		attribute vec2 uv;
		varying vec3 v_pos, v_normal;
		varying vec2 v_uv;
		varying vec3 v_eye;
		void main() {
			vec4 w = model * vec4(position, 1.0);
			v_pos = w.xyz;
			v_normal = normalize(mat3(model) * normal);
			v_uv = uv;
			vec3 t = view[3].xyz;
			v_eye = -vec3(dot(view[0].xyz, t), dot(view[1].xyz, t), dot(view[2].xyz, t));
			v_eye.y *= yScale;
			w.y *= yScale;
			gl_Position = proj * view * w;
		}`,frag:`
		precision highp float;
		${vE}
		uniform float time;
		uniform float yScale, visible;
		varying vec3 v_pos, v_normal;
		varying vec2 v_uv;
		varying vec3 v_eye;

		${mE()}
		${gE()}
		${xE()}

		void main() {
			if (yScale < 0.0 && v_pos.y < 0.0) discard;
			vec3 N = normalize(v_normal);
			vec3 V = normalize(v_eye - v_pos);
			if (!gl_FrontFacing) N = -N;

			// colour: olive green, lighter along the midrib, darker at the edge
			float across = abs(v_uv.y);
			vec3 base = mix(vec3(0.20, 0.30, 0.10), vec3(0.32, 0.40, 0.15), 1.0 - across);
			base = mix(base, vec3(0.55, 0.58, 0.32), (1.0 - smoothstep(0.0, 0.08, across)) * 0.6);
			// a hint of autumn towards the tip
			base = mix(base, vec3(0.55, 0.42, 0.14), smoothstep(0.55, 1.0, v_uv.x) * 0.35);
			// the side veins, branching forward from the midrib: paler
			// lines on the face, and the blade between them a shade deeper
			float sideVein = 1.0 - smoothstep(0.0, 0.05, abs(fract(v_uv.x * 8.0 - across * 2.4) - 0.5) - 0.40);
			base = mix(base * 0.90, base * 1.18 + vec3(0.03, 0.03, 0.0), sideVein * (1.0 - across) * 0.55);
			// the underside is paler and greyer, as an olive leaf's is
			if (!gl_FrontFacing) base = mix(base, vec3(0.50, 0.55, 0.42), 0.55);
			// a dry, darker edge
			base *= 1.0 - 0.25 * smoothstep(0.82, 1.0, across);

			// the sun from the skylight or the dome, whichever reaches it
			float sky = skylightVol(v_pos);
			float dome = 0.0;
			if (v_pos.x > 14.0) dome = oculusOpen(v_pos) * treeShade(v_pos);
			vec3 L = v_pos.x > 14.0 ? SHAFT : SKY_SUN;
			float sun = max(sky, dome);
			// in the corridor: daylight from the garden windows
			float win = windowLight(v_pos, WIN_SKY);
			if (win > sun) { sun = win * 0.8; L = WIN_SKY; }

			float front = max(dot(N, L), 0.0);
			float back = max(dot(-N, L), 0.0);
			// light passing through the leaf, strongest looking towards the sun
			float through = (back + 0.35 * front) * pow(max(dot(-V, L), 0.0), 2.0);

			// the room's own soft light, and a rim where it turns from you
			vec3 col = base * (0.62 + 0.25 * max(N.y, 0.0) + 0.35 * corridorGlow(v_pos));
			col += vec3(0.85, 0.80, 0.65) * pow(1.0 - abs(dot(N, V)), 3.0) * 0.3;
			col += base * vec3(1.15, 1.05, 0.85) * sun * (front * 1.3 + 0.2);
			col += vec3(0.70, 0.82, 0.25) * sun * through * 3.6;
			// in the dim hall, away from any sun, it still catches the soft
			// light of the room (and of the picture lights) along its edges
			float shade = 1.0 - clamp(sun * 2.0, 0.0, 1.0);
			col += (vec3(0.13, 0.17, 0.06) + vec3(0.30, 0.27, 0.18) * pow(1.0 - abs(dot(N, V)), 2.0)) * shade;
			// a waxy glint
			vec3 H = normalize(L + V);
			col += vec3(1.0, 0.95, 0.85) * sun * pow(max(dot(N, H), 0.0), 40.0) * 0.6;

			col = toNight(col, 0.55);
			// at night it glows from within, gold-green, brightest along
			// its veins and midrib, flickering faintly, like something
			// carrying the last of the light
			float vein = 1.0 - smoothstep(0.0, 0.07, across);
			float side = 1.0 - smoothstep(0.0, 0.035, abs(fract(v_uv.x * 7.0 - across * 2.2) - 0.5) - 0.42);
			float pulse = 0.88 + 0.12 * sin(time * 1.7) * sin(time * 0.63 + 1.0);
			vec3 glow = vec3(0.62, 0.88, 0.30) * (0.55 + 0.9 * vein + 0.35 * side * (1.0 - across))
				+ vec3(1.0, 0.85, 0.45) * pow(1.0 - abs(dot(N, V)), 2.0) * 0.5;
			col += glow * 1.35 * pulse * night;
			gl_FragColor = vec4(col * visible, 1.0);
		}`,attributes:{position:e.pos,normal:e.nrm,uv:e.uv},elements:e.idx,uniforms:{model:t.prop("model"),visible:1},cull:{enable:!1}}),r=c0(),n=t({vert:`
		precision highp float;
		uniform mat4 proj, view, model;
		uniform float yScale;
		attribute vec2 corner;
		varying vec2 v_uv;
		void main() {
			vec3 c = (model * vec4(${(ea*.35).toFixed(3)}, 0.0, 0.0, 1.0)).xyz;
			vec3 right = vec3(view[0][0], view[1][0], view[2][0]);
			vec3 up = vec3(view[0][1], view[1][1], view[2][1]);
			vec3 p = c + (right * corner.x + up * corner.y) * 0.55;
			v_uv = corner;
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`
		precision highp float;
		uniform float night, time;
		varying vec2 v_uv;
		void main() {
			float r = length(v_uv);
			float pulse = 0.88 + 0.12 * sin(time * 1.7) * sin(time * 0.63 + 1.0);
			vec3 col = vec3(0.70, 0.95, 0.40) * (pow(max(1.0 - r, 0.0), 2.5) * 0.28 + pow(max(1.0 - r, 0.0), 10.0) * 0.5);
			gl_FragColor = vec4(col * night * pulse, 1.0);
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{model:t.prop("model"),night:()=>r.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(a){a&&a.visible&&(o({model:a.model}),r.night>.01&&n({model:a.model}))}}});var ky=At(($A,My)=>{"use strict";var{skylightGLSL:bE,Z_START:_y,Z_END:wE}=Qi(),{oculusGLSL:_E,A:Lc}=Nr(),{windowLightGLSL:ME,C:pi}=k0();My.exports=(t,e)=>{let o=e.isPhone?900:2600,r=e.isPhone?350:900,n=e.isPhone?450:1300,a=e.isPhone?13:22,s=7,i=()=>(s=s*16807%2147483647,(s-1)/2147483646),c=pi.x0+.6,h=pi.x1-.3,f=[];for(let l=0;l<o;l++)f.push([2.5+i()*10.5,.3+i()*8,_y-3.5+i()*(wE-_y+4.5),i()]);for(let l=0;l<r;l++)f.push([Lc.x0+.3+i()*(Lc.x1-Lc.x0-.6),.3+i()*7.5,Lc.z0+.3+i()*(Lc.z1-Lc.z0-.6),i()]);for(let l=0;l<n;l++)f.push([c+i()*(h-c),.2+i()*5.6,pi.z0+.25+i()*(pi.z1-pi.z0-.5),i()]);let d=l=>l.toFixed(4),u=[[0,-50,0,0],[0,-50,0,0],[0,-50,0,0],[0,-50,0,0]],v=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float time, pixelScale, night, focus, aperture;
		uniform vec4 wake0, wake1, wake2, wake3;
		uniform vec3 wakeDir;
		uniform vec2 gust;
		attribute vec4 seed;
		varying float v_light;
		varying float v_seed;
		varying float v_bokeh;

		${bE()}
		${_E()}
		${ME()}

		// the leaf's wake: motes near its path are dragged along and
		// swirl round it
		vec3 stir(vec3 p, vec4 w) {
			vec3 d = p - w.xyz;
			float k = w.w * exp(-dot(d, d) * 3.2);
			return (cross(wakeDir, d) * 2.4 + wakeDir * 0.30 + vec3(0.0, 0.10, 0.0)) * k;
		}

		void main() {
			vec3 p = seed.xyz;
			float s = seed.w * 6.2831;
			bool wing = p.x > 14.0 && p.z > 30.0;
			// slow drifting, the way dust hangs and turns in still air (two
			// unrelated rhythms each way, so the pattern never repeats)
			p += vec3(sin(time * 0.11 + s * 3.0) * 0.30 + sin(time * 0.047 + s * 7.0) * 0.18,
			          sin(time * 0.07 + s * 5.0) * 0.22 - 0.02 * time * (0.5 + seed.w),
			          cos(time * 0.09 + s * 2.0) * 0.30 + cos(time * 0.039 + s * 9.0) * 0.18) * (wing ? 0.6 : 1.0);
			if (wing) {
				p.y = mod(p.y - 0.2, 5.6) + 0.2;
				// the gust from the far door carries the corridor's air along
				// with it, tumbling as it goes
				p.x = ${d(c)} + mod(p.x - ${d(c)} - gust.x * (0.55 + 0.9 * seed.w), ${d(h-c)});
				p.y += sin(time * 5.0 + s * 11.0) * 0.22 * gust.y;
				p.z += cos(time * 4.3 + s * 13.0) * 0.30 * gust.y;
				p.z = clamp(p.z, ${d(pi.z0+.1)}, ${d(pi.z1-.1)});
			} else {
				p.y = mod(p.y - 0.3, 8.0) + 0.3;
			}

			p += stir(p, wake0) + stir(p, wake1) + stir(p, wake2) + stir(p, wake3);

			float light;
			if (wing) light = windowLight(p, WIN_SKY) * 0.9;
			else if (p.x > 14.0) light = oculusOpen(p) * treeShade(p);
			else light = skylightAt(p);
			v_seed = seed.w;

			vec4 vp = view * vec4(p, 1.0);
			float dist = max(-vp.z, 0.05);
			gl_Position = proj * vp;

			// motes that catch no light are not drawn at all
			if (light <= 0.02 || vp.z > -0.08) {
				gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
				gl_PointSize = 0.0;
				v_light = 0.0;
				v_bokeh = 0.0;
				return;
			}

			// in focus: a fine point. Out of focus (or right by the lens): a
			// soft disc, as much dimmer as it is larger
			float sharp = clamp(pixelScale * (0.8 + 1.1 * seed.w) / dist, 1.0, 5.0);
			float coc = aperture > 0.0 ? clamp(abs(dist - focus) / max(max(dist, focus), 0.5) * aperture, 0.0, 1.0) : 0.0;
			float near = 1.0 - smoothstep(0.25, 1.6, dist);
			float blur = clamp(coc * 0.7 + near, 0.0, 1.0);
			float size = sharp + blur * ${d(a)} * (0.6 + 0.4 * seed.w);
			gl_PointSize = size;
			v_bokeh = blur;
			v_light = light * pow(sharp / size, 1.25) * (1.0 + 2.2 * blur);
		}`,frag:`
		precision highp float;
		uniform float time;
		uniform float night;
		varying float v_light;
		varying float v_seed;
		varying float v_bokeh;
		void main() {
			float r = length(gl_PointCoord - 0.5) * 2.0;
			// a point of light, or (out of focus) a flat disc with a faintly
			// brighter rim, the way a lens draws it
			float point = exp(-r * r * 3.2) * (1.0 - smoothstep(0.85, 1.0, r));
			float disc = (1.0 - smoothstep(0.86, 1.0, r)) * (0.72 + 0.34 * smoothstep(0.45, 0.92, r));
			float a = mix(point, disc, smoothstep(0.08, 0.5, v_bokeh));
			// each mote glints as it turns: two rhythms of its own, so the
			// air never pulses in step
			float t1 = sin(time * (0.9 + v_seed * 2.3) + v_seed * 40.0);
			float t2 = sin(time * (0.37 + v_seed * 1.1) + v_seed * 17.0);
			float tw = 0.35 + 0.65 * smoothstep(-0.6, 1.0, t1 * t2 + 0.35 * t1);
			// warm gold motes in the sun; silver ones, a little brighter against
			// the dark, in the moonlight
			gl_FragColor = vec4(mix(vec3(1.0, 0.93, 0.80), vec3(0.78, 0.86, 1.0) * 0.85, night) * a * v_light * tw * 0.8, 1.0);
		}`,attributes:{seed:f},count:f.length,primitive:"points",uniforms:{time:t.context("time"),pixelScale:l=>l.viewportHeight*.006,focus:(l,p)=>p&&p.focus||6,aperture:(l,p)=>p&&p.aperture||0,wake0:(l,p)=>(p&&p.wake||u)[0],wake1:(l,p)=>(p&&p.wake||u)[1],wake2:(l,p)=>(p&&p.wake||u)[2],wake3:(l,p)=>(p&&p.wake||u)[3],wakeDir:(l,p)=>p&&p.wakeDir||[0,0,1],gust:(l,p)=>p&&p.gust||[0,0]},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});return l=>v(l||{})}});var Ly=At((IA,Ty)=>{"use strict";var{C:Ay}=k0(),Sy=c0(),Ey=15.3,kE=37.1,zy=Ay.z1+.9,SE=Ay.z1+.7+16-.6;Ty.exports=(t,e)=>{let o=e.isPhone?36:80,r=11,n=()=>(r=r*16807%2147483647,(r-1)/2147483646),a=[];for(let h=0;h<o;h++){let f=.35+Math.pow(n(),1.8)*2.4;a.push([Ey+n()*(kE-Ey),f,zy+n()*(SE-zy),n()])}let s=[],i=[];a.forEach(h=>{[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(f=>{s.push(f[0],f[1]),i.push(...h)})});let c=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float time, yScale;
		attribute vec2 corner;
		attribute vec4 seed;
		varying float v_glow;
		varying vec2 v_uv;
		void main() {
			float s = seed.w * 6.2831;
			// a slow wandering path, different for each
			vec3 p = seed.xyz + vec3(
				sin(time * (0.11 + seed.w * 0.07) + s) * 0.9 + sin(time * 0.37 + s * 3.0) * 0.18,
				sin(time * (0.17 + seed.w * 0.05) + s * 2.0) * 0.25,
				cos(time * (0.09 + seed.w * 0.06) + s) * 0.9 + cos(time * 0.41 + s * 1.7) * 0.15);
			// glowing, then dark for a while: each on its own rhythm
			float period = 3.5 + seed.w * 4.0;
			float ph = fract(time / period + seed.w * 7.31);
			v_glow = 0.06 + 0.94 * smoothstep(0.0, 0.1, ph) * (1.0 - smoothstep(0.45, 0.75, ph));
			vec3 right = vec3(view[0][0], view[1][0], view[2][0]);
			vec3 up = vec3(view[0][1], view[1][1], view[2][1]);
			float size = 0.17;
			p += (right * corner.x + up * corner.y) * size;
			v_uv = corner;
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`
		precision highp float;
		uniform float night;
		varying float v_glow;
		varying vec2 v_uv;
		void main() {
			float r = length(v_uv);
			// a bright little core and a soft halo
			float core = 1.0 - smoothstep(0.0, 0.22, r);
			float halo = pow(max(1.0 - r, 0.0), 2.2);
			vec3 col = vec3(0.80, 1.0, 0.42) * (core * 4.0 + halo * 1.3);
			gl_FragColor = vec4(col * v_glow * night, 1.0);
		}`,attributes:{corner:s,seed:i},count:s.length/2,uniforms:{time:t.context("time"),night:()=>Sy.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(){Sy.night>.01&&c()}}});var l1=At((qA,wr)=>{"use strict";var Ny=c0(),xa=es(),EE=lc(),bs=Math.PI,Fe=t=>(+t).toFixed(4),oa=t=>`vec3(${Fe(t[0])}, ${Fe(t[1])}, ${Fe(t[2])})`,rn={x0:-2.05,z0:41.45,z1:47.55,top:5.1},Do=-.55,o0=-2,bn=42.25,Bn=43.65,qr=45.35,W0=46.75,u0=2.75,yr=.12,zE=(Do+o0)/2,Yo={x:-1.3,y:1.42,w:.42,h:.52,z:Bn,cell:.026},io={x0:-1.85,x1:-.75,top:.98,z0:Bn-.3,z1:Bn-.02},$r={x0:-1.44,x1:-1.16,y0:io.top-.002,y1:io.top+.018},br={cx:-1.3,cz:Bn-.165,w:.2,d:.255,y:io.top+.0012},_0={x:-1.03,z:Bn-.14,r:.042,h:.075},cn={x:-.86,z:Bn-.12,h:.085,r:.019};cn.flame=[cn.x,io.top+.012+cn.h+.028,cn.z];var c1={a:[_0.x-.004,io.top+.03,_0.z+.004],b:[_0.x-.13,io.top+.34,_0.z-.12]},wn=[-1.5,2.42,44.66],Un=[-1.78,1.95,bn+.09],Ir={x:-1.32,z:44.08,y:.64,heading:.32},Cy={window:{eye:[-1.3,1.33,42.8],target:[Yo.x,1.37,Bn],fov:54},paper:{eye:[-1.3,1.4,43.23],target:[br.cx,io.top,br.cz+.01],fov:40},front:{eye:[1.6,1.62,43],target:[-.9,1.35,43],fov:55},bay:{eye:[4.2,2.1,44.6],target:[-1,1.9,44.5],fov:55}},O0={z0:(bn+Bn)/2+.03,z1:(bn+Bn)/2+.56,y0:.98,y1:1.78,x:Do+.03,cell:.047};Cy.peek={eye:[-1.2,1.42,42.95],target:[xa.PLAY.stoolX-xa.OFF[0],.85,xa.PLAY.keyFront+.2],fov:30};var ys={ink:null,inkDirty:!1,fold:0,slide:0,shown:!0,active:!1};function Ry(){return`
	// a quatrefoil hole in the brass (g: metres across the window from its centre)
	float grilleHole(vec2 g) {
		vec2 q = fract(g / ${Fe(Yo.cell)} + 0.5) - 0.5;
		float d = min(min(length(q - vec2(0.17, 0.0)), length(q + vec2(0.17, 0.0))),
		              min(length(q - vec2(0.0, 0.17)), length(q + vec2(0.0, 0.17))));
		d = min(d, length(q) - 0.04);
		return 1.0 - smoothstep(0.15, 0.19, d);
	}
	// how much of the lamp's light reaches p (on the penitent's side) through the window
	float throughGrille(vec3 p, float soft) {
		vec3 d = p - ${oa(wn)};
		if (d.z > -0.001) return 0.0;
		float t = (${Fe(Yo.z)} - ${Fe(wn[2])}) / d.z;
		vec2 g = (${oa(wn)} + d * t).xy - vec2(${Fe(Yo.x)}, ${Fe(Yo.y)});
		float inWin = (1.0 - smoothstep(${Fe(Yo.w/2-.01)}, ${Fe(Yo.w/2)} + soft, abs(g.x))) *
		              (1.0 - smoothstep(${Fe(Yo.h/2-.01)}, ${Fe(Yo.h/2)} + soft, abs(g.y)));
		// the lamp is not a point: the pattern blurs the further it falls
		// from the brass
		float pen = 0.045 * abs(p.z - ${Fe(Yo.z)}) / abs(${Fe(Yo.z)} - ${Fe(wn[2])}) / ${Fe(Yo.cell)};
		vec2 qc = fract(g / ${Fe(Yo.cell)} + 0.5) - 0.5;
		float hd = min(min(length(qc - vec2(0.17, 0.0)), length(qc + vec2(0.17, 0.0))),
		              min(length(qc - vec2(0.0, 0.17)), length(qc + vec2(0.0, 0.17))));
		hd = min(hd, length(qc) - 0.04);
		float b = pen * 0.35;
		float hole = 1.0 - smoothstep(0.17 - b, 0.19 + b, hd);
		hole = mix(hole, 0.45, smoothstep(0.35, 1.2, pen));
		hole = mix(hole, 0.62, smoothstep(0.0, 0.05, soft));
		return inWin * hole;
	}
	// the candle's light is hidden by the ink pot and the quill
	float candleShadow(vec3 p) {
		vec3 c = ${oa(cn.flame)};
		vec3 d = c - p;
		float s = 1.0;
		// the pot: a short upright cylinder
		vec2 a = vec2(${Fe(_0.x)}, ${Fe(_0.z)}) - p.xz;
		vec2 dd = d.xz;
		float t = clamp(dot(a, dd) / max(dot(dd, dd), 1e-5), 0.0, 1.0);
		float r = length(p.xz + dd * t - vec2(${Fe(_0.x)}, ${Fe(_0.z)}));
		float y = p.y + d.y * t;
		s *= mix(1.0, 0.25, (1.0 - smoothstep(${Fe(_0.r*.7)}, ${Fe(_0.r*1.6)}, r)) * (1.0 - smoothstep(${Fe(io.top+_0.h*.8)}, ${Fe(io.top+_0.h*1.3)}, y)));
		// the quill: a thin capsule
		vec3 qa = ${oa(c1.a)}, qb = ${oa(c1.b)};
		// closest approach between the ray p->c and the quill's axis
		vec3 u = d, v = qb - qa, w = p - qa;
		float A = dot(u, u), B = dot(u, v), C = dot(v, v), D = dot(u, w), E = dot(v, w);
		float den = max(A * C - B * B, 1e-6);
		float sc = clamp((B * E - C * D) / den, 0.0, 1.0), tc = clamp((A * E - B * D) / den, 0.0, 1.0);
		float qd = length(w + u * sc - v * tc);
		float width = mix(0.002, 0.016, smoothstep(0.25, 0.6, tc)) * (1.0 - smoothstep(0.9, 1.0, tc));
		s *= mix(1.0, 0.55, 1.0 - smoothstep(width, width + 0.006 + 0.02 * (1.0 - sc), qd));
		return s;
	}
	float candleFlicker() {
		return 0.82 + 0.10 * sin(time * 8.3) + 0.06 * sin(time * 17.9 + 1.3) * sin(time * 2.7) + 0.04 * sin(time * 31.0);
	}
	// the confessional's light at p: the hall, the priest's lamp (through the
	// brass), and at night the candle on the ledge
	vec3 boothLight(vec3 p, vec3 N, vec3 V, float gloss, out vec3 spec) {
		spec = vec3(0.0);
		bool inB1 = p.z < ${Fe(Bn)} && p.z > ${Fe(bn-.04)} && p.x < ${Fe(Do+.02)};
		bool inPriest = p.z >= ${Fe(Bn)} && p.z < ${Fe(qr)} && p.x < ${Fe(Do)};
		bool inB2 = p.z >= ${Fe(qr)} && p.z < ${Fe(W0+.04)} && p.x < ${Fe(Do)};
		// how open to the hall it is
		float open = 1.0;
		if (inB1) open = mix(0.7, 1.1, smoothstep(${Fe(o0)}, ${Fe(Do)}, p.x));
		if (inPriest) open = 0.16;
		if (inB2) open = 0.10;
		// deeper into the bay, a little less of the hall's light
		open *= mix(0.62, 1.0, smoothstep(${Fe(rn.x0)}, 0.3, p.x));
		// the stair hall's candlelight (it stands there now: see stairhall.js)
		vec3 rs;
		vec3 col = roomLight(p + ${oa(xa.OFF)}, N, V, gloss, rs) * 1.25 * open;
		spec += rs * open;
		// the lamp, warm, behind the brass
		vec3 Ld = ${oa(wn)} - p;
		float dl = length(Ld);
		vec3 L = Ld / dl;
		float T = inPriest ? 1.0 : (inB1 ? throughGrille(p, 0.0) : 0.0);
		vec3 lampCol = vec3(1.0, 0.70, 0.40) * mix(3.2, 1.0, night);
		vec3 lamp = lampCol * T * max(dot(N, L), 0.0) / (1.0 + dl * dl * 1.6);
		col += lamp;
		spec += lampCol * T * pow(max(dot(N, normalize(L + V)), 0.0), mix(8.0, 60.0, gloss)) * gloss / (1.0 + dl * dl * 1.6);
		// the little lamp in the open booth
		if (inB1) {
			vec3 Sd = ${oa(Un)} - p;
			float ds = length(Sd);
			vec3 Ls = Sd / ds;
			vec3 sc = vec3(1.0, 0.72, 0.42) * mix(1.5, 0.35, night);
			col += sc * (max(dot(N, Ls), 0.0) * 0.8 + 0.2) / (0.15 + ds * ds * 1.6);
			spec += sc * pow(max(dot(N, normalize(Ls + V)), 0.0), mix(8.0, 60.0, gloss)) * gloss * 0.6 / (0.15 + ds * ds * 1.6);
		}
		// the candle
		if (night > 0.01) {
			vec3 Cd = ${oa(cn.flame)} - p;
			float dc = length(Cd);
			vec3 Lc = Cd / dc;
			float fl = candleFlicker();
			float sh = candleShadow(p);
			vec3 cc = vec3(1.0, 0.60, 0.28) * fl * sh * night * (inPriest || inB2 ? 0.0 : 1.0);
			col += cc * (max(dot(N, Lc), 0.0) * 0.85 + 0.15) * 0.42 / (0.02 + dc * dc * 1.2);
			spec += cc * pow(max(dot(N, normalize(Lc + V)), 0.0), mix(8.0, 70.0, gloss)) * gloss * 0.10 / (0.02 + dc * dc * 1.2);
		}
		// the gallery's lanterns, outside the booths
		return col;
	}`}var e0={WOOD:0,CARVED:1,VELVET:2,CUSHION:3,BRASS:4,INKGLASS:5,QUILL:6,LAMPGLASS:7,DARKWOOD:8};function Py(){let t=[],e=[],o=[],r=[],n=[],a=(h,f)=>[h[0]-f[0],h[1]-f[1],h[2]-f[2]],s=(h,f)=>[h[1]*f[2]-h[2]*f[1],h[2]*f[0]-h[0]*f[2],h[0]*f[1]-h[1]*f[0]],i=h=>{let f=Math.hypot(h[0],h[1],h[2])||1;return[h[0]/f,h[1]/f,h[2]/f]},c={pos:t,nrm:e,kind:o,uv:r,idx:n,norm:i,cross:s,sub:a};return c.v=(h,f,d,u)=>(t.push(h[0],h[1],h[2]),e.push(f[0],f[1],f[2]),o.push(d),r.push(u?u[0]:0,u?u[1]:0),t.length/3-1),c.quad=(h,f,d,u,v,l)=>{let p=i(s(a(f,h),a(u,h)));l=l||[[0,0],[1,0],[1,1],[0,1]];let m=c.v(h,p,v,l[0]),g=c.v(f,p,v,l[1]),x=c.v(d,p,v,l[2]),y=c.v(u,p,v,l[3]);n.push(m,g,x,m,x,y)},c.box=(h,f,d,u,v,l,p)=>{let m=(g,x,y,w,_,M,k,R)=>c.quad(g,x,y,w,p,[[_,k],[M,k],[M,R],[_,R]]);m([u,f,d],[u,f,l],[u,v,l],[u,v,d],d,l,f,v),m([h,f,l],[h,f,d],[h,v,d],[h,v,l],l,d,f,v),m([h,v,d],[u,v,d],[u,v,l],[h,v,l],h,u,d,l),m([h,f,l],[u,f,l],[u,f,d],[h,f,d],h,u,l,d),m([h,f,l],[u,f,l],[u,v,l],[h,v,l],h,u,f,v),m([u,f,d],[h,f,d],[h,v,d],[u,v,d],u,h,f,v)},c.tube=(h,f,d,u)=>{u=u||6;let v=t.length/3;for(let l=0;l<h.length;l++){let p=h[Math.max(0,l-1)],m=h[Math.min(h.length-1,l+1)],g=i(a(m,p)),x=Math.abs(g[1])>.9?[1,0,0]:[0,1,0],y=i(s(g,x)),w=s(y,g),_=typeof f=="function"?f(l/(h.length-1)):f;for(let M=0;M<=u;M++){let k=M/u*bs*2,R=Math.cos(k),A=Math.sin(k),F=[y[0]*R+w[0]*A,y[1]*R+w[1]*A,y[2]*R+w[2]*A];c.v([h[l][0]+F[0]*_,h[l][1]+F[1]*_,h[l][2]+F[2]*_],F,d,[l/(h.length-1),M/u])}}for(let l=0;l<h.length-1;l++)for(let p=0;p<u;p++){let m=v+l*(u+1)+p,g=m+u+1;n.push(m,m+1,g,m+1,g+1,g)}},c.lathe=(h,f,d,u,v)=>{v=v||20;let l=t.length/3;for(let p=0;p<d.length;p++){let[m,g]=d[p],x=d[Math.max(0,p-1)],y=d[Math.min(d.length-1,p+1)],w=y[0]-x[0],_=y[1]-x[1];for(let M=0;M<=v;M++){let k=M/v*bs*2,R=Math.cos(k),A=Math.sin(k),F=i([_*R,-w,_*A]);c.v([h+R*m,g,f+A*m],F,u,[M/v,p/(d.length-1)])}}for(let p=0;p<d.length-1;p++)for(let m=0;m<v;m++){let g=l+p*(v+1)+m,x=g+v+1;n.push(g,x,g+1,g+1,x,x+1)}},c.spire=(h,f,d,u,v,l)=>{let p=[[-u,-u],[u,-u],[u,u],[-u,u]];for(let m=0;m<4;m++){let g=p[m],x=p[(m+1)%4],y=[h+g[0],d,f+g[1]],w=[h+x[0],d,f+x[1]],_=[h,v,f],M=i(s(a(_,y),a(w,y))),k=c.v(y,M,l,[0,0]),R=c.v(w,M,l,[1,0]),A=c.v(_,M,l,[.5,1]);n.push(k,A,R)}},c.orient=()=>{for(let h=0;h<n.length;h+=3){let[f,d,u]=[n[h],n[h+1],n[h+2]],v=m=>[t[m*3],t[m*3+1],t[m*3+2]],l=s(a(v(d),v(f)),a(v(u),v(f))),p=[0,1,2].map(m=>e[f*3+m]+e[d*3+m]+e[u*3+m]);l[0]*p[0]+l[1]*p[1]+l[2]*p[2]<0&&(n[h+1]=u,n[h+2]=d)}return c},c}function i1(t,e,o,r){if(t<=e)return o;let n=t-e;return n>=r?0:Math.max(0,Math.sqrt(r*r-n*n)-(r-o))}var gn={ys:1.78,a:.56,r:.78};gn.apex=gn.ys+Math.sqrt(gn.r*gn.r-(gn.r-gn.a)*(gn.r-gn.a));function AE(){let t=Py(),e=e0.WOOD,o=e0.CARVED,r=e0.DARKWOOD,n=.06;t.box(o0,0,bn,Do+.08,yr,W0,r),t.box(o0,u0-.06,bn-.04,Do+.1,u0,W0+.04,e),t.box(Do,u0-.2,bn-.06,Do+.12,u0-.06,W0+.06,e),t.box(Do+.02,u0,bn-.08,Do+.14,u0+.07,W0+.08,r),t.box(o0,yr,bn,o0+.04,u0-.06,W0,e);for(let[f,d,u]of[[bn-n,bn,-1],[W0,W0+n,1]]){t.box(o0,0,f,Do+.08,u0,d,e);let v=u<0?f-.018:d;t.box(o0+.18,.45,Math.min(v,v+.018),Do-.12,2.35,Math.max(v,v+.018),r),t.box(o0+.26,.55,Math.min(v,v+.03*u),Do-.2,2.25,Math.max(v,v+.03*u),e)}{let f=Bn-.02,d=Bn+.02,u=Yo.x-Yo.w/2,v=Yo.x+Yo.w/2,l=Yo.y-Yo.h/2,p=Yo.y+Yo.h/2;t.box(o0,yr,f,Do,$r.y0,d,e),t.box(o0,$r.y0,f,$r.x0,$r.y1,d,e),t.box($r.x1,$r.y0,f,Do,$r.y1,d,e),t.box(o0,$r.y1,f,Do,l,d,e),t.box(o0,l,f,u,p,d,e),t.box(v,l,f,Do,p,d,e),t.box(o0,p,f,Do,u0-.06,d,e);let m=.05,g=f-.025;t.box(u-m,l-m,g,v+m,l,f,r),t.box(u-m,p,g,v+m,p+m,f,r),t.box(u-m,l,g,u,p,f,r),t.box(v,l,g,v+m,p,f,r),t.box(u-m-.02,p+m,g-.015,v+m+.02,p+m+.03,f,e),t.box($r.x0-.01,$r.y1,f-.006,$r.x1+.01,$r.y1+.008,f,e0.BRASS)}{let f=O0,d=Do+.008,u=Do+.052;t.box(d,f.y0,f.z0-.035,u,f.y1,f.z0,r),t.box(d,f.y0,f.z0,u,f.y0+.04,f.z1,r),t.box(d,f.y1-.04,f.z0,u,f.y1,f.z1,r),t.box(d+.008,yr,f.z0-.035,u-.008,f.y0,f.z1,e),t.box(u-.008,yr+.12,f.z0+.03,u,f.y0-.08,f.z1-.06,r),t.box(d-.004,f.y0-.012,f.z0-.045,u+.012,f.y0,f.z1,e0.BRASS)}t.box(o0,yr,qr-.02,Do,u0-.06,qr+.02,e),t.box(io.x0,io.top-.035,io.z0,io.x1,io.top,io.z1,e),t.tube([[io.x0,io.top-.018,io.z0],[io.x1,io.top-.018,io.z0]],.02,e,8);for(let f of[io.x0+.1,io.x1-.1]){let d=[];for(let u=0;u<=8;u++){let v=u/8;d.push([f,io.top-.04-.22*v,io.z1-.02-.22*Math.cos(v*bs/2)])}t.tube(d,.018,r,6)}t.box(o0+.06,.12,bn,Do-.1,.44,bn+.42,r),t.box(o0+.08,.44,bn+.01,Do-.12,.52,bn+.41,e0.CUSHION),t.box(o0+.06,.12,W0-.42,Do-.1,.44,W0,r),t.box(Un[0]-.05,Un[1]-.16,bn,Un[0]+.05,Un[1]-.02,bn+.012,e0.BRASS),t.tube([[Un[0],Un[1]-.09,bn+.012],[Un[0],Un[1]-.09,Un[2]-.01],[Un[0],Un[1]-.05,Un[2]]],.006,e0.BRASS,6),t.lathe(Un[0],Un[2],[[0,Un[1]-.05],[.028,Un[1]-.035],[.034,Un[1]+.01],[.024,Un[1]+.06],[.026,Un[1]+.065]],e0.LAMPGLASS,16),t.box(Ir.x-.22,.12,Ir.z-.24,Ir.x+.22,Ir.y-.05,Ir.z+.16,r),t.box(Ir.x-.24,Ir.y-.05,Ir.z-.26,Ir.x+.24,Ir.y,Ir.z+.18,e0.CUSHION),t.tube([[wn[0],u0-.06,wn[2]],[wn[0],wn[1]+.07,wn[2]]],.005,e0.BRASS,5),t.lathe(wn[0],wn[2],[[0,wn[1]+.09],[.03,wn[1]+.08],[.02,wn[1]+.06]],e0.BRASS,12),t.lathe(wn[0],wn[2],[[0,wn[1]-.06],[.035,wn[1]-.04],[.045,wn[1]],[.035,wn[1]+.05],[.018,wn[1]+.07]],e0.LAMPGLASS,16);let a=Do,s=Do+n;function i(f,d,u){let v=(f+d)/2,l=40,p=[];for(let g=0;g<=l;g++)p.push(yr+(u0-.2-yr)*g/l);let m=[];p.forEach(g=>m.push(g));for(let g=1;g<24;g++)m.push(gn.ys+(gn.apex-gn.ys)*g/24);m.sort((g,x)=>g-x);for(let g=0;g<m.length-1;g++){let x=m[g],y=m[g+1];if(y-x<1e-4)continue;let w=u?i1(x,gn.ys,gn.a,gn.r):0,_=u?i1(y,gn.ys,gn.a,gn.r):0,M=(k,R)=>[k,R];t.quad([s,x,v-w],[s,x,f],[s,y,f],[s,y,v-_],e,[M(v-w,x),M(f,x),M(f,y),M(v-_,y)]),t.quad([s,x,d],[s,x,v+w],[s,y,v+_],[s,y,d],e,[M(d,x),M(v+w,x),M(v+_,y),M(d,y)]),(w>0||_>0)&&(t.quad([a,x,v-w],[s,x,v-w],[s,y,v-_],[a,y,v-_],r),t.quad([s,x,v+w],[a,x,v+w],[a,y,v+_],[s,y,v+_],r),t.quad([a,x,f],[a,x,v-w],[a,y,v-_],[a,y,f],e),t.quad([a,x,v+w],[a,x,d],[a,y,d],[a,y,v+_],e))}if(t.box(a,u0-.2,f,s,u0-.06,d,e),t.box(s,u0-.42,f+.05,s+.012,u0-.24,d-.05,o),u){let g=[];for(let x=0;x<=30;x++){let y=x/30,w=y<.5?yr+(gn.apex-yr)*(y*2):gn.apex-(gn.apex-yr)*((y-.5)*2),_=y<.5?-1:1;g.push([s+.01,Math.min(w,gn.apex-.002),v+_*(i1(w,gn.ys,gn.a,gn.r)+.03)])}t.tube(g,.022,r,6)}}i(bn,Bn,!0),i(qr,W0,!0);{let f=Bn,d=qr,u=(f+d)/2;t.box(a,yr,f,s,u0-.06,d,e);let v={ys:1.85,a:.55,r:.8},l=[];for(let p=0;p<=40;p++){let m=p/40,g=v.ys+Math.sqrt(v.r*v.r-(v.r-v.a)*(v.r-v.a)),x=m<.5?.35+(g-.35)*(m*2):g-(g-.35)*((m-.5)*2),y=m<.5?-1:1;l.push([s+.012,Math.min(x,g-.002),u+y*i1(x,v.ys,v.a,v.r)])}l.push(l[0]),t.tube(l,.02,r,6),t.box(s,.95,u-.22,s+.015,1.3,u+.22,o),t.box(s,.35,u-.42,s+.01,.75,u+.42,r),t.tube([[s+.03,1.12,d-.13],[s+.06,1.12,d-.13],[s+.06,1.12,d-.2]],.009,e0.BRASS,6)}[bn-.02,Bn,qr,W0+.02].forEach((f,d)=>{let u=d===1||d===2,v=.075,l=u0+(u?.62:.4);t.box(Do+.06,0,f-v,Do+.06+2*v,l,f+v,e),t.box(Do+.04,l-.04,f-v-.02,Do+.08+2*v,l,f+v+.02,r);let p=Do+.06+v,m=u?.62:.5;t.spire(p,f,l,v*.95,l+m,e);for(let g=1;g<=3;g++){let x=l+m*g/4.2,y=v*.95*(1-g/4.2)+.02;for(let[w,_]of[[1,0],[-1,0],[0,1],[0,-1]])t.tube([[p+w*(y-.02),x-.02,f+_*(y-.02)],[p+w*(y+.015),x+.03,f+_*(y+.015)]],.008,r,4)}t.lathe(p,f,[[0,l+m-.02],[.03,l+m+.03],[.022,l+m+.07],[0,l+m+.1]],e,10)});let h=(f,d,u)=>{let v=(f+d)/2,l=Do+.075,p=u0+.07,m=p+u,g=[1,0,0],x=t.v([l,p,f],g,o,[f,p]),y=t.v([l,p,d],g,o,[d,p]),w=t.v([l,m,v],g,o,[v,m]);t.idx.push(x,y,w);let _=t.v([l-.04,p,f],[-1,0,0],e),M=t.v([l-.04,p,d],[-1,0,0],e),k=t.v([l-.04,m,v],[-1,0,0],e);t.idx.push(_,k,M);let R=[],A=[];for(let I=0;I<=10;I++){let V=I/10;R.push([l+.02,p+u*V,f+(v-f)*V]),A.push([l+.02,p+u*V,d+(v-d)*V])}t.tube(R,.022,r,6),t.tube(A,.022,r,6);for(let I=2;I<=8;I+=2)for(let V of[R[I],A[I]])t.tube([V,[V[0]+.01,V[1]+.06,V[2]+(V===R[I]?-.02:.02)]],.01,r,4);t.lathe(l,v,[[0,m],[.035,m+.06],[.022,m+.12],[0,m+.16]].map(([I,V])=>[I,V]),e,10);let F=Math.min(.17,u*.32),C=p+u*.38,H=[];for(let I=0;I<=24;I++){let V=I/24*bs*2;H.push([l+.012,C+Math.sin(V)*F,v+Math.cos(V)*F])}t.tube(H,.012,r,5)};h(bn-.02,Bn,.52),h(Bn,qr,.82),h(qr,W0+.02,.52),t.lathe(_0.x,_0.z,[[0,io.top],[.036,io.top+.001],[_0.r,io.top+.012],[_0.r*1.02,io.top+.035],[.036,io.top+.052],[.02,io.top+.062],[.016,io.top+.068]],e0.INKGLASS,24),t.lathe(_0.x,_0.z,[[.016,io.top+.064],[.021,io.top+.066],[.022,io.top+.075],[.016,io.top+.076],[0,io.top+.072]],e0.BRASS,20);{let f=c1.a,d=c1.b,u=26,v=x=>{let y=Math.sin(x*bs)*.025;return[f[0]+(d[0]-f[0])*x+y*.6,f[1]+(d[1]-f[1])*x+y*.4,f[2]+(d[2]-f[2])*x+y]},l=[];for(let x=0;x<=u;x++)l.push(v(x/u));t.tube(l,x=>.0028*(1-.7*x)+6e-4,e0.QUILL,5);let p=t.norm(t.sub(d,f)),m=t.norm(t.cross(p,[.2,1,.1])),g=t.cross(m,p);for(let x of[-1,1]){let y=t.pos.length/3;for(let w=0;w<=u;w++){let _=w/u,M=v(_),k=_<.28?0:(x>0?.03:.02)*Math.sin(bs*Math.pow((_-.28)/.72,.75)),R=k*.25,A=[M[0]+m[0]*x*k-g[0]*R,M[1]+m[1]*x*k-g[1]*R,M[2]+m[2]*x*k-g[2]*R];t.v(M,g,e0.QUILL,[_,0]),t.v(A,g,e0.QUILL,[_,x])}for(let w=0;w<u;w++){let _=y+w*2;t.idx.push(_,_+2,_+1,_+1,_+2,_+3)}}}return t.orient()}function TE(t,e){let r=rn.top,n=rn.x0;t(n-.35,0,rn.z0-.35,n,r+.35,rn.z1+.35),t(n,0,rn.z0-.35,-.35,r,rn.z0),t(n,0,rn.z1,-.35,r,rn.z1+.35),t(n,r,rn.z0,-.35,r+.35,rn.z1),t(.35,0,rn.z0-.42,.35+.16,r,rn.z0),t(.35,0,rn.z1,.35+.16,r,rn.z1+.42),t(.35,r,rn.z0-.5,.35+.18,r+.42,rn.z1+.5),t(.35,r+.42,rn.z0-.6,.35+.26,r+.52,rn.z1+.6),t(.35,0,rn.z0-.5,.35+.22,.42,rn.z0),t(.35,0,rn.z1,.35+.22,.42,rn.z1+.5),t(-.35-.01,0,rn.z0,.35+.12,.02,rn.z1),e(n,rn.z0,-.35,rn.z1)}wr.exports=t=>{let e=Za(),o=Ny.GLSL,r=AE(),n=`
	precision highp float;
	${o}
	uniform float time;
	${e.lanternGLSL()}
	${xa.roomGLSL()}
	${Ry()}
	float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
	float vnoise(vec2 p) {
		vec2 i = floor(p), f = fract(p);
		vec2 u = f * f * (3.0 - 2.0 * f);
		return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
	}`,a=`
	precision highp float;
	uniform mat4 proj, view;
	uniform float yScale, time;
	attribute vec3 position, normal;
	attribute float kind;
	attribute vec2 uv;
	varying vec3 v_pos, v_n, v_eye;
	varying float v_kind;
	varying vec2 v_uv;
	void main() {
		v_pos = position; v_n = normal; v_kind = kind; v_uv = uv;
		v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
		vec3 p = position; p.y *= yScale;
		gl_Position = proj * view * vec4(p, 1.0);
	}`,s=t({vert:a,frag:`${n}
		varying vec3 v_pos, v_n, v_eye;
		varying float v_kind;
		varying vec2 v_uv;
		void main() {
			vec3 N = normalize(v_n);
			if (!gl_FrontFacing) N = -N;
			vec3 V = normalize(v_eye - v_pos);
			float k = v_kind;
			vec3 base;
			float gloss = 0.25;
			// the face's own plane, for the grain
			vec2 q = abs(N.x) > 0.6 ? v_pos.zy : (abs(N.z) > 0.6 ? v_pos.xy : v_pos.xz);
			if (k < 0.5 || (k > 7.5 && k < 8.5) || (k > 0.5 && k < 1.5)) {
				// walnut: long grain, darker in the pores, polished
				float gr = vnoise(vec2(q.x * 7.0, q.y * 0.6)) * 0.6 + vnoise(vec2(q.x * 31.0, q.y * 2.0)) * 0.4;
				float ring = sin(q.x * 34.0 + gr * 9.0 + vnoise(q * vec2(4.0, 0.4)) * 6.0) * 0.5 + 0.5;
				base = mix(vec3(0.20, 0.105, 0.055), vec3(0.37, 0.21, 0.11), gr * 0.7 + ring * 0.3);
				if (k > 7.5) base *= 0.62;     // the darker mouldings
				gloss = 0.45;
				if (k > 0.5 && k < 1.5) {
					// carved: a row of quatrefoils, cut in
					vec2 c = fract(v_uv * vec2(5.5, 5.5)) - 0.5;
					float d = min(min(length(c - vec2(0.2, 0.0)), length(c + vec2(0.2, 0.0))), min(length(c - vec2(0.0, 0.2)), length(c + vec2(0.0, 0.2))));
					float cut = smoothstep(0.24, 0.20, d) - smoothstep(0.17, 0.13, d) * 0.6;
					base *= 1.0 - 0.55 * cut;
					base *= 0.85;
				}
			} else if (k < 2.5 || (k > 2.5 && k < 3.5)) {
				// velvet: deep maroon (the cushions a little redder)
				base = k < 2.5 ? vec3(0.34, 0.018, 0.022) : vec3(0.30, 0.030, 0.030);
				base *= 0.9 + 0.2 * vnoise(q * 60.0);
				gloss = 0.0;
			} else if (k < 4.5) {
				base = vec3(0.42, 0.30, 0.14);
				gloss = 0.85;
			} else if (k < 5.5) {
				// the ink pot: almost black green glass
				base = vec3(0.012, 0.022, 0.018);
				gloss = 1.0;
			} else if (k < 6.5) {
				// the quill: ivory, greying towards the edge, with fine barbs
				float across = abs(v_uv.y);
				float barbs = 0.5 + 0.5 * sin((v_uv.x * 160.0 - across * 40.0));
				base = mix(vec3(0.82, 0.78, 0.68), vec3(0.48, 0.42, 0.36), smoothstep(0.4, 1.0, across) * 0.7 + smoothstep(0.75, 1.0, v_uv.x) * 0.3);
				base *= 0.85 + 0.15 * barbs;
				// the end of the feather is torn a little
				if (across > 0.9 - 0.25 * vnoise(vec2(v_uv.x * 40.0, 1.0))) discard;
				base = mix(base, vec3(0.02, 0.015, 0.012), 1.0 - smoothstep(0.02, 0.10, v_uv.x));  // ink on the nib
				gloss = 0.1;
			} else {
				// the lamp's glass, lit from within
				vec3 glow = vec3(1.0, 0.72, 0.42) * mix(2.2, 1.6, night);
				gl_FragColor = vec4(glow, 1.0);
				return;
			}
			vec3 spec;
			vec3 light = boothLight(v_pos, N, V, gloss, spec);
			vec3 col = base * light;
			// velvet: a soft bright rim where it turns away from you
			if (k > 1.5 && k < 3.5) col += base * light * 2.4 * pow(1.0 - max(dot(N, V), 0.0), 2.5);
			col += spec * (k > 3.5 && k < 5.5 ? 1.0 : 0.35);
			// polish: a soft reflection of the room
			col += gloss * vec3(0.05, 0.045, 0.04) * pow(1.0 - max(dot(N, V), 0.0), 4.0) * mix(1.0, 0.3, night);
			// the glass: the room and the lamp glinting in it
			if (k > 4.5 && k < 5.5) col += vec3(0.12, 0.13, 0.12) * pow(1.0 - max(dot(N, V), 0.0), 3.0);
			gl_FragColor = vec4(col, 1.0);
		}`,attributes:{position:r.pos,normal:r.nrm,kind:r.kind,uv:r.uv},elements:r.idx});function i(kt,mt,st,Wt){let we=[],_e=[],Ve=[],Ie=[],xo=[],X=Do-.02,gt=gn.apex+.08,Nt=yr+.015;for(let ce=0;ce<=40;ce++){let xe=ce/40,ne=gt+(Nt-gt)*xe;for(let Bt=0;Bt<=90;Bt++){let rt=Bt/90,Xt=st?.2+.13*xe*xe:mt-kt,Te=kt+rt*Xt,Jt=st?.05+.02*xe:.035+.01*Math.sin(rt*7),It=rt*Wt*bs*2+Math.sin(xe*2+rt*5)*.6,He=X-Jt*(.5+.5*Math.sin(It))-(st?.02*xe:0),Ge=[1,0,-(-Jt*.5*Math.cos(It)*Wt*bs*2/Xt)],je=Math.hypot(Ge[0],Ge[1],Ge[2]);we.push(He,ne,Te),_e.push(Ge[0]/je,0,Ge[2]/je),Ve.push(2),Ie.push(Math.sin(It),xe)}}for(let ce=0;ce<40;ce++)for(let xe=0;xe<90;xe++){let ne=ce*91+xe,Bt=ne+90+1;xo.push(ne,Bt,ne+1,ne+1,Bt,Bt+1)}for(let ce=0;ce<xo.length;ce+=3){let[xe,ne,Bt]=[xo[ce],xo[ce+1],xo[ce+2]],rt=It=>[we[It*3],we[It*3+1],we[It*3+2]],Xt=[0,1,2].map(It=>rt(ne)[It]-rt(xe)[It]),Te=[0,1,2].map(It=>rt(Bt)[It]-rt(xe)[It]);Xt[1]*Te[2]-Xt[2]*Te[1]<0&&(xo[ce+1]=Bt,xo[ce+2]=ne)}return{pos:we,nrm:_e,kind:Ve,uv:Ie,idx:xo}}let c=i(bn+.02,bn+.4,!0,6),h=i(qr+.04,W0-.04,!1,9),f={pos:c.pos.concat(h.pos),nrm:c.nrm.concat(h.nrm),kind:c.kind.concat(h.kind),uv:c.uv.concat(h.uv),idx:c.idx.concat(h.idx.map(kt=>kt+c.pos.length/3))},d=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale, time;
		attribute vec3 position, normal;
		attribute vec2 uv;
		varying vec3 v_pos, v_n, v_eye;
		varying vec2 v_uv;
		void main() {
			vec3 p = position;
			// the hem stirs, very slightly
			float hang = uv.y * uv.y;
			p.x += hang * 0.006 * sin(time * 0.7 + p.z * 4.0);
			p.z += hang * 0.004 * sin(time * 0.5 + p.z * 3.0 + 1.0);
			v_pos = p; v_n = normal; v_uv = uv; v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`${n}
		varying vec3 v_pos, v_n, v_eye;
		varying vec2 v_uv;
		void main() {
			vec3 N = normalize(v_n);
			if (!gl_FrontFacing) N = -N;
			vec3 V = normalize(v_eye - v_pos);
			// deep in a fold the cloth is darker
			float crest = 0.5 + 0.5 * v_uv.x;
			vec3 base = vec3(0.19, 0.020, 0.038) * (0.9 + 0.15 * vnoise(v_pos.zy * vec2(80.0, 6.0)));
			vec3 spec;
			// (the curtains hang just inside the front: they take the hall's light)
			vec3 light = boothLight(v_pos + vec3(0.12, 0.0, 0.0), N, V, 0.0, spec);
			float ao = mix(0.35, 1.0, crest);
			vec3 col = base * light * ao;
			// velvet: the pile catches the light where the cloth turns away
			float rim = pow(1.0 - max(dot(N, V), 0.0), 2.2);
			col += vec3(0.55, 0.16, 0.18) * light * rim * 0.55 * (0.4 + 0.6 * crest);
			// and the hem is a little dustier
			col *= mix(1.0, 0.8, smoothstep(0.92, 1.0, v_uv.y));
			gl_FragColor = vec4(col, 1.0);
		}`,attributes:{position:f.pos,normal:f.nrm,uv:f.uv},elements:f.idx}),u=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec2 corner;
		varying vec3 v_pos, v_eye;
		void main() {
			vec3 p = vec3(${Fe(Yo.x)} + corner.x * ${Fe(Yo.w/2)}, ${Fe(Yo.y)} + corner.y * ${Fe(Yo.h/2)}, ${Fe(Yo.z)});
			v_pos = p; v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`${n}
		varying vec3 v_pos, v_eye;
		void main() {
			vec2 g = v_pos.xy - vec2(${Fe(Yo.x)}, ${Fe(Yo.y)});
			float hole = grilleHole(g);
			if (hole > 0.5) discard;
			vec3 N = vec3(0.0, 0.0, v_eye.z < ${Fe(Yo.z)} ? -1.0 : 1.0);
			vec3 V = normalize(v_eye - v_pos);
			vec3 spec;
			vec3 light = boothLight(v_pos + N * 0.01, N, V, 0.8, spec);
			// dark old bronze, its edges catching the lamp behind it
			vec3 base = vec3(0.16, 0.10, 0.05);
			vec3 col = base * light + spec * 0.6;
			float edge = smoothstep(0.25, 0.5, hole);
			col += vec3(1.0, 0.66, 0.34) * edge * mix(0.35, 0.22, night);
			gl_FragColor = vec4(col, 1.0);
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,cull:{enable:!1}}),v=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec2 corner;
		varying vec3 v_pos, v_eye;
		void main() {
			vec3 p = vec3(${Fe(O0.x)}, ${Fe((O0.y0+O0.y1)/2)} + corner.y * ${Fe((O0.y1-O0.y0)/2-.04)}, ${Fe((O0.z0+O0.z1)/2)} + corner.x * ${Fe((O0.z1-O0.z0)/2)});
			v_pos = p; v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`${n}
		varying vec3 v_pos, v_eye;
		void main() {
			vec2 g = (v_pos.zy - vec2(${Fe((O0.z0+O0.z1)/2)}, ${Fe((O0.y0+O0.y1)/2)})) * ${Fe(Yo.cell/O0.cell)};
			float hole = grilleHole(g);
			if (hole > 0.5) discard;
			vec3 N = vec3(v_eye.x < ${Fe(O0.x)} ? -1.0 : 1.0, 0.0, 0.0);
			vec3 V = normalize(v_eye - v_pos);
			vec3 spec;
			vec3 light = boothLight(v_pos + N * 0.01, N, V, 0.8, spec);
			vec3 base = vec3(0.16, 0.10, 0.05);
			vec3 col = base * light + spec * 0.6;
			// the rims of the holes catch the candles in the hall beyond
			float edge = smoothstep(0.25, 0.5, hole);
			col += vec3(1.0, 0.62, 0.30) * edge * (N.x < 0.0 ? 0.30 : 0.10);
			gl_FragColor = vec4(col, 1.0);
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,cull:{enable:!1}}),l=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec2 corner;
		varying vec2 v_c;
		void main() {
			vec3 p = vec3(${Fe(Yo.x)} + corner.x * 0.75, ${Fe(Yo.y)} + corner.y * 0.9, ${Fe(qr-.03)});
			v_c = corner;
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`
		precision highp float;
		uniform float night;
		varying vec2 v_c;
		void main() {
			float r = length(v_c * vec2(0.8, 1.0));
			vec3 col = vec3(1.0, 0.62, 0.30) * pow(max(1.0 - r, 0.0), 1.6) * mix(0.16, 0.10, night);
			gl_FragColor = vec4(col, 1.0);
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),p=14,m=[];for(let kt=0;kt<p;kt++)[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(mt=>m.push(mt[0],mt[1],(kt+.5)/p));let g=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec3 c;
		varying vec3 v_pos;
		void main() {
			// slices across the booth, from the window back towards the bench
			vec3 p = vec3(${Fe(zE)} + c.x * ${Fe((Do-o0)/2-.02)}, 0.9 + (c.y + 1.0) * 0.8, ${Fe(Bn-.03)} - c.z * 1.25);
			v_pos = p;
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`
		precision highp float;
		uniform float night, time;
		${Ry().split("// the candle's light is hidden")[0]}
		varying vec3 v_pos;
		void main() {
			float T = throughGrille(v_pos, 0.0);
			float d = length(v_pos - ${oa(wn)});
			// dust drifting in the beam
			float dust = 0.65 + 0.35 * sin(v_pos.x * 23.0 + time * 0.3) * sin(v_pos.y * 17.0 - time * 0.21) * sin(v_pos.z * 19.0 + time * 0.17);
			vec3 col = vec3(1.0, 0.68, 0.36) * T * dust * 0.035 / (0.4 + d * d * 0.5) * mix(1.0, 0.7, night);
			gl_FragColor = vec4(col, 1.0);
		}`.replace("float grilleHole","float grilleHole"),attributes:{c:{buffer:t.buffer(m),size:3}},count:m.length/3,depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}}),x=(()=>{if(typeof document=="undefined")return null;let kt=document.createElement("canvas");kt.width=512,kt.height=652;let mt=kt.getContext("2d");mt.fillStyle="#cdb38a",mt.fillRect(0,0,kt.width,kt.height);let st=7,Wt=()=>(st=st*1664525+1013904223>>>0,st/4294967296);for(let _e=0;_e<2400;_e++){mt.fillStyle=`rgba(${Wt()<.5?"90,62,30":"245,230,200"},${.03+Wt()*.05})`;let Ve=Wt()*kt.width,Ie=Wt()*kt.height;mt.fillRect(Ve,Ie,1+Wt()*14,1)}for(let _e=0;_e<26;_e++){let Ve=Wt()*kt.width,Ie=Wt()*kt.height,xo=20+Wt()*90,ro=mt.createRadialGradient(Ve,Ie,0,Ve,Ie,xo);ro.addColorStop(0,`rgba(120,80,35,${.04+Wt()*.06})`),ro.addColorStop(1,"rgba(120,80,35,0)"),mt.fillStyle=ro,mt.fillRect(Ve-xo,Ie-xo,xo*2,xo*2)}let we=mt.createRadialGradient(kt.width/2,kt.height/2,kt.width*.3,kt.width/2,kt.height/2,kt.height*.72);return we.addColorStop(0,"rgba(110,70,30,0)"),we.addColorStop(1,"rgba(110,70,30,0.38)"),mt.fillStyle=we,mt.fillRect(0,0,kt.width,kt.height),kt})(),y=x?t.texture({data:x,min:"linear",mag:"linear",flipY:!1}):t.texture(),w=t.texture({shape:[8,8],data:new Uint8Array(8*8*4)}),_=[18,24],M=[],k=[];for(let kt=0;kt<=_[1];kt++)for(let mt=0;mt<=_[0];mt++)M.push(mt/_[0],kt/_[1]);for(let kt=0;kt<_[1];kt++)for(let mt=0;mt<_[0];mt++){let st=kt*(_[0]+1)+mt,Wt=st+_[0]+1;k.push(st,st+1,Wt,st+1,Wt+1,Wt)}let R=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale, fold, slide;
		attribute vec2 st;
		varying vec3 v_pos, v_n, v_eye;
		varying vec2 v_st;
		void main() {
			// s across (texture left = +x), t from the near edge (0) to the far (1)
			float s = st.x, t = st.y;
			float x = ${Fe(br.cx+br.w/2)} - s * ${Fe(br.w)};
			float zNear = ${Fe(br.cz-br.d/2)};
			vec3 p = vec3(x, ${Fe(br.y)}, zNear + t * ${Fe(br.d)});
			vec3 n = vec3(0.0, 1.0, 0.0);
			// a slight cockle
			p.y += 0.0012 * sin(s * 7.0 + t * 3.0) * sin(t * 5.0);
			// the near half folds up and over onto the far half
			if (t < 0.5) {
				float a = fold * 3.14159 * 0.985;
				float dd = (0.5 - t) * ${Fe(br.d)};
				float zf = zNear + 0.5 * ${Fe(br.d)};
				p.z = zf - dd * cos(a);
				p.y = ${Fe(br.y)} + dd * sin(a) + 0.0016 * fold;
				n = vec3(0.0, cos(a), sin(a));
			}
			// then the whole of it slides through the slit
			p.z += slide * 0.40;
			p.y += 0.004 * fold;
			v_pos = p; v_n = n; v_st = st; v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`${n}
		uniform sampler2D paperTex, inkTex;
		uniform float fold;
		varying vec3 v_pos, v_n, v_eye;
		varying vec2 v_st;
		void main() {
			// beyond the slit it is inside the wall
			if (v_pos.z > ${Fe(Bn+.015)}) discard;
			vec3 N = normalize(v_n);
			bool top = gl_FrontFacing;
			if (!top) N = -N;
			vec3 V = normalize(v_eye - v_pos);
			vec2 tuv = vec2(v_st.x, 1.0 - v_st.y);
			vec3 base = texture2D(paperTex, tuv).rgb;
			if (top) {
				vec4 ink = texture2D(inkTex, tuv);
				base = mix(base, vec3(0.06, 0.035, 0.02), ink.a * 0.92);
			} else {
				base *= 0.92;
			}
			vec3 spec;
			vec3 light = boothLight(v_pos, N, V, 0.05, spec);
			// a little light through the sheet from behind
			vec3 col = base * light;
			// the crease
			col *= 1.0 - 0.18 * (1.0 - smoothstep(0.0, 0.025, abs(v_st.y - 0.5))) * smoothstep(0.0, 0.2, fold);
			gl_FragColor = vec4(col, 1.0);
		}`,attributes:{st:{buffer:t.buffer(M),size:2}},elements:k,uniforms:{fold:()=>ys.fold,slide:()=>ys.slide,paperTex:y,inkTex:w},cull:{enable:!1}}),A=Py();A.lathe(cn.x,cn.z,[[0,io.top],[.048,io.top+.002],[.052,io.top+.012],[.046,io.top+.014],[.022,io.top+.012],[0,io.top+.012]],e0.BRASS,24),A.lathe(cn.x,cn.z,[[0,io.top+.012],[cn.r,io.top+.012],[cn.r*1.02,io.top+.012+cn.h*.6],[cn.r,io.top+.012+cn.h],[cn.r*.75,io.top+.012+cn.h-.004],[0,io.top+.012+cn.h-.008]],9,20),A.tube([[cn.x,io.top+.012+cn.h-.008,cn.z],[cn.x+.001,io.top+.012+cn.h+.012,cn.z]],.0012,8,4),A.orient();let F=t({vert:a,frag:`${n}
		varying vec3 v_pos, v_n, v_eye;
		varying float v_kind;
		varying vec2 v_uv;
		void main() {
			vec3 N = normalize(v_n);
			if (!gl_FrontFacing) N = -N;
			vec3 V = normalize(v_eye - v_pos);
			vec3 spec;
			float isBrass = step(3.5, v_kind) * step(v_kind, 4.5);
			float isWick = step(7.5, v_kind) * step(v_kind, 8.5);
			vec3 base = isBrass > 0.5 ? vec3(0.42, 0.30, 0.14) : (isWick > 0.5 ? vec3(0.02) : vec3(0.86, 0.80, 0.66));
			vec3 light = boothLight(v_pos, N, V, isBrass > 0.5 ? 0.85 : 0.1, spec);
			vec3 col = base * light + spec * (isBrass > 0.5 ? 1.0 : 0.2);
			// the wax glows near the flame
			if (isBrass < 0.5 && isWick < 0.5) {
				float up = smoothstep(${Fe(io.top+cn.h*.4)}, ${Fe(io.top+.012+cn.h)}, v_pos.y);
				col += vec3(1.0, 0.55, 0.22) * up * 0.22 * candleFlicker();
			}
			gl_FragColor = vec4(col * night, 1.0);
		}`,attributes:{position:A.pos,normal:A.nrm,kind:A.kind,uv:A.uv},elements:A.idx}),C=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale, time, halo;
		attribute vec2 corner;
		varying vec2 v_uv;
		varying float v_fl;
		void main() {
			v_fl = 0.85 + 0.09 * sin(time * 11.0) + 0.06 * sin(time * 27.0);
			float sway = 0.0025 * sin(time * 3.1) + 0.0015 * sin(time * 8.7);
			vec3 right = vec3(view[0][0], view[1][0], view[2][0]);
			vec2 size = halo > 0.5 ? vec2(0.07, 0.07) : vec2(0.0075, 0.021) * v_fl;
			vec3 p = ${oa(cn.flame)} + right * corner.x * size.x + vec3(0.0, 1.0, 0.0) * corner.y * size.y;
			p.x += sway * (corner.y + 1.0) * 0.5 * (1.0 - halo);
			v_uv = corner;
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`
		precision highp float;
		uniform float night, halo;
		varying vec2 v_uv;
		varying float v_fl;
		void main() {
			vec3 col;
			if (halo > 0.5) {
				float r = length(v_uv);
				col = vec3(1.0, 0.58, 0.24) * pow(max(1.0 - r, 0.0), 3.0) * 0.09 * v_fl;
			} else {
				vec2 q = vec2(v_uv.x / (1.0 - 0.55 * max(v_uv.y, 0.0)), v_uv.y);
				float r = length(q * vec2(1.0, 0.85));
				float body = 1.0 - smoothstep(0.55, 1.0, r);
				float core = 1.0 - smoothstep(0.0, 0.5, length((v_uv - vec2(0.0, -0.35)) * vec2(1.6, 1.0)));
				col = mix(vec3(1.0, 0.52, 0.16), vec3(1.0, 0.90, 0.66), core) * (body * 1.3 + core * 0.7);
				col += vec3(0.15, 0.25, 0.6) * (1.0 - smoothstep(0.0, 0.35, length(v_uv - vec2(0.0, -0.85)))) * 0.4;
			}
			gl_FragColor = vec4(col * night, 1.0);
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{halo:t.prop("halo")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),H=[0,0],I=t({uniforms:{view:t.prop("view")}}),V=new Float32Array(16);function dt(kt){EE.translate(V,kt.view,xa.OFF),I({view:V},()=>$t(kt))}function $t(kt){let mt=kt&&kt.reflected;if(s(),d(),u(),v(),ys.ink&&ys.inkDirty){let st=ys.ink;H[0]!==st.width||H[1]!==st.height?(w({data:st,min:"linear",mag:"linear",flipY:!1}),H=[st.width,st.height]):w.subimage(st),ys.inkDirty=!1}ys.shown&&R(),Ny.night>.01&&(F(),mt||(C({halo:1}),C({halo:0}))),mt||(l(),g())}return dt};wr.exports.addBay=TE;wr.exports.BAY=rn;wr.exports.OFF=xa.OFF;wr.exports.STATE=ys;var Oy=t=>[t[0]+xa.OFF[0],t[1]+xa.OFF[1],t[2]+xa.OFF[2]];wr.exports.SHOTS=Object.fromEntries(Object.entries(Cy).map(([t,e])=>[t,Object.assign({},e,{eye:Oy(e.eye),target:Oy(e.target)})]));wr.exports.SEAT=Ir;wr.exports.LAMP=wn;wr.exports.SCONCE=Un;wr.exports.GRILLE=Yo;wr.exports.PAPER=br;wr.exports.ZONE={FRONT:Do,BACK:o0,ZA:bn,ZB:Bn,ZC:qr,ZD:W0}});var op=At((DA,Iy)=>{"use strict";function LE(t){let e=t>>>0||1;return function(){return e=e*1664525+1013904223>>>0,e/4294967296}}var $y={stroke:.05,letter:.045,word:.15,comma:.28,stop:.45,line:.25,para:.6},NE=["th","ng","er"];function RE(t,e,o){o=Object.assign({ink:"#2a1d12",xh:14,speed:23,lineHeight:2.85,seed:7,width:.12,pace:.45},o||{});let r=t.getContext("2d"),n={};Object.keys($y).forEach(p=>{n[p]=$y[p]*o.pace});let a=[],s=0,i=0,c=0,h=[];function f(p,m){let g=LE(o.seed),x=o.xh,y={},w=V=>{let dt=e[V];if(!dt)return null;let $t=Math.floor(g()*dt.length);return dt.length>1&&$t===y[V]&&($t=($t+1)%dt.length),y[V]=$t,dt[$t]},_=V=>{if(e[V])return{g:w(V),sc:1};let dt=V.toLowerCase();return e[dt]?{g:w(dt),sc:/[A-Z]/.test(V)?1.32:1}:null},M=[],k=.15,R=0,A=0,F=(g()-.5)*.02,C=m/x,H=p.split(/\n\s*\n/);H.forEach((V,dt)=>{V.replace(/\s+/g," ").trim().split(" ").forEach(kt=>{let mt=[];for(let _e=0;_e<kt.length;_e++){let Ve=kt.substr(_e,2).toLowerCase();if(NE.indexOf(Ve)>=0&&e[Ve]&&g()<.55&&kt[_e]===kt[_e].toLowerCase()){mt.push({ch:Ve,gl:{g:w(Ve),sc:1}}),_e++;continue}let Ie=_(kt[_e]);Ie&&Ie.g&&mt.push({ch:kt[_e],gl:Ie})}let st=mt.map(()=>.17+g()*.07),Wt=mt.reduce((_e,Ve,Ie)=>_e+Ve.gl.g.w*Ve.gl.sc+st[Ie],0);R>0&&R+Wt>C&&(R=0,A++,k+=n.line,F=(g()-.5)*.02),mt.forEach((_e,Ve)=>{let Ie=_e.gl.g,xo=_e.gl.sc*(.95+g()*.1),ro=(g()-.5)*.06,pt=(g()-.5)*.08+F*R,X=R,gt=A*o.lineHeight+1.9+pt,Nt=Math.cos(ro),ce=Math.sin(ro),xe=Bt=>[(X+(Bt[0]*Nt-Bt[1]*ce)*xo)*x,(gt+(Bt[0]*ce+Bt[1]*Nt)*xo)*x],ne=(Bt,rt)=>{let Xt=0;for(let Jt=1;Jt<Bt.length;Jt++)Xt+=Math.hypot(Bt[Jt][0]-Bt[Jt-1][0],Bt[Jt][1]-Bt[Jt-1][1]);let Te=Math.max(o.minDur||(rt?.06:.07),Xt/(o.speed*x));M.push({pts:Bt,L:Xt,start:k,dur:Te,dot:rt}),k+=Te};if(Ie.s.forEach((Bt,rt)=>{rt>0&&(k+=n.stroke),ne(Bt.map(xe),!1)}),Ie.dot){let Bt=Ie.s[0][0];Ie.s.forEach(Xt=>Xt.forEach(Te=>{Te[1]<Bt[1]&&(Bt=Te)}));let rt=xe([Bt[0]+.1,-1.36]);k+=n.stroke*1.4,ne([rt,[rt[0]+x*.05,rt[1]+x*.03]],!0)}k+=n.letter*(.6+g()*.8),R+=Ie.w*xo+st[Ve]});let we=kt[kt.length-1];k+=/[.!?]/.test(we)?n.stop:/[,;:]/.test(we)?n.comma:n.word,R+=.55+g()*.2}),dt<H.length-1&&(R=0,A+=1.6,k+=n.para)});let I=(A+1)*o.lineHeight*x+x*1.55;return{strokes:M,total:k,height:I}}function d(p,m){if(o.fixed){let g=o.fixed;r.setTransform(1,0,0,1,g.mx,g.my),r.clearRect(-g.mx,-g.my,t.width,t.height)}else{let g=Math.min(window.devicePixelRatio||1,2);t.width=Math.round(p*g),t.height=Math.round(m*g),t.style.height=m+"px",t.style.width=p+"px",r.setTransform(g,0,0,g,0,0),r.clearRect(0,0,p,m)}r.strokeStyle=o.ink,r.fillStyle=o.ink,r.lineCap="round",r.lineJoin="round",o.shadow&&(r.shadowColor=o.shadow,r.shadowBlur=o.shadowBlur||6)}let u=p=>p<.5?2*p*p:1-Math.pow(-2*p+2,2)/2;function v(p,m){let g=h[p.i]||0;if(m<=g)return;let x=o.width*o.xh,y=0;for(let w=1;w<p.pts.length;w++){let _=p.pts[w-1],M=p.pts[w],k=Math.hypot(M[0]-_[0],M[1]-_[1]),R=y,A=y+k;if(y=A,A<=g||k===0)continue;if(R>=m)break;let F=Math.max(0,(g-R)/k),C=Math.min(1,(m-R)/k),H=[_[0]+(M[0]-_[0])*F,_[1]+(M[1]-_[1])*F],I=[_[0]+(M[0]-_[0])*C,_[1]+(M[1]-_[1])*C],V=(R+A)/2/(p.L||1),dt=.72+.28*Math.sin(Math.PI*Math.min(1,Math.max(0,V)));r.lineWidth=x*dt,r.globalAlpha=.86+.14*dt,r.beginPath(),r.moveTo(H[0],H[1]),r.lineTo(I[0],I[1]),r.stroke()}p.dot&&g===0&&(r.globalAlpha=1,r.beginPath(),r.arc(p.pts[0][0],p.pts[0][1],x*.75,0,Math.PI*2),r.fill()),h[p.i]=m}function l(p){let m=(p-c)/1e3;for(let g=0;g<a.length;g++){let x=a[g];if(x.start>m)break;let y=Math.min(1,(m-x.start)/x.dur);v(x,u(y)*x.L)}if(o.onPen){let g=0;for(;g+1<a.length&&a[g+1].start<=m;)g++;a[g]&&o.onPen(a[g].pts[0][1])}m<s?i=requestAnimationFrame(l):o.onDone&&o.onDone()}return{write(p,m){cancelAnimationFrame(i);let g=o.fixed?t.width-2*o.fixed.mx:t.parentElement.clientWidth,x=f(p,g);a=x.strokes,s=x.total;let y=typeof o.maxTime=="function"?o.maxTime(p):o.maxTime;if(y&&s>y){let _=y/s;a.forEach(M=>{M.start*=_,M.dur*=_}),s=y}a.forEach((_,M)=>{_.i=M}),h=[],d(g,x.height);let w=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(m||w){a.forEach(_=>v(_,_.L));return}return c=performance.now(),i=requestAnimationFrame(l),s},finish(){cancelAnimationFrame(i),a.forEach(p=>v(p,p.L)),o.onDone&&o.onDone()},stop(){cancelAnimationFrame(i)}}}Iy.exports=RE});var rp=At((FA,qy)=>{"use strict";var np=c0(),OE='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M5.5 18.5l1.7-1.7M16.8 7.2l1.7-1.7"/></svg>',CE='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M19.5 14.6A8 8 0 0 1 9.4 4.5a8 8 0 1 0 10.1 10.1z"/></svg>';qy.exports=function(e){let o=document.createElement("button");o.type="button",o.className=e+" light-toggle";let r=()=>{let n=np.isNight;o.innerHTML=n?OE:CE,o.setAttribute("aria-label",n?"Switch to day":"Switch to night"),o.title=n?"Day":"Night",o.setAttribute("aria-pressed",n?"true":"false")};return r(),np.onChange(r),["mousedown","pointerdown"].forEach(n=>o.addEventListener(n,a=>a.stopPropagation())),o.addEventListener("click",n=>{n.stopPropagation(),np.toggle()}),o}});var Hy=At((GA,Gy)=>{"use strict";var jn=l1(),PE=es(),$E=op(),IE="81efb912-50a2-4fcd-b5e8-c3a28eecbe93",Dy=100,Da=t=>Math.max(0,Math.min(1,t)),ar=(t,e,o)=>{let r=Da((o-t)/(e-t));return r*r*(3-2*r)},na=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,Dr=(t,e,o)=>t+(e-t)*o,cf=(t,e,o)=>[Dr(t[0],e[0],o),Dr(t[1],e[1],o),Dr(t[2],e[2],o)];function vi(t,e){let o=t.length-1,r=Da(e)*o,n=Math.min(o-1,Math.floor(r)),a=r-n,s=t[Math.max(0,n-1)],i=t[n],c=t[n+1],h=t[Math.min(o,n+2)];return[0,1,2].map(f=>.5*(2*i[f]+(-s[f]+c[f])*a+(2*s[f]-5*i[f]+4*c[f]-h[f])*a*a+(-s[f]+3*i[f]-3*c[f]+h[f])*a*a*a))}var f1=t=>({eye:t.eye.slice(),target:t.target.slice(),fov:t.fov,roll:0});function ap(t,e,o){return{eye:cf(t.eye,e.eye,o),target:cf(t.target,e.target,o),fov:Dr(t.fov,e.fov,o),roll:Dr(t.roll||0,e.roll||0,o)}}var lf=PE.PLAY,ra=[lf.stoolX,1,lf.keyFront+.25],h1=[lf.stoolX,lf.keyTop+.03,lf.keyFront-.05],ip=t=>{let e=(15+110*t)*Math.PI/180,o=2.1+.4*t;return[ra[0]+Math.cos(e)*o,1.15+.4*t,ra[2]+Math.sin(e)*o]},Nc=[{eye:ip(1),target:[ra[0],.92,ra[2]-.15],fov:46,aperture:.6},{eye:[-6.93,3.2,45.85],target:[-6.93,.77,45.3],fov:34,aperture:.6,to:h1},{eye:[ra[0]+1,1.14,ra[2]+1.72],target:[h1[0]+.05,.8,h1[2]+.05],fov:40,aperture:1,to:h1}],Fy=(t,e)=>Math.hypot(t[0]-e[0],t[1]-e[1],t[2]-e[2]),u1=t=>({fade:0,letterbox:.55,exposure:1.3,focus:Fy(t.eye,t.to||ra),aperture:t.aperture,vignette:.42,shafts:0}),sp={fade:0,letterbox:.55,exposure:2.1,focus:6.2,aperture:.55,vignette:.45,shafts:0},Rc={fade:0,letterbox:.55,exposure:2,focus:.82,aperture:1.1,vignette:.48,shafts:0},sf={fade:0,letterbox:.55,exposure:1.8,focus:.42,aperture:1.3,vignette:.5,shafts:0},qE=`
.conf-ui { position: absolute; inset: 0; pointer-events: none; z-index: 6; font-family: 'Cormorant Garamond', Georgia, serif; color: #f4ecdf; }
.conf-ui > * { position: absolute; left: 50%; transform: translateX(-50%); opacity: 0; visibility: hidden; transition: opacity 1s ease, visibility 0s linear 1s; }
.conf-ui > .on { opacity: 1; visibility: visible; transition: opacity 1.1s ease; pointer-events: auto; }
.conf-write { bottom: max(6vh, 44px); width: min(500px, calc(100vw - 32px)); padding: 18px 22px 14px; box-sizing: border-box;
	background: linear-gradient(180deg, rgba(14,10,8,.55), rgba(14,10,8,.78)); border: 1px solid rgba(233,207,154,.22); border-radius: 3px;
	backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px); text-shadow: 0 1px 12px rgba(0,0,0,.6); }
.conf-kicker { margin: 0; font: 500 11px/1.4 Georgia, serif; letter-spacing: .32em; text-transform: uppercase; color: #e9cf9a; }
.conf-lead { margin: 8px 0 12px; font-style: italic; font-size: clamp(17px, 1.6vw, 20px); line-height: 1.4; opacity: .9; }
.conf-write textarea { display: block; width: 100%; box-sizing: border-box; min-height: 92px; max-height: 30vh; resize: none;
	background: transparent; border: 0; border-bottom: 1px solid rgba(244,236,223,.25); outline: none; padding: 6px 2px 10px;
	color: #f4ecdf; font: italic 500 clamp(18px, 1.7vw, 21px)/1.5 'Cormorant Garamond', Georgia, serif; caret-color: #e9cf9a; }
.conf-write textarea::placeholder { color: rgba(244,236,223,.4); }
.conf-write textarea:focus { border-bottom-color: rgba(233,207,154,.7); }
.conf-row { display: flex; justify-content: space-between; align-items: center; gap: 12px; margin-top: 14px; }
.conf-btn { min-height: 44px; padding: 0 18px; border-radius: 999px; border: 1px solid rgba(233,207,154,.55); background: rgba(233,207,154,.14);
	color: #f4ecdf; font: 500 12px/1 Georgia, serif; letter-spacing: .16em; text-transform: uppercase; cursor: pointer; transition: background .3s ease, opacity .3s ease; }
.conf-btn:hover { background: rgba(233,207,154,.28); }
.conf-btn:disabled { opacity: .35; cursor: default; }
.conf-btn.quiet { border-color: transparent; background: transparent; padding: 0 6px; opacity: .7; }
.conf-btn:focus-visible { outline: 2px solid #e9cf9a; outline-offset: 3px; }
.conf-hint { bottom: max(8vh, 56px); font-style: italic; font-size: clamp(16px, 1.5vw, 19px); text-align: center; text-shadow: 0 1px 14px rgba(0,0,0,.8); }
.conf-hint.on { pointer-events: none; animation: conf-breathe 3.2s ease-in-out infinite; }
@keyframes conf-breathe { 0%, 100% { opacity: .55; } 50% { opacity: 1; } }
.conf-final { bottom: max(9vh, 60px); text-align: center; text-shadow: 0 1px 16px rgba(0,0,0,.8); }
.conf-final p { margin: 0 0 6px; font-style: italic; font-size: clamp(20px, 2vw, 26px); }
.conf-final p.small { font-size: clamp(15px, 1.3vw, 17px); opacity: .75; margin-bottom: 18px; }
.conf-close { top: max(16px, env(safe-area-inset-top)); left: auto; right: 16px; transform: none; }
body.confessing .tour-card, body.confessing .tour-progress, body.confessing .tour-hint, body.confessing .tour-links, body.confessing .tour-mark { opacity: 0 !important; visibility: hidden !important; pointer-events: none !important; }
@media (prefers-reduced-motion: reduce) { .conf-hint.on { animation: none; } }
`;Gy.exports=function(e){let{root:o,avatar:r}=e,n=document.createElement("style");n.textContent=qE,document.head.appendChild(n);let a=document.createElement("div");a.className="conf-ui",a.innerHTML=`
		<div class="conf-write" role="dialog" aria-label="Leave a note for the artist">
			<p class="conf-kicker">The confessional</p>
			<p class="conf-lead">Leave something behind. No one but me will read it.</p>
			<textarea rows="4" aria-label="Your note" placeholder="Write it here\u2026" spellcheck="true"></textarea>
			<div class="conf-row">
				<button type="button" class="conf-btn quiet" data-act="leave">Not now</button>
				<button type="button" class="conf-btn" data-act="send" disabled>Slide the note</button>
			</div>
		</div>
		<div class="conf-hint" aria-live="polite"></div>
		<button type="button" class="conf-btn quiet conf-close" data-act="leave">Return to the gallery</button>
		<div class="conf-final">
			<p>It\u2019s with me now.</p>
			<p class="small">Whatever it was, you don\u2019t have to carry it out of here.</p>
			<button type="button" class="conf-btn" data-act="leave">Return to the gallery</button>
		</div>`,o.appendChild(a);let s=a.querySelector(".conf-write"),i=a.querySelector("textarea"),c=a.querySelector('[data-act="send"]'),h=a.querySelector(".conf-hint"),f=a.querySelector(".conf-close"),d=a.querySelector(".conf-final"),u=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,v=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;i.addEventListener("input",()=>{let rt=i.value.match(new RegExp("^\\s*(\\S+\\s+){0,"+(Dy-1)+"}\\S+"));(i.value.trim()?i.value.trim().split(/\s+/).length:0)>Dy&&rt&&(i.value=rt[0]),c.disabled=!i.value.trim()}),["keydown","keyup","keypress"].forEach(rt=>i.addEventListener(rt,Xt=>Xt.stopPropagation())),a.addEventListener("pointerdown",rt=>rt.stopPropagation()),a.addEventListener("click",rt=>{let Xt=rt.target.closest("button");Xt&&(rt.stopPropagation(),Xt.dataset.act==="send"&&dt(),Xt.dataset.act==="leave"&&mt())});let l=!1,p="",m=0,g=null,x=null,y="",w=null,_=0,M="",k=document.createElement("canvas");k.width=512,k.height=652;function R(rt){rt!==M&&(M=rt,s.classList.toggle("on",rt==="write"),h.classList.toggle("on",rt==="hint"),f.classList.toggle("on",l&&rt==="hint"&&(p==="room"||p==="peek")),d.classList.toggle("on",rt==="final"),rt==="write"&&setTimeout(()=>{if(p==="write")try{i.focus({preventScroll:!0})}catch(Xt){}},900))}function A(rt){p=rt,m=0}function F(rt,Xt){if(l)return;l=!0,g={eye:rt.eye.slice(),target:rt.target.slice(),fov:rt.fov,roll:rt.roll||0},x=Object.assign({},Xt),y="",i.value="",c.disabled=!0,jn.STATE.fold=0,jn.STATE.slide=0,jn.STATE.shown=!0,jn.STATE.active=!0;let Te=k.getContext("2d");Te.setTransform(1,0,0,1,0,0),Te.clearRect(0,0,k.width,k.height),jn.STATE.ink=k,jn.STATE.inkDirty=!0,document.body.classList.add("confessing");let Jt=Nc[0],It=v?.3:5.5,He=v?.3:3.6;C.i=0,C.u=0,C.T=It+He,C.moving=!0,C.rest=0,C.raw=!0,C.lookFrom=x,C.lookTo=u1(Jt);let S=[g.eye,[3.4,1.75,44.5],[.3,1.72,44.7],[-2.8,1.5,45.4],ip(0)],Ge=[g.target,[-3,1.9,44.5],[-6.5,1.3,44.9],[ra[0],1,ra[2]-.1],Jt.target];C.path=je=>{let Je=je*(It+He);if(Je<It){let Ro=Je/It,Ao=1-Math.cos(Ro*Math.PI/2);return{eye:vi(S,Ao),target:vi(Ge,ar(0,1,Ao*1.05)),fov:Dr(g.fov,52,ar(.4,1,Ao)),roll:(g.roll||0)*(1-Ao)}}let Mo=(Je-It)/He,vo=1-Math.pow(1-Mo,2.4);return{eye:ip(vo),target:Jt.target,fov:Dr(52,Jt.fov,vo),roll:.05*Math.sin(Math.PI*vo)}},A("room"),R("")}let C={i:0,u:0,T:1,moving:!1,rest:0,raw:!1,path:null,lookFrom:null,lookTo:null},H=()=>u?"Scroll on":"Swipe up";function I(rt){let Xt=we,Te=Nc[rt],Jt={eye:Xt.eye.slice(),target:Xt.target.slice(),fov:Xt.fov,roll:Xt.roll||0},It=cf(Jt.eye,Te.eye,.5),He=[It[0]-ra[0],0,It[2]-ra[2]],S=Math.hypot(He[0],He[2])||1,Ge=[It[0]+He[0]/S*.6,It[1]+.3,It[2]+He[2]/S*.6];C.path=je=>{let Je=1-je;return{eye:[0,1,2].map(Mo=>Je*Je*Jt.eye[Mo]+2*Je*je*Ge[Mo]+je*je*Te.eye[Mo]),target:cf(Jt.target,Te.target,ar(0,1,je)),fov:Dr(Jt.fov,Te.fov,je),roll:Jt.roll*Je}},C.lookFrom=V||u1(Nc[C.i]),C.lookTo=u1(Te),C.i=rt,C.u=0,C.moving=!0,C.rest=0,C.raw=!1,C.T=v?.4:Math.max(2.8,Math.min(4.4,Fy(Jt.eye,Te.eye)*1+1.6)),R("")}let V=null;function dt(){if(p!=="write"||(y=i.value.trim(),!y))return;i.blur(),R("");let rt=Math.max(10,Math.min(22,24-y.length/28));w=$E(k,e.glyphs(),{ink:"rgba(30,16,8,0.97)",xh:rt,width:.15,seed:11+y.length,speed:60,pace:.2,minDur:.03,maxTime:Xt=>2.4+Xt.length/160,fixed:{mx:46,my:40},onPen:()=>{jn.STATE.inkDirty=!0},onDone:()=>{jn.STATE.inkDirty=!0}}),A("down")}function $t(){try{let rt={access_key:IE,subject:"A note left in the confessional",from_name:"Your gallery",message:y,page:location.href,when:new Date().toString()};fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(rt),keepalive:!0}).catch(()=>{})}catch(rt){}}function kt(){p==="ready"&&($t(),A("fold"),R(""))}function mt(){!l||p==="leave"||(R(""),i.blur(),st=we,Wt=V,A("leave"))}let st=null,Wt=null,we=null,_e=jn.SHOTS.window,Ve=jn.OFF,Ie=rt=>[rt[0]+Ve[0],rt[1],rt[2]],xo=[[3.4,1.75,44.5],[.3,1.72,44.5],[-2.5,1.66,45],[-4.6,1.6,46.55],[-7,1.58,47.15],[-9.3,1.55,46.4],Ie([1.25,1.5,43.25]),Ie([-.55,1.36,42.92])],ro=[[-3,1.9,44.5],[-6.5,1.5,44.6],[-7,1,44.4],[-7.6,.95,44],[-10.5,1.5,44.6],Ie([-1,1.55,43.6]),Ie([-1.4,1.35,43.1]),Ie([-1.5,1.33,43.3])];function pt(rt){let Xt=na(Da(rt)),Te=[g.eye,...xo,_e.eye],Jt=[g.target,...ro,_e.target];return{eye:vi(Te,Xt),target:vi(Jt,ar(0,1,Xt*1.03)),fov:Dr(g.fov,_e.fov,ar(.6,.97,Xt)),roll:(g.roll||0)*(1-Xt)}}function X(rt,Xt){if(v)return rt;let Te=performance.now()/1e3,Jt=.004*Xt,It=Math.sin(Te*.61)*.6+Math.sin(Te*1.37+1.3)*.4,He=Math.sin(Te*.47+2.1)*.6+Math.sin(Te*1.13+.4)*.4;return{eye:[rt.eye[0]+It*Jt,rt.eye[1]+He*Jt*.7,rt.eye[2]],target:[rt.target[0]+He*Jt*1.5,rt.target[1]+It*Jt,rt.target[2]],fov:rt.fov,roll:rt.roll}}function gt(rt,Xt,Te){let Jt={};for(let It in Xt)Jt[It]=typeof Xt[It]=="number"&&typeof rt[It]=="number"?Dr(rt[It],Xt[It],Te):Xt[It];return Jt}function Nt(rt){rt*=window.__confSpeed||1,m+=rt;let Xt=f1(_e),Te=f1(jn.SHOTS.paper),Jt,It,He=f1(jn.SHOTS.peek);if(p==="room")C.moving?(C.u=Math.min(1,C.u+rt/C.T),Jt=C.path(C.raw?C.u:na(C.u)),It=gt(C.lookFrom,C.lookTo,ar(.1,.9,C.u)),C.raw&&(It.fade=(x.fade||0)*(1-ar(0,.12,C.u))),C.u>=1&&(C.moving=!1,C.rest=0,h.textContent=H(),R("hint"))):(C.rest+=rt,Jt=X(f1(Nc[C.i]),2.5),It=u1(Nc[C.i]));else if(p==="enter"){let Ge=Da(m/(v?.6:9)),je=na(Ge),Je=[ce.eye,[-7.6,1.9,47.6],[-9.6,1.85,45.6],Ie([.75,1.5,42.95]),Ie([-.25,1.42,42.82]),Ie([-.9,1.42,42.82]),He.eye];Jt={eye:vi(Je,je),target:cf(ce.target,He.target,ar(0,.35,je)),fov:Dr(ce.fov,He.fov,ar(.3,1,je)),roll:0},It=gt(xe,sp,ar(.2,.9,Ge)),Ge>=1&&A("peek")}else if(p==="peek")Jt=X(He,1.5),It=sp,m>(v?.5:3.2)&&A("turn");else if(p==="turn"){let S=Da(m/(v?.4:3.2));Jt=ap(He,Xt,na(S)),It=gt(sp,Rc,na(S)),S>=1&&(A("write"),R("write"))}else if(p==="write")Jt=X(Xt,1),It=Rc;else if(p==="down"){let S=Da(m/(v?.4:2));Jt=ap(Xt,Te,na(S)),It=gt(Rc,sf,na(S)),S>=1&&(_=w.write(y,v)||0,jn.STATE.inkDirty=!0,A("writing"))}else if(p==="writing")Jt=X(Te,.6),It=sf,m>_+.8&&(A("ready"),h.textContent=u?"Scroll to fold it and pass it through":"Swipe up to fold it and pass it through",R("hint"));else if(p==="ready")Jt=X(Te,.6),It=sf;else if(p==="fold"){let S=Da(m/(v?.3:1.5));jn.STATE.fold=na(S),Jt=X(Te,.6),It=sf,S>=1&&A("slide")}else if(p==="slide"){let Ge=Da(m/(v?.6:3.4));jn.STATE.slide=na(ar(0,.7,Ge));let je=na(ar(.35,1,Ge));Jt=ap(Te,Xt,je),It=gt(sf,Rc,je),Ge>=1&&(jn.STATE.shown=!1,A("final"),R("final"))}else if(p==="final")Jt=X(Xt,1),It=Rc;else if(p==="leave"){let S=v?.6:st.eye[0]<Ve[0]-.3?12:7,Ge=Da(m/S),je={eye:g.eye,target:g.target,fov:g.fov,roll:g.roll},Je=na(Ge),Mo=st.eye[0]<Ve[0]-.3,vo=Mo?[st.eye,Ie([-.55,1.4,42.8]),Ie([1.4,1.55,43.3]),[-9.3,1.58,46.4],[-7,1.6,47.15],[-4.6,1.62,46.55],[-2.2,1.68,44.8],[.6,1.72,44.5],je.eye]:[st.eye,[-3.4,1.7,46.2],[-1.2,1.7,44.8],[.6,1.72,44.5],je.eye],Ro=Mo?[st.target,Ie([1.5,1.45,43.4]),[-7,1.2,44.6],[-4,1.5,47],[-1.5,1.7,45.5],[1,1.8,44.5],[4,1.8,44.5],[7,1.9,44.2],je.target]:[st.target,[-1.5,1.7,45.2],[2,1.8,44.5],[6,1.9,44.3],je.target];if(Jt={eye:vi(vo,Je),target:vi(Ro,Je),fov:Dr(st.fov,je.fov,Je),roll:je.roll*Je},It=gt(Wt||Rc,x,ar(.1,.7,Ge)),It.fade=(x.fade||0)*ar(.82,1,Ge),Ge>=1){l=!1,jn.STATE.active=!1,jn.STATE.shown=!0,jn.STATE.fold=0,jn.STATE.slide=0;let Ao=k.getContext("2d");Ao.setTransform(1,0,0,1,0,0),Ao.clearRect(0,0,k.width,k.height),jn.STATE.inkDirty=!0,document.body.classList.remove("confessing"),e.onExit&&e.onExit()}}return we=Jt,V=It,{camera:Jt,look:It}}let ce=null,xe=null;function ne(){if(p==="room"){if(C.moving||C.rest<.4)return;C.i<Nc.length-1?I(C.i+1):(ce=we,xe=V,R(""),A("enter"));return}if(p==="peek"){m>.4&&A("turn");return}p==="ready"?kt():p==="writing"&&w&&(w.finish(),m=Math.max(m,_))}function Bt(){p==="room"&&!C.moving&&C.rest>.4&&C.i>0&&I(C.i-1)}return{start:F,update:Nt,leave:mt,get active(){return l},get stage(){return p},wheel(rt){rt>8?ne():rt<-8&&Bt()},swipe(rt){rt>0?ne():rt<0&&Bt()},tap(){ne()},key(rt){return["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(rt)>=0?(ne(),!0):["ArrowUp","ArrowLeft","PageUp"].indexOf(rt)>=0?(Bt(),!0):rt==="Escape"?(mt(),!0):!1},_setNote(rt){i.value=rt,i.dispatchEvent(new Event("input"))}}}});var Qy=At((HA,Ky)=>{"use strict";var Oc=lc(),d1=Od(),cp=Zf(),DE=pl(),lp=Pd(),FE=Ar(),p1=!FE.isPhone&&!!(window.matchMedia&&window.matchMedia("(pointer: fine)").matches),{A:_r}=Nr(),{C:M0,PAINTING_X:Ic}=k0(),ir=t=>Math.max(0,Math.min(1,t)),ie=(t,e,o)=>t+(e-t)*o,en=(t,e,o)=>[ie(t[0],e[0],o),ie(t[1],e[1],o),ie(t[2],e[2],o)],Eo=(t,e)=>[t[0]+e[0],t[1]+e[1],t[2]+e[2]],fp=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],V0=(t,e)=>[t[0]*e,t[1]*e,t[2]*e],oe=(t,e,o)=>{let r=ir((o-t)/(e-t));return r*r*(3-2*r)};function GE(t,e,o,r,n,a){if(n<=0)return[t,o];let s=2/r,i=s*n,c=1/(1+i+.48*i*i+.235*i*i*i),h=a*r,f=Math.max(-h,Math.min(h,t-e)),d=t-f,u=(o+s*f)*n,v=(o-s*u)*c,l=d+(f+u)*c;return e-t>0==l>e&&(l=e,v=0),[l,v]}var Uy=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,HE=t=>t*t*t,hp=t=>1-Math.pow(1-t,3),An=t=>-(Math.cos(Math.PI*t)-1)/2;function In(t,e){let o=t.length-1,r=ir(e)*o,n=Math.min(o-1,Math.floor(r)),a=r-n,s=t[Math.max(0,n-1)],i=t[n],c=t[n+1],h=t[Math.min(o,n+2)],f=a*a,d=f*a;return[0,1,2].map(u=>.5*(2*i[u]+(-s[u]+c[u])*a+(2*s[u]-5*i[u]+4*c[u]-h[u])*f+(-s[u]+3*i[u]-3*c[u]+h[u])*d))}var wo=(t,e,o,r)=>({eye:t,target:e,fov:o,roll:r||0});function bi(t,e,o){return wo(en(t.eye,e.eye,o),en(t.target,e.target,o),ie(t.fov,e.fov,o),ie(t.roll,e.roll,o))}var mp=()=>oe(.75,1.3,window.innerWidth/window.innerHeight),X0=(t,e)=>bi(t,e,mp()),v1=[7,3.95,M0.hallEnd-.05],UE=[M0.x1,2.9,M0.zc],Pc=[16.75,4.55,6.75],gp=[6.92,2.72,14.5],aa=[7.3,.015,47.1],BE=[Pc,[16.2,4,7],[15.3,3.45,6.4],[14.1,3.2,5.7],[12.2,3.35,6.6],[10,3.75,9.6],[8.2,3.8,12.2],[7.3,3.4,13.8],gp],jE=[gp,[7.3,4.6,19.5],[7.6,4.9,23.5],[6.6,4.3,28.5],[7.5,3.2,34],[6.8,2.1,39.5],[7.4,1,44.2],[7.2,.3,46.4],aa],gi=[Ic[0],3,M0.z0],xi=[Ic[1],3,M0.z0],dp=47.45,Yy=4.6,WE=13.2,VE=1.57,ff=[7.55,1.25,46.75],xp=[17.25,2.42,46],yp=[26.05,1.95,46],hf=[36.15,.015,44],y1=()=>ie(6.8,6.15,mp()),XE=[ff,[9.6,1.65,46.2],[12.3,2.05,45.1],[14.6,2.35,44.5],[16.2,2.3,44.7],xp],YE=[xp,[20.2,2.05,45.6],[23.2,1.8,45],yp],yi=[Ic[2],3,M0.z0],pp=[34.8,1.35,46],_s=[7.89,.03,19.03],By=.36,jy=13.64,z0=[{side:"left",z:34.5},{side:"left",z:23.5},{side:"left",z:14.6},{side:"right",z:14.6},{side:"right",z:23.5},{side:"right",z:34.5}];function Fr(t){let e=t.side==="left"?1:-1;return en([7-e*1,3,t.z+e*.2],[7-e*.6,3.25,t.z+e*.13],mp())}function KE(t){return t.side==="left"?X0(wo([8.6,3.9,t.z],[By,1.45,t.z],76),wo([8,3.6,t.z+.7],[By,3.95,t.z-2],46,-.008)):X0(wo([5.4,3.9,t.z],[jy,1.45,t.z],76),wo([6,3.6,t.z-.7],[jy,3.95,t.z+2],46,-.008))}var QE=()=>[hf,[35.6,.5,44.6],[33.2,1.5,45.6],[29,2.3,46.1],[23.5,2.7,45.9],[18.5,2.9,45.4],[14.8,3.1,44.3],[11,3.3,41.8],[7.4,3.4,38.8],[5.4,3.3,36.6],Fr(z0[0])],ZE=()=>[Fr(z0[2]),[3,3.2,13.2],[1.7,3,12],[2.6,3.2,10],[5,3.6,8.9],[7,3.8,8.6],[9,3.6,8.9],[11.4,3.2,10],[12.3,3,12],[11,3.1,13.4],Fr(z0[3])],JE=()=>[Fr(z0[5]),[9,3.4,31],[7.8,2.8,27.5],[6.8,1.9,24.5],[7.4,1,21],[7.75,.35,19.6],_s],Wy={2:{pos:()=>gp,amp:[.18,.07,.12],tumble:.5},7:{pos:()=>ff,amp:[.12,.09,.1],tumble:.55},8:{pos:()=>xp,amp:[.1,.08,.08],tumble:.5},9:{pos:()=>yp,amp:[.09,.06,.07],tumble:.45},10:{pos:()=>pp,amp:[.07,.04,.06],tumble:.35},12:{pos:()=>Fr(z0[0]),amp:[.12,.08,.1],tumble:.5},13:{pos:()=>Fr(z0[1]),amp:[.12,.08,.1],tumble:.5},14:{pos:()=>Fr(z0[2]),amp:[.12,.08,.1],tumble:.5},15:{pos:()=>Fr(z0[3]),amp:[.12,.08,.1],tumble:.5},16:{pos:()=>Fr(z0[4]),amp:[.12,.08,.1],tumble:.5},17:{pos:()=>Fr(z0[5]),amp:[.12,.08,.1],tumble:.5}},ws=[{name:"corridor",ui:"intro",look:{letterbox:1,exposure:1,focus:14,aperture:.25,vignette:.1},cam(t){let e=.9*(1-Math.exp(-t/14)),o=[0,Math.sin(t*.37)*.025,Math.sin(t*.23)*.06],r=X0(wo([M0.x0+.9,1.85,M0.zc+.25],[M0.x1,2.85,M0.zc-.1],64),wo([M0.x0+1.2,2,M0.zc+.35],[M0.x1,2.6,M0.zc-.15],50));return r.eye=Eo(Eo(r.eye,[e,0,0]),o),r}},{name:"about",ui:"about",look:{letterbox:.55,exposure:1.32,focus:2.9,aperture:.9,vignette:.12,shafts:.65},cam(t){let e=[Math.sin(t*.21)*.08,Math.sin(t*.33)*.03,-.25*(1-Math.exp(-t/12))],o=X0(wo([16.6,1.9,9.2],[17.3,.4,5.6],64),wo([15,1.35,7.75],[17.55,1.05,5.5],44,-.02));return o.eye=Eo(o.eye,e),o}},{name:"sky",ui:"sky",look:{letterbox:.55,exposure:1,focus:2.1,aperture:.45,vignette:.1,shafts:1},cam(t){let e=[Math.sin(t*.12)*.35,Math.sin(t*.2)*.04,(1-Math.cos(t*.12))*.25],o=X0(wo([7,1.35,13],[7.2,7.6,20.4],74,.05),wo([6.6,1.5,12.6],[7.3,7.2,20.8],56,.07));return o.eye=Eo(o.eye,e),o}},{name:"master",ui:"master",look:{letterbox:.55,exposure:1.12,focus:8,aperture:.6,vignette:.3,shafts:.5},cam(t){let e=[Math.sin(t*.17)*.05,Math.sin(t*.29)*.02,-.35*(1-Math.exp(-t/16))],o=X0(wo([7,3.6,43.7],[7,3.85,v1[2]],74),wo([7,3.6,41.3],[7,3.95,v1[2]],46));return o.eye=Eo(o.eye,e),o}},{name:"story",ui:"story",look:{letterbox:.55,exposure:1,focus:8.1,aperture:.9,vignette:.4,shafts:.4},cam(t){let e=[Math.sin(t*.15)*.04,Math.sin(t*.25)*.015,0],o=X0(wo([7,3.9,40.3],[7,1.35,v1[2]],76),wo([6.3,3.6,41.2],[3.7,3.95,v1[2]],46,-.008));return o.eye=Eo(o.eye,e),o}},{name:"leaf",ui:"leaf",look:{letterbox:.55,exposure:1.15,focus:1.25,aperture:1.3,vignette:.35,shafts:.4},cam(t){let e=[Math.sin(t*.2)*.02,Math.sin(t*.3)*.006,0],o=X0(wo([7.15,.15,46],[7.3,.04,aa[2]],50),wo([7.05,.14,45.9],[7.25,.05,aa[2]],32));return o.eye=Eo(o.eye,e),o}},{name:"steps",ui:"steps",look:{letterbox:.9,exposure:1.2,focus:1.6,aperture:1.4,vignette:.4,shafts:.4},cam(t){let e=[Math.sin(t*.2)*.015,0,0],o=X0(wo([7.15,.1,46.3],[7.05,.1,dp],50),wo([7.1,.12,45.85],[7,.2,dp],30));return o.eye=Eo(o.eye,e),o}},{name:"float",ui:"float",look:{letterbox:.55,exposure:1.1,focus:2.2,aperture:.8,vignette:.3,shafts:.6},cam(t){let e=[Math.sin(t*.17)*.05,Math.sin(t*.27)*.02,0],o=X0(wo([7.3,.85,45.65],[7.6,1.38,47.1],64),wo([7.25,.82,45.8],[7.65,1.35,47.1],44));return o.eye=Eo(o.eye,e),o}},{name:"painting1",ui:"p1",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(t){let e=[Math.sin(t*.15)*.04,Math.sin(t*.25)*.015,0],o=X0(wo([gi[0],2.3,46.85],[gi[0],1.25,gi[2]],74),wo([gi[0]-.6,2.55,46.85],[gi[0]+1.9,2.9,gi[2]],46,.008));return o.eye=Eo(o.eye,e),o}},{name:"painting2",ui:"p2",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(t){let e=[Math.sin(t*.15)*.04,Math.sin(t*.25)*.015,0],o=X0(wo([xi[0],1.95,46.85],[xi[0],1,xi[2]],74),wo([xi[0]-.6,2.1,46.85],[xi[0]+1.9,2.75,xi[2]],46,.008));return o.eye=Eo(o.eye,e),o}},{name:"painting3",ui:"p3",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.9},cam(t){let e=[Math.sin(t*.15)*.04,Math.sin(t*.25)*.015,0],o=X0(wo([yi[0],1.4,46.85],[yi[0],.6,yi[2]],74),wo([yi[0]-.6,1.45,46.85],[yi[0]+1.9,2,yi[2]],46,.008));return o.eye=Eo(o.eye,e),o}},{name:"door",ui:"door",look:{letterbox:.8,exposure:1.05,focus:1.45,aperture:1.1,vignette:.35,shafts:1},cam(t){let e=[Math.sin(t*.2)*.02,Math.sin(t*.3)*.006,0],o=X0(wo([34.75,.5,44.15],[M0.x1,.8,43.95],66),wo([34.75,.45,44.3],[M0.x1,.35,43.95],50));return o.eye=Eo(o.eye,e),o}},...z0.map((t,e)=>({name:"hall"+e,ui:"h"+e,look:{letterbox:.55,exposure:1,focus:7.6,aperture:.7,vignette:.35,shafts:.7},cam(o){let r=[Math.sin(o*.15)*.04,Math.sin(o*.25)*.015,Math.sin(o*.11)*.04],n=KE(t);return n.eye=Eo(n.eye,r),n}})),{name:"rest",ui:"end",look:{letterbox:.55,exposure:1.05,focus:2.4,aperture:.5,vignette:.4,shafts:1.15},cam(t){let e=t*.025,o=X0(wo([7.75,2.6,18.6],[7.89,0,19.08],60),wo([7.75,2.3,18.45],[7.89,0,19.08],46)),r=o.eye[0]-_s[0],n=o.eye[2]-_s[2];return o.eye=[_s[0]+r*Math.cos(e)-n*Math.sin(e),o.eye[1],_s[2]+r*Math.sin(e)+n*Math.cos(e)],o}}],t7=[1,.96,.88];function Vy(t,e){return{dur:e,cam(o,r,n){let a=An(o),s=bi(r,n,a),i=z0[t].side==="left"?1:-1;return s.eye=Eo(s.eye,[i*.6*Math.sin(Math.PI*a),.15*Math.sin(Math.PI*a),0]),s},look(o,r,n){let a={};for(let s in n)typeof n[s]=="number"&&(a[s]=ie(r[s],n[s],o));return a.aperture=ie(r.aperture,n.aperture,o)*(1-.5*Math.sin(Math.PI*o)),a},leaf(o){let r=An(o),n=Fr(z0[t]),a=Fr(z0[t+1]),s=z0[t].side==="left"?1:-1,i=Eo(en(n,a,.5),[s*1.2,.5,0]),c=In([n,en(n,i,.6),i,en(a,i,.6),a],r);return{phase:"fly",pos:Eo(c,[0,Math.sin(o*Math.PI*5)*.07*Math.sin(Math.PI*o),0]),tumble:.5+.35*Math.sin(Math.PI*o)}}}}var up=[{dur:6.2,cam(t,e,o){if(t<.5){let i=HE(t/.5),c=en(e.eye,[M0.x1-3.2,2.6,M0.zc],i),h=en(e.target,UE,oe(0,.6,t/.5));return wo(c,h,ie(e.fov,e.fov-8,i),ie(e.roll,.04,i))}let r=hp((t-.5)/.5),n=[[_r.cx+.4,10.4,_r.zc+.6],[_r.cx-.6,7.6,_r.zc+1.3],[_r.cx-1.9,4.6,_r.zc+1.75],o.eye],a=[[_r.cx-.1,0,_r.zc-.2],[_r.cx-1,.4,_r.zc-.1],[_r.cx-1.1,.8,_r.zc-.2],o.target];return wo(In(n,r),In(a,r),ie(o.fov+14,o.fov,r),ie(-.25,o.roll,r))},look(t,e,o){let r=oe(.22,.5,t),n=1-oe(.5,.74,t);return{fade:t<.5?r:n,fadeColor:t7,exposure:ie(e.exposure,o.exposure,oe(.5,.9,t))*(1+2.2*(t<.5?oe(.15,.5,t):1-oe(.5,.8,t))),letterbox:ie(e.letterbox,o.letterbox,oe(.3,.7,t)),aperture:t<.5?e.aperture*(1-t*2):o.aperture*oe(.6,1,t),focus:ie(4,o.focus,oe(.5,1,t)),shafts:ie(e.shafts,o.shafts,oe(.4,.6,t)),vignette:ie(e.vignette,o.vignette,t)}},leaf(){return{phase:"home"}}},{dur:9,cam(t,e,o,r){let n=[e.eye,[15.6,2.4,8.3],[15.4,2.7,7.1],[12.6,2.6,5.4],[9.6,2,7.4],[7.6,1.6,10.6],o.eye],a=In(n,An(t)),s=oe(0,.12,t)*(1-oe(.82,1,t)),i=en(en(e.target,o.target,oe(.55,1,t)),r.pos,s),c=ie(e.fov,o.fov,oe(.3,1,t))-6*Math.sin(Math.PI*t),h=ie(e.roll,o.roll,t)+.05*Math.sin(Math.PI*2*t);return wo(a,i,c,h)},look(t,e,o,r,n){let a=Math.hypot(r.pos[0]-n[0],r.pos[1]-n[1],r.pos[2]-n[2]);return{exposure:ie(e.exposure,o.exposure,oe(.25,.75,t)),letterbox:ie(e.letterbox,o.letterbox,t),focus:ie(a,o.focus,oe(.8,1,t)),aperture:ie(.7,o.aperture,oe(.8,1,t)),shafts:ie(e.shafts,o.shafts,oe(.3,.8,t)),vignette:ie(e.vignette,o.vignette,t)}},leaf(t){let e=Uy(t),o=Math.sin(t*Math.PI*7)*.14*Math.sin(Math.PI*t);return{phase:"fly",pos:Eo(In(BE,e),[0,Math.sin(t*Math.PI*9)*.05*Math.sin(Math.PI*t),o]),tumble:1-.5*oe(.8,1,t)}}},{dur:11.5,cam(t,e,o,r){let n=In([e.eye,[7,1.9,19],[7.1,1.6,27.5],[6.9,1.1,36],[7,.7,42.5],[7.05,.5,45.7]],oe(0,.8,t)*.6+An(ir(t/.8))*.4),a=In([[7.05,.5,45.7],[7,1.2,45.3],[7,2.6,43.8],o.eye],An(oe(.8,1,t))),s=t<.8?n:a,i=en(en(e.target,r.pos,oe(.03,.22,t)),o.target,oe(.82,1,t)),c=ie(e.fov,o.fov,oe(.15,.7,t))-6*oe(.6,.8,t)*(1-oe(.85,1,t)),h=ie(e.roll,o.roll,oe(0,.6,t))-.04*Math.sin(Math.PI*t);return wo(s,i,c,h)},look(t,e,o,r,n){let a=Math.hypot(r.pos[0]-n[0],r.pos[1]-n[1],r.pos[2]-n[2]);return{exposure:ie(e.exposure,o.exposure,oe(.5,1,t)),letterbox:ie(e.letterbox,o.letterbox,t),focus:ie(a,o.focus,oe(.84,1,t)),aperture:ie(1.1,o.aperture,oe(.84,1,t)),shafts:ie(e.shafts,o.shafts,oe(.2,.9,t)),vignette:ie(e.vignette,o.vignette,oe(.5,1,t))}},leaf(t){let e=ie(Uy(t),t,.35),o=In(jE,oe(0,.78,e)),r=Math.sin(t*Math.PI*8)*.35*(1-oe(.55,.76,t)),n=oe(.7,.8,t);return{phase:"fly",pos:Eo(o,[r,Math.abs(Math.cos(t*Math.PI*8))*.12*(1-n),0]),tumble:1-n,swing:r}}},{dur:2.6,cam(t,e,o){let r=An(t),n=bi(e,o,r);return n.eye=Eo(n.eye,[0,0,-.35*Math.sin(Math.PI*r)]),n},look(t,e,o){let r=An(t),n={};for(let a in o)typeof o[a]=="number"&&(n[a]=ie(e[a],o[a],r));return n},leaf(){return{phase:"floor"}}},{dur:4.5,cam(t,e,o){let r=An(t),n=In([e.eye,[6.9,1.7,43.9],[7.05,.45,45.4],o.eye],r),a=en(e.target,o.target,oe(.1,.85,t));return wo(n,a,ie(e.fov,o.fov,oe(.2,1,t)),ie(e.roll,o.roll,r))},look(t,e,o){let r={};for(let n in o)typeof o[n]=="number"&&(r[n]=ie(e[n],o[n],oe(.2,1,t)));return r},leaf(){return{phase:"floor"}}},{dur:5.5,cam(t,e,o){return bi(e,o,An(t))},look(t,e,o){let r={};for(let n in o)typeof o[n]=="number"&&(r[n]=ie(e[n],o[n],An(t)));return r},leaf(){return{phase:"floor"}},walker(t){return ie(Yy,y1(),t)}},{dur:11,kick:t=>ir((t-Cc())/(1-Cc())),cam(t,e,o,r){let n=Cc(),a=oe(0,n,t)*(1-oe(n+.12,n+.35,t)),s=Xy(Math.min(t,$c)),i=Eo(e.target,[(s-e.target[0])*.15*a,0,0]),c=oe(n+.12,1,t),h=In([e.eye,e.eye,Eo(e.eye,[0,.12,-.3]),o.eye],c);return i=en(i,r.pos,oe(n+.06,n+.24,t)*(1-oe(.9,1,t))),i=en(i,o.target,oe(.88,1,t)),wo(h,i,ie(e.fov,o.fov,c),ie(e.roll,o.roll,c))},look(t,e,o,r,n){let a=Cc(),s=Math.hypot(r.pos[0]-n[0],r.pos[1]-n[1],r.pos[2]-n[2]),i=oe(0,.12,t)*(1-oe(a+.25,a+.5,t));return{letterbox:ie(ie(e.letterbox,o.letterbox,oe(a,1,t)),1.75,i),exposure:ie(e.exposure,o.exposure,oe(a,1,t)),focus:t<a?e.focus:ie(e.focus,s,oe(a,a+.2,t)),aperture:ie(e.aperture,o.aperture,oe(a,1,t)),vignette:ie(e.vignette,o.vignette,t),shafts:ie(e.shafts,o.shafts,t)}},leaf(t){let e=ir((t-Cc())/(1-Cc()));if(e<=0)return{phase:"floor"};let o=oe(0,.85,e)*.85+hp(oe(0,.15,e))*.15;return{phase:"fly",pos:Eo(aa,[(ff[0]-aa[0])*o+Math.sin(e*9)*.08*(1-e),(ff[1]-aa[1])*o,(ff[2]-aa[2])*o+Math.sin(e*7)*.06*(1-e)]),tumble:1.3-.75*e}},walker(t){return t<.985?Xy(t):null}},{dur:9,cam(t,e,o,r){let n=An(t),a=In([e.eye,[9.4,1.35,45.6],[12.4,2,45.9],[15,2.45,46.5],o.eye],n),s=1-oe(.6,.92,t),i=en(en(e.target,r.pos,oe(0,.15,t)),o.target,1-s),c=ie(e.fov,o.fov,oe(.3,1,t)),h=ie(e.roll,o.roll,n)+.04*Math.sin(Math.PI*t);return wo(a,i,c,h)},look(t,e,o,r,n){let a=Math.hypot(r.pos[0]-n[0],r.pos[1]-n[1],r.pos[2]-n[2]);return{letterbox:ie(e.letterbox,o.letterbox,t),exposure:ie(e.exposure,o.exposure,oe(.3,.8,t)),focus:ie(a,o.focus,oe(.6,.95,t)),aperture:ie(e.aperture,o.aperture,oe(.6,1,t)),vignette:ie(e.vignette,o.vignette,t),shafts:ie(e.shafts,o.shafts,oe(.3,.8,t))}},leaf(t){let e=An(t);return{phase:"fly",pos:Eo(In(XE,e),[0,Math.sin(t*Math.PI*5)*.08*Math.sin(Math.PI*t),Math.sin(t*Math.PI*4)*.12*Math.sin(Math.PI*t)]),tumble:.55+.4*Math.sin(Math.PI*t)}}},{dur:6.5,cam(t,e,o){let r=An(t),n=bi(e,o,r);return n.eye=Eo(n.eye,[0,.12*Math.sin(Math.PI*r),.1*Math.sin(Math.PI*r)]),n},look(t,e,o){let r={};for(let n in o)typeof o[n]=="number"&&(r[n]=ie(e[n],o[n],t));return r.aperture=ie(e.aperture,o.aperture,t)*(1-.5*Math.sin(Math.PI*t)),r},leaf(t){let e=An(t);return{phase:"fly",pos:Eo(In(YE,e),[0,Math.sin(t*Math.PI*4)*.07*Math.sin(Math.PI*t),0]),tumble:.5+.3*Math.sin(Math.PI*t)}}},{dur:6.5,cam(t,e,o){let r=An(t),n=bi(e,o,r);return n.eye=Eo(n.eye,[0,.1*Math.sin(Math.PI*r),.1*Math.sin(Math.PI*r)]),n},look(t,e,o){let r={};for(let n in o)typeof o[n]=="number"&&(r[n]=ie(e[n],o[n],t));return r.aperture=ie(e.aperture,o.aperture,t)*(1-.5*Math.sin(Math.PI*t)),r},leaf(t){let e=An(t);return{phase:"fly",pos:Eo(In([yp,[29.2,1.75,45.5],[32.2,1.5,45.4],pp],e),[0,Math.sin(t*Math.PI*4)*.06*Math.sin(Math.PI*t),0]),tumble:.45+.25*Math.sin(Math.PI*t)}}},{dur:6,cam(t,e,o,r){let n=An(t),a=In([e.eye,[34.2,1.15,45.6],[34.5,.7,44.8],o.eye],n),s=oe(.05,.3,t)*(1-oe(.8,1,t)),i=en(en(e.target,o.target,oe(.6,1,t)),r.pos,s);return wo(a,i,ie(e.fov,o.fov,oe(.2,1,t)),ie(e.roll,o.roll,n))},look(t,e,o,r,n){let a=Math.hypot(r.pos[0]-n[0],r.pos[1]-n[1],r.pos[2]-n[2]);return{letterbox:ie(e.letterbox,o.letterbox,t),exposure:ie(e.exposure,o.exposure,t),focus:ie(a,o.focus,oe(.8,1,t)),aperture:ie(.9,o.aperture,oe(.8,1,t)),vignette:ie(e.vignette,o.vignette,t),shafts:ie(e.shafts,o.shafts,t)}},leaf(t){let e=In([pp,[35.3,.9,45.2],[35.75,.4,44.4],[36,.08,44.05],hf],oe(0,.85,t)),o=Math.sin(t*Math.PI*6)*.25*(1-oe(.35,.82,t)),r=oe(.78,.88,t);return{phase:"fly",pos:Eo(e,[0,Math.abs(Math.cos(t*Math.PI*6))*.07*(1-r),o]),tumble:.7*(1-r),swing:o}}},{dur:12,door(t){let e=ir((t-.02)/.09);return hp(e)+.07*Math.sin(ir((t-.08)/.18)*Math.PI)*(1-ir((t-.08)/.3))},cam(t,e,o,r){let n=Math.sin(t*340)*.012*oe(.02,.05,t)*(1-oe(.08,.16,t)),a=oe(.06,1,t),s=In([e.eye,[34.3,1,43.6],[31.5,1.9,43.4],[26.5,2.4,43.6],[21,2.6,43.6],[16.5,2.8,43.2],[12.6,3.1,41.2],[9.6,3.4,38],o.eye],a*.55+An(a)*.45),i=Eo(r.pos,[1,-.2,-1.45]);s=en(s,i,oe(.1,.22,t)*(1-oe(.52,.72,t)));let c=oe(.06,.16,t)*(1-oe(.86,1,t)),h=en(e.target,r.pos,c);h=en(h,o.target,oe(.86,1,t));let f=ie(e.fov,o.fov,oe(.1,1,t))+6*Math.sin(Math.PI*oe(.08,.9,t)),d=ie(e.roll,o.roll,t)+.06*Math.sin(Math.PI*2*oe(.1,.9,t))+n;return wo(Eo(s,[0,n,0]),h,f,d)},look(t,e,o,r,n){let a=Math.hypot(r.pos[0]-n[0],r.pos[1]-n[1],r.pos[2]-n[2]),s=oe(.02,.06,t)*(1-oe(.08,.3,t));return{letterbox:ie(e.letterbox,o.letterbox,oe(.1,.4,t)),exposure:ie(e.exposure,o.exposure,t)*(1+.8*s),focus:ie(a,o.focus,oe(.86,1,t)),aperture:ie(.8,o.aperture,oe(.86,1,t)),vignette:ie(e.vignette,o.vignette,t),shafts:ie(e.shafts,o.shafts,t)+s}},leaf(t){let e=ir((t-.05)/.95);if(e<=0)return{phase:"floor"};let o=In(QE(),e*.6+An(e)*.4),r=Math.sin(t*Math.PI*9)*.12*Math.sin(Math.PI*e);return{phase:"fly",pos:Eo(o,[0,r*.6,r]),tumble:1.4-.8*e}}},...[0,1].map(t=>Vy(t,7.5)),{dur:10,cam(t,e,o,r){let n=An(t),a=In([e.eye,[7.6,3.2,16.2],[7,2.9,17.2],[6.5,3.2,16],o.eye],n),s=oe(0,.15,t)*(1-oe(.85,1,t)),i=en(en(e.target,o.target,oe(.5,1,t)),r.pos,s);return wo(a,i,ie(e.fov,o.fov,n)+4*Math.sin(Math.PI*n),ie(e.roll,o.roll,n))},look(t,e,o,r,n){let a=Math.hypot(r.pos[0]-n[0],r.pos[1]-n[1],r.pos[2]-n[2]);return{letterbox:ie(e.letterbox,o.letterbox,t),exposure:ie(e.exposure,o.exposure,t),focus:ie(a,o.focus,oe(.85,1,t)),aperture:ie(.6,o.aperture,oe(.85,1,t)),vignette:ie(e.vignette,o.vignette,t),shafts:ie(e.shafts,o.shafts,t)}},leaf(t){let e=An(t),o=In(ZE(),e);return{phase:"fly",pos:Eo(o,[0,Math.sin(t*Math.PI*6)*.06*Math.sin(Math.PI*t),0]),tumble:.6+.4*Math.sin(Math.PI*t)}}},...[3,4].map(t=>Vy(t,7.5)),{dur:10,cam(t,e,o,r){let n=An(t),a=In([e.eye,[7.6,4,30.5],[7.3,4.4,25.5],[7.1,4,21.8],o.eye],n),s=oe(0,.2,t)*(1-oe(.9,1,t)),i=en(en(e.target,o.target,oe(.5,1,t)),r.pos,s);return wo(a,i,ie(e.fov,o.fov,n),ie(e.roll,o.roll,n))},look(t,e,o,r,n){let a=Math.hypot(r.pos[0]-n[0],r.pos[1]-n[1],r.pos[2]-n[2]);return{letterbox:ie(e.letterbox,o.letterbox,t),exposure:ie(e.exposure,o.exposure,t),focus:ie(a,o.focus,oe(.85,1,t)),aperture:ie(.7,o.aperture,oe(.85,1,t)),vignette:ie(e.vignette,o.vignette,t),shafts:ie(e.shafts,o.shafts,t)}},leaf(t){let e=In(JE(),oe(0,.86,t)),o=Math.sin(t*Math.PI*7)*.3*(1-oe(.4,.84,t)),r=oe(.8,.9,t);return{phase:"fly",pos:Eo(e,[o,Math.abs(Math.cos(t*Math.PI*7))*.08*(1-r),0]),tumble:.8*(1-r),swing:o}}}],vp=9.2,$c=.72;function Xy(t){return t<$c?ie(y1(),vp,t/$c):ie(vp,WE,(t-$c)/(1-$c))}function Cc(){return $c*ir((aa[0]+.15-y1())/(vp-y1()))}var x1={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},m1=t=>Object.assign({},x1,ws[t].look),e7=`
.tour {
	position: fixed;
	inset: 0;
	z-index: 50;
	touch-action: none;
	user-select: none;
	-webkit-user-select: none;
	-webkit-tap-highlight-color: transparent;
	color: #f4ecdf;
	font-family: 'Cormorant Garamond', Georgia, 'Times New Roman', serif;
	cursor: pointer;
}
.tour[hidden] { display: none; }
.tour * { box-sizing: border-box; }

/* the gallery's name, quietly in the corner */
.tour-mark {
	position: absolute;
	top: max(18px, env(safe-area-inset-top));
	left: 22px;
	font: 500 13px/1 'Cormorant Garamond', Georgia, serif;
	letter-spacing: .42em;
	text-transform: uppercase;
	opacity: .78;
	pointer-events: none;
}

.tour-free {
	position: absolute;
	top: max(10px, env(safe-area-inset-top));
	right: 14px;
	min-height: 44px;
	padding: 0 16px;
	border: 1px solid rgba(244,236,223,.32);
	border-radius: 999px;
	background: rgba(20,15,10,.28);
	backdrop-filter: blur(6px);
	-webkit-backdrop-filter: blur(6px);
	color: #f4ecdf;
	font: 500 12px/1 Georgia, serif;
	letter-spacing: .16em;
	text-transform: uppercase;
	cursor: pointer;
	transition: background .3s ease, border-color .3s ease;
}
.tour-free:hover { background: rgba(60,45,30,.45); border-color: rgba(244,236,223,.55); }
.tour-free:focus-visible, .tour-btn:focus-visible { outline: 2px solid #e9cf9a; outline-offset: 3px; }

/* Instagram and email, beside "Explore freely" */
.tour-links {
	position: absolute;
	top: max(10px, env(safe-area-inset-top));
	right: 14px;
	display: flex;
	align-items: center;
	gap: 8px;
}
.tour-links .tour-free { position: static; }
.tour-note { display: inline-flex; align-items: center; gap: 8px; }
.tour-note svg { flex: none; opacity: .9; }
.tour-icon {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 44px;
	height: 44px;
	border: 1px solid rgba(244,236,223,.32);
	border-radius: 50%;
	background: rgba(20,15,10,.28);
	backdrop-filter: blur(6px);
	-webkit-backdrop-filter: blur(6px);
	color: #f4ecdf;
	transition: background .3s ease, border-color .3s ease;
}
.tour-icon:hover { background: rgba(60,45,30,.45); border-color: rgba(244,236,223,.55); }
button.tour-icon { padding: 0; cursor: pointer; font: inherit; }
.tour-icon:focus-visible { outline: 2px solid #e9cf9a; outline-offset: 3px; }

/* the same, as a line of words on the About and closing cards */
.tour-contact {
	display: flex;
	flex-wrap: wrap;
	gap: 6px 18px;
	margin: 0 0 16px;
	pointer-events: auto;
	font-size: 16px;
	letter-spacing: .02em;
}
.tour-contact a {
	display: inline-flex;
	align-items: center;
	gap: 7px;
	min-height: 32px;
	color: #e9cf9a;
	text-decoration: none;
	border-bottom: 1px solid rgba(233,207,154,.0);
	transition: border-color .3s ease;
}
.tour-contact a:hover { border-bottom-color: rgba(233,207,154,.6); }
.tour-endcard .tour-contact { justify-content: center; margin: 18px 0 0; }

/* the opening words: a soft shadow behind them keeps them legible
   against the bright door */
.tour-intro::before {
	content: '';
	position: absolute;
	left: 50%; top: 50%;
	width: min(760px, 120vw);
	height: 150%;
	transform: translate(-50%, -50%);
	background: radial-gradient(closest-side, rgba(12,9,6,.5), rgba(12,9,6,0));
	z-index: -1;
	pointer-events: none;
}
.tour-motto {
	margin-top: 10px;
	line-height: 1.35;
	letter-spacing: .02em;
}

/* progress: one short line per shot */
.tour-progress {
	position: absolute;
	left: 50%;
	bottom: max(18px, env(safe-area-inset-bottom));
	transform: translateX(-50%);
	display: flex;
	gap: 4px;
	pointer-events: none;
}
.tour-progress i {
	display: block;
	width: 10px;
	height: 2px;
	border-radius: 1px;
	background: rgba(244,236,223,.28);
	transition: background .6s ease, width .6s ease;
}
.tour-progress i.on { background: #e9cf9a; width: 22px; }

/* the swipe hint */
.tour-hint {
	position: absolute;
	left: 50%;
	bottom: calc(max(18px, env(safe-area-inset-bottom)) + 18px);
	transform: translateX(-50%);
	font: italic 500 15px/1.2 'Cormorant Garamond', Georgia, serif;
	letter-spacing: .06em;
	opacity: 0;
	transition: opacity 1.2s ease;
	pointer-events: none;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 6px;
	text-shadow: 0 1px 12px rgba(0,0,0,.6);
	white-space: nowrap;
}
.tour-hint.on { opacity: .85; }
.tour-hint svg { animation: tour-nudge 2.4s ease-in-out infinite; }
@keyframes tour-nudge { 0%, 100% { transform: translateY(0); opacity: .5; } 50% { transform: translateY(-6px); opacity: 1; } }

/* a block of words; each line rises into place in turn */
.tour-card {
	position: absolute;
	opacity: 0;
	visibility: hidden;
	transition: opacity .9s ease, visibility 0s linear .9s;
	pointer-events: none;
	text-shadow: 0 1px 18px rgba(0,0,0,.55);
}
.tour-card.on {
	opacity: 1;
	visibility: visible;
	transition: opacity .9s ease;
}
.tour-line {
	display: block;
	opacity: 0;
	transform: translateY(14px);
	filter: blur(4px);
	transition: opacity 1.2s ease, transform 1.4s cubic-bezier(.2,.7,.2,1), filter 1.2s ease;
}
.tour-card.on .tour-line { opacity: 1; transform: none; filter: none; }
/* (long texts rise in without the blur: lighter on phones) */
.tour-body .tour-line { filter: none; }
.tour-card:not(.on), .tour-card:not(.on) .tour-line, .tour-card:not(.on) .tour-rule, .tour-card:not(.on) .tour-letters .tour-word span {
	transition-delay: 0s !important;
	transition-duration: .45s !important;
}

.tour-kicker {
	font: 500 12px/1.4 Georgia, serif;
	letter-spacing: .38em;
	text-transform: uppercase;
	color: #e9cf9a;
}
.tour-title {
	margin: 0;
	font-weight: 500;
	font-size: clamp(40px, 6.2vw, 88px);
	line-height: .98;
	letter-spacing: .01em;
}
.tour-sub {
	font-style: italic;
	font-size: clamp(19px, 2vw, 26px);
	opacity: .9;
}
.tour-rule {
	display: block;
	height: 1px;
	width: 0;
	margin: 18px 0 16px;
	background: linear-gradient(90deg, #e9cf9a, rgba(233,207,154,0));
	transition: width 1.6s cubic-bezier(.2,.7,.2,1);
}
.tour-card.on .tour-rule { width: 120px; }

/* 0: the opening title, centred */
.tour-intro {
	left: 0; right: 0;
	top: 50%;
	transform: translateY(-50%);
	text-align: center;
	padding: 0 24px;
}
.tour-intro .tour-rule { margin: 20px auto 16px; background: linear-gradient(90deg, rgba(233,207,154,0), #e9cf9a, rgba(233,207,154,0)); }
.tour-intro.on .tour-rule { width: 160px; }

/* 1: about, to the right of the artist (below him on a phone) */
.tour-about {
	right: clamp(24px, 6vw, 96px);
	top: 50%;
	transform: translateY(-50%);
	width: min(430px, 40vw);
}
.tour-about p {
	margin: 0 0 14px;
	font-size: clamp(17px, 1.45vw, 20px);
	line-height: 1.55;
	color: rgba(244,236,223,.92);
}
.tour-about .tour-title { font-size: clamp(34px, 3.6vw, 54px); }

/* 2: the skylight, a single line low on the screen */
.tour-sky {
	left: 0; right: 0;
	bottom: 22%;
	text-align: center;
	padding: 0 24px;
}
.tour-sky .tour-sub { font-size: clamp(21px, 2.4vw, 30px); }

/* 3: the masterpiece, a small caption */
.tour-master {
	left: 0; right: 0;
	bottom: 15%;
	text-align: center;
}

/* 10: the end, centred above the leaf */
.tour-endcard {
	left: 0; right: 0;
	top: 18%;
	text-align: center;
	padding: 0 24px;
	pointer-events: auto;
}
.tour-endcard .tour-rule { margin: 16px auto 14px; background: linear-gradient(90deg, rgba(233,207,154,0), #e9cf9a, rgba(233,207,154,0)); }
.tour-endcard.on .tour-rule { width: 160px; }
.tour-endcard .tour-end { justify-content: center; margin-top: 22px; }
.tour-endcard .tour-kicker { letter-spacing: .22em; }

/* 4: the story, beside the painting (below it on a phone) */
.tour-story {
	right: clamp(24px, 5vw, 80px);
	top: 50%;
	transform: translateY(-50%);
	width: min(500px, 42vw);
	max-height: 76vh;
	display: flex;
	flex-direction: column;
	pointer-events: auto;
}
.tour-story .tour-title { font-size: clamp(36px, 4vw, 60px); }
.tour-letters .tour-word { display: inline-block; white-space: nowrap; }
.tour-letters .tour-word span {
	display: inline-block;
	opacity: 0;
	transform: translateY(.35em);
	filter: blur(6px);
	transition: opacity .9s ease, transform 1.1s cubic-bezier(.2,.7,.2,1), filter .9s ease;
}
.tour-story.on .tour-letters .tour-word span { opacity: 1; transform: none; filter: none; }
.tour-body {
	overflow-y: auto;
	touch-action: pan-y;
	-webkit-overflow-scrolling: touch;
	overscroll-behavior: contain;
	padding-right: 10px;
	cursor: auto;
	-webkit-mask-image: linear-gradient(180deg, transparent 0, #000 14px, #000 calc(100% - 40px), transparent 100%);
	mask-image: linear-gradient(180deg, transparent 0, #000 14px, #000 calc(100% - 40px), transparent 100%);
	scrollbar-width: thin;
	scrollbar-color: rgba(233,207,154,.4) transparent;
	user-select: text;
	-webkit-user-select: text;
}
.tour-body p {
	margin: 0 0 14px;
	white-space: pre-line;
	font-size: clamp(17px, 1.35vw, 20px);
	line-height: 1.6;
	color: rgba(244,236,223,.9);
}
.tour-end {
	display: flex;
	gap: 10px;
	flex-wrap: wrap;
	margin-top: 14px;
}
.tour-btn {
	min-height: 44px;
	padding: 0 18px;
	border-radius: 999px;
	border: 1px solid rgba(233,207,154,.55);
	background: rgba(233,207,154,.12);
	color: #f4ecdf;
	font: 500 12px/1 Georgia, serif;
	letter-spacing: .16em;
	text-transform: uppercase;
	cursor: pointer;
	transition: background .3s ease;
}
.tour-btn:hover { background: rgba(233,207,154,.26); }
.tour-btn.quiet { border-color: rgba(244,236,223,.28); background: transparent; }

/* short, wide screens (a small laptop window, a phone on its side) */
@media (min-aspect-ratio: 1/1) and (max-height: 560px) {
	.tour-about { max-height: 70vh; overflow: hidden; }
	.tour-about p { font-size: 14px; line-height: 1.45; margin-bottom: 8px; }
	.tour-about p:nth-of-type(n+2) { display: none; }
	.tour-about .tour-title, .tour-story .tour-title { font-size: 28px; }
	.tour-rule { margin: 8px 0 10px; }
	.tour-story { max-height: 78vh; }
	.tour-body p { font-size: 14px; line-height: 1.45; }
	.tour-btn { min-height: 38px; }
}
@media (max-width: 340px) {
	/* (very narrow screens: the corner belongs to the Instagram and email buttons) */
	.tour-mark { display: none; }
}
@media (max-width: 520px) {
	.tour-links { gap: 6px; }
	.tour-icon { width: 40px; height: 40px; }
	.tour-links .tour-free { padding: 0 12px; letter-spacing: .12em; }
	/* five round buttons in the row: a touch smaller, so his name beside them stays clear */
	.tour-links { gap: 5px; }
	.tour-icon { width: 36px; height: 36px; }
	.tour-links .tour-note { width: 36px; min-height: 36px; height: 36px; padding: 0; justify-content: center; border-radius: 50%; }
	.tour-note span { display: none; }
	.tour-contact { font-size: 15px; }
}
@media (prefers-reduced-motion: reduce) {
	.tour-hint svg { animation: none; }
}
@media (max-aspect-ratio: 1/1) {
	.tour-about, .tour-story {
		left: 18px; right: 18px;
		top: auto;
		bottom: calc(max(18px, env(safe-area-inset-bottom)) + 30px);
		transform: none;
		width: auto;
	}
	.tour-about { max-height: 48vh; overflow: hidden; bottom: calc(max(18px, env(safe-area-inset-bottom)) + 66px); }
	.tour-about p { font-size: 16px; line-height: 1.5; margin-bottom: 10px; }
	.tour-about p:nth-of-type(n+3) { display: none; }
	.tour-story { max-height: 50vh; }
	.tour-story .tour-title { font-size: 34px; }
	.tour-body p { font-size: 16.5px; }
	.tour-rule { margin: 12px 0 12px; }
	.tour-sky { bottom: 24%; }
	.tour-master { bottom: 13%; }
}
`;function sr(t,e,o){let r=document.createElement(t);return e&&(r.className=e),o!==void 0&&(r.innerHTML=o),r}var mi=t=>String(t).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function g1(t,e,o){t.querySelectorAll(".tour-line").forEach((r,n)=>{r.style.transitionDelay=(e+n*o).toFixed(2)+"s"})}Ky.exports=function(e){let o=/tourdebug/.test(location.search),{fps:r}=e;if(!document.querySelector("link[data-tour-font]")){let B=document.createElement("link");B.rel="stylesheet",B.href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&display=swap",B.setAttribute("data-tour-font",""),document.head.appendChild(B)}let n=op(),a=null;fetch("res/hand.json").then(B=>B.ok?B.json():null).then(B=>{a=B}).catch(()=>{});let s=document.createElement("style");s.textContent=e7+`
	.hand-text { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); clip-path: inset(50%); white-space: normal; }
	.tour-body canvas.hand { display: block; cursor: pointer; }`,s.textContent+=`
	body.touring #museum-mobile-controls,
	body.touring .painting-plaque { display: none !important; }`,document.head.appendChild(s);let i=sr("div","tour");i.setAttribute("role","region"),i.setAttribute("aria-label","Guided tour of the gallery. Swipe, scroll or press the arrow keys to move on.");let c=sr("div","tour-mark",mi(d1.name)),h=sr("button","tour-free","Explore freely");h.type="button";let f=sr("div","tour-links",cp.icons("tour-icon"));f.insertBefore(rp()("tour-icon"),f.firstChild),f.insertBefore(Qh().button("tour-icon"),f.firstChild.nextSibling);let d=sr("button","tour-free tour-note",'<svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 4c-7 1-11.5 5.5-13 13l-1.5 3 3-1.5c7.500-1.500 12-6 13-13z"/><path d="M5.5 20L13 12.500"/></svg><span>Leave a note</span>');d.type="button",d.setAttribute("aria-label","Leave a note: go to the piano room and the confessional"),f.appendChild(d),p1&&f.appendChild(h);let u=sr("div","tour-progress",ws.map(()=>"<i></i>").join("")),v=sr("div","tour-hint",'<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M6 15l6-6 6 6"></path></svg><span></span>'),l=v.querySelector("span"),p=sr("div","tour-card tour-intro",`
		<span class="tour-line tour-kicker">A virtual gallery</span>
		<span class="tour-rule"></span>
		<h1 class="tour-line tour-title">${mi(d1.name)}</h1>
		<span class="tour-line tour-sub tour-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</span>`);g1(p,.4,.35);let m=d1.text.split(/\n\s*\n/).map(B=>`<p class="tour-line">${mi(B.trim())}</p>`).join(""),g=sr("div","tour-card tour-about",`
		<span class="tour-line tour-kicker">The artist</span>
		<h2 class="tour-line tour-title">${mi(d1.title)}</h2>
		<span class="tour-rule"></span>
		${cp.line("tour-line tour-contact")}
		${m}`);g1(g,.25,.28);let x=sr("div","tour-card tour-sky",`
		<span class="tour-line tour-sub">Every painting here waits for the light.</span>`);g1(x,.6,.3);let y=sr("div","tour-card tour-master","");function w(B){let yt=sr("div","tour-card tour-story",`
			<span class="tour-line tour-kicker"></span>
			<h2 class="tour-title tour-letters"></h2>
			<span class="tour-rule"></span>
			<span class="tour-line visit-row"></span>
			<div class="tour-body"></div>`),Yt=yt.querySelector(".tour-title"),Le=yt.querySelector(".tour-body");return yt.filled=!1,yt.body=Le,yt.fill=()=>{let $e=B();if(!$e||yt.filled)return;yt.filled=!0;let un=$e.title||"";yt.querySelector(".tour-kicker").textContent=DE($e)||"Oil on canvas";let d0=yt.querySelector(".visit-row");d0.innerHTML=lp.button($e),d0.hidden=!d0.innerHTML;let P0=d0.querySelector(".visit-btn");P0&&(P0.addEventListener("click",To=>{To.stopPropagation(),lp.open($e)}),yt.warm=()=>lp.warm($e));let dn=0;Yt.innerHTML=un.split(" ").map(To=>'<span class="tour-word">'+To.split("").map(r0=>`<span style="transition-delay:${(.35+dn++*.045).toFixed(3)}s">${mi(r0)}</span>`).join("")+"</span>").join(" "),Yt.setAttribute("aria-label",un);let A0=.35+un.length*.045+.2;yt.querySelector(".tour-rule").style.transitionDelay=A0.toFixed(2)+"s";let pn=String($e.description||"").split(/\n\s*\n/).filter(To=>To.trim());if(yt.querySelector(".tour-kicker").style.transitionDelay="0.1s",a&&pn.length){Le.innerHTML=pn.map(Tn=>`<p class="hand-text">${mi(Tn.trim())}</p>`).join("")+'<div class="hand-wrap"><canvas class="hand" aria-hidden="true"></canvas></div>';let To=Le.querySelector("canvas"),r0=pn.map(Tn=>Tn.trim()).join(`

`),on=!1,Vn=!1,K0=0;Le.addEventListener("wheel",()=>{on=!0},{passive:!0}),Le.addEventListener("touchmove",()=>{on=!0},{passive:!0});let Q0=parseFloat(getComputedStyle(Le).fontSize)||17,tn=n(To,a,{ink:"rgba(244,236,223,0.93)",shadow:"rgba(0,0,0,0.55)",shadowBlur:7,xh:Math.max(8.5,Q0*.56),width:.14,speed:80,pace:.12,minDur:.022,maxTime:Tn=>3.5+Tn.length/420,seed:3+un.length,onPen:Tn=>{if(on)return;let Hr=Tn-Le.clientHeight*.55;Hr>Le.scrollTop+4&&(Le.scrollTop+=Math.min(16,Hr-Le.scrollTop))}});To.addEventListener("click",Tn=>{Tn.stopPropagation(),clearTimeout(K0),Vn?tn.finish():(Vn=!0,tn.write(r0,!0))}),yt.write=()=>{if(clearTimeout(K0),on=!1,Vn){tn.write(r0,!0);return}tn.write("",!0),K0=setTimeout(()=>{Vn=!0,tn.write(r0)},A0*.6*1e3)},yt.stopWrite=()=>{clearTimeout(K0),tn.stop()};let kr=0;window.addEventListener("resize",()=>{clearTimeout(kr),kr=setTimeout(()=>{Vn&&yt.classList.contains("on")&&tn.write(r0,!0)},250)})}else Le.innerHTML=pn.map(To=>`<p class="tour-line">${mi(To.trim())}</p>`).join(""),Le.querySelectorAll(".tour-line").forEach((To,r0)=>{To.style.transitionDelay=(A0+.3+Math.min(r0,6)*.35).toFixed(2)+"s"})},yt}let _=()=>e.paintings?e.paintings():[],M=B=>_().find(yt=>yt.side==="corridor"&&Math.abs(yt.paintingPosition[0]-B)<.5),k=w(()=>_().find(B=>B.side==="end")),R=()=>sr("div","tour-card",""),A=w(()=>M(gi[0])),F=w(()=>M(xi[0])),C=w(()=>M(yi[0])),H=z0.map(B=>w(()=>_().find(yt=>yt.side===B.side&&Math.abs(yt.paintingPosition[2]-B.z)<.5))),I=sr("div","tour-card tour-endcard",`
		<span class="tour-line tour-kicker">Thank you for walking with me</span>
		<span class="tour-rule"></span>
		<span class="tour-line tour-sub">${p1?"The rest of the gallery is yours to wander.":"Swipe back to return to any painting."}</span>
		<span class="tour-line tour-sub tour-confess-line">Before you leave, the confessional is open.<br>Leave me a note; no one else will read it.</span>
		<div class="tour-line tour-end"><button type="button" class="tour-btn" data-act="confess">Leave something behind</button></div>
		${cp.line("tour-line tour-contact")}
		<div class="tour-line tour-end">
			${p1?'<button type="button" class="tour-btn" data-act="free">Walk the gallery</button>':""}
			<button type="button" class="tour-btn quiet" data-act="list">All paintings</button>
			<button type="button" class="tour-btn quiet" data-act="replay">Replay</button>
		</div>`);g1(I,.5,.35);let V=[p,g,x,y,k,R(),R(),R(),A,F,C,R(),...H,I];i.append(...V,c,f,u,v),document.body.appendChild(i);let dt=Hy()({root:i,avatar:e.avatar,glyphs:()=>a,onExit:()=>{Jt=-1,_t&&(pe={start:S},_t=!1)}});document.body.classList.add("touring");let $t=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,kt=$t?"Scroll":"Swipe",mt=ws.map((B,yt)=>yt===0?$t?"Scroll to begin":"Swipe up to begin":yt===1?kt+" to follow the leaf":yt===2?kt+" to follow the light":yt===3?kt+" for its story":yt===6||yt===7||yt===ws.length-1?"":kt+" on"),st=[0];up.forEach(B=>st.push(st[st.length-1]+B.dur));let Wt=st[st.length-1],we=210,_e=95,Ve=.35,Ie=1.4,xo=.32,ro=1,pt=1.3,X=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,gt=2.2,Nt=.7,ce=.9,xe=!0,ne=0,Bt=0,rt=0,Xt=-10,Te=!1,Jt=-1,It=0,He=0,S=0,Ge=null,je=Object.assign({},m1(0)),Je=ws[0].cam(0),Mo={phase:"home",pos:Pc.slice(),tumble:0},vo=0,Ro=B=>{let yt=0;for(let Yt=1;Yt<st.length;Yt++)Math.abs(st[Yt]-B)<Math.abs(st[yt]-B)&&(yt=Yt);return yt};function Ao(B){let yt=V[B];yt&&yt.fill&&(yt.fill(),yt.body.scrollTop=0,yt.offsetWidth),V.forEach((Yt,Le)=>{let $e=Yt.classList.contains("on");Yt.classList.toggle("on",Le===B),Le===B&&!$e&&Yt.write&&Yt.write(),Le!==B&&$e&&Yt.stopWrite&&Yt.stopWrite()}),yt&&yt.warm&&yt.warm(),l.textContent=mt[B]||"",v.classList.toggle("on",!!mt[B])}function Jo(){V.forEach(B=>{B.stopWrite&&B.classList.contains("on")&&B.stopWrite(),B.classList.remove("on")}),v.classList.remove("on")}let Wn=null,lr=-1;function et(B){if(dt.active||!xe||Ge)return;let yt=S-Xt>Ve;if(Xt=S,yt||!Wn){let Yt=0,Le=Wt;for(let $e=0;$e<st.length;$e++)if(st[$e]<=ne-.02&&(Yt=st[$e]),st[$e]>=ne+.02){Le=st[$e];break}Wn={lo:Yt,hi:Le}}S<lr||(Te=!1,rt=Math.max(Wn.lo,Math.min(Wn.hi,rt+B)),rt=Math.max(ne-gt,Math.min(ne+gt,rt)))}function U(B){if(dt.active||!xe||Ge)return;let yt=Te?rt:ne,Yt;if(B>0)Yt=st.findIndex(Le=>Le>yt+.05);else{Yt=-1;for(let Le=st.length-1;Le>=0;Le--)if(st[Le]<yt-.05){Yt=Le;break}}Yt<0||(rt=st[Yt],Te=!0,Xt=S)}let Q=null,j=B=>B.stopPropagation();["touchstart","touchmove","touchend","mousedown","mouseup","click","contextmenu"].forEach(B=>i.addEventListener(B,j)),i.addEventListener("pointerdown",B=>{if(B.stopPropagation(),!(B.target.closest("button, a")||B.target.closest(".tour-body"))){Q={x:B.clientX,y:B.clientY,lx:B.clientX,ly:B.clientY,t:performance.now(),moved:0,v:0,lt:performance.now()};try{i.setPointerCapture(B.pointerId)}catch(yt){}}}),i.addEventListener("pointermove",B=>{if(!Q)return;let yt=B.clientX-Q.lx,Yt=B.clientY-Q.ly;Q.lx=B.clientX,Q.ly=B.clientY;let Le=Math.abs(Yt)>=Math.abs(yt)?-Yt:-yt;Q.moved+=Math.abs(Le);let $e=performance.now(),un=Le/_e;Q.v=Q.v*.6+un/Math.max(.008,($e-Q.lt)/1e3)*.4,Q.lt=$e,Q.moved>6&&et(un)});let Tt=B=>{let yt=Q;if(Q=null,!!yt){if(dt.active){yt.moved<10&&performance.now()-yt.t<500?dt.tap():yt.y-(B?B.clientY:yt.ly)>30&&dt.swipe(1);return}yt.moved<10&&performance.now()-yt.t<500?U(1):performance.now()-yt.lt<120&&et(Math.max(-1.6,Math.min(1.6,yt.v*.22)))}};i.addEventListener("pointerup",B=>{B.stopPropagation(),Tt(B)}),i.addEventListener("pointercancel",()=>{Q=null}),i.addEventListener("wheel",B=>{if(dt.active){if(B.target.closest(".conf-ui"))return;B.preventDefault(),dt.wheel(B.deltaY);return}if(B.target.closest(".tour-body")){let Yt=B.target.closest(".tour-body"),Le=Yt.scrollTop+Yt.clientHeight>=Yt.scrollHeight-2&&B.deltaY>0,$e=Yt.scrollTop<=0&&B.deltaY<0;if(!Le&&!$e)return}B.preventDefault();let yt=B.deltaMode===1?B.deltaY*16:B.deltaMode===2?B.deltaY*window.innerHeight:B.deltaY;et(yt/we)},{passive:!1}),window.addEventListener("keydown",B=>{if(!xe||Ge||document.body.classList.contains("visiting"))return;if(dt.active){if(B.stopImmediatePropagation(),B.target&&/TEXTAREA|INPUT|BUTTON/.test(B.target.tagName))return;dt.key(B.key)&&B.preventDefault();return}let yt=B.key;if(["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(yt)>=0){if((yt==="Enter"||yt===" ")&&B.target&&B.target.tagName==="BUTTON")return;B.preventDefault(),B.stopImmediatePropagation(),U(1)}else["ArrowUp","ArrowLeft","PageUp"].indexOf(yt)>=0?(B.preventDefault(),B.stopImmediatePropagation(),U(-1)):yt==="Escape"?(B.preventDefault(),Me()):/^[wasdzq]$/i.test(yt)&&B.stopImmediatePropagation()},!0),window.addEventListener("keyup",B=>{xe&&!Ge&&/^(Arrow|[wasdzq]$)/i.test(B.key)&&B.stopImmediatePropagation()},!0),h.addEventListener("click",B=>{B.stopPropagation(),Me()}),["mousedown","pointerdown"].forEach(B=>d.addEventListener(B,yt=>yt.stopPropagation())),d.addEventListener("click",B=>{B.stopPropagation(),fe()});let Kt=wo([8.6,1.75,44.3],[-3,1.85,44.5],55,0),Rt=null,_t=!1;function fe(){if(!xe||Ge||dt.active||Rt)return;Jo(),Jt=-2;let B=Je.eye;if(B[0]>.5&&B[0]<13.5&&B[2]>36&&B[2]<50){_t=!1,dt.start(Je,je);return}Rt={t:0}}I.addEventListener("click",B=>{let yt=B.target.closest("button");yt&&(B.stopPropagation(),yt.dataset.act==="free"&&Me(),yt.dataset.act==="replay"&&Re(),yt.dataset.act==="list"&&wu().show(!1),yt.dataset.act==="confess"&&(Jo(),Jt=-2,dt.start(Je,je)))});let Ft=[null,[_r.zc-1.6,Math.PI/2],[11.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[42.5+Ic[0]-7,0],[42.5+Ic[1]-7,0],[42.5+Ic[2]-7,0],[1e3,Math.PI/2],...z0.map(B=>[B.z-1.6,B.side==="left"?-Math.PI/2:Math.PI/2]),[_s[2]-1.6,Math.PI]],ye=null,ue=0;function Me(){if(!xe||Ge||!p1)return;let B=Ro(ne),yt=Ft[B];ye=B<=1?{phase:"home",pos:Pc.slice()}:B>=3&&B<=6?{phase:"floor",pos:aa.slice()}:B===11?{phase:"floor",pos:hf.slice()}:B===18?{phase:"floor",pos:_s.slice()}:null,ue=B>=12?1:0,yt&&r.place&&r.place(yt[0],yt[1]),Ge={start:S,fromCam:Je,fromLook:Object.assign({},je)},Jo(),i.hidden=!0,document.body.classList.remove("touring"),e.onExit&&e.onExit()}function Re(){ne=rt=0,Bt=0,Te=!1,Jt=-1,It=0,He=0,Mo={phase:"home",pos:Pc.slice(),tumble:0},pe={start:S}}let pe={start:-1},Ue=!1,Ye=[],se={prev:null,vel:[0,0,0],axis:[1,0,0],dir:null,bank:0,rock:0,spin:0,fresh:!0};function eo(B){vo+=B*(Mo.phase==="floor"?0:1);let yt=Mo.tumble===void 0?0:Mo.tumble,Yt=Oc.fromTranslation(Ye,Mo.pos);if(Mo.phase==="home")Yt=Oc.rotateY(Yt,Yt,2.2+Math.sin(vo*.9)*.15),Yt=Oc.rotateZ(Yt,Yt,-1+Math.sin(vo*1.3)*.12),Yt=Oc.rotateX(Yt,Yt,.4);else if(Mo.phase==="floor")Yt=Oc.rotateY(Yt,Yt,.65),Yt=Oc.rotateX(Yt,Yt,.16);else{let Le=Mo.pos;if(se.prev&&B>0){let T0=[Le[0]-se.prev[0],Le[1]-se.prev[1],Le[2]-se.prev[2]];if(Math.hypot(T0[0],T0[1],T0[2])<1.5){let Wc=Math.min(1,B*6);for(let Ts=0;Ts<3;Ts++)se.vel[Ts]+=(T0[Ts]/B-se.vel[Ts])*Wc}else se.vel=[0,0,0]}se.prev=Le.slice();let $e=se.vel,un=Math.hypot($e[0],$e[1],$e[2]),d0=oe(.25,1.4,un),P0=oe(.5,2,-$e[1]),dn=vo*.35*(.3+yt)+.65,A0=[Math.cos(dn),0,Math.sin(dn)];un>.001&&(A0=en(A0,V0($e,-1/un),d0));let pn=Math.min(1,B*4);se.axis=en(se.axis,A0,se.fresh?1:pn);let To=se.axis,r0=Math.hypot(To[0],To[1],To[2])||1;To=V0(To,1/r0);let on=Je.eye,Vn=[on[0]-Le[0],on[1]-Le[1],on[2]-Le[2]],K0=Math.hypot(Vn[0],Vn[1],Vn[2])||1,Q0=ie(.6,.22,d0),tn=[Vn[0]/K0*Q0,1+Vn[1]/K0*Q0,Vn[2]/K0*Q0],kr=To[0]*tn[0]+To[1]*tn[1]+To[2]*tn[2];tn=fp(tn,V0(To,kr));let Tn=Math.hypot(tn[0],tn[1],tn[2])||1;tn=V0(tn,1/Tn);let Hr=[To[1]*tn[2]-To[2]*tn[1],To[2]*tn[0]-To[0]*tn[2],To[0]*tn[1]-To[1]*tn[0]],Fo=Math.hypot($e[0],$e[2]),vn=0;if(Fo>.15&&se.dir&&B>0){let T0=[$e[0]/Fo,$e[2]/Fo];vn=(se.dir[0]*T0[1]-se.dir[1]*T0[0])/B,se.dir=T0}else Fo>.15&&(se.dir=[$e[0]/Fo,$e[2]/Fo]);se.bank+=(Math.max(-.8,Math.min(.8,vn*.3))*d0-se.bank)*Math.min(1,B*3),se.rock+=B*(1.5+2.4*d0),se.spin+=B*P0*7*(.4+yt);let Sr=Math.sin(se.rock)*(.26+.45*yt)*(1-.5*P0)+se.bank+se.spin,zs=Math.sin(se.rock*.63+1)*(.16+.3*yt)+(Mo.swing||0)*.9,ia=Math.cos(Sr),As=Math.sin(Sr),xf=Eo(V0(tn,ia),V0(Hr,As)),Ga=Eo(V0(Hr,ia),V0(tn,-As));ia=Math.cos(zs),As=Math.sin(zs);let ki=Eo(V0(To,ia),V0(xf,As)),Bc=Eo(V0(xf,ia),V0(To,-As)),M1=Math.sin(se.rock+1.5708)*.035*(.3+yt)*(1-.5*d0),ba=Eo(Le,V0(Hr,M1)),jc=[ki[0],ki[1],ki[2],0,Bc[0],Bc[1],Bc[2],0,Ga[0],Ga[1],Ga[2],0,ba[0],ba[1],ba[2],1];for(let T0=0;T0<16;T0++)Yt[T0]=jc[T0];se.fresh=!1}return Mo.phase!=="fly"&&(se.prev=null,se.vel=[0,0,0],se.fresh=!0,se.spin=0,se.bank=0,se.dir=null),{visible:!0,model:Yt}}function ko(B){for(let yt in x1)je[yt]=B[yt]!==void 0?B[yt]:x1[yt]}function Io(B,yt){if(B<=1)return{phase:"home",pos:Pc.slice(),tumble:0};let Yt=Wy[B];if(Yt){let Le=Yt.amp;return{phase:"fly",pos:Eo(Yt.pos(),[Math.sin(yt*.55)*Le[0],Math.sin(yt*.8)*Le[1],(1-Math.cos(yt*.45))*Le[2]]),tumble:Yt.tumble}}return{phase:"floor",pos:(B>=18?_s:B>=10?hf:aa).slice(),tumble:0}}let Oe=0,qe=null;function oo(B){let yt=Math.min(.1,Math.max(0,B-Oe));if(Oe=B,S=B,Ue||(Ue=!0,pe.start=B),Ge)return null;if(Rt&&(Rt.t+=yt,Rt.t>=.7&&(Rt=null,_t=!0,dt.start(Kt,Object.assign({},x1,{fade:1,fadeColor:[0,0,0]})))),dt.active){let Fo=dt.update(yt);return Je=Fo.camera,ko(Fo.look),o&&window.__camOverride&&(Je=window.__camOverride),o&&window.__lookOverride&&Object.assign(je,window.__lookOverride),{camera:Je,walker:null,door:1,look:je,leaf:eo(yt)}}if(!Te&&!Q&&S-Xt>Nt){let Fo=Ro(rt);Math.abs(st[Fo]-rt)<ce&&(rt=st[Fo])}let Yt=rt-ne;if(Te){let vn=Math.sign(Yt)*Math.min(ro,Math.sqrt(2*pt*Math.abs(Yt)))-Bt;Bt+=Math.sign(vn)*Math.min(Math.abs(vn),pt*yt),ne+=Bt*yt,(Yt>0&&ne>=rt||Yt<0&&ne<=rt||Math.abs(rt-ne)<1e-4)&&(ne=rt,Bt=0,Te=!1)}else{let Fo=GE(ne,rt,Bt,xo,yt,3);ne=Fo[0],Bt=Fo[1],Math.abs(rt-ne)<1e-4&&Math.abs(Bt)<.001&&(ne=rt,Bt=0)}let Le=0;for(;Le<up.length-1&&ne>=st[Le+1];)Le++;let $e=up[Le],un=ir((ne-st[Le])/$e.dur),d0=ws[Le],P0=ws[Le+1],dn=Ro(ne);dn!==It&&(It=dn,He=0);let A0=Math.abs(ne-st[dn])<.02;A0&&(He+=yt);let pn=1-oe(0,1.2,Math.abs(ne-st[dn])),To=$e.leaf(un);if(To.pos?Mo=Object.assign({},To):Mo=Object.assign({},To,{pos:To.phase==="home"?Pc.slice():(Le>=10?hf:aa).slice()}),Wy[dn]&&pn>0){let Fo=Io(dn,He);Mo.pos=en(Mo.pos,Fo.pos,pn)}let r0=$e.walker&&(un>.01||Le===6)?$e.walker(un):null;qe=r0==null?null:{x:r0,z:dp,heading:Math.PI/2,phase:(r0-Yy)/VE};let on=$e.cam(un,d0.cam(0),P0.cam(0),Mo);if(pn>0&&He>0){let Fo=ws[dn],vn=Fo.cam(0),Sr=Fo.cam(He);on=wo(Eo(on.eye,V0(fp(Sr.eye,vn.eye),pn)),Eo(on.target,V0(fp(Sr.target,vn.target),pn)),on.fov+(Sr.fov-vn.fov)*pn,on.roll+(Sr.roll-vn.roll)*pn)}if(pn>0&&!X){let Fo=S,vn=.006*pn,Sr=Math.sin(Fo*.61)*.6+Math.sin(Fo*1.37+1.3)*.4,zs=Math.sin(Fo*.47+2.1)*.6+Math.sin(Fo*1.13+.4)*.4,ia=Math.sin(Fo*.53+4)*.5+Math.sin(Fo*.97+2.6)*.5;on=wo(Eo(on.eye,[Sr*vn,zs*vn*.7,ia*vn]),Eo(on.target,[zs*vn*1.8,Sr*vn*1.4,0]),on.fov,on.roll+ia*.0012*pn)}Je=on;let Vn=m1(Le),K0=m1(Le+1),Q0=Object.assign({},Vn,$e.look(un,Vn,K0,Mo,on.eye));if(pn>0){let Fo=m1(dn);for(let vn in Fo)typeof Fo[vn]=="number"&&(Q0[vn]=ie(Q0[vn],Fo[vn],pn))}ko(Q0);let kr=A0&&Math.abs(rt-ne)<.02?dn:-1;kr!==Jt&&(kr>=0&&(lr=S+Ie),Jt=kr,kr>=0?Ao(kr):Jo()),u.querySelectorAll("i").forEach((Fo,vn)=>Fo.classList.toggle("on",vn===dn));let Tn=Jt>=0?V[Jt]:null;Tn&&Tn.fill&&!Tn.filled&&(Tn.fill(),Tn.filled&&(Tn.classList.remove("on"),Tn.offsetWidth,Tn.classList.add("on")));let Hr=ir((B-pe.start)/2.6);return Hr<1&&(je.fade=Math.max(je.fade,1-oe(0,1,Hr)),je.fadeColor=[0,0,0]),o&&window.__camOverride&&(Je=window.__camOverride),o&&window.__lookOverride&&Object.assign(je,window.__lookOverride),{camera:Je,walker:qe,door:$e.door?$e.door(un):Le>=12?1:0,look:Rt?Object.assign(je,{fade:Math.max(je.fade||0,ir(Rt.t/.6)),fadeColor:[0,0,0]}):je,leaf:eo(yt)}}return o&&(window.__tour={go:U,exit:Me,wind:et,confess(){Jo(),Jt=-2,dt.start(Je,je)},note:()=>fe(),conf:dt,paper:l1().STATE,seek(B,yt){ne=rt=st[B]+(st[B+1]-st[B])*yt,Bt=0,Te=!1,Xt=S+1e6,pe.start=S-10,Ue=!0},jump(B){ne=rt=st[B],Bt=0,Te=!1,He=0,Xt=S,pe.start=S-10,Ue=!0},state:()=>({current:Ro(ne),scroll:+ne.toFixed(3),target:+rt.toFixed(3),shown:Jt,move:Math.abs(rt-ne)>.02?{p:ne}:null,camNow:Je,leaf:Mo,look:je})}),{update:oo,get active(){return xe&&!Ge},handover(B){if(!Ge)return null;let yt=ir((B-Ge.start)/1.8);return yt>=1?(xe=!1,null):{from:Ge.fromCam,fromLook:Ge.fromLook,k:An(yt)}},restingDoor:()=>ue,restingLeaf(){return ye?(Mo=ye,eo(0)):null},mix:bi,cam:wo}}});var o7=Tm(),sa=Ar(),Np=wu(),_1=sa.reflection,n7=!1,pb=(t,e,o,r,n)=>r+(t-e)*(n-r)/(o-e),Rp=()=>pb(window.innerWidth/window.innerHeight,16/9,9/16,1.7,Math.PI/3);navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)&&(Rp=()=>pb(window.innerWidth/window.innerHeight,16/9,9/16,1.5,Math.PI/3));var vb=()=>2*Math.atan(Math.tan(Rp()*.5)*window.innerHeight/window.innerWidth),r7=Hm(),vf=new r7;vf.showPanel(0);n7&&document.body.appendChild(vf.dom);var Mn,Uc,Mp,Fc,kp,_n;function a7(){try{let t=document.createElement("canvas"),e=t.getContext("webgl")||t.getContext("experimental-webgl");return!!(e&&e.getExtension("OES_standard_derivatives"))}catch(t){return!1}}if(!a7())throw o7.finish(),Np.show(!0),new Error("This device cannot draw the 3D gallery; showing the list instead.");Mn=Um()({extensions:["OES_element_index_uint","OES_standard_derivatives"],optionalExtensions:["EXT_texture_filter_anisotropic","WEBGL_depth_texture"],attributes:{alpha:!1,antialias:!1},pixelRatio:sa.pixelRatio});location.hash==="#list"&&Np.show(!1);window.addEventListener("hashchange",()=>{location.hash==="#list"&&Np.show(!1)});Uc=T2()();var s7=Zu();Mp=s7(Mn,Uc,_1);Fc=Y3()(Mn,Uc);kp=J3()(Mn);var Zy=gg()(Mn,Uc),Jy=Ag()(Mn),tb=Ng()(Mn),eb=Xg()(Mn),ob=Jg()(Mn),nb=rx()(Mn),Ss=yx()(Mn),Sp=Od(),mb=Zf(),i7=pl(),Ep=Pd(),zp=c0(),n0=Oh(),Ap=Tx(),gb=Qh(),{A:Dc}=Nr();_n=hy()(Uc,vb);var Gc=py()(Mn,sa),Ms=yy()(Mn),rb=wy()(Mn),c7=ky()(Mn,sa),l7=Ly()(Mn,sa),ab=Za()(Mn),sb=l1()(Mn),ib=es()(Mn),cb=Qs()(Mn),ya=Qy()({fps:_n,paintings:()=>Fc.interactables(),avatar:Ss,onExit:()=>_n.setPaused(!1)});_n.setPaused(!0);/tourdebug/.test(location.search)&&(window.__post=Gc);var ks=[],Hc=[],C0=[7,2,1.6];Uc.viewer=C0;var f7=Mn({cull:{enable:!0,face:"back"},uniforms:{view:()=>ks,proj:()=>Hc,yScale:1,mirrorOn:()=>_1?1:0,night:()=>zp.night,time:Mn.context("time")}}),h7=Mn({cull:{enable:!0,face:"front"},uniforms:{yScale:-1}}),xb=document.createElement("style");xb.textContent=`

/* -----------------------------------------------------------
   PAGE
----------------------------------------------------------- */

html,
body {
	margin: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
	background: #080706;
}

canvas {
	display: block;
	width: 100vw;
	height: 100vh;
}




/* ===========================================================
   TITLE CARD (appears when you walk up to a painting)
   Plain, beige brown, see-through
=========================================================== */

.painting-plaque {
	position: fixed;
	left: 50%;
	bottom: 28px;
	z-index: 30;
	transform: translateX(-50%) translateY(10px);
	width: min(520px, calc(100vw - 30px));
	max-width: 520px;
	min-width: 0;
	box-sizing: border-box;
	padding: 14px 22px;
	border: none;
	border-radius: 4px;
	background: rgba(158,130,98,.62);
	color: #fffaf0;
	font: 500 13px/1.3 Georgia, serif;
	letter-spacing: .05em;
	text-align: center;
	cursor: pointer;
	opacity: 0;
	visibility: hidden;
	pointer-events: none;
	touch-action: manipulation;
	-webkit-tap-highlight-color: transparent;
	user-select: none;
	-webkit-user-select: none;
	backdrop-filter: blur(6px);
	-webkit-backdrop-filter: blur(6px);
	transition: opacity .28s ease, transform .28s ease, background .28s ease;
}

.painting-plaque.visible {
	opacity: 1;
	visibility: visible;
	pointer-events: auto;
	transform: translateX(-50%) translateY(0);
}

.painting-plaque:hover {
	background: rgba(170,141,107,.72);
}

.painting-plaque:active {
	transform: translateX(-50%) scale(.985);
}


/* ===========================================================
   DESCRIPTION OVERLAY
=========================================================== */

.story-overlay {
	position: fixed;
	inset: 0;
	z-index: 100;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: clamp(20px, 5vw, 70px);
	background: rgba(18,13,8,.30);
	opacity: 0;
	visibility: hidden;
	pointer-events: none;
	touch-action: auto;
	transition: opacity .38s ease, visibility 0s linear .38s;
}

.story-overlay.open {
	opacity: 1;
	visibility: visible;
	pointer-events: auto;
	transition: opacity .38s ease;
}


/* ===========================================================
   DESCRIPTION CARD
   Plain beige brown, translucent, no ornament
=========================================================== */

.story-card {
	position: relative;
	width: min(760px, 88vw);
	max-height: 82vh;
	overflow-y: auto;
	padding: 40px clamp(25px, 5vw, 56px) 44px;
	box-sizing: border-box;
	border: none;
	border-radius: 4px;
	background: rgba(150,122,92,.78);
	backdrop-filter: blur(4px);
	-webkit-backdrop-filter: blur(4px);
	box-shadow: 0 12px 40px rgba(0,0,0,.25);
	color: #fffaf0;
	transform: translateY(12px);
	transition: transform .4s ease;
	touch-action: auto;
	-webkit-overflow-scrolling: touch;
}

.story-overlay.open .story-card {
	transform: translateY(0);
}

.story-title {
	margin: 0 38px 22px 0;
	color: #ffffff;
	font: normal clamp(24px, 3vw, 36px) / 1.15 Georgia, serif;
	letter-spacing: .01em;
}

.story-meta {
	margin: 0 0 8px;
	font: 500 12px/1.4 Georgia, serif;
	letter-spacing: .26em;
	text-transform: uppercase;
	color: rgba(255,244,222,.85);
}

.story-contact {
	display: flex;
	flex-wrap: wrap;
	gap: 6px 18px;
	margin: -8px 0 18px;
	font: normal 15px/1.4 Georgia, serif;
}
.story-contact[hidden], .story-meta[hidden] { display: none; }
.story-contact a {
	display: inline-flex;
	align-items: center;
	gap: 7px;
	min-height: 32px;
	color: #fffaf0;
	text-decoration: underline;
	text-decoration-color: rgba(255,250,240,.35);
	text-underline-offset: 3px;
}

/* Instagram and email in the corner while walking freely */
.museum-links {
	position: fixed;
	top: max(12px, env(safe-area-inset-top));
	right: 14px;
	z-index: 40;
	display: flex;
	gap: 8px;
}
body.touring .museum-links { display: none; }
.museum-link {
	padding: 0;
	cursor: pointer;
	font: inherit;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 42px;
	height: 42px;
	border-radius: 50%;
	border: 1px solid rgba(255,248,235,.35);
	background: rgba(20,15,10,.32);
	backdrop-filter: blur(6px);
	-webkit-backdrop-filter: blur(6px);
	color: #fffaf0;
}

.story-body {
	margin: 0;
	white-space: pre-line;
	font: normal clamp(15px, 1.5vw, 18px) / 1.72 Georgia, serif;
	color: rgba(255,250,240,.96);
}

.story-close {
	position: absolute;
	top: 12px;
	right: 14px;
	width: 34px;
	height: 34px;
	border: 1px solid rgba(255,248,235,.40);
	border-radius: 50%;
	background: transparent;
	color: #fffaf0;
	cursor: pointer;
	font: 24px/29px Georgia, serif;
	touch-action: manipulation;
	z-index: 5;
	transition: background .2s ease;
}

.story-close:hover {
	background: rgba(255,248,235,.16);
}


/* ===========================================================
   ABOUT: the camera glides into the tree court, so the card
   sits to the right and leaves the view clear
=========================================================== */

.story-overlay.about-mode {
	justify-content: flex-end;
	background: transparent;
}

.story-overlay.about-mode .story-card {
	width: min(440px, 38vw);
	max-height: 86vh;
	transform: translateX(16px);
}

.story-overlay.about-mode.open .story-card {
	transform: translateX(0);
}


/* ===========================================================
   MOBILE
=========================================================== */

@media (max-width: 600px) {



	.painting-plaque {

		bottom: 20px;

		width:
			calc(
				100vw - 24px
			);

		max-width: none;

		min-width: 0;

		font-size: 12px;

		padding:
			13px
			16px;
	}


	.story-overlay {

		align-items:
			flex-end;

		padding:
			12px;
	}


	.story-card {

		width:
			calc(
				100vw - 24px
			);

		max-height:
			86vh;

		padding:
			36px
			22px
			32px;
	}


	.story-title {

		font-size:
			27px;

		margin-right:
			42px;
	}


	.story-body {

		font-size:
			16px;

		line-height:
			1.75;
	}


	.story-close {

		top: 10px;

		right: 10px;
	}

	.story-overlay.about-mode .story-card {
		width: calc(100vw - 24px);
		max-height: 46vh;
		transform: translateY(16px);
	}

	.story-overlay.about-mode.open .story-card {
		transform: translateY(0);
	}
}
`;document.head.appendChild(xb);var Gr=document.createElement("button");Gr.className="painting-plaque";Gr.type="button";Gr.setAttribute("aria-label","Read painting");document.body.appendChild(Gr);var Y0=document.createElement("div");Y0.className="story-overlay";Y0.innerHTML=`

	<article
		class="story-card"
		role="dialog"
		aria-modal="true"
		aria-labelledby="story-title"
	>

		<button
			class="story-close"
			type="button"
			aria-label="Close"
		>
			\xD7
		</button>

		<p class="story-meta" id="story-meta"></p>

		<h2
			class="story-title"
			id="story-title"
		></h2>

		${mb.line("story-contact")}

		<div class="visit-row story-visit"></div>

		<p
			class="story-body"
			id="story-body"
		></p>

	</article>
`;document.body.appendChild(Y0);var Es=document.createElement("div");Es.className="museum-links";Es.innerHTML=mb.icons("museum-link");Es.insertBefore(rp()("museum-link"),Es.firstChild);Es.insertBefore(gb.button("museum-link"),Es.firstChild.nextSibling);["mousedown","pointerdown","click"].forEach(t=>Es.addEventListener(t,e=>e.stopPropagation()));document.body.appendChild(Es);var u7=Y0.querySelector("#story-title"),d7=Y0.querySelector("#story-body"),lb=Y0.querySelector("#story-meta"),p7=Y0.querySelector(".story-contact"),pf=Y0.querySelector(".story-visit");pf.addEventListener("click",t=>{t.target.closest(".visit-btn")&&Mi&&Ep.open(Mi)});var v7=Y0.querySelector(".story-close"),Mi=null,cr={p:0,target:0,last:0},yb={title:Sp.title,description:Sp.text,isAbout:!0},Fa=null;function Op(t){t&&(Mi=t,u7.textContent=t.title||"",d7.textContent=t.description||"",lb.textContent=t.isAbout?"":i7(t),lb.hidden=!!t.isAbout,p7.hidden=!t.isAbout,pf.innerHTML=t.isAbout?"":Ep.button(t),pf.hidden=!pf.innerHTML,pf.hidden||Ep.warm(t),Y0.classList.toggle("about-mode",!!t.isAbout),Y0.classList.add("open"),cr.target=t.isAbout?1:0,Fa=t,Gr.classList.remove("visible"),_n.setPaused(!0))}function Cp(){Y0.classList.remove("open"),cr.target=0,Mi=null,Fa=null,_n.setPaused(!1)}function bb(t){t&&(t.preventDefault(),t.stopPropagation()),Fa&&Op(Fa)}Gr.addEventListener("pointerup",bb,!0);Gr.addEventListener("touchend",bb,{passive:!1,capture:!0});Gr.addEventListener("click",t=>{t&&(t.preventDefault(),t.stopPropagation()),Mi===null&&Fa&&Op(Fa)},!0);v7.addEventListener("click",Cp);Y0.addEventListener("click",t=>{t.target===Y0&&Cp()});window.addEventListener("keydown",t=>{t.code==="Escape"&&Y0.classList.contains("open")&&Cp()});function fb(t,e){let o=e[0],r=e[1],n=e[2];return[t[0]*o+t[4]*r+t[8]*n+t[12],t[1]*o+t[5]*r+t[9]*n+t[13],t[2]*o+t[6]*r+t[10]*n+t[14],t[3]*o+t[7]*r+t[11]*n+t[15]]}function m7(){if(Mi)return;if(ya.active){Fa=null,Gr.classList.remove("visible");return}let t=Fc.interactables(),e=_n.forward[0],o=_n.forward[2],r=Math.hypot(e,o)||1,n=null,a=1/0;for(let s of t){let i=s.paintingPosition,c=0,h=0;s.side==="left"?c=1:s.side==="right"?c=-1:s.side==="corridor"?h=1:h=-1;let f=i[0]-_n.pos[0],d=i[2]-_n.pos[2],u=-(f*c+d*h),v=Math.abs(f*h-d*c),l=-(e*c+o*h)/r,p=s.side==="end"?11:8,m=(s.width||2)/2;l>.9&&u>.5&&u<p&&v<m+.8&&u<a&&(n=s,a=u)}if(!n){let s=_n.pos[0],i=_n.pos[2];e/r>.85&&s<13.6&&i>Dc.z0-.5&&i<Dc.z1+.5&&(n=Object.assign({},yb,{plaqueTitle:Sp.name}))}n?(Fa=n,Gr.textContent=n.isAbout?"ABOUT  \xB7  "+n.plaqueTitle:"READ  \xB7  "+n.title,Gr.classList.add("visible")):(Fa=null,Gr.classList.remove("visible"))}var gf=lc();function g7(){let t=Ss.state;if(!t||!t.glowPos)return null;let e=fb(_n.view(),[t.glowPos[0],t.glowPos[1]-.08,t.glowPos[2],1]),o=fb(_n.proj(),e);return o[3]<=.05?null:[(o[0]/o[3]*.5+.5)*window.innerWidth,(.5-o[1]/o[3]*.5)*window.innerHeight,o[3]]}var Tp=null;window.addEventListener("pointerdown",t=>{Tp={x:t.clientX,y:t.clientY,t:performance.now()}},!0);window.addEventListener("pointerup",t=>{let e=Tp;if(Tp=null,!e||Mi||ya.active||!t.target||!/^(CANVAS|BODY)$/.test(t.target.tagName)||Math.hypot(t.clientX-e.x,t.clientY-e.y)>12||performance.now()-e.t>600)return;let o=g7();if(!o)return;let r=!!document.pointerLockElement,n=r?window.innerWidth/2:t.clientX,a=r?window.innerHeight/2:t.clientY,s=Math.max(t.pointerType==="touch"?60:40,260/o[2]);Math.hypot(n-o[0],a-o[1])<s&&(t.preventDefault(),t.stopPropagation(),Op(yb))},!0);function x7(t){let e=Math.min(Math.max(t-cr.last,0),.1);cr.last=t;let o=e/1.6;if(cr.p=cr.target>cr.p?Math.min(1,cr.p+o):Math.max(0,cr.p-o),cr.p<=0)return;let r=cr.p<.5?2*cr.p*cr.p:1-Math.pow(-2*cr.p+2,2)/2,n=window.innerHeight>window.innerWidth,a=Ss.state,s=a&&a.hipsPos?a.hipsPos[0]:Dc.cx-1.2,i=a&&a.hipsPos?a.hipsPos[2]:Dc.zc,c=n?[s-2.3,2,i-.1]:[s-1.55,1.55,i+.3],h=n?[s+.1,.2,i-.1]:[s+.1,.7,i+.6],f=_n.pos,d=_n.forward,u=[f[0],f[1],f[2]],v=[f[0]+d[0],f[1]+d[1],f[2]+d[2]],l=(x,y)=>x.map((w,_)=>w+(y[_]-w)*r),p=[Dc.cx-6.2,1.7,Dc.zc],m=1-r,g=u.map((x,y)=>m*m*x+2*m*r*p[y]+r*r*c[y]);gf.lookAt(_n.view(),g,l(v,h),[0,1,0])}var wb=/[?&]studio\b/.test(location.search);if(wb){let t=document.createElement("style");t.textContent=".tour, #museum-mobile-controls, .painting-plaque { display: none !important; }",document.head.appendChild(t),window.addEventListener("pointerdown",e=>{Lp.takes(e)||c0().toggle()}),window.addEventListener("keydown",e=>{(e.key==="n"||e.key===" ")&&c0().toggle()})}var Lp=(()=>{let t={mode:"idle",fedTill:0,offset:0,holdAt:null,now:0,lastShot:-1,doneShot:-1,since:0,hintUntil:0},e=null,o=null,r=null,n=(c,h)=>{r&&(r.textContent=c,r.classList.add("on"),t.hintUntil=h?t.now+h:0)},a=()=>{let c=document.createElement("style");c.textContent=`
.koi-feed { position: fixed; left: 0; right: 0; bottom: 7vh; display: flex; flex-direction: column; align-items: center; gap: 0.6em; z-index: 20; pointer-events: none; font-family: 'Cormorant Garamond', Georgia, serif; }
.koi-feed-btn { pointer-events: none; opacity: 0; transform: translateY(6px); transition: opacity 1.2s ease, transform 1.2s ease; background: rgba(12, 10, 8, 0.28); border: 1px solid rgba(244, 236, 223, 0.38); border-radius: 999px; color: #f4ecdf; font: italic 400 clamp(17px, 2.3vw, 24px)/1 'Cormorant Garamond', Georgia, serif; letter-spacing: 0.06em; padding: 0.7em 1.5em 0.75em; cursor: pointer; text-shadow: 0 1px 8px rgba(0, 0, 0, 0.55); backdrop-filter: blur(3px); -webkit-backdrop-filter: blur(3px); }
.koi-feed-btn.on { opacity: 1; transform: none; pointer-events: auto; }
.koi-feed-btn:hover { background: rgba(12, 10, 8, 0.42); border-color: rgba(244, 236, 223, 0.7); }
.koi-feed-btn .orn { display: inline-block; margin: 0 0.55em; font-style: normal; opacity: 0.75; transform: translateY(-0.05em); }
.koi-feed-hint { opacity: 0; transition: opacity 1.4s ease; color: #f4ecdf; font: italic 400 clamp(16px, 2vw, 21px)/1.3 'Cormorant Garamond', Georgia, serif; letter-spacing: 0.05em; text-shadow: 0 1px 10px rgba(0, 0, 0, 0.7); text-align: center; padding: 0 1em; }
.koi-feed-hint.on { opacity: 0.95; }
.koi-aim, .koi-aim canvas { cursor: crosshair !important; }
`,document.head.appendChild(c),e=document.createElement("div"),e.className="koi-feed",e.innerHTML='<button type="button" class="koi-feed-btn"><span class="orn">\u2766</span>Cast a crumb upon the water<span class="orn">\u2766</span></button><div class="koi-feed-hint"></div>',document.body.appendChild(e),o=e.querySelector(".koi-feed-btn"),r=e.querySelector(".koi-feed-hint"),o.addEventListener("pointerdown",h=>{h.stopPropagation(),t.mode==="idle"&&(t.mode="aim",t.holdAt=t.now-t.offset,t.since=t.now,o.classList.remove("on"),document.body.classList.add("koi-aim"),n("Touch the water where it should fall"))})},s=(c,h)=>{let f=gf.multiply([],Hc,ks),d=gf.invert([],f);if(!d)return null;let u=c/window.innerWidth*2-1,v=1-h/window.innerHeight*2,l=[0,0,0,0];for(let p=0;p<4;p++)l[p]=d[p]*u+d[4+p]*v+d[8+p]*1+d[12+p];return[l[0]/l[3]-C0[0],l[1]/l[3]-C0[1],l[2]/l[3]-C0[2]]},i=()=>{t.holdAt!==null&&(t.offset=t.now-t.holdAt),t.holdAt=null,t.mode="idle",t.doneShot=t.lastShot,document.body.classList.remove("koi-aim"),r&&r.classList.remove("on")};return{time(c){return t.now=c,t.holdAt!==null?t.holdAt:c-t.offset},update(c){e||a(),c.shot!==t.lastShot&&(t.lastShot=c.shot);let h=Qs();t.mode==="idle"?o.classList.toggle("on",!!c.pond&&t.doneShot!==c.shot):t.mode==="aim"?t.now-t.since>40&&i():t.mode==="watch"&&(h.feeding()&&(t.fedTill=t.now),(t.now-t.fedTill>5&&t.now-t.since>8||t.now-t.since>60)&&i()),t.hintUntil&&t.now>t.hintUntil&&(r.classList.remove("on"),t.hintUntil=0)},takes(c){if(t.mode==="idle")return!1;let h=Qs(),f=s(c.clientX,c.clientY),d=f&&h.poolHit(C0,f);return d?(h.feedAt(d[0],d[1]),t.fedTill=t.now,t.mode==="aim"&&n("and they come, like embers through the dark",5),t.mode="watch",t.since=t.now,document.body.classList.remove("koi-aim"),!0):(t.mode==="aim"&&n("Upon the water, there\u2026"),!0)}}})(),wi={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},_i=null,mf=!1,b1=!1;function y7(t,e,o,r){let n=[o[0]-e[0],o[1]-e[1],o[2]-e[2]],a=Math.hypot(n[0],n[1],n[2])||1,s=[-n[2]/a,0,n[0]/a],i=Math.hypot(s[0],s[2])||1;s=[s[0]/i,0,s[2]/i];let c=Math.cos(r),h=Math.sin(r);return gf.lookAt(t,e,o,[s[0]*h,c,s[2]*h])}function b7(t){let e=window.innerWidth/window.innerHeight,o=Gc.shot,r=ya.active?ya.update(t):null,n=r?null:ya.handover(t),a=null,s=wi;if(r){a=r.camera,s=r.look,_i=r.leaf;let i=window.__walkOverride&&/tourdebug/.test(location.search)?window.__walkOverride:r.walker||null;Ss.setWalk(i),mf=!!i,Ms.setOpen(r.door||0)}else _i=ya.restingLeaf(),Ss.setWalk(null),mf=!1,Ms.setOpen(ya.restingDoor());if(n){let i=_n.pos,c=_n.forward,h=ya.cam([i[0],i[1],i[2]],[i[0]+c[0],i[1]+c[1],i[2]+c[2]],vb()*180/Math.PI,0);a=ya.mix(n.from,h,n.k),s={};for(let f in wi)s[f]=Array.isArray(wi[f])?wi[f]:n.fromLook[f]+(wi[f]-n.fromLook[f])*n.k}if(a&&r&&(a=Ap.apply(a,t)),wb&&!(/tourdebug/.test(location.search)&&window.__camOverride)){let i=Qs().previewCam(Lp.time(t));Lp.update(i),a=i,s=Object.assign({},wi,{fade:i.fade,focus:8})}if(a)y7(ks,a.eye,a.target,a.roll||0),gf.perspective(Hc,a.fov*Math.PI/180,e,.1,700),C0[0]=a.eye[0],C0[1]=a.eye[1],C0[2]=a.eye[2];else{let i=_n.view(),c=_n.proj();for(let u=0;u<16;u++)ks[u]=i[u],Hc[u]=c[u];let h=i[12],f=i[13],d=i[14];C0[0]=-(i[0]*h+i[1]*f+i[2]*d),C0[1]=-(i[4]*h+i[5]*f+i[6]*d),C0[2]=-(i[8]*h+i[9]*f+i[10]*d)}for(let i in wi)o[i]=s[i];r&&Ap.pull(o,t)}var Mr={wake:[[0,-50,0,0],[0,-50,0,0],[0,-50,0,0],[0,-50,0,0]],wakeDir:[0,0,1],gust:[0,0],focus:6,aperture:0},bp=[9,9,9,9],hb=[0,0,0,0],uf=0,wp=0,qc=null,ub=0,db=0,df=0;function w7(t){let e=Math.min(.1,Math.max(0,t-ub));ub=t,Mr.focus=Gc.shot.focus,Mr.aperture=sa.post>=2?Gc.shot.aperture:0;for(let s=0;s<4;s++)bp[s]+=e,Mr.wake[s][3]=hb[s]*Math.exp(-bp[s]/1.1);let o=_i&&_i.visible?_i.model:null;if(o&&e>0){let s=[o[12],o[13],o[14]];if(qc){let i=[s[0]-qc[0],s[1]-qc[1],s[2]-qc[2]],c=Math.hypot(i[0],i[1],i[2]),h=c/e;if(c<1.5&&h>.12){let f=Math.min(1,e*8);for(let u=0;u<3;u++)Mr.wakeDir[u]+=(i[u]/c-Mr.wakeDir[u])*f;let d=Math.hypot(Mr.wakeDir[0],Mr.wakeDir[1],Mr.wakeDir[2])||1;for(let u=0;u<3;u++)Mr.wakeDir[u]/=d;if(wp+=e,wp>.14){wp=0;let u=Mr.wake[uf];u[0]=s[0],u[1]=s[1],u[2]=s[2],hb[uf]=Math.min(1,(h-.12)/1.6)*.5,bp[uf]=0,uf=(uf+1)%4}}}qc=s}else o||(qc=null);let r=Ms.openNow?Ms.openNow():0,n=e>0?(r-db)/e:0;db=r;let a=Math.max(-1,Math.min(1,n*1.2));df+=(a-df)*Math.min(1,e*(Math.abs(a)>Math.abs(df)?6:.7)),Mr.gust[0]+=df*5.5*e,Mr.gust[1]=Math.abs(df)}var _p=0,w1=!1;Mn.frame(function({time:t}){if(document.body.classList.contains("visiting")){_p=0;return}vf.begin(),zp.tick(t);let e=ya.active&&Ap.resting&&zp.settled&&(sa.isPhone||sa.scale<1||sa.level>0);if(e){if(w1=!w1,w1){vf.end();return}}else w1=!1;let o=t-_p;_p=t,sa.frame(e?o/2:o),_1=sa.reflection,_n.tick({time:t}),x7(t),Fc.update(_n.pos,_n.fmouse[1],Rp()),m7(),b7(t),n0.update(ks,Hc,C0),gb.listen(C0),b1=!mf&&n0.room("stair")&&(!n0.room("court")||C0[0]<.5||C0[2]>30),Ss.setPiano(b1),w7(t),Gc.capture(arguments[0],{view:ks,proj:Hc,eye:C0},()=>{f7(()=>{_1&&n0.floor&&h7(()=>{n0.room("studio",!0)&&cb({reflected:!0}),n0.zone!=="studio"&&(Mp(),Zy({reflected:!0}),ab(),n0.room("stair",!0)&&(ib({reflected:!0}),sb({reflected:!0,view:ks})),n0.room("court",!0)&&nb(),(b1||n0.room("court",!0)||mf)&&Ss(),kp(Fc.batch()),n0.room("street",!0)&&Jy(),n0.room("garden",!0)&&eb(),n0.room("florence",!0)&&ob(),rb(_i),Ms(),tb(),Ms.glass())}),n0.room("studio")&&cb(),n0.zone!=="studio"&&(Mp(),Zy(),ab(),n0.room("stair")&&(ib(),sb({view:ks})),n0.room("court")&&nb(),(b1||n0.room("court")||mf)&&Ss(),kp(Fc.batch()),n0.room("street")&&Jy(),n0.room("garden")&&(eb(),l7()),n0.room("florence")&&ob(),rb(_i),Ms(),c7(Mr),tb(),Ms.glass())})}),Gc.present(),vf.end()});})();
