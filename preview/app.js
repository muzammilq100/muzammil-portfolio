"use strict";(()=>{var ke=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var bm=ke((sA,ym)=>{"use strict";var Ci=document.getElementById("loader"),Oi=Ci&&Ci.querySelector(".loader-name"),tl=0,Df=0,Gf=!1,T4=performance.now(),Pi=.06,Ri=0,lu=0,pm=!1,L4=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;function N4(e){if(!Oi)return;let t=Oi.offsetWidth||1,n=(t*(1.14-1.28*e)-t).toFixed(1)+"px 0";Oi.style.webkitMaskPosition=n,Oi.style.maskPosition=n}function gm(e){let t=Math.min(.05,lu?(e-lu)/1e3:.016);lu=e;let o=Gf?.75:.22+(Pi-Ri)*1.2;if(Ri=Math.min(Pi,Ri+Math.max(0,o)*t),L4&&(Ri=Pi),N4(Ri),Gf&&Ri>=.999){pm||(pm=!0,setTimeout(xm,650));return}requestAnimationFrame(gm)}Oi&&requestAnimationFrame(gm);function vm(){let e=tl?Df/Math.max(tl,24):0;Pi=Math.max(Pi,Math.min(.9,.06+e*.84))}function xm(){Ci&&(Ci.classList.add("done"),setTimeout(()=>Ci.remove(),1400))}function fu(){Gf||(Gf=!0,window.__galleryReady=!0,Ci&&(Pi=1,Oi||xm()))}var mm=null;function R4(){clearTimeout(mm),Df>=tl&&performance.now()-T4>600&&(mm=setTimeout(()=>{Df>=tl&&fu()},450))}setTimeout(fu,2e4);var O4=e=>/(^|\/)(res|images)\//.test(e),qf=window.fetch.bind(window);async function C4(e,t){let o=await qf(e+".gz",t);if(!o.ok)throw new Error("no .gz");let n=new Uint8Array(await o.arrayBuffer());if(!(n[0]===31&&n[1]===139))return new Response(n);let r=new Blob([n]).stream().pipeThrough(new DecompressionStream("gzip")),a=await new Response(r).arrayBuffer();return new Response(a,{status:200,headers:{"Content-Type":"application/octet-stream"}})}window.fetch=function(e,t){let o=typeof e=="string"?e:e&&e.url||"";if(!O4(o))return qf(e,t);tl++,vm();let n=a=>(Df++,vm(),R4(),a),r;return/\.bin$/.test(o)&&typeof DecompressionStream!="undefined"?r=C4(o,t).catch(()=>qf(e,t)):r=qf(e,t),r.then(n,a=>{throw n(),a})};ym.exports={finish:fu}});var Ma=ke((iA,km)=>{"use strict";var wm=typeof navigator!="undefined"&&navigator.userAgent||"",P4=typeof window!="undefined"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches&&!window.matchMedia("(any-pointer: fine)").matches,x0=/Android|iPhone|iPad|iPod|Mobile|Silk|Kindle|webOS|BlackBerry|Opera Mini|IEMobile/i.test(wm)||/Macintosh/.test(wm)&&typeof navigator!="undefined"&&navigator.maxTouchPoints>1||P4,_m=typeof window!="undefined"&&window.devicePixelRatio||1,zo={isPhone:x0,pixelRatio:x0?Math.min(_m,1.5):Math.min(_m,2),reflection:!x0,gardenDetail:x0?0:1,leafShare:x0?.65:1,motion:!x0,post:x0?1:2,level:x0?1:0};zo.scale=1;var I4=x0?.55:.6,ol=0,Hf=0,nl=0,rl=0,Ii=1,al=0,Uf=48,$i=null,hu=0;function $4(e){$i={fps:e,scale:zo.scale},zo.scale>.86?zo.scale=.85:zo.reflection?zo.stepDown():zo.scale>.71?zo.scale=.7:zo.stepDown()||(zo.scale=Math.max(I4,zo.scale-.1))}var Mm=!0;try{/[?&]noadapt\b/.test(location.search)&&(Mm=!1)}catch(e){}zo.frame=e=>{if(!Mm)return;if(!(e>0)||e>1){ol=0,Hf=0;return}if(ol+=e,Hf++,ol<.75)return;let t=Hf/ol;if(ol=0,Hf=0,al>0&&(al-=.75,al<=0&&(Ii=1)),$i){if(t<$i.fps*1.08&&$i.scale>zo.scale){if(++hu>=2){zo.scale=1,Ii=1,al=0,Uf=Math.min(Uf,t*.85),hu=0,nl=0,$i=null;return}}else hu=0;$i=null}if(t<Uf){if(rl=0,++nl>=2){if(nl=0,zo.scale>.61&&zo.climbed){Ii=zo.scale-.05,al=40,zo.scale=Ii,zo.climbed=!1;return}$4(t)}}else t>Math.max(Uf*1.15,55)?(nl=0,++rl>=6&&zo.scale<Ii-.001?(zo.scale=Math.min(Ii,zo.scale+.05),zo.climbed=!0,rl=0):rl>=6&&(zo.climbed=!1)):(nl=0,rl=0)};zo.stepDown=()=>{if(zo.reflection)zo.reflection=!1;else if(zo.gardenDetail>0||zo.motion)zo.gardenDetail=0,zo.motion=!1,zo.leafShare=Math.min(zo.leafShare,.65);else if(zo.post>0)zo.post--;else return!1;return zo.level++,!0};km.exports=zo});var uu=ke((cA,Sm)=>{"use strict";Sm.exports=[{file:"IMG_20250717_102753.jpg",slug:"love-me-like-i-am-already-dead",title:"Love me like I am Already Dead",medium:"Oil on canvas",size:[61,91],description:`We live in a world soaked in hypocrisy. We\u2019re told not to \u201Cspeak ill of the dead,\u201D yet we spend lifetimes speaking ill of the living. We judge, ignore, neglect\u2014and then pretend to mourn with grace when it\u2019s too late. People say beautiful things at funerals, but only after burying a lifetime of cruelty or silence.

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
but the loneliness of having no one willing to admit it happened.`}]});var Bf=ke((lA,zm)=>{"use strict";var Cr={instagram:"muzammil_qureshi",email:"muzammilqureshi100@gmail.com"},Em='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/></svg>',Am='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M3.5 7l8.5 6 8.5-6"/></svg>';Cr.instagramUrl="https://instagram.com/"+Cr.instagram;Cr.mailUrl="mailto:"+Cr.email+"?subject="+encodeURIComponent("Your paintings");Cr.icons=e=>`
	<a class="${e}" href="${Cr.instagramUrl}" target="_blank" rel="noopener" aria-label="Instagram: @${Cr.instagram}" title="Instagram">${Em}</a>
	<a class="${e}" href="${Cr.mailUrl}" aria-label="Email ${Cr.email}" title="Email">${Am}</a>`;Cr.line=e=>`
	<span class="${e}">
		<a href="${Cr.instagramUrl}" target="_blank" rel="noopener">${Em}<span>@${Cr.instagram}</span></a>
		<a href="${Cr.mailUrl}">${Am}<span>${Cr.email}</span></a>
	</span>`;zm.exports=Cr});var sl=ke((fA,Tm)=>{"use strict";Tm.exports=e=>{if(!e)return"";let t=[];return e.medium&&t.push(e.medium),e.size&&e.size.length===2&&t.push(e.size[0]+" \xD7 "+e.size[1]+" cm"),t.join("  \xB7  ")}});var du=ke((hA,Rm)=>{"use strict";var F4=uu(),q4=Bf(),Lm=sl(),D4=Ma(),D0=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),G4=`
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
`,Pr=null;function H4(e){if(Pr){Pr.hidden=!1,requestAnimationFrame(()=>Pr.classList.add("on"));return}let t=document.createElement("style");t.textContent=G4,document.head.appendChild(t);let o=!D4.isPhone;Pr=document.createElement("div"),Pr.className="plist",Pr.setAttribute("role","region"),Pr.setAttribute("aria-label","All paintings"),Pr.innerHTML=`
		${e?"":'<button type="button" class="plist-close">Back to the gallery</button>'}
		<header class="plist-head">
			<h1>Muzammil</h1>
			<p class="plist-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</p>
			${q4.line("plist-contact")}
		</header>
		${e?'<p class="plist-note">This device could not open the 3D gallery, so here are the paintings on their own.</p>':""}
		<main class="plist-grid">
			${F4.map(r=>`
			<article class="plist-item" id="${D0(r.slug)}">
				<img loading="lazy" decoding="async" alt="${D0(r.title)}, ${D0(Lm(r))}"
					src="images/web/${D0(r.slug)}${o?"":"-1024"}.webp"
					onerror="this.onerror=null;this.src='images/${D0(r.file)}'">
				<p class="plist-meta">${D0(Lm(r))}</p>
				<h2>${D0(r.title)}</h2>
				<details><summary>Read its story</summary>
					${String(r.description).split(/\n\s*\n/).map(a=>`<p>${D0(a.trim())}</p>`).join("")}
				</details>
			</article>`).join("")}
		</main>`,["mousedown","pointerdown","click","wheel","touchstart","touchmove","keydown"].forEach(r=>Pr.addEventListener(r,a=>a.stopPropagation(),{passive:!0}));let n=Pr.querySelector(".plist-close");n&&n.addEventListener("click",Nm),document.body.appendChild(Pr),requestAnimationFrame(()=>Pr.classList.add("on"))}function Nm(){Pr&&(Pr.classList.remove("on"),setTimeout(()=>{Pr.hidden=!0},500),location.hash==="#list"&&history.replaceState(null,"",location.pathname+location.search))}Rm.exports={show:H4,hide:Nm}});var Om=ke((pu,vu)=>{(function(e,t){typeof pu=="object"&&typeof vu!="undefined"?vu.exports=t():typeof define=="function"&&define.amd?define(t):e.Stats=t()})(pu,function(){var e=function(){function t(d){return r.appendChild(d.dom),d}function o(d){for(var h=0;h<r.children.length;h++)r.children[h].style.display=h===d?"block":"none";n=d}var n=0,r=document.createElement("div");r.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",r.addEventListener("click",function(d){d.preventDefault(),o(++n%r.children.length)},!1);var a=(performance||Date).now(),s=a,i=0,c=t(new e.Panel("FPS","#0ff","#002")),f=t(new e.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var l=t(new e.Panel("MB","#f08","#201"));return o(0),{REVISION:16,dom:r,addPanel:t,showPanel:o,begin:function(){a=(performance||Date).now()},end:function(){i++;var d=(performance||Date).now();if(f.update(d-a,200),d>s+1e3&&(c.update(1e3*i/(d-s),100),s=d,i=0,l)){var h=performance.memory;l.update(h.usedJSHeapSize/1048576,h.jsHeapSizeLimit/1048576)}return d},update:function(){a=this.end()},domElement:r,setMode:o}};return e.Panel=function(t,o,n){var r=1/0,a=0,s=Math.round,i=s(window.devicePixelRatio||1),c=80*i,f=48*i,l=3*i,d=2*i,h=3*i,v=15*i,u=74*i,p=30*i,m=document.createElement("canvas");m.width=c,m.height=f,m.style.cssText="width:80px;height:48px";var g=m.getContext("2d");return g.font="bold "+9*i+"px Helvetica,Arial,sans-serif",g.textBaseline="top",g.fillStyle=n,g.fillRect(0,0,c,f),g.fillStyle=o,g.fillText(t,l,d),g.fillRect(h,v,u,p),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(h,v,u,p),{dom:m,update:function(y,b){r=Math.min(r,y),a=Math.max(a,y),g.fillStyle=n,g.globalAlpha=1,g.fillRect(0,0,c,v),g.fillStyle=o,g.fillText(s(y)+" "+t+" ("+s(r)+"-"+s(a)+")",l,d),g.drawImage(m,h+i,v,u-i,p,h,v,u-i,p),g.fillRect(h+u-i,v,i,p),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(h+u-i,v,i,s((1-y/b)*p))}}},e})});var Cm=ke((mu,gu)=>{(function(e,t){typeof mu=="object"&&typeof gu!="undefined"?gu.exports=t():typeof define=="function"&&define.amd?define(t):e.createREGL=t()})(mu,function(){"use strict";var e=function(x){return x instanceof Uint8Array||x instanceof Uint16Array||x instanceof Uint32Array||x instanceof Int8Array||x instanceof Int16Array||x instanceof Int32Array||x instanceof Float32Array||x instanceof Float64Array||x instanceof Uint8ClampedArray},t=function(x,E){for(var O=Object.keys(E),oe=0;oe<O.length;++oe)x[O[oe]]=E[O[oe]];return x},o=`
`;function n(x){return typeof atob!="undefined"?atob(x):"base64:"+x}function r(x){var E=new Error("(regl) "+x);throw console.error(E),E}function a(x,E){x||r(E)}function s(x){return x?": "+x:""}function i(x,E,O){x in E||r("unknown parameter ("+x+")"+s(O)+". possible values: "+Object.keys(E).join())}function c(x,E){e(x)||r("invalid parameter type"+s(E)+". must be a typed array")}function f(x,E){switch(E){case"number":return typeof x=="number";case"object":return typeof x=="object";case"string":return typeof x=="string";case"boolean":return typeof x=="boolean";case"function":return typeof x=="function";case"undefined":return typeof x=="undefined";case"symbol":return typeof x=="symbol"}}function l(x,E,O){f(x,E)||r("invalid parameter type"+s(O)+". expected "+E+", got "+typeof x)}function d(x,E){x>=0&&(x|0)===x||r("invalid parameter type, ("+x+")"+s(E)+". must be a nonnegative integer")}function h(x,E,O){E.indexOf(x)<0&&r("invalid value"+s(O)+". must be one of: "+E)}var v=["gl","canvas","container","attributes","pixelRatio","extensions","optionalExtensions","profile","onDone"];function u(x){Object.keys(x).forEach(function(E){v.indexOf(E)<0&&r('invalid regl constructor argument "'+E+'". must be one of '+v)})}function p(x,E){for(x=x+"";x.length<E;)x=" "+x;return x}function m(){this.name="unknown",this.lines=[],this.index={},this.hasErrors=!1}function g(x,E){this.number=x,this.line=E,this.errors=[]}function y(x,E,O){this.file=x,this.line=E,this.message=O}function b(){var x=new Error,E=(x.stack||x).toString(),O=/compileProcedure.*\n\s*at.*\((.*)\)/.exec(E);if(O)return O[1];var oe=/compileProcedure.*\n\s*at\s+(.*)(\n|$)/.exec(E);return oe?oe[1]:"unknown"}function w(){var x=new Error,E=(x.stack||x).toString(),O=/at REGLCommand.*\n\s+at.*\((.*)\)/.exec(E);if(O)return O[1];var oe=/at REGLCommand.*\n\s+at\s+(.*)\n/.exec(E);return oe?oe[1]:"unknown"}function M(x,E){var O=x.split(`
`),oe=1,ve=0,ee={unknown:new m,0:new m};ee.unknown.name=ee[0].name=E||b(),ee.unknown.lines.push(new g(0,""));for(var re=0;re<O.length;++re){var Le=O[re],Ce=/^\s*#\s*(\w+)\s+(.+)\s*$/.exec(Le);if(Ce)switch(Ce[1]){case"line":var Fe=/(\d+)(\s+\d+)?/.exec(Ce[2]);Fe&&(oe=Fe[1]|0,Fe[2]&&(ve=Fe[2]|0,ve in ee||(ee[ve]=new m)));break;case"define":var Pe=/SHADER_NAME(_B64)?\s+(.*)$/.exec(Ce[2]);Pe&&(ee[ve].name=Pe[1]?n(Pe[2]):Pe[2]);break}ee[ve].lines.push(new g(oe++,Le))}return Object.keys(ee).forEach(function(He){var Ye=ee[He];Ye.lines.forEach(function(Ne){Ye.index[Ne.number]=Ne})}),ee}function k(x){var E=[];return x.split(`
`).forEach(function(O){if(!(O.length<5)){var oe=/^ERROR:\s+(\d+):(\d+):\s*(.*)$/.exec(O);oe?E.push(new y(oe[1]|0,oe[2]|0,oe[3].trim())):O.length>0&&E.push(new y("unknown",0,O))}}),E}function z(x,E){E.forEach(function(O){var oe=x[O.file];if(oe){var ve=oe.index[O.line];if(ve){ve.errors.push(O),oe.hasErrors=!0;return}}x.unknown.hasErrors=!0,x.unknown.lines[0].errors.push(O)})}function P(x,E,O,oe,ve){if(!x.getShaderParameter(E,x.COMPILE_STATUS)){var ee=x.getShaderInfoLog(E),re=oe===x.FRAGMENT_SHADER?"fragment":"vertex";ue(O,"string",re+" shader source must be a string",ve);var Le=M(O,ve),Ce=k(ee);z(Le,Ce),Object.keys(Le).forEach(function(Fe){var Pe=Le[Fe];if(!Pe.hasErrors)return;var He=[""],Ye=[""];function Ne(Ue,K){He.push(Ue),Ye.push(K||"")}Ne("file number "+Fe+": "+Pe.name+`
`,"color:red;text-decoration:underline;font-weight:bold"),Pe.lines.forEach(function(Ue){if(Ue.errors.length>0){Ne(p(Ue.number,4)+"|  ","background-color:yellow; font-weight:bold"),Ne(Ue.line+o,"color:red; background-color:yellow; font-weight:bold");var K=0;Ue.errors.forEach(function(ae){var $e=ae.message,et=/^\s*'(.*)'\s*:\s*(.*)$/.exec($e);if(et){var we=et[1];switch($e=et[2],we){case"assign":we="=";break}K=Math.max(Ue.line.indexOf(we,K),0)}else K=0;Ne(p("| ",6)),Ne(p("^^^",K+3)+o,"font-weight:bold"),Ne(p("| ",6)),Ne($e+o,"font-weight:bold")}),Ne(p("| ",6)+o)}else Ne(p(Ue.number,4)+"|  "),Ne(Ue.line+o,"color:red")}),typeof document!="undefined"&&!window.chrome?(Ye[0]=He.join("%c"),console.log.apply(console,Ye)):console.log(He.join(""))}),a.raise("Error compiling "+re+" shader, "+Le[0].name)}}function R(x,E,O,oe,ve){if(!x.getProgramParameter(E,x.LINK_STATUS)){var ee=x.getProgramInfoLog(E),re=M(O,ve),Le=M(oe,ve),Ce='Error linking program with vertex shader, "'+Le[0].name+'", and fragment shader "'+re[0].name+'"';typeof document!="undefined"?console.log("%c"+Ce+o+"%c"+ee,"color:red;text-decoration:underline;font-weight:bold","color:red"):console.log(Ce+o+ee),a.raise(Ce)}}function U(x){x._commandRef=b()}function D(x,E,O,oe){U(x);function ve(Ce){return Ce?oe.id(Ce):0}x._fragId=ve(x.static.frag),x._vertId=ve(x.static.vert);function ee(Ce,Fe){Object.keys(Fe).forEach(function(Pe){Ce[oe.id(Pe)]=!0})}var re=x._uniformSet={};ee(re,E.static),ee(re,E.dynamic);var Le=x._attributeSet={};ee(Le,O.static),ee(Le,O.dynamic),x._hasCount="count"in x.static||"count"in x.dynamic||"elements"in x.static||"elements"in x.dynamic}function Y(x,E){var O=w();r(x+" in command "+(E||b())+(O==="unknown"?"":" called from "+O))}function I(x,E,O){x||Y(E,O||b())}function j(x,E,O,oe){x in E||Y("unknown parameter ("+x+")"+s(O)+". possible values: "+Object.keys(E).join(),oe||b())}function ue(x,E,O,oe){f(x,E)||Y("invalid parameter type"+s(O)+". expected "+E+", got "+typeof x,oe||b())}function Ge(x){x()}function Te(x,E,O){x.texture?h(x.texture._texture.internalformat,E,"unsupported texture format for attachment"):h(x.renderbuffer._renderbuffer.format,O,"unsupported renderbuffer format for attachment")}var ye=33071,le=9728,Ve=9984,zt=9985,St=9986,Vt=9987,Tt=5120,no=5121,bo=5122,Yo=5123,tt=5124,Et=5125,$t=5126,ro=32819,wo=32820,ie=33635,ce=34042,G=36193,Re={};Re[Tt]=Re[no]=1,Re[bo]=Re[Yo]=Re[G]=Re[ie]=Re[ro]=Re[wo]=2,Re[tt]=Re[Et]=Re[$t]=Re[ce]=4;function Qe(x,E){return x===wo||x===ro||x===ie?2:x===ce?4:Re[x]*E}function Se(x){return!(x&x-1)&&!!x}function he(x,E,O){var oe,ve=E.width,ee=E.height,re=E.channels;a(ve>0&&ve<=O.maxTextureSize&&ee>0&&ee<=O.maxTextureSize,"invalid texture shape"),(x.wrapS!==ye||x.wrapT!==ye)&&a(Se(ve)&&Se(ee),"incompatible wrap mode for texture, both width and height must be power of 2"),E.mipmask===1?ve!==1&&ee!==1&&a(x.minFilter!==Ve&&x.minFilter!==St&&x.minFilter!==zt&&x.minFilter!==Vt,"min filter requires mipmap"):(a(Se(ve)&&Se(ee),"texture must be a square power of 2 to support mipmapping"),a(E.mipmask===(ve<<1)-1,"missing or incomplete mipmap data")),E.type===$t&&(O.extensions.indexOf("oes_texture_float_linear")<0&&a(x.minFilter===le&&x.magFilter===le,"filter not supported, must enable oes_texture_float_linear"),a(!x.genMipmaps,"mipmap generation not supported with float textures"));var Le=E.images;for(oe=0;oe<16;++oe)if(Le[oe]){var Ce=ve>>oe,Fe=ee>>oe;a(E.mipmask&1<<oe,"missing mipmap data");var Pe=Le[oe];if(a(Pe.width===Ce&&Pe.height===Fe,"invalid shape for mip images"),a(Pe.format===E.format&&Pe.internalformat===E.internalformat&&Pe.type===E.type,"incompatible type for mip image"),!Pe.compressed)if(Pe.data){var He=Math.ceil(Qe(Pe.type,re)*Ce/Pe.unpackAlignment)*Pe.unpackAlignment;a(Pe.data.byteLength===He*Fe,"invalid data for image, buffer size is inconsistent with image format")}else Pe.element||Pe.copy}else x.genMipmaps||a((E.mipmask&1<<oe)===0,"extra mipmap data");E.compressed&&a(!x.genMipmaps,"mipmap generation for compressed images not supported")}function kt(x,E,O,oe){var ve=x.width,ee=x.height,re=x.channels;a(ve>0&&ve<=oe.maxTextureSize&&ee>0&&ee<=oe.maxTextureSize,"invalid texture shape"),a(ve===ee,"cube map must be square"),a(E.wrapS===ye&&E.wrapT===ye,"wrap mode not supported by cube map");for(var Le=0;Le<O.length;++Le){var Ce=O[Le];a(Ce.width===ve&&Ce.height===ee,"inconsistent cube map face shape"),E.genMipmaps&&(a(!Ce.compressed,"can not generate mipmap for compressed textures"),a(Ce.mipmask===1,"can not specify mipmaps and generate mipmaps"));for(var Fe=Ce.images,Pe=0;Pe<16;++Pe){var He=Fe[Pe];if(He){var Ye=ve>>Pe,Ne=ee>>Pe;a(Ce.mipmask&1<<Pe,"missing mipmap data"),a(He.width===Ye&&He.height===Ne,"invalid shape for mip images"),a(He.format===x.format&&He.internalformat===x.internalformat&&He.type===x.type,"incompatible type for mip image"),He.compressed||(He.data?a(He.data.byteLength===Ye*Ne*Math.max(Qe(He.type,re),He.unpackAlignment),"invalid data for image, buffer size is inconsistent with image format"):He.element||He.copy)}}}}var _=t(a,{optional:Ge,raise:r,commandRaise:Y,command:I,parameter:i,commandParameter:j,constructor:u,type:l,commandType:ue,isTypedArray:c,nni:d,oneOf:h,shaderError:P,linkError:R,callSite:w,saveCommandRef:U,saveDrawInfo:D,framebufferFormat:Te,guessCommand:b,texture2D:he,textureCube:kt}),wt=0,xt=0,Dt=5,Yt=6;function So(x,E){this.id=wt++,this.type=x,this.data=E}function Bo(x){return x.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}function Lo(x){if(x.length===0)return[];var E=x.charAt(0),O=x.charAt(x.length-1);if(x.length>1&&E===O&&(E==='"'||E==="'"))return['"'+Bo(x.substr(1,x.length-2))+'"'];var oe=/\[(false|true|null|\d+|'[^']*'|"[^"]*")\]/.exec(x);if(oe)return Lo(x.substr(0,oe.index)).concat(Lo(oe[1])).concat(Lo(x.substr(oe.index+oe[0].length)));var ve=x.split(".");if(ve.length===1)return['"'+Bo(x)+'"'];for(var ee=[],re=0;re<ve.length;++re)ee=ee.concat(Lo(ve[re]));return ee}function fo(x){return"["+Lo(x).join("][")+"]"}function jo(x,E){return new So(x,fo(E+""))}function an(x){return typeof x=="function"&&!x._reglType||x instanceof So}function V(x,E){if(typeof x=="function")return new So(xt,x);if(typeof x=="number"||typeof x=="boolean")return new So(Dt,x);if(Array.isArray(x))return new So(Yt,x.map((O,oe)=>V(O,E+"["+oe+"]")));if(x instanceof So)return x;_(!1,"invalid option type in uniform "+E)}var Ee={DynamicVariable:So,define:jo,isDynamic:an,unbox:V,accessor:fo},ze={next:typeof requestAnimationFrame=="function"?function(x){return requestAnimationFrame(x)}:function(x){return setTimeout(x,16)},cancel:typeof cancelAnimationFrame=="function"?function(x){return cancelAnimationFrame(x)}:clearTimeout},de=typeof performance!="undefined"&&performance.now?function(){return performance.now()}:function(){return+new Date};function qe(){var x={"":0},E=[""];return{id:function(O){var oe=x[O];return oe||(oe=x[O]=E.length,E.push(O),oe)},str:function(O){return E[O]}}}function dt(x,E,O){var oe=document.createElement("canvas");t(oe.style,{border:0,margin:0,padding:0,top:0,left:0}),x.appendChild(oe),x===document.body&&(oe.style.position="absolute",t(x.style,{margin:0,padding:0}));function ve(){var Le=window.innerWidth,Ce=window.innerHeight;if(x!==document.body){var Fe=x.getBoundingClientRect();Le=Fe.right-Fe.left,Ce=Fe.bottom-Fe.top}oe.width=O*Le,oe.height=O*Ce,t(oe.style,{width:Le+"px",height:Ce+"px"})}var ee;x!==document.body&&typeof ResizeObserver=="function"?(ee=new ResizeObserver(function(){setTimeout(ve)}),ee.observe(x)):window.addEventListener("resize",ve,!1);function re(){ee?ee.disconnect():window.removeEventListener("resize",ve),x.removeChild(oe)}return ve(),{canvas:oe,onDestroy:re}}function pt(x,E){function O(oe){try{return x.getContext(oe,E)}catch(ve){return null}}return O("webgl")||O("experimental-webgl")||O("webgl-experimental")}function _t(x){return typeof x.nodeName=="string"&&typeof x.appendChild=="function"&&typeof x.getBoundingClientRect=="function"}function Ht(x){return typeof x.drawArrays=="function"||typeof x.drawElements=="function"}function Lt(x){return typeof x=="string"?x.split():(_(Array.isArray(x),"invalid extension array"),x)}function Jt(x){return typeof x=="string"?(_(typeof document!="undefined","not supported outside of DOM"),document.querySelector(x)):x}function Ct(x){var E=x||{},O,oe,ve,ee,re={},Le=[],Ce=[],Fe=typeof window=="undefined"?1:window.devicePixelRatio,Pe=!1,He=function(Ue){Ue&&_.raise(Ue)},Ye=function(){};if(typeof E=="string"?(_(typeof document!="undefined","selector queries only supported in DOM enviroments"),O=document.querySelector(E),_(O,"invalid query string for element")):typeof E=="object"?_t(E)?O=E:Ht(E)?(ee=E,ve=ee.canvas):(_.constructor(E),"gl"in E?ee=E.gl:"canvas"in E?ve=Jt(E.canvas):"container"in E&&(oe=Jt(E.container)),"attributes"in E&&(re=E.attributes,_.type(re,"object","invalid context attributes")),"extensions"in E&&(Le=Lt(E.extensions)),"optionalExtensions"in E&&(Ce=Lt(E.optionalExtensions)),"onDone"in E&&(_.type(E.onDone,"function","invalid or missing onDone callback"),He=E.onDone),"profile"in E&&(Pe=!!E.profile),"pixelRatio"in E&&(Fe=+E.pixelRatio,_(Fe>0,"invalid pixel ratio"))):_.raise("invalid arguments to regl"),O&&(O.nodeName.toLowerCase()==="canvas"?ve=O:oe=O),!ee){if(!ve){_(typeof document!="undefined","must manually specify webgl context outside of DOM environments");var Ne=dt(oe||document.body,He,Fe);if(!Ne)return null;ve=Ne.canvas,Ye=Ne.onDestroy}re.premultipliedAlpha===void 0&&(re.premultipliedAlpha=!0),ee=pt(ve,re)}return ee?{gl:ee,canvas:ve,container:oe,extensions:Le,optionalExtensions:Ce,pixelRatio:Fe,profile:Pe,onDone:He,onDestroy:Ye}:(Ye(),He("webgl not supported, try upgrading your browser or graphics drivers http://get.webgl.org"),null)}function Pt(x,E){var O={};function oe(re){_.type(re,"string","extension name must be string");var Le=re.toLowerCase(),Ce;try{Ce=O[Le]=x.getExtension(Le)}catch(Fe){}return!!Ce}for(var ve=0;ve<E.extensions.length;++ve){var ee=E.extensions[ve];if(!oe(ee))return E.onDestroy(),E.onDone('"'+ee+'" extension is not supported by the current WebGL context, try upgrading your system or a different browser'),null}return E.optionalExtensions.forEach(oe),{extensions:O,restore:function(){Object.keys(O).forEach(function(re){if(O[re]&&!oe(re))throw new Error("(regl): error restoring extension "+re)})}}}function to(x,E){for(var O=Array(x),oe=0;oe<x;++oe)O[oe]=E(oe);return O}var Mt=5120,po=5121,Po=5122,Nt=5123,Wo=5124,xa=5125,p0=5126;function co(x){for(var E=16;E<=1<<28;E*=16)if(x<=E)return E;return 0}function _o(x){var E,O;return E=(x>65535)<<4,x>>>=E,O=(x>255)<<3,x>>>=O,E|=O,O=(x>15)<<2,x>>>=O,E|=O,O=(x>3)<<1,x>>>=O,E|=O,E|x>>1}function Bn(){var x=to(8,function(){return[]});function E(ee){var re=co(ee),Le=x[_o(re)>>2];return Le.length>0?Le.pop():new ArrayBuffer(re)}function O(ee){x[_o(ee.byteLength)>>2].push(ee)}function oe(ee,re){var Le=null;switch(ee){case Mt:Le=new Int8Array(E(re),0,re);break;case po:Le=new Uint8Array(E(re),0,re);break;case Po:Le=new Int16Array(E(2*re),0,re);break;case Nt:Le=new Uint16Array(E(2*re),0,re);break;case Wo:Le=new Int32Array(E(4*re),0,re);break;case xa:Le=new Uint32Array(E(4*re),0,re);break;case p0:Le=new Float32Array(E(4*re),0,re);break;default:return null}return Le.length!==re?Le.subarray(0,re):Le}function ve(ee){O(ee.buffer)}return{alloc:E,free:O,allocType:oe,freeType:ve}}var X=Bn();X.zero=Bn();var xe=3408,ot=3410,ut=3411,mt=3412,hn=3413,fr=3414,Nr=3415,un=33901,Sr=33902,dn=3379,xo=3386,tr=34921,Zo=36347,jn=36348,Wr=35661,Vr=35660,Ko=34930,ya=36349,An=34076,Fa=34024,No=7936,pn=7937,ba=7938,_s=35724,t0=34047,Ms=36063,ff=34852,C0=3553,vi=34067,Ic=34069,v1=33984,v0=6408,$c=5126,Er=5121,Fc=36160,ks=36053,hb=36064,ub=16384,db=function(x,E){var O=1;E.ext_texture_filter_anisotropic&&(O=x.getParameter(t0));var oe=1,ve=1;E.webgl_draw_buffers&&(oe=x.getParameter(ff),ve=x.getParameter(Ms));var ee=!!E.oes_texture_float;if(ee){var re=x.createTexture();x.bindTexture(C0,re),x.texImage2D(C0,0,v0,1,1,0,v0,$c,null);var Le=x.createFramebuffer();if(x.bindFramebuffer(Fc,Le),x.framebufferTexture2D(Fc,hb,C0,re,0),x.bindTexture(C0,null),x.checkFramebufferStatus(Fc)!==ks)ee=!1;else{x.viewport(0,0,1,1),x.clearColor(1,0,0,1),x.clear(ub);var Ce=X.allocType($c,4);x.readPixels(0,0,1,1,v0,$c,Ce),x.getError()?ee=!1:(x.deleteFramebuffer(Le),x.deleteTexture(re),ee=Ce[0]===1),X.freeType(Ce)}}var Fe=typeof navigator!="undefined"&&(/MSIE/.test(navigator.userAgent)||/Trident\//.test(navigator.appVersion)||/Edge/.test(navigator.userAgent)),Pe=!0;if(!Fe){var He=x.createTexture(),Ye=X.allocType(Er,36);x.activeTexture(v1),x.bindTexture(vi,He),x.texImage2D(Ic,0,v0,3,3,0,v0,Er,Ye),X.freeType(Ye),x.bindTexture(vi,null),x.deleteTexture(He),Pe=!x.getError()}return{colorBits:[x.getParameter(ot),x.getParameter(ut),x.getParameter(mt),x.getParameter(hn)],depthBits:x.getParameter(fr),stencilBits:x.getParameter(Nr),subpixelBits:x.getParameter(xe),extensions:Object.keys(E).filter(function(Ne){return!!E[Ne]}),maxAnisotropic:O,maxDrawbuffers:oe,maxColorAttachments:ve,pointSizeDims:x.getParameter(un),lineWidthDims:x.getParameter(Sr),maxViewportDims:x.getParameter(xo),maxCombinedTextureUnits:x.getParameter(Wr),maxCubeMapSize:x.getParameter(An),maxRenderbufferSize:x.getParameter(Fa),maxTextureUnits:x.getParameter(Ko),maxTextureSize:x.getParameter(dn),maxAttributes:x.getParameter(tr),maxVertexUniforms:x.getParameter(Zo),maxVertexTextureUnits:x.getParameter(Vr),maxVaryingVectors:x.getParameter(jn),maxFragmentUniforms:x.getParameter(ya),glsl:x.getParameter(_s),renderer:x.getParameter(pn),vendor:x.getParameter(No),version:x.getParameter(ba),readFloat:ee,npotTextureCube:Pe}};function qa(x){return!!x&&typeof x=="object"&&Array.isArray(x.shape)&&Array.isArray(x.stride)&&typeof x.offset=="number"&&x.shape.length===x.stride.length&&(Array.isArray(x.data)||e(x.data))}var aa=function(x){return Object.keys(x).map(function(E){return x[E]})},hf={shape:gb,flatten:mb};function pb(x,E,O){for(var oe=0;oe<E;++oe)O[oe]=x[oe]}function vb(x,E,O,oe){for(var ve=0,ee=0;ee<E;++ee)for(var re=x[ee],Le=0;Le<O;++Le)oe[ve++]=re[Le]}function Ep(x,E,O,oe,ve,ee){for(var re=ee,Le=0;Le<E;++Le)for(var Ce=x[Le],Fe=0;Fe<O;++Fe)for(var Pe=Ce[Fe],He=0;He<oe;++He)ve[re++]=Pe[He]}function Ap(x,E,O,oe,ve){for(var ee=1,re=O+1;re<E.length;++re)ee*=E[re];var Le=E[O];if(E.length-O===4){var Ce=E[O+1],Fe=E[O+2],Pe=E[O+3];for(re=0;re<Le;++re)Ep(x[re],Ce,Fe,Pe,oe,ve),ve+=ee}else for(re=0;re<Le;++re)Ap(x[re],E,O+1,oe,ve),ve+=ee}function mb(x,E,O,oe){var ve=1;if(E.length)for(var ee=0;ee<E.length;++ee)ve*=E[ee];else ve=0;var re=oe||X.allocType(O,ve);switch(E.length){case 0:break;case 1:pb(x,E[0],re);break;case 2:vb(x,E[0],E[1],re);break;case 3:Ep(x,E[0],E[1],E[2],re,0);break;default:Ap(x,E,0,re,0)}return re}function gb(x){for(var E=[],O=x;O.length;O=O[0])E.push(O.length);return E}var m1={"[object Int8Array]":5120,"[object Int16Array]":5122,"[object Int32Array]":5124,"[object Uint8Array]":5121,"[object Uint8ClampedArray]":5121,"[object Uint16Array]":5123,"[object Uint32Array]":5125,"[object Float32Array]":5126,"[object Float64Array]":5121,"[object ArrayBuffer]":5121},xb=5120,yb=5122,bb=5124,wb=5121,_b=5123,Mb=5125,kb=5126,Sb=5126,Ss={int8:xb,int16:yb,int32:bb,uint8:wb,uint16:_b,uint32:Mb,float:kb,float32:Sb},Eb=35048,Ab=35040,uf={dynamic:Eb,stream:Ab,static:35044},g1=hf.flatten,zp=hf.shape,Tp=35044,zb=35040,x1=5121,y1=5126,P0=[];P0[5120]=1,P0[5122]=2,P0[5124]=4,P0[5121]=1,P0[5123]=2,P0[5125]=4,P0[5126]=4;function df(x){return m1[Object.prototype.toString.call(x)]|0}function Lp(x,E){for(var O=0;O<E.length;++O)x[O]=E[O]}function Np(x,E,O,oe,ve,ee,re){for(var Le=0,Ce=0;Ce<O;++Ce)for(var Fe=0;Fe<oe;++Fe)x[Le++]=E[ve*Ce+ee*Fe+re]}function Tb(x,E,O,oe){var ve=0,ee={};function re(K){this.id=ve++,this.buffer=x.createBuffer(),this.type=K,this.usage=Tp,this.byteLength=0,this.dimension=1,this.dtype=x1,this.persistentData=null,O.profile&&(this.stats={size:0})}re.prototype.bind=function(){x.bindBuffer(this.type,this.buffer)},re.prototype.destroy=function(){Ye(this)};var Le=[];function Ce(K,ae){var $e=Le.pop();return $e||($e=new re(K)),$e.bind(),He($e,ae,zb,0,1,!1),$e}function Fe(K){Le.push(K)}function Pe(K,ae,$e){K.byteLength=ae.byteLength,x.bufferData(K.type,ae,$e)}function He(K,ae,$e,et,we,nt){var Ae;if(K.usage=$e,Array.isArray(ae)){if(K.dtype=et||y1,ae.length>0){var Be;if(Array.isArray(ae[0])){Ae=zp(ae);for(var Me=1,je=1;je<Ae.length;++je)Me*=Ae[je];K.dimension=Me,Be=g1(ae,Ae,K.dtype),Pe(K,Be,$e),nt?K.persistentData=Be:X.freeType(Be)}else if(typeof ae[0]=="number"){K.dimension=we;var At=X.allocType(K.dtype,ae.length);Lp(At,ae),Pe(K,At,$e),nt?K.persistentData=At:X.freeType(At)}else e(ae[0])?(K.dimension=ae[0].length,K.dtype=et||df(ae[0])||y1,Be=g1(ae,[ae.length,ae[0].length],K.dtype),Pe(K,Be,$e),nt?K.persistentData=Be:X.freeType(Be)):_.raise("invalid buffer data")}}else if(e(ae))K.dtype=et||df(ae),K.dimension=we,Pe(K,ae,$e),nt&&(K.persistentData=new Uint8Array(new Uint8Array(ae.buffer)));else if(qa(ae)){Ae=ae.shape;var Gt=ae.stride,Ke=ae.offset,De=0,be=0,Ft=0,Kt=0;Ae.length===1?(De=Ae[0],be=1,Ft=Gt[0],Kt=0):Ae.length===2?(De=Ae[0],be=Ae[1],Ft=Gt[0],Kt=Gt[1]):_.raise("invalid shape"),K.dtype=et||df(ae.data)||y1,K.dimension=be;var ct=X.allocType(K.dtype,De*be);Np(ct,ae.data,De,be,Ft,Kt,Ke),Pe(K,ct,$e),nt?K.persistentData=ct:X.freeType(ct)}else ae instanceof ArrayBuffer?(K.dtype=x1,K.dimension=we,Pe(K,ae,$e),nt&&(K.persistentData=new Uint8Array(new Uint8Array(ae)))):_.raise("invalid buffer data")}function Ye(K){E.bufferCount--,oe(K);var ae=K.buffer;_(ae,"buffer must not be deleted already"),x.deleteBuffer(ae),K.buffer=null,delete ee[K.id]}function Ne(K,ae,$e,et){E.bufferCount++;var we=new re(ae);ee[we.id]=we;function nt(Me){var je=Tp,At=null,Gt=0,Ke=0,De=1;return Array.isArray(Me)||e(Me)||qa(Me)||Me instanceof ArrayBuffer?At=Me:typeof Me=="number"?Gt=Me|0:Me&&(_.type(Me,"object","buffer arguments must be an object, a number or an array"),"data"in Me&&(_(At===null||Array.isArray(At)||e(At)||qa(At),"invalid data for buffer"),At=Me.data),"usage"in Me&&(_.parameter(Me.usage,uf,"invalid buffer usage"),je=uf[Me.usage]),"type"in Me&&(_.parameter(Me.type,Ss,"invalid buffer type"),Ke=Ss[Me.type]),"dimension"in Me&&(_.type(Me.dimension,"number","invalid dimension"),De=Me.dimension|0),"length"in Me&&(_.nni(Gt,"buffer length must be a nonnegative integer"),Gt=Me.length|0)),we.bind(),At?He(we,At,je,Ke,De,et):(Gt&&x.bufferData(we.type,Gt,je),we.dtype=Ke||x1,we.usage=je,we.dimension=De,we.byteLength=Gt),O.profile&&(we.stats.size=we.byteLength*P0[we.dtype]),nt}function Ae(Me,je){_(je+Me.byteLength<=we.byteLength,"invalid buffer subdata call, buffer is too small.  Can't write data of size "+Me.byteLength+" starting from offset "+je+" to a buffer of size "+we.byteLength),x.bufferSubData(we.type,je,Me)}function Be(Me,je){var At=(je||0)|0,Gt;if(we.bind(),e(Me)||Me instanceof ArrayBuffer)Ae(Me,At);else if(Array.isArray(Me)){if(Me.length>0)if(typeof Me[0]=="number"){var Ke=X.allocType(we.dtype,Me.length);Lp(Ke,Me),Ae(Ke,At),X.freeType(Ke)}else if(Array.isArray(Me[0])||e(Me[0])){Gt=zp(Me);var De=g1(Me,Gt,we.dtype);Ae(De,At),X.freeType(De)}else _.raise("invalid buffer data")}else if(qa(Me)){Gt=Me.shape;var be=Me.stride,Ft=0,Kt=0,ct=0,ao=0;Gt.length===1?(Ft=Gt[0],Kt=1,ct=be[0],ao=0):Gt.length===2?(Ft=Gt[0],Kt=Gt[1],ct=be[0],ao=be[1]):_.raise("invalid shape");var Ut=Array.isArray(Me.data)?we.dtype:df(Me.data),eo=X.allocType(Ut,Ft*Kt);Np(eo,Me.data,Ft,Kt,ct,ao,Me.offset),Ae(eo,At),X.freeType(eo)}else _.raise("invalid data for buffer subdata");return nt}return $e||nt(K),nt._reglType="buffer",nt._buffer=we,nt.subdata=Be,O.profile&&(nt.stats=we.stats),nt.destroy=function(){Ye(we)},nt}function Ue(){aa(ee).forEach(function(K){K.buffer=x.createBuffer(),x.bindBuffer(K.type,K.buffer),x.bufferData(K.type,K.persistentData||K.byteLength,K.usage)})}return O.profile&&(E.getTotalBufferSize=function(){var K=0;return Object.keys(ee).forEach(function(ae){K+=ee[ae].stats.size}),K}),{create:Ne,createStream:Ce,destroyStream:Fe,clear:function(){aa(ee).forEach(Ye),Le.forEach(Ye)},getBuffer:function(K){return K&&K._buffer instanceof re?K._buffer:null},restore:Ue,_initBuffer:He}}var Lb=0,Nb=0,Rb=1,Ob=1,Cb=4,Pb=4,mi={points:Lb,point:Nb,lines:Rb,line:Ob,triangles:Cb,triangle:Pb,"line loop":2,"line strip":3,"triangle strip":5,"triangle fan":6},Ib=0,$b=1,qc=4,Fb=5120,gi=5121,Rp=5122,xi=5123,Op=5124,Es=5125,b1=34963,qb=35040,Db=35044;function Gb(x,E,O,oe){var ve={},ee=0,re={uint8:gi,uint16:xi};E.oes_element_index_uint&&(re.uint32=Es);function Le(Ue){this.id=ee++,ve[this.id]=this,this.buffer=Ue,this.primType=qc,this.vertCount=0,this.type=0}Le.prototype.bind=function(){this.buffer.bind()};var Ce=[];function Fe(Ue){var K=Ce.pop();return K||(K=new Le(O.create(null,b1,!0,!1)._buffer)),He(K,Ue,qb,-1,-1,0,0),K}function Pe(Ue){Ce.push(Ue)}function He(Ue,K,ae,$e,et,we,nt){Ue.buffer.bind();var Ae;if(K){var Be=nt;!nt&&(!e(K)||qa(K)&&!e(K.data))&&(Be=E.oes_element_index_uint?Es:xi),O._initBuffer(Ue.buffer,K,ae,Be,3)}else x.bufferData(b1,we,ae),Ue.buffer.dtype=Ae||gi,Ue.buffer.usage=ae,Ue.buffer.dimension=3,Ue.buffer.byteLength=we;if(Ae=nt,!nt){switch(Ue.buffer.dtype){case gi:case Fb:Ae=gi;break;case xi:case Rp:Ae=xi;break;case Es:case Op:Ae=Es;break;default:_.raise("unsupported type for element array")}Ue.buffer.dtype=Ae}Ue.type=Ae,_(Ae!==Es||!!E.oes_element_index_uint,"32 bit element buffers not supported, enable oes_element_index_uint first");var Me=et;Me<0&&(Me=Ue.buffer.byteLength,Ae===xi?Me>>=1:Ae===Es&&(Me>>=2)),Ue.vertCount=Me;var je=$e;if($e<0){je=qc;var At=Ue.buffer.dimension;At===1&&(je=Ib),At===2&&(je=$b),At===3&&(je=qc)}Ue.primType=je}function Ye(Ue){oe.elementsCount--,_(Ue.buffer!==null,"must not double destroy elements"),delete ve[Ue.id],Ue.buffer.destroy(),Ue.buffer=null}function Ne(Ue,K){var ae=O.create(null,b1,!0),$e=new Le(ae._buffer);oe.elementsCount++;function et(we){if(!we)ae(),$e.primType=qc,$e.vertCount=0,$e.type=gi;else if(typeof we=="number")ae(we),$e.primType=qc,$e.vertCount=we|0,$e.type=gi;else{var nt=null,Ae=Db,Be=-1,Me=-1,je=0,At=0;Array.isArray(we)||e(we)||qa(we)?nt=we:(_.type(we,"object","invalid arguments for elements"),"data"in we&&(nt=we.data,_(Array.isArray(nt)||e(nt)||qa(nt),"invalid data for element buffer")),"usage"in we&&(_.parameter(we.usage,uf,"invalid element buffer usage"),Ae=uf[we.usage]),"primitive"in we&&(_.parameter(we.primitive,mi,"invalid element buffer primitive"),Be=mi[we.primitive]),"count"in we&&(_(typeof we.count=="number"&&we.count>=0,"invalid vertex count for elements"),Me=we.count|0),"type"in we&&(_.parameter(we.type,re,"invalid buffer type"),At=re[we.type]),"length"in we?je=we.length|0:(je=Me,At===xi||At===Rp?je*=2:(At===Es||At===Op)&&(je*=4))),He($e,nt,Ae,Be,Me,je,At)}return et}return et(Ue),et._reglType="elements",et._elements=$e,et.subdata=function(we,nt){return ae.subdata(we,nt),et},et.destroy=function(){Ye($e)},et}return{create:Ne,createStream:Fe,destroyStream:Pe,getElements:function(Ue){return typeof Ue=="function"&&Ue._elements instanceof Le?Ue._elements:null},clear:function(){aa(ve).forEach(Ye)}}}var Cp=new Float32Array(1),Hb=new Uint32Array(Cp.buffer),Ub=5123;function Pp(x){for(var E=X.allocType(Ub,x.length),O=0;O<x.length;++O)if(isNaN(x[O]))E[O]=65535;else if(x[O]===1/0)E[O]=31744;else if(x[O]===-1/0)E[O]=64512;else{Cp[0]=x[O];var oe=Hb[0],ve=oe>>>31<<15,ee=(oe<<1>>>24)-127,re=oe>>13&1023;if(ee<-24)E[O]=ve;else if(ee<-14){var Le=-14-ee;E[O]=ve+(re+1024>>Le)}else ee>15?E[O]=ve+31744:E[O]=ve+(ee+15<<10)+re}return E}function _n(x){return Array.isArray(x)||e(x)}var Ip=function(x){return!(x&x-1)&&!!x},Bb=34467,o0=3553,w1=34067,pf=34069,As=6408,_1=6406,vf=6407,Dc=6409,mf=6410,$p=32854,M1=32855,Fp=36194,jb=32819,Wb=32820,Vb=33635,Xb=34042,k1=6402,gf=34041,S1=35904,E1=35906,yi=36193,A1=33776,z1=33777,T1=33778,L1=33779,qp=35986,Dp=35987,Gp=34798,Hp=35840,Up=35841,Bp=35842,jp=35843,Wp=36196,bi=5121,N1=5123,R1=5125,Gc=5126,Yb=10242,Kb=10243,Qb=10497,O1=33071,Zb=33648,Jb=10240,ew=10241,C1=9728,tw=9729,P1=9984,Vp=9985,Xp=9986,I1=9987,ow=33170,xf=4352,nw=4353,rw=4354,aw=34046,sw=3317,iw=37440,cw=37441,lw=37443,Yp=37444,Hc=33984,fw=[P1,Xp,Vp,I1],yf=[0,Dc,mf,vf,As],wa={};wa[Dc]=wa[_1]=wa[k1]=1,wa[gf]=wa[mf]=2,wa[vf]=wa[S1]=3,wa[As]=wa[E1]=4;function wi(x){return"[object "+x+"]"}var Kp=wi("HTMLCanvasElement"),Qp=wi("OffscreenCanvas"),Zp=wi("CanvasRenderingContext2D"),Jp=wi("ImageBitmap"),ev=wi("HTMLImageElement"),tv=wi("HTMLVideoElement"),hw=Object.keys(m1).concat([Kp,Qp,Zp,Jp,ev,tv]),_i=[];_i[bi]=1,_i[Gc]=4,_i[yi]=2,_i[N1]=2,_i[R1]=4;var hr=[];hr[$p]=2,hr[M1]=2,hr[Fp]=2,hr[gf]=4,hr[A1]=.5,hr[z1]=.5,hr[T1]=1,hr[L1]=1,hr[qp]=.5,hr[Dp]=1,hr[Gp]=1,hr[Hp]=.5,hr[Up]=.25,hr[Bp]=.5,hr[jp]=.25,hr[Wp]=.5;function ov(x){return Array.isArray(x)&&(x.length===0||typeof x[0]=="number")}function nv(x){if(!Array.isArray(x))return!1;var E=x.length;return!(E===0||!_n(x[0]))}function zs(x){return Object.prototype.toString.call(x)}function rv(x){return zs(x)===Kp}function av(x){return zs(x)===Qp}function uw(x){return zs(x)===Zp}function dw(x){return zs(x)===Jp}function pw(x){return zs(x)===ev}function vw(x){return zs(x)===tv}function $1(x){if(!x)return!1;var E=zs(x);return hw.indexOf(E)>=0?!0:ov(x)||nv(x)||qa(x)}function sv(x){return m1[Object.prototype.toString.call(x)]|0}function mw(x,E){var O=E.length;switch(x.type){case bi:case N1:case R1:case Gc:var oe=X.allocType(x.type,O);oe.set(E),x.data=oe;break;case yi:x.data=Pp(E);break;default:_.raise("unsupported texture type, must specify a typed array")}}function iv(x,E){return X.allocType(x.type===yi?Gc:x.type,E)}function cv(x,E){x.type===yi?(x.data=Pp(E),X.freeType(E)):x.data=E}function gw(x,E,O,oe,ve,ee){for(var re=x.width,Le=x.height,Ce=x.channels,Fe=re*Le*Ce,Pe=iv(x,Fe),He=0,Ye=0;Ye<Le;++Ye)for(var Ne=0;Ne<re;++Ne)for(var Ue=0;Ue<Ce;++Ue)Pe[He++]=E[O*Ne+oe*Ye+ve*Ue+ee];cv(x,Pe)}function bf(x,E,O,oe,ve,ee){var re;if(typeof hr[x]!="undefined"?re=hr[x]:re=wa[x]*_i[E],ee&&(re*=6),ve){for(var Le=0,Ce=O;Ce>=1;)Le+=re*Ce*Ce,Ce/=2;return Le}else return re*O*oe}function xw(x,E,O,oe,ve,ee,re){var Le={"don't care":xf,"dont care":xf,nice:rw,fast:nw},Ce={repeat:Qb,clamp:O1,mirror:Zb},Fe={nearest:C1,linear:tw},Pe=t({mipmap:I1,"nearest mipmap nearest":P1,"linear mipmap nearest":Vp,"nearest mipmap linear":Xp,"linear mipmap linear":I1},Fe),He={none:0,browser:Yp},Ye={uint8:bi,rgba4:jb,rgb565:Vb,"rgb5 a1":Wb},Ne={alpha:_1,luminance:Dc,"luminance alpha":mf,rgb:vf,rgba:As,rgba4:$p,"rgb5 a1":M1,rgb565:Fp},Ue={};E.ext_srgb&&(Ne.srgb=S1,Ne.srgba=E1),E.oes_texture_float&&(Ye.float32=Ye.float=Gc),E.oes_texture_half_float&&(Ye.float16=Ye["half float"]=yi),E.webgl_depth_texture&&(t(Ne,{depth:k1,"depth stencil":gf}),t(Ye,{uint16:N1,uint32:R1,"depth stencil":Xb})),E.webgl_compressed_texture_s3tc&&t(Ue,{"rgb s3tc dxt1":A1,"rgba s3tc dxt1":z1,"rgba s3tc dxt3":T1,"rgba s3tc dxt5":L1}),E.webgl_compressed_texture_atc&&t(Ue,{"rgb atc":qp,"rgba atc explicit alpha":Dp,"rgba atc interpolated alpha":Gp}),E.webgl_compressed_texture_pvrtc&&t(Ue,{"rgb pvrtc 4bppv1":Hp,"rgb pvrtc 2bppv1":Up,"rgba pvrtc 4bppv1":Bp,"rgba pvrtc 2bppv1":jp}),E.webgl_compressed_texture_etc1&&(Ue["rgb etc1"]=Wp);var K=Array.prototype.slice.call(x.getParameter(Bb));Object.keys(Ue).forEach(function(N){var ne=Ue[N];K.indexOf(ne)>=0&&(Ne[N]=ne)});var ae=Object.keys(Ne);O.textureFormats=ae;var $e=[];Object.keys(Ne).forEach(function(N){var ne=Ne[N];$e[ne]=N});var et=[];Object.keys(Ye).forEach(function(N){var ne=Ye[N];et[ne]=N});var we=[];Object.keys(Fe).forEach(function(N){var ne=Fe[N];we[ne]=N});var nt=[];Object.keys(Pe).forEach(function(N){var ne=Pe[N];nt[ne]=N});var Ae=[];Object.keys(Ce).forEach(function(N){var ne=Ce[N];Ae[ne]=N});var Be=ae.reduce(function(N,ne){var J=Ne[ne];return J===Dc||J===_1||J===Dc||J===mf||J===k1||J===gf||E.ext_srgb&&(J===S1||J===E1)?N[J]=J:J===M1||ne.indexOf("rgba")>=0?N[J]=As:N[J]=vf,N},{});function Me(){this.internalformat=As,this.format=As,this.type=bi,this.compressed=!1,this.premultiplyAlpha=!1,this.flipY=!1,this.unpackAlignment=1,this.colorSpace=Yp,this.width=0,this.height=0,this.channels=0}function je(N,ne){N.internalformat=ne.internalformat,N.format=ne.format,N.type=ne.type,N.compressed=ne.compressed,N.premultiplyAlpha=ne.premultiplyAlpha,N.flipY=ne.flipY,N.unpackAlignment=ne.unpackAlignment,N.colorSpace=ne.colorSpace,N.width=ne.width,N.height=ne.height,N.channels=ne.channels}function At(N,ne){if(!(typeof ne!="object"||!ne)){if("premultiplyAlpha"in ne&&(_.type(ne.premultiplyAlpha,"boolean","invalid premultiplyAlpha"),N.premultiplyAlpha=ne.premultiplyAlpha),"flipY"in ne&&(_.type(ne.flipY,"boolean","invalid texture flip"),N.flipY=ne.flipY),"alignment"in ne&&(_.oneOf(ne.alignment,[1,2,4,8],"invalid texture unpack alignment"),N.unpackAlignment=ne.alignment),"colorSpace"in ne&&(_.parameter(ne.colorSpace,He,"invalid colorSpace"),N.colorSpace=He[ne.colorSpace]),"type"in ne){var J=ne.type;_(E.oes_texture_float||!(J==="float"||J==="float32"),"you must enable the OES_texture_float extension in order to use floating point textures."),_(E.oes_texture_half_float||!(J==="half float"||J==="float16"),"you must enable the OES_texture_half_float extension in order to use 16-bit floating point textures."),_(E.webgl_depth_texture||!(J==="uint16"||J==="uint32"||J==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),_.parameter(J,Ye,"invalid texture type"),N.type=Ye[J]}var at=N.width,so=N.height,T=N.channels,S=!1;"shape"in ne?(_(Array.isArray(ne.shape)&&ne.shape.length>=2,"shape must be an array"),at=ne.shape[0],so=ne.shape[1],ne.shape.length===3&&(T=ne.shape[2],_(T>0&&T<=4,"invalid number of channels"),S=!0),_(at>=0&&at<=O.maxTextureSize,"invalid width"),_(so>=0&&so<=O.maxTextureSize,"invalid height")):("radius"in ne&&(at=so=ne.radius,_(at>=0&&at<=O.maxTextureSize,"invalid radius")),"width"in ne&&(at=ne.width,_(at>=0&&at<=O.maxTextureSize,"invalid width")),"height"in ne&&(so=ne.height,_(so>=0&&so<=O.maxTextureSize,"invalid height")),"channels"in ne&&(T=ne.channels,_(T>0&&T<=4,"invalid number of channels"),S=!0)),N.width=at|0,N.height=so|0,N.channels=T|0;var $=!1;if("format"in ne){var W=ne.format;_(E.webgl_depth_texture||!(W==="depth"||W==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),_.parameter(W,Ne,"invalid texture format");var Q=N.internalformat=Ne[W];N.format=Be[Q],W in Ye&&("type"in ne||(N.type=Ye[W])),W in Ue&&(N.compressed=!0),$=!0}!S&&$?N.channels=wa[N.format]:S&&!$?N.channels!==yf[N.format]&&(N.format=N.internalformat=yf[N.channels]):$&&S&&_(N.channels===wa[N.format],"number of channels inconsistent with specified format")}}function Gt(N){x.pixelStorei(iw,N.flipY),x.pixelStorei(cw,N.premultiplyAlpha),x.pixelStorei(lw,N.colorSpace),x.pixelStorei(sw,N.unpackAlignment)}function Ke(){Me.call(this),this.xOffset=0,this.yOffset=0,this.data=null,this.needsFree=!1,this.element=null,this.needsCopy=!1}function De(N,ne){var J=null;if($1(ne)?J=ne:ne&&(_.type(ne,"object","invalid pixel data type"),At(N,ne),"x"in ne&&(N.xOffset=ne.x|0),"y"in ne&&(N.yOffset=ne.y|0),$1(ne.data)&&(J=ne.data)),_(!N.compressed||J instanceof Uint8Array,"compressed texture data must be stored in a uint8array"),ne.copy){_(!J,"can not specify copy and data field for the same texture");var at=ve.viewportWidth,so=ve.viewportHeight;N.width=N.width||at-N.xOffset,N.height=N.height||so-N.yOffset,N.needsCopy=!0,_(N.xOffset>=0&&N.xOffset<at&&N.yOffset>=0&&N.yOffset<so&&N.width>0&&N.width<=at&&N.height>0&&N.height<=so,"copy texture read out of bounds")}else if(!J)N.width=N.width||1,N.height=N.height||1,N.channels=N.channels||4;else if(e(J))N.channels=N.channels||4,N.data=J,!("type"in ne)&&N.type===bi&&(N.type=sv(J));else if(ov(J))N.channels=N.channels||4,mw(N,J),N.alignment=1,N.needsFree=!0;else if(qa(J)){var T=J.data;!Array.isArray(T)&&N.type===bi&&(N.type=sv(T));var S=J.shape,$=J.stride,W,Q,q,F,H,L;S.length===3?(q=S[2],L=$[2]):(_(S.length===2,"invalid ndarray pixel data, must be 2 or 3D"),q=1,L=1),W=S[0],Q=S[1],F=$[0],H=$[1],N.alignment=1,N.width=W,N.height=Q,N.channels=q,N.format=N.internalformat=yf[q],N.needsFree=!0,gw(N,T,F,H,L,J.offset)}else if(rv(J)||av(J)||uw(J))rv(J)||av(J)?N.element=J:N.element=J.canvas,N.width=N.element.width,N.height=N.element.height,N.channels=4;else if(dw(J))N.element=J,N.width=J.width,N.height=J.height,N.channels=4;else if(pw(J))N.element=J,N.width=J.naturalWidth,N.height=J.naturalHeight,N.channels=4;else if(vw(J))N.element=J,N.width=J.videoWidth,N.height=J.videoHeight,N.channels=4;else if(nv(J)){var C=N.width||J[0].length,A=N.height||J.length,B=N.channels;_n(J[0][0])?B=B||J[0][0].length:B=B||1;for(var Z=hf.shape(J),fe=1,me=0;me<Z.length;++me)fe*=Z[me];var se=iv(N,fe);hf.flatten(J,Z,"",se),cv(N,se),N.alignment=1,N.width=C,N.height=A,N.channels=B,N.format=N.internalformat=yf[B],N.needsFree=!0}N.type===Gc?_(O.extensions.indexOf("oes_texture_float")>=0,"oes_texture_float extension not enabled"):N.type===yi&&_(O.extensions.indexOf("oes_texture_half_float")>=0,"oes_texture_half_float extension not enabled")}function be(N,ne,J){var at=N.element,so=N.data,T=N.internalformat,S=N.format,$=N.type,W=N.width,Q=N.height;Gt(N),at?x.texImage2D(ne,J,S,S,$,at):N.compressed?x.compressedTexImage2D(ne,J,T,W,Q,0,so):N.needsCopy?(oe(),x.copyTexImage2D(ne,J,S,N.xOffset,N.yOffset,W,Q,0)):x.texImage2D(ne,J,S,W,Q,0,S,$,so||null)}function Ft(N,ne,J,at,so){var T=N.element,S=N.data,$=N.internalformat,W=N.format,Q=N.type,q=N.width,F=N.height;Gt(N),T?x.texSubImage2D(ne,so,J,at,W,Q,T):N.compressed?x.compressedTexSubImage2D(ne,so,J,at,$,q,F,S):N.needsCopy?(oe(),x.copyTexSubImage2D(ne,so,J,at,N.xOffset,N.yOffset,q,F)):x.texSubImage2D(ne,so,J,at,q,F,W,Q,S)}var Kt=[];function ct(){return Kt.pop()||new Ke}function ao(N){N.needsFree&&X.freeType(N.data),Ke.call(N),Kt.push(N)}function Ut(){Me.call(this),this.genMipmaps=!1,this.mipmapHint=xf,this.mipmask=0,this.images=Array(16)}function eo(N,ne,J){var at=N.images[0]=ct();N.mipmask=1,at.width=N.width=ne,at.height=N.height=J,at.channels=N.channels=4}function Eo(N,ne){var J=null;if($1(ne))J=N.images[0]=ct(),je(J,N),De(J,ne),N.mipmask=1;else if(At(N,ne),Array.isArray(ne.mipmap))for(var at=ne.mipmap,so=0;so<at.length;++so)J=N.images[so]=ct(),je(J,N),J.width>>=so,J.height>>=so,De(J,at[so]),N.mipmask|=1<<so;else J=N.images[0]=ct(),je(J,N),De(J,ne),N.mipmask=1;je(N,N.images[0]),N.compressed&&(N.internalformat===A1||N.internalformat===z1||N.internalformat===T1||N.internalformat===L1)&&_(N.width%4===0&&N.height%4===0,"for compressed texture formats, mipmap level 0 must have width and height that are a multiple of 4")}function Tn(N,ne){for(var J=N.images,at=0;at<J.length;++at){if(!J[at])return;be(J[at],ne,at)}}var Wn=[];function ho(){var N=Wn.pop()||new Ut;Me.call(N),N.mipmask=0;for(var ne=0;ne<16;++ne)N.images[ne]=null;return N}function In(N){for(var ne=N.images,J=0;J<ne.length;++J)ne[J]&&ao(ne[J]),ne[J]=null;Wn.push(N)}function Jo(){this.minFilter=C1,this.magFilter=C1,this.wrapS=O1,this.wrapT=O1,this.anisotropic=1,this.genMipmaps=!1,this.mipmapHint=xf}function Ln(N,ne){if("min"in ne){var J=ne.min;_.parameter(J,Pe),N.minFilter=Pe[J],fw.indexOf(N.minFilter)>=0&&!("faces"in ne)&&(N.genMipmaps=!0)}if("mag"in ne){var at=ne.mag;_.parameter(at,Fe),N.magFilter=Fe[at]}var so=N.wrapS,T=N.wrapT;if("wrap"in ne){var S=ne.wrap;typeof S=="string"?(_.parameter(S,Ce),so=T=Ce[S]):Array.isArray(S)&&(_.parameter(S[0],Ce),_.parameter(S[1],Ce),so=Ce[S[0]],T=Ce[S[1]])}else{if("wrapS"in ne){var $=ne.wrapS;_.parameter($,Ce),so=Ce[$]}if("wrapT"in ne){var W=ne.wrapT;_.parameter(W,Ce),T=Ce[W]}}if(N.wrapS=so,N.wrapT=T,"anisotropic"in ne){var Q=ne.anisotropic;_(typeof Q=="number"&&Q>=1&&Q<=O.maxAnisotropic,"aniso samples must be between 1 and "),N.anisotropic=ne.anisotropic}if("mipmap"in ne){var q=!1;switch(typeof ne.mipmap){case"string":_.parameter(ne.mipmap,Le,"invalid mipmap hint"),N.mipmapHint=Le[ne.mipmap],N.genMipmaps=!0,q=!0;break;case"boolean":q=N.genMipmaps=ne.mipmap;break;case"object":_(Array.isArray(ne.mipmap),"invalid mipmap type"),N.genMipmaps=!1,q=!0;break;default:_.raise("invalid mipmap type")}q&&!("min"in ne)&&(N.minFilter=P1)}}function $n(N,ne){x.texParameteri(ne,ew,N.minFilter),x.texParameteri(ne,Jb,N.magFilter),x.texParameteri(ne,Yb,N.wrapS),x.texParameteri(ne,Kb,N.wrapT),E.ext_texture_filter_anisotropic&&x.texParameteri(ne,aw,N.anisotropic),N.genMipmaps&&(x.hint(ow,N.mipmapHint),x.generateMipmap(ne))}var Fn=0,or={},ur=O.maxTextureUnits,Mn=Array(ur).map(function(){return null});function Qt(N){Me.call(this),this.mipmask=0,this.internalformat=As,this.id=Fn++,this.refCount=1,this.target=N,this.texture=x.createTexture(),this.unit=-1,this.bindCount=0,this.texInfo=new Jo,re.profile&&(this.stats={size:0})}function dr(N){x.activeTexture(Hc),x.bindTexture(N.target,N.texture)}function Ro(){var N=Mn[0];N?x.bindTexture(N.target,N.texture):x.bindTexture(o0,null)}function Rt(N){var ne=N.texture;_(ne,"must not double destroy texture");var J=N.unit,at=N.target;J>=0&&(x.activeTexture(Hc+J),x.bindTexture(at,null),Mn[J]=null),x.deleteTexture(ne),N.texture=null,N.params=null,N.pixels=null,N.refCount=0,delete or[N.id],ee.textureCount--}t(Qt.prototype,{bind:function(){var N=this;N.bindCount+=1;var ne=N.unit;if(ne<0){for(var J=0;J<ur;++J){var at=Mn[J];if(at){if(at.bindCount>0)continue;at.unit=-1}Mn[J]=N,ne=J;break}ne>=ur&&_.raise("insufficient number of texture units"),re.profile&&ee.maxTextureUnits<ne+1&&(ee.maxTextureUnits=ne+1),N.unit=ne,x.activeTexture(Hc+ne),x.bindTexture(N.target,N.texture)}return ne},unbind:function(){this.bindCount-=1},decRef:function(){--this.refCount<=0&&Rt(this)}});function lo(N,ne){var J=new Qt(o0);or[J.id]=J,ee.textureCount++;function at(S,$){var W=J.texInfo;Jo.call(W);var Q=ho();return typeof S=="number"?typeof $=="number"?eo(Q,S|0,$|0):eo(Q,S|0,S|0):S?(_.type(S,"object","invalid arguments to regl.texture"),Ln(W,S),Eo(Q,S)):eo(Q,1,1),W.genMipmaps&&(Q.mipmask=(Q.width<<1)-1),J.mipmask=Q.mipmask,je(J,Q),_.texture2D(W,Q,O),J.internalformat=Q.internalformat,at.width=Q.width,at.height=Q.height,dr(J),Tn(Q,o0),$n(W,o0),Ro(),In(Q),re.profile&&(J.stats.size=bf(J.internalformat,J.type,Q.width,Q.height,W.genMipmaps,!1)),at.format=$e[J.internalformat],at.type=et[J.type],at.mag=we[W.magFilter],at.min=nt[W.minFilter],at.wrapS=Ae[W.wrapS],at.wrapT=Ae[W.wrapT],at}function so(S,$,W,Q){_(!!S,"must specify image data");var q=$|0,F=W|0,H=Q|0,L=ct();return je(L,J),L.width=0,L.height=0,De(L,S),L.width=L.width||(J.width>>H)-q,L.height=L.height||(J.height>>H)-F,_(J.type===L.type&&J.format===L.format&&J.internalformat===L.internalformat,"incompatible format for texture.subimage"),_(q>=0&&F>=0&&q+L.width<=J.width&&F+L.height<=J.height,"texture.subimage write out of bounds"),_(J.mipmask&1<<H,"missing mipmap data"),_(L.data||L.element||L.needsCopy,"missing image data"),dr(J),Ft(L,o0,q,F,H),Ro(),ao(L),at}function T(S,$){var W=S|0,Q=$|0||W;if(W===J.width&&Q===J.height)return at;at.width=J.width=W,at.height=J.height=Q,dr(J);for(var q=0;J.mipmask>>q;++q){var F=W>>q,H=Q>>q;if(!F||!H)break;x.texImage2D(o0,q,J.format,F,H,0,J.format,J.type,null)}return Ro(),re.profile&&(J.stats.size=bf(J.internalformat,J.type,W,Q,!1,!1)),at}return at(N,ne),at.subimage=so,at.resize=T,at._reglType="texture2d",at._texture=J,re.profile&&(at.stats=J.stats),at.destroy=function(){J.decRef()},at}function yo(N,ne,J,at,so,T){var S=new Qt(w1);or[S.id]=S,ee.cubeCount++;var $=new Array(6);function W(F,H,L,C,A,B){var Z,fe=S.texInfo;for(Jo.call(fe),Z=0;Z<6;++Z)$[Z]=ho();if(typeof F=="number"||!F){var me=F|0||1;for(Z=0;Z<6;++Z)eo($[Z],me,me)}else if(typeof F=="object")if(H)Eo($[0],F),Eo($[1],H),Eo($[2],L),Eo($[3],C),Eo($[4],A),Eo($[5],B);else if(Ln(fe,F),At(S,F),"faces"in F){var se=F.faces;for(_(Array.isArray(se)&&se.length===6,"cube faces must be a length 6 array"),Z=0;Z<6;++Z)_(typeof se[Z]=="object"&&!!se[Z],"invalid input for cube map face"),je($[Z],S),Eo($[Z],se[Z])}else for(Z=0;Z<6;++Z)Eo($[Z],F);else _.raise("invalid arguments to cube map");for(je(S,$[0]),O.npotTextureCube||_(Ip(S.width)&&Ip(S.height),"your browser does not support non power or two texture dimensions"),fe.genMipmaps?S.mipmask=($[0].width<<1)-1:S.mipmask=$[0].mipmask,_.textureCube(S,fe,$,O),S.internalformat=$[0].internalformat,W.width=$[0].width,W.height=$[0].height,dr(S),Z=0;Z<6;++Z)Tn($[Z],pf+Z);for($n(fe,w1),Ro(),re.profile&&(S.stats.size=bf(S.internalformat,S.type,W.width,W.height,fe.genMipmaps,!0)),W.format=$e[S.internalformat],W.type=et[S.type],W.mag=we[fe.magFilter],W.min=nt[fe.minFilter],W.wrapS=Ae[fe.wrapS],W.wrapT=Ae[fe.wrapT],Z=0;Z<6;++Z)In($[Z]);return W}function Q(F,H,L,C,A){_(!!H,"must specify image data"),_(typeof F=="number"&&F===(F|0)&&F>=0&&F<6,"invalid face");var B=L|0,Z=C|0,fe=A|0,me=ct();return je(me,S),me.width=0,me.height=0,De(me,H),me.width=me.width||(S.width>>fe)-B,me.height=me.height||(S.height>>fe)-Z,_(S.type===me.type&&S.format===me.format&&S.internalformat===me.internalformat,"incompatible format for texture.subimage"),_(B>=0&&Z>=0&&B+me.width<=S.width&&Z+me.height<=S.height,"texture.subimage write out of bounds"),_(S.mipmask&1<<fe,"missing mipmap data"),_(me.data||me.element||me.needsCopy,"missing image data"),dr(S),Ft(me,pf+F,B,Z,fe),Ro(),ao(me),W}function q(F){var H=F|0;if(H!==S.width){W.width=S.width=H,W.height=S.height=H,dr(S);for(var L=0;L<6;++L)for(var C=0;S.mipmask>>C;++C)x.texImage2D(pf+L,C,S.format,H>>C,H>>C,0,S.format,S.type,null);return Ro(),re.profile&&(S.stats.size=bf(S.internalformat,S.type,W.width,W.height,!1,!0)),W}}return W(N,ne,J,at,so,T),W.subimage=Q,W.resize=q,W._reglType="textureCube",W._texture=S,re.profile&&(W.stats=S.stats),W.destroy=function(){S.decRef()},W}function kn(){for(var N=0;N<ur;++N)x.activeTexture(Hc+N),x.bindTexture(o0,null),Mn[N]=null;aa(or).forEach(Rt),ee.cubeCount=0,ee.textureCount=0}re.profile&&(ee.getTotalTextureSize=function(){var N=0;return Object.keys(or).forEach(function(ne){N+=or[ne].stats.size}),N});function r0(){for(var N=0;N<ur;++N){var ne=Mn[N];ne&&(ne.bindCount=0,ne.unit=-1,Mn[N]=null)}aa(or).forEach(function(J){J.texture=x.createTexture(),x.bindTexture(J.target,J.texture);for(var at=0;at<32;++at)if(J.mipmask&1<<at)if(J.target===o0)x.texImage2D(o0,at,J.internalformat,J.width>>at,J.height>>at,0,J.internalformat,J.type,null);else for(var so=0;so<6;++so)x.texImage2D(pf+so,at,J.internalformat,J.width>>at,J.height>>at,0,J.internalformat,J.type,null);$n(J.texInfo,J.target)})}function Ps(){for(var N=0;N<ur;++N){var ne=Mn[N];ne&&(ne.bindCount=0,ne.unit=-1,Mn[N]=null),x.activeTexture(Hc+N),x.bindTexture(o0,null),x.bindTexture(w1,null)}}return{create2D:lo,createCube:yo,clear:kn,getTexture:function(N){return null},restore:r0,refresh:Ps}}var I0=36161,wf=32854,lv=32855,fv=36194,hv=33189,uv=36168,dv=34041,pv=35907,vv=34836,mv=34842,gv=34843,Da=[];Da[wf]=2,Da[lv]=2,Da[fv]=2,Da[hv]=2,Da[uv]=1,Da[dv]=4,Da[pv]=4,Da[vv]=16,Da[mv]=8,Da[gv]=6;function xv(x,E,O){return Da[x]*E*O}var yw=function(x,E,O,oe,ve){var ee={rgba4:wf,rgb565:fv,"rgb5 a1":lv,depth:hv,stencil:uv,"depth stencil":dv};E.ext_srgb&&(ee.srgba=pv),E.ext_color_buffer_half_float&&(ee.rgba16f=mv,ee.rgb16f=gv),E.webgl_color_buffer_float&&(ee.rgba32f=vv);var re=[];Object.keys(ee).forEach(function(Ne){var Ue=ee[Ne];re[Ue]=Ne});var Le=0,Ce={};function Fe(Ne){this.id=Le++,this.refCount=1,this.renderbuffer=Ne,this.format=wf,this.width=0,this.height=0,ve.profile&&(this.stats={size:0})}Fe.prototype.decRef=function(){--this.refCount<=0&&Pe(this)};function Pe(Ne){var Ue=Ne.renderbuffer;_(Ue,"must not double destroy renderbuffer"),x.bindRenderbuffer(I0,null),x.deleteRenderbuffer(Ue),Ne.renderbuffer=null,Ne.refCount=0,delete Ce[Ne.id],oe.renderbufferCount--}function He(Ne,Ue){var K=new Fe(x.createRenderbuffer());Ce[K.id]=K,oe.renderbufferCount++;function ae(et,we){var nt=0,Ae=0,Be=wf;if(typeof et=="object"&&et){var Me=et;if("shape"in Me){var je=Me.shape;_(Array.isArray(je)&&je.length>=2,"invalid renderbuffer shape"),nt=je[0]|0,Ae=je[1]|0}else"radius"in Me&&(nt=Ae=Me.radius|0),"width"in Me&&(nt=Me.width|0),"height"in Me&&(Ae=Me.height|0);"format"in Me&&(_.parameter(Me.format,ee,"invalid renderbuffer format"),Be=ee[Me.format])}else typeof et=="number"?(nt=et|0,typeof we=="number"?Ae=we|0:Ae=nt):et?_.raise("invalid arguments to renderbuffer constructor"):nt=Ae=1;if(_(nt>0&&Ae>0&&nt<=O.maxRenderbufferSize&&Ae<=O.maxRenderbufferSize,"invalid renderbuffer size"),!(nt===K.width&&Ae===K.height&&Be===K.format))return ae.width=K.width=nt,ae.height=K.height=Ae,K.format=Be,x.bindRenderbuffer(I0,K.renderbuffer),x.renderbufferStorage(I0,Be,nt,Ae),_(x.getError()===0,"invalid render buffer format"),ve.profile&&(K.stats.size=xv(K.format,K.width,K.height)),ae.format=re[K.format],ae}function $e(et,we){var nt=et|0,Ae=we|0||nt;return nt===K.width&&Ae===K.height||(_(nt>0&&Ae>0&&nt<=O.maxRenderbufferSize&&Ae<=O.maxRenderbufferSize,"invalid renderbuffer size"),ae.width=K.width=nt,ae.height=K.height=Ae,x.bindRenderbuffer(I0,K.renderbuffer),x.renderbufferStorage(I0,K.format,nt,Ae),_(x.getError()===0,"invalid render buffer format"),ve.profile&&(K.stats.size=xv(K.format,K.width,K.height))),ae}return ae(Ne,Ue),ae.resize=$e,ae._reglType="renderbuffer",ae._renderbuffer=K,ve.profile&&(ae.stats=K.stats),ae.destroy=function(){K.decRef()},ae}ve.profile&&(oe.getTotalRenderbufferSize=function(){var Ne=0;return Object.keys(Ce).forEach(function(Ue){Ne+=Ce[Ue].stats.size}),Ne});function Ye(){aa(Ce).forEach(function(Ne){Ne.renderbuffer=x.createRenderbuffer(),x.bindRenderbuffer(I0,Ne.renderbuffer),x.renderbufferStorage(I0,Ne.format,Ne.width,Ne.height)}),x.bindRenderbuffer(I0,null)}return{create:He,clear:function(){aa(Ce).forEach(Pe)},restore:Ye}},m0=36160,F1=36161,Ts=3553,_f=34069,yv=36064,bv=36096,wv=36128,_v=33306,Mv=36053,bw=36054,ww=36055,_w=36057,Mw=36061,kw=36193,Sw=5121,Ew=5126,kv=6407,Sv=6408,Aw=6402,zw=[kv,Sv],q1=[];q1[Sv]=4,q1[kv]=3;var Mf=[];Mf[Sw]=1,Mf[Ew]=4,Mf[kw]=2;var Tw=32854,Lw=32855,Nw=36194,Rw=33189,Ow=36168,Ev=34041,Cw=35907,Pw=34836,Iw=34842,$w=34843,Fw=[Tw,Lw,Nw,Cw,Iw,$w,Pw],Mi={};Mi[Mv]="complete",Mi[bw]="incomplete attachment",Mi[_w]="incomplete dimensions",Mi[ww]="incomplete, missing attachment",Mi[Mw]="unsupported";function qw(x,E,O,oe,ve,ee){var re={cur:null,next:null,dirty:!1,setFBO:null},Le=["rgba"],Ce=["rgba4","rgb565","rgb5 a1"];E.ext_srgb&&Ce.push("srgba"),E.ext_color_buffer_half_float&&Ce.push("rgba16f","rgb16f"),E.webgl_color_buffer_float&&Ce.push("rgba32f");var Fe=["uint8"];E.oes_texture_half_float&&Fe.push("half float","float16"),E.oes_texture_float&&Fe.push("float","float32");function Pe(Ke,De,be){this.target=Ke,this.texture=De,this.renderbuffer=be;var Ft=0,Kt=0;De?(Ft=De.width,Kt=De.height):be&&(Ft=be.width,Kt=be.height),this.width=Ft,this.height=Kt}function He(Ke){Ke&&(Ke.texture&&Ke.texture._texture.decRef(),Ke.renderbuffer&&Ke.renderbuffer._renderbuffer.decRef())}function Ye(Ke,De,be){if(Ke)if(Ke.texture){var Ft=Ke.texture._texture,Kt=Math.max(1,Ft.width),ct=Math.max(1,Ft.height);_(Kt===De&&ct===be,"inconsistent width/height for supplied texture"),Ft.refCount+=1}else{var ao=Ke.renderbuffer._renderbuffer;_(ao.width===De&&ao.height===be,"inconsistent width/height for renderbuffer"),ao.refCount+=1}}function Ne(Ke,De){De&&(De.texture?x.framebufferTexture2D(m0,Ke,De.target,De.texture._texture.texture,0):x.framebufferRenderbuffer(m0,Ke,F1,De.renderbuffer._renderbuffer.renderbuffer))}function Ue(Ke){var De=Ts,be=null,Ft=null,Kt=Ke;typeof Ke=="object"&&(Kt=Ke.data,"target"in Ke&&(De=Ke.target|0)),_.type(Kt,"function","invalid attachment data");var ct=Kt._reglType;return ct==="texture2d"?(be=Kt,_(De===Ts)):ct==="textureCube"?(be=Kt,_(De>=_f&&De<_f+6,"invalid cube map target")):ct==="renderbuffer"?(Ft=Kt,De=F1):_.raise("invalid regl object for attachment"),new Pe(De,be,Ft)}function K(Ke,De,be,Ft,Kt){if(be){var ct=oe.create2D({width:Ke,height:De,format:Ft,type:Kt});return ct._texture.refCount=0,new Pe(Ts,ct,null)}else{var ao=ve.create({width:Ke,height:De,format:Ft});return ao._renderbuffer.refCount=0,new Pe(F1,null,ao)}}function ae(Ke){return Ke&&(Ke.texture||Ke.renderbuffer)}function $e(Ke,De,be){Ke&&(Ke.texture?Ke.texture.resize(De,be):Ke.renderbuffer&&Ke.renderbuffer.resize(De,be),Ke.width=De,Ke.height=be)}var et=0,we={};function nt(){this.id=et++,we[this.id]=this,this.framebuffer=x.createFramebuffer(),this.width=0,this.height=0,this.colorAttachments=[],this.depthAttachment=null,this.stencilAttachment=null,this.depthStencilAttachment=null}function Ae(Ke){Ke.colorAttachments.forEach(He),He(Ke.depthAttachment),He(Ke.stencilAttachment),He(Ke.depthStencilAttachment)}function Be(Ke){var De=Ke.framebuffer;_(De,"must not double destroy framebuffer"),x.deleteFramebuffer(De),Ke.framebuffer=null,ee.framebufferCount--,delete we[Ke.id]}function Me(Ke){var De;x.bindFramebuffer(m0,Ke.framebuffer);var be=Ke.colorAttachments;for(De=0;De<be.length;++De)Ne(yv+De,be[De]);for(De=be.length;De<O.maxColorAttachments;++De)x.framebufferTexture2D(m0,yv+De,Ts,null,0);x.framebufferTexture2D(m0,_v,Ts,null,0),x.framebufferTexture2D(m0,bv,Ts,null,0),x.framebufferTexture2D(m0,wv,Ts,null,0),Ne(bv,Ke.depthAttachment),Ne(wv,Ke.stencilAttachment),Ne(_v,Ke.depthStencilAttachment);var Ft=x.checkFramebufferStatus(m0);!x.isContextLost()&&Ft!==Mv&&_.raise("framebuffer configuration not supported, status = "+Mi[Ft]),x.bindFramebuffer(m0,re.next?re.next.framebuffer:null),re.cur=re.next,x.getError()}function je(Ke,De){var be=new nt;ee.framebufferCount++;function Ft(ct,ao){var Ut;_(re.next!==be,"can not update framebuffer which is currently in use");var eo=0,Eo=0,Tn=!0,Wn=!0,ho=null,In=!0,Jo="rgba",Ln="uint8",$n=1,Fn=null,or=null,ur=null,Mn=!1;if(typeof ct=="number")eo=ct|0,Eo=ao|0||eo;else if(!ct)eo=Eo=1;else{_.type(ct,"object","invalid arguments for framebuffer");var Qt=ct;if("shape"in Qt){var dr=Qt.shape;_(Array.isArray(dr)&&dr.length>=2,"invalid shape for framebuffer"),eo=dr[0],Eo=dr[1]}else"radius"in Qt&&(eo=Eo=Qt.radius),"width"in Qt&&(eo=Qt.width),"height"in Qt&&(Eo=Qt.height);("color"in Qt||"colors"in Qt)&&(ho=Qt.color||Qt.colors,Array.isArray(ho)&&_(ho.length===1||E.webgl_draw_buffers,"multiple render targets not supported")),ho||("colorCount"in Qt&&($n=Qt.colorCount|0,_($n>0,"invalid color buffer count")),"colorTexture"in Qt&&(In=!!Qt.colorTexture,Jo="rgba4"),"colorType"in Qt&&(Ln=Qt.colorType,In?(_(E.oes_texture_float||!(Ln==="float"||Ln==="float32"),"you must enable OES_texture_float in order to use floating point framebuffer objects"),_(E.oes_texture_half_float||!(Ln==="half float"||Ln==="float16"),"you must enable OES_texture_half_float in order to use 16-bit floating point framebuffer objects")):Ln==="half float"||Ln==="float16"?(_(E.ext_color_buffer_half_float,"you must enable EXT_color_buffer_half_float to use 16-bit render buffers"),Jo="rgba16f"):(Ln==="float"||Ln==="float32")&&(_(E.webgl_color_buffer_float,"you must enable WEBGL_color_buffer_float in order to use 32-bit floating point renderbuffers"),Jo="rgba32f"),_.oneOf(Ln,Fe,"invalid color type")),"colorFormat"in Qt&&(Jo=Qt.colorFormat,Le.indexOf(Jo)>=0?In=!0:Ce.indexOf(Jo)>=0?In=!1:In?_.oneOf(Qt.colorFormat,Le,"invalid color format for texture"):_.oneOf(Qt.colorFormat,Ce,"invalid color format for renderbuffer"))),("depthTexture"in Qt||"depthStencilTexture"in Qt)&&(Mn=!!(Qt.depthTexture||Qt.depthStencilTexture),_(!Mn||E.webgl_depth_texture,"webgl_depth_texture extension not supported")),"depth"in Qt&&(typeof Qt.depth=="boolean"?Tn=Qt.depth:(Fn=Qt.depth,Wn=!1)),"stencil"in Qt&&(typeof Qt.stencil=="boolean"?Wn=Qt.stencil:(or=Qt.stencil,Tn=!1)),"depthStencil"in Qt&&(typeof Qt.depthStencil=="boolean"?Tn=Wn=Qt.depthStencil:(ur=Qt.depthStencil,Tn=!1,Wn=!1))}var Ro=null,Rt=null,lo=null,yo=null;if(Array.isArray(ho))Ro=ho.map(Ue);else if(ho)Ro=[Ue(ho)];else for(Ro=new Array($n),Ut=0;Ut<$n;++Ut)Ro[Ut]=K(eo,Eo,In,Jo,Ln);_(E.webgl_draw_buffers||Ro.length<=1,"you must enable the WEBGL_draw_buffers extension in order to use multiple color buffers."),_(Ro.length<=O.maxColorAttachments,"too many color attachments, not supported"),eo=eo||Ro[0].width,Eo=Eo||Ro[0].height,Fn?Rt=Ue(Fn):Tn&&!Wn&&(Rt=K(eo,Eo,Mn,"depth","uint32")),or?lo=Ue(or):Wn&&!Tn&&(lo=K(eo,Eo,!1,"stencil","uint8")),ur?yo=Ue(ur):!Fn&&!or&&Wn&&Tn&&(yo=K(eo,Eo,Mn,"depth stencil","depth stencil")),_(!!Fn+!!or+!!ur<=1,"invalid framebuffer configuration, can specify exactly one depth/stencil attachment");var kn=null;for(Ut=0;Ut<Ro.length;++Ut)if(Ye(Ro[Ut],eo,Eo),_(!Ro[Ut]||Ro[Ut].texture&&zw.indexOf(Ro[Ut].texture._texture.format)>=0||Ro[Ut].renderbuffer&&Fw.indexOf(Ro[Ut].renderbuffer._renderbuffer.format)>=0,"framebuffer color attachment "+Ut+" is invalid"),Ro[Ut]&&Ro[Ut].texture){var r0=q1[Ro[Ut].texture._texture.format]*Mf[Ro[Ut].texture._texture.type];kn===null?kn=r0:_(kn===r0,"all color attachments much have the same number of bits per pixel.")}return Ye(Rt,eo,Eo),_(!Rt||Rt.texture&&Rt.texture._texture.format===Aw||Rt.renderbuffer&&Rt.renderbuffer._renderbuffer.format===Rw,"invalid depth attachment for framebuffer object"),Ye(lo,eo,Eo),_(!lo||lo.renderbuffer&&lo.renderbuffer._renderbuffer.format===Ow,"invalid stencil attachment for framebuffer object"),Ye(yo,eo,Eo),_(!yo||yo.texture&&yo.texture._texture.format===Ev||yo.renderbuffer&&yo.renderbuffer._renderbuffer.format===Ev,"invalid depth-stencil attachment for framebuffer object"),Ae(be),be.width=eo,be.height=Eo,be.colorAttachments=Ro,be.depthAttachment=Rt,be.stencilAttachment=lo,be.depthStencilAttachment=yo,Ft.color=Ro.map(ae),Ft.depth=ae(Rt),Ft.stencil=ae(lo),Ft.depthStencil=ae(yo),Ft.width=be.width,Ft.height=be.height,Me(be),Ft}function Kt(ct,ao){_(re.next!==be,"can not resize a framebuffer which is currently in use");var Ut=Math.max(ct|0,1),eo=Math.max(ao|0||Ut,1);if(Ut===be.width&&eo===be.height)return Ft;for(var Eo=be.colorAttachments,Tn=0;Tn<Eo.length;++Tn)$e(Eo[Tn],Ut,eo);return $e(be.depthAttachment,Ut,eo),$e(be.stencilAttachment,Ut,eo),$e(be.depthStencilAttachment,Ut,eo),be.width=Ft.width=Ut,be.height=Ft.height=eo,Me(be),Ft}return Ft(Ke,De),t(Ft,{resize:Kt,_reglType:"framebuffer",_framebuffer:be,destroy:function(){Be(be),Ae(be)},use:function(ct){re.setFBO({framebuffer:Ft},ct)}})}function At(Ke){var De=Array(6);function be(Kt){var ct;_(De.indexOf(re.next)<0,"can not update framebuffer which is currently in use");var ao={color:null},Ut=0,eo=null,Eo="rgba",Tn="uint8",Wn=1;if(typeof Kt=="number")Ut=Kt|0;else if(!Kt)Ut=1;else{_.type(Kt,"object","invalid arguments for framebuffer");var ho=Kt;if("shape"in ho){var In=ho.shape;_(Array.isArray(In)&&In.length>=2,"invalid shape for framebuffer"),_(In[0]===In[1],"cube framebuffer must be square"),Ut=In[0]}else"radius"in ho&&(Ut=ho.radius|0),"width"in ho?(Ut=ho.width|0,"height"in ho&&_(ho.height===Ut,"must be square")):"height"in ho&&(Ut=ho.height|0);("color"in ho||"colors"in ho)&&(eo=ho.color||ho.colors,Array.isArray(eo)&&_(eo.length===1||E.webgl_draw_buffers,"multiple render targets not supported")),eo||("colorCount"in ho&&(Wn=ho.colorCount|0,_(Wn>0,"invalid color buffer count")),"colorType"in ho&&(_.oneOf(ho.colorType,Fe,"invalid color type"),Tn=ho.colorType),"colorFormat"in ho&&(Eo=ho.colorFormat,_.oneOf(ho.colorFormat,Le,"invalid color format for texture"))),"depth"in ho&&(ao.depth=ho.depth),"stencil"in ho&&(ao.stencil=ho.stencil),"depthStencil"in ho&&(ao.depthStencil=ho.depthStencil)}var Jo;if(eo)if(Array.isArray(eo))for(Jo=[],ct=0;ct<eo.length;++ct)Jo[ct]=eo[ct];else Jo=[eo];else{Jo=Array(Wn);var Ln={radius:Ut,format:Eo,type:Tn};for(ct=0;ct<Wn;++ct)Jo[ct]=oe.createCube(Ln)}for(ao.color=Array(Jo.length),ct=0;ct<Jo.length;++ct){var $n=Jo[ct];_(typeof $n=="function"&&$n._reglType==="textureCube","invalid cube map"),Ut=Ut||$n.width,_($n.width===Ut&&$n.height===Ut,"invalid cube map shape"),ao.color[ct]={target:_f,data:Jo[ct]}}for(ct=0;ct<6;++ct){for(var Fn=0;Fn<Jo.length;++Fn)ao.color[Fn].target=_f+ct;ct>0&&(ao.depth=De[0].depth,ao.stencil=De[0].stencil,ao.depthStencil=De[0].depthStencil),De[ct]?De[ct](ao):De[ct]=je(ao)}return t(be,{width:Ut,height:Ut,color:Jo})}function Ft(Kt){var ct,ao=Kt|0;if(_(ao>0&&ao<=O.maxCubeMapSize,"invalid radius for cube fbo"),ao===be.width)return be;var Ut=be.color;for(ct=0;ct<Ut.length;++ct)Ut[ct].resize(ao);for(ct=0;ct<6;++ct)De[ct].resize(ao);return be.width=be.height=ao,be}return be(Ke),t(be,{faces:De,resize:Ft,_reglType:"framebufferCube",destroy:function(){De.forEach(function(Kt){Kt.destroy()})}})}function Gt(){re.cur=null,re.next=null,re.dirty=!0,aa(we).forEach(function(Ke){Ke.framebuffer=x.createFramebuffer(),Me(Ke)})}return t(re,{getFramebuffer:function(Ke){if(typeof Ke=="function"&&Ke._reglType==="framebuffer"){var De=Ke._framebuffer;if(De instanceof nt)return De}return null},create:je,createCube:At,clear:function(){aa(we).forEach(Be)},restore:Gt})}var Dw=5126,Av=34962;function D1(){this.state=0,this.x=0,this.y=0,this.z=0,this.w=0,this.buffer=null,this.size=0,this.normalized=!1,this.type=Dw,this.offset=0,this.stride=0,this.divisor=0}function Gw(x,E,O,oe,ve){for(var ee=O.maxAttributes,re=new Array(ee),Le=0;Le<ee;++Le)re[Le]=new D1;var Ce=0,Fe={},Pe={Record:D1,scope:{},state:re,currentVAO:null,targetVAO:null,restore:Ye()?we:function(){},createVAO:nt,getVAO:Ue,destroyBuffer:He,setVAO:Ye()?K:ae,clear:Ye()?$e:function(){}};function He(Ae){for(var Be=0;Be<re.length;++Be){var Me=re[Be];Me.buffer===Ae&&(x.disableVertexAttribArray(Be),Me.buffer=null)}}function Ye(){return E.oes_vertex_array_object}function Ne(){return E.angle_instanced_arrays}function Ue(Ae){return typeof Ae=="function"&&Ae._vao?Ae._vao:null}function K(Ae){if(Ae!==Pe.currentVAO){var Be=Ye();Ae?Be.bindVertexArrayOES(Ae.vao):Be.bindVertexArrayOES(null),Pe.currentVAO=Ae}}function ae(Ae){if(Ae!==Pe.currentVAO){if(Ae)Ae.bindAttrs();else for(var Be=Ne(),Me=0;Me<re.length;++Me){var je=re[Me];je.buffer?(x.enableVertexAttribArray(Me),x.vertexAttribPointer(Me,je.size,je.type,je.normalized,je.stride,je.offfset),Be&&je.divisor&&Be.vertexAttribDivisorANGLE(Me,je.divisor)):(x.disableVertexAttribArray(Me),x.vertexAttrib4f(Me,je.x,je.y,je.z,je.w))}Pe.currentVAO=Ae}}function $e(){aa(Fe).forEach(function(Ae){Ae.destroy()})}function et(){this.id=++Ce,this.attributes=[];var Ae=Ye();Ae?this.vao=Ae.createVertexArrayOES():this.vao=null,Fe[this.id]=this,this.buffers=[]}et.prototype.bindAttrs=function(){for(var Ae=Ne(),Be=this.attributes,Me=0;Me<Be.length;++Me){var je=Be[Me];je.buffer?(x.enableVertexAttribArray(Me),x.bindBuffer(Av,je.buffer.buffer),x.vertexAttribPointer(Me,je.size,je.type,je.normalized,je.stride,je.offset),Ae&&je.divisor&&Ae.vertexAttribDivisorANGLE(Me,je.divisor)):(x.disableVertexAttribArray(Me),x.vertexAttrib4f(Me,je.x,je.y,je.z,je.w))}for(var At=Be.length;At<ee;++At)x.disableVertexAttribArray(At)},et.prototype.refresh=function(){var Ae=Ye();Ae&&(Ae.bindVertexArrayOES(this.vao),this.bindAttrs(),Pe.currentVAO=this)},et.prototype.destroy=function(){if(this.vao){var Ae=Ye();this===Pe.currentVAO&&(Pe.currentVAO=null,Ae.bindVertexArrayOES(null)),Ae.deleteVertexArrayOES(this.vao),this.vao=null}Fe[this.id]&&(delete Fe[this.id],oe.vaoCount-=1)};function we(){var Ae=Ye();Ae&&aa(Fe).forEach(function(Be){Be.refresh()})}function nt(Ae){var Be=new et;oe.vaoCount+=1;function Me(je){_(Array.isArray(je),"arguments to vertex array constructor must be an array"),_(je.length<ee,"too many attributes"),_(je.length>0,"must specify at least one attribute");var At={},Gt=Be.attributes;Gt.length=je.length;for(var Ke=0;Ke<je.length;++Ke){var De=je[Ke],be=Gt[Ke]=new D1,Ft=De.data||De;if(Array.isArray(Ft)||e(Ft)||qa(Ft)){var Kt;Be.buffers[Ke]&&(Kt=Be.buffers[Ke],e(Ft)&&Kt._buffer.byteLength>=Ft.byteLength?Kt.subdata(Ft):(Kt.destroy(),Be.buffers[Ke]=null)),Be.buffers[Ke]||(Kt=Be.buffers[Ke]=ve.create(De,Av,!1,!0)),be.buffer=ve.getBuffer(Kt),be.size=be.buffer.dimension|0,be.normalized=!1,be.type=be.buffer.dtype,be.offset=0,be.stride=0,be.divisor=0,be.state=1,At[Ke]=1}else ve.getBuffer(De)?(be.buffer=ve.getBuffer(De),be.size=be.buffer.dimension|0,be.normalized=!1,be.type=be.buffer.dtype,be.offset=0,be.stride=0,be.divisor=0,be.state=1):ve.getBuffer(De.buffer)?(be.buffer=ve.getBuffer(De.buffer),be.size=(+De.size||be.buffer.dimension)|0,be.normalized=!!De.normalized||!1,"type"in De?(_.parameter(De.type,Ss,"invalid buffer type"),be.type=Ss[De.type]):be.type=be.buffer.dtype,be.offset=(De.offset||0)|0,be.stride=(De.stride||0)|0,be.divisor=(De.divisor||0)|0,be.state=1,_(be.size>=1&&be.size<=4,"size must be between 1 and 4"),_(be.offset>=0,"invalid offset"),_(be.stride>=0&&be.stride<=255,"stride must be between 0 and 255"),_(be.divisor>=0,"divisor must be positive"),_(!be.divisor||!!E.angle_instanced_arrays,"ANGLE_instanced_arrays must be enabled to use divisor")):"x"in De?(_(Ke>0,"first attribute must not be a constant"),be.x=+De.x||0,be.y=+De.y||0,be.z=+De.z||0,be.w=+De.w||0,be.state=2):_(!1,"invalid attribute spec for location "+Ke)}for(var ct=0;ct<Be.buffers.length;++ct)!At[ct]&&Be.buffers[ct]&&(Be.buffers[ct].destroy(),Be.buffers[ct]=null);return Be.refresh(),Me}return Me.destroy=function(){for(var je=0;je<Be.buffers.length;++je)Be.buffers[je]&&Be.buffers[je].destroy();Be.buffers.length=0,Be.destroy()},Me._vao=Be,Me._reglType="vao",Me(Ae)}return Pe}var zv=35632,Hw=35633,Uw=35718,Bw=35721;function jw(x,E,O,oe){var ve={},ee={};function re(K,ae,$e,et){this.name=K,this.id=ae,this.location=$e,this.info=et}function Le(K,ae){for(var $e=0;$e<K.length;++$e)if(K[$e].id===ae.id){K[$e].location=ae.location;return}K.push(ae)}function Ce(K,ae,$e){var et=K===zv?ve:ee,we=et[ae];if(!we){var nt=E.str(ae);we=x.createShader(K),x.shaderSource(we,nt),x.compileShader(we),_.shaderError(x,we,nt,K,$e),et[ae]=we}return we}var Fe={},Pe=[],He=0;function Ye(K,ae){this.id=He++,this.fragId=K,this.vertId=ae,this.program=null,this.uniforms=[],this.attributes=[],this.refCount=1,oe.profile&&(this.stats={uniformsCount:0,attributesCount:0})}function Ne(K,ae,$e){var et,we,nt=Ce(zv,K.fragId),Ae=Ce(Hw,K.vertId),Be=K.program=x.createProgram();if(x.attachShader(Be,nt),x.attachShader(Be,Ae),$e)for(et=0;et<$e.length;++et){var Me=$e[et];x.bindAttribLocation(Be,Me[0],Me[1])}x.linkProgram(Be),_.linkError(x,Be,E.str(K.fragId),E.str(K.vertId),ae);var je=x.getProgramParameter(Be,Uw);oe.profile&&(K.stats.uniformsCount=je);var At=K.uniforms;for(et=0;et<je;++et)if(we=x.getActiveUniform(Be,et),we)if(we.size>1)for(var Gt=0;Gt<we.size;++Gt){var Ke=we.name.replace("[0]","["+Gt+"]");Le(At,new re(Ke,E.id(Ke),x.getUniformLocation(Be,Ke),we))}else Le(At,new re(we.name,E.id(we.name),x.getUniformLocation(Be,we.name),we));var De=x.getProgramParameter(Be,Bw);oe.profile&&(K.stats.attributesCount=De);var be=K.attributes;for(et=0;et<De;++et)we=x.getActiveAttrib(Be,et),we&&Le(be,new re(we.name,E.id(we.name),x.getAttribLocation(Be,we.name),we))}oe.profile&&(O.getMaxUniformsCount=function(){var K=0;return Pe.forEach(function(ae){ae.stats.uniformsCount>K&&(K=ae.stats.uniformsCount)}),K},O.getMaxAttributesCount=function(){var K=0;return Pe.forEach(function(ae){ae.stats.attributesCount>K&&(K=ae.stats.attributesCount)}),K});function Ue(){ve={},ee={};for(var K=0;K<Pe.length;++K)Ne(Pe[K],null,Pe[K].attributes.map(function(ae){return[ae.location,ae.name]}))}return{clear:function(){var K=x.deleteShader.bind(x);aa(ve).forEach(K),ve={},aa(ee).forEach(K),ee={},Pe.forEach(function(ae){x.deleteProgram(ae.program)}),Pe.length=0,Fe={},O.shaderCount=0},program:function(K,ae,$e,et){_.command(K>=0,"missing vertex shader",$e),_.command(ae>=0,"missing fragment shader",$e);var we=Fe[ae];we||(we=Fe[ae]={});var nt=we[K];if(nt&&(nt.refCount++,!et))return nt;var Ae=new Ye(ae,K);return O.shaderCount++,Ne(Ae,$e,et),nt||(we[K]=Ae),Pe.push(Ae),t(Ae,{destroy:function(){if(Ae.refCount--,Ae.refCount<=0){x.deleteProgram(Ae.program);var Be=Pe.indexOf(Ae);Pe.splice(Be,1),O.shaderCount--}we[Ae.vertId].refCount<=0&&(x.deleteShader(ee[Ae.vertId]),delete ee[Ae.vertId],delete Fe[Ae.fragId][Ae.vertId]),Object.keys(Fe[Ae.fragId]).length||(x.deleteShader(ve[Ae.fragId]),delete ve[Ae.fragId],delete Fe[Ae.fragId])}})},restore:Ue,shader:Ce,frag:-1,vert:-1}}var Ww=6408,Uc=5121,Vw=3333,kf=5126;function Xw(x,E,O,oe,ve,ee,re){function Le(Pe){var He;E.next===null?(_(ve.preserveDrawingBuffer,'you must create a webgl context with "preserveDrawingBuffer":true in order to read pixels from the drawing buffer'),He=Uc):(_(E.next.colorAttachments[0].texture!==null,"You cannot read from a renderbuffer"),He=E.next.colorAttachments[0].texture._texture.type,ee.oes_texture_float?(_(He===Uc||He===kf,"Reading from a framebuffer is only allowed for the types 'uint8' and 'float'"),He===kf&&_(re.readFloat,"Reading 'float' values is not permitted in your browser. For a fallback, please see: https://www.npmjs.com/package/glsl-read-float")):_(He===Uc,"Reading from a framebuffer is only allowed for the type 'uint8'"));var Ye=0,Ne=0,Ue=oe.framebufferWidth,K=oe.framebufferHeight,ae=null;e(Pe)?ae=Pe:Pe&&(_.type(Pe,"object","invalid arguments to regl.read()"),Ye=Pe.x|0,Ne=Pe.y|0,_(Ye>=0&&Ye<oe.framebufferWidth,"invalid x offset for regl.read"),_(Ne>=0&&Ne<oe.framebufferHeight,"invalid y offset for regl.read"),Ue=(Pe.width||oe.framebufferWidth-Ye)|0,K=(Pe.height||oe.framebufferHeight-Ne)|0,ae=Pe.data||null),ae&&(He===Uc?_(ae instanceof Uint8Array,"buffer must be 'Uint8Array' when reading from a framebuffer of type 'uint8'"):He===kf&&_(ae instanceof Float32Array,"buffer must be 'Float32Array' when reading from a framebuffer of type 'float'")),_(Ue>0&&Ue+Ye<=oe.framebufferWidth,"invalid width for read pixels"),_(K>0&&K+Ne<=oe.framebufferHeight,"invalid height for read pixels"),O();var $e=Ue*K*4;return ae||(He===Uc?ae=new Uint8Array($e):He===kf&&(ae=ae||new Float32Array($e))),_.isTypedArray(ae,"data buffer for regl.read() must be a typedarray"),_(ae.byteLength>=$e,"data buffer for regl.read() too small"),x.pixelStorei(Vw,4),x.readPixels(Ye,Ne,Ue,K,Ww,He,ae),ae}function Ce(Pe){var He;return E.setFBO({framebuffer:Pe.framebuffer},function(){He=Le(Pe)}),He}function Fe(Pe){return!Pe||!("framebuffer"in Pe)?Le(Pe):Ce(Pe)}return Fe}function ki(x){return Array.prototype.slice.call(x)}function Si(x){return ki(x).join("")}function Yw(){var x=0,E=[],O=[];function oe(He){for(var Ye=0;Ye<O.length;++Ye)if(O[Ye]===He)return E[Ye];var Ne="g"+x++;return E.push(Ne),O.push(He),Ne}function ve(){var He=[];function Ye(){He.push.apply(He,ki(arguments))}var Ne=[];function Ue(){var K="v"+x++;return Ne.push(K),arguments.length>0&&(He.push(K,"="),He.push.apply(He,ki(arguments)),He.push(";")),K}return t(Ye,{def:Ue,toString:function(){return Si([Ne.length>0?"var "+Ne.join(",")+";":"",Si(He)])}})}function ee(){var He=ve(),Ye=ve(),Ne=He.toString,Ue=Ye.toString;function K(ae,$e){Ye(ae,$e,"=",He.def(ae,$e),";")}return t(function(){He.apply(He,ki(arguments))},{def:He.def,entry:He,exit:Ye,save:K,set:function(ae,$e,et){K(ae,$e),He(ae,$e,"=",et,";")},toString:function(){return Ne()+Ue()}})}function re(){var He=Si(arguments),Ye=ee(),Ne=ee(),Ue=Ye.toString,K=Ne.toString;return t(Ye,{then:function(){return Ye.apply(Ye,ki(arguments)),this},else:function(){return Ne.apply(Ne,ki(arguments)),this},toString:function(){var ae=K();return ae&&(ae="else{"+ae+"}"),Si(["if(",He,"){",Ue(),"}",ae])}})}var Le=ve(),Ce={};function Fe(He,Ye){var Ne=[];function Ue(){var we="a"+Ne.length;return Ne.push(we),we}Ye=Ye||0;for(var K=0;K<Ye;++K)Ue();var ae=ee(),$e=ae.toString,et=Ce[He]=t(ae,{arg:Ue,toString:function(){return Si(["function(",Ne.join(),"){",$e(),"}"])}});return et}function Pe(){var He=['"use strict";',Le,"return {"];Object.keys(Ce).forEach(function(Ue){He.push('"',Ue,'":',Ce[Ue].toString(),",")}),He.push("}");var Ye=Si(He).replace(/;/g,`;
`).replace(/}/g,`}
`).replace(/{/g,`{
`),Ne=Function.apply(null,E.concat(Ye));return Ne.apply(null,O)}return{global:Le,link:oe,block:ve,proc:Fe,scope:ee,cond:re,compile:Pe}}var Ei="xyzw".split(""),Tv=5121,Ai=1,G1=2,H1=0,U1=1,B1=2,j1=3,Sf=4,Lv=5,Nv=6,Rv="dither",Ov="blend.enable",Cv="blend.color",W1="blend.equation",V1="blend.func",Pv="depth.enable",Iv="depth.func",$v="depth.range",Fv="depth.mask",X1="colorMask",qv="cull.enable",Dv="cull.face",Y1="frontFace",K1="lineWidth",Gv="polygonOffset.enable",Q1="polygonOffset.offset",Hv="sample.alpha",Uv="sample.enable",Z1="sample.coverage",Bv="stencil.enable",jv="stencil.mask",J1="stencil.func",eu="stencil.opFront",Bc="stencil.opBack",Wv="scissor.enable",Ef="scissor.box",g0="viewport",jc="profile",Ls="framebuffer",Wc="vert",Vc="frag",Ns="elements",Rs="primitive",Os="count",Af="offset",zf="instances",Xc="vao",tu="Width",ou="Height",zi=Ls+tu,Ti=Ls+ou,Kw=g0+tu,Qw=g0+ou,Vv="drawingBuffer",Xv=Vv+tu,Yv=Vv+ou,Zw=[V1,W1,J1,eu,Bc,Z1,g0,Ef,Q1],Li=34962,Jw=34963,e4=35632,t4=35633,Kv=3553,o4=34067,n4=2884,r4=3042,a4=3024,s4=2960,i4=2929,c4=3089,l4=32823,f4=32926,h4=32928,nu=5126,Tf=35664,Lf=35665,Nf=35666,ru=5124,Rf=35667,Of=35668,Cf=35669,au=35670,Pf=35671,If=35672,$f=35673,Yc=35674,Kc=35675,Qc=35676,Zc=35678,Jc=35680,Qv=4,el=1028,Cs=1029,Zv=2304,su=2305,u4=32775,d4=32776,p4=519,$0=7680,Jv=0,em=1,tm=32774,v4=513,om=36160,m4=36064,n0={0:0,1:1,zero:0,one:1,"src color":768,"one minus src color":769,"src alpha":770,"one minus src alpha":771,"dst color":774,"one minus dst color":775,"dst alpha":772,"one minus dst alpha":773,"constant color":32769,"one minus constant color":32770,"constant alpha":32771,"one minus constant alpha":32772,"src alpha saturate":776},nm=["constant color, constant alpha","one minus constant color, constant alpha","constant color, one minus constant alpha","one minus constant color, one minus constant alpha","constant alpha, constant color","constant alpha, one minus constant color","one minus constant alpha, constant color","one minus constant alpha, one minus constant color"],Ni={never:512,less:513,"<":513,equal:514,"=":514,"==":514,"===":514,lequal:515,"<=":515,greater:516,">":516,notequal:517,"!=":517,"!==":517,gequal:518,">=":518,always:519},F0={0:0,zero:0,keep:7680,replace:7681,increment:7682,decrement:7683,"increment wrap":34055,"decrement wrap":34056,invert:5386},rm={frag:e4,vert:t4},iu={cw:Zv,ccw:su};function Ff(x){return Array.isArray(x)||e(x)||qa(x)}function am(x){return x.sort(function(E,O){return E===g0?-1:O===g0?1:E<O?-1:1})}function Rr(x,E,O,oe){this.thisDep=x,this.contextDep=E,this.propDep=O,this.append=oe}function q0(x){return x&&!(x.thisDep||x.contextDep||x.propDep)}function zn(x){return new Rr(!1,!1,!1,x)}function Xr(x,E){var O=x.type;if(O===H1){var oe=x.data.length;return new Rr(!0,oe>=1,oe>=2,E)}else if(O===Sf){var ve=x.data;return new Rr(ve.thisDep,ve.contextDep,ve.propDep,E)}else{if(O===Lv)return new Rr(!1,!1,!1,E);if(O===Nv){for(var ee=!1,re=!1,Le=!1,Ce=0;Ce<x.data.length;++Ce){var Fe=x.data[Ce];if(Fe.type===U1)Le=!0;else if(Fe.type===B1)re=!0;else if(Fe.type===j1)ee=!0;else if(Fe.type===H1){ee=!0;var Pe=Fe.data;Pe>=1&&(re=!0),Pe>=2&&(Le=!0)}else Fe.type===Sf&&(ee=ee||Fe.data.thisDep,re=re||Fe.data.contextDep,Le=Le||Fe.data.propDep)}return new Rr(ee,re,Le,E)}else return new Rr(O===j1,O===B1,O===U1,E)}}var sm=new Rr(!1,!1,!1,function(){});function g4(x,E,O,oe,ve,ee,re,Le,Ce,Fe,Pe,He,Ye,Ne,Ue){var K=Fe.Record,ae={add:32774,subtract:32778,"reverse subtract":32779};O.ext_blend_minmax&&(ae.min=u4,ae.max=d4);var $e=O.angle_instanced_arrays,et=O.webgl_draw_buffers,we={dirty:!0,profile:Ue.profile},nt={},Ae=[],Be={},Me={};function je(T){return T.replace(".","_")}function At(T,S,$){var W=je(T);Ae.push(T),nt[W]=we[W]=!!$,Be[W]=S}function Gt(T,S,$){var W=je(T);Ae.push(T),Array.isArray($)?(we[W]=$.slice(),nt[W]=$.slice()):we[W]=nt[W]=$,Me[W]=S}At(Rv,a4),At(Ov,r4),Gt(Cv,"blendColor",[0,0,0,0]),Gt(W1,"blendEquationSeparate",[tm,tm]),Gt(V1,"blendFuncSeparate",[em,Jv,em,Jv]),At(Pv,i4,!0),Gt(Iv,"depthFunc",v4),Gt($v,"depthRange",[0,1]),Gt(Fv,"depthMask",!0),Gt(X1,X1,[!0,!0,!0,!0]),At(qv,n4),Gt(Dv,"cullFace",Cs),Gt(Y1,Y1,su),Gt(K1,K1,1),At(Gv,l4),Gt(Q1,"polygonOffset",[0,0]),At(Hv,f4),At(Uv,h4),Gt(Z1,"sampleCoverage",[1,!1]),At(Bv,s4),Gt(jv,"stencilMask",-1),Gt(J1,"stencilFunc",[p4,0,-1]),Gt(eu,"stencilOpSeparate",[el,$0,$0,$0]),Gt(Bc,"stencilOpSeparate",[Cs,$0,$0,$0]),At(Wv,c4),Gt(Ef,"scissor",[0,0,x.drawingBufferWidth,x.drawingBufferHeight]),Gt(g0,g0,[0,0,x.drawingBufferWidth,x.drawingBufferHeight]);var Ke={gl:x,context:Ye,strings:E,next:nt,current:we,draw:He,elements:ee,buffer:ve,shader:Pe,attributes:Fe.state,vao:Fe,uniforms:Ce,framebuffer:Le,extensions:O,timer:Ne,isBufferArgs:Ff},De={primTypes:mi,compareFuncs:Ni,blendFuncs:n0,blendEquations:ae,stencilOps:F0,glTypes:Ss,orientationType:iu};_.optional(function(){Ke.isArrayLike=_n}),et&&(De.backBuffer=[Cs],De.drawBuffer=to(oe.maxDrawbuffers,function(T){return T===0?[0]:to(T,function(S){return m4+S})}));var be=0;function Ft(){var T=Yw(),S=T.link,$=T.global;T.id=be++,T.batchId="0";var W=S(Ke),Q=T.shared={props:"a0"};Object.keys(Ke).forEach(function(C){Q[C]=$.def(W,".",C)}),_.optional(function(){T.CHECK=S(_),T.commandStr=_.guessCommand(),T.command=S(T.commandStr),T.assert=function(C,A,B){C("if(!(",A,"))",this.CHECK,".commandRaise(",S(B),",",this.command,");")},De.invalidBlendCombinations=nm});var q=T.next={},F=T.current={};Object.keys(Me).forEach(function(C){Array.isArray(we[C])&&(q[C]=$.def(Q.next,".",C),F[C]=$.def(Q.current,".",C))});var H=T.constants={};Object.keys(De).forEach(function(C){H[C]=$.def(JSON.stringify(De[C]))}),T.invoke=function(C,A){switch(A.type){case H1:var B=["this",Q.context,Q.props,T.batchId];return C.def(S(A.data),".call(",B.slice(0,Math.max(A.data.length+1,4)),")");case U1:return C.def(Q.props,A.data);case B1:return C.def(Q.context,A.data);case j1:return C.def("this",A.data);case Sf:return A.data.append(T,C),A.data.ref;case Lv:return A.data.toString();case Nv:return A.data.map(function(Z){return T.invoke(C,Z)})}},T.attribCache={};var L={};return T.scopeAttrib=function(C){var A=E.id(C);if(A in L)return L[A];var B=Fe.scope[A];B||(B=Fe.scope[A]=new K);var Z=L[A]=S(B);return Z},T}function Kt(T){var S=T.static,$=T.dynamic,W;if(jc in S){var Q=!!S[jc];W=zn(function(F,H){return Q}),W.enable=Q}else if(jc in $){var q=$[jc];W=Xr(q,function(F,H){return F.invoke(H,q)})}return W}function ct(T,S){var $=T.static,W=T.dynamic;if(Ls in $){var Q=$[Ls];return Q?(Q=Le.getFramebuffer(Q),_.command(Q,"invalid framebuffer object"),zn(function(F,H){var L=F.link(Q),C=F.shared;H.set(C.framebuffer,".next",L);var A=C.context;return H.set(A,"."+zi,L+".width"),H.set(A,"."+Ti,L+".height"),L})):zn(function(F,H){var L=F.shared;H.set(L.framebuffer,".next","null");var C=L.context;return H.set(C,"."+zi,C+"."+Xv),H.set(C,"."+Ti,C+"."+Yv),"null"})}else if(Ls in W){var q=W[Ls];return Xr(q,function(F,H){var L=F.invoke(H,q),C=F.shared,A=C.framebuffer,B=H.def(A,".getFramebuffer(",L,")");_.optional(function(){F.assert(H,"!"+L+"||"+B,"invalid framebuffer object")}),H.set(A,".next",B);var Z=C.context;return H.set(Z,"."+zi,B+"?"+B+".width:"+Z+"."+Xv),H.set(Z,"."+Ti,B+"?"+B+".height:"+Z+"."+Yv),B})}else return null}function ao(T,S,$){var W=T.static,Q=T.dynamic;function q(L){if(L in W){var C=W[L];_.commandType(C,"object","invalid "+L,$.commandStr);var A=!0,B=C.x|0,Z=C.y|0,fe,me;return"width"in C?(fe=C.width|0,_.command(fe>=0,"invalid "+L,$.commandStr)):A=!1,"height"in C?(me=C.height|0,_.command(me>=0,"invalid "+L,$.commandStr)):A=!1,new Rr(!A&&S&&S.thisDep,!A&&S&&S.contextDep,!A&&S&&S.propDep,function(yt,Zt){var lt=yt.shared.context,Ot=fe;"width"in C||(Ot=Zt.def(lt,".",zi,"-",B));var Bt=me;return"height"in C||(Bt=Zt.def(lt,".",Ti,"-",Z)),[B,Z,Ot,Bt]})}else if(L in Q){var se=Q[L],Ie=Xr(se,function(yt,Zt){var lt=yt.invoke(Zt,se);_.optional(function(){yt.assert(Zt,lt+"&&typeof "+lt+'==="object"',"invalid "+L)});var Ot=yt.shared.context,Bt=Zt.def(lt,".x|0"),Ao=Zt.def(lt,".y|0"),gn=Zt.def('"width" in ',lt,"?",lt,".width|0:","(",Ot,".",zi,"-",Bt,")"),Or=Zt.def('"height" in ',lt,"?",lt,".height|0:","(",Ot,".",Ti,"-",Ao,")");return _.optional(function(){yt.assert(Zt,gn+">=0&&"+Or+">=0","invalid "+L)}),[Bt,Ao,gn,Or]});return S&&(Ie.thisDep=Ie.thisDep||S.thisDep,Ie.contextDep=Ie.contextDep||S.contextDep,Ie.propDep=Ie.propDep||S.propDep),Ie}else return S?new Rr(S.thisDep,S.contextDep,S.propDep,function(yt,Zt){var lt=yt.shared.context;return[0,0,Zt.def(lt,".",zi),Zt.def(lt,".",Ti)]}):null}var F=q(g0);if(F){var H=F;F=new Rr(F.thisDep,F.contextDep,F.propDep,function(L,C){var A=H.append(L,C),B=L.shared.context;return C.set(B,"."+Kw,A[2]),C.set(B,"."+Qw,A[3]),A})}return{viewport:F,scissor_box:q(Ef)}}function Ut(T,S){var $=T.static,W=typeof $[Vc]=="string"&&typeof $[Wc]=="string";if(W){if(Object.keys(S.dynamic).length>0)return null;var Q=S.static,q=Object.keys(Q);if(q.length>0&&typeof Q[q[0]]=="number"){for(var F=[],H=0;H<q.length;++H)_(typeof Q[q[H]]=="number","must specify all vertex attribute locations when using vaos"),F.push([Q[q[H]]|0,q[H]]);return F}}return null}function eo(T,S,$){var W=T.static,Q=T.dynamic;function q(A){if(A in W){var B=E.id(W[A]);_.optional(function(){Pe.shader(rm[A],B,_.guessCommand())});var Z=zn(function(){return B});return Z.id=B,Z}else if(A in Q){var fe=Q[A];return Xr(fe,function(me,se){var Ie=me.invoke(se,fe),yt=se.def(me.shared.strings,".id(",Ie,")");return _.optional(function(){se(me.shared.shader,".shader(",rm[A],",",yt,",",me.command,");")}),yt})}return null}var F=q(Vc),H=q(Wc),L=null,C;return q0(F)&&q0(H)?(L=Pe.program(H.id,F.id,null,$),C=zn(function(A,B){return A.link(L)})):C=new Rr(F&&F.thisDep||H&&H.thisDep,F&&F.contextDep||H&&H.contextDep,F&&F.propDep||H&&H.propDep,function(A,B){var Z=A.shared.shader,fe;F?fe=F.append(A,B):fe=B.def(Z,".",Vc);var me;H?me=H.append(A,B):me=B.def(Z,".",Wc);var se=Z+".program("+me+","+fe;return _.optional(function(){se+=","+A.command}),B.def(se+")")}),{frag:F,vert:H,progVar:C,program:L}}function Eo(T,S){var $=T.static,W=T.dynamic;function Q(){if(Ns in $){var A=$[Ns];Ff(A)?A=ee.getElements(ee.create(A,!0)):A&&(A=ee.getElements(A),_.command(A,"invalid elements",S.commandStr));var B=zn(function(fe,me){if(A){var se=fe.link(A);return fe.ELEMENTS=se,se}return fe.ELEMENTS=null,null});return B.value=A,B}else if(Ns in W){var Z=W[Ns];return Xr(Z,function(fe,me){var se=fe.shared,Ie=se.isBufferArgs,yt=se.elements,Zt=fe.invoke(me,Z),lt=me.def("null"),Ot=me.def(Ie,"(",Zt,")"),Bt=fe.cond(Ot).then(lt,"=",yt,".createStream(",Zt,");").else(lt,"=",yt,".getElements(",Zt,");");return _.optional(function(){fe.assert(Bt.else,"!"+Zt+"||"+lt,"invalid elements")}),me.entry(Bt),me.exit(fe.cond(Ot).then(yt,".destroyStream(",lt,");")),fe.ELEMENTS=lt,lt})}return null}var q=Q();function F(){if(Rs in $){var A=$[Rs];return _.commandParameter(A,mi,"invalid primitve",S.commandStr),zn(function(Z,fe){return mi[A]})}else if(Rs in W){var B=W[Rs];return Xr(B,function(Z,fe){var me=Z.constants.primTypes,se=Z.invoke(fe,B);return _.optional(function(){Z.assert(fe,se+" in "+me,"invalid primitive, must be one of "+Object.keys(mi))}),fe.def(me,"[",se,"]")})}else if(q)return q0(q)?q.value?zn(function(Z,fe){return fe.def(Z.ELEMENTS,".primType")}):zn(function(){return Qv}):new Rr(q.thisDep,q.contextDep,q.propDep,function(Z,fe){var me=Z.ELEMENTS;return fe.def(me,"?",me,".primType:",Qv)});return null}function H(A,B){if(A in $){var Z=$[A]|0;return _.command(!B||Z>=0,"invalid "+A,S.commandStr),zn(function(me,se){return B&&(me.OFFSET=Z),Z})}else if(A in W){var fe=W[A];return Xr(fe,function(me,se){var Ie=me.invoke(se,fe);return B&&(me.OFFSET=Ie,_.optional(function(){me.assert(se,Ie+">=0","invalid "+A)})),Ie})}else if(B&&q)return zn(function(me,se){return me.OFFSET="0",0});return null}var L=H(Af,!0);function C(){if(Os in $){var A=$[Os]|0;return _.command(typeof A=="number"&&A>=0,"invalid vertex count",S.commandStr),zn(function(){return A})}else if(Os in W){var B=W[Os];return Xr(B,function(me,se){var Ie=me.invoke(se,B);return _.optional(function(){me.assert(se,"typeof "+Ie+'==="number"&&'+Ie+">=0&&"+Ie+"===("+Ie+"|0)","invalid vertex count")}),Ie})}else if(q)if(q0(q)){if(q)return L?new Rr(L.thisDep,L.contextDep,L.propDep,function(me,se){var Ie=se.def(me.ELEMENTS,".vertCount-",me.OFFSET);return _.optional(function(){me.assert(se,Ie+">=0","invalid vertex offset/element buffer too small")}),Ie}):zn(function(me,se){return se.def(me.ELEMENTS,".vertCount")});var Z=zn(function(){return-1});return _.optional(function(){Z.MISSING=!0}),Z}else{var fe=new Rr(q.thisDep||L.thisDep,q.contextDep||L.contextDep,q.propDep||L.propDep,function(me,se){var Ie=me.ELEMENTS;return me.OFFSET?se.def(Ie,"?",Ie,".vertCount-",me.OFFSET,":-1"):se.def(Ie,"?",Ie,".vertCount:-1")});return _.optional(function(){fe.DYNAMIC=!0}),fe}return null}return{elements:q,primitive:F(),count:C(),instances:H(zf,!1),offset:L}}function Tn(T,S){var $=T.static,W=T.dynamic,Q={};return Ae.forEach(function(q){var F=je(q);function H(L,C){if(q in $){var A=L($[q]);Q[F]=zn(function(){return A})}else if(q in W){var B=W[q];Q[F]=Xr(B,function(Z,fe){return C(Z,fe,Z.invoke(fe,B))})}}switch(q){case qv:case Ov:case Rv:case Bv:case Pv:case Wv:case Gv:case Hv:case Uv:case Fv:return H(function(L){return _.commandType(L,"boolean",q,S.commandStr),L},function(L,C,A){return _.optional(function(){L.assert(C,"typeof "+A+'==="boolean"',"invalid flag "+q,L.commandStr)}),A});case Iv:return H(function(L){return _.commandParameter(L,Ni,"invalid "+q,S.commandStr),Ni[L]},function(L,C,A){var B=L.constants.compareFuncs;return _.optional(function(){L.assert(C,A+" in "+B,"invalid "+q+", must be one of "+Object.keys(Ni))}),C.def(B,"[",A,"]")});case $v:return H(function(L){return _.command(_n(L)&&L.length===2&&typeof L[0]=="number"&&typeof L[1]=="number"&&L[0]<=L[1],"depth range is 2d array",S.commandStr),L},function(L,C,A){_.optional(function(){L.assert(C,L.shared.isArrayLike+"("+A+")&&"+A+".length===2&&typeof "+A+'[0]==="number"&&typeof '+A+'[1]==="number"&&'+A+"[0]<="+A+"[1]","depth range must be a 2d array")});var B=C.def("+",A,"[0]"),Z=C.def("+",A,"[1]");return[B,Z]});case V1:return H(function(L){_.commandType(L,"object","blend.func",S.commandStr);var C="srcRGB"in L?L.srcRGB:L.src,A="srcAlpha"in L?L.srcAlpha:L.src,B="dstRGB"in L?L.dstRGB:L.dst,Z="dstAlpha"in L?L.dstAlpha:L.dst;return _.commandParameter(C,n0,F+".srcRGB",S.commandStr),_.commandParameter(A,n0,F+".srcAlpha",S.commandStr),_.commandParameter(B,n0,F+".dstRGB",S.commandStr),_.commandParameter(Z,n0,F+".dstAlpha",S.commandStr),_.command(nm.indexOf(C+", "+B)===-1,"unallowed blending combination (srcRGB, dstRGB) = ("+C+", "+B+")",S.commandStr),[n0[C],n0[B],n0[A],n0[Z]]},function(L,C,A){var B=L.constants.blendFuncs;_.optional(function(){L.assert(C,A+"&&typeof "+A+'==="object"',"invalid blend func, must be an object")});function Z(lt,Ot){var Bt=C.def('"',lt,Ot,'" in ',A,"?",A,".",lt,Ot,":",A,".",lt);return _.optional(function(){L.assert(C,Bt+" in "+B,"invalid "+q+"."+lt+Ot+", must be one of "+Object.keys(n0))}),Bt}var fe=Z("src","RGB"),me=Z("dst","RGB");_.optional(function(){var lt=L.constants.invalidBlendCombinations;L.assert(C,lt+".indexOf("+fe+'+", "+'+me+") === -1 ","unallowed blending combination for (srcRGB, dstRGB)")});var se=C.def(B,"[",fe,"]"),Ie=C.def(B,"[",Z("src","Alpha"),"]"),yt=C.def(B,"[",me,"]"),Zt=C.def(B,"[",Z("dst","Alpha"),"]");return[se,yt,Ie,Zt]});case W1:return H(function(L){if(typeof L=="string")return _.commandParameter(L,ae,"invalid "+q,S.commandStr),[ae[L],ae[L]];if(typeof L=="object")return _.commandParameter(L.rgb,ae,q+".rgb",S.commandStr),_.commandParameter(L.alpha,ae,q+".alpha",S.commandStr),[ae[L.rgb],ae[L.alpha]];_.commandRaise("invalid blend.equation",S.commandStr)},function(L,C,A){var B=L.constants.blendEquations,Z=C.def(),fe=C.def(),me=L.cond("typeof ",A,'==="string"');return _.optional(function(){function se(Ie,yt,Zt){L.assert(Ie,Zt+" in "+B,"invalid "+yt+", must be one of "+Object.keys(ae))}se(me.then,q,A),L.assert(me.else,A+"&&typeof "+A+'==="object"',"invalid "+q),se(me.else,q+".rgb",A+".rgb"),se(me.else,q+".alpha",A+".alpha")}),me.then(Z,"=",fe,"=",B,"[",A,"];"),me.else(Z,"=",B,"[",A,".rgb];",fe,"=",B,"[",A,".alpha];"),C(me),[Z,fe]});case Cv:return H(function(L){return _.command(_n(L)&&L.length===4,"blend.color must be a 4d array",S.commandStr),to(4,function(C){return+L[C]})},function(L,C,A){return _.optional(function(){L.assert(C,L.shared.isArrayLike+"("+A+")&&"+A+".length===4","blend.color must be a 4d array")}),to(4,function(B){return C.def("+",A,"[",B,"]")})});case jv:return H(function(L){return _.commandType(L,"number",F,S.commandStr),L|0},function(L,C,A){return _.optional(function(){L.assert(C,"typeof "+A+'==="number"',"invalid stencil.mask")}),C.def(A,"|0")});case J1:return H(function(L){_.commandType(L,"object",F,S.commandStr);var C=L.cmp||"keep",A=L.ref||0,B="mask"in L?L.mask:-1;return _.commandParameter(C,Ni,q+".cmp",S.commandStr),_.commandType(A,"number",q+".ref",S.commandStr),_.commandType(B,"number",q+".mask",S.commandStr),[Ni[C],A,B]},function(L,C,A){var B=L.constants.compareFuncs;_.optional(function(){function se(){L.assert(C,Array.prototype.join.call(arguments,""),"invalid stencil.func")}se(A+"&&typeof ",A,'==="object"'),se('!("cmp" in ',A,")||(",A,".cmp in ",B,")")});var Z=C.def('"cmp" in ',A,"?",B,"[",A,".cmp]",":",$0),fe=C.def(A,".ref|0"),me=C.def('"mask" in ',A,"?",A,".mask|0:-1");return[Z,fe,me]});case eu:case Bc:return H(function(L){_.commandType(L,"object",F,S.commandStr);var C=L.fail||"keep",A=L.zfail||"keep",B=L.zpass||"keep";return _.commandParameter(C,F0,q+".fail",S.commandStr),_.commandParameter(A,F0,q+".zfail",S.commandStr),_.commandParameter(B,F0,q+".zpass",S.commandStr),[q===Bc?Cs:el,F0[C],F0[A],F0[B]]},function(L,C,A){var B=L.constants.stencilOps;_.optional(function(){L.assert(C,A+"&&typeof "+A+'==="object"',"invalid "+q)});function Z(fe){return _.optional(function(){L.assert(C,'!("'+fe+'" in '+A+")||("+A+"."+fe+" in "+B+")","invalid "+q+"."+fe+", must be one of "+Object.keys(F0))}),C.def('"',fe,'" in ',A,"?",B,"[",A,".",fe,"]:",$0)}return[q===Bc?Cs:el,Z("fail"),Z("zfail"),Z("zpass")]});case Q1:return H(function(L){_.commandType(L,"object",F,S.commandStr);var C=L.factor|0,A=L.units|0;return _.commandType(C,"number",F+".factor",S.commandStr),_.commandType(A,"number",F+".units",S.commandStr),[C,A]},function(L,C,A){_.optional(function(){L.assert(C,A+"&&typeof "+A+'==="object"',"invalid "+q)});var B=C.def(A,".factor|0"),Z=C.def(A,".units|0");return[B,Z]});case Dv:return H(function(L){var C=0;return L==="front"?C=el:L==="back"&&(C=Cs),_.command(!!C,F,S.commandStr),C},function(L,C,A){return _.optional(function(){L.assert(C,A+'==="front"||'+A+'==="back"',"invalid cull.face")}),C.def(A,'==="front"?',el,":",Cs)});case K1:return H(function(L){return _.command(typeof L=="number"&&L>=oe.lineWidthDims[0]&&L<=oe.lineWidthDims[1],"invalid line width, must be a positive number between "+oe.lineWidthDims[0]+" and "+oe.lineWidthDims[1],S.commandStr),L},function(L,C,A){return _.optional(function(){L.assert(C,"typeof "+A+'==="number"&&'+A+">="+oe.lineWidthDims[0]+"&&"+A+"<="+oe.lineWidthDims[1],"invalid line width")}),A});case Y1:return H(function(L){return _.commandParameter(L,iu,F,S.commandStr),iu[L]},function(L,C,A){return _.optional(function(){L.assert(C,A+'==="cw"||'+A+'==="ccw"',"invalid frontFace, must be one of cw,ccw")}),C.def(A+'==="cw"?'+Zv+":"+su)});case X1:return H(function(L){return _.command(_n(L)&&L.length===4,"color.mask must be length 4 array",S.commandStr),L.map(function(C){return!!C})},function(L,C,A){return _.optional(function(){L.assert(C,L.shared.isArrayLike+"("+A+")&&"+A+".length===4","invalid color.mask")}),to(4,function(B){return"!!"+A+"["+B+"]"})});case Z1:return H(function(L){_.command(typeof L=="object"&&L,F,S.commandStr);var C="value"in L?L.value:1,A=!!L.invert;return _.command(typeof C=="number"&&C>=0&&C<=1,"sample.coverage.value must be a number between 0 and 1",S.commandStr),[C,A]},function(L,C,A){_.optional(function(){L.assert(C,A+"&&typeof "+A+'==="object"',"invalid sample.coverage")});var B=C.def('"value" in ',A,"?+",A,".value:1"),Z=C.def("!!",A,".invert");return[B,Z]})}}),Q}function Wn(T,S){var $=T.static,W=T.dynamic,Q={};return Object.keys($).forEach(function(q){var F=$[q],H;if(typeof F=="number"||typeof F=="boolean")H=zn(function(){return F});else if(typeof F=="function"){var L=F._reglType;L==="texture2d"||L==="textureCube"?H=zn(function(C){return C.link(F)}):L==="framebuffer"||L==="framebufferCube"?(_.command(F.color.length>0,'missing color attachment for framebuffer sent to uniform "'+q+'"',S.commandStr),H=zn(function(C){return C.link(F.color[0])})):_.commandRaise('invalid data for uniform "'+q+'"',S.commandStr)}else _n(F)?H=zn(function(C){var A=C.global.def("[",to(F.length,function(B){return _.command(typeof F[B]=="number"||typeof F[B]=="boolean","invalid uniform "+q,C.commandStr),F[B]}),"]");return A}):_.commandRaise('invalid or missing data for uniform "'+q+'"',S.commandStr);H.value=F,Q[q]=H}),Object.keys(W).forEach(function(q){var F=W[q];Q[q]=Xr(F,function(H,L){return H.invoke(L,F)})}),Q}function ho(T,S){var $=T.static,W=T.dynamic,Q={};return Object.keys($).forEach(function(q){var F=$[q],H=E.id(q),L=new K;if(Ff(F))L.state=Ai,L.buffer=ve.getBuffer(ve.create(F,Li,!1,!0)),L.type=0;else{var C=ve.getBuffer(F);if(C)L.state=Ai,L.buffer=C,L.type=0;else if(_.command(typeof F=="object"&&F,"invalid data for attribute "+q,S.commandStr),"constant"in F){var A=F.constant;L.buffer="null",L.state=G1,typeof A=="number"?L.x=A:(_.command(_n(A)&&A.length>0&&A.length<=4,"invalid constant for attribute "+q,S.commandStr),Ei.forEach(function(yt,Zt){Zt<A.length&&(L[yt]=A[Zt])}))}else{Ff(F.buffer)?C=ve.getBuffer(ve.create(F.buffer,Li,!1,!0)):C=ve.getBuffer(F.buffer),_.command(!!C,'missing buffer for attribute "'+q+'"',S.commandStr);var B=F.offset|0;_.command(B>=0,'invalid offset for attribute "'+q+'"',S.commandStr);var Z=F.stride|0;_.command(Z>=0&&Z<256,'invalid stride for attribute "'+q+'", must be integer betweeen [0, 255]',S.commandStr);var fe=F.size|0;_.command(!("size"in F)||fe>0&&fe<=4,'invalid size for attribute "'+q+'", must be 1,2,3,4',S.commandStr);var me=!!F.normalized,se=0;"type"in F&&(_.commandParameter(F.type,Ss,"invalid type for attribute "+q,S.commandStr),se=Ss[F.type]);var Ie=F.divisor|0;"divisor"in F&&(_.command(Ie===0||$e,'cannot specify divisor for attribute "'+q+'", instancing not supported',S.commandStr),_.command(Ie>=0,'invalid divisor for attribute "'+q+'"',S.commandStr)),_.optional(function(){var yt=S.commandStr,Zt=["buffer","offset","divisor","normalized","type","size","stride"];Object.keys(F).forEach(function(lt){_.command(Zt.indexOf(lt)>=0,'unknown parameter "'+lt+'" for attribute pointer "'+q+'" (valid parameters are '+Zt+")",yt)})}),L.buffer=C,L.state=Ai,L.size=fe,L.normalized=me,L.type=se||C.dtype,L.offset=B,L.stride=Z,L.divisor=Ie}}Q[q]=zn(function(yt,Zt){var lt=yt.attribCache;if(H in lt)return lt[H];var Ot={isStream:!1};return Object.keys(L).forEach(function(Bt){Ot[Bt]=L[Bt]}),L.buffer&&(Ot.buffer=yt.link(L.buffer),Ot.type=Ot.type||Ot.buffer+".dtype"),lt[H]=Ot,Ot})}),Object.keys(W).forEach(function(q){var F=W[q];function H(L,C){var A=L.invoke(C,F),B=L.shared,Z=L.constants,fe=B.isBufferArgs,me=B.buffer;_.optional(function(){L.assert(C,A+"&&(typeof "+A+'==="object"||typeof '+A+'==="function")&&('+fe+"("+A+")||"+me+".getBuffer("+A+")||"+me+".getBuffer("+A+".buffer)||"+fe+"("+A+'.buffer)||("constant" in '+A+"&&(typeof "+A+'.constant==="number"||'+B.isArrayLike+"("+A+".constant))))",'invalid dynamic attribute "'+q+'"')});var se={isStream:C.def(!1)},Ie=new K;Ie.state=Ai,Object.keys(Ie).forEach(function(Ot){se[Ot]=C.def(""+Ie[Ot])});var yt=se.buffer,Zt=se.type;C("if(",fe,"(",A,")){",se.isStream,"=true;",yt,"=",me,".createStream(",Li,",",A,");",Zt,"=",yt,".dtype;","}else{",yt,"=",me,".getBuffer(",A,");","if(",yt,"){",Zt,"=",yt,".dtype;",'}else if("constant" in ',A,"){",se.state,"=",G1,";","if(typeof "+A+'.constant === "number"){',se[Ei[0]],"=",A,".constant;",Ei.slice(1).map(function(Ot){return se[Ot]}).join("="),"=0;","}else{",Ei.map(function(Ot,Bt){return se[Ot]+"="+A+".constant.length>"+Bt+"?"+A+".constant["+Bt+"]:0;"}).join(""),"}}else{","if(",fe,"(",A,".buffer)){",yt,"=",me,".createStream(",Li,",",A,".buffer);","}else{",yt,"=",me,".getBuffer(",A,".buffer);","}",Zt,'="type" in ',A,"?",Z.glTypes,"[",A,".type]:",yt,".dtype;",se.normalized,"=!!",A,".normalized;");function lt(Ot){C(se[Ot],"=",A,".",Ot,"|0;")}return lt("size"),lt("offset"),lt("stride"),lt("divisor"),C("}}"),C.exit("if(",se.isStream,"){",me,".destroyStream(",yt,");","}"),se}Q[q]=Xr(F,H)}),Q}function In(T,S){var $=T.static,W=T.dynamic;if(Xc in $){var Q=$[Xc];return Q!==null&&Fe.getVAO(Q)===null&&(Q=Fe.createVAO(Q)),zn(function(F){return F.link(Fe.getVAO(Q))})}else if(Xc in W){var q=W[Xc];return Xr(q,function(F,H){var L=F.invoke(H,q);return H.def(F.shared.vao+".getVAO("+L+")")})}return null}function Jo(T){var S=T.static,$=T.dynamic,W={};return Object.keys(S).forEach(function(Q){var q=S[Q];W[Q]=zn(function(F,H){return typeof q=="number"||typeof q=="boolean"?""+q:F.link(q)})}),Object.keys($).forEach(function(Q){var q=$[Q];W[Q]=Xr(q,function(F,H){return F.invoke(H,q)})}),W}function Ln(T,S,$,W,Q){var q=T.static,F=T.dynamic;_.optional(function(){var lt=[Ls,Wc,Vc,Ns,Rs,Af,Os,zf,jc,Xc].concat(Ae);function Ot(Bt){Object.keys(Bt).forEach(function(Ao){_.command(lt.indexOf(Ao)>=0,'unknown parameter "'+Ao+'"',Q.commandStr)})}Ot(q),Ot(F)});var H=Ut(T,S),L=ct(T,Q),C=ao(T,L,Q),A=Eo(T,Q),B=Tn(T,Q),Z=eo(T,Q,H);function fe(lt){var Ot=C[lt];Ot&&(B[lt]=Ot)}fe(g0),fe(je(Ef));var me=Object.keys(B).length>0,se={framebuffer:L,draw:A,shader:Z,state:B,dirty:me,scopeVAO:null,drawVAO:null,useVAO:!1,attributes:{}};if(se.profile=Kt(T,Q),se.uniforms=Wn($,Q),se.drawVAO=se.scopeVAO=In(T,Q),!se.drawVAO&&Z.program&&!H&&O.angle_instanced_arrays){var Ie=!0,yt=Z.program.attributes.map(function(lt){var Ot=S.static[lt];return Ie=Ie&&!!Ot,Ot});if(Ie&&yt.length>0){var Zt=Fe.getVAO(Fe.createVAO(yt));se.drawVAO=new Rr(null,null,null,function(lt,Ot){return lt.link(Zt)}),se.useVAO=!0}}return H?se.useVAO=!0:se.attributes=ho(S,Q),se.context=Jo(W,Q),se}function $n(T,S,$){var W=T.shared,Q=W.context,q=T.scope();Object.keys($).forEach(function(F){S.save(Q,"."+F);var H=$[F],L=H.append(T,S);Array.isArray(L)?q(Q,".",F,"=[",L.join(),"];"):q(Q,".",F,"=",L,";")}),S(q)}function Fn(T,S,$,W){var Q=T.shared,q=Q.gl,F=Q.framebuffer,H;et&&(H=S.def(Q.extensions,".webgl_draw_buffers"));var L=T.constants,C=L.drawBuffer,A=L.backBuffer,B;$?B=$.append(T,S):B=S.def(F,".next"),W||S("if(",B,"!==",F,".cur){"),S("if(",B,"){",q,".bindFramebuffer(",om,",",B,".framebuffer);"),et&&S(H,".drawBuffersWEBGL(",C,"[",B,".colorAttachments.length]);"),S("}else{",q,".bindFramebuffer(",om,",null);"),et&&S(H,".drawBuffersWEBGL(",A,");"),S("}",F,".cur=",B,";"),W||S("}")}function or(T,S,$){var W=T.shared,Q=W.gl,q=T.current,F=T.next,H=W.current,L=W.next,C=T.cond(H,".dirty");Ae.forEach(function(A){var B=je(A);if(!(B in $.state)){var Z,fe;if(B in F){Z=F[B],fe=q[B];var me=to(we[B].length,function(Ie){return C.def(Z,"[",Ie,"]")});C(T.cond(me.map(function(Ie,yt){return Ie+"!=="+fe+"["+yt+"]"}).join("||")).then(Q,".",Me[B],"(",me,");",me.map(function(Ie,yt){return fe+"["+yt+"]="+Ie}).join(";"),";"))}else{Z=C.def(L,".",B);var se=T.cond(Z,"!==",H,".",B);C(se),B in Be?se(T.cond(Z).then(Q,".enable(",Be[B],");").else(Q,".disable(",Be[B],");"),H,".",B,"=",Z,";"):se(Q,".",Me[B],"(",Z,");",H,".",B,"=",Z,";")}}}),Object.keys($.state).length===0&&C(H,".dirty=false;"),S(C)}function ur(T,S,$,W){var Q=T.shared,q=T.current,F=Q.current,H=Q.gl;am(Object.keys($)).forEach(function(L){var C=$[L];if(!(W&&!W(C))){var A=C.append(T,S);if(Be[L]){var B=Be[L];q0(C)?A?S(H,".enable(",B,");"):S(H,".disable(",B,");"):S(T.cond(A).then(H,".enable(",B,");").else(H,".disable(",B,");")),S(F,".",L,"=",A,";")}else if(_n(A)){var Z=q[L];S(H,".",Me[L],"(",A,");",A.map(function(fe,me){return Z+"["+me+"]="+fe}).join(";"),";")}else S(H,".",Me[L],"(",A,");",F,".",L,"=",A,";")}})}function Mn(T,S){$e&&(T.instancing=S.def(T.shared.extensions,".angle_instanced_arrays"))}function Qt(T,S,$,W,Q){var q=T.shared,F=T.stats,H=q.current,L=q.timer,C=$.profile;function A(){return typeof performance=="undefined"?"Date.now()":"performance.now()"}var B,Z;function fe(lt){B=S.def(),lt(B,"=",A(),";"),typeof Q=="string"?lt(F,".count+=",Q,";"):lt(F,".count++;"),Ne&&(W?(Z=S.def(),lt(Z,"=",L,".getNumPendingQueries();")):lt(L,".beginQuery(",F,");"))}function me(lt){lt(F,".cpuTime+=",A(),"-",B,";"),Ne&&(W?lt(L,".pushScopeStats(",Z,",",L,".getNumPendingQueries(),",F,");"):lt(L,".endQuery();"))}function se(lt){var Ot=S.def(H,".profile");S(H,".profile=",lt,";"),S.exit(H,".profile=",Ot,";")}var Ie;if(C){if(q0(C)){C.enable?(fe(S),me(S.exit),se("true")):se("false");return}Ie=C.append(T,S),se(Ie)}else Ie=S.def(H,".profile");var yt=T.block();fe(yt),S("if(",Ie,"){",yt,"}");var Zt=T.block();me(Zt),S.exit("if(",Ie,"){",Zt,"}")}function dr(T,S,$,W,Q){var q=T.shared;function F(L){switch(L){case Tf:case Rf:case Pf:return 2;case Lf:case Of:case If:return 3;case Nf:case Cf:case $f:return 4;default:return 1}}function H(L,C,A){var B=q.gl,Z=S.def(L,".location"),fe=S.def(q.attributes,"[",Z,"]"),me=A.state,se=A.buffer,Ie=[A.x,A.y,A.z,A.w],yt=["buffer","normalized","offset","stride"];function Zt(){S("if(!",fe,".buffer){",B,".enableVertexAttribArray(",Z,");}");var Ot=A.type,Bt;if(A.size?Bt=S.def(A.size,"||",C):Bt=C,S("if(",fe,".type!==",Ot,"||",fe,".size!==",Bt,"||",yt.map(function(gn){return fe+"."+gn+"!=="+A[gn]}).join("||"),"){",B,".bindBuffer(",Li,",",se,".buffer);",B,".vertexAttribPointer(",[Z,Bt,Ot,A.normalized,A.stride,A.offset],");",fe,".type=",Ot,";",fe,".size=",Bt,";",yt.map(function(gn){return fe+"."+gn+"="+A[gn]+";"}).join(""),"}"),$e){var Ao=A.divisor;S("if(",fe,".divisor!==",Ao,"){",T.instancing,".vertexAttribDivisorANGLE(",[Z,Ao],");",fe,".divisor=",Ao,";}")}}function lt(){S("if(",fe,".buffer){",B,".disableVertexAttribArray(",Z,");",fe,".buffer=null;","}if(",Ei.map(function(Ot,Bt){return fe+"."+Ot+"!=="+Ie[Bt]}).join("||"),"){",B,".vertexAttrib4f(",Z,",",Ie,");",Ei.map(function(Ot,Bt){return fe+"."+Ot+"="+Ie[Bt]+";"}).join(""),"}")}me===Ai?Zt():me===G1?lt():(S("if(",me,"===",Ai,"){"),Zt(),S("}else{"),lt(),S("}"))}W.forEach(function(L){var C=L.name,A=$.attributes[C],B;if(A){if(!Q(A))return;B=A.append(T,S)}else{if(!Q(sm))return;var Z=T.scopeAttrib(C);_.optional(function(){T.assert(S,Z+".state","missing attribute "+C)}),B={},Object.keys(new K).forEach(function(fe){B[fe]=S.def(Z,".",fe)})}H(T.link(L),F(L.info.type),B)})}function Ro(T,S,$,W,Q){for(var q=T.shared,F=q.gl,H,L=0;L<W.length;++L){var C=W[L],A=C.name,B=C.info.type,Z=$.uniforms[A],fe=T.link(C),me=fe+".location",se;if(Z){if(!Q(Z))continue;if(q0(Z)){var Ie=Z.value;if(_.command(Ie!==null&&typeof Ie!="undefined",'missing uniform "'+A+'"',T.commandStr),B===Zc||B===Jc){_.command(typeof Ie=="function"&&(B===Zc&&(Ie._reglType==="texture2d"||Ie._reglType==="framebuffer")||B===Jc&&(Ie._reglType==="textureCube"||Ie._reglType==="framebufferCube")),"invalid texture for uniform "+A,T.commandStr);var yt=T.link(Ie._texture||Ie.color[0]._texture);S(F,".uniform1i(",me,",",yt+".bind());"),S.exit(yt,".unbind();")}else if(B===Yc||B===Kc||B===Qc){_.optional(function(){_.command(_n(Ie),"invalid matrix for uniform "+A,T.commandStr),_.command(B===Yc&&Ie.length===4||B===Kc&&Ie.length===9||B===Qc&&Ie.length===16,"invalid length for matrix uniform "+A,T.commandStr)});var Zt=T.global.def("new Float32Array(["+Array.prototype.slice.call(Ie)+"])"),lt=2;B===Kc?lt=3:B===Qc&&(lt=4),S(F,".uniformMatrix",lt,"fv(",me,",false,",Zt,");")}else{switch(B){case nu:_.commandType(Ie,"number","uniform "+A,T.commandStr),H="1f";break;case Tf:_.command(_n(Ie)&&Ie.length===2,"uniform "+A,T.commandStr),H="2f";break;case Lf:_.command(_n(Ie)&&Ie.length===3,"uniform "+A,T.commandStr),H="3f";break;case Nf:_.command(_n(Ie)&&Ie.length===4,"uniform "+A,T.commandStr),H="4f";break;case au:_.commandType(Ie,"boolean","uniform "+A,T.commandStr),H="1i";break;case ru:_.commandType(Ie,"number","uniform "+A,T.commandStr),H="1i";break;case Pf:_.command(_n(Ie)&&Ie.length===2,"uniform "+A,T.commandStr),H="2i";break;case Rf:_.command(_n(Ie)&&Ie.length===2,"uniform "+A,T.commandStr),H="2i";break;case If:_.command(_n(Ie)&&Ie.length===3,"uniform "+A,T.commandStr),H="3i";break;case Of:_.command(_n(Ie)&&Ie.length===3,"uniform "+A,T.commandStr),H="3i";break;case $f:_.command(_n(Ie)&&Ie.length===4,"uniform "+A,T.commandStr),H="4i";break;case Cf:_.command(_n(Ie)&&Ie.length===4,"uniform "+A,T.commandStr),H="4i";break}S(F,".uniform",H,"(",me,",",_n(Ie)?Array.prototype.slice.call(Ie):Ie,");")}continue}else se=Z.append(T,S)}else{if(!Q(sm))continue;se=S.def(q.uniforms,"[",E.id(A),"]")}B===Zc?(_(!Array.isArray(se),"must specify a scalar prop for textures"),S("if(",se,"&&",se,'._reglType==="framebuffer"){',se,"=",se,".color[0];","}")):B===Jc&&(_(!Array.isArray(se),"must specify a scalar prop for cube maps"),S("if(",se,"&&",se,'._reglType==="framebufferCube"){',se,"=",se,".color[0];","}")),_.optional(function(){function Or(Ga,dm){T.assert(S,Ga,'bad data or missing for uniform "'+A+'".  '+dm)}function cu(Ga){_(!Array.isArray(se),"must not specify an array type for uniform"),Or("typeof "+se+'==="'+Ga+'"',"invalid type, expected "+Ga)}function _a(Ga,dm){Array.isArray(se)?_(se.length===Ga,"must have length "+Ga):Or(q.isArrayLike+"("+se+")&&"+se+".length==="+Ga,"invalid vector, should have length "+Ga,T.commandStr)}function um(Ga){_(!Array.isArray(se),"must not specify a value type"),Or("typeof "+se+'==="function"&&'+se+'._reglType==="texture'+(Ga===Kv?"2d":"Cube")+'"',"invalid texture type",T.commandStr)}switch(B){case ru:cu("number");break;case Rf:_a(2,"number");break;case Of:_a(3,"number");break;case Cf:_a(4,"number");break;case nu:cu("number");break;case Tf:_a(2,"number");break;case Lf:_a(3,"number");break;case Nf:_a(4,"number");break;case au:cu("boolean");break;case Pf:_a(2,"boolean");break;case If:_a(3,"boolean");break;case $f:_a(4,"boolean");break;case Yc:_a(4,"number");break;case Kc:_a(9,"number");break;case Qc:_a(16,"number");break;case Zc:um(Kv);break;case Jc:um(o4);break}});var Ot=1;switch(B){case Zc:case Jc:var Bt=S.def(se,"._texture");S(F,".uniform1i(",me,",",Bt,".bind());"),S.exit(Bt,".unbind();");continue;case ru:case au:H="1i";break;case Rf:case Pf:H="2i",Ot=2;break;case Of:case If:H="3i",Ot=3;break;case Cf:case $f:H="4i",Ot=4;break;case nu:H="1f";break;case Tf:H="2f",Ot=2;break;case Lf:H="3f",Ot=3;break;case Nf:H="4f",Ot=4;break;case Yc:H="Matrix2fv";break;case Kc:H="Matrix3fv";break;case Qc:H="Matrix4fv";break}if(S(F,".uniform",H,"(",me,","),H.charAt(0)==="M"){var Ao=Math.pow(B-Yc+2,2),gn=T.global.def("new Float32Array(",Ao,")");Array.isArray(se)?S("false,(",to(Ao,function(Or){return gn+"["+Or+"]="+se[Or]}),",",gn,")"):S("false,(Array.isArray(",se,")||",se," instanceof Float32Array)?",se,":(",to(Ao,function(Or){return gn+"["+Or+"]="+se+"["+Or+"]"}),",",gn,")")}else Ot>1?S(to(Ot,function(Or){return Array.isArray(se)?se[Or]:se+"["+Or+"]"})):(_(!Array.isArray(se),"uniform value must not be an array"),S(se));S(");")}}function Rt(T,S,$,W){var Q=T.shared,q=Q.gl,F=Q.draw,H=W.draw;function L(){var Bt=H.elements,Ao,gn=S;return Bt?((Bt.contextDep&&W.contextDynamic||Bt.propDep)&&(gn=$),Ao=Bt.append(T,gn)):Ao=gn.def(F,".",Ns),Ao&&gn("if("+Ao+")"+q+".bindBuffer("+Jw+","+Ao+".buffer.buffer);"),Ao}function C(){var Bt=H.count,Ao,gn=S;return Bt?((Bt.contextDep&&W.contextDynamic||Bt.propDep)&&(gn=$),Ao=Bt.append(T,gn),_.optional(function(){Bt.MISSING&&T.assert(S,"false","missing vertex count"),Bt.DYNAMIC&&T.assert(gn,Ao+">=0","missing vertex count")})):(Ao=gn.def(F,".",Os),_.optional(function(){T.assert(gn,Ao+">=0","missing vertex count")})),Ao}var A=L();function B(Bt){var Ao=H[Bt];return Ao?Ao.contextDep&&W.contextDynamic||Ao.propDep?Ao.append(T,$):Ao.append(T,S):S.def(F,".",Bt)}var Z=B(Rs),fe=B(Af),me=C();if(typeof me=="number"){if(me===0)return}else $("if(",me,"){"),$.exit("}");var se,Ie;$e&&(se=B(zf),Ie=T.instancing);var yt=A+".type",Zt=H.elements&&q0(H.elements);function lt(){function Bt(){$(Ie,".drawElementsInstancedANGLE(",[Z,me,yt,fe+"<<(("+yt+"-"+Tv+")>>1)",se],");")}function Ao(){$(Ie,".drawArraysInstancedANGLE(",[Z,fe,me,se],");")}A?Zt?Bt():($("if(",A,"){"),Bt(),$("}else{"),Ao(),$("}")):Ao()}function Ot(){function Bt(){$(q+".drawElements("+[Z,me,yt,fe+"<<(("+yt+"-"+Tv+")>>1)"]+");")}function Ao(){$(q+".drawArrays("+[Z,fe,me]+");")}A?Zt?Bt():($("if(",A,"){"),Bt(),$("}else{"),Ao(),$("}")):Ao()}$e&&(typeof se!="number"||se>=0)?typeof se=="string"?($("if(",se,">0){"),lt(),$("}else if(",se,"<0){"),Ot(),$("}")):lt():Ot()}function lo(T,S,$,W,Q){var q=Ft(),F=q.proc("body",Q);return _.optional(function(){q.commandStr=S.commandStr,q.command=q.link(S.commandStr)}),$e&&(q.instancing=F.def(q.shared.extensions,".angle_instanced_arrays")),T(q,F,$,W),q.compile().body}function yo(T,S,$,W){Mn(T,S),$.useVAO?$.drawVAO?S(T.shared.vao,".setVAO(",$.drawVAO.append(T,S),");"):S(T.shared.vao,".setVAO(",T.shared.vao,".targetVAO);"):(S(T.shared.vao,".setVAO(null);"),dr(T,S,$,W.attributes,function(){return!0})),Ro(T,S,$,W.uniforms,function(){return!0}),Rt(T,S,S,$)}function kn(T,S){var $=T.proc("draw",1);Mn(T,$),$n(T,$,S.context),Fn(T,$,S.framebuffer),or(T,$,S),ur(T,$,S.state),Qt(T,$,S,!1,!0);var W=S.shader.progVar.append(T,$);if($(T.shared.gl,".useProgram(",W,".program);"),S.shader.program)yo(T,$,S,S.shader.program);else{$(T.shared.vao,".setVAO(null);");var Q=T.global.def("{}"),q=$.def(W,".id"),F=$.def(Q,"[",q,"]");$(T.cond(F).then(F,".call(this,a0);").else(F,"=",Q,"[",q,"]=",T.link(function(H){return lo(yo,T,S,H,1)}),"(",W,");",F,".call(this,a0);"))}Object.keys(S.state).length>0&&$(T.shared.current,".dirty=true;")}function r0(T,S,$,W){T.batchId="a1",Mn(T,S);function Q(){return!0}dr(T,S,$,W.attributes,Q),Ro(T,S,$,W.uniforms,Q),Rt(T,S,S,$)}function Ps(T,S,$,W){Mn(T,S);var Q=$.contextDep,q=S.def(),F="a0",H="a1",L=S.def();T.shared.props=L,T.batchId=q;var C=T.scope(),A=T.scope();S(C.entry,"for(",q,"=0;",q,"<",H,";++",q,"){",L,"=",F,"[",q,"];",A,"}",C.exit);function B(yt){return yt.contextDep&&Q||yt.propDep}function Z(yt){return!B(yt)}if($.needsContext&&$n(T,A,$.context),$.needsFramebuffer&&Fn(T,A,$.framebuffer),ur(T,A,$.state,B),$.profile&&B($.profile)&&Qt(T,A,$,!1,!0),W)$.useVAO?$.drawVAO?B($.drawVAO)?A(T.shared.vao,".setVAO(",$.drawVAO.append(T,A),");"):C(T.shared.vao,".setVAO(",$.drawVAO.append(T,C),");"):C(T.shared.vao,".setVAO(",T.shared.vao,".targetVAO);"):(C(T.shared.vao,".setVAO(null);"),dr(T,C,$,W.attributes,Z),dr(T,A,$,W.attributes,B)),Ro(T,C,$,W.uniforms,Z),Ro(T,A,$,W.uniforms,B),Rt(T,C,A,$);else{var fe=T.global.def("{}"),me=$.shader.progVar.append(T,A),se=A.def(me,".id"),Ie=A.def(fe,"[",se,"]");A(T.shared.gl,".useProgram(",me,".program);","if(!",Ie,"){",Ie,"=",fe,"[",se,"]=",T.link(function(yt){return lo(r0,T,$,yt,2)}),"(",me,");}",Ie,".call(this,a0[",q,"],",q,");")}}function N(T,S){var $=T.proc("batch",2);T.batchId="0",Mn(T,$);var W=!1,Q=!0;Object.keys(S.context).forEach(function(fe){W=W||S.context[fe].propDep}),W||($n(T,$,S.context),Q=!1);var q=S.framebuffer,F=!1;q?(q.propDep?W=F=!0:q.contextDep&&W&&(F=!0),F||Fn(T,$,q)):Fn(T,$,null),S.state.viewport&&S.state.viewport.propDep&&(W=!0);function H(fe){return fe.contextDep&&W||fe.propDep}or(T,$,S),ur(T,$,S.state,function(fe){return!H(fe)}),(!S.profile||!H(S.profile))&&Qt(T,$,S,!1,"a1"),S.contextDep=W,S.needsContext=Q,S.needsFramebuffer=F;var L=S.shader.progVar;if(L.contextDep&&W||L.propDep)Ps(T,$,S,null);else{var C=L.append(T,$);if($(T.shared.gl,".useProgram(",C,".program);"),S.shader.program)Ps(T,$,S,S.shader.program);else{$(T.shared.vao,".setVAO(null);");var A=T.global.def("{}"),B=$.def(C,".id"),Z=$.def(A,"[",B,"]");$(T.cond(Z).then(Z,".call(this,a0,a1);").else(Z,"=",A,"[",B,"]=",T.link(function(fe){return lo(Ps,T,S,fe,2)}),"(",C,");",Z,".call(this,a0,a1);"))}}Object.keys(S.state).length>0&&$(T.shared.current,".dirty=true;")}function ne(T,S){var $=T.proc("scope",3);T.batchId="a2";var W=T.shared,Q=W.current;$n(T,$,S.context),S.framebuffer&&S.framebuffer.append(T,$),am(Object.keys(S.state)).forEach(function(F){var H=S.state[F],L=H.append(T,$);_n(L)?L.forEach(function(C,A){$.set(T.next[F],"["+A+"]",C)}):$.set(W.next,"."+F,L)}),Qt(T,$,S,!0,!0),[Ns,Af,Os,zf,Rs].forEach(function(F){var H=S.draw[F];H&&$.set(W.draw,"."+F,""+H.append(T,$))}),Object.keys(S.uniforms).forEach(function(F){var H=S.uniforms[F].append(T,$);Array.isArray(H)&&(H="["+H.join()+"]"),$.set(W.uniforms,"["+E.id(F)+"]",H)}),Object.keys(S.attributes).forEach(function(F){var H=S.attributes[F].append(T,$),L=T.scopeAttrib(F);Object.keys(new K).forEach(function(C){$.set(L,"."+C,H[C])})}),S.scopeVAO&&$.set(W.vao,".targetVAO",S.scopeVAO.append(T,$));function q(F){var H=S.shader[F];H&&$.set(W.shader,"."+F,H.append(T,$))}q(Wc),q(Vc),Object.keys(S.state).length>0&&($(Q,".dirty=true;"),$.exit(Q,".dirty=true;")),$("a1(",T.shared.context,",a0,",T.batchId,");")}function J(T){if(!(typeof T!="object"||_n(T))){for(var S=Object.keys(T),$=0;$<S.length;++$)if(Ee.isDynamic(T[S[$]]))return!0;return!1}}function at(T,S,$){var W=S.static[$];if(!W||!J(W))return;var Q=T.global,q=Object.keys(W),F=!1,H=!1,L=!1,C=T.global.def("{}");q.forEach(function(B){var Z=W[B];if(Ee.isDynamic(Z)){typeof Z=="function"&&(Z=W[B]=Ee.unbox(Z));var fe=Xr(Z,null);F=F||fe.thisDep,L=L||fe.propDep,H=H||fe.contextDep}else{switch(Q(C,".",B,"="),typeof Z){case"number":Q(Z);break;case"string":Q('"',Z,'"');break;case"object":Array.isArray(Z)&&Q("[",Z.join(),"]");break;default:Q(T.link(Z));break}Q(";")}});function A(B,Z){q.forEach(function(fe){var me=W[fe];if(Ee.isDynamic(me)){var se=B.invoke(Z,me);Z(C,".",fe,"=",se,";")}})}S.dynamic[$]=new Ee.DynamicVariable(Sf,{thisDep:F,contextDep:H,propDep:L,ref:C,append:A}),delete S.static[$]}function so(T,S,$,W,Q){var q=Ft();q.stats=q.link(Q),Object.keys(S.static).forEach(function(H){at(q,S,H)}),Zw.forEach(function(H){at(q,T,H)});var F=Ln(T,S,$,W,q);return kn(q,F),ne(q,F),N(q,F),t(q.compile(),{destroy:function(){F.shader.program.destroy()}})}return{next:nt,current:we,procs:function(){var T=Ft(),S=T.proc("poll"),$=T.proc("refresh"),W=T.block();S(W),$(W);var Q=T.shared,q=Q.gl,F=Q.next,H=Q.current;W(H,".dirty=false;"),Fn(T,S),Fn(T,$,null,!0);var L;$e&&(L=T.link($e)),O.oes_vertex_array_object&&$(T.link(O.oes_vertex_array_object),".bindVertexArrayOES(null);");for(var C=0;C<oe.maxAttributes;++C){var A=$.def(Q.attributes,"[",C,"]"),B=T.cond(A,".buffer");B.then(q,".enableVertexAttribArray(",C,");",q,".bindBuffer(",Li,",",A,".buffer.buffer);",q,".vertexAttribPointer(",C,",",A,".size,",A,".type,",A,".normalized,",A,".stride,",A,".offset);").else(q,".disableVertexAttribArray(",C,");",q,".vertexAttrib4f(",C,",",A,".x,",A,".y,",A,".z,",A,".w);",A,".buffer=null;"),$(B),$e&&$(L,".vertexAttribDivisorANGLE(",C,",",A,".divisor);")}return $(T.shared.vao,".currentVAO=null;",T.shared.vao,".setVAO(",T.shared.vao,".targetVAO);"),Object.keys(Be).forEach(function(Z){var fe=Be[Z],me=W.def(F,".",Z),se=T.block();se("if(",me,"){",q,".enable(",fe,")}else{",q,".disable(",fe,")}",H,".",Z,"=",me,";"),$(se),S("if(",me,"!==",H,".",Z,"){",se,"}")}),Object.keys(Me).forEach(function(Z){var fe=Me[Z],me=we[Z],se,Ie,yt=T.block();if(yt(q,".",fe,"("),_n(me)){var Zt=me.length;se=T.global.def(F,".",Z),Ie=T.global.def(H,".",Z),yt(to(Zt,function(lt){return se+"["+lt+"]"}),");",to(Zt,function(lt){return Ie+"["+lt+"]="+se+"["+lt+"];"}).join("")),S("if(",to(Zt,function(lt){return se+"["+lt+"]!=="+Ie+"["+lt+"]"}).join("||"),"){",yt,"}")}else se=W.def(F,".",Z),Ie=W.def(H,".",Z),yt(se,");",H,".",Z,"=",se,";"),S("if(",se,"!==",Ie,"){",yt,"}");$(yt)}),T.compile()}(),compile:so}}function x4(){return{vaoCount:0,bufferCount:0,elementsCount:0,framebufferCount:0,shaderCount:0,textureCount:0,cubeCount:0,renderbufferCount:0,maxTextureUnits:0}}var y4=34918,b4=34919,im=35007,w4=function(x,E){if(!E.ext_disjoint_timer_query)return null;var O=[];function oe(){return O.pop()||E.ext_disjoint_timer_query.createQueryEXT()}function ve($e){O.push($e)}var ee=[];function re($e){var et=oe();E.ext_disjoint_timer_query.beginQueryEXT(im,et),ee.push(et),Ne(ee.length-1,ee.length,$e)}function Le(){E.ext_disjoint_timer_query.endQueryEXT(im)}function Ce(){this.startQueryIndex=-1,this.endQueryIndex=-1,this.sum=0,this.stats=null}var Fe=[];function Pe(){return Fe.pop()||new Ce}function He($e){Fe.push($e)}var Ye=[];function Ne($e,et,we){var nt=Pe();nt.startQueryIndex=$e,nt.endQueryIndex=et,nt.sum=0,nt.stats=we,Ye.push(nt)}var Ue=[],K=[];function ae(){var $e,et,we=ee.length;if(we!==0){K.length=Math.max(K.length,we+1),Ue.length=Math.max(Ue.length,we+1),Ue[0]=0,K[0]=0;var nt=0;for($e=0,et=0;et<ee.length;++et){var Ae=ee[et];E.ext_disjoint_timer_query.getQueryObjectEXT(Ae,b4)?(nt+=E.ext_disjoint_timer_query.getQueryObjectEXT(Ae,y4),ve(Ae)):ee[$e++]=Ae,Ue[et+1]=nt,K[et+1]=$e}for(ee.length=$e,$e=0,et=0;et<Ye.length;++et){var Be=Ye[et],Me=Be.startQueryIndex,je=Be.endQueryIndex;Be.sum+=Ue[je]-Ue[Me];var At=K[Me],Gt=K[je];Gt===At?(Be.stats.gpuTime+=Be.sum/1e6,He(Be)):(Be.startQueryIndex=At,Be.endQueryIndex=Gt,Ye[$e++]=Be)}Ye.length=$e}}return{beginQuery:re,endQuery:Le,pushScopeStats:Ne,update:ae,getNumPendingQueries:function(){return ee.length},clear:function(){O.push.apply(O,ee);for(var $e=0;$e<O.length;$e++)E.ext_disjoint_timer_query.deleteQueryEXT(O[$e]);ee.length=0,O.length=0},restore:function(){ee.length=0,O.length=0}}},_4=16384,M4=256,k4=1024,S4=34962,cm="webglcontextlost",lm="webglcontextrestored",fm=1,E4=2,A4=3;function hm(x,E){for(var O=0;O<x.length;++O)if(x[O]===E)return O;return-1}function z4(x){var E=Ct(x);if(!E)return null;var O=E.gl,oe=O.getContextAttributes(),ve=O.isContextLost(),ee=Pt(O,E);if(!ee)return null;var re=qe(),Le=x4(),Ce=ee.extensions,Fe=w4(O,Ce),Pe=de(),He=O.drawingBufferWidth,Ye=O.drawingBufferHeight,Ne={tick:0,time:0,viewportWidth:He,viewportHeight:Ye,framebufferWidth:He,framebufferHeight:Ye,drawingBufferWidth:He,drawingBufferHeight:Ye,pixelRatio:E.pixelRatio},Ue={},K={elements:null,primitive:4,count:-1,offset:0,instances:-1},ae=db(O,Ce),$e=Tb(O,Le,E,we),et=Gw(O,Ce,ae,Le,$e);function we(Rt){return et.destroyBuffer(Rt)}var nt=Gb(O,Ce,$e,Le),Ae=jw(O,re,Le,E),Be=xw(O,Ce,ae,function(){At.procs.poll()},Ne,Le,E),Me=yw(O,Ce,ae,Le,E),je=qw(O,Ce,ae,Be,Me,Le),At=g4(O,re,Ce,ae,$e,nt,Be,je,Ue,et,Ae,K,Ne,Fe,E),Gt=Xw(O,je,At.procs.poll,Ne,oe,Ce,ae),Ke=At.next,De=O.canvas,be=[],Ft=[],Kt=[],ct=[E.onDestroy],ao=null;function Ut(){if(be.length===0){Fe&&Fe.update(),ao=null;return}ao=ze.next(Ut),ur();for(var Rt=be.length-1;Rt>=0;--Rt){var lo=be[Rt];lo&&lo(Ne,null,0)}O.flush(),Fe&&Fe.update()}function eo(){!ao&&be.length>0&&(ao=ze.next(Ut))}function Eo(){ao&&(ze.cancel(Ut),ao=null)}function Tn(Rt){Rt.preventDefault(),ve=!0,Eo(),Ft.forEach(function(lo){lo()})}function Wn(Rt){O.getError(),ve=!1,ee.restore(),Ae.restore(),$e.restore(),Be.restore(),Me.restore(),je.restore(),et.restore(),Fe&&Fe.restore(),At.procs.refresh(),eo(),Kt.forEach(function(lo){lo()})}De&&(De.addEventListener(cm,Tn,!1),De.addEventListener(lm,Wn,!1));function ho(){be.length=0,Eo(),De&&(De.removeEventListener(cm,Tn),De.removeEventListener(lm,Wn)),Ae.clear(),je.clear(),Me.clear(),Be.clear(),nt.clear(),$e.clear(),et.clear(),Fe&&Fe.clear(),ct.forEach(function(Rt){Rt()})}function In(Rt){_(!!Rt,"invalid args to regl({...})"),_.type(Rt,"object","invalid args to regl({...})");function lo(Q){var q=t({},Q);delete q.uniforms,delete q.attributes,delete q.context,delete q.vao,"stencil"in q&&q.stencil.op&&(q.stencil.opBack=q.stencil.opFront=q.stencil.op,delete q.stencil.op);function F(H){if(H in q){var L=q[H];delete q[H],Object.keys(L).forEach(function(C){q[H+"."+C]=L[C]})}}return F("blend"),F("depth"),F("cull"),F("stencil"),F("polygonOffset"),F("scissor"),F("sample"),"vao"in Q&&(q.vao=Q.vao),q}function yo(Q,q){var F={},H={};return Object.keys(Q).forEach(function(L){var C=Q[L];if(Ee.isDynamic(C)){H[L]=Ee.unbox(C,L);return}else if(q&&Array.isArray(C)){for(var A=0;A<C.length;++A)if(Ee.isDynamic(C[A])){H[L]=Ee.unbox(C,L);return}}F[L]=C}),{dynamic:H,static:F}}var kn=yo(Rt.context||{},!0),r0=yo(Rt.uniforms||{},!0),Ps=yo(Rt.attributes||{},!1),N=yo(lo(Rt),!1),ne={gpuTime:0,cpuTime:0,count:0},J=At.compile(N,Ps,r0,kn,ne),at=J.draw,so=J.batch,T=J.scope,S=[];function $(Q){for(;S.length<Q;)S.push(null);return S}function W(Q,q){var F;if(ve&&_.raise("context lost"),typeof Q=="function")return T.call(this,null,Q,0);if(typeof q=="function")if(typeof Q=="number")for(F=0;F<Q;++F)T.call(this,null,q,F);else if(Array.isArray(Q))for(F=0;F<Q.length;++F)T.call(this,Q[F],q,F);else return T.call(this,Q,q,0);else if(typeof Q=="number"){if(Q>0)return so.call(this,$(Q|0),Q|0)}else if(Array.isArray(Q)){if(Q.length)return so.call(this,Q,Q.length)}else return at.call(this,Q)}return t(W,{stats:ne,destroy:function(){J.destroy()}})}var Jo=je.setFBO=In({framebuffer:Ee.define.call(null,fm,"framebuffer")});function Ln(Rt,lo){var yo=0;At.procs.poll();var kn=lo.color;kn&&(O.clearColor(+kn[0]||0,+kn[1]||0,+kn[2]||0,+kn[3]||0),yo|=_4),"depth"in lo&&(O.clearDepth(+lo.depth),yo|=M4),"stencil"in lo&&(O.clearStencil(lo.stencil|0),yo|=k4),_(!!yo,"called regl.clear with no buffer specified"),O.clear(yo)}function $n(Rt){if(_(typeof Rt=="object"&&Rt,"regl.clear() takes an object as input"),"framebuffer"in Rt)if(Rt.framebuffer&&Rt.framebuffer_reglType==="framebufferCube")for(var lo=0;lo<6;++lo)Jo(t({framebuffer:Rt.framebuffer.faces[lo]},Rt),Ln);else Jo(Rt,Ln);else Ln(null,Rt)}function Fn(Rt){_.type(Rt,"function","regl.frame() callback must be a function"),be.push(Rt);function lo(){var yo=hm(be,Rt);_(yo>=0,"cannot cancel a frame twice");function kn(){var r0=hm(be,kn);be[r0]=be[be.length-1],be.length-=1,be.length<=0&&Eo()}be[yo]=kn}return eo(),{cancel:lo}}function or(){var Rt=Ke.viewport,lo=Ke.scissor_box;Rt[0]=Rt[1]=lo[0]=lo[1]=0,Ne.viewportWidth=Ne.framebufferWidth=Ne.drawingBufferWidth=Rt[2]=lo[2]=O.drawingBufferWidth,Ne.viewportHeight=Ne.framebufferHeight=Ne.drawingBufferHeight=Rt[3]=lo[3]=O.drawingBufferHeight}function ur(){Ne.tick+=1,Ne.time=Qt(),or(),At.procs.poll()}function Mn(){Be.refresh(),or(),At.procs.refresh(),Fe&&Fe.update()}function Qt(){return(de()-Pe)/1e3}Mn();function dr(Rt,lo){_.type(lo,"function","listener callback must be a function");var yo;switch(Rt){case"frame":return Fn(lo);case"lost":yo=Ft;break;case"restore":yo=Kt;break;case"destroy":yo=ct;break;default:_.raise("invalid event, must be one of frame,lost,restore,destroy")}return yo.push(lo),{cancel:function(){for(var kn=0;kn<yo.length;++kn)if(yo[kn]===lo){yo[kn]=yo[yo.length-1],yo.pop();return}}}}var Ro=t(In,{clear:$n,prop:Ee.define.bind(null,fm),context:Ee.define.bind(null,E4),this:Ee.define.bind(null,A4),draw:In({}),buffer:function(Rt){return $e.create(Rt,S4,!1,!1)},elements:function(Rt){return nt.create(Rt,!1)},texture:Be.create2D,cube:Be.createCube,renderbuffer:Me.create,framebuffer:je.create,framebufferCube:je.createCube,vao:et.createVAO,attributes:oe,frame:Fn,on:dr,limits:ae,hasExtension:function(Rt){return ae.extensions.indexOf(Rt.toLowerCase())>=0},read:Gt,destroy:ho,_gl:O,_refresh:Mn,poll:function(){ur(),Fe&&Fe.update()},now:Qt,stats:Le});return E.onDone(null,Ro),Ro}return z4})});var Is=ke((uA,Pm)=>{"use strict";var y0=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],b0=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],a0=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],jf=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],il=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],xu=e=>Math.hypot(e[0],e[1],e[2]),ka=e=>{let t=xu(e)||1;return[e[0]/t,e[1]/t,e[2]/t]};function Fi(e,t){let o=e.length-1,n=Math.min(Math.max(t,0),1)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,s=e[Math.max(0,r-1)],i=e[r],c=e[r+1],f=e[Math.min(o,r+2)],l=[0,0,0];for(let d=0;d<3;d++)l[d]=.5*(2*i[d]+(-s[d]+c[d])*a+(2*s[d]-5*i[d]+4*c[d]-f[d])*a*a+(-s[d]+3*i[d]-3*c[d]+f[d])*a*a*a);return l}function U4(e,t){return Fi(e.map(o=>[o,0,0]),t)[0]}function B4(e,t,o,n){let r={curMat:[0,0,0]},s={r:[1,0,0,0,1,0,0,0,1],t:[0,0,0],s:1},i=[];r.save=()=>{i.push({r:s.r.slice(),t:s.t.slice(),s:s.s})},r.restore=()=>{s=i.pop()};let c=(h,v)=>{let u=new Array(9);for(let p=0;p<3;p++)for(let m=0;m<3;m++)u[p*3+m]=h[p*3]*v[m]+h[p*3+1]*v[3+m]+h[p*3+2]*v[6+m];return u},f=h=>[s.r[0]*h[0]+s.r[1]*h[1]+s.r[2]*h[2],s.r[3]*h[0]+s.r[4]*h[1]+s.r[5]*h[2],s.r[6]*h[0]+s.r[7]*h[1]+s.r[8]*h[2]];r.translate=(h,v,u)=>{let p=f([h,v,u]);s.t=[s.t[0]+p[0]*s.s,s.t[1]+p[1]*s.s,s.t[2]+p[2]*s.s]},r.scale=h=>{s.s*=h},r.rotateY=h=>{let v=Math.cos(h),u=Math.sin(h);s.r=c(s.r,[v,0,u,0,1,0,-u,0,v])},r.vert=(h,v,u)=>{let p=u||r.curMat,m=f(h),g=ka(f(v));return e.push(m[0]*s.s+s.t[0],m[1]*s.s+s.t[1],m[2]*s.s+s.t[2]),t.push(g[0],g[1],g[2]),n.push(p[0],p[1],p[2]),e.length/3-1};let l=h=>[e[h*3],e[h*3+1],e[h*3+2]],d=h=>[t[h*3],t[h*3+1],t[h*3+2]];return r.tri=(h,v,u)=>{let p=l(h),m=il(y0(l(v),p),y0(l(u),p)),g=b0(b0(d(h),d(v)),d(u));jf(m,g)<0?o.push(h,u,v):o.push(h,v,u)},r.box=(h,v,u,p,m,g,y)=>{let b=[[[h,v,u],[p,v,u],[h,m,u],[p,m,u],[0,0,-1]],[[p,v,g],[h,v,g],[p,m,g],[h,m,g],[0,0,1]],[[h,v,g],[h,v,u],[h,m,g],[h,m,u],[-1,0,0]],[[p,v,u],[p,v,g],[p,m,u],[p,m,g],[1,0,0]],[[h,m,u],[p,m,u],[h,m,g],[p,m,g],[0,1,0]],[[h,v,g],[p,v,g],[h,v,u],[p,v,u],[0,-1,0]]];for(let w of b){let M=r.vert(w[0],w[4],y),k=r.vert(w[1],w[4],y),z=r.vert(w[2],w[4],y),P=r.vert(w[3],w[4],y);r.tri(M,k,z),r.tri(k,P,z)}},r.surface=(h,v,u,p)=>{p=p||{};let m=.001,g=M=>Math.min(1,Math.max(0,M)),y=[],b=[];for(let M=0;M<=v;M++){let k=[],z=[];for(let P=0;P<=u;P++){let R=M/v,U=P/u,D=h(R,U),Y=Math.min(1-m,Math.max(m,R)),I=p.wrapV?U:Math.min(1-m,Math.max(m,U)),j=y0(h(g(Y+m),I),h(g(Y-m),I)),ue=p.wrapV?I+m:g(I+m),Ge=p.wrapV?I-m:g(I-m),Te=y0(h(Y,ue),h(Y,Ge)),ye=il(j,Te);xu(ye)<1e-14&&(ye=p.inside?y0(D,p.inside(R,U)):[0,1,0]),ye=ka(ye),p.inside&&jf(ye,y0(D,p.inside(R,U)))<0&&(ye=a0(ye,-1));let le=p.mat?p.mat(R,U,D):null;k.push(r.vert(D,ye,le)),p.double&&z.push(r.vert(D,a0(ye,-1),le))}y.push(k),b.push(z)}let w=M=>{for(let k=0;k<v;k++)for(let z=0;z<u;z++){let P=M[k][z],R=M[k+1][z],U=M[k][z+1],D=M[k+1][z+1];r.tri(P,R,U),r.tri(R,D,U)}};w(y),p.double&&w(b)},r.ellipsoid=(h,v,u,p,m)=>{m=m||{};let g=m.warp||null;r.surface((y,b)=>{let w=y*Math.PI,M=b*Math.PI*2,k=g?g(y,b):1;return[h[0]+v[0]*k*Math.sin(w)*Math.cos(M),h[1]+v[1]*k*Math.cos(w),h[2]+v[2]*k*Math.sin(w)*Math.sin(M)]},u||10,p||14,{wrapV:!0,inside:()=>h,mat:m.mat})},r.tube=(h,v,u,p,m)=>{m=m||{};let g=40,y=[],b=null;for(let k=0;k<=g;k++){let z=k/g,P=Fi(h,Math.max(0,z-.01)),R=Fi(h,Math.min(1,z+.01)),U=ka(y0(R,P)),D;if(b)D=ka(y0(b,a0(U,jf(b,U))));else{let Y=Math.abs(U[1])<.9?[0,1,0]:[1,0,0];D=ka(il(U,Y))}y.push({N:D,B:ka(il(U,D))}),b=D}let w=k=>{let z=Math.min(Math.max(k,0),1)*g,P=Math.min(g-1,Math.floor(z)),R=z-P,U=y[P],D=y[P+1];return{N:ka(b0(a0(U.N,1-R),a0(D.N,R))),B:ka(b0(a0(U.B,1-R),a0(D.B,R)))}},M=m.squash||[1,1];r.surface((k,z)=>{let P=Fi(h,k),R=w(k),U=v(k),D=z*Math.PI*2;return b0(P,b0(a0(R.N,Math.cos(D)*U*M[0]),a0(R.B,Math.sin(D)*U*M[1])))},u||12,p||8,{wrapV:!0,inside:k=>Fi(h,k),mat:m.mat})},r.lathe=(h,v,u,p,m)=>{m=m||{};let g=[];for(let y=0;y<h.length-1;y++){let b=h[y+1][0]-h[y][0],w=h[y+1][1]-h[y][1];g.push(ka([w,-b,0]))}for(let y=0;y<h.length-1;y++){let b=h[y],w=h[y+1],M=y===0||b[2]===1,k=y===h.length-2||w[2]===1,z=M?g[y]:ka(b0(g[y-1],g[y])),P=k?g[y]:ka(b0(g[y],g[y+1])),R=[],U=[];for(let D=0;D<=p;D++){let Y=D/p*Math.PI*2,I=Math.cos(Y),j=Math.sin(Y),ue=m.mat?m.mat(Y,b[1]):null,Ge=m.mat?m.mat(Y,w[1]):null;R.push(r.vert([v+b[0]*I,b[1],u+b[0]*j],[z[0]*I,z[1],z[0]*j],ue)),U.push(r.vert([v+w[0]*I,w[1],u+w[0]*j],[P[0]*I,P[1],P[0]*j],Ge))}for(let D=0;D<p;D++)r.tri(R[D],R[D+1],U[D]),r.tri(R[D+1],U[D+1],U[D])}},r}Pm.exports={createBuilder:B4,catmull:Fi,curve1:U4,sub:y0,add:b0,mul:a0,dot:jf,cross:il,norm:ka,len:xu}});var qm=ke((dA,Fm)=>{"use strict";var{norm:Wf,add:Vf,mul:G0,sub:j4,cross:Im}=Is(),$m=Math.PI*2,W4=(e,t,o)=>{let n=Math.min(1,Math.max(0,(o-e)/(t-e)));return n*n*(3-2*n)};function V4(e){let t=e>>>0;return()=>{t|=0,t=t+1831565813|0;let o=Math.imul(t^t>>>15,1|t);return o=o+Math.imul(o^o>>>7,61|o)^o,((o^o>>>14)>>>0)/4294967296}}function X4(e,t,o,n,r,a){let s=(h,v)=>[7,h*a,v];e.curMat=[0,0,0],e.box(t-a*1.36,n,o-a*1.36,t+a*1.36,n+.22,o+a*1.36),e.lathe([[a*1.24,n+.22,1],[a*1.3,n+.27],[a*1.31,n+.32],[a*1.26,n+.37,1],[a*1.1,n+.4],[a*1.14,n+.44,1],[a*1.18,n+.47],[a*1.1,n+.52,1],[a*.96,n+.55]],t,o,56,{mat:s});let i=n+.55,c=r-i,f=20,l=6,d=a*.075;return e.surface((h,v)=>{let u=i+h*c,p=a*(.96-.12*h),m=v*$m,g=v*f%1,y=p-d*4*g*(1-g);return[t+y*Math.cos(m),u,o+y*Math.sin(m)]},10,f*l,{wrapV:!0,inside:h=>[t,i+h*c,o],mat:(h,v)=>[7,v*$m*a,i+h*c]}),e.lathe([[a*.8,r-.02,1],[a*.9,r+.02],[a*.9,r+.07,1],[a*.82,r+.09,1],[a*.86,r+.13],[a*1.06,r+.2],[a*1.22,r+.28],[a*1.28,r+.33,1]],t,o,56,{mat:s}),e.curMat=[0,0,0],e.box(t-a*1.42,r+.33,o-a*1.42,t+a*1.42,r+.53,o+a*1.42),r+.53}function Y4(e,t,o){e.curMat=[1,0,0],e.lathe([[t*1.1,0,1],[t*1.1,o*.14,1],[t*1.04,o*.14,1],[t*1.04,o*.2],[t*.97,o*.26,1],[t*.95,o*.26,1],[t*.95,o*.8,1],[t*.98,o*.8,1],[t*1.03,o*.86],[t*1.05,o*.92,1],[t*1.05,o,1],[t*.5,o,1],[0,o]],0,0,72)}function K4(e,t,o,n,r){e.save(),e.translate(t,0,o),Y4(e,n,r),e.restore()}function Q4(e,t,o,n,r,a){let s=V4(n),i=a?Wf([a[0],0,a[1]]):null;e.save(),e.translate(t,0,o),e.scale(r||1),e.curMat=[3,0,0],e.lathe([[.17,0,1],[.2,.02],[.28,.13],[.36,.3],[.395,.47],[.38,.62],[.32,.74],[.29,.8],[.292,.82,1],[.325,.84],[.335,.88,1],[.3,.905,1],[.275,.895,1],[.272,.85]],0,0,48),e.curMat=[5,0,0],e.lathe([[.272,.85,1],[.1,.868],[0,.872]],0,0,24);let c=11,f=.86;for(let l=0;l<c;l++){let d=l>=c-2,h=l*2.399963+s()*.5,v=[Math.cos(h),0,Math.sin(h)],u=[-Math.sin(h),0,Math.cos(h)],p=l*.618%1,m=d?.06+s()*.06:.12+.62*p,g=1;if(i){let ye=v[0]*i[0]+v[2]*i[2];g=.25+.75*W4(-.7,.5,ye),m*=g}let y=d?1.1+s()*.25:.85+.55*(1-p*.55)+s()*.15,b=d?1+s()*.2:.95+s()*.28,w=d?.055:.215+s()*.05,M=.04+s()*.05,k=[v[0]*M,f,v[2]*M],z=[k[0]+v[0]*Math.sin(m)*y*.92,k[1]+Math.cos(m)*y,k[2]+v[2]*Math.sin(m)*y*.92],P=[k[0]+v[0]*Math.sin(m*.5)*y*.45,k[1]+y*.5,k[2]+v[2]*Math.sin(m*.5)*y*.45];e.curMat=[4,0,0],e.tube([k,P,z],ye=>.02-.008*ye,8,7);let R=24,U=m*.9+.05,D=m+(d?.12:(.95+.45*p)*(.35+.65*g)),Y=[z],I=[],j=z;for(let ye=0;ye<R;ye++){let le=ye/R,Ve=U+(D-U)*le*le,zt=[v[0]*Math.sin(Ve),Math.cos(Ve),v[2]*Math.sin(Ve)];I.push(zt),j=Vf(j,G0(zt,b/R)),Y.push(j)}I.push(I[I.length-1]);let ue=ye=>{let le=ye*R,Ve=Math.min(R-1,Math.floor(le)),zt=le-Ve;return Vf(G0(Y[Ve],1-zt),G0(Y[Ve+1],zt))},Ge=ye=>{let le=ye*R,Ve=Math.min(R,Math.floor(le)),zt=Math.min(R,Ve+1),St=le-Ve;return Wf(Vf(G0(I[Ve],1-St),G0(I[zt],St)))},Te=(s()-.5)*.5;e.curMat=[2,0,0],e.surface((ye,le)=>{let Ve=le*2-1,zt=ue(ye),St=Ge(ye),Vt=Te*ye,Tt=Vf(G0(u,Math.cos(Vt)),G0(Im(St,u),Math.sin(Vt)));Tt=Wf(j4(Tt,G0(St,Tt[0]*St[0]+Tt[1]*St[1]+Tt[2]*St[2])));let no=Wf(Im(Tt,St)),bo=w*Math.pow(Math.sin(Math.PI*Math.pow(ye,.72)),.85),Yo=.3*bo*Math.abs(Ve)+.012*Math.sin(ye*40+Ve*2)*Math.abs(Ve)*(d?0:1),tt=-.1*bo*Ve*Ve*Ve*Ve,Et=Yo+tt;return[zt[0]+Tt[0]*Ve*bo+no[0]*Et,zt[1]+Tt[1]*Ve*bo+no[1]*Et,zt[2]+Tt[2]*Ve*bo+no[2]*Et]},14,8,{double:!0,mat:(ye,le)=>[2,le*2-1,ye]})}e.restore()}Fm.exports={addFlutedColumn:X4,addStatue:K4,addPlant:Q4}});var H0=ke((pA,Um)=>{"use strict";var Oe={xc:7,r:2.5,spring:4.7};Oe.x0=Oe.xc-Oe.r;Oe.x1=Oe.xc+Oe.r;Oe.top=Oe.spring+Oe.r;var Ir=.06,sn=.1,Dm=.08,Xf=Oe.r,Yf=[Oe.x0+Xf/3,Oe.x0+2*Xf/3,Oe.xc+Xf/3,Oe.xc+2*Xf/3],qi=.28,yu=[.95,1.65,2.35,3.05,3.75],Gm=[1.05,1.8],cl=[8,0,0],sa=[0,0,0];function Sa(e,t,o,n,r,a,s,i){e.box(Math.min(t,r),Math.min(o,a),Math.min(n,s),Math.max(t,r),Math.max(o,a),Math.max(n,s),i)}function Di(e,t,o,n,r,a,s){let i=e.vert(t,a,s),c=e.vert(o,a,s),f=e.vert(n,a,s),l=e.vert(r,a,s);e.tri(i,c,f),e.tri(i,f,l)}function Kf(e,t,o,n,r,a,s=48,i=0,c=Math.PI){let f=(l,d,h)=>[Oe.xc+d*Math.cos(l),Oe.spring+d*Math.sin(l),h];for(let l=0;l<s;l++){let d=i+(c-i)*l/s,h=i+(c-i)*(l+1)/s,v=(d+h)/2;Di(e,f(d,t,r),f(h,t,r),f(h,o,r),f(d,o,r),[0,0,1],a),Di(e,f(d,o,n),f(h,o,n),f(h,t,n),f(d,t,n),[0,0,-1],a),Di(e,f(d,t,n),f(h,t,n),f(h,t,r),f(d,t,r),[-Math.cos(v),-Math.sin(v),0],a),Di(e,f(h,o,n),f(d,o,n),f(d,o,r),f(h,o,r),[Math.cos(v),Math.sin(v),0],a)}}function Z4(e){let n=a=>[Oe.xc+Oe.r*Math.cos(a),Oe.spring+Oe.r*Math.sin(a)],r=a=>{let s=Math.cos(a),i=Math.sin(a),c=Math.abs(s)>1e-6?Oe.r/Math.abs(s):1/0,f=i>1e-6?(8-Oe.spring)/i:1/0,l=Math.min(c,f);return[Math.min(Oe.x1,Math.max(Oe.x0,Oe.xc+s*l)),Math.min(8,Oe.spring+i*l)]};for(let a=0;a<48;a++){let s=Math.PI*a/48,i=Math.PI*(a+1)/48,c=n(s),f=n(i),l=r(s),d=r(i);for(let[v,u]of[[.35,1],[-.35,-1]])Di(e,[c[0],c[1],v],[f[0],f[1],v],[d[0],d[1],v],[l[0],l[1],v],[0,0,u],sa);let h=(s+i)/2;Di(e,[c[0],c[1],-.35],[f[0],f[1],-.35],[f[0],f[1],.35],[c[0],c[1],.35],[-Math.cos(h),-Math.sin(h),0],sa)}}function J4(e){Sa(e,-.35,0,-.35,Oe.x0,8,.35,sa),Sa(e,Oe.x1,0,-.35,14+.35,8,.35,sa),Z4(e),Hm(e)}function Hm(e){Sa(e,Oe.x0-.32,.3,.35,Oe.x0,Oe.spring,.35+.07,sa),Sa(e,Oe.x1,.3,.35,Oe.x1+.32,Oe.spring,.35+.07,sa),Sa(e,Oe.x0-.32-.05,0,.35,Oe.x0,.3,.35+.07+.04,sa),Sa(e,Oe.x1,0,.35,Oe.x1+.32+.05,.3,.35+.07+.04,sa),Sa(e,Oe.x0-.32-.06,Oe.spring-.12,.35,Oe.x0,Oe.spring,.35+.07+.05,sa),Sa(e,Oe.x1,Oe.spring-.12,.35,Oe.x1+.32+.06,Oe.spring,.35+.07+.05,sa),Kf(e,Oe.r,Oe.r+.32,.35,.35+.07,sa),Kf(e,Oe.r+.32,Oe.r+.32+.06,.35,.35+.07+.03,sa),Sa(e,Oe.xc-.22,Oe.top-.08,.35,Oe.xc+.22,Oe.top+.32+.12,.35+.07+.06,sa)}function e_(e,t){t=t||"all";let o=t==="all",n=o||t==="fixed",r=-Dm/2,a=Dm/2,s=(h,v,u,p,m=0)=>Sa(e,h-m,v,r,u+m,p,a,cl),i=h=>Oe.spring+Math.sqrt(Math.max(0,Oe.r*Oe.r-(h-Oe.xc)*(h-Oe.xc))),c=t==="right"?Oe.xc:Oe.x0,f=t==="left"?Oe.xc:Oe.x1,l=h=>o||t==="left"&&h<Oe.xc||t==="right"&&h>Oe.xc,d=o?null:Oe.spring-.06;if(n){s(Oe.x0,0,Oe.x0+sn,Oe.spring),s(Oe.x1-sn,0,Oe.x1,Oe.spring),Kf(e,Oe.r-sn,Oe.r,r,a,cl,64),s(Oe.x0,0,Oe.x1,.05),s(Oe.x0,Oe.spring-.06,Oe.x1,Oe.spring+.06);for(let h of Gm)Kf(e,h-Ir/2,h+Ir/2,r,a,cl,48)}if(o){s(Oe.x0,0,Oe.x1,qi),s(Oe.xc-sn/2,0,Oe.xc+sn/2,Oe.top-sn*.5);for(let h of Yf)s(h-Ir/2,qi,h+Ir/2,i(h)-sn*.5);for(let h of yu)s(Oe.x0,h-Ir/2,Oe.x1,h+Ir/2)}else if(t==="fixed"){s(Oe.xc-sn/2,Oe.spring+.06,Oe.xc+sn/2,Oe.top-sn*.5);for(let h of Yf)s(h-Ir/2,Oe.spring+.06,h+Ir/2,i(h)-sn*.5)}else{let h=t==="left"?Oe.x0+sn:Oe.x1-sn;s(Math.min(h,h+(t==="left"?sn*.8:-sn*.8)),.05,Math.max(h,h+(t==="left"?sn*.8:-sn*.8)),d),s(c,.05,f,qi),s(c,d-.07,f,d);let v=t==="left"?Oe.xc-sn/2:Oe.xc;s(v,.05,v+sn/2,d);for(let u of Yf)l(u)&&s(u-Ir/2,qi,u+Ir/2,d-.07);for(let u of yu)s(c,u-Ir/2,f,u+Ir/2)}for(let h of[-1,1]){let v=Oe.xc+h*.16;l(v)&&(Sa(e,v-.02,1.05,a,v+.02,1.13,a+.06,cl),Sa(e,v-(h>0?0:.14),1.07,a+.05,v+(h>0?.14:0),1.11,a+.08,cl))}}function t_(e){e=e||"all";let t=[],o=0,{x0:n,x1:r,xc:a,r:s,spring:i}=Oe;if(e!=="fixed"){let f=e==="right"?a:n,l=e==="left"?a:r;if(t.push([f,0,o],[l,0,o],[l,i,o],[f,0,o],[l,i,o],[f,i,o]),e!=="all")return t}let c=48;for(let f=0;f<c;f++){let l=Math.PI*f/c,d=Math.PI*(f+1)/c;t.push([a,i,o],[a+s*Math.cos(l),i+s*Math.sin(l),o],[a+s*Math.cos(d),i+s*Math.sin(d),o])}return t}var Fo=e=>e.toFixed(4);function o_(){let e=Yf.map(n=>`vb = max(vb, barCover(abs(q.x - ${Fo(n)}), ${Fo(Ir/2)}, soft));`).join(`
		`),t=yu.map(n=>`hb = max(hb, barCover(abs(q.y - ${Fo(n)}), ${Fo(Ir/2)}, soft));`).join(`
		`),o=Gm.map(n=>`ab = max(ab, barCover(abs(rr - ${Fo(n)}), ${Fo(Ir/2)}, soft));`).join(`
		`);return`
	float barCover(float d, float hw, float soft) {
		return 1.0 - smoothstep(hw - soft, hw + soft, d);
	}

	// how open the doorway is at a point (x, y) on a plane, 0..1
	float doorOpen(vec2 q, float soft) {
		float side = smoothstep(${Fo(Oe.x0)} - soft, ${Fo(Oe.x0)} + soft, q.x)
		           * (1.0 - smoothstep(${Fo(Oe.x1)} - soft, ${Fo(Oe.x1)} + soft, q.x));
		float above = smoothstep(-soft, soft, q.y);
		float rr = length(q - vec2(${Fo(Oe.xc)}, ${Fo(Oe.spring)}));
		float arch = q.y < ${Fo(Oe.spring)} ? 1.0 : 1.0 - smoothstep(${Fo(Oe.r)} - soft, ${Fo(Oe.r)} + soft, rr);
		return side * above * arch;
	}

	// light that reaches floor point p through the door, 0..1
	float doorLight(vec3 p, vec3 toLight) {
		if (p.z < 0.3 || toLight.z > -0.01) return 0.0;
		// through the inner face of the wall
		float tIn = (${Fo(.35)} - p.z) / toLight.z;
		float tMid = (0.0 - p.z) / toLight.z;
		float tOut = (${Fo(-.35)} - p.z) / toLight.z;
		vec2 qIn = (p + toLight * tIn).xy;
		vec2 q = (p + toLight * tMid).xy;
		vec2 qOut = (p + toLight * tOut).xy;
		float dist = length(toLight * tMid);
		float soft = 0.006 + 0.016 * dist;
		float open = doorOpen(qIn, soft) * doorOpen(qOut, soft);
		if (open <= 0.0) return 0.0;

		// the frame: outer jambs, arched head, transom, rails, stiles, bars
		float rr = length(q - vec2(${Fo(Oe.xc)}, ${Fo(Oe.spring)}));
		float vb = barCover(abs(q.x - ${Fo(Oe.xc)}), ${Fo(sn/2)}, soft);
		${e}
		float hb = barCover(abs(q.y - ${Fo(Oe.spring)}), 0.06, soft);
		hb = max(hb, 1.0 - smoothstep(${Fo(qi)} - soft, ${Fo(qi)} + soft, q.y));
		float hRows = 0.0;
		{
			float hb2 = 0.0;
			${t.replace(/hb = max\(hb,/g,"hb2 = max(hb2,")}
			hRows = q.y < ${Fo(Oe.spring)} ? hb2 : 0.0;
		}
		float ab = 0.0;
		${o}
		ab = q.y > ${Fo(Oe.spring)} ? ab : 0.0;
		float frame = max(
			barCover(abs(q.x - ${Fo(Oe.x0+sn/2)}), ${Fo(sn/2)}, soft),
			barCover(abs(q.x - ${Fo(Oe.x1-sn/2)}), ${Fo(sn/2)}, soft));
		frame = q.y < ${Fo(Oe.spring)} ? frame : barCover(abs(rr - ${Fo(Oe.r-sn/2)}), ${Fo(sn/2)}, soft);
		float cover = max(max(max(vb, hb), max(hRows, ab)), frame);
		return open * (1.0 - cover * 0.92);
	}`}Um.exports={addEntranceWall:J4,addSurround:Hm,addFrames:e_,glassPanes:t_,doorLightGLSL:o_,DOOR:Oe,WALL:.35}});var Hi=ke((vA,Ym)=>{"use strict";var Fs=1.1583333333333334,qs=(13.05-8*.16)/9,wu=Fs+.16,_u=qs+.16,_0=14/2-7.75/2,ia=15,ll=_0+7.75,w0=ia+13.05,ca=.3,M0={y:8+.18,inset:.15},$s={y:8+.36,inset:ca},Mu=8+.2,fl=8+.62,ku=8+.9,Su=.016,Vm=.28,Xm=.66,n_=(()=>{let e=[-.15,1,.3],t=Math.hypot(e[0],e[1],e[2]);return e.map(o=>o/t)})(),r_=(()=>{let e=[.42,1,-.32],t=Math.hypot(e[0],e[1],e[2]);return e.map(o=>o/t)})(),a_=[9,0,0],pr=[10,0,0];function Gi(e,t,o,n,r,a,s){let i=e.vert(t,a,s),c=e.vert(o,a,s),f=e.vert(n,a,s),l=e.vert(r,a,s);e.tri(i,c,f),e.tri(i,f,l)}function $r(e,t,o,n,r,a,s){Gi(e,[t,a,o],[n,a,o],[n,a,r],[t,a,r],[0,-1,0],s)}function bu(e,t,o,n,r,a,s,i){Gi(e,[t,a,o],[n,a,o],[n,s,o],[t,s,o],[0,0,1],i),Gi(e,[n,a,r],[t,a,r],[t,s,r],[n,s,r],[0,0,-1],i),Gi(e,[t,a,r],[t,a,o],[t,s,o],[t,s,r],[1,0,0],i),Gi(e,[n,a,o],[n,a,r],[n,s,r],[n,s,o],[-1,0,0],i)}function Bm(e,t,o,n,r){$r(e,t[0],t[1],t[2],o[1],n,r),$r(e,t[0],o[3],t[2],t[3],n,r),$r(e,t[0],o[1],o[0],o[3],n,r),$r(e,o[2],o[1],t[2],o[3],n,r)}var jm=e=>_0+e*wu,Wm=e=>ia+e*_u;function s_(e,t,o=48){let n=[_0-ca,ia-ca,ll+ca,w0+ca],r=(f,l)=>[f[0]+l,f[1]+l,f[2]-l,f[3]-l],a=r(n,M0.inset),s=r(n,$s.inset);$r(e,0,0,14,n[1],8,t),$r(e,0,n[3],14,o,8,t),$r(e,0,n[1],n[0],n[3],8,t),$r(e,n[2],n[1],14,n[3],8,t);let i=.06,c=.06;e.box(n[0]-i,8-c,n[1]-i,n[2]+i,8,n[1],pr),e.box(n[0]-i,8-c,n[3],n[2]+i,8,n[3]+i,pr),e.box(n[0]-i,8-c,n[1],n[0],8,n[3],pr),e.box(n[2],8-c,n[1],n[2]+i,8,n[3],pr),bu(e,...n.slice(0,2),...n.slice(2),8,M0.y,pr),Bm(e,n,a,M0.y,pr),bu(e,...a.slice(0,2),...a.slice(2),M0.y,$s.y,pr),Bm(e,a,s,$s.y,pr);for(let f=1;f<6;f++){let l=jm(f)-.16;e.box(l,Mu,ia,l+.16,$s.y,w0,pr)}for(let f=1;f<9;f++){let l=Wm(f)-.16;e.box(_0,Mu,l,ll,$s.y,l+.16,pr)}for(let f=0;f<9;f++)for(let l=0;l<6;l++){let d=jm(l),h=Wm(f);bu(e,d,h,d+Fs,h+qs,$s.y,ku,pr),$r(e,d,h,d+Fs,h+qs,ku,a_),i_(e,d+Fs/2,h+qs/2,Fs/2,qs/2)}}function i_(e,t,o,n,r){let a=fl,s=Su;$r(e,t-n,o-s,t+n,o+s,a,pr),$r(e,t-s,o-r,t+s,o+r,a,pr);for(let i of[1,-1]){let c=Math.hypot(n,r),f=n/c,l=i*r/c,d=-l*s,h=f*s;Gi(e,[t-f*c+d,a,o-l*c+h],[t+f*c+d,a,o+l*c+h],[t+f*c-d,a,o+l*c-h],[t-f*c-d,a,o-l*c-h],[0,-1,0],pr)}for(let i of[Vm,Xm]){let c=i*n,f=i*r;$r(e,t-c-s,o-f-s,t+c+s,o-f+s,a,pr),$r(e,t-c-s,o+f-s,t+c+s,o+f+s,a,pr),$r(e,t-c-s,o-f+s,t-c+s,o+f-s,a,pr),$r(e,t+c-s,o-f+s,t+c+s,o+f-s,a,pr)}}var jt=e=>e.toFixed(4);function c_(){return`
	// by day the sun, high and a little towards the entrance; by night
	// the moon, lower and from the other side, so its squares of light
	// reach across the floor to the foot of the wall. (When the light is
	// switched, the squares slide from one to the other.)
	const vec3 SKY_SUN_DAY = vec3(${n_.map(jt).join(", ")});
	const vec3 SKY_MOON = vec3(${r_.map(jt).join(", ")});
	vec3 skySun() { return normalize(mix(SKY_SUN_DAY, SKY_MOON, night)); }
	#define SKY_SUN skySun()

	float rectOpen(vec2 q, vec4 r, float soft) {
		vec2 lo = smoothstep(r.xy - soft, r.xy + soft, q);
		vec2 hi = 1.0 - smoothstep(r.zw - soft, r.zw + soft, q);
		return lo.x * lo.y * hi.x * hi.y;
	}

	// inside a pane (not on a beam)? 0..1
	float paneOpen(vec2 q, float soft) {
		vec2 rel = q - vec2(${jt(_0)}, ${jt(ia)});
		vec2 pitch = vec2(${jt(wu)}, ${jt(_u)});
		vec2 cell = floor(rel / pitch);
		if (cell.x < 0.0 || cell.y < 0.0 || cell.x > ${jt(5)} || cell.y > ${jt(8)}) return 0.0;
		vec2 loc = rel - cell * pitch;
		return rectOpen(loc, vec4(0.0, 0.0, ${jt(Fs)}, ${jt(qs)}), soft);
	}

	float barCov(float d, float soft) {
		return 1.0 - smoothstep(${jt(Su)} - soft, ${jt(Su)} + soft, d);
	}

	// sunlight reaching point p through the skylight, 0..1
	float skylightAt(vec3 p) {
		if (p.y > ${jt(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q0 = (p + L * ((${jt(8)} - p.y) / L.y)).xz;
		vec2 q1 = (p + L * ((${jt(M0.y)} - p.y) / L.y)).xz;
		vec2 qb = (p + L * ((${jt(Mu)} - p.y) / L.y)).xz;
		vec2 q2 = (p + L * ((${jt($s.y)} - p.y) / L.y)).xz;
		float tG = (${jt(fl)} - p.y) / L.y;
		vec2 qg = (p + L * tG).xz;
		vec2 qt = (p + L * ((${jt(ku)} - p.y) / L.y)).xz;
		float soft = 0.004 + 0.007 * tG;
		float open = rectOpen(q0, vec4(${jt(_0-ca)}, ${jt(ia-ca)}, ${jt(ll+ca)}, ${jt(w0+ca)}), soft)
		           * rectOpen(q1, vec4(${jt(_0-ca+M0.inset)}, ${jt(ia-ca+M0.inset)}, ${jt(ll+ca-M0.inset)}, ${jt(w0+ca-M0.inset)}), soft)
		           * paneOpen(qb, soft) * paneOpen(q2, soft) * paneOpen(qt, soft);
		if (open <= 0.0) return 0.0;
		// the glazing, measured from the centre of this pane
		vec2 rel = qg - vec2(${jt(_0)}, ${jt(ia)});
		vec2 pitch = vec2(${jt(wu)}, ${jt(_u)});
		vec2 paneHalf = vec2(${jt(Fs/2)}, ${jt(qs/2)});
		vec2 c = rel - floor(rel / pitch) * pitch - paneHalf;
		vec2 ac = abs(c);
		vec2 an = ac / paneHalf;                       // 0 at the centre, 1 at the pane's edge
		float hm = min(paneHalf.x, paneHalf.y);
		float ring = max(an.x, an.y);
		float cover = max(barCov(ac.x, soft), barCov(ac.y, soft));
		cover = max(cover, barCov(abs(an.x - an.y) * hm * 0.7071, soft));
		cover = max(cover, barCov(abs(ring - ${jt(Vm)}) * hm, soft));
		cover = max(cover, barCov(abs(ring - ${jt(Xm)}) * hm, soft));
		return open * (1.0 - cover * 0.9);
	}

	// the same light for the beams in the air: the whole opening glows a
	// little, and the panes and bars show in it, softly
	float skylightVol(vec3 p) {
		if (p.y > ${jt(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q = (p + L * ((${jt(fl)} - p.y) / L.y)).xz;
		float open = rectOpen(q, vec4(${jt(_0)}, ${jt(ia)}, ${jt(ll)}, ${jt(w0)}), 0.25);
		if (open <= 0.0) return 0.0;
		return open * (0.13 + 0.87 * skylightAt(p));
	}

	// light thrown back up by the bright squares on the floor: strongest
	// on what stands beside them and faces them (the lower walls, the
	// pillars, the statues, the ceiling above), fading with distance
	float skylightBounce(vec3 p, vec3 n) {
		if (p.x > 14.2 || p.x < -0.4) return 0.0;
		vec3 L = SKY_SUN;
		vec2 c = vec2(${jt(14/2)}, ${jt((ia+w0)/2)}) - L.xz * (${jt(fl)} / L.y);
		vec2 d = max(abs(p.xz - c) - vec2(${jt(7.75/2)}, ${jt(13.05/2)}), 0.0);
		float fall = 1.0 / (1.0 + 0.09 * (dot(d, d) + p.y * p.y * 0.6));
		vec3 to = normalize(vec3(c.x, -0.4, c.y) - p);
		return fall * (0.3 + 0.7 * max(dot(n, to), 0.0));
	}

	// a soft daylight glow under the lantern
	float skylightGlow(vec3 p) {
		float z = smoothstep(${jt(ia-3)}, ${jt(ia+2)}, p.z)
		        * (1.0 - smoothstep(${jt(w0-2)}, ${jt(w0+3)}, p.z));
		float x = 1.0 - 0.35 * smoothstep(${jt(7.75/2)}, ${jt(14/2)}, abs(p.x - ${jt(14/2)}));
		return z * x;
	}`}Ym.exports={addSkylight:s_,skylightGLSL:c_,Z_START:ia,Z_END:w0,GLASS_Y:fl,HEIGHT:8}});var br=ke((mA,e2)=>{"use strict";var Bi=H0(),Tu=8,cn=.35,Je={x0:13.65,x1:38.12,z0:41,z1:47.2,zc:44.1,hallEnd:50.65,spring:5.6,crown:Tu},Km=(Je.z1-Je.z0)/2,Eu=Je.crown-Je.spring,zu=(Eu*Eu+Km*Km)/(2*Eu),Lu=Je.crown-zu;function Ui(e){let t=e-Je.zc;return Lu+Math.sqrt(Math.max(0,zu*zu-t*t))}var It={first:17.43,pitch:4.4,count:5,halfW:1.2,sill:.75,spring:4.3},Ha=Array.from({length:It.count},(e,t)=>It.first+t*It.pitch),Zm=Ha.slice(1).map(e=>e-It.pitch/2),l_=[Ha[0],Ha[2],Ha[4]],Zf=[Ha[1],Ha[3]],Yr={r:1.3,sill:.62,spring:3.3},Ho=[0,0,0],hl=[11,0,0],U0=[10,0,0],ul=[8,0,0];function nr(e,t,o,n,r,a,s){let i=e.vert(t,a,s),c=e.vert(o,a,s),f=e.vert(n,a,s),l=e.vert(r,a,s);e.tri(i,c,f),e.tri(i,f,l)}function Kr(e,t,o,n,r,a,s,i){e.box(Math.min(t,r),Math.min(o,a),Math.min(n,s),Math.max(t,r),Math.max(o,a),Math.max(n,s),i)}function dl(e,t){let{u0:o,u1:n,w0:r,w1:a,top:s,holes:i,mat:c}=t,f=new Set([o,n]);for(let p of i){f.add(p.u0),f.add(p.u1);let m=Math.max(8,Math.ceil((p.u1-p.u0)/(p.step||.08)));for(let g=1;g<m;g++)f.add(p.u0+(p.u1-p.u0)*g/m)}for(let p of t.cuts||[])f.add(p);let l=t.topStep||.5;for(let p=o;p<n;p+=l)f.add(p);let d=[...f].filter(p=>p>=o-1e-9&&p<=n+1e-9).sort((p,m)=>p-m),h=(p,m)=>p.bot?p.bot(m):p.bottom,v=(p,m)=>{let g=s(p),y=m.map(M=>[Math.max(0,h(M,p)),Math.min(M.head(p),g)]).filter(M=>M[1]>M[0]).sort((M,k)=>M[0]-k[0]),b=[],w=0;for(let M of y)M[0]>w+1e-6&&b.push([w,M[0]]),w=Math.max(w,M[1]);return g>w+1e-6&&b.push([w,g]),b},u=(p,m,g)=>[p,m,g];for(let p=0;p<d.length-1;p++){let m=d[p],g=d[p+1],y=(m+g)/2,b=i.filter(R=>y>R.u0&&y<R.u1),w=b.length?Math.max(m,Math.max(...b.map(R=>R.u0))+1e-7):m,M=b.length?Math.min(g,Math.min(...b.map(R=>R.u1))-1e-7):g,k=v(w,b),z=v(M,b),P=Math.min(k.length,z.length);for(let R=0;R<P;R++){let[U,D]=k[R],[Y,I]=z[R];D-U<1e-6&&I-Y<1e-6||(nr(e,u(m,U,a),u(g,Y,a),u(g,I,a),u(m,D,a),[0,0,1],c),t.frontOnly||nr(e,u(g,Y,r),u(m,U,r),u(m,D,r),u(g,I,r),[0,0,-1],c))}}t.noEnds||(nr(e,u(o,0,r),u(o,0,a),u(o,s(o),a),u(o,s(o),r),[-1,0,0],c),nr(e,u(n,0,a),u(n,0,r),u(n,s(n),r),u(n,s(n),a),[1,0,0],c));for(let p of i){if(p.noReveal)continue;let m=p.mat||t.revealMat||c,g=Math.max(0,h(p,p.u0+1e-7)),y=Math.max(0,h(p,p.u1-1e-7)),b=Math.min(p.head(p.u0+1e-7),s(p.u0)),w=Math.min(p.head(p.u1-1e-7),s(p.u1));b>g+1e-6&&nr(e,u(p.u0,g,a),u(p.u0,g,r),u(p.u0,b,r),u(p.u0,b,a),[1,0,0],m),w>y+1e-6&&nr(e,u(p.u1,y,r),u(p.u1,y,a),u(p.u1,w,a),u(p.u1,w,r),[-1,0,0],m);let M=Math.max(8,Math.ceil((p.u1-p.u0)/(p.step||.06)));for(let k=0;k<M;k++){let z=p.u0+(p.u1-p.u0)*k/M,P=p.u0+(p.u1-p.u0)*(k+1)/M,R=Math.max(z,p.u0+1e-7),U=Math.min(P,p.u1-1e-7),D=Math.min(p.head(R),s(z)),Y=Math.min(p.head(U),s(P));if(!(D>=s(z)-1e-6&&Y>=s(P)-1e-6)){let ue=P-z,Ge=Y-D,Te=Math.hypot(ue,Ge)||1;nr(e,u(z,D,r),u(P,Y,r),u(P,Y,a),u(z,D,a),[Ge/Te,-ue/Te,0],m)}let I=h(p,R),j=h(p,U);if(I>1e-6||j>1e-6){let ue=P-z,Ge=j-I,Te=Math.hypot(ue,Ge)||1;nr(e,u(P,j,r),u(z,I,r),u(z,I,a),u(P,j,a),[-Ge/Te,ue/Te,0],m)}}}}var Au=(e,t,o)=>n=>{let r=n-e;return o+Math.sqrt(Math.max(0,t*t-r*r))};function f_(e,t){let o=Yr.r,n=Yr.sill,r=Yr.spring,a=Je.z0,s=24,i=(v,u,p)=>[t+Math.cos(v)*u,p,a-Math.sin(v)*u];for(let v=0;v<s;v++){let u=Math.PI*v/s,p=Math.PI*(v+1)/s,m=[-Math.cos(u),0,Math.sin(u)],g=[-Math.cos(p),0,Math.sin(p)],y=[e.vert(i(u,o,n),m,Ho),e.vert(i(p,o,n),g,Ho),e.vert(i(p,o,r),g,Ho),e.vert(i(u,o,r),m,Ho)];e.tri(y[0],y[1],y[2]),e.tri(y[0],y[2],y[3])}let c=12,f=(v,u)=>[t+Math.cos(v)*Math.cos(u)*o,r+Math.sin(u)*o,a-Math.sin(v)*Math.cos(u)*o],l=(v,u)=>[-Math.cos(v)*Math.cos(u),-Math.sin(u),Math.sin(v)*Math.cos(u)];for(let v=0;v<s;v++)for(let u=0;u<c;u++){let p=Math.PI*v/s,m=Math.PI*(v+1)/s,g=Math.PI/2*u/c,y=Math.PI/2*(u+1)/c,b=[e.vert(f(p,g),l(p,g),U0),e.vert(f(m,g),l(m,g),U0),e.vert(f(m,y),l(m,y),U0),e.vert(f(p,y),l(p,y),U0)];e.tri(b[0],b[1],b[2]),e.tri(b[0],b[2],b[3])}for(let v=1;v<8;v++){let u=Math.PI*v/8,p=[];for(let m=0;m<=10;m++){let g=Math.PI/2*m/10*.97;p.push(f(u,g).map((y,b)=>y-l(u,g)[b]*.02))}e.tube(p,m=>.035*(1-m*.6),12,6,{mat:()=>U0})}let d=e.vert([t,n,a],[0,1,0],Ho);for(let v=0;v<s;v++){let u=Math.PI*v/s,p=Math.PI*(v+1)/s;e.tri(d,e.vert(i(u,o,n),[0,1,0],Ho),e.vert(i(p,o,n),[0,1,0],Ho))}Kr(e,t-o-.12,n-.1,a,t+o+.12,n+.02,a+.12,Ho),Kr(e,t-o-.16,n-.2,a,t+o+.16,n-.1,a+.07,Ho);let h=.16;for(let v=0;v<s;v++){let u=Math.PI*v/s,p=Math.PI*(v+1)/s,m=(g,y,b)=>[t+Math.cos(g)*y,r+Math.sin(g)*y,b];nr(e,m(u,o,a+.05),m(p,o,a+.05),m(p,o+h,a+.05),m(u,o+h,a+.05),[0,0,1],Ho),nr(e,m(u,o+h,a),m(p,o+h,a),m(p,o+h,a+.05),m(u,o+h,a+.05),[Math.cos((u+p)/2),Math.sin((u+p)/2),0],Ho),nr(e,m(u,o,a),m(p,o,a),m(p,o,a+.05),m(u,o,a+.05),[-Math.cos((u+p)/2),-Math.sin((u+p)/2),0],Ho)}for(let v of[-1,1]){let u=t+v*o,p=t+v*(o+h);Kr(e,u,n,a,p,r,a+.05,Ho),Kr(e,u-v*.02,r-.12,a,p+v*.06,r,a+.09,Ho)}Kr(e,t-.11,r+o-.04,a,t+.11,r+o+h+.1,a+.09,Ho),e.lathe([[.66,n,1],[.66,n+.06,1],[.62,n+.1],[.6,n+.3],[.64,n+.34,1],[.64,n+.4,1],[0,n+.4]],t,a-.62,40,{mat:()=>Ho})}var h_=Yr.sill+.4,u_=Je.z0-.62;function d_(e){nr(e,[14,0,Je.z0-cn],[Je.x1+cn,0,Je.z0-cn],[Je.x1+cn,0,Je.z1+cn],[14,0,Je.z1+cn],[0,1,0],Ho),e.curMat=hl,dl(e,{u0:14+cn,u1:Je.x1+2*cn,w0:Je.z0-2*cn,w1:Je.z0,top:()=>Je.spring,holes:Zf.map(f=>({u0:f-Yr.r,u1:f+Yr.r,bottom:Yr.sill,head:Au(f,Yr.r,Yr.spring),noReveal:!0})),mat:hl,cuts:[Je.x1]});for(let f of Zf)f_(e,f);e.save(),e.translate(0,0,Je.z1),e.rotateY(Math.PI),e.translate(-(Je.x1+2*cn),0,-2*cn);let t=f=>Je.x1+2*cn-f;dl(e,{u0:t(Je.x1+2*cn),u1:t(13.65),w0:0,w1:2*cn,top:()=>Je.spring,holes:Ha.map(f=>({u0:t(f+It.halfW),u1:t(f-It.halfW),bottom:It.sill,head:Au(t(f),It.halfW,It.spring)})),mat:hl,revealMat:Ho}),e.restore(),e.save(),e.translate(Je.x1,0,0),e.rotateY(-Math.PI/2);let o=Bi.DOOR,n=Je.zc,r=o.r;dl(e,{u0:Je.z0-2*cn,u1:Je.z1+2*cn,w0:-2*cn,w1:0,top:f=>f<Je.z0||f>Je.z1?Je.spring:Ui(f),topStep:.15,holes:[{u0:n-r,u1:n+r,bottom:0,head:Au(n,r,o.spring)}],mat:hl,revealMat:Ho}),e.restore(),e.save(),e.translate(14+cn,0,0),e.rotateY(-Math.PI/2),dl(e,{u0:Je.z0,u1:Je.z1,w0:-0,w1:2*cn,top:()=>Tu,topStep:.15,holes:[{u0:Je.z0,u1:Je.z1,bottom:0,head:f=>Ui(f)}],mat:hl,revealMat:Ho}),e.restore();let a=14+cn,s=Math.ceil((Je.x1-a)/1),i=28,c=[];for(let f=0;f<=s;f++){let l=a+(Je.x1-a)*f/s,d=[];for(let h=0;h<=i;h++){let v=Je.z0+(Je.z1-Je.z0)*h/i,u=Ui(v),p=[0,Lu-u,Je.zc-v],m=Math.hypot(p[1],p[2]);d.push(e.vert([l,u,v],[0,p[1]/m,p[2]/m],U0))}c.push(d)}for(let f=0;f<s;f++)for(let l=0;l<i;l++)e.tri(c[f][l],c[f+1][l],c[f][l+1]),e.tri(c[f+1][l],c[f+1][l+1],c[f][l+1])}function Qm(e,t,o,n){let a=[];for(let s=0;s<=32;s++){let i=Je.z0+(Je.z1-Je.z0)*s/32,c=Ui(i),f=Lu-c,l=Je.zc-i,d=Math.hypot(f,l),h=[c+f/d*n,i+l/d*n];a.push({y:c,z:i,iy:h[0],iz:h[1],n:[0,f/d,l/d]})}for(let s=0;s<32;s++){let i=a[s],c=a[s+1];nr(e,[t-o,i.iy,i.iz],[t+o,i.iy,i.iz],[t+o,c.iy,c.iz],[t-o,c.iy,c.iz],i.n,Ho),nr(e,[t-o,i.y,i.z],[t-o,i.iy,i.iz],[t-o,c.iy,c.iz],[t-o,c.y,c.z],[-1,0,0],Ho),nr(e,[t+o,i.iy,i.iz],[t+o,i.y,i.z],[t+o,c.y,c.z],[t+o,c.iy,c.iz],[1,0,0],Ho)}}function Qf(e,t,o,n){let s=o,i=o+n*.16;Kr(e,t-.28,0,s,t+.28,Je.spring-.3,i,Ho),Kr(e,t-.28-.06,0,s,t+.28+.06,.32,o+n*(.16+.05),Ho),Kr(e,t-.28-.05,Je.spring-.3,s,t+.28+.05,Je.spring-.1,o+n*(.16+.05),Ho),Kr(e,t-.28-.1,Je.spring-.1,s,t+.28+.1,Je.spring,o+n*(.16+.1),Ho)}function p_(e,t){let o=Ui(Je.zc),n=[[0,o-.13,1],[.05,o-.125],[.12,o-.1],[.16,o-.06,1],[.22,o-.05],[.3,o-.075],[.4,o-.06],[.48,o-.03,1],[.55,o-.035],[.7,o-.025],[.82,o-.012,1],[.95,o+.03]];e.lathe(n,t,Je.zc,48,{mat:()=>U0});for(let r=0;r<8;r++){let a=r*Math.PI/4,s=t+Math.cos(a)*.32,i=Je.zc+Math.sin(a)*.32;e.save(),e.translate(s,o-.07,i),e.rotateY(-a),e.curMat=U0,e.ellipsoid([0,0,0],[.13,.03,.06],6,10),e.restore()}}function v_(e){e.curMat=Ho;for(let[t,o]of[[Je.z0,1],[Je.z1,-1]])Kr(e,14.35,Je.spring-.12,t,Je.x1,Je.spring,t+o*.1,Ho),Kr(e,14.35,Je.spring-.04,t,Je.x1,Je.spring+.05,t+o*.18,Ho);for(let[t,o]of[[Je.z0,1],[Je.z1,-1]])Kr(e,14.35,0,t,Je.x1,.42,t+o*.12,Ho),Kr(e,14.35,.42,t,Je.x1,.5,t+o*.07,Ho);for(let t of Zm)Qm(e,t,.24,.16),Qf(e,t,Je.z0,1),Qf(e,t,Je.z1,-1);for(let t of[14.35+.28,Je.x1-.28])Qm(e,t,.28,.22),Qf(e,t,Je.z0,1),Qf(e,t,Je.z1,-1);for(let t of Ha)p_(e,t)}function m_(e){let t=Je.z1+cn,o=t-.04,n=t+.04,r=(i,c,f,l)=>Kr(e,i,c,o,f,l,n,ul),a=It.halfW,s=(i,c,f,l,d,h)=>{let v=(u,p,m)=>[i+p*Math.cos(u),It.spring+p*Math.sin(u),m];for(let u=0;u<h;u++){let p=l+(d-l)*u/h,m=l+(d-l)*(u+1)/h;nr(e,v(p,c,o),v(m,c,o),v(m,f,o),v(p,f,o),[0,0,-1],ul),nr(e,v(p,f,n),v(m,f,n),v(m,c,n),v(p,c,n),[0,0,1],ul)}};for(let i of Ha){let c=i-a,f=i+a;r(c,It.sill,c+.07,It.spring),r(f-.07,It.sill,f,It.spring),r(c,It.sill,f,It.sill+.07),r(c,It.spring-.04,f,It.spring+.04);for(let d of[-.5,0,.5])r(i+d*a-.022,It.sill,i+d*a+.022,It.spring);let l=6;for(let d=1;d<l;d++){let h=It.sill+(It.spring-It.sill)*d/l;r(c,h-.02,f,h+.02)}s(i,a-.07,a,0,Math.PI,32),s(i,.42,.46,0,Math.PI,20);for(let d=1;d<6;d++){let h=Math.PI*d/6,v=Math.cos(h),u=Math.sin(h),p=.02,m=(g,y)=>[i+v*g-u*p*y,It.spring+u*g+v*p*y];nr(e,[...m(.44,-1),o],[...m(a-.05,-1),o],[...m(a-.05,1),o],[...m(.44,1),o],[0,0,-1],ul),nr(e,[...m(.44,1),n],[...m(a-.05,1),n],[...m(a-.05,-1),n],[...m(.44,-1),n],[0,0,1],ul)}}}function g_(){let e=[],t=Je.z1+cn;for(let o of Ha){let n=o-It.halfW,r=o+It.halfW;e.push([n,It.sill,t],[r,It.sill,t],[r,It.spring,t],[n,It.sill,t],[r,It.spring,t],[n,It.spring,t]);for(let a=0;a<24;a++){let s=Math.PI*a/24,i=Math.PI*(a+1)/24;e.push([o,It.spring,t],[o+It.halfW*Math.cos(s),It.spring+It.halfW*Math.sin(s),t],[o+It.halfW*Math.cos(i),It.spring+It.halfW*Math.sin(i),t])}}return e}function Jm(e,t){e.save(),e.translate(Je.x1+cn,0,Je.zc-7),e.rotateY(-Math.PI/2),t(),e.restore()}function x_(e){Jm(e,()=>{Bi.addSurround(e),Bi.addFrames(e,"fixed")})}function y_(e){return Bi.glassPanes(e||"fixed").map(([o,n,r])=>[Je.x1+cn-r,n,Je.zc-7+o])}function b_(e){d_(e),v_(e),m_(e),x_(e),e.curMat=[0,0,0]}var w_={x:Je.x1+cn,zLo:Je.zc-Bi.DOOR.r,zHi:Je.zc+Bi.DOOR.r},Mo=e=>e.toFixed(4);function __(){return`
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
		float k = floor((q.x - ${Mo(It.first)}) / ${Mo(It.pitch)} + 0.5);
		if (k < 0.0 || k > ${Mo(It.count-1)}) return 0.0;
		float dx = q.x - (${Mo(It.first)} + k * ${Mo(It.pitch)});
		float side = 1.0 - smoothstep(${Mo(It.halfW)} - soft, ${Mo(It.halfW)} + soft, abs(dx));
		float sill = smoothstep(${Mo(It.sill)} - soft, ${Mo(It.sill)} + soft, q.y);
		float r = length(vec2(dx, q.y - ${Mo(It.spring)}));
		float head = q.y < ${Mo(It.spring)} ? 1.0 : 1.0 - smoothstep(${Mo(It.halfW)} - soft, ${Mo(It.halfW)} + soft, r);
		float open = side * sill * head;
		// the black glazing bars, softly
		float cover = 0.0;
		cover = max(cover, winBar(abs(dx), 0.022, soft));
		cover = max(cover, winBar(abs(abs(dx) - ${Mo(It.halfW*.5)}), 0.022, soft));
		float rowH = ${Mo((It.spring-It.sill)/6)};
		float ry = (q.y - ${Mo(It.sill)}) / rowH;
		cover = max(cover, q.y < ${Mo(It.spring)} ? winBar(abs(fract(ry + 0.5) - 0.5) * rowH, 0.02, soft) : 0.0);
		cover = max(cover, q.y > ${Mo(It.spring)} ? winBar(abs(r - 0.44), 0.02, soft) : 0.0);
		return open * (1.0 - cover * 0.75);
	}

	// daylight reaching point p from the windows
	float windowLight(vec3 p, vec3 n) {
		if (p.x < ${Mo(Je.x0)} || p.z < ${Mo(Je.z0-.1)} || p.z > ${Mo(Je.z1)}) return 0.0;
		float ndl = max(dot(n, WIN_SKY), 0.0);
		if (ndl <= 0.0) return 0.0;
		float tIn = (${Mo(Je.z1)} - p.z) / WIN_SKY.z;
		float tOut = (${Mo(Je.z1+2*cn)} - p.z) / WIN_SKY.z;
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
		${Zf.map(e=>`{ float d = abs(p.x - ${Mo(e)}); if (d < best) { best = d; lamp = vec3(${Mo(e)}, ${Mo(Yr.spring+.55)}, ${Mo(Je.z0-.15)}); } }`).join(`
		`)}
		return lamp;
	}

	float nicheLight(vec3 p, vec3 n) {
		if (p.z > ${Mo(Je.z0+1.6)} || p.z < ${Mo(Je.z0-Yr.r-.1)} || p.x < ${Mo(Je.x0)}) return 0.0;
		vec3 lamp = nicheLamp(p);
		vec3 d = lamp - p;
		float dist = length(d);
		vec3 L = d / dist;
		// a cone pointing down into the niche
		float cone = smoothstep(0.35, 0.75, dot(-L, normalize(vec3(0.0, -1.0, 0.35))));
		float inside = 1.0 - smoothstep(${Mo(Yr.r)}, ${Mo(Yr.r+.5)}, abs(p.x - lamp.x));
		return max(dot(n, L), 0.0) * cone * inside / (1.0 + 0.35 * dist * dist);
	}

	// soft general daylight in the corridor, strongest near the glass
	float corridorGlow(vec3 p) {
		if (p.x < ${Mo(Je.x0-1)}) return 0.0;
		float inC = smoothstep(${Mo(Je.z0-1.5)}, ${Mo(Je.z0)}, p.z) * smoothstep(${Mo(Je.x0-1)}, ${Mo(Je.x0+1)}, p.x);
		float near = 0.55 + 0.45 * smoothstep(${Mo(Je.z0)}, ${Mo(Je.z1)}, p.z);
		return inC * near;
	}`}e2.exports={wallWithHoles:dl,windowLightGLSL:__,addWing:b_,windowGlass:g_,farDoorGlass:y_,atFarDoor:Jm,FAR_DOOR:w_,vaultY:Ui,C:Je,NICHE_X:Zf,NICHE:Yr,NICHE_PLINTH_TOP:h_,NICHE_STATUE_Z:u_,WIN:It,winCentres:Ha,piers:Zm,PAINTING_X:l_,HEIGHT:Tu}});var Ea=ke((gA,n2)=>{"use strict";var Nu=br(),tn=8,Vi=.35,Ds=14,Wi=4,st={x0:Ds+Vi,x1:Ds+Vi+2*Wi,z0:5.9-Wi,z1:5.9+Wi,zc:5.9,cx:Ds+Vi+Wi,arch:{r:2.6,spring:4.4},dome:{r:3.3,base:tn},oculus:3.3};st.domeTop=st.dome.base+st.dome.r;var Xi={spokes:16,ringE:[.42,.95],bar:.035},Vn={sxz:1.32,sy:1.6,yaw:.6};Vn.crownC=[st.cx,.4+3.4*Vn.sy,st.zc];Vn.crownR=[2.3*Vn.sxz,1.9*Vn.sy,2.3*Vn.sxz];Vn.trunkR=.26*Vn.sxz;Vn.trunkTop=.4+2.2*Vn.sy;var t2={inner:1.05,outer:1.62,seat:.48,soil:.4},th=(()=>{let e=[.2,1,-.15],t=Math.hypot(...e);return e.map(o=>o/t)})(),rr=[0,0,0],ji=[11,0,0],Jf=[10,0,0],eh=[9,0,0],M_=[5,0,0],Ru=[3,0,0];function k0(e,t,o,n,r,a,s){let i=e.vert(t,a,s),c=e.vert(o,a,s),f=e.vert(n,a,s),l=e.vert(r,a,s);e.tri(i,c,f),e.tri(i,f,l)}function Fr(e,t,o,n,r,a,s,i){e.box(Math.min(t,r),Math.min(o,a),Math.min(n,s),Math.max(t,r),Math.max(o,a),Math.max(n,s),i)}var k_=(e,t,o)=>n=>{let r=n-e;return o+Math.sqrt(Math.max(0,t*t-r*r))};function S_(e){e.save(),e.translate(Ds+Vi,0,0),e.rotateY(-Math.PI/2),Nu.wallWithHoles(e,{u0:0,u1:Nu.C.z0,w0:0,w1:2*Vi,top:()=>tn,holes:[{u0:st.zc-st.arch.r,u1:st.zc+st.arch.r,bottom:0,head:k_(st.zc,st.arch.r,st.arch.spring),step:.05}],mat:ji,revealMat:rr,topStep:1}),e.restore();let t=Ds-Vi;for(let[s,i]of[[0,st.zc-st.arch.r],[st.zc+st.arch.r,Nu.C.z0]])Fr(e,t-.12,0,s,t,.42,i,rr),Fr(e,t-.07,.42,s,t,.5,i,rr);let o=t,n=.24,r=40,a=(s,i,c)=>[c,st.arch.spring+Math.sin(s)*i,st.zc+Math.cos(s)*i];for(let s=0;s<r;s++){let i=Math.PI*s/r,c=Math.PI*(s+1)/r;k0(e,a(i,st.arch.r,o-.07),a(c,st.arch.r,o-.07),a(c,st.arch.r+n,o-.07),a(i,st.arch.r+n,o-.07),[-1,0,0],rr),k0(e,a(i,st.arch.r+n,o),a(c,st.arch.r+n,o),a(c,st.arch.r+n,o-.07),a(i,st.arch.r+n,o-.07),[0,Math.sin((i+c)/2),Math.cos((i+c)/2)],rr),k0(e,a(i,st.arch.r,o),a(c,st.arch.r,o),a(c,st.arch.r,o-.07),a(i,st.arch.r,o-.07),[0,-Math.sin((i+c)/2),-Math.cos((i+c)/2)],rr)}Fr(e,o-.12,st.arch.spring+st.arch.r-.06,st.zc-.17,o,st.arch.spring+st.arch.r+n+.16,st.zc+.17,rr);for(let s of[-1,1]){let i=st.zc+s*st.arch.r,c=st.zc+s*(st.arch.r+n);Fr(e,o-.07,0,i,o,st.arch.spring,c,rr),Fr(e,o-.13,st.arch.spring-.16,i-s*.03,o,st.arch.spring,c+s*.08,rr),Fr(e,o-.12,0,i-s*.03,o,.5,c+s*.06,rr)}}function E_(e){let{x0:t,x1:o,z0:n,z1:r}=st;k0(e,[Ds,0,n],[o,0,n],[o,0,r],[Ds,0,r],[0,1,0],rr),e.curMat=ji,k0(e,[o,0,n],[o,0,r],[o,tn,r],[o,tn,n],[-1,0,0],ji),k0(e,[t,0,n],[o,0,n],[o,tn,n],[t,tn,n],[0,0,1],ji),k0(e,[o,0,r],[t,0,r],[t,tn,r],[o,tn,r],[0,0,-1],ji),k0(e,[t,0,r],[t,0,n],[t,tn,n],[t,tn,r],[1,0,0],ji),Fr(e,o-.12,0,n,o,.42,r,rr),Fr(e,t,0,n,o,.42,n+.12,rr),Fr(e,t,0,r-.12,o,.42,r,rr),Fr(e,o-.2,tn-.3,n,o,tn,r,rr),Fr(e,t,tn-.3,n,o,tn,n+.2,rr),Fr(e,t,tn-.3,r-.2,o,tn,r,rr),Fr(e,t,tn-.3,n,t+.2,tn,r,rr);let a=st.dome.r,s=48,i=[];for(let g=0;g<=s;g++){let y=Math.PI*2*g/s;i.push([st.cx+Math.cos(y)*a,st.zc+Math.sin(y)*a])}let c=g=>{let y=Math.abs(Math.cos(g)),b=Math.abs(Math.sin(g));return Math.min(Wi/Math.max(y,1e-6),Wi/Math.max(b,1e-6))};for(let g=0;g<s;g++){let y=Math.PI*2*g/s,b=Math.PI*2*(g+1)/s,w=c(y),M=c(b),k=[st.cx+Math.cos(y)*w,tn,st.zc+Math.sin(y)*w],z=[st.cx+Math.cos(b)*M,tn,st.zc+Math.sin(b)*M];k0(e,[i[g][0],tn,i[g][1]],[i[g+1][0],tn,i[g+1][1]],z,k,[0,-1,0],Jf)}e.lathe([[a+.02,tn-.18,1],[a-.12,tn-.18,1],[a-.12,tn-.06,1],[a-.05,tn,1],[a,tn+.02]],st.cx,st.zc,s,{mat:()=>rr});let f=16,l=(g,y,b)=>[st.cx+Math.cos(g)*Math.cos(y)*b,st.dome.base+Math.sin(y)*b,st.zc+Math.sin(g)*Math.cos(y)*b],d=Math.PI/2;for(let g=0;g<s;g++)for(let y=0;y<f;y++){let b=Math.PI*2*g/s,w=Math.PI*2*(g+1)/s,M=d*y/f,k=d*(y+1)/f,z=(R,U)=>[-Math.cos(R)*Math.cos(U),-Math.sin(U),-Math.sin(R)*Math.cos(U)],P=[e.vert(l(b,M,a),z(b,M),eh),e.vert(l(w,M,a),z(w,M),eh),e.vert(l(w,k,a),z(w,k),eh),e.vert(l(b,k,a),z(b,k),eh)];e.tri(P[0],P[1],P[2]),e.tri(P[0],P[2],P[3])}for(let g=0;g<Xi.spokes;g++){let y=Math.PI*2*g/Xi.spokes,b=[];for(let w=0;w<=14;w++)b.push(l(y,(d-.06)*w/14,a-.04));e.tube(b,()=>.04,20,6,{mat:()=>Jf})}for(let g of Xi.ringE){let y=Math.cos(g)*(a-.04),b=st.dome.base+Math.sin(g)*(a-.04),w=[];for(let M=0;M<=72;M++){let k=Math.PI*2*M/72;w.push([st.cx+Math.cos(k)*y,b,st.zc+Math.sin(k)*y])}e.tube(w,()=>.035,72,6,{mat:()=>Jf})}e.ellipsoid([st.cx,st.dome.base+a-.06,st.zc],[.16,.08,.16],6,12,{mat:()=>Jf});let h=.46,v=.55,u=.12,p=(g,y,b,w)=>{Fr(e,g,h-.08,y,b,h,w,Ru);let M=b-g>w-y?[g+.25,b-.25]:[g+.06,b-.06],k=b-g>w-y?[y+.06,w-.06]:[y+.25,w-.25];Fr(e,M[0],0,k[0],M[1],h-.08,k[1],Ru)};p(o-u-v,n+1.1,o-u,r-1.1),p(t+1,n+u,o-1.1,n+u+v),p(t+1,r-u-v,o-1.1,r-u);let m=t2;e.lathe([[m.outer,0,1],[m.outer,m.seat-.1,1],[m.outer+.07,m.seat-.07,1],[m.outer+.07,m.seat,1],[m.inner-.05,m.seat,1],[m.inner-.05,m.seat-.06,1],[m.inner,m.seat-.08,1],[m.inner,m.soil]],st.cx,st.zc,64,{mat:()=>Ru}),e.lathe([[m.inner,m.soil,1],[0,m.soil+.03]],st.cx,st.zc,48,{mat:()=>M_})}function A_(e){S_(e),E_(e),e.curMat=[0,0,0]}var Uo=e=>e.toFixed(4);function o2(){let e=st.dome.r,t=Xi.ringE.map(o=>Math.cos(o)*e);return`
	const vec3 SHAFT = vec3(${Uo(th[0])}, ${Uo(th[1])}, ${Uo(th[2])});

	// how much sun the glass dome lets through towards p (0..1): the round
	// opening, less the soft shadows of its ribs and rings (worked out on
	// the dome's base, where the frame is seen almost straight on)
	float oculusOpen(vec3 p) {
		float t = (${Uo(st.dome.base+.6)} - p.y) / SHAFT.y;
		vec3 q = p + SHAFT * t;
		vec2 d2 = q.xz - vec2(${Uo(st.cx)}, ${Uo(st.zc)});
		float d = length(d2);
		float soft = 0.02 + 0.012 * t;
		float open = 1.0 - smoothstep(${Uo(e-.15)} - soft, ${Uo(e-.15)} + soft, d);
		float hw = ${Uo(Xi.bar)};
		float cover = 0.0;
		${t.map(o=>`cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, abs(d - ${Uo(o)})));`).join(`
		`)}
		float ang = atan(d2.y, d2.x);
		float stp = ${Uo(Math.PI*2/Xi.spokes)};
		float da = abs(mod(ang + stp * 0.5, stp) - stp * 0.5);
		cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, d * sin(da)));
		cover = max(cover, 1.0 - smoothstep(0.16 - soft, 0.16 + soft, d));
		return open * (1.0 - cover * 0.85);
	}

	// the tree's own shade: its crown lets dappled light through, its
	// trunk blocks it
	float treeShade(vec3 p) {
		vec3 c = vec3(${Uo(Vn.crownC[0])}, ${Uo(Vn.crownC[1])}, ${Uo(Vn.crownC[2])});
		vec3 r = vec3(${Uo(Vn.crownR[0])}, ${Uo(Vn.crownR[1])}, ${Uo(Vn.crownR[2])});
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
		float tt = (${Uo(Vn.trunkTop)} - p.y) / SHAFT.y;
		if (tt > 0.0) {
			vec2 o = p.xz - vec2(${Uo(st.cx)}, ${Uo(st.zc)});
			vec2 dir = SHAFT.xz;
			float k = clamp(-dot(o, dir) / dot(dir, dir), 0.0, tt);
			float dist = length(o + dir * k);
			tr *= smoothstep(${Uo(Vn.trunkR*.7)}, ${Uo(Vn.trunkR*1.3)}, dist);
		}
		return tr;
	}`}function z_(){return`
	${o2()}

	// sunlight through the oculus reaching p (0..1)
	float alcoveSun(vec3 p, vec3 n) {
		if (p.x < ${Uo(st.x0-.75)} || p.z < ${Uo(st.z0-.5)} || p.z > ${Uo(st.z1+.5)}) return 0.0;
		float ndl = max(dot(n, SHAFT), 0.0);
		if (ndl <= 0.0) return 0.0;
		return ndl * oculusOpen(p) * treeShade(p);
	}

	// soft daylight filling the court, brightest under the dome
	float alcoveGlow(vec3 p) {
		if (p.x < ${Uo(st.x0-1.5)} || p.z < ${Uo(st.z0-1.5)} || p.z > ${Uo(st.z1+1.5)}) return 0.0;
		float inside = smoothstep(${Uo(st.x0-1.2)}, ${Uo(st.x0+.6)}, p.x);
		float d = length(p.xz - vec2(${Uo(st.cx)}, ${Uo(st.zc)}));
		return inside * (0.55 + 0.45 * smoothstep(0.0, 8.0, p.y)) * (1.0 - 0.35 * smoothstep(1.0, 5.0, d));
	}`}n2.exports={addAlcove:A_,alcoveLightGLSL:z_,oculusGLSL:o2,A:st,BENCH:t2,SHAFT:th,TREE:Vn}});var ar=ke((xA,a2)=>{"use strict";var Ua=0;try{let e=location.search;/[?&]night\b/.test(e)&&(Ua=1)}catch(e){}var S0=Ua,Ou=0,r2=[],oh={tick(e){let t=Ou?Math.min(.1,e-Ou):0;if(Ou=e,S0!==Ua){let o=t/2.4;S0=Ua>S0?Math.min(Ua,S0+o):Math.max(Ua,S0-o)}return oh.night},get night(){return S0*S0*(3-2*S0)},get isNight(){return Ua===1},get settled(){return S0===Ua},set(e){Ua=e?1:0,r2.forEach(t=>t(Ua))},toggle(){oh.set(!Ua)},onChange(e){r2.push(e)}};oh.GLSL=`
uniform float night;
vec3 toNight(vec3 c, float keep) {
	float l = dot(c, vec3(0.299, 0.587, 0.114));
	vec3 n = mix(vec3(l), c, 0.35) * vec3(0.55, 0.70, 1.05) * keep;
	return mix(c, n, night);
}
`;a2.exports=oh});var j0=ke((yA,ml)=>{"use strict";var Cu=ar(),{C:Pu}=br(),{A:nh,BENCH:pl}=Ea(),Xn=Math.PI,T_=[18,29,40],rh=.575,B0=[],vl=(e,t,o,n,r,a,s)=>B0.push(Object.assign({x:e,y:t,z:o,o:n,back:r,hw:a,s:1,k:1,range:7,mount:"wall"},s||{}));T_.forEach(e=>{vl(1.25+rh+.48,3.25,e,[1,0],.48,rh,{s:1.2}),vl(12.75-rh-.48,3.25,e,[-1,0],.48,rh,{s:1.2})});[3,11].forEach(e=>vl(e,3.45,Pu.hallEnd-.5,[0,-1],.5,99,{s:1.2}));var L_=[14.63,19.63,24.03,28.43,32.83,Pu.x1-.28];L_.forEach(e=>vl(e,3.15,Pu.z0+.16+.44,[0,1],.44,.28));[3,8.8].forEach(e=>vl(.35+.44,2.75,e,[1,0],.44,99));{let e=(pl.inner+pl.outer)/2,t=Math.atan2(-1.12,-.98);B0.push({x:nh.cx+Math.cos(t)*e,y:pl.seat+.155,z:nh.zc+Math.sin(t)*e,o:[Math.cos(t),Math.sin(t)],back:0,hw:0,ring:[nh.cx,nh.zc,pl.outer+.07,pl.seat],s:.52,k:2.2,range:3.6,mount:"table"})}var Iu=.13,ah=.21,sr=Iu/Math.cos(Xn/6),$o=e=>e.toFixed(4);function s2(e){let o=(e||B0.map((n,r)=>r)).map(n=>{let r=B0[n],a=-r.o[1],s=r.o[0],i=r.mount==="table"?`
				// the bench it stands on hides the floor under and around it
				if (p.y < ${$o(r.ring[3]-.03)}) {
					float tt = ${$o(r.y-r.ring[3])} / max(-D.y, 1e-3);
					vec2 hit = vec2(${$o(r.x)}, ${$o(r.z)}) + D.xz * tt - vec2(${$o(r.ring[0])}, ${$o(r.ring[1])});
					T *= smoothstep(${$o(r.ring[2]-.02)}, ${$o(r.ring[2]+.12)}, length(hit));
				}`:"",c=r.mount==="wall"?`
				{
					// what it hangs on stands behind it and hides what lies beyond
					float behind = -dot(D.xz, vec2(${$o(r.o[0])}, ${$o(r.o[1])}));
					if (behind > ${$o(r.back+.06)}) {
						float side = abs(dot(D.xz, vec2(${$o(a)}, ${$o(s)}))) * ${$o(r.back)} / behind;
						T *= smoothstep(${$o(r.hw-.04)}, ${$o(r.hw+.04)}, side);
					}
				}`:"";return`
			{
				vec3 D = p - vec3(${$o(r.x)}, ${$o(r.y)}, ${$o(r.z)});
				float d2 = dot(D, D);
				if (d2 < ${$o(r.range*r.range)}) {
					float d = sqrt(d2);
					// the direction in the lantern's own frame
					float c = ${$o(Math.cos(Math.atan2(r.o[1],r.o[0])))}, s = ${$o(Math.sin(Math.atan2(r.o[1],r.o[0])))};
					vec3 q = vec3(D.x * c + D.z * s, D.y, -D.x * s + D.z * c);
					float T = lanternGlass(q, 0.10 + 0.05 * d);
					${c}${i}
					float fl = 0.90 + 0.06 * sin(time * 6.1 + ${$o(n*1.7)}) + 0.04 * sin(time * 15.3 + ${$o(n*2.9)}) * sin(time * 1.9 + ${$o(n*.6)});
					float lam = max(dot(N, -D / d), 0.0) * 0.85 + 0.15;
					float fall = 1.0 / (1.0 + d2 * ${$o(1/(r.s*r.s))}) * (1.0 - smoothstep(${$o(r.range*.6)}, ${$o(r.range)}, d));
					sum += ${$o(r.k)} * T * fl * lam * fall;
				}
			}`}).join("");return`
	// how much of a lantern's light gets out in direction q (lantern frame,
	// y up): through the leaded glass, past the iron posts, a little
	// through the vents in the roof and the open work under the base
	float lanternGlass(vec3 q, float blur) {
		float h = length(q.xz) + 1e-5;
		float az = atan(q.z, q.x);
		// which of the six panels, and where across it
		float t = mod(az + ${$o(Xn/6)}, ${$o(Xn/3)}) - ${$o(Xn/6)};
		float U = tan(t) / ${$o(Math.tan(Xn/6))};
		float V = (q.y / h) * (${$o(Iu/ah)} / cos(t));
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
	}`}var ln=0,N_=1;function R_(){let e=[],t=[],o=[],n=[],r=[],a=(v,u,p,m)=>(e.push(v[0],v[1],v[2]),t.push(u[0],u[1],u[2]),o.push(p),n.push(m?m[0]:0,m?m[1]:0),e.length/3-1),s=(v,u)=>[v[0]-u[0],v[1]-u[1],v[2]-u[2]],i=(v,u)=>[v[1]*u[2]-v[2]*u[1],v[2]*u[0]-v[0]*u[2],v[0]*u[1]-v[1]*u[0]],c=v=>{let u=Math.hypot(v[0],v[1],v[2])||1;return[v[0]/u,v[1]/u,v[2]/u]};function f(v,u,p,m,g,y){let b=c(i(s(u,v),s(m,v))),w=a(v,b,g,[0,0]),M=a(u,b,g,[1,0]),k=a(p,b,g,[1,1]),z=a(m,b,g,[0,1]);r.push(w,M,k,w,k,z),y&&r.push(w,k,M,w,z,k)}function l(v,u,p){for(let y=0;y<v.length;y++){let b=v[Math.max(0,y-1)],w=v[Math.min(v.length-1,y+1)],M=c(s(w,b)),k=Math.abs(M[1])>.9?[1,0,0]:[0,1,0],z=c(i(M,k)),P=i(z,M),R=typeof u=="function"?u(y/(v.length-1)):u;for(let U=0;U<=6;U++){let D=U/6*Xn*2,Y=Math.cos(D),I=Math.sin(D),j=[z[0]*Y+P[0]*I,z[1]*Y+P[1]*I,z[2]*Y+P[2]*I];a([v[y][0]+j[0]*R,v[y][1]+j[1]*R,v[y][2]+j[2]*R],j,p)}}let g=e.length/3-v.length*7;for(let y=0;y<v.length-1;y++)for(let b=0;b<6;b++){let w=g+y*7+b,M=w+6+1;r.push(w,M,w+1,w+1,M,M+1)}}function d(v,u,p,m,g,y,b,w,M){let k=(z,P,R)=>{let U=y+Xn/6+R*Xn/3;return[v[0]+Math.cos(U)*z,P,v[2]+Math.sin(U)*z]};for(let z=0;z<6;z++)f(k(m,u,z+1),k(m,u,z),k(g,p,z),k(g,p,z+1),b);if(w&&g>0)for(let z=0;z<6;z++){let P=a([v[0],p,v[2]],[0,1,0],b),R=a(k(g,p,z),[0,1,0],b),U=a(k(g,p,z+1),[0,1,0],b);r.push(P,U,R)}if(M&&m>0)for(let z=0;z<6;z++){let P=a([v[0],u,v[2]],[0,-1,0],b),R=a(k(m,u,z),[0,-1,0],b),U=a(k(m,u,z+1),[0,-1,0],b);r.push(P,R,U)}}function h(v,u,p,m,g,y,b){let w=[];for(let k=0;k<=18;k++){let z=k/18,P=(b||0)+z*m*Xn*2,R=p*(1-.75*z);w.push([v[0]+u[0]*Math.cos(P)*R,v[1]+Math.sin(P)*R,v[2]+u[2]*Math.cos(P)*R])}l(w,g,y)}return B0.forEach(v=>{let u=v.s,p=Math.atan2(v.o[1],v.o[0]),m=[v.x,v.y,v.z],g=(w,M,k)=>[v.x+v.o[0]*w-v.o[1]*(k||0),v.y+M,v.z+v.o[1]*w+v.o[0]*(k||0)],y=v.y-ah*u,b=v.y+ah*u;for(let w=0;w<6;w++){let M=p+Xn/6+w*Xn/3,k=M+Xn/3,z=sr*u*.97,P=[v.x+Math.cos(M)*z,y,v.z+Math.sin(M)*z],R=[v.x+Math.cos(k)*z,y,v.z+Math.sin(k)*z];f(R,P,[P[0],b,P[2]],[R[0],b,R[2]],N_,!0)}for(let w=0;w<6;w++){let M=p+Xn/6+w*Xn/3,k=sr*u;l([[v.x+Math.cos(M)*k,y-.02*u,v.z+Math.sin(M)*k],[v.x+Math.cos(M)*k,b+.02*u,v.z+Math.sin(M)*k]],.011*u,ln)}d(m,y-.035*u,y,sr*u*1.12,sr*u*1.12,p,ln,!0,!0),d(m,y-.1*u,y-.035*u,sr*u*.55,sr*u*1,p,ln,!1,!0),d(m,y-.17*u,y-.1*u,0,sr*u*.55,p,ln,!1,!1);for(let w=0;w<6;w++){let M=p+w*Xn/3,k=Iu*u*1.06,z=[v.x+Math.cos(M)*k,y-.06*u,v.z+Math.sin(M)*k];h(z,[-Math.sin(M),0,Math.cos(M)],.03*u,.85,.004*u,ln,.3)}d(m,b,b+.03*u,sr*u*1.14,sr*u*1.14,p,ln,!1,!0),d(m,b+.03*u,b+.2*u,sr*u*1.14,sr*u*.32,p,ln,!1,!1),d(m,b+.2*u,b+.27*u,sr*u*.34,sr*u*.34,p,ln,!1,!1),d(m,b+.27*u,b+.37*u,sr*u*.42,0,p,ln,!1,!0),l([[v.x,b+.36*u,v.z],[v.x,b+.47*u,v.z]],w=>.01*u*(1-.7*w),ln),d([v.x,0,v.z],b+.44*u,b+.47*u,.018*u,0,p,ln,!1,!0);for(let w=0;w<6;w++){let M=p+Xn/6+w*Xn/3,k=sr*u*1.14,z=[v.x+Math.cos(M)*k,b+.03*u,v.z+Math.sin(M)*k];l([z,[z[0],z[1]+.09*u,z[2]]],P=>.008*u*(1-.8*P),ln),d([z[0],0,z[2]],z[1]+.035*u,z[1]+.06*u,.014*u,.014*u,M,ln,!0,!0)}if(v.mount==="wall"){let w=v.back,M=y-.32,k=g(-w,0,0);((D,Y,I)=>{let j=[v.o[0],0,v.o[1]],ue=[-v.o[1],0,v.o[0]],Ge=(le,Ve,zt)=>[k[0]+ue[0]*le+j[0]*zt,Ve,k[2]+ue[2]*le+j[2]*zt],Te=.03,ye=.065;f(Ge(-I,D,ye),Ge(I,D,ye),Ge(I,Y,ye),Ge(-I,Y,ye),ln,!0),f(Ge(I,D,Te),Ge(I,D,ye),Ge(I,Y,ye),Ge(I,Y,Te),ln,!0),f(Ge(-I,D,ye),Ge(-I,D,Te),Ge(-I,Y,Te),Ge(-I,Y,ye),ln,!0),f(Ge(-I,Y,ye),Ge(I,Y,ye),Ge(I,Y,Te),Ge(-I,Y,Te),ln,!0),f(Ge(-I,D,Te),Ge(I,D,Te),Ge(I,D,ye),Ge(-I,D,ye),ln,!0),d([k[0]+j[0]*ye,0,k[2]+j[2]*ye],Y,Y+.05,I*.6,0,p,ln,!1,!0),d([k[0]+j[0]*ye,0,k[2]+j[2]*ye],D-.05,D,0,I*.6,p,ln,!1,!1)})(M-.2,M+.2,.07);let P=[];for(let D=0;D<=14;D++){let Y=D/14,I=-w+.05+Y*(w-.05),j=M+.04+(y-.17*u-M-.04)*Math.pow(Y,2.2);P.push(g(I,j-v.y,0))}l(P,D=>.022*(1-.3*D),ln);let R=[];for(let D=0;D<=10;D++){let Y=D/10;R.push(g(-w+.05+Y*w*.6,M-.14+Y*.16+.05*Math.sin(Y*Xn)-v.y,0))}l(R,.009,ln);let U=R[R.length-1];h([U[0]-v.o[0]*.03,U[1]+.02,U[2]-v.o[1]*.03],[v.o[0],0,v.o[1]],.045,1.1,.007,ln,-.4),[.3,.55].forEach(D=>{let Y=P[Math.round(D*14)],I=R[Math.round(D/.62*10)]||R[10];l([Y,I],.006,ln)}),[-1,1].forEach(D=>{let Y=g(-.05,-ah*u-.2*u,0);h([Y[0]-v.o[1]*D*.05,Y[1],Y[2]+v.o[0]*D*.05],[-v.o[1]*D,0,v.o[0]*D],.05*u,.9,.006,ln,Xn)})}else for(let w=0;w<3;w++){let M=p+w*Xn*2/3,k=[v.x+Math.cos(M)*sr*u*.7,y-.035*u,v.z+Math.sin(M)*sr*u*.7],z=[v.x+Math.cos(M)*sr*u*1.25,y-.17*u,v.z+Math.sin(M)*sr*u*1.25];l([k,z],.012*u,ln)}}),{pos:e,nrm:t,kind:o,uv:n,elems:r}}ml.exports=e=>{let t=R_(),o=e({vert:`
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
		${s2()}
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
		}`,attributes:{position:t.pos,normal:t.nrm,kind:t.kind,uv:t.uv},elements:t.elems,uniforms:{time:e.context("time"),night:()=>Cu.night}}),n=[],r=[];B0.forEach((s,i)=>{[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(c=>{n.push(c[0],c[1]),r.push(s.x,s.y,s.z,s.s+i*.001)})});let a=e({vert:`
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
		}`,attributes:{corner:n,at:r},count:n.length/2,uniforms:{time:e.context("time"),night:()=>Cu.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(){o(),Cu.night>.01&&a()}};ml.exports.lanternGLSL=s2;ml.exports.LANTERNS=B0;ml.exports.TREE_LANTERN=[B0.length-1]});var X0=ke((bA,Qr)=>{"use strict";var O_=ar(),qo=Math.PI,Yn=e=>(+e).toFixed(4),C_=e=>`vec3(${Yn(e[0])}, ${Yn(e[1])}, ${Yn(e[2])})`,qt={x:-7,z:44.5},oo=5.2,vr=15,ft={z0:42.6,z1:46.4,zc:44.5,spring:4,r:1.9},s0={z0:42.2,z1:46.8,top:6.3,x:.35},ch=[qt.x-Math.sqrt(oo*oo-3.05*3.05),0,0],Nn={x0:-2.05+ch[0],x1:ch[0],z0:41.45,z1:47.55,top:4.3},$u=[[Nn.x1+.05,2.35,Nn.z0-.45],[Nn.x1+.05,2.35,Nn.z1+.45]].map(([e,t,o])=>{let n=Math.atan2(o-qt.z,e-qt.x);return[qt.x+Math.cos(n)*(oo-.16),t,qt.z+Math.sin(n)*(oo-.16)]}),Oo={ri:3.4,ro:oo,a0:-35*qo/180,rise:.1836,step:3.6*qo/180,n:88,thick:.36};Oo.k=Oo.rise/Oo.step;var qr=e=>Oo.a0-e,V0=e=>e*Oo.k,vn={x:qt.x+.1,z:qt.z-.15,yaw:-qo/2,scale:1.3},E0=vn.scale/1.1,gl={keyX0:vn.x-.524*E0,keyX1:vn.x+.491*E0,keyTop:.647*E0,keyFront:vn.z+.808*E0,keyBack:vn.z+.72*E0,stoolX:vn.x-.041*E0,stoolZ:vn.z+1.122*E0,stoolFront:vn.z+.96*E0,stoolTop:.37*E0,heading:qo},ih=[[3.6,44.5],[.6,44.5],[-2.2,44.7],[-4.5,46.5],[-7,47.2],[-9.4,46.6],[-10.5,44.9],[-10.9,43.2]];function c2(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let o=t;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}function P_(e,t){let o=1e9;for(let n=0;n<ih.length-1;n++){let[r,a]=ih[n],[s,i]=ih[n+1],c=s-r,f=i-a,l=Math.max(0,Math.min(1,((e-r)*c+(t-a)*f)/(c*c+f*f)));o=Math.min(o,Math.hypot(e-r-c*l,t-a-f*l))}return o}var sh=e=>ft.spring+Math.sqrt(Math.max(0,ft.r*ft.r-(e-ft.zc)*(e-ft.zc))),W0=e=>qt.x+Math.sqrt(Math.max(0,oo*oo-(e-qt.z)*(e-qt.z)));function Yi(e,t){return Math.hypot(e-qt.x,t-qt.z)<oo||e<=0&&e>qt.x&&t>ft.z0&&t<ft.z1||e>Nn.x0&&e<Nn.x1&&t>Nn.z0&&t<Nn.z1}function I_(e,t){if(Math.hypot(e-qt.x,t-qt.z)<Oo.ri-.05)return 99;let n=Math.atan2(t-qt.z,e-qt.x),r=Oo.a0-n;for(;r<0;)r+=2*qo;for(;r>=2*qo;)r-=2*qo;return r>Oo.n*Oo.step?99:V0(r)-Oo.thick}function $_(){let e=[],t=c2(1729),o=(a,s,i)=>{for(let c=Math.max(0,e.length-400);c<e.length;c++){let f=e[c];if(!(f[1]>.01)&&Math.hypot(f[0]-a,f[2]-s)<i+f[3]+.012)return!0}return!1},n=(a,s)=>{let i=a-vn.x,c=s-vn.z,f=Math.cos(vn.yaw),l=Math.sin(vn.yaw),d=(f*i-l*c)/vn.scale,h=(l*i+f*c)/vn.scale;return d>-1.05&&d<1.3&&h>-.7&&h<.72},r=0;for(;e.length<980&&r<6e4;){r++;let s=t()<.55?1.25+t()*2.1:1.25+Math.sqrt(t())*(oo-1.45),i=t()*2*qo,c=qt.x+Math.cos(i)*s,f=qt.z+Math.sin(i)*s;if(!Yi(c,f)||s>oo-.18||n(c,f)||P_(c,f)<.62||I_(c,f)<2.3||c<Nn.x1+.9)continue;let l=.022+t()*.02;if(o(c,f,l))continue;let d=t()<.15?.22+t()*.14:.05+t()*.15;e.push([c,0,f,l,d,t()*100])}for(let a=1;a<26;a++){let s=a<12?3:2;for(let i=0;i<s;i++){let c=(a+.25+t()*.5)*Oo.step,f=qr(c),l=Oo.ri+.55+t()*(Oo.ro-Oo.ri-.75),d=.022+t()*.016;e.push([qt.x+Math.cos(f)*l,(a+1)*Oo.rise,qt.z+Math.sin(f)*l,d,.05+t()*.14,t()*100])}}for(let a of $u)for(let[s,i,c]of[[0,0,.26],[.06,.05,.18],[-.05,-.04,.14]])e.push([a[0]+s,a[1],a[2]+i,.024,c,t()*100]);for(let a of[Nn.z0-.35,Nn.z1+.35])for(let s=0;s<9;s++){let i=Nn.x1+.35+t()*.5,c=a+(t()-.5)*.5;Math.hypot(i-qt.x,c-qt.z)>oo-.15||e.push([i,0,c,.026+t()*.014,.18+t()*.3,t()*100])}return e}function F_(e){let o=c2(77),n=[];for(let r=0;r<14;r++){let a=e[Math.floor(o()*e.length)];n.push([a[0],a[1]+a[4],a[2]])}for(let r=0;r<12;r++){let a=n.map(()=>[0,0,0,0]);for(let s of e){let i=[s[0],s[1]+s[4],s[2]],c=0,f=1e9;n.forEach((l,d)=>{let h=(i[0]-l[0])**2+(i[1]-l[1])**2*4+(i[2]-l[2])**2;h<f&&(f=h,c=d)}),a[c][0]+=i[0],a[c][1]+=i[1],a[c][2]+=i[2],a[c][3]++}n=a.map((s,i)=>s[3]?[s[0]/s[3],s[1]/s[3],s[2]/s[3],s[3]]:n[i])}return n.filter(r=>r[3]>0).map(r=>[r[0],r[1]+.12,r[2],r[3]/e.length])}var Fu=$_(),i2=F_(Fu.filter(e=>e[1]<2||e[1]>2.5)).concat($u.map(e=>[e[0],e[1]+.35,e[2],.035]));function l2(){return`
	vec3 roomLight(vec3 p, vec3 N, vec3 V, float gloss, out vec3 spec) {
		spec = vec3(0.0);
		vec3 col = vec3(0.0);
		float floorK = (p.y < 0.02 && N.y > 0.9) ? 1.0 : 0.0;
		${i2.map((t,o)=>`
		{
			vec3 d = ${C_(t)} - p;
			float dd = dot(d, d);
			vec3 L = d * inversesqrt(dd);
			float fl = 0.86 + 0.08 * sin(time * ${Yn(5.3+o*.71)} + ${Yn(o*1.9)}) + 0.06 * sin(time * ${Yn(11.7+o*1.3)} + ${Yn(o*.7)});
			float w = ${Yn(t[3]*i2.length)} * fl;
			float lam = max(dot(N, L), 0.0) * 0.82 + 0.18;
			col += w * lam / (0.7 + dd * 0.42);
			// the floor glows in pools round the candles
			col += w * floorK * 0.9 / (0.02 + dd * 7.0);
			spec += w * pow(max(dot(N, normalize(L + V)), 0.0), mix(10.0, 180.0, gloss)) * gloss * 1.6 / (0.25 + dd * 0.9);
		}`).join("")}
		col *= vec3(1.0, 0.56, 0.24) * 0.62;
		spec *= vec3(1.0, 0.62, 0.30) * 0.62;
		// light from the oculus, high above: pale by day, moonlight at night
		float up = smoothstep(0.0, ${Yn(vr)}, p.y);
		vec3 sky = mix(vec3(0.10, 0.095, 0.085), vec3(0.030, 0.045, 0.085), night);
		col += sky * (0.35 + 0.65 * up) * (0.55 + 0.45 * max(N.y, 0.0)) * (0.6 + 0.4 * max(-dot(N, normalize(p - vec3(${Yn(qt.x)}, ${Yn(vr)}, ${Yn(qt.z)}))), 0.0));
		// and straight down from it a soft pool falls on the piano and
		// whoever is playing it: it catches his shoulders, his hair, the
		// edge of the lid, and lifts them out of the dark
		float pool = 1.0 - smoothstep(0.5, 2.9, length(p.xz - vec2(${Yn(gl.stoolX)}, ${Yn(gl.keyFront+.1)})));
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
	}`}var Xt={FLOOR:0,WALL:1,STEP:2,SOFFIT:3,STRING:4,CEIL:5,OCULUS:6,HALLSTONE:7,IRON:8,RAILING:9,CANDLE:10};function f2(){let e={pos:[],nrm:[],kind:[],uv:[],idx:[]};return e.v=(t,o,n,r)=>(e.pos.push(t[0],t[1],t[2]),e.nrm.push(o[0],o[1],o[2]),e.kind.push(n),e.uv.push(r?r[0]:0,r?r[1]:0),e.pos.length/3-1),e.quad=(t,o,n,r,a,s,i)=>{let c=e.v(t,a,s,i&&i[0]),f=e.v(o,a,s,i&&i[1]),l=e.v(n,a,s,i&&i[2]),d=e.v(r,a,s,i&&i[3]);e.idx.push(c,f,l,c,l,d)},e.tri=(t,o,n,r,a)=>{let s=e.v(t,r,a),i=e.v(o,r,a),c=e.v(n,r,a);e.idx.push(s,i,c)},e}function q_(){let e=f2(),t=(n,r,a)=>[qt.x+Math.cos(n)*r,a,qt.z+Math.sin(n)*r],o=n=>[Math.cos(n),0,Math.sin(n)];for(let r=0;r>Nn.x0-.01;r-=.25)for(let a=41.2;a<47.8;a+=.2){let s=r-.25,i=r,c=a,f=a+.2;if(!(Yi(s,c)||Yi(i,c)||Yi(s,f)||Yi(i,f)||Yi((s+i)/2,(c+f)/2)))continue;let l=c,d=f;s>W0(ft.z0)-.3&&(l=Math.max(l,ft.z0),d=Math.min(d,ft.z1),d<=l)||e.quad([s,0,l],[s,0,d],[i,0,d],[i,0,l],[0,1,0],Xt.FLOOR)}{for(let r=0;r<360;r++){let a=r/360*2*qo,s=(r+1)/360*2*qo,i=(a+s)/2,c=t(i,oo,0),f=0;c[0]>qt.x&&c[2]>ft.z0-.02&&c[2]<ft.z1+.02&&(f=Math.max(sh(Math.min(Math.max(t(a,oo,0)[2],ft.z0),ft.z1)),sh(Math.min(Math.max(t(s,oo,0)[2],ft.z0),ft.z1)))),c[0]<qt.x&&c[2]>Nn.z0-.02&&c[2]<Nn.z1+.02&&(f=Nn.top);let l=a*oo,d=s*oo,h=o(a).map(p=>-p),v=o(s).map(p=>-p),u=[f];for(let p=Math.ceil(f/2.5)*2.5;p<vr;p+=2.5)p>f+.01&&u.push(p);u.push(vr);for(let p=0;p<u.length-1;p++){let m=u[p],g=u[p+1],y=e.v(t(a,oo,m),h,Xt.WALL,[l,m]),b=e.v(t(s,oo,m),v,Xt.WALL,[d,m]),w=e.v(t(s,oo,g),v,Xt.WALL,[d,g]),M=e.v(t(a,oo,g),h,Xt.WALL,[l,g]);e.idx.push(y,b,w,y,w,M)}}for(let[r,a,s]of[[6.55,.22,.07],[0,.32,.05]])for(let i=0;i<360;i++){let c=i/360*2*qo,f=(i+1)/360*2*qo,l=(c+f)/2,d=t(l,oo,0);if(r<1&&(d[0]>qt.x&&d[2]>ft.z0&&d[2]<ft.z1||d[0]<qt.x&&d[2]>Nn.z0&&d[2]<Nn.z1))continue;let h=oo-s;e.quad(t(c,h,r),t(f,h,r),t(f,h,r+a),t(c,h,r+a),o(l).map(v=>-v),Xt.WALL,[[c*oo,r+100],[f*oo,r+100],[f*oo,r+a+100],[c*oo,r+a+100]]),e.quad(t(c,h,r+a),t(f,h,r+a),t(f,oo,r+a),t(c,oo,r+a),[0,1,0],Xt.WALL,[[0,200],[0,200],[0,200],[0,200]]),r>1&&e.quad(t(c,oo,r),t(f,oo,r),t(f,h,r),t(c,h,r),[0,-1,0],Xt.WALL,[[0,200],[0,200],[0,200],[0,200]])}}{let n=s0.x;for(let[a,s]of[[ft.z0,1],[ft.z1,-1]]){let i=W0(a);e.quad([n,0,a],[i,0,a],[i,ft.spring,a],[n,ft.spring,a],[0,0,s],Xt.WALL,[[n,0],[i,0],[i,ft.spring],[n,ft.spring]])}let r=40;for(let a=0;a<r;a++){let s=a/r*qo,i=(a+1)/r*qo,c=ft.zc-Math.cos(s)*ft.r,f=ft.zc-Math.cos(i)*ft.r,l=ft.spring+Math.sin(s)*ft.r,d=ft.spring+Math.sin(i)*ft.r,h=[0,-Math.sin(s),Math.cos(s)],v=[0,-Math.sin(i),Math.cos(i)],u=e.v([n,l,c],h,Xt.WALL,[n,s*ft.r]),p=e.v([W0(c),l,c],h,Xt.WALL,[W0(c),s*ft.r]),m=e.v([W0(f),d,f],v,Xt.WALL,[W0(f),i*ft.r]),g=e.v([n,d,f],v,Xt.WALL,[n,i*ft.r]);e.idx.push(u,p,m,u,m,g)}}{let n=s0.x,r=.05;for(let f=s0.z0;f<s0.z1-1e-6;f+=r){let l=f,d=Math.min(s0.z1,f+r),v=(u=>u>ft.z0&&u<ft.z1)((l+d)/2)?Math.max(sh(l),sh(d)):0;e.quad([n,v,l],[n,v,d],[n,s0.top,d],[n,s0.top,l],[1,0,0],Xt.HALLSTONE,[[l,v],[d,v],[d,s0.top],[l,s0.top]])}let a=.32,s=.06,i=n+s,c=36;for(let f=0;f<c;f++){let l=f/c*qo,d=(f+1)/c*qo,h=(g,y)=>[i,ft.spring+Math.sin(g)*y,ft.zc-Math.cos(g)*y],v=ft.r,u=ft.r+a;e.quad(h(l,v),h(d,v),h(d,u),h(l,u),[1,0,0],Xt.HALLSTONE,[[0,300],[0,300],[1,300],[1,300]]);let p=(g,y,b)=>[b,ft.spring+Math.sin(g)*y,ft.zc-Math.cos(g)*y],m=[0,Math.sin((l+d)/2),-Math.cos((l+d)/2)];e.quad(p(l,u,n),p(d,u,n),p(d,u,i),p(l,u,i),m,Xt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),e.quad(p(l,v,n),p(d,v,n),p(d,v,i),p(l,v,i),m.map(g=>-g),Xt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}for(let[f,l,d]of[[ft.z0-a,ft.z0,-1],[ft.z1,ft.z1+a,1]]){e.quad([i,0,f],[i,0,l],[i,ft.spring,l],[i,ft.spring,f],[1,0,0],Xt.HALLSTONE,[[0,300],[1,300],[1,300],[0,300]]);let h=d<0?f:l,v=d<0?l:f;e.quad([n,0,h],[i,0,h],[i,ft.spring,h],[n,ft.spring,h],[0,0,d],Xt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),e.quad([n,0,v],[i,0,v],[i,ft.spring,v],[n,ft.spring,v],[0,0,-d],Xt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);let u=ft.spring-.16,p=.16,m=.11,g=Math.min(f,l)-.05,y=Math.max(f,l)+.05;e.quad([n+m,u,g],[n+m,u,y],[n+m,u+p,y],[n+m,u+p,g],[1,0,0],Xt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),e.quad([n,u+p,g],[n+m,u+p,g],[n+m,u+p,y],[n,u+p,y],[0,1,0],Xt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),e.quad([n,u,g],[n,u,y],[n+m,u,y],[n+m,u,g],[0,-1,0],Xt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);for(let b of[g,y])e.quad([n,u,b],[n+m,u,b],[n+m,u+p,b],[n,u+p,b],[0,0,b===g?-1:1],Xt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}{let f=ft.spring+ft.r-.05,l=ft.spring+ft.r+a+.12,d=.16,h=.22,v=i+.04;e.quad([v,f,ft.zc-d],[v,f,ft.zc+d],[v,l,ft.zc+h],[v,l,ft.zc-h],[1,0,0],Xt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);for(let u of[-1,1])e.quad([n,f,ft.zc+u*d],[v,f,ft.zc+u*d],[v,l,ft.zc+u*h],[n,l,ft.zc+u*h],[0,0,u],Xt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);e.quad([n,l,ft.zc-h],[v,l,ft.zc-h],[v,l,ft.zc+h],[n,l,ft.zc+h],[0,1,0],Xt.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}}{let{x0:n,x1:r,z0:a,z1:s,top:i}=Nn;e.quad([n,0,a],[n,0,s],[n,i,s],[n,i,a],[1,0,0],Xt.WALL,[[a,0],[s,0],[s,i],[a,i]]);for(let[f,l]of[[a,1],[s,-1]]){let d=qt.x-Math.sqrt(oo*oo-(f-qt.z)*(f-qt.z));e.quad([n,0,f],[d,0,f],[d,i,f],[n,i,f],[0,0,l],Xt.WALL,[[n,0],[d,0],[d,i],[n,i]])}let c=24;for(let f=0;f<c;f++){let l=a+(s-a)*f/c,d=a+(s-a)*(f+1)/c,h=qt.x-Math.sqrt(oo*oo-(l-qt.z)**2),v=qt.x-Math.sqrt(oo*oo-(d-qt.z)**2);e.quad([n,i,l],[h,i,l],[v,i,d],[n,i,d],[0,-1,0],Xt.WALL,[[0,200],[0,200],[0,200],[0,200]])}for(let f=0;f<c;f++){let l=a+(s-a)*f/c,d=a+(s-a)*(f+1)/c,h=qt.x-Math.sqrt(oo*oo-(l-qt.z)**2)+.05,v=qt.x-Math.sqrt(oo*oo-(d-qt.z)**2)+.05;e.quad([h,i-.3,l],[v,i-.3,d],[v,i,d],[h,i,l],[1,0,0],Xt.WALL,[[0,200],[0,200],[0,200],[0,200]])}}{let r=[1.15,1.6,2.3,3,3.35,4.2,oo];for(let a=0;a<120;a++){let s=a/120*2*qo,i=(a+1)/120*2*qo,c=(s+i)/2;c>qo&&(c-=2*qo);for(let f=0;f<r.length-1;f++){let l=r[f],d=r[f+1],h=c*180/qo;l>=3.3&&h>8&&h<85||e.quad(t(s,l,vr),t(s,d,vr),t(i,d,vr),t(i,l,vr),[0,-1,0],Xt.CEIL,[[s*l,l],[s*d,d],[i*d,d],[i*l,l]])}e.quad(t(s,1.15,vr),t(i,1.15,vr),t(i,1.15,vr+.7),t(s,1.15,vr+.7),o(c).map(f=>-f),Xt.CEIL,[[0,400],[0,400],[0,400],[0,400]]),e.tri([qt.x,vr+.7,qt.z],t(i,1.15,vr+.7),t(s,1.15,vr+.7),[0,-1,0],Xt.OCULUS)}}{let n=Oo.ri,r=Oo.ro,a=Oo.n*Oo.step;for(let c=0;c<Oo.n;c++){let f=c*Oo.step,l=(c+1)*Oo.step,d=qr(f),h=qr(l),v=(c+1)*Oo.rise,u=c*Oo.rise,p=2;for(let y=0;y<p;y++){let b=d+(h-d)*y/p-(y===0?.004:0),w=d+(h-d)*(y+1)/p;e.quad(t(b,n,v),t(b,r,v),t(w,r,v),t(w,n,v),[0,1,0],Xt.STEP,[[n*b,c],[r*b,c],[r*w,c],[n*w,c]])}let m=[-Math.sin(d),0,Math.cos(d)],g=d-.004;e.quad(t(g,n,u),t(g,r,u),t(g,r,v),t(g,n,v),m,Xt.STEP,[[n*d,c+.5],[r*d,c+.5],[r*d,c+.5],[n*d,c+.5]]),e.quad(t(d,n,V0(f)+.06),t(h,n,V0(l)+.06),t(h,n,v),t(g,n,v),o((d+h)/2).map(y=>-y),Xt.STEP,[[0,500],[0,500],[0,500],[0,500]])}let s=Math.ceil(a/(1.2*qo/180)),i=[n,n+.6,n+1.2,r];for(let c=0;c<s;c++){let f=c/s*a,l=(c+1)/s*a,d=qr(f),h=qr(l),v=V0(f),u=V0(l),p=v-Oo.thick,m=u-Oo.thick,g=o(d).map(z=>-z),y=o(h).map(z=>-z),b=e.v(t(d,n,p),g,Xt.STRING,[f*n,0]),w=e.v(t(h,n,m),y,Xt.STRING,[l*n,0]),M=e.v(t(h,n,u+.06),y,Xt.STRING,[l*n,1]),k=e.v(t(d,n,v+.06),g,Xt.STRING,[f*n,1]);e.idx.push(b,w,M,b,M,k);for(let z=0;z<i.length-1;z++){let P=i[z],R=i[z+1],U=D=>{let Y=o(D);return[-Y[0]*.12,-.99,-Y[2]*.12]};e.quad(t(d,P,p),t(d,R,p),t(h,R,m),t(h,P,m),U((d+h)/2),Xt.SOFFIT,[[f*P,P],[f*R,R],[l*R,R],[l*P,P]])}}}return e}function D_(){let e=f2(),t=Oo.ri+.045,o=Oo.n*Oo.step,n=Math.ceil(o/(.8*qo/180)),r=.92,a=(c,f,l)=>[qt.x+Math.cos(c)*f,l,qt.z+Math.sin(c)*f],s=c=>[Math.cos(c),0,Math.sin(c)];for(let c=0;c<n;c++){let f=c/n*o,l=(c+1)/n*o,d=qr(f),h=qr(l),v=V0(f)+.06,u=V0(l)+.06,p=s(d).map(z=>-z),m=s(h).map(z=>-z),g=f*t,y=l*t,b=e.v(a(d,t,v),p,Xt.RAILING,[g,0]),w=e.v(a(h,t,u),m,Xt.RAILING,[y,0]),M=e.v(a(h,t,u+r),m,Xt.RAILING,[y,r]),k=e.v(a(d,t,v+r),p,Xt.RAILING,[g,r]);e.idx.push(b,w,M,b,M,k)}((c,f,l,d)=>{let v=p=>{let m=qr(p),g=V0(p)+.06+f,y=a(m,t+c,g),b=s(m),w=[];for(let M=0;M<8;M++){let k=M/8*2*qo,z=[b[0]*Math.cos(k),Math.sin(k),b[2]*Math.cos(k)];w.push([[y[0]+z[0]*l,y[1]+z[1]*l,y[2]+z[2]*l],z])}return w},u=v(0);for(let p=1;p<=n;p++){let m=v(p/n*o);for(let g=0;g<8;g++){let y=(g+1)%8,b=e.v(u[g][0],u[g][1],d),w=e.v(m[g][0],m[g][1],d),M=e.v(m[y][0],m[y][1],d),k=e.v(u[y][0],u[y][1],d);e.idx.push(b,w,M,b,M,k)}u=m}})(0,r+.02,.028,Xt.IRON);for(let c of $u){let f=Math.atan2(c[2]-qt.z,c[0]-qt.x),l=[Math.cos(f),0,Math.sin(f)],d=12;for(let p=0;p<d;p++){let m=p/d*2*qo,g=(p+1)/d*2*qo,y=(b,w,M)=>[c[0]+Math.cos(b)*w,M,c[2]+Math.sin(b)*w];e.quad(y(m,.16,c[1]),y(g,.16,c[1]),y(g,.13,c[1]-.05),y(m,.13,c[1]-.05),[Math.cos(m)*.6,.8,Math.sin(m)*.6],Xt.IRON),e.quad(y(m,.16,c[1]),y(g,.16,c[1]),y(g,0,c[1]+.002),y(m,0,c[1]+.002),[0,1,0],Xt.IRON)}let h=[c[0]+l[0]*.16,c[1]-.35,c[2]+l[2]*.16],v=[-l[2],0,l[0]],u=.018;e.quad([h[0]-v[0]*u,h[1],h[2]-v[2]*u],[h[0]+v[0]*u,h[1],h[2]+v[2]*u],[c[0]+v[0]*u,c[1]-.05,c[2]+v[2]*u],[c[0]-v[0]*u,c[1]-.05,c[2]-v[2]*u],[-l[0],.5,-l[2]],Xt.IRON)}{let c=qr(0),f=a(c,t,0),l=10;for(let d=0;d<l;d++){let h=d/l*2*qo,v=(d+1)/l*2*qo,u=(p,m,g)=>[f[0]+Math.cos(p)*m,g,f[2]+Math.sin(p)*m];e.quad(u(h,.035,0),u(v,.035,0),u(v,.035,r+.1),u(h,.035,r+.1),[Math.cos((h+v)/2),0,Math.sin((h+v)/2)],Xt.IRON),e.quad(u(h,.06,r+.1),u(v,.06,r+.1),u(v,.03,r+.2),u(h,.03,r+.2),[Math.cos((h+v)/2)*.8,.6,Math.sin((h+v)/2)*.8],Xt.IRON)}}return e}function G_(){let e=[],t=[],o=[],n=[];for(let a of Fu){let[s,i,c,f,l,d]=a,h=e.length/3;for(let u=0;u<=7;u++){let p=u/7*2*qo+d,m=Math.cos(p),g=Math.sin(p);e.push(s+m*f,i,c+g*f,s+m*f,i+l,c+g*f),t.push(m,0,g,m,0,g),o.push(0,l,d,1,l,d)}for(let u=0;u<7;u++){let p=h+u*2;n.push(p,p+2,p+3,p,p+3,p+1)}let v=e.length/3;e.push(s,i+l-.006,c),t.push(0,1,0),o.push(2,l,d);for(let u=0;u<7;u++){let p=u/7*2*qo+d;e.push(s+Math.cos(p)*f,i+l,c+Math.sin(p)*f),t.push(0,1,0),o.push(1,l,d)}for(let u=0;u<7;u++)n.push(v,v+1+u,v+1+(u+1)%7)}return{pos:e,nrm:t,info:o,idx:n}}function H_(){let e=[],t=[],o=[],n=[];for(let r of Fu){let[a,s,i,,c,f]=r,l=e.length/3;for(let d of[[-1,0],[1,0],[1,1],[-1,1]])e.push(a,s+c+.004,i),t.push(d[0],d[1]),o.push(f);n.push(l,l+1,l+2,l,l+2,l+3)}return{ctr:e,corner:t,ph:o,idx:n}}function U_(e){let t=new DataView(e),o=t.getUint32(4,!0),n=t.getUint32(8,!0),r=[],a=[];for(let g=0;g<3;g++)r.push(t.getFloat32(12+g*4,!0)),a.push(t.getFloat32(24+g*4,!0));let s=36,i=new Uint16Array(e,s,o*3);s+=o*6;let c=new Uint16Array(e,s,n);s+=n*2;let f=new Int8Array(e,s,o*3);s+=o*3;let l=new Uint8Array(e,s,o),d=new Float32Array(o*3),h=new Float32Array(o*3),v=new Float32Array(o),u=Math.cos(vn.yaw),p=Math.sin(vn.yaw),m=vn.scale;for(let g=0;g<o;g++){let y=(r[0]+i[g*3]/65535*a[0])*m,b=(r[1]+i[g*3+1]/65535*a[1])*m,w=(r[2]+i[g*3+2]/65535*a[2])*m;d[g*3]=vn.x+u*y+p*w,d[g*3+1]=b,d[g*3+2]=vn.z-p*y+u*w;let M=f[g*3]/127,k=f[g*3+1]/127,z=f[g*3+2]/127;h[g*3]=u*M+p*z,h[g*3+1]=k,h[g*3+2]=-p*M+u*z,v[g]=l[g]}return{pos:d,nrm:h,mat:v,idx:new Uint32Array(c)}}function B_(){let e=[],t=(d,h)=>[qt.x+Math.cos(d)*h,qt.z+Math.sin(d)*h];e.push([[0,ft.z0],[W0(ft.z0),ft.z0]]),e.push([[W0(ft.z1),ft.z1],[0,ft.z1]]);let o=Math.asin((ft.z1-qt.z)/oo),n=72;for(let d=0;d<n;d++){let h=o+d/n*(2*qo-2*o),v=o+(d+1)/n*(2*qo-2*o);e.push([t(h,oo-.25),t(v,oo-.25)])}let r=ch[0]-.55+.35;e.push([[r,Nn.z0],[r,Nn.z1]]);let a=2.4/Oo.k,s=12;for(let d=0;d<s;d++){let h=qr(d/s*a),v=qr((d+1)/s*a);e.push([t(h,Oo.ri-.2),t(v,Oo.ri-.2)])}e.push([t(qr(0),Oo.ri-.2),t(qr(0),oo)]),e.push([t(qr(a),Oo.ri-.2),t(qr(a),oo)]);let i=Math.cos(vn.yaw),c=Math.sin(vn.yaw),f=vn.scale,l=[[-1,-.62],[1.25,-.62],[1.25,.62],[-1,.62]].map(([d,h])=>[vn.x+(i*d+c*h)*f,vn.z+(-c*d+i*h)*f]);for(let d=0;d<4;d++)e.push([l[d],l[(d+1)%4]]);return e}Qr.exports=e=>{let t=q_(),o=D_(),n=G_(),r=H_(),a=j0(),s=`
	precision highp float;
	${O_.GLSL}
	uniform float time;
	${l2()}
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
	}`,c=e({vert:i,frag:`${s}
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
				base *= 1.0 - 0.25 * smoothstep(3.0, ${Yn(vr)}, v_pos.y);
			} else if (k < 2.5) {
				// the steps: a greyer, harder stone, worn paler in the middle
				float r = length(v_pos.xz - vec2(${Yn(qt.x)}, ${Yn(qt.z)}));
				base = limestone(v_pos.xz * 1.4 + v_uv * 0.3) * vec3(0.90, 0.88, 0.86);
				base *= 1.0 + 0.10 * (1.0 - smoothstep(0.0, 0.6, abs(r - ${Yn((Oo.ri+Oo.ro)/2)})));
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
				vec2 q = v_pos.xz - vec2(${Yn(qt.x)}, ${Yn(qt.z)});
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
		}`,attributes:{position:t.pos,normal:t.nrm,kind:t.kind,uv:t.uv},elements:new Uint32Array(t.idx),cull:{enable:!1}}),f=e({vert:i,frag:`${s}
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
		}`,attributes:{position:o.pos,normal:o.nrm,kind:o.kind,uv:o.uv},elements:new Uint32Array(o.idx),cull:{enable:!1}}),l=e({vert:`
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
		}`,attributes:{position:n.pos,normal:n.nrm,info:n.info},elements:new Uint32Array(n.idx),cull:{enable:!1}}),d=e({vert:`
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
		}`,attributes:{ctr:r.ctr,corner:r.corner,ph:r.ph},elements:new Uint32Array(r.idx),uniforms:{halo:e.prop("halo")},depth:{enable:!0,mask:!1},cull:{enable:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),h=null;fetch("res/piano.bin").then(m=>{if(!m.ok)throw new Error("Could not load piano.bin");return m.arrayBuffer()}).then(m=>{let g=U_(m);h=e({vert:`
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
				}`,attributes:{position:g.pos,normal:g.nrm,mat:g.mat},elements:g.idx,cull:{enable:!1}})}).catch(m=>console.error(m));let v=(()=>{let m=[],g=[],y=[],b=[],M=[qt.x,vr-.3,qt.z],k=[gl.stoolX,.02,gl.keyFront+.1],z=1.25,P=2.35;for(let R=0;R<=40;R++){let U=R/40*2*qo,D=Math.cos(U),Y=Math.sin(U);m.push(M[0]+D*z,M[1],M[2]+Y*z,k[0]+D*P,k[1],k[2]+Y*P),g.push(D,.08,Y,D,.08,Y),y.push(1,0)}for(let R=0;R<40;R++){let U=R*2;b.push(U,U+1,U+3,U,U+3,U+2)}return{pos:m,nrm:g,hh:y,idx:b}})(),u=e({vert:`
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
		}`,attributes:{position:v.pos,normal:v.nrm,hh:v.hh},elements:v.idx,depth:{enable:!0,mask:!1},cull:{enable:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});function p(m){let g=m&&m.reflected;c(),f(),l(),h&&h(),g||(u(),d({halo:1}),d({halo:0}))}return p};Qr.exports.C=qt;Qr.exports.R=oo;Qr.exports.PASS=ft;Qr.exports.SURR=s0;Qr.exports.OFF=ch;Qr.exports.BAY=Nn;Qr.exports.PATH=ih;Qr.exports.PIANO=vn;Qr.exports.PLAY=gl;Qr.exports.TOP=vr;Qr.exports.roomGLSL=l2;Qr.exports.segments=B_});var b2=ke((wA,y2)=>{"use strict";var j_=Is(),{addFlutedColumn:h2,addStatue:W_,addPlant:V_}=qm(),u2=H0(),X_=Hi(),Ba=br(),Y_=Ea(),Qi=X0(),ko=14,On=Ba.C.hallEnd+.35,Xo=8,Io=.35,qu=1.15,Du=1.15,Gu=[18,29,40],K_=[[[0,0],[0,Qi.PASS.z0]],[[0,Qi.PASS.z1],[0,On]],[[ko,On],[ko,0]],[[0,0],[ko,0]],[[ko,On],[0,On]]],m2=[];for(let e of Gu)for(let t of[1.25,ko-1.25]){let o=qu/2,n=Du/2;m2.push([[t-o,e-n],[t+o,e-n]],[[t+o,e-n],[t+o,e+n]],[[t+o,e+n],[t-o,e+n]],[[t-o,e+n],[t-o,e-n]])}var fh=12,g2=2.95,x2=.62,dh=g2+x2,hh=[{file:"venus.bin",x:1.85,z:On-1.6,yaw:2.67,height:5.2,pedestal:!0,mat:1},{file:"david.bin",x:ko-2.1,z:On-1.6,yaw:-2.67,height:5.2,pedestal:!0,mat:1},{file:"pieta.bin",x:1.75,z:5.9,yaw:Math.PI/2,height:3.6,base:1,mat:1},{file:"spinario.bin",x:Ba.NICHE_X[0],z:Ba.NICHE_STATUE_Z,yaw:-.35,height:1.85,base:Ba.NICHE_PLINTH_TOP,mat:3},{file:"charioteer.bin",x:Ba.NICHE_X[1],z:Ba.NICHE_STATUE_Z+.1,yaw:0,height:2.95,base:Ba.NICHE_PLINTH_TOP,mat:3}],Q_={x0:Io,x1:3.15,z0:3.6,z1:8.2,top:1},d2=.8,ph=1.17,xl=[];[{z:10.4,dz:-.7},{z:19.2,dz:.7},{z:27.8,dz:-.7}].forEach((e,t)=>{xl.push({x:1,z:e.z,seed:11+t*7,away:[1,e.dz]}),xl.push({x:ko-1,z:e.z,seed:53+t*5,away:[-1,e.dz]})});function Hu(e,t,o,n){return[[[e-o,t-n],[e+o,t-n]],[[e+o,t-n],[e+o,t+n]],[[e+o,t+n],[e-o,t+n]],[[e-o,t+n],[e-o,t-n]]]}var vh=[];for(let e of[-1,1])vh.push(...Hu(ko/2+e*dh,fh,.85,.85));for(let e of hh.filter(t=>t.pedestal))vh.push(...Hu(e.x,e.z,ph*1.1,ph*1.1));for(let e of xl)vh.push(...Hu(e.x,e.z,.42,.42));var Z_=K_.concat(m2,vh,Qi.segments());function J_(e){let o=new Map,n=(r,a,s)=>{let i=r+":"+a;o.has(i)||o.set(i,[]);let c=o.get(i);c.includes(s)||c.push(s)};for(let r of e){let a=Math.floor(Math.min(r[0][0],r[1][0])/4)-1,s=Math.floor(Math.max(r[0][0],r[1][0])/4)+1,i=Math.floor(Math.min(r[0][1],r[1][1])/4)-1,c=Math.floor(Math.max(r[0][1],r[1][1])/4)+1;for(let f=a;f<=s;f++)for(let l=i;l<=c;l++)n(f,l,r)}return{get(r,a){let s=Math.floor(r/4),i=Math.floor(a/4),c=[];for(let f=-1;f<=1;f++)for(let l=-1;l<=1;l++){let d=o.get(s+f+":"+(i+l));d&&c.push(...d)}return[...new Set(c)]}}}var uh=[],Rn={curMat:[0,0,0]};function Uu(e,t,o,n,r,a,s){let i=e.length/3;e.push(...o,...n,...r,...a),t.push(...s,...s,...s,...s);let c=Rn.curMat;return uh.push(...c,...c,...c,...c),[i,i+2,i+1,i+1,i+2,i+3]}function Co(e,t,o,n,r,a,s,i,c){let f=(l,d,h,v,u)=>{o.push(...Uu(e,t,l,d,h,v,u))};f([n,r,a],[s,r,a],[n,i,a],[s,i,a],[0,0,-1]),f([s,r,c],[n,r,c],[s,i,c],[n,i,c],[0,0,1]),f([n,r,c],[n,r,a],[n,i,c],[n,i,a],[-1,0,0]),f([s,r,a],[s,r,c],[s,i,a],[s,i,c],[1,0,0]),f([n,i,a],[s,i,a],[n,i,c],[s,i,c],[0,1,0]),f([n,r,c],[s,r,c],[n,r,a],[s,r,a],[0,-1,0])}function Ki(e,t,o,n,r){let a=Rn,s=a.vert(e,r),i=a.vert(t,r),c=a.vert(o,r),f=a.vert(n,r);a.tri(s,i,c),a.tri(i,f,c)}function p2(e,t,o,n,r,a,s){for(let i=0;i<s;i++){let c=Math.PI*i/s,f=Math.PI*(i+1)/s,l=Math.cos(c),d=Math.sin(c),h=Math.cos(f),v=Math.sin(f),u=[e+o*l,t+o*d],p=[e+o*h,t+o*v],m=[e+n*l,t+n*d],g=[e+n*h,t+n*v];Ki([u[0],u[1],r],[p[0],p[1],r],[m[0],m[1],r],[g[0],g[1],r],[0,0,-1]),Ki([u[0],u[1],a],[p[0],p[1],a],[m[0],m[1],a],[g[0],g[1],a],[0,0,1]);let y=(c+f)/2;Ki([u[0],u[1],r],[p[0],p[1],r],[u[0],u[1],a],[p[0],p[1],a],[-Math.cos(y),-Math.sin(y),0]),Ki([m[0],m[1],r],[g[0],g[1],r],[m[0],m[1],a],[g[0],g[1],a],[Math.cos(y),Math.sin(y),0])}}function e6(e,t,o,n,r,a,s){for(let i=0;i<s;i++){let c=Math.PI*i/s,f=Math.PI*(i+1)/s,l=e+o*Math.cos(c),d=t+o*Math.sin(c),h=e+o*Math.cos(f),v=t+o*Math.sin(f);Ki([l,d,r],[h,v,r],[l,n,r],[h,n,r],[0,0,-1]),Ki([l,d,a],[h,v,a],[l,n,a],[h,n,a],[0,0,1])}}function t6(e,t,o,n){let r=ko/2,a=g2,s=3,i=a+.42,c=i+.15,f=x2,l=dh,d=5.98,h=n-.45,v=n+.45,u=64,p=h2(Rn,r-l,n,0,d,f);h2(Rn,r+l,n,0,d,f),Rn.curMat=[0,0,0],p2(r,s,a,i,h,v,u),p2(r,s,i,c,h-.07,v+.07,u),e6(r,s,c,p+.05,h,v,u);for(let g of[-1,1]){let y=r+g*(c-.02),b=r+g*l;Co(e,t,o,Math.min(y,b),s,h,Math.max(y,b),p+.05,v)}for(let g of[-1,1]){let y=r+g*(a-.05),b=r+g*(a+.85);Co(e,t,o,Math.min(y,b),s-.16,n-.6,Math.max(y,b),s,n+.6)}let m=l+f*1.42+.45;Co(e,t,o,r-m,p,n-.7,r+m,p+.44,n+.7),Co(e,t,o,r-m+.12,p+.44,n-.62,r+m-.12,p+.7,n+.62),Co(e,t,o,r-m-.1,p+.7,n-.84,r+m+.1,p+.84,n+.84),Co(e,t,o,r-m-.22,p+.84,n-.96,r+m+.22,p+1,n+.96),Co(e,t,o,r-.3,s+a-.1,n-.56,r+.3,p,n+.56)}function v2(e,t,o,n,r){Co(e,t,o,n-.72,0,r-.72,n+.72,.2,r+.72),Co(e,t,o,n-.58,.2,r-.58,n+.58,.4,r+.58),Co(e,t,o,n-qu/2,.4,r-Du/2,n+qu/2,Xo-1.35,r+Du/2),Co(e,t,o,n-.67,.42,r-.67,n+.67,.62,r+.67),Co(e,t,o,n-.67,Xo-1.58,r-.67,n+.67,Xo-1.35,r+.67),Co(e,t,o,n-.82,Xo-1.35,r-.82,n+.82,Xo-1.05,r+.82),Co(e,t,o,n-.66,Xo-1.05,r-.66,n+.66,Xo-.78,r+.66),Co(e,t,o,n-.92,Xo-.78,r-.92,n+.92,Xo-.55,r+.92),Co(e,t,o,n-.78,Xo-.55,r-.78,n+.78,Xo-.3,r+.78),Co(e,t,o,n-.92,Xo-.3,r-.92,n+.92,Xo-.1,r+.92)}function lh(e,t,o,n,r){r==="left"?(Co(e,t,o,-.08,1,n-3.8/2,.14,5.7,n+3.8/2),Co(e,t,o,-.08-.04,1+.18,n-3.8/2+.18,.18,5.7-.18,n+3.8/2-.18)):(Co(e,t,o,ko-.14,1,n-3.8/2,ko+.08,5.7,n+3.8/2),Co(e,t,o,ko-.18,1+.18,n-3.8/2+.18,ko+.08+.04,5.7-.18,n+3.8/2-.18))}function o6(e,t,o,n){Co(e,t,o,.65,Xo-.16,n-1.65,.65+.22,Xo,n+1.65),Co(e,t,o,ko-.65-.22,Xo-.16,n-1.65,ko-.65,Xo,n+1.65),Co(e,t,o,.65,Xo-.16,n-1.65,ko-.65,Xo,n-1.43),Co(e,t,o,.65,Xo-.16,n+1.43,ko-.65,Xo,n+1.65),o.push(...Uu(e,t,[.65+.22,Xo-.16,n-1.43],[ko-.65-.22,Xo-.16,n-1.43],[.65+.22,Xo-.16,n+1.43],[ko-.65-.22,Xo-.16,n+1.43],[0,-1,0]))}y2.exports=function(){let e=[],t=[],o=[];uh=[],Rn=j_.createBuilder(e,t,o,uh),o.push(...Uu(e,t,[0,0,0],[ko,0,0],[0,0,On],[ko,0,On],[0,1,0])),X_.addSkylight(Rn,[0,0,0],On),Rn.curMat=[0,0,0];{let c=Qi.SURR;Co(e,t,o,-Io,0,0,Io,Xo,c.z0),Co(e,t,o,-Io,0,c.z1,Io,Xo,On),Co(e,t,o,-Io,c.top,c.z0,Io,Xo,c.z1)}Co(e,t,o,ko-Io,0,Ba.C.z1,ko+Io,Xo,On-Io),Co(e,t,o,ko-Io-.12,0,Ba.C.z1+2*Io,ko-Io,.42,On-Io),Co(e,t,o,ko-Io-.07,.42,Ba.C.z1+2*Io,ko-Io,.5,On-Io);for(let[c,f]of[[0,Qi.SURR.z0],[Qi.SURR.z1,On-Io]])Co(e,t,o,Io,0,c,Io+.12,.42,f),Co(e,t,o,Io,.42,c,Io+.07,.5,f);Co(e,t,o,Io,0,On-Io-.12,ko-Io,.42,On-Io),Co(e,t,o,Io,.42,On-Io-.07,ko-Io,.5,On-Io),u2.addEntranceWall(Rn),u2.addFrames(Rn),Rn.curMat=[0,0,0],Co(e,t,o,-Io,0,On-Io,ko+Io,Xo,On+Io),t6(e,t,o,fh);for(let c of Gu)v2(e,t,o,1.25,c),v2(e,t,o,ko-1.25,c);lh(e,t,o,22,"left"),lh(e,t,o,25,"right"),lh(e,t,o,33,"left"),lh(e,t,o,36,"right");let n=[4,9,34,39,44,49];for(let c of n)o6(e,t,o,c);Ba.addWing(Rn),Rn.curMat=[0,0,0];for(let c of hh.filter(f=>f.pedestal))W_(Rn,c.x,c.z,ph,d2);{let c=Q_;Rn.curMat=[0,0,0],Rn.box(c.x0,0,c.z0-.08,c.x1+.08,.16,c.z1+.08,[0,0,0]),Rn.box(c.x0,.16,c.z0+.04,c.x1-.04,c.top-.14,c.z1-.04,[0,0,0]),Rn.box(c.x0,c.top-.14,c.z0-.02,c.x1+.03,c.top-.06,c.z1+.02,[0,0,0]),Rn.box(c.x0,c.top-.06,c.z0-.06,c.x1+.07,c.top,c.z1+.06,[0,0,0])}Y_.addAlcove(Rn);for(let c of xl)V_(Rn,c.x,c.z,c.seed,1,c.away);Rn.curMat=[0,0,0];let r=[[[ko,On-.35],[0,On-.35]],[[0,3],[0,10]],[[ko,15],[ko,22]],[[0,24],[0,31]],[[ko,33],[ko,40]],[[0,41],[0,46]]],a=J_(Z_),s=(c,f)=>{let l=0,d=1/0;return r.forEach((h,v)=>{let u=(h[0][0]+h[1][0])/2,p=(h[0][1]+h[1][1])/2,m=Math.hypot(c-u,f-p);m<d&&(d=m,l=v)}),l},i=[];for(let c=0;c<10;c++)i.push({c:[0,0,0,0],d:[1,0,0,0]});return{placements:r,lights:i,statues:hh,occluders:[...Gu.flatMap(c=>[[1.25,c,.78],[ko-1.25,c,.78]]),[ko/2-dh,fh,.86],[ko/2+dh,fh,.86],...hh.filter(c=>c.pedestal).map(c=>[c.x,c.z,ph*1.12]),...xl.map(c=>[c.x,c.z,.34])],pedestalTop:d2,mat:uh,getAreaIndex:s,getGridSegments:(c,f)=>a.get(c,f),getGridParts:(c,f)=>a.get(c,f),position:e,normal:t,elements:o}}});var Bu=ke((_A,w2)=>{"use strict";var{doorLightGLSL:n6}=H0(),{skylightGLSL:r6}=Hi(),{windowLightGLSL:a6,C:la}=br(),{alcoveLightGLSL:s6}=Ea(),Aa=e=>e.toFixed(4),i6=(()=>{let e=[-.22,.6,-.77],t=Math.hypot(e[0],e[1],e[2]);return e.map(o=>(o/t).toFixed(4)).join(", ")})();w2.exports=(e,t,o,n)=>{let a=(t.occluders||[]).slice(0,24).map(([v,u,p])=>`ao = min(ao, contact(v_pos.xz, vec2(${v.toFixed(3)}, ${u.toFixed(3)}), ${p.toFixed(3)}));`).join(`
      `),s={c:[0,0,0,0],d:[1,0,0,0]},i=-1,c=[],f=v=>{let u=v&&v.tick!==void 0?v.tick:0;if(u!==i||c.length===0){i=u;let p=t.viewer||[7,2,20];for(c=t.lights.filter(m=>m.c[3]>.5).map(m=>({l:m,d:Math.hypot(m.c[0]-p[0],m.c[2]-p[2])})).sort((m,g)=>m.d-g.d).slice(0,8).map(m=>m.l);c.length<8;)c.push(s)}return c},l={},d="",h="";for(let v=0;v<8;v++)l["lightC"+v]=u=>f(u)[v].c,l["lightD"+v]=u=>f(u)[v].d,d+="uniform vec4 lightC"+v+", lightD"+v+`;
`,h+="pic += pictureLight(lightC"+v+", lightD"+v+`, v_pos, N);
`;return e({frag:`
    precision highp float;

    uniform float yScale;
    uniform float mirrorOn;
    uniform float night;   // 0 by day, 1 at night
    uniform float time;
    ${j0().lanternGLSL()}

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

    ${n6()}

    ${r6()}

    ${a6()}

    ${s6()}

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
        step(abs(v_pos.z - ${Aa(la.hallEnd)}), 0.02) * step(0.5, -N.z) +
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
                 + exp(-pow((v_pos.z - ${Aa((la.z0+la.z1)/2)}) / 1.3, 2.0)) * step(14.0, v_pos.x);
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
      ${h}

      // Corridor glow and the end wall light
      light += (1.0 - smoothstep(7.0, 35.0, abs(v_pos.z - 29.0))) * 0.04;
      light += (1.0 - smoothstep(2.0, 16.0, abs(v_pos.z - ${Aa(la.hallEnd-1.6)}))) * 0.09 * (1.0 - smoothstep(14.5, 18.0, v_pos.x));

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
          float through = doorLight(v_pos, vec3(${i6}));
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
        if (v_pos.x < 14.0) wallD = min(wallD, ${Aa(la.hallEnd)} - v_pos.z);
        if (v_pos.x < 14.0 && (v_pos.z < ${Aa(la.z0)} || v_pos.z > ${Aa(la.z1)})) wallD = min(wallD, 13.65 - v_pos.x);
        if (v_pos.x > 13.65 && v_pos.z > ${Aa(la.z0-1)}) wallD = min(min(min(wallD, v_pos.z - ${Aa(la.z0)}), ${Aa(la.z1)} - v_pos.z), ${Aa(la.x1)} - v_pos.x);
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
        if (v_pos.z < ${Aa(la.z0+.3)} && v_pos.x > ${Aa(la.x0)}) {
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
    }`,attributes:{position:t.position,normal:t.normal,a_mat:t.mat},uniforms:l,blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"zero"}},elements:new Uint32Array(t.elements),offset:n?e.prop("offset"):0,count:n?e.prop("count"):t.elements.length})}});var M2=ke((MA,_2)=>{"strict mode";var c6="https://api.artic.edu/api/v1/artworks/search",l6=({image_id:e},t)=>`https://www.artic.edu/iiif/2/${e}/full/${t},/0/default.jpg`,f6="?query[bool][must][][term][classification_titles.keyword]=painting&query[bool][must][][term][is_public_domain]=true",h6="&fields=image_id,title,artist_title",u6={low:400,mid:843,high:1686};_2.exports={fetchList:async function(e,t){let o=c6+f6+h6+`&from=${e}&size=${t}`;return(await fetch(o).then(r=>r.json())).data.filter(r=>r.image_id)},fetchImage:async function(e,t){let o=l6(e,u6[t]),n=await fetch(o).then(r=>r.blob());return{title:e.title+" - "+e.artist_title,image:n}}}});var E2=ke((kA,S2)=>{"use strict";var d6=uu(),p6=Ma(),v6=e=>"images/web/"+e.slug+(p6.isPhone?"-1024":"")+".webp";async function k2(e){let t=await fetch(e);if(!t.ok)throw new Error("Could not load "+e);return t.blob()}S2.exports={fetchList:async function(e,t){return d6.slice(e,e+t).map((o,n)=>({...o,image_id:e+n}))},fetchImage:async function(e){let t;try{t=await k2(v6(e))}catch(o){t=await k2("images/"+e.file)}return{title:e.title,image:t}}}});var z2=ke((SA,A2)=>{"strict mode";A2.exports={default:"local",artic:M2(),local:E2()}});var Wu=ke((EA,L2)=>{"strict mode";var Gs=document.createElement("canvas"),ju=Gs.width=Gs.height=1024,Y0=Gs.getContext("2d");Y0.mozImageSmoothingEnabled=!1;Y0.webkitImageSmoothingEnabled=!1;Y0.font="32px Verdana";Y0.textBaseline="bottom";Y0.fillStyle="#aaa";function T2(e,t,o,n){var r=t,a,s=0,i=0,c=t.split(" "),f,l;for(f=l=c.length;e.measureText(r).width>o&&f>1;){f--,r=a="";for(var d=0;d<l;d++)d<f?(r+=c[d],d+1<f&&(r+=" ")):(a+=c[d],d+1<l&&(a+=" "))}return n.push(r),i=e.measureText(r).width,a&&(s=T2(e,a,o,n),s>i&&(i=s)),i}L2.exports={init(e,t,o=ju){var n=[];T2(Y0,t,Math.min(o*ju,ju),n),Y0.clearRect(0,0,Gs.width,Gs.height);for(var r=0;r<n.length;r++)Y0.fillText(n[r],0,Gs.height-(Math.max(n.length,3)-r)*32);return e({data:Gs,min:"mipmap",mipmap:"nice",flipY:!0})},draw(e){return e({frag:`
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
            }`,attributes:{pos:[0,0,1,0,0,1,1,1,0,1,1,0]},uniforms:{model:e.prop("textmodel"),tex:e.prop("text")},count:6,blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}})}}});var O2=ke((AA,R2)=>{"strict mode";var Vu=z2(),m6=new URLSearchParams(window.location.search).get("api"),N2=Vu[m6]||Vu[Vu.default],g6=Wu(),Xu={},Ji=[],x6=2;function y6(e){return(!navigator.connection||navigator.connection.downlink<x6)&&(e=e=="high"?"mid":"low"),e}var b6=Ma(),Zi=document.createElement("canvas");Zi.width=Zi.height=b6.isPhone?1024:2048;var Qu=Zi.getContext("2d");Qu.imageSmoothingEnabled=!0;Qu.imageSmoothingQuality="high";var Yu=!1,w6=e=>[(Ji.pop()||e.texture)([[[200,200,200]]]),t=>(Ji.pop()||e.texture)([[[0,0,0,0]]]),1];async function Ku(e,t,o){Yu===!1&&(Yu=e.hasExtension("EXT_texture_filter_anisotropic")?e._gl.getParameter(e._gl.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0);let n,r;try{let a=await N2.fetchImage(t,y6(o));r=a.title,n=await createImageBitmap(a.image),Qu.drawImage(n,0,0,Zi.width,Zi.height)}catch(a){return console.error(a),o=="high"?await Ku(e,t,"low"):w6(e)}return[(Ji.pop()||e.texture)({data:Zi,min:"mipmap",mipmap:"nice",aniso:Yu,flipY:!0}),a=>g6.init(Ji.pop()||e.texture,r,a),n.width/n.height]}R2.exports={fetch:(e,t=10,o="low",n,r)=>{let a=Object.keys(Xu).length;N2.fetchList(a,t).then(s=>{t=s.length,s.map(i=>{if(Xu[i.image_id]){--t===0&&r();return}Xu[i.image_id]=i,Ku(e,i,o).then(([c,f,l])=>{n({...i,tex:c,textGen:f,aspect:l}),--t===0&&r()})})})},load:(e,t,o="low")=>{t.tex||t.loading||(t.loading=!0,Ku(e,t,o).then(([n,r])=>{t.loading=!1,t.tex=n,t.text=r(t.width)}))},unload:e=>{e.tex&&(Ji.push(e.tex),e.tex=void 0),e.text&&(Ji.push(e.text),e.text=void 0)}}});var P2=ke((zA,C2)=>{C2.exports=_6;function _6(){var e=new Float32Array(16);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var $2=ke((TA,I2)=>{I2.exports=M6;function M6(e){var t=new Float32Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}});var q2=ke((LA,F2)=>{F2.exports=k6;function k6(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}});var Zu=ke((NA,D2)=>{D2.exports=S6;function S6(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var H2=ke((RA,G2)=>{G2.exports=E6;function E6(e,t){if(e===t){var o=t[1],n=t[2],r=t[3],a=t[6],s=t[7],i=t[11];e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=o,e[6]=t[9],e[7]=t[13],e[8]=n,e[9]=a,e[11]=t[14],e[12]=r,e[13]=s,e[14]=i}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15];return e}});var B2=ke((OA,U2)=>{U2.exports=A6;function A6(e,t){var o=t[0],n=t[1],r=t[2],a=t[3],s=t[4],i=t[5],c=t[6],f=t[7],l=t[8],d=t[9],h=t[10],v=t[11],u=t[12],p=t[13],m=t[14],g=t[15],y=o*i-n*s,b=o*c-r*s,w=o*f-a*s,M=n*c-r*i,k=n*f-a*i,z=r*f-a*c,P=l*p-d*u,R=l*m-h*u,U=l*g-v*u,D=d*m-h*p,Y=d*g-v*p,I=h*g-v*m,j=y*I-b*Y+w*D+M*U-k*R+z*P;return j?(j=1/j,e[0]=(i*I-c*Y+f*D)*j,e[1]=(r*Y-n*I-a*D)*j,e[2]=(p*z-m*k+g*M)*j,e[3]=(h*k-d*z-v*M)*j,e[4]=(c*U-s*I-f*R)*j,e[5]=(o*I-r*U+a*R)*j,e[6]=(m*w-u*z-g*b)*j,e[7]=(l*z-h*w+v*b)*j,e[8]=(s*Y-i*U+f*P)*j,e[9]=(n*U-o*Y-a*P)*j,e[10]=(u*k-p*w+g*y)*j,e[11]=(d*w-l*k-v*y)*j,e[12]=(i*R-s*D-c*P)*j,e[13]=(o*D-n*R+r*P)*j,e[14]=(p*b-u*M-m*y)*j,e[15]=(l*M-d*b+h*y)*j,e):null}});var W2=ke((CA,j2)=>{j2.exports=z6;function z6(e,t){var o=t[0],n=t[1],r=t[2],a=t[3],s=t[4],i=t[5],c=t[6],f=t[7],l=t[8],d=t[9],h=t[10],v=t[11],u=t[12],p=t[13],m=t[14],g=t[15];return e[0]=i*(h*g-v*m)-d*(c*g-f*m)+p*(c*v-f*h),e[1]=-(n*(h*g-v*m)-d*(r*g-a*m)+p*(r*v-a*h)),e[2]=n*(c*g-f*m)-i*(r*g-a*m)+p*(r*f-a*c),e[3]=-(n*(c*v-f*h)-i*(r*v-a*h)+d*(r*f-a*c)),e[4]=-(s*(h*g-v*m)-l*(c*g-f*m)+u*(c*v-f*h)),e[5]=o*(h*g-v*m)-l*(r*g-a*m)+u*(r*v-a*h),e[6]=-(o*(c*g-f*m)-s*(r*g-a*m)+u*(r*f-a*c)),e[7]=o*(c*v-f*h)-s*(r*v-a*h)+l*(r*f-a*c),e[8]=s*(d*g-v*p)-l*(i*g-f*p)+u*(i*v-f*d),e[9]=-(o*(d*g-v*p)-l*(n*g-a*p)+u*(n*v-a*d)),e[10]=o*(i*g-f*p)-s*(n*g-a*p)+u*(n*f-a*i),e[11]=-(o*(i*v-f*d)-s*(n*v-a*d)+l*(n*f-a*i)),e[12]=-(s*(d*m-h*p)-l*(i*m-c*p)+u*(i*h-c*d)),e[13]=o*(d*m-h*p)-l*(n*m-r*p)+u*(n*h-r*d),e[14]=-(o*(i*m-c*p)-s*(n*m-r*p)+u*(n*c-r*i)),e[15]=o*(i*h-c*d)-s*(n*h-r*d)+l*(n*c-r*i),e}});var X2=ke((PA,V2)=>{V2.exports=T6;function T6(e){var t=e[0],o=e[1],n=e[2],r=e[3],a=e[4],s=e[5],i=e[6],c=e[7],f=e[8],l=e[9],d=e[10],h=e[11],v=e[12],u=e[13],p=e[14],m=e[15],g=t*s-o*a,y=t*i-n*a,b=t*c-r*a,w=o*i-n*s,M=o*c-r*s,k=n*c-r*i,z=f*u-l*v,P=f*p-d*v,R=f*m-h*v,U=l*p-d*u,D=l*m-h*u,Y=d*m-h*p;return g*Y-y*D+b*U+w*R-M*P+k*z}});var K2=ke((IA,Y2)=>{Y2.exports=L6;function L6(e,t,o){var n=t[0],r=t[1],a=t[2],s=t[3],i=t[4],c=t[5],f=t[6],l=t[7],d=t[8],h=t[9],v=t[10],u=t[11],p=t[12],m=t[13],g=t[14],y=t[15],b=o[0],w=o[1],M=o[2],k=o[3];return e[0]=b*n+w*i+M*d+k*p,e[1]=b*r+w*c+M*h+k*m,e[2]=b*a+w*f+M*v+k*g,e[3]=b*s+w*l+M*u+k*y,b=o[4],w=o[5],M=o[6],k=o[7],e[4]=b*n+w*i+M*d+k*p,e[5]=b*r+w*c+M*h+k*m,e[6]=b*a+w*f+M*v+k*g,e[7]=b*s+w*l+M*u+k*y,b=o[8],w=o[9],M=o[10],k=o[11],e[8]=b*n+w*i+M*d+k*p,e[9]=b*r+w*c+M*h+k*m,e[10]=b*a+w*f+M*v+k*g,e[11]=b*s+w*l+M*u+k*y,b=o[12],w=o[13],M=o[14],k=o[15],e[12]=b*n+w*i+M*d+k*p,e[13]=b*r+w*c+M*h+k*m,e[14]=b*a+w*f+M*v+k*g,e[15]=b*s+w*l+M*u+k*y,e}});var Z2=ke(($A,Q2)=>{Q2.exports=N6;function N6(e,t,o){var n=o[0],r=o[1],a=o[2],s,i,c,f,l,d,h,v,u,p,m,g;return t===e?(e[12]=t[0]*n+t[4]*r+t[8]*a+t[12],e[13]=t[1]*n+t[5]*r+t[9]*a+t[13],e[14]=t[2]*n+t[6]*r+t[10]*a+t[14],e[15]=t[3]*n+t[7]*r+t[11]*a+t[15]):(s=t[0],i=t[1],c=t[2],f=t[3],l=t[4],d=t[5],h=t[6],v=t[7],u=t[8],p=t[9],m=t[10],g=t[11],e[0]=s,e[1]=i,e[2]=c,e[3]=f,e[4]=l,e[5]=d,e[6]=h,e[7]=v,e[8]=u,e[9]=p,e[10]=m,e[11]=g,e[12]=s*n+l*r+u*a+t[12],e[13]=i*n+d*r+p*a+t[13],e[14]=c*n+h*r+m*a+t[14],e[15]=f*n+v*r+g*a+t[15]),e}});var eg=ke((FA,J2)=>{J2.exports=R6;function R6(e,t,o){var n=o[0],r=o[1],a=o[2];return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e[4]=t[4]*r,e[5]=t[5]*r,e[6]=t[6]*r,e[7]=t[7]*r,e[8]=t[8]*a,e[9]=t[9]*a,e[10]=t[10]*a,e[11]=t[11]*a,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}});var og=ke((qA,tg)=>{tg.exports=O6;function O6(e,t,o,n){var r=n[0],a=n[1],s=n[2],i=Math.sqrt(r*r+a*a+s*s),c,f,l,d,h,v,u,p,m,g,y,b,w,M,k,z,P,R,U,D,Y,I,j,ue;return Math.abs(i)<1e-6?null:(i=1/i,r*=i,a*=i,s*=i,c=Math.sin(o),f=Math.cos(o),l=1-f,d=t[0],h=t[1],v=t[2],u=t[3],p=t[4],m=t[5],g=t[6],y=t[7],b=t[8],w=t[9],M=t[10],k=t[11],z=r*r*l+f,P=a*r*l+s*c,R=s*r*l-a*c,U=r*a*l-s*c,D=a*a*l+f,Y=s*a*l+r*c,I=r*s*l+a*c,j=a*s*l-r*c,ue=s*s*l+f,e[0]=d*z+p*P+b*R,e[1]=h*z+m*P+w*R,e[2]=v*z+g*P+M*R,e[3]=u*z+y*P+k*R,e[4]=d*U+p*D+b*Y,e[5]=h*U+m*D+w*Y,e[6]=v*U+g*D+M*Y,e[7]=u*U+y*D+k*Y,e[8]=d*I+p*j+b*ue,e[9]=h*I+m*j+w*ue,e[10]=v*I+g*j+M*ue,e[11]=u*I+y*j+k*ue,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)}});var rg=ke((DA,ng)=>{ng.exports=C6;function C6(e,t,o){var n=Math.sin(o),r=Math.cos(o),a=t[4],s=t[5],i=t[6],c=t[7],f=t[8],l=t[9],d=t[10],h=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=a*r+f*n,e[5]=s*r+l*n,e[6]=i*r+d*n,e[7]=c*r+h*n,e[8]=f*r-a*n,e[9]=l*r-s*n,e[10]=d*r-i*n,e[11]=h*r-c*n,e}});var sg=ke((GA,ag)=>{ag.exports=P6;function P6(e,t,o){var n=Math.sin(o),r=Math.cos(o),a=t[0],s=t[1],i=t[2],c=t[3],f=t[8],l=t[9],d=t[10],h=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*r-f*n,e[1]=s*r-l*n,e[2]=i*r-d*n,e[3]=c*r-h*n,e[8]=a*n+f*r,e[9]=s*n+l*r,e[10]=i*n+d*r,e[11]=c*n+h*r,e}});var cg=ke((HA,ig)=>{ig.exports=I6;function I6(e,t,o){var n=Math.sin(o),r=Math.cos(o),a=t[0],s=t[1],i=t[2],c=t[3],f=t[4],l=t[5],d=t[6],h=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*r+f*n,e[1]=s*r+l*n,e[2]=i*r+d*n,e[3]=c*r+h*n,e[4]=f*r-a*n,e[5]=l*r-s*n,e[6]=d*r-i*n,e[7]=h*r-c*n,e}});var fg=ke((UA,lg)=>{lg.exports=$6;function $6(e,t,o){var n,r,a,s=o[0],i=o[1],c=o[2],f=Math.sqrt(s*s+i*i+c*c);return Math.abs(f)<1e-6?null:(f=1/f,s*=f,i*=f,c*=f,n=Math.sin(t),r=Math.cos(t),a=1-r,e[0]=s*s*a+r,e[1]=i*s*a+c*n,e[2]=c*s*a-i*n,e[3]=0,e[4]=s*i*a-c*n,e[5]=i*i*a+r,e[6]=c*i*a+s*n,e[7]=0,e[8]=s*c*a+i*n,e[9]=i*c*a-s*n,e[10]=c*c*a+r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e)}});var ug=ke((BA,hg)=>{hg.exports=F6;function F6(e,t,o){var n=t[0],r=t[1],a=t[2],s=t[3],i=n+n,c=r+r,f=a+a,l=n*i,d=n*c,h=n*f,v=r*c,u=r*f,p=a*f,m=s*i,g=s*c,y=s*f;return e[0]=1-(v+p),e[1]=d+y,e[2]=h-g,e[3]=0,e[4]=d-y,e[5]=1-(l+p),e[6]=u+m,e[7]=0,e[8]=h+g,e[9]=u-m,e[10]=1-(l+v),e[11]=0,e[12]=o[0],e[13]=o[1],e[14]=o[2],e[15]=1,e}});var pg=ke((jA,dg)=>{dg.exports=q6;function q6(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=t[1],e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=t[2],e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var mg=ke((WA,vg)=>{vg.exports=D6;function D6(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=t[0],e[13]=t[1],e[14]=t[2],e[15]=1,e}});var xg=ke((VA,gg)=>{gg.exports=G6;function G6(e,t){var o=Math.sin(t),n=Math.cos(t);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=n,e[6]=o,e[7]=0,e[8]=0,e[9]=-o,e[10]=n,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var bg=ke((XA,yg)=>{yg.exports=H6;function H6(e,t){var o=Math.sin(t),n=Math.cos(t);return e[0]=n,e[1]=0,e[2]=-o,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=o,e[9]=0,e[10]=n,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var _g=ke((YA,wg)=>{wg.exports=U6;function U6(e,t){var o=Math.sin(t),n=Math.cos(t);return e[0]=n,e[1]=o,e[2]=0,e[3]=0,e[4]=-o,e[5]=n,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var kg=ke((KA,Mg)=>{Mg.exports=B6;function B6(e,t){var o=t[0],n=t[1],r=t[2],a=t[3],s=o+o,i=n+n,c=r+r,f=o*s,l=n*s,d=n*i,h=r*s,v=r*i,u=r*c,p=a*s,m=a*i,g=a*c;return e[0]=1-d-u,e[1]=l+g,e[2]=h-m,e[3]=0,e[4]=l-g,e[5]=1-f-u,e[6]=v+p,e[7]=0,e[8]=h+m,e[9]=v-p,e[10]=1-f-d,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var Eg=ke((QA,Sg)=>{Sg.exports=j6;function j6(e,t,o,n,r,a,s){var i=1/(o-t),c=1/(r-n),f=1/(a-s);return e[0]=a*2*i,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a*2*c,e[6]=0,e[7]=0,e[8]=(o+t)*i,e[9]=(r+n)*c,e[10]=(s+a)*f,e[11]=-1,e[12]=0,e[13]=0,e[14]=s*a*2*f,e[15]=0,e}});var zg=ke((ZA,Ag)=>{Ag.exports=W6;function W6(e,t,o,n,r){var a=1/Math.tan(t/2),s=1/(n-r);return e[0]=a/o,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=(r+n)*s,e[11]=-1,e[12]=0,e[13]=0,e[14]=2*r*n*s,e[15]=0,e}});var Lg=ke((JA,Tg)=>{Tg.exports=V6;function V6(e,t,o,n){var r=Math.tan(t.upDegrees*Math.PI/180),a=Math.tan(t.downDegrees*Math.PI/180),s=Math.tan(t.leftDegrees*Math.PI/180),i=Math.tan(t.rightDegrees*Math.PI/180),c=2/(s+i),f=2/(r+a);return e[0]=c,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=f,e[6]=0,e[7]=0,e[8]=-((s-i)*c*.5),e[9]=(r-a)*f*.5,e[10]=n/(o-n),e[11]=-1,e[12]=0,e[13]=0,e[14]=n*o/(o-n),e[15]=0,e}});var Rg=ke((ez,Ng)=>{Ng.exports=X6;function X6(e,t,o,n,r,a,s){var i=1/(t-o),c=1/(n-r),f=1/(a-s);return e[0]=-2*i,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*c,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*f,e[11]=0,e[12]=(t+o)*i,e[13]=(r+n)*c,e[14]=(s+a)*f,e[15]=1,e}});var Cg=ke((tz,Og)=>{var Y6=Zu();Og.exports=K6;function K6(e,t,o,n){var r,a,s,i,c,f,l,d,h,v,u=t[0],p=t[1],m=t[2],g=n[0],y=n[1],b=n[2],w=o[0],M=o[1],k=o[2];return Math.abs(u-w)<1e-6&&Math.abs(p-M)<1e-6&&Math.abs(m-k)<1e-6?Y6(e):(l=u-w,d=p-M,h=m-k,v=1/Math.sqrt(l*l+d*d+h*h),l*=v,d*=v,h*=v,r=y*h-b*d,a=b*l-g*h,s=g*d-y*l,v=Math.sqrt(r*r+a*a+s*s),v?(v=1/v,r*=v,a*=v,s*=v):(r=0,a=0,s=0),i=d*s-h*a,c=h*r-l*s,f=l*a-d*r,v=Math.sqrt(i*i+c*c+f*f),v?(v=1/v,i*=v,c*=v,f*=v):(i=0,c=0,f=0),e[0]=r,e[1]=i,e[2]=l,e[3]=0,e[4]=a,e[5]=c,e[6]=d,e[7]=0,e[8]=s,e[9]=f,e[10]=h,e[11]=0,e[12]=-(r*u+a*p+s*m),e[13]=-(i*u+c*p+f*m),e[14]=-(l*u+d*p+h*m),e[15]=1,e)}});var Ig=ke((oz,Pg)=>{Pg.exports=Q6;function Q6(e){return"mat4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+", "+e[6]+", "+e[7]+", "+e[8]+", "+e[9]+", "+e[10]+", "+e[11]+", "+e[12]+", "+e[13]+", "+e[14]+", "+e[15]+")"}});var ec=ke((nz,$g)=>{$g.exports={create:P2(),clone:$2(),copy:q2(),identity:Zu(),transpose:H2(),invert:B2(),adjoint:W2(),determinant:X2(),multiply:K2(),translate:Z2(),scale:eg(),rotate:og(),rotateX:rg(),rotateY:sg(),rotateZ:cg(),fromRotation:fg(),fromRotationTranslation:ug(),fromScaling:pg(),fromTranslation:mg(),fromXRotation:xg(),fromYRotation:bg(),fromZRotation:_g(),fromQuat:kg(),frustum:Eg(),perspective:zg(),perspectiveFromFieldOfView:Lg(),ortho:Rg(),lookAt:Cg(),str:Ig()}});var Dg=ke((rz,qg)=>{"use strict";var Fg=O2(),Sn=ec(),Hs=br(),Z6=3e3,mh="high",Ju,bl=.36,wl=13.64,tc=Hs.C.hallEnd-.01,_l=Hs.C.z0+.01,J6=.356,eM=13.644,tM=Hs.C.hallEnd-.006,oM=Hs.C.z0+.006,nM=.12,xh=4,oc=e=>wr[e]&&wr[e].cy||xh,ed=.26,rM=5.6,aM=7,wr=[{side:"right",z:34.5},{side:"right",z:23.5},{side:"left",z:23.5},{side:"end",z:tc},{side:"left",z:34.5},{side:"right",z:14.6},{side:"left",z:14.6,maxW:3.7,maxH:3.7},{side:"corridor",x:Hs.PAINTING_X[0],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:Hs.PAINTING_X[1],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:Hs.PAINTING_X[2],cy:3,maxW:3.3,maxH:3.73}];function sM(e,t){let o=t&&t.maxH||rM,n=t&&t.maxW||aM,r=Math.min(o,n/e);return{width:r*e,height:r}}function iM(e,t,o){let n=wr[o],r=[],a=oc(o)-t/2;return n.side==="left"?(Sn.fromTranslation(r,[bl,a,n.z+e/2]),Sn.rotateY(r,r,Math.PI/2)):n.side==="right"?(Sn.fromTranslation(r,[wl,a,n.z-e/2]),Sn.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?Sn.fromTranslation(r,[n.x-e/2,a,_l]):(Sn.fromTranslation(r,[7+e/2,a,tc]),Sn.rotateY(r,r,Math.PI)),Sn.scale(r,r,[e,t,nM]),r}function cM(e,t,o){let n=wr[o],r=[],a=oc(o)-t/2;return n.side==="left"?(Sn.fromTranslation(r,[bl,a,n.z+e/2]),Sn.rotateY(r,r,Math.PI/2)):n.side==="right"?(Sn.fromTranslation(r,[wl,a,n.z-e/2]),Sn.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?Sn.fromTranslation(r,[n.x-e/2,a,_l]):(Sn.fromTranslation(r,[7+e/2,a,tc]),Sn.rotateY(r,r,Math.PI)),r}function lM(e,t,o){let n=wr[o],r=[],a=oc(o)-t/2-ed-.38;return n.side==="left"?(Sn.fromTranslation(r,[J6,a,n.z+e/2]),Sn.rotateY(r,r,Math.PI/2)):n.side==="right"?(Sn.fromTranslation(r,[eM,a,n.z-e/2]),Sn.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?Sn.fromTranslation(r,[n.x-e/2,a,oM]):(Sn.fromTranslation(r,[7+e/2,a,tM]),Sn.rotateY(r,r,Math.PI)),Sn.scale(r,r,[2,2,2]),r}function fM(e,t,o){let n=wr[o],r=oc(o)-t/2-ed-.38;return n.side==="left"?[bl+.55,r,n.z]:n.side==="right"?[wl-.55,r,n.z]:n.side==="corridor"?[n.x,r,_l+.55]:[7,r,tc-.55]}var yl=.42;function gh(e,t,o,n,r,a){return[t[0]*n,t[1]*n,t[2]*n,0,0,r,0,0,o[0]*a,o[1]*a,o[2]*a,0,e[0],e[1],e[2],1]}function hM(e,t,o){let n=wr[o],r,a,s;n.side==="left"?(r=[bl,n.z],a=[0,0,1],s=[1,0,0]):n.side==="right"?(r=[wl,n.z],a=[0,0,1],s=[-1,0,0]):n.side==="corridor"?(r=[n.x,_l],a=[1,0,0],s=[0,0,1]):(r=[7,tc],a=[1,0,0],s=[0,0,-1]);let i=oc(o)+t/2+ed+.3,c=Math.min(2.4,Math.max(.9,e*.55)),f=(v,u)=>[r[0]+s[0]*v,u,r[1]+s[2]*v],l=[.075,.062,.05],d=[{fixmodel:gh(f(.014,i),a,s,.1,.13,.028),fixcol:l,fixglow:0},{fixmodel:gh(f(yl/2,i),a,s,.02,.02,yl),fixcol:l,fixglow:0},{fixmodel:gh(f(yl,i),a,s,c,.034,.05),fixcol:l,fixglow:0},{fixmodel:gh(f(yl-.012,i-.019),a,s,c*.94,.006,.028),fixcol:l,fixglow:1}],h=f(yl,i-.02);return{fixtures:d,light:{c:[h[0],h[1],h[2],1],d:[a[0],a[1],a[2],c/2]}}}qg.exports=(e,t)=>{let o=[],n=[],r=a=>{let s=a.image_id;if(!wr[s])return;let{width:i,height:c}=sM(a.aspect,wr[s]),f=hM(i,c,s);t&&t.lights&&s<t.lights.length&&(t.lights[s]=f.light),o.push({...a,fixtures:f.fixtures,side:wr[s].side,model:iM(i,c,s),framemodel:cM(i,c,s),framesize:[i,c],textmodel:lM(i,c,s),text:a.textGen(i),width:i,height:c,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:fM(i,c,s),paintingPosition:wr[s].side==="left"?[bl+.05,xh,wr[s].z]:wr[s].side==="right"?[wl-.05,xh,wr[s].z]:wr[s].side==="corridor"?[wr[s].x,oc(s),_l+.05]:[7,xh,tc-.05],textGen:null})};return Fg.fetch(e,wr.length,mh,r,()=>{}),{update:()=>{n=o,n.forEach(a=>{Fg.load(e,a,mh)}),mh="low",Ju&&clearTimeout(Ju),Ju=setTimeout(()=>{mh="high"},Z6)},batch:()=>n,interactables:()=>n.map((a,s)=>({side:a.side,width:a.width,index:s,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:a.plaquePosition,paintingPosition:a.paintingPosition}))}}});var Bg=ke((az,Ug)=>{"use strict";var uM=Wu(),Gg=Ma(),Hg=[[-.02,.125],[-.02,.15],[.035,.15],[.07,.12],[.07,.17],[.185,.17],[.185,.19],[.215,.19],[.26,.03]];function dM(){let e=[[0,0],[1,0],[1,1],[0,1]],t=[];Hg.forEach(([n,r])=>{e.forEach(([a,s])=>t.push([a,s,n,r]))});let o=[];for(let n=0;n<Hg.length-1;n++)for(let r=0;r<4;r++){let a=(r+1)%4,s=n*4+r,i=n*4+a,c=(n+1)*4+r,f=(n+1)*4+a;o.push(s,i,f,s,f,c)}return{verts:t,elems:o}}var pM=`#extension GL_OES_standard_derivatives : enable
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
}`,vM=`
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
}`;Ug.exports=e=>{let t=uM.draw(e),o=e({frag:`#extension GL_OES_standard_derivatives : enable
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
	${j0().lanternGLSL()}
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
	}`,attributes:{pos:[0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,-.1,-.1,0,1.1,-.1,0,-.1,1.1,0,1.1,1.1,0]},elements:[0,1,2,3,2,1,1,0,5,4,5,0,3,1,7,5,7,1,0,2,4,6,4,2,8,9,4,5,4,9,9,11,5,7,5,11,11,10,7,6,7,10,10,8,6,4,6,8],uniforms:{model:e.prop("model"),tex:e.prop("tex"),psize:e.prop("framesize"),canvasCm:(s,i)=>i.size?[i.size[1],i.size[0]]:[61,91],texel:1/(Gg.isPhone?1024:2048),detail:()=>Gg.post===0?0:1},blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}}),n=dM(),r=e({frag:pM,vert:vM,attributes:{prof:n.verts},elements:n.elems,uniforms:{model:e.prop("framemodel"),fsize:e.prop("framesize")},cull:{enable:!1},blend:{enable:!1}}),a=e({frag:`#extension GL_OES_standard_derivatives : enable
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
}`,attributes:{pos:[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5],[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]]},elements:[0,1,2,0,2,3,4,5,6,4,6,7,0,1,5,0,5,4,2,3,7,2,7,6,0,3,7,0,7,4,1,2,6,1,6,5],uniforms:{model:e.prop("fixmodel"),fixcol:e.prop("fixcol"),fixglow:e.prop("fixglow")},cull:{enable:!1},blend:{enable:!1}});return function(s){o(s),r(s);let i=[];s.forEach(c=>{c.fixtures&&i.push(...c.fixtures)}),i.length&&a(i),t(s)}}});var J0=ke((iz,Ta)=>{"use strict";var on=Math.PI,pe=e=>(+e).toFixed(4),gt=[-90,0,0],We=16,vo=22,go=7.8,fa=11.6,mr=.55,ha=(fa-go)/(We/2),it={c:[3.6,8.6,13.6,18.6],hw:1.3,sill:.62,spring:4.9};it.top=it.spring+it.hw;var Dr={cols:[-.65,0,.65],rowH:.71,w:.055,ring:.78},Vo={rafter:vo/12,rafterW:.1,purlin:1,purlinW:.07},Al=[5.5,11,16.5],_e={x0:We/2-1.9,x1:We/2+1.9,z0:5.6,z1:16.6,curb:.5,top:.36},fn={x:We/2,z:14.9,plinth:.86,height:2.05,yaw:on+.35,file:"res/nymph.bin"},i0=(()=>{let e=[-.68,.6,-.36],t=Math.hypot(e[0],e[1],e[2]);return e.map(o=>o/t)})(),td=e=>[e[0]+gt[0],e[1]+gt[1],e[2]+gt[2]];function Yg(){let e=it.c.map(o=>`
		{
			float dz = q.z - ${pe(o)};
			float inside = smoothstep(-b, b, ${pe(it.hw)} - abs(dz)) * smoothstep(-b, b, q.y - ${pe(it.sill)});
			float arch = smoothstep(-b, b, ${pe(it.hw)} - length(vec2(dz, max(q.y - ${pe(it.spring)}, 0.0))));
			o = max(o, inside * arch);
		}`).join(""),t=it.c.map(o=>`
		{
			float dz = q.z - ${pe(o)};
			if (abs(dz) < ${pe(it.hw+.2)}) {
				${Dr.cols.map(n=>`bar = max(bar, 1.0 - smoothstep(${pe(Dr.w*.5)} - b, ${pe(Dr.w*.5)} + b, abs(dz - ${pe(n)})));`).join(`
				`)}
				float ry = q.y - ${pe(it.sill)};
				float tr = abs(ry - ${pe(Dr.rowH)} * floor(ry / ${pe(Dr.rowH)} + 0.5));
				if (q.y < ${pe(it.spring+.02)}) bar = max(bar, 1.0 - smoothstep(${pe(Dr.w*.5)} - b, ${pe(Dr.w*.5)} + b, tr));
				float rr = length(vec2(dz, q.y - ${pe(it.spring)}));
				if (q.y > ${pe(it.spring)}) bar = max(bar, 1.0 - smoothstep(${pe(Dr.w*.5)} - b, ${pe(Dr.w*.5)} + b, abs(rr - ${pe(Dr.ring)})));
				// the frame round the opening
				bar = max(bar, 1.0 - smoothstep(0.0, b + 0.03, ${pe(it.hw)} - max(abs(dz), q.y > ${pe(it.spring)} ? rr : 0.0)));
			}
		}`).join("");return`
	const vec3 STUDIO_SUN = vec3(${pe(i0[0])}, ${pe(i0[1])}, ${pe(i0[2])});

	// how open a window is at (y, z) on the wall's face; b softens edges
	float studioWinOpen(vec3 q, float b) {
		float o = 0.0;
		${e}
		return o;
	}
	float studioWinBars(vec3 q, float b) {
		float bar = 0.0;
		${t}
		return bar;
	}

	// the leaded pattern in each pane of the roof: q is the pane's own
	// coordinates (centre 0, half size ${pe(Vo.purlin/2)} x ${pe(Vo.rafter/2)}),
	// b the softness. Returns how much light gets through.
	float studioRoofPattern(vec2 q, float b) {
		vec2 hs = vec2(${pe(Vo.purlin/2)}, ${pe(Vo.rafter/2)});
		vec2 a = abs(q);
		float w = 0.022;
		float d = abs(length(q * vec2(1.0, 0.62)) - 0.36);               // the ring
		d = min(d, abs(dot(a, hs.yx) - hs.x * hs.y) / length(hs));       // the diamond
		d = min(d, abs(length(q) - 0.11));                               // the rondel
		d = min(d, abs(length(a - hs) - 0.30));                          // quarter rings
		d = min(d, abs(length(a - vec2(0.0, hs.y)) - 0.16));             // and at the ends
		float lead = 1.0 - smoothstep(w - b, w + b, d);
		// textured, faintly frosted glass in the rondel and the ring's petals
		float frost = smoothstep(0.11 + b, 0.11 - b, length(q)) * 0.35
			+ smoothstep(0.36 + b, 0.36 - b, length(q * vec2(1.0, 0.62))) * smoothstep(0.1, 0.16, length(q)) * 0.12;
		return (1.0 - lead) * (1.0 - frost);
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

	float studioSun(vec3 pw) {
		vec3 p = pw - vec3(${pe(gt[0])}, ${pe(gt[1])}, ${pe(gt[2])});
		vec3 S = STUDIO_SUN;
		// where the ray towards the sun leaves through the left wall
		float tw = (0.0 - p.x) / S.x;
		// and where it rises past the eaves
		float te = (${pe(go)} - p.y) / S.y;
		if (tw > 0.0 && tw < te) {
			vec3 h0 = p + S * tw;
			if (h0.z < 0.0 || h0.z > ${pe(vo)}) return 0.0;
			vec3 h1 = p + S * ((${pe(-mr)} - p.x) / S.x);
			vec3 hm = p + S * ((${pe(-mr*.5)} - p.x) / S.x);
			float b = 0.006 + 0.0075 * tw;
			float open = min(studioWinOpen(h0, b), studioWinOpen(h1, b));
			if (open <= 0.0) return 0.0;
			float bar = studioWinBars(hm, b);
			return open * (1.0 - bar) * 0.92;
		}
		// up through the roof: the trusses' tie beams first
		vec3 he = p + S * max(te, 0.0);
		float vis = 1.0;
		if (p.y < ${pe(go)}) {
			if (he.z < 0.0 || he.z > ${pe(vo)} || he.x < 0.0 || he.x > ${pe(We)}) return 0.0;
			float be = 0.01 + 0.008 * te;
			${Al.map(o=>`vis *= smoothstep(0.08 - be, 0.08 + be, abs(he.z - ${pe(o)}));`).join(`
			`)}
			// the bougainvillea along the tie beams
			${ac.filter(o=>o[0]==="truss").map(([o,n,r])=>`vis *= 1.0 - studioVineShade(he.z - ${pe(n)}, he.x, he.z, ${pe(r)});`).join(`
			`)}
		}
		// then the glass: the two slopes of the roof
		float tl = (${pe(ha)} * p.x - p.y + ${pe(go)}) / (S.y - ${pe(ha)} * S.x);
		float tr = (${pe(ha)} * (${pe(We)} - p.x) - p.y + ${pe(go)}) / (S.y + ${pe(ha)} * S.x);
		float t = 1e9;
		vec3 h = vec3(0.0);
		vec3 hl = p + S * tl, hr = p + S * tr;
		if (tl > 0.0 && hl.x >= -0.01 && hl.x <= ${pe(We/2+.01)}) { t = tl; h = hl; }
		if (tr > 0.0 && tr < t && hr.x >= ${pe(We/2-.01)} && hr.x <= ${pe(We+.01)}) { t = tr; h = hr; }
		if (t > 1e8) return 0.0;
		if (h.z < 0.0 || h.z > ${pe(vo)}) return 0.0;
		float b = 0.008 + 0.0075 * t;
		float rz = abs(h.z - ${pe(Vo.rafter)} * floor(h.z / ${pe(Vo.rafter)} + 0.5));
		float bar = 1.0 - smoothstep(${pe(Vo.rafterW*.5)} - b, ${pe(Vo.rafterW*.5)} + b, rz);
		float ux = h.x < ${pe(We/2)} ? h.x : ${pe(We)} - h.x;
		float rx = abs(ux - ${pe(Vo.purlin)} * floor(ux / ${pe(Vo.purlin)} + 0.5));
		bar = max(bar, 1.0 - smoothstep(${pe(Vo.purlinW*.5)} - b, ${pe(Vo.purlinW*.5)} + b, rx));
		// the ridge beam
		bar = max(bar, 1.0 - smoothstep(0.14 - b, 0.14 + b, abs(h.x - ${pe(We/2)})));
		// the leaded pattern in the panes (its shadow is crisper than
		// the sun's disc would allow, for the drawing to read)
		vec2 pq = vec2(ux - ${pe(Vo.purlin)} * floor(ux / ${pe(Vo.purlin)}) - ${pe(Vo.purlin/2)}, h.z - ${pe(Vo.rafter)} * floor(h.z / ${pe(Vo.rafter)}) - ${pe(Vo.rafter/2)});
		float pat = studioRoofPattern(pq, 0.004 + 0.0035 * t);
		// and along the rafters and the ridge
		${ac.filter(o=>o[0]==="rafter").map(([o,n,r])=>`pat *= 1.0 - studioVineShade(h.z - ${pe(n)}, h.x, h.z, ${pe(r)});`).join(`
		`)}
		pat *= 1.0 - studioVineShade(h.x - ${pe(We/2)}, h.z, h.x, 0.9);
		return vis * (1.0 - bar) * pat * 0.78;
	}`}function sc(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let o=t;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}var ge={FLOOR:0,PLASTER:1,STONE:2,STEEL:3,WATER:4,PAD:5,PETAL:6,STAMEN:7,MARBLE:8,WOOD:9,GESSO:10,PAINT:11,POT:12,SHADE:13,BULB:14,NICHE:15,JAR:16,SOIL:17,BRUSH:18,TRAVERTINE:19,CLOTH:20,WMARBLE:21,REDDOOR:22,REDPANEL:23,DARKWOOD:24,BRASS:25,BRACT:26,KEYHOLE:27};function Kg(){let e={pos:[],nrm:[],kind:[],uv:[],anchor:[],idx:[]};return e.float=null,e.v=(t,o,n,r)=>(e.pos.push(t[0]+gt[0],t[1]+gt[1],t[2]+gt[2]),e.nrm.push(o[0],o[1],o[2]),e.kind.push(n),e.uv.push(r?r[0]:0,r?r[1]:0),e.float?e.anchor.push(e.float[0]+gt[0],e.float[1]+gt[2],e.float[2],1):e.anchor.push(0,0,0,0),e.pos.length/3-1),e.quad=(t,o,n,r,a,s,i)=>{let c=e.v(t,a,s,i&&i[0]),f=e.v(o,a,s,i&&i[1]),l=e.v(n,a,s,i&&i[2]),d=e.v(r,a,s,i&&i[3]);e.idx.push(c,f,l,c,l,d)},e.box=(t,o,n,r,a,s,i,c)=>{let f=c||{};f.top||e.quad([t,a,n],[t,a,s],[r,a,s],[r,a,n],[0,1,0],i,[[t,n],[t,s],[r,s],[r,n]]),f.bottom||e.quad([t,o,n],[r,o,n],[r,o,s],[t,o,s],[0,-1,0],i,[[t,n],[r,n],[r,s],[t,s]]),f.x0||e.quad([t,o,n],[t,o,s],[t,a,s],[t,a,n],[-1,0,0],i,[[n,o],[s,o],[s,a],[n,a]]),f.x1||e.quad([r,o,s],[r,o,n],[r,a,n],[r,a,s],[1,0,0],i,[[s,o],[n,o],[n,a],[s,a]]),f.z0||e.quad([r,o,n],[t,o,n],[t,a,n],[r,a,n],[0,0,-1],i,[[r,o],[t,o],[t,a],[r,a]]),f.z1||e.quad([t,o,s],[r,o,s],[r,a,s],[t,a,s],[0,0,1],i,[[t,o],[r,o],[r,a],[t,a]])},e.tbox=(t,o,n,r,a,s,i,c,f)=>{let l=Math.cos(n),d=Math.sin(n),h=Math.cos(f||0),v=Math.sin(f||0),u=(g,y,b)=>{let w=a+(y-a)*h-b*v*0,M=b+(y-a)*v,k=a+(y-a)*h;return[t+l*g+d*M,k,o-d*g+l*M]},p=g=>{let y=g[1]*h-g[2]*v,b=g[2]*h+g[1]*v;return[l*g[0]+d*b,y,-d*g[0]+l*b]},m=(g,y,b,w,M)=>e.quad(u(...g),u(...y),u(...b),u(...w),p(M),c,[[g[0]+g[2],g[1]],[y[0]+y[2],y[1]],[b[0]+b[2],b[1]],[w[0]+w[2],w[1]]]);m([-r,s,-i],[-r,s,i],[r,s,i],[r,s,-i],[0,1,0]),m([-r,a,-i],[r,a,-i],[r,a,i],[-r,a,i],[0,-1,0]),m([-r,a,-i],[-r,a,i],[-r,s,i],[-r,s,-i],[-1,0,0]),m([r,a,i],[r,a,-i],[r,s,-i],[r,s,i],[1,0,0]),m([r,a,-i],[-r,a,-i],[-r,s,-i],[r,s,-i],[0,0,-1]),m([-r,a,i],[r,a,i],[r,s,i],[-r,s,i],[0,0,1])},e.beam=(t,o,n,r,a)=>{let s=[o[0]-t[0],o[1]-t[1],o[2]-t[2]],i=Math.hypot(...s),c=s.map(u=>u/i),f=a||(Math.abs(c[1])>.9?[1,0,0]:[0,1,0]),l=[c[1]*f[2]-c[2]*f[1],c[2]*f[0]-c[0]*f[2],c[0]*f[1]-c[1]*f[0]],d=Math.hypot(...l);l=l.map(u=>u/d),f=[l[1]*c[2]-l[2]*c[1],l[2]*c[0]-l[0]*c[2],l[0]*c[1]-l[1]*c[0]];let h=(u,p,m)=>[u[0]+l[0]*n*p+f[0]*n*m,u[1]+l[1]*n*p+f[1]*n*m,u[2]+l[2]*n*p+f[2]*n*m],v=[[[1,-1],[1,1],l],[[1,1],[-1,1],f],[[-1,1],[-1,-1],l.map(u=>-u)],[[-1,-1],[1,-1],f.map(u=>-u)]];for(let[u,p,m]of v)e.quad(h(t,...u),h(o,...u),h(o,...p),h(t,...p),m,r,[[0,0],[i,0],[i,1],[0,1]])},e.lathe=(t,o,n,r,a)=>{let s=a||32,i=n.map(([c,f],l)=>{let d=n[Math.max(0,l-1)],h=n[Math.min(n.length-1,l+1)],v=h[0]-d[0],u=h[1]-d[1],p=Math.hypot(v,u)||1,m=u/p,g=-v/p,y=[];for(let b=0;b<=s;b++){let w=b/s*2*on;y.push(e.v([t+Math.cos(w)*c,f,o+Math.sin(w)*c],[Math.cos(w)*m,g,Math.sin(w)*m],r,[b/s*c*2*on,f]))}return y});for(let c=0;c<i.length-1;c++)for(let f=0;f<s;f++){let l=i[c][f],d=i[c][f+1],h=i[c+1][f+1],v=i[c+1][f];e.idx.push(l,v,h,l,h,d)}},e}var rc=e=>Math.abs(e)>=it.hw?null:it.spring+Math.sqrt(it.hw*it.hw-e*e),ac=[["truss",Al[0],3.1],["truss",Al[1],5.4],["truss",Al[2],7.7],["rafter",Vo.rafter*2,1.7],["rafter",Vo.rafter*5,8.5],["rafter",Vo.rafter*8,13.6],["rafter",Vo.rafter*10,17],["ridge",We/2,.9]],wh=(e,t)=>.5*Math.sin(e*1.9+t)+.5*Math.sin(e*.77+t*1.3)>-.25,mM=e=>e<We/2?go+ha*e:go+ha*(We-e);function _h(e,t,o){return e==="truss"?[o,go-.12,t]:e==="rafter"?[o,mM(o)-.2,t]:[t,fa-.32,o]}var Mh=e=>e==="ridge"?[.4,vo-.4]:[.35,We-.35],Zr={w:1.72,spring:2.05,r:2.05,frame:.21,zl:vo-.05,zf:vo-.13};Zr.c=Zr.r-Zr.w/2;var za=(e,t)=>{let o=Zr.r+(t||0),n=Math.abs(e)+Zr.c;return n>=o?Zr.spring:Zr.spring+Math.sqrt(o*o-n*n)};Zr.top=za(0);function gM(e){let t=We/2,{w:o,frame:n,zl:r,zf:a}=Zr,s=o/2,i=s+n,c=.02;for(let k=-i;k<i-1e-6;k+=c){let z=k,P=Math.min(i,k+c),R=(z+P)/2,U=za(z,n),D=za(P,n),Y=0,I=0;Math.abs(R)<s&&(Y=za(z),I=za(P)),Math.abs(R)>=s;{let j=Math.abs(R)<s?Y:0,ue=Math.abs(R)<s?I:0;e.quad([t+P,ue,a],[t+z,j,a],[t+z,U,a],[t+P,D,a],[0,0,-1],ge.DARKWOOD,[[P,ue],[z,j],[z,U],[P,D]])}e.quad([t+z,U,a],[t+z,U,vo],[t+P,D,vo],[t+P,D,a],[0,1,0],ge.DARKWOOD,[[z,0],[z,1],[P,1],[P,0]]),Math.abs(R)<s&&e.quad([t+z,Y,a],[t+P,I,a],[t+P,I,r],[t+z,Y,r],[0,-1,0],ge.DARKWOOD,[[z,0],[P,0],[P,1],[z,1]])}for(let k of[-1,1])e.quad([t+k*i,0,a],[t+k*i,0,vo],[t+k*i,Zr.spring,vo],[t+k*i,Zr.spring,a],[k,0,0],ge.DARKWOOD,[[0,0],[1,0],[1,1],[0,1]]),e.quad([t+k*s,0,a],[t+k*s,Zr.spring,a],[t+k*s,Zr.spring,r],[t+k*s,0,r],[-k,0,0],ge.DARKWOOD,[[0,0],[1,0],[1,1],[0,1]]),e.box(t+k*(s+n/2)-n/2-.04,0,a-.04,t+k*(s+n/2)+n/2+.04,.42,vo,ge.DARKWOOD);let f=40;for(let k=0;k<f;k++){let z=-s+2*s*k/f,P=-s+2*s*(k+1)/f;e.beam([t+z,za(z)+.03,a-.015],[t+P,za(P)+.03,a-.015],.018,ge.DARKWOOD)}for(let k of[-1,1])e.beam([t+k*(s+.03),.42,a-.015],[t+k*(s+.03),Zr.spring+.02,a-.015],.018,ge.DARKWOOD);for(let k=-s;k<s-1e-6;k+=c){let z=k,P=Math.min(s,k+c),R=za(z),U=za(P);e.quad([t+P,0,r],[t+z,0,r],[t+z,R,r],[t+P,U,r],[0,0,-1],ge.REDDOOR,[[P,0],[z,0],[z,R],[P,U]])}let l=s-.2,d=.3,h=2.12,v=r-.006,u=.05,p=(k,z,P,R)=>e.box(t+k,z,v-.018,t+P,R,v,ge.REDDOOR);p(-l,d,l,d+u),p(-l,h-u,l,h),p(-l,d,-l+u,h),p(l-u,d,l,h),e.box(t-l+.14,d+.14,v-.022,t+l-.14,h-.14,v,ge.REDDOOR);let m=2.36;p(-s+.08,h+.06,s-.08,h+.12);for(let k of[-1,1]){let P=s-.17;for(let R=.07;R<P-1e-6;R+=c){let U=R,D=Math.min(P,R+c),Y=za(U,-.18),I=za(D,-.18);if(Y<=m+.02&&I<=m+.02)continue;let j=Ge=>t+k*Ge,ue=[[j(U),m,v+.004],[j(D),m,v+.004],[j(D),Math.max(m,I),v+.004],[j(U),Math.max(m,Y),v+.004]];k>0?e.quad(ue[1],ue[0],ue[3],ue[2],[0,0,-1],ge.REDPANEL,[[D,0],[U,0],[U,1],[D,1]]):e.quad(...ue,[0,0,-1],ge.REDPANEL,[[U,0],[D,0],[D,1],[U,1]])}}e.beam([t,m-.02,v-.008],[t,za(0,-.12),v-.008],.03,ge.REDDOOR),e.beam([t-s+.1,m-.01,v-.006],[t+s-.1,m-.01,v-.006],.014,ge.REDDOOR);let g=t-s+.15,y=1.06,b=v-.03;e.box(g-.034,y-.2,b-.008,g+.034,y+.17,b+.012,ge.BRASS);for(let[k,z]of[[y+.2,.026],[y+.235,.016],[y-.23,.026],[y-.265,.016]])e.lathe(g,b-.002,[[0,k-z],[z,k-z*.4],[z,k+z*.4],[0,k+z]],ge.BRASS,12);for(let k=0;k<6;k++){let z=y-.17+k*.065;for(let P of[-1,1])e.beam([g+P*.034,z,b-.01],[g+P*.041,z+.03,b-.01],.006,ge.BRASS)}let w=b-.008,M=(k,z,P)=>{for(let R=0;R<P;R++){let U=on*R/P,D=on*(R+1)/P;for(let Y=0;Y<16;Y++){let I=2*on*Y/16,j=2*on*(Y+1)/16,ue=(zt,St)=>[g+z*Math.sin(zt)*Math.cos(St),y+.03+z*Math.sin(zt)*Math.sin(St),k-z*Math.cos(zt)],Ge=(zt,St)=>[Math.sin(zt)*Math.cos(St),Math.sin(zt)*Math.sin(St),-Math.cos(zt)],Te=e.v(ue(U,I),Ge(U,I),ge.BRASS),ye=e.v(ue(U,j),Ge(U,j),ge.BRASS),le=e.v(ue(D,j),Ge(D,j),ge.BRASS),Ve=e.v(ue(D,I),Ge(D,I),ge.BRASS);e.idx.push(Te,ye,le,Te,le,Ve)}}};e.beam([g,y+.03,w],[g,y+.03,w-.05],.011,ge.BRASS),M(w-.075,.034,10),e.box(g-.008,y-.1,b-.0125,g+.008,y-.06,b-.0085,ge.KEYHOLE)}function xM(e){let t=sc(77);for(let[o,n,r]of ac){let[a,s]=Mh(o);for(let i=0;i<2;i++){let c=null;for(let f=a;f<=s;f+=.18){let l=_h(o,n,f),d=Math.sin(f*3.1+i*2+r)*.07,h=Math.cos(f*2.3+i+r)*.05,v=o==="ridge"?[l[0]+d,l[1]+h+.12,l[2]]:[l[0],l[1]+h+.12,l[2]+d];c&&(wh(f,r)||t()<.5)&&e.beam(c,v,.012+.008*t(),ge.WOOD),c=v}}}}function yM(e){let t=sc(4242),o=(r,a)=>!(r>_e.x0-_e.curb-.1&&r<_e.x1+_e.curb+.1&&a>_e.z0-_e.curb-.1&&a<_e.z1+_e.curb+.1)&&r>.2&&r<We-.2&&a>.3&&a<vo-.4,n=(r,a,s,i)=>{let c=.022+t()*.022,f=t()*2*on,l=Math.cos(f),d=Math.sin(f),h=(u,p)=>[r+(u*l-p*d)*c,a+.004*u*p,s+(u*d+p*l)*c],v=i?2:0;e.quad(h(-1,-1),h(-1,1),h(1,1),h(1,-1),[0,1,0],ge.BRACT,[[v,0],[v,1],[v+1,1],[v+1,0]])};for(let[r,a,s]of ac){let[i,c]=Mh(r);for(let f=i;f<=c;f+=.05){if(!wh(f,s)||t()>.55)continue;let l=_h(r,a,f),d=l[0]+(t()-.5)*1.8,h=l[2]+(t()-.5)*1.8;o(d,h)&&n(d,.004,h,t()<.18)}}for(let r=0;r<260;r++){let a=Math.floor(t()*4),s,i;a<2?(s=a?_e.x1+_e.curb+.12+t()*t()*.9:_e.x0-_e.curb-.12-t()*t()*.9,i=_e.z0+t()*(_e.z1-_e.z0)):(i=a===2?_e.z0-_e.curb-.12-t()*t()*.9:_e.z1+_e.curb+.12+t()*t()*.9,s=_e.x0+t()*(_e.x1-_e.x0)),o(s,i)&&n(s,.004,i,t()<.18)}for(let r=0;r<70;r++){let a=_e.x0+.08+t()*(_e.x1-_e.x0-.16),s=_e.z0+.08+t()*(_e.z1-_e.z0-.16);Math.hypot(a-fn.x,s-fn.z)<.6||(e.float=[a,s,a*5.1+s*2.9],n(a,.016,s,t()<.2),e.float=null)}}function bM(e,t,o){let n=(r,a,s,i,c)=>{let f=e.pos.length/3,l=Math.cos(s),d=Math.sin(s),h=Math.cos(i),v=Math.sin(i),u=[l,0,-d],p=[d*v,h,l*v],m=[u[1]*p[2]-u[2]*p[1],u[2]*p[0]-u[0]*p[2],u[0]*p[1]-u[1]*p[0]],g=c?.95:o()*.8;for(let[y,b]of[[0,0],[1,0],[1,1],[0,1]]){let w=(y-.5)*a,M=(b-.5)*a;e.pos.push(r[0]+u[0]*w+p[0]*M+gt[0],r[1]+u[1]*w+p[1]*M+gt[1],r[2]+u[2]*w+p[2]*M+gt[2]),e.nrm.push(...m),e.uv.push(y,b),e.shade.push(g),e.flower.push(1)}e.idx.push(f,f+1,f+2,f,f+2,f+3)};for(let[r,a,s]of ac){let[i,c]=Mh(r);for(let f=i;f<=c;f+=.1){if(!wh(f,s))continue;let l=_h(r,a,f),d=()=>(o()-.5)*.7,h=4+Math.floor(o()*4);for(let v=0;v<h;v++){let u=r==="ridge"?[l[0]+d(),l[1]-o()*.25,l[2]+d()*.4]:[l[0]+d()*.4,l[1]-o()*.25,l[2]+d()];n(u,.42+o()*.4,o()*2*on,(o()-.5)*2.4,o()<.16)}for(let v=0;v<5;v++){let u=o()*2*on;t([l[0]+d()*.6,l[1]-o()*.2,l[2]+d()*.6],[Math.cos(u),-.3-o()*.5,Math.sin(u)],[-Math.sin(u),0,Math.cos(u)],.08+o()*.06,.1)}if(o()<.22){let v=.5+o()*2,u=[l[0],l[1],l[2]],p=[(o()-.5)*.08,(o()-.5)*.08];for(let m=0;m<v;m+=.13){u=[u[0]+p[0],u[1]-.13,u[2]+p[1]];let g=(.3+o()*.22)*(1-.4*m/v);if(n([u[0]+(o()-.5)*.08,u[1],u[2]+(o()-.5)*.08],g,o()*2*on,(o()-.5)*.8,o()<.15),o()<.6){let y=o()*2*on;t([u[0],u[1],u[2]],[Math.cos(y),-.6,Math.sin(y)],[-Math.sin(y),0,Math.cos(y)],.05+o()*.04,.1)}}}}}}var jg=(()=>{let e=sc(9001),t=[],o=[];for(let[r,a,s]of ac){let[i,c]=Mh(r);for(let f=i;f<=c;f+=.1)wh(f,s)&&o.push(_h(r,a,f))}let n=o.filter(r=>r[0]>_e.x0-.6&&r[0]<_e.x1+.6&&r[2]>_e.z0&&r[2]<_e.z1);for(let r=0;r<64;r++){let a=r%2===0&&n.length?n:o,s=a[Math.floor(e()*a.length)];t.push({start:[s[0]+(e()-.5)*.4,s[1]-.25-e()*.3,s[2]+(e()-.5)*.4],period:18+e()*22,offset:e()*60,drift:[(e()-.5)*1.6,(e()-.5)*1.6],speed:.45+e()*.25,seed:e(),white:e()<.18?1:0})}return t})(),Z0=[_e.x0+.06,_e.z0+.06,_e.x1-.06,_e.z1-.06];function wM(e,t){let o=t+e.offset,n=Math.floor(o/e.period),r=o-n*e.period,a=.6+.4*Math.sin(n*1.7+e.seed*5),s=e.start[0]+e.drift[0]*a,i=e.start[2]+e.drift[1]*a,c=s>Z0[0]&&s<Z0[2]&&i>Z0[1]&&i<Z0[3],f=c?.017:.006,l=(e.start[1]-f)/e.speed;return{ph:r,Tf:l,lx:s,lz:i,inPool:c}}var ja=[{at:[We/2-.8,7.4],dir:.9,len:.58,kind:0,f:[.31,.17,.07],sip:21,first:9},{at:[We/2+.9,11.6],dir:3.6,len:.52,kind:1,f:[.23,.13,.05],sip:29,first:17},{at:[We/2-.3,12.8],dir:5.2,len:.46,kind:2,f:[.37,.11,.09],sip:25,first:4},{at:[We/2+1.1,6.7],dir:2.2,len:.54,kind:1,f:[.27,.19,.06],sip:33,first:23},{at:[We/2-1.2,10.4],dir:4.4,len:.43,kind:0,f:[.35,.15,.08],sip:27,first:13},{at:[We/2+.4,9],dir:1.4,len:.62,kind:2,f:[.21,.12,.05],sip:31,first:28},{at:[We/2-.9,13.3],dir:5.9,len:.4,kind:1,f:[.39,.21,.1],sip:23,first:6},{at:[We/2+1.3,12.9],dir:3,len:.49,kind:0,f:[.29,.14,.07],sip:35,first:31}],_M=[_e.x0+.38,_e.z0+.38,_e.x1-.38,fn.z-.95],Ml=[_e.x0+.22,_e.z0+.22,_e.x1-.22,fn.z-.75],El=12,kl=-.36,od=[];function MM(){let e=ja.map((f,l)=>({k:f,i:l,x:f.at[0],z:f.at[1],th:f.dir,w:0,v:.12,y:-.15,ph:l*2.1,pitch:0,nextSip:f.first,sipT:-1,kappa:0,bite:0,notice:0})),t=[],o=[];for(let f=0;f<El;f++)o.push({x:0,z:0,alive:0,born:0,seed:f*.37});let n={on:!1,x:0,z:0,t0:0},r=0,a=f=>Math.atan2(Math.sin(f),Math.cos(f)),s=f=>{let l=Math.sin(f*12.9898+78.233)*43758.5453;return l-Math.floor(l)};return{fish:e,events:t,crumbs:o,feed:n,drop:(f,l)=>{f=Math.max(Ml[0],Math.min(Ml[2],f)),l=Math.max(Ml[1],Math.min(Ml[3],l)),Object.assign(n,{on:!0,x:f,z:l,t0:r}),o.forEach((d,h)=>{let v=s(r+h)*Math.PI*2,u=.03+.11*Math.sqrt(s(r*1.7+h*3.1));Object.assign(d,{x:f+Math.cos(v)*u,z:l+Math.sin(v)*u,alive:1,born:r+s(h*5.3+r)*.35})}),t.push([f,l,r,1]);for(let d of e)d.notice=r+.25+Math.hypot(d.x-f,d.z-l)*.35+s(d.i*9.1+r)*.6},step:f=>{r+=f;let l=r,d=0;for(let h of o)h.alive&&(l<h.born||(d++,h.x+=Math.sin(l*.7+h.seed*11)*.004*f,h.z+=Math.cos(l*.6+h.seed*7)*.004*f));if(n.on&&d===0&&l>n.t0+1||n.on&&l>n.t0+40){n.on=!1;for(let h of o)h.alive=0}for(let h of e){let{k:v}=h,u=n.on&&l>h.notice,p=.38*Math.sin(l*v.f[0]+v.dir*3)+.22*Math.sin(l*v.f[1]*2.3+1.7*v.kind)+.12*Math.sin(l*1.1+v.dir),m=.11+.08*Math.sin(l*v.f[2]+v.dir)+.05*Math.max(0,Math.sin(l*.19+v.kind*4)-.6)*4,g=-(.1+.09*(.5+.5*Math.sin(l*.043+v.dir*2))),y=1.3,b=1;if(u){let I=null,j=1e9;for(let Ve of o){if(!Ve.alive||l<Ve.born)continue;let zt=Math.hypot(Ve.x-h.x,Ve.z-h.z)+.08*Math.sin(h.i*3.3+Ve.seed*9);zt<j&&(j=zt,I=Ve)}let ue=I?I.x:n.x,Ge=I?I.z:n.z,Te=Math.hypot(ue-h.x,Ge-h.z),ye=Math.atan2(Ge-h.z,ue-h.x),le=a(ye-h.th);if(p=Math.max(-2.4,Math.min(2.4,le*2.6))+.25*Math.sin(l*2.3+h.i),y=2.6,m=(.13+.38*Math.min(1,Te/1.2))*(.55+.45*Math.max(0,Math.cos(le))),g=g+(-.035-g)*(1-Math.min(1,Math.max(0,(Te-.15)/.8))),b=.25,I&&l>h.bite&&h.y>-.08){let Ve=h.x+Math.cos(h.th)*.01,zt=h.z+Math.sin(h.th)*.01;Math.hypot(I.x-Ve,I.z-zt)<.075&&(I.alive=0,h.bite=l+1.4,t.push([I.x,I.z,l,.75]))}}let w=.55+h.v*(u?1.2:2.5),M=h.x+Math.cos(h.th)*w,k=h.z+Math.sin(h.th)*w,[z,P,R,U]=u?Ml:_M,D=Math.max(z-M,M-R,P-k,k-U,0);if(D>0){let I=(z+R)/2+Math.sin(l*.07+v.kind)*.6,j=(P+U)/2+Math.sin(l*.05+v.kind*2)*2,ue=Math.atan2(j-h.z,I-h.x);p+=Math.sign(a(ue-h.th))*Math.min(D*3,1.3)*(u?.5:1)}for(let I of e){if(I===h)continue;let j=I.x-h.x,ue=I.z-h.z,Ge=Math.hypot(j,ue),Te=u?.32:.6;if(Ge<Te){let ye=Math.sign(a(Math.atan2(ue,j)-h.th))||1;p-=ye*(Te-Ge)*2*b*4*Math.max(0,Math.cos(Math.atan2(ue,j)-h.th)+.3)/(u?1:4)}}if(p=Math.max(-y,Math.min(y,p)),h.w+=(p-h.w)*Math.min(f*(u?4:1.6),1),h.th+=h.w*f,!u&&h.sipT<0&&l>h.nextSip&&(h.sipT=0,h.nextSip=l+v.sip*(.7+.6*s(l+v.kind))),h.sipT>=0){let I=h.sipT;h.sipT+=f;let j=Math.min(1,I/1.4)*(1-Math.max(0,Math.min(1,(I-2.4)/1.4)));g=g+(-.04-g)*j,m*=1-.65*j,I<1.5&&h.sipT>=1.5&&t.push([h.x+Math.cos(h.th)*.02,h.z+Math.sin(h.th)*.02,l,.9]),I<2.2&&h.sipT>=2.2&&t.push([h.x,h.z,l,.55]),(h.sipT>3.8||u)&&(h.sipT=-1)}h.v+=(Math.max(m,.03)-h.v)*Math.min(f*(u?2.2:.9),1),h.x+=Math.cos(h.th)*h.v*f,h.z+=Math.sin(h.th)*h.v*f,h.x=Math.max(_e.x0+.12,Math.min(_e.x1-.12,h.x)),h.z=Math.max(_e.z0+.12,Math.min(fn.z-.62,h.z));let Y=(g-h.y)*Math.min(f*(u?2.5:1.2),1);h.y+=Y,h.pitch+=(Math.max(-.5,Math.min(.5,Y/f/Math.max(h.v,.05)))-h.pitch)*Math.min(f*3,1),h.kappa=Math.max(-3.4,Math.min(3.4,h.w/Math.max(h.v,.09))),h.ph+=f*(3.2+32*h.v+2.5*Math.abs(h.w))}for(;t.length&&l-t[0][2]>10;)t.shift()},get t(){return r}}}function kM(){let e=Kg();{let t=_e.x0-_e.curb,o=_e.x1+_e.curb,n=_e.z0-_e.curb,r=_e.z1+_e.curb,a=[[0,0,We,n],[0,r,We,vo],[0,n,t,r],[o,n,We,r]];for(let[s,i,c,f]of a)for(let d=s;d<c-1e-6;d+=1)for(let h=i;h<f-1e-6;h+=1){let v=d,u=Math.min(c,d+1),p=h,m=Math.min(f,h+1);e.quad([v,0,p],[v,0,m],[u,0,m],[u,0,p],[0,1,0],ge.FLOOR,[[v,p],[v,m],[u,m],[u,p]])}}for(let t of[0,1]){let o=t?We:0,n=t?We+mr:-mr,r=t?[-1,0,0]:[1,0,0],a=.04;for(let p=0;p<vo-1e-6;p+=a){let m=p,g=Math.min(vo,p+a),y=(m+g)/2,b=null;if(!t)for(let M of it.c)rc(y-M)!==null&&(b=[it.sill,Math.min(rc(m-M)||it.spring,rc(g-M)||it.spring)]);let w=b?[[0,b[0]],[b[1],go]]:[[0,go]];for(let[M,k]of w)k<=M||(t?e.quad([o,M,g],[o,M,m],[o,k,m],[o,k,g],r,ge.PLASTER,[[g,M],[m,M],[m,k],[g,k]]):e.quad([o,M,m],[o,M,g],[o,k,g],[o,k,m],r,ge.PLASTER,[[m,M],[g,M],[g,k],[m,k]]))}if(!t)for(let p of it.c){for(let b of[-1,1]){let w=p+b*it.hw,M=[0,0,-b],k=[o,it.sill,w],z=[n,it.sill,w],P=[n,it.spring,w],R=[o,it.spring,w];b>0!=!!t?e.quad(k,z,P,R,M,ge.PLASTER,[[0,it.sill],[mr,it.sill],[mr,it.spring],[0,it.spring]]):e.quad(R,P,z,k,M,ge.PLASTER,[[0,it.spring],[mr,it.spring],[mr,it.sill],[0,it.sill]])}let m=28;for(let b=0;b<m;b++){let w=b/m*on,M=(b+1)/m*on,k=p+Math.cos(w)*it.hw,z=p+Math.cos(M)*it.hw,P=it.spring+Math.sin(w)*it.hw,R=it.spring+Math.sin(M)*it.hw,U=[0,-Math.sin((w+M)/2),-Math.cos((w+M)/2)];t?e.quad([o,P,k],[n,P,k],[n,R,z],[o,R,z],U,ge.PLASTER,[[0,w],[mr,w],[mr,M],[0,M]]):e.quad([o,R,z],[n,R,z],[n,P,k],[o,P,k],U,ge.PLASTER,[[0,M],[mr,M],[mr,w],[0,w]])}let g=t?We-.08:-mr,y=t?We+mr:.08;e.box(g,it.sill-.09,p-it.hw-.12,y,it.sill,p+it.hw+.12,ge.STONE)}let s=t?We:0,i=t?-1:1,c=[.6,...it.c.slice(1).map((p,m)=>(p+it.c[m])/2),vo-.6];for(let p of c){let m=Math.min(s,s+i*.14),g=Math.max(s,s+i*.14);e.box(m,0,p-.34,g,go-.7,p+.34,ge.STONE,{bottom:!0});let y=Math.min(s,s+i*.24),b=Math.max(s,s+i*.24);e.box(y,0,p-.44,b,.55,p+.44,ge.STONE,{bottom:!0}),e.box(y,go-.95,p-.46,b,go-.7,p+.46,ge.STONE)}let f=Math.min(s,s+i*.05),l=Math.max(s,s+i*.05);e.box(f,0,0,l,.22,vo,ge.STONE,{bottom:!0});let d=Math.min(s,s+i*.32),h=Math.max(s,s+i*.32);e.box(d,go-.55,0,h,go-.3,vo,ge.STONE);let v=Math.min(s,s+i*.42),u=Math.max(s,s+i*.42);e.box(v,go-.3,0,u,go-.12,vo,ge.STONE)}for(let[t,o]of[[0,1],[vo,-1]]){for(let c=0;c<32;c++){let f=c/32*We,l=(c+1)/32*We,d=v=>v<We/2?go+ha*v:go+ha*(We-v),h=o>0?[[l,0],[f,0],[f,d(f)],[l,d(l)]]:[[f,0],[l,0],[l,d(l)],[f,d(f)]];e.quad(...h.map(([v,u])=>[v,u,t]),[0,0,o],ge.PLASTER,h.map(([v,u])=>[v,u]))}let r=o>0?0:vo-.05,a=o>0?.05:vo;e.box(0,0,r,We,.22,a,ge.STONE,{bottom:!0});let s=o>0?0:vo-.32,i=o>0?.32:vo;e.box(0,go-.55,s,We,go-.3,i,ge.STONE)}{let o=We/2-1.1,n=We/2+1.1,r=3.9;e.box(o-.3,0,0,o,r+.3,.12,ge.STONE),e.box(n,0,0,n+.3,r+.3,.12,ge.STONE),e.box(o-.3,r,0,n+.3,r+.4,.14,ge.STONE);for(let[a,s]of[[o,We/2-.01],[We/2+.01,n]])e.box(a,0,.02,s,r,.02+.06,ge.WOOD),e.box(a+.12,.3,.02+.06,s-.12,1.7,.02+.09,ge.WOOD),e.box(a+.12,2,.02+.06,s-.12,r-.2,.02+.09,ge.WOOD)}gM(e);{let{x0:t,x1:o,z0:n,z1:r,curb:a,top:s}=_e,i=.06,c=.08;e.box(t-a,0,n-a,t,s-c,r+a,ge.WMARBLE,{bottom:!0}),e.box(o,0,n-a,o+a,s-c,r+a,ge.WMARBLE,{bottom:!0}),e.box(t,0,n-a,o,s-c,n,ge.WMARBLE,{bottom:!0}),e.box(t,0,r,o,s-c,r+a,ge.WMARBLE,{bottom:!0}),e.box(t-a-i,s-c,n-a-i,t+i*.5,s,r+a+i,ge.WMARBLE),e.box(o-i*.5,s-c,n-a-i,o+a+i,s,r+a+i,ge.WMARBLE),e.box(t+i*.5,s-c,n-a-i,o-i*.5,s,n+i*.5,ge.WMARBLE),e.box(t+i*.5,s-c,r-i*.5,o-i*.5,s,r+a+i,ge.WMARBLE);let f=.5;for(let v=t;v<o-1e-6;v+=f)for(let u=n;u<r-1e-6;u+=f){let p=v,m=Math.min(o,v+f),g=u,y=Math.min(r,u+f);e.quad([p,0,g],[p,0,y],[m,0,y],[m,0,g],[0,1,0],ge.WATER,[[p,g],[p,y],[m,y],[m,g]])}let{x:l,z:d,plinth:h}=fn;e.box(l-.42,0,d-.42,l+.42,h-.12,d+.42,ge.WMARBLE,{bottom:!0}),e.box(l-.5,h-.12,d-.5,l+.5,h,d+.5,ge.WMARBLE),e.box(l-.48,0,d-.48,l+.48,.12,d+.48,ge.WMARBLE,{bottom:!0})}return e}function SM(e){for(let o of[0]){let n=o?We+mr*.5:-mr*.5,r=.05,a=Dr.w*.5;for(let s of it.c){for(let i of Dr.cols){let c=rc(i)-.01;e.box(n-r,it.sill,s+i-a,n+r,c,s+i+a,ge.STEEL)}for(let i=it.sill+Dr.rowH;i<it.spring+.01;i+=Dr.rowH)e.box(n-r,i-a,s-it.hw,n+r,i+a,s+it.hw,ge.STEEL);for(let[i,c]of[[it.hw-.03,.06],[Dr.ring,a]])for(let l=0;l<24;l++){let d=l/24*on,h=(l+1)/24*on;e.beam([n,it.spring+Math.sin(d)*i,s+Math.cos(d)*i],[n,it.spring+Math.sin(h)*i,s+Math.cos(h)*i],c,ge.STEEL,[1,0,0])}for(let i of[-1,1])e.box(n-r,it.sill,s+i*(it.hw-.03)-.03,n+r,it.spring,s+i*(it.hw-.03)+.03,ge.STEEL);e.box(n-r,it.sill,s-it.hw,n+r,it.sill+.06,s+it.hw,ge.STEEL)}}let t=o=>o<We/2?go+ha*o:go+ha*(We-o);for(let o=0;o<=12;o++){let n=o*Vo.rafter;for(let[r,a]of[[-.3,We/2],[We/2,We+.3]])e.beam([r,t(Math.max(0,Math.min(We,r)))-.1,n],[a,t(a)-.1,n],.06,ge.STEEL)}for(let o=Vo.purlin;o<We/2-.2;o+=Vo.purlin)for(let n of[o,We-o])e.beam([n,t(n)-.06,-.2],[n,t(n)-.06,vo+.2],.035,ge.STEEL);e.beam([We/2,fa-.14,-.2],[We/2,fa-.14,vo+.2],.12,ge.STEEL);for(let o of[.05,We-.05])e.beam([o,go-.05,0],[o,go-.05,vo],.1,ge.STEEL);for(let o of Al){e.box(-.05,go-.13,o-.08,We+.05,go+.13,o+.08,ge.STEEL),e.beam([We/2,go,o],[We/2,fa-.2,o],.07,ge.STEEL);for(let n of[-1,1])e.beam([We/2+n*We/4,go,o],[We/2,fa-.4,o],.055,ge.STEEL),e.beam([We/2+n*We/4,go,o],[We/2+n*We/4,t(We/2+n*We/4)-.2,o],.045,ge.STEEL),e.beam([We/2+n*(We/2-.1),go,o],[We/2+n*We/4,t(We/2+n*We/4)-.2,o],.045,ge.STEEL);for(let n of[-1,1])e.box(We/2+n*We/4-.12,go-.18,o-.1,We/2+n*We/4+.12,go+.18,o+.1,ge.STEEL)}}function EM(e){let t=sc(311),o=[],n=[[_e.x0+.9,6.6,.9,10],[_e.x1-.8,8.4,.85,9],[_e.x0+.8,10.6,.8,8],[_e.x1-.9,12.4,.9,10],[_e.x0+1,13.9,.65,6],[We/2+.2,9.6,.5,4],[_e.x1-.7,15.9,.55,5]];for(let[a,s,i,c]of n)for(let f=0;f<c;f++)for(let l=0;l<40;l++){let d=t()*2*on,h=i*Math.sqrt(t()),v=a+Math.cos(d)*h,u=s+Math.sin(d)*h,p=.15+t()*.17;if(!(v-p<_e.x0+.04||v+p>_e.x1-.04||u-p<_e.z0+.04||u+p>_e.z1-.04)&&!(Math.hypot(v-fn.x,u-fn.z)<.62+p)&&!o.some(m=>Math.hypot(m[0]-v,m[1]-u)<(m[2]+p)*.93)){o.push([v,u,p,t()*2*on,t()]);break}}for(let[a,s,i,c,f]of o){od.push([a,s,i]),e.float=[a,s,f*7.3+i*13];let l=28,d=4,h=i*1.08,v=[];for(let u=0;u<=d;u++){let p=[];for(let m=0;m<l;m++){let g=m/l*2*on,y=u/d,b=g-c,w=.012+.004*(1-y*y)+.006*Math.pow(y,6)*(.5+.5*Math.sin(g*3+f*9));p.push(e.v([a+Math.cos(g)*h*y,w,s+Math.sin(g)*h*y],[0,1,0],ge.PAD,[.5+.5*y*Math.sin(b),.5+.5*y*Math.cos(b)]))}v.push(p)}for(let u=0;u<d;u++)for(let p=0;p<l;p++){let m=v[u][p],g=v[u][(p+1)%l],y=v[u+1][(p+1)%l],b=v[u+1][p];e.idx.push(m,g,y,m,y,b)}}e.float=null;let r=[[_e.x0+.75,6.9,1],[_e.x1-.65,8.1,.85],[_e.x1-.95,12.6,1.1],[_e.x0+.95,10.3,.8],[_e.x1-.55,15.6,.9],[_e.x0+1.15,13.7,.75]];for(let[a,s,i]of r){e.float=[a,s,a*3.7+s*1.3];let c=.17;[[12,1,70],[10,.86,48],[8,.66,26]].forEach(([l,d,h],v)=>{for(let u=0;u<l;u++){let p=2*on*u/l+v*.33,m=(90-(90-h)*i)*on/180,g=6,y=4,b=[];for(let w=0;w<=g;w++){let M=w/g,k=(.18+.82*Math.sin(on*Math.min(1,Math.pow(M,.8)*.75+.1)))*.36*d*c,z=[];for(let P=0;P<=y;P++){let R=P/y*2-1,U=R*k,D=Math.abs(R)*Math.abs(R)*.12*d*c,Y=M*d*c,I=Y*Math.cos(m),j=Y*Math.sin(m)+D,ue=a+Math.cos(p)*I-Math.sin(p)*U,Ge=s+Math.sin(p)*I+Math.cos(p)*U;z.push(e.v([ue,.03+j,Ge],[-Math.cos(p)*Math.sin(m)*.6,.8,-Math.sin(p)*Math.sin(m)*.6],ge.PETAL,[(v===2?.5:0)+.5*(.5+.5*R*.92),.98-M*.96]))}b.push(z)}for(let w=0;w<g;w++)for(let M=0;M<y;M++){let k=b[w][M],z=b[w][M+1],P=b[w+1][M+1],R=b[w+1][M];e.idx.push(k,z,P,k,P,R,k,P,z,k,R,P)}}}),e.lathe(a,s,[[0,.03+.05*c*4],[.025,.03+.045*c*4],[.032,.035],[0,.03]],ge.STAMEN,12)}e.float=null}function AM(e){let t=sc(907);{e.box(1.25-.48,.86-.06,11.1-1.35,1.25+.48,.86,11.1+1.35,ge.WOOD);for(let i of[-1,1])for(let c of[-1,1])e.box(1.25+i*(.48-.08)-.04,0,11.1+c*(1.35-.1)-.04,1.25+i*(.48-.08)+.04,.86-.06,11.1+c*(1.35-.1)+.04,ge.WOOD);e.box(1.25-.48+.06,.16,11.1-1.35+.1,1.25+.48-.06,.19,11.1+1.35-.1,ge.WOOD);for(let i=0;i<11;i++){let c=1.25+(t()-.5)*.6,f=11.1+(t()-.5)*2.2,l=.035+t()*.04,d=.09+t()*.14;if(e.lathe(c,f,[[0,.86],[l,.86],[l*1.02,.86+d*.9],[l*.9,.86+d],[0,.86+d]],i%3?ge.JAR:ge.POT,14),i%3===0)for(let h=0;h<7;h++){let v=t()*2*on,u=.28+t()*.12,p=.12+t()*.2;e.beam([c,.86+.03,f],[c+Math.cos(v)*p*u,.86+.03+u,f+Math.sin(v)*p*u],.0055,ge.BRUSH)}}e.box(1.25-.3,.86,11.1+.7,1.25+.15,.86+.02,11.1+1.15,ge.WOOD)}for(let o=0;o<5;o++){let n=.55+t()*.6,r=.75+t()*.8,a=19.3+o*.16,s=.25+o*.07,i=.17,c=[s+r*Math.sin(i)*0,r,a];e.quad([s+.18,0,a-n/2],[s+.18,0,a+n/2],[s+.18-r*Math.sin(i),r*Math.cos(i),a+n/2],[s+.18-r*Math.sin(i),r*Math.cos(i),a-n/2],[Math.cos(i),Math.sin(i),0],o%2?ge.WOOD:ge.GESSO,[[0,0],[1,0],[1,1],[0,1]])}for(let o of Qg)e.beam([o[0],go,o[2]],[o[0],o[1]+.05,o[2]],.008,ge.STEEL),e.lathe(o[0],o[2],[[.04,o[1]+.06],[.06,o[1]+.02],[.16,o[1]-.09],[.29,o[1]-.22],[.33,o[1]-.28],[.32,o[1]-.285]],ge.SHADE,32),e.lathe(o[0],o[2],[[0,o[1]-.25],[.06,o[1]-.2],[0,o[1]-.12]],ge.BULB,12)}var Qg=[[4.2,4.6,7.33],[11.8,4.6,7.33],[4.2,4.6,16.5],[11.8,4.6,16.5]],sz=[[_e.x0-1,_e.z0-1,1],[_e.x1+1,_e.z0-1,.95],[_e.x0-1,_e.z1+1,1.15],[_e.x1+1,_e.z1+1,1.1],[.9,1.3,1.25],[We-.9,vo-1.2,1.3]],Wg=[[0,0,.16,.5],[.16,0,.34,.4],[.35,0,.5,.36],[.5,0,.66,.38],[.68,0,.84,.42],[0,.6,.19,1],[.2,.57,.36,1],[.41,.6,.58,1]];function zM(){let e={pos:[],nrm:[],uv:[],shade:[],flower:[],idx:[]},t=sc(1213),o=(n,r,a,s,i)=>{let c=Wg[Math.floor(t()*Wg.length)],f=(c[2]-c[0])/(c[3]-c[1]),l=s*f*1,d=5,h=e.pos.length/3,v=.6+t()*.4;for(let u=0;u<=d;u++){let p=u/d,m=i*p*p*s,g=[n[0]+r[0]*p*s,n[1]+r[1]*p*s-m,n[2]+r[2]*p*s];for(let y of[-.5,.5]){e.pos.push(g[0]+a[0]*y*l+gt[0],g[1]+a[1]*y*l-Math.abs(y)*.08*l+gt[1],g[2]+a[2]*y*l+gt[2]);let b=[r[1]*a[2]-r[2]*a[1],r[2]*a[0]-r[0]*a[2],r[0]*a[1]-r[1]*a[0]],w=Math.hypot(...b)||1;e.nrm.push(b[0]/w,Math.abs(b[1]/w)+.2,b[2]/w),e.uv.push(y<0?c[0]:c[2],c[3]-(c[3]-c[1])*p),e.shade.push(v),e.flower.push(0)}}for(let u=0;u<d;u++){let p=h+u*2;e.idx.push(p,p+1,p+3,p,p+3,p+2)}};bM(e,o,t);for(let[n,r,a]of[[_e.x0-.3,_e.z0-.3,-1],[_e.x1+.3,_e.z1+.3,1],[_e.x0-.3,_e.z1+.2,-1]])for(let s=0;s<26;s++){let i=t()*2*on,c=n+(t()-.3)*.5*-a,f=r+(t()-.5)*.8,l=_e.top+.01-Math.max(0,Math.abs(c-n)-.1)*.6*t();o([c,Math.max(.05,l),f],[Math.cos(i),-.15,Math.sin(i)],[-Math.sin(i),0,Math.cos(i)],.08+t()*.05,.12)}return e}function TM(){let e=Kg();for(let o of[0]){let n=o?We+mr*.5+.01:-mr*.5-.01,r=o?[-1,0,0]:[1,0,0];for(let a of it.c)for(let i=a-it.hw;i<a+it.hw-1e-6;i+=.05){let c=i,f=Math.min(a+it.hw,i+.05),l=rc(c-a+1e-4)||it.spring,d=rc(f-a-1e-4)||it.spring;o?e.quad([n,it.sill,f],[n,it.sill,c],[n,l,c],[n,d,f],r,0,[[f,it.sill],[c,it.sill],[c,l],[f,d]]):e.quad([n,it.sill,c],[n,it.sill,f],[n,d,f],[n,l,c],r,0,[[c,it.sill],[f,it.sill],[f,d],[c,l]])}}let t=Math.hypot(ha,1);return e.quad([0,go+.002,vo],[0,go+.002,0],[We/2,fa+.002,0],[We/2,fa+.002,vo],[ha/t,-1/t,0].map(o=>-o).map((o,n)=>n===1?-Math.abs(o):o),1,[[0,vo],[0,0],[We/2,0],[We/2,vo]]),e.quad([We,go+.002,0],[We,go+.002,vo],[We/2,fa+.002,vo],[We/2,fa+.002,0],[-ha/t,-1/t,0],1,[[We,0],[We,vo],[We/2,vo],[We/2,0]]),e}var LM=`
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
`,NM=Qg.map(e=>td([e[0],e[1]-.22,e[2]])),K0=`
	${LM}
	${Yg()}

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
		vec3 p = pw - vec3(${pe(gt[0])}, ${pe(gt[1])}, ${pe(gt[2])});
		float vis = studioSun(pw + N * 0.03);
		sunVis = vis;
		vec3 sunC = mix(vec3(1.0, 0.88, 0.70) * 3.9, vec3(0.50, 0.64, 1.0) * 1.35, night);
		float lam = max(dot(N, STUDIO_SUN), 0.0);
		vec3 col = sunC * vis * lam;
		vec3 Hh = normalize(STUDIO_SUN + V);
		spec = sunC * vis * pow(max(dot(N, Hh), 0.0), mix(16.0, 400.0, gloss)) * mix(0.04, 1.0, gloss) * (lam > 0.0 ? 1.0 : 0.0);

		// skylight: the roof is glass, the walls are full of windows
		float upF = 0.5 + 0.5 * N.y;
		float hgt = clamp(p.y / ${pe(go)}, 0.0, 1.0);
		// corners and the foot of the walls get less of the sky
		float dw = min(min(p.x, ${pe(We)} - p.x), min(p.z, ${pe(vo)} - p.z));
		float occ = mix(0.55, 1.0, smoothstep(0.0, 2.2, dw)) * mix(0.72, 1.0, smoothstep(0.0, 2.5, p.y));
		vec3 skyC = mix(vec3(0.70, 0.65, 0.58), vec3(0.028, 0.042, 0.08), night);
		col += skyC * (0.22 + 0.62 * upF) * occ * (0.85 + 0.3 * hgt) * 0.36;
		// the bright left windows, seen from walls and things facing them
		col += mix(vec3(1.0, 0.86, 0.66), vec3(0.06, 0.08, 0.14), night) * max(-N.x, 0.0) * 0.16 * occ;
		// light thrown back up off the sunlit floor: warm, from below
		float pools = mix(1.0, 0.15, night);
		col += vec3(0.95, 0.68, 0.42) * pools * (0.12 + 0.26 * max(-N.y, 0.0)) * (1.0 - smoothstep(0.5, 6.0, p.y)) * smoothstep(0.0, 1.2, dw);

		// the lamps (by night)
		if (night > 0.01) {
			${NM.map(e=>`
			{
				vec3 d = vec3(${pe(e[0])}, ${pe(e[1])}, ${pe(e[2])}) - pw;
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
		float h = 1.0 - exp(-d * 0.035);
		vec3 airC = mix(vec3(0.36, 0.30, 0.24), vec3(0.02, 0.03, 0.05), night);
		return mix(col, airC, h * 0.25);
	}
`;function RM(e){let t=new DataView(e),o=t.getUint32(4,!0),n=t.getUint32(8,!0),r=[],a=[];for(let l=0;l<3;l++)r.push(t.getFloat32(12+l*4,!0)),a.push(t.getFloat32(24+l*4,!0));let s=36,i=new Uint16Array(e,s,o*3);s+=o*6;let c=new Uint16Array(e,s,n);s+=n*2;let f=new Int8Array(e,s,o*3);return{nV:o,nI:n,mn:r,sz:a,pos:i,idx:c,nrm:f}}function Sl(e,t,o){let n=o&&o.wrap||"clamp",r=e.texture({data:[[[0,0,0,0]]],min:"linear",mag:"linear"}),a={tex:r,ready:!1};return fetch(t).then(s=>{if(!s.ok)throw new Error("Could not load "+t);return s.blob()}).then(s=>createImageBitmap(s,{premultiplyAlpha:"none"}).catch(()=>new Promise((i,c)=>{let f=new Image;f.onload=()=>i(f),f.onerror=c,f.src=URL.createObjectURL(s)}))).then(s=>{r({data:s,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrap:n}),a.ready=!0}).catch(s=>console.error(s)),a}var yh=128,bh=372,zl=(_e.x1-_e.x0)/yh,Zg=(_e.z1-_e.z0)/bh,OM=.02,Jg=`
	float simDec(vec2 c) { return (floor(c.x * 255.0 + 0.5) * 256.0 + floor(c.y * 255.0 + 0.5)) / 65535.0 * 2.0 - 1.0; }
	vec2 simEnc(float h) {
		float v = floor(clamp(h * 0.5 + 0.5, 0.0, 1.0) * 65535.0 + 0.5);
		float hi = floor(v / 256.0);
		return vec2(hi, v - hi * 256.0) / 255.0;
	}
`,Q0=`
	uniform float stime;
	uniform highp sampler2D simTex;
	${Jg}
	float simAt(vec2 i) {
		i = clamp(i, vec2(0.0), vec2(${yh-1}.0, ${bh-1}.0));
		return simDec(texture2D(simTex, (i + 0.5) / vec2(${yh}.0, ${bh}.0)).rg);
	}
	// the height of the water at world xz (metres, tiny)
	float poolHeight(vec2 xz) {
		float h = 0.0018 * sin(xz.x * 2.1 + stime * 0.55) * sin(xz.y * 1.7 - stime * 0.43)
		        + 0.0010 * sin(xz.x * 3.7 - xz.y * 2.9 + stime * 0.8);
#ifndef NO_SIM
		vec2 g = (xz - vec2(${pe(_e.x0+gt[0])}, ${pe(_e.z0+gt[2])})) / vec2(${pe(zl)}, ${pe(Zg)}) - 0.5;
		vec2 i = floor(g), fr = g - i;
		float sh = mix(mix(simAt(i), simAt(i + vec2(1.0, 0.0)), fr.x), mix(simAt(i + vec2(0.0, 1.0)), simAt(i + vec2(1.0, 1.0)), fr.x), fr.y);
		h += sh * ${pe(OM)};
#endif
		return h;
	}
`,Vg=`
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
	${Q0}
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
	}`,CM=`
	precision highp float;
	uniform float night, time, yScale, mirrorOn;
	uniform sampler2D padTex, petalTex, reflTex;
	uniform vec2 reflSize;
	uniform float reflOn;
	uniform mat4 view;
	${Q0}
	varying vec3 v_pos, v_nrm, v_eye;
	varying float v_kind;
	varying vec2 v_uv;
	${K0}

	bool is(float k) { return abs(v_kind - k) < 0.5; }

	void main() {
		vec3 pw = v_pos;
		vec3 p = pw - vec3(${pe(gt[0])}, ${pe(gt[1])}, ${pe(gt[2])});
		vec3 V = normalize(v_eye - pw);
		vec3 N = normalize(v_nrm);
		if (dot(N, V) < 0.0 && !is(${ge.PETAL}.0)) N = -N;
		if (is(${ge.PETAL}.0) && dot(N, V) < 0.0) N = -N;

		// in the reflection under the floor, the floor and the water are not drawn
		bool floorish = is(${ge.FLOOR}.0) || is(${ge.WATER}.0);
		if (yScale < 0.0 && floorish) discard;

		// fallen bracts: little papery hearts, pink or white
		if (is(${ge.BRACT}.0)) {
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

		if (is(${ge.PLASTER}.0) || is(${ge.NICHE}.0)) {
			// old lime plaster: warm, patchy, with a soft trowelled bloom
			float big = fbm3(p * vec3(0.35, 0.45, 0.35));
			float mid = fbm3(p * 1.6 + 3.0);
			float fine = vnoise3(p * 14.0);
			vec3 a = vec3(0.70, 0.60, 0.47), b = vec3(0.84, 0.76, 0.63);
			base = mix(a, b, smoothstep(0.3, 0.7, big));
			base *= 0.86 + 0.22 * mid + 0.05 * fine;
			// damp stains low down, soot high up
			base *= mix(0.86, 1.0, smoothstep(0.0, 1.4, p.y + 0.6 * mid));
			base *= mix(1.0, 0.9, smoothstep(${pe(go-2)}, ${pe(go)}, p.y));
			// where the plaster has come away, old brick shows through
			float bare = smoothstep(0.70, 0.74, fbm3(p * vec3(0.5, 0.8, 0.5) + 11.0)) * smoothstep(0.4, 1.6, p.y) * 0.85;
			vec2 bk = (abs(N.x) > 0.5 ? p.zy : p.xy) * vec2(1.0 / 0.23, 1.0 / 0.075);
			bk.x += floor(bk.y) * 0.5;
			float mortar = max(smoothstep(0.9, 0.97, fract(bk.x)), smoothstep(0.82, 0.92, fract(bk.y)));
			vec3 brick = mix(vec3(0.55, 0.30, 0.20), vec3(0.42, 0.25, 0.18), vnoise3(vec3(floor(bk), 0.0) * 0.7)) * (0.85 + 0.3 * hash13(vec3(floor(bk), 1.0)));
			brick = mix(brick, vec3(0.62, 0.58, 0.52), mortar);
			base = mix(base, brick, bare);
			if (is(${ge.NICHE}.0)) base *= 0.55;
			gloss = 0.04;
		} else if (is(${ge.STONE}.0)) {
			float n = fbm3(p * vec3(1.2, 2.5, 1.2));
			base = mix(vec3(0.72, 0.66, 0.56), vec3(0.84, 0.79, 0.70), n) * (0.92 + 0.12 * vnoise3(p * 20.0));
			gloss = 0.12;
		} else if (is(${ge.TRAVERTINE}.0)) {
			// travertine: bands, little holes, a warm cream
			float band = fbm3(vec3(p.x * 0.4, p.y * 9.0 + fbm3(p * 1.5) * 2.0, p.z * 0.4));
			base = mix(vec3(0.73, 0.65, 0.53), vec3(0.88, 0.82, 0.72), band);
			float pit = smoothstep(0.84, 0.9, vnoise3(p * 55.0));
			base *= 1.0 - pit * 0.18;
			// wet and darker just above the water
			base *= mix(0.78, 1.0, smoothstep(0.0, 0.12, p.y));
			gloss = 0.18;
		} else if (is(${ge.STEEL}.0)) {
			base = vec3(0.035, 0.036, 0.038) * (0.8 + 0.4 * vnoise3(p * 3.0));
			gloss = 0.45;
		} else if (is(${ge.FLOOR}.0)) {
			// the gallery's own floor: polished chequered marble, black and
			// dark cream, laid on the diagonal, with fine veins and hair-line
			// grout, the polish duller where people walk
			vec2 tq = mat2(0.70711, 0.70711, -0.70711, 0.70711) * (p.xz - vec2(${pe(We/2)}, 0.0));
			float tileSize = 0.62;
			vec2 tile = floor(tq / tileSize);
			checker = mod(tile.x + tile.y, 2.0);
			float rnd = hash13(vec3(tile, 5.0));
			vec3 lightTile = vec3(0.44, 0.37, 0.24) * (0.9 + 0.16 * rnd);
			vec3 darkTile = vec3(0.0008, 0.0007, 0.0006) + vec3(0.0002) * rnd;
			float vein = abs(sin(tq.x * 5.5 + tq.y * 2.0 + sin(tq.y * 1.6) + rnd * 6.0));
			vein = 1.0 - smoothstep(0.0, 0.09, vein);
			base = mix(lightTile, darkTile, checker);
			base = mix(base, base * 0.65, vein * 0.35 * (1.0 - checker));
			base = mix(base, base * 2.2 + 0.0006, vein * 0.18 * checker);
			vec2 tf = fract(tq / tileSize);
			float edge = min(min(tf.x, 1.0 - tf.x), min(tf.y, 1.0 - tf.y)) * tileSize;
			float grout = 1.0 - smoothstep(0.0, 0.006, edge);
			base *= 1.0 - 0.45 * grout;
			gloss = (0.86 + 0.28 * hash13(vec3(tile, 17.0))) * (1.0 - 0.5 * grout);
			aoK = mix(0.62, 1.0, smoothstep(0.0, 0.9, min(min(p.x, ${pe(We)} - p.x), min(p.z, ${pe(vo)} - p.z))));
			// the curb throws a soft shadow round the pool
			vec2 dq = max(vec2(${pe(_e.x0-_e.curb)} - p.x, p.x - ${pe(_e.x1+_e.curb)}), vec2(${pe(_e.z0-_e.curb)} - p.z, p.z - ${pe(_e.z1+_e.curb)}));
			float dpool = max(max(dq.x, dq.y), 0.0);
			aoK *= mix(0.7, 1.0, smoothstep(0.0, 0.4, dpool));
		} else if (is(${ge.WMARBLE}.0)) {
			// white statuary marble, polished: a soft grey cloud and fine veins
			float cl = fbm3(p * 1.4 + 2.0);
			float v1 = abs(sin(p.x * 3.1 + p.z * 1.7 + p.y * 5.0 + cl * 7.0));
			float vein = (1.0 - smoothstep(0.0, 0.05, v1)) * 0.7 + (1.0 - smoothstep(0.0, 0.02, abs(sin(p.z * 6.3 - p.x * 2.2 + cl * 11.0)))) * 0.3;
			base = mix(vec3(0.68, 0.68, 0.66), vec3(0.76, 0.76, 0.74), cl);
			base = mix(base, vec3(0.50, 0.51, 0.52), vein * 0.45);
			base *= mix(0.8, 1.0, smoothstep(0.0, 0.1, p.y));
			gloss = 0.88;
		} else if (is(${ge.REDDOOR}.0) || is(${ge.REDPANEL}.0)) {
			// deep crimson paint over wood: a soft sheen, the grain just showing
			float grain = vnoise3(vec3(p.x * 40.0, p.y * 2.0, p.z * 40.0));
			base = vec3(0.30, 0.022, 0.026) * (0.88 + 0.2 * grain);
			if (is(${ge.REDPANEL}.0)) base *= 0.55;
			gloss = 0.62;
		} else if (is(${ge.DARKWOOD}.0)) {
			float grain = vnoise3(vec3(p.x * 3.0, p.y * 45.0, p.z * 3.0));
			base = mix(vec3(0.030, 0.019, 0.014), vec3(0.062, 0.040, 0.028), grain);
			gloss = 0.35;
		} else if (is(${ge.BRASS}.0)) {
			base = vec3(0.60, 0.44, 0.17) * (0.85 + 0.25 * vnoise3(p * 90.0));
			gloss = 0.78;
		} else if (is(${ge.KEYHOLE}.0)) {
			base = vec3(0.004);
		} else if (is(${ge.BRACT}.0)) {
			float white = step(1.5, v_uv.x);
			base = mix(vec3(0.62, 0.03, 0.22), vec3(0.86, 0.80, 0.80), white) * (0.8 + 0.3 * hash13(floor(p * 30.0)));
			sss = 0.5;
		} else if (is(${ge.WATER}.0)) {
			base = vec3(0.012, 0.018, 0.014);
			gloss = 1.0;
		} else if (is(${ge.PAD}.0)) {
			vec4 tx = texture2D(padTex, v_uv);
			if (tx.a < 0.5) discard;
			base = tx.rgb * tx.rgb * (0.8 + 0.35 * vnoise3(vec3(p.xz * 1.3, 2.0)));
			gloss = 0.55;
		} else if (is(${ge.PETAL}.0)) {
			vec4 tx = texture2D(petalTex, v_uv);
			if (tx.a < 0.45) discard;
			base = tx.rgb * tx.rgb;
			sss = 0.6;
			gloss = 0.25;
		} else if (is(${ge.STAMEN}.0)) {
			base = vec3(0.95, 0.66, 0.12);
			gloss = 0.2;
		} else if (is(${ge.MARBLE}.0)) {
			// warm white marble with faint grey veins
			float v = fbm3(p * 2.2);
			float vein = 1.0 - smoothstep(0.0, 0.035, abs(sin((p.y * 3.0 + p.x * 2.0 + v * 6.0))) - 0.0) ;
			base = mix(vec3(0.86, 0.83, 0.77), vec3(0.93, 0.91, 0.86), v) * (1.0 - 0.06 * vein);
			// a little grime in the folds, darker at the foot
			base *= mix(0.84, 1.0, smoothstep(${pe(fn.plinth)}, ${pe(fn.plinth+.5)}, p.y));
			sss = 0.18;
			gloss = 0.32;
		} else if (is(${ge.WOOD}.0)) {
			float g = vnoise3(vec3(p.x * 2.0, p.y * 30.0, p.z * 2.0));
			base = mix(vec3(0.26, 0.15, 0.08), vec3(0.42, 0.27, 0.15), g) * (0.85 + 0.2 * vnoise3(p * 5.0));
			gloss = 0.2;
		} else if (is(${ge.GESSO}.0)) {
			base = vec3(0.86, 0.83, 0.76) * (0.95 + 0.08 * vnoise3(p * 30.0));
		} else if (is(${ge.PAINT}.0)) {
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
		} else if (is(${ge.POT}.0)) {
			base = vec3(0.025, 0.025, 0.028);
			gloss = 0.85;
		} else if (is(${ge.SOIL}.0)) {
			base = vec3(0.10, 0.07, 0.05) * (0.7 + 0.5 * vnoise3(p * 40.0));
		} else if (is(${ge.SHADE}.0)) {
			base = vec3(0.03);
			gloss = 0.6;
		} else if (is(${ge.BULB}.0)) {
			vec3 glow = mix(vec3(0.75, 0.70, 0.62) * 0.35, vec3(1.0, 0.75, 0.45) * 3.5, night);
			gl_FragColor = vec4(sqrt(glow), 1.0);
			return;
		} else if (is(${ge.JAR}.0)) {
			base = mix(vec3(0.55, 0.42, 0.25), vec3(0.75, 0.70, 0.62), hash13(floor(p * 3.0)));
			gloss = 0.7;
		} else if (is(${ge.BRUSH}.0)) {
			base = mix(vec3(0.42, 0.10, 0.06), vec3(0.75, 0.62, 0.38), step(${pe(.86+.24)}, p.y));
			gloss = 0.5;
		} else if (is(${ge.CLOTH}.0)) {
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
		if (is(${ge.POT}.0) || is(${ge.STEEL}.0) || is(${ge.SHADE}.0) || is(${ge.JAR}.0)) {
			col += env * (0.04 + 0.6 * fres) * gloss * 1.2;
		}
		if (is(${ge.BRASS}.0)) {
			col = base * light * 0.35 + spec * base * 2.5 + env * base * 1.6;
		}
		if (is(${ge.REDDOOR}.0) || is(${ge.REDPANEL}.0) || is(${ge.WMARBLE}.0)) {
			col += env * (0.03 + 0.5 * fres) * gloss;
		}

		col = studioAir(col, pw, v_eye);

		float alpha = 1.0;
		if (is(${ge.FLOOR}.0)) {
			// as polished as the gallery's: a clear reflection even looking
			// down, a mirror at grazing angles, more on the black tiles
			float cosV = clamp(V.y, 0.0, 1.0);
			float refl = 0.16 + 0.58 * pow(1.0 - cosV, 3.0);
			refl *= mix(0.72, 1.0, checker);
			refl *= gloss;
			alpha = 1.0 - refl * mirrorOn;
			alpha = mix(alpha, 1.0, clamp(sunVis * 0.4, 0.0, 0.45));
		}
		if (is(${ge.WATER}.0)) {
			// still, dark water: almost a mirror, the sky's light on it, a
			// very slow breath of ripples
			// the moving surface: its slope from the swell and the rings
			float e = ${pe(zl)};
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
	}`;Ta.exports=function(e){let t=kM();SM(t),EM(t),AM(t),xM(t),yM(t);let o={enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"zero"}},n=performance.now(),r={t:0},a=0,s=e._gl,i=!!(s&&s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS)>0),c=ie=>i?ie:`#define NO_SIM
`+ie,f=(()=>{let ie=yh,ce=bh,G=new Uint8Array(ie*ce*4);for(let fo=0;fo<ie*ce;fo++)G[fo*4]=128,G[fo*4+2]=128;let Re=()=>e.framebuffer({color:e.texture({width:ie,height:ce,data:G,min:"nearest",mag:"nearest",wrap:"clamp"}),depth:!1,stencil:!1}),Qe=[Re(),Re()],Se=0,he=new Uint8Array(ie*ce*4);for(let fo=0;fo<ce;fo++)for(let jo=0;jo<ie;jo++){let an=_e.x0+(jo+.5)*zl,V=_e.z0+(fo+.5)*Zg,Ee=Math.abs(an-fn.x)<.43&&Math.abs(V-fn.z)<.43,ze=0;for(let qe of od)ze=Math.max(ze,1-Math.min(1,Math.max(0,(Math.hypot(an-qe[0],V-qe[1])-qe[2]*.7)/(qe[2]*.3))));let de=(fo*ie+jo)*4;he[de]=Ee?0:255,he[de+1]=Math.round(ze*255),he[de+3]=255}let kt=e.texture({width:ie,height:ce,data:he,min:"nearest",mag:"nearest",wrap:"clamp"}),_=16,wt=[];for(let fo=0;fo<_;fo++)wt.push([0,0,0,.04]);let xt={prev:e.prop("prev"),mask:kt};for(let fo=0;fo<_;fo++)xt["src["+fo+"]"]=(jo=>()=>wt[jo])(fo);let Dt=Math.pow(.36*(1/60)/zl,2),Yt=e({vert:"precision highp float; attribute vec2 position; varying vec2 uv; void main() { uv = position * 0.5 + 0.5; gl_Position = vec4(position, 0.0, 1.0); }",frag:`
			precision highp float;
			uniform highp sampler2D prev, mask;
			uniform vec4 src[${_}];
			varying vec2 uv;
			${Jg}
			void main() {
				vec2 px = 1.0 / vec2(${ie}.0, ${ce}.0);
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
				float hn = h + (h - hp) * damp + ${pe(Dt)} * lap;
				hn *= 0.9993;
				// whatever touched the water this moment
				vec2 p = vec2(${pe(_e.x0+gt[0])}, ${pe(_e.z0+gt[2])}) + uv * vec2(${pe(_e.x1-_e.x0)}, ${pe(_e.z1-_e.z0)});
				for (int i = 0; i < ${_}; i++) {
					vec4 s = src[i];
					if (s.z == 0.0) continue;
					vec2 dd = p - s.xy;
					hn += s.z * exp(-dot(dd, dd) / (s.w * s.w));
				}
				gl_FragColor = vec4(simEnc(clamp(hn, -1.0, 1.0)), simEnc(h));
			}`,attributes:{position:[-1,-1,1,-1,-1,1,1,1]},primitive:"triangle strip",count:4,framebuffer:e.prop("out"),uniforms:xt,depth:{enable:!1,mask:!1},blend:{enable:!1},cull:{enable:!1},viewport:{x:0,y:0,width:ie,height:ce}}),So=[],Bo=0,Lo=0;return{tex:()=>Qe[Se].color[0],drop(fo,jo,an,V){So.push([fo,jo,Bo,an,0,V||.035])},advance(fo,jo){let an=fo-Bo-Lo;if(an<0||an>2){Bo=fo,Lo=0;return}Lo+=an;let V=0;for(;Lo>=1/60&&V<8;){Lo-=1/60,Bo+=1/60,V++;let Ee=0;for(let ze=So.length-1;ze>=0;ze--){let de=So[ze],qe=Bo-de[2];if(qe>1.4){So.splice(ze,1);continue}if(Ee>=_)continue;let dt=de[3]*.05*Math.sin(qe*2*Math.PI*2.4)*Math.exp(-qe*3.2),pt=wt[Ee++];pt[0]=de[0],pt[1]=de[1],pt[2]=dt,pt[3]=de[5]}for(let ze of jo){if(Ee>=_)break;let de=wt[Ee++];de[0]=ze[0],de[1]=ze[1],de[2]=ze[2],de[3]=ze[3]}for(;Ee<_;Ee++)wt[Ee][2]=0;Yt({prev:Qe[Se].color[0],out:Qe[1-Se]}),Se=1-Se}V===8&&(Lo=0,Bo=fo)},read(){return e.read({framebuffer:Qe[Se]})}}})(),l=()=>{r.t=(performance.now()-n)/1e3,typeof window!="undefined"&&window.__studioFreeze!=null&&(r.t=window.__studioFreeze);for(let G of jg){let Re=wM(G,r.t),Qe=Re.ph-Re.Tf;Re.inPool&&Qe>=0&&Qe<.5&&!(G.heard>r.t-1)&&(G.heard=r.t,nd.play(Re.lx+gt[0],Re.lz+gt[2],.4),f.drop(Re.lx+gt[0],Re.lz+gt[2],.55,.03))}let ie=r.t-Y.sim.t;for((ie<0||ie>120)&&(ie=Math.min(Math.max(ie,0),120));ie>1e-6;){let G=Math.min(ie,.05);Y.sim.step(G),ie-=G}for(let G of Y.sim.events)G[2]>a&&(a=G[2],nd.play(G[0]+gt[0],G[1]+gt[2],G[3]*.8),f.drop(G[0]+gt[0],G[1]+gt[2],G[3]*1.3,G[3]>=1?.07:.04));let ce=[];for(let G of Y.sim.fish){let Re=Math.min(1,Math.max(0,(G.y+.15)/.09));if(Re<=0)continue;let Qe=.008*Re*Math.min(1.5,G.v/.15);ce.push([G.x+gt[0]+Math.cos(G.th)*.02,G.z+gt[2]+Math.sin(G.th)*.02,Qe,.045]),ce.push([G.x+gt[0]-Math.cos(G.th)*.14,G.z+gt[2]-Math.sin(G.th)*.14,-Qe,.055])}f.advance(r.t,ce)},d={stime:()=>r.t,simTex:()=>f.tex()};typeof location!="undefined"&&/tourdebug/.test(location.search)&&(window.__studioClock=r,window.__pondSim=f);let h=e.texture({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"}),v=[4,4],u=0,p=e({}),m=()=>p(ie=>{let ce=ie.viewportWidth,G=ie.viewportHeight;h.width!==ce||h.height!==G?h({copy:!0,width:ce,height:G,min:"linear",mag:"linear",wrap:"clamp"}):h.subimage({copy:!0,width:ce,height:G}),v[0]=ce,v[1]=G,u=1}),g=Sl(e,"res/pond/lilypad.webp"),y=Sl(e,"res/pond/petals.webp"),b=Object.assign({padTex:()=>g.tex,petalTex:()=>y.tex,reflTex:()=>h,reflSize:()=>v,reflOn:()=>u},d),w=(ie,ce)=>e({vert:c(Vg),frag:CM,attributes:{position:ie.pos,normal:ie.nrm,kind:ie.kind,uv:ie.uv,anchor:ie.anchor&&ie.anchor.length?ie.anchor:new Float32Array(ie.pos.length/3*4)},elements:new Uint32Array(ie.idx),count:ce||ie.idx.length,uniforms:b,cull:{enable:!1},blend:o}),M=w(t),k=null;fetch(fn.file).then(ie=>{if(!ie.ok)throw new Error("Could not load "+fn.file);return ie.arrayBuffer()}).then(ie=>{let ce=RM(ie),G={pos:[],nrm:[],kind:[],uv:[],anchor:null,idx:[]},Re=fn.height,Qe=Math.cos(fn.yaw),Se=Math.sin(fn.yaw);for(let he=0;he<ce.nV;he++){let kt=(ce.mn[0]+ce.pos[he*3]/65535*ce.sz[0])*Re,_=(ce.mn[1]+ce.pos[he*3+1]/65535*ce.sz[1])*Re,wt=(ce.mn[2]+ce.pos[he*3+2]/65535*ce.sz[2])*Re;G.pos.push(fn.x+Qe*kt+Se*wt+gt[0],fn.plinth+_+gt[1],fn.z-Se*kt+Qe*wt+gt[2]);let xt=ce.nrm[he*3]/127,Dt=ce.nrm[he*3+1]/127,Yt=ce.nrm[he*3+2]/127;G.nrm.push(Qe*xt+Se*Yt,Dt,-Se*xt+Qe*Yt),G.kind.push(ge.MARBLE),G.uv.push(0,0)}for(let he=0;he<ce.nI;he++)G.idx.push(ce.idx[he]);k=w(G)}).catch(ie=>console.error(ie));let z=Sl(e,"res/tree/leaves.webp"),P=zM(),R=e({vert:c(`
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
		${K0}
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
		}`,attributes:{position:P.pos,normal:P.nrm,uv:P.uv,shade:P.shade,flower:P.flower},elements:new Uint32Array(P.idx),uniforms:{tex:z.tex},cull:{enable:!1}}),U=(()=>{let ie={corner:[],start:[],par:[],misc:[],idx:[]};return jg.forEach((ce,G)=>{for(let Re of[[-1,-1],[1,-1],[1,1],[-1,1]])ie.corner.push(Re[0],Re[1]),ie.start.push(ce.start[0]+gt[0],ce.start[1],ce.start[2]+gt[2]),ie.par.push(ce.period,ce.offset,ce.drift[0],ce.drift[1]),ie.misc.push(ce.speed,ce.seed,ce.white);ie.idx.push(G*4,G*4+1,G*4+2,G*4,G*4+2,G*4+3)}),ie})(),D=e({vert:c(`
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
		${Q0}
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
			vec2 lq = land - vec2(${pe(gt[0])}, ${pe(gt[2])});
			bool inPool = lq.x > ${pe(Z0[0])} && lq.x < ${pe(Z0[2])} && lq.y > ${pe(Z0[1])} && lq.y < ${pe(Z0[3])};
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
		${K0}
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
		}`,attributes:{corner:U.corner,start:U.start,par:U.par,misc:U.misc},elements:new Uint32Array(U.idx),uniforms:d,cull:{enable:!1}}),Y={sim:MM(),ready:!1};Tl=Y.sim,typeof location!="undefined"&&/tourdebug/.test(location.search)&&(window.__koi=Y.sim);let I=Object.assign({},d);ja.forEach((ie,ce)=>{I["koiA["+ce+"]"]=()=>{let G=Y.sim.fish[ce];return[G.x+gt[0],G.y,G.z+gt[2],G.th]},I["koiB["+ce+"]"]=()=>{let G=Y.sim.fish[ce];return[G.kappa,G.ph,G.v,G.pitch]}});let j=(()=>{let ce=Math.round(96*(_e.z1-_e.z0)/(_e.x1-_e.x0)),G=new Uint8Array(96*ce*4),Re=[-i0[0]/i0[1]*-kl,-i0[2]/i0[1]*-kl],Qe=96/(_e.x1-_e.x0),Se=ce/(_e.z1-_e.z0);for(let he=0;he<ce;he++)for(let kt=0;kt<96;kt++){let _=_e.x0+(kt+.5)/Qe,wt=_e.z0+(he+.5)/Se,xt=0;for(let Dt of od){let Yt=Math.hypot(_-(Dt[0]+Re[0]),wt-(Dt[1]+Re[1]));xt=Math.max(xt,1-Math.min(1,Math.max(0,(Yt-Dt[2]*.82)/(Dt[2]*.35))))}G[(he*96+kt)*4]=Math.round(xt*255),G[(he*96+kt)*4+3]=255}return e.texture({width:96,height:ce,data:G,min:"linear",mag:"linear"})})(),ue=`
		uniform vec4 koiA[${ja.length}], koiB[${ja.length}];
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
	`,Ge=`
		uniform vec4 koiA[${ja.length}], koiB[${ja.length}];
		uniform sampler2D padShadow;
		const vec3 W_SUN = vec3(${pe(i0[0])}, ${pe(i0[1])}, ${pe(i0[2])});
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
			vec2 lp = pw.xz - vec2(${pe(gt[0])}, ${pe(gt[2])});
			// (the picture is for the bed; nearer the surface the shadow sits nearer the pad)
			vec2 back = W_SUN.xz / W_SUN.y * (pw.y - ${pe(kl)});
			vec2 uv = (lp - back - vec2(${pe(_e.x0)}, ${pe(_e.z0)})) / vec2(${pe(_e.x1-_e.x0)}, ${pe(_e.z1-_e.z0)});
			return texture2D(padShadow, uv).r;
		}
		// the sun's share of the light under the water at pw
		vec3 underSun(vec3 pw, vec3 N, float sv, out vec3 sunPart) {
			vec3 sunC = mix(vec3(1.0, 0.88, 0.70) * 3.9, vec3(0.50, 0.64, 1.0) * 1.35, night);
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
			float e = ${pe(zl)};
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
			return under * (1.0 - R) + rc * R + glintC * glint;
		}
		// what the water does to light that comes back up through it
		float showThrough(vec3 V) {
			float cosV = clamp(V.y, 0.0, 1.0);
			float Fr = 0.02 + 0.98 * pow(1.0 - cosV, 5.0);
			return 1.0 - mix(0.05, 0.93, Fr);
		}
	`,Te=(()=>{let ie=[],ce=[],G=[],Re=[],Qe=(Lo,fo,jo,an,V)=>(ie.push(Lo+gt[0],fo,jo+gt[2]),ce.push(...an),G.push(V),ie.length/3-1),Se=(Lo,fo,jo,an,V,Ee,ze)=>{let de=ie.length/3;for(let qe=0;qe<=an;qe++)for(let dt=0;dt<=V;dt++)Qe(Lo[0]+fo[0]*qe/an+jo[0]*dt/V,Lo[1]+fo[1]*qe/an+jo[1]*dt/V,Lo[2]+fo[2]*qe/an+jo[2]*dt/V,Ee,ze);for(let qe=0;qe<an;qe++)for(let dt=0;dt<V;dt++){let pt=de+qe*(V+1)+dt;Re.push(pt,pt+1,pt+V+2,pt,pt+V+2,pt+V+1)}},{x0:he,x1:kt,z0:_,z1:wt}=_e,xt=kl;Se([he,xt,_],[kt-he,0,0],[0,0,wt-_],8,22,[0,1,0],0),Se([he,0,_],[0,0,wt-_],[0,xt,0],22,2,[1,0,0],1),Se([kt,0,_],[0,0,wt-_],[0,xt,0],22,2,[-1,0,0],1),Se([he,0,_],[kt-he,0,0],[0,xt,0],8,2,[0,0,1],1),Se([he,0,wt],[kt-he,0,0],[0,xt,0],8,2,[0,0,-1],1);let Dt=fn.x-.42,Yt=fn.x+.42,So=fn.z-.42,Bo=fn.z+.42;return Se([Dt,0,So],[0,0,Bo-So],[0,xt,0],2,2,[-1,0,0],1),Se([Yt,0,So],[0,0,Bo-So],[0,xt,0],2,2,[1,0,0],1),Se([Dt,0,So],[Yt-Dt,0,0],[0,xt,0],2,2,[0,0,-1],1),Se([Dt,0,Bo],[Yt-Dt,0,0],[0,xt,0],2,2,[0,0,1],1),{pos:ie,nrm:ce,kd:G,idx:Re}})(),ye=Sl(e,"res/pond/gravel.jpg",{wrap:"repeat"}),le=Object.assign({padShadow:j,gravel:()=>ye.tex,reflTex:()=>h,reflSize:()=>v,reflOn:()=>u},I),Ve=e({vert:c(`
		precision highp float;
		uniform mat4 proj, view;
		attribute vec3 position, normal;
		attribute float kd;
		varying vec3 v_pos, v_nrm, v_eye;
		varying float v_kd;
		${Q0}
		${ue}
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
		${Q0}
		${K0}
		${Ge}
		float klen(int i) {
			${ja.map((ie,ce)=>`if (i == ${ce}) return ${pe(ie.len)};`).join(" ")}
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
				base = mix(base, vec3(0.10, 0.13, 0.07), smoothstep(-0.05, ${pe(kl)}, v_pos.y) * 0.75);
			}
			vec3 spec; float sv;
			vec3 light = studioLight(vec3(v_pos.x - W_SUN.x / W_SUN.y * v_pos.y, 0.02, v_pos.z - W_SUN.z / W_SUN.y * v_pos.y), N, V, 0.1, spec, sv);
			vec3 sunPart;
			vec3 lit = underSun(v_pos, N, sv, sunPart);
			// the koi's shadows, softer the higher they swim above the bed
			float sh = 0.0;
			for (int i = 0; i < ${ja.length}; i++) {
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
		}`,attributes:{position:Te.pos,normal:Te.nrm,kd:Te.kd},elements:new Uint16Array(Te.idx),uniforms:le,cull:{enable:!1},depth:{enable:!0,mask:!1,func:"less"},blend:o}),zt=Sl(e,"res/koi.webp"),St=null,Vt=null;fetch("res/koi.bin").then(ie=>{if(!ie.ok)throw new Error("Could not load res/koi.bin");return ie.arrayBuffer()}).then(ie=>{let ce=new DataView(ie),G=ce.getUint32(4,!0),Re=ce.getUint32(8,!0),Qe=ce.getFloat32(12,!0),Se=16,he=new Uint16Array(ie,Se,G);Se+=G*2;let kt=new Int16Array(ie,Se,G*2);Se+=G*4;let _=new Uint16Array(ie,Se,G*2);Se+=G*4;let wt=new Uint16Array(ie,Se,Re);Se+=Re*2;let xt=new Int8Array(ie,Se,G*3);Se+=G*3;let Dt=new Uint8Array(ie,Se,G*2),Yt=ja.length,So=new Float32Array(G*3*Yt),Bo=new Float32Array(G*3*Yt),Lo=new Float32Array(G*2*Yt),fo=new Float32Array(G*2*Yt),jo=new Float32Array(G*4*Yt);ja.forEach((Ee,ze)=>{for(let de=0;de<G;de++){let qe=ze*G+de;So[qe*3]=he[de]/65535*1.2,So[qe*3+1]=kt[de*2]/32767*Qe,So[qe*3+2]=kt[de*2+1]/32767*Qe,Bo[qe*3]=xt[de*3]/127,Bo[qe*3+1]=xt[de*3+1]/127,Bo[qe*3+2]=xt[de*3+2]/127,Lo[qe*2]=_[de*2]/65535,Lo[qe*2+1]=_[de*2+1]/65535,fo[qe*2]=Dt[de*2]/255,fo[qe*2+1]=Dt[de*2+1]/255,jo[qe*4]=Ee.len,jo[qe*4+1]=Ee.kind,jo[qe*4+2]=ze,jo[qe*4+3]=0}});let an=[],V=[];for(let Ee=0;Ee<Yt;Ee++)for(let ze=0;ze<Re;ze+=3){let de=wt[ze],qe=wt[ze+1],dt=wt[ze+2];(Math.max(Dt[de*2],Dt[qe*2],Dt[dt*2])>140?V:an).push(de+Ee*G,qe+Ee*G,dt+Ee*G)}Vt={body:e.elements({data:new Uint32Array(an),type:"uint32"}),fins:e.elements({data:new Uint32Array(V),type:"uint32"})},St=e({vert:c(`
				precision highp float;
				uniform mat4 proj, view;
				attribute vec3 loc, nrm;
				attribute vec2 uv, fin;
				attribute vec4 km;
				varying vec3 v_pos, v_nrm, v_eye;
				varying vec2 v_uv;
				varying float v_kind, v_fin, v_depth, v_seed, v_u;
				${Q0}
				${ue}
				void main() {
					float len = km.x;
					int fi = int(km.z + 0.5);
					vec4 A = koiA[0], B = koiB[0];
					for (int i = 1; i < ${ja.length}; i++) if (i == fi) { A = koiA[i]; B = koiB[i]; }
					float th = A.w, kap = B.x, ph = B.y, v = B.z, pitch = B.w;
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
					float pace = clamp(v / 0.18, 0.2, 1.8);
					float amp = (0.010 + 0.10 * u * u) * (0.35 + 0.5 * min(pace, 1.3) + 0.25 * min(abs(kap), 1.0));
					float sway = amp * sin(ph - 6.0 * u);
					float dsway = amp * cos(ph - 6.0 * u) * -6.0;
					vec3 L = loc;
					// the fins trail and ripple a little behind the body
					sway += fin.x * 0.012 * sin(ph * 1.3 - 9.0 * u) * (0.6 + 0.4 * u);
					// the pectoral fins paddle slowly, and fold back when it hurries
					float pect = fin.y;
					float fast = smoothstep(0.7, 1.5, pace);
					L.z += pect * 0.05 * sin(ph * 0.45 + sign(L.y) * 0.9) * (1.0 - fast * 0.7);
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
				${Q0}
				${K0}
				${Ge}
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
						base = mix(vec3(1.0, 0.60, 0.10), vec3(1.0, 0.70, 0.22), jit) * (0.45 + 0.75 * lum) * mix(1.0, 0.9, red);
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
				}`,attributes:{loc:So,nrm:Bo,uv:Lo,fin:fo,km:jo},elements:e.prop("els"),uniforms:Object.assign({koiTex:()=>zt.tex,padShadow:j,reflTex:()=>h,reflSize:()=>v,reflOn:()=>u},I),cull:{enable:!1},colorMask:e.prop("color"),depth:{enable:!0,mask:e.prop("write"),func:e.prop("func")},blend:o}),Y.ready=!0}).catch(ie=>console.error(ie));let Tt=()=>{St&&(St({els:Vt.body,color:[!1,!1,!1,!1],write:!0,func:"less"}),St({els:Vt.body,color:[!0,!0,!0,!0],write:!1,func:"lequal"}),St({els:Vt.fins,color:[!0,!0,!0,!0],write:!1,func:"less"}))},no=(()=>{let ie={cp:[],ci:[],idx:[]};for(let ce=0;ce<El;ce++){let G=ie.cp.length/3,Re=5,Qe=7;for(let Se=0;Se<=Re;Se++)for(let he=0;he<Qe;he++){let kt=Se/Re*Math.PI,_=he/Qe*Math.PI*2,wt=1+.35*Math.sin(_*3+ce*1.7)*Math.sin(kt*2+ce);ie.cp.push(Math.sin(kt)*Math.cos(_)*wt,Math.cos(kt)*.6,Math.sin(kt)*Math.sin(_)*wt*(.8+.4*(ce*.37%1))),ie.ci.push(ce)}for(let Se=0;Se<Re;Se++)for(let he=0;he<Qe;he++){let kt=G+Se*Qe+he,_=G+Se*Qe+(he+1)%Qe,wt=G+(Se+1)*Qe+he,xt=G+(Se+1)*Qe+(he+1)%Qe;ie.idx.push(kt,_,xt,kt,xt,wt)}}return ie})(),bo=Object.assign({},d);for(let ie=0;ie<El;ie++)bo["crumbs["+ie+"]"]=()=>{let ce=Y.sim.crumbs[ie],G=Y.sim.t,Re=ce.alive?Math.min(1,Math.max(0,(G-ce.born)/.25)):0;return[ce.x+gt[0],ce.z+gt[2],Re,ce.seed]};let Yo=e({vert:c(`
		precision highp float;
		uniform mat4 proj, view;
		uniform vec4 crumbs[${El}];
		attribute vec3 cp;
		attribute float ci;
		varying vec3 v_pos, v_nrm, v_eye;
		${Q0}
		void main() {
			int k = int(ci + 0.5);
			vec4 c = crumbs[0];
			for (int i = 1; i < ${El}; i++) if (i == k) c = crumbs[i];
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
		${K0}
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
		}`,attributes:{cp:no.cp,ci:no.ci},elements:new Uint32Array(no.idx),uniforms:bo,cull:{enable:!1}}),tt=TM(),Et=e({vert:c(Vg),frag:`
		precision highp float;
		uniform float night, time;
		varying vec3 v_pos, v_nrm, v_eye;
		varying float v_kind;
		varying vec2 v_uv;
		${K0}
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			vec3 N = normalize(v_nrm);
			if (dot(N, V) < 0.0) N = -N;
			float F = 0.04 + 0.96 * pow(1.0 - max(dot(N, V), 0.0), 5.0);
			vec3 p = v_pos - vec3(${pe(gt[0])}, ${pe(gt[1])}, ${pe(gt[2])});
			float dust = fbm3(p * vec3(1.5, 3.0, 1.5)) * (v_kind > 0.5 ? 1.0 : 0.6);
			// streaks where old rain has run down the roof
			float streak = v_kind > 0.5 ? smoothstep(0.55, 0.9, vnoise3(vec3(p.z * 9.0, p.x * 0.6, 0.0))) * 0.5 : 0.0;
			vec3 c = mix(vec3(0.85, 0.80, 0.72), vec3(0.12, 0.13, 0.17), night) * (dust * 0.5 + streak);
			float a = clamp(0.05 + dust * 0.16 + streak * 0.2 + F * 0.4, 0.0, 0.6);
			vec3 col = mix(c, studioSky(reflect(-V, N)), F / max(a, 0.01) * 0.4);
			// the roof's leaded pattern: dark cames, frosted rondels lit
			// from behind by the sky
			if (v_kind > 0.5) {
				float ux = p.x < ${pe(We/2)} ? p.x : ${pe(We)} - p.x;
				vec2 pq = vec2(ux - ${pe(Vo.purlin)} * floor(ux / ${pe(Vo.purlin)}) - ${pe(Vo.purlin/2)}, p.z - ${pe(Vo.rafter)} * floor(p.z / ${pe(Vo.rafter)}) - ${pe(Vo.rafter/2)});
				float pat = studioRoofPattern(pq, 0.004);
				float lead = 1.0 - smoothstep(0.2, 0.6, pat);
				float frost = clamp(1.0 - pat, 0.0, 1.0) * (1.0 - lead);
				vec3 frostC = mix(vec3(0.95, 0.93, 0.88), vec3(0.10, 0.13, 0.20), night);
				col = mix(col, frostC, frost * 0.9);
				a = max(a, frost * 0.45);
				col = mix(col, vec3(0.03, 0.03, 0.035), lead);
				a = mix(a, 1.0, lead);
			}
			gl_FragColor = vec4(sqrt(max(col, 0.0)), a);
		}`,attributes:{position:tt.pos,normal:tt.nrm,kind:tt.kind,uv:tt.uv,anchor:tt.anchor},uniforms:d,elements:new Uint32Array(tt.idx),cull:{enable:!1},depth:{mask:!1},blend:o}),$t=(()=>{let ie={pos:[],idx:[]},ce=300,G=24,Re=12;for(let Qe=0;Qe<=Re;Qe++){let Se=-.25*on+Qe/Re*.75*on;for(let he=0;he<=G;he++){let kt=he/G*2*on;ie.pos.push(gt[0]+We/2+ce*Math.cos(Se)*Math.cos(kt),ce*Math.sin(Se),gt[2]+vo/2+ce*Math.cos(Se)*Math.sin(kt))}}for(let Qe=0;Qe<Re;Qe++)for(let Se=0;Se<G;Se++){let he=Qe*(G+1)+Se,kt=he+1,_=he+G+2,wt=he+G+1;ie.idx.push(he,kt,_,he,_,wt)}return ie})(),ro=e({vert:c(`
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
		${K0}
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
		void main() {`),attributes:{position:$t.pos},elements:new Uint32Array($t.idx),cull:{enable:!1}});function wo(ie){ie&&ie.reflected||(m(),l()),ro(),M(),ie&&ie.reflected||(Ve(),Tt(),Yo()),k&&k(),R(),D(),ie&&ie.reflected||Et()}return wo};var nd=(()=>{let e=[[.3,1.45],[2,1.45],[3.58,1.45],[5.1,1.4],[6.53,.48]],t=null,o=null,n=[0,1.6,0],r=0,a=()=>{try{return localStorage.getItem("gallery-sound")!=="off"}catch(i){return!0}},s=()=>{if(t){t.state==="suspended"&&t.resume().catch(()=>{});return}let i=window.AudioContext||window.webkitAudioContext;if(i){try{t=new i}catch(c){return}fetch("res/audio/water-drops.mp3").then(c=>c.arrayBuffer()).then(c=>new Promise((f,l)=>t.decodeAudioData(c,f,l))).then(c=>{o=c}).catch(()=>{})}};return typeof window!="undefined"&&["pointerdown","touchend","keydown"].forEach(i=>window.addEventListener(i,s,{capture:!0,passive:!0})),{listen(i){n=i},play(i,c,f){if(!t||!o||t.state!=="running"||!a()||document.hidden||r>6)return;let l=Math.hypot(i-n[0],c-n[2],n[1]*.7),d=f*.6/(1+l*.5);if(d<.015)return;let[h,v]=e[Math.floor(Math.random()*e.length)],u=t.createBufferSource();u.buffer=o,u.playbackRate.value=.85+Math.random()*.35;let p=t.createBiquadFilter();p.type="lowpass",p.frequency.value=1800+9e3/(1+l*.6);let m=t.createGain();m.gain.value=d,u.connect(p),p.connect(m),m.connect(t.destination),r++,u.onended=()=>{r--},u.start(t.currentTime+Math.random()*.03,h,v)}}})(),Tl=null;function PM(e,t){if(t[1]>=-1e-4)return null;let o=-e[1]/t[1],n=e[0]+t[0]*o-gt[0],r=e[2]+t[2]*o-gt[2];return n<_e.x0||n>_e.x1||r<_e.z0||r>_e.z1||Math.abs(n-fn.x)<.45&&Math.abs(r-fn.z)<.45?null:[n+gt[0],r+gt[2]]}function IM(e,t){Tl&&Tl.drop(e-gt[0],t-gt[2])}function $M(){return!!(Tl&&Tl.feed.on)}var Xg=[{from:[12.6,1.65,.9],to:[11.4,1.75,2.6],at:[6.2,2.6,15.5],fov:60},{from:[8,1.45,1.4],to:[8,1.25,4.4],at:[8,1.7,16],fov:50},{from:[7.2,1.6,3.8],to:[8.3,1.55,5.2],at:[13,1.4,10.4],fov:52},{from:[7.1,3.9,6.4],to:[8.6,3.7,7.6],at:[8,-.2,10.6],fov:50,pond:!0},{from:[6.2,1.45,10.4],to:[7,1.75,11.6],at:[8,2.3,15.2],fov:44},{from:[2.6,1.5,2.6],to:[3.6,1.6,4.4],at:[7,6.8,12],fov:62}],nc=11;function FM(e){let t=Xg.length,o=Math.floor(e/nc)%t,n=e%nc/nc,r=n*n*(3-2*n),a=Xg[o],s=a.from.map((c,f)=>c+(a.to[f]-c)*r),i=Math.max(0,1-Math.min(n*nc,(1-n)*nc)/.7);return{eye:td(s),target:td(a.at),fov:a.fov,roll:0,fade:i,pond:!!a.pond&&i<.05,shot:Math.floor(e/nc)}}Ta.exports.previewCam=FM;Ta.exports.poolHit=PM;Ta.exports.feedAt=IM;Ta.exports.feeding=$M;Ta.exports.listen=e=>nd.listen(e);Ta.exports.sunGLSL=Yg;Ta.exports.O=gt;Ta.exports.SIZE={W:We,L:vo,H:go,RIDGE:fa};Ta.exports.BOX=[gt[0]-.8,0,gt[2]-.8,gt[0]+We+.8,fa+.5,gt[2]+vo+.8];Ta.exports.AIR_BOX=[gt[0],0,gt[2],gt[0]+We,fa,gt[2]+vo]});var Sh=ke((cz,a3)=>{"use strict";var{A:gr}=Ea(),{C:qn}=br(),{DOOR:ic}=H0(),ir=X0(),cc=J0(),o3=qn.hallEnd+.35,n3={arch:[13.6,0,gr.zc-gr.arch.r-.3,14.4,gr.arch.spring+gr.arch.r+.3,gr.zc+gr.arch.r+.3],mouth:[13.3,0,qn.z0-.3,14.3,8.2,qn.z1+.3],stair:[-.5,0,ir.SURR.z0-.2,.5,ir.SURR.top+.3,ir.SURR.z1+.2],door:[ic.x0-.4,0,-.5,ic.x1+.4,ic.top+.4,.5],windows:[15.6,.4,qn.z1-.2,36.9,6.4,qn.z1+.9],farDoor:[qn.x1-.2,0,qn.zc-ic.r-.4,qn.x1+.9,ic.top+.4,qn.zc+ic.r+.4]},A0={court:[gr.x0-.4,0,gr.z0-.3,gr.x1+.3,gr.domeTop+.5,gr.z1+.3],stair:[ir.C.x-ir.R-2.6,0,ir.C.z-ir.R-1.5,.5,15.6,ir.C.z+ir.R+1.5],street:[-60,-1,-140,74,60,.6],garden:[10,-1,qn.z1,46,60,qn.z1+110],florence:[qn.x1,-1,qn.zc-30,qn.x1+80,60,qn.zc+30],studio:cc.BOX},qM=[[0,0,0,14,0,o3],[13.6,0,qn.z0,qn.x1+.4,0,qn.z1],[gr.x0-.4,0,gr.z0,gr.x1,0,gr.z1],[ir.C.x-ir.R-2.6,0,ir.C.z-ir.R,.4,0,ir.C.z+ir.R],[cc.BOX[0],0,cc.BOX[2],cc.BOX[3],0,cc.BOX[5]]],DM={hall:{court:["arch"],stair:["stair"],street:["door"],garden:["mouth","windows"],florence:["mouth","farDoor"]},wing:{court:["mouth","arch"],stair:["mouth","stair"],street:["mouth","door"],garden:["windows"],florence:["farDoor"]},court:{stair:["arch","stair"],street:["arch","door"],garden:["arch","mouth","windows"],florence:["arch","mouth","farDoor"]},stair:{court:["stair","arch"],street:["stair","door"],garden:["stair","mouth","windows"],florence:["stair","mouth","farDoor"]}},Rl=new Float64Array(24),Wa=[7,2,2],r3=0,z0="out",kh=!0;try{/[?&]nocull\b/.test(location.search)&&(kh=!1)}catch(e){}var Ll={court:!0,stair:!0,street:!0,garden:!0,florence:!0,studio:!1},Nl={court:!0,stair:!0,street:!0,garden:!0,florence:!0,studio:!1},e3=!0;function GM(e){let t=i=>[e[i],e[4+i],e[8+i],e[12+i]],o=t(0),n=t(1),r=t(2),a=t(3),s=(i,c,f,l)=>{for(let d=0;d<4;d++)Rl[i*4+d]=c[d]+f*l[d]};s(0,a,1,o),s(1,a,-1,o),s(2,a,1,n),s(3,a,-1,n),s(4,a,1,r),s(5,a,-1,r)}function es(e,t){if(!kh)return!0;let o=t?-e[4]:e[1],n=t?-e[1]:e[4];for(let r=0;r<6;r++){let a=Rl[r*4],s=Rl[r*4+1],i=Rl[r*4+2],c=Rl[r*4+3],f=a>0?e[3]:e[0],l=s>0?n:o,d=i>0?e[5]:e[2];if(a*f+s*l+i*d+c<0)return!1}return!0}var rd=(e,t)=>Wa[0]>e[0]-t&&Wa[0]<e[3]+t&&Wa[2]>e[2]-t&&Wa[2]<e[5]+t;function HM(e){if(rd(e,.6))return null;let t=1/0,o=-1/0;for(let n=0;n<4;n++){let r=(n&1?e[3]:e[0])-Wa[0],a=(n&2?e[5]:e[2])-Wa[2],s=Math.atan2(r,a)-r3;s-=Math.round(s/(2*Math.PI))*2*Math.PI,t=Math.min(t,s),o=Math.max(o,s)}return o-t>Math.PI?null:[t,o]}function t3(e,t,o){let n=-Math.PI,r=Math.PI,a=s=>{let i=HM(s);return i?(n=Math.max(n,i[0]-.03),r=Math.min(r,i[1]+.03),n<=r):!0};for(let s of e){let i=n3[s];if(!rd(i,.6)&&(!es(i,o)||!a(i)))return!1}return es(t,o)&&a(t)}function UM(){let e=Wa[0],t=Wa[2],o=cc.BOX;return e>o[0]&&e<o[3]&&t>o[2]&&t<o[5]?"studio":e<0&&t>ir.C.z-ir.R-1.5&&e>ir.C.x-ir.R-2.6?"stair":e>14.1&&t>gr.z0-.3&&t<gr.z1+.3&&e<gr.x1+.3?"court":e>13.9&&t>qn.z0-.4&&t<qn.z1+.1&&e<qn.x1+.3?"wing":e>=0&&e<=14.1&&t>.3&&t<o3?"hall":"out"}var BM={PORTAL:n3,ROOM:A0,update(e,t,o){let n=new Array(16);for(let r=0;r<4;r++)for(let a=0;a<4;a++){let s=0;for(let i=0;i<4;i++)s+=t[i*4+a]*e[r*4+i];n[r*4+a]=s}GM(n),Wa[0]=o[0],Wa[1]=o[1],Wa[2]=o[2],r3=Math.atan2(-e[2],-e[10]),z0=UM();for(let r in A0){if(r==="studio"||z0==="studio"){Ll[r]=Nl[r]=r==="studio"&&z0==="studio";continue}if(!kh||z0==="out"||z0===r||rd(A0[r],.3))Ll[r]=es(A0[r],!1)||z0===r,Nl[r]=es(A0[r],!0)||z0===r;else{let a=DM[z0][r];Ll[r]=a?t3(a,A0[r],!1):es(A0[r],!1),Nl[r]=a?t3(a,A0[r],!0):es(A0[r],!0)}}e3=!kh||qM.some(r=>es(r,!1))},get zone(){return z0},room(e,t){return t?Nl[e]:Ll[e]},box(e,t,o){return o&&!(t?Nl[o]:Ll[o])?!1:es(e,t)},get floor(){return e3}};a3.exports=BM});var i3=ke((lz,s3)=>{"use strict";var jM=Bu(),WM=Sh();function VM(e){let t=new DataView(e);if(String.fromCharCode(t.getUint8(0),t.getUint8(1),t.getUint8(2),t.getUint8(3))!=="STAT")throw new Error("Not a statue file");let n=t.getUint32(4,!0),r=t.getUint32(8,!0),a=[],s=[];for(let d=0;d<3;d++)a.push(t.getFloat32(12+d*4,!0)),s.push(t.getFloat32(24+d*4,!0));let i=36,c=new Uint16Array(e,i,n*3);i+=n*6;let f=new Uint16Array(e,i,r);i+=r*2;let l=new Int8Array(e,i,n*3);return{nV:n,nI:r,mn:a,sz:s,pos:c,idx:f,nrm:l}}s3.exports=(e,t)=>{let o=[],n=[],r=[],a=[],s=null,i=t.statues.length,c=[],f=(d,h)=>{let v=o.length/3,u=h.height*.75,p=h.base!==void 0?h.base:t.pedestalTop;c.push({offset:a.length,count:d.nI,box:[h.x-u,p-.1,h.z-u,h.x+u,p+h.height+.2,h.z+u]});let m=h.height,g=Math.cos(h.yaw),y=Math.sin(h.yaw),b=h.base!==void 0?h.base:t.pedestalTop;for(let w=0;w<d.nV;w++){let M=(d.mn[0]+d.pos[w*3]/65535*d.sz[0])*m,k=(d.mn[1]+d.pos[w*3+1]/65535*d.sz[1])*m,z=(d.mn[2]+d.pos[w*3+2]/65535*d.sz[2])*m;o.push(h.x+g*M+y*z,b+k,h.z-y*M+g*z);let P=d.nrm[w*3]/127,R=d.nrm[w*3+1]/127,U=d.nrm[w*3+2]/127;n.push(g*P+y*U,R,-y*P+g*U),r.push(h.mat||1,0,0)}for(let w=0;w<d.nI;w++)a.push(v+d.idx[w])},l=()=>{a.length!==0&&(s=jM(e,{position:o,normal:n,mat:r,elements:a,lights:t.lights,get viewer(){return t.viewer}},!1,!0))};return t.statues.forEach(d=>{fetch("res/"+d.file).then(h=>{if(!h.ok)throw new Error("Could not load "+d.file);return h.arrayBuffer()}).then(h=>f(VM(h),d)).catch(h=>console.error(h)).then(()=>{--i===0&&l()})}),function(d){if(!s)return;let h=!!(d&&d.reflected),v=c.filter(u=>WM.box(u.box,h));v.length&&s(v)}}});var x3=ke((fz,sd)=>{"use strict";var XM=Is(),Kn=1.29032,Bs=[9.2968,2,5.9],YM=[[.767398,.00185,-.10827],[.010515,.769952,.087681],[-.107774,.08829,-.762374]],Eh=2147.64,c3=725,l3=1288,f3=1450,h3=2576,Jr=-5.197,Ws=3.865,ts=10.135,Vs=-14.679,Ol=-30.229,Cl=7.232,u3=-45.713,lc=17.1*Kn,js=16.6*Kn,Pl=16.6*Kn,d3=[6.9,17.1],Ah=[2.95,16.6],KM=1.6,QM=0,ZM=1,p3=2,ad=3,v3=4,m3=5,JM=6;function e8(){let e=[],t=[],o=[],n=[],r=XM.createBuilder(e,t,o,n),a=(f,l,d,h,v,u,p=1,m=1)=>{let g=[];for(let y=0;y<=p;y++){let b=[];for(let w=0;w<=m;w++){let M=[f[0]+l[0]*y/p+d[0]*w/m,f[1]+l[1]*y/p+d[1]*w/m,f[2]+l[2]*y/p+d[2]*w/m],k=u(M);b.push(r.vert(M,h,[v,k[0],k[1]]))}g.push(b)}for(let y=0;y<p;y++)for(let b=0;b<m;b++)r.tri(g[y][b],g[y+1][b],g[y][b+1]),r.tri(g[y+1][b],g[y+1][b+1],g[y][b+1])},s=f=>l=>[(Bs[2]-l[2])/Kn-f,l[1]/Kn];a([-60,0,-.36],[130,0,0],[0,0,-140],[0,1,0],QM,f=>[f[0]/Kn,f[2]/Kn],13,14),a([Ws,0,Jr],[0,0,Vs-Jr],[0,lc,0],[1,0,0],ZM,s(8.6),6,6),a([-40,0,Jr],[Ws+40,0,0],[0,lc,0],[0,0,1],p3,f=>[(Ws-f[0])/Kn,f[1]/Kn],8,4),a([-40,0,-.36],[0,0,Jr+.36],[0,lc,0],[1,0,0],p3,f=>[-f[2]/Kn,f[1]/Kn]),a([ts,0,-80],[0,0,Jr+80],[0,js,0],[-1,0,0],v3,s(8.6),12,6),a([ts,0,Jr],[60,0,0],[0,js,0],[0,0,1],m3,f=>[(f[0]-ts)/Kn,f[1]/Kn],8,4),a([70,0,Jr],[0,0,-.36-Jr],[0,js,0],[-1,0,0],m3,f=>[-f[2]/Kn,f[1]/Kn]);let i=f=>[(f[0]-Bs[0])/Kn+4.18,f[1]/Kn];a([-20,0,Ol],[Cl+20,0,0],[0,Pl,0],[0,0,1],ad,i,8,6),a([Cl,0,Ol],[0,0,u3-Ol],[0,Pl,0],[1,0,0],ad,s(28),4,4),a([Cl,0,u3],[ts-Cl,0,0],[0,js,0],[0,0,1],v3,f=>[(f[0]-Bs[0])/Kn,f[1]/Kn],2,4),a([-20,0,Vs],[0,0,Ol-Vs],[0,Pl,0],[1,0,0],ad,s(16),4,4);let c=(f,l,d,h)=>a(f,l,d,h,JM,()=>[0,0],4,4);return c([-300,-20,-300],[600,0,0],[0,320,0],[0,0,1]),c([-300,300,-300],[600,0,0],[0,0,300],[0,-1,0]),c([-300,-20,0],[0,0,-300],[0,320,0],[1,0,0]),c([300,-20,-300],[0,0,300],[0,320,0],[-1,0,0]),{position:e,normal:t,elements:o,attr:n}}function Us(e,t,o,n){let r=e.texture({data:[[n]],...o,min:"linear",mag:"linear"});return fetch(t).then(a=>{if(!a.ok)throw new Error("Could not load "+t);return a.blob()}).then(a=>createImageBitmap(a)).then(a=>{r({data:a,...o,min:"mipmap",mipmap:"nice",mag:"linear"})}).catch(a=>console.error(a)),r}var Va=e=>"vec3("+e.map(t=>t.toFixed(4)).join(", ")+")",t8=[[[-.35,0,-.35],[14.35,9.2,50]],[[-40,0,Vs],[Ws,lc,Jr]],[[ts,0,-80],[70,js,Jr]],[[-20,0,-80],[Cl,Pl,Ol]],[[-40,0,-80],[-20,Pl,Vs]]],o8=t8.map(e=>`if (hitBox(ro, rd, ${Va(e[0])}, ${Va(e[1])}, 1e4) ) return 0.0;`).join(`
		`),g3="mat3("+[0,1,2].map(e=>[0,1,2].map(t=>YM[t][e].toFixed(6)).join(", ")).join(", ")+")",n8=`
precision highp float;

uniform sampler2D photo, photoNight, photoMask, pinkTex, yellowTex, creamTex, cobbleTex;
uniform float time;
uniform float night;   // 0 by day, 1 at night

varying vec3 v_pos;
varying vec3 v_normal;
varying vec3 v_attr;
varying vec3 v_eye;

const vec3 SUN = ${Va([-.25,.4,.88].map(e=>e/Math.hypot(-.25,.4,.88)))};

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
	${o8}
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
	vec3 ro = ${Va(Bs)};
	vec3 rd = p - ro;
	if (hitBox(ro, rd, ${Va([-40,0,Vs])}, ${Va([Ws-.02,lc,Jr])}, 0.995)) return false;
	if (hitBox(ro, rd, ${Va([ts+.02,0,-80])}, ${Va([70,js,Jr])}, 0.995)) return false;
	return true;
}

// is this point sky in the photo? (only meaningful inside the photo)
bool photoSky(vec3 p) {
	vec3 pc = ${g3} * (p - ${Va(Bs)});
	if (pc.z < 0.2) return false;
	vec2 uv = vec2(
		(${c3.toFixed(2)} + ${Eh.toFixed(3)} * pc.x / pc.z) / ${f3.toFixed(1)},
		(${l3.toFixed(2)} - ${Eh.toFixed(3)} * pc.y / pc.z) / ${h3.toFixed(1)}
	);
	if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) return false;
	return texture2D(photoMask, uv).r < 0.5;
}

// photo colour and how much to trust it (0..1)
vec4 photoAt(vec3 p, vec3 n, vec3 eye) {
	vec3 pc = ${g3} * (p - ${Va(Bs)});
	if (pc.z < 0.2) return vec4(0.0);
	vec2 uv = vec2(
		(${c3.toFixed(2)} + ${Eh.toFixed(3)} * pc.x / pc.z) / ${f3.toFixed(1)},
		(${l3.toFixed(2)} - ${Eh.toFixed(3)} * pc.y / pc.z) / ${h3.toFixed(1)}
	);
	vec2 e = min(uv, 1.0 - uv);
	float w = smoothstep(0.002, 0.02, min(e.x, e.y));
	if (w <= 0.0) return vec4(0.0);
	w *= smoothstep(0.35, 0.75, texture2D(photoMask, uv).r);
	if (w <= 0.0) return vec4(0.0);
	if (!photoSees(p)) return vec4(0.0);
	// if we see this surface much more square-on than the photo did,
	// the photo would look smeared: hand over to the painted facade
	float camCos = abs(dot(normalize(p - ${Va(Bs)}), n));
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
		base = texture2D(cobbleTex, fuv / ${KM.toFixed(2)}).rgb;
	} else if (kind < 2.5) {
		base = texture2D(pinkTex, vec2(fuv.x / ${d3[0].toFixed(2)}, 1.0 - fuv.y / ${d3[1].toFixed(2)})).rgb;
	} else if (kind < 3.5) {
		base = texture2D(yellowTex, vec2(fuv.x / ${Ah[0].toFixed(2)}, 1.0 - fuv.y / ${Ah[1].toFixed(2)})).rgb;
	} else {
		base = texture2D(creamTex, vec2(fuv.x / ${Ah[0].toFixed(2)}, 1.0 - fuv.y / ${Ah[1].toFixed(2)})).rgb;
	}

	// ---------- the photograph, where it can be trusted ----------
	bool projectable = kind < 0.5 || (kind > 0.5 && kind < 1.5) || (kind > 2.5 && kind < 4.5);
	if (kind < 0.5) {
		// the photo only shows ground inside the alley, or beyond its corners
		bool inAlley = v_pos.x > ${(Ws-.05).toFixed(3)} && v_pos.x < ${(ts+.05).toFixed(3)};
		projectable = inAlley || v_pos.z < ${Vs.toFixed(3)};
		projectable = projectable && v_pos.z < ${(Jr+4.5).toFixed(3)};
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
}`,r8=`
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
}`,a8=ar();sd.exports=e=>{let t=e8(),o={wrapS:"clamp",wrapT:"clamp",flipY:!1},n={wrapS:"mirror",wrapT:"clamp",flipY:!1},r={wrapS:"repeat",wrapT:"repeat",flipY:!1},a=Us(e,"res/street/photo.jpg",o,[190,160,120]),s=Us(e,"res/street/photo_night.jpg",o,[12,14,22]),i=Us(e,"res/street/photo_mask.png",o,[255,255,255]),c=Us(e,"res/street/facade_pink.jpg",n,[200,150,135]),f=Us(e,"res/street/facade_yellow.jpg",n,[225,180,95]),l=Us(e,"res/street/facade_cream.jpg",n,[215,200,175]),d=Us(e,"res/street/cobbles.jpg",r,[95,95,95]),h=Date.now(),v=e({frag:n8,vert:r8,attributes:{position:t.position,normal:t.normal,attr:t.attr},elements:new Uint32Array(t.elements),uniforms:{photo:a,photoMask:i,pinkTex:c,yellowTex:f,creamTex:l,cobbleTex:d,photoNight:s,night:()=>a8.night,time:()=>(Date.now()-h)/1e3}});return function(){v()}};sd.exports.layout={MOUTH_Z:Jr,PINK_X:Ws,RIGHT_X:ts,PINK_H:lc,CREAM_H:js,S:Kn}});var w3=ke((hz,b3)=>{"use strict";var s8=ar().GLSL,{glassPanes:i8}=H0(),y3=br();function c8(){let e=[],t=[],o=(n,r)=>{for(let a of n)e.push(a),t.push(r)};return o(i8(),[0,0,1]),o(y3.windowGlass(),[0,0,1]),o(y3.farDoorGlass(),[1,0,0]),{position:e,normal:t}}b3.exports=e=>{let t=c8(),o=e({frag:`
		precision highp float;
		${s8}
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
		}`,attributes:{position:t.position,normal:t.normal},count:t.position.length,cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}});return function(){o()}}});var F3=ke((uz,hd)=>{"use strict";var A3=ar().GLSL,l8=Is(),id=Ma(),{wallWithHoles:f8,C:rs}=br(),vt=.28,te={westBack:14.4,westCol:15-vt,eastCol:37.4+vt,eastBack:41.8,south:rs.z1+.7,northCol:rs.z1+.7+16,northBack:rs.z1+.7+19,cx:(15+37.4)/2,cz:(rs.z1+.7+rs.z1+.7+16-vt)/2},Do={x0:te.westCol+vt,x1:te.eastCol-vt,z0:te.south,z1:te.northCol-vt},Ar=3.3,Fl=.92,as=5.6,_3=6,La=11.9,ns=9.6,mo={x0:te.cx-2.9,x1:te.cx+2.9,top:14.4},Ch=7,z3=4,ld=(te.eastCol-te.westCol)/Ch,h8=(te.northCol-te.south)/z3,T3=3,Dl=.26,Qs=1.4,Ys=1.1,Th=3,c0=(()=>{let e=[.3,.82,-.49],t=Math.hypot(...e);return e.map(o=>o/t)})(),rt={GROUND:0,BRICK:1,STONE:2,MARBLE:3,HEDGE:4,POT:5,ROOF:6,SHUTTER:7,PANE:8,PLASTER:9,BARK:10,IRON:11,SKY:12,LEAD:13,FARBRICK:14,DARK:15,SOIL:16},l0=[],L3=(e,t,o)=>[te.cx+e,t,te.cz+o],Lh=L3(-5.9,0,3.4),ss=.85,os={c:[Lh[0],4.6*ss+.5,Lh[2]],r:[5*ss,3.6*ss,4.5*ss]},N3=[{d:[0,4.4,0],r:[3.9,2.6,3.6],n:230},{d:[-2.7,4,-1.2],r:[2.6,2.1,2.4],n:105},{d:[2.7,4.5,-1.6],r:[2.5,2.2,2.3],n:105},{d:[.8,6.9,.8],r:[2.6,2,2.5],n:105},{d:[-1.6,6.1,2],r:[2.2,1.9,2],n:80},{d:[2.3,3.4,1.8],r:[2,1.5,1.9],n:60}].map(e=>({c:[Lh[0]+e.d[0]*ss,e.d[1]*ss+.5,Lh[2]+e.d[2]*ss],r:e.r.map(t=>t*ss),n:e.n}));for(let e of N3)l0.push({...e,cell:0,leaf:[.5,.7,.46],bloom:[1,1,1],size:[.95,1.35],magnolia:1,shadow:1});var u8=[3.6,6.3,9];for(let e of u8){let t=8.6+e%1.7*.6;l0.push({c:L3(e,t/2+.5,5.2),r:[.9,t/2,.9],cell:1,leaf:[.5,.64,.5],bloom:[1,1,1],n:180,size:[.72,.98],spindle:1,shadow:1})}var d8=[{d:[-8.4,-4],bloom:[1,.62,.78]},{d:[-3.6,-4.6],bloom:[1,.98,.94]},{d:[3.8,-4.3],bloom:[1,.98,.94]},{d:[8.5,-4],bloom:[1,.58,.72]}].map(e=>({x:te.cx+e.d[0],z:te.cz+e.d[1],bloom:e.bloom}));for(let e of d8)l0.push({c:[e.x,.95,e.z],r:[1.25,.95,1.1],cell:3,leaf:[.7,.86,.58],bloom:e.bloom,n:80,size:[.55,.8],shadow:1});var fd=[45,135,225,315].map(e=>{let t=e*Math.PI/180;return[te.cx+Math.cos(t)*2.3,te.cz+Math.sin(t)*2.3]});for(let[e,t]of fd)l0.push({c:[e,1.85,t],r:[.62,.55,.62],cell:3,leaf:[.78,.95,.55],bloom:[1.25,1,.25],n:36,size:[.32,.42],shadow:1});var R3=[];{let e=(o,n,r,a,s,i)=>{let c=Math.hypot(r-o,a-n),f=Math.floor(c/.9);for(let l=0;l<=f;l++){let d=l/f,h=o+(r-o)*d,v=n+(a-n)*d;s!==void 0&&Math.abs((r!==o?h:v)-s)<i||R3.push([h,v])}};e(Do.x0+.45,Do.z0+1.2,Do.x0+.45,Do.z1-.45,te.cz,1),e(Do.x1-.45,Do.z0+1.2,Do.x1-.45,Do.z1-.45,te.cz,1),e(Do.x0+.45,Do.z1-.45,Do.x1-.45,Do.z1-.45,te.cx,1.9)}var p8=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],Nh=e=>{let t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]};function hc(e,t,o,n,r,a,s){let i=e.vert(t,a,s),c=e.vert(o,a,s),f=e.vert(n,a,s),l=e.vert(r,a,s);e.tri(i,c,f),e.tri(i,f,l)}function Qn(e,t,o,n,r,a,s,i){e.box(Math.min(t,r),Math.min(o,a),Math.min(n,s),Math.max(t,r),Math.max(o,a),Math.max(n,s),[i,0,0])}function v8(e,t,o){return{vert:(n,r,a)=>e.vert(t(n),o(r),a),tri:e.tri}}var m8={north:[e=>[e[0],e[1],te.northCol-e[2]],e=>[e[0],e[1],-e[2]]],west:[e=>[te.westCol+e[2],e[1],e[0]],e=>[e[2],e[1],e[0]]],east:[e=>[te.eastCol-e[2],e[1],e[0]],e=>[-e[2],e[1],e[0]]]};function O3(e,t,o,n,r){let a=[];for(let s=0;s<o;s++){let i=e+s*t+(s===0?n:.02),c=e+(s+1)*t-(s===o-1?r:.02);a.push([i,c,e+(s+.5)*t])}return a}var g8=O3(te.westCol,ld,Ch,vt+Dl,vt+Dl),M3=O3(te.south,h8,z3,.32,vt+Dl),fc=[te.cx-32.35,te.northCol-77],x8=Array.from({length:Ch-1},(e,t)=>te.westCol+(t+1)*ld),C3=e=>(e[1]-e[0])/2-.2,ql=e=>(e[0]+e[1])/2;function y8(e,t){let o=ql(e),n=C3(e);return{u0:e[0],u1:e[1],bottom:t?0:Fl,head:r=>{let a=Math.abs(r-o);return a<n?Ar+Math.sqrt(n*n-a*a):Ar},step:.05}}function b8(e,t,o){return{u0:e-o,u1:e+o,bot:n=>t-Math.sqrt(Math.max(0,o*o-(n-e)*(n-e))),head:n=>t+Math.sqrt(Math.max(0,o*o-(n-e)*(n-e))),step:.04,mat:[rt.STONE,0,0]}}function w8(e,t,o,n){return{u0:e-t/2,u1:e+t/2,bottom:o,head:()=>n,step:.5,mat:[rt.STONE,0,0]}}function k3(e,t,o){let[n,r]=m8[t],a=v8(e,n,r),s=[];o.arches.forEach((l,d)=>s.push(y8(l,d===o.open)));let i=[];for(let l of o.bays||o.arches){let d=ql(l);o.oculi&&s.push(b8(d,6.85,.3)),i.push({c:d,y0:o.win[0],y1:o.win[1],w:1.05})}for(let l of o.extraWindows||[])i.push(l);for(let l of i)s.push(w8(l.c,l.w,l.y0,l.y1));for(let l of o.extraHoles||[])s.push(l);f8(a,{u0:o.u0,u1:o.u1,w0:-vt,w1:vt,top:o.top,holes:s,mat:[rt.BRICK,0,0],revealMat:[rt.BRICK,0,0],noEnds:o.noEnds,cuts:o.cuts,topStep:.25});let c=(l,d,h,v,u,p,m)=>{let g=n([l,d,h]),y=n([v,u,p]);Qn(e,g[0],g[1],g[2],y[0],y[1],y[2],m)},f=(l,d,h,v,u,p)=>hc(a,l,d,h,v,u,[p,0,0]);for(let l of o.arches){let d=ql(l),h=C3(l),v=28;for(let u of[vt,-vt]){let p=u>0?1:-1,m=u+p*.025;for(let g=0;g<v;g++){let y=Math.PI*g/v,b=Math.PI*(g+1)/v,w=(D,Y)=>[d+Math.cos(D)*Y,Ar+Math.sin(D)*Y],M=w(y,h),k=w(b,h),z=w(y,h+.26),P=w(b,h+.26);f([M[0],M[1],m],[k[0],k[1],m],[P[0],P[1],m],[z[0],z[1],m],[0,0,p],rt.STONE);let R=Math.cos((y+b)/2),U=Math.sin((y+b)/2);f([z[0],z[1],u],[P[0],P[1],u],[P[0],P[1],m],[z[0],z[1],m],[R,U,0],rt.STONE)}}}if(o.arches.forEach((l,d)=>{d!==o.open&&c(l[0]-.02,Fl,-vt-.05,l[1]+.02,Fl+.09,vt+.05,rt.STONE)}),c(o.u0,_3,-vt,o.u1,_3+.18,vt+.09,rt.STONE),c(o.u0,o.win[0]-.12,vt-.01,o.u1,o.win[0],vt+.06,rt.STONE),o.cornice)for(let[l,d,h]of o.cornice)c(l,h-.22,vt-.01,d,h,vt+.16,rt.STONE),c(l,h,vt-.01,d,h+.16,vt+.42,rt.STONE);for(let{c:l,y0:d,y1:h,w:v,door:u}of i){let p=v/2;if(f([l-p-.01,d,.06],[l+p+.01,d,.06],[l+p+.01,h,.06],[l-p-.01,h,.06],[0,0,1],u?rt.DARK:rt.PANE),u){c(l-p-.16,0,vt-.01,l-p,h+.16,vt+.07,rt.STONE),c(l+p,0,vt-.01,l+p+.16,h+.16,vt+.07,rt.STONE),c(l-p-.16,h,vt-.01,l+p+.16,h+.2,vt+.09,rt.STONE),c(l-p,0,.07,l+p,h-.02,.12,rt.SHUTTER),c(l-.012,0,.12,l+.012,h-.02,.14,rt.DARK);continue}for(let m of[-1,1]){let g=l+m*p;c(g+m*.02,d+.02,vt+.02,g+m*(p+.025),h-.02,vt+.06,rt.SHUTTER)}c(l-p-.09,h,vt-.01,l+p+.09,h+.16,vt+.05,rt.STONE),c(l-p-.09,d-.1,vt-.01,l+p+.09,d,vt+.09,rt.STONE),c(l-.015,d,.06,l+.015,h,.09,rt.SHUTTER),c(l-p,(d+h)/2-.015,.06,l+p,(d+h)/2+.015,.09,rt.SHUTTER)}if(o.oculi)for(let l of o.bays||o.arches){let d=ql(l);f([d-.31,6.54,0],[d+.31,6.54,0],[d+.31,7.16,0],[d-.31,7.16,0],[0,0,1],rt.DARK)}for(let l of o.cols){let d=Fl+.09,h=n([l,0,0]);Qn(e,h[0]-.24,d,h[2]-.24,h[0]+.24,d+.12,h[2]+.24,rt.MARBLE),e.lathe([[.23,d+.12,1],[.24,d+.17],[.2,d+.24],[.215,d+.28],[.17,d+.34,1],[.165,d+.6],[.155,Ar-.5],[.15,Ar-.38,1],[.175,Ar-.34,1],[.17,Ar-.3],[.2,Ar-.22],[.27,Ar-.15],[.29,Ar-.12,1]],h[0],h[2],18,{mat:()=>[rt.MARBLE,0,0]}),Qn(e,h[0]-.29,Ar-.12,h[2]-.29,h[0]+.29,Ar+.01,h[2]+.29,rt.STONE)}o.walk&&o.walk(e)}function _8(e){let t=[-1,0,1].map(r=>{let a=te.cx+r*1.7;return{u0:a-.6,u1:a+.6,bottom:11,head:s=>12.9+Math.sqrt(Math.max(0,.36-(s-a)*(s-a))),step:.04,mat:[rt.STONE,0,0]}});k3(e,"north",{u0:te.westCol-vt,u1:te.eastCol+vt,top:r=>r>mo.x0+1e-6&&r<mo.x1-1e-6?mo.top:La,cuts:[mo.x0,mo.x0+1e-5,mo.x1-1e-5,mo.x1],arches:g8,open:T3,cols:x8,oculi:!0,win:[8,9.9],extraHoles:t,cornice:[[te.westCol-vt-3.3,mo.x0,La],[mo.x1,te.eastCol+vt+3.3,La],[mo.x0-.2,mo.x1+.2,mo.top]],walk:r=>{Qn(r,Do.x0,as,te.northCol+vt,Do.x1,as+.2,te.northBack,rt.PLASTER),Qn(r,Do.x0,0,te.northBack,Do.x1,as,te.northBack+.3,rt.PLASTER);for(let a of[te.cx-7.2,te.cx,te.cx+7.2])hc(r,[a-.8,0,te.northBack-.01],[a+.8,0,te.northBack-.01],[a+.8,2.9,te.northBack-.01],[a-.8,2.9,te.northBack-.01],[0,0,-1],[rt.DARK,0,0]),Qn(r,a-.98,0,te.northBack-.06,a+.98,3.12,te.northBack,rt.STONE),hc(r,[a-.8,0,te.northBack-.07],[a+.8,0,te.northBack-.07],[a+.8,2.9,te.northBack-.07],[a-.8,2.9,te.northBack-.07],[0,0,-1],[rt.DARK,0,0])}}),hc(e,[mo.x0,11,te.northCol+.2],[mo.x1,11,te.northCol+.2],[mo.x1,13.6,te.northCol+.2],[mo.x0,13.6,te.northCol+.2],[0,0,-1],[rt.DARK,0,0]),Qn(e,mo.x0+.3,10.88,te.northCol-vt-.06,mo.x1-.3,11,te.northCol-vt+.1,rt.STONE),Qn(e,te.westBack,as+.2,te.northBack,te.eastBack,La,te.northBack+3.4,rt.BRICK),Qn(e,te.westBack,ns,te.northCol-vt,te.westCol-vt,La,te.northCol+vt,rt.BRICK),Qn(e,te.eastCol+vt,ns,te.northCol-vt,te.eastBack,La,te.northCol+vt,rt.BRICK),Qn(e,te.westBack,as+.2,te.northCol+vt+.12,te.eastBack,La,te.northBack,rt.BRICK),Il(e,[te.westBack-.5,La+.16,te.northCol-vt-.42],[mo.x0-te.westBack+.5,0,0],[0,2.6,4.4],rt.ROOF),Il(e,[mo.x1,La+.16,te.northCol-vt-.42],[te.eastBack+.5-mo.x1,0,0],[0,2.6,4.4],rt.ROOF),Il(e,[mo.x0-.3,mo.top+.16,te.northCol-vt-.42],[mo.x1-mo.x0+.6,0,0],[0,1.4,3],rt.ROOF),S3(e,[mo.x0-.3,mo.top+.16,te.northCol-vt-.42],[mo.x0-.3,mo.top+1.56,te.northCol-vt+2.58],[mo.x0-.3,mo.top+.16,te.northCol-vt+2.58],[-1,0,0],rt.BRICK),S3(e,[mo.x1+.3,mo.top+.16,te.northCol-vt-.42],[mo.x1+.3,mo.top+1.56,te.northCol-vt+2.58],[mo.x1+.3,mo.top+.16,te.northCol-vt+2.58],[1,0,0],rt.BRICK),Qn(e,mo.x0,La,te.northCol+vt,mo.x1,mo.top,te.northCol+2.6,rt.BRICK);for(let[r,a]of[[te.cx-9.8,te.northBack+.6],[te.cx+9.4,te.northBack+.4],[te.cx-4.6,te.northBack+1]])Qn(e,r-.4,12.5,a-.4,r+.4,15.4,a+.4,rt.BRICK),Qn(e,r-.52,15.4,a-.52,r+.52,15.62,a+.52,rt.STONE);let o=(r,a,s)=>{let i=r==="west"?-1:1,c=[];M3.forEach((d,h)=>{let v=ql(d);h===1?c.push({c:v,y0:0,y1:2.9,w:1.4,door:!0}):c.push({c:v,y0:1,y1:2.75,w:1.05}),c.push({c:v,y0:3.85,y1:5.45,w:1.05})}),k3(e,r,{u0:te.south,u1:te.northCol-vt,top:()=>ns,arches:[],bays:M3,cols:[],win:[7.45,8.85],extraWindows:c,noEnds:!0,cornice:[[te.south,te.northCol-vt,ns]]}),Qn(e,a,0,te.south,s+i*(vt+.12),ns,te.northBack+.3,rt.BRICK);let f=s-i*vt;Qn(e,f,0,te.south,f-i*.06,.55,te.northCol-vt,rt.STONE);let l=s-i*(vt+.42);Il(e,[l,ns+.16,te.south],[0,0,te.northCol-vt-te.south],[a-l+i*.4,1.9,0],rt.ROOF)};o("west",te.westBack,te.westCol),o("east",te.eastBack,te.eastCol);let n=rs.x1+.7;Qn(e,13.65,7.4,te.south-.02,n,7.62,te.south+.14,rt.STONE),Qn(e,13.65,10.4,te.south-.02,n,10.6,te.south+.38,rt.STONE),Il(e,[13.65,10.6,te.south+.38],[n-13.65,0,0],[0,2.2,-5],rt.ROOF)}function S3(e,t,o,n,r,a){let s=[a,0,0];e.tri(e.vert(t,r,s),e.vert(o,r,s),e.vert(n,r,s))}function Il(e,t,o,n,r){let a=Nh([o[1]*n[2]-o[2]*n[1],o[2]*n[0]-o[0]*n[2],o[0]*n[1]-o[1]*n[0]]),s=a[1]<0?a.map(f=>-f):a,i=(f,l)=>[t[0]+o[0]*f+n[0]*l,t[1]+o[1]*f+n[1]*l,t[2]+o[2]*f+n[2]*l];hc(e,i(0,0),i(1,0),i(1,1),i(0,1),s,[r,0,0]);let c=.08;hc(e,i(0,0),i(1,0),[i(1,0)[0],i(1,0)[1]-c,i(1,0)[2]],[i(0,0)[0],i(0,0)[1]-c,i(0,0)[2]],Nh([-n[0],0,-n[2]]),[r,0,0])}function M8(e){let t=te.westBack,o=te.eastBack,n=te.south,r=te.northBack,a=36,s=22,i=[];for(let c=0;c<=a;c++){i.push([]);for(let f=0;f<=s;f++){let l=[t+(o-t)*c/a,0,n+(r-n)*f/s];i[c].push(e.vert(l,[0,1,0],[rt.GROUND,0,0]))}}for(let c=0;c<a;c++)for(let f=0;f<s;f++)e.tri(i[c][f],i[c+1][f],i[c+1][f+1]),e.tri(i[c][f],i[c+1][f+1],i[c][f+1])}var $l=.46,Ks=.58,Xs=[[-.5,0],[-.52,.45],[-.46,.78],[-.3,.95],[0,1],[.3,.95],[.46,.78],[.52,.45],[.5,0]];function k8(e,t,o){let n=Ys+o,r=(e>0?Do.x1-te.cx:te.cx-Do.x0)-Qs-o,a=Ys+o,s=(t>0?Do.z1-te.cz:te.cz-Do.z0)-Qs-o,i=Th+o,c=Math.sqrt(i*i-n*n),f=Math.sqrt(i*i-a*a),l=[[n,c],[n,s],[r,s],[r,a],[f,a]],d=Math.atan2(a,f),h=Math.atan2(c,n);for(let v=1;v<10;v++){let u=d+(h-d)*v/10;l.push([Math.cos(u)*i,Math.sin(u)*i])}return l.map(([v,u])=>[te.cx+e*v,te.cz+t*u])}function S8(e,t,o){let n=o[0]-t[0],r=o[1]-t[1],a=Math.hypot(n,r),s=n/a,i=r/a,c=-i,f=s,l=$l*.5,d=-l,h=a+l,v=[],u=Math.max(1,Math.ceil((h-d)/1));for(let p=0;p<=u;p++){let m=d+(h-d)*p/u,g=[];for(let y=0;y<Xs.length;y++){let[b,w]=Xs[y],M=Math.min(Xs.length-2,y),k=Xs[Math.max(0,y-1)],z=Xs[Math.min(Xs.length-1,y+1)],P=(z[0]-k[0])*$l,U=(z[1]-k[1])*Ks,D=-P,Y=Math.hypot(U,D)||1,I=[t[0]+s*m+c*b*$l,w*Ks,t[1]+i*m+f*b*$l],j=[c*(-U/Y),-D/Y,f*(-U/Y)];g.push(e.vert(I,j[1]<-.2?[c*Math.sign(b),.3,f*Math.sign(b)]:j,[rt.HEDGE,0,0]))}v.push(g)}for(let p=0;p<u;p++)for(let m=0;m<Xs.length-1;m++)e.tri(v[p][m],v[p+1][m],v[p+1][m+1]),e.tri(v[p][m],v[p+1][m+1],v[p][m+1]);for(let[p,m]of[[0,-1],[u,1]]){let g=v[p],y=e.vert([t[0]+s*(p?h:d),Ks*.5,t[1]+i*(p?h:d)],[s*m,0,i*m],[rt.HEDGE,0,0]);for(let b=0;b<g.length-1;b++)e.tri(y,g[b],g[b+1])}}function E8(e){for(let t of[-1,1])for(let o of[-1,1]){let n=k8(t,o,.3);for(let r=0;r<n.length;r++)S8(e,n[r],n[(r+1)%n.length])}}function A8(e){let t=te.cx,o=te.cz,n=()=>[rt.STONE,0,0];e.lathe([[1.45,0,1],[1.45,.14,1],[1.12,.14,1],[1.12,.3,1],[0,.3]],t,o,8,{mat:n}),e.lathe([[.76,.3,1],[.8,.38,1],[.74,.44],[.76,.7],[.82,.9],[.8,1.02,1],[.88,1.06,1],[.88,1.18,1],[.6,1.18,1],[.6,.98]],t,o,24,{mat:n}),e.lathe([[.6,.98,1],[0,.98]],t,o,16,{mat:()=>[rt.DARK,0,0]});let r={mat:()=>[rt.IRON,0,0]};e.tube([[t-.72,1.1,o],[t-.72,1.9,o],[t-.7,2.3,o]],()=>.035,8,6,r),e.tube([[t+.72,1.1,o],[t+.72,1.9,o],[t+.7,2.3,o]],()=>.035,8,6,r);let a=[];for(let s=0;s<=10;s++){let i=Math.PI*s/10;a.push([t-Math.cos(i)*.7,2.3+Math.sin(i)*.45,o])}e.tube(a,()=>.03,20,6,r),e.tube([[t-.45,2.25,o],[t,2.38,o],[t+.45,2.25,o]],()=>.02,8,5,r),e.ellipsoid([t,2.32,o],[.03,.13,.13],6,10,r);for(let s of[-1,1]){let i=[];for(let c=0;c<=12;c++){let f=c/12*Math.PI*1.6,l=.16*(1-c/16);i.push([t+s*(.72-.18+Math.cos(f)*l*s*-1+0),1.95+Math.sin(f)*l,o])}e.tube(i,()=>.016,16,5,r)}}function z8(e){for(let[t,o]of fd)e.lathe([[.26,0,1],[.3,.06],[.36,.42],[.38,.5,1],[.44,.52,1],[.44,.64,1],[.38,.66,1],[.37,.6]],t,o,20,{mat:()=>[rt.POT,0,0]}),e.lathe([[.37,.6,1],[0,.6]],t,o,12,{mat:()=>[rt.SOIL,0,0]}),e.tube([[t,.6,o],[t+.02,1,o-.01],[t-.01,1.45,o+.02]],n=>.045-n*.02,6,6,{mat:()=>[rt.BARK,0,0]})}function T8(e){let[t,,o]=os.c,n=I3(7),r=[[-1.8,.4,3.6],[1.6,-.9,3.9],[.4,1.9,3.4],[-.6,-1.7,4.2],[2.1,1.2,3.2]];for(let[a,s,i]of r){let c=[[t+a*.05,0,o+s*.05],[t+a*.25,i*.35,o+s*.25],[t+a*.6,i*.7,o+s*.6],[t+a,i,o+s],[t+a*1.35+(n()-.5),i+1.4,o+s*1.35+(n()-.5)]];e.tube(c,f=>.2*(1-f*.75),14,9,{mat:()=>[rt.BARK,0,0]});for(let f=0;f<2;f++){let l=.55+f*.2,d=[t+a*l,i*l,o+s*l],h=n()*Math.PI*2;e.tube([d,[d[0]+Math.cos(h)*1.3,d[1]+.9,d[2]+Math.sin(h)*1.3],[d[0]+Math.cos(h)*2.3,d[1]+1.4+n(),d[2]+Math.sin(h)*2.3]],v=>.08*(1-v*.7),8,6,{mat:()=>[rt.BARK,0,0]})}}for(let a of l0.filter(s=>s.spindle))e.tube([[a.c[0],0,a.c[2]],[a.c[0],1.4,a.c[2]]],()=>.12,3,7,{mat:()=>[rt.BARK,0,0]})}function L8(e){let t=()=>[rt.FARBRICK,0,0],o=()=>[rt.LEAD,0,0],n=(a,s,i,c,f,l)=>{e.lathe([[i+.3,20,1],[i+.3,c-1.2,1],[i+.8,c-.9,1],[i+.8,c,1],[i,c,1]],a,s,28,{mat:t});let d=[];for(let v=0;v<=12;v++){let u=v/12*Math.PI/2,p=Math.cos(u)*i,m=Math.sin(u)*f;l&&(p*=1-.18*Math.sin(u*2)),d.push([Math.max(p,i*.12),c+m])}e.lathe(d,a,s,28,{mat:o});let h=c+f;e.lathe([[i*.13,h-.2,1],[i*.13,h+3,1],[i*.18,h+3.2,1],[i*.02,h+6.4]],a,s,10,{mat:o})};Qn(e,14,0,104,52,26,150,rt.FARBRICK),e.lathe([[3,26],[.1,32]],33,108,4,{mat:t}),n(26,124,7.2,33,9.5,!0),n(40.5,116,6,31,8,!0),n(16.5,117,5.5,30,7.2,!0),e.lathe([[6.4,20,1],[6.4,34,1],[6.9,34.4,1],[6,34.4,1],[.6,46.5,1],[.15,50]],33,132,24,{mat:o});let r=(a,s,i)=>{Qn(e,a-1.8,0,s-1.8,a+1.8,i,s+1.8,rt.FARBRICK),e.lathe([[1.9,i,1],[1.6,i+3.5,1],[1.2,i+3.5,1],[1.2,i+6,1],[.9,i+6.2,1],[.05,i+13]],a,s,8,{mat:t})};r(20.5,109,36),r(46.5,112,38)}function N8(e){let o=[te.cx,0,te.cz],n=24,r=10,a=[];for(let s=0;s<=n;s++){a.push([]);let i=-Math.PI*.62+Math.PI*1.24*s/n;for(let c=0;c<=r;c++){let f=Math.PI/2*(c/r)-.05,l=[Math.sin(i)*Math.cos(f),Math.sin(f),Math.cos(i)*Math.cos(f)],d=[o[0]+l[0]*420,o[1]+l[1]*420,o[2]+l[2]*420];a[s].push(e.vert(d,[-l[0],-l[1],-l[2]],[rt.SKY,0,0]))}}for(let s=0;s<n;s++)for(let i=0;i<r;i++)e.tri(a[s][i],a[s+1][i],a[s+1][i+1]),e.tri(a[s][i],a[s+1][i+1],a[s][i+1])}function R8(){let e=[],t=[],o=[],n=[],r=l8.createBuilder(e,t,o,n);return M8(r),_8(r),E8(r),A8(r),z8(r),T8(r),r.save(),r.translate(fc[0],0,fc[1]),L8(r),r.restore(),N8(r),{position:e,normal:t,elements:o,attr:n}}var P3=[[[13.65,0,rs.z0-.7],[rs.x1+.7,10.6,te.south]],[[te.westBack,as,te.northCol-vt],[te.eastBack,La,te.northBack+3.4]],[[mo.x0,La,te.northCol-vt],[mo.x1,mo.top,te.northCol+2.6]],[[te.westBack,0,te.south],[te.westCol+vt,ns,te.northBack+.3]],[[te.eastCol-vt,0,te.south],[te.eastBack,ns,te.northBack+.3]],[[14+fc[0],0,104+fc[1]],[52+fc[0],26,150+fc[1]]]];function O8(e,t,o,n){let r=.001,a=1e9;for(let s=0;s<3;s++){if(Math.abs(t[s])<1e-9){if(e[s]<o[s]||e[s]>n[s])return!1;continue}let i=(o[s]-e[s])/t[s],c=(n[s]-e[s])/t[s];if(i>c&&([i,c]=[c,i]),r=Math.max(r,i),a=Math.min(a,c),r>a)return!1}return!0}function zh(e,t,o,n){let r=[(e[0]-o[0])/n[0],(e[1]-o[1])/n[1],(e[2]-o[2])/n[2]],a=[t[0]/n[0],t[1]/n[1],t[2]/n[2]],s=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],i=r[0]*a[0]+r[1]*a[1]+r[2]*a[2],c=r[0]*r[0]+r[1]*r[1]+r[2]*r[2]-1,f=i*i-s*c;if(f<=0)return 0;let l=Math.sqrt(f),d=Math.max(0,(-i-l)/s),h=(-i+l)/s;return Math.max(0,h-d)}function cd(e){for(let[t,o]of P3)if(O8(e,c0,t,o))return 0;return 1}function I3(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let o=t;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}function C8(){let e=[],t=[],o=[],n=[],r=[],a=[],s=[],i=I3(21),c=(u,p,m,g,y,b,w)=>{let M=e.length/3;for(let[k,z]of[[-1,-1],[1,-1],[1,1],[-1,1]])e.push(...u),t.push(k,z),o.push(p,m,g),n.push(...y),r.push(...b),a.push(...w);s.push(M,M+1,M+2,M,M+2,M+3)},f=(u,p)=>{let m=1;for(let g of l0){if(g===p||!g.shadow)continue;let y=zh(u,c0,g.c,g.r);y>0&&(m*=Math.exp(-y*.9))}return m},l=l0.map(u=>({...u,pts:null}));for(let u of l)for(let p=0;p<u.n;p++){let m;do m=[i()*2-1,i()*2-1,i()*2-1];while(m[0]*m[0]+m[1]*m[1]+m[2]*m[2]>1);let g=Math.hypot(m[0],m[1],m[2])||1,y=Math.pow(i(),.35)*.98,b=[m[0]/g*y,m[1]/g*y,m[2]/g*y];if(u.spindle){let I=b[1],j=Math.sqrt(Math.max(.02,1-I*I))*(I>0?1-I*.55:1+I*.25),ue=Math.hypot(b[0],b[2])||1,Ge=j*Math.min(1,ue*1.4);b=[b[0]/ue*Ge,I,b[2]/ue*Ge]}u.magnolia&&b[1]<-.55&&(b[1]=-.55+(b[1]+.55)*.35);let w=[u.c[0]+b[0]*u.r[0],u.c[1]+b[1]*u.r[1],u.c[2]+b[2]*u.r[2]],M,k;if(u.magnolia){let I=0;for(let Ge of N3)I=Math.max(I,zh(w,c0,Ge.c,Ge.r));M=Math.exp(-I*1.1);let j=1;for(let Ge of l0)if(!Ge.magnolia&&Ge.shadow){let Te=zh(w,c0,Ge.c,Ge.r);Te>0&&(j*=Math.exp(-Te*.9))}M*=cd(w)*j;let ue=p8(w,os.c);k=Nh([ue[0]/os.r[0]+b[0]*.5,ue[1]/os.r[1]+b[1]*.5,ue[2]/os.r[2]+b[2]*.5]),y=Math.min(1,Math.hypot(ue[0]/os.r[0],ue[1]/os.r[1],ue[2]/os.r[2])*.6+y*.4)}else{let I=zh(w,c0,u.c,u.r);M=Math.exp(-I*(u.spindle?2.2:1.25)),M*=cd(w)*f(w,l0[l.indexOf(u)]),k=Nh([b[0]/u.r[0],b[1]/u.r[1],b[2]/u.r[2]])}let z=Math.max(0,k[0]*c0[0]+k[1]*c0[1]+k[2]*c0[2]),P=.25+.75*Math.pow(y,1.5)*(.65+.35*(k[1]*.5+.5)),R=u.size[0]+(u.size[1]-u.size[0])*i(),U=.85+i()*.3,D=u.leaf.map(I=>I*U),Y=u.cell;u.cell===3&&i()<.35&&(Y=2),c(w,R,Y,i()*Math.PI*2,[M,P,.35+.65*z],D,u.bloom)}for(let[u,p]of R3){let m=i()<.5;for(let g=0;g<3;g++){let y=[u+(i()-.5)*.7,.28+i()*.22,p+(i()-.5)*.5],b=cd(y)*f(y,null);c(y,.32+i()*.12,i()<.7?3:2,i()*6.28,[b,.6+i()*.3,.8],[.75,.9,.6],m?[1,.55,.75]:[.85,.8,1.15])}}let d=s.length/6,h=Array.from({length:d},(u,p)=>p);for(let u=d-1;u>0;u--){let p=Math.floor(i()*(u+1));[h[u],h[p]]=[h[p],h[u]]}let v=[];for(let u of h)for(let p=0;p<6;p++)v.push(s[u*6+p]);return{center:e,corner:t,par:o,light:n,tint:r,bloom:a,elements:v}}var ht=e=>e.toFixed(4),Gl=e=>`vec3(${ht(e[0])}, ${ht(e[1])}, ${ht(e[2])})`,$3=`
const vec3 SUN = ${Gl(c0)};
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
`,P8=P3.map(([e,t])=>`if (hitBox(ro, SUN, ${Gl(e)}, ${Gl(t)})) return 0.0;`).join(`
	`),I8=l0.filter(e=>e.shadow).map(e=>`tr *= crownShade(ro, ${Gl(e.c)}, ${Gl(e.r)}, ${e.spindle?"1.8":"1.0"});`).join(`
	`),$8=(e,t,o,n,r,a,s,i,c)=>`
	{
		float t = (${ht(t)} - ro.${e}) / SUN.${e};
		if (t > 0.0) {
			vec3 q = ro + SUN * t;
			float u = q.${e==="z"?"x":"z"};
			if (q.y < ${ht(as)} && u > ${ht(o-vt)} && u < ${ht(o+n*r+vt)}) {
				float k = floor((u - ${ht(o)}) / ${ht(n)});
				float a = ${ht(o)} + k * ${ht(n)} + (k < 0.5 ? ${ht(a)} : 0.02);
				float b = ${ht(o)} + (k + 1.0) * ${ht(n)} - (k > ${ht(r-1.5)} ? ${ht(s)} : 0.02);
				float c = 0.5 * (a + b), r = 0.5 * (b - a) - 0.2;
				float d = abs(u - c);
				float sill = abs(k - ${ht(i)}) < 0.5 ? 0.0 : ${ht(Fl+.09)};
				bool hole = (q.y > sill && q.y < ${ht(Ar)} && u > a && u < b && d < 0.5 * (b - a) - 0.17)
					|| (q.y >= ${ht(Ar)} && d * d + (q.y - ${ht(Ar)}) * (q.y - ${ht(Ar)}) < r * r);
				if (!hole && ${c}) return 0.0;
			}
		}
	}`,Rh=Ys+.3,Oh=Ys+.3,Hl=Th+.3,E3=Do.x1-te.cx-Qs-.3,F8=Do.z1-te.cz-Qs-.3,q8=te.cz-Do.z0-Qs-.3,D8=Math.sqrt(Hl*Hl-Rh*Rh),G8=Math.sqrt(Hl*Hl-Oh*Oh),H8=[[te.cx,te.cz,.86,1.18],[te.cx,te.cz,1.25,.3],...fd.map(([e,t])=>[e,t,.42,.65])].map(([e,t,o,n])=>`if (hitCyl(ro, vec2(${ht(e)}, ${ht(t)}), ${ht(o)}, ${ht(n)})) return 0.0;`).join(`
	`),U8=`
float segDist(vec2 p, vec2 a, vec2 b) {
	vec2 pa = p - a, ba = b - a;
	float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
	return length(pa - ba * h);
}

// distance to the nearest hedge line
float hedgeDist(vec2 xz) {
	vec2 q = abs(xz - vec2(${ht(te.cx)}, ${ht(te.cz)}));
	float b1 = xz.y > ${ht(te.cz)} ? ${ht(F8)} : ${ht(q8)};
	vec2 A = vec2(${ht(Rh)}, ${ht(D8)}), Bp = vec2(${ht(Rh)}, b1), C = vec2(${ht(E3)}, b1);
	vec2 D = vec2(${ht(E3)}, ${ht(Oh)}), E = vec2(${ht(G8)}, ${ht(Oh)});
	float d = min(min(segDist(q, A, Bp), segDist(q, Bp, C)), min(segDist(q, C, D), segDist(q, D, E)));
	float ang = atan(q.y, q.x);
	if (ang > atan(E.y, E.x) && ang < atan(A.y, A.x)) d = min(d, abs(length(q) - ${ht(Hl)}));
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
	${P8}
	${$8("z",te.northCol,te.westCol,ld,Ch,vt+Dl,vt+Dl,T3,"ro.z > "+ht(te.northCol-vt))}
	// on lighter settings only the buildings cast shadows
	if (gardenDetail < 0.5) return 1.0;
	${H8}
	if (ro.y < ${ht(Ks)} && ro.x > ${ht(Do.x0)} && ro.x < ${ht(Do.x1)}) {
		for (int i = 1; i <= 4; i++) {
			float t = float(i) / 4.0 * (${ht(Ks)} - ro.y) / SUN.y;
			vec3 q = ro + SUN * t;
			float w = ${ht($l*.5)} * sqrt(max(0.0, 1.0 - pow(q.y / ${ht(Ks)}, 4.0)));
			if (hedgeDist(q.xz) < w) return 0.0;
		}
	}
	float tr = 1.0;
	${I8}
	return tr;
}
`,B8=`
precision highp float;
${A3}
varying vec3 v_pos, v_normal, v_attr, v_eye;
uniform float time, gardenDetail;
${$3}
${U8}

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

	if (kind == ${rt.SKY}.0) {
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

	if (kind == ${rt.GROUND}.0) {
		bool yard = P.x > ${ht(Do.x0)} && P.x < ${ht(Do.x1)} && P.z < ${ht(Do.z1)};
		if (!yard) {
			// stone slabs under the arcades
			vec2 g = P.xz / 0.62;
			vec2 fg = fract(g);
			float h = hash(floor(g));
			base = mix(vec3(0.66, 0.60, 0.52), vec3(0.76, 0.70, 0.62), h);
			base *= 1.0 - 0.25 * (step(fg.x, 0.03) + step(fg.y, 0.03)) * (1.0 - lod);
			spec = 0.15;
		} else {
			float ex = min(P.x - ${ht(Do.x0)}, ${ht(Do.x1)} - P.x);
			float ez = min(P.z - ${ht(Do.z0)}, ${ht(Do.z1)} - P.z);
			float edge = min(ex, ez);
			float dx = abs(P.x - ${ht(te.cx)}), dz = abs(P.z - ${ht(te.cz)});
			float rc = length(vec2(dx, dz));
			if (edge < ${ht(Qs)}) {
				// brick path laid in rows, with a stone kerb
				vec2 q = ex < ez ? P.zx : P.xz;
				base = brick(q * vec2(1.0, 2.6), 0.4) * 0.9;
				if (abs(edge - ${ht(Qs)}) < 0.08) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (rc < ${ht(Th)}) {
				// brick in rings round the wellhead
				float ang = atan(P.z - ${ht(te.cz)}, P.x - ${ht(te.cx)});
				vec2 q = vec2(ang * rc, rc);
				base = brick(q * vec2(1.0, 2.6), 0.5) * 0.92;
				if (abs(rc - ${ht(Th)}) < 0.1) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (dx < ${ht(Ys)} || dz < ${ht(Ys)}) {
				// pale gravel
				float g = noise(P.xz * 40.0) * 0.6 + noise(P.xz * 9.0) * 0.4;
				base = mix(vec3(0.66, 0.58, 0.46), vec3(0.86, 0.79, 0.66), mix(g, 0.5, lod));
				base *= 0.94 + 0.12 * noise(P.xz * 1.3);
				float e = min(${ht(Ys)} - min(dx, dz), 1.0);
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
			ao *= 0.6 + 0.4 * smoothstep(0.85, 1.6, length(P.xz - vec2(${ht(te.cx)}, ${ht(te.cz)})));
		}
	} else if (kind == ${rt.BRICK}.0) {
		float pink = smoothstep(0.4, 0.6, noise(wq * 0.05 + 7.0));
		base = mix(brick(wq, 0.25 * pink), vec3(0.68, 0.46, 0.33), lod * 0.6);
		base *= 1.0 - 0.18 * smoothstep(0.0, 1.5, 1.6 - P.y) * noise(wq * 1.5);
		ao *= 0.78 + 0.22 * smoothstep(0.0, 1.2, P.y);
	} else if (kind == ${rt.STONE}.0) {
		float n = noise(wq * 3.0) * 0.5 + noise(wq * 0.7) * 0.5;
		base = mix(vec3(0.74, 0.70, 0.62), vec3(0.86, 0.83, 0.76), n);
		spec = 0.1;
	} else if (kind == ${rt.MARBLE}.0) {
		// red Verona marble
		float n = noise3(P * vec3(5.0, 1.5, 5.0)) * 0.6 + noise3(P * 14.0) * 0.4;
		base = mix(vec3(0.56, 0.32, 0.25), vec3(0.68, 0.42, 0.33), n);
		base = mix(base, vec3(0.80, 0.66, 0.56), smoothstep(0.66, 0.74, noise3(P * 9.0 + 3.0)) * 0.35);
		spec = 0.35;
	} else if (kind == ${rt.HEDGE}.0) {
		float n = noise3(P * 9.0) * 0.55 + noise3(P * 2.5) * 0.45;
		base = mix(vec3(0.05, 0.16, 0.04), vec3(0.22, 0.38, 0.10), n);
		ao *= 0.55 + 0.45 * smoothstep(0.0, ${ht(Ks)}, P.y) * (0.6 + 0.4 * n);
		N = normalize(N + vec3(noise3(P * 13.0) - 0.5, 0.0, noise3(P * 13.0 + 5.0) - 0.5) * 0.9);
	} else if (kind == ${rt.POT}.0) {
		base = mix(vec3(0.66, 0.34, 0.20), vec3(0.75, 0.44, 0.28), noise(wq * 6.0));
	} else if (kind == ${rt.SOIL}.0) {
		base = vec3(0.20, 0.14, 0.09);
	} else if (kind == ${rt.ROOF}.0) {
		// rows of curved clay tiles
		float along = abs(N.x) > abs(N.z) ? P.z : P.x;
		float rib = abs(fract(along / 0.24) - 0.5) * 2.0;
		float h = hash(vec2(floor(along / 0.24), floor(P.y / 0.42)));
		base = mix(vec3(0.58, 0.30, 0.20), vec3(0.72, 0.44, 0.30), h);
		base = mix(base, vec3(0.45, 0.42, 0.36), smoothstep(0.55, 0.85, noise(P.xz * 0.6)) * 0.4);
		base *= mix(0.62 + 0.38 * (1.0 - rib * rib), 0.85, lod);
	} else if (kind == ${rt.SHUTTER}.0) {
		float slat = fract(P.y / 0.07);
		base = vec3(0.17, 0.30, 0.20) * (0.75 + 0.25 * smoothstep(0.1, 0.5, slat));
	} else if (kind == ${rt.PANE}.0) {
		vec3 R = reflect(-V, N);
		base = vec3(0.03, 0.035, 0.04);
		vec3 refl = skyColor(normalize(vec3(R.x, abs(R.y), R.z))) * 0.25;
		gl_FragColor = vec4(toNight(tonemap(base + refl * (0.4 + 0.6 * pow(1.0 - abs(dot(N, V)), 3.0))), 0.45), 1.0);
		return;
	} else if (kind == ${rt.PLASTER}.0) {
		base = mix(vec3(0.82, 0.76, 0.64), vec3(0.88, 0.83, 0.72), noise(wq * 1.3));
		// a darker dado on the back walls
		if (abs(N.y) < 0.5 && P.y < 1.1) base *= 0.82;
	} else if (kind == ${rt.BARK}.0) {
		base = mix(vec3(0.30, 0.27, 0.24), vec3(0.45, 0.42, 0.38), noise3(P * vec3(8.0, 2.0, 8.0)));
	} else if (kind == ${rt.IRON}.0) {
		base = vec3(0.07, 0.07, 0.07);
		spec = 0.4;
	} else if (kind == ${rt.LEAD}.0) {
		base = mix(vec3(0.30, 0.33, 0.35), vec3(0.40, 0.43, 0.45), noise(P.xy * 0.5));
		// ribs on the domes
		float a = atan(P.z - floor(P.z / 50.0) * 50.0, 1.0);
		base *= 0.9 + 0.1 * step(0.5, fract(a * 6.0));
		far = 1.0;
	} else if (kind == ${rt.FARBRICK}.0) {
		base = mix(vec3(0.66, 0.46, 0.34), vec3(0.74, 0.54, 0.40), noise(P.xy * 0.3));
		// a row of small arches under the eaves and some dark windows
		far = 1.0;
	} else if (kind == ${rt.DARK}.0) {
		base = vec3(0.025, 0.022, 0.02);
	}

	// ---------- light ----------

	// in the arcade walks the sky is mostly hidden
	bool walk = (P.x < ${ht(te.westCol)} || P.x > ${ht(te.eastCol)} || P.z > ${ht(te.northCol)}) && P.y < ${ht(as+.05)} && P.z > ${ht(te.south-.1)} && P.z < ${ht(te.northBack+.5)};
	float skyVis = 0.55 + 0.45 * N.y;
	if (walk) {
		float depth = P.z > ${ht(te.northCol)} ? P.z - ${ht(te.northCol)} : (P.x < ${ht(te.westCol)} ? ${ht(te.westCol)} - P.x : P.x - ${ht(te.eastCol)});
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
}`,j8=`
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
}`,W8=`
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
}`,V8=`
precision highp float;
${A3}
uniform sampler2D leaves;
varying vec2 v_uv;
varying vec3 v_light, v_tint, v_bloom, v_pos;
${$3}
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
}`;function X8(e,t,o){let n=e.texture({data:[[o]],min:"linear",mag:"linear"});return fetch(t).then(r=>{if(!r.ok)throw new Error("Could not load "+t);return r.blob()}).then(r=>createImageBitmap(r,{premultiplyAlpha:"none"})).then(r=>n({data:r,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(r=>console.error(r)),n}hd.exports=e=>{let t=R8(),o=C8(),n=X8(e,"res/garden/foliage.webp",[0,0,0,0]),r=Date.now(),a=()=>id.motion?window.__streetClock!==void 0?window.__streetClock:(Date.now()-r)/1e3:20,s=e({frag:B8,vert:j8,attributes:{position:t.position,normal:t.normal,attr:t.attr},elements:new Uint32Array(t.elements),uniforms:{time:a,gardenDetail:()=>id.gardenDetail}}),i=e({frag:V8,vert:W8,attributes:{center:o.center,corner:o.corner,par:o.par,light:o.light,tint:o.tint,bloom:o.bloom},elements:new Uint32Array(o.elements),uniforms:{leaves:n,time:a},cull:{enable:!1},count:()=>Math.floor(o.elements.length*id.leafShare/6)*6});return function(){s(),i()}};hd.exports.layout={G:te,YARD:Do,SUN:c0}});var U3=ke((dz,H3)=>{"use strict";var Y8=ar().GLSL,K8=Is(),{C:G3}=br(),zr=G3.x1+.35,vd=G3.zc,ud=[zr-7.3,2,vd],q3=5.2*Math.PI/180,D3=2100,Q8=725,Z8=1288,J8=1450,ek=2576,T0=vd-3.2,$h=vd+3.3,dd=zr+5,pd=zr+11.7,uc=3.9,Ul=zr+22.7,Ph=40;function tk(){let e=[],t=[],o=[],n=[],r=K8.createBuilder(e,t,o,n),a=(l,d,h,v,u,p)=>{let m=[];for(let g=0;g<=u;g++){m.push([]);for(let y=0;y<=p;y++){let b=[0,1,2].map(w=>l[w]+d[w]*g/u+h[w]*y/p);m[g].push(r.vert(b,v,[0,0,0]))}}for(let g=0;g<u;g++)for(let y=0;y<p;y++)r.tri(m[g][y],m[g+1][y],m[g+1][y+1]),r.tri(m[g][y],m[g+1][y+1],m[g][y+1])},s=$h-T0,i=.7;a([zr-i,0,T0],[dd-zr+i,0,0],[0,0,s],[0,1,0],6,4);let c=pd-dd,f=Math.hypot(c,uc);return a([dd,0,T0],[c,uc,0],[0,0,s],[-uc/f,c/f,0],6,4),a([pd,uc,T0],[Ul-pd,0,0],[0,0,s],[0,1,0],6,4),a([zr-i,0,T0],[Ul-zr+i,0,0],[0,Ph,0],[0,0,1],12,12),a([zr-i,0,$h],[Ul-zr+i,0,0],[0,Ph,0],[0,0,-1],12,12),a([Ul,0,T0],[0,Ph,0],[0,0,s],[-1,0,0],8,4),a([zr-i,Ph,T0],[Ul-zr+i,0,0],[0,0,s],[0,-1,0],6,4),{position:e,normal:t,elements:o,attr:n}}var Gr=e=>e.toFixed(5),Ih=[[zr+3.4,3.7,T0+.01,1],[zr+8.6,4.1,$h-.01,-1],[zr+14.8,uc+3.3,T0+.01,1],[zr+19.6,uc+3.6,$h-.01,-1]],ok=`
precision highp float;
${Y8}
uniform sampler2D photo;
uniform float time;
varying vec3 v_pos;
varying vec3 v_normal;
const int NLAMP = ${Ih.length};
vec4 LAMP[NLAMP];

void main() {
	${Ih.map((e,t)=>`LAMP[${t}] = vec4(${Gr(e[0])}, ${Gr(e[1])}, ${Gr(e[2])}, ${Gr(e[3])});`).join(`
	`)}
	vec3 d = v_pos - vec3(${Gr(ud[0])}, ${Gr(ud[1])}, ${Gr(ud[2])});
	float c = ${Gr(Math.cos(q3))}, s = ${Gr(Math.sin(q3))};
	float fw = d.x * c + d.y * s;
	float up = -d.x * s + d.y * c;
	fw = max(fw, 0.05);
	vec2 px = vec2(${Gr(Q8)} + ${Gr(D3)} * d.z / fw, ${Gr(Z8)} - ${Gr(D3)} * up / fw);
	vec2 uv = px / vec2(${Gr(J8)}, ${Gr(ek)});
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
	for (int i = 0; i < ${Ih.length}; i++) {
		vec4 L = LAMP[i];                       // x, y, z, side (+1 left wall, -1 right)
		vec3 d = L.xyz - v_pos;
		float dd = dot(d, d);
		float fl = 0.92 + 0.05 * sin(time * 7.3 + float(i) * 2.1) + 0.03 * sin(time * 17.0 + float(i));
		// the wall it hangs on is lit across, the paving from above
		float face = v_normal.y > 0.5 ? max(normalize(d).y, 0.0) : 0.35 + 0.65 * max(dot(v_normal, normalize(d)), 0.0);
		lit += albedo * vec3(1.0, 0.62, 0.30) * face * fl * lampK * 3.2 / (0.6 + dd * 0.45);
	}
	gl_FragColor = vec4(lit, 1.0);
}`,nk=`
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
}`;H3.exports=e=>{let t=tk(),o=e.texture({data:[[[120,105,85]]],min:"linear",mag:"linear"});fetch("res/florence/photo.jpg").then(i=>{if(!i.ok)throw new Error("Could not load the Florence photo");return i.blob()}).then(i=>createImageBitmap(i)).then(i=>o({data:i,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(i=>console.error(i));let n=e({frag:ok,vert:nk,attributes:{position:t.position,normal:t.normal},elements:new Uint32Array(t.elements),uniforms:{photo:o},cull:{enable:!1}}),r={pos:[],nrm:[],k:[],idx:[]},a=(i,c,f)=>{let[l,d,h]=i,v=[[[1,0,0],[0,1,0],[0,0,1]],[[-1,0,0],[0,1,0],[0,0,-1]],[[0,0,1],[0,1,0],[-1,0,0]],[[0,0,-1],[0,1,0],[1,0,0]],[[0,1,0],[0,0,1],[1,0,0]],[[0,-1,0],[0,0,1],[-1,0,0]]];for(let[u,p,m]of v){let g=r.pos.length/3;for(let[y,b]of[[-1,-1],[1,-1],[1,1],[-1,1]])r.pos.push(l+u[0]*c[0]+p[0]*y*c[0]+m[0]*b*c[0],d+u[1]*c[1]+p[1]*y*c[1]+m[1]*b*c[1],h+u[2]*c[2]+p[2]*y*c[2]+m[2]*b*c[2]),r.nrm.push(...u),r.k.push(f);r.idx.push(g,g+1,g+2,g,g+2,g+3)}};for(let i of Ih){let c=i[3],f=i[2]+c*.42;a([i[0],i[1],f],[.11,.17,.11],1);for(let l of[-1,1])for(let d of[-1,1])a([i[0]+l*.11,i[1],f+d*.11],[.014,.18,.014],0);a([i[0],i[1]+.2,f],[.15,.03,.15],0),a([i[0],i[1]+.27,f],[.05,.05,.05],0),a([i[0],i[1]-.19,f],[.09,.025,.09],0),a([i[0],i[1]+.34,i[2]+c*.21],[.015,.015,.21],0),a([i[0],i[1]+.15,i[2]+c*.03],[.04,.24,.03],0)}let s=e({vert:`
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
		}`,attributes:{position:r.pos,normal:r.nrm,k:r.k},elements:new Uint16Array(r.idx),cull:{enable:!1}});return function(){n(),s()}}});var X3=ke((pz,V3)=>{"use strict";var rk=ar().GLSL,{A:qh,BENCH:gd,SHAFT:md,TREE:Bl,oculusGLSL:ak}=Ea(),sk=Ma(),Fh=Bl.sxz,B3=Bl.sy,j3=Bl.yaw;function ik(e){let t=new DataView(e),o=t.getUint32(4,!0),n=t.getUint32(8,!0),r=t.getUint32(12,!0),a=[0,1,2].map(h=>t.getFloat32(16+h*4,!0)),s=[0,1,2].map(h=>t.getFloat32(28+h*4,!0)),i=40,c=new Uint16Array(e,i,o*3);i+=o*6;let f=new Uint16Array(e,i,o*2);i+=o*4;let l=new Int8Array(e,i,o*3);i+=o*3,i=i+3&-4;let d=new Uint32Array(e,i,r);return{nV:o,nWood:n,nI:r,mn:a,sz:s,pos:c,uv:f,nrm:l,idx:d}}function ck(e){let t=new Float32Array(e.nV*3),o=new Float32Array(e.nV*3),n=new Float32Array(e.nV*2),r=new Float32Array(e.nV),a=Math.cos(j3),s=Math.sin(j3);for(let i=0;i<e.nV;i++){let c=(e.mn[0]+e.pos[i*3]/65535*e.sz[0])*Fh,f=(e.mn[1]+e.pos[i*3+1]/65535*e.sz[1])*B3,l=(e.mn[2]+e.pos[i*3+2]/65535*e.sz[2])*Fh;t[i*3]=qh.cx+a*c+s*l,t[i*3+1]=gd.soil+.02+f,t[i*3+2]=qh.zc-s*c+a*l;let d=e.nrm[i*3]/127/Fh,h=e.nrm[i*3+1]/127/B3,v=e.nrm[i*3+2]/127/Fh,u=Math.hypot(d,h,v)||1;d/=u,h/=u,v/=u,o[i*3]=a*d+s*v,o[i*3+1]=h,o[i*3+2]=-s*d+a*v,n[i*2]=e.uv[i*2]/65535,n[i*2+1]=e.uv[i*2+1]/65535,r[i]=i>=e.nWood?1:0}return{position:t,normal:o,uv:n,leaf:r,elements:e.idx}}function W3(e,t,o,n){let r=e.texture({data:[[n]],min:"linear",mag:"linear"});return fetch(t).then(a=>{if(!a.ok)throw new Error("Could not load "+t);return a.blob()}).then(a=>createImageBitmap(a,{premultiplyAlpha:"none"}).catch(()=>new Promise((s,i)=>{let c=new Image;c.onload=()=>s(c),c.onerror=i,c.src=URL.createObjectURL(a)}))).then(a=>r({data:a,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",...o})).catch(a=>console.error(a)),r}var cr=e=>e.toFixed(4),dc=Bl.crownC,pc=Bl.crownR,lk=`
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

const vec3 SHAFT = vec3(${cr(md[0])}, ${cr(md[1])}, ${cr(md[2])});

void main() {
	vec3 p = position;
	// the air in the court is never quite still. The whole tree leans
	// with it, slowly, more the higher and the further out on a limb
	// (wood and leaves together, so every leaf stays on its twig) ...
	float h = max(p.y - 1.2, 0.0);
	vec2 out2 = p.xz - vec2(${cr(qh.cx)}, ${cr(qh.zc)});
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
	vec3 cc = vec3(${cr(dc[0])}, ${cr(dc[1])}, ${cr(dc[2])});
	vec3 cr = vec3(${cr(pc[0])}, ${cr(pc[1])}, ${cr(pc[2])});
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
}`,is=j0(),fk=`
precision highp float;
${rk}
uniform float time;
${is.lanternGLSL(is.TREE_LANTERN)}
const vec3 LANTERN_POS = vec3(${is.LANTERNS[is.TREE_LANTERN[0]].x.toFixed(3)}, ${is.LANTERNS[is.TREE_LANTERN[0]].y.toFixed(3)}, ${is.LANTERNS[is.TREE_LANTERN[0]].z.toFixed(3)});
uniform sampler2D leaves, bark;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_leaf, v_shade;
varying vec3 v_eye;

${ak()}

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
	vec3 rel = (v_pos - vec3(${cr(dc[0])}, ${cr(dc[1])}, ${cr(dc[2])})) / vec3(${cr(pc[0])}, ${cr(pc[1])}, ${cr(pc[2])});
	float outer = clamp(length(rel), 0.0, 1.0);
	float ao = mix(0.38, 1.0, outer * outer) * (0.75 + 0.25 * smoothstep(0.4, 2.0, v_pos.y));
	// and the trunk darkens where it meets the soil
	ao *= 0.6 + 0.4 * smoothstep(${cr(gd.soil)}, ${cr(gd.soil+.5)}, v_pos.y);

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
}`;V3.exports=e=>{let t=null,o=W3(e,"res/tree/leaves.webp",{wrapS:"clamp",wrapT:"clamp"},[60,80,40,0]),n=W3(e,"res/tree/bark.jpg",{wrapS:"repeat",wrapT:"repeat"},[90,80,70]),r=Date.now();return fetch("res/tree.bin").then(a=>{if(!a.ok)throw new Error("Could not load the tree");return a.arrayBuffer()}).then(a=>{let s=ck(ik(a));t=e({vert:lk,frag:fk,attributes:{position:s.position,normal:s.normal,uv:s.uv,leaf:s.leaf},elements:s.elements,uniforms:{leaves:o,bark:n,time:()=>sk.motion?typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-r)/1e3:0},cull:{enable:!1}})}).catch(a=>console.error(a)),function(){t&&t()}}});var Uh=ke((vz,Z3)=>{"use strict";var vc=X0(),hk="res/audio/go-tomorrow.mp3",uk="res/audio/go-tomorrow.json",K3="gallery-sound",Dh=[vc.PIANO.x,1,vc.PIANO.z],dk=vc.R,ea=!0;try{localStorage.getItem(K3)==="off"&&(ea=!1)}catch(e){}var Cn=null,_r=null,jl=null,Wl=null,cs=null,L0=null,Zs=!1,Gh=null,Y3=[],pk=(typeof performance!="undefined"?performance.now():0)/1e3;function vk(e){let t=Math.floor(e.sampleRate*2.6),o=e.createBuffer(2,t,e.sampleRate),n=12345,r=()=>(n=n*16807%2147483647,n/10737418235e-1-1);for(let a=0;a<2;a++){let s=o.getChannelData(a),i=0;for(let c=0;c<t;c++){let f=c/e.sampleRate,l=.25+.6*Math.exp(-f*2.2);i+=(r()-i)*l,s[c]=i*Math.pow(1-c/t,2.2)*Math.exp(-f*1.5)*(f<.012?f/.012:1)}}return o}function mk(){if(Cn)return;Cn=new Audio,Cn.src=hk,Cn.loop=!0,Cn.preload="auto",Cn.crossOrigin="anonymous";let e=window.AudioContext||window.webkitAudioContext;if(!e){Cn.volume=.2;return}try{_r=new e;let t=_r.createMediaElementSource(Cn);cs=_r.createBiquadFilter(),cs.type="lowpass",cs.frequency.value=1500,cs.Q.value=.4,jl=_r.createGain(),jl.gain.value=0,Wl=_r.createGain(),Wl.gain.value=0;let o=_r.createConvolver();o.buffer=vk(_r),L0=_r.createGain(),L0.gain.value=ea?1:0,t.connect(cs),cs.connect(jl),jl.connect(L0),cs.connect(o),o.connect(Wl),Wl.connect(L0),L0.connect(_r.destination)}catch(t){_r=null,Cn.volume=.2}}function Q3(){if(Zs||!ea)return;mk();let e=()=>Cn.play().then(()=>{Zs=!0}).catch(()=>{});_r&&_r.state==="suspended"?_r.resume().then(e,e):e()}typeof window!="undefined"&&(["pointerdown","pointerup","touchend","keydown","click"].forEach(e=>window.addEventListener(e,Q3,{capture:!0,passive:!0})),document.addEventListener("visibilitychange",()=>{!Cn||!Zs||(document.hidden?Cn.pause():ea&&Cn.play().catch(()=>{}))}),fetch(uk).then(e=>e.ok?e.json():null).then(e=>{if(!e)return;let t=o=>{let n=o.map(s=>s[2]).sort((s,i)=>s-i),r=n[Math.floor(n.length*.03)]||0,a=n[Math.floor(n.length*.97)]||1;return o.map(s=>({t:s[0],w:s[1],x:Math.max(0,Math.min(1,(s[2]-r)/Math.max(a-r,.001)))}))};Gh={left:t(e.l),right:t(e.r),level:e.e,dur:e.d}}).catch(()=>{}));var Hh={AT:Dh,listen(e){if(!_r||!Zs)return;let t=e[0]-Dh[0],o=e[2]-Dh[2],n=Math.hypot(t,o,(e[1]-Dh[1])*.5),r=Math.hypot(e[0]-vc.C.x,e[2]-vc.C.z)<dk+.4||e[0]<-.2&&Math.abs(e[2]-vc.C.z)<4,a,s,i;if(r){let f=Math.max(0,Math.min(1,(n-1.2)/5));a=1-.3*f,s=.22+.16*f,i=16e3}else{let f=5.5/Math.max(n,5.5),l=e[0]>14.2&&e[2]<12?.6:1;a=.5*Math.pow(f,1.5)*l,s=.34*Math.pow(f,.95)*l,i=(650+9e3*Math.pow(f,1.3))*(l<1?.7:1)}let c=_r.currentTime;jl.gain.setTargetAtTime(a,c,.35),Wl.gain.setTargetAtTime(s,c,.35),cs.frequency.setTargetAtTime(i,c,.35)},time(){let e=Gh&&Gh.dur||158;return Cn&&Zs&&!Cn.paused||Cn&&Zs?Cn.currentTime%e:((performance.now()/1e3-pk)%e+e)%e},get cues(){return Gh},get on(){return ea},set(e){ea=!!e;try{localStorage.setItem(K3,ea?"on":"off")}catch(t){}ea?(Q3(),Cn&&Zs&&Cn.play().catch(()=>{}),L0&&L0.gain.setTargetAtTime(1,_r.currentTime,.2)):L0?L0.gain.setTargetAtTime(0,_r.currentTime,.15):Cn&&Cn.pause(),Y3.forEach(t=>t(ea))},toggle(){Hh.set(!ea)},onChange(e){Y3.push(e)},button(e){let t='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="M15.5 9a4.2 4.2 0 0 1 0 6M18 6.5a7.8 7.8 0 0 1 0 11"/></svg>',o='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="M16 9.5l5 5M21 9.5l-5 5"/></svg>',n=document.createElement("button");n.type="button",n.className=e+" sound-toggle";let r=()=>{n.innerHTML=ea?t:o,n.setAttribute("aria-label",ea?"Turn the music off":"Turn the music on"),n.title=ea?"Music on":"Music off",n.setAttribute("aria-pressed",ea?"true":"false")};return r(),Hh.onChange(r),["mousedown","pointerdown"].forEach(a=>n.addEventListener(a,s=>s.stopPropagation())),n.addEventListener("click",a=>{a.stopPropagation(),Hh.toggle()}),n}};Z3.exports=Hh});var lx=ke((mz,_d)=>{"use strict";var bd=ar().GLSL,{A:J3,BENCH:ax,oculusGLSL:sx}=Ea(),ex=Ma(),ix=X0(),tx=Uh(),gk=1.74,xk=1.877,Tr=gk/xk,ei={x:J3.cx-1.22,z:J3.zc+.02,hipY:ax.seat+.115},nn=(e,t)=>[e[3]*t[0]+e[0]*t[3]+e[1]*t[2]-e[2]*t[1],e[3]*t[1]-e[0]*t[2]+e[1]*t[3]+e[2]*t[0],e[3]*t[2]+e[0]*t[1]-e[1]*t[0]+e[2]*t[3],e[3]*t[3]-e[0]*t[0]-e[1]*t[1]-e[2]*t[2]],Xa=e=>[-e[0],-e[1],-e[2],e[3]],fs=(e,t)=>{let o=Math.hypot(e[0],e[1],e[2])||1,n=Math.sin(t/2);return[e[0]/o*n,e[1]/o*n,e[2]/o*n,Math.cos(t/2)]},Bh=(e,t,o)=>nn(fs([0,0,1],o*Math.PI/180),nn(fs([0,1,0],t*Math.PI/180),fs([1,0,0],e*Math.PI/180))),wd=e=>{let t=Math.hypot(...e)||1;return e.map(o=>o/t)},f0=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],Xl=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],ls=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],yd=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],Wh=e=>Math.hypot(e[0],e[1],e[2]),Vl=e=>{let t=Wh(e)||1;return[e[0]/t,e[1]/t,e[2]/t]},Xh=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],yk=(e,t)=>{let o=[e[0],e[1],e[2]],n=ls(Xh(o,t),2);return Xl(Xl(t,ls(n,e[3])),Xh(o,n))},bk=(e,t)=>{let o=Xh(e,t),n=1+yd(e,t);return n<1e-6?[0,0,1,0]:wd([o[0],o[1],o[2],n])};function ua(e,t,o){let[n,r,a,s]=t,i=n*n,c=r*r,f=a*a,l=n*r,d=n*a,h=r*a,v=s*n,u=s*r,p=s*a;return[(1-2*(c+f))*o[0],2*(l+p)*o[0],2*(d-u)*o[0],0,2*(l-p)*o[1],(1-2*(i+f))*o[1],2*(h+v)*o[1],0,2*(d+u)*o[2],2*(h-v)*o[2],(1-2*(i+c))*o[2],0,e[0],e[1],e[2],1]}function Zn(e,t){let o=new Array(16);for(let n=0;n<4;n++)for(let r=0;r<4;r++)o[n*4+r]=e[r]*t[n*4]+e[4+r]*t[n*4+1]+e[8+r]*t[n*4+2]+e[12+r]*t[n*4+3];return o}function xd(e){let t=Math.hypot(e[0],e[1],e[2]),o=Math.hypot(e[4],e[5],e[6]),n=Math.hypot(e[8],e[9],e[10]),r=e[0]/t,a=e[1]/t,s=e[2]/t,i=e[4]/o,c=e[5]/o,f=e[6]/o,l=e[8]/n,d=e[9]/n,h=e[10]/n,v=r+c+h,u;if(v>0){let p=Math.sqrt(v+1)*2;u=[(f-d)/p,(l-s)/p,(a-i)/p,p/4]}else if(r>c&&r>h){let p=Math.sqrt(1+r-c-h)*2;u=[p/4,(i+a)/p,(l+s)/p,(f-d)/p]}else if(c>h){let p=Math.sqrt(1+c-r-h)*2;u=[(i+a)/p,p/4,(d+f)/p,(l-s)/p]}else{let p=Math.sqrt(1+h-r-c)*2;u=[(l+s)/p,(d+f)/p,p/4,(a-i)/p]}return wd(u)}var Vh={LeftUpLeg:[-62,10,0],LeftLeg:[122,0,0],LeftFoot:[30,0,0],RightUpLeg:[0,-3,-2],RightLeg:[4,0,0],RightFoot:[35,-12,0],Neck:[10,0,0],Head:[6,0,0],LeftShoulder:[0,0,6],LeftArm:[-112.4,3.4,62.5],LeftForeArm:[0,-122.6,0],LeftHand:[0,0,-10],RightShoulder:[0,0,0],RightArm:[0,78,-8],RightForeArm:[0,14,0],RightHand:[0,0,0]};for(let e of["Left","Right"]){let t=e==="Left"?-1:1,o=e==="Left"?1:.35;["Index","Middle","Ring","Pinky"].forEach((n,r)=>{Vh[e+"Hand"+n+"1"]=[0,0,t*(18+r*6)*o],Vh[e+"Hand"+n+"2"]=[0,0,t*(26+r*6)*o],Vh[e+"Hand"+n+"3"]=[0,0,t*16*o]})}function Js(e,t,o){let n=e-t;return n-=Math.round(n),Math.exp(-(n/o)*(n/o))}function ox(e){let t=9+20*Math.cos(2*Math.PI*e),o=4+13*Js(e,.14,.07)+57*Js(e,.72,.12),n=5*Js(e,.06,.04)-9*Js(e,.42,.12)+17*Js(e,.62,.05)-3*Js(e,.85,.1),r=-26*Js(e,.58,.06);return{hip:t,knee:o,ankle:n,toe:r}}function wk(e){let t=(e%1+1)%1,o=ox(t),n=ox(t+.5),r=Math.cos(2*Math.PI*t),a=Math.sin(2*Math.PI*t);return{swing:{LeftArm:[16*r,0,0],RightArm:[-16*r,0,0],LeftForeArm:[0,-14-8*Math.max(0,-r),0],RightForeArm:[0,14+8*Math.max(0,r),0]},pose:{Hips:[0,5*a,1.5*Math.cos(4*Math.PI*t)],Spine1:[3,-4*a,0],LeftUpLeg:[-o.hip,0,0],LeftLeg:[o.knee,0,0],LeftFoot:[o.ankle,0,0],LeftToeBase:[o.toe,0,0],RightUpLeg:[-n.hip,0,0],RightLeg:[n.knee,0,0],RightFoot:[n.ankle,0,0],RightToeBase:[n.toe,0,0],LeftArm:[0,0,-78],RightArm:[0,0,78],LeftHand:[0,0,-8],RightHand:[0,0,8]},sway:.022*r}}var nx=`
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
}`,Yh=j0(),rx=`#extension GL_OES_standard_derivatives : enable
precision highp float;
${bd}
uniform float time;
${ix.roomGLSL()}
${Yh.lanternGLSL(Yh.TREE_LANTERN)}
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
${sx()}
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
}`;function _k(e,t){let o=e.texture({data:[[[120,100,90,255]]],min:"linear",mag:"linear"});return fetch(t).then(n=>{if(!n.ok)throw new Error("Could not load "+t);return n.blob()}).then(n=>createImageBitmap(n,{premultiplyAlpha:"none"}).catch(()=>new Promise((r,a)=>{let s=new Image;s.onload=()=>r(s),s.onerror=a,s.src=URL.createObjectURL(n)}))).then(n=>o({data:n,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(n=>console.error(n)),o}var cx={w:.13,h:.2},jh=e=>.011*(1-Math.pow(1-e,3));function Mk(){let e=[],t=[],o=[],n=[],r=[],a=(p,m,g,y,b,w,M)=>{let k=e.length/3;[p,m,g,y].forEach((z,P)=>{e.push(...z),t.push(...b),o.push(...M[P]),n.push(w)}),r.push(k,k+1,k+2,k,k+2,k+3)},{w:s,h:i}=cx,c=i/2,f=[[0,1],[1,1],[1,0],[0,0]],l=-.006,d=s+.001,h=c+.001;a([0,l,-h],[d,l,-h],[d,l,h],[0,l,h],[0,-1,0],1,[[0,1],[1,1],[1,0],[0,0]]),a([0,l+.001,-h],[0,l+.001,h],[d,l+.001,h],[d,l+.001,-h],[0,1,0],2,f),a([-d,l,-h],[0,l,-h],[0,l,h],[-d,l,h],[0,-1,0],2,f),a([-d,l+.001,-h],[-d,l+.001,h],[0,l+.001,h],[0,l+.001,-h],[0,1,0],2,f);let v=8;for(let p of[1,-1]){for(let g=0;g<v;g++){let y=g/v,b=(g+1)/v,w=(.002+y*(s-.002))*p,M=(.002+b*(s-.002))*p,k=jh(y),z=jh(b),P=p>0?y:1-y,R=p>0?b:1-b,U=1,D=-(z-k)/(M-w);a([w,k,-c],[M,z,-c],[M,z,c],[w,k,c],[D,U,0],3,[[P,1],[R,1],[R,0],[P,0]]),a([w,l+.001,c],[M,l+.001,c],[M,z,c],[w,k,c],[0,0,1],4,f),a([w,k,-c],[M,z,-c],[M,l+.001,-c],[w,l+.001,-c],[0,0,-1],4,f)}let m=s*p;a([m,l+.001,-c],[m,jh(1),-c],[m,jh(1),c],[m,l+.001,c],[p,0,0],4,f)}let u=10;for(let p=0;p<u;p++){let m=p/u,g=(p+1)/u,y=e.length/3;for(let[b,w]of[[m,-c],[g,-c],[g,c],[m,c]])e.push(b,0,w),t.push(0,1,0),o.push(b,(w+c)/i),n.push(5);r.push(y,y+1,y+2,y,y+2,y+3)}return{pos:e,nrm:t,uv:o,kind:n,idx:r}}function kk(){if(typeof document=="undefined")return null;let e=document.createElement("canvas");e.width=512,e.height=768;let t=e.getContext("2d");t.fillStyle="#ebe5d8",t.fillRect(0,0,512,768);let o=7,n=()=>(o=o*16807%2147483647,o/2147483647),r=(s,i,c,f,l,d,h)=>{for(let v=0;v<d;v++){let u=s+(n()-.5)*c*2,p=i+(n()-.5)*f*2,m=20+n()*60,g=t.createRadialGradient(u,p,0,u,p,m);g.addColorStop(0,`rgba(${l},${h})`),g.addColorStop(1,`rgba(${l},0)`),t.fillStyle=g,t.fillRect(u-m,p-m,m*2,m*2)}},a=t.createRadialGradient(236,280,10,256,300,125);a.addColorStop(0,"#3d4866"),a.addColorStop(1,"#232a3d"),t.fillStyle=a,t.beginPath(),t.arc(256,300,122,0,Math.PI*2),t.fill(),t.fillStyle="#b8873f",t.beginPath(),t.moveTo(64,452);for(let s=64;s<=448;s+=16)t.lineTo(s,446+n()*4);for(let s=448;s>=64;s-=16)t.lineTo(s,466+n()*4);t.fill(),t.strokeStyle="#2b2f3a",t.lineCap="round",[[120,392,500,5],[160,352,530,4],[205,307,558,3]].forEach(([s,i,c,f])=>{t.lineWidth=f,t.beginPath(),t.moveTo(s,c),t.lineTo(i,c),t.stroke()});for(let s=0;s<9e3;s++)t.fillStyle=`rgba(90,80,60,${n()*.05})`,t.fillRect(n()*512,n()*768,1,1);return e}var Sk=`
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
		float r = u * ${cx.w.toFixed(3)};
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
}`,Ek=`
precision highp float;
${bd}
uniform float time;
${Yh.lanternGLSL(Yh.TREE_LANTERN)}
uniform sampler2D cover;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_kind;
${sx()}
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
}`;function Ak(){let e=[],t=[],o=[],n=[],r=[],a=[.36,.11,.07],s=[.1,.07,.05],i=[.78,.76,.72],c=[.55,.41,.26],f=[.8,.55,.22],l=[[0,-.15,f,2],[.0012,-.147,f,2],[.004,-.138,f,2],[.0058,-.125,c,2],[.0064,-.112,c,2],[.006,-.104,c,2],[.0066,-.102,i,1],[.0066,-.08,i,1],[.0062,-.074,i,1],[.0068,-.072,i,1],[.007,-.066,i,1],[.0058,-.064,a,0],[.0062,-.04,a,0],[.0058,0,a,0],[.0046,.06,a,0],[.0036,.11,a,0],[.003,.13,s,0],[.0026,.136,s,0],[0,.139,s,0]],d=16;for(let h=0;h<l.length;h++){let[v,u,p,m]=l[h],g=m===2?.45:1;for(let y=0;y<=d;y++){let b=y/d*Math.PI*2;e.push(Math.cos(b)*v,u,Math.sin(b)*v*g);let w=Math.max(h-1,0),M=Math.min(h+1,l.length-1),k=l[M][0]-l[w][0],z=l[M][1]-l[w][1],P=Math.hypot(k,z)||1;t.push(Math.cos(b)*z/P,-k/P,Math.sin(b)*z/P/g),o.push(...p),n.push(m)}}for(let h=0;h<l.length-1;h++)for(let v=0;v<d;v++){let u=h*(d+1)+v,p=u+d+1;r.push(u,p,u+1,u+1,p,p+1)}return{pos:e,nrm:t,col:o,mat:n,idx:r}}var zk=`
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
}`,Tk=`
precision highp float;
${bd}
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
}`,Lk=`
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
}`,Nk=`
precision highp float;
uniform float pulse;
varying vec2 v_c;
void main() {
	float d = length(v_c);
	float g = exp(-d * d * 6.0) * 0.10 + exp(-d * d * 30.0) * 0.08;
	gl_FragColor = vec4(vec3(1.0, 0.80, 0.45) * g * (0.75 + 0.25 * pulse), 1.0);
}`;_d.exports=e=>{let t="res/avatar/",o=null,n=Date.now(),r=()=>typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-n)/1e3,a={glowPos:[ei.x,1.9,ei.z],glow:0};Promise.all([fetch(t+"avatar.json").then(R=>R.json()),fetch(t+"avatar.bin").then(R=>R.arrayBuffer())]).then(([R,U])=>{o=f(R,U)}).catch(R=>console.error(R));let s=null;Promise.all([fetch(t+"motion.json").then(R=>R.ok?R.json():null),fetch(t+"motion.bin").then(R=>R.ok?R.arrayBuffer():null)]).then(([R,U])=>{if(!R||!U)return;let D={};for(let Y in R.clips){let I=R.clips[Y],j=I.bones.length,ue=new Float32Array(U,I.mean,j*4),Ge={};I.bones.forEach((Te,ye)=>{Ge[Te]=[ue[ye*4],ue[ye*4+1],ue[ye*4+2],ue[ye*4+3]]}),D[Y]=Object.assign({},I,{Q:new Int16Array(U,I.q,I.frames*j*4),H:new Float32Array(U,I.hips,I.frames*3),meanQ:Ge})}s=D}).catch(()=>{});function i(R,U){let D=R.frames,Y=R.bones.length,I=(U%D+D)%D,j=Math.floor(I)%D,ue=(j+1)%D,Ge=I-Math.floor(I),Te={};for(let Ve=0;Ve<Y;Ve++){let zt=(j*Y+Ve)*4,St=(ue*Y+Ve)*4,Vt=R.Q[zt],Tt=R.Q[zt+1],no=R.Q[zt+2],bo=R.Q[zt+3],Yo=R.Q[St],tt=R.Q[St+1],Et=R.Q[St+2],$t=R.Q[St+3];Vt*Yo+Tt*tt+no*Et+bo*$t<0&&(Yo=-Yo,tt=-tt,Et=-Et,$t=-$t),Te[R.bones[Ve]]=wd([Vt+(Yo-Vt)*Ge,Tt+(tt-Tt)*Ge,no+(Et-no)*Ge,bo+($t-bo)*Ge])}let ye=j*3,le=ue*3;return{q:Te,hips:[R.H[ye]+(R.H[le]-R.H[ye])*Ge,R.H[ye+1]+(R.H[le+1]-R.H[ye+1])*Ge,R.H[ye+2]+(R.H[le+2]-R.H[ye+2])*Ge]}}let c=e.texture({data:[[[255,255,255,255]]]});function f(R,U){let D=(V,Ee)=>new Float32Array(U,V,Ee),Y=R.bones,I=Y.length,j={};Y.forEach((V,Ee)=>{j[V.name]=Ee});let ue=[];for(let V=0;V<I;V++)ue.push(Array.from(D(R.ibm+V*64,16)));let Ge=Y.map(V=>ua(V.t,V.r,V.s)),Te=[];for(let V=0;V<I;V++){let Ee=Y[V].parent;Te[V]=Ee<0?Ge[V]:Zn(Te[Ee],Ge[V])}let ye=Te.map(xd),le=R.meshes.map(V=>{let Ee=D(V.pos,V.n*3),ze=D(V.nrm,V.n*3),de=D(V.uv,V.n*2),qe=new Uint8Array(U,V.jnt,V.n*4),dt=D(V.wgt,V.n*4),pt=new Uint16Array(U,V.idx,V.ni),_t={};for(let Nt in V.morphs){let Wo=V.morphs[Nt];_t[Nt]={idx:new Uint16Array(U,Wo.idx,Wo.n),d:D(Wo.d,Wo.n*3)}}let Ht=new Float32Array(V.n*3),Lt=new Float32Array(V.n*3),Jt=new Float32Array(V.n*3),Ct=e.buffer({data:Ht,usage:"dynamic"}),Pt=e.buffer({data:Lt,usage:"dynamic"}),to=/avaturn_hair/.test(V.name),Mt=/EyeAO|Eyelash/.test(V.name),po=/Body|Head/.test(V.name),Po=V.kind||0;return{m:V,pos:Ee,nrm:ze,uv:de,jnt:qe,wgt:dt,idx:pt,morphs:_t,outP:Ht,outN:Lt,work:Jt,pb:Ct,nbuf:Pt,tex:V.tex?_k(e,t+V.tex):c,kind:Po,alphaScale:/EyeAO/.test(V.name)?.25:1,blend:V.blend||to,alphaCut:to?.35:Mt?.02:0,skin:po?1:0}}),Ve=e({vert:nx,frag:rx,attributes:{position:e.prop("pb"),normal:e.prop("nb"),uv:e.prop("uv")},elements:e.prop("el"),uniforms:{tex:e.prop("tex"),alphaCut:e.prop("alphaCut"),skin:e.prop("skin"),kind:e.prop("kind"),alphaScale:e.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow,boothLamp:()=>k&&!z?k.lamp:[0,0,0,0],court:()=>k||z?0:1,candle:()=>z?1:0},cull:{enable:!1}}),zt=e({vert:nx,frag:rx,attributes:{position:e.prop("pb"),normal:e.prop("nb"),uv:e.prop("uv")},elements:e.prop("el"),uniforms:{tex:e.prop("tex"),alphaCut:e.prop("alphaCut"),skin:e.prop("skin"),kind:e.prop("kind"),alphaScale:e.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow,boothLamp:()=>k&&!z?k.lamp:[0,0,0,0],court:()=>k||z?0:1,candle:()=>z?1:0},cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"one minus src alpha"}}}),St=.3;for(let V of le)if(V.uvBuf=e.buffer(V.uv),/Body/.test(V.m.name)){let Ee=[],ze=[];for(let de=0;de<V.idx.length;de+=3){let qe=V.idx[de],dt=V.idx[de+1],pt=V.idx[de+2];(V.pos[qe*3+1]<St&&V.pos[dt*3+1]<St&&V.pos[pt*3+1]<St?ze:Ee).push(qe,dt,pt)}V.el=e.elements({data:new Uint16Array(Ee),type:"uint16"}),ze.length&&(V.sockEl=e.elements({data:new Uint16Array(ze),type:"uint16"}))}else V.el=e.elements({data:V.idx,type:"uint16"});let Vt=Te[j.Hips],Tt=fs([1,0,0],-Math.PI/2),no=Zn(ua([ei.x-Vt[12]*Tr,ei.hipY-Vt[14]*Tr,ei.z+Vt[13]*Tr],Tt,[1,1,1]),ua([0,0,0],[0,0,0,1],[Tr,Tr,Tr])),bo=new Array(I),Yo=-1,tt=(V,Ee,ze)=>Zn(ua([V,0,Ee],fs([0,1,0],ze),[1,1,1]),ua([0,0,0],[0,0,0,1],[Tr,Tr,Tr])),Et=["LeftFoot","RightFoot","LeftToeBase","RightToeBase"].map(V=>j[V]),$t=Et.map(V=>Te[V][13]*Tr);function ro(V){if(s&&s.walk)return wo(V);let Ee=wk(V.phase),ze={},de=Lt=>{for(let Jt in Lt){let Ct=Lt[Jt],Pt=Bh(Ct[0],Ct[1],Ct[2]);ze[Jt]=ze[Jt]?nn(ze[Jt],Pt):Pt}};de(Ee.swing),de(Ee.pose);let qe=Math.cos(V.heading),dt=-Math.sin(V.heading),pt=tt(V.x+qe*Ee.sway,V.z+dt*Ee.sway,V.heading),_t=new Array(I);for(let Lt=0;Lt<I;Lt++){let Jt=Y[Lt],Ct=Ge[Lt],Pt=ze[Jt.name];if(Pt){let to=ye[Lt],Mt=nn(Xa(to),nn(Pt,to));Ct=ua(Jt.t,nn(Jt.r,Mt),Jt.s)}_t[Lt]=Jt.parent<0?Zn(pt,Ct):Zn(_t[Jt.parent],Ct)}let Ht=1/0;Et.forEach((Lt,Jt)=>{Ht=Math.min(Ht,_t[Lt][13]-$t[Jt])});for(let Lt=0;Lt<I;Lt++)_t[Lt]=_t[Lt].slice(),_t[Lt][13]-=Ht,bo[Lt]=Zn(_t[Lt],ue[Lt]);return{blink:0}}function wo(V){let Ee=s.walk,ze=i(Ee,(V.phase+Ee.phase0)*Ee.frames),de=tt(V.x,V.z,V.heading),qe=new Array(I),dt=j.Hips;for(let _t=0;_t<I;_t++){let Ht=Y[_t],Lt=Ge[_t],Jt=ze.q[Ht.name];if(Jt){let Ct=ye[_t],Pt=nn(Xa(Ct),nn(Jt,Ct)),to=_t===dt?[Ht.t[0]+ze.hips[0],Ht.t[1]+ze.hips[1],Ht.t[2]+ze.hips[2]]:Ht.t;Lt=ua(to,nn(Ht.r,Pt),Ht.s)}qe[_t]=Ht.parent<0?Zn(de,Lt):Zn(qe[Ht.parent],Lt)}let pt=1/0;Et.forEach((_t,Ht)=>{pt=Math.min(pt,qe[_t][13]-$t[Ht])});for(let _t=0;_t<I;_t++)qe[_t]=qe[_t].slice(),qe[_t][13]-=pt,bo[_t]=Zn(qe[_t],ue[_t]);return{blink:0}}function ie(V,Ee){let ze=Math.sin(V*2*Math.PI/4.6),de=Math.sin(V*.37)*.6+Math.sin(V*.83+1)*.4,qe={LeftUpLeg:[-86,-6,0],RightUpLeg:[-84,7,0],LeftLeg:[88,0,0],RightLeg:[82,0,0],LeftFoot:[-4,0,0],RightFoot:[-2,0,0],Spine:[6,0,0],Spine1:[5+ze*.8,0,0],Spine2:[4+ze*.6,0,0],Neck:[10,0,0],Head:[12+de*2,de*2.5,0],LeftArm:[0,0,-72],RightArm:[0,0,72],LeftForeArm:[0,-62,0],RightForeArm:[0,62,0],LeftHand:[0,0,-10],RightHand:[0,0,10]},dt={};for(let Ct in qe){let Pt=qe[Ct];dt[Ct]=Bh(Pt[0],Pt[1],Pt[2])}let pt=tt(Ee.x,Ee.z,Ee.heading),_t=new Array(I);for(let Ct=0;Ct<I;Ct++){let Pt=Y[Ct],to=Ge[Ct],Mt=dt[Pt.name];if(Mt){let po=ye[Ct],Po=nn(Xa(po),nn(Mt,po));to=ua(Pt.t,nn(Pt.r,Po),Pt.s)}_t[Ct]=Pt.parent<0?Zn(pt,to):Zn(_t[Pt.parent],to)}let Lt=_t[j.Hips][13]-(Ee.y+.1);for(let Ct=0;Ct<I;Ct++)_t[Ct]=_t[Ct].slice(),_t[Ct][13]-=Lt,bo[Ct]=Zn(_t[Ct],ue[Ct]);let Jt=V%4.1;return{blink:Jt<.16?Math.sin(Jt/.16*Math.PI):0}}let ce=V=>[Te[V][12],Te[V][13],Te[V][14]],G=(V,Ee)=>{let ze=Vl(V),de=Vl(f0(Ee,ls(ze,yd(Ee,ze)))),qe=Xh(ze,de);return xd([ze[0],ze[1],ze[2],0,de[0],de[1],de[2],0,qe[0],qe[1],qe[2],0,0,0,0,1])},Re={};for(let V of["Left","Right"]){let Ee=j[V+"Arm"],ze=j[V+"ForeArm"],de=j[V+"Hand"],qe=j[V+"HandMiddle1"];Re[V]={a:Ee,f:ze,h:de,upper:Wh(f0(ce(ze),ce(Ee)))*Tr,fore:Wh(f0(ce(de),ce(ze)))*Tr,dir0:Vl(f0(ce(ze),ce(Ee))),qf0:G(f0(ce(de),ce(ze)),[0,1,0]),qh0:G(f0(ce(qe),ce(de)),[0,1,0])}}let Qe={};for(let V of["Left","Right"])Qe[Re[V].a]={side:V,part:0},Qe[Re[V].f]={side:V,part:1},Qe[Re[V].h]={side:V,part:2};function Se(V,Ee,ze){if(!V||!V.length)return{x:.5,lift:0,press:0,finger:1,busy:0};let de=0,qe=V.length-1,dt=-1;for(;de<=qe;){let Wo=de+qe>>1;V[Wo].t<=Ee?(dt=Wo,de=Wo+1):qe=Wo-1}let pt=V[V.length-1],_t=V[0],Ht=dt>=0?V[dt]:{t:pt.t-ze,x:pt.x,w:pt.w},Lt=dt+1<V.length?V[dt+1]:{t:_t.t+ze,x:_t.x,w:_t.w},Jt=Math.max(.05,Lt.t-Ht.t),Ct=Math.min(.14,Jt*.45),Pt=Math.max(0,Math.min(1,(Ee-Ht.t-Ct)/Math.max(Jt-Ct-.03,.02))),to=Pt*Pt*(3-2*Pt),Mt=Ee-Ht.t,po=(.55+.45*Ht.w)*Math.exp(-Mt/.11),Po=Lt.t-Ee,Nt=Po<.05?(.55+.45*Lt.w)*(1-Po/.05):0;return{x:Ht.x+(Lt.x-Ht.x)*to,lift:Math.sin(Math.PI*Pt)*Math.min(.05,.012+Jt*.03)*(Jt>2.5?.4:1),press:Math.max(po,Nt),finger:Nt>po?((dt+1)*7+3)%4:(Math.max(dt,0)*7+3)%4,busy:Math.exp(-Mt/.9)}}let he={lean:0,turn:0,nod:0,pedal:0,last:-1},kt=["Index","Middle","Ring","Pinky"];function _(V){let Ee=ix.PLAY,ze=tx.cues,de=tx.time(),qe=ze&&ze.dur||158,dt={Left:Se(ze&&ze.left,de,qe),Right:Se(ze&&ze.right,de,qe)},pt=.35;if(ze&&ze.level&&ze.level.length){let co=de*8,_o=Math.floor(co)%ze.level.length,Bn=(_o+1)%ze.level.length;pt=ze.level[_o]+(ze.level[Bn]-ze.level[_o])*(co-Math.floor(co))}let _t=he.last<0?0:Math.min(.1,Math.max(0,V-he.last));he.last=V;let Ht=co=>Math.min(1,_t*co);he.lean+=(pt-he.lean)*Ht(1.2),he.turn+=(dt.Right.busy-dt.Left.busy-he.turn)*Ht(1.5),he.nod+=(Math.max(dt.Right.press,dt.Left.press*.7)-he.nod)*Ht(6),he.pedal+=((dt.Left.busy>.35?1:.15)-he.pedal)*Ht(5);let Lt=Math.sin(V*2*Math.PI/4.6),Jt=Math.sin(de*.41)*.6+Math.sin(de*.17+1)*.4,Ct={LeftUpLeg:[-80,-9,0],RightUpLeg:[-77,9,0],LeftLeg:[86,0,0],RightLeg:[64,0,0],LeftFoot:[-2,0,0],RightFoot:[12-10*he.pedal,0,0],Spine:[9+3.5*he.lean+Jt*1.6,he.turn*2.5,-he.turn*1.6],Spine1:[7+Lt*.8+2.5*he.lean,he.turn*2.5,-he.turn*1.2],Spine2:[6+Lt*.6+Jt*.8,he.turn*1.5,0],Neck:[13+3*he.lean,he.turn*3,0],Head:[15+he.nod*3.5+Jt*1.5,he.turn*5,Jt*1.5]};for(let co of["Left","Right"]){let _o=co==="Left"?-1:1,Bn=dt[co];kt.forEach((X,xe)=>{let ot=xe===Bn.finger?Bn.press:Bn.press*.2;Ct[co+"Hand"+X+"1"]=[0,0,_o*(20+3*xe+20*ot)],Ct[co+"Hand"+X+"2"]=[0,0,_o*(26+4*xe-6*ot)],Ct[co+"Hand"+X+"3"]=[0,0,_o*14]}),Ct[co+"HandThumb1"]=[0,_o*-18,_o*10]}let Pt={};for(let co in Ct){let _o=Ct[co];Pt[co]=Bh(_o[0],_o[1],_o[2])}let to=Te[j.Hips][13]*Tr,Mt=Zn(ua([Ee.stoolX,Ee.stoolTop+.1-to,Ee.stoolFront+.15],fs([0,1,0],Ee.heading),[1,1,1]),ua([0,0,0],[0,0,0,1],[Tr,Tr,Tr])),po=(Ee.keyX0+Ee.keyX1)/2,Po={};for(let co of["Left","Right"]){let _o=dt[co],Bn=co==="Left"?po-.4+.33*_o.x:po+.07+.33*_o.x;Po[co]=[Bn,Ee.keyTop+.062+_o.lift-_o.press*.012,Ee.keyFront+.075]}let Nt=new Array(I),Wo={},xa=[0,1,0];for(let co=0;co<I;co++){let _o=Y[co],Bn=Ge[co],X=Pt[_o.name],xe=Qe[co];if(xe){let ot=Re[xe.side];if(xe.part===0){let ut=Nt[_o.parent],mt=Zn(ut,Ge[co]),hn=[mt[12],mt[13],mt[14]],fr=nn(xd(ut),Xa(ye[_o.parent])),Nr=f0(Po[xe.side],hn),un=Wh(Nr),Sr=(ot.upper+ot.fore)*.995;un>Sr&&(Nr=ls(Nr,Sr/un),un=Sr);let dn=ls(Nr,1/un),xo=(ot.upper*ot.upper-ot.fore*ot.fore+un*un)/(2*un),tr=Math.sqrt(Math.max(0,ot.upper*ot.upper-xo*xo)),Zo=[xe.side==="Left"?-.6:.6,-.8,.3];Zo=Vl(f0(Zo,ls(dn,yd(Zo,dn))));let jn=Xl(hn,Xl(ls(dn,xo),ls(Zo,tr)));ot.T=Xl(hn,Nr),ot.elbow=jn;let Wr=Vl(f0(jn,hn)),Vr=nn(bk(yk(fr,ot.dir0),Wr),fr);Wo[co]=Vr,X=nn(Xa(fr),Vr)}else if(xe.part===1){let ut=nn(G(f0(ot.T,ot.elbow),xa),Xa(ot.qf0));Wo[co]=ut,X=nn(Xa(Wo[_o.parent]),ut)}else{let ut=dt[xe.side],mt=nn(G([xe.side==="Left"?.12:-.12,-.2-.1*ut.press,-1],xa),Xa(ot.qh0));Wo[co]=mt,X=nn(Xa(Wo[_o.parent]),mt)}}if(X){let ot=ye[co],ut=nn(Xa(ot),nn(X,ot));Bn=ua(_o.t,nn(_o.r,ut),_o.s)}Nt[co]=_o.parent<0?Zn(Mt,Bn):Zn(Nt[_o.parent],Bn)}for(let co=0;co<I;co++)bo[co]=Zn(Nt[co],ue[co]);a.pianist={head:[Nt[j.Head][12],Nt[j.Head][13],Nt[j.Head][14]]};let p0=V%4.3;return{blink:p0<.16?Math.sin(p0/.16*Math.PI):0}}function wt(V,Ee){if(z)return _(V);if(k)return ie(V,k);if(Ee)return ro(Ee);let ze=Math.sin(V*2*Math.PI/4.2),de=V%3.7,qe=de<.16?Math.sin(de/.16*Math.PI):0,dt=Math.sin(V*.45),pt=Math.sin(V*.31+.8),_t=Math.max(0,Math.sin(V*.085)-.75)*4,Ht={RightArm:[0,-22*_t,11*dt],RightForeArm:[0,8+26*_t,0],RightHand:[38*pt,0,6*Math.sin(V*.7)],LeftUpLeg:[0,0,3.2*Math.sin(V*.36)],RightFoot:[5*Math.sin(V*.52+.4),0,0],Head:[0,1.6*Math.sin(V*.21),0]};["Index","Middle","Ring","Pinky"].forEach((Mt,po)=>{let Po=Math.sin(V*1.1-po*.5);Ht["RightHand"+Mt+"1"]=[0,0,8+12*Po],Ht["RightHand"+Mt+"2"]=[0,0,6+10*Po]});let Lt={},Jt=(Mt,po)=>{for(let Po in Mt){let Nt=Mt[Po],Wo=Bh(Nt[0]*po,Nt[1]*po,Nt[2]*po);Lt[Po]=Lt[Po]?nn(Lt[Po],Wo):Wo}};Jt(Vh,1),Jt({Spine1:[ze*.8,0,0],Spine2:[ze*.6,0,0]},1),Jt(Ht,1);let Ct=new Array(I),Pt=new Array(I);for(let Mt=0;Mt<I;Mt++){let po=Y[Mt],Po=Ge[Mt],Nt=Lt[po.name];if(Nt){let Wo=ye[Mt],xa=nn(Xa(Wo),nn(Nt,Wo));Po=ua(po.t,nn(po.r,xa),po.s)}Ct[Mt]=po.parent<0?Zn(no,Po):Zn(Ct[po.parent],Po),Pt[Mt]=null}for(let Mt=0;Mt<I;Mt++)bo[Mt]=Zn(Ct[Mt],ue[Mt]);let to=Mt=>[Mt[12],Mt[13],Mt[14]];return a.headPos=to(Ct[j.Head]),a.hipsPos=to(Ct[j.Hips]),a.headM=Ct[j.Head],{blink:qe}}function xt(V,Ee){let{pos:ze,nrm:de,jnt:qe,wgt:dt,outP:pt,outN:_t,work:Ht,m:Lt}=V,Jt=Lt.n,Ct=ze;if(Ee){Ht.set(ze);for(let Pt in V.morphs){let to=Ee[Pt]||0;if(to<=0)continue;let Mt=V.morphs[Pt];for(let po=0;po<Mt.idx.length;po++){let Po=Mt.idx[po]*3;Ht[Po]+=Mt.d[po*3]*to,Ht[Po+1]+=Mt.d[po*3+1]*to,Ht[Po+2]+=Mt.d[po*3+2]*to}}Ct=Ht}for(let Pt=0;Pt<Jt;Pt++){let to=Ct[Pt*3],Mt=Ct[Pt*3+1],po=Ct[Pt*3+2],Po=de[Pt*3],Nt=de[Pt*3+1],Wo=de[Pt*3+2],xa=0,p0=0,co=0,_o=0,Bn=0,X=0;for(let ot=0;ot<4;ot++){let ut=dt[Pt*4+ot];if(ut===0)continue;let mt=bo[qe[Pt*4+ot]];xa+=ut*(mt[0]*to+mt[4]*Mt+mt[8]*po+mt[12]),p0+=ut*(mt[1]*to+mt[5]*Mt+mt[9]*po+mt[13]),co+=ut*(mt[2]*to+mt[6]*Mt+mt[10]*po+mt[14]),_o+=ut*(mt[0]*Po+mt[4]*Nt+mt[8]*Wo),Bn+=ut*(mt[1]*Po+mt[5]*Nt+mt[9]*Wo),X+=ut*(mt[2]*Po+mt[6]*Nt+mt[10]*Wo)}pt[Pt*3]=xa,pt[Pt*3+1]=p0,pt[Pt*3+2]=co;let xe=Math.hypot(_o,Bn,X)||1;_t[Pt*3]=_o/xe,_t[Pt*3+1]=Bn/xe,_t[Pt*3+2]=X/xe}Lt.grid&&!Yt&&!k&&!z&&Dt(V),V.sway&&jo(V),V.pb.subdata(pt),V.nbuf.subdata(_t)}function Dt(V){let[Ee,ze]=V.m.grid,de=V.outP,qe=V.outN,dt=ax.seat+.012;for(let pt=1;pt<Ee;pt++){let _t=Math.pow(1-pt/(Ee-1),1.5);for(let Ht=0;Ht<ze;Ht++){let Lt=(pt*ze+Ht)*3;de[Lt+1]>dt?de[Lt+1]=dt+(de[Lt+1]-dt)*Math.max(_t,.15):de[Lt+1]=dt}}for(let pt=0;pt<qe.length;pt+=3)qe[pt]=0,qe[pt+1]=1,qe[pt+2]=0}let Yt=!1,So=(V,Ee,ze,de,qe)=>({bone:j[V],rate:Ee,damp:ze,drag:de,most:qe,x:[0,0,0],v:[0,0,0],p:null,vel:[0,0,0]}),Bo={head:So("Head",15,.32,.012,.035),chest:So("Spine2",9,.38,.03,.1),hips:So("Hips",7,.42,.045,.16)},Lo=-1;function fo(V){let Ee=Lo<0?0:V-Lo;Lo=V;for(let ze in Bo){let de=Bo[ze],qe=bo[de.bone],dt=Te[de.bone],pt=dt[12],_t=dt[13],Ht=dt[14],Lt=[qe[0]*pt+qe[4]*_t+qe[8]*Ht+qe[12],qe[1]*pt+qe[5]*_t+qe[9]*Ht+qe[13],qe[2]*pt+qe[6]*_t+qe[10]*Ht+qe[14]];if(!de.p||!(Ee>0)||Ee>.25||Math.hypot(Lt[0]-de.p[0],Lt[1]-de.p[1],Lt[2]-de.p[2])>.5){de.p=Lt,de.x=[0,0,0],de.v=[0,0,0],de.vel=[0,0,0];continue}let Jt=[(Lt[0]-de.p[0])/Ee,(Lt[1]-de.p[1])/Ee,(Lt[2]-de.p[2])/Ee],Ct=Math.max(1,Math.ceil(Ee/.016)),Pt=Ee/Ct;for(let Mt=0;Mt<3;Mt++){let po=Math.max(-30,Math.min(30,(Jt[Mt]-de.vel[Mt])/Ee)),Po=-Jt[Mt]*de.drag;for(let Nt=0;Nt<Ct;Nt++)de.v[Mt]+=((Po-de.x[Mt])*de.rate*de.rate-2*de.damp*de.rate*de.v[Mt]-po)*Pt,de.x[Mt]+=de.v[Mt]*Pt}let to=Math.hypot(de.x[0],de.x[1],de.x[2]);if(to>de.most){let Mt=de.most/to;de.x=[de.x[0]*Mt,de.x[1]*Mt,de.x[2]*Mt]}de.p=Lt,de.vel=Jt}}for(let V of le){let Ee=V.m,ze=Ee.n,de=null,qe=null;if(Ee.kind===9){qe="head",de=new Float32Array(ze);for(let dt=0;dt<ze;dt++){let pt=V.uv[dt*2]<-.5?0:V.uv[dt*2+1];de[dt]=pt*pt}}else if(Ee.name==="scarf"){qe="chest",de=new Float32Array(ze);for(let dt=0;dt<ze;dt++)de[dt]=l(1.52,1.12,V.pos[dt*3+1])}else if(Ee.grid){qe="hips",de=new Float32Array(ze);let dt=Ee.grid[0],pt=Ee.grid[1];for(let _t=0;_t<ze;_t++)de[_t]=Math.pow(Math.floor(_t/pt)/(dt-1),1.6)}de&&(V.sway=de,V.spring=Bo[qe],V.loose=qe)}function jo(V){if(!Yt&&!z&&!k)return;let Ee=V.spring.x,ze=V.sway,de=V.outP;if(!(Math.abs(Ee[0])+Math.abs(Ee[1])+Math.abs(Ee[2])<1e-5))for(let qe=0,dt=ze.length;qe<dt;qe++){let pt=ze[qe];pt>0&&(de[qe*3]+=Ee[0]*pt,de[qe*3+1]+=Ee[1]*pt,de[qe*3+2]+=Ee[2]*pt)}}function an(V,Ee){Yt=!!Ee;let ze=wt(V,Ee);fo(V);let de={eyeBlinkLeft:ze.blink,eyeBlinkRight:ze.blink};for(let qe of le)xt(qe,Object.keys(qe.morphs).length?de:null);a.pose=ze}return{parts:le,update:an,drawOpaque:Ve,drawBlend:zt,state:a}}function l(R,U,D){let Y=Math.min(1,Math.max(0,(D-R)/(U-R)));return Y*Y*(3-2*Y)}let d=Mk(),h=kk(),v=h?e.texture({data:h,flipY:!1,min:"linear",mag:"linear"}):c,u=e({vert:Sk,frag:Ek,attributes:{position:d.pos,normal:d.nrm,uv:d.uv,kind:d.kind},elements:new Uint16Array(d.idx),uniforms:{model:e.prop("model"),turn:0,fold:1.12,cover:v},cull:{enable:!1}}),p=Ak(),m=e({vert:zk,frag:Tk,attributes:{position:p.pos,normal:p.nrm,color:p.col,mat:p.mat},elements:new Uint16Array(p.idx),uniforms:{model:e.prop("model"),pulse:e.prop("pulse")},cull:{enable:!1}}),g=e({vert:Lk,frag:Nk,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{center:e.prop("center"),size:e.prop("size"),pulse:e.prop("pulse")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});function y(R){let U=R.headM,D=le=>{let Ve=Math.hypot(...le)||1;return le.map(zt=>zt/Ve)},Y=D([U[4],U[5],U[6]]),I=D([U[8],U[9],U[10]]),j=Y,ue=I.map(le=>-le),Ge=[ue[1]*j[2]-ue[2]*j[1],ue[2]*j[0]-ue[0]*j[2],ue[0]*j[1]-ue[1]*j[0]],Te=R.headPos,ye=[0,1,2].map(le=>Te[le]+Y[le]*.06+I[le]*.185);return[Ge[0],Ge[1],Ge[2],0,ue[0],ue[1],ue[2],0,j[0],j[1],j[2],0,ye[0],ye[1],ye[2],1]}let b=-1,w="",M=null,k=null,z=!1;function P(R){if(!o)return;let U=(ex.motion,r()),D=M?[M.x,M.z,M.heading,M.phase].map(I=>I.toFixed(4)).join():"";(k||z||D!==w||!M&&Math.abs(U-b)>(ex.isPhone?1/30:0))&&(o.update(U,M),b=U,w=D);for(let I of o.parts)I.blend||(o.drawOpaque({pb:I.pb,nb:I.nbuf,uv:I.uvBuf,el:I.el,tex:I.tex,alphaCut:I.alphaCut,skin:I.skin,kind:I.kind,alphaScale:I.alphaScale}),I.sockEl&&o.drawOpaque({pb:I.pb,nb:I.nbuf,uv:I.uvBuf,el:I.sockEl,tex:c,alphaCut:0,skin:0,kind:8,alphaScale:1}));let Y=o.state;if(Y.headM&&!M&&!k&&!z){u({model:y(Y)});let I=Y.headPos,j=Math.sin(U*1.3)*.02,ue=[I[0],I[1]+.62+j,I[2]+.05],Ge=U*.6,Te=ua(ue,nn(fs([0,1,0],Ge),fs([0,0,1],.18)),[1.2,1.2,1.2]),ye=.5+.5*Math.sin(U*2);m({model:Te,pulse:ye}),a.glowPos=ue,a.glow=.06+.03*ye,g({center:[ue[0],ue[1]-.12,ue[2]],size:.1,pulse:ye})}for(let I of o.parts)I.blend&&o.drawBlend({pb:I.pb,nb:I.nbuf,uv:I.uvBuf,el:I.el,tex:I.tex,alphaCut:I.alphaCut,skin:I.skin,kind:I.kind,alphaScale:I.alphaScale})}return P.state=a,P.place=ei,P.setWalk=R=>{M=R||null,M&&(a.glow=0)},P.setSeat=R=>{k=R||null,a.glow=k?0:a.glow,b=-1},P.setPiano=R=>{R=!!R,R!==z&&(z=R,z&&(a.glow=0),b=-1)},P};_d.exports.PLACE=ei});var Md=ke((gz,fx)=>{"use strict";fx.exports={name:"Muzammil",title:"Hi, I\u2019m Muzammil.",text:`I\u2019m a self-taught artist. I paint emotions. Grief, longing, love, and the quiet ways we keep holding on. I borrow the light and stillness of the Renaissance to talk about very modern feelings.

This gallery is my portfolio, built brick by pixel, so my work has a home that never closes. Every painting comes with a few words, because some feelings need both a frame and a sentence.

You\u2019ll find me in the tree court, catching sunlight and trying not to get too absorbed. Wander the halls, stay as long as you like, and don\u2019t worry about the time. In here, the only thing that\u2019s drying is the paint.`}});var Sd=ke((xz,mx)=>{"use strict";var px=Ma(),hx=sl(),hs=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function kd(){return px.isPhone||!window.matchMedia||!window.matchMedia("(pointer: fine)").matches?!1:window.innerWidth>=900&&window.innerHeight>=520}var Rk=`
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
`,ux=!1;function vx(){if(ux)return;ux=!0;let e=document.createElement("style");e.textContent=Rk,document.head.appendChild(e)}var Ok='<svg class="visit-play" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="10.2"/><path d="M10 8.4l6 3.6-6 3.6z" fill="currentColor" stroke="none"/></svg>';function Ck(e){return!e||!e.visit||!kd()?"":(vx(),`<button type="button" class="visit-btn" data-visit="${hs(e.slug||"")}" aria-label="Visit what remained: watch ${hs(e.title)} come to life">${Ok}<span>Visit what remained</span></button>`)}function Pk(e){let t=e.getContext("2d");e.width=e.height=160;let o=t.createImageData(160,160),n=!0,r=0;return function a(s){if(n){if(s-r>70){r=s;let i=o.data;for(let c=0;c<i.length;c+=4){let f=Math.random()*255;i[c]=i[c+1]=i[c+2]=f,i[c+3]=255}t.putImageData(o,0,0),e.style.transform=`translate(${(Math.random()*6-3).toFixed(1)}%, ${(Math.random()*6-3).toFixed(1)}%)`}requestAnimationFrame(a)}}(0),()=>{n=!1}}var Yl=null;function Ik(e){if(Yl||!e||!e.visit)return;vx();let t=document.activeElement;document.body.classList.add("visiting");let o="images/web/"+e.slug+(px.isPhone?"-1024":"")+".webp",n=document.createElement("div");n.className="visit",n.setAttribute("role","dialog"),n.setAttribute("aria-modal","true"),n.setAttribute("aria-label","Visiting "+e.title),n.innerHTML=`
		<video muted playsinline preload="auto" ${e.visit.poster?`poster="${hs(e.visit.poster)}"`:""}></video>
		<img class="visit-art" alt="${hs(e.title)}, ${hs(hx(e))}" src="${hs(o)}">
		<canvas class="visit-grain" aria-hidden="true"></canvas>
		<div class="visit-vignette" aria-hidden="true"></div>
		<div class="visit-bar top" aria-hidden="true"></div>
		<div class="visit-bar bottom" aria-hidden="true"></div>
		<div class="visit-title">
			<span class="visit-kicker">A visit</span>
			<span class="visit-name">${hs(e.title)}</span>
			<span class="visit-meta">${hs(hx(e))}</span>
		</div>
		<button type="button" class="visit-close" aria-label="Return to the gallery">\xD7</button>
		<button type="button" class="visit-skip">Skip</button>
		<div class="visit-end">
			<button type="button" class="primary" data-act="back">Return to the gallery</button>
			<button type="button" data-act="again">Watch again</button>
		</div>`,document.body.appendChild(n);let r=n.querySelector("video"),a=n.querySelector(".visit-title"),s=Pk(n.querySelector(".visit-grain")),i=[],c=(m,g)=>i.push(setTimeout(m,g)),f=m=>m.stopPropagation();["mousedown","pointerdown","click","wheel","touchstart","touchmove"].forEach(m=>n.addEventListener(m,f));let l=m=>{m.key==="Escape"?(m.preventDefault(),p()):m.key===" "&&!(m.target&&m.target.tagName==="BUTTON")&&(m.preventDefault(),v()),m.stopImmediatePropagation()};window.addEventListener("keydown",l,!0);let d=m=>m.stopImmediatePropagation();window.addEventListener("keyup",d,!0);let h=!1;function v(){h||(h=!0,a.classList.add("on"),n.classList.add("resolved"),c(()=>{let m=n.querySelector('[data-act="back"]');m&&m.focus({preventScroll:!0})},1300))}function u(){h=!1,n.classList.remove("resolved"),a.classList.remove("on");try{r.currentTime=0}catch(g){}let m=r.play();m&&m.catch&&m.catch(()=>v()),n.classList.add("playing"),c(()=>{h||a.classList.add("on")},1600),c(()=>{h||a.classList.remove("on")},6200)}r.addEventListener("timeupdate",()=>{r.duration&&r.currentTime>r.duration-1.2&&v()}),r.addEventListener("ended",v),r.addEventListener("error",v);function p(){if(Yl){Yl=null,i.forEach(clearTimeout),n.classList.remove("on");try{r.pause()}catch(m){}window.removeEventListener("keydown",l,!0),window.removeEventListener("keyup",d,!0),document.body.classList.remove("visiting"),setTimeout(()=>{s(),n.remove(),t&&t.focus&&t.focus({preventScroll:!0})},1150)}}n.querySelector(".visit-close").addEventListener("click",p),n.querySelector(".visit-skip").addEventListener("click",()=>{try{r.pause()}catch(m){}v()}),n.querySelector(".visit-end").addEventListener("click",m=>{let g=m.target.closest("button");g&&(g.dataset.act==="back"&&p(),g.dataset.act==="again"&&(i.forEach(clearTimeout),u()))}),r.src=e.visit.video,Yl={close:p},requestAnimationFrame(()=>{n.classList.add("on"),c(u,1300)})}var dx={};function $k(e){if(!e||!e.visit||dx[e.visit.video]||!kd())return;dx[e.visit.video]=!0;let t=document.createElement("link");t.rel="preload",t.as="video",t.href=e.visit.video,document.head.appendChild(t)}mx.exports={available:kd,button:Ck,open:Ik,warm:$k,get active(){return!!Yl}}});var yx=ke((yz,xx)=>{"use strict";var Fk=Ma(),bc=[0,0],mc=[0,0],N0=null,Ad=0;if(typeof window!="undefined"){window.addEventListener("pointermove",t=>{t.pointerType!=="touch"&&(bc[0]=Math.max(-1,Math.min(1,t.clientX/window.innerWidth*2-1)),bc[1]=Math.max(-1,Math.min(1,t.clientY/window.innerHeight*2-1)),Ad=performance.now())},{passive:!0});let e=()=>{Ad=performance.now()};["wheel","touchstart","touchmove","keydown","pointerdown"].forEach(t=>window.addEventListener(t,e,{passive:!0,capture:!0})),window.addEventListener("deviceorientation",t=>{t.gamma===null||t.beta===null||(N0||(N0=[t.gamma,t.beta]),N0[0]+=(t.gamma-N0[0])*.01,N0[1]+=(t.beta-N0[1])*.01,bc[0]=Math.max(-1,Math.min(1,(t.gamma-N0[0])/14)),bc[1]=Math.max(-1,Math.min(1,(t.beta-N0[1])/14)))},{passive:!0})}var gx=0,gc=null,Kh=null,h0=[0,0,0],Ed=0,xc=null,yc=0,ti={eye:[0,0,0],target:[0,0,0],fov:50,roll:0},qk={apply(e,t){let o=Math.min(.1,Math.max(0,t-gx));gx=t;let n=e.eye,r=e.target,a=[r[0]-n[0],r[1]-n[1],r[2]-n[2]],s=Math.hypot(a[0],a[1],a[2])||1;a=[a[0]/s,a[1]/s,a[2]/s];let i=[-a[2],0,a[0]],c=Math.hypot(i[0],i[2])||1;i=[i[0]/c,0,i[2]/c];let f=[i[1]*a[2]-i[2]*a[1],i[2]*a[0]-i[0]*a[2],i[0]*a[1]-i[1]*a[0]],l=!gc;if(gc&&o>0){let b=[n[0]-gc[0],n[1]-gc[1],n[2]-gc[2]],w=Math.hypot(b[0],b[1],b[2]);if(w>2.5)l=!0;else{let k=Math.min(1,o*5);for(let z=0;z<3;z++)h0[z]+=(b[z]/o-h0[z])*k}let M=Math.hypot(r[0]-Kh[0],r[1]-Kh[1],r[2]-Kh[2]);yc=w/o<.12&&M/o<.2?yc+o:0}l&&(h0[0]=h0[1]=h0[2]=0,yc=0),gc=n.slice(),Kh=r.slice(),Ed=Math.hypot(h0[0],h0[1],h0[2]);let d=Math.min(1,o*2.6);mc[0]+=(bc[0]-mc[0])*d,mc[1]+=(bc[1]-mc[1])*d;let h=Math.max(.03,Math.min(.32,s*.05)),v=(Fk.isPhone&&!N0?1.5:1)*Math.min(1,yc/2.5),u=(Math.sin(t*.131)*.55+Math.sin(t*.071+1.3)*.45)*h*.55*v,p=Math.sin(t*.097+.6)*h*.16*v,m=mc[0]*h+u,g=-mc[1]*h*.45+p;for(let b=0;b<3;b++)ti.eye[b]=n[b]+i[b]*m+f[b]*g,ti.target[b]=r[b]+(i[b]*m+f[b]*g)*.12;n[1]>.05&&(ti.eye[1]=Math.max(.05,ti.eye[1]));let y=h0[0]*i[0]+h0[2]*i[2];return ti.fov=e.fov+Math.min(3.5,Ed*.55),ti.roll=(e.roll||0)+Math.max(-.035,Math.min(.035,-y*.006)),ti},pull(e,t){(xc===null||!(Math.abs(e.focus-xc)<40))&&(xc=e.focus);let o=1/60;xc+=(e.focus-xc)*Math.min(1,o*3.2),e.focus=xc,e.aperture>0&&(e.aperture*=1+.25*Math.min(1,yc/3))},get speed(){return Ed},get resting(){return yc>2&&performance.now()-Ad>2e3}};xx.exports=qk});var zd=ke((bz,bx)=>{bx.exports=1e-6});var Td=ke((wz,wx)=>{wx.exports=Dk;function Dk(){var e=new Float32Array(3);return e[0]=0,e[1]=0,e[2]=0,e}});var Mx=ke((_z,_x)=>{_x.exports=Gk;function Gk(e){var t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}});var Ld=ke((Mz,kx)=>{kx.exports=Hk;function Hk(e,t,o){var n=new Float32Array(3);return n[0]=e,n[1]=t,n[2]=o,n}});var Nd=ke((kz,Sx)=>{Sx.exports=Uk;function Uk(e,t){var o=t[0],n=t[1],r=t[2],a=o*o+n*n+r*r;return a>0&&(a=1/Math.sqrt(a),e[0]=t[0]*a,e[1]=t[1]*a,e[2]=t[2]*a),e}});var Rd=ke((Sz,Ex)=>{Ex.exports=Bk;function Bk(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}});var Lx=ke((Ez,Tx)=>{Tx.exports=Wk;var Ax=Ld(),zx=Nd(),jk=Rd();function Wk(e,t){var o=Ax(e[0],e[1],e[2]),n=Ax(t[0],t[1],t[2]);zx(o,o),zx(n,n);var r=jk(o,n);return r>1?0:Math.acos(r)}});var Rx=ke((Az,Nx)=>{Nx.exports=Vk;function Vk(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}});var Cx=ke((zz,Ox)=>{Ox.exports=Xk;function Xk(e,t,o,n){return e[0]=t,e[1]=o,e[2]=n,e}});var Ix=ke((Tz,Px)=>{Px.exports=Yk;var Od=zd();function Yk(e,t){var o=e[0],n=e[1],r=e[2],a=t[0],s=t[1],i=t[2];return Math.abs(o-a)<=Od*Math.max(1,Math.abs(o),Math.abs(a))&&Math.abs(n-s)<=Od*Math.max(1,Math.abs(n),Math.abs(s))&&Math.abs(r-i)<=Od*Math.max(1,Math.abs(r),Math.abs(i))}});var Fx=ke((Lz,$x)=>{$x.exports=Kk;function Kk(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]}});var Dx=ke((Nz,qx)=>{qx.exports=Qk;function Qk(e,t,o){return e[0]=t[0]+o[0],e[1]=t[1]+o[1],e[2]=t[2]+o[2],e}});var Cd=ke((Rz,Gx)=>{Gx.exports=Zk;function Zk(e,t,o){return e[0]=t[0]-o[0],e[1]=t[1]-o[1],e[2]=t[2]-o[2],e}});var Ux=ke((Oz,Hx)=>{Hx.exports=Cd()});var Pd=ke((Cz,Bx)=>{Bx.exports=Jk;function Jk(e,t,o){return e[0]=t[0]*o[0],e[1]=t[1]*o[1],e[2]=t[2]*o[2],e}});var Wx=ke((Pz,jx)=>{jx.exports=Pd()});var Id=ke((Iz,Vx)=>{Vx.exports=eS;function eS(e,t,o){return e[0]=t[0]/o[0],e[1]=t[1]/o[1],e[2]=t[2]/o[2],e}});var Yx=ke(($z,Xx)=>{Xx.exports=Id()});var Qx=ke((Fz,Kx)=>{Kx.exports=tS;function tS(e,t,o){return e[0]=Math.min(t[0],o[0]),e[1]=Math.min(t[1],o[1]),e[2]=Math.min(t[2],o[2]),e}});var Jx=ke((qz,Zx)=>{Zx.exports=oS;function oS(e,t,o){return e[0]=Math.max(t[0],o[0]),e[1]=Math.max(t[1],o[1]),e[2]=Math.max(t[2],o[2]),e}});var ty=ke((Dz,ey)=>{ey.exports=nS;function nS(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e}});var ny=ke((Gz,oy)=>{oy.exports=rS;function rS(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e}});var ay=ke((Hz,ry)=>{ry.exports=aS;function aS(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e}});var iy=ke((Uz,sy)=>{sy.exports=sS;function sS(e,t,o){return e[0]=t[0]*o,e[1]=t[1]*o,e[2]=t[2]*o,e}});var ly=ke((Bz,cy)=>{cy.exports=iS;function iS(e,t,o,n){return e[0]=t[0]+o[0]*n,e[1]=t[1]+o[1]*n,e[2]=t[2]+o[2]*n,e}});var $d=ke((jz,fy)=>{fy.exports=cS;function cS(e,t){var o=t[0]-e[0],n=t[1]-e[1],r=t[2]-e[2];return Math.sqrt(o*o+n*n+r*r)}});var uy=ke((Wz,hy)=>{hy.exports=$d()});var Fd=ke((Vz,dy)=>{dy.exports=lS;function lS(e,t){var o=t[0]-e[0],n=t[1]-e[1],r=t[2]-e[2];return o*o+n*n+r*r}});var vy=ke((Xz,py)=>{py.exports=Fd()});var qd=ke((Yz,my)=>{my.exports=fS;function fS(e){var t=e[0],o=e[1],n=e[2];return Math.sqrt(t*t+o*o+n*n)}});var xy=ke((Kz,gy)=>{gy.exports=qd()});var Dd=ke((Qz,yy)=>{yy.exports=hS;function hS(e){var t=e[0],o=e[1],n=e[2];return t*t+o*o+n*n}});var wy=ke((Zz,by)=>{by.exports=Dd()});var My=ke((Jz,_y)=>{_y.exports=uS;function uS(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e}});var Sy=ke((eT,ky)=>{ky.exports=dS;function dS(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e}});var Ay=ke((tT,Ey)=>{Ey.exports=pS;function pS(e,t,o){var n=t[0],r=t[1],a=t[2],s=o[0],i=o[1],c=o[2];return e[0]=r*c-a*i,e[1]=a*s-n*c,e[2]=n*i-r*s,e}});var Ty=ke((oT,zy)=>{zy.exports=vS;function vS(e,t,o,n){var r=t[0],a=t[1],s=t[2];return e[0]=r+n*(o[0]-r),e[1]=a+n*(o[1]-a),e[2]=s+n*(o[2]-s),e}});var Ny=ke((nT,Ly)=>{Ly.exports=mS;function mS(e,t){t=t||1;var o=Math.random()*2*Math.PI,n=Math.random()*2-1,r=Math.sqrt(1-n*n)*t;return e[0]=Math.cos(o)*r,e[1]=Math.sin(o)*r,e[2]=n*t,e}});var Oy=ke((rT,Ry)=>{Ry.exports=gS;function gS(e,t,o){var n=t[0],r=t[1],a=t[2],s=o[3]*n+o[7]*r+o[11]*a+o[15];return s=s||1,e[0]=(o[0]*n+o[4]*r+o[8]*a+o[12])/s,e[1]=(o[1]*n+o[5]*r+o[9]*a+o[13])/s,e[2]=(o[2]*n+o[6]*r+o[10]*a+o[14])/s,e}});var Py=ke((aT,Cy)=>{Cy.exports=xS;function xS(e,t,o){var n=t[0],r=t[1],a=t[2];return e[0]=n*o[0]+r*o[3]+a*o[6],e[1]=n*o[1]+r*o[4]+a*o[7],e[2]=n*o[2]+r*o[5]+a*o[8],e}});var $y=ke((sT,Iy)=>{Iy.exports=yS;function yS(e,t,o){var n=t[0],r=t[1],a=t[2],s=o[0],i=o[1],c=o[2],f=o[3],l=f*n+i*a-c*r,d=f*r+c*n-s*a,h=f*a+s*r-i*n,v=-s*n-i*r-c*a;return e[0]=l*f+v*-s+d*-c-h*-i,e[1]=d*f+v*-i+h*-s-l*-c,e[2]=h*f+v*-c+l*-i-d*-s,e}});var qy=ke((iT,Fy)=>{Fy.exports=bS;function bS(e,t,o,n){var r=o[1],a=o[2],s=t[1]-r,i=t[2]-a,c=Math.sin(n),f=Math.cos(n);return e[0]=t[0],e[1]=r+s*f-i*c,e[2]=a+s*c+i*f,e}});var Gy=ke((cT,Dy)=>{Dy.exports=wS;function wS(e,t,o,n){var r=o[0],a=o[2],s=t[0]-r,i=t[2]-a,c=Math.sin(n),f=Math.cos(n);return e[0]=r+i*c+s*f,e[1]=t[1],e[2]=a+i*f-s*c,e}});var Uy=ke((lT,Hy)=>{Hy.exports=_S;function _S(e,t,o,n){var r=o[0],a=o[1],s=t[0]-r,i=t[1]-a,c=Math.sin(n),f=Math.cos(n);return e[0]=r+s*f-i*c,e[1]=a+s*c+i*f,e[2]=t[2],e}});var jy=ke((fT,By)=>{By.exports=MS;var us=Td()();function MS(e,t,o,n,r,a){var s,i;for(t||(t=3),o||(o=0),n?i=Math.min(n*t+o,e.length):i=e.length,s=o;s<i;s+=t)us[0]=e[s],us[1]=e[s+1],us[2]=e[s+2],r(us,us,a),e[s]=us[0],e[s+1]=us[1],e[s+2]=us[2];return e}});var Vy=ke((hT,Wy)=>{Wy.exports={EPSILON:zd(),create:Td(),clone:Mx(),angle:Lx(),fromValues:Ld(),copy:Rx(),set:Cx(),equals:Ix(),exactEquals:Fx(),add:Dx(),subtract:Cd(),sub:Ux(),multiply:Pd(),mul:Wx(),divide:Id(),div:Yx(),min:Qx(),max:Jx(),floor:ty(),ceil:ny(),round:ay(),scale:iy(),scaleAndAdd:ly(),distance:$d(),dist:uy(),squaredDistance:Fd(),sqrDist:vy(),length:qd(),len:xy(),squaredLength:Dd(),sqrLen:wy(),negate:My(),inverse:Sy(),normalize:Nd(),dot:Rd(),cross:Ay(),lerp:Ty(),random:Ny(),transformMat4:Oy(),transformMat3:Py(),transformQuat:$y(),rotateX:qy(),rotateY:Gy(),rotateZ:Uy(),forEach:jy()}});var Ky=ke((uT,Yy)=>{"use strict";function Xy(){let e={};return{on(t,o){return(e[t]=e[t]||[]).push(o),this},emit(t,o){(e[t]||[]).slice().forEach(n=>n(o))}}}Yy.exports=function(t){let o=t.ownerDocument||document,n=Xy(),r=null,a={dx:0,dy:0,dt:0},s=0,i=()=>o.pointerLockElement||o.webkitPointerLockElement||null,c=()=>{if(i())return;let l=t.requestPointerLock||t.webkitRequestPointerLock;if(l)try{let d=l.call(t);d&&d.catch&&d.catch(()=>{})}catch(d){}};t.addEventListener("mousedown",c,!1);let f=()=>{if(!i()){r&&(n.emit("release"),r.emit("end"),r=null);return}r=Xy(),s=Date.now(),n.emit("attain",r)};return o.addEventListener("pointerlockchange",f),o.addEventListener("webkitpointerlockchange",f),o.addEventListener("pointerlockerror",()=>n.emit("error")),(o.body||t).addEventListener("mousemove",l=>{r&&(a.dx=l.movementX||l.webkitMovementX||0,a.dy=l.movementY||l.webkitMovementY||0,a.dt=Date.now()-s,n.emit("data",a),r.emit("data",a))},!1),n.request=c,n.target=i,n.release=()=>{i()&&(o.exitPointerLock||o.webkitExitPointerLock).call(o)},n}});var t5=ke((vT,e5)=>{"use strict";var oi=ec(),ni=Vy(),kS=Ky(),dT=Math.PI/4,pT=Math.PI/6,Qy=2,SS=1,ES=2.4,AS=2.4,zS=1e3,TS=5,LS=7,Gd=br().C,Kl=[[7,1.6],[7,Gd.zc],[Gd.x1-2.95,Gd.zc]],ds=Kl.slice(1).map((e,t)=>{let o=Kl[t],n=e[0]-o[0],r=e[1]-o[1],a=Math.hypot(n,r);return{a:o,len:a,dir:[n/a,r/a]}}),Hd=ds.reduce((e,t)=>e+t.len,0);function Zy(e){let t=Math.max(0,Math.min(Hd,e));for(let n of ds){if(t<=n.len)return[n.a[0]+n.dir[0]*t,n.a[1]+n.dir[1]*t];t-=n.len}let o=Kl[Kl.length-1];return[o[0],o[1]]}function NS(e){let t=0;for(let n=0;n<ds.length;n++){let r=ds[n],a=t+r.len;if(e<a-1e-4||n===ds.length-1){let s=r.dir,c=e<=t+1e-4&&n>0?ds[n-1].dir:r.dir;return{ahead:s,back:[-c[0],-c[1]]}}t=a}let o=ds[ds.length-1].dir;return{ahead:o,back:[-o[0],-o[1]]}}var RS=Math.PI/4,OS=7,CS=140,PS=70,Jy=(e,t,o)=>(1-e)*t+e*o,IS=e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2;e5.exports=function({getGridSegments:e,getGridParts:t},o){var n=[0,Math.PI],r=[0,Math.PI],a=0,s=[0,0,0],i=[LS,Qy,Kl[0][1]],c=0,f=1,l=0,d=[.707,0,.707],h=[0,1,0],v=[0,0,0],u=.5,p=oi.identity([]),m=oi.identity([]),g=!1,y=[0,0,0],b=[0,0,0],w=1,M=!1;let k=tt=>{n[1]+=tt*RS},z=(tt,Et,$t)=>{if(tt=Math.max(Math.min(tt,100),-100),Et=Math.max(Math.min(Et,100),-100),n[0]=0,M){a=0;return}for(a+=tt;a>=$t;)k(1),a-=$t;for(;a<=-$t;)k(-1),a+=$t};kS(document.body).on("attain",tt=>{tt.on("data",Et=>{z(Et.dx,Et.dy,CS)})});let R=null,U=null,D=0,Y={x:0,y:0},I=58,j=document.createElement("div");j.id="museum-mobile-controls",j.innerHTML=`

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
	`,document.body.appendChild(j);let ue=j.querySelector("#museum-joystick"),Ge=j.querySelector("#museum-joystick-knob"),Te=()=>{Ge.style.transform="translate(-50%, -50%)",s[0]=0,s[2]=0},ye=tt=>{let Et=tt.clientX-Y.x,$t=tt.clientY-Y.y,ro=Math.hypot(Et,$t);if(ro>I&&(Et=Et/ro*I,$t=$t/ro*I),Ge.style.transform=`translate(
				calc(-50% + ${Et}px),
				calc(-50% + ${$t}px)
			)`,ro<10){s[0]=0,s[2]=0;return}let ie=Et/I,ce=$t/I;s[0]=0,s[2]=Math.abs(ce)>.15?ce:0},le=(tt,Et)=>{for(let $t=0;$t<tt.length;$t++)if(tt[$t].identifier===Et)return tt[$t];return null},Ve=tt=>!!(tt&&tt.closest&&tt.closest(".painting-plaque, .story-overlay, .story-card, .story-close, button")),zt=tt=>{if(!Ve(tt.target)&&(tt.cancelable&&tt.preventDefault(),!M))for(let Et=0;Et<tt.changedTouches.length;Et++){let $t=tt.changedTouches[Et];if(R===null&&$t.clientX<window.innerWidth*.48){R=$t.identifier;let ro=ue.getBoundingClientRect();Y.x=ro.left+ro.width/2,Y.y=ro.top+ro.height/2,ye($t)}else U===null&&$t.clientX>=window.innerWidth*.48&&(U=$t.identifier,D=$t.clientX,a=0)}},St=tt=>{if(Ve(tt.target)||(tt.cancelable&&tt.preventDefault(),M))return;let Et=R===null?null:le(tt.touches,R);Et&&ye(Et);let $t=U===null?null:le(tt.touches,U);if($t){let ro=$t.clientX-D;D=$t.clientX,z(ro,0,PS)}},Vt=tt=>{if(!Ve(tt.target)){tt.cancelable&&tt.preventDefault();for(let Et=0;Et<tt.changedTouches.length;Et++){let $t=tt.changedTouches[Et];$t.identifier===R&&(R=null,Te()),$t.identifier===U&&(U=null)}}};document.addEventListener("touchstart",zt,{passive:!1}),document.addEventListener("touchmove",St,{passive:!1}),document.addEventListener("touchend",Vt,{passive:!1}),document.addEventListener("touchcancel",Vt,{passive:!1});let Tt=document.createElement("style");Tt.textContent=`

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
	`,document.head.appendChild(Tt);var no={};let bo=tt=>{if(tt.defaultPrevented||tt.ctrlKey||tt.altKey||tt.metaKey)return;let Et=tt.type==="keydown";no[tt.code]=Et,Et&&!tt.repeat&&!M&&((tt.code==="KeyA"||tt.code==="ArrowLeft")&&k(-1),(tt.code==="KeyD"||tt.code==="ArrowRight")&&k(1)),g=!1;let $t=no.KeyW||no.ArrowUp?1:0;s=[0,0,(no.KeyS||no.ArrowDown?1:0)-$t],tt.preventDefault()};window.addEventListener("keydown",bo),window.addEventListener("keyup",bo);var Yo=0;return{pos:i,fmouse:r,forward:d,up:h,setPaused:tt=>{M=!!tt,M&&(s[0]=0,s[2]=0,Te())},place:(tt,Et)=>{c=Math.max(0,Math.min(Hd,tt));let $t=Zy(c);i[0]=$t[0],i[2]=$t[1],n[1]=Et,r[1]=Et,a=0,f=1},view:()=>p,proj:()=>(oi.perspective(m,o(),window.innerWidth/window.innerHeight,.1,700),m),tick:({time:tt})=>{let Et=tt-Yo;Yo=tt;let $t=[0,0,0],ro=[];ni.set(d,Math.sin(r[1]),0,-Math.cos(r[1])),ni.set(h,0,1,0);let wo=g?AS:ES,ie=Math.sin(n[1]),ce=-Math.cos(n[1]),G=NS(c),Re=ie*G.ahead[0]+ce*G.ahead[1],Qe=ie*G.back[0]+ce*G.back[1],Se=f;Math.max(Re,Qe)>.3&&(Se=Re>=Qe?1:-1);let he=M?0:-s[2]*wo;l+=(he-l)*(1-Math.exp(-Math.min(Et,.1)*5.5)),he===0&&Math.abs(l)<.01&&(l=0);let kt=l*Se*Math.min(Et,.1);M&&(s[0]=0,s[2]=0,kt=0,l=0),kt!==0&&(f=Math.sign(kt)*Math.sign(-s[2]||1)),c=Math.max(0,Math.min(Hd,c+kt));let _=Zy(c);ni.set(v,_[0]-i[0],0,_[1]-i[2]);let wt=ni.len(v);wt===0&&u!==.25&&(u=(Math.abs((u+.5)%1-.5)-.25)*.8+.25,(u+.01)%.25<.02&&(u=.25));let xt=u;if(u+=wt/(g?TS:zS),i[1]=Qy,ni.add(i,i,v),w<1){w+=Et/SS,w=Math.min(w,1);let Dt=IS(w);ni.set(i,Jy(Dt,y[0],b[0]),i[1],Jy(Dt,y[2],b[2]))}r[0]=0,r[1]+=(n[1]-r[1])*Math.min(1,Math.min(Et,.1)*OS),Math.abs(n[1]-r[1])<5e-4&&(r[1]=n[1]),oi.identity(p),oi.rotateX(p,p,0),oi.rotateY(p,p,r[1]),oi.translate(p,p,ni.scale($t,i,-1))}}}});var r5=ke((mT,n5)=>{"use strict";var{skylightGLSL:$S,Z_START:FS,Z_END:qS,GLASS_Y:DS}=Hi(),{oculusGLSL:GS,A:ri}=Ea(),{windowLightGLSL:HS,C:Qh}=br(),{doorLightGLSL:US}=H0(),Zh=ar(),Ql=Sh(),o5=J0(),Na=e=>e.toFixed(4),Ud=.1,Bd=700,wc={exposure:.88,shafts:1,bloom:1,vignette:.42,grain:.032};function BS(e,t){let o=t[0],n=t[1],r=t[2],a=t[3],s=t[4],i=t[5],c=t[6],f=t[7],l=t[8],d=t[9],h=t[10],v=t[11],u=t[12],p=t[13],m=t[14],g=t[15],y=o*i-n*s,b=o*c-r*s,w=o*f-a*s,M=n*c-r*i,k=n*f-a*i,z=r*f-a*c,P=l*p-d*u,R=l*m-h*u,U=l*g-v*u,D=d*m-h*p,Y=d*g-v*p,I=h*g-v*m,j=y*I-b*Y+w*D+M*U-k*R+z*P;return j?(j=1/j,e[0]=(i*I-c*Y+f*D)*j,e[1]=(r*Y-n*I-a*D)*j,e[2]=(p*z-m*k+g*M)*j,e[3]=(h*k-d*z-v*M)*j,e[4]=(c*U-s*I-f*R)*j,e[5]=(o*I-r*U+a*R)*j,e[6]=(m*w-u*z-g*b)*j,e[7]=(l*z-h*w+v*b)*j,e[8]=(s*Y-i*U+f*P)*j,e[9]=(n*U-o*Y-a*P)*j,e[10]=(u*k-p*w+g*y)*j,e[11]=(d*w-l*k-v*y)*j,e[12]=(i*R-s*D-c*P)*j,e[13]=(o*D-n*R+r*P)*j,e[14]=(p*b-u*M-m*y)*j,e[15]=(l*M-d*b+h*y)*j,e):null}function jS(e,t,o){let n=new Array(16);for(let r=0;r<4;r++)for(let a=0;a<4;a++){let s=0;for(let i=0;i<4;i++)s+=t[i*4+a]*o[r*4+i];n[r*4+a]=s}for(let r=0;r<16;r++)e[r]=n[r];return e}var WS=`
precision highp float;
attribute vec2 position;
varying vec2 uv;
void main() {
	uv = position * 0.5 + 0.5;
	gl_Position = vec4(position, 0.0, 1.0);
}`;n5.exports=(e,t)=>{let o=!!t.isPhone,n=e.hasExtension("webgl_depth_texture"),r=o?10:18,a=()=>t.post>=2?2:4,s=le=>e.texture(Object.assign({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"},le||{})),i=()=>e.framebuffer({color:s(),depth:!1}),c=s(),f=n?e.texture({width:4,height:4,format:"depth",type:"uint32"}):null,l=e.framebuffer({color:c,depth:f||!0}),d=[i(),i()],h=[i(),i()],v=[i(),i()],u=[i(),i()],p=new Array(16).fill(0),m=new Array(16).fill(0),g=[0,0,0],y={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},b={position:[-1,-1,3,-1,-1,3]},w=(le,Ve,zt)=>e(Object.assign({vert:WS,frag:le,attributes:b,count:3,depth:{enable:!1,mask:!1},cull:{enable:!1},blend:{enable:!1},uniforms:Ve,framebuffer:e.prop("out")},zt||{})),M=[2.6,0,FS-3.2,12.6,DS,qS+.4],k=[ri.x0-.2,0,ri.z0,ri.x1,ri.domeTop,ri.z1],z=[Qh.x0,0,Qh.z0,Qh.x1,7.6,Qh.z1],P=[.35,0,.35,13.65,7.6,9],R=o5.AIR_BOX,U=le=>`vec3(${Na(le[0])}, ${Na(le[1])}, ${Na(le[2])}), vec3(${Na(le[3])}, ${Na(le[4])}, ${Na(le[5])})`,D=w(`
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

	${$S()}
	${GS()}
	${HS()}
	${US()}
	${o5.sunGLSL()}

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
		const int N = ${r};
		vec3 sum = vec3(0.0);

		// the skylight
		if (strength.x > 0.0) {
			vec2 t = hitBox(eye, rd, ${U(M)});
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
			vec2 t = hitBox(eye, rd, ${U(k)});
			t.y = min(t.y, len);
			if (t.y > t.x) {
				float st = (t.y - t.x) / float(N);
				float acc = 0.0;
				for (int i = 0; i < N; i++) {
					vec3 p = eye + rd * (t.x + (float(i) + jit) * st);
					if (p.y < ${Na(ri.dome.base)} && p.x > ${Na(ri.x0-.1)}) acc += oculusOpen(p) * treeShade(p) * air(p);
				}
				float ph = phase(dot(rd, SHAFT), 0.6) + 0.05;
				sum += mix(vec3(1.0, 0.88, 0.68), vec3(0.62, 0.74, 1.0) * 1.2, night) * acc * st * ph * strength.y;
			}
		}

		// the corridor windows
		if (strength.z > 0.0) {
			vec2 t = hitBox(eye, rd, ${U(z)});
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
			vec2 t = hitBox(eye, rd, ${U(P)});
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
			vec2 t = hitBox(eye, rd, ${U(R)});
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
	}`,{depthTex:()=>f,invVP:()=>p,eye:()=>g,time:e.context("time"),night:()=>Zh.night,strength:()=>Y,strength5:()=>I}),Y=[0,0,0,0],I=0;function j(){let le=wc.shafts*y.shafts,Ve=Zh.night;return Y[0]=Ql.box(M)?.06*le*(1+.9*Ve):0,Y[1]=Ql.box(k,!1,"court")?.1*le*(1+.9*Ve):0,Y[2]=Ql.box(z)?.07*le*(1+.4*Ve):0,Y[3]=Ql.box(P)?.04*le*(1-.75*Ve):0,Ql.zone==="studio"?(Y[0]=Y[1]=Y[2]=Y[3]=0,I=.03*le*(1+1.3*Ve)):I=0,Y[0]+Y[1]+Y[2]+Y[3]+I>5e-4}let ue=w(`
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
	}`,{src:e.prop("src"),dir:(le,Ve)=>[Ve.dir[0]/Ve.size[0],Ve.dir[1]/Ve.size[1]]}),Ge=w(`
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
	}`,{src:e.prop("src"),texel:(le,Ve)=>[.5/Ve.size[0],.5/Ve.size[1]],threshold:e.prop("threshold")}),Te=w(`
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
		return 2.0 * ${Na(Ud)} * ${Na(Bd)} / (${Na(Bd+Ud)} - z * ${Na(Bd-Ud)});
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
	}`,{scene:()=>c,depthTex:()=>f||c,soft:()=>d[0],bloomA:()=>h[0],bloomB:()=>v[0],shafts:()=>u[0],res:()=>[l.width,l.height],time:e.context("time"),exposure:()=>wc.exposure*y.exposure,vignette:()=>Math.min(1,wc.vignette+y.vignette+.22*Zh.night),night:()=>Zh.night,grain:()=>wc.grain,bloomK:()=>wc.bloom,letterbox:()=>y.letterbox,fade:()=>y.fade,fadeColor:()=>y.fadeColor,aperture:()=>t.post>=2?y.aperture:0,focus:()=>y.focus,hasDepth:n?1:0},{framebuffer:null}),ye=e({framebuffer:()=>l});return{shot:y,look:wc,hasDepth:n,capture(le,Ve,zt){let St=Math.max(.4,Math.min(1,t.scale||1)),Vt=Math.max(2,Math.round(le.drawingBufferWidth*St/2)*2),Tt=Math.max(2,Math.round(le.drawingBufferHeight*St/2)*2);(l.width!==Vt||l.height!==Tt)&&l.resize(Vt,Tt);let no=Math.max(1,Math.ceil(Vt/2)),bo=Math.max(1,Math.ceil(Tt/2));d.forEach(Yo=>Yo.resize(no,bo)),h.forEach(Yo=>Yo.resize(Math.max(1,Math.ceil(Vt/4)),Math.max(1,Math.ceil(Tt/4)))),v.forEach(Yo=>Yo.resize(Math.max(1,Math.ceil(Vt/8)),Math.max(1,Math.ceil(Tt/8)))),u.forEach(Yo=>Yo.resize(Math.max(1,Math.ceil(Vt/a())),Math.max(1,Math.ceil(Tt/a())))),jS(m,Ve.proj,Ve.view),BS(p,m),g[0]=Ve.eye[0],g[1]=Ve.eye[1],g[2]=Ve.eye[2],ye(()=>{e.clear({color:[0,0,0,1],depth:1}),zt()})},present(){let le=Ve=>[Ve.width,Ve.height];n&&t.post>=1&&j()?(D({out:u[0]}),ue({out:u[1],src:u[0],dir:[1,0],size:le(u[0])}),ue({out:u[0],src:u[1],dir:[0,1],size:le(u[0])})):e.clear({color:[0,0,0,1],framebuffer:u[0]}),Ge({out:d[0],src:c,size:[l.width,l.height],threshold:0}),ue({out:d[1],src:d[0],dir:[1,0],size:le(d[0])}),ue({out:d[0],src:d[1],dir:[0,1],size:le(d[0])}),Ge({out:h[0],src:d[0],size:le(d[0]),threshold:.42}),ue({out:h[1],src:h[0],dir:[1,0],size:le(h[0])}),ue({out:h[0],src:h[1],dir:[0,1],size:le(h[0])}),Ge({out:v[0],src:h[0],size:le(h[0]),threshold:0}),ue({out:v[1],src:v[0],dir:[1.5,0],size:le(v[0])}),ue({out:v[0],src:v[1],dir:[0,1.5],size:le(v[0])}),Te({out:null})}}}});var l5=ke((gT,c5)=>{"use strict";var a5=ar().GLSL,VS=Is(),jd=H0(),{C:XS,FAR_DOOR:YS}=br(),KS=100*Math.PI/180,s5=e=>[YS.x-e[2],e[1],XS.zc-7+e[0]],i5=e=>[-e[2],e[1],e[0]];function QS(e){let t=[],o=[],n=[],r=[],a=VS.createBuilder(t,o,n,r);jd.addFrames(a,e);let s=jd.glassPanes(e),i=c=>{let f=[];for(let l=0;l<c.length;l+=3)f.push([c[l],c[l+1],c[l+2]]);return f};return{position:i(t),normal:i(o),elements:n,glass:s}}c5.exports=e=>{let t=jd.DOOR,o=["left","right"].map(l=>{let d=QS(l),h=d.position.length;return{part:l,hinge:l==="left"?t.x0:t.x1,sign:l==="left"?-1:1,src:d.position.map(v=>v.slice()),srcN:d.normal.map(v=>v.slice()),srcG:d.glass.map(v=>v.slice()),pos:e.buffer({data:new Float32Array(h*3),usage:"dynamic"}),nrm:e.buffer({data:new Float32Array(h*3),usage:"dynamic"}),gpos:e.buffer({data:new Float32Array(d.glass.length*3),usage:"dynamic"}),gnrm:e.buffer({data:new Float32Array(d.glass.length*3),usage:"dynamic"}),el:e.elements({data:new Uint32Array(d.elements),type:"uint32"}),glassCount:d.glass.length,outP:new Float32Array(h*3),outN:new Float32Array(h*3),outG:new Float32Array(d.glass.length*3),outGN:new Float32Array(d.glass.length*3)}}),n=null;function r(l){if(l!==n){n=l;for(let d of o){let h=d.sign*l,v=Math.cos(h),u=Math.sin(h),p=y=>{let b=y[0]-d.hinge,w=y[2];return[d.hinge+b*v+w*u,y[1],-b*u+w*v]},m=y=>[y[0]*v+y[2]*u,y[1],-y[0]*u+y[2]*v];d.src.forEach((y,b)=>{let w=s5(p(y));d.outP.set(w,b*3),d.outN.set(i5(m(d.srcN[b])),b*3)});let g=i5(m([0,0,1]));d.srcG.forEach((y,b)=>{d.outG.set(s5(p(y)),b*3),d.outGN.set(g,b*3)}),d.pos.subdata(d.outP),d.nrm.subdata(d.outN),d.gpos.subdata(d.outG),d.gnrm.subdata(d.outGN)}}}r(0);let a=`
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
	}`,s=e({vert:a,frag:`
		precision highp float;
		${a5}
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
		}`,attributes:{position:e.prop("pos"),normal:e.prop("nrm")},elements:e.prop("el"),cull:{enable:!1}}),i=e({vert:a,frag:`
		precision highp float;
		${a5}
		varying vec3 v_pos, v_n, v_eye;
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			float c = abs(dot(V, normalize(v_n)));
			float fres = pow(1.0 - c, 3.0);
			float d = (v_pos.x + v_pos.z) * 0.55 + v_pos.y * 0.85;
			float sheen = smoothstep(0.35, 0.0, abs(fract(d * 0.22) - 0.5)) * 0.05;
			float a = 0.05 + 0.32 * fres + sheen;
			gl_FragColor = vec4(toNight(mix(vec3(0.80, 0.86, 0.90), vec3(1.0, 0.95, 0.86), 0.4), 0.22), a);
		}`,attributes:{position:e.prop("pos"),normal:e.prop("nrm")},count:e.prop("count"),cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}}),c=0,f=()=>{r(c*KS);for(let l of o)s({pos:l.pos,nrm:l.nrm,el:l.el})};return f.glass=()=>{for(let l of o)i({pos:l.gpos,nrm:l.gnrm,count:l.glassCount})},f.setOpen=l=>{c=l||0},f.openNow=()=>c,f}});var h5=ke((xT,f5)=>{"use strict";var ZS=ar().GLSL,{skylightGLSL:JS}=Hi(),{oculusGLSL:eE}=Ea(),{windowLightGLSL:tE}=br(),Ya=.22;function oE(){let e=[],t=[],o=[],n=[],s=(l,d)=>{let h=Ya*.2*Math.pow(Math.sin(Math.PI*Math.pow(l,.85)),.9)*(d>0?1.06:.94),v=l*Ya-Ya*.12,u=d*h,p=Math.abs(d)*h*.42-.14*l*l*Ya;p+=Math.sin(l*17+(d>0?0:2.1))*.012*Ya*d*d;let m=(l-.3)*.55,g=Math.cos(m),y=Math.sin(m),b=p*g-u*y,w=p*y+u*g;return[v,b,w+.05*Ya*l*l]},i=(l,d)=>{let v=s(Math.min(1,l+.01),d),u=s(Math.max(0,l-.01),d),p=s(l,Math.min(1,d+.01)),m=s(l,Math.max(-1,d-.01)),g=[v[0]-u[0],v[1]-u[1],v[2]-u[2]],y=[p[0]-m[0],p[1]-m[1],p[2]-m[2]],b=[y[1]*g[2]-y[2]*g[1],y[2]*g[0]-y[0]*g[2],y[0]*g[1]-y[1]*g[0]],w=Math.hypot(b[0],b[1],b[2])||1,M=b[1]<0?-1:1;return[b[0]/w*M,b[1]/w*M,b[2]/w*M]};for(let l=0;l<=18;l++){let d=l/18;for(let h=0;h<=5*2;h++){let v=h/5-1;e.push(s(d,v)),t.push(i(Math.min(.97,Math.max(.03,d)),v)),o.push([d,v])}}let c=5*2+1;for(let l=0;l<18;l++)for(let d=0;d<c-1;d++){let h=l*c+d,v=h+1,u=h+c,p=u+1;n.push([h,u,v],[v,u,p])}let f=e.length;return e.push([-Ya*.12,0,-.003],[-Ya*.12,0,.003],[-Ya*.24,-.01,.0015],[-Ya*.24,-.01,-.0015]),t.push([0,1,0],[0,1,0],[0,1,0],[0,1,0]),o.push([0,0],[0,0],[-.1,0],[-.1,0]),n.push([f,f+2,f+1],[f,f+3,f+2]),{pos:e,nrm:t,uv:o,idx:n}}f5.exports=e=>{let t=oE(),o=e({vert:`
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
		${ZS}
		uniform float time;
		uniform float yScale, visible;
		varying vec3 v_pos, v_normal;
		varying vec2 v_uv;
		varying vec3 v_eye;

		${JS()}
		${eE()}
		${tE()}

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
		}`,attributes:{position:t.pos,normal:t.nrm,uv:t.uv},elements:t.idx,uniforms:{model:e.prop("model"),visible:1},cull:{enable:!1}}),n=ar(),r=e({vert:`
		precision highp float;
		uniform mat4 proj, view, model;
		uniform float yScale;
		attribute vec2 corner;
		varying vec2 v_uv;
		void main() {
			vec3 c = (model * vec4(${(Ya*.35).toFixed(3)}, 0.0, 0.0, 1.0)).xyz;
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{model:e.prop("model"),night:()=>n.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(a){a&&a.visible&&(o({model:a.model}),n.night>.01&&r({model:a.model}))}}});var p5=ke((yT,d5)=>{"use strict";var{skylightGLSL:nE,Z_START:u5,Z_END:rE}=Hi(),{oculusGLSL:aE,A:_c}=Ea(),{windowLightGLSL:sE,C:ai}=br();d5.exports=(e,t)=>{let o=t.isPhone?900:2600,n=t.isPhone?350:900,r=t.isPhone?450:1300,a=t.isPhone?13:22,s=7,i=()=>(s=s*16807%2147483647,(s-1)/2147483646),c=ai.x0+.6,f=ai.x1-.3,l=[];for(let u=0;u<o;u++)l.push([2.5+i()*10.5,.3+i()*8,u5-3.5+i()*(rE-u5+4.5),i()]);for(let u=0;u<n;u++)l.push([_c.x0+.3+i()*(_c.x1-_c.x0-.6),.3+i()*7.5,_c.z0+.3+i()*(_c.z1-_c.z0-.6),i()]);for(let u=0;u<r;u++)l.push([c+i()*(f-c),.2+i()*5.6,ai.z0+.25+i()*(ai.z1-ai.z0-.5),i()]);let d=u=>u.toFixed(4),h=[[0,-50,0,0],[0,-50,0,0],[0,-50,0,0],[0,-50,0,0]],v=e({vert:`
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

		${nE()}
		${aE()}
		${sE()}

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
				p.x = ${d(c)} + mod(p.x - ${d(c)} - gust.x * (0.55 + 0.9 * seed.w), ${d(f-c)});
				p.y += sin(time * 5.0 + s * 11.0) * 0.22 * gust.y;
				p.z += cos(time * 4.3 + s * 13.0) * 0.30 * gust.y;
				p.z = clamp(p.z, ${d(ai.z0+.1)}, ${d(ai.z1-.1)});
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
		}`,attributes:{seed:l},count:l.length,primitive:"points",uniforms:{time:e.context("time"),pixelScale:u=>u.viewportHeight*.006,focus:(u,p)=>p&&p.focus||6,aperture:(u,p)=>p&&p.aperture||0,wake0:(u,p)=>(p&&p.wake||h)[0],wake1:(u,p)=>(p&&p.wake||h)[1],wake2:(u,p)=>(p&&p.wake||h)[2],wake3:(u,p)=>(p&&p.wake||h)[3],wakeDir:(u,p)=>p&&p.wakeDir||[0,0,1],gust:(u,p)=>p&&p.gust||[0,0]},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});return u=>v(u||{})}});var b5=ke((bT,y5)=>{"use strict";var{C:x5}=br(),v5=ar(),m5=15.3,iE=37.1,g5=x5.z1+.9,cE=x5.z1+.7+16-.6;y5.exports=(e,t)=>{let o=t.isPhone?36:80,n=11,r=()=>(n=n*16807%2147483647,(n-1)/2147483646),a=[];for(let f=0;f<o;f++){let l=.35+Math.pow(r(),1.8)*2.4;a.push([m5+r()*(iE-m5),l,g5+r()*(cE-g5),r()])}let s=[],i=[];a.forEach(f=>{[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(l=>{s.push(l[0],l[1]),i.push(...f)})});let c=e({vert:`
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
		}`,attributes:{corner:s,seed:i},count:s.length/2,uniforms:{time:e.context("time"),night:()=>v5.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(){v5.night>.01&&c()}}});var t1=ke((wT,va)=>{"use strict";var w5=ar(),u0=X0(),lE=ec(),vs=Math.PI,bt=e=>(+e).toFixed(4),Ka=e=>`vec3(${bt(e[0])}, ${bt(e[1])}, ${bt(e[2])})`,en={x0:-2.05,z0:41.45,z1:47.55,top:5.1},To=-.55,er=-2,xn=42.25,Gn=43.65,Ca=45.35,Hr=46.75,lr=2.75,da=.12,fE=(To+er)/2,Go={x:-1.3,y:1.42,w:.42,h:.52,z:Gn,cell:.026},Wt={x0:-1.85,x1:-.75,top:.98,z0:Gn-.3,z1:Gn-.02},Ra={x0:-1.44,x1:-1.16,y0:Wt.top-.002,y1:Wt.top+.018},pa={cx:-1.3,cz:Gn-.165,w:.2,d:.255,y:Wt.top+.0012},xr={x:-1.03,z:Gn-.14,r:.042,h:.075},rn={x:-.86,z:Gn-.12,h:.085,r:.019};rn.flame=[rn.x,Wt.top+.012+rn.h+.028,rn.z];var e1={a:[xr.x-.004,Wt.top+.03,xr.z+.004],b:[xr.x-.13,Wt.top+.34,xr.z-.12]},yn=[-1.5,2.42,44.66],Dn=[-1.78,1.95,xn+.09],Oa={x:-1.32,z:44.08,y:.64,heading:.32},k5={window:{eye:[-1.3,1.33,42.8],target:[Go.x,1.37,Gn],fov:54},paper:{eye:[-1.3,1.4,43.23],target:[pa.cx,Wt.top,pa.cz+.01],fov:40},front:{eye:[1.6,1.62,43],target:[-.9,1.35,43],fov:55},bay:{eye:[4.2,2.1,44.6],target:[-1,1.9,44.5],fov:55}},Lr={z0:(xn+Gn)/2+.03,z1:(xn+Gn)/2+.56,y0:.98,y1:1.78,x:To+.03,cell:.047};k5.peek={eye:[-1.2,1.42,42.95],target:[u0.PLAY.stoolX-u0.OFF[0],.85,u0.PLAY.keyFront+.2],fov:30};var ps={ink:null,inkDirty:!1,fold:0,slide:0,shown:!0,active:!1};function _5(){return`
	// a quatrefoil hole in the brass (g: metres across the window from its centre)
	float grilleHole(vec2 g) {
		vec2 q = fract(g / ${bt(Go.cell)} + 0.5) - 0.5;
		float d = min(min(length(q - vec2(0.17, 0.0)), length(q + vec2(0.17, 0.0))),
		              min(length(q - vec2(0.0, 0.17)), length(q + vec2(0.0, 0.17))));
		d = min(d, length(q) - 0.04);
		return 1.0 - smoothstep(0.15, 0.19, d);
	}
	// how much of the lamp's light reaches p (on the penitent's side) through the window
	float throughGrille(vec3 p, float soft) {
		vec3 d = p - ${Ka(yn)};
		if (d.z > -0.001) return 0.0;
		float t = (${bt(Go.z)} - ${bt(yn[2])}) / d.z;
		vec2 g = (${Ka(yn)} + d * t).xy - vec2(${bt(Go.x)}, ${bt(Go.y)});
		float inWin = (1.0 - smoothstep(${bt(Go.w/2-.01)}, ${bt(Go.w/2)} + soft, abs(g.x))) *
		              (1.0 - smoothstep(${bt(Go.h/2-.01)}, ${bt(Go.h/2)} + soft, abs(g.y)));
		// the lamp is not a point: the pattern blurs the further it falls
		// from the brass
		float pen = 0.045 * abs(p.z - ${bt(Go.z)}) / abs(${bt(Go.z)} - ${bt(yn[2])}) / ${bt(Go.cell)};
		vec2 qc = fract(g / ${bt(Go.cell)} + 0.5) - 0.5;
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
		vec3 c = ${Ka(rn.flame)};
		vec3 d = c - p;
		float s = 1.0;
		// the pot: a short upright cylinder
		vec2 a = vec2(${bt(xr.x)}, ${bt(xr.z)}) - p.xz;
		vec2 dd = d.xz;
		float t = clamp(dot(a, dd) / max(dot(dd, dd), 1e-5), 0.0, 1.0);
		float r = length(p.xz + dd * t - vec2(${bt(xr.x)}, ${bt(xr.z)}));
		float y = p.y + d.y * t;
		s *= mix(1.0, 0.25, (1.0 - smoothstep(${bt(xr.r*.7)}, ${bt(xr.r*1.6)}, r)) * (1.0 - smoothstep(${bt(Wt.top+xr.h*.8)}, ${bt(Wt.top+xr.h*1.3)}, y)));
		// the quill: a thin capsule
		vec3 qa = ${Ka(e1.a)}, qb = ${Ka(e1.b)};
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
		bool inB1 = p.z < ${bt(Gn)} && p.z > ${bt(xn-.04)} && p.x < ${bt(To+.02)};
		bool inPriest = p.z >= ${bt(Gn)} && p.z < ${bt(Ca)} && p.x < ${bt(To)};
		bool inB2 = p.z >= ${bt(Ca)} && p.z < ${bt(Hr+.04)} && p.x < ${bt(To)};
		// how open to the hall it is
		float open = 1.0;
		if (inB1) open = mix(0.7, 1.1, smoothstep(${bt(er)}, ${bt(To)}, p.x));
		if (inPriest) open = 0.16;
		if (inB2) open = 0.10;
		// deeper into the bay, a little less of the hall's light
		open *= mix(0.62, 1.0, smoothstep(${bt(en.x0)}, 0.3, p.x));
		// the stair hall's candlelight (it stands there now: see stairhall.js)
		vec3 rs;
		vec3 col = roomLight(p + ${Ka(u0.OFF)}, N, V, gloss, rs) * 1.25 * open;
		spec += rs * open;
		// the lamp, warm, behind the brass
		vec3 Ld = ${Ka(yn)} - p;
		float dl = length(Ld);
		vec3 L = Ld / dl;
		float T = inPriest ? 1.0 : (inB1 ? throughGrille(p, 0.0) : 0.0);
		vec3 lampCol = vec3(1.0, 0.70, 0.40) * mix(3.2, 1.0, night);
		vec3 lamp = lampCol * T * max(dot(N, L), 0.0) / (1.0 + dl * dl * 1.6);
		col += lamp;
		spec += lampCol * T * pow(max(dot(N, normalize(L + V)), 0.0), mix(8.0, 60.0, gloss)) * gloss / (1.0 + dl * dl * 1.6);
		// the little lamp in the open booth
		if (inB1) {
			vec3 Sd = ${Ka(Dn)} - p;
			float ds = length(Sd);
			vec3 Ls = Sd / ds;
			vec3 sc = vec3(1.0, 0.72, 0.42) * mix(1.5, 0.35, night);
			col += sc * (max(dot(N, Ls), 0.0) * 0.8 + 0.2) / (0.15 + ds * ds * 1.6);
			spec += sc * pow(max(dot(N, normalize(Ls + V)), 0.0), mix(8.0, 60.0, gloss)) * gloss * 0.6 / (0.15 + ds * ds * 1.6);
		}
		// the candle
		if (night > 0.01) {
			vec3 Cd = ${Ka(rn.flame)} - p;
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
	}`}var Jn={WOOD:0,CARVED:1,VELVET:2,CUSHION:3,BRASS:4,INKGLASS:5,QUILL:6,LAMPGLASS:7,DARKWOOD:8};function S5(){let e=[],t=[],o=[],n=[],r=[],a=(f,l)=>[f[0]-l[0],f[1]-l[1],f[2]-l[2]],s=(f,l)=>[f[1]*l[2]-f[2]*l[1],f[2]*l[0]-f[0]*l[2],f[0]*l[1]-f[1]*l[0]],i=f=>{let l=Math.hypot(f[0],f[1],f[2])||1;return[f[0]/l,f[1]/l,f[2]/l]},c={pos:e,nrm:t,kind:o,uv:n,idx:r,norm:i,cross:s,sub:a};return c.v=(f,l,d,h)=>(e.push(f[0],f[1],f[2]),t.push(l[0],l[1],l[2]),o.push(d),n.push(h?h[0]:0,h?h[1]:0),e.length/3-1),c.quad=(f,l,d,h,v,u)=>{let p=i(s(a(l,f),a(h,f)));u=u||[[0,0],[1,0],[1,1],[0,1]];let m=c.v(f,p,v,u[0]),g=c.v(l,p,v,u[1]),y=c.v(d,p,v,u[2]),b=c.v(h,p,v,u[3]);r.push(m,g,y,m,y,b)},c.box=(f,l,d,h,v,u,p)=>{let m=(g,y,b,w,M,k,z,P)=>c.quad(g,y,b,w,p,[[M,z],[k,z],[k,P],[M,P]]);m([h,l,d],[h,l,u],[h,v,u],[h,v,d],d,u,l,v),m([f,l,u],[f,l,d],[f,v,d],[f,v,u],u,d,l,v),m([f,v,d],[h,v,d],[h,v,u],[f,v,u],f,h,d,u),m([f,l,u],[h,l,u],[h,l,d],[f,l,d],f,h,u,d),m([f,l,u],[h,l,u],[h,v,u],[f,v,u],f,h,l,v),m([h,l,d],[f,l,d],[f,v,d],[h,v,d],h,f,l,v)},c.tube=(f,l,d,h)=>{h=h||6;let v=e.length/3;for(let u=0;u<f.length;u++){let p=f[Math.max(0,u-1)],m=f[Math.min(f.length-1,u+1)],g=i(a(m,p)),y=Math.abs(g[1])>.9?[1,0,0]:[0,1,0],b=i(s(g,y)),w=s(b,g),M=typeof l=="function"?l(u/(f.length-1)):l;for(let k=0;k<=h;k++){let z=k/h*vs*2,P=Math.cos(z),R=Math.sin(z),U=[b[0]*P+w[0]*R,b[1]*P+w[1]*R,b[2]*P+w[2]*R];c.v([f[u][0]+U[0]*M,f[u][1]+U[1]*M,f[u][2]+U[2]*M],U,d,[u/(f.length-1),k/h])}}for(let u=0;u<f.length-1;u++)for(let p=0;p<h;p++){let m=v+u*(h+1)+p,g=m+h+1;r.push(m,m+1,g,m+1,g+1,g)}},c.lathe=(f,l,d,h,v)=>{v=v||20;let u=e.length/3;for(let p=0;p<d.length;p++){let[m,g]=d[p],y=d[Math.max(0,p-1)],b=d[Math.min(d.length-1,p+1)],w=b[0]-y[0],M=b[1]-y[1];for(let k=0;k<=v;k++){let z=k/v*vs*2,P=Math.cos(z),R=Math.sin(z),U=i([M*P,-w,M*R]);c.v([f+P*m,g,l+R*m],U,h,[k/v,p/(d.length-1)])}}for(let p=0;p<d.length-1;p++)for(let m=0;m<v;m++){let g=u+p*(v+1)+m,y=g+v+1;r.push(g,y,g+1,g+1,y,y+1)}},c.spire=(f,l,d,h,v,u)=>{let p=[[-h,-h],[h,-h],[h,h],[-h,h]];for(let m=0;m<4;m++){let g=p[m],y=p[(m+1)%4],b=[f+g[0],d,l+g[1]],w=[f+y[0],d,l+y[1]],M=[f,v,l],k=i(s(a(M,b),a(w,b))),z=c.v(b,k,u,[0,0]),P=c.v(w,k,u,[1,0]),R=c.v(M,k,u,[.5,1]);r.push(z,R,P)}},c.orient=()=>{for(let f=0;f<r.length;f+=3){let[l,d,h]=[r[f],r[f+1],r[f+2]],v=m=>[e[m*3],e[m*3+1],e[m*3+2]],u=s(a(v(d),v(l)),a(v(h),v(l))),p=[0,1,2].map(m=>t[l*3+m]+t[d*3+m]+t[h*3+m]);u[0]*p[0]+u[1]*p[1]+u[2]*p[2]<0&&(r[f+1]=h,r[f+2]=d)}return c},c}function Jh(e,t,o,n){if(e<=t)return o;let r=e-t;return r>=n?0:Math.max(0,Math.sqrt(n*n-r*r)-(n-o))}var mn={ys:1.78,a:.56,r:.78};mn.apex=mn.ys+Math.sqrt(mn.r*mn.r-(mn.r-mn.a)*(mn.r-mn.a));function hE(){let e=S5(),t=Jn.WOOD,o=Jn.CARVED,n=Jn.DARKWOOD,r=.06;e.box(er,0,xn,To+.08,da,Hr,n),e.box(er,lr-.06,xn-.04,To+.1,lr,Hr+.04,t),e.box(To,lr-.2,xn-.06,To+.12,lr-.06,Hr+.06,t),e.box(To+.02,lr,xn-.08,To+.14,lr+.07,Hr+.08,n),e.box(er,da,xn,er+.04,lr-.06,Hr,t);for(let[l,d,h]of[[xn-r,xn,-1],[Hr,Hr+r,1]]){e.box(er,0,l,To+.08,lr,d,t);let v=h<0?l-.018:d;e.box(er+.18,.45,Math.min(v,v+.018),To-.12,2.35,Math.max(v,v+.018),n),e.box(er+.26,.55,Math.min(v,v+.03*h),To-.2,2.25,Math.max(v,v+.03*h),t)}{let l=Gn-.02,d=Gn+.02,h=Go.x-Go.w/2,v=Go.x+Go.w/2,u=Go.y-Go.h/2,p=Go.y+Go.h/2;e.box(er,da,l,To,Ra.y0,d,t),e.box(er,Ra.y0,l,Ra.x0,Ra.y1,d,t),e.box(Ra.x1,Ra.y0,l,To,Ra.y1,d,t),e.box(er,Ra.y1,l,To,u,d,t),e.box(er,u,l,h,p,d,t),e.box(v,u,l,To,p,d,t),e.box(er,p,l,To,lr-.06,d,t);let m=.05,g=l-.025;e.box(h-m,u-m,g,v+m,u,l,n),e.box(h-m,p,g,v+m,p+m,l,n),e.box(h-m,u,g,h,p,l,n),e.box(v,u,g,v+m,p,l,n),e.box(h-m-.02,p+m,g-.015,v+m+.02,p+m+.03,l,t),e.box(Ra.x0-.01,Ra.y1,l-.006,Ra.x1+.01,Ra.y1+.008,l,Jn.BRASS)}{let l=Lr,d=To+.008,h=To+.052;e.box(d,l.y0,l.z0-.035,h,l.y1,l.z0,n),e.box(d,l.y0,l.z0,h,l.y0+.04,l.z1,n),e.box(d,l.y1-.04,l.z0,h,l.y1,l.z1,n),e.box(d+.008,da,l.z0-.035,h-.008,l.y0,l.z1,t),e.box(h-.008,da+.12,l.z0+.03,h,l.y0-.08,l.z1-.06,n),e.box(d-.004,l.y0-.012,l.z0-.045,h+.012,l.y0,l.z1,Jn.BRASS)}e.box(er,da,Ca-.02,To,lr-.06,Ca+.02,t),e.box(Wt.x0,Wt.top-.035,Wt.z0,Wt.x1,Wt.top,Wt.z1,t),e.tube([[Wt.x0,Wt.top-.018,Wt.z0],[Wt.x1,Wt.top-.018,Wt.z0]],.02,t,8);for(let l of[Wt.x0+.1,Wt.x1-.1]){let d=[];for(let h=0;h<=8;h++){let v=h/8;d.push([l,Wt.top-.04-.22*v,Wt.z1-.02-.22*Math.cos(v*vs/2)])}e.tube(d,.018,n,6)}e.box(er+.06,.12,xn,To-.1,.44,xn+.42,n),e.box(er+.08,.44,xn+.01,To-.12,.52,xn+.41,Jn.CUSHION),e.box(er+.06,.12,Hr-.42,To-.1,.44,Hr,n),e.box(Dn[0]-.05,Dn[1]-.16,xn,Dn[0]+.05,Dn[1]-.02,xn+.012,Jn.BRASS),e.tube([[Dn[0],Dn[1]-.09,xn+.012],[Dn[0],Dn[1]-.09,Dn[2]-.01],[Dn[0],Dn[1]-.05,Dn[2]]],.006,Jn.BRASS,6),e.lathe(Dn[0],Dn[2],[[0,Dn[1]-.05],[.028,Dn[1]-.035],[.034,Dn[1]+.01],[.024,Dn[1]+.06],[.026,Dn[1]+.065]],Jn.LAMPGLASS,16),e.box(Oa.x-.22,.12,Oa.z-.24,Oa.x+.22,Oa.y-.05,Oa.z+.16,n),e.box(Oa.x-.24,Oa.y-.05,Oa.z-.26,Oa.x+.24,Oa.y,Oa.z+.18,Jn.CUSHION),e.tube([[yn[0],lr-.06,yn[2]],[yn[0],yn[1]+.07,yn[2]]],.005,Jn.BRASS,5),e.lathe(yn[0],yn[2],[[0,yn[1]+.09],[.03,yn[1]+.08],[.02,yn[1]+.06]],Jn.BRASS,12),e.lathe(yn[0],yn[2],[[0,yn[1]-.06],[.035,yn[1]-.04],[.045,yn[1]],[.035,yn[1]+.05],[.018,yn[1]+.07]],Jn.LAMPGLASS,16);let a=To,s=To+r;function i(l,d,h){let v=(l+d)/2,u=40,p=[];for(let g=0;g<=u;g++)p.push(da+(lr-.2-da)*g/u);let m=[];p.forEach(g=>m.push(g));for(let g=1;g<24;g++)m.push(mn.ys+(mn.apex-mn.ys)*g/24);m.sort((g,y)=>g-y);for(let g=0;g<m.length-1;g++){let y=m[g],b=m[g+1];if(b-y<1e-4)continue;let w=h?Jh(y,mn.ys,mn.a,mn.r):0,M=h?Jh(b,mn.ys,mn.a,mn.r):0,k=(z,P)=>[z,P];e.quad([s,y,v-w],[s,y,l],[s,b,l],[s,b,v-M],t,[k(v-w,y),k(l,y),k(l,b),k(v-M,b)]),e.quad([s,y,d],[s,y,v+w],[s,b,v+M],[s,b,d],t,[k(d,y),k(v+w,y),k(v+M,b),k(d,b)]),(w>0||M>0)&&(e.quad([a,y,v-w],[s,y,v-w],[s,b,v-M],[a,b,v-M],n),e.quad([s,y,v+w],[a,y,v+w],[a,b,v+M],[s,b,v+M],n),e.quad([a,y,l],[a,y,v-w],[a,b,v-M],[a,b,l],t),e.quad([a,y,v+w],[a,y,d],[a,b,d],[a,b,v+M],t))}if(e.box(a,lr-.2,l,s,lr-.06,d,t),e.box(s,lr-.42,l+.05,s+.012,lr-.24,d-.05,o),h){let g=[];for(let y=0;y<=30;y++){let b=y/30,w=b<.5?da+(mn.apex-da)*(b*2):mn.apex-(mn.apex-da)*((b-.5)*2),M=b<.5?-1:1;g.push([s+.01,Math.min(w,mn.apex-.002),v+M*(Jh(w,mn.ys,mn.a,mn.r)+.03)])}e.tube(g,.022,n,6)}}i(xn,Gn,!0),i(Ca,Hr,!0);{let l=Gn,d=Ca,h=(l+d)/2;e.box(a,da,l,s,lr-.06,d,t);let v={ys:1.85,a:.55,r:.8},u=[];for(let p=0;p<=40;p++){let m=p/40,g=v.ys+Math.sqrt(v.r*v.r-(v.r-v.a)*(v.r-v.a)),y=m<.5?.35+(g-.35)*(m*2):g-(g-.35)*((m-.5)*2),b=m<.5?-1:1;u.push([s+.012,Math.min(y,g-.002),h+b*Jh(y,v.ys,v.a,v.r)])}u.push(u[0]),e.tube(u,.02,n,6),e.box(s,.95,h-.22,s+.015,1.3,h+.22,o),e.box(s,.35,h-.42,s+.01,.75,h+.42,n),e.tube([[s+.03,1.12,d-.13],[s+.06,1.12,d-.13],[s+.06,1.12,d-.2]],.009,Jn.BRASS,6)}[xn-.02,Gn,Ca,Hr+.02].forEach((l,d)=>{let h=d===1||d===2,v=.075,u=lr+(h?.62:.4);e.box(To+.06,0,l-v,To+.06+2*v,u,l+v,t),e.box(To+.04,u-.04,l-v-.02,To+.08+2*v,u,l+v+.02,n);let p=To+.06+v,m=h?.62:.5;e.spire(p,l,u,v*.95,u+m,t);for(let g=1;g<=3;g++){let y=u+m*g/4.2,b=v*.95*(1-g/4.2)+.02;for(let[w,M]of[[1,0],[-1,0],[0,1],[0,-1]])e.tube([[p+w*(b-.02),y-.02,l+M*(b-.02)],[p+w*(b+.015),y+.03,l+M*(b+.015)]],.008,n,4)}e.lathe(p,l,[[0,u+m-.02],[.03,u+m+.03],[.022,u+m+.07],[0,u+m+.1]],t,10)});let f=(l,d,h)=>{let v=(l+d)/2,u=To+.075,p=lr+.07,m=p+h,g=[1,0,0],y=e.v([u,p,l],g,o,[l,p]),b=e.v([u,p,d],g,o,[d,p]),w=e.v([u,m,v],g,o,[v,m]);e.idx.push(y,b,w);let M=e.v([u-.04,p,l],[-1,0,0],t),k=e.v([u-.04,p,d],[-1,0,0],t),z=e.v([u-.04,m,v],[-1,0,0],t);e.idx.push(M,z,k);let P=[],R=[];for(let I=0;I<=10;I++){let j=I/10;P.push([u+.02,p+h*j,l+(v-l)*j]),R.push([u+.02,p+h*j,d+(v-d)*j])}e.tube(P,.022,n,6),e.tube(R,.022,n,6);for(let I=2;I<=8;I+=2)for(let j of[P[I],R[I]])e.tube([j,[j[0]+.01,j[1]+.06,j[2]+(j===P[I]?-.02:.02)]],.01,n,4);e.lathe(u,v,[[0,m],[.035,m+.06],[.022,m+.12],[0,m+.16]].map(([I,j])=>[I,j]),t,10);let U=Math.min(.17,h*.32),D=p+h*.38,Y=[];for(let I=0;I<=24;I++){let j=I/24*vs*2;Y.push([u+.012,D+Math.sin(j)*U,v+Math.cos(j)*U])}e.tube(Y,.012,n,5)};f(xn-.02,Gn,.52),f(Gn,Ca,.82),f(Ca,Hr+.02,.52),e.lathe(xr.x,xr.z,[[0,Wt.top],[.036,Wt.top+.001],[xr.r,Wt.top+.012],[xr.r*1.02,Wt.top+.035],[.036,Wt.top+.052],[.02,Wt.top+.062],[.016,Wt.top+.068]],Jn.INKGLASS,24),e.lathe(xr.x,xr.z,[[.016,Wt.top+.064],[.021,Wt.top+.066],[.022,Wt.top+.075],[.016,Wt.top+.076],[0,Wt.top+.072]],Jn.BRASS,20);{let l=e1.a,d=e1.b,h=26,v=y=>{let b=Math.sin(y*vs)*.025;return[l[0]+(d[0]-l[0])*y+b*.6,l[1]+(d[1]-l[1])*y+b*.4,l[2]+(d[2]-l[2])*y+b]},u=[];for(let y=0;y<=h;y++)u.push(v(y/h));e.tube(u,y=>.0028*(1-.7*y)+6e-4,Jn.QUILL,5);let p=e.norm(e.sub(d,l)),m=e.norm(e.cross(p,[.2,1,.1])),g=e.cross(m,p);for(let y of[-1,1]){let b=e.pos.length/3;for(let w=0;w<=h;w++){let M=w/h,k=v(M),z=M<.28?0:(y>0?.03:.02)*Math.sin(vs*Math.pow((M-.28)/.72,.75)),P=z*.25,R=[k[0]+m[0]*y*z-g[0]*P,k[1]+m[1]*y*z-g[1]*P,k[2]+m[2]*y*z-g[2]*P];e.v(k,g,Jn.QUILL,[M,0]),e.v(R,g,Jn.QUILL,[M,y])}for(let w=0;w<h;w++){let M=b+w*2;e.idx.push(M,M+2,M+1,M+1,M+2,M+3)}}}return e.orient()}function uE(e,t){let n=en.top,r=en.x0;e(r-.35,0,en.z0-.35,r,n+.35,en.z1+.35),e(r,0,en.z0-.35,-.35,n,en.z0),e(r,0,en.z1,-.35,n,en.z1+.35),e(r,n,en.z0,-.35,n+.35,en.z1),e(.35,0,en.z0-.42,.35+.16,n,en.z0),e(.35,0,en.z1,.35+.16,n,en.z1+.42),e(.35,n,en.z0-.5,.35+.18,n+.42,en.z1+.5),e(.35,n+.42,en.z0-.6,.35+.26,n+.52,en.z1+.6),e(.35,0,en.z0-.5,.35+.22,.42,en.z0),e(.35,0,en.z1,.35+.22,.42,en.z1+.5),e(-.35-.01,0,en.z0,.35+.12,.02,en.z1),t(r,en.z0,-.35,en.z1)}va.exports=e=>{let t=j0(),o=w5.GLSL,n=hE(),r=`
	precision highp float;
	${o}
	uniform float time;
	${t.lanternGLSL()}
	${u0.roomGLSL()}
	${_5()}
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
	}`,s=e({vert:a,frag:`${r}
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
		}`,attributes:{position:n.pos,normal:n.nrm,kind:n.kind,uv:n.uv},elements:n.idx});function i(Te,ye,le,Ve){let zt=[],St=[],Vt=[],Tt=[],no=[],tt=To-.02,Et=mn.apex+.08,$t=da+.015;for(let ro=0;ro<=40;ro++){let wo=ro/40,ie=Et+($t-Et)*wo;for(let ce=0;ce<=90;ce++){let G=ce/90,Re=le?.2+.13*wo*wo:ye-Te,Qe=Te+G*Re,Se=le?.05+.02*wo:.035+.01*Math.sin(G*7),he=G*Ve*vs*2+Math.sin(wo*2+G*5)*.6,kt=tt-Se*(.5+.5*Math.sin(he))-(le?.02*wo:0),wt=[1,0,-(-Se*.5*Math.cos(he)*Ve*vs*2/Re)],xt=Math.hypot(wt[0],wt[1],wt[2]);zt.push(kt,ie,Qe),St.push(wt[0]/xt,0,wt[2]/xt),Vt.push(2),Tt.push(Math.sin(he),wo)}}for(let ro=0;ro<40;ro++)for(let wo=0;wo<90;wo++){let ie=ro*91+wo,ce=ie+90+1;no.push(ie,ce,ie+1,ie+1,ce,ce+1)}for(let ro=0;ro<no.length;ro+=3){let[wo,ie,ce]=[no[ro],no[ro+1],no[ro+2]],G=he=>[zt[he*3],zt[he*3+1],zt[he*3+2]],Re=[0,1,2].map(he=>G(ie)[he]-G(wo)[he]),Qe=[0,1,2].map(he=>G(ce)[he]-G(wo)[he]);Re[1]*Qe[2]-Re[2]*Qe[1]<0&&(no[ro+1]=ce,no[ro+2]=ie)}return{pos:zt,nrm:St,kind:Vt,uv:Tt,idx:no}}let c=i(xn+.02,xn+.4,!0,6),f=i(Ca+.04,Hr-.04,!1,9),l={pos:c.pos.concat(f.pos),nrm:c.nrm.concat(f.nrm),kind:c.kind.concat(f.kind),uv:c.uv.concat(f.uv),idx:c.idx.concat(f.idx.map(Te=>Te+c.pos.length/3))},d=e({vert:`
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
		}`,frag:`${r}
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
		}`,attributes:{position:l.pos,normal:l.nrm,uv:l.uv},elements:l.idx}),h=e({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec2 corner;
		varying vec3 v_pos, v_eye;
		void main() {
			vec3 p = vec3(${bt(Go.x)} + corner.x * ${bt(Go.w/2)}, ${bt(Go.y)} + corner.y * ${bt(Go.h/2)}, ${bt(Go.z)});
			v_pos = p; v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`${r}
		varying vec3 v_pos, v_eye;
		void main() {
			vec2 g = v_pos.xy - vec2(${bt(Go.x)}, ${bt(Go.y)});
			float hole = grilleHole(g);
			if (hole > 0.5) discard;
			vec3 N = vec3(0.0, 0.0, v_eye.z < ${bt(Go.z)} ? -1.0 : 1.0);
			vec3 V = normalize(v_eye - v_pos);
			vec3 spec;
			vec3 light = boothLight(v_pos + N * 0.01, N, V, 0.8, spec);
			// dark old bronze, its edges catching the lamp behind it
			vec3 base = vec3(0.16, 0.10, 0.05);
			vec3 col = base * light + spec * 0.6;
			float edge = smoothstep(0.25, 0.5, hole);
			col += vec3(1.0, 0.66, 0.34) * edge * mix(0.35, 0.22, night);
			gl_FragColor = vec4(col, 1.0);
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,cull:{enable:!1}}),v=e({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec2 corner;
		varying vec3 v_pos, v_eye;
		void main() {
			vec3 p = vec3(${bt(Lr.x)}, ${bt((Lr.y0+Lr.y1)/2)} + corner.y * ${bt((Lr.y1-Lr.y0)/2-.04)}, ${bt((Lr.z0+Lr.z1)/2)} + corner.x * ${bt((Lr.z1-Lr.z0)/2)});
			v_pos = p; v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`${r}
		varying vec3 v_pos, v_eye;
		void main() {
			vec2 g = (v_pos.zy - vec2(${bt((Lr.z0+Lr.z1)/2)}, ${bt((Lr.y0+Lr.y1)/2)})) * ${bt(Go.cell/Lr.cell)};
			float hole = grilleHole(g);
			if (hole > 0.5) discard;
			vec3 N = vec3(v_eye.x < ${bt(Lr.x)} ? -1.0 : 1.0, 0.0, 0.0);
			vec3 V = normalize(v_eye - v_pos);
			vec3 spec;
			vec3 light = boothLight(v_pos + N * 0.01, N, V, 0.8, spec);
			vec3 base = vec3(0.16, 0.10, 0.05);
			vec3 col = base * light + spec * 0.6;
			// the rims of the holes catch the candles in the hall beyond
			float edge = smoothstep(0.25, 0.5, hole);
			col += vec3(1.0, 0.62, 0.30) * edge * (N.x < 0.0 ? 0.30 : 0.10);
			gl_FragColor = vec4(col, 1.0);
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,cull:{enable:!1}}),u=e({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec2 corner;
		varying vec2 v_c;
		void main() {
			vec3 p = vec3(${bt(Go.x)} + corner.x * 0.75, ${bt(Go.y)} + corner.y * 0.9, ${bt(Ca-.03)});
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),p=14,m=[];for(let Te=0;Te<p;Te++)[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(ye=>m.push(ye[0],ye[1],(Te+.5)/p));let g=e({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec3 c;
		varying vec3 v_pos;
		void main() {
			// slices across the booth, from the window back towards the bench
			vec3 p = vec3(${bt(fE)} + c.x * ${bt((To-er)/2-.02)}, 0.9 + (c.y + 1.0) * 0.8, ${bt(Gn-.03)} - c.z * 1.25);
			v_pos = p;
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`
		precision highp float;
		uniform float night, time;
		${_5().split("// the candle's light is hidden")[0]}
		varying vec3 v_pos;
		void main() {
			float T = throughGrille(v_pos, 0.0);
			float d = length(v_pos - ${Ka(yn)});
			// dust drifting in the beam
			float dust = 0.65 + 0.35 * sin(v_pos.x * 23.0 + time * 0.3) * sin(v_pos.y * 17.0 - time * 0.21) * sin(v_pos.z * 19.0 + time * 0.17);
			vec3 col = vec3(1.0, 0.68, 0.36) * T * dust * 0.035 / (0.4 + d * d * 0.5) * mix(1.0, 0.7, night);
			gl_FragColor = vec4(col, 1.0);
		}`.replace("float grilleHole","float grilleHole"),attributes:{c:{buffer:e.buffer(m),size:3}},count:m.length/3,depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}}),y=(()=>{if(typeof document=="undefined")return null;let Te=document.createElement("canvas");Te.width=512,Te.height=652;let ye=Te.getContext("2d");ye.fillStyle="#cdb38a",ye.fillRect(0,0,Te.width,Te.height);let le=7,Ve=()=>(le=le*1664525+1013904223>>>0,le/4294967296);for(let St=0;St<2400;St++){ye.fillStyle=`rgba(${Ve()<.5?"90,62,30":"245,230,200"},${.03+Ve()*.05})`;let Vt=Ve()*Te.width,Tt=Ve()*Te.height;ye.fillRect(Vt,Tt,1+Ve()*14,1)}for(let St=0;St<26;St++){let Vt=Ve()*Te.width,Tt=Ve()*Te.height,no=20+Ve()*90,bo=ye.createRadialGradient(Vt,Tt,0,Vt,Tt,no);bo.addColorStop(0,`rgba(120,80,35,${.04+Ve()*.06})`),bo.addColorStop(1,"rgba(120,80,35,0)"),ye.fillStyle=bo,ye.fillRect(Vt-no,Tt-no,no*2,no*2)}let zt=ye.createRadialGradient(Te.width/2,Te.height/2,Te.width*.3,Te.width/2,Te.height/2,Te.height*.72);return zt.addColorStop(0,"rgba(110,70,30,0)"),zt.addColorStop(1,"rgba(110,70,30,0.38)"),ye.fillStyle=zt,ye.fillRect(0,0,Te.width,Te.height),Te})(),b=y?e.texture({data:y,min:"linear",mag:"linear",flipY:!1}):e.texture(),w=e.texture({shape:[8,8],data:new Uint8Array(8*8*4)}),M=[18,24],k=[],z=[];for(let Te=0;Te<=M[1];Te++)for(let ye=0;ye<=M[0];ye++)k.push(ye/M[0],Te/M[1]);for(let Te=0;Te<M[1];Te++)for(let ye=0;ye<M[0];ye++){let le=Te*(M[0]+1)+ye,Ve=le+M[0]+1;z.push(le,le+1,Ve,le+1,Ve+1,Ve)}let P=e({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale, fold, slide;
		attribute vec2 st;
		varying vec3 v_pos, v_n, v_eye;
		varying vec2 v_st;
		void main() {
			// s across (texture left = +x), t from the near edge (0) to the far (1)
			float s = st.x, t = st.y;
			float x = ${bt(pa.cx+pa.w/2)} - s * ${bt(pa.w)};
			float zNear = ${bt(pa.cz-pa.d/2)};
			vec3 p = vec3(x, ${bt(pa.y)}, zNear + t * ${bt(pa.d)});
			vec3 n = vec3(0.0, 1.0, 0.0);
			// a slight cockle
			p.y += 0.0012 * sin(s * 7.0 + t * 3.0) * sin(t * 5.0);
			// the near half folds up and over onto the far half
			if (t < 0.5) {
				float a = fold * 3.14159 * 0.985;
				float dd = (0.5 - t) * ${bt(pa.d)};
				float zf = zNear + 0.5 * ${bt(pa.d)};
				p.z = zf - dd * cos(a);
				p.y = ${bt(pa.y)} + dd * sin(a) + 0.0016 * fold;
				n = vec3(0.0, cos(a), sin(a));
			}
			// then the whole of it slides through the slit
			p.z += slide * 0.40;
			p.y += 0.004 * fold;
			v_pos = p; v_n = n; v_st = st; v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`${r}
		uniform sampler2D paperTex, inkTex;
		uniform float fold;
		varying vec3 v_pos, v_n, v_eye;
		varying vec2 v_st;
		void main() {
			// beyond the slit it is inside the wall
			if (v_pos.z > ${bt(Gn+.015)}) discard;
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
		}`,attributes:{st:{buffer:e.buffer(k),size:2}},elements:z,uniforms:{fold:()=>ps.fold,slide:()=>ps.slide,paperTex:b,inkTex:w},cull:{enable:!1}}),R=S5();R.lathe(rn.x,rn.z,[[0,Wt.top],[.048,Wt.top+.002],[.052,Wt.top+.012],[.046,Wt.top+.014],[.022,Wt.top+.012],[0,Wt.top+.012]],Jn.BRASS,24),R.lathe(rn.x,rn.z,[[0,Wt.top+.012],[rn.r,Wt.top+.012],[rn.r*1.02,Wt.top+.012+rn.h*.6],[rn.r,Wt.top+.012+rn.h],[rn.r*.75,Wt.top+.012+rn.h-.004],[0,Wt.top+.012+rn.h-.008]],9,20),R.tube([[rn.x,Wt.top+.012+rn.h-.008,rn.z],[rn.x+.001,Wt.top+.012+rn.h+.012,rn.z]],.0012,8,4),R.orient();let U=e({vert:a,frag:`${r}
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
				float up = smoothstep(${bt(Wt.top+rn.h*.4)}, ${bt(Wt.top+.012+rn.h)}, v_pos.y);
				col += vec3(1.0, 0.55, 0.22) * up * 0.22 * candleFlicker();
			}
			gl_FragColor = vec4(col * night, 1.0);
		}`,attributes:{position:R.pos,normal:R.nrm,kind:R.kind,uv:R.uv},elements:R.idx}),D=e({vert:`
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
			vec3 p = ${Ka(rn.flame)} + right * corner.x * size.x + vec3(0.0, 1.0, 0.0) * corner.y * size.y;
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{halo:e.prop("halo")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),Y=[0,0],I=e({uniforms:{view:e.prop("view")}}),j=new Float32Array(16);function ue(Te){lE.translate(j,Te.view,u0.OFF),I({view:j},()=>Ge(Te))}function Ge(Te){let ye=Te&&Te.reflected;if(s(),d(),h(),v(),ps.ink&&ps.inkDirty){let le=ps.ink;Y[0]!==le.width||Y[1]!==le.height?(w({data:le,min:"linear",mag:"linear",flipY:!1}),Y=[le.width,le.height]):w.subimage(le),ps.inkDirty=!1}ps.shown&&P(),w5.night>.01&&(U(),ye||(D({halo:1}),D({halo:0}))),ye||(u(),g())}return ue};va.exports.addBay=uE;va.exports.BAY=en;va.exports.OFF=u0.OFF;va.exports.STATE=ps;var M5=e=>[e[0]+u0.OFF[0],e[1]+u0.OFF[1],e[2]+u0.OFF[2]];va.exports.SHOTS=Object.fromEntries(Object.entries(k5).map(([e,t])=>[e,Object.assign({},t,{eye:M5(t.eye),target:M5(t.target)})]));va.exports.SEAT=Oa;va.exports.LAMP=yn;va.exports.SCONCE=Dn;va.exports.GRILLE=Go;va.exports.PAPER=pa;va.exports.ZONE={FRONT:To,BACK:er,ZA:xn,ZB:Gn,ZC:Ca,ZD:Hr}});var Wd=ke((_T,A5)=>{"use strict";function dE(e){let t=e>>>0||1;return function(){return t=t*1664525+1013904223>>>0,t/4294967296}}var E5={stroke:.05,letter:.045,word:.15,comma:.28,stop:.45,line:.25,para:.6},pE=["th","ng","er"];function vE(e,t,o){o=Object.assign({ink:"#2a1d12",xh:14,speed:23,lineHeight:2.85,seed:7,width:.12,pace:.45},o||{});let n=e.getContext("2d"),r={};Object.keys(E5).forEach(p=>{r[p]=E5[p]*o.pace});let a=[],s=0,i=0,c=0,f=[];function l(p,m){let g=dE(o.seed),y=o.xh,b={},w=j=>{let ue=t[j];if(!ue)return null;let Ge=Math.floor(g()*ue.length);return ue.length>1&&Ge===b[j]&&(Ge=(Ge+1)%ue.length),b[j]=Ge,ue[Ge]},M=j=>{if(t[j])return{g:w(j),sc:1};let ue=j.toLowerCase();return t[ue]?{g:w(ue),sc:/[A-Z]/.test(j)?1.32:1}:null},k=[],z=.15,P=0,R=0,U=(g()-.5)*.02,D=m/y,Y=p.split(/\n\s*\n/);Y.forEach((j,ue)=>{j.replace(/\s+/g," ").trim().split(" ").forEach(Te=>{let ye=[];for(let St=0;St<Te.length;St++){let Vt=Te.substr(St,2).toLowerCase();if(pE.indexOf(Vt)>=0&&t[Vt]&&g()<.55&&Te[St]===Te[St].toLowerCase()){ye.push({ch:Vt,gl:{g:w(Vt),sc:1}}),St++;continue}let Tt=M(Te[St]);Tt&&Tt.g&&ye.push({ch:Te[St],gl:Tt})}let le=ye.map(()=>.17+g()*.07),Ve=ye.reduce((St,Vt,Tt)=>St+Vt.gl.g.w*Vt.gl.sc+le[Tt],0);P>0&&P+Ve>D&&(P=0,R++,z+=r.line,U=(g()-.5)*.02),ye.forEach((St,Vt)=>{let Tt=St.gl.g,no=St.gl.sc*(.95+g()*.1),bo=(g()-.5)*.06,Yo=(g()-.5)*.08+U*P,tt=P,Et=R*o.lineHeight+1.9+Yo,$t=Math.cos(bo),ro=Math.sin(bo),wo=ce=>[(tt+(ce[0]*$t-ce[1]*ro)*no)*y,(Et+(ce[0]*ro+ce[1]*$t)*no)*y],ie=(ce,G)=>{let Re=0;for(let Se=1;Se<ce.length;Se++)Re+=Math.hypot(ce[Se][0]-ce[Se-1][0],ce[Se][1]-ce[Se-1][1]);let Qe=Math.max(o.minDur||(G?.06:.07),Re/(o.speed*y));k.push({pts:ce,L:Re,start:z,dur:Qe,dot:G}),z+=Qe};if(Tt.s.forEach((ce,G)=>{G>0&&(z+=r.stroke),ie(ce.map(wo),!1)}),Tt.dot){let ce=Tt.s[0][0];Tt.s.forEach(Re=>Re.forEach(Qe=>{Qe[1]<ce[1]&&(ce=Qe)}));let G=wo([ce[0]+.1,-1.36]);z+=r.stroke*1.4,ie([G,[G[0]+y*.05,G[1]+y*.03]],!0)}z+=r.letter*(.6+g()*.8),P+=Tt.w*no+le[Vt]});let zt=Te[Te.length-1];z+=/[.!?]/.test(zt)?r.stop:/[,;:]/.test(zt)?r.comma:r.word,P+=.55+g()*.2}),ue<Y.length-1&&(P=0,R+=1.6,z+=r.para)});let I=(R+1)*o.lineHeight*y+y*1.55;return{strokes:k,total:z,height:I}}function d(p,m){if(o.fixed){let g=o.fixed;n.setTransform(1,0,0,1,g.mx,g.my),n.clearRect(-g.mx,-g.my,e.width,e.height)}else{let g=Math.min(window.devicePixelRatio||1,2);e.width=Math.round(p*g),e.height=Math.round(m*g),e.style.height=m+"px",e.style.width=p+"px",n.setTransform(g,0,0,g,0,0),n.clearRect(0,0,p,m)}n.strokeStyle=o.ink,n.fillStyle=o.ink,n.lineCap="round",n.lineJoin="round",o.shadow&&(n.shadowColor=o.shadow,n.shadowBlur=o.shadowBlur||6)}let h=p=>p<.5?2*p*p:1-Math.pow(-2*p+2,2)/2;function v(p,m){let g=f[p.i]||0;if(m<=g)return;let y=o.width*o.xh,b=0;for(let w=1;w<p.pts.length;w++){let M=p.pts[w-1],k=p.pts[w],z=Math.hypot(k[0]-M[0],k[1]-M[1]),P=b,R=b+z;if(b=R,R<=g||z===0)continue;if(P>=m)break;let U=Math.max(0,(g-P)/z),D=Math.min(1,(m-P)/z),Y=[M[0]+(k[0]-M[0])*U,M[1]+(k[1]-M[1])*U],I=[M[0]+(k[0]-M[0])*D,M[1]+(k[1]-M[1])*D],j=(P+R)/2/(p.L||1),ue=.72+.28*Math.sin(Math.PI*Math.min(1,Math.max(0,j)));n.lineWidth=y*ue,n.globalAlpha=.86+.14*ue,n.beginPath(),n.moveTo(Y[0],Y[1]),n.lineTo(I[0],I[1]),n.stroke()}p.dot&&g===0&&(n.globalAlpha=1,n.beginPath(),n.arc(p.pts[0][0],p.pts[0][1],y*.75,0,Math.PI*2),n.fill()),f[p.i]=m}function u(p){let m=(p-c)/1e3;for(let g=0;g<a.length;g++){let y=a[g];if(y.start>m)break;let b=Math.min(1,(m-y.start)/y.dur);v(y,h(b)*y.L)}if(o.onPen){let g=0;for(;g+1<a.length&&a[g+1].start<=m;)g++;a[g]&&o.onPen(a[g].pts[0][1])}m<s?i=requestAnimationFrame(u):o.onDone&&o.onDone()}return{write(p,m){cancelAnimationFrame(i);let g=o.fixed?e.width-2*o.fixed.mx:e.parentElement.clientWidth,y=l(p,g);a=y.strokes,s=y.total;let b=typeof o.maxTime=="function"?o.maxTime(p):o.maxTime;if(b&&s>b){let M=b/s;a.forEach(k=>{k.start*=M,k.dur*=M}),s=b}a.forEach((M,k)=>{M.i=k}),f=[],d(g,y.height);let w=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(m||w){a.forEach(M=>v(M,M.L));return}return c=performance.now(),i=requestAnimationFrame(u),s},finish(){cancelAnimationFrame(i),a.forEach(p=>v(p,p.L)),o.onDone&&o.onDone()},stop(){cancelAnimationFrame(i)}}}A5.exports=vE});var Xd=ke((MT,z5)=>{"use strict";var Vd=ar(),mE='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M5.5 18.5l1.7-1.7M16.8 7.2l1.7-1.7"/></svg>',gE='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M19.5 14.6A8 8 0 0 1 9.4 4.5a8 8 0 1 0 10.1 10.1z"/></svg>';z5.exports=function(t){let o=document.createElement("button");o.type="button",o.className=t+" light-toggle";let n=()=>{let r=Vd.isNight;o.innerHTML=r?mE:gE,o.setAttribute("aria-label",r?"Switch to day":"Switch to night"),o.title=r?"Day":"Night",o.setAttribute("aria-pressed",r?"true":"false")};return n(),Vd.onChange(n),["mousedown","pointerdown"].forEach(r=>o.addEventListener(r,a=>a.stopPropagation())),o.addEventListener("click",r=>{r.stopPropagation(),Vd.toggle()}),o}});var R5=ke((kT,N5)=>{"use strict";var Hn=t1(),xE=X0(),yE=Wd(),bE="81efb912-50a2-4fcd-b5e8-c3a28eecbe93",T5=100,R0=e=>Math.max(0,Math.min(1,e)),ta=(e,t,o)=>{let n=R0((o-e)/(t-e));return n*n*(3-2*n)},Qa=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,Pa=(e,t,o)=>e+(t-e)*o,Jl=(e,t,o)=>[Pa(e[0],t[0],o),Pa(e[1],t[1],o),Pa(e[2],t[2],o)];function si(e,t){let o=e.length-1,n=R0(t)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,s=e[Math.max(0,r-1)],i=e[r],c=e[r+1],f=e[Math.min(o,r+2)];return[0,1,2].map(l=>.5*(2*i[l]+(-s[l]+c[l])*a+(2*s[l]-5*i[l]+4*c[l]-f[l])*a*a+(-s[l]+3*i[l]-3*c[l]+f[l])*a*a*a))}var o1=e=>({eye:e.eye.slice(),target:e.target.slice(),fov:e.fov,roll:0});function Yd(e,t,o){return{eye:Jl(e.eye,t.eye,o),target:Jl(e.target,t.target,o),fov:Pa(e.fov,t.fov,o),roll:Pa(e.roll||0,t.roll||0,o)}}var ef=xE.PLAY,Za=[ef.stoolX,1,ef.keyFront+.25],n1=[ef.stoolX,ef.keyTop+.03,ef.keyFront-.05],Qd=e=>{let t=(15+110*e)*Math.PI/180,o=2.1+.4*e;return[Za[0]+Math.cos(t)*o,1.15+.4*e,Za[2]+Math.sin(t)*o]},Mc=[{eye:Qd(1),target:[Za[0],.92,Za[2]-.15],fov:46,aperture:.6},{eye:[-6.93,3.2,45.85],target:[-6.93,.77,45.3],fov:34,aperture:.6,to:n1},{eye:[Za[0]+1,1.14,Za[2]+1.72],target:[n1[0]+.05,.8,n1[2]+.05],fov:40,aperture:1,to:n1}],L5=(e,t)=>Math.hypot(e[0]-t[0],e[1]-t[1],e[2]-t[2]),r1=e=>({fade:0,letterbox:.55,exposure:1.3,focus:L5(e.eye,e.to||Za),aperture:e.aperture,vignette:.42,shafts:0}),Kd={fade:0,letterbox:.55,exposure:2.1,focus:6.2,aperture:.55,vignette:.45,shafts:0},kc={fade:0,letterbox:.55,exposure:2,focus:.82,aperture:1.1,vignette:.48,shafts:0},Zl={fade:0,letterbox:.55,exposure:1.8,focus:.42,aperture:1.3,vignette:.5,shafts:0},wE=`
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
`;N5.exports=function(t){let{root:o,avatar:n}=t,r=document.createElement("style");r.textContent=wE,document.head.appendChild(r);let a=document.createElement("div");a.className="conf-ui",a.innerHTML=`
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
		</div>`,o.appendChild(a);let s=a.querySelector(".conf-write"),i=a.querySelector("textarea"),c=a.querySelector('[data-act="send"]'),f=a.querySelector(".conf-hint"),l=a.querySelector(".conf-close"),d=a.querySelector(".conf-final"),h=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,v=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;i.addEventListener("input",()=>{let G=i.value.match(new RegExp("^\\s*(\\S+\\s+){0,"+(T5-1)+"}\\S+"));(i.value.trim()?i.value.trim().split(/\s+/).length:0)>T5&&G&&(i.value=G[0]),c.disabled=!i.value.trim()}),["keydown","keyup","keypress"].forEach(G=>i.addEventListener(G,Re=>Re.stopPropagation())),a.addEventListener("pointerdown",G=>G.stopPropagation()),a.addEventListener("click",G=>{let Re=G.target.closest("button");Re&&(G.stopPropagation(),Re.dataset.act==="send"&&ue(),Re.dataset.act==="leave"&&ye())});let u=!1,p="",m=0,g=null,y=null,b="",w=null,M=0,k="",z=document.createElement("canvas");z.width=512,z.height=652;function P(G){G!==k&&(k=G,s.classList.toggle("on",G==="write"),f.classList.toggle("on",G==="hint"),l.classList.toggle("on",u&&G==="hint"&&(p==="room"||p==="peek")),d.classList.toggle("on",G==="final"),G==="write"&&setTimeout(()=>{if(p==="write")try{i.focus({preventScroll:!0})}catch(Re){}},900))}function R(G){p=G,m=0}function U(G,Re){if(u)return;u=!0,g={eye:G.eye.slice(),target:G.target.slice(),fov:G.fov,roll:G.roll||0},y=Object.assign({},Re),b="",i.value="",c.disabled=!0,Hn.STATE.fold=0,Hn.STATE.slide=0,Hn.STATE.shown=!0,Hn.STATE.active=!0;let Qe=z.getContext("2d");Qe.setTransform(1,0,0,1,0,0),Qe.clearRect(0,0,z.width,z.height),Hn.STATE.ink=z,Hn.STATE.inkDirty=!0,document.body.classList.add("confessing");let Se=Mc[0],he=v?.3:5.5,kt=v?.3:3.6;D.i=0,D.u=0,D.T=he+kt,D.moving=!0,D.rest=0,D.raw=!0,D.lookFrom=y,D.lookTo=r1(Se);let _=[g.eye,[3.4,1.75,44.5],[.3,1.72,44.7],[-2.8,1.5,45.4],Qd(0)],wt=[g.target,[-3,1.9,44.5],[-6.5,1.3,44.9],[Za[0],1,Za[2]-.1],Se.target];D.path=xt=>{let Dt=xt*(he+kt);if(Dt<he){let Bo=Dt/he,Lo=1-Math.cos(Bo*Math.PI/2);return{eye:si(_,Lo),target:si(wt,ta(0,1,Lo*1.05)),fov:Pa(g.fov,52,ta(.4,1,Lo)),roll:(g.roll||0)*(1-Lo)}}let Yt=(Dt-he)/kt,So=1-Math.pow(1-Yt,2.4);return{eye:Qd(So),target:Se.target,fov:Pa(52,Se.fov,So),roll:.05*Math.sin(Math.PI*So)}},R("room"),P("")}let D={i:0,u:0,T:1,moving:!1,rest:0,raw:!1,path:null,lookFrom:null,lookTo:null},Y=()=>h?"Scroll on":"Swipe up";function I(G){let Re=zt,Qe=Mc[G],Se={eye:Re.eye.slice(),target:Re.target.slice(),fov:Re.fov,roll:Re.roll||0},he=Jl(Se.eye,Qe.eye,.5),kt=[he[0]-Za[0],0,he[2]-Za[2]],_=Math.hypot(kt[0],kt[2])||1,wt=[he[0]+kt[0]/_*.6,he[1]+.3,he[2]+kt[2]/_*.6];D.path=xt=>{let Dt=1-xt;return{eye:[0,1,2].map(Yt=>Dt*Dt*Se.eye[Yt]+2*Dt*xt*wt[Yt]+xt*xt*Qe.eye[Yt]),target:Jl(Se.target,Qe.target,ta(0,1,xt)),fov:Pa(Se.fov,Qe.fov,xt),roll:Se.roll*Dt}},D.lookFrom=j||r1(Mc[D.i]),D.lookTo=r1(Qe),D.i=G,D.u=0,D.moving=!0,D.rest=0,D.raw=!1,D.T=v?.4:Math.max(2.8,Math.min(4.4,L5(Se.eye,Qe.eye)*1+1.6)),P("")}let j=null;function ue(){if(p!=="write"||(b=i.value.trim(),!b))return;i.blur(),P("");let G=Math.max(10,Math.min(22,24-b.length/28));w=yE(z,t.glyphs(),{ink:"rgba(30,16,8,0.97)",xh:G,width:.15,seed:11+b.length,speed:60,pace:.2,minDur:.03,maxTime:Re=>2.4+Re.length/160,fixed:{mx:46,my:40},onPen:()=>{Hn.STATE.inkDirty=!0},onDone:()=>{Hn.STATE.inkDirty=!0}}),R("down")}function Ge(){try{let G={access_key:bE,subject:"A note left in the confessional",from_name:"Your gallery",message:b,page:location.href,when:new Date().toString()};fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(G),keepalive:!0}).catch(()=>{})}catch(G){}}function Te(){p==="ready"&&(Ge(),R("fold"),P(""))}function ye(){!u||p==="leave"||(P(""),i.blur(),le=zt,Ve=j,R("leave"))}let le=null,Ve=null,zt=null,St=Hn.SHOTS.window,Vt=Hn.OFF,Tt=G=>[G[0]+Vt[0],G[1],G[2]],no=[[3.4,1.75,44.5],[.3,1.72,44.5],[-2.5,1.66,45],[-4.6,1.6,46.55],[-7,1.58,47.15],[-9.3,1.55,46.4],Tt([1.25,1.5,43.25]),Tt([-.55,1.36,42.92])],bo=[[-3,1.9,44.5],[-6.5,1.5,44.6],[-7,1,44.4],[-7.6,.95,44],[-10.5,1.5,44.6],Tt([-1,1.55,43.6]),Tt([-1.4,1.35,43.1]),Tt([-1.5,1.33,43.3])];function Yo(G){let Re=Qa(R0(G)),Qe=[g.eye,...no,St.eye],Se=[g.target,...bo,St.target];return{eye:si(Qe,Re),target:si(Se,ta(0,1,Re*1.03)),fov:Pa(g.fov,St.fov,ta(.6,.97,Re)),roll:(g.roll||0)*(1-Re)}}function tt(G,Re){if(v)return G;let Qe=performance.now()/1e3,Se=.004*Re,he=Math.sin(Qe*.61)*.6+Math.sin(Qe*1.37+1.3)*.4,kt=Math.sin(Qe*.47+2.1)*.6+Math.sin(Qe*1.13+.4)*.4;return{eye:[G.eye[0]+he*Se,G.eye[1]+kt*Se*.7,G.eye[2]],target:[G.target[0]+kt*Se*1.5,G.target[1]+he*Se,G.target[2]],fov:G.fov,roll:G.roll}}function Et(G,Re,Qe){let Se={};for(let he in Re)Se[he]=typeof Re[he]=="number"&&typeof G[he]=="number"?Pa(G[he],Re[he],Qe):Re[he];return Se}function $t(G){G*=window.__confSpeed||1,m+=G;let Re=o1(St),Qe=o1(Hn.SHOTS.paper),Se,he,kt=o1(Hn.SHOTS.peek);if(p==="room")D.moving?(D.u=Math.min(1,D.u+G/D.T),Se=D.path(D.raw?D.u:Qa(D.u)),he=Et(D.lookFrom,D.lookTo,ta(.1,.9,D.u)),D.raw&&(he.fade=(y.fade||0)*(1-ta(0,.12,D.u))),D.u>=1&&(D.moving=!1,D.rest=0,f.textContent=Y(),P("hint"))):(D.rest+=G,Se=tt(o1(Mc[D.i]),2.5),he=r1(Mc[D.i]));else if(p==="enter"){let wt=R0(m/(v?.6:9)),xt=Qa(wt),Dt=[ro.eye,[-7.6,1.9,47.6],[-9.6,1.85,45.6],Tt([.75,1.5,42.95]),Tt([-.25,1.42,42.82]),Tt([-.9,1.42,42.82]),kt.eye];Se={eye:si(Dt,xt),target:Jl(ro.target,kt.target,ta(0,.35,xt)),fov:Pa(ro.fov,kt.fov,ta(.3,1,xt)),roll:0},he=Et(wo,Kd,ta(.2,.9,wt)),wt>=1&&R("peek")}else if(p==="peek")Se=tt(kt,1.5),he=Kd,m>(v?.5:3.2)&&R("turn");else if(p==="turn"){let _=R0(m/(v?.4:3.2));Se=Yd(kt,Re,Qa(_)),he=Et(Kd,kc,Qa(_)),_>=1&&(R("write"),P("write"))}else if(p==="write")Se=tt(Re,1),he=kc;else if(p==="down"){let _=R0(m/(v?.4:2));Se=Yd(Re,Qe,Qa(_)),he=Et(kc,Zl,Qa(_)),_>=1&&(M=w.write(b,v)||0,Hn.STATE.inkDirty=!0,R("writing"))}else if(p==="writing")Se=tt(Qe,.6),he=Zl,m>M+.8&&(R("ready"),f.textContent=h?"Scroll to fold it and pass it through":"Swipe up to fold it and pass it through",P("hint"));else if(p==="ready")Se=tt(Qe,.6),he=Zl;else if(p==="fold"){let _=R0(m/(v?.3:1.5));Hn.STATE.fold=Qa(_),Se=tt(Qe,.6),he=Zl,_>=1&&R("slide")}else if(p==="slide"){let wt=R0(m/(v?.6:3.4));Hn.STATE.slide=Qa(ta(0,.7,wt));let xt=Qa(ta(.35,1,wt));Se=Yd(Qe,Re,xt),he=Et(Zl,kc,xt),wt>=1&&(Hn.STATE.shown=!1,R("final"),P("final"))}else if(p==="final")Se=tt(Re,1),he=kc;else if(p==="leave"){let _=v?.6:le.eye[0]<Vt[0]-.3?12:7,wt=R0(m/_),xt={eye:g.eye,target:g.target,fov:g.fov,roll:g.roll},Dt=Qa(wt),Yt=le.eye[0]<Vt[0]-.3,So=Yt?[le.eye,Tt([-.55,1.4,42.8]),Tt([1.4,1.55,43.3]),[-9.3,1.58,46.4],[-7,1.6,47.15],[-4.6,1.62,46.55],[-2.2,1.68,44.8],[.6,1.72,44.5],xt.eye]:[le.eye,[-3.4,1.7,46.2],[-1.2,1.7,44.8],[.6,1.72,44.5],xt.eye],Bo=Yt?[le.target,Tt([1.5,1.45,43.4]),[-7,1.2,44.6],[-4,1.5,47],[-1.5,1.7,45.5],[1,1.8,44.5],[4,1.8,44.5],[7,1.9,44.2],xt.target]:[le.target,[-1.5,1.7,45.2],[2,1.8,44.5],[6,1.9,44.3],xt.target];if(Se={eye:si(So,Dt),target:si(Bo,Dt),fov:Pa(le.fov,xt.fov,Dt),roll:xt.roll*Dt},he=Et(Ve||kc,y,ta(.1,.7,wt)),he.fade=(y.fade||0)*ta(.82,1,wt),wt>=1){u=!1,Hn.STATE.active=!1,Hn.STATE.shown=!0,Hn.STATE.fold=0,Hn.STATE.slide=0;let Lo=z.getContext("2d");Lo.setTransform(1,0,0,1,0,0),Lo.clearRect(0,0,z.width,z.height),Hn.STATE.inkDirty=!0,document.body.classList.remove("confessing"),t.onExit&&t.onExit()}}return zt=Se,j=he,{camera:Se,look:he}}let ro=null,wo=null;function ie(){if(p==="room"){if(D.moving||D.rest<.4)return;D.i<Mc.length-1?I(D.i+1):(ro=zt,wo=j,P(""),R("enter"));return}if(p==="peek"){m>.4&&R("turn");return}p==="ready"?Te():p==="writing"&&w&&(w.finish(),m=Math.max(m,M))}function ce(){p==="room"&&!D.moving&&D.rest>.4&&D.i>0&&I(D.i-1)}return{start:U,update:$t,leave:ye,get active(){return u},get stage(){return p},wheel(G){G>8?ie():G<-8&&ce()},swipe(G){G>0?ie():G<0&&ce()},tap(){ie()},key(G){return["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(G)>=0?(ie(),!0):["ArrowUp","ArrowLeft","PageUp"].indexOf(G)>=0?(ce(),!0):G==="Escape"?(ye(),!0):!1},_setNote(G){i.value=G,i.dispatchEvent(new Event("input"))}}}});var G5=ke((ST,D5)=>{"use strict";var Sc=ec(),a1=Md(),Zd=Bf(),_E=sl(),Jd=Sd(),ME=Ma(),s1=!ME.isPhone&&!!(window.matchMedia&&window.matchMedia("(pointer: fine)").matches),{A:ma}=Ea(),{C:yr,PAINTING_X:Tc}=br(),na=e=>Math.max(0,Math.min(1,e)),Ze=(e,t,o)=>e+(t-e)*o,Qo=(e,t,o)=>[Ze(e[0],t[0],o),Ze(e[1],t[1],o),Ze(e[2],t[2],o)],uo=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],ep=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],Ur=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],Xe=(e,t,o)=>{let n=na((o-e)/(t-e));return n*n*(3-2*n)};function kE(e,t,o,n,r,a){if(r<=0)return[e,o];let s=2/n,i=s*r,c=1/(1+i+.48*i*i+.235*i*i*i),f=a*n,l=Math.max(-f,Math.min(f,e-t)),d=e-l,h=(o+s*l)*r,v=(o-s*h)*c,u=d+(l+h)*c;return t-e>0==u>t&&(u=t,v=0),[u,v]}var O5=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,SE=e=>e*e*e,tp=e=>1-Math.pow(1-e,3),En=e=>-(Math.cos(Math.PI*e)-1)/2;function Pn(e,t){let o=e.length-1,n=na(t)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,s=e[Math.max(0,r-1)],i=e[r],c=e[r+1],f=e[Math.min(o,r+2)],l=a*a,d=l*a;return[0,1,2].map(h=>.5*(2*i[h]+(-s[h]+c[h])*a+(2*s[h]-5*i[h]+4*c[h]-f[h])*l+(-s[h]+3*i[h]-3*c[h]+f[h])*d))}var io=(e,t,o,n)=>({eye:e,target:t,fov:o,roll:n||0});function hi(e,t,o){return io(Qo(e.eye,t.eye,o),Qo(e.target,t.target,o),Ze(e.fov,t.fov,o),Ze(e.roll,t.roll,o))}var sp=()=>Xe(.75,1.3,window.innerWidth/window.innerHeight),Br=(e,t)=>hi(e,t,sp()),i1=[7,3.95,yr.hallEnd-.05],EE=[yr.x1,2.9,yr.zc],Ac=[16.75,4.55,6.75],ip=[6.92,2.72,14.5],Ja=[7.3,.015,47.1],AE=[Ac,[16.2,4,7],[15.3,3.45,6.4],[14.1,3.2,5.7],[12.2,3.35,6.6],[10,3.75,9.6],[8.2,3.8,12.2],[7.3,3.4,13.8],ip],zE=[ip,[7.3,4.6,19.5],[7.6,4.9,23.5],[6.6,4.3,28.5],[7.5,3.2,34],[6.8,2.1,39.5],[7.4,1,44.2],[7.2,.3,46.4],Ja],ci=[Tc[0],3,yr.z0],li=[Tc[1],3,yr.z0],np=47.45,q5=4.6,TE=13.2,LE=1.57,tf=[7.55,1.25,46.75],cp=[17.25,2.42,46],lp=[26.05,1.95,46],of=[36.15,.015,44],h1=()=>Ze(6.8,6.15,sp()),NE=[tf,[9.6,1.65,46.2],[12.3,2.05,45.1],[14.6,2.35,44.5],[16.2,2.3,44.7],cp],RE=[cp,[20.2,2.05,45.6],[23.2,1.8,45],lp],fi=[Tc[2],3,yr.z0],rp=[34.8,1.35,46],gs=[7.89,.03,19.03],C5=.36,P5=13.64,Mr=[{side:"left",z:34.5},{side:"left",z:23.5},{side:"left",z:14.6},{side:"right",z:14.6},{side:"right",z:23.5},{side:"right",z:34.5}];function Ia(e){let t=e.side==="left"?1:-1;return Qo([7-t*1,3,e.z+t*.2],[7-t*.6,3.25,e.z+t*.13],sp())}function OE(e){return e.side==="left"?Br(io([8.6,3.9,e.z],[C5,1.45,e.z],76),io([8,3.6,e.z+.7],[C5,3.95,e.z-2],46,-.008)):Br(io([5.4,3.9,e.z],[P5,1.45,e.z],76),io([6,3.6,e.z-.7],[P5,3.95,e.z+2],46,-.008))}var CE=()=>[of,[35.6,.5,44.6],[33.2,1.5,45.6],[29,2.3,46.1],[23.5,2.7,45.9],[18.5,2.9,45.4],[14.8,3.1,44.3],[11,3.3,41.8],[7.4,3.4,38.8],[5.4,3.3,36.6],Ia(Mr[0])],PE=()=>[Ia(Mr[2]),[3,3.2,13.2],[1.7,3,12],[2.6,3.2,10],[5,3.6,8.9],[7,3.8,8.6],[9,3.6,8.9],[11.4,3.2,10],[12.3,3,12],[11,3.1,13.4],Ia(Mr[3])],IE=()=>[Ia(Mr[5]),[9,3.4,31],[7.8,2.8,27.5],[6.8,1.9,24.5],[7.4,1,21],[7.75,.35,19.6],gs],I5={2:{pos:()=>ip,amp:[.18,.07,.12],tumble:.5},7:{pos:()=>tf,amp:[.12,.09,.1],tumble:.55},8:{pos:()=>cp,amp:[.1,.08,.08],tumble:.5},9:{pos:()=>lp,amp:[.09,.06,.07],tumble:.45},10:{pos:()=>rp,amp:[.07,.04,.06],tumble:.35},12:{pos:()=>Ia(Mr[0]),amp:[.12,.08,.1],tumble:.5},13:{pos:()=>Ia(Mr[1]),amp:[.12,.08,.1],tumble:.5},14:{pos:()=>Ia(Mr[2]),amp:[.12,.08,.1],tumble:.5},15:{pos:()=>Ia(Mr[3]),amp:[.12,.08,.1],tumble:.5},16:{pos:()=>Ia(Mr[4]),amp:[.12,.08,.1],tumble:.5},17:{pos:()=>Ia(Mr[5]),amp:[.12,.08,.1],tumble:.5}},ms=[{name:"corridor",ui:"intro",look:{letterbox:1,exposure:1,focus:14,aperture:.25,vignette:.1},cam(e){let t=.9*(1-Math.exp(-e/14)),o=[0,Math.sin(e*.37)*.025,Math.sin(e*.23)*.06],n=Br(io([yr.x0+.9,1.85,yr.zc+.25],[yr.x1,2.85,yr.zc-.1],64),io([yr.x0+1.2,2,yr.zc+.35],[yr.x1,2.6,yr.zc-.15],50));return n.eye=uo(uo(n.eye,[t,0,0]),o),n}},{name:"about",ui:"about",look:{letterbox:.55,exposure:1.32,focus:2.9,aperture:.9,vignette:.12,shafts:.65},cam(e){let t=[Math.sin(e*.21)*.08,Math.sin(e*.33)*.03,-.25*(1-Math.exp(-e/12))],o=Br(io([16.6,1.9,9.2],[17.3,.4,5.6],64),io([15,1.35,7.75],[17.55,1.05,5.5],44,-.02));return o.eye=uo(o.eye,t),o}},{name:"sky",ui:"sky",look:{letterbox:.55,exposure:1,focus:2.1,aperture:.45,vignette:.1,shafts:1},cam(e){let t=[Math.sin(e*.12)*.35,Math.sin(e*.2)*.04,(1-Math.cos(e*.12))*.25],o=Br(io([7,1.35,13],[7.2,7.6,20.4],74,.05),io([6.6,1.5,12.6],[7.3,7.2,20.8],56,.07));return o.eye=uo(o.eye,t),o}},{name:"master",ui:"master",look:{letterbox:.55,exposure:1.12,focus:8,aperture:.6,vignette:.3,shafts:.5},cam(e){let t=[Math.sin(e*.17)*.05,Math.sin(e*.29)*.02,-.35*(1-Math.exp(-e/16))],o=Br(io([7,3.6,43.7],[7,3.85,i1[2]],74),io([7,3.6,41.3],[7,3.95,i1[2]],46));return o.eye=uo(o.eye,t),o}},{name:"story",ui:"story",look:{letterbox:.55,exposure:1,focus:8.1,aperture:.9,vignette:.4,shafts:.4},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],o=Br(io([7,3.9,40.3],[7,1.35,i1[2]],76),io([6.3,3.6,41.2],[3.7,3.95,i1[2]],46,-.008));return o.eye=uo(o.eye,t),o}},{name:"leaf",ui:"leaf",look:{letterbox:.55,exposure:1.15,focus:1.25,aperture:1.3,vignette:.35,shafts:.4},cam(e){let t=[Math.sin(e*.2)*.02,Math.sin(e*.3)*.006,0],o=Br(io([7.15,.15,46],[7.3,.04,Ja[2]],50),io([7.05,.14,45.9],[7.25,.05,Ja[2]],32));return o.eye=uo(o.eye,t),o}},{name:"steps",ui:"steps",look:{letterbox:.9,exposure:1.2,focus:1.6,aperture:1.4,vignette:.4,shafts:.4},cam(e){let t=[Math.sin(e*.2)*.015,0,0],o=Br(io([7.15,.1,46.3],[7.05,.1,np],50),io([7.1,.12,45.85],[7,.2,np],30));return o.eye=uo(o.eye,t),o}},{name:"float",ui:"float",look:{letterbox:.55,exposure:1.1,focus:2.2,aperture:.8,vignette:.3,shafts:.6},cam(e){let t=[Math.sin(e*.17)*.05,Math.sin(e*.27)*.02,0],o=Br(io([7.3,.85,45.65],[7.6,1.38,47.1],64),io([7.25,.82,45.8],[7.65,1.35,47.1],44));return o.eye=uo(o.eye,t),o}},{name:"painting1",ui:"p1",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],o=Br(io([ci[0],2.3,46.85],[ci[0],1.25,ci[2]],74),io([ci[0]-.6,2.55,46.85],[ci[0]+1.9,2.9,ci[2]],46,.008));return o.eye=uo(o.eye,t),o}},{name:"painting2",ui:"p2",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],o=Br(io([li[0],1.95,46.85],[li[0],1,li[2]],74),io([li[0]-.6,2.1,46.85],[li[0]+1.9,2.75,li[2]],46,.008));return o.eye=uo(o.eye,t),o}},{name:"painting3",ui:"p3",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.9},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],o=Br(io([fi[0],1.4,46.85],[fi[0],.6,fi[2]],74),io([fi[0]-.6,1.45,46.85],[fi[0]+1.9,2,fi[2]],46,.008));return o.eye=uo(o.eye,t),o}},{name:"door",ui:"door",look:{letterbox:.8,exposure:1.05,focus:1.45,aperture:1.1,vignette:.35,shafts:1},cam(e){let t=[Math.sin(e*.2)*.02,Math.sin(e*.3)*.006,0],o=Br(io([34.75,.5,44.15],[yr.x1,.8,43.95],66),io([34.75,.45,44.3],[yr.x1,.35,43.95],50));return o.eye=uo(o.eye,t),o}},...Mr.map((e,t)=>({name:"hall"+t,ui:"h"+t,look:{letterbox:.55,exposure:1,focus:7.6,aperture:.7,vignette:.35,shafts:.7},cam(o){let n=[Math.sin(o*.15)*.04,Math.sin(o*.25)*.015,Math.sin(o*.11)*.04],r=OE(e);return r.eye=uo(r.eye,n),r}})),{name:"rest",ui:"end",look:{letterbox:.55,exposure:1.05,focus:2.4,aperture:.5,vignette:.4,shafts:1.15},cam(e){let t=e*.025,o=Br(io([7.75,2.6,18.6],[7.89,0,19.08],60),io([7.75,2.3,18.45],[7.89,0,19.08],46)),n=o.eye[0]-gs[0],r=o.eye[2]-gs[2];return o.eye=[gs[0]+n*Math.cos(t)-r*Math.sin(t),o.eye[1],gs[2]+n*Math.sin(t)+r*Math.cos(t)],o}}],$E=[1,.96,.88];function $5(e,t){return{dur:t,cam(o,n,r){let a=En(o),s=hi(n,r,a),i=Mr[e].side==="left"?1:-1;return s.eye=uo(s.eye,[i*.6*Math.sin(Math.PI*a),.15*Math.sin(Math.PI*a),0]),s},look(o,n,r){let a={};for(let s in r)typeof r[s]=="number"&&(a[s]=Ze(n[s],r[s],o));return a.aperture=Ze(n.aperture,r.aperture,o)*(1-.5*Math.sin(Math.PI*o)),a},leaf(o){let n=En(o),r=Ia(Mr[e]),a=Ia(Mr[e+1]),s=Mr[e].side==="left"?1:-1,i=uo(Qo(r,a,.5),[s*1.2,.5,0]),c=Pn([r,Qo(r,i,.6),i,Qo(a,i,.6),a],n);return{phase:"fly",pos:uo(c,[0,Math.sin(o*Math.PI*5)*.07*Math.sin(Math.PI*o),0]),tumble:.5+.35*Math.sin(Math.PI*o)}}}}var op=[{dur:6.2,cam(e,t,o){if(e<.5){let i=SE(e/.5),c=Qo(t.eye,[yr.x1-3.2,2.6,yr.zc],i),f=Qo(t.target,EE,Xe(0,.6,e/.5));return io(c,f,Ze(t.fov,t.fov-8,i),Ze(t.roll,.04,i))}let n=tp((e-.5)/.5),r=[[ma.cx+.4,10.4,ma.zc+.6],[ma.cx-.6,7.6,ma.zc+1.3],[ma.cx-1.9,4.6,ma.zc+1.75],o.eye],a=[[ma.cx-.1,0,ma.zc-.2],[ma.cx-1,.4,ma.zc-.1],[ma.cx-1.1,.8,ma.zc-.2],o.target];return io(Pn(r,n),Pn(a,n),Ze(o.fov+14,o.fov,n),Ze(-.25,o.roll,n))},look(e,t,o){let n=Xe(.22,.5,e),r=1-Xe(.5,.74,e);return{fade:e<.5?n:r,fadeColor:$E,exposure:Ze(t.exposure,o.exposure,Xe(.5,.9,e))*(1+2.2*(e<.5?Xe(.15,.5,e):1-Xe(.5,.8,e))),letterbox:Ze(t.letterbox,o.letterbox,Xe(.3,.7,e)),aperture:e<.5?t.aperture*(1-e*2):o.aperture*Xe(.6,1,e),focus:Ze(4,o.focus,Xe(.5,1,e)),shafts:Ze(t.shafts,o.shafts,Xe(.4,.6,e)),vignette:Ze(t.vignette,o.vignette,e)}},leaf(){return{phase:"home"}}},{dur:9,cam(e,t,o,n){let r=[t.eye,[15.6,2.4,8.3],[15.4,2.7,7.1],[12.6,2.6,5.4],[9.6,2,7.4],[7.6,1.6,10.6],o.eye],a=Pn(r,En(e)),s=Xe(0,.12,e)*(1-Xe(.82,1,e)),i=Qo(Qo(t.target,o.target,Xe(.55,1,e)),n.pos,s),c=Ze(t.fov,o.fov,Xe(.3,1,e))-6*Math.sin(Math.PI*e),f=Ze(t.roll,o.roll,e)+.05*Math.sin(Math.PI*2*e);return io(a,i,c,f)},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{exposure:Ze(t.exposure,o.exposure,Xe(.25,.75,e)),letterbox:Ze(t.letterbox,o.letterbox,e),focus:Ze(a,o.focus,Xe(.8,1,e)),aperture:Ze(.7,o.aperture,Xe(.8,1,e)),shafts:Ze(t.shafts,o.shafts,Xe(.3,.8,e)),vignette:Ze(t.vignette,o.vignette,e)}},leaf(e){let t=O5(e),o=Math.sin(e*Math.PI*7)*.14*Math.sin(Math.PI*e);return{phase:"fly",pos:uo(Pn(AE,t),[0,Math.sin(e*Math.PI*9)*.05*Math.sin(Math.PI*e),o]),tumble:1-.5*Xe(.8,1,e)}}},{dur:11.5,cam(e,t,o,n){let r=Pn([t.eye,[7,1.9,19],[7.1,1.6,27.5],[6.9,1.1,36],[7,.7,42.5],[7.05,.5,45.7]],Xe(0,.8,e)*.6+En(na(e/.8))*.4),a=Pn([[7.05,.5,45.7],[7,1.2,45.3],[7,2.6,43.8],o.eye],En(Xe(.8,1,e))),s=e<.8?r:a,i=Qo(Qo(t.target,n.pos,Xe(.03,.22,e)),o.target,Xe(.82,1,e)),c=Ze(t.fov,o.fov,Xe(.15,.7,e))-6*Xe(.6,.8,e)*(1-Xe(.85,1,e)),f=Ze(t.roll,o.roll,Xe(0,.6,e))-.04*Math.sin(Math.PI*e);return io(s,i,c,f)},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{exposure:Ze(t.exposure,o.exposure,Xe(.5,1,e)),letterbox:Ze(t.letterbox,o.letterbox,e),focus:Ze(a,o.focus,Xe(.84,1,e)),aperture:Ze(1.1,o.aperture,Xe(.84,1,e)),shafts:Ze(t.shafts,o.shafts,Xe(.2,.9,e)),vignette:Ze(t.vignette,o.vignette,Xe(.5,1,e))}},leaf(e){let t=Ze(O5(e),e,.35),o=Pn(zE,Xe(0,.78,t)),n=Math.sin(e*Math.PI*8)*.35*(1-Xe(.55,.76,e)),r=Xe(.7,.8,e);return{phase:"fly",pos:uo(o,[n,Math.abs(Math.cos(e*Math.PI*8))*.12*(1-r),0]),tumble:1-r,swing:n}}},{dur:2.6,cam(e,t,o){let n=En(e),r=hi(t,o,n);return r.eye=uo(r.eye,[0,0,-.35*Math.sin(Math.PI*n)]),r},look(e,t,o){let n=En(e),r={};for(let a in o)typeof o[a]=="number"&&(r[a]=Ze(t[a],o[a],n));return r},leaf(){return{phase:"floor"}}},{dur:4.5,cam(e,t,o){let n=En(e),r=Pn([t.eye,[6.9,1.7,43.9],[7.05,.45,45.4],o.eye],n),a=Qo(t.target,o.target,Xe(.1,.85,e));return io(r,a,Ze(t.fov,o.fov,Xe(.2,1,e)),Ze(t.roll,o.roll,n))},look(e,t,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=Ze(t[r],o[r],Xe(.2,1,e)));return n},leaf(){return{phase:"floor"}}},{dur:5.5,cam(e,t,o){return hi(t,o,En(e))},look(e,t,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=Ze(t[r],o[r],En(e)));return n},leaf(){return{phase:"floor"}},walker(e){return Ze(q5,h1(),e)}},{dur:11,kick:e=>na((e-Ec())/(1-Ec())),cam(e,t,o,n){let r=Ec(),a=Xe(0,r,e)*(1-Xe(r+.12,r+.35,e)),s=F5(Math.min(e,zc)),i=uo(t.target,[(s-t.target[0])*.15*a,0,0]),c=Xe(r+.12,1,e),f=Pn([t.eye,t.eye,uo(t.eye,[0,.12,-.3]),o.eye],c);return i=Qo(i,n.pos,Xe(r+.06,r+.24,e)*(1-Xe(.9,1,e))),i=Qo(i,o.target,Xe(.88,1,e)),io(f,i,Ze(t.fov,o.fov,c),Ze(t.roll,o.roll,c))},look(e,t,o,n,r){let a=Ec(),s=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]),i=Xe(0,.12,e)*(1-Xe(a+.25,a+.5,e));return{letterbox:Ze(Ze(t.letterbox,o.letterbox,Xe(a,1,e)),1.75,i),exposure:Ze(t.exposure,o.exposure,Xe(a,1,e)),focus:e<a?t.focus:Ze(t.focus,s,Xe(a,a+.2,e)),aperture:Ze(t.aperture,o.aperture,Xe(a,1,e)),vignette:Ze(t.vignette,o.vignette,e),shafts:Ze(t.shafts,o.shafts,e)}},leaf(e){let t=na((e-Ec())/(1-Ec()));if(t<=0)return{phase:"floor"};let o=Xe(0,.85,t)*.85+tp(Xe(0,.15,t))*.15;return{phase:"fly",pos:uo(Ja,[(tf[0]-Ja[0])*o+Math.sin(t*9)*.08*(1-t),(tf[1]-Ja[1])*o,(tf[2]-Ja[2])*o+Math.sin(t*7)*.06*(1-t)]),tumble:1.3-.75*t}},walker(e){return e<.985?F5(e):null}},{dur:9,cam(e,t,o,n){let r=En(e),a=Pn([t.eye,[9.4,1.35,45.6],[12.4,2,45.9],[15,2.45,46.5],o.eye],r),s=1-Xe(.6,.92,e),i=Qo(Qo(t.target,n.pos,Xe(0,.15,e)),o.target,1-s),c=Ze(t.fov,o.fov,Xe(.3,1,e)),f=Ze(t.roll,o.roll,r)+.04*Math.sin(Math.PI*e);return io(a,i,c,f)},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:Ze(t.letterbox,o.letterbox,e),exposure:Ze(t.exposure,o.exposure,Xe(.3,.8,e)),focus:Ze(a,o.focus,Xe(.6,.95,e)),aperture:Ze(t.aperture,o.aperture,Xe(.6,1,e)),vignette:Ze(t.vignette,o.vignette,e),shafts:Ze(t.shafts,o.shafts,Xe(.3,.8,e))}},leaf(e){let t=En(e);return{phase:"fly",pos:uo(Pn(NE,t),[0,Math.sin(e*Math.PI*5)*.08*Math.sin(Math.PI*e),Math.sin(e*Math.PI*4)*.12*Math.sin(Math.PI*e)]),tumble:.55+.4*Math.sin(Math.PI*e)}}},{dur:6.5,cam(e,t,o){let n=En(e),r=hi(t,o,n);return r.eye=uo(r.eye,[0,.12*Math.sin(Math.PI*n),.1*Math.sin(Math.PI*n)]),r},look(e,t,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=Ze(t[r],o[r],e));return n.aperture=Ze(t.aperture,o.aperture,e)*(1-.5*Math.sin(Math.PI*e)),n},leaf(e){let t=En(e);return{phase:"fly",pos:uo(Pn(RE,t),[0,Math.sin(e*Math.PI*4)*.07*Math.sin(Math.PI*e),0]),tumble:.5+.3*Math.sin(Math.PI*e)}}},{dur:6.5,cam(e,t,o){let n=En(e),r=hi(t,o,n);return r.eye=uo(r.eye,[0,.1*Math.sin(Math.PI*n),.1*Math.sin(Math.PI*n)]),r},look(e,t,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=Ze(t[r],o[r],e));return n.aperture=Ze(t.aperture,o.aperture,e)*(1-.5*Math.sin(Math.PI*e)),n},leaf(e){let t=En(e);return{phase:"fly",pos:uo(Pn([lp,[29.2,1.75,45.5],[32.2,1.5,45.4],rp],t),[0,Math.sin(e*Math.PI*4)*.06*Math.sin(Math.PI*e),0]),tumble:.45+.25*Math.sin(Math.PI*e)}}},{dur:6,cam(e,t,o,n){let r=En(e),a=Pn([t.eye,[34.2,1.15,45.6],[34.5,.7,44.8],o.eye],r),s=Xe(.05,.3,e)*(1-Xe(.8,1,e)),i=Qo(Qo(t.target,o.target,Xe(.6,1,e)),n.pos,s);return io(a,i,Ze(t.fov,o.fov,Xe(.2,1,e)),Ze(t.roll,o.roll,r))},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:Ze(t.letterbox,o.letterbox,e),exposure:Ze(t.exposure,o.exposure,e),focus:Ze(a,o.focus,Xe(.8,1,e)),aperture:Ze(.9,o.aperture,Xe(.8,1,e)),vignette:Ze(t.vignette,o.vignette,e),shafts:Ze(t.shafts,o.shafts,e)}},leaf(e){let t=Pn([rp,[35.3,.9,45.2],[35.75,.4,44.4],[36,.08,44.05],of],Xe(0,.85,e)),o=Math.sin(e*Math.PI*6)*.25*(1-Xe(.35,.82,e)),n=Xe(.78,.88,e);return{phase:"fly",pos:uo(t,[0,Math.abs(Math.cos(e*Math.PI*6))*.07*(1-n),o]),tumble:.7*(1-n),swing:o}}},{dur:12,door(e){let t=na((e-.02)/.09);return tp(t)+.07*Math.sin(na((e-.08)/.18)*Math.PI)*(1-na((e-.08)/.3))},cam(e,t,o,n){let r=Math.sin(e*340)*.012*Xe(.02,.05,e)*(1-Xe(.08,.16,e)),a=Xe(.06,1,e),s=Pn([t.eye,[34.3,1,43.6],[31.5,1.9,43.4],[26.5,2.4,43.6],[21,2.6,43.6],[16.5,2.8,43.2],[12.6,3.1,41.2],[9.6,3.4,38],o.eye],a*.55+En(a)*.45),i=uo(n.pos,[1,-.2,-1.45]);s=Qo(s,i,Xe(.1,.22,e)*(1-Xe(.52,.72,e)));let c=Xe(.06,.16,e)*(1-Xe(.86,1,e)),f=Qo(t.target,n.pos,c);f=Qo(f,o.target,Xe(.86,1,e));let l=Ze(t.fov,o.fov,Xe(.1,1,e))+6*Math.sin(Math.PI*Xe(.08,.9,e)),d=Ze(t.roll,o.roll,e)+.06*Math.sin(Math.PI*2*Xe(.1,.9,e))+r;return io(uo(s,[0,r,0]),f,l,d)},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]),s=Xe(.02,.06,e)*(1-Xe(.08,.3,e));return{letterbox:Ze(t.letterbox,o.letterbox,Xe(.1,.4,e)),exposure:Ze(t.exposure,o.exposure,e)*(1+.8*s),focus:Ze(a,o.focus,Xe(.86,1,e)),aperture:Ze(.8,o.aperture,Xe(.86,1,e)),vignette:Ze(t.vignette,o.vignette,e),shafts:Ze(t.shafts,o.shafts,e)+s}},leaf(e){let t=na((e-.05)/.95);if(t<=0)return{phase:"floor"};let o=Pn(CE(),t*.6+En(t)*.4),n=Math.sin(e*Math.PI*9)*.12*Math.sin(Math.PI*t);return{phase:"fly",pos:uo(o,[0,n*.6,n]),tumble:1.4-.8*t}}},...[0,1].map(e=>$5(e,7.5)),{dur:10,cam(e,t,o,n){let r=En(e),a=Pn([t.eye,[7.6,3.2,16.2],[7,2.9,17.2],[6.5,3.2,16],o.eye],r),s=Xe(0,.15,e)*(1-Xe(.85,1,e)),i=Qo(Qo(t.target,o.target,Xe(.5,1,e)),n.pos,s);return io(a,i,Ze(t.fov,o.fov,r)+4*Math.sin(Math.PI*r),Ze(t.roll,o.roll,r))},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:Ze(t.letterbox,o.letterbox,e),exposure:Ze(t.exposure,o.exposure,e),focus:Ze(a,o.focus,Xe(.85,1,e)),aperture:Ze(.6,o.aperture,Xe(.85,1,e)),vignette:Ze(t.vignette,o.vignette,e),shafts:Ze(t.shafts,o.shafts,e)}},leaf(e){let t=En(e),o=Pn(PE(),t);return{phase:"fly",pos:uo(o,[0,Math.sin(e*Math.PI*6)*.06*Math.sin(Math.PI*e),0]),tumble:.6+.4*Math.sin(Math.PI*e)}}},...[3,4].map(e=>$5(e,7.5)),{dur:10,cam(e,t,o,n){let r=En(e),a=Pn([t.eye,[7.6,4,30.5],[7.3,4.4,25.5],[7.1,4,21.8],o.eye],r),s=Xe(0,.2,e)*(1-Xe(.9,1,e)),i=Qo(Qo(t.target,o.target,Xe(.5,1,e)),n.pos,s);return io(a,i,Ze(t.fov,o.fov,r),Ze(t.roll,o.roll,r))},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:Ze(t.letterbox,o.letterbox,e),exposure:Ze(t.exposure,o.exposure,e),focus:Ze(a,o.focus,Xe(.85,1,e)),aperture:Ze(.7,o.aperture,Xe(.85,1,e)),vignette:Ze(t.vignette,o.vignette,e),shafts:Ze(t.shafts,o.shafts,e)}},leaf(e){let t=Pn(IE(),Xe(0,.86,e)),o=Math.sin(e*Math.PI*7)*.3*(1-Xe(.4,.84,e)),n=Xe(.8,.9,e);return{phase:"fly",pos:uo(t,[o,Math.abs(Math.cos(e*Math.PI*7))*.08*(1-n),0]),tumble:.8*(1-n),swing:o}}}],ap=9.2,zc=.72;function F5(e){return e<zc?Ze(h1(),ap,e/zc):Ze(ap,TE,(e-zc)/(1-zc))}function Ec(){return zc*na((Ja[0]+.15-h1())/(ap-h1()))}var f1={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},c1=e=>Object.assign({},f1,ms[e].look),FE=`
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
`;function oa(e,t,o){let n=document.createElement(e);return t&&(n.className=t),o!==void 0&&(n.innerHTML=o),n}var ii=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function l1(e,t,o){e.querySelectorAll(".tour-line").forEach((n,r)=>{n.style.transitionDelay=(t+r*o).toFixed(2)+"s"})}D5.exports=function(t){let o=/tourdebug/.test(location.search),{fps:n}=t;if(!document.querySelector("link[data-tour-font]")){let X=document.createElement("link");X.rel="stylesheet",X.href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&display=swap",X.setAttribute("data-tour-font",""),document.head.appendChild(X)}let r=Wd(),a=null;fetch("res/hand.json").then(X=>X.ok?X.json():null).then(X=>{a=X}).catch(()=>{});let s=document.createElement("style");s.textContent=FE+`
	.hand-text { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); clip-path: inset(50%); white-space: normal; }
	.tour-body canvas.hand { display: block; cursor: pointer; }`,s.textContent+=`
	body.touring #museum-mobile-controls,
	body.touring .painting-plaque { display: none !important; }`,document.head.appendChild(s);let i=oa("div","tour");i.setAttribute("role","region"),i.setAttribute("aria-label","Guided tour of the gallery. Swipe, scroll or press the arrow keys to move on.");let c=oa("div","tour-mark",ii(a1.name)),f=oa("button","tour-free","Explore freely");f.type="button";let l=oa("div","tour-links",Zd.icons("tour-icon"));l.insertBefore(Xd()("tour-icon"),l.firstChild),l.insertBefore(Uh().button("tour-icon"),l.firstChild.nextSibling);let d=oa("button","tour-free tour-note",'<svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 4c-7 1-11.5 5.5-13 13l-1.5 3 3-1.5c7.500-1.500 12-6 13-13z"/><path d="M5.5 20L13 12.500"/></svg><span>Leave a note</span>');d.type="button",d.setAttribute("aria-label","Leave a note: go to the piano room and the confessional"),l.appendChild(d),s1&&l.appendChild(f);let h=oa("div","tour-progress",ms.map(()=>"<i></i>").join("")),v=oa("div","tour-hint",'<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M6 15l6-6 6 6"></path></svg><span></span>'),u=v.querySelector("span"),p=oa("div","tour-card tour-intro",`
		<span class="tour-line tour-kicker">A virtual gallery</span>
		<span class="tour-rule"></span>
		<h1 class="tour-line tour-title">${ii(a1.name)}</h1>
		<span class="tour-line tour-sub tour-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</span>`);l1(p,.4,.35);let m=a1.text.split(/\n\s*\n/).map(X=>`<p class="tour-line">${ii(X.trim())}</p>`).join(""),g=oa("div","tour-card tour-about",`
		<span class="tour-line tour-kicker">The artist</span>
		<h2 class="tour-line tour-title">${ii(a1.title)}</h2>
		<span class="tour-rule"></span>
		${Zd.line("tour-line tour-contact")}
		${m}`);l1(g,.25,.28);let y=oa("div","tour-card tour-sky",`
		<span class="tour-line tour-sub">Every painting here waits for the light.</span>`);l1(y,.6,.3);let b=oa("div","tour-card tour-master","");function w(X){let xe=oa("div","tour-card tour-story",`
			<span class="tour-line tour-kicker"></span>
			<h2 class="tour-title tour-letters"></h2>
			<span class="tour-rule"></span>
			<span class="tour-line visit-row"></span>
			<div class="tour-body"></div>`),ot=xe.querySelector(".tour-title"),ut=xe.querySelector(".tour-body");return xe.filled=!1,xe.body=ut,xe.fill=()=>{let mt=X();if(!mt||xe.filled)return;xe.filled=!0;let hn=mt.title||"";xe.querySelector(".tour-kicker").textContent=_E(mt)||"Oil on canvas";let fr=xe.querySelector(".visit-row");fr.innerHTML=Jd.button(mt),fr.hidden=!fr.innerHTML;let Nr=fr.querySelector(".visit-btn");Nr&&(Nr.addEventListener("click",xo=>{xo.stopPropagation(),Jd.open(mt)}),xe.warm=()=>Jd.warm(mt));let un=0;ot.innerHTML=hn.split(" ").map(xo=>'<span class="tour-word">'+xo.split("").map(tr=>`<span style="transition-delay:${(.35+un++*.045).toFixed(3)}s">${ii(tr)}</span>`).join("")+"</span>").join(" "),ot.setAttribute("aria-label",hn);let Sr=.35+hn.length*.045+.2;xe.querySelector(".tour-rule").style.transitionDelay=Sr.toFixed(2)+"s";let dn=String(mt.description||"").split(/\n\s*\n/).filter(xo=>xo.trim());if(xe.querySelector(".tour-kicker").style.transitionDelay="0.1s",a&&dn.length){ut.innerHTML=dn.map(An=>`<p class="hand-text">${ii(An.trim())}</p>`).join("")+'<div class="hand-wrap"><canvas class="hand" aria-hidden="true"></canvas></div>';let xo=ut.querySelector("canvas"),tr=dn.map(An=>An.trim()).join(`

`),Zo=!1,jn=!1,Wr=0;ut.addEventListener("wheel",()=>{Zo=!0},{passive:!0}),ut.addEventListener("touchmove",()=>{Zo=!0},{passive:!0});let Vr=parseFloat(getComputedStyle(ut).fontSize)||17,Ko=r(xo,a,{ink:"rgba(244,236,223,0.93)",shadow:"rgba(0,0,0,0.55)",shadowBlur:7,xh:Math.max(8.5,Vr*.56),width:.14,speed:80,pace:.12,minDur:.022,maxTime:An=>3.5+An.length/420,seed:3+hn.length,onPen:An=>{if(Zo)return;let Fa=An-ut.clientHeight*.55;Fa>ut.scrollTop+4&&(ut.scrollTop+=Math.min(16,Fa-ut.scrollTop))}});xo.addEventListener("click",An=>{An.stopPropagation(),clearTimeout(Wr),jn?Ko.finish():(jn=!0,Ko.write(tr,!0))}),xe.write=()=>{if(clearTimeout(Wr),Zo=!1,jn){Ko.write(tr,!0);return}Ko.write("",!0),Wr=setTimeout(()=>{jn=!0,Ko.write(tr)},Sr*.6*1e3)},xe.stopWrite=()=>{clearTimeout(Wr),Ko.stop()};let ya=0;window.addEventListener("resize",()=>{clearTimeout(ya),ya=setTimeout(()=>{jn&&xe.classList.contains("on")&&Ko.write(tr,!0)},250)})}else ut.innerHTML=dn.map(xo=>`<p class="tour-line">${ii(xo.trim())}</p>`).join(""),ut.querySelectorAll(".tour-line").forEach((xo,tr)=>{xo.style.transitionDelay=(Sr+.3+Math.min(tr,6)*.35).toFixed(2)+"s"})},xe}let M=()=>t.paintings?t.paintings():[],k=X=>M().find(xe=>xe.side==="corridor"&&Math.abs(xe.paintingPosition[0]-X)<.5),z=w(()=>M().find(X=>X.side==="end")),P=()=>oa("div","tour-card",""),R=w(()=>k(ci[0])),U=w(()=>k(li[0])),D=w(()=>k(fi[0])),Y=Mr.map(X=>w(()=>M().find(xe=>xe.side===X.side&&Math.abs(xe.paintingPosition[2]-X.z)<.5))),I=oa("div","tour-card tour-endcard",`
		<span class="tour-line tour-kicker">Thank you for walking with me</span>
		<span class="tour-rule"></span>
		<span class="tour-line tour-sub">${s1?"The rest of the gallery is yours to wander.":"Swipe back to return to any painting."}</span>
		<span class="tour-line tour-sub tour-confess-line">Before you leave, the confessional is open.<br>Leave me a note; no one else will read it.</span>
		<div class="tour-line tour-end"><button type="button" class="tour-btn" data-act="confess">Leave something behind</button></div>
		${Zd.line("tour-line tour-contact")}
		<div class="tour-line tour-end">
			${s1?'<button type="button" class="tour-btn" data-act="free">Walk the gallery</button>':""}
			<button type="button" class="tour-btn quiet" data-act="list">All paintings</button>
			<button type="button" class="tour-btn quiet" data-act="replay">Replay</button>
		</div>`);l1(I,.5,.35);let j=[p,g,y,b,z,P(),P(),P(),R,U,D,P(),...Y,I];i.append(...j,c,l,h,v),document.body.appendChild(i);let ue=R5()({root:i,avatar:t.avatar,glyphs:()=>a,onExit:()=>{Se=-1,_t&&(Mt={start:_},_t=!1)}});document.body.classList.add("touring");let Ge=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,Te=Ge?"Scroll":"Swipe",ye=ms.map((X,xe)=>xe===0?Ge?"Scroll to begin":"Swipe up to begin":xe===1?Te+" to follow the leaf":xe===2?Te+" to follow the light":xe===3?Te+" for its story":xe===6||xe===7||xe===ms.length-1?"":Te+" on"),le=[0];op.forEach(X=>le.push(le[le.length-1]+X.dur));let Ve=le[le.length-1],zt=210,St=95,Vt=.35,Tt=1.4,no=.32,bo=1,Yo=1.3,tt=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,Et=2.2,$t=.7,ro=.9,wo=!0,ie=0,ce=0,G=0,Re=-10,Qe=!1,Se=-1,he=0,kt=0,_=0,wt=null,xt=Object.assign({},c1(0)),Dt=ms[0].cam(0),Yt={phase:"home",pos:Ac.slice(),tumble:0},So=0,Bo=X=>{let xe=0;for(let ot=1;ot<le.length;ot++)Math.abs(le[ot]-X)<Math.abs(le[xe]-X)&&(xe=ot);return xe};function Lo(X){let xe=j[X];xe&&xe.fill&&(xe.fill(),xe.body.scrollTop=0,xe.offsetWidth),j.forEach((ot,ut)=>{let mt=ot.classList.contains("on");ot.classList.toggle("on",ut===X),ut===X&&!mt&&ot.write&&ot.write(),ut!==X&&mt&&ot.stopWrite&&ot.stopWrite()}),xe&&xe.warm&&xe.warm(),u.textContent=ye[X]||"",v.classList.toggle("on",!!ye[X])}function fo(){j.forEach(X=>{X.stopWrite&&X.classList.contains("on")&&X.stopWrite(),X.classList.remove("on")}),v.classList.remove("on")}let jo=null,an=-1;function V(X){if(ue.active||!wo||wt)return;let xe=_-Re>Vt;if(Re=_,xe||!jo){let ot=0,ut=Ve;for(let mt=0;mt<le.length;mt++)if(le[mt]<=ie-.02&&(ot=le[mt]),le[mt]>=ie+.02){ut=le[mt];break}jo={lo:ot,hi:ut}}_<an||(Qe=!1,G=Math.max(jo.lo,Math.min(jo.hi,G+X)),G=Math.max(ie-Et,Math.min(ie+Et,G)))}function Ee(X){if(ue.active||!wo||wt)return;let xe=Qe?G:ie,ot;if(X>0)ot=le.findIndex(ut=>ut>xe+.05);else{ot=-1;for(let ut=le.length-1;ut>=0;ut--)if(le[ut]<xe-.05){ot=ut;break}}ot<0||(G=le[ot],Qe=!0,Re=_)}let ze=null,de=X=>X.stopPropagation();["touchstart","touchmove","touchend","mousedown","mouseup","click","contextmenu"].forEach(X=>i.addEventListener(X,de)),i.addEventListener("pointerdown",X=>{if(X.stopPropagation(),!(X.target.closest("button, a")||X.target.closest(".tour-body"))){ze={x:X.clientX,y:X.clientY,lx:X.clientX,ly:X.clientY,t:performance.now(),moved:0,v:0,lt:performance.now()};try{i.setPointerCapture(X.pointerId)}catch(xe){}}}),i.addEventListener("pointermove",X=>{if(!ze)return;let xe=X.clientX-ze.lx,ot=X.clientY-ze.ly;ze.lx=X.clientX,ze.ly=X.clientY;let ut=Math.abs(ot)>=Math.abs(xe)?-ot:-xe;ze.moved+=Math.abs(ut);let mt=performance.now(),hn=ut/St;ze.v=ze.v*.6+hn/Math.max(.008,(mt-ze.lt)/1e3)*.4,ze.lt=mt,ze.moved>6&&V(hn)});let qe=X=>{let xe=ze;if(ze=null,!!xe){if(ue.active){xe.moved<10&&performance.now()-xe.t<500?ue.tap():xe.y-(X?X.clientY:xe.ly)>30&&ue.swipe(1);return}xe.moved<10&&performance.now()-xe.t<500?Ee(1):performance.now()-xe.lt<120&&V(Math.max(-1.6,Math.min(1.6,xe.v*.22)))}};i.addEventListener("pointerup",X=>{X.stopPropagation(),qe(X)}),i.addEventListener("pointercancel",()=>{ze=null}),i.addEventListener("wheel",X=>{if(ue.active){if(X.target.closest(".conf-ui"))return;X.preventDefault(),ue.wheel(X.deltaY);return}if(X.target.closest(".tour-body")){let ot=X.target.closest(".tour-body"),ut=ot.scrollTop+ot.clientHeight>=ot.scrollHeight-2&&X.deltaY>0,mt=ot.scrollTop<=0&&X.deltaY<0;if(!ut&&!mt)return}X.preventDefault();let xe=X.deltaMode===1?X.deltaY*16:X.deltaMode===2?X.deltaY*window.innerHeight:X.deltaY;V(xe/zt)},{passive:!1}),window.addEventListener("keydown",X=>{if(!wo||wt||document.body.classList.contains("visiting"))return;if(ue.active){if(X.stopImmediatePropagation(),X.target&&/TEXTAREA|INPUT|BUTTON/.test(X.target.tagName))return;ue.key(X.key)&&X.preventDefault();return}let xe=X.key;if(["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(xe)>=0){if((xe==="Enter"||xe===" ")&&X.target&&X.target.tagName==="BUTTON")return;X.preventDefault(),X.stopImmediatePropagation(),Ee(1)}else["ArrowUp","ArrowLeft","PageUp"].indexOf(xe)>=0?(X.preventDefault(),X.stopImmediatePropagation(),Ee(-1)):xe==="Escape"?(X.preventDefault(),Pt()):/^[wasdzq]$/i.test(xe)&&X.stopImmediatePropagation()},!0),window.addEventListener("keyup",X=>{wo&&!wt&&/^(Arrow|[wasdzq]$)/i.test(X.key)&&X.stopImmediatePropagation()},!0),f.addEventListener("click",X=>{X.stopPropagation(),Pt()}),["mousedown","pointerdown"].forEach(X=>d.addEventListener(X,xe=>xe.stopPropagation())),d.addEventListener("click",X=>{X.stopPropagation(),Ht()});let dt=io([8.6,1.75,44.3],[-3,1.85,44.5],55,0),pt=null,_t=!1;function Ht(){if(!wo||wt||ue.active||pt)return;fo(),Se=-2;let X=Dt.eye;if(X[0]>.5&&X[0]<13.5&&X[2]>36&&X[2]<50){_t=!1,ue.start(Dt,xt);return}pt={t:0}}I.addEventListener("click",X=>{let xe=X.target.closest("button");xe&&(X.stopPropagation(),xe.dataset.act==="free"&&Pt(),xe.dataset.act==="replay"&&to(),xe.dataset.act==="list"&&du().show(!1),xe.dataset.act==="confess"&&(fo(),Se=-2,ue.start(Dt,xt)))});let Lt=[null,[ma.zc-1.6,Math.PI/2],[11.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[42.5+Tc[0]-7,0],[42.5+Tc[1]-7,0],[42.5+Tc[2]-7,0],[1e3,Math.PI/2],...Mr.map(X=>[X.z-1.6,X.side==="left"?-Math.PI/2:Math.PI/2]),[gs[2]-1.6,Math.PI]],Jt=null,Ct=0;function Pt(){if(!wo||wt||!s1)return;let X=Bo(ie),xe=Lt[X];Jt=X<=1?{phase:"home",pos:Ac.slice()}:X>=3&&X<=6?{phase:"floor",pos:Ja.slice()}:X===11?{phase:"floor",pos:of.slice()}:X===18?{phase:"floor",pos:gs.slice()}:null,Ct=X>=12?1:0,xe&&n.place&&n.place(xe[0],xe[1]),wt={start:_,fromCam:Dt,fromLook:Object.assign({},xt)},fo(),i.hidden=!0,document.body.classList.remove("touring"),t.onExit&&t.onExit()}function to(){ie=G=0,ce=0,Qe=!1,Se=-1,he=0,kt=0,Yt={phase:"home",pos:Ac.slice(),tumble:0},Mt={start:_}}let Mt={start:-1},po=!1,Po=[],Nt={prev:null,vel:[0,0,0],axis:[1,0,0],dir:null,bank:0,rock:0,spin:0,fresh:!0};function Wo(X){So+=X*(Yt.phase==="floor"?0:1);let xe=Yt.tumble===void 0?0:Yt.tumble,ot=Sc.fromTranslation(Po,Yt.pos);if(Yt.phase==="home")ot=Sc.rotateY(ot,ot,2.2+Math.sin(So*.9)*.15),ot=Sc.rotateZ(ot,ot,-1+Math.sin(So*1.3)*.12),ot=Sc.rotateX(ot,ot,.4);else if(Yt.phase==="floor")ot=Sc.rotateY(ot,ot,.65),ot=Sc.rotateX(ot,ot,.16);else{let ut=Yt.pos;if(Nt.prev&&X>0){let Er=[ut[0]-Nt.prev[0],ut[1]-Nt.prev[1],ut[2]-Nt.prev[2]];if(Math.hypot(Er[0],Er[1],Er[2])<1.5){let Fc=Math.min(1,X*6);for(let ks=0;ks<3;ks++)Nt.vel[ks]+=(Er[ks]/X-Nt.vel[ks])*Fc}else Nt.vel=[0,0,0]}Nt.prev=ut.slice();let mt=Nt.vel,hn=Math.hypot(mt[0],mt[1],mt[2]),fr=Xe(.25,1.4,hn),Nr=Xe(.5,2,-mt[1]),un=So*.35*(.3+xe)+.65,Sr=[Math.cos(un),0,Math.sin(un)];hn>.001&&(Sr=Qo(Sr,Ur(mt,-1/hn),fr));let dn=Math.min(1,X*4);Nt.axis=Qo(Nt.axis,Sr,Nt.fresh?1:dn);let xo=Nt.axis,tr=Math.hypot(xo[0],xo[1],xo[2])||1;xo=Ur(xo,1/tr);let Zo=Dt.eye,jn=[Zo[0]-ut[0],Zo[1]-ut[1],Zo[2]-ut[2]],Wr=Math.hypot(jn[0],jn[1],jn[2])||1,Vr=Ze(.6,.22,fr),Ko=[jn[0]/Wr*Vr,1+jn[1]/Wr*Vr,jn[2]/Wr*Vr],ya=xo[0]*Ko[0]+xo[1]*Ko[1]+xo[2]*Ko[2];Ko=ep(Ko,Ur(xo,ya));let An=Math.hypot(Ko[0],Ko[1],Ko[2])||1;Ko=Ur(Ko,1/An);let Fa=[xo[1]*Ko[2]-xo[2]*Ko[1],xo[2]*Ko[0]-xo[0]*Ko[2],xo[0]*Ko[1]-xo[1]*Ko[0]],No=Math.hypot(mt[0],mt[2]),pn=0;if(No>.15&&Nt.dir&&X>0){let Er=[mt[0]/No,mt[2]/No];pn=(Nt.dir[0]*Er[1]-Nt.dir[1]*Er[0])/X,Nt.dir=Er}else No>.15&&(Nt.dir=[mt[0]/No,mt[2]/No]);Nt.bank+=(Math.max(-.8,Math.min(.8,pn*.3))*fr-Nt.bank)*Math.min(1,X*3),Nt.rock+=X*(1.5+2.4*fr),Nt.spin+=X*Nr*7*(.4+xe);let ba=Math.sin(Nt.rock)*(.26+.45*xe)*(1-.5*Nr)+Nt.bank+Nt.spin,_s=Math.sin(Nt.rock*.63+1)*(.16+.3*xe)+(Yt.swing||0)*.9,t0=Math.cos(ba),Ms=Math.sin(ba),ff=uo(Ur(Ko,t0),Ur(Fa,Ms)),C0=uo(Ur(Fa,t0),Ur(Ko,-Ms));t0=Math.cos(_s),Ms=Math.sin(_s);let vi=uo(Ur(xo,t0),Ur(ff,Ms)),Ic=uo(Ur(ff,t0),Ur(xo,-Ms)),v1=Math.sin(Nt.rock+1.5708)*.035*(.3+xe)*(1-.5*fr),v0=uo(ut,Ur(Fa,v1)),$c=[vi[0],vi[1],vi[2],0,Ic[0],Ic[1],Ic[2],0,C0[0],C0[1],C0[2],0,v0[0],v0[1],v0[2],1];for(let Er=0;Er<16;Er++)ot[Er]=$c[Er];Nt.fresh=!1}return Yt.phase!=="fly"&&(Nt.prev=null,Nt.vel=[0,0,0],Nt.fresh=!0,Nt.spin=0,Nt.bank=0,Nt.dir=null),{visible:!0,model:ot}}function xa(X){for(let xe in f1)xt[xe]=X[xe]!==void 0?X[xe]:f1[xe]}function p0(X,xe){if(X<=1)return{phase:"home",pos:Ac.slice(),tumble:0};let ot=I5[X];if(ot){let ut=ot.amp;return{phase:"fly",pos:uo(ot.pos(),[Math.sin(xe*.55)*ut[0],Math.sin(xe*.8)*ut[1],(1-Math.cos(xe*.45))*ut[2]]),tumble:ot.tumble}}return{phase:"floor",pos:(X>=18?gs:X>=10?of:Ja).slice(),tumble:0}}let co=0,_o=null;function Bn(X){let xe=Math.min(.1,Math.max(0,X-co));if(co=X,_=X,po||(po=!0,Mt.start=X),wt)return null;if(pt&&(pt.t+=xe,pt.t>=.7&&(pt=null,_t=!0,ue.start(dt,Object.assign({},f1,{fade:1,fadeColor:[0,0,0]})))),ue.active){let No=ue.update(xe);return Dt=No.camera,xa(No.look),o&&window.__camOverride&&(Dt=window.__camOverride),o&&window.__lookOverride&&Object.assign(xt,window.__lookOverride),{camera:Dt,walker:null,door:1,look:xt,leaf:Wo(xe)}}if(!Qe&&!ze&&_-Re>$t){let No=Bo(G);Math.abs(le[No]-G)<ro&&(G=le[No])}let ot=G-ie;if(Qe){let pn=Math.sign(ot)*Math.min(bo,Math.sqrt(2*Yo*Math.abs(ot)))-ce;ce+=Math.sign(pn)*Math.min(Math.abs(pn),Yo*xe),ie+=ce*xe,(ot>0&&ie>=G||ot<0&&ie<=G||Math.abs(G-ie)<1e-4)&&(ie=G,ce=0,Qe=!1)}else{let No=kE(ie,G,ce,no,xe,3);ie=No[0],ce=No[1],Math.abs(G-ie)<1e-4&&Math.abs(ce)<.001&&(ie=G,ce=0)}let ut=0;for(;ut<op.length-1&&ie>=le[ut+1];)ut++;let mt=op[ut],hn=na((ie-le[ut])/mt.dur),fr=ms[ut],Nr=ms[ut+1],un=Bo(ie);un!==he&&(he=un,kt=0);let Sr=Math.abs(ie-le[un])<.02;Sr&&(kt+=xe);let dn=1-Xe(0,1.2,Math.abs(ie-le[un])),xo=mt.leaf(hn);if(xo.pos?Yt=Object.assign({},xo):Yt=Object.assign({},xo,{pos:xo.phase==="home"?Ac.slice():(ut>=10?of:Ja).slice()}),I5[un]&&dn>0){let No=p0(un,kt);Yt.pos=Qo(Yt.pos,No.pos,dn)}let tr=mt.walker&&(hn>.01||ut===6)?mt.walker(hn):null;_o=tr==null?null:{x:tr,z:np,heading:Math.PI/2,phase:(tr-q5)/LE};let Zo=mt.cam(hn,fr.cam(0),Nr.cam(0),Yt);if(dn>0&&kt>0){let No=ms[un],pn=No.cam(0),ba=No.cam(kt);Zo=io(uo(Zo.eye,Ur(ep(ba.eye,pn.eye),dn)),uo(Zo.target,Ur(ep(ba.target,pn.target),dn)),Zo.fov+(ba.fov-pn.fov)*dn,Zo.roll+(ba.roll-pn.roll)*dn)}if(dn>0&&!tt){let No=_,pn=.006*dn,ba=Math.sin(No*.61)*.6+Math.sin(No*1.37+1.3)*.4,_s=Math.sin(No*.47+2.1)*.6+Math.sin(No*1.13+.4)*.4,t0=Math.sin(No*.53+4)*.5+Math.sin(No*.97+2.6)*.5;Zo=io(uo(Zo.eye,[ba*pn,_s*pn*.7,t0*pn]),uo(Zo.target,[_s*pn*1.8,ba*pn*1.4,0]),Zo.fov,Zo.roll+t0*.0012*dn)}Dt=Zo;let jn=c1(ut),Wr=c1(ut+1),Vr=Object.assign({},jn,mt.look(hn,jn,Wr,Yt,Zo.eye));if(dn>0){let No=c1(un);for(let pn in No)typeof No[pn]=="number"&&(Vr[pn]=Ze(Vr[pn],No[pn],dn))}xa(Vr);let ya=Sr&&Math.abs(G-ie)<.02?un:-1;ya!==Se&&(ya>=0&&(an=_+Tt),Se=ya,ya>=0?Lo(ya):fo()),h.querySelectorAll("i").forEach((No,pn)=>No.classList.toggle("on",pn===un));let An=Se>=0?j[Se]:null;An&&An.fill&&!An.filled&&(An.fill(),An.filled&&(An.classList.remove("on"),An.offsetWidth,An.classList.add("on")));let Fa=na((X-Mt.start)/2.6);return Fa<1&&(xt.fade=Math.max(xt.fade,1-Xe(0,1,Fa)),xt.fadeColor=[0,0,0]),o&&window.__camOverride&&(Dt=window.__camOverride),o&&window.__lookOverride&&Object.assign(xt,window.__lookOverride),{camera:Dt,walker:_o,door:mt.door?mt.door(hn):ut>=12?1:0,look:pt?Object.assign(xt,{fade:Math.max(xt.fade||0,na(pt.t/.6)),fadeColor:[0,0,0]}):xt,leaf:Wo(xe)}}return o&&(window.__tour={go:Ee,exit:Pt,wind:V,confess(){fo(),Se=-2,ue.start(Dt,xt)},note:()=>Ht(),conf:ue,paper:t1().STATE,seek(X,xe){ie=G=le[X]+(le[X+1]-le[X])*xe,ce=0,Qe=!1,Re=_+1e6,Mt.start=_-10,po=!0},jump(X){ie=G=le[X],ce=0,Qe=!1,kt=0,Re=_,Mt.start=_-10,po=!0},state:()=>({current:Bo(ie),scroll:+ie.toFixed(3),target:+G.toFixed(3),shown:Se,move:Math.abs(G-ie)>.02?{p:ie}:null,camNow:Dt,leaf:Yt,look:xt})}),{update:Bn,get active(){return wo&&!wt},handover(X){if(!wt)return null;let xe=na((X-wt.start)/1.8);return xe>=1?(wo=!1,null):{from:wt.fromCam,fromLook:wt.fromLook,k:En(xe)}},restingDoor:()=>Ct,restingLeaf(){return Jt?(Yt=Jt,Wo(0)):null},mix:hi,cam:io}}});var qE=bm(),e0=Ma(),wp=du(),p1=e0.reflection,DE=!1,rb=(e,t,o,n,r)=>n+(e-t)*(r-n)/(o-t),_p=()=>rb(window.innerWidth/window.innerHeight,16/9,9/16,1.7,Math.PI/3);navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)&&(_p=()=>rb(window.innerWidth/window.innerHeight,16/9,9/16,1.5,Math.PI/3));var ab=()=>2*Math.atan(Math.tan(_p()*.5)*window.innerHeight/window.innerWidth),GE=Om(),sf=new GE;sf.showPanel(0);DE&&document.body.appendChild(sf.dom);var wn,Pc,dp,Rc,pp,bn;function HE(){try{let e=document.createElement("canvas"),t=e.getContext("webgl")||e.getContext("experimental-webgl");return!!(t&&t.getExtension("OES_standard_derivatives"))}catch(e){return!1}}if(!HE())throw qE.finish(),wp.show(!0),new Error("This device cannot draw the 3D gallery; showing the list instead.");wn=Cm()({extensions:["OES_element_index_uint","OES_standard_derivatives"],optionalExtensions:["EXT_texture_filter_anisotropic","WEBGL_depth_texture"],attributes:{alpha:!1,antialias:!1},pixelRatio:e0.pixelRatio});location.hash==="#list"&&wp.show(!1);window.addEventListener("hashchange",()=>{location.hash==="#list"&&wp.show(!1)});Pc=b2()();var UE=Bu();dp=UE(wn,Pc,p1);Rc=Dg()(wn,Pc);pp=Bg()(wn);var H5=i3()(wn,Pc),U5=x3()(wn),B5=w3()(wn),j5=F3()(wn),W5=U3()(wn),V5=X3()(wn),bs=lx()(wn),vp=Md(),sb=Bf(),BE=sl(),mp=Sd(),gp=ar(),Un=Sh(),xp=yx(),ib=Uh(),{A:Nc}=Ea();bn=t5()(Pc,ab);var Oc=r5()(wn,e0),xs=l5()(wn),X5=h5()(wn),jE=p5()(wn,e0),WE=b5()(wn,e0),Y5=j0()(wn),K5=t1()(wn),Q5=X0()(wn),Z5=J0()(wn),d0=G5()({fps:bn,paintings:()=>Rc.interactables(),avatar:bs,onExit:()=>bn.setPaused(!1)});bn.setPaused(!0);/tourdebug/.test(location.search)&&(window.__post=Oc);var ys=[],Cc=[],kr=[7,2,1.6];Pc.viewer=kr;var VE=wn({cull:{enable:!0,face:"back"},uniforms:{view:()=>ys,proj:()=>Cc,yScale:1,mirrorOn:()=>p1?1:0,night:()=>gp.night,time:wn.context("time")}}),XE=wn({cull:{enable:!0,face:"front"},uniforms:{yScale:-1}}),cb=document.createElement("style");cb.textContent=`

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
`;document.head.appendChild(cb);var $a=document.createElement("button");$a.className="painting-plaque";$a.type="button";$a.setAttribute("aria-label","Read painting");document.body.appendChild($a);var jr=document.createElement("div");jr.className="story-overlay";jr.innerHTML=`

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

		${sb.line("story-contact")}

		<div class="visit-row story-visit"></div>

		<p
			class="story-body"
			id="story-body"
		></p>

	</article>
`;document.body.appendChild(jr);var ws=document.createElement("div");ws.className="museum-links";ws.innerHTML=sb.icons("museum-link");ws.insertBefore(Xd()("museum-link"),ws.firstChild);ws.insertBefore(ib.button("museum-link"),ws.firstChild.nextSibling);["mousedown","pointerdown","click"].forEach(e=>ws.addEventListener(e,t=>t.stopPropagation()));document.body.appendChild(ws);var YE=jr.querySelector("#story-title"),KE=jr.querySelector("#story-body"),J5=jr.querySelector("#story-meta"),QE=jr.querySelector(".story-contact"),af=jr.querySelector(".story-visit");af.addEventListener("click",e=>{e.target.closest(".visit-btn")&&pi&&mp.open(pi)});var ZE=jr.querySelector(".story-close"),pi=null,ra={p:0,target:0,last:0},lb={title:vp.title,description:vp.text,isAbout:!0},O0=null;function Mp(e){e&&(pi=e,YE.textContent=e.title||"",KE.textContent=e.description||"",J5.textContent=e.isAbout?"":BE(e),J5.hidden=!!e.isAbout,QE.hidden=!e.isAbout,af.innerHTML=e.isAbout?"":mp.button(e),af.hidden=!af.innerHTML,af.hidden||mp.warm(e),jr.classList.toggle("about-mode",!!e.isAbout),jr.classList.add("open"),ra.target=e.isAbout?1:0,O0=e,$a.classList.remove("visible"),bn.setPaused(!0))}function kp(){jr.classList.remove("open"),ra.target=0,pi=null,O0=null,bn.setPaused(!1)}function fb(e){e&&(e.preventDefault(),e.stopPropagation()),O0&&Mp(O0)}$a.addEventListener("pointerup",fb,!0);$a.addEventListener("touchend",fb,{passive:!1,capture:!0});$a.addEventListener("click",e=>{e&&(e.preventDefault(),e.stopPropagation()),pi===null&&O0&&Mp(O0)},!0);ZE.addEventListener("click",kp);jr.addEventListener("click",e=>{e.target===jr&&kp()});window.addEventListener("keydown",e=>{e.code==="Escape"&&jr.classList.contains("open")&&kp()});function eb(e,t){let o=t[0],n=t[1],r=t[2];return[e[0]*o+e[4]*n+e[8]*r+e[12],e[1]*o+e[5]*n+e[9]*r+e[13],e[2]*o+e[6]*n+e[10]*r+e[14],e[3]*o+e[7]*n+e[11]*r+e[15]]}function JE(){if(pi)return;if(d0.active){O0=null,$a.classList.remove("visible");return}let e=Rc.interactables(),t=bn.forward[0],o=bn.forward[2],n=Math.hypot(t,o)||1,r=null,a=1/0;for(let s of e){let i=s.paintingPosition,c=0,f=0;s.side==="left"?c=1:s.side==="right"?c=-1:s.side==="corridor"?f=1:f=-1;let l=i[0]-bn.pos[0],d=i[2]-bn.pos[2],h=-(l*c+d*f),v=Math.abs(l*f-d*c),u=-(t*c+o*f)/n,p=s.side==="end"?11:8,m=(s.width||2)/2;u>.9&&h>.5&&h<p&&v<m+.8&&h<a&&(r=s,a=h)}if(!r){let s=bn.pos[0],i=bn.pos[2];t/n>.85&&s<13.6&&i>Nc.z0-.5&&i<Nc.z1+.5&&(r=Object.assign({},lb,{plaqueTitle:vp.name}))}r?(O0=r,$a.textContent=r.isAbout?"ABOUT  \xB7  "+r.plaqueTitle:"READ  \xB7  "+r.title,$a.classList.add("visible")):(O0=null,$a.classList.remove("visible"))}var lf=ec();function eA(){let e=bs.state;if(!e||!e.glowPos)return null;let t=eb(bn.view(),[e.glowPos[0],e.glowPos[1]-.08,e.glowPos[2],1]),o=eb(bn.proj(),t);return o[3]<=.05?null:[(o[0]/o[3]*.5+.5)*window.innerWidth,(.5-o[1]/o[3]*.5)*window.innerHeight,o[3]]}var yp=null;window.addEventListener("pointerdown",e=>{yp={x:e.clientX,y:e.clientY,t:performance.now()}},!0);window.addEventListener("pointerup",e=>{let t=yp;if(yp=null,!t||pi||d0.active||!e.target||!/^(CANVAS|BODY)$/.test(e.target.tagName)||Math.hypot(e.clientX-t.x,e.clientY-t.y)>12||performance.now()-t.t>600)return;let o=eA();if(!o)return;let n=!!document.pointerLockElement,r=n?window.innerWidth/2:e.clientX,a=n?window.innerHeight/2:e.clientY,s=Math.max(e.pointerType==="touch"?60:40,260/o[2]);Math.hypot(r-o[0],a-o[1])<s&&(e.preventDefault(),e.stopPropagation(),Mp(lb))},!0);function tA(e){let t=Math.min(Math.max(e-ra.last,0),.1);ra.last=e;let o=t/1.6;if(ra.p=ra.target>ra.p?Math.min(1,ra.p+o):Math.max(0,ra.p-o),ra.p<=0)return;let n=ra.p<.5?2*ra.p*ra.p:1-Math.pow(-2*ra.p+2,2)/2,r=window.innerHeight>window.innerWidth,a=bs.state,s=a&&a.hipsPos?a.hipsPos[0]:Nc.cx-1.2,i=a&&a.hipsPos?a.hipsPos[2]:Nc.zc,c=r?[s-2.3,2,i-.1]:[s-1.55,1.55,i+.3],f=r?[s+.1,.2,i-.1]:[s+.1,.7,i+.6],l=bn.pos,d=bn.forward,h=[l[0],l[1],l[2]],v=[l[0]+d[0],l[1]+d[1],l[2]+d[2]],u=(y,b)=>y.map((w,M)=>w+(b[M]-w)*n),p=[Nc.cx-6.2,1.7,Nc.zc],m=1-n,g=h.map((y,b)=>m*m*y+2*m*n*p[b]+n*n*c[b]);lf.lookAt(bn.view(),g,u(v,f),[0,1,0])}var Sp=/[?&]studio\b/.test(location.search);if(Sp){let e=document.createElement("style");e.textContent=".tour, #museum-mobile-controls, .painting-plaque { display: none !important; }",document.head.appendChild(e),window.addEventListener("pointerdown",t=>{bp.takes(t)||ar().toggle()}),window.addEventListener("keydown",t=>{(t.key==="n"||t.key===" ")&&ar().toggle()})}var bp=(()=>{let e={mode:"idle",fedTill:0,offset:0,holdAt:null,now:0,lastShot:-1,doneShot:-1,since:0,hintUntil:0},t=null,o=null,n=null,r=(c,f)=>{n&&(n.textContent=c,n.classList.add("on"),e.hintUntil=f?e.now+f:0)},a=()=>{let c=document.createElement("style");c.textContent=`
.koi-feed { position: fixed; left: 0; right: 0; bottom: 7vh; display: flex; flex-direction: column; align-items: center; gap: 0.6em; z-index: 20; pointer-events: none; font-family: 'Cormorant Garamond', Georgia, serif; }
.koi-feed-btn { pointer-events: none; opacity: 0; transform: translateY(6px); transition: opacity 1.2s ease, transform 1.2s ease; background: rgba(12, 10, 8, 0.28); border: 1px solid rgba(244, 236, 223, 0.38); border-radius: 999px; color: #f4ecdf; font: italic 400 clamp(17px, 2.3vw, 24px)/1 'Cormorant Garamond', Georgia, serif; letter-spacing: 0.06em; padding: 0.7em 1.5em 0.75em; cursor: pointer; text-shadow: 0 1px 8px rgba(0, 0, 0, 0.55); backdrop-filter: blur(3px); -webkit-backdrop-filter: blur(3px); }
.koi-feed-btn.on { opacity: 1; transform: none; pointer-events: auto; }
.koi-feed-btn:hover { background: rgba(12, 10, 8, 0.42); border-color: rgba(244, 236, 223, 0.7); }
.koi-feed-btn .orn { display: inline-block; margin: 0 0.55em; font-style: normal; opacity: 0.75; transform: translateY(-0.05em); }
.koi-feed-hint { opacity: 0; transition: opacity 1.4s ease; color: #f4ecdf; font: italic 400 clamp(16px, 2vw, 21px)/1.3 'Cormorant Garamond', Georgia, serif; letter-spacing: 0.05em; text-shadow: 0 1px 10px rgba(0, 0, 0, 0.7); text-align: center; padding: 0 1em; }
.koi-feed-hint.on { opacity: 0.95; }
.koi-aim, .koi-aim canvas { cursor: crosshair !important; }
`,document.head.appendChild(c),t=document.createElement("div"),t.className="koi-feed",t.innerHTML='<button type="button" class="koi-feed-btn"><span class="orn">\u2766</span>Cast a crumb upon the water<span class="orn">\u2766</span></button><div class="koi-feed-hint"></div>',document.body.appendChild(t),o=t.querySelector(".koi-feed-btn"),n=t.querySelector(".koi-feed-hint"),o.addEventListener("pointerdown",f=>{f.stopPropagation(),e.mode==="idle"&&(e.mode="aim",e.holdAt=e.now-e.offset,e.since=e.now,o.classList.remove("on"),document.body.classList.add("koi-aim"),r("Touch the water where it should fall"))})},s=(c,f)=>{let l=lf.multiply([],Cc,ys),d=lf.invert([],l);if(!d)return null;let h=c/window.innerWidth*2-1,v=1-f/window.innerHeight*2,u=[0,0,0,0];for(let p=0;p<4;p++)u[p]=d[p]*h+d[4+p]*v+d[8+p]*1+d[12+p];return[u[0]/u[3]-kr[0],u[1]/u[3]-kr[1],u[2]/u[3]-kr[2]]},i=()=>{e.holdAt!==null&&(e.offset=e.now-e.holdAt),e.holdAt=null,e.mode="idle",e.doneShot=e.lastShot,document.body.classList.remove("koi-aim"),n&&n.classList.remove("on")};return{time(c){return e.now=c,e.holdAt!==null?e.holdAt:c-e.offset},update(c){t||a(),c.shot!==e.lastShot&&(e.lastShot=c.shot);let f=J0();e.mode==="idle"?o.classList.toggle("on",!!c.pond&&e.doneShot!==c.shot):e.mode==="aim"?e.now-e.since>40&&i():e.mode==="watch"&&(f.feeding()&&(e.fedTill=e.now),(e.now-e.fedTill>5&&e.now-e.since>8||e.now-e.since>60)&&i()),e.hintUntil&&e.now>e.hintUntil&&(n.classList.remove("on"),e.hintUntil=0)},takes(c){if(e.mode==="idle")return!1;let f=J0(),l=s(c.clientX,c.clientY),d=l&&f.poolHit(kr,l);return d?(f.feedAt(d[0],d[1]),e.fedTill=e.now,e.mode==="aim"&&r("and they come, like embers through the dark",5),e.mode="watch",e.since=e.now,document.body.classList.remove("koi-aim"),!0):(e.mode==="aim"&&r("Upon the water, there\u2026"),!0)}}})(),ui={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},di=null,cf=!1,u1=!1;function oA(e,t,o,n){let r=[o[0]-t[0],o[1]-t[1],o[2]-t[2]],a=Math.hypot(r[0],r[1],r[2])||1,s=[-r[2]/a,0,r[0]/a],i=Math.hypot(s[0],s[2])||1;s=[s[0]/i,0,s[2]/i];let c=Math.cos(n),f=Math.sin(n);return lf.lookAt(e,t,o,[s[0]*f,c,s[2]*f])}function nA(e){let t=window.innerWidth/window.innerHeight,o=Oc.shot,n=d0.active?d0.update(e):null,r=n?null:d0.handover(e),a=null,s=ui;if(n){a=n.camera,s=n.look,di=n.leaf;let i=window.__walkOverride&&/tourdebug/.test(location.search)?window.__walkOverride:n.walker||null;bs.setWalk(i),cf=!!i,xs.setOpen(n.door||0)}else di=d0.restingLeaf(),bs.setWalk(null),cf=!1,xs.setOpen(d0.restingDoor());if(r){let i=bn.pos,c=bn.forward,f=d0.cam([i[0],i[1],i[2]],[i[0]+c[0],i[1]+c[1],i[2]+c[2]],ab()*180/Math.PI,0);a=d0.mix(r.from,f,r.k),s={};for(let l in ui)s[l]=Array.isArray(ui[l])?ui[l]:r.fromLook[l]+(ui[l]-r.fromLook[l])*r.k}if(a&&n&&(a=xp.apply(a,e)),Sp&&!(/tourdebug/.test(location.search)&&window.__camOverride)){let i=J0().previewCam(bp.time(e));bp.update(i),a=i,s=Object.assign({},ui,{fade:i.fade,focus:8})}if(a)oA(ys,a.eye,a.target,a.roll||0),lf.perspective(Cc,a.fov*Math.PI/180,t,.1,700),kr[0]=a.eye[0],kr[1]=a.eye[1],kr[2]=a.eye[2];else{let i=bn.view(),c=bn.proj();for(let h=0;h<16;h++)ys[h]=i[h],Cc[h]=c[h];let f=i[12],l=i[13],d=i[14];kr[0]=-(i[0]*f+i[1]*l+i[2]*d),kr[1]=-(i[4]*f+i[5]*l+i[6]*d),kr[2]=-(i[8]*f+i[9]*l+i[10]*d)}for(let i in ui)o[i]=s[i];n&&xp.pull(o,e)}var ga={wake:[[0,-50,0,0],[0,-50,0,0],[0,-50,0,0],[0,-50,0,0]],wakeDir:[0,0,1],gust:[0,0],focus:6,aperture:0},fp=[9,9,9,9],tb=[0,0,0,0],nf=0,hp=0,Lc=null,ob=0,nb=0,rf=0;function rA(e){let t=Math.min(.1,Math.max(0,e-ob));ob=e,ga.focus=Oc.shot.focus,ga.aperture=e0.post>=2?Oc.shot.aperture:0;for(let s=0;s<4;s++)fp[s]+=t,ga.wake[s][3]=tb[s]*Math.exp(-fp[s]/1.1);let o=di&&di.visible?di.model:null;if(o&&t>0){let s=[o[12],o[13],o[14]];if(Lc){let i=[s[0]-Lc[0],s[1]-Lc[1],s[2]-Lc[2]],c=Math.hypot(i[0],i[1],i[2]),f=c/t;if(c<1.5&&f>.12){let l=Math.min(1,t*8);for(let h=0;h<3;h++)ga.wakeDir[h]+=(i[h]/c-ga.wakeDir[h])*l;let d=Math.hypot(ga.wakeDir[0],ga.wakeDir[1],ga.wakeDir[2])||1;for(let h=0;h<3;h++)ga.wakeDir[h]/=d;if(hp+=t,hp>.14){hp=0;let h=ga.wake[nf];h[0]=s[0],h[1]=s[1],h[2]=s[2],tb[nf]=Math.min(1,(f-.12)/1.6)*.5,fp[nf]=0,nf=(nf+1)%4}}}Lc=s}else o||(Lc=null);let n=xs.openNow?xs.openNow():0,r=t>0?(n-nb)/t:0;nb=n;let a=Math.max(-1,Math.min(1,r*1.2));rf+=(a-rf)*Math.min(1,t*(Math.abs(a)>Math.abs(rf)?6:.7)),ga.gust[0]+=rf*5.5*t,ga.gust[1]=Math.abs(rf)}var up=0,d1=!1;wn.frame(function({time:e}){if(document.body.classList.contains("visiting")){up=0;return}sf.begin(),gp.tick(e);let t=d0.active&&xp.resting&&gp.settled&&(e0.isPhone||e0.scale<1||e0.level>0);if(t){if(d1=!d1,d1){sf.end();return}}else d1=!1;let o=e-up;up=e,e0.frame(t?o/2:o),p1=e0.reflection,bn.tick({time:e}),tA(e),Rc.update(bn.pos,bn.fmouse[1],_p()),JE(),nA(e),Un.update(ys,Cc,kr),ib.listen(kr),(Un.zone==="studio"||Sp)&&J0().listen(kr),u1=!cf&&Un.room("stair")&&(!Un.room("court")||kr[0]<.5||kr[2]>30),bs.setPiano(u1),rA(e),Oc.capture(arguments[0],{view:ys,proj:Cc,eye:kr},()=>{VE(()=>{p1&&Un.floor&&XE(()=>{Un.room("studio",!0)&&Z5({reflected:!0}),Un.zone!=="studio"&&(dp(),H5({reflected:!0}),Y5(),Un.room("stair",!0)&&(Q5({reflected:!0}),K5({reflected:!0,view:ys})),Un.room("court",!0)&&V5(),(u1||Un.room("court",!0)||cf)&&bs(),pp(Rc.batch()),Un.room("street",!0)&&U5(),Un.room("garden",!0)&&j5(),Un.room("florence",!0)&&W5(),X5(di),xs(),B5(),xs.glass())}),Un.room("studio")&&Z5(),Un.zone!=="studio"&&(dp(),H5(),Y5(),Un.room("stair")&&(Q5(),K5({view:ys})),Un.room("court")&&V5(),(u1||Un.room("court")||cf)&&bs(),pp(Rc.batch()),Un.room("street")&&U5(),Un.room("garden")&&(j5(),WE()),Un.room("florence")&&W5(),X5(di),xs(),jE(ga),B5(),xs.glass())})}),Oc.present(),sf.end()});})();
