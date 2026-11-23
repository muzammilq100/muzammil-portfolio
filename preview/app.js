"use strict";(()=>{var Tt=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var mm=Tt((CE,vm)=>{"use strict";var ic=document.getElementById("loader"),sc=ic&&ic.querySelector(".loader-name"),El=0,ph=0,vh=!1,$6=performance.now(),cc=.06,ac=0,ju=0,fm=!1,P6=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;function I6(t){if(!sc)return;let e=sc.offsetWidth||1,r=(e*(1.14-1.28*t)-e).toFixed(1)+"px 0";sc.style.webkitMaskPosition=r,sc.style.maskPosition=r}function dm(t){let e=Math.min(.05,ju?(t-ju)/1e3:.016);ju=t;let o=vh?.75:.22+(cc-ac)*1.2;if(ac=Math.min(cc,ac+Math.max(0,o)*e),P6&&(ac=cc),I6(ac),vh&&ac>=.999){fm||(fm=!0,setTimeout(pm,650));return}requestAnimationFrame(dm)}sc&&requestAnimationFrame(dm);function hm(){let t=El?ph/Math.max(El,24):0;cc=Math.max(cc,Math.min(.9,.06+t*.84))}function pm(){ic&&(ic.classList.add("done"),setTimeout(()=>ic.remove(),1400))}function Wu(){vh||(vh=!0,window.__galleryReady=!0,ic&&(cc=1,sc||pm()))}var um=null;function q6(){clearTimeout(um),ph>=El&&performance.now()-$6>600&&(um=setTimeout(()=>{ph>=El&&Wu()},450))}setTimeout(Wu,2e4);var D6=t=>/(^|\/)(res|images)\//.test(t),dh=window.fetch.bind(window);async function F6(t,e){let o=await dh(t+".gz",e);if(!o.ok)throw new Error("no .gz");let r=new Uint8Array(await o.arrayBuffer());if(!(r[0]===31&&r[1]===139))return new Response(r);let n=new Blob([r]).stream().pipeThrough(new DecompressionStream("gzip")),a=await new Response(n).arrayBuffer();return new Response(a,{status:200,headers:{"Content-Type":"application/octet-stream"}})}window.fetch=function(t,e){let o=typeof t=="string"?t:t&&t.url||"";if(!D6(o))return dh(t,e);El++,hm();let r=a=>(ph++,hm(),q6(),a),n;return/\.bin$/.test(o)&&typeof DecompressionStream!="undefined"?n=F6(o,e).catch(()=>dh(t,e)):n=dh(t,e),n.then(r,a=>{throw r(),a})};vm.exports={finish:Wu}});var qr=Tt(($E,ym)=>{"use strict";var gm=typeof navigator!="undefined"&&navigator.userAgent||"",G6=typeof window!="undefined"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches&&!window.matchMedia("(any-pointer: fine)").matches,wa=/Android|iPhone|iPad|iPod|Mobile|Silk|Kindle|webOS|BlackBerry|Opera Mini|IEMobile/i.test(gm)||/Macintosh/.test(gm)&&typeof navigator!="undefined"&&navigator.maxTouchPoints>1||G6,mh=typeof window!="undefined"&&window.devicePixelRatio||1,H6=typeof location!="undefined"&&/[?&]studio\b/.test(location.search),jo={isPhone:wa,pixelRatio:H6?wa?Math.min(mh,1.25):Math.min(mh,1.5):wa?Math.min(mh,1.5):Math.min(mh,2),reflection:!wa,gardenDetail:wa?0:1,leafShare:wa?.65:1,motion:!wa,post:wa?1:2,level:wa?1:0};jo.scale=1;var U6=wa?.55:.6,Al=0,gh=0,Tl=0,Ll=0,lc=1,Nl=0,xh=48,fc=null,Vu=0;function B6(t){fc={fps:t,scale:jo.scale},jo.scale>.86?jo.scale=.85:jo.reflection?jo.stepDown():jo.scale>.71?jo.scale=.7:jo.stepDown()||(jo.scale=Math.max(U6,jo.scale-.1))}var xm=!0;try{/[?&]noadapt\b/.test(location.search)&&(xm=!1)}catch(t){}jo.frame=t=>{if(!xm)return;if(!(t>0)||t>1){Al=0,gh=0;return}if(Al+=t,gh++,Al<.75)return;let e=gh/Al;if(Al=0,gh=0,Nl>0&&(Nl-=.75,Nl<=0&&(lc=1)),fc){if(e<fc.fps*1.08&&fc.scale>jo.scale){if(++Vu>=2){jo.scale=1,lc=1,Nl=0,xh=Math.min(xh,e*.85),Vu=0,Tl=0,fc=null;return}}else Vu=0;fc=null}if(e<xh){if(Ll=0,++Tl>=2){if(Tl=0,jo.scale>.61&&jo.climbed){lc=jo.scale-.05,Nl=40,jo.scale=lc,jo.climbed=!1;return}B6(e)}}else e>Math.max(xh*1.15,55)?(Tl=0,++Ll>=6&&jo.scale<lc-.001?(jo.scale=Math.min(lc,jo.scale+.05),jo.climbed=!0,Ll=0):Ll>=6&&(jo.climbed=!1)):(Tl=0,Ll=0)};jo.stepDown=()=>{if(jo.reflection)jo.reflection=!1;else if(jo.gardenDetail>0||jo.motion)jo.gardenDetail=0,jo.motion=!1,jo.leafShare=Math.min(jo.leafShare,.65);else if(jo.post>0)jo.post--;else return!1;return jo.level++,!0};ym.exports=jo});var Xu=Tt((PE,bm)=>{"use strict";bm.exports=[{file:"IMG_20250717_102753.jpg",slug:"love-me-like-i-am-already-dead",title:"Love me like I am Already Dead",medium:"Oil on canvas",size:[61,91],description:`We live in a world soaked in hypocrisy. We\u2019re told not to \u201Cspeak ill of the dead,\u201D yet we spend lifetimes speaking ill of the living. We judge, ignore, neglect\u2014and then pretend to mourn with grace when it\u2019s too late. People say beautiful things at funerals, but only after burying a lifetime of cruelty or silence.

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
but the loneliness of having no one willing to admit it happened.`}]});var yh=Tt((IE,Mm)=>{"use strict";var jn={instagram:"muzammil_qureshi",email:"muzammilqureshi100@gmail.com"},wm='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/></svg>',_m='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M3.5 7l8.5 6 8.5-6"/></svg>';jn.instagramUrl="https://instagram.com/"+jn.instagram;jn.mailUrl="mailto:"+jn.email+"?subject="+encodeURIComponent("Your paintings");jn.icons=t=>`
	<a class="${t}" href="${jn.instagramUrl}" target="_blank" rel="noopener" aria-label="Instagram: @${jn.instagram}" title="Instagram">${wm}</a>
	<a class="${t}" href="${jn.mailUrl}" aria-label="Email ${jn.email}" title="Email">${_m}</a>`;jn.line=t=>`
	<span class="${t}">
		<a href="${jn.instagramUrl}" target="_blank" rel="noopener">${wm}<span>@${jn.instagram}</span></a>
		<a href="${jn.mailUrl}">${_m}<span>${jn.email}</span></a>
	</span>`;Mm.exports=jn});var Ol=Tt((qE,Sm)=>{"use strict";Sm.exports=t=>{if(!t)return"";let e=[];return t.medium&&e.push(t.medium),t.size&&t.size.length===2&&e.push(t.size[0]+" \xD7 "+t.size[1]+" cm"),e.join("  \xB7  ")}});var Yu=Tt((DE,Em)=>{"use strict";var j6=Xu(),W6=yh(),km=Ol(),V6=qr(),as=t=>String(t).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),X6=`
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
`,Wn=null;function Y6(t){if(Wn){Wn.hidden=!1,requestAnimationFrame(()=>Wn.classList.add("on"));return}let e=document.createElement("style");e.textContent=X6,document.head.appendChild(e);let o=!V6.isPhone;Wn=document.createElement("div"),Wn.className="plist",Wn.setAttribute("role","region"),Wn.setAttribute("aria-label","All paintings"),Wn.innerHTML=`
		${t?"":'<button type="button" class="plist-close">Back to the gallery</button>'}
		<header class="plist-head">
			<h1>Muzammil</h1>
			<p class="plist-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</p>
			${W6.line("plist-contact")}
		</header>
		${t?'<p class="plist-note">This device could not open the 3D gallery, so here are the paintings on their own.</p>':""}
		<main class="plist-grid">
			${j6.map(n=>`
			<article class="plist-item" id="${as(n.slug)}">
				<img loading="lazy" decoding="async" alt="${as(n.title)}, ${as(km(n))}"
					src="images/web/${as(n.slug)}${o?"":"-1024"}.webp"
					onerror="this.onerror=null;this.src='images/${as(n.file)}'">
				<p class="plist-meta">${as(km(n))}</p>
				<h2>${as(n.title)}</h2>
				<details><summary>Read its story</summary>
					${String(n.description).split(/\n\s*\n/).map(a=>`<p>${as(a.trim())}</p>`).join("")}
				</details>
			</article>`).join("")}
		</main>`,["mousedown","pointerdown","click","wheel","touchstart","touchmove","keydown"].forEach(n=>Wn.addEventListener(n,a=>a.stopPropagation(),{passive:!0}));let r=Wn.querySelector(".plist-close");r&&r.addEventListener("click",zm),document.body.appendChild(Wn),requestAnimationFrame(()=>Wn.classList.add("on"))}function zm(){Wn&&(Wn.classList.remove("on"),setTimeout(()=>{Wn.hidden=!0},500),location.hash==="#list"&&history.replaceState(null,"",location.pathname+location.search))}Em.exports={show:Y6,hide:zm}});var Am=Tt((Ku,Zu)=>{(function(t,e){typeof Ku=="object"&&typeof Zu!="undefined"?Zu.exports=e():typeof define=="function"&&define.amd?define(e):t.Stats=e()})(Ku,function(){var t=function(){function e(v){return n.appendChild(v.dom),v}function o(v){for(var d=0;d<n.children.length;d++)n.children[d].style.display=d===v?"block":"none";r=v}var r=0,n=document.createElement("div");n.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",n.addEventListener("click",function(v){v.preventDefault(),o(++r%n.children.length)},!1);var a=(performance||Date).now(),s=a,i=0,c=e(new t.Panel("FPS","#0ff","#002")),f=e(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var l=e(new t.Panel("MB","#f08","#201"));return o(0),{REVISION:16,dom:n,addPanel:e,showPanel:o,begin:function(){a=(performance||Date).now()},end:function(){i++;var v=(performance||Date).now();if(f.update(v-a,200),v>s+1e3&&(c.update(1e3*i/(v-s),100),s=v,i=0,l)){var d=performance.memory;l.update(d.usedJSHeapSize/1048576,d.jsHeapSizeLimit/1048576)}return v},update:function(){a=this.end()},domElement:n,setMode:o}};return t.Panel=function(e,o,r){var n=1/0,a=0,s=Math.round,i=s(window.devicePixelRatio||1),c=80*i,f=48*i,l=3*i,v=2*i,d=3*i,p=15*i,u=74*i,h=30*i,g=document.createElement("canvas");g.width=c,g.height=f,g.style.cssText="width:80px;height:48px";var m=g.getContext("2d");return m.font="bold "+9*i+"px Helvetica,Arial,sans-serif",m.textBaseline="top",m.fillStyle=r,m.fillRect(0,0,c,f),m.fillStyle=o,m.fillText(e,l,v),m.fillRect(d,p,u,h),m.fillStyle=r,m.globalAlpha=.9,m.fillRect(d,p,u,h),{dom:g,update:function(x,y){n=Math.min(n,x),a=Math.max(a,x),m.fillStyle=r,m.globalAlpha=1,m.fillRect(0,0,c,p),m.fillStyle=o,m.fillText(s(x)+" "+e+" ("+s(n)+"-"+s(a)+")",l,v),m.drawImage(g,d+i,p,u-i,h,d,p,u-i,h),m.fillRect(d+u-i,p,i,h),m.fillStyle=r,m.globalAlpha=.9,m.fillRect(d+u-i,p,i,s((1-x/y)*h))}}},t})});var Tm=Tt((Qu,Ju)=>{(function(t,e){typeof Qu=="object"&&typeof Ju!="undefined"?Ju.exports=e():typeof define=="function"&&define.amd?define(e):t.createREGL=e()})(Qu,function(){"use strict";var t=function(w){return w instanceof Uint8Array||w instanceof Uint16Array||w instanceof Uint32Array||w instanceof Int8Array||w instanceof Int16Array||w instanceof Int32Array||w instanceof Float32Array||w instanceof Float64Array||w instanceof Uint8ClampedArray},e=function(w,T){for(var I=Object.keys(T),ct=0;ct<I.length;++ct)w[I[ct]]=T[I[ct]];return w},o=`
`;function r(w){return typeof atob!="undefined"?atob(w):"base64:"+w}function n(w){var T=new Error("(regl) "+w);throw console.error(T),T}function a(w,T){w||n(T)}function s(w){return w?": "+w:""}function i(w,T,I){w in T||n("unknown parameter ("+w+")"+s(I)+". possible values: "+Object.keys(T).join())}function c(w,T){t(w)||n("invalid parameter type"+s(T)+". must be a typed array")}function f(w,T){switch(T){case"number":return typeof w=="number";case"object":return typeof w=="object";case"string":return typeof w=="string";case"boolean":return typeof w=="boolean";case"function":return typeof w=="function";case"undefined":return typeof w=="undefined";case"symbol":return typeof w=="symbol"}}function l(w,T,I){f(w,T)||n("invalid parameter type"+s(I)+". expected "+T+", got "+typeof w)}function v(w,T){w>=0&&(w|0)===w||n("invalid parameter type, ("+w+")"+s(T)+". must be a nonnegative integer")}function d(w,T,I){T.indexOf(w)<0&&n("invalid value"+s(I)+". must be one of: "+T)}var p=["gl","canvas","container","attributes","pixelRatio","extensions","optionalExtensions","profile","onDone"];function u(w){Object.keys(w).forEach(function(T){p.indexOf(T)<0&&n('invalid regl constructor argument "'+T+'". must be one of '+p)})}function h(w,T){for(w=w+"";w.length<T;)w=" "+w;return w}function g(){this.name="unknown",this.lines=[],this.index={},this.hasErrors=!1}function m(w,T){this.number=w,this.line=T,this.errors=[]}function x(w,T,I){this.file=w,this.line=T,this.message=I}function y(){var w=new Error,T=(w.stack||w).toString(),I=/compileProcedure.*\n\s*at.*\((.*)\)/.exec(T);if(I)return I[1];var ct=/compileProcedure.*\n\s*at\s+(.*)(\n|$)/.exec(T);return ct?ct[1]:"unknown"}function _(){var w=new Error,T=(w.stack||w).toString(),I=/at REGLCommand.*\n\s+at.*\((.*)\)/.exec(T);if(I)return I[1];var ct=/at REGLCommand.*\n\s+at\s+(.*)\n/.exec(T);return ct?ct[1]:"unknown"}function M(w,T){var I=w.split(`
`),ct=1,_t=0,st={unknown:new g,0:new g};st.unknown.name=st[0].name=T||y(),st.unknown.lines.push(new m(0,""));for(var ut=0;ut<I.length;++ut){var $t=I[ut],Gt=/^\s*#\s*(\w+)\s+(.+)\s*$/.exec($t);if(Gt)switch(Gt[1]){case"line":var Vt=/(\d+)(\s+\d+)?/.exec(Gt[2]);Vt&&(ct=Vt[1]|0,Vt[2]&&(_t=Vt[2]|0,_t in st||(st[_t]=new g)));break;case"define":var Ht=/SHADER_NAME(_B64)?\s+(.*)$/.exec(Gt[2]);Ht&&(st[_t].name=Ht[1]?r(Ht[2]):Ht[2]);break}st[_t].lines.push(new m(ct++,$t))}return Object.keys(st).forEach(function(ee){var le=st[ee];le.lines.forEach(function(Pt){le.index[Pt.number]=Pt})}),st}function b(w){var T=[];return w.split(`
`).forEach(function(I){if(!(I.length<5)){var ct=/^ERROR:\s+(\d+):(\d+):\s*(.*)$/.exec(I);ct?T.push(new x(ct[1]|0,ct[2]|0,ct[3].trim())):I.length>0&&T.push(new x("unknown",0,I))}}),T}function S(w,T){T.forEach(function(I){var ct=w[I.file];if(ct){var _t=ct.index[I.line];if(_t){_t.errors.push(I),ct.hasErrors=!0;return}}w.unknown.hasErrors=!0,w.unknown.lines[0].errors.push(I)})}function z(w,T,I,ct,_t){if(!w.getShaderParameter(T,w.COMPILE_STATUS)){var st=w.getShaderInfoLog(T),ut=ct===w.FRAGMENT_SHADER?"fragment":"vertex";at(I,"string",ut+" shader source must be a string",_t);var $t=M(I,_t),Gt=b(st);S($t,Gt),Object.keys($t).forEach(function(Vt){var Ht=$t[Vt];if(!Ht.hasErrors)return;var ee=[""],le=[""];function Pt(oe,K){ee.push(oe),le.push(K||"")}Pt("file number "+Vt+": "+Ht.name+`
`,"color:red;text-decoration:underline;font-weight:bold"),Ht.lines.forEach(function(oe){if(oe.errors.length>0){Pt(h(oe.number,4)+"|  ","background-color:yellow; font-weight:bold"),Pt(oe.line+o,"color:red; background-color:yellow; font-weight:bold");var K=0;oe.errors.forEach(function(dt){var Bt=dt.message,ve=/^\s*'(.*)'\s*:\s*(.*)$/.exec(Bt);if(ve){var At=ve[1];switch(Bt=ve[2],At){case"assign":At="=";break}K=Math.max(oe.line.indexOf(At,K),0)}else K=0;Pt(h("| ",6)),Pt(h("^^^",K+3)+o,"font-weight:bold"),Pt(h("| ",6)),Pt(Bt+o,"font-weight:bold")}),Pt(h("| ",6)+o)}else Pt(h(oe.number,4)+"|  "),Pt(oe.line+o,"color:red")}),typeof document!="undefined"&&!window.chrome?(le[0]=ee.join("%c"),console.log.apply(console,le)):console.log(ee.join(""))}),a.raise("Error compiling "+ut+" shader, "+$t[0].name)}}function k(w,T,I,ct,_t){if(!w.getProgramParameter(T,w.LINK_STATUS)){var st=w.getProgramInfoLog(T),ut=M(I,_t),$t=M(ct,_t),Gt='Error linking program with vertex shader, "'+$t[0].name+'", and fragment shader "'+ut[0].name+'"';typeof document!="undefined"?console.log("%c"+Gt+o+"%c"+st,"color:red;text-decoration:underline;font-weight:bold","color:red"):console.log(Gt+o+st),a.raise(Gt)}}function C(w){w._commandRef=y()}function R(w,T,I,ct){C(w);function _t(Gt){return Gt?ct.id(Gt):0}w._fragId=_t(w.static.frag),w._vertId=_t(w.static.vert);function st(Gt,Vt){Object.keys(Vt).forEach(function(Ht){Gt[ct.id(Ht)]=!0})}var ut=w._uniformSet={};st(ut,T.static),st(ut,T.dynamic);var $t=w._attributeSet={};st($t,I.static),st($t,I.dynamic),w._hasCount="count"in w.static||"count"in w.dynamic||"elements"in w.static||"elements"in w.dynamic}function U(w,T){var I=_();n(w+" in command "+(T||y())+(I==="unknown"?"":" called from "+I))}function P(w,T,I){w||U(T,I||y())}function q(w,T,I,ct){w in T||U("unknown parameter ("+w+")"+s(I)+". possible values: "+Object.keys(T).join(),ct||y())}function at(w,T,I,ct){f(w,T)||U("invalid parameter type"+s(I)+". expected "+T+", got "+typeof w,ct||y())}function St(w){w()}function yt(w,T,I){w.texture?d(w.texture._texture.internalformat,T,"unsupported texture format for attachment"):d(w.renderbuffer._renderbuffer.format,I,"unsupported renderbuffer format for attachment")}var mt=33071,zt=9728,It=9984,se=9985,Ee=9986,Qe=9987,me=5120,qe=5121,Ge=5122,Q=5123,j=5124,ft=5125,xt=5126,Qt=32819,ce=32820,Kt=33635,qt=34042,rt=36193,Ct={};Ct[me]=Ct[qe]=1,Ct[Ge]=Ct[Q]=Ct[rt]=Ct[Kt]=Ct[Qt]=Ct[ce]=2,Ct[j]=Ct[ft]=Ct[xt]=Ct[qt]=4;function we(w,T){return w===ce||w===Qt||w===Kt?2:w===qt?4:Ct[w]*T}function te(w){return!(w&w-1)&&!!w}function Nt(w,T,I){var ct,_t=T.width,st=T.height,ut=T.channels;a(_t>0&&_t<=I.maxTextureSize&&st>0&&st<=I.maxTextureSize,"invalid texture shape"),(w.wrapS!==mt||w.wrapT!==mt)&&a(te(_t)&&te(st),"incompatible wrap mode for texture, both width and height must be power of 2"),T.mipmask===1?_t!==1&&st!==1&&a(w.minFilter!==It&&w.minFilter!==Ee&&w.minFilter!==se&&w.minFilter!==Qe,"min filter requires mipmap"):(a(te(_t)&&te(st),"texture must be a square power of 2 to support mipmapping"),a(T.mipmask===(_t<<1)-1,"missing or incomplete mipmap data")),T.type===xt&&(I.extensions.indexOf("oes_texture_float_linear")<0&&a(w.minFilter===zt&&w.magFilter===zt,"filter not supported, must enable oes_texture_float_linear"),a(!w.genMipmaps,"mipmap generation not supported with float textures"));var $t=T.images;for(ct=0;ct<16;++ct)if($t[ct]){var Gt=_t>>ct,Vt=st>>ct;a(T.mipmask&1<<ct,"missing mipmap data");var Ht=$t[ct];if(a(Ht.width===Gt&&Ht.height===Vt,"invalid shape for mip images"),a(Ht.format===T.format&&Ht.internalformat===T.internalformat&&Ht.type===T.type,"incompatible type for mip image"),!Ht.compressed)if(Ht.data){var ee=Math.ceil(we(Ht.type,ut)*Gt/Ht.unpackAlignment)*Ht.unpackAlignment;a(Ht.data.byteLength===ee*Vt,"invalid data for image, buffer size is inconsistent with image format")}else Ht.element||Ht.copy}else w.genMipmaps||a((T.mipmask&1<<ct)===0,"extra mipmap data");T.compressed&&a(!w.genMipmaps,"mipmap generation for compressed images not supported")}function $e(w,T,I,ct){var _t=w.width,st=w.height,ut=w.channels;a(_t>0&&_t<=ct.maxTextureSize&&st>0&&st<=ct.maxTextureSize,"invalid texture shape"),a(_t===st,"cube map must be square"),a(T.wrapS===mt&&T.wrapT===mt,"wrap mode not supported by cube map");for(var $t=0;$t<I.length;++$t){var Gt=I[$t];a(Gt.width===_t&&Gt.height===st,"inconsistent cube map face shape"),T.genMipmaps&&(a(!Gt.compressed,"can not generate mipmap for compressed textures"),a(Gt.mipmask===1,"can not specify mipmaps and generate mipmaps"));for(var Vt=Gt.images,Ht=0;Ht<16;++Ht){var ee=Vt[Ht];if(ee){var le=_t>>Ht,Pt=st>>Ht;a(Gt.mipmask&1<<Ht,"missing mipmap data"),a(ee.width===le&&ee.height===Pt,"invalid shape for mip images"),a(ee.format===w.format&&ee.internalformat===w.internalformat&&ee.type===w.type,"incompatible type for mip image"),ee.compressed||(ee.data?a(ee.data.byteLength===le*Pt*Math.max(we(ee.type,ut),ee.unpackAlignment),"invalid data for image, buffer size is inconsistent with image format"):ee.element||ee.copy)}}}}var E=e(a,{optional:St,raise:n,commandRaise:U,command:P,parameter:i,commandParameter:q,constructor:u,type:l,commandType:at,isTypedArray:c,nni:v,oneOf:d,shaderError:z,linkError:k,callSite:_,saveCommandRef:C,saveDrawInfo:R,framebufferFormat:yt,guessCommand:y,texture2D:Nt,textureCube:$e}),De=0,je=0,lo=5,Oo=6;function _o(w,T){this.id=De++,this.type=w,this.data=T}function Fo(w){return w.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}function qo(w){if(w.length===0)return[];var T=w.charAt(0),I=w.charAt(w.length-1);if(w.length>1&&T===I&&(T==='"'||T==="'"))return['"'+Fo(w.substr(1,w.length-2))+'"'];var ct=/\[(false|true|null|\d+|'[^']*'|"[^"]*")\]/.exec(w);if(ct)return qo(w.substr(0,ct.index)).concat(qo(ct[1])).concat(qo(w.substr(ct.index+ct[0].length)));var _t=w.split(".");if(_t.length===1)return['"'+Fo(w)+'"'];for(var st=[],ut=0;ut<_t.length;++ut)st=st.concat(qo(_t[ut]));return st}function s0(w){return"["+qo(w).join("][")+"]"}function tn(w,T){return new _o(w,s0(T+""))}function yr(w){return typeof w=="function"&&!w._reglType||w instanceof _o}function et(w,T){if(typeof w=="function")return new _o(je,w);if(typeof w=="number"||typeof w=="boolean")return new _o(lo,w);if(Array.isArray(w))return new _o(Oo,w.map((I,ct)=>et(I,T+"["+ct+"]")));if(w instanceof _o)return w;E(!1,"invalid option type in uniform "+T)}var jt={DynamicVariable:_o,define:tn,isDynamic:yr,unbox:et,accessor:s0},Yt={next:typeof requestAnimationFrame=="function"?function(w){return requestAnimationFrame(w)}:function(w){return setTimeout(w,16)},cancel:typeof cancelAnimationFrame=="function"?function(w){return cancelAnimationFrame(w)}:clearTimeout},Ft=typeof performance!="undefined"&&performance.now?function(){return performance.now()}:function(){return+new Date};function Ae(){var w={"":0},T=[""];return{id:function(I){var ct=w[I];return ct||(ct=w[I]=T.length,T.push(I),ct)},str:function(I){return T[I]}}}function Xe(w,T,I){var ct=document.createElement("canvas");e(ct.style,{border:0,margin:0,padding:0,top:0,left:0}),w.appendChild(ct),w===document.body&&(ct.style.position="absolute",e(w.style,{margin:0,padding:0}));function _t(){var $t=window.innerWidth,Gt=window.innerHeight;if(w!==document.body){var Vt=w.getBoundingClientRect();$t=Vt.right-Vt.left,Gt=Vt.bottom-Vt.top}ct.width=I*$t,ct.height=I*Gt,e(ct.style,{width:$t+"px",height:Gt+"px"})}var st;w!==document.body&&typeof ResizeObserver=="function"?(st=new ResizeObserver(function(){setTimeout(_t)}),st.observe(w)):window.addEventListener("resize",_t,!1);function ut(){st?st.disconnect():window.removeEventListener("resize",_t),w.removeChild(ct)}return _t(),{canvas:ct,onDestroy:ut}}function We(w,T){function I(ct){try{return w.getContext(ct,T)}catch(_t){return null}}return I("webgl")||I("experimental-webgl")||I("webgl-experimental")}function Ce(w){return typeof w.nodeName=="string"&&typeof w.appendChild=="function"&&typeof w.getBoundingClientRect=="function"}function eo(w){return typeof w.drawArrays=="function"||typeof w.drawElements=="function"}function He(w){return typeof w=="string"?w.split():(E(Array.isArray(w),"invalid extension array"),w)}function go(w){return typeof w=="string"?(E(typeof document!="undefined","not supported outside of DOM"),document.querySelector(w)):w}function Ve(w){var T=w||{},I,ct,_t,st,ut={},$t=[],Gt=[],Vt=typeof window=="undefined"?1:window.devicePixelRatio,Ht=!1,ee=function(oe){oe&&E.raise(oe)},le=function(){};if(typeof T=="string"?(E(typeof document!="undefined","selector queries only supported in DOM enviroments"),I=document.querySelector(T),E(I,"invalid query string for element")):typeof T=="object"?Ce(T)?I=T:eo(T)?(st=T,_t=st.canvas):(E.constructor(T),"gl"in T?st=T.gl:"canvas"in T?_t=go(T.canvas):"container"in T&&(ct=go(T.container)),"attributes"in T&&(ut=T.attributes,E.type(ut,"object","invalid context attributes")),"extensions"in T&&($t=He(T.extensions)),"optionalExtensions"in T&&(Gt=He(T.optionalExtensions)),"onDone"in T&&(E.type(T.onDone,"function","invalid or missing onDone callback"),ee=T.onDone),"profile"in T&&(Ht=!!T.profile),"pixelRatio"in T&&(Vt=+T.pixelRatio,E(Vt>0,"invalid pixel ratio"))):E.raise("invalid arguments to regl"),I&&(I.nodeName.toLowerCase()==="canvas"?_t=I:ct=I),!st){if(!_t){E(typeof document!="undefined","must manually specify webgl context outside of DOM environments");var Pt=Xe(ct||document.body,ee,Vt);if(!Pt)return null;_t=Pt.canvas,le=Pt.onDestroy}ut.premultipliedAlpha===void 0&&(ut.premultipliedAlpha=!0),st=We(_t,ut)}return st?{gl:st,canvas:_t,container:ct,extensions:$t,optionalExtensions:Gt,pixelRatio:Vt,profile:Ht,onDone:ee,onDestroy:le}:(le(),ee("webgl not supported, try upgrading your browser or graphics drivers http://get.webgl.org"),null)}function ot(w,T){var I={};function ct(ut){E.type(ut,"string","extension name must be string");var $t=ut.toLowerCase(),Gt;try{Gt=I[$t]=w.getExtension($t)}catch(Vt){}return!!Gt}for(var _t=0;_t<T.extensions.length;++_t){var st=T.extensions[_t];if(!ct(st))return T.onDestroy(),T.onDone('"'+st+'" extension is not supported by the current WebGL context, try upgrading your system or a different browser'),null}return T.optionalExtensions.forEach(ct),{extensions:I,restore:function(){Object.keys(I).forEach(function(ut){if(I[ut]&&!ct(ut))throw new Error("(regl): error restoring extension "+ut)})}}}function gt(w,T){for(var I=Array(w),ct=0;ct<w;++ct)I[ct]=T(ct);return I}var tt=5120,pe=5121,ge=5122,kt=5123,Jt=5124,Ye=5125,oo=5126;function ze(w){for(var T=16;T<=1<<28;T*=16)if(w<=T)return T;return 0}function Ue(w){var T,I;return T=(w>65535)<<4,w>>>=T,I=(w>255)<<3,w>>>=I,T|=I,I=(w>15)<<2,w>>>=I,T|=I,I=(w>3)<<1,w>>>=I,T|=I,T|w>>1}function $o(){var w=gt(8,function(){return[]});function T(st){var ut=ze(st),$t=w[Ue(ut)>>2];return $t.length>0?$t.pop():new ArrayBuffer(ut)}function I(st){w[Ue(st.byteLength)>>2].push(st)}function ct(st,ut){var $t=null;switch(st){case tt:$t=new Int8Array(T(ut),0,ut);break;case pe:$t=new Uint8Array(T(ut),0,ut);break;case ge:$t=new Int16Array(T(2*ut),0,ut);break;case kt:$t=new Uint16Array(T(2*ut),0,ut);break;case Jt:$t=new Int32Array(T(4*ut),0,ut);break;case Ye:$t=new Uint32Array(T(4*ut),0,ut);break;case oo:$t=new Float32Array(T(4*ut),0,ut);break;default:return null}return $t.length!==ut?$t.subarray(0,ut):$t}function _t(st){I(st.buffer)}return{alloc:T,free:I,allocType:ct,freeType:_t}}var W=$o();W.zero=$o();var pt=3408,Wt=3410,ne=3411,Zt=3412,Mo=3413,xo=3414,Po=3415,co=33901,So=33902,no=3379,Fe=3386,g0=34921,zo=36347,en=36348,rr=35661,ar=35660,c0=34930,Cr=36349,$0=34076,ta=34024,Xo=7936,w0=7937,$r=7938,Fs=35724,ga=34047,Gs=36063,qf=34852,Ja=3553,Hi=34067,cl=34069,Z1=33984,Na=6408,ll=5126,Pn=5121,fl=36160,Hs=36053,gw=36064,xw=16384,yw=function(w,T){var I=1;T.ext_texture_filter_anisotropic&&(I=w.getParameter(ga));var ct=1,_t=1;T.webgl_draw_buffers&&(ct=w.getParameter(qf),_t=w.getParameter(Gs));var st=!!T.oes_texture_float;if(st){var ut=w.createTexture();w.bindTexture(Ja,ut),w.texImage2D(Ja,0,Na,1,1,0,Na,ll,null);var $t=w.createFramebuffer();if(w.bindFramebuffer(fl,$t),w.framebufferTexture2D(fl,gw,Ja,ut,0),w.bindTexture(Ja,null),w.checkFramebufferStatus(fl)!==Hs)st=!1;else{w.viewport(0,0,1,1),w.clearColor(1,0,0,1),w.clear(xw);var Gt=W.allocType(ll,4);w.readPixels(0,0,1,1,Na,ll,Gt),w.getError()?st=!1:(w.deleteFramebuffer($t),w.deleteTexture(ut),st=Gt[0]===1),W.freeType(Gt)}}var Vt=typeof navigator!="undefined"&&(/MSIE/.test(navigator.userAgent)||/Trident\//.test(navigator.appVersion)||/Edge/.test(navigator.userAgent)),Ht=!0;if(!Vt){var ee=w.createTexture(),le=W.allocType(Pn,36);w.activeTexture(Z1),w.bindTexture(Hi,ee),w.texImage2D(cl,0,Na,3,3,0,Na,Pn,le),W.freeType(le),w.bindTexture(Hi,null),w.deleteTexture(ee),Ht=!w.getError()}return{colorBits:[w.getParameter(Wt),w.getParameter(ne),w.getParameter(Zt),w.getParameter(Mo)],depthBits:w.getParameter(xo),stencilBits:w.getParameter(Po),subpixelBits:w.getParameter(pt),extensions:Object.keys(T).filter(function(Pt){return!!T[Pt]}),maxAnisotropic:I,maxDrawbuffers:ct,maxColorAttachments:_t,pointSizeDims:w.getParameter(co),lineWidthDims:w.getParameter(So),maxViewportDims:w.getParameter(Fe),maxCombinedTextureUnits:w.getParameter(rr),maxCubeMapSize:w.getParameter($0),maxRenderbufferSize:w.getParameter(ta),maxTextureUnits:w.getParameter(c0),maxTextureSize:w.getParameter(no),maxAttributes:w.getParameter(g0),maxVertexUniforms:w.getParameter(zo),maxVertexTextureUnits:w.getParameter(ar),maxVaryingVectors:w.getParameter(en),maxFragmentUniforms:w.getParameter(Cr),glsl:w.getParameter(Fs),renderer:w.getParameter(w0),vendor:w.getParameter(Xo),version:w.getParameter($r),readFloat:st,npotTextureCube:Ht}};function ea(w){return!!w&&typeof w=="object"&&Array.isArray(w.shape)&&Array.isArray(w.stride)&&typeof w.offset=="number"&&w.shape.length===w.stride.length&&(Array.isArray(w.data)||t(w.data))}var br=function(w){return Object.keys(w).map(function(T){return w[T]})},Df={shape:Mw,flatten:_w};function bw(w,T,I){for(var ct=0;ct<T;++ct)I[ct]=w[ct]}function ww(w,T,I,ct){for(var _t=0,st=0;st<T;++st)for(var ut=w[st],$t=0;$t<I;++$t)ct[_t++]=ut[$t]}function _v(w,T,I,ct,_t,st){for(var ut=st,$t=0;$t<T;++$t)for(var Gt=w[$t],Vt=0;Vt<I;++Vt)for(var Ht=Gt[Vt],ee=0;ee<ct;++ee)_t[ut++]=Ht[ee]}function Mv(w,T,I,ct,_t){for(var st=1,ut=I+1;ut<T.length;++ut)st*=T[ut];var $t=T[I];if(T.length-I===4){var Gt=T[I+1],Vt=T[I+2],Ht=T[I+3];for(ut=0;ut<$t;++ut)_v(w[ut],Gt,Vt,Ht,ct,_t),_t+=st}else for(ut=0;ut<$t;++ut)Mv(w[ut],T,I+1,ct,_t),_t+=st}function _w(w,T,I,ct){var _t=1;if(T.length)for(var st=0;st<T.length;++st)_t*=T[st];else _t=0;var ut=ct||W.allocType(I,_t);switch(T.length){case 0:break;case 1:bw(w,T[0],ut);break;case 2:ww(w,T[0],T[1],ut);break;case 3:_v(w,T[0],T[1],T[2],ut,0);break;default:Mv(w,T,0,ut,0)}return ut}function Mw(w){for(var T=[],I=w;I.length;I=I[0])T.push(I.length);return T}var Q1={"[object Int8Array]":5120,"[object Int16Array]":5122,"[object Int32Array]":5124,"[object Uint8Array]":5121,"[object Uint8ClampedArray]":5121,"[object Uint16Array]":5123,"[object Uint32Array]":5125,"[object Float32Array]":5126,"[object Float64Array]":5121,"[object ArrayBuffer]":5121},Sw=5120,kw=5122,zw=5124,Ew=5121,Aw=5123,Tw=5125,Lw=5126,Nw=5126,Us={int8:Sw,int16:kw,int32:zw,uint8:Ew,uint16:Aw,uint32:Tw,float:Lw,float32:Nw},Ow=35048,Rw=35040,Ff={dynamic:Ow,stream:Rw,static:35044},J1=Df.flatten,Sv=Df.shape,kv=35044,Cw=35040,tu=5121,eu=5126,ts=[];ts[5120]=1,ts[5122]=2,ts[5124]=4,ts[5121]=1,ts[5123]=2,ts[5125]=4,ts[5126]=4;function Gf(w){return Q1[Object.prototype.toString.call(w)]|0}function zv(w,T){for(var I=0;I<T.length;++I)w[I]=T[I]}function Ev(w,T,I,ct,_t,st,ut){for(var $t=0,Gt=0;Gt<I;++Gt)for(var Vt=0;Vt<ct;++Vt)w[$t++]=T[_t*Gt+st*Vt+ut]}function $w(w,T,I,ct){var _t=0,st={};function ut(K){this.id=_t++,this.buffer=w.createBuffer(),this.type=K,this.usage=kv,this.byteLength=0,this.dimension=1,this.dtype=tu,this.persistentData=null,I.profile&&(this.stats={size:0})}ut.prototype.bind=function(){w.bindBuffer(this.type,this.buffer)},ut.prototype.destroy=function(){le(this)};var $t=[];function Gt(K,dt){var Bt=$t.pop();return Bt||(Bt=new ut(K)),Bt.bind(),ee(Bt,dt,Cw,0,1,!1),Bt}function Vt(K){$t.push(K)}function Ht(K,dt,Bt){K.byteLength=dt.byteLength,w.bufferData(K.type,dt,Bt)}function ee(K,dt,Bt,ve,At,ye){var Ot;if(K.usage=Bt,Array.isArray(dt)){if(K.dtype=ve||eu,dt.length>0){var re;if(Array.isArray(dt[0])){Ot=Sv(dt);for(var Lt=1,ae=1;ae<Ot.length;++ae)Lt*=Ot[ae];K.dimension=Lt,re=J1(dt,Ot,K.dtype),Ht(K,re,Bt),ye?K.persistentData=re:W.freeType(re)}else if(typeof dt[0]=="number"){K.dimension=At;var Be=W.allocType(K.dtype,dt.length);zv(Be,dt),Ht(K,Be,Bt),ye?K.persistentData=Be:W.freeType(Be)}else t(dt[0])?(K.dimension=dt[0].length,K.dtype=ve||Gf(dt[0])||eu,re=J1(dt,[dt.length,dt[0].length],K.dtype),Ht(K,re,Bt),ye?K.persistentData=re:W.freeType(re)):E.raise("invalid buffer data")}}else if(t(dt))K.dtype=ve||Gf(dt),K.dimension=At,Ht(K,dt,Bt),ye&&(K.persistentData=new Uint8Array(new Uint8Array(dt.buffer)));else if(ea(dt)){Ot=dt.shape;var fo=dt.stride,fe=dt.offset,Xt=0,Et=0,ro=0,yo=0;Ot.length===1?(Xt=Ot[0],Et=1,ro=fo[0],yo=0):Ot.length===2?(Xt=Ot[0],Et=Ot[1],ro=fo[0],yo=fo[1]):E.raise("invalid shape"),K.dtype=ve||Gf(dt.data)||eu,K.dimension=Et;var Te=W.allocType(K.dtype,Xt*Et);Ev(Te,dt.data,Xt,Et,ro,yo,fe),Ht(K,Te,Bt),ye?K.persistentData=Te:W.freeType(Te)}else dt instanceof ArrayBuffer?(K.dtype=tu,K.dimension=At,Ht(K,dt,Bt),ye&&(K.persistentData=new Uint8Array(new Uint8Array(dt)))):E.raise("invalid buffer data")}function le(K){T.bufferCount--,ct(K);var dt=K.buffer;E(dt,"buffer must not be deleted already"),w.deleteBuffer(dt),K.buffer=null,delete st[K.id]}function Pt(K,dt,Bt,ve){T.bufferCount++;var At=new ut(dt);st[At.id]=At;function ye(Lt){var ae=kv,Be=null,fo=0,fe=0,Xt=1;return Array.isArray(Lt)||t(Lt)||ea(Lt)||Lt instanceof ArrayBuffer?Be=Lt:typeof Lt=="number"?fo=Lt|0:Lt&&(E.type(Lt,"object","buffer arguments must be an object, a number or an array"),"data"in Lt&&(E(Be===null||Array.isArray(Be)||t(Be)||ea(Be),"invalid data for buffer"),Be=Lt.data),"usage"in Lt&&(E.parameter(Lt.usage,Ff,"invalid buffer usage"),ae=Ff[Lt.usage]),"type"in Lt&&(E.parameter(Lt.type,Us,"invalid buffer type"),fe=Us[Lt.type]),"dimension"in Lt&&(E.type(Lt.dimension,"number","invalid dimension"),Xt=Lt.dimension|0),"length"in Lt&&(E.nni(fo,"buffer length must be a nonnegative integer"),fo=Lt.length|0)),At.bind(),Be?ee(At,Be,ae,fe,Xt,ve):(fo&&w.bufferData(At.type,fo,ae),At.dtype=fe||tu,At.usage=ae,At.dimension=Xt,At.byteLength=fo),I.profile&&(At.stats.size=At.byteLength*ts[At.dtype]),ye}function Ot(Lt,ae){E(ae+Lt.byteLength<=At.byteLength,"invalid buffer subdata call, buffer is too small.  Can't write data of size "+Lt.byteLength+" starting from offset "+ae+" to a buffer of size "+At.byteLength),w.bufferSubData(At.type,ae,Lt)}function re(Lt,ae){var Be=(ae||0)|0,fo;if(At.bind(),t(Lt)||Lt instanceof ArrayBuffer)Ot(Lt,Be);else if(Array.isArray(Lt)){if(Lt.length>0)if(typeof Lt[0]=="number"){var fe=W.allocType(At.dtype,Lt.length);zv(fe,Lt),Ot(fe,Be),W.freeType(fe)}else if(Array.isArray(Lt[0])||t(Lt[0])){fo=Sv(Lt);var Xt=J1(Lt,fo,At.dtype);Ot(Xt,Be),W.freeType(Xt)}else E.raise("invalid buffer data")}else if(ea(Lt)){fo=Lt.shape;var Et=Lt.stride,ro=0,yo=0,Te=0,Ao=0;fo.length===1?(ro=fo[0],yo=1,Te=Et[0],Ao=0):fo.length===2?(ro=fo[0],yo=fo[1],Te=Et[0],Ao=Et[1]):E.raise("invalid shape");var ho=Array.isArray(Lt.data)?At.dtype:Gf(Lt.data),ko=W.allocType(ho,ro*yo);Ev(ko,Lt.data,ro,yo,Te,Ao,Lt.offset),Ot(ko,Be),W.freeType(ko)}else E.raise("invalid data for buffer subdata");return ye}return Bt||ye(K),ye._reglType="buffer",ye._buffer=At,ye.subdata=re,I.profile&&(ye.stats=At.stats),ye.destroy=function(){le(At)},ye}function oe(){br(st).forEach(function(K){K.buffer=w.createBuffer(),w.bindBuffer(K.type,K.buffer),w.bufferData(K.type,K.persistentData||K.byteLength,K.usage)})}return I.profile&&(T.getTotalBufferSize=function(){var K=0;return Object.keys(st).forEach(function(dt){K+=st[dt].stats.size}),K}),{create:Pt,createStream:Gt,destroyStream:Vt,clear:function(){br(st).forEach(le),$t.forEach(le)},getBuffer:function(K){return K&&K._buffer instanceof ut?K._buffer:null},restore:oe,_initBuffer:ee}}var Pw=0,Iw=0,qw=1,Dw=1,Fw=4,Gw=4,Ui={points:Pw,point:Iw,lines:qw,line:Dw,triangles:Fw,triangle:Gw,"line loop":2,"line strip":3,"triangle strip":5,"triangle fan":6},Hw=0,Uw=1,hl=4,Bw=5120,Bi=5121,Av=5122,ji=5123,Tv=5124,Bs=5125,ou=34963,jw=35040,Ww=35044;function Vw(w,T,I,ct){var _t={},st=0,ut={uint8:Bi,uint16:ji};T.oes_element_index_uint&&(ut.uint32=Bs);function $t(oe){this.id=st++,_t[this.id]=this,this.buffer=oe,this.primType=hl,this.vertCount=0,this.type=0}$t.prototype.bind=function(){this.buffer.bind()};var Gt=[];function Vt(oe){var K=Gt.pop();return K||(K=new $t(I.create(null,ou,!0,!1)._buffer)),ee(K,oe,jw,-1,-1,0,0),K}function Ht(oe){Gt.push(oe)}function ee(oe,K,dt,Bt,ve,At,ye){oe.buffer.bind();var Ot;if(K){var re=ye;!ye&&(!t(K)||ea(K)&&!t(K.data))&&(re=T.oes_element_index_uint?Bs:ji),I._initBuffer(oe.buffer,K,dt,re,3)}else w.bufferData(ou,At,dt),oe.buffer.dtype=Ot||Bi,oe.buffer.usage=dt,oe.buffer.dimension=3,oe.buffer.byteLength=At;if(Ot=ye,!ye){switch(oe.buffer.dtype){case Bi:case Bw:Ot=Bi;break;case ji:case Av:Ot=ji;break;case Bs:case Tv:Ot=Bs;break;default:E.raise("unsupported type for element array")}oe.buffer.dtype=Ot}oe.type=Ot,E(Ot!==Bs||!!T.oes_element_index_uint,"32 bit element buffers not supported, enable oes_element_index_uint first");var Lt=ve;Lt<0&&(Lt=oe.buffer.byteLength,Ot===ji?Lt>>=1:Ot===Bs&&(Lt>>=2)),oe.vertCount=Lt;var ae=Bt;if(Bt<0){ae=hl;var Be=oe.buffer.dimension;Be===1&&(ae=Hw),Be===2&&(ae=Uw),Be===3&&(ae=hl)}oe.primType=ae}function le(oe){ct.elementsCount--,E(oe.buffer!==null,"must not double destroy elements"),delete _t[oe.id],oe.buffer.destroy(),oe.buffer=null}function Pt(oe,K){var dt=I.create(null,ou,!0),Bt=new $t(dt._buffer);ct.elementsCount++;function ve(At){if(!At)dt(),Bt.primType=hl,Bt.vertCount=0,Bt.type=Bi;else if(typeof At=="number")dt(At),Bt.primType=hl,Bt.vertCount=At|0,Bt.type=Bi;else{var ye=null,Ot=Ww,re=-1,Lt=-1,ae=0,Be=0;Array.isArray(At)||t(At)||ea(At)?ye=At:(E.type(At,"object","invalid arguments for elements"),"data"in At&&(ye=At.data,E(Array.isArray(ye)||t(ye)||ea(ye),"invalid data for element buffer")),"usage"in At&&(E.parameter(At.usage,Ff,"invalid element buffer usage"),Ot=Ff[At.usage]),"primitive"in At&&(E.parameter(At.primitive,Ui,"invalid element buffer primitive"),re=Ui[At.primitive]),"count"in At&&(E(typeof At.count=="number"&&At.count>=0,"invalid vertex count for elements"),Lt=At.count|0),"type"in At&&(E.parameter(At.type,ut,"invalid buffer type"),Be=ut[At.type]),"length"in At?ae=At.length|0:(ae=Lt,Be===ji||Be===Av?ae*=2:(Be===Bs||Be===Tv)&&(ae*=4))),ee(Bt,ye,Ot,re,Lt,ae,Be)}return ve}return ve(oe),ve._reglType="elements",ve._elements=Bt,ve.subdata=function(At,ye){return dt.subdata(At,ye),ve},ve.destroy=function(){le(Bt)},ve}return{create:Pt,createStream:Vt,destroyStream:Ht,getElements:function(oe){return typeof oe=="function"&&oe._elements instanceof $t?oe._elements:null},clear:function(){br(_t).forEach(le)}}}var Lv=new Float32Array(1),Xw=new Uint32Array(Lv.buffer),Yw=5123;function Nv(w){for(var T=W.allocType(Yw,w.length),I=0;I<w.length;++I)if(isNaN(w[I]))T[I]=65535;else if(w[I]===1/0)T[I]=31744;else if(w[I]===-1/0)T[I]=64512;else{Lv[0]=w[I];var ct=Xw[0],_t=ct>>>31<<15,st=(ct<<1>>>24)-127,ut=ct>>13&1023;if(st<-24)T[I]=_t;else if(st<-14){var $t=-14-st;T[I]=_t+(ut+1024>>$t)}else st>15?T[I]=_t+31744:T[I]=_t+(st+15<<10)+ut}return T}function L0(w){return Array.isArray(w)||t(w)}var Ov=function(w){return!(w&w-1)&&!!w},Kw=34467,xa=3553,nu=34067,Hf=34069,js=6408,ru=6406,Uf=6407,ul=6409,Bf=6410,Rv=32854,au=32855,Cv=36194,Zw=32819,Qw=32820,Jw=33635,t4=34042,su=6402,jf=34041,iu=35904,cu=35906,Wi=36193,lu=33776,fu=33777,hu=33778,uu=33779,$v=35986,Pv=35987,Iv=34798,qv=35840,Dv=35841,Fv=35842,Gv=35843,Hv=36196,Vi=5121,du=5123,pu=5125,dl=5126,e4=10242,o4=10243,n4=10497,vu=33071,r4=33648,a4=10240,s4=10241,mu=9728,i4=9729,gu=9984,Uv=9985,Bv=9986,xu=9987,c4=33170,Wf=4352,l4=4353,f4=4354,h4=34046,u4=3317,d4=37440,p4=37441,v4=37443,jv=37444,pl=33984,m4=[gu,Bv,Uv,xu],Vf=[0,ul,Bf,Uf,js],Pr={};Pr[ul]=Pr[ru]=Pr[su]=1,Pr[jf]=Pr[Bf]=2,Pr[Uf]=Pr[iu]=3,Pr[js]=Pr[cu]=4;function Xi(w){return"[object "+w+"]"}var Wv=Xi("HTMLCanvasElement"),Vv=Xi("OffscreenCanvas"),Xv=Xi("CanvasRenderingContext2D"),Yv=Xi("ImageBitmap"),Kv=Xi("HTMLImageElement"),Zv=Xi("HTMLVideoElement"),g4=Object.keys(Q1).concat([Wv,Vv,Xv,Yv,Kv,Zv]),Yi=[];Yi[Vi]=1,Yi[dl]=4,Yi[Wi]=2,Yi[du]=2,Yi[pu]=4;var wn=[];wn[Rv]=2,wn[au]=2,wn[Cv]=2,wn[jf]=4,wn[lu]=.5,wn[fu]=.5,wn[hu]=1,wn[uu]=1,wn[$v]=.5,wn[Pv]=1,wn[Iv]=1,wn[qv]=.5,wn[Dv]=.25,wn[Fv]=.5,wn[Gv]=.25,wn[Hv]=.5;function Qv(w){return Array.isArray(w)&&(w.length===0||typeof w[0]=="number")}function Jv(w){if(!Array.isArray(w))return!1;var T=w.length;return!(T===0||!L0(w[0]))}function Ws(w){return Object.prototype.toString.call(w)}function t2(w){return Ws(w)===Wv}function e2(w){return Ws(w)===Vv}function x4(w){return Ws(w)===Xv}function y4(w){return Ws(w)===Yv}function b4(w){return Ws(w)===Kv}function w4(w){return Ws(w)===Zv}function yu(w){if(!w)return!1;var T=Ws(w);return g4.indexOf(T)>=0?!0:Qv(w)||Jv(w)||ea(w)}function o2(w){return Q1[Object.prototype.toString.call(w)]|0}function _4(w,T){var I=T.length;switch(w.type){case Vi:case du:case pu:case dl:var ct=W.allocType(w.type,I);ct.set(T),w.data=ct;break;case Wi:w.data=Nv(T);break;default:E.raise("unsupported texture type, must specify a typed array")}}function n2(w,T){return W.allocType(w.type===Wi?dl:w.type,T)}function r2(w,T){w.type===Wi?(w.data=Nv(T),W.freeType(T)):w.data=T}function M4(w,T,I,ct,_t,st){for(var ut=w.width,$t=w.height,Gt=w.channels,Vt=ut*$t*Gt,Ht=n2(w,Vt),ee=0,le=0;le<$t;++le)for(var Pt=0;Pt<ut;++Pt)for(var oe=0;oe<Gt;++oe)Ht[ee++]=T[I*Pt+ct*le+_t*oe+st];r2(w,Ht)}function Xf(w,T,I,ct,_t,st){var ut;if(typeof wn[w]!="undefined"?ut=wn[w]:ut=Pr[w]*Yi[T],st&&(ut*=6),_t){for(var $t=0,Gt=I;Gt>=1;)$t+=ut*Gt*Gt,Gt/=2;return $t}else return ut*I*ct}function S4(w,T,I,ct,_t,st,ut){var $t={"don't care":Wf,"dont care":Wf,nice:f4,fast:l4},Gt={repeat:n4,clamp:vu,mirror:r4},Vt={nearest:mu,linear:i4},Ht=e({mipmap:xu,"nearest mipmap nearest":gu,"linear mipmap nearest":Uv,"nearest mipmap linear":Bv,"linear mipmap linear":xu},Vt),ee={none:0,browser:jv},le={uint8:Vi,rgba4:Zw,rgb565:Jw,"rgb5 a1":Qw},Pt={alpha:ru,luminance:ul,"luminance alpha":Bf,rgb:Uf,rgba:js,rgba4:Rv,"rgb5 a1":au,rgb565:Cv},oe={};T.ext_srgb&&(Pt.srgb=iu,Pt.srgba=cu),T.oes_texture_float&&(le.float32=le.float=dl),T.oes_texture_half_float&&(le.float16=le["half float"]=Wi),T.webgl_depth_texture&&(e(Pt,{depth:su,"depth stencil":jf}),e(le,{uint16:du,uint32:pu,"depth stencil":t4})),T.webgl_compressed_texture_s3tc&&e(oe,{"rgb s3tc dxt1":lu,"rgba s3tc dxt1":fu,"rgba s3tc dxt3":hu,"rgba s3tc dxt5":uu}),T.webgl_compressed_texture_atc&&e(oe,{"rgb atc":$v,"rgba atc explicit alpha":Pv,"rgba atc interpolated alpha":Iv}),T.webgl_compressed_texture_pvrtc&&e(oe,{"rgb pvrtc 4bppv1":qv,"rgb pvrtc 2bppv1":Dv,"rgba pvrtc 4bppv1":Fv,"rgba pvrtc 2bppv1":Gv}),T.webgl_compressed_texture_etc1&&(oe["rgb etc1"]=Hv);var K=Array.prototype.slice.call(w.getParameter(Kw));Object.keys(oe).forEach(function($){var lt=oe[$];K.indexOf(lt)>=0&&(Pt[$]=lt)});var dt=Object.keys(Pt);I.textureFormats=dt;var Bt=[];Object.keys(Pt).forEach(function($){var lt=Pt[$];Bt[lt]=$});var ve=[];Object.keys(le).forEach(function($){var lt=le[$];ve[lt]=$});var At=[];Object.keys(Vt).forEach(function($){var lt=Vt[$];At[lt]=$});var ye=[];Object.keys(Ht).forEach(function($){var lt=Ht[$];ye[lt]=$});var Ot=[];Object.keys(Gt).forEach(function($){var lt=Gt[$];Ot[lt]=$});var re=dt.reduce(function($,lt){var nt=Pt[lt];return nt===ul||nt===ru||nt===ul||nt===Bf||nt===su||nt===jf||T.ext_srgb&&(nt===iu||nt===cu)?$[nt]=nt:nt===au||lt.indexOf("rgba")>=0?$[nt]=js:$[nt]=Uf,$},{});function Lt(){this.internalformat=js,this.format=js,this.type=Vi,this.compressed=!1,this.premultiplyAlpha=!1,this.flipY=!1,this.unpackAlignment=1,this.colorSpace=jv,this.width=0,this.height=0,this.channels=0}function ae($,lt){$.internalformat=lt.internalformat,$.format=lt.format,$.type=lt.type,$.compressed=lt.compressed,$.premultiplyAlpha=lt.premultiplyAlpha,$.flipY=lt.flipY,$.unpackAlignment=lt.unpackAlignment,$.colorSpace=lt.colorSpace,$.width=lt.width,$.height=lt.height,$.channels=lt.channels}function Be($,lt){if(!(typeof lt!="object"||!lt)){if("premultiplyAlpha"in lt&&(E.type(lt.premultiplyAlpha,"boolean","invalid premultiplyAlpha"),$.premultiplyAlpha=lt.premultiplyAlpha),"flipY"in lt&&(E.type(lt.flipY,"boolean","invalid texture flip"),$.flipY=lt.flipY),"alignment"in lt&&(E.oneOf(lt.alignment,[1,2,4,8],"invalid texture unpack alignment"),$.unpackAlignment=lt.alignment),"colorSpace"in lt&&(E.parameter(lt.colorSpace,ee,"invalid colorSpace"),$.colorSpace=ee[lt.colorSpace]),"type"in lt){var nt=lt.type;E(T.oes_texture_float||!(nt==="float"||nt==="float32"),"you must enable the OES_texture_float extension in order to use floating point textures."),E(T.oes_texture_half_float||!(nt==="half float"||nt==="float16"),"you must enable the OES_texture_half_float extension in order to use 16-bit floating point textures."),E(T.webgl_depth_texture||!(nt==="uint16"||nt==="uint32"||nt==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),E.parameter(nt,le,"invalid texture type"),$.type=le[nt]}var Me=$.width,To=$.height,N=$.channels,A=!1;"shape"in lt?(E(Array.isArray(lt.shape)&&lt.shape.length>=2,"shape must be an array"),Me=lt.shape[0],To=lt.shape[1],lt.shape.length===3&&(N=lt.shape[2],E(N>0&&N<=4,"invalid number of channels"),A=!0),E(Me>=0&&Me<=I.maxTextureSize,"invalid width"),E(To>=0&&To<=I.maxTextureSize,"invalid height")):("radius"in lt&&(Me=To=lt.radius,E(Me>=0&&Me<=I.maxTextureSize,"invalid radius")),"width"in lt&&(Me=lt.width,E(Me>=0&&Me<=I.maxTextureSize,"invalid width")),"height"in lt&&(To=lt.height,E(To>=0&&To<=I.maxTextureSize,"invalid height")),"channels"in lt&&(N=lt.channels,E(N>0&&N<=4,"invalid number of channels"),A=!0)),$.width=Me|0,$.height=To|0,$.channels=N|0;var G=!1;if("format"in lt){var Y=lt.format;E(T.webgl_depth_texture||!(Y==="depth"||Y==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),E.parameter(Y,Pt,"invalid texture format");var Z=$.internalformat=Pt[Y];$.format=re[Z],Y in le&&("type"in lt||($.type=le[Y])),Y in oe&&($.compressed=!0),G=!0}!A&&G?$.channels=Pr[$.format]:A&&!G?$.channels!==Vf[$.format]&&($.format=$.internalformat=Vf[$.channels]):G&&A&&E($.channels===Pr[$.format],"number of channels inconsistent with specified format")}}function fo($){w.pixelStorei(d4,$.flipY),w.pixelStorei(p4,$.premultiplyAlpha),w.pixelStorei(v4,$.colorSpace),w.pixelStorei(u4,$.unpackAlignment)}function fe(){Lt.call(this),this.xOffset=0,this.yOffset=0,this.data=null,this.needsFree=!1,this.element=null,this.needsCopy=!1}function Xt($,lt){var nt=null;if(yu(lt)?nt=lt:lt&&(E.type(lt,"object","invalid pixel data type"),Be($,lt),"x"in lt&&($.xOffset=lt.x|0),"y"in lt&&($.yOffset=lt.y|0),yu(lt.data)&&(nt=lt.data)),E(!$.compressed||nt instanceof Uint8Array,"compressed texture data must be stored in a uint8array"),lt.copy){E(!nt,"can not specify copy and data field for the same texture");var Me=_t.viewportWidth,To=_t.viewportHeight;$.width=$.width||Me-$.xOffset,$.height=$.height||To-$.yOffset,$.needsCopy=!0,E($.xOffset>=0&&$.xOffset<Me&&$.yOffset>=0&&$.yOffset<To&&$.width>0&&$.width<=Me&&$.height>0&&$.height<=To,"copy texture read out of bounds")}else if(!nt)$.width=$.width||1,$.height=$.height||1,$.channels=$.channels||4;else if(t(nt))$.channels=$.channels||4,$.data=nt,!("type"in lt)&&$.type===Vi&&($.type=o2(nt));else if(Qv(nt))$.channels=$.channels||4,_4($,nt),$.alignment=1,$.needsFree=!0;else if(ea(nt)){var N=nt.data;!Array.isArray(N)&&$.type===Vi&&($.type=o2(N));var A=nt.shape,G=nt.stride,Y,Z,B,H,V,O;A.length===3?(B=A[2],O=G[2]):(E(A.length===2,"invalid ndarray pixel data, must be 2 or 3D"),B=1,O=1),Y=A[0],Z=A[1],H=G[0],V=G[1],$.alignment=1,$.width=Y,$.height=Z,$.channels=B,$.format=$.internalformat=Vf[B],$.needsFree=!0,M4($,N,H,V,O,nt.offset)}else if(t2(nt)||e2(nt)||x4(nt))t2(nt)||e2(nt)?$.element=nt:$.element=nt.canvas,$.width=$.element.width,$.height=$.element.height,$.channels=4;else if(y4(nt))$.element=nt,$.width=nt.width,$.height=nt.height,$.channels=4;else if(b4(nt))$.element=nt,$.width=nt.naturalWidth,$.height=nt.naturalHeight,$.channels=4;else if(w4(nt))$.element=nt,$.width=nt.videoWidth,$.height=nt.videoHeight,$.channels=4;else if(Jv(nt)){var D=$.width||nt[0].length,L=$.height||nt.length,X=$.channels;L0(nt[0][0])?X=X||nt[0][0].length:X=X||1;for(var J=Df.shape(nt),bt=1,Mt=0;Mt<J.length;++Mt)bt*=J[Mt];var vt=n2($,bt);Df.flatten(nt,J,"",vt),r2($,vt),$.alignment=1,$.width=D,$.height=L,$.channels=X,$.format=$.internalformat=Vf[X],$.needsFree=!0}$.type===dl?E(I.extensions.indexOf("oes_texture_float")>=0,"oes_texture_float extension not enabled"):$.type===Wi&&E(I.extensions.indexOf("oes_texture_half_float")>=0,"oes_texture_half_float extension not enabled")}function Et($,lt,nt){var Me=$.element,To=$.data,N=$.internalformat,A=$.format,G=$.type,Y=$.width,Z=$.height;fo($),Me?w.texImage2D(lt,nt,A,A,G,Me):$.compressed?w.compressedTexImage2D(lt,nt,N,Y,Z,0,To):$.needsCopy?(ct(),w.copyTexImage2D(lt,nt,A,$.xOffset,$.yOffset,Y,Z,0)):w.texImage2D(lt,nt,A,Y,Z,0,A,G,To||null)}function ro($,lt,nt,Me,To){var N=$.element,A=$.data,G=$.internalformat,Y=$.format,Z=$.type,B=$.width,H=$.height;fo($),N?w.texSubImage2D(lt,To,nt,Me,Y,Z,N):$.compressed?w.compressedTexSubImage2D(lt,To,nt,Me,G,B,H,A):$.needsCopy?(ct(),w.copyTexSubImage2D(lt,To,nt,Me,$.xOffset,$.yOffset,B,H)):w.texSubImage2D(lt,To,nt,Me,B,H,Y,Z,A)}var yo=[];function Te(){return yo.pop()||new fe}function Ao($){$.needsFree&&W.freeType($.data),fe.call($),yo.push($)}function ho(){Lt.call(this),this.genMipmaps=!1,this.mipmapHint=Wf,this.mipmask=0,this.images=Array(16)}function ko($,lt,nt){var Me=$.images[0]=Te();$.mipmask=1,Me.width=$.width=lt,Me.height=$.height=nt,Me.channels=$.channels=4}function Uo($,lt){var nt=null;if(yu(lt))nt=$.images[0]=Te(),ae(nt,$),Xt(nt,lt),$.mipmask=1;else if(Be($,lt),Array.isArray(lt.mipmap))for(var Me=lt.mipmap,To=0;To<Me.length;++To)nt=$.images[To]=Te(),ae(nt,$),nt.width>>=To,nt.height>>=To,Xt(nt,Me[To]),$.mipmask|=1<<To;else nt=$.images[0]=Te(),ae(nt,$),Xt(nt,lt),$.mipmask=1;ae($,$.images[0]),$.compressed&&($.internalformat===lu||$.internalformat===fu||$.internalformat===hu||$.internalformat===uu)&&E($.width%4===0&&$.height%4===0,"for compressed texture formats, mipmap level 0 must have width and height that are a multiple of 4")}function I0($,lt){for(var nt=$.images,Me=0;Me<nt.length;++Me){if(!nt[Me])return;Et(nt[Me],lt,Me)}}var on=[];function Ro(){var $=on.pop()||new ho;Lt.call($),$.mipmask=0;for(var lt=0;lt<16;++lt)$.images[lt]=null;return $}function W0($){for(var lt=$.images,nt=0;nt<lt.length;++nt)lt[nt]&&Ao(lt[nt]),lt[nt]=null;on.push($)}function h0(){this.minFilter=mu,this.magFilter=mu,this.wrapS=vu,this.wrapT=vu,this.anisotropic=1,this.genMipmaps=!1,this.mipmapHint=Wf}function q0($,lt){if("min"in lt){var nt=lt.min;E.parameter(nt,Ht),$.minFilter=Ht[nt],m4.indexOf($.minFilter)>=0&&!("faces"in lt)&&($.genMipmaps=!0)}if("mag"in lt){var Me=lt.mag;E.parameter(Me,Vt),$.magFilter=Vt[Me]}var To=$.wrapS,N=$.wrapT;if("wrap"in lt){var A=lt.wrap;typeof A=="string"?(E.parameter(A,Gt),To=N=Gt[A]):Array.isArray(A)&&(E.parameter(A[0],Gt),E.parameter(A[1],Gt),To=Gt[A[0]],N=Gt[A[1]])}else{if("wrapS"in lt){var G=lt.wrapS;E.parameter(G,Gt),To=Gt[G]}if("wrapT"in lt){var Y=lt.wrapT;E.parameter(Y,Gt),N=Gt[Y]}}if($.wrapS=To,$.wrapT=N,"anisotropic"in lt){var Z=lt.anisotropic;E(typeof Z=="number"&&Z>=1&&Z<=I.maxAnisotropic,"aniso samples must be between 1 and "),$.anisotropic=lt.anisotropic}if("mipmap"in lt){var B=!1;switch(typeof lt.mipmap){case"string":E.parameter(lt.mipmap,$t,"invalid mipmap hint"),$.mipmapHint=$t[lt.mipmap],$.genMipmaps=!0,B=!0;break;case"boolean":B=$.genMipmaps=lt.mipmap;break;case"object":E(Array.isArray(lt.mipmap),"invalid mipmap type"),$.genMipmaps=!1,B=!0;break;default:E.raise("invalid mipmap type")}B&&!("min"in lt)&&($.minFilter=gu)}}function V0($,lt){w.texParameteri(lt,s4,$.minFilter),w.texParameteri(lt,a4,$.magFilter),w.texParameteri(lt,e4,$.wrapS),w.texParameteri(lt,o4,$.wrapT),T.ext_texture_filter_anisotropic&&w.texParameteri(lt,h4,$.anisotropic),$.genMipmaps&&(w.hint(c4,$.mipmapHint),w.generateMipmap(lt))}var X0=0,pn={},_n=I.maxTextureUnits,N0=Array(_n).map(function(){return null});function bo($){Lt.call(this),this.mipmask=0,this.internalformat=js,this.id=X0++,this.refCount=1,this.target=$,this.texture=w.createTexture(),this.unit=-1,this.bindCount=0,this.texInfo=new h0,ut.profile&&(this.stats={size:0})}function Mn($){w.activeTexture(pl),w.bindTexture($.target,$.texture)}function Yo(){var $=N0[0];$?w.bindTexture($.target,$.texture):w.bindTexture(xa,null)}function Ke($){var lt=$.texture;E(lt,"must not double destroy texture");var nt=$.unit,Me=$.target;nt>=0&&(w.activeTexture(pl+nt),w.bindTexture(Me,null),N0[nt]=null),w.deleteTexture(lt),$.texture=null,$.params=null,$.pixels=null,$.refCount=0,delete pn[$.id],st.textureCount--}e(bo.prototype,{bind:function(){var $=this;$.bindCount+=1;var lt=$.unit;if(lt<0){for(var nt=0;nt<_n;++nt){var Me=N0[nt];if(Me){if(Me.bindCount>0)continue;Me.unit=-1}N0[nt]=$,lt=nt;break}lt>=_n&&E.raise("insufficient number of texture units"),ut.profile&&st.maxTextureUnits<lt+1&&(st.maxTextureUnits=lt+1),$.unit=lt,w.activeTexture(pl+lt),w.bindTexture($.target,$.texture)}return lt},unbind:function(){this.bindCount-=1},decRef:function(){--this.refCount<=0&&Ke(this)}});function No($,lt){var nt=new bo(xa);pn[nt.id]=nt,st.textureCount++;function Me(A,G){var Y=nt.texInfo;h0.call(Y);var Z=Ro();return typeof A=="number"?typeof G=="number"?ko(Z,A|0,G|0):ko(Z,A|0,A|0):A?(E.type(A,"object","invalid arguments to regl.texture"),q0(Y,A),Uo(Z,A)):ko(Z,1,1),Y.genMipmaps&&(Z.mipmask=(Z.width<<1)-1),nt.mipmask=Z.mipmask,ae(nt,Z),E.texture2D(Y,Z,I),nt.internalformat=Z.internalformat,Me.width=Z.width,Me.height=Z.height,Mn(nt),I0(Z,xa),V0(Y,xa),Yo(),W0(Z),ut.profile&&(nt.stats.size=Xf(nt.internalformat,nt.type,Z.width,Z.height,Y.genMipmaps,!1)),Me.format=Bt[nt.internalformat],Me.type=ve[nt.type],Me.mag=At[Y.magFilter],Me.min=ye[Y.minFilter],Me.wrapS=Ot[Y.wrapS],Me.wrapT=Ot[Y.wrapT],Me}function To(A,G,Y,Z){E(!!A,"must specify image data");var B=G|0,H=Y|0,V=Z|0,O=Te();return ae(O,nt),O.width=0,O.height=0,Xt(O,A),O.width=O.width||(nt.width>>V)-B,O.height=O.height||(nt.height>>V)-H,E(nt.type===O.type&&nt.format===O.format&&nt.internalformat===O.internalformat,"incompatible format for texture.subimage"),E(B>=0&&H>=0&&B+O.width<=nt.width&&H+O.height<=nt.height,"texture.subimage write out of bounds"),E(nt.mipmask&1<<V,"missing mipmap data"),E(O.data||O.element||O.needsCopy,"missing image data"),Mn(nt),ro(O,xa,B,H,V),Yo(),Ao(O),Me}function N(A,G){var Y=A|0,Z=G|0||Y;if(Y===nt.width&&Z===nt.height)return Me;Me.width=nt.width=Y,Me.height=nt.height=Z,Mn(nt);for(var B=0;nt.mipmask>>B;++B){var H=Y>>B,V=Z>>B;if(!H||!V)break;w.texImage2D(xa,B,nt.format,H,V,0,nt.format,nt.type,null)}return Yo(),ut.profile&&(nt.stats.size=Xf(nt.internalformat,nt.type,Y,Z,!1,!1)),Me}return Me($,lt),Me.subimage=To,Me.resize=N,Me._reglType="texture2d",Me._texture=nt,ut.profile&&(Me.stats=nt.stats),Me.destroy=function(){nt.decRef()},Me}function Do($,lt,nt,Me,To,N){var A=new bo(nu);pn[A.id]=A,st.cubeCount++;var G=new Array(6);function Y(H,V,O,D,L,X){var J,bt=A.texInfo;for(h0.call(bt),J=0;J<6;++J)G[J]=Ro();if(typeof H=="number"||!H){var Mt=H|0||1;for(J=0;J<6;++J)ko(G[J],Mt,Mt)}else if(typeof H=="object")if(V)Uo(G[0],H),Uo(G[1],V),Uo(G[2],O),Uo(G[3],D),Uo(G[4],L),Uo(G[5],X);else if(q0(bt,H),Be(A,H),"faces"in H){var vt=H.faces;for(E(Array.isArray(vt)&&vt.length===6,"cube faces must be a length 6 array"),J=0;J<6;++J)E(typeof vt[J]=="object"&&!!vt[J],"invalid input for cube map face"),ae(G[J],A),Uo(G[J],vt[J])}else for(J=0;J<6;++J)Uo(G[J],H);else E.raise("invalid arguments to cube map");for(ae(A,G[0]),I.npotTextureCube||E(Ov(A.width)&&Ov(A.height),"your browser does not support non power or two texture dimensions"),bt.genMipmaps?A.mipmask=(G[0].width<<1)-1:A.mipmask=G[0].mipmask,E.textureCube(A,bt,G,I),A.internalformat=G[0].internalformat,Y.width=G[0].width,Y.height=G[0].height,Mn(A),J=0;J<6;++J)I0(G[J],Hf+J);for(V0(bt,nu),Yo(),ut.profile&&(A.stats.size=Xf(A.internalformat,A.type,Y.width,Y.height,bt.genMipmaps,!0)),Y.format=Bt[A.internalformat],Y.type=ve[A.type],Y.mag=At[bt.magFilter],Y.min=ye[bt.minFilter],Y.wrapS=Ot[bt.wrapS],Y.wrapT=Ot[bt.wrapT],J=0;J<6;++J)W0(G[J]);return Y}function Z(H,V,O,D,L){E(!!V,"must specify image data"),E(typeof H=="number"&&H===(H|0)&&H>=0&&H<6,"invalid face");var X=O|0,J=D|0,bt=L|0,Mt=Te();return ae(Mt,A),Mt.width=0,Mt.height=0,Xt(Mt,V),Mt.width=Mt.width||(A.width>>bt)-X,Mt.height=Mt.height||(A.height>>bt)-J,E(A.type===Mt.type&&A.format===Mt.format&&A.internalformat===Mt.internalformat,"incompatible format for texture.subimage"),E(X>=0&&J>=0&&X+Mt.width<=A.width&&J+Mt.height<=A.height,"texture.subimage write out of bounds"),E(A.mipmask&1<<bt,"missing mipmap data"),E(Mt.data||Mt.element||Mt.needsCopy,"missing image data"),Mn(A),ro(Mt,Hf+H,X,J,bt),Yo(),Ao(Mt),Y}function B(H){var V=H|0;if(V!==A.width){Y.width=A.width=V,Y.height=A.height=V,Mn(A);for(var O=0;O<6;++O)for(var D=0;A.mipmask>>D;++D)w.texImage2D(Hf+O,D,A.format,V>>D,V>>D,0,A.format,A.type,null);return Yo(),ut.profile&&(A.stats.size=Xf(A.internalformat,A.type,Y.width,Y.height,!1,!0)),Y}}return Y($,lt,nt,Me,To,N),Y.subimage=Z,Y.resize=B,Y._reglType="textureCube",Y._texture=A,ut.profile&&(Y.stats=A.stats),Y.destroy=function(){A.decRef()},Y}function O0(){for(var $=0;$<_n;++$)w.activeTexture(pl+$),w.bindTexture(xa,null),N0[$]=null;br(pn).forEach(Ke),st.cubeCount=0,st.textureCount=0}ut.profile&&(st.getTotalTextureSize=function(){var $=0;return Object.keys(pn).forEach(function(lt){$+=pn[lt].stats.size}),$});function ba(){for(var $=0;$<_n;++$){var lt=N0[$];lt&&(lt.bindCount=0,lt.unit=-1,N0[$]=null)}br(pn).forEach(function(nt){nt.texture=w.createTexture(),w.bindTexture(nt.target,nt.texture);for(var Me=0;Me<32;++Me)if(nt.mipmask&1<<Me)if(nt.target===xa)w.texImage2D(xa,Me,nt.internalformat,nt.width>>Me,nt.height>>Me,0,nt.internalformat,nt.type,null);else for(var To=0;To<6;++To)w.texImage2D(Hf+To,Me,nt.internalformat,nt.width>>Me,nt.height>>Me,0,nt.internalformat,nt.type,null);V0(nt.texInfo,nt.target)})}function Js(){for(var $=0;$<_n;++$){var lt=N0[$];lt&&(lt.bindCount=0,lt.unit=-1,N0[$]=null),w.activeTexture(pl+$),w.bindTexture(xa,null),w.bindTexture(nu,null)}}return{create2D:No,createCube:Do,clear:O0,getTexture:function($){return null},restore:ba,refresh:Js}}var es=36161,Yf=32854,a2=32855,s2=36194,i2=33189,c2=36168,l2=34041,f2=35907,h2=34836,u2=34842,d2=34843,oa=[];oa[Yf]=2,oa[a2]=2,oa[s2]=2,oa[i2]=2,oa[c2]=1,oa[l2]=4,oa[f2]=4,oa[h2]=16,oa[u2]=8,oa[d2]=6;function p2(w,T,I){return oa[w]*T*I}var k4=function(w,T,I,ct,_t){var st={rgba4:Yf,rgb565:s2,"rgb5 a1":a2,depth:i2,stencil:c2,"depth stencil":l2};T.ext_srgb&&(st.srgba=f2),T.ext_color_buffer_half_float&&(st.rgba16f=u2,st.rgb16f=d2),T.webgl_color_buffer_float&&(st.rgba32f=h2);var ut=[];Object.keys(st).forEach(function(Pt){var oe=st[Pt];ut[oe]=Pt});var $t=0,Gt={};function Vt(Pt){this.id=$t++,this.refCount=1,this.renderbuffer=Pt,this.format=Yf,this.width=0,this.height=0,_t.profile&&(this.stats={size:0})}Vt.prototype.decRef=function(){--this.refCount<=0&&Ht(this)};function Ht(Pt){var oe=Pt.renderbuffer;E(oe,"must not double destroy renderbuffer"),w.bindRenderbuffer(es,null),w.deleteRenderbuffer(oe),Pt.renderbuffer=null,Pt.refCount=0,delete Gt[Pt.id],ct.renderbufferCount--}function ee(Pt,oe){var K=new Vt(w.createRenderbuffer());Gt[K.id]=K,ct.renderbufferCount++;function dt(ve,At){var ye=0,Ot=0,re=Yf;if(typeof ve=="object"&&ve){var Lt=ve;if("shape"in Lt){var ae=Lt.shape;E(Array.isArray(ae)&&ae.length>=2,"invalid renderbuffer shape"),ye=ae[0]|0,Ot=ae[1]|0}else"radius"in Lt&&(ye=Ot=Lt.radius|0),"width"in Lt&&(ye=Lt.width|0),"height"in Lt&&(Ot=Lt.height|0);"format"in Lt&&(E.parameter(Lt.format,st,"invalid renderbuffer format"),re=st[Lt.format])}else typeof ve=="number"?(ye=ve|0,typeof At=="number"?Ot=At|0:Ot=ye):ve?E.raise("invalid arguments to renderbuffer constructor"):ye=Ot=1;if(E(ye>0&&Ot>0&&ye<=I.maxRenderbufferSize&&Ot<=I.maxRenderbufferSize,"invalid renderbuffer size"),!(ye===K.width&&Ot===K.height&&re===K.format))return dt.width=K.width=ye,dt.height=K.height=Ot,K.format=re,w.bindRenderbuffer(es,K.renderbuffer),w.renderbufferStorage(es,re,ye,Ot),E(w.getError()===0,"invalid render buffer format"),_t.profile&&(K.stats.size=p2(K.format,K.width,K.height)),dt.format=ut[K.format],dt}function Bt(ve,At){var ye=ve|0,Ot=At|0||ye;return ye===K.width&&Ot===K.height||(E(ye>0&&Ot>0&&ye<=I.maxRenderbufferSize&&Ot<=I.maxRenderbufferSize,"invalid renderbuffer size"),dt.width=K.width=ye,dt.height=K.height=Ot,w.bindRenderbuffer(es,K.renderbuffer),w.renderbufferStorage(es,K.format,ye,Ot),E(w.getError()===0,"invalid render buffer format"),_t.profile&&(K.stats.size=p2(K.format,K.width,K.height))),dt}return dt(Pt,oe),dt.resize=Bt,dt._reglType="renderbuffer",dt._renderbuffer=K,_t.profile&&(dt.stats=K.stats),dt.destroy=function(){K.decRef()},dt}_t.profile&&(ct.getTotalRenderbufferSize=function(){var Pt=0;return Object.keys(Gt).forEach(function(oe){Pt+=Gt[oe].stats.size}),Pt});function le(){br(Gt).forEach(function(Pt){Pt.renderbuffer=w.createRenderbuffer(),w.bindRenderbuffer(es,Pt.renderbuffer),w.renderbufferStorage(es,Pt.format,Pt.width,Pt.height)}),w.bindRenderbuffer(es,null)}return{create:ee,clear:function(){br(Gt).forEach(Ht)},restore:le}},Oa=36160,bu=36161,Vs=3553,Kf=34069,v2=36064,m2=36096,g2=36128,x2=33306,y2=36053,z4=36054,E4=36055,A4=36057,T4=36061,L4=36193,N4=5121,O4=5126,b2=6407,w2=6408,R4=6402,C4=[b2,w2],wu=[];wu[w2]=4,wu[b2]=3;var Zf=[];Zf[N4]=1,Zf[O4]=4,Zf[L4]=2;var $4=32854,P4=32855,I4=36194,q4=33189,D4=36168,_2=34041,F4=35907,G4=34836,H4=34842,U4=34843,B4=[$4,P4,I4,F4,H4,U4,G4],Ki={};Ki[y2]="complete",Ki[z4]="incomplete attachment",Ki[A4]="incomplete dimensions",Ki[E4]="incomplete, missing attachment",Ki[T4]="unsupported";function j4(w,T,I,ct,_t,st){var ut={cur:null,next:null,dirty:!1,setFBO:null},$t=["rgba"],Gt=["rgba4","rgb565","rgb5 a1"];T.ext_srgb&&Gt.push("srgba"),T.ext_color_buffer_half_float&&Gt.push("rgba16f","rgb16f"),T.webgl_color_buffer_float&&Gt.push("rgba32f");var Vt=["uint8"];T.oes_texture_half_float&&Vt.push("half float","float16"),T.oes_texture_float&&Vt.push("float","float32");function Ht(fe,Xt,Et){this.target=fe,this.texture=Xt,this.renderbuffer=Et;var ro=0,yo=0;Xt?(ro=Xt.width,yo=Xt.height):Et&&(ro=Et.width,yo=Et.height),this.width=ro,this.height=yo}function ee(fe){fe&&(fe.texture&&fe.texture._texture.decRef(),fe.renderbuffer&&fe.renderbuffer._renderbuffer.decRef())}function le(fe,Xt,Et){if(fe)if(fe.texture){var ro=fe.texture._texture,yo=Math.max(1,ro.width),Te=Math.max(1,ro.height);E(yo===Xt&&Te===Et,"inconsistent width/height for supplied texture"),ro.refCount+=1}else{var Ao=fe.renderbuffer._renderbuffer;E(Ao.width===Xt&&Ao.height===Et,"inconsistent width/height for renderbuffer"),Ao.refCount+=1}}function Pt(fe,Xt){Xt&&(Xt.texture?w.framebufferTexture2D(Oa,fe,Xt.target,Xt.texture._texture.texture,0):w.framebufferRenderbuffer(Oa,fe,bu,Xt.renderbuffer._renderbuffer.renderbuffer))}function oe(fe){var Xt=Vs,Et=null,ro=null,yo=fe;typeof fe=="object"&&(yo=fe.data,"target"in fe&&(Xt=fe.target|0)),E.type(yo,"function","invalid attachment data");var Te=yo._reglType;return Te==="texture2d"?(Et=yo,E(Xt===Vs)):Te==="textureCube"?(Et=yo,E(Xt>=Kf&&Xt<Kf+6,"invalid cube map target")):Te==="renderbuffer"?(ro=yo,Xt=bu):E.raise("invalid regl object for attachment"),new Ht(Xt,Et,ro)}function K(fe,Xt,Et,ro,yo){if(Et){var Te=ct.create2D({width:fe,height:Xt,format:ro,type:yo});return Te._texture.refCount=0,new Ht(Vs,Te,null)}else{var Ao=_t.create({width:fe,height:Xt,format:ro});return Ao._renderbuffer.refCount=0,new Ht(bu,null,Ao)}}function dt(fe){return fe&&(fe.texture||fe.renderbuffer)}function Bt(fe,Xt,Et){fe&&(fe.texture?fe.texture.resize(Xt,Et):fe.renderbuffer&&fe.renderbuffer.resize(Xt,Et),fe.width=Xt,fe.height=Et)}var ve=0,At={};function ye(){this.id=ve++,At[this.id]=this,this.framebuffer=w.createFramebuffer(),this.width=0,this.height=0,this.colorAttachments=[],this.depthAttachment=null,this.stencilAttachment=null,this.depthStencilAttachment=null}function Ot(fe){fe.colorAttachments.forEach(ee),ee(fe.depthAttachment),ee(fe.stencilAttachment),ee(fe.depthStencilAttachment)}function re(fe){var Xt=fe.framebuffer;E(Xt,"must not double destroy framebuffer"),w.deleteFramebuffer(Xt),fe.framebuffer=null,st.framebufferCount--,delete At[fe.id]}function Lt(fe){var Xt;w.bindFramebuffer(Oa,fe.framebuffer);var Et=fe.colorAttachments;for(Xt=0;Xt<Et.length;++Xt)Pt(v2+Xt,Et[Xt]);for(Xt=Et.length;Xt<I.maxColorAttachments;++Xt)w.framebufferTexture2D(Oa,v2+Xt,Vs,null,0);w.framebufferTexture2D(Oa,x2,Vs,null,0),w.framebufferTexture2D(Oa,m2,Vs,null,0),w.framebufferTexture2D(Oa,g2,Vs,null,0),Pt(m2,fe.depthAttachment),Pt(g2,fe.stencilAttachment),Pt(x2,fe.depthStencilAttachment);var ro=w.checkFramebufferStatus(Oa);!w.isContextLost()&&ro!==y2&&E.raise("framebuffer configuration not supported, status = "+Ki[ro]),w.bindFramebuffer(Oa,ut.next?ut.next.framebuffer:null),ut.cur=ut.next,w.getError()}function ae(fe,Xt){var Et=new ye;st.framebufferCount++;function ro(Te,Ao){var ho;E(ut.next!==Et,"can not update framebuffer which is currently in use");var ko=0,Uo=0,I0=!0,on=!0,Ro=null,W0=!0,h0="rgba",q0="uint8",V0=1,X0=null,pn=null,_n=null,N0=!1;if(typeof Te=="number")ko=Te|0,Uo=Ao|0||ko;else if(!Te)ko=Uo=1;else{E.type(Te,"object","invalid arguments for framebuffer");var bo=Te;if("shape"in bo){var Mn=bo.shape;E(Array.isArray(Mn)&&Mn.length>=2,"invalid shape for framebuffer"),ko=Mn[0],Uo=Mn[1]}else"radius"in bo&&(ko=Uo=bo.radius),"width"in bo&&(ko=bo.width),"height"in bo&&(Uo=bo.height);("color"in bo||"colors"in bo)&&(Ro=bo.color||bo.colors,Array.isArray(Ro)&&E(Ro.length===1||T.webgl_draw_buffers,"multiple render targets not supported")),Ro||("colorCount"in bo&&(V0=bo.colorCount|0,E(V0>0,"invalid color buffer count")),"colorTexture"in bo&&(W0=!!bo.colorTexture,h0="rgba4"),"colorType"in bo&&(q0=bo.colorType,W0?(E(T.oes_texture_float||!(q0==="float"||q0==="float32"),"you must enable OES_texture_float in order to use floating point framebuffer objects"),E(T.oes_texture_half_float||!(q0==="half float"||q0==="float16"),"you must enable OES_texture_half_float in order to use 16-bit floating point framebuffer objects")):q0==="half float"||q0==="float16"?(E(T.ext_color_buffer_half_float,"you must enable EXT_color_buffer_half_float to use 16-bit render buffers"),h0="rgba16f"):(q0==="float"||q0==="float32")&&(E(T.webgl_color_buffer_float,"you must enable WEBGL_color_buffer_float in order to use 32-bit floating point renderbuffers"),h0="rgba32f"),E.oneOf(q0,Vt,"invalid color type")),"colorFormat"in bo&&(h0=bo.colorFormat,$t.indexOf(h0)>=0?W0=!0:Gt.indexOf(h0)>=0?W0=!1:W0?E.oneOf(bo.colorFormat,$t,"invalid color format for texture"):E.oneOf(bo.colorFormat,Gt,"invalid color format for renderbuffer"))),("depthTexture"in bo||"depthStencilTexture"in bo)&&(N0=!!(bo.depthTexture||bo.depthStencilTexture),E(!N0||T.webgl_depth_texture,"webgl_depth_texture extension not supported")),"depth"in bo&&(typeof bo.depth=="boolean"?I0=bo.depth:(X0=bo.depth,on=!1)),"stencil"in bo&&(typeof bo.stencil=="boolean"?on=bo.stencil:(pn=bo.stencil,I0=!1)),"depthStencil"in bo&&(typeof bo.depthStencil=="boolean"?I0=on=bo.depthStencil:(_n=bo.depthStencil,I0=!1,on=!1))}var Yo=null,Ke=null,No=null,Do=null;if(Array.isArray(Ro))Yo=Ro.map(oe);else if(Ro)Yo=[oe(Ro)];else for(Yo=new Array(V0),ho=0;ho<V0;++ho)Yo[ho]=K(ko,Uo,W0,h0,q0);E(T.webgl_draw_buffers||Yo.length<=1,"you must enable the WEBGL_draw_buffers extension in order to use multiple color buffers."),E(Yo.length<=I.maxColorAttachments,"too many color attachments, not supported"),ko=ko||Yo[0].width,Uo=Uo||Yo[0].height,X0?Ke=oe(X0):I0&&!on&&(Ke=K(ko,Uo,N0,"depth","uint32")),pn?No=oe(pn):on&&!I0&&(No=K(ko,Uo,!1,"stencil","uint8")),_n?Do=oe(_n):!X0&&!pn&&on&&I0&&(Do=K(ko,Uo,N0,"depth stencil","depth stencil")),E(!!X0+!!pn+!!_n<=1,"invalid framebuffer configuration, can specify exactly one depth/stencil attachment");var O0=null;for(ho=0;ho<Yo.length;++ho)if(le(Yo[ho],ko,Uo),E(!Yo[ho]||Yo[ho].texture&&C4.indexOf(Yo[ho].texture._texture.format)>=0||Yo[ho].renderbuffer&&B4.indexOf(Yo[ho].renderbuffer._renderbuffer.format)>=0,"framebuffer color attachment "+ho+" is invalid"),Yo[ho]&&Yo[ho].texture){var ba=wu[Yo[ho].texture._texture.format]*Zf[Yo[ho].texture._texture.type];O0===null?O0=ba:E(O0===ba,"all color attachments much have the same number of bits per pixel.")}return le(Ke,ko,Uo),E(!Ke||Ke.texture&&Ke.texture._texture.format===R4||Ke.renderbuffer&&Ke.renderbuffer._renderbuffer.format===q4,"invalid depth attachment for framebuffer object"),le(No,ko,Uo),E(!No||No.renderbuffer&&No.renderbuffer._renderbuffer.format===D4,"invalid stencil attachment for framebuffer object"),le(Do,ko,Uo),E(!Do||Do.texture&&Do.texture._texture.format===_2||Do.renderbuffer&&Do.renderbuffer._renderbuffer.format===_2,"invalid depth-stencil attachment for framebuffer object"),Ot(Et),Et.width=ko,Et.height=Uo,Et.colorAttachments=Yo,Et.depthAttachment=Ke,Et.stencilAttachment=No,Et.depthStencilAttachment=Do,ro.color=Yo.map(dt),ro.depth=dt(Ke),ro.stencil=dt(No),ro.depthStencil=dt(Do),ro.width=Et.width,ro.height=Et.height,Lt(Et),ro}function yo(Te,Ao){E(ut.next!==Et,"can not resize a framebuffer which is currently in use");var ho=Math.max(Te|0,1),ko=Math.max(Ao|0||ho,1);if(ho===Et.width&&ko===Et.height)return ro;for(var Uo=Et.colorAttachments,I0=0;I0<Uo.length;++I0)Bt(Uo[I0],ho,ko);return Bt(Et.depthAttachment,ho,ko),Bt(Et.stencilAttachment,ho,ko),Bt(Et.depthStencilAttachment,ho,ko),Et.width=ro.width=ho,Et.height=ro.height=ko,Lt(Et),ro}return ro(fe,Xt),e(ro,{resize:yo,_reglType:"framebuffer",_framebuffer:Et,destroy:function(){re(Et),Ot(Et)},use:function(Te){ut.setFBO({framebuffer:ro},Te)}})}function Be(fe){var Xt=Array(6);function Et(yo){var Te;E(Xt.indexOf(ut.next)<0,"can not update framebuffer which is currently in use");var Ao={color:null},ho=0,ko=null,Uo="rgba",I0="uint8",on=1;if(typeof yo=="number")ho=yo|0;else if(!yo)ho=1;else{E.type(yo,"object","invalid arguments for framebuffer");var Ro=yo;if("shape"in Ro){var W0=Ro.shape;E(Array.isArray(W0)&&W0.length>=2,"invalid shape for framebuffer"),E(W0[0]===W0[1],"cube framebuffer must be square"),ho=W0[0]}else"radius"in Ro&&(ho=Ro.radius|0),"width"in Ro?(ho=Ro.width|0,"height"in Ro&&E(Ro.height===ho,"must be square")):"height"in Ro&&(ho=Ro.height|0);("color"in Ro||"colors"in Ro)&&(ko=Ro.color||Ro.colors,Array.isArray(ko)&&E(ko.length===1||T.webgl_draw_buffers,"multiple render targets not supported")),ko||("colorCount"in Ro&&(on=Ro.colorCount|0,E(on>0,"invalid color buffer count")),"colorType"in Ro&&(E.oneOf(Ro.colorType,Vt,"invalid color type"),I0=Ro.colorType),"colorFormat"in Ro&&(Uo=Ro.colorFormat,E.oneOf(Ro.colorFormat,$t,"invalid color format for texture"))),"depth"in Ro&&(Ao.depth=Ro.depth),"stencil"in Ro&&(Ao.stencil=Ro.stencil),"depthStencil"in Ro&&(Ao.depthStencil=Ro.depthStencil)}var h0;if(ko)if(Array.isArray(ko))for(h0=[],Te=0;Te<ko.length;++Te)h0[Te]=ko[Te];else h0=[ko];else{h0=Array(on);var q0={radius:ho,format:Uo,type:I0};for(Te=0;Te<on;++Te)h0[Te]=ct.createCube(q0)}for(Ao.color=Array(h0.length),Te=0;Te<h0.length;++Te){var V0=h0[Te];E(typeof V0=="function"&&V0._reglType==="textureCube","invalid cube map"),ho=ho||V0.width,E(V0.width===ho&&V0.height===ho,"invalid cube map shape"),Ao.color[Te]={target:Kf,data:h0[Te]}}for(Te=0;Te<6;++Te){for(var X0=0;X0<h0.length;++X0)Ao.color[X0].target=Kf+Te;Te>0&&(Ao.depth=Xt[0].depth,Ao.stencil=Xt[0].stencil,Ao.depthStencil=Xt[0].depthStencil),Xt[Te]?Xt[Te](Ao):Xt[Te]=ae(Ao)}return e(Et,{width:ho,height:ho,color:h0})}function ro(yo){var Te,Ao=yo|0;if(E(Ao>0&&Ao<=I.maxCubeMapSize,"invalid radius for cube fbo"),Ao===Et.width)return Et;var ho=Et.color;for(Te=0;Te<ho.length;++Te)ho[Te].resize(Ao);for(Te=0;Te<6;++Te)Xt[Te].resize(Ao);return Et.width=Et.height=Ao,Et}return Et(fe),e(Et,{faces:Xt,resize:ro,_reglType:"framebufferCube",destroy:function(){Xt.forEach(function(yo){yo.destroy()})}})}function fo(){ut.cur=null,ut.next=null,ut.dirty=!0,br(At).forEach(function(fe){fe.framebuffer=w.createFramebuffer(),Lt(fe)})}return e(ut,{getFramebuffer:function(fe){if(typeof fe=="function"&&fe._reglType==="framebuffer"){var Xt=fe._framebuffer;if(Xt instanceof ye)return Xt}return null},create:ae,createCube:Be,clear:function(){br(At).forEach(re)},restore:fo})}var W4=5126,M2=34962;function _u(){this.state=0,this.x=0,this.y=0,this.z=0,this.w=0,this.buffer=null,this.size=0,this.normalized=!1,this.type=W4,this.offset=0,this.stride=0,this.divisor=0}function V4(w,T,I,ct,_t){for(var st=I.maxAttributes,ut=new Array(st),$t=0;$t<st;++$t)ut[$t]=new _u;var Gt=0,Vt={},Ht={Record:_u,scope:{},state:ut,currentVAO:null,targetVAO:null,restore:le()?At:function(){},createVAO:ye,getVAO:oe,destroyBuffer:ee,setVAO:le()?K:dt,clear:le()?Bt:function(){}};function ee(Ot){for(var re=0;re<ut.length;++re){var Lt=ut[re];Lt.buffer===Ot&&(w.disableVertexAttribArray(re),Lt.buffer=null)}}function le(){return T.oes_vertex_array_object}function Pt(){return T.angle_instanced_arrays}function oe(Ot){return typeof Ot=="function"&&Ot._vao?Ot._vao:null}function K(Ot){if(Ot!==Ht.currentVAO){var re=le();Ot?re.bindVertexArrayOES(Ot.vao):re.bindVertexArrayOES(null),Ht.currentVAO=Ot}}function dt(Ot){if(Ot!==Ht.currentVAO){if(Ot)Ot.bindAttrs();else for(var re=Pt(),Lt=0;Lt<ut.length;++Lt){var ae=ut[Lt];ae.buffer?(w.enableVertexAttribArray(Lt),w.vertexAttribPointer(Lt,ae.size,ae.type,ae.normalized,ae.stride,ae.offfset),re&&ae.divisor&&re.vertexAttribDivisorANGLE(Lt,ae.divisor)):(w.disableVertexAttribArray(Lt),w.vertexAttrib4f(Lt,ae.x,ae.y,ae.z,ae.w))}Ht.currentVAO=Ot}}function Bt(){br(Vt).forEach(function(Ot){Ot.destroy()})}function ve(){this.id=++Gt,this.attributes=[];var Ot=le();Ot?this.vao=Ot.createVertexArrayOES():this.vao=null,Vt[this.id]=this,this.buffers=[]}ve.prototype.bindAttrs=function(){for(var Ot=Pt(),re=this.attributes,Lt=0;Lt<re.length;++Lt){var ae=re[Lt];ae.buffer?(w.enableVertexAttribArray(Lt),w.bindBuffer(M2,ae.buffer.buffer),w.vertexAttribPointer(Lt,ae.size,ae.type,ae.normalized,ae.stride,ae.offset),Ot&&ae.divisor&&Ot.vertexAttribDivisorANGLE(Lt,ae.divisor)):(w.disableVertexAttribArray(Lt),w.vertexAttrib4f(Lt,ae.x,ae.y,ae.z,ae.w))}for(var Be=re.length;Be<st;++Be)w.disableVertexAttribArray(Be)},ve.prototype.refresh=function(){var Ot=le();Ot&&(Ot.bindVertexArrayOES(this.vao),this.bindAttrs(),Ht.currentVAO=this)},ve.prototype.destroy=function(){if(this.vao){var Ot=le();this===Ht.currentVAO&&(Ht.currentVAO=null,Ot.bindVertexArrayOES(null)),Ot.deleteVertexArrayOES(this.vao),this.vao=null}Vt[this.id]&&(delete Vt[this.id],ct.vaoCount-=1)};function At(){var Ot=le();Ot&&br(Vt).forEach(function(re){re.refresh()})}function ye(Ot){var re=new ve;ct.vaoCount+=1;function Lt(ae){E(Array.isArray(ae),"arguments to vertex array constructor must be an array"),E(ae.length<st,"too many attributes"),E(ae.length>0,"must specify at least one attribute");var Be={},fo=re.attributes;fo.length=ae.length;for(var fe=0;fe<ae.length;++fe){var Xt=ae[fe],Et=fo[fe]=new _u,ro=Xt.data||Xt;if(Array.isArray(ro)||t(ro)||ea(ro)){var yo;re.buffers[fe]&&(yo=re.buffers[fe],t(ro)&&yo._buffer.byteLength>=ro.byteLength?yo.subdata(ro):(yo.destroy(),re.buffers[fe]=null)),re.buffers[fe]||(yo=re.buffers[fe]=_t.create(Xt,M2,!1,!0)),Et.buffer=_t.getBuffer(yo),Et.size=Et.buffer.dimension|0,Et.normalized=!1,Et.type=Et.buffer.dtype,Et.offset=0,Et.stride=0,Et.divisor=0,Et.state=1,Be[fe]=1}else _t.getBuffer(Xt)?(Et.buffer=_t.getBuffer(Xt),Et.size=Et.buffer.dimension|0,Et.normalized=!1,Et.type=Et.buffer.dtype,Et.offset=0,Et.stride=0,Et.divisor=0,Et.state=1):_t.getBuffer(Xt.buffer)?(Et.buffer=_t.getBuffer(Xt.buffer),Et.size=(+Xt.size||Et.buffer.dimension)|0,Et.normalized=!!Xt.normalized||!1,"type"in Xt?(E.parameter(Xt.type,Us,"invalid buffer type"),Et.type=Us[Xt.type]):Et.type=Et.buffer.dtype,Et.offset=(Xt.offset||0)|0,Et.stride=(Xt.stride||0)|0,Et.divisor=(Xt.divisor||0)|0,Et.state=1,E(Et.size>=1&&Et.size<=4,"size must be between 1 and 4"),E(Et.offset>=0,"invalid offset"),E(Et.stride>=0&&Et.stride<=255,"stride must be between 0 and 255"),E(Et.divisor>=0,"divisor must be positive"),E(!Et.divisor||!!T.angle_instanced_arrays,"ANGLE_instanced_arrays must be enabled to use divisor")):"x"in Xt?(E(fe>0,"first attribute must not be a constant"),Et.x=+Xt.x||0,Et.y=+Xt.y||0,Et.z=+Xt.z||0,Et.w=+Xt.w||0,Et.state=2):E(!1,"invalid attribute spec for location "+fe)}for(var Te=0;Te<re.buffers.length;++Te)!Be[Te]&&re.buffers[Te]&&(re.buffers[Te].destroy(),re.buffers[Te]=null);return re.refresh(),Lt}return Lt.destroy=function(){for(var ae=0;ae<re.buffers.length;++ae)re.buffers[ae]&&re.buffers[ae].destroy();re.buffers.length=0,re.destroy()},Lt._vao=re,Lt._reglType="vao",Lt(Ot)}return Ht}var S2=35632,X4=35633,Y4=35718,K4=35721;function Z4(w,T,I,ct){var _t={},st={};function ut(K,dt,Bt,ve){this.name=K,this.id=dt,this.location=Bt,this.info=ve}function $t(K,dt){for(var Bt=0;Bt<K.length;++Bt)if(K[Bt].id===dt.id){K[Bt].location=dt.location;return}K.push(dt)}function Gt(K,dt,Bt){var ve=K===S2?_t:st,At=ve[dt];if(!At){var ye=T.str(dt);At=w.createShader(K),w.shaderSource(At,ye),w.compileShader(At),E.shaderError(w,At,ye,K,Bt),ve[dt]=At}return At}var Vt={},Ht=[],ee=0;function le(K,dt){this.id=ee++,this.fragId=K,this.vertId=dt,this.program=null,this.uniforms=[],this.attributes=[],this.refCount=1,ct.profile&&(this.stats={uniformsCount:0,attributesCount:0})}function Pt(K,dt,Bt){var ve,At,ye=Gt(S2,K.fragId),Ot=Gt(X4,K.vertId),re=K.program=w.createProgram();if(w.attachShader(re,ye),w.attachShader(re,Ot),Bt)for(ve=0;ve<Bt.length;++ve){var Lt=Bt[ve];w.bindAttribLocation(re,Lt[0],Lt[1])}w.linkProgram(re),E.linkError(w,re,T.str(K.fragId),T.str(K.vertId),dt);var ae=w.getProgramParameter(re,Y4);ct.profile&&(K.stats.uniformsCount=ae);var Be=K.uniforms;for(ve=0;ve<ae;++ve)if(At=w.getActiveUniform(re,ve),At)if(At.size>1)for(var fo=0;fo<At.size;++fo){var fe=At.name.replace("[0]","["+fo+"]");$t(Be,new ut(fe,T.id(fe),w.getUniformLocation(re,fe),At))}else $t(Be,new ut(At.name,T.id(At.name),w.getUniformLocation(re,At.name),At));var Xt=w.getProgramParameter(re,K4);ct.profile&&(K.stats.attributesCount=Xt);var Et=K.attributes;for(ve=0;ve<Xt;++ve)At=w.getActiveAttrib(re,ve),At&&$t(Et,new ut(At.name,T.id(At.name),w.getAttribLocation(re,At.name),At))}ct.profile&&(I.getMaxUniformsCount=function(){var K=0;return Ht.forEach(function(dt){dt.stats.uniformsCount>K&&(K=dt.stats.uniformsCount)}),K},I.getMaxAttributesCount=function(){var K=0;return Ht.forEach(function(dt){dt.stats.attributesCount>K&&(K=dt.stats.attributesCount)}),K});function oe(){_t={},st={};for(var K=0;K<Ht.length;++K)Pt(Ht[K],null,Ht[K].attributes.map(function(dt){return[dt.location,dt.name]}))}return{clear:function(){var K=w.deleteShader.bind(w);br(_t).forEach(K),_t={},br(st).forEach(K),st={},Ht.forEach(function(dt){w.deleteProgram(dt.program)}),Ht.length=0,Vt={},I.shaderCount=0},program:function(K,dt,Bt,ve){E.command(K>=0,"missing vertex shader",Bt),E.command(dt>=0,"missing fragment shader",Bt);var At=Vt[dt];At||(At=Vt[dt]={});var ye=At[K];if(ye&&(ye.refCount++,!ve))return ye;var Ot=new le(dt,K);return I.shaderCount++,Pt(Ot,Bt,ve),ye||(At[K]=Ot),Ht.push(Ot),e(Ot,{destroy:function(){if(Ot.refCount--,Ot.refCount<=0){w.deleteProgram(Ot.program);var re=Ht.indexOf(Ot);Ht.splice(re,1),I.shaderCount--}At[Ot.vertId].refCount<=0&&(w.deleteShader(st[Ot.vertId]),delete st[Ot.vertId],delete Vt[Ot.fragId][Ot.vertId]),Object.keys(Vt[Ot.fragId]).length||(w.deleteShader(_t[Ot.fragId]),delete _t[Ot.fragId],delete Vt[Ot.fragId])}})},restore:oe,shader:Gt,frag:-1,vert:-1}}var Q4=6408,vl=5121,J4=3333,Qf=5126;function t6(w,T,I,ct,_t,st,ut){function $t(Ht){var ee;T.next===null?(E(_t.preserveDrawingBuffer,'you must create a webgl context with "preserveDrawingBuffer":true in order to read pixels from the drawing buffer'),ee=vl):(E(T.next.colorAttachments[0].texture!==null,"You cannot read from a renderbuffer"),ee=T.next.colorAttachments[0].texture._texture.type,st.oes_texture_float?(E(ee===vl||ee===Qf,"Reading from a framebuffer is only allowed for the types 'uint8' and 'float'"),ee===Qf&&E(ut.readFloat,"Reading 'float' values is not permitted in your browser. For a fallback, please see: https://www.npmjs.com/package/glsl-read-float")):E(ee===vl,"Reading from a framebuffer is only allowed for the type 'uint8'"));var le=0,Pt=0,oe=ct.framebufferWidth,K=ct.framebufferHeight,dt=null;t(Ht)?dt=Ht:Ht&&(E.type(Ht,"object","invalid arguments to regl.read()"),le=Ht.x|0,Pt=Ht.y|0,E(le>=0&&le<ct.framebufferWidth,"invalid x offset for regl.read"),E(Pt>=0&&Pt<ct.framebufferHeight,"invalid y offset for regl.read"),oe=(Ht.width||ct.framebufferWidth-le)|0,K=(Ht.height||ct.framebufferHeight-Pt)|0,dt=Ht.data||null),dt&&(ee===vl?E(dt instanceof Uint8Array,"buffer must be 'Uint8Array' when reading from a framebuffer of type 'uint8'"):ee===Qf&&E(dt instanceof Float32Array,"buffer must be 'Float32Array' when reading from a framebuffer of type 'float'")),E(oe>0&&oe+le<=ct.framebufferWidth,"invalid width for read pixels"),E(K>0&&K+Pt<=ct.framebufferHeight,"invalid height for read pixels"),I();var Bt=oe*K*4;return dt||(ee===vl?dt=new Uint8Array(Bt):ee===Qf&&(dt=dt||new Float32Array(Bt))),E.isTypedArray(dt,"data buffer for regl.read() must be a typedarray"),E(dt.byteLength>=Bt,"data buffer for regl.read() too small"),w.pixelStorei(J4,4),w.readPixels(le,Pt,oe,K,Q4,ee,dt),dt}function Gt(Ht){var ee;return T.setFBO({framebuffer:Ht.framebuffer},function(){ee=$t(Ht)}),ee}function Vt(Ht){return!Ht||!("framebuffer"in Ht)?$t(Ht):Gt(Ht)}return Vt}function Zi(w){return Array.prototype.slice.call(w)}function Qi(w){return Zi(w).join("")}function e6(){var w=0,T=[],I=[];function ct(ee){for(var le=0;le<I.length;++le)if(I[le]===ee)return T[le];var Pt="g"+w++;return T.push(Pt),I.push(ee),Pt}function _t(){var ee=[];function le(){ee.push.apply(ee,Zi(arguments))}var Pt=[];function oe(){var K="v"+w++;return Pt.push(K),arguments.length>0&&(ee.push(K,"="),ee.push.apply(ee,Zi(arguments)),ee.push(";")),K}return e(le,{def:oe,toString:function(){return Qi([Pt.length>0?"var "+Pt.join(",")+";":"",Qi(ee)])}})}function st(){var ee=_t(),le=_t(),Pt=ee.toString,oe=le.toString;function K(dt,Bt){le(dt,Bt,"=",ee.def(dt,Bt),";")}return e(function(){ee.apply(ee,Zi(arguments))},{def:ee.def,entry:ee,exit:le,save:K,set:function(dt,Bt,ve){K(dt,Bt),ee(dt,Bt,"=",ve,";")},toString:function(){return Pt()+oe()}})}function ut(){var ee=Qi(arguments),le=st(),Pt=st(),oe=le.toString,K=Pt.toString;return e(le,{then:function(){return le.apply(le,Zi(arguments)),this},else:function(){return Pt.apply(Pt,Zi(arguments)),this},toString:function(){var dt=K();return dt&&(dt="else{"+dt+"}"),Qi(["if(",ee,"){",oe(),"}",dt])}})}var $t=_t(),Gt={};function Vt(ee,le){var Pt=[];function oe(){var At="a"+Pt.length;return Pt.push(At),At}le=le||0;for(var K=0;K<le;++K)oe();var dt=st(),Bt=dt.toString,ve=Gt[ee]=e(dt,{arg:oe,toString:function(){return Qi(["function(",Pt.join(),"){",Bt(),"}"])}});return ve}function Ht(){var ee=['"use strict";',$t,"return {"];Object.keys(Gt).forEach(function(oe){ee.push('"',oe,'":',Gt[oe].toString(),",")}),ee.push("}");var le=Qi(ee).replace(/;/g,`;
`).replace(/}/g,`}
`).replace(/{/g,`{
`),Pt=Function.apply(null,T.concat(le));return Pt.apply(null,I)}return{global:$t,link:ct,block:_t,proc:Vt,scope:st,cond:ut,compile:Ht}}var Ji="xyzw".split(""),k2=5121,tc=1,Mu=2,Su=0,ku=1,zu=2,Eu=3,Jf=4,z2=5,E2=6,A2="dither",T2="blend.enable",L2="blend.color",Au="blend.equation",Tu="blend.func",N2="depth.enable",O2="depth.func",R2="depth.range",C2="depth.mask",Lu="colorMask",$2="cull.enable",P2="cull.face",Nu="frontFace",Ou="lineWidth",I2="polygonOffset.enable",Ru="polygonOffset.offset",q2="sample.alpha",D2="sample.enable",Cu="sample.coverage",F2="stencil.enable",G2="stencil.mask",$u="stencil.func",Pu="stencil.opFront",ml="stencil.opBack",H2="scissor.enable",th="scissor.box",Ra="viewport",gl="profile",Xs="framebuffer",xl="vert",yl="frag",Ys="elements",Ks="primitive",Zs="count",eh="offset",oh="instances",bl="vao",Iu="Width",qu="Height",ec=Xs+Iu,oc=Xs+qu,o6=Ra+Iu,n6=Ra+qu,U2="drawingBuffer",B2=U2+Iu,j2=U2+qu,r6=[Tu,Au,$u,Pu,ml,Cu,Ra,th,Ru],nc=34962,a6=34963,s6=35632,i6=35633,W2=3553,c6=34067,l6=2884,f6=3042,h6=3024,u6=2960,d6=2929,p6=3089,v6=32823,m6=32926,g6=32928,Du=5126,nh=35664,rh=35665,ah=35666,Fu=5124,sh=35667,ih=35668,ch=35669,Gu=35670,lh=35671,fh=35672,hh=35673,wl=35674,_l=35675,Ml=35676,Sl=35678,kl=35680,V2=4,zl=1028,Qs=1029,X2=2304,Hu=2305,x6=32775,y6=32776,b6=519,os=7680,Y2=0,K2=1,Z2=32774,w6=513,Q2=36160,_6=36064,ya={0:0,1:1,zero:0,one:1,"src color":768,"one minus src color":769,"src alpha":770,"one minus src alpha":771,"dst color":774,"one minus dst color":775,"dst alpha":772,"one minus dst alpha":773,"constant color":32769,"one minus constant color":32770,"constant alpha":32771,"one minus constant alpha":32772,"src alpha saturate":776},J2=["constant color, constant alpha","one minus constant color, constant alpha","constant color, one minus constant alpha","one minus constant color, one minus constant alpha","constant alpha, constant color","constant alpha, one minus constant color","one minus constant alpha, constant color","one minus constant alpha, one minus constant color"],rc={never:512,less:513,"<":513,equal:514,"=":514,"==":514,"===":514,lequal:515,"<=":515,greater:516,">":516,notequal:517,"!=":517,"!==":517,gequal:518,">=":518,always:519},ns={0:0,zero:0,keep:7680,replace:7681,increment:7682,decrement:7683,"increment wrap":34055,"decrement wrap":34056,invert:5386},tm={frag:s6,vert:i6},Uu={cw:X2,ccw:Hu};function uh(w){return Array.isArray(w)||t(w)||ea(w)}function em(w){return w.sort(function(T,I){return T===Ra?-1:I===Ra?1:T<I?-1:1})}function Un(w,T,I,ct){this.thisDep=w,this.contextDep=T,this.propDep=I,this.append=ct}function rs(w){return w&&!(w.thisDep||w.contextDep||w.propDep)}function P0(w){return new Un(!1,!1,!1,w)}function sr(w,T){var I=w.type;if(I===Su){var ct=w.data.length;return new Un(!0,ct>=1,ct>=2,T)}else if(I===Jf){var _t=w.data;return new Un(_t.thisDep,_t.contextDep,_t.propDep,T)}else{if(I===z2)return new Un(!1,!1,!1,T);if(I===E2){for(var st=!1,ut=!1,$t=!1,Gt=0;Gt<w.data.length;++Gt){var Vt=w.data[Gt];if(Vt.type===ku)$t=!0;else if(Vt.type===zu)ut=!0;else if(Vt.type===Eu)st=!0;else if(Vt.type===Su){st=!0;var Ht=Vt.data;Ht>=1&&(ut=!0),Ht>=2&&($t=!0)}else Vt.type===Jf&&(st=st||Vt.data.thisDep,ut=ut||Vt.data.contextDep,$t=$t||Vt.data.propDep)}return new Un(st,ut,$t,T)}else return new Un(I===Eu,I===zu,I===ku,T)}}var om=new Un(!1,!1,!1,function(){});function M6(w,T,I,ct,_t,st,ut,$t,Gt,Vt,Ht,ee,le,Pt,oe){var K=Vt.Record,dt={add:32774,subtract:32778,"reverse subtract":32779};I.ext_blend_minmax&&(dt.min=x6,dt.max=y6);var Bt=I.angle_instanced_arrays,ve=I.webgl_draw_buffers,At={dirty:!0,profile:oe.profile},ye={},Ot=[],re={},Lt={};function ae(N){return N.replace(".","_")}function Be(N,A,G){var Y=ae(N);Ot.push(N),ye[Y]=At[Y]=!!G,re[Y]=A}function fo(N,A,G){var Y=ae(N);Ot.push(N),Array.isArray(G)?(At[Y]=G.slice(),ye[Y]=G.slice()):At[Y]=ye[Y]=G,Lt[Y]=A}Be(A2,h6),Be(T2,f6),fo(L2,"blendColor",[0,0,0,0]),fo(Au,"blendEquationSeparate",[Z2,Z2]),fo(Tu,"blendFuncSeparate",[K2,Y2,K2,Y2]),Be(N2,d6,!0),fo(O2,"depthFunc",w6),fo(R2,"depthRange",[0,1]),fo(C2,"depthMask",!0),fo(Lu,Lu,[!0,!0,!0,!0]),Be($2,l6),fo(P2,"cullFace",Qs),fo(Nu,Nu,Hu),fo(Ou,Ou,1),Be(I2,v6),fo(Ru,"polygonOffset",[0,0]),Be(q2,m6),Be(D2,g6),fo(Cu,"sampleCoverage",[1,!1]),Be(F2,u6),fo(G2,"stencilMask",-1),fo($u,"stencilFunc",[b6,0,-1]),fo(Pu,"stencilOpSeparate",[zl,os,os,os]),fo(ml,"stencilOpSeparate",[Qs,os,os,os]),Be(H2,p6),fo(th,"scissor",[0,0,w.drawingBufferWidth,w.drawingBufferHeight]),fo(Ra,Ra,[0,0,w.drawingBufferWidth,w.drawingBufferHeight]);var fe={gl:w,context:le,strings:T,next:ye,current:At,draw:ee,elements:st,buffer:_t,shader:Ht,attributes:Vt.state,vao:Vt,uniforms:Gt,framebuffer:$t,extensions:I,timer:Pt,isBufferArgs:uh},Xt={primTypes:Ui,compareFuncs:rc,blendFuncs:ya,blendEquations:dt,stencilOps:ns,glTypes:Us,orientationType:Uu};E.optional(function(){fe.isArrayLike=L0}),ve&&(Xt.backBuffer=[Qs],Xt.drawBuffer=gt(ct.maxDrawbuffers,function(N){return N===0?[0]:gt(N,function(A){return _6+A})}));var Et=0;function ro(){var N=e6(),A=N.link,G=N.global;N.id=Et++,N.batchId="0";var Y=A(fe),Z=N.shared={props:"a0"};Object.keys(fe).forEach(function(D){Z[D]=G.def(Y,".",D)}),E.optional(function(){N.CHECK=A(E),N.commandStr=E.guessCommand(),N.command=A(N.commandStr),N.assert=function(D,L,X){D("if(!(",L,"))",this.CHECK,".commandRaise(",A(X),",",this.command,");")},Xt.invalidBlendCombinations=J2});var B=N.next={},H=N.current={};Object.keys(Lt).forEach(function(D){Array.isArray(At[D])&&(B[D]=G.def(Z.next,".",D),H[D]=G.def(Z.current,".",D))});var V=N.constants={};Object.keys(Xt).forEach(function(D){V[D]=G.def(JSON.stringify(Xt[D]))}),N.invoke=function(D,L){switch(L.type){case Su:var X=["this",Z.context,Z.props,N.batchId];return D.def(A(L.data),".call(",X.slice(0,Math.max(L.data.length+1,4)),")");case ku:return D.def(Z.props,L.data);case zu:return D.def(Z.context,L.data);case Eu:return D.def("this",L.data);case Jf:return L.data.append(N,D),L.data.ref;case z2:return L.data.toString();case E2:return L.data.map(function(J){return N.invoke(D,J)})}},N.attribCache={};var O={};return N.scopeAttrib=function(D){var L=T.id(D);if(L in O)return O[L];var X=Vt.scope[L];X||(X=Vt.scope[L]=new K);var J=O[L]=A(X);return J},N}function yo(N){var A=N.static,G=N.dynamic,Y;if(gl in A){var Z=!!A[gl];Y=P0(function(H,V){return Z}),Y.enable=Z}else if(gl in G){var B=G[gl];Y=sr(B,function(H,V){return H.invoke(V,B)})}return Y}function Te(N,A){var G=N.static,Y=N.dynamic;if(Xs in G){var Z=G[Xs];return Z?(Z=$t.getFramebuffer(Z),E.command(Z,"invalid framebuffer object"),P0(function(H,V){var O=H.link(Z),D=H.shared;V.set(D.framebuffer,".next",O);var L=D.context;return V.set(L,"."+ec,O+".width"),V.set(L,"."+oc,O+".height"),O})):P0(function(H,V){var O=H.shared;V.set(O.framebuffer,".next","null");var D=O.context;return V.set(D,"."+ec,D+"."+B2),V.set(D,"."+oc,D+"."+j2),"null"})}else if(Xs in Y){var B=Y[Xs];return sr(B,function(H,V){var O=H.invoke(V,B),D=H.shared,L=D.framebuffer,X=V.def(L,".getFramebuffer(",O,")");E.optional(function(){H.assert(V,"!"+O+"||"+X,"invalid framebuffer object")}),V.set(L,".next",X);var J=D.context;return V.set(J,"."+ec,X+"?"+X+".width:"+J+"."+B2),V.set(J,"."+oc,X+"?"+X+".height:"+J+"."+j2),X})}else return null}function Ao(N,A,G){var Y=N.static,Z=N.dynamic;function B(O){if(O in Y){var D=Y[O];E.commandType(D,"object","invalid "+O,G.commandStr);var L=!0,X=D.x|0,J=D.y|0,bt,Mt;return"width"in D?(bt=D.width|0,E.command(bt>=0,"invalid "+O,G.commandStr)):L=!1,"height"in D?(Mt=D.height|0,E.command(Mt>=0,"invalid "+O,G.commandStr)):L=!1,new Un(!L&&A&&A.thisDep,!L&&A&&A.contextDep,!L&&A&&A.propDep,function(Pe,wo){var Le=Pe.shared.context,Ze=bt;"width"in D||(Ze=wo.def(Le,".",ec,"-",X));var uo=Mt;return"height"in D||(uo=wo.def(Le,".",oc,"-",J)),[X,J,Ze,uo]})}else if(O in Z){var vt=Z[O],Ut=sr(vt,function(Pe,wo){var Le=Pe.invoke(wo,vt);E.optional(function(){Pe.assert(wo,Le+"&&typeof "+Le+'==="object"',"invalid "+O)});var Ze=Pe.shared.context,uo=wo.def(Le,".x|0"),Bo=wo.def(Le,".y|0"),k0=wo.def('"width" in ',Le,"?",Le,".width|0:","(",Ze,".",ec,"-",uo,")"),Bn=wo.def('"height" in ',Le,"?",Le,".height|0:","(",Ze,".",oc,"-",Bo,")");return E.optional(function(){Pe.assert(wo,k0+">=0&&"+Bn+">=0","invalid "+O)}),[uo,Bo,k0,Bn]});return A&&(Ut.thisDep=Ut.thisDep||A.thisDep,Ut.contextDep=Ut.contextDep||A.contextDep,Ut.propDep=Ut.propDep||A.propDep),Ut}else return A?new Un(A.thisDep,A.contextDep,A.propDep,function(Pe,wo){var Le=Pe.shared.context;return[0,0,wo.def(Le,".",ec),wo.def(Le,".",oc)]}):null}var H=B(Ra);if(H){var V=H;H=new Un(H.thisDep,H.contextDep,H.propDep,function(O,D){var L=V.append(O,D),X=O.shared.context;return D.set(X,"."+o6,L[2]),D.set(X,"."+n6,L[3]),L})}return{viewport:H,scissor_box:B(th)}}function ho(N,A){var G=N.static,Y=typeof G[yl]=="string"&&typeof G[xl]=="string";if(Y){if(Object.keys(A.dynamic).length>0)return null;var Z=A.static,B=Object.keys(Z);if(B.length>0&&typeof Z[B[0]]=="number"){for(var H=[],V=0;V<B.length;++V)E(typeof Z[B[V]]=="number","must specify all vertex attribute locations when using vaos"),H.push([Z[B[V]]|0,B[V]]);return H}}return null}function ko(N,A,G){var Y=N.static,Z=N.dynamic;function B(L){if(L in Y){var X=T.id(Y[L]);E.optional(function(){Ht.shader(tm[L],X,E.guessCommand())});var J=P0(function(){return X});return J.id=X,J}else if(L in Z){var bt=Z[L];return sr(bt,function(Mt,vt){var Ut=Mt.invoke(vt,bt),Pe=vt.def(Mt.shared.strings,".id(",Ut,")");return E.optional(function(){vt(Mt.shared.shader,".shader(",tm[L],",",Pe,",",Mt.command,");")}),Pe})}return null}var H=B(yl),V=B(xl),O=null,D;return rs(H)&&rs(V)?(O=Ht.program(V.id,H.id,null,G),D=P0(function(L,X){return L.link(O)})):D=new Un(H&&H.thisDep||V&&V.thisDep,H&&H.contextDep||V&&V.contextDep,H&&H.propDep||V&&V.propDep,function(L,X){var J=L.shared.shader,bt;H?bt=H.append(L,X):bt=X.def(J,".",yl);var Mt;V?Mt=V.append(L,X):Mt=X.def(J,".",xl);var vt=J+".program("+Mt+","+bt;return E.optional(function(){vt+=","+L.command}),X.def(vt+")")}),{frag:H,vert:V,progVar:D,program:O}}function Uo(N,A){var G=N.static,Y=N.dynamic;function Z(){if(Ys in G){var L=G[Ys];uh(L)?L=st.getElements(st.create(L,!0)):L&&(L=st.getElements(L),E.command(L,"invalid elements",A.commandStr));var X=P0(function(bt,Mt){if(L){var vt=bt.link(L);return bt.ELEMENTS=vt,vt}return bt.ELEMENTS=null,null});return X.value=L,X}else if(Ys in Y){var J=Y[Ys];return sr(J,function(bt,Mt){var vt=bt.shared,Ut=vt.isBufferArgs,Pe=vt.elements,wo=bt.invoke(Mt,J),Le=Mt.def("null"),Ze=Mt.def(Ut,"(",wo,")"),uo=bt.cond(Ze).then(Le,"=",Pe,".createStream(",wo,");").else(Le,"=",Pe,".getElements(",wo,");");return E.optional(function(){bt.assert(uo.else,"!"+wo+"||"+Le,"invalid elements")}),Mt.entry(uo),Mt.exit(bt.cond(Ze).then(Pe,".destroyStream(",Le,");")),bt.ELEMENTS=Le,Le})}return null}var B=Z();function H(){if(Ks in G){var L=G[Ks];return E.commandParameter(L,Ui,"invalid primitve",A.commandStr),P0(function(J,bt){return Ui[L]})}else if(Ks in Y){var X=Y[Ks];return sr(X,function(J,bt){var Mt=J.constants.primTypes,vt=J.invoke(bt,X);return E.optional(function(){J.assert(bt,vt+" in "+Mt,"invalid primitive, must be one of "+Object.keys(Ui))}),bt.def(Mt,"[",vt,"]")})}else if(B)return rs(B)?B.value?P0(function(J,bt){return bt.def(J.ELEMENTS,".primType")}):P0(function(){return V2}):new Un(B.thisDep,B.contextDep,B.propDep,function(J,bt){var Mt=J.ELEMENTS;return bt.def(Mt,"?",Mt,".primType:",V2)});return null}function V(L,X){if(L in G){var J=G[L]|0;return E.command(!X||J>=0,"invalid "+L,A.commandStr),P0(function(Mt,vt){return X&&(Mt.OFFSET=J),J})}else if(L in Y){var bt=Y[L];return sr(bt,function(Mt,vt){var Ut=Mt.invoke(vt,bt);return X&&(Mt.OFFSET=Ut,E.optional(function(){Mt.assert(vt,Ut+">=0","invalid "+L)})),Ut})}else if(X&&B)return P0(function(Mt,vt){return Mt.OFFSET="0",0});return null}var O=V(eh,!0);function D(){if(Zs in G){var L=G[Zs]|0;return E.command(typeof L=="number"&&L>=0,"invalid vertex count",A.commandStr),P0(function(){return L})}else if(Zs in Y){var X=Y[Zs];return sr(X,function(Mt,vt){var Ut=Mt.invoke(vt,X);return E.optional(function(){Mt.assert(vt,"typeof "+Ut+'==="number"&&'+Ut+">=0&&"+Ut+"===("+Ut+"|0)","invalid vertex count")}),Ut})}else if(B)if(rs(B)){if(B)return O?new Un(O.thisDep,O.contextDep,O.propDep,function(Mt,vt){var Ut=vt.def(Mt.ELEMENTS,".vertCount-",Mt.OFFSET);return E.optional(function(){Mt.assert(vt,Ut+">=0","invalid vertex offset/element buffer too small")}),Ut}):P0(function(Mt,vt){return vt.def(Mt.ELEMENTS,".vertCount")});var J=P0(function(){return-1});return E.optional(function(){J.MISSING=!0}),J}else{var bt=new Un(B.thisDep||O.thisDep,B.contextDep||O.contextDep,B.propDep||O.propDep,function(Mt,vt){var Ut=Mt.ELEMENTS;return Mt.OFFSET?vt.def(Ut,"?",Ut,".vertCount-",Mt.OFFSET,":-1"):vt.def(Ut,"?",Ut,".vertCount:-1")});return E.optional(function(){bt.DYNAMIC=!0}),bt}return null}return{elements:B,primitive:H(),count:D(),instances:V(oh,!1),offset:O}}function I0(N,A){var G=N.static,Y=N.dynamic,Z={};return Ot.forEach(function(B){var H=ae(B);function V(O,D){if(B in G){var L=O(G[B]);Z[H]=P0(function(){return L})}else if(B in Y){var X=Y[B];Z[H]=sr(X,function(J,bt){return D(J,bt,J.invoke(bt,X))})}}switch(B){case $2:case T2:case A2:case F2:case N2:case H2:case I2:case q2:case D2:case C2:return V(function(O){return E.commandType(O,"boolean",B,A.commandStr),O},function(O,D,L){return E.optional(function(){O.assert(D,"typeof "+L+'==="boolean"',"invalid flag "+B,O.commandStr)}),L});case O2:return V(function(O){return E.commandParameter(O,rc,"invalid "+B,A.commandStr),rc[O]},function(O,D,L){var X=O.constants.compareFuncs;return E.optional(function(){O.assert(D,L+" in "+X,"invalid "+B+", must be one of "+Object.keys(rc))}),D.def(X,"[",L,"]")});case R2:return V(function(O){return E.command(L0(O)&&O.length===2&&typeof O[0]=="number"&&typeof O[1]=="number"&&O[0]<=O[1],"depth range is 2d array",A.commandStr),O},function(O,D,L){E.optional(function(){O.assert(D,O.shared.isArrayLike+"("+L+")&&"+L+".length===2&&typeof "+L+'[0]==="number"&&typeof '+L+'[1]==="number"&&'+L+"[0]<="+L+"[1]","depth range must be a 2d array")});var X=D.def("+",L,"[0]"),J=D.def("+",L,"[1]");return[X,J]});case Tu:return V(function(O){E.commandType(O,"object","blend.func",A.commandStr);var D="srcRGB"in O?O.srcRGB:O.src,L="srcAlpha"in O?O.srcAlpha:O.src,X="dstRGB"in O?O.dstRGB:O.dst,J="dstAlpha"in O?O.dstAlpha:O.dst;return E.commandParameter(D,ya,H+".srcRGB",A.commandStr),E.commandParameter(L,ya,H+".srcAlpha",A.commandStr),E.commandParameter(X,ya,H+".dstRGB",A.commandStr),E.commandParameter(J,ya,H+".dstAlpha",A.commandStr),E.command(J2.indexOf(D+", "+X)===-1,"unallowed blending combination (srcRGB, dstRGB) = ("+D+", "+X+")",A.commandStr),[ya[D],ya[X],ya[L],ya[J]]},function(O,D,L){var X=O.constants.blendFuncs;E.optional(function(){O.assert(D,L+"&&typeof "+L+'==="object"',"invalid blend func, must be an object")});function J(Le,Ze){var uo=D.def('"',Le,Ze,'" in ',L,"?",L,".",Le,Ze,":",L,".",Le);return E.optional(function(){O.assert(D,uo+" in "+X,"invalid "+B+"."+Le+Ze+", must be one of "+Object.keys(ya))}),uo}var bt=J("src","RGB"),Mt=J("dst","RGB");E.optional(function(){var Le=O.constants.invalidBlendCombinations;O.assert(D,Le+".indexOf("+bt+'+", "+'+Mt+") === -1 ","unallowed blending combination for (srcRGB, dstRGB)")});var vt=D.def(X,"[",bt,"]"),Ut=D.def(X,"[",J("src","Alpha"),"]"),Pe=D.def(X,"[",Mt,"]"),wo=D.def(X,"[",J("dst","Alpha"),"]");return[vt,Pe,Ut,wo]});case Au:return V(function(O){if(typeof O=="string")return E.commandParameter(O,dt,"invalid "+B,A.commandStr),[dt[O],dt[O]];if(typeof O=="object")return E.commandParameter(O.rgb,dt,B+".rgb",A.commandStr),E.commandParameter(O.alpha,dt,B+".alpha",A.commandStr),[dt[O.rgb],dt[O.alpha]];E.commandRaise("invalid blend.equation",A.commandStr)},function(O,D,L){var X=O.constants.blendEquations,J=D.def(),bt=D.def(),Mt=O.cond("typeof ",L,'==="string"');return E.optional(function(){function vt(Ut,Pe,wo){O.assert(Ut,wo+" in "+X,"invalid "+Pe+", must be one of "+Object.keys(dt))}vt(Mt.then,B,L),O.assert(Mt.else,L+"&&typeof "+L+'==="object"',"invalid "+B),vt(Mt.else,B+".rgb",L+".rgb"),vt(Mt.else,B+".alpha",L+".alpha")}),Mt.then(J,"=",bt,"=",X,"[",L,"];"),Mt.else(J,"=",X,"[",L,".rgb];",bt,"=",X,"[",L,".alpha];"),D(Mt),[J,bt]});case L2:return V(function(O){return E.command(L0(O)&&O.length===4,"blend.color must be a 4d array",A.commandStr),gt(4,function(D){return+O[D]})},function(O,D,L){return E.optional(function(){O.assert(D,O.shared.isArrayLike+"("+L+")&&"+L+".length===4","blend.color must be a 4d array")}),gt(4,function(X){return D.def("+",L,"[",X,"]")})});case G2:return V(function(O){return E.commandType(O,"number",H,A.commandStr),O|0},function(O,D,L){return E.optional(function(){O.assert(D,"typeof "+L+'==="number"',"invalid stencil.mask")}),D.def(L,"|0")});case $u:return V(function(O){E.commandType(O,"object",H,A.commandStr);var D=O.cmp||"keep",L=O.ref||0,X="mask"in O?O.mask:-1;return E.commandParameter(D,rc,B+".cmp",A.commandStr),E.commandType(L,"number",B+".ref",A.commandStr),E.commandType(X,"number",B+".mask",A.commandStr),[rc[D],L,X]},function(O,D,L){var X=O.constants.compareFuncs;E.optional(function(){function vt(){O.assert(D,Array.prototype.join.call(arguments,""),"invalid stencil.func")}vt(L+"&&typeof ",L,'==="object"'),vt('!("cmp" in ',L,")||(",L,".cmp in ",X,")")});var J=D.def('"cmp" in ',L,"?",X,"[",L,".cmp]",":",os),bt=D.def(L,".ref|0"),Mt=D.def('"mask" in ',L,"?",L,".mask|0:-1");return[J,bt,Mt]});case Pu:case ml:return V(function(O){E.commandType(O,"object",H,A.commandStr);var D=O.fail||"keep",L=O.zfail||"keep",X=O.zpass||"keep";return E.commandParameter(D,ns,B+".fail",A.commandStr),E.commandParameter(L,ns,B+".zfail",A.commandStr),E.commandParameter(X,ns,B+".zpass",A.commandStr),[B===ml?Qs:zl,ns[D],ns[L],ns[X]]},function(O,D,L){var X=O.constants.stencilOps;E.optional(function(){O.assert(D,L+"&&typeof "+L+'==="object"',"invalid "+B)});function J(bt){return E.optional(function(){O.assert(D,'!("'+bt+'" in '+L+")||("+L+"."+bt+" in "+X+")","invalid "+B+"."+bt+", must be one of "+Object.keys(ns))}),D.def('"',bt,'" in ',L,"?",X,"[",L,".",bt,"]:",os)}return[B===ml?Qs:zl,J("fail"),J("zfail"),J("zpass")]});case Ru:return V(function(O){E.commandType(O,"object",H,A.commandStr);var D=O.factor|0,L=O.units|0;return E.commandType(D,"number",H+".factor",A.commandStr),E.commandType(L,"number",H+".units",A.commandStr),[D,L]},function(O,D,L){E.optional(function(){O.assert(D,L+"&&typeof "+L+'==="object"',"invalid "+B)});var X=D.def(L,".factor|0"),J=D.def(L,".units|0");return[X,J]});case P2:return V(function(O){var D=0;return O==="front"?D=zl:O==="back"&&(D=Qs),E.command(!!D,H,A.commandStr),D},function(O,D,L){return E.optional(function(){O.assert(D,L+'==="front"||'+L+'==="back"',"invalid cull.face")}),D.def(L,'==="front"?',zl,":",Qs)});case Ou:return V(function(O){return E.command(typeof O=="number"&&O>=ct.lineWidthDims[0]&&O<=ct.lineWidthDims[1],"invalid line width, must be a positive number between "+ct.lineWidthDims[0]+" and "+ct.lineWidthDims[1],A.commandStr),O},function(O,D,L){return E.optional(function(){O.assert(D,"typeof "+L+'==="number"&&'+L+">="+ct.lineWidthDims[0]+"&&"+L+"<="+ct.lineWidthDims[1],"invalid line width")}),L});case Nu:return V(function(O){return E.commandParameter(O,Uu,H,A.commandStr),Uu[O]},function(O,D,L){return E.optional(function(){O.assert(D,L+'==="cw"||'+L+'==="ccw"',"invalid frontFace, must be one of cw,ccw")}),D.def(L+'==="cw"?'+X2+":"+Hu)});case Lu:return V(function(O){return E.command(L0(O)&&O.length===4,"color.mask must be length 4 array",A.commandStr),O.map(function(D){return!!D})},function(O,D,L){return E.optional(function(){O.assert(D,O.shared.isArrayLike+"("+L+")&&"+L+".length===4","invalid color.mask")}),gt(4,function(X){return"!!"+L+"["+X+"]"})});case Cu:return V(function(O){E.command(typeof O=="object"&&O,H,A.commandStr);var D="value"in O?O.value:1,L=!!O.invert;return E.command(typeof D=="number"&&D>=0&&D<=1,"sample.coverage.value must be a number between 0 and 1",A.commandStr),[D,L]},function(O,D,L){E.optional(function(){O.assert(D,L+"&&typeof "+L+'==="object"',"invalid sample.coverage")});var X=D.def('"value" in ',L,"?+",L,".value:1"),J=D.def("!!",L,".invert");return[X,J]})}}),Z}function on(N,A){var G=N.static,Y=N.dynamic,Z={};return Object.keys(G).forEach(function(B){var H=G[B],V;if(typeof H=="number"||typeof H=="boolean")V=P0(function(){return H});else if(typeof H=="function"){var O=H._reglType;O==="texture2d"||O==="textureCube"?V=P0(function(D){return D.link(H)}):O==="framebuffer"||O==="framebufferCube"?(E.command(H.color.length>0,'missing color attachment for framebuffer sent to uniform "'+B+'"',A.commandStr),V=P0(function(D){return D.link(H.color[0])})):E.commandRaise('invalid data for uniform "'+B+'"',A.commandStr)}else L0(H)?V=P0(function(D){var L=D.global.def("[",gt(H.length,function(X){return E.command(typeof H[X]=="number"||typeof H[X]=="boolean","invalid uniform "+B,D.commandStr),H[X]}),"]");return L}):E.commandRaise('invalid or missing data for uniform "'+B+'"',A.commandStr);V.value=H,Z[B]=V}),Object.keys(Y).forEach(function(B){var H=Y[B];Z[B]=sr(H,function(V,O){return V.invoke(O,H)})}),Z}function Ro(N,A){var G=N.static,Y=N.dynamic,Z={};return Object.keys(G).forEach(function(B){var H=G[B],V=T.id(B),O=new K;if(uh(H))O.state=tc,O.buffer=_t.getBuffer(_t.create(H,nc,!1,!0)),O.type=0;else{var D=_t.getBuffer(H);if(D)O.state=tc,O.buffer=D,O.type=0;else if(E.command(typeof H=="object"&&H,"invalid data for attribute "+B,A.commandStr),"constant"in H){var L=H.constant;O.buffer="null",O.state=Mu,typeof L=="number"?O.x=L:(E.command(L0(L)&&L.length>0&&L.length<=4,"invalid constant for attribute "+B,A.commandStr),Ji.forEach(function(Pe,wo){wo<L.length&&(O[Pe]=L[wo])}))}else{uh(H.buffer)?D=_t.getBuffer(_t.create(H.buffer,nc,!1,!0)):D=_t.getBuffer(H.buffer),E.command(!!D,'missing buffer for attribute "'+B+'"',A.commandStr);var X=H.offset|0;E.command(X>=0,'invalid offset for attribute "'+B+'"',A.commandStr);var J=H.stride|0;E.command(J>=0&&J<256,'invalid stride for attribute "'+B+'", must be integer betweeen [0, 255]',A.commandStr);var bt=H.size|0;E.command(!("size"in H)||bt>0&&bt<=4,'invalid size for attribute "'+B+'", must be 1,2,3,4',A.commandStr);var Mt=!!H.normalized,vt=0;"type"in H&&(E.commandParameter(H.type,Us,"invalid type for attribute "+B,A.commandStr),vt=Us[H.type]);var Ut=H.divisor|0;"divisor"in H&&(E.command(Ut===0||Bt,'cannot specify divisor for attribute "'+B+'", instancing not supported',A.commandStr),E.command(Ut>=0,'invalid divisor for attribute "'+B+'"',A.commandStr)),E.optional(function(){var Pe=A.commandStr,wo=["buffer","offset","divisor","normalized","type","size","stride"];Object.keys(H).forEach(function(Le){E.command(wo.indexOf(Le)>=0,'unknown parameter "'+Le+'" for attribute pointer "'+B+'" (valid parameters are '+wo+")",Pe)})}),O.buffer=D,O.state=tc,O.size=bt,O.normalized=Mt,O.type=vt||D.dtype,O.offset=X,O.stride=J,O.divisor=Ut}}Z[B]=P0(function(Pe,wo){var Le=Pe.attribCache;if(V in Le)return Le[V];var Ze={isStream:!1};return Object.keys(O).forEach(function(uo){Ze[uo]=O[uo]}),O.buffer&&(Ze.buffer=Pe.link(O.buffer),Ze.type=Ze.type||Ze.buffer+".dtype"),Le[V]=Ze,Ze})}),Object.keys(Y).forEach(function(B){var H=Y[B];function V(O,D){var L=O.invoke(D,H),X=O.shared,J=O.constants,bt=X.isBufferArgs,Mt=X.buffer;E.optional(function(){O.assert(D,L+"&&(typeof "+L+'==="object"||typeof '+L+'==="function")&&('+bt+"("+L+")||"+Mt+".getBuffer("+L+")||"+Mt+".getBuffer("+L+".buffer)||"+bt+"("+L+'.buffer)||("constant" in '+L+"&&(typeof "+L+'.constant==="number"||'+X.isArrayLike+"("+L+".constant))))",'invalid dynamic attribute "'+B+'"')});var vt={isStream:D.def(!1)},Ut=new K;Ut.state=tc,Object.keys(Ut).forEach(function(Ze){vt[Ze]=D.def(""+Ut[Ze])});var Pe=vt.buffer,wo=vt.type;D("if(",bt,"(",L,")){",vt.isStream,"=true;",Pe,"=",Mt,".createStream(",nc,",",L,");",wo,"=",Pe,".dtype;","}else{",Pe,"=",Mt,".getBuffer(",L,");","if(",Pe,"){",wo,"=",Pe,".dtype;",'}else if("constant" in ',L,"){",vt.state,"=",Mu,";","if(typeof "+L+'.constant === "number"){',vt[Ji[0]],"=",L,".constant;",Ji.slice(1).map(function(Ze){return vt[Ze]}).join("="),"=0;","}else{",Ji.map(function(Ze,uo){return vt[Ze]+"="+L+".constant.length>"+uo+"?"+L+".constant["+uo+"]:0;"}).join(""),"}}else{","if(",bt,"(",L,".buffer)){",Pe,"=",Mt,".createStream(",nc,",",L,".buffer);","}else{",Pe,"=",Mt,".getBuffer(",L,".buffer);","}",wo,'="type" in ',L,"?",J.glTypes,"[",L,".type]:",Pe,".dtype;",vt.normalized,"=!!",L,".normalized;");function Le(Ze){D(vt[Ze],"=",L,".",Ze,"|0;")}return Le("size"),Le("offset"),Le("stride"),Le("divisor"),D("}}"),D.exit("if(",vt.isStream,"){",Mt,".destroyStream(",Pe,");","}"),vt}Z[B]=sr(H,V)}),Z}function W0(N,A){var G=N.static,Y=N.dynamic;if(bl in G){var Z=G[bl];return Z!==null&&Vt.getVAO(Z)===null&&(Z=Vt.createVAO(Z)),P0(function(H){return H.link(Vt.getVAO(Z))})}else if(bl in Y){var B=Y[bl];return sr(B,function(H,V){var O=H.invoke(V,B);return V.def(H.shared.vao+".getVAO("+O+")")})}return null}function h0(N){var A=N.static,G=N.dynamic,Y={};return Object.keys(A).forEach(function(Z){var B=A[Z];Y[Z]=P0(function(H,V){return typeof B=="number"||typeof B=="boolean"?""+B:H.link(B)})}),Object.keys(G).forEach(function(Z){var B=G[Z];Y[Z]=sr(B,function(H,V){return H.invoke(V,B)})}),Y}function q0(N,A,G,Y,Z){var B=N.static,H=N.dynamic;E.optional(function(){var Le=[Xs,xl,yl,Ys,Ks,eh,Zs,oh,gl,bl].concat(Ot);function Ze(uo){Object.keys(uo).forEach(function(Bo){E.command(Le.indexOf(Bo)>=0,'unknown parameter "'+Bo+'"',Z.commandStr)})}Ze(B),Ze(H)});var V=ho(N,A),O=Te(N,Z),D=Ao(N,O,Z),L=Uo(N,Z),X=I0(N,Z),J=ko(N,Z,V);function bt(Le){var Ze=D[Le];Ze&&(X[Le]=Ze)}bt(Ra),bt(ae(th));var Mt=Object.keys(X).length>0,vt={framebuffer:O,draw:L,shader:J,state:X,dirty:Mt,scopeVAO:null,drawVAO:null,useVAO:!1,attributes:{}};if(vt.profile=yo(N,Z),vt.uniforms=on(G,Z),vt.drawVAO=vt.scopeVAO=W0(N,Z),!vt.drawVAO&&J.program&&!V&&I.angle_instanced_arrays){var Ut=!0,Pe=J.program.attributes.map(function(Le){var Ze=A.static[Le];return Ut=Ut&&!!Ze,Ze});if(Ut&&Pe.length>0){var wo=Vt.getVAO(Vt.createVAO(Pe));vt.drawVAO=new Un(null,null,null,function(Le,Ze){return Le.link(wo)}),vt.useVAO=!0}}return V?vt.useVAO=!0:vt.attributes=Ro(A,Z),vt.context=h0(Y,Z),vt}function V0(N,A,G){var Y=N.shared,Z=Y.context,B=N.scope();Object.keys(G).forEach(function(H){A.save(Z,"."+H);var V=G[H],O=V.append(N,A);Array.isArray(O)?B(Z,".",H,"=[",O.join(),"];"):B(Z,".",H,"=",O,";")}),A(B)}function X0(N,A,G,Y){var Z=N.shared,B=Z.gl,H=Z.framebuffer,V;ve&&(V=A.def(Z.extensions,".webgl_draw_buffers"));var O=N.constants,D=O.drawBuffer,L=O.backBuffer,X;G?X=G.append(N,A):X=A.def(H,".next"),Y||A("if(",X,"!==",H,".cur){"),A("if(",X,"){",B,".bindFramebuffer(",Q2,",",X,".framebuffer);"),ve&&A(V,".drawBuffersWEBGL(",D,"[",X,".colorAttachments.length]);"),A("}else{",B,".bindFramebuffer(",Q2,",null);"),ve&&A(V,".drawBuffersWEBGL(",L,");"),A("}",H,".cur=",X,";"),Y||A("}")}function pn(N,A,G){var Y=N.shared,Z=Y.gl,B=N.current,H=N.next,V=Y.current,O=Y.next,D=N.cond(V,".dirty");Ot.forEach(function(L){var X=ae(L);if(!(X in G.state)){var J,bt;if(X in H){J=H[X],bt=B[X];var Mt=gt(At[X].length,function(Ut){return D.def(J,"[",Ut,"]")});D(N.cond(Mt.map(function(Ut,Pe){return Ut+"!=="+bt+"["+Pe+"]"}).join("||")).then(Z,".",Lt[X],"(",Mt,");",Mt.map(function(Ut,Pe){return bt+"["+Pe+"]="+Ut}).join(";"),";"))}else{J=D.def(O,".",X);var vt=N.cond(J,"!==",V,".",X);D(vt),X in re?vt(N.cond(J).then(Z,".enable(",re[X],");").else(Z,".disable(",re[X],");"),V,".",X,"=",J,";"):vt(Z,".",Lt[X],"(",J,");",V,".",X,"=",J,";")}}}),Object.keys(G.state).length===0&&D(V,".dirty=false;"),A(D)}function _n(N,A,G,Y){var Z=N.shared,B=N.current,H=Z.current,V=Z.gl;em(Object.keys(G)).forEach(function(O){var D=G[O];if(!(Y&&!Y(D))){var L=D.append(N,A);if(re[O]){var X=re[O];rs(D)?L?A(V,".enable(",X,");"):A(V,".disable(",X,");"):A(N.cond(L).then(V,".enable(",X,");").else(V,".disable(",X,");")),A(H,".",O,"=",L,";")}else if(L0(L)){var J=B[O];A(V,".",Lt[O],"(",L,");",L.map(function(bt,Mt){return J+"["+Mt+"]="+bt}).join(";"),";")}else A(V,".",Lt[O],"(",L,");",H,".",O,"=",L,";")}})}function N0(N,A){Bt&&(N.instancing=A.def(N.shared.extensions,".angle_instanced_arrays"))}function bo(N,A,G,Y,Z){var B=N.shared,H=N.stats,V=B.current,O=B.timer,D=G.profile;function L(){return typeof performance=="undefined"?"Date.now()":"performance.now()"}var X,J;function bt(Le){X=A.def(),Le(X,"=",L(),";"),typeof Z=="string"?Le(H,".count+=",Z,";"):Le(H,".count++;"),Pt&&(Y?(J=A.def(),Le(J,"=",O,".getNumPendingQueries();")):Le(O,".beginQuery(",H,");"))}function Mt(Le){Le(H,".cpuTime+=",L(),"-",X,";"),Pt&&(Y?Le(O,".pushScopeStats(",J,",",O,".getNumPendingQueries(),",H,");"):Le(O,".endQuery();"))}function vt(Le){var Ze=A.def(V,".profile");A(V,".profile=",Le,";"),A.exit(V,".profile=",Ze,";")}var Ut;if(D){if(rs(D)){D.enable?(bt(A),Mt(A.exit),vt("true")):vt("false");return}Ut=D.append(N,A),vt(Ut)}else Ut=A.def(V,".profile");var Pe=N.block();bt(Pe),A("if(",Ut,"){",Pe,"}");var wo=N.block();Mt(wo),A.exit("if(",Ut,"){",wo,"}")}function Mn(N,A,G,Y,Z){var B=N.shared;function H(O){switch(O){case nh:case sh:case lh:return 2;case rh:case ih:case fh:return 3;case ah:case ch:case hh:return 4;default:return 1}}function V(O,D,L){var X=B.gl,J=A.def(O,".location"),bt=A.def(B.attributes,"[",J,"]"),Mt=L.state,vt=L.buffer,Ut=[L.x,L.y,L.z,L.w],Pe=["buffer","normalized","offset","stride"];function wo(){A("if(!",bt,".buffer){",X,".enableVertexAttribArray(",J,");}");var Ze=L.type,uo;if(L.size?uo=A.def(L.size,"||",D):uo=D,A("if(",bt,".type!==",Ze,"||",bt,".size!==",uo,"||",Pe.map(function(k0){return bt+"."+k0+"!=="+L[k0]}).join("||"),"){",X,".bindBuffer(",nc,",",vt,".buffer);",X,".vertexAttribPointer(",[J,uo,Ze,L.normalized,L.stride,L.offset],");",bt,".type=",Ze,";",bt,".size=",uo,";",Pe.map(function(k0){return bt+"."+k0+"="+L[k0]+";"}).join(""),"}"),Bt){var Bo=L.divisor;A("if(",bt,".divisor!==",Bo,"){",N.instancing,".vertexAttribDivisorANGLE(",[J,Bo],");",bt,".divisor=",Bo,";}")}}function Le(){A("if(",bt,".buffer){",X,".disableVertexAttribArray(",J,");",bt,".buffer=null;","}if(",Ji.map(function(Ze,uo){return bt+"."+Ze+"!=="+Ut[uo]}).join("||"),"){",X,".vertexAttrib4f(",J,",",Ut,");",Ji.map(function(Ze,uo){return bt+"."+Ze+"="+Ut[uo]+";"}).join(""),"}")}Mt===tc?wo():Mt===Mu?Le():(A("if(",Mt,"===",tc,"){"),wo(),A("}else{"),Le(),A("}"))}Y.forEach(function(O){var D=O.name,L=G.attributes[D],X;if(L){if(!Z(L))return;X=L.append(N,A)}else{if(!Z(om))return;var J=N.scopeAttrib(D);E.optional(function(){N.assert(A,J+".state","missing attribute "+D)}),X={},Object.keys(new K).forEach(function(bt){X[bt]=A.def(J,".",bt)})}V(N.link(O),H(O.info.type),X)})}function Yo(N,A,G,Y,Z){for(var B=N.shared,H=B.gl,V,O=0;O<Y.length;++O){var D=Y[O],L=D.name,X=D.info.type,J=G.uniforms[L],bt=N.link(D),Mt=bt+".location",vt;if(J){if(!Z(J))continue;if(rs(J)){var Ut=J.value;if(E.command(Ut!==null&&typeof Ut!="undefined",'missing uniform "'+L+'"',N.commandStr),X===Sl||X===kl){E.command(typeof Ut=="function"&&(X===Sl&&(Ut._reglType==="texture2d"||Ut._reglType==="framebuffer")||X===kl&&(Ut._reglType==="textureCube"||Ut._reglType==="framebufferCube")),"invalid texture for uniform "+L,N.commandStr);var Pe=N.link(Ut._texture||Ut.color[0]._texture);A(H,".uniform1i(",Mt,",",Pe+".bind());"),A.exit(Pe,".unbind();")}else if(X===wl||X===_l||X===Ml){E.optional(function(){E.command(L0(Ut),"invalid matrix for uniform "+L,N.commandStr),E.command(X===wl&&Ut.length===4||X===_l&&Ut.length===9||X===Ml&&Ut.length===16,"invalid length for matrix uniform "+L,N.commandStr)});var wo=N.global.def("new Float32Array(["+Array.prototype.slice.call(Ut)+"])"),Le=2;X===_l?Le=3:X===Ml&&(Le=4),A(H,".uniformMatrix",Le,"fv(",Mt,",false,",wo,");")}else{switch(X){case Du:E.commandType(Ut,"number","uniform "+L,N.commandStr),V="1f";break;case nh:E.command(L0(Ut)&&Ut.length===2,"uniform "+L,N.commandStr),V="2f";break;case rh:E.command(L0(Ut)&&Ut.length===3,"uniform "+L,N.commandStr),V="3f";break;case ah:E.command(L0(Ut)&&Ut.length===4,"uniform "+L,N.commandStr),V="4f";break;case Gu:E.commandType(Ut,"boolean","uniform "+L,N.commandStr),V="1i";break;case Fu:E.commandType(Ut,"number","uniform "+L,N.commandStr),V="1i";break;case lh:E.command(L0(Ut)&&Ut.length===2,"uniform "+L,N.commandStr),V="2i";break;case sh:E.command(L0(Ut)&&Ut.length===2,"uniform "+L,N.commandStr),V="2i";break;case fh:E.command(L0(Ut)&&Ut.length===3,"uniform "+L,N.commandStr),V="3i";break;case ih:E.command(L0(Ut)&&Ut.length===3,"uniform "+L,N.commandStr),V="3i";break;case hh:E.command(L0(Ut)&&Ut.length===4,"uniform "+L,N.commandStr),V="4i";break;case ch:E.command(L0(Ut)&&Ut.length===4,"uniform "+L,N.commandStr),V="4i";break}A(H,".uniform",V,"(",Mt,",",L0(Ut)?Array.prototype.slice.call(Ut):Ut,");")}continue}else vt=J.append(N,A)}else{if(!Z(om))continue;vt=A.def(B.uniforms,"[",T.id(L),"]")}X===Sl?(E(!Array.isArray(vt),"must specify a scalar prop for textures"),A("if(",vt,"&&",vt,'._reglType==="framebuffer"){',vt,"=",vt,".color[0];","}")):X===kl&&(E(!Array.isArray(vt),"must specify a scalar prop for cube maps"),A("if(",vt,"&&",vt,'._reglType==="framebufferCube"){',vt,"=",vt,".color[0];","}")),E.optional(function(){function Bn(na,lm){N.assert(A,na,'bad data or missing for uniform "'+L+'".  '+lm)}function Bu(na){E(!Array.isArray(vt),"must not specify an array type for uniform"),Bn("typeof "+vt+'==="'+na+'"',"invalid type, expected "+na)}function Ir(na,lm){Array.isArray(vt)?E(vt.length===na,"must have length "+na):Bn(B.isArrayLike+"("+vt+")&&"+vt+".length==="+na,"invalid vector, should have length "+na,N.commandStr)}function cm(na){E(!Array.isArray(vt),"must not specify a value type"),Bn("typeof "+vt+'==="function"&&'+vt+'._reglType==="texture'+(na===W2?"2d":"Cube")+'"',"invalid texture type",N.commandStr)}switch(X){case Fu:Bu("number");break;case sh:Ir(2,"number");break;case ih:Ir(3,"number");break;case ch:Ir(4,"number");break;case Du:Bu("number");break;case nh:Ir(2,"number");break;case rh:Ir(3,"number");break;case ah:Ir(4,"number");break;case Gu:Bu("boolean");break;case lh:Ir(2,"boolean");break;case fh:Ir(3,"boolean");break;case hh:Ir(4,"boolean");break;case wl:Ir(4,"number");break;case _l:Ir(9,"number");break;case Ml:Ir(16,"number");break;case Sl:cm(W2);break;case kl:cm(c6);break}});var Ze=1;switch(X){case Sl:case kl:var uo=A.def(vt,"._texture");A(H,".uniform1i(",Mt,",",uo,".bind());"),A.exit(uo,".unbind();");continue;case Fu:case Gu:V="1i";break;case sh:case lh:V="2i",Ze=2;break;case ih:case fh:V="3i",Ze=3;break;case ch:case hh:V="4i",Ze=4;break;case Du:V="1f";break;case nh:V="2f",Ze=2;break;case rh:V="3f",Ze=3;break;case ah:V="4f",Ze=4;break;case wl:V="Matrix2fv";break;case _l:V="Matrix3fv";break;case Ml:V="Matrix4fv";break}if(A(H,".uniform",V,"(",Mt,","),V.charAt(0)==="M"){var Bo=Math.pow(X-wl+2,2),k0=N.global.def("new Float32Array(",Bo,")");Array.isArray(vt)?A("false,(",gt(Bo,function(Bn){return k0+"["+Bn+"]="+vt[Bn]}),",",k0,")"):A("false,(Array.isArray(",vt,")||",vt," instanceof Float32Array)?",vt,":(",gt(Bo,function(Bn){return k0+"["+Bn+"]="+vt+"["+Bn+"]"}),",",k0,")")}else Ze>1?A(gt(Ze,function(Bn){return Array.isArray(vt)?vt[Bn]:vt+"["+Bn+"]"})):(E(!Array.isArray(vt),"uniform value must not be an array"),A(vt));A(");")}}function Ke(N,A,G,Y){var Z=N.shared,B=Z.gl,H=Z.draw,V=Y.draw;function O(){var uo=V.elements,Bo,k0=A;return uo?((uo.contextDep&&Y.contextDynamic||uo.propDep)&&(k0=G),Bo=uo.append(N,k0)):Bo=k0.def(H,".",Ys),Bo&&k0("if("+Bo+")"+B+".bindBuffer("+a6+","+Bo+".buffer.buffer);"),Bo}function D(){var uo=V.count,Bo,k0=A;return uo?((uo.contextDep&&Y.contextDynamic||uo.propDep)&&(k0=G),Bo=uo.append(N,k0),E.optional(function(){uo.MISSING&&N.assert(A,"false","missing vertex count"),uo.DYNAMIC&&N.assert(k0,Bo+">=0","missing vertex count")})):(Bo=k0.def(H,".",Zs),E.optional(function(){N.assert(k0,Bo+">=0","missing vertex count")})),Bo}var L=O();function X(uo){var Bo=V[uo];return Bo?Bo.contextDep&&Y.contextDynamic||Bo.propDep?Bo.append(N,G):Bo.append(N,A):A.def(H,".",uo)}var J=X(Ks),bt=X(eh),Mt=D();if(typeof Mt=="number"){if(Mt===0)return}else G("if(",Mt,"){"),G.exit("}");var vt,Ut;Bt&&(vt=X(oh),Ut=N.instancing);var Pe=L+".type",wo=V.elements&&rs(V.elements);function Le(){function uo(){G(Ut,".drawElementsInstancedANGLE(",[J,Mt,Pe,bt+"<<(("+Pe+"-"+k2+")>>1)",vt],");")}function Bo(){G(Ut,".drawArraysInstancedANGLE(",[J,bt,Mt,vt],");")}L?wo?uo():(G("if(",L,"){"),uo(),G("}else{"),Bo(),G("}")):Bo()}function Ze(){function uo(){G(B+".drawElements("+[J,Mt,Pe,bt+"<<(("+Pe+"-"+k2+")>>1)"]+");")}function Bo(){G(B+".drawArrays("+[J,bt,Mt]+");")}L?wo?uo():(G("if(",L,"){"),uo(),G("}else{"),Bo(),G("}")):Bo()}Bt&&(typeof vt!="number"||vt>=0)?typeof vt=="string"?(G("if(",vt,">0){"),Le(),G("}else if(",vt,"<0){"),Ze(),G("}")):Le():Ze()}function No(N,A,G,Y,Z){var B=ro(),H=B.proc("body",Z);return E.optional(function(){B.commandStr=A.commandStr,B.command=B.link(A.commandStr)}),Bt&&(B.instancing=H.def(B.shared.extensions,".angle_instanced_arrays")),N(B,H,G,Y),B.compile().body}function Do(N,A,G,Y){N0(N,A),G.useVAO?G.drawVAO?A(N.shared.vao,".setVAO(",G.drawVAO.append(N,A),");"):A(N.shared.vao,".setVAO(",N.shared.vao,".targetVAO);"):(A(N.shared.vao,".setVAO(null);"),Mn(N,A,G,Y.attributes,function(){return!0})),Yo(N,A,G,Y.uniforms,function(){return!0}),Ke(N,A,A,G)}function O0(N,A){var G=N.proc("draw",1);N0(N,G),V0(N,G,A.context),X0(N,G,A.framebuffer),pn(N,G,A),_n(N,G,A.state),bo(N,G,A,!1,!0);var Y=A.shader.progVar.append(N,G);if(G(N.shared.gl,".useProgram(",Y,".program);"),A.shader.program)Do(N,G,A,A.shader.program);else{G(N.shared.vao,".setVAO(null);");var Z=N.global.def("{}"),B=G.def(Y,".id"),H=G.def(Z,"[",B,"]");G(N.cond(H).then(H,".call(this,a0);").else(H,"=",Z,"[",B,"]=",N.link(function(V){return No(Do,N,A,V,1)}),"(",Y,");",H,".call(this,a0);"))}Object.keys(A.state).length>0&&G(N.shared.current,".dirty=true;")}function ba(N,A,G,Y){N.batchId="a1",N0(N,A);function Z(){return!0}Mn(N,A,G,Y.attributes,Z),Yo(N,A,G,Y.uniforms,Z),Ke(N,A,A,G)}function Js(N,A,G,Y){N0(N,A);var Z=G.contextDep,B=A.def(),H="a0",V="a1",O=A.def();N.shared.props=O,N.batchId=B;var D=N.scope(),L=N.scope();A(D.entry,"for(",B,"=0;",B,"<",V,";++",B,"){",O,"=",H,"[",B,"];",L,"}",D.exit);function X(Pe){return Pe.contextDep&&Z||Pe.propDep}function J(Pe){return!X(Pe)}if(G.needsContext&&V0(N,L,G.context),G.needsFramebuffer&&X0(N,L,G.framebuffer),_n(N,L,G.state,X),G.profile&&X(G.profile)&&bo(N,L,G,!1,!0),Y)G.useVAO?G.drawVAO?X(G.drawVAO)?L(N.shared.vao,".setVAO(",G.drawVAO.append(N,L),");"):D(N.shared.vao,".setVAO(",G.drawVAO.append(N,D),");"):D(N.shared.vao,".setVAO(",N.shared.vao,".targetVAO);"):(D(N.shared.vao,".setVAO(null);"),Mn(N,D,G,Y.attributes,J),Mn(N,L,G,Y.attributes,X)),Yo(N,D,G,Y.uniforms,J),Yo(N,L,G,Y.uniforms,X),Ke(N,D,L,G);else{var bt=N.global.def("{}"),Mt=G.shader.progVar.append(N,L),vt=L.def(Mt,".id"),Ut=L.def(bt,"[",vt,"]");L(N.shared.gl,".useProgram(",Mt,".program);","if(!",Ut,"){",Ut,"=",bt,"[",vt,"]=",N.link(function(Pe){return No(ba,N,G,Pe,2)}),"(",Mt,");}",Ut,".call(this,a0[",B,"],",B,");")}}function $(N,A){var G=N.proc("batch",2);N.batchId="0",N0(N,G);var Y=!1,Z=!0;Object.keys(A.context).forEach(function(bt){Y=Y||A.context[bt].propDep}),Y||(V0(N,G,A.context),Z=!1);var B=A.framebuffer,H=!1;B?(B.propDep?Y=H=!0:B.contextDep&&Y&&(H=!0),H||X0(N,G,B)):X0(N,G,null),A.state.viewport&&A.state.viewport.propDep&&(Y=!0);function V(bt){return bt.contextDep&&Y||bt.propDep}pn(N,G,A),_n(N,G,A.state,function(bt){return!V(bt)}),(!A.profile||!V(A.profile))&&bo(N,G,A,!1,"a1"),A.contextDep=Y,A.needsContext=Z,A.needsFramebuffer=H;var O=A.shader.progVar;if(O.contextDep&&Y||O.propDep)Js(N,G,A,null);else{var D=O.append(N,G);if(G(N.shared.gl,".useProgram(",D,".program);"),A.shader.program)Js(N,G,A,A.shader.program);else{G(N.shared.vao,".setVAO(null);");var L=N.global.def("{}"),X=G.def(D,".id"),J=G.def(L,"[",X,"]");G(N.cond(J).then(J,".call(this,a0,a1);").else(J,"=",L,"[",X,"]=",N.link(function(bt){return No(Js,N,A,bt,2)}),"(",D,");",J,".call(this,a0,a1);"))}}Object.keys(A.state).length>0&&G(N.shared.current,".dirty=true;")}function lt(N,A){var G=N.proc("scope",3);N.batchId="a2";var Y=N.shared,Z=Y.current;V0(N,G,A.context),A.framebuffer&&A.framebuffer.append(N,G),em(Object.keys(A.state)).forEach(function(H){var V=A.state[H],O=V.append(N,G);L0(O)?O.forEach(function(D,L){G.set(N.next[H],"["+L+"]",D)}):G.set(Y.next,"."+H,O)}),bo(N,G,A,!0,!0),[Ys,eh,Zs,oh,Ks].forEach(function(H){var V=A.draw[H];V&&G.set(Y.draw,"."+H,""+V.append(N,G))}),Object.keys(A.uniforms).forEach(function(H){var V=A.uniforms[H].append(N,G);Array.isArray(V)&&(V="["+V.join()+"]"),G.set(Y.uniforms,"["+T.id(H)+"]",V)}),Object.keys(A.attributes).forEach(function(H){var V=A.attributes[H].append(N,G),O=N.scopeAttrib(H);Object.keys(new K).forEach(function(D){G.set(O,"."+D,V[D])})}),A.scopeVAO&&G.set(Y.vao,".targetVAO",A.scopeVAO.append(N,G));function B(H){var V=A.shader[H];V&&G.set(Y.shader,"."+H,V.append(N,G))}B(xl),B(yl),Object.keys(A.state).length>0&&(G(Z,".dirty=true;"),G.exit(Z,".dirty=true;")),G("a1(",N.shared.context,",a0,",N.batchId,");")}function nt(N){if(!(typeof N!="object"||L0(N))){for(var A=Object.keys(N),G=0;G<A.length;++G)if(jt.isDynamic(N[A[G]]))return!0;return!1}}function Me(N,A,G){var Y=A.static[G];if(!Y||!nt(Y))return;var Z=N.global,B=Object.keys(Y),H=!1,V=!1,O=!1,D=N.global.def("{}");B.forEach(function(X){var J=Y[X];if(jt.isDynamic(J)){typeof J=="function"&&(J=Y[X]=jt.unbox(J));var bt=sr(J,null);H=H||bt.thisDep,O=O||bt.propDep,V=V||bt.contextDep}else{switch(Z(D,".",X,"="),typeof J){case"number":Z(J);break;case"string":Z('"',J,'"');break;case"object":Array.isArray(J)&&Z("[",J.join(),"]");break;default:Z(N.link(J));break}Z(";")}});function L(X,J){B.forEach(function(bt){var Mt=Y[bt];if(jt.isDynamic(Mt)){var vt=X.invoke(J,Mt);J(D,".",bt,"=",vt,";")}})}A.dynamic[G]=new jt.DynamicVariable(Jf,{thisDep:H,contextDep:V,propDep:O,ref:D,append:L}),delete A.static[G]}function To(N,A,G,Y,Z){var B=ro();B.stats=B.link(Z),Object.keys(A.static).forEach(function(V){Me(B,A,V)}),r6.forEach(function(V){Me(B,N,V)});var H=q0(N,A,G,Y,B);return O0(B,H),lt(B,H),$(B,H),e(B.compile(),{destroy:function(){H.shader.program.destroy()}})}return{next:ye,current:At,procs:function(){var N=ro(),A=N.proc("poll"),G=N.proc("refresh"),Y=N.block();A(Y),G(Y);var Z=N.shared,B=Z.gl,H=Z.next,V=Z.current;Y(V,".dirty=false;"),X0(N,A),X0(N,G,null,!0);var O;Bt&&(O=N.link(Bt)),I.oes_vertex_array_object&&G(N.link(I.oes_vertex_array_object),".bindVertexArrayOES(null);");for(var D=0;D<ct.maxAttributes;++D){var L=G.def(Z.attributes,"[",D,"]"),X=N.cond(L,".buffer");X.then(B,".enableVertexAttribArray(",D,");",B,".bindBuffer(",nc,",",L,".buffer.buffer);",B,".vertexAttribPointer(",D,",",L,".size,",L,".type,",L,".normalized,",L,".stride,",L,".offset);").else(B,".disableVertexAttribArray(",D,");",B,".vertexAttrib4f(",D,",",L,".x,",L,".y,",L,".z,",L,".w);",L,".buffer=null;"),G(X),Bt&&G(O,".vertexAttribDivisorANGLE(",D,",",L,".divisor);")}return G(N.shared.vao,".currentVAO=null;",N.shared.vao,".setVAO(",N.shared.vao,".targetVAO);"),Object.keys(re).forEach(function(J){var bt=re[J],Mt=Y.def(H,".",J),vt=N.block();vt("if(",Mt,"){",B,".enable(",bt,")}else{",B,".disable(",bt,")}",V,".",J,"=",Mt,";"),G(vt),A("if(",Mt,"!==",V,".",J,"){",vt,"}")}),Object.keys(Lt).forEach(function(J){var bt=Lt[J],Mt=At[J],vt,Ut,Pe=N.block();if(Pe(B,".",bt,"("),L0(Mt)){var wo=Mt.length;vt=N.global.def(H,".",J),Ut=N.global.def(V,".",J),Pe(gt(wo,function(Le){return vt+"["+Le+"]"}),");",gt(wo,function(Le){return Ut+"["+Le+"]="+vt+"["+Le+"];"}).join("")),A("if(",gt(wo,function(Le){return vt+"["+Le+"]!=="+Ut+"["+Le+"]"}).join("||"),"){",Pe,"}")}else vt=Y.def(H,".",J),Ut=Y.def(V,".",J),Pe(vt,");",V,".",J,"=",vt,";"),A("if(",vt,"!==",Ut,"){",Pe,"}");G(Pe)}),N.compile()}(),compile:To}}function S6(){return{vaoCount:0,bufferCount:0,elementsCount:0,framebufferCount:0,shaderCount:0,textureCount:0,cubeCount:0,renderbufferCount:0,maxTextureUnits:0}}var k6=34918,z6=34919,nm=35007,E6=function(w,T){if(!T.ext_disjoint_timer_query)return null;var I=[];function ct(){return I.pop()||T.ext_disjoint_timer_query.createQueryEXT()}function _t(Bt){I.push(Bt)}var st=[];function ut(Bt){var ve=ct();T.ext_disjoint_timer_query.beginQueryEXT(nm,ve),st.push(ve),Pt(st.length-1,st.length,Bt)}function $t(){T.ext_disjoint_timer_query.endQueryEXT(nm)}function Gt(){this.startQueryIndex=-1,this.endQueryIndex=-1,this.sum=0,this.stats=null}var Vt=[];function Ht(){return Vt.pop()||new Gt}function ee(Bt){Vt.push(Bt)}var le=[];function Pt(Bt,ve,At){var ye=Ht();ye.startQueryIndex=Bt,ye.endQueryIndex=ve,ye.sum=0,ye.stats=At,le.push(ye)}var oe=[],K=[];function dt(){var Bt,ve,At=st.length;if(At!==0){K.length=Math.max(K.length,At+1),oe.length=Math.max(oe.length,At+1),oe[0]=0,K[0]=0;var ye=0;for(Bt=0,ve=0;ve<st.length;++ve){var Ot=st[ve];T.ext_disjoint_timer_query.getQueryObjectEXT(Ot,z6)?(ye+=T.ext_disjoint_timer_query.getQueryObjectEXT(Ot,k6),_t(Ot)):st[Bt++]=Ot,oe[ve+1]=ye,K[ve+1]=Bt}for(st.length=Bt,Bt=0,ve=0;ve<le.length;++ve){var re=le[ve],Lt=re.startQueryIndex,ae=re.endQueryIndex;re.sum+=oe[ae]-oe[Lt];var Be=K[Lt],fo=K[ae];fo===Be?(re.stats.gpuTime+=re.sum/1e6,ee(re)):(re.startQueryIndex=Be,re.endQueryIndex=fo,le[Bt++]=re)}le.length=Bt}}return{beginQuery:ut,endQuery:$t,pushScopeStats:Pt,update:dt,getNumPendingQueries:function(){return st.length},clear:function(){I.push.apply(I,st);for(var Bt=0;Bt<I.length;Bt++)T.ext_disjoint_timer_query.deleteQueryEXT(I[Bt]);st.length=0,I.length=0},restore:function(){st.length=0,I.length=0}}},A6=16384,T6=256,L6=1024,N6=34962,rm="webglcontextlost",am="webglcontextrestored",sm=1,O6=2,R6=3;function im(w,T){for(var I=0;I<w.length;++I)if(w[I]===T)return I;return-1}function C6(w){var T=Ve(w);if(!T)return null;var I=T.gl,ct=I.getContextAttributes(),_t=I.isContextLost(),st=ot(I,T);if(!st)return null;var ut=Ae(),$t=S6(),Gt=st.extensions,Vt=E6(I,Gt),Ht=Ft(),ee=I.drawingBufferWidth,le=I.drawingBufferHeight,Pt={tick:0,time:0,viewportWidth:ee,viewportHeight:le,framebufferWidth:ee,framebufferHeight:le,drawingBufferWidth:ee,drawingBufferHeight:le,pixelRatio:T.pixelRatio},oe={},K={elements:null,primitive:4,count:-1,offset:0,instances:-1},dt=yw(I,Gt),Bt=$w(I,$t,T,At),ve=V4(I,Gt,dt,$t,Bt);function At(Ke){return ve.destroyBuffer(Ke)}var ye=Vw(I,Gt,Bt,$t),Ot=Z4(I,ut,$t,T),re=S4(I,Gt,dt,function(){Be.procs.poll()},Pt,$t,T),Lt=k4(I,Gt,dt,$t,T),ae=j4(I,Gt,dt,re,Lt,$t),Be=M6(I,ut,Gt,dt,Bt,ye,re,ae,oe,ve,Ot,K,Pt,Vt,T),fo=t6(I,ae,Be.procs.poll,Pt,ct,Gt,dt),fe=Be.next,Xt=I.canvas,Et=[],ro=[],yo=[],Te=[T.onDestroy],Ao=null;function ho(){if(Et.length===0){Vt&&Vt.update(),Ao=null;return}Ao=Yt.next(ho),_n();for(var Ke=Et.length-1;Ke>=0;--Ke){var No=Et[Ke];No&&No(Pt,null,0)}I.flush(),Vt&&Vt.update()}function ko(){!Ao&&Et.length>0&&(Ao=Yt.next(ho))}function Uo(){Ao&&(Yt.cancel(ho),Ao=null)}function I0(Ke){Ke.preventDefault(),_t=!0,Uo(),ro.forEach(function(No){No()})}function on(Ke){I.getError(),_t=!1,st.restore(),Ot.restore(),Bt.restore(),re.restore(),Lt.restore(),ae.restore(),ve.restore(),Vt&&Vt.restore(),Be.procs.refresh(),ko(),yo.forEach(function(No){No()})}Xt&&(Xt.addEventListener(rm,I0,!1),Xt.addEventListener(am,on,!1));function Ro(){Et.length=0,Uo(),Xt&&(Xt.removeEventListener(rm,I0),Xt.removeEventListener(am,on)),Ot.clear(),ae.clear(),Lt.clear(),re.clear(),ye.clear(),Bt.clear(),ve.clear(),Vt&&Vt.clear(),Te.forEach(function(Ke){Ke()})}function W0(Ke){E(!!Ke,"invalid args to regl({...})"),E.type(Ke,"object","invalid args to regl({...})");function No(Z){var B=e({},Z);delete B.uniforms,delete B.attributes,delete B.context,delete B.vao,"stencil"in B&&B.stencil.op&&(B.stencil.opBack=B.stencil.opFront=B.stencil.op,delete B.stencil.op);function H(V){if(V in B){var O=B[V];delete B[V],Object.keys(O).forEach(function(D){B[V+"."+D]=O[D]})}}return H("blend"),H("depth"),H("cull"),H("stencil"),H("polygonOffset"),H("scissor"),H("sample"),"vao"in Z&&(B.vao=Z.vao),B}function Do(Z,B){var H={},V={};return Object.keys(Z).forEach(function(O){var D=Z[O];if(jt.isDynamic(D)){V[O]=jt.unbox(D,O);return}else if(B&&Array.isArray(D)){for(var L=0;L<D.length;++L)if(jt.isDynamic(D[L])){V[O]=jt.unbox(D,O);return}}H[O]=D}),{dynamic:V,static:H}}var O0=Do(Ke.context||{},!0),ba=Do(Ke.uniforms||{},!0),Js=Do(Ke.attributes||{},!1),$=Do(No(Ke),!1),lt={gpuTime:0,cpuTime:0,count:0},nt=Be.compile($,Js,ba,O0,lt),Me=nt.draw,To=nt.batch,N=nt.scope,A=[];function G(Z){for(;A.length<Z;)A.push(null);return A}function Y(Z,B){var H;if(_t&&E.raise("context lost"),typeof Z=="function")return N.call(this,null,Z,0);if(typeof B=="function")if(typeof Z=="number")for(H=0;H<Z;++H)N.call(this,null,B,H);else if(Array.isArray(Z))for(H=0;H<Z.length;++H)N.call(this,Z[H],B,H);else return N.call(this,Z,B,0);else if(typeof Z=="number"){if(Z>0)return To.call(this,G(Z|0),Z|0)}else if(Array.isArray(Z)){if(Z.length)return To.call(this,Z,Z.length)}else return Me.call(this,Z)}return e(Y,{stats:lt,destroy:function(){nt.destroy()}})}var h0=ae.setFBO=W0({framebuffer:jt.define.call(null,sm,"framebuffer")});function q0(Ke,No){var Do=0;Be.procs.poll();var O0=No.color;O0&&(I.clearColor(+O0[0]||0,+O0[1]||0,+O0[2]||0,+O0[3]||0),Do|=A6),"depth"in No&&(I.clearDepth(+No.depth),Do|=T6),"stencil"in No&&(I.clearStencil(No.stencil|0),Do|=L6),E(!!Do,"called regl.clear with no buffer specified"),I.clear(Do)}function V0(Ke){if(E(typeof Ke=="object"&&Ke,"regl.clear() takes an object as input"),"framebuffer"in Ke)if(Ke.framebuffer&&Ke.framebuffer_reglType==="framebufferCube")for(var No=0;No<6;++No)h0(e({framebuffer:Ke.framebuffer.faces[No]},Ke),q0);else h0(Ke,q0);else q0(null,Ke)}function X0(Ke){E.type(Ke,"function","regl.frame() callback must be a function"),Et.push(Ke);function No(){var Do=im(Et,Ke);E(Do>=0,"cannot cancel a frame twice");function O0(){var ba=im(Et,O0);Et[ba]=Et[Et.length-1],Et.length-=1,Et.length<=0&&Uo()}Et[Do]=O0}return ko(),{cancel:No}}function pn(){var Ke=fe.viewport,No=fe.scissor_box;Ke[0]=Ke[1]=No[0]=No[1]=0,Pt.viewportWidth=Pt.framebufferWidth=Pt.drawingBufferWidth=Ke[2]=No[2]=I.drawingBufferWidth,Pt.viewportHeight=Pt.framebufferHeight=Pt.drawingBufferHeight=Ke[3]=No[3]=I.drawingBufferHeight}function _n(){Pt.tick+=1,Pt.time=bo(),pn(),Be.procs.poll()}function N0(){re.refresh(),pn(),Be.procs.refresh(),Vt&&Vt.update()}function bo(){return(Ft()-Ht)/1e3}N0();function Mn(Ke,No){E.type(No,"function","listener callback must be a function");var Do;switch(Ke){case"frame":return X0(No);case"lost":Do=ro;break;case"restore":Do=yo;break;case"destroy":Do=Te;break;default:E.raise("invalid event, must be one of frame,lost,restore,destroy")}return Do.push(No),{cancel:function(){for(var O0=0;O0<Do.length;++O0)if(Do[O0]===No){Do[O0]=Do[Do.length-1],Do.pop();return}}}}var Yo=e(W0,{clear:V0,prop:jt.define.bind(null,sm),context:jt.define.bind(null,O6),this:jt.define.bind(null,R6),draw:W0({}),buffer:function(Ke){return Bt.create(Ke,N6,!1,!1)},elements:function(Ke){return ye.create(Ke,!1)},texture:re.create2D,cube:re.createCube,renderbuffer:Lt.create,framebuffer:ae.create,framebufferCube:ae.createCube,vao:ve.createVAO,attributes:ct,frame:X0,on:Mn,limits:dt,hasExtension:function(Ke){return dt.extensions.indexOf(Ke.toLowerCase())>=0},read:fo,destroy:Ro,_gl:I,_refresh:N0,poll:function(){_n(),Vt&&Vt.update()},now:bo,stats:$t});return T.onDone(null,Yo),Yo}return C6})});var ti=Tt((FE,Lm)=>{"use strict";var Ca=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],$a=(t,e)=>[t[0]+e[0],t[1]+e[1],t[2]+e[2]],_a=(t,e)=>[t[0]*e,t[1]*e,t[2]*e],bh=(t,e)=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2],Rl=(t,e)=>[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]],td=t=>Math.hypot(t[0],t[1],t[2]),Dr=t=>{let e=td(t)||1;return[t[0]/e,t[1]/e,t[2]/e]};function hc(t,e){let o=t.length-1,r=Math.min(Math.max(e,0),1)*o,n=Math.min(o-1,Math.floor(r)),a=r-n,s=t[Math.max(0,n-1)],i=t[n],c=t[n+1],f=t[Math.min(o,n+2)],l=[0,0,0];for(let v=0;v<3;v++)l[v]=.5*(2*i[v]+(-s[v]+c[v])*a+(2*s[v]-5*i[v]+4*c[v]-f[v])*a*a+(-s[v]+3*i[v]-3*c[v]+f[v])*a*a*a);return l}function K6(t,e){return hc(t.map(o=>[o,0,0]),e)[0]}function Z6(t,e,o,r){let n={curMat:[0,0,0]},s={r:[1,0,0,0,1,0,0,0,1],t:[0,0,0],s:1},i=[];n.save=()=>{i.push({r:s.r.slice(),t:s.t.slice(),s:s.s})},n.restore=()=>{s=i.pop()};let c=(d,p)=>{let u=new Array(9);for(let h=0;h<3;h++)for(let g=0;g<3;g++)u[h*3+g]=d[h*3]*p[g]+d[h*3+1]*p[3+g]+d[h*3+2]*p[6+g];return u},f=d=>[s.r[0]*d[0]+s.r[1]*d[1]+s.r[2]*d[2],s.r[3]*d[0]+s.r[4]*d[1]+s.r[5]*d[2],s.r[6]*d[0]+s.r[7]*d[1]+s.r[8]*d[2]];n.translate=(d,p,u)=>{let h=f([d,p,u]);s.t=[s.t[0]+h[0]*s.s,s.t[1]+h[1]*s.s,s.t[2]+h[2]*s.s]},n.scale=d=>{s.s*=d},n.rotateY=d=>{let p=Math.cos(d),u=Math.sin(d);s.r=c(s.r,[p,0,u,0,1,0,-u,0,p])},n.vert=(d,p,u)=>{let h=u||n.curMat,g=f(d),m=Dr(f(p));return t.push(g[0]*s.s+s.t[0],g[1]*s.s+s.t[1],g[2]*s.s+s.t[2]),e.push(m[0],m[1],m[2]),r.push(h[0],h[1],h[2]),t.length/3-1};let l=d=>[t[d*3],t[d*3+1],t[d*3+2]],v=d=>[e[d*3],e[d*3+1],e[d*3+2]];return n.tri=(d,p,u)=>{let h=l(d),g=Rl(Ca(l(p),h),Ca(l(u),h)),m=$a($a(v(d),v(p)),v(u));bh(g,m)<0?o.push(d,u,p):o.push(d,p,u)},n.box=(d,p,u,h,g,m,x)=>{let y=[[[d,p,u],[h,p,u],[d,g,u],[h,g,u],[0,0,-1]],[[h,p,m],[d,p,m],[h,g,m],[d,g,m],[0,0,1]],[[d,p,m],[d,p,u],[d,g,m],[d,g,u],[-1,0,0]],[[h,p,u],[h,p,m],[h,g,u],[h,g,m],[1,0,0]],[[d,g,u],[h,g,u],[d,g,m],[h,g,m],[0,1,0]],[[d,p,m],[h,p,m],[d,p,u],[h,p,u],[0,-1,0]]];for(let _ of y){let M=n.vert(_[0],_[4],x),b=n.vert(_[1],_[4],x),S=n.vert(_[2],_[4],x),z=n.vert(_[3],_[4],x);n.tri(M,b,S),n.tri(b,z,S)}},n.surface=(d,p,u,h)=>{h=h||{};let g=.001,m=M=>Math.min(1,Math.max(0,M)),x=[],y=[];for(let M=0;M<=p;M++){let b=[],S=[];for(let z=0;z<=u;z++){let k=M/p,C=z/u,R=d(k,C),U=Math.min(1-g,Math.max(g,k)),P=h.wrapV?C:Math.min(1-g,Math.max(g,C)),q=Ca(d(m(U+g),P),d(m(U-g),P)),at=h.wrapV?P+g:m(P+g),St=h.wrapV?P-g:m(P-g),yt=Ca(d(U,at),d(U,St)),mt=Rl(q,yt);td(mt)<1e-14&&(mt=h.inside?Ca(R,h.inside(k,C)):[0,1,0]),mt=Dr(mt),h.inside&&bh(mt,Ca(R,h.inside(k,C)))<0&&(mt=_a(mt,-1));let zt=h.mat?h.mat(k,C,R):null;b.push(n.vert(R,mt,zt)),h.double&&S.push(n.vert(R,_a(mt,-1),zt))}x.push(b),y.push(S)}let _=M=>{for(let b=0;b<p;b++)for(let S=0;S<u;S++){let z=M[b][S],k=M[b+1][S],C=M[b][S+1],R=M[b+1][S+1];n.tri(z,k,C),n.tri(k,R,C)}};_(x),h.double&&_(y)},n.ellipsoid=(d,p,u,h,g)=>{g=g||{};let m=g.warp||null;n.surface((x,y)=>{let _=x*Math.PI,M=y*Math.PI*2,b=m?m(x,y):1;return[d[0]+p[0]*b*Math.sin(_)*Math.cos(M),d[1]+p[1]*b*Math.cos(_),d[2]+p[2]*b*Math.sin(_)*Math.sin(M)]},u||10,h||14,{wrapV:!0,inside:()=>d,mat:g.mat})},n.tube=(d,p,u,h,g)=>{g=g||{};let m=40,x=[],y=null;for(let b=0;b<=m;b++){let S=b/m,z=hc(d,Math.max(0,S-.01)),k=hc(d,Math.min(1,S+.01)),C=Dr(Ca(k,z)),R;if(y)R=Dr(Ca(y,_a(C,bh(y,C))));else{let U=Math.abs(C[1])<.9?[0,1,0]:[1,0,0];R=Dr(Rl(C,U))}x.push({N:R,B:Dr(Rl(C,R))}),y=R}let _=b=>{let S=Math.min(Math.max(b,0),1)*m,z=Math.min(m-1,Math.floor(S)),k=S-z,C=x[z],R=x[z+1];return{N:Dr($a(_a(C.N,1-k),_a(R.N,k))),B:Dr($a(_a(C.B,1-k),_a(R.B,k)))}},M=g.squash||[1,1];n.surface((b,S)=>{let z=hc(d,b),k=_(b),C=p(b),R=S*Math.PI*2;return $a(z,$a(_a(k.N,Math.cos(R)*C*M[0]),_a(k.B,Math.sin(R)*C*M[1])))},u||12,h||8,{wrapV:!0,inside:b=>hc(d,b),mat:g.mat})},n.lathe=(d,p,u,h,g)=>{g=g||{};let m=[];for(let x=0;x<d.length-1;x++){let y=d[x+1][0]-d[x][0],_=d[x+1][1]-d[x][1];m.push(Dr([_,-y,0]))}for(let x=0;x<d.length-1;x++){let y=d[x],_=d[x+1],M=x===0||y[2]===1,b=x===d.length-2||_[2]===1,S=M?m[x]:Dr($a(m[x-1],m[x])),z=b?m[x]:Dr($a(m[x],m[x+1])),k=[],C=[];for(let R=0;R<=h;R++){let U=R/h*Math.PI*2,P=Math.cos(U),q=Math.sin(U),at=g.mat?g.mat(U,y[1]):null,St=g.mat?g.mat(U,_[1]):null;k.push(n.vert([p+y[0]*P,y[1],u+y[0]*q],[S[0]*P,S[1],S[0]*q],at)),C.push(n.vert([p+_[0]*P,_[1],u+_[0]*q],[z[0]*P,z[1],z[0]*q],St))}for(let R=0;R<h;R++)n.tri(k[R],k[R+1],C[R]),n.tri(k[R+1],C[R+1],C[R])}},n}Lm.exports={createBuilder:Z6,catmull:hc,curve1:K6,sub:Ca,add:$a,mul:_a,dot:bh,cross:Rl,norm:Dr,len:td}});var Cm=Tt((GE,Rm)=>{"use strict";var{norm:wh,add:_h,mul:ss,sub:Q6,cross:Nm}=ti(),Om=Math.PI*2,J6=(t,e,o)=>{let r=Math.min(1,Math.max(0,(o-t)/(e-t)));return r*r*(3-2*r)};function t_(t){let e=t>>>0;return()=>{e|=0,e=e+1831565813|0;let o=Math.imul(e^e>>>15,1|e);return o=o+Math.imul(o^o>>>7,61|o)^o,((o^o>>>14)>>>0)/4294967296}}function e_(t,e,o,r,n,a){let s=(d,p)=>[7,d*a,p];t.curMat=[0,0,0],t.box(e-a*1.36,r,o-a*1.36,e+a*1.36,r+.22,o+a*1.36),t.lathe([[a*1.24,r+.22,1],[a*1.3,r+.27],[a*1.31,r+.32],[a*1.26,r+.37,1],[a*1.1,r+.4],[a*1.14,r+.44,1],[a*1.18,r+.47],[a*1.1,r+.52,1],[a*.96,r+.55]],e,o,56,{mat:s});let i=r+.55,c=n-i,f=20,l=6,v=a*.075;return t.surface((d,p)=>{let u=i+d*c,h=a*(.96-.12*d),g=p*Om,m=p*f%1,x=h-v*4*m*(1-m);return[e+x*Math.cos(g),u,o+x*Math.sin(g)]},10,f*l,{wrapV:!0,inside:d=>[e,i+d*c,o],mat:(d,p)=>[7,p*Om*a,i+d*c]}),t.lathe([[a*.8,n-.02,1],[a*.9,n+.02],[a*.9,n+.07,1],[a*.82,n+.09,1],[a*.86,n+.13],[a*1.06,n+.2],[a*1.22,n+.28],[a*1.28,n+.33,1]],e,o,56,{mat:s}),t.curMat=[0,0,0],t.box(e-a*1.42,n+.33,o-a*1.42,e+a*1.42,n+.53,o+a*1.42),n+.53}function o_(t,e,o){t.curMat=[1,0,0],t.lathe([[e*1.1,0,1],[e*1.1,o*.14,1],[e*1.04,o*.14,1],[e*1.04,o*.2],[e*.97,o*.26,1],[e*.95,o*.26,1],[e*.95,o*.8,1],[e*.98,o*.8,1],[e*1.03,o*.86],[e*1.05,o*.92,1],[e*1.05,o,1],[e*.5,o,1],[0,o]],0,0,72)}function n_(t,e,o,r,n){t.save(),t.translate(e,0,o),o_(t,r,n),t.restore()}function r_(t,e,o,r,n,a){let s=t_(r),i=a?wh([a[0],0,a[1]]):null;t.save(),t.translate(e,0,o),t.scale(n||1),t.curMat=[3,0,0],t.lathe([[.17,0,1],[.2,.02],[.28,.13],[.36,.3],[.395,.47],[.38,.62],[.32,.74],[.29,.8],[.292,.82,1],[.325,.84],[.335,.88,1],[.3,.905,1],[.275,.895,1],[.272,.85]],0,0,48),t.curMat=[5,0,0],t.lathe([[.272,.85,1],[.1,.868],[0,.872]],0,0,24);let c=11,f=.86;for(let l=0;l<c;l++){let v=l>=c-2,d=l*2.399963+s()*.5,p=[Math.cos(d),0,Math.sin(d)],u=[-Math.sin(d),0,Math.cos(d)],h=l*.618%1,g=v?.06+s()*.06:.12+.62*h,m=1;if(i){let mt=p[0]*i[0]+p[2]*i[2];m=.25+.75*J6(-.7,.5,mt),g*=m}let x=v?1.1+s()*.25:.85+.55*(1-h*.55)+s()*.15,y=v?1+s()*.2:.95+s()*.28,_=v?.055:.215+s()*.05,M=.04+s()*.05,b=[p[0]*M,f,p[2]*M],S=[b[0]+p[0]*Math.sin(g)*x*.92,b[1]+Math.cos(g)*x,b[2]+p[2]*Math.sin(g)*x*.92],z=[b[0]+p[0]*Math.sin(g*.5)*x*.45,b[1]+x*.5,b[2]+p[2]*Math.sin(g*.5)*x*.45];t.curMat=[4,0,0],t.tube([b,z,S],mt=>.02-.008*mt,8,7);let k=24,C=g*.9+.05,R=g+(v?.12:(.95+.45*h)*(.35+.65*m)),U=[S],P=[],q=S;for(let mt=0;mt<k;mt++){let zt=mt/k,It=C+(R-C)*zt*zt,se=[p[0]*Math.sin(It),Math.cos(It),p[2]*Math.sin(It)];P.push(se),q=_h(q,ss(se,y/k)),U.push(q)}P.push(P[P.length-1]);let at=mt=>{let zt=mt*k,It=Math.min(k-1,Math.floor(zt)),se=zt-It;return _h(ss(U[It],1-se),ss(U[It+1],se))},St=mt=>{let zt=mt*k,It=Math.min(k,Math.floor(zt)),se=Math.min(k,It+1),Ee=zt-It;return wh(_h(ss(P[It],1-Ee),ss(P[se],Ee)))},yt=(s()-.5)*.5;t.curMat=[2,0,0],t.surface((mt,zt)=>{let It=zt*2-1,se=at(mt),Ee=St(mt),Qe=yt*mt,me=_h(ss(u,Math.cos(Qe)),ss(Nm(Ee,u),Math.sin(Qe)));me=wh(Q6(me,ss(Ee,me[0]*Ee[0]+me[1]*Ee[1]+me[2]*Ee[2])));let qe=wh(Nm(me,Ee)),Ge=_*Math.pow(Math.sin(Math.PI*Math.pow(mt,.72)),.85),Q=.3*Ge*Math.abs(It)+.012*Math.sin(mt*40+It*2)*Math.abs(It)*(v?0:1),j=-.1*Ge*It*It*It*It,ft=Q+j;return[se[0]+me[0]*It*Ge+qe[0]*ft,se[1]+me[1]*It*Ge+qe[1]*ft,se[2]+me[2]*It*Ge+qe[2]*ft]},14,8,{double:!0,mat:(mt,zt)=>[2,zt*2-1,mt]})}t.restore()}Rm.exports={addFlutedColumn:e_,addStatue:n_,addPlant:r_}});var is=Tt((HE,qm)=>{"use strict";var Dt={xc:7,r:2.5,spring:4.7};Dt.x0=Dt.xc-Dt.r;Dt.x1=Dt.xc+Dt.r;Dt.top=Dt.spring+Dt.r;var Vn=.06,x0=.1,$m=.08,Mh=Dt.r,Sh=[Dt.x0+Mh/3,Dt.x0+2*Mh/3,Dt.xc+Mh/3,Dt.xc+2*Mh/3],uc=.28,ed=[.95,1.65,2.35,3.05,3.75],Pm=[1.05,1.8],Cl=[8,0,0],wr=[0,0,0];function Fr(t,e,o,r,n,a,s,i){t.box(Math.min(e,n),Math.min(o,a),Math.min(r,s),Math.max(e,n),Math.max(o,a),Math.max(r,s),i)}function dc(t,e,o,r,n,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),f=t.vert(r,a,s),l=t.vert(n,a,s);t.tri(i,c,f),t.tri(i,f,l)}function kh(t,e,o,r,n,a,s=48,i=0,c=Math.PI){let f=(l,v,d)=>[Dt.xc+v*Math.cos(l),Dt.spring+v*Math.sin(l),d];for(let l=0;l<s;l++){let v=i+(c-i)*l/s,d=i+(c-i)*(l+1)/s,p=(v+d)/2;dc(t,f(v,e,n),f(d,e,n),f(d,o,n),f(v,o,n),[0,0,1],a),dc(t,f(v,o,r),f(d,o,r),f(d,e,r),f(v,e,r),[0,0,-1],a),dc(t,f(v,e,r),f(d,e,r),f(d,e,n),f(v,e,n),[-Math.cos(p),-Math.sin(p),0],a),dc(t,f(d,o,r),f(v,o,r),f(v,o,n),f(d,o,n),[Math.cos(p),Math.sin(p),0],a)}}function a_(t){let r=a=>[Dt.xc+Dt.r*Math.cos(a),Dt.spring+Dt.r*Math.sin(a)],n=a=>{let s=Math.cos(a),i=Math.sin(a),c=Math.abs(s)>1e-6?Dt.r/Math.abs(s):1/0,f=i>1e-6?(8-Dt.spring)/i:1/0,l=Math.min(c,f);return[Math.min(Dt.x1,Math.max(Dt.x0,Dt.xc+s*l)),Math.min(8,Dt.spring+i*l)]};for(let a=0;a<48;a++){let s=Math.PI*a/48,i=Math.PI*(a+1)/48,c=r(s),f=r(i),l=n(s),v=n(i);for(let[p,u]of[[.35,1],[-.35,-1]])dc(t,[c[0],c[1],p],[f[0],f[1],p],[v[0],v[1],p],[l[0],l[1],p],[0,0,u],wr);let d=(s+i)/2;dc(t,[c[0],c[1],-.35],[f[0],f[1],-.35],[f[0],f[1],.35],[c[0],c[1],.35],[-Math.cos(d),-Math.sin(d),0],wr)}}function s_(t){Fr(t,-.35,0,-.35,Dt.x0,8,.35,wr),Fr(t,Dt.x1,0,-.35,14+.35,8,.35,wr),a_(t),Im(t)}function Im(t){Fr(t,Dt.x0-.32,.3,.35,Dt.x0,Dt.spring,.35+.07,wr),Fr(t,Dt.x1,.3,.35,Dt.x1+.32,Dt.spring,.35+.07,wr),Fr(t,Dt.x0-.32-.05,0,.35,Dt.x0,.3,.35+.07+.04,wr),Fr(t,Dt.x1,0,.35,Dt.x1+.32+.05,.3,.35+.07+.04,wr),Fr(t,Dt.x0-.32-.06,Dt.spring-.12,.35,Dt.x0,Dt.spring,.35+.07+.05,wr),Fr(t,Dt.x1,Dt.spring-.12,.35,Dt.x1+.32+.06,Dt.spring,.35+.07+.05,wr),kh(t,Dt.r,Dt.r+.32,.35,.35+.07,wr),kh(t,Dt.r+.32,Dt.r+.32+.06,.35,.35+.07+.03,wr),Fr(t,Dt.xc-.22,Dt.top-.08,.35,Dt.xc+.22,Dt.top+.32+.12,.35+.07+.06,wr)}function i_(t,e){e=e||"all";let o=e==="all",r=o||e==="fixed",n=-$m/2,a=$m/2,s=(d,p,u,h,g=0)=>Fr(t,d-g,p,n,u+g,h,a,Cl),i=d=>Dt.spring+Math.sqrt(Math.max(0,Dt.r*Dt.r-(d-Dt.xc)*(d-Dt.xc))),c=e==="right"?Dt.xc:Dt.x0,f=e==="left"?Dt.xc:Dt.x1,l=d=>o||e==="left"&&d<Dt.xc||e==="right"&&d>Dt.xc,v=o?null:Dt.spring-.06;if(r){s(Dt.x0,0,Dt.x0+x0,Dt.spring),s(Dt.x1-x0,0,Dt.x1,Dt.spring),kh(t,Dt.r-x0,Dt.r,n,a,Cl,64),s(Dt.x0,0,Dt.x1,.05),s(Dt.x0,Dt.spring-.06,Dt.x1,Dt.spring+.06);for(let d of Pm)kh(t,d-Vn/2,d+Vn/2,n,a,Cl,48)}if(o){s(Dt.x0,0,Dt.x1,uc),s(Dt.xc-x0/2,0,Dt.xc+x0/2,Dt.top-x0*.5);for(let d of Sh)s(d-Vn/2,uc,d+Vn/2,i(d)-x0*.5);for(let d of ed)s(Dt.x0,d-Vn/2,Dt.x1,d+Vn/2)}else if(e==="fixed"){s(Dt.xc-x0/2,Dt.spring+.06,Dt.xc+x0/2,Dt.top-x0*.5);for(let d of Sh)s(d-Vn/2,Dt.spring+.06,d+Vn/2,i(d)-x0*.5)}else{let d=e==="left"?Dt.x0+x0:Dt.x1-x0;s(Math.min(d,d+(e==="left"?x0*.8:-x0*.8)),.05,Math.max(d,d+(e==="left"?x0*.8:-x0*.8)),v),s(c,.05,f,uc),s(c,v-.07,f,v);let p=e==="left"?Dt.xc-x0/2:Dt.xc;s(p,.05,p+x0/2,v);for(let u of Sh)l(u)&&s(u-Vn/2,uc,u+Vn/2,v-.07);for(let u of ed)s(c,u-Vn/2,f,u+Vn/2)}for(let d of[-1,1]){let p=Dt.xc+d*.16;l(p)&&(Fr(t,p-.02,1.05,a,p+.02,1.13,a+.06,Cl),Fr(t,p-(d>0?0:.14),1.07,a+.05,p+(d>0?.14:0),1.11,a+.08,Cl))}}function c_(t){t=t||"all";let e=[],o=0,{x0:r,x1:n,xc:a,r:s,spring:i}=Dt;if(t!=="fixed"){let f=t==="right"?a:r,l=t==="left"?a:n;if(e.push([f,0,o],[l,0,o],[l,i,o],[f,0,o],[l,i,o],[f,i,o]),t!=="all")return e}let c=48;for(let f=0;f<c;f++){let l=Math.PI*f/c,v=Math.PI*(f+1)/c;e.push([a,i,o],[a+s*Math.cos(l),i+s*Math.sin(l),o],[a+s*Math.cos(v),i+s*Math.sin(v),o])}return e}var t0=t=>t.toFixed(4);function l_(){let t=Sh.map(r=>`vb = max(vb, barCover(abs(q.x - ${t0(r)}), ${t0(Vn/2)}, soft));`).join(`
		`),e=ed.map(r=>`hb = max(hb, barCover(abs(q.y - ${t0(r)}), ${t0(Vn/2)}, soft));`).join(`
		`),o=Pm.map(r=>`ab = max(ab, barCover(abs(rr - ${t0(r)}), ${t0(Vn/2)}, soft));`).join(`
		`);return`
	float barCover(float d, float hw, float soft) {
		return 1.0 - smoothstep(hw - soft, hw + soft, d);
	}

	// how open the doorway is at a point (x, y) on a plane, 0..1
	float doorOpen(vec2 q, float soft) {
		float side = smoothstep(${t0(Dt.x0)} - soft, ${t0(Dt.x0)} + soft, q.x)
		           * (1.0 - smoothstep(${t0(Dt.x1)} - soft, ${t0(Dt.x1)} + soft, q.x));
		float above = smoothstep(-soft, soft, q.y);
		float rr = length(q - vec2(${t0(Dt.xc)}, ${t0(Dt.spring)}));
		float arch = q.y < ${t0(Dt.spring)} ? 1.0 : 1.0 - smoothstep(${t0(Dt.r)} - soft, ${t0(Dt.r)} + soft, rr);
		return side * above * arch;
	}

	// light that reaches floor point p through the door, 0..1
	float doorLight(vec3 p, vec3 toLight) {
		if (p.z < 0.3 || toLight.z > -0.01) return 0.0;
		// through the inner face of the wall
		float tIn = (${t0(.35)} - p.z) / toLight.z;
		float tMid = (0.0 - p.z) / toLight.z;
		float tOut = (${t0(-.35)} - p.z) / toLight.z;
		vec2 qIn = (p + toLight * tIn).xy;
		vec2 q = (p + toLight * tMid).xy;
		vec2 qOut = (p + toLight * tOut).xy;
		float dist = length(toLight * tMid);
		float soft = 0.006 + 0.016 * dist;
		float open = doorOpen(qIn, soft) * doorOpen(qOut, soft);
		if (open <= 0.0) return 0.0;

		// the frame: outer jambs, arched head, transom, rails, stiles, bars
		float rr = length(q - vec2(${t0(Dt.xc)}, ${t0(Dt.spring)}));
		float vb = barCover(abs(q.x - ${t0(Dt.xc)}), ${t0(x0/2)}, soft);
		${t}
		float hb = barCover(abs(q.y - ${t0(Dt.spring)}), 0.06, soft);
		hb = max(hb, 1.0 - smoothstep(${t0(uc)} - soft, ${t0(uc)} + soft, q.y));
		float hRows = 0.0;
		{
			float hb2 = 0.0;
			${e.replace(/hb = max\(hb,/g,"hb2 = max(hb2,")}
			hRows = q.y < ${t0(Dt.spring)} ? hb2 : 0.0;
		}
		float ab = 0.0;
		${o}
		ab = q.y > ${t0(Dt.spring)} ? ab : 0.0;
		float frame = max(
			barCover(abs(q.x - ${t0(Dt.x0+x0/2)}), ${t0(x0/2)}, soft),
			barCover(abs(q.x - ${t0(Dt.x1-x0/2)}), ${t0(x0/2)}, soft));
		frame = q.y < ${t0(Dt.spring)} ? frame : barCover(abs(rr - ${t0(Dt.r-x0/2)}), ${t0(x0/2)}, soft);
		float cover = max(max(max(vb, hb), max(hRows, ab)), frame);
		return open * (1.0 - cover * 0.92);
	}`}qm.exports={addEntranceWall:s_,addSurround:Im,addFrames:i_,glassPanes:c_,doorLightGLSL:l_,DOOR:Dt,WALL:.35}});var vc=Tt((UE,Bm)=>{"use strict";var oi=1.1583333333333334,ni=(13.05-8*.16)/9,nd=oi+.16,rd=ni+.16,Ia=14/2-7.75/2,_r=15,$l=Ia+7.75,Pa=_r+13.05,Mr=.3,qa={y:8+.18,inset:.15},ei={y:8+.36,inset:Mr},ad=8+.2,Pl=8+.62,sd=8+.9,id=.016,Hm=.28,Um=.66,f_=(()=>{let t=[-.15,1,.3],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>o/e)})(),h_=(()=>{let t=[.42,1,-.32],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>o/e)})(),u_=[9,0,0],Sn=[10,0,0];function pc(t,e,o,r,n,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),f=t.vert(r,a,s),l=t.vert(n,a,s);t.tri(i,c,f),t.tri(i,f,l)}function Xn(t,e,o,r,n,a,s){pc(t,[e,a,o],[r,a,o],[r,a,n],[e,a,n],[0,-1,0],s)}function od(t,e,o,r,n,a,s,i){pc(t,[e,a,o],[r,a,o],[r,s,o],[e,s,o],[0,0,1],i),pc(t,[r,a,n],[e,a,n],[e,s,n],[r,s,n],[0,0,-1],i),pc(t,[e,a,n],[e,a,o],[e,s,o],[e,s,n],[1,0,0],i),pc(t,[r,a,o],[r,a,n],[r,s,n],[r,s,o],[-1,0,0],i)}function Dm(t,e,o,r,n){Xn(t,e[0],e[1],e[2],o[1],r,n),Xn(t,e[0],o[3],e[2],e[3],r,n),Xn(t,e[0],o[1],o[0],o[3],r,n),Xn(t,o[2],o[1],e[2],o[3],r,n)}var Fm=t=>Ia+t*nd,Gm=t=>_r+t*rd;function d_(t,e,o=48){let r=[Ia-Mr,_r-Mr,$l+Mr,Pa+Mr],n=(f,l)=>[f[0]+l,f[1]+l,f[2]-l,f[3]-l],a=n(r,qa.inset),s=n(r,ei.inset);Xn(t,0,0,14,r[1],8,e),Xn(t,0,r[3],14,o,8,e),Xn(t,0,r[1],r[0],r[3],8,e),Xn(t,r[2],r[1],14,r[3],8,e);let i=.06,c=.06;t.box(r[0]-i,8-c,r[1]-i,r[2]+i,8,r[1],Sn),t.box(r[0]-i,8-c,r[3],r[2]+i,8,r[3]+i,Sn),t.box(r[0]-i,8-c,r[1],r[0],8,r[3],Sn),t.box(r[2],8-c,r[1],r[2]+i,8,r[3],Sn),od(t,...r.slice(0,2),...r.slice(2),8,qa.y,Sn),Dm(t,r,a,qa.y,Sn),od(t,...a.slice(0,2),...a.slice(2),qa.y,ei.y,Sn),Dm(t,a,s,ei.y,Sn);for(let f=1;f<6;f++){let l=Fm(f)-.16;t.box(l,ad,_r,l+.16,ei.y,Pa,Sn)}for(let f=1;f<9;f++){let l=Gm(f)-.16;t.box(Ia,ad,l,$l,ei.y,l+.16,Sn)}for(let f=0;f<9;f++)for(let l=0;l<6;l++){let v=Fm(l),d=Gm(f);od(t,v,d,v+oi,d+ni,ei.y,sd,Sn),Xn(t,v,d,v+oi,d+ni,sd,u_),p_(t,v+oi/2,d+ni/2,oi/2,ni/2)}}function p_(t,e,o,r,n){let a=Pl,s=id;Xn(t,e-r,o-s,e+r,o+s,a,Sn),Xn(t,e-s,o-n,e+s,o+n,a,Sn);for(let i of[1,-1]){let c=Math.hypot(r,n),f=r/c,l=i*n/c,v=-l*s,d=f*s;pc(t,[e-f*c+v,a,o-l*c+d],[e+f*c+v,a,o+l*c+d],[e+f*c-v,a,o+l*c-d],[e-f*c-v,a,o-l*c-d],[0,-1,0],Sn)}for(let i of[Hm,Um]){let c=i*r,f=i*n;Xn(t,e-c-s,o-f-s,e+c+s,o-f+s,a,Sn),Xn(t,e-c-s,o+f-s,e+c+s,o+f+s,a,Sn),Xn(t,e-c-s,o-f+s,e-c+s,o+f-s,a,Sn),Xn(t,e+c-s,o-f+s,e+c+s,o+f-s,a,Sn)}}var po=t=>t.toFixed(4);function v_(){return`
	// by day the sun, high and a little towards the entrance; by night
	// the moon, lower and from the other side, so its squares of light
	// reach across the floor to the foot of the wall. (When the light is
	// switched, the squares slide from one to the other.)
	const vec3 SKY_SUN_DAY = vec3(${f_.map(po).join(", ")});
	const vec3 SKY_MOON = vec3(${h_.map(po).join(", ")});
	vec3 skySun() { return normalize(mix(SKY_SUN_DAY, SKY_MOON, night)); }
	#define SKY_SUN skySun()

	float rectOpen(vec2 q, vec4 r, float soft) {
		vec2 lo = smoothstep(r.xy - soft, r.xy + soft, q);
		vec2 hi = 1.0 - smoothstep(r.zw - soft, r.zw + soft, q);
		return lo.x * lo.y * hi.x * hi.y;
	}

	// inside a pane (not on a beam)? 0..1
	float paneOpen(vec2 q, float soft) {
		vec2 rel = q - vec2(${po(Ia)}, ${po(_r)});
		vec2 pitch = vec2(${po(nd)}, ${po(rd)});
		vec2 cell = floor(rel / pitch);
		if (cell.x < 0.0 || cell.y < 0.0 || cell.x > ${po(5)} || cell.y > ${po(8)}) return 0.0;
		vec2 loc = rel - cell * pitch;
		return rectOpen(loc, vec4(0.0, 0.0, ${po(oi)}, ${po(ni)}), soft);
	}

	float barCov(float d, float soft) {
		return 1.0 - smoothstep(${po(id)} - soft, ${po(id)} + soft, d);
	}

	// sunlight reaching point p through the skylight, 0..1
	float skylightAt(vec3 p) {
		if (p.y > ${po(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q0 = (p + L * ((${po(8)} - p.y) / L.y)).xz;
		vec2 q1 = (p + L * ((${po(qa.y)} - p.y) / L.y)).xz;
		vec2 qb = (p + L * ((${po(ad)} - p.y) / L.y)).xz;
		vec2 q2 = (p + L * ((${po(ei.y)} - p.y) / L.y)).xz;
		float tG = (${po(Pl)} - p.y) / L.y;
		vec2 qg = (p + L * tG).xz;
		vec2 qt = (p + L * ((${po(sd)} - p.y) / L.y)).xz;
		float soft = 0.004 + 0.007 * tG;
		float open = rectOpen(q0, vec4(${po(Ia-Mr)}, ${po(_r-Mr)}, ${po($l+Mr)}, ${po(Pa+Mr)}), soft)
		           * rectOpen(q1, vec4(${po(Ia-Mr+qa.inset)}, ${po(_r-Mr+qa.inset)}, ${po($l+Mr-qa.inset)}, ${po(Pa+Mr-qa.inset)}), soft)
		           * paneOpen(qb, soft) * paneOpen(q2, soft) * paneOpen(qt, soft);
		if (open <= 0.0) return 0.0;
		// the glazing, measured from the centre of this pane
		vec2 rel = qg - vec2(${po(Ia)}, ${po(_r)});
		vec2 pitch = vec2(${po(nd)}, ${po(rd)});
		vec2 paneHalf = vec2(${po(oi/2)}, ${po(ni/2)});
		vec2 c = rel - floor(rel / pitch) * pitch - paneHalf;
		vec2 ac = abs(c);
		vec2 an = ac / paneHalf;                       // 0 at the centre, 1 at the pane's edge
		float hm = min(paneHalf.x, paneHalf.y);
		float ring = max(an.x, an.y);
		float cover = max(barCov(ac.x, soft), barCov(ac.y, soft));
		cover = max(cover, barCov(abs(an.x - an.y) * hm * 0.7071, soft));
		cover = max(cover, barCov(abs(ring - ${po(Hm)}) * hm, soft));
		cover = max(cover, barCov(abs(ring - ${po(Um)}) * hm, soft));
		return open * (1.0 - cover * 0.9);
	}

	// the same light for the beams in the air: the whole opening glows a
	// little, and the panes and bars show in it, softly
	float skylightVol(vec3 p) {
		if (p.y > ${po(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q = (p + L * ((${po(Pl)} - p.y) / L.y)).xz;
		float open = rectOpen(q, vec4(${po(Ia)}, ${po(_r)}, ${po($l)}, ${po(Pa)}), 0.25);
		if (open <= 0.0) return 0.0;
		return open * (0.13 + 0.87 * skylightAt(p));
	}

	// light thrown back up by the bright squares on the floor: strongest
	// on what stands beside them and faces them (the lower walls, the
	// pillars, the statues, the ceiling above), fading with distance
	float skylightBounce(vec3 p, vec3 n) {
		if (p.x > 14.2 || p.x < -0.4) return 0.0;
		vec3 L = SKY_SUN;
		vec2 c = vec2(${po(14/2)}, ${po((_r+Pa)/2)}) - L.xz * (${po(Pl)} / L.y);
		vec2 d = max(abs(p.xz - c) - vec2(${po(7.75/2)}, ${po(13.05/2)}), 0.0);
		float fall = 1.0 / (1.0 + 0.09 * (dot(d, d) + p.y * p.y * 0.6));
		vec3 to = normalize(vec3(c.x, -0.4, c.y) - p);
		return fall * (0.3 + 0.7 * max(dot(n, to), 0.0));
	}

	// a soft daylight glow under the lantern
	float skylightGlow(vec3 p) {
		float z = smoothstep(${po(_r-3)}, ${po(_r+2)}, p.z)
		        * (1.0 - smoothstep(${po(Pa-2)}, ${po(Pa+3)}, p.z));
		float x = 1.0 - 0.35 * smoothstep(${po(7.75/2)}, ${po(14/2)}, abs(p.x - ${po(14/2)}));
		return z * x;
	}`}Bm.exports={addSkylight:d_,skylightGLSL:v_,Z_START:_r,Z_END:Pa,GLASS_Y:Pl,HEIGHT:8}});var Nn=Tt((BE,Ym)=>{"use strict";var gc=is(),hd=8,y0=.35,de={x0:13.65,x1:38.12,z0:41,z1:47.2,zc:44.1,hallEnd:50.65,spring:5.6,crown:hd},jm=(de.z1-de.z0)/2,cd=de.crown-de.spring,fd=(cd*cd+jm*jm)/(2*cd),ud=de.crown-fd;function mc(t){let e=t-de.zc;return ud+Math.sqrt(Math.max(0,fd*fd-e*e))}var Je={first:17.43,pitch:4.4,count:5,halfW:1.2,sill:.75,spring:4.3},ra=Array.from({length:Je.count},(t,e)=>Je.first+e*Je.pitch),Vm=ra.slice(1).map(t=>t-Je.pitch/2),m_=[ra[0],ra[2],ra[4]],Eh=[ra[1],ra[3]],ir={r:1.3,sill:.62,spring:3.3},r0=[0,0,0],Il=[11,0,0],cs=[10,0,0],ql=[8,0,0];function vn(t,e,o,r,n,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),f=t.vert(r,a,s),l=t.vert(n,a,s);t.tri(i,c,f),t.tri(i,f,l)}function cr(t,e,o,r,n,a,s,i){t.box(Math.min(e,n),Math.min(o,a),Math.min(r,s),Math.max(e,n),Math.max(o,a),Math.max(r,s),i)}function Dl(t,e){let{u0:o,u1:r,w0:n,w1:a,top:s,holes:i,mat:c}=e,f=new Set([o,r]);for(let h of i){f.add(h.u0),f.add(h.u1);let g=Math.max(8,Math.ceil((h.u1-h.u0)/(h.step||.08)));for(let m=1;m<g;m++)f.add(h.u0+(h.u1-h.u0)*m/g)}for(let h of e.cuts||[])f.add(h);let l=e.topStep||.5;for(let h=o;h<r;h+=l)f.add(h);let v=[...f].filter(h=>h>=o-1e-9&&h<=r+1e-9).sort((h,g)=>h-g),d=(h,g)=>h.bot?h.bot(g):h.bottom,p=(h,g)=>{let m=s(h),x=g.map(M=>[Math.max(0,d(M,h)),Math.min(M.head(h),m)]).filter(M=>M[1]>M[0]).sort((M,b)=>M[0]-b[0]),y=[],_=0;for(let M of x)M[0]>_+1e-6&&y.push([_,M[0]]),_=Math.max(_,M[1]);return m>_+1e-6&&y.push([_,m]),y},u=(h,g,m)=>[h,g,m];for(let h=0;h<v.length-1;h++){let g=v[h],m=v[h+1],x=(g+m)/2,y=i.filter(k=>x>k.u0&&x<k.u1),_=y.length?Math.max(g,Math.max(...y.map(k=>k.u0))+1e-7):g,M=y.length?Math.min(m,Math.min(...y.map(k=>k.u1))-1e-7):m,b=p(_,y),S=p(M,y),z=Math.min(b.length,S.length);for(let k=0;k<z;k++){let[C,R]=b[k],[U,P]=S[k];R-C<1e-6&&P-U<1e-6||(vn(t,u(g,C,a),u(m,U,a),u(m,P,a),u(g,R,a),[0,0,1],c),e.frontOnly||vn(t,u(m,U,n),u(g,C,n),u(g,R,n),u(m,P,n),[0,0,-1],c))}}e.noEnds||(vn(t,u(o,0,n),u(o,0,a),u(o,s(o),a),u(o,s(o),n),[-1,0,0],c),vn(t,u(r,0,a),u(r,0,n),u(r,s(r),n),u(r,s(r),a),[1,0,0],c));for(let h of i){if(h.noReveal)continue;let g=h.mat||e.revealMat||c,m=Math.max(0,d(h,h.u0+1e-7)),x=Math.max(0,d(h,h.u1-1e-7)),y=Math.min(h.head(h.u0+1e-7),s(h.u0)),_=Math.min(h.head(h.u1-1e-7),s(h.u1));y>m+1e-6&&vn(t,u(h.u0,m,a),u(h.u0,m,n),u(h.u0,y,n),u(h.u0,y,a),[1,0,0],g),_>x+1e-6&&vn(t,u(h.u1,x,n),u(h.u1,x,a),u(h.u1,_,a),u(h.u1,_,n),[-1,0,0],g);let M=Math.max(8,Math.ceil((h.u1-h.u0)/(h.step||.06)));for(let b=0;b<M;b++){let S=h.u0+(h.u1-h.u0)*b/M,z=h.u0+(h.u1-h.u0)*(b+1)/M,k=Math.max(S,h.u0+1e-7),C=Math.min(z,h.u1-1e-7),R=Math.min(h.head(k),s(S)),U=Math.min(h.head(C),s(z));if(!(R>=s(S)-1e-6&&U>=s(z)-1e-6)){let at=z-S,St=U-R,yt=Math.hypot(at,St)||1;vn(t,u(S,R,n),u(z,U,n),u(z,U,a),u(S,R,a),[St/yt,-at/yt,0],g)}let P=d(h,k),q=d(h,C);if(P>1e-6||q>1e-6){let at=z-S,St=q-P,yt=Math.hypot(at,St)||1;vn(t,u(z,q,n),u(S,P,n),u(S,P,a),u(z,q,a),[-St/yt,at/yt,0],g)}}}}var ld=(t,e,o)=>r=>{let n=r-t;return o+Math.sqrt(Math.max(0,e*e-n*n))};function g_(t,e){let o=ir.r,r=ir.sill,n=ir.spring,a=de.z0,s=24,i=(p,u,h)=>[e+Math.cos(p)*u,h,a-Math.sin(p)*u];for(let p=0;p<s;p++){let u=Math.PI*p/s,h=Math.PI*(p+1)/s,g=[-Math.cos(u),0,Math.sin(u)],m=[-Math.cos(h),0,Math.sin(h)],x=[t.vert(i(u,o,r),g,r0),t.vert(i(h,o,r),m,r0),t.vert(i(h,o,n),m,r0),t.vert(i(u,o,n),g,r0)];t.tri(x[0],x[1],x[2]),t.tri(x[0],x[2],x[3])}let c=12,f=(p,u)=>[e+Math.cos(p)*Math.cos(u)*o,n+Math.sin(u)*o,a-Math.sin(p)*Math.cos(u)*o],l=(p,u)=>[-Math.cos(p)*Math.cos(u),-Math.sin(u),Math.sin(p)*Math.cos(u)];for(let p=0;p<s;p++)for(let u=0;u<c;u++){let h=Math.PI*p/s,g=Math.PI*(p+1)/s,m=Math.PI/2*u/c,x=Math.PI/2*(u+1)/c,y=[t.vert(f(h,m),l(h,m),cs),t.vert(f(g,m),l(g,m),cs),t.vert(f(g,x),l(g,x),cs),t.vert(f(h,x),l(h,x),cs)];t.tri(y[0],y[1],y[2]),t.tri(y[0],y[2],y[3])}for(let p=1;p<8;p++){let u=Math.PI*p/8,h=[];for(let g=0;g<=10;g++){let m=Math.PI/2*g/10*.97;h.push(f(u,m).map((x,y)=>x-l(u,m)[y]*.02))}t.tube(h,g=>.035*(1-g*.6),12,6,{mat:()=>cs})}let v=t.vert([e,r,a],[0,1,0],r0);for(let p=0;p<s;p++){let u=Math.PI*p/s,h=Math.PI*(p+1)/s;t.tri(v,t.vert(i(u,o,r),[0,1,0],r0),t.vert(i(h,o,r),[0,1,0],r0))}cr(t,e-o-.12,r-.1,a,e+o+.12,r+.02,a+.12,r0),cr(t,e-o-.16,r-.2,a,e+o+.16,r-.1,a+.07,r0);let d=.16;for(let p=0;p<s;p++){let u=Math.PI*p/s,h=Math.PI*(p+1)/s,g=(m,x,y)=>[e+Math.cos(m)*x,n+Math.sin(m)*x,y];vn(t,g(u,o,a+.05),g(h,o,a+.05),g(h,o+d,a+.05),g(u,o+d,a+.05),[0,0,1],r0),vn(t,g(u,o+d,a),g(h,o+d,a),g(h,o+d,a+.05),g(u,o+d,a+.05),[Math.cos((u+h)/2),Math.sin((u+h)/2),0],r0),vn(t,g(u,o,a),g(h,o,a),g(h,o,a+.05),g(u,o,a+.05),[-Math.cos((u+h)/2),-Math.sin((u+h)/2),0],r0)}for(let p of[-1,1]){let u=e+p*o,h=e+p*(o+d);cr(t,u,r,a,h,n,a+.05,r0),cr(t,u-p*.02,n-.12,a,h+p*.06,n,a+.09,r0)}cr(t,e-.11,n+o-.04,a,e+.11,n+o+d+.1,a+.09,r0),t.lathe([[.66,r,1],[.66,r+.06,1],[.62,r+.1],[.6,r+.3],[.64,r+.34,1],[.64,r+.4,1],[0,r+.4]],e,a-.62,40,{mat:()=>r0})}var x_=ir.sill+.4,y_=de.z0-.62;function b_(t){vn(t,[14,0,de.z0-y0],[de.x1+y0,0,de.z0-y0],[de.x1+y0,0,de.z1+y0],[14,0,de.z1+y0],[0,1,0],r0),t.curMat=Il,Dl(t,{u0:14+y0,u1:de.x1+2*y0,w0:de.z0-2*y0,w1:de.z0,top:()=>de.spring,holes:Eh.map(f=>({u0:f-ir.r,u1:f+ir.r,bottom:ir.sill,head:ld(f,ir.r,ir.spring),noReveal:!0})),mat:Il,cuts:[de.x1]});for(let f of Eh)g_(t,f);t.save(),t.translate(0,0,de.z1),t.rotateY(Math.PI),t.translate(-(de.x1+2*y0),0,-2*y0);let e=f=>de.x1+2*y0-f;Dl(t,{u0:e(de.x1+2*y0),u1:e(13.65),w0:0,w1:2*y0,top:()=>de.spring,holes:ra.map(f=>({u0:e(f+Je.halfW),u1:e(f-Je.halfW),bottom:Je.sill,head:ld(e(f),Je.halfW,Je.spring)})),mat:Il,revealMat:r0}),t.restore(),t.save(),t.translate(de.x1,0,0),t.rotateY(-Math.PI/2);let o=gc.DOOR,r=de.zc,n=o.r;Dl(t,{u0:de.z0-2*y0,u1:de.z1+2*y0,w0:-2*y0,w1:0,top:f=>f<de.z0||f>de.z1?de.spring:mc(f),topStep:.15,holes:[{u0:r-n,u1:r+n,bottom:0,head:ld(r,n,o.spring)}],mat:Il,revealMat:r0}),t.restore(),t.save(),t.translate(14+y0,0,0),t.rotateY(-Math.PI/2),Dl(t,{u0:de.z0,u1:de.z1,w0:-0,w1:2*y0,top:()=>hd,topStep:.15,holes:[{u0:de.z0,u1:de.z1,bottom:0,head:f=>mc(f)}],mat:Il,revealMat:r0}),t.restore();let a=14+y0,s=Math.ceil((de.x1-a)/1),i=28,c=[];for(let f=0;f<=s;f++){let l=a+(de.x1-a)*f/s,v=[];for(let d=0;d<=i;d++){let p=de.z0+(de.z1-de.z0)*d/i,u=mc(p),h=[0,ud-u,de.zc-p],g=Math.hypot(h[1],h[2]);v.push(t.vert([l,u,p],[0,h[1]/g,h[2]/g],cs))}c.push(v)}for(let f=0;f<s;f++)for(let l=0;l<i;l++)t.tri(c[f][l],c[f+1][l],c[f][l+1]),t.tri(c[f+1][l],c[f+1][l+1],c[f][l+1])}function Wm(t,e,o,r){let a=[];for(let s=0;s<=32;s++){let i=de.z0+(de.z1-de.z0)*s/32,c=mc(i),f=ud-c,l=de.zc-i,v=Math.hypot(f,l),d=[c+f/v*r,i+l/v*r];a.push({y:c,z:i,iy:d[0],iz:d[1],n:[0,f/v,l/v]})}for(let s=0;s<32;s++){let i=a[s],c=a[s+1];vn(t,[e-o,i.iy,i.iz],[e+o,i.iy,i.iz],[e+o,c.iy,c.iz],[e-o,c.iy,c.iz],i.n,r0),vn(t,[e-o,i.y,i.z],[e-o,i.iy,i.iz],[e-o,c.iy,c.iz],[e-o,c.y,c.z],[-1,0,0],r0),vn(t,[e+o,i.iy,i.iz],[e+o,i.y,i.z],[e+o,c.y,c.z],[e+o,c.iy,c.iz],[1,0,0],r0)}}function zh(t,e,o,r){let s=o,i=o+r*.16;cr(t,e-.28,0,s,e+.28,de.spring-.3,i,r0),cr(t,e-.28-.06,0,s,e+.28+.06,.32,o+r*(.16+.05),r0),cr(t,e-.28-.05,de.spring-.3,s,e+.28+.05,de.spring-.1,o+r*(.16+.05),r0),cr(t,e-.28-.1,de.spring-.1,s,e+.28+.1,de.spring,o+r*(.16+.1),r0)}function w_(t,e){let o=mc(de.zc),r=[[0,o-.13,1],[.05,o-.125],[.12,o-.1],[.16,o-.06,1],[.22,o-.05],[.3,o-.075],[.4,o-.06],[.48,o-.03,1],[.55,o-.035],[.7,o-.025],[.82,o-.012,1],[.95,o+.03]];t.lathe(r,e,de.zc,48,{mat:()=>cs});for(let n=0;n<8;n++){let a=n*Math.PI/4,s=e+Math.cos(a)*.32,i=de.zc+Math.sin(a)*.32;t.save(),t.translate(s,o-.07,i),t.rotateY(-a),t.curMat=cs,t.ellipsoid([0,0,0],[.13,.03,.06],6,10),t.restore()}}function __(t){t.curMat=r0;for(let[e,o]of[[de.z0,1],[de.z1,-1]])cr(t,14.35,de.spring-.12,e,de.x1,de.spring,e+o*.1,r0),cr(t,14.35,de.spring-.04,e,de.x1,de.spring+.05,e+o*.18,r0);for(let[e,o]of[[de.z0,1],[de.z1,-1]])cr(t,14.35,0,e,de.x1,.42,e+o*.12,r0),cr(t,14.35,.42,e,de.x1,.5,e+o*.07,r0);for(let e of Vm)Wm(t,e,.24,.16),zh(t,e,de.z0,1),zh(t,e,de.z1,-1);for(let e of[14.35+.28,de.x1-.28])Wm(t,e,.28,.22),zh(t,e,de.z0,1),zh(t,e,de.z1,-1);for(let e of ra)w_(t,e)}function M_(t){let e=de.z1+y0,o=e-.04,r=e+.04,n=(i,c,f,l)=>cr(t,i,c,o,f,l,r,ql),a=Je.halfW,s=(i,c,f,l,v,d)=>{let p=(u,h,g)=>[i+h*Math.cos(u),Je.spring+h*Math.sin(u),g];for(let u=0;u<d;u++){let h=l+(v-l)*u/d,g=l+(v-l)*(u+1)/d;vn(t,p(h,c,o),p(g,c,o),p(g,f,o),p(h,f,o),[0,0,-1],ql),vn(t,p(h,f,r),p(g,f,r),p(g,c,r),p(h,c,r),[0,0,1],ql)}};for(let i of ra){let c=i-a,f=i+a;n(c,Je.sill,c+.07,Je.spring),n(f-.07,Je.sill,f,Je.spring),n(c,Je.sill,f,Je.sill+.07),n(c,Je.spring-.04,f,Je.spring+.04);for(let v of[-.5,0,.5])n(i+v*a-.022,Je.sill,i+v*a+.022,Je.spring);let l=6;for(let v=1;v<l;v++){let d=Je.sill+(Je.spring-Je.sill)*v/l;n(c,d-.02,f,d+.02)}s(i,a-.07,a,0,Math.PI,32),s(i,.42,.46,0,Math.PI,20);for(let v=1;v<6;v++){let d=Math.PI*v/6,p=Math.cos(d),u=Math.sin(d),h=.02,g=(m,x)=>[i+p*m-u*h*x,Je.spring+u*m+p*h*x];vn(t,[...g(.44,-1),o],[...g(a-.05,-1),o],[...g(a-.05,1),o],[...g(.44,1),o],[0,0,-1],ql),vn(t,[...g(.44,1),r],[...g(a-.05,1),r],[...g(a-.05,-1),r],[...g(.44,-1),r],[0,0,1],ql)}}}function S_(){let t=[],e=de.z1+y0;for(let o of ra){let r=o-Je.halfW,n=o+Je.halfW;t.push([r,Je.sill,e],[n,Je.sill,e],[n,Je.spring,e],[r,Je.sill,e],[n,Je.spring,e],[r,Je.spring,e]);for(let a=0;a<24;a++){let s=Math.PI*a/24,i=Math.PI*(a+1)/24;t.push([o,Je.spring,e],[o+Je.halfW*Math.cos(s),Je.spring+Je.halfW*Math.sin(s),e],[o+Je.halfW*Math.cos(i),Je.spring+Je.halfW*Math.sin(i),e])}}return t}function Xm(t,e){t.save(),t.translate(de.x1+y0,0,de.zc-7),t.rotateY(-Math.PI/2),e(),t.restore()}function k_(t){Xm(t,()=>{gc.addSurround(t),gc.addFrames(t,"fixed")})}function z_(t){return gc.glassPanes(t||"fixed").map(([o,r,n])=>[de.x1+y0-n,r,de.zc-7+o])}function E_(t){b_(t),__(t),M_(t),k_(t),t.curMat=[0,0,0]}var A_={x:de.x1+y0,zLo:de.zc-gc.DOOR.r,zHi:de.zc+gc.DOOR.r},Go=t=>t.toFixed(4);function T_(){return`
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
		float k = floor((q.x - ${Go(Je.first)}) / ${Go(Je.pitch)} + 0.5);
		if (k < 0.0 || k > ${Go(Je.count-1)}) return 0.0;
		float dx = q.x - (${Go(Je.first)} + k * ${Go(Je.pitch)});
		float side = 1.0 - smoothstep(${Go(Je.halfW)} - soft, ${Go(Je.halfW)} + soft, abs(dx));
		float sill = smoothstep(${Go(Je.sill)} - soft, ${Go(Je.sill)} + soft, q.y);
		float r = length(vec2(dx, q.y - ${Go(Je.spring)}));
		float head = q.y < ${Go(Je.spring)} ? 1.0 : 1.0 - smoothstep(${Go(Je.halfW)} - soft, ${Go(Je.halfW)} + soft, r);
		float open = side * sill * head;
		// the black glazing bars, softly
		float cover = 0.0;
		cover = max(cover, winBar(abs(dx), 0.022, soft));
		cover = max(cover, winBar(abs(abs(dx) - ${Go(Je.halfW*.5)}), 0.022, soft));
		float rowH = ${Go((Je.spring-Je.sill)/6)};
		float ry = (q.y - ${Go(Je.sill)}) / rowH;
		cover = max(cover, q.y < ${Go(Je.spring)} ? winBar(abs(fract(ry + 0.5) - 0.5) * rowH, 0.02, soft) : 0.0);
		cover = max(cover, q.y > ${Go(Je.spring)} ? winBar(abs(r - 0.44), 0.02, soft) : 0.0);
		return open * (1.0 - cover * 0.75);
	}

	// daylight reaching point p from the windows
	float windowLight(vec3 p, vec3 n) {
		if (p.x < ${Go(de.x0)} || p.z < ${Go(de.z0-.1)} || p.z > ${Go(de.z1)}) return 0.0;
		float ndl = max(dot(n, WIN_SKY), 0.0);
		if (ndl <= 0.0) return 0.0;
		float tIn = (${Go(de.z1)} - p.z) / WIN_SKY.z;
		float tOut = (${Go(de.z1+2*y0)} - p.z) / WIN_SKY.z;
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
		${Eh.map(t=>`{ float d = abs(p.x - ${Go(t)}); if (d < best) { best = d; lamp = vec3(${Go(t)}, ${Go(ir.spring+.55)}, ${Go(de.z0-.15)}); } }`).join(`
		`)}
		return lamp;
	}

	float nicheLight(vec3 p, vec3 n) {
		if (p.z > ${Go(de.z0+1.6)} || p.z < ${Go(de.z0-ir.r-.1)} || p.x < ${Go(de.x0)}) return 0.0;
		vec3 lamp = nicheLamp(p);
		vec3 d = lamp - p;
		float dist = length(d);
		vec3 L = d / dist;
		// a cone pointing down into the niche
		float cone = smoothstep(0.35, 0.75, dot(-L, normalize(vec3(0.0, -1.0, 0.35))));
		float inside = 1.0 - smoothstep(${Go(ir.r)}, ${Go(ir.r+.5)}, abs(p.x - lamp.x));
		return max(dot(n, L), 0.0) * cone * inside / (1.0 + 0.35 * dist * dist);
	}

	// soft general daylight in the corridor, strongest near the glass
	float corridorGlow(vec3 p) {
		if (p.x < ${Go(de.x0-1)}) return 0.0;
		float inC = smoothstep(${Go(de.z0-1.5)}, ${Go(de.z0)}, p.z) * smoothstep(${Go(de.x0-1)}, ${Go(de.x0+1)}, p.x);
		float near = 0.55 + 0.45 * smoothstep(${Go(de.z0)}, ${Go(de.z1)}, p.z);
		return inC * near;
	}`}Ym.exports={wallWithHoles:Dl,windowLightGLSL:T_,addWing:E_,windowGlass:S_,farDoorGlass:z_,atFarDoor:Xm,FAR_DOOR:A_,vaultY:mc,C:de,NICHE_X:Eh,NICHE:ir,NICHE_PLINTH_TOP:x_,NICHE_STATUE_Z:y_,WIN:Je,winCentres:ra,piers:Vm,PAINTING_X:m_,HEIGHT:hd}});var Gr=Tt((jE,Qm)=>{"use strict";var dd=Nn(),p0=8,bc=.35,ri=14,yc=4,Se={x0:ri+bc,x1:ri+bc+2*yc,z0:5.9-yc,z1:5.9+yc,zc:5.9,cx:ri+bc+yc,arch:{r:2.6,spring:4.4},dome:{r:3.3,base:p0},oculus:3.3};Se.domeTop=Se.dome.base+Se.dome.r;var wc={spokes:16,ringE:[.42,.95],bar:.035},nn={sxz:1.32,sy:1.6,yaw:.6};nn.crownC=[Se.cx,.4+3.4*nn.sy,Se.zc];nn.crownR=[2.3*nn.sxz,1.9*nn.sy,2.3*nn.sxz];nn.trunkR=.26*nn.sxz;nn.trunkTop=.4+2.2*nn.sy;var Km={inner:1.05,outer:1.62,seat:.48,soil:.4},Lh=(()=>{let t=[.2,1,-.15],e=Math.hypot(...t);return t.map(o=>o/e)})(),mn=[0,0,0],xc=[11,0,0],Ah=[10,0,0],Th=[9,0,0],L_=[5,0,0],pd=[3,0,0];function Da(t,e,o,r,n,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),f=t.vert(r,a,s),l=t.vert(n,a,s);t.tri(i,c,f),t.tri(i,f,l)}function Yn(t,e,o,r,n,a,s,i){t.box(Math.min(e,n),Math.min(o,a),Math.min(r,s),Math.max(e,n),Math.max(o,a),Math.max(r,s),i)}var N_=(t,e,o)=>r=>{let n=r-t;return o+Math.sqrt(Math.max(0,e*e-n*n))};function O_(t){t.save(),t.translate(ri+bc,0,0),t.rotateY(-Math.PI/2),dd.wallWithHoles(t,{u0:0,u1:dd.C.z0,w0:0,w1:2*bc,top:()=>p0,holes:[{u0:Se.zc-Se.arch.r,u1:Se.zc+Se.arch.r,bottom:0,head:N_(Se.zc,Se.arch.r,Se.arch.spring),step:.05}],mat:xc,revealMat:mn,topStep:1}),t.restore();let e=ri-bc;for(let[s,i]of[[0,Se.zc-Se.arch.r],[Se.zc+Se.arch.r,dd.C.z0]])Yn(t,e-.12,0,s,e,.42,i,mn),Yn(t,e-.07,.42,s,e,.5,i,mn);let o=e,r=.24,n=40,a=(s,i,c)=>[c,Se.arch.spring+Math.sin(s)*i,Se.zc+Math.cos(s)*i];for(let s=0;s<n;s++){let i=Math.PI*s/n,c=Math.PI*(s+1)/n;Da(t,a(i,Se.arch.r,o-.07),a(c,Se.arch.r,o-.07),a(c,Se.arch.r+r,o-.07),a(i,Se.arch.r+r,o-.07),[-1,0,0],mn),Da(t,a(i,Se.arch.r+r,o),a(c,Se.arch.r+r,o),a(c,Se.arch.r+r,o-.07),a(i,Se.arch.r+r,o-.07),[0,Math.sin((i+c)/2),Math.cos((i+c)/2)],mn),Da(t,a(i,Se.arch.r,o),a(c,Se.arch.r,o),a(c,Se.arch.r,o-.07),a(i,Se.arch.r,o-.07),[0,-Math.sin((i+c)/2),-Math.cos((i+c)/2)],mn)}Yn(t,o-.12,Se.arch.spring+Se.arch.r-.06,Se.zc-.17,o,Se.arch.spring+Se.arch.r+r+.16,Se.zc+.17,mn);for(let s of[-1,1]){let i=Se.zc+s*Se.arch.r,c=Se.zc+s*(Se.arch.r+r);Yn(t,o-.07,0,i,o,Se.arch.spring,c,mn),Yn(t,o-.13,Se.arch.spring-.16,i-s*.03,o,Se.arch.spring,c+s*.08,mn),Yn(t,o-.12,0,i-s*.03,o,.5,c+s*.06,mn)}}function R_(t){let{x0:e,x1:o,z0:r,z1:n}=Se;Da(t,[ri,0,r],[o,0,r],[o,0,n],[ri,0,n],[0,1,0],mn),t.curMat=xc,Da(t,[o,0,r],[o,0,n],[o,p0,n],[o,p0,r],[-1,0,0],xc),Da(t,[e,0,r],[o,0,r],[o,p0,r],[e,p0,r],[0,0,1],xc),Da(t,[o,0,n],[e,0,n],[e,p0,n],[o,p0,n],[0,0,-1],xc),Da(t,[e,0,n],[e,0,r],[e,p0,r],[e,p0,n],[1,0,0],xc),Yn(t,o-.12,0,r,o,.42,n,mn),Yn(t,e,0,r,o,.42,r+.12,mn),Yn(t,e,0,n-.12,o,.42,n,mn),Yn(t,o-.2,p0-.3,r,o,p0,n,mn),Yn(t,e,p0-.3,r,o,p0,r+.2,mn),Yn(t,e,p0-.3,n-.2,o,p0,n,mn),Yn(t,e,p0-.3,r,e+.2,p0,n,mn);let a=Se.dome.r,s=48,i=[];for(let m=0;m<=s;m++){let x=Math.PI*2*m/s;i.push([Se.cx+Math.cos(x)*a,Se.zc+Math.sin(x)*a])}let c=m=>{let x=Math.abs(Math.cos(m)),y=Math.abs(Math.sin(m));return Math.min(yc/Math.max(x,1e-6),yc/Math.max(y,1e-6))};for(let m=0;m<s;m++){let x=Math.PI*2*m/s,y=Math.PI*2*(m+1)/s,_=c(x),M=c(y),b=[Se.cx+Math.cos(x)*_,p0,Se.zc+Math.sin(x)*_],S=[Se.cx+Math.cos(y)*M,p0,Se.zc+Math.sin(y)*M];Da(t,[i[m][0],p0,i[m][1]],[i[m+1][0],p0,i[m+1][1]],S,b,[0,-1,0],Ah)}t.lathe([[a+.02,p0-.18,1],[a-.12,p0-.18,1],[a-.12,p0-.06,1],[a-.05,p0,1],[a,p0+.02]],Se.cx,Se.zc,s,{mat:()=>mn});let f=16,l=(m,x,y)=>[Se.cx+Math.cos(m)*Math.cos(x)*y,Se.dome.base+Math.sin(x)*y,Se.zc+Math.sin(m)*Math.cos(x)*y],v=Math.PI/2;for(let m=0;m<s;m++)for(let x=0;x<f;x++){let y=Math.PI*2*m/s,_=Math.PI*2*(m+1)/s,M=v*x/f,b=v*(x+1)/f,S=(k,C)=>[-Math.cos(k)*Math.cos(C),-Math.sin(C),-Math.sin(k)*Math.cos(C)],z=[t.vert(l(y,M,a),S(y,M),Th),t.vert(l(_,M,a),S(_,M),Th),t.vert(l(_,b,a),S(_,b),Th),t.vert(l(y,b,a),S(y,b),Th)];t.tri(z[0],z[1],z[2]),t.tri(z[0],z[2],z[3])}for(let m=0;m<wc.spokes;m++){let x=Math.PI*2*m/wc.spokes,y=[];for(let _=0;_<=14;_++)y.push(l(x,(v-.06)*_/14,a-.04));t.tube(y,()=>.04,20,6,{mat:()=>Ah})}for(let m of wc.ringE){let x=Math.cos(m)*(a-.04),y=Se.dome.base+Math.sin(m)*(a-.04),_=[];for(let M=0;M<=72;M++){let b=Math.PI*2*M/72;_.push([Se.cx+Math.cos(b)*x,y,Se.zc+Math.sin(b)*x])}t.tube(_,()=>.035,72,6,{mat:()=>Ah})}t.ellipsoid([Se.cx,Se.dome.base+a-.06,Se.zc],[.16,.08,.16],6,12,{mat:()=>Ah});let d=.46,p=.55,u=.12,h=(m,x,y,_)=>{Yn(t,m,d-.08,x,y,d,_,pd);let M=y-m>_-x?[m+.25,y-.25]:[m+.06,y-.06],b=y-m>_-x?[x+.06,_-.06]:[x+.25,_-.25];Yn(t,M[0],0,b[0],M[1],d-.08,b[1],pd)};h(o-u-p,r+1.1,o-u,n-1.1),h(e+1,r+u,o-1.1,r+u+p),h(e+1,n-u-p,o-1.1,n-u);let g=Km;t.lathe([[g.outer,0,1],[g.outer,g.seat-.1,1],[g.outer+.07,g.seat-.07,1],[g.outer+.07,g.seat,1],[g.inner-.05,g.seat,1],[g.inner-.05,g.seat-.06,1],[g.inner,g.seat-.08,1],[g.inner,g.soil]],Se.cx,Se.zc,64,{mat:()=>pd}),t.lathe([[g.inner,g.soil,1],[0,g.soil+.03]],Se.cx,Se.zc,48,{mat:()=>L_})}function C_(t){O_(t),R_(t),t.curMat=[0,0,0]}var a0=t=>t.toFixed(4);function Zm(){let t=Se.dome.r,e=wc.ringE.map(o=>Math.cos(o)*t);return`
	const vec3 SHAFT = vec3(${a0(Lh[0])}, ${a0(Lh[1])}, ${a0(Lh[2])});

	// how much sun the glass dome lets through towards p (0..1): the round
	// opening, less the soft shadows of its ribs and rings (worked out on
	// the dome's base, where the frame is seen almost straight on)
	float oculusOpen(vec3 p) {
		float t = (${a0(Se.dome.base+.6)} - p.y) / SHAFT.y;
		vec3 q = p + SHAFT * t;
		vec2 d2 = q.xz - vec2(${a0(Se.cx)}, ${a0(Se.zc)});
		float d = length(d2);
		float soft = 0.02 + 0.012 * t;
		float open = 1.0 - smoothstep(${a0(t-.15)} - soft, ${a0(t-.15)} + soft, d);
		float hw = ${a0(wc.bar)};
		float cover = 0.0;
		${e.map(o=>`cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, abs(d - ${a0(o)})));`).join(`
		`)}
		float ang = atan(d2.y, d2.x);
		float stp = ${a0(Math.PI*2/wc.spokes)};
		float da = abs(mod(ang + stp * 0.5, stp) - stp * 0.5);
		cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, d * sin(da)));
		cover = max(cover, 1.0 - smoothstep(0.16 - soft, 0.16 + soft, d));
		return open * (1.0 - cover * 0.85);
	}

	// the tree's own shade: its crown lets dappled light through, its
	// trunk blocks it
	float treeShade(vec3 p) {
		vec3 c = vec3(${a0(nn.crownC[0])}, ${a0(nn.crownC[1])}, ${a0(nn.crownC[2])});
		vec3 r = vec3(${a0(nn.crownR[0])}, ${a0(nn.crownR[1])}, ${a0(nn.crownR[2])});
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
		float tt = (${a0(nn.trunkTop)} - p.y) / SHAFT.y;
		if (tt > 0.0) {
			vec2 o = p.xz - vec2(${a0(Se.cx)}, ${a0(Se.zc)});
			vec2 dir = SHAFT.xz;
			float k = clamp(-dot(o, dir) / dot(dir, dir), 0.0, tt);
			float dist = length(o + dir * k);
			tr *= smoothstep(${a0(nn.trunkR*.7)}, ${a0(nn.trunkR*1.3)}, dist);
		}
		return tr;
	}`}function $_(){return`
	${Zm()}

	// sunlight through the oculus reaching p (0..1)
	float alcoveSun(vec3 p, vec3 n) {
		if (p.x < ${a0(Se.x0-.75)} || p.z < ${a0(Se.z0-.5)} || p.z > ${a0(Se.z1+.5)}) return 0.0;
		float ndl = max(dot(n, SHAFT), 0.0);
		if (ndl <= 0.0) return 0.0;
		return ndl * oculusOpen(p) * treeShade(p);
	}

	// soft daylight filling the court, brightest under the dome
	float alcoveGlow(vec3 p) {
		if (p.x < ${a0(Se.x0-1.5)} || p.z < ${a0(Se.z0-1.5)} || p.z > ${a0(Se.z1+1.5)}) return 0.0;
		float inside = smoothstep(${a0(Se.x0-1.2)}, ${a0(Se.x0+.6)}, p.x);
		float d = length(p.xz - vec2(${a0(Se.cx)}, ${a0(Se.zc)}));
		return inside * (0.55 + 0.45 * smoothstep(0.0, 8.0, p.y)) * (1.0 - 0.35 * smoothstep(1.0, 5.0, d));
	}`}Qm.exports={addAlcove:C_,alcoveLightGLSL:$_,oculusGLSL:Zm,A:Se,BENCH:Km,SHAFT:Lh,TREE:nn}});var rn=Tt((WE,t3)=>{"use strict";var aa=0;try{let t=location.search;/[?&]night\b/.test(t)&&(aa=1)}catch(t){}var Fa=aa,vd=0,Jm=[],Nh={tick(t){let e=vd?Math.min(.1,t-vd):0;if(vd=t,Fa!==aa){let o=e/2.4;Fa=aa>Fa?Math.min(aa,Fa+o):Math.max(aa,Fa-o)}return Nh.night},get night(){return Fa*Fa*(3-2*Fa)},get isNight(){return aa===1},get settled(){return Fa===aa},set(t){aa=t?1:0,Jm.forEach(e=>e(aa))},toggle(){Nh.set(!aa)},onChange(t){Jm.push(t)}};Nh.GLSL=`
uniform float night;
vec3 toNight(vec3 c, float keep) {
	float l = dot(c, vec3(0.299, 0.587, 0.114));
	vec3 n = mix(vec3(l), c, 0.35) * vec3(0.55, 0.70, 1.05) * keep;
	return mix(c, n, night);
}
`;t3.exports=Nh});var fs=Tt((VE,Hl)=>{"use strict";var md=rn(),{C:gd}=Nn(),{A:Oh,BENCH:Fl}=Gr(),an=Math.PI,P_=[18,29,40],Rh=.575,ls=[],Gl=(t,e,o,r,n,a,s)=>ls.push(Object.assign({x:t,y:e,z:o,o:r,back:n,hw:a,s:1,k:1,range:7,mount:"wall"},s||{}));P_.forEach(t=>{Gl(1.25+Rh+.48,3.25,t,[1,0],.48,Rh,{s:1.2}),Gl(12.75-Rh-.48,3.25,t,[-1,0],.48,Rh,{s:1.2})});[3,11].forEach(t=>Gl(t,3.45,gd.hallEnd-.5,[0,-1],.5,99,{s:1.2}));var I_=[14.63,19.63,24.03,28.43,32.83,gd.x1-.28];I_.forEach(t=>Gl(t,3.15,gd.z0+.16+.44,[0,1],.44,.28));[3,8.8].forEach(t=>Gl(.35+.44,2.75,t,[1,0],.44,99));{let t=(Fl.inner+Fl.outer)/2,e=Math.atan2(-1.12,-.98);ls.push({x:Oh.cx+Math.cos(e)*t,y:Fl.seat+.155,z:Oh.zc+Math.sin(e)*t,o:[Math.cos(e),Math.sin(e)],back:0,hw:0,ring:[Oh.cx,Oh.zc,Fl.outer+.07,Fl.seat],s:.52,k:2.2,range:3.6,mount:"table"})}var xd=.13,Ch=.21,gn=xd/Math.cos(an/6),Jo=t=>t.toFixed(4);function e3(t){let o=(t||ls.map((r,n)=>n)).map(r=>{let n=ls[r],a=-n.o[1],s=n.o[0],i=n.mount==="table"?`
				// the bench it stands on hides the floor under and around it
				if (p.y < ${Jo(n.ring[3]-.03)}) {
					float tt = ${Jo(n.y-n.ring[3])} / max(-D.y, 1e-3);
					vec2 hit = vec2(${Jo(n.x)}, ${Jo(n.z)}) + D.xz * tt - vec2(${Jo(n.ring[0])}, ${Jo(n.ring[1])});
					T *= smoothstep(${Jo(n.ring[2]-.02)}, ${Jo(n.ring[2]+.12)}, length(hit));
				}`:"",c=n.mount==="wall"?`
				{
					// what it hangs on stands behind it and hides what lies beyond
					float behind = -dot(D.xz, vec2(${Jo(n.o[0])}, ${Jo(n.o[1])}));
					if (behind > ${Jo(n.back+.06)}) {
						float side = abs(dot(D.xz, vec2(${Jo(a)}, ${Jo(s)}))) * ${Jo(n.back)} / behind;
						T *= smoothstep(${Jo(n.hw-.04)}, ${Jo(n.hw+.04)}, side);
					}
				}`:"";return`
			{
				vec3 D = p - vec3(${Jo(n.x)}, ${Jo(n.y)}, ${Jo(n.z)});
				float d2 = dot(D, D);
				if (d2 < ${Jo(n.range*n.range)}) {
					float d = sqrt(d2);
					// the direction in the lantern's own frame
					float c = ${Jo(Math.cos(Math.atan2(n.o[1],n.o[0])))}, s = ${Jo(Math.sin(Math.atan2(n.o[1],n.o[0])))};
					vec3 q = vec3(D.x * c + D.z * s, D.y, -D.x * s + D.z * c);
					float T = lanternGlass(q, 0.10 + 0.05 * d);
					${c}${i}
					float fl = 0.90 + 0.06 * sin(time * 6.1 + ${Jo(r*1.7)}) + 0.04 * sin(time * 15.3 + ${Jo(r*2.9)}) * sin(time * 1.9 + ${Jo(r*.6)});
					float lam = max(dot(N, -D / d), 0.0) * 0.85 + 0.15;
					float fall = 1.0 / (1.0 + d2 * ${Jo(1/(n.s*n.s))}) * (1.0 - smoothstep(${Jo(n.range*.6)}, ${Jo(n.range)}, d));
					sum += ${Jo(n.k)} * T * fl * lam * fall;
				}
			}`}).join("");return`
	// how much of a lantern's light gets out in direction q (lantern frame,
	// y up): through the leaded glass, past the iron posts, a little
	// through the vents in the roof and the open work under the base
	float lanternGlass(vec3 q, float blur) {
		float h = length(q.xz) + 1e-5;
		float az = atan(q.z, q.x);
		// which of the six panels, and where across it
		float t = mod(az + ${Jo(an/6)}, ${Jo(an/3)}) - ${Jo(an/6)};
		float U = tan(t) / ${Jo(Math.tan(an/6))};
		float V = (q.y / h) * (${Jo(xd/Ch)} / cos(t));
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
	}`}var b0=0,q_=1;function D_(){let t=[],e=[],o=[],r=[],n=[],a=(p,u,h,g)=>(t.push(p[0],p[1],p[2]),e.push(u[0],u[1],u[2]),o.push(h),r.push(g?g[0]:0,g?g[1]:0),t.length/3-1),s=(p,u)=>[p[0]-u[0],p[1]-u[1],p[2]-u[2]],i=(p,u)=>[p[1]*u[2]-p[2]*u[1],p[2]*u[0]-p[0]*u[2],p[0]*u[1]-p[1]*u[0]],c=p=>{let u=Math.hypot(p[0],p[1],p[2])||1;return[p[0]/u,p[1]/u,p[2]/u]};function f(p,u,h,g,m,x){let y=c(i(s(u,p),s(g,p))),_=a(p,y,m,[0,0]),M=a(u,y,m,[1,0]),b=a(h,y,m,[1,1]),S=a(g,y,m,[0,1]);n.push(_,M,b,_,b,S),x&&n.push(_,b,M,_,S,b)}function l(p,u,h){for(let x=0;x<p.length;x++){let y=p[Math.max(0,x-1)],_=p[Math.min(p.length-1,x+1)],M=c(s(_,y)),b=Math.abs(M[1])>.9?[1,0,0]:[0,1,0],S=c(i(M,b)),z=i(S,M),k=typeof u=="function"?u(x/(p.length-1)):u;for(let C=0;C<=6;C++){let R=C/6*an*2,U=Math.cos(R),P=Math.sin(R),q=[S[0]*U+z[0]*P,S[1]*U+z[1]*P,S[2]*U+z[2]*P];a([p[x][0]+q[0]*k,p[x][1]+q[1]*k,p[x][2]+q[2]*k],q,h)}}let m=t.length/3-p.length*7;for(let x=0;x<p.length-1;x++)for(let y=0;y<6;y++){let _=m+x*7+y,M=_+6+1;n.push(_,M,_+1,_+1,M,M+1)}}function v(p,u,h,g,m,x,y,_,M){let b=(S,z,k)=>{let C=x+an/6+k*an/3;return[p[0]+Math.cos(C)*S,z,p[2]+Math.sin(C)*S]};for(let S=0;S<6;S++)f(b(g,u,S+1),b(g,u,S),b(m,h,S),b(m,h,S+1),y);if(_&&m>0)for(let S=0;S<6;S++){let z=a([p[0],h,p[2]],[0,1,0],y),k=a(b(m,h,S),[0,1,0],y),C=a(b(m,h,S+1),[0,1,0],y);n.push(z,C,k)}if(M&&g>0)for(let S=0;S<6;S++){let z=a([p[0],u,p[2]],[0,-1,0],y),k=a(b(g,u,S),[0,-1,0],y),C=a(b(g,u,S+1),[0,-1,0],y);n.push(z,k,C)}}function d(p,u,h,g,m,x,y){let _=[];for(let b=0;b<=18;b++){let S=b/18,z=(y||0)+S*g*an*2,k=h*(1-.75*S);_.push([p[0]+u[0]*Math.cos(z)*k,p[1]+Math.sin(z)*k,p[2]+u[2]*Math.cos(z)*k])}l(_,m,x)}return ls.forEach(p=>{let u=p.s,h=Math.atan2(p.o[1],p.o[0]),g=[p.x,p.y,p.z],m=(_,M,b)=>[p.x+p.o[0]*_-p.o[1]*(b||0),p.y+M,p.z+p.o[1]*_+p.o[0]*(b||0)],x=p.y-Ch*u,y=p.y+Ch*u;for(let _=0;_<6;_++){let M=h+an/6+_*an/3,b=M+an/3,S=gn*u*.97,z=[p.x+Math.cos(M)*S,x,p.z+Math.sin(M)*S],k=[p.x+Math.cos(b)*S,x,p.z+Math.sin(b)*S];f(k,z,[z[0],y,z[2]],[k[0],y,k[2]],q_,!0)}for(let _=0;_<6;_++){let M=h+an/6+_*an/3,b=gn*u;l([[p.x+Math.cos(M)*b,x-.02*u,p.z+Math.sin(M)*b],[p.x+Math.cos(M)*b,y+.02*u,p.z+Math.sin(M)*b]],.011*u,b0)}v(g,x-.035*u,x,gn*u*1.12,gn*u*1.12,h,b0,!0,!0),v(g,x-.1*u,x-.035*u,gn*u*.55,gn*u*1,h,b0,!1,!0),v(g,x-.17*u,x-.1*u,0,gn*u*.55,h,b0,!1,!1);for(let _=0;_<6;_++){let M=h+_*an/3,b=xd*u*1.06,S=[p.x+Math.cos(M)*b,x-.06*u,p.z+Math.sin(M)*b];d(S,[-Math.sin(M),0,Math.cos(M)],.03*u,.85,.004*u,b0,.3)}v(g,y,y+.03*u,gn*u*1.14,gn*u*1.14,h,b0,!1,!0),v(g,y+.03*u,y+.2*u,gn*u*1.14,gn*u*.32,h,b0,!1,!1),v(g,y+.2*u,y+.27*u,gn*u*.34,gn*u*.34,h,b0,!1,!1),v(g,y+.27*u,y+.37*u,gn*u*.42,0,h,b0,!1,!0),l([[p.x,y+.36*u,p.z],[p.x,y+.47*u,p.z]],_=>.01*u*(1-.7*_),b0),v([p.x,0,p.z],y+.44*u,y+.47*u,.018*u,0,h,b0,!1,!0);for(let _=0;_<6;_++){let M=h+an/6+_*an/3,b=gn*u*1.14,S=[p.x+Math.cos(M)*b,y+.03*u,p.z+Math.sin(M)*b];l([S,[S[0],S[1]+.09*u,S[2]]],z=>.008*u*(1-.8*z),b0),v([S[0],0,S[2]],S[1]+.035*u,S[1]+.06*u,.014*u,.014*u,M,b0,!0,!0)}if(p.mount==="wall"){let _=p.back,M=x-.32,b=m(-_,0,0);((R,U,P)=>{let q=[p.o[0],0,p.o[1]],at=[-p.o[1],0,p.o[0]],St=(zt,It,se)=>[b[0]+at[0]*zt+q[0]*se,It,b[2]+at[2]*zt+q[2]*se],yt=.03,mt=.065;f(St(-P,R,mt),St(P,R,mt),St(P,U,mt),St(-P,U,mt),b0,!0),f(St(P,R,yt),St(P,R,mt),St(P,U,mt),St(P,U,yt),b0,!0),f(St(-P,R,mt),St(-P,R,yt),St(-P,U,yt),St(-P,U,mt),b0,!0),f(St(-P,U,mt),St(P,U,mt),St(P,U,yt),St(-P,U,yt),b0,!0),f(St(-P,R,yt),St(P,R,yt),St(P,R,mt),St(-P,R,mt),b0,!0),v([b[0]+q[0]*mt,0,b[2]+q[2]*mt],U,U+.05,P*.6,0,h,b0,!1,!0),v([b[0]+q[0]*mt,0,b[2]+q[2]*mt],R-.05,R,0,P*.6,h,b0,!1,!1)})(M-.2,M+.2,.07);let z=[];for(let R=0;R<=14;R++){let U=R/14,P=-_+.05+U*(_-.05),q=M+.04+(x-.17*u-M-.04)*Math.pow(U,2.2);z.push(m(P,q-p.y,0))}l(z,R=>.022*(1-.3*R),b0);let k=[];for(let R=0;R<=10;R++){let U=R/10;k.push(m(-_+.05+U*_*.6,M-.14+U*.16+.05*Math.sin(U*an)-p.y,0))}l(k,.009,b0);let C=k[k.length-1];d([C[0]-p.o[0]*.03,C[1]+.02,C[2]-p.o[1]*.03],[p.o[0],0,p.o[1]],.045,1.1,.007,b0,-.4),[.3,.55].forEach(R=>{let U=z[Math.round(R*14)],P=k[Math.round(R/.62*10)]||k[10];l([U,P],.006,b0)}),[-1,1].forEach(R=>{let U=m(-.05,-Ch*u-.2*u,0);d([U[0]-p.o[1]*R*.05,U[1],U[2]+p.o[0]*R*.05],[-p.o[1]*R,0,p.o[0]*R],.05*u,.9,.006,b0,an)})}else for(let _=0;_<3;_++){let M=h+_*an*2/3,b=[p.x+Math.cos(M)*gn*u*.7,x-.035*u,p.z+Math.sin(M)*gn*u*.7],S=[p.x+Math.cos(M)*gn*u*1.25,x-.17*u,p.z+Math.sin(M)*gn*u*1.25];l([b,S],.012*u,b0)}}),{pos:t,nrm:e,kind:o,uv:r,elems:n}}Hl.exports=t=>{let e=D_(),o=t({vert:`
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
		${e3()}
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
		}`,attributes:{position:e.pos,normal:e.nrm,kind:e.kind,uv:e.uv},elements:e.elems,uniforms:{time:t.context("time"),night:()=>md.night}}),r=[],n=[];ls.forEach((s,i)=>{[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(c=>{r.push(c[0],c[1]),n.push(s.x,s.y,s.z,s.s+i*.001)})});let a=t({vert:`
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
		}`,attributes:{corner:r,at:n},count:r.length/2,uniforms:{time:t.context("time"),night:()=>md.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(){o(),md.night>.01&&a()}};Hl.exports.lanternGLSL=e3;Hl.exports.LANTERNS=ls;Hl.exports.TREE_LANTERN=[ls.length-1]});var ds=Tt((XE,lr)=>{"use strict";var F_=rn(),e0=Math.PI,sn=t=>(+t).toFixed(4),G_=t=>`vec3(${sn(t[0])}, ${sn(t[1])}, ${sn(t[2])})`,so={x:-7,z:44.5},Eo=5.2,kn=15,Ne={z0:42.6,z1:46.4,zc:44.5,spring:4,r:1.9},Ma={z0:42.2,z1:46.8,top:6.3,x:.35},Ih=[so.x-Math.sqrt(Eo*Eo-3.05*3.05),0,0],D0={x0:-2.05+Ih[0],x1:Ih[0],z0:41.45,z1:47.55,top:4.3},yd=[[D0.x1+.05,2.35,D0.z0-.45],[D0.x1+.05,2.35,D0.z1+.45]].map(([t,e,o])=>{let r=Math.atan2(o-so.z,t-so.x);return[so.x+Math.cos(r)*(Eo-.16),e,so.z+Math.sin(r)*(Eo-.16)]}),Ko={ri:3.4,ro:Eo,a0:-35*e0/180,rise:.1836,step:3.6*e0/180,n:88,thick:.36};Ko.k=Ko.rise/Ko.step;var Kn=t=>Ko.a0-t,us=t=>t*Ko.k,_0={x:so.x+.1,z:so.z-.15,yaw:-e0/2,scale:1.3},Ga=_0.scale/1.1,Ul={keyX0:_0.x-.524*Ga,keyX1:_0.x+.491*Ga,keyTop:.647*Ga,keyFront:_0.z+.808*Ga,keyBack:_0.z+.72*Ga,stoolX:_0.x-.041*Ga,stoolZ:_0.z+1.122*Ga,stoolFront:_0.z+.96*Ga,stoolTop:.37*Ga,heading:e0},Ph=[[3.6,44.5],[.6,44.5],[-2.2,44.7],[-4.5,46.5],[-7,47.2],[-9.4,46.6],[-10.5,44.9],[-10.9,43.2]];function n3(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let o=e;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}function H_(t,e){let o=1e9;for(let r=0;r<Ph.length-1;r++){let[n,a]=Ph[r],[s,i]=Ph[r+1],c=s-n,f=i-a,l=Math.max(0,Math.min(1,((t-n)*c+(e-a)*f)/(c*c+f*f)));o=Math.min(o,Math.hypot(t-n-c*l,e-a-f*l))}return o}var $h=t=>Ne.spring+Math.sqrt(Math.max(0,Ne.r*Ne.r-(t-Ne.zc)*(t-Ne.zc))),hs=t=>so.x+Math.sqrt(Math.max(0,Eo*Eo-(t-so.z)*(t-so.z)));function _c(t,e){return Math.hypot(t-so.x,e-so.z)<Eo||t<=0&&t>so.x&&e>Ne.z0&&e<Ne.z1||t>D0.x0&&t<D0.x1&&e>D0.z0&&e<D0.z1}function U_(t,e){if(Math.hypot(t-so.x,e-so.z)<Ko.ri-.05)return 99;let r=Math.atan2(e-so.z,t-so.x),n=Ko.a0-r;for(;n<0;)n+=2*e0;for(;n>=2*e0;)n-=2*e0;return n>Ko.n*Ko.step?99:us(n)-Ko.thick}function B_(){let t=[],e=n3(1729),o=(a,s,i)=>{for(let c=Math.max(0,t.length-400);c<t.length;c++){let f=t[c];if(!(f[1]>.01)&&Math.hypot(f[0]-a,f[2]-s)<i+f[3]+.012)return!0}return!1},r=(a,s)=>{let i=a-_0.x,c=s-_0.z,f=Math.cos(_0.yaw),l=Math.sin(_0.yaw),v=(f*i-l*c)/_0.scale,d=(l*i+f*c)/_0.scale;return v>-1.05&&v<1.3&&d>-.7&&d<.72},n=0;for(;t.length<980&&n<6e4;){n++;let s=e()<.55?1.25+e()*2.1:1.25+Math.sqrt(e())*(Eo-1.45),i=e()*2*e0,c=so.x+Math.cos(i)*s,f=so.z+Math.sin(i)*s;if(!_c(c,f)||s>Eo-.18||r(c,f)||H_(c,f)<.62||U_(c,f)<2.3||c<D0.x1+.9)continue;let l=.022+e()*.02;if(o(c,f,l))continue;let v=e()<.15?.22+e()*.14:.05+e()*.15;t.push([c,0,f,l,v,e()*100])}for(let a=1;a<26;a++){let s=a<12?3:2;for(let i=0;i<s;i++){let c=(a+.25+e()*.5)*Ko.step,f=Kn(c),l=Ko.ri+.55+e()*(Ko.ro-Ko.ri-.75),v=.022+e()*.016;t.push([so.x+Math.cos(f)*l,(a+1)*Ko.rise,so.z+Math.sin(f)*l,v,.05+e()*.14,e()*100])}}for(let a of yd)for(let[s,i,c]of[[0,0,.26],[.06,.05,.18],[-.05,-.04,.14]])t.push([a[0]+s,a[1],a[2]+i,.024,c,e()*100]);for(let a of[D0.z0-.35,D0.z1+.35])for(let s=0;s<9;s++){let i=D0.x1+.35+e()*.5,c=a+(e()-.5)*.5;Math.hypot(i-so.x,c-so.z)>Eo-.15||t.push([i,0,c,.026+e()*.014,.18+e()*.3,e()*100])}return t}function j_(t){let o=n3(77),r=[];for(let n=0;n<14;n++){let a=t[Math.floor(o()*t.length)];r.push([a[0],a[1]+a[4],a[2]])}for(let n=0;n<12;n++){let a=r.map(()=>[0,0,0,0]);for(let s of t){let i=[s[0],s[1]+s[4],s[2]],c=0,f=1e9;r.forEach((l,v)=>{let d=(i[0]-l[0])**2+(i[1]-l[1])**2*4+(i[2]-l[2])**2;d<f&&(f=d,c=v)}),a[c][0]+=i[0],a[c][1]+=i[1],a[c][2]+=i[2],a[c][3]++}r=a.map((s,i)=>s[3]?[s[0]/s[3],s[1]/s[3],s[2]/s[3],s[3]]:r[i])}return r.filter(n=>n[3]>0).map(n=>[n[0],n[1]+.12,n[2],n[3]/t.length])}var bd=B_(),o3=j_(bd.filter(t=>t[1]<2||t[1]>2.5)).concat(yd.map(t=>[t[0],t[1]+.35,t[2],.035]));function r3(){return`
	vec3 roomLight(vec3 p, vec3 N, vec3 V, float gloss, out vec3 spec) {
		spec = vec3(0.0);
		vec3 col = vec3(0.0);
		float floorK = (p.y < 0.02 && N.y > 0.9) ? 1.0 : 0.0;
		${o3.map((e,o)=>`
		{
			vec3 d = ${G_(e)} - p;
			float dd = dot(d, d);
			vec3 L = d * inversesqrt(dd);
			float fl = 0.86 + 0.08 * sin(time * ${sn(5.3+o*.71)} + ${sn(o*1.9)}) + 0.06 * sin(time * ${sn(11.7+o*1.3)} + ${sn(o*.7)});
			float w = ${sn(e[3]*o3.length)} * fl;
			float lam = max(dot(N, L), 0.0) * 0.82 + 0.18;
			col += w * lam / (0.7 + dd * 0.42);
			// the floor glows in pools round the candles
			col += w * floorK * 0.9 / (0.02 + dd * 7.0);
			spec += w * pow(max(dot(N, normalize(L + V)), 0.0), mix(10.0, 180.0, gloss)) * gloss * 1.6 / (0.25 + dd * 0.9);
		}`).join("")}
		col *= vec3(1.0, 0.56, 0.24) * 0.62;
		spec *= vec3(1.0, 0.62, 0.30) * 0.62;
		// light from the oculus, high above: pale by day, moonlight at night
		float up = smoothstep(0.0, ${sn(kn)}, p.y);
		vec3 sky = mix(vec3(0.10, 0.095, 0.085), vec3(0.030, 0.045, 0.085), night);
		col += sky * (0.35 + 0.65 * up) * (0.55 + 0.45 * max(N.y, 0.0)) * (0.6 + 0.4 * max(-dot(N, normalize(p - vec3(${sn(so.x)}, ${sn(kn)}, ${sn(so.z)}))), 0.0));
		// and straight down from it a soft pool falls on the piano and
		// whoever is playing it: it catches his shoulders, his hair, the
		// edge of the lid, and lifts them out of the dark
		float pool = 1.0 - smoothstep(0.5, 2.9, length(p.xz - vec2(${sn(Ul.stoolX)}, ${sn(Ul.keyFront+.1)})));
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
	}`}var mo={FLOOR:0,WALL:1,STEP:2,SOFFIT:3,STRING:4,CEIL:5,OCULUS:6,HALLSTONE:7,IRON:8,RAILING:9,CANDLE:10};function a3(){let t={pos:[],nrm:[],kind:[],uv:[],idx:[]};return t.v=(e,o,r,n)=>(t.pos.push(e[0],e[1],e[2]),t.nrm.push(o[0],o[1],o[2]),t.kind.push(r),t.uv.push(n?n[0]:0,n?n[1]:0),t.pos.length/3-1),t.quad=(e,o,r,n,a,s,i)=>{let c=t.v(e,a,s,i&&i[0]),f=t.v(o,a,s,i&&i[1]),l=t.v(r,a,s,i&&i[2]),v=t.v(n,a,s,i&&i[3]);t.idx.push(c,f,l,c,l,v)},t.tri=(e,o,r,n,a)=>{let s=t.v(e,n,a),i=t.v(o,n,a),c=t.v(r,n,a);t.idx.push(s,i,c)},t}function W_(){let t=a3(),e=(r,n,a)=>[so.x+Math.cos(r)*n,a,so.z+Math.sin(r)*n],o=r=>[Math.cos(r),0,Math.sin(r)];for(let n=0;n>D0.x0-.01;n-=.25)for(let a=41.2;a<47.8;a+=.2){let s=n-.25,i=n,c=a,f=a+.2;if(!(_c(s,c)||_c(i,c)||_c(s,f)||_c(i,f)||_c((s+i)/2,(c+f)/2)))continue;let l=c,v=f;s>hs(Ne.z0)-.3&&(l=Math.max(l,Ne.z0),v=Math.min(v,Ne.z1),v<=l)||t.quad([s,0,l],[s,0,v],[i,0,v],[i,0,l],[0,1,0],mo.FLOOR)}{for(let n=0;n<360;n++){let a=n/360*2*e0,s=(n+1)/360*2*e0,i=(a+s)/2,c=e(i,Eo,0),f=0;c[0]>so.x&&c[2]>Ne.z0-.02&&c[2]<Ne.z1+.02&&(f=Math.max($h(Math.min(Math.max(e(a,Eo,0)[2],Ne.z0),Ne.z1)),$h(Math.min(Math.max(e(s,Eo,0)[2],Ne.z0),Ne.z1)))),c[0]<so.x&&c[2]>D0.z0-.02&&c[2]<D0.z1+.02&&(f=D0.top);let l=a*Eo,v=s*Eo,d=o(a).map(h=>-h),p=o(s).map(h=>-h),u=[f];for(let h=Math.ceil(f/2.5)*2.5;h<kn;h+=2.5)h>f+.01&&u.push(h);u.push(kn);for(let h=0;h<u.length-1;h++){let g=u[h],m=u[h+1],x=t.v(e(a,Eo,g),d,mo.WALL,[l,g]),y=t.v(e(s,Eo,g),p,mo.WALL,[v,g]),_=t.v(e(s,Eo,m),p,mo.WALL,[v,m]),M=t.v(e(a,Eo,m),d,mo.WALL,[l,m]);t.idx.push(x,y,_,x,_,M)}}for(let[n,a,s]of[[6.55,.22,.07],[0,.32,.05]])for(let i=0;i<360;i++){let c=i/360*2*e0,f=(i+1)/360*2*e0,l=(c+f)/2,v=e(l,Eo,0);if(n<1&&(v[0]>so.x&&v[2]>Ne.z0&&v[2]<Ne.z1||v[0]<so.x&&v[2]>D0.z0&&v[2]<D0.z1))continue;let d=Eo-s;t.quad(e(c,d,n),e(f,d,n),e(f,d,n+a),e(c,d,n+a),o(l).map(p=>-p),mo.WALL,[[c*Eo,n+100],[f*Eo,n+100],[f*Eo,n+a+100],[c*Eo,n+a+100]]),t.quad(e(c,d,n+a),e(f,d,n+a),e(f,Eo,n+a),e(c,Eo,n+a),[0,1,0],mo.WALL,[[0,200],[0,200],[0,200],[0,200]]),n>1&&t.quad(e(c,Eo,n),e(f,Eo,n),e(f,d,n),e(c,d,n),[0,-1,0],mo.WALL,[[0,200],[0,200],[0,200],[0,200]])}}{let r=Ma.x;for(let[a,s]of[[Ne.z0,1],[Ne.z1,-1]]){let i=hs(a);t.quad([r,0,a],[i,0,a],[i,Ne.spring,a],[r,Ne.spring,a],[0,0,s],mo.WALL,[[r,0],[i,0],[i,Ne.spring],[r,Ne.spring]])}let n=40;for(let a=0;a<n;a++){let s=a/n*e0,i=(a+1)/n*e0,c=Ne.zc-Math.cos(s)*Ne.r,f=Ne.zc-Math.cos(i)*Ne.r,l=Ne.spring+Math.sin(s)*Ne.r,v=Ne.spring+Math.sin(i)*Ne.r,d=[0,-Math.sin(s),Math.cos(s)],p=[0,-Math.sin(i),Math.cos(i)],u=t.v([r,l,c],d,mo.WALL,[r,s*Ne.r]),h=t.v([hs(c),l,c],d,mo.WALL,[hs(c),s*Ne.r]),g=t.v([hs(f),v,f],p,mo.WALL,[hs(f),i*Ne.r]),m=t.v([r,v,f],p,mo.WALL,[r,i*Ne.r]);t.idx.push(u,h,g,u,g,m)}}{let r=Ma.x,n=.05;for(let f=Ma.z0;f<Ma.z1-1e-6;f+=n){let l=f,v=Math.min(Ma.z1,f+n),p=(u=>u>Ne.z0&&u<Ne.z1)((l+v)/2)?Math.max($h(l),$h(v)):0;t.quad([r,p,l],[r,p,v],[r,Ma.top,v],[r,Ma.top,l],[1,0,0],mo.HALLSTONE,[[l,p],[v,p],[v,Ma.top],[l,Ma.top]])}let a=.32,s=.06,i=r+s,c=36;for(let f=0;f<c;f++){let l=f/c*e0,v=(f+1)/c*e0,d=(m,x)=>[i,Ne.spring+Math.sin(m)*x,Ne.zc-Math.cos(m)*x],p=Ne.r,u=Ne.r+a;t.quad(d(l,p),d(v,p),d(v,u),d(l,u),[1,0,0],mo.HALLSTONE,[[0,300],[0,300],[1,300],[1,300]]);let h=(m,x,y)=>[y,Ne.spring+Math.sin(m)*x,Ne.zc-Math.cos(m)*x],g=[0,Math.sin((l+v)/2),-Math.cos((l+v)/2)];t.quad(h(l,u,r),h(v,u,r),h(v,u,i),h(l,u,i),g,mo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),t.quad(h(l,p,r),h(v,p,r),h(v,p,i),h(l,p,i),g.map(m=>-m),mo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}for(let[f,l,v]of[[Ne.z0-a,Ne.z0,-1],[Ne.z1,Ne.z1+a,1]]){t.quad([i,0,f],[i,0,l],[i,Ne.spring,l],[i,Ne.spring,f],[1,0,0],mo.HALLSTONE,[[0,300],[1,300],[1,300],[0,300]]);let d=v<0?f:l,p=v<0?l:f;t.quad([r,0,d],[i,0,d],[i,Ne.spring,d],[r,Ne.spring,d],[0,0,v],mo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),t.quad([r,0,p],[i,0,p],[i,Ne.spring,p],[r,Ne.spring,p],[0,0,-v],mo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);let u=Ne.spring-.16,h=.16,g=.11,m=Math.min(f,l)-.05,x=Math.max(f,l)+.05;t.quad([r+g,u,m],[r+g,u,x],[r+g,u+h,x],[r+g,u+h,m],[1,0,0],mo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),t.quad([r,u+h,m],[r+g,u+h,m],[r+g,u+h,x],[r,u+h,x],[0,1,0],mo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),t.quad([r,u,m],[r,u,x],[r+g,u,x],[r+g,u,m],[0,-1,0],mo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);for(let y of[m,x])t.quad([r,u,y],[r+g,u,y],[r+g,u+h,y],[r,u+h,y],[0,0,y===m?-1:1],mo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}{let f=Ne.spring+Ne.r-.05,l=Ne.spring+Ne.r+a+.12,v=.16,d=.22,p=i+.04;t.quad([p,f,Ne.zc-v],[p,f,Ne.zc+v],[p,l,Ne.zc+d],[p,l,Ne.zc-d],[1,0,0],mo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);for(let u of[-1,1])t.quad([r,f,Ne.zc+u*v],[p,f,Ne.zc+u*v],[p,l,Ne.zc+u*d],[r,l,Ne.zc+u*d],[0,0,u],mo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);t.quad([r,l,Ne.zc-d],[p,l,Ne.zc-d],[p,l,Ne.zc+d],[r,l,Ne.zc+d],[0,1,0],mo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}}{let{x0:r,x1:n,z0:a,z1:s,top:i}=D0;t.quad([r,0,a],[r,0,s],[r,i,s],[r,i,a],[1,0,0],mo.WALL,[[a,0],[s,0],[s,i],[a,i]]);for(let[f,l]of[[a,1],[s,-1]]){let v=so.x-Math.sqrt(Eo*Eo-(f-so.z)*(f-so.z));t.quad([r,0,f],[v,0,f],[v,i,f],[r,i,f],[0,0,l],mo.WALL,[[r,0],[v,0],[v,i],[r,i]])}let c=24;for(let f=0;f<c;f++){let l=a+(s-a)*f/c,v=a+(s-a)*(f+1)/c,d=so.x-Math.sqrt(Eo*Eo-(l-so.z)**2),p=so.x-Math.sqrt(Eo*Eo-(v-so.z)**2);t.quad([r,i,l],[d,i,l],[p,i,v],[r,i,v],[0,-1,0],mo.WALL,[[0,200],[0,200],[0,200],[0,200]])}for(let f=0;f<c;f++){let l=a+(s-a)*f/c,v=a+(s-a)*(f+1)/c,d=so.x-Math.sqrt(Eo*Eo-(l-so.z)**2)+.05,p=so.x-Math.sqrt(Eo*Eo-(v-so.z)**2)+.05;t.quad([d,i-.3,l],[p,i-.3,v],[p,i,v],[d,i,l],[1,0,0],mo.WALL,[[0,200],[0,200],[0,200],[0,200]])}}{let n=[1.15,1.6,2.3,3,3.35,4.2,Eo];for(let a=0;a<120;a++){let s=a/120*2*e0,i=(a+1)/120*2*e0,c=(s+i)/2;c>e0&&(c-=2*e0);for(let f=0;f<n.length-1;f++){let l=n[f],v=n[f+1],d=c*180/e0;l>=3.3&&d>8&&d<85||t.quad(e(s,l,kn),e(s,v,kn),e(i,v,kn),e(i,l,kn),[0,-1,0],mo.CEIL,[[s*l,l],[s*v,v],[i*v,v],[i*l,l]])}t.quad(e(s,1.15,kn),e(i,1.15,kn),e(i,1.15,kn+.7),e(s,1.15,kn+.7),o(c).map(f=>-f),mo.CEIL,[[0,400],[0,400],[0,400],[0,400]]),t.tri([so.x,kn+.7,so.z],e(i,1.15,kn+.7),e(s,1.15,kn+.7),[0,-1,0],mo.OCULUS)}}{let r=Ko.ri,n=Ko.ro,a=Ko.n*Ko.step;for(let c=0;c<Ko.n;c++){let f=c*Ko.step,l=(c+1)*Ko.step,v=Kn(f),d=Kn(l),p=(c+1)*Ko.rise,u=c*Ko.rise,h=2;for(let x=0;x<h;x++){let y=v+(d-v)*x/h-(x===0?.004:0),_=v+(d-v)*(x+1)/h;t.quad(e(y,r,p),e(y,n,p),e(_,n,p),e(_,r,p),[0,1,0],mo.STEP,[[r*y,c],[n*y,c],[n*_,c],[r*_,c]])}let g=[-Math.sin(v),0,Math.cos(v)],m=v-.004;t.quad(e(m,r,u),e(m,n,u),e(m,n,p),e(m,r,p),g,mo.STEP,[[r*v,c+.5],[n*v,c+.5],[n*v,c+.5],[r*v,c+.5]]),t.quad(e(v,r,us(f)+.06),e(d,r,us(l)+.06),e(d,r,p),e(m,r,p),o((v+d)/2).map(x=>-x),mo.STEP,[[0,500],[0,500],[0,500],[0,500]])}let s=Math.ceil(a/(1.2*e0/180)),i=[r,r+.6,r+1.2,n];for(let c=0;c<s;c++){let f=c/s*a,l=(c+1)/s*a,v=Kn(f),d=Kn(l),p=us(f),u=us(l),h=p-Ko.thick,g=u-Ko.thick,m=o(v).map(S=>-S),x=o(d).map(S=>-S),y=t.v(e(v,r,h),m,mo.STRING,[f*r,0]),_=t.v(e(d,r,g),x,mo.STRING,[l*r,0]),M=t.v(e(d,r,u+.06),x,mo.STRING,[l*r,1]),b=t.v(e(v,r,p+.06),m,mo.STRING,[f*r,1]);t.idx.push(y,_,M,y,M,b);for(let S=0;S<i.length-1;S++){let z=i[S],k=i[S+1],C=R=>{let U=o(R);return[-U[0]*.12,-.99,-U[2]*.12]};t.quad(e(v,z,h),e(v,k,h),e(d,k,g),e(d,z,g),C((v+d)/2),mo.SOFFIT,[[f*z,z],[f*k,k],[l*k,k],[l*z,z]])}}}return t}function V_(){let t=a3(),e=Ko.ri+.045,o=Ko.n*Ko.step,r=Math.ceil(o/(.8*e0/180)),n=.92,a=(c,f,l)=>[so.x+Math.cos(c)*f,l,so.z+Math.sin(c)*f],s=c=>[Math.cos(c),0,Math.sin(c)];for(let c=0;c<r;c++){let f=c/r*o,l=(c+1)/r*o,v=Kn(f),d=Kn(l),p=us(f)+.06,u=us(l)+.06,h=s(v).map(S=>-S),g=s(d).map(S=>-S),m=f*e,x=l*e,y=t.v(a(v,e,p),h,mo.RAILING,[m,0]),_=t.v(a(d,e,u),g,mo.RAILING,[x,0]),M=t.v(a(d,e,u+n),g,mo.RAILING,[x,n]),b=t.v(a(v,e,p+n),h,mo.RAILING,[m,n]);t.idx.push(y,_,M,y,M,b)}((c,f,l,v)=>{let p=h=>{let g=Kn(h),m=us(h)+.06+f,x=a(g,e+c,m),y=s(g),_=[];for(let M=0;M<8;M++){let b=M/8*2*e0,S=[y[0]*Math.cos(b),Math.sin(b),y[2]*Math.cos(b)];_.push([[x[0]+S[0]*l,x[1]+S[1]*l,x[2]+S[2]*l],S])}return _},u=p(0);for(let h=1;h<=r;h++){let g=p(h/r*o);for(let m=0;m<8;m++){let x=(m+1)%8,y=t.v(u[m][0],u[m][1],v),_=t.v(g[m][0],g[m][1],v),M=t.v(g[x][0],g[x][1],v),b=t.v(u[x][0],u[x][1],v);t.idx.push(y,_,M,y,M,b)}u=g}})(0,n+.02,.028,mo.IRON);for(let c of yd){let f=Math.atan2(c[2]-so.z,c[0]-so.x),l=[Math.cos(f),0,Math.sin(f)],v=12;for(let h=0;h<v;h++){let g=h/v*2*e0,m=(h+1)/v*2*e0,x=(y,_,M)=>[c[0]+Math.cos(y)*_,M,c[2]+Math.sin(y)*_];t.quad(x(g,.16,c[1]),x(m,.16,c[1]),x(m,.13,c[1]-.05),x(g,.13,c[1]-.05),[Math.cos(g)*.6,.8,Math.sin(g)*.6],mo.IRON),t.quad(x(g,.16,c[1]),x(m,.16,c[1]),x(m,0,c[1]+.002),x(g,0,c[1]+.002),[0,1,0],mo.IRON)}let d=[c[0]+l[0]*.16,c[1]-.35,c[2]+l[2]*.16],p=[-l[2],0,l[0]],u=.018;t.quad([d[0]-p[0]*u,d[1],d[2]-p[2]*u],[d[0]+p[0]*u,d[1],d[2]+p[2]*u],[c[0]+p[0]*u,c[1]-.05,c[2]+p[2]*u],[c[0]-p[0]*u,c[1]-.05,c[2]-p[2]*u],[-l[0],.5,-l[2]],mo.IRON)}{let c=Kn(0),f=a(c,e,0),l=10;for(let v=0;v<l;v++){let d=v/l*2*e0,p=(v+1)/l*2*e0,u=(h,g,m)=>[f[0]+Math.cos(h)*g,m,f[2]+Math.sin(h)*g];t.quad(u(d,.035,0),u(p,.035,0),u(p,.035,n+.1),u(d,.035,n+.1),[Math.cos((d+p)/2),0,Math.sin((d+p)/2)],mo.IRON),t.quad(u(d,.06,n+.1),u(p,.06,n+.1),u(p,.03,n+.2),u(d,.03,n+.2),[Math.cos((d+p)/2)*.8,.6,Math.sin((d+p)/2)*.8],mo.IRON)}}return t}function X_(){let t=[],e=[],o=[],r=[];for(let a of bd){let[s,i,c,f,l,v]=a,d=t.length/3;for(let u=0;u<=7;u++){let h=u/7*2*e0+v,g=Math.cos(h),m=Math.sin(h);t.push(s+g*f,i,c+m*f,s+g*f,i+l,c+m*f),e.push(g,0,m,g,0,m),o.push(0,l,v,1,l,v)}for(let u=0;u<7;u++){let h=d+u*2;r.push(h,h+2,h+3,h,h+3,h+1)}let p=t.length/3;t.push(s,i+l-.006,c),e.push(0,1,0),o.push(2,l,v);for(let u=0;u<7;u++){let h=u/7*2*e0+v;t.push(s+Math.cos(h)*f,i+l,c+Math.sin(h)*f),e.push(0,1,0),o.push(1,l,v)}for(let u=0;u<7;u++)r.push(p,p+1+u,p+1+(u+1)%7)}return{pos:t,nrm:e,info:o,idx:r}}function Y_(){let t=[],e=[],o=[],r=[];for(let n of bd){let[a,s,i,,c,f]=n,l=t.length/3;for(let v of[[-1,0],[1,0],[1,1],[-1,1]])t.push(a,s+c+.004,i),e.push(v[0],v[1]),o.push(f);r.push(l,l+1,l+2,l,l+2,l+3)}return{ctr:t,corner:e,ph:o,idx:r}}function K_(t){let e=new DataView(t),o=e.getUint32(4,!0),r=e.getUint32(8,!0),n=[],a=[];for(let m=0;m<3;m++)n.push(e.getFloat32(12+m*4,!0)),a.push(e.getFloat32(24+m*4,!0));let s=36,i=new Uint16Array(t,s,o*3);s+=o*6;let c=new Uint16Array(t,s,r);s+=r*2;let f=new Int8Array(t,s,o*3);s+=o*3;let l=new Uint8Array(t,s,o),v=new Float32Array(o*3),d=new Float32Array(o*3),p=new Float32Array(o),u=Math.cos(_0.yaw),h=Math.sin(_0.yaw),g=_0.scale;for(let m=0;m<o;m++){let x=(n[0]+i[m*3]/65535*a[0])*g,y=(n[1]+i[m*3+1]/65535*a[1])*g,_=(n[2]+i[m*3+2]/65535*a[2])*g;v[m*3]=_0.x+u*x+h*_,v[m*3+1]=y,v[m*3+2]=_0.z-h*x+u*_;let M=f[m*3]/127,b=f[m*3+1]/127,S=f[m*3+2]/127;d[m*3]=u*M+h*S,d[m*3+1]=b,d[m*3+2]=-h*M+u*S,p[m]=l[m]}return{pos:v,nrm:d,mat:p,idx:new Uint32Array(c)}}function Z_(){let t=[],e=(v,d)=>[so.x+Math.cos(v)*d,so.z+Math.sin(v)*d];t.push([[0,Ne.z0],[hs(Ne.z0),Ne.z0]]),t.push([[hs(Ne.z1),Ne.z1],[0,Ne.z1]]);let o=Math.asin((Ne.z1-so.z)/Eo),r=72;for(let v=0;v<r;v++){let d=o+v/r*(2*e0-2*o),p=o+(v+1)/r*(2*e0-2*o);t.push([e(d,Eo-.25),e(p,Eo-.25)])}let n=Ih[0]-.55+.35;t.push([[n,D0.z0],[n,D0.z1]]);let a=2.4/Ko.k,s=12;for(let v=0;v<s;v++){let d=Kn(v/s*a),p=Kn((v+1)/s*a);t.push([e(d,Ko.ri-.2),e(p,Ko.ri-.2)])}t.push([e(Kn(0),Ko.ri-.2),e(Kn(0),Eo)]),t.push([e(Kn(a),Ko.ri-.2),e(Kn(a),Eo)]);let i=Math.cos(_0.yaw),c=Math.sin(_0.yaw),f=_0.scale,l=[[-1,-.62],[1.25,-.62],[1.25,.62],[-1,.62]].map(([v,d])=>[_0.x+(i*v+c*d)*f,_0.z+(-c*v+i*d)*f]);for(let v=0;v<4;v++)t.push([l[v],l[(v+1)%4]]);return t}lr.exports=t=>{let e=W_(),o=V_(),r=X_(),n=Y_(),a=fs(),s=`
	precision highp float;
	${F_.GLSL}
	uniform float time;
	${r3()}
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
				base *= 1.0 - 0.25 * smoothstep(3.0, ${sn(kn)}, v_pos.y);
			} else if (k < 2.5) {
				// the steps: a greyer, harder stone, worn paler in the middle
				float r = length(v_pos.xz - vec2(${sn(so.x)}, ${sn(so.z)}));
				base = limestone(v_pos.xz * 1.4 + v_uv * 0.3) * vec3(0.90, 0.88, 0.86);
				base *= 1.0 + 0.10 * (1.0 - smoothstep(0.0, 0.6, abs(r - ${sn((Ko.ri+Ko.ro)/2)})));
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
				vec2 q = v_pos.xz - vec2(${sn(so.x)}, ${sn(so.z)});
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
		}`,attributes:{position:e.pos,normal:e.nrm,kind:e.kind,uv:e.uv},elements:new Uint32Array(e.idx),cull:{enable:!1}}),f=t({vert:i,frag:`${s}
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
		}`,attributes:{position:o.pos,normal:o.nrm,kind:o.kind,uv:o.uv},elements:new Uint32Array(o.idx),cull:{enable:!1}}),l=t({vert:`
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
		}`,attributes:{position:r.pos,normal:r.nrm,info:r.info},elements:new Uint32Array(r.idx),cull:{enable:!1}}),v=t({vert:`
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
		}`,attributes:{ctr:n.ctr,corner:n.corner,ph:n.ph},elements:new Uint32Array(n.idx),uniforms:{halo:t.prop("halo")},depth:{enable:!0,mask:!1},cull:{enable:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),d=null;fetch("res/piano.bin").then(g=>{if(!g.ok)throw new Error("Could not load piano.bin");return g.arrayBuffer()}).then(g=>{let m=K_(g);d=t({vert:`
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
				}`,attributes:{position:m.pos,normal:m.nrm,mat:m.mat},elements:m.idx,cull:{enable:!1}})}).catch(g=>console.error(g));let p=(()=>{let g=[],m=[],x=[],y=[],M=[so.x,kn-.3,so.z],b=[Ul.stoolX,.02,Ul.keyFront+.1],S=1.25,z=2.35;for(let k=0;k<=40;k++){let C=k/40*2*e0,R=Math.cos(C),U=Math.sin(C);g.push(M[0]+R*S,M[1],M[2]+U*S,b[0]+R*z,b[1],b[2]+U*z),m.push(R,.08,U,R,.08,U),x.push(1,0)}for(let k=0;k<40;k++){let C=k*2;y.push(C,C+1,C+3,C,C+3,C+2)}return{pos:g,nrm:m,hh:x,idx:y}})(),u=t({vert:`
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
		}`,attributes:{position:p.pos,normal:p.nrm,hh:p.hh},elements:p.idx,depth:{enable:!0,mask:!1},cull:{enable:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});function h(g){let m=g&&g.reflected;c(),f(),l(),d&&d(),m||(u(),v({halo:1}),v({halo:0}))}return h};lr.exports.C=so;lr.exports.R=Eo;lr.exports.PASS=Ne;lr.exports.SURR=Ma;lr.exports.OFF=Ih;lr.exports.BAY=D0;lr.exports.PATH=Ph;lr.exports.PIANO=_0;lr.exports.PLAY=Ul;lr.exports.TOP=kn;lr.exports.roomGLSL=r3;lr.exports.segments=Z_});var v3=Tt((YE,p3)=>{"use strict";var Q_=ti(),{addFlutedColumn:s3,addStatue:J_,addPlant:tM}=Cm(),i3=is(),eM=vc(),sa=Nn(),oM=Gr(),Sc=ds(),Ho=14,G0=sa.C.hallEnd+.35,i0=8,Qo=.35,wd=1.15,_d=1.15,Md=[18,29,40],nM=[[[0,0],[0,Sc.PASS.z0]],[[0,Sc.PASS.z1],[0,G0]],[[Ho,G0],[Ho,0]],[[0,0],[Ho,0]],[[Ho,G0],[0,G0]]],h3=[];for(let t of Md)for(let e of[1.25,Ho-1.25]){let o=wd/2,r=_d/2;h3.push([[e-o,t-r],[e+o,t-r]],[[e+o,t-r],[e+o,t+r]],[[e+o,t+r],[e-o,t+r]],[[e-o,t+r],[e-o,t-r]])}var Dh=12,u3=2.95,d3=.62,Hh=u3+d3,Fh=[{file:"venus.bin",x:1.85,z:G0-1.6,yaw:2.67,height:5.2,pedestal:!0,mat:1},{file:"david.bin",x:Ho-2.1,z:G0-1.6,yaw:-2.67,height:5.2,pedestal:!0,mat:1},{file:"pieta.bin",x:1.75,z:5.9,yaw:Math.PI/2,height:3.6,base:1,mat:1},{file:"spinario.bin",x:sa.NICHE_X[0],z:sa.NICHE_STATUE_Z,yaw:-.35,height:1.85,base:sa.NICHE_PLINTH_TOP,mat:3},{file:"charioteer.bin",x:sa.NICHE_X[1],z:sa.NICHE_STATUE_Z+.1,yaw:0,height:2.95,base:sa.NICHE_PLINTH_TOP,mat:3}],rM={x0:Qo,x1:3.15,z0:3.6,z1:8.2,top:1},c3=.8,Uh=1.17,Bl=[];[{z:10.4,dz:-.7},{z:19.2,dz:.7},{z:27.8,dz:-.7}].forEach((t,e)=>{Bl.push({x:1,z:t.z,seed:11+e*7,away:[1,t.dz]}),Bl.push({x:Ho-1,z:t.z,seed:53+e*5,away:[-1,t.dz]})});function Sd(t,e,o,r){return[[[t-o,e-r],[t+o,e-r]],[[t+o,e-r],[t+o,e+r]],[[t+o,e+r],[t-o,e+r]],[[t-o,e+r],[t-o,e-r]]]}var Bh=[];for(let t of[-1,1])Bh.push(...Sd(Ho/2+t*Hh,Dh,.85,.85));for(let t of Fh.filter(e=>e.pedestal))Bh.push(...Sd(t.x,t.z,Uh*1.1,Uh*1.1));for(let t of Bl)Bh.push(...Sd(t.x,t.z,.42,.42));var aM=nM.concat(h3,Bh,Sc.segments());function sM(t){let o=new Map,r=(n,a,s)=>{let i=n+":"+a;o.has(i)||o.set(i,[]);let c=o.get(i);c.includes(s)||c.push(s)};for(let n of t){let a=Math.floor(Math.min(n[0][0],n[1][0])/4)-1,s=Math.floor(Math.max(n[0][0],n[1][0])/4)+1,i=Math.floor(Math.min(n[0][1],n[1][1])/4)-1,c=Math.floor(Math.max(n[0][1],n[1][1])/4)+1;for(let f=a;f<=s;f++)for(let l=i;l<=c;l++)r(f,l,n)}return{get(n,a){let s=Math.floor(n/4),i=Math.floor(a/4),c=[];for(let f=-1;f<=1;f++)for(let l=-1;l<=1;l++){let v=o.get(s+f+":"+(i+l));v&&c.push(...v)}return[...new Set(c)]}}}var Gh=[],F0={curMat:[0,0,0]};function kd(t,e,o,r,n,a,s){let i=t.length/3;t.push(...o,...r,...n,...a),e.push(...s,...s,...s,...s);let c=F0.curMat;return Gh.push(...c,...c,...c,...c),[i,i+2,i+1,i+1,i+2,i+3]}function Zo(t,e,o,r,n,a,s,i,c){let f=(l,v,d,p,u)=>{o.push(...kd(t,e,l,v,d,p,u))};f([r,n,a],[s,n,a],[r,i,a],[s,i,a],[0,0,-1]),f([s,n,c],[r,n,c],[s,i,c],[r,i,c],[0,0,1]),f([r,n,c],[r,n,a],[r,i,c],[r,i,a],[-1,0,0]),f([s,n,a],[s,n,c],[s,i,a],[s,i,c],[1,0,0]),f([r,i,a],[s,i,a],[r,i,c],[s,i,c],[0,1,0]),f([r,n,c],[s,n,c],[r,n,a],[s,n,a],[0,-1,0])}function Mc(t,e,o,r,n){let a=F0,s=a.vert(t,n),i=a.vert(e,n),c=a.vert(o,n),f=a.vert(r,n);a.tri(s,i,c),a.tri(i,f,c)}function l3(t,e,o,r,n,a,s){for(let i=0;i<s;i++){let c=Math.PI*i/s,f=Math.PI*(i+1)/s,l=Math.cos(c),v=Math.sin(c),d=Math.cos(f),p=Math.sin(f),u=[t+o*l,e+o*v],h=[t+o*d,e+o*p],g=[t+r*l,e+r*v],m=[t+r*d,e+r*p];Mc([u[0],u[1],n],[h[0],h[1],n],[g[0],g[1],n],[m[0],m[1],n],[0,0,-1]),Mc([u[0],u[1],a],[h[0],h[1],a],[g[0],g[1],a],[m[0],m[1],a],[0,0,1]);let x=(c+f)/2;Mc([u[0],u[1],n],[h[0],h[1],n],[u[0],u[1],a],[h[0],h[1],a],[-Math.cos(x),-Math.sin(x),0]),Mc([g[0],g[1],n],[m[0],m[1],n],[g[0],g[1],a],[m[0],m[1],a],[Math.cos(x),Math.sin(x),0])}}function iM(t,e,o,r,n,a,s){for(let i=0;i<s;i++){let c=Math.PI*i/s,f=Math.PI*(i+1)/s,l=t+o*Math.cos(c),v=e+o*Math.sin(c),d=t+o*Math.cos(f),p=e+o*Math.sin(f);Mc([l,v,n],[d,p,n],[l,r,n],[d,r,n],[0,0,-1]),Mc([l,v,a],[d,p,a],[l,r,a],[d,r,a],[0,0,1])}}function cM(t,e,o,r){let n=Ho/2,a=u3,s=3,i=a+.42,c=i+.15,f=d3,l=Hh,v=5.98,d=r-.45,p=r+.45,u=64,h=s3(F0,n-l,r,0,v,f);s3(F0,n+l,r,0,v,f),F0.curMat=[0,0,0],l3(n,s,a,i,d,p,u),l3(n,s,i,c,d-.07,p+.07,u),iM(n,s,c,h+.05,d,p,u);for(let m of[-1,1]){let x=n+m*(c-.02),y=n+m*l;Zo(t,e,o,Math.min(x,y),s,d,Math.max(x,y),h+.05,p)}for(let m of[-1,1]){let x=n+m*(a-.05),y=n+m*(a+.85);Zo(t,e,o,Math.min(x,y),s-.16,r-.6,Math.max(x,y),s,r+.6)}let g=l+f*1.42+.45;Zo(t,e,o,n-g,h,r-.7,n+g,h+.44,r+.7),Zo(t,e,o,n-g+.12,h+.44,r-.62,n+g-.12,h+.7,r+.62),Zo(t,e,o,n-g-.1,h+.7,r-.84,n+g+.1,h+.84,r+.84),Zo(t,e,o,n-g-.22,h+.84,r-.96,n+g+.22,h+1,r+.96),Zo(t,e,o,n-.3,s+a-.1,r-.56,n+.3,h,r+.56)}function f3(t,e,o,r,n){Zo(t,e,o,r-.72,0,n-.72,r+.72,.2,n+.72),Zo(t,e,o,r-.58,.2,n-.58,r+.58,.4,n+.58),Zo(t,e,o,r-wd/2,.4,n-_d/2,r+wd/2,i0-1.35,n+_d/2),Zo(t,e,o,r-.67,.42,n-.67,r+.67,.62,n+.67),Zo(t,e,o,r-.67,i0-1.58,n-.67,r+.67,i0-1.35,n+.67),Zo(t,e,o,r-.82,i0-1.35,n-.82,r+.82,i0-1.05,n+.82),Zo(t,e,o,r-.66,i0-1.05,n-.66,r+.66,i0-.78,n+.66),Zo(t,e,o,r-.92,i0-.78,n-.92,r+.92,i0-.55,n+.92),Zo(t,e,o,r-.78,i0-.55,n-.78,r+.78,i0-.3,n+.78),Zo(t,e,o,r-.92,i0-.3,n-.92,r+.92,i0-.1,n+.92)}function qh(t,e,o,r,n){n==="left"?(Zo(t,e,o,-.08,1,r-3.8/2,.14,5.7,r+3.8/2),Zo(t,e,o,-.08-.04,1+.18,r-3.8/2+.18,.18,5.7-.18,r+3.8/2-.18)):(Zo(t,e,o,Ho-.14,1,r-3.8/2,Ho+.08,5.7,r+3.8/2),Zo(t,e,o,Ho-.18,1+.18,r-3.8/2+.18,Ho+.08+.04,5.7-.18,r+3.8/2-.18))}function lM(t,e,o,r){Zo(t,e,o,.65,i0-.16,r-1.65,.65+.22,i0,r+1.65),Zo(t,e,o,Ho-.65-.22,i0-.16,r-1.65,Ho-.65,i0,r+1.65),Zo(t,e,o,.65,i0-.16,r-1.65,Ho-.65,i0,r-1.43),Zo(t,e,o,.65,i0-.16,r+1.43,Ho-.65,i0,r+1.65),o.push(...kd(t,e,[.65+.22,i0-.16,r-1.43],[Ho-.65-.22,i0-.16,r-1.43],[.65+.22,i0-.16,r+1.43],[Ho-.65-.22,i0-.16,r+1.43],[0,-1,0]))}p3.exports=function(){let t=[],e=[],o=[];Gh=[],F0=Q_.createBuilder(t,e,o,Gh),o.push(...kd(t,e,[0,0,0],[Ho,0,0],[0,0,G0],[Ho,0,G0],[0,1,0])),eM.addSkylight(F0,[0,0,0],G0),F0.curMat=[0,0,0];{let c=Sc.SURR;Zo(t,e,o,-Qo,0,0,Qo,i0,c.z0),Zo(t,e,o,-Qo,0,c.z1,Qo,i0,G0),Zo(t,e,o,-Qo,c.top,c.z0,Qo,i0,c.z1)}Zo(t,e,o,Ho-Qo,0,sa.C.z1,Ho+Qo,i0,G0-Qo),Zo(t,e,o,Ho-Qo-.12,0,sa.C.z1+2*Qo,Ho-Qo,.42,G0-Qo),Zo(t,e,o,Ho-Qo-.07,.42,sa.C.z1+2*Qo,Ho-Qo,.5,G0-Qo);for(let[c,f]of[[0,Sc.SURR.z0],[Sc.SURR.z1,G0-Qo]])Zo(t,e,o,Qo,0,c,Qo+.12,.42,f),Zo(t,e,o,Qo,.42,c,Qo+.07,.5,f);Zo(t,e,o,Qo,0,G0-Qo-.12,Ho-Qo,.42,G0-Qo),Zo(t,e,o,Qo,.42,G0-Qo-.07,Ho-Qo,.5,G0-Qo),i3.addEntranceWall(F0),i3.addFrames(F0),F0.curMat=[0,0,0],Zo(t,e,o,-Qo,0,G0-Qo,Ho+Qo,i0,G0+Qo),cM(t,e,o,Dh);for(let c of Md)f3(t,e,o,1.25,c),f3(t,e,o,Ho-1.25,c);qh(t,e,o,22,"left"),qh(t,e,o,25,"right"),qh(t,e,o,33,"left"),qh(t,e,o,36,"right");let r=[4,9,34,39,44,49];for(let c of r)lM(t,e,o,c);sa.addWing(F0),F0.curMat=[0,0,0];for(let c of Fh.filter(f=>f.pedestal))J_(F0,c.x,c.z,Uh,c3);{let c=rM;F0.curMat=[0,0,0],F0.box(c.x0,0,c.z0-.08,c.x1+.08,.16,c.z1+.08,[0,0,0]),F0.box(c.x0,.16,c.z0+.04,c.x1-.04,c.top-.14,c.z1-.04,[0,0,0]),F0.box(c.x0,c.top-.14,c.z0-.02,c.x1+.03,c.top-.06,c.z1+.02,[0,0,0]),F0.box(c.x0,c.top-.06,c.z0-.06,c.x1+.07,c.top,c.z1+.06,[0,0,0])}oM.addAlcove(F0);for(let c of Bl)tM(F0,c.x,c.z,c.seed,1,c.away);F0.curMat=[0,0,0];let n=[[[Ho,G0-.35],[0,G0-.35]],[[0,3],[0,10]],[[Ho,15],[Ho,22]],[[0,24],[0,31]],[[Ho,33],[Ho,40]],[[0,41],[0,46]]],a=sM(aM),s=(c,f)=>{let l=0,v=1/0;return n.forEach((d,p)=>{let u=(d[0][0]+d[1][0])/2,h=(d[0][1]+d[1][1])/2,g=Math.hypot(c-u,f-h);g<v&&(v=g,l=p)}),l},i=[];for(let c=0;c<10;c++)i.push({c:[0,0,0,0],d:[1,0,0,0]});return{placements:n,lights:i,statues:Fh,occluders:[...Md.flatMap(c=>[[1.25,c,.78],[Ho-1.25,c,.78]]),[Ho/2-Hh,Dh,.86],[Ho/2+Hh,Dh,.86],...Fh.filter(c=>c.pedestal).map(c=>[c.x,c.z,Uh*1.12]),...Bl.map(c=>[c.x,c.z,.34])],pedestalTop:c3,mat:Gh,getAreaIndex:s,getGridSegments:(c,f)=>a.get(c,f),getGridParts:(c,f)=>a.get(c,f),position:t,normal:e,elements:o}}});var zd=Tt((KE,m3)=>{"use strict";var{doorLightGLSL:fM}=is(),{skylightGLSL:hM}=vc(),{windowLightGLSL:uM,C:Sr}=Nn(),{alcoveLightGLSL:dM}=Gr(),Hr=t=>t.toFixed(4),pM=(()=>{let t=[-.22,.6,-.77],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>(o/e).toFixed(4)).join(", ")})();m3.exports=(t,e,o,r)=>{let a=(e.occluders||[]).slice(0,24).map(([p,u,h])=>`ao = min(ao, contact(v_pos.xz, vec2(${p.toFixed(3)}, ${u.toFixed(3)}), ${h.toFixed(3)}));`).join(`
      `),s={c:[0,0,0,0],d:[1,0,0,0]},i=-1,c=[],f=p=>{let u=p&&p.tick!==void 0?p.tick:0;if(u!==i||c.length===0){i=u;let h=e.viewer||[7,2,20];for(c=e.lights.filter(g=>g.c[3]>.5).map(g=>({l:g,d:Math.hypot(g.c[0]-h[0],g.c[2]-h[2])})).sort((g,m)=>g.d-m.d).slice(0,8).map(g=>g.l);c.length<8;)c.push(s)}return c},l={},v="",d="";for(let p=0;p<8;p++)l["lightC"+p]=u=>f(u)[p].c,l["lightD"+p]=u=>f(u)[p].d,v+="uniform vec4 lightC"+p+", lightD"+p+`;
`,d+="pic += pictureLight(lightC"+p+", lightD"+p+`, v_pos, N);
`;return t({frag:`
    precision highp float;

    uniform float yScale;
    uniform float mirrorOn;
    uniform float night;   // 0 by day, 1 at night
    uniform float time;
    ${fs().lanternGLSL()}

    varying vec3 v_pos;
    varying vec3 v_relativepos;
    varying vec3 v_normal;
    varying vec3 v_eye;
    varying vec3 v_mat;

    ${v}

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

    ${fM()}

    ${hM()}

    ${uM()}

    ${dM()}

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
        step(abs(v_pos.z - ${Hr(Sr.hallEnd)}), 0.02) * step(0.5, -N.z) +
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
                 + exp(-pow((v_pos.z - ${Hr((Sr.z0+Sr.z1)/2)}) / 1.3, 2.0)) * step(14.0, v_pos.x);
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
      ${d}

      // Corridor glow and the end wall light
      light += (1.0 - smoothstep(7.0, 35.0, abs(v_pos.z - 29.0))) * 0.04;
      light += (1.0 - smoothstep(2.0, 16.0, abs(v_pos.z - ${Hr(Sr.hallEnd-1.6)}))) * 0.09 * (1.0 - smoothstep(14.5, 18.0, v_pos.x));

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
          float through = doorLight(v_pos, vec3(${pM}));
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
        if (v_pos.x < 14.0) wallD = min(wallD, ${Hr(Sr.hallEnd)} - v_pos.z);
        if (v_pos.x < 14.0 && (v_pos.z < ${Hr(Sr.z0)} || v_pos.z > ${Hr(Sr.z1)})) wallD = min(wallD, 13.65 - v_pos.x);
        if (v_pos.x > 13.65 && v_pos.z > ${Hr(Sr.z0-1)}) wallD = min(min(min(wallD, v_pos.z - ${Hr(Sr.z0)}), ${Hr(Sr.z1)} - v_pos.z), ${Hr(Sr.x1)} - v_pos.x);
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
        if (v_pos.z < ${Hr(Sr.z0+.3)} && v_pos.x > ${Hr(Sr.x0)}) {
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
    }`,attributes:{position:e.position,normal:e.normal,a_mat:e.mat},uniforms:l,blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"zero"}},elements:new Uint32Array(e.elements),offset:r?t.prop("offset"):0,count:r?t.prop("count"):e.elements.length})}});var x3=Tt((ZE,g3)=>{"strict mode";var vM="https://api.artic.edu/api/v1/artworks/search",mM=({image_id:t},e)=>`https://www.artic.edu/iiif/2/${t}/full/${e},/0/default.jpg`,gM="?query[bool][must][][term][classification_titles.keyword]=painting&query[bool][must][][term][is_public_domain]=true",xM="&fields=image_id,title,artist_title",yM={low:400,mid:843,high:1686};g3.exports={fetchList:async function(t,e){let o=vM+gM+xM+`&from=${t}&size=${e}`;return(await fetch(o).then(n=>n.json())).data.filter(n=>n.image_id)},fetchImage:async function(t,e){let o=mM(t,yM[e]),r=await fetch(o).then(n=>n.blob());return{title:t.title+" - "+t.artist_title,image:r}}}});var w3=Tt((QE,b3)=>{"use strict";var bM=Xu(),wM=qr(),_M=t=>"images/web/"+t.slug+(wM.isPhone?"-1024":"")+".webp";async function y3(t){let e=await fetch(t);if(!e.ok)throw new Error("Could not load "+t);return e.blob()}b3.exports={fetchList:async function(t,e){return bM.slice(t,t+e).map((o,r)=>({...o,image_id:t+r}))},fetchImage:async function(t){let e;try{e=await y3(_M(t))}catch(o){e=await y3("images/"+t.file)}return{title:t.title,image:e}}}});var M3=Tt((JE,_3)=>{"strict mode";_3.exports={default:"local",artic:x3(),local:w3()}});var Ad=Tt((tA,k3)=>{"strict mode";var ai=document.createElement("canvas"),Ed=ai.width=ai.height=1024,ps=ai.getContext("2d");ps.mozImageSmoothingEnabled=!1;ps.webkitImageSmoothingEnabled=!1;ps.font="32px Verdana";ps.textBaseline="bottom";ps.fillStyle="#aaa";function S3(t,e,o,r){var n=e,a,s=0,i=0,c=e.split(" "),f,l;for(f=l=c.length;t.measureText(n).width>o&&f>1;){f--,n=a="";for(var v=0;v<l;v++)v<f?(n+=c[v],v+1<f&&(n+=" ")):(a+=c[v],v+1<l&&(a+=" "))}return r.push(n),i=t.measureText(n).width,a&&(s=S3(t,a,o,r),s>i&&(i=s)),i}k3.exports={init(t,e,o=Ed){var r=[];S3(ps,e,Math.min(o*Ed,Ed),r),ps.clearRect(0,0,ai.width,ai.height);for(var n=0;n<r.length;n++)ps.fillText(r[n],0,ai.height-(Math.max(r.length,3)-n)*32);return t({data:ai,min:"mipmap",mipmap:"nice",flipY:!0})},draw(t){return t({frag:`
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
            }`,attributes:{pos:[0,0,1,0,0,1,1,1,0,1,1,0]},uniforms:{model:t.prop("textmodel"),tex:t.prop("text")},count:6,blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}})}}});var A3=Tt((eA,E3)=>{"strict mode";var Td=M3(),MM=new URLSearchParams(window.location.search).get("api"),z3=Td[MM]||Td[Td.default],SM=Ad(),Ld={},zc=[],kM=2;function zM(t){return(!navigator.connection||navigator.connection.downlink<kM)&&(t=t=="high"?"mid":"low"),t}var EM=qr(),kc=document.createElement("canvas");kc.width=kc.height=EM.isPhone?1024:2048;var Rd=kc.getContext("2d");Rd.imageSmoothingEnabled=!0;Rd.imageSmoothingQuality="high";var Nd=!1,AM=t=>[(zc.pop()||t.texture)([[[200,200,200]]]),e=>(zc.pop()||t.texture)([[[0,0,0,0]]]),1];async function Od(t,e,o){Nd===!1&&(Nd=t.hasExtension("EXT_texture_filter_anisotropic")?t._gl.getParameter(t._gl.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0);let r,n;try{let a=await z3.fetchImage(e,zM(o));n=a.title,r=await createImageBitmap(a.image),Rd.drawImage(r,0,0,kc.width,kc.height)}catch(a){return console.error(a),o=="high"?await Od(t,e,"low"):AM(t)}return[(zc.pop()||t.texture)({data:kc,min:"mipmap",mipmap:"nice",aniso:Nd,flipY:!0}),a=>SM.init(zc.pop()||t.texture,n,a),r.width/r.height]}E3.exports={fetch:(t,e=10,o="low",r,n)=>{let a=Object.keys(Ld).length;z3.fetchList(a,e).then(s=>{e=s.length,s.map(i=>{if(Ld[i.image_id]){--e===0&&n();return}Ld[i.image_id]=i,Od(t,i,o).then(([c,f,l])=>{r({...i,tex:c,textGen:f,aspect:l}),--e===0&&n()})})})},load:(t,e,o="low")=>{e.tex||e.loading||(e.loading=!0,Od(t,e,o).then(([r,n])=>{e.loading=!1,e.tex=r,e.text=n(e.width)}))},unload:t=>{t.tex&&(zc.push(t.tex),t.tex=void 0),t.text&&(zc.push(t.text),t.text=void 0)}}});var L3=Tt((oA,T3)=>{T3.exports=TM;function TM(){var t=new Float32Array(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var O3=Tt((nA,N3)=>{N3.exports=LM;function LM(t){var e=new Float32Array(16);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}});var C3=Tt((rA,R3)=>{R3.exports=NM;function NM(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}});var Cd=Tt((aA,$3)=>{$3.exports=OM;function OM(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var I3=Tt((sA,P3)=>{P3.exports=RM;function RM(t,e){if(t===e){var o=e[1],r=e[2],n=e[3],a=e[6],s=e[7],i=e[11];t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=o,t[6]=e[9],t[7]=e[13],t[8]=r,t[9]=a,t[11]=e[14],t[12]=n,t[13]=s,t[14]=i}else t[0]=e[0],t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=e[1],t[5]=e[5],t[6]=e[9],t[7]=e[13],t[8]=e[2],t[9]=e[6],t[10]=e[10],t[11]=e[14],t[12]=e[3],t[13]=e[7],t[14]=e[11],t[15]=e[15];return t}});var D3=Tt((iA,q3)=>{q3.exports=CM;function CM(t,e){var o=e[0],r=e[1],n=e[2],a=e[3],s=e[4],i=e[5],c=e[6],f=e[7],l=e[8],v=e[9],d=e[10],p=e[11],u=e[12],h=e[13],g=e[14],m=e[15],x=o*i-r*s,y=o*c-n*s,_=o*f-a*s,M=r*c-n*i,b=r*f-a*i,S=n*f-a*c,z=l*h-v*u,k=l*g-d*u,C=l*m-p*u,R=v*g-d*h,U=v*m-p*h,P=d*m-p*g,q=x*P-y*U+_*R+M*C-b*k+S*z;return q?(q=1/q,t[0]=(i*P-c*U+f*R)*q,t[1]=(n*U-r*P-a*R)*q,t[2]=(h*S-g*b+m*M)*q,t[3]=(d*b-v*S-p*M)*q,t[4]=(c*C-s*P-f*k)*q,t[5]=(o*P-n*C+a*k)*q,t[6]=(g*_-u*S-m*y)*q,t[7]=(l*S-d*_+p*y)*q,t[8]=(s*U-i*C+f*z)*q,t[9]=(r*C-o*U-a*z)*q,t[10]=(u*b-h*_+m*x)*q,t[11]=(v*_-l*b-p*x)*q,t[12]=(i*k-s*R-c*z)*q,t[13]=(o*R-r*k+n*z)*q,t[14]=(h*y-u*M-g*x)*q,t[15]=(l*M-v*y+d*x)*q,t):null}});var G3=Tt((cA,F3)=>{F3.exports=$M;function $M(t,e){var o=e[0],r=e[1],n=e[2],a=e[3],s=e[4],i=e[5],c=e[6],f=e[7],l=e[8],v=e[9],d=e[10],p=e[11],u=e[12],h=e[13],g=e[14],m=e[15];return t[0]=i*(d*m-p*g)-v*(c*m-f*g)+h*(c*p-f*d),t[1]=-(r*(d*m-p*g)-v*(n*m-a*g)+h*(n*p-a*d)),t[2]=r*(c*m-f*g)-i*(n*m-a*g)+h*(n*f-a*c),t[3]=-(r*(c*p-f*d)-i*(n*p-a*d)+v*(n*f-a*c)),t[4]=-(s*(d*m-p*g)-l*(c*m-f*g)+u*(c*p-f*d)),t[5]=o*(d*m-p*g)-l*(n*m-a*g)+u*(n*p-a*d),t[6]=-(o*(c*m-f*g)-s*(n*m-a*g)+u*(n*f-a*c)),t[7]=o*(c*p-f*d)-s*(n*p-a*d)+l*(n*f-a*c),t[8]=s*(v*m-p*h)-l*(i*m-f*h)+u*(i*p-f*v),t[9]=-(o*(v*m-p*h)-l*(r*m-a*h)+u*(r*p-a*v)),t[10]=o*(i*m-f*h)-s*(r*m-a*h)+u*(r*f-a*i),t[11]=-(o*(i*p-f*v)-s*(r*p-a*v)+l*(r*f-a*i)),t[12]=-(s*(v*g-d*h)-l*(i*g-c*h)+u*(i*d-c*v)),t[13]=o*(v*g-d*h)-l*(r*g-n*h)+u*(r*d-n*v),t[14]=-(o*(i*g-c*h)-s*(r*g-n*h)+u*(r*c-n*i)),t[15]=o*(i*d-c*v)-s*(r*d-n*v)+l*(r*c-n*i),t}});var U3=Tt((lA,H3)=>{H3.exports=PM;function PM(t){var e=t[0],o=t[1],r=t[2],n=t[3],a=t[4],s=t[5],i=t[6],c=t[7],f=t[8],l=t[9],v=t[10],d=t[11],p=t[12],u=t[13],h=t[14],g=t[15],m=e*s-o*a,x=e*i-r*a,y=e*c-n*a,_=o*i-r*s,M=o*c-n*s,b=r*c-n*i,S=f*u-l*p,z=f*h-v*p,k=f*g-d*p,C=l*h-v*u,R=l*g-d*u,U=v*g-d*h;return m*U-x*R+y*C+_*k-M*z+b*S}});var j3=Tt((fA,B3)=>{B3.exports=IM;function IM(t,e,o){var r=e[0],n=e[1],a=e[2],s=e[3],i=e[4],c=e[5],f=e[6],l=e[7],v=e[8],d=e[9],p=e[10],u=e[11],h=e[12],g=e[13],m=e[14],x=e[15],y=o[0],_=o[1],M=o[2],b=o[3];return t[0]=y*r+_*i+M*v+b*h,t[1]=y*n+_*c+M*d+b*g,t[2]=y*a+_*f+M*p+b*m,t[3]=y*s+_*l+M*u+b*x,y=o[4],_=o[5],M=o[6],b=o[7],t[4]=y*r+_*i+M*v+b*h,t[5]=y*n+_*c+M*d+b*g,t[6]=y*a+_*f+M*p+b*m,t[7]=y*s+_*l+M*u+b*x,y=o[8],_=o[9],M=o[10],b=o[11],t[8]=y*r+_*i+M*v+b*h,t[9]=y*n+_*c+M*d+b*g,t[10]=y*a+_*f+M*p+b*m,t[11]=y*s+_*l+M*u+b*x,y=o[12],_=o[13],M=o[14],b=o[15],t[12]=y*r+_*i+M*v+b*h,t[13]=y*n+_*c+M*d+b*g,t[14]=y*a+_*f+M*p+b*m,t[15]=y*s+_*l+M*u+b*x,t}});var V3=Tt((hA,W3)=>{W3.exports=qM;function qM(t,e,o){var r=o[0],n=o[1],a=o[2],s,i,c,f,l,v,d,p,u,h,g,m;return e===t?(t[12]=e[0]*r+e[4]*n+e[8]*a+e[12],t[13]=e[1]*r+e[5]*n+e[9]*a+e[13],t[14]=e[2]*r+e[6]*n+e[10]*a+e[14],t[15]=e[3]*r+e[7]*n+e[11]*a+e[15]):(s=e[0],i=e[1],c=e[2],f=e[3],l=e[4],v=e[5],d=e[6],p=e[7],u=e[8],h=e[9],g=e[10],m=e[11],t[0]=s,t[1]=i,t[2]=c,t[3]=f,t[4]=l,t[5]=v,t[6]=d,t[7]=p,t[8]=u,t[9]=h,t[10]=g,t[11]=m,t[12]=s*r+l*n+u*a+e[12],t[13]=i*r+v*n+h*a+e[13],t[14]=c*r+d*n+g*a+e[14],t[15]=f*r+p*n+m*a+e[15]),t}});var Y3=Tt((uA,X3)=>{X3.exports=DM;function DM(t,e,o){var r=o[0],n=o[1],a=o[2];return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t[4]=e[4]*n,t[5]=e[5]*n,t[6]=e[6]*n,t[7]=e[7]*n,t[8]=e[8]*a,t[9]=e[9]*a,t[10]=e[10]*a,t[11]=e[11]*a,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}});var Z3=Tt((dA,K3)=>{K3.exports=FM;function FM(t,e,o,r){var n=r[0],a=r[1],s=r[2],i=Math.sqrt(n*n+a*a+s*s),c,f,l,v,d,p,u,h,g,m,x,y,_,M,b,S,z,k,C,R,U,P,q,at;return Math.abs(i)<1e-6?null:(i=1/i,n*=i,a*=i,s*=i,c=Math.sin(o),f=Math.cos(o),l=1-f,v=e[0],d=e[1],p=e[2],u=e[3],h=e[4],g=e[5],m=e[6],x=e[7],y=e[8],_=e[9],M=e[10],b=e[11],S=n*n*l+f,z=a*n*l+s*c,k=s*n*l-a*c,C=n*a*l-s*c,R=a*a*l+f,U=s*a*l+n*c,P=n*s*l+a*c,q=a*s*l-n*c,at=s*s*l+f,t[0]=v*S+h*z+y*k,t[1]=d*S+g*z+_*k,t[2]=p*S+m*z+M*k,t[3]=u*S+x*z+b*k,t[4]=v*C+h*R+y*U,t[5]=d*C+g*R+_*U,t[6]=p*C+m*R+M*U,t[7]=u*C+x*R+b*U,t[8]=v*P+h*q+y*at,t[9]=d*P+g*q+_*at,t[10]=p*P+m*q+M*at,t[11]=u*P+x*q+b*at,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t)}});var J3=Tt((pA,Q3)=>{Q3.exports=GM;function GM(t,e,o){var r=Math.sin(o),n=Math.cos(o),a=e[4],s=e[5],i=e[6],c=e[7],f=e[8],l=e[9],v=e[10],d=e[11];return e!==t&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[4]=a*n+f*r,t[5]=s*n+l*r,t[6]=i*n+v*r,t[7]=c*n+d*r,t[8]=f*n-a*r,t[9]=l*n-s*r,t[10]=v*n-i*r,t[11]=d*n-c*r,t}});var eg=Tt((vA,tg)=>{tg.exports=HM;function HM(t,e,o){var r=Math.sin(o),n=Math.cos(o),a=e[0],s=e[1],i=e[2],c=e[3],f=e[8],l=e[9],v=e[10],d=e[11];return e!==t&&(t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=a*n-f*r,t[1]=s*n-l*r,t[2]=i*n-v*r,t[3]=c*n-d*r,t[8]=a*r+f*n,t[9]=s*r+l*n,t[10]=i*r+v*n,t[11]=c*r+d*n,t}});var ng=Tt((mA,og)=>{og.exports=UM;function UM(t,e,o){var r=Math.sin(o),n=Math.cos(o),a=e[0],s=e[1],i=e[2],c=e[3],f=e[4],l=e[5],v=e[6],d=e[7];return e!==t&&(t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=a*n+f*r,t[1]=s*n+l*r,t[2]=i*n+v*r,t[3]=c*n+d*r,t[4]=f*n-a*r,t[5]=l*n-s*r,t[6]=v*n-i*r,t[7]=d*n-c*r,t}});var ag=Tt((gA,rg)=>{rg.exports=BM;function BM(t,e,o){var r,n,a,s=o[0],i=o[1],c=o[2],f=Math.sqrt(s*s+i*i+c*c);return Math.abs(f)<1e-6?null:(f=1/f,s*=f,i*=f,c*=f,r=Math.sin(e),n=Math.cos(e),a=1-n,t[0]=s*s*a+n,t[1]=i*s*a+c*r,t[2]=c*s*a-i*r,t[3]=0,t[4]=s*i*a-c*r,t[5]=i*i*a+n,t[6]=c*i*a+s*r,t[7]=0,t[8]=s*c*a+i*r,t[9]=i*c*a-s*r,t[10]=c*c*a+n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t)}});var ig=Tt((xA,sg)=>{sg.exports=jM;function jM(t,e,o){var r=e[0],n=e[1],a=e[2],s=e[3],i=r+r,c=n+n,f=a+a,l=r*i,v=r*c,d=r*f,p=n*c,u=n*f,h=a*f,g=s*i,m=s*c,x=s*f;return t[0]=1-(p+h),t[1]=v+x,t[2]=d-m,t[3]=0,t[4]=v-x,t[5]=1-(l+h),t[6]=u+g,t[7]=0,t[8]=d+m,t[9]=u-g,t[10]=1-(l+p),t[11]=0,t[12]=o[0],t[13]=o[1],t[14]=o[2],t[15]=1,t}});var lg=Tt((yA,cg)=>{cg.exports=WM;function WM(t,e){return t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=e[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var hg=Tt((bA,fg)=>{fg.exports=VM;function VM(t,e){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e[0],t[13]=e[1],t[14]=e[2],t[15]=1,t}});var dg=Tt((wA,ug)=>{ug.exports=XM;function XM(t,e){var o=Math.sin(e),r=Math.cos(e);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r,t[6]=o,t[7]=0,t[8]=0,t[9]=-o,t[10]=r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var vg=Tt((_A,pg)=>{pg.exports=YM;function YM(t,e){var o=Math.sin(e),r=Math.cos(e);return t[0]=r,t[1]=0,t[2]=-o,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=o,t[9]=0,t[10]=r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var gg=Tt((MA,mg)=>{mg.exports=KM;function KM(t,e){var o=Math.sin(e),r=Math.cos(e);return t[0]=r,t[1]=o,t[2]=0,t[3]=0,t[4]=-o,t[5]=r,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var yg=Tt((SA,xg)=>{xg.exports=ZM;function ZM(t,e){var o=e[0],r=e[1],n=e[2],a=e[3],s=o+o,i=r+r,c=n+n,f=o*s,l=r*s,v=r*i,d=n*s,p=n*i,u=n*c,h=a*s,g=a*i,m=a*c;return t[0]=1-v-u,t[1]=l+m,t[2]=d-g,t[3]=0,t[4]=l-m,t[5]=1-f-u,t[6]=p+h,t[7]=0,t[8]=d+g,t[9]=p-h,t[10]=1-f-v,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var wg=Tt((kA,bg)=>{bg.exports=QM;function QM(t,e,o,r,n,a,s){var i=1/(o-e),c=1/(n-r),f=1/(a-s);return t[0]=a*2*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a*2*c,t[6]=0,t[7]=0,t[8]=(o+e)*i,t[9]=(n+r)*c,t[10]=(s+a)*f,t[11]=-1,t[12]=0,t[13]=0,t[14]=s*a*2*f,t[15]=0,t}});var Mg=Tt((zA,_g)=>{_g.exports=JM;function JM(t,e,o,r,n){var a=1/Math.tan(e/2),s=1/(r-n);return t[0]=a/o,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(n+r)*s,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*n*r*s,t[15]=0,t}});var kg=Tt((EA,Sg)=>{Sg.exports=t8;function t8(t,e,o,r){var n=Math.tan(e.upDegrees*Math.PI/180),a=Math.tan(e.downDegrees*Math.PI/180),s=Math.tan(e.leftDegrees*Math.PI/180),i=Math.tan(e.rightDegrees*Math.PI/180),c=2/(s+i),f=2/(n+a);return t[0]=c,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=f,t[6]=0,t[7]=0,t[8]=-((s-i)*c*.5),t[9]=(n-a)*f*.5,t[10]=r/(o-r),t[11]=-1,t[12]=0,t[13]=0,t[14]=r*o/(o-r),t[15]=0,t}});var Eg=Tt((AA,zg)=>{zg.exports=e8;function e8(t,e,o,r,n,a,s){var i=1/(e-o),c=1/(r-n),f=1/(a-s);return t[0]=-2*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*c,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*f,t[11]=0,t[12]=(e+o)*i,t[13]=(n+r)*c,t[14]=(s+a)*f,t[15]=1,t}});var Tg=Tt((TA,Ag)=>{var o8=Cd();Ag.exports=n8;function n8(t,e,o,r){var n,a,s,i,c,f,l,v,d,p,u=e[0],h=e[1],g=e[2],m=r[0],x=r[1],y=r[2],_=o[0],M=o[1],b=o[2];return Math.abs(u-_)<1e-6&&Math.abs(h-M)<1e-6&&Math.abs(g-b)<1e-6?o8(t):(l=u-_,v=h-M,d=g-b,p=1/Math.sqrt(l*l+v*v+d*d),l*=p,v*=p,d*=p,n=x*d-y*v,a=y*l-m*d,s=m*v-x*l,p=Math.sqrt(n*n+a*a+s*s),p?(p=1/p,n*=p,a*=p,s*=p):(n=0,a=0,s=0),i=v*s-d*a,c=d*n-l*s,f=l*a-v*n,p=Math.sqrt(i*i+c*c+f*f),p?(p=1/p,i*=p,c*=p,f*=p):(i=0,c=0,f=0),t[0]=n,t[1]=i,t[2]=l,t[3]=0,t[4]=a,t[5]=c,t[6]=v,t[7]=0,t[8]=s,t[9]=f,t[10]=d,t[11]=0,t[12]=-(n*u+a*h+s*g),t[13]=-(i*u+c*h+f*g),t[14]=-(l*u+v*h+d*g),t[15]=1,t)}});var Ng=Tt((LA,Lg)=>{Lg.exports=r8;function r8(t){return"mat4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+")"}});var Ec=Tt((NA,Og)=>{Og.exports={create:L3(),clone:O3(),copy:C3(),identity:Cd(),transpose:I3(),invert:D3(),adjoint:G3(),determinant:U3(),multiply:j3(),translate:V3(),scale:Y3(),rotate:Z3(),rotateX:J3(),rotateY:eg(),rotateZ:ng(),fromRotation:ag(),fromRotationTranslation:ig(),fromScaling:lg(),fromTranslation:hg(),fromXRotation:dg(),fromYRotation:vg(),fromZRotation:gg(),fromQuat:yg(),frustum:wg(),perspective:Mg(),perspectiveFromFieldOfView:kg(),ortho:Eg(),lookAt:Tg(),str:Ng()}});var $g=Tt((OA,Cg)=>{"use strict";var Rg=A3(),R0=Ec(),si=Nn(),a8=3e3,jh="high",$d,Wl=.36,Vl=13.64,Ac=si.C.hallEnd-.01,Xl=si.C.z0+.01,s8=.356,i8=13.644,c8=si.C.hallEnd-.006,l8=si.C.z0+.006,f8=.12,Vh=4,Tc=t=>On[t]&&On[t].cy||Vh,Pd=.26,h8=5.6,u8=7,On=[{side:"right",z:34.5},{side:"right",z:23.5},{side:"left",z:23.5},{side:"end",z:Ac},{side:"left",z:34.5},{side:"right",z:14.6},{side:"left",z:14.6,maxW:3.7,maxH:3.7},{side:"corridor",x:si.PAINTING_X[0],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:si.PAINTING_X[1],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:si.PAINTING_X[2],cy:3,maxW:3.3,maxH:3.73}];function d8(t,e){let o=e&&e.maxH||h8,r=e&&e.maxW||u8,n=Math.min(o,r/t);return{width:n*t,height:n}}function p8(t,e,o){let r=On[o],n=[],a=Tc(o)-e/2;return r.side==="left"?(R0.fromTranslation(n,[Wl,a,r.z+t/2]),R0.rotateY(n,n,Math.PI/2)):r.side==="right"?(R0.fromTranslation(n,[Vl,a,r.z-t/2]),R0.rotateY(n,n,-Math.PI/2)):r.side==="corridor"?R0.fromTranslation(n,[r.x-t/2,a,Xl]):(R0.fromTranslation(n,[7+t/2,a,Ac]),R0.rotateY(n,n,Math.PI)),R0.scale(n,n,[t,e,f8]),n}function v8(t,e,o){let r=On[o],n=[],a=Tc(o)-e/2;return r.side==="left"?(R0.fromTranslation(n,[Wl,a,r.z+t/2]),R0.rotateY(n,n,Math.PI/2)):r.side==="right"?(R0.fromTranslation(n,[Vl,a,r.z-t/2]),R0.rotateY(n,n,-Math.PI/2)):r.side==="corridor"?R0.fromTranslation(n,[r.x-t/2,a,Xl]):(R0.fromTranslation(n,[7+t/2,a,Ac]),R0.rotateY(n,n,Math.PI)),n}function m8(t,e,o){let r=On[o],n=[],a=Tc(o)-e/2-Pd-.38;return r.side==="left"?(R0.fromTranslation(n,[s8,a,r.z+t/2]),R0.rotateY(n,n,Math.PI/2)):r.side==="right"?(R0.fromTranslation(n,[i8,a,r.z-t/2]),R0.rotateY(n,n,-Math.PI/2)):r.side==="corridor"?R0.fromTranslation(n,[r.x-t/2,a,l8]):(R0.fromTranslation(n,[7+t/2,a,c8]),R0.rotateY(n,n,Math.PI)),R0.scale(n,n,[2,2,2]),n}function g8(t,e,o){let r=On[o],n=Tc(o)-e/2-Pd-.38;return r.side==="left"?[Wl+.55,n,r.z]:r.side==="right"?[Vl-.55,n,r.z]:r.side==="corridor"?[r.x,n,Xl+.55]:[7,n,Ac-.55]}var jl=.42;function Wh(t,e,o,r,n,a){return[e[0]*r,e[1]*r,e[2]*r,0,0,n,0,0,o[0]*a,o[1]*a,o[2]*a,0,t[0],t[1],t[2],1]}function x8(t,e,o){let r=On[o],n,a,s;r.side==="left"?(n=[Wl,r.z],a=[0,0,1],s=[1,0,0]):r.side==="right"?(n=[Vl,r.z],a=[0,0,1],s=[-1,0,0]):r.side==="corridor"?(n=[r.x,Xl],a=[1,0,0],s=[0,0,1]):(n=[7,Ac],a=[1,0,0],s=[0,0,-1]);let i=Tc(o)+e/2+Pd+.3,c=Math.min(2.4,Math.max(.9,t*.55)),f=(p,u)=>[n[0]+s[0]*p,u,n[1]+s[2]*p],l=[.075,.062,.05],v=[{fixmodel:Wh(f(.014,i),a,s,.1,.13,.028),fixcol:l,fixglow:0},{fixmodel:Wh(f(jl/2,i),a,s,.02,.02,jl),fixcol:l,fixglow:0},{fixmodel:Wh(f(jl,i),a,s,c,.034,.05),fixcol:l,fixglow:0},{fixmodel:Wh(f(jl-.012,i-.019),a,s,c*.94,.006,.028),fixcol:l,fixglow:1}],d=f(jl,i-.02);return{fixtures:v,light:{c:[d[0],d[1],d[2],1],d:[a[0],a[1],a[2],c/2]}}}Cg.exports=(t,e)=>{let o=[],r=[],n=a=>{let s=a.image_id;if(!On[s])return;let{width:i,height:c}=d8(a.aspect,On[s]),f=x8(i,c,s);e&&e.lights&&s<e.lights.length&&(e.lights[s]=f.light),o.push({...a,fixtures:f.fixtures,side:On[s].side,model:p8(i,c,s),framemodel:v8(i,c,s),framesize:[i,c],textmodel:m8(i,c,s),text:a.textGen(i),width:i,height:c,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:g8(i,c,s),paintingPosition:On[s].side==="left"?[Wl+.05,Vh,On[s].z]:On[s].side==="right"?[Vl-.05,Vh,On[s].z]:On[s].side==="corridor"?[On[s].x,Tc(s),Xl+.05]:[7,Vh,Ac-.05],textGen:null})};return Rg.fetch(t,On.length,jh,n,()=>{}),{update:()=>{r=o,r.forEach(a=>{Rg.load(t,a,jh)}),jh="low",$d&&clearTimeout($d),$d=setTimeout(()=>{jh="high"},a8)},batch:()=>r,interactables:()=>r.map((a,s)=>({side:a.side,width:a.width,index:s,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:a.plaquePosition,paintingPosition:a.paintingPosition}))}}});var Dg=Tt((RA,qg)=>{"use strict";var y8=Ad(),Pg=qr(),Ig=[[-.02,.125],[-.02,.15],[.035,.15],[.07,.12],[.07,.17],[.185,.17],[.185,.19],[.215,.19],[.26,.03]];function b8(){let t=[[0,0],[1,0],[1,1],[0,1]],e=[];Ig.forEach(([r,n])=>{t.forEach(([a,s])=>e.push([a,s,r,n]))});let o=[];for(let r=0;r<Ig.length-1;r++)for(let n=0;n<4;n++){let a=(n+1)%4,s=r*4+n,i=r*4+a,c=(r+1)*4+n,f=(r+1)*4+a;o.push(s,i,f,s,f,c)}return{verts:e,elems:o}}var w8=`#extension GL_OES_standard_derivatives : enable
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
}`,_8=`
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
}`;qg.exports=t=>{let e=y8.draw(t),o=t({frag:`#extension GL_OES_standard_derivatives : enable
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
	${fs().lanternGLSL()}
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
	}`,attributes:{pos:[0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,-.1,-.1,0,1.1,-.1,0,-.1,1.1,0,1.1,1.1,0]},elements:[0,1,2,3,2,1,1,0,5,4,5,0,3,1,7,5,7,1,0,2,4,6,4,2,8,9,4,5,4,9,9,11,5,7,5,11,11,10,7,6,7,10,10,8,6,4,6,8],uniforms:{model:t.prop("model"),tex:t.prop("tex"),psize:t.prop("framesize"),canvasCm:(s,i)=>i.size?[i.size[1],i.size[0]]:[61,91],texel:1/(Pg.isPhone?1024:2048),detail:()=>Pg.post===0?0:1},blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}}),r=b8(),n=t({frag:w8,vert:_8,attributes:{prof:r.verts},elements:r.elems,uniforms:{model:t.prop("framemodel"),fsize:t.prop("framesize")},cull:{enable:!1},blend:{enable:!1}}),a=t({frag:`#extension GL_OES_standard_derivatives : enable
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
}`,attributes:{pos:[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5],[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]]},elements:[0,1,2,0,2,3,4,5,6,4,6,7,0,1,5,0,5,4,2,3,7,2,7,6,0,3,7,0,7,4,1,2,6,1,6,5],uniforms:{model:t.prop("fixmodel"),fixcol:t.prop("fixcol"),fixglow:t.prop("fixglow")},cull:{enable:!1},blend:{enable:!1}});return function(s){o(s),n(s);let i=[];s.forEach(c=>{c.fixtures&&i.push(...c.fixtures)}),i.length&&a(i),e(s)}}});var Oc=Tt(($A,zn)=>{"use strict";var ke=Math.PI,F=t=>(+t).toFixed(4),he=[-90,0,0],Rt=16,_e=22,ao=7.8,ur=11.6,cn=.55,Rn=(ur-ao)/(Rt/2),xe={c:[3.6,8.6,13.6,18.6],hw:1.3,sill:.62,spring:4.9};xe.top=xe.spring+xe.hw;var Zn={cols:[-.65,0,.65],rowH:.71,w:.055,ring:.78},kr={rafter:_e/12,rafterW:.1,purlin:1,purlinW:.07},fi=[5.5,11,16.5],io={cx:Rt/2,hw:1.12,spring:3.95,pier:1.05,face:_e-1.45,back:_e-.2,floor:.66,top:6.55};io.x0=io.cx-io.hw-io.pier;io.x1=io.cx+io.hw+io.pier;var ht={x0:Rt/2-1.7,x1:Rt/2+1.7,z0:_e-io.face+.44,z1:_e-8.2,curb:.5,top:.13},to={cx:Rt/2,cz:18.1,ri:1.66,ro:2.06,top:6,hw:.84,spring:3.4,cornice:4.85,cloth:2.6,gap:.92},Fg=[.647,.614,.279,-.154,-.322,-.191,-.012,.041,-.087,-.551,-.876,-1,.368,.414,.325,.162,.216,.345,.495,.35,.369,-.7,-.522,-.318,-.128,-.041,.581,.696,.442,.274,.394,.607,.713,-.498,-.313,.401,.802,.751,-.174,-.702,-.917,-.992,-.883,.29,.475,.557,.55,.426,.135,-.125,-.259,-.391,-.671,-.951,-.964,-.727,-.471,-.32,-.244,-.123,.166,.573,.775,.395],Y0=t=>ht.z1-(t-5.6)/11*(ht.z1-ht.z0),u0={x:Rt/2,z:1,plinth:io.floor+.26,height:2.75,yaw:.35,file:"res/nymph.bin"},Xh=_e-u0.z,hr=(()=>{let t=[-.85,.3,.3],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>o/e)})(),Yh=(()=>{let t=[-.3,.82,.48],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>o/e)})(),Gg=t=>{let e=1e9,o=-1e9,r=1e9,n=-1e9;for(let a of[0,Rt])for(let s of[0,ur+.3])for(let i of[0,_e]){let c=(ao-s)/t[1],f=a+t[0]*c,l=i+t[2]*c;e=Math.min(e,f),o=Math.max(o,f),r=Math.min(r,l),n=Math.max(n,l)}return[e-.3,r-.3,o-e+.6,n-r+.6]},In={sun:Gg(hr),moon:Gg(Yh)},tf=t=>[t[0]+he[0],t[1]+he[1],t[2]+he[2]];function Qh(t){(!t||t==="baked")&&(t=typeof location!="undefined"&&/analyticsun/.test(location.search)?"analytic":"baked");let e=xe.c.map(r=>`
		{
			float dz = q.z - ${F(r)};
			float inside = smoothstep(-b, b, ${F(xe.hw)} - abs(dz)) * smoothstep(-b, b, q.y - ${F(xe.sill)});
			float arch = smoothstep(-b, b, ${F(xe.hw)} - length(vec2(dz, max(q.y - ${F(xe.spring)}, 0.0))));
			o = max(o, inside * arch);
		}`).join(""),o=xe.c.map(r=>`
		{
			float dz = q.z - ${F(r)};
			if (abs(dz) < ${F(xe.hw+.2)}) {
				${Zn.cols.map(n=>`bar = max(bar, 1.0 - smoothstep(${F(Zn.w*.5)} - b, ${F(Zn.w*.5)} + b, abs(dz - ${F(n)})));`).join(`
				`)}
				float ry = q.y - ${F(xe.sill)};
				float tr = abs(ry - ${F(Zn.rowH)} * floor(ry / ${F(Zn.rowH)} + 0.5));
				if (q.y < ${F(xe.spring+.02)}) bar = max(bar, 1.0 - smoothstep(${F(Zn.w*.5)} - b, ${F(Zn.w*.5)} + b, tr));
				float rr = length(vec2(dz, q.y - ${F(xe.spring)}));
				if (q.y > ${F(xe.spring)}) bar = max(bar, 1.0 - smoothstep(${F(Zn.w*.5)} - b, ${F(Zn.w*.5)} + b, abs(rr - ${F(Zn.ring)})));
				// the frame round the opening
				bar = max(bar, 1.0 - smoothstep(0.0, b + 0.03, ${F(xe.hw)} - max(abs(dz), q.y > ${F(xe.spring)} ? rr : 0.0)));
			}
		}`).join("");return`
	const vec3 STUDIO_SUN_D = vec3(${F(hr[0])}, ${F(hr[1])}, ${F(hr[2])});
	const vec3 STUDIO_MOON_D = vec3(${F(Yh[0])}, ${F(Yh[1])}, ${F(Yh[2])});
#define STUDIO_SUN normalize(mix(STUDIO_SUN_D, STUDIO_MOON_D, smoothstep(0.25, 0.75, night)))

	// how open a window is at (y, z) on the wall's face; b softens edges
	float studioWinOpen(vec3 q, float b) {
		float o = 0.0;
		${e}
		return o;
	}
	float studioWinBars(vec3 q, float b) {
		float bar = 0.0;
		${o}
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

${t==="analytic"?`	float studioSun0(vec3 pw) {
		vec3 p = pw - vec3(${F(he[0])}, ${F(he[1])}, ${F(he[2])});
		vec3 S = STUDIO_SUN;
		// the niche: inside its hollow, the sun gets in only through the arch;
		// elsewhere its block of stone stands in the way of some of the light
		{
			// (worked as if the niche stood against the far wall: z turned round)
			vec3 q = vec3(${F(Rt)} - p.x, p.y, ${F(_e)} - p.z);
			vec3 Sq = vec3(-S.x, S.y, -S.z);
			float dxn = q.x - ${F(io.cx)};
			if (abs(dxn) < ${F(io.hw)} && q.z > ${F(io.face)} && q.y > ${F(io.floor-.05)} && q.y < ${F(io.spring)} + sqrt(max(${F(io.hw*io.hw)} - dxn * dxn, 0.0))) {
				if (Sq.z >= 0.0) return 0.0;
				vec3 hf = q + Sq * ((${F(io.face)} - q.z) / Sq.z);
				float hx = hf.x - ${F(io.cx)};
				float edge = ${F(io.hw)} - abs(hx);
				float topY = ${F(io.spring)} + sqrt(max(${F(io.hw*io.hw)} - hx * hx, 0.0));
				float soft = 0.02 + 0.03 * (${F(io.face)} - q.z) / Sq.z;
				float inA = smoothstep(-soft, soft, edge) * smoothstep(-soft, soft, topY - hf.y);
				if (inA <= 0.0) return 0.0;
			} else {
				vec3 bmin = vec3(${F(io.x0-.2)}, 0.0, ${F(io.face-.3)}), bmax = vec3(${F(io.x1+.2)}, ${F(6.95)}, ${F(_e)});
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
		float te = (${F(ao)} - p.y) / S.y;
		if (tw > 0.0 && tw < te) {
			vec3 h0 = p + S * tw;
			if (h0.z < 0.0 || h0.z > ${F(_e)}) return 0.0;
			vec3 h1 = p + S * ((${F(-cn)} - p.x) / S.x);
			vec3 hm = p + S * ((${F(-cn*.5)} - p.x) / S.x);
			float b = 0.006 + 0.0075 * tw;
			float open = min(studioWinOpen(h0, b), studioWinOpen(h1, b));
			if (open <= 0.0) return 0.0;
			float bar = studioWinBars(hm, b);
			return open * (1.0 - bar) * 0.92;
		}
		// up through the roof: the trusses' tie beams first
		vec3 he = p + S * max(te, 0.0);
		float vis = 1.0;
		if (p.y < ${F(ao)}) {
			if (he.z < 0.0 || he.z > ${F(_e)} || he.x < 0.0 || he.x > ${F(Rt)}) return 0.0;
			float be = 0.01 + 0.008 * te;
			${fi.map(r=>`vis *= smoothstep(0.08 - be, 0.08 + be, abs(he.z - ${F(r)}));`).join(`
			`)}
			// the bougainvillea along the tie beams
			${Ua.filter(r=>r[0]==="truss").map(([r,n,a])=>`vis *= 1.0 - studioVineShade(he.z - ${F(n)}, he.x, he.z, ${F(a)});`).join(`
			`)}
		}
		// then the glass: the two slopes of the roof
		float tl = (${F(Rn)} * p.x - p.y + ${F(ao)}) / (S.y - ${F(Rn)} * S.x);
		float tr = (${F(Rn)} * (${F(Rt)} - p.x) - p.y + ${F(ao)}) / (S.y + ${F(Rn)} * S.x);
		float t = 1e9;
		vec3 h = vec3(0.0);
		vec3 hl = p + S * tl, hr = p + S * tr;
		if (tl > 0.0 && hl.x >= -0.01 && hl.x <= ${F(Rt/2+.01)}) { t = tl; h = hl; }
		if (tr > 0.0 && tr < t && hr.x >= ${F(Rt/2-.01)} && hr.x <= ${F(Rt+.01)}) { t = tr; h = hr; }
		if (t > 1e8) return 0.0;
		if (h.z < 0.0 || h.z > ${F(_e)}) return 0.0;
		float b = 0.008 + 0.0075 * t;
		float rz = abs(h.z - ${F(kr.rafter)} * floor(h.z / ${F(kr.rafter)} + 0.5));
		float bar = 1.0 - smoothstep(${F(kr.rafterW*.5)} - b, ${F(kr.rafterW*.5)} + b, rz);
		// the ridge beam
		bar = max(bar, 1.0 - smoothstep(0.14 - b, 0.14 + b, abs(h.x - ${F(Rt/2)})));
		// the old glass is grimy: it lets less through than the windows,
		// unevenly, so the roof's light falls in soft dim drifts and the
		// windows' patterned beams are the bright, dramatic ones
		float pat = 0.42 + 0.3 * smoothstep(-0.6, 0.6, sin(h.x * 0.9 + 1.3) * sin(h.z * 0.7 + 0.4) + 0.4 * sin(h.x * 2.1 - h.z * 1.7));
		// and the vine along the rafters and the ridge
		${Ua.filter(r=>r[0]==="rafter").map(([r,n,a])=>`pat *= 1.0 - studioVineShade(h.z - ${F(n)}, h.x, h.z, ${F(a)});`).join(`
		`)}
		pat *= 1.0 - studioVineShade(h.x - ${F(Rt/2)}, h.z, h.x, 0.9);
		return vis * (1.0 - bar) * pat * 0.78;
	}

`:t==="bake"?`	// for the bake: how much of the sky a beam along S gets through the
	// windows or the roof, given where it crosses the eaves' height
	// (r: for points below the eaves, past the tie beams; g: above them)
	vec2 studioExit(vec3 q, vec3 S) {
		float g = 0.0;
		{
			float tl = (${F(Rn)} * q.x - q.y + ${F(ao)}) / (S.y - ${F(Rn)} * S.x);
			float tr = (${F(Rn)} * (${F(Rt)} - q.x) - q.y + ${F(ao)}) / (S.y + ${F(Rn)} * S.x);
			float t = 1e9;
			vec3 h = vec3(0.0);
			vec3 hl = q + S * tl, hr = q + S * tr;
			if (tl > -20.0 && hl.x >= -0.01 && hl.x <= ${F(Rt/2+.01)}) { t = tl; h = hl; }
			if (tr > -20.0 && tr < t && hr.x >= ${F(Rt/2-.01)} && hr.x <= ${F(Rt+.01)}) { t = tr; h = hr; }
			if (t < 1e8 && h.z >= 0.0 && h.z <= ${F(_e)}) {
				float b = 0.03 + 0.0075 * max(t, 0.0);
				float rz = abs(h.z - ${F(kr.rafter)} * floor(h.z / ${F(kr.rafter)} + 0.5));
				float bar = 1.0 - smoothstep(${F(kr.rafterW*.5)} - b, ${F(kr.rafterW*.5)} + b, rz);
				bar = max(bar, 1.0 - smoothstep(0.14 - b, 0.14 + b, abs(h.x - ${F(Rt/2)})));
				float pat = 0.42 + 0.3 * smoothstep(-0.6, 0.6, sin(h.x * 0.9 + 1.3) * sin(h.z * 0.7 + 0.4) + 0.4 * sin(h.x * 2.1 - h.z * 1.7));
				${Ua.filter(r=>r[0]==="rafter").map(([r,n,a])=>`pat *= 1.0 - studioVineShade(h.z - ${F(n)}, h.x, h.z, ${F(a)});`).join(`
				`)}
				pat *= 1.0 - studioVineShade(h.x - ${F(Rt/2)}, h.z, h.x, 0.9);
				g = (1.0 - bar) * pat * 0.78;
			}
		}
		float r = 0.0;
		if (q.x < 0.0) {
			// it leaves through a window in the left wall
			vec3 h0 = q + S * ((0.0 - q.x) / S.x);
			if (h0.z >= 0.0 && h0.z <= ${F(_e)} && h0.y > 0.0) {
				vec3 h1 = q + S * ((${F(-cn)} - q.x) / S.x);
				vec3 hm = q + S * ((${F(-cn*.5)} - q.x) / S.x);
				float b = 0.022;
				float open = min(studioWinOpen(h0, b), studioWinOpen(h1, b));
				r = open * (1.0 - studioWinBars(hm, b)) * 0.92;
			}
		} else if (q.x <= ${F(Rt)} && q.z >= 0.0 && q.z <= ${F(_e)}) {
			// up through the roof, past the tie beams and their vine
			float vis = 1.0;
			float be = 0.025;
			${fi.map(r=>`vis *= smoothstep(0.08 - be, 0.08 + be, abs(q.z - ${F(r)}));`).join(`
			`)}
			${Ua.filter(r=>r[0]==="truss").map(([r,n,a])=>`vis *= 1.0 - studioVineShade(q.z - ${F(n)}, q.x, q.z, ${F(a)});`).join(`
			`)}
			r = vis * g;
		}
		return vec2(r, g);
	}
	float studioSun0(vec3 pw) { return 0.0; }

`:`	uniform sampler2D studioBake;
	float studioSun0(vec3 pw) {
		vec3 p = pw - vec3(${F(he[0])}, ${F(he[1])}, ${F(he[2])});
		vec3 S = STUDIO_SUN;
		// the niche: inside its hollow, the sun gets in only through the arch;
		// elsewhere its block of stone stands in the way of some of the light
		{
			// (worked as if the niche stood against the far wall: z turned round)
			vec3 q = vec3(${F(Rt)} - p.x, p.y, ${F(_e)} - p.z);
			vec3 Sq = vec3(-S.x, S.y, -S.z);
			float dxn = q.x - ${F(io.cx)};
			if (abs(dxn) < ${F(io.hw)} && q.z > ${F(io.face)} && q.y > ${F(io.floor-.05)} && q.y < ${F(io.spring)} + sqrt(max(${F(io.hw*io.hw)} - dxn * dxn, 0.0))) {
				if (Sq.z >= 0.0) return 0.0;
				vec3 hf = q + Sq * ((${F(io.face)} - q.z) / Sq.z);
				float hx = hf.x - ${F(io.cx)};
				float edge = ${F(io.hw)} - abs(hx);
				float topY = ${F(io.spring)} + sqrt(max(${F(io.hw*io.hw)} - hx * hx, 0.0));
				float soft = 0.02 + 0.03 * (${F(io.face)} - q.z) / Sq.z;
				float inA = smoothstep(-soft, soft, edge) * smoothstep(-soft, soft, topY - hf.y);
				if (inA <= 0.0) return 0.0;
			} else {
				vec3 bmin = vec3(${F(io.x0-.2)}, 0.0, ${F(io.face-.3)}), bmax = vec3(${F(io.x1+.2)}, ${F(6.95)}, ${F(_e)});
				vec3 inv = 1.0 / Sq;
				vec3 t0 = (bmin - q) * inv, t1 = (bmax - q) * inv;
				vec3 tn = min(t0, t1), tf = max(t0, t1);
				float a = max(max(tn.x, tn.y), tn.z), bb = min(min(tf.x, tf.y), tf.z);
				if (bb > max(a, 0.0) && a > 0.0) return 0.0;
			}
		}
		// the windows and the roof: worked out once (bakeSun below), looked
		// up along the beam where it crosses the eaves' height
		float w = smoothstep(0.25, 0.75, night);
		float hi = step(${F(ao)}, p.y);
		float v = 0.0;
		if (w < 0.999) {
			vec2 q = (p.xz + STUDIO_SUN_D.xz * ((${F(ao)} - p.y) / STUDIO_SUN_D.y) - vec2(${F(In.sun[0])}, ${F(In.sun[1])})) / vec2(${F(In.sun[2])}, ${F(In.sun[3])});
			vec4 t = texture2D(studioBake, q);
			v += (1.0 - w) * mix(t.r, t.g, hi);
		}
		if (w > 0.001) {
			vec2 q = (p.xz + STUDIO_MOON_D.xz * ((${F(ao)} - p.y) / STUDIO_MOON_D.y) - vec2(${F(In.moon[0])}, ${F(In.moon[1])})) / vec2(${F(In.moon[2])}, ${F(In.moon[3])});
			vec4 t = texture2D(studioBake, q);
			v += w * mix(t.b, t.a, hi);
		}
		return v;
	}

`}	// the rotunda: its ring of stone stops the sun except through the
	// arches; its sheer cloth lets about half through
	float rotHit(vec2 c, vec2 d, float a, float R, out float t1, out float t2) {
		float b = dot(c, d), cc = dot(c, c) - R * R, disc = b * b - a * cc;
		if (disc <= 0.0) { t1 = t2 = -1.0; return 0.0; }
		float q = sqrt(disc);
		t1 = (-b - q) / a; t2 = (-b + q) / a;
		return 1.0;
	}
	float rotOpen(vec3 h, float R) {
		float an = atan(h.x - ${F(to.cx)}, h.z - ${F(to.cz)});
		float m = an - 1.5707963 * floor(an / 1.5707963 + 0.5);
		float d = R * sin(m);
		return (abs(d) < ${F(to.hw)} && h.y < ${F(to.spring)} + sqrt(max(${F(to.hw*to.hw)} - d * d, 0.0))) ? 1.0 : 0.0;
	}
	float rotShade(vec3 pw) {
		vec3 p = pw - vec3(${F(he[0])}, ${F(he[1])}, ${F(he[2])});
		vec3 S = STUDIO_SUN;
		vec2 c = p.xz - vec2(${F(to.cx)}, ${F(to.cz)});
		vec2 d = S.xz;
		float a = dot(d, d);
		float k = 1.0, t1, t2;
		// the stone (as one thin ring at the middle of the wall)
		if (rotHit(c, d, a, ${F((to.ri+to.ro)/2)}, t1, t2) > 0.0) {
			if (t1 > 0.03) { vec3 h = p + S * t1; if (h.y < ${F(to.top-.2)} && rotOpen(h, ${F((to.ri+to.ro)/2)}) < 0.5) return 0.0; }
			if (t2 > 0.03) { vec3 h = p + S * t2; if (h.y < ${F(to.top-.2)} && rotOpen(h, ${F((to.ri+to.ro)/2)}) < 0.5) return 0.0; }
		}
		// the cloth, except where it parts on the pool's line
		if (rotHit(c, d, a, ${F(to.cloth+.15)}, t1, t2) > 0.0) {
			for (int i = 0; i < 2; i++) {
				float t = i == 0 ? t1 : t2;
				if (t > 0.08) {
					vec3 h = p + S * t;
					float an = atan(h.x - ${F(to.cx)}, h.z - ${F(to.cz)});
					float lat = ${F(to.cloth+.15)} * abs(sin(an));
					bool gap = lat < ${F(to.gap)} && h.y < ${F(to.top)};
					if (h.y < ${F(to.top)} && !gap) k *= 0.5;
				}
			}
		}
		return k;
	}
	float studioSun(vec3 pw) { float s0 = studioSun0(pw); return s0 > 0.0 ? s0 * rotShade(pw) : 0.0; }`}function Ba(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let o=e;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}var wt={FLOOR:0,PLASTER:1,STONE:2,STEEL:3,WATER:4,PAD:5,PETAL:6,STAMEN:7,MARBLE:8,WOOD:9,GESSO:10,PAINT:11,POT:12,SHADE:13,BULB:14,NICHE:15,JAR:16,SOIL:17,BRUSH:18,TRAVERTINE:19,CLOTH:20,WMARBLE:21,REDDOOR:22,REDPANEL:23,DARKWOOD:24,BRASS:25,BRACT:26,KEYHOLE:27,ROCK:28,OLDSTONE:29,HOLLOW:30,FLAME:31};function qd(){let t={pos:[],nrm:[],kind:[],uv:[],anchor:[],idx:[]};return t.float=null,t.v=(e,o,r,n)=>(t.pos.push(e[0]+he[0],e[1]+he[1],e[2]+he[2]),t.nrm.push(o[0],o[1],o[2]),t.kind.push(r),t.uv.push(n?n[0]:0,n?n[1]:0),t.float?t.anchor.push(t.float[0]+he[0],t.float[1]+he[2],t.float[2],1):t.anchor.push(0,0,0,0),t.pos.length/3-1),t.quad=(e,o,r,n,a,s,i)=>{let c=t.v(e,a,s,i&&i[0]),f=t.v(o,a,s,i&&i[1]),l=t.v(r,a,s,i&&i[2]),v=t.v(n,a,s,i&&i[3]);t.idx.push(c,f,l,c,l,v)},t.box=(e,o,r,n,a,s,i,c)=>{let f=c||{};f.top||t.quad([e,a,r],[e,a,s],[n,a,s],[n,a,r],[0,1,0],i,[[e,r],[e,s],[n,s],[n,r]]),f.bottom||t.quad([e,o,r],[n,o,r],[n,o,s],[e,o,s],[0,-1,0],i,[[e,r],[n,r],[n,s],[e,s]]),f.x0||t.quad([e,o,r],[e,o,s],[e,a,s],[e,a,r],[-1,0,0],i,[[r,o],[s,o],[s,a],[r,a]]),f.x1||t.quad([n,o,s],[n,o,r],[n,a,r],[n,a,s],[1,0,0],i,[[s,o],[r,o],[r,a],[s,a]]),f.z0||t.quad([n,o,r],[e,o,r],[e,a,r],[n,a,r],[0,0,-1],i,[[n,o],[e,o],[e,a],[n,a]]),f.z1||t.quad([e,o,s],[n,o,s],[n,a,s],[e,a,s],[0,0,1],i,[[e,o],[n,o],[n,a],[e,a]])},t.tbox=(e,o,r,n,a,s,i,c,f)=>{let l=Math.cos(r),v=Math.sin(r),d=Math.cos(f||0),p=Math.sin(f||0),u=(m,x,y)=>{let _=a+(x-a)*d-y*p*0,M=y+(x-a)*p,b=a+(x-a)*d;return[e+l*m+v*M,b,o-v*m+l*M]},h=m=>{let x=m[1]*d-m[2]*p,y=m[2]*d+m[1]*p;return[l*m[0]+v*y,x,-v*m[0]+l*y]},g=(m,x,y,_,M)=>t.quad(u(...m),u(...x),u(...y),u(..._),h(M),c,[[m[0]+m[2],m[1]],[x[0]+x[2],x[1]],[y[0]+y[2],y[1]],[_[0]+_[2],_[1]]]);g([-n,s,-i],[-n,s,i],[n,s,i],[n,s,-i],[0,1,0]),g([-n,a,-i],[n,a,-i],[n,a,i],[-n,a,i],[0,-1,0]),g([-n,a,-i],[-n,a,i],[-n,s,i],[-n,s,-i],[-1,0,0]),g([n,a,i],[n,a,-i],[n,s,-i],[n,s,i],[1,0,0]),g([n,a,-i],[-n,a,-i],[-n,s,-i],[n,s,-i],[0,0,-1]),g([-n,a,i],[n,a,i],[n,s,i],[-n,s,i],[0,0,1])},t.beam=(e,o,r,n,a)=>{let s=[o[0]-e[0],o[1]-e[1],o[2]-e[2]],i=Math.hypot(...s),c=s.map(u=>u/i),f=a||(Math.abs(c[1])>.9?[1,0,0]:[0,1,0]),l=[c[1]*f[2]-c[2]*f[1],c[2]*f[0]-c[0]*f[2],c[0]*f[1]-c[1]*f[0]],v=Math.hypot(...l);l=l.map(u=>u/v),f=[l[1]*c[2]-l[2]*c[1],l[2]*c[0]-l[0]*c[2],l[0]*c[1]-l[1]*c[0]];let d=(u,h,g)=>[u[0]+l[0]*r*h+f[0]*r*g,u[1]+l[1]*r*h+f[1]*r*g,u[2]+l[2]*r*h+f[2]*r*g],p=[[[1,-1],[1,1],l],[[1,1],[-1,1],f],[[-1,1],[-1,-1],l.map(u=>-u)],[[-1,-1],[1,-1],f.map(u=>-u)]];for(let[u,h,g]of p)t.quad(d(e,...u),d(o,...u),d(o,...h),d(e,...h),g,n,[[0,0],[i,0],[i,1],[0,1]])},t.lathe=(e,o,r,n,a)=>{let s=a||32,i=r.map(([c,f],l)=>{let v=r[Math.max(0,l-1)],d=r[Math.min(r.length-1,l+1)],p=d[0]-v[0],u=d[1]-v[1],h=Math.hypot(p,u)||1,g=u/h,m=-p/h,x=[];for(let y=0;y<=s;y++){let _=y/s*2*ke;x.push(t.v([e+Math.cos(_)*c,f,o+Math.sin(_)*c],[Math.cos(_)*g,m,Math.sin(_)*g],n,[y/s*c*2*ke,f]))}return x});for(let c=0;c<i.length-1;c++)for(let f=0;f<s;f++){let l=i[c][f],v=i[c][f+1],d=i[c+1][f+1],p=i[c+1][f];t.idx.push(l,p,d,l,d,v)}},t}var Sa=t=>Math.abs(t)>=xe.hw?null:xe.spring+Math.sqrt(xe.hw*xe.hw-t*t),Ua=[["truss",fi[0],3.1],["truss",fi[1],5.4],["truss",fi[2],7.7],["rafter",kr.rafter*2,1.7],["rafter",kr.rafter*5,8.5],["rafter",kr.rafter*8,13.6],["rafter",kr.rafter*10,17],["ridge",Rt/2,.9],...[.75,...xe.c.slice(1).map((t,e)=>(t+xe.c[e])/2),_e-.75].map((t,e)=>["wall",t,2.3+e*4.1])],ef=(t,e)=>.5*Math.sin(t*1.9+e)+.5*Math.sin(t*.77+e*1.3)>-.25,M8=t=>t<Rt/2?ao+Rn*t:ao+Rn*(Rt-t);function Jh(t,e,o){return t==="wall"?[.12,o,e]:t==="truss"?[o,ao-.12,e]:t==="rafter"?[o,M8(o)-.2,e]:[e,ur-.32,o]}var t1=t=>t==="ridge"?[.4,_e-.4]:t==="wall"?[.15,ao-.05]:[.35,Rt-.35],z0={w:1.95,spring:3.35,r:2.3,frame:.23,zl:_e-.05,zf:_e-.13};z0.c=z0.r-z0.w/2;var Ur=(t,e)=>{let o=z0.r+(e||0),r=Math.abs(t)+z0.c;return r>=o?z0.spring:z0.spring+Math.sqrt(o*o-r*r)};z0.top=Ur(0);function S8(t){let e=Rt/2,{w:o,frame:r,zl:n,zf:a}=z0,s=o/2,i=s+r,c=.02;for(let b=-i;b<i-1e-6;b+=c){let S=b,z=Math.min(i,b+c),k=(S+z)/2,C=Ur(S,r),R=Ur(z,r),U=0,P=0;Math.abs(k)<s&&(U=Ur(S),P=Ur(z)),Math.abs(k)>=s;{let q=Math.abs(k)<s?U:0,at=Math.abs(k)<s?P:0;t.quad([e+z,at,a],[e+S,q,a],[e+S,C,a],[e+z,R,a],[0,0,-1],wt.DARKWOOD,[[z,at],[S,q],[S,C],[z,R]])}t.quad([e+S,C,a],[e+S,C,_e],[e+z,R,_e],[e+z,R,a],[0,1,0],wt.DARKWOOD,[[S,0],[S,1],[z,1],[z,0]]),Math.abs(k)<s&&t.quad([e+S,U,a],[e+z,P,a],[e+z,P,n],[e+S,U,n],[0,-1,0],wt.DARKWOOD,[[S,0],[z,0],[z,1],[S,1]])}for(let b of[-1,1])t.quad([e+b*i,0,a],[e+b*i,0,_e],[e+b*i,z0.spring,_e],[e+b*i,z0.spring,a],[b,0,0],wt.DARKWOOD,[[0,0],[1,0],[1,1],[0,1]]),t.quad([e+b*s,0,a],[e+b*s,z0.spring,a],[e+b*s,z0.spring,n],[e+b*s,0,n],[-b,0,0],wt.DARKWOOD,[[0,0],[1,0],[1,1],[0,1]]),t.box(e+b*(s+r/2)-r/2-.04,0,a-.04,e+b*(s+r/2)+r/2+.04,.42,_e,wt.DARKWOOD);let f=40;for(let b=0;b<f;b++){let S=-s+2*s*b/f,z=-s+2*s*(b+1)/f;t.beam([e+S,Ur(S)+.03,a-.015],[e+z,Ur(z)+.03,a-.015],.018,wt.DARKWOOD)}for(let b of[-1,1])t.beam([e+b*(s+.03),.42,a-.015],[e+b*(s+.03),z0.spring+.02,a-.015],.018,wt.DARKWOOD);for(let b=-s;b<s-1e-6;b+=c){let S=b,z=Math.min(s,b+c),k=Ur(S),C=Ur(z);t.quad([e+z,0,n],[e+S,0,n],[e+S,k,n],[e+z,C,n],[0,0,-1],wt.REDDOOR,[[z,0],[S,0],[S,k],[z,C]])}let l=s-.2,v=.3,d=z0.spring+.07,p=n-.006,u=.05,h=(b,S,z,k)=>t.box(e+b,S,p-.018,e+z,k,p,wt.REDDOOR);h(-l,v,l,v+u),h(-l,d-u,l,d),h(-l,v,-l+u,d),h(l-u,v,l,d),t.box(e-l+.14,v+.14,p-.022,e+l-.14,d-.14,p,wt.REDDOOR);let g=z0.spring+.31;h(-s+.08,d+.06,s-.08,d+.12);for(let b of[-1,1]){let z=s-.17;for(let k=.07;k<z-1e-6;k+=c){let C=k,R=Math.min(z,k+c),U=Ur(C,-.18),P=Ur(R,-.18);if(U<=g+.02&&P<=g+.02)continue;let q=St=>e+b*St,at=[[q(C),g,p+.004],[q(R),g,p+.004],[q(R),Math.max(g,P),p+.004],[q(C),Math.max(g,U),p+.004]];b>0?t.quad(at[1],at[0],at[3],at[2],[0,0,-1],wt.REDPANEL,[[R,0],[C,0],[C,1],[R,1]]):t.quad(...at,[0,0,-1],wt.REDPANEL,[[C,0],[R,0],[R,1],[C,1]])}}t.beam([e,g-.02,p-.008],[e,Ur(0,-.12),p-.008],.03,wt.REDDOOR),t.beam([e-s+.1,g-.01,p-.006],[e+s-.1,g-.01,p-.006],.014,wt.REDDOOR);let m=e-s+.15,x=1.06,y=p-.03;t.box(m-.034,x-.2,y-.008,m+.034,x+.17,y+.012,wt.BRASS);for(let[b,S]of[[x+.2,.026],[x+.235,.016],[x-.23,.026],[x-.265,.016]])t.lathe(m,y-.002,[[0,b-S],[S,b-S*.4],[S,b+S*.4],[0,b+S]],wt.BRASS,12);for(let b=0;b<6;b++){let S=x-.17+b*.065;for(let z of[-1,1])t.beam([m+z*.034,S,y-.01],[m+z*.041,S+.03,y-.01],.006,wt.BRASS)}let _=y-.008,M=(b,S,z)=>{for(let k=0;k<z;k++){let C=ke*k/z,R=ke*(k+1)/z;for(let U=0;U<16;U++){let P=2*ke*U/16,q=2*ke*(U+1)/16,at=(se,Ee)=>[m+S*Math.sin(se)*Math.cos(Ee),x+.03+S*Math.sin(se)*Math.sin(Ee),b-S*Math.cos(se)],St=(se,Ee)=>[Math.sin(se)*Math.cos(Ee),Math.sin(se)*Math.sin(Ee),-Math.cos(se)],yt=t.v(at(C,P),St(C,P),wt.BRASS),mt=t.v(at(C,q),St(C,q),wt.BRASS),zt=t.v(at(R,q),St(R,q),wt.BRASS),It=t.v(at(R,P),St(R,P),wt.BRASS);t.idx.push(yt,mt,zt,yt,zt,It)}}};t.beam([m,x+.03,_],[m,x+.03,_-.05],.011,wt.BRASS),M(_-.075,.034,10),t.box(m-.008,x-.1,y-.0125,m+.008,x-.06,y-.0085,wt.KEYHOLE)}var Hg=[0,ke/2,ke,-ke/2],Id=t=>{let e=ke/2;return t-Math.round(t/e)*e},Zl=t=>{let e=Math.abs(t);return to.top-.55*Math.pow(Math.max(0,Math.sin(e*3+.6)),6)-.25*Math.pow(Math.max(0,Math.sin(e*7+1.9)),8)-.06*Math.sin(e*23)},l0={cx:Rt/2,cz:to.cz+.12,hx:.5,hz:1,top:.6,yaw:.018},Yg=[[l0.cx-.27,l0.cz-.8,.16],[l0.cx-.12,l0.cz-.88,.25],[l0.cx+.29,l0.cz-.82,.1]];function k8(t){let e=wt.OLDSTONE,{cx:o,cz:r,hx:n,hz:a,top:s,yaw:i}=l0;t.tbox(o,r-.08,0,n+.14,0,.09,a+.36,e),t.tbox(o,r,i*.5,n+.05,.09,.15,a+.05,e),t.tbox(o,r,i*.5,n,.15,s-.12,a,e),t.tbox(o,r,i*.5,n+.03,s-.12,s-.1,a+.03,e),t.tbox(o+.006,r+.01,i,n+.07,s-.1,s-.035,a+.07,e),t.tbox(o+.006,r+.01,i,n+.045,s-.035,s,a+.045,e);for(let y of[-1,1])t.tbox(o+y*(n+.008),r,i*.5,.012,.22,s-.18,a-.14,e);let c=.4,f=.075,l=r-a-.2,v=.09,d=.78,p=.05,u=(y,_,M)=>[o+y,v+(_-v)*Math.cos(p),l+M-(_-v)*Math.sin(p)],h=[];h.push([-c,v],[c,v]);let g=18;for(let y=0;y<=g;y++){let _=ke*y/g;h.push([Math.cos(_)*c,d+Math.sin(_)*c])}let m=(v+d+c)/2;for(let y of[-1,1]){let _=[0,0,y],M=[0,y*Math.sin(p)*0,y],b=t.v(u(0,m,y*f),M,e,[o,m]),S=h.map(([z,k])=>t.v(u(z,k,y*f),M,e,[o+z,k]));for(let z=0;z<S.length;z++){let k=S[z],C=S[(z+1)%S.length];y>0?t.idx.push(b,k,C):t.idx.push(b,C,k)}}for(let y=0;y<h.length;y++){let[_,M]=h[y],[b,S]=h[(y+1)%h.length],z=S-M,k=-(b-_),C=Math.hypot(z,k)||1;z/=C,k/=C,y===0&&(z=0,k=-1);let R=[z,k*Math.cos(p),-k*Math.sin(p)],U=y*.07,P=(y+1)*.07;t.quad(u(_,M,-f),u(b,S,-f),u(b,S,f),u(_,M,f),R,e,[[U,0],[P,0],[P,.15],[U,.15]])}let x=(y,_,M,b,S)=>{let z=u(y,_,-f-S),k=u(M,_,-f-S),C=u(M,b,-f-S),R=u(y,b,-f-S),U=[0,Math.sin(p)*0,-1];t.quad(z,R,C,k,U,e,[[o+y,_],[o+y,b],[o+M,b],[o+M,_]]);let P=u(y,_,-f),q=u(M,_,-f),at=u(M,b,-f),St=u(y,b,-f);t.quad(P,z,k,q,[0,-1,0],e,[[0,0],[0,S],[1,S],[1,0]]),t.quad(R,St,at,C,[0,1,0],e,[[0,0],[0,S],[1,S],[1,0]]),t.quad(P,St,R,z,[-1,0,0],e,[[0,0],[1,0],[1,S],[0,S]]),t.quad(k,C,at,q,[1,0,0],e,[[0,0],[1,0],[1,S],[0,S]])};x(-c+.05,v+.12,-c+.09,d,.012),x(c-.09,v+.12,c-.05,d,.012),x(-c+.05,v+.12,c-.05,v+.16,.012),x(-.03,d-.16,.03,d+.24,.02),x(-.13,d+.08,.13,d+.14,.02);for(let[y,_,M]of Yg){let b=s,S=.032+M*.06;t.lathe(y,_,[[0,b+.002],[S*1.9,b+.002],[S*1.5,b+.012],[S*1.05,b+.02],[S,b+M*.5],[S*.98,b+M],[S*.6,b+M+.006],[0,b+M-.004]],wt.GESSO,14),t.beam([y,b+M-.004,_],[y,b+M+.018,_],.0025,wt.STEEL),t.lathe(y,_,[[0,b+M+.01],[.012,b+M+.026],[0,b+M+.07]],wt.FLAME,8)}for(let y=0;y<3;y++){let _=[.2,.25,.14][y];x(-_,v+.4-y*.075,_,v+.42-y*.075,.004)}}function z8(t){let{cx:e,cz:o,ri:r,ro:n,hw:a,spring:s}=to,i=wt.OLDSTONE,c=(d,p,u)=>[e+Math.sin(d)*p,u,o+Math.cos(d)*p],f=d=>s+Math.sqrt(Math.max(0,a*a-d*d)),l=(d,p)=>{let u=[];for(let m=0;m<=160;m++)u.push(-ke+2*ke*m/160);let g=Math.asin(Math.min(.999,a/d));for(let m of Hg)for(let x of[-1,1])u.push(((m+x*g+ke)%(2*ke)+2*ke)%(2*ke)-ke);u.sort((m,x)=>m-x);for(let m=0;m<u.length-1;m++){let x=u[m],y=u[m+1];if(y-x<1e-5)continue;let _=Id((x+y)/2),M=Math.abs(d*Math.sin(_))<a&&Math.abs(_)<ke/4,b=yt=>M?f(d*Math.sin(Id(yt))):0,S=[Math.sin(x)*p,0,Math.cos(x)*p],z=[Math.sin(y)*p,0,Math.cos(y)*p],k=c(x,d,b(x)),C=c(y,d,b(y)),R=c(y,d,Zl(y)),U=c(x,d,Zl(x)),P=t.v(k,S,i,[d*x,k[1]]),q=t.v(C,z,i,[d*y,C[1]]),at=t.v(R,z,i,[d*y,R[1]]),St=t.v(U,S,i,[d*x,U[1]]);if(p>0?t.idx.push(P,q,at,P,at,St):t.idx.push(P,at,q,P,St,at),p>0){let yt=c(x,r,Zl(x)),mt=c(y,r,Zl(y));t.quad(U,R,mt,yt,[0,1,0],i,[[U[0],U[2]],[R[0],R[2]],[mt[0],mt[2]],[yt[0],yt[2]]])}}};l(n,1),l(r,-1);for(let d of Hg){let p=[Math.sin(d),0,Math.cos(d)],u=[Math.cos(d),0,-Math.sin(d)],h=(x,y,_)=>[e+p[0]*Math.sqrt(y*y-x*x)+u[0]*x,_,o+p[2]*Math.sqrt(y*y-x*x)+u[2]*x];for(let x of[-1,1]){let y=x*a,_=[-u[0]*x,0,-u[2]*x];t.quad(h(y,r,0),h(y,n,0),h(y,n,s),h(y,r,s),_,i,[[0,0],[1,0],[1,1],[0,1]])}let g=20;for(let x=0;x<g;x++){let y=-a+2*a*x/g,_=-a+2*a*(x+1)/g,M=(y+_)/2,b=f(M),S=[-(u[0]*M),-(b-s),-(u[2]*M)],z=Math.hypot(...S),k=S.map(C=>C/z);t.quad(h(y,r,f(y)),h(_,r,f(_)),h(_,n,f(_)),h(y,n,f(y)),k,i,[[y,0],[_,0],[_,1],[y,1]])}let m=n+.05;for(let x=0;x<24;x++){let y=ke*x/24,_=ke*(x+1)/24,M=a+.08,b=S=>{let z=Math.cos(S)*M;return h(Math.max(-m+.01,Math.min(m-.01,z)),m,s+Math.sin(S)*M)};t.beam(b(y),b(_),.06,i)}for(let x of[-1,1]){let y=h(x*(a+.1),n+.06,s-.15),_=h(x*(a+.1),n+.06,s);t.beam(y,_,.14,i)}t.beam(h(0,n+.07,s+a-.05),h(0,n+.07,s+a+.3),.13,i)}let v=(d,p,u,h,g)=>{for(let x=0;x<96;x++){let y=-ke+2*ke*x/96,_=-ke+2*ke*(x+1)/96,M=Id((y+_)/2);if(g&&Math.abs(p*Math.sin(M))<a+.05&&Math.abs(M)<ke/4)continue;let b=[Math.sin(y),0,Math.cos(y)],S=[Math.sin(_),0,Math.cos(_)],z=t.v(c(y,p,u),b,i,[p*y,u]),k=t.v(c(_,p,u),S,i,[p*_,u]),C=t.v(c(_,p,h),S,i,[p*_,h]),R=t.v(c(y,p,h),b,i,[p*y,h]);t.idx.push(z,k,C,z,C,R),t.quad(c(y,p,h),c(_,p,h),c(_,d,h),c(y,d,h),[0,1,0],i,[[y,0],[_,0],[_,1],[y,1]]),t.quad(c(y,d,u),c(_,d,u),c(_,p,u),c(y,p,u),[0,-1,0],i,[[y,0],[_,0],[_,1],[y,1]])}};v(n-.02,n+.12,0,.38,!0),v(n-.02,n+.1,to.cornice-.12,to.cornice,!1),v(n-.02,n+.2,to.cornice,to.cornice+.2,!1);for(let d of[ke/4,3*ke/4,-ke/4,-3*ke/4]){let p=.3/n;for(let[u,h,g,m]of[[n,n+.07,.38,to.cornice-.12]]){let x=d-p,y=d+p,_=[Math.sin(d),0,Math.cos(d)];t.quad(c(x,h,g),c(y,h,g),c(y,h,m),c(x,h,m),_,i,[[x*h,g],[y*h,g],[y*h,m],[x*h,m]]);for(let[M,b]of[[x,-1],[y,1]]){let S=[Math.cos(M)*b,0,-Math.sin(M)*b];t.quad(c(M,u,g),c(M,h,g),c(M,h,m),c(M,u,m),S,i,[[0,g],[1,g],[1,m],[0,m]])}}}}function E8(){let{cx:t,cz:e,ro:o}=to,r=[],n=[],a=[],s=[],i=[],c=u=>{let h=(u/(2*ke)*4%1+1)%1*64,g=Math.floor(h),m=h-g;return Fg[g%64]*(1-m)+Fg[(g+1)%64]*m},f=Ba(9090),l=Math.asin(Math.min(.999,to.gap/to.cloth)),v=[[l,ke-l,0],[-ke+l,-l,0],[-l-.02,l+.02,1],[ke-l-.02,ke+l+.02,1]],d=46,p=8;for(let[u,h,g]of v){let m=Math.round((h-u)*to.cloth/.035),x=r.length/3,y=[],_=[];for(let b=0;b<=m;b++)_.push(.2+.25*f());for(let b=0;b<=(g?d:d+p);b++){let S=[];for(let z=0;z<=m;z++){let k=u+(h-u)*z/m,C=Zl(k)+.04,R=Math.min(k-u,h-k)*to.cloth,U,P;if(b===0)U=to.ri+.12,P=C+.03;else if(b===1)U=o+.08,P=C+.07;else if(b<=d){let q=(b-1)/(d-1);if(P=(C+.02)*(1-q),g){let se=Math.abs(Math.sin(k))*to.cloth/to.gap,Ee=to.spring+to.hw+.32+.35*(1-Math.min(1,se));P=C+.02-(C+.02-Ee)*q}let at=.38*Math.pow(q,2)+.1*Math.sqrt(q)+.26,St=(.05+.34*Math.pow(q,1.3))*c(k),yt=(.02+.07*q)*Math.sin(k*to.cloth/.16+2*c(k*1.7)),mt=.03*(1-q)*Math.sin(k*to.cloth/.055)+.015*Math.sin(k*to.cloth/.031+q*3),zt=yt+mt,It=.12*Math.exp(-R/.25)*Math.sin(R*18)*q;U=Math.max(o+.26,o+at+St+zt+It),g&&(U=o+.26+.06*Math.sin(k*to.cloth/.09)+.05*q)}else{let q=(b-d)/p;U=o+.74+.39*c(k)+q*_[z]*(.7+.3*(1+c(k+.3))),P=.012+.05*Math.max(0,Math.sin(q*7+k*23))*(1-q)+.03*(1-q)}S.push([t+Math.sin(k)*U,P,e+Math.cos(k)*U])}y.push(S)}for(let b=0;b<y.length;b++)for(let S=0;S<=m;S++){let z=y[b][S],k=y[b][Math.max(S-1,0)],C=y[b][Math.min(S+1,m)],R=y[Math.max(b-1,0)][S],U=y[Math.min(b+1,y.length-1)][S],P=[C[0]-k[0],C[1]-k[1],C[2]-k[2]],q=[U[0]-R[0],U[1]-R[1],U[2]-R[2]],at=[P[1]*q[2]-P[2]*q[1],P[2]*q[0]-P[0]*q[2],P[0]*q[1]-P[1]*q[0]],St=Math.hypot(...at)||1;at=at.map(mt=>mt/St),r.push(z[0]+he[0],z[1]+he[1],z[2]+he[2]),n.push(...at),a.push((u+(h-u)*S/m)*to.cloth,b/(d+p));let yt=b<=1?0:b<=d?(b-1)/(d-1):1-(b-d)/p*.9;i.push(b<=d?Math.pow(yt,1.3)*(1-.6*Math.pow(yt,6)):.4*yt*yt)}let M=m+1;for(let b=0;b<y.length-1;b++)for(let S=0;S<m;S++){let z=x+b*M+S;s.push(z,z+1,z+M+1,z,z+M+1,z+M)}}for(let u of[ke/2,-ke/2]){let h=r.length/3,g=40,m=30,x=[Math.sin(u),0,Math.cos(u)],y=[Math.cos(u),0,-Math.sin(u)];for(let _=0;_<=m;_++)for(let M=0;M<=g;M++){let b=-to.hw+2*to.hw*M/g,S=_/m,k=(to.spring+Math.sqrt(Math.max(0,to.hw*to.hw-b*b))-.02)*(1-S)+.01,C=(to.ri+to.ro)/2+.06*Math.sin(b*34)*(.3+S)+.12*S*S,R=[t+x[0]*C+y[0]*b,k,e+x[2]*C+y[2]*b];r.push(R[0]+he[0],R[1]+he[1],R[2]+he[2]),i.push(.6*S);let U=[x[0]+y[0]*Math.cos(b*34)*.6,.1,x[2]+y[2]*Math.cos(b*34)*.6],P=Math.hypot(...U);n.push(U[0]/P,U[1]/P,U[2]/P),a.push(b,S)}for(let _=0;_<m;_++)for(let M=0;M<g;M++){let b=h+_*(g+1)+M;s.push(b,b+1,b+g+2,b,b+g+2,b+g+1)}}return{pos:r,nrm:n,uv:a,idx:s,sw:i}}function A8(t,e){let o=t.pos.length/3;for(let r=0;r<e.pos.length;r+=3){let n=e.pos[r]-he[0],a=e.pos[r+2]-he[2];t.pos.push(Rt-n+he[0],e.pos[r+1],_e-a+he[2]),t.nrm.push(-e.nrm[r],e.nrm[r+1],-e.nrm[r+2])}t.kind.push(...e.kind),t.uv.push(...e.uv),t.anchor.push(...e.anchor);for(let r of e.idx)t.idx.push(r+o)}function T8(t){let{cx:e,hw:o,spring:r,pier:n,face:a,back:s,floor:i,x0:c,x1:f}=io,l=wt.OLDSTONE,v=wt.HOLLOW,d=s-o,p=5.35,u=g=>r+Math.sqrt(Math.max(0,o*o-(g-e)*(g-e)));t.box(c-.1,0,a-.28,f+.1,i-.06,_e,l,{bottom:!0}),t.box(c-.14,i-.06,a-.34,f+.14,i,_e,l),t.box(e-.95,ht.top,a-.62,e+.95,ht.top+.15,a-.28,l,{bottom:!0});for(let[g,m]of[[c,e-o],[e+o,f]]){t.box(g,i,a+.03,m,p,_e,v,{bottom:!0});let x=g<e?g:m,y=g<e?m:g,_=g<e?1:-1,M=11,b=(p-.38-i)/M;for(let S=0;S<M;S++){let z=i+S*b+.018,k=i+(S+1)*b-.018,C=S%2===0,R=x+_*.01,U=C?y-_*.01:x+_*(n*.66);if(t.box(Math.min(R,U),z,a-.06,Math.max(R,U),k,a+.03,l,{z1:!0}),!C){let q=x+_*(n*.66+.025),at=y-_*.01;t.box(Math.min(q,at),z,a-.02,Math.max(q,at),k,a+.03,l,{z1:!0})}let P=x-_*.035;t.box(Math.min(P,x+_*.02),z,a-.035,Math.max(P,x+_*.02),k,C?a+.9:a+.55,l)}t.box(g-.05,p-.38,a-.07,m+.05,p-.3,_e,l),t.box(g-.02,p-.3,a-.03,m+.02,p-.12,_e,l),t.box(g-.09,p-.12,a-.11,m+.09,p,_e,l)}let h=.03;for(let g=e-o;g<e+o-1e-6;g+=h){let m=g,x=Math.min(e+o,g+h);t.quad([x,u(x),a+.02],[m,u(m),a+.02],[m,p,a+.02],[x,p,a+.02],[0,0,-1],l,[[x,u(x)],[m,u(m)],[m,p],[x,p]])}{let m=o+.07;for(let y=0;y<36;y++){let _=ke*y/36,M=ke*(y+1)/36;t.beam([e+Math.cos(_)*m,r+Math.sin(_)*m,a-.02],[e+Math.cos(M)*m,r+Math.sin(M)*m,a-.02],.065,l,[0,0,1])}for(let y of[-1,1])t.box(e+y*o-.16,r-.14,a-.06,e+y*o+.16,r,a+.4,l);let x=r+o;t.quad([e-.17,x+.32,a-.08],[e+.17,x+.32,a-.08],[e+.11,x-.06,a-.08],[e-.11,x-.06,a-.08],[0,0,-1],l,[[0,1],[1,1],[1,0],[0,0]]);for(let y of[-1,1])t.quad([e+y*.11,x-.06,a-.08],[e+y*.17,x+.32,a-.08],[e+y*.17,x+.32,a+.02],[e+y*.11,x-.06,a+.02],[y,-.15,0],l,[[0,0],[1,0],[1,1],[0,1]]);t.quad([e-.11,x-.06,a-.08],[e+.11,x-.06,a-.08],[e+.11,x-.06,a+.02],[e-.11,x-.06,a+.02],[0,-1,0],l,[[0,0],[1,0],[1,1],[0,1]])}for(let g of[-1,1]){let m=e+g*o;t.quad([m,i,a],[m,i,d],[m,r,d],[m,r,a],[-g,0,0],v,[[a,i],[d,i],[d,r],[a,r]])}{for(let y=0;y<40;y++){let _=ke*y/40,M=ke*(y+1)/40,b=(z,k)=>[e+Math.cos(z)*o,r+Math.sin(z)*o,k],S=[-Math.cos((_+M)/2),-Math.sin((_+M)/2),0];t.quad(b(_,a),b(M,a),b(M,d),b(_,d),S,v,[[o*_+0,a],[o*M,a],[o*M,d],[o*_,d]])}for(let y=0;y<40;y++){let _=ke*y/40,M=ke*(y+1)/40,b=(U,P)=>[e+Math.cos(U)*o,P,d+Math.sin(U)*o],S=U=>[-Math.cos(U),0,-Math.sin(U)],z=t.v(b(_,i),S(_),v,[o*_,i]),k=t.v(b(M,i),S(M),v,[o*M,i]),C=t.v(b(M,r),S(M),v,[o*M,r]),R=t.v(b(_,r),S(_),v,[o*_,r]);t.idx.push(z,k,C,z,C,R)}let x=[];for(let y=0;y<=14;y++){let _=ke/2*y/14,M=[];for(let b=0;b<=40;b++){let S=ke*b/40,z=[Math.cos(S)*Math.cos(_),Math.sin(_),Math.sin(S)*Math.cos(_)];M.push(t.v([e+o*z[0],r+o*z[1],d+o*z[2]],z.map(k=>-k),v,[o*S,r+o*_]))}x.push(M)}for(let y=0;y<14;y++)for(let _=0;_<40;_++){let M=x[y][_],b=x[y][_+1],S=x[y+1][_+1],z=x[y+1][_];t.idx.push(M,b,S,M,S,z)}t.box(e-o,i-.02,a-.02,e+o,i,s,v,{bottom:!0,x0:!0,x1:!0,z1:!0})}t.box(u0.x-.6,i,Xh-.5,u0.x+.6,u0.plinth-.05,Xh+.55,l,{bottom:!0}),t.box(u0.x-.64,u0.plinth-.05,Xh-.54,u0.x+.64,u0.plinth,Xh+.59,l),t.box(c-.06,p,a-.08,f+.06,p+.32,_e,l),t.box(c-.02,p+.32,a-.02,f+.02,p+.78,_e,l),t.box(c-.12,p+.78,a-.16,f+.12,p+.86,_e,l),t.box(c-.2,p+.86,a-.26,f+.2,p+1.02,_e,l);{let g=p+.55,m=.34,x=.2,y=28,_=[];for(let M=0;M<=4;M++){let b=M/4,S=[];for(let z=0;z<=y;z++){let k=2*ke*z/y,C=.09*Math.sqrt(Math.max(0,1-b*b))+.01;S.push(t.v([e+Math.cos(k)*m*b,g+Math.sin(k)*x*b,a-.02-C],[Math.cos(k)*b*.6,Math.sin(k)*b*.6,-1],l,[Math.cos(k)*b,Math.sin(k)*b]))}_.push(S)}for(let M=0;M<4;M++)for(let b=0;b<y;b++){let S=_[M][b],z=_[M][b+1],k=_[M+1][b+1],C=_[M+1][b];t.idx.push(S,C,k,S,k,z)}for(let M=0;M<y;M++){let b=2*ke*M/y,S=2*ke*(M+1)/y;t.beam([e+Math.cos(b)*(m+.03),g+Math.sin(b)*(x+.03),a-.04],[e+Math.cos(S)*(m+.03),g+Math.sin(S)*(x+.03),a-.04],.025,l,[0,0,1])}for(let M of[-1,1])for(let b=0;b<14;b++){let S=1.8*ke*b/14,z=1.8*ke*(b+1)/14,k=.1*(1-b/16),C=.1*(1-(b+1)/16),R=e+M*(m+.16),U=g;t.beam([R+M*Math.cos(S)*k,U+Math.sin(S)*k,a-.04],[R+M*Math.cos(z)*C,U+Math.sin(z)*C,a-.04],.018,l,[0,0,1])}}{let g=p+1.02,m=.62,x=(f-c)/2+.2,y=a-.2,_=b=>g+m*(1-Math.abs(b-e)/x);for(let b=e-x;b<e+x-1e-6;b+=.1){let S=b,z=Math.min(e+x,b+.1);t.quad([z,g,y],[S,g,y],[S,_(S),y],[z,_(z),y],[0,0,-1],l,[[z,g],[S,g],[S,_(S)],[z,_(z)]])}let M=Math.hypot(x,m);for(let b of[-1,1]){let S=[b*m/M,x/M,0],z=e+b*(x+.06);t.quad([e,g+m+.06,y-.06],[z,g-.02,y-.06],[z,g-.02,_e],[e,g+m+.06,_e],S,l,[[0,y],[M,y],[M,_e],[0,_e]]),t.quad([e,g+m+.06,y-.06],[e,g+m-.06,y-.06],[z,g-.12,y-.06],[z,g-.02,y-.06],[0,0,-1],l,[[0,1],[0,0],[M,0],[M,1]])}}}var Ug=[[72,72,72,72,72,72,70,69,68,65,63,61,63,63,64,66,68,69,70,70,70,70,70,71],[72,72,72,72,72,72,70,69,68,65,63,61,63,63,64,66,68,69,70,70,70,70,70,71],[72,72,72,72,72,72,70,69,67,65,63,61,63,63,64,66,68,69,70,70,70,70,70,71],[41,44,57,57,57,53,51,34,53,55,57,57,59,59,59,63,65,65,65,64,60,60,60,59],[56,56,62,63,63,63,59,35,54,55,59,59,59,59,58,61,63,63,63,62,50,50,50,50],[62,73,73,73,71,71,60,40,54,55,59,60,60,60,58,62,65,65,65,61,54,49,49,54],[66,79,79,79,78,76,65,45,54,54,59,62,62,62,62,62,65,65,65,61,54,49,49,54],[66,80,81,82,82,82,65,50,48,57,62,62,62,62,62,62,65,65,65,61,54,49,49,54],[66,80,86,86,86,85,66,50,48,57,62,62,62,62,62,61,64,64,64,60,52,50,50,52],[64,80,86,86,86,85,66,50,43,57,62,62,62,62,61,61,63,63,63,59,51,50,50,49],[64,76,86,86,86,85,66,50,46,56,60,60,60,60,58,59,61,61,61,57,51,51,51,48],[59,66,85,85,85,85,66,50,46,47,54,56,56,56,53,55,58,58,58,55,52,52,51,46],[46,52,77,77,77,77,66,49,46,44,39,42,42,42,43,47,47,47,50,52,52,52,51,45],[38,38,49,60,60,60,56,46,46,44,39,42,42,42,44,47,47,47,51,52,52,52,51,37],[25,30,30,30,35,38,38,38,44,47,47,47,45,42,44,47,47,47,51,52,52,52,50,23],[13,14,27,28,29,30,31,36,45,49,49,49,48,41,44,47,47,47,51,52,52,52,41,17],[23,15,15,16,16,28,30,36,45,49,49,49,48,41,44,45,45,45,50,50,50,50,43,32],[23,19,19,19,19,19,23,34,45,49,49,49,48,41,44,44,44,44,51,51,51,51,46,32],[24,19,19,19,19,22,27,31,42,48,48,48,47,39,42,42,42,44,51,51,51,51,46,32],[24,19,19,19,23,25,28,31,38,42,42,42,40,37,40,41,42,44,51,51,51,51,46,32],[26,23,18,19,23,25,28,31,37,37,37,37,32,33,34,38,42,44,50,51,51,51,46,31],[31,30,27,27,23,25,28,30,31,31,31,30,28,28,29,34,40,42,48,49,49,49,46,31],[39,37,33,30,22,25,27,27,27,27,26,22,22,22,22,24,31,36,42,43,43,43,43,39],[42,40,35,30,27,14,14,15,15,15,12,12,12,13,13,15,16,18,39,43,43,43,43,42],[42,41,35,30,27,0,0,0,0,0,0,0,0,0,0,0,0,0,41,43,43,43,43,42],[42,41,35,29,27,0,0,0,0,0,0,0,0,0,0,0,0,0,41,43,43,43,43,42],[42,41,35,29,15,0,0,0,0,0,0,0,0,0,0,0,0,0,41,43,43,43,42,42]];function L8(t,e){let r=Ug.length,n=Math.max(0,Math.min(r-1.001,t/.1)),a=(e/(2*ke)*24%24+24)%24,s=Math.floor(n),i=Math.floor(a),c=n-s,f=a-i,l=(p,u)=>Ug[Math.min(r-1,p)][u%24]/100,v=l(s,i)*(1-f)+l(s,i+1)*f,d=l(s+1,i)*(1-f)+l(s+1,i+1)*f;return v*(1-c)+d*c}var Fd=[[-2.5,1.35,1.95,1,1.3],[2.2,.95,1.25,-1,4.1]];function Kg(t){let[e,o,r,n,a]=Fd[t],s=[],i=90,c=null;for(let f=0;f<=i;f++){let l=f/i,v=.02+Math.pow(l,.92)*r,d=e+n*o*2*ke*l,p=L8(v,d)+.035;c=c===null?p:Math.max(p,c*.75+p*.25);let u=c+.012*Math.sin(l*37+a);s.push([u0.x+Math.sin(d)*u,u0.plinth+v+.01*Math.sin(l*23+a*2),u0.z-.05+Math.cos(d)*u,d,l])}return s}function N8(t){let e=Ba(77);for(let o=0;o<Fd.length;o++){let r=Kg(o);for(let n=0;n<r.length-1;n++)t.beam(r[n],r[n+1],.019*(1-r[n][4]*.5),wt.DARKWOOD)}for(let[o,r,n]of Ua){let[a,s]=t1(o);for(let i=0;i<2;i++){let c=null;for(let f=a;f<=s;f+=.18){let l=Jh(o,r,f),v=Math.sin(f*3.1+i*2+n)*.07,d=Math.cos(f*2.3+i+n)*.05,p=o==="wall"?.25+.5*f/ao:0,u=o==="wall"?[.05+Math.abs(d)*.6,l[1],l[2]+v*(1.5+i)*(1+2*p)+(i-.5)*p]:o==="ridge"?[l[0]+v,l[1]+d+.12,l[2]]:[l[0],l[1]+d+.12,l[2]+v];c&&(o==="wall"||ef(f,n)||e()<.5)&&t.beam(c,u,(o==="wall"?.022*(1.2-f/ao):.012)+.008*e(),wt.WOOD),c=u}}}}function O8(t){let e=Ba(4242),o=(n,a)=>!(Math.abs(n-l0.cx)<l0.hx+.2&&Math.abs(a-l0.cz+.08)<l0.hz+.42)&&!(n>ht.x0-ht.curb-.1&&n<ht.x1+ht.curb+.1&&a>ht.z0-ht.curb-.1&&a<ht.z1+ht.curb+.1)&&n>.2&&n<Rt-.2&&a>.3&&a<_e-.4,r=(n,a,s,i)=>{let c=.022+e()*.022,f=e()*2*ke,l=Math.cos(f),v=Math.sin(f),d=(u,h)=>[n+(u*l-h*v)*c,a+.004*u*h,s+(u*v+h*l)*c],p=i?2:0;t.quad(d(-1,-1),d(-1,1),d(1,1),d(1,-1),[0,1,0],wt.BRACT,[[p,0],[p,1],[p+1,1],[p+1,0]])};for(let[n,a,s]of Ua){let[i,c]=t1(n);for(let f=i;f<=c;f+=.05){if(!ef(f,s)||e()>.55)continue;let l=Jh(n,a,f),v=l[0]+(e()-.5)*1.8,d=l[2]+(e()-.5)*1.8;o(v,d)&&r(v,.004,d,e()<.18)}}for(let n=0;n<260;n++){let a=Math.floor(e()*4),s,i;a<2?(s=a?ht.x1+ht.curb+.12+e()*e()*.9:ht.x0-ht.curb-.12-e()*e()*.9,i=ht.z0+e()*(ht.z1-ht.z0)):(i=a===2?ht.z0-ht.curb-.12-e()*e()*.9:ht.z1+ht.curb+.12+e()*e()*.9,s=ht.x0+e()*(ht.x1-ht.x0)),o(s,i)&&r(s,.004,i,e()<.18)}for(let n=0;n<70;n++){let a=ht.x0+.08+e()*(ht.x1-ht.x0-.16),s=ht.z0+.08+e()*(ht.z1-ht.z0-.16);Math.hypot(a-u0.x,s-u0.z)<.6||(t.float=[a,s,a*5.1+s*2.9],r(a,.016,s,e()<.2),t.float=null)}}function R8(t,e,o){let r=(a,s,i,c,f)=>{let l=t.pos.length/3,v=Math.cos(i),d=Math.sin(i),p=Math.cos(c),u=Math.sin(c),h=[v,0,-d],g=[d*u,p,v*u],m=[h[1]*g[2]-h[2]*g[1],h[2]*g[0]-h[0]*g[2],h[0]*g[1]-h[1]*g[0]],x=f?.95:o()*.8;for(let[y,_]of[[0,0],[1,0],[1,1],[0,1]]){let M=(y-.5)*s,b=(_-.5)*s;t.pos.push(a[0]+h[0]*M+g[0]*b+he[0],a[1]+h[1]*M+g[1]*b+he[1],a[2]+h[2]*M+g[2]*b+he[2]),t.nrm.push(...m),t.uv.push(y,_),t.shade.push(x),t.flower.push(1)}t.idx.push(l,l+1,l+2,l,l+2,l+3)};function n(a,s,i){let c=s/ao,f=Math.min(.15+.9*c,a<1||a>_e-1?.6:1.15),l=Math.round(3+7*c),v=s<1?0:Math.round((2+9*c)*(ef(s*1.4,i)?1:.45));for(let d=0;d<l;d++){let p=o()*2*ke;e([.04+o()*.22,s+(o()-.5)*.12,a+(o()-.5)*2*f],[Math.cos(p)*.4+.5,-.2-o()*.5,Math.sin(p)],[0,0,1],.07+o()*.06,.1)}for(let d=0;d<v;d++)r([.06+o()*.28,s+(o()-.5)*.18,a+(o()-.5)*2*f*.9],.34+o()*.32,o()*2*ke,(o()-.5)*2.4,o()<.14);if(s>3&&o()<.05){let d=[.15,s,a+(o()-.5)*2*f],p=.4+o()*1.2;for(let u=0;u<p;u+=.13)d=[d[0]+.03,d[1]-.13,d[2]+(o()-.5)*.06],r([d[0],d[1],d[2]],(.26+o()*.2)*(1-.4*u/p),o()*2*ke,(o()-.5)*.8,o()<.15)}}for(let[a,s,i]of Ua){let[c,f]=t1(a);for(let l=c;l<=f;l+=.1){if(a==="wall"){n(s,l,i);continue}if(!ef(l,i))continue;let v=Jh(a,s,l),d=()=>(o()-.5)*.7,p=4+Math.floor(o()*4);for(let u=0;u<p;u++){let h=a==="ridge"?[v[0]+d(),v[1]-o()*.25,v[2]+d()*.4]:[v[0]+d()*.4,v[1]-o()*.25,v[2]+d()];r(h,.42+o()*.4,o()*2*ke,(o()-.5)*2.4,o()<.16)}for(let u=0;u<5;u++){let h=o()*2*ke;e([v[0]+d()*.6,v[1]-o()*.2,v[2]+d()*.6],[Math.cos(h),-.3-o()*.5,Math.sin(h)],[-Math.sin(h),0,Math.cos(h)],.08+o()*.06,.1)}if(o()<.22){let u=.5+o()*2,h=[v[0],v[1],v[2]],g=[(o()-.5)*.08,(o()-.5)*.08];for(let m=0;m<u;m+=.13){h=[h[0]+g[0],h[1]-.13,h[2]+g[1]];let x=(.3+o()*.22)*(1-.4*m/u);if(r([h[0]+(o()-.5)*.08,h[1],h[2]+(o()-.5)*.08],x,o()*2*ke,(o()-.5)*.8,o()<.15),o()<.6){let y=o()*2*ke;e([h[0],h[1],h[2]],[Math.cos(y),-.6,Math.sin(y)],[-Math.sin(y),0,Math.cos(y)],.05+o()*.04,.1)}}}}}}var Bg=(()=>{let t=Ba(9001),e=[],o=[];for(let[n,a,s]of Ua){let[i,c]=t1(n);for(let f=i;f<=c;f+=.1)ef(f,s)&&o.push(Jh(n,a,f))}let r=o.filter(n=>n[0]>ht.x0-.6&&n[0]<ht.x1+.6&&n[2]>ht.z0&&n[2]<ht.z1);for(let n=0;n<64;n++){let a=n%2===0&&r.length?r:o,s=a[Math.floor(t()*a.length)];e.push({start:[s[0]+(t()-.5)*.4,s[1]-.25-t()*.3,s[2]+(t()-.5)*.4],period:18+t()*22,offset:t()*60,drift:[(t()-.5)*1.6,(t()-.5)*1.6],speed:.45+t()*.25,seed:t(),white:t()<.18?1:0})}return e})(),vs=[ht.x0+.06,ht.z0+.06,ht.x1-.06,ht.z1-.06];function C8(t,e){let o=e+t.offset,r=Math.floor(o/t.period),n=o-r*t.period,a=.6+.4*Math.sin(r*1.7+t.seed*5),s=t.start[0]+t.drift[0]*a,i=t.start[2]+t.drift[1]*a,c=s>vs[0]&&s<vs[2]&&i>vs[1]&&i<vs[3],f=c?.017:.006,l=(t.start[1]-f)/t.speed;return{ph:n,Tf:l,lx:s,lz:i,inPool:c}}var ia=[{at:[Rt/2-.8,Y0(7.6)],dir:.9,len:.92,kind:0,sip:21,first:9},{at:[Rt/2+.9,Y0(11.6)],dir:3.6,len:.74,kind:1,sip:29,first:17},{at:[Rt/2-.3,Y0(12.8)],dir:5.2,len:.86,kind:2,sip:25,first:4},{at:[Rt/2+1,Y0(7)],dir:2.2,len:.7,kind:1,sip:33,first:23},{at:[Rt/2-1.1,Y0(10.4)],dir:4.4,len:.82,kind:0,sip:27,first:13},{at:[Rt/2+.4,Y0(9)],dir:1.4,len:.94,kind:2,sip:31,first:28},{at:[Rt/2-.9,Y0(13)],dir:5.9,len:.66,kind:1,sip:23,first:6},{at:[Rt/2+1.1,Y0(12.6)],dir:3,len:.8,kind:0,sip:35,first:31}],ii=[ht.x0+.5,ht.z0+.5,ht.x1-.5,ht.z1-.55],Yl=[ht.x0+.25,ht.z0+.25,ht.x1-.25,ht.z1-.3],Ql=12,Kl=-.36,Dd=[];function $8(){let t=u=>{let h=Math.sin(u*12.9898+78.233)*43758.5453;return h-Math.floor(h)},e=ia.map((u,h)=>({k:u,i:h,x:u.at[0],z:u.at[1],th:u.dir,w:0,v:.08,y:-.17,ph:h*2.1,pitch:0,kappa:0,thrust:0,amp:.2,stroking:h%2===0,modeT:t(h*3.1)*3,aim:u.dir,nextAim:t(h*7.7)*5,yAim:-.17,nextY:t(h*5.9)*8,gx:u.at[0],gz:u.at[1],nextSip:u.first,sipT:-1,bite:0,notice:0})),o=[],r=[];for(let u=0;u<Ql;u++)r.push({x:0,z:0,alive:0,born:0,seed:u*.37});let n={on:!1,x:0,z:0,t0:0,petal:!1,eaten:0,lure:null},a=0,s=0,i=u=>Math.atan2(Math.sin(u),Math.cos(u)),c=()=>t(++s*1.618+a*.37);return{fish:e,events:o,crumbs:r,feed:n,drop:(u,h)=>{u=Math.max(Yl[0],Math.min(Yl[2],u)),h=Math.max(Yl[1],Math.min(Yl[3],h)),Object.assign(n,{on:!0,x:u,z:h,t0:a,petal:!1,eaten:0}),r.forEach((g,m)=>{let x=t(a+m)*Math.PI*2,y=.04+.16*Math.sqrt(t(a*1.7+m*3.1));Object.assign(g,{x:u+Math.cos(x)*y,z:h+Math.sin(x)*y,alive:1,born:a+t(m*5.3+a)*.35})}),o.push([u,h,a,1]);for(let g of e)g.notice=a+.3+Math.hypot(g.x-u,g.z-h)*.35+t(g.i*9.1+a)*.7},lure:(u,h)=>{let g=null,m=1e9;for(let x of e){let y=Math.hypot(x.x-u,x.z-h);y<m&&(m=y,g=x)}n.lure={x:u,z:h,fish:g}},petal:(u,h)=>{Object.assign(n,{on:!0,x:u,z:h,t0:a,petal:!0,eaten:0}),r.forEach((m,x)=>Object.assign(m,{x:u,z:h,alive:x===0?1:0,born:a})),o.push([u,h,a,.45]);let g=n.lure&&n.lure.fish;if(!g){let m=1e9;for(let x of e){let y=Math.hypot(x.x-u,x.z-h);y<m&&(m=y,g=x)}}Math.hypot(g.x-u,g.z-h)>1.4&&(g.x=u+.2,g.z=h-1.2,g.th=Math.PI/2,g.y=-.22,g.v=.06);for(let m of e)m.notice=m===g?a+.9:a+4.5+Math.hypot(m.x-u,m.z-h)*.8+t(m.i*9.1)*2;n.lure=null},unpetal:()=>{if(!n.petal){n.lure=null;return}n.on=!1,n.petal=!1,n.eaten=0,n.lure=null;for(let u of r)u.alive=0},step:u=>{a+=u;let h=a,g=0;for(let m of r)!m.alive||h<m.born||(g++,m.x+=Math.sin(h*.7+m.seed*11)*.004*u,m.z+=Math.cos(h*.6+m.seed*7)*.004*u);if(n.on&&(g===0&&h>n.t0+1&&!n.petal||n.petal&&n.eaten&&h>n.eaten+3||h>n.t0+40)){n.petal=!1,n.on=!1;for(let m of r)m.alive=0}for(let m of e){let{k:x}=m,y=x.len,_=n.on&&h>m.notice;(h>m.nextAim||Math.hypot(m.gx-m.x,m.gz-m.z)<.7)&&(m.gx=ii[0]+c()*(ii[2]-ii[0]),m.gz=ii[1]+c()*(ii[3]-ii[1]),m.nextAim=h+12+c()*14),n.lure&&n.lure.fish===m&&(m.gx=n.lure.x+Math.cos(h*.3)*.3,m.gz=n.lure.z-.45+Math.sin(h*.3)*.2,m.nextAim=h+1,m.yAim=-.2),m.aim=Math.atan2(m.gz-m.z,m.gx-m.x)+.35*Math.sin(h*.21+m.i*1.7);let M=m.aim,b=.7,S=null;if(_){let me=1e9;for(let Q of r){if(!Q.alive||h<Q.born)continue;let j=Math.hypot(Q.x-m.x,Q.z-m.z)+.1*Math.sin(m.i*3.3+Q.seed*9);j<me&&(me=j,S=Q)}let qe=S?S.x:n.x,Ge=S?S.z:n.z;M=Math.atan2(Ge-m.z,qe-m.x),m.aim=M,b=1.8}let z=.6+y*.8+m.v*2,k=_?Yl:ii,C=0;for(let me of[0,.5,-.5]){let qe=m.x+Math.cos(m.th+me)*z,Ge=m.z+Math.sin(m.th+me)*z;C=Math.max(C,Math.max(k[0]-qe,qe-k[2],k[1]-Ge,Ge-k[3],0))}if(C>0){let me=(k[0]+k[2])/2,qe=(k[1]+k[3])/2+Math.sin(m.i*2.3)*1.5,Ge=Math.atan2(qe-m.z,me-m.x),Q=Math.min(1,C*2.2);M=m.th+i(Ge-m.th)*Q+i(M-m.th)*(1-Q),_||(m.aim=M),b=Math.max(b,.6+Q*.8)}let R=0;for(let me of e){if(me===m)continue;let qe=me.x-m.x,Ge=me.z-m.z,Q=Math.hypot(qe,Ge),j=(_?.4:1)*(y+me.k.len)/2+.2;if(Q<j&&Math.abs(me.y-m.y)<.14){let ft=i(Math.atan2(Ge,qe)-m.th);(Math.abs(ft)<1.6||Q<j*.5)&&(R-=Math.sign(ft||1)*(j-Q)/j*(Math.abs(ft)<1.6?1:.6))}}let U=i(M-m.th)+R*(_?.4:2);m.modeT-=u,_?(m.stroking=!0,m.modeT=Math.max(m.modeT,.4)):m.modeT<=0&&(m.stroking=!m.stroking,m.modeT=m.stroking?1.2+c()*1.6:1.6+c()*3.2),!m.stroking&&(Math.abs(U)>.9||m.v<.035)&&(m.stroking=!0,m.modeT=1+c()*.8),!_&&m.sipT<0&&h>m.nextSip&&(m.sipT=0,m.nextSip=h+x.sip*(.7+.6*c()));let P=0;if(m.sipT>=0){let me=m.sipT;m.sipT+=u,P=Math.min(1,me/1.6)*(1-Math.max(0,Math.min(1,(me-2.6)/1.6))),me<1.7&&m.sipT>=1.7&&o.push([m.x+Math.cos(m.th)*.03,m.z+Math.sin(m.th)*.03,h,.9]),me<2.4&&m.sipT>=2.4&&o.push([m.x,m.z,h,.55]),(m.sipT>4.2||_)&&(m.sipT=-1)}let q=_&&n.petal?.7:1,at=(m.stroking?_?2.4*q:1:0)*(1-.6*P);m.thrust+=(at-m.thrust)*Math.min(u*3,1);let St=_?.9:.55;m.v+=(m.thrust*.085*(.7+.4*y)-St*m.v)*u,m.v=Math.max(m.v,.008);let yt=.35+.65*Math.min(1,m.thrust),mt=Math.max(-b,Math.min(b,U*1.3))*yt;m.w+=(mt-m.w)*Math.min(u*2.2,1),m.th+=m.w*u,h>m.nextY&&(m.yAim=-(.13+c()*.1),m.nextY=h+6+c()*10);let zt=m.yAim;if(P>0&&(zt+=(-.045-zt)*P),_){let me=S?S.x:n.x,qe=S?S.z:n.z,Ge=1-Math.min(1,Math.max(0,(Math.hypot(me-m.x,qe-m.z)-.15)/.9));if(zt+=((n.petal?.012:-.04)-zt)*Ge,S&&h>m.bite&&m.y>(n.petal?-.02:-.08)){let Q=m.x+Math.cos(m.th)*(n.petal?.09:.02),j=m.z+Math.sin(m.th)*(n.petal?.09:.02);Math.hypot(S.x-Q,S.z-j)<(n.petal?.14:.09)&&(S.alive=0,m.bite=h+1.3,n.petal?(n.eaten=h,o.push([S.x,S.z,h,1.6]),o.push([S.x+Math.cos(m.th)*.12,S.z+Math.sin(m.th)*.12,h+.01,1])):o.push([S.x,S.z,h,.75]))}}m.x+=Math.cos(m.th)*m.v*u,m.z+=Math.sin(m.th)*m.v*u,m.x=Math.max(ht.x0+.15,Math.min(ht.x1-.15,m.x)),m.z=Math.max(ht.z0+.15,Math.min(ht.z1-.15,m.z));let It=(zt-m.y)*Math.min(u*(_?2:.8),1);m.y+=It;let se=_&&n.petal?.75:.4;m.pitch+=(Math.max(-se,Math.min(se,It/u/Math.max(m.v,.06)*(_&&n.petal?1.8:1)))-m.pitch)*Math.min(u*2.5,1);let Ee=Math.max(-1/y,Math.min(1/y,m.w/Math.max(m.v,.1)));m.kappa+=(Ee-m.kappa)*Math.min(u*4,1);let Qe=.12+.88*Math.min(1.4,m.thrust)+.4*Math.min(1,Math.abs(m.w));m.amp+=(Qe-m.amp)*Math.min(u*2,1),m.ph+=u*(2+5.5*Math.min(1.6,m.thrust))*(.75+.35/Math.sqrt(y))}for(;o.length&&h-o[0][2]>10;)o.shift()},get t(){return a}}}function P8(){let t=qd();{let e=ht.x0-ht.curb,o=ht.x1+ht.curb,r=ht.z0-ht.curb,n=ht.z1+ht.curb,a=[[0,0,Rt,r],[0,n,Rt,_e],[0,r,e,n],[o,r,Rt,n]];for(let[s,i,c,f]of a)for(let v=s;v<c-1e-6;v+=1)for(let d=i;d<f-1e-6;d+=1){let p=v,u=Math.min(c,v+1),h=d,g=Math.min(f,d+1);t.quad([p,0,h],[p,0,g],[u,0,g],[u,0,h],[0,1,0],wt.FLOOR,[[p,h],[p,g],[u,g],[u,h]])}}for(let e of[0,1]){let o=e?Rt:0,r=e?Rt+cn:-cn,n=e?[-1,0,0]:[1,0,0],a=.04;for(let p=0;p<_e-1e-6;p+=a){let u=p,h=Math.min(_e,p+a),g=(u+h)/2,m=null;if(!e)for(let y of xe.c)Sa(g-y)!==null&&(m=[xe.sill,Math.min(Sa(u-y)||xe.spring,Sa(h-y)||xe.spring)]);let x=m?[[0,m[0]],[m[1],ao]]:[[0,ao]];for(let[y,_]of x)_<=y||(e?t.quad([o,y,h],[o,y,u],[o,_,u],[o,_,h],n,wt.ROCK,[[h,y],[u,y],[u,_],[h,_]]):t.quad([o,y,u],[o,y,h],[o,_,h],[o,_,u],n,wt.ROCK,[[u,y],[h,y],[h,_],[u,_]]))}if(!e)for(let p of xe.c){for(let m of[-1,1]){let x=p+m*xe.hw,y=[0,0,-m],_=[o,xe.sill,x],M=[r,xe.sill,x],b=[r,xe.spring,x],S=[o,xe.spring,x];m>0!=!!e?t.quad(_,M,b,S,y,wt.ROCK,[[0,xe.sill],[cn,xe.sill],[cn,xe.spring],[0,xe.spring]]):t.quad(S,b,M,_,y,wt.ROCK,[[0,xe.spring],[cn,xe.spring],[cn,xe.sill],[0,xe.sill]])}let u=28;for(let m=0;m<u;m++){let x=m/u*ke,y=(m+1)/u*ke,_=p+Math.cos(x)*xe.hw,M=p+Math.cos(y)*xe.hw,b=xe.spring+Math.sin(x)*xe.hw,S=xe.spring+Math.sin(y)*xe.hw,z=[0,-Math.sin((x+y)/2),-Math.cos((x+y)/2)];e?t.quad([o,b,_],[r,b,_],[r,S,M],[o,S,M],z,wt.ROCK,[[0,x],[cn,x],[cn,y],[0,y]]):t.quad([o,S,M],[r,S,M],[r,b,_],[o,b,_],z,wt.ROCK,[[0,y],[cn,y],[cn,x],[0,x]])}let h=e?Rt-.08:-cn,g=e?Rt+cn:.08;t.box(h,xe.sill-.09,p-xe.hw-.12,g,xe.sill,p+xe.hw+.12,wt.OLDSTONE)}let s=e?Rt:0,i=e?-1:1,c=wt.OLDSTONE,f=Math.min(s,s+i*.32),l=Math.max(s,s+i*.32);t.box(f,ao-.55,0,l,ao-.3,_e,c);let v=Math.min(s,s+i*.42),d=Math.max(s,s+i*.42);t.box(v,ao-.3,0,d,ao-.12,_e,c)}for(let[e,o]of[[0,1],[_e,-1]]){for(let s=0;s<32;s++){let i=s/32*Rt,c=(s+1)/32*Rt,f=v=>v<Rt/2?ao+Rn*v:ao+Rn*(Rt-v),l=o>0?[[c,0],[i,0],[i,f(i)],[c,f(c)]]:[[i,0],[c,0],[c,f(c)],[i,f(i)]];t.quad(...l.map(([v,d])=>[v,d,e]),[0,0,o],wt.ROCK,l.map(([v,d])=>[v,d]))}let n=o>0?0:_e-.32,a=o>0?.32:_e;t.box(0,ao-.55,n,Rt,ao-.3,a,wt.OLDSTONE)}S8(t);{let e=qd();T8(e),A8(t,e)}z8(t),k8(t);{let{x0:e,x1:o,z0:r,z1:n,curb:a,top:s}=ht,i=.06,c=.085;t.box(e-a,0,r-a,e,s-c,n+a,wt.OLDSTONE,{bottom:!0}),t.box(o,0,r-a,o+a,s-c,n+a,wt.OLDSTONE,{bottom:!0}),t.box(e,0,r-a,o,s-c,r,wt.OLDSTONE,{bottom:!0}),t.box(e,0,n,o,s-c,n+a,wt.OLDSTONE,{bottom:!0}),t.box(e-a-i,s-c,r-a-i,e+i*.5,s,n+a+i,wt.OLDSTONE),t.box(o-i*.5,s-c,r-a-i,o+a+i,s,n+a+i,wt.OLDSTONE),t.box(e+i*.5,s-c,r-a-i,o-i*.5,s,r+i*.5,wt.OLDSTONE),t.box(e+i*.5,s-c,n-i*.5,o-i*.5,s,n+a+i,wt.OLDSTONE);let f=.5;for(let l=e;l<o-1e-6;l+=f)for(let v=r;v<n-1e-6;v+=f){let d=l,p=Math.min(o,l+f),u=v,h=Math.min(n,v+f);t.quad([d,0,u],[d,0,h],[p,0,h],[p,0,u],[0,1,0],wt.WATER,[[d,u],[d,h],[p,h],[p,u]])}}return t}function I8(t){for(let o of[0]){let r=o?Rt+cn*.5:-cn*.5,n=.05,a=Zn.w*.5;for(let s of xe.c){for(let i of Zn.cols){let c=Sa(i)-.01;t.box(r-n,xe.sill,s+i-a,r+n,c,s+i+a,wt.STEEL)}for(let i=xe.sill+Zn.rowH;i<xe.spring+.01;i+=Zn.rowH)t.box(r-n,i-a,s-xe.hw,r+n,i+a,s+xe.hw,wt.STEEL);for(let[i,c]of[[xe.hw-.03,.06],[Zn.ring,a]])for(let l=0;l<24;l++){let v=l/24*ke,d=(l+1)/24*ke;t.beam([r,xe.spring+Math.sin(v)*i,s+Math.cos(v)*i],[r,xe.spring+Math.sin(d)*i,s+Math.cos(d)*i],c,wt.STEEL,[1,0,0])}for(let i of[-1,1])t.box(r-n,xe.sill,s+i*(xe.hw-.03)-.03,r+n,xe.spring,s+i*(xe.hw-.03)+.03,wt.STEEL);t.box(r-n,xe.sill,s-xe.hw,r+n,xe.sill+.06,s+xe.hw,wt.STEEL)}}let e=o=>o<Rt/2?ao+Rn*o:ao+Rn*(Rt-o);for(let o=0;o<=12;o++){let r=o*kr.rafter;for(let[n,a]of[[-.3,Rt/2],[Rt/2,Rt+.3]])t.beam([n,e(Math.max(0,Math.min(Rt,n)))-.1,r],[a,e(a)-.1,r],.06,wt.STEEL)}t.beam([Rt/2,ur-.14,-.2],[Rt/2,ur-.14,_e+.2],.12,wt.STEEL);for(let o of[.05,Rt-.05])t.beam([o,ao-.05,0],[o,ao-.05,_e],.1,wt.STEEL);for(let o of fi){t.box(-.05,ao-.13,o-.08,Rt+.05,ao+.13,o+.08,wt.STEEL),t.beam([Rt/2,ao,o],[Rt/2,ur-.2,o],.07,wt.STEEL);for(let r of[-1,1])t.beam([Rt/2+r*Rt/4,ao,o],[Rt/2,ur-.4,o],.055,wt.STEEL),t.beam([Rt/2+r*Rt/4,ao,o],[Rt/2+r*Rt/4,e(Rt/2+r*Rt/4)-.2,o],.045,wt.STEEL),t.beam([Rt/2+r*(Rt/2-.1),ao,o],[Rt/2+r*Rt/4,e(Rt/2+r*Rt/4)-.2,o],.045,wt.STEEL);for(let r of[-1,1])t.box(Rt/2+r*Rt/4-.12,ao-.18,o-.1,Rt/2+r*Rt/4+.12,ao+.18,o+.1,wt.STEEL)}}function q8(t){let e=Ba(311),o=[],r=[[ht.x0+.9,Y0(6.6),.9,11],[ht.x1-.8,Y0(8.4),.85,10],[ht.x0+.8,Y0(10.6),.8,9],[ht.x1-.9,Y0(12.4),.9,11],[ht.x0+1,Y0(13.9),.65,7],[Rt/2+.2,Y0(9.6),.5,4],[ht.x1-.7,Y0(15.9),.6,6]];for(let[a,s,i,c]of r)for(let f=0;f<c;f++)for(let l=0;l<40;l++){let v=e()*2*ke,d=i*Math.sqrt(e()),p=a+Math.cos(v)*d,u=s+Math.sin(v)*d,h=.15+e()*.17;if(!(p-h<ht.x0+.04||p+h>ht.x1-.04||u-h<ht.z0+.04||u+h>ht.z1-.04)&&!(Math.hypot(p-u0.x,u-u0.z)<.62+h)&&!o.some(g=>Math.hypot(g[0]-p,g[1]-u)<(g[2]+h)*.93)){o.push([p,u,h,e()*2*ke,e()]);break}}for(let[a,s,i,c,f]of o){Dd.push([a,s,i]),t.float=[a,s,f*7.3+i*13];let l=28,v=4,d=i*1.08,p=[];for(let u=0;u<=v;u++){let h=[];for(let g=0;g<l;g++){let m=g/l*2*ke,x=u/v,y=m-c,_=.012+.004*(1-x*x)+.006*Math.pow(x,6)*(.5+.5*Math.sin(m*3+f*9));h.push(t.v([a+Math.cos(m)*d*x,_,s+Math.sin(m)*d*x],[0,1,0],wt.PAD,[.5+.5*x*Math.sin(y),.5+.5*x*Math.cos(y)]))}p.push(h)}for(let u=0;u<v;u++)for(let h=0;h<l;h++){let g=p[u][h],m=p[u][(h+1)%l],x=p[u+1][(h+1)%l],y=p[u+1][h];t.idx.push(g,m,x,g,x,y)}}t.float=null;let n=[[ht.x0+.75,Y0(6.9),1],[ht.x1-.65,Y0(8.1),.85],[ht.x1-.95,Y0(12.6),1.1],[ht.x0+.95,Y0(10.3),.8],[ht.x1-.55,Y0(15.6),.9],[ht.x0+1.05,Y0(13.7),.75]];for(let[a,s,i]of n){t.float=[a,s,a*3.7+s*1.3];let c=.17;[[12,1,70],[10,.86,48],[8,.66,26]].forEach(([l,v,d],p)=>{for(let u=0;u<l;u++){let h=2*ke*u/l+p*.33,g=(90-(90-d)*i)*ke/180,m=6,x=4,y=[];for(let _=0;_<=m;_++){let M=_/m,b=(.18+.82*Math.sin(ke*Math.min(1,Math.pow(M,.8)*.75+.1)))*.36*v*c,S=[];for(let z=0;z<=x;z++){let k=z/x*2-1,C=k*b,R=Math.abs(k)*Math.abs(k)*.12*v*c,U=M*v*c,P=U*Math.cos(g),q=U*Math.sin(g)+R,at=a+Math.cos(h)*P-Math.sin(h)*C,St=s+Math.sin(h)*P+Math.cos(h)*C;S.push(t.v([at,.03+q,St],[-Math.cos(h)*Math.sin(g)*.6,.8,-Math.sin(h)*Math.sin(g)*.6],wt.PETAL,[(p===2?.5:0)+.5*(.5+.5*k*.92),.98-M*.96]))}y.push(S)}for(let _=0;_<m;_++)for(let M=0;M<x;M++){let b=y[_][M],S=y[_][M+1],z=y[_+1][M+1],k=y[_+1][M];t.idx.push(b,S,z,b,z,k,b,z,S,b,k,z)}}}),t.lathe(a,s,[[0,.03+.05*c*4],[.025,.03+.045*c*4],[.032,.035],[0,.03]],wt.STAMEN,12)}t.float=null}function D8(t){let e=Ba(907);{t.box(1.25-.48,.86-.06,11.1-1.35,1.25+.48,.86,11.1+1.35,wt.WOOD);for(let i of[-1,1])for(let c of[-1,1])t.box(1.25+i*(.48-.08)-.04,0,11.1+c*(1.35-.1)-.04,1.25+i*(.48-.08)+.04,.86-.06,11.1+c*(1.35-.1)+.04,wt.WOOD);t.box(1.25-.48+.06,.16,11.1-1.35+.1,1.25+.48-.06,.19,11.1+1.35-.1,wt.WOOD);for(let i=0;i<11;i++){let c=1.25+(e()-.5)*.6,f=11.1+(e()-.5)*2.2,l=.035+e()*.04,v=.09+e()*.14;if(t.lathe(c,f,[[0,.86],[l,.86],[l*1.02,.86+v*.9],[l*.9,.86+v],[0,.86+v]],i%3?wt.JAR:wt.POT,14),i%3===0)for(let d=0;d<7;d++){let p=e()*2*ke,u=.28+e()*.12,h=.12+e()*.2;t.beam([c,.86+.03,f],[c+Math.cos(p)*h*u,.86+.03+u,f+Math.sin(p)*h*u],.0055,wt.BRUSH)}}t.box(1.25-.3,.86,11.1+.7,1.25+.15,.86+.02,11.1+1.15,wt.WOOD)}for(let o=0;o<5;o++){let r=.55+e()*.6,n=.75+e()*.8,a=19.3+o*.16,s=.25+o*.07,i=.17,c=[s+n*Math.sin(i)*0,n,a];t.quad([s+.18,0,a-r/2],[s+.18,0,a+r/2],[s+.18-n*Math.sin(i),n*Math.cos(i),a+r/2],[s+.18-n*Math.sin(i),n*Math.cos(i),a-r/2],[Math.cos(i),Math.sin(i),0],o%2?wt.WOOD:wt.GESSO,[[0,0],[1,0],[1,1],[0,1]])}for(let[o,r,n]of Qg){t.beam([o,r+.42,_e],[o,r+.42,n-.02],.016,wt.STEEL),t.beam([o,r+.42,n],[o,r+.26,n],.01,wt.STEEL);for(let[a,s]of[[-1,-1],[1,-1],[1,1],[-1,1]])t.beam([o+a*.085,r-.2,n+s*.085],[o+a*.085,r+.16,n+s*.085],.009,wt.STEEL);t.box(o-.1,r-.24,n-.1,o+.1,r-.2,n+.1,wt.STEEL),t.lathe(o,n,[[.13,r+.16],[.05,r+.27],[0,r+.29]],wt.STEEL,4),t.lathe(o,n,[[0,r-.2],[.022,r-.19],[.022,r-.06],[0,r-.055]],wt.GESSO,10),t.lathe(o,n,[[0,r-.055],[.014,r-.035],[0,r+.02]],wt.FLAME,8)}for(let o of Zg)t.beam([o[0],ao,o[2]],[o[0],o[1]+.05,o[2]],.008,wt.STEEL),t.lathe(o[0],o[2],[[.04,o[1]+.06],[.06,o[1]+.02],[.16,o[1]-.09],[.29,o[1]-.22],[.33,o[1]-.28],[.32,o[1]-.285]],wt.SHADE,32),t.lathe(o[0],o[2],[[0,o[1]-.25],[.06,o[1]-.2],[0,o[1]-.12]],wt.BULB,12)}var Zg=[[4.2,4.6,7.33],[11.8,4.6,7.33],[4.2,4.6,16.5],[11.8,4.6,16.5]],Qg=[-1,1].map(t=>[Rt/2+t*(1.95/2+.62),2.95,_e-.34]),CA=[[ht.x0-1,ht.z0-1,1],[ht.x1+1,ht.z0-1,.95],[ht.x0-1,ht.z1+1,1.15],[ht.x1+1,ht.z1+1,1.1],[.9,1.3,1.25],[Rt-.9,_e-1.2,1.3]],jg=[[0,0,.16,.5],[.16,0,.34,.4],[.35,0,.5,.36],[.5,0,.66,.38],[.68,0,.84,.42],[0,.6,.19,1],[.2,.57,.36,1],[.41,.6,.58,1]];function F8(){let t={pos:[],nrm:[],uv:[],shade:[],flower:[],idx:[]},e=Ba(1213),o=(r,n,a,s,i)=>{let c=jg[Math.floor(e()*jg.length)],f=(c[2]-c[0])/(c[3]-c[1]),l=s*f*1,v=5,d=t.pos.length/3,p=.6+e()*.4;for(let u=0;u<=v;u++){let h=u/v,g=i*h*h*s,m=[r[0]+n[0]*h*s,r[1]+n[1]*h*s-g,r[2]+n[2]*h*s];for(let x of[-.5,.5]){t.pos.push(m[0]+a[0]*x*l+he[0],m[1]+a[1]*x*l-Math.abs(x)*.08*l+he[1],m[2]+a[2]*x*l+he[2]);let y=[n[1]*a[2]-n[2]*a[1],n[2]*a[0]-n[0]*a[2],n[0]*a[1]-n[1]*a[0]],_=Math.hypot(...y)||1;t.nrm.push(y[0]/_,Math.abs(y[1]/_)+.2,y[2]/_),t.uv.push(x<0?c[0]:c[2],c[3]-(c[3]-c[1])*h),t.shade.push(p),t.flower.push(0)}}for(let u=0;u<v;u++){let h=d+u*2;t.idx.push(h,h+1,h+3,h,h+3,h+2)}};R8(t,o,e);for(let[r,n,a]of[[ht.x0-.3,ht.z1+.3,-1],[ht.x1+.3,ht.z0-.3,1],[ht.x0-.3,ht.z0-.2,-1]])for(let s=0;s<26;s++){let i=e()*2*ke,c=r+(e()-.3)*.5*-a,f=n+(e()-.5)*.8,l=ht.top+.01-Math.max(0,Math.abs(c-r)-.1)*.6*e();o([c,Math.max(.05,l),f],[Math.cos(i),-.15,Math.sin(i)],[-Math.sin(i),0,Math.cos(i)],.08+e()*.05,.12)}return t}function G8(){let t=qd();for(let o of[0]){let r=o?Rt+cn*.5+.01:-cn*.5-.01,n=o?[-1,0,0]:[1,0,0];for(let a of xe.c)for(let i=a-xe.hw;i<a+xe.hw-1e-6;i+=.05){let c=i,f=Math.min(a+xe.hw,i+.05),l=Sa(c-a+1e-4)||xe.spring,v=Sa(f-a-1e-4)||xe.spring;o?t.quad([r,xe.sill,f],[r,xe.sill,c],[r,l,c],[r,v,f],n,0,[[f,xe.sill],[c,xe.sill],[c,l],[f,v]]):t.quad([r,xe.sill,c],[r,xe.sill,f],[r,v,f],[r,l,c],n,0,[[c,xe.sill],[f,xe.sill],[f,v],[c,l]])}}let e=Math.hypot(Rn,1);return t.quad([0,ao+.002,_e],[0,ao+.002,0],[Rt/2,ur+.002,0],[Rt/2,ur+.002,_e],[Rn/e,-1/e,0].map(o=>-o).map((o,r)=>r===1?-Math.abs(o):o),1,[[0,_e],[0,0],[Rt/2,0],[Rt/2,_e]]),t.quad([Rt,ao+.002,0],[Rt,ao+.002,_e],[Rt/2,ur+.002,_e],[Rt/2,ur+.002,0],[-Rn/e,-1/e,0],1,[[Rt,0],[Rt,_e],[Rt/2,_e],[Rt/2,0]]),t}var ci={ivy:[[.00293,.0127,.12207,.23633],[.13037,.00586,.24463,.24414],[.25293,.0166,.37207,.23242],[.37793,.02344,.49707,.22656],[.50293,.01367,.62207,.23535],[.62793,.03418,.74707,.21582]],blade:[[.01855,.50391,.02832,.99512],[.05762,.50391,.08301,.99512],[.10889,.50391,.12549,.99609],[.1582,.50391,.16943,.99512],[.19922,.50391,.22266,.99512],[.25,.50391,.26562,.99609],[.29932,.50391,.31006,.99609],[.33008,.50781,.37305,.99121],[.38721,.50391,.40918,.99609]],daisy:[[.75684,.00586,.86768,.24414],[.87793,.00781,.99707,.24121],[.00342,.25586,.12158,.49414],[.12842,.25586,.24609,.49414],[.25293,.25684,.37207,.49219],[.37891,.25586,.49609,.49316]],weed:[[.50293,.25781,.62207,.49121],[.62793,.26562,.74707,.48438],[.75293,.26855,.87207,.48047],[.88281,.25586,.99219,.49414],[.44043,.50977,.55957,.73926],[.5752,.50586,.67432,.74414],[.69043,.50586,.80908,.74414],[.81738,.50586,.93213,.74414],[.44043,.75781,.55957,.99219]],rleaf:[[.69824,.75586,.78076,.99414],[.79834,.75586,.88867,.99414],[.9043,.75586,.99072,.99414],[.94043,.54395,.99707,.70605]],petal:[[.56445,.75391,.68555,.99609]]},H8=[[.248,.8613],[.3438,.9785],[.4492,.584],[.5957,.3281],[.5371,.918],[.1699,.4062],[.752,.6699],[.5879,.2207],[.3789,.8477],[.2637,.2266],[.6758,.7422],[.6016,.0273],[.5762,.502],[.0469,.5078],[.1406,.7773],[.791,.7539],[.6113,.5605],[.9121,.6777],[.6523,.1523],[.2871,.3301],[.2109,.832],[.4297,.625],[.168,.4434],[.1348,.1211],[.9668,.0859],[.3164,.873],[.1777,.7539],[.0215,.3281],[.6719,.334],[.9844,.6172],[.6523,.3828],[.1152,.2988],[.0176,.1328],[.207,.0996],[.6152,.9844],[.0234,.0117],[.0723,.6328],[.2695,.7695],[.2539,.9395],[.502,.9941],[.1504,.9961],[.957,.8145],[.5117,.123],[.4062,.4941],[.0547,.1387],[.4375,.2949],[.373,.2109],[.1699,.3086],[.5176,.6445],[.4863,.3027],[.877,.6602],[.5977,.8887],[.5488,.0098],[.5156,.5332],[.6973,.1094],[.4707,.2051],[.498,.7559],[.0312,.7363],[.2051,.4629],[.541,.8379],[.8398,.8965],[.1426,.1855],[.3711,.1172],[.1328,.9082],[.75,.9629],[.2812,.0449],[.6367,.4277],[.2051,.9824],[.7012,.9766],[.0059,.9102],[.7168,.3379],[.1602,.584],[.8594,.1973],[.3516,.7227],[.0918,.9727],[.416,.3359],[.6465,.9355],[.3418,.627],[.7578,.332],[.0293,.6973],[.9004,.957],[.7012,.7617],[.1855,.8652],[.6914,.8184],[.5684,.543],[.6523,.8672],[.5742,.7441],[.2949,.4121],[.2363,.6387],[.25,.1953],[.0352,.5918],[.248,.293],[.0762,.4863],[.9785,.4922],[.9004,.7305],[.9277,.5527],[.9395,.125],[.3691,.8789],[.4805,.0469],[.5703,.4551],[.4199,.2246],[.0371,.625],[.3281,.4941],[.1152,.6094],[.2793,.834],[.5039,.166],[.4609,.5312],[.0645,.7715],[.6035,.7227],[.4746,.6348],[.6777,.5684],[.2773,.4512],[.8008,.1191],[.3945,.9297],[.2109,.6855],[.5977,.1875],[.5195,.0742],[.1309,.4609],[.9531,.4277],[.4785,.9648],[.543,.3262],[.9121,.041],[.5059,.7188],[.0098,.2969],[.8438,.3789],[.1504,.2637],[.7969,.873],[.8613,.9863],[.834,.7461],[.377,.6211],[.791,.7227],[.6758,.8457],[.7832,.8066],[.834,.5293],[.1973,.6562],[.8281,.9609],[.5332,.7773],[.9062,.8008],[.3262,.0234],[.8984,.7676]],Lc={IVY:0,BLADE:1,DAISY:2,WEED:3,ROSE:4,RLEAF:5,GRAPE:6},Wg=[[[.006,.013,-.051],[-.04,-.022,.004],[-.029,.026,-.015]],[[-.094,.019,.023],[.014,-.004,-.003],[.06,.026,-.027]],[[-.034,-.031,.002],[-.019,.07,-.028],[-.07,.018,-.039]],[[.102,-.049,-.011],[.057,-.046,.157],[.042,-.031,.089]],[[.026,.006,.019],[-.038,-.037,-.073],[-.042,-.019,.021]],[[.088,-.048,.008],[.143,-.012,.005],[-.044,.033,.028]],[[.039,-.084,-.04],[-.054,-.031,.031],[.076,.028,.014]],[[.082,-.037,-.05],[-.078,.011,.004],[-.076,-.047,.042]]],U8=2;function B8(){let t={pos:[],nrm:[],uv:[],info:[],idx:[]},e=[],o={pos:[],nrm:[],uv:[],info:[],idx:[]},r=t,n=Ba(2718),a=Q=>{let j=Math.hypot(Q[0],Q[1],Q[2])||1;return[Q[0]/j,Q[1]/j,Q[2]/j]},s=(Q,j)=>[Q[1]*j[2]-Q[2]*j[1],Q[2]*j[0]-Q[0]*j[2],Q[0]*j[1]-Q[1]*j[0]],i=(Q,j)=>Q[0]*j[0]+Q[1]*j[1]+Q[2]*j[2],c=(Q,j,ft)=>[Q[0]+j[0]*ft,Q[1]+j[1]*ft,Q[2]+j[2]*ft],f=Q=>Q[Math.floor(n()*Q.length)],l=Q=>(Q[2]-Q[0])*U8/(Q[3]-Q[1]),v=(Q,j,ft,xt,Qt,ce)=>(r.pos.push(Q[0]+he[0],Q[1]+he[1],Q[2]+he[2]),r.nrm.push(j[0],j[1],j[2]),r.uv.push(ft[0],ft[1]),r.info.push(xt,Qt,ce),r.pos.length/3-1),d=(Q,j,ft,xt,Qt,ce,Kt,qt,rt)=>{let Ct=rt?2:1,we=r.pos.length/3;for(let te=0;te<=Ct;te++){let Nt=te/Ct,$e=rt?c(c(Q,ft,Nt),qt,rt*Nt*Nt):c(Q,ft,Nt),E=xt[3]+(xt[1]-xt[3])*Nt;v(c($e,j,-1),Kt,[xt[0],E],Qt,ce,Nt),v(c($e,j,1),Kt,[xt[2],E],Qt,ce,Nt)}for(let te=0;te<Ct;te++){let Nt=we+te*2;r.idx.push(Nt,Nt+1,Nt+3,Nt,Nt+3,Nt+2)}},p=null,u=[...ci.ivy,...ci.ivy,...ci.weed.slice(0,7)],h=[0,1,0],g=(Q,j,ft,xt,Qt)=>{let ce=f(u),Kt=s(ft,j),qt=a(c(c(j,ft,n()*.9-.25),Kt,(n()-.5)*.8)),rt=a(c(ft,qt,-i(ft,qt))),Ct=(n()-.5)*2,we=Math.cos(Ct),te=Math.sin(Ct);rt=a(c(c([0,0,0],rt,we),s(qt,rt),te));let Nt=s(rt,qt),$e=xt*l(ce);d(c(Q,rt,-xt*.18),c([0,0,0],Nt,$e/2),c([0,0,0],rt,xt),ce,Qt,Lc.IVY,qt)},m=(Q,j,ft,xt,Qt)=>{let ce=Math.floor(n()*Wg.length),Kt=Wg[ce],qt=s(ft,j),rt=a(c(c(j,ft,n()*.8-.3),qt,(n()-.5)*.9)),Ct=a(c(ft,rt,-i(ft,rt))),we=n()*2*ke,te=Math.cos(we),Nt=Math.sin(we);Ct=a(c(c([0,0,0],Ct,te),s(rt,Ct),Nt));let $e=s(Ct,rt),E=ce%4/4,De=Math.floor(ce/4)/2,je=1.4,lo=[],Oo=r.pos.length/3;for(let _o=0;_o<3;_o++)for(let Fo=0;Fo<3;Fo++){let qo=Fo/2-.5,s0=.5-_o/2;lo.push(c(c(c(Q,$e,qo*xt),Ct,s0*xt),rt,Kt[_o][Fo]*xt*je))}for(let _o=0;_o<3;_o++)for(let Fo=0;Fo<3;Fo++){let qo=Math.max(Fo-1,0),s0=Math.min(Fo+1,2),tn=Math.max(_o-1,0),yr=Math.min(_o+1,2),et=c(lo[_o*3+s0],lo[_o*3+qo],-1),jt=c(lo[tn*3+Fo],lo[yr*3+Fo],-1),Yt=a(s(et,jt));i(Yt,rt)<0&&(Yt=Yt.map(Ft=>-Ft)),v(lo[_o*3+Fo],Yt,[E+Fo/2*.25,De+_o/2*.5],Qt,Lc.GRAPE,1)}for(let _o=0;_o<2;_o++)for(let Fo=0;Fo<2;Fo++){let qo=Oo+_o*3+Fo;r.idx.push(qo,qo+1,qo+4,qo,qo+4,qo+3)}},x=(Q,j,ft,xt,Qt,ce,Kt,qt,rt,Ct=.3)=>{let we=Math.max(3,Math.round(Qt*2.4*Kt)),te=[];for(let $e=0;$e<we;$e++){let E=xt+(n()-.5)*Qt,De=Math.min(1,Math.abs(E-xt)/(Qt/2+.001)),je=ce*(.6+.4*n())*(1-.5*De*De);te.push([E,qt||n()*.15,(n()-.5)*.5,je,0])}let Nt=0;for(;te.length&&Nt++<4e3;){let[$e,E,De,je,lo]=te.pop(),Oo=E;for(let _o=0;_o<260&&(De+=(n()-.5)*.45,De=Math.max(-1,Math.min(1,De)),$e+=Math.sin(De)*.09,E+=(qt?-1:1)*Math.cos(De)*.09,!(qt?Oo-E>je||E<(rt?rt($e):.05):E-Oo>je));_o++){let qo=qt?(Oo-E)/je:(E-Oo)/je,s0=n()<.9*Kt?n()<.5?2:1:0;for(let tn=0;tn<s0;tn++){let yr=.015+n()*.11,et=$e+(n()-.5)*.2,jt=E+(n()-.5)*.12;if(p&&p(et,jt))continue;let Yt=c(c(c(Q,j,et),h,jt),ft,yr),Ft=(.14+.1*n())*(qt?1.05-.3*qo:1.2-.4*qo),Ae=.45+.55*(yr/.125)*(.6+.4*n());n()<Ct?n()<.55&&m(Yt,ft,h,Ft*1.7,Ae):g(Yt,ft,h,Ft,Ae)}lo<2&&n()<.035&&te.push([$e,E,De+(n()<.5?-.7:.7),je*(.35+.4*n())*(1-qo*.5),lo+1])}}},y=(Q,j,ft,xt,Qt)=>{let ce=f(ci.rleaf),Kt=a(c(c(j,ft,n()*.8-.1),s(ft,j),(n()-.5)*.9)),qt=a(c(ft,Kt,-i(ft,Kt))),rt=(n()-.5)*3,Ct=Math.cos(rt),we=Math.sin(rt);qt=a(c(c([0,0,0],qt,Ct),s(Kt,qt),we));let te=s(qt,Kt);d(c(Q,qt,-xt*.1),c([0,0,0],te,xt*l(ce)/2),c([0,0,0],qt,xt),ce,Qt,Lc.RLEAF,Kt)},_=(Q,j,ft,xt,Qt,ce,Kt)=>{let qt=Math.max(3,Math.round(Qt*2.2)),rt=($e,E,De)=>c(c(c(Q,j,$e),h,E),ft,De),Ct=y,we=null,te=($e,...E)=>{p&&p(i(c($e,Q,-1),j),$e[1])||Ct($e,...E)},Nt=($e,E,De)=>{p&&p(i(c($e,Q,-1),j),$e[1])||e.push({at:$e,f:E,size:De,spin:n()*2*ke})};for(let $e=0;$e<qt;$e++){let E=xt+(n()-.5)*Qt*.35,De=.05,je=(n()-.5)*1.4,lo=ce*(.6+.4*n()),Oo=(E-xt)/(Qt/2+.001);for(let _o=0;_o<200&&De<lo&&(je+=(n()-.5)*.3+Oo*.012+(De>lo*.6?Math.sign(je||1)*.02:0),je=Math.max(-1.25,Math.min(1.25,je)),E+=Math.sin(je)*.08,De+=Math.cos(je)*.08,!(Math.abs(E-xt)>Qt*.6));_o++){let Fo=De/lo;for(let qo=0;qo<(n()<.8?2:1);qo++){let s0=.02+n()*.12;te(rt(E+(n()-.5)*.16,De+(n()-.5)*.12,s0),ft,h,.07+n()*.05,.5+.5*n())}if(Fo>.2&&n()<Kt*(.018+.038*Fo)){let qo=1+Math.floor(n()*3);for(let s0=0;s0<qo;s0++){let tn=a(c(c(ft,h,(n()-.4)*.8),s(h,ft),(n()-.5)*.9));Nt(rt(E+(n()-.5)*.22,De+(n()-.5)*.2,.16+n()*.1),tn,.19+n()*.09)}for(let s0=0;s0<3;s0++)te(rt(E+(n()-.5)*.25,De+(n()-.5)*.2,.05+n()*.08),ft,h,.07+n()*.04,.6+.4*n())}}}},M=(Q,...j)=>_(Q.o,Q.u,Q.n,...j);{let Q=[[.3,.5,.7,.93],[.42,.72,.96]];for(let j=0;j<Fd.length;j++){let ft=Kg(j);for(let xt=3;xt<ft.length;xt++){let[Qt,ce,Kt,qt,rt]=ft[xt],Ct=[Math.sin(qt),0,Math.cos(qt)],we=[Qt+Ct[0]*.025,ce,Kt+Ct[2]*.025];for(let te=0;te<2;te++)y(c(we,[n()-.5,(n()-.5)*.6,n()-.5],.07),Ct,h,.06+.04*n()*(1-rt*.3),.35+.4*n())}for(let xt of Q[j]){let Qt=Math.round(xt*(ft.length-1)),[ce,Kt,qt,rt]=ft[Qt],Ct=[Math.sin(rt),0,Math.cos(rt)],we=a([Ct[0]*.8,.35,Ct[2]*.8+.45]);e.push({at:[ce+Ct[0]*.08,Kt+.03,qt+Ct[2]*.08],f:we,size:.22+.05*n(),spin:n()*2*ke});for(let te=0;te<3;te++)y(c([ce,Kt,qt],Ct,.04+.03*n()),Ct,h,.06+.03*n(),.6+.4*n())}}}let b={o:[0,0,0],u:[1,0,0],n:[0,0,1]},S={o:[0,0,_e],u:[1,0,0],n:[0,0,-1]},z={o:[Rt,0,0],u:[0,0,1],n:[-1,0,0]},k=(Q,...j)=>x(Q.o,Q.u,Q.n,...j);k(b,4.1,3,7,1.5),k(b,12,3.4,5.8,1.3),k(b,1,2.2,4.2,1.2),k(b,15,2,5,1.2),M(b,3.6,3.2,5.6,1.1),M(b,12.6,3,4.8,1),M(b,.9,1.6,3.2,.8);{let Q=io.face-.26,j={o:[0,0,_e-Q+.03],u:[1,0,0],n:[0,0,1]},ft=5.35+1.02;x(j.o,j.u,j.n,Rt-io.x1+1,1.9,2.2,1.2,ft,()=>3.2),x(j.o,j.u,j.n,Rt-io.x0-.5,.8,1,.8,ft,()=>4.6);for(let xt=0;xt<70;xt++){let Qt=io.x0+.2+Math.pow(n(),1.6)*2.4,ce=(io.x1-io.x0)/2+.2,Kt=ft+.62*(1-Math.abs(Qt-io.cx)/ce)+.02;g([Rt-Qt,Kt+n()*.05,.1+n()*(_e-Q-.15)],a([0,1,.3]),[0,0,1],.08+n()*.05,.7+.3*n())}}p=(Q,j)=>Math.abs(Q-Rt/2)<z0.w/2+z0.frame+.12&&j<z0.top+z0.frame+.12,k(S,5.3,3.2,6.2,1.4),k(S,11,3.6,7,1.4),k(S,1.2,2.4,4.4,1.2),k(S,14.9,2.2,5.4,1.2),x(S.o,S.u,S.n,Rt/2+.3,4,1.6,1.3,z0.top+1.7,Q=>Math.abs(Q-Rt/2)<z0.w/2+.3?z0.top+z0.frame+.15:2.4),M(S,5.6,3.4,5.2,1.2),M(S,10.6,3.6,5.8,1.2),M(S,14.6,2,4,.9),p=null,k(z,2.6,4,7,1.4),k(z,9.2,4.6,5.4,1.2),k(z,15.6,5,7.4,1.5),k(z,20.9,2,4,1.2),M(z,3.2,3.6,5.4,1.1),M(z,8.6,3,4.2,1),M(z,13.4,3.2,5.8,1.1),M(z,18.6,3.4,5,1.2),p=(Q,j)=>xe.c.some(ft=>{let xt=Sa(Q-ft);return xt!==null&&Math.abs(Q-ft)<xe.hw+.06&&j>xe.sill-.05&&j<xt+.06});for(let[Q,j]of Ua.filter(ft=>ft[0]==="wall")){let ft=j<1||j>_e-1;x([0,0,0],[0,0,1],[1,0,0],j,ft?1:1.7,ao-.6,ft?.9:1.1,0,null,.85)}for(let Q of xe.c)x([0,0,0],[0,0,1],[1,0,0],Q,xe.hw*2.3,1.6,.8,ao-.6,j=>Sa(j-Q)!==null?Sa(j-Q)+.15:ao-2.2,.85);p=null,r=o;let C=(Q,j,ft,xt,Qt,ce,Kt)=>{let qt=f(ci.blade),rt=[Math.cos(ce),0,Math.sin(ce)],Ct=Math.max(xt*.16,.012);d([Q,j,ft],[-rt[2]*Ct/2,0,rt[0]*Ct/2],[rt[0]*Qt*xt*.4,xt,rt[2]*Qt*xt*.4],qt,Kt,Lc.BLADE,a([rt[0]*.5,1,rt[2]*.5]),rt,xt>.12?xt*Qt*.6:0)},R=(Q,j,ft,xt,Qt)=>{for(let ce=0;ce<Qt;ce++){let Kt=n()*2*ke,qt=n()*.035;C(Q+Math.cos(Kt)*qt,j,ft+Math.sin(Kt)*qt,xt*(.45+.55*n()),.25+.75*n(),Kt+(n()-.5),.6+.4*n())}},U=(Q,j,ft,xt)=>{let Qt=4+Math.floor(n()*3),ce=n()*2*ke;for(let Kt=0;Kt<Qt;Kt++){let qt=f(ci.weed),rt=ce+Kt*2*ke/Qt+(n()-.5)*.4,Ct=[Math.cos(rt),0,Math.sin(rt)],we=.35+n()*.45,te=xt*(.7+.5*n()),Nt=[Ct[0]*Math.cos(we)*te,Math.sin(we)*te,Ct[2]*Math.cos(we)*te],$e=te*l(qt);d([Q,j+.004,ft],[-Ct[2]*$e/2,0,Ct[0]*$e/2],Nt,qt,.7+.3*n(),Lc.WEED,a([-Ct[0]*Math.sin(we),Math.cos(we),-Ct[2]*Math.sin(we)]),[0,-1,0],te*.15)}},P=(Q,j,ft)=>{let xt=.05+n()*.12;C(Q,j,ft,xt+.02,.15,n()*2*ke,.8);let Qt=f(ci.daisy),ce=.03+n()*.025,Kt=(n()-.5)*.6,qt=n()*2*ke,rt=[Math.cos(qt)*ce*2,Math.sin(Kt)*ce,Math.sin(qt)*ce*2],Ct=[-Math.sin(qt)*ce,0,Math.cos(qt)*ce];d([Q-Math.cos(qt)*ce,j+xt,ft-Math.sin(qt)*ce],Ct,rt,Qt,1,Lc.DAISY,[0,1,0]),U(Q,j,ft,.04)},q=(Q,j,ft,xt)=>{let Qt=n();Qt<.8?R(Q,j,ft,xt?.2+.3*n():.08+.1*n(),xt?5+Math.floor(n()*6):3+Math.floor(n()*3)):Qt<.93?U(Q,j,ft,xt?.09+.06*n():.06+.03*n()):P(Q,j,ft)},at=ht.x0-ht.curb-.08,St=ht.x1+ht.curb+.08,yt=ht.z0-ht.curb-.08,mt=ht.z1+ht.curb+.08,zt=Rt-io.x1-.16,It=Rt-io.x0+.16,se=_e-io.face+.36,Ee=(Q,j)=>Math.hypot(Q-to.cx,j-to.cz),Qe=(Q,j)=>Math.abs(Q-l0.cx)<l0.hx+.16&&Math.abs(j-l0.cz+.08)<l0.hz+.4||Ee(Q,j)>to.ri-.1&&Ee(Q,j)<to.ro+1.6||Q>at&&Q<St&&j>yt&&j<mt||Q>zt&&Q<It&&j<se||Math.abs(Q-Rt/2)<1.15&&j>_e-.5||Q<.06||Q>Rt-.06||j<.06||j>_e-.06,me=(Q,j)=>{let ft=Math.min(Q,Rt-Q,j,_e-j),xt=Math.max(at-Q,Q-St,yt-j,j-mt),Qt=Math.max(zt-Q,Q-It,j-se);return Math.min(ft,Math.max(xt,0)+(xt<0?9:0),Math.max(Qt,0)+(Qt<0?9:0))},qe=(Q,j)=>.5+.5*Math.sin(Q*.9+1.3)*Math.sin(j*.7-.4)+.25*Math.sin(Q*2.3+j*1.7);for(let Q=0;Q*2<Rt;Q++)for(let j=0;j*2<_e;j++)for(let[ft,xt]of H8){let Qt=(Q+ft)*2,ce=(j+xt)*2;if(Qe(Qt,ce))continue;let Kt=me(Qt,ce),qt=(Kt<1.2?.75-.4*Kt:.2)*Math.max(.2,qe(Qt,ce));n()<qt&&q(Qt,.002,ce,Kt<.8&&n()<.85)}let Ge=(Q,j,ft)=>{let xt=Math.hypot(j[0]-Q[0],j[1]-Q[1]);for(let Qt=0;Qt<xt;Qt+=.08){if(n()>.8)continue;let ce=Qt/xt,Kt=.04+Math.pow(n(),2)*.3,qt=Q[0]+(j[0]-Q[0])*ce+ft[0]*Kt,rt=Q[1]+(j[1]-Q[1])*ce+ft[1]*Kt;Qe(qt,rt)||q(qt,.002,rt,!0)}};Ge([0,0],[0,_e],[1,0]),Ge([Rt,0],[Rt,_e],[-1,0]),Ge([0,0],[Rt,0],[0,1]),Ge([0,_e],[Rt,_e],[0,-1]),Ge([at,yt],[St,yt],[0,-1]),Ge([at,yt],[at,mt],[-1,0]),Ge([St,yt],[St,mt],[1,0]),Ge([zt,se],[It,se],[0,1]),Ge([zt,0],[zt,se],[-1,0]),Ge([It,0],[It,se],[1,0]);for(let Q=0;Q<60;Q++){let j=Math.floor(n()*3),ft,xt;j<2?(ft=j?ht.x1+.08+n()*.38:ht.x0-.08-n()*.38,xt=ht.z0+n()*(ht.z1-ht.z0)):(xt=ht.z1+.08+n()*.38,ft=ht.x0+n()*(ht.x1-ht.x0)),R(ft,ht.top,xt,.04+.06*n(),2+Math.floor(n()*3))}for(let Q=0;Q<70;Q++){let j=n()*2-1,ft=Math.floor(n()*4),xt=l0.hx+.16+n()*n()*.25,Qt=l0.hz+.3+n()*n()*.25,ce,Kt;ft<2?(ce=l0.cx+(ft?xt:-xt),Kt=l0.cz-.08+j*Qt):(Kt=l0.cz-.08+(ft===2?Qt:-Qt),ce=l0.cx+j*xt),R(ce,0,Kt,.05+.09*n(),2+Math.floor(n()*4))}for(let Q=0;Q<6;Q++)R(l0.cx+(n()*2-1)*(l0.hx+.1),.09,l0.cz-.08+(n()<.5?-1:1)*(l0.hz+.08+n()*.12),.03+.04*n(),2);return{walls:t,ground:o,roses:e}}var j8=`
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
`,W8=Zg.map(t=>tf([t[0],t[1]-.22,t[2]])),Br=`
	${j8}
	${Qh()}

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
		vec3 p = pw - vec3(${F(he[0])}, ${F(he[1])}, ${F(he[2])});
		float vis = studioSun(pw + N * 0.03);
		sunVis = vis;
		vec3 sunC = mix(vec3(1.0, 0.84, 0.62) * 4.6, vec3(0.50, 0.64, 1.0) * 1.6, night);
		float lam = max(dot(N, STUDIO_SUN), 0.0);
		vec3 col = sunC * vis * lam;
		vec3 Hh = normalize(STUDIO_SUN + V);
		spec = sunC * vis * pow(max(dot(N, Hh), 0.0), mix(16.0, 400.0, gloss)) * mix(0.04, 1.0, gloss) * (lam > 0.0 ? 1.0 : 0.0);

		// skylight: the roof is glass, the walls are full of windows
		float upF = 0.5 + 0.5 * N.y;
		float hgt = clamp(p.y / ${F(ao)}, 0.0, 1.0);
		// corners and the foot of the walls get less of the sky
		float dw = min(min(p.x, ${F(Rt)} - p.x), min(p.z, ${F(_e)} - p.z));
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

		// the lanterns by the red door: warm candlelight on the door and the
		// stone round it (only near that end of the room)
		if (p.z > ${F(_e-6)}) {
			${Qg.map(t=>tf(t)).map(t=>`
			{
				vec3 d = vec3(${F(t[0])}, ${F(t[1]-.06)}, ${F(t[2])}) - pw;
				float dd = dot(d, d);
				vec3 Ld = d * inversesqrt(dd);
				float w = mix(1.6, 2.4, night) / (0.25 + dd * 1.8);
				col += vec3(1.0, 0.6, 0.3) * w * (max(dot(N, Ld), 0.0) * 0.9 + 0.1);
				spec += vec3(1.0, 0.65, 0.35) * w * pow(max(dot(N, normalize(Ld + V)), 0.0), mix(16.0, 300.0, gloss)) * gloss * 0.6;
			}`).join("")}
		}
		// the candles on the grave
		if (abs(p.z - ${F(l0.cz)}) < 4.5 && abs(p.x - ${F(l0.cx)}) < 4.5) {
			${Yg.map(([t,e,o])=>tf([t,l0.top+o+.05,e])).map((t,e)=>`
			{
				vec3 d = vec3(${F(t[0])}, ${F(t[1])}, ${F(t[2])}) - pw;
				float dd = dot(d, d);
				vec3 Ld = d * inversesqrt(dd);
				float fl = 1.0;
				float w = mix(0.2, 0.32, night) * fl / (0.04 + dd * 2.6);
				col += vec3(1.0, 0.55, 0.24) * w * (max(dot(N, Ld), 0.0) * 0.9 + 0.1);
				spec += vec3(1.0, 0.6, 0.3) * w * pow(max(dot(N, normalize(Ld + V)), 0.0), mix(16.0, 300.0, gloss)) * gloss * 0.5;
			}`).join("")}
		}
		// the lamps (by night)
		if (night > 0.01) {
			${W8.map(t=>`
			{
				vec3 d = vec3(${F(t[0])}, ${F(t[1])}, ${F(t[2])}) - pw;
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
`;function V8(t){let e=new DataView(t),o=e.getUint32(4,!0),r=e.getUint32(8,!0),n=[],a=[];for(let l=0;l<3;l++)n.push(e.getFloat32(12+l*4,!0)),a.push(e.getFloat32(24+l*4,!0));let s=36,i=new Uint16Array(t,s,o*3);s+=o*6;let c=new Uint16Array(t,s,r);s+=r*2;let f=new Int8Array(t,s,o*3);return{nV:o,nI:r,mn:n,sz:a,pos:i,idx:c,nrm:f}}function fr(t,e,o){let r=o&&o.wrap||"clamp",n=t.texture({data:[[[0,0,0,0]]],min:"linear",mag:"linear"}),a={tex:n,ready:!1};return fetch(e).then(s=>{if(!s.ok)throw new Error("Could not load "+e);return s.blob()}).then(s=>createImageBitmap(s,{premultiplyAlpha:"none"}).catch(()=>new Promise((i,c)=>{let f=new Image;f.onload=()=>i(f),f.onerror=c,f.src=URL.createObjectURL(s)}))).then(s=>{n({data:s,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrap:r}),a.ready=!0}).catch(s=>console.error(s)),a}var Kh=128,Zh=Math.round((ht.z1-ht.z0)/(11/372)),Jl=(ht.x1-ht.x0)/Kh,Jg=(ht.z1-ht.z0)/Zh,X8=.02,t5=`
	float simDec(vec2 c) { return (floor(c.x * 255.0 + 0.5) * 256.0 + floor(c.y * 255.0 + 0.5)) / 65535.0 * 2.0 - 1.0; }
	vec2 simEnc(float h) {
		float v = floor(clamp(h * 0.5 + 0.5, 0.0, 1.0) * 65535.0 + 0.5);
		float hi = floor(v / 256.0);
		return vec2(hi, v - hi * 256.0) / 255.0;
	}
`,Ha=`
	uniform float stime;
	uniform highp sampler2D simTex;
	${t5}
	float simAt(vec2 i) {
		i = clamp(i, vec2(0.0), vec2(${Kh-1}.0, ${Zh-1}.0));
		return simDec(texture2D(simTex, (i + 0.5) / vec2(${Kh}.0, ${Zh}.0)).rg);
	}
	// the height of the water at world xz (metres, tiny)
	float poolHeight(vec2 xz) {
		float h = 0.0018 * sin(xz.x * 2.1 + stime * 0.55) * sin(xz.y * 1.7 - stime * 0.43)
		        + 0.0010 * sin(xz.x * 3.7 - xz.y * 2.9 + stime * 0.8);
#ifndef NO_SIM
		vec2 g = (xz - vec2(${F(ht.x0+he[0])}, ${F(ht.z0+he[2])})) / vec2(${F(Jl)}, ${F(Jg)}) - 0.5;
		vec2 i = floor(g), fr = g - i;
		float sh = mix(mix(simAt(i), simAt(i + vec2(1.0, 0.0)), fr.x), mix(simAt(i + vec2(0.0, 1.0)), simAt(i + vec2(1.0, 1.0)), fr.x), fr.y);
		h += sh * ${F(X8)};
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
	${Ha}
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
	}`,Y8=`
	precision highp float;
	uniform float night, time, yScale, mirrorOn;
	uniform sampler2D padTex, petalTex, reflTex;
	uniform sampler2D rockCol, rockNrm, oldCol, oldNrm, floorCol, floorNrm;
	uniform vec2 reflSize;
	uniform float reflOn;
	uniform mat4 view;
	${Ha}
	varying vec3 v_pos, v_nrm, v_eye;
	varying float v_kind;
	varying vec2 v_uv;
	${Br}

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
		vec3 p = pw - vec3(${F(he[0])}, ${F(he[1])}, ${F(he[2])});
		vec3 V = normalize(v_eye - pw);
		vec3 N = normalize(v_nrm);
		if (dot(N, V) < 0.0 && !is(${wt.PETAL}.0)) N = -N;
		if (is(${wt.PETAL}.0) && dot(N, V) < 0.0) N = -N;

		// in the reflection under the floor, the floor and the water are not drawn
		bool floorish = is(${wt.FLOOR}.0) || is(${wt.WATER}.0);
		if (yScale < 0.0 && floorish) discard;

		// fallen bracts: little papery hearts, pink or white
		if (is(${wt.BRACT}.0)) {
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

		if (is(${wt.ROCK}.0)) {
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
			base *= mix(1.0, 0.84, smoothstep(${F(ao-2.2)}, ${F(ao)}, p.y));
			N = bumped(N, T, B, tn, 1.4);
			aoK = mix(0.42, 1.0, tn.b);
			gloss = 0.05;
		} else if (is(${wt.OLDSTONE}.0) || is(${wt.HOLLOW}.0)) {
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
			float low = 1.0 - smoothstep(0.0, ${F(ht.top+.35)}, p.y);
			float moss = low * smoothstep(0.35, 0.65, fbm3(p * 4.0 + 2.0));
			base = mix(base, vec3(0.10, 0.12, 0.065), moss * 0.6);
			base *= mix(0.72, 1.0, smoothstep(0.0, 0.22, p.y));
			if (is(${wt.HOLLOW}.0)) {
				// the hollow: older, damper, never washed by the sun
				base *= vec3(0.70, 0.73, 0.68) * (0.85 + 0.15 * smoothstep(${F(io.floor)}, ${F(io.spring)}, p.y));
			}
			N = bumped(N, T, B, tn, 1.1);
			aoK = mix(0.5, 1.0, tn.b);
			gloss = 0.08;
		} else if (is(${wt.PLASTER}.0) || is(${wt.NICHE}.0)) {
			// old lime plaster: warm, patchy, with a soft trowelled bloom
			float big = fbm3(p * vec3(0.35, 0.45, 0.35));
			float mid = fbm3(p * 1.6 + 3.0);
			float fine = vnoise3(p * 14.0);
			vec3 a = vec3(0.70, 0.60, 0.47), b = vec3(0.84, 0.76, 0.63);
			base = mix(a, b, smoothstep(0.3, 0.7, big));
			base *= 0.86 + 0.22 * mid + 0.05 * fine;
			// damp stains low down, soot high up
			base *= mix(0.86, 1.0, smoothstep(0.0, 1.4, p.y + 0.6 * mid));
			base *= mix(1.0, 0.9, smoothstep(${F(ao-2)}, ${F(ao)}, p.y));
			// where the plaster has come away, old brick shows through
			float bare = smoothstep(0.70, 0.74, fbm3(p * vec3(0.5, 0.8, 0.5) + 11.0)) * smoothstep(0.4, 1.6, p.y) * 0.85;
			vec2 bk = (abs(N.x) > 0.5 ? p.zy : p.xy) * vec2(1.0 / 0.23, 1.0 / 0.075);
			bk.x += floor(bk.y) * 0.5;
			float mortar = max(smoothstep(0.9, 0.97, fract(bk.x)), smoothstep(0.82, 0.92, fract(bk.y)));
			vec3 brick = mix(vec3(0.55, 0.30, 0.20), vec3(0.42, 0.25, 0.18), vnoise3(vec3(floor(bk), 0.0) * 0.7)) * (0.85 + 0.3 * hash13(vec3(floor(bk), 1.0)));
			brick = mix(brick, vec3(0.62, 0.58, 0.52), mortar);
			base = mix(base, brick, bare);
			if (is(${wt.NICHE}.0)) base *= 0.55;
			gloss = 0.04;
		} else if (is(${wt.STONE}.0)) {
			float n = fbm3(p * vec3(1.2, 2.5, 1.2));
			base = mix(vec3(0.72, 0.66, 0.56), vec3(0.84, 0.79, 0.70), n) * (0.92 + 0.12 * vnoise3(p * 20.0));
			gloss = 0.12;
		} else if (is(${wt.TRAVERTINE}.0)) {
			// travertine: bands, little holes, a warm cream
			float band = fbm3(vec3(p.x * 0.4, p.y * 9.0 + fbm3(p * 1.5) * 2.0, p.z * 0.4));
			base = mix(vec3(0.73, 0.65, 0.53), vec3(0.88, 0.82, 0.72), band);
			float pit = smoothstep(0.84, 0.9, vnoise3(p * 55.0));
			base *= 1.0 - pit * 0.18;
			// wet and darker just above the water
			base *= mix(0.78, 1.0, smoothstep(0.0, 0.12, p.y));
			gloss = 0.18;
		} else if (is(${wt.STEEL}.0)) {
			base = vec3(0.035, 0.036, 0.038) * (0.8 + 0.4 * vnoise3(p * 3.0));
			gloss = 0.45;
		} else if (is(${wt.FLOOR}.0)) {
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
			float wallD = min(min(p.x, ${F(Rt)} - p.x), min(p.z, ${F(_e)} - p.z));
			base *= mix(0.72, 1.0, smoothstep(0.0, 1.2, wallD));
			N = normalize(N + (vec3(1.0, 0.0, 0.0) * (tn.r * 2.0 - 1.0) + vec3(0.0, 0.0, -1.0) * (tn.g * 2.0 - 1.0)) * 1.2);
			gloss = 0.12;
			aoK = mix(0.5, 1.0, tn.b) * mix(0.62, 1.0, smoothstep(0.0, 0.9, wallD));
			// the curb throws a soft shadow round the pool
			vec2 dq = max(vec2(${F(ht.x0-ht.curb)} - p.x, p.x - ${F(ht.x1+ht.curb)}), vec2(${F(ht.z0-ht.curb)} - p.z, p.z - ${F(ht.z1+ht.curb)}));
			float dpool = max(max(dq.x, dq.y), 0.0);
			aoK *= mix(0.7, 1.0, smoothstep(0.0, 0.4, dpool));
		} else if (is(${wt.WMARBLE}.0)) {
			// white statuary marble, polished: a soft grey cloud and fine veins
			float cl = fbm3(p * 1.4 + 2.0);
			float v1 = abs(sin(p.x * 3.1 + p.z * 1.7 + p.y * 5.0 + cl * 7.0));
			float vein = (1.0 - smoothstep(0.0, 0.05, v1)) * 0.7 + (1.0 - smoothstep(0.0, 0.02, abs(sin(p.z * 6.3 - p.x * 2.2 + cl * 11.0)))) * 0.3;
			base = mix(vec3(0.68, 0.68, 0.66), vec3(0.76, 0.76, 0.74), cl);
			base = mix(base, vec3(0.50, 0.51, 0.52), vein * 0.45);
			base *= mix(0.8, 1.0, smoothstep(0.0, 0.1, p.y));
			gloss = 0.88;
		} else if (is(${wt.REDDOOR}.0) || is(${wt.REDPANEL}.0)) {
			// deep crimson paint over wood: a soft sheen, the grain just showing
			float grain = vnoise3(vec3(p.x * 40.0, p.y * 2.0, p.z * 40.0));
			base = vec3(0.30, 0.022, 0.026) * (0.88 + 0.2 * grain);
			if (is(${wt.REDPANEL}.0)) base *= 0.55;
			gloss = 0.62;
		} else if (is(${wt.DARKWOOD}.0)) {
			float grain = vnoise3(vec3(p.x * 3.0, p.y * 45.0, p.z * 3.0));
			base = mix(vec3(0.030, 0.019, 0.014), vec3(0.062, 0.040, 0.028), grain);
			gloss = 0.35;
		} else if (is(${wt.BRASS}.0)) {
			base = vec3(0.60, 0.44, 0.17) * (0.85 + 0.25 * vnoise3(p * 90.0));
			gloss = 0.78;
		} else if (is(${wt.KEYHOLE}.0)) {
			base = vec3(0.004);
		} else if (is(${wt.BRACT}.0)) {
			float white = step(1.5, v_uv.x);
			base = mix(vec3(0.62, 0.03, 0.22), vec3(0.86, 0.80, 0.80), white) * (0.8 + 0.3 * hash13(floor(p * 30.0)));
			sss = 0.5;
		} else if (is(${wt.WATER}.0)) {
			base = vec3(0.012, 0.018, 0.014);
			gloss = 1.0;
		} else if (is(${wt.PAD}.0)) {
			vec4 tx = texture2D(padTex, v_uv);
			if (tx.a < 0.5) discard;
			base = tx.rgb * tx.rgb * (0.8 + 0.35 * vnoise3(vec3(p.xz * 1.3, 2.0)));
			gloss = 0.55;
		} else if (is(${wt.PETAL}.0)) {
			vec4 tx = texture2D(petalTex, v_uv);
			if (tx.a < 0.45) discard;
			base = tx.rgb * tx.rgb;
			sss = 0.6;
			gloss = 0.25;
		} else if (is(${wt.STAMEN}.0)) {
			base = vec3(0.95, 0.66, 0.12);
			gloss = 0.2;
		} else if (is(${wt.MARBLE}.0)) {
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
			float foot = 1.0 - smoothstep(${F(u0.plinth)}, ${F(u0.plinth+.7)}, p.y);
			base = mix(base, base * vec3(0.55, 0.62, 0.48), foot * smoothstep(0.4, 0.7, fbm3(p * 6.0)));
			sss = 0.06;
			gloss = 0.14;
		} else if (is(${wt.WOOD}.0)) {
			float g = vnoise3(vec3(p.x * 2.0, p.y * 30.0, p.z * 2.0));
			base = mix(vec3(0.26, 0.15, 0.08), vec3(0.42, 0.27, 0.15), g) * (0.85 + 0.2 * vnoise3(p * 5.0));
			gloss = 0.2;
		} else if (is(${wt.GESSO}.0)) {
			base = vec3(0.86, 0.83, 0.76) * (0.95 + 0.08 * vnoise3(p * 30.0));
		} else if (is(${wt.PAINT}.0)) {
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
		} else if (is(${wt.POT}.0)) {
			base = vec3(0.025, 0.025, 0.028);
			gloss = 0.85;
		} else if (is(${wt.SOIL}.0)) {
			base = vec3(0.10, 0.07, 0.05) * (0.7 + 0.5 * vnoise3(p * 40.0));
		} else if (is(${wt.SHADE}.0)) {
			base = vec3(0.03);
			gloss = 0.6;
		} else if (is(${wt.FLAME}.0)) {
			float fl = 0.85 + 0.15 * sin(time * 9.0 + p.x * 3.0) * sin(time * 5.3 + 1.0);
			gl_FragColor = vec4(sqrt(vec3(1.0, 0.62, 0.28) * 4.0 * fl), 1.0);
			return;
		} else if (is(${wt.BULB}.0)) {
			vec3 glow = mix(vec3(0.75, 0.70, 0.62) * 0.35, vec3(1.0, 0.75, 0.45) * 3.5, night);
			gl_FragColor = vec4(sqrt(glow), 1.0);
			return;
		} else if (is(${wt.JAR}.0)) {
			base = mix(vec3(0.55, 0.42, 0.25), vec3(0.75, 0.70, 0.62), hash13(floor(p * 3.0)));
			gloss = 0.7;
		} else if (is(${wt.BRUSH}.0)) {
			base = mix(vec3(0.42, 0.10, 0.06), vec3(0.75, 0.62, 0.38), step(${F(.86+.24)}, p.y));
			gloss = 0.5;
		} else if (is(${wt.CLOTH}.0)) {
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
		if (is(${wt.POT}.0) || is(${wt.STEEL}.0) || is(${wt.SHADE}.0) || is(${wt.JAR}.0)) {
			col += env * (0.04 + 0.6 * fres) * gloss * 1.2;
		}
		if (is(${wt.BRASS}.0)) {
			col = base * light * 0.35 + spec * base * 2.5 + env * base * 1.6;
		}
		if (is(${wt.REDDOOR}.0) || is(${wt.REDPANEL}.0) || is(${wt.WMARBLE}.0)) {
			col += env * (0.03 + 0.5 * fres) * gloss;
		}

		col = studioAir(col, pw, v_eye);

		float alpha = 1.0;
		if (is(${wt.FLOOR}.0)) {
			// worn stone: no mirror, just a faint sheen of the room at grazing angles
			float cosV = clamp(V.y, 0.0, 1.0);
			alpha = 1.0 - 0.1 * pow(1.0 - cosV, 4.0) * mirrorOn;
			if (reflOn > 0.5 && mirrorOn > 0.5) {
				vec3 rc = texture2D(reflTex, clamp(gl_FragCoord.xy / reflSize, vec2(0.001), vec2(0.999))).rgb;
				col = mix(rc, col, alpha);
				alpha = 1.0;
			}
		}
		if (is(${wt.WATER}.0)) {
			// still, dark water: almost a mirror, the sky's light on it, a
			// very slow breath of ripples
			// the moving surface: its slope from the swell and the rings
			float e = ${F(Jl)};
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
	}`,li={tex:null,dummy:null};function K8(t){if(li.tex)return;let e=typeof navigator!="undefined"&&/Mobi|Android|iPhone|iPad/.test(navigator.userAgent),o=Math.min(e?1024:2048,t.limits.maxTextureSize),r=t.texture({width:o,height:o,min:"linear",mag:"linear",wrap:"clamp"}),n=t.framebuffer({color:r,depth:!1});t({vert:`
		precision highp float;
		attribute vec2 pos;
		varying vec2 uv;
		void main() { uv = pos * 0.5 + 0.5; gl_Position = vec4(pos, 0.0, 1.0); }`,frag:`
		precision highp float;
		varying vec2 uv;
		uniform float night;
		${Qh("bake")}
		void main() {
			vec2 qs = vec2(${F(In.sun[0])}, ${F(In.sun[1])}) + uv * vec2(${F(In.sun[2])}, ${F(In.sun[3])});
			vec2 qm = vec2(${F(In.moon[0])}, ${F(In.moon[1])}) + uv * vec2(${F(In.moon[2])}, ${F(In.moon[3])});
			gl_FragColor = vec4(studioExit(vec3(qs.x, ${F(ao)}, qs.y), STUDIO_SUN_D), studioExit(vec3(qm.x, ${F(ao)}, qm.y), STUDIO_MOON_D));
		}`,attributes:{pos:[-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]},uniforms:{night:0},count:6,depth:{enable:!1},framebuffer:n})(),li.tex=r}function Z8(t){return li.tex?li.tex:(li.dummy||(li.dummy=t.texture({width:1,height:1,data:[0,0,0,0]})),li.dummy)}zn.exports=function(t){K8(t);let e=P8();I8(e),q8(e),D8(e),N8(e),O8(e);let o={enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"zero"}},r=performance.now(),n={t:0},a=0,s=t._gl,i=!!(s&&s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS)>0),c=ot=>i?ot:`#define NO_SIM
`+ot,f=(()=>{let ot=Kh,gt=Zh,tt=new Uint8Array(ot*gt*4);for(let Zt=0;Zt<ot*gt;Zt++)tt[Zt*4]=128,tt[Zt*4+2]=128;let pe=()=>t.framebuffer({color:t.texture({width:ot,height:gt,data:tt,min:"nearest",mag:"nearest",wrap:"clamp"}),depth:!1,stencil:!1}),ge=[pe(),pe()],kt=0,Jt=new Uint8Array(ot*gt*4);for(let Zt=0;Zt<gt;Zt++)for(let Mo=0;Mo<ot;Mo++){let xo=ht.x0+(Mo+.5)*Jl,Po=ht.z0+(Zt+.5)*Jg,co=Math.abs(xo-u0.x)<.43&&Math.abs(Po-u0.z)<.43,So=0;for(let Fe of Dd)So=Math.max(So,1-Math.min(1,Math.max(0,(Math.hypot(xo-Fe[0],Po-Fe[1])-Fe[2]*.7)/(Fe[2]*.3))));let no=(Zt*ot+Mo)*4;Jt[no]=co?0:255,Jt[no+1]=Math.round(So*255),Jt[no+3]=255}let Ye=t.texture({width:ot,height:gt,data:Jt,min:"nearest",mag:"nearest",wrap:"clamp"}),oo=16,ze=[];for(let Zt=0;Zt<oo;Zt++)ze.push([0,0,0,.04]);let Ue={prev:t.prop("prev"),mask:Ye};for(let Zt=0;Zt<oo;Zt++)Ue["src["+Zt+"]"]=(Mo=>()=>ze[Mo])(Zt);let $o=Math.pow(.36*(1/60)/Jl,2),W=t({vert:"precision highp float; attribute vec2 position; varying vec2 uv; void main() { uv = position * 0.5 + 0.5; gl_Position = vec4(position, 0.0, 1.0); }",frag:`
			precision highp float;
			uniform highp sampler2D prev, mask;
			uniform vec4 src[${oo}];
			varying vec2 uv;
			${t5}
			void main() {
				vec2 px = 1.0 / vec2(${ot}.0, ${gt}.0);
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
				float hn = h + (h - hp) * damp + ${F($o)} * lap;
				hn *= 0.9993;
				// whatever touched the water this moment
				vec2 p = vec2(${F(ht.x0+he[0])}, ${F(ht.z0+he[2])}) + uv * vec2(${F(ht.x1-ht.x0)}, ${F(ht.z1-ht.z0)});
				for (int i = 0; i < ${oo}; i++) {
					vec4 s = src[i];
					if (s.z == 0.0) continue;
					vec2 dd = p - s.xy;
					hn += s.z * exp(-dot(dd, dd) / (s.w * s.w));
				}
				gl_FragColor = vec4(simEnc(clamp(hn, -1.0, 1.0)), simEnc(h));
			}`,attributes:{position:[-1,-1,1,-1,-1,1,1,1]},primitive:"triangle strip",count:4,framebuffer:t.prop("out"),uniforms:Ue,depth:{enable:!1,mask:!1},blend:{enable:!1},cull:{enable:!1},viewport:{x:0,y:0,width:ot,height:gt}}),pt=[],Wt=0,ne=0;return{tex:()=>ge[kt].color[0],drop(Zt,Mo,xo,Po){pt.push([Zt,Mo,Wt,xo,0,Po||.035]),typeof window!="undefined"&&window.__dropLog&&window.__dropLog.push([Zt,Mo,Wt,xo])},advance(Zt,Mo){let xo=Zt-Wt-ne;if(xo<0||xo>2){Wt=Zt,ne=0;return}ne+=xo;let Po=0;for(;ne>=1/60&&Po<8;){ne-=1/60,Wt+=1/60,Po++;let co=0;for(let So=pt.length-1;So>=0;So--){let no=pt[So],Fe=Wt-no[2];if(Fe>1.4){pt.splice(So,1);continue}if(co>=oo)continue;let g0=no[3]*.05*Math.sin(Fe*2*Math.PI*2.4)*Math.exp(-Fe*3.2),zo=ze[co++];zo[0]=no[0],zo[1]=no[1],zo[2]=g0,zo[3]=no[5]}for(let So of Mo){if(co>=oo)break;let no=ze[co++];no[0]=So[0],no[1]=So[1],no[2]=So[2],no[3]=So[3]}for(;co<oo;co++)ze[co][2]=0;W({prev:ge[kt].color[0],out:ge[1-kt]}),kt=1-kt}Po===8&&(ne=0,Wt=Zt)},read(){return t.read({framebuffer:ge[kt]})}}})(),l=()=>{n.t=(performance.now()-r)/1e3,typeof window!="undefined"&&window.__studioFreeze!=null&&(n.t=window.__studioFreeze);for(let tt of Bg){let pe=C8(tt,n.t),ge=pe.ph-pe.Tf;pe.inPool&&ge>=0&&ge<.5&&!(tt.heard>n.t-1)&&(tt.heard=n.t,f.drop(pe.lx+he[0],pe.lz+he[2],1.1,.04))}let ot=n.t-Nt.sim.t;for((ot<0||ot>120)&&(ot=Math.min(Math.max(ot,0),120));ot>1e-6;){let tt=Math.min(ot,.05);Nt.sim.step(tt),ot-=tt}for(let tt of Nt.sim.events)tt[2]>a&&(a=tt[2],f.drop(tt[0]+he[0],tt[1]+he[2],tt[3]*1.3,tt[3]>=1?.07:.04));let gt=[];for(let tt of Nt.sim.fish){let pe=Math.min(1,Math.max(0,(tt.y+.15)/.09));if(pe<=0)continue;let ge=.008*pe*Math.min(1.5,tt.v/.15);gt.push([tt.x+he[0]+Math.cos(tt.th)*.02,tt.z+he[2]+Math.sin(tt.th)*.02,ge,.045]),gt.push([tt.x+he[0]-Math.cos(tt.th)*.14,tt.z+he[2]-Math.sin(tt.th)*.14,-ge,.055])}f.advance(n.t,gt)},v={stime:()=>n.t,simTex:()=>f.tex()};typeof location!="undefined"&&/tourdebug/.test(location.search)&&(window.__studioClock=n,window.__pondSim=f);let d=t.texture({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"}),p=d,u=[4,4],h=0,g=t({}),m=()=>g(ot=>{if(b){b=!1;return}let gt=ot.viewportWidth,tt=ot.viewportHeight;d.width!==gt||d.height!==tt?d({copy:!0,width:gt,height:tt,min:"linear",mag:"linear",wrap:"clamp"}):d.subimage({copy:!0,width:gt,height:tt}),p=d,u[0]=gt,u[1]=tt,h=1}),x=t.texture({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"}),y=t.framebuffer({color:x,depth:!0}),_=t({framebuffer:y}),M=t.texture({width:1,height:1,data:[0,0,0,255]}),b=!1,S=0,z=!1,k=(ot,gt)=>g(tt=>{let pe=tt.viewportWidth,ge=tt.viewportHeight,kt=Math.max(2,Math.round(pe/2)),Jt=Math.max(2,Math.round(ge/2)),Ye=!z;if((y.width!==kt||y.height!==Jt)&&(y.resize(kt,Jt),Ye=!0),u[0]=pe,u[1]=ge,b=!0,h=1,!Ye&&++S%gt!==0){p=x;return}p=M,_(()=>{t.clear({color:[0,0,0,1],depth:1}),ot()}),p=x,z=!0}),C=fr(t,"res/pond/lilypad.webp"),R=fr(t,"res/pond/petals.webp"),U=fr(t,"res/studio/rock_col.webp",{wrap:"repeat"}),P=fr(t,"res/studio/rock_nrm.webp",{wrap:"repeat"}),q=fr(t,"res/studio/oldstone_col.webp",{wrap:"repeat"}),at=fr(t,"res/studio/oldstone_nrm.webp",{wrap:"repeat"}),St=fr(t,"res/studio/floor_col.webp",{wrap:"repeat"}),yt=fr(t,"res/studio/floor_nrm.webp",{wrap:"repeat"}),mt=Object.assign({padTex:()=>C.tex,petalTex:()=>R.tex,reflTex:()=>p,reflSize:()=>u,reflOn:()=>h,rockCol:()=>U.tex,rockNrm:()=>P.tex,oldCol:()=>q.tex,oldNrm:()=>at.tex,floorCol:()=>St.tex,floorNrm:()=>yt.tex},v),zt=(ot,gt)=>t({vert:c(Vg),frag:Y8,attributes:{position:ot.pos,normal:ot.nrm,kind:ot.kind,uv:ot.uv,anchor:ot.anchor&&ot.anchor.length?ot.anchor:new Float32Array(ot.pos.length/3*4)},elements:new Uint32Array(ot.idx),count:gt||ot.idx.length,uniforms:mt,cull:{enable:!1},blend:o}),It=zt(e),se=null;fetch(u0.file).then(ot=>{if(!ot.ok)throw new Error("Could not load "+u0.file);return ot.arrayBuffer()}).then(ot=>{let gt=V8(ot),tt={pos:[],nrm:[],kind:[],uv:[],anchor:null,idx:[]},pe=u0.height,ge=Math.cos(u0.yaw),kt=Math.sin(u0.yaw);for(let Jt=0;Jt<gt.nV;Jt++){let Ye=(gt.mn[0]+gt.pos[Jt*3]/65535*gt.sz[0])*pe,oo=(gt.mn[1]+gt.pos[Jt*3+1]/65535*gt.sz[1])*pe,ze=(gt.mn[2]+gt.pos[Jt*3+2]/65535*gt.sz[2])*pe;tt.pos.push(u0.x+ge*Ye+kt*ze+he[0],u0.plinth+oo+he[1],u0.z-kt*Ye+ge*ze+he[2]);let Ue=gt.nrm[Jt*3]/127,$o=gt.nrm[Jt*3+1]/127,W=gt.nrm[Jt*3+2]/127;tt.nrm.push(ge*Ue+kt*W,$o,-kt*Ue+ge*W),tt.kind.push(wt.MARBLE),tt.uv.push(0,0)}for(let Jt=0;Jt<gt.nI;Jt++)tt.idx.push(gt.idx[Jt]);se=zt(tt)}).catch(ot=>console.error(ot));let Ee=fr(t,"res/tree/leaves.webp"),Qe=F8(),me=t({vert:c(`
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
		${Br}
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
		}`,attributes:{position:Qe.pos,normal:Qe.nrm,uv:Qe.uv,shade:Qe.shade,flower:Qe.flower},elements:new Uint32Array(Qe.idx),uniforms:{tex:Ee.tex},cull:{enable:!1}}),qe=fr(t,"res/studio/plants.webp"),Ge=fr(t,"res/studio/vleaves.webp"),Q=B8(),j=ot=>t({vert:c(`
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
		${Br}
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
		}`,attributes:{position:ot.pos,normal:ot.nrm,uv:ot.uv,info:ot.info},elements:new Uint32Array(ot.idx),uniforms:{tex:qe.tex,tex2:Ge.tex},cull:{enable:!1}}),ft=j(Q.walls),xt=E8(),Qt=t({vert:c(`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		uniform float time;
		attribute vec3 position, normal;
		attribute vec2 uv;
		attribute float sw;
		varying vec3 v_pos, v_nrm, v_eye;
		varying vec2 v_uv;
		void main() {
			// a slow flow in the still air: waves running down the fall, the
			// hem lifting and settling, never in step round the drum
			vec2 c = position.xz - vec2(${F(to.cx+he[0])}, ${F(to.cz+he[2])});
			float a = atan(c.x, c.y);
			vec2 out2 = normalize(c);
			float y = position.y;
			float w = sin(time * 0.55 + a * 2.3 - y * 0.9) * 0.6 + sin(time * 0.93 + a * 5.1 + y * 1.7) * 0.3 + sin(time * 0.31 - a * 1.3) * 0.4;
			float side = sin(time * 0.7 + a * 3.7 - y * 1.3);
			vec3 p0 = position + vec3(out2.x, 0.0, out2.y) * w * 0.07 * sw + vec3(-out2.y, 0.0, out2.x) * side * 0.035 * sw;
			v_pos = p0; v_nrm = normalize(normal + vec3(out2.x, 0.0, out2.y) * side * 0.25 * sw); v_uv = uv;
			vec3 t = view[3].xyz;
			v_eye = -vec3(dot(view[0].xyz, t), dot(view[1].xyz, t), dot(view[2].xyz, t));
			v_eye.y *= yScale;
			vec3 p = p0; p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`),frag:`
		precision highp float;
		uniform float night, time;
		varying vec3 v_pos, v_nrm, v_eye;
		varying vec2 v_uv;
		${Br}
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
			float sheer = 0.5 + 0.16 * streak + 0.08 * threads;
			// edge on, the net closes up into solid colour
			float a = clamp(sheer + (1.0 - sheer) * pow(1.0 - cosV, 2.6) * 0.9, 0.0, 0.9);
			vec3 base = vec3(0.2, 0.008, 0.036) * (0.8 + 0.4 * streak);
			vec3 spec; float sv;
			vec3 light = studioLight(v_pos, N, V, 0.35, spec, sv);
			float tr = max(dot(-N, STUDIO_SUN), 0.0) * sv * (1.0 - night * 0.6);
			float sheen = pow(1.0 - cosV, 3.0);
			// (a little of the room's own dim light caught in the net, so it reads even in the shade)
			vec3 col = base * (light + vec3(0.6, 0.5, 0.48)) * (1.0 + 1.6 * sheen) + vec3(0.3, 0.012, 0.025) * tr * 0.45 + spec * 0.03;
			col = studioAir(col, v_pos, v_eye);
			gl_FragColor = vec4(sqrt(max(col, 0.0)) * a, a);
		}`,attributes:{position:xt.pos,normal:xt.nrm,uv:xt.uv,sw:xt.sw},elements:new Uint32Array(xt.idx),cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",srcAlpha:"one",dstRGB:"one minus src alpha",dstAlpha:"one minus src alpha"}}}),ce=fr(t,"res/studio/rose_col.webp"),Kt=null;fetch("res/studio/rose.bin").then(ot=>{if(!ot.ok)throw new Error("Could not load res/studio/rose.bin");return ot.arrayBuffer()}).then(ot=>{let gt=new DataView(ot).getUint32(4,!0),tt=new Float32Array(ot,8,gt*8),pe=new Float32Array(Q.roses.length*gt*3),ge=new Float32Array(pe.length),kt=new Float32Array(Q.roses.length*gt*2),Jt=0;for(let Ye of Q.roses){let oo=Ye.f,ze=Math.abs(oo[1])>.9?[1,0,0]:[0,1,0],Ue=[ze[1]*oo[2]-ze[2]*oo[1],ze[2]*oo[0]-ze[0]*oo[2],ze[0]*oo[1]-ze[1]*oo[0]],$o=Math.hypot(...Ue),W=Ue.map(xo=>xo/$o),pt=[oo[1]*W[2]-oo[2]*W[1],oo[2]*W[0]-oo[0]*W[2],oo[0]*W[1]-oo[1]*W[0]],Wt=Math.cos(Ye.spin),ne=Math.sin(Ye.spin),Zt=W.map((xo,Po)=>xo*Wt+pt[Po]*ne),Mo=pt.map((xo,Po)=>xo*Wt-W[Po]*ne);for(let xo=0;xo<gt;xo++){let Po=tt[xo*8],co=tt[xo*8+1],So=tt[xo*8+2],no=tt[xo*8+3],Fe=tt[xo*8+4],g0=tt[xo*8+5];for(let zo=0;zo<3;zo++)pe[Jt*3+zo]=Ye.at[zo]+he[zo]+(Zt[zo]*Po+Mo[zo]*co+oo[zo]*So)*Ye.size,ge[Jt*3+zo]=Zt[zo]*no+Mo[zo]*Fe+oo[zo]*g0;kt[Jt*2]=tt[xo*8+6],kt[Jt*2+1]=tt[xo*8+7],Jt++}}Kt=t({vert:c(`
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
				${Br}
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
				}`,attributes:{position:pe,normal:ge,uv:kt},count:Jt,uniforms:{tex:ce.tex},cull:{enable:!1}})}).catch(ot=>console.error(ot));let qt=j(Q.ground);typeof location!="undefined"&&/tourdebug/.test(location.search)&&console.log("studio greenery: ivy verts",Q.walls.pos.length/3,"ground verts",Q.ground.pos.length/3);let rt=(()=>{let ot=[],gt=[];for(let kt=0;kt<=14;kt++)for(let Jt=0;Jt<=6*2;Jt++)ot.push([kt/14,Jt/6-1]);let ge=6*2+1;for(let kt=0;kt<14;kt++)for(let Jt=0;Jt<6*2;Jt++){let Ye=kt*ge+Jt;gt.push([Ye,Ye+ge,Ye+ge+1],[Ye,Ye+ge+1,Ye+1])}return{uvw:ot,idx:gt}})(),Ct=t({vert:c(`
		precision highp float;
		uniform mat4 proj, view, gModel;
		uniform float yScale, gFloat, gSize, gFlex, gFlutter, gAng, time;
		uniform vec3 gPos;
		attribute vec2 uvw;
		varying vec3 v_pos, v_nrm, v_eye;
		varying vec2 v_uv;
		${Ha}
		// the bract at (u, v): u 0 (where it was joined) .. 1 (its tip),
		// v -1 .. 1 across. x along its length, y out of its face, z across
		vec3 shape(float u, float v) {
			float L = gSize;
			// an ovate heart: rounded lobes near the base, widest past the
			// middle, drawn to a soft point
			float hw = L * 0.36 * pow(max(sin(3.14159 * pow(u, 0.72)), 0.0), 0.8) * (1.0 + 0.18 * (1.0 - u) * (1.0 - u));
			float x = (u - 0.38) * L;
			float z = v * hw;
			// cupped along its middle, the tip curling back, the edge rippling
			float y = abs(v) * hw * 0.38 + v * v * hw * 0.12 - 0.1 * u * u * L;
			y += sin(u * 13.0 + (v > 0.0 ? 0.0 : 1.9)) * 0.018 * L * v * v * v * v;
			// the air bending it: the whole blade arching, and a ripple
			// running along it from the base to the tip
			y += gFlex * L * (0.45 * u * u - 0.25 * v * v);
			y += gFlutter * L * 0.16 * u * sin(time * 17.0 - u * 6.0 + v * 1.3);
			z += gFlutter * L * 0.05 * u * sin(time * 11.0 - u * 4.0);
			return vec3(x, y, z);
		}
		mat3 rotY(float t) { float c = cos(t), s = sin(t); return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c); }
		void main() {
			float u = uvw.x, v = uvw.y;
			vec3 p0 = shape(u, v);
			vec3 du = shape(min(u + 0.02, 1.0), v) - shape(max(u - 0.02, 0.0), v);
			vec3 dv = shape(u, min(v + 0.05, 1.0)) - shape(u, max(v - 0.05, -1.0));
			vec3 n0 = normalize(cross(dv, du));
			vec3 q, n;
			if (gFloat > 0.5) {
				// lying on the water, turning slowly, lifted and tilted by the swell
				vec3 pos = gPos;
				float h0 = poolHeight(pos.xz);
				vec2 grad = vec2(poolHeight(pos.xz + vec2(0.05, 0.0)) - h0, poolHeight(pos.xz + vec2(0.0, 0.05)) - h0) / 0.05;
				pos.y = 0.018 + h0 * 1.4;
				mat3 R = rotY(gAng);
				vec3 l = R * vec3(p0.x, p0.y * 0.6, p0.z);
				l.y += dot(l.xz, grad) * 1.4;
				q = pos + l;
				n = normalize(R * n0 + vec3(-grad.x, 0.0, -grad.y));
			} else {
				q = (gModel * vec4(p0, 1.0)).xyz;
				n = normalize(mat3(gModel) * n0);
			}
			v_pos = q; v_nrm = n; v_uv = vec2(u, v);
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
		${Br}
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			vec3 N = normalize(v_nrm);
			if (dot(N, V) < 0.0) N = -N;
			float u = v_uv.x, w = abs(v_uv.y);
			// papery magenta: deeper towards the base, the fine veins running
			// out from the midrib, the edge a shade darker
			float vein = 0.5 + 0.5 * cos((w * 7.0 + u * 2.0) * 3.14159 * 1.6);
			float mid = exp(-w * w * 120.0) * (1.0 - u);
			vec3 base = mix(vec3(0.66, 0.03, 0.24), vec3(0.42, 0.015, 0.16), (1.0 - u) * 0.6);
			base *= (0.9 + 0.12 * vein) * (1.0 - 0.18 * smoothstep(0.75, 1.0, w)) * (1.0 + 0.4 * mid * vec3(0.4, 1.0, 0.6));
			vec3 spec; float sv;
			vec3 light = studioLight(v_pos, N, V, 0.3, spec, sv);
			// thin as paper: the sun behind it sets it glowing
			float through = abs(dot(N, STUDIO_SUN)) * sv;
			// and a little light of its own, so the eye can follow it through the shade
			vec3 col = base * (light + vec3(0.2, 0.15, 0.17)) + base * vec3(1.0, 0.7, 0.8) * through * 2.0 * (1.0 - night * 0.5) + spec * 0.05;
			col = studioAir(col, v_pos, v_eye);
			gl_FragColor = vec4(sqrt(max(col, 0.0)), 1.0);
		}`,attributes:{uvw:rt.uvw},elements:rt.idx,uniforms:Object.assign({gModel:()=>zr.model,gPos:()=>{let ot=Nt.sim.crumbs[0];return[ot.x+he[0],0,ot.z+he[2]]},gAng:()=>zr.ang,gSize:()=>zr.size,gFlex:()=>zr.flex,gFlutter:()=>zr.flutter,gFloat:()=>zr.floating?1:0},v),cull:{enable:!1}}),we=(()=>{let ot={corner:[],start:[],par:[],misc:[],idx:[]};return Bg.forEach((gt,tt)=>{for(let pe of[[-1,-1],[1,-1],[1,1],[-1,1]])ot.corner.push(pe[0],pe[1]),ot.start.push(gt.start[0]+he[0],gt.start[1],gt.start[2]+he[2]),ot.par.push(gt.period,gt.offset,gt.drift[0],gt.drift[1]),ot.misc.push(gt.speed,gt.seed,gt.white);ot.idx.push(tt*4,tt*4+1,tt*4+2,tt*4,tt*4+2,tt*4+3)}),ot})(),te=t({vert:c(`
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
		${Ha}
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
			vec2 lq = land - vec2(${F(he[0])}, ${F(he[2])});
			bool inPool = lq.x > ${F(vs[0])} && lq.x < ${F(vs[2])} && lq.y > ${F(vs[1])} && lq.y < ${F(vs[3])};
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
		${Br}
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
		}`,attributes:{corner:we.corner,start:we.start,par:we.par,misc:we.misc},elements:new Uint32Array(we.idx),uniforms:v,cull:{enable:!1}}),Nt={sim:$8(),ready:!1};qn=Nt.sim,typeof location!="undefined"&&/tourdebug/.test(location.search)&&(window.__koi=Nt.sim);let $e=Object.assign({},v);ia.forEach((ot,gt)=>{$e["koiA["+gt+"]"]=()=>{let tt=Nt.sim.fish[gt];return[tt.x+he[0],tt.y,tt.z+he[2],tt.th]},$e["koiB["+gt+"]"]=()=>{let tt=Nt.sim.fish[gt];return[tt.kappa,tt.ph,tt.amp,tt.pitch]}});let E=(()=>{let gt=Math.round(96*(ht.z1-ht.z0)/(ht.x1-ht.x0)),tt=new Uint8Array(96*gt*4),pe=[-hr[0]/hr[1]*-Kl,-hr[2]/hr[1]*-Kl],ge=96/(ht.x1-ht.x0),kt=gt/(ht.z1-ht.z0);for(let Jt=0;Jt<gt;Jt++)for(let Ye=0;Ye<96;Ye++){let oo=ht.x0+(Ye+.5)/ge,ze=ht.z0+(Jt+.5)/kt,Ue=0;for(let $o of Dd){let W=Math.hypot(oo-($o[0]+pe[0]),ze-($o[1]+pe[1]));Ue=Math.max(Ue,1-Math.min(1,Math.max(0,(W-$o[2]*.82)/($o[2]*.35))))}tt[(Jt*96+Ye)*4]=Math.round(Ue*255),tt[(Jt*96+Ye)*4+3]=255}return t.texture({width:96,height:gt,data:tt,min:"linear",mag:"linear"})})(),De=`
		uniform vec4 koiA[${ia.length}], koiB[${ia.length}];
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
	`,je=`
		uniform vec4 koiA[${ia.length}], koiB[${ia.length}];
		uniform sampler2D padShadow;
		const vec3 W_SUN = vec3(${F(hr[0])}, ${F(hr[1])}, ${F(hr[2])});
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
			vec2 lp = pw.xz - vec2(${F(he[0])}, ${F(he[2])});
			// (the picture is for the bed; nearer the surface the shadow sits nearer the pad)
			vec2 back = W_SUN.xz / W_SUN.y * (pw.y - ${F(Kl)});
			vec2 uv = (lp - back - vec2(${F(ht.x0)}, ${F(ht.z0)})) / vec2(${F(ht.x1-ht.x0)}, ${F(ht.z1-ht.z0)});
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
			float e = ${F(Jl)};
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
	`,lo=(()=>{let ot=[],gt=[],tt=[],pe=[],ge=($o,W,pt,Wt,ne)=>(ot.push($o+he[0],W,pt+he[2]),gt.push(...Wt),tt.push(ne),ot.length/3-1),kt=($o,W,pt,Wt,ne,Zt,Mo)=>{let xo=ot.length/3;for(let Po=0;Po<=Wt;Po++)for(let co=0;co<=ne;co++)ge($o[0]+W[0]*Po/Wt+pt[0]*co/ne,$o[1]+W[1]*Po/Wt+pt[1]*co/ne,$o[2]+W[2]*Po/Wt+pt[2]*co/ne,Zt,Mo);for(let Po=0;Po<Wt;Po++)for(let co=0;co<ne;co++){let So=xo+Po*(ne+1)+co;pe.push(So,So+1,So+ne+2,So,So+ne+2,So+ne+1)}},{x0:Jt,x1:Ye,z0:oo,z1:ze}=ht,Ue=Kl;return kt([Jt,Ue,oo],[Ye-Jt,0,0],[0,0,ze-oo],8,22,[0,1,0],0),kt([Jt,0,oo],[0,0,ze-oo],[0,Ue,0],22,2,[1,0,0],1),kt([Ye,0,oo],[0,0,ze-oo],[0,Ue,0],22,2,[-1,0,0],1),kt([Jt,0,oo],[Ye-Jt,0,0],[0,Ue,0],8,2,[0,0,1],1),kt([Jt,0,ze],[Ye-Jt,0,0],[0,Ue,0],8,2,[0,0,-1],1),{pos:ot,nrm:gt,kd:tt,idx:pe}})(),Oo=fr(t,"res/pond/gravel.jpg",{wrap:"repeat"}),_o=Object.assign({padShadow:E,gravel:()=>Oo.tex,reflTex:()=>p,reflSize:()=>u,reflOn:()=>h},$e),Fo=t({vert:c(`
		precision highp float;
		uniform mat4 proj, view;
		attribute vec3 position, normal;
		attribute float kd;
		varying vec3 v_pos, v_nrm, v_eye;
		varying float v_kd;
		${Ha}
		${De}
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
		${Ha}
		${Br}
		${je}
		float klen(int i) {
			${ia.map((ot,gt)=>`if (i == ${gt}) return ${F(ot.len)};`).join(" ")}
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
				base = mix(base, vec3(0.10, 0.13, 0.07), smoothstep(-0.05, ${F(Kl)}, v_pos.y) * 0.75);
			}
			vec3 spec; float sv;
			vec3 light = studioLight(vec3(v_pos.x - W_SUN.x / W_SUN.y * v_pos.y, 0.02, v_pos.z - W_SUN.z / W_SUN.y * v_pos.y), N, V, 0.1, spec, sv);
			vec3 sunPart;
			vec3 lit = underSun(v_pos, N, sv, sunPart);
			// the koi's shadows, softer the higher they swim above the bed
			float sh = 0.0;
			for (int i = 0; i < ${ia.length}; i++) {
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
		}`,attributes:{position:lo.pos,normal:lo.nrm,kd:lo.kd},elements:new Uint16Array(lo.idx),uniforms:_o,cull:{enable:!1},depth:{enable:!0,mask:!1,func:"less"},blend:o}),qo=fr(t,"res/koi.webp"),s0=null,tn=null;fetch("res/koi.bin").then(ot=>{if(!ot.ok)throw new Error("Could not load res/koi.bin");return ot.arrayBuffer()}).then(ot=>{let gt=new DataView(ot),tt=gt.getUint32(4,!0),pe=gt.getUint32(8,!0),ge=gt.getFloat32(12,!0),kt=16,Jt=new Uint16Array(ot,kt,tt);kt+=tt*2;let Ye=new Int16Array(ot,kt,tt*2);kt+=tt*4;let oo=new Uint16Array(ot,kt,tt*2);kt+=tt*4;let ze=new Uint16Array(ot,kt,pe);kt+=pe*2;let Ue=new Int8Array(ot,kt,tt*3);kt+=tt*3;let $o=new Uint8Array(ot,kt,tt*2),W=ia.length,pt=new Float32Array(tt*3*W),Wt=new Float32Array(tt*3*W),ne=new Float32Array(tt*2*W),Zt=new Float32Array(tt*2*W),Mo=new Float32Array(tt*4*W);ia.forEach((co,So)=>{for(let no=0;no<tt;no++){let Fe=So*tt+no;pt[Fe*3]=Jt[no]/65535*1.2,pt[Fe*3+1]=Ye[no*2]/32767*ge,pt[Fe*3+2]=Ye[no*2+1]/32767*ge,Wt[Fe*3]=Ue[no*3]/127,Wt[Fe*3+1]=Ue[no*3+1]/127,Wt[Fe*3+2]=Ue[no*3+2]/127,ne[Fe*2]=oo[no*2]/65535,ne[Fe*2+1]=oo[no*2+1]/65535,Zt[Fe*2]=$o[no*2]/255,Zt[Fe*2+1]=$o[no*2+1]/255,Mo[Fe*4]=co.len,Mo[Fe*4+1]=co.kind,Mo[Fe*4+2]=So,Mo[Fe*4+3]=0}});let xo=[],Po=[];for(let co=0;co<W;co++)for(let So=0;So<pe;So+=3){let no=ze[So],Fe=ze[So+1],g0=ze[So+2];(Math.max($o[no*2],$o[Fe*2],$o[g0*2])>140?Po:xo).push(no+co*tt,Fe+co*tt,g0+co*tt)}tn={body:t.elements({data:new Uint32Array(xo),type:"uint32"}),fins:t.elements({data:new Uint32Array(Po),type:"uint32"})},s0=t({vert:c(`
				precision highp float;
				uniform mat4 proj, view;
				attribute vec3 loc, nrm;
				attribute vec2 uv, fin;
				attribute vec4 km;
				varying vec3 v_pos, v_nrm, v_eye;
				varying vec2 v_uv;
				varying float v_kind, v_fin, v_depth, v_seed, v_u;
				${Ha}
				${De}
				void main() {
					float len = km.x;
					int fi = int(km.z + 0.5);
					vec4 A = koiA[0], B = koiB[0];
					for (int i = 1; i < ${ia.length}; i++) if (i == fi) { A = koiA[i]; B = koiB[i]; }
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
				${Ha}
				${Br}
				${je}
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
				}`,attributes:{loc:pt,nrm:Wt,uv:ne,fin:Zt,km:Mo},elements:t.prop("els"),uniforms:Object.assign({koiTex:()=>qo.tex,padShadow:E,reflTex:()=>p,reflSize:()=>u,reflOn:()=>h},$e),cull:{enable:!1},colorMask:t.prop("color"),depth:{enable:!0,mask:t.prop("write"),func:t.prop("func")},blend:o}),Nt.ready=!0}).catch(ot=>console.error(ot));let yr=()=>{s0&&(s0({els:tn.body,color:[!1,!1,!1,!1],write:!0,func:"less"}),s0({els:tn.body,color:[!0,!0,!0,!0],write:!1,func:"lequal"}),s0({els:tn.fins,color:[!0,!0,!0,!0],write:!1,func:"less"}))},et=(()=>{let ot={cp:[],ci:[],idx:[]};for(let gt=0;gt<Ql;gt++){let tt=ot.cp.length/3,pe=5,ge=7;for(let kt=0;kt<=pe;kt++)for(let Jt=0;Jt<ge;Jt++){let Ye=kt/pe*Math.PI,oo=Jt/ge*Math.PI*2,ze=1+.35*Math.sin(oo*3+gt*1.7)*Math.sin(Ye*2+gt);ot.cp.push(Math.sin(Ye)*Math.cos(oo)*ze,Math.cos(Ye)*.6,Math.sin(Ye)*Math.sin(oo)*ze*(.8+.4*(gt*.37%1))),ot.ci.push(gt)}for(let kt=0;kt<pe;kt++)for(let Jt=0;Jt<ge;Jt++){let Ye=tt+kt*ge+Jt,oo=tt+kt*ge+(Jt+1)%ge,ze=tt+(kt+1)*ge+Jt,Ue=tt+(kt+1)*ge+(Jt+1)%ge;ot.idx.push(Ye,oo,Ue,Ye,Ue,ze)}}return ot})(),jt=Object.assign({},v);for(let ot=0;ot<Ql;ot++)jt["crumbs["+ot+"]"]=()=>{let gt=Nt.sim.crumbs[ot],tt=Nt.sim.t,pe=gt.alive&&!Nt.sim.feed.petal?Math.min(1,Math.max(0,(tt-gt.born)/.25)):0;return[gt.x+he[0],gt.z+he[2],pe,gt.seed]};let Yt=t({vert:c(`
		precision highp float;
		uniform mat4 proj, view;
		uniform vec4 crumbs[${Ql}];
		attribute vec3 cp;
		attribute float ci;
		varying vec3 v_pos, v_nrm, v_eye;
		${Ha}
		void main() {
			int k = int(ci + 0.5);
			vec4 c = crumbs[0];
			for (int i = 1; i < ${Ql}; i++) if (i == k) c = crumbs[i];
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
		${Br}
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
		}`,attributes:{cp:et.cp,ci:et.ci},elements:new Uint32Array(et.idx),uniforms:jt,cull:{enable:!1}}),Ft=G8(),Ae=t({vert:c(Vg),frag:`
		precision highp float;
		uniform float night, time;
		varying vec3 v_pos, v_nrm, v_eye;
		varying float v_kind;
		varying vec2 v_uv;
		${Br}
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			vec3 N = normalize(v_nrm);
			if (dot(N, V) < 0.0) N = -N;
			float F = 0.04 + 0.96 * pow(1.0 - max(dot(N, V), 0.0), 5.0);
			vec3 p = v_pos - vec3(${F(he[0])}, ${F(he[1])}, ${F(he[2])});
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
		}`,attributes:{position:Ft.pos,normal:Ft.nrm,kind:Ft.kind,uv:Ft.uv,anchor:Ft.anchor},uniforms:v,elements:new Uint32Array(Ft.idx),cull:{enable:!1},depth:{mask:!1},blend:o}),Xe=(()=>{let ot={pos:[],idx:[]},gt=300,tt=24,pe=12;for(let ge=0;ge<=pe;ge++){let kt=-.25*ke+ge/pe*.75*ke;for(let Jt=0;Jt<=tt;Jt++){let Ye=Jt/tt*2*ke;ot.pos.push(he[0]+Rt/2+gt*Math.cos(kt)*Math.cos(Ye),gt*Math.sin(kt),he[2]+_e/2+gt*Math.cos(kt)*Math.sin(Ye))}}for(let ge=0;ge<pe;ge++)for(let kt=0;kt<tt;kt++){let Jt=ge*(tt+1)+kt,Ye=Jt+1,oo=Jt+tt+2,ze=Jt+tt+1;ot.idx.push(Jt,Ye,oo,Jt,oo,ze)}return ot})(),We=t({vert:c(`
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
		${Br}
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
		void main() {`),attributes:{position:Xe.pos},elements:new Uint32Array(Xe.idx),cull:{enable:!1}}),Ce=typeof navigator!="undefined"&&/Mobi|Android|iPhone|iPad/.test(navigator.userAgent),eo=Ce?2600:6500,He=[];{let ot=Ba(4242),gt=(pe,ge,kt)=>{let Jt=-pe/hr[0],Ye=ge+hr[1]*Jt,oo=kt+hr[2]*Jt;return xe.c.some(ze=>{let Ue=Sa(oo-ze);return Ue!==null&&Ye>xe.sill&&Ye<Ue})},tt=0;for(;He.length<eo&&tt++<eo*60;){let pe=[.2+ot()*(Rt-.4),.1+ot()*(ao+1),.2+ot()*(_e-.4)];He.length<eo*.8&&!gt(...pe)||He.push([...pe,ot()])}}let go=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float time, night, pixelScale;
		attribute vec4 seed;
		varying float v_light, v_seed, v_spark;
		${Qh(t.limits.maxVertexTextureUnits>0?"baked":"analytic")}
		void main() {
			float s = seed.w * 6.2831;
			vec3 p = seed.xyz;
			// slow drifting and turning, a faint settling, never in step
			p += vec3(sin(time * 0.10 + s * 3.0) * 0.32 + sin(time * 0.043 + s * 7.0) * 0.2,
			          sin(time * 0.07 + s * 5.0) * 0.25 - 0.015 * time * (0.4 + seed.w),
			          cos(time * 0.085 + s * 2.0) * 0.32 + cos(time * 0.037 + s * 9.0) * 0.2);
			p.y = mod(p.y - 0.1, ${F(ao+1)}) + 0.1;
			p += vec3(${F(he[0])}, ${F(he[1])}, ${F(he[2])});
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
			float size = sharp + blur * ${Ce?"12.0":"20.0"} * (0.6 + 0.4 * seed.w);
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
		}`,attributes:{seed:He},count:eo,primitive:"points",uniforms:{pixelScale:ot=>ot.viewportHeight*.0055},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});function Ve(ot){let gt=!!(ot&&ot.reflected);gt||(m(),l()),We(),It(),gt||(Fo(),yr(),Yt()),se&&se(),me(),gt||(ft(),Kt&&Kt(),qt()),te(),zr.vis&&!(zr.floating&&Nt.sim.feed.eaten)&&Ct(),Qt(),gt||(Ae(),go())}return Ve.reflect=k,Ve};var qn=null,zr={vis:!1,model:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],ang:0,size:.09,flex:0,flutter:0,floating:!1};function Q8(t){Object.assign(zr,t)}function J8(t,e){qn&&!qn.feed.lure&&!qn.feed.petal&&qn.lure(t,e)}function tS(t,e){qn&&!qn.feed.petal&&(qn.petal(t,e),zr.floating=!0)}function eS(){qn&&qn.unpetal(),zr.floating=!1}function oS(){let t=qn&&qn.feed;return{landed:!!(t&&(t.petal||t.eaten))&&zr.floating,eaten:!!(t&&t.eaten&&zr.floating)}}function nS(t,e){if(e[1]>=-1e-4)return null;let o=-t[1]/e[1],r=t[0]+e[0]*o-he[0],n=t[2]+e[2]*o-he[2];return r<ht.x0||r>ht.x1||n<ht.z0||n>ht.z1?null:[r+he[0],n+he[2]]}function rS(t,e){qn&&qn.drop(t-he[0],e-he[2])}function aS(){return!!(qn&&qn.feed.on)}var Xg=[{from:[8,1.65,21.75],to:[8,1.7,21.2],at:[8,2.3,1],fov:52},{from:[8,1.65,21.1],to:[8,1.7,19.1],at:[8,2.4,1],fov:58},{from:[3.6,1.65,20.5],to:[4.6,1.75,18.7],at:[8.8,2.7,1.5],fov:58},{from:[8,1.45,11.2],to:[8,1.55,8.4],at:[8,2.5,.5],fov:46},{from:[8.9,3.9,11.4],to:[7.4,3.7,10.2],at:[8,-.2,7.2],fov:50,pond:!0},{from:[5.1,1.5,5.8],to:[5.7,1.7,4.6],at:[8,2.6,.8],fov:44},{from:[10.6,1.6,2.4],to:[9.7,1.7,3.6],at:[8,2.4,22],fov:60},{from:[2.6,1.5,19],to:[3.6,1.6,17.4],at:[8,6.8,8],fov:62}],Nc=11;function sS(t){let e=Xg.length,o=Math.floor(t/Nc)%e,r=t%Nc/Nc,n=r*r*(3-2*r),a=Xg[o],s=a.from.map((c,f)=>c+(a.to[f]-c)*n),i=Math.max(0,1-Math.min(r*Nc,(1-r)*Nc)/.7);return{eye:tf(s),target:tf(a.at),fov:a.fov,roll:0,fade:i,pond:!!a.pond&&i<.05,shot:Math.floor(t/Nc)}}zn.exports.previewCam=sS;zn.exports.setGuide=Q8;zn.exports.petalLure=J8;zn.exports.petalLand=tS;zn.exports.petalReset=eS;zn.exports.petalState=oS;zn.exports.STUDIO={W:Rt,L:_e,H:ao,POOL:ht,ROT:to,NICHE:io,VENUS:u0,WIN:xe,TRUSS_Z:fi,GRAVE:l0};zn.exports.poolHit=nS;zn.exports.feedAt=rS;zn.exports.feeding=aS;zn.exports.sunGLSL=Qh;zn.exports.bakedSun=Z8;zn.exports.O=he;zn.exports.SIZE={W:Rt,L:_e,H:ao,RIDGE:ur};zn.exports.BOX=[he[0]-.8,0,he[2]-.8,he[0]+Rt+.8,ur+.5,he[2]+_e+.8];zn.exports.AIR_BOX=[he[0],0,he[2],he[0]+Rt,ur,he[2]+_e]});var o1=Tt((PA,s5)=>{"use strict";var{A:En}=Gr(),{C:K0}=Nn(),{DOOR:Rc}=is(),xn=ds(),Cc=Oc(),n5=K0.hallEnd+.35,r5={arch:[13.6,0,En.zc-En.arch.r-.3,14.4,En.arch.spring+En.arch.r+.3,En.zc+En.arch.r+.3],mouth:[13.3,0,K0.z0-.3,14.3,8.2,K0.z1+.3],stair:[-.5,0,xn.SURR.z0-.2,.5,xn.SURR.top+.3,xn.SURR.z1+.2],door:[Rc.x0-.4,0,-.5,Rc.x1+.4,Rc.top+.4,.5],windows:[15.6,.4,K0.z1-.2,36.9,6.4,K0.z1+.9],farDoor:[K0.x1-.2,0,K0.zc-Rc.r-.4,K0.x1+.9,Rc.top+.4,K0.zc+Rc.r+.4]},ja={court:[En.x0-.4,0,En.z0-.3,En.x1+.3,En.domeTop+.5,En.z1+.3],stair:[xn.C.x-xn.R-2.6,0,xn.C.z-xn.R-1.5,.5,15.6,xn.C.z+xn.R+1.5],street:[-60,-1,-140,74,60,.6],garden:[10,-1,K0.z1,46,60,K0.z1+110],florence:[K0.x1,-1,K0.zc-30,K0.x1+80,60,K0.zc+30],studio:Cc.BOX},iS=[[0,0,0,14,0,n5],[13.6,0,K0.z0,K0.x1+.4,0,K0.z1],[En.x0-.4,0,En.z0,En.x1,0,En.z1],[xn.C.x-xn.R-2.6,0,xn.C.z-xn.R,.4,0,xn.C.z+xn.R],[Cc.BOX[0],0,Cc.BOX[2],Cc.BOX[3],0,Cc.BOX[5]]],cS={hall:{court:["arch"],stair:["stair"],street:["door"],garden:["mouth","windows"],florence:["mouth","farDoor"]},wing:{court:["mouth","arch"],stair:["mouth","stair"],street:["mouth","door"],garden:["windows"],florence:["farDoor"]},court:{stair:["arch","stair"],street:["arch","door"],garden:["arch","mouth","windows"],florence:["arch","mouth","farDoor"]},stair:{court:["stair","arch"],street:["stair","door"],garden:["stair","mouth","windows"],florence:["stair","mouth","farDoor"]}},rf=new Float64Array(24),ca=[7,2,2],a5=0,Wa="out",e1=!0;try{/[?&]nocull\b/.test(location.search)&&(e1=!1)}catch(t){}var of={court:!0,stair:!0,street:!0,garden:!0,florence:!0,studio:!1},nf={court:!0,stair:!0,street:!0,garden:!0,florence:!0,studio:!1},e5=!0;function lS(t){let e=i=>[t[i],t[4+i],t[8+i],t[12+i]],o=e(0),r=e(1),n=e(2),a=e(3),s=(i,c,f,l)=>{for(let v=0;v<4;v++)rf[i*4+v]=c[v]+f*l[v]};s(0,a,1,o),s(1,a,-1,o),s(2,a,1,r),s(3,a,-1,r),s(4,a,1,n),s(5,a,-1,n)}function ms(t,e){if(!e1)return!0;let o=e?-t[4]:t[1],r=e?-t[1]:t[4];for(let n=0;n<6;n++){let a=rf[n*4],s=rf[n*4+1],i=rf[n*4+2],c=rf[n*4+3],f=a>0?t[3]:t[0],l=s>0?r:o,v=i>0?t[5]:t[2];if(a*f+s*l+i*v+c<0)return!1}return!0}var Gd=(t,e)=>ca[0]>t[0]-e&&ca[0]<t[3]+e&&ca[2]>t[2]-e&&ca[2]<t[5]+e;function fS(t){if(Gd(t,.6))return null;let e=1/0,o=-1/0;for(let r=0;r<4;r++){let n=(r&1?t[3]:t[0])-ca[0],a=(r&2?t[5]:t[2])-ca[2],s=Math.atan2(n,a)-a5;s-=Math.round(s/(2*Math.PI))*2*Math.PI,e=Math.min(e,s),o=Math.max(o,s)}return o-e>Math.PI?null:[e,o]}function o5(t,e,o){let r=-Math.PI,n=Math.PI,a=s=>{let i=fS(s);return i?(r=Math.max(r,i[0]-.03),n=Math.min(n,i[1]+.03),r<=n):!0};for(let s of t){let i=r5[s];if(!Gd(i,.6)&&(!ms(i,o)||!a(i)))return!1}return ms(e,o)&&a(e)}function hS(){let t=ca[0],e=ca[2],o=Cc.BOX;return t>o[0]&&t<o[3]&&e>o[2]&&e<o[5]?"studio":t<0&&e>xn.C.z-xn.R-1.5&&t>xn.C.x-xn.R-2.6?"stair":t>14.1&&e>En.z0-.3&&e<En.z1+.3&&t<En.x1+.3?"court":t>13.9&&e>K0.z0-.4&&e<K0.z1+.1&&t<K0.x1+.3?"wing":t>=0&&t<=14.1&&e>.3&&e<n5?"hall":"out"}var uS={PORTAL:r5,ROOM:ja,update(t,e,o){let r=new Array(16);for(let n=0;n<4;n++)for(let a=0;a<4;a++){let s=0;for(let i=0;i<4;i++)s+=e[i*4+a]*t[n*4+i];r[n*4+a]=s}lS(r),ca[0]=o[0],ca[1]=o[1],ca[2]=o[2],a5=Math.atan2(-t[2],-t[10]),Wa=hS();for(let n in ja){if(n==="studio"||Wa==="studio"){of[n]=nf[n]=n==="studio"&&Wa==="studio";continue}if(!e1||Wa==="out"||Wa===n||Gd(ja[n],.3))of[n]=ms(ja[n],!1)||Wa===n,nf[n]=ms(ja[n],!0)||Wa===n;else{let a=cS[Wa][n];of[n]=a?o5(a,ja[n],!1):ms(ja[n],!1),nf[n]=a?o5(a,ja[n],!0):ms(ja[n],!0)}}e5=!e1||iS.some(n=>ms(n,!1))},get zone(){return Wa},room(t,e){return e?nf[t]:of[t]},box(t,e,o){return o&&!(e?nf[o]:of[o])?!1:ms(t,e)},get floor(){return e5}};s5.exports=uS});var c5=Tt((IA,i5)=>{"use strict";var dS=zd(),pS=o1();function vS(t){let e=new DataView(t);if(String.fromCharCode(e.getUint8(0),e.getUint8(1),e.getUint8(2),e.getUint8(3))!=="STAT")throw new Error("Not a statue file");let r=e.getUint32(4,!0),n=e.getUint32(8,!0),a=[],s=[];for(let v=0;v<3;v++)a.push(e.getFloat32(12+v*4,!0)),s.push(e.getFloat32(24+v*4,!0));let i=36,c=new Uint16Array(t,i,r*3);i+=r*6;let f=new Uint16Array(t,i,n);i+=n*2;let l=new Int8Array(t,i,r*3);return{nV:r,nI:n,mn:a,sz:s,pos:c,idx:f,nrm:l}}i5.exports=(t,e)=>{let o=[],r=[],n=[],a=[],s=null,i=e.statues.length,c=[],f=(v,d)=>{let p=o.length/3,u=d.height*.75,h=d.base!==void 0?d.base:e.pedestalTop;c.push({offset:a.length,count:v.nI,box:[d.x-u,h-.1,d.z-u,d.x+u,h+d.height+.2,d.z+u]});let g=d.height,m=Math.cos(d.yaw),x=Math.sin(d.yaw),y=d.base!==void 0?d.base:e.pedestalTop;for(let _=0;_<v.nV;_++){let M=(v.mn[0]+v.pos[_*3]/65535*v.sz[0])*g,b=(v.mn[1]+v.pos[_*3+1]/65535*v.sz[1])*g,S=(v.mn[2]+v.pos[_*3+2]/65535*v.sz[2])*g;o.push(d.x+m*M+x*S,y+b,d.z-x*M+m*S);let z=v.nrm[_*3]/127,k=v.nrm[_*3+1]/127,C=v.nrm[_*3+2]/127;r.push(m*z+x*C,k,-x*z+m*C),n.push(d.mat||1,0,0)}for(let _=0;_<v.nI;_++)a.push(p+v.idx[_])},l=()=>{a.length!==0&&(s=dS(t,{position:o,normal:r,mat:n,elements:a,lights:e.lights,get viewer(){return e.viewer}},!1,!0))};return e.statues.forEach(v=>{fetch("res/"+v.file).then(d=>{if(!d.ok)throw new Error("Could not load "+v.file);return d.arrayBuffer()}).then(d=>f(vS(d),v)).catch(d=>console.error(d)).then(()=>{--i===0&&l()})}),function(v){if(!s)return;let d=!!(v&&v.reflected),p=c.filter(u=>pS.box(u.box,d));p.length&&s(p)}}});var y5=Tt((qA,Ud)=>{"use strict";var mS=ti(),ln=1.29032,ui=[9.2968,2,5.9],gS=[[.767398,.00185,-.10827],[.010515,.769952,.087681],[-.107774,.08829,-.762374]],n1=2147.64,l5=725,f5=1288,h5=1450,u5=2576,dr=-5.197,pi=3.865,gs=10.135,vi=-14.679,af=-30.229,sf=7.232,d5=-45.713,$c=17.1*ln,di=16.6*ln,cf=16.6*ln,p5=[6.9,17.1],r1=[2.95,16.6],xS=1.6,yS=0,bS=1,v5=2,Hd=3,m5=4,g5=5,wS=6;function _S(){let t=[],e=[],o=[],r=[],n=mS.createBuilder(t,e,o,r),a=(f,l,v,d,p,u,h=1,g=1)=>{let m=[];for(let x=0;x<=h;x++){let y=[];for(let _=0;_<=g;_++){let M=[f[0]+l[0]*x/h+v[0]*_/g,f[1]+l[1]*x/h+v[1]*_/g,f[2]+l[2]*x/h+v[2]*_/g],b=u(M);y.push(n.vert(M,d,[p,b[0],b[1]]))}m.push(y)}for(let x=0;x<h;x++)for(let y=0;y<g;y++)n.tri(m[x][y],m[x+1][y],m[x][y+1]),n.tri(m[x+1][y],m[x+1][y+1],m[x][y+1])},s=f=>l=>[(ui[2]-l[2])/ln-f,l[1]/ln];a([-60,0,-.36],[130,0,0],[0,0,-140],[0,1,0],yS,f=>[f[0]/ln,f[2]/ln],13,14),a([pi,0,dr],[0,0,vi-dr],[0,$c,0],[1,0,0],bS,s(8.6),6,6),a([-40,0,dr],[pi+40,0,0],[0,$c,0],[0,0,1],v5,f=>[(pi-f[0])/ln,f[1]/ln],8,4),a([-40,0,-.36],[0,0,dr+.36],[0,$c,0],[1,0,0],v5,f=>[-f[2]/ln,f[1]/ln]),a([gs,0,-80],[0,0,dr+80],[0,di,0],[-1,0,0],m5,s(8.6),12,6),a([gs,0,dr],[60,0,0],[0,di,0],[0,0,1],g5,f=>[(f[0]-gs)/ln,f[1]/ln],8,4),a([70,0,dr],[0,0,-.36-dr],[0,di,0],[-1,0,0],g5,f=>[-f[2]/ln,f[1]/ln]);let i=f=>[(f[0]-ui[0])/ln+4.18,f[1]/ln];a([-20,0,af],[sf+20,0,0],[0,cf,0],[0,0,1],Hd,i,8,6),a([sf,0,af],[0,0,d5-af],[0,cf,0],[1,0,0],Hd,s(28),4,4),a([sf,0,d5],[gs-sf,0,0],[0,di,0],[0,0,1],m5,f=>[(f[0]-ui[0])/ln,f[1]/ln],2,4),a([-20,0,vi],[0,0,af-vi],[0,cf,0],[1,0,0],Hd,s(16),4,4);let c=(f,l,v,d)=>a(f,l,v,d,wS,()=>[0,0],4,4);return c([-300,-20,-300],[600,0,0],[0,320,0],[0,0,1]),c([-300,300,-300],[600,0,0],[0,0,300],[0,-1,0]),c([-300,-20,0],[0,0,-300],[0,320,0],[1,0,0]),c([300,-20,-300],[0,0,300],[0,320,0],[-1,0,0]),{position:t,normal:e,elements:o,attr:r}}function hi(t,e,o,r){let n=t.texture({data:[[r]],...o,min:"linear",mag:"linear"});return fetch(e).then(a=>{if(!a.ok)throw new Error("Could not load "+e);return a.blob()}).then(a=>createImageBitmap(a)).then(a=>{n({data:a,...o,min:"mipmap",mipmap:"nice",mag:"linear"})}).catch(a=>console.error(a)),n}var la=t=>"vec3("+t.map(e=>e.toFixed(4)).join(", ")+")",MS=[[[-.35,0,-.35],[14.35,9.2,50]],[[-40,0,vi],[pi,$c,dr]],[[gs,0,-80],[70,di,dr]],[[-20,0,-80],[sf,cf,af]],[[-40,0,-80],[-20,cf,vi]]],SS=MS.map(t=>`if (hitBox(ro, rd, ${la(t[0])}, ${la(t[1])}, 1e4) ) return 0.0;`).join(`
		`),x5="mat3("+[0,1,2].map(t=>[0,1,2].map(e=>gS[e][t].toFixed(6)).join(", ")).join(", ")+")",kS=`
precision highp float;

uniform sampler2D photo, photoNight, photoMask, pinkTex, yellowTex, creamTex, cobbleTex;
uniform float time;
uniform float night;   // 0 by day, 1 at night

varying vec3 v_pos;
varying vec3 v_normal;
varying vec3 v_attr;
varying vec3 v_eye;

const vec3 SUN = ${la([-.25,.4,.88].map(t=>t/Math.hypot(-.25,.4,.88)))};

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
	${SS}
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
	vec3 ro = ${la(ui)};
	vec3 rd = p - ro;
	if (hitBox(ro, rd, ${la([-40,0,vi])}, ${la([pi-.02,$c,dr])}, 0.995)) return false;
	if (hitBox(ro, rd, ${la([gs+.02,0,-80])}, ${la([70,di,dr])}, 0.995)) return false;
	return true;
}

// is this point sky in the photo? (only meaningful inside the photo)
bool photoSky(vec3 p) {
	vec3 pc = ${x5} * (p - ${la(ui)});
	if (pc.z < 0.2) return false;
	vec2 uv = vec2(
		(${l5.toFixed(2)} + ${n1.toFixed(3)} * pc.x / pc.z) / ${h5.toFixed(1)},
		(${f5.toFixed(2)} - ${n1.toFixed(3)} * pc.y / pc.z) / ${u5.toFixed(1)}
	);
	if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) return false;
	return texture2D(photoMask, uv).r < 0.5;
}

// photo colour and how much to trust it (0..1)
vec4 photoAt(vec3 p, vec3 n, vec3 eye) {
	vec3 pc = ${x5} * (p - ${la(ui)});
	if (pc.z < 0.2) return vec4(0.0);
	vec2 uv = vec2(
		(${l5.toFixed(2)} + ${n1.toFixed(3)} * pc.x / pc.z) / ${h5.toFixed(1)},
		(${f5.toFixed(2)} - ${n1.toFixed(3)} * pc.y / pc.z) / ${u5.toFixed(1)}
	);
	vec2 e = min(uv, 1.0 - uv);
	float w = smoothstep(0.002, 0.02, min(e.x, e.y));
	if (w <= 0.0) return vec4(0.0);
	w *= smoothstep(0.35, 0.75, texture2D(photoMask, uv).r);
	if (w <= 0.0) return vec4(0.0);
	if (!photoSees(p)) return vec4(0.0);
	// if we see this surface much more square-on than the photo did,
	// the photo would look smeared: hand over to the painted facade
	float camCos = abs(dot(normalize(p - ${la(ui)}), n));
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
		base = texture2D(cobbleTex, fuv / ${xS.toFixed(2)}).rgb;
	} else if (kind < 2.5) {
		base = texture2D(pinkTex, vec2(fuv.x / ${p5[0].toFixed(2)}, 1.0 - fuv.y / ${p5[1].toFixed(2)})).rgb;
	} else if (kind < 3.5) {
		base = texture2D(yellowTex, vec2(fuv.x / ${r1[0].toFixed(2)}, 1.0 - fuv.y / ${r1[1].toFixed(2)})).rgb;
	} else {
		base = texture2D(creamTex, vec2(fuv.x / ${r1[0].toFixed(2)}, 1.0 - fuv.y / ${r1[1].toFixed(2)})).rgb;
	}

	// ---------- the photograph, where it can be trusted ----------
	bool projectable = kind < 0.5 || (kind > 0.5 && kind < 1.5) || (kind > 2.5 && kind < 4.5);
	if (kind < 0.5) {
		// the photo only shows ground inside the alley, or beyond its corners
		bool inAlley = v_pos.x > ${(pi-.05).toFixed(3)} && v_pos.x < ${(gs+.05).toFixed(3)};
		projectable = inAlley || v_pos.z < ${vi.toFixed(3)};
		projectable = projectable && v_pos.z < ${(dr+4.5).toFixed(3)};
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
}`,zS=`
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
}`,ES=rn();Ud.exports=t=>{let e=_S(),o={wrapS:"clamp",wrapT:"clamp",flipY:!1},r={wrapS:"mirror",wrapT:"clamp",flipY:!1},n={wrapS:"repeat",wrapT:"repeat",flipY:!1},a=hi(t,"res/street/photo.jpg",o,[190,160,120]),s=hi(t,"res/street/photo_night.jpg",o,[12,14,22]),i=hi(t,"res/street/photo_mask.png",o,[255,255,255]),c=hi(t,"res/street/facade_pink.jpg",r,[200,150,135]),f=hi(t,"res/street/facade_yellow.jpg",r,[225,180,95]),l=hi(t,"res/street/facade_cream.jpg",r,[215,200,175]),v=hi(t,"res/street/cobbles.jpg",n,[95,95,95]),d=Date.now(),p=t({frag:kS,vert:zS,attributes:{position:e.position,normal:e.normal,attr:e.attr},elements:new Uint32Array(e.elements),uniforms:{photo:a,photoMask:i,pinkTex:c,yellowTex:f,creamTex:l,cobbleTex:v,photoNight:s,night:()=>ES.night,time:()=>(Date.now()-d)/1e3}});return function(){p()}};Ud.exports.layout={MOUTH_Z:dr,PINK_X:pi,RIGHT_X:gs,PINK_H:$c,CREAM_H:di,S:ln}});var _5=Tt((DA,w5)=>{"use strict";var AS=rn().GLSL,{glassPanes:TS}=is(),b5=Nn();function LS(){let t=[],e=[],o=(r,n)=>{for(let a of r)t.push(a),e.push(n)};return o(TS(),[0,0,1]),o(b5.windowGlass(),[0,0,1]),o(b5.farDoorGlass(),[1,0,0]),{position:t,normal:e}}w5.exports=t=>{let e=LS(),o=t({frag:`
		precision highp float;
		${AS}
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
		}`,attributes:{position:e.position,normal:e.normal},count:e.position.length,cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}});return function(){o()}}});var D5=Tt((FA,Xd)=>{"use strict";var A5=rn().GLSL,NS=ti(),Bd=qr(),{wallWithHoles:OS,C:bs}=Nn(),Re=.28,it={westBack:14.4,westCol:15-Re,eastCol:37.4+Re,eastBack:41.8,south:bs.z1+.7,northCol:bs.z1+.7+16,northBack:bs.z1+.7+19,cx:(15+37.4)/2,cz:(bs.z1+.7+bs.z1+.7+16-Re)/2},o0={x0:it.westCol+Re,x1:it.eastCol-Re,z0:it.south,z1:it.northCol-Re},Dn=3.3,hf=.92,ws=5.6,M5=6,jr=11.9,ys=9.6,Io={x0:it.cx-2.9,x1:it.cx+2.9,top:14.4},h1=7,T5=4,Wd=(it.eastCol-it.westCol)/h1,RS=(it.northCol-it.south)/T5,L5=3,df=.26,yi=1.4,gi=1.1,s1=3,ka=(()=>{let t=[.3,.82,-.49],e=Math.hypot(...t);return t.map(o=>o/e)})(),be={GROUND:0,BRICK:1,STONE:2,MARBLE:3,HEDGE:4,POT:5,ROOF:6,SHUTTER:7,PANE:8,PLASTER:9,BARK:10,IRON:11,SKY:12,LEAD:13,FARBRICK:14,DARK:15,SOIL:16},za=[],N5=(t,e,o)=>[it.cx+t,e,it.cz+o],i1=N5(-5.9,0,3.4),_s=.85,xs={c:[i1[0],4.6*_s+.5,i1[2]],r:[5*_s,3.6*_s,4.5*_s]},O5=[{d:[0,4.4,0],r:[3.9,2.6,3.6],n:230},{d:[-2.7,4,-1.2],r:[2.6,2.1,2.4],n:105},{d:[2.7,4.5,-1.6],r:[2.5,2.2,2.3],n:105},{d:[.8,6.9,.8],r:[2.6,2,2.5],n:105},{d:[-1.6,6.1,2],r:[2.2,1.9,2],n:80},{d:[2.3,3.4,1.8],r:[2,1.5,1.9],n:60}].map(t=>({c:[i1[0]+t.d[0]*_s,t.d[1]*_s+.5,i1[2]+t.d[2]*_s],r:t.r.map(e=>e*_s),n:t.n}));for(let t of O5)za.push({...t,cell:0,leaf:[.5,.7,.46],bloom:[1,1,1],size:[.95,1.35],magnolia:1,shadow:1});var CS=[3.6,6.3,9];for(let t of CS){let e=8.6+t%1.7*.6;za.push({c:N5(t,e/2+.5,5.2),r:[.9,e/2,.9],cell:1,leaf:[.5,.64,.5],bloom:[1,1,1],n:180,size:[.72,.98],spindle:1,shadow:1})}var $S=[{d:[-8.4,-4],bloom:[1,.62,.78]},{d:[-3.6,-4.6],bloom:[1,.98,.94]},{d:[3.8,-4.3],bloom:[1,.98,.94]},{d:[8.5,-4],bloom:[1,.58,.72]}].map(t=>({x:it.cx+t.d[0],z:it.cz+t.d[1],bloom:t.bloom}));for(let t of $S)za.push({c:[t.x,.95,t.z],r:[1.25,.95,1.1],cell:3,leaf:[.7,.86,.58],bloom:t.bloom,n:80,size:[.55,.8],shadow:1});var Vd=[45,135,225,315].map(t=>{let e=t*Math.PI/180;return[it.cx+Math.cos(e)*2.3,it.cz+Math.sin(e)*2.3]});for(let[t,e]of Vd)za.push({c:[t,1.85,e],r:[.62,.55,.62],cell:3,leaf:[.78,.95,.55],bloom:[1.25,1,.25],n:36,size:[.32,.42],shadow:1});var R5=[];{let t=(o,r,n,a,s,i)=>{let c=Math.hypot(n-o,a-r),f=Math.floor(c/.9);for(let l=0;l<=f;l++){let v=l/f,d=o+(n-o)*v,p=r+(a-r)*v;s!==void 0&&Math.abs((n!==o?d:p)-s)<i||R5.push([d,p])}};t(o0.x0+.45,o0.z0+1.2,o0.x0+.45,o0.z1-.45,it.cz,1),t(o0.x1-.45,o0.z0+1.2,o0.x1-.45,o0.z1-.45,it.cz,1),t(o0.x0+.45,o0.z1-.45,o0.x1-.45,o0.z1-.45,it.cx,1.9)}var PS=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],c1=t=>{let e=Math.hypot(t[0],t[1],t[2])||1;return[t[0]/e,t[1]/e,t[2]/e]};function Ic(t,e,o,r,n,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),f=t.vert(r,a,s),l=t.vert(n,a,s);t.tri(i,c,f),t.tri(i,f,l)}function fn(t,e,o,r,n,a,s,i){t.box(Math.min(e,n),Math.min(o,a),Math.min(r,s),Math.max(e,n),Math.max(o,a),Math.max(r,s),[i,0,0])}function IS(t,e,o){return{vert:(r,n,a)=>t.vert(e(r),o(n),a),tri:t.tri}}var qS={north:[t=>[t[0],t[1],it.northCol-t[2]],t=>[t[0],t[1],-t[2]]],west:[t=>[it.westCol+t[2],t[1],t[0]],t=>[t[2],t[1],t[0]]],east:[t=>[it.eastCol-t[2],t[1],t[0]],t=>[-t[2],t[1],t[0]]]};function C5(t,e,o,r,n){let a=[];for(let s=0;s<o;s++){let i=t+s*e+(s===0?r:.02),c=t+(s+1)*e-(s===o-1?n:.02);a.push([i,c,t+(s+.5)*e])}return a}var DS=C5(it.westCol,Wd,h1,Re+df,Re+df),S5=C5(it.south,RS,T5,.32,Re+df),Pc=[it.cx-32.35,it.northCol-77],FS=Array.from({length:h1-1},(t,e)=>it.westCol+(e+1)*Wd),$5=t=>(t[1]-t[0])/2-.2,uf=t=>(t[0]+t[1])/2;function GS(t,e){let o=uf(t),r=$5(t);return{u0:t[0],u1:t[1],bottom:e?0:hf,head:n=>{let a=Math.abs(n-o);return a<r?Dn+Math.sqrt(r*r-a*a):Dn},step:.05}}function HS(t,e,o){return{u0:t-o,u1:t+o,bot:r=>e-Math.sqrt(Math.max(0,o*o-(r-t)*(r-t))),head:r=>e+Math.sqrt(Math.max(0,o*o-(r-t)*(r-t))),step:.04,mat:[be.STONE,0,0]}}function US(t,e,o,r){return{u0:t-e/2,u1:t+e/2,bottom:o,head:()=>r,step:.5,mat:[be.STONE,0,0]}}function k5(t,e,o){let[r,n]=qS[e],a=IS(t,r,n),s=[];o.arches.forEach((l,v)=>s.push(GS(l,v===o.open)));let i=[];for(let l of o.bays||o.arches){let v=uf(l);o.oculi&&s.push(HS(v,6.85,.3)),i.push({c:v,y0:o.win[0],y1:o.win[1],w:1.05})}for(let l of o.extraWindows||[])i.push(l);for(let l of i)s.push(US(l.c,l.w,l.y0,l.y1));for(let l of o.extraHoles||[])s.push(l);OS(a,{u0:o.u0,u1:o.u1,w0:-Re,w1:Re,top:o.top,holes:s,mat:[be.BRICK,0,0],revealMat:[be.BRICK,0,0],noEnds:o.noEnds,cuts:o.cuts,topStep:.25});let c=(l,v,d,p,u,h,g)=>{let m=r([l,v,d]),x=r([p,u,h]);fn(t,m[0],m[1],m[2],x[0],x[1],x[2],g)},f=(l,v,d,p,u,h)=>Ic(a,l,v,d,p,u,[h,0,0]);for(let l of o.arches){let v=uf(l),d=$5(l),p=28;for(let u of[Re,-Re]){let h=u>0?1:-1,g=u+h*.025;for(let m=0;m<p;m++){let x=Math.PI*m/p,y=Math.PI*(m+1)/p,_=(R,U)=>[v+Math.cos(R)*U,Dn+Math.sin(R)*U],M=_(x,d),b=_(y,d),S=_(x,d+.26),z=_(y,d+.26);f([M[0],M[1],g],[b[0],b[1],g],[z[0],z[1],g],[S[0],S[1],g],[0,0,h],be.STONE);let k=Math.cos((x+y)/2),C=Math.sin((x+y)/2);f([S[0],S[1],u],[z[0],z[1],u],[z[0],z[1],g],[S[0],S[1],g],[k,C,0],be.STONE)}}}if(o.arches.forEach((l,v)=>{v!==o.open&&c(l[0]-.02,hf,-Re-.05,l[1]+.02,hf+.09,Re+.05,be.STONE)}),c(o.u0,M5,-Re,o.u1,M5+.18,Re+.09,be.STONE),c(o.u0,o.win[0]-.12,Re-.01,o.u1,o.win[0],Re+.06,be.STONE),o.cornice)for(let[l,v,d]of o.cornice)c(l,d-.22,Re-.01,v,d,Re+.16,be.STONE),c(l,d,Re-.01,v,d+.16,Re+.42,be.STONE);for(let{c:l,y0:v,y1:d,w:p,door:u}of i){let h=p/2;if(f([l-h-.01,v,.06],[l+h+.01,v,.06],[l+h+.01,d,.06],[l-h-.01,d,.06],[0,0,1],u?be.DARK:be.PANE),u){c(l-h-.16,0,Re-.01,l-h,d+.16,Re+.07,be.STONE),c(l+h,0,Re-.01,l+h+.16,d+.16,Re+.07,be.STONE),c(l-h-.16,d,Re-.01,l+h+.16,d+.2,Re+.09,be.STONE),c(l-h,0,.07,l+h,d-.02,.12,be.SHUTTER),c(l-.012,0,.12,l+.012,d-.02,.14,be.DARK);continue}for(let g of[-1,1]){let m=l+g*h;c(m+g*.02,v+.02,Re+.02,m+g*(h+.025),d-.02,Re+.06,be.SHUTTER)}c(l-h-.09,d,Re-.01,l+h+.09,d+.16,Re+.05,be.STONE),c(l-h-.09,v-.1,Re-.01,l+h+.09,v,Re+.09,be.STONE),c(l-.015,v,.06,l+.015,d,.09,be.SHUTTER),c(l-h,(v+d)/2-.015,.06,l+h,(v+d)/2+.015,.09,be.SHUTTER)}if(o.oculi)for(let l of o.bays||o.arches){let v=uf(l);f([v-.31,6.54,0],[v+.31,6.54,0],[v+.31,7.16,0],[v-.31,7.16,0],[0,0,1],be.DARK)}for(let l of o.cols){let v=hf+.09,d=r([l,0,0]);fn(t,d[0]-.24,v,d[2]-.24,d[0]+.24,v+.12,d[2]+.24,be.MARBLE),t.lathe([[.23,v+.12,1],[.24,v+.17],[.2,v+.24],[.215,v+.28],[.17,v+.34,1],[.165,v+.6],[.155,Dn-.5],[.15,Dn-.38,1],[.175,Dn-.34,1],[.17,Dn-.3],[.2,Dn-.22],[.27,Dn-.15],[.29,Dn-.12,1]],d[0],d[2],18,{mat:()=>[be.MARBLE,0,0]}),fn(t,d[0]-.29,Dn-.12,d[2]-.29,d[0]+.29,Dn+.01,d[2]+.29,be.STONE)}o.walk&&o.walk(t)}function BS(t){let e=[-1,0,1].map(n=>{let a=it.cx+n*1.7;return{u0:a-.6,u1:a+.6,bottom:11,head:s=>12.9+Math.sqrt(Math.max(0,.36-(s-a)*(s-a))),step:.04,mat:[be.STONE,0,0]}});k5(t,"north",{u0:it.westCol-Re,u1:it.eastCol+Re,top:n=>n>Io.x0+1e-6&&n<Io.x1-1e-6?Io.top:jr,cuts:[Io.x0,Io.x0+1e-5,Io.x1-1e-5,Io.x1],arches:DS,open:L5,cols:FS,oculi:!0,win:[8,9.9],extraHoles:e,cornice:[[it.westCol-Re-3.3,Io.x0,jr],[Io.x1,it.eastCol+Re+3.3,jr],[Io.x0-.2,Io.x1+.2,Io.top]],walk:n=>{fn(n,o0.x0,ws,it.northCol+Re,o0.x1,ws+.2,it.northBack,be.PLASTER),fn(n,o0.x0,0,it.northBack,o0.x1,ws,it.northBack+.3,be.PLASTER);for(let a of[it.cx-7.2,it.cx,it.cx+7.2])Ic(n,[a-.8,0,it.northBack-.01],[a+.8,0,it.northBack-.01],[a+.8,2.9,it.northBack-.01],[a-.8,2.9,it.northBack-.01],[0,0,-1],[be.DARK,0,0]),fn(n,a-.98,0,it.northBack-.06,a+.98,3.12,it.northBack,be.STONE),Ic(n,[a-.8,0,it.northBack-.07],[a+.8,0,it.northBack-.07],[a+.8,2.9,it.northBack-.07],[a-.8,2.9,it.northBack-.07],[0,0,-1],[be.DARK,0,0])}}),Ic(t,[Io.x0,11,it.northCol+.2],[Io.x1,11,it.northCol+.2],[Io.x1,13.6,it.northCol+.2],[Io.x0,13.6,it.northCol+.2],[0,0,-1],[be.DARK,0,0]),fn(t,Io.x0+.3,10.88,it.northCol-Re-.06,Io.x1-.3,11,it.northCol-Re+.1,be.STONE),fn(t,it.westBack,ws+.2,it.northBack,it.eastBack,jr,it.northBack+3.4,be.BRICK),fn(t,it.westBack,ys,it.northCol-Re,it.westCol-Re,jr,it.northCol+Re,be.BRICK),fn(t,it.eastCol+Re,ys,it.northCol-Re,it.eastBack,jr,it.northCol+Re,be.BRICK),fn(t,it.westBack,ws+.2,it.northCol+Re+.12,it.eastBack,jr,it.northBack,be.BRICK),lf(t,[it.westBack-.5,jr+.16,it.northCol-Re-.42],[Io.x0-it.westBack+.5,0,0],[0,2.6,4.4],be.ROOF),lf(t,[Io.x1,jr+.16,it.northCol-Re-.42],[it.eastBack+.5-Io.x1,0,0],[0,2.6,4.4],be.ROOF),lf(t,[Io.x0-.3,Io.top+.16,it.northCol-Re-.42],[Io.x1-Io.x0+.6,0,0],[0,1.4,3],be.ROOF),z5(t,[Io.x0-.3,Io.top+.16,it.northCol-Re-.42],[Io.x0-.3,Io.top+1.56,it.northCol-Re+2.58],[Io.x0-.3,Io.top+.16,it.northCol-Re+2.58],[-1,0,0],be.BRICK),z5(t,[Io.x1+.3,Io.top+.16,it.northCol-Re-.42],[Io.x1+.3,Io.top+1.56,it.northCol-Re+2.58],[Io.x1+.3,Io.top+.16,it.northCol-Re+2.58],[1,0,0],be.BRICK),fn(t,Io.x0,jr,it.northCol+Re,Io.x1,Io.top,it.northCol+2.6,be.BRICK);for(let[n,a]of[[it.cx-9.8,it.northBack+.6],[it.cx+9.4,it.northBack+.4],[it.cx-4.6,it.northBack+1]])fn(t,n-.4,12.5,a-.4,n+.4,15.4,a+.4,be.BRICK),fn(t,n-.52,15.4,a-.52,n+.52,15.62,a+.52,be.STONE);let o=(n,a,s)=>{let i=n==="west"?-1:1,c=[];S5.forEach((v,d)=>{let p=uf(v);d===1?c.push({c:p,y0:0,y1:2.9,w:1.4,door:!0}):c.push({c:p,y0:1,y1:2.75,w:1.05}),c.push({c:p,y0:3.85,y1:5.45,w:1.05})}),k5(t,n,{u0:it.south,u1:it.northCol-Re,top:()=>ys,arches:[],bays:S5,cols:[],win:[7.45,8.85],extraWindows:c,noEnds:!0,cornice:[[it.south,it.northCol-Re,ys]]}),fn(t,a,0,it.south,s+i*(Re+.12),ys,it.northBack+.3,be.BRICK);let f=s-i*Re;fn(t,f,0,it.south,f-i*.06,.55,it.northCol-Re,be.STONE);let l=s-i*(Re+.42);lf(t,[l,ys+.16,it.south],[0,0,it.northCol-Re-it.south],[a-l+i*.4,1.9,0],be.ROOF)};o("west",it.westBack,it.westCol),o("east",it.eastBack,it.eastCol);let r=bs.x1+.7;fn(t,13.65,7.4,it.south-.02,r,7.62,it.south+.14,be.STONE),fn(t,13.65,10.4,it.south-.02,r,10.6,it.south+.38,be.STONE),lf(t,[13.65,10.6,it.south+.38],[r-13.65,0,0],[0,2.2,-5],be.ROOF)}function z5(t,e,o,r,n,a){let s=[a,0,0];t.tri(t.vert(e,n,s),t.vert(o,n,s),t.vert(r,n,s))}function lf(t,e,o,r,n){let a=c1([o[1]*r[2]-o[2]*r[1],o[2]*r[0]-o[0]*r[2],o[0]*r[1]-o[1]*r[0]]),s=a[1]<0?a.map(f=>-f):a,i=(f,l)=>[e[0]+o[0]*f+r[0]*l,e[1]+o[1]*f+r[1]*l,e[2]+o[2]*f+r[2]*l];Ic(t,i(0,0),i(1,0),i(1,1),i(0,1),s,[n,0,0]);let c=.08;Ic(t,i(0,0),i(1,0),[i(1,0)[0],i(1,0)[1]-c,i(1,0)[2]],[i(0,0)[0],i(0,0)[1]-c,i(0,0)[2]],c1([-r[0],0,-r[2]]),[n,0,0])}function jS(t){let e=it.westBack,o=it.eastBack,r=it.south,n=it.northBack,a=36,s=22,i=[];for(let c=0;c<=a;c++){i.push([]);for(let f=0;f<=s;f++){let l=[e+(o-e)*c/a,0,r+(n-r)*f/s];i[c].push(t.vert(l,[0,1,0],[be.GROUND,0,0]))}}for(let c=0;c<a;c++)for(let f=0;f<s;f++)t.tri(i[c][f],i[c+1][f],i[c+1][f+1]),t.tri(i[c][f],i[c+1][f+1],i[c][f+1])}var ff=.46,xi=.58,mi=[[-.5,0],[-.52,.45],[-.46,.78],[-.3,.95],[0,1],[.3,.95],[.46,.78],[.52,.45],[.5,0]];function WS(t,e,o){let r=gi+o,n=(t>0?o0.x1-it.cx:it.cx-o0.x0)-yi-o,a=gi+o,s=(e>0?o0.z1-it.cz:it.cz-o0.z0)-yi-o,i=s1+o,c=Math.sqrt(i*i-r*r),f=Math.sqrt(i*i-a*a),l=[[r,c],[r,s],[n,s],[n,a],[f,a]],v=Math.atan2(a,f),d=Math.atan2(c,r);for(let p=1;p<10;p++){let u=v+(d-v)*p/10;l.push([Math.cos(u)*i,Math.sin(u)*i])}return l.map(([p,u])=>[it.cx+t*p,it.cz+e*u])}function VS(t,e,o){let r=o[0]-e[0],n=o[1]-e[1],a=Math.hypot(r,n),s=r/a,i=n/a,c=-i,f=s,l=ff*.5,v=-l,d=a+l,p=[],u=Math.max(1,Math.ceil((d-v)/1));for(let h=0;h<=u;h++){let g=v+(d-v)*h/u,m=[];for(let x=0;x<mi.length;x++){let[y,_]=mi[x],M=Math.min(mi.length-2,x),b=mi[Math.max(0,x-1)],S=mi[Math.min(mi.length-1,x+1)],z=(S[0]-b[0])*ff,C=(S[1]-b[1])*xi,R=-z,U=Math.hypot(C,R)||1,P=[e[0]+s*g+c*y*ff,_*xi,e[1]+i*g+f*y*ff],q=[c*(-C/U),-R/U,f*(-C/U)];m.push(t.vert(P,q[1]<-.2?[c*Math.sign(y),.3,f*Math.sign(y)]:q,[be.HEDGE,0,0]))}p.push(m)}for(let h=0;h<u;h++)for(let g=0;g<mi.length-1;g++)t.tri(p[h][g],p[h+1][g],p[h+1][g+1]),t.tri(p[h][g],p[h+1][g+1],p[h][g+1]);for(let[h,g]of[[0,-1],[u,1]]){let m=p[h],x=t.vert([e[0]+s*(h?d:v),xi*.5,e[1]+i*(h?d:v)],[s*g,0,i*g],[be.HEDGE,0,0]);for(let y=0;y<m.length-1;y++)t.tri(x,m[y],m[y+1])}}function XS(t){for(let e of[-1,1])for(let o of[-1,1]){let r=WS(e,o,.3);for(let n=0;n<r.length;n++)VS(t,r[n],r[(n+1)%r.length])}}function YS(t){let e=it.cx,o=it.cz,r=()=>[be.STONE,0,0];t.lathe([[1.45,0,1],[1.45,.14,1],[1.12,.14,1],[1.12,.3,1],[0,.3]],e,o,8,{mat:r}),t.lathe([[.76,.3,1],[.8,.38,1],[.74,.44],[.76,.7],[.82,.9],[.8,1.02,1],[.88,1.06,1],[.88,1.18,1],[.6,1.18,1],[.6,.98]],e,o,24,{mat:r}),t.lathe([[.6,.98,1],[0,.98]],e,o,16,{mat:()=>[be.DARK,0,0]});let n={mat:()=>[be.IRON,0,0]};t.tube([[e-.72,1.1,o],[e-.72,1.9,o],[e-.7,2.3,o]],()=>.035,8,6,n),t.tube([[e+.72,1.1,o],[e+.72,1.9,o],[e+.7,2.3,o]],()=>.035,8,6,n);let a=[];for(let s=0;s<=10;s++){let i=Math.PI*s/10;a.push([e-Math.cos(i)*.7,2.3+Math.sin(i)*.45,o])}t.tube(a,()=>.03,20,6,n),t.tube([[e-.45,2.25,o],[e,2.38,o],[e+.45,2.25,o]],()=>.02,8,5,n),t.ellipsoid([e,2.32,o],[.03,.13,.13],6,10,n);for(let s of[-1,1]){let i=[];for(let c=0;c<=12;c++){let f=c/12*Math.PI*1.6,l=.16*(1-c/16);i.push([e+s*(.72-.18+Math.cos(f)*l*s*-1+0),1.95+Math.sin(f)*l,o])}t.tube(i,()=>.016,16,5,n)}}function KS(t){for(let[e,o]of Vd)t.lathe([[.26,0,1],[.3,.06],[.36,.42],[.38,.5,1],[.44,.52,1],[.44,.64,1],[.38,.66,1],[.37,.6]],e,o,20,{mat:()=>[be.POT,0,0]}),t.lathe([[.37,.6,1],[0,.6]],e,o,12,{mat:()=>[be.SOIL,0,0]}),t.tube([[e,.6,o],[e+.02,1,o-.01],[e-.01,1.45,o+.02]],r=>.045-r*.02,6,6,{mat:()=>[be.BARK,0,0]})}function ZS(t){let[e,,o]=xs.c,r=I5(7),n=[[-1.8,.4,3.6],[1.6,-.9,3.9],[.4,1.9,3.4],[-.6,-1.7,4.2],[2.1,1.2,3.2]];for(let[a,s,i]of n){let c=[[e+a*.05,0,o+s*.05],[e+a*.25,i*.35,o+s*.25],[e+a*.6,i*.7,o+s*.6],[e+a,i,o+s],[e+a*1.35+(r()-.5),i+1.4,o+s*1.35+(r()-.5)]];t.tube(c,f=>.2*(1-f*.75),14,9,{mat:()=>[be.BARK,0,0]});for(let f=0;f<2;f++){let l=.55+f*.2,v=[e+a*l,i*l,o+s*l],d=r()*Math.PI*2;t.tube([v,[v[0]+Math.cos(d)*1.3,v[1]+.9,v[2]+Math.sin(d)*1.3],[v[0]+Math.cos(d)*2.3,v[1]+1.4+r(),v[2]+Math.sin(d)*2.3]],p=>.08*(1-p*.7),8,6,{mat:()=>[be.BARK,0,0]})}}for(let a of za.filter(s=>s.spindle))t.tube([[a.c[0],0,a.c[2]],[a.c[0],1.4,a.c[2]]],()=>.12,3,7,{mat:()=>[be.BARK,0,0]})}function QS(t){let e=()=>[be.FARBRICK,0,0],o=()=>[be.LEAD,0,0],r=(a,s,i,c,f,l)=>{t.lathe([[i+.3,20,1],[i+.3,c-1.2,1],[i+.8,c-.9,1],[i+.8,c,1],[i,c,1]],a,s,28,{mat:e});let v=[];for(let p=0;p<=12;p++){let u=p/12*Math.PI/2,h=Math.cos(u)*i,g=Math.sin(u)*f;l&&(h*=1-.18*Math.sin(u*2)),v.push([Math.max(h,i*.12),c+g])}t.lathe(v,a,s,28,{mat:o});let d=c+f;t.lathe([[i*.13,d-.2,1],[i*.13,d+3,1],[i*.18,d+3.2,1],[i*.02,d+6.4]],a,s,10,{mat:o})};fn(t,14,0,104,52,26,150,be.FARBRICK),t.lathe([[3,26],[.1,32]],33,108,4,{mat:e}),r(26,124,7.2,33,9.5,!0),r(40.5,116,6,31,8,!0),r(16.5,117,5.5,30,7.2,!0),t.lathe([[6.4,20,1],[6.4,34,1],[6.9,34.4,1],[6,34.4,1],[.6,46.5,1],[.15,50]],33,132,24,{mat:o});let n=(a,s,i)=>{fn(t,a-1.8,0,s-1.8,a+1.8,i,s+1.8,be.FARBRICK),t.lathe([[1.9,i,1],[1.6,i+3.5,1],[1.2,i+3.5,1],[1.2,i+6,1],[.9,i+6.2,1],[.05,i+13]],a,s,8,{mat:e})};n(20.5,109,36),n(46.5,112,38)}function JS(t){let o=[it.cx,0,it.cz],r=24,n=10,a=[];for(let s=0;s<=r;s++){a.push([]);let i=-Math.PI*.62+Math.PI*1.24*s/r;for(let c=0;c<=n;c++){let f=Math.PI/2*(c/n)-.05,l=[Math.sin(i)*Math.cos(f),Math.sin(f),Math.cos(i)*Math.cos(f)],v=[o[0]+l[0]*420,o[1]+l[1]*420,o[2]+l[2]*420];a[s].push(t.vert(v,[-l[0],-l[1],-l[2]],[be.SKY,0,0]))}}for(let s=0;s<r;s++)for(let i=0;i<n;i++)t.tri(a[s][i],a[s+1][i],a[s+1][i+1]),t.tri(a[s][i],a[s+1][i+1],a[s][i+1])}function tk(){let t=[],e=[],o=[],r=[],n=NS.createBuilder(t,e,o,r);return jS(n),BS(n),XS(n),YS(n),KS(n),ZS(n),n.save(),n.translate(Pc[0],0,Pc[1]),QS(n),n.restore(),JS(n),{position:t,normal:e,elements:o,attr:r}}var P5=[[[13.65,0,bs.z0-.7],[bs.x1+.7,10.6,it.south]],[[it.westBack,ws,it.northCol-Re],[it.eastBack,jr,it.northBack+3.4]],[[Io.x0,jr,it.northCol-Re],[Io.x1,Io.top,it.northCol+2.6]],[[it.westBack,0,it.south],[it.westCol+Re,ys,it.northBack+.3]],[[it.eastCol-Re,0,it.south],[it.eastBack,ys,it.northBack+.3]],[[14+Pc[0],0,104+Pc[1]],[52+Pc[0],26,150+Pc[1]]]];function ek(t,e,o,r){let n=.001,a=1e9;for(let s=0;s<3;s++){if(Math.abs(e[s])<1e-9){if(t[s]<o[s]||t[s]>r[s])return!1;continue}let i=(o[s]-t[s])/e[s],c=(r[s]-t[s])/e[s];if(i>c&&([i,c]=[c,i]),n=Math.max(n,i),a=Math.min(a,c),n>a)return!1}return!0}function a1(t,e,o,r){let n=[(t[0]-o[0])/r[0],(t[1]-o[1])/r[1],(t[2]-o[2])/r[2]],a=[e[0]/r[0],e[1]/r[1],e[2]/r[2]],s=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],i=n[0]*a[0]+n[1]*a[1]+n[2]*a[2],c=n[0]*n[0]+n[1]*n[1]+n[2]*n[2]-1,f=i*i-s*c;if(f<=0)return 0;let l=Math.sqrt(f),v=Math.max(0,(-i-l)/s),d=(-i+l)/s;return Math.max(0,d-v)}function jd(t){for(let[e,o]of P5)if(ek(t,ka,e,o))return 0;return 1}function I5(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let o=e;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}function ok(){let t=[],e=[],o=[],r=[],n=[],a=[],s=[],i=I5(21),c=(u,h,g,m,x,y,_)=>{let M=t.length/3;for(let[b,S]of[[-1,-1],[1,-1],[1,1],[-1,1]])t.push(...u),e.push(b,S),o.push(h,g,m),r.push(...x),n.push(...y),a.push(..._);s.push(M,M+1,M+2,M,M+2,M+3)},f=(u,h)=>{let g=1;for(let m of za){if(m===h||!m.shadow)continue;let x=a1(u,ka,m.c,m.r);x>0&&(g*=Math.exp(-x*.9))}return g},l=za.map(u=>({...u,pts:null}));for(let u of l)for(let h=0;h<u.n;h++){let g;do g=[i()*2-1,i()*2-1,i()*2-1];while(g[0]*g[0]+g[1]*g[1]+g[2]*g[2]>1);let m=Math.hypot(g[0],g[1],g[2])||1,x=Math.pow(i(),.35)*.98,y=[g[0]/m*x,g[1]/m*x,g[2]/m*x];if(u.spindle){let P=y[1],q=Math.sqrt(Math.max(.02,1-P*P))*(P>0?1-P*.55:1+P*.25),at=Math.hypot(y[0],y[2])||1,St=q*Math.min(1,at*1.4);y=[y[0]/at*St,P,y[2]/at*St]}u.magnolia&&y[1]<-.55&&(y[1]=-.55+(y[1]+.55)*.35);let _=[u.c[0]+y[0]*u.r[0],u.c[1]+y[1]*u.r[1],u.c[2]+y[2]*u.r[2]],M,b;if(u.magnolia){let P=0;for(let St of O5)P=Math.max(P,a1(_,ka,St.c,St.r));M=Math.exp(-P*1.1);let q=1;for(let St of za)if(!St.magnolia&&St.shadow){let yt=a1(_,ka,St.c,St.r);yt>0&&(q*=Math.exp(-yt*.9))}M*=jd(_)*q;let at=PS(_,xs.c);b=c1([at[0]/xs.r[0]+y[0]*.5,at[1]/xs.r[1]+y[1]*.5,at[2]/xs.r[2]+y[2]*.5]),x=Math.min(1,Math.hypot(at[0]/xs.r[0],at[1]/xs.r[1],at[2]/xs.r[2])*.6+x*.4)}else{let P=a1(_,ka,u.c,u.r);M=Math.exp(-P*(u.spindle?2.2:1.25)),M*=jd(_)*f(_,za[l.indexOf(u)]),b=c1([y[0]/u.r[0],y[1]/u.r[1],y[2]/u.r[2]])}let S=Math.max(0,b[0]*ka[0]+b[1]*ka[1]+b[2]*ka[2]),z=.25+.75*Math.pow(x,1.5)*(.65+.35*(b[1]*.5+.5)),k=u.size[0]+(u.size[1]-u.size[0])*i(),C=.85+i()*.3,R=u.leaf.map(P=>P*C),U=u.cell;u.cell===3&&i()<.35&&(U=2),c(_,k,U,i()*Math.PI*2,[M,z,.35+.65*S],R,u.bloom)}for(let[u,h]of R5){let g=i()<.5;for(let m=0;m<3;m++){let x=[u+(i()-.5)*.7,.28+i()*.22,h+(i()-.5)*.5],y=jd(x)*f(x,null);c(x,.32+i()*.12,i()<.7?3:2,i()*6.28,[y,.6+i()*.3,.8],[.75,.9,.6],g?[1,.55,.75]:[.85,.8,1.15])}}let v=s.length/6,d=Array.from({length:v},(u,h)=>h);for(let u=v-1;u>0;u--){let h=Math.floor(i()*(u+1));[d[u],d[h]]=[d[h],d[u]]}let p=[];for(let u of d)for(let h=0;h<6;h++)p.push(s[u*6+h]);return{center:t,corner:e,par:o,light:r,tint:n,bloom:a,elements:p}}var Oe=t=>t.toFixed(4),pf=t=>`vec3(${Oe(t[0])}, ${Oe(t[1])}, ${Oe(t[2])})`,q5=`
const vec3 SUN = ${pf(ka)};
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
`,nk=P5.map(([t,e])=>`if (hitBox(ro, SUN, ${pf(t)}, ${pf(e)})) return 0.0;`).join(`
	`),rk=za.filter(t=>t.shadow).map(t=>`tr *= crownShade(ro, ${pf(t.c)}, ${pf(t.r)}, ${t.spindle?"1.8":"1.0"});`).join(`
	`),ak=(t,e,o,r,n,a,s,i,c)=>`
	{
		float t = (${Oe(e)} - ro.${t}) / SUN.${t};
		if (t > 0.0) {
			vec3 q = ro + SUN * t;
			float u = q.${t==="z"?"x":"z"};
			if (q.y < ${Oe(ws)} && u > ${Oe(o-Re)} && u < ${Oe(o+r*n+Re)}) {
				float k = floor((u - ${Oe(o)}) / ${Oe(r)});
				float a = ${Oe(o)} + k * ${Oe(r)} + (k < 0.5 ? ${Oe(a)} : 0.02);
				float b = ${Oe(o)} + (k + 1.0) * ${Oe(r)} - (k > ${Oe(n-1.5)} ? ${Oe(s)} : 0.02);
				float c = 0.5 * (a + b), r = 0.5 * (b - a) - 0.2;
				float d = abs(u - c);
				float sill = abs(k - ${Oe(i)}) < 0.5 ? 0.0 : ${Oe(hf+.09)};
				bool hole = (q.y > sill && q.y < ${Oe(Dn)} && u > a && u < b && d < 0.5 * (b - a) - 0.17)
					|| (q.y >= ${Oe(Dn)} && d * d + (q.y - ${Oe(Dn)}) * (q.y - ${Oe(Dn)}) < r * r);
				if (!hole && ${c}) return 0.0;
			}
		}
	}`,l1=gi+.3,f1=gi+.3,vf=s1+.3,E5=o0.x1-it.cx-yi-.3,sk=o0.z1-it.cz-yi-.3,ik=it.cz-o0.z0-yi-.3,ck=Math.sqrt(vf*vf-l1*l1),lk=Math.sqrt(vf*vf-f1*f1),fk=[[it.cx,it.cz,.86,1.18],[it.cx,it.cz,1.25,.3],...Vd.map(([t,e])=>[t,e,.42,.65])].map(([t,e,o,r])=>`if (hitCyl(ro, vec2(${Oe(t)}, ${Oe(e)}), ${Oe(o)}, ${Oe(r)})) return 0.0;`).join(`
	`),hk=`
float segDist(vec2 p, vec2 a, vec2 b) {
	vec2 pa = p - a, ba = b - a;
	float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
	return length(pa - ba * h);
}

// distance to the nearest hedge line
float hedgeDist(vec2 xz) {
	vec2 q = abs(xz - vec2(${Oe(it.cx)}, ${Oe(it.cz)}));
	float b1 = xz.y > ${Oe(it.cz)} ? ${Oe(sk)} : ${Oe(ik)};
	vec2 A = vec2(${Oe(l1)}, ${Oe(ck)}), Bp = vec2(${Oe(l1)}, b1), C = vec2(${Oe(E5)}, b1);
	vec2 D = vec2(${Oe(E5)}, ${Oe(f1)}), E = vec2(${Oe(lk)}, ${Oe(f1)});
	float d = min(min(segDist(q, A, Bp), segDist(q, Bp, C)), min(segDist(q, C, D), segDist(q, D, E)));
	float ang = atan(q.y, q.x);
	if (ang > atan(E.y, E.x) && ang < atan(A.y, A.x)) d = min(d, abs(length(q) - ${Oe(vf)}));
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
	${nk}
	${ak("z",it.northCol,it.westCol,Wd,h1,Re+df,Re+df,L5,"ro.z > "+Oe(it.northCol-Re))}
	// on lighter settings only the buildings cast shadows
	if (gardenDetail < 0.5) return 1.0;
	${fk}
	if (ro.y < ${Oe(xi)} && ro.x > ${Oe(o0.x0)} && ro.x < ${Oe(o0.x1)}) {
		for (int i = 1; i <= 4; i++) {
			float t = float(i) / 4.0 * (${Oe(xi)} - ro.y) / SUN.y;
			vec3 q = ro + SUN * t;
			float w = ${Oe(ff*.5)} * sqrt(max(0.0, 1.0 - pow(q.y / ${Oe(xi)}, 4.0)));
			if (hedgeDist(q.xz) < w) return 0.0;
		}
	}
	float tr = 1.0;
	${rk}
	return tr;
}
`,uk=`
precision highp float;
${A5}
varying vec3 v_pos, v_normal, v_attr, v_eye;
uniform float time, gardenDetail;
${q5}
${hk}

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

	if (kind == ${be.SKY}.0) {
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

	if (kind == ${be.GROUND}.0) {
		bool yard = P.x > ${Oe(o0.x0)} && P.x < ${Oe(o0.x1)} && P.z < ${Oe(o0.z1)};
		if (!yard) {
			// stone slabs under the arcades
			vec2 g = P.xz / 0.62;
			vec2 fg = fract(g);
			float h = hash(floor(g));
			base = mix(vec3(0.66, 0.60, 0.52), vec3(0.76, 0.70, 0.62), h);
			base *= 1.0 - 0.25 * (step(fg.x, 0.03) + step(fg.y, 0.03)) * (1.0 - lod);
			spec = 0.15;
		} else {
			float ex = min(P.x - ${Oe(o0.x0)}, ${Oe(o0.x1)} - P.x);
			float ez = min(P.z - ${Oe(o0.z0)}, ${Oe(o0.z1)} - P.z);
			float edge = min(ex, ez);
			float dx = abs(P.x - ${Oe(it.cx)}), dz = abs(P.z - ${Oe(it.cz)});
			float rc = length(vec2(dx, dz));
			if (edge < ${Oe(yi)}) {
				// brick path laid in rows, with a stone kerb
				vec2 q = ex < ez ? P.zx : P.xz;
				base = brick(q * vec2(1.0, 2.6), 0.4) * 0.9;
				if (abs(edge - ${Oe(yi)}) < 0.08) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (rc < ${Oe(s1)}) {
				// brick in rings round the wellhead
				float ang = atan(P.z - ${Oe(it.cz)}, P.x - ${Oe(it.cx)});
				vec2 q = vec2(ang * rc, rc);
				base = brick(q * vec2(1.0, 2.6), 0.5) * 0.92;
				if (abs(rc - ${Oe(s1)}) < 0.1) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (dx < ${Oe(gi)} || dz < ${Oe(gi)}) {
				// pale gravel
				float g = noise(P.xz * 40.0) * 0.6 + noise(P.xz * 9.0) * 0.4;
				base = mix(vec3(0.66, 0.58, 0.46), vec3(0.86, 0.79, 0.66), mix(g, 0.5, lod));
				base *= 0.94 + 0.12 * noise(P.xz * 1.3);
				float e = min(${Oe(gi)} - min(dx, dz), 1.0);
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
			ao *= 0.6 + 0.4 * smoothstep(0.85, 1.6, length(P.xz - vec2(${Oe(it.cx)}, ${Oe(it.cz)})));
		}
	} else if (kind == ${be.BRICK}.0) {
		float pink = smoothstep(0.4, 0.6, noise(wq * 0.05 + 7.0));
		base = mix(brick(wq, 0.25 * pink), vec3(0.68, 0.46, 0.33), lod * 0.6);
		base *= 1.0 - 0.18 * smoothstep(0.0, 1.5, 1.6 - P.y) * noise(wq * 1.5);
		ao *= 0.78 + 0.22 * smoothstep(0.0, 1.2, P.y);
	} else if (kind == ${be.STONE}.0) {
		float n = noise(wq * 3.0) * 0.5 + noise(wq * 0.7) * 0.5;
		base = mix(vec3(0.74, 0.70, 0.62), vec3(0.86, 0.83, 0.76), n);
		spec = 0.1;
	} else if (kind == ${be.MARBLE}.0) {
		// red Verona marble
		float n = noise3(P * vec3(5.0, 1.5, 5.0)) * 0.6 + noise3(P * 14.0) * 0.4;
		base = mix(vec3(0.56, 0.32, 0.25), vec3(0.68, 0.42, 0.33), n);
		base = mix(base, vec3(0.80, 0.66, 0.56), smoothstep(0.66, 0.74, noise3(P * 9.0 + 3.0)) * 0.35);
		spec = 0.35;
	} else if (kind == ${be.HEDGE}.0) {
		float n = noise3(P * 9.0) * 0.55 + noise3(P * 2.5) * 0.45;
		base = mix(vec3(0.05, 0.16, 0.04), vec3(0.22, 0.38, 0.10), n);
		ao *= 0.55 + 0.45 * smoothstep(0.0, ${Oe(xi)}, P.y) * (0.6 + 0.4 * n);
		N = normalize(N + vec3(noise3(P * 13.0) - 0.5, 0.0, noise3(P * 13.0 + 5.0) - 0.5) * 0.9);
	} else if (kind == ${be.POT}.0) {
		base = mix(vec3(0.66, 0.34, 0.20), vec3(0.75, 0.44, 0.28), noise(wq * 6.0));
	} else if (kind == ${be.SOIL}.0) {
		base = vec3(0.20, 0.14, 0.09);
	} else if (kind == ${be.ROOF}.0) {
		// rows of curved clay tiles
		float along = abs(N.x) > abs(N.z) ? P.z : P.x;
		float rib = abs(fract(along / 0.24) - 0.5) * 2.0;
		float h = hash(vec2(floor(along / 0.24), floor(P.y / 0.42)));
		base = mix(vec3(0.58, 0.30, 0.20), vec3(0.72, 0.44, 0.30), h);
		base = mix(base, vec3(0.45, 0.42, 0.36), smoothstep(0.55, 0.85, noise(P.xz * 0.6)) * 0.4);
		base *= mix(0.62 + 0.38 * (1.0 - rib * rib), 0.85, lod);
	} else if (kind == ${be.SHUTTER}.0) {
		float slat = fract(P.y / 0.07);
		base = vec3(0.17, 0.30, 0.20) * (0.75 + 0.25 * smoothstep(0.1, 0.5, slat));
	} else if (kind == ${be.PANE}.0) {
		vec3 R = reflect(-V, N);
		base = vec3(0.03, 0.035, 0.04);
		vec3 refl = skyColor(normalize(vec3(R.x, abs(R.y), R.z))) * 0.25;
		gl_FragColor = vec4(toNight(tonemap(base + refl * (0.4 + 0.6 * pow(1.0 - abs(dot(N, V)), 3.0))), 0.45), 1.0);
		return;
	} else if (kind == ${be.PLASTER}.0) {
		base = mix(vec3(0.82, 0.76, 0.64), vec3(0.88, 0.83, 0.72), noise(wq * 1.3));
		// a darker dado on the back walls
		if (abs(N.y) < 0.5 && P.y < 1.1) base *= 0.82;
	} else if (kind == ${be.BARK}.0) {
		base = mix(vec3(0.30, 0.27, 0.24), vec3(0.45, 0.42, 0.38), noise3(P * vec3(8.0, 2.0, 8.0)));
	} else if (kind == ${be.IRON}.0) {
		base = vec3(0.07, 0.07, 0.07);
		spec = 0.4;
	} else if (kind == ${be.LEAD}.0) {
		base = mix(vec3(0.30, 0.33, 0.35), vec3(0.40, 0.43, 0.45), noise(P.xy * 0.5));
		// ribs on the domes
		float a = atan(P.z - floor(P.z / 50.0) * 50.0, 1.0);
		base *= 0.9 + 0.1 * step(0.5, fract(a * 6.0));
		far = 1.0;
	} else if (kind == ${be.FARBRICK}.0) {
		base = mix(vec3(0.66, 0.46, 0.34), vec3(0.74, 0.54, 0.40), noise(P.xy * 0.3));
		// a row of small arches under the eaves and some dark windows
		far = 1.0;
	} else if (kind == ${be.DARK}.0) {
		base = vec3(0.025, 0.022, 0.02);
	}

	// ---------- light ----------

	// in the arcade walks the sky is mostly hidden
	bool walk = (P.x < ${Oe(it.westCol)} || P.x > ${Oe(it.eastCol)} || P.z > ${Oe(it.northCol)}) && P.y < ${Oe(ws+.05)} && P.z > ${Oe(it.south-.1)} && P.z < ${Oe(it.northBack+.5)};
	float skyVis = 0.55 + 0.45 * N.y;
	if (walk) {
		float depth = P.z > ${Oe(it.northCol)} ? P.z - ${Oe(it.northCol)} : (P.x < ${Oe(it.westCol)} ? ${Oe(it.westCol)} - P.x : P.x - ${Oe(it.eastCol)});
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
}`,dk=`
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
}`,pk=`
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
}`,vk=`
precision highp float;
${A5}
uniform sampler2D leaves;
varying vec2 v_uv;
varying vec3 v_light, v_tint, v_bloom, v_pos;
${q5}
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
}`;function mk(t,e,o){let r=t.texture({data:[[o]],min:"linear",mag:"linear"});return fetch(e).then(n=>{if(!n.ok)throw new Error("Could not load "+e);return n.blob()}).then(n=>createImageBitmap(n,{premultiplyAlpha:"none"})).then(n=>r({data:n,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(n=>console.error(n)),r}Xd.exports=t=>{let e=tk(),o=ok(),r=mk(t,"res/garden/foliage.webp",[0,0,0,0]),n=Date.now(),a=()=>Bd.motion?window.__streetClock!==void 0?window.__streetClock:(Date.now()-n)/1e3:20,s=t({frag:uk,vert:dk,attributes:{position:e.position,normal:e.normal,attr:e.attr},elements:new Uint32Array(e.elements),uniforms:{time:a,gardenDetail:()=>Bd.gardenDetail}}),i=t({frag:vk,vert:pk,attributes:{center:o.center,corner:o.corner,par:o.par,light:o.light,tint:o.tint,bloom:o.bloom},elements:new Uint32Array(o.elements),uniforms:{leaves:r,time:a},cull:{enable:!1},count:()=>Math.floor(o.elements.length*Bd.leafShare/6)*6});return function(){s(),i()}};Xd.exports.layout={G:it,YARD:o0,SUN:ka}});var B5=Tt((GA,U5)=>{"use strict";var gk=rn().GLSL,xk=ti(),{C:H5}=Nn(),Fn=H5.x1+.35,Qd=H5.zc,Yd=[Fn-7.3,2,Qd],F5=5.2*Math.PI/180,G5=2100,yk=725,bk=1288,wk=1450,_k=2576,Va=Qd-3.2,p1=Qd+3.3,Kd=Fn+5,Zd=Fn+11.7,qc=3.9,mf=Fn+22.7,u1=40;function Mk(){let t=[],e=[],o=[],r=[],n=xk.createBuilder(t,e,o,r),a=(l,v,d,p,u,h)=>{let g=[];for(let m=0;m<=u;m++){g.push([]);for(let x=0;x<=h;x++){let y=[0,1,2].map(_=>l[_]+v[_]*m/u+d[_]*x/h);g[m].push(n.vert(y,p,[0,0,0]))}}for(let m=0;m<u;m++)for(let x=0;x<h;x++)n.tri(g[m][x],g[m+1][x],g[m+1][x+1]),n.tri(g[m][x],g[m+1][x+1],g[m][x+1])},s=p1-Va,i=.7;a([Fn-i,0,Va],[Kd-Fn+i,0,0],[0,0,s],[0,1,0],6,4);let c=Zd-Kd,f=Math.hypot(c,qc);return a([Kd,0,Va],[c,qc,0],[0,0,s],[-qc/f,c/f,0],6,4),a([Zd,qc,Va],[mf-Zd,0,0],[0,0,s],[0,1,0],6,4),a([Fn-i,0,Va],[mf-Fn+i,0,0],[0,u1,0],[0,0,1],12,12),a([Fn-i,0,p1],[mf-Fn+i,0,0],[0,u1,0],[0,0,-1],12,12),a([mf,0,Va],[0,u1,0],[0,0,s],[-1,0,0],8,4),a([Fn-i,u1,Va],[mf-Fn+i,0,0],[0,0,s],[0,-1,0],6,4),{position:t,normal:e,elements:o,attr:r}}var Qn=t=>t.toFixed(5),d1=[[Fn+3.4,3.7,Va+.01,1],[Fn+8.6,4.1,p1-.01,-1],[Fn+14.8,qc+3.3,Va+.01,1],[Fn+19.6,qc+3.6,p1-.01,-1]],Sk=`
precision highp float;
${gk}
uniform sampler2D photo;
uniform float time;
varying vec3 v_pos;
varying vec3 v_normal;
const int NLAMP = ${d1.length};
vec4 LAMP[NLAMP];

void main() {
	${d1.map((t,e)=>`LAMP[${e}] = vec4(${Qn(t[0])}, ${Qn(t[1])}, ${Qn(t[2])}, ${Qn(t[3])});`).join(`
	`)}
	vec3 d = v_pos - vec3(${Qn(Yd[0])}, ${Qn(Yd[1])}, ${Qn(Yd[2])});
	float c = ${Qn(Math.cos(F5))}, s = ${Qn(Math.sin(F5))};
	float fw = d.x * c + d.y * s;
	float up = -d.x * s + d.y * c;
	fw = max(fw, 0.05);
	vec2 px = vec2(${Qn(yk)} + ${Qn(G5)} * d.z / fw, ${Qn(bk)} - ${Qn(G5)} * up / fw);
	vec2 uv = px / vec2(${Qn(wk)}, ${Qn(_k)});
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
	for (int i = 0; i < ${d1.length}; i++) {
		vec4 L = LAMP[i];                       // x, y, z, side (+1 left wall, -1 right)
		vec3 d = L.xyz - v_pos;
		float dd = dot(d, d);
		float fl = 0.92 + 0.05 * sin(time * 7.3 + float(i) * 2.1) + 0.03 * sin(time * 17.0 + float(i));
		// the wall it hangs on is lit across, the paving from above
		float face = v_normal.y > 0.5 ? max(normalize(d).y, 0.0) : 0.35 + 0.65 * max(dot(v_normal, normalize(d)), 0.0);
		lit += albedo * vec3(1.0, 0.62, 0.30) * face * fl * lampK * 3.2 / (0.6 + dd * 0.45);
	}
	gl_FragColor = vec4(lit, 1.0);
}`,kk=`
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
}`;U5.exports=t=>{let e=Mk(),o=t.texture({data:[[[120,105,85]]],min:"linear",mag:"linear"});fetch("res/florence/photo.jpg").then(i=>{if(!i.ok)throw new Error("Could not load the Florence photo");return i.blob()}).then(i=>createImageBitmap(i)).then(i=>o({data:i,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(i=>console.error(i));let r=t({frag:Sk,vert:kk,attributes:{position:e.position,normal:e.normal},elements:new Uint32Array(e.elements),uniforms:{photo:o},cull:{enable:!1}}),n={pos:[],nrm:[],k:[],idx:[]},a=(i,c,f)=>{let[l,v,d]=i,p=[[[1,0,0],[0,1,0],[0,0,1]],[[-1,0,0],[0,1,0],[0,0,-1]],[[0,0,1],[0,1,0],[-1,0,0]],[[0,0,-1],[0,1,0],[1,0,0]],[[0,1,0],[0,0,1],[1,0,0]],[[0,-1,0],[0,0,1],[-1,0,0]]];for(let[u,h,g]of p){let m=n.pos.length/3;for(let[x,y]of[[-1,-1],[1,-1],[1,1],[-1,1]])n.pos.push(l+u[0]*c[0]+h[0]*x*c[0]+g[0]*y*c[0],v+u[1]*c[1]+h[1]*x*c[1]+g[1]*y*c[1],d+u[2]*c[2]+h[2]*x*c[2]+g[2]*y*c[2]),n.nrm.push(...u),n.k.push(f);n.idx.push(m,m+1,m+2,m,m+2,m+3)}};for(let i of d1){let c=i[3],f=i[2]+c*.42;a([i[0],i[1],f],[.11,.17,.11],1);for(let l of[-1,1])for(let v of[-1,1])a([i[0]+l*.11,i[1],f+v*.11],[.014,.18,.014],0);a([i[0],i[1]+.2,f],[.15,.03,.15],0),a([i[0],i[1]+.27,f],[.05,.05,.05],0),a([i[0],i[1]-.19,f],[.09,.025,.09],0),a([i[0],i[1]+.34,i[2]+c*.21],[.015,.015,.21],0),a([i[0],i[1]+.15,i[2]+c*.03],[.04,.24,.03],0)}let s=t({vert:`
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
		}`,attributes:{position:n.pos,normal:n.nrm,k:n.k},elements:new Uint16Array(n.idx),cull:{enable:!1}});return function(){r(),s()}}});var Y5=Tt((HA,X5)=>{"use strict";var zk=rn().GLSL,{A:m1,BENCH:tp,SHAFT:Jd,TREE:gf,oculusGLSL:Ek}=Gr(),Ak=qr(),v1=gf.sxz,j5=gf.sy,W5=gf.yaw;function Tk(t){let e=new DataView(t),o=e.getUint32(4,!0),r=e.getUint32(8,!0),n=e.getUint32(12,!0),a=[0,1,2].map(d=>e.getFloat32(16+d*4,!0)),s=[0,1,2].map(d=>e.getFloat32(28+d*4,!0)),i=40,c=new Uint16Array(t,i,o*3);i+=o*6;let f=new Uint16Array(t,i,o*2);i+=o*4;let l=new Int8Array(t,i,o*3);i+=o*3,i=i+3&-4;let v=new Uint32Array(t,i,n);return{nV:o,nWood:r,nI:n,mn:a,sz:s,pos:c,uv:f,nrm:l,idx:v}}function Lk(t){let e=new Float32Array(t.nV*3),o=new Float32Array(t.nV*3),r=new Float32Array(t.nV*2),n=new Float32Array(t.nV),a=Math.cos(W5),s=Math.sin(W5);for(let i=0;i<t.nV;i++){let c=(t.mn[0]+t.pos[i*3]/65535*t.sz[0])*v1,f=(t.mn[1]+t.pos[i*3+1]/65535*t.sz[1])*j5,l=(t.mn[2]+t.pos[i*3+2]/65535*t.sz[2])*v1;e[i*3]=m1.cx+a*c+s*l,e[i*3+1]=tp.soil+.02+f,e[i*3+2]=m1.zc-s*c+a*l;let v=t.nrm[i*3]/127/v1,d=t.nrm[i*3+1]/127/j5,p=t.nrm[i*3+2]/127/v1,u=Math.hypot(v,d,p)||1;v/=u,d/=u,p/=u,o[i*3]=a*v+s*p,o[i*3+1]=d,o[i*3+2]=-s*v+a*p,r[i*2]=t.uv[i*2]/65535,r[i*2+1]=t.uv[i*2+1]/65535,n[i]=i>=t.nWood?1:0}return{position:e,normal:o,uv:r,leaf:n,elements:t.idx}}function V5(t,e,o,r){let n=t.texture({data:[[r]],min:"linear",mag:"linear"});return fetch(e).then(a=>{if(!a.ok)throw new Error("Could not load "+e);return a.blob()}).then(a=>createImageBitmap(a,{premultiplyAlpha:"none"}).catch(()=>new Promise((s,i)=>{let c=new Image;c.onload=()=>s(c),c.onerror=i,c.src=URL.createObjectURL(a)}))).then(a=>n({data:a,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",...o})).catch(a=>console.error(a)),n}var yn=t=>t.toFixed(4),Dc=gf.crownC,Fc=gf.crownR,Nk=`
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

const vec3 SHAFT = vec3(${yn(Jd[0])}, ${yn(Jd[1])}, ${yn(Jd[2])});

void main() {
	vec3 p = position;
	// the air in the court is never quite still. The whole tree leans
	// with it, slowly, more the higher and the further out on a limb
	// (wood and leaves together, so every leaf stays on its twig) ...
	float h = max(p.y - 1.2, 0.0);
	vec2 out2 = p.xz - vec2(${yn(m1.cx)}, ${yn(m1.zc)});
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
	vec3 cc = vec3(${yn(Dc[0])}, ${yn(Dc[1])}, ${yn(Dc[2])});
	vec3 cr = vec3(${yn(Fc[0])}, ${yn(Fc[1])}, ${yn(Fc[2])});
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
}`,Ms=fs(),Ok=`
precision highp float;
${zk}
uniform float time;
${Ms.lanternGLSL(Ms.TREE_LANTERN)}
const vec3 LANTERN_POS = vec3(${Ms.LANTERNS[Ms.TREE_LANTERN[0]].x.toFixed(3)}, ${Ms.LANTERNS[Ms.TREE_LANTERN[0]].y.toFixed(3)}, ${Ms.LANTERNS[Ms.TREE_LANTERN[0]].z.toFixed(3)});
uniform sampler2D leaves, bark;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_leaf, v_shade;
varying vec3 v_eye;

${Ek()}

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
	vec3 rel = (v_pos - vec3(${yn(Dc[0])}, ${yn(Dc[1])}, ${yn(Dc[2])})) / vec3(${yn(Fc[0])}, ${yn(Fc[1])}, ${yn(Fc[2])});
	float outer = clamp(length(rel), 0.0, 1.0);
	float ao = mix(0.38, 1.0, outer * outer) * (0.75 + 0.25 * smoothstep(0.4, 2.0, v_pos.y));
	// and the trunk darkens where it meets the soil
	ao *= 0.6 + 0.4 * smoothstep(${yn(tp.soil)}, ${yn(tp.soil+.5)}, v_pos.y);

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
}`;X5.exports=t=>{let e=null,o=V5(t,"res/tree/leaves.webp",{wrapS:"clamp",wrapT:"clamp"},[60,80,40,0]),r=V5(t,"res/tree/bark.jpg",{wrapS:"repeat",wrapT:"repeat"},[90,80,70]),n=Date.now();return fetch("res/tree.bin").then(a=>{if(!a.ok)throw new Error("Could not load the tree");return a.arrayBuffer()}).then(a=>{let s=Lk(Tk(a));e=t({vert:Nk,frag:Ok,attributes:{position:s.position,normal:s.normal,uv:s.uv,leaf:s.leaf},elements:s.elements,uniforms:{leaves:o,bark:r,time:()=>Ak.motion?typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-n)/1e3:0},cull:{enable:!1}})}).catch(a=>console.error(a)),function(){e&&e()}}});var b1=Tt((UA,J5)=>{"use strict";var Gc=ds(),Rk="res/audio/go-tomorrow.mp3",Ck="res/audio/go-tomorrow.json",Z5="gallery-sound",g1=[Gc.PIANO.x,1,Gc.PIANO.z],$k=Gc.R,pr=!0;try{localStorage.getItem(Z5)==="off"&&(pr=!1)}catch(t){}var H0=null,Cn=null,xf=null,yf=null,Ss=null,Xa=null,bi=!1,x1=null,K5=[],Pk=(typeof performance!="undefined"?performance.now():0)/1e3;function Ik(t){let e=Math.floor(t.sampleRate*2.6),o=t.createBuffer(2,e,t.sampleRate),r=12345,n=()=>(r=r*16807%2147483647,r/10737418235e-1-1);for(let a=0;a<2;a++){let s=o.getChannelData(a),i=0;for(let c=0;c<e;c++){let f=c/t.sampleRate,l=.25+.6*Math.exp(-f*2.2);i+=(n()-i)*l,s[c]=i*Math.pow(1-c/e,2.2)*Math.exp(-f*1.5)*(f<.012?f/.012:1)}}return o}function qk(){if(H0)return;H0=new Audio,H0.src=Rk,H0.loop=!0,H0.preload="auto",H0.crossOrigin="anonymous";let t=window.AudioContext||window.webkitAudioContext;if(!t){H0.volume=.2;return}try{Cn=new t;let e=Cn.createMediaElementSource(H0);Ss=Cn.createBiquadFilter(),Ss.type="lowpass",Ss.frequency.value=1500,Ss.Q.value=.4,xf=Cn.createGain(),xf.gain.value=0,yf=Cn.createGain(),yf.gain.value=0;let o=Cn.createConvolver();o.buffer=Ik(Cn),Xa=Cn.createGain(),Xa.gain.value=pr?1:0,e.connect(Ss),Ss.connect(xf),xf.connect(Xa),Ss.connect(o),o.connect(yf),yf.connect(Xa),Xa.connect(Cn.destination)}catch(e){Cn=null,H0.volume=.2}}function Q5(){if(bi||!pr)return;qk();let t=()=>H0.play().then(()=>{bi=!0}).catch(()=>{});Cn&&Cn.state==="suspended"?Cn.resume().then(t,t):t()}typeof window!="undefined"&&(["pointerdown","pointerup","touchend","keydown","click"].forEach(t=>window.addEventListener(t,Q5,{capture:!0,passive:!0})),document.addEventListener("visibilitychange",()=>{!H0||!bi||(document.hidden?H0.pause():pr&&H0.play().catch(()=>{}))}),fetch(Ck).then(t=>t.ok?t.json():null).then(t=>{if(!t)return;let e=o=>{let r=o.map(s=>s[2]).sort((s,i)=>s-i),n=r[Math.floor(r.length*.03)]||0,a=r[Math.floor(r.length*.97)]||1;return o.map(s=>({t:s[0],w:s[1],x:Math.max(0,Math.min(1,(s[2]-n)/Math.max(a-n,.001)))}))};x1={left:e(t.l),right:e(t.r),level:t.e,dur:t.d}}).catch(()=>{}));var y1={AT:g1,listen(t){if(!Cn||!bi)return;let e=t[0]-g1[0],o=t[2]-g1[2],r=Math.hypot(e,o,(t[1]-g1[1])*.5),n=Math.hypot(t[0]-Gc.C.x,t[2]-Gc.C.z)<$k+.4||t[0]<-.2&&Math.abs(t[2]-Gc.C.z)<4,a,s,i;if(n){let f=Math.max(0,Math.min(1,(r-1.2)/5));a=1-.3*f,s=.22+.16*f,i=16e3}else{let f=5.5/Math.max(r,5.5),l=t[0]>14.2&&t[2]<12?.6:1;a=.5*Math.pow(f,1.5)*l,s=.34*Math.pow(f,.95)*l,i=(650+9e3*Math.pow(f,1.3))*(l<1?.7:1)}let c=Cn.currentTime;xf.gain.setTargetAtTime(a,c,.35),yf.gain.setTargetAtTime(s,c,.35),Ss.frequency.setTargetAtTime(i,c,.35)},time(){let t=x1&&x1.dur||158;return H0&&bi&&!H0.paused||H0&&bi?H0.currentTime%t:((performance.now()/1e3-Pk)%t+t)%t},get cues(){return x1},get on(){return pr},set(t){pr=!!t;try{localStorage.setItem(Z5,pr?"on":"off")}catch(e){}pr?(Q5(),H0&&bi&&H0.play().catch(()=>{}),Xa&&Xa.gain.setTargetAtTime(1,Cn.currentTime,.2)):Xa?Xa.gain.setTargetAtTime(0,Cn.currentTime,.15):H0&&H0.pause(),K5.forEach(e=>e(pr))},toggle(){y1.set(!pr)},onChange(t){K5.push(t)},button(t){let e='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="M15.5 9a4.2 4.2 0 0 1 0 6M18 6.5a7.8 7.8 0 0 1 0 11"/></svg>',o='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="M16 9.5l5 5M21 9.5l-5 5"/></svg>',r=document.createElement("button");r.type="button",r.className=t+" sound-toggle";let n=()=>{r.innerHTML=pr?e:o,r.setAttribute("aria-label",pr?"Turn the music off":"Turn the music on"),r.title=pr?"Music on":"Music off",r.setAttribute("aria-pressed",pr?"true":"false")};return n(),y1.onChange(n),["mousedown","pointerdown"].forEach(a=>r.addEventListener(a,s=>s.stopPropagation())),r.addEventListener("click",a=>{a.stopPropagation(),y1.toggle()}),r}};J5.exports=y1});var fx=Tt((BA,ap)=>{"use strict";var np=rn().GLSL,{A:tx,BENCH:sx,oculusGLSL:ix}=Gr(),ex=qr(),cx=ds(),ox=b1(),Dk=1.74,Fk=1.877,Gn=Dk/Fk,_i={x:tx.cx-1.22,z:tx.zc+.02,hipY:sx.seat+.115},v0=(t,e)=>[t[3]*e[0]+t[0]*e[3]+t[1]*e[2]-t[2]*e[1],t[3]*e[1]-t[0]*e[2]+t[1]*e[3]+t[2]*e[0],t[3]*e[2]+t[0]*e[1]-t[1]*e[0]+t[2]*e[3],t[3]*e[3]-t[0]*e[0]-t[1]*e[1]-t[2]*e[2]],fa=t=>[-t[0],-t[1],-t[2],t[3]],zs=(t,e)=>{let o=Math.hypot(t[0],t[1],t[2])||1,r=Math.sin(e/2);return[t[0]/o*r,t[1]/o*r,t[2]/o*r,Math.cos(e/2)]},w1=(t,e,o)=>v0(zs([0,0,1],o*Math.PI/180),v0(zs([0,1,0],e*Math.PI/180),zs([1,0,0],t*Math.PI/180))),rp=t=>{let e=Math.hypot(...t)||1;return t.map(o=>o/e)},Ea=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],wf=(t,e)=>[t[0]+e[0],t[1]+e[1],t[2]+e[2]],ks=(t,e)=>[t[0]*e,t[1]*e,t[2]*e],op=(t,e)=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2],M1=t=>Math.hypot(t[0],t[1],t[2]),bf=t=>{let e=M1(t)||1;return[t[0]/e,t[1]/e,t[2]/e]},k1=(t,e)=>[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]],Gk=(t,e)=>{let o=[t[0],t[1],t[2]],r=ks(k1(o,e),2);return wf(wf(e,ks(r,t[3])),k1(o,r))},Hk=(t,e)=>{let o=k1(t,e),r=1+op(t,e);return r<1e-6?[0,0,1,0]:rp([o[0],o[1],o[2],r])};function Er(t,e,o){let[r,n,a,s]=e,i=r*r,c=n*n,f=a*a,l=r*n,v=r*a,d=n*a,p=s*r,u=s*n,h=s*a;return[(1-2*(c+f))*o[0],2*(l+h)*o[0],2*(v-u)*o[0],0,2*(l-h)*o[1],(1-2*(i+f))*o[1],2*(d+p)*o[1],0,2*(v+u)*o[2],2*(d-p)*o[2],(1-2*(i+c))*o[2],0,t[0],t[1],t[2],1]}function hn(t,e){let o=new Array(16);for(let r=0;r<4;r++)for(let n=0;n<4;n++)o[r*4+n]=t[n]*e[r*4]+t[4+n]*e[r*4+1]+t[8+n]*e[r*4+2]+t[12+n]*e[r*4+3];return o}function ep(t){let e=Math.hypot(t[0],t[1],t[2]),o=Math.hypot(t[4],t[5],t[6]),r=Math.hypot(t[8],t[9],t[10]),n=t[0]/e,a=t[1]/e,s=t[2]/e,i=t[4]/o,c=t[5]/o,f=t[6]/o,l=t[8]/r,v=t[9]/r,d=t[10]/r,p=n+c+d,u;if(p>0){let h=Math.sqrt(p+1)*2;u=[(f-v)/h,(l-s)/h,(a-i)/h,h/4]}else if(n>c&&n>d){let h=Math.sqrt(1+n-c-d)*2;u=[h/4,(i+a)/h,(l+s)/h,(f-v)/h]}else if(c>d){let h=Math.sqrt(1+c-n-d)*2;u=[(i+a)/h,h/4,(v+f)/h,(l-s)/h]}else{let h=Math.sqrt(1+d-n-c)*2;u=[(l+s)/h,(v+f)/h,h/4,(a-i)/h]}return rp(u)}var S1={LeftUpLeg:[-62,10,0],LeftLeg:[122,0,0],LeftFoot:[30,0,0],RightUpLeg:[0,-3,-2],RightLeg:[4,0,0],RightFoot:[35,-12,0],Neck:[10,0,0],Head:[6,0,0],LeftShoulder:[0,0,6],LeftArm:[-112.4,3.4,62.5],LeftForeArm:[0,-122.6,0],LeftHand:[0,0,-10],RightShoulder:[0,0,0],RightArm:[0,78,-8],RightForeArm:[0,14,0],RightHand:[0,0,0]};for(let t of["Left","Right"]){let e=t==="Left"?-1:1,o=t==="Left"?1:.35;["Index","Middle","Ring","Pinky"].forEach((r,n)=>{S1[t+"Hand"+r+"1"]=[0,0,e*(18+n*6)*o],S1[t+"Hand"+r+"2"]=[0,0,e*(26+n*6)*o],S1[t+"Hand"+r+"3"]=[0,0,e*16*o]})}function wi(t,e,o){let r=t-e;return r-=Math.round(r),Math.exp(-(r/o)*(r/o))}function nx(t){let e=9+20*Math.cos(2*Math.PI*t),o=4+13*wi(t,.14,.07)+57*wi(t,.72,.12),r=5*wi(t,.06,.04)-9*wi(t,.42,.12)+17*wi(t,.62,.05)-3*wi(t,.85,.1),n=-26*wi(t,.58,.06);return{hip:e,knee:o,ankle:r,toe:n}}function Uk(t){let e=(t%1+1)%1,o=nx(e),r=nx(e+.5),n=Math.cos(2*Math.PI*e),a=Math.sin(2*Math.PI*e);return{swing:{LeftArm:[16*n,0,0],RightArm:[-16*n,0,0],LeftForeArm:[0,-14-8*Math.max(0,-n),0],RightForeArm:[0,14+8*Math.max(0,n),0]},pose:{Hips:[0,5*a,1.5*Math.cos(4*Math.PI*e)],Spine1:[3,-4*a,0],LeftUpLeg:[-o.hip,0,0],LeftLeg:[o.knee,0,0],LeftFoot:[o.ankle,0,0],LeftToeBase:[o.toe,0,0],RightUpLeg:[-r.hip,0,0],RightLeg:[r.knee,0,0],RightFoot:[r.ankle,0,0],RightToeBase:[r.toe,0,0],LeftArm:[0,0,-78],RightArm:[0,0,78],LeftHand:[0,0,-8],RightHand:[0,0,8]},sway:.022*n}}var rx=`
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
}`,z1=fs(),ax=`#extension GL_OES_standard_derivatives : enable
precision highp float;
${np}
uniform float time;
${cx.roomGLSL()}
${z1.lanternGLSL(z1.TREE_LANTERN)}
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
${ix()}
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
}`;function Bk(t,e){let o=t.texture({data:[[[120,100,90,255]]],min:"linear",mag:"linear"});return fetch(e).then(r=>{if(!r.ok)throw new Error("Could not load "+e);return r.blob()}).then(r=>createImageBitmap(r,{premultiplyAlpha:"none"}).catch(()=>new Promise((n,a)=>{let s=new Image;s.onload=()=>n(s),s.onerror=a,s.src=URL.createObjectURL(r)}))).then(r=>o({data:r,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(r=>console.error(r)),o}var lx={w:.13,h:.2},_1=t=>.011*(1-Math.pow(1-t,3));function jk(){let t=[],e=[],o=[],r=[],n=[],a=(h,g,m,x,y,_,M)=>{let b=t.length/3;[h,g,m,x].forEach((S,z)=>{t.push(...S),e.push(...y),o.push(...M[z]),r.push(_)}),n.push(b,b+1,b+2,b,b+2,b+3)},{w:s,h:i}=lx,c=i/2,f=[[0,1],[1,1],[1,0],[0,0]],l=-.006,v=s+.001,d=c+.001;a([0,l,-d],[v,l,-d],[v,l,d],[0,l,d],[0,-1,0],1,[[0,1],[1,1],[1,0],[0,0]]),a([0,l+.001,-d],[0,l+.001,d],[v,l+.001,d],[v,l+.001,-d],[0,1,0],2,f),a([-v,l,-d],[0,l,-d],[0,l,d],[-v,l,d],[0,-1,0],2,f),a([-v,l+.001,-d],[-v,l+.001,d],[0,l+.001,d],[0,l+.001,-d],[0,1,0],2,f);let p=8;for(let h of[1,-1]){for(let m=0;m<p;m++){let x=m/p,y=(m+1)/p,_=(.002+x*(s-.002))*h,M=(.002+y*(s-.002))*h,b=_1(x),S=_1(y),z=h>0?x:1-x,k=h>0?y:1-y,C=1,R=-(S-b)/(M-_);a([_,b,-c],[M,S,-c],[M,S,c],[_,b,c],[R,C,0],3,[[z,1],[k,1],[k,0],[z,0]]),a([_,l+.001,c],[M,l+.001,c],[M,S,c],[_,b,c],[0,0,1],4,f),a([_,b,-c],[M,S,-c],[M,l+.001,-c],[_,l+.001,-c],[0,0,-1],4,f)}let g=s*h;a([g,l+.001,-c],[g,_1(1),-c],[g,_1(1),c],[g,l+.001,c],[h,0,0],4,f)}let u=10;for(let h=0;h<u;h++){let g=h/u,m=(h+1)/u,x=t.length/3;for(let[y,_]of[[g,-c],[m,-c],[m,c],[g,c]])t.push(y,0,_),e.push(0,1,0),o.push(y,(_+c)/i),r.push(5);n.push(x,x+1,x+2,x,x+2,x+3)}return{pos:t,nrm:e,uv:o,kind:r,idx:n}}function Wk(){if(typeof document=="undefined")return null;let t=document.createElement("canvas");t.width=512,t.height=768;let e=t.getContext("2d");e.fillStyle="#ebe5d8",e.fillRect(0,0,512,768);let o=7,r=()=>(o=o*16807%2147483647,o/2147483647),n=(s,i,c,f,l,v,d)=>{for(let p=0;p<v;p++){let u=s+(r()-.5)*c*2,h=i+(r()-.5)*f*2,g=20+r()*60,m=e.createRadialGradient(u,h,0,u,h,g);m.addColorStop(0,`rgba(${l},${d})`),m.addColorStop(1,`rgba(${l},0)`),e.fillStyle=m,e.fillRect(u-g,h-g,g*2,g*2)}},a=e.createRadialGradient(236,280,10,256,300,125);a.addColorStop(0,"#3d4866"),a.addColorStop(1,"#232a3d"),e.fillStyle=a,e.beginPath(),e.arc(256,300,122,0,Math.PI*2),e.fill(),e.fillStyle="#b8873f",e.beginPath(),e.moveTo(64,452);for(let s=64;s<=448;s+=16)e.lineTo(s,446+r()*4);for(let s=448;s>=64;s-=16)e.lineTo(s,466+r()*4);e.fill(),e.strokeStyle="#2b2f3a",e.lineCap="round",[[120,392,500,5],[160,352,530,4],[205,307,558,3]].forEach(([s,i,c,f])=>{e.lineWidth=f,e.beginPath(),e.moveTo(s,c),e.lineTo(i,c),e.stroke()});for(let s=0;s<9e3;s++)e.fillStyle=`rgba(90,80,60,${r()*.05})`,e.fillRect(r()*512,r()*768,1,1);return t}var Vk=`
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
		float r = u * ${lx.w.toFixed(3)};
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
}`,Xk=`
precision highp float;
${np}
uniform float time;
${z1.lanternGLSL(z1.TREE_LANTERN)}
uniform sampler2D cover;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_kind;
${ix()}
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
}`;function Yk(){let t=[],e=[],o=[],r=[],n=[],a=[.36,.11,.07],s=[.1,.07,.05],i=[.78,.76,.72],c=[.55,.41,.26],f=[.8,.55,.22],l=[[0,-.15,f,2],[.0012,-.147,f,2],[.004,-.138,f,2],[.0058,-.125,c,2],[.0064,-.112,c,2],[.006,-.104,c,2],[.0066,-.102,i,1],[.0066,-.08,i,1],[.0062,-.074,i,1],[.0068,-.072,i,1],[.007,-.066,i,1],[.0058,-.064,a,0],[.0062,-.04,a,0],[.0058,0,a,0],[.0046,.06,a,0],[.0036,.11,a,0],[.003,.13,s,0],[.0026,.136,s,0],[0,.139,s,0]],v=16;for(let d=0;d<l.length;d++){let[p,u,h,g]=l[d],m=g===2?.45:1;for(let x=0;x<=v;x++){let y=x/v*Math.PI*2;t.push(Math.cos(y)*p,u,Math.sin(y)*p*m);let _=Math.max(d-1,0),M=Math.min(d+1,l.length-1),b=l[M][0]-l[_][0],S=l[M][1]-l[_][1],z=Math.hypot(b,S)||1;e.push(Math.cos(y)*S/z,-b/z,Math.sin(y)*S/z/m),o.push(...h),r.push(g)}}for(let d=0;d<l.length-1;d++)for(let p=0;p<v;p++){let u=d*(v+1)+p,h=u+v+1;n.push(u,h,u+1,u+1,h,h+1)}return{pos:t,nrm:e,col:o,mat:r,idx:n}}var Kk=`
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
}`,Zk=`
precision highp float;
${np}
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
}`,Qk=`
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
}`,Jk=`
precision highp float;
uniform float pulse;
varying vec2 v_c;
void main() {
	float d = length(v_c);
	float g = exp(-d * d * 6.0) * 0.10 + exp(-d * d * 30.0) * 0.08;
	gl_FragColor = vec4(vec3(1.0, 0.80, 0.45) * g * (0.75 + 0.25 * pulse), 1.0);
}`;ap.exports=t=>{let e="res/avatar/",o=null,r=Date.now(),n=()=>typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-r)/1e3,a={glowPos:[_i.x,1.9,_i.z],glow:0};Promise.all([fetch(e+"avatar.json").then(k=>k.json()),fetch(e+"avatar.bin").then(k=>k.arrayBuffer())]).then(([k,C])=>{o=f(k,C)}).catch(k=>console.error(k));let s=null;Promise.all([fetch(e+"motion.json").then(k=>k.ok?k.json():null),fetch(e+"motion.bin").then(k=>k.ok?k.arrayBuffer():null)]).then(([k,C])=>{if(!k||!C)return;let R={};for(let U in k.clips){let P=k.clips[U],q=P.bones.length,at=new Float32Array(C,P.mean,q*4),St={};P.bones.forEach((yt,mt)=>{St[yt]=[at[mt*4],at[mt*4+1],at[mt*4+2],at[mt*4+3]]}),R[U]=Object.assign({},P,{Q:new Int16Array(C,P.q,P.frames*q*4),H:new Float32Array(C,P.hips,P.frames*3),meanQ:St})}s=R}).catch(()=>{});function i(k,C){let R=k.frames,U=k.bones.length,P=(C%R+R)%R,q=Math.floor(P)%R,at=(q+1)%R,St=P-Math.floor(P),yt={};for(let It=0;It<U;It++){let se=(q*U+It)*4,Ee=(at*U+It)*4,Qe=k.Q[se],me=k.Q[se+1],qe=k.Q[se+2],Ge=k.Q[se+3],Q=k.Q[Ee],j=k.Q[Ee+1],ft=k.Q[Ee+2],xt=k.Q[Ee+3];Qe*Q+me*j+qe*ft+Ge*xt<0&&(Q=-Q,j=-j,ft=-ft,xt=-xt),yt[k.bones[It]]=rp([Qe+(Q-Qe)*St,me+(j-me)*St,qe+(ft-qe)*St,Ge+(xt-Ge)*St])}let mt=q*3,zt=at*3;return{q:yt,hips:[k.H[mt]+(k.H[zt]-k.H[mt])*St,k.H[mt+1]+(k.H[zt+1]-k.H[mt+1])*St,k.H[mt+2]+(k.H[zt+2]-k.H[mt+2])*St]}}let c=t.texture({data:[[[255,255,255,255]]]});function f(k,C){let R=(et,jt)=>new Float32Array(C,et,jt),U=k.bones,P=U.length,q={};U.forEach((et,jt)=>{q[et.name]=jt});let at=[];for(let et=0;et<P;et++)at.push(Array.from(R(k.ibm+et*64,16)));let St=U.map(et=>Er(et.t,et.r,et.s)),yt=[];for(let et=0;et<P;et++){let jt=U[et].parent;yt[et]=jt<0?St[et]:hn(yt[jt],St[et])}let mt=yt.map(ep),zt=k.meshes.map(et=>{let jt=R(et.pos,et.n*3),Yt=R(et.nrm,et.n*3),Ft=R(et.uv,et.n*2),Ae=new Uint8Array(C,et.jnt,et.n*4),Xe=R(et.wgt,et.n*4),We=new Uint16Array(C,et.idx,et.ni),Ce={};for(let kt in et.morphs){let Jt=et.morphs[kt];Ce[kt]={idx:new Uint16Array(C,Jt.idx,Jt.n),d:R(Jt.d,Jt.n*3)}}let eo=new Float32Array(et.n*3),He=new Float32Array(et.n*3),go=new Float32Array(et.n*3),Ve=t.buffer({data:eo,usage:"dynamic"}),ot=t.buffer({data:He,usage:"dynamic"}),gt=/avaturn_hair/.test(et.name),tt=/EyeAO|Eyelash/.test(et.name),pe=/Body|Head/.test(et.name),ge=et.kind||0;return{m:et,pos:jt,nrm:Yt,uv:Ft,jnt:Ae,wgt:Xe,idx:We,morphs:Ce,outP:eo,outN:He,work:go,pb:Ve,nbuf:ot,tex:et.tex?Bk(t,e+et.tex):c,kind:ge,alphaScale:/EyeAO/.test(et.name)?.25:1,blend:et.blend||gt,alphaCut:gt?.35:tt?.02:0,skin:pe?1:0}}),It=t({vert:rx,frag:ax,attributes:{position:t.prop("pb"),normal:t.prop("nb"),uv:t.prop("uv")},elements:t.prop("el"),uniforms:{tex:t.prop("tex"),alphaCut:t.prop("alphaCut"),skin:t.prop("skin"),kind:t.prop("kind"),alphaScale:t.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow,boothLamp:()=>b&&!S?b.lamp:[0,0,0,0],court:()=>b||S?0:1,candle:()=>S?1:0},cull:{enable:!1}}),se=t({vert:rx,frag:ax,attributes:{position:t.prop("pb"),normal:t.prop("nb"),uv:t.prop("uv")},elements:t.prop("el"),uniforms:{tex:t.prop("tex"),alphaCut:t.prop("alphaCut"),skin:t.prop("skin"),kind:t.prop("kind"),alphaScale:t.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow,boothLamp:()=>b&&!S?b.lamp:[0,0,0,0],court:()=>b||S?0:1,candle:()=>S?1:0},cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"one minus src alpha"}}}),Ee=.3;for(let et of zt)if(et.uvBuf=t.buffer(et.uv),/Body/.test(et.m.name)){let jt=[],Yt=[];for(let Ft=0;Ft<et.idx.length;Ft+=3){let Ae=et.idx[Ft],Xe=et.idx[Ft+1],We=et.idx[Ft+2];(et.pos[Ae*3+1]<Ee&&et.pos[Xe*3+1]<Ee&&et.pos[We*3+1]<Ee?Yt:jt).push(Ae,Xe,We)}et.el=t.elements({data:new Uint16Array(jt),type:"uint16"}),Yt.length&&(et.sockEl=t.elements({data:new Uint16Array(Yt),type:"uint16"}))}else et.el=t.elements({data:et.idx,type:"uint16"});let Qe=yt[q.Hips],me=zs([1,0,0],-Math.PI/2),qe=hn(Er([_i.x-Qe[12]*Gn,_i.hipY-Qe[14]*Gn,_i.z+Qe[13]*Gn],me,[1,1,1]),Er([0,0,0],[0,0,0,1],[Gn,Gn,Gn])),Ge=new Array(P),Q=-1,j=(et,jt,Yt)=>hn(Er([et,0,jt],zs([0,1,0],Yt),[1,1,1]),Er([0,0,0],[0,0,0,1],[Gn,Gn,Gn])),ft=["LeftFoot","RightFoot","LeftToeBase","RightToeBase"].map(et=>q[et]),xt=ft.map(et=>yt[et][13]*Gn);function Qt(et){if(s&&s.walk)return ce(et);let jt=Uk(et.phase),Yt={},Ft=He=>{for(let go in He){let Ve=He[go],ot=w1(Ve[0],Ve[1],Ve[2]);Yt[go]=Yt[go]?v0(Yt[go],ot):ot}};Ft(jt.swing),Ft(jt.pose);let Ae=Math.cos(et.heading),Xe=-Math.sin(et.heading),We=j(et.x+Ae*jt.sway,et.z+Xe*jt.sway,et.heading),Ce=new Array(P);for(let He=0;He<P;He++){let go=U[He],Ve=St[He],ot=Yt[go.name];if(ot){let gt=mt[He],tt=v0(fa(gt),v0(ot,gt));Ve=Er(go.t,v0(go.r,tt),go.s)}Ce[He]=go.parent<0?hn(We,Ve):hn(Ce[go.parent],Ve)}let eo=1/0;ft.forEach((He,go)=>{eo=Math.min(eo,Ce[He][13]-xt[go])});for(let He=0;He<P;He++)Ce[He]=Ce[He].slice(),Ce[He][13]-=eo,Ge[He]=hn(Ce[He],at[He]);return{blink:0}}function ce(et){let jt=s.walk,Yt=i(jt,(et.phase+jt.phase0)*jt.frames),Ft=j(et.x,et.z,et.heading),Ae=new Array(P),Xe=q.Hips;for(let Ce=0;Ce<P;Ce++){let eo=U[Ce],He=St[Ce],go=Yt.q[eo.name];if(go){let Ve=mt[Ce],ot=v0(fa(Ve),v0(go,Ve)),gt=Ce===Xe?[eo.t[0]+Yt.hips[0],eo.t[1]+Yt.hips[1],eo.t[2]+Yt.hips[2]]:eo.t;He=Er(gt,v0(eo.r,ot),eo.s)}Ae[Ce]=eo.parent<0?hn(Ft,He):hn(Ae[eo.parent],He)}let We=1/0;ft.forEach((Ce,eo)=>{We=Math.min(We,Ae[Ce][13]-xt[eo])});for(let Ce=0;Ce<P;Ce++)Ae[Ce]=Ae[Ce].slice(),Ae[Ce][13]-=We,Ge[Ce]=hn(Ae[Ce],at[Ce]);return{blink:0}}function Kt(et,jt){let Yt=Math.sin(et*2*Math.PI/4.6),Ft=Math.sin(et*.37)*.6+Math.sin(et*.83+1)*.4,Ae={LeftUpLeg:[-86,-6,0],RightUpLeg:[-84,7,0],LeftLeg:[88,0,0],RightLeg:[82,0,0],LeftFoot:[-4,0,0],RightFoot:[-2,0,0],Spine:[6,0,0],Spine1:[5+Yt*.8,0,0],Spine2:[4+Yt*.6,0,0],Neck:[10,0,0],Head:[12+Ft*2,Ft*2.5,0],LeftArm:[0,0,-72],RightArm:[0,0,72],LeftForeArm:[0,-62,0],RightForeArm:[0,62,0],LeftHand:[0,0,-10],RightHand:[0,0,10]},Xe={};for(let Ve in Ae){let ot=Ae[Ve];Xe[Ve]=w1(ot[0],ot[1],ot[2])}let We=j(jt.x,jt.z,jt.heading),Ce=new Array(P);for(let Ve=0;Ve<P;Ve++){let ot=U[Ve],gt=St[Ve],tt=Xe[ot.name];if(tt){let pe=mt[Ve],ge=v0(fa(pe),v0(tt,pe));gt=Er(ot.t,v0(ot.r,ge),ot.s)}Ce[Ve]=ot.parent<0?hn(We,gt):hn(Ce[ot.parent],gt)}let He=Ce[q.Hips][13]-(jt.y+.1);for(let Ve=0;Ve<P;Ve++)Ce[Ve]=Ce[Ve].slice(),Ce[Ve][13]-=He,Ge[Ve]=hn(Ce[Ve],at[Ve]);let go=et%4.1;return{blink:go<.16?Math.sin(go/.16*Math.PI):0}}let qt=et=>[yt[et][12],yt[et][13],yt[et][14]],rt=(et,jt)=>{let Yt=bf(et),Ft=bf(Ea(jt,ks(Yt,op(jt,Yt)))),Ae=k1(Yt,Ft);return ep([Yt[0],Yt[1],Yt[2],0,Ft[0],Ft[1],Ft[2],0,Ae[0],Ae[1],Ae[2],0,0,0,0,1])},Ct={};for(let et of["Left","Right"]){let jt=q[et+"Arm"],Yt=q[et+"ForeArm"],Ft=q[et+"Hand"],Ae=q[et+"HandMiddle1"];Ct[et]={a:jt,f:Yt,h:Ft,upper:M1(Ea(qt(Yt),qt(jt)))*Gn,fore:M1(Ea(qt(Ft),qt(Yt)))*Gn,dir0:bf(Ea(qt(Yt),qt(jt))),qf0:rt(Ea(qt(Ft),qt(Yt)),[0,1,0]),qh0:rt(Ea(qt(Ae),qt(Ft)),[0,1,0])}}let we={};for(let et of["Left","Right"])we[Ct[et].a]={side:et,part:0},we[Ct[et].f]={side:et,part:1},we[Ct[et].h]={side:et,part:2};function te(et,jt,Yt){if(!et||!et.length)return{x:.5,lift:0,press:0,finger:1,busy:0};let Ft=0,Ae=et.length-1,Xe=-1;for(;Ft<=Ae;){let Jt=Ft+Ae>>1;et[Jt].t<=jt?(Xe=Jt,Ft=Jt+1):Ae=Jt-1}let We=et[et.length-1],Ce=et[0],eo=Xe>=0?et[Xe]:{t:We.t-Yt,x:We.x,w:We.w},He=Xe+1<et.length?et[Xe+1]:{t:Ce.t+Yt,x:Ce.x,w:Ce.w},go=Math.max(.05,He.t-eo.t),Ve=Math.min(.14,go*.45),ot=Math.max(0,Math.min(1,(jt-eo.t-Ve)/Math.max(go-Ve-.03,.02))),gt=ot*ot*(3-2*ot),tt=jt-eo.t,pe=(.55+.45*eo.w)*Math.exp(-tt/.11),ge=He.t-jt,kt=ge<.05?(.55+.45*He.w)*(1-ge/.05):0;return{x:eo.x+(He.x-eo.x)*gt,lift:Math.sin(Math.PI*ot)*Math.min(.05,.012+go*.03)*(go>2.5?.4:1),press:Math.max(pe,kt),finger:kt>pe?((Xe+1)*7+3)%4:(Math.max(Xe,0)*7+3)%4,busy:Math.exp(-tt/.9)}}let Nt={lean:0,turn:0,nod:0,pedal:0,last:-1},$e=["Index","Middle","Ring","Pinky"];function E(et){let jt=cx.PLAY,Yt=ox.cues,Ft=ox.time(),Ae=Yt&&Yt.dur||158,Xe={Left:te(Yt&&Yt.left,Ft,Ae),Right:te(Yt&&Yt.right,Ft,Ae)},We=.35;if(Yt&&Yt.level&&Yt.level.length){let ze=Ft*8,Ue=Math.floor(ze)%Yt.level.length,$o=(Ue+1)%Yt.level.length;We=Yt.level[Ue]+(Yt.level[$o]-Yt.level[Ue])*(ze-Math.floor(ze))}let Ce=Nt.last<0?0:Math.min(.1,Math.max(0,et-Nt.last));Nt.last=et;let eo=ze=>Math.min(1,Ce*ze);Nt.lean+=(We-Nt.lean)*eo(1.2),Nt.turn+=(Xe.Right.busy-Xe.Left.busy-Nt.turn)*eo(1.5),Nt.nod+=(Math.max(Xe.Right.press,Xe.Left.press*.7)-Nt.nod)*eo(6),Nt.pedal+=((Xe.Left.busy>.35?1:.15)-Nt.pedal)*eo(5);let He=Math.sin(et*2*Math.PI/4.6),go=Math.sin(Ft*.41)*.6+Math.sin(Ft*.17+1)*.4,Ve={LeftUpLeg:[-80,-9,0],RightUpLeg:[-77,9,0],LeftLeg:[86,0,0],RightLeg:[64,0,0],LeftFoot:[-2,0,0],RightFoot:[12-10*Nt.pedal,0,0],Spine:[9+3.5*Nt.lean+go*1.6,Nt.turn*2.5,-Nt.turn*1.6],Spine1:[7+He*.8+2.5*Nt.lean,Nt.turn*2.5,-Nt.turn*1.2],Spine2:[6+He*.6+go*.8,Nt.turn*1.5,0],Neck:[13+3*Nt.lean,Nt.turn*3,0],Head:[15+Nt.nod*3.5+go*1.5,Nt.turn*5,go*1.5]};for(let ze of["Left","Right"]){let Ue=ze==="Left"?-1:1,$o=Xe[ze];$e.forEach((W,pt)=>{let Wt=pt===$o.finger?$o.press:$o.press*.2;Ve[ze+"Hand"+W+"1"]=[0,0,Ue*(20+3*pt+20*Wt)],Ve[ze+"Hand"+W+"2"]=[0,0,Ue*(26+4*pt-6*Wt)],Ve[ze+"Hand"+W+"3"]=[0,0,Ue*14]}),Ve[ze+"HandThumb1"]=[0,Ue*-18,Ue*10]}let ot={};for(let ze in Ve){let Ue=Ve[ze];ot[ze]=w1(Ue[0],Ue[1],Ue[2])}let gt=yt[q.Hips][13]*Gn,tt=hn(Er([jt.stoolX,jt.stoolTop+.1-gt,jt.stoolFront+.15],zs([0,1,0],jt.heading),[1,1,1]),Er([0,0,0],[0,0,0,1],[Gn,Gn,Gn])),pe=(jt.keyX0+jt.keyX1)/2,ge={};for(let ze of["Left","Right"]){let Ue=Xe[ze],$o=ze==="Left"?pe-.4+.33*Ue.x:pe+.07+.33*Ue.x;ge[ze]=[$o,jt.keyTop+.062+Ue.lift-Ue.press*.012,jt.keyFront+.075]}let kt=new Array(P),Jt={},Ye=[0,1,0];for(let ze=0;ze<P;ze++){let Ue=U[ze],$o=St[ze],W=ot[Ue.name],pt=we[ze];if(pt){let Wt=Ct[pt.side];if(pt.part===0){let ne=kt[Ue.parent],Zt=hn(ne,St[ze]),Mo=[Zt[12],Zt[13],Zt[14]],xo=v0(ep(ne),fa(mt[Ue.parent])),Po=Ea(ge[pt.side],Mo),co=M1(Po),So=(Wt.upper+Wt.fore)*.995;co>So&&(Po=ks(Po,So/co),co=So);let no=ks(Po,1/co),Fe=(Wt.upper*Wt.upper-Wt.fore*Wt.fore+co*co)/(2*co),g0=Math.sqrt(Math.max(0,Wt.upper*Wt.upper-Fe*Fe)),zo=[pt.side==="Left"?-.6:.6,-.8,.3];zo=bf(Ea(zo,ks(no,op(zo,no))));let en=wf(Mo,wf(ks(no,Fe),ks(zo,g0)));Wt.T=wf(Mo,Po),Wt.elbow=en;let rr=bf(Ea(en,Mo)),ar=v0(Hk(Gk(xo,Wt.dir0),rr),xo);Jt[ze]=ar,W=v0(fa(xo),ar)}else if(pt.part===1){let ne=v0(rt(Ea(Wt.T,Wt.elbow),Ye),fa(Wt.qf0));Jt[ze]=ne,W=v0(fa(Jt[Ue.parent]),ne)}else{let ne=Xe[pt.side],Zt=v0(rt([pt.side==="Left"?.12:-.12,-.2-.1*ne.press,-1],Ye),fa(Wt.qh0));Jt[ze]=Zt,W=v0(fa(Jt[Ue.parent]),Zt)}}if(W){let Wt=mt[ze],ne=v0(fa(Wt),v0(W,Wt));$o=Er(Ue.t,v0(Ue.r,ne),Ue.s)}kt[ze]=Ue.parent<0?hn(tt,$o):hn(kt[Ue.parent],$o)}for(let ze=0;ze<P;ze++)Ge[ze]=hn(kt[ze],at[ze]);a.pianist={head:[kt[q.Head][12],kt[q.Head][13],kt[q.Head][14]]};let oo=et%4.3;return{blink:oo<.16?Math.sin(oo/.16*Math.PI):0}}function De(et,jt){if(S)return E(et);if(b)return Kt(et,b);if(jt)return Qt(jt);let Yt=Math.sin(et*2*Math.PI/4.2),Ft=et%3.7,Ae=Ft<.16?Math.sin(Ft/.16*Math.PI):0,Xe=Math.sin(et*.45),We=Math.sin(et*.31+.8),Ce=Math.max(0,Math.sin(et*.085)-.75)*4,eo={RightArm:[0,-22*Ce,11*Xe],RightForeArm:[0,8+26*Ce,0],RightHand:[38*We,0,6*Math.sin(et*.7)],LeftUpLeg:[0,0,3.2*Math.sin(et*.36)],RightFoot:[5*Math.sin(et*.52+.4),0,0],Head:[0,1.6*Math.sin(et*.21),0]};["Index","Middle","Ring","Pinky"].forEach((tt,pe)=>{let ge=Math.sin(et*1.1-pe*.5);eo["RightHand"+tt+"1"]=[0,0,8+12*ge],eo["RightHand"+tt+"2"]=[0,0,6+10*ge]});let He={},go=(tt,pe)=>{for(let ge in tt){let kt=tt[ge],Jt=w1(kt[0]*pe,kt[1]*pe,kt[2]*pe);He[ge]=He[ge]?v0(He[ge],Jt):Jt}};go(S1,1),go({Spine1:[Yt*.8,0,0],Spine2:[Yt*.6,0,0]},1),go(eo,1);let Ve=new Array(P),ot=new Array(P);for(let tt=0;tt<P;tt++){let pe=U[tt],ge=St[tt],kt=He[pe.name];if(kt){let Jt=mt[tt],Ye=v0(fa(Jt),v0(kt,Jt));ge=Er(pe.t,v0(pe.r,Ye),pe.s)}Ve[tt]=pe.parent<0?hn(qe,ge):hn(Ve[pe.parent],ge),ot[tt]=null}for(let tt=0;tt<P;tt++)Ge[tt]=hn(Ve[tt],at[tt]);let gt=tt=>[tt[12],tt[13],tt[14]];return a.headPos=gt(Ve[q.Head]),a.hipsPos=gt(Ve[q.Hips]),a.headM=Ve[q.Head],{blink:Ae}}function je(et,jt){let{pos:Yt,nrm:Ft,jnt:Ae,wgt:Xe,outP:We,outN:Ce,work:eo,m:He}=et,go=He.n,Ve=Yt;if(jt){eo.set(Yt);for(let ot in et.morphs){let gt=jt[ot]||0;if(gt<=0)continue;let tt=et.morphs[ot];for(let pe=0;pe<tt.idx.length;pe++){let ge=tt.idx[pe]*3;eo[ge]+=tt.d[pe*3]*gt,eo[ge+1]+=tt.d[pe*3+1]*gt,eo[ge+2]+=tt.d[pe*3+2]*gt}}Ve=eo}for(let ot=0;ot<go;ot++){let gt=Ve[ot*3],tt=Ve[ot*3+1],pe=Ve[ot*3+2],ge=Ft[ot*3],kt=Ft[ot*3+1],Jt=Ft[ot*3+2],Ye=0,oo=0,ze=0,Ue=0,$o=0,W=0;for(let Wt=0;Wt<4;Wt++){let ne=Xe[ot*4+Wt];if(ne===0)continue;let Zt=Ge[Ae[ot*4+Wt]];Ye+=ne*(Zt[0]*gt+Zt[4]*tt+Zt[8]*pe+Zt[12]),oo+=ne*(Zt[1]*gt+Zt[5]*tt+Zt[9]*pe+Zt[13]),ze+=ne*(Zt[2]*gt+Zt[6]*tt+Zt[10]*pe+Zt[14]),Ue+=ne*(Zt[0]*ge+Zt[4]*kt+Zt[8]*Jt),$o+=ne*(Zt[1]*ge+Zt[5]*kt+Zt[9]*Jt),W+=ne*(Zt[2]*ge+Zt[6]*kt+Zt[10]*Jt)}We[ot*3]=Ye,We[ot*3+1]=oo,We[ot*3+2]=ze;let pt=Math.hypot(Ue,$o,W)||1;Ce[ot*3]=Ue/pt,Ce[ot*3+1]=$o/pt,Ce[ot*3+2]=W/pt}He.grid&&!Oo&&!b&&!S&&lo(et),et.sway&&tn(et),et.pb.subdata(We),et.nbuf.subdata(Ce)}function lo(et){let[jt,Yt]=et.m.grid,Ft=et.outP,Ae=et.outN,Xe=sx.seat+.012;for(let We=1;We<jt;We++){let Ce=Math.pow(1-We/(jt-1),1.5);for(let eo=0;eo<Yt;eo++){let He=(We*Yt+eo)*3;Ft[He+1]>Xe?Ft[He+1]=Xe+(Ft[He+1]-Xe)*Math.max(Ce,.15):Ft[He+1]=Xe}}for(let We=0;We<Ae.length;We+=3)Ae[We]=0,Ae[We+1]=1,Ae[We+2]=0}let Oo=!1,_o=(et,jt,Yt,Ft,Ae)=>({bone:q[et],rate:jt,damp:Yt,drag:Ft,most:Ae,x:[0,0,0],v:[0,0,0],p:null,vel:[0,0,0]}),Fo={head:_o("Head",15,.32,.012,.035),chest:_o("Spine2",9,.38,.03,.1),hips:_o("Hips",7,.42,.045,.16)},qo=-1;function s0(et){let jt=qo<0?0:et-qo;qo=et;for(let Yt in Fo){let Ft=Fo[Yt],Ae=Ge[Ft.bone],Xe=yt[Ft.bone],We=Xe[12],Ce=Xe[13],eo=Xe[14],He=[Ae[0]*We+Ae[4]*Ce+Ae[8]*eo+Ae[12],Ae[1]*We+Ae[5]*Ce+Ae[9]*eo+Ae[13],Ae[2]*We+Ae[6]*Ce+Ae[10]*eo+Ae[14]];if(!Ft.p||!(jt>0)||jt>.25||Math.hypot(He[0]-Ft.p[0],He[1]-Ft.p[1],He[2]-Ft.p[2])>.5){Ft.p=He,Ft.x=[0,0,0],Ft.v=[0,0,0],Ft.vel=[0,0,0];continue}let go=[(He[0]-Ft.p[0])/jt,(He[1]-Ft.p[1])/jt,(He[2]-Ft.p[2])/jt],Ve=Math.max(1,Math.ceil(jt/.016)),ot=jt/Ve;for(let tt=0;tt<3;tt++){let pe=Math.max(-30,Math.min(30,(go[tt]-Ft.vel[tt])/jt)),ge=-go[tt]*Ft.drag;for(let kt=0;kt<Ve;kt++)Ft.v[tt]+=((ge-Ft.x[tt])*Ft.rate*Ft.rate-2*Ft.damp*Ft.rate*Ft.v[tt]-pe)*ot,Ft.x[tt]+=Ft.v[tt]*ot}let gt=Math.hypot(Ft.x[0],Ft.x[1],Ft.x[2]);if(gt>Ft.most){let tt=Ft.most/gt;Ft.x=[Ft.x[0]*tt,Ft.x[1]*tt,Ft.x[2]*tt]}Ft.p=He,Ft.vel=go}}for(let et of zt){let jt=et.m,Yt=jt.n,Ft=null,Ae=null;if(jt.kind===9){Ae="head",Ft=new Float32Array(Yt);for(let Xe=0;Xe<Yt;Xe++){let We=et.uv[Xe*2]<-.5?0:et.uv[Xe*2+1];Ft[Xe]=We*We}}else if(jt.name==="scarf"){Ae="chest",Ft=new Float32Array(Yt);for(let Xe=0;Xe<Yt;Xe++)Ft[Xe]=l(1.52,1.12,et.pos[Xe*3+1])}else if(jt.grid){Ae="hips",Ft=new Float32Array(Yt);let Xe=jt.grid[0],We=jt.grid[1];for(let Ce=0;Ce<Yt;Ce++)Ft[Ce]=Math.pow(Math.floor(Ce/We)/(Xe-1),1.6)}Ft&&(et.sway=Ft,et.spring=Fo[Ae],et.loose=Ae)}function tn(et){if(!Oo&&!S&&!b)return;let jt=et.spring.x,Yt=et.sway,Ft=et.outP;if(!(Math.abs(jt[0])+Math.abs(jt[1])+Math.abs(jt[2])<1e-5))for(let Ae=0,Xe=Yt.length;Ae<Xe;Ae++){let We=Yt[Ae];We>0&&(Ft[Ae*3]+=jt[0]*We,Ft[Ae*3+1]+=jt[1]*We,Ft[Ae*3+2]+=jt[2]*We)}}function yr(et,jt){Oo=!!jt;let Yt=De(et,jt);s0(et);let Ft={eyeBlinkLeft:Yt.blink,eyeBlinkRight:Yt.blink};for(let Ae of zt)je(Ae,Object.keys(Ae.morphs).length?Ft:null);a.pose=Yt}return{parts:zt,update:yr,drawOpaque:It,drawBlend:se,state:a}}function l(k,C,R){let U=Math.min(1,Math.max(0,(R-k)/(C-k)));return U*U*(3-2*U)}let v=jk(),d=Wk(),p=d?t.texture({data:d,flipY:!1,min:"linear",mag:"linear"}):c,u=t({vert:Vk,frag:Xk,attributes:{position:v.pos,normal:v.nrm,uv:v.uv,kind:v.kind},elements:new Uint16Array(v.idx),uniforms:{model:t.prop("model"),turn:0,fold:1.12,cover:p},cull:{enable:!1}}),h=Yk(),g=t({vert:Kk,frag:Zk,attributes:{position:h.pos,normal:h.nrm,color:h.col,mat:h.mat},elements:new Uint16Array(h.idx),uniforms:{model:t.prop("model"),pulse:t.prop("pulse")},cull:{enable:!1}}),m=t({vert:Qk,frag:Jk,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{center:t.prop("center"),size:t.prop("size"),pulse:t.prop("pulse")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});function x(k){let C=k.headM,R=zt=>{let It=Math.hypot(...zt)||1;return zt.map(se=>se/It)},U=R([C[4],C[5],C[6]]),P=R([C[8],C[9],C[10]]),q=U,at=P.map(zt=>-zt),St=[at[1]*q[2]-at[2]*q[1],at[2]*q[0]-at[0]*q[2],at[0]*q[1]-at[1]*q[0]],yt=k.headPos,mt=[0,1,2].map(zt=>yt[zt]+U[zt]*.06+P[zt]*.185);return[St[0],St[1],St[2],0,at[0],at[1],at[2],0,q[0],q[1],q[2],0,mt[0],mt[1],mt[2],1]}let y=-1,_="",M=null,b=null,S=!1;function z(k){if(!o)return;let C=(ex.motion,n()),R=M?[M.x,M.z,M.heading,M.phase].map(P=>P.toFixed(4)).join():"";(b||S||R!==_||!M&&Math.abs(C-y)>(ex.isPhone?1/30:0))&&(o.update(C,M),y=C,_=R);for(let P of o.parts)P.blend||(o.drawOpaque({pb:P.pb,nb:P.nbuf,uv:P.uvBuf,el:P.el,tex:P.tex,alphaCut:P.alphaCut,skin:P.skin,kind:P.kind,alphaScale:P.alphaScale}),P.sockEl&&o.drawOpaque({pb:P.pb,nb:P.nbuf,uv:P.uvBuf,el:P.sockEl,tex:c,alphaCut:0,skin:0,kind:8,alphaScale:1}));let U=o.state;if(U.headM&&!M&&!b&&!S){u({model:x(U)});let P=U.headPos,q=Math.sin(C*1.3)*.02,at=[P[0],P[1]+.62+q,P[2]+.05],St=C*.6,yt=Er(at,v0(zs([0,1,0],St),zs([0,0,1],.18)),[1.2,1.2,1.2]),mt=.5+.5*Math.sin(C*2);g({model:yt,pulse:mt}),a.glowPos=at,a.glow=.06+.03*mt,m({center:[at[0],at[1]-.12,at[2]],size:.1,pulse:mt})}for(let P of o.parts)P.blend&&o.drawBlend({pb:P.pb,nb:P.nbuf,uv:P.uvBuf,el:P.el,tex:P.tex,alphaCut:P.alphaCut,skin:P.skin,kind:P.kind,alphaScale:P.alphaScale})}return z.state=a,z.place=_i,z.setWalk=k=>{M=k||null,M&&(a.glow=0)},z.setSeat=k=>{b=k||null,a.glow=b?0:a.glow,y=-1},z.setPiano=k=>{k=!!k,k!==S&&(S=k,S&&(a.glow=0),y=-1)},z};ap.exports.PLACE=_i});var sp=Tt((jA,hx)=>{"use strict";hx.exports={name:"Muzammil",title:"Hi, I\u2019m Muzammil.",text:`I\u2019m a self-taught artist. I paint emotions. Grief, longing, love, and the quiet ways we keep holding on. I borrow the light and stillness of the Renaissance to talk about very modern feelings.

This gallery is my portfolio, built brick by pixel, so my work has a home that never closes. Every painting comes with a few words, because some feelings need both a frame and a sentence.

You\u2019ll find me in the tree court, catching sunlight and trying not to get too absorbed. Wander the halls, stay as long as you like, and don\u2019t worry about the time. In here, the only thing that\u2019s drying is the paint.`}});var cp=Tt((WA,gx)=>{"use strict";var vx=qr(),ux=Ol(),Es=t=>String(t).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function ip(){return vx.isPhone||!window.matchMedia||!window.matchMedia("(pointer: fine)").matches?!1:window.innerWidth>=900&&window.innerHeight>=520}var t7=`
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
`,dx=!1;function mx(){if(dx)return;dx=!0;let t=document.createElement("style");t.textContent=t7,document.head.appendChild(t)}var e7='<svg class="visit-play" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="10.2"/><path d="M10 8.4l6 3.6-6 3.6z" fill="currentColor" stroke="none"/></svg>';function o7(t){return!t||!t.visit||!ip()?"":(mx(),`<button type="button" class="visit-btn" data-visit="${Es(t.slug||"")}" aria-label="Visit what remained: watch ${Es(t.title)} come to life">${e7}<span>Visit what remained</span></button>`)}function n7(t){let e=t.getContext("2d");t.width=t.height=160;let o=e.createImageData(160,160),r=!0,n=0;return function a(s){if(r){if(s-n>70){n=s;let i=o.data;for(let c=0;c<i.length;c+=4){let f=Math.random()*255;i[c]=i[c+1]=i[c+2]=f,i[c+3]=255}e.putImageData(o,0,0),t.style.transform=`translate(${(Math.random()*6-3).toFixed(1)}%, ${(Math.random()*6-3).toFixed(1)}%)`}requestAnimationFrame(a)}}(0),()=>{r=!1}}var _f=null;function r7(t){if(_f||!t||!t.visit)return;mx();let e=document.activeElement;document.body.classList.add("visiting");let o="images/web/"+t.slug+(vx.isPhone?"-1024":"")+".webp",r=document.createElement("div");r.className="visit",r.setAttribute("role","dialog"),r.setAttribute("aria-modal","true"),r.setAttribute("aria-label","Visiting "+t.title),r.innerHTML=`
		<video muted playsinline preload="auto" ${t.visit.poster?`poster="${Es(t.visit.poster)}"`:""}></video>
		<img class="visit-art" alt="${Es(t.title)}, ${Es(ux(t))}" src="${Es(o)}">
		<canvas class="visit-grain" aria-hidden="true"></canvas>
		<div class="visit-vignette" aria-hidden="true"></div>
		<div class="visit-bar top" aria-hidden="true"></div>
		<div class="visit-bar bottom" aria-hidden="true"></div>
		<div class="visit-title">
			<span class="visit-kicker">A visit</span>
			<span class="visit-name">${Es(t.title)}</span>
			<span class="visit-meta">${Es(ux(t))}</span>
		</div>
		<button type="button" class="visit-close" aria-label="Return to the gallery">\xD7</button>
		<button type="button" class="visit-skip">Skip</button>
		<div class="visit-end">
			<button type="button" class="primary" data-act="back">Return to the gallery</button>
			<button type="button" data-act="again">Watch again</button>
		</div>`,document.body.appendChild(r);let n=r.querySelector("video"),a=r.querySelector(".visit-title"),s=n7(r.querySelector(".visit-grain")),i=[],c=(g,m)=>i.push(setTimeout(g,m)),f=g=>g.stopPropagation();["mousedown","pointerdown","click","wheel","touchstart","touchmove"].forEach(g=>r.addEventListener(g,f));let l=g=>{g.key==="Escape"?(g.preventDefault(),h()):g.key===" "&&!(g.target&&g.target.tagName==="BUTTON")&&(g.preventDefault(),p()),g.stopImmediatePropagation()};window.addEventListener("keydown",l,!0);let v=g=>g.stopImmediatePropagation();window.addEventListener("keyup",v,!0);let d=!1;function p(){d||(d=!0,a.classList.add("on"),r.classList.add("resolved"),c(()=>{let g=r.querySelector('[data-act="back"]');g&&g.focus({preventScroll:!0})},1300))}function u(){d=!1,r.classList.remove("resolved"),a.classList.remove("on");try{n.currentTime=0}catch(m){}let g=n.play();g&&g.catch&&g.catch(()=>p()),r.classList.add("playing"),c(()=>{d||a.classList.add("on")},1600),c(()=>{d||a.classList.remove("on")},6200)}n.addEventListener("timeupdate",()=>{n.duration&&n.currentTime>n.duration-1.2&&p()}),n.addEventListener("ended",p),n.addEventListener("error",p);function h(){if(_f){_f=null,i.forEach(clearTimeout),r.classList.remove("on");try{n.pause()}catch(g){}window.removeEventListener("keydown",l,!0),window.removeEventListener("keyup",v,!0),document.body.classList.remove("visiting"),setTimeout(()=>{s(),r.remove(),e&&e.focus&&e.focus({preventScroll:!0})},1150)}}r.querySelector(".visit-close").addEventListener("click",h),r.querySelector(".visit-skip").addEventListener("click",()=>{try{n.pause()}catch(g){}p()}),r.querySelector(".visit-end").addEventListener("click",g=>{let m=g.target.closest("button");m&&(m.dataset.act==="back"&&h(),m.dataset.act==="again"&&(i.forEach(clearTimeout),u()))}),n.src=t.visit.video,_f={close:h},requestAnimationFrame(()=>{r.classList.add("on"),c(u,1300)})}var px={};function a7(t){if(!t||!t.visit||px[t.visit.video]||!ip())return;px[t.visit.video]=!0;let e=document.createElement("link");e.rel="preload",e.as="video",e.href=t.visit.video,document.head.appendChild(e)}gx.exports={available:ip,button:o7,open:r7,warm:a7,get active(){return!!_f}}});var bx=Tt((VA,yx)=>{"use strict";var s7=qr(),Wc=[0,0],Hc=[0,0],Ya=null,fp=0;if(typeof window!="undefined"){window.addEventListener("pointermove",e=>{e.pointerType!=="touch"&&(Wc[0]=Math.max(-1,Math.min(1,e.clientX/window.innerWidth*2-1)),Wc[1]=Math.max(-1,Math.min(1,e.clientY/window.innerHeight*2-1)),fp=performance.now())},{passive:!0});let t=()=>{fp=performance.now()};["wheel","touchstart","touchmove","keydown","pointerdown"].forEach(e=>window.addEventListener(e,t,{passive:!0,capture:!0})),window.addEventListener("deviceorientation",e=>{e.gamma===null||e.beta===null||(Ya||(Ya=[e.gamma,e.beta]),Ya[0]+=(e.gamma-Ya[0])*.01,Ya[1]+=(e.beta-Ya[1])*.01,Wc[0]=Math.max(-1,Math.min(1,(e.gamma-Ya[0])/14)),Wc[1]=Math.max(-1,Math.min(1,(e.beta-Ya[1])/14)))},{passive:!0})}var xx=0,Uc=null,E1=null,Aa=[0,0,0],lp=0,Bc=null,jc=0,Mi={eye:[0,0,0],target:[0,0,0],fov:50,roll:0},i7={apply(t,e){let o=Math.min(.1,Math.max(0,e-xx));xx=e;let r=t.eye,n=t.target,a=[n[0]-r[0],n[1]-r[1],n[2]-r[2]],s=Math.hypot(a[0],a[1],a[2])||1;a=[a[0]/s,a[1]/s,a[2]/s];let i=[-a[2],0,a[0]],c=Math.hypot(i[0],i[2])||1;i=[i[0]/c,0,i[2]/c];let f=[i[1]*a[2]-i[2]*a[1],i[2]*a[0]-i[0]*a[2],i[0]*a[1]-i[1]*a[0]],l=!Uc;if(Uc&&o>0){let y=[r[0]-Uc[0],r[1]-Uc[1],r[2]-Uc[2]],_=Math.hypot(y[0],y[1],y[2]);if(_>2.5)l=!0;else{let b=Math.min(1,o*5);for(let S=0;S<3;S++)Aa[S]+=(y[S]/o-Aa[S])*b}let M=Math.hypot(n[0]-E1[0],n[1]-E1[1],n[2]-E1[2]);jc=_/o<.12&&M/o<.2?jc+o:0}l&&(Aa[0]=Aa[1]=Aa[2]=0,jc=0),Uc=r.slice(),E1=n.slice(),lp=Math.hypot(Aa[0],Aa[1],Aa[2]);let v=Math.min(1,o*2.6);Hc[0]+=(Wc[0]-Hc[0])*v,Hc[1]+=(Wc[1]-Hc[1])*v;let d=Math.max(.03,Math.min(.32,s*.05)),p=(s7.isPhone&&!Ya?1.5:1)*Math.min(1,jc/2.5),u=(Math.sin(e*.131)*.55+Math.sin(e*.071+1.3)*.45)*d*.55*p,h=Math.sin(e*.097+.6)*d*.16*p,g=Hc[0]*d+u,m=-Hc[1]*d*.45+h;for(let y=0;y<3;y++)Mi.eye[y]=r[y]+i[y]*g+f[y]*m,Mi.target[y]=n[y]+(i[y]*g+f[y]*m)*.12;r[1]>.05&&(Mi.eye[1]=Math.max(.05,Mi.eye[1]));let x=Aa[0]*i[0]+Aa[2]*i[2];return Mi.fov=t.fov+Math.min(3.5,lp*.55),Mi.roll=(t.roll||0)+Math.max(-.035,Math.min(.035,-x*.006)),Mi},pull(t,e){(Bc===null||!(Math.abs(t.focus-Bc)<40))&&(Bc=t.focus);let o=1/60;Bc+=(t.focus-Bc)*Math.min(1,o*3.2),t.focus=Bc,t.aperture>0&&(t.aperture*=1+.25*Math.min(1,jc/3))},get speed(){return lp},get resting(){return jc>2&&performance.now()-fp>2e3}};yx.exports=i7});var hp=Tt((XA,wx)=>{wx.exports=1e-6});var up=Tt((YA,_x)=>{_x.exports=c7;function c7(){var t=new Float32Array(3);return t[0]=0,t[1]=0,t[2]=0,t}});var Sx=Tt((KA,Mx)=>{Mx.exports=l7;function l7(t){var e=new Float32Array(3);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}});var dp=Tt((ZA,kx)=>{kx.exports=f7;function f7(t,e,o){var r=new Float32Array(3);return r[0]=t,r[1]=e,r[2]=o,r}});var pp=Tt((QA,zx)=>{zx.exports=h7;function h7(t,e){var o=e[0],r=e[1],n=e[2],a=o*o+r*r+n*n;return a>0&&(a=1/Math.sqrt(a),t[0]=e[0]*a,t[1]=e[1]*a,t[2]=e[2]*a),t}});var vp=Tt((JA,Ex)=>{Ex.exports=u7;function u7(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}});var Nx=Tt((tT,Lx)=>{Lx.exports=p7;var Ax=dp(),Tx=pp(),d7=vp();function p7(t,e){var o=Ax(t[0],t[1],t[2]),r=Ax(e[0],e[1],e[2]);Tx(o,o),Tx(r,r);var n=d7(o,r);return n>1?0:Math.acos(n)}});var Rx=Tt((eT,Ox)=>{Ox.exports=v7;function v7(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}});var $x=Tt((oT,Cx)=>{Cx.exports=m7;function m7(t,e,o,r){return t[0]=e,t[1]=o,t[2]=r,t}});var Ix=Tt((nT,Px)=>{Px.exports=g7;var mp=hp();function g7(t,e){var o=t[0],r=t[1],n=t[2],a=e[0],s=e[1],i=e[2];return Math.abs(o-a)<=mp*Math.max(1,Math.abs(o),Math.abs(a))&&Math.abs(r-s)<=mp*Math.max(1,Math.abs(r),Math.abs(s))&&Math.abs(n-i)<=mp*Math.max(1,Math.abs(n),Math.abs(i))}});var Dx=Tt((rT,qx)=>{qx.exports=x7;function x7(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]}});var Gx=Tt((aT,Fx)=>{Fx.exports=y7;function y7(t,e,o){return t[0]=e[0]+o[0],t[1]=e[1]+o[1],t[2]=e[2]+o[2],t}});var gp=Tt((sT,Hx)=>{Hx.exports=b7;function b7(t,e,o){return t[0]=e[0]-o[0],t[1]=e[1]-o[1],t[2]=e[2]-o[2],t}});var Bx=Tt((iT,Ux)=>{Ux.exports=gp()});var xp=Tt((cT,jx)=>{jx.exports=w7;function w7(t,e,o){return t[0]=e[0]*o[0],t[1]=e[1]*o[1],t[2]=e[2]*o[2],t}});var Vx=Tt((lT,Wx)=>{Wx.exports=xp()});var yp=Tt((fT,Xx)=>{Xx.exports=_7;function _7(t,e,o){return t[0]=e[0]/o[0],t[1]=e[1]/o[1],t[2]=e[2]/o[2],t}});var Kx=Tt((hT,Yx)=>{Yx.exports=yp()});var Qx=Tt((uT,Zx)=>{Zx.exports=M7;function M7(t,e,o){return t[0]=Math.min(e[0],o[0]),t[1]=Math.min(e[1],o[1]),t[2]=Math.min(e[2],o[2]),t}});var ty=Tt((dT,Jx)=>{Jx.exports=S7;function S7(t,e,o){return t[0]=Math.max(e[0],o[0]),t[1]=Math.max(e[1],o[1]),t[2]=Math.max(e[2],o[2]),t}});var oy=Tt((pT,ey)=>{ey.exports=k7;function k7(t,e){return t[0]=Math.floor(e[0]),t[1]=Math.floor(e[1]),t[2]=Math.floor(e[2]),t}});var ry=Tt((vT,ny)=>{ny.exports=z7;function z7(t,e){return t[0]=Math.ceil(e[0]),t[1]=Math.ceil(e[1]),t[2]=Math.ceil(e[2]),t}});var sy=Tt((mT,ay)=>{ay.exports=E7;function E7(t,e){return t[0]=Math.round(e[0]),t[1]=Math.round(e[1]),t[2]=Math.round(e[2]),t}});var cy=Tt((gT,iy)=>{iy.exports=A7;function A7(t,e,o){return t[0]=e[0]*o,t[1]=e[1]*o,t[2]=e[2]*o,t}});var fy=Tt((xT,ly)=>{ly.exports=T7;function T7(t,e,o,r){return t[0]=e[0]+o[0]*r,t[1]=e[1]+o[1]*r,t[2]=e[2]+o[2]*r,t}});var bp=Tt((yT,hy)=>{hy.exports=L7;function L7(t,e){var o=e[0]-t[0],r=e[1]-t[1],n=e[2]-t[2];return Math.sqrt(o*o+r*r+n*n)}});var dy=Tt((bT,uy)=>{uy.exports=bp()});var wp=Tt((wT,py)=>{py.exports=N7;function N7(t,e){var o=e[0]-t[0],r=e[1]-t[1],n=e[2]-t[2];return o*o+r*r+n*n}});var my=Tt((_T,vy)=>{vy.exports=wp()});var _p=Tt((MT,gy)=>{gy.exports=O7;function O7(t){var e=t[0],o=t[1],r=t[2];return Math.sqrt(e*e+o*o+r*r)}});var yy=Tt((ST,xy)=>{xy.exports=_p()});var Mp=Tt((kT,by)=>{by.exports=R7;function R7(t){var e=t[0],o=t[1],r=t[2];return e*e+o*o+r*r}});var _y=Tt((zT,wy)=>{wy.exports=Mp()});var Sy=Tt((ET,My)=>{My.exports=C7;function C7(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t}});var zy=Tt((AT,ky)=>{ky.exports=$7;function $7(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t}});var Ay=Tt((TT,Ey)=>{Ey.exports=P7;function P7(t,e,o){var r=e[0],n=e[1],a=e[2],s=o[0],i=o[1],c=o[2];return t[0]=n*c-a*i,t[1]=a*s-r*c,t[2]=r*i-n*s,t}});var Ly=Tt((LT,Ty)=>{Ty.exports=I7;function I7(t,e,o,r){var n=e[0],a=e[1],s=e[2];return t[0]=n+r*(o[0]-n),t[1]=a+r*(o[1]-a),t[2]=s+r*(o[2]-s),t}});var Oy=Tt((NT,Ny)=>{Ny.exports=q7;function q7(t,e){e=e||1;var o=Math.random()*2*Math.PI,r=Math.random()*2-1,n=Math.sqrt(1-r*r)*e;return t[0]=Math.cos(o)*n,t[1]=Math.sin(o)*n,t[2]=r*e,t}});var Cy=Tt((OT,Ry)=>{Ry.exports=D7;function D7(t,e,o){var r=e[0],n=e[1],a=e[2],s=o[3]*r+o[7]*n+o[11]*a+o[15];return s=s||1,t[0]=(o[0]*r+o[4]*n+o[8]*a+o[12])/s,t[1]=(o[1]*r+o[5]*n+o[9]*a+o[13])/s,t[2]=(o[2]*r+o[6]*n+o[10]*a+o[14])/s,t}});var Py=Tt((RT,$y)=>{$y.exports=F7;function F7(t,e,o){var r=e[0],n=e[1],a=e[2];return t[0]=r*o[0]+n*o[3]+a*o[6],t[1]=r*o[1]+n*o[4]+a*o[7],t[2]=r*o[2]+n*o[5]+a*o[8],t}});var qy=Tt((CT,Iy)=>{Iy.exports=G7;function G7(t,e,o){var r=e[0],n=e[1],a=e[2],s=o[0],i=o[1],c=o[2],f=o[3],l=f*r+i*a-c*n,v=f*n+c*r-s*a,d=f*a+s*n-i*r,p=-s*r-i*n-c*a;return t[0]=l*f+p*-s+v*-c-d*-i,t[1]=v*f+p*-i+d*-s-l*-c,t[2]=d*f+p*-c+l*-i-v*-s,t}});var Fy=Tt(($T,Dy)=>{Dy.exports=H7;function H7(t,e,o,r){var n=o[1],a=o[2],s=e[1]-n,i=e[2]-a,c=Math.sin(r),f=Math.cos(r);return t[0]=e[0],t[1]=n+s*f-i*c,t[2]=a+s*c+i*f,t}});var Hy=Tt((PT,Gy)=>{Gy.exports=U7;function U7(t,e,o,r){var n=o[0],a=o[2],s=e[0]-n,i=e[2]-a,c=Math.sin(r),f=Math.cos(r);return t[0]=n+i*c+s*f,t[1]=e[1],t[2]=a+i*f-s*c,t}});var By=Tt((IT,Uy)=>{Uy.exports=B7;function B7(t,e,o,r){var n=o[0],a=o[1],s=e[0]-n,i=e[1]-a,c=Math.sin(r),f=Math.cos(r);return t[0]=n+s*f-i*c,t[1]=a+s*c+i*f,t[2]=e[2],t}});var Wy=Tt((qT,jy)=>{jy.exports=j7;var As=up()();function j7(t,e,o,r,n,a){var s,i;for(e||(e=3),o||(o=0),r?i=Math.min(r*e+o,t.length):i=t.length,s=o;s<i;s+=e)As[0]=t[s],As[1]=t[s+1],As[2]=t[s+2],n(As,As,a),t[s]=As[0],t[s+1]=As[1],t[s+2]=As[2];return t}});var Xy=Tt((DT,Vy)=>{Vy.exports={EPSILON:hp(),create:up(),clone:Sx(),angle:Nx(),fromValues:dp(),copy:Rx(),set:$x(),equals:Ix(),exactEquals:Dx(),add:Gx(),subtract:gp(),sub:Bx(),multiply:xp(),mul:Vx(),divide:yp(),div:Kx(),min:Qx(),max:ty(),floor:oy(),ceil:ry(),round:sy(),scale:cy(),scaleAndAdd:fy(),distance:bp(),dist:dy(),squaredDistance:wp(),sqrDist:my(),length:_p(),len:yy(),squaredLength:Mp(),sqrLen:_y(),negate:Sy(),inverse:zy(),normalize:pp(),dot:vp(),cross:Ay(),lerp:Ly(),random:Oy(),transformMat4:Cy(),transformMat3:Py(),transformQuat:qy(),rotateX:Fy(),rotateY:Hy(),rotateZ:By(),forEach:Wy()}});var Zy=Tt((FT,Ky)=>{"use strict";function Yy(){let t={};return{on(e,o){return(t[e]=t[e]||[]).push(o),this},emit(e,o){(t[e]||[]).slice().forEach(r=>r(o))}}}Ky.exports=function(e){let o=e.ownerDocument||document,r=Yy(),n=null,a={dx:0,dy:0,dt:0},s=0,i=()=>o.pointerLockElement||o.webkitPointerLockElement||null,c=()=>{if(i())return;let l=e.requestPointerLock||e.webkitRequestPointerLock;if(l)try{let v=l.call(e);v&&v.catch&&v.catch(()=>{})}catch(v){}};e.addEventListener("mousedown",c,!1);let f=()=>{if(!i()){n&&(r.emit("release"),n.emit("end"),n=null);return}n=Yy(),s=Date.now(),r.emit("attain",n)};return o.addEventListener("pointerlockchange",f),o.addEventListener("webkitpointerlockchange",f),o.addEventListener("pointerlockerror",()=>r.emit("error")),(o.body||e).addEventListener("mousemove",l=>{n&&(a.dx=l.movementX||l.webkitMovementX||0,a.dy=l.movementY||l.webkitMovementY||0,a.dt=Date.now()-s,r.emit("data",a),n.emit("data",a))},!1),r.request=c,r.target=i,r.release=()=>{i()&&(o.exitPointerLock||o.webkitExitPointerLock).call(o)},r}});var ob=Tt((UT,eb)=>{"use strict";var Si=Ec(),ki=Xy(),W7=Zy(),GT=Math.PI/4,HT=Math.PI/6,Qy=2,V7=1,X7=2.4,Y7=2.4,K7=1e3,Z7=5,Q7=7,Sp=Nn().C,Mf=[[7,1.6],[7,Sp.zc],[Sp.x1-2.95,Sp.zc]],Ts=Mf.slice(1).map((t,e)=>{let o=Mf[e],r=t[0]-o[0],n=t[1]-o[1],a=Math.hypot(r,n);return{a:o,len:a,dir:[r/a,n/a]}}),kp=Ts.reduce((t,e)=>t+e.len,0);function Jy(t){let e=Math.max(0,Math.min(kp,t));for(let r of Ts){if(e<=r.len)return[r.a[0]+r.dir[0]*e,r.a[1]+r.dir[1]*e];e-=r.len}let o=Mf[Mf.length-1];return[o[0],o[1]]}function J7(t){let e=0;for(let r=0;r<Ts.length;r++){let n=Ts[r],a=e+n.len;if(t<a-1e-4||r===Ts.length-1){let s=n.dir,c=t<=e+1e-4&&r>0?Ts[r-1].dir:n.dir;return{ahead:s,back:[-c[0],-c[1]]}}e=a}let o=Ts[Ts.length-1].dir;return{ahead:o,back:[-o[0],-o[1]]}}var tz=Math.PI/4,ez=7,oz=140,nz=70,tb=(t,e,o)=>(1-t)*e+t*o,rz=t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2;eb.exports=function({getGridSegments:t,getGridParts:e},o){var r=[0,Math.PI],n=[0,Math.PI],a=0,s=[0,0,0],i=[Q7,Qy,Mf[0][1]],c=0,f=1,l=0,v=[.707,0,.707],d=[0,1,0],p=[0,0,0],u=.5,h=Si.identity([]),g=Si.identity([]),m=!1,x=[0,0,0],y=[0,0,0],_=1,M=!1;let b=j=>{r[1]+=j*tz},S=(j,ft,xt)=>{if(j=Math.max(Math.min(j,100),-100),ft=Math.max(Math.min(ft,100),-100),r[0]=0,M){a=0;return}for(a+=j;a>=xt;)b(1),a-=xt;for(;a<=-xt;)b(-1),a+=xt};W7(document.body).on("attain",j=>{j.on("data",ft=>{S(ft.dx,ft.dy,oz)})});let k=null,C=null,R=0,U={x:0,y:0},P=58,q=document.createElement("div");q.id="museum-mobile-controls",q.innerHTML=`

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
	`,document.body.appendChild(q);let at=q.querySelector("#museum-joystick"),St=q.querySelector("#museum-joystick-knob"),yt=()=>{St.style.transform="translate(-50%, -50%)",s[0]=0,s[2]=0},mt=j=>{let ft=j.clientX-U.x,xt=j.clientY-U.y,Qt=Math.hypot(ft,xt);if(Qt>P&&(ft=ft/Qt*P,xt=xt/Qt*P),St.style.transform=`translate(
				calc(-50% + ${ft}px),
				calc(-50% + ${xt}px)
			)`,Qt<10){s[0]=0,s[2]=0;return}let Kt=ft/P,qt=xt/P;s[0]=0,s[2]=Math.abs(qt)>.15?qt:0},zt=(j,ft)=>{for(let xt=0;xt<j.length;xt++)if(j[xt].identifier===ft)return j[xt];return null},It=j=>!!(j&&j.closest&&j.closest(".painting-plaque, .story-overlay, .story-card, .story-close, button")),se=j=>{if(!It(j.target)&&(j.cancelable&&j.preventDefault(),!M))for(let ft=0;ft<j.changedTouches.length;ft++){let xt=j.changedTouches[ft];if(k===null&&xt.clientX<window.innerWidth*.48){k=xt.identifier;let Qt=at.getBoundingClientRect();U.x=Qt.left+Qt.width/2,U.y=Qt.top+Qt.height/2,mt(xt)}else C===null&&xt.clientX>=window.innerWidth*.48&&(C=xt.identifier,R=xt.clientX,a=0)}},Ee=j=>{if(It(j.target)||(j.cancelable&&j.preventDefault(),M))return;let ft=k===null?null:zt(j.touches,k);ft&&mt(ft);let xt=C===null?null:zt(j.touches,C);if(xt){let Qt=xt.clientX-R;R=xt.clientX,S(Qt,0,nz)}},Qe=j=>{if(!It(j.target)){j.cancelable&&j.preventDefault();for(let ft=0;ft<j.changedTouches.length;ft++){let xt=j.changedTouches[ft];xt.identifier===k&&(k=null,yt()),xt.identifier===C&&(C=null)}}};document.addEventListener("touchstart",se,{passive:!1}),document.addEventListener("touchmove",Ee,{passive:!1}),document.addEventListener("touchend",Qe,{passive:!1}),document.addEventListener("touchcancel",Qe,{passive:!1});let me=document.createElement("style");me.textContent=`

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
	`,document.head.appendChild(me);var qe={};let Ge=j=>{if(j.defaultPrevented||j.ctrlKey||j.altKey||j.metaKey)return;let ft=j.type==="keydown";qe[j.code]=ft,ft&&!j.repeat&&!M&&((j.code==="KeyA"||j.code==="ArrowLeft")&&b(-1),(j.code==="KeyD"||j.code==="ArrowRight")&&b(1)),m=!1;let xt=qe.KeyW||qe.ArrowUp?1:0;s=[0,0,(qe.KeyS||qe.ArrowDown?1:0)-xt],j.preventDefault()};window.addEventListener("keydown",Ge),window.addEventListener("keyup",Ge);var Q=0;return{pos:i,fmouse:n,forward:v,up:d,setPaused:j=>{M=!!j,M&&(s[0]=0,s[2]=0,yt())},place:(j,ft)=>{c=Math.max(0,Math.min(kp,j));let xt=Jy(c);i[0]=xt[0],i[2]=xt[1],r[1]=ft,n[1]=ft,a=0,f=1},view:()=>h,proj:()=>(Si.perspective(g,o(),window.innerWidth/window.innerHeight,.1,700),g),tick:({time:j})=>{let ft=j-Q;Q=j;let xt=[0,0,0],Qt=[];ki.set(v,Math.sin(n[1]),0,-Math.cos(n[1])),ki.set(d,0,1,0);let ce=m?Y7:X7,Kt=Math.sin(r[1]),qt=-Math.cos(r[1]),rt=J7(c),Ct=Kt*rt.ahead[0]+qt*rt.ahead[1],we=Kt*rt.back[0]+qt*rt.back[1],te=f;Math.max(Ct,we)>.3&&(te=Ct>=we?1:-1);let Nt=M?0:-s[2]*ce;l+=(Nt-l)*(1-Math.exp(-Math.min(ft,.1)*5.5)),Nt===0&&Math.abs(l)<.01&&(l=0);let $e=l*te*Math.min(ft,.1);M&&(s[0]=0,s[2]=0,$e=0,l=0),$e!==0&&(f=Math.sign($e)*Math.sign(-s[2]||1)),c=Math.max(0,Math.min(kp,c+$e));let E=Jy(c);ki.set(p,E[0]-i[0],0,E[1]-i[2]);let De=ki.len(p);De===0&&u!==.25&&(u=(Math.abs((u+.5)%1-.5)-.25)*.8+.25,(u+.01)%.25<.02&&(u=.25));let je=u;if(u+=De/(m?Z7:K7),i[1]=Qy,ki.add(i,i,p),_<1){_+=ft/V7,_=Math.min(_,1);let lo=rz(_);ki.set(i,tb(lo,x[0],y[0]),i[1],tb(lo,x[2],y[2]))}n[0]=0,n[1]+=(r[1]-n[1])*Math.min(1,Math.min(ft,.1)*ez),Math.abs(r[1]-n[1])<5e-4&&(n[1]=r[1]),Si.identity(h),Si.rotateX(h,h,0),Si.rotateY(h,h,n[1]),Si.translate(h,h,ki.scale(xt,i,-1))}}}});var rb=Tt((BT,nb)=>{"use strict";var{skylightGLSL:az,Z_START:sz,Z_END:iz,GLASS_Y:cz}=vc(),{oculusGLSL:lz,A:zi}=Gr(),{windowLightGLSL:fz,C:A1}=Nn(),{doorLightGLSL:hz}=is(),T1=rn(),Ei=o1(),zp=Oc(),Wr=t=>t.toFixed(4),Ep=.1,Ap=700,Vc={exposure:.88,shafts:1,bloom:1,vignette:.42,grain:.032};function uz(t,e){let o=e[0],r=e[1],n=e[2],a=e[3],s=e[4],i=e[5],c=e[6],f=e[7],l=e[8],v=e[9],d=e[10],p=e[11],u=e[12],h=e[13],g=e[14],m=e[15],x=o*i-r*s,y=o*c-n*s,_=o*f-a*s,M=r*c-n*i,b=r*f-a*i,S=n*f-a*c,z=l*h-v*u,k=l*g-d*u,C=l*m-p*u,R=v*g-d*h,U=v*m-p*h,P=d*m-p*g,q=x*P-y*U+_*R+M*C-b*k+S*z;return q?(q=1/q,t[0]=(i*P-c*U+f*R)*q,t[1]=(n*U-r*P-a*R)*q,t[2]=(h*S-g*b+m*M)*q,t[3]=(d*b-v*S-p*M)*q,t[4]=(c*C-s*P-f*k)*q,t[5]=(o*P-n*C+a*k)*q,t[6]=(g*_-u*S-m*y)*q,t[7]=(l*S-d*_+p*y)*q,t[8]=(s*U-i*C+f*z)*q,t[9]=(r*C-o*U-a*z)*q,t[10]=(u*b-h*_+m*x)*q,t[11]=(v*_-l*b-p*x)*q,t[12]=(i*k-s*R-c*z)*q,t[13]=(o*R-r*k+n*z)*q,t[14]=(h*y-u*M-g*x)*q,t[15]=(l*M-v*y+d*x)*q,t):null}function dz(t,e,o){let r=new Array(16);for(let n=0;n<4;n++)for(let a=0;a<4;a++){let s=0;for(let i=0;i<4;i++)s+=e[i*4+a]*o[n*4+i];r[n*4+a]=s}for(let n=0;n<16;n++)t[n]=r[n];return t}var pz=`
precision highp float;
attribute vec2 position;
varying vec2 uv;
void main() {
	uv = position * 0.5 + 0.5;
	gl_Position = vec4(position, 0.0, 1.0);
}`;nb.exports=(t,e)=>{let o=!!e.isPhone,r=t.hasExtension("webgl_depth_texture"),n=o?10:18,a=()=>Ei.zone==="studio"?4:e.post>=2?2:4,s=o?7:11,i=It=>t.texture(Object.assign({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"},It||{})),c=()=>t.framebuffer({color:i(),depth:!1}),f=i(),l=r?t.texture({width:4,height:4,format:"depth",type:"uint32"}):null,v=t.framebuffer({color:f,depth:l||!0}),d=[c(),c()],p=[c(),c()],u=[c(),c()],h=[c(),c()],g=new Array(16).fill(0),m=new Array(16).fill(0),x=[0,0,0],y={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},_={position:[-1,-1,3,-1,-1,3]},M=(It,se,Ee)=>t(Object.assign({vert:pz,frag:It,attributes:_,count:3,depth:{enable:!1,mask:!1},cull:{enable:!1},blend:{enable:!1},uniforms:se,framebuffer:t.prop("out")},Ee||{})),b=[2.6,0,sz-3.2,12.6,cz,iz+.4],S=[zi.x0-.2,0,zi.z0,zi.x1,zi.domeTop,zi.z1],z=[A1.x0,0,A1.z0,A1.x1,7.6,A1.z1],k=[.35,0,.35,13.65,7.6,9],C=zp.AIR_BOX,R=It=>`vec3(${Wr(It[0])}, ${Wr(It[1])}, ${Wr(It[2])}), vec3(${Wr(It[3])}, ${Wr(It[4])}, ${Wr(It[5])})`,U=M(`
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

	${az()}
	${lz()}
	${fz()}
	${hz()}
	${zp.sunGLSL()}

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
			vec2 t = hitBox(eye, rd, ${R(b)});
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
			vec2 t = hitBox(eye, rd, ${R(S)});
			t.y = min(t.y, len);
			if (t.y > t.x) {
				float st = (t.y - t.x) / float(N);
				float acc = 0.0;
				for (int i = 0; i < N; i++) {
					vec3 p = eye + rd * (t.x + (float(i) + jit) * st);
					if (p.y < ${Wr(zi.dome.base)} && p.x > ${Wr(zi.x0-.1)}) acc += oculusOpen(p) * treeShade(p) * air(p);
				}
				float ph = phase(dot(rd, SHAFT), 0.6) + 0.05;
				sum += mix(vec3(1.0, 0.88, 0.68), vec3(0.62, 0.74, 1.0) * 1.2, night) * acc * st * ph * strength.y;
			}
		}

		// the corridor windows
		if (strength.z > 0.0) {
			vec2 t = hitBox(eye, rd, ${R(z)});
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
			vec2 t = hitBox(eye, rd, ${R(k)});
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
			vec2 t = hitBox(eye, rd, ${R(C)});
			t.y = min(t.y, len);
			if (t.y > t.x) {
				const int NS = ${s};
				float st = (t.y - t.x) / float(NS);
				float acc = 0.0;
				for (int i = 0; i < NS; i++) {
					vec3 p = eye + rd * (t.x + (float(i) + jit) * st);
					acc += studioSun(p) * air(p);
				}
				float ph = phase(dot(rd, STUDIO_SUN), 0.6) + 0.04;
				sum += mix(vec3(1.0, 0.84, 0.62), vec3(0.62, 0.74, 1.0) * 1.15, night) * acc * st * ph * strength5;
			}
		}

		gl_FragColor = vec4(sum, 1.0);
	}`,{depthTex:()=>l,invVP:()=>g,eye:()=>x,time:t.context("time"),night:()=>T1.night,strength:()=>P,strength5:()=>q,studioBake:()=>zp.bakedSun(t)}),P=[0,0,0,0],q=0;function at(){let It=Vc.shafts*y.shafts,se=T1.night;return P[0]=Ei.box(b)?.06*It*(1+.9*se):0,P[1]=Ei.box(S,!1,"court")?.1*It*(1+.9*se):0,P[2]=Ei.box(z)?.07*It*(1+.4*se):0,P[3]=Ei.box(k)?.04*It*(1-.75*se):0,Ei.zone==="studio"?(P[0]=P[1]=P[2]=P[3]=0,q=.065*It*(1+1*se)):q=0,P[0]+P[1]+P[2]+P[3]+q>5e-4}let St=M(`
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
	}`,{src:t.prop("src"),dir:(It,se)=>[se.dir[0]/se.size[0],se.dir[1]/se.size[1]]}),yt=M(`
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
	}`,{src:t.prop("src"),texel:(It,se)=>[.5/se.size[0],.5/se.size[1]],threshold:t.prop("threshold")}),mt=M(`
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
		return 2.0 * ${Wr(Ep)} * ${Wr(Ap)} / (${Wr(Ap+Ep)} - z * ${Wr(Ap-Ep)});
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
	}`,{scene:()=>f,depthTex:()=>l||f,soft:()=>d[0],bloomA:()=>p[0],bloomB:()=>u[0],shafts:()=>h[0],res:()=>[v.width,v.height],time:t.context("time"),exposure:()=>Vc.exposure*y.exposure,vignette:()=>Math.min(1,Vc.vignette+y.vignette+.22*T1.night+(Ei.zone==="studio"?.2:0)),night:()=>T1.night,grain:()=>Vc.grain,bloomK:()=>Vc.bloom,letterbox:()=>y.letterbox,fade:()=>y.fade,fadeColor:()=>y.fadeColor,aperture:()=>e.post>=2?y.aperture:0,focus:()=>y.focus,hasDepth:r?1:0},{framebuffer:null}),zt=t({framebuffer:()=>v});return{shot:y,look:Vc,hasDepth:r,capture(It,se,Ee){let Qe=Math.max(.4,Math.min(1,e.scale||1)),me=Math.max(2,Math.round(It.drawingBufferWidth*Qe/2)*2),qe=Math.max(2,Math.round(It.drawingBufferHeight*Qe/2)*2);(v.width!==me||v.height!==qe)&&v.resize(me,qe);let Ge=Math.max(1,Math.ceil(me/2)),Q=Math.max(1,Math.ceil(qe/2));d.forEach(j=>j.resize(Ge,Q)),p.forEach(j=>j.resize(Math.max(1,Math.ceil(me/4)),Math.max(1,Math.ceil(qe/4)))),u.forEach(j=>j.resize(Math.max(1,Math.ceil(me/8)),Math.max(1,Math.ceil(qe/8)))),h.forEach(j=>j.resize(Math.max(1,Math.ceil(me/a())),Math.max(1,Math.ceil(qe/a())))),dz(m,se.proj,se.view),uz(g,m),x[0]=se.eye[0],x[1]=se.eye[1],x[2]=se.eye[2],zt(()=>{t.clear({color:[0,0,0,1],depth:1}),Ee()})},present(){let It=se=>[se.width,se.height];r&&e.post>=1&&at()?(U({out:h[0]}),St({out:h[1],src:h[0],dir:[1,0],size:It(h[0])}),St({out:h[0],src:h[1],dir:[0,1],size:It(h[0])})):t.clear({color:[0,0,0,1],framebuffer:h[0]}),yt({out:d[0],src:f,size:[v.width,v.height],threshold:0}),St({out:d[1],src:d[0],dir:[1,0],size:It(d[0])}),St({out:d[0],src:d[1],dir:[0,1],size:It(d[0])}),yt({out:p[0],src:d[0],size:It(d[0]),threshold:.42}),St({out:p[1],src:p[0],dir:[1,0],size:It(p[0])}),St({out:p[0],src:p[1],dir:[0,1],size:It(p[0])}),yt({out:u[0],src:p[0],size:It(p[0]),threshold:0}),St({out:u[1],src:u[0],dir:[1.5,0],size:It(u[0])}),St({out:u[0],src:u[1],dir:[0,1.5],size:It(u[0])}),mt({out:null})}}}});var lb=Tt((jT,cb)=>{"use strict";var ab=rn().GLSL,vz=ti(),Tp=is(),{C:mz,FAR_DOOR:gz}=Nn(),xz=100*Math.PI/180,sb=t=>[gz.x-t[2],t[1],mz.zc-7+t[0]],ib=t=>[-t[2],t[1],t[0]];function yz(t){let e=[],o=[],r=[],n=[],a=vz.createBuilder(e,o,r,n);Tp.addFrames(a,t);let s=Tp.glassPanes(t),i=c=>{let f=[];for(let l=0;l<c.length;l+=3)f.push([c[l],c[l+1],c[l+2]]);return f};return{position:i(e),normal:i(o),elements:r,glass:s}}cb.exports=t=>{let e=Tp.DOOR,o=["left","right"].map(l=>{let v=yz(l),d=v.position.length;return{part:l,hinge:l==="left"?e.x0:e.x1,sign:l==="left"?-1:1,src:v.position.map(p=>p.slice()),srcN:v.normal.map(p=>p.slice()),srcG:v.glass.map(p=>p.slice()),pos:t.buffer({data:new Float32Array(d*3),usage:"dynamic"}),nrm:t.buffer({data:new Float32Array(d*3),usage:"dynamic"}),gpos:t.buffer({data:new Float32Array(v.glass.length*3),usage:"dynamic"}),gnrm:t.buffer({data:new Float32Array(v.glass.length*3),usage:"dynamic"}),el:t.elements({data:new Uint32Array(v.elements),type:"uint32"}),glassCount:v.glass.length,outP:new Float32Array(d*3),outN:new Float32Array(d*3),outG:new Float32Array(v.glass.length*3),outGN:new Float32Array(v.glass.length*3)}}),r=null;function n(l){if(l!==r){r=l;for(let v of o){let d=v.sign*l,p=Math.cos(d),u=Math.sin(d),h=x=>{let y=x[0]-v.hinge,_=x[2];return[v.hinge+y*p+_*u,x[1],-y*u+_*p]},g=x=>[x[0]*p+x[2]*u,x[1],-x[0]*u+x[2]*p];v.src.forEach((x,y)=>{let _=sb(h(x));v.outP.set(_,y*3),v.outN.set(ib(g(v.srcN[y])),y*3)});let m=ib(g([0,0,1]));v.srcG.forEach((x,y)=>{v.outG.set(sb(h(x)),y*3),v.outGN.set(m,y*3)}),v.pos.subdata(v.outP),v.nrm.subdata(v.outN),v.gpos.subdata(v.outG),v.gnrm.subdata(v.outGN)}}}n(0);let a=`
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
		${ab}
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
		${ab}
		varying vec3 v_pos, v_n, v_eye;
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			float c = abs(dot(V, normalize(v_n)));
			float fres = pow(1.0 - c, 3.0);
			float d = (v_pos.x + v_pos.z) * 0.55 + v_pos.y * 0.85;
			float sheen = smoothstep(0.35, 0.0, abs(fract(d * 0.22) - 0.5)) * 0.05;
			float a = 0.05 + 0.32 * fres + sheen;
			gl_FragColor = vec4(toNight(mix(vec3(0.80, 0.86, 0.90), vec3(1.0, 0.95, 0.86), 0.4), 0.22), a);
		}`,attributes:{position:t.prop("pos"),normal:t.prop("nrm")},count:t.prop("count"),cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}}),c=0,f=()=>{n(c*xz);for(let l of o)s({pos:l.pos,nrm:l.nrm,el:l.el})};return f.glass=()=>{for(let l of o)i({pos:l.gpos,nrm:l.gnrm,count:l.glassCount})},f.setOpen=l=>{c=l||0},f.openNow=()=>c,f}});var hb=Tt((WT,fb)=>{"use strict";var bz=rn().GLSL,{skylightGLSL:wz}=vc(),{oculusGLSL:_z}=Gr(),{windowLightGLSL:Mz}=Nn(),ha=.22;function Sz(){let t=[],e=[],o=[],r=[],s=(l,v)=>{let d=ha*.2*Math.pow(Math.sin(Math.PI*Math.pow(l,.85)),.9)*(v>0?1.06:.94),p=l*ha-ha*.12,u=v*d,h=Math.abs(v)*d*.42-.14*l*l*ha;h+=Math.sin(l*17+(v>0?0:2.1))*.012*ha*v*v;let g=(l-.3)*.55,m=Math.cos(g),x=Math.sin(g),y=h*m-u*x,_=h*x+u*m;return[p,y,_+.05*ha*l*l]},i=(l,v)=>{let p=s(Math.min(1,l+.01),v),u=s(Math.max(0,l-.01),v),h=s(l,Math.min(1,v+.01)),g=s(l,Math.max(-1,v-.01)),m=[p[0]-u[0],p[1]-u[1],p[2]-u[2]],x=[h[0]-g[0],h[1]-g[1],h[2]-g[2]],y=[x[1]*m[2]-x[2]*m[1],x[2]*m[0]-x[0]*m[2],x[0]*m[1]-x[1]*m[0]],_=Math.hypot(y[0],y[1],y[2])||1,M=y[1]<0?-1:1;return[y[0]/_*M,y[1]/_*M,y[2]/_*M]};for(let l=0;l<=18;l++){let v=l/18;for(let d=0;d<=5*2;d++){let p=d/5-1;t.push(s(v,p)),e.push(i(Math.min(.97,Math.max(.03,v)),p)),o.push([v,p])}}let c=5*2+1;for(let l=0;l<18;l++)for(let v=0;v<c-1;v++){let d=l*c+v,p=d+1,u=d+c,h=u+1;r.push([d,u,p],[p,u,h])}let f=t.length;return t.push([-ha*.12,0,-.003],[-ha*.12,0,.003],[-ha*.24,-.01,.0015],[-ha*.24,-.01,-.0015]),e.push([0,1,0],[0,1,0],[0,1,0],[0,1,0]),o.push([0,0],[0,0],[-.1,0],[-.1,0]),r.push([f,f+2,f+1],[f,f+3,f+2]),{pos:t,nrm:e,uv:o,idx:r}}fb.exports=t=>{let e=Sz(),o=t({vert:`
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
		${bz}
		uniform float time;
		uniform float yScale, visible;
		varying vec3 v_pos, v_normal;
		varying vec2 v_uv;
		varying vec3 v_eye;

		${wz()}
		${_z()}
		${Mz()}

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
		}`,attributes:{position:e.pos,normal:e.nrm,uv:e.uv},elements:e.idx,uniforms:{model:t.prop("model"),visible:1},cull:{enable:!1}}),r=rn(),n=t({vert:`
		precision highp float;
		uniform mat4 proj, view, model;
		uniform float yScale;
		attribute vec2 corner;
		varying vec2 v_uv;
		void main() {
			vec3 c = (model * vec4(${(ha*.35).toFixed(3)}, 0.0, 0.0, 1.0)).xyz;
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{model:t.prop("model"),night:()=>r.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(a){a&&a.visible&&(o({model:a.model}),r.night>.01&&n({model:a.model}))}}});var pb=Tt((VT,db)=>{"use strict";var{skylightGLSL:kz,Z_START:ub,Z_END:zz}=vc(),{oculusGLSL:Ez,A:Xc}=Gr(),{windowLightGLSL:Az,C:Ai}=Nn();db.exports=(t,e)=>{let o=e.isPhone?900:2600,r=e.isPhone?350:900,n=e.isPhone?450:1300,a=e.isPhone?13:22,s=7,i=()=>(s=s*16807%2147483647,(s-1)/2147483646),c=Ai.x0+.6,f=Ai.x1-.3,l=[];for(let u=0;u<o;u++)l.push([2.5+i()*10.5,.3+i()*8,ub-3.5+i()*(zz-ub+4.5),i()]);for(let u=0;u<r;u++)l.push([Xc.x0+.3+i()*(Xc.x1-Xc.x0-.6),.3+i()*7.5,Xc.z0+.3+i()*(Xc.z1-Xc.z0-.6),i()]);for(let u=0;u<n;u++)l.push([c+i()*(f-c),.2+i()*5.6,Ai.z0+.25+i()*(Ai.z1-Ai.z0-.5),i()]);let v=u=>u.toFixed(4),d=[[0,-50,0,0],[0,-50,0,0],[0,-50,0,0],[0,-50,0,0]],p=t({vert:`
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

		${kz()}
		${Ez()}
		${Az()}

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
				p.x = ${v(c)} + mod(p.x - ${v(c)} - gust.x * (0.55 + 0.9 * seed.w), ${v(f-c)});
				p.y += sin(time * 5.0 + s * 11.0) * 0.22 * gust.y;
				p.z += cos(time * 4.3 + s * 13.0) * 0.30 * gust.y;
				p.z = clamp(p.z, ${v(Ai.z0+.1)}, ${v(Ai.z1-.1)});
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
			float size = sharp + blur * ${v(a)} * (0.6 + 0.4 * seed.w);
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
		}`,attributes:{seed:l},count:l.length,primitive:"points",uniforms:{time:t.context("time"),pixelScale:u=>u.viewportHeight*.006,focus:(u,h)=>h&&h.focus||6,aperture:(u,h)=>h&&h.aperture||0,wake0:(u,h)=>(h&&h.wake||d)[0],wake1:(u,h)=>(h&&h.wake||d)[1],wake2:(u,h)=>(h&&h.wake||d)[2],wake3:(u,h)=>(h&&h.wake||d)[3],wakeDir:(u,h)=>h&&h.wakeDir||[0,0,1],gust:(u,h)=>h&&h.gust||[0,0]},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});return u=>p(u||{})}});var bb=Tt((XT,yb)=>{"use strict";var{C:xb}=Nn(),vb=rn(),mb=15.3,Tz=37.1,gb=xb.z1+.9,Lz=xb.z1+.7+16-.6;yb.exports=(t,e)=>{let o=e.isPhone?36:80,r=11,n=()=>(r=r*16807%2147483647,(r-1)/2147483646),a=[];for(let f=0;f<o;f++){let l=.35+Math.pow(n(),1.8)*2.4;a.push([mb+n()*(Tz-mb),l,gb+n()*(Lz-gb),n()])}let s=[],i=[];a.forEach(f=>{[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(l=>{s.push(l[0],l[1]),i.push(...f)})});let c=t({vert:`
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
		}`,attributes:{corner:s,seed:i},count:s.length/2,uniforms:{time:t.context("time"),night:()=>vb.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(){vb.night>.01&&c()}}});var O1=Tt((YT,Lr)=>{"use strict";var wb=rn(),Ta=ds(),Nz=Ec(),Ns=Math.PI,Ie=t=>(+t).toFixed(4),ua=t=>`vec3(${Ie(t[0])}, ${Ie(t[1])}, ${Ie(t[2])})`,d0={x0:-2.05,z0:41.45,z1:47.55,top:5.1},Wo=-.55,dn=-2,E0=42.25,Q0=43.65,Yr=45.35,Jn=46.75,bn=2.75,Ar=.12,Oz=(Wo+dn)/2,n0={x:-1.3,y:1.42,w:.42,h:.52,z:Q0,cell:.026},vo={x0:-1.85,x1:-.75,top:.98,z0:Q0-.3,z1:Q0-.02},Vr={x0:-1.44,x1:-1.16,y0:vo.top-.002,y1:vo.top+.018},Tr={cx:-1.3,cz:Q0-.165,w:.2,d:.255,y:vo.top+.0012},An={x:-1.03,z:Q0-.14,r:.042,h:.075},m0={x:-.86,z:Q0-.12,h:.085,r:.019};m0.flame=[m0.x,vo.top+.012+m0.h+.028,m0.z];var N1={a:[An.x-.004,vo.top+.03,An.z+.004],b:[An.x-.13,vo.top+.34,An.z-.12]},A0=[-1.5,2.42,44.66],Z0=[-1.78,1.95,E0+.09],Xr={x:-1.32,z:44.08,y:.64,heading:.32},Sb={window:{eye:[-1.3,1.33,42.8],target:[n0.x,1.37,Q0],fov:54},paper:{eye:[-1.3,1.4,43.23],target:[Tr.cx,vo.top,Tr.cz+.01],fov:40},front:{eye:[1.6,1.62,43],target:[-.9,1.35,43],fov:55},bay:{eye:[4.2,2.1,44.6],target:[-1,1.9,44.5],fov:55}},Hn={z0:(E0+Q0)/2+.03,z1:(E0+Q0)/2+.56,y0:.98,y1:1.78,x:Wo+.03,cell:.047};Sb.peek={eye:[-1.2,1.42,42.95],target:[Ta.PLAY.stoolX-Ta.OFF[0],.85,Ta.PLAY.keyFront+.2],fov:30};var Ls={ink:null,inkDirty:!1,fold:0,slide:0,shown:!0,active:!1};function _b(){return`
	// a quatrefoil hole in the brass (g: metres across the window from its centre)
	float grilleHole(vec2 g) {
		vec2 q = fract(g / ${Ie(n0.cell)} + 0.5) - 0.5;
		float d = min(min(length(q - vec2(0.17, 0.0)), length(q + vec2(0.17, 0.0))),
		              min(length(q - vec2(0.0, 0.17)), length(q + vec2(0.0, 0.17))));
		d = min(d, length(q) - 0.04);
		return 1.0 - smoothstep(0.15, 0.19, d);
	}
	// how much of the lamp's light reaches p (on the penitent's side) through the window
	float throughGrille(vec3 p, float soft) {
		vec3 d = p - ${ua(A0)};
		if (d.z > -0.001) return 0.0;
		float t = (${Ie(n0.z)} - ${Ie(A0[2])}) / d.z;
		vec2 g = (${ua(A0)} + d * t).xy - vec2(${Ie(n0.x)}, ${Ie(n0.y)});
		float inWin = (1.0 - smoothstep(${Ie(n0.w/2-.01)}, ${Ie(n0.w/2)} + soft, abs(g.x))) *
		              (1.0 - smoothstep(${Ie(n0.h/2-.01)}, ${Ie(n0.h/2)} + soft, abs(g.y)));
		// the lamp is not a point: the pattern blurs the further it falls
		// from the brass
		float pen = 0.045 * abs(p.z - ${Ie(n0.z)}) / abs(${Ie(n0.z)} - ${Ie(A0[2])}) / ${Ie(n0.cell)};
		vec2 qc = fract(g / ${Ie(n0.cell)} + 0.5) - 0.5;
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
		vec3 c = ${ua(m0.flame)};
		vec3 d = c - p;
		float s = 1.0;
		// the pot: a short upright cylinder
		vec2 a = vec2(${Ie(An.x)}, ${Ie(An.z)}) - p.xz;
		vec2 dd = d.xz;
		float t = clamp(dot(a, dd) / max(dot(dd, dd), 1e-5), 0.0, 1.0);
		float r = length(p.xz + dd * t - vec2(${Ie(An.x)}, ${Ie(An.z)}));
		float y = p.y + d.y * t;
		s *= mix(1.0, 0.25, (1.0 - smoothstep(${Ie(An.r*.7)}, ${Ie(An.r*1.6)}, r)) * (1.0 - smoothstep(${Ie(vo.top+An.h*.8)}, ${Ie(vo.top+An.h*1.3)}, y)));
		// the quill: a thin capsule
		vec3 qa = ${ua(N1.a)}, qb = ${ua(N1.b)};
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
		bool inB1 = p.z < ${Ie(Q0)} && p.z > ${Ie(E0-.04)} && p.x < ${Ie(Wo+.02)};
		bool inPriest = p.z >= ${Ie(Q0)} && p.z < ${Ie(Yr)} && p.x < ${Ie(Wo)};
		bool inB2 = p.z >= ${Ie(Yr)} && p.z < ${Ie(Jn+.04)} && p.x < ${Ie(Wo)};
		// how open to the hall it is
		float open = 1.0;
		if (inB1) open = mix(0.7, 1.1, smoothstep(${Ie(dn)}, ${Ie(Wo)}, p.x));
		if (inPriest) open = 0.16;
		if (inB2) open = 0.10;
		// deeper into the bay, a little less of the hall's light
		open *= mix(0.62, 1.0, smoothstep(${Ie(d0.x0)}, 0.3, p.x));
		// the stair hall's candlelight (it stands there now: see stairhall.js)
		vec3 rs;
		vec3 col = roomLight(p + ${ua(Ta.OFF)}, N, V, gloss, rs) * 1.25 * open;
		spec += rs * open;
		// the lamp, warm, behind the brass
		vec3 Ld = ${ua(A0)} - p;
		float dl = length(Ld);
		vec3 L = Ld / dl;
		float T = inPriest ? 1.0 : (inB1 ? throughGrille(p, 0.0) : 0.0);
		vec3 lampCol = vec3(1.0, 0.70, 0.40) * mix(3.2, 1.0, night);
		vec3 lamp = lampCol * T * max(dot(N, L), 0.0) / (1.0 + dl * dl * 1.6);
		col += lamp;
		spec += lampCol * T * pow(max(dot(N, normalize(L + V)), 0.0), mix(8.0, 60.0, gloss)) * gloss / (1.0 + dl * dl * 1.6);
		// the little lamp in the open booth
		if (inB1) {
			vec3 Sd = ${ua(Z0)} - p;
			float ds = length(Sd);
			vec3 Ls = Sd / ds;
			vec3 sc = vec3(1.0, 0.72, 0.42) * mix(1.5, 0.35, night);
			col += sc * (max(dot(N, Ls), 0.0) * 0.8 + 0.2) / (0.15 + ds * ds * 1.6);
			spec += sc * pow(max(dot(N, normalize(Ls + V)), 0.0), mix(8.0, 60.0, gloss)) * gloss * 0.6 / (0.15 + ds * ds * 1.6);
		}
		// the candle
		if (night > 0.01) {
			vec3 Cd = ${ua(m0.flame)} - p;
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
	}`}var un={WOOD:0,CARVED:1,VELVET:2,CUSHION:3,BRASS:4,INKGLASS:5,QUILL:6,LAMPGLASS:7,DARKWOOD:8};function kb(){let t=[],e=[],o=[],r=[],n=[],a=(f,l)=>[f[0]-l[0],f[1]-l[1],f[2]-l[2]],s=(f,l)=>[f[1]*l[2]-f[2]*l[1],f[2]*l[0]-f[0]*l[2],f[0]*l[1]-f[1]*l[0]],i=f=>{let l=Math.hypot(f[0],f[1],f[2])||1;return[f[0]/l,f[1]/l,f[2]/l]},c={pos:t,nrm:e,kind:o,uv:r,idx:n,norm:i,cross:s,sub:a};return c.v=(f,l,v,d)=>(t.push(f[0],f[1],f[2]),e.push(l[0],l[1],l[2]),o.push(v),r.push(d?d[0]:0,d?d[1]:0),t.length/3-1),c.quad=(f,l,v,d,p,u)=>{let h=i(s(a(l,f),a(d,f)));u=u||[[0,0],[1,0],[1,1],[0,1]];let g=c.v(f,h,p,u[0]),m=c.v(l,h,p,u[1]),x=c.v(v,h,p,u[2]),y=c.v(d,h,p,u[3]);n.push(g,m,x,g,x,y)},c.box=(f,l,v,d,p,u,h)=>{let g=(m,x,y,_,M,b,S,z)=>c.quad(m,x,y,_,h,[[M,S],[b,S],[b,z],[M,z]]);g([d,l,v],[d,l,u],[d,p,u],[d,p,v],v,u,l,p),g([f,l,u],[f,l,v],[f,p,v],[f,p,u],u,v,l,p),g([f,p,v],[d,p,v],[d,p,u],[f,p,u],f,d,v,u),g([f,l,u],[d,l,u],[d,l,v],[f,l,v],f,d,u,v),g([f,l,u],[d,l,u],[d,p,u],[f,p,u],f,d,l,p),g([d,l,v],[f,l,v],[f,p,v],[d,p,v],d,f,l,p)},c.tube=(f,l,v,d)=>{d=d||6;let p=t.length/3;for(let u=0;u<f.length;u++){let h=f[Math.max(0,u-1)],g=f[Math.min(f.length-1,u+1)],m=i(a(g,h)),x=Math.abs(m[1])>.9?[1,0,0]:[0,1,0],y=i(s(m,x)),_=s(y,m),M=typeof l=="function"?l(u/(f.length-1)):l;for(let b=0;b<=d;b++){let S=b/d*Ns*2,z=Math.cos(S),k=Math.sin(S),C=[y[0]*z+_[0]*k,y[1]*z+_[1]*k,y[2]*z+_[2]*k];c.v([f[u][0]+C[0]*M,f[u][1]+C[1]*M,f[u][2]+C[2]*M],C,v,[u/(f.length-1),b/d])}}for(let u=0;u<f.length-1;u++)for(let h=0;h<d;h++){let g=p+u*(d+1)+h,m=g+d+1;n.push(g,g+1,m,g+1,m+1,m)}},c.lathe=(f,l,v,d,p)=>{p=p||20;let u=t.length/3;for(let h=0;h<v.length;h++){let[g,m]=v[h],x=v[Math.max(0,h-1)],y=v[Math.min(v.length-1,h+1)],_=y[0]-x[0],M=y[1]-x[1];for(let b=0;b<=p;b++){let S=b/p*Ns*2,z=Math.cos(S),k=Math.sin(S),C=i([M*z,-_,M*k]);c.v([f+z*g,m,l+k*g],C,d,[b/p,h/(v.length-1)])}}for(let h=0;h<v.length-1;h++)for(let g=0;g<p;g++){let m=u+h*(p+1)+g,x=m+p+1;n.push(m,x,m+1,m+1,x,x+1)}},c.spire=(f,l,v,d,p,u)=>{let h=[[-d,-d],[d,-d],[d,d],[-d,d]];for(let g=0;g<4;g++){let m=h[g],x=h[(g+1)%4],y=[f+m[0],v,l+m[1]],_=[f+x[0],v,l+x[1]],M=[f,p,l],b=i(s(a(M,y),a(_,y))),S=c.v(y,b,u,[0,0]),z=c.v(_,b,u,[1,0]),k=c.v(M,b,u,[.5,1]);n.push(S,k,z)}},c.orient=()=>{for(let f=0;f<n.length;f+=3){let[l,v,d]=[n[f],n[f+1],n[f+2]],p=g=>[t[g*3],t[g*3+1],t[g*3+2]],u=s(a(p(v),p(l)),a(p(d),p(l))),h=[0,1,2].map(g=>e[l*3+g]+e[v*3+g]+e[d*3+g]);u[0]*h[0]+u[1]*h[1]+u[2]*h[2]<0&&(n[f+1]=d,n[f+2]=v)}return c},c}function L1(t,e,o,r){if(t<=e)return o;let n=t-e;return n>=r?0:Math.max(0,Math.sqrt(r*r-n*n)-(r-o))}var M0={ys:1.78,a:.56,r:.78};M0.apex=M0.ys+Math.sqrt(M0.r*M0.r-(M0.r-M0.a)*(M0.r-M0.a));function Rz(){let t=kb(),e=un.WOOD,o=un.CARVED,r=un.DARKWOOD,n=.06;t.box(dn,0,E0,Wo+.08,Ar,Jn,r),t.box(dn,bn-.06,E0-.04,Wo+.1,bn,Jn+.04,e),t.box(Wo,bn-.2,E0-.06,Wo+.12,bn-.06,Jn+.06,e),t.box(Wo+.02,bn,E0-.08,Wo+.14,bn+.07,Jn+.08,r),t.box(dn,Ar,E0,dn+.04,bn-.06,Jn,e);for(let[l,v,d]of[[E0-n,E0,-1],[Jn,Jn+n,1]]){t.box(dn,0,l,Wo+.08,bn,v,e);let p=d<0?l-.018:v;t.box(dn+.18,.45,Math.min(p,p+.018),Wo-.12,2.35,Math.max(p,p+.018),r),t.box(dn+.26,.55,Math.min(p,p+.03*d),Wo-.2,2.25,Math.max(p,p+.03*d),e)}{let l=Q0-.02,v=Q0+.02,d=n0.x-n0.w/2,p=n0.x+n0.w/2,u=n0.y-n0.h/2,h=n0.y+n0.h/2;t.box(dn,Ar,l,Wo,Vr.y0,v,e),t.box(dn,Vr.y0,l,Vr.x0,Vr.y1,v,e),t.box(Vr.x1,Vr.y0,l,Wo,Vr.y1,v,e),t.box(dn,Vr.y1,l,Wo,u,v,e),t.box(dn,u,l,d,h,v,e),t.box(p,u,l,Wo,h,v,e),t.box(dn,h,l,Wo,bn-.06,v,e);let g=.05,m=l-.025;t.box(d-g,u-g,m,p+g,u,l,r),t.box(d-g,h,m,p+g,h+g,l,r),t.box(d-g,u,m,d,h,l,r),t.box(p,u,m,p+g,h,l,r),t.box(d-g-.02,h+g,m-.015,p+g+.02,h+g+.03,l,e),t.box(Vr.x0-.01,Vr.y1,l-.006,Vr.x1+.01,Vr.y1+.008,l,un.BRASS)}{let l=Hn,v=Wo+.008,d=Wo+.052;t.box(v,l.y0,l.z0-.035,d,l.y1,l.z0,r),t.box(v,l.y0,l.z0,d,l.y0+.04,l.z1,r),t.box(v,l.y1-.04,l.z0,d,l.y1,l.z1,r),t.box(v+.008,Ar,l.z0-.035,d-.008,l.y0,l.z1,e),t.box(d-.008,Ar+.12,l.z0+.03,d,l.y0-.08,l.z1-.06,r),t.box(v-.004,l.y0-.012,l.z0-.045,d+.012,l.y0,l.z1,un.BRASS)}t.box(dn,Ar,Yr-.02,Wo,bn-.06,Yr+.02,e),t.box(vo.x0,vo.top-.035,vo.z0,vo.x1,vo.top,vo.z1,e),t.tube([[vo.x0,vo.top-.018,vo.z0],[vo.x1,vo.top-.018,vo.z0]],.02,e,8);for(let l of[vo.x0+.1,vo.x1-.1]){let v=[];for(let d=0;d<=8;d++){let p=d/8;v.push([l,vo.top-.04-.22*p,vo.z1-.02-.22*Math.cos(p*Ns/2)])}t.tube(v,.018,r,6)}t.box(dn+.06,.12,E0,Wo-.1,.44,E0+.42,r),t.box(dn+.08,.44,E0+.01,Wo-.12,.52,E0+.41,un.CUSHION),t.box(dn+.06,.12,Jn-.42,Wo-.1,.44,Jn,r),t.box(Z0[0]-.05,Z0[1]-.16,E0,Z0[0]+.05,Z0[1]-.02,E0+.012,un.BRASS),t.tube([[Z0[0],Z0[1]-.09,E0+.012],[Z0[0],Z0[1]-.09,Z0[2]-.01],[Z0[0],Z0[1]-.05,Z0[2]]],.006,un.BRASS,6),t.lathe(Z0[0],Z0[2],[[0,Z0[1]-.05],[.028,Z0[1]-.035],[.034,Z0[1]+.01],[.024,Z0[1]+.06],[.026,Z0[1]+.065]],un.LAMPGLASS,16),t.box(Xr.x-.22,.12,Xr.z-.24,Xr.x+.22,Xr.y-.05,Xr.z+.16,r),t.box(Xr.x-.24,Xr.y-.05,Xr.z-.26,Xr.x+.24,Xr.y,Xr.z+.18,un.CUSHION),t.tube([[A0[0],bn-.06,A0[2]],[A0[0],A0[1]+.07,A0[2]]],.005,un.BRASS,5),t.lathe(A0[0],A0[2],[[0,A0[1]+.09],[.03,A0[1]+.08],[.02,A0[1]+.06]],un.BRASS,12),t.lathe(A0[0],A0[2],[[0,A0[1]-.06],[.035,A0[1]-.04],[.045,A0[1]],[.035,A0[1]+.05],[.018,A0[1]+.07]],un.LAMPGLASS,16);let a=Wo,s=Wo+n;function i(l,v,d){let p=(l+v)/2,u=40,h=[];for(let m=0;m<=u;m++)h.push(Ar+(bn-.2-Ar)*m/u);let g=[];h.forEach(m=>g.push(m));for(let m=1;m<24;m++)g.push(M0.ys+(M0.apex-M0.ys)*m/24);g.sort((m,x)=>m-x);for(let m=0;m<g.length-1;m++){let x=g[m],y=g[m+1];if(y-x<1e-4)continue;let _=d?L1(x,M0.ys,M0.a,M0.r):0,M=d?L1(y,M0.ys,M0.a,M0.r):0,b=(S,z)=>[S,z];t.quad([s,x,p-_],[s,x,l],[s,y,l],[s,y,p-M],e,[b(p-_,x),b(l,x),b(l,y),b(p-M,y)]),t.quad([s,x,v],[s,x,p+_],[s,y,p+M],[s,y,v],e,[b(v,x),b(p+_,x),b(p+M,y),b(v,y)]),(_>0||M>0)&&(t.quad([a,x,p-_],[s,x,p-_],[s,y,p-M],[a,y,p-M],r),t.quad([s,x,p+_],[a,x,p+_],[a,y,p+M],[s,y,p+M],r),t.quad([a,x,l],[a,x,p-_],[a,y,p-M],[a,y,l],e),t.quad([a,x,p+_],[a,x,v],[a,y,v],[a,y,p+M],e))}if(t.box(a,bn-.2,l,s,bn-.06,v,e),t.box(s,bn-.42,l+.05,s+.012,bn-.24,v-.05,o),d){let m=[];for(let x=0;x<=30;x++){let y=x/30,_=y<.5?Ar+(M0.apex-Ar)*(y*2):M0.apex-(M0.apex-Ar)*((y-.5)*2),M=y<.5?-1:1;m.push([s+.01,Math.min(_,M0.apex-.002),p+M*(L1(_,M0.ys,M0.a,M0.r)+.03)])}t.tube(m,.022,r,6)}}i(E0,Q0,!0),i(Yr,Jn,!0);{let l=Q0,v=Yr,d=(l+v)/2;t.box(a,Ar,l,s,bn-.06,v,e);let p={ys:1.85,a:.55,r:.8},u=[];for(let h=0;h<=40;h++){let g=h/40,m=p.ys+Math.sqrt(p.r*p.r-(p.r-p.a)*(p.r-p.a)),x=g<.5?.35+(m-.35)*(g*2):m-(m-.35)*((g-.5)*2),y=g<.5?-1:1;u.push([s+.012,Math.min(x,m-.002),d+y*L1(x,p.ys,p.a,p.r)])}u.push(u[0]),t.tube(u,.02,r,6),t.box(s,.95,d-.22,s+.015,1.3,d+.22,o),t.box(s,.35,d-.42,s+.01,.75,d+.42,r),t.tube([[s+.03,1.12,v-.13],[s+.06,1.12,v-.13],[s+.06,1.12,v-.2]],.009,un.BRASS,6)}[E0-.02,Q0,Yr,Jn+.02].forEach((l,v)=>{let d=v===1||v===2,p=.075,u=bn+(d?.62:.4);t.box(Wo+.06,0,l-p,Wo+.06+2*p,u,l+p,e),t.box(Wo+.04,u-.04,l-p-.02,Wo+.08+2*p,u,l+p+.02,r);let h=Wo+.06+p,g=d?.62:.5;t.spire(h,l,u,p*.95,u+g,e);for(let m=1;m<=3;m++){let x=u+g*m/4.2,y=p*.95*(1-m/4.2)+.02;for(let[_,M]of[[1,0],[-1,0],[0,1],[0,-1]])t.tube([[h+_*(y-.02),x-.02,l+M*(y-.02)],[h+_*(y+.015),x+.03,l+M*(y+.015)]],.008,r,4)}t.lathe(h,l,[[0,u+g-.02],[.03,u+g+.03],[.022,u+g+.07],[0,u+g+.1]],e,10)});let f=(l,v,d)=>{let p=(l+v)/2,u=Wo+.075,h=bn+.07,g=h+d,m=[1,0,0],x=t.v([u,h,l],m,o,[l,h]),y=t.v([u,h,v],m,o,[v,h]),_=t.v([u,g,p],m,o,[p,g]);t.idx.push(x,y,_);let M=t.v([u-.04,h,l],[-1,0,0],e),b=t.v([u-.04,h,v],[-1,0,0],e),S=t.v([u-.04,g,p],[-1,0,0],e);t.idx.push(M,S,b);let z=[],k=[];for(let P=0;P<=10;P++){let q=P/10;z.push([u+.02,h+d*q,l+(p-l)*q]),k.push([u+.02,h+d*q,v+(p-v)*q])}t.tube(z,.022,r,6),t.tube(k,.022,r,6);for(let P=2;P<=8;P+=2)for(let q of[z[P],k[P]])t.tube([q,[q[0]+.01,q[1]+.06,q[2]+(q===z[P]?-.02:.02)]],.01,r,4);t.lathe(u,p,[[0,g],[.035,g+.06],[.022,g+.12],[0,g+.16]].map(([P,q])=>[P,q]),e,10);let C=Math.min(.17,d*.32),R=h+d*.38,U=[];for(let P=0;P<=24;P++){let q=P/24*Ns*2;U.push([u+.012,R+Math.sin(q)*C,p+Math.cos(q)*C])}t.tube(U,.012,r,5)};f(E0-.02,Q0,.52),f(Q0,Yr,.82),f(Yr,Jn+.02,.52),t.lathe(An.x,An.z,[[0,vo.top],[.036,vo.top+.001],[An.r,vo.top+.012],[An.r*1.02,vo.top+.035],[.036,vo.top+.052],[.02,vo.top+.062],[.016,vo.top+.068]],un.INKGLASS,24),t.lathe(An.x,An.z,[[.016,vo.top+.064],[.021,vo.top+.066],[.022,vo.top+.075],[.016,vo.top+.076],[0,vo.top+.072]],un.BRASS,20);{let l=N1.a,v=N1.b,d=26,p=x=>{let y=Math.sin(x*Ns)*.025;return[l[0]+(v[0]-l[0])*x+y*.6,l[1]+(v[1]-l[1])*x+y*.4,l[2]+(v[2]-l[2])*x+y]},u=[];for(let x=0;x<=d;x++)u.push(p(x/d));t.tube(u,x=>.0028*(1-.7*x)+6e-4,un.QUILL,5);let h=t.norm(t.sub(v,l)),g=t.norm(t.cross(h,[.2,1,.1])),m=t.cross(g,h);for(let x of[-1,1]){let y=t.pos.length/3;for(let _=0;_<=d;_++){let M=_/d,b=p(M),S=M<.28?0:(x>0?.03:.02)*Math.sin(Ns*Math.pow((M-.28)/.72,.75)),z=S*.25,k=[b[0]+g[0]*x*S-m[0]*z,b[1]+g[1]*x*S-m[1]*z,b[2]+g[2]*x*S-m[2]*z];t.v(b,m,un.QUILL,[M,0]),t.v(k,m,un.QUILL,[M,x])}for(let _=0;_<d;_++){let M=y+_*2;t.idx.push(M,M+2,M+1,M+1,M+2,M+3)}}}return t.orient()}function Cz(t,e){let r=d0.top,n=d0.x0;t(n-.35,0,d0.z0-.35,n,r+.35,d0.z1+.35),t(n,0,d0.z0-.35,-.35,r,d0.z0),t(n,0,d0.z1,-.35,r,d0.z1+.35),t(n,r,d0.z0,-.35,r+.35,d0.z1),t(.35,0,d0.z0-.42,.35+.16,r,d0.z0),t(.35,0,d0.z1,.35+.16,r,d0.z1+.42),t(.35,r,d0.z0-.5,.35+.18,r+.42,d0.z1+.5),t(.35,r+.42,d0.z0-.6,.35+.26,r+.52,d0.z1+.6),t(.35,0,d0.z0-.5,.35+.22,.42,d0.z0),t(.35,0,d0.z1,.35+.22,.42,d0.z1+.5),t(-.35-.01,0,d0.z0,.35+.12,.02,d0.z1),e(n,d0.z0,-.35,d0.z1)}Lr.exports=t=>{let e=fs(),o=wb.GLSL,r=Rz(),n=`
	precision highp float;
	${o}
	uniform float time;
	${e.lanternGLSL()}
	${Ta.roomGLSL()}
	${_b()}
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
		}`,attributes:{position:r.pos,normal:r.nrm,kind:r.kind,uv:r.uv},elements:r.idx});function i(yt,mt,zt,It){let se=[],Ee=[],Qe=[],me=[],qe=[],j=Wo-.02,ft=M0.apex+.08,xt=Ar+.015;for(let Qt=0;Qt<=40;Qt++){let ce=Qt/40,Kt=ft+(xt-ft)*ce;for(let qt=0;qt<=90;qt++){let rt=qt/90,Ct=zt?.2+.13*ce*ce:mt-yt,we=yt+rt*Ct,te=zt?.05+.02*ce:.035+.01*Math.sin(rt*7),Nt=rt*It*Ns*2+Math.sin(ce*2+rt*5)*.6,$e=j-te*(.5+.5*Math.sin(Nt))-(zt?.02*ce:0),De=[1,0,-(-te*.5*Math.cos(Nt)*It*Ns*2/Ct)],je=Math.hypot(De[0],De[1],De[2]);se.push($e,Kt,we),Ee.push(De[0]/je,0,De[2]/je),Qe.push(2),me.push(Math.sin(Nt),ce)}}for(let Qt=0;Qt<40;Qt++)for(let ce=0;ce<90;ce++){let Kt=Qt*91+ce,qt=Kt+90+1;qe.push(Kt,qt,Kt+1,Kt+1,qt,qt+1)}for(let Qt=0;Qt<qe.length;Qt+=3){let[ce,Kt,qt]=[qe[Qt],qe[Qt+1],qe[Qt+2]],rt=Nt=>[se[Nt*3],se[Nt*3+1],se[Nt*3+2]],Ct=[0,1,2].map(Nt=>rt(Kt)[Nt]-rt(ce)[Nt]),we=[0,1,2].map(Nt=>rt(qt)[Nt]-rt(ce)[Nt]);Ct[1]*we[2]-Ct[2]*we[1]<0&&(qe[Qt+1]=qt,qe[Qt+2]=Kt)}return{pos:se,nrm:Ee,kind:Qe,uv:me,idx:qe}}let c=i(E0+.02,E0+.4,!0,6),f=i(Yr+.04,Jn-.04,!1,9),l={pos:c.pos.concat(f.pos),nrm:c.nrm.concat(f.nrm),kind:c.kind.concat(f.kind),uv:c.uv.concat(f.uv),idx:c.idx.concat(f.idx.map(yt=>yt+c.pos.length/3))},v=t({vert:`
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
		}`,attributes:{position:l.pos,normal:l.nrm,uv:l.uv},elements:l.idx}),d=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec2 corner;
		varying vec3 v_pos, v_eye;
		void main() {
			vec3 p = vec3(${Ie(n0.x)} + corner.x * ${Ie(n0.w/2)}, ${Ie(n0.y)} + corner.y * ${Ie(n0.h/2)}, ${Ie(n0.z)});
			v_pos = p; v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`${n}
		varying vec3 v_pos, v_eye;
		void main() {
			vec2 g = v_pos.xy - vec2(${Ie(n0.x)}, ${Ie(n0.y)});
			float hole = grilleHole(g);
			if (hole > 0.5) discard;
			vec3 N = vec3(0.0, 0.0, v_eye.z < ${Ie(n0.z)} ? -1.0 : 1.0);
			vec3 V = normalize(v_eye - v_pos);
			vec3 spec;
			vec3 light = boothLight(v_pos + N * 0.01, N, V, 0.8, spec);
			// dark old bronze, its edges catching the lamp behind it
			vec3 base = vec3(0.16, 0.10, 0.05);
			vec3 col = base * light + spec * 0.6;
			float edge = smoothstep(0.25, 0.5, hole);
			col += vec3(1.0, 0.66, 0.34) * edge * mix(0.35, 0.22, night);
			gl_FragColor = vec4(col, 1.0);
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,cull:{enable:!1}}),p=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec2 corner;
		varying vec3 v_pos, v_eye;
		void main() {
			vec3 p = vec3(${Ie(Hn.x)}, ${Ie((Hn.y0+Hn.y1)/2)} + corner.y * ${Ie((Hn.y1-Hn.y0)/2-.04)}, ${Ie((Hn.z0+Hn.z1)/2)} + corner.x * ${Ie((Hn.z1-Hn.z0)/2)});
			v_pos = p; v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`${n}
		varying vec3 v_pos, v_eye;
		void main() {
			vec2 g = (v_pos.zy - vec2(${Ie((Hn.z0+Hn.z1)/2)}, ${Ie((Hn.y0+Hn.y1)/2)})) * ${Ie(n0.cell/Hn.cell)};
			float hole = grilleHole(g);
			if (hole > 0.5) discard;
			vec3 N = vec3(v_eye.x < ${Ie(Hn.x)} ? -1.0 : 1.0, 0.0, 0.0);
			vec3 V = normalize(v_eye - v_pos);
			vec3 spec;
			vec3 light = boothLight(v_pos + N * 0.01, N, V, 0.8, spec);
			vec3 base = vec3(0.16, 0.10, 0.05);
			vec3 col = base * light + spec * 0.6;
			// the rims of the holes catch the candles in the hall beyond
			float edge = smoothstep(0.25, 0.5, hole);
			col += vec3(1.0, 0.62, 0.30) * edge * (N.x < 0.0 ? 0.30 : 0.10);
			gl_FragColor = vec4(col, 1.0);
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,cull:{enable:!1}}),u=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec2 corner;
		varying vec2 v_c;
		void main() {
			vec3 p = vec3(${Ie(n0.x)} + corner.x * 0.75, ${Ie(n0.y)} + corner.y * 0.9, ${Ie(Yr-.03)});
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),h=14,g=[];for(let yt=0;yt<h;yt++)[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(mt=>g.push(mt[0],mt[1],(yt+.5)/h));let m=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec3 c;
		varying vec3 v_pos;
		void main() {
			// slices across the booth, from the window back towards the bench
			vec3 p = vec3(${Ie(Oz)} + c.x * ${Ie((Wo-dn)/2-.02)}, 0.9 + (c.y + 1.0) * 0.8, ${Ie(Q0-.03)} - c.z * 1.25);
			v_pos = p;
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`
		precision highp float;
		uniform float night, time;
		${_b().split("// the candle's light is hidden")[0]}
		varying vec3 v_pos;
		void main() {
			float T = throughGrille(v_pos, 0.0);
			float d = length(v_pos - ${ua(A0)});
			// dust drifting in the beam
			float dust = 0.65 + 0.35 * sin(v_pos.x * 23.0 + time * 0.3) * sin(v_pos.y * 17.0 - time * 0.21) * sin(v_pos.z * 19.0 + time * 0.17);
			vec3 col = vec3(1.0, 0.68, 0.36) * T * dust * 0.035 / (0.4 + d * d * 0.5) * mix(1.0, 0.7, night);
			gl_FragColor = vec4(col, 1.0);
		}`.replace("float grilleHole","float grilleHole"),attributes:{c:{buffer:t.buffer(g),size:3}},count:g.length/3,depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}}),x=(()=>{if(typeof document=="undefined")return null;let yt=document.createElement("canvas");yt.width=512,yt.height=652;let mt=yt.getContext("2d");mt.fillStyle="#cdb38a",mt.fillRect(0,0,yt.width,yt.height);let zt=7,It=()=>(zt=zt*1664525+1013904223>>>0,zt/4294967296);for(let Ee=0;Ee<2400;Ee++){mt.fillStyle=`rgba(${It()<.5?"90,62,30":"245,230,200"},${.03+It()*.05})`;let Qe=It()*yt.width,me=It()*yt.height;mt.fillRect(Qe,me,1+It()*14,1)}for(let Ee=0;Ee<26;Ee++){let Qe=It()*yt.width,me=It()*yt.height,qe=20+It()*90,Ge=mt.createRadialGradient(Qe,me,0,Qe,me,qe);Ge.addColorStop(0,`rgba(120,80,35,${.04+It()*.06})`),Ge.addColorStop(1,"rgba(120,80,35,0)"),mt.fillStyle=Ge,mt.fillRect(Qe-qe,me-qe,qe*2,qe*2)}let se=mt.createRadialGradient(yt.width/2,yt.height/2,yt.width*.3,yt.width/2,yt.height/2,yt.height*.72);return se.addColorStop(0,"rgba(110,70,30,0)"),se.addColorStop(1,"rgba(110,70,30,0.38)"),mt.fillStyle=se,mt.fillRect(0,0,yt.width,yt.height),yt})(),y=x?t.texture({data:x,min:"linear",mag:"linear",flipY:!1}):t.texture(),_=t.texture({shape:[8,8],data:new Uint8Array(8*8*4)}),M=[18,24],b=[],S=[];for(let yt=0;yt<=M[1];yt++)for(let mt=0;mt<=M[0];mt++)b.push(mt/M[0],yt/M[1]);for(let yt=0;yt<M[1];yt++)for(let mt=0;mt<M[0];mt++){let zt=yt*(M[0]+1)+mt,It=zt+M[0]+1;S.push(zt,zt+1,It,zt+1,It+1,It)}let z=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale, fold, slide;
		attribute vec2 st;
		varying vec3 v_pos, v_n, v_eye;
		varying vec2 v_st;
		void main() {
			// s across (texture left = +x), t from the near edge (0) to the far (1)
			float s = st.x, t = st.y;
			float x = ${Ie(Tr.cx+Tr.w/2)} - s * ${Ie(Tr.w)};
			float zNear = ${Ie(Tr.cz-Tr.d/2)};
			vec3 p = vec3(x, ${Ie(Tr.y)}, zNear + t * ${Ie(Tr.d)});
			vec3 n = vec3(0.0, 1.0, 0.0);
			// a slight cockle
			p.y += 0.0012 * sin(s * 7.0 + t * 3.0) * sin(t * 5.0);
			// the near half folds up and over onto the far half
			if (t < 0.5) {
				float a = fold * 3.14159 * 0.985;
				float dd = (0.5 - t) * ${Ie(Tr.d)};
				float zf = zNear + 0.5 * ${Ie(Tr.d)};
				p.z = zf - dd * cos(a);
				p.y = ${Ie(Tr.y)} + dd * sin(a) + 0.0016 * fold;
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
			if (v_pos.z > ${Ie(Q0+.015)}) discard;
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
		}`,attributes:{st:{buffer:t.buffer(b),size:2}},elements:S,uniforms:{fold:()=>Ls.fold,slide:()=>Ls.slide,paperTex:y,inkTex:_},cull:{enable:!1}}),k=kb();k.lathe(m0.x,m0.z,[[0,vo.top],[.048,vo.top+.002],[.052,vo.top+.012],[.046,vo.top+.014],[.022,vo.top+.012],[0,vo.top+.012]],un.BRASS,24),k.lathe(m0.x,m0.z,[[0,vo.top+.012],[m0.r,vo.top+.012],[m0.r*1.02,vo.top+.012+m0.h*.6],[m0.r,vo.top+.012+m0.h],[m0.r*.75,vo.top+.012+m0.h-.004],[0,vo.top+.012+m0.h-.008]],9,20),k.tube([[m0.x,vo.top+.012+m0.h-.008,m0.z],[m0.x+.001,vo.top+.012+m0.h+.012,m0.z]],.0012,8,4),k.orient();let C=t({vert:a,frag:`${n}
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
				float up = smoothstep(${Ie(vo.top+m0.h*.4)}, ${Ie(vo.top+.012+m0.h)}, v_pos.y);
				col += vec3(1.0, 0.55, 0.22) * up * 0.22 * candleFlicker();
			}
			gl_FragColor = vec4(col * night, 1.0);
		}`,attributes:{position:k.pos,normal:k.nrm,kind:k.kind,uv:k.uv},elements:k.idx}),R=t({vert:`
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
			vec3 p = ${ua(m0.flame)} + right * corner.x * size.x + vec3(0.0, 1.0, 0.0) * corner.y * size.y;
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{halo:t.prop("halo")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),U=[0,0],P=t({uniforms:{view:t.prop("view")}}),q=new Float32Array(16);function at(yt){Nz.translate(q,yt.view,Ta.OFF),P({view:q},()=>St(yt))}function St(yt){let mt=yt&&yt.reflected;if(s(),v(),d(),p(),Ls.ink&&Ls.inkDirty){let zt=Ls.ink;U[0]!==zt.width||U[1]!==zt.height?(_({data:zt,min:"linear",mag:"linear",flipY:!1}),U=[zt.width,zt.height]):_.subimage(zt),Ls.inkDirty=!1}Ls.shown&&z(),wb.night>.01&&(C(),mt||(R({halo:1}),R({halo:0}))),mt||(u(),m())}return at};Lr.exports.addBay=Cz;Lr.exports.BAY=d0;Lr.exports.OFF=Ta.OFF;Lr.exports.STATE=Ls;var Mb=t=>[t[0]+Ta.OFF[0],t[1]+Ta.OFF[1],t[2]+Ta.OFF[2]];Lr.exports.SHOTS=Object.fromEntries(Object.entries(Sb).map(([t,e])=>[t,Object.assign({},e,{eye:Mb(e.eye),target:Mb(e.target)})]));Lr.exports.SEAT=Xr;Lr.exports.LAMP=A0;Lr.exports.SCONCE=Z0;Lr.exports.GRILLE=n0;Lr.exports.PAPER=Tr;Lr.exports.ZONE={FRONT:Wo,BACK:dn,ZA:E0,ZB:Q0,ZC:Yr,ZD:Jn}});var Lp=Tt((KT,Eb)=>{"use strict";function $z(t){let e=t>>>0||1;return function(){return e=e*1664525+1013904223>>>0,e/4294967296}}var zb={stroke:.05,letter:.045,word:.15,comma:.28,stop:.45,line:.25,para:.6},Pz=["th","ng","er"];function Iz(t,e,o){o=Object.assign({ink:"#2a1d12",xh:14,speed:23,lineHeight:2.85,seed:7,width:.12,pace:.45},o||{});let r=t.getContext("2d"),n={};Object.keys(zb).forEach(h=>{n[h]=zb[h]*o.pace});let a=[],s=0,i=0,c=0,f=[];function l(h,g){let m=$z(o.seed),x=o.xh,y={},_=q=>{let at=e[q];if(!at)return null;let St=Math.floor(m()*at.length);return at.length>1&&St===y[q]&&(St=(St+1)%at.length),y[q]=St,at[St]},M=q=>{if(e[q])return{g:_(q),sc:1};let at=q.toLowerCase();return e[at]?{g:_(at),sc:/[A-Z]/.test(q)?1.32:1}:null},b=[],S=.15,z=0,k=0,C=(m()-.5)*.02,R=g/x,U=h.split(/\n\s*\n/);U.forEach((q,at)=>{q.replace(/\s+/g," ").trim().split(" ").forEach(yt=>{let mt=[];for(let Ee=0;Ee<yt.length;Ee++){let Qe=yt.substr(Ee,2).toLowerCase();if(Pz.indexOf(Qe)>=0&&e[Qe]&&m()<.55&&yt[Ee]===yt[Ee].toLowerCase()){mt.push({ch:Qe,gl:{g:_(Qe),sc:1}}),Ee++;continue}let me=M(yt[Ee]);me&&me.g&&mt.push({ch:yt[Ee],gl:me})}let zt=mt.map(()=>.17+m()*.07),It=mt.reduce((Ee,Qe,me)=>Ee+Qe.gl.g.w*Qe.gl.sc+zt[me],0);z>0&&z+It>R&&(z=0,k++,S+=n.line,C=(m()-.5)*.02),mt.forEach((Ee,Qe)=>{let me=Ee.gl.g,qe=Ee.gl.sc*(.95+m()*.1),Ge=(m()-.5)*.06,Q=(m()-.5)*.08+C*z,j=z,ft=k*o.lineHeight+1.9+Q,xt=Math.cos(Ge),Qt=Math.sin(Ge),ce=qt=>[(j+(qt[0]*xt-qt[1]*Qt)*qe)*x,(ft+(qt[0]*Qt+qt[1]*xt)*qe)*x],Kt=(qt,rt)=>{let Ct=0;for(let te=1;te<qt.length;te++)Ct+=Math.hypot(qt[te][0]-qt[te-1][0],qt[te][1]-qt[te-1][1]);let we=Math.max(o.minDur||(rt?.06:.07),Ct/(o.speed*x));b.push({pts:qt,L:Ct,start:S,dur:we,dot:rt}),S+=we};if(me.s.forEach((qt,rt)=>{rt>0&&(S+=n.stroke),Kt(qt.map(ce),!1)}),me.dot){let qt=me.s[0][0];me.s.forEach(Ct=>Ct.forEach(we=>{we[1]<qt[1]&&(qt=we)}));let rt=ce([qt[0]+.1,-1.36]);S+=n.stroke*1.4,Kt([rt,[rt[0]+x*.05,rt[1]+x*.03]],!0)}S+=n.letter*(.6+m()*.8),z+=me.w*qe+zt[Qe]});let se=yt[yt.length-1];S+=/[.!?]/.test(se)?n.stop:/[,;:]/.test(se)?n.comma:n.word,z+=.55+m()*.2}),at<U.length-1&&(z=0,k+=1.6,S+=n.para)});let P=(k+1)*o.lineHeight*x+x*1.55;return{strokes:b,total:S,height:P}}function v(h,g){if(o.fixed){let m=o.fixed;r.setTransform(1,0,0,1,m.mx,m.my),r.clearRect(-m.mx,-m.my,t.width,t.height)}else{let m=Math.min(window.devicePixelRatio||1,2);t.width=Math.round(h*m),t.height=Math.round(g*m),t.style.height=g+"px",t.style.width=h+"px",r.setTransform(m,0,0,m,0,0),r.clearRect(0,0,h,g)}r.strokeStyle=o.ink,r.fillStyle=o.ink,r.lineCap="round",r.lineJoin="round",o.shadow&&(r.shadowColor=o.shadow,r.shadowBlur=o.shadowBlur||6)}let d=h=>h<.5?2*h*h:1-Math.pow(-2*h+2,2)/2;function p(h,g){let m=f[h.i]||0;if(g<=m)return;let x=o.width*o.xh,y=0;for(let _=1;_<h.pts.length;_++){let M=h.pts[_-1],b=h.pts[_],S=Math.hypot(b[0]-M[0],b[1]-M[1]),z=y,k=y+S;if(y=k,k<=m||S===0)continue;if(z>=g)break;let C=Math.max(0,(m-z)/S),R=Math.min(1,(g-z)/S),U=[M[0]+(b[0]-M[0])*C,M[1]+(b[1]-M[1])*C],P=[M[0]+(b[0]-M[0])*R,M[1]+(b[1]-M[1])*R],q=(z+k)/2/(h.L||1),at=.72+.28*Math.sin(Math.PI*Math.min(1,Math.max(0,q)));r.lineWidth=x*at,r.globalAlpha=.86+.14*at,r.beginPath(),r.moveTo(U[0],U[1]),r.lineTo(P[0],P[1]),r.stroke()}h.dot&&m===0&&(r.globalAlpha=1,r.beginPath(),r.arc(h.pts[0][0],h.pts[0][1],x*.75,0,Math.PI*2),r.fill()),f[h.i]=g}function u(h){let g=(h-c)/1e3;for(let m=0;m<a.length;m++){let x=a[m];if(x.start>g)break;let y=Math.min(1,(g-x.start)/x.dur);p(x,d(y)*x.L)}if(o.onPen){let m=0;for(;m+1<a.length&&a[m+1].start<=g;)m++;a[m]&&o.onPen(a[m].pts[0][1])}g<s?i=requestAnimationFrame(u):o.onDone&&o.onDone()}return{write(h,g){cancelAnimationFrame(i);let m=o.fixed?t.width-2*o.fixed.mx:t.parentElement.clientWidth,x=l(h,m);a=x.strokes,s=x.total;let y=typeof o.maxTime=="function"?o.maxTime(h):o.maxTime;if(y&&s>y){let M=y/s;a.forEach(b=>{b.start*=M,b.dur*=M}),s=y}a.forEach((M,b)=>{M.i=b}),f=[],v(m,x.height);let _=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(g||_){a.forEach(M=>p(M,M.L));return}return c=performance.now(),i=requestAnimationFrame(u),s},finish(){cancelAnimationFrame(i),a.forEach(h=>p(h,h.L)),o.onDone&&o.onDone()},stop(){cancelAnimationFrame(i)}}}Eb.exports=Iz});var Op=Tt((ZT,Ab)=>{"use strict";var Np=rn(),qz='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M5.5 18.5l1.7-1.7M16.8 7.2l1.7-1.7"/></svg>',Dz='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M19.5 14.6A8 8 0 0 1 9.4 4.5a8 8 0 1 0 10.1 10.1z"/></svg>';Ab.exports=function(e){let o=document.createElement("button");o.type="button",o.className=e+" light-toggle";let r=()=>{let n=Np.isNight;o.innerHTML=n?qz:Dz,o.setAttribute("aria-label",n?"Switch to day":"Switch to night"),o.title=n?"Day":"Night",o.setAttribute("aria-pressed",n?"true":"false")};return r(),Np.onChange(r),["mousedown","pointerdown"].forEach(n=>o.addEventListener(n,a=>a.stopPropagation())),o.addEventListener("click",n=>{n.stopPropagation(),Np.toggle()}),o}});var Ob=Tt((QT,Nb)=>{"use strict";var J0=O1(),Fz=ds(),Gz=Lp(),Hz="81efb912-50a2-4fcd-b5e8-c3a28eecbe93",Tb=100,Ka=t=>Math.max(0,Math.min(1,t)),vr=(t,e,o)=>{let r=Ka((o-t)/(e-t));return r*r*(3-2*r)},da=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,Kr=(t,e,o)=>t+(e-t)*o,kf=(t,e,o)=>[Kr(t[0],e[0],o),Kr(t[1],e[1],o),Kr(t[2],e[2],o)];function Ti(t,e){let o=t.length-1,r=Ka(e)*o,n=Math.min(o-1,Math.floor(r)),a=r-n,s=t[Math.max(0,n-1)],i=t[n],c=t[n+1],f=t[Math.min(o,n+2)];return[0,1,2].map(l=>.5*(2*i[l]+(-s[l]+c[l])*a+(2*s[l]-5*i[l]+4*c[l]-f[l])*a*a+(-s[l]+3*i[l]-3*c[l]+f[l])*a*a*a))}var R1=t=>({eye:t.eye.slice(),target:t.target.slice(),fov:t.fov,roll:0});function Rp(t,e,o){return{eye:kf(t.eye,e.eye,o),target:kf(t.target,e.target,o),fov:Kr(t.fov,e.fov,o),roll:Kr(t.roll||0,e.roll||0,o)}}var zf=Fz.PLAY,pa=[zf.stoolX,1,zf.keyFront+.25],C1=[zf.stoolX,zf.keyTop+.03,zf.keyFront-.05],$p=t=>{let e=(15+110*t)*Math.PI/180,o=2.1+.4*t;return[pa[0]+Math.cos(e)*o,1.15+.4*t,pa[2]+Math.sin(e)*o]},Yc=[{eye:$p(1),target:[pa[0],.92,pa[2]-.15],fov:46,aperture:.6},{eye:[-6.93,3.2,45.85],target:[-6.93,.77,45.3],fov:34,aperture:.6,to:C1},{eye:[pa[0]+1,1.14,pa[2]+1.72],target:[C1[0]+.05,.8,C1[2]+.05],fov:40,aperture:1,to:C1}],Lb=(t,e)=>Math.hypot(t[0]-e[0],t[1]-e[1],t[2]-e[2]),$1=t=>({fade:0,letterbox:.55,exposure:1.3,focus:Lb(t.eye,t.to||pa),aperture:t.aperture,vignette:.42,shafts:0}),Cp={fade:0,letterbox:.55,exposure:2.1,focus:6.2,aperture:.55,vignette:.45,shafts:0},Kc={fade:0,letterbox:.55,exposure:2,focus:.82,aperture:1.1,vignette:.48,shafts:0},Sf={fade:0,letterbox:.55,exposure:1.8,focus:.42,aperture:1.3,vignette:.5,shafts:0},Uz=`
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
`;Nb.exports=function(e){let{root:o,avatar:r}=e,n=document.createElement("style");n.textContent=Uz,document.head.appendChild(n);let a=document.createElement("div");a.className="conf-ui",a.innerHTML=`
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
		</div>`,o.appendChild(a);let s=a.querySelector(".conf-write"),i=a.querySelector("textarea"),c=a.querySelector('[data-act="send"]'),f=a.querySelector(".conf-hint"),l=a.querySelector(".conf-close"),v=a.querySelector(".conf-final"),d=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,p=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;i.addEventListener("input",()=>{let rt=i.value.match(new RegExp("^\\s*(\\S+\\s+){0,"+(Tb-1)+"}\\S+"));(i.value.trim()?i.value.trim().split(/\s+/).length:0)>Tb&&rt&&(i.value=rt[0]),c.disabled=!i.value.trim()}),["keydown","keyup","keypress"].forEach(rt=>i.addEventListener(rt,Ct=>Ct.stopPropagation())),a.addEventListener("pointerdown",rt=>rt.stopPropagation()),a.addEventListener("click",rt=>{let Ct=rt.target.closest("button");Ct&&(rt.stopPropagation(),Ct.dataset.act==="send"&&at(),Ct.dataset.act==="leave"&&mt())});let u=!1,h="",g=0,m=null,x=null,y="",_=null,M=0,b="",S=document.createElement("canvas");S.width=512,S.height=652;function z(rt){rt!==b&&(b=rt,s.classList.toggle("on",rt==="write"),f.classList.toggle("on",rt==="hint"),l.classList.toggle("on",u&&rt==="hint"&&(h==="room"||h==="peek")),v.classList.toggle("on",rt==="final"),rt==="write"&&setTimeout(()=>{if(h==="write")try{i.focus({preventScroll:!0})}catch(Ct){}},900))}function k(rt){h=rt,g=0}function C(rt,Ct){if(u)return;u=!0,m={eye:rt.eye.slice(),target:rt.target.slice(),fov:rt.fov,roll:rt.roll||0},x=Object.assign({},Ct),y="",i.value="",c.disabled=!0,J0.STATE.fold=0,J0.STATE.slide=0,J0.STATE.shown=!0,J0.STATE.active=!0;let we=S.getContext("2d");we.setTransform(1,0,0,1,0,0),we.clearRect(0,0,S.width,S.height),J0.STATE.ink=S,J0.STATE.inkDirty=!0,document.body.classList.add("confessing");let te=Yc[0],Nt=p?.3:5.5,$e=p?.3:3.6;R.i=0,R.u=0,R.T=Nt+$e,R.moving=!0,R.rest=0,R.raw=!0,R.lookFrom=x,R.lookTo=$1(te);let E=[m.eye,[3.4,1.75,44.5],[.3,1.72,44.7],[-2.8,1.5,45.4],$p(0)],De=[m.target,[-3,1.9,44.5],[-6.5,1.3,44.9],[pa[0],1,pa[2]-.1],te.target];R.path=je=>{let lo=je*(Nt+$e);if(lo<Nt){let Fo=lo/Nt,qo=1-Math.cos(Fo*Math.PI/2);return{eye:Ti(E,qo),target:Ti(De,vr(0,1,qo*1.05)),fov:Kr(m.fov,52,vr(.4,1,qo)),roll:(m.roll||0)*(1-qo)}}let Oo=(lo-Nt)/$e,_o=1-Math.pow(1-Oo,2.4);return{eye:$p(_o),target:te.target,fov:Kr(52,te.fov,_o),roll:.05*Math.sin(Math.PI*_o)}},k("room"),z("")}let R={i:0,u:0,T:1,moving:!1,rest:0,raw:!1,path:null,lookFrom:null,lookTo:null},U=()=>d?"Scroll on":"Swipe up";function P(rt){let Ct=se,we=Yc[rt],te={eye:Ct.eye.slice(),target:Ct.target.slice(),fov:Ct.fov,roll:Ct.roll||0},Nt=kf(te.eye,we.eye,.5),$e=[Nt[0]-pa[0],0,Nt[2]-pa[2]],E=Math.hypot($e[0],$e[2])||1,De=[Nt[0]+$e[0]/E*.6,Nt[1]+.3,Nt[2]+$e[2]/E*.6];R.path=je=>{let lo=1-je;return{eye:[0,1,2].map(Oo=>lo*lo*te.eye[Oo]+2*lo*je*De[Oo]+je*je*we.eye[Oo]),target:kf(te.target,we.target,vr(0,1,je)),fov:Kr(te.fov,we.fov,je),roll:te.roll*lo}},R.lookFrom=q||$1(Yc[R.i]),R.lookTo=$1(we),R.i=rt,R.u=0,R.moving=!0,R.rest=0,R.raw=!1,R.T=p?.4:Math.max(2.8,Math.min(4.4,Lb(te.eye,we.eye)*1+1.6)),z("")}let q=null;function at(){if(h!=="write"||(y=i.value.trim(),!y))return;i.blur(),z("");let rt=Math.max(10,Math.min(22,24-y.length/28));_=Gz(S,e.glyphs(),{ink:"rgba(30,16,8,0.97)",xh:rt,width:.15,seed:11+y.length,speed:60,pace:.2,minDur:.03,maxTime:Ct=>2.4+Ct.length/160,fixed:{mx:46,my:40},onPen:()=>{J0.STATE.inkDirty=!0},onDone:()=>{J0.STATE.inkDirty=!0}}),k("down")}function St(){try{let rt={access_key:Hz,subject:"A note left in the confessional",from_name:"Your gallery",message:y,page:location.href,when:new Date().toString()};fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(rt),keepalive:!0}).catch(()=>{})}catch(rt){}}function yt(){h==="ready"&&(St(),k("fold"),z(""))}function mt(){!u||h==="leave"||(z(""),i.blur(),zt=se,It=q,k("leave"))}let zt=null,It=null,se=null,Ee=J0.SHOTS.window,Qe=J0.OFF,me=rt=>[rt[0]+Qe[0],rt[1],rt[2]],qe=[[3.4,1.75,44.5],[.3,1.72,44.5],[-2.5,1.66,45],[-4.6,1.6,46.55],[-7,1.58,47.15],[-9.3,1.55,46.4],me([1.25,1.5,43.25]),me([-.55,1.36,42.92])],Ge=[[-3,1.9,44.5],[-6.5,1.5,44.6],[-7,1,44.4],[-7.6,.95,44],[-10.5,1.5,44.6],me([-1,1.55,43.6]),me([-1.4,1.35,43.1]),me([-1.5,1.33,43.3])];function Q(rt){let Ct=da(Ka(rt)),we=[m.eye,...qe,Ee.eye],te=[m.target,...Ge,Ee.target];return{eye:Ti(we,Ct),target:Ti(te,vr(0,1,Ct*1.03)),fov:Kr(m.fov,Ee.fov,vr(.6,.97,Ct)),roll:(m.roll||0)*(1-Ct)}}function j(rt,Ct){if(p)return rt;let we=performance.now()/1e3,te=.004*Ct,Nt=Math.sin(we*.61)*.6+Math.sin(we*1.37+1.3)*.4,$e=Math.sin(we*.47+2.1)*.6+Math.sin(we*1.13+.4)*.4;return{eye:[rt.eye[0]+Nt*te,rt.eye[1]+$e*te*.7,rt.eye[2]],target:[rt.target[0]+$e*te*1.5,rt.target[1]+Nt*te,rt.target[2]],fov:rt.fov,roll:rt.roll}}function ft(rt,Ct,we){let te={};for(let Nt in Ct)te[Nt]=typeof Ct[Nt]=="number"&&typeof rt[Nt]=="number"?Kr(rt[Nt],Ct[Nt],we):Ct[Nt];return te}function xt(rt){rt*=window.__confSpeed||1,g+=rt;let Ct=R1(Ee),we=R1(J0.SHOTS.paper),te,Nt,$e=R1(J0.SHOTS.peek);if(h==="room")R.moving?(R.u=Math.min(1,R.u+rt/R.T),te=R.path(R.raw?R.u:da(R.u)),Nt=ft(R.lookFrom,R.lookTo,vr(.1,.9,R.u)),R.raw&&(Nt.fade=(x.fade||0)*(1-vr(0,.12,R.u))),R.u>=1&&(R.moving=!1,R.rest=0,f.textContent=U(),z("hint"))):(R.rest+=rt,te=j(R1(Yc[R.i]),2.5),Nt=$1(Yc[R.i]));else if(h==="enter"){let De=Ka(g/(p?.6:9)),je=da(De),lo=[Qt.eye,[-7.6,1.9,47.6],[-9.6,1.85,45.6],me([.75,1.5,42.95]),me([-.25,1.42,42.82]),me([-.9,1.42,42.82]),$e.eye];te={eye:Ti(lo,je),target:kf(Qt.target,$e.target,vr(0,.35,je)),fov:Kr(Qt.fov,$e.fov,vr(.3,1,je)),roll:0},Nt=ft(ce,Cp,vr(.2,.9,De)),De>=1&&k("peek")}else if(h==="peek")te=j($e,1.5),Nt=Cp,g>(p?.5:3.2)&&k("turn");else if(h==="turn"){let E=Ka(g/(p?.4:3.2));te=Rp($e,Ct,da(E)),Nt=ft(Cp,Kc,da(E)),E>=1&&(k("write"),z("write"))}else if(h==="write")te=j(Ct,1),Nt=Kc;else if(h==="down"){let E=Ka(g/(p?.4:2));te=Rp(Ct,we,da(E)),Nt=ft(Kc,Sf,da(E)),E>=1&&(M=_.write(y,p)||0,J0.STATE.inkDirty=!0,k("writing"))}else if(h==="writing")te=j(we,.6),Nt=Sf,g>M+.8&&(k("ready"),f.textContent=d?"Scroll to fold it and pass it through":"Swipe up to fold it and pass it through",z("hint"));else if(h==="ready")te=j(we,.6),Nt=Sf;else if(h==="fold"){let E=Ka(g/(p?.3:1.5));J0.STATE.fold=da(E),te=j(we,.6),Nt=Sf,E>=1&&k("slide")}else if(h==="slide"){let De=Ka(g/(p?.6:3.4));J0.STATE.slide=da(vr(0,.7,De));let je=da(vr(.35,1,De));te=Rp(we,Ct,je),Nt=ft(Sf,Kc,je),De>=1&&(J0.STATE.shown=!1,k("final"),z("final"))}else if(h==="final")te=j(Ct,1),Nt=Kc;else if(h==="leave"){let E=p?.6:zt.eye[0]<Qe[0]-.3?12:7,De=Ka(g/E),je={eye:m.eye,target:m.target,fov:m.fov,roll:m.roll},lo=da(De),Oo=zt.eye[0]<Qe[0]-.3,_o=Oo?[zt.eye,me([-.55,1.4,42.8]),me([1.4,1.55,43.3]),[-9.3,1.58,46.4],[-7,1.6,47.15],[-4.6,1.62,46.55],[-2.2,1.68,44.8],[.6,1.72,44.5],je.eye]:[zt.eye,[-3.4,1.7,46.2],[-1.2,1.7,44.8],[.6,1.72,44.5],je.eye],Fo=Oo?[zt.target,me([1.5,1.45,43.4]),[-7,1.2,44.6],[-4,1.5,47],[-1.5,1.7,45.5],[1,1.8,44.5],[4,1.8,44.5],[7,1.9,44.2],je.target]:[zt.target,[-1.5,1.7,45.2],[2,1.8,44.5],[6,1.9,44.3],je.target];if(te={eye:Ti(_o,lo),target:Ti(Fo,lo),fov:Kr(zt.fov,je.fov,lo),roll:je.roll*lo},Nt=ft(It||Kc,x,vr(.1,.7,De)),Nt.fade=(x.fade||0)*vr(.82,1,De),De>=1){u=!1,J0.STATE.active=!1,J0.STATE.shown=!0,J0.STATE.fold=0,J0.STATE.slide=0;let qo=S.getContext("2d");qo.setTransform(1,0,0,1,0,0),qo.clearRect(0,0,S.width,S.height),J0.STATE.inkDirty=!0,document.body.classList.remove("confessing"),e.onExit&&e.onExit()}}return se=te,q=Nt,{camera:te,look:Nt}}let Qt=null,ce=null;function Kt(){if(h==="room"){if(R.moving||R.rest<.4)return;R.i<Yc.length-1?P(R.i+1):(Qt=se,ce=q,z(""),k("enter"));return}if(h==="peek"){g>.4&&k("turn");return}h==="ready"?yt():h==="writing"&&_&&(_.finish(),g=Math.max(g,M))}function qt(){h==="room"&&!R.moving&&R.rest>.4&&R.i>0&&P(R.i-1)}return{start:C,update:xt,leave:mt,get active(){return u},get stage(){return h},wheel(rt){rt>8?Kt():rt<-8&&qt()},swipe(rt){rt>0?Kt():rt<0&&qt()},tap(){Kt()},key(rt){return["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(rt)>=0?(Kt(),!0):["ArrowUp","ArrowLeft","PageUp"].indexOf(rt)>=0?(qt(),!0):rt==="Escape"?(mt(),!0):!1},_setNote(rt){i.value=rt,i.dispatchEvent(new Event("input"))}}}});var Gb=Tt((JT,Fb)=>{"use strict";var Zc=Ec(),P1=sp(),Pp=yh(),Bz=Ol(),Ip=cp(),jz=qr(),I1=!jz.isPhone&&!!(window.matchMedia&&window.matchMedia("(pointer: fine)").matches),{A:Nr}=Gr(),{C:Tn,PAINTING_X:el}=Nn(),gr=t=>Math.max(0,Math.min(1,t)),ue=(t,e,o)=>t+(e-t)*o,f0=(t,e,o)=>[ue(t[0],e[0],o),ue(t[1],e[1],o),ue(t[2],e[2],o)],Co=(t,e)=>[t[0]+e[0],t[1]+e[1],t[2]+e[2]],qp=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],tr=(t,e)=>[t[0]*e,t[1]*e,t[2]*e],ie=(t,e,o)=>{let r=gr((o-t)/(e-t));return r*r*(3-2*r)};function Wz(t,e,o,r,n,a){if(n<=0)return[t,o];let s=2/r,i=s*n,c=1/(1+i+.48*i*i+.235*i*i*i),f=a*r,l=Math.max(-f,Math.min(f,t-e)),v=t-l,d=(o+s*l)*n,p=(o-s*d)*c,u=v+(l+d)*c;return e-t>0==u>e&&(u=e,p=0),[u,p]}var Rb=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,Vz=t=>t*t*t,Dp=t=>1-Math.pow(1-t,3),C0=t=>-(Math.cos(Math.PI*t)-1)/2;function U0(t,e){let o=t.length-1,r=gr(e)*o,n=Math.min(o-1,Math.floor(r)),a=r-n,s=t[Math.max(0,n-1)],i=t[n],c=t[n+1],f=t[Math.min(o,n+2)],l=a*a,v=l*a;return[0,1,2].map(d=>.5*(2*i[d]+(-s[d]+c[d])*a+(2*s[d]-5*i[d]+4*c[d]-f[d])*l+(-s[d]+3*i[d]-3*c[d]+f[d])*v))}var Lo=(t,e,o,r)=>({eye:t,target:e,fov:o,roll:r||0});function Ci(t,e,o){return Lo(f0(t.eye,e.eye,o),f0(t.target,e.target,o),ue(t.fov,e.fov,o),ue(t.roll,e.roll,o))}var Bp=()=>ie(.75,1.3,window.innerWidth/window.innerHeight),er=(t,e)=>Ci(t,e,Bp()),q1=[7,3.95,Tn.hallEnd-.05],Xz=[Tn.x1,2.9,Tn.zc],Jc=[16.75,4.55,6.75],jp=[6.92,2.72,14.5],va=[7.3,.015,47.1],Yz=[Jc,[16.2,4,7],[15.3,3.45,6.4],[14.1,3.2,5.7],[12.2,3.35,6.6],[10,3.75,9.6],[8.2,3.8,12.2],[7.3,3.4,13.8],jp],Kz=[jp,[7.3,4.6,19.5],[7.6,4.9,23.5],[6.6,4.3,28.5],[7.5,3.2,34],[6.8,2.1,39.5],[7.4,1,44.2],[7.2,.3,46.4],va],Ni=[el[0],3,Tn.z0],Oi=[el[1],3,Tn.z0],Gp=47.45,Db=4.6,Zz=13.2,Qz=1.57,Ef=[7.55,1.25,46.75],Wp=[17.25,2.42,46],Vp=[26.05,1.95,46],Af=[36.15,.015,44],H1=()=>ue(6.8,6.15,Bp()),Jz=[Ef,[9.6,1.65,46.2],[12.3,2.05,45.1],[14.6,2.35,44.5],[16.2,2.3,44.7],Wp],tE=[Wp,[20.2,2.05,45.6],[23.2,1.8,45],Vp],Ri=[el[2],3,Tn.z0],Hp=[34.8,1.35,46],Rs=[7.89,.03,19.03],Cb=.36,$b=13.64,$n=[{side:"left",z:34.5},{side:"left",z:23.5},{side:"left",z:14.6},{side:"right",z:14.6},{side:"right",z:23.5},{side:"right",z:34.5}];function Zr(t){let e=t.side==="left"?1:-1;return f0([7-e*1,3,t.z+e*.2],[7-e*.6,3.25,t.z+e*.13],Bp())}function eE(t){return t.side==="left"?er(Lo([8.6,3.9,t.z],[Cb,1.45,t.z],76),Lo([8,3.6,t.z+.7],[Cb,3.95,t.z-2],46,-.008)):er(Lo([5.4,3.9,t.z],[$b,1.45,t.z],76),Lo([6,3.6,t.z-.7],[$b,3.95,t.z+2],46,-.008))}var oE=()=>[Af,[35.6,.5,44.6],[33.2,1.5,45.6],[29,2.3,46.1],[23.5,2.7,45.9],[18.5,2.9,45.4],[14.8,3.1,44.3],[11,3.3,41.8],[7.4,3.4,38.8],[5.4,3.3,36.6],Zr($n[0])],nE=()=>[Zr($n[2]),[3,3.2,13.2],[1.7,3,12],[2.6,3.2,10],[5,3.6,8.9],[7,3.8,8.6],[9,3.6,8.9],[11.4,3.2,10],[12.3,3,12],[11,3.1,13.4],Zr($n[3])],rE=()=>[Zr($n[5]),[9,3.4,31],[7.8,2.8,27.5],[6.8,1.9,24.5],[7.4,1,21],[7.75,.35,19.6],Rs],Pb={2:{pos:()=>jp,amp:[.18,.07,.12],tumble:.5},7:{pos:()=>Ef,amp:[.12,.09,.1],tumble:.55},8:{pos:()=>Wp,amp:[.1,.08,.08],tumble:.5},9:{pos:()=>Vp,amp:[.09,.06,.07],tumble:.45},10:{pos:()=>Hp,amp:[.07,.04,.06],tumble:.35},12:{pos:()=>Zr($n[0]),amp:[.12,.08,.1],tumble:.5},13:{pos:()=>Zr($n[1]),amp:[.12,.08,.1],tumble:.5},14:{pos:()=>Zr($n[2]),amp:[.12,.08,.1],tumble:.5},15:{pos:()=>Zr($n[3]),amp:[.12,.08,.1],tumble:.5},16:{pos:()=>Zr($n[4]),amp:[.12,.08,.1],tumble:.5},17:{pos:()=>Zr($n[5]),amp:[.12,.08,.1],tumble:.5}},Os=[{name:"corridor",ui:"intro",look:{letterbox:1,exposure:1,focus:14,aperture:.25,vignette:.1},cam(t){let e=.9*(1-Math.exp(-t/14)),o=[0,Math.sin(t*.37)*.025,Math.sin(t*.23)*.06],r=er(Lo([Tn.x0+.9,1.85,Tn.zc+.25],[Tn.x1,2.85,Tn.zc-.1],64),Lo([Tn.x0+1.2,2,Tn.zc+.35],[Tn.x1,2.6,Tn.zc-.15],50));return r.eye=Co(Co(r.eye,[e,0,0]),o),r}},{name:"about",ui:"about",look:{letterbox:.55,exposure:1.32,focus:2.9,aperture:.9,vignette:.12,shafts:.65},cam(t){let e=[Math.sin(t*.21)*.08,Math.sin(t*.33)*.03,-.25*(1-Math.exp(-t/12))],o=er(Lo([16.6,1.9,9.2],[17.3,.4,5.6],64),Lo([15,1.35,7.75],[17.55,1.05,5.5],44,-.02));return o.eye=Co(o.eye,e),o}},{name:"sky",ui:"sky",look:{letterbox:.55,exposure:1,focus:2.1,aperture:.45,vignette:.1,shafts:1},cam(t){let e=[Math.sin(t*.12)*.35,Math.sin(t*.2)*.04,(1-Math.cos(t*.12))*.25],o=er(Lo([7,1.35,13],[7.2,7.6,20.4],74,.05),Lo([6.6,1.5,12.6],[7.3,7.2,20.8],56,.07));return o.eye=Co(o.eye,e),o}},{name:"master",ui:"master",look:{letterbox:.55,exposure:1.12,focus:8,aperture:.6,vignette:.3,shafts:.5},cam(t){let e=[Math.sin(t*.17)*.05,Math.sin(t*.29)*.02,-.35*(1-Math.exp(-t/16))],o=er(Lo([7,3.6,43.7],[7,3.85,q1[2]],74),Lo([7,3.6,41.3],[7,3.95,q1[2]],46));return o.eye=Co(o.eye,e),o}},{name:"story",ui:"story",look:{letterbox:.55,exposure:1,focus:8.1,aperture:.9,vignette:.4,shafts:.4},cam(t){let e=[Math.sin(t*.15)*.04,Math.sin(t*.25)*.015,0],o=er(Lo([7,3.9,40.3],[7,1.35,q1[2]],76),Lo([6.3,3.6,41.2],[3.7,3.95,q1[2]],46,-.008));return o.eye=Co(o.eye,e),o}},{name:"leaf",ui:"leaf",look:{letterbox:.55,exposure:1.15,focus:1.25,aperture:1.3,vignette:.35,shafts:.4},cam(t){let e=[Math.sin(t*.2)*.02,Math.sin(t*.3)*.006,0],o=er(Lo([7.15,.15,46],[7.3,.04,va[2]],50),Lo([7.05,.14,45.9],[7.25,.05,va[2]],32));return o.eye=Co(o.eye,e),o}},{name:"steps",ui:"steps",look:{letterbox:.9,exposure:1.2,focus:1.6,aperture:1.4,vignette:.4,shafts:.4},cam(t){let e=[Math.sin(t*.2)*.015,0,0],o=er(Lo([7.15,.1,46.3],[7.05,.1,Gp],50),Lo([7.1,.12,45.85],[7,.2,Gp],30));return o.eye=Co(o.eye,e),o}},{name:"float",ui:"float",look:{letterbox:.55,exposure:1.1,focus:2.2,aperture:.8,vignette:.3,shafts:.6},cam(t){let e=[Math.sin(t*.17)*.05,Math.sin(t*.27)*.02,0],o=er(Lo([7.3,.85,45.65],[7.6,1.38,47.1],64),Lo([7.25,.82,45.8],[7.65,1.35,47.1],44));return o.eye=Co(o.eye,e),o}},{name:"painting1",ui:"p1",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(t){let e=[Math.sin(t*.15)*.04,Math.sin(t*.25)*.015,0],o=er(Lo([Ni[0],2.3,46.85],[Ni[0],1.25,Ni[2]],74),Lo([Ni[0]-.6,2.55,46.85],[Ni[0]+1.9,2.9,Ni[2]],46,.008));return o.eye=Co(o.eye,e),o}},{name:"painting2",ui:"p2",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(t){let e=[Math.sin(t*.15)*.04,Math.sin(t*.25)*.015,0],o=er(Lo([Oi[0],1.95,46.85],[Oi[0],1,Oi[2]],74),Lo([Oi[0]-.6,2.1,46.85],[Oi[0]+1.9,2.75,Oi[2]],46,.008));return o.eye=Co(o.eye,e),o}},{name:"painting3",ui:"p3",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.9},cam(t){let e=[Math.sin(t*.15)*.04,Math.sin(t*.25)*.015,0],o=er(Lo([Ri[0],1.4,46.85],[Ri[0],.6,Ri[2]],74),Lo([Ri[0]-.6,1.45,46.85],[Ri[0]+1.9,2,Ri[2]],46,.008));return o.eye=Co(o.eye,e),o}},{name:"door",ui:"door",look:{letterbox:.8,exposure:1.05,focus:1.45,aperture:1.1,vignette:.35,shafts:1},cam(t){let e=[Math.sin(t*.2)*.02,Math.sin(t*.3)*.006,0],o=er(Lo([34.75,.5,44.15],[Tn.x1,.8,43.95],66),Lo([34.75,.45,44.3],[Tn.x1,.35,43.95],50));return o.eye=Co(o.eye,e),o}},...$n.map((t,e)=>({name:"hall"+e,ui:"h"+e,look:{letterbox:.55,exposure:1,focus:7.6,aperture:.7,vignette:.35,shafts:.7},cam(o){let r=[Math.sin(o*.15)*.04,Math.sin(o*.25)*.015,Math.sin(o*.11)*.04],n=eE(t);return n.eye=Co(n.eye,r),n}})),{name:"rest",ui:"end",look:{letterbox:.55,exposure:1.05,focus:2.4,aperture:.5,vignette:.4,shafts:1.15},cam(t){let e=t*.025,o=er(Lo([7.75,2.6,18.6],[7.89,0,19.08],60),Lo([7.75,2.3,18.45],[7.89,0,19.08],46)),r=o.eye[0]-Rs[0],n=o.eye[2]-Rs[2];return o.eye=[Rs[0]+r*Math.cos(e)-n*Math.sin(e),o.eye[1],Rs[2]+r*Math.sin(e)+n*Math.cos(e)],o}}],aE=[1,.96,.88];function Ib(t,e){return{dur:e,cam(o,r,n){let a=C0(o),s=Ci(r,n,a),i=$n[t].side==="left"?1:-1;return s.eye=Co(s.eye,[i*.6*Math.sin(Math.PI*a),.15*Math.sin(Math.PI*a),0]),s},look(o,r,n){let a={};for(let s in n)typeof n[s]=="number"&&(a[s]=ue(r[s],n[s],o));return a.aperture=ue(r.aperture,n.aperture,o)*(1-.5*Math.sin(Math.PI*o)),a},leaf(o){let r=C0(o),n=Zr($n[t]),a=Zr($n[t+1]),s=$n[t].side==="left"?1:-1,i=Co(f0(n,a,.5),[s*1.2,.5,0]),c=U0([n,f0(n,i,.6),i,f0(a,i,.6),a],r);return{phase:"fly",pos:Co(c,[0,Math.sin(o*Math.PI*5)*.07*Math.sin(Math.PI*o),0]),tumble:.5+.35*Math.sin(Math.PI*o)}}}}var Fp=[{dur:6.2,cam(t,e,o){if(t<.5){let i=Vz(t/.5),c=f0(e.eye,[Tn.x1-3.2,2.6,Tn.zc],i),f=f0(e.target,Xz,ie(0,.6,t/.5));return Lo(c,f,ue(e.fov,e.fov-8,i),ue(e.roll,.04,i))}let r=Dp((t-.5)/.5),n=[[Nr.cx+.4,10.4,Nr.zc+.6],[Nr.cx-.6,7.6,Nr.zc+1.3],[Nr.cx-1.9,4.6,Nr.zc+1.75],o.eye],a=[[Nr.cx-.1,0,Nr.zc-.2],[Nr.cx-1,.4,Nr.zc-.1],[Nr.cx-1.1,.8,Nr.zc-.2],o.target];return Lo(U0(n,r),U0(a,r),ue(o.fov+14,o.fov,r),ue(-.25,o.roll,r))},look(t,e,o){let r=ie(.22,.5,t),n=1-ie(.5,.74,t);return{fade:t<.5?r:n,fadeColor:aE,exposure:ue(e.exposure,o.exposure,ie(.5,.9,t))*(1+2.2*(t<.5?ie(.15,.5,t):1-ie(.5,.8,t))),letterbox:ue(e.letterbox,o.letterbox,ie(.3,.7,t)),aperture:t<.5?e.aperture*(1-t*2):o.aperture*ie(.6,1,t),focus:ue(4,o.focus,ie(.5,1,t)),shafts:ue(e.shafts,o.shafts,ie(.4,.6,t)),vignette:ue(e.vignette,o.vignette,t)}},leaf(){return{phase:"home"}}},{dur:9,cam(t,e,o,r){let n=[e.eye,[15.6,2.4,8.3],[15.4,2.7,7.1],[12.6,2.6,5.4],[9.6,2,7.4],[7.6,1.6,10.6],o.eye],a=U0(n,C0(t)),s=ie(0,.12,t)*(1-ie(.82,1,t)),i=f0(f0(e.target,o.target,ie(.55,1,t)),r.pos,s),c=ue(e.fov,o.fov,ie(.3,1,t))-6*Math.sin(Math.PI*t),f=ue(e.roll,o.roll,t)+.05*Math.sin(Math.PI*2*t);return Lo(a,i,c,f)},look(t,e,o,r,n){let a=Math.hypot(r.pos[0]-n[0],r.pos[1]-n[1],r.pos[2]-n[2]);return{exposure:ue(e.exposure,o.exposure,ie(.25,.75,t)),letterbox:ue(e.letterbox,o.letterbox,t),focus:ue(a,o.focus,ie(.8,1,t)),aperture:ue(.7,o.aperture,ie(.8,1,t)),shafts:ue(e.shafts,o.shafts,ie(.3,.8,t)),vignette:ue(e.vignette,o.vignette,t)}},leaf(t){let e=Rb(t),o=Math.sin(t*Math.PI*7)*.14*Math.sin(Math.PI*t);return{phase:"fly",pos:Co(U0(Yz,e),[0,Math.sin(t*Math.PI*9)*.05*Math.sin(Math.PI*t),o]),tumble:1-.5*ie(.8,1,t)}}},{dur:11.5,cam(t,e,o,r){let n=U0([e.eye,[7,1.9,19],[7.1,1.6,27.5],[6.9,1.1,36],[7,.7,42.5],[7.05,.5,45.7]],ie(0,.8,t)*.6+C0(gr(t/.8))*.4),a=U0([[7.05,.5,45.7],[7,1.2,45.3],[7,2.6,43.8],o.eye],C0(ie(.8,1,t))),s=t<.8?n:a,i=f0(f0(e.target,r.pos,ie(.03,.22,t)),o.target,ie(.82,1,t)),c=ue(e.fov,o.fov,ie(.15,.7,t))-6*ie(.6,.8,t)*(1-ie(.85,1,t)),f=ue(e.roll,o.roll,ie(0,.6,t))-.04*Math.sin(Math.PI*t);return Lo(s,i,c,f)},look(t,e,o,r,n){let a=Math.hypot(r.pos[0]-n[0],r.pos[1]-n[1],r.pos[2]-n[2]);return{exposure:ue(e.exposure,o.exposure,ie(.5,1,t)),letterbox:ue(e.letterbox,o.letterbox,t),focus:ue(a,o.focus,ie(.84,1,t)),aperture:ue(1.1,o.aperture,ie(.84,1,t)),shafts:ue(e.shafts,o.shafts,ie(.2,.9,t)),vignette:ue(e.vignette,o.vignette,ie(.5,1,t))}},leaf(t){let e=ue(Rb(t),t,.35),o=U0(Kz,ie(0,.78,e)),r=Math.sin(t*Math.PI*8)*.35*(1-ie(.55,.76,t)),n=ie(.7,.8,t);return{phase:"fly",pos:Co(o,[r,Math.abs(Math.cos(t*Math.PI*8))*.12*(1-n),0]),tumble:1-n,swing:r}}},{dur:2.6,cam(t,e,o){let r=C0(t),n=Ci(e,o,r);return n.eye=Co(n.eye,[0,0,-.35*Math.sin(Math.PI*r)]),n},look(t,e,o){let r=C0(t),n={};for(let a in o)typeof o[a]=="number"&&(n[a]=ue(e[a],o[a],r));return n},leaf(){return{phase:"floor"}}},{dur:4.5,cam(t,e,o){let r=C0(t),n=U0([e.eye,[6.9,1.7,43.9],[7.05,.45,45.4],o.eye],r),a=f0(e.target,o.target,ie(.1,.85,t));return Lo(n,a,ue(e.fov,o.fov,ie(.2,1,t)),ue(e.roll,o.roll,r))},look(t,e,o){let r={};for(let n in o)typeof o[n]=="number"&&(r[n]=ue(e[n],o[n],ie(.2,1,t)));return r},leaf(){return{phase:"floor"}}},{dur:5.5,cam(t,e,o){return Ci(e,o,C0(t))},look(t,e,o){let r={};for(let n in o)typeof o[n]=="number"&&(r[n]=ue(e[n],o[n],C0(t)));return r},leaf(){return{phase:"floor"}},walker(t){return ue(Db,H1(),t)}},{dur:11,kick:t=>gr((t-Qc())/(1-Qc())),cam(t,e,o,r){let n=Qc(),a=ie(0,n,t)*(1-ie(n+.12,n+.35,t)),s=qb(Math.min(t,tl)),i=Co(e.target,[(s-e.target[0])*.15*a,0,0]),c=ie(n+.12,1,t),f=U0([e.eye,e.eye,Co(e.eye,[0,.12,-.3]),o.eye],c);return i=f0(i,r.pos,ie(n+.06,n+.24,t)*(1-ie(.9,1,t))),i=f0(i,o.target,ie(.88,1,t)),Lo(f,i,ue(e.fov,o.fov,c),ue(e.roll,o.roll,c))},look(t,e,o,r,n){let a=Qc(),s=Math.hypot(r.pos[0]-n[0],r.pos[1]-n[1],r.pos[2]-n[2]),i=ie(0,.12,t)*(1-ie(a+.25,a+.5,t));return{letterbox:ue(ue(e.letterbox,o.letterbox,ie(a,1,t)),1.75,i),exposure:ue(e.exposure,o.exposure,ie(a,1,t)),focus:t<a?e.focus:ue(e.focus,s,ie(a,a+.2,t)),aperture:ue(e.aperture,o.aperture,ie(a,1,t)),vignette:ue(e.vignette,o.vignette,t),shafts:ue(e.shafts,o.shafts,t)}},leaf(t){let e=gr((t-Qc())/(1-Qc()));if(e<=0)return{phase:"floor"};let o=ie(0,.85,e)*.85+Dp(ie(0,.15,e))*.15;return{phase:"fly",pos:Co(va,[(Ef[0]-va[0])*o+Math.sin(e*9)*.08*(1-e),(Ef[1]-va[1])*o,(Ef[2]-va[2])*o+Math.sin(e*7)*.06*(1-e)]),tumble:1.3-.75*e}},walker(t){return t<.985?qb(t):null}},{dur:9,cam(t,e,o,r){let n=C0(t),a=U0([e.eye,[9.4,1.35,45.6],[12.4,2,45.9],[15,2.45,46.5],o.eye],n),s=1-ie(.6,.92,t),i=f0(f0(e.target,r.pos,ie(0,.15,t)),o.target,1-s),c=ue(e.fov,o.fov,ie(.3,1,t)),f=ue(e.roll,o.roll,n)+.04*Math.sin(Math.PI*t);return Lo(a,i,c,f)},look(t,e,o,r,n){let a=Math.hypot(r.pos[0]-n[0],r.pos[1]-n[1],r.pos[2]-n[2]);return{letterbox:ue(e.letterbox,o.letterbox,t),exposure:ue(e.exposure,o.exposure,ie(.3,.8,t)),focus:ue(a,o.focus,ie(.6,.95,t)),aperture:ue(e.aperture,o.aperture,ie(.6,1,t)),vignette:ue(e.vignette,o.vignette,t),shafts:ue(e.shafts,o.shafts,ie(.3,.8,t))}},leaf(t){let e=C0(t);return{phase:"fly",pos:Co(U0(Jz,e),[0,Math.sin(t*Math.PI*5)*.08*Math.sin(Math.PI*t),Math.sin(t*Math.PI*4)*.12*Math.sin(Math.PI*t)]),tumble:.55+.4*Math.sin(Math.PI*t)}}},{dur:6.5,cam(t,e,o){let r=C0(t),n=Ci(e,o,r);return n.eye=Co(n.eye,[0,.12*Math.sin(Math.PI*r),.1*Math.sin(Math.PI*r)]),n},look(t,e,o){let r={};for(let n in o)typeof o[n]=="number"&&(r[n]=ue(e[n],o[n],t));return r.aperture=ue(e.aperture,o.aperture,t)*(1-.5*Math.sin(Math.PI*t)),r},leaf(t){let e=C0(t);return{phase:"fly",pos:Co(U0(tE,e),[0,Math.sin(t*Math.PI*4)*.07*Math.sin(Math.PI*t),0]),tumble:.5+.3*Math.sin(Math.PI*t)}}},{dur:6.5,cam(t,e,o){let r=C0(t),n=Ci(e,o,r);return n.eye=Co(n.eye,[0,.1*Math.sin(Math.PI*r),.1*Math.sin(Math.PI*r)]),n},look(t,e,o){let r={};for(let n in o)typeof o[n]=="number"&&(r[n]=ue(e[n],o[n],t));return r.aperture=ue(e.aperture,o.aperture,t)*(1-.5*Math.sin(Math.PI*t)),r},leaf(t){let e=C0(t);return{phase:"fly",pos:Co(U0([Vp,[29.2,1.75,45.5],[32.2,1.5,45.4],Hp],e),[0,Math.sin(t*Math.PI*4)*.06*Math.sin(Math.PI*t),0]),tumble:.45+.25*Math.sin(Math.PI*t)}}},{dur:6,cam(t,e,o,r){let n=C0(t),a=U0([e.eye,[34.2,1.15,45.6],[34.5,.7,44.8],o.eye],n),s=ie(.05,.3,t)*(1-ie(.8,1,t)),i=f0(f0(e.target,o.target,ie(.6,1,t)),r.pos,s);return Lo(a,i,ue(e.fov,o.fov,ie(.2,1,t)),ue(e.roll,o.roll,n))},look(t,e,o,r,n){let a=Math.hypot(r.pos[0]-n[0],r.pos[1]-n[1],r.pos[2]-n[2]);return{letterbox:ue(e.letterbox,o.letterbox,t),exposure:ue(e.exposure,o.exposure,t),focus:ue(a,o.focus,ie(.8,1,t)),aperture:ue(.9,o.aperture,ie(.8,1,t)),vignette:ue(e.vignette,o.vignette,t),shafts:ue(e.shafts,o.shafts,t)}},leaf(t){let e=U0([Hp,[35.3,.9,45.2],[35.75,.4,44.4],[36,.08,44.05],Af],ie(0,.85,t)),o=Math.sin(t*Math.PI*6)*.25*(1-ie(.35,.82,t)),r=ie(.78,.88,t);return{phase:"fly",pos:Co(e,[0,Math.abs(Math.cos(t*Math.PI*6))*.07*(1-r),o]),tumble:.7*(1-r),swing:o}}},{dur:12,door(t){let e=gr((t-.02)/.09);return Dp(e)+.07*Math.sin(gr((t-.08)/.18)*Math.PI)*(1-gr((t-.08)/.3))},cam(t,e,o,r){let n=Math.sin(t*340)*.012*ie(.02,.05,t)*(1-ie(.08,.16,t)),a=ie(.06,1,t),s=U0([e.eye,[34.3,1,43.6],[31.5,1.9,43.4],[26.5,2.4,43.6],[21,2.6,43.6],[16.5,2.8,43.2],[12.6,3.1,41.2],[9.6,3.4,38],o.eye],a*.55+C0(a)*.45),i=Co(r.pos,[1,-.2,-1.45]);s=f0(s,i,ie(.1,.22,t)*(1-ie(.52,.72,t)));let c=ie(.06,.16,t)*(1-ie(.86,1,t)),f=f0(e.target,r.pos,c);f=f0(f,o.target,ie(.86,1,t));let l=ue(e.fov,o.fov,ie(.1,1,t))+6*Math.sin(Math.PI*ie(.08,.9,t)),v=ue(e.roll,o.roll,t)+.06*Math.sin(Math.PI*2*ie(.1,.9,t))+n;return Lo(Co(s,[0,n,0]),f,l,v)},look(t,e,o,r,n){let a=Math.hypot(r.pos[0]-n[0],r.pos[1]-n[1],r.pos[2]-n[2]),s=ie(.02,.06,t)*(1-ie(.08,.3,t));return{letterbox:ue(e.letterbox,o.letterbox,ie(.1,.4,t)),exposure:ue(e.exposure,o.exposure,t)*(1+.8*s),focus:ue(a,o.focus,ie(.86,1,t)),aperture:ue(.8,o.aperture,ie(.86,1,t)),vignette:ue(e.vignette,o.vignette,t),shafts:ue(e.shafts,o.shafts,t)+s}},leaf(t){let e=gr((t-.05)/.95);if(e<=0)return{phase:"floor"};let o=U0(oE(),e*.6+C0(e)*.4),r=Math.sin(t*Math.PI*9)*.12*Math.sin(Math.PI*e);return{phase:"fly",pos:Co(o,[0,r*.6,r]),tumble:1.4-.8*e}}},...[0,1].map(t=>Ib(t,7.5)),{dur:10,cam(t,e,o,r){let n=C0(t),a=U0([e.eye,[7.6,3.2,16.2],[7,2.9,17.2],[6.5,3.2,16],o.eye],n),s=ie(0,.15,t)*(1-ie(.85,1,t)),i=f0(f0(e.target,o.target,ie(.5,1,t)),r.pos,s);return Lo(a,i,ue(e.fov,o.fov,n)+4*Math.sin(Math.PI*n),ue(e.roll,o.roll,n))},look(t,e,o,r,n){let a=Math.hypot(r.pos[0]-n[0],r.pos[1]-n[1],r.pos[2]-n[2]);return{letterbox:ue(e.letterbox,o.letterbox,t),exposure:ue(e.exposure,o.exposure,t),focus:ue(a,o.focus,ie(.85,1,t)),aperture:ue(.6,o.aperture,ie(.85,1,t)),vignette:ue(e.vignette,o.vignette,t),shafts:ue(e.shafts,o.shafts,t)}},leaf(t){let e=C0(t),o=U0(nE(),e);return{phase:"fly",pos:Co(o,[0,Math.sin(t*Math.PI*6)*.06*Math.sin(Math.PI*t),0]),tumble:.6+.4*Math.sin(Math.PI*t)}}},...[3,4].map(t=>Ib(t,7.5)),{dur:10,cam(t,e,o,r){let n=C0(t),a=U0([e.eye,[7.6,4,30.5],[7.3,4.4,25.5],[7.1,4,21.8],o.eye],n),s=ie(0,.2,t)*(1-ie(.9,1,t)),i=f0(f0(e.target,o.target,ie(.5,1,t)),r.pos,s);return Lo(a,i,ue(e.fov,o.fov,n),ue(e.roll,o.roll,n))},look(t,e,o,r,n){let a=Math.hypot(r.pos[0]-n[0],r.pos[1]-n[1],r.pos[2]-n[2]);return{letterbox:ue(e.letterbox,o.letterbox,t),exposure:ue(e.exposure,o.exposure,t),focus:ue(a,o.focus,ie(.85,1,t)),aperture:ue(.7,o.aperture,ie(.85,1,t)),vignette:ue(e.vignette,o.vignette,t),shafts:ue(e.shafts,o.shafts,t)}},leaf(t){let e=U0(rE(),ie(0,.86,t)),o=Math.sin(t*Math.PI*7)*.3*(1-ie(.4,.84,t)),r=ie(.8,.9,t);return{phase:"fly",pos:Co(e,[o,Math.abs(Math.cos(t*Math.PI*7))*.08*(1-r),0]),tumble:.8*(1-r),swing:o}}}],Up=9.2,tl=.72;function qb(t){return t<tl?ue(H1(),Up,t/tl):ue(Up,Zz,(t-tl)/(1-tl))}function Qc(){return tl*gr((va[0]+.15-H1())/(Up-H1()))}var G1={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},D1=t=>Object.assign({},G1,Os[t].look),sE=`
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
`;function mr(t,e,o){let r=document.createElement(t);return e&&(r.className=e),o!==void 0&&(r.innerHTML=o),r}var Li=t=>String(t).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function F1(t,e,o){t.querySelectorAll(".tour-line").forEach((r,n)=>{r.style.transitionDelay=(e+n*o).toFixed(2)+"s"})}Fb.exports=function(e){let o=/tourdebug/.test(location.search),{fps:r}=e;if(!document.querySelector("link[data-tour-font]")){let W=document.createElement("link");W.rel="stylesheet",W.href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&display=swap",W.setAttribute("data-tour-font",""),document.head.appendChild(W)}let n=Lp(),a=null;fetch("res/hand.json").then(W=>W.ok?W.json():null).then(W=>{a=W}).catch(()=>{});let s=document.createElement("style");s.textContent=sE+`
	.hand-text { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); clip-path: inset(50%); white-space: normal; }
	.tour-body canvas.hand { display: block; cursor: pointer; }`,s.textContent+=`
	body.touring #museum-mobile-controls,
	body.touring .painting-plaque { display: none !important; }`,document.head.appendChild(s);let i=mr("div","tour");i.setAttribute("role","region"),i.setAttribute("aria-label","Guided tour of the gallery. Swipe, scroll or press the arrow keys to move on.");let c=mr("div","tour-mark",Li(P1.name)),f=mr("button","tour-free","Explore freely");f.type="button";let l=mr("div","tour-links",Pp.icons("tour-icon"));l.insertBefore(Op()("tour-icon"),l.firstChild),l.insertBefore(b1().button("tour-icon"),l.firstChild.nextSibling);let v=mr("button","tour-free tour-note",'<svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 4c-7 1-11.5 5.5-13 13l-1.5 3 3-1.5c7.500-1.500 12-6 13-13z"/><path d="M5.5 20L13 12.500"/></svg><span>Leave a note</span>');v.type="button",v.setAttribute("aria-label","Leave a note: go to the piano room and the confessional"),l.appendChild(v),I1&&l.appendChild(f);let d=mr("div","tour-progress",Os.map(()=>"<i></i>").join("")),p=mr("div","tour-hint",'<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M6 15l6-6 6 6"></path></svg><span></span>'),u=p.querySelector("span"),h=mr("div","tour-card tour-intro",`
		<span class="tour-line tour-kicker">A virtual gallery</span>
		<span class="tour-rule"></span>
		<h1 class="tour-line tour-title">${Li(P1.name)}</h1>
		<span class="tour-line tour-sub tour-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</span>`);F1(h,.4,.35);let g=P1.text.split(/\n\s*\n/).map(W=>`<p class="tour-line">${Li(W.trim())}</p>`).join(""),m=mr("div","tour-card tour-about",`
		<span class="tour-line tour-kicker">The artist</span>
		<h2 class="tour-line tour-title">${Li(P1.title)}</h2>
		<span class="tour-rule"></span>
		${Pp.line("tour-line tour-contact")}
		${g}`);F1(m,.25,.28);let x=mr("div","tour-card tour-sky",`
		<span class="tour-line tour-sub">Every painting here waits for the light.</span>`);F1(x,.6,.3);let y=mr("div","tour-card tour-master","");function _(W){let pt=mr("div","tour-card tour-story",`
			<span class="tour-line tour-kicker"></span>
			<h2 class="tour-title tour-letters"></h2>
			<span class="tour-rule"></span>
			<span class="tour-line visit-row"></span>
			<div class="tour-body"></div>`),Wt=pt.querySelector(".tour-title"),ne=pt.querySelector(".tour-body");return pt.filled=!1,pt.body=ne,pt.fill=()=>{let Zt=W();if(!Zt||pt.filled)return;pt.filled=!0;let Mo=Zt.title||"";pt.querySelector(".tour-kicker").textContent=Bz(Zt)||"Oil on canvas";let xo=pt.querySelector(".visit-row");xo.innerHTML=Ip.button(Zt),xo.hidden=!xo.innerHTML;let Po=xo.querySelector(".visit-btn");Po&&(Po.addEventListener("click",Fe=>{Fe.stopPropagation(),Ip.open(Zt)}),pt.warm=()=>Ip.warm(Zt));let co=0;Wt.innerHTML=Mo.split(" ").map(Fe=>'<span class="tour-word">'+Fe.split("").map(g0=>`<span style="transition-delay:${(.35+co++*.045).toFixed(3)}s">${Li(g0)}</span>`).join("")+"</span>").join(" "),Wt.setAttribute("aria-label",Mo);let So=.35+Mo.length*.045+.2;pt.querySelector(".tour-rule").style.transitionDelay=So.toFixed(2)+"s";let no=String(Zt.description||"").split(/\n\s*\n/).filter(Fe=>Fe.trim());if(pt.querySelector(".tour-kicker").style.transitionDelay="0.1s",a&&no.length){ne.innerHTML=no.map($0=>`<p class="hand-text">${Li($0.trim())}</p>`).join("")+'<div class="hand-wrap"><canvas class="hand" aria-hidden="true"></canvas></div>';let Fe=ne.querySelector("canvas"),g0=no.map($0=>$0.trim()).join(`

`),zo=!1,en=!1,rr=0;ne.addEventListener("wheel",()=>{zo=!0},{passive:!0}),ne.addEventListener("touchmove",()=>{zo=!0},{passive:!0});let ar=parseFloat(getComputedStyle(ne).fontSize)||17,c0=n(Fe,a,{ink:"rgba(244,236,223,0.93)",shadow:"rgba(0,0,0,0.55)",shadowBlur:7,xh:Math.max(8.5,ar*.56),width:.14,speed:80,pace:.12,minDur:.022,maxTime:$0=>3.5+$0.length/420,seed:3+Mo.length,onPen:$0=>{if(zo)return;let ta=$0-ne.clientHeight*.55;ta>ne.scrollTop+4&&(ne.scrollTop+=Math.min(16,ta-ne.scrollTop))}});Fe.addEventListener("click",$0=>{$0.stopPropagation(),clearTimeout(rr),en?c0.finish():(en=!0,c0.write(g0,!0))}),pt.write=()=>{if(clearTimeout(rr),zo=!1,en){c0.write(g0,!0);return}c0.write("",!0),rr=setTimeout(()=>{en=!0,c0.write(g0)},So*.6*1e3)},pt.stopWrite=()=>{clearTimeout(rr),c0.stop()};let Cr=0;window.addEventListener("resize",()=>{clearTimeout(Cr),Cr=setTimeout(()=>{en&&pt.classList.contains("on")&&c0.write(g0,!0)},250)})}else ne.innerHTML=no.map(Fe=>`<p class="tour-line">${Li(Fe.trim())}</p>`).join(""),ne.querySelectorAll(".tour-line").forEach((Fe,g0)=>{Fe.style.transitionDelay=(So+.3+Math.min(g0,6)*.35).toFixed(2)+"s"})},pt}let M=()=>e.paintings?e.paintings():[],b=W=>M().find(pt=>pt.side==="corridor"&&Math.abs(pt.paintingPosition[0]-W)<.5),S=_(()=>M().find(W=>W.side==="end")),z=()=>mr("div","tour-card",""),k=_(()=>b(Ni[0])),C=_(()=>b(Oi[0])),R=_(()=>b(Ri[0])),U=$n.map(W=>_(()=>M().find(pt=>pt.side===W.side&&Math.abs(pt.paintingPosition[2]-W.z)<.5))),P=mr("div","tour-card tour-endcard",`
		<span class="tour-line tour-kicker">Thank you for walking with me</span>
		<span class="tour-rule"></span>
		<span class="tour-line tour-sub">${I1?"The rest of the gallery is yours to wander.":"Swipe back to return to any painting."}</span>
		<span class="tour-line tour-sub tour-confess-line">Before you leave, the confessional is open.<br>Leave me a note; no one else will read it.</span>
		<div class="tour-line tour-end"><button type="button" class="tour-btn" data-act="confess">Leave something behind</button></div>
		${Pp.line("tour-line tour-contact")}
		<div class="tour-line tour-end">
			${I1?'<button type="button" class="tour-btn" data-act="free">Walk the gallery</button>':""}
			<button type="button" class="tour-btn quiet" data-act="list">All paintings</button>
			<button type="button" class="tour-btn quiet" data-act="replay">Replay</button>
		</div>`);F1(P,.5,.35);let q=[h,m,x,y,S,z(),z(),z(),k,C,R,z(),...U,P];i.append(...q,c,l,d,p),document.body.appendChild(i);let at=Ob()({root:i,avatar:e.avatar,glyphs:()=>a,onExit:()=>{te=-1,Ce&&(tt={start:E},Ce=!1)}});document.body.classList.add("touring");let St=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,yt=St?"Scroll":"Swipe",mt=Os.map((W,pt)=>pt===0?St?"Scroll to begin":"Swipe up to begin":pt===1?yt+" to follow the leaf":pt===2?yt+" to follow the light":pt===3?yt+" for its story":pt===6||pt===7||pt===Os.length-1?"":yt+" on"),zt=[0];Fp.forEach(W=>zt.push(zt[zt.length-1]+W.dur));let It=zt[zt.length-1],se=210,Ee=95,Qe=.35,me=1.4,qe=.32,Ge=1,Q=1.3,j=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,ft=2.2,xt=.7,Qt=.9,ce=!0,Kt=0,qt=0,rt=0,Ct=-10,we=!1,te=-1,Nt=0,$e=0,E=0,De=null,je=Object.assign({},D1(0)),lo=Os[0].cam(0),Oo={phase:"home",pos:Jc.slice(),tumble:0},_o=0,Fo=W=>{let pt=0;for(let Wt=1;Wt<zt.length;Wt++)Math.abs(zt[Wt]-W)<Math.abs(zt[pt]-W)&&(pt=Wt);return pt};function qo(W){let pt=q[W];pt&&pt.fill&&(pt.fill(),pt.body.scrollTop=0,pt.offsetWidth),q.forEach((Wt,ne)=>{let Zt=Wt.classList.contains("on");Wt.classList.toggle("on",ne===W),ne===W&&!Zt&&Wt.write&&Wt.write(),ne!==W&&Zt&&Wt.stopWrite&&Wt.stopWrite()}),pt&&pt.warm&&pt.warm(),u.textContent=mt[W]||"",p.classList.toggle("on",!!mt[W])}function s0(){q.forEach(W=>{W.stopWrite&&W.classList.contains("on")&&W.stopWrite(),W.classList.remove("on")}),p.classList.remove("on")}let tn=null,yr=-1;function et(W){if(at.active||!ce||De)return;let pt=E-Ct>Qe;if(Ct=E,pt||!tn){let Wt=0,ne=It;for(let Zt=0;Zt<zt.length;Zt++)if(zt[Zt]<=Kt-.02&&(Wt=zt[Zt]),zt[Zt]>=Kt+.02){ne=zt[Zt];break}tn={lo:Wt,hi:ne}}E<yr||(we=!1,rt=Math.max(tn.lo,Math.min(tn.hi,rt+W)),rt=Math.max(Kt-ft,Math.min(Kt+ft,rt)))}function jt(W){if(at.active||!ce||De)return;let pt=we?rt:Kt,Wt;if(W>0)Wt=zt.findIndex(ne=>ne>pt+.05);else{Wt=-1;for(let ne=zt.length-1;ne>=0;ne--)if(zt[ne]<pt-.05){Wt=ne;break}}Wt<0||(rt=zt[Wt],we=!0,Ct=E)}let Yt=null,Ft=W=>W.stopPropagation();["touchstart","touchmove","touchend","mousedown","mouseup","click","contextmenu"].forEach(W=>i.addEventListener(W,Ft)),i.addEventListener("pointerdown",W=>{if(W.stopPropagation(),!(W.target.closest("button, a")||W.target.closest(".tour-body"))){Yt={x:W.clientX,y:W.clientY,lx:W.clientX,ly:W.clientY,t:performance.now(),moved:0,v:0,lt:performance.now()};try{i.setPointerCapture(W.pointerId)}catch(pt){}}}),i.addEventListener("pointermove",W=>{if(!Yt)return;let pt=W.clientX-Yt.lx,Wt=W.clientY-Yt.ly;Yt.lx=W.clientX,Yt.ly=W.clientY;let ne=Math.abs(Wt)>=Math.abs(pt)?-Wt:-pt;Yt.moved+=Math.abs(ne);let Zt=performance.now(),Mo=ne/Ee;Yt.v=Yt.v*.6+Mo/Math.max(.008,(Zt-Yt.lt)/1e3)*.4,Yt.lt=Zt,Yt.moved>6&&et(Mo)});let Ae=W=>{let pt=Yt;if(Yt=null,!!pt){if(at.active){pt.moved<10&&performance.now()-pt.t<500?at.tap():pt.y-(W?W.clientY:pt.ly)>30&&at.swipe(1);return}pt.moved<10&&performance.now()-pt.t<500?jt(1):performance.now()-pt.lt<120&&et(Math.max(-1.6,Math.min(1.6,pt.v*.22)))}};i.addEventListener("pointerup",W=>{W.stopPropagation(),Ae(W)}),i.addEventListener("pointercancel",()=>{Yt=null}),i.addEventListener("wheel",W=>{if(at.active){if(W.target.closest(".conf-ui"))return;W.preventDefault(),at.wheel(W.deltaY);return}if(W.target.closest(".tour-body")){let Wt=W.target.closest(".tour-body"),ne=Wt.scrollTop+Wt.clientHeight>=Wt.scrollHeight-2&&W.deltaY>0,Zt=Wt.scrollTop<=0&&W.deltaY<0;if(!ne&&!Zt)return}W.preventDefault();let pt=W.deltaMode===1?W.deltaY*16:W.deltaMode===2?W.deltaY*window.innerHeight:W.deltaY;et(pt/se)},{passive:!1}),window.addEventListener("keydown",W=>{if(!ce||De||document.body.classList.contains("visiting"))return;if(at.active){if(W.stopImmediatePropagation(),W.target&&/TEXTAREA|INPUT|BUTTON/.test(W.target.tagName))return;at.key(W.key)&&W.preventDefault();return}let pt=W.key;if(["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(pt)>=0){if((pt==="Enter"||pt===" ")&&W.target&&W.target.tagName==="BUTTON")return;W.preventDefault(),W.stopImmediatePropagation(),jt(1)}else["ArrowUp","ArrowLeft","PageUp"].indexOf(pt)>=0?(W.preventDefault(),W.stopImmediatePropagation(),jt(-1)):pt==="Escape"?(W.preventDefault(),ot()):/^[wasdzq]$/i.test(pt)&&W.stopImmediatePropagation()},!0),window.addEventListener("keyup",W=>{ce&&!De&&/^(Arrow|[wasdzq]$)/i.test(W.key)&&W.stopImmediatePropagation()},!0),f.addEventListener("click",W=>{W.stopPropagation(),ot()}),["mousedown","pointerdown"].forEach(W=>v.addEventListener(W,pt=>pt.stopPropagation())),v.addEventListener("click",W=>{W.stopPropagation(),eo()});let Xe=Lo([8.6,1.75,44.3],[-3,1.85,44.5],55,0),We=null,Ce=!1;function eo(){if(!ce||De||at.active||We)return;s0(),te=-2;let W=lo.eye;if(W[0]>.5&&W[0]<13.5&&W[2]>36&&W[2]<50){Ce=!1,at.start(lo,je);return}We={t:0}}P.addEventListener("click",W=>{let pt=W.target.closest("button");pt&&(W.stopPropagation(),pt.dataset.act==="free"&&ot(),pt.dataset.act==="replay"&&gt(),pt.dataset.act==="list"&&Yu().show(!1),pt.dataset.act==="confess"&&(s0(),te=-2,at.start(lo,je)))});let He=[null,[Nr.zc-1.6,Math.PI/2],[11.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[42.5+el[0]-7,0],[42.5+el[1]-7,0],[42.5+el[2]-7,0],[1e3,Math.PI/2],...$n.map(W=>[W.z-1.6,W.side==="left"?-Math.PI/2:Math.PI/2]),[Rs[2]-1.6,Math.PI]],go=null,Ve=0;function ot(){if(!ce||De||!I1)return;let W=Fo(Kt),pt=He[W];go=W<=1?{phase:"home",pos:Jc.slice()}:W>=3&&W<=6?{phase:"floor",pos:va.slice()}:W===11?{phase:"floor",pos:Af.slice()}:W===18?{phase:"floor",pos:Rs.slice()}:null,Ve=W>=12?1:0,pt&&r.place&&r.place(pt[0],pt[1]),De={start:E,fromCam:lo,fromLook:Object.assign({},je)},s0(),i.hidden=!0,document.body.classList.remove("touring"),e.onExit&&e.onExit()}function gt(){Kt=rt=0,qt=0,we=!1,te=-1,Nt=0,$e=0,Oo={phase:"home",pos:Jc.slice(),tumble:0},tt={start:E}}let tt={start:-1},pe=!1,ge=[],kt={prev:null,vel:[0,0,0],axis:[1,0,0],dir:null,bank:0,rock:0,spin:0,fresh:!0};function Jt(W){_o+=W*(Oo.phase==="floor"?0:1);let pt=Oo.tumble===void 0?0:Oo.tumble,Wt=Zc.fromTranslation(ge,Oo.pos);if(Oo.phase==="home")Wt=Zc.rotateY(Wt,Wt,2.2+Math.sin(_o*.9)*.15),Wt=Zc.rotateZ(Wt,Wt,-1+Math.sin(_o*1.3)*.12),Wt=Zc.rotateX(Wt,Wt,.4);else if(Oo.phase==="floor")Wt=Zc.rotateY(Wt,Wt,.65),Wt=Zc.rotateX(Wt,Wt,.16);else{let ne=Oo.pos;if(kt.prev&&W>0){let Pn=[ne[0]-kt.prev[0],ne[1]-kt.prev[1],ne[2]-kt.prev[2]];if(Math.hypot(Pn[0],Pn[1],Pn[2])<1.5){let fl=Math.min(1,W*6);for(let Hs=0;Hs<3;Hs++)kt.vel[Hs]+=(Pn[Hs]/W-kt.vel[Hs])*fl}else kt.vel=[0,0,0]}kt.prev=ne.slice();let Zt=kt.vel,Mo=Math.hypot(Zt[0],Zt[1],Zt[2]),xo=ie(.25,1.4,Mo),Po=ie(.5,2,-Zt[1]),co=_o*.35*(.3+pt)+.65,So=[Math.cos(co),0,Math.sin(co)];Mo>.001&&(So=f0(So,tr(Zt,-1/Mo),xo));let no=Math.min(1,W*4);kt.axis=f0(kt.axis,So,kt.fresh?1:no);let Fe=kt.axis,g0=Math.hypot(Fe[0],Fe[1],Fe[2])||1;Fe=tr(Fe,1/g0);let zo=lo.eye,en=[zo[0]-ne[0],zo[1]-ne[1],zo[2]-ne[2]],rr=Math.hypot(en[0],en[1],en[2])||1,ar=ue(.6,.22,xo),c0=[en[0]/rr*ar,1+en[1]/rr*ar,en[2]/rr*ar],Cr=Fe[0]*c0[0]+Fe[1]*c0[1]+Fe[2]*c0[2];c0=qp(c0,tr(Fe,Cr));let $0=Math.hypot(c0[0],c0[1],c0[2])||1;c0=tr(c0,1/$0);let ta=[Fe[1]*c0[2]-Fe[2]*c0[1],Fe[2]*c0[0]-Fe[0]*c0[2],Fe[0]*c0[1]-Fe[1]*c0[0]],Xo=Math.hypot(Zt[0],Zt[2]),w0=0;if(Xo>.15&&kt.dir&&W>0){let Pn=[Zt[0]/Xo,Zt[2]/Xo];w0=(kt.dir[0]*Pn[1]-kt.dir[1]*Pn[0])/W,kt.dir=Pn}else Xo>.15&&(kt.dir=[Zt[0]/Xo,Zt[2]/Xo]);kt.bank+=(Math.max(-.8,Math.min(.8,w0*.3))*xo-kt.bank)*Math.min(1,W*3),kt.rock+=W*(1.5+2.4*xo),kt.spin+=W*Po*7*(.4+pt);let $r=Math.sin(kt.rock)*(.26+.45*pt)*(1-.5*Po)+kt.bank+kt.spin,Fs=Math.sin(kt.rock*.63+1)*(.16+.3*pt)+(Oo.swing||0)*.9,ga=Math.cos($r),Gs=Math.sin($r),qf=Co(tr(c0,ga),tr(ta,Gs)),Ja=Co(tr(ta,ga),tr(c0,-Gs));ga=Math.cos(Fs),Gs=Math.sin(Fs);let Hi=Co(tr(Fe,ga),tr(qf,Gs)),cl=Co(tr(qf,ga),tr(Fe,-Gs)),Z1=Math.sin(kt.rock+1.5708)*.035*(.3+pt)*(1-.5*xo),Na=Co(ne,tr(ta,Z1)),ll=[Hi[0],Hi[1],Hi[2],0,cl[0],cl[1],cl[2],0,Ja[0],Ja[1],Ja[2],0,Na[0],Na[1],Na[2],1];for(let Pn=0;Pn<16;Pn++)Wt[Pn]=ll[Pn];kt.fresh=!1}return Oo.phase!=="fly"&&(kt.prev=null,kt.vel=[0,0,0],kt.fresh=!0,kt.spin=0,kt.bank=0,kt.dir=null),{visible:!0,model:Wt}}function Ye(W){for(let pt in G1)je[pt]=W[pt]!==void 0?W[pt]:G1[pt]}function oo(W,pt){if(W<=1)return{phase:"home",pos:Jc.slice(),tumble:0};let Wt=Pb[W];if(Wt){let ne=Wt.amp;return{phase:"fly",pos:Co(Wt.pos(),[Math.sin(pt*.55)*ne[0],Math.sin(pt*.8)*ne[1],(1-Math.cos(pt*.45))*ne[2]]),tumble:Wt.tumble}}return{phase:"floor",pos:(W>=18?Rs:W>=10?Af:va).slice(),tumble:0}}let ze=0,Ue=null;function $o(W){let pt=Math.min(.1,Math.max(0,W-ze));if(ze=W,E=W,pe||(pe=!0,tt.start=W),De)return null;if(We&&(We.t+=pt,We.t>=.7&&(We=null,Ce=!0,at.start(Xe,Object.assign({},G1,{fade:1,fadeColor:[0,0,0]})))),at.active){let Xo=at.update(pt);return lo=Xo.camera,Ye(Xo.look),o&&window.__camOverride&&(lo=window.__camOverride),o&&window.__lookOverride&&Object.assign(je,window.__lookOverride),{camera:lo,walker:null,door:1,look:je,leaf:Jt(pt)}}if(!we&&!Yt&&E-Ct>xt){let Xo=Fo(rt);Math.abs(zt[Xo]-rt)<Qt&&(rt=zt[Xo])}let Wt=rt-Kt;if(we){let w0=Math.sign(Wt)*Math.min(Ge,Math.sqrt(2*Q*Math.abs(Wt)))-qt;qt+=Math.sign(w0)*Math.min(Math.abs(w0),Q*pt),Kt+=qt*pt,(Wt>0&&Kt>=rt||Wt<0&&Kt<=rt||Math.abs(rt-Kt)<1e-4)&&(Kt=rt,qt=0,we=!1)}else{let Xo=Wz(Kt,rt,qt,qe,pt,3);Kt=Xo[0],qt=Xo[1],Math.abs(rt-Kt)<1e-4&&Math.abs(qt)<.001&&(Kt=rt,qt=0)}let ne=0;for(;ne<Fp.length-1&&Kt>=zt[ne+1];)ne++;let Zt=Fp[ne],Mo=gr((Kt-zt[ne])/Zt.dur),xo=Os[ne],Po=Os[ne+1],co=Fo(Kt);co!==Nt&&(Nt=co,$e=0);let So=Math.abs(Kt-zt[co])<.02;So&&($e+=pt);let no=1-ie(0,1.2,Math.abs(Kt-zt[co])),Fe=Zt.leaf(Mo);if(Fe.pos?Oo=Object.assign({},Fe):Oo=Object.assign({},Fe,{pos:Fe.phase==="home"?Jc.slice():(ne>=10?Af:va).slice()}),Pb[co]&&no>0){let Xo=oo(co,$e);Oo.pos=f0(Oo.pos,Xo.pos,no)}let g0=Zt.walker&&(Mo>.01||ne===6)?Zt.walker(Mo):null;Ue=g0==null?null:{x:g0,z:Gp,heading:Math.PI/2,phase:(g0-Db)/Qz};let zo=Zt.cam(Mo,xo.cam(0),Po.cam(0),Oo);if(no>0&&$e>0){let Xo=Os[co],w0=Xo.cam(0),$r=Xo.cam($e);zo=Lo(Co(zo.eye,tr(qp($r.eye,w0.eye),no)),Co(zo.target,tr(qp($r.target,w0.target),no)),zo.fov+($r.fov-w0.fov)*no,zo.roll+($r.roll-w0.roll)*no)}if(no>0&&!j){let Xo=E,w0=.006*no,$r=Math.sin(Xo*.61)*.6+Math.sin(Xo*1.37+1.3)*.4,Fs=Math.sin(Xo*.47+2.1)*.6+Math.sin(Xo*1.13+.4)*.4,ga=Math.sin(Xo*.53+4)*.5+Math.sin(Xo*.97+2.6)*.5;zo=Lo(Co(zo.eye,[$r*w0,Fs*w0*.7,ga*w0]),Co(zo.target,[Fs*w0*1.8,$r*w0*1.4,0]),zo.fov,zo.roll+ga*.0012*no)}lo=zo;let en=D1(ne),rr=D1(ne+1),ar=Object.assign({},en,Zt.look(Mo,en,rr,Oo,zo.eye));if(no>0){let Xo=D1(co);for(let w0 in Xo)typeof Xo[w0]=="number"&&(ar[w0]=ue(ar[w0],Xo[w0],no))}Ye(ar);let Cr=So&&Math.abs(rt-Kt)<.02?co:-1;Cr!==te&&(Cr>=0&&(yr=E+me),te=Cr,Cr>=0?qo(Cr):s0()),d.querySelectorAll("i").forEach((Xo,w0)=>Xo.classList.toggle("on",w0===co));let $0=te>=0?q[te]:null;$0&&$0.fill&&!$0.filled&&($0.fill(),$0.filled&&($0.classList.remove("on"),$0.offsetWidth,$0.classList.add("on")));let ta=gr((W-tt.start)/2.6);return ta<1&&(je.fade=Math.max(je.fade,1-ie(0,1,ta)),je.fadeColor=[0,0,0]),o&&window.__camOverride&&(lo=window.__camOverride),o&&window.__lookOverride&&Object.assign(je,window.__lookOverride),{camera:lo,walker:Ue,door:Zt.door?Zt.door(Mo):ne>=12?1:0,look:We?Object.assign(je,{fade:Math.max(je.fade||0,gr(We.t/.6)),fadeColor:[0,0,0]}):je,leaf:Jt(pt)}}return o&&(window.__tour={go:jt,exit:ot,wind:et,confess(){s0(),te=-2,at.start(lo,je)},note:()=>eo(),conf:at,paper:O1().STATE,seek(W,pt){Kt=rt=zt[W]+(zt[W+1]-zt[W])*pt,qt=0,we=!1,Ct=E+1e6,tt.start=E-10,pe=!0},jump(W){Kt=rt=zt[W],qt=0,we=!1,$e=0,Ct=E,tt.start=E-10,pe=!0},state:()=>({current:Fo(Kt),scroll:+Kt.toFixed(3),target:+rt.toFixed(3),shown:te,move:Math.abs(rt-Kt)>.02?{p:Kt}:null,camNow:lo,leaf:Oo,look:je})}),{update:$o,get active(){return ce&&!De},handover(W){if(!De)return null;let pt=gr((W-De.start)/1.8);return pt>=1?(ce=!1,null):{from:De.fromCam,fromLook:De.fromLook,k:C0(pt)}},restingDoor:()=>Ve,restingLeaf(){return go?(Oo=go,Jt(0)):null},mix:Ci,cam:Lo}}});var Wb=Tt((tL,jb)=>{var nv=Oc(),Xp=nv.O,{ROT:Ii,GRAVE:Hb}=nv.STUDIO,Yp=t=>[t[0]+Xp[0],t[1]+Xp[1],t[2]+Xp[2]],Za=(t,e,o)=>t+(e-t)*o,Cs=(t,e,o)=>[Za(t[0],e[0],o),Za(t[1],e[1],o),Za(t[2],e[2],o)],$i=(t,e)=>[t[0]+e[0],t[1]+e[1],t[2]+e[2]],Tf=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],or=(t,e)=>[t[0]*e,t[1]*e,t[2]*e],$s=t=>{let e=Math.hypot(t[0],t[1],t[2])||1;return or(t,1/e)},ol=(t,e)=>[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]],j1=t=>Math.max(0,Math.min(1,t)),U1=t=>t*t*(3-2*t),Or=(t,e,o)=>U1(j1((o-t)/(e-t))),Ub=t=>.5-.5*Math.cos(Math.PI*j1(t));function Lf(t,e){let o=t.length-1,r=j1(e)*o,n=Math.min(o-1,Math.floor(r)),a=r-n,s=t[Math.max(0,n-1)],i=t[n],c=t[n+1],f=t[Math.min(o,n+2)],l=a*a,v=l*a;return[0,1,2].map(d=>.5*(2*i[d]+(-s[d]+c[d])*a+(2*s[d]-5*i[d]+4*c[d]-f[d])*l+(-s[d]+3*i[d]-3*c[d]+f[d])*v))}var Vo=Ii.cx,Ps=[Vo+.06,Hb.top+.012,Hb.cz+.5],Zp=[5,7.42,11.25],Qp=[Vo,2.45,Ii.cz-Ii.ro-1.3],Jp=[5,2.05,21.2],tv=[Vo,.22,8.5],ev=[Vo+1.05,2.05,2.35],ov=[Vo,1.15,10],B0=[{petal:Zp,eye:[6.5,6,9.55],at:Zp,fov:42,look:{aperture:.7}},{petal:Qp,eye:[Vo,3.9,21.75],at:[Vo,2,6],fov:62,look:{aperture:.04}},{petal:Jp,eye:[2.2,1.9,20.4],at:[9.3,2.7,22],fov:54,look:{aperture:.3}},{petal:tv,eye:[Vo+.05,.25,10.4],at:[Vo,2,1],fov:50,look:{aperture:.3}},{petal:ev,eye:[9.9,1.35,4.6],at:[Vo,2.2,1],fov:42,look:{aperture:.3}},{petal:ov,eye:[10.6,4.4,11.8],at:[Vo,0,6.8],fov:55,look:{aperture:.12}},{petal:Ps,eye:[Vo+.15,3.3,15.4],at:[Vo,.97,19.9],fov:55,look:{aperture:.25}}],B1=[{dur:7,petal:[Zp,[5.3,6.4,12.2],[6.2,5,12.9],[7.3,3.7,13.3],[7.8,2.9,13.8],Qp],eye:[B0[0].eye,[6.8,5.4,11.4],[7.5,6.6,14.6],[Vo,7,17.6],[Vo,6.4,20.6],[Vo,5,21.5],B0[1].eye],sway:.5,track:.9},{dur:8,petal:[Qp,[Vo,2.35,Ii.cz-1.6],[Vo,2.2,Ii.cz],[Vo+.05,2.25,Ii.cz+1.9],[7.2,2.3,21.15],[6,2.15,21.1],Jp],eye:[B0[1].eye,[Vo,3.1,21.45],[7.4,2.8,21.5],[5.6,2.4,21.55],[3.6,2.1,21.1],B0[2].eye],sway:.1,track:.95,zoom:[.05,.3,.58,22]},{dur:7,petal:[Jp,[4,1.6,19],[4.6,1,16.4],[6.4,.5,14.5],[7.6,.3,12.8],[Vo,.24,10.8],tv],eye:[B0[2].eye,[2.9,1.4,18],[4.6,.8,15.6],[7,.35,14],B0[3].eye],sway:.15,track:.85},{dur:6,petal:[tv,[Vo,.24,6.2],[Vo+.15,.45,4.2],[Vo+.7,1.3,2.9],ev],eye:[B0[3].eye,[Vo+.1,.28,8.4],[Vo+.6,.55,6.4],B0[4].eye],sway:.05,track:.6},{dur:7,petal:[ev,[Vo+.9,2.8,3.6],[Vo+.3,2.3,6],[Vo,1.5,8.2],ov],eye:[B0[4].eye,[10.4,2.6,6.6],[10.6,3.6,9.4],B0[5].eye],sway:.3,track:.7},{dur:8,petal:[ov,[Vo,1.35,12.8],[Vo,1.6,15.2],[Vo,1.62,16.9],[Vo+.04,1.15,17.8],[Ps[0],.78,Ps[2]-.12],[Ps[0],Ps[1]+.05,Ps[2]],Ps],eye:[B0[5].eye,[10.2,4,12.6],[9.6,3.4,13.6],[Vo+.6,2.9,14.7],B0[6].eye],sway:.25,track:.75}],Pi={delay:1.2,dur:11,eye:[B0[6].eye,[11.1,3,15.2],[12.4,2.8,18.2],[11.1,2.5,21.2],[Vo+.25,1.9,21.1]],at:[Vo,.62,15.1],fov:60},Ln=[0];B1.forEach(t=>Ln.push(Ln[Ln.length-1]+t.dur));var Kp=Ln[Ln.length-1],iE=210,cE=95,lE=.35,fE=.45,hE=.7,uE=.9;function Bb(t,e,o,r,n,a){r=Math.max(1e-4,r);let s=2/r,i=s*n,c=1/(1+i+.48*i*i+.235*i*i*i),f=t-e,l=a*r;f=Math.max(-l,Math.min(l,f));let v=t-f,d=(o+s*f)*n,p=(o-s*d)*c,u=v+(f+d)*c;return e-t>0==u>e&&(u=e,p=(u-e)/n),[u,p]}jb.exports=function(){let e=0,o=0,r=0,n=-10,a=0,s=null,i=null,c=!1,f=!1,l=0,v=B0[0].eye,d=b=>{let S=0;for(let z=1;z<Ln.length;z++)Math.abs(Ln[z]-b)<Math.abs(Ln[S]-b)&&(S=z);return S},p=b=>{(a-n>lE||i===null)&&(i=d(r)),n=a,c=!1;let S=Ln[Math.max(0,i-1)],z=Ln[Math.min(Ln.length-1,i+1)];r=Math.max(S,Math.min(z,r+b))},u=b=>{let S=d(r);r=Ln[Math.max(0,Math.min(Ln.length-1,S+b))],c=!0,n=a},h=null;window.addEventListener("wheel",b=>{if(b.target.closest&&b.target.closest(".st-ui"))return;b.preventDefault();let S=b.deltaMode===1?b.deltaY*16:b.deltaMode===2?b.deltaY*window.innerHeight:b.deltaY;p(S/iE)},{passive:!1}),window.addEventListener("pointerdown",b=>{b.target.closest&&b.target.closest("button, a, .st-ui")||(h={ly:b.clientY,lx:b.clientX,moved:0,v:0,lt:performance.now()})}),window.addEventListener("pointermove",b=>{if(!h)return;let S=b.clientX-h.lx,z=b.clientY-h.ly;h.lx=b.clientX,h.ly=b.clientY;let k=Math.abs(z)>=Math.abs(S)?-z:-S;h.moved+=Math.abs(k);let C=performance.now(),R=k/cE;h.v=h.v*.6+R/Math.max(.008,(C-h.lt)/1e3)*.4,h.lt=C,h.moved>6&&p(R)}),window.addEventListener("pointerup",()=>{let b=h;h=null,b&&b.moved>=10&&performance.now()-b.lt<120&&p(Math.max(-1.6,Math.min(1.6,b.v*.22)))}),window.addEventListener("keydown",b=>{b.key==="ArrowDown"||b.key==="ArrowRight"||b.key==="PageDown"?u(1):(b.key==="ArrowUp"||b.key==="ArrowLeft"||b.key==="PageUp")&&u(-1)});function g(){u(1)}function m(b,S){let z=0;for(;z<B1.length-1&&b>=Ln[z+1];)z++;let k=B1[z],C=j1((b-Ln[z])/k.dur),R=Ub(C),U=d(b),P=1-Or(0,.9,Math.abs(b-Ln[U])),q=Lf(k.petal,R),at=Tf(Lf(k.petal,Math.min(1,R+.02)),Lf(k.petal,Math.max(0,R-.02))),St=$s(ol([0,1,0],Math.hypot(at[0],at[2])>1e-4?at:[1,0,0])),yt=Math.sin(R*Math.PI*(2.5+k.dur*.25))*Math.sin(R*Math.PI);q=$i(q,or(St,yt*k.sway)),q[1]+=-Math.abs(yt)*k.sway*.25;let mt=U===0?[Math.sin(S*.9)*.01,0,Math.cos(S*.7)*.01]:[Math.sin(S*.53+U)*.07,Math.sin(S*.71+U*2)*.05,Math.cos(S*.47+U)*.07],zt=U===B0.length-1?0:P;q=$i(q,or(mt,zt));let It=Lf(k.eye,R),se=B0[z].at,Ee=B0[z+1].at,Qe=k.track*Or(0,.3,C)*(1-Or(.65,1,C)),me=Cs(Cs(se,Ee,Or(.25,.95,C)),q,Qe),qe=Za(B0[z].fov,B0[z+1].fov,U1(C));if(k.zoom){let[j,ft,xt,Qt]=k.zoom,ce=C<ft?Or(j,ft,C):1-Or(ft,xt,C);qe=Za(qe,Qt,ce)}let Ge=Za(B0[z].look.aperture,B0[z+1].look.aperture,U1(C)),Q=z===1?Math.sin(Or(.45,1,C)*Math.PI)*-.07:z===2?Math.sin(C*Math.PI)*.05:z===4?Math.sin(C*Math.PI)*.04:0;return{p:q,eye:It,at:me,fov:qe,aperture:Ge,roll:Q,idx:z,u:C,near:U,hanging:U===0&&P>.98}}let x={prev:null,vel:[0,0,0],axis:[1,0,0],dir:null,bank:0,rock:0,spin:0,fresh:!0,go:0,fall:0};function y(b,S,z,k){let C,R,U;if(z)C=$s([Math.sin(k*.8)*.25,-1,.35+Math.sin(k*1.1)*.15]),R=$s(ol(ol(C,[.4,0,-1]),C)),U=ol(C,R),x.prev=null,x.vel=[0,0,0],x.fresh=!0,x.spin=0,x.bank=0,x.dir=null,x.go=0,x.fall=0;else{if(x.prev&&S>0){let xt=Tf(b,x.prev);if(Math.hypot(xt[0],xt[1],xt[2])<1.5){let Qt=Math.min(1,S*6);for(let ce=0;ce<3;ce++)x.vel[ce]+=(xt[ce]/S-x.vel[ce])*Qt}else x.vel=[0,0,0]}x.prev=b.slice();let q=x.vel,at=Math.hypot(q[0],q[1],q[2]),St=Or(.2,1.2,at),yt=Or(.35,1.6,-q[1]);x.go=St,x.fall=yt;let mt=k*.35+.65,zt=[Math.cos(mt),0,Math.sin(mt)];at>.001&&(zt=Cs(zt,or(q,-1/at),St)),x.axis=Cs(x.axis,zt,x.fresh?1:Math.min(1,S*4)),C=$s(x.axis);let It=$s(Tf(v,b)),se=Za(.6,.25,St);R=[It[0]*se,1+It[1]*se,It[2]*se],R=$s(Tf(R,or(C,C[0]*R[0]+C[1]*R[1]+C[2]*R[2]))),U=ol(C,R);let Ee=Math.hypot(q[0],q[2]),Qe=0;if(Ee>.15&&x.dir&&S>0){let xt=[q[0]/Ee,q[2]/Ee];Qe=(x.dir[0]*xt[1]-x.dir[1]*xt[0])/S,x.dir=xt}else Ee>.15&&(x.dir=[q[0]/Ee,q[2]/Ee]);x.bank+=(Math.max(-.8,Math.min(.8,Qe*.3))*St-x.bank)*Math.min(1,S*3),x.rock+=S*(1.7+2.6*St),x.spin+=S*yt*6;let me=Math.sin(x.rock)*(.42+.2*St)*(1-.5*yt)+x.bank+x.spin,qe=Math.sin(x.rock*.63+1)*.32,Ge=Math.cos(me),Q=Math.sin(me),j=$i(or(R,Ge),or(U,Q)),ft=$i(or(U,Ge),or(R,-Q));Ge=Math.cos(qe),Q=Math.sin(qe),C=$i(or(C,Ge),or(j,Q)),R=$i(or(j,Ge),or(C,-Q)),U=ft,b=$i(b,or(U,Math.sin(x.rock+1.5708)*.05*(1-.5*St))),x.fresh=!1}let P=Yp(b);return[C[0],C[1],C[2],0,R[0],R[1],R[2],0,U[0],U[1],U[2],0,P[0],P[1],P[2],1]}function _(b,S){let z=$s(Cs([b[0],b[1],b[2]],[Math.cos(.5),0,Math.sin(.5)],S)),k=Cs([b[4],b[5],b[6]],[0,1,0],S);k=$s(Tf(k,or(z,z[0]*k[0]+z[1]*k[1]+z[2]*k[2])));let C=ol(z,k);return[z[0],z[1],z[2],0,k[0],k[1],k[2],0,C[0],C[1],C[2],0,b[12],b[13],b[14],1]}function M(b){let S=s===null?0:Math.min(.1,Math.max(0,b-s));if(s=b,a=b,!c&&!h&&a-n>hE){let at=d(r);Math.abs(Ln[at]-r)<uE&&(r=Ln[at])}if(c){let at=Bb(e,r,o,1.2,S,1.4);e=at[0],o=at[1],Math.abs(r-e)<.001&&(e=r,o=0,c=!1)}else{let at=Bb(e,r,o,fE,S,3);e=at[0],o=at[1],Math.abs(r-e)<1e-4&&Math.abs(o)<.001&&(e=r,o=0)}typeof window!="undefined"&&window.__stScroll!==void 0&&/tourdebug/.test(location.search)&&(e=r=window.__stScroll,o=0);let z=m(e,b);e>=Kp-.02&&!f&&(f=!0,l=b),e<Kp-.3&&f&&(f=!1);let k=Or(.82,1,z.idx===B1.length-1?z.u:0);if(f){let at=Ub((b-l-Pi.delay)/Pi.dur);z.eye=Lf(Pi.eye,at),z.at=Cs(Cs(Ps,[Vo,1.6,Ii.cz],Or(.05,.3,at)*(1-Or(.7,.95,at))),Pi.at,Or(.7,1,at)),z.fov=Za(z.fov,Pi.fov,U1(at)),z.aperture=Za(z.aperture,.2,at),z.roll=0}v=z.eye;let C=y(z.p,S,z.hanging,b);k>0&&(C=_(C,k));let R=(z.hanging?.12:.2+.55*x.go+.35*x.fall)*(1-k),U=(z.hanging?.05:Math.sin(x.rock*1.3)*.18+.12*x.go)*(1-k);nv.setGuide({vis:!0,model:C,ang:b*.08,size:.13,flex:U,flutter:R,floating:!1});let P=C.slice(12,15),q=Yp(z.eye);return{eye:q,target:Yp(z.at),fov:z.fov,roll:z.roll,fade:0,shot:f?B0.length:z.near,look:{letterbox:.55,focus:Math.max(.3,Math.hypot(q[0]-P[0],q[1]-P[1],q[2]-P[2])),aperture:z.aperture,vignette:.28,exposure:1,shafts:1},moving:Math.abs(o)>.02||Math.abs(r-e)>.01||f&&b-l<Pi.delay+Pi.dur+.5}}return{update:M,tap:g,get scroll(){return e},END:Kp}}});var dE=mm(),ma=qr(),gv=Yu(),K1=ma.reflection,pE=!1,lw=(t,e,o,r,n)=>r+(t-e)*(n-r)/(o-e),xv=()=>lw(window.innerWidth/window.innerHeight,16/9,9/16,1.7,Math.PI/3);navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)&&(xv=()=>lw(window.innerWidth/window.innerHeight,16/9,9/16,1.5,Math.PI/3));var fw=()=>2*Math.atan(Math.tan(xv()*.5)*window.innerHeight/window.innerWidth),vE=Am(),$f=new vE;$f.showPanel(0);pE&&document.body.appendChild($f.dom);var S0,il,lv,al,fv,T0;function mE(){try{let t=document.createElement("canvas"),e=t.getContext("webgl")||t.getContext("experimental-webgl");return!!(e&&e.getExtension("OES_standard_derivatives"))}catch(t){return!1}}if(!mE())throw dE.finish(),gv.show(!0),new Error("This device cannot draw the 3D gallery; showing the list instead.");S0=Tm()({extensions:["OES_element_index_uint","OES_standard_derivatives"],optionalExtensions:["EXT_texture_filter_anisotropic","WEBGL_depth_texture"],attributes:{alpha:!1,antialias:!1},pixelRatio:ma.pixelRatio});location.hash==="#list"&&gv.show(!1);window.addEventListener("hashchange",()=>{location.hash==="#list"&&gv.show(!1)});il=v3()();var gE=zd();lv=gE(S0,il,K1);al=$g()(S0,il);fv=Dg()(S0);var Vb=c5()(S0,il),Xb=y5()(S0),Yb=_5()(S0),Kb=D5()(S0),Zb=B5()(S0),Qb=Y5()(S0),qs=fx()(S0),hv=sp(),hw=yh(),xE=Ol(),uv=cp(),Y1=rn(),j0=o1(),dv=bx(),uw=b1(),{A:rl}=Gr();T0=ob()(il,fw);var sl=rb()(S0,ma),Is=lb()(S0),Jb=hb()(S0),yE=pb()(S0,ma),bE=bb()(S0,ma),tw=fs()(S0),ew=O1()(S0),ow=ds()(S0),Nf=Oc()(S0),La=Gb()({fps:T0,paintings:()=>al.interactables(),avatar:qs,onExit:()=>T0.setPaused(!1)});T0.setPaused(!0);/tourdebug/.test(location.search)&&(window.__post=sl);var Di=[],If=[],Qr=[7,2,1.6];il.viewer=Qr;var wE=S0({cull:{enable:!0,face:"back"},uniforms:{view:()=>Di,proj:()=>If,yScale:1,mirrorOn:()=>K1?1:0,night:()=>Y1.night,studioBake:()=>Oc().bakedSun(S0),time:S0.context("time")}}),nw=S0({cull:{enable:!0,face:"front"},uniforms:{yScale:-1}}),dw=document.createElement("style");dw.textContent=`

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
`;document.head.appendChild(dw);var Jr=document.createElement("button");Jr.className="painting-plaque";Jr.type="button";Jr.setAttribute("aria-label","Read painting");document.body.appendChild(Jr);var nr=document.createElement("div");nr.className="story-overlay";nr.innerHTML=`

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

		${hw.line("story-contact")}

		<div class="visit-row story-visit"></div>

		<p
			class="story-body"
			id="story-body"
		></p>

	</article>
`;document.body.appendChild(nr);var Ds=document.createElement("div");Ds.className="museum-links";Ds.innerHTML=hw.icons("museum-link");Ds.insertBefore(Op()("museum-link"),Ds.firstChild);Ds.insertBefore(uw.button("museum-link"),Ds.firstChild.nextSibling);["mousedown","pointerdown","click"].forEach(t=>Ds.addEventListener(t,e=>e.stopPropagation()));document.body.appendChild(Ds);var _E=nr.querySelector("#story-title"),ME=nr.querySelector("#story-body"),rw=nr.querySelector("#story-meta"),SE=nr.querySelector(".story-contact"),Cf=nr.querySelector(".story-visit");Cf.addEventListener("click",t=>{t.target.closest(".visit-btn")&&Gi&&uv.open(Gi)});var kE=nr.querySelector(".story-close"),Gi=null,xr={p:0,target:0,last:0},pw={title:hv.title,description:hv.text,isAbout:!0},Qa=null;function yv(t){t&&(Gi=t,_E.textContent=t.title||"",ME.textContent=t.description||"",rw.textContent=t.isAbout?"":xE(t),rw.hidden=!!t.isAbout,SE.hidden=!t.isAbout,Cf.innerHTML=t.isAbout?"":uv.button(t),Cf.hidden=!Cf.innerHTML,Cf.hidden||uv.warm(t),nr.classList.toggle("about-mode",!!t.isAbout),nr.classList.add("open"),xr.target=t.isAbout?1:0,Qa=t,Jr.classList.remove("visible"),T0.setPaused(!0))}function bv(){nr.classList.remove("open"),xr.target=0,Gi=null,Qa=null,T0.setPaused(!1)}function vw(t){t&&(t.preventDefault(),t.stopPropagation()),Qa&&yv(Qa)}Jr.addEventListener("pointerup",vw,!0);Jr.addEventListener("touchend",vw,{passive:!1,capture:!0});Jr.addEventListener("click",t=>{t&&(t.preventDefault(),t.stopPropagation()),Gi===null&&Qa&&yv(Qa)},!0);kE.addEventListener("click",bv);nr.addEventListener("click",t=>{t.target===nr&&bv()});window.addEventListener("keydown",t=>{t.code==="Escape"&&nr.classList.contains("open")&&bv()});function aw(t,e){let o=e[0],r=e[1],n=e[2];return[t[0]*o+t[4]*r+t[8]*n+t[12],t[1]*o+t[5]*r+t[9]*n+t[13],t[2]*o+t[6]*r+t[10]*n+t[14],t[3]*o+t[7]*r+t[11]*n+t[15]]}function zE(){if(Gi)return;if(La.active){Qa=null,Jr.classList.remove("visible");return}let t=al.interactables(),e=T0.forward[0],o=T0.forward[2],r=Math.hypot(e,o)||1,n=null,a=1/0;for(let s of t){let i=s.paintingPosition,c=0,f=0;s.side==="left"?c=1:s.side==="right"?c=-1:s.side==="corridor"?f=1:f=-1;let l=i[0]-T0.pos[0],v=i[2]-T0.pos[2],d=-(l*c+v*f),p=Math.abs(l*f-v*c),u=-(e*c+o*f)/r,h=s.side==="end"?11:8,g=(s.width||2)/2;u>.9&&d>.5&&d<h&&p<g+.8&&d<a&&(n=s,a=d)}if(!n){let s=T0.pos[0],i=T0.pos[2];e/r>.85&&s<13.6&&i>rl.z0-.5&&i<rl.z1+.5&&(n=Object.assign({},pw,{plaqueTitle:hv.name}))}n?(Qa=n,Jr.textContent=n.isAbout?"ABOUT  \xB7  "+n.plaqueTitle:"READ  \xB7  "+n.title,Jr.classList.add("visible")):(Qa=null,Jr.classList.remove("visible"))}var wv=Ec();function EE(){let t=qs.state;if(!t||!t.glowPos)return null;let e=aw(T0.view(),[t.glowPos[0],t.glowPos[1]-.08,t.glowPos[2],1]),o=aw(T0.proj(),e);return o[3]<=.05?null:[(o[0]/o[3]*.5+.5)*window.innerWidth,(.5-o[1]/o[3]*.5)*window.innerHeight,o[3]]}var pv=null;window.addEventListener("pointerdown",t=>{pv={x:t.clientX,y:t.clientY,t:performance.now()}},!0);window.addEventListener("pointerup",t=>{let e=pv;if(pv=null,!e||Gi||La.active||!t.target||!/^(CANVAS|BODY)$/.test(t.target.tagName)||Math.hypot(t.clientX-e.x,t.clientY-e.y)>12||performance.now()-e.t>600)return;let o=EE();if(!o)return;let r=!!document.pointerLockElement,n=r?window.innerWidth/2:t.clientX,a=r?window.innerHeight/2:t.clientY,s=Math.max(t.pointerType==="touch"?60:40,260/o[2]);Math.hypot(n-o[0],a-o[1])<s&&(t.preventDefault(),t.stopPropagation(),yv(pw))},!0);function AE(t){let e=Math.min(Math.max(t-xr.last,0),.1);xr.last=t;let o=e/1.6;if(xr.p=xr.target>xr.p?Math.min(1,xr.p+o):Math.max(0,xr.p-o),xr.p<=0)return;let r=xr.p<.5?2*xr.p*xr.p:1-Math.pow(-2*xr.p+2,2)/2,n=window.innerHeight>window.innerWidth,a=qs.state,s=a&&a.hipsPos?a.hipsPos[0]:rl.cx-1.2,i=a&&a.hipsPos?a.hipsPos[2]:rl.zc,c=n?[s-2.3,2,i-.1]:[s-1.55,1.55,i+.3],f=n?[s+.1,.2,i-.1]:[s+.1,.7,i+.6],l=T0.pos,v=T0.forward,d=[l[0],l[1],l[2]],p=[l[0]+v[0],l[1]+v[1],l[2]+v[2]],u=(x,y)=>x.map((_,M)=>_+(y[M]-_)*r),h=[rl.cx-6.2,1.7,rl.zc],g=1-r,m=d.map((x,y)=>g*g*x+2*g*r*h[y]+r*r*c[y]);wv.lookAt(T0.view(),m,u(p,f),[0,1,0])}var mw=/[?&]studio\b/.test(location.search);if(mw){let t=document.createElement("style");t.textContent=".tour, #museum-mobile-controls, .painting-plaque { display: none !important; }",document.head.appendChild(t);let e=document.createElement("button");e.type="button",e.className="st-ui",e.setAttribute("aria-label","Day or night"),e.textContent="\u263E",t.textContent+=".st-ui { position: fixed; top: 18px; right: 18px; z-index: 30; width: 42px; height: 42px; border-radius: 50%; border: 1px solid rgba(244,236,223,0.4); background: rgba(12,10,8,0.3); color: #f4ecdf; font-size: 20px; cursor: pointer; backdrop-filter: blur(3px); -webkit-backdrop-filter: blur(3px); }",document.body.appendChild(e),e.addEventListener("pointerdown",r=>r.stopPropagation()),e.addEventListener("click",r=>{r.stopPropagation(),rn().toggle(),setTimeout(()=>{e.textContent=rn().night>.5?"\u2600":"\u263E"},50)});let o=null;window.addEventListener("pointerdown",r=>{o={x:r.clientX,y:r.clientY,t:performance.now()}}),window.addEventListener("pointerup",r=>{let n=o;o=null,!(!n||Math.hypot(r.clientX-n.x,r.clientY-n.y)>10||performance.now()-n.t>500)&&(r.target.closest&&r.target.closest("button")||vv().tap())}),window.addEventListener("keydown",r=>{r.key==="n"?rn().toggle():r.key===" "&&vv().tap()})}var rv=null;function vv(){return rv||(rv=Wb()()),rv}var qi={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},Fi=null,Pf=!1,W1=!1;function TE(t,e,o,r){let n=[o[0]-e[0],o[1]-e[1],o[2]-e[2]],a=Math.hypot(n[0],n[1],n[2])||1,s=[-n[2]/a,0,n[0]/a],i=Math.hypot(s[0],s[2])||1;s=[s[0]/i,0,s[2]/i];let c=Math.cos(r),f=Math.sin(r);return wv.lookAt(t,e,o,[s[0]*f,c,s[2]*f])}function LE(t){let e=window.innerWidth/window.innerHeight,o=sl.shot,r=La.active?La.update(t):null,n=r?null:La.handover(t),a=null,s=qi;if(r){a=r.camera,s=r.look,Fi=r.leaf;let i=window.__walkOverride&&/tourdebug/.test(location.search)?window.__walkOverride:r.walker||null;qs.setWalk(i),Pf=!!i,Is.setOpen(r.door||0)}else Fi=La.restingLeaf(),qs.setWalk(null),Pf=!1,Is.setOpen(La.restingDoor());if(n){let i=T0.pos,c=T0.forward,f=La.cam([i[0],i[1],i[2]],[i[0]+c[0],i[1]+c[1],i[2]+c[2]],fw()*180/Math.PI,0);a=La.mix(n.from,f,n.k),s={};for(let l in qi)s[l]=Array.isArray(qi[l])?qi[l]:n.fromLook[l]+(qi[l]-n.fromLook[l])*n.k}if(a&&r&&(a=dv.apply(a,t)),mw&&!(/tourdebug/.test(location.search)&&window.__camOverride)){let i=vv().update(t);mv=i.moving!==!1,a=i,s=Object.assign({},qi,i.look)}if(a)TE(Di,a.eye,a.target,a.roll||0),wv.perspective(If,a.fov*Math.PI/180,e,.1,700),Qr[0]=a.eye[0],Qr[1]=a.eye[1],Qr[2]=a.eye[2];else{let i=T0.view(),c=T0.proj();for(let d=0;d<16;d++)Di[d]=i[d],If[d]=c[d];let f=i[12],l=i[13],v=i[14];Qr[0]=-(i[0]*f+i[1]*l+i[2]*v),Qr[1]=-(i[4]*f+i[5]*l+i[6]*v),Qr[2]=-(i[8]*f+i[9]*l+i[10]*v)}for(let i in qi)o[i]=s[i];r&&dv.pull(o,t)}var Rr={wake:[[0,-50,0,0],[0,-50,0,0],[0,-50,0,0],[0,-50,0,0]],wakeDir:[0,0,1],gust:[0,0],focus:6,aperture:0},av=[9,9,9,9],sw=[0,0,0,0],Of=0,sv=0,nl=null,iw=0,cw=0,Rf=0;function NE(t){let e=Math.min(.1,Math.max(0,t-iw));iw=t,Rr.focus=sl.shot.focus,Rr.aperture=ma.post>=2?sl.shot.aperture:0;for(let s=0;s<4;s++)av[s]+=e,Rr.wake[s][3]=sw[s]*Math.exp(-av[s]/1.1);let o=Fi&&Fi.visible?Fi.model:null;if(o&&e>0){let s=[o[12],o[13],o[14]];if(nl){let i=[s[0]-nl[0],s[1]-nl[1],s[2]-nl[2]],c=Math.hypot(i[0],i[1],i[2]),f=c/e;if(c<1.5&&f>.12){let l=Math.min(1,e*8);for(let d=0;d<3;d++)Rr.wakeDir[d]+=(i[d]/c-Rr.wakeDir[d])*l;let v=Math.hypot(Rr.wakeDir[0],Rr.wakeDir[1],Rr.wakeDir[2])||1;for(let d=0;d<3;d++)Rr.wakeDir[d]/=v;if(sv+=e,sv>.14){sv=0;let d=Rr.wake[Of];d[0]=s[0],d[1]=s[1],d[2]=s[2],sw[Of]=Math.min(1,(f-.12)/1.6)*.5,av[Of]=0,Of=(Of+1)%4}}}nl=s}else o||(nl=null);let r=Is.openNow?Is.openNow():0,n=e>0?(r-cw)/e:0;cw=r;let a=Math.max(-1,Math.min(1,n*1.2));Rf+=(a-Rf)*Math.min(1,e*(Math.abs(a)>Math.abs(Rf)?6:.7)),Rr.gust[0]+=Rf*5.5*e,Rr.gust[1]=Math.abs(Rf)}var iv=0,V1=!1,cv=0,X1=0,mv=!0,OE=/[?&]nocap\b/.test(location.search);S0.frame(function({time:t}){if(document.body.classList.contains("visiting")){iv=0;return}if(cv++,j0.zone==="studio"&&!OE&&X1>0&&t>X1){let n=mv||!Y1.settled?.03333333333333333:.041666666666666664;if(t-X1<n-.006)return}X1=t;let e=Math.max(1,cv);cv=0,$f.begin(),Y1.tick(t);let o=La.active&&dv.resting&&Y1.settled&&(ma.isPhone||ma.scale<1||ma.level>0);if(o){if(V1=!V1,V1){$f.end();return}}else V1=!1;let r=t-iv;iv=t,ma.frame(o?r/2:r/e),K1=ma.reflection,T0.tick({time:t}),AE(t),al.update(T0.pos,T0.fmouse[1],xv()),zE(),LE(t),j0.update(Di,If,Qr),uw.listen(Qr),W1=!Pf&&j0.room("stair")&&(!j0.room("court")||Qr[0]<.5||Qr[2]>30),qs.setPiano(W1),NE(t),sl.capture(arguments[0],{view:Di,proj:If,eye:Qr},()=>{wE(()=>{K1&&j0.floor&&(j0.zone==="studio"&&Nf.reflect?Nf.reflect(()=>nw(()=>Nf({reflected:!0})),mv?2:4):nw(()=>{j0.room("studio",!0)&&Nf({reflected:!0}),j0.zone!=="studio"&&(lv(),Vb({reflected:!0}),tw(),j0.room("stair",!0)&&(ow({reflected:!0}),ew({reflected:!0,view:Di})),j0.room("court",!0)&&Qb(),(W1||j0.room("court",!0)||Pf)&&qs(),fv(al.batch()),j0.room("street",!0)&&Xb(),j0.room("garden",!0)&&Kb(),j0.room("florence",!0)&&Zb(),Jb(Fi),Is(),Yb(),Is.glass())})),j0.room("studio")&&Nf(),j0.zone!=="studio"&&(lv(),Vb(),tw(),j0.room("stair")&&(ow(),ew({view:Di})),j0.room("court")&&Qb(),(W1||j0.room("court")||Pf)&&qs(),fv(al.batch()),j0.room("street")&&Xb(),j0.room("garden")&&(Kb(),bE()),j0.room("florence")&&Zb(),Jb(Fi),Is(),yE(Rr),Yb(),Is.glass())})}),sl.present(),$f.end()});})();
