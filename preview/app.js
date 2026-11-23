"use strict";(()=>{var Tt=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var d2=Tt((E7,u2)=>{"use strict";var nc=document.getElementById("loader"),oc=nc&&nc.querySelector(".loader-name"),zl=0,hh=0,uh=!1,A6=performance.now(),rc=.06,ec=0,Uu=0,i2=!1,T6=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;function L6(t){if(!oc)return;let e=oc.offsetWidth||1,r=(e*(1.14-1.28*t)-e).toFixed(1)+"px 0";oc.style.webkitMaskPosition=r,oc.style.maskPosition=r}function f2(t){let e=Math.min(.05,Uu?(t-Uu)/1e3:.016);Uu=t;let o=uh?.75:.22+(rc-ec)*1.2;if(ec=Math.min(rc,ec+Math.max(0,o)*e),T6&&(ec=rc),L6(ec),uh&&ec>=.999){i2||(i2=!0,setTimeout(h2,650));return}requestAnimationFrame(f2)}oc&&requestAnimationFrame(f2);function c2(){let t=zl?hh/Math.max(zl,24):0;rc=Math.max(rc,Math.min(.9,.06+t*.84))}function h2(){nc&&(nc.classList.add("done"),setTimeout(()=>nc.remove(),1400))}function Bu(){uh||(uh=!0,window.__galleryReady=!0,nc&&(rc=1,oc||h2()))}var l2=null;function N6(){clearTimeout(l2),hh>=zl&&performance.now()-A6>600&&(l2=setTimeout(()=>{hh>=zl&&Bu()},450))}setTimeout(Bu,2e4);var O6=t=>/(^|\/)(res|images)\//.test(t),fh=window.fetch.bind(window);async function R6(t,e){let o=await fh(t+".gz",e);if(!o.ok)throw new Error("no .gz");let r=new Uint8Array(await o.arrayBuffer());if(!(r[0]===31&&r[1]===139))return new Response(r);let n=new Blob([r]).stream().pipeThrough(new DecompressionStream("gzip")),a=await new Response(n).arrayBuffer();return new Response(a,{status:200,headers:{"Content-Type":"application/octet-stream"}})}window.fetch=function(t,e){let o=typeof t=="string"?t:t&&t.url||"";if(!O6(o))return fh(t,e);zl++,c2();let r=a=>(hh++,c2(),N6(),a),n;return/\.bin$/.test(o)&&typeof DecompressionStream!="undefined"?n=R6(o,e).catch(()=>fh(t,e)):n=fh(t,e),n.then(r,a=>{throw r(),a})};u2.exports={finish:Bu}});var qr=Tt((A7,m2)=>{"use strict";var p2=typeof navigator!="undefined"&&navigator.userAgent||"",C6=typeof window!="undefined"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches&&!window.matchMedia("(any-pointer: fine)").matches,ba=/Android|iPhone|iPad|iPod|Mobile|Silk|Kindle|webOS|BlackBerry|Opera Mini|IEMobile/i.test(p2)||/Macintosh/.test(p2)&&typeof navigator!="undefined"&&navigator.maxTouchPoints>1||C6,dh=typeof window!="undefined"&&window.devicePixelRatio||1,$6=typeof location!="undefined"&&/[?&]studio\b/.test(location.search),jo={isPhone:ba,pixelRatio:$6?ba?Math.min(dh,1.25):Math.min(dh,1.5):ba?Math.min(dh,1.5):Math.min(dh,2),reflection:!ba,gardenDetail:ba?0:1,leafShare:ba?.65:1,motion:!ba,post:ba?1:2,level:ba?1:0};jo.scale=1;var P6=ba?.55:.6,El=0,ph=0,Al=0,Tl=0,ac=1,Ll=0,vh=48,sc=null,ju=0;function I6(t){sc={fps:t,scale:jo.scale},jo.scale>.86?jo.scale=.85:jo.reflection?jo.stepDown():jo.scale>.71?jo.scale=.7:jo.stepDown()||(jo.scale=Math.max(P6,jo.scale-.1))}var v2=!0;try{/[?&]noadapt\b/.test(location.search)&&(v2=!1)}catch(t){}jo.frame=t=>{if(!v2)return;if(!(t>0)||t>1){El=0,ph=0;return}if(El+=t,ph++,El<.75)return;let e=ph/El;if(El=0,ph=0,Ll>0&&(Ll-=.75,Ll<=0&&(ac=1)),sc){if(e<sc.fps*1.08&&sc.scale>jo.scale){if(++ju>=2){jo.scale=1,ac=1,Ll=0,vh=Math.min(vh,e*.85),ju=0,Al=0,sc=null;return}}else ju=0;sc=null}if(e<vh){if(Tl=0,++Al>=2){if(Al=0,jo.scale>.61&&jo.climbed){ac=jo.scale-.05,Ll=40,jo.scale=ac,jo.climbed=!1;return}I6(e)}}else e>Math.max(vh*1.15,55)?(Al=0,++Tl>=6&&jo.scale<ac-.001?(jo.scale=Math.min(ac,jo.scale+.05),jo.climbed=!0,Tl=0):Tl>=6&&(jo.climbed=!1)):(Al=0,Tl=0)};jo.stepDown=()=>{if(jo.reflection)jo.reflection=!1;else if(jo.gardenDetail>0||jo.motion)jo.gardenDetail=0,jo.motion=!1,jo.leafShare=Math.min(jo.leafShare,.65);else if(jo.post>0)jo.post--;else return!1;return jo.level++,!0};m2.exports=jo});var Wu=Tt((T7,g2)=>{"use strict";g2.exports=[{file:"IMG_20250717_102753.jpg",slug:"love-me-like-i-am-already-dead",title:"Love me like I am Already Dead",medium:"Oil on canvas",size:[61,91],description:`We live in a world soaked in hypocrisy. We\u2019re told not to \u201Cspeak ill of the dead,\u201D yet we spend lifetimes speaking ill of the living. We judge, ignore, neglect\u2014and then pretend to mourn with grace when it\u2019s too late. People say beautiful things at funerals, but only after burying a lifetime of cruelty or silence.

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
but the loneliness of having no one willing to admit it happened.`}]});var mh=Tt((L7,b2)=>{"use strict";var Wn={instagram:"muzammil_qureshi",email:"muzammilqureshi100@gmail.com"},x2='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/></svg>',y2='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M3.5 7l8.5 6 8.5-6"/></svg>';Wn.instagramUrl="https://instagram.com/"+Wn.instagram;Wn.mailUrl="mailto:"+Wn.email+"?subject="+encodeURIComponent("Your paintings");Wn.icons=t=>`
	<a class="${t}" href="${Wn.instagramUrl}" target="_blank" rel="noopener" aria-label="Instagram: @${Wn.instagram}" title="Instagram">${x2}</a>
	<a class="${t}" href="${Wn.mailUrl}" aria-label="Email ${Wn.email}" title="Email">${y2}</a>`;Wn.line=t=>`
	<span class="${t}">
		<a href="${Wn.instagramUrl}" target="_blank" rel="noopener">${x2}<span>@${Wn.instagram}</span></a>
		<a href="${Wn.mailUrl}">${y2}<span>${Wn.email}</span></a>
	</span>`;b2.exports=Wn});var Nl=Tt((N7,w2)=>{"use strict";w2.exports=t=>{if(!t)return"";let e=[];return t.medium&&e.push(t.medium),t.size&&t.size.length===2&&e.push(t.size[0]+" \xD7 "+t.size[1]+" cm"),e.join("  \xB7  ")}});var Vu=Tt((O7,k2)=>{"use strict";var q6=Wu(),D6=mh(),_2=Nl(),F6=qr(),ns=t=>String(t).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),G6=`
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
`,Vn=null;function H6(t){if(Vn){Vn.hidden=!1,requestAnimationFrame(()=>Vn.classList.add("on"));return}let e=document.createElement("style");e.textContent=G6,document.head.appendChild(e);let o=!F6.isPhone;Vn=document.createElement("div"),Vn.className="plist",Vn.setAttribute("role","region"),Vn.setAttribute("aria-label","All paintings"),Vn.innerHTML=`
		${t?"":'<button type="button" class="plist-close">Back to the gallery</button>'}
		<header class="plist-head">
			<h1>Muzammil</h1>
			<p class="plist-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</p>
			${D6.line("plist-contact")}
		</header>
		${t?'<p class="plist-note">This device could not open the 3D gallery, so here are the paintings on their own.</p>':""}
		<main class="plist-grid">
			${q6.map(n=>`
			<article class="plist-item" id="${ns(n.slug)}">
				<img loading="lazy" decoding="async" alt="${ns(n.title)}, ${ns(_2(n))}"
					src="images/web/${ns(n.slug)}${o?"":"-1024"}.webp"
					onerror="this.onerror=null;this.src='images/${ns(n.file)}'">
				<p class="plist-meta">${ns(_2(n))}</p>
				<h2>${ns(n.title)}</h2>
				<details><summary>Read its story</summary>
					${String(n.description).split(/\n\s*\n/).map(a=>`<p>${ns(a.trim())}</p>`).join("")}
				</details>
			</article>`).join("")}
		</main>`,["mousedown","pointerdown","click","wheel","touchstart","touchmove","keydown"].forEach(n=>Vn.addEventListener(n,a=>a.stopPropagation(),{passive:!0}));let r=Vn.querySelector(".plist-close");r&&r.addEventListener("click",M2),document.body.appendChild(Vn),requestAnimationFrame(()=>Vn.classList.add("on"))}function M2(){Vn&&(Vn.classList.remove("on"),setTimeout(()=>{Vn.hidden=!0},500),location.hash==="#list"&&history.replaceState(null,"",location.pathname+location.search))}k2.exports={show:H6,hide:M2}});var S2=Tt((Xu,Yu)=>{(function(t,e){typeof Xu=="object"&&typeof Yu!="undefined"?Yu.exports=e():typeof define=="function"&&define.amd?define(e):t.Stats=e()})(Xu,function(){var t=function(){function e(v){return n.appendChild(v.dom),v}function o(v){for(var d=0;d<n.children.length;d++)n.children[d].style.display=d===v?"block":"none";r=v}var r=0,n=document.createElement("div");n.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",n.addEventListener("click",function(v){v.preventDefault(),o(++r%n.children.length)},!1);var a=(performance||Date).now(),s=a,i=0,c=e(new t.Panel("FPS","#0ff","#002")),f=e(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var l=e(new t.Panel("MB","#f08","#201"));return o(0),{REVISION:16,dom:n,addPanel:e,showPanel:o,begin:function(){a=(performance||Date).now()},end:function(){i++;var v=(performance||Date).now();if(f.update(v-a,200),v>s+1e3&&(c.update(1e3*i/(v-s),100),s=v,i=0,l)){var d=performance.memory;l.update(d.usedJSHeapSize/1048576,d.jsHeapSizeLimit/1048576)}return v},update:function(){a=this.end()},domElement:n,setMode:o}};return t.Panel=function(e,o,r){var n=1/0,a=0,s=Math.round,i=s(window.devicePixelRatio||1),c=80*i,f=48*i,l=3*i,v=2*i,d=3*i,p=15*i,u=74*i,h=30*i,g=document.createElement("canvas");g.width=c,g.height=f,g.style.cssText="width:80px;height:48px";var m=g.getContext("2d");return m.font="bold "+9*i+"px Helvetica,Arial,sans-serif",m.textBaseline="top",m.fillStyle=r,m.fillRect(0,0,c,f),m.fillStyle=o,m.fillText(e,l,v),m.fillRect(d,p,u,h),m.fillStyle=r,m.globalAlpha=.9,m.fillRect(d,p,u,h),{dom:g,update:function(y,x){n=Math.min(n,y),a=Math.max(a,y),m.fillStyle=r,m.globalAlpha=1,m.fillRect(0,0,c,p),m.fillStyle=o,m.fillText(s(y)+" "+e+" ("+s(n)+"-"+s(a)+")",l,v),m.drawImage(g,d+i,p,u-i,h,d,p,u-i,h),m.fillRect(d+u-i,p,i,h),m.fillStyle=r,m.globalAlpha=.9,m.fillRect(d+u-i,p,i,s((1-y/x)*h))}}},t})});var z2=Tt((Ku,Zu)=>{(function(t,e){typeof Ku=="object"&&typeof Zu!="undefined"?Zu.exports=e():typeof define=="function"&&define.amd?define(e):t.createREGL=e()})(Ku,function(){"use strict";var t=function(b){return b instanceof Uint8Array||b instanceof Uint16Array||b instanceof Uint32Array||b instanceof Int8Array||b instanceof Int16Array||b instanceof Int32Array||b instanceof Float32Array||b instanceof Float64Array||b instanceof Uint8ClampedArray},e=function(b,T){for(var I=Object.keys(T),it=0;it<I.length;++it)b[I[it]]=T[I[it]];return b},o=`
`;function r(b){return typeof atob!="undefined"?atob(b):"base64:"+b}function n(b){var T=new Error("(regl) "+b);throw console.error(T),T}function a(b,T){b||n(T)}function s(b){return b?": "+b:""}function i(b,T,I){b in T||n("unknown parameter ("+b+")"+s(I)+". possible values: "+Object.keys(T).join())}function c(b,T){t(b)||n("invalid parameter type"+s(T)+". must be a typed array")}function f(b,T){switch(T){case"number":return typeof b=="number";case"object":return typeof b=="object";case"string":return typeof b=="string";case"boolean":return typeof b=="boolean";case"function":return typeof b=="function";case"undefined":return typeof b=="undefined";case"symbol":return typeof b=="symbol"}}function l(b,T,I){f(b,T)||n("invalid parameter type"+s(I)+". expected "+T+", got "+typeof b)}function v(b,T){b>=0&&(b|0)===b||n("invalid parameter type, ("+b+")"+s(T)+". must be a nonnegative integer")}function d(b,T,I){T.indexOf(b)<0&&n("invalid value"+s(I)+". must be one of: "+T)}var p=["gl","canvas","container","attributes","pixelRatio","extensions","optionalExtensions","profile","onDone"];function u(b){Object.keys(b).forEach(function(T){p.indexOf(T)<0&&n('invalid regl constructor argument "'+T+'". must be one of '+p)})}function h(b,T){for(b=b+"";b.length<T;)b=" "+b;return b}function g(){this.name="unknown",this.lines=[],this.index={},this.hasErrors=!1}function m(b,T){this.number=b,this.line=T,this.errors=[]}function y(b,T,I){this.file=b,this.line=T,this.message=I}function x(){var b=new Error,T=(b.stack||b).toString(),I=/compileProcedure.*\n\s*at.*\((.*)\)/.exec(T);if(I)return I[1];var it=/compileProcedure.*\n\s*at\s+(.*)(\n|$)/.exec(T);return it?it[1]:"unknown"}function _(){var b=new Error,T=(b.stack||b).toString(),I=/at REGLCommand.*\n\s+at.*\((.*)\)/.exec(T);if(I)return I[1];var it=/at REGLCommand.*\n\s+at\s+(.*)\n/.exec(T);return it?it[1]:"unknown"}function M(b,T){var I=b.split(`
`),it=1,bt=0,at={unknown:new g,0:new g};at.unknown.name=at[0].name=T||x(),at.unknown.lines.push(new m(0,""));for(var ht=0;ht<I.length;++ht){var Ct=I[ht],Dt=/^\s*#\s*(\w+)\s+(.+)\s*$/.exec(Ct);if(Dt)switch(Dt[1]){case"line":var Wt=/(\d+)(\s+\d+)?/.exec(Dt[2]);Wt&&(it=Wt[1]|0,Wt[2]&&(bt=Wt[2]|0,bt in at||(at[bt]=new g)));break;case"define":var Ft=/SHADER_NAME(_B64)?\s+(.*)$/.exec(Dt[2]);Ft&&(at[bt].name=Ft[1]?r(Ft[2]):Ft[2]);break}at[bt].lines.push(new m(it++,Ct))}return Object.keys(at).forEach(function(Qt){var ie=at[Qt];ie.lines.forEach(function($t){ie.index[$t.number]=$t})}),at}function w(b){var T=[];return b.split(`
`).forEach(function(I){if(!(I.length<5)){var it=/^ERROR:\s+(\d+):(\d+):\s*(.*)$/.exec(I);it?T.push(new y(it[1]|0,it[2]|0,it[3].trim())):I.length>0&&T.push(new y("unknown",0,I))}}),T}function k(b,T){T.forEach(function(I){var it=b[I.file];if(it){var bt=it.index[I.line];if(bt){bt.errors.push(I),it.hasErrors=!0;return}}b.unknown.hasErrors=!0,b.unknown.lines[0].errors.push(I)})}function E(b,T,I,it,bt){if(!b.getShaderParameter(T,b.COMPILE_STATUS)){var at=b.getShaderInfoLog(T),ht=it===b.FRAGMENT_SHADER?"fragment":"vertex";ct(I,"string",ht+" shader source must be a string",bt);var Ct=M(I,bt),Dt=w(at);k(Ct,Dt),Object.keys(Ct).forEach(function(Wt){var Ft=Ct[Wt];if(!Ft.hasErrors)return;var Qt=[""],ie=[""];function $t(Jt,K){Qt.push(Jt),ie.push(K||"")}$t("file number "+Wt+": "+Ft.name+`
`,"color:red;text-decoration:underline;font-weight:bold"),Ft.lines.forEach(function(Jt){if(Jt.errors.length>0){$t(h(Jt.number,4)+"|  ","background-color:yellow; font-weight:bold"),$t(Jt.line+o,"color:red; background-color:yellow; font-weight:bold");var K=0;Jt.errors.forEach(function(ut){var Ht=ut.message,pe=/^\s*'(.*)'\s*:\s*(.*)$/.exec(Ht);if(pe){var At=pe[1];switch(Ht=pe[2],At){case"assign":At="=";break}K=Math.max(Jt.line.indexOf(At,K),0)}else K=0;$t(h("| ",6)),$t(h("^^^",K+3)+o,"font-weight:bold"),$t(h("| ",6)),$t(Ht+o,"font-weight:bold")}),$t(h("| ",6)+o)}else $t(h(Jt.number,4)+"|  "),$t(Jt.line+o,"color:red")}),typeof document!="undefined"&&!window.chrome?(ie[0]=Qt.join("%c"),console.log.apply(console,ie)):console.log(Qt.join(""))}),a.raise("Error compiling "+ht+" shader, "+Ct[0].name)}}function z(b,T,I,it,bt){if(!b.getProgramParameter(T,b.LINK_STATUS)){var at=b.getProgramInfoLog(T),ht=M(I,bt),Ct=M(it,bt),Dt='Error linking program with vertex shader, "'+Ct[0].name+'", and fragment shader "'+ht[0].name+'"';typeof document!="undefined"?console.log("%c"+Dt+o+"%c"+at,"color:red;text-decoration:underline;font-weight:bold","color:red"):console.log(Dt+o+at),a.raise(Dt)}}function P(b){b._commandRef=x()}function R(b,T,I,it){P(b);function bt(Dt){return Dt?it.id(Dt):0}b._fragId=bt(b.static.frag),b._vertId=bt(b.static.vert);function at(Dt,Wt){Object.keys(Wt).forEach(function(Ft){Dt[it.id(Ft)]=!0})}var ht=b._uniformSet={};at(ht,T.static),at(ht,T.dynamic);var Ct=b._attributeSet={};at(Ct,I.static),at(Ct,I.dynamic),b._hasCount="count"in b.static||"count"in b.dynamic||"elements"in b.static||"elements"in b.dynamic}function B(b,T){var I=_();n(b+" in command "+(T||x())+(I==="unknown"?"":" called from "+I))}function $(b,T,I){b||B(T,I||x())}function q(b,T,I,it){b in T||B("unknown parameter ("+b+")"+s(I)+". possible values: "+Object.keys(T).join(),it||x())}function ct(b,T,I,it){f(b,T)||B("invalid parameter type"+s(I)+". expected "+T+", got "+typeof b,it||x())}function kt(b){b()}function xt(b,T,I){b.texture?d(b.texture._texture.internalformat,T,"unsupported texture format for attachment"):d(b.renderbuffer._renderbuffer.format,I,"unsupported renderbuffer format for attachment")}var vt=33071,Et=9728,Pt=9984,ne=9985,ze=9986,Qe=9987,ve=5120,He=5121,Fe=5122,ot=5123,W=5124,gt=5125,Mt=5126,le=32819,me=32820,se=33635,Ut=34042,rt=36193,Xt={};Xt[ve]=Xt[He]=1,Xt[Fe]=Xt[ot]=Xt[rt]=Xt[se]=Xt[le]=Xt[me]=2,Xt[W]=Xt[gt]=Xt[Mt]=Xt[Ut]=4;function ke(b,T){return b===me||b===le||b===se?2:b===Ut?4:Xt[b]*T}function ae(b){return!(b&b-1)&&!!b}function Nt(b,T,I){var it,bt=T.width,at=T.height,ht=T.channels;a(bt>0&&bt<=I.maxTextureSize&&at>0&&at<=I.maxTextureSize,"invalid texture shape"),(b.wrapS!==vt||b.wrapT!==vt)&&a(ae(bt)&&ae(at),"incompatible wrap mode for texture, both width and height must be power of 2"),T.mipmask===1?bt!==1&&at!==1&&a(b.minFilter!==Pt&&b.minFilter!==ze&&b.minFilter!==ne&&b.minFilter!==Qe,"min filter requires mipmap"):(a(ae(bt)&&ae(at),"texture must be a square power of 2 to support mipmapping"),a(T.mipmask===(bt<<1)-1,"missing or incomplete mipmap data")),T.type===Mt&&(I.extensions.indexOf("oes_texture_float_linear")<0&&a(b.minFilter===Et&&b.magFilter===Et,"filter not supported, must enable oes_texture_float_linear"),a(!b.genMipmaps,"mipmap generation not supported with float textures"));var Ct=T.images;for(it=0;it<16;++it)if(Ct[it]){var Dt=bt>>it,Wt=at>>it;a(T.mipmask&1<<it,"missing mipmap data");var Ft=Ct[it];if(a(Ft.width===Dt&&Ft.height===Wt,"invalid shape for mip images"),a(Ft.format===T.format&&Ft.internalformat===T.internalformat&&Ft.type===T.type,"incompatible type for mip image"),!Ft.compressed)if(Ft.data){var Qt=Math.ceil(ke(Ft.type,ht)*Dt/Ft.unpackAlignment)*Ft.unpackAlignment;a(Ft.data.byteLength===Qt*Wt,"invalid data for image, buffer size is inconsistent with image format")}else Ft.element||Ft.copy}else b.genMipmaps||a((T.mipmask&1<<it)===0,"extra mipmap data");T.compressed&&a(!b.genMipmaps,"mipmap generation for compressed images not supported")}function $e(b,T,I,it){var bt=b.width,at=b.height,ht=b.channels;a(bt>0&&bt<=it.maxTextureSize&&at>0&&at<=it.maxTextureSize,"invalid texture shape"),a(bt===at,"cube map must be square"),a(T.wrapS===vt&&T.wrapT===vt,"wrap mode not supported by cube map");for(var Ct=0;Ct<I.length;++Ct){var Dt=I[Ct];a(Dt.width===bt&&Dt.height===at,"inconsistent cube map face shape"),T.genMipmaps&&(a(!Dt.compressed,"can not generate mipmap for compressed textures"),a(Dt.mipmask===1,"can not specify mipmaps and generate mipmaps"));for(var Wt=Dt.images,Ft=0;Ft<16;++Ft){var Qt=Wt[Ft];if(Qt){var ie=bt>>Ft,$t=at>>Ft;a(Dt.mipmask&1<<Ft,"missing mipmap data"),a(Qt.width===ie&&Qt.height===$t,"invalid shape for mip images"),a(Qt.format===b.format&&Qt.internalformat===b.internalformat&&Qt.type===b.type,"incompatible type for mip image"),Qt.compressed||(Qt.data?a(Qt.data.byteLength===ie*$t*Math.max(ke(Qt.type,ht),Qt.unpackAlignment),"invalid data for image, buffer size is inconsistent with image format"):Qt.element||Qt.copy)}}}}var S=e(a,{optional:kt,raise:n,commandRaise:B,command:$,parameter:i,commandParameter:q,constructor:u,type:l,commandType:ct,isTypedArray:c,nni:v,oneOf:d,shaderError:E,linkError:z,callSite:_,saveCommandRef:P,saveDrawInfo:R,framebufferFormat:xt,guessCommand:x,texture2D:Nt,textureCube:$e}),qe=0,je=0,lo=5,Oo=6;function _o(b,T){this.id=qe++,this.type=b,this.data=T}function Fo(b){return b.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}function qo(b){if(b.length===0)return[];var T=b.charAt(0),I=b.charAt(b.length-1);if(b.length>1&&T===I&&(T==='"'||T==="'"))return['"'+Fo(b.substr(1,b.length-2))+'"'];var it=/\[(false|true|null|\d+|'[^']*'|"[^"]*")\]/.exec(b);if(it)return qo(b.substr(0,it.index)).concat(qo(it[1])).concat(qo(b.substr(it.index+it[0].length)));var bt=b.split(".");if(bt.length===1)return['"'+Fo(b)+'"'];for(var at=[],ht=0;ht<bt.length;++ht)at=at.concat(qo(bt[ht]));return at}function a0(b){return"["+qo(b).join("][")+"]"}function Q0(b,T){return new _o(b,a0(T+""))}function br(b){return typeof b=="function"&&!b._reglType||b instanceof _o}function tt(b,T){if(typeof b=="function")return new _o(je,b);if(typeof b=="number"||typeof b=="boolean")return new _o(lo,b);if(Array.isArray(b))return new _o(Oo,b.map((I,it)=>tt(I,T+"["+it+"]")));if(b instanceof _o)return b;S(!1,"invalid option type in uniform "+T)}var Bt={DynamicVariable:_o,define:Q0,isDynamic:br,unbox:tt,accessor:a0},Yt={next:typeof requestAnimationFrame=="function"?function(b){return requestAnimationFrame(b)}:function(b){return setTimeout(b,16)},cancel:typeof cancelAnimationFrame=="function"?function(b){return cancelAnimationFrame(b)}:clearTimeout},qt=typeof performance!="undefined"&&performance.now?function(){return performance.now()}:function(){return+new Date};function Ee(){var b={"":0},T=[""];return{id:function(I){var it=b[I];return it||(it=b[I]=T.length,T.push(I),it)},str:function(I){return T[I]}}}function Xe(b,T,I){var it=document.createElement("canvas");e(it.style,{border:0,margin:0,padding:0,top:0,left:0}),b.appendChild(it),b===document.body&&(it.style.position="absolute",e(b.style,{margin:0,padding:0}));function bt(){var Ct=window.innerWidth,Dt=window.innerHeight;if(b!==document.body){var Wt=b.getBoundingClientRect();Ct=Wt.right-Wt.left,Dt=Wt.bottom-Wt.top}it.width=I*Ct,it.height=I*Dt,e(it.style,{width:Ct+"px",height:Dt+"px"})}var at;b!==document.body&&typeof ResizeObserver=="function"?(at=new ResizeObserver(function(){setTimeout(bt)}),at.observe(b)):window.addEventListener("resize",bt,!1);function ht(){at?at.disconnect():window.removeEventListener("resize",bt),b.removeChild(it)}return bt(),{canvas:it,onDestroy:ht}}function We(b,T){function I(it){try{return b.getContext(it,T)}catch(bt){return null}}return I("webgl")||I("experimental-webgl")||I("webgl-experimental")}function Ce(b){return typeof b.nodeName=="string"&&typeof b.appendChild=="function"&&typeof b.getBoundingClientRect=="function"}function to(b){return typeof b.drawArrays=="function"||typeof b.drawElements=="function"}function Ge(b){return typeof b=="string"?b.split():(S(Array.isArray(b),"invalid extension array"),b)}function go(b){return typeof b=="string"?(S(typeof document!="undefined","not supported outside of DOM"),document.querySelector(b)):b}function Ve(b){var T=b||{},I,it,bt,at,ht={},Ct=[],Dt=[],Wt=typeof window=="undefined"?1:window.devicePixelRatio,Ft=!1,Qt=function(Jt){Jt&&S.raise(Jt)},ie=function(){};if(typeof T=="string"?(S(typeof document!="undefined","selector queries only supported in DOM enviroments"),I=document.querySelector(T),S(I,"invalid query string for element")):typeof T=="object"?Ce(T)?I=T:to(T)?(at=T,bt=at.canvas):(S.constructor(T),"gl"in T?at=T.gl:"canvas"in T?bt=go(T.canvas):"container"in T&&(it=go(T.container)),"attributes"in T&&(ht=T.attributes,S.type(ht,"object","invalid context attributes")),"extensions"in T&&(Ct=Ge(T.extensions)),"optionalExtensions"in T&&(Dt=Ge(T.optionalExtensions)),"onDone"in T&&(S.type(T.onDone,"function","invalid or missing onDone callback"),Qt=T.onDone),"profile"in T&&(Ft=!!T.profile),"pixelRatio"in T&&(Wt=+T.pixelRatio,S(Wt>0,"invalid pixel ratio"))):S.raise("invalid arguments to regl"),I&&(I.nodeName.toLowerCase()==="canvas"?bt=I:it=I),!at){if(!bt){S(typeof document!="undefined","must manually specify webgl context outside of DOM environments");var $t=Xe(it||document.body,Qt,Wt);if(!$t)return null;bt=$t.canvas,ie=$t.onDestroy}ht.premultipliedAlpha===void 0&&(ht.premultipliedAlpha=!0),at=We(bt,ht)}return at?{gl:at,canvas:bt,container:it,extensions:Ct,optionalExtensions:Dt,pixelRatio:Wt,profile:Ft,onDone:Qt,onDestroy:ie}:(ie(),Qt("webgl not supported, try upgrading your browser or graphics drivers http://get.webgl.org"),null)}function et(b,T){var I={};function it(ht){S.type(ht,"string","extension name must be string");var Ct=ht.toLowerCase(),Dt;try{Dt=I[Ct]=b.getExtension(Ct)}catch(Wt){}return!!Dt}for(var bt=0;bt<T.extensions.length;++bt){var at=T.extensions[bt];if(!it(at))return T.onDestroy(),T.onDone('"'+at+'" extension is not supported by the current WebGL context, try upgrading your system or a different browser'),null}return T.optionalExtensions.forEach(it),{extensions:I,restore:function(){Object.keys(I).forEach(function(ht){if(I[ht]&&!it(ht))throw new Error("(regl): error restoring extension "+ht)})}}}function mt(b,T){for(var I=Array(b),it=0;it<b;++it)I[it]=T(it);return I}var J=5120,de=5121,ge=5122,St=5123,Zt=5124,Ye=5125,eo=5126;function Se(b){for(var T=16;T<=1<<28;T*=16)if(b<=T)return T;return 0}function Ue(b){var T,I;return T=(b>65535)<<4,b>>>=T,I=(b>255)<<3,b>>>=I,T|=I,I=(b>15)<<2,b>>>=I,T|=I,I=(b>3)<<1,b>>>=I,T|=I,T|b>>1}function $o(){var b=mt(8,function(){return[]});function T(at){var ht=Se(at),Ct=b[Ue(ht)>>2];return Ct.length>0?Ct.pop():new ArrayBuffer(ht)}function I(at){b[Ue(at.byteLength)>>2].push(at)}function it(at,ht){var Ct=null;switch(at){case J:Ct=new Int8Array(T(ht),0,ht);break;case de:Ct=new Uint8Array(T(ht),0,ht);break;case ge:Ct=new Int16Array(T(2*ht),0,ht);break;case St:Ct=new Uint16Array(T(2*ht),0,ht);break;case Zt:Ct=new Int32Array(T(4*ht),0,ht);break;case Ye:Ct=new Uint32Array(T(4*ht),0,ht);break;case eo:Ct=new Float32Array(T(4*ht),0,ht);break;default:return null}return Ct.length!==ht?Ct.subarray(0,ht):Ct}function bt(at){I(at.buffer)}return{alloc:T,free:I,allocType:it,freeType:bt}}var j=$o();j.zero=$o();var dt=3408,jt=3410,te=3411,Kt=3412,Mo=3413,xo=3414,Po=3415,co=33901,ko=33902,oo=3379,De=3386,p0=34921,zo=36347,J0=36348,rr=35661,ar=35660,i0=34930,Cr=36349,R0=34076,Jr=34024,Vo=7936,x0=7937,$r=7938,Is=35724,ma=34047,qs=36063,$f=34852,Za=3553,qi=34067,il=34069,Y1=33984,La=6408,cl=5126,Pn=5121,ll=36160,Ds=36053,fw=36064,hw=16384,uw=function(b,T){var I=1;T.ext_texture_filter_anisotropic&&(I=b.getParameter(ma));var it=1,bt=1;T.webgl_draw_buffers&&(it=b.getParameter($f),bt=b.getParameter(qs));var at=!!T.oes_texture_float;if(at){var ht=b.createTexture();b.bindTexture(Za,ht),b.texImage2D(Za,0,La,1,1,0,La,cl,null);var Ct=b.createFramebuffer();if(b.bindFramebuffer(ll,Ct),b.framebufferTexture2D(ll,fw,Za,ht,0),b.bindTexture(Za,null),b.checkFramebufferStatus(ll)!==Ds)at=!1;else{b.viewport(0,0,1,1),b.clearColor(1,0,0,1),b.clear(hw);var Dt=j.allocType(cl,4);b.readPixels(0,0,1,1,La,cl,Dt),b.getError()?at=!1:(b.deleteFramebuffer(Ct),b.deleteTexture(ht),at=Dt[0]===1),j.freeType(Dt)}}var Wt=typeof navigator!="undefined"&&(/MSIE/.test(navigator.userAgent)||/Trident\//.test(navigator.appVersion)||/Edge/.test(navigator.userAgent)),Ft=!0;if(!Wt){var Qt=b.createTexture(),ie=j.allocType(Pn,36);b.activeTexture(Y1),b.bindTexture(qi,Qt),b.texImage2D(il,0,La,3,3,0,La,Pn,ie),j.freeType(ie),b.bindTexture(qi,null),b.deleteTexture(Qt),Ft=!b.getError()}return{colorBits:[b.getParameter(jt),b.getParameter(te),b.getParameter(Kt),b.getParameter(Mo)],depthBits:b.getParameter(xo),stencilBits:b.getParameter(Po),subpixelBits:b.getParameter(dt),extensions:Object.keys(T).filter(function($t){return!!T[$t]}),maxAnisotropic:I,maxDrawbuffers:it,maxColorAttachments:bt,pointSizeDims:b.getParameter(co),lineWidthDims:b.getParameter(ko),maxViewportDims:b.getParameter(De),maxCombinedTextureUnits:b.getParameter(rr),maxCubeMapSize:b.getParameter(R0),maxRenderbufferSize:b.getParameter(Jr),maxTextureUnits:b.getParameter(i0),maxTextureSize:b.getParameter(oo),maxAttributes:b.getParameter(p0),maxVertexUniforms:b.getParameter(zo),maxVertexTextureUnits:b.getParameter(ar),maxVaryingVectors:b.getParameter(J0),maxFragmentUniforms:b.getParameter(Cr),glsl:b.getParameter(Is),renderer:b.getParameter(x0),vendor:b.getParameter(Vo),version:b.getParameter($r),readFloat:at,npotTextureCube:Ft}};function ta(b){return!!b&&typeof b=="object"&&Array.isArray(b.shape)&&Array.isArray(b.stride)&&typeof b.offset=="number"&&b.shape.length===b.stride.length&&(Array.isArray(b.data)||t(b.data))}var wr=function(b){return Object.keys(b).map(function(T){return b[T]})},Pf={shape:mw,flatten:vw};function dw(b,T,I){for(var it=0;it<T;++it)I[it]=b[it]}function pw(b,T,I,it){for(var bt=0,at=0;at<T;++at)for(var ht=b[at],Ct=0;Ct<I;++Ct)it[bt++]=ht[Ct]}function yv(b,T,I,it,bt,at){for(var ht=at,Ct=0;Ct<T;++Ct)for(var Dt=b[Ct],Wt=0;Wt<I;++Wt)for(var Ft=Dt[Wt],Qt=0;Qt<it;++Qt)bt[ht++]=Ft[Qt]}function bv(b,T,I,it,bt){for(var at=1,ht=I+1;ht<T.length;++ht)at*=T[ht];var Ct=T[I];if(T.length-I===4){var Dt=T[I+1],Wt=T[I+2],Ft=T[I+3];for(ht=0;ht<Ct;++ht)yv(b[ht],Dt,Wt,Ft,it,bt),bt+=at}else for(ht=0;ht<Ct;++ht)bv(b[ht],T,I+1,it,bt),bt+=at}function vw(b,T,I,it){var bt=1;if(T.length)for(var at=0;at<T.length;++at)bt*=T[at];else bt=0;var ht=it||j.allocType(I,bt);switch(T.length){case 0:break;case 1:dw(b,T[0],ht);break;case 2:pw(b,T[0],T[1],ht);break;case 3:yv(b,T[0],T[1],T[2],ht,0);break;default:bv(b,T,0,ht,0)}return ht}function mw(b){for(var T=[],I=b;I.length;I=I[0])T.push(I.length);return T}var K1={"[object Int8Array]":5120,"[object Int16Array]":5122,"[object Int32Array]":5124,"[object Uint8Array]":5121,"[object Uint8ClampedArray]":5121,"[object Uint16Array]":5123,"[object Uint32Array]":5125,"[object Float32Array]":5126,"[object Float64Array]":5121,"[object ArrayBuffer]":5121},gw=5120,xw=5122,yw=5124,bw=5121,ww=5123,_w=5125,Mw=5126,kw=5126,Fs={int8:gw,int16:xw,int32:yw,uint8:bw,uint16:ww,uint32:_w,float:Mw,float32:kw},Sw=35048,zw=35040,If={dynamic:Sw,stream:zw,static:35044},Z1=Pf.flatten,wv=Pf.shape,_v=35044,Ew=35040,Q1=5121,J1=5126,Qa=[];Qa[5120]=1,Qa[5122]=2,Qa[5124]=4,Qa[5121]=1,Qa[5123]=2,Qa[5125]=4,Qa[5126]=4;function qf(b){return K1[Object.prototype.toString.call(b)]|0}function Mv(b,T){for(var I=0;I<T.length;++I)b[I]=T[I]}function kv(b,T,I,it,bt,at,ht){for(var Ct=0,Dt=0;Dt<I;++Dt)for(var Wt=0;Wt<it;++Wt)b[Ct++]=T[bt*Dt+at*Wt+ht]}function Aw(b,T,I,it){var bt=0,at={};function ht(K){this.id=bt++,this.buffer=b.createBuffer(),this.type=K,this.usage=_v,this.byteLength=0,this.dimension=1,this.dtype=Q1,this.persistentData=null,I.profile&&(this.stats={size:0})}ht.prototype.bind=function(){b.bindBuffer(this.type,this.buffer)},ht.prototype.destroy=function(){ie(this)};var Ct=[];function Dt(K,ut){var Ht=Ct.pop();return Ht||(Ht=new ht(K)),Ht.bind(),Qt(Ht,ut,Ew,0,1,!1),Ht}function Wt(K){Ct.push(K)}function Ft(K,ut,Ht){K.byteLength=ut.byteLength,b.bufferData(K.type,ut,Ht)}function Qt(K,ut,Ht,pe,At,ye){var Ot;if(K.usage=Ht,Array.isArray(ut)){if(K.dtype=pe||J1,ut.length>0){var ee;if(Array.isArray(ut[0])){Ot=wv(ut);for(var Lt=1,oe=1;oe<Ot.length;++oe)Lt*=Ot[oe];K.dimension=Lt,ee=Z1(ut,Ot,K.dtype),Ft(K,ee,Ht),ye?K.persistentData=ee:j.freeType(ee)}else if(typeof ut[0]=="number"){K.dimension=At;var Be=j.allocType(K.dtype,ut.length);Mv(Be,ut),Ft(K,Be,Ht),ye?K.persistentData=Be:j.freeType(Be)}else t(ut[0])?(K.dimension=ut[0].length,K.dtype=pe||qf(ut[0])||J1,ee=Z1(ut,[ut.length,ut[0].length],K.dtype),Ft(K,ee,Ht),ye?K.persistentData=ee:j.freeType(ee)):S.raise("invalid buffer data")}}else if(t(ut))K.dtype=pe||qf(ut),K.dimension=At,Ft(K,ut,Ht),ye&&(K.persistentData=new Uint8Array(new Uint8Array(ut.buffer)));else if(ta(ut)){Ot=ut.shape;var fo=ut.stride,ce=ut.offset,Vt=0,zt=0,no=0,yo=0;Ot.length===1?(Vt=Ot[0],zt=1,no=fo[0],yo=0):Ot.length===2?(Vt=Ot[0],zt=Ot[1],no=fo[0],yo=fo[1]):S.raise("invalid shape"),K.dtype=pe||qf(ut.data)||J1,K.dimension=zt;var Ae=j.allocType(K.dtype,Vt*zt);kv(Ae,ut.data,Vt,zt,no,yo,ce),Ft(K,Ae,Ht),ye?K.persistentData=Ae:j.freeType(Ae)}else ut instanceof ArrayBuffer?(K.dtype=Q1,K.dimension=At,Ft(K,ut,Ht),ye&&(K.persistentData=new Uint8Array(new Uint8Array(ut)))):S.raise("invalid buffer data")}function ie(K){T.bufferCount--,it(K);var ut=K.buffer;S(ut,"buffer must not be deleted already"),b.deleteBuffer(ut),K.buffer=null,delete at[K.id]}function $t(K,ut,Ht,pe){T.bufferCount++;var At=new ht(ut);at[At.id]=At;function ye(Lt){var oe=_v,Be=null,fo=0,ce=0,Vt=1;return Array.isArray(Lt)||t(Lt)||ta(Lt)||Lt instanceof ArrayBuffer?Be=Lt:typeof Lt=="number"?fo=Lt|0:Lt&&(S.type(Lt,"object","buffer arguments must be an object, a number or an array"),"data"in Lt&&(S(Be===null||Array.isArray(Be)||t(Be)||ta(Be),"invalid data for buffer"),Be=Lt.data),"usage"in Lt&&(S.parameter(Lt.usage,If,"invalid buffer usage"),oe=If[Lt.usage]),"type"in Lt&&(S.parameter(Lt.type,Fs,"invalid buffer type"),ce=Fs[Lt.type]),"dimension"in Lt&&(S.type(Lt.dimension,"number","invalid dimension"),Vt=Lt.dimension|0),"length"in Lt&&(S.nni(fo,"buffer length must be a nonnegative integer"),fo=Lt.length|0)),At.bind(),Be?Qt(At,Be,oe,ce,Vt,pe):(fo&&b.bufferData(At.type,fo,oe),At.dtype=ce||Q1,At.usage=oe,At.dimension=Vt,At.byteLength=fo),I.profile&&(At.stats.size=At.byteLength*Qa[At.dtype]),ye}function Ot(Lt,oe){S(oe+Lt.byteLength<=At.byteLength,"invalid buffer subdata call, buffer is too small.  Can't write data of size "+Lt.byteLength+" starting from offset "+oe+" to a buffer of size "+At.byteLength),b.bufferSubData(At.type,oe,Lt)}function ee(Lt,oe){var Be=(oe||0)|0,fo;if(At.bind(),t(Lt)||Lt instanceof ArrayBuffer)Ot(Lt,Be);else if(Array.isArray(Lt)){if(Lt.length>0)if(typeof Lt[0]=="number"){var ce=j.allocType(At.dtype,Lt.length);Mv(ce,Lt),Ot(ce,Be),j.freeType(ce)}else if(Array.isArray(Lt[0])||t(Lt[0])){fo=wv(Lt);var Vt=Z1(Lt,fo,At.dtype);Ot(Vt,Be),j.freeType(Vt)}else S.raise("invalid buffer data")}else if(ta(Lt)){fo=Lt.shape;var zt=Lt.stride,no=0,yo=0,Ae=0,Ao=0;fo.length===1?(no=fo[0],yo=1,Ae=zt[0],Ao=0):fo.length===2?(no=fo[0],yo=fo[1],Ae=zt[0],Ao=zt[1]):S.raise("invalid shape");var ho=Array.isArray(Lt.data)?At.dtype:qf(Lt.data),So=j.allocType(ho,no*yo);kv(So,Lt.data,no,yo,Ae,Ao,Lt.offset),Ot(So,Be),j.freeType(So)}else S.raise("invalid data for buffer subdata");return ye}return Ht||ye(K),ye._reglType="buffer",ye._buffer=At,ye.subdata=ee,I.profile&&(ye.stats=At.stats),ye.destroy=function(){ie(At)},ye}function Jt(){wr(at).forEach(function(K){K.buffer=b.createBuffer(),b.bindBuffer(K.type,K.buffer),b.bufferData(K.type,K.persistentData||K.byteLength,K.usage)})}return I.profile&&(T.getTotalBufferSize=function(){var K=0;return Object.keys(at).forEach(function(ut){K+=at[ut].stats.size}),K}),{create:$t,createStream:Dt,destroyStream:Wt,clear:function(){wr(at).forEach(ie),Ct.forEach(ie)},getBuffer:function(K){return K&&K._buffer instanceof ht?K._buffer:null},restore:Jt,_initBuffer:Qt}}var Tw=0,Lw=0,Nw=1,Ow=1,Rw=4,Cw=4,Di={points:Tw,point:Lw,lines:Nw,line:Ow,triangles:Rw,triangle:Cw,"line loop":2,"line strip":3,"triangle strip":5,"triangle fan":6},$w=0,Pw=1,fl=4,Iw=5120,Fi=5121,Sv=5122,Gi=5123,zv=5124,Gs=5125,tu=34963,qw=35040,Dw=35044;function Fw(b,T,I,it){var bt={},at=0,ht={uint8:Fi,uint16:Gi};T.oes_element_index_uint&&(ht.uint32=Gs);function Ct(Jt){this.id=at++,bt[this.id]=this,this.buffer=Jt,this.primType=fl,this.vertCount=0,this.type=0}Ct.prototype.bind=function(){this.buffer.bind()};var Dt=[];function Wt(Jt){var K=Dt.pop();return K||(K=new Ct(I.create(null,tu,!0,!1)._buffer)),Qt(K,Jt,qw,-1,-1,0,0),K}function Ft(Jt){Dt.push(Jt)}function Qt(Jt,K,ut,Ht,pe,At,ye){Jt.buffer.bind();var Ot;if(K){var ee=ye;!ye&&(!t(K)||ta(K)&&!t(K.data))&&(ee=T.oes_element_index_uint?Gs:Gi),I._initBuffer(Jt.buffer,K,ut,ee,3)}else b.bufferData(tu,At,ut),Jt.buffer.dtype=Ot||Fi,Jt.buffer.usage=ut,Jt.buffer.dimension=3,Jt.buffer.byteLength=At;if(Ot=ye,!ye){switch(Jt.buffer.dtype){case Fi:case Iw:Ot=Fi;break;case Gi:case Sv:Ot=Gi;break;case Gs:case zv:Ot=Gs;break;default:S.raise("unsupported type for element array")}Jt.buffer.dtype=Ot}Jt.type=Ot,S(Ot!==Gs||!!T.oes_element_index_uint,"32 bit element buffers not supported, enable oes_element_index_uint first");var Lt=pe;Lt<0&&(Lt=Jt.buffer.byteLength,Ot===Gi?Lt>>=1:Ot===Gs&&(Lt>>=2)),Jt.vertCount=Lt;var oe=Ht;if(Ht<0){oe=fl;var Be=Jt.buffer.dimension;Be===1&&(oe=$w),Be===2&&(oe=Pw),Be===3&&(oe=fl)}Jt.primType=oe}function ie(Jt){it.elementsCount--,S(Jt.buffer!==null,"must not double destroy elements"),delete bt[Jt.id],Jt.buffer.destroy(),Jt.buffer=null}function $t(Jt,K){var ut=I.create(null,tu,!0),Ht=new Ct(ut._buffer);it.elementsCount++;function pe(At){if(!At)ut(),Ht.primType=fl,Ht.vertCount=0,Ht.type=Fi;else if(typeof At=="number")ut(At),Ht.primType=fl,Ht.vertCount=At|0,Ht.type=Fi;else{var ye=null,Ot=Dw,ee=-1,Lt=-1,oe=0,Be=0;Array.isArray(At)||t(At)||ta(At)?ye=At:(S.type(At,"object","invalid arguments for elements"),"data"in At&&(ye=At.data,S(Array.isArray(ye)||t(ye)||ta(ye),"invalid data for element buffer")),"usage"in At&&(S.parameter(At.usage,If,"invalid element buffer usage"),Ot=If[At.usage]),"primitive"in At&&(S.parameter(At.primitive,Di,"invalid element buffer primitive"),ee=Di[At.primitive]),"count"in At&&(S(typeof At.count=="number"&&At.count>=0,"invalid vertex count for elements"),Lt=At.count|0),"type"in At&&(S.parameter(At.type,ht,"invalid buffer type"),Be=ht[At.type]),"length"in At?oe=At.length|0:(oe=Lt,Be===Gi||Be===Sv?oe*=2:(Be===Gs||Be===zv)&&(oe*=4))),Qt(Ht,ye,Ot,ee,Lt,oe,Be)}return pe}return pe(Jt),pe._reglType="elements",pe._elements=Ht,pe.subdata=function(At,ye){return ut.subdata(At,ye),pe},pe.destroy=function(){ie(Ht)},pe}return{create:$t,createStream:Wt,destroyStream:Ft,getElements:function(Jt){return typeof Jt=="function"&&Jt._elements instanceof Ct?Jt._elements:null},clear:function(){wr(bt).forEach(ie)}}}var Ev=new Float32Array(1),Gw=new Uint32Array(Ev.buffer),Hw=5123;function Av(b){for(var T=j.allocType(Hw,b.length),I=0;I<b.length;++I)if(isNaN(b[I]))T[I]=65535;else if(b[I]===1/0)T[I]=31744;else if(b[I]===-1/0)T[I]=64512;else{Ev[0]=b[I];var it=Gw[0],bt=it>>>31<<15,at=(it<<1>>>24)-127,ht=it>>13&1023;if(at<-24)T[I]=bt;else if(at<-14){var Ct=-14-at;T[I]=bt+(ht+1024>>Ct)}else at>15?T[I]=bt+31744:T[I]=bt+(at+15<<10)+ht}return T}function A0(b){return Array.isArray(b)||t(b)}var Tv=function(b){return!(b&b-1)&&!!b},Uw=34467,ga=3553,eu=34067,Df=34069,Hs=6408,ou=6406,Ff=6407,hl=6409,Gf=6410,Lv=32854,nu=32855,Nv=36194,Bw=32819,jw=32820,Ww=33635,Vw=34042,ru=6402,Hf=34041,au=35904,su=35906,Hi=36193,iu=33776,cu=33777,lu=33778,fu=33779,Ov=35986,Rv=35987,Cv=34798,$v=35840,Pv=35841,Iv=35842,qv=35843,Dv=36196,Ui=5121,hu=5123,uu=5125,ul=5126,Xw=10242,Yw=10243,Kw=10497,du=33071,Zw=33648,Qw=10240,Jw=10241,pu=9728,t4=9729,vu=9984,Fv=9985,Gv=9986,mu=9987,e4=33170,Uf=4352,o4=4353,n4=4354,r4=34046,a4=3317,s4=37440,i4=37441,c4=37443,Hv=37444,dl=33984,l4=[vu,Gv,Fv,mu],Bf=[0,hl,Gf,Ff,Hs],Pr={};Pr[hl]=Pr[ou]=Pr[ru]=1,Pr[Hf]=Pr[Gf]=2,Pr[Ff]=Pr[au]=3,Pr[Hs]=Pr[su]=4;function Bi(b){return"[object "+b+"]"}var Uv=Bi("HTMLCanvasElement"),Bv=Bi("OffscreenCanvas"),jv=Bi("CanvasRenderingContext2D"),Wv=Bi("ImageBitmap"),Vv=Bi("HTMLImageElement"),Xv=Bi("HTMLVideoElement"),f4=Object.keys(K1).concat([Uv,Bv,jv,Wv,Vv,Xv]),ji=[];ji[Ui]=1,ji[ul]=4,ji[Hi]=2,ji[hu]=2,ji[uu]=4;var yn=[];yn[Lv]=2,yn[nu]=2,yn[Nv]=2,yn[Hf]=4,yn[iu]=.5,yn[cu]=.5,yn[lu]=1,yn[fu]=1,yn[Ov]=.5,yn[Rv]=1,yn[Cv]=1,yn[$v]=.5,yn[Pv]=.25,yn[Iv]=.5,yn[qv]=.25,yn[Dv]=.5;function Yv(b){return Array.isArray(b)&&(b.length===0||typeof b[0]=="number")}function Kv(b){if(!Array.isArray(b))return!1;var T=b.length;return!(T===0||!A0(b[0]))}function Us(b){return Object.prototype.toString.call(b)}function Zv(b){return Us(b)===Uv}function Qv(b){return Us(b)===Bv}function h4(b){return Us(b)===jv}function u4(b){return Us(b)===Wv}function d4(b){return Us(b)===Vv}function p4(b){return Us(b)===Xv}function gu(b){if(!b)return!1;var T=Us(b);return f4.indexOf(T)>=0?!0:Yv(b)||Kv(b)||ta(b)}function Jv(b){return K1[Object.prototype.toString.call(b)]|0}function v4(b,T){var I=T.length;switch(b.type){case Ui:case hu:case uu:case ul:var it=j.allocType(b.type,I);it.set(T),b.data=it;break;case Hi:b.data=Av(T);break;default:S.raise("unsupported texture type, must specify a typed array")}}function tm(b,T){return j.allocType(b.type===Hi?ul:b.type,T)}function em(b,T){b.type===Hi?(b.data=Av(T),j.freeType(T)):b.data=T}function m4(b,T,I,it,bt,at){for(var ht=b.width,Ct=b.height,Dt=b.channels,Wt=ht*Ct*Dt,Ft=tm(b,Wt),Qt=0,ie=0;ie<Ct;++ie)for(var $t=0;$t<ht;++$t)for(var Jt=0;Jt<Dt;++Jt)Ft[Qt++]=T[I*$t+it*ie+bt*Jt+at];em(b,Ft)}function jf(b,T,I,it,bt,at){var ht;if(typeof yn[b]!="undefined"?ht=yn[b]:ht=Pr[b]*ji[T],at&&(ht*=6),bt){for(var Ct=0,Dt=I;Dt>=1;)Ct+=ht*Dt*Dt,Dt/=2;return Ct}else return ht*I*it}function g4(b,T,I,it,bt,at,ht){var Ct={"don't care":Uf,"dont care":Uf,nice:n4,fast:o4},Dt={repeat:Kw,clamp:du,mirror:Zw},Wt={nearest:pu,linear:t4},Ft=e({mipmap:mu,"nearest mipmap nearest":vu,"linear mipmap nearest":Fv,"nearest mipmap linear":Gv,"linear mipmap linear":mu},Wt),Qt={none:0,browser:Hv},ie={uint8:Ui,rgba4:Bw,rgb565:Ww,"rgb5 a1":jw},$t={alpha:ou,luminance:hl,"luminance alpha":Gf,rgb:Ff,rgba:Hs,rgba4:Lv,"rgb5 a1":nu,rgb565:Nv},Jt={};T.ext_srgb&&($t.srgb=au,$t.srgba=su),T.oes_texture_float&&(ie.float32=ie.float=ul),T.oes_texture_half_float&&(ie.float16=ie["half float"]=Hi),T.webgl_depth_texture&&(e($t,{depth:ru,"depth stencil":Hf}),e(ie,{uint16:hu,uint32:uu,"depth stencil":Vw})),T.webgl_compressed_texture_s3tc&&e(Jt,{"rgb s3tc dxt1":iu,"rgba s3tc dxt1":cu,"rgba s3tc dxt3":lu,"rgba s3tc dxt5":fu}),T.webgl_compressed_texture_atc&&e(Jt,{"rgb atc":Ov,"rgba atc explicit alpha":Rv,"rgba atc interpolated alpha":Cv}),T.webgl_compressed_texture_pvrtc&&e(Jt,{"rgb pvrtc 4bppv1":$v,"rgb pvrtc 2bppv1":Pv,"rgba pvrtc 4bppv1":Iv,"rgba pvrtc 2bppv1":qv}),T.webgl_compressed_texture_etc1&&(Jt["rgb etc1"]=Dv);var K=Array.prototype.slice.call(b.getParameter(Uw));Object.keys(Jt).forEach(function(C){var lt=Jt[C];K.indexOf(lt)>=0&&($t[C]=lt)});var ut=Object.keys($t);I.textureFormats=ut;var Ht=[];Object.keys($t).forEach(function(C){var lt=$t[C];Ht[lt]=C});var pe=[];Object.keys(ie).forEach(function(C){var lt=ie[C];pe[lt]=C});var At=[];Object.keys(Wt).forEach(function(C){var lt=Wt[C];At[lt]=C});var ye=[];Object.keys(Ft).forEach(function(C){var lt=Ft[C];ye[lt]=C});var Ot=[];Object.keys(Dt).forEach(function(C){var lt=Dt[C];Ot[lt]=C});var ee=ut.reduce(function(C,lt){var nt=$t[lt];return nt===hl||nt===ou||nt===hl||nt===Gf||nt===ru||nt===Hf||T.ext_srgb&&(nt===au||nt===su)?C[nt]=nt:nt===nu||lt.indexOf("rgba")>=0?C[nt]=Hs:C[nt]=Ff,C},{});function Lt(){this.internalformat=Hs,this.format=Hs,this.type=Ui,this.compressed=!1,this.premultiplyAlpha=!1,this.flipY=!1,this.unpackAlignment=1,this.colorSpace=Hv,this.width=0,this.height=0,this.channels=0}function oe(C,lt){C.internalformat=lt.internalformat,C.format=lt.format,C.type=lt.type,C.compressed=lt.compressed,C.premultiplyAlpha=lt.premultiplyAlpha,C.flipY=lt.flipY,C.unpackAlignment=lt.unpackAlignment,C.colorSpace=lt.colorSpace,C.width=lt.width,C.height=lt.height,C.channels=lt.channels}function Be(C,lt){if(!(typeof lt!="object"||!lt)){if("premultiplyAlpha"in lt&&(S.type(lt.premultiplyAlpha,"boolean","invalid premultiplyAlpha"),C.premultiplyAlpha=lt.premultiplyAlpha),"flipY"in lt&&(S.type(lt.flipY,"boolean","invalid texture flip"),C.flipY=lt.flipY),"alignment"in lt&&(S.oneOf(lt.alignment,[1,2,4,8],"invalid texture unpack alignment"),C.unpackAlignment=lt.alignment),"colorSpace"in lt&&(S.parameter(lt.colorSpace,Qt,"invalid colorSpace"),C.colorSpace=Qt[lt.colorSpace]),"type"in lt){var nt=lt.type;S(T.oes_texture_float||!(nt==="float"||nt==="float32"),"you must enable the OES_texture_float extension in order to use floating point textures."),S(T.oes_texture_half_float||!(nt==="half float"||nt==="float16"),"you must enable the OES_texture_half_float extension in order to use 16-bit floating point textures."),S(T.webgl_depth_texture||!(nt==="uint16"||nt==="uint32"||nt==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),S.parameter(nt,ie,"invalid texture type"),C.type=ie[nt]}var _e=C.width,To=C.height,N=C.channels,A=!1;"shape"in lt?(S(Array.isArray(lt.shape)&&lt.shape.length>=2,"shape must be an array"),_e=lt.shape[0],To=lt.shape[1],lt.shape.length===3&&(N=lt.shape[2],S(N>0&&N<=4,"invalid number of channels"),A=!0),S(_e>=0&&_e<=I.maxTextureSize,"invalid width"),S(To>=0&&To<=I.maxTextureSize,"invalid height")):("radius"in lt&&(_e=To=lt.radius,S(_e>=0&&_e<=I.maxTextureSize,"invalid radius")),"width"in lt&&(_e=lt.width,S(_e>=0&&_e<=I.maxTextureSize,"invalid width")),"height"in lt&&(To=lt.height,S(To>=0&&To<=I.maxTextureSize,"invalid height")),"channels"in lt&&(N=lt.channels,S(N>0&&N<=4,"invalid number of channels"),A=!0)),C.width=_e|0,C.height=To|0,C.channels=N|0;var F=!1;if("format"in lt){var Y=lt.format;S(T.webgl_depth_texture||!(Y==="depth"||Y==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),S.parameter(Y,$t,"invalid texture format");var Z=C.internalformat=$t[Y];C.format=ee[Z],Y in ie&&("type"in lt||(C.type=ie[Y])),Y in Jt&&(C.compressed=!0),F=!0}!A&&F?C.channels=Pr[C.format]:A&&!F?C.channels!==Bf[C.format]&&(C.format=C.internalformat=Bf[C.channels]):F&&A&&S(C.channels===Pr[C.format],"number of channels inconsistent with specified format")}}function fo(C){b.pixelStorei(s4,C.flipY),b.pixelStorei(i4,C.premultiplyAlpha),b.pixelStorei(c4,C.colorSpace),b.pixelStorei(a4,C.unpackAlignment)}function ce(){Lt.call(this),this.xOffset=0,this.yOffset=0,this.data=null,this.needsFree=!1,this.element=null,this.needsCopy=!1}function Vt(C,lt){var nt=null;if(gu(lt)?nt=lt:lt&&(S.type(lt,"object","invalid pixel data type"),Be(C,lt),"x"in lt&&(C.xOffset=lt.x|0),"y"in lt&&(C.yOffset=lt.y|0),gu(lt.data)&&(nt=lt.data)),S(!C.compressed||nt instanceof Uint8Array,"compressed texture data must be stored in a uint8array"),lt.copy){S(!nt,"can not specify copy and data field for the same texture");var _e=bt.viewportWidth,To=bt.viewportHeight;C.width=C.width||_e-C.xOffset,C.height=C.height||To-C.yOffset,C.needsCopy=!0,S(C.xOffset>=0&&C.xOffset<_e&&C.yOffset>=0&&C.yOffset<To&&C.width>0&&C.width<=_e&&C.height>0&&C.height<=To,"copy texture read out of bounds")}else if(!nt)C.width=C.width||1,C.height=C.height||1,C.channels=C.channels||4;else if(t(nt))C.channels=C.channels||4,C.data=nt,!("type"in lt)&&C.type===Ui&&(C.type=Jv(nt));else if(Yv(nt))C.channels=C.channels||4,v4(C,nt),C.alignment=1,C.needsFree=!0;else if(ta(nt)){var N=nt.data;!Array.isArray(N)&&C.type===Ui&&(C.type=Jv(N));var A=nt.shape,F=nt.stride,Y,Z,U,H,V,O;A.length===3?(U=A[2],O=F[2]):(S(A.length===2,"invalid ndarray pixel data, must be 2 or 3D"),U=1,O=1),Y=A[0],Z=A[1],H=F[0],V=F[1],C.alignment=1,C.width=Y,C.height=Z,C.channels=U,C.format=C.internalformat=Bf[U],C.needsFree=!0,m4(C,N,H,V,O,nt.offset)}else if(Zv(nt)||Qv(nt)||h4(nt))Zv(nt)||Qv(nt)?C.element=nt:C.element=nt.canvas,C.width=C.element.width,C.height=C.element.height,C.channels=4;else if(u4(nt))C.element=nt,C.width=nt.width,C.height=nt.height,C.channels=4;else if(d4(nt))C.element=nt,C.width=nt.naturalWidth,C.height=nt.naturalHeight,C.channels=4;else if(p4(nt))C.element=nt,C.width=nt.videoWidth,C.height=nt.videoHeight,C.channels=4;else if(Kv(nt)){var D=C.width||nt[0].length,L=C.height||nt.length,X=C.channels;A0(nt[0][0])?X=X||nt[0][0].length:X=X||1;for(var Q=Pf.shape(nt),yt=1,wt=0;wt<Q.length;++wt)yt*=Q[wt];var pt=tm(C,yt);Pf.flatten(nt,Q,"",pt),em(C,pt),C.alignment=1,C.width=D,C.height=L,C.channels=X,C.format=C.internalformat=Bf[X],C.needsFree=!0}C.type===ul?S(I.extensions.indexOf("oes_texture_float")>=0,"oes_texture_float extension not enabled"):C.type===Hi&&S(I.extensions.indexOf("oes_texture_half_float")>=0,"oes_texture_half_float extension not enabled")}function zt(C,lt,nt){var _e=C.element,To=C.data,N=C.internalformat,A=C.format,F=C.type,Y=C.width,Z=C.height;fo(C),_e?b.texImage2D(lt,nt,A,A,F,_e):C.compressed?b.compressedTexImage2D(lt,nt,N,Y,Z,0,To):C.needsCopy?(it(),b.copyTexImage2D(lt,nt,A,C.xOffset,C.yOffset,Y,Z,0)):b.texImage2D(lt,nt,A,Y,Z,0,A,F,To||null)}function no(C,lt,nt,_e,To){var N=C.element,A=C.data,F=C.internalformat,Y=C.format,Z=C.type,U=C.width,H=C.height;fo(C),N?b.texSubImage2D(lt,To,nt,_e,Y,Z,N):C.compressed?b.compressedTexSubImage2D(lt,To,nt,_e,F,U,H,A):C.needsCopy?(it(),b.copyTexSubImage2D(lt,To,nt,_e,C.xOffset,C.yOffset,U,H)):b.texSubImage2D(lt,To,nt,_e,U,H,Y,Z,A)}var yo=[];function Ae(){return yo.pop()||new ce}function Ao(C){C.needsFree&&j.freeType(C.data),ce.call(C),yo.push(C)}function ho(){Lt.call(this),this.genMipmaps=!1,this.mipmapHint=Uf,this.mipmask=0,this.images=Array(16)}function So(C,lt,nt){var _e=C.images[0]=Ae();C.mipmask=1,_e.width=C.width=lt,_e.height=C.height=nt,_e.channels=C.channels=4}function Uo(C,lt){var nt=null;if(gu(lt))nt=C.images[0]=Ae(),oe(nt,C),Vt(nt,lt),C.mipmask=1;else if(Be(C,lt),Array.isArray(lt.mipmap))for(var _e=lt.mipmap,To=0;To<_e.length;++To)nt=C.images[To]=Ae(),oe(nt,C),nt.width>>=To,nt.height>>=To,Vt(nt,_e[To]),C.mipmask|=1<<To;else nt=C.images[0]=Ae(),oe(nt,C),Vt(nt,lt),C.mipmask=1;oe(C,C.images[0]),C.compressed&&(C.internalformat===iu||C.internalformat===cu||C.internalformat===lu||C.internalformat===fu)&&S(C.width%4===0&&C.height%4===0,"for compressed texture formats, mipmap level 0 must have width and height that are a multiple of 4")}function $0(C,lt){for(var nt=C.images,_e=0;_e<nt.length;++_e){if(!nt[_e])return;zt(nt[_e],lt,_e)}}var tn=[];function Ro(){var C=tn.pop()||new ho;Lt.call(C),C.mipmask=0;for(var lt=0;lt<16;++lt)C.images[lt]=null;return C}function B0(C){for(var lt=C.images,nt=0;nt<lt.length;++nt)lt[nt]&&Ao(lt[nt]),lt[nt]=null;tn.push(C)}function l0(){this.minFilter=pu,this.magFilter=pu,this.wrapS=du,this.wrapT=du,this.anisotropic=1,this.genMipmaps=!1,this.mipmapHint=Uf}function P0(C,lt){if("min"in lt){var nt=lt.min;S.parameter(nt,Ft),C.minFilter=Ft[nt],l4.indexOf(C.minFilter)>=0&&!("faces"in lt)&&(C.genMipmaps=!0)}if("mag"in lt){var _e=lt.mag;S.parameter(_e,Wt),C.magFilter=Wt[_e]}var To=C.wrapS,N=C.wrapT;if("wrap"in lt){var A=lt.wrap;typeof A=="string"?(S.parameter(A,Dt),To=N=Dt[A]):Array.isArray(A)&&(S.parameter(A[0],Dt),S.parameter(A[1],Dt),To=Dt[A[0]],N=Dt[A[1]])}else{if("wrapS"in lt){var F=lt.wrapS;S.parameter(F,Dt),To=Dt[F]}if("wrapT"in lt){var Y=lt.wrapT;S.parameter(Y,Dt),N=Dt[Y]}}if(C.wrapS=To,C.wrapT=N,"anisotropic"in lt){var Z=lt.anisotropic;S(typeof Z=="number"&&Z>=1&&Z<=I.maxAnisotropic,"aniso samples must be between 1 and "),C.anisotropic=lt.anisotropic}if("mipmap"in lt){var U=!1;switch(typeof lt.mipmap){case"string":S.parameter(lt.mipmap,Ct,"invalid mipmap hint"),C.mipmapHint=Ct[lt.mipmap],C.genMipmaps=!0,U=!0;break;case"boolean":U=C.genMipmaps=lt.mipmap;break;case"object":S(Array.isArray(lt.mipmap),"invalid mipmap type"),C.genMipmaps=!1,U=!0;break;default:S.raise("invalid mipmap type")}U&&!("min"in lt)&&(C.minFilter=vu)}}function j0(C,lt){b.texParameteri(lt,Jw,C.minFilter),b.texParameteri(lt,Qw,C.magFilter),b.texParameteri(lt,Xw,C.wrapS),b.texParameteri(lt,Yw,C.wrapT),T.ext_texture_filter_anisotropic&&b.texParameteri(lt,r4,C.anisotropic),C.genMipmaps&&(b.hint(e4,C.mipmapHint),b.generateMipmap(lt))}var W0=0,un={},bn=I.maxTextureUnits,T0=Array(bn).map(function(){return null});function bo(C){Lt.call(this),this.mipmask=0,this.internalformat=Hs,this.id=W0++,this.refCount=1,this.target=C,this.texture=b.createTexture(),this.unit=-1,this.bindCount=0,this.texInfo=new l0,ht.profile&&(this.stats={size:0})}function wn(C){b.activeTexture(dl),b.bindTexture(C.target,C.texture)}function Xo(){var C=T0[0];C?b.bindTexture(C.target,C.texture):b.bindTexture(ga,null)}function Ke(C){var lt=C.texture;S(lt,"must not double destroy texture");var nt=C.unit,_e=C.target;nt>=0&&(b.activeTexture(dl+nt),b.bindTexture(_e,null),T0[nt]=null),b.deleteTexture(lt),C.texture=null,C.params=null,C.pixels=null,C.refCount=0,delete un[C.id],at.textureCount--}e(bo.prototype,{bind:function(){var C=this;C.bindCount+=1;var lt=C.unit;if(lt<0){for(var nt=0;nt<bn;++nt){var _e=T0[nt];if(_e){if(_e.bindCount>0)continue;_e.unit=-1}T0[nt]=C,lt=nt;break}lt>=bn&&S.raise("insufficient number of texture units"),ht.profile&&at.maxTextureUnits<lt+1&&(at.maxTextureUnits=lt+1),C.unit=lt,b.activeTexture(dl+lt),b.bindTexture(C.target,C.texture)}return lt},unbind:function(){this.bindCount-=1},decRef:function(){--this.refCount<=0&&Ke(this)}});function No(C,lt){var nt=new bo(ga);un[nt.id]=nt,at.textureCount++;function _e(A,F){var Y=nt.texInfo;l0.call(Y);var Z=Ro();return typeof A=="number"?typeof F=="number"?So(Z,A|0,F|0):So(Z,A|0,A|0):A?(S.type(A,"object","invalid arguments to regl.texture"),P0(Y,A),Uo(Z,A)):So(Z,1,1),Y.genMipmaps&&(Z.mipmask=(Z.width<<1)-1),nt.mipmask=Z.mipmask,oe(nt,Z),S.texture2D(Y,Z,I),nt.internalformat=Z.internalformat,_e.width=Z.width,_e.height=Z.height,wn(nt),$0(Z,ga),j0(Y,ga),Xo(),B0(Z),ht.profile&&(nt.stats.size=jf(nt.internalformat,nt.type,Z.width,Z.height,Y.genMipmaps,!1)),_e.format=Ht[nt.internalformat],_e.type=pe[nt.type],_e.mag=At[Y.magFilter],_e.min=ye[Y.minFilter],_e.wrapS=Ot[Y.wrapS],_e.wrapT=Ot[Y.wrapT],_e}function To(A,F,Y,Z){S(!!A,"must specify image data");var U=F|0,H=Y|0,V=Z|0,O=Ae();return oe(O,nt),O.width=0,O.height=0,Vt(O,A),O.width=O.width||(nt.width>>V)-U,O.height=O.height||(nt.height>>V)-H,S(nt.type===O.type&&nt.format===O.format&&nt.internalformat===O.internalformat,"incompatible format for texture.subimage"),S(U>=0&&H>=0&&U+O.width<=nt.width&&H+O.height<=nt.height,"texture.subimage write out of bounds"),S(nt.mipmask&1<<V,"missing mipmap data"),S(O.data||O.element||O.needsCopy,"missing image data"),wn(nt),no(O,ga,U,H,V),Xo(),Ao(O),_e}function N(A,F){var Y=A|0,Z=F|0||Y;if(Y===nt.width&&Z===nt.height)return _e;_e.width=nt.width=Y,_e.height=nt.height=Z,wn(nt);for(var U=0;nt.mipmask>>U;++U){var H=Y>>U,V=Z>>U;if(!H||!V)break;b.texImage2D(ga,U,nt.format,H,V,0,nt.format,nt.type,null)}return Xo(),ht.profile&&(nt.stats.size=jf(nt.internalformat,nt.type,Y,Z,!1,!1)),_e}return _e(C,lt),_e.subimage=To,_e.resize=N,_e._reglType="texture2d",_e._texture=nt,ht.profile&&(_e.stats=nt.stats),_e.destroy=function(){nt.decRef()},_e}function Do(C,lt,nt,_e,To,N){var A=new bo(eu);un[A.id]=A,at.cubeCount++;var F=new Array(6);function Y(H,V,O,D,L,X){var Q,yt=A.texInfo;for(l0.call(yt),Q=0;Q<6;++Q)F[Q]=Ro();if(typeof H=="number"||!H){var wt=H|0||1;for(Q=0;Q<6;++Q)So(F[Q],wt,wt)}else if(typeof H=="object")if(V)Uo(F[0],H),Uo(F[1],V),Uo(F[2],O),Uo(F[3],D),Uo(F[4],L),Uo(F[5],X);else if(P0(yt,H),Be(A,H),"faces"in H){var pt=H.faces;for(S(Array.isArray(pt)&&pt.length===6,"cube faces must be a length 6 array"),Q=0;Q<6;++Q)S(typeof pt[Q]=="object"&&!!pt[Q],"invalid input for cube map face"),oe(F[Q],A),Uo(F[Q],pt[Q])}else for(Q=0;Q<6;++Q)Uo(F[Q],H);else S.raise("invalid arguments to cube map");for(oe(A,F[0]),I.npotTextureCube||S(Tv(A.width)&&Tv(A.height),"your browser does not support non power or two texture dimensions"),yt.genMipmaps?A.mipmask=(F[0].width<<1)-1:A.mipmask=F[0].mipmask,S.textureCube(A,yt,F,I),A.internalformat=F[0].internalformat,Y.width=F[0].width,Y.height=F[0].height,wn(A),Q=0;Q<6;++Q)$0(F[Q],Df+Q);for(j0(yt,eu),Xo(),ht.profile&&(A.stats.size=jf(A.internalformat,A.type,Y.width,Y.height,yt.genMipmaps,!0)),Y.format=Ht[A.internalformat],Y.type=pe[A.type],Y.mag=At[yt.magFilter],Y.min=ye[yt.minFilter],Y.wrapS=Ot[yt.wrapS],Y.wrapT=Ot[yt.wrapT],Q=0;Q<6;++Q)B0(F[Q]);return Y}function Z(H,V,O,D,L){S(!!V,"must specify image data"),S(typeof H=="number"&&H===(H|0)&&H>=0&&H<6,"invalid face");var X=O|0,Q=D|0,yt=L|0,wt=Ae();return oe(wt,A),wt.width=0,wt.height=0,Vt(wt,V),wt.width=wt.width||(A.width>>yt)-X,wt.height=wt.height||(A.height>>yt)-Q,S(A.type===wt.type&&A.format===wt.format&&A.internalformat===wt.internalformat,"incompatible format for texture.subimage"),S(X>=0&&Q>=0&&X+wt.width<=A.width&&Q+wt.height<=A.height,"texture.subimage write out of bounds"),S(A.mipmask&1<<yt,"missing mipmap data"),S(wt.data||wt.element||wt.needsCopy,"missing image data"),wn(A),no(wt,Df+H,X,Q,yt),Xo(),Ao(wt),Y}function U(H){var V=H|0;if(V!==A.width){Y.width=A.width=V,Y.height=A.height=V,wn(A);for(var O=0;O<6;++O)for(var D=0;A.mipmask>>D;++D)b.texImage2D(Df+O,D,A.format,V>>D,V>>D,0,A.format,A.type,null);return Xo(),ht.profile&&(A.stats.size=jf(A.internalformat,A.type,Y.width,Y.height,!1,!0)),Y}}return Y(C,lt,nt,_e,To,N),Y.subimage=Z,Y.resize=U,Y._reglType="textureCube",Y._texture=A,ht.profile&&(Y.stats=A.stats),Y.destroy=function(){A.decRef()},Y}function L0(){for(var C=0;C<bn;++C)b.activeTexture(dl+C),b.bindTexture(ga,null),T0[C]=null;wr(un).forEach(Ke),at.cubeCount=0,at.textureCount=0}ht.profile&&(at.getTotalTextureSize=function(){var C=0;return Object.keys(un).forEach(function(lt){C+=un[lt].stats.size}),C});function ya(){for(var C=0;C<bn;++C){var lt=T0[C];lt&&(lt.bindCount=0,lt.unit=-1,T0[C]=null)}wr(un).forEach(function(nt){nt.texture=b.createTexture(),b.bindTexture(nt.target,nt.texture);for(var _e=0;_e<32;++_e)if(nt.mipmask&1<<_e)if(nt.target===ga)b.texImage2D(ga,_e,nt.internalformat,nt.width>>_e,nt.height>>_e,0,nt.internalformat,nt.type,null);else for(var To=0;To<6;++To)b.texImage2D(Df+To,_e,nt.internalformat,nt.width>>_e,nt.height>>_e,0,nt.internalformat,nt.type,null);j0(nt.texInfo,nt.target)})}function Ks(){for(var C=0;C<bn;++C){var lt=T0[C];lt&&(lt.bindCount=0,lt.unit=-1,T0[C]=null),b.activeTexture(dl+C),b.bindTexture(ga,null),b.bindTexture(eu,null)}}return{create2D:No,createCube:Do,clear:L0,getTexture:function(C){return null},restore:ya,refresh:Ks}}var Ja=36161,Wf=32854,om=32855,nm=36194,rm=33189,am=36168,sm=34041,im=35907,cm=34836,lm=34842,fm=34843,ea=[];ea[Wf]=2,ea[om]=2,ea[nm]=2,ea[rm]=2,ea[am]=1,ea[sm]=4,ea[im]=4,ea[cm]=16,ea[lm]=8,ea[fm]=6;function hm(b,T,I){return ea[b]*T*I}var x4=function(b,T,I,it,bt){var at={rgba4:Wf,rgb565:nm,"rgb5 a1":om,depth:rm,stencil:am,"depth stencil":sm};T.ext_srgb&&(at.srgba=im),T.ext_color_buffer_half_float&&(at.rgba16f=lm,at.rgb16f=fm),T.webgl_color_buffer_float&&(at.rgba32f=cm);var ht=[];Object.keys(at).forEach(function($t){var Jt=at[$t];ht[Jt]=$t});var Ct=0,Dt={};function Wt($t){this.id=Ct++,this.refCount=1,this.renderbuffer=$t,this.format=Wf,this.width=0,this.height=0,bt.profile&&(this.stats={size:0})}Wt.prototype.decRef=function(){--this.refCount<=0&&Ft(this)};function Ft($t){var Jt=$t.renderbuffer;S(Jt,"must not double destroy renderbuffer"),b.bindRenderbuffer(Ja,null),b.deleteRenderbuffer(Jt),$t.renderbuffer=null,$t.refCount=0,delete Dt[$t.id],it.renderbufferCount--}function Qt($t,Jt){var K=new Wt(b.createRenderbuffer());Dt[K.id]=K,it.renderbufferCount++;function ut(pe,At){var ye=0,Ot=0,ee=Wf;if(typeof pe=="object"&&pe){var Lt=pe;if("shape"in Lt){var oe=Lt.shape;S(Array.isArray(oe)&&oe.length>=2,"invalid renderbuffer shape"),ye=oe[0]|0,Ot=oe[1]|0}else"radius"in Lt&&(ye=Ot=Lt.radius|0),"width"in Lt&&(ye=Lt.width|0),"height"in Lt&&(Ot=Lt.height|0);"format"in Lt&&(S.parameter(Lt.format,at,"invalid renderbuffer format"),ee=at[Lt.format])}else typeof pe=="number"?(ye=pe|0,typeof At=="number"?Ot=At|0:Ot=ye):pe?S.raise("invalid arguments to renderbuffer constructor"):ye=Ot=1;if(S(ye>0&&Ot>0&&ye<=I.maxRenderbufferSize&&Ot<=I.maxRenderbufferSize,"invalid renderbuffer size"),!(ye===K.width&&Ot===K.height&&ee===K.format))return ut.width=K.width=ye,ut.height=K.height=Ot,K.format=ee,b.bindRenderbuffer(Ja,K.renderbuffer),b.renderbufferStorage(Ja,ee,ye,Ot),S(b.getError()===0,"invalid render buffer format"),bt.profile&&(K.stats.size=hm(K.format,K.width,K.height)),ut.format=ht[K.format],ut}function Ht(pe,At){var ye=pe|0,Ot=At|0||ye;return ye===K.width&&Ot===K.height||(S(ye>0&&Ot>0&&ye<=I.maxRenderbufferSize&&Ot<=I.maxRenderbufferSize,"invalid renderbuffer size"),ut.width=K.width=ye,ut.height=K.height=Ot,b.bindRenderbuffer(Ja,K.renderbuffer),b.renderbufferStorage(Ja,K.format,ye,Ot),S(b.getError()===0,"invalid render buffer format"),bt.profile&&(K.stats.size=hm(K.format,K.width,K.height))),ut}return ut($t,Jt),ut.resize=Ht,ut._reglType="renderbuffer",ut._renderbuffer=K,bt.profile&&(ut.stats=K.stats),ut.destroy=function(){K.decRef()},ut}bt.profile&&(it.getTotalRenderbufferSize=function(){var $t=0;return Object.keys(Dt).forEach(function(Jt){$t+=Dt[Jt].stats.size}),$t});function ie(){wr(Dt).forEach(function($t){$t.renderbuffer=b.createRenderbuffer(),b.bindRenderbuffer(Ja,$t.renderbuffer),b.renderbufferStorage(Ja,$t.format,$t.width,$t.height)}),b.bindRenderbuffer(Ja,null)}return{create:Qt,clear:function(){wr(Dt).forEach(Ft)},restore:ie}},Na=36160,xu=36161,Bs=3553,Vf=34069,um=36064,dm=36096,pm=36128,vm=33306,mm=36053,y4=36054,b4=36055,w4=36057,_4=36061,M4=36193,k4=5121,S4=5126,gm=6407,xm=6408,z4=6402,E4=[gm,xm],yu=[];yu[xm]=4,yu[gm]=3;var Xf=[];Xf[k4]=1,Xf[S4]=4,Xf[M4]=2;var A4=32854,T4=32855,L4=36194,N4=33189,O4=36168,ym=34041,R4=35907,C4=34836,$4=34842,P4=34843,I4=[A4,T4,L4,R4,$4,P4,C4],Wi={};Wi[mm]="complete",Wi[y4]="incomplete attachment",Wi[w4]="incomplete dimensions",Wi[b4]="incomplete, missing attachment",Wi[_4]="unsupported";function q4(b,T,I,it,bt,at){var ht={cur:null,next:null,dirty:!1,setFBO:null},Ct=["rgba"],Dt=["rgba4","rgb565","rgb5 a1"];T.ext_srgb&&Dt.push("srgba"),T.ext_color_buffer_half_float&&Dt.push("rgba16f","rgb16f"),T.webgl_color_buffer_float&&Dt.push("rgba32f");var Wt=["uint8"];T.oes_texture_half_float&&Wt.push("half float","float16"),T.oes_texture_float&&Wt.push("float","float32");function Ft(ce,Vt,zt){this.target=ce,this.texture=Vt,this.renderbuffer=zt;var no=0,yo=0;Vt?(no=Vt.width,yo=Vt.height):zt&&(no=zt.width,yo=zt.height),this.width=no,this.height=yo}function Qt(ce){ce&&(ce.texture&&ce.texture._texture.decRef(),ce.renderbuffer&&ce.renderbuffer._renderbuffer.decRef())}function ie(ce,Vt,zt){if(ce)if(ce.texture){var no=ce.texture._texture,yo=Math.max(1,no.width),Ae=Math.max(1,no.height);S(yo===Vt&&Ae===zt,"inconsistent width/height for supplied texture"),no.refCount+=1}else{var Ao=ce.renderbuffer._renderbuffer;S(Ao.width===Vt&&Ao.height===zt,"inconsistent width/height for renderbuffer"),Ao.refCount+=1}}function $t(ce,Vt){Vt&&(Vt.texture?b.framebufferTexture2D(Na,ce,Vt.target,Vt.texture._texture.texture,0):b.framebufferRenderbuffer(Na,ce,xu,Vt.renderbuffer._renderbuffer.renderbuffer))}function Jt(ce){var Vt=Bs,zt=null,no=null,yo=ce;typeof ce=="object"&&(yo=ce.data,"target"in ce&&(Vt=ce.target|0)),S.type(yo,"function","invalid attachment data");var Ae=yo._reglType;return Ae==="texture2d"?(zt=yo,S(Vt===Bs)):Ae==="textureCube"?(zt=yo,S(Vt>=Vf&&Vt<Vf+6,"invalid cube map target")):Ae==="renderbuffer"?(no=yo,Vt=xu):S.raise("invalid regl object for attachment"),new Ft(Vt,zt,no)}function K(ce,Vt,zt,no,yo){if(zt){var Ae=it.create2D({width:ce,height:Vt,format:no,type:yo});return Ae._texture.refCount=0,new Ft(Bs,Ae,null)}else{var Ao=bt.create({width:ce,height:Vt,format:no});return Ao._renderbuffer.refCount=0,new Ft(xu,null,Ao)}}function ut(ce){return ce&&(ce.texture||ce.renderbuffer)}function Ht(ce,Vt,zt){ce&&(ce.texture?ce.texture.resize(Vt,zt):ce.renderbuffer&&ce.renderbuffer.resize(Vt,zt),ce.width=Vt,ce.height=zt)}var pe=0,At={};function ye(){this.id=pe++,At[this.id]=this,this.framebuffer=b.createFramebuffer(),this.width=0,this.height=0,this.colorAttachments=[],this.depthAttachment=null,this.stencilAttachment=null,this.depthStencilAttachment=null}function Ot(ce){ce.colorAttachments.forEach(Qt),Qt(ce.depthAttachment),Qt(ce.stencilAttachment),Qt(ce.depthStencilAttachment)}function ee(ce){var Vt=ce.framebuffer;S(Vt,"must not double destroy framebuffer"),b.deleteFramebuffer(Vt),ce.framebuffer=null,at.framebufferCount--,delete At[ce.id]}function Lt(ce){var Vt;b.bindFramebuffer(Na,ce.framebuffer);var zt=ce.colorAttachments;for(Vt=0;Vt<zt.length;++Vt)$t(um+Vt,zt[Vt]);for(Vt=zt.length;Vt<I.maxColorAttachments;++Vt)b.framebufferTexture2D(Na,um+Vt,Bs,null,0);b.framebufferTexture2D(Na,vm,Bs,null,0),b.framebufferTexture2D(Na,dm,Bs,null,0),b.framebufferTexture2D(Na,pm,Bs,null,0),$t(dm,ce.depthAttachment),$t(pm,ce.stencilAttachment),$t(vm,ce.depthStencilAttachment);var no=b.checkFramebufferStatus(Na);!b.isContextLost()&&no!==mm&&S.raise("framebuffer configuration not supported, status = "+Wi[no]),b.bindFramebuffer(Na,ht.next?ht.next.framebuffer:null),ht.cur=ht.next,b.getError()}function oe(ce,Vt){var zt=new ye;at.framebufferCount++;function no(Ae,Ao){var ho;S(ht.next!==zt,"can not update framebuffer which is currently in use");var So=0,Uo=0,$0=!0,tn=!0,Ro=null,B0=!0,l0="rgba",P0="uint8",j0=1,W0=null,un=null,bn=null,T0=!1;if(typeof Ae=="number")So=Ae|0,Uo=Ao|0||So;else if(!Ae)So=Uo=1;else{S.type(Ae,"object","invalid arguments for framebuffer");var bo=Ae;if("shape"in bo){var wn=bo.shape;S(Array.isArray(wn)&&wn.length>=2,"invalid shape for framebuffer"),So=wn[0],Uo=wn[1]}else"radius"in bo&&(So=Uo=bo.radius),"width"in bo&&(So=bo.width),"height"in bo&&(Uo=bo.height);("color"in bo||"colors"in bo)&&(Ro=bo.color||bo.colors,Array.isArray(Ro)&&S(Ro.length===1||T.webgl_draw_buffers,"multiple render targets not supported")),Ro||("colorCount"in bo&&(j0=bo.colorCount|0,S(j0>0,"invalid color buffer count")),"colorTexture"in bo&&(B0=!!bo.colorTexture,l0="rgba4"),"colorType"in bo&&(P0=bo.colorType,B0?(S(T.oes_texture_float||!(P0==="float"||P0==="float32"),"you must enable OES_texture_float in order to use floating point framebuffer objects"),S(T.oes_texture_half_float||!(P0==="half float"||P0==="float16"),"you must enable OES_texture_half_float in order to use 16-bit floating point framebuffer objects")):P0==="half float"||P0==="float16"?(S(T.ext_color_buffer_half_float,"you must enable EXT_color_buffer_half_float to use 16-bit render buffers"),l0="rgba16f"):(P0==="float"||P0==="float32")&&(S(T.webgl_color_buffer_float,"you must enable WEBGL_color_buffer_float in order to use 32-bit floating point renderbuffers"),l0="rgba32f"),S.oneOf(P0,Wt,"invalid color type")),"colorFormat"in bo&&(l0=bo.colorFormat,Ct.indexOf(l0)>=0?B0=!0:Dt.indexOf(l0)>=0?B0=!1:B0?S.oneOf(bo.colorFormat,Ct,"invalid color format for texture"):S.oneOf(bo.colorFormat,Dt,"invalid color format for renderbuffer"))),("depthTexture"in bo||"depthStencilTexture"in bo)&&(T0=!!(bo.depthTexture||bo.depthStencilTexture),S(!T0||T.webgl_depth_texture,"webgl_depth_texture extension not supported")),"depth"in bo&&(typeof bo.depth=="boolean"?$0=bo.depth:(W0=bo.depth,tn=!1)),"stencil"in bo&&(typeof bo.stencil=="boolean"?tn=bo.stencil:(un=bo.stencil,$0=!1)),"depthStencil"in bo&&(typeof bo.depthStencil=="boolean"?$0=tn=bo.depthStencil:(bn=bo.depthStencil,$0=!1,tn=!1))}var Xo=null,Ke=null,No=null,Do=null;if(Array.isArray(Ro))Xo=Ro.map(Jt);else if(Ro)Xo=[Jt(Ro)];else for(Xo=new Array(j0),ho=0;ho<j0;++ho)Xo[ho]=K(So,Uo,B0,l0,P0);S(T.webgl_draw_buffers||Xo.length<=1,"you must enable the WEBGL_draw_buffers extension in order to use multiple color buffers."),S(Xo.length<=I.maxColorAttachments,"too many color attachments, not supported"),So=So||Xo[0].width,Uo=Uo||Xo[0].height,W0?Ke=Jt(W0):$0&&!tn&&(Ke=K(So,Uo,T0,"depth","uint32")),un?No=Jt(un):tn&&!$0&&(No=K(So,Uo,!1,"stencil","uint8")),bn?Do=Jt(bn):!W0&&!un&&tn&&$0&&(Do=K(So,Uo,T0,"depth stencil","depth stencil")),S(!!W0+!!un+!!bn<=1,"invalid framebuffer configuration, can specify exactly one depth/stencil attachment");var L0=null;for(ho=0;ho<Xo.length;++ho)if(ie(Xo[ho],So,Uo),S(!Xo[ho]||Xo[ho].texture&&E4.indexOf(Xo[ho].texture._texture.format)>=0||Xo[ho].renderbuffer&&I4.indexOf(Xo[ho].renderbuffer._renderbuffer.format)>=0,"framebuffer color attachment "+ho+" is invalid"),Xo[ho]&&Xo[ho].texture){var ya=yu[Xo[ho].texture._texture.format]*Xf[Xo[ho].texture._texture.type];L0===null?L0=ya:S(L0===ya,"all color attachments much have the same number of bits per pixel.")}return ie(Ke,So,Uo),S(!Ke||Ke.texture&&Ke.texture._texture.format===z4||Ke.renderbuffer&&Ke.renderbuffer._renderbuffer.format===N4,"invalid depth attachment for framebuffer object"),ie(No,So,Uo),S(!No||No.renderbuffer&&No.renderbuffer._renderbuffer.format===O4,"invalid stencil attachment for framebuffer object"),ie(Do,So,Uo),S(!Do||Do.texture&&Do.texture._texture.format===ym||Do.renderbuffer&&Do.renderbuffer._renderbuffer.format===ym,"invalid depth-stencil attachment for framebuffer object"),Ot(zt),zt.width=So,zt.height=Uo,zt.colorAttachments=Xo,zt.depthAttachment=Ke,zt.stencilAttachment=No,zt.depthStencilAttachment=Do,no.color=Xo.map(ut),no.depth=ut(Ke),no.stencil=ut(No),no.depthStencil=ut(Do),no.width=zt.width,no.height=zt.height,Lt(zt),no}function yo(Ae,Ao){S(ht.next!==zt,"can not resize a framebuffer which is currently in use");var ho=Math.max(Ae|0,1),So=Math.max(Ao|0||ho,1);if(ho===zt.width&&So===zt.height)return no;for(var Uo=zt.colorAttachments,$0=0;$0<Uo.length;++$0)Ht(Uo[$0],ho,So);return Ht(zt.depthAttachment,ho,So),Ht(zt.stencilAttachment,ho,So),Ht(zt.depthStencilAttachment,ho,So),zt.width=no.width=ho,zt.height=no.height=So,Lt(zt),no}return no(ce,Vt),e(no,{resize:yo,_reglType:"framebuffer",_framebuffer:zt,destroy:function(){ee(zt),Ot(zt)},use:function(Ae){ht.setFBO({framebuffer:no},Ae)}})}function Be(ce){var Vt=Array(6);function zt(yo){var Ae;S(Vt.indexOf(ht.next)<0,"can not update framebuffer which is currently in use");var Ao={color:null},ho=0,So=null,Uo="rgba",$0="uint8",tn=1;if(typeof yo=="number")ho=yo|0;else if(!yo)ho=1;else{S.type(yo,"object","invalid arguments for framebuffer");var Ro=yo;if("shape"in Ro){var B0=Ro.shape;S(Array.isArray(B0)&&B0.length>=2,"invalid shape for framebuffer"),S(B0[0]===B0[1],"cube framebuffer must be square"),ho=B0[0]}else"radius"in Ro&&(ho=Ro.radius|0),"width"in Ro?(ho=Ro.width|0,"height"in Ro&&S(Ro.height===ho,"must be square")):"height"in Ro&&(ho=Ro.height|0);("color"in Ro||"colors"in Ro)&&(So=Ro.color||Ro.colors,Array.isArray(So)&&S(So.length===1||T.webgl_draw_buffers,"multiple render targets not supported")),So||("colorCount"in Ro&&(tn=Ro.colorCount|0,S(tn>0,"invalid color buffer count")),"colorType"in Ro&&(S.oneOf(Ro.colorType,Wt,"invalid color type"),$0=Ro.colorType),"colorFormat"in Ro&&(Uo=Ro.colorFormat,S.oneOf(Ro.colorFormat,Ct,"invalid color format for texture"))),"depth"in Ro&&(Ao.depth=Ro.depth),"stencil"in Ro&&(Ao.stencil=Ro.stencil),"depthStencil"in Ro&&(Ao.depthStencil=Ro.depthStencil)}var l0;if(So)if(Array.isArray(So))for(l0=[],Ae=0;Ae<So.length;++Ae)l0[Ae]=So[Ae];else l0=[So];else{l0=Array(tn);var P0={radius:ho,format:Uo,type:$0};for(Ae=0;Ae<tn;++Ae)l0[Ae]=it.createCube(P0)}for(Ao.color=Array(l0.length),Ae=0;Ae<l0.length;++Ae){var j0=l0[Ae];S(typeof j0=="function"&&j0._reglType==="textureCube","invalid cube map"),ho=ho||j0.width,S(j0.width===ho&&j0.height===ho,"invalid cube map shape"),Ao.color[Ae]={target:Vf,data:l0[Ae]}}for(Ae=0;Ae<6;++Ae){for(var W0=0;W0<l0.length;++W0)Ao.color[W0].target=Vf+Ae;Ae>0&&(Ao.depth=Vt[0].depth,Ao.stencil=Vt[0].stencil,Ao.depthStencil=Vt[0].depthStencil),Vt[Ae]?Vt[Ae](Ao):Vt[Ae]=oe(Ao)}return e(zt,{width:ho,height:ho,color:l0})}function no(yo){var Ae,Ao=yo|0;if(S(Ao>0&&Ao<=I.maxCubeMapSize,"invalid radius for cube fbo"),Ao===zt.width)return zt;var ho=zt.color;for(Ae=0;Ae<ho.length;++Ae)ho[Ae].resize(Ao);for(Ae=0;Ae<6;++Ae)Vt[Ae].resize(Ao);return zt.width=zt.height=Ao,zt}return zt(ce),e(zt,{faces:Vt,resize:no,_reglType:"framebufferCube",destroy:function(){Vt.forEach(function(yo){yo.destroy()})}})}function fo(){ht.cur=null,ht.next=null,ht.dirty=!0,wr(At).forEach(function(ce){ce.framebuffer=b.createFramebuffer(),Lt(ce)})}return e(ht,{getFramebuffer:function(ce){if(typeof ce=="function"&&ce._reglType==="framebuffer"){var Vt=ce._framebuffer;if(Vt instanceof ye)return Vt}return null},create:oe,createCube:Be,clear:function(){wr(At).forEach(ee)},restore:fo})}var D4=5126,bm=34962;function bu(){this.state=0,this.x=0,this.y=0,this.z=0,this.w=0,this.buffer=null,this.size=0,this.normalized=!1,this.type=D4,this.offset=0,this.stride=0,this.divisor=0}function F4(b,T,I,it,bt){for(var at=I.maxAttributes,ht=new Array(at),Ct=0;Ct<at;++Ct)ht[Ct]=new bu;var Dt=0,Wt={},Ft={Record:bu,scope:{},state:ht,currentVAO:null,targetVAO:null,restore:ie()?At:function(){},createVAO:ye,getVAO:Jt,destroyBuffer:Qt,setVAO:ie()?K:ut,clear:ie()?Ht:function(){}};function Qt(Ot){for(var ee=0;ee<ht.length;++ee){var Lt=ht[ee];Lt.buffer===Ot&&(b.disableVertexAttribArray(ee),Lt.buffer=null)}}function ie(){return T.oes_vertex_array_object}function $t(){return T.angle_instanced_arrays}function Jt(Ot){return typeof Ot=="function"&&Ot._vao?Ot._vao:null}function K(Ot){if(Ot!==Ft.currentVAO){var ee=ie();Ot?ee.bindVertexArrayOES(Ot.vao):ee.bindVertexArrayOES(null),Ft.currentVAO=Ot}}function ut(Ot){if(Ot!==Ft.currentVAO){if(Ot)Ot.bindAttrs();else for(var ee=$t(),Lt=0;Lt<ht.length;++Lt){var oe=ht[Lt];oe.buffer?(b.enableVertexAttribArray(Lt),b.vertexAttribPointer(Lt,oe.size,oe.type,oe.normalized,oe.stride,oe.offfset),ee&&oe.divisor&&ee.vertexAttribDivisorANGLE(Lt,oe.divisor)):(b.disableVertexAttribArray(Lt),b.vertexAttrib4f(Lt,oe.x,oe.y,oe.z,oe.w))}Ft.currentVAO=Ot}}function Ht(){wr(Wt).forEach(function(Ot){Ot.destroy()})}function pe(){this.id=++Dt,this.attributes=[];var Ot=ie();Ot?this.vao=Ot.createVertexArrayOES():this.vao=null,Wt[this.id]=this,this.buffers=[]}pe.prototype.bindAttrs=function(){for(var Ot=$t(),ee=this.attributes,Lt=0;Lt<ee.length;++Lt){var oe=ee[Lt];oe.buffer?(b.enableVertexAttribArray(Lt),b.bindBuffer(bm,oe.buffer.buffer),b.vertexAttribPointer(Lt,oe.size,oe.type,oe.normalized,oe.stride,oe.offset),Ot&&oe.divisor&&Ot.vertexAttribDivisorANGLE(Lt,oe.divisor)):(b.disableVertexAttribArray(Lt),b.vertexAttrib4f(Lt,oe.x,oe.y,oe.z,oe.w))}for(var Be=ee.length;Be<at;++Be)b.disableVertexAttribArray(Be)},pe.prototype.refresh=function(){var Ot=ie();Ot&&(Ot.bindVertexArrayOES(this.vao),this.bindAttrs(),Ft.currentVAO=this)},pe.prototype.destroy=function(){if(this.vao){var Ot=ie();this===Ft.currentVAO&&(Ft.currentVAO=null,Ot.bindVertexArrayOES(null)),Ot.deleteVertexArrayOES(this.vao),this.vao=null}Wt[this.id]&&(delete Wt[this.id],it.vaoCount-=1)};function At(){var Ot=ie();Ot&&wr(Wt).forEach(function(ee){ee.refresh()})}function ye(Ot){var ee=new pe;it.vaoCount+=1;function Lt(oe){S(Array.isArray(oe),"arguments to vertex array constructor must be an array"),S(oe.length<at,"too many attributes"),S(oe.length>0,"must specify at least one attribute");var Be={},fo=ee.attributes;fo.length=oe.length;for(var ce=0;ce<oe.length;++ce){var Vt=oe[ce],zt=fo[ce]=new bu,no=Vt.data||Vt;if(Array.isArray(no)||t(no)||ta(no)){var yo;ee.buffers[ce]&&(yo=ee.buffers[ce],t(no)&&yo._buffer.byteLength>=no.byteLength?yo.subdata(no):(yo.destroy(),ee.buffers[ce]=null)),ee.buffers[ce]||(yo=ee.buffers[ce]=bt.create(Vt,bm,!1,!0)),zt.buffer=bt.getBuffer(yo),zt.size=zt.buffer.dimension|0,zt.normalized=!1,zt.type=zt.buffer.dtype,zt.offset=0,zt.stride=0,zt.divisor=0,zt.state=1,Be[ce]=1}else bt.getBuffer(Vt)?(zt.buffer=bt.getBuffer(Vt),zt.size=zt.buffer.dimension|0,zt.normalized=!1,zt.type=zt.buffer.dtype,zt.offset=0,zt.stride=0,zt.divisor=0,zt.state=1):bt.getBuffer(Vt.buffer)?(zt.buffer=bt.getBuffer(Vt.buffer),zt.size=(+Vt.size||zt.buffer.dimension)|0,zt.normalized=!!Vt.normalized||!1,"type"in Vt?(S.parameter(Vt.type,Fs,"invalid buffer type"),zt.type=Fs[Vt.type]):zt.type=zt.buffer.dtype,zt.offset=(Vt.offset||0)|0,zt.stride=(Vt.stride||0)|0,zt.divisor=(Vt.divisor||0)|0,zt.state=1,S(zt.size>=1&&zt.size<=4,"size must be between 1 and 4"),S(zt.offset>=0,"invalid offset"),S(zt.stride>=0&&zt.stride<=255,"stride must be between 0 and 255"),S(zt.divisor>=0,"divisor must be positive"),S(!zt.divisor||!!T.angle_instanced_arrays,"ANGLE_instanced_arrays must be enabled to use divisor")):"x"in Vt?(S(ce>0,"first attribute must not be a constant"),zt.x=+Vt.x||0,zt.y=+Vt.y||0,zt.z=+Vt.z||0,zt.w=+Vt.w||0,zt.state=2):S(!1,"invalid attribute spec for location "+ce)}for(var Ae=0;Ae<ee.buffers.length;++Ae)!Be[Ae]&&ee.buffers[Ae]&&(ee.buffers[Ae].destroy(),ee.buffers[Ae]=null);return ee.refresh(),Lt}return Lt.destroy=function(){for(var oe=0;oe<ee.buffers.length;++oe)ee.buffers[oe]&&ee.buffers[oe].destroy();ee.buffers.length=0,ee.destroy()},Lt._vao=ee,Lt._reglType="vao",Lt(Ot)}return Ft}var wm=35632,G4=35633,H4=35718,U4=35721;function B4(b,T,I,it){var bt={},at={};function ht(K,ut,Ht,pe){this.name=K,this.id=ut,this.location=Ht,this.info=pe}function Ct(K,ut){for(var Ht=0;Ht<K.length;++Ht)if(K[Ht].id===ut.id){K[Ht].location=ut.location;return}K.push(ut)}function Dt(K,ut,Ht){var pe=K===wm?bt:at,At=pe[ut];if(!At){var ye=T.str(ut);At=b.createShader(K),b.shaderSource(At,ye),b.compileShader(At),S.shaderError(b,At,ye,K,Ht),pe[ut]=At}return At}var Wt={},Ft=[],Qt=0;function ie(K,ut){this.id=Qt++,this.fragId=K,this.vertId=ut,this.program=null,this.uniforms=[],this.attributes=[],this.refCount=1,it.profile&&(this.stats={uniformsCount:0,attributesCount:0})}function $t(K,ut,Ht){var pe,At,ye=Dt(wm,K.fragId),Ot=Dt(G4,K.vertId),ee=K.program=b.createProgram();if(b.attachShader(ee,ye),b.attachShader(ee,Ot),Ht)for(pe=0;pe<Ht.length;++pe){var Lt=Ht[pe];b.bindAttribLocation(ee,Lt[0],Lt[1])}b.linkProgram(ee),S.linkError(b,ee,T.str(K.fragId),T.str(K.vertId),ut);var oe=b.getProgramParameter(ee,H4);it.profile&&(K.stats.uniformsCount=oe);var Be=K.uniforms;for(pe=0;pe<oe;++pe)if(At=b.getActiveUniform(ee,pe),At)if(At.size>1)for(var fo=0;fo<At.size;++fo){var ce=At.name.replace("[0]","["+fo+"]");Ct(Be,new ht(ce,T.id(ce),b.getUniformLocation(ee,ce),At))}else Ct(Be,new ht(At.name,T.id(At.name),b.getUniformLocation(ee,At.name),At));var Vt=b.getProgramParameter(ee,U4);it.profile&&(K.stats.attributesCount=Vt);var zt=K.attributes;for(pe=0;pe<Vt;++pe)At=b.getActiveAttrib(ee,pe),At&&Ct(zt,new ht(At.name,T.id(At.name),b.getAttribLocation(ee,At.name),At))}it.profile&&(I.getMaxUniformsCount=function(){var K=0;return Ft.forEach(function(ut){ut.stats.uniformsCount>K&&(K=ut.stats.uniformsCount)}),K},I.getMaxAttributesCount=function(){var K=0;return Ft.forEach(function(ut){ut.stats.attributesCount>K&&(K=ut.stats.attributesCount)}),K});function Jt(){bt={},at={};for(var K=0;K<Ft.length;++K)$t(Ft[K],null,Ft[K].attributes.map(function(ut){return[ut.location,ut.name]}))}return{clear:function(){var K=b.deleteShader.bind(b);wr(bt).forEach(K),bt={},wr(at).forEach(K),at={},Ft.forEach(function(ut){b.deleteProgram(ut.program)}),Ft.length=0,Wt={},I.shaderCount=0},program:function(K,ut,Ht,pe){S.command(K>=0,"missing vertex shader",Ht),S.command(ut>=0,"missing fragment shader",Ht);var At=Wt[ut];At||(At=Wt[ut]={});var ye=At[K];if(ye&&(ye.refCount++,!pe))return ye;var Ot=new ie(ut,K);return I.shaderCount++,$t(Ot,Ht,pe),ye||(At[K]=Ot),Ft.push(Ot),e(Ot,{destroy:function(){if(Ot.refCount--,Ot.refCount<=0){b.deleteProgram(Ot.program);var ee=Ft.indexOf(Ot);Ft.splice(ee,1),I.shaderCount--}At[Ot.vertId].refCount<=0&&(b.deleteShader(at[Ot.vertId]),delete at[Ot.vertId],delete Wt[Ot.fragId][Ot.vertId]),Object.keys(Wt[Ot.fragId]).length||(b.deleteShader(bt[Ot.fragId]),delete bt[Ot.fragId],delete Wt[Ot.fragId])}})},restore:Jt,shader:Dt,frag:-1,vert:-1}}var j4=6408,pl=5121,W4=3333,Yf=5126;function V4(b,T,I,it,bt,at,ht){function Ct(Ft){var Qt;T.next===null?(S(bt.preserveDrawingBuffer,'you must create a webgl context with "preserveDrawingBuffer":true in order to read pixels from the drawing buffer'),Qt=pl):(S(T.next.colorAttachments[0].texture!==null,"You cannot read from a renderbuffer"),Qt=T.next.colorAttachments[0].texture._texture.type,at.oes_texture_float?(S(Qt===pl||Qt===Yf,"Reading from a framebuffer is only allowed for the types 'uint8' and 'float'"),Qt===Yf&&S(ht.readFloat,"Reading 'float' values is not permitted in your browser. For a fallback, please see: https://www.npmjs.com/package/glsl-read-float")):S(Qt===pl,"Reading from a framebuffer is only allowed for the type 'uint8'"));var ie=0,$t=0,Jt=it.framebufferWidth,K=it.framebufferHeight,ut=null;t(Ft)?ut=Ft:Ft&&(S.type(Ft,"object","invalid arguments to regl.read()"),ie=Ft.x|0,$t=Ft.y|0,S(ie>=0&&ie<it.framebufferWidth,"invalid x offset for regl.read"),S($t>=0&&$t<it.framebufferHeight,"invalid y offset for regl.read"),Jt=(Ft.width||it.framebufferWidth-ie)|0,K=(Ft.height||it.framebufferHeight-$t)|0,ut=Ft.data||null),ut&&(Qt===pl?S(ut instanceof Uint8Array,"buffer must be 'Uint8Array' when reading from a framebuffer of type 'uint8'"):Qt===Yf&&S(ut instanceof Float32Array,"buffer must be 'Float32Array' when reading from a framebuffer of type 'float'")),S(Jt>0&&Jt+ie<=it.framebufferWidth,"invalid width for read pixels"),S(K>0&&K+$t<=it.framebufferHeight,"invalid height for read pixels"),I();var Ht=Jt*K*4;return ut||(Qt===pl?ut=new Uint8Array(Ht):Qt===Yf&&(ut=ut||new Float32Array(Ht))),S.isTypedArray(ut,"data buffer for regl.read() must be a typedarray"),S(ut.byteLength>=Ht,"data buffer for regl.read() too small"),b.pixelStorei(W4,4),b.readPixels(ie,$t,Jt,K,j4,Qt,ut),ut}function Dt(Ft){var Qt;return T.setFBO({framebuffer:Ft.framebuffer},function(){Qt=Ct(Ft)}),Qt}function Wt(Ft){return!Ft||!("framebuffer"in Ft)?Ct(Ft):Dt(Ft)}return Wt}function Vi(b){return Array.prototype.slice.call(b)}function Xi(b){return Vi(b).join("")}function X4(){var b=0,T=[],I=[];function it(Qt){for(var ie=0;ie<I.length;++ie)if(I[ie]===Qt)return T[ie];var $t="g"+b++;return T.push($t),I.push(Qt),$t}function bt(){var Qt=[];function ie(){Qt.push.apply(Qt,Vi(arguments))}var $t=[];function Jt(){var K="v"+b++;return $t.push(K),arguments.length>0&&(Qt.push(K,"="),Qt.push.apply(Qt,Vi(arguments)),Qt.push(";")),K}return e(ie,{def:Jt,toString:function(){return Xi([$t.length>0?"var "+$t.join(",")+";":"",Xi(Qt)])}})}function at(){var Qt=bt(),ie=bt(),$t=Qt.toString,Jt=ie.toString;function K(ut,Ht){ie(ut,Ht,"=",Qt.def(ut,Ht),";")}return e(function(){Qt.apply(Qt,Vi(arguments))},{def:Qt.def,entry:Qt,exit:ie,save:K,set:function(ut,Ht,pe){K(ut,Ht),Qt(ut,Ht,"=",pe,";")},toString:function(){return $t()+Jt()}})}function ht(){var Qt=Xi(arguments),ie=at(),$t=at(),Jt=ie.toString,K=$t.toString;return e(ie,{then:function(){return ie.apply(ie,Vi(arguments)),this},else:function(){return $t.apply($t,Vi(arguments)),this},toString:function(){var ut=K();return ut&&(ut="else{"+ut+"}"),Xi(["if(",Qt,"){",Jt(),"}",ut])}})}var Ct=bt(),Dt={};function Wt(Qt,ie){var $t=[];function Jt(){var At="a"+$t.length;return $t.push(At),At}ie=ie||0;for(var K=0;K<ie;++K)Jt();var ut=at(),Ht=ut.toString,pe=Dt[Qt]=e(ut,{arg:Jt,toString:function(){return Xi(["function(",$t.join(),"){",Ht(),"}"])}});return pe}function Ft(){var Qt=['"use strict";',Ct,"return {"];Object.keys(Dt).forEach(function(Jt){Qt.push('"',Jt,'":',Dt[Jt].toString(),",")}),Qt.push("}");var ie=Xi(Qt).replace(/;/g,`;
`).replace(/}/g,`}
`).replace(/{/g,`{
`),$t=Function.apply(null,T.concat(ie));return $t.apply(null,I)}return{global:Ct,link:it,block:bt,proc:Wt,scope:at,cond:ht,compile:Ft}}var Yi="xyzw".split(""),_m=5121,Ki=1,wu=2,_u=0,Mu=1,ku=2,Su=3,Kf=4,Mm=5,km=6,Sm="dither",zm="blend.enable",Em="blend.color",zu="blend.equation",Eu="blend.func",Am="depth.enable",Tm="depth.func",Lm="depth.range",Nm="depth.mask",Au="colorMask",Om="cull.enable",Rm="cull.face",Tu="frontFace",Lu="lineWidth",Cm="polygonOffset.enable",Nu="polygonOffset.offset",$m="sample.alpha",Pm="sample.enable",Ou="sample.coverage",Im="stencil.enable",qm="stencil.mask",Ru="stencil.func",Cu="stencil.opFront",vl="stencil.opBack",Dm="scissor.enable",Zf="scissor.box",Oa="viewport",ml="profile",js="framebuffer",gl="vert",xl="frag",Ws="elements",Vs="primitive",Xs="count",Qf="offset",Jf="instances",yl="vao",$u="Width",Pu="Height",Zi=js+$u,Qi=js+Pu,Y4=Oa+$u,K4=Oa+Pu,Fm="drawingBuffer",Gm=Fm+$u,Hm=Fm+Pu,Z4=[Eu,zu,Ru,Cu,vl,Ou,Oa,Zf,Nu],Ji=34962,Q4=34963,J4=35632,t6=35633,Um=3553,e6=34067,o6=2884,n6=3042,r6=3024,a6=2960,s6=2929,i6=3089,c6=32823,l6=32926,f6=32928,Iu=5126,th=35664,eh=35665,oh=35666,qu=5124,nh=35667,rh=35668,ah=35669,Du=35670,sh=35671,ih=35672,ch=35673,bl=35674,wl=35675,_l=35676,Ml=35678,kl=35680,Bm=4,Sl=1028,Ys=1029,jm=2304,Fu=2305,h6=32775,u6=32776,d6=519,ts=7680,Wm=0,Vm=1,Xm=32774,p6=513,Ym=36160,v6=36064,xa={0:0,1:1,zero:0,one:1,"src color":768,"one minus src color":769,"src alpha":770,"one minus src alpha":771,"dst color":774,"one minus dst color":775,"dst alpha":772,"one minus dst alpha":773,"constant color":32769,"one minus constant color":32770,"constant alpha":32771,"one minus constant alpha":32772,"src alpha saturate":776},Km=["constant color, constant alpha","one minus constant color, constant alpha","constant color, one minus constant alpha","one minus constant color, one minus constant alpha","constant alpha, constant color","constant alpha, one minus constant color","one minus constant alpha, constant color","one minus constant alpha, one minus constant color"],tc={never:512,less:513,"<":513,equal:514,"=":514,"==":514,"===":514,lequal:515,"<=":515,greater:516,">":516,notequal:517,"!=":517,"!==":517,gequal:518,">=":518,always:519},es={0:0,zero:0,keep:7680,replace:7681,increment:7682,decrement:7683,"increment wrap":34055,"decrement wrap":34056,invert:5386},Zm={frag:J4,vert:t6},Gu={cw:jm,ccw:Fu};function lh(b){return Array.isArray(b)||t(b)||ta(b)}function Qm(b){return b.sort(function(T,I){return T===Oa?-1:I===Oa?1:T<I?-1:1})}function Bn(b,T,I,it){this.thisDep=b,this.contextDep=T,this.propDep=I,this.append=it}function os(b){return b&&!(b.thisDep||b.contextDep||b.propDep)}function C0(b){return new Bn(!1,!1,!1,b)}function sr(b,T){var I=b.type;if(I===_u){var it=b.data.length;return new Bn(!0,it>=1,it>=2,T)}else if(I===Kf){var bt=b.data;return new Bn(bt.thisDep,bt.contextDep,bt.propDep,T)}else{if(I===Mm)return new Bn(!1,!1,!1,T);if(I===km){for(var at=!1,ht=!1,Ct=!1,Dt=0;Dt<b.data.length;++Dt){var Wt=b.data[Dt];if(Wt.type===Mu)Ct=!0;else if(Wt.type===ku)ht=!0;else if(Wt.type===Su)at=!0;else if(Wt.type===_u){at=!0;var Ft=Wt.data;Ft>=1&&(ht=!0),Ft>=2&&(Ct=!0)}else Wt.type===Kf&&(at=at||Wt.data.thisDep,ht=ht||Wt.data.contextDep,Ct=Ct||Wt.data.propDep)}return new Bn(at,ht,Ct,T)}else return new Bn(I===Su,I===ku,I===Mu,T)}}var Jm=new Bn(!1,!1,!1,function(){});function m6(b,T,I,it,bt,at,ht,Ct,Dt,Wt,Ft,Qt,ie,$t,Jt){var K=Wt.Record,ut={add:32774,subtract:32778,"reverse subtract":32779};I.ext_blend_minmax&&(ut.min=h6,ut.max=u6);var Ht=I.angle_instanced_arrays,pe=I.webgl_draw_buffers,At={dirty:!0,profile:Jt.profile},ye={},Ot=[],ee={},Lt={};function oe(N){return N.replace(".","_")}function Be(N,A,F){var Y=oe(N);Ot.push(N),ye[Y]=At[Y]=!!F,ee[Y]=A}function fo(N,A,F){var Y=oe(N);Ot.push(N),Array.isArray(F)?(At[Y]=F.slice(),ye[Y]=F.slice()):At[Y]=ye[Y]=F,Lt[Y]=A}Be(Sm,r6),Be(zm,n6),fo(Em,"blendColor",[0,0,0,0]),fo(zu,"blendEquationSeparate",[Xm,Xm]),fo(Eu,"blendFuncSeparate",[Vm,Wm,Vm,Wm]),Be(Am,s6,!0),fo(Tm,"depthFunc",p6),fo(Lm,"depthRange",[0,1]),fo(Nm,"depthMask",!0),fo(Au,Au,[!0,!0,!0,!0]),Be(Om,o6),fo(Rm,"cullFace",Ys),fo(Tu,Tu,Fu),fo(Lu,Lu,1),Be(Cm,c6),fo(Nu,"polygonOffset",[0,0]),Be($m,l6),Be(Pm,f6),fo(Ou,"sampleCoverage",[1,!1]),Be(Im,a6),fo(qm,"stencilMask",-1),fo(Ru,"stencilFunc",[d6,0,-1]),fo(Cu,"stencilOpSeparate",[Sl,ts,ts,ts]),fo(vl,"stencilOpSeparate",[Ys,ts,ts,ts]),Be(Dm,i6),fo(Zf,"scissor",[0,0,b.drawingBufferWidth,b.drawingBufferHeight]),fo(Oa,Oa,[0,0,b.drawingBufferWidth,b.drawingBufferHeight]);var ce={gl:b,context:ie,strings:T,next:ye,current:At,draw:Qt,elements:at,buffer:bt,shader:Ft,attributes:Wt.state,vao:Wt,uniforms:Dt,framebuffer:Ct,extensions:I,timer:$t,isBufferArgs:lh},Vt={primTypes:Di,compareFuncs:tc,blendFuncs:xa,blendEquations:ut,stencilOps:es,glTypes:Fs,orientationType:Gu};S.optional(function(){ce.isArrayLike=A0}),pe&&(Vt.backBuffer=[Ys],Vt.drawBuffer=mt(it.maxDrawbuffers,function(N){return N===0?[0]:mt(N,function(A){return v6+A})}));var zt=0;function no(){var N=X4(),A=N.link,F=N.global;N.id=zt++,N.batchId="0";var Y=A(ce),Z=N.shared={props:"a0"};Object.keys(ce).forEach(function(D){Z[D]=F.def(Y,".",D)}),S.optional(function(){N.CHECK=A(S),N.commandStr=S.guessCommand(),N.command=A(N.commandStr),N.assert=function(D,L,X){D("if(!(",L,"))",this.CHECK,".commandRaise(",A(X),",",this.command,");")},Vt.invalidBlendCombinations=Km});var U=N.next={},H=N.current={};Object.keys(Lt).forEach(function(D){Array.isArray(At[D])&&(U[D]=F.def(Z.next,".",D),H[D]=F.def(Z.current,".",D))});var V=N.constants={};Object.keys(Vt).forEach(function(D){V[D]=F.def(JSON.stringify(Vt[D]))}),N.invoke=function(D,L){switch(L.type){case _u:var X=["this",Z.context,Z.props,N.batchId];return D.def(A(L.data),".call(",X.slice(0,Math.max(L.data.length+1,4)),")");case Mu:return D.def(Z.props,L.data);case ku:return D.def(Z.context,L.data);case Su:return D.def("this",L.data);case Kf:return L.data.append(N,D),L.data.ref;case Mm:return L.data.toString();case km:return L.data.map(function(Q){return N.invoke(D,Q)})}},N.attribCache={};var O={};return N.scopeAttrib=function(D){var L=T.id(D);if(L in O)return O[L];var X=Wt.scope[L];X||(X=Wt.scope[L]=new K);var Q=O[L]=A(X);return Q},N}function yo(N){var A=N.static,F=N.dynamic,Y;if(ml in A){var Z=!!A[ml];Y=C0(function(H,V){return Z}),Y.enable=Z}else if(ml in F){var U=F[ml];Y=sr(U,function(H,V){return H.invoke(V,U)})}return Y}function Ae(N,A){var F=N.static,Y=N.dynamic;if(js in F){var Z=F[js];return Z?(Z=Ct.getFramebuffer(Z),S.command(Z,"invalid framebuffer object"),C0(function(H,V){var O=H.link(Z),D=H.shared;V.set(D.framebuffer,".next",O);var L=D.context;return V.set(L,"."+Zi,O+".width"),V.set(L,"."+Qi,O+".height"),O})):C0(function(H,V){var O=H.shared;V.set(O.framebuffer,".next","null");var D=O.context;return V.set(D,"."+Zi,D+"."+Gm),V.set(D,"."+Qi,D+"."+Hm),"null"})}else if(js in Y){var U=Y[js];return sr(U,function(H,V){var O=H.invoke(V,U),D=H.shared,L=D.framebuffer,X=V.def(L,".getFramebuffer(",O,")");S.optional(function(){H.assert(V,"!"+O+"||"+X,"invalid framebuffer object")}),V.set(L,".next",X);var Q=D.context;return V.set(Q,"."+Zi,X+"?"+X+".width:"+Q+"."+Gm),V.set(Q,"."+Qi,X+"?"+X+".height:"+Q+"."+Hm),X})}else return null}function Ao(N,A,F){var Y=N.static,Z=N.dynamic;function U(O){if(O in Y){var D=Y[O];S.commandType(D,"object","invalid "+O,F.commandStr);var L=!0,X=D.x|0,Q=D.y|0,yt,wt;return"width"in D?(yt=D.width|0,S.command(yt>=0,"invalid "+O,F.commandStr)):L=!1,"height"in D?(wt=D.height|0,S.command(wt>=0,"invalid "+O,F.commandStr)):L=!1,new Bn(!L&&A&&A.thisDep,!L&&A&&A.contextDep,!L&&A&&A.propDep,function(Pe,wo){var Te=Pe.shared.context,Ze=yt;"width"in D||(Ze=wo.def(Te,".",Zi,"-",X));var uo=wt;return"height"in D||(uo=wo.def(Te,".",Qi,"-",Q)),[X,Q,Ze,uo]})}else if(O in Z){var pt=Z[O],Gt=sr(pt,function(Pe,wo){var Te=Pe.invoke(wo,pt);S.optional(function(){Pe.assert(wo,Te+"&&typeof "+Te+'==="object"',"invalid "+O)});var Ze=Pe.shared.context,uo=wo.def(Te,".x|0"),Bo=wo.def(Te,".y|0"),M0=wo.def('"width" in ',Te,"?",Te,".width|0:","(",Ze,".",Zi,"-",uo,")"),jn=wo.def('"height" in ',Te,"?",Te,".height|0:","(",Ze,".",Qi,"-",Bo,")");return S.optional(function(){Pe.assert(wo,M0+">=0&&"+jn+">=0","invalid "+O)}),[uo,Bo,M0,jn]});return A&&(Gt.thisDep=Gt.thisDep||A.thisDep,Gt.contextDep=Gt.contextDep||A.contextDep,Gt.propDep=Gt.propDep||A.propDep),Gt}else return A?new Bn(A.thisDep,A.contextDep,A.propDep,function(Pe,wo){var Te=Pe.shared.context;return[0,0,wo.def(Te,".",Zi),wo.def(Te,".",Qi)]}):null}var H=U(Oa);if(H){var V=H;H=new Bn(H.thisDep,H.contextDep,H.propDep,function(O,D){var L=V.append(O,D),X=O.shared.context;return D.set(X,"."+Y4,L[2]),D.set(X,"."+K4,L[3]),L})}return{viewport:H,scissor_box:U(Zf)}}function ho(N,A){var F=N.static,Y=typeof F[xl]=="string"&&typeof F[gl]=="string";if(Y){if(Object.keys(A.dynamic).length>0)return null;var Z=A.static,U=Object.keys(Z);if(U.length>0&&typeof Z[U[0]]=="number"){for(var H=[],V=0;V<U.length;++V)S(typeof Z[U[V]]=="number","must specify all vertex attribute locations when using vaos"),H.push([Z[U[V]]|0,U[V]]);return H}}return null}function So(N,A,F){var Y=N.static,Z=N.dynamic;function U(L){if(L in Y){var X=T.id(Y[L]);S.optional(function(){Ft.shader(Zm[L],X,S.guessCommand())});var Q=C0(function(){return X});return Q.id=X,Q}else if(L in Z){var yt=Z[L];return sr(yt,function(wt,pt){var Gt=wt.invoke(pt,yt),Pe=pt.def(wt.shared.strings,".id(",Gt,")");return S.optional(function(){pt(wt.shared.shader,".shader(",Zm[L],",",Pe,",",wt.command,");")}),Pe})}return null}var H=U(xl),V=U(gl),O=null,D;return os(H)&&os(V)?(O=Ft.program(V.id,H.id,null,F),D=C0(function(L,X){return L.link(O)})):D=new Bn(H&&H.thisDep||V&&V.thisDep,H&&H.contextDep||V&&V.contextDep,H&&H.propDep||V&&V.propDep,function(L,X){var Q=L.shared.shader,yt;H?yt=H.append(L,X):yt=X.def(Q,".",xl);var wt;V?wt=V.append(L,X):wt=X.def(Q,".",gl);var pt=Q+".program("+wt+","+yt;return S.optional(function(){pt+=","+L.command}),X.def(pt+")")}),{frag:H,vert:V,progVar:D,program:O}}function Uo(N,A){var F=N.static,Y=N.dynamic;function Z(){if(Ws in F){var L=F[Ws];lh(L)?L=at.getElements(at.create(L,!0)):L&&(L=at.getElements(L),S.command(L,"invalid elements",A.commandStr));var X=C0(function(yt,wt){if(L){var pt=yt.link(L);return yt.ELEMENTS=pt,pt}return yt.ELEMENTS=null,null});return X.value=L,X}else if(Ws in Y){var Q=Y[Ws];return sr(Q,function(yt,wt){var pt=yt.shared,Gt=pt.isBufferArgs,Pe=pt.elements,wo=yt.invoke(wt,Q),Te=wt.def("null"),Ze=wt.def(Gt,"(",wo,")"),uo=yt.cond(Ze).then(Te,"=",Pe,".createStream(",wo,");").else(Te,"=",Pe,".getElements(",wo,");");return S.optional(function(){yt.assert(uo.else,"!"+wo+"||"+Te,"invalid elements")}),wt.entry(uo),wt.exit(yt.cond(Ze).then(Pe,".destroyStream(",Te,");")),yt.ELEMENTS=Te,Te})}return null}var U=Z();function H(){if(Vs in F){var L=F[Vs];return S.commandParameter(L,Di,"invalid primitve",A.commandStr),C0(function(Q,yt){return Di[L]})}else if(Vs in Y){var X=Y[Vs];return sr(X,function(Q,yt){var wt=Q.constants.primTypes,pt=Q.invoke(yt,X);return S.optional(function(){Q.assert(yt,pt+" in "+wt,"invalid primitive, must be one of "+Object.keys(Di))}),yt.def(wt,"[",pt,"]")})}else if(U)return os(U)?U.value?C0(function(Q,yt){return yt.def(Q.ELEMENTS,".primType")}):C0(function(){return Bm}):new Bn(U.thisDep,U.contextDep,U.propDep,function(Q,yt){var wt=Q.ELEMENTS;return yt.def(wt,"?",wt,".primType:",Bm)});return null}function V(L,X){if(L in F){var Q=F[L]|0;return S.command(!X||Q>=0,"invalid "+L,A.commandStr),C0(function(wt,pt){return X&&(wt.OFFSET=Q),Q})}else if(L in Y){var yt=Y[L];return sr(yt,function(wt,pt){var Gt=wt.invoke(pt,yt);return X&&(wt.OFFSET=Gt,S.optional(function(){wt.assert(pt,Gt+">=0","invalid "+L)})),Gt})}else if(X&&U)return C0(function(wt,pt){return wt.OFFSET="0",0});return null}var O=V(Qf,!0);function D(){if(Xs in F){var L=F[Xs]|0;return S.command(typeof L=="number"&&L>=0,"invalid vertex count",A.commandStr),C0(function(){return L})}else if(Xs in Y){var X=Y[Xs];return sr(X,function(wt,pt){var Gt=wt.invoke(pt,X);return S.optional(function(){wt.assert(pt,"typeof "+Gt+'==="number"&&'+Gt+">=0&&"+Gt+"===("+Gt+"|0)","invalid vertex count")}),Gt})}else if(U)if(os(U)){if(U)return O?new Bn(O.thisDep,O.contextDep,O.propDep,function(wt,pt){var Gt=pt.def(wt.ELEMENTS,".vertCount-",wt.OFFSET);return S.optional(function(){wt.assert(pt,Gt+">=0","invalid vertex offset/element buffer too small")}),Gt}):C0(function(wt,pt){return pt.def(wt.ELEMENTS,".vertCount")});var Q=C0(function(){return-1});return S.optional(function(){Q.MISSING=!0}),Q}else{var yt=new Bn(U.thisDep||O.thisDep,U.contextDep||O.contextDep,U.propDep||O.propDep,function(wt,pt){var Gt=wt.ELEMENTS;return wt.OFFSET?pt.def(Gt,"?",Gt,".vertCount-",wt.OFFSET,":-1"):pt.def(Gt,"?",Gt,".vertCount:-1")});return S.optional(function(){yt.DYNAMIC=!0}),yt}return null}return{elements:U,primitive:H(),count:D(),instances:V(Jf,!1),offset:O}}function $0(N,A){var F=N.static,Y=N.dynamic,Z={};return Ot.forEach(function(U){var H=oe(U);function V(O,D){if(U in F){var L=O(F[U]);Z[H]=C0(function(){return L})}else if(U in Y){var X=Y[U];Z[H]=sr(X,function(Q,yt){return D(Q,yt,Q.invoke(yt,X))})}}switch(U){case Om:case zm:case Sm:case Im:case Am:case Dm:case Cm:case $m:case Pm:case Nm:return V(function(O){return S.commandType(O,"boolean",U,A.commandStr),O},function(O,D,L){return S.optional(function(){O.assert(D,"typeof "+L+'==="boolean"',"invalid flag "+U,O.commandStr)}),L});case Tm:return V(function(O){return S.commandParameter(O,tc,"invalid "+U,A.commandStr),tc[O]},function(O,D,L){var X=O.constants.compareFuncs;return S.optional(function(){O.assert(D,L+" in "+X,"invalid "+U+", must be one of "+Object.keys(tc))}),D.def(X,"[",L,"]")});case Lm:return V(function(O){return S.command(A0(O)&&O.length===2&&typeof O[0]=="number"&&typeof O[1]=="number"&&O[0]<=O[1],"depth range is 2d array",A.commandStr),O},function(O,D,L){S.optional(function(){O.assert(D,O.shared.isArrayLike+"("+L+")&&"+L+".length===2&&typeof "+L+'[0]==="number"&&typeof '+L+'[1]==="number"&&'+L+"[0]<="+L+"[1]","depth range must be a 2d array")});var X=D.def("+",L,"[0]"),Q=D.def("+",L,"[1]");return[X,Q]});case Eu:return V(function(O){S.commandType(O,"object","blend.func",A.commandStr);var D="srcRGB"in O?O.srcRGB:O.src,L="srcAlpha"in O?O.srcAlpha:O.src,X="dstRGB"in O?O.dstRGB:O.dst,Q="dstAlpha"in O?O.dstAlpha:O.dst;return S.commandParameter(D,xa,H+".srcRGB",A.commandStr),S.commandParameter(L,xa,H+".srcAlpha",A.commandStr),S.commandParameter(X,xa,H+".dstRGB",A.commandStr),S.commandParameter(Q,xa,H+".dstAlpha",A.commandStr),S.command(Km.indexOf(D+", "+X)===-1,"unallowed blending combination (srcRGB, dstRGB) = ("+D+", "+X+")",A.commandStr),[xa[D],xa[X],xa[L],xa[Q]]},function(O,D,L){var X=O.constants.blendFuncs;S.optional(function(){O.assert(D,L+"&&typeof "+L+'==="object"',"invalid blend func, must be an object")});function Q(Te,Ze){var uo=D.def('"',Te,Ze,'" in ',L,"?",L,".",Te,Ze,":",L,".",Te);return S.optional(function(){O.assert(D,uo+" in "+X,"invalid "+U+"."+Te+Ze+", must be one of "+Object.keys(xa))}),uo}var yt=Q("src","RGB"),wt=Q("dst","RGB");S.optional(function(){var Te=O.constants.invalidBlendCombinations;O.assert(D,Te+".indexOf("+yt+'+", "+'+wt+") === -1 ","unallowed blending combination for (srcRGB, dstRGB)")});var pt=D.def(X,"[",yt,"]"),Gt=D.def(X,"[",Q("src","Alpha"),"]"),Pe=D.def(X,"[",wt,"]"),wo=D.def(X,"[",Q("dst","Alpha"),"]");return[pt,Pe,Gt,wo]});case zu:return V(function(O){if(typeof O=="string")return S.commandParameter(O,ut,"invalid "+U,A.commandStr),[ut[O],ut[O]];if(typeof O=="object")return S.commandParameter(O.rgb,ut,U+".rgb",A.commandStr),S.commandParameter(O.alpha,ut,U+".alpha",A.commandStr),[ut[O.rgb],ut[O.alpha]];S.commandRaise("invalid blend.equation",A.commandStr)},function(O,D,L){var X=O.constants.blendEquations,Q=D.def(),yt=D.def(),wt=O.cond("typeof ",L,'==="string"');return S.optional(function(){function pt(Gt,Pe,wo){O.assert(Gt,wo+" in "+X,"invalid "+Pe+", must be one of "+Object.keys(ut))}pt(wt.then,U,L),O.assert(wt.else,L+"&&typeof "+L+'==="object"',"invalid "+U),pt(wt.else,U+".rgb",L+".rgb"),pt(wt.else,U+".alpha",L+".alpha")}),wt.then(Q,"=",yt,"=",X,"[",L,"];"),wt.else(Q,"=",X,"[",L,".rgb];",yt,"=",X,"[",L,".alpha];"),D(wt),[Q,yt]});case Em:return V(function(O){return S.command(A0(O)&&O.length===4,"blend.color must be a 4d array",A.commandStr),mt(4,function(D){return+O[D]})},function(O,D,L){return S.optional(function(){O.assert(D,O.shared.isArrayLike+"("+L+")&&"+L+".length===4","blend.color must be a 4d array")}),mt(4,function(X){return D.def("+",L,"[",X,"]")})});case qm:return V(function(O){return S.commandType(O,"number",H,A.commandStr),O|0},function(O,D,L){return S.optional(function(){O.assert(D,"typeof "+L+'==="number"',"invalid stencil.mask")}),D.def(L,"|0")});case Ru:return V(function(O){S.commandType(O,"object",H,A.commandStr);var D=O.cmp||"keep",L=O.ref||0,X="mask"in O?O.mask:-1;return S.commandParameter(D,tc,U+".cmp",A.commandStr),S.commandType(L,"number",U+".ref",A.commandStr),S.commandType(X,"number",U+".mask",A.commandStr),[tc[D],L,X]},function(O,D,L){var X=O.constants.compareFuncs;S.optional(function(){function pt(){O.assert(D,Array.prototype.join.call(arguments,""),"invalid stencil.func")}pt(L+"&&typeof ",L,'==="object"'),pt('!("cmp" in ',L,")||(",L,".cmp in ",X,")")});var Q=D.def('"cmp" in ',L,"?",X,"[",L,".cmp]",":",ts),yt=D.def(L,".ref|0"),wt=D.def('"mask" in ',L,"?",L,".mask|0:-1");return[Q,yt,wt]});case Cu:case vl:return V(function(O){S.commandType(O,"object",H,A.commandStr);var D=O.fail||"keep",L=O.zfail||"keep",X=O.zpass||"keep";return S.commandParameter(D,es,U+".fail",A.commandStr),S.commandParameter(L,es,U+".zfail",A.commandStr),S.commandParameter(X,es,U+".zpass",A.commandStr),[U===vl?Ys:Sl,es[D],es[L],es[X]]},function(O,D,L){var X=O.constants.stencilOps;S.optional(function(){O.assert(D,L+"&&typeof "+L+'==="object"',"invalid "+U)});function Q(yt){return S.optional(function(){O.assert(D,'!("'+yt+'" in '+L+")||("+L+"."+yt+" in "+X+")","invalid "+U+"."+yt+", must be one of "+Object.keys(es))}),D.def('"',yt,'" in ',L,"?",X,"[",L,".",yt,"]:",ts)}return[U===vl?Ys:Sl,Q("fail"),Q("zfail"),Q("zpass")]});case Nu:return V(function(O){S.commandType(O,"object",H,A.commandStr);var D=O.factor|0,L=O.units|0;return S.commandType(D,"number",H+".factor",A.commandStr),S.commandType(L,"number",H+".units",A.commandStr),[D,L]},function(O,D,L){S.optional(function(){O.assert(D,L+"&&typeof "+L+'==="object"',"invalid "+U)});var X=D.def(L,".factor|0"),Q=D.def(L,".units|0");return[X,Q]});case Rm:return V(function(O){var D=0;return O==="front"?D=Sl:O==="back"&&(D=Ys),S.command(!!D,H,A.commandStr),D},function(O,D,L){return S.optional(function(){O.assert(D,L+'==="front"||'+L+'==="back"',"invalid cull.face")}),D.def(L,'==="front"?',Sl,":",Ys)});case Lu:return V(function(O){return S.command(typeof O=="number"&&O>=it.lineWidthDims[0]&&O<=it.lineWidthDims[1],"invalid line width, must be a positive number between "+it.lineWidthDims[0]+" and "+it.lineWidthDims[1],A.commandStr),O},function(O,D,L){return S.optional(function(){O.assert(D,"typeof "+L+'==="number"&&'+L+">="+it.lineWidthDims[0]+"&&"+L+"<="+it.lineWidthDims[1],"invalid line width")}),L});case Tu:return V(function(O){return S.commandParameter(O,Gu,H,A.commandStr),Gu[O]},function(O,D,L){return S.optional(function(){O.assert(D,L+'==="cw"||'+L+'==="ccw"',"invalid frontFace, must be one of cw,ccw")}),D.def(L+'==="cw"?'+jm+":"+Fu)});case Au:return V(function(O){return S.command(A0(O)&&O.length===4,"color.mask must be length 4 array",A.commandStr),O.map(function(D){return!!D})},function(O,D,L){return S.optional(function(){O.assert(D,O.shared.isArrayLike+"("+L+")&&"+L+".length===4","invalid color.mask")}),mt(4,function(X){return"!!"+L+"["+X+"]"})});case Ou:return V(function(O){S.command(typeof O=="object"&&O,H,A.commandStr);var D="value"in O?O.value:1,L=!!O.invert;return S.command(typeof D=="number"&&D>=0&&D<=1,"sample.coverage.value must be a number between 0 and 1",A.commandStr),[D,L]},function(O,D,L){S.optional(function(){O.assert(D,L+"&&typeof "+L+'==="object"',"invalid sample.coverage")});var X=D.def('"value" in ',L,"?+",L,".value:1"),Q=D.def("!!",L,".invert");return[X,Q]})}}),Z}function tn(N,A){var F=N.static,Y=N.dynamic,Z={};return Object.keys(F).forEach(function(U){var H=F[U],V;if(typeof H=="number"||typeof H=="boolean")V=C0(function(){return H});else if(typeof H=="function"){var O=H._reglType;O==="texture2d"||O==="textureCube"?V=C0(function(D){return D.link(H)}):O==="framebuffer"||O==="framebufferCube"?(S.command(H.color.length>0,'missing color attachment for framebuffer sent to uniform "'+U+'"',A.commandStr),V=C0(function(D){return D.link(H.color[0])})):S.commandRaise('invalid data for uniform "'+U+'"',A.commandStr)}else A0(H)?V=C0(function(D){var L=D.global.def("[",mt(H.length,function(X){return S.command(typeof H[X]=="number"||typeof H[X]=="boolean","invalid uniform "+U,D.commandStr),H[X]}),"]");return L}):S.commandRaise('invalid or missing data for uniform "'+U+'"',A.commandStr);V.value=H,Z[U]=V}),Object.keys(Y).forEach(function(U){var H=Y[U];Z[U]=sr(H,function(V,O){return V.invoke(O,H)})}),Z}function Ro(N,A){var F=N.static,Y=N.dynamic,Z={};return Object.keys(F).forEach(function(U){var H=F[U],V=T.id(U),O=new K;if(lh(H))O.state=Ki,O.buffer=bt.getBuffer(bt.create(H,Ji,!1,!0)),O.type=0;else{var D=bt.getBuffer(H);if(D)O.state=Ki,O.buffer=D,O.type=0;else if(S.command(typeof H=="object"&&H,"invalid data for attribute "+U,A.commandStr),"constant"in H){var L=H.constant;O.buffer="null",O.state=wu,typeof L=="number"?O.x=L:(S.command(A0(L)&&L.length>0&&L.length<=4,"invalid constant for attribute "+U,A.commandStr),Yi.forEach(function(Pe,wo){wo<L.length&&(O[Pe]=L[wo])}))}else{lh(H.buffer)?D=bt.getBuffer(bt.create(H.buffer,Ji,!1,!0)):D=bt.getBuffer(H.buffer),S.command(!!D,'missing buffer for attribute "'+U+'"',A.commandStr);var X=H.offset|0;S.command(X>=0,'invalid offset for attribute "'+U+'"',A.commandStr);var Q=H.stride|0;S.command(Q>=0&&Q<256,'invalid stride for attribute "'+U+'", must be integer betweeen [0, 255]',A.commandStr);var yt=H.size|0;S.command(!("size"in H)||yt>0&&yt<=4,'invalid size for attribute "'+U+'", must be 1,2,3,4',A.commandStr);var wt=!!H.normalized,pt=0;"type"in H&&(S.commandParameter(H.type,Fs,"invalid type for attribute "+U,A.commandStr),pt=Fs[H.type]);var Gt=H.divisor|0;"divisor"in H&&(S.command(Gt===0||Ht,'cannot specify divisor for attribute "'+U+'", instancing not supported',A.commandStr),S.command(Gt>=0,'invalid divisor for attribute "'+U+'"',A.commandStr)),S.optional(function(){var Pe=A.commandStr,wo=["buffer","offset","divisor","normalized","type","size","stride"];Object.keys(H).forEach(function(Te){S.command(wo.indexOf(Te)>=0,'unknown parameter "'+Te+'" for attribute pointer "'+U+'" (valid parameters are '+wo+")",Pe)})}),O.buffer=D,O.state=Ki,O.size=yt,O.normalized=wt,O.type=pt||D.dtype,O.offset=X,O.stride=Q,O.divisor=Gt}}Z[U]=C0(function(Pe,wo){var Te=Pe.attribCache;if(V in Te)return Te[V];var Ze={isStream:!1};return Object.keys(O).forEach(function(uo){Ze[uo]=O[uo]}),O.buffer&&(Ze.buffer=Pe.link(O.buffer),Ze.type=Ze.type||Ze.buffer+".dtype"),Te[V]=Ze,Ze})}),Object.keys(Y).forEach(function(U){var H=Y[U];function V(O,D){var L=O.invoke(D,H),X=O.shared,Q=O.constants,yt=X.isBufferArgs,wt=X.buffer;S.optional(function(){O.assert(D,L+"&&(typeof "+L+'==="object"||typeof '+L+'==="function")&&('+yt+"("+L+")||"+wt+".getBuffer("+L+")||"+wt+".getBuffer("+L+".buffer)||"+yt+"("+L+'.buffer)||("constant" in '+L+"&&(typeof "+L+'.constant==="number"||'+X.isArrayLike+"("+L+".constant))))",'invalid dynamic attribute "'+U+'"')});var pt={isStream:D.def(!1)},Gt=new K;Gt.state=Ki,Object.keys(Gt).forEach(function(Ze){pt[Ze]=D.def(""+Gt[Ze])});var Pe=pt.buffer,wo=pt.type;D("if(",yt,"(",L,")){",pt.isStream,"=true;",Pe,"=",wt,".createStream(",Ji,",",L,");",wo,"=",Pe,".dtype;","}else{",Pe,"=",wt,".getBuffer(",L,");","if(",Pe,"){",wo,"=",Pe,".dtype;",'}else if("constant" in ',L,"){",pt.state,"=",wu,";","if(typeof "+L+'.constant === "number"){',pt[Yi[0]],"=",L,".constant;",Yi.slice(1).map(function(Ze){return pt[Ze]}).join("="),"=0;","}else{",Yi.map(function(Ze,uo){return pt[Ze]+"="+L+".constant.length>"+uo+"?"+L+".constant["+uo+"]:0;"}).join(""),"}}else{","if(",yt,"(",L,".buffer)){",Pe,"=",wt,".createStream(",Ji,",",L,".buffer);","}else{",Pe,"=",wt,".getBuffer(",L,".buffer);","}",wo,'="type" in ',L,"?",Q.glTypes,"[",L,".type]:",Pe,".dtype;",pt.normalized,"=!!",L,".normalized;");function Te(Ze){D(pt[Ze],"=",L,".",Ze,"|0;")}return Te("size"),Te("offset"),Te("stride"),Te("divisor"),D("}}"),D.exit("if(",pt.isStream,"){",wt,".destroyStream(",Pe,");","}"),pt}Z[U]=sr(H,V)}),Z}function B0(N,A){var F=N.static,Y=N.dynamic;if(yl in F){var Z=F[yl];return Z!==null&&Wt.getVAO(Z)===null&&(Z=Wt.createVAO(Z)),C0(function(H){return H.link(Wt.getVAO(Z))})}else if(yl in Y){var U=Y[yl];return sr(U,function(H,V){var O=H.invoke(V,U);return V.def(H.shared.vao+".getVAO("+O+")")})}return null}function l0(N){var A=N.static,F=N.dynamic,Y={};return Object.keys(A).forEach(function(Z){var U=A[Z];Y[Z]=C0(function(H,V){return typeof U=="number"||typeof U=="boolean"?""+U:H.link(U)})}),Object.keys(F).forEach(function(Z){var U=F[Z];Y[Z]=sr(U,function(H,V){return H.invoke(V,U)})}),Y}function P0(N,A,F,Y,Z){var U=N.static,H=N.dynamic;S.optional(function(){var Te=[js,gl,xl,Ws,Vs,Qf,Xs,Jf,ml,yl].concat(Ot);function Ze(uo){Object.keys(uo).forEach(function(Bo){S.command(Te.indexOf(Bo)>=0,'unknown parameter "'+Bo+'"',Z.commandStr)})}Ze(U),Ze(H)});var V=ho(N,A),O=Ae(N,Z),D=Ao(N,O,Z),L=Uo(N,Z),X=$0(N,Z),Q=So(N,Z,V);function yt(Te){var Ze=D[Te];Ze&&(X[Te]=Ze)}yt(Oa),yt(oe(Zf));var wt=Object.keys(X).length>0,pt={framebuffer:O,draw:L,shader:Q,state:X,dirty:wt,scopeVAO:null,drawVAO:null,useVAO:!1,attributes:{}};if(pt.profile=yo(N,Z),pt.uniforms=tn(F,Z),pt.drawVAO=pt.scopeVAO=B0(N,Z),!pt.drawVAO&&Q.program&&!V&&I.angle_instanced_arrays){var Gt=!0,Pe=Q.program.attributes.map(function(Te){var Ze=A.static[Te];return Gt=Gt&&!!Ze,Ze});if(Gt&&Pe.length>0){var wo=Wt.getVAO(Wt.createVAO(Pe));pt.drawVAO=new Bn(null,null,null,function(Te,Ze){return Te.link(wo)}),pt.useVAO=!0}}return V?pt.useVAO=!0:pt.attributes=Ro(A,Z),pt.context=l0(Y,Z),pt}function j0(N,A,F){var Y=N.shared,Z=Y.context,U=N.scope();Object.keys(F).forEach(function(H){A.save(Z,"."+H);var V=F[H],O=V.append(N,A);Array.isArray(O)?U(Z,".",H,"=[",O.join(),"];"):U(Z,".",H,"=",O,";")}),A(U)}function W0(N,A,F,Y){var Z=N.shared,U=Z.gl,H=Z.framebuffer,V;pe&&(V=A.def(Z.extensions,".webgl_draw_buffers"));var O=N.constants,D=O.drawBuffer,L=O.backBuffer,X;F?X=F.append(N,A):X=A.def(H,".next"),Y||A("if(",X,"!==",H,".cur){"),A("if(",X,"){",U,".bindFramebuffer(",Ym,",",X,".framebuffer);"),pe&&A(V,".drawBuffersWEBGL(",D,"[",X,".colorAttachments.length]);"),A("}else{",U,".bindFramebuffer(",Ym,",null);"),pe&&A(V,".drawBuffersWEBGL(",L,");"),A("}",H,".cur=",X,";"),Y||A("}")}function un(N,A,F){var Y=N.shared,Z=Y.gl,U=N.current,H=N.next,V=Y.current,O=Y.next,D=N.cond(V,".dirty");Ot.forEach(function(L){var X=oe(L);if(!(X in F.state)){var Q,yt;if(X in H){Q=H[X],yt=U[X];var wt=mt(At[X].length,function(Gt){return D.def(Q,"[",Gt,"]")});D(N.cond(wt.map(function(Gt,Pe){return Gt+"!=="+yt+"["+Pe+"]"}).join("||")).then(Z,".",Lt[X],"(",wt,");",wt.map(function(Gt,Pe){return yt+"["+Pe+"]="+Gt}).join(";"),";"))}else{Q=D.def(O,".",X);var pt=N.cond(Q,"!==",V,".",X);D(pt),X in ee?pt(N.cond(Q).then(Z,".enable(",ee[X],");").else(Z,".disable(",ee[X],");"),V,".",X,"=",Q,";"):pt(Z,".",Lt[X],"(",Q,");",V,".",X,"=",Q,";")}}}),Object.keys(F.state).length===0&&D(V,".dirty=false;"),A(D)}function bn(N,A,F,Y){var Z=N.shared,U=N.current,H=Z.current,V=Z.gl;Qm(Object.keys(F)).forEach(function(O){var D=F[O];if(!(Y&&!Y(D))){var L=D.append(N,A);if(ee[O]){var X=ee[O];os(D)?L?A(V,".enable(",X,");"):A(V,".disable(",X,");"):A(N.cond(L).then(V,".enable(",X,");").else(V,".disable(",X,");")),A(H,".",O,"=",L,";")}else if(A0(L)){var Q=U[O];A(V,".",Lt[O],"(",L,");",L.map(function(yt,wt){return Q+"["+wt+"]="+yt}).join(";"),";")}else A(V,".",Lt[O],"(",L,");",H,".",O,"=",L,";")}})}function T0(N,A){Ht&&(N.instancing=A.def(N.shared.extensions,".angle_instanced_arrays"))}function bo(N,A,F,Y,Z){var U=N.shared,H=N.stats,V=U.current,O=U.timer,D=F.profile;function L(){return typeof performance=="undefined"?"Date.now()":"performance.now()"}var X,Q;function yt(Te){X=A.def(),Te(X,"=",L(),";"),typeof Z=="string"?Te(H,".count+=",Z,";"):Te(H,".count++;"),$t&&(Y?(Q=A.def(),Te(Q,"=",O,".getNumPendingQueries();")):Te(O,".beginQuery(",H,");"))}function wt(Te){Te(H,".cpuTime+=",L(),"-",X,";"),$t&&(Y?Te(O,".pushScopeStats(",Q,",",O,".getNumPendingQueries(),",H,");"):Te(O,".endQuery();"))}function pt(Te){var Ze=A.def(V,".profile");A(V,".profile=",Te,";"),A.exit(V,".profile=",Ze,";")}var Gt;if(D){if(os(D)){D.enable?(yt(A),wt(A.exit),pt("true")):pt("false");return}Gt=D.append(N,A),pt(Gt)}else Gt=A.def(V,".profile");var Pe=N.block();yt(Pe),A("if(",Gt,"){",Pe,"}");var wo=N.block();wt(wo),A.exit("if(",Gt,"){",wo,"}")}function wn(N,A,F,Y,Z){var U=N.shared;function H(O){switch(O){case th:case nh:case sh:return 2;case eh:case rh:case ih:return 3;case oh:case ah:case ch:return 4;default:return 1}}function V(O,D,L){var X=U.gl,Q=A.def(O,".location"),yt=A.def(U.attributes,"[",Q,"]"),wt=L.state,pt=L.buffer,Gt=[L.x,L.y,L.z,L.w],Pe=["buffer","normalized","offset","stride"];function wo(){A("if(!",yt,".buffer){",X,".enableVertexAttribArray(",Q,");}");var Ze=L.type,uo;if(L.size?uo=A.def(L.size,"||",D):uo=D,A("if(",yt,".type!==",Ze,"||",yt,".size!==",uo,"||",Pe.map(function(M0){return yt+"."+M0+"!=="+L[M0]}).join("||"),"){",X,".bindBuffer(",Ji,",",pt,".buffer);",X,".vertexAttribPointer(",[Q,uo,Ze,L.normalized,L.stride,L.offset],");",yt,".type=",Ze,";",yt,".size=",uo,";",Pe.map(function(M0){return yt+"."+M0+"="+L[M0]+";"}).join(""),"}"),Ht){var Bo=L.divisor;A("if(",yt,".divisor!==",Bo,"){",N.instancing,".vertexAttribDivisorANGLE(",[Q,Bo],");",yt,".divisor=",Bo,";}")}}function Te(){A("if(",yt,".buffer){",X,".disableVertexAttribArray(",Q,");",yt,".buffer=null;","}if(",Yi.map(function(Ze,uo){return yt+"."+Ze+"!=="+Gt[uo]}).join("||"),"){",X,".vertexAttrib4f(",Q,",",Gt,");",Yi.map(function(Ze,uo){return yt+"."+Ze+"="+Gt[uo]+";"}).join(""),"}")}wt===Ki?wo():wt===wu?Te():(A("if(",wt,"===",Ki,"){"),wo(),A("}else{"),Te(),A("}"))}Y.forEach(function(O){var D=O.name,L=F.attributes[D],X;if(L){if(!Z(L))return;X=L.append(N,A)}else{if(!Z(Jm))return;var Q=N.scopeAttrib(D);S.optional(function(){N.assert(A,Q+".state","missing attribute "+D)}),X={},Object.keys(new K).forEach(function(yt){X[yt]=A.def(Q,".",yt)})}V(N.link(O),H(O.info.type),X)})}function Xo(N,A,F,Y,Z){for(var U=N.shared,H=U.gl,V,O=0;O<Y.length;++O){var D=Y[O],L=D.name,X=D.info.type,Q=F.uniforms[L],yt=N.link(D),wt=yt+".location",pt;if(Q){if(!Z(Q))continue;if(os(Q)){var Gt=Q.value;if(S.command(Gt!==null&&typeof Gt!="undefined",'missing uniform "'+L+'"',N.commandStr),X===Ml||X===kl){S.command(typeof Gt=="function"&&(X===Ml&&(Gt._reglType==="texture2d"||Gt._reglType==="framebuffer")||X===kl&&(Gt._reglType==="textureCube"||Gt._reglType==="framebufferCube")),"invalid texture for uniform "+L,N.commandStr);var Pe=N.link(Gt._texture||Gt.color[0]._texture);A(H,".uniform1i(",wt,",",Pe+".bind());"),A.exit(Pe,".unbind();")}else if(X===bl||X===wl||X===_l){S.optional(function(){S.command(A0(Gt),"invalid matrix for uniform "+L,N.commandStr),S.command(X===bl&&Gt.length===4||X===wl&&Gt.length===9||X===_l&&Gt.length===16,"invalid length for matrix uniform "+L,N.commandStr)});var wo=N.global.def("new Float32Array(["+Array.prototype.slice.call(Gt)+"])"),Te=2;X===wl?Te=3:X===_l&&(Te=4),A(H,".uniformMatrix",Te,"fv(",wt,",false,",wo,");")}else{switch(X){case Iu:S.commandType(Gt,"number","uniform "+L,N.commandStr),V="1f";break;case th:S.command(A0(Gt)&&Gt.length===2,"uniform "+L,N.commandStr),V="2f";break;case eh:S.command(A0(Gt)&&Gt.length===3,"uniform "+L,N.commandStr),V="3f";break;case oh:S.command(A0(Gt)&&Gt.length===4,"uniform "+L,N.commandStr),V="4f";break;case Du:S.commandType(Gt,"boolean","uniform "+L,N.commandStr),V="1i";break;case qu:S.commandType(Gt,"number","uniform "+L,N.commandStr),V="1i";break;case sh:S.command(A0(Gt)&&Gt.length===2,"uniform "+L,N.commandStr),V="2i";break;case nh:S.command(A0(Gt)&&Gt.length===2,"uniform "+L,N.commandStr),V="2i";break;case ih:S.command(A0(Gt)&&Gt.length===3,"uniform "+L,N.commandStr),V="3i";break;case rh:S.command(A0(Gt)&&Gt.length===3,"uniform "+L,N.commandStr),V="3i";break;case ch:S.command(A0(Gt)&&Gt.length===4,"uniform "+L,N.commandStr),V="4i";break;case ah:S.command(A0(Gt)&&Gt.length===4,"uniform "+L,N.commandStr),V="4i";break}A(H,".uniform",V,"(",wt,",",A0(Gt)?Array.prototype.slice.call(Gt):Gt,");")}continue}else pt=Q.append(N,A)}else{if(!Z(Jm))continue;pt=A.def(U.uniforms,"[",T.id(L),"]")}X===Ml?(S(!Array.isArray(pt),"must specify a scalar prop for textures"),A("if(",pt,"&&",pt,'._reglType==="framebuffer"){',pt,"=",pt,".color[0];","}")):X===kl&&(S(!Array.isArray(pt),"must specify a scalar prop for cube maps"),A("if(",pt,"&&",pt,'._reglType==="framebufferCube"){',pt,"=",pt,".color[0];","}")),S.optional(function(){function jn(oa,s2){N.assert(A,oa,'bad data or missing for uniform "'+L+'".  '+s2)}function Hu(oa){S(!Array.isArray(pt),"must not specify an array type for uniform"),jn("typeof "+pt+'==="'+oa+'"',"invalid type, expected "+oa)}function Ir(oa,s2){Array.isArray(pt)?S(pt.length===oa,"must have length "+oa):jn(U.isArrayLike+"("+pt+")&&"+pt+".length==="+oa,"invalid vector, should have length "+oa,N.commandStr)}function a2(oa){S(!Array.isArray(pt),"must not specify a value type"),jn("typeof "+pt+'==="function"&&'+pt+'._reglType==="texture'+(oa===Um?"2d":"Cube")+'"',"invalid texture type",N.commandStr)}switch(X){case qu:Hu("number");break;case nh:Ir(2,"number");break;case rh:Ir(3,"number");break;case ah:Ir(4,"number");break;case Iu:Hu("number");break;case th:Ir(2,"number");break;case eh:Ir(3,"number");break;case oh:Ir(4,"number");break;case Du:Hu("boolean");break;case sh:Ir(2,"boolean");break;case ih:Ir(3,"boolean");break;case ch:Ir(4,"boolean");break;case bl:Ir(4,"number");break;case wl:Ir(9,"number");break;case _l:Ir(16,"number");break;case Ml:a2(Um);break;case kl:a2(e6);break}});var Ze=1;switch(X){case Ml:case kl:var uo=A.def(pt,"._texture");A(H,".uniform1i(",wt,",",uo,".bind());"),A.exit(uo,".unbind();");continue;case qu:case Du:V="1i";break;case nh:case sh:V="2i",Ze=2;break;case rh:case ih:V="3i",Ze=3;break;case ah:case ch:V="4i",Ze=4;break;case Iu:V="1f";break;case th:V="2f",Ze=2;break;case eh:V="3f",Ze=3;break;case oh:V="4f",Ze=4;break;case bl:V="Matrix2fv";break;case wl:V="Matrix3fv";break;case _l:V="Matrix4fv";break}if(A(H,".uniform",V,"(",wt,","),V.charAt(0)==="M"){var Bo=Math.pow(X-bl+2,2),M0=N.global.def("new Float32Array(",Bo,")");Array.isArray(pt)?A("false,(",mt(Bo,function(jn){return M0+"["+jn+"]="+pt[jn]}),",",M0,")"):A("false,(Array.isArray(",pt,")||",pt," instanceof Float32Array)?",pt,":(",mt(Bo,function(jn){return M0+"["+jn+"]="+pt+"["+jn+"]"}),",",M0,")")}else Ze>1?A(mt(Ze,function(jn){return Array.isArray(pt)?pt[jn]:pt+"["+jn+"]"})):(S(!Array.isArray(pt),"uniform value must not be an array"),A(pt));A(");")}}function Ke(N,A,F,Y){var Z=N.shared,U=Z.gl,H=Z.draw,V=Y.draw;function O(){var uo=V.elements,Bo,M0=A;return uo?((uo.contextDep&&Y.contextDynamic||uo.propDep)&&(M0=F),Bo=uo.append(N,M0)):Bo=M0.def(H,".",Ws),Bo&&M0("if("+Bo+")"+U+".bindBuffer("+Q4+","+Bo+".buffer.buffer);"),Bo}function D(){var uo=V.count,Bo,M0=A;return uo?((uo.contextDep&&Y.contextDynamic||uo.propDep)&&(M0=F),Bo=uo.append(N,M0),S.optional(function(){uo.MISSING&&N.assert(A,"false","missing vertex count"),uo.DYNAMIC&&N.assert(M0,Bo+">=0","missing vertex count")})):(Bo=M0.def(H,".",Xs),S.optional(function(){N.assert(M0,Bo+">=0","missing vertex count")})),Bo}var L=O();function X(uo){var Bo=V[uo];return Bo?Bo.contextDep&&Y.contextDynamic||Bo.propDep?Bo.append(N,F):Bo.append(N,A):A.def(H,".",uo)}var Q=X(Vs),yt=X(Qf),wt=D();if(typeof wt=="number"){if(wt===0)return}else F("if(",wt,"){"),F.exit("}");var pt,Gt;Ht&&(pt=X(Jf),Gt=N.instancing);var Pe=L+".type",wo=V.elements&&os(V.elements);function Te(){function uo(){F(Gt,".drawElementsInstancedANGLE(",[Q,wt,Pe,yt+"<<(("+Pe+"-"+_m+")>>1)",pt],");")}function Bo(){F(Gt,".drawArraysInstancedANGLE(",[Q,yt,wt,pt],");")}L?wo?uo():(F("if(",L,"){"),uo(),F("}else{"),Bo(),F("}")):Bo()}function Ze(){function uo(){F(U+".drawElements("+[Q,wt,Pe,yt+"<<(("+Pe+"-"+_m+")>>1)"]+");")}function Bo(){F(U+".drawArrays("+[Q,yt,wt]+");")}L?wo?uo():(F("if(",L,"){"),uo(),F("}else{"),Bo(),F("}")):Bo()}Ht&&(typeof pt!="number"||pt>=0)?typeof pt=="string"?(F("if(",pt,">0){"),Te(),F("}else if(",pt,"<0){"),Ze(),F("}")):Te():Ze()}function No(N,A,F,Y,Z){var U=no(),H=U.proc("body",Z);return S.optional(function(){U.commandStr=A.commandStr,U.command=U.link(A.commandStr)}),Ht&&(U.instancing=H.def(U.shared.extensions,".angle_instanced_arrays")),N(U,H,F,Y),U.compile().body}function Do(N,A,F,Y){T0(N,A),F.useVAO?F.drawVAO?A(N.shared.vao,".setVAO(",F.drawVAO.append(N,A),");"):A(N.shared.vao,".setVAO(",N.shared.vao,".targetVAO);"):(A(N.shared.vao,".setVAO(null);"),wn(N,A,F,Y.attributes,function(){return!0})),Xo(N,A,F,Y.uniforms,function(){return!0}),Ke(N,A,A,F)}function L0(N,A){var F=N.proc("draw",1);T0(N,F),j0(N,F,A.context),W0(N,F,A.framebuffer),un(N,F,A),bn(N,F,A.state),bo(N,F,A,!1,!0);var Y=A.shader.progVar.append(N,F);if(F(N.shared.gl,".useProgram(",Y,".program);"),A.shader.program)Do(N,F,A,A.shader.program);else{F(N.shared.vao,".setVAO(null);");var Z=N.global.def("{}"),U=F.def(Y,".id"),H=F.def(Z,"[",U,"]");F(N.cond(H).then(H,".call(this,a0);").else(H,"=",Z,"[",U,"]=",N.link(function(V){return No(Do,N,A,V,1)}),"(",Y,");",H,".call(this,a0);"))}Object.keys(A.state).length>0&&F(N.shared.current,".dirty=true;")}function ya(N,A,F,Y){N.batchId="a1",T0(N,A);function Z(){return!0}wn(N,A,F,Y.attributes,Z),Xo(N,A,F,Y.uniforms,Z),Ke(N,A,A,F)}function Ks(N,A,F,Y){T0(N,A);var Z=F.contextDep,U=A.def(),H="a0",V="a1",O=A.def();N.shared.props=O,N.batchId=U;var D=N.scope(),L=N.scope();A(D.entry,"for(",U,"=0;",U,"<",V,";++",U,"){",O,"=",H,"[",U,"];",L,"}",D.exit);function X(Pe){return Pe.contextDep&&Z||Pe.propDep}function Q(Pe){return!X(Pe)}if(F.needsContext&&j0(N,L,F.context),F.needsFramebuffer&&W0(N,L,F.framebuffer),bn(N,L,F.state,X),F.profile&&X(F.profile)&&bo(N,L,F,!1,!0),Y)F.useVAO?F.drawVAO?X(F.drawVAO)?L(N.shared.vao,".setVAO(",F.drawVAO.append(N,L),");"):D(N.shared.vao,".setVAO(",F.drawVAO.append(N,D),");"):D(N.shared.vao,".setVAO(",N.shared.vao,".targetVAO);"):(D(N.shared.vao,".setVAO(null);"),wn(N,D,F,Y.attributes,Q),wn(N,L,F,Y.attributes,X)),Xo(N,D,F,Y.uniforms,Q),Xo(N,L,F,Y.uniforms,X),Ke(N,D,L,F);else{var yt=N.global.def("{}"),wt=F.shader.progVar.append(N,L),pt=L.def(wt,".id"),Gt=L.def(yt,"[",pt,"]");L(N.shared.gl,".useProgram(",wt,".program);","if(!",Gt,"){",Gt,"=",yt,"[",pt,"]=",N.link(function(Pe){return No(ya,N,F,Pe,2)}),"(",wt,");}",Gt,".call(this,a0[",U,"],",U,");")}}function C(N,A){var F=N.proc("batch",2);N.batchId="0",T0(N,F);var Y=!1,Z=!0;Object.keys(A.context).forEach(function(yt){Y=Y||A.context[yt].propDep}),Y||(j0(N,F,A.context),Z=!1);var U=A.framebuffer,H=!1;U?(U.propDep?Y=H=!0:U.contextDep&&Y&&(H=!0),H||W0(N,F,U)):W0(N,F,null),A.state.viewport&&A.state.viewport.propDep&&(Y=!0);function V(yt){return yt.contextDep&&Y||yt.propDep}un(N,F,A),bn(N,F,A.state,function(yt){return!V(yt)}),(!A.profile||!V(A.profile))&&bo(N,F,A,!1,"a1"),A.contextDep=Y,A.needsContext=Z,A.needsFramebuffer=H;var O=A.shader.progVar;if(O.contextDep&&Y||O.propDep)Ks(N,F,A,null);else{var D=O.append(N,F);if(F(N.shared.gl,".useProgram(",D,".program);"),A.shader.program)Ks(N,F,A,A.shader.program);else{F(N.shared.vao,".setVAO(null);");var L=N.global.def("{}"),X=F.def(D,".id"),Q=F.def(L,"[",X,"]");F(N.cond(Q).then(Q,".call(this,a0,a1);").else(Q,"=",L,"[",X,"]=",N.link(function(yt){return No(Ks,N,A,yt,2)}),"(",D,");",Q,".call(this,a0,a1);"))}}Object.keys(A.state).length>0&&F(N.shared.current,".dirty=true;")}function lt(N,A){var F=N.proc("scope",3);N.batchId="a2";var Y=N.shared,Z=Y.current;j0(N,F,A.context),A.framebuffer&&A.framebuffer.append(N,F),Qm(Object.keys(A.state)).forEach(function(H){var V=A.state[H],O=V.append(N,F);A0(O)?O.forEach(function(D,L){F.set(N.next[H],"["+L+"]",D)}):F.set(Y.next,"."+H,O)}),bo(N,F,A,!0,!0),[Ws,Qf,Xs,Jf,Vs].forEach(function(H){var V=A.draw[H];V&&F.set(Y.draw,"."+H,""+V.append(N,F))}),Object.keys(A.uniforms).forEach(function(H){var V=A.uniforms[H].append(N,F);Array.isArray(V)&&(V="["+V.join()+"]"),F.set(Y.uniforms,"["+T.id(H)+"]",V)}),Object.keys(A.attributes).forEach(function(H){var V=A.attributes[H].append(N,F),O=N.scopeAttrib(H);Object.keys(new K).forEach(function(D){F.set(O,"."+D,V[D])})}),A.scopeVAO&&F.set(Y.vao,".targetVAO",A.scopeVAO.append(N,F));function U(H){var V=A.shader[H];V&&F.set(Y.shader,"."+H,V.append(N,F))}U(gl),U(xl),Object.keys(A.state).length>0&&(F(Z,".dirty=true;"),F.exit(Z,".dirty=true;")),F("a1(",N.shared.context,",a0,",N.batchId,");")}function nt(N){if(!(typeof N!="object"||A0(N))){for(var A=Object.keys(N),F=0;F<A.length;++F)if(Bt.isDynamic(N[A[F]]))return!0;return!1}}function _e(N,A,F){var Y=A.static[F];if(!Y||!nt(Y))return;var Z=N.global,U=Object.keys(Y),H=!1,V=!1,O=!1,D=N.global.def("{}");U.forEach(function(X){var Q=Y[X];if(Bt.isDynamic(Q)){typeof Q=="function"&&(Q=Y[X]=Bt.unbox(Q));var yt=sr(Q,null);H=H||yt.thisDep,O=O||yt.propDep,V=V||yt.contextDep}else{switch(Z(D,".",X,"="),typeof Q){case"number":Z(Q);break;case"string":Z('"',Q,'"');break;case"object":Array.isArray(Q)&&Z("[",Q.join(),"]");break;default:Z(N.link(Q));break}Z(";")}});function L(X,Q){U.forEach(function(yt){var wt=Y[yt];if(Bt.isDynamic(wt)){var pt=X.invoke(Q,wt);Q(D,".",yt,"=",pt,";")}})}A.dynamic[F]=new Bt.DynamicVariable(Kf,{thisDep:H,contextDep:V,propDep:O,ref:D,append:L}),delete A.static[F]}function To(N,A,F,Y,Z){var U=no();U.stats=U.link(Z),Object.keys(A.static).forEach(function(V){_e(U,A,V)}),Z4.forEach(function(V){_e(U,N,V)});var H=P0(N,A,F,Y,U);return L0(U,H),lt(U,H),C(U,H),e(U.compile(),{destroy:function(){H.shader.program.destroy()}})}return{next:ye,current:At,procs:function(){var N=no(),A=N.proc("poll"),F=N.proc("refresh"),Y=N.block();A(Y),F(Y);var Z=N.shared,U=Z.gl,H=Z.next,V=Z.current;Y(V,".dirty=false;"),W0(N,A),W0(N,F,null,!0);var O;Ht&&(O=N.link(Ht)),I.oes_vertex_array_object&&F(N.link(I.oes_vertex_array_object),".bindVertexArrayOES(null);");for(var D=0;D<it.maxAttributes;++D){var L=F.def(Z.attributes,"[",D,"]"),X=N.cond(L,".buffer");X.then(U,".enableVertexAttribArray(",D,");",U,".bindBuffer(",Ji,",",L,".buffer.buffer);",U,".vertexAttribPointer(",D,",",L,".size,",L,".type,",L,".normalized,",L,".stride,",L,".offset);").else(U,".disableVertexAttribArray(",D,");",U,".vertexAttrib4f(",D,",",L,".x,",L,".y,",L,".z,",L,".w);",L,".buffer=null;"),F(X),Ht&&F(O,".vertexAttribDivisorANGLE(",D,",",L,".divisor);")}return F(N.shared.vao,".currentVAO=null;",N.shared.vao,".setVAO(",N.shared.vao,".targetVAO);"),Object.keys(ee).forEach(function(Q){var yt=ee[Q],wt=Y.def(H,".",Q),pt=N.block();pt("if(",wt,"){",U,".enable(",yt,")}else{",U,".disable(",yt,")}",V,".",Q,"=",wt,";"),F(pt),A("if(",wt,"!==",V,".",Q,"){",pt,"}")}),Object.keys(Lt).forEach(function(Q){var yt=Lt[Q],wt=At[Q],pt,Gt,Pe=N.block();if(Pe(U,".",yt,"("),A0(wt)){var wo=wt.length;pt=N.global.def(H,".",Q),Gt=N.global.def(V,".",Q),Pe(mt(wo,function(Te){return pt+"["+Te+"]"}),");",mt(wo,function(Te){return Gt+"["+Te+"]="+pt+"["+Te+"];"}).join("")),A("if(",mt(wo,function(Te){return pt+"["+Te+"]!=="+Gt+"["+Te+"]"}).join("||"),"){",Pe,"}")}else pt=Y.def(H,".",Q),Gt=Y.def(V,".",Q),Pe(pt,");",V,".",Q,"=",pt,";"),A("if(",pt,"!==",Gt,"){",Pe,"}");F(Pe)}),N.compile()}(),compile:To}}function g6(){return{vaoCount:0,bufferCount:0,elementsCount:0,framebufferCount:0,shaderCount:0,textureCount:0,cubeCount:0,renderbufferCount:0,maxTextureUnits:0}}var x6=34918,y6=34919,t2=35007,b6=function(b,T){if(!T.ext_disjoint_timer_query)return null;var I=[];function it(){return I.pop()||T.ext_disjoint_timer_query.createQueryEXT()}function bt(Ht){I.push(Ht)}var at=[];function ht(Ht){var pe=it();T.ext_disjoint_timer_query.beginQueryEXT(t2,pe),at.push(pe),$t(at.length-1,at.length,Ht)}function Ct(){T.ext_disjoint_timer_query.endQueryEXT(t2)}function Dt(){this.startQueryIndex=-1,this.endQueryIndex=-1,this.sum=0,this.stats=null}var Wt=[];function Ft(){return Wt.pop()||new Dt}function Qt(Ht){Wt.push(Ht)}var ie=[];function $t(Ht,pe,At){var ye=Ft();ye.startQueryIndex=Ht,ye.endQueryIndex=pe,ye.sum=0,ye.stats=At,ie.push(ye)}var Jt=[],K=[];function ut(){var Ht,pe,At=at.length;if(At!==0){K.length=Math.max(K.length,At+1),Jt.length=Math.max(Jt.length,At+1),Jt[0]=0,K[0]=0;var ye=0;for(Ht=0,pe=0;pe<at.length;++pe){var Ot=at[pe];T.ext_disjoint_timer_query.getQueryObjectEXT(Ot,y6)?(ye+=T.ext_disjoint_timer_query.getQueryObjectEXT(Ot,x6),bt(Ot)):at[Ht++]=Ot,Jt[pe+1]=ye,K[pe+1]=Ht}for(at.length=Ht,Ht=0,pe=0;pe<ie.length;++pe){var ee=ie[pe],Lt=ee.startQueryIndex,oe=ee.endQueryIndex;ee.sum+=Jt[oe]-Jt[Lt];var Be=K[Lt],fo=K[oe];fo===Be?(ee.stats.gpuTime+=ee.sum/1e6,Qt(ee)):(ee.startQueryIndex=Be,ee.endQueryIndex=fo,ie[Ht++]=ee)}ie.length=Ht}}return{beginQuery:ht,endQuery:Ct,pushScopeStats:$t,update:ut,getNumPendingQueries:function(){return at.length},clear:function(){I.push.apply(I,at);for(var Ht=0;Ht<I.length;Ht++)T.ext_disjoint_timer_query.deleteQueryEXT(I[Ht]);at.length=0,I.length=0},restore:function(){at.length=0,I.length=0}}},w6=16384,_6=256,M6=1024,k6=34962,e2="webglcontextlost",o2="webglcontextrestored",n2=1,S6=2,z6=3;function r2(b,T){for(var I=0;I<b.length;++I)if(b[I]===T)return I;return-1}function E6(b){var T=Ve(b);if(!T)return null;var I=T.gl,it=I.getContextAttributes(),bt=I.isContextLost(),at=et(I,T);if(!at)return null;var ht=Ee(),Ct=g6(),Dt=at.extensions,Wt=b6(I,Dt),Ft=qt(),Qt=I.drawingBufferWidth,ie=I.drawingBufferHeight,$t={tick:0,time:0,viewportWidth:Qt,viewportHeight:ie,framebufferWidth:Qt,framebufferHeight:ie,drawingBufferWidth:Qt,drawingBufferHeight:ie,pixelRatio:T.pixelRatio},Jt={},K={elements:null,primitive:4,count:-1,offset:0,instances:-1},ut=uw(I,Dt),Ht=Aw(I,Ct,T,At),pe=F4(I,Dt,ut,Ct,Ht);function At(Ke){return pe.destroyBuffer(Ke)}var ye=Fw(I,Dt,Ht,Ct),Ot=B4(I,ht,Ct,T),ee=g4(I,Dt,ut,function(){Be.procs.poll()},$t,Ct,T),Lt=x4(I,Dt,ut,Ct,T),oe=q4(I,Dt,ut,ee,Lt,Ct),Be=m6(I,ht,Dt,ut,Ht,ye,ee,oe,Jt,pe,Ot,K,$t,Wt,T),fo=V4(I,oe,Be.procs.poll,$t,it,Dt,ut),ce=Be.next,Vt=I.canvas,zt=[],no=[],yo=[],Ae=[T.onDestroy],Ao=null;function ho(){if(zt.length===0){Wt&&Wt.update(),Ao=null;return}Ao=Yt.next(ho),bn();for(var Ke=zt.length-1;Ke>=0;--Ke){var No=zt[Ke];No&&No($t,null,0)}I.flush(),Wt&&Wt.update()}function So(){!Ao&&zt.length>0&&(Ao=Yt.next(ho))}function Uo(){Ao&&(Yt.cancel(ho),Ao=null)}function $0(Ke){Ke.preventDefault(),bt=!0,Uo(),no.forEach(function(No){No()})}function tn(Ke){I.getError(),bt=!1,at.restore(),Ot.restore(),Ht.restore(),ee.restore(),Lt.restore(),oe.restore(),pe.restore(),Wt&&Wt.restore(),Be.procs.refresh(),So(),yo.forEach(function(No){No()})}Vt&&(Vt.addEventListener(e2,$0,!1),Vt.addEventListener(o2,tn,!1));function Ro(){zt.length=0,Uo(),Vt&&(Vt.removeEventListener(e2,$0),Vt.removeEventListener(o2,tn)),Ot.clear(),oe.clear(),Lt.clear(),ee.clear(),ye.clear(),Ht.clear(),pe.clear(),Wt&&Wt.clear(),Ae.forEach(function(Ke){Ke()})}function B0(Ke){S(!!Ke,"invalid args to regl({...})"),S.type(Ke,"object","invalid args to regl({...})");function No(Z){var U=e({},Z);delete U.uniforms,delete U.attributes,delete U.context,delete U.vao,"stencil"in U&&U.stencil.op&&(U.stencil.opBack=U.stencil.opFront=U.stencil.op,delete U.stencil.op);function H(V){if(V in U){var O=U[V];delete U[V],Object.keys(O).forEach(function(D){U[V+"."+D]=O[D]})}}return H("blend"),H("depth"),H("cull"),H("stencil"),H("polygonOffset"),H("scissor"),H("sample"),"vao"in Z&&(U.vao=Z.vao),U}function Do(Z,U){var H={},V={};return Object.keys(Z).forEach(function(O){var D=Z[O];if(Bt.isDynamic(D)){V[O]=Bt.unbox(D,O);return}else if(U&&Array.isArray(D)){for(var L=0;L<D.length;++L)if(Bt.isDynamic(D[L])){V[O]=Bt.unbox(D,O);return}}H[O]=D}),{dynamic:V,static:H}}var L0=Do(Ke.context||{},!0),ya=Do(Ke.uniforms||{},!0),Ks=Do(Ke.attributes||{},!1),C=Do(No(Ke),!1),lt={gpuTime:0,cpuTime:0,count:0},nt=Be.compile(C,Ks,ya,L0,lt),_e=nt.draw,To=nt.batch,N=nt.scope,A=[];function F(Z){for(;A.length<Z;)A.push(null);return A}function Y(Z,U){var H;if(bt&&S.raise("context lost"),typeof Z=="function")return N.call(this,null,Z,0);if(typeof U=="function")if(typeof Z=="number")for(H=0;H<Z;++H)N.call(this,null,U,H);else if(Array.isArray(Z))for(H=0;H<Z.length;++H)N.call(this,Z[H],U,H);else return N.call(this,Z,U,0);else if(typeof Z=="number"){if(Z>0)return To.call(this,F(Z|0),Z|0)}else if(Array.isArray(Z)){if(Z.length)return To.call(this,Z,Z.length)}else return _e.call(this,Z)}return e(Y,{stats:lt,destroy:function(){nt.destroy()}})}var l0=oe.setFBO=B0({framebuffer:Bt.define.call(null,n2,"framebuffer")});function P0(Ke,No){var Do=0;Be.procs.poll();var L0=No.color;L0&&(I.clearColor(+L0[0]||0,+L0[1]||0,+L0[2]||0,+L0[3]||0),Do|=w6),"depth"in No&&(I.clearDepth(+No.depth),Do|=_6),"stencil"in No&&(I.clearStencil(No.stencil|0),Do|=M6),S(!!Do,"called regl.clear with no buffer specified"),I.clear(Do)}function j0(Ke){if(S(typeof Ke=="object"&&Ke,"regl.clear() takes an object as input"),"framebuffer"in Ke)if(Ke.framebuffer&&Ke.framebuffer_reglType==="framebufferCube")for(var No=0;No<6;++No)l0(e({framebuffer:Ke.framebuffer.faces[No]},Ke),P0);else l0(Ke,P0);else P0(null,Ke)}function W0(Ke){S.type(Ke,"function","regl.frame() callback must be a function"),zt.push(Ke);function No(){var Do=r2(zt,Ke);S(Do>=0,"cannot cancel a frame twice");function L0(){var ya=r2(zt,L0);zt[ya]=zt[zt.length-1],zt.length-=1,zt.length<=0&&Uo()}zt[Do]=L0}return So(),{cancel:No}}function un(){var Ke=ce.viewport,No=ce.scissor_box;Ke[0]=Ke[1]=No[0]=No[1]=0,$t.viewportWidth=$t.framebufferWidth=$t.drawingBufferWidth=Ke[2]=No[2]=I.drawingBufferWidth,$t.viewportHeight=$t.framebufferHeight=$t.drawingBufferHeight=Ke[3]=No[3]=I.drawingBufferHeight}function bn(){$t.tick+=1,$t.time=bo(),un(),Be.procs.poll()}function T0(){ee.refresh(),un(),Be.procs.refresh(),Wt&&Wt.update()}function bo(){return(qt()-Ft)/1e3}T0();function wn(Ke,No){S.type(No,"function","listener callback must be a function");var Do;switch(Ke){case"frame":return W0(No);case"lost":Do=no;break;case"restore":Do=yo;break;case"destroy":Do=Ae;break;default:S.raise("invalid event, must be one of frame,lost,restore,destroy")}return Do.push(No),{cancel:function(){for(var L0=0;L0<Do.length;++L0)if(Do[L0]===No){Do[L0]=Do[Do.length-1],Do.pop();return}}}}var Xo=e(B0,{clear:j0,prop:Bt.define.bind(null,n2),context:Bt.define.bind(null,S6),this:Bt.define.bind(null,z6),draw:B0({}),buffer:function(Ke){return Ht.create(Ke,k6,!1,!1)},elements:function(Ke){return ye.create(Ke,!1)},texture:ee.create2D,cube:ee.createCube,renderbuffer:Lt.create,framebuffer:oe.create,framebufferCube:oe.createCube,vao:pe.createVAO,attributes:it,frame:W0,on:wn,limits:ut,hasExtension:function(Ke){return ut.extensions.indexOf(Ke.toLowerCase())>=0},read:fo,destroy:Ro,_gl:I,_refresh:T0,poll:function(){bn(),Wt&&Wt.update()},now:bo,stats:Ct});return T.onDone(null,Xo),Xo}return E6})});var Zs=Tt((R7,E2)=>{"use strict";var Ra=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],Ca=(t,e)=>[t[0]+e[0],t[1]+e[1],t[2]+e[2]],wa=(t,e)=>[t[0]*e,t[1]*e,t[2]*e],gh=(t,e)=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2],Ol=(t,e)=>[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]],Qu=t=>Math.hypot(t[0],t[1],t[2]),Dr=t=>{let e=Qu(t)||1;return[t[0]/e,t[1]/e,t[2]/e]};function ic(t,e){let o=t.length-1,r=Math.min(Math.max(e,0),1)*o,n=Math.min(o-1,Math.floor(r)),a=r-n,s=t[Math.max(0,n-1)],i=t[n],c=t[n+1],f=t[Math.min(o,n+2)],l=[0,0,0];for(let v=0;v<3;v++)l[v]=.5*(2*i[v]+(-s[v]+c[v])*a+(2*s[v]-5*i[v]+4*c[v]-f[v])*a*a+(-s[v]+3*i[v]-3*c[v]+f[v])*a*a*a);return l}function U6(t,e){return ic(t.map(o=>[o,0,0]),e)[0]}function B6(t,e,o,r){let n={curMat:[0,0,0]},s={r:[1,0,0,0,1,0,0,0,1],t:[0,0,0],s:1},i=[];n.save=()=>{i.push({r:s.r.slice(),t:s.t.slice(),s:s.s})},n.restore=()=>{s=i.pop()};let c=(d,p)=>{let u=new Array(9);for(let h=0;h<3;h++)for(let g=0;g<3;g++)u[h*3+g]=d[h*3]*p[g]+d[h*3+1]*p[3+g]+d[h*3+2]*p[6+g];return u},f=d=>[s.r[0]*d[0]+s.r[1]*d[1]+s.r[2]*d[2],s.r[3]*d[0]+s.r[4]*d[1]+s.r[5]*d[2],s.r[6]*d[0]+s.r[7]*d[1]+s.r[8]*d[2]];n.translate=(d,p,u)=>{let h=f([d,p,u]);s.t=[s.t[0]+h[0]*s.s,s.t[1]+h[1]*s.s,s.t[2]+h[2]*s.s]},n.scale=d=>{s.s*=d},n.rotateY=d=>{let p=Math.cos(d),u=Math.sin(d);s.r=c(s.r,[p,0,u,0,1,0,-u,0,p])},n.vert=(d,p,u)=>{let h=u||n.curMat,g=f(d),m=Dr(f(p));return t.push(g[0]*s.s+s.t[0],g[1]*s.s+s.t[1],g[2]*s.s+s.t[2]),e.push(m[0],m[1],m[2]),r.push(h[0],h[1],h[2]),t.length/3-1};let l=d=>[t[d*3],t[d*3+1],t[d*3+2]],v=d=>[e[d*3],e[d*3+1],e[d*3+2]];return n.tri=(d,p,u)=>{let h=l(d),g=Ol(Ra(l(p),h),Ra(l(u),h)),m=Ca(Ca(v(d),v(p)),v(u));gh(g,m)<0?o.push(d,u,p):o.push(d,p,u)},n.box=(d,p,u,h,g,m,y)=>{let x=[[[d,p,u],[h,p,u],[d,g,u],[h,g,u],[0,0,-1]],[[h,p,m],[d,p,m],[h,g,m],[d,g,m],[0,0,1]],[[d,p,m],[d,p,u],[d,g,m],[d,g,u],[-1,0,0]],[[h,p,u],[h,p,m],[h,g,u],[h,g,m],[1,0,0]],[[d,g,u],[h,g,u],[d,g,m],[h,g,m],[0,1,0]],[[d,p,m],[h,p,m],[d,p,u],[h,p,u],[0,-1,0]]];for(let _ of x){let M=n.vert(_[0],_[4],y),w=n.vert(_[1],_[4],y),k=n.vert(_[2],_[4],y),E=n.vert(_[3],_[4],y);n.tri(M,w,k),n.tri(w,E,k)}},n.surface=(d,p,u,h)=>{h=h||{};let g=.001,m=M=>Math.min(1,Math.max(0,M)),y=[],x=[];for(let M=0;M<=p;M++){let w=[],k=[];for(let E=0;E<=u;E++){let z=M/p,P=E/u,R=d(z,P),B=Math.min(1-g,Math.max(g,z)),$=h.wrapV?P:Math.min(1-g,Math.max(g,P)),q=Ra(d(m(B+g),$),d(m(B-g),$)),ct=h.wrapV?$+g:m($+g),kt=h.wrapV?$-g:m($-g),xt=Ra(d(B,ct),d(B,kt)),vt=Ol(q,xt);Qu(vt)<1e-14&&(vt=h.inside?Ra(R,h.inside(z,P)):[0,1,0]),vt=Dr(vt),h.inside&&gh(vt,Ra(R,h.inside(z,P)))<0&&(vt=wa(vt,-1));let Et=h.mat?h.mat(z,P,R):null;w.push(n.vert(R,vt,Et)),h.double&&k.push(n.vert(R,wa(vt,-1),Et))}y.push(w),x.push(k)}let _=M=>{for(let w=0;w<p;w++)for(let k=0;k<u;k++){let E=M[w][k],z=M[w+1][k],P=M[w][k+1],R=M[w+1][k+1];n.tri(E,z,P),n.tri(z,R,P)}};_(y),h.double&&_(x)},n.ellipsoid=(d,p,u,h,g)=>{g=g||{};let m=g.warp||null;n.surface((y,x)=>{let _=y*Math.PI,M=x*Math.PI*2,w=m?m(y,x):1;return[d[0]+p[0]*w*Math.sin(_)*Math.cos(M),d[1]+p[1]*w*Math.cos(_),d[2]+p[2]*w*Math.sin(_)*Math.sin(M)]},u||10,h||14,{wrapV:!0,inside:()=>d,mat:g.mat})},n.tube=(d,p,u,h,g)=>{g=g||{};let m=40,y=[],x=null;for(let w=0;w<=m;w++){let k=w/m,E=ic(d,Math.max(0,k-.01)),z=ic(d,Math.min(1,k+.01)),P=Dr(Ra(z,E)),R;if(x)R=Dr(Ra(x,wa(P,gh(x,P))));else{let B=Math.abs(P[1])<.9?[0,1,0]:[1,0,0];R=Dr(Ol(P,B))}y.push({N:R,B:Dr(Ol(P,R))}),x=R}let _=w=>{let k=Math.min(Math.max(w,0),1)*m,E=Math.min(m-1,Math.floor(k)),z=k-E,P=y[E],R=y[E+1];return{N:Dr(Ca(wa(P.N,1-z),wa(R.N,z))),B:Dr(Ca(wa(P.B,1-z),wa(R.B,z)))}},M=g.squash||[1,1];n.surface((w,k)=>{let E=ic(d,w),z=_(w),P=p(w),R=k*Math.PI*2;return Ca(E,Ca(wa(z.N,Math.cos(R)*P*M[0]),wa(z.B,Math.sin(R)*P*M[1])))},u||12,h||8,{wrapV:!0,inside:w=>ic(d,w),mat:g.mat})},n.lathe=(d,p,u,h,g)=>{g=g||{};let m=[];for(let y=0;y<d.length-1;y++){let x=d[y+1][0]-d[y][0],_=d[y+1][1]-d[y][1];m.push(Dr([_,-x,0]))}for(let y=0;y<d.length-1;y++){let x=d[y],_=d[y+1],M=y===0||x[2]===1,w=y===d.length-2||_[2]===1,k=M?m[y]:Dr(Ca(m[y-1],m[y])),E=w?m[y]:Dr(Ca(m[y],m[y+1])),z=[],P=[];for(let R=0;R<=h;R++){let B=R/h*Math.PI*2,$=Math.cos(B),q=Math.sin(B),ct=g.mat?g.mat(B,x[1]):null,kt=g.mat?g.mat(B,_[1]):null;z.push(n.vert([p+x[0]*$,x[1],u+x[0]*q],[k[0]*$,k[1],k[0]*q],ct)),P.push(n.vert([p+_[0]*$,_[1],u+_[0]*q],[E[0]*$,E[1],E[0]*q],kt))}for(let R=0;R<h;R++)n.tri(z[R],z[R+1],P[R]),n.tri(z[R+1],P[R+1],P[R])}},n}E2.exports={createBuilder:B6,catmull:ic,curve1:U6,sub:Ra,add:Ca,mul:wa,dot:gh,cross:Ol,norm:Dr,len:Qu}});var N2=Tt((C7,L2)=>{"use strict";var{norm:xh,add:yh,mul:rs,sub:j6,cross:A2}=Zs(),T2=Math.PI*2,W6=(t,e,o)=>{let r=Math.min(1,Math.max(0,(o-t)/(e-t)));return r*r*(3-2*r)};function V6(t){let e=t>>>0;return()=>{e|=0,e=e+1831565813|0;let o=Math.imul(e^e>>>15,1|e);return o=o+Math.imul(o^o>>>7,61|o)^o,((o^o>>>14)>>>0)/4294967296}}function X6(t,e,o,r,n,a){let s=(d,p)=>[7,d*a,p];t.curMat=[0,0,0],t.box(e-a*1.36,r,o-a*1.36,e+a*1.36,r+.22,o+a*1.36),t.lathe([[a*1.24,r+.22,1],[a*1.3,r+.27],[a*1.31,r+.32],[a*1.26,r+.37,1],[a*1.1,r+.4],[a*1.14,r+.44,1],[a*1.18,r+.47],[a*1.1,r+.52,1],[a*.96,r+.55]],e,o,56,{mat:s});let i=r+.55,c=n-i,f=20,l=6,v=a*.075;return t.surface((d,p)=>{let u=i+d*c,h=a*(.96-.12*d),g=p*T2,m=p*f%1,y=h-v*4*m*(1-m);return[e+y*Math.cos(g),u,o+y*Math.sin(g)]},10,f*l,{wrapV:!0,inside:d=>[e,i+d*c,o],mat:(d,p)=>[7,p*T2*a,i+d*c]}),t.lathe([[a*.8,n-.02,1],[a*.9,n+.02],[a*.9,n+.07,1],[a*.82,n+.09,1],[a*.86,n+.13],[a*1.06,n+.2],[a*1.22,n+.28],[a*1.28,n+.33,1]],e,o,56,{mat:s}),t.curMat=[0,0,0],t.box(e-a*1.42,n+.33,o-a*1.42,e+a*1.42,n+.53,o+a*1.42),n+.53}function Y6(t,e,o){t.curMat=[1,0,0],t.lathe([[e*1.1,0,1],[e*1.1,o*.14,1],[e*1.04,o*.14,1],[e*1.04,o*.2],[e*.97,o*.26,1],[e*.95,o*.26,1],[e*.95,o*.8,1],[e*.98,o*.8,1],[e*1.03,o*.86],[e*1.05,o*.92,1],[e*1.05,o,1],[e*.5,o,1],[0,o]],0,0,72)}function K6(t,e,o,r,n){t.save(),t.translate(e,0,o),Y6(t,r,n),t.restore()}function Z6(t,e,o,r,n,a){let s=V6(r),i=a?xh([a[0],0,a[1]]):null;t.save(),t.translate(e,0,o),t.scale(n||1),t.curMat=[3,0,0],t.lathe([[.17,0,1],[.2,.02],[.28,.13],[.36,.3],[.395,.47],[.38,.62],[.32,.74],[.29,.8],[.292,.82,1],[.325,.84],[.335,.88,1],[.3,.905,1],[.275,.895,1],[.272,.85]],0,0,48),t.curMat=[5,0,0],t.lathe([[.272,.85,1],[.1,.868],[0,.872]],0,0,24);let c=11,f=.86;for(let l=0;l<c;l++){let v=l>=c-2,d=l*2.399963+s()*.5,p=[Math.cos(d),0,Math.sin(d)],u=[-Math.sin(d),0,Math.cos(d)],h=l*.618%1,g=v?.06+s()*.06:.12+.62*h,m=1;if(i){let vt=p[0]*i[0]+p[2]*i[2];m=.25+.75*W6(-.7,.5,vt),g*=m}let y=v?1.1+s()*.25:.85+.55*(1-h*.55)+s()*.15,x=v?1+s()*.2:.95+s()*.28,_=v?.055:.215+s()*.05,M=.04+s()*.05,w=[p[0]*M,f,p[2]*M],k=[w[0]+p[0]*Math.sin(g)*y*.92,w[1]+Math.cos(g)*y,w[2]+p[2]*Math.sin(g)*y*.92],E=[w[0]+p[0]*Math.sin(g*.5)*y*.45,w[1]+y*.5,w[2]+p[2]*Math.sin(g*.5)*y*.45];t.curMat=[4,0,0],t.tube([w,E,k],vt=>.02-.008*vt,8,7);let z=24,P=g*.9+.05,R=g+(v?.12:(.95+.45*h)*(.35+.65*m)),B=[k],$=[],q=k;for(let vt=0;vt<z;vt++){let Et=vt/z,Pt=P+(R-P)*Et*Et,ne=[p[0]*Math.sin(Pt),Math.cos(Pt),p[2]*Math.sin(Pt)];$.push(ne),q=yh(q,rs(ne,x/z)),B.push(q)}$.push($[$.length-1]);let ct=vt=>{let Et=vt*z,Pt=Math.min(z-1,Math.floor(Et)),ne=Et-Pt;return yh(rs(B[Pt],1-ne),rs(B[Pt+1],ne))},kt=vt=>{let Et=vt*z,Pt=Math.min(z,Math.floor(Et)),ne=Math.min(z,Pt+1),ze=Et-Pt;return xh(yh(rs($[Pt],1-ze),rs($[ne],ze)))},xt=(s()-.5)*.5;t.curMat=[2,0,0],t.surface((vt,Et)=>{let Pt=Et*2-1,ne=ct(vt),ze=kt(vt),Qe=xt*vt,ve=yh(rs(u,Math.cos(Qe)),rs(A2(ze,u),Math.sin(Qe)));ve=xh(j6(ve,rs(ze,ve[0]*ze[0]+ve[1]*ze[1]+ve[2]*ze[2])));let He=xh(A2(ve,ze)),Fe=_*Math.pow(Math.sin(Math.PI*Math.pow(vt,.72)),.85),ot=.3*Fe*Math.abs(Pt)+.012*Math.sin(vt*40+Pt*2)*Math.abs(Pt)*(v?0:1),W=-.1*Fe*Pt*Pt*Pt*Pt,gt=ot+W;return[ne[0]+ve[0]*Pt*Fe+He[0]*gt,ne[1]+ve[1]*Pt*Fe+He[1]*gt,ne[2]+ve[2]*Pt*Fe+He[2]*gt]},14,8,{double:!0,mat:(vt,Et)=>[2,Et*2-1,vt]})}t.restore()}L2.exports={addFlutedColumn:X6,addStatue:K6,addPlant:Z6}});var as=Tt(($7,$2)=>{"use strict";var It={xc:7,r:2.5,spring:4.7};It.x0=It.xc-It.r;It.x1=It.xc+It.r;It.top=It.spring+It.r;var Xn=.06,v0=.1,O2=.08,bh=It.r,wh=[It.x0+bh/3,It.x0+2*bh/3,It.xc+bh/3,It.xc+2*bh/3],cc=.28,Ju=[.95,1.65,2.35,3.05,3.75],R2=[1.05,1.8],Rl=[8,0,0],_r=[0,0,0];function Fr(t,e,o,r,n,a,s,i){t.box(Math.min(e,n),Math.min(o,a),Math.min(r,s),Math.max(e,n),Math.max(o,a),Math.max(r,s),i)}function lc(t,e,o,r,n,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),f=t.vert(r,a,s),l=t.vert(n,a,s);t.tri(i,c,f),t.tri(i,f,l)}function _h(t,e,o,r,n,a,s=48,i=0,c=Math.PI){let f=(l,v,d)=>[It.xc+v*Math.cos(l),It.spring+v*Math.sin(l),d];for(let l=0;l<s;l++){let v=i+(c-i)*l/s,d=i+(c-i)*(l+1)/s,p=(v+d)/2;lc(t,f(v,e,n),f(d,e,n),f(d,o,n),f(v,o,n),[0,0,1],a),lc(t,f(v,o,r),f(d,o,r),f(d,e,r),f(v,e,r),[0,0,-1],a),lc(t,f(v,e,r),f(d,e,r),f(d,e,n),f(v,e,n),[-Math.cos(p),-Math.sin(p),0],a),lc(t,f(d,o,r),f(v,o,r),f(v,o,n),f(d,o,n),[Math.cos(p),Math.sin(p),0],a)}}function Q6(t){let r=a=>[It.xc+It.r*Math.cos(a),It.spring+It.r*Math.sin(a)],n=a=>{let s=Math.cos(a),i=Math.sin(a),c=Math.abs(s)>1e-6?It.r/Math.abs(s):1/0,f=i>1e-6?(8-It.spring)/i:1/0,l=Math.min(c,f);return[Math.min(It.x1,Math.max(It.x0,It.xc+s*l)),Math.min(8,It.spring+i*l)]};for(let a=0;a<48;a++){let s=Math.PI*a/48,i=Math.PI*(a+1)/48,c=r(s),f=r(i),l=n(s),v=n(i);for(let[p,u]of[[.35,1],[-.35,-1]])lc(t,[c[0],c[1],p],[f[0],f[1],p],[v[0],v[1],p],[l[0],l[1],p],[0,0,u],_r);let d=(s+i)/2;lc(t,[c[0],c[1],-.35],[f[0],f[1],-.35],[f[0],f[1],.35],[c[0],c[1],.35],[-Math.cos(d),-Math.sin(d),0],_r)}}function J6(t){Fr(t,-.35,0,-.35,It.x0,8,.35,_r),Fr(t,It.x1,0,-.35,14+.35,8,.35,_r),Q6(t),C2(t)}function C2(t){Fr(t,It.x0-.32,.3,.35,It.x0,It.spring,.35+.07,_r),Fr(t,It.x1,.3,.35,It.x1+.32,It.spring,.35+.07,_r),Fr(t,It.x0-.32-.05,0,.35,It.x0,.3,.35+.07+.04,_r),Fr(t,It.x1,0,.35,It.x1+.32+.05,.3,.35+.07+.04,_r),Fr(t,It.x0-.32-.06,It.spring-.12,.35,It.x0,It.spring,.35+.07+.05,_r),Fr(t,It.x1,It.spring-.12,.35,It.x1+.32+.06,It.spring,.35+.07+.05,_r),_h(t,It.r,It.r+.32,.35,.35+.07,_r),_h(t,It.r+.32,It.r+.32+.06,.35,.35+.07+.03,_r),Fr(t,It.xc-.22,It.top-.08,.35,It.xc+.22,It.top+.32+.12,.35+.07+.06,_r)}function t_(t,e){e=e||"all";let o=e==="all",r=o||e==="fixed",n=-O2/2,a=O2/2,s=(d,p,u,h,g=0)=>Fr(t,d-g,p,n,u+g,h,a,Rl),i=d=>It.spring+Math.sqrt(Math.max(0,It.r*It.r-(d-It.xc)*(d-It.xc))),c=e==="right"?It.xc:It.x0,f=e==="left"?It.xc:It.x1,l=d=>o||e==="left"&&d<It.xc||e==="right"&&d>It.xc,v=o?null:It.spring-.06;if(r){s(It.x0,0,It.x0+v0,It.spring),s(It.x1-v0,0,It.x1,It.spring),_h(t,It.r-v0,It.r,n,a,Rl,64),s(It.x0,0,It.x1,.05),s(It.x0,It.spring-.06,It.x1,It.spring+.06);for(let d of R2)_h(t,d-Xn/2,d+Xn/2,n,a,Rl,48)}if(o){s(It.x0,0,It.x1,cc),s(It.xc-v0/2,0,It.xc+v0/2,It.top-v0*.5);for(let d of wh)s(d-Xn/2,cc,d+Xn/2,i(d)-v0*.5);for(let d of Ju)s(It.x0,d-Xn/2,It.x1,d+Xn/2)}else if(e==="fixed"){s(It.xc-v0/2,It.spring+.06,It.xc+v0/2,It.top-v0*.5);for(let d of wh)s(d-Xn/2,It.spring+.06,d+Xn/2,i(d)-v0*.5)}else{let d=e==="left"?It.x0+v0:It.x1-v0;s(Math.min(d,d+(e==="left"?v0*.8:-v0*.8)),.05,Math.max(d,d+(e==="left"?v0*.8:-v0*.8)),v),s(c,.05,f,cc),s(c,v-.07,f,v);let p=e==="left"?It.xc-v0/2:It.xc;s(p,.05,p+v0/2,v);for(let u of wh)l(u)&&s(u-Xn/2,cc,u+Xn/2,v-.07);for(let u of Ju)s(c,u-Xn/2,f,u+Xn/2)}for(let d of[-1,1]){let p=It.xc+d*.16;l(p)&&(Fr(t,p-.02,1.05,a,p+.02,1.13,a+.06,Rl),Fr(t,p-(d>0?0:.14),1.07,a+.05,p+(d>0?.14:0),1.11,a+.08,Rl))}}function e_(t){t=t||"all";let e=[],o=0,{x0:r,x1:n,xc:a,r:s,spring:i}=It;if(t!=="fixed"){let f=t==="right"?a:r,l=t==="left"?a:n;if(e.push([f,0,o],[l,0,o],[l,i,o],[f,0,o],[l,i,o],[f,i,o]),t!=="all")return e}let c=48;for(let f=0;f<c;f++){let l=Math.PI*f/c,v=Math.PI*(f+1)/c;e.push([a,i,o],[a+s*Math.cos(l),i+s*Math.sin(l),o],[a+s*Math.cos(v),i+s*Math.sin(v),o])}return e}var Jo=t=>t.toFixed(4);function o_(){let t=wh.map(r=>`vb = max(vb, barCover(abs(q.x - ${Jo(r)}), ${Jo(Xn/2)}, soft));`).join(`
		`),e=Ju.map(r=>`hb = max(hb, barCover(abs(q.y - ${Jo(r)}), ${Jo(Xn/2)}, soft));`).join(`
		`),o=R2.map(r=>`ab = max(ab, barCover(abs(rr - ${Jo(r)}), ${Jo(Xn/2)}, soft));`).join(`
		`);return`
	float barCover(float d, float hw, float soft) {
		return 1.0 - smoothstep(hw - soft, hw + soft, d);
	}

	// how open the doorway is at a point (x, y) on a plane, 0..1
	float doorOpen(vec2 q, float soft) {
		float side = smoothstep(${Jo(It.x0)} - soft, ${Jo(It.x0)} + soft, q.x)
		           * (1.0 - smoothstep(${Jo(It.x1)} - soft, ${Jo(It.x1)} + soft, q.x));
		float above = smoothstep(-soft, soft, q.y);
		float rr = length(q - vec2(${Jo(It.xc)}, ${Jo(It.spring)}));
		float arch = q.y < ${Jo(It.spring)} ? 1.0 : 1.0 - smoothstep(${Jo(It.r)} - soft, ${Jo(It.r)} + soft, rr);
		return side * above * arch;
	}

	// light that reaches floor point p through the door, 0..1
	float doorLight(vec3 p, vec3 toLight) {
		if (p.z < 0.3 || toLight.z > -0.01) return 0.0;
		// through the inner face of the wall
		float tIn = (${Jo(.35)} - p.z) / toLight.z;
		float tMid = (0.0 - p.z) / toLight.z;
		float tOut = (${Jo(-.35)} - p.z) / toLight.z;
		vec2 qIn = (p + toLight * tIn).xy;
		vec2 q = (p + toLight * tMid).xy;
		vec2 qOut = (p + toLight * tOut).xy;
		float dist = length(toLight * tMid);
		float soft = 0.006 + 0.016 * dist;
		float open = doorOpen(qIn, soft) * doorOpen(qOut, soft);
		if (open <= 0.0) return 0.0;

		// the frame: outer jambs, arched head, transom, rails, stiles, bars
		float rr = length(q - vec2(${Jo(It.xc)}, ${Jo(It.spring)}));
		float vb = barCover(abs(q.x - ${Jo(It.xc)}), ${Jo(v0/2)}, soft);
		${t}
		float hb = barCover(abs(q.y - ${Jo(It.spring)}), 0.06, soft);
		hb = max(hb, 1.0 - smoothstep(${Jo(cc)} - soft, ${Jo(cc)} + soft, q.y));
		float hRows = 0.0;
		{
			float hb2 = 0.0;
			${e.replace(/hb = max\(hb,/g,"hb2 = max(hb2,")}
			hRows = q.y < ${Jo(It.spring)} ? hb2 : 0.0;
		}
		float ab = 0.0;
		${o}
		ab = q.y > ${Jo(It.spring)} ? ab : 0.0;
		float frame = max(
			barCover(abs(q.x - ${Jo(It.x0+v0/2)}), ${Jo(v0/2)}, soft),
			barCover(abs(q.x - ${Jo(It.x1-v0/2)}), ${Jo(v0/2)}, soft));
		frame = q.y < ${Jo(It.spring)} ? frame : barCover(abs(rr - ${Jo(It.r-v0/2)}), ${Jo(v0/2)}, soft);
		float cover = max(max(max(vb, hb), max(hRows, ab)), frame);
		return open * (1.0 - cover * 0.92);
	}`}$2.exports={addEntranceWall:J6,addSurround:C2,addFrames:t_,glassPanes:e_,doorLightGLSL:o_,DOOR:It,WALL:.35}});var hc=Tt((P7,G2)=>{"use strict";var Js=1.1583333333333334,ti=(13.05-8*.16)/9,ed=Js+.16,od=ti+.16,Pa=14/2-7.75/2,Mr=15,Cl=Pa+7.75,$a=Mr+13.05,kr=.3,Ia={y:8+.18,inset:.15},Qs={y:8+.36,inset:kr},nd=8+.2,$l=8+.62,rd=8+.9,ad=.016,D2=.28,F2=.66,n_=(()=>{let t=[-.15,1,.3],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>o/e)})(),r_=(()=>{let t=[.42,1,-.32],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>o/e)})(),a_=[9,0,0],_n=[10,0,0];function fc(t,e,o,r,n,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),f=t.vert(r,a,s),l=t.vert(n,a,s);t.tri(i,c,f),t.tri(i,f,l)}function Yn(t,e,o,r,n,a,s){fc(t,[e,a,o],[r,a,o],[r,a,n],[e,a,n],[0,-1,0],s)}function td(t,e,o,r,n,a,s,i){fc(t,[e,a,o],[r,a,o],[r,s,o],[e,s,o],[0,0,1],i),fc(t,[r,a,n],[e,a,n],[e,s,n],[r,s,n],[0,0,-1],i),fc(t,[e,a,n],[e,a,o],[e,s,o],[e,s,n],[1,0,0],i),fc(t,[r,a,o],[r,a,n],[r,s,n],[r,s,o],[-1,0,0],i)}function P2(t,e,o,r,n){Yn(t,e[0],e[1],e[2],o[1],r,n),Yn(t,e[0],o[3],e[2],e[3],r,n),Yn(t,e[0],o[1],o[0],o[3],r,n),Yn(t,o[2],o[1],e[2],o[3],r,n)}var I2=t=>Pa+t*ed,q2=t=>Mr+t*od;function s_(t,e,o=48){let r=[Pa-kr,Mr-kr,Cl+kr,$a+kr],n=(f,l)=>[f[0]+l,f[1]+l,f[2]-l,f[3]-l],a=n(r,Ia.inset),s=n(r,Qs.inset);Yn(t,0,0,14,r[1],8,e),Yn(t,0,r[3],14,o,8,e),Yn(t,0,r[1],r[0],r[3],8,e),Yn(t,r[2],r[1],14,r[3],8,e);let i=.06,c=.06;t.box(r[0]-i,8-c,r[1]-i,r[2]+i,8,r[1],_n),t.box(r[0]-i,8-c,r[3],r[2]+i,8,r[3]+i,_n),t.box(r[0]-i,8-c,r[1],r[0],8,r[3],_n),t.box(r[2],8-c,r[1],r[2]+i,8,r[3],_n),td(t,...r.slice(0,2),...r.slice(2),8,Ia.y,_n),P2(t,r,a,Ia.y,_n),td(t,...a.slice(0,2),...a.slice(2),Ia.y,Qs.y,_n),P2(t,a,s,Qs.y,_n);for(let f=1;f<6;f++){let l=I2(f)-.16;t.box(l,nd,Mr,l+.16,Qs.y,$a,_n)}for(let f=1;f<9;f++){let l=q2(f)-.16;t.box(Pa,nd,l,Cl,Qs.y,l+.16,_n)}for(let f=0;f<9;f++)for(let l=0;l<6;l++){let v=I2(l),d=q2(f);td(t,v,d,v+Js,d+ti,Qs.y,rd,_n),Yn(t,v,d,v+Js,d+ti,rd,a_),i_(t,v+Js/2,d+ti/2,Js/2,ti/2)}}function i_(t,e,o,r,n){let a=$l,s=ad;Yn(t,e-r,o-s,e+r,o+s,a,_n),Yn(t,e-s,o-n,e+s,o+n,a,_n);for(let i of[1,-1]){let c=Math.hypot(r,n),f=r/c,l=i*n/c,v=-l*s,d=f*s;fc(t,[e-f*c+v,a,o-l*c+d],[e+f*c+v,a,o+l*c+d],[e+f*c-v,a,o+l*c-d],[e-f*c-v,a,o-l*c-d],[0,-1,0],_n)}for(let i of[D2,F2]){let c=i*r,f=i*n;Yn(t,e-c-s,o-f-s,e+c+s,o-f+s,a,_n),Yn(t,e-c-s,o+f-s,e+c+s,o+f+s,a,_n),Yn(t,e-c-s,o-f+s,e-c+s,o+f-s,a,_n),Yn(t,e+c-s,o-f+s,e+c+s,o+f-s,a,_n)}}var po=t=>t.toFixed(4);function c_(){return`
	// by day the sun, high and a little towards the entrance; by night
	// the moon, lower and from the other side, so its squares of light
	// reach across the floor to the foot of the wall. (When the light is
	// switched, the squares slide from one to the other.)
	const vec3 SKY_SUN_DAY = vec3(${n_.map(po).join(", ")});
	const vec3 SKY_MOON = vec3(${r_.map(po).join(", ")});
	vec3 skySun() { return normalize(mix(SKY_SUN_DAY, SKY_MOON, night)); }
	#define SKY_SUN skySun()

	float rectOpen(vec2 q, vec4 r, float soft) {
		vec2 lo = smoothstep(r.xy - soft, r.xy + soft, q);
		vec2 hi = 1.0 - smoothstep(r.zw - soft, r.zw + soft, q);
		return lo.x * lo.y * hi.x * hi.y;
	}

	// inside a pane (not on a beam)? 0..1
	float paneOpen(vec2 q, float soft) {
		vec2 rel = q - vec2(${po(Pa)}, ${po(Mr)});
		vec2 pitch = vec2(${po(ed)}, ${po(od)});
		vec2 cell = floor(rel / pitch);
		if (cell.x < 0.0 || cell.y < 0.0 || cell.x > ${po(5)} || cell.y > ${po(8)}) return 0.0;
		vec2 loc = rel - cell * pitch;
		return rectOpen(loc, vec4(0.0, 0.0, ${po(Js)}, ${po(ti)}), soft);
	}

	float barCov(float d, float soft) {
		return 1.0 - smoothstep(${po(ad)} - soft, ${po(ad)} + soft, d);
	}

	// sunlight reaching point p through the skylight, 0..1
	float skylightAt(vec3 p) {
		if (p.y > ${po(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q0 = (p + L * ((${po(8)} - p.y) / L.y)).xz;
		vec2 q1 = (p + L * ((${po(Ia.y)} - p.y) / L.y)).xz;
		vec2 qb = (p + L * ((${po(nd)} - p.y) / L.y)).xz;
		vec2 q2 = (p + L * ((${po(Qs.y)} - p.y) / L.y)).xz;
		float tG = (${po($l)} - p.y) / L.y;
		vec2 qg = (p + L * tG).xz;
		vec2 qt = (p + L * ((${po(rd)} - p.y) / L.y)).xz;
		float soft = 0.004 + 0.007 * tG;
		float open = rectOpen(q0, vec4(${po(Pa-kr)}, ${po(Mr-kr)}, ${po(Cl+kr)}, ${po($a+kr)}), soft)
		           * rectOpen(q1, vec4(${po(Pa-kr+Ia.inset)}, ${po(Mr-kr+Ia.inset)}, ${po(Cl+kr-Ia.inset)}, ${po($a+kr-Ia.inset)}), soft)
		           * paneOpen(qb, soft) * paneOpen(q2, soft) * paneOpen(qt, soft);
		if (open <= 0.0) return 0.0;
		// the glazing, measured from the centre of this pane
		vec2 rel = qg - vec2(${po(Pa)}, ${po(Mr)});
		vec2 pitch = vec2(${po(ed)}, ${po(od)});
		vec2 paneHalf = vec2(${po(Js/2)}, ${po(ti/2)});
		vec2 c = rel - floor(rel / pitch) * pitch - paneHalf;
		vec2 ac = abs(c);
		vec2 an = ac / paneHalf;                       // 0 at the centre, 1 at the pane's edge
		float hm = min(paneHalf.x, paneHalf.y);
		float ring = max(an.x, an.y);
		float cover = max(barCov(ac.x, soft), barCov(ac.y, soft));
		cover = max(cover, barCov(abs(an.x - an.y) * hm * 0.7071, soft));
		cover = max(cover, barCov(abs(ring - ${po(D2)}) * hm, soft));
		cover = max(cover, barCov(abs(ring - ${po(F2)}) * hm, soft));
		return open * (1.0 - cover * 0.9);
	}

	// the same light for the beams in the air: the whole opening glows a
	// little, and the panes and bars show in it, softly
	float skylightVol(vec3 p) {
		if (p.y > ${po(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q = (p + L * ((${po($l)} - p.y) / L.y)).xz;
		float open = rectOpen(q, vec4(${po(Pa)}, ${po(Mr)}, ${po(Cl)}, ${po($a)}), 0.25);
		if (open <= 0.0) return 0.0;
		return open * (0.13 + 0.87 * skylightAt(p));
	}

	// light thrown back up by the bright squares on the floor: strongest
	// on what stands beside them and faces them (the lower walls, the
	// pillars, the statues, the ceiling above), fading with distance
	float skylightBounce(vec3 p, vec3 n) {
		if (p.x > 14.2 || p.x < -0.4) return 0.0;
		vec3 L = SKY_SUN;
		vec2 c = vec2(${po(14/2)}, ${po((Mr+$a)/2)}) - L.xz * (${po($l)} / L.y);
		vec2 d = max(abs(p.xz - c) - vec2(${po(7.75/2)}, ${po(13.05/2)}), 0.0);
		float fall = 1.0 / (1.0 + 0.09 * (dot(d, d) + p.y * p.y * 0.6));
		vec3 to = normalize(vec3(c.x, -0.4, c.y) - p);
		return fall * (0.3 + 0.7 * max(dot(n, to), 0.0));
	}

	// a soft daylight glow under the lantern
	float skylightGlow(vec3 p) {
		float z = smoothstep(${po(Mr-3)}, ${po(Mr+2)}, p.z)
		        * (1.0 - smoothstep(${po($a-2)}, ${po($a+3)}, p.z));
		float x = 1.0 - 0.35 * smoothstep(${po(7.75/2)}, ${po(14/2)}, abs(p.x - ${po(14/2)}));
		return z * x;
	}`}G2.exports={addSkylight:s_,skylightGLSL:c_,Z_START:Mr,Z_END:$a,GLASS_Y:$l,HEIGHT:8}});var Tn=Tt((I7,W2)=>{"use strict";var dc=as(),ld=8,m0=.35,ue={x0:13.65,x1:38.12,z0:41,z1:47.2,zc:44.1,hallEnd:50.65,spring:5.6,crown:ld},H2=(ue.z1-ue.z0)/2,sd=ue.crown-ue.spring,cd=(sd*sd+H2*H2)/(2*sd),fd=ue.crown-cd;function uc(t){let e=t-ue.zc;return fd+Math.sqrt(Math.max(0,cd*cd-e*e))}var Je={first:17.43,pitch:4.4,count:5,halfW:1.2,sill:.75,spring:4.3},na=Array.from({length:Je.count},(t,e)=>Je.first+e*Je.pitch),B2=na.slice(1).map(t=>t-Je.pitch/2),l_=[na[0],na[2],na[4]],kh=[na[1],na[3]],ir={r:1.3,sill:.62,spring:3.3},n0=[0,0,0],Pl=[11,0,0],ss=[10,0,0],Il=[8,0,0];function dn(t,e,o,r,n,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),f=t.vert(r,a,s),l=t.vert(n,a,s);t.tri(i,c,f),t.tri(i,f,l)}function cr(t,e,o,r,n,a,s,i){t.box(Math.min(e,n),Math.min(o,a),Math.min(r,s),Math.max(e,n),Math.max(o,a),Math.max(r,s),i)}function ql(t,e){let{u0:o,u1:r,w0:n,w1:a,top:s,holes:i,mat:c}=e,f=new Set([o,r]);for(let h of i){f.add(h.u0),f.add(h.u1);let g=Math.max(8,Math.ceil((h.u1-h.u0)/(h.step||.08)));for(let m=1;m<g;m++)f.add(h.u0+(h.u1-h.u0)*m/g)}for(let h of e.cuts||[])f.add(h);let l=e.topStep||.5;for(let h=o;h<r;h+=l)f.add(h);let v=[...f].filter(h=>h>=o-1e-9&&h<=r+1e-9).sort((h,g)=>h-g),d=(h,g)=>h.bot?h.bot(g):h.bottom,p=(h,g)=>{let m=s(h),y=g.map(M=>[Math.max(0,d(M,h)),Math.min(M.head(h),m)]).filter(M=>M[1]>M[0]).sort((M,w)=>M[0]-w[0]),x=[],_=0;for(let M of y)M[0]>_+1e-6&&x.push([_,M[0]]),_=Math.max(_,M[1]);return m>_+1e-6&&x.push([_,m]),x},u=(h,g,m)=>[h,g,m];for(let h=0;h<v.length-1;h++){let g=v[h],m=v[h+1],y=(g+m)/2,x=i.filter(z=>y>z.u0&&y<z.u1),_=x.length?Math.max(g,Math.max(...x.map(z=>z.u0))+1e-7):g,M=x.length?Math.min(m,Math.min(...x.map(z=>z.u1))-1e-7):m,w=p(_,x),k=p(M,x),E=Math.min(w.length,k.length);for(let z=0;z<E;z++){let[P,R]=w[z],[B,$]=k[z];R-P<1e-6&&$-B<1e-6||(dn(t,u(g,P,a),u(m,B,a),u(m,$,a),u(g,R,a),[0,0,1],c),e.frontOnly||dn(t,u(m,B,n),u(g,P,n),u(g,R,n),u(m,$,n),[0,0,-1],c))}}e.noEnds||(dn(t,u(o,0,n),u(o,0,a),u(o,s(o),a),u(o,s(o),n),[-1,0,0],c),dn(t,u(r,0,a),u(r,0,n),u(r,s(r),n),u(r,s(r),a),[1,0,0],c));for(let h of i){if(h.noReveal)continue;let g=h.mat||e.revealMat||c,m=Math.max(0,d(h,h.u0+1e-7)),y=Math.max(0,d(h,h.u1-1e-7)),x=Math.min(h.head(h.u0+1e-7),s(h.u0)),_=Math.min(h.head(h.u1-1e-7),s(h.u1));x>m+1e-6&&dn(t,u(h.u0,m,a),u(h.u0,m,n),u(h.u0,x,n),u(h.u0,x,a),[1,0,0],g),_>y+1e-6&&dn(t,u(h.u1,y,n),u(h.u1,y,a),u(h.u1,_,a),u(h.u1,_,n),[-1,0,0],g);let M=Math.max(8,Math.ceil((h.u1-h.u0)/(h.step||.06)));for(let w=0;w<M;w++){let k=h.u0+(h.u1-h.u0)*w/M,E=h.u0+(h.u1-h.u0)*(w+1)/M,z=Math.max(k,h.u0+1e-7),P=Math.min(E,h.u1-1e-7),R=Math.min(h.head(z),s(k)),B=Math.min(h.head(P),s(E));if(!(R>=s(k)-1e-6&&B>=s(E)-1e-6)){let ct=E-k,kt=B-R,xt=Math.hypot(ct,kt)||1;dn(t,u(k,R,n),u(E,B,n),u(E,B,a),u(k,R,a),[kt/xt,-ct/xt,0],g)}let $=d(h,z),q=d(h,P);if($>1e-6||q>1e-6){let ct=E-k,kt=q-$,xt=Math.hypot(ct,kt)||1;dn(t,u(E,q,n),u(k,$,n),u(k,$,a),u(E,q,a),[-kt/xt,ct/xt,0],g)}}}}var id=(t,e,o)=>r=>{let n=r-t;return o+Math.sqrt(Math.max(0,e*e-n*n))};function f_(t,e){let o=ir.r,r=ir.sill,n=ir.spring,a=ue.z0,s=24,i=(p,u,h)=>[e+Math.cos(p)*u,h,a-Math.sin(p)*u];for(let p=0;p<s;p++){let u=Math.PI*p/s,h=Math.PI*(p+1)/s,g=[-Math.cos(u),0,Math.sin(u)],m=[-Math.cos(h),0,Math.sin(h)],y=[t.vert(i(u,o,r),g,n0),t.vert(i(h,o,r),m,n0),t.vert(i(h,o,n),m,n0),t.vert(i(u,o,n),g,n0)];t.tri(y[0],y[1],y[2]),t.tri(y[0],y[2],y[3])}let c=12,f=(p,u)=>[e+Math.cos(p)*Math.cos(u)*o,n+Math.sin(u)*o,a-Math.sin(p)*Math.cos(u)*o],l=(p,u)=>[-Math.cos(p)*Math.cos(u),-Math.sin(u),Math.sin(p)*Math.cos(u)];for(let p=0;p<s;p++)for(let u=0;u<c;u++){let h=Math.PI*p/s,g=Math.PI*(p+1)/s,m=Math.PI/2*u/c,y=Math.PI/2*(u+1)/c,x=[t.vert(f(h,m),l(h,m),ss),t.vert(f(g,m),l(g,m),ss),t.vert(f(g,y),l(g,y),ss),t.vert(f(h,y),l(h,y),ss)];t.tri(x[0],x[1],x[2]),t.tri(x[0],x[2],x[3])}for(let p=1;p<8;p++){let u=Math.PI*p/8,h=[];for(let g=0;g<=10;g++){let m=Math.PI/2*g/10*.97;h.push(f(u,m).map((y,x)=>y-l(u,m)[x]*.02))}t.tube(h,g=>.035*(1-g*.6),12,6,{mat:()=>ss})}let v=t.vert([e,r,a],[0,1,0],n0);for(let p=0;p<s;p++){let u=Math.PI*p/s,h=Math.PI*(p+1)/s;t.tri(v,t.vert(i(u,o,r),[0,1,0],n0),t.vert(i(h,o,r),[0,1,0],n0))}cr(t,e-o-.12,r-.1,a,e+o+.12,r+.02,a+.12,n0),cr(t,e-o-.16,r-.2,a,e+o+.16,r-.1,a+.07,n0);let d=.16;for(let p=0;p<s;p++){let u=Math.PI*p/s,h=Math.PI*(p+1)/s,g=(m,y,x)=>[e+Math.cos(m)*y,n+Math.sin(m)*y,x];dn(t,g(u,o,a+.05),g(h,o,a+.05),g(h,o+d,a+.05),g(u,o+d,a+.05),[0,0,1],n0),dn(t,g(u,o+d,a),g(h,o+d,a),g(h,o+d,a+.05),g(u,o+d,a+.05),[Math.cos((u+h)/2),Math.sin((u+h)/2),0],n0),dn(t,g(u,o,a),g(h,o,a),g(h,o,a+.05),g(u,o,a+.05),[-Math.cos((u+h)/2),-Math.sin((u+h)/2),0],n0)}for(let p of[-1,1]){let u=e+p*o,h=e+p*(o+d);cr(t,u,r,a,h,n,a+.05,n0),cr(t,u-p*.02,n-.12,a,h+p*.06,n,a+.09,n0)}cr(t,e-.11,n+o-.04,a,e+.11,n+o+d+.1,a+.09,n0),t.lathe([[.66,r,1],[.66,r+.06,1],[.62,r+.1],[.6,r+.3],[.64,r+.34,1],[.64,r+.4,1],[0,r+.4]],e,a-.62,40,{mat:()=>n0})}var h_=ir.sill+.4,u_=ue.z0-.62;function d_(t){dn(t,[14,0,ue.z0-m0],[ue.x1+m0,0,ue.z0-m0],[ue.x1+m0,0,ue.z1+m0],[14,0,ue.z1+m0],[0,1,0],n0),t.curMat=Pl,ql(t,{u0:14+m0,u1:ue.x1+2*m0,w0:ue.z0-2*m0,w1:ue.z0,top:()=>ue.spring,holes:kh.map(f=>({u0:f-ir.r,u1:f+ir.r,bottom:ir.sill,head:id(f,ir.r,ir.spring),noReveal:!0})),mat:Pl,cuts:[ue.x1]});for(let f of kh)f_(t,f);t.save(),t.translate(0,0,ue.z1),t.rotateY(Math.PI),t.translate(-(ue.x1+2*m0),0,-2*m0);let e=f=>ue.x1+2*m0-f;ql(t,{u0:e(ue.x1+2*m0),u1:e(13.65),w0:0,w1:2*m0,top:()=>ue.spring,holes:na.map(f=>({u0:e(f+Je.halfW),u1:e(f-Je.halfW),bottom:Je.sill,head:id(e(f),Je.halfW,Je.spring)})),mat:Pl,revealMat:n0}),t.restore(),t.save(),t.translate(ue.x1,0,0),t.rotateY(-Math.PI/2);let o=dc.DOOR,r=ue.zc,n=o.r;ql(t,{u0:ue.z0-2*m0,u1:ue.z1+2*m0,w0:-2*m0,w1:0,top:f=>f<ue.z0||f>ue.z1?ue.spring:uc(f),topStep:.15,holes:[{u0:r-n,u1:r+n,bottom:0,head:id(r,n,o.spring)}],mat:Pl,revealMat:n0}),t.restore(),t.save(),t.translate(14+m0,0,0),t.rotateY(-Math.PI/2),ql(t,{u0:ue.z0,u1:ue.z1,w0:-0,w1:2*m0,top:()=>ld,topStep:.15,holes:[{u0:ue.z0,u1:ue.z1,bottom:0,head:f=>uc(f)}],mat:Pl,revealMat:n0}),t.restore();let a=14+m0,s=Math.ceil((ue.x1-a)/1),i=28,c=[];for(let f=0;f<=s;f++){let l=a+(ue.x1-a)*f/s,v=[];for(let d=0;d<=i;d++){let p=ue.z0+(ue.z1-ue.z0)*d/i,u=uc(p),h=[0,fd-u,ue.zc-p],g=Math.hypot(h[1],h[2]);v.push(t.vert([l,u,p],[0,h[1]/g,h[2]/g],ss))}c.push(v)}for(let f=0;f<s;f++)for(let l=0;l<i;l++)t.tri(c[f][l],c[f+1][l],c[f][l+1]),t.tri(c[f+1][l],c[f+1][l+1],c[f][l+1])}function U2(t,e,o,r){let a=[];for(let s=0;s<=32;s++){let i=ue.z0+(ue.z1-ue.z0)*s/32,c=uc(i),f=fd-c,l=ue.zc-i,v=Math.hypot(f,l),d=[c+f/v*r,i+l/v*r];a.push({y:c,z:i,iy:d[0],iz:d[1],n:[0,f/v,l/v]})}for(let s=0;s<32;s++){let i=a[s],c=a[s+1];dn(t,[e-o,i.iy,i.iz],[e+o,i.iy,i.iz],[e+o,c.iy,c.iz],[e-o,c.iy,c.iz],i.n,n0),dn(t,[e-o,i.y,i.z],[e-o,i.iy,i.iz],[e-o,c.iy,c.iz],[e-o,c.y,c.z],[-1,0,0],n0),dn(t,[e+o,i.iy,i.iz],[e+o,i.y,i.z],[e+o,c.y,c.z],[e+o,c.iy,c.iz],[1,0,0],n0)}}function Mh(t,e,o,r){let s=o,i=o+r*.16;cr(t,e-.28,0,s,e+.28,ue.spring-.3,i,n0),cr(t,e-.28-.06,0,s,e+.28+.06,.32,o+r*(.16+.05),n0),cr(t,e-.28-.05,ue.spring-.3,s,e+.28+.05,ue.spring-.1,o+r*(.16+.05),n0),cr(t,e-.28-.1,ue.spring-.1,s,e+.28+.1,ue.spring,o+r*(.16+.1),n0)}function p_(t,e){let o=uc(ue.zc),r=[[0,o-.13,1],[.05,o-.125],[.12,o-.1],[.16,o-.06,1],[.22,o-.05],[.3,o-.075],[.4,o-.06],[.48,o-.03,1],[.55,o-.035],[.7,o-.025],[.82,o-.012,1],[.95,o+.03]];t.lathe(r,e,ue.zc,48,{mat:()=>ss});for(let n=0;n<8;n++){let a=n*Math.PI/4,s=e+Math.cos(a)*.32,i=ue.zc+Math.sin(a)*.32;t.save(),t.translate(s,o-.07,i),t.rotateY(-a),t.curMat=ss,t.ellipsoid([0,0,0],[.13,.03,.06],6,10),t.restore()}}function v_(t){t.curMat=n0;for(let[e,o]of[[ue.z0,1],[ue.z1,-1]])cr(t,14.35,ue.spring-.12,e,ue.x1,ue.spring,e+o*.1,n0),cr(t,14.35,ue.spring-.04,e,ue.x1,ue.spring+.05,e+o*.18,n0);for(let[e,o]of[[ue.z0,1],[ue.z1,-1]])cr(t,14.35,0,e,ue.x1,.42,e+o*.12,n0),cr(t,14.35,.42,e,ue.x1,.5,e+o*.07,n0);for(let e of B2)U2(t,e,.24,.16),Mh(t,e,ue.z0,1),Mh(t,e,ue.z1,-1);for(let e of[14.35+.28,ue.x1-.28])U2(t,e,.28,.22),Mh(t,e,ue.z0,1),Mh(t,e,ue.z1,-1);for(let e of na)p_(t,e)}function m_(t){let e=ue.z1+m0,o=e-.04,r=e+.04,n=(i,c,f,l)=>cr(t,i,c,o,f,l,r,Il),a=Je.halfW,s=(i,c,f,l,v,d)=>{let p=(u,h,g)=>[i+h*Math.cos(u),Je.spring+h*Math.sin(u),g];for(let u=0;u<d;u++){let h=l+(v-l)*u/d,g=l+(v-l)*(u+1)/d;dn(t,p(h,c,o),p(g,c,o),p(g,f,o),p(h,f,o),[0,0,-1],Il),dn(t,p(h,f,r),p(g,f,r),p(g,c,r),p(h,c,r),[0,0,1],Il)}};for(let i of na){let c=i-a,f=i+a;n(c,Je.sill,c+.07,Je.spring),n(f-.07,Je.sill,f,Je.spring),n(c,Je.sill,f,Je.sill+.07),n(c,Je.spring-.04,f,Je.spring+.04);for(let v of[-.5,0,.5])n(i+v*a-.022,Je.sill,i+v*a+.022,Je.spring);let l=6;for(let v=1;v<l;v++){let d=Je.sill+(Je.spring-Je.sill)*v/l;n(c,d-.02,f,d+.02)}s(i,a-.07,a,0,Math.PI,32),s(i,.42,.46,0,Math.PI,20);for(let v=1;v<6;v++){let d=Math.PI*v/6,p=Math.cos(d),u=Math.sin(d),h=.02,g=(m,y)=>[i+p*m-u*h*y,Je.spring+u*m+p*h*y];dn(t,[...g(.44,-1),o],[...g(a-.05,-1),o],[...g(a-.05,1),o],[...g(.44,1),o],[0,0,-1],Il),dn(t,[...g(.44,1),r],[...g(a-.05,1),r],[...g(a-.05,-1),r],[...g(.44,-1),r],[0,0,1],Il)}}}function g_(){let t=[],e=ue.z1+m0;for(let o of na){let r=o-Je.halfW,n=o+Je.halfW;t.push([r,Je.sill,e],[n,Je.sill,e],[n,Je.spring,e],[r,Je.sill,e],[n,Je.spring,e],[r,Je.spring,e]);for(let a=0;a<24;a++){let s=Math.PI*a/24,i=Math.PI*(a+1)/24;t.push([o,Je.spring,e],[o+Je.halfW*Math.cos(s),Je.spring+Je.halfW*Math.sin(s),e],[o+Je.halfW*Math.cos(i),Je.spring+Je.halfW*Math.sin(i),e])}}return t}function j2(t,e){t.save(),t.translate(ue.x1+m0,0,ue.zc-7),t.rotateY(-Math.PI/2),e(),t.restore()}function x_(t){j2(t,()=>{dc.addSurround(t),dc.addFrames(t,"fixed")})}function y_(t){return dc.glassPanes(t||"fixed").map(([o,r,n])=>[ue.x1+m0-n,r,ue.zc-7+o])}function b_(t){d_(t),v_(t),m_(t),x_(t),t.curMat=[0,0,0]}var w_={x:ue.x1+m0,zLo:ue.zc-dc.DOOR.r,zHi:ue.zc+dc.DOOR.r},Go=t=>t.toFixed(4);function __(){return`
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
		if (p.x < ${Go(ue.x0)} || p.z < ${Go(ue.z0-.1)} || p.z > ${Go(ue.z1)}) return 0.0;
		float ndl = max(dot(n, WIN_SKY), 0.0);
		if (ndl <= 0.0) return 0.0;
		float tIn = (${Go(ue.z1)} - p.z) / WIN_SKY.z;
		float tOut = (${Go(ue.z1+2*m0)} - p.z) / WIN_SKY.z;
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
		${kh.map(t=>`{ float d = abs(p.x - ${Go(t)}); if (d < best) { best = d; lamp = vec3(${Go(t)}, ${Go(ir.spring+.55)}, ${Go(ue.z0-.15)}); } }`).join(`
		`)}
		return lamp;
	}

	float nicheLight(vec3 p, vec3 n) {
		if (p.z > ${Go(ue.z0+1.6)} || p.z < ${Go(ue.z0-ir.r-.1)} || p.x < ${Go(ue.x0)}) return 0.0;
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
		if (p.x < ${Go(ue.x0-1)}) return 0.0;
		float inC = smoothstep(${Go(ue.z0-1.5)}, ${Go(ue.z0)}, p.z) * smoothstep(${Go(ue.x0-1)}, ${Go(ue.x0+1)}, p.x);
		float near = 0.55 + 0.45 * smoothstep(${Go(ue.z0)}, ${Go(ue.z1)}, p.z);
		return inC * near;
	}`}W2.exports={wallWithHoles:ql,windowLightGLSL:__,addWing:b_,windowGlass:g_,farDoorGlass:y_,atFarDoor:j2,FAR_DOOR:w_,vaultY:uc,C:ue,NICHE_X:kh,NICHE:ir,NICHE_PLINTH_TOP:h_,NICHE_STATUE_Z:u_,WIN:Je,winCentres:na,piers:B2,PAINTING_X:l_,HEIGHT:ld}});var Gr=Tt((q7,Y2)=>{"use strict";var hd=Tn(),h0=8,mc=.35,ei=14,vc=4,Me={x0:ei+mc,x1:ei+mc+2*vc,z0:5.9-vc,z1:5.9+vc,zc:5.9,cx:ei+mc+vc,arch:{r:2.6,spring:4.4},dome:{r:3.3,base:h0},oculus:3.3};Me.domeTop=Me.dome.base+Me.dome.r;var gc={spokes:16,ringE:[.42,.95],bar:.035},en={sxz:1.32,sy:1.6,yaw:.6};en.crownC=[Me.cx,.4+3.4*en.sy,Me.zc];en.crownR=[2.3*en.sxz,1.9*en.sy,2.3*en.sxz];en.trunkR=.26*en.sxz;en.trunkTop=.4+2.2*en.sy;var V2={inner:1.05,outer:1.62,seat:.48,soil:.4},Eh=(()=>{let t=[.2,1,-.15],e=Math.hypot(...t);return t.map(o=>o/e)})(),pn=[0,0,0],pc=[11,0,0],Sh=[10,0,0],zh=[9,0,0],M_=[5,0,0],ud=[3,0,0];function qa(t,e,o,r,n,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),f=t.vert(r,a,s),l=t.vert(n,a,s);t.tri(i,c,f),t.tri(i,f,l)}function Kn(t,e,o,r,n,a,s,i){t.box(Math.min(e,n),Math.min(o,a),Math.min(r,s),Math.max(e,n),Math.max(o,a),Math.max(r,s),i)}var k_=(t,e,o)=>r=>{let n=r-t;return o+Math.sqrt(Math.max(0,e*e-n*n))};function S_(t){t.save(),t.translate(ei+mc,0,0),t.rotateY(-Math.PI/2),hd.wallWithHoles(t,{u0:0,u1:hd.C.z0,w0:0,w1:2*mc,top:()=>h0,holes:[{u0:Me.zc-Me.arch.r,u1:Me.zc+Me.arch.r,bottom:0,head:k_(Me.zc,Me.arch.r,Me.arch.spring),step:.05}],mat:pc,revealMat:pn,topStep:1}),t.restore();let e=ei-mc;for(let[s,i]of[[0,Me.zc-Me.arch.r],[Me.zc+Me.arch.r,hd.C.z0]])Kn(t,e-.12,0,s,e,.42,i,pn),Kn(t,e-.07,.42,s,e,.5,i,pn);let o=e,r=.24,n=40,a=(s,i,c)=>[c,Me.arch.spring+Math.sin(s)*i,Me.zc+Math.cos(s)*i];for(let s=0;s<n;s++){let i=Math.PI*s/n,c=Math.PI*(s+1)/n;qa(t,a(i,Me.arch.r,o-.07),a(c,Me.arch.r,o-.07),a(c,Me.arch.r+r,o-.07),a(i,Me.arch.r+r,o-.07),[-1,0,0],pn),qa(t,a(i,Me.arch.r+r,o),a(c,Me.arch.r+r,o),a(c,Me.arch.r+r,o-.07),a(i,Me.arch.r+r,o-.07),[0,Math.sin((i+c)/2),Math.cos((i+c)/2)],pn),qa(t,a(i,Me.arch.r,o),a(c,Me.arch.r,o),a(c,Me.arch.r,o-.07),a(i,Me.arch.r,o-.07),[0,-Math.sin((i+c)/2),-Math.cos((i+c)/2)],pn)}Kn(t,o-.12,Me.arch.spring+Me.arch.r-.06,Me.zc-.17,o,Me.arch.spring+Me.arch.r+r+.16,Me.zc+.17,pn);for(let s of[-1,1]){let i=Me.zc+s*Me.arch.r,c=Me.zc+s*(Me.arch.r+r);Kn(t,o-.07,0,i,o,Me.arch.spring,c,pn),Kn(t,o-.13,Me.arch.spring-.16,i-s*.03,o,Me.arch.spring,c+s*.08,pn),Kn(t,o-.12,0,i-s*.03,o,.5,c+s*.06,pn)}}function z_(t){let{x0:e,x1:o,z0:r,z1:n}=Me;qa(t,[ei,0,r],[o,0,r],[o,0,n],[ei,0,n],[0,1,0],pn),t.curMat=pc,qa(t,[o,0,r],[o,0,n],[o,h0,n],[o,h0,r],[-1,0,0],pc),qa(t,[e,0,r],[o,0,r],[o,h0,r],[e,h0,r],[0,0,1],pc),qa(t,[o,0,n],[e,0,n],[e,h0,n],[o,h0,n],[0,0,-1],pc),qa(t,[e,0,n],[e,0,r],[e,h0,r],[e,h0,n],[1,0,0],pc),Kn(t,o-.12,0,r,o,.42,n,pn),Kn(t,e,0,r,o,.42,r+.12,pn),Kn(t,e,0,n-.12,o,.42,n,pn),Kn(t,o-.2,h0-.3,r,o,h0,n,pn),Kn(t,e,h0-.3,r,o,h0,r+.2,pn),Kn(t,e,h0-.3,n-.2,o,h0,n,pn),Kn(t,e,h0-.3,r,e+.2,h0,n,pn);let a=Me.dome.r,s=48,i=[];for(let m=0;m<=s;m++){let y=Math.PI*2*m/s;i.push([Me.cx+Math.cos(y)*a,Me.zc+Math.sin(y)*a])}let c=m=>{let y=Math.abs(Math.cos(m)),x=Math.abs(Math.sin(m));return Math.min(vc/Math.max(y,1e-6),vc/Math.max(x,1e-6))};for(let m=0;m<s;m++){let y=Math.PI*2*m/s,x=Math.PI*2*(m+1)/s,_=c(y),M=c(x),w=[Me.cx+Math.cos(y)*_,h0,Me.zc+Math.sin(y)*_],k=[Me.cx+Math.cos(x)*M,h0,Me.zc+Math.sin(x)*M];qa(t,[i[m][0],h0,i[m][1]],[i[m+1][0],h0,i[m+1][1]],k,w,[0,-1,0],Sh)}t.lathe([[a+.02,h0-.18,1],[a-.12,h0-.18,1],[a-.12,h0-.06,1],[a-.05,h0,1],[a,h0+.02]],Me.cx,Me.zc,s,{mat:()=>pn});let f=16,l=(m,y,x)=>[Me.cx+Math.cos(m)*Math.cos(y)*x,Me.dome.base+Math.sin(y)*x,Me.zc+Math.sin(m)*Math.cos(y)*x],v=Math.PI/2;for(let m=0;m<s;m++)for(let y=0;y<f;y++){let x=Math.PI*2*m/s,_=Math.PI*2*(m+1)/s,M=v*y/f,w=v*(y+1)/f,k=(z,P)=>[-Math.cos(z)*Math.cos(P),-Math.sin(P),-Math.sin(z)*Math.cos(P)],E=[t.vert(l(x,M,a),k(x,M),zh),t.vert(l(_,M,a),k(_,M),zh),t.vert(l(_,w,a),k(_,w),zh),t.vert(l(x,w,a),k(x,w),zh)];t.tri(E[0],E[1],E[2]),t.tri(E[0],E[2],E[3])}for(let m=0;m<gc.spokes;m++){let y=Math.PI*2*m/gc.spokes,x=[];for(let _=0;_<=14;_++)x.push(l(y,(v-.06)*_/14,a-.04));t.tube(x,()=>.04,20,6,{mat:()=>Sh})}for(let m of gc.ringE){let y=Math.cos(m)*(a-.04),x=Me.dome.base+Math.sin(m)*(a-.04),_=[];for(let M=0;M<=72;M++){let w=Math.PI*2*M/72;_.push([Me.cx+Math.cos(w)*y,x,Me.zc+Math.sin(w)*y])}t.tube(_,()=>.035,72,6,{mat:()=>Sh})}t.ellipsoid([Me.cx,Me.dome.base+a-.06,Me.zc],[.16,.08,.16],6,12,{mat:()=>Sh});let d=.46,p=.55,u=.12,h=(m,y,x,_)=>{Kn(t,m,d-.08,y,x,d,_,ud);let M=x-m>_-y?[m+.25,x-.25]:[m+.06,x-.06],w=x-m>_-y?[y+.06,_-.06]:[y+.25,_-.25];Kn(t,M[0],0,w[0],M[1],d-.08,w[1],ud)};h(o-u-p,r+1.1,o-u,n-1.1),h(e+1,r+u,o-1.1,r+u+p),h(e+1,n-u-p,o-1.1,n-u);let g=V2;t.lathe([[g.outer,0,1],[g.outer,g.seat-.1,1],[g.outer+.07,g.seat-.07,1],[g.outer+.07,g.seat,1],[g.inner-.05,g.seat,1],[g.inner-.05,g.seat-.06,1],[g.inner,g.seat-.08,1],[g.inner,g.soil]],Me.cx,Me.zc,64,{mat:()=>ud}),t.lathe([[g.inner,g.soil,1],[0,g.soil+.03]],Me.cx,Me.zc,48,{mat:()=>M_})}function E_(t){S_(t),z_(t),t.curMat=[0,0,0]}var r0=t=>t.toFixed(4);function X2(){let t=Me.dome.r,e=gc.ringE.map(o=>Math.cos(o)*t);return`
	const vec3 SHAFT = vec3(${r0(Eh[0])}, ${r0(Eh[1])}, ${r0(Eh[2])});

	// how much sun the glass dome lets through towards p (0..1): the round
	// opening, less the soft shadows of its ribs and rings (worked out on
	// the dome's base, where the frame is seen almost straight on)
	float oculusOpen(vec3 p) {
		float t = (${r0(Me.dome.base+.6)} - p.y) / SHAFT.y;
		vec3 q = p + SHAFT * t;
		vec2 d2 = q.xz - vec2(${r0(Me.cx)}, ${r0(Me.zc)});
		float d = length(d2);
		float soft = 0.02 + 0.012 * t;
		float open = 1.0 - smoothstep(${r0(t-.15)} - soft, ${r0(t-.15)} + soft, d);
		float hw = ${r0(gc.bar)};
		float cover = 0.0;
		${e.map(o=>`cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, abs(d - ${r0(o)})));`).join(`
		`)}
		float ang = atan(d2.y, d2.x);
		float stp = ${r0(Math.PI*2/gc.spokes)};
		float da = abs(mod(ang + stp * 0.5, stp) - stp * 0.5);
		cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, d * sin(da)));
		cover = max(cover, 1.0 - smoothstep(0.16 - soft, 0.16 + soft, d));
		return open * (1.0 - cover * 0.85);
	}

	// the tree's own shade: its crown lets dappled light through, its
	// trunk blocks it
	float treeShade(vec3 p) {
		vec3 c = vec3(${r0(en.crownC[0])}, ${r0(en.crownC[1])}, ${r0(en.crownC[2])});
		vec3 r = vec3(${r0(en.crownR[0])}, ${r0(en.crownR[1])}, ${r0(en.crownR[2])});
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
		float tt = (${r0(en.trunkTop)} - p.y) / SHAFT.y;
		if (tt > 0.0) {
			vec2 o = p.xz - vec2(${r0(Me.cx)}, ${r0(Me.zc)});
			vec2 dir = SHAFT.xz;
			float k = clamp(-dot(o, dir) / dot(dir, dir), 0.0, tt);
			float dist = length(o + dir * k);
			tr *= smoothstep(${r0(en.trunkR*.7)}, ${r0(en.trunkR*1.3)}, dist);
		}
		return tr;
	}`}function A_(){return`
	${X2()}

	// sunlight through the oculus reaching p (0..1)
	float alcoveSun(vec3 p, vec3 n) {
		if (p.x < ${r0(Me.x0-.75)} || p.z < ${r0(Me.z0-.5)} || p.z > ${r0(Me.z1+.5)}) return 0.0;
		float ndl = max(dot(n, SHAFT), 0.0);
		if (ndl <= 0.0) return 0.0;
		return ndl * oculusOpen(p) * treeShade(p);
	}

	// soft daylight filling the court, brightest under the dome
	float alcoveGlow(vec3 p) {
		if (p.x < ${r0(Me.x0-1.5)} || p.z < ${r0(Me.z0-1.5)} || p.z > ${r0(Me.z1+1.5)}) return 0.0;
		float inside = smoothstep(${r0(Me.x0-1.2)}, ${r0(Me.x0+.6)}, p.x);
		float d = length(p.xz - vec2(${r0(Me.cx)}, ${r0(Me.zc)}));
		return inside * (0.55 + 0.45 * smoothstep(0.0, 8.0, p.y)) * (1.0 - 0.35 * smoothstep(1.0, 5.0, d));
	}`}Y2.exports={addAlcove:E_,alcoveLightGLSL:A_,oculusGLSL:X2,A:Me,BENCH:V2,SHAFT:Eh,TREE:en}});var on=Tt((D7,Z2)=>{"use strict";var ra=0;try{let t=location.search;/[?&]night\b/.test(t)&&(ra=1)}catch(t){}var Da=ra,dd=0,K2=[],Ah={tick(t){let e=dd?Math.min(.1,t-dd):0;if(dd=t,Da!==ra){let o=e/2.4;Da=ra>Da?Math.min(ra,Da+o):Math.max(ra,Da-o)}return Ah.night},get night(){return Da*Da*(3-2*Da)},get isNight(){return ra===1},get settled(){return Da===ra},set(t){ra=t?1:0,K2.forEach(e=>e(ra))},toggle(){Ah.set(!ra)},onChange(t){K2.push(t)}};Ah.GLSL=`
uniform float night;
vec3 toNight(vec3 c, float keep) {
	float l = dot(c, vec3(0.299, 0.587, 0.114));
	vec3 n = mix(vec3(l), c, 0.35) * vec3(0.55, 0.70, 1.05) * keep;
	return mix(c, n, night);
}
`;Z2.exports=Ah});var cs=Tt((F7,Gl)=>{"use strict";var pd=on(),{C:vd}=Tn(),{A:Th,BENCH:Dl}=Gr(),nn=Math.PI,T_=[18,29,40],Lh=.575,is=[],Fl=(t,e,o,r,n,a,s)=>is.push(Object.assign({x:t,y:e,z:o,o:r,back:n,hw:a,s:1,k:1,range:7,mount:"wall"},s||{}));T_.forEach(t=>{Fl(1.25+Lh+.48,3.25,t,[1,0],.48,Lh,{s:1.2}),Fl(12.75-Lh-.48,3.25,t,[-1,0],.48,Lh,{s:1.2})});[3,11].forEach(t=>Fl(t,3.45,vd.hallEnd-.5,[0,-1],.5,99,{s:1.2}));var L_=[14.63,19.63,24.03,28.43,32.83,vd.x1-.28];L_.forEach(t=>Fl(t,3.15,vd.z0+.16+.44,[0,1],.44,.28));[3,8.8].forEach(t=>Fl(.35+.44,2.75,t,[1,0],.44,99));{let t=(Dl.inner+Dl.outer)/2,e=Math.atan2(-1.12,-.98);is.push({x:Th.cx+Math.cos(e)*t,y:Dl.seat+.155,z:Th.zc+Math.sin(e)*t,o:[Math.cos(e),Math.sin(e)],back:0,hw:0,ring:[Th.cx,Th.zc,Dl.outer+.07,Dl.seat],s:.52,k:2.2,range:3.6,mount:"table"})}var md=.13,Nh=.21,vn=md/Math.cos(nn/6),Qo=t=>t.toFixed(4);function Q2(t){let o=(t||is.map((r,n)=>n)).map(r=>{let n=is[r],a=-n.o[1],s=n.o[0],i=n.mount==="table"?`
				// the bench it stands on hides the floor under and around it
				if (p.y < ${Qo(n.ring[3]-.03)}) {
					float tt = ${Qo(n.y-n.ring[3])} / max(-D.y, 1e-3);
					vec2 hit = vec2(${Qo(n.x)}, ${Qo(n.z)}) + D.xz * tt - vec2(${Qo(n.ring[0])}, ${Qo(n.ring[1])});
					T *= smoothstep(${Qo(n.ring[2]-.02)}, ${Qo(n.ring[2]+.12)}, length(hit));
				}`:"",c=n.mount==="wall"?`
				{
					// what it hangs on stands behind it and hides what lies beyond
					float behind = -dot(D.xz, vec2(${Qo(n.o[0])}, ${Qo(n.o[1])}));
					if (behind > ${Qo(n.back+.06)}) {
						float side = abs(dot(D.xz, vec2(${Qo(a)}, ${Qo(s)}))) * ${Qo(n.back)} / behind;
						T *= smoothstep(${Qo(n.hw-.04)}, ${Qo(n.hw+.04)}, side);
					}
				}`:"";return`
			{
				vec3 D = p - vec3(${Qo(n.x)}, ${Qo(n.y)}, ${Qo(n.z)});
				float d2 = dot(D, D);
				if (d2 < ${Qo(n.range*n.range)}) {
					float d = sqrt(d2);
					// the direction in the lantern's own frame
					float c = ${Qo(Math.cos(Math.atan2(n.o[1],n.o[0])))}, s = ${Qo(Math.sin(Math.atan2(n.o[1],n.o[0])))};
					vec3 q = vec3(D.x * c + D.z * s, D.y, -D.x * s + D.z * c);
					float T = lanternGlass(q, 0.10 + 0.05 * d);
					${c}${i}
					float fl = 0.90 + 0.06 * sin(time * 6.1 + ${Qo(r*1.7)}) + 0.04 * sin(time * 15.3 + ${Qo(r*2.9)}) * sin(time * 1.9 + ${Qo(r*.6)});
					float lam = max(dot(N, -D / d), 0.0) * 0.85 + 0.15;
					float fall = 1.0 / (1.0 + d2 * ${Qo(1/(n.s*n.s))}) * (1.0 - smoothstep(${Qo(n.range*.6)}, ${Qo(n.range)}, d));
					sum += ${Qo(n.k)} * T * fl * lam * fall;
				}
			}`}).join("");return`
	// how much of a lantern's light gets out in direction q (lantern frame,
	// y up): through the leaded glass, past the iron posts, a little
	// through the vents in the roof and the open work under the base
	float lanternGlass(vec3 q, float blur) {
		float h = length(q.xz) + 1e-5;
		float az = atan(q.z, q.x);
		// which of the six panels, and where across it
		float t = mod(az + ${Qo(nn/6)}, ${Qo(nn/3)}) - ${Qo(nn/6)};
		float U = tan(t) / ${Qo(Math.tan(nn/6))};
		float V = (q.y / h) * (${Qo(md/Nh)} / cos(t));
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
	}`}var g0=0,N_=1;function O_(){let t=[],e=[],o=[],r=[],n=[],a=(p,u,h,g)=>(t.push(p[0],p[1],p[2]),e.push(u[0],u[1],u[2]),o.push(h),r.push(g?g[0]:0,g?g[1]:0),t.length/3-1),s=(p,u)=>[p[0]-u[0],p[1]-u[1],p[2]-u[2]],i=(p,u)=>[p[1]*u[2]-p[2]*u[1],p[2]*u[0]-p[0]*u[2],p[0]*u[1]-p[1]*u[0]],c=p=>{let u=Math.hypot(p[0],p[1],p[2])||1;return[p[0]/u,p[1]/u,p[2]/u]};function f(p,u,h,g,m,y){let x=c(i(s(u,p),s(g,p))),_=a(p,x,m,[0,0]),M=a(u,x,m,[1,0]),w=a(h,x,m,[1,1]),k=a(g,x,m,[0,1]);n.push(_,M,w,_,w,k),y&&n.push(_,w,M,_,k,w)}function l(p,u,h){for(let y=0;y<p.length;y++){let x=p[Math.max(0,y-1)],_=p[Math.min(p.length-1,y+1)],M=c(s(_,x)),w=Math.abs(M[1])>.9?[1,0,0]:[0,1,0],k=c(i(M,w)),E=i(k,M),z=typeof u=="function"?u(y/(p.length-1)):u;for(let P=0;P<=6;P++){let R=P/6*nn*2,B=Math.cos(R),$=Math.sin(R),q=[k[0]*B+E[0]*$,k[1]*B+E[1]*$,k[2]*B+E[2]*$];a([p[y][0]+q[0]*z,p[y][1]+q[1]*z,p[y][2]+q[2]*z],q,h)}}let m=t.length/3-p.length*7;for(let y=0;y<p.length-1;y++)for(let x=0;x<6;x++){let _=m+y*7+x,M=_+6+1;n.push(_,M,_+1,_+1,M,M+1)}}function v(p,u,h,g,m,y,x,_,M){let w=(k,E,z)=>{let P=y+nn/6+z*nn/3;return[p[0]+Math.cos(P)*k,E,p[2]+Math.sin(P)*k]};for(let k=0;k<6;k++)f(w(g,u,k+1),w(g,u,k),w(m,h,k),w(m,h,k+1),x);if(_&&m>0)for(let k=0;k<6;k++){let E=a([p[0],h,p[2]],[0,1,0],x),z=a(w(m,h,k),[0,1,0],x),P=a(w(m,h,k+1),[0,1,0],x);n.push(E,P,z)}if(M&&g>0)for(let k=0;k<6;k++){let E=a([p[0],u,p[2]],[0,-1,0],x),z=a(w(g,u,k),[0,-1,0],x),P=a(w(g,u,k+1),[0,-1,0],x);n.push(E,z,P)}}function d(p,u,h,g,m,y,x){let _=[];for(let w=0;w<=18;w++){let k=w/18,E=(x||0)+k*g*nn*2,z=h*(1-.75*k);_.push([p[0]+u[0]*Math.cos(E)*z,p[1]+Math.sin(E)*z,p[2]+u[2]*Math.cos(E)*z])}l(_,m,y)}return is.forEach(p=>{let u=p.s,h=Math.atan2(p.o[1],p.o[0]),g=[p.x,p.y,p.z],m=(_,M,w)=>[p.x+p.o[0]*_-p.o[1]*(w||0),p.y+M,p.z+p.o[1]*_+p.o[0]*(w||0)],y=p.y-Nh*u,x=p.y+Nh*u;for(let _=0;_<6;_++){let M=h+nn/6+_*nn/3,w=M+nn/3,k=vn*u*.97,E=[p.x+Math.cos(M)*k,y,p.z+Math.sin(M)*k],z=[p.x+Math.cos(w)*k,y,p.z+Math.sin(w)*k];f(z,E,[E[0],x,E[2]],[z[0],x,z[2]],N_,!0)}for(let _=0;_<6;_++){let M=h+nn/6+_*nn/3,w=vn*u;l([[p.x+Math.cos(M)*w,y-.02*u,p.z+Math.sin(M)*w],[p.x+Math.cos(M)*w,x+.02*u,p.z+Math.sin(M)*w]],.011*u,g0)}v(g,y-.035*u,y,vn*u*1.12,vn*u*1.12,h,g0,!0,!0),v(g,y-.1*u,y-.035*u,vn*u*.55,vn*u*1,h,g0,!1,!0),v(g,y-.17*u,y-.1*u,0,vn*u*.55,h,g0,!1,!1);for(let _=0;_<6;_++){let M=h+_*nn/3,w=md*u*1.06,k=[p.x+Math.cos(M)*w,y-.06*u,p.z+Math.sin(M)*w];d(k,[-Math.sin(M),0,Math.cos(M)],.03*u,.85,.004*u,g0,.3)}v(g,x,x+.03*u,vn*u*1.14,vn*u*1.14,h,g0,!1,!0),v(g,x+.03*u,x+.2*u,vn*u*1.14,vn*u*.32,h,g0,!1,!1),v(g,x+.2*u,x+.27*u,vn*u*.34,vn*u*.34,h,g0,!1,!1),v(g,x+.27*u,x+.37*u,vn*u*.42,0,h,g0,!1,!0),l([[p.x,x+.36*u,p.z],[p.x,x+.47*u,p.z]],_=>.01*u*(1-.7*_),g0),v([p.x,0,p.z],x+.44*u,x+.47*u,.018*u,0,h,g0,!1,!0);for(let _=0;_<6;_++){let M=h+nn/6+_*nn/3,w=vn*u*1.14,k=[p.x+Math.cos(M)*w,x+.03*u,p.z+Math.sin(M)*w];l([k,[k[0],k[1]+.09*u,k[2]]],E=>.008*u*(1-.8*E),g0),v([k[0],0,k[2]],k[1]+.035*u,k[1]+.06*u,.014*u,.014*u,M,g0,!0,!0)}if(p.mount==="wall"){let _=p.back,M=y-.32,w=m(-_,0,0);((R,B,$)=>{let q=[p.o[0],0,p.o[1]],ct=[-p.o[1],0,p.o[0]],kt=(Et,Pt,ne)=>[w[0]+ct[0]*Et+q[0]*ne,Pt,w[2]+ct[2]*Et+q[2]*ne],xt=.03,vt=.065;f(kt(-$,R,vt),kt($,R,vt),kt($,B,vt),kt(-$,B,vt),g0,!0),f(kt($,R,xt),kt($,R,vt),kt($,B,vt),kt($,B,xt),g0,!0),f(kt(-$,R,vt),kt(-$,R,xt),kt(-$,B,xt),kt(-$,B,vt),g0,!0),f(kt(-$,B,vt),kt($,B,vt),kt($,B,xt),kt(-$,B,xt),g0,!0),f(kt(-$,R,xt),kt($,R,xt),kt($,R,vt),kt(-$,R,vt),g0,!0),v([w[0]+q[0]*vt,0,w[2]+q[2]*vt],B,B+.05,$*.6,0,h,g0,!1,!0),v([w[0]+q[0]*vt,0,w[2]+q[2]*vt],R-.05,R,0,$*.6,h,g0,!1,!1)})(M-.2,M+.2,.07);let E=[];for(let R=0;R<=14;R++){let B=R/14,$=-_+.05+B*(_-.05),q=M+.04+(y-.17*u-M-.04)*Math.pow(B,2.2);E.push(m($,q-p.y,0))}l(E,R=>.022*(1-.3*R),g0);let z=[];for(let R=0;R<=10;R++){let B=R/10;z.push(m(-_+.05+B*_*.6,M-.14+B*.16+.05*Math.sin(B*nn)-p.y,0))}l(z,.009,g0);let P=z[z.length-1];d([P[0]-p.o[0]*.03,P[1]+.02,P[2]-p.o[1]*.03],[p.o[0],0,p.o[1]],.045,1.1,.007,g0,-.4),[.3,.55].forEach(R=>{let B=E[Math.round(R*14)],$=z[Math.round(R/.62*10)]||z[10];l([B,$],.006,g0)}),[-1,1].forEach(R=>{let B=m(-.05,-Nh*u-.2*u,0);d([B[0]-p.o[1]*R*.05,B[1],B[2]+p.o[0]*R*.05],[-p.o[1]*R,0,p.o[0]*R],.05*u,.9,.006,g0,nn)})}else for(let _=0;_<3;_++){let M=h+_*nn*2/3,w=[p.x+Math.cos(M)*vn*u*.7,y-.035*u,p.z+Math.sin(M)*vn*u*.7],k=[p.x+Math.cos(M)*vn*u*1.25,y-.17*u,p.z+Math.sin(M)*vn*u*1.25];l([w,k],.012*u,g0)}}),{pos:t,nrm:e,kind:o,uv:r,elems:n}}Gl.exports=t=>{let e=O_(),o=t({vert:`
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
		${Q2()}
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
		}`,attributes:{position:e.pos,normal:e.nrm,kind:e.kind,uv:e.uv},elements:e.elems,uniforms:{time:t.context("time"),night:()=>pd.night}}),r=[],n=[];is.forEach((s,i)=>{[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(c=>{r.push(c[0],c[1]),n.push(s.x,s.y,s.z,s.s+i*.001)})});let a=t({vert:`
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
		}`,attributes:{corner:r,at:n},count:r.length/2,uniforms:{time:t.context("time"),night:()=>pd.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(){o(),pd.night>.01&&a()}};Gl.exports.lanternGLSL=Q2;Gl.exports.LANTERNS=is;Gl.exports.TREE_LANTERN=[is.length-1]});var hs=Tt((G7,lr)=>{"use strict";var R_=on(),t0=Math.PI,rn=t=>(+t).toFixed(4),C_=t=>`vec3(${rn(t[0])}, ${rn(t[1])}, ${rn(t[2])})`,so={x:-7,z:44.5},Eo=5.2,Mn=15,Le={z0:42.6,z1:46.4,zc:44.5,spring:4,r:1.9},_a={z0:42.2,z1:46.8,top:6.3,x:.35},Ch=[so.x-Math.sqrt(Eo*Eo-3.05*3.05),0,0],I0={x0:-2.05+Ch[0],x1:Ch[0],z0:41.45,z1:47.55,top:4.3},gd=[[I0.x1+.05,2.35,I0.z0-.45],[I0.x1+.05,2.35,I0.z1+.45]].map(([t,e,o])=>{let r=Math.atan2(o-so.z,t-so.x);return[so.x+Math.cos(r)*(Eo-.16),e,so.z+Math.sin(r)*(Eo-.16)]}),Yo={ri:3.4,ro:Eo,a0:-35*t0/180,rise:.1836,step:3.6*t0/180,n:88,thick:.36};Yo.k=Yo.rise/Yo.step;var Zn=t=>Yo.a0-t,fs=t=>t*Yo.k,y0={x:so.x+.1,z:so.z-.15,yaw:-t0/2,scale:1.3},Fa=y0.scale/1.1,Hl={keyX0:y0.x-.524*Fa,keyX1:y0.x+.491*Fa,keyTop:.647*Fa,keyFront:y0.z+.808*Fa,keyBack:y0.z+.72*Fa,stoolX:y0.x-.041*Fa,stoolZ:y0.z+1.122*Fa,stoolFront:y0.z+.96*Fa,stoolTop:.37*Fa,heading:t0},Rh=[[3.6,44.5],[.6,44.5],[-2.2,44.7],[-4.5,46.5],[-7,47.2],[-9.4,46.6],[-10.5,44.9],[-10.9,43.2]];function t3(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let o=e;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}function $_(t,e){let o=1e9;for(let r=0;r<Rh.length-1;r++){let[n,a]=Rh[r],[s,i]=Rh[r+1],c=s-n,f=i-a,l=Math.max(0,Math.min(1,((t-n)*c+(e-a)*f)/(c*c+f*f)));o=Math.min(o,Math.hypot(t-n-c*l,e-a-f*l))}return o}var Oh=t=>Le.spring+Math.sqrt(Math.max(0,Le.r*Le.r-(t-Le.zc)*(t-Le.zc))),ls=t=>so.x+Math.sqrt(Math.max(0,Eo*Eo-(t-so.z)*(t-so.z)));function xc(t,e){return Math.hypot(t-so.x,e-so.z)<Eo||t<=0&&t>so.x&&e>Le.z0&&e<Le.z1||t>I0.x0&&t<I0.x1&&e>I0.z0&&e<I0.z1}function P_(t,e){if(Math.hypot(t-so.x,e-so.z)<Yo.ri-.05)return 99;let r=Math.atan2(e-so.z,t-so.x),n=Yo.a0-r;for(;n<0;)n+=2*t0;for(;n>=2*t0;)n-=2*t0;return n>Yo.n*Yo.step?99:fs(n)-Yo.thick}function I_(){let t=[],e=t3(1729),o=(a,s,i)=>{for(let c=Math.max(0,t.length-400);c<t.length;c++){let f=t[c];if(!(f[1]>.01)&&Math.hypot(f[0]-a,f[2]-s)<i+f[3]+.012)return!0}return!1},r=(a,s)=>{let i=a-y0.x,c=s-y0.z,f=Math.cos(y0.yaw),l=Math.sin(y0.yaw),v=(f*i-l*c)/y0.scale,d=(l*i+f*c)/y0.scale;return v>-1.05&&v<1.3&&d>-.7&&d<.72},n=0;for(;t.length<980&&n<6e4;){n++;let s=e()<.55?1.25+e()*2.1:1.25+Math.sqrt(e())*(Eo-1.45),i=e()*2*t0,c=so.x+Math.cos(i)*s,f=so.z+Math.sin(i)*s;if(!xc(c,f)||s>Eo-.18||r(c,f)||$_(c,f)<.62||P_(c,f)<2.3||c<I0.x1+.9)continue;let l=.022+e()*.02;if(o(c,f,l))continue;let v=e()<.15?.22+e()*.14:.05+e()*.15;t.push([c,0,f,l,v,e()*100])}for(let a=1;a<26;a++){let s=a<12?3:2;for(let i=0;i<s;i++){let c=(a+.25+e()*.5)*Yo.step,f=Zn(c),l=Yo.ri+.55+e()*(Yo.ro-Yo.ri-.75),v=.022+e()*.016;t.push([so.x+Math.cos(f)*l,(a+1)*Yo.rise,so.z+Math.sin(f)*l,v,.05+e()*.14,e()*100])}}for(let a of gd)for(let[s,i,c]of[[0,0,.26],[.06,.05,.18],[-.05,-.04,.14]])t.push([a[0]+s,a[1],a[2]+i,.024,c,e()*100]);for(let a of[I0.z0-.35,I0.z1+.35])for(let s=0;s<9;s++){let i=I0.x1+.35+e()*.5,c=a+(e()-.5)*.5;Math.hypot(i-so.x,c-so.z)>Eo-.15||t.push([i,0,c,.026+e()*.014,.18+e()*.3,e()*100])}return t}function q_(t){let o=t3(77),r=[];for(let n=0;n<14;n++){let a=t[Math.floor(o()*t.length)];r.push([a[0],a[1]+a[4],a[2]])}for(let n=0;n<12;n++){let a=r.map(()=>[0,0,0,0]);for(let s of t){let i=[s[0],s[1]+s[4],s[2]],c=0,f=1e9;r.forEach((l,v)=>{let d=(i[0]-l[0])**2+(i[1]-l[1])**2*4+(i[2]-l[2])**2;d<f&&(f=d,c=v)}),a[c][0]+=i[0],a[c][1]+=i[1],a[c][2]+=i[2],a[c][3]++}r=a.map((s,i)=>s[3]?[s[0]/s[3],s[1]/s[3],s[2]/s[3],s[3]]:r[i])}return r.filter(n=>n[3]>0).map(n=>[n[0],n[1]+.12,n[2],n[3]/t.length])}var xd=I_(),J2=q_(xd.filter(t=>t[1]<2||t[1]>2.5)).concat(gd.map(t=>[t[0],t[1]+.35,t[2],.035]));function e3(){return`
	vec3 roomLight(vec3 p, vec3 N, vec3 V, float gloss, out vec3 spec) {
		spec = vec3(0.0);
		vec3 col = vec3(0.0);
		float floorK = (p.y < 0.02 && N.y > 0.9) ? 1.0 : 0.0;
		${J2.map((e,o)=>`
		{
			vec3 d = ${C_(e)} - p;
			float dd = dot(d, d);
			vec3 L = d * inversesqrt(dd);
			float fl = 0.86 + 0.08 * sin(time * ${rn(5.3+o*.71)} + ${rn(o*1.9)}) + 0.06 * sin(time * ${rn(11.7+o*1.3)} + ${rn(o*.7)});
			float w = ${rn(e[3]*J2.length)} * fl;
			float lam = max(dot(N, L), 0.0) * 0.82 + 0.18;
			col += w * lam / (0.7 + dd * 0.42);
			// the floor glows in pools round the candles
			col += w * floorK * 0.9 / (0.02 + dd * 7.0);
			spec += w * pow(max(dot(N, normalize(L + V)), 0.0), mix(10.0, 180.0, gloss)) * gloss * 1.6 / (0.25 + dd * 0.9);
		}`).join("")}
		col *= vec3(1.0, 0.56, 0.24) * 0.62;
		spec *= vec3(1.0, 0.62, 0.30) * 0.62;
		// light from the oculus, high above: pale by day, moonlight at night
		float up = smoothstep(0.0, ${rn(Mn)}, p.y);
		vec3 sky = mix(vec3(0.10, 0.095, 0.085), vec3(0.030, 0.045, 0.085), night);
		col += sky * (0.35 + 0.65 * up) * (0.55 + 0.45 * max(N.y, 0.0)) * (0.6 + 0.4 * max(-dot(N, normalize(p - vec3(${rn(so.x)}, ${rn(Mn)}, ${rn(so.z)}))), 0.0));
		// and straight down from it a soft pool falls on the piano and
		// whoever is playing it: it catches his shoulders, his hair, the
		// edge of the lid, and lifts them out of the dark
		float pool = 1.0 - smoothstep(0.5, 2.9, length(p.xz - vec2(${rn(Hl.stoolX)}, ${rn(Hl.keyFront+.1)})));
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
	}`}var mo={FLOOR:0,WALL:1,STEP:2,SOFFIT:3,STRING:4,CEIL:5,OCULUS:6,HALLSTONE:7,IRON:8,RAILING:9,CANDLE:10};function o3(){let t={pos:[],nrm:[],kind:[],uv:[],idx:[]};return t.v=(e,o,r,n)=>(t.pos.push(e[0],e[1],e[2]),t.nrm.push(o[0],o[1],o[2]),t.kind.push(r),t.uv.push(n?n[0]:0,n?n[1]:0),t.pos.length/3-1),t.quad=(e,o,r,n,a,s,i)=>{let c=t.v(e,a,s,i&&i[0]),f=t.v(o,a,s,i&&i[1]),l=t.v(r,a,s,i&&i[2]),v=t.v(n,a,s,i&&i[3]);t.idx.push(c,f,l,c,l,v)},t.tri=(e,o,r,n,a)=>{let s=t.v(e,n,a),i=t.v(o,n,a),c=t.v(r,n,a);t.idx.push(s,i,c)},t}function D_(){let t=o3(),e=(r,n,a)=>[so.x+Math.cos(r)*n,a,so.z+Math.sin(r)*n],o=r=>[Math.cos(r),0,Math.sin(r)];for(let n=0;n>I0.x0-.01;n-=.25)for(let a=41.2;a<47.8;a+=.2){let s=n-.25,i=n,c=a,f=a+.2;if(!(xc(s,c)||xc(i,c)||xc(s,f)||xc(i,f)||xc((s+i)/2,(c+f)/2)))continue;let l=c,v=f;s>ls(Le.z0)-.3&&(l=Math.max(l,Le.z0),v=Math.min(v,Le.z1),v<=l)||t.quad([s,0,l],[s,0,v],[i,0,v],[i,0,l],[0,1,0],mo.FLOOR)}{for(let n=0;n<360;n++){let a=n/360*2*t0,s=(n+1)/360*2*t0,i=(a+s)/2,c=e(i,Eo,0),f=0;c[0]>so.x&&c[2]>Le.z0-.02&&c[2]<Le.z1+.02&&(f=Math.max(Oh(Math.min(Math.max(e(a,Eo,0)[2],Le.z0),Le.z1)),Oh(Math.min(Math.max(e(s,Eo,0)[2],Le.z0),Le.z1)))),c[0]<so.x&&c[2]>I0.z0-.02&&c[2]<I0.z1+.02&&(f=I0.top);let l=a*Eo,v=s*Eo,d=o(a).map(h=>-h),p=o(s).map(h=>-h),u=[f];for(let h=Math.ceil(f/2.5)*2.5;h<Mn;h+=2.5)h>f+.01&&u.push(h);u.push(Mn);for(let h=0;h<u.length-1;h++){let g=u[h],m=u[h+1],y=t.v(e(a,Eo,g),d,mo.WALL,[l,g]),x=t.v(e(s,Eo,g),p,mo.WALL,[v,g]),_=t.v(e(s,Eo,m),p,mo.WALL,[v,m]),M=t.v(e(a,Eo,m),d,mo.WALL,[l,m]);t.idx.push(y,x,_,y,_,M)}}for(let[n,a,s]of[[6.55,.22,.07],[0,.32,.05]])for(let i=0;i<360;i++){let c=i/360*2*t0,f=(i+1)/360*2*t0,l=(c+f)/2,v=e(l,Eo,0);if(n<1&&(v[0]>so.x&&v[2]>Le.z0&&v[2]<Le.z1||v[0]<so.x&&v[2]>I0.z0&&v[2]<I0.z1))continue;let d=Eo-s;t.quad(e(c,d,n),e(f,d,n),e(f,d,n+a),e(c,d,n+a),o(l).map(p=>-p),mo.WALL,[[c*Eo,n+100],[f*Eo,n+100],[f*Eo,n+a+100],[c*Eo,n+a+100]]),t.quad(e(c,d,n+a),e(f,d,n+a),e(f,Eo,n+a),e(c,Eo,n+a),[0,1,0],mo.WALL,[[0,200],[0,200],[0,200],[0,200]]),n>1&&t.quad(e(c,Eo,n),e(f,Eo,n),e(f,d,n),e(c,d,n),[0,-1,0],mo.WALL,[[0,200],[0,200],[0,200],[0,200]])}}{let r=_a.x;for(let[a,s]of[[Le.z0,1],[Le.z1,-1]]){let i=ls(a);t.quad([r,0,a],[i,0,a],[i,Le.spring,a],[r,Le.spring,a],[0,0,s],mo.WALL,[[r,0],[i,0],[i,Le.spring],[r,Le.spring]])}let n=40;for(let a=0;a<n;a++){let s=a/n*t0,i=(a+1)/n*t0,c=Le.zc-Math.cos(s)*Le.r,f=Le.zc-Math.cos(i)*Le.r,l=Le.spring+Math.sin(s)*Le.r,v=Le.spring+Math.sin(i)*Le.r,d=[0,-Math.sin(s),Math.cos(s)],p=[0,-Math.sin(i),Math.cos(i)],u=t.v([r,l,c],d,mo.WALL,[r,s*Le.r]),h=t.v([ls(c),l,c],d,mo.WALL,[ls(c),s*Le.r]),g=t.v([ls(f),v,f],p,mo.WALL,[ls(f),i*Le.r]),m=t.v([r,v,f],p,mo.WALL,[r,i*Le.r]);t.idx.push(u,h,g,u,g,m)}}{let r=_a.x,n=.05;for(let f=_a.z0;f<_a.z1-1e-6;f+=n){let l=f,v=Math.min(_a.z1,f+n),p=(u=>u>Le.z0&&u<Le.z1)((l+v)/2)?Math.max(Oh(l),Oh(v)):0;t.quad([r,p,l],[r,p,v],[r,_a.top,v],[r,_a.top,l],[1,0,0],mo.HALLSTONE,[[l,p],[v,p],[v,_a.top],[l,_a.top]])}let a=.32,s=.06,i=r+s,c=36;for(let f=0;f<c;f++){let l=f/c*t0,v=(f+1)/c*t0,d=(m,y)=>[i,Le.spring+Math.sin(m)*y,Le.zc-Math.cos(m)*y],p=Le.r,u=Le.r+a;t.quad(d(l,p),d(v,p),d(v,u),d(l,u),[1,0,0],mo.HALLSTONE,[[0,300],[0,300],[1,300],[1,300]]);let h=(m,y,x)=>[x,Le.spring+Math.sin(m)*y,Le.zc-Math.cos(m)*y],g=[0,Math.sin((l+v)/2),-Math.cos((l+v)/2)];t.quad(h(l,u,r),h(v,u,r),h(v,u,i),h(l,u,i),g,mo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),t.quad(h(l,p,r),h(v,p,r),h(v,p,i),h(l,p,i),g.map(m=>-m),mo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}for(let[f,l,v]of[[Le.z0-a,Le.z0,-1],[Le.z1,Le.z1+a,1]]){t.quad([i,0,f],[i,0,l],[i,Le.spring,l],[i,Le.spring,f],[1,0,0],mo.HALLSTONE,[[0,300],[1,300],[1,300],[0,300]]);let d=v<0?f:l,p=v<0?l:f;t.quad([r,0,d],[i,0,d],[i,Le.spring,d],[r,Le.spring,d],[0,0,v],mo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),t.quad([r,0,p],[i,0,p],[i,Le.spring,p],[r,Le.spring,p],[0,0,-v],mo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);let u=Le.spring-.16,h=.16,g=.11,m=Math.min(f,l)-.05,y=Math.max(f,l)+.05;t.quad([r+g,u,m],[r+g,u,y],[r+g,u+h,y],[r+g,u+h,m],[1,0,0],mo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),t.quad([r,u+h,m],[r+g,u+h,m],[r+g,u+h,y],[r,u+h,y],[0,1,0],mo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),t.quad([r,u,m],[r,u,y],[r+g,u,y],[r+g,u,m],[0,-1,0],mo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);for(let x of[m,y])t.quad([r,u,x],[r+g,u,x],[r+g,u+h,x],[r,u+h,x],[0,0,x===m?-1:1],mo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}{let f=Le.spring+Le.r-.05,l=Le.spring+Le.r+a+.12,v=.16,d=.22,p=i+.04;t.quad([p,f,Le.zc-v],[p,f,Le.zc+v],[p,l,Le.zc+d],[p,l,Le.zc-d],[1,0,0],mo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);for(let u of[-1,1])t.quad([r,f,Le.zc+u*v],[p,f,Le.zc+u*v],[p,l,Le.zc+u*d],[r,l,Le.zc+u*d],[0,0,u],mo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);t.quad([r,l,Le.zc-d],[p,l,Le.zc-d],[p,l,Le.zc+d],[r,l,Le.zc+d],[0,1,0],mo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}}{let{x0:r,x1:n,z0:a,z1:s,top:i}=I0;t.quad([r,0,a],[r,0,s],[r,i,s],[r,i,a],[1,0,0],mo.WALL,[[a,0],[s,0],[s,i],[a,i]]);for(let[f,l]of[[a,1],[s,-1]]){let v=so.x-Math.sqrt(Eo*Eo-(f-so.z)*(f-so.z));t.quad([r,0,f],[v,0,f],[v,i,f],[r,i,f],[0,0,l],mo.WALL,[[r,0],[v,0],[v,i],[r,i]])}let c=24;for(let f=0;f<c;f++){let l=a+(s-a)*f/c,v=a+(s-a)*(f+1)/c,d=so.x-Math.sqrt(Eo*Eo-(l-so.z)**2),p=so.x-Math.sqrt(Eo*Eo-(v-so.z)**2);t.quad([r,i,l],[d,i,l],[p,i,v],[r,i,v],[0,-1,0],mo.WALL,[[0,200],[0,200],[0,200],[0,200]])}for(let f=0;f<c;f++){let l=a+(s-a)*f/c,v=a+(s-a)*(f+1)/c,d=so.x-Math.sqrt(Eo*Eo-(l-so.z)**2)+.05,p=so.x-Math.sqrt(Eo*Eo-(v-so.z)**2)+.05;t.quad([d,i-.3,l],[p,i-.3,v],[p,i,v],[d,i,l],[1,0,0],mo.WALL,[[0,200],[0,200],[0,200],[0,200]])}}{let n=[1.15,1.6,2.3,3,3.35,4.2,Eo];for(let a=0;a<120;a++){let s=a/120*2*t0,i=(a+1)/120*2*t0,c=(s+i)/2;c>t0&&(c-=2*t0);for(let f=0;f<n.length-1;f++){let l=n[f],v=n[f+1],d=c*180/t0;l>=3.3&&d>8&&d<85||t.quad(e(s,l,Mn),e(s,v,Mn),e(i,v,Mn),e(i,l,Mn),[0,-1,0],mo.CEIL,[[s*l,l],[s*v,v],[i*v,v],[i*l,l]])}t.quad(e(s,1.15,Mn),e(i,1.15,Mn),e(i,1.15,Mn+.7),e(s,1.15,Mn+.7),o(c).map(f=>-f),mo.CEIL,[[0,400],[0,400],[0,400],[0,400]]),t.tri([so.x,Mn+.7,so.z],e(i,1.15,Mn+.7),e(s,1.15,Mn+.7),[0,-1,0],mo.OCULUS)}}{let r=Yo.ri,n=Yo.ro,a=Yo.n*Yo.step;for(let c=0;c<Yo.n;c++){let f=c*Yo.step,l=(c+1)*Yo.step,v=Zn(f),d=Zn(l),p=(c+1)*Yo.rise,u=c*Yo.rise,h=2;for(let y=0;y<h;y++){let x=v+(d-v)*y/h-(y===0?.004:0),_=v+(d-v)*(y+1)/h;t.quad(e(x,r,p),e(x,n,p),e(_,n,p),e(_,r,p),[0,1,0],mo.STEP,[[r*x,c],[n*x,c],[n*_,c],[r*_,c]])}let g=[-Math.sin(v),0,Math.cos(v)],m=v-.004;t.quad(e(m,r,u),e(m,n,u),e(m,n,p),e(m,r,p),g,mo.STEP,[[r*v,c+.5],[n*v,c+.5],[n*v,c+.5],[r*v,c+.5]]),t.quad(e(v,r,fs(f)+.06),e(d,r,fs(l)+.06),e(d,r,p),e(m,r,p),o((v+d)/2).map(y=>-y),mo.STEP,[[0,500],[0,500],[0,500],[0,500]])}let s=Math.ceil(a/(1.2*t0/180)),i=[r,r+.6,r+1.2,n];for(let c=0;c<s;c++){let f=c/s*a,l=(c+1)/s*a,v=Zn(f),d=Zn(l),p=fs(f),u=fs(l),h=p-Yo.thick,g=u-Yo.thick,m=o(v).map(k=>-k),y=o(d).map(k=>-k),x=t.v(e(v,r,h),m,mo.STRING,[f*r,0]),_=t.v(e(d,r,g),y,mo.STRING,[l*r,0]),M=t.v(e(d,r,u+.06),y,mo.STRING,[l*r,1]),w=t.v(e(v,r,p+.06),m,mo.STRING,[f*r,1]);t.idx.push(x,_,M,x,M,w);for(let k=0;k<i.length-1;k++){let E=i[k],z=i[k+1],P=R=>{let B=o(R);return[-B[0]*.12,-.99,-B[2]*.12]};t.quad(e(v,E,h),e(v,z,h),e(d,z,g),e(d,E,g),P((v+d)/2),mo.SOFFIT,[[f*E,E],[f*z,z],[l*z,z],[l*E,E]])}}}return t}function F_(){let t=o3(),e=Yo.ri+.045,o=Yo.n*Yo.step,r=Math.ceil(o/(.8*t0/180)),n=.92,a=(c,f,l)=>[so.x+Math.cos(c)*f,l,so.z+Math.sin(c)*f],s=c=>[Math.cos(c),0,Math.sin(c)];for(let c=0;c<r;c++){let f=c/r*o,l=(c+1)/r*o,v=Zn(f),d=Zn(l),p=fs(f)+.06,u=fs(l)+.06,h=s(v).map(k=>-k),g=s(d).map(k=>-k),m=f*e,y=l*e,x=t.v(a(v,e,p),h,mo.RAILING,[m,0]),_=t.v(a(d,e,u),g,mo.RAILING,[y,0]),M=t.v(a(d,e,u+n),g,mo.RAILING,[y,n]),w=t.v(a(v,e,p+n),h,mo.RAILING,[m,n]);t.idx.push(x,_,M,x,M,w)}((c,f,l,v)=>{let p=h=>{let g=Zn(h),m=fs(h)+.06+f,y=a(g,e+c,m),x=s(g),_=[];for(let M=0;M<8;M++){let w=M/8*2*t0,k=[x[0]*Math.cos(w),Math.sin(w),x[2]*Math.cos(w)];_.push([[y[0]+k[0]*l,y[1]+k[1]*l,y[2]+k[2]*l],k])}return _},u=p(0);for(let h=1;h<=r;h++){let g=p(h/r*o);for(let m=0;m<8;m++){let y=(m+1)%8,x=t.v(u[m][0],u[m][1],v),_=t.v(g[m][0],g[m][1],v),M=t.v(g[y][0],g[y][1],v),w=t.v(u[y][0],u[y][1],v);t.idx.push(x,_,M,x,M,w)}u=g}})(0,n+.02,.028,mo.IRON);for(let c of gd){let f=Math.atan2(c[2]-so.z,c[0]-so.x),l=[Math.cos(f),0,Math.sin(f)],v=12;for(let h=0;h<v;h++){let g=h/v*2*t0,m=(h+1)/v*2*t0,y=(x,_,M)=>[c[0]+Math.cos(x)*_,M,c[2]+Math.sin(x)*_];t.quad(y(g,.16,c[1]),y(m,.16,c[1]),y(m,.13,c[1]-.05),y(g,.13,c[1]-.05),[Math.cos(g)*.6,.8,Math.sin(g)*.6],mo.IRON),t.quad(y(g,.16,c[1]),y(m,.16,c[1]),y(m,0,c[1]+.002),y(g,0,c[1]+.002),[0,1,0],mo.IRON)}let d=[c[0]+l[0]*.16,c[1]-.35,c[2]+l[2]*.16],p=[-l[2],0,l[0]],u=.018;t.quad([d[0]-p[0]*u,d[1],d[2]-p[2]*u],[d[0]+p[0]*u,d[1],d[2]+p[2]*u],[c[0]+p[0]*u,c[1]-.05,c[2]+p[2]*u],[c[0]-p[0]*u,c[1]-.05,c[2]-p[2]*u],[-l[0],.5,-l[2]],mo.IRON)}{let c=Zn(0),f=a(c,e,0),l=10;for(let v=0;v<l;v++){let d=v/l*2*t0,p=(v+1)/l*2*t0,u=(h,g,m)=>[f[0]+Math.cos(h)*g,m,f[2]+Math.sin(h)*g];t.quad(u(d,.035,0),u(p,.035,0),u(p,.035,n+.1),u(d,.035,n+.1),[Math.cos((d+p)/2),0,Math.sin((d+p)/2)],mo.IRON),t.quad(u(d,.06,n+.1),u(p,.06,n+.1),u(p,.03,n+.2),u(d,.03,n+.2),[Math.cos((d+p)/2)*.8,.6,Math.sin((d+p)/2)*.8],mo.IRON)}}return t}function G_(){let t=[],e=[],o=[],r=[];for(let a of xd){let[s,i,c,f,l,v]=a,d=t.length/3;for(let u=0;u<=7;u++){let h=u/7*2*t0+v,g=Math.cos(h),m=Math.sin(h);t.push(s+g*f,i,c+m*f,s+g*f,i+l,c+m*f),e.push(g,0,m,g,0,m),o.push(0,l,v,1,l,v)}for(let u=0;u<7;u++){let h=d+u*2;r.push(h,h+2,h+3,h,h+3,h+1)}let p=t.length/3;t.push(s,i+l-.006,c),e.push(0,1,0),o.push(2,l,v);for(let u=0;u<7;u++){let h=u/7*2*t0+v;t.push(s+Math.cos(h)*f,i+l,c+Math.sin(h)*f),e.push(0,1,0),o.push(1,l,v)}for(let u=0;u<7;u++)r.push(p,p+1+u,p+1+(u+1)%7)}return{pos:t,nrm:e,info:o,idx:r}}function H_(){let t=[],e=[],o=[],r=[];for(let n of xd){let[a,s,i,,c,f]=n,l=t.length/3;for(let v of[[-1,0],[1,0],[1,1],[-1,1]])t.push(a,s+c+.004,i),e.push(v[0],v[1]),o.push(f);r.push(l,l+1,l+2,l,l+2,l+3)}return{ctr:t,corner:e,ph:o,idx:r}}function U_(t){let e=new DataView(t),o=e.getUint32(4,!0),r=e.getUint32(8,!0),n=[],a=[];for(let m=0;m<3;m++)n.push(e.getFloat32(12+m*4,!0)),a.push(e.getFloat32(24+m*4,!0));let s=36,i=new Uint16Array(t,s,o*3);s+=o*6;let c=new Uint16Array(t,s,r);s+=r*2;let f=new Int8Array(t,s,o*3);s+=o*3;let l=new Uint8Array(t,s,o),v=new Float32Array(o*3),d=new Float32Array(o*3),p=new Float32Array(o),u=Math.cos(y0.yaw),h=Math.sin(y0.yaw),g=y0.scale;for(let m=0;m<o;m++){let y=(n[0]+i[m*3]/65535*a[0])*g,x=(n[1]+i[m*3+1]/65535*a[1])*g,_=(n[2]+i[m*3+2]/65535*a[2])*g;v[m*3]=y0.x+u*y+h*_,v[m*3+1]=x,v[m*3+2]=y0.z-h*y+u*_;let M=f[m*3]/127,w=f[m*3+1]/127,k=f[m*3+2]/127;d[m*3]=u*M+h*k,d[m*3+1]=w,d[m*3+2]=-h*M+u*k,p[m]=l[m]}return{pos:v,nrm:d,mat:p,idx:new Uint32Array(c)}}function B_(){let t=[],e=(v,d)=>[so.x+Math.cos(v)*d,so.z+Math.sin(v)*d];t.push([[0,Le.z0],[ls(Le.z0),Le.z0]]),t.push([[ls(Le.z1),Le.z1],[0,Le.z1]]);let o=Math.asin((Le.z1-so.z)/Eo),r=72;for(let v=0;v<r;v++){let d=o+v/r*(2*t0-2*o),p=o+(v+1)/r*(2*t0-2*o);t.push([e(d,Eo-.25),e(p,Eo-.25)])}let n=Ch[0]-.55+.35;t.push([[n,I0.z0],[n,I0.z1]]);let a=2.4/Yo.k,s=12;for(let v=0;v<s;v++){let d=Zn(v/s*a),p=Zn((v+1)/s*a);t.push([e(d,Yo.ri-.2),e(p,Yo.ri-.2)])}t.push([e(Zn(0),Yo.ri-.2),e(Zn(0),Eo)]),t.push([e(Zn(a),Yo.ri-.2),e(Zn(a),Eo)]);let i=Math.cos(y0.yaw),c=Math.sin(y0.yaw),f=y0.scale,l=[[-1,-.62],[1.25,-.62],[1.25,.62],[-1,.62]].map(([v,d])=>[y0.x+(i*v+c*d)*f,y0.z+(-c*v+i*d)*f]);for(let v=0;v<4;v++)t.push([l[v],l[(v+1)%4]]);return t}lr.exports=t=>{let e=D_(),o=F_(),r=G_(),n=H_(),a=cs(),s=`
	precision highp float;
	${R_.GLSL}
	uniform float time;
	${e3()}
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
				base *= 1.0 - 0.25 * smoothstep(3.0, ${rn(Mn)}, v_pos.y);
			} else if (k < 2.5) {
				// the steps: a greyer, harder stone, worn paler in the middle
				float r = length(v_pos.xz - vec2(${rn(so.x)}, ${rn(so.z)}));
				base = limestone(v_pos.xz * 1.4 + v_uv * 0.3) * vec3(0.90, 0.88, 0.86);
				base *= 1.0 + 0.10 * (1.0 - smoothstep(0.0, 0.6, abs(r - ${rn((Yo.ri+Yo.ro)/2)})));
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
				vec2 q = v_pos.xz - vec2(${rn(so.x)}, ${rn(so.z)});
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
		}`,attributes:{ctr:n.ctr,corner:n.corner,ph:n.ph},elements:new Uint32Array(n.idx),uniforms:{halo:t.prop("halo")},depth:{enable:!0,mask:!1},cull:{enable:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),d=null;fetch("res/piano.bin").then(g=>{if(!g.ok)throw new Error("Could not load piano.bin");return g.arrayBuffer()}).then(g=>{let m=U_(g);d=t({vert:`
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
				}`,attributes:{position:m.pos,normal:m.nrm,mat:m.mat},elements:m.idx,cull:{enable:!1}})}).catch(g=>console.error(g));let p=(()=>{let g=[],m=[],y=[],x=[],M=[so.x,Mn-.3,so.z],w=[Hl.stoolX,.02,Hl.keyFront+.1],k=1.25,E=2.35;for(let z=0;z<=40;z++){let P=z/40*2*t0,R=Math.cos(P),B=Math.sin(P);g.push(M[0]+R*k,M[1],M[2]+B*k,w[0]+R*E,w[1],w[2]+B*E),m.push(R,.08,B,R,.08,B),y.push(1,0)}for(let z=0;z<40;z++){let P=z*2;x.push(P,P+1,P+3,P,P+3,P+2)}return{pos:g,nrm:m,hh:y,idx:x}})(),u=t({vert:`
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
		}`,attributes:{position:p.pos,normal:p.nrm,hh:p.hh},elements:p.idx,depth:{enable:!0,mask:!1},cull:{enable:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});function h(g){let m=g&&g.reflected;c(),f(),l(),d&&d(),m||(u(),v({halo:1}),v({halo:0}))}return h};lr.exports.C=so;lr.exports.R=Eo;lr.exports.PASS=Le;lr.exports.SURR=_a;lr.exports.OFF=Ch;lr.exports.BAY=I0;lr.exports.PATH=Rh;lr.exports.PIANO=y0;lr.exports.PLAY=Hl;lr.exports.TOP=Mn;lr.exports.roomGLSL=e3;lr.exports.segments=B_});var u3=Tt((H7,h3)=>{"use strict";var j_=Zs(),{addFlutedColumn:n3,addStatue:W_,addPlant:V_}=N2(),r3=as(),X_=hc(),aa=Tn(),Y_=Gr(),bc=hs(),Ho=14,D0=aa.C.hallEnd+.35,s0=8,Zo=.35,yd=1.15,bd=1.15,wd=[18,29,40],K_=[[[0,0],[0,bc.PASS.z0]],[[0,bc.PASS.z1],[0,D0]],[[Ho,D0],[Ho,0]],[[0,0],[Ho,0]],[[Ho,D0],[0,D0]]],c3=[];for(let t of wd)for(let e of[1.25,Ho-1.25]){let o=yd/2,r=bd/2;c3.push([[e-o,t-r],[e+o,t-r]],[[e+o,t-r],[e+o,t+r]],[[e+o,t+r],[e-o,t+r]],[[e-o,t+r],[e-o,t-r]])}var Ph=12,l3=2.95,f3=.62,Dh=l3+f3,Ih=[{file:"venus.bin",x:1.85,z:D0-1.6,yaw:2.67,height:5.2,pedestal:!0,mat:1},{file:"david.bin",x:Ho-2.1,z:D0-1.6,yaw:-2.67,height:5.2,pedestal:!0,mat:1},{file:"pieta.bin",x:1.75,z:5.9,yaw:Math.PI/2,height:3.6,base:1,mat:1},{file:"spinario.bin",x:aa.NICHE_X[0],z:aa.NICHE_STATUE_Z,yaw:-.35,height:1.85,base:aa.NICHE_PLINTH_TOP,mat:3},{file:"charioteer.bin",x:aa.NICHE_X[1],z:aa.NICHE_STATUE_Z+.1,yaw:0,height:2.95,base:aa.NICHE_PLINTH_TOP,mat:3}],Z_={x0:Zo,x1:3.15,z0:3.6,z1:8.2,top:1},a3=.8,Fh=1.17,Ul=[];[{z:10.4,dz:-.7},{z:19.2,dz:.7},{z:27.8,dz:-.7}].forEach((t,e)=>{Ul.push({x:1,z:t.z,seed:11+e*7,away:[1,t.dz]}),Ul.push({x:Ho-1,z:t.z,seed:53+e*5,away:[-1,t.dz]})});function _d(t,e,o,r){return[[[t-o,e-r],[t+o,e-r]],[[t+o,e-r],[t+o,e+r]],[[t+o,e+r],[t-o,e+r]],[[t-o,e+r],[t-o,e-r]]]}var Gh=[];for(let t of[-1,1])Gh.push(..._d(Ho/2+t*Dh,Ph,.85,.85));for(let t of Ih.filter(e=>e.pedestal))Gh.push(..._d(t.x,t.z,Fh*1.1,Fh*1.1));for(let t of Ul)Gh.push(..._d(t.x,t.z,.42,.42));var Q_=K_.concat(c3,Gh,bc.segments());function J_(t){let o=new Map,r=(n,a,s)=>{let i=n+":"+a;o.has(i)||o.set(i,[]);let c=o.get(i);c.includes(s)||c.push(s)};for(let n of t){let a=Math.floor(Math.min(n[0][0],n[1][0])/4)-1,s=Math.floor(Math.max(n[0][0],n[1][0])/4)+1,i=Math.floor(Math.min(n[0][1],n[1][1])/4)-1,c=Math.floor(Math.max(n[0][1],n[1][1])/4)+1;for(let f=a;f<=s;f++)for(let l=i;l<=c;l++)r(f,l,n)}return{get(n,a){let s=Math.floor(n/4),i=Math.floor(a/4),c=[];for(let f=-1;f<=1;f++)for(let l=-1;l<=1;l++){let v=o.get(s+f+":"+(i+l));v&&c.push(...v)}return[...new Set(c)]}}}var qh=[],q0={curMat:[0,0,0]};function Md(t,e,o,r,n,a,s){let i=t.length/3;t.push(...o,...r,...n,...a),e.push(...s,...s,...s,...s);let c=q0.curMat;return qh.push(...c,...c,...c,...c),[i,i+2,i+1,i+1,i+2,i+3]}function Ko(t,e,o,r,n,a,s,i,c){let f=(l,v,d,p,u)=>{o.push(...Md(t,e,l,v,d,p,u))};f([r,n,a],[s,n,a],[r,i,a],[s,i,a],[0,0,-1]),f([s,n,c],[r,n,c],[s,i,c],[r,i,c],[0,0,1]),f([r,n,c],[r,n,a],[r,i,c],[r,i,a],[-1,0,0]),f([s,n,a],[s,n,c],[s,i,a],[s,i,c],[1,0,0]),f([r,i,a],[s,i,a],[r,i,c],[s,i,c],[0,1,0]),f([r,n,c],[s,n,c],[r,n,a],[s,n,a],[0,-1,0])}function yc(t,e,o,r,n){let a=q0,s=a.vert(t,n),i=a.vert(e,n),c=a.vert(o,n),f=a.vert(r,n);a.tri(s,i,c),a.tri(i,f,c)}function s3(t,e,o,r,n,a,s){for(let i=0;i<s;i++){let c=Math.PI*i/s,f=Math.PI*(i+1)/s,l=Math.cos(c),v=Math.sin(c),d=Math.cos(f),p=Math.sin(f),u=[t+o*l,e+o*v],h=[t+o*d,e+o*p],g=[t+r*l,e+r*v],m=[t+r*d,e+r*p];yc([u[0],u[1],n],[h[0],h[1],n],[g[0],g[1],n],[m[0],m[1],n],[0,0,-1]),yc([u[0],u[1],a],[h[0],h[1],a],[g[0],g[1],a],[m[0],m[1],a],[0,0,1]);let y=(c+f)/2;yc([u[0],u[1],n],[h[0],h[1],n],[u[0],u[1],a],[h[0],h[1],a],[-Math.cos(y),-Math.sin(y),0]),yc([g[0],g[1],n],[m[0],m[1],n],[g[0],g[1],a],[m[0],m[1],a],[Math.cos(y),Math.sin(y),0])}}function tM(t,e,o,r,n,a,s){for(let i=0;i<s;i++){let c=Math.PI*i/s,f=Math.PI*(i+1)/s,l=t+o*Math.cos(c),v=e+o*Math.sin(c),d=t+o*Math.cos(f),p=e+o*Math.sin(f);yc([l,v,n],[d,p,n],[l,r,n],[d,r,n],[0,0,-1]),yc([l,v,a],[d,p,a],[l,r,a],[d,r,a],[0,0,1])}}function eM(t,e,o,r){let n=Ho/2,a=l3,s=3,i=a+.42,c=i+.15,f=f3,l=Dh,v=5.98,d=r-.45,p=r+.45,u=64,h=n3(q0,n-l,r,0,v,f);n3(q0,n+l,r,0,v,f),q0.curMat=[0,0,0],s3(n,s,a,i,d,p,u),s3(n,s,i,c,d-.07,p+.07,u),tM(n,s,c,h+.05,d,p,u);for(let m of[-1,1]){let y=n+m*(c-.02),x=n+m*l;Ko(t,e,o,Math.min(y,x),s,d,Math.max(y,x),h+.05,p)}for(let m of[-1,1]){let y=n+m*(a-.05),x=n+m*(a+.85);Ko(t,e,o,Math.min(y,x),s-.16,r-.6,Math.max(y,x),s,r+.6)}let g=l+f*1.42+.45;Ko(t,e,o,n-g,h,r-.7,n+g,h+.44,r+.7),Ko(t,e,o,n-g+.12,h+.44,r-.62,n+g-.12,h+.7,r+.62),Ko(t,e,o,n-g-.1,h+.7,r-.84,n+g+.1,h+.84,r+.84),Ko(t,e,o,n-g-.22,h+.84,r-.96,n+g+.22,h+1,r+.96),Ko(t,e,o,n-.3,s+a-.1,r-.56,n+.3,h,r+.56)}function i3(t,e,o,r,n){Ko(t,e,o,r-.72,0,n-.72,r+.72,.2,n+.72),Ko(t,e,o,r-.58,.2,n-.58,r+.58,.4,n+.58),Ko(t,e,o,r-yd/2,.4,n-bd/2,r+yd/2,s0-1.35,n+bd/2),Ko(t,e,o,r-.67,.42,n-.67,r+.67,.62,n+.67),Ko(t,e,o,r-.67,s0-1.58,n-.67,r+.67,s0-1.35,n+.67),Ko(t,e,o,r-.82,s0-1.35,n-.82,r+.82,s0-1.05,n+.82),Ko(t,e,o,r-.66,s0-1.05,n-.66,r+.66,s0-.78,n+.66),Ko(t,e,o,r-.92,s0-.78,n-.92,r+.92,s0-.55,n+.92),Ko(t,e,o,r-.78,s0-.55,n-.78,r+.78,s0-.3,n+.78),Ko(t,e,o,r-.92,s0-.3,n-.92,r+.92,s0-.1,n+.92)}function $h(t,e,o,r,n){n==="left"?(Ko(t,e,o,-.08,1,r-3.8/2,.14,5.7,r+3.8/2),Ko(t,e,o,-.08-.04,1+.18,r-3.8/2+.18,.18,5.7-.18,r+3.8/2-.18)):(Ko(t,e,o,Ho-.14,1,r-3.8/2,Ho+.08,5.7,r+3.8/2),Ko(t,e,o,Ho-.18,1+.18,r-3.8/2+.18,Ho+.08+.04,5.7-.18,r+3.8/2-.18))}function oM(t,e,o,r){Ko(t,e,o,.65,s0-.16,r-1.65,.65+.22,s0,r+1.65),Ko(t,e,o,Ho-.65-.22,s0-.16,r-1.65,Ho-.65,s0,r+1.65),Ko(t,e,o,.65,s0-.16,r-1.65,Ho-.65,s0,r-1.43),Ko(t,e,o,.65,s0-.16,r+1.43,Ho-.65,s0,r+1.65),o.push(...Md(t,e,[.65+.22,s0-.16,r-1.43],[Ho-.65-.22,s0-.16,r-1.43],[.65+.22,s0-.16,r+1.43],[Ho-.65-.22,s0-.16,r+1.43],[0,-1,0]))}h3.exports=function(){let t=[],e=[],o=[];qh=[],q0=j_.createBuilder(t,e,o,qh),o.push(...Md(t,e,[0,0,0],[Ho,0,0],[0,0,D0],[Ho,0,D0],[0,1,0])),X_.addSkylight(q0,[0,0,0],D0),q0.curMat=[0,0,0];{let c=bc.SURR;Ko(t,e,o,-Zo,0,0,Zo,s0,c.z0),Ko(t,e,o,-Zo,0,c.z1,Zo,s0,D0),Ko(t,e,o,-Zo,c.top,c.z0,Zo,s0,c.z1)}Ko(t,e,o,Ho-Zo,0,aa.C.z1,Ho+Zo,s0,D0-Zo),Ko(t,e,o,Ho-Zo-.12,0,aa.C.z1+2*Zo,Ho-Zo,.42,D0-Zo),Ko(t,e,o,Ho-Zo-.07,.42,aa.C.z1+2*Zo,Ho-Zo,.5,D0-Zo);for(let[c,f]of[[0,bc.SURR.z0],[bc.SURR.z1,D0-Zo]])Ko(t,e,o,Zo,0,c,Zo+.12,.42,f),Ko(t,e,o,Zo,.42,c,Zo+.07,.5,f);Ko(t,e,o,Zo,0,D0-Zo-.12,Ho-Zo,.42,D0-Zo),Ko(t,e,o,Zo,.42,D0-Zo-.07,Ho-Zo,.5,D0-Zo),r3.addEntranceWall(q0),r3.addFrames(q0),q0.curMat=[0,0,0],Ko(t,e,o,-Zo,0,D0-Zo,Ho+Zo,s0,D0+Zo),eM(t,e,o,Ph);for(let c of wd)i3(t,e,o,1.25,c),i3(t,e,o,Ho-1.25,c);$h(t,e,o,22,"left"),$h(t,e,o,25,"right"),$h(t,e,o,33,"left"),$h(t,e,o,36,"right");let r=[4,9,34,39,44,49];for(let c of r)oM(t,e,o,c);aa.addWing(q0),q0.curMat=[0,0,0];for(let c of Ih.filter(f=>f.pedestal))W_(q0,c.x,c.z,Fh,a3);{let c=Z_;q0.curMat=[0,0,0],q0.box(c.x0,0,c.z0-.08,c.x1+.08,.16,c.z1+.08,[0,0,0]),q0.box(c.x0,.16,c.z0+.04,c.x1-.04,c.top-.14,c.z1-.04,[0,0,0]),q0.box(c.x0,c.top-.14,c.z0-.02,c.x1+.03,c.top-.06,c.z1+.02,[0,0,0]),q0.box(c.x0,c.top-.06,c.z0-.06,c.x1+.07,c.top,c.z1+.06,[0,0,0])}Y_.addAlcove(q0);for(let c of Ul)V_(q0,c.x,c.z,c.seed,1,c.away);q0.curMat=[0,0,0];let n=[[[Ho,D0-.35],[0,D0-.35]],[[0,3],[0,10]],[[Ho,15],[Ho,22]],[[0,24],[0,31]],[[Ho,33],[Ho,40]],[[0,41],[0,46]]],a=J_(Q_),s=(c,f)=>{let l=0,v=1/0;return n.forEach((d,p)=>{let u=(d[0][0]+d[1][0])/2,h=(d[0][1]+d[1][1])/2,g=Math.hypot(c-u,f-h);g<v&&(v=g,l=p)}),l},i=[];for(let c=0;c<10;c++)i.push({c:[0,0,0,0],d:[1,0,0,0]});return{placements:n,lights:i,statues:Ih,occluders:[...wd.flatMap(c=>[[1.25,c,.78],[Ho-1.25,c,.78]]),[Ho/2-Dh,Ph,.86],[Ho/2+Dh,Ph,.86],...Ih.filter(c=>c.pedestal).map(c=>[c.x,c.z,Fh*1.12]),...Ul.map(c=>[c.x,c.z,.34])],pedestalTop:a3,mat:qh,getAreaIndex:s,getGridSegments:(c,f)=>a.get(c,f),getGridParts:(c,f)=>a.get(c,f),position:t,normal:e,elements:o}}});var kd=Tt((U7,d3)=>{"use strict";var{doorLightGLSL:nM}=as(),{skylightGLSL:rM}=hc(),{windowLightGLSL:aM,C:Sr}=Tn(),{alcoveLightGLSL:sM}=Gr(),Hr=t=>t.toFixed(4),iM=(()=>{let t=[-.22,.6,-.77],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>(o/e).toFixed(4)).join(", ")})();d3.exports=(t,e,o,r)=>{let a=(e.occluders||[]).slice(0,24).map(([p,u,h])=>`ao = min(ao, contact(v_pos.xz, vec2(${p.toFixed(3)}, ${u.toFixed(3)}), ${h.toFixed(3)}));`).join(`
      `),s={c:[0,0,0,0],d:[1,0,0,0]},i=-1,c=[],f=p=>{let u=p&&p.tick!==void 0?p.tick:0;if(u!==i||c.length===0){i=u;let h=e.viewer||[7,2,20];for(c=e.lights.filter(g=>g.c[3]>.5).map(g=>({l:g,d:Math.hypot(g.c[0]-h[0],g.c[2]-h[2])})).sort((g,m)=>g.d-m.d).slice(0,8).map(g=>g.l);c.length<8;)c.push(s)}return c},l={},v="",d="";for(let p=0;p<8;p++)l["lightC"+p]=u=>f(u)[p].c,l["lightD"+p]=u=>f(u)[p].d,v+="uniform vec4 lightC"+p+", lightD"+p+`;
`,d+="pic += pictureLight(lightC"+p+", lightD"+p+`, v_pos, N);
`;return t({frag:`
    precision highp float;

    uniform float yScale;
    uniform float mirrorOn;
    uniform float night;   // 0 by day, 1 at night
    uniform float time;
    ${cs().lanternGLSL()}

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

    ${nM()}

    ${rM()}

    ${aM()}

    ${sM()}

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
          float through = doorLight(v_pos, vec3(${iM}));
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
    }`,attributes:{position:e.position,normal:e.normal,a_mat:e.mat},uniforms:l,blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"zero"}},elements:new Uint32Array(e.elements),offset:r?t.prop("offset"):0,count:r?t.prop("count"):e.elements.length})}});var v3=Tt((B7,p3)=>{"strict mode";var cM="https://api.artic.edu/api/v1/artworks/search",lM=({image_id:t},e)=>`https://www.artic.edu/iiif/2/${t}/full/${e},/0/default.jpg`,fM="?query[bool][must][][term][classification_titles.keyword]=painting&query[bool][must][][term][is_public_domain]=true",hM="&fields=image_id,title,artist_title",uM={low:400,mid:843,high:1686};p3.exports={fetchList:async function(t,e){let o=cM+fM+hM+`&from=${t}&size=${e}`;return(await fetch(o).then(n=>n.json())).data.filter(n=>n.image_id)},fetchImage:async function(t,e){let o=lM(t,uM[e]),r=await fetch(o).then(n=>n.blob());return{title:t.title+" - "+t.artist_title,image:r}}}});var x3=Tt((j7,g3)=>{"use strict";var dM=Wu(),pM=qr(),vM=t=>"images/web/"+t.slug+(pM.isPhone?"-1024":"")+".webp";async function m3(t){let e=await fetch(t);if(!e.ok)throw new Error("Could not load "+t);return e.blob()}g3.exports={fetchList:async function(t,e){return dM.slice(t,t+e).map((o,r)=>({...o,image_id:t+r}))},fetchImage:async function(t){let e;try{e=await m3(vM(t))}catch(o){e=await m3("images/"+t.file)}return{title:t.title,image:e}}}});var b3=Tt((W7,y3)=>{"strict mode";y3.exports={default:"local",artic:v3(),local:x3()}});var zd=Tt((V7,_3)=>{"strict mode";var oi=document.createElement("canvas"),Sd=oi.width=oi.height=1024,us=oi.getContext("2d");us.mozImageSmoothingEnabled=!1;us.webkitImageSmoothingEnabled=!1;us.font="32px Verdana";us.textBaseline="bottom";us.fillStyle="#aaa";function w3(t,e,o,r){var n=e,a,s=0,i=0,c=e.split(" "),f,l;for(f=l=c.length;t.measureText(n).width>o&&f>1;){f--,n=a="";for(var v=0;v<l;v++)v<f?(n+=c[v],v+1<f&&(n+=" ")):(a+=c[v],v+1<l&&(a+=" "))}return r.push(n),i=t.measureText(n).width,a&&(s=w3(t,a,o,r),s>i&&(i=s)),i}_3.exports={init(t,e,o=Sd){var r=[];w3(us,e,Math.min(o*Sd,Sd),r),us.clearRect(0,0,oi.width,oi.height);for(var n=0;n<r.length;n++)us.fillText(r[n],0,oi.height-(Math.max(r.length,3)-n)*32);return t({data:oi,min:"mipmap",mipmap:"nice",flipY:!0})},draw(t){return t({frag:`
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
            }`,attributes:{pos:[0,0,1,0,0,1,1,1,0,1,1,0]},uniforms:{model:t.prop("textmodel"),tex:t.prop("text")},count:6,blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}})}}});var S3=Tt((X7,k3)=>{"strict mode";var Ed=b3(),mM=new URLSearchParams(window.location.search).get("api"),M3=Ed[mM]||Ed[Ed.default],gM=zd(),Ad={},_c=[],xM=2;function yM(t){return(!navigator.connection||navigator.connection.downlink<xM)&&(t=t=="high"?"mid":"low"),t}var bM=qr(),wc=document.createElement("canvas");wc.width=wc.height=bM.isPhone?1024:2048;var Nd=wc.getContext("2d");Nd.imageSmoothingEnabled=!0;Nd.imageSmoothingQuality="high";var Td=!1,wM=t=>[(_c.pop()||t.texture)([[[200,200,200]]]),e=>(_c.pop()||t.texture)([[[0,0,0,0]]]),1];async function Ld(t,e,o){Td===!1&&(Td=t.hasExtension("EXT_texture_filter_anisotropic")?t._gl.getParameter(t._gl.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0);let r,n;try{let a=await M3.fetchImage(e,yM(o));n=a.title,r=await createImageBitmap(a.image),Nd.drawImage(r,0,0,wc.width,wc.height)}catch(a){return console.error(a),o=="high"?await Ld(t,e,"low"):wM(t)}return[(_c.pop()||t.texture)({data:wc,min:"mipmap",mipmap:"nice",aniso:Td,flipY:!0}),a=>gM.init(_c.pop()||t.texture,n,a),r.width/r.height]}k3.exports={fetch:(t,e=10,o="low",r,n)=>{let a=Object.keys(Ad).length;M3.fetchList(a,e).then(s=>{e=s.length,s.map(i=>{if(Ad[i.image_id]){--e===0&&n();return}Ad[i.image_id]=i,Ld(t,i,o).then(([c,f,l])=>{r({...i,tex:c,textGen:f,aspect:l}),--e===0&&n()})})})},load:(t,e,o="low")=>{e.tex||e.loading||(e.loading=!0,Ld(t,e,o).then(([r,n])=>{e.loading=!1,e.tex=r,e.text=n(e.width)}))},unload:t=>{t.tex&&(_c.push(t.tex),t.tex=void 0),t.text&&(_c.push(t.text),t.text=void 0)}}});var E3=Tt((Y7,z3)=>{z3.exports=_M;function _M(){var t=new Float32Array(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var T3=Tt((K7,A3)=>{A3.exports=MM;function MM(t){var e=new Float32Array(16);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}});var N3=Tt((Z7,L3)=>{L3.exports=kM;function kM(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}});var Od=Tt((Q7,O3)=>{O3.exports=SM;function SM(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var C3=Tt((J7,R3)=>{R3.exports=zM;function zM(t,e){if(t===e){var o=e[1],r=e[2],n=e[3],a=e[6],s=e[7],i=e[11];t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=o,t[6]=e[9],t[7]=e[13],t[8]=r,t[9]=a,t[11]=e[14],t[12]=n,t[13]=s,t[14]=i}else t[0]=e[0],t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=e[1],t[5]=e[5],t[6]=e[9],t[7]=e[13],t[8]=e[2],t[9]=e[6],t[10]=e[10],t[11]=e[14],t[12]=e[3],t[13]=e[7],t[14]=e[11],t[15]=e[15];return t}});var P3=Tt((tA,$3)=>{$3.exports=EM;function EM(t,e){var o=e[0],r=e[1],n=e[2],a=e[3],s=e[4],i=e[5],c=e[6],f=e[7],l=e[8],v=e[9],d=e[10],p=e[11],u=e[12],h=e[13],g=e[14],m=e[15],y=o*i-r*s,x=o*c-n*s,_=o*f-a*s,M=r*c-n*i,w=r*f-a*i,k=n*f-a*c,E=l*h-v*u,z=l*g-d*u,P=l*m-p*u,R=v*g-d*h,B=v*m-p*h,$=d*m-p*g,q=y*$-x*B+_*R+M*P-w*z+k*E;return q?(q=1/q,t[0]=(i*$-c*B+f*R)*q,t[1]=(n*B-r*$-a*R)*q,t[2]=(h*k-g*w+m*M)*q,t[3]=(d*w-v*k-p*M)*q,t[4]=(c*P-s*$-f*z)*q,t[5]=(o*$-n*P+a*z)*q,t[6]=(g*_-u*k-m*x)*q,t[7]=(l*k-d*_+p*x)*q,t[8]=(s*B-i*P+f*E)*q,t[9]=(r*P-o*B-a*E)*q,t[10]=(u*w-h*_+m*y)*q,t[11]=(v*_-l*w-p*y)*q,t[12]=(i*z-s*R-c*E)*q,t[13]=(o*R-r*z+n*E)*q,t[14]=(h*x-u*M-g*y)*q,t[15]=(l*M-v*x+d*y)*q,t):null}});var q3=Tt((eA,I3)=>{I3.exports=AM;function AM(t,e){var o=e[0],r=e[1],n=e[2],a=e[3],s=e[4],i=e[5],c=e[6],f=e[7],l=e[8],v=e[9],d=e[10],p=e[11],u=e[12],h=e[13],g=e[14],m=e[15];return t[0]=i*(d*m-p*g)-v*(c*m-f*g)+h*(c*p-f*d),t[1]=-(r*(d*m-p*g)-v*(n*m-a*g)+h*(n*p-a*d)),t[2]=r*(c*m-f*g)-i*(n*m-a*g)+h*(n*f-a*c),t[3]=-(r*(c*p-f*d)-i*(n*p-a*d)+v*(n*f-a*c)),t[4]=-(s*(d*m-p*g)-l*(c*m-f*g)+u*(c*p-f*d)),t[5]=o*(d*m-p*g)-l*(n*m-a*g)+u*(n*p-a*d),t[6]=-(o*(c*m-f*g)-s*(n*m-a*g)+u*(n*f-a*c)),t[7]=o*(c*p-f*d)-s*(n*p-a*d)+l*(n*f-a*c),t[8]=s*(v*m-p*h)-l*(i*m-f*h)+u*(i*p-f*v),t[9]=-(o*(v*m-p*h)-l*(r*m-a*h)+u*(r*p-a*v)),t[10]=o*(i*m-f*h)-s*(r*m-a*h)+u*(r*f-a*i),t[11]=-(o*(i*p-f*v)-s*(r*p-a*v)+l*(r*f-a*i)),t[12]=-(s*(v*g-d*h)-l*(i*g-c*h)+u*(i*d-c*v)),t[13]=o*(v*g-d*h)-l*(r*g-n*h)+u*(r*d-n*v),t[14]=-(o*(i*g-c*h)-s*(r*g-n*h)+u*(r*c-n*i)),t[15]=o*(i*d-c*v)-s*(r*d-n*v)+l*(r*c-n*i),t}});var F3=Tt((oA,D3)=>{D3.exports=TM;function TM(t){var e=t[0],o=t[1],r=t[2],n=t[3],a=t[4],s=t[5],i=t[6],c=t[7],f=t[8],l=t[9],v=t[10],d=t[11],p=t[12],u=t[13],h=t[14],g=t[15],m=e*s-o*a,y=e*i-r*a,x=e*c-n*a,_=o*i-r*s,M=o*c-n*s,w=r*c-n*i,k=f*u-l*p,E=f*h-v*p,z=f*g-d*p,P=l*h-v*u,R=l*g-d*u,B=v*g-d*h;return m*B-y*R+x*P+_*z-M*E+w*k}});var H3=Tt((nA,G3)=>{G3.exports=LM;function LM(t,e,o){var r=e[0],n=e[1],a=e[2],s=e[3],i=e[4],c=e[5],f=e[6],l=e[7],v=e[8],d=e[9],p=e[10],u=e[11],h=e[12],g=e[13],m=e[14],y=e[15],x=o[0],_=o[1],M=o[2],w=o[3];return t[0]=x*r+_*i+M*v+w*h,t[1]=x*n+_*c+M*d+w*g,t[2]=x*a+_*f+M*p+w*m,t[3]=x*s+_*l+M*u+w*y,x=o[4],_=o[5],M=o[6],w=o[7],t[4]=x*r+_*i+M*v+w*h,t[5]=x*n+_*c+M*d+w*g,t[6]=x*a+_*f+M*p+w*m,t[7]=x*s+_*l+M*u+w*y,x=o[8],_=o[9],M=o[10],w=o[11],t[8]=x*r+_*i+M*v+w*h,t[9]=x*n+_*c+M*d+w*g,t[10]=x*a+_*f+M*p+w*m,t[11]=x*s+_*l+M*u+w*y,x=o[12],_=o[13],M=o[14],w=o[15],t[12]=x*r+_*i+M*v+w*h,t[13]=x*n+_*c+M*d+w*g,t[14]=x*a+_*f+M*p+w*m,t[15]=x*s+_*l+M*u+w*y,t}});var B3=Tt((rA,U3)=>{U3.exports=NM;function NM(t,e,o){var r=o[0],n=o[1],a=o[2],s,i,c,f,l,v,d,p,u,h,g,m;return e===t?(t[12]=e[0]*r+e[4]*n+e[8]*a+e[12],t[13]=e[1]*r+e[5]*n+e[9]*a+e[13],t[14]=e[2]*r+e[6]*n+e[10]*a+e[14],t[15]=e[3]*r+e[7]*n+e[11]*a+e[15]):(s=e[0],i=e[1],c=e[2],f=e[3],l=e[4],v=e[5],d=e[6],p=e[7],u=e[8],h=e[9],g=e[10],m=e[11],t[0]=s,t[1]=i,t[2]=c,t[3]=f,t[4]=l,t[5]=v,t[6]=d,t[7]=p,t[8]=u,t[9]=h,t[10]=g,t[11]=m,t[12]=s*r+l*n+u*a+e[12],t[13]=i*r+v*n+h*a+e[13],t[14]=c*r+d*n+g*a+e[14],t[15]=f*r+p*n+m*a+e[15]),t}});var W3=Tt((aA,j3)=>{j3.exports=OM;function OM(t,e,o){var r=o[0],n=o[1],a=o[2];return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t[4]=e[4]*n,t[5]=e[5]*n,t[6]=e[6]*n,t[7]=e[7]*n,t[8]=e[8]*a,t[9]=e[9]*a,t[10]=e[10]*a,t[11]=e[11]*a,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}});var X3=Tt((sA,V3)=>{V3.exports=RM;function RM(t,e,o,r){var n=r[0],a=r[1],s=r[2],i=Math.sqrt(n*n+a*a+s*s),c,f,l,v,d,p,u,h,g,m,y,x,_,M,w,k,E,z,P,R,B,$,q,ct;return Math.abs(i)<1e-6?null:(i=1/i,n*=i,a*=i,s*=i,c=Math.sin(o),f=Math.cos(o),l=1-f,v=e[0],d=e[1],p=e[2],u=e[3],h=e[4],g=e[5],m=e[6],y=e[7],x=e[8],_=e[9],M=e[10],w=e[11],k=n*n*l+f,E=a*n*l+s*c,z=s*n*l-a*c,P=n*a*l-s*c,R=a*a*l+f,B=s*a*l+n*c,$=n*s*l+a*c,q=a*s*l-n*c,ct=s*s*l+f,t[0]=v*k+h*E+x*z,t[1]=d*k+g*E+_*z,t[2]=p*k+m*E+M*z,t[3]=u*k+y*E+w*z,t[4]=v*P+h*R+x*B,t[5]=d*P+g*R+_*B,t[6]=p*P+m*R+M*B,t[7]=u*P+y*R+w*B,t[8]=v*$+h*q+x*ct,t[9]=d*$+g*q+_*ct,t[10]=p*$+m*q+M*ct,t[11]=u*$+y*q+w*ct,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t)}});var K3=Tt((iA,Y3)=>{Y3.exports=CM;function CM(t,e,o){var r=Math.sin(o),n=Math.cos(o),a=e[4],s=e[5],i=e[6],c=e[7],f=e[8],l=e[9],v=e[10],d=e[11];return e!==t&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[4]=a*n+f*r,t[5]=s*n+l*r,t[6]=i*n+v*r,t[7]=c*n+d*r,t[8]=f*n-a*r,t[9]=l*n-s*r,t[10]=v*n-i*r,t[11]=d*n-c*r,t}});var Q3=Tt((cA,Z3)=>{Z3.exports=$M;function $M(t,e,o){var r=Math.sin(o),n=Math.cos(o),a=e[0],s=e[1],i=e[2],c=e[3],f=e[8],l=e[9],v=e[10],d=e[11];return e!==t&&(t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=a*n-f*r,t[1]=s*n-l*r,t[2]=i*n-v*r,t[3]=c*n-d*r,t[8]=a*r+f*n,t[9]=s*r+l*n,t[10]=i*r+v*n,t[11]=c*r+d*n,t}});var tg=Tt((lA,J3)=>{J3.exports=PM;function PM(t,e,o){var r=Math.sin(o),n=Math.cos(o),a=e[0],s=e[1],i=e[2],c=e[3],f=e[4],l=e[5],v=e[6],d=e[7];return e!==t&&(t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=a*n+f*r,t[1]=s*n+l*r,t[2]=i*n+v*r,t[3]=c*n+d*r,t[4]=f*n-a*r,t[5]=l*n-s*r,t[6]=v*n-i*r,t[7]=d*n-c*r,t}});var og=Tt((fA,eg)=>{eg.exports=IM;function IM(t,e,o){var r,n,a,s=o[0],i=o[1],c=o[2],f=Math.sqrt(s*s+i*i+c*c);return Math.abs(f)<1e-6?null:(f=1/f,s*=f,i*=f,c*=f,r=Math.sin(e),n=Math.cos(e),a=1-n,t[0]=s*s*a+n,t[1]=i*s*a+c*r,t[2]=c*s*a-i*r,t[3]=0,t[4]=s*i*a-c*r,t[5]=i*i*a+n,t[6]=c*i*a+s*r,t[7]=0,t[8]=s*c*a+i*r,t[9]=i*c*a-s*r,t[10]=c*c*a+n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t)}});var rg=Tt((hA,ng)=>{ng.exports=qM;function qM(t,e,o){var r=e[0],n=e[1],a=e[2],s=e[3],i=r+r,c=n+n,f=a+a,l=r*i,v=r*c,d=r*f,p=n*c,u=n*f,h=a*f,g=s*i,m=s*c,y=s*f;return t[0]=1-(p+h),t[1]=v+y,t[2]=d-m,t[3]=0,t[4]=v-y,t[5]=1-(l+h),t[6]=u+g,t[7]=0,t[8]=d+m,t[9]=u-g,t[10]=1-(l+p),t[11]=0,t[12]=o[0],t[13]=o[1],t[14]=o[2],t[15]=1,t}});var sg=Tt((uA,ag)=>{ag.exports=DM;function DM(t,e){return t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=e[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var cg=Tt((dA,ig)=>{ig.exports=FM;function FM(t,e){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e[0],t[13]=e[1],t[14]=e[2],t[15]=1,t}});var fg=Tt((pA,lg)=>{lg.exports=GM;function GM(t,e){var o=Math.sin(e),r=Math.cos(e);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r,t[6]=o,t[7]=0,t[8]=0,t[9]=-o,t[10]=r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var ug=Tt((vA,hg)=>{hg.exports=HM;function HM(t,e){var o=Math.sin(e),r=Math.cos(e);return t[0]=r,t[1]=0,t[2]=-o,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=o,t[9]=0,t[10]=r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var pg=Tt((mA,dg)=>{dg.exports=UM;function UM(t,e){var o=Math.sin(e),r=Math.cos(e);return t[0]=r,t[1]=o,t[2]=0,t[3]=0,t[4]=-o,t[5]=r,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var mg=Tt((gA,vg)=>{vg.exports=BM;function BM(t,e){var o=e[0],r=e[1],n=e[2],a=e[3],s=o+o,i=r+r,c=n+n,f=o*s,l=r*s,v=r*i,d=n*s,p=n*i,u=n*c,h=a*s,g=a*i,m=a*c;return t[0]=1-v-u,t[1]=l+m,t[2]=d-g,t[3]=0,t[4]=l-m,t[5]=1-f-u,t[6]=p+h,t[7]=0,t[8]=d+g,t[9]=p-h,t[10]=1-f-v,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var xg=Tt((xA,gg)=>{gg.exports=jM;function jM(t,e,o,r,n,a,s){var i=1/(o-e),c=1/(n-r),f=1/(a-s);return t[0]=a*2*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a*2*c,t[6]=0,t[7]=0,t[8]=(o+e)*i,t[9]=(n+r)*c,t[10]=(s+a)*f,t[11]=-1,t[12]=0,t[13]=0,t[14]=s*a*2*f,t[15]=0,t}});var bg=Tt((yA,yg)=>{yg.exports=WM;function WM(t,e,o,r,n){var a=1/Math.tan(e/2),s=1/(r-n);return t[0]=a/o,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(n+r)*s,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*n*r*s,t[15]=0,t}});var _g=Tt((bA,wg)=>{wg.exports=VM;function VM(t,e,o,r){var n=Math.tan(e.upDegrees*Math.PI/180),a=Math.tan(e.downDegrees*Math.PI/180),s=Math.tan(e.leftDegrees*Math.PI/180),i=Math.tan(e.rightDegrees*Math.PI/180),c=2/(s+i),f=2/(n+a);return t[0]=c,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=f,t[6]=0,t[7]=0,t[8]=-((s-i)*c*.5),t[9]=(n-a)*f*.5,t[10]=r/(o-r),t[11]=-1,t[12]=0,t[13]=0,t[14]=r*o/(o-r),t[15]=0,t}});var kg=Tt((wA,Mg)=>{Mg.exports=XM;function XM(t,e,o,r,n,a,s){var i=1/(e-o),c=1/(r-n),f=1/(a-s);return t[0]=-2*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*c,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*f,t[11]=0,t[12]=(e+o)*i,t[13]=(n+r)*c,t[14]=(s+a)*f,t[15]=1,t}});var zg=Tt((_A,Sg)=>{var YM=Od();Sg.exports=KM;function KM(t,e,o,r){var n,a,s,i,c,f,l,v,d,p,u=e[0],h=e[1],g=e[2],m=r[0],y=r[1],x=r[2],_=o[0],M=o[1],w=o[2];return Math.abs(u-_)<1e-6&&Math.abs(h-M)<1e-6&&Math.abs(g-w)<1e-6?YM(t):(l=u-_,v=h-M,d=g-w,p=1/Math.sqrt(l*l+v*v+d*d),l*=p,v*=p,d*=p,n=y*d-x*v,a=x*l-m*d,s=m*v-y*l,p=Math.sqrt(n*n+a*a+s*s),p?(p=1/p,n*=p,a*=p,s*=p):(n=0,a=0,s=0),i=v*s-d*a,c=d*n-l*s,f=l*a-v*n,p=Math.sqrt(i*i+c*c+f*f),p?(p=1/p,i*=p,c*=p,f*=p):(i=0,c=0,f=0),t[0]=n,t[1]=i,t[2]=l,t[3]=0,t[4]=a,t[5]=c,t[6]=v,t[7]=0,t[8]=s,t[9]=f,t[10]=d,t[11]=0,t[12]=-(n*u+a*h+s*g),t[13]=-(i*u+c*h+f*g),t[14]=-(l*u+v*h+d*g),t[15]=1,t)}});var Ag=Tt((MA,Eg)=>{Eg.exports=ZM;function ZM(t){return"mat4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+")"}});var Mc=Tt((kA,Tg)=>{Tg.exports={create:E3(),clone:T3(),copy:N3(),identity:Od(),transpose:C3(),invert:P3(),adjoint:q3(),determinant:F3(),multiply:H3(),translate:B3(),scale:W3(),rotate:X3(),rotateX:K3(),rotateY:Q3(),rotateZ:tg(),fromRotation:og(),fromRotationTranslation:rg(),fromScaling:sg(),fromTranslation:cg(),fromXRotation:fg(),fromYRotation:ug(),fromZRotation:pg(),fromQuat:mg(),frustum:xg(),perspective:bg(),perspectiveFromFieldOfView:_g(),ortho:kg(),lookAt:zg(),str:Ag()}});var Og=Tt((SA,Ng)=>{"use strict";var Lg=S3(),N0=Mc(),ni=Tn(),QM=3e3,Hh="high",Rd,jl=.36,Wl=13.64,kc=ni.C.hallEnd-.01,Vl=ni.C.z0+.01,JM=.356,t8=13.644,e8=ni.C.hallEnd-.006,o8=ni.C.z0+.006,n8=.12,Bh=4,Sc=t=>Ln[t]&&Ln[t].cy||Bh,Cd=.26,r8=5.6,a8=7,Ln=[{side:"right",z:34.5},{side:"right",z:23.5},{side:"left",z:23.5},{side:"end",z:kc},{side:"left",z:34.5},{side:"right",z:14.6},{side:"left",z:14.6,maxW:3.7,maxH:3.7},{side:"corridor",x:ni.PAINTING_X[0],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:ni.PAINTING_X[1],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:ni.PAINTING_X[2],cy:3,maxW:3.3,maxH:3.73}];function s8(t,e){let o=e&&e.maxH||r8,r=e&&e.maxW||a8,n=Math.min(o,r/t);return{width:n*t,height:n}}function i8(t,e,o){let r=Ln[o],n=[],a=Sc(o)-e/2;return r.side==="left"?(N0.fromTranslation(n,[jl,a,r.z+t/2]),N0.rotateY(n,n,Math.PI/2)):r.side==="right"?(N0.fromTranslation(n,[Wl,a,r.z-t/2]),N0.rotateY(n,n,-Math.PI/2)):r.side==="corridor"?N0.fromTranslation(n,[r.x-t/2,a,Vl]):(N0.fromTranslation(n,[7+t/2,a,kc]),N0.rotateY(n,n,Math.PI)),N0.scale(n,n,[t,e,n8]),n}function c8(t,e,o){let r=Ln[o],n=[],a=Sc(o)-e/2;return r.side==="left"?(N0.fromTranslation(n,[jl,a,r.z+t/2]),N0.rotateY(n,n,Math.PI/2)):r.side==="right"?(N0.fromTranslation(n,[Wl,a,r.z-t/2]),N0.rotateY(n,n,-Math.PI/2)):r.side==="corridor"?N0.fromTranslation(n,[r.x-t/2,a,Vl]):(N0.fromTranslation(n,[7+t/2,a,kc]),N0.rotateY(n,n,Math.PI)),n}function l8(t,e,o){let r=Ln[o],n=[],a=Sc(o)-e/2-Cd-.38;return r.side==="left"?(N0.fromTranslation(n,[JM,a,r.z+t/2]),N0.rotateY(n,n,Math.PI/2)):r.side==="right"?(N0.fromTranslation(n,[t8,a,r.z-t/2]),N0.rotateY(n,n,-Math.PI/2)):r.side==="corridor"?N0.fromTranslation(n,[r.x-t/2,a,o8]):(N0.fromTranslation(n,[7+t/2,a,e8]),N0.rotateY(n,n,Math.PI)),N0.scale(n,n,[2,2,2]),n}function f8(t,e,o){let r=Ln[o],n=Sc(o)-e/2-Cd-.38;return r.side==="left"?[jl+.55,n,r.z]:r.side==="right"?[Wl-.55,n,r.z]:r.side==="corridor"?[r.x,n,Vl+.55]:[7,n,kc-.55]}var Bl=.42;function Uh(t,e,o,r,n,a){return[e[0]*r,e[1]*r,e[2]*r,0,0,n,0,0,o[0]*a,o[1]*a,o[2]*a,0,t[0],t[1],t[2],1]}function h8(t,e,o){let r=Ln[o],n,a,s;r.side==="left"?(n=[jl,r.z],a=[0,0,1],s=[1,0,0]):r.side==="right"?(n=[Wl,r.z],a=[0,0,1],s=[-1,0,0]):r.side==="corridor"?(n=[r.x,Vl],a=[1,0,0],s=[0,0,1]):(n=[7,kc],a=[1,0,0],s=[0,0,-1]);let i=Sc(o)+e/2+Cd+.3,c=Math.min(2.4,Math.max(.9,t*.55)),f=(p,u)=>[n[0]+s[0]*p,u,n[1]+s[2]*p],l=[.075,.062,.05],v=[{fixmodel:Uh(f(.014,i),a,s,.1,.13,.028),fixcol:l,fixglow:0},{fixmodel:Uh(f(Bl/2,i),a,s,.02,.02,Bl),fixcol:l,fixglow:0},{fixmodel:Uh(f(Bl,i),a,s,c,.034,.05),fixcol:l,fixglow:0},{fixmodel:Uh(f(Bl-.012,i-.019),a,s,c*.94,.006,.028),fixcol:l,fixglow:1}],d=f(Bl,i-.02);return{fixtures:v,light:{c:[d[0],d[1],d[2],1],d:[a[0],a[1],a[2],c/2]}}}Ng.exports=(t,e)=>{let o=[],r=[],n=a=>{let s=a.image_id;if(!Ln[s])return;let{width:i,height:c}=s8(a.aspect,Ln[s]),f=h8(i,c,s);e&&e.lights&&s<e.lights.length&&(e.lights[s]=f.light),o.push({...a,fixtures:f.fixtures,side:Ln[s].side,model:i8(i,c,s),framemodel:c8(i,c,s),framesize:[i,c],textmodel:l8(i,c,s),text:a.textGen(i),width:i,height:c,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:f8(i,c,s),paintingPosition:Ln[s].side==="left"?[jl+.05,Bh,Ln[s].z]:Ln[s].side==="right"?[Wl-.05,Bh,Ln[s].z]:Ln[s].side==="corridor"?[Ln[s].x,Sc(s),Vl+.05]:[7,Bh,kc-.05],textGen:null})};return Lg.fetch(t,Ln.length,Hh,n,()=>{}),{update:()=>{r=o,r.forEach(a=>{Lg.load(t,a,Hh)}),Hh="low",Rd&&clearTimeout(Rd),Rd=setTimeout(()=>{Hh="high"},QM)},batch:()=>r,interactables:()=>r.map((a,s)=>({side:a.side,width:a.width,index:s,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:a.plaquePosition,paintingPosition:a.paintingPosition}))}}});var Pg=Tt((zA,$g)=>{"use strict";var u8=zd(),Rg=qr(),Cg=[[-.02,.125],[-.02,.15],[.035,.15],[.07,.12],[.07,.17],[.185,.17],[.185,.19],[.215,.19],[.26,.03]];function d8(){let t=[[0,0],[1,0],[1,1],[0,1]],e=[];Cg.forEach(([r,n])=>{t.forEach(([a,s])=>e.push([a,s,r,n]))});let o=[];for(let r=0;r<Cg.length-1;r++)for(let n=0;n<4;n++){let a=(n+1)%4,s=r*4+n,i=r*4+a,c=(r+1)*4+n,f=(r+1)*4+a;o.push(s,i,f,s,f,c)}return{verts:e,elems:o}}var p8=`#extension GL_OES_standard_derivatives : enable
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
}`,v8=`
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
}`;$g.exports=t=>{let e=u8.draw(t),o=t({frag:`#extension GL_OES_standard_derivatives : enable
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
	${cs().lanternGLSL()}
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
	}`,attributes:{pos:[0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,-.1,-.1,0,1.1,-.1,0,-.1,1.1,0,1.1,1.1,0]},elements:[0,1,2,3,2,1,1,0,5,4,5,0,3,1,7,5,7,1,0,2,4,6,4,2,8,9,4,5,4,9,9,11,5,7,5,11,11,10,7,6,7,10,10,8,6,4,6,8],uniforms:{model:t.prop("model"),tex:t.prop("tex"),psize:t.prop("framesize"),canvasCm:(s,i)=>i.size?[i.size[1],i.size[0]]:[61,91],texel:1/(Rg.isPhone?1024:2048),detail:()=>Rg.post===0?0:1},blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}}),r=d8(),n=t({frag:p8,vert:v8,attributes:{prof:r.verts},elements:r.elems,uniforms:{model:t.prop("framemodel"),fsize:t.prop("framesize")},cull:{enable:!1},blend:{enable:!1}}),a=t({frag:`#extension GL_OES_standard_derivatives : enable
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
}`,attributes:{pos:[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5],[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]]},elements:[0,1,2,0,2,3,4,5,6,4,6,7,0,1,5,0,5,4,2,3,7,2,7,6,0,3,7,0,7,4,1,2,6,1,6,5],uniforms:{model:t.prop("fixmodel"),fixcol:t.prop("fixcol"),fixglow:t.prop("fixglow")},cull:{enable:!1},blend:{enable:!1}});return function(s){o(s),n(s);let i=[];s.forEach(c=>{c.fixtures&&i.push(...c.fixtures)}),i.length&&a(i),e(s)}}});var ps=Tt((AA,kn)=>{"use strict";var Ne=Math.PI,G=t=>(+t).toFixed(4),fe=[-90,0,0],Rt=16,we=22,ao=7.8,ur=11.6,an=.55,Nn=(ur-ao)/(Rt/2),xe={c:[3.6,8.6,13.6,18.6],hw:1.3,sill:.62,spring:4.9};xe.top=xe.spring+xe.hw;var Qn={cols:[-.65,0,.65],rowH:.71,w:.055,ring:.78},zr={rafter:we/12,rafterW:.1,purlin:1,purlinW:.07},ii=[5.5,11,16.5],io={cx:Rt/2,hw:1.12,spring:3.95,pier:1.05,face:we-1.45,back:we-.2,floor:.66,top:6.55};io.x0=io.cx-io.hw-io.pier;io.x1=io.cx+io.hw+io.pier;var ft={x0:Rt/2-1.7,x1:Rt/2+1.7,z0:we-io.face+.44,z1:we-8.2,curb:.5,top:.36},ro={cx:Rt/2,cz:18.1,ri:1.66,ro:2.06,top:6,hw:.84,spring:3.4,cornice:4.85,cloth:2.6,gap:.92},Ig=[.647,.614,.279,-.154,-.322,-.191,-.012,.041,-.087,-.551,-.876,-1,.368,.414,.325,.162,.216,.345,.495,.35,.369,-.7,-.522,-.318,-.128,-.041,.581,.696,.442,.274,.394,.607,.713,-.498,-.313,.401,.802,.751,-.174,-.702,-.917,-.992,-.883,.29,.475,.557,.55,.426,.135,-.125,-.259,-.391,-.671,-.951,-.964,-.727,-.471,-.32,-.244,-.123,.166,.573,.775,.395],V0=t=>ft.z1-(t-5.6)/11*(ft.z1-ft.z0),b0={x:Rt/2,z:1,plinth:io.floor+.26,height:2.75,yaw:.35,file:"res/nymph.bin"},jh=we-b0.z,hr=(()=>{let t=[-.85,.3,.3],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>o/e)})(),Wh=(()=>{let t=[-.3,.82,.48],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>o/e)})(),qg=t=>{let e=1e9,o=-1e9,r=1e9,n=-1e9;for(let a of[0,Rt])for(let s of[0,ur+.3])for(let i of[0,we]){let c=(ao-s)/t[1],f=a+t[0]*c,l=i+t[2]*c;e=Math.min(e,f),o=Math.max(o,f),r=Math.min(r,l),n=Math.max(n,l)}return[e-.3,r-.3,o-e+.6,n-r+.6]},In={sun:qg(hr),moon:qg(Wh)},Vh=t=>[t[0]+fe[0],t[1]+fe[1],t[2]+fe[2]];function Kh(t){(!t||t==="baked")&&(t=typeof location!="undefined"&&/analyticsun/.test(location.search)?"analytic":"baked");let e=xe.c.map(r=>`
		{
			float dz = q.z - ${G(r)};
			float inside = smoothstep(-b, b, ${G(xe.hw)} - abs(dz)) * smoothstep(-b, b, q.y - ${G(xe.sill)});
			float arch = smoothstep(-b, b, ${G(xe.hw)} - length(vec2(dz, max(q.y - ${G(xe.spring)}, 0.0))));
			o = max(o, inside * arch);
		}`).join(""),o=xe.c.map(r=>`
		{
			float dz = q.z - ${G(r)};
			if (abs(dz) < ${G(xe.hw+.2)}) {
				${Qn.cols.map(n=>`bar = max(bar, 1.0 - smoothstep(${G(Qn.w*.5)} - b, ${G(Qn.w*.5)} + b, abs(dz - ${G(n)})));`).join(`
				`)}
				float ry = q.y - ${G(xe.sill)};
				float tr = abs(ry - ${G(Qn.rowH)} * floor(ry / ${G(Qn.rowH)} + 0.5));
				if (q.y < ${G(xe.spring+.02)}) bar = max(bar, 1.0 - smoothstep(${G(Qn.w*.5)} - b, ${G(Qn.w*.5)} + b, tr));
				float rr = length(vec2(dz, q.y - ${G(xe.spring)}));
				if (q.y > ${G(xe.spring)}) bar = max(bar, 1.0 - smoothstep(${G(Qn.w*.5)} - b, ${G(Qn.w*.5)} + b, abs(rr - ${G(Qn.ring)})));
				// the frame round the opening
				bar = max(bar, 1.0 - smoothstep(0.0, b + 0.03, ${G(xe.hw)} - max(abs(dz), q.y > ${G(xe.spring)} ? rr : 0.0)));
			}
		}`).join("");return`
	const vec3 STUDIO_SUN_D = vec3(${G(hr[0])}, ${G(hr[1])}, ${G(hr[2])});
	const vec3 STUDIO_MOON_D = vec3(${G(Wh[0])}, ${G(Wh[1])}, ${G(Wh[2])});
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
		vec3 p = pw - vec3(${G(fe[0])}, ${G(fe[1])}, ${G(fe[2])});
		vec3 S = STUDIO_SUN;
		// the niche: inside its hollow, the sun gets in only through the arch;
		// elsewhere its block of stone stands in the way of some of the light
		{
			// (worked as if the niche stood against the far wall: z turned round)
			vec3 q = vec3(${G(Rt)} - p.x, p.y, ${G(we)} - p.z);
			vec3 Sq = vec3(-S.x, S.y, -S.z);
			float dxn = q.x - ${G(io.cx)};
			if (abs(dxn) < ${G(io.hw)} && q.z > ${G(io.face)} && q.y > ${G(io.floor-.05)} && q.y < ${G(io.spring)} + sqrt(max(${G(io.hw*io.hw)} - dxn * dxn, 0.0))) {
				if (Sq.z >= 0.0) return 0.0;
				vec3 hf = q + Sq * ((${G(io.face)} - q.z) / Sq.z);
				float hx = hf.x - ${G(io.cx)};
				float edge = ${G(io.hw)} - abs(hx);
				float topY = ${G(io.spring)} + sqrt(max(${G(io.hw*io.hw)} - hx * hx, 0.0));
				float soft = 0.02 + 0.03 * (${G(io.face)} - q.z) / Sq.z;
				float inA = smoothstep(-soft, soft, edge) * smoothstep(-soft, soft, topY - hf.y);
				if (inA <= 0.0) return 0.0;
			} else {
				vec3 bmin = vec3(${G(io.x0-.2)}, 0.0, ${G(io.face-.3)}), bmax = vec3(${G(io.x1+.2)}, ${G(6.95)}, ${G(we)});
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
		float te = (${G(ao)} - p.y) / S.y;
		if (tw > 0.0 && tw < te) {
			vec3 h0 = p + S * tw;
			if (h0.z < 0.0 || h0.z > ${G(we)}) return 0.0;
			vec3 h1 = p + S * ((${G(-an)} - p.x) / S.x);
			vec3 hm = p + S * ((${G(-an*.5)} - p.x) / S.x);
			float b = 0.006 + 0.0075 * tw;
			float open = min(studioWinOpen(h0, b), studioWinOpen(h1, b));
			if (open <= 0.0) return 0.0;
			float bar = studioWinBars(hm, b);
			return open * (1.0 - bar) * 0.92;
		}
		// up through the roof: the trusses' tie beams first
		vec3 he = p + S * max(te, 0.0);
		float vis = 1.0;
		if (p.y < ${G(ao)}) {
			if (he.z < 0.0 || he.z > ${G(we)} || he.x < 0.0 || he.x > ${G(Rt)}) return 0.0;
			float be = 0.01 + 0.008 * te;
			${ii.map(r=>`vis *= smoothstep(0.08 - be, 0.08 + be, abs(he.z - ${G(r)}));`).join(`
			`)}
			// the bougainvillea along the tie beams
			${Ha.filter(r=>r[0]==="truss").map(([r,n,a])=>`vis *= 1.0 - studioVineShade(he.z - ${G(n)}, he.x, he.z, ${G(a)});`).join(`
			`)}
		}
		// then the glass: the two slopes of the roof
		float tl = (${G(Nn)} * p.x - p.y + ${G(ao)}) / (S.y - ${G(Nn)} * S.x);
		float tr = (${G(Nn)} * (${G(Rt)} - p.x) - p.y + ${G(ao)}) / (S.y + ${G(Nn)} * S.x);
		float t = 1e9;
		vec3 h = vec3(0.0);
		vec3 hl = p + S * tl, hr = p + S * tr;
		if (tl > 0.0 && hl.x >= -0.01 && hl.x <= ${G(Rt/2+.01)}) { t = tl; h = hl; }
		if (tr > 0.0 && tr < t && hr.x >= ${G(Rt/2-.01)} && hr.x <= ${G(Rt+.01)}) { t = tr; h = hr; }
		if (t > 1e8) return 0.0;
		if (h.z < 0.0 || h.z > ${G(we)}) return 0.0;
		float b = 0.008 + 0.0075 * t;
		float rz = abs(h.z - ${G(zr.rafter)} * floor(h.z / ${G(zr.rafter)} + 0.5));
		float bar = 1.0 - smoothstep(${G(zr.rafterW*.5)} - b, ${G(zr.rafterW*.5)} + b, rz);
		// the ridge beam
		bar = max(bar, 1.0 - smoothstep(0.14 - b, 0.14 + b, abs(h.x - ${G(Rt/2)})));
		// the old glass is grimy: it lets less through than the windows,
		// unevenly, so the roof's light falls in soft dim drifts and the
		// windows' patterned beams are the bright, dramatic ones
		float pat = 0.42 + 0.3 * smoothstep(-0.6, 0.6, sin(h.x * 0.9 + 1.3) * sin(h.z * 0.7 + 0.4) + 0.4 * sin(h.x * 2.1 - h.z * 1.7));
		// and the vine along the rafters and the ridge
		${Ha.filter(r=>r[0]==="rafter").map(([r,n,a])=>`pat *= 1.0 - studioVineShade(h.z - ${G(n)}, h.x, h.z, ${G(a)});`).join(`
		`)}
		pat *= 1.0 - studioVineShade(h.x - ${G(Rt/2)}, h.z, h.x, 0.9);
		return vis * (1.0 - bar) * pat * 0.78;
	}

`:t==="bake"?`	// for the bake: how much of the sky a beam along S gets through the
	// windows or the roof, given where it crosses the eaves' height
	// (r: for points below the eaves, past the tie beams; g: above them)
	vec2 studioExit(vec3 q, vec3 S) {
		float g = 0.0;
		{
			float tl = (${G(Nn)} * q.x - q.y + ${G(ao)}) / (S.y - ${G(Nn)} * S.x);
			float tr = (${G(Nn)} * (${G(Rt)} - q.x) - q.y + ${G(ao)}) / (S.y + ${G(Nn)} * S.x);
			float t = 1e9;
			vec3 h = vec3(0.0);
			vec3 hl = q + S * tl, hr = q + S * tr;
			if (tl > -20.0 && hl.x >= -0.01 && hl.x <= ${G(Rt/2+.01)}) { t = tl; h = hl; }
			if (tr > -20.0 && tr < t && hr.x >= ${G(Rt/2-.01)} && hr.x <= ${G(Rt+.01)}) { t = tr; h = hr; }
			if (t < 1e8 && h.z >= 0.0 && h.z <= ${G(we)}) {
				float b = 0.03 + 0.0075 * max(t, 0.0);
				float rz = abs(h.z - ${G(zr.rafter)} * floor(h.z / ${G(zr.rafter)} + 0.5));
				float bar = 1.0 - smoothstep(${G(zr.rafterW*.5)} - b, ${G(zr.rafterW*.5)} + b, rz);
				bar = max(bar, 1.0 - smoothstep(0.14 - b, 0.14 + b, abs(h.x - ${G(Rt/2)})));
				float pat = 0.42 + 0.3 * smoothstep(-0.6, 0.6, sin(h.x * 0.9 + 1.3) * sin(h.z * 0.7 + 0.4) + 0.4 * sin(h.x * 2.1 - h.z * 1.7));
				${Ha.filter(r=>r[0]==="rafter").map(([r,n,a])=>`pat *= 1.0 - studioVineShade(h.z - ${G(n)}, h.x, h.z, ${G(a)});`).join(`
				`)}
				pat *= 1.0 - studioVineShade(h.x - ${G(Rt/2)}, h.z, h.x, 0.9);
				g = (1.0 - bar) * pat * 0.78;
			}
		}
		float r = 0.0;
		if (q.x < 0.0) {
			// it leaves through a window in the left wall
			vec3 h0 = q + S * ((0.0 - q.x) / S.x);
			if (h0.z >= 0.0 && h0.z <= ${G(we)} && h0.y > 0.0) {
				vec3 h1 = q + S * ((${G(-an)} - q.x) / S.x);
				vec3 hm = q + S * ((${G(-an*.5)} - q.x) / S.x);
				float b = 0.022;
				float open = min(studioWinOpen(h0, b), studioWinOpen(h1, b));
				r = open * (1.0 - studioWinBars(hm, b)) * 0.92;
			}
		} else if (q.x <= ${G(Rt)} && q.z >= 0.0 && q.z <= ${G(we)}) {
			// up through the roof, past the tie beams and their vine
			float vis = 1.0;
			float be = 0.025;
			${ii.map(r=>`vis *= smoothstep(0.08 - be, 0.08 + be, abs(q.z - ${G(r)}));`).join(`
			`)}
			${Ha.filter(r=>r[0]==="truss").map(([r,n,a])=>`vis *= 1.0 - studioVineShade(q.z - ${G(n)}, q.x, q.z, ${G(a)});`).join(`
			`)}
			r = vis * g;
		}
		return vec2(r, g);
	}
	float studioSun0(vec3 pw) { return 0.0; }

`:`	uniform sampler2D studioBake;
	float studioSun0(vec3 pw) {
		vec3 p = pw - vec3(${G(fe[0])}, ${G(fe[1])}, ${G(fe[2])});
		vec3 S = STUDIO_SUN;
		// the niche: inside its hollow, the sun gets in only through the arch;
		// elsewhere its block of stone stands in the way of some of the light
		{
			// (worked as if the niche stood against the far wall: z turned round)
			vec3 q = vec3(${G(Rt)} - p.x, p.y, ${G(we)} - p.z);
			vec3 Sq = vec3(-S.x, S.y, -S.z);
			float dxn = q.x - ${G(io.cx)};
			if (abs(dxn) < ${G(io.hw)} && q.z > ${G(io.face)} && q.y > ${G(io.floor-.05)} && q.y < ${G(io.spring)} + sqrt(max(${G(io.hw*io.hw)} - dxn * dxn, 0.0))) {
				if (Sq.z >= 0.0) return 0.0;
				vec3 hf = q + Sq * ((${G(io.face)} - q.z) / Sq.z);
				float hx = hf.x - ${G(io.cx)};
				float edge = ${G(io.hw)} - abs(hx);
				float topY = ${G(io.spring)} + sqrt(max(${G(io.hw*io.hw)} - hx * hx, 0.0));
				float soft = 0.02 + 0.03 * (${G(io.face)} - q.z) / Sq.z;
				float inA = smoothstep(-soft, soft, edge) * smoothstep(-soft, soft, topY - hf.y);
				if (inA <= 0.0) return 0.0;
			} else {
				vec3 bmin = vec3(${G(io.x0-.2)}, 0.0, ${G(io.face-.3)}), bmax = vec3(${G(io.x1+.2)}, ${G(6.95)}, ${G(we)});
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
		float hi = step(${G(ao)}, p.y);
		float v = 0.0;
		if (w < 0.999) {
			vec2 q = (p.xz + STUDIO_SUN_D.xz * ((${G(ao)} - p.y) / STUDIO_SUN_D.y) - vec2(${G(In.sun[0])}, ${G(In.sun[1])})) / vec2(${G(In.sun[2])}, ${G(In.sun[3])});
			vec4 t = texture2D(studioBake, q);
			v += (1.0 - w) * mix(t.r, t.g, hi);
		}
		if (w > 0.001) {
			vec2 q = (p.xz + STUDIO_MOON_D.xz * ((${G(ao)} - p.y) / STUDIO_MOON_D.y) - vec2(${G(In.moon[0])}, ${G(In.moon[1])})) / vec2(${G(In.moon[2])}, ${G(In.moon[3])});
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
		float an = atan(h.x - ${G(ro.cx)}, h.z - ${G(ro.cz)});
		float m = an - 1.5707963 * floor(an / 1.5707963 + 0.5);
		float d = R * sin(m);
		return (abs(d) < ${G(ro.hw)} && h.y < ${G(ro.spring)} + sqrt(max(${G(ro.hw*ro.hw)} - d * d, 0.0))) ? 1.0 : 0.0;
	}
	float rotShade(vec3 pw) {
		vec3 p = pw - vec3(${G(fe[0])}, ${G(fe[1])}, ${G(fe[2])});
		vec3 S = STUDIO_SUN;
		vec2 c = p.xz - vec2(${G(ro.cx)}, ${G(ro.cz)});
		vec2 d = S.xz;
		float a = dot(d, d);
		float k = 1.0, t1, t2;
		// the stone (as one thin ring at the middle of the wall)
		if (rotHit(c, d, a, ${G((ro.ri+ro.ro)/2)}, t1, t2) > 0.0) {
			if (t1 > 0.03) { vec3 h = p + S * t1; if (h.y < ${G(ro.top-.2)} && rotOpen(h, ${G((ro.ri+ro.ro)/2)}) < 0.5) return 0.0; }
			if (t2 > 0.03) { vec3 h = p + S * t2; if (h.y < ${G(ro.top-.2)} && rotOpen(h, ${G((ro.ri+ro.ro)/2)}) < 0.5) return 0.0; }
		}
		// the cloth, except where it parts on the pool's line
		if (rotHit(c, d, a, ${G(ro.cloth+.15)}, t1, t2) > 0.0) {
			for (int i = 0; i < 2; i++) {
				float t = i == 0 ? t1 : t2;
				if (t > 0.08) {
					vec3 h = p + S * t;
					float an = atan(h.x - ${G(ro.cx)}, h.z - ${G(ro.cz)});
					float lat = ${G(ro.cloth+.15)} * abs(sin(an));
					bool gap = lat < ${G(ro.gap)} && h.y < ${G(ro.top)};
					if (h.y < ${G(ro.top)} && !gap) k *= 0.5;
				}
			}
		}
		return k;
	}
	float studioSun(vec3 pw) { float s0 = studioSun0(pw); return s0 > 0.0 ? s0 * rotShade(pw) : 0.0; }`}function Ua(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let o=e;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}var _t={FLOOR:0,PLASTER:1,STONE:2,STEEL:3,WATER:4,PAD:5,PETAL:6,STAMEN:7,MARBLE:8,WOOD:9,GESSO:10,PAINT:11,POT:12,SHADE:13,BULB:14,NICHE:15,JAR:16,SOIL:17,BRUSH:18,TRAVERTINE:19,CLOTH:20,WMARBLE:21,REDDOOR:22,REDPANEL:23,DARKWOOD:24,BRASS:25,BRACT:26,KEYHOLE:27,ROCK:28,OLDSTONE:29,HOLLOW:30,FLAME:31};function Pd(){let t={pos:[],nrm:[],kind:[],uv:[],anchor:[],idx:[]};return t.float=null,t.v=(e,o,r,n)=>(t.pos.push(e[0]+fe[0],e[1]+fe[1],e[2]+fe[2]),t.nrm.push(o[0],o[1],o[2]),t.kind.push(r),t.uv.push(n?n[0]:0,n?n[1]:0),t.float?t.anchor.push(t.float[0]+fe[0],t.float[1]+fe[2],t.float[2],1):t.anchor.push(0,0,0,0),t.pos.length/3-1),t.quad=(e,o,r,n,a,s,i)=>{let c=t.v(e,a,s,i&&i[0]),f=t.v(o,a,s,i&&i[1]),l=t.v(r,a,s,i&&i[2]),v=t.v(n,a,s,i&&i[3]);t.idx.push(c,f,l,c,l,v)},t.box=(e,o,r,n,a,s,i,c)=>{let f=c||{};f.top||t.quad([e,a,r],[e,a,s],[n,a,s],[n,a,r],[0,1,0],i,[[e,r],[e,s],[n,s],[n,r]]),f.bottom||t.quad([e,o,r],[n,o,r],[n,o,s],[e,o,s],[0,-1,0],i,[[e,r],[n,r],[n,s],[e,s]]),f.x0||t.quad([e,o,r],[e,o,s],[e,a,s],[e,a,r],[-1,0,0],i,[[r,o],[s,o],[s,a],[r,a]]),f.x1||t.quad([n,o,s],[n,o,r],[n,a,r],[n,a,s],[1,0,0],i,[[s,o],[r,o],[r,a],[s,a]]),f.z0||t.quad([n,o,r],[e,o,r],[e,a,r],[n,a,r],[0,0,-1],i,[[n,o],[e,o],[e,a],[n,a]]),f.z1||t.quad([e,o,s],[n,o,s],[n,a,s],[e,a,s],[0,0,1],i,[[e,o],[n,o],[n,a],[e,a]])},t.tbox=(e,o,r,n,a,s,i,c,f)=>{let l=Math.cos(r),v=Math.sin(r),d=Math.cos(f||0),p=Math.sin(f||0),u=(m,y,x)=>{let _=a+(y-a)*d-x*p*0,M=x+(y-a)*p,w=a+(y-a)*d;return[e+l*m+v*M,w,o-v*m+l*M]},h=m=>{let y=m[1]*d-m[2]*p,x=m[2]*d+m[1]*p;return[l*m[0]+v*x,y,-v*m[0]+l*x]},g=(m,y,x,_,M)=>t.quad(u(...m),u(...y),u(...x),u(..._),h(M),c,[[m[0]+m[2],m[1]],[y[0]+y[2],y[1]],[x[0]+x[2],x[1]],[_[0]+_[2],_[1]]]);g([-n,s,-i],[-n,s,i],[n,s,i],[n,s,-i],[0,1,0]),g([-n,a,-i],[n,a,-i],[n,a,i],[-n,a,i],[0,-1,0]),g([-n,a,-i],[-n,a,i],[-n,s,i],[-n,s,-i],[-1,0,0]),g([n,a,i],[n,a,-i],[n,s,-i],[n,s,i],[1,0,0]),g([n,a,-i],[-n,a,-i],[-n,s,-i],[n,s,-i],[0,0,-1]),g([-n,a,i],[n,a,i],[n,s,i],[-n,s,i],[0,0,1])},t.beam=(e,o,r,n,a)=>{let s=[o[0]-e[0],o[1]-e[1],o[2]-e[2]],i=Math.hypot(...s),c=s.map(u=>u/i),f=a||(Math.abs(c[1])>.9?[1,0,0]:[0,1,0]),l=[c[1]*f[2]-c[2]*f[1],c[2]*f[0]-c[0]*f[2],c[0]*f[1]-c[1]*f[0]],v=Math.hypot(...l);l=l.map(u=>u/v),f=[l[1]*c[2]-l[2]*c[1],l[2]*c[0]-l[0]*c[2],l[0]*c[1]-l[1]*c[0]];let d=(u,h,g)=>[u[0]+l[0]*r*h+f[0]*r*g,u[1]+l[1]*r*h+f[1]*r*g,u[2]+l[2]*r*h+f[2]*r*g],p=[[[1,-1],[1,1],l],[[1,1],[-1,1],f],[[-1,1],[-1,-1],l.map(u=>-u)],[[-1,-1],[1,-1],f.map(u=>-u)]];for(let[u,h,g]of p)t.quad(d(e,...u),d(o,...u),d(o,...h),d(e,...h),g,n,[[0,0],[i,0],[i,1],[0,1]])},t.lathe=(e,o,r,n,a)=>{let s=a||32,i=r.map(([c,f],l)=>{let v=r[Math.max(0,l-1)],d=r[Math.min(r.length-1,l+1)],p=d[0]-v[0],u=d[1]-v[1],h=Math.hypot(p,u)||1,g=u/h,m=-p/h,y=[];for(let x=0;x<=s;x++){let _=x/s*2*Ne;y.push(t.v([e+Math.cos(_)*c,f,o+Math.sin(_)*c],[Math.cos(_)*g,m,Math.sin(_)*g],n,[x/s*c*2*Ne,f]))}return y});for(let c=0;c<i.length-1;c++)for(let f=0;f<s;f++){let l=i[c][f],v=i[c][f+1],d=i[c+1][f+1],p=i[c+1][f];t.idx.push(l,p,d,l,d,v)}},t}var Ma=t=>Math.abs(t)>=xe.hw?null:xe.spring+Math.sqrt(xe.hw*xe.hw-t*t),Ha=[["truss",ii[0],3.1],["truss",ii[1],5.4],["truss",ii[2],7.7],["rafter",zr.rafter*2,1.7],["rafter",zr.rafter*5,8.5],["rafter",zr.rafter*8,13.6],["rafter",zr.rafter*10,17],["ridge",Rt/2,.9],...[.75,...xe.c.slice(1).map((t,e)=>(t+xe.c[e])/2),we-.75].map((t,e)=>["wall",t,2.3+e*4.1])],Jl=(t,e)=>.5*Math.sin(t*1.9+e)+.5*Math.sin(t*.77+e*1.3)>-.25,m8=t=>t<Rt/2?ao+Nn*t:ao+Nn*(Rt-t);function Zh(t,e,o){return t==="wall"?[.12,o,e]:t==="truss"?[o,ao-.12,e]:t==="rafter"?[o,m8(o)-.2,e]:[e,ur-.32,o]}var Qh=t=>t==="ridge"?[.4,we-.4]:t==="wall"?[.15,ao-.05]:[.35,Rt-.35],k0={w:1.95,spring:3.35,r:2.3,frame:.23,zl:we-.05,zf:we-.13};k0.c=k0.r-k0.w/2;var Ur=(t,e)=>{let o=k0.r+(e||0),r=Math.abs(t)+k0.c;return r>=o?k0.spring:k0.spring+Math.sqrt(o*o-r*r)};k0.top=Ur(0);function g8(t){let e=Rt/2,{w:o,frame:r,zl:n,zf:a}=k0,s=o/2,i=s+r,c=.02;for(let w=-i;w<i-1e-6;w+=c){let k=w,E=Math.min(i,w+c),z=(k+E)/2,P=Ur(k,r),R=Ur(E,r),B=0,$=0;Math.abs(z)<s&&(B=Ur(k),$=Ur(E)),Math.abs(z)>=s;{let q=Math.abs(z)<s?B:0,ct=Math.abs(z)<s?$:0;t.quad([e+E,ct,a],[e+k,q,a],[e+k,P,a],[e+E,R,a],[0,0,-1],_t.DARKWOOD,[[E,ct],[k,q],[k,P],[E,R]])}t.quad([e+k,P,a],[e+k,P,we],[e+E,R,we],[e+E,R,a],[0,1,0],_t.DARKWOOD,[[k,0],[k,1],[E,1],[E,0]]),Math.abs(z)<s&&t.quad([e+k,B,a],[e+E,$,a],[e+E,$,n],[e+k,B,n],[0,-1,0],_t.DARKWOOD,[[k,0],[E,0],[E,1],[k,1]])}for(let w of[-1,1])t.quad([e+w*i,0,a],[e+w*i,0,we],[e+w*i,k0.spring,we],[e+w*i,k0.spring,a],[w,0,0],_t.DARKWOOD,[[0,0],[1,0],[1,1],[0,1]]),t.quad([e+w*s,0,a],[e+w*s,k0.spring,a],[e+w*s,k0.spring,n],[e+w*s,0,n],[-w,0,0],_t.DARKWOOD,[[0,0],[1,0],[1,1],[0,1]]),t.box(e+w*(s+r/2)-r/2-.04,0,a-.04,e+w*(s+r/2)+r/2+.04,.42,we,_t.DARKWOOD);let f=40;for(let w=0;w<f;w++){let k=-s+2*s*w/f,E=-s+2*s*(w+1)/f;t.beam([e+k,Ur(k)+.03,a-.015],[e+E,Ur(E)+.03,a-.015],.018,_t.DARKWOOD)}for(let w of[-1,1])t.beam([e+w*(s+.03),.42,a-.015],[e+w*(s+.03),k0.spring+.02,a-.015],.018,_t.DARKWOOD);for(let w=-s;w<s-1e-6;w+=c){let k=w,E=Math.min(s,w+c),z=Ur(k),P=Ur(E);t.quad([e+E,0,n],[e+k,0,n],[e+k,z,n],[e+E,P,n],[0,0,-1],_t.REDDOOR,[[E,0],[k,0],[k,z],[E,P]])}let l=s-.2,v=.3,d=k0.spring+.07,p=n-.006,u=.05,h=(w,k,E,z)=>t.box(e+w,k,p-.018,e+E,z,p,_t.REDDOOR);h(-l,v,l,v+u),h(-l,d-u,l,d),h(-l,v,-l+u,d),h(l-u,v,l,d),t.box(e-l+.14,v+.14,p-.022,e+l-.14,d-.14,p,_t.REDDOOR);let g=k0.spring+.31;h(-s+.08,d+.06,s-.08,d+.12);for(let w of[-1,1]){let E=s-.17;for(let z=.07;z<E-1e-6;z+=c){let P=z,R=Math.min(E,z+c),B=Ur(P,-.18),$=Ur(R,-.18);if(B<=g+.02&&$<=g+.02)continue;let q=kt=>e+w*kt,ct=[[q(P),g,p+.004],[q(R),g,p+.004],[q(R),Math.max(g,$),p+.004],[q(P),Math.max(g,B),p+.004]];w>0?t.quad(ct[1],ct[0],ct[3],ct[2],[0,0,-1],_t.REDPANEL,[[R,0],[P,0],[P,1],[R,1]]):t.quad(...ct,[0,0,-1],_t.REDPANEL,[[P,0],[R,0],[R,1],[P,1]])}}t.beam([e,g-.02,p-.008],[e,Ur(0,-.12),p-.008],.03,_t.REDDOOR),t.beam([e-s+.1,g-.01,p-.006],[e+s-.1,g-.01,p-.006],.014,_t.REDDOOR);let m=e-s+.15,y=1.06,x=p-.03;t.box(m-.034,y-.2,x-.008,m+.034,y+.17,x+.012,_t.BRASS);for(let[w,k]of[[y+.2,.026],[y+.235,.016],[y-.23,.026],[y-.265,.016]])t.lathe(m,x-.002,[[0,w-k],[k,w-k*.4],[k,w+k*.4],[0,w+k]],_t.BRASS,12);for(let w=0;w<6;w++){let k=y-.17+w*.065;for(let E of[-1,1])t.beam([m+E*.034,k,x-.01],[m+E*.041,k+.03,x-.01],.006,_t.BRASS)}let _=x-.008,M=(w,k,E)=>{for(let z=0;z<E;z++){let P=Ne*z/E,R=Ne*(z+1)/E;for(let B=0;B<16;B++){let $=2*Ne*B/16,q=2*Ne*(B+1)/16,ct=(ne,ze)=>[m+k*Math.sin(ne)*Math.cos(ze),y+.03+k*Math.sin(ne)*Math.sin(ze),w-k*Math.cos(ne)],kt=(ne,ze)=>[Math.sin(ne)*Math.cos(ze),Math.sin(ne)*Math.sin(ze),-Math.cos(ne)],xt=t.v(ct(P,$),kt(P,$),_t.BRASS),vt=t.v(ct(P,q),kt(P,q),_t.BRASS),Et=t.v(ct(R,q),kt(R,q),_t.BRASS),Pt=t.v(ct(R,$),kt(R,$),_t.BRASS);t.idx.push(xt,vt,Et,xt,Et,Pt)}}};t.beam([m,y+.03,_],[m,y+.03,_-.05],.011,_t.BRASS),M(_-.075,.034,10),t.box(m-.008,y-.1,x-.0125,m+.008,y-.06,x-.0085,_t.KEYHOLE)}var Dg=[0,Ne/2,Ne,-Ne/2],$d=t=>{let e=Ne/2;return t-Math.round(t/e)*e},Kl=t=>{let e=Math.abs(t);return ro.top-.55*Math.pow(Math.max(0,Math.sin(e*3+.6)),6)-.25*Math.pow(Math.max(0,Math.sin(e*7+1.9)),8)-.06*Math.sin(e*23)};function x8(t){let{cx:e,cz:o,ri:r,ro:n,hw:a,spring:s}=ro,i=_t.OLDSTONE,c=(d,p,u)=>[e+Math.sin(d)*p,u,o+Math.cos(d)*p],f=d=>s+Math.sqrt(Math.max(0,a*a-d*d)),l=(d,p)=>{let u=[];for(let m=0;m<=160;m++)u.push(-Ne+2*Ne*m/160);let g=Math.asin(Math.min(.999,a/d));for(let m of Dg)for(let y of[-1,1])u.push(((m+y*g+Ne)%(2*Ne)+2*Ne)%(2*Ne)-Ne);u.sort((m,y)=>m-y);for(let m=0;m<u.length-1;m++){let y=u[m],x=u[m+1];if(x-y<1e-5)continue;let _=$d((y+x)/2),M=Math.abs(d*Math.sin(_))<a&&Math.abs(_)<Ne/4,w=xt=>M?f(d*Math.sin($d(xt))):0,k=[Math.sin(y)*p,0,Math.cos(y)*p],E=[Math.sin(x)*p,0,Math.cos(x)*p],z=c(y,d,w(y)),P=c(x,d,w(x)),R=c(x,d,Kl(x)),B=c(y,d,Kl(y)),$=t.v(z,k,i,[d*y,z[1]]),q=t.v(P,E,i,[d*x,P[1]]),ct=t.v(R,E,i,[d*x,R[1]]),kt=t.v(B,k,i,[d*y,B[1]]);if(p>0?t.idx.push($,q,ct,$,ct,kt):t.idx.push($,ct,q,$,kt,ct),p>0){let xt=c(y,r,Kl(y)),vt=c(x,r,Kl(x));t.quad(B,R,vt,xt,[0,1,0],i,[[B[0],B[2]],[R[0],R[2]],[vt[0],vt[2]],[xt[0],xt[2]]])}}};l(n,1),l(r,-1);for(let d of Dg){let p=[Math.sin(d),0,Math.cos(d)],u=[Math.cos(d),0,-Math.sin(d)],h=(y,x,_)=>[e+p[0]*Math.sqrt(x*x-y*y)+u[0]*y,_,o+p[2]*Math.sqrt(x*x-y*y)+u[2]*y];for(let y of[-1,1]){let x=y*a,_=[-u[0]*y,0,-u[2]*y];t.quad(h(x,r,0),h(x,n,0),h(x,n,s),h(x,r,s),_,i,[[0,0],[1,0],[1,1],[0,1]])}let g=20;for(let y=0;y<g;y++){let x=-a+2*a*y/g,_=-a+2*a*(y+1)/g,M=(x+_)/2,w=f(M),k=[-(u[0]*M),-(w-s),-(u[2]*M)],E=Math.hypot(...k),z=k.map(P=>P/E);t.quad(h(x,r,f(x)),h(_,r,f(_)),h(_,n,f(_)),h(x,n,f(x)),z,i,[[x,0],[_,0],[_,1],[x,1]])}let m=n+.05;for(let y=0;y<24;y++){let x=Ne*y/24,_=Ne*(y+1)/24,M=a+.08,w=k=>{let E=Math.cos(k)*M;return h(Math.max(-m+.01,Math.min(m-.01,E)),m,s+Math.sin(k)*M)};t.beam(w(x),w(_),.06,i)}for(let y of[-1,1]){let x=h(y*(a+.1),n+.06,s-.15),_=h(y*(a+.1),n+.06,s);t.beam(x,_,.14,i)}t.beam(h(0,n+.07,s+a-.05),h(0,n+.07,s+a+.3),.13,i)}let v=(d,p,u,h,g)=>{for(let y=0;y<96;y++){let x=-Ne+2*Ne*y/96,_=-Ne+2*Ne*(y+1)/96,M=$d((x+_)/2);if(g&&Math.abs(p*Math.sin(M))<a+.05&&Math.abs(M)<Ne/4)continue;let w=[Math.sin(x),0,Math.cos(x)],k=[Math.sin(_),0,Math.cos(_)],E=t.v(c(x,p,u),w,i,[p*x,u]),z=t.v(c(_,p,u),k,i,[p*_,u]),P=t.v(c(_,p,h),k,i,[p*_,h]),R=t.v(c(x,p,h),w,i,[p*x,h]);t.idx.push(E,z,P,E,P,R),t.quad(c(x,p,h),c(_,p,h),c(_,d,h),c(x,d,h),[0,1,0],i,[[x,0],[_,0],[_,1],[x,1]]),t.quad(c(x,d,u),c(_,d,u),c(_,p,u),c(x,p,u),[0,-1,0],i,[[x,0],[_,0],[_,1],[x,1]])}};v(n-.02,n+.12,0,.38,!0),v(n-.02,n+.1,ro.cornice-.12,ro.cornice,!1),v(n-.02,n+.2,ro.cornice,ro.cornice+.2,!1);for(let d of[Ne/4,3*Ne/4,-Ne/4,-3*Ne/4]){let p=.3/n;for(let[u,h,g,m]of[[n,n+.07,.38,ro.cornice-.12]]){let y=d-p,x=d+p,_=[Math.sin(d),0,Math.cos(d)];t.quad(c(y,h,g),c(x,h,g),c(x,h,m),c(y,h,m),_,i,[[y*h,g],[x*h,g],[x*h,m],[y*h,m]]);for(let[M,w]of[[y,-1],[x,1]]){let k=[Math.cos(M)*w,0,-Math.sin(M)*w];t.quad(c(M,u,g),c(M,h,g),c(M,h,m),c(M,u,m),k,i,[[0,g],[1,g],[1,m],[0,m]])}}}}function y8(){let{cx:t,cz:e,ro:o}=ro,r=[],n=[],a=[],s=[],i=[],c=u=>{let h=(u/(2*Ne)*4%1+1)%1*64,g=Math.floor(h),m=h-g;return Ig[g%64]*(1-m)+Ig[(g+1)%64]*m},f=Ua(9090),l=Math.asin(Math.min(.999,ro.gap/ro.cloth)),v=[[l,Ne-l,0],[-Ne+l,-l,0],[-l-.02,l+.02,1],[Ne-l-.02,Ne+l+.02,1]],d=46,p=8;for(let[u,h,g]of v){let m=Math.round((h-u)*ro.cloth/.035),y=r.length/3,x=[],_=[];for(let w=0;w<=m;w++)_.push(.2+.25*f());for(let w=0;w<=(g?d:d+p);w++){let k=[];for(let E=0;E<=m;E++){let z=u+(h-u)*E/m,P=Kl(z)+.04,R=Math.min(z-u,h-z)*ro.cloth,B,$;if(w===0)B=ro.ri+.12,$=P+.03;else if(w===1)B=o+.08,$=P+.07;else if(w<=d){let q=(w-1)/(d-1);if($=(P+.02)*(1-q),g){let ne=Math.abs(Math.sin(z))*ro.cloth/ro.gap,ze=ro.spring+ro.hw+.32+.35*(1-Math.min(1,ne));$=P+.02-(P+.02-ze)*q}let ct=.38*Math.pow(q,2)+.1*Math.sqrt(q)+.26,kt=(.05+.34*Math.pow(q,1.3))*c(z),xt=(.02+.07*q)*Math.sin(z*ro.cloth/.16+2*c(z*1.7)),vt=.03*(1-q)*Math.sin(z*ro.cloth/.055)+.015*Math.sin(z*ro.cloth/.031+q*3),Et=xt+vt,Pt=.12*Math.exp(-R/.25)*Math.sin(R*18)*q;B=Math.max(o+.26,o+ct+kt+Et+Pt),g&&(B=o+.26+.06*Math.sin(z*ro.cloth/.09)+.05*q)}else{let q=(w-d)/p;B=o+.74+.39*c(z)+q*_[E]*(.7+.3*(1+c(z+.3))),$=.012+.05*Math.max(0,Math.sin(q*7+z*23))*(1-q)+.03*(1-q)}k.push([t+Math.sin(z)*B,$,e+Math.cos(z)*B])}x.push(k)}for(let w=0;w<x.length;w++)for(let k=0;k<=m;k++){let E=x[w][k],z=x[w][Math.max(k-1,0)],P=x[w][Math.min(k+1,m)],R=x[Math.max(w-1,0)][k],B=x[Math.min(w+1,x.length-1)][k],$=[P[0]-z[0],P[1]-z[1],P[2]-z[2]],q=[B[0]-R[0],B[1]-R[1],B[2]-R[2]],ct=[$[1]*q[2]-$[2]*q[1],$[2]*q[0]-$[0]*q[2],$[0]*q[1]-$[1]*q[0]],kt=Math.hypot(...ct)||1;ct=ct.map(vt=>vt/kt),r.push(E[0]+fe[0],E[1]+fe[1],E[2]+fe[2]),n.push(...ct),a.push((u+(h-u)*k/m)*ro.cloth,w/(d+p));let xt=w<=1?0:w<=d?(w-1)/(d-1):1-(w-d)/p*.9;i.push(w<=d?Math.pow(xt,1.3)*(1-.6*Math.pow(xt,6)):.4*xt*xt)}let M=m+1;for(let w=0;w<x.length-1;w++)for(let k=0;k<m;k++){let E=y+w*M+k;s.push(E,E+1,E+M+1,E,E+M+1,E+M)}}for(let u of[Ne/2,-Ne/2]){let h=r.length/3,g=40,m=30,y=[Math.sin(u),0,Math.cos(u)],x=[Math.cos(u),0,-Math.sin(u)];for(let _=0;_<=m;_++)for(let M=0;M<=g;M++){let w=-ro.hw+2*ro.hw*M/g,k=_/m,z=(ro.spring+Math.sqrt(Math.max(0,ro.hw*ro.hw-w*w))-.02)*(1-k)+.01,P=(ro.ri+ro.ro)/2+.06*Math.sin(w*34)*(.3+k)+.12*k*k,R=[t+y[0]*P+x[0]*w,z,e+y[2]*P+x[2]*w];r.push(R[0]+fe[0],R[1]+fe[1],R[2]+fe[2]),i.push(.6*k);let B=[y[0]+x[0]*Math.cos(w*34)*.6,.1,y[2]+x[2]*Math.cos(w*34)*.6],$=Math.hypot(...B);n.push(B[0]/$,B[1]/$,B[2]/$),a.push(w,k)}for(let _=0;_<m;_++)for(let M=0;M<g;M++){let w=h+_*(g+1)+M;s.push(w,w+1,w+g+2,w,w+g+2,w+g+1)}}return{pos:r,nrm:n,uv:a,idx:s,sw:i}}function b8(t,e){let o=t.pos.length/3;for(let r=0;r<e.pos.length;r+=3){let n=e.pos[r]-fe[0],a=e.pos[r+2]-fe[2];t.pos.push(Rt-n+fe[0],e.pos[r+1],we-a+fe[2]),t.nrm.push(-e.nrm[r],e.nrm[r+1],-e.nrm[r+2])}t.kind.push(...e.kind),t.uv.push(...e.uv),t.anchor.push(...e.anchor);for(let r of e.idx)t.idx.push(r+o)}function w8(t){let{cx:e,hw:o,spring:r,pier:n,face:a,back:s,floor:i,x0:c,x1:f}=io,l=_t.OLDSTONE,v=_t.HOLLOW,d=s-o,p=5.35,u=g=>r+Math.sqrt(Math.max(0,o*o-(g-e)*(g-e)));t.box(c-.1,0,a-.28,f+.1,i-.06,we,l,{bottom:!0}),t.box(c-.14,i-.06,a-.34,f+.14,i,we,l),t.box(e-.95,ft.top,a-.62,e+.95,ft.top+.15,a-.28,l,{bottom:!0});for(let[g,m]of[[c,e-o],[e+o,f]]){t.box(g,i,a+.03,m,p,we,v,{bottom:!0});let y=g<e?g:m,x=g<e?m:g,_=g<e?1:-1,M=11,w=(p-.38-i)/M;for(let k=0;k<M;k++){let E=i+k*w+.018,z=i+(k+1)*w-.018,P=k%2===0,R=y+_*.01,B=P?x-_*.01:y+_*(n*.66);if(t.box(Math.min(R,B),E,a-.06,Math.max(R,B),z,a+.03,l,{z1:!0}),!P){let q=y+_*(n*.66+.025),ct=x-_*.01;t.box(Math.min(q,ct),E,a-.02,Math.max(q,ct),z,a+.03,l,{z1:!0})}let $=y-_*.035;t.box(Math.min($,y+_*.02),E,a-.035,Math.max($,y+_*.02),z,P?a+.9:a+.55,l)}t.box(g-.05,p-.38,a-.07,m+.05,p-.3,we,l),t.box(g-.02,p-.3,a-.03,m+.02,p-.12,we,l),t.box(g-.09,p-.12,a-.11,m+.09,p,we,l)}let h=.03;for(let g=e-o;g<e+o-1e-6;g+=h){let m=g,y=Math.min(e+o,g+h);t.quad([y,u(y),a+.02],[m,u(m),a+.02],[m,p,a+.02],[y,p,a+.02],[0,0,-1],l,[[y,u(y)],[m,u(m)],[m,p],[y,p]])}{let m=o+.07;for(let x=0;x<36;x++){let _=Ne*x/36,M=Ne*(x+1)/36;t.beam([e+Math.cos(_)*m,r+Math.sin(_)*m,a-.02],[e+Math.cos(M)*m,r+Math.sin(M)*m,a-.02],.065,l,[0,0,1])}for(let x of[-1,1])t.box(e+x*o-.16,r-.14,a-.06,e+x*o+.16,r,a+.4,l);let y=r+o;t.quad([e-.17,y+.32,a-.08],[e+.17,y+.32,a-.08],[e+.11,y-.06,a-.08],[e-.11,y-.06,a-.08],[0,0,-1],l,[[0,1],[1,1],[1,0],[0,0]]);for(let x of[-1,1])t.quad([e+x*.11,y-.06,a-.08],[e+x*.17,y+.32,a-.08],[e+x*.17,y+.32,a+.02],[e+x*.11,y-.06,a+.02],[x,-.15,0],l,[[0,0],[1,0],[1,1],[0,1]]);t.quad([e-.11,y-.06,a-.08],[e+.11,y-.06,a-.08],[e+.11,y-.06,a+.02],[e-.11,y-.06,a+.02],[0,-1,0],l,[[0,0],[1,0],[1,1],[0,1]])}for(let g of[-1,1]){let m=e+g*o;t.quad([m,i,a],[m,i,d],[m,r,d],[m,r,a],[-g,0,0],v,[[a,i],[d,i],[d,r],[a,r]])}{for(let x=0;x<40;x++){let _=Ne*x/40,M=Ne*(x+1)/40,w=(E,z)=>[e+Math.cos(E)*o,r+Math.sin(E)*o,z],k=[-Math.cos((_+M)/2),-Math.sin((_+M)/2),0];t.quad(w(_,a),w(M,a),w(M,d),w(_,d),k,v,[[o*_+0,a],[o*M,a],[o*M,d],[o*_,d]])}for(let x=0;x<40;x++){let _=Ne*x/40,M=Ne*(x+1)/40,w=(B,$)=>[e+Math.cos(B)*o,$,d+Math.sin(B)*o],k=B=>[-Math.cos(B),0,-Math.sin(B)],E=t.v(w(_,i),k(_),v,[o*_,i]),z=t.v(w(M,i),k(M),v,[o*M,i]),P=t.v(w(M,r),k(M),v,[o*M,r]),R=t.v(w(_,r),k(_),v,[o*_,r]);t.idx.push(E,z,P,E,P,R)}let y=[];for(let x=0;x<=14;x++){let _=Ne/2*x/14,M=[];for(let w=0;w<=40;w++){let k=Ne*w/40,E=[Math.cos(k)*Math.cos(_),Math.sin(_),Math.sin(k)*Math.cos(_)];M.push(t.v([e+o*E[0],r+o*E[1],d+o*E[2]],E.map(z=>-z),v,[o*k,r+o*_]))}y.push(M)}for(let x=0;x<14;x++)for(let _=0;_<40;_++){let M=y[x][_],w=y[x][_+1],k=y[x+1][_+1],E=y[x+1][_];t.idx.push(M,w,k,M,k,E)}t.box(e-o,i-.02,a-.02,e+o,i,s,v,{bottom:!0,x0:!0,x1:!0,z1:!0})}t.box(b0.x-.6,i,jh-.5,b0.x+.6,b0.plinth-.05,jh+.55,l,{bottom:!0}),t.box(b0.x-.64,b0.plinth-.05,jh-.54,b0.x+.64,b0.plinth,jh+.59,l),t.box(c-.06,p,a-.08,f+.06,p+.32,we,l),t.box(c-.02,p+.32,a-.02,f+.02,p+.78,we,l),t.box(c-.12,p+.78,a-.16,f+.12,p+.86,we,l),t.box(c-.2,p+.86,a-.26,f+.2,p+1.02,we,l);{let g=p+.55,m=.34,y=.2,x=28,_=[];for(let M=0;M<=4;M++){let w=M/4,k=[];for(let E=0;E<=x;E++){let z=2*Ne*E/x,P=.09*Math.sqrt(Math.max(0,1-w*w))+.01;k.push(t.v([e+Math.cos(z)*m*w,g+Math.sin(z)*y*w,a-.02-P],[Math.cos(z)*w*.6,Math.sin(z)*w*.6,-1],l,[Math.cos(z)*w,Math.sin(z)*w]))}_.push(k)}for(let M=0;M<4;M++)for(let w=0;w<x;w++){let k=_[M][w],E=_[M][w+1],z=_[M+1][w+1],P=_[M+1][w];t.idx.push(k,P,z,k,z,E)}for(let M=0;M<x;M++){let w=2*Ne*M/x,k=2*Ne*(M+1)/x;t.beam([e+Math.cos(w)*(m+.03),g+Math.sin(w)*(y+.03),a-.04],[e+Math.cos(k)*(m+.03),g+Math.sin(k)*(y+.03),a-.04],.025,l,[0,0,1])}for(let M of[-1,1])for(let w=0;w<14;w++){let k=1.8*Ne*w/14,E=1.8*Ne*(w+1)/14,z=.1*(1-w/16),P=.1*(1-(w+1)/16),R=e+M*(m+.16),B=g;t.beam([R+M*Math.cos(k)*z,B+Math.sin(k)*z,a-.04],[R+M*Math.cos(E)*P,B+Math.sin(E)*P,a-.04],.018,l,[0,0,1])}}{let g=p+1.02,m=.62,y=(f-c)/2+.2,x=a-.2,_=w=>g+m*(1-Math.abs(w-e)/y);for(let w=e-y;w<e+y-1e-6;w+=.1){let k=w,E=Math.min(e+y,w+.1);t.quad([E,g,x],[k,g,x],[k,_(k),x],[E,_(E),x],[0,0,-1],l,[[E,g],[k,g],[k,_(k)],[E,_(E)]])}let M=Math.hypot(y,m);for(let w of[-1,1]){let k=[w*m/M,y/M,0],E=e+w*(y+.06);t.quad([e,g+m+.06,x-.06],[E,g-.02,x-.06],[E,g-.02,we],[e,g+m+.06,we],k,l,[[0,x],[M,x],[M,we],[0,we]]),t.quad([e,g+m+.06,x-.06],[e,g+m-.06,x-.06],[E,g-.12,x-.06],[E,g-.02,x-.06],[0,0,-1],l,[[0,1],[0,0],[M,0],[M,1]])}}}function _8(t){let e=Ua(77);for(let[o,r,n]of Ha){let[a,s]=Qh(o);for(let i=0;i<2;i++){let c=null;for(let f=a;f<=s;f+=.18){let l=Zh(o,r,f),v=Math.sin(f*3.1+i*2+n)*.07,d=Math.cos(f*2.3+i+n)*.05,p=o==="wall"?.25+.5*f/ao:0,u=o==="wall"?[.05+Math.abs(d)*.6,l[1],l[2]+v*(1.5+i)*(1+2*p)+(i-.5)*p]:o==="ridge"?[l[0]+v,l[1]+d+.12,l[2]]:[l[0],l[1]+d+.12,l[2]+v];c&&(o==="wall"||Jl(f,n)||e()<.5)&&t.beam(c,u,(o==="wall"?.022*(1.2-f/ao):.012)+.008*e(),_t.WOOD),c=u}}}}function M8(t){let e=Ua(4242),o=(n,a)=>!(n>ft.x0-ft.curb-.1&&n<ft.x1+ft.curb+.1&&a>ft.z0-ft.curb-.1&&a<ft.z1+ft.curb+.1)&&n>.2&&n<Rt-.2&&a>.3&&a<we-.4,r=(n,a,s,i)=>{let c=.022+e()*.022,f=e()*2*Ne,l=Math.cos(f),v=Math.sin(f),d=(u,h)=>[n+(u*l-h*v)*c,a+.004*u*h,s+(u*v+h*l)*c],p=i?2:0;t.quad(d(-1,-1),d(-1,1),d(1,1),d(1,-1),[0,1,0],_t.BRACT,[[p,0],[p,1],[p+1,1],[p+1,0]])};for(let[n,a,s]of Ha){let[i,c]=Qh(n);for(let f=i;f<=c;f+=.05){if(!Jl(f,s)||e()>.55)continue;let l=Zh(n,a,f),v=l[0]+(e()-.5)*1.8,d=l[2]+(e()-.5)*1.8;o(v,d)&&r(v,.004,d,e()<.18)}}for(let n=0;n<260;n++){let a=Math.floor(e()*4),s,i;a<2?(s=a?ft.x1+ft.curb+.12+e()*e()*.9:ft.x0-ft.curb-.12-e()*e()*.9,i=ft.z0+e()*(ft.z1-ft.z0)):(i=a===2?ft.z0-ft.curb-.12-e()*e()*.9:ft.z1+ft.curb+.12+e()*e()*.9,s=ft.x0+e()*(ft.x1-ft.x0)),o(s,i)&&r(s,.004,i,e()<.18)}for(let n=0;n<70;n++){let a=ft.x0+.08+e()*(ft.x1-ft.x0-.16),s=ft.z0+.08+e()*(ft.z1-ft.z0-.16);Math.hypot(a-b0.x,s-b0.z)<.6||(t.float=[a,s,a*5.1+s*2.9],r(a,.016,s,e()<.2),t.float=null)}}function k8(t,e,o){let r=(a,s,i,c,f)=>{let l=t.pos.length/3,v=Math.cos(i),d=Math.sin(i),p=Math.cos(c),u=Math.sin(c),h=[v,0,-d],g=[d*u,p,v*u],m=[h[1]*g[2]-h[2]*g[1],h[2]*g[0]-h[0]*g[2],h[0]*g[1]-h[1]*g[0]],y=f?.95:o()*.8;for(let[x,_]of[[0,0],[1,0],[1,1],[0,1]]){let M=(x-.5)*s,w=(_-.5)*s;t.pos.push(a[0]+h[0]*M+g[0]*w+fe[0],a[1]+h[1]*M+g[1]*w+fe[1],a[2]+h[2]*M+g[2]*w+fe[2]),t.nrm.push(...m),t.uv.push(x,_),t.shade.push(y),t.flower.push(1)}t.idx.push(l,l+1,l+2,l,l+2,l+3)};function n(a,s,i){let c=s/ao,f=Math.min(.15+.9*c,a<1||a>we-1?.6:1.15),l=Math.round(3+7*c),v=s<1?0:Math.round((2+9*c)*(Jl(s*1.4,i)?1:.45));for(let d=0;d<l;d++){let p=o()*2*Ne;e([.04+o()*.22,s+(o()-.5)*.12,a+(o()-.5)*2*f],[Math.cos(p)*.4+.5,-.2-o()*.5,Math.sin(p)],[0,0,1],.07+o()*.06,.1)}for(let d=0;d<v;d++)r([.06+o()*.28,s+(o()-.5)*.18,a+(o()-.5)*2*f*.9],.34+o()*.32,o()*2*Ne,(o()-.5)*2.4,o()<.14);if(s>3&&o()<.05){let d=[.15,s,a+(o()-.5)*2*f],p=.4+o()*1.2;for(let u=0;u<p;u+=.13)d=[d[0]+.03,d[1]-.13,d[2]+(o()-.5)*.06],r([d[0],d[1],d[2]],(.26+o()*.2)*(1-.4*u/p),o()*2*Ne,(o()-.5)*.8,o()<.15)}}for(let[a,s,i]of Ha){let[c,f]=Qh(a);for(let l=c;l<=f;l+=.1){if(a==="wall"){n(s,l,i);continue}if(!Jl(l,i))continue;let v=Zh(a,s,l),d=()=>(o()-.5)*.7,p=4+Math.floor(o()*4);for(let u=0;u<p;u++){let h=a==="ridge"?[v[0]+d(),v[1]-o()*.25,v[2]+d()*.4]:[v[0]+d()*.4,v[1]-o()*.25,v[2]+d()];r(h,.42+o()*.4,o()*2*Ne,(o()-.5)*2.4,o()<.16)}for(let u=0;u<5;u++){let h=o()*2*Ne;e([v[0]+d()*.6,v[1]-o()*.2,v[2]+d()*.6],[Math.cos(h),-.3-o()*.5,Math.sin(h)],[-Math.sin(h),0,Math.cos(h)],.08+o()*.06,.1)}if(o()<.22){let u=.5+o()*2,h=[v[0],v[1],v[2]],g=[(o()-.5)*.08,(o()-.5)*.08];for(let m=0;m<u;m+=.13){h=[h[0]+g[0],h[1]-.13,h[2]+g[1]];let y=(.3+o()*.22)*(1-.4*m/u);if(r([h[0]+(o()-.5)*.08,h[1],h[2]+(o()-.5)*.08],y,o()*2*Ne,(o()-.5)*.8,o()<.15),o()<.6){let x=o()*2*Ne;e([h[0],h[1],h[2]],[Math.cos(x),-.6,Math.sin(x)],[-Math.sin(x),0,Math.cos(x)],.05+o()*.04,.1)}}}}}}var Fg=(()=>{let t=Ua(9001),e=[],o=[];for(let[n,a,s]of Ha){let[i,c]=Qh(n);for(let f=i;f<=c;f+=.1)Jl(f,s)&&o.push(Zh(n,a,f))}let r=o.filter(n=>n[0]>ft.x0-.6&&n[0]<ft.x1+.6&&n[2]>ft.z0&&n[2]<ft.z1);for(let n=0;n<64;n++){let a=n%2===0&&r.length?r:o,s=a[Math.floor(t()*a.length)];e.push({start:[s[0]+(t()-.5)*.4,s[1]-.25-t()*.3,s[2]+(t()-.5)*.4],period:18+t()*22,offset:t()*60,drift:[(t()-.5)*1.6,(t()-.5)*1.6],speed:.45+t()*.25,seed:t(),white:t()<.18?1:0})}return e})(),ds=[ft.x0+.06,ft.z0+.06,ft.x1-.06,ft.z1-.06];function S8(t,e){let o=e+t.offset,r=Math.floor(o/t.period),n=o-r*t.period,a=.6+.4*Math.sin(r*1.7+t.seed*5),s=t.start[0]+t.drift[0]*a,i=t.start[2]+t.drift[1]*a,c=s>ds[0]&&s<ds[2]&&i>ds[1]&&i<ds[3],f=c?.017:.006,l=(t.start[1]-f)/t.speed;return{ph:n,Tf:l,lx:s,lz:i,inPool:c}}var sa=[{at:[Rt/2-.8,V0(7.6)],dir:.9,len:.92,kind:0,sip:21,first:9},{at:[Rt/2+.9,V0(11.6)],dir:3.6,len:.74,kind:1,sip:29,first:17},{at:[Rt/2-.3,V0(12.8)],dir:5.2,len:.86,kind:2,sip:25,first:4},{at:[Rt/2+1,V0(7)],dir:2.2,len:.7,kind:1,sip:33,first:23},{at:[Rt/2-1.1,V0(10.4)],dir:4.4,len:.82,kind:0,sip:27,first:13},{at:[Rt/2+.4,V0(9)],dir:1.4,len:.94,kind:2,sip:31,first:28},{at:[Rt/2-.9,V0(13)],dir:5.9,len:.66,kind:1,sip:23,first:6},{at:[Rt/2+1.1,V0(12.6)],dir:3,len:.8,kind:0,sip:35,first:31}],ri=[ft.x0+.5,ft.z0+.5,ft.x1-.5,ft.z1-.55],Xl=[ft.x0+.25,ft.z0+.25,ft.x1-.25,ft.z1-.3],Zl=12,Yl=-.36,Id=[];function z8(){let t=u=>{let h=Math.sin(u*12.9898+78.233)*43758.5453;return h-Math.floor(h)},e=sa.map((u,h)=>({k:u,i:h,x:u.at[0],z:u.at[1],th:u.dir,w:0,v:.08,y:-.17,ph:h*2.1,pitch:0,kappa:0,thrust:0,amp:.2,stroking:h%2===0,modeT:t(h*3.1)*3,aim:u.dir,nextAim:t(h*7.7)*5,yAim:-.17,nextY:t(h*5.9)*8,gx:u.at[0],gz:u.at[1],nextSip:u.first,sipT:-1,bite:0,notice:0})),o=[],r=[];for(let u=0;u<Zl;u++)r.push({x:0,z:0,alive:0,born:0,seed:u*.37});let n={on:!1,x:0,z:0,t0:0,petal:!1,eaten:0,lure:null},a=0,s=0,i=u=>Math.atan2(Math.sin(u),Math.cos(u)),c=()=>t(++s*1.618+a*.37);return{fish:e,events:o,crumbs:r,feed:n,drop:(u,h)=>{u=Math.max(Xl[0],Math.min(Xl[2],u)),h=Math.max(Xl[1],Math.min(Xl[3],h)),Object.assign(n,{on:!0,x:u,z:h,t0:a,petal:!1,eaten:0}),r.forEach((g,m)=>{let y=t(a+m)*Math.PI*2,x=.04+.16*Math.sqrt(t(a*1.7+m*3.1));Object.assign(g,{x:u+Math.cos(y)*x,z:h+Math.sin(y)*x,alive:1,born:a+t(m*5.3+a)*.35})}),o.push([u,h,a,1]);for(let g of e)g.notice=a+.3+Math.hypot(g.x-u,g.z-h)*.35+t(g.i*9.1+a)*.7},lure:(u,h)=>{let g=null,m=1e9;for(let y of e){let x=Math.hypot(y.x-u,y.z-h);x<m&&(m=x,g=y)}n.lure={x:u,z:h,fish:g}},petal:(u,h)=>{Object.assign(n,{on:!0,x:u,z:h,t0:a,petal:!0,eaten:0}),r.forEach((m,y)=>Object.assign(m,{x:u,z:h,alive:y===0?1:0,born:a})),o.push([u,h,a,.45]);let g=n.lure&&n.lure.fish;if(!g){let m=1e9;for(let y of e){let x=Math.hypot(y.x-u,y.z-h);x<m&&(m=x,g=y)}}Math.hypot(g.x-u,g.z-h)>1.4&&(g.x=u+.2,g.z=h-1.2,g.th=Math.PI/2,g.y=-.22,g.v=.06);for(let m of e)m.notice=m===g?a+.9:a+4.5+Math.hypot(m.x-u,m.z-h)*.8+t(m.i*9.1)*2;n.lure=null},unpetal:()=>{if(!n.petal){n.lure=null;return}n.on=!1,n.petal=!1,n.eaten=0,n.lure=null;for(let u of r)u.alive=0},step:u=>{a+=u;let h=a,g=0;for(let m of r)!m.alive||h<m.born||(g++,m.x+=Math.sin(h*.7+m.seed*11)*.004*u,m.z+=Math.cos(h*.6+m.seed*7)*.004*u);if(n.on&&(g===0&&h>n.t0+1&&!n.petal||n.petal&&n.eaten&&h>n.eaten+3||h>n.t0+40)){n.petal=!1,n.on=!1;for(let m of r)m.alive=0}for(let m of e){let{k:y}=m,x=y.len,_=n.on&&h>m.notice;(h>m.nextAim||Math.hypot(m.gx-m.x,m.gz-m.z)<.7)&&(m.gx=ri[0]+c()*(ri[2]-ri[0]),m.gz=ri[1]+c()*(ri[3]-ri[1]),m.nextAim=h+12+c()*14),n.lure&&n.lure.fish===m&&(m.gx=n.lure.x+Math.cos(h*.3)*.3,m.gz=n.lure.z-.45+Math.sin(h*.3)*.2,m.nextAim=h+1,m.yAim=-.2),m.aim=Math.atan2(m.gz-m.z,m.gx-m.x)+.35*Math.sin(h*.21+m.i*1.7);let M=m.aim,w=.7,k=null;if(_){let ve=1e9;for(let ot of r){if(!ot.alive||h<ot.born)continue;let W=Math.hypot(ot.x-m.x,ot.z-m.z)+.1*Math.sin(m.i*3.3+ot.seed*9);W<ve&&(ve=W,k=ot)}let He=k?k.x:n.x,Fe=k?k.z:n.z;M=Math.atan2(Fe-m.z,He-m.x),m.aim=M,w=1.8}let E=.6+x*.8+m.v*2,z=_?Xl:ri,P=0;for(let ve of[0,.5,-.5]){let He=m.x+Math.cos(m.th+ve)*E,Fe=m.z+Math.sin(m.th+ve)*E;P=Math.max(P,Math.max(z[0]-He,He-z[2],z[1]-Fe,Fe-z[3],0))}if(P>0){let ve=(z[0]+z[2])/2,He=(z[1]+z[3])/2+Math.sin(m.i*2.3)*1.5,Fe=Math.atan2(He-m.z,ve-m.x),ot=Math.min(1,P*2.2);M=m.th+i(Fe-m.th)*ot+i(M-m.th)*(1-ot),_||(m.aim=M),w=Math.max(w,.6+ot*.8)}let R=0;for(let ve of e){if(ve===m)continue;let He=ve.x-m.x,Fe=ve.z-m.z,ot=Math.hypot(He,Fe),W=(_?.4:1)*(x+ve.k.len)/2+.2;if(ot<W&&Math.abs(ve.y-m.y)<.14){let gt=i(Math.atan2(Fe,He)-m.th);(Math.abs(gt)<1.6||ot<W*.5)&&(R-=Math.sign(gt||1)*(W-ot)/W*(Math.abs(gt)<1.6?1:.6))}}let B=i(M-m.th)+R*(_?.4:2);m.modeT-=u,_?(m.stroking=!0,m.modeT=Math.max(m.modeT,.4)):m.modeT<=0&&(m.stroking=!m.stroking,m.modeT=m.stroking?1.2+c()*1.6:1.6+c()*3.2),!m.stroking&&(Math.abs(B)>.9||m.v<.035)&&(m.stroking=!0,m.modeT=1+c()*.8),!_&&m.sipT<0&&h>m.nextSip&&(m.sipT=0,m.nextSip=h+y.sip*(.7+.6*c()));let $=0;if(m.sipT>=0){let ve=m.sipT;m.sipT+=u,$=Math.min(1,ve/1.6)*(1-Math.max(0,Math.min(1,(ve-2.6)/1.6))),ve<1.7&&m.sipT>=1.7&&o.push([m.x+Math.cos(m.th)*.03,m.z+Math.sin(m.th)*.03,h,.9]),ve<2.4&&m.sipT>=2.4&&o.push([m.x,m.z,h,.55]),(m.sipT>4.2||_)&&(m.sipT=-1)}let q=_&&n.petal?.7:1,ct=(m.stroking?_?2.4*q:1:0)*(1-.6*$);m.thrust+=(ct-m.thrust)*Math.min(u*3,1);let kt=_?.9:.55;m.v+=(m.thrust*.085*(.7+.4*x)-kt*m.v)*u,m.v=Math.max(m.v,.008);let xt=.35+.65*Math.min(1,m.thrust),vt=Math.max(-w,Math.min(w,B*1.3))*xt;m.w+=(vt-m.w)*Math.min(u*2.2,1),m.th+=m.w*u,h>m.nextY&&(m.yAim=-(.13+c()*.1),m.nextY=h+6+c()*10);let Et=m.yAim;if($>0&&(Et+=(-.045-Et)*$),_){let ve=k?k.x:n.x,He=k?k.z:n.z,Fe=1-Math.min(1,Math.max(0,(Math.hypot(ve-m.x,He-m.z)-.15)/.9));if(Et+=((n.petal?.012:-.04)-Et)*Fe,k&&h>m.bite&&m.y>(n.petal?-.02:-.08)){let ot=m.x+Math.cos(m.th)*(n.petal?.09:.02),W=m.z+Math.sin(m.th)*(n.petal?.09:.02);Math.hypot(k.x-ot,k.z-W)<(n.petal?.14:.09)&&(k.alive=0,m.bite=h+1.3,n.petal?(n.eaten=h,o.push([k.x,k.z,h,1.6]),o.push([k.x+Math.cos(m.th)*.12,k.z+Math.sin(m.th)*.12,h+.01,1])):o.push([k.x,k.z,h,.75]))}}m.x+=Math.cos(m.th)*m.v*u,m.z+=Math.sin(m.th)*m.v*u,m.x=Math.max(ft.x0+.15,Math.min(ft.x1-.15,m.x)),m.z=Math.max(ft.z0+.15,Math.min(ft.z1-.15,m.z));let Pt=(Et-m.y)*Math.min(u*(_?2:.8),1);m.y+=Pt;let ne=_&&n.petal?.75:.4;m.pitch+=(Math.max(-ne,Math.min(ne,Pt/u/Math.max(m.v,.06)*(_&&n.petal?1.8:1)))-m.pitch)*Math.min(u*2.5,1);let ze=Math.max(-1/x,Math.min(1/x,m.w/Math.max(m.v,.1)));m.kappa+=(ze-m.kappa)*Math.min(u*4,1);let Qe=.12+.88*Math.min(1.4,m.thrust)+.4*Math.min(1,Math.abs(m.w));m.amp+=(Qe-m.amp)*Math.min(u*2,1),m.ph+=u*(2+5.5*Math.min(1.6,m.thrust))*(.75+.35/Math.sqrt(x))}for(;o.length&&h-o[0][2]>10;)o.shift()},get t(){return a}}}function E8(){let t=Pd();{let e=ft.x0-ft.curb,o=ft.x1+ft.curb,r=ft.z0-ft.curb,n=ft.z1+ft.curb,a=[[0,0,Rt,r],[0,n,Rt,we],[0,r,e,n],[o,r,Rt,n]];for(let[s,i,c,f]of a)for(let v=s;v<c-1e-6;v+=1)for(let d=i;d<f-1e-6;d+=1){let p=v,u=Math.min(c,v+1),h=d,g=Math.min(f,d+1);t.quad([p,0,h],[p,0,g],[u,0,g],[u,0,h],[0,1,0],_t.FLOOR,[[p,h],[p,g],[u,g],[u,h]])}}for(let e of[0,1]){let o=e?Rt:0,r=e?Rt+an:-an,n=e?[-1,0,0]:[1,0,0],a=.04;for(let p=0;p<we-1e-6;p+=a){let u=p,h=Math.min(we,p+a),g=(u+h)/2,m=null;if(!e)for(let x of xe.c)Ma(g-x)!==null&&(m=[xe.sill,Math.min(Ma(u-x)||xe.spring,Ma(h-x)||xe.spring)]);let y=m?[[0,m[0]],[m[1],ao]]:[[0,ao]];for(let[x,_]of y)_<=x||(e?t.quad([o,x,h],[o,x,u],[o,_,u],[o,_,h],n,_t.ROCK,[[h,x],[u,x],[u,_],[h,_]]):t.quad([o,x,u],[o,x,h],[o,_,h],[o,_,u],n,_t.ROCK,[[u,x],[h,x],[h,_],[u,_]]))}if(!e)for(let p of xe.c){for(let m of[-1,1]){let y=p+m*xe.hw,x=[0,0,-m],_=[o,xe.sill,y],M=[r,xe.sill,y],w=[r,xe.spring,y],k=[o,xe.spring,y];m>0!=!!e?t.quad(_,M,w,k,x,_t.ROCK,[[0,xe.sill],[an,xe.sill],[an,xe.spring],[0,xe.spring]]):t.quad(k,w,M,_,x,_t.ROCK,[[0,xe.spring],[an,xe.spring],[an,xe.sill],[0,xe.sill]])}let u=28;for(let m=0;m<u;m++){let y=m/u*Ne,x=(m+1)/u*Ne,_=p+Math.cos(y)*xe.hw,M=p+Math.cos(x)*xe.hw,w=xe.spring+Math.sin(y)*xe.hw,k=xe.spring+Math.sin(x)*xe.hw,E=[0,-Math.sin((y+x)/2),-Math.cos((y+x)/2)];e?t.quad([o,w,_],[r,w,_],[r,k,M],[o,k,M],E,_t.ROCK,[[0,y],[an,y],[an,x],[0,x]]):t.quad([o,k,M],[r,k,M],[r,w,_],[o,w,_],E,_t.ROCK,[[0,x],[an,x],[an,y],[0,y]])}let h=e?Rt-.08:-an,g=e?Rt+an:.08;t.box(h,xe.sill-.09,p-xe.hw-.12,g,xe.sill,p+xe.hw+.12,_t.OLDSTONE)}let s=e?Rt:0,i=e?-1:1,c=_t.OLDSTONE,f=Math.min(s,s+i*.32),l=Math.max(s,s+i*.32);t.box(f,ao-.55,0,l,ao-.3,we,c);let v=Math.min(s,s+i*.42),d=Math.max(s,s+i*.42);t.box(v,ao-.3,0,d,ao-.12,we,c)}for(let[e,o]of[[0,1],[we,-1]]){for(let s=0;s<32;s++){let i=s/32*Rt,c=(s+1)/32*Rt,f=v=>v<Rt/2?ao+Nn*v:ao+Nn*(Rt-v),l=o>0?[[c,0],[i,0],[i,f(i)],[c,f(c)]]:[[i,0],[c,0],[c,f(c)],[i,f(i)]];t.quad(...l.map(([v,d])=>[v,d,e]),[0,0,o],_t.ROCK,l.map(([v,d])=>[v,d]))}let n=o>0?0:we-.32,a=o>0?.32:we;t.box(0,ao-.55,n,Rt,ao-.3,a,_t.OLDSTONE)}g8(t);{let e=Pd();w8(e),b8(t,e)}x8(t);{let{x0:e,x1:o,z0:r,z1:n,curb:a,top:s}=ft,i=.06,c=.08;t.box(e-a,0,r-a,e,s-c,n+a,_t.OLDSTONE,{bottom:!0}),t.box(o,0,r-a,o+a,s-c,n+a,_t.OLDSTONE,{bottom:!0}),t.box(e,0,r-a,o,s-c,r,_t.OLDSTONE,{bottom:!0}),t.box(e,0,n,o,s-c,n+a,_t.OLDSTONE,{bottom:!0}),t.box(e-a-i,s-c,r-a-i,e+i*.5,s,n+a+i,_t.OLDSTONE),t.box(o-i*.5,s-c,r-a-i,o+a+i,s,n+a+i,_t.OLDSTONE),t.box(e+i*.5,s-c,r-a-i,o-i*.5,s,r+i*.5,_t.OLDSTONE),t.box(e+i*.5,s-c,n-i*.5,o-i*.5,s,n+a+i,_t.OLDSTONE);let f=.5;for(let l=e;l<o-1e-6;l+=f)for(let v=r;v<n-1e-6;v+=f){let d=l,p=Math.min(o,l+f),u=v,h=Math.min(n,v+f);t.quad([d,0,u],[d,0,h],[p,0,h],[p,0,u],[0,1,0],_t.WATER,[[d,u],[d,h],[p,h],[p,u]])}}return t}function A8(t){for(let o of[0]){let r=o?Rt+an*.5:-an*.5,n=.05,a=Qn.w*.5;for(let s of xe.c){for(let i of Qn.cols){let c=Ma(i)-.01;t.box(r-n,xe.sill,s+i-a,r+n,c,s+i+a,_t.STEEL)}for(let i=xe.sill+Qn.rowH;i<xe.spring+.01;i+=Qn.rowH)t.box(r-n,i-a,s-xe.hw,r+n,i+a,s+xe.hw,_t.STEEL);for(let[i,c]of[[xe.hw-.03,.06],[Qn.ring,a]])for(let l=0;l<24;l++){let v=l/24*Ne,d=(l+1)/24*Ne;t.beam([r,xe.spring+Math.sin(v)*i,s+Math.cos(v)*i],[r,xe.spring+Math.sin(d)*i,s+Math.cos(d)*i],c,_t.STEEL,[1,0,0])}for(let i of[-1,1])t.box(r-n,xe.sill,s+i*(xe.hw-.03)-.03,r+n,xe.spring,s+i*(xe.hw-.03)+.03,_t.STEEL);t.box(r-n,xe.sill,s-xe.hw,r+n,xe.sill+.06,s+xe.hw,_t.STEEL)}}let e=o=>o<Rt/2?ao+Nn*o:ao+Nn*(Rt-o);for(let o=0;o<=12;o++){let r=o*zr.rafter;for(let[n,a]of[[-.3,Rt/2],[Rt/2,Rt+.3]])t.beam([n,e(Math.max(0,Math.min(Rt,n)))-.1,r],[a,e(a)-.1,r],.06,_t.STEEL)}t.beam([Rt/2,ur-.14,-.2],[Rt/2,ur-.14,we+.2],.12,_t.STEEL);for(let o of[.05,Rt-.05])t.beam([o,ao-.05,0],[o,ao-.05,we],.1,_t.STEEL);for(let o of ii){t.box(-.05,ao-.13,o-.08,Rt+.05,ao+.13,o+.08,_t.STEEL),t.beam([Rt/2,ao,o],[Rt/2,ur-.2,o],.07,_t.STEEL);for(let r of[-1,1])t.beam([Rt/2+r*Rt/4,ao,o],[Rt/2,ur-.4,o],.055,_t.STEEL),t.beam([Rt/2+r*Rt/4,ao,o],[Rt/2+r*Rt/4,e(Rt/2+r*Rt/4)-.2,o],.045,_t.STEEL),t.beam([Rt/2+r*(Rt/2-.1),ao,o],[Rt/2+r*Rt/4,e(Rt/2+r*Rt/4)-.2,o],.045,_t.STEEL);for(let r of[-1,1])t.box(Rt/2+r*Rt/4-.12,ao-.18,o-.1,Rt/2+r*Rt/4+.12,ao+.18,o+.1,_t.STEEL)}}function T8(t){let e=Ua(311),o=[],r=[[ft.x0+.9,V0(6.6),.9,11],[ft.x1-.8,V0(8.4),.85,10],[ft.x0+.8,V0(10.6),.8,9],[ft.x1-.9,V0(12.4),.9,11],[ft.x0+1,V0(13.9),.65,7],[Rt/2+.2,V0(9.6),.5,4],[ft.x1-.7,V0(15.9),.6,6]];for(let[a,s,i,c]of r)for(let f=0;f<c;f++)for(let l=0;l<40;l++){let v=e()*2*Ne,d=i*Math.sqrt(e()),p=a+Math.cos(v)*d,u=s+Math.sin(v)*d,h=.15+e()*.17;if(!(p-h<ft.x0+.04||p+h>ft.x1-.04||u-h<ft.z0+.04||u+h>ft.z1-.04)&&!(Math.hypot(p-b0.x,u-b0.z)<.62+h)&&!o.some(g=>Math.hypot(g[0]-p,g[1]-u)<(g[2]+h)*.93)){o.push([p,u,h,e()*2*Ne,e()]);break}}for(let[a,s,i,c,f]of o){Id.push([a,s,i]),t.float=[a,s,f*7.3+i*13];let l=28,v=4,d=i*1.08,p=[];for(let u=0;u<=v;u++){let h=[];for(let g=0;g<l;g++){let m=g/l*2*Ne,y=u/v,x=m-c,_=.012+.004*(1-y*y)+.006*Math.pow(y,6)*(.5+.5*Math.sin(m*3+f*9));h.push(t.v([a+Math.cos(m)*d*y,_,s+Math.sin(m)*d*y],[0,1,0],_t.PAD,[.5+.5*y*Math.sin(x),.5+.5*y*Math.cos(x)]))}p.push(h)}for(let u=0;u<v;u++)for(let h=0;h<l;h++){let g=p[u][h],m=p[u][(h+1)%l],y=p[u+1][(h+1)%l],x=p[u+1][h];t.idx.push(g,m,y,g,y,x)}}t.float=null;let n=[[ft.x0+.75,V0(6.9),1],[ft.x1-.65,V0(8.1),.85],[ft.x1-.95,V0(12.6),1.1],[ft.x0+.95,V0(10.3),.8],[ft.x1-.55,V0(15.6),.9],[ft.x0+1.05,V0(13.7),.75]];for(let[a,s,i]of n){t.float=[a,s,a*3.7+s*1.3];let c=.17;[[12,1,70],[10,.86,48],[8,.66,26]].forEach(([l,v,d],p)=>{for(let u=0;u<l;u++){let h=2*Ne*u/l+p*.33,g=(90-(90-d)*i)*Ne/180,m=6,y=4,x=[];for(let _=0;_<=m;_++){let M=_/m,w=(.18+.82*Math.sin(Ne*Math.min(1,Math.pow(M,.8)*.75+.1)))*.36*v*c,k=[];for(let E=0;E<=y;E++){let z=E/y*2-1,P=z*w,R=Math.abs(z)*Math.abs(z)*.12*v*c,B=M*v*c,$=B*Math.cos(g),q=B*Math.sin(g)+R,ct=a+Math.cos(h)*$-Math.sin(h)*P,kt=s+Math.sin(h)*$+Math.cos(h)*P;k.push(t.v([ct,.03+q,kt],[-Math.cos(h)*Math.sin(g)*.6,.8,-Math.sin(h)*Math.sin(g)*.6],_t.PETAL,[(p===2?.5:0)+.5*(.5+.5*z*.92),.98-M*.96]))}x.push(k)}for(let _=0;_<m;_++)for(let M=0;M<y;M++){let w=x[_][M],k=x[_][M+1],E=x[_+1][M+1],z=x[_+1][M];t.idx.push(w,k,E,w,E,z,w,E,k,w,z,E)}}}),t.lathe(a,s,[[0,.03+.05*c*4],[.025,.03+.045*c*4],[.032,.035],[0,.03]],_t.STAMEN,12)}t.float=null}function L8(t){let e=Ua(907);{t.box(1.25-.48,.86-.06,11.1-1.35,1.25+.48,.86,11.1+1.35,_t.WOOD);for(let i of[-1,1])for(let c of[-1,1])t.box(1.25+i*(.48-.08)-.04,0,11.1+c*(1.35-.1)-.04,1.25+i*(.48-.08)+.04,.86-.06,11.1+c*(1.35-.1)+.04,_t.WOOD);t.box(1.25-.48+.06,.16,11.1-1.35+.1,1.25+.48-.06,.19,11.1+1.35-.1,_t.WOOD);for(let i=0;i<11;i++){let c=1.25+(e()-.5)*.6,f=11.1+(e()-.5)*2.2,l=.035+e()*.04,v=.09+e()*.14;if(t.lathe(c,f,[[0,.86],[l,.86],[l*1.02,.86+v*.9],[l*.9,.86+v],[0,.86+v]],i%3?_t.JAR:_t.POT,14),i%3===0)for(let d=0;d<7;d++){let p=e()*2*Ne,u=.28+e()*.12,h=.12+e()*.2;t.beam([c,.86+.03,f],[c+Math.cos(p)*h*u,.86+.03+u,f+Math.sin(p)*h*u],.0055,_t.BRUSH)}}t.box(1.25-.3,.86,11.1+.7,1.25+.15,.86+.02,11.1+1.15,_t.WOOD)}for(let o=0;o<5;o++){let r=.55+e()*.6,n=.75+e()*.8,a=19.3+o*.16,s=.25+o*.07,i=.17,c=[s+n*Math.sin(i)*0,n,a];t.quad([s+.18,0,a-r/2],[s+.18,0,a+r/2],[s+.18-n*Math.sin(i),n*Math.cos(i),a+r/2],[s+.18-n*Math.sin(i),n*Math.cos(i),a-r/2],[Math.cos(i),Math.sin(i),0],o%2?_t.WOOD:_t.GESSO,[[0,0],[1,0],[1,1],[0,1]])}for(let[o,r,n]of Wg){t.beam([o,r+.42,we],[o,r+.42,n-.02],.016,_t.STEEL),t.beam([o,r+.42,n],[o,r+.26,n],.01,_t.STEEL);for(let[a,s]of[[-1,-1],[1,-1],[1,1],[-1,1]])t.beam([o+a*.085,r-.2,n+s*.085],[o+a*.085,r+.16,n+s*.085],.009,_t.STEEL);t.box(o-.1,r-.24,n-.1,o+.1,r-.2,n+.1,_t.STEEL),t.lathe(o,n,[[.13,r+.16],[.05,r+.27],[0,r+.29]],_t.STEEL,4),t.lathe(o,n,[[0,r-.2],[.022,r-.19],[.022,r-.06],[0,r-.055]],_t.GESSO,10),t.lathe(o,n,[[0,r-.055],[.014,r-.035],[0,r+.02]],_t.FLAME,8)}for(let o of jg)t.beam([o[0],ao,o[2]],[o[0],o[1]+.05,o[2]],.008,_t.STEEL),t.lathe(o[0],o[2],[[.04,o[1]+.06],[.06,o[1]+.02],[.16,o[1]-.09],[.29,o[1]-.22],[.33,o[1]-.28],[.32,o[1]-.285]],_t.SHADE,32),t.lathe(o[0],o[2],[[0,o[1]-.25],[.06,o[1]-.2],[0,o[1]-.12]],_t.BULB,12)}var jg=[[4.2,4.6,7.33],[11.8,4.6,7.33],[4.2,4.6,16.5],[11.8,4.6,16.5]],Wg=[-1,1].map(t=>[Rt/2+t*(1.95/2+.62),2.95,we-.34]),EA=[[ft.x0-1,ft.z0-1,1],[ft.x1+1,ft.z0-1,.95],[ft.x0-1,ft.z1+1,1.15],[ft.x1+1,ft.z1+1,1.1],[.9,1.3,1.25],[Rt-.9,we-1.2,1.3]],Gg=[[0,0,.16,.5],[.16,0,.34,.4],[.35,0,.5,.36],[.5,0,.66,.38],[.68,0,.84,.42],[0,.6,.19,1],[.2,.57,.36,1],[.41,.6,.58,1]];function N8(){let t={pos:[],nrm:[],uv:[],shade:[],flower:[],idx:[]},e=Ua(1213),o=(r,n,a,s,i)=>{let c=Gg[Math.floor(e()*Gg.length)],f=(c[2]-c[0])/(c[3]-c[1]),l=s*f*1,v=5,d=t.pos.length/3,p=.6+e()*.4;for(let u=0;u<=v;u++){let h=u/v,g=i*h*h*s,m=[r[0]+n[0]*h*s,r[1]+n[1]*h*s-g,r[2]+n[2]*h*s];for(let y of[-.5,.5]){t.pos.push(m[0]+a[0]*y*l+fe[0],m[1]+a[1]*y*l-Math.abs(y)*.08*l+fe[1],m[2]+a[2]*y*l+fe[2]);let x=[n[1]*a[2]-n[2]*a[1],n[2]*a[0]-n[0]*a[2],n[0]*a[1]-n[1]*a[0]],_=Math.hypot(...x)||1;t.nrm.push(x[0]/_,Math.abs(x[1]/_)+.2,x[2]/_),t.uv.push(y<0?c[0]:c[2],c[3]-(c[3]-c[1])*h),t.shade.push(p),t.flower.push(0)}}for(let u=0;u<v;u++){let h=d+u*2;t.idx.push(h,h+1,h+3,h,h+3,h+2)}};k8(t,o,e);for(let[r,n,a]of[[ft.x0-.3,ft.z1+.3,-1],[ft.x1+.3,ft.z0-.3,1],[ft.x0-.3,ft.z0-.2,-1]])for(let s=0;s<26;s++){let i=e()*2*Ne,c=r+(e()-.3)*.5*-a,f=n+(e()-.5)*.8,l=ft.top+.01-Math.max(0,Math.abs(c-r)-.1)*.6*e();o([c,Math.max(.05,l),f],[Math.cos(i),-.15,Math.sin(i)],[-Math.sin(i),0,Math.cos(i)],.08+e()*.05,.12)}return t}function O8(){let t=Pd();for(let o of[0]){let r=o?Rt+an*.5+.01:-an*.5-.01,n=o?[-1,0,0]:[1,0,0];for(let a of xe.c)for(let i=a-xe.hw;i<a+xe.hw-1e-6;i+=.05){let c=i,f=Math.min(a+xe.hw,i+.05),l=Ma(c-a+1e-4)||xe.spring,v=Ma(f-a-1e-4)||xe.spring;o?t.quad([r,xe.sill,f],[r,xe.sill,c],[r,l,c],[r,v,f],n,0,[[f,xe.sill],[c,xe.sill],[c,l],[f,v]]):t.quad([r,xe.sill,c],[r,xe.sill,f],[r,v,f],[r,l,c],n,0,[[c,xe.sill],[f,xe.sill],[f,v],[c,l]])}}let e=Math.hypot(Nn,1);return t.quad([0,ao+.002,we],[0,ao+.002,0],[Rt/2,ur+.002,0],[Rt/2,ur+.002,we],[Nn/e,-1/e,0].map(o=>-o).map((o,r)=>r===1?-Math.abs(o):o),1,[[0,we],[0,0],[Rt/2,0],[Rt/2,we]]),t.quad([Rt,ao+.002,0],[Rt,ao+.002,we],[Rt/2,ur+.002,we],[Rt/2,ur+.002,0],[-Nn/e,-1/e,0],1,[[Rt,0],[Rt,we],[Rt/2,we],[Rt/2,0]]),t}var ai={ivy:[[.00293,.0127,.12207,.23633],[.13037,.00586,.24463,.24414],[.25293,.0166,.37207,.23242],[.37793,.02344,.49707,.22656],[.50293,.01367,.62207,.23535],[.62793,.03418,.74707,.21582]],blade:[[.01855,.50391,.02832,.99512],[.05762,.50391,.08301,.99512],[.10889,.50391,.12549,.99609],[.1582,.50391,.16943,.99512],[.19922,.50391,.22266,.99512],[.25,.50391,.26562,.99609],[.29932,.50391,.31006,.99609],[.33008,.50781,.37305,.99121],[.38721,.50391,.40918,.99609]],daisy:[[.75684,.00586,.86768,.24414],[.87793,.00781,.99707,.24121],[.00342,.25586,.12158,.49414],[.12842,.25586,.24609,.49414],[.25293,.25684,.37207,.49219],[.37891,.25586,.49609,.49316]],weed:[[.50293,.25781,.62207,.49121],[.62793,.26562,.74707,.48438],[.75293,.26855,.87207,.48047],[.88281,.25586,.99219,.49414],[.44043,.50977,.55957,.73926],[.5752,.50586,.67432,.74414],[.69043,.50586,.80908,.74414],[.81738,.50586,.93213,.74414],[.44043,.75781,.55957,.99219]],rleaf:[[.69824,.75586,.78076,.99414],[.79834,.75586,.88867,.99414],[.9043,.75586,.99072,.99414],[.94043,.54395,.99707,.70605]],petal:[[.56445,.75391,.68555,.99609]]},R8=[[.248,.8613],[.3438,.9785],[.4492,.584],[.5957,.3281],[.5371,.918],[.1699,.4062],[.752,.6699],[.5879,.2207],[.3789,.8477],[.2637,.2266],[.6758,.7422],[.6016,.0273],[.5762,.502],[.0469,.5078],[.1406,.7773],[.791,.7539],[.6113,.5605],[.9121,.6777],[.6523,.1523],[.2871,.3301],[.2109,.832],[.4297,.625],[.168,.4434],[.1348,.1211],[.9668,.0859],[.3164,.873],[.1777,.7539],[.0215,.3281],[.6719,.334],[.9844,.6172],[.6523,.3828],[.1152,.2988],[.0176,.1328],[.207,.0996],[.6152,.9844],[.0234,.0117],[.0723,.6328],[.2695,.7695],[.2539,.9395],[.502,.9941],[.1504,.9961],[.957,.8145],[.5117,.123],[.4062,.4941],[.0547,.1387],[.4375,.2949],[.373,.2109],[.1699,.3086],[.5176,.6445],[.4863,.3027],[.877,.6602],[.5977,.8887],[.5488,.0098],[.5156,.5332],[.6973,.1094],[.4707,.2051],[.498,.7559],[.0312,.7363],[.2051,.4629],[.541,.8379],[.8398,.8965],[.1426,.1855],[.3711,.1172],[.1328,.9082],[.75,.9629],[.2812,.0449],[.6367,.4277],[.2051,.9824],[.7012,.9766],[.0059,.9102],[.7168,.3379],[.1602,.584],[.8594,.1973],[.3516,.7227],[.0918,.9727],[.416,.3359],[.6465,.9355],[.3418,.627],[.7578,.332],[.0293,.6973],[.9004,.957],[.7012,.7617],[.1855,.8652],[.6914,.8184],[.5684,.543],[.6523,.8672],[.5742,.7441],[.2949,.4121],[.2363,.6387],[.25,.1953],[.0352,.5918],[.248,.293],[.0762,.4863],[.9785,.4922],[.9004,.7305],[.9277,.5527],[.9395,.125],[.3691,.8789],[.4805,.0469],[.5703,.4551],[.4199,.2246],[.0371,.625],[.3281,.4941],[.1152,.6094],[.2793,.834],[.5039,.166],[.4609,.5312],[.0645,.7715],[.6035,.7227],[.4746,.6348],[.6777,.5684],[.2773,.4512],[.8008,.1191],[.3945,.9297],[.2109,.6855],[.5977,.1875],[.5195,.0742],[.1309,.4609],[.9531,.4277],[.4785,.9648],[.543,.3262],[.9121,.041],[.5059,.7188],[.0098,.2969],[.8438,.3789],[.1504,.2637],[.7969,.873],[.8613,.9863],[.834,.7461],[.377,.6211],[.791,.7227],[.6758,.8457],[.7832,.8066],[.834,.5293],[.1973,.6562],[.8281,.9609],[.5332,.7773],[.9062,.8008],[.3262,.0234],[.8984,.7676]],zc={IVY:0,BLADE:1,DAISY:2,WEED:3,ROSE:4,RLEAF:5,GRAPE:6},Hg=[[[.006,.013,-.051],[-.04,-.022,.004],[-.029,.026,-.015]],[[-.094,.019,.023],[.014,-.004,-.003],[.06,.026,-.027]],[[-.034,-.031,.002],[-.019,.07,-.028],[-.07,.018,-.039]],[[.102,-.049,-.011],[.057,-.046,.157],[.042,-.031,.089]],[[.026,.006,.019],[-.038,-.037,-.073],[-.042,-.019,.021]],[[.088,-.048,.008],[.143,-.012,.005],[-.044,.033,.028]],[[.039,-.084,-.04],[-.054,-.031,.031],[.076,.028,.014]],[[.082,-.037,-.05],[-.078,.011,.004],[-.076,-.047,.042]]],C8=2;function $8(){let t={pos:[],nrm:[],uv:[],info:[],idx:[]},e=[],o={pos:[],nrm:[],uv:[],info:[],idx:[]},r=t,n=Ua(2718),a=ot=>{let W=Math.hypot(ot[0],ot[1],ot[2])||1;return[ot[0]/W,ot[1]/W,ot[2]/W]},s=(ot,W)=>[ot[1]*W[2]-ot[2]*W[1],ot[2]*W[0]-ot[0]*W[2],ot[0]*W[1]-ot[1]*W[0]],i=(ot,W)=>ot[0]*W[0]+ot[1]*W[1]+ot[2]*W[2],c=(ot,W,gt)=>[ot[0]+W[0]*gt,ot[1]+W[1]*gt,ot[2]+W[2]*gt],f=ot=>ot[Math.floor(n()*ot.length)],l=ot=>(ot[2]-ot[0])*C8/(ot[3]-ot[1]),v=(ot,W,gt,Mt,le,me)=>(r.pos.push(ot[0]+fe[0],ot[1]+fe[1],ot[2]+fe[2]),r.nrm.push(W[0],W[1],W[2]),r.uv.push(gt[0],gt[1]),r.info.push(Mt,le,me),r.pos.length/3-1),d=(ot,W,gt,Mt,le,me,se,Ut,rt)=>{let Xt=rt?2:1,ke=r.pos.length/3;for(let ae=0;ae<=Xt;ae++){let Nt=ae/Xt,$e=rt?c(c(ot,gt,Nt),Ut,rt*Nt*Nt):c(ot,gt,Nt),S=Mt[3]+(Mt[1]-Mt[3])*Nt;v(c($e,W,-1),se,[Mt[0],S],le,me,Nt),v(c($e,W,1),se,[Mt[2],S],le,me,Nt)}for(let ae=0;ae<Xt;ae++){let Nt=ke+ae*2;r.idx.push(Nt,Nt+1,Nt+3,Nt,Nt+3,Nt+2)}},p=null,u=[...ai.ivy,...ai.ivy,...ai.weed.slice(0,7)],h=[0,1,0],g=(ot,W,gt,Mt,le)=>{let me=f(u),se=s(gt,W),Ut=a(c(c(W,gt,n()*.9-.25),se,(n()-.5)*.8)),rt=a(c(gt,Ut,-i(gt,Ut))),Xt=(n()-.5)*2,ke=Math.cos(Xt),ae=Math.sin(Xt);rt=a(c(c([0,0,0],rt,ke),s(Ut,rt),ae));let Nt=s(rt,Ut),$e=Mt*l(me);d(c(ot,rt,-Mt*.18),c([0,0,0],Nt,$e/2),c([0,0,0],rt,Mt),me,le,zc.IVY,Ut)},m=(ot,W,gt,Mt,le)=>{let me=Math.floor(n()*Hg.length),se=Hg[me],Ut=s(gt,W),rt=a(c(c(W,gt,n()*.8-.3),Ut,(n()-.5)*.9)),Xt=a(c(gt,rt,-i(gt,rt))),ke=n()*2*Ne,ae=Math.cos(ke),Nt=Math.sin(ke);Xt=a(c(c([0,0,0],Xt,ae),s(rt,Xt),Nt));let $e=s(Xt,rt),S=me%4/4,qe=Math.floor(me/4)/2,je=1.4,lo=[],Oo=r.pos.length/3;for(let _o=0;_o<3;_o++)for(let Fo=0;Fo<3;Fo++){let qo=Fo/2-.5,a0=.5-_o/2;lo.push(c(c(c(ot,$e,qo*Mt),Xt,a0*Mt),rt,se[_o][Fo]*Mt*je))}for(let _o=0;_o<3;_o++)for(let Fo=0;Fo<3;Fo++){let qo=Math.max(Fo-1,0),a0=Math.min(Fo+1,2),Q0=Math.max(_o-1,0),br=Math.min(_o+1,2),tt=c(lo[_o*3+a0],lo[_o*3+qo],-1),Bt=c(lo[Q0*3+Fo],lo[br*3+Fo],-1),Yt=a(s(tt,Bt));i(Yt,rt)<0&&(Yt=Yt.map(qt=>-qt)),v(lo[_o*3+Fo],Yt,[S+Fo/2*.25,qe+_o/2*.5],le,zc.GRAPE,1)}for(let _o=0;_o<2;_o++)for(let Fo=0;Fo<2;Fo++){let qo=Oo+_o*3+Fo;r.idx.push(qo,qo+1,qo+4,qo,qo+4,qo+3)}},y=(ot,W,gt,Mt,le,me,se,Ut,rt,Xt=.3)=>{let ke=Math.max(3,Math.round(le*2.4*se)),ae=[];for(let $e=0;$e<ke;$e++){let S=Mt+(n()-.5)*le,qe=Math.min(1,Math.abs(S-Mt)/(le/2+.001)),je=me*(.6+.4*n())*(1-.5*qe*qe);ae.push([S,Ut||n()*.15,(n()-.5)*.5,je,0])}let Nt=0;for(;ae.length&&Nt++<4e3;){let[$e,S,qe,je,lo]=ae.pop(),Oo=S;for(let _o=0;_o<260&&(qe+=(n()-.5)*.45,qe=Math.max(-1,Math.min(1,qe)),$e+=Math.sin(qe)*.09,S+=(Ut?-1:1)*Math.cos(qe)*.09,!(Ut?Oo-S>je||S<(rt?rt($e):.05):S-Oo>je));_o++){let qo=Ut?(Oo-S)/je:(S-Oo)/je,a0=n()<.9*se?n()<.5?2:1:0;for(let Q0=0;Q0<a0;Q0++){let br=.015+n()*.11,tt=$e+(n()-.5)*.2,Bt=S+(n()-.5)*.12;if(p&&p(tt,Bt))continue;let Yt=c(c(c(ot,W,tt),h,Bt),gt,br),qt=(.14+.1*n())*(Ut?1.05-.3*qo:1.2-.4*qo),Ee=.45+.55*(br/.125)*(.6+.4*n());n()<Xt?n()<.55&&m(Yt,gt,h,qt*1.7,Ee):g(Yt,gt,h,qt,Ee)}lo<2&&n()<.035&&ae.push([$e,S,qe+(n()<.5?-.7:.7),je*(.35+.4*n())*(1-qo*.5),lo+1])}}},x=(ot,W,gt,Mt,le)=>{let me=f(ai.rleaf),se=a(c(c(W,gt,n()*.8-.1),s(gt,W),(n()-.5)*.9)),Ut=a(c(gt,se,-i(gt,se))),rt=(n()-.5)*3,Xt=Math.cos(rt),ke=Math.sin(rt);Ut=a(c(c([0,0,0],Ut,Xt),s(se,Ut),ke));let ae=s(Ut,se);d(c(ot,Ut,-Mt*.1),c([0,0,0],ae,Mt*l(me)/2),c([0,0,0],Ut,Mt),me,le,zc.RLEAF,se)},_=(ot,W,gt,Mt,le,me,se)=>{let Ut=Math.max(3,Math.round(le*2.2)),rt=($e,S,qe)=>c(c(c(ot,W,$e),h,S),gt,qe),Xt=x,ke=null,ae=($e,...S)=>{p&&p(i(c($e,ot,-1),W),$e[1])||Xt($e,...S)},Nt=($e,S,qe)=>{p&&p(i(c($e,ot,-1),W),$e[1])||e.push({at:$e,f:S,size:qe,spin:n()*2*Ne})};for(let $e=0;$e<Ut;$e++){let S=Mt+(n()-.5)*le*.35,qe=.05,je=(n()-.5)*1.4,lo=me*(.6+.4*n()),Oo=(S-Mt)/(le/2+.001);for(let _o=0;_o<200&&qe<lo&&(je+=(n()-.5)*.3+Oo*.012+(qe>lo*.6?Math.sign(je||1)*.02:0),je=Math.max(-1.25,Math.min(1.25,je)),S+=Math.sin(je)*.08,qe+=Math.cos(je)*.08,!(Math.abs(S-Mt)>le*.6));_o++){let Fo=qe/lo;for(let qo=0;qo<(n()<.8?2:1);qo++){let a0=.02+n()*.12;ae(rt(S+(n()-.5)*.16,qe+(n()-.5)*.12,a0),gt,h,.07+n()*.05,.5+.5*n())}if(Fo>.2&&n()<se*(.018+.038*Fo)){let qo=1+Math.floor(n()*3);for(let a0=0;a0<qo;a0++){let Q0=a(c(c(gt,h,(n()-.4)*.8),s(h,gt),(n()-.5)*.9));Nt(rt(S+(n()-.5)*.22,qe+(n()-.5)*.2,.16+n()*.1),Q0,.19+n()*.09)}for(let a0=0;a0<3;a0++)ae(rt(S+(n()-.5)*.25,qe+(n()-.5)*.2,.05+n()*.08),gt,h,.07+n()*.04,.6+.4*n())}}}},M=(ot,...W)=>_(ot.o,ot.u,ot.n,...W),w={o:[0,0,0],u:[1,0,0],n:[0,0,1]},k={o:[0,0,we],u:[1,0,0],n:[0,0,-1]},E={o:[Rt,0,0],u:[0,0,1],n:[-1,0,0]},z=(ot,...W)=>y(ot.o,ot.u,ot.n,...W);z(w,4.1,3,7,1.5),z(w,12,3.4,5.8,1.3),z(w,1,2.2,4.2,1.2),z(w,15,2,5,1.2),M(w,3.6,3.2,5.6,1.1),M(w,12.6,3,4.8,1),M(w,.9,1.6,3.2,.8);{let ot=io.face-.26,W={o:[0,0,we-ot+.03],u:[1,0,0],n:[0,0,1]},gt=5.35+1.02;y(W.o,W.u,W.n,Rt-io.x1+1,1.9,2.2,1.2,gt,()=>3.2),y(W.o,W.u,W.n,Rt-io.x0-.5,.8,1,.8,gt,()=>4.6);for(let Mt=0;Mt<70;Mt++){let le=io.x0+.2+Math.pow(n(),1.6)*2.4,me=(io.x1-io.x0)/2+.2,se=gt+.62*(1-Math.abs(le-io.cx)/me)+.02;g([Rt-le,se+n()*.05,.1+n()*(we-ot-.15)],a([0,1,.3]),[0,0,1],.08+n()*.05,.7+.3*n())}}p=(ot,W)=>Math.abs(ot-Rt/2)<k0.w/2+k0.frame+.12&&W<k0.top+k0.frame+.12,z(k,5.3,3.2,6.2,1.4),z(k,11,3.6,7,1.4),z(k,1.2,2.4,4.4,1.2),z(k,14.9,2.2,5.4,1.2),y(k.o,k.u,k.n,Rt/2+.3,4,1.6,1.3,k0.top+1.7,ot=>Math.abs(ot-Rt/2)<k0.w/2+.3?k0.top+k0.frame+.15:2.4),M(k,5.6,3.4,5.2,1.2),M(k,10.6,3.6,5.8,1.2),M(k,14.6,2,4,.9),p=null,z(E,2.6,4,7,1.4),z(E,9.2,4.6,5.4,1.2),z(E,15.6,5,7.4,1.5),z(E,20.9,2,4,1.2),M(E,3.2,3.6,5.4,1.1),M(E,8.6,3,4.2,1),M(E,13.4,3.2,5.8,1.1),M(E,18.6,3.4,5,1.2),p=(ot,W)=>xe.c.some(gt=>{let Mt=Ma(ot-gt);return Mt!==null&&Math.abs(ot-gt)<xe.hw+.06&&W>xe.sill-.05&&W<Mt+.06});for(let[ot,W]of Ha.filter(gt=>gt[0]==="wall")){let gt=W<1||W>we-1;y([0,0,0],[0,0,1],[1,0,0],W,gt?1:1.7,ao-.6,gt?.9:1.1,0,null,.85)}for(let ot of xe.c)y([0,0,0],[0,0,1],[1,0,0],ot,xe.hw*2.3,1.6,.8,ao-.6,W=>Ma(W-ot)!==null?Ma(W-ot)+.15:ao-2.2,.85);p=null,r=o;let P=(ot,W,gt,Mt,le,me,se)=>{let Ut=f(ai.blade),rt=[Math.cos(me),0,Math.sin(me)],Xt=Math.max(Mt*.16,.012);d([ot,W,gt],[-rt[2]*Xt/2,0,rt[0]*Xt/2],[rt[0]*le*Mt*.4,Mt,rt[2]*le*Mt*.4],Ut,se,zc.BLADE,a([rt[0]*.5,1,rt[2]*.5]),rt,Mt>.12?Mt*le*.6:0)},R=(ot,W,gt,Mt,le)=>{for(let me=0;me<le;me++){let se=n()*2*Ne,Ut=n()*.035;P(ot+Math.cos(se)*Ut,W,gt+Math.sin(se)*Ut,Mt*(.45+.55*n()),.25+.75*n(),se+(n()-.5),.6+.4*n())}},B=(ot,W,gt,Mt)=>{let le=4+Math.floor(n()*3),me=n()*2*Ne;for(let se=0;se<le;se++){let Ut=f(ai.weed),rt=me+se*2*Ne/le+(n()-.5)*.4,Xt=[Math.cos(rt),0,Math.sin(rt)],ke=.35+n()*.45,ae=Mt*(.7+.5*n()),Nt=[Xt[0]*Math.cos(ke)*ae,Math.sin(ke)*ae,Xt[2]*Math.cos(ke)*ae],$e=ae*l(Ut);d([ot,W+.004,gt],[-Xt[2]*$e/2,0,Xt[0]*$e/2],Nt,Ut,.7+.3*n(),zc.WEED,a([-Xt[0]*Math.sin(ke),Math.cos(ke),-Xt[2]*Math.sin(ke)]),[0,-1,0],ae*.15)}},$=(ot,W,gt)=>{let Mt=.05+n()*.12;P(ot,W,gt,Mt+.02,.15,n()*2*Ne,.8);let le=f(ai.daisy),me=.03+n()*.025,se=(n()-.5)*.6,Ut=n()*2*Ne,rt=[Math.cos(Ut)*me*2,Math.sin(se)*me,Math.sin(Ut)*me*2],Xt=[-Math.sin(Ut)*me,0,Math.cos(Ut)*me];d([ot-Math.cos(Ut)*me,W+Mt,gt-Math.sin(Ut)*me],Xt,rt,le,1,zc.DAISY,[0,1,0]),B(ot,W,gt,.04)},q=(ot,W,gt,Mt)=>{let le=n();le<.8?R(ot,W,gt,Mt?.2+.3*n():.08+.1*n(),Mt?5+Math.floor(n()*6):3+Math.floor(n()*3)):le<.93?B(ot,W,gt,Mt?.09+.06*n():.06+.03*n()):$(ot,W,gt)},ct=ft.x0-ft.curb-.08,kt=ft.x1+ft.curb+.08,xt=ft.z0-ft.curb-.08,vt=ft.z1+ft.curb+.08,Et=Rt-io.x1-.16,Pt=Rt-io.x0+.16,ne=we-io.face+.36,ze=(ot,W)=>Math.hypot(ot-ro.cx,W-ro.cz),Qe=(ot,W)=>ze(ot,W)>ro.ri-.1&&ze(ot,W)<ro.ro+1.6||ot>ct&&ot<kt&&W>xt&&W<vt||ot>Et&&ot<Pt&&W<ne||Math.abs(ot-Rt/2)<1.15&&W>we-.5||ot<.06||ot>Rt-.06||W<.06||W>we-.06,ve=(ot,W)=>{let gt=Math.min(ot,Rt-ot,W,we-W),Mt=Math.max(ct-ot,ot-kt,xt-W,W-vt),le=Math.max(Et-ot,ot-Pt,W-ne);return Math.min(gt,Math.max(Mt,0)+(Mt<0?9:0),Math.max(le,0)+(le<0?9:0))},He=(ot,W)=>.5+.5*Math.sin(ot*.9+1.3)*Math.sin(W*.7-.4)+.25*Math.sin(ot*2.3+W*1.7);for(let ot=0;ot*2<Rt;ot++)for(let W=0;W*2<we;W++)for(let[gt,Mt]of R8){let le=(ot+gt)*2,me=(W+Mt)*2;if(Qe(le,me))continue;let se=ve(le,me),Ut=(se<1.2?.75-.4*se:.2)*Math.max(.2,He(le,me));n()<Ut&&q(le,.002,me,se<.8&&n()<.85)}let Fe=(ot,W,gt)=>{let Mt=Math.hypot(W[0]-ot[0],W[1]-ot[1]);for(let le=0;le<Mt;le+=.08){if(n()>.8)continue;let me=le/Mt,se=.04+Math.pow(n(),2)*.3,Ut=ot[0]+(W[0]-ot[0])*me+gt[0]*se,rt=ot[1]+(W[1]-ot[1])*me+gt[1]*se;Qe(Ut,rt)||q(Ut,.002,rt,!0)}};Fe([0,0],[0,we],[1,0]),Fe([Rt,0],[Rt,we],[-1,0]),Fe([0,0],[Rt,0],[0,1]),Fe([0,we],[Rt,we],[0,-1]),Fe([ct,xt],[kt,xt],[0,-1]),Fe([ct,xt],[ct,vt],[-1,0]),Fe([kt,xt],[kt,vt],[1,0]),Fe([Et,ne],[Pt,ne],[0,1]),Fe([Et,0],[Et,ne],[-1,0]),Fe([Pt,0],[Pt,ne],[1,0]);for(let ot=0;ot<60;ot++){let W=Math.floor(n()*3),gt,Mt;W<2?(gt=W?ft.x1+.08+n()*.38:ft.x0-.08-n()*.38,Mt=ft.z0+n()*(ft.z1-ft.z0)):(Mt=ft.z1+.08+n()*.38,gt=ft.x0+n()*(ft.x1-ft.x0)),R(gt,ft.top,Mt,.04+.06*n(),2+Math.floor(n()*3))}return{walls:t,ground:o,roses:e}}var P8=`
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
`,I8=jg.map(t=>Vh([t[0],t[1]-.22,t[2]])),Br=`
	${P8}
	${Kh()}

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
		vec3 p = pw - vec3(${G(fe[0])}, ${G(fe[1])}, ${G(fe[2])});
		float vis = studioSun(pw + N * 0.03);
		sunVis = vis;
		vec3 sunC = mix(vec3(1.0, 0.84, 0.62) * 4.6, vec3(0.50, 0.64, 1.0) * 1.6, night);
		float lam = max(dot(N, STUDIO_SUN), 0.0);
		vec3 col = sunC * vis * lam;
		vec3 Hh = normalize(STUDIO_SUN + V);
		spec = sunC * vis * pow(max(dot(N, Hh), 0.0), mix(16.0, 400.0, gloss)) * mix(0.04, 1.0, gloss) * (lam > 0.0 ? 1.0 : 0.0);

		// skylight: the roof is glass, the walls are full of windows
		float upF = 0.5 + 0.5 * N.y;
		float hgt = clamp(p.y / ${G(ao)}, 0.0, 1.0);
		// corners and the foot of the walls get less of the sky
		float dw = min(min(p.x, ${G(Rt)} - p.x), min(p.z, ${G(we)} - p.z));
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
		if (p.z > ${G(we-6)}) {
			${Wg.map(t=>Vh(t)).map(t=>`
			{
				vec3 d = vec3(${G(t[0])}, ${G(t[1]-.06)}, ${G(t[2])}) - pw;
				float dd = dot(d, d);
				vec3 Ld = d * inversesqrt(dd);
				float w = mix(1.6, 2.4, night) / (0.25 + dd * 1.8);
				col += vec3(1.0, 0.6, 0.3) * w * (max(dot(N, Ld), 0.0) * 0.9 + 0.1);
				spec += vec3(1.0, 0.65, 0.35) * w * pow(max(dot(N, normalize(Ld + V)), 0.0), mix(16.0, 300.0, gloss)) * gloss * 0.6;
			}`).join("")}
		}
		// the lamps (by night)
		if (night > 0.01) {
			${I8.map(t=>`
			{
				vec3 d = vec3(${G(t[0])}, ${G(t[1])}, ${G(t[2])}) - pw;
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
`;function q8(t){let e=new DataView(t),o=e.getUint32(4,!0),r=e.getUint32(8,!0),n=[],a=[];for(let l=0;l<3;l++)n.push(e.getFloat32(12+l*4,!0)),a.push(e.getFloat32(24+l*4,!0));let s=36,i=new Uint16Array(t,s,o*3);s+=o*6;let c=new Uint16Array(t,s,r);s+=r*2;let f=new Int8Array(t,s,o*3);return{nV:o,nI:r,mn:n,sz:a,pos:i,idx:c,nrm:f}}function fr(t,e,o){let r=o&&o.wrap||"clamp",n=t.texture({data:[[[0,0,0,0]]],min:"linear",mag:"linear"}),a={tex:n,ready:!1};return fetch(e).then(s=>{if(!s.ok)throw new Error("Could not load "+e);return s.blob()}).then(s=>createImageBitmap(s,{premultiplyAlpha:"none"}).catch(()=>new Promise((i,c)=>{let f=new Image;f.onload=()=>i(f),f.onerror=c,f.src=URL.createObjectURL(s)}))).then(s=>{n({data:s,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrap:r}),a.ready=!0}).catch(s=>console.error(s)),a}var Xh=128,Yh=Math.round((ft.z1-ft.z0)/(11/372)),Ql=(ft.x1-ft.x0)/Xh,Vg=(ft.z1-ft.z0)/Yh,D8=.02,Xg=`
	float simDec(vec2 c) { return (floor(c.x * 255.0 + 0.5) * 256.0 + floor(c.y * 255.0 + 0.5)) / 65535.0 * 2.0 - 1.0; }
	vec2 simEnc(float h) {
		float v = floor(clamp(h * 0.5 + 0.5, 0.0, 1.0) * 65535.0 + 0.5);
		float hi = floor(v / 256.0);
		return vec2(hi, v - hi * 256.0) / 255.0;
	}
`,Ga=`
	uniform float stime;
	uniform highp sampler2D simTex;
	${Xg}
	float simAt(vec2 i) {
		i = clamp(i, vec2(0.0), vec2(${Xh-1}.0, ${Yh-1}.0));
		return simDec(texture2D(simTex, (i + 0.5) / vec2(${Xh}.0, ${Yh}.0)).rg);
	}
	// the height of the water at world xz (metres, tiny)
	float poolHeight(vec2 xz) {
		float h = 0.0018 * sin(xz.x * 2.1 + stime * 0.55) * sin(xz.y * 1.7 - stime * 0.43)
		        + 0.0010 * sin(xz.x * 3.7 - xz.y * 2.9 + stime * 0.8);
#ifndef NO_SIM
		vec2 g = (xz - vec2(${G(ft.x0+fe[0])}, ${G(ft.z0+fe[2])})) / vec2(${G(Ql)}, ${G(Vg)}) - 0.5;
		vec2 i = floor(g), fr = g - i;
		float sh = mix(mix(simAt(i), simAt(i + vec2(1.0, 0.0)), fr.x), mix(simAt(i + vec2(0.0, 1.0)), simAt(i + vec2(1.0, 1.0)), fr.x), fr.y);
		h += sh * ${G(D8)};
#endif
		return h;
	}
`,Ug=`
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
	${Ga}
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
	}`,F8=`
	precision highp float;
	uniform float night, time, yScale, mirrorOn;
	uniform sampler2D padTex, petalTex, reflTex;
	uniform sampler2D rockCol, rockNrm, oldCol, oldNrm, floorCol, floorNrm;
	uniform vec2 reflSize;
	uniform float reflOn;
	uniform mat4 view;
	${Ga}
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
		vec3 p = pw - vec3(${G(fe[0])}, ${G(fe[1])}, ${G(fe[2])});
		vec3 V = normalize(v_eye - pw);
		vec3 N = normalize(v_nrm);
		if (dot(N, V) < 0.0 && !is(${_t.PETAL}.0)) N = -N;
		if (is(${_t.PETAL}.0) && dot(N, V) < 0.0) N = -N;

		// in the reflection under the floor, the floor and the water are not drawn
		bool floorish = is(${_t.FLOOR}.0) || is(${_t.WATER}.0);
		if (yScale < 0.0 && floorish) discard;

		// fallen bracts: little papery hearts, pink or white
		if (is(${_t.BRACT}.0)) {
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

		if (is(${_t.ROCK}.0)) {
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
			base *= mix(1.0, 0.84, smoothstep(${G(ao-2.2)}, ${G(ao)}, p.y));
			N = bumped(N, T, B, tn, 1.4);
			aoK = mix(0.42, 1.0, tn.b);
			gloss = 0.05;
		} else if (is(${_t.OLDSTONE}.0) || is(${_t.HOLLOW}.0)) {
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
			float low = 1.0 - smoothstep(0.0, ${G(ft.top+.35)}, p.y);
			float moss = low * smoothstep(0.35, 0.65, fbm3(p * 4.0 + 2.0));
			base = mix(base, vec3(0.10, 0.12, 0.065), moss * 0.6);
			base *= mix(0.72, 1.0, smoothstep(0.0, 0.22, p.y));
			if (is(${_t.HOLLOW}.0)) {
				// the hollow: older, damper, never washed by the sun
				base *= vec3(0.70, 0.73, 0.68) * (0.85 + 0.15 * smoothstep(${G(io.floor)}, ${G(io.spring)}, p.y));
			}
			N = bumped(N, T, B, tn, 1.1);
			aoK = mix(0.5, 1.0, tn.b);
			gloss = 0.08;
		} else if (is(${_t.PLASTER}.0) || is(${_t.NICHE}.0)) {
			// old lime plaster: warm, patchy, with a soft trowelled bloom
			float big = fbm3(p * vec3(0.35, 0.45, 0.35));
			float mid = fbm3(p * 1.6 + 3.0);
			float fine = vnoise3(p * 14.0);
			vec3 a = vec3(0.70, 0.60, 0.47), b = vec3(0.84, 0.76, 0.63);
			base = mix(a, b, smoothstep(0.3, 0.7, big));
			base *= 0.86 + 0.22 * mid + 0.05 * fine;
			// damp stains low down, soot high up
			base *= mix(0.86, 1.0, smoothstep(0.0, 1.4, p.y + 0.6 * mid));
			base *= mix(1.0, 0.9, smoothstep(${G(ao-2)}, ${G(ao)}, p.y));
			// where the plaster has come away, old brick shows through
			float bare = smoothstep(0.70, 0.74, fbm3(p * vec3(0.5, 0.8, 0.5) + 11.0)) * smoothstep(0.4, 1.6, p.y) * 0.85;
			vec2 bk = (abs(N.x) > 0.5 ? p.zy : p.xy) * vec2(1.0 / 0.23, 1.0 / 0.075);
			bk.x += floor(bk.y) * 0.5;
			float mortar = max(smoothstep(0.9, 0.97, fract(bk.x)), smoothstep(0.82, 0.92, fract(bk.y)));
			vec3 brick = mix(vec3(0.55, 0.30, 0.20), vec3(0.42, 0.25, 0.18), vnoise3(vec3(floor(bk), 0.0) * 0.7)) * (0.85 + 0.3 * hash13(vec3(floor(bk), 1.0)));
			brick = mix(brick, vec3(0.62, 0.58, 0.52), mortar);
			base = mix(base, brick, bare);
			if (is(${_t.NICHE}.0)) base *= 0.55;
			gloss = 0.04;
		} else if (is(${_t.STONE}.0)) {
			float n = fbm3(p * vec3(1.2, 2.5, 1.2));
			base = mix(vec3(0.72, 0.66, 0.56), vec3(0.84, 0.79, 0.70), n) * (0.92 + 0.12 * vnoise3(p * 20.0));
			gloss = 0.12;
		} else if (is(${_t.TRAVERTINE}.0)) {
			// travertine: bands, little holes, a warm cream
			float band = fbm3(vec3(p.x * 0.4, p.y * 9.0 + fbm3(p * 1.5) * 2.0, p.z * 0.4));
			base = mix(vec3(0.73, 0.65, 0.53), vec3(0.88, 0.82, 0.72), band);
			float pit = smoothstep(0.84, 0.9, vnoise3(p * 55.0));
			base *= 1.0 - pit * 0.18;
			// wet and darker just above the water
			base *= mix(0.78, 1.0, smoothstep(0.0, 0.12, p.y));
			gloss = 0.18;
		} else if (is(${_t.STEEL}.0)) {
			base = vec3(0.035, 0.036, 0.038) * (0.8 + 0.4 * vnoise3(p * 3.0));
			gloss = 0.45;
		} else if (is(${_t.FLOOR}.0)) {
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
			float wallD = min(min(p.x, ${G(Rt)} - p.x), min(p.z, ${G(we)} - p.z));
			base *= mix(0.72, 1.0, smoothstep(0.0, 1.2, wallD));
			N = normalize(N + (vec3(1.0, 0.0, 0.0) * (tn.r * 2.0 - 1.0) + vec3(0.0, 0.0, -1.0) * (tn.g * 2.0 - 1.0)) * 1.2);
			gloss = 0.12;
			aoK = mix(0.5, 1.0, tn.b) * mix(0.62, 1.0, smoothstep(0.0, 0.9, wallD));
			// the curb throws a soft shadow round the pool
			vec2 dq = max(vec2(${G(ft.x0-ft.curb)} - p.x, p.x - ${G(ft.x1+ft.curb)}), vec2(${G(ft.z0-ft.curb)} - p.z, p.z - ${G(ft.z1+ft.curb)}));
			float dpool = max(max(dq.x, dq.y), 0.0);
			aoK *= mix(0.7, 1.0, smoothstep(0.0, 0.4, dpool));
		} else if (is(${_t.WMARBLE}.0)) {
			// white statuary marble, polished: a soft grey cloud and fine veins
			float cl = fbm3(p * 1.4 + 2.0);
			float v1 = abs(sin(p.x * 3.1 + p.z * 1.7 + p.y * 5.0 + cl * 7.0));
			float vein = (1.0 - smoothstep(0.0, 0.05, v1)) * 0.7 + (1.0 - smoothstep(0.0, 0.02, abs(sin(p.z * 6.3 - p.x * 2.2 + cl * 11.0)))) * 0.3;
			base = mix(vec3(0.68, 0.68, 0.66), vec3(0.76, 0.76, 0.74), cl);
			base = mix(base, vec3(0.50, 0.51, 0.52), vein * 0.45);
			base *= mix(0.8, 1.0, smoothstep(0.0, 0.1, p.y));
			gloss = 0.88;
		} else if (is(${_t.REDDOOR}.0) || is(${_t.REDPANEL}.0)) {
			// deep crimson paint over wood: a soft sheen, the grain just showing
			float grain = vnoise3(vec3(p.x * 40.0, p.y * 2.0, p.z * 40.0));
			base = vec3(0.30, 0.022, 0.026) * (0.88 + 0.2 * grain);
			if (is(${_t.REDPANEL}.0)) base *= 0.55;
			gloss = 0.62;
		} else if (is(${_t.DARKWOOD}.0)) {
			float grain = vnoise3(vec3(p.x * 3.0, p.y * 45.0, p.z * 3.0));
			base = mix(vec3(0.030, 0.019, 0.014), vec3(0.062, 0.040, 0.028), grain);
			gloss = 0.35;
		} else if (is(${_t.BRASS}.0)) {
			base = vec3(0.60, 0.44, 0.17) * (0.85 + 0.25 * vnoise3(p * 90.0));
			gloss = 0.78;
		} else if (is(${_t.KEYHOLE}.0)) {
			base = vec3(0.004);
		} else if (is(${_t.BRACT}.0)) {
			float white = step(1.5, v_uv.x);
			base = mix(vec3(0.62, 0.03, 0.22), vec3(0.86, 0.80, 0.80), white) * (0.8 + 0.3 * hash13(floor(p * 30.0)));
			sss = 0.5;
		} else if (is(${_t.WATER}.0)) {
			base = vec3(0.012, 0.018, 0.014);
			gloss = 1.0;
		} else if (is(${_t.PAD}.0)) {
			vec4 tx = texture2D(padTex, v_uv);
			if (tx.a < 0.5) discard;
			base = tx.rgb * tx.rgb * (0.8 + 0.35 * vnoise3(vec3(p.xz * 1.3, 2.0)));
			gloss = 0.55;
		} else if (is(${_t.PETAL}.0)) {
			vec4 tx = texture2D(petalTex, v_uv);
			if (tx.a < 0.45) discard;
			base = tx.rgb * tx.rgb;
			sss = 0.6;
			gloss = 0.25;
		} else if (is(${_t.STAMEN}.0)) {
			base = vec3(0.95, 0.66, 0.12);
			gloss = 0.2;
		} else if (is(${_t.MARBLE}.0)) {
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
			float foot = 1.0 - smoothstep(${G(b0.plinth)}, ${G(b0.plinth+.7)}, p.y);
			base = mix(base, base * vec3(0.55, 0.62, 0.48), foot * smoothstep(0.4, 0.7, fbm3(p * 6.0)));
			sss = 0.06;
			gloss = 0.14;
		} else if (is(${_t.WOOD}.0)) {
			float g = vnoise3(vec3(p.x * 2.0, p.y * 30.0, p.z * 2.0));
			base = mix(vec3(0.26, 0.15, 0.08), vec3(0.42, 0.27, 0.15), g) * (0.85 + 0.2 * vnoise3(p * 5.0));
			gloss = 0.2;
		} else if (is(${_t.GESSO}.0)) {
			base = vec3(0.86, 0.83, 0.76) * (0.95 + 0.08 * vnoise3(p * 30.0));
		} else if (is(${_t.PAINT}.0)) {
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
		} else if (is(${_t.POT}.0)) {
			base = vec3(0.025, 0.025, 0.028);
			gloss = 0.85;
		} else if (is(${_t.SOIL}.0)) {
			base = vec3(0.10, 0.07, 0.05) * (0.7 + 0.5 * vnoise3(p * 40.0));
		} else if (is(${_t.SHADE}.0)) {
			base = vec3(0.03);
			gloss = 0.6;
		} else if (is(${_t.FLAME}.0)) {
			float fl = 0.85 + 0.15 * sin(time * 9.0 + p.x * 3.0) * sin(time * 5.3 + 1.0);
			gl_FragColor = vec4(sqrt(vec3(1.0, 0.62, 0.28) * 4.0 * fl), 1.0);
			return;
		} else if (is(${_t.BULB}.0)) {
			vec3 glow = mix(vec3(0.75, 0.70, 0.62) * 0.35, vec3(1.0, 0.75, 0.45) * 3.5, night);
			gl_FragColor = vec4(sqrt(glow), 1.0);
			return;
		} else if (is(${_t.JAR}.0)) {
			base = mix(vec3(0.55, 0.42, 0.25), vec3(0.75, 0.70, 0.62), hash13(floor(p * 3.0)));
			gloss = 0.7;
		} else if (is(${_t.BRUSH}.0)) {
			base = mix(vec3(0.42, 0.10, 0.06), vec3(0.75, 0.62, 0.38), step(${G(.86+.24)}, p.y));
			gloss = 0.5;
		} else if (is(${_t.CLOTH}.0)) {
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
		if (is(${_t.POT}.0) || is(${_t.STEEL}.0) || is(${_t.SHADE}.0) || is(${_t.JAR}.0)) {
			col += env * (0.04 + 0.6 * fres) * gloss * 1.2;
		}
		if (is(${_t.BRASS}.0)) {
			col = base * light * 0.35 + spec * base * 2.5 + env * base * 1.6;
		}
		if (is(${_t.REDDOOR}.0) || is(${_t.REDPANEL}.0) || is(${_t.WMARBLE}.0)) {
			col += env * (0.03 + 0.5 * fres) * gloss;
		}

		col = studioAir(col, pw, v_eye);

		float alpha = 1.0;
		if (is(${_t.FLOOR}.0)) {
			// worn stone: no mirror, just a faint sheen of the room at grazing angles
			float cosV = clamp(V.y, 0.0, 1.0);
			alpha = 1.0 - 0.1 * pow(1.0 - cosV, 4.0) * mirrorOn;
			if (reflOn > 0.5 && mirrorOn > 0.5) {
				vec3 rc = texture2D(reflTex, clamp(gl_FragCoord.xy / reflSize, vec2(0.001), vec2(0.999))).rgb;
				col = mix(rc, col, alpha);
				alpha = 1.0;
			}
		}
		if (is(${_t.WATER}.0)) {
			// still, dark water: almost a mirror, the sky's light on it, a
			// very slow breath of ripples
			// the moving surface: its slope from the swell and the rings
			float e = ${G(Ql)};
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
	}`,si={tex:null,dummy:null};function G8(t){if(si.tex)return;let e=typeof navigator!="undefined"&&/Mobi|Android|iPhone|iPad/.test(navigator.userAgent),o=Math.min(e?1024:2048,t.limits.maxTextureSize),r=t.texture({width:o,height:o,min:"linear",mag:"linear",wrap:"clamp"}),n=t.framebuffer({color:r,depth:!1});t({vert:`
		precision highp float;
		attribute vec2 pos;
		varying vec2 uv;
		void main() { uv = pos * 0.5 + 0.5; gl_Position = vec4(pos, 0.0, 1.0); }`,frag:`
		precision highp float;
		varying vec2 uv;
		uniform float night;
		${Kh("bake")}
		void main() {
			vec2 qs = vec2(${G(In.sun[0])}, ${G(In.sun[1])}) + uv * vec2(${G(In.sun[2])}, ${G(In.sun[3])});
			vec2 qm = vec2(${G(In.moon[0])}, ${G(In.moon[1])}) + uv * vec2(${G(In.moon[2])}, ${G(In.moon[3])});
			gl_FragColor = vec4(studioExit(vec3(qs.x, ${G(ao)}, qs.y), STUDIO_SUN_D), studioExit(vec3(qm.x, ${G(ao)}, qm.y), STUDIO_MOON_D));
		}`,attributes:{pos:[-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]},uniforms:{night:0},count:6,depth:{enable:!1},framebuffer:n})(),si.tex=r}function H8(t){return si.tex?si.tex:(si.dummy||(si.dummy=t.texture({width:1,height:1,data:[0,0,0,0]})),si.dummy)}kn.exports=function(t){G8(t);let e=E8();A8(e),T8(e),L8(e),_8(e),M8(e);let o={enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"zero"}},r=performance.now(),n={t:0},a=0,s=t._gl,i=!!(s&&s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS)>0),c=et=>i?et:`#define NO_SIM
`+et,f=(()=>{let et=Xh,mt=Yh,J=new Uint8Array(et*mt*4);for(let Kt=0;Kt<et*mt;Kt++)J[Kt*4]=128,J[Kt*4+2]=128;let de=()=>t.framebuffer({color:t.texture({width:et,height:mt,data:J,min:"nearest",mag:"nearest",wrap:"clamp"}),depth:!1,stencil:!1}),ge=[de(),de()],St=0,Zt=new Uint8Array(et*mt*4);for(let Kt=0;Kt<mt;Kt++)for(let Mo=0;Mo<et;Mo++){let xo=ft.x0+(Mo+.5)*Ql,Po=ft.z0+(Kt+.5)*Vg,co=Math.abs(xo-b0.x)<.43&&Math.abs(Po-b0.z)<.43,ko=0;for(let De of Id)ko=Math.max(ko,1-Math.min(1,Math.max(0,(Math.hypot(xo-De[0],Po-De[1])-De[2]*.7)/(De[2]*.3))));let oo=(Kt*et+Mo)*4;Zt[oo]=co?0:255,Zt[oo+1]=Math.round(ko*255),Zt[oo+3]=255}let Ye=t.texture({width:et,height:mt,data:Zt,min:"nearest",mag:"nearest",wrap:"clamp"}),eo=16,Se=[];for(let Kt=0;Kt<eo;Kt++)Se.push([0,0,0,.04]);let Ue={prev:t.prop("prev"),mask:Ye};for(let Kt=0;Kt<eo;Kt++)Ue["src["+Kt+"]"]=(Mo=>()=>Se[Mo])(Kt);let $o=Math.pow(.36*(1/60)/Ql,2),j=t({vert:"precision highp float; attribute vec2 position; varying vec2 uv; void main() { uv = position * 0.5 + 0.5; gl_Position = vec4(position, 0.0, 1.0); }",frag:`
			precision highp float;
			uniform highp sampler2D prev, mask;
			uniform vec4 src[${eo}];
			varying vec2 uv;
			${Xg}
			void main() {
				vec2 px = 1.0 / vec2(${et}.0, ${mt}.0);
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
				float hn = h + (h - hp) * damp + ${G($o)} * lap;
				hn *= 0.9993;
				// whatever touched the water this moment
				vec2 p = vec2(${G(ft.x0+fe[0])}, ${G(ft.z0+fe[2])}) + uv * vec2(${G(ft.x1-ft.x0)}, ${G(ft.z1-ft.z0)});
				for (int i = 0; i < ${eo}; i++) {
					vec4 s = src[i];
					if (s.z == 0.0) continue;
					vec2 dd = p - s.xy;
					hn += s.z * exp(-dot(dd, dd) / (s.w * s.w));
				}
				gl_FragColor = vec4(simEnc(clamp(hn, -1.0, 1.0)), simEnc(h));
			}`,attributes:{position:[-1,-1,1,-1,-1,1,1,1]},primitive:"triangle strip",count:4,framebuffer:t.prop("out"),uniforms:Ue,depth:{enable:!1,mask:!1},blend:{enable:!1},cull:{enable:!1},viewport:{x:0,y:0,width:et,height:mt}}),dt=[],jt=0,te=0;return{tex:()=>ge[St].color[0],drop(Kt,Mo,xo,Po){dt.push([Kt,Mo,jt,xo,0,Po||.035]),typeof window!="undefined"&&window.__dropLog&&window.__dropLog.push([Kt,Mo,jt,xo])},advance(Kt,Mo){let xo=Kt-jt-te;if(xo<0||xo>2){jt=Kt,te=0;return}te+=xo;let Po=0;for(;te>=1/60&&Po<8;){te-=1/60,jt+=1/60,Po++;let co=0;for(let ko=dt.length-1;ko>=0;ko--){let oo=dt[ko],De=jt-oo[2];if(De>1.4){dt.splice(ko,1);continue}if(co>=eo)continue;let p0=oo[3]*.05*Math.sin(De*2*Math.PI*2.4)*Math.exp(-De*3.2),zo=Se[co++];zo[0]=oo[0],zo[1]=oo[1],zo[2]=p0,zo[3]=oo[5]}for(let ko of Mo){if(co>=eo)break;let oo=Se[co++];oo[0]=ko[0],oo[1]=ko[1],oo[2]=ko[2],oo[3]=ko[3]}for(;co<eo;co++)Se[co][2]=0;j({prev:ge[St].color[0],out:ge[1-St]}),St=1-St}Po===8&&(te=0,jt=Kt)},read(){return t.read({framebuffer:ge[St]})}}})(),l=()=>{n.t=(performance.now()-r)/1e3,typeof window!="undefined"&&window.__studioFreeze!=null&&(n.t=window.__studioFreeze);for(let J of Fg){let de=S8(J,n.t),ge=de.ph-de.Tf;de.inPool&&ge>=0&&ge<.5&&!(J.heard>n.t-1)&&(J.heard=n.t,f.drop(de.lx+fe[0],de.lz+fe[2],1.1,.04))}let et=n.t-Nt.sim.t;for((et<0||et>120)&&(et=Math.min(Math.max(et,0),120));et>1e-6;){let J=Math.min(et,.05);Nt.sim.step(J),et-=J}for(let J of Nt.sim.events)J[2]>a&&(a=J[2],f.drop(J[0]+fe[0],J[1]+fe[2],J[3]*1.3,J[3]>=1?.07:.04));let mt=[];for(let J of Nt.sim.fish){let de=Math.min(1,Math.max(0,(J.y+.15)/.09));if(de<=0)continue;let ge=.008*de*Math.min(1.5,J.v/.15);mt.push([J.x+fe[0]+Math.cos(J.th)*.02,J.z+fe[2]+Math.sin(J.th)*.02,ge,.045]),mt.push([J.x+fe[0]-Math.cos(J.th)*.14,J.z+fe[2]-Math.sin(J.th)*.14,-ge,.055])}f.advance(n.t,mt)},v={stime:()=>n.t,simTex:()=>f.tex()};typeof location!="undefined"&&/tourdebug/.test(location.search)&&(window.__studioClock=n,window.__pondSim=f);let d=t.texture({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"}),p=d,u=[4,4],h=0,g=t({}),m=()=>g(et=>{if(w){w=!1;return}let mt=et.viewportWidth,J=et.viewportHeight;d.width!==mt||d.height!==J?d({copy:!0,width:mt,height:J,min:"linear",mag:"linear",wrap:"clamp"}):d.subimage({copy:!0,width:mt,height:J}),p=d,u[0]=mt,u[1]=J,h=1}),y=t.texture({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"}),x=t.framebuffer({color:y,depth:!0}),_=t({framebuffer:x}),M=t.texture({width:1,height:1,data:[0,0,0,255]}),w=!1,k=0,E=!1,z=(et,mt)=>g(J=>{let de=J.viewportWidth,ge=J.viewportHeight,St=Math.max(2,Math.round(de/2)),Zt=Math.max(2,Math.round(ge/2)),Ye=!E;if((x.width!==St||x.height!==Zt)&&(x.resize(St,Zt),Ye=!0),u[0]=de,u[1]=ge,w=!0,h=1,!Ye&&++k%mt!==0){p=y;return}p=M,_(()=>{t.clear({color:[0,0,0,1],depth:1}),et()}),p=y,E=!0}),P=fr(t,"res/pond/lilypad.webp"),R=fr(t,"res/pond/petals.webp"),B=fr(t,"res/studio/rock_col.webp",{wrap:"repeat"}),$=fr(t,"res/studio/rock_nrm.webp",{wrap:"repeat"}),q=fr(t,"res/studio/oldstone_col.webp",{wrap:"repeat"}),ct=fr(t,"res/studio/oldstone_nrm.webp",{wrap:"repeat"}),kt=fr(t,"res/studio/floor_col.webp",{wrap:"repeat"}),xt=fr(t,"res/studio/floor_nrm.webp",{wrap:"repeat"}),vt=Object.assign({padTex:()=>P.tex,petalTex:()=>R.tex,reflTex:()=>p,reflSize:()=>u,reflOn:()=>h,rockCol:()=>B.tex,rockNrm:()=>$.tex,oldCol:()=>q.tex,oldNrm:()=>ct.tex,floorCol:()=>kt.tex,floorNrm:()=>xt.tex},v),Et=(et,mt)=>t({vert:c(Ug),frag:F8,attributes:{position:et.pos,normal:et.nrm,kind:et.kind,uv:et.uv,anchor:et.anchor&&et.anchor.length?et.anchor:new Float32Array(et.pos.length/3*4)},elements:new Uint32Array(et.idx),count:mt||et.idx.length,uniforms:vt,cull:{enable:!1},blend:o}),Pt=Et(e),ne=null;fetch(b0.file).then(et=>{if(!et.ok)throw new Error("Could not load "+b0.file);return et.arrayBuffer()}).then(et=>{let mt=q8(et),J={pos:[],nrm:[],kind:[],uv:[],anchor:null,idx:[]},de=b0.height,ge=Math.cos(b0.yaw),St=Math.sin(b0.yaw);for(let Zt=0;Zt<mt.nV;Zt++){let Ye=(mt.mn[0]+mt.pos[Zt*3]/65535*mt.sz[0])*de,eo=(mt.mn[1]+mt.pos[Zt*3+1]/65535*mt.sz[1])*de,Se=(mt.mn[2]+mt.pos[Zt*3+2]/65535*mt.sz[2])*de;J.pos.push(b0.x+ge*Ye+St*Se+fe[0],b0.plinth+eo+fe[1],b0.z-St*Ye+ge*Se+fe[2]);let Ue=mt.nrm[Zt*3]/127,$o=mt.nrm[Zt*3+1]/127,j=mt.nrm[Zt*3+2]/127;J.nrm.push(ge*Ue+St*j,$o,-St*Ue+ge*j),J.kind.push(_t.MARBLE),J.uv.push(0,0)}for(let Zt=0;Zt<mt.nI;Zt++)J.idx.push(mt.idx[Zt]);ne=Et(J)}).catch(et=>console.error(et));let ze=fr(t,"res/tree/leaves.webp"),Qe=N8(),ve=t({vert:c(`
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
		}`,attributes:{position:Qe.pos,normal:Qe.nrm,uv:Qe.uv,shade:Qe.shade,flower:Qe.flower},elements:new Uint32Array(Qe.idx),uniforms:{tex:ze.tex},cull:{enable:!1}}),He=fr(t,"res/studio/plants.webp"),Fe=fr(t,"res/studio/vleaves.webp"),ot=$8(),W=et=>t({vert:c(`
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
		}`,attributes:{position:et.pos,normal:et.nrm,uv:et.uv,info:et.info},elements:new Uint32Array(et.idx),uniforms:{tex:He.tex,tex2:Fe.tex},cull:{enable:!1}}),gt=W(ot.walls),Mt=y8(),le=t({vert:c(`
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
			vec2 c = position.xz - vec2(${G(ro.cx+fe[0])}, ${G(ro.cz+fe[2])});
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
		}`,attributes:{position:Mt.pos,normal:Mt.nrm,uv:Mt.uv,sw:Mt.sw},elements:new Uint32Array(Mt.idx),cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",srcAlpha:"one",dstRGB:"one minus src alpha",dstAlpha:"one minus src alpha"}}}),me=fr(t,"res/studio/rose_col.webp"),se=null;fetch("res/studio/rose.bin").then(et=>{if(!et.ok)throw new Error("Could not load res/studio/rose.bin");return et.arrayBuffer()}).then(et=>{let mt=new DataView(et).getUint32(4,!0),J=new Float32Array(et,8,mt*8),de=new Float32Array(ot.roses.length*mt*3),ge=new Float32Array(de.length),St=new Float32Array(ot.roses.length*mt*2),Zt=0;for(let Ye of ot.roses){let eo=Ye.f,Se=Math.abs(eo[1])>.9?[1,0,0]:[0,1,0],Ue=[Se[1]*eo[2]-Se[2]*eo[1],Se[2]*eo[0]-Se[0]*eo[2],Se[0]*eo[1]-Se[1]*eo[0]],$o=Math.hypot(...Ue),j=Ue.map(xo=>xo/$o),dt=[eo[1]*j[2]-eo[2]*j[1],eo[2]*j[0]-eo[0]*j[2],eo[0]*j[1]-eo[1]*j[0]],jt=Math.cos(Ye.spin),te=Math.sin(Ye.spin),Kt=j.map((xo,Po)=>xo*jt+dt[Po]*te),Mo=dt.map((xo,Po)=>xo*jt-j[Po]*te);for(let xo=0;xo<mt;xo++){let Po=J[xo*8],co=J[xo*8+1],ko=J[xo*8+2],oo=J[xo*8+3],De=J[xo*8+4],p0=J[xo*8+5];for(let zo=0;zo<3;zo++)de[Zt*3+zo]=Ye.at[zo]+fe[zo]+(Kt[zo]*Po+Mo[zo]*co+eo[zo]*ko)*Ye.size,ge[Zt*3+zo]=Kt[zo]*oo+Mo[zo]*De+eo[zo]*p0;St[Zt*2]=J[xo*8+6],St[Zt*2+1]=J[xo*8+7],Zt++}}se=t({vert:c(`
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
				}`,attributes:{position:de,normal:ge,uv:St},count:Zt,uniforms:{tex:me.tex},cull:{enable:!1}})}).catch(et=>console.error(et));let Ut=W(ot.ground);typeof location!="undefined"&&/tourdebug/.test(location.search)&&console.log("studio greenery: ivy verts",ot.walls.pos.length/3,"ground verts",ot.ground.pos.length/3);let rt=(()=>{let et=[],mt=[];for(let St=0;St<=14;St++)for(let Zt=0;Zt<=6*2;Zt++)et.push([St/14,Zt/6-1]);let ge=6*2+1;for(let St=0;St<14;St++)for(let Zt=0;Zt<6*2;Zt++){let Ye=St*ge+Zt;mt.push([Ye,Ye+ge,Ye+ge+1],[Ye,Ye+ge+1,Ye+1])}return{uvw:et,idx:mt}})(),Xt=t({vert:c(`
		precision highp float;
		uniform mat4 proj, view, gModel;
		uniform float yScale, gFloat, gSize, gFlex, gFlutter, gAng, time;
		uniform vec3 gPos;
		attribute vec2 uvw;
		varying vec3 v_pos, v_nrm, v_eye;
		varying vec2 v_uv;
		${Ga}
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
		}`,attributes:{uvw:rt.uvw},elements:rt.idx,uniforms:Object.assign({gModel:()=>Er.model,gPos:()=>{let et=Nt.sim.crumbs[0];return[et.x+fe[0],0,et.z+fe[2]]},gAng:()=>Er.ang,gSize:()=>Er.size,gFlex:()=>Er.flex,gFlutter:()=>Er.flutter,gFloat:()=>Er.floating?1:0},v),cull:{enable:!1}}),ke=(()=>{let et={corner:[],start:[],par:[],misc:[],idx:[]};return Fg.forEach((mt,J)=>{for(let de of[[-1,-1],[1,-1],[1,1],[-1,1]])et.corner.push(de[0],de[1]),et.start.push(mt.start[0]+fe[0],mt.start[1],mt.start[2]+fe[2]),et.par.push(mt.period,mt.offset,mt.drift[0],mt.drift[1]),et.misc.push(mt.speed,mt.seed,mt.white);et.idx.push(J*4,J*4+1,J*4+2,J*4,J*4+2,J*4+3)}),et})(),ae=t({vert:c(`
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
		${Ga}
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
			vec2 lq = land - vec2(${G(fe[0])}, ${G(fe[2])});
			bool inPool = lq.x > ${G(ds[0])} && lq.x < ${G(ds[2])} && lq.y > ${G(ds[1])} && lq.y < ${G(ds[3])};
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
		}`,attributes:{corner:ke.corner,start:ke.start,par:ke.par,misc:ke.misc},elements:new Uint32Array(ke.idx),uniforms:v,cull:{enable:!1}}),Nt={sim:z8(),ready:!1};qn=Nt.sim,typeof location!="undefined"&&/tourdebug/.test(location.search)&&(window.__koi=Nt.sim);let $e=Object.assign({},v);sa.forEach((et,mt)=>{$e["koiA["+mt+"]"]=()=>{let J=Nt.sim.fish[mt];return[J.x+fe[0],J.y,J.z+fe[2],J.th]},$e["koiB["+mt+"]"]=()=>{let J=Nt.sim.fish[mt];return[J.kappa,J.ph,J.amp,J.pitch]}});let S=(()=>{let mt=Math.round(96*(ft.z1-ft.z0)/(ft.x1-ft.x0)),J=new Uint8Array(96*mt*4),de=[-hr[0]/hr[1]*-Yl,-hr[2]/hr[1]*-Yl],ge=96/(ft.x1-ft.x0),St=mt/(ft.z1-ft.z0);for(let Zt=0;Zt<mt;Zt++)for(let Ye=0;Ye<96;Ye++){let eo=ft.x0+(Ye+.5)/ge,Se=ft.z0+(Zt+.5)/St,Ue=0;for(let $o of Id){let j=Math.hypot(eo-($o[0]+de[0]),Se-($o[1]+de[1]));Ue=Math.max(Ue,1-Math.min(1,Math.max(0,(j-$o[2]*.82)/($o[2]*.35))))}J[(Zt*96+Ye)*4]=Math.round(Ue*255),J[(Zt*96+Ye)*4+3]=255}return t.texture({width:96,height:mt,data:J,min:"linear",mag:"linear"})})(),qe=`
		uniform vec4 koiA[${sa.length}], koiB[${sa.length}];
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
		uniform vec4 koiA[${sa.length}], koiB[${sa.length}];
		uniform sampler2D padShadow;
		const vec3 W_SUN = vec3(${G(hr[0])}, ${G(hr[1])}, ${G(hr[2])});
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
			vec2 lp = pw.xz - vec2(${G(fe[0])}, ${G(fe[2])});
			// (the picture is for the bed; nearer the surface the shadow sits nearer the pad)
			vec2 back = W_SUN.xz / W_SUN.y * (pw.y - ${G(Yl)});
			vec2 uv = (lp - back - vec2(${G(ft.x0)}, ${G(ft.z0)})) / vec2(${G(ft.x1-ft.x0)}, ${G(ft.z1-ft.z0)});
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
			float e = ${G(Ql)};
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
	`,lo=(()=>{let et=[],mt=[],J=[],de=[],ge=($o,j,dt,jt,te)=>(et.push($o+fe[0],j,dt+fe[2]),mt.push(...jt),J.push(te),et.length/3-1),St=($o,j,dt,jt,te,Kt,Mo)=>{let xo=et.length/3;for(let Po=0;Po<=jt;Po++)for(let co=0;co<=te;co++)ge($o[0]+j[0]*Po/jt+dt[0]*co/te,$o[1]+j[1]*Po/jt+dt[1]*co/te,$o[2]+j[2]*Po/jt+dt[2]*co/te,Kt,Mo);for(let Po=0;Po<jt;Po++)for(let co=0;co<te;co++){let ko=xo+Po*(te+1)+co;de.push(ko,ko+1,ko+te+2,ko,ko+te+2,ko+te+1)}},{x0:Zt,x1:Ye,z0:eo,z1:Se}=ft,Ue=Yl;return St([Zt,Ue,eo],[Ye-Zt,0,0],[0,0,Se-eo],8,22,[0,1,0],0),St([Zt,0,eo],[0,0,Se-eo],[0,Ue,0],22,2,[1,0,0],1),St([Ye,0,eo],[0,0,Se-eo],[0,Ue,0],22,2,[-1,0,0],1),St([Zt,0,eo],[Ye-Zt,0,0],[0,Ue,0],8,2,[0,0,1],1),St([Zt,0,Se],[Ye-Zt,0,0],[0,Ue,0],8,2,[0,0,-1],1),{pos:et,nrm:mt,kd:J,idx:de}})(),Oo=fr(t,"res/pond/gravel.jpg",{wrap:"repeat"}),_o=Object.assign({padShadow:S,gravel:()=>Oo.tex,reflTex:()=>p,reflSize:()=>u,reflOn:()=>h},$e),Fo=t({vert:c(`
		precision highp float;
		uniform mat4 proj, view;
		attribute vec3 position, normal;
		attribute float kd;
		varying vec3 v_pos, v_nrm, v_eye;
		varying float v_kd;
		${Ga}
		${qe}
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
		${Ga}
		${Br}
		${je}
		float klen(int i) {
			${sa.map((et,mt)=>`if (i == ${mt}) return ${G(et.len)};`).join(" ")}
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
				base = mix(base, vec3(0.10, 0.13, 0.07), smoothstep(-0.05, ${G(Yl)}, v_pos.y) * 0.75);
			}
			vec3 spec; float sv;
			vec3 light = studioLight(vec3(v_pos.x - W_SUN.x / W_SUN.y * v_pos.y, 0.02, v_pos.z - W_SUN.z / W_SUN.y * v_pos.y), N, V, 0.1, spec, sv);
			vec3 sunPart;
			vec3 lit = underSun(v_pos, N, sv, sunPart);
			// the koi's shadows, softer the higher they swim above the bed
			float sh = 0.0;
			for (int i = 0; i < ${sa.length}; i++) {
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
		}`,attributes:{position:lo.pos,normal:lo.nrm,kd:lo.kd},elements:new Uint16Array(lo.idx),uniforms:_o,cull:{enable:!1},depth:{enable:!0,mask:!1,func:"less"},blend:o}),qo=fr(t,"res/koi.webp"),a0=null,Q0=null;fetch("res/koi.bin").then(et=>{if(!et.ok)throw new Error("Could not load res/koi.bin");return et.arrayBuffer()}).then(et=>{let mt=new DataView(et),J=mt.getUint32(4,!0),de=mt.getUint32(8,!0),ge=mt.getFloat32(12,!0),St=16,Zt=new Uint16Array(et,St,J);St+=J*2;let Ye=new Int16Array(et,St,J*2);St+=J*4;let eo=new Uint16Array(et,St,J*2);St+=J*4;let Se=new Uint16Array(et,St,de);St+=de*2;let Ue=new Int8Array(et,St,J*3);St+=J*3;let $o=new Uint8Array(et,St,J*2),j=sa.length,dt=new Float32Array(J*3*j),jt=new Float32Array(J*3*j),te=new Float32Array(J*2*j),Kt=new Float32Array(J*2*j),Mo=new Float32Array(J*4*j);sa.forEach((co,ko)=>{for(let oo=0;oo<J;oo++){let De=ko*J+oo;dt[De*3]=Zt[oo]/65535*1.2,dt[De*3+1]=Ye[oo*2]/32767*ge,dt[De*3+2]=Ye[oo*2+1]/32767*ge,jt[De*3]=Ue[oo*3]/127,jt[De*3+1]=Ue[oo*3+1]/127,jt[De*3+2]=Ue[oo*3+2]/127,te[De*2]=eo[oo*2]/65535,te[De*2+1]=eo[oo*2+1]/65535,Kt[De*2]=$o[oo*2]/255,Kt[De*2+1]=$o[oo*2+1]/255,Mo[De*4]=co.len,Mo[De*4+1]=co.kind,Mo[De*4+2]=ko,Mo[De*4+3]=0}});let xo=[],Po=[];for(let co=0;co<j;co++)for(let ko=0;ko<de;ko+=3){let oo=Se[ko],De=Se[ko+1],p0=Se[ko+2];(Math.max($o[oo*2],$o[De*2],$o[p0*2])>140?Po:xo).push(oo+co*J,De+co*J,p0+co*J)}Q0={body:t.elements({data:new Uint32Array(xo),type:"uint32"}),fins:t.elements({data:new Uint32Array(Po),type:"uint32"})},a0=t({vert:c(`
				precision highp float;
				uniform mat4 proj, view;
				attribute vec3 loc, nrm;
				attribute vec2 uv, fin;
				attribute vec4 km;
				varying vec3 v_pos, v_nrm, v_eye;
				varying vec2 v_uv;
				varying float v_kind, v_fin, v_depth, v_seed, v_u;
				${Ga}
				${qe}
				void main() {
					float len = km.x;
					int fi = int(km.z + 0.5);
					vec4 A = koiA[0], B = koiB[0];
					for (int i = 1; i < ${sa.length}; i++) if (i == fi) { A = koiA[i]; B = koiB[i]; }
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
				${Ga}
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
				}`,attributes:{loc:dt,nrm:jt,uv:te,fin:Kt,km:Mo},elements:t.prop("els"),uniforms:Object.assign({koiTex:()=>qo.tex,padShadow:S,reflTex:()=>p,reflSize:()=>u,reflOn:()=>h},$e),cull:{enable:!1},colorMask:t.prop("color"),depth:{enable:!0,mask:t.prop("write"),func:t.prop("func")},blend:o}),Nt.ready=!0}).catch(et=>console.error(et));let br=()=>{a0&&(a0({els:Q0.body,color:[!1,!1,!1,!1],write:!0,func:"less"}),a0({els:Q0.body,color:[!0,!0,!0,!0],write:!1,func:"lequal"}),a0({els:Q0.fins,color:[!0,!0,!0,!0],write:!1,func:"less"}))},tt=(()=>{let et={cp:[],ci:[],idx:[]};for(let mt=0;mt<Zl;mt++){let J=et.cp.length/3,de=5,ge=7;for(let St=0;St<=de;St++)for(let Zt=0;Zt<ge;Zt++){let Ye=St/de*Math.PI,eo=Zt/ge*Math.PI*2,Se=1+.35*Math.sin(eo*3+mt*1.7)*Math.sin(Ye*2+mt);et.cp.push(Math.sin(Ye)*Math.cos(eo)*Se,Math.cos(Ye)*.6,Math.sin(Ye)*Math.sin(eo)*Se*(.8+.4*(mt*.37%1))),et.ci.push(mt)}for(let St=0;St<de;St++)for(let Zt=0;Zt<ge;Zt++){let Ye=J+St*ge+Zt,eo=J+St*ge+(Zt+1)%ge,Se=J+(St+1)*ge+Zt,Ue=J+(St+1)*ge+(Zt+1)%ge;et.idx.push(Ye,eo,Ue,Ye,Ue,Se)}}return et})(),Bt=Object.assign({},v);for(let et=0;et<Zl;et++)Bt["crumbs["+et+"]"]=()=>{let mt=Nt.sim.crumbs[et],J=Nt.sim.t,de=mt.alive&&!Nt.sim.feed.petal?Math.min(1,Math.max(0,(J-mt.born)/.25)):0;return[mt.x+fe[0],mt.z+fe[2],de,mt.seed]};let Yt=t({vert:c(`
		precision highp float;
		uniform mat4 proj, view;
		uniform vec4 crumbs[${Zl}];
		attribute vec3 cp;
		attribute float ci;
		varying vec3 v_pos, v_nrm, v_eye;
		${Ga}
		void main() {
			int k = int(ci + 0.5);
			vec4 c = crumbs[0];
			for (int i = 1; i < ${Zl}; i++) if (i == k) c = crumbs[i];
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
		}`,attributes:{cp:tt.cp,ci:tt.ci},elements:new Uint32Array(tt.idx),uniforms:Bt,cull:{enable:!1}}),qt=O8(),Ee=t({vert:c(Ug),frag:`
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
			vec3 p = v_pos - vec3(${G(fe[0])}, ${G(fe[1])}, ${G(fe[2])});
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
		}`,attributes:{position:qt.pos,normal:qt.nrm,kind:qt.kind,uv:qt.uv,anchor:qt.anchor},uniforms:v,elements:new Uint32Array(qt.idx),cull:{enable:!1},depth:{mask:!1},blend:o}),Xe=(()=>{let et={pos:[],idx:[]},mt=300,J=24,de=12;for(let ge=0;ge<=de;ge++){let St=-.25*Ne+ge/de*.75*Ne;for(let Zt=0;Zt<=J;Zt++){let Ye=Zt/J*2*Ne;et.pos.push(fe[0]+Rt/2+mt*Math.cos(St)*Math.cos(Ye),mt*Math.sin(St),fe[2]+we/2+mt*Math.cos(St)*Math.sin(Ye))}}for(let ge=0;ge<de;ge++)for(let St=0;St<J;St++){let Zt=ge*(J+1)+St,Ye=Zt+1,eo=Zt+J+2,Se=Zt+J+1;et.idx.push(Zt,Ye,eo,Zt,eo,Se)}return et})(),We=t({vert:c(`
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
		void main() {`),attributes:{position:Xe.pos},elements:new Uint32Array(Xe.idx),cull:{enable:!1}}),Ce=typeof navigator!="undefined"&&/Mobi|Android|iPhone|iPad/.test(navigator.userAgent),to=Ce?2600:6500,Ge=[];{let et=Ua(4242),mt=(de,ge,St)=>{let Zt=-de/hr[0],Ye=ge+hr[1]*Zt,eo=St+hr[2]*Zt;return xe.c.some(Se=>{let Ue=Ma(eo-Se);return Ue!==null&&Ye>xe.sill&&Ye<Ue})},J=0;for(;Ge.length<to&&J++<to*60;){let de=[.2+et()*(Rt-.4),.1+et()*(ao+1),.2+et()*(we-.4)];Ge.length<to*.8&&!mt(...de)||Ge.push([...de,et()])}}let go=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float time, night, pixelScale;
		attribute vec4 seed;
		varying float v_light, v_seed, v_spark;
		${Kh(t.limits.maxVertexTextureUnits>0?"baked":"analytic")}
		void main() {
			float s = seed.w * 6.2831;
			vec3 p = seed.xyz;
			// slow drifting and turning, a faint settling, never in step
			p += vec3(sin(time * 0.10 + s * 3.0) * 0.32 + sin(time * 0.043 + s * 7.0) * 0.2,
			          sin(time * 0.07 + s * 5.0) * 0.25 - 0.015 * time * (0.4 + seed.w),
			          cos(time * 0.085 + s * 2.0) * 0.32 + cos(time * 0.037 + s * 9.0) * 0.2);
			p.y = mod(p.y - 0.1, ${G(ao+1)}) + 0.1;
			p += vec3(${G(fe[0])}, ${G(fe[1])}, ${G(fe[2])});
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
		}`,attributes:{seed:Ge},count:to,primitive:"points",uniforms:{pixelScale:et=>et.viewportHeight*.0055},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});function Ve(et){let mt=!!(et&&et.reflected);mt||(m(),l()),We(),Pt(),mt||(Fo(),br(),Yt()),ne&&ne(),ve(),mt||(gt(),se&&se(),Ut()),ae(),Er.vis&&!(Er.floating&&Nt.sim.feed.eaten)&&Xt(),le(),mt||(Ee(),go())}return Ve.reflect=z,Ve};var qn=null,Er={vis:!1,model:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],ang:0,size:.09,flex:0,flutter:0,floating:!1};function U8(t){Object.assign(Er,t)}function B8(t,e){qn&&!qn.feed.lure&&!qn.feed.petal&&qn.lure(t,e)}function j8(t,e){qn&&!qn.feed.petal&&(qn.petal(t,e),Er.floating=!0)}function W8(){qn&&qn.unpetal(),Er.floating=!1}function V8(){let t=qn&&qn.feed;return{landed:!!(t&&(t.petal||t.eaten))&&Er.floating,eaten:!!(t&&t.eaten&&Er.floating)}}function X8(t,e){if(e[1]>=-1e-4)return null;let o=-t[1]/e[1],r=t[0]+e[0]*o-fe[0],n=t[2]+e[2]*o-fe[2];return r<ft.x0||r>ft.x1||n<ft.z0||n>ft.z1?null:[r+fe[0],n+fe[2]]}function Y8(t,e){qn&&qn.drop(t-fe[0],e-fe[2])}function K8(){return!!(qn&&qn.feed.on)}var Bg=[{from:[8,1.65,21.75],to:[8,1.7,21.2],at:[8,2.3,1],fov:52},{from:[8,1.65,21.1],to:[8,1.7,19.1],at:[8,2.4,1],fov:58},{from:[3.6,1.65,20.5],to:[4.6,1.75,18.7],at:[8.8,2.7,1.5],fov:58},{from:[8,1.45,11.2],to:[8,1.55,8.4],at:[8,2.5,.5],fov:46},{from:[8.9,3.9,11.4],to:[7.4,3.7,10.2],at:[8,-.2,7.2],fov:50,pond:!0},{from:[5.1,1.5,5.8],to:[5.7,1.7,4.6],at:[8,2.6,.8],fov:44},{from:[10.6,1.6,2.4],to:[9.7,1.7,3.6],at:[8,2.4,22],fov:60},{from:[2.6,1.5,19],to:[3.6,1.6,17.4],at:[8,6.8,8],fov:62}],Ec=11;function Z8(t){let e=Bg.length,o=Math.floor(t/Ec)%e,r=t%Ec/Ec,n=r*r*(3-2*r),a=Bg[o],s=a.from.map((c,f)=>c+(a.to[f]-c)*n),i=Math.max(0,1-Math.min(r*Ec,(1-r)*Ec)/.7);return{eye:Vh(s),target:Vh(a.at),fov:a.fov,roll:0,fade:i,pond:!!a.pond&&i<.05,shot:Math.floor(t/Ec)}}kn.exports.previewCam=Z8;kn.exports.setGuide=U8;kn.exports.petalLure=B8;kn.exports.petalLand=j8;kn.exports.petalReset=W8;kn.exports.petalState=V8;kn.exports.STUDIO={W:Rt,L:we,H:ao,POOL:ft,ROT:ro,NICHE:io,VENUS:b0,WIN:xe,TRUSS_Z:ii};kn.exports.poolHit=X8;kn.exports.feedAt=Y8;kn.exports.feeding=K8;kn.exports.sunGLSL=Kh;kn.exports.bakedSun=H8;kn.exports.O=fe;kn.exports.SIZE={W:Rt,L:we,H:ao,RIDGE:ur};kn.exports.BOX=[fe[0]-.8,0,fe[2]-.8,fe[0]+Rt+.8,ur+.5,fe[2]+we+.8];kn.exports.AIR_BOX=[fe[0],0,fe[2],fe[0]+Rt,ur,fe[2]+we]});var t1=Tt((TA,tx)=>{"use strict";var{A:Sn}=Gr(),{C:X0}=Tn(),{DOOR:Ac}=as(),mn=hs(),Tc=ps(),Zg=X0.hallEnd+.35,Qg={arch:[13.6,0,Sn.zc-Sn.arch.r-.3,14.4,Sn.arch.spring+Sn.arch.r+.3,Sn.zc+Sn.arch.r+.3],mouth:[13.3,0,X0.z0-.3,14.3,8.2,X0.z1+.3],stair:[-.5,0,mn.SURR.z0-.2,.5,mn.SURR.top+.3,mn.SURR.z1+.2],door:[Ac.x0-.4,0,-.5,Ac.x1+.4,Ac.top+.4,.5],windows:[15.6,.4,X0.z1-.2,36.9,6.4,X0.z1+.9],farDoor:[X0.x1-.2,0,X0.zc-Ac.r-.4,X0.x1+.9,Ac.top+.4,X0.zc+Ac.r+.4]},Ba={court:[Sn.x0-.4,0,Sn.z0-.3,Sn.x1+.3,Sn.domeTop+.5,Sn.z1+.3],stair:[mn.C.x-mn.R-2.6,0,mn.C.z-mn.R-1.5,.5,15.6,mn.C.z+mn.R+1.5],street:[-60,-1,-140,74,60,.6],garden:[10,-1,X0.z1,46,60,X0.z1+110],florence:[X0.x1,-1,X0.zc-30,X0.x1+80,60,X0.zc+30],studio:Tc.BOX},Q8=[[0,0,0,14,0,Zg],[13.6,0,X0.z0,X0.x1+.4,0,X0.z1],[Sn.x0-.4,0,Sn.z0,Sn.x1,0,Sn.z1],[mn.C.x-mn.R-2.6,0,mn.C.z-mn.R,.4,0,mn.C.z+mn.R],[Tc.BOX[0],0,Tc.BOX[2],Tc.BOX[3],0,Tc.BOX[5]]],J8={hall:{court:["arch"],stair:["stair"],street:["door"],garden:["mouth","windows"],florence:["mouth","farDoor"]},wing:{court:["mouth","arch"],stair:["mouth","stair"],street:["mouth","door"],garden:["windows"],florence:["farDoor"]},court:{stair:["arch","stair"],street:["arch","door"],garden:["arch","mouth","windows"],florence:["arch","mouth","farDoor"]},stair:{court:["stair","arch"],street:["stair","door"],garden:["stair","mouth","windows"],florence:["stair","mouth","farDoor"]}},of=new Float64Array(24),ia=[7,2,2],Jg=0,ja="out",Jh=!0;try{/[?&]nocull\b/.test(location.search)&&(Jh=!1)}catch(t){}var tf={court:!0,stair:!0,street:!0,garden:!0,florence:!0,studio:!1},ef={court:!0,stair:!0,street:!0,garden:!0,florence:!0,studio:!1},Yg=!0;function tk(t){let e=i=>[t[i],t[4+i],t[8+i],t[12+i]],o=e(0),r=e(1),n=e(2),a=e(3),s=(i,c,f,l)=>{for(let v=0;v<4;v++)of[i*4+v]=c[v]+f*l[v]};s(0,a,1,o),s(1,a,-1,o),s(2,a,1,r),s(3,a,-1,r),s(4,a,1,n),s(5,a,-1,n)}function vs(t,e){if(!Jh)return!0;let o=e?-t[4]:t[1],r=e?-t[1]:t[4];for(let n=0;n<6;n++){let a=of[n*4],s=of[n*4+1],i=of[n*4+2],c=of[n*4+3],f=a>0?t[3]:t[0],l=s>0?r:o,v=i>0?t[5]:t[2];if(a*f+s*l+i*v+c<0)return!1}return!0}var qd=(t,e)=>ia[0]>t[0]-e&&ia[0]<t[3]+e&&ia[2]>t[2]-e&&ia[2]<t[5]+e;function ek(t){if(qd(t,.6))return null;let e=1/0,o=-1/0;for(let r=0;r<4;r++){let n=(r&1?t[3]:t[0])-ia[0],a=(r&2?t[5]:t[2])-ia[2],s=Math.atan2(n,a)-Jg;s-=Math.round(s/(2*Math.PI))*2*Math.PI,e=Math.min(e,s),o=Math.max(o,s)}return o-e>Math.PI?null:[e,o]}function Kg(t,e,o){let r=-Math.PI,n=Math.PI,a=s=>{let i=ek(s);return i?(r=Math.max(r,i[0]-.03),n=Math.min(n,i[1]+.03),r<=n):!0};for(let s of t){let i=Qg[s];if(!qd(i,.6)&&(!vs(i,o)||!a(i)))return!1}return vs(e,o)&&a(e)}function ok(){let t=ia[0],e=ia[2],o=Tc.BOX;return t>o[0]&&t<o[3]&&e>o[2]&&e<o[5]?"studio":t<0&&e>mn.C.z-mn.R-1.5&&t>mn.C.x-mn.R-2.6?"stair":t>14.1&&e>Sn.z0-.3&&e<Sn.z1+.3&&t<Sn.x1+.3?"court":t>13.9&&e>X0.z0-.4&&e<X0.z1+.1&&t<X0.x1+.3?"wing":t>=0&&t<=14.1&&e>.3&&e<Zg?"hall":"out"}var nk={PORTAL:Qg,ROOM:Ba,update(t,e,o){let r=new Array(16);for(let n=0;n<4;n++)for(let a=0;a<4;a++){let s=0;for(let i=0;i<4;i++)s+=e[i*4+a]*t[n*4+i];r[n*4+a]=s}tk(r),ia[0]=o[0],ia[1]=o[1],ia[2]=o[2],Jg=Math.atan2(-t[2],-t[10]),ja=ok();for(let n in Ba){if(n==="studio"||ja==="studio"){tf[n]=ef[n]=n==="studio"&&ja==="studio";continue}if(!Jh||ja==="out"||ja===n||qd(Ba[n],.3))tf[n]=vs(Ba[n],!1)||ja===n,ef[n]=vs(Ba[n],!0)||ja===n;else{let a=J8[ja][n];tf[n]=a?Kg(a,Ba[n],!1):vs(Ba[n],!1),ef[n]=a?Kg(a,Ba[n],!0):vs(Ba[n],!0)}}Yg=!Jh||Q8.some(n=>vs(n,!1))},get zone(){return ja},room(t,e){return e?ef[t]:tf[t]},box(t,e,o){return o&&!(e?ef[o]:tf[o])?!1:vs(t,e)},get floor(){return Yg}};tx.exports=nk});var ox=Tt((LA,ex)=>{"use strict";var rk=kd(),ak=t1();function sk(t){let e=new DataView(t);if(String.fromCharCode(e.getUint8(0),e.getUint8(1),e.getUint8(2),e.getUint8(3))!=="STAT")throw new Error("Not a statue file");let r=e.getUint32(4,!0),n=e.getUint32(8,!0),a=[],s=[];for(let v=0;v<3;v++)a.push(e.getFloat32(12+v*4,!0)),s.push(e.getFloat32(24+v*4,!0));let i=36,c=new Uint16Array(t,i,r*3);i+=r*6;let f=new Uint16Array(t,i,n);i+=n*2;let l=new Int8Array(t,i,r*3);return{nV:r,nI:n,mn:a,sz:s,pos:c,idx:f,nrm:l}}ex.exports=(t,e)=>{let o=[],r=[],n=[],a=[],s=null,i=e.statues.length,c=[],f=(v,d)=>{let p=o.length/3,u=d.height*.75,h=d.base!==void 0?d.base:e.pedestalTop;c.push({offset:a.length,count:v.nI,box:[d.x-u,h-.1,d.z-u,d.x+u,h+d.height+.2,d.z+u]});let g=d.height,m=Math.cos(d.yaw),y=Math.sin(d.yaw),x=d.base!==void 0?d.base:e.pedestalTop;for(let _=0;_<v.nV;_++){let M=(v.mn[0]+v.pos[_*3]/65535*v.sz[0])*g,w=(v.mn[1]+v.pos[_*3+1]/65535*v.sz[1])*g,k=(v.mn[2]+v.pos[_*3+2]/65535*v.sz[2])*g;o.push(d.x+m*M+y*k,x+w,d.z-y*M+m*k);let E=v.nrm[_*3]/127,z=v.nrm[_*3+1]/127,P=v.nrm[_*3+2]/127;r.push(m*E+y*P,z,-y*E+m*P),n.push(d.mat||1,0,0)}for(let _=0;_<v.nI;_++)a.push(p+v.idx[_])},l=()=>{a.length!==0&&(s=rk(t,{position:o,normal:r,mat:n,elements:a,lights:e.lights,get viewer(){return e.viewer}},!1,!0))};return e.statues.forEach(v=>{fetch("res/"+v.file).then(d=>{if(!d.ok)throw new Error("Could not load "+v.file);return d.arrayBuffer()}).then(d=>f(sk(d),v)).catch(d=>console.error(d)).then(()=>{--i===0&&l()})}),function(v){if(!s)return;let d=!!(v&&v.reflected),p=c.filter(u=>ak.box(u.box,d));p.length&&s(p)}}});var dx=Tt((NA,Fd)=>{"use strict";var ik=Zs(),sn=1.29032,li=[9.2968,2,5.9],ck=[[.767398,.00185,-.10827],[.010515,.769952,.087681],[-.107774,.08829,-.762374]],e1=2147.64,nx=725,rx=1288,ax=1450,sx=2576,dr=-5.197,hi=3.865,ms=10.135,ui=-14.679,nf=-30.229,rf=7.232,ix=-45.713,Lc=17.1*sn,fi=16.6*sn,af=16.6*sn,cx=[6.9,17.1],o1=[2.95,16.6],lk=1.6,fk=0,hk=1,lx=2,Dd=3,fx=4,hx=5,uk=6;function dk(){let t=[],e=[],o=[],r=[],n=ik.createBuilder(t,e,o,r),a=(f,l,v,d,p,u,h=1,g=1)=>{let m=[];for(let y=0;y<=h;y++){let x=[];for(let _=0;_<=g;_++){let M=[f[0]+l[0]*y/h+v[0]*_/g,f[1]+l[1]*y/h+v[1]*_/g,f[2]+l[2]*y/h+v[2]*_/g],w=u(M);x.push(n.vert(M,d,[p,w[0],w[1]]))}m.push(x)}for(let y=0;y<h;y++)for(let x=0;x<g;x++)n.tri(m[y][x],m[y+1][x],m[y][x+1]),n.tri(m[y+1][x],m[y+1][x+1],m[y][x+1])},s=f=>l=>[(li[2]-l[2])/sn-f,l[1]/sn];a([-60,0,-.36],[130,0,0],[0,0,-140],[0,1,0],fk,f=>[f[0]/sn,f[2]/sn],13,14),a([hi,0,dr],[0,0,ui-dr],[0,Lc,0],[1,0,0],hk,s(8.6),6,6),a([-40,0,dr],[hi+40,0,0],[0,Lc,0],[0,0,1],lx,f=>[(hi-f[0])/sn,f[1]/sn],8,4),a([-40,0,-.36],[0,0,dr+.36],[0,Lc,0],[1,0,0],lx,f=>[-f[2]/sn,f[1]/sn]),a([ms,0,-80],[0,0,dr+80],[0,fi,0],[-1,0,0],fx,s(8.6),12,6),a([ms,0,dr],[60,0,0],[0,fi,0],[0,0,1],hx,f=>[(f[0]-ms)/sn,f[1]/sn],8,4),a([70,0,dr],[0,0,-.36-dr],[0,fi,0],[-1,0,0],hx,f=>[-f[2]/sn,f[1]/sn]);let i=f=>[(f[0]-li[0])/sn+4.18,f[1]/sn];a([-20,0,nf],[rf+20,0,0],[0,af,0],[0,0,1],Dd,i,8,6),a([rf,0,nf],[0,0,ix-nf],[0,af,0],[1,0,0],Dd,s(28),4,4),a([rf,0,ix],[ms-rf,0,0],[0,fi,0],[0,0,1],fx,f=>[(f[0]-li[0])/sn,f[1]/sn],2,4),a([-20,0,ui],[0,0,nf-ui],[0,af,0],[1,0,0],Dd,s(16),4,4);let c=(f,l,v,d)=>a(f,l,v,d,uk,()=>[0,0],4,4);return c([-300,-20,-300],[600,0,0],[0,320,0],[0,0,1]),c([-300,300,-300],[600,0,0],[0,0,300],[0,-1,0]),c([-300,-20,0],[0,0,-300],[0,320,0],[1,0,0]),c([300,-20,-300],[0,0,300],[0,320,0],[-1,0,0]),{position:t,normal:e,elements:o,attr:r}}function ci(t,e,o,r){let n=t.texture({data:[[r]],...o,min:"linear",mag:"linear"});return fetch(e).then(a=>{if(!a.ok)throw new Error("Could not load "+e);return a.blob()}).then(a=>createImageBitmap(a)).then(a=>{n({data:a,...o,min:"mipmap",mipmap:"nice",mag:"linear"})}).catch(a=>console.error(a)),n}var ca=t=>"vec3("+t.map(e=>e.toFixed(4)).join(", ")+")",pk=[[[-.35,0,-.35],[14.35,9.2,50]],[[-40,0,ui],[hi,Lc,dr]],[[ms,0,-80],[70,fi,dr]],[[-20,0,-80],[rf,af,nf]],[[-40,0,-80],[-20,af,ui]]],vk=pk.map(t=>`if (hitBox(ro, rd, ${ca(t[0])}, ${ca(t[1])}, 1e4) ) return 0.0;`).join(`
		`),ux="mat3("+[0,1,2].map(t=>[0,1,2].map(e=>ck[e][t].toFixed(6)).join(", ")).join(", ")+")",mk=`
precision highp float;

uniform sampler2D photo, photoNight, photoMask, pinkTex, yellowTex, creamTex, cobbleTex;
uniform float time;
uniform float night;   // 0 by day, 1 at night

varying vec3 v_pos;
varying vec3 v_normal;
varying vec3 v_attr;
varying vec3 v_eye;

const vec3 SUN = ${ca([-.25,.4,.88].map(t=>t/Math.hypot(-.25,.4,.88)))};

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
	${vk}
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
	vec3 ro = ${ca(li)};
	vec3 rd = p - ro;
	if (hitBox(ro, rd, ${ca([-40,0,ui])}, ${ca([hi-.02,Lc,dr])}, 0.995)) return false;
	if (hitBox(ro, rd, ${ca([ms+.02,0,-80])}, ${ca([70,fi,dr])}, 0.995)) return false;
	return true;
}

// is this point sky in the photo? (only meaningful inside the photo)
bool photoSky(vec3 p) {
	vec3 pc = ${ux} * (p - ${ca(li)});
	if (pc.z < 0.2) return false;
	vec2 uv = vec2(
		(${nx.toFixed(2)} + ${e1.toFixed(3)} * pc.x / pc.z) / ${ax.toFixed(1)},
		(${rx.toFixed(2)} - ${e1.toFixed(3)} * pc.y / pc.z) / ${sx.toFixed(1)}
	);
	if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) return false;
	return texture2D(photoMask, uv).r < 0.5;
}

// photo colour and how much to trust it (0..1)
vec4 photoAt(vec3 p, vec3 n, vec3 eye) {
	vec3 pc = ${ux} * (p - ${ca(li)});
	if (pc.z < 0.2) return vec4(0.0);
	vec2 uv = vec2(
		(${nx.toFixed(2)} + ${e1.toFixed(3)} * pc.x / pc.z) / ${ax.toFixed(1)},
		(${rx.toFixed(2)} - ${e1.toFixed(3)} * pc.y / pc.z) / ${sx.toFixed(1)}
	);
	vec2 e = min(uv, 1.0 - uv);
	float w = smoothstep(0.002, 0.02, min(e.x, e.y));
	if (w <= 0.0) return vec4(0.0);
	w *= smoothstep(0.35, 0.75, texture2D(photoMask, uv).r);
	if (w <= 0.0) return vec4(0.0);
	if (!photoSees(p)) return vec4(0.0);
	// if we see this surface much more square-on than the photo did,
	// the photo would look smeared: hand over to the painted facade
	float camCos = abs(dot(normalize(p - ${ca(li)}), n));
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
		base = texture2D(cobbleTex, fuv / ${lk.toFixed(2)}).rgb;
	} else if (kind < 2.5) {
		base = texture2D(pinkTex, vec2(fuv.x / ${cx[0].toFixed(2)}, 1.0 - fuv.y / ${cx[1].toFixed(2)})).rgb;
	} else if (kind < 3.5) {
		base = texture2D(yellowTex, vec2(fuv.x / ${o1[0].toFixed(2)}, 1.0 - fuv.y / ${o1[1].toFixed(2)})).rgb;
	} else {
		base = texture2D(creamTex, vec2(fuv.x / ${o1[0].toFixed(2)}, 1.0 - fuv.y / ${o1[1].toFixed(2)})).rgb;
	}

	// ---------- the photograph, where it can be trusted ----------
	bool projectable = kind < 0.5 || (kind > 0.5 && kind < 1.5) || (kind > 2.5 && kind < 4.5);
	if (kind < 0.5) {
		// the photo only shows ground inside the alley, or beyond its corners
		bool inAlley = v_pos.x > ${(hi-.05).toFixed(3)} && v_pos.x < ${(ms+.05).toFixed(3)};
		projectable = inAlley || v_pos.z < ${ui.toFixed(3)};
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
}`,gk=`
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
}`,xk=on();Fd.exports=t=>{let e=dk(),o={wrapS:"clamp",wrapT:"clamp",flipY:!1},r={wrapS:"mirror",wrapT:"clamp",flipY:!1},n={wrapS:"repeat",wrapT:"repeat",flipY:!1},a=ci(t,"res/street/photo.jpg",o,[190,160,120]),s=ci(t,"res/street/photo_night.jpg",o,[12,14,22]),i=ci(t,"res/street/photo_mask.png",o,[255,255,255]),c=ci(t,"res/street/facade_pink.jpg",r,[200,150,135]),f=ci(t,"res/street/facade_yellow.jpg",r,[225,180,95]),l=ci(t,"res/street/facade_cream.jpg",r,[215,200,175]),v=ci(t,"res/street/cobbles.jpg",n,[95,95,95]),d=Date.now(),p=t({frag:mk,vert:gk,attributes:{position:e.position,normal:e.normal,attr:e.attr},elements:new Uint32Array(e.elements),uniforms:{photo:a,photoMask:i,pinkTex:c,yellowTex:f,creamTex:l,cobbleTex:v,photoNight:s,night:()=>xk.night,time:()=>(Date.now()-d)/1e3}});return function(){p()}};Fd.exports.layout={MOUTH_Z:dr,PINK_X:hi,RIGHT_X:ms,PINK_H:Lc,CREAM_H:fi,S:sn}});var mx=Tt((OA,vx)=>{"use strict";var yk=on().GLSL,{glassPanes:bk}=as(),px=Tn();function wk(){let t=[],e=[],o=(r,n)=>{for(let a of r)t.push(a),e.push(n)};return o(bk(),[0,0,1]),o(px.windowGlass(),[0,0,1]),o(px.farDoorGlass(),[1,0,0]),{position:t,normal:e}}vx.exports=t=>{let e=wk(),o=t({frag:`
		precision highp float;
		${yk}
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
		}`,attributes:{position:e.position,normal:e.normal},count:e.position.length,cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}});return function(){o()}}});var Rx=Tt((RA,jd)=>{"use strict";var _x=on().GLSL,_k=Zs(),Gd=qr(),{wallWithHoles:Mk,C:ys}=Tn(),Re=.28,st={westBack:14.4,westCol:15-Re,eastCol:37.4+Re,eastBack:41.8,south:ys.z1+.7,northCol:ys.z1+.7+16,northBack:ys.z1+.7+19,cx:(15+37.4)/2,cz:(ys.z1+.7+ys.z1+.7+16-Re)/2},e0={x0:st.westCol+Re,x1:st.eastCol-Re,z0:st.south,z1:st.northCol-Re},Dn=3.3,lf=.92,bs=5.6,gx=6,jr=11.9,xs=9.6,Io={x0:st.cx-2.9,x1:st.cx+2.9,top:14.4},l1=7,Mx=4,Ud=(st.eastCol-st.westCol)/l1,kk=(st.northCol-st.south)/Mx,kx=3,hf=.26,mi=1.4,pi=1.1,r1=3,ka=(()=>{let t=[.3,.82,-.49],e=Math.hypot(...t);return t.map(o=>o/e)})(),be={GROUND:0,BRICK:1,STONE:2,MARBLE:3,HEDGE:4,POT:5,ROOF:6,SHUTTER:7,PANE:8,PLASTER:9,BARK:10,IRON:11,SKY:12,LEAD:13,FARBRICK:14,DARK:15,SOIL:16},Sa=[],Sx=(t,e,o)=>[st.cx+t,e,st.cz+o],a1=Sx(-5.9,0,3.4),ws=.85,gs={c:[a1[0],4.6*ws+.5,a1[2]],r:[5*ws,3.6*ws,4.5*ws]},zx=[{d:[0,4.4,0],r:[3.9,2.6,3.6],n:230},{d:[-2.7,4,-1.2],r:[2.6,2.1,2.4],n:105},{d:[2.7,4.5,-1.6],r:[2.5,2.2,2.3],n:105},{d:[.8,6.9,.8],r:[2.6,2,2.5],n:105},{d:[-1.6,6.1,2],r:[2.2,1.9,2],n:80},{d:[2.3,3.4,1.8],r:[2,1.5,1.9],n:60}].map(t=>({c:[a1[0]+t.d[0]*ws,t.d[1]*ws+.5,a1[2]+t.d[2]*ws],r:t.r.map(e=>e*ws),n:t.n}));for(let t of zx)Sa.push({...t,cell:0,leaf:[.5,.7,.46],bloom:[1,1,1],size:[.95,1.35],magnolia:1,shadow:1});var Sk=[3.6,6.3,9];for(let t of Sk){let e=8.6+t%1.7*.6;Sa.push({c:Sx(t,e/2+.5,5.2),r:[.9,e/2,.9],cell:1,leaf:[.5,.64,.5],bloom:[1,1,1],n:180,size:[.72,.98],spindle:1,shadow:1})}var zk=[{d:[-8.4,-4],bloom:[1,.62,.78]},{d:[-3.6,-4.6],bloom:[1,.98,.94]},{d:[3.8,-4.3],bloom:[1,.98,.94]},{d:[8.5,-4],bloom:[1,.58,.72]}].map(t=>({x:st.cx+t.d[0],z:st.cz+t.d[1],bloom:t.bloom}));for(let t of zk)Sa.push({c:[t.x,.95,t.z],r:[1.25,.95,1.1],cell:3,leaf:[.7,.86,.58],bloom:t.bloom,n:80,size:[.55,.8],shadow:1});var Bd=[45,135,225,315].map(t=>{let e=t*Math.PI/180;return[st.cx+Math.cos(e)*2.3,st.cz+Math.sin(e)*2.3]});for(let[t,e]of Bd)Sa.push({c:[t,1.85,e],r:[.62,.55,.62],cell:3,leaf:[.78,.95,.55],bloom:[1.25,1,.25],n:36,size:[.32,.42],shadow:1});var Ex=[];{let t=(o,r,n,a,s,i)=>{let c=Math.hypot(n-o,a-r),f=Math.floor(c/.9);for(let l=0;l<=f;l++){let v=l/f,d=o+(n-o)*v,p=r+(a-r)*v;s!==void 0&&Math.abs((n!==o?d:p)-s)<i||Ex.push([d,p])}};t(e0.x0+.45,e0.z0+1.2,e0.x0+.45,e0.z1-.45,st.cz,1),t(e0.x1-.45,e0.z0+1.2,e0.x1-.45,e0.z1-.45,st.cz,1),t(e0.x0+.45,e0.z1-.45,e0.x1-.45,e0.z1-.45,st.cx,1.9)}var Ek=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],s1=t=>{let e=Math.hypot(t[0],t[1],t[2])||1;return[t[0]/e,t[1]/e,t[2]/e]};function Oc(t,e,o,r,n,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),f=t.vert(r,a,s),l=t.vert(n,a,s);t.tri(i,c,f),t.tri(i,f,l)}function cn(t,e,o,r,n,a,s,i){t.box(Math.min(e,n),Math.min(o,a),Math.min(r,s),Math.max(e,n),Math.max(o,a),Math.max(r,s),[i,0,0])}function Ak(t,e,o){return{vert:(r,n,a)=>t.vert(e(r),o(n),a),tri:t.tri}}var Tk={north:[t=>[t[0],t[1],st.northCol-t[2]],t=>[t[0],t[1],-t[2]]],west:[t=>[st.westCol+t[2],t[1],t[0]],t=>[t[2],t[1],t[0]]],east:[t=>[st.eastCol-t[2],t[1],t[0]],t=>[-t[2],t[1],t[0]]]};function Ax(t,e,o,r,n){let a=[];for(let s=0;s<o;s++){let i=t+s*e+(s===0?r:.02),c=t+(s+1)*e-(s===o-1?n:.02);a.push([i,c,t+(s+.5)*e])}return a}var Lk=Ax(st.westCol,Ud,l1,Re+hf,Re+hf),xx=Ax(st.south,kk,Mx,.32,Re+hf),Nc=[st.cx-32.35,st.northCol-77],Nk=Array.from({length:l1-1},(t,e)=>st.westCol+(e+1)*Ud),Tx=t=>(t[1]-t[0])/2-.2,ff=t=>(t[0]+t[1])/2;function Ok(t,e){let o=ff(t),r=Tx(t);return{u0:t[0],u1:t[1],bottom:e?0:lf,head:n=>{let a=Math.abs(n-o);return a<r?Dn+Math.sqrt(r*r-a*a):Dn},step:.05}}function Rk(t,e,o){return{u0:t-o,u1:t+o,bot:r=>e-Math.sqrt(Math.max(0,o*o-(r-t)*(r-t))),head:r=>e+Math.sqrt(Math.max(0,o*o-(r-t)*(r-t))),step:.04,mat:[be.STONE,0,0]}}function Ck(t,e,o,r){return{u0:t-e/2,u1:t+e/2,bottom:o,head:()=>r,step:.5,mat:[be.STONE,0,0]}}function yx(t,e,o){let[r,n]=Tk[e],a=Ak(t,r,n),s=[];o.arches.forEach((l,v)=>s.push(Ok(l,v===o.open)));let i=[];for(let l of o.bays||o.arches){let v=ff(l);o.oculi&&s.push(Rk(v,6.85,.3)),i.push({c:v,y0:o.win[0],y1:o.win[1],w:1.05})}for(let l of o.extraWindows||[])i.push(l);for(let l of i)s.push(Ck(l.c,l.w,l.y0,l.y1));for(let l of o.extraHoles||[])s.push(l);Mk(a,{u0:o.u0,u1:o.u1,w0:-Re,w1:Re,top:o.top,holes:s,mat:[be.BRICK,0,0],revealMat:[be.BRICK,0,0],noEnds:o.noEnds,cuts:o.cuts,topStep:.25});let c=(l,v,d,p,u,h,g)=>{let m=r([l,v,d]),y=r([p,u,h]);cn(t,m[0],m[1],m[2],y[0],y[1],y[2],g)},f=(l,v,d,p,u,h)=>Oc(a,l,v,d,p,u,[h,0,0]);for(let l of o.arches){let v=ff(l),d=Tx(l),p=28;for(let u of[Re,-Re]){let h=u>0?1:-1,g=u+h*.025;for(let m=0;m<p;m++){let y=Math.PI*m/p,x=Math.PI*(m+1)/p,_=(R,B)=>[v+Math.cos(R)*B,Dn+Math.sin(R)*B],M=_(y,d),w=_(x,d),k=_(y,d+.26),E=_(x,d+.26);f([M[0],M[1],g],[w[0],w[1],g],[E[0],E[1],g],[k[0],k[1],g],[0,0,h],be.STONE);let z=Math.cos((y+x)/2),P=Math.sin((y+x)/2);f([k[0],k[1],u],[E[0],E[1],u],[E[0],E[1],g],[k[0],k[1],g],[z,P,0],be.STONE)}}}if(o.arches.forEach((l,v)=>{v!==o.open&&c(l[0]-.02,lf,-Re-.05,l[1]+.02,lf+.09,Re+.05,be.STONE)}),c(o.u0,gx,-Re,o.u1,gx+.18,Re+.09,be.STONE),c(o.u0,o.win[0]-.12,Re-.01,o.u1,o.win[0],Re+.06,be.STONE),o.cornice)for(let[l,v,d]of o.cornice)c(l,d-.22,Re-.01,v,d,Re+.16,be.STONE),c(l,d,Re-.01,v,d+.16,Re+.42,be.STONE);for(let{c:l,y0:v,y1:d,w:p,door:u}of i){let h=p/2;if(f([l-h-.01,v,.06],[l+h+.01,v,.06],[l+h+.01,d,.06],[l-h-.01,d,.06],[0,0,1],u?be.DARK:be.PANE),u){c(l-h-.16,0,Re-.01,l-h,d+.16,Re+.07,be.STONE),c(l+h,0,Re-.01,l+h+.16,d+.16,Re+.07,be.STONE),c(l-h-.16,d,Re-.01,l+h+.16,d+.2,Re+.09,be.STONE),c(l-h,0,.07,l+h,d-.02,.12,be.SHUTTER),c(l-.012,0,.12,l+.012,d-.02,.14,be.DARK);continue}for(let g of[-1,1]){let m=l+g*h;c(m+g*.02,v+.02,Re+.02,m+g*(h+.025),d-.02,Re+.06,be.SHUTTER)}c(l-h-.09,d,Re-.01,l+h+.09,d+.16,Re+.05,be.STONE),c(l-h-.09,v-.1,Re-.01,l+h+.09,v,Re+.09,be.STONE),c(l-.015,v,.06,l+.015,d,.09,be.SHUTTER),c(l-h,(v+d)/2-.015,.06,l+h,(v+d)/2+.015,.09,be.SHUTTER)}if(o.oculi)for(let l of o.bays||o.arches){let v=ff(l);f([v-.31,6.54,0],[v+.31,6.54,0],[v+.31,7.16,0],[v-.31,7.16,0],[0,0,1],be.DARK)}for(let l of o.cols){let v=lf+.09,d=r([l,0,0]);cn(t,d[0]-.24,v,d[2]-.24,d[0]+.24,v+.12,d[2]+.24,be.MARBLE),t.lathe([[.23,v+.12,1],[.24,v+.17],[.2,v+.24],[.215,v+.28],[.17,v+.34,1],[.165,v+.6],[.155,Dn-.5],[.15,Dn-.38,1],[.175,Dn-.34,1],[.17,Dn-.3],[.2,Dn-.22],[.27,Dn-.15],[.29,Dn-.12,1]],d[0],d[2],18,{mat:()=>[be.MARBLE,0,0]}),cn(t,d[0]-.29,Dn-.12,d[2]-.29,d[0]+.29,Dn+.01,d[2]+.29,be.STONE)}o.walk&&o.walk(t)}function $k(t){let e=[-1,0,1].map(n=>{let a=st.cx+n*1.7;return{u0:a-.6,u1:a+.6,bottom:11,head:s=>12.9+Math.sqrt(Math.max(0,.36-(s-a)*(s-a))),step:.04,mat:[be.STONE,0,0]}});yx(t,"north",{u0:st.westCol-Re,u1:st.eastCol+Re,top:n=>n>Io.x0+1e-6&&n<Io.x1-1e-6?Io.top:jr,cuts:[Io.x0,Io.x0+1e-5,Io.x1-1e-5,Io.x1],arches:Lk,open:kx,cols:Nk,oculi:!0,win:[8,9.9],extraHoles:e,cornice:[[st.westCol-Re-3.3,Io.x0,jr],[Io.x1,st.eastCol+Re+3.3,jr],[Io.x0-.2,Io.x1+.2,Io.top]],walk:n=>{cn(n,e0.x0,bs,st.northCol+Re,e0.x1,bs+.2,st.northBack,be.PLASTER),cn(n,e0.x0,0,st.northBack,e0.x1,bs,st.northBack+.3,be.PLASTER);for(let a of[st.cx-7.2,st.cx,st.cx+7.2])Oc(n,[a-.8,0,st.northBack-.01],[a+.8,0,st.northBack-.01],[a+.8,2.9,st.northBack-.01],[a-.8,2.9,st.northBack-.01],[0,0,-1],[be.DARK,0,0]),cn(n,a-.98,0,st.northBack-.06,a+.98,3.12,st.northBack,be.STONE),Oc(n,[a-.8,0,st.northBack-.07],[a+.8,0,st.northBack-.07],[a+.8,2.9,st.northBack-.07],[a-.8,2.9,st.northBack-.07],[0,0,-1],[be.DARK,0,0])}}),Oc(t,[Io.x0,11,st.northCol+.2],[Io.x1,11,st.northCol+.2],[Io.x1,13.6,st.northCol+.2],[Io.x0,13.6,st.northCol+.2],[0,0,-1],[be.DARK,0,0]),cn(t,Io.x0+.3,10.88,st.northCol-Re-.06,Io.x1-.3,11,st.northCol-Re+.1,be.STONE),cn(t,st.westBack,bs+.2,st.northBack,st.eastBack,jr,st.northBack+3.4,be.BRICK),cn(t,st.westBack,xs,st.northCol-Re,st.westCol-Re,jr,st.northCol+Re,be.BRICK),cn(t,st.eastCol+Re,xs,st.northCol-Re,st.eastBack,jr,st.northCol+Re,be.BRICK),cn(t,st.westBack,bs+.2,st.northCol+Re+.12,st.eastBack,jr,st.northBack,be.BRICK),sf(t,[st.westBack-.5,jr+.16,st.northCol-Re-.42],[Io.x0-st.westBack+.5,0,0],[0,2.6,4.4],be.ROOF),sf(t,[Io.x1,jr+.16,st.northCol-Re-.42],[st.eastBack+.5-Io.x1,0,0],[0,2.6,4.4],be.ROOF),sf(t,[Io.x0-.3,Io.top+.16,st.northCol-Re-.42],[Io.x1-Io.x0+.6,0,0],[0,1.4,3],be.ROOF),bx(t,[Io.x0-.3,Io.top+.16,st.northCol-Re-.42],[Io.x0-.3,Io.top+1.56,st.northCol-Re+2.58],[Io.x0-.3,Io.top+.16,st.northCol-Re+2.58],[-1,0,0],be.BRICK),bx(t,[Io.x1+.3,Io.top+.16,st.northCol-Re-.42],[Io.x1+.3,Io.top+1.56,st.northCol-Re+2.58],[Io.x1+.3,Io.top+.16,st.northCol-Re+2.58],[1,0,0],be.BRICK),cn(t,Io.x0,jr,st.northCol+Re,Io.x1,Io.top,st.northCol+2.6,be.BRICK);for(let[n,a]of[[st.cx-9.8,st.northBack+.6],[st.cx+9.4,st.northBack+.4],[st.cx-4.6,st.northBack+1]])cn(t,n-.4,12.5,a-.4,n+.4,15.4,a+.4,be.BRICK),cn(t,n-.52,15.4,a-.52,n+.52,15.62,a+.52,be.STONE);let o=(n,a,s)=>{let i=n==="west"?-1:1,c=[];xx.forEach((v,d)=>{let p=ff(v);d===1?c.push({c:p,y0:0,y1:2.9,w:1.4,door:!0}):c.push({c:p,y0:1,y1:2.75,w:1.05}),c.push({c:p,y0:3.85,y1:5.45,w:1.05})}),yx(t,n,{u0:st.south,u1:st.northCol-Re,top:()=>xs,arches:[],bays:xx,cols:[],win:[7.45,8.85],extraWindows:c,noEnds:!0,cornice:[[st.south,st.northCol-Re,xs]]}),cn(t,a,0,st.south,s+i*(Re+.12),xs,st.northBack+.3,be.BRICK);let f=s-i*Re;cn(t,f,0,st.south,f-i*.06,.55,st.northCol-Re,be.STONE);let l=s-i*(Re+.42);sf(t,[l,xs+.16,st.south],[0,0,st.northCol-Re-st.south],[a-l+i*.4,1.9,0],be.ROOF)};o("west",st.westBack,st.westCol),o("east",st.eastBack,st.eastCol);let r=ys.x1+.7;cn(t,13.65,7.4,st.south-.02,r,7.62,st.south+.14,be.STONE),cn(t,13.65,10.4,st.south-.02,r,10.6,st.south+.38,be.STONE),sf(t,[13.65,10.6,st.south+.38],[r-13.65,0,0],[0,2.2,-5],be.ROOF)}function bx(t,e,o,r,n,a){let s=[a,0,0];t.tri(t.vert(e,n,s),t.vert(o,n,s),t.vert(r,n,s))}function sf(t,e,o,r,n){let a=s1([o[1]*r[2]-o[2]*r[1],o[2]*r[0]-o[0]*r[2],o[0]*r[1]-o[1]*r[0]]),s=a[1]<0?a.map(f=>-f):a,i=(f,l)=>[e[0]+o[0]*f+r[0]*l,e[1]+o[1]*f+r[1]*l,e[2]+o[2]*f+r[2]*l];Oc(t,i(0,0),i(1,0),i(1,1),i(0,1),s,[n,0,0]);let c=.08;Oc(t,i(0,0),i(1,0),[i(1,0)[0],i(1,0)[1]-c,i(1,0)[2]],[i(0,0)[0],i(0,0)[1]-c,i(0,0)[2]],s1([-r[0],0,-r[2]]),[n,0,0])}function Pk(t){let e=st.westBack,o=st.eastBack,r=st.south,n=st.northBack,a=36,s=22,i=[];for(let c=0;c<=a;c++){i.push([]);for(let f=0;f<=s;f++){let l=[e+(o-e)*c/a,0,r+(n-r)*f/s];i[c].push(t.vert(l,[0,1,0],[be.GROUND,0,0]))}}for(let c=0;c<a;c++)for(let f=0;f<s;f++)t.tri(i[c][f],i[c+1][f],i[c+1][f+1]),t.tri(i[c][f],i[c+1][f+1],i[c][f+1])}var cf=.46,vi=.58,di=[[-.5,0],[-.52,.45],[-.46,.78],[-.3,.95],[0,1],[.3,.95],[.46,.78],[.52,.45],[.5,0]];function Ik(t,e,o){let r=pi+o,n=(t>0?e0.x1-st.cx:st.cx-e0.x0)-mi-o,a=pi+o,s=(e>0?e0.z1-st.cz:st.cz-e0.z0)-mi-o,i=r1+o,c=Math.sqrt(i*i-r*r),f=Math.sqrt(i*i-a*a),l=[[r,c],[r,s],[n,s],[n,a],[f,a]],v=Math.atan2(a,f),d=Math.atan2(c,r);for(let p=1;p<10;p++){let u=v+(d-v)*p/10;l.push([Math.cos(u)*i,Math.sin(u)*i])}return l.map(([p,u])=>[st.cx+t*p,st.cz+e*u])}function qk(t,e,o){let r=o[0]-e[0],n=o[1]-e[1],a=Math.hypot(r,n),s=r/a,i=n/a,c=-i,f=s,l=cf*.5,v=-l,d=a+l,p=[],u=Math.max(1,Math.ceil((d-v)/1));for(let h=0;h<=u;h++){let g=v+(d-v)*h/u,m=[];for(let y=0;y<di.length;y++){let[x,_]=di[y],M=Math.min(di.length-2,y),w=di[Math.max(0,y-1)],k=di[Math.min(di.length-1,y+1)],E=(k[0]-w[0])*cf,P=(k[1]-w[1])*vi,R=-E,B=Math.hypot(P,R)||1,$=[e[0]+s*g+c*x*cf,_*vi,e[1]+i*g+f*x*cf],q=[c*(-P/B),-R/B,f*(-P/B)];m.push(t.vert($,q[1]<-.2?[c*Math.sign(x),.3,f*Math.sign(x)]:q,[be.HEDGE,0,0]))}p.push(m)}for(let h=0;h<u;h++)for(let g=0;g<di.length-1;g++)t.tri(p[h][g],p[h+1][g],p[h+1][g+1]),t.tri(p[h][g],p[h+1][g+1],p[h][g+1]);for(let[h,g]of[[0,-1],[u,1]]){let m=p[h],y=t.vert([e[0]+s*(h?d:v),vi*.5,e[1]+i*(h?d:v)],[s*g,0,i*g],[be.HEDGE,0,0]);for(let x=0;x<m.length-1;x++)t.tri(y,m[x],m[x+1])}}function Dk(t){for(let e of[-1,1])for(let o of[-1,1]){let r=Ik(e,o,.3);for(let n=0;n<r.length;n++)qk(t,r[n],r[(n+1)%r.length])}}function Fk(t){let e=st.cx,o=st.cz,r=()=>[be.STONE,0,0];t.lathe([[1.45,0,1],[1.45,.14,1],[1.12,.14,1],[1.12,.3,1],[0,.3]],e,o,8,{mat:r}),t.lathe([[.76,.3,1],[.8,.38,1],[.74,.44],[.76,.7],[.82,.9],[.8,1.02,1],[.88,1.06,1],[.88,1.18,1],[.6,1.18,1],[.6,.98]],e,o,24,{mat:r}),t.lathe([[.6,.98,1],[0,.98]],e,o,16,{mat:()=>[be.DARK,0,0]});let n={mat:()=>[be.IRON,0,0]};t.tube([[e-.72,1.1,o],[e-.72,1.9,o],[e-.7,2.3,o]],()=>.035,8,6,n),t.tube([[e+.72,1.1,o],[e+.72,1.9,o],[e+.7,2.3,o]],()=>.035,8,6,n);let a=[];for(let s=0;s<=10;s++){let i=Math.PI*s/10;a.push([e-Math.cos(i)*.7,2.3+Math.sin(i)*.45,o])}t.tube(a,()=>.03,20,6,n),t.tube([[e-.45,2.25,o],[e,2.38,o],[e+.45,2.25,o]],()=>.02,8,5,n),t.ellipsoid([e,2.32,o],[.03,.13,.13],6,10,n);for(let s of[-1,1]){let i=[];for(let c=0;c<=12;c++){let f=c/12*Math.PI*1.6,l=.16*(1-c/16);i.push([e+s*(.72-.18+Math.cos(f)*l*s*-1+0),1.95+Math.sin(f)*l,o])}t.tube(i,()=>.016,16,5,n)}}function Gk(t){for(let[e,o]of Bd)t.lathe([[.26,0,1],[.3,.06],[.36,.42],[.38,.5,1],[.44,.52,1],[.44,.64,1],[.38,.66,1],[.37,.6]],e,o,20,{mat:()=>[be.POT,0,0]}),t.lathe([[.37,.6,1],[0,.6]],e,o,12,{mat:()=>[be.SOIL,0,0]}),t.tube([[e,.6,o],[e+.02,1,o-.01],[e-.01,1.45,o+.02]],r=>.045-r*.02,6,6,{mat:()=>[be.BARK,0,0]})}function Hk(t){let[e,,o]=gs.c,r=Nx(7),n=[[-1.8,.4,3.6],[1.6,-.9,3.9],[.4,1.9,3.4],[-.6,-1.7,4.2],[2.1,1.2,3.2]];for(let[a,s,i]of n){let c=[[e+a*.05,0,o+s*.05],[e+a*.25,i*.35,o+s*.25],[e+a*.6,i*.7,o+s*.6],[e+a,i,o+s],[e+a*1.35+(r()-.5),i+1.4,o+s*1.35+(r()-.5)]];t.tube(c,f=>.2*(1-f*.75),14,9,{mat:()=>[be.BARK,0,0]});for(let f=0;f<2;f++){let l=.55+f*.2,v=[e+a*l,i*l,o+s*l],d=r()*Math.PI*2;t.tube([v,[v[0]+Math.cos(d)*1.3,v[1]+.9,v[2]+Math.sin(d)*1.3],[v[0]+Math.cos(d)*2.3,v[1]+1.4+r(),v[2]+Math.sin(d)*2.3]],p=>.08*(1-p*.7),8,6,{mat:()=>[be.BARK,0,0]})}}for(let a of Sa.filter(s=>s.spindle))t.tube([[a.c[0],0,a.c[2]],[a.c[0],1.4,a.c[2]]],()=>.12,3,7,{mat:()=>[be.BARK,0,0]})}function Uk(t){let e=()=>[be.FARBRICK,0,0],o=()=>[be.LEAD,0,0],r=(a,s,i,c,f,l)=>{t.lathe([[i+.3,20,1],[i+.3,c-1.2,1],[i+.8,c-.9,1],[i+.8,c,1],[i,c,1]],a,s,28,{mat:e});let v=[];for(let p=0;p<=12;p++){let u=p/12*Math.PI/2,h=Math.cos(u)*i,g=Math.sin(u)*f;l&&(h*=1-.18*Math.sin(u*2)),v.push([Math.max(h,i*.12),c+g])}t.lathe(v,a,s,28,{mat:o});let d=c+f;t.lathe([[i*.13,d-.2,1],[i*.13,d+3,1],[i*.18,d+3.2,1],[i*.02,d+6.4]],a,s,10,{mat:o})};cn(t,14,0,104,52,26,150,be.FARBRICK),t.lathe([[3,26],[.1,32]],33,108,4,{mat:e}),r(26,124,7.2,33,9.5,!0),r(40.5,116,6,31,8,!0),r(16.5,117,5.5,30,7.2,!0),t.lathe([[6.4,20,1],[6.4,34,1],[6.9,34.4,1],[6,34.4,1],[.6,46.5,1],[.15,50]],33,132,24,{mat:o});let n=(a,s,i)=>{cn(t,a-1.8,0,s-1.8,a+1.8,i,s+1.8,be.FARBRICK),t.lathe([[1.9,i,1],[1.6,i+3.5,1],[1.2,i+3.5,1],[1.2,i+6,1],[.9,i+6.2,1],[.05,i+13]],a,s,8,{mat:e})};n(20.5,109,36),n(46.5,112,38)}function Bk(t){let o=[st.cx,0,st.cz],r=24,n=10,a=[];for(let s=0;s<=r;s++){a.push([]);let i=-Math.PI*.62+Math.PI*1.24*s/r;for(let c=0;c<=n;c++){let f=Math.PI/2*(c/n)-.05,l=[Math.sin(i)*Math.cos(f),Math.sin(f),Math.cos(i)*Math.cos(f)],v=[o[0]+l[0]*420,o[1]+l[1]*420,o[2]+l[2]*420];a[s].push(t.vert(v,[-l[0],-l[1],-l[2]],[be.SKY,0,0]))}}for(let s=0;s<r;s++)for(let i=0;i<n;i++)t.tri(a[s][i],a[s+1][i],a[s+1][i+1]),t.tri(a[s][i],a[s+1][i+1],a[s][i+1])}function jk(){let t=[],e=[],o=[],r=[],n=_k.createBuilder(t,e,o,r);return Pk(n),$k(n),Dk(n),Fk(n),Gk(n),Hk(n),n.save(),n.translate(Nc[0],0,Nc[1]),Uk(n),n.restore(),Bk(n),{position:t,normal:e,elements:o,attr:r}}var Lx=[[[13.65,0,ys.z0-.7],[ys.x1+.7,10.6,st.south]],[[st.westBack,bs,st.northCol-Re],[st.eastBack,jr,st.northBack+3.4]],[[Io.x0,jr,st.northCol-Re],[Io.x1,Io.top,st.northCol+2.6]],[[st.westBack,0,st.south],[st.westCol+Re,xs,st.northBack+.3]],[[st.eastCol-Re,0,st.south],[st.eastBack,xs,st.northBack+.3]],[[14+Nc[0],0,104+Nc[1]],[52+Nc[0],26,150+Nc[1]]]];function Wk(t,e,o,r){let n=.001,a=1e9;for(let s=0;s<3;s++){if(Math.abs(e[s])<1e-9){if(t[s]<o[s]||t[s]>r[s])return!1;continue}let i=(o[s]-t[s])/e[s],c=(r[s]-t[s])/e[s];if(i>c&&([i,c]=[c,i]),n=Math.max(n,i),a=Math.min(a,c),n>a)return!1}return!0}function n1(t,e,o,r){let n=[(t[0]-o[0])/r[0],(t[1]-o[1])/r[1],(t[2]-o[2])/r[2]],a=[e[0]/r[0],e[1]/r[1],e[2]/r[2]],s=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],i=n[0]*a[0]+n[1]*a[1]+n[2]*a[2],c=n[0]*n[0]+n[1]*n[1]+n[2]*n[2]-1,f=i*i-s*c;if(f<=0)return 0;let l=Math.sqrt(f),v=Math.max(0,(-i-l)/s),d=(-i+l)/s;return Math.max(0,d-v)}function Hd(t){for(let[e,o]of Lx)if(Wk(t,ka,e,o))return 0;return 1}function Nx(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let o=e;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}function Vk(){let t=[],e=[],o=[],r=[],n=[],a=[],s=[],i=Nx(21),c=(u,h,g,m,y,x,_)=>{let M=t.length/3;for(let[w,k]of[[-1,-1],[1,-1],[1,1],[-1,1]])t.push(...u),e.push(w,k),o.push(h,g,m),r.push(...y),n.push(...x),a.push(..._);s.push(M,M+1,M+2,M,M+2,M+3)},f=(u,h)=>{let g=1;for(let m of Sa){if(m===h||!m.shadow)continue;let y=n1(u,ka,m.c,m.r);y>0&&(g*=Math.exp(-y*.9))}return g},l=Sa.map(u=>({...u,pts:null}));for(let u of l)for(let h=0;h<u.n;h++){let g;do g=[i()*2-1,i()*2-1,i()*2-1];while(g[0]*g[0]+g[1]*g[1]+g[2]*g[2]>1);let m=Math.hypot(g[0],g[1],g[2])||1,y=Math.pow(i(),.35)*.98,x=[g[0]/m*y,g[1]/m*y,g[2]/m*y];if(u.spindle){let $=x[1],q=Math.sqrt(Math.max(.02,1-$*$))*($>0?1-$*.55:1+$*.25),ct=Math.hypot(x[0],x[2])||1,kt=q*Math.min(1,ct*1.4);x=[x[0]/ct*kt,$,x[2]/ct*kt]}u.magnolia&&x[1]<-.55&&(x[1]=-.55+(x[1]+.55)*.35);let _=[u.c[0]+x[0]*u.r[0],u.c[1]+x[1]*u.r[1],u.c[2]+x[2]*u.r[2]],M,w;if(u.magnolia){let $=0;for(let kt of zx)$=Math.max($,n1(_,ka,kt.c,kt.r));M=Math.exp(-$*1.1);let q=1;for(let kt of Sa)if(!kt.magnolia&&kt.shadow){let xt=n1(_,ka,kt.c,kt.r);xt>0&&(q*=Math.exp(-xt*.9))}M*=Hd(_)*q;let ct=Ek(_,gs.c);w=s1([ct[0]/gs.r[0]+x[0]*.5,ct[1]/gs.r[1]+x[1]*.5,ct[2]/gs.r[2]+x[2]*.5]),y=Math.min(1,Math.hypot(ct[0]/gs.r[0],ct[1]/gs.r[1],ct[2]/gs.r[2])*.6+y*.4)}else{let $=n1(_,ka,u.c,u.r);M=Math.exp(-$*(u.spindle?2.2:1.25)),M*=Hd(_)*f(_,Sa[l.indexOf(u)]),w=s1([x[0]/u.r[0],x[1]/u.r[1],x[2]/u.r[2]])}let k=Math.max(0,w[0]*ka[0]+w[1]*ka[1]+w[2]*ka[2]),E=.25+.75*Math.pow(y,1.5)*(.65+.35*(w[1]*.5+.5)),z=u.size[0]+(u.size[1]-u.size[0])*i(),P=.85+i()*.3,R=u.leaf.map($=>$*P),B=u.cell;u.cell===3&&i()<.35&&(B=2),c(_,z,B,i()*Math.PI*2,[M,E,.35+.65*k],R,u.bloom)}for(let[u,h]of Ex){let g=i()<.5;for(let m=0;m<3;m++){let y=[u+(i()-.5)*.7,.28+i()*.22,h+(i()-.5)*.5],x=Hd(y)*f(y,null);c(y,.32+i()*.12,i()<.7?3:2,i()*6.28,[x,.6+i()*.3,.8],[.75,.9,.6],g?[1,.55,.75]:[.85,.8,1.15])}}let v=s.length/6,d=Array.from({length:v},(u,h)=>h);for(let u=v-1;u>0;u--){let h=Math.floor(i()*(u+1));[d[u],d[h]]=[d[h],d[u]]}let p=[];for(let u of d)for(let h=0;h<6;h++)p.push(s[u*6+h]);return{center:t,corner:e,par:o,light:r,tint:n,bloom:a,elements:p}}var Oe=t=>t.toFixed(4),uf=t=>`vec3(${Oe(t[0])}, ${Oe(t[1])}, ${Oe(t[2])})`,Ox=`
const vec3 SUN = ${uf(ka)};
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
`,Xk=Lx.map(([t,e])=>`if (hitBox(ro, SUN, ${uf(t)}, ${uf(e)})) return 0.0;`).join(`
	`),Yk=Sa.filter(t=>t.shadow).map(t=>`tr *= crownShade(ro, ${uf(t.c)}, ${uf(t.r)}, ${t.spindle?"1.8":"1.0"});`).join(`
	`),Kk=(t,e,o,r,n,a,s,i,c)=>`
	{
		float t = (${Oe(e)} - ro.${t}) / SUN.${t};
		if (t > 0.0) {
			vec3 q = ro + SUN * t;
			float u = q.${t==="z"?"x":"z"};
			if (q.y < ${Oe(bs)} && u > ${Oe(o-Re)} && u < ${Oe(o+r*n+Re)}) {
				float k = floor((u - ${Oe(o)}) / ${Oe(r)});
				float a = ${Oe(o)} + k * ${Oe(r)} + (k < 0.5 ? ${Oe(a)} : 0.02);
				float b = ${Oe(o)} + (k + 1.0) * ${Oe(r)} - (k > ${Oe(n-1.5)} ? ${Oe(s)} : 0.02);
				float c = 0.5 * (a + b), r = 0.5 * (b - a) - 0.2;
				float d = abs(u - c);
				float sill = abs(k - ${Oe(i)}) < 0.5 ? 0.0 : ${Oe(lf+.09)};
				bool hole = (q.y > sill && q.y < ${Oe(Dn)} && u > a && u < b && d < 0.5 * (b - a) - 0.17)
					|| (q.y >= ${Oe(Dn)} && d * d + (q.y - ${Oe(Dn)}) * (q.y - ${Oe(Dn)}) < r * r);
				if (!hole && ${c}) return 0.0;
			}
		}
	}`,i1=pi+.3,c1=pi+.3,df=r1+.3,wx=e0.x1-st.cx-mi-.3,Zk=e0.z1-st.cz-mi-.3,Qk=st.cz-e0.z0-mi-.3,Jk=Math.sqrt(df*df-i1*i1),tS=Math.sqrt(df*df-c1*c1),eS=[[st.cx,st.cz,.86,1.18],[st.cx,st.cz,1.25,.3],...Bd.map(([t,e])=>[t,e,.42,.65])].map(([t,e,o,r])=>`if (hitCyl(ro, vec2(${Oe(t)}, ${Oe(e)}), ${Oe(o)}, ${Oe(r)})) return 0.0;`).join(`
	`),oS=`
float segDist(vec2 p, vec2 a, vec2 b) {
	vec2 pa = p - a, ba = b - a;
	float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
	return length(pa - ba * h);
}

// distance to the nearest hedge line
float hedgeDist(vec2 xz) {
	vec2 q = abs(xz - vec2(${Oe(st.cx)}, ${Oe(st.cz)}));
	float b1 = xz.y > ${Oe(st.cz)} ? ${Oe(Zk)} : ${Oe(Qk)};
	vec2 A = vec2(${Oe(i1)}, ${Oe(Jk)}), Bp = vec2(${Oe(i1)}, b1), C = vec2(${Oe(wx)}, b1);
	vec2 D = vec2(${Oe(wx)}, ${Oe(c1)}), E = vec2(${Oe(tS)}, ${Oe(c1)});
	float d = min(min(segDist(q, A, Bp), segDist(q, Bp, C)), min(segDist(q, C, D), segDist(q, D, E)));
	float ang = atan(q.y, q.x);
	if (ang > atan(E.y, E.x) && ang < atan(A.y, A.x)) d = min(d, abs(length(q) - ${Oe(df)}));
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
	${Xk}
	${Kk("z",st.northCol,st.westCol,Ud,l1,Re+hf,Re+hf,kx,"ro.z > "+Oe(st.northCol-Re))}
	// on lighter settings only the buildings cast shadows
	if (gardenDetail < 0.5) return 1.0;
	${eS}
	if (ro.y < ${Oe(vi)} && ro.x > ${Oe(e0.x0)} && ro.x < ${Oe(e0.x1)}) {
		for (int i = 1; i <= 4; i++) {
			float t = float(i) / 4.0 * (${Oe(vi)} - ro.y) / SUN.y;
			vec3 q = ro + SUN * t;
			float w = ${Oe(cf*.5)} * sqrt(max(0.0, 1.0 - pow(q.y / ${Oe(vi)}, 4.0)));
			if (hedgeDist(q.xz) < w) return 0.0;
		}
	}
	float tr = 1.0;
	${Yk}
	return tr;
}
`,nS=`
precision highp float;
${_x}
varying vec3 v_pos, v_normal, v_attr, v_eye;
uniform float time, gardenDetail;
${Ox}
${oS}

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
		bool yard = P.x > ${Oe(e0.x0)} && P.x < ${Oe(e0.x1)} && P.z < ${Oe(e0.z1)};
		if (!yard) {
			// stone slabs under the arcades
			vec2 g = P.xz / 0.62;
			vec2 fg = fract(g);
			float h = hash(floor(g));
			base = mix(vec3(0.66, 0.60, 0.52), vec3(0.76, 0.70, 0.62), h);
			base *= 1.0 - 0.25 * (step(fg.x, 0.03) + step(fg.y, 0.03)) * (1.0 - lod);
			spec = 0.15;
		} else {
			float ex = min(P.x - ${Oe(e0.x0)}, ${Oe(e0.x1)} - P.x);
			float ez = min(P.z - ${Oe(e0.z0)}, ${Oe(e0.z1)} - P.z);
			float edge = min(ex, ez);
			float dx = abs(P.x - ${Oe(st.cx)}), dz = abs(P.z - ${Oe(st.cz)});
			float rc = length(vec2(dx, dz));
			if (edge < ${Oe(mi)}) {
				// brick path laid in rows, with a stone kerb
				vec2 q = ex < ez ? P.zx : P.xz;
				base = brick(q * vec2(1.0, 2.6), 0.4) * 0.9;
				if (abs(edge - ${Oe(mi)}) < 0.08) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (rc < ${Oe(r1)}) {
				// brick in rings round the wellhead
				float ang = atan(P.z - ${Oe(st.cz)}, P.x - ${Oe(st.cx)});
				vec2 q = vec2(ang * rc, rc);
				base = brick(q * vec2(1.0, 2.6), 0.5) * 0.92;
				if (abs(rc - ${Oe(r1)}) < 0.1) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (dx < ${Oe(pi)} || dz < ${Oe(pi)}) {
				// pale gravel
				float g = noise(P.xz * 40.0) * 0.6 + noise(P.xz * 9.0) * 0.4;
				base = mix(vec3(0.66, 0.58, 0.46), vec3(0.86, 0.79, 0.66), mix(g, 0.5, lod));
				base *= 0.94 + 0.12 * noise(P.xz * 1.3);
				float e = min(${Oe(pi)} - min(dx, dz), 1.0);
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
			ao *= 0.6 + 0.4 * smoothstep(0.85, 1.6, length(P.xz - vec2(${Oe(st.cx)}, ${Oe(st.cz)})));
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
		ao *= 0.55 + 0.45 * smoothstep(0.0, ${Oe(vi)}, P.y) * (0.6 + 0.4 * n);
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
	bool walk = (P.x < ${Oe(st.westCol)} || P.x > ${Oe(st.eastCol)} || P.z > ${Oe(st.northCol)}) && P.y < ${Oe(bs+.05)} && P.z > ${Oe(st.south-.1)} && P.z < ${Oe(st.northBack+.5)};
	float skyVis = 0.55 + 0.45 * N.y;
	if (walk) {
		float depth = P.z > ${Oe(st.northCol)} ? P.z - ${Oe(st.northCol)} : (P.x < ${Oe(st.westCol)} ? ${Oe(st.westCol)} - P.x : P.x - ${Oe(st.eastCol)});
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
}`,rS=`
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
}`,aS=`
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
}`,sS=`
precision highp float;
${_x}
uniform sampler2D leaves;
varying vec2 v_uv;
varying vec3 v_light, v_tint, v_bloom, v_pos;
${Ox}
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
}`;function iS(t,e,o){let r=t.texture({data:[[o]],min:"linear",mag:"linear"});return fetch(e).then(n=>{if(!n.ok)throw new Error("Could not load "+e);return n.blob()}).then(n=>createImageBitmap(n,{premultiplyAlpha:"none"})).then(n=>r({data:n,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(n=>console.error(n)),r}jd.exports=t=>{let e=jk(),o=Vk(),r=iS(t,"res/garden/foliage.webp",[0,0,0,0]),n=Date.now(),a=()=>Gd.motion?window.__streetClock!==void 0?window.__streetClock:(Date.now()-n)/1e3:20,s=t({frag:nS,vert:rS,attributes:{position:e.position,normal:e.normal,attr:e.attr},elements:new Uint32Array(e.elements),uniforms:{time:a,gardenDetail:()=>Gd.gardenDetail}}),i=t({frag:sS,vert:aS,attributes:{center:o.center,corner:o.corner,par:o.par,light:o.light,tint:o.tint,bloom:o.bloom},elements:new Uint32Array(o.elements),uniforms:{leaves:r,time:a},cull:{enable:!1},count:()=>Math.floor(o.elements.length*Gd.leafShare/6)*6});return function(){s(),i()}};jd.exports.layout={G:st,YARD:e0,SUN:ka}});var qx=Tt((CA,Ix)=>{"use strict";var cS=on().GLSL,lS=Zs(),{C:Px}=Tn(),Fn=Px.x1+.35,Yd=Px.zc,Wd=[Fn-7.3,2,Yd],Cx=5.2*Math.PI/180,$x=2100,fS=725,hS=1288,uS=1450,dS=2576,Wa=Yd-3.2,u1=Yd+3.3,Vd=Fn+5,Xd=Fn+11.7,Rc=3.9,pf=Fn+22.7,f1=40;function pS(){let t=[],e=[],o=[],r=[],n=lS.createBuilder(t,e,o,r),a=(l,v,d,p,u,h)=>{let g=[];for(let m=0;m<=u;m++){g.push([]);for(let y=0;y<=h;y++){let x=[0,1,2].map(_=>l[_]+v[_]*m/u+d[_]*y/h);g[m].push(n.vert(x,p,[0,0,0]))}}for(let m=0;m<u;m++)for(let y=0;y<h;y++)n.tri(g[m][y],g[m+1][y],g[m+1][y+1]),n.tri(g[m][y],g[m+1][y+1],g[m][y+1])},s=u1-Wa,i=.7;a([Fn-i,0,Wa],[Vd-Fn+i,0,0],[0,0,s],[0,1,0],6,4);let c=Xd-Vd,f=Math.hypot(c,Rc);return a([Vd,0,Wa],[c,Rc,0],[0,0,s],[-Rc/f,c/f,0],6,4),a([Xd,Rc,Wa],[pf-Xd,0,0],[0,0,s],[0,1,0],6,4),a([Fn-i,0,Wa],[pf-Fn+i,0,0],[0,f1,0],[0,0,1],12,12),a([Fn-i,0,u1],[pf-Fn+i,0,0],[0,f1,0],[0,0,-1],12,12),a([pf,0,Wa],[0,f1,0],[0,0,s],[-1,0,0],8,4),a([Fn-i,f1,Wa],[pf-Fn+i,0,0],[0,0,s],[0,-1,0],6,4),{position:t,normal:e,elements:o,attr:r}}var Jn=t=>t.toFixed(5),h1=[[Fn+3.4,3.7,Wa+.01,1],[Fn+8.6,4.1,u1-.01,-1],[Fn+14.8,Rc+3.3,Wa+.01,1],[Fn+19.6,Rc+3.6,u1-.01,-1]],vS=`
precision highp float;
${cS}
uniform sampler2D photo;
uniform float time;
varying vec3 v_pos;
varying vec3 v_normal;
const int NLAMP = ${h1.length};
vec4 LAMP[NLAMP];

void main() {
	${h1.map((t,e)=>`LAMP[${e}] = vec4(${Jn(t[0])}, ${Jn(t[1])}, ${Jn(t[2])}, ${Jn(t[3])});`).join(`
	`)}
	vec3 d = v_pos - vec3(${Jn(Wd[0])}, ${Jn(Wd[1])}, ${Jn(Wd[2])});
	float c = ${Jn(Math.cos(Cx))}, s = ${Jn(Math.sin(Cx))};
	float fw = d.x * c + d.y * s;
	float up = -d.x * s + d.y * c;
	fw = max(fw, 0.05);
	vec2 px = vec2(${Jn(fS)} + ${Jn($x)} * d.z / fw, ${Jn(hS)} - ${Jn($x)} * up / fw);
	vec2 uv = px / vec2(${Jn(uS)}, ${Jn(dS)});
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
	for (int i = 0; i < ${h1.length}; i++) {
		vec4 L = LAMP[i];                       // x, y, z, side (+1 left wall, -1 right)
		vec3 d = L.xyz - v_pos;
		float dd = dot(d, d);
		float fl = 0.92 + 0.05 * sin(time * 7.3 + float(i) * 2.1) + 0.03 * sin(time * 17.0 + float(i));
		// the wall it hangs on is lit across, the paving from above
		float face = v_normal.y > 0.5 ? max(normalize(d).y, 0.0) : 0.35 + 0.65 * max(dot(v_normal, normalize(d)), 0.0);
		lit += albedo * vec3(1.0, 0.62, 0.30) * face * fl * lampK * 3.2 / (0.6 + dd * 0.45);
	}
	gl_FragColor = vec4(lit, 1.0);
}`,mS=`
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
}`;Ix.exports=t=>{let e=pS(),o=t.texture({data:[[[120,105,85]]],min:"linear",mag:"linear"});fetch("res/florence/photo.jpg").then(i=>{if(!i.ok)throw new Error("Could not load the Florence photo");return i.blob()}).then(i=>createImageBitmap(i)).then(i=>o({data:i,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(i=>console.error(i));let r=t({frag:vS,vert:mS,attributes:{position:e.position,normal:e.normal},elements:new Uint32Array(e.elements),uniforms:{photo:o},cull:{enable:!1}}),n={pos:[],nrm:[],k:[],idx:[]},a=(i,c,f)=>{let[l,v,d]=i,p=[[[1,0,0],[0,1,0],[0,0,1]],[[-1,0,0],[0,1,0],[0,0,-1]],[[0,0,1],[0,1,0],[-1,0,0]],[[0,0,-1],[0,1,0],[1,0,0]],[[0,1,0],[0,0,1],[1,0,0]],[[0,-1,0],[0,0,1],[-1,0,0]]];for(let[u,h,g]of p){let m=n.pos.length/3;for(let[y,x]of[[-1,-1],[1,-1],[1,1],[-1,1]])n.pos.push(l+u[0]*c[0]+h[0]*y*c[0]+g[0]*x*c[0],v+u[1]*c[1]+h[1]*y*c[1]+g[1]*x*c[1],d+u[2]*c[2]+h[2]*y*c[2]+g[2]*x*c[2]),n.nrm.push(...u),n.k.push(f);n.idx.push(m,m+1,m+2,m,m+2,m+3)}};for(let i of h1){let c=i[3],f=i[2]+c*.42;a([i[0],i[1],f],[.11,.17,.11],1);for(let l of[-1,1])for(let v of[-1,1])a([i[0]+l*.11,i[1],f+v*.11],[.014,.18,.014],0);a([i[0],i[1]+.2,f],[.15,.03,.15],0),a([i[0],i[1]+.27,f],[.05,.05,.05],0),a([i[0],i[1]-.19,f],[.09,.025,.09],0),a([i[0],i[1]+.34,i[2]+c*.21],[.015,.015,.21],0),a([i[0],i[1]+.15,i[2]+c*.03],[.04,.24,.03],0)}let s=t({vert:`
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
		}`,attributes:{position:n.pos,normal:n.nrm,k:n.k},elements:new Uint16Array(n.idx),cull:{enable:!1}});return function(){r(),s()}}});var Ux=Tt(($A,Hx)=>{"use strict";var gS=on().GLSL,{A:p1,BENCH:Zd,SHAFT:Kd,TREE:vf,oculusGLSL:xS}=Gr(),yS=qr(),d1=vf.sxz,Dx=vf.sy,Fx=vf.yaw;function bS(t){let e=new DataView(t),o=e.getUint32(4,!0),r=e.getUint32(8,!0),n=e.getUint32(12,!0),a=[0,1,2].map(d=>e.getFloat32(16+d*4,!0)),s=[0,1,2].map(d=>e.getFloat32(28+d*4,!0)),i=40,c=new Uint16Array(t,i,o*3);i+=o*6;let f=new Uint16Array(t,i,o*2);i+=o*4;let l=new Int8Array(t,i,o*3);i+=o*3,i=i+3&-4;let v=new Uint32Array(t,i,n);return{nV:o,nWood:r,nI:n,mn:a,sz:s,pos:c,uv:f,nrm:l,idx:v}}function wS(t){let e=new Float32Array(t.nV*3),o=new Float32Array(t.nV*3),r=new Float32Array(t.nV*2),n=new Float32Array(t.nV),a=Math.cos(Fx),s=Math.sin(Fx);for(let i=0;i<t.nV;i++){let c=(t.mn[0]+t.pos[i*3]/65535*t.sz[0])*d1,f=(t.mn[1]+t.pos[i*3+1]/65535*t.sz[1])*Dx,l=(t.mn[2]+t.pos[i*3+2]/65535*t.sz[2])*d1;e[i*3]=p1.cx+a*c+s*l,e[i*3+1]=Zd.soil+.02+f,e[i*3+2]=p1.zc-s*c+a*l;let v=t.nrm[i*3]/127/d1,d=t.nrm[i*3+1]/127/Dx,p=t.nrm[i*3+2]/127/d1,u=Math.hypot(v,d,p)||1;v/=u,d/=u,p/=u,o[i*3]=a*v+s*p,o[i*3+1]=d,o[i*3+2]=-s*v+a*p,r[i*2]=t.uv[i*2]/65535,r[i*2+1]=t.uv[i*2+1]/65535,n[i]=i>=t.nWood?1:0}return{position:e,normal:o,uv:r,leaf:n,elements:t.idx}}function Gx(t,e,o,r){let n=t.texture({data:[[r]],min:"linear",mag:"linear"});return fetch(e).then(a=>{if(!a.ok)throw new Error("Could not load "+e);return a.blob()}).then(a=>createImageBitmap(a,{premultiplyAlpha:"none"}).catch(()=>new Promise((s,i)=>{let c=new Image;c.onload=()=>s(c),c.onerror=i,c.src=URL.createObjectURL(a)}))).then(a=>n({data:a,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",...o})).catch(a=>console.error(a)),n}var gn=t=>t.toFixed(4),Cc=vf.crownC,$c=vf.crownR,_S=`
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

const vec3 SHAFT = vec3(${gn(Kd[0])}, ${gn(Kd[1])}, ${gn(Kd[2])});

void main() {
	vec3 p = position;
	// the air in the court is never quite still. The whole tree leans
	// with it, slowly, more the higher and the further out on a limb
	// (wood and leaves together, so every leaf stays on its twig) ...
	float h = max(p.y - 1.2, 0.0);
	vec2 out2 = p.xz - vec2(${gn(p1.cx)}, ${gn(p1.zc)});
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
	vec3 cc = vec3(${gn(Cc[0])}, ${gn(Cc[1])}, ${gn(Cc[2])});
	vec3 cr = vec3(${gn($c[0])}, ${gn($c[1])}, ${gn($c[2])});
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
}`,_s=cs(),MS=`
precision highp float;
${gS}
uniform float time;
${_s.lanternGLSL(_s.TREE_LANTERN)}
const vec3 LANTERN_POS = vec3(${_s.LANTERNS[_s.TREE_LANTERN[0]].x.toFixed(3)}, ${_s.LANTERNS[_s.TREE_LANTERN[0]].y.toFixed(3)}, ${_s.LANTERNS[_s.TREE_LANTERN[0]].z.toFixed(3)});
uniform sampler2D leaves, bark;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_leaf, v_shade;
varying vec3 v_eye;

${xS()}

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
	vec3 rel = (v_pos - vec3(${gn(Cc[0])}, ${gn(Cc[1])}, ${gn(Cc[2])})) / vec3(${gn($c[0])}, ${gn($c[1])}, ${gn($c[2])});
	float outer = clamp(length(rel), 0.0, 1.0);
	float ao = mix(0.38, 1.0, outer * outer) * (0.75 + 0.25 * smoothstep(0.4, 2.0, v_pos.y));
	// and the trunk darkens where it meets the soil
	ao *= 0.6 + 0.4 * smoothstep(${gn(Zd.soil)}, ${gn(Zd.soil+.5)}, v_pos.y);

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
}`;Hx.exports=t=>{let e=null,o=Gx(t,"res/tree/leaves.webp",{wrapS:"clamp",wrapT:"clamp"},[60,80,40,0]),r=Gx(t,"res/tree/bark.jpg",{wrapS:"repeat",wrapT:"repeat"},[90,80,70]),n=Date.now();return fetch("res/tree.bin").then(a=>{if(!a.ok)throw new Error("Could not load the tree");return a.arrayBuffer()}).then(a=>{let s=wS(bS(a));e=t({vert:_S,frag:MS,attributes:{position:s.position,normal:s.normal,uv:s.uv,leaf:s.leaf},elements:s.elements,uniforms:{leaves:o,bark:r,time:()=>yS.motion?typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-n)/1e3:0},cull:{enable:!1}})}).catch(a=>console.error(a)),function(){e&&e()}}});var x1=Tt((PA,Vx)=>{"use strict";var Pc=hs(),kS="res/audio/go-tomorrow.mp3",SS="res/audio/go-tomorrow.json",jx="gallery-sound",v1=[Pc.PIANO.x,1,Pc.PIANO.z],zS=Pc.R,pr=!0;try{localStorage.getItem(jx)==="off"&&(pr=!1)}catch(t){}var F0=null,On=null,mf=null,gf=null,Ms=null,Va=null,gi=!1,m1=null,Bx=[],ES=(typeof performance!="undefined"?performance.now():0)/1e3;function AS(t){let e=Math.floor(t.sampleRate*2.6),o=t.createBuffer(2,e,t.sampleRate),r=12345,n=()=>(r=r*16807%2147483647,r/10737418235e-1-1);for(let a=0;a<2;a++){let s=o.getChannelData(a),i=0;for(let c=0;c<e;c++){let f=c/t.sampleRate,l=.25+.6*Math.exp(-f*2.2);i+=(n()-i)*l,s[c]=i*Math.pow(1-c/e,2.2)*Math.exp(-f*1.5)*(f<.012?f/.012:1)}}return o}function TS(){if(F0)return;F0=new Audio,F0.src=kS,F0.loop=!0,F0.preload="auto",F0.crossOrigin="anonymous";let t=window.AudioContext||window.webkitAudioContext;if(!t){F0.volume=.2;return}try{On=new t;let e=On.createMediaElementSource(F0);Ms=On.createBiquadFilter(),Ms.type="lowpass",Ms.frequency.value=1500,Ms.Q.value=.4,mf=On.createGain(),mf.gain.value=0,gf=On.createGain(),gf.gain.value=0;let o=On.createConvolver();o.buffer=AS(On),Va=On.createGain(),Va.gain.value=pr?1:0,e.connect(Ms),Ms.connect(mf),mf.connect(Va),Ms.connect(o),o.connect(gf),gf.connect(Va),Va.connect(On.destination)}catch(e){On=null,F0.volume=.2}}function Wx(){if(gi||!pr)return;TS();let t=()=>F0.play().then(()=>{gi=!0}).catch(()=>{});On&&On.state==="suspended"?On.resume().then(t,t):t()}typeof window!="undefined"&&(["pointerdown","pointerup","touchend","keydown","click"].forEach(t=>window.addEventListener(t,Wx,{capture:!0,passive:!0})),document.addEventListener("visibilitychange",()=>{!F0||!gi||(document.hidden?F0.pause():pr&&F0.play().catch(()=>{}))}),fetch(SS).then(t=>t.ok?t.json():null).then(t=>{if(!t)return;let e=o=>{let r=o.map(s=>s[2]).sort((s,i)=>s-i),n=r[Math.floor(r.length*.03)]||0,a=r[Math.floor(r.length*.97)]||1;return o.map(s=>({t:s[0],w:s[1],x:Math.max(0,Math.min(1,(s[2]-n)/Math.max(a-n,.001)))}))};m1={left:e(t.l),right:e(t.r),level:t.e,dur:t.d}}).catch(()=>{}));var g1={AT:v1,listen(t){if(!On||!gi)return;let e=t[0]-v1[0],o=t[2]-v1[2],r=Math.hypot(e,o,(t[1]-v1[1])*.5),n=Math.hypot(t[0]-Pc.C.x,t[2]-Pc.C.z)<zS+.4||t[0]<-.2&&Math.abs(t[2]-Pc.C.z)<4,a,s,i;if(n){let f=Math.max(0,Math.min(1,(r-1.2)/5));a=1-.3*f,s=.22+.16*f,i=16e3}else{let f=5.5/Math.max(r,5.5),l=t[0]>14.2&&t[2]<12?.6:1;a=.5*Math.pow(f,1.5)*l,s=.34*Math.pow(f,.95)*l,i=(650+9e3*Math.pow(f,1.3))*(l<1?.7:1)}let c=On.currentTime;mf.gain.setTargetAtTime(a,c,.35),gf.gain.setTargetAtTime(s,c,.35),Ms.frequency.setTargetAtTime(i,c,.35)},time(){let t=m1&&m1.dur||158;return F0&&gi&&!F0.paused||F0&&gi?F0.currentTime%t:((performance.now()/1e3-ES)%t+t)%t},get cues(){return m1},get on(){return pr},set(t){pr=!!t;try{localStorage.setItem(jx,pr?"on":"off")}catch(e){}pr?(Wx(),F0&&gi&&F0.play().catch(()=>{}),Va&&Va.gain.setTargetAtTime(1,On.currentTime,.2)):Va?Va.gain.setTargetAtTime(0,On.currentTime,.15):F0&&F0.pause(),Bx.forEach(e=>e(pr))},toggle(){g1.set(!pr)},onChange(t){Bx.push(t)},button(t){let e='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="M15.5 9a4.2 4.2 0 0 1 0 6M18 6.5a7.8 7.8 0 0 1 0 11"/></svg>',o='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="M16 9.5l5 5M21 9.5l-5 5"/></svg>',r=document.createElement("button");r.type="button",r.className=t+" sound-toggle";let n=()=>{r.innerHTML=pr?e:o,r.setAttribute("aria-label",pr?"Turn the music off":"Turn the music on"),r.title=pr?"Music on":"Music off",r.setAttribute("aria-pressed",pr?"true":"false")};return n(),g1.onChange(n),["mousedown","pointerdown"].forEach(a=>r.addEventListener(a,s=>s.stopPropagation())),r.addEventListener("click",a=>{a.stopPropagation(),g1.toggle()}),r}};Vx.exports=g1});var r5=Tt((IA,op)=>{"use strict";var tp=on().GLSL,{A:Xx,BENCH:t5,oculusGLSL:e5}=Gr(),Yx=qr(),o5=hs(),Kx=x1(),LS=1.74,NS=1.877,Gn=LS/NS,yi={x:Xx.cx-1.22,z:Xx.zc+.02,hipY:t5.seat+.115},u0=(t,e)=>[t[3]*e[0]+t[0]*e[3]+t[1]*e[2]-t[2]*e[1],t[3]*e[1]-t[0]*e[2]+t[1]*e[3]+t[2]*e[0],t[3]*e[2]+t[0]*e[1]-t[1]*e[0]+t[2]*e[3],t[3]*e[3]-t[0]*e[0]-t[1]*e[1]-t[2]*e[2]],la=t=>[-t[0],-t[1],-t[2],t[3]],Ss=(t,e)=>{let o=Math.hypot(t[0],t[1],t[2])||1,r=Math.sin(e/2);return[t[0]/o*r,t[1]/o*r,t[2]/o*r,Math.cos(e/2)]},y1=(t,e,o)=>u0(Ss([0,0,1],o*Math.PI/180),u0(Ss([0,1,0],e*Math.PI/180),Ss([1,0,0],t*Math.PI/180))),ep=t=>{let e=Math.hypot(...t)||1;return t.map(o=>o/e)},za=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],yf=(t,e)=>[t[0]+e[0],t[1]+e[1],t[2]+e[2]],ks=(t,e)=>[t[0]*e,t[1]*e,t[2]*e],Jd=(t,e)=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2],w1=t=>Math.hypot(t[0],t[1],t[2]),xf=t=>{let e=w1(t)||1;return[t[0]/e,t[1]/e,t[2]/e]},M1=(t,e)=>[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]],OS=(t,e)=>{let o=[t[0],t[1],t[2]],r=ks(M1(o,e),2);return yf(yf(e,ks(r,t[3])),M1(o,r))},RS=(t,e)=>{let o=M1(t,e),r=1+Jd(t,e);return r<1e-6?[0,0,1,0]:ep([o[0],o[1],o[2],r])};function Ar(t,e,o){let[r,n,a,s]=e,i=r*r,c=n*n,f=a*a,l=r*n,v=r*a,d=n*a,p=s*r,u=s*n,h=s*a;return[(1-2*(c+f))*o[0],2*(l+h)*o[0],2*(v-u)*o[0],0,2*(l-h)*o[1],(1-2*(i+f))*o[1],2*(d+p)*o[1],0,2*(v+u)*o[2],2*(d-p)*o[2],(1-2*(i+c))*o[2],0,t[0],t[1],t[2],1]}function ln(t,e){let o=new Array(16);for(let r=0;r<4;r++)for(let n=0;n<4;n++)o[r*4+n]=t[n]*e[r*4]+t[4+n]*e[r*4+1]+t[8+n]*e[r*4+2]+t[12+n]*e[r*4+3];return o}function Qd(t){let e=Math.hypot(t[0],t[1],t[2]),o=Math.hypot(t[4],t[5],t[6]),r=Math.hypot(t[8],t[9],t[10]),n=t[0]/e,a=t[1]/e,s=t[2]/e,i=t[4]/o,c=t[5]/o,f=t[6]/o,l=t[8]/r,v=t[9]/r,d=t[10]/r,p=n+c+d,u;if(p>0){let h=Math.sqrt(p+1)*2;u=[(f-v)/h,(l-s)/h,(a-i)/h,h/4]}else if(n>c&&n>d){let h=Math.sqrt(1+n-c-d)*2;u=[h/4,(i+a)/h,(l+s)/h,(f-v)/h]}else if(c>d){let h=Math.sqrt(1+c-n-d)*2;u=[(i+a)/h,h/4,(v+f)/h,(l-s)/h]}else{let h=Math.sqrt(1+d-n-c)*2;u=[(l+s)/h,(v+f)/h,h/4,(a-i)/h]}return ep(u)}var _1={LeftUpLeg:[-62,10,0],LeftLeg:[122,0,0],LeftFoot:[30,0,0],RightUpLeg:[0,-3,-2],RightLeg:[4,0,0],RightFoot:[35,-12,0],Neck:[10,0,0],Head:[6,0,0],LeftShoulder:[0,0,6],LeftArm:[-112.4,3.4,62.5],LeftForeArm:[0,-122.6,0],LeftHand:[0,0,-10],RightShoulder:[0,0,0],RightArm:[0,78,-8],RightForeArm:[0,14,0],RightHand:[0,0,0]};for(let t of["Left","Right"]){let e=t==="Left"?-1:1,o=t==="Left"?1:.35;["Index","Middle","Ring","Pinky"].forEach((r,n)=>{_1[t+"Hand"+r+"1"]=[0,0,e*(18+n*6)*o],_1[t+"Hand"+r+"2"]=[0,0,e*(26+n*6)*o],_1[t+"Hand"+r+"3"]=[0,0,e*16*o]})}function xi(t,e,o){let r=t-e;return r-=Math.round(r),Math.exp(-(r/o)*(r/o))}function Zx(t){let e=9+20*Math.cos(2*Math.PI*t),o=4+13*xi(t,.14,.07)+57*xi(t,.72,.12),r=5*xi(t,.06,.04)-9*xi(t,.42,.12)+17*xi(t,.62,.05)-3*xi(t,.85,.1),n=-26*xi(t,.58,.06);return{hip:e,knee:o,ankle:r,toe:n}}function CS(t){let e=(t%1+1)%1,o=Zx(e),r=Zx(e+.5),n=Math.cos(2*Math.PI*e),a=Math.sin(2*Math.PI*e);return{swing:{LeftArm:[16*n,0,0],RightArm:[-16*n,0,0],LeftForeArm:[0,-14-8*Math.max(0,-n),0],RightForeArm:[0,14+8*Math.max(0,n),0]},pose:{Hips:[0,5*a,1.5*Math.cos(4*Math.PI*e)],Spine1:[3,-4*a,0],LeftUpLeg:[-o.hip,0,0],LeftLeg:[o.knee,0,0],LeftFoot:[o.ankle,0,0],LeftToeBase:[o.toe,0,0],RightUpLeg:[-r.hip,0,0],RightLeg:[r.knee,0,0],RightFoot:[r.ankle,0,0],RightToeBase:[r.toe,0,0],LeftArm:[0,0,-78],RightArm:[0,0,78],LeftHand:[0,0,-8],RightHand:[0,0,8]},sway:.022*n}}var Qx=`
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
}`,k1=cs(),Jx=`#extension GL_OES_standard_derivatives : enable
precision highp float;
${tp}
uniform float time;
${o5.roomGLSL()}
${k1.lanternGLSL(k1.TREE_LANTERN)}
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
${e5()}
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
}`;function $S(t,e){let o=t.texture({data:[[[120,100,90,255]]],min:"linear",mag:"linear"});return fetch(e).then(r=>{if(!r.ok)throw new Error("Could not load "+e);return r.blob()}).then(r=>createImageBitmap(r,{premultiplyAlpha:"none"}).catch(()=>new Promise((n,a)=>{let s=new Image;s.onload=()=>n(s),s.onerror=a,s.src=URL.createObjectURL(r)}))).then(r=>o({data:r,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(r=>console.error(r)),o}var n5={w:.13,h:.2},b1=t=>.011*(1-Math.pow(1-t,3));function PS(){let t=[],e=[],o=[],r=[],n=[],a=(h,g,m,y,x,_,M)=>{let w=t.length/3;[h,g,m,y].forEach((k,E)=>{t.push(...k),e.push(...x),o.push(...M[E]),r.push(_)}),n.push(w,w+1,w+2,w,w+2,w+3)},{w:s,h:i}=n5,c=i/2,f=[[0,1],[1,1],[1,0],[0,0]],l=-.006,v=s+.001,d=c+.001;a([0,l,-d],[v,l,-d],[v,l,d],[0,l,d],[0,-1,0],1,[[0,1],[1,1],[1,0],[0,0]]),a([0,l+.001,-d],[0,l+.001,d],[v,l+.001,d],[v,l+.001,-d],[0,1,0],2,f),a([-v,l,-d],[0,l,-d],[0,l,d],[-v,l,d],[0,-1,0],2,f),a([-v,l+.001,-d],[-v,l+.001,d],[0,l+.001,d],[0,l+.001,-d],[0,1,0],2,f);let p=8;for(let h of[1,-1]){for(let m=0;m<p;m++){let y=m/p,x=(m+1)/p,_=(.002+y*(s-.002))*h,M=(.002+x*(s-.002))*h,w=b1(y),k=b1(x),E=h>0?y:1-y,z=h>0?x:1-x,P=1,R=-(k-w)/(M-_);a([_,w,-c],[M,k,-c],[M,k,c],[_,w,c],[R,P,0],3,[[E,1],[z,1],[z,0],[E,0]]),a([_,l+.001,c],[M,l+.001,c],[M,k,c],[_,w,c],[0,0,1],4,f),a([_,w,-c],[M,k,-c],[M,l+.001,-c],[_,l+.001,-c],[0,0,-1],4,f)}let g=s*h;a([g,l+.001,-c],[g,b1(1),-c],[g,b1(1),c],[g,l+.001,c],[h,0,0],4,f)}let u=10;for(let h=0;h<u;h++){let g=h/u,m=(h+1)/u,y=t.length/3;for(let[x,_]of[[g,-c],[m,-c],[m,c],[g,c]])t.push(x,0,_),e.push(0,1,0),o.push(x,(_+c)/i),r.push(5);n.push(y,y+1,y+2,y,y+2,y+3)}return{pos:t,nrm:e,uv:o,kind:r,idx:n}}function IS(){if(typeof document=="undefined")return null;let t=document.createElement("canvas");t.width=512,t.height=768;let e=t.getContext("2d");e.fillStyle="#ebe5d8",e.fillRect(0,0,512,768);let o=7,r=()=>(o=o*16807%2147483647,o/2147483647),n=(s,i,c,f,l,v,d)=>{for(let p=0;p<v;p++){let u=s+(r()-.5)*c*2,h=i+(r()-.5)*f*2,g=20+r()*60,m=e.createRadialGradient(u,h,0,u,h,g);m.addColorStop(0,`rgba(${l},${d})`),m.addColorStop(1,`rgba(${l},0)`),e.fillStyle=m,e.fillRect(u-g,h-g,g*2,g*2)}},a=e.createRadialGradient(236,280,10,256,300,125);a.addColorStop(0,"#3d4866"),a.addColorStop(1,"#232a3d"),e.fillStyle=a,e.beginPath(),e.arc(256,300,122,0,Math.PI*2),e.fill(),e.fillStyle="#b8873f",e.beginPath(),e.moveTo(64,452);for(let s=64;s<=448;s+=16)e.lineTo(s,446+r()*4);for(let s=448;s>=64;s-=16)e.lineTo(s,466+r()*4);e.fill(),e.strokeStyle="#2b2f3a",e.lineCap="round",[[120,392,500,5],[160,352,530,4],[205,307,558,3]].forEach(([s,i,c,f])=>{e.lineWidth=f,e.beginPath(),e.moveTo(s,c),e.lineTo(i,c),e.stroke()});for(let s=0;s<9e3;s++)e.fillStyle=`rgba(90,80,60,${r()*.05})`,e.fillRect(r()*512,r()*768,1,1);return t}var qS=`
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
		float r = u * ${n5.w.toFixed(3)};
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
}`,DS=`
precision highp float;
${tp}
uniform float time;
${k1.lanternGLSL(k1.TREE_LANTERN)}
uniform sampler2D cover;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_kind;
${e5()}
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
}`;function FS(){let t=[],e=[],o=[],r=[],n=[],a=[.36,.11,.07],s=[.1,.07,.05],i=[.78,.76,.72],c=[.55,.41,.26],f=[.8,.55,.22],l=[[0,-.15,f,2],[.0012,-.147,f,2],[.004,-.138,f,2],[.0058,-.125,c,2],[.0064,-.112,c,2],[.006,-.104,c,2],[.0066,-.102,i,1],[.0066,-.08,i,1],[.0062,-.074,i,1],[.0068,-.072,i,1],[.007,-.066,i,1],[.0058,-.064,a,0],[.0062,-.04,a,0],[.0058,0,a,0],[.0046,.06,a,0],[.0036,.11,a,0],[.003,.13,s,0],[.0026,.136,s,0],[0,.139,s,0]],v=16;for(let d=0;d<l.length;d++){let[p,u,h,g]=l[d],m=g===2?.45:1;for(let y=0;y<=v;y++){let x=y/v*Math.PI*2;t.push(Math.cos(x)*p,u,Math.sin(x)*p*m);let _=Math.max(d-1,0),M=Math.min(d+1,l.length-1),w=l[M][0]-l[_][0],k=l[M][1]-l[_][1],E=Math.hypot(w,k)||1;e.push(Math.cos(x)*k/E,-w/E,Math.sin(x)*k/E/m),o.push(...h),r.push(g)}}for(let d=0;d<l.length-1;d++)for(let p=0;p<v;p++){let u=d*(v+1)+p,h=u+v+1;n.push(u,h,u+1,u+1,h,h+1)}return{pos:t,nrm:e,col:o,mat:r,idx:n}}var GS=`
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
}`,HS=`
precision highp float;
${tp}
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
}`,US=`
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
}`,BS=`
precision highp float;
uniform float pulse;
varying vec2 v_c;
void main() {
	float d = length(v_c);
	float g = exp(-d * d * 6.0) * 0.10 + exp(-d * d * 30.0) * 0.08;
	gl_FragColor = vec4(vec3(1.0, 0.80, 0.45) * g * (0.75 + 0.25 * pulse), 1.0);
}`;op.exports=t=>{let e="res/avatar/",o=null,r=Date.now(),n=()=>typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-r)/1e3,a={glowPos:[yi.x,1.9,yi.z],glow:0};Promise.all([fetch(e+"avatar.json").then(z=>z.json()),fetch(e+"avatar.bin").then(z=>z.arrayBuffer())]).then(([z,P])=>{o=f(z,P)}).catch(z=>console.error(z));let s=null;Promise.all([fetch(e+"motion.json").then(z=>z.ok?z.json():null),fetch(e+"motion.bin").then(z=>z.ok?z.arrayBuffer():null)]).then(([z,P])=>{if(!z||!P)return;let R={};for(let B in z.clips){let $=z.clips[B],q=$.bones.length,ct=new Float32Array(P,$.mean,q*4),kt={};$.bones.forEach((xt,vt)=>{kt[xt]=[ct[vt*4],ct[vt*4+1],ct[vt*4+2],ct[vt*4+3]]}),R[B]=Object.assign({},$,{Q:new Int16Array(P,$.q,$.frames*q*4),H:new Float32Array(P,$.hips,$.frames*3),meanQ:kt})}s=R}).catch(()=>{});function i(z,P){let R=z.frames,B=z.bones.length,$=(P%R+R)%R,q=Math.floor($)%R,ct=(q+1)%R,kt=$-Math.floor($),xt={};for(let Pt=0;Pt<B;Pt++){let ne=(q*B+Pt)*4,ze=(ct*B+Pt)*4,Qe=z.Q[ne],ve=z.Q[ne+1],He=z.Q[ne+2],Fe=z.Q[ne+3],ot=z.Q[ze],W=z.Q[ze+1],gt=z.Q[ze+2],Mt=z.Q[ze+3];Qe*ot+ve*W+He*gt+Fe*Mt<0&&(ot=-ot,W=-W,gt=-gt,Mt=-Mt),xt[z.bones[Pt]]=ep([Qe+(ot-Qe)*kt,ve+(W-ve)*kt,He+(gt-He)*kt,Fe+(Mt-Fe)*kt])}let vt=q*3,Et=ct*3;return{q:xt,hips:[z.H[vt]+(z.H[Et]-z.H[vt])*kt,z.H[vt+1]+(z.H[Et+1]-z.H[vt+1])*kt,z.H[vt+2]+(z.H[Et+2]-z.H[vt+2])*kt]}}let c=t.texture({data:[[[255,255,255,255]]]});function f(z,P){let R=(tt,Bt)=>new Float32Array(P,tt,Bt),B=z.bones,$=B.length,q={};B.forEach((tt,Bt)=>{q[tt.name]=Bt});let ct=[];for(let tt=0;tt<$;tt++)ct.push(Array.from(R(z.ibm+tt*64,16)));let kt=B.map(tt=>Ar(tt.t,tt.r,tt.s)),xt=[];for(let tt=0;tt<$;tt++){let Bt=B[tt].parent;xt[tt]=Bt<0?kt[tt]:ln(xt[Bt],kt[tt])}let vt=xt.map(Qd),Et=z.meshes.map(tt=>{let Bt=R(tt.pos,tt.n*3),Yt=R(tt.nrm,tt.n*3),qt=R(tt.uv,tt.n*2),Ee=new Uint8Array(P,tt.jnt,tt.n*4),Xe=R(tt.wgt,tt.n*4),We=new Uint16Array(P,tt.idx,tt.ni),Ce={};for(let St in tt.morphs){let Zt=tt.morphs[St];Ce[St]={idx:new Uint16Array(P,Zt.idx,Zt.n),d:R(Zt.d,Zt.n*3)}}let to=new Float32Array(tt.n*3),Ge=new Float32Array(tt.n*3),go=new Float32Array(tt.n*3),Ve=t.buffer({data:to,usage:"dynamic"}),et=t.buffer({data:Ge,usage:"dynamic"}),mt=/avaturn_hair/.test(tt.name),J=/EyeAO|Eyelash/.test(tt.name),de=/Body|Head/.test(tt.name),ge=tt.kind||0;return{m:tt,pos:Bt,nrm:Yt,uv:qt,jnt:Ee,wgt:Xe,idx:We,morphs:Ce,outP:to,outN:Ge,work:go,pb:Ve,nbuf:et,tex:tt.tex?$S(t,e+tt.tex):c,kind:ge,alphaScale:/EyeAO/.test(tt.name)?.25:1,blend:tt.blend||mt,alphaCut:mt?.35:J?.02:0,skin:de?1:0}}),Pt=t({vert:Qx,frag:Jx,attributes:{position:t.prop("pb"),normal:t.prop("nb"),uv:t.prop("uv")},elements:t.prop("el"),uniforms:{tex:t.prop("tex"),alphaCut:t.prop("alphaCut"),skin:t.prop("skin"),kind:t.prop("kind"),alphaScale:t.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow,boothLamp:()=>w&&!k?w.lamp:[0,0,0,0],court:()=>w||k?0:1,candle:()=>k?1:0},cull:{enable:!1}}),ne=t({vert:Qx,frag:Jx,attributes:{position:t.prop("pb"),normal:t.prop("nb"),uv:t.prop("uv")},elements:t.prop("el"),uniforms:{tex:t.prop("tex"),alphaCut:t.prop("alphaCut"),skin:t.prop("skin"),kind:t.prop("kind"),alphaScale:t.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow,boothLamp:()=>w&&!k?w.lamp:[0,0,0,0],court:()=>w||k?0:1,candle:()=>k?1:0},cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"one minus src alpha"}}}),ze=.3;for(let tt of Et)if(tt.uvBuf=t.buffer(tt.uv),/Body/.test(tt.m.name)){let Bt=[],Yt=[];for(let qt=0;qt<tt.idx.length;qt+=3){let Ee=tt.idx[qt],Xe=tt.idx[qt+1],We=tt.idx[qt+2];(tt.pos[Ee*3+1]<ze&&tt.pos[Xe*3+1]<ze&&tt.pos[We*3+1]<ze?Yt:Bt).push(Ee,Xe,We)}tt.el=t.elements({data:new Uint16Array(Bt),type:"uint16"}),Yt.length&&(tt.sockEl=t.elements({data:new Uint16Array(Yt),type:"uint16"}))}else tt.el=t.elements({data:tt.idx,type:"uint16"});let Qe=xt[q.Hips],ve=Ss([1,0,0],-Math.PI/2),He=ln(Ar([yi.x-Qe[12]*Gn,yi.hipY-Qe[14]*Gn,yi.z+Qe[13]*Gn],ve,[1,1,1]),Ar([0,0,0],[0,0,0,1],[Gn,Gn,Gn])),Fe=new Array($),ot=-1,W=(tt,Bt,Yt)=>ln(Ar([tt,0,Bt],Ss([0,1,0],Yt),[1,1,1]),Ar([0,0,0],[0,0,0,1],[Gn,Gn,Gn])),gt=["LeftFoot","RightFoot","LeftToeBase","RightToeBase"].map(tt=>q[tt]),Mt=gt.map(tt=>xt[tt][13]*Gn);function le(tt){if(s&&s.walk)return me(tt);let Bt=CS(tt.phase),Yt={},qt=Ge=>{for(let go in Ge){let Ve=Ge[go],et=y1(Ve[0],Ve[1],Ve[2]);Yt[go]=Yt[go]?u0(Yt[go],et):et}};qt(Bt.swing),qt(Bt.pose);let Ee=Math.cos(tt.heading),Xe=-Math.sin(tt.heading),We=W(tt.x+Ee*Bt.sway,tt.z+Xe*Bt.sway,tt.heading),Ce=new Array($);for(let Ge=0;Ge<$;Ge++){let go=B[Ge],Ve=kt[Ge],et=Yt[go.name];if(et){let mt=vt[Ge],J=u0(la(mt),u0(et,mt));Ve=Ar(go.t,u0(go.r,J),go.s)}Ce[Ge]=go.parent<0?ln(We,Ve):ln(Ce[go.parent],Ve)}let to=1/0;gt.forEach((Ge,go)=>{to=Math.min(to,Ce[Ge][13]-Mt[go])});for(let Ge=0;Ge<$;Ge++)Ce[Ge]=Ce[Ge].slice(),Ce[Ge][13]-=to,Fe[Ge]=ln(Ce[Ge],ct[Ge]);return{blink:0}}function me(tt){let Bt=s.walk,Yt=i(Bt,(tt.phase+Bt.phase0)*Bt.frames),qt=W(tt.x,tt.z,tt.heading),Ee=new Array($),Xe=q.Hips;for(let Ce=0;Ce<$;Ce++){let to=B[Ce],Ge=kt[Ce],go=Yt.q[to.name];if(go){let Ve=vt[Ce],et=u0(la(Ve),u0(go,Ve)),mt=Ce===Xe?[to.t[0]+Yt.hips[0],to.t[1]+Yt.hips[1],to.t[2]+Yt.hips[2]]:to.t;Ge=Ar(mt,u0(to.r,et),to.s)}Ee[Ce]=to.parent<0?ln(qt,Ge):ln(Ee[to.parent],Ge)}let We=1/0;gt.forEach((Ce,to)=>{We=Math.min(We,Ee[Ce][13]-Mt[to])});for(let Ce=0;Ce<$;Ce++)Ee[Ce]=Ee[Ce].slice(),Ee[Ce][13]-=We,Fe[Ce]=ln(Ee[Ce],ct[Ce]);return{blink:0}}function se(tt,Bt){let Yt=Math.sin(tt*2*Math.PI/4.6),qt=Math.sin(tt*.37)*.6+Math.sin(tt*.83+1)*.4,Ee={LeftUpLeg:[-86,-6,0],RightUpLeg:[-84,7,0],LeftLeg:[88,0,0],RightLeg:[82,0,0],LeftFoot:[-4,0,0],RightFoot:[-2,0,0],Spine:[6,0,0],Spine1:[5+Yt*.8,0,0],Spine2:[4+Yt*.6,0,0],Neck:[10,0,0],Head:[12+qt*2,qt*2.5,0],LeftArm:[0,0,-72],RightArm:[0,0,72],LeftForeArm:[0,-62,0],RightForeArm:[0,62,0],LeftHand:[0,0,-10],RightHand:[0,0,10]},Xe={};for(let Ve in Ee){let et=Ee[Ve];Xe[Ve]=y1(et[0],et[1],et[2])}let We=W(Bt.x,Bt.z,Bt.heading),Ce=new Array($);for(let Ve=0;Ve<$;Ve++){let et=B[Ve],mt=kt[Ve],J=Xe[et.name];if(J){let de=vt[Ve],ge=u0(la(de),u0(J,de));mt=Ar(et.t,u0(et.r,ge),et.s)}Ce[Ve]=et.parent<0?ln(We,mt):ln(Ce[et.parent],mt)}let Ge=Ce[q.Hips][13]-(Bt.y+.1);for(let Ve=0;Ve<$;Ve++)Ce[Ve]=Ce[Ve].slice(),Ce[Ve][13]-=Ge,Fe[Ve]=ln(Ce[Ve],ct[Ve]);let go=tt%4.1;return{blink:go<.16?Math.sin(go/.16*Math.PI):0}}let Ut=tt=>[xt[tt][12],xt[tt][13],xt[tt][14]],rt=(tt,Bt)=>{let Yt=xf(tt),qt=xf(za(Bt,ks(Yt,Jd(Bt,Yt)))),Ee=M1(Yt,qt);return Qd([Yt[0],Yt[1],Yt[2],0,qt[0],qt[1],qt[2],0,Ee[0],Ee[1],Ee[2],0,0,0,0,1])},Xt={};for(let tt of["Left","Right"]){let Bt=q[tt+"Arm"],Yt=q[tt+"ForeArm"],qt=q[tt+"Hand"],Ee=q[tt+"HandMiddle1"];Xt[tt]={a:Bt,f:Yt,h:qt,upper:w1(za(Ut(Yt),Ut(Bt)))*Gn,fore:w1(za(Ut(qt),Ut(Yt)))*Gn,dir0:xf(za(Ut(Yt),Ut(Bt))),qf0:rt(za(Ut(qt),Ut(Yt)),[0,1,0]),qh0:rt(za(Ut(Ee),Ut(qt)),[0,1,0])}}let ke={};for(let tt of["Left","Right"])ke[Xt[tt].a]={side:tt,part:0},ke[Xt[tt].f]={side:tt,part:1},ke[Xt[tt].h]={side:tt,part:2};function ae(tt,Bt,Yt){if(!tt||!tt.length)return{x:.5,lift:0,press:0,finger:1,busy:0};let qt=0,Ee=tt.length-1,Xe=-1;for(;qt<=Ee;){let Zt=qt+Ee>>1;tt[Zt].t<=Bt?(Xe=Zt,qt=Zt+1):Ee=Zt-1}let We=tt[tt.length-1],Ce=tt[0],to=Xe>=0?tt[Xe]:{t:We.t-Yt,x:We.x,w:We.w},Ge=Xe+1<tt.length?tt[Xe+1]:{t:Ce.t+Yt,x:Ce.x,w:Ce.w},go=Math.max(.05,Ge.t-to.t),Ve=Math.min(.14,go*.45),et=Math.max(0,Math.min(1,(Bt-to.t-Ve)/Math.max(go-Ve-.03,.02))),mt=et*et*(3-2*et),J=Bt-to.t,de=(.55+.45*to.w)*Math.exp(-J/.11),ge=Ge.t-Bt,St=ge<.05?(.55+.45*Ge.w)*(1-ge/.05):0;return{x:to.x+(Ge.x-to.x)*mt,lift:Math.sin(Math.PI*et)*Math.min(.05,.012+go*.03)*(go>2.5?.4:1),press:Math.max(de,St),finger:St>de?((Xe+1)*7+3)%4:(Math.max(Xe,0)*7+3)%4,busy:Math.exp(-J/.9)}}let Nt={lean:0,turn:0,nod:0,pedal:0,last:-1},$e=["Index","Middle","Ring","Pinky"];function S(tt){let Bt=o5.PLAY,Yt=Kx.cues,qt=Kx.time(),Ee=Yt&&Yt.dur||158,Xe={Left:ae(Yt&&Yt.left,qt,Ee),Right:ae(Yt&&Yt.right,qt,Ee)},We=.35;if(Yt&&Yt.level&&Yt.level.length){let Se=qt*8,Ue=Math.floor(Se)%Yt.level.length,$o=(Ue+1)%Yt.level.length;We=Yt.level[Ue]+(Yt.level[$o]-Yt.level[Ue])*(Se-Math.floor(Se))}let Ce=Nt.last<0?0:Math.min(.1,Math.max(0,tt-Nt.last));Nt.last=tt;let to=Se=>Math.min(1,Ce*Se);Nt.lean+=(We-Nt.lean)*to(1.2),Nt.turn+=(Xe.Right.busy-Xe.Left.busy-Nt.turn)*to(1.5),Nt.nod+=(Math.max(Xe.Right.press,Xe.Left.press*.7)-Nt.nod)*to(6),Nt.pedal+=((Xe.Left.busy>.35?1:.15)-Nt.pedal)*to(5);let Ge=Math.sin(tt*2*Math.PI/4.6),go=Math.sin(qt*.41)*.6+Math.sin(qt*.17+1)*.4,Ve={LeftUpLeg:[-80,-9,0],RightUpLeg:[-77,9,0],LeftLeg:[86,0,0],RightLeg:[64,0,0],LeftFoot:[-2,0,0],RightFoot:[12-10*Nt.pedal,0,0],Spine:[9+3.5*Nt.lean+go*1.6,Nt.turn*2.5,-Nt.turn*1.6],Spine1:[7+Ge*.8+2.5*Nt.lean,Nt.turn*2.5,-Nt.turn*1.2],Spine2:[6+Ge*.6+go*.8,Nt.turn*1.5,0],Neck:[13+3*Nt.lean,Nt.turn*3,0],Head:[15+Nt.nod*3.5+go*1.5,Nt.turn*5,go*1.5]};for(let Se of["Left","Right"]){let Ue=Se==="Left"?-1:1,$o=Xe[Se];$e.forEach((j,dt)=>{let jt=dt===$o.finger?$o.press:$o.press*.2;Ve[Se+"Hand"+j+"1"]=[0,0,Ue*(20+3*dt+20*jt)],Ve[Se+"Hand"+j+"2"]=[0,0,Ue*(26+4*dt-6*jt)],Ve[Se+"Hand"+j+"3"]=[0,0,Ue*14]}),Ve[Se+"HandThumb1"]=[0,Ue*-18,Ue*10]}let et={};for(let Se in Ve){let Ue=Ve[Se];et[Se]=y1(Ue[0],Ue[1],Ue[2])}let mt=xt[q.Hips][13]*Gn,J=ln(Ar([Bt.stoolX,Bt.stoolTop+.1-mt,Bt.stoolFront+.15],Ss([0,1,0],Bt.heading),[1,1,1]),Ar([0,0,0],[0,0,0,1],[Gn,Gn,Gn])),de=(Bt.keyX0+Bt.keyX1)/2,ge={};for(let Se of["Left","Right"]){let Ue=Xe[Se],$o=Se==="Left"?de-.4+.33*Ue.x:de+.07+.33*Ue.x;ge[Se]=[$o,Bt.keyTop+.062+Ue.lift-Ue.press*.012,Bt.keyFront+.075]}let St=new Array($),Zt={},Ye=[0,1,0];for(let Se=0;Se<$;Se++){let Ue=B[Se],$o=kt[Se],j=et[Ue.name],dt=ke[Se];if(dt){let jt=Xt[dt.side];if(dt.part===0){let te=St[Ue.parent],Kt=ln(te,kt[Se]),Mo=[Kt[12],Kt[13],Kt[14]],xo=u0(Qd(te),la(vt[Ue.parent])),Po=za(ge[dt.side],Mo),co=w1(Po),ko=(jt.upper+jt.fore)*.995;co>ko&&(Po=ks(Po,ko/co),co=ko);let oo=ks(Po,1/co),De=(jt.upper*jt.upper-jt.fore*jt.fore+co*co)/(2*co),p0=Math.sqrt(Math.max(0,jt.upper*jt.upper-De*De)),zo=[dt.side==="Left"?-.6:.6,-.8,.3];zo=xf(za(zo,ks(oo,Jd(zo,oo))));let J0=yf(Mo,yf(ks(oo,De),ks(zo,p0)));jt.T=yf(Mo,Po),jt.elbow=J0;let rr=xf(za(J0,Mo)),ar=u0(RS(OS(xo,jt.dir0),rr),xo);Zt[Se]=ar,j=u0(la(xo),ar)}else if(dt.part===1){let te=u0(rt(za(jt.T,jt.elbow),Ye),la(jt.qf0));Zt[Se]=te,j=u0(la(Zt[Ue.parent]),te)}else{let te=Xe[dt.side],Kt=u0(rt([dt.side==="Left"?.12:-.12,-.2-.1*te.press,-1],Ye),la(jt.qh0));Zt[Se]=Kt,j=u0(la(Zt[Ue.parent]),Kt)}}if(j){let jt=vt[Se],te=u0(la(jt),u0(j,jt));$o=Ar(Ue.t,u0(Ue.r,te),Ue.s)}St[Se]=Ue.parent<0?ln(J,$o):ln(St[Ue.parent],$o)}for(let Se=0;Se<$;Se++)Fe[Se]=ln(St[Se],ct[Se]);a.pianist={head:[St[q.Head][12],St[q.Head][13],St[q.Head][14]]};let eo=tt%4.3;return{blink:eo<.16?Math.sin(eo/.16*Math.PI):0}}function qe(tt,Bt){if(k)return S(tt);if(w)return se(tt,w);if(Bt)return le(Bt);let Yt=Math.sin(tt*2*Math.PI/4.2),qt=tt%3.7,Ee=qt<.16?Math.sin(qt/.16*Math.PI):0,Xe=Math.sin(tt*.45),We=Math.sin(tt*.31+.8),Ce=Math.max(0,Math.sin(tt*.085)-.75)*4,to={RightArm:[0,-22*Ce,11*Xe],RightForeArm:[0,8+26*Ce,0],RightHand:[38*We,0,6*Math.sin(tt*.7)],LeftUpLeg:[0,0,3.2*Math.sin(tt*.36)],RightFoot:[5*Math.sin(tt*.52+.4),0,0],Head:[0,1.6*Math.sin(tt*.21),0]};["Index","Middle","Ring","Pinky"].forEach((J,de)=>{let ge=Math.sin(tt*1.1-de*.5);to["RightHand"+J+"1"]=[0,0,8+12*ge],to["RightHand"+J+"2"]=[0,0,6+10*ge]});let Ge={},go=(J,de)=>{for(let ge in J){let St=J[ge],Zt=y1(St[0]*de,St[1]*de,St[2]*de);Ge[ge]=Ge[ge]?u0(Ge[ge],Zt):Zt}};go(_1,1),go({Spine1:[Yt*.8,0,0],Spine2:[Yt*.6,0,0]},1),go(to,1);let Ve=new Array($),et=new Array($);for(let J=0;J<$;J++){let de=B[J],ge=kt[J],St=Ge[de.name];if(St){let Zt=vt[J],Ye=u0(la(Zt),u0(St,Zt));ge=Ar(de.t,u0(de.r,Ye),de.s)}Ve[J]=de.parent<0?ln(He,ge):ln(Ve[de.parent],ge),et[J]=null}for(let J=0;J<$;J++)Fe[J]=ln(Ve[J],ct[J]);let mt=J=>[J[12],J[13],J[14]];return a.headPos=mt(Ve[q.Head]),a.hipsPos=mt(Ve[q.Hips]),a.headM=Ve[q.Head],{blink:Ee}}function je(tt,Bt){let{pos:Yt,nrm:qt,jnt:Ee,wgt:Xe,outP:We,outN:Ce,work:to,m:Ge}=tt,go=Ge.n,Ve=Yt;if(Bt){to.set(Yt);for(let et in tt.morphs){let mt=Bt[et]||0;if(mt<=0)continue;let J=tt.morphs[et];for(let de=0;de<J.idx.length;de++){let ge=J.idx[de]*3;to[ge]+=J.d[de*3]*mt,to[ge+1]+=J.d[de*3+1]*mt,to[ge+2]+=J.d[de*3+2]*mt}}Ve=to}for(let et=0;et<go;et++){let mt=Ve[et*3],J=Ve[et*3+1],de=Ve[et*3+2],ge=qt[et*3],St=qt[et*3+1],Zt=qt[et*3+2],Ye=0,eo=0,Se=0,Ue=0,$o=0,j=0;for(let jt=0;jt<4;jt++){let te=Xe[et*4+jt];if(te===0)continue;let Kt=Fe[Ee[et*4+jt]];Ye+=te*(Kt[0]*mt+Kt[4]*J+Kt[8]*de+Kt[12]),eo+=te*(Kt[1]*mt+Kt[5]*J+Kt[9]*de+Kt[13]),Se+=te*(Kt[2]*mt+Kt[6]*J+Kt[10]*de+Kt[14]),Ue+=te*(Kt[0]*ge+Kt[4]*St+Kt[8]*Zt),$o+=te*(Kt[1]*ge+Kt[5]*St+Kt[9]*Zt),j+=te*(Kt[2]*ge+Kt[6]*St+Kt[10]*Zt)}We[et*3]=Ye,We[et*3+1]=eo,We[et*3+2]=Se;let dt=Math.hypot(Ue,$o,j)||1;Ce[et*3]=Ue/dt,Ce[et*3+1]=$o/dt,Ce[et*3+2]=j/dt}Ge.grid&&!Oo&&!w&&!k&&lo(tt),tt.sway&&Q0(tt),tt.pb.subdata(We),tt.nbuf.subdata(Ce)}function lo(tt){let[Bt,Yt]=tt.m.grid,qt=tt.outP,Ee=tt.outN,Xe=t5.seat+.012;for(let We=1;We<Bt;We++){let Ce=Math.pow(1-We/(Bt-1),1.5);for(let to=0;to<Yt;to++){let Ge=(We*Yt+to)*3;qt[Ge+1]>Xe?qt[Ge+1]=Xe+(qt[Ge+1]-Xe)*Math.max(Ce,.15):qt[Ge+1]=Xe}}for(let We=0;We<Ee.length;We+=3)Ee[We]=0,Ee[We+1]=1,Ee[We+2]=0}let Oo=!1,_o=(tt,Bt,Yt,qt,Ee)=>({bone:q[tt],rate:Bt,damp:Yt,drag:qt,most:Ee,x:[0,0,0],v:[0,0,0],p:null,vel:[0,0,0]}),Fo={head:_o("Head",15,.32,.012,.035),chest:_o("Spine2",9,.38,.03,.1),hips:_o("Hips",7,.42,.045,.16)},qo=-1;function a0(tt){let Bt=qo<0?0:tt-qo;qo=tt;for(let Yt in Fo){let qt=Fo[Yt],Ee=Fe[qt.bone],Xe=xt[qt.bone],We=Xe[12],Ce=Xe[13],to=Xe[14],Ge=[Ee[0]*We+Ee[4]*Ce+Ee[8]*to+Ee[12],Ee[1]*We+Ee[5]*Ce+Ee[9]*to+Ee[13],Ee[2]*We+Ee[6]*Ce+Ee[10]*to+Ee[14]];if(!qt.p||!(Bt>0)||Bt>.25||Math.hypot(Ge[0]-qt.p[0],Ge[1]-qt.p[1],Ge[2]-qt.p[2])>.5){qt.p=Ge,qt.x=[0,0,0],qt.v=[0,0,0],qt.vel=[0,0,0];continue}let go=[(Ge[0]-qt.p[0])/Bt,(Ge[1]-qt.p[1])/Bt,(Ge[2]-qt.p[2])/Bt],Ve=Math.max(1,Math.ceil(Bt/.016)),et=Bt/Ve;for(let J=0;J<3;J++){let de=Math.max(-30,Math.min(30,(go[J]-qt.vel[J])/Bt)),ge=-go[J]*qt.drag;for(let St=0;St<Ve;St++)qt.v[J]+=((ge-qt.x[J])*qt.rate*qt.rate-2*qt.damp*qt.rate*qt.v[J]-de)*et,qt.x[J]+=qt.v[J]*et}let mt=Math.hypot(qt.x[0],qt.x[1],qt.x[2]);if(mt>qt.most){let J=qt.most/mt;qt.x=[qt.x[0]*J,qt.x[1]*J,qt.x[2]*J]}qt.p=Ge,qt.vel=go}}for(let tt of Et){let Bt=tt.m,Yt=Bt.n,qt=null,Ee=null;if(Bt.kind===9){Ee="head",qt=new Float32Array(Yt);for(let Xe=0;Xe<Yt;Xe++){let We=tt.uv[Xe*2]<-.5?0:tt.uv[Xe*2+1];qt[Xe]=We*We}}else if(Bt.name==="scarf"){Ee="chest",qt=new Float32Array(Yt);for(let Xe=0;Xe<Yt;Xe++)qt[Xe]=l(1.52,1.12,tt.pos[Xe*3+1])}else if(Bt.grid){Ee="hips",qt=new Float32Array(Yt);let Xe=Bt.grid[0],We=Bt.grid[1];for(let Ce=0;Ce<Yt;Ce++)qt[Ce]=Math.pow(Math.floor(Ce/We)/(Xe-1),1.6)}qt&&(tt.sway=qt,tt.spring=Fo[Ee],tt.loose=Ee)}function Q0(tt){if(!Oo&&!k&&!w)return;let Bt=tt.spring.x,Yt=tt.sway,qt=tt.outP;if(!(Math.abs(Bt[0])+Math.abs(Bt[1])+Math.abs(Bt[2])<1e-5))for(let Ee=0,Xe=Yt.length;Ee<Xe;Ee++){let We=Yt[Ee];We>0&&(qt[Ee*3]+=Bt[0]*We,qt[Ee*3+1]+=Bt[1]*We,qt[Ee*3+2]+=Bt[2]*We)}}function br(tt,Bt){Oo=!!Bt;let Yt=qe(tt,Bt);a0(tt);let qt={eyeBlinkLeft:Yt.blink,eyeBlinkRight:Yt.blink};for(let Ee of Et)je(Ee,Object.keys(Ee.morphs).length?qt:null);a.pose=Yt}return{parts:Et,update:br,drawOpaque:Pt,drawBlend:ne,state:a}}function l(z,P,R){let B=Math.min(1,Math.max(0,(R-z)/(P-z)));return B*B*(3-2*B)}let v=PS(),d=IS(),p=d?t.texture({data:d,flipY:!1,min:"linear",mag:"linear"}):c,u=t({vert:qS,frag:DS,attributes:{position:v.pos,normal:v.nrm,uv:v.uv,kind:v.kind},elements:new Uint16Array(v.idx),uniforms:{model:t.prop("model"),turn:0,fold:1.12,cover:p},cull:{enable:!1}}),h=FS(),g=t({vert:GS,frag:HS,attributes:{position:h.pos,normal:h.nrm,color:h.col,mat:h.mat},elements:new Uint16Array(h.idx),uniforms:{model:t.prop("model"),pulse:t.prop("pulse")},cull:{enable:!1}}),m=t({vert:US,frag:BS,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{center:t.prop("center"),size:t.prop("size"),pulse:t.prop("pulse")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});function y(z){let P=z.headM,R=Et=>{let Pt=Math.hypot(...Et)||1;return Et.map(ne=>ne/Pt)},B=R([P[4],P[5],P[6]]),$=R([P[8],P[9],P[10]]),q=B,ct=$.map(Et=>-Et),kt=[ct[1]*q[2]-ct[2]*q[1],ct[2]*q[0]-ct[0]*q[2],ct[0]*q[1]-ct[1]*q[0]],xt=z.headPos,vt=[0,1,2].map(Et=>xt[Et]+B[Et]*.06+$[Et]*.185);return[kt[0],kt[1],kt[2],0,ct[0],ct[1],ct[2],0,q[0],q[1],q[2],0,vt[0],vt[1],vt[2],1]}let x=-1,_="",M=null,w=null,k=!1;function E(z){if(!o)return;let P=(Yx.motion,n()),R=M?[M.x,M.z,M.heading,M.phase].map($=>$.toFixed(4)).join():"";(w||k||R!==_||!M&&Math.abs(P-x)>(Yx.isPhone?1/30:0))&&(o.update(P,M),x=P,_=R);for(let $ of o.parts)$.blend||(o.drawOpaque({pb:$.pb,nb:$.nbuf,uv:$.uvBuf,el:$.el,tex:$.tex,alphaCut:$.alphaCut,skin:$.skin,kind:$.kind,alphaScale:$.alphaScale}),$.sockEl&&o.drawOpaque({pb:$.pb,nb:$.nbuf,uv:$.uvBuf,el:$.sockEl,tex:c,alphaCut:0,skin:0,kind:8,alphaScale:1}));let B=o.state;if(B.headM&&!M&&!w&&!k){u({model:y(B)});let $=B.headPos,q=Math.sin(P*1.3)*.02,ct=[$[0],$[1]+.62+q,$[2]+.05],kt=P*.6,xt=Ar(ct,u0(Ss([0,1,0],kt),Ss([0,0,1],.18)),[1.2,1.2,1.2]),vt=.5+.5*Math.sin(P*2);g({model:xt,pulse:vt}),a.glowPos=ct,a.glow=.06+.03*vt,m({center:[ct[0],ct[1]-.12,ct[2]],size:.1,pulse:vt})}for(let $ of o.parts)$.blend&&o.drawBlend({pb:$.pb,nb:$.nbuf,uv:$.uvBuf,el:$.el,tex:$.tex,alphaCut:$.alphaCut,skin:$.skin,kind:$.kind,alphaScale:$.alphaScale})}return E.state=a,E.place=yi,E.setWalk=z=>{M=z||null,M&&(a.glow=0)},E.setSeat=z=>{w=z||null,a.glow=w?0:a.glow,x=-1},E.setPiano=z=>{z=!!z,z!==k&&(k=z,k&&(a.glow=0),x=-1)},E};op.exports.PLACE=yi});var np=Tt((qA,a5)=>{"use strict";a5.exports={name:"Muzammil",title:"Hi, I\u2019m Muzammil.",text:`I\u2019m a self-taught artist. I paint emotions. Grief, longing, love, and the quiet ways we keep holding on. I borrow the light and stillness of the Renaissance to talk about very modern feelings.

This gallery is my portfolio, built brick by pixel, so my work has a home that never closes. Every painting comes with a few words, because some feelings need both a frame and a sentence.

You\u2019ll find me in the tree court, catching sunlight and trying not to get too absorbed. Wander the halls, stay as long as you like, and don\u2019t worry about the time. In here, the only thing that\u2019s drying is the paint.`}});var ap=Tt((DA,h5)=>{"use strict";var l5=qr(),s5=Nl(),zs=t=>String(t).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function rp(){return l5.isPhone||!window.matchMedia||!window.matchMedia("(pointer: fine)").matches?!1:window.innerWidth>=900&&window.innerHeight>=520}var jS=`
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
`,i5=!1;function f5(){if(i5)return;i5=!0;let t=document.createElement("style");t.textContent=jS,document.head.appendChild(t)}var WS='<svg class="visit-play" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="10.2"/><path d="M10 8.4l6 3.6-6 3.6z" fill="currentColor" stroke="none"/></svg>';function VS(t){return!t||!t.visit||!rp()?"":(f5(),`<button type="button" class="visit-btn" data-visit="${zs(t.slug||"")}" aria-label="Visit what remained: watch ${zs(t.title)} come to life">${WS}<span>Visit what remained</span></button>`)}function XS(t){let e=t.getContext("2d");t.width=t.height=160;let o=e.createImageData(160,160),r=!0,n=0;return function a(s){if(r){if(s-n>70){n=s;let i=o.data;for(let c=0;c<i.length;c+=4){let f=Math.random()*255;i[c]=i[c+1]=i[c+2]=f,i[c+3]=255}e.putImageData(o,0,0),t.style.transform=`translate(${(Math.random()*6-3).toFixed(1)}%, ${(Math.random()*6-3).toFixed(1)}%)`}requestAnimationFrame(a)}}(0),()=>{r=!1}}var bf=null;function YS(t){if(bf||!t||!t.visit)return;f5();let e=document.activeElement;document.body.classList.add("visiting");let o="images/web/"+t.slug+(l5.isPhone?"-1024":"")+".webp",r=document.createElement("div");r.className="visit",r.setAttribute("role","dialog"),r.setAttribute("aria-modal","true"),r.setAttribute("aria-label","Visiting "+t.title),r.innerHTML=`
		<video muted playsinline preload="auto" ${t.visit.poster?`poster="${zs(t.visit.poster)}"`:""}></video>
		<img class="visit-art" alt="${zs(t.title)}, ${zs(s5(t))}" src="${zs(o)}">
		<canvas class="visit-grain" aria-hidden="true"></canvas>
		<div class="visit-vignette" aria-hidden="true"></div>
		<div class="visit-bar top" aria-hidden="true"></div>
		<div class="visit-bar bottom" aria-hidden="true"></div>
		<div class="visit-title">
			<span class="visit-kicker">A visit</span>
			<span class="visit-name">${zs(t.title)}</span>
			<span class="visit-meta">${zs(s5(t))}</span>
		</div>
		<button type="button" class="visit-close" aria-label="Return to the gallery">\xD7</button>
		<button type="button" class="visit-skip">Skip</button>
		<div class="visit-end">
			<button type="button" class="primary" data-act="back">Return to the gallery</button>
			<button type="button" data-act="again">Watch again</button>
		</div>`,document.body.appendChild(r);let n=r.querySelector("video"),a=r.querySelector(".visit-title"),s=XS(r.querySelector(".visit-grain")),i=[],c=(g,m)=>i.push(setTimeout(g,m)),f=g=>g.stopPropagation();["mousedown","pointerdown","click","wheel","touchstart","touchmove"].forEach(g=>r.addEventListener(g,f));let l=g=>{g.key==="Escape"?(g.preventDefault(),h()):g.key===" "&&!(g.target&&g.target.tagName==="BUTTON")&&(g.preventDefault(),p()),g.stopImmediatePropagation()};window.addEventListener("keydown",l,!0);let v=g=>g.stopImmediatePropagation();window.addEventListener("keyup",v,!0);let d=!1;function p(){d||(d=!0,a.classList.add("on"),r.classList.add("resolved"),c(()=>{let g=r.querySelector('[data-act="back"]');g&&g.focus({preventScroll:!0})},1300))}function u(){d=!1,r.classList.remove("resolved"),a.classList.remove("on");try{n.currentTime=0}catch(m){}let g=n.play();g&&g.catch&&g.catch(()=>p()),r.classList.add("playing"),c(()=>{d||a.classList.add("on")},1600),c(()=>{d||a.classList.remove("on")},6200)}n.addEventListener("timeupdate",()=>{n.duration&&n.currentTime>n.duration-1.2&&p()}),n.addEventListener("ended",p),n.addEventListener("error",p);function h(){if(bf){bf=null,i.forEach(clearTimeout),r.classList.remove("on");try{n.pause()}catch(g){}window.removeEventListener("keydown",l,!0),window.removeEventListener("keyup",v,!0),document.body.classList.remove("visiting"),setTimeout(()=>{s(),r.remove(),e&&e.focus&&e.focus({preventScroll:!0})},1150)}}r.querySelector(".visit-close").addEventListener("click",h),r.querySelector(".visit-skip").addEventListener("click",()=>{try{n.pause()}catch(g){}p()}),r.querySelector(".visit-end").addEventListener("click",g=>{let m=g.target.closest("button");m&&(m.dataset.act==="back"&&h(),m.dataset.act==="again"&&(i.forEach(clearTimeout),u()))}),n.src=t.visit.video,bf={close:h},requestAnimationFrame(()=>{r.classList.add("on"),c(u,1300)})}var c5={};function KS(t){if(!t||!t.visit||c5[t.visit.video]||!rp())return;c5[t.visit.video]=!0;let e=document.createElement("link");e.rel="preload",e.as="video",e.href=t.visit.video,document.head.appendChild(e)}h5.exports={available:rp,button:VS,open:YS,warm:KS,get active(){return!!bf}}});var p5=Tt((FA,d5)=>{"use strict";var ZS=qr(),Gc=[0,0],Ic=[0,0],Xa=null,ip=0;if(typeof window!="undefined"){window.addEventListener("pointermove",e=>{e.pointerType!=="touch"&&(Gc[0]=Math.max(-1,Math.min(1,e.clientX/window.innerWidth*2-1)),Gc[1]=Math.max(-1,Math.min(1,e.clientY/window.innerHeight*2-1)),ip=performance.now())},{passive:!0});let t=()=>{ip=performance.now()};["wheel","touchstart","touchmove","keydown","pointerdown"].forEach(e=>window.addEventListener(e,t,{passive:!0,capture:!0})),window.addEventListener("deviceorientation",e=>{e.gamma===null||e.beta===null||(Xa||(Xa=[e.gamma,e.beta]),Xa[0]+=(e.gamma-Xa[0])*.01,Xa[1]+=(e.beta-Xa[1])*.01,Gc[0]=Math.max(-1,Math.min(1,(e.gamma-Xa[0])/14)),Gc[1]=Math.max(-1,Math.min(1,(e.beta-Xa[1])/14)))},{passive:!0})}var u5=0,qc=null,S1=null,Ea=[0,0,0],sp=0,Dc=null,Fc=0,bi={eye:[0,0,0],target:[0,0,0],fov:50,roll:0},QS={apply(t,e){let o=Math.min(.1,Math.max(0,e-u5));u5=e;let r=t.eye,n=t.target,a=[n[0]-r[0],n[1]-r[1],n[2]-r[2]],s=Math.hypot(a[0],a[1],a[2])||1;a=[a[0]/s,a[1]/s,a[2]/s];let i=[-a[2],0,a[0]],c=Math.hypot(i[0],i[2])||1;i=[i[0]/c,0,i[2]/c];let f=[i[1]*a[2]-i[2]*a[1],i[2]*a[0]-i[0]*a[2],i[0]*a[1]-i[1]*a[0]],l=!qc;if(qc&&o>0){let x=[r[0]-qc[0],r[1]-qc[1],r[2]-qc[2]],_=Math.hypot(x[0],x[1],x[2]);if(_>2.5)l=!0;else{let w=Math.min(1,o*5);for(let k=0;k<3;k++)Ea[k]+=(x[k]/o-Ea[k])*w}let M=Math.hypot(n[0]-S1[0],n[1]-S1[1],n[2]-S1[2]);Fc=_/o<.12&&M/o<.2?Fc+o:0}l&&(Ea[0]=Ea[1]=Ea[2]=0,Fc=0),qc=r.slice(),S1=n.slice(),sp=Math.hypot(Ea[0],Ea[1],Ea[2]);let v=Math.min(1,o*2.6);Ic[0]+=(Gc[0]-Ic[0])*v,Ic[1]+=(Gc[1]-Ic[1])*v;let d=Math.max(.03,Math.min(.32,s*.05)),p=(ZS.isPhone&&!Xa?1.5:1)*Math.min(1,Fc/2.5),u=(Math.sin(e*.131)*.55+Math.sin(e*.071+1.3)*.45)*d*.55*p,h=Math.sin(e*.097+.6)*d*.16*p,g=Ic[0]*d+u,m=-Ic[1]*d*.45+h;for(let x=0;x<3;x++)bi.eye[x]=r[x]+i[x]*g+f[x]*m,bi.target[x]=n[x]+(i[x]*g+f[x]*m)*.12;r[1]>.05&&(bi.eye[1]=Math.max(.05,bi.eye[1]));let y=Ea[0]*i[0]+Ea[2]*i[2];return bi.fov=t.fov+Math.min(3.5,sp*.55),bi.roll=(t.roll||0)+Math.max(-.035,Math.min(.035,-y*.006)),bi},pull(t,e){(Dc===null||!(Math.abs(t.focus-Dc)<40))&&(Dc=t.focus);let o=1/60;Dc+=(t.focus-Dc)*Math.min(1,o*3.2),t.focus=Dc,t.aperture>0&&(t.aperture*=1+.25*Math.min(1,Fc/3))},get speed(){return sp},get resting(){return Fc>2&&performance.now()-ip>2e3}};d5.exports=QS});var cp=Tt((GA,v5)=>{v5.exports=1e-6});var lp=Tt((HA,m5)=>{m5.exports=JS;function JS(){var t=new Float32Array(3);return t[0]=0,t[1]=0,t[2]=0,t}});var x5=Tt((UA,g5)=>{g5.exports=tz;function tz(t){var e=new Float32Array(3);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}});var fp=Tt((BA,y5)=>{y5.exports=ez;function ez(t,e,o){var r=new Float32Array(3);return r[0]=t,r[1]=e,r[2]=o,r}});var hp=Tt((jA,b5)=>{b5.exports=oz;function oz(t,e){var o=e[0],r=e[1],n=e[2],a=o*o+r*r+n*n;return a>0&&(a=1/Math.sqrt(a),t[0]=e[0]*a,t[1]=e[1]*a,t[2]=e[2]*a),t}});var up=Tt((WA,w5)=>{w5.exports=nz;function nz(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}});var S5=Tt((VA,k5)=>{k5.exports=az;var _5=fp(),M5=hp(),rz=up();function az(t,e){var o=_5(t[0],t[1],t[2]),r=_5(e[0],e[1],e[2]);M5(o,o),M5(r,r);var n=rz(o,r);return n>1?0:Math.acos(n)}});var E5=Tt((XA,z5)=>{z5.exports=sz;function sz(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}});var T5=Tt((YA,A5)=>{A5.exports=iz;function iz(t,e,o,r){return t[0]=e,t[1]=o,t[2]=r,t}});var N5=Tt((KA,L5)=>{L5.exports=cz;var dp=cp();function cz(t,e){var o=t[0],r=t[1],n=t[2],a=e[0],s=e[1],i=e[2];return Math.abs(o-a)<=dp*Math.max(1,Math.abs(o),Math.abs(a))&&Math.abs(r-s)<=dp*Math.max(1,Math.abs(r),Math.abs(s))&&Math.abs(n-i)<=dp*Math.max(1,Math.abs(n),Math.abs(i))}});var R5=Tt((ZA,O5)=>{O5.exports=lz;function lz(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]}});var $5=Tt((QA,C5)=>{C5.exports=fz;function fz(t,e,o){return t[0]=e[0]+o[0],t[1]=e[1]+o[1],t[2]=e[2]+o[2],t}});var pp=Tt((JA,P5)=>{P5.exports=hz;function hz(t,e,o){return t[0]=e[0]-o[0],t[1]=e[1]-o[1],t[2]=e[2]-o[2],t}});var q5=Tt((tT,I5)=>{I5.exports=pp()});var vp=Tt((eT,D5)=>{D5.exports=uz;function uz(t,e,o){return t[0]=e[0]*o[0],t[1]=e[1]*o[1],t[2]=e[2]*o[2],t}});var G5=Tt((oT,F5)=>{F5.exports=vp()});var mp=Tt((nT,H5)=>{H5.exports=dz;function dz(t,e,o){return t[0]=e[0]/o[0],t[1]=e[1]/o[1],t[2]=e[2]/o[2],t}});var B5=Tt((rT,U5)=>{U5.exports=mp()});var W5=Tt((aT,j5)=>{j5.exports=pz;function pz(t,e,o){return t[0]=Math.min(e[0],o[0]),t[1]=Math.min(e[1],o[1]),t[2]=Math.min(e[2],o[2]),t}});var X5=Tt((sT,V5)=>{V5.exports=vz;function vz(t,e,o){return t[0]=Math.max(e[0],o[0]),t[1]=Math.max(e[1],o[1]),t[2]=Math.max(e[2],o[2]),t}});var K5=Tt((iT,Y5)=>{Y5.exports=mz;function mz(t,e){return t[0]=Math.floor(e[0]),t[1]=Math.floor(e[1]),t[2]=Math.floor(e[2]),t}});var Q5=Tt((cT,Z5)=>{Z5.exports=gz;function gz(t,e){return t[0]=Math.ceil(e[0]),t[1]=Math.ceil(e[1]),t[2]=Math.ceil(e[2]),t}});var ty=Tt((lT,J5)=>{J5.exports=xz;function xz(t,e){return t[0]=Math.round(e[0]),t[1]=Math.round(e[1]),t[2]=Math.round(e[2]),t}});var oy=Tt((fT,ey)=>{ey.exports=yz;function yz(t,e,o){return t[0]=e[0]*o,t[1]=e[1]*o,t[2]=e[2]*o,t}});var ry=Tt((hT,ny)=>{ny.exports=bz;function bz(t,e,o,r){return t[0]=e[0]+o[0]*r,t[1]=e[1]+o[1]*r,t[2]=e[2]+o[2]*r,t}});var gp=Tt((uT,ay)=>{ay.exports=wz;function wz(t,e){var o=e[0]-t[0],r=e[1]-t[1],n=e[2]-t[2];return Math.sqrt(o*o+r*r+n*n)}});var iy=Tt((dT,sy)=>{sy.exports=gp()});var xp=Tt((pT,cy)=>{cy.exports=_z;function _z(t,e){var o=e[0]-t[0],r=e[1]-t[1],n=e[2]-t[2];return o*o+r*r+n*n}});var fy=Tt((vT,ly)=>{ly.exports=xp()});var yp=Tt((mT,hy)=>{hy.exports=Mz;function Mz(t){var e=t[0],o=t[1],r=t[2];return Math.sqrt(e*e+o*o+r*r)}});var dy=Tt((gT,uy)=>{uy.exports=yp()});var bp=Tt((xT,py)=>{py.exports=kz;function kz(t){var e=t[0],o=t[1],r=t[2];return e*e+o*o+r*r}});var my=Tt((yT,vy)=>{vy.exports=bp()});var xy=Tt((bT,gy)=>{gy.exports=Sz;function Sz(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t}});var by=Tt((wT,yy)=>{yy.exports=zz;function zz(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t}});var _y=Tt((_T,wy)=>{wy.exports=Ez;function Ez(t,e,o){var r=e[0],n=e[1],a=e[2],s=o[0],i=o[1],c=o[2];return t[0]=n*c-a*i,t[1]=a*s-r*c,t[2]=r*i-n*s,t}});var ky=Tt((MT,My)=>{My.exports=Az;function Az(t,e,o,r){var n=e[0],a=e[1],s=e[2];return t[0]=n+r*(o[0]-n),t[1]=a+r*(o[1]-a),t[2]=s+r*(o[2]-s),t}});var zy=Tt((kT,Sy)=>{Sy.exports=Tz;function Tz(t,e){e=e||1;var o=Math.random()*2*Math.PI,r=Math.random()*2-1,n=Math.sqrt(1-r*r)*e;return t[0]=Math.cos(o)*n,t[1]=Math.sin(o)*n,t[2]=r*e,t}});var Ay=Tt((ST,Ey)=>{Ey.exports=Lz;function Lz(t,e,o){var r=e[0],n=e[1],a=e[2],s=o[3]*r+o[7]*n+o[11]*a+o[15];return s=s||1,t[0]=(o[0]*r+o[4]*n+o[8]*a+o[12])/s,t[1]=(o[1]*r+o[5]*n+o[9]*a+o[13])/s,t[2]=(o[2]*r+o[6]*n+o[10]*a+o[14])/s,t}});var Ly=Tt((zT,Ty)=>{Ty.exports=Nz;function Nz(t,e,o){var r=e[0],n=e[1],a=e[2];return t[0]=r*o[0]+n*o[3]+a*o[6],t[1]=r*o[1]+n*o[4]+a*o[7],t[2]=r*o[2]+n*o[5]+a*o[8],t}});var Oy=Tt((ET,Ny)=>{Ny.exports=Oz;function Oz(t,e,o){var r=e[0],n=e[1],a=e[2],s=o[0],i=o[1],c=o[2],f=o[3],l=f*r+i*a-c*n,v=f*n+c*r-s*a,d=f*a+s*n-i*r,p=-s*r-i*n-c*a;return t[0]=l*f+p*-s+v*-c-d*-i,t[1]=v*f+p*-i+d*-s-l*-c,t[2]=d*f+p*-c+l*-i-v*-s,t}});var Cy=Tt((AT,Ry)=>{Ry.exports=Rz;function Rz(t,e,o,r){var n=o[1],a=o[2],s=e[1]-n,i=e[2]-a,c=Math.sin(r),f=Math.cos(r);return t[0]=e[0],t[1]=n+s*f-i*c,t[2]=a+s*c+i*f,t}});var Py=Tt((TT,$y)=>{$y.exports=Cz;function Cz(t,e,o,r){var n=o[0],a=o[2],s=e[0]-n,i=e[2]-a,c=Math.sin(r),f=Math.cos(r);return t[0]=n+i*c+s*f,t[1]=e[1],t[2]=a+i*f-s*c,t}});var qy=Tt((LT,Iy)=>{Iy.exports=$z;function $z(t,e,o,r){var n=o[0],a=o[1],s=e[0]-n,i=e[1]-a,c=Math.sin(r),f=Math.cos(r);return t[0]=n+s*f-i*c,t[1]=a+s*c+i*f,t[2]=e[2],t}});var Fy=Tt((NT,Dy)=>{Dy.exports=Pz;var Es=lp()();function Pz(t,e,o,r,n,a){var s,i;for(e||(e=3),o||(o=0),r?i=Math.min(r*e+o,t.length):i=t.length,s=o;s<i;s+=e)Es[0]=t[s],Es[1]=t[s+1],Es[2]=t[s+2],n(Es,Es,a),t[s]=Es[0],t[s+1]=Es[1],t[s+2]=Es[2];return t}});var Hy=Tt((OT,Gy)=>{Gy.exports={EPSILON:cp(),create:lp(),clone:x5(),angle:S5(),fromValues:fp(),copy:E5(),set:T5(),equals:N5(),exactEquals:R5(),add:$5(),subtract:pp(),sub:q5(),multiply:vp(),mul:G5(),divide:mp(),div:B5(),min:W5(),max:X5(),floor:K5(),ceil:Q5(),round:ty(),scale:oy(),scaleAndAdd:ry(),distance:gp(),dist:iy(),squaredDistance:xp(),sqrDist:fy(),length:yp(),len:dy(),squaredLength:bp(),sqrLen:my(),negate:xy(),inverse:by(),normalize:hp(),dot:up(),cross:_y(),lerp:ky(),random:zy(),transformMat4:Ay(),transformMat3:Ly(),transformQuat:Oy(),rotateX:Cy(),rotateY:Py(),rotateZ:qy(),forEach:Fy()}});var jy=Tt((RT,By)=>{"use strict";function Uy(){let t={};return{on(e,o){return(t[e]=t[e]||[]).push(o),this},emit(e,o){(t[e]||[]).slice().forEach(r=>r(o))}}}By.exports=function(e){let o=e.ownerDocument||document,r=Uy(),n=null,a={dx:0,dy:0,dt:0},s=0,i=()=>o.pointerLockElement||o.webkitPointerLockElement||null,c=()=>{if(i())return;let l=e.requestPointerLock||e.webkitRequestPointerLock;if(l)try{let v=l.call(e);v&&v.catch&&v.catch(()=>{})}catch(v){}};e.addEventListener("mousedown",c,!1);let f=()=>{if(!i()){n&&(r.emit("release"),n.emit("end"),n=null);return}n=Uy(),s=Date.now(),r.emit("attain",n)};return o.addEventListener("pointerlockchange",f),o.addEventListener("webkitpointerlockchange",f),o.addEventListener("pointerlockerror",()=>r.emit("error")),(o.body||e).addEventListener("mousemove",l=>{n&&(a.dx=l.movementX||l.webkitMovementX||0,a.dy=l.movementY||l.webkitMovementY||0,a.dt=Date.now()-s,r.emit("data",a),n.emit("data",a))},!1),r.request=c,r.target=i,r.release=()=>{i()&&(o.exitPointerLock||o.webkitExitPointerLock).call(o)},r}});var Ky=Tt((PT,Yy)=>{"use strict";var wi=Mc(),_i=Hy(),Iz=jy(),CT=Math.PI/4,$T=Math.PI/6,Wy=2,qz=1,Dz=2.4,Fz=2.4,Gz=1e3,Hz=5,Uz=7,wp=Tn().C,wf=[[7,1.6],[7,wp.zc],[wp.x1-2.95,wp.zc]],As=wf.slice(1).map((t,e)=>{let o=wf[e],r=t[0]-o[0],n=t[1]-o[1],a=Math.hypot(r,n);return{a:o,len:a,dir:[r/a,n/a]}}),_p=As.reduce((t,e)=>t+e.len,0);function Vy(t){let e=Math.max(0,Math.min(_p,t));for(let r of As){if(e<=r.len)return[r.a[0]+r.dir[0]*e,r.a[1]+r.dir[1]*e];e-=r.len}let o=wf[wf.length-1];return[o[0],o[1]]}function Bz(t){let e=0;for(let r=0;r<As.length;r++){let n=As[r],a=e+n.len;if(t<a-1e-4||r===As.length-1){let s=n.dir,c=t<=e+1e-4&&r>0?As[r-1].dir:n.dir;return{ahead:s,back:[-c[0],-c[1]]}}e=a}let o=As[As.length-1].dir;return{ahead:o,back:[-o[0],-o[1]]}}var jz=Math.PI/4,Wz=7,Vz=140,Xz=70,Xy=(t,e,o)=>(1-t)*e+t*o,Yz=t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2;Yy.exports=function({getGridSegments:t,getGridParts:e},o){var r=[0,Math.PI],n=[0,Math.PI],a=0,s=[0,0,0],i=[Uz,Wy,wf[0][1]],c=0,f=1,l=0,v=[.707,0,.707],d=[0,1,0],p=[0,0,0],u=.5,h=wi.identity([]),g=wi.identity([]),m=!1,y=[0,0,0],x=[0,0,0],_=1,M=!1;let w=W=>{r[1]+=W*jz},k=(W,gt,Mt)=>{if(W=Math.max(Math.min(W,100),-100),gt=Math.max(Math.min(gt,100),-100),r[0]=0,M){a=0;return}for(a+=W;a>=Mt;)w(1),a-=Mt;for(;a<=-Mt;)w(-1),a+=Mt};Iz(document.body).on("attain",W=>{W.on("data",gt=>{k(gt.dx,gt.dy,Vz)})});let z=null,P=null,R=0,B={x:0,y:0},$=58,q=document.createElement("div");q.id="museum-mobile-controls",q.innerHTML=`

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
	`,document.body.appendChild(q);let ct=q.querySelector("#museum-joystick"),kt=q.querySelector("#museum-joystick-knob"),xt=()=>{kt.style.transform="translate(-50%, -50%)",s[0]=0,s[2]=0},vt=W=>{let gt=W.clientX-B.x,Mt=W.clientY-B.y,le=Math.hypot(gt,Mt);if(le>$&&(gt=gt/le*$,Mt=Mt/le*$),kt.style.transform=`translate(
				calc(-50% + ${gt}px),
				calc(-50% + ${Mt}px)
			)`,le<10){s[0]=0,s[2]=0;return}let se=gt/$,Ut=Mt/$;s[0]=0,s[2]=Math.abs(Ut)>.15?Ut:0},Et=(W,gt)=>{for(let Mt=0;Mt<W.length;Mt++)if(W[Mt].identifier===gt)return W[Mt];return null},Pt=W=>!!(W&&W.closest&&W.closest(".painting-plaque, .story-overlay, .story-card, .story-close, button")),ne=W=>{if(!Pt(W.target)&&(W.cancelable&&W.preventDefault(),!M))for(let gt=0;gt<W.changedTouches.length;gt++){let Mt=W.changedTouches[gt];if(z===null&&Mt.clientX<window.innerWidth*.48){z=Mt.identifier;let le=ct.getBoundingClientRect();B.x=le.left+le.width/2,B.y=le.top+le.height/2,vt(Mt)}else P===null&&Mt.clientX>=window.innerWidth*.48&&(P=Mt.identifier,R=Mt.clientX,a=0)}},ze=W=>{if(Pt(W.target)||(W.cancelable&&W.preventDefault(),M))return;let gt=z===null?null:Et(W.touches,z);gt&&vt(gt);let Mt=P===null?null:Et(W.touches,P);if(Mt){let le=Mt.clientX-R;R=Mt.clientX,k(le,0,Xz)}},Qe=W=>{if(!Pt(W.target)){W.cancelable&&W.preventDefault();for(let gt=0;gt<W.changedTouches.length;gt++){let Mt=W.changedTouches[gt];Mt.identifier===z&&(z=null,xt()),Mt.identifier===P&&(P=null)}}};document.addEventListener("touchstart",ne,{passive:!1}),document.addEventListener("touchmove",ze,{passive:!1}),document.addEventListener("touchend",Qe,{passive:!1}),document.addEventListener("touchcancel",Qe,{passive:!1});let ve=document.createElement("style");ve.textContent=`

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
	`,document.head.appendChild(ve);var He={};let Fe=W=>{if(W.defaultPrevented||W.ctrlKey||W.altKey||W.metaKey)return;let gt=W.type==="keydown";He[W.code]=gt,gt&&!W.repeat&&!M&&((W.code==="KeyA"||W.code==="ArrowLeft")&&w(-1),(W.code==="KeyD"||W.code==="ArrowRight")&&w(1)),m=!1;let Mt=He.KeyW||He.ArrowUp?1:0;s=[0,0,(He.KeyS||He.ArrowDown?1:0)-Mt],W.preventDefault()};window.addEventListener("keydown",Fe),window.addEventListener("keyup",Fe);var ot=0;return{pos:i,fmouse:n,forward:v,up:d,setPaused:W=>{M=!!W,M&&(s[0]=0,s[2]=0,xt())},place:(W,gt)=>{c=Math.max(0,Math.min(_p,W));let Mt=Vy(c);i[0]=Mt[0],i[2]=Mt[1],r[1]=gt,n[1]=gt,a=0,f=1},view:()=>h,proj:()=>(wi.perspective(g,o(),window.innerWidth/window.innerHeight,.1,700),g),tick:({time:W})=>{let gt=W-ot;ot=W;let Mt=[0,0,0],le=[];_i.set(v,Math.sin(n[1]),0,-Math.cos(n[1])),_i.set(d,0,1,0);let me=m?Fz:Dz,se=Math.sin(r[1]),Ut=-Math.cos(r[1]),rt=Bz(c),Xt=se*rt.ahead[0]+Ut*rt.ahead[1],ke=se*rt.back[0]+Ut*rt.back[1],ae=f;Math.max(Xt,ke)>.3&&(ae=Xt>=ke?1:-1);let Nt=M?0:-s[2]*me;l+=(Nt-l)*(1-Math.exp(-Math.min(gt,.1)*5.5)),Nt===0&&Math.abs(l)<.01&&(l=0);let $e=l*ae*Math.min(gt,.1);M&&(s[0]=0,s[2]=0,$e=0,l=0),$e!==0&&(f=Math.sign($e)*Math.sign(-s[2]||1)),c=Math.max(0,Math.min(_p,c+$e));let S=Vy(c);_i.set(p,S[0]-i[0],0,S[1]-i[2]);let qe=_i.len(p);qe===0&&u!==.25&&(u=(Math.abs((u+.5)%1-.5)-.25)*.8+.25,(u+.01)%.25<.02&&(u=.25));let je=u;if(u+=qe/(m?Hz:Gz),i[1]=Wy,_i.add(i,i,p),_<1){_+=gt/qz,_=Math.min(_,1);let lo=Yz(_);_i.set(i,Xy(lo,y[0],x[0]),i[1],Xy(lo,y[2],x[2]))}n[0]=0,n[1]+=(r[1]-n[1])*Math.min(1,Math.min(gt,.1)*Wz),Math.abs(r[1]-n[1])<5e-4&&(n[1]=r[1]),wi.identity(h),wi.rotateX(h,h,0),wi.rotateY(h,h,n[1]),wi.translate(h,h,_i.scale(Mt,i,-1))}}}});var Qy=Tt((IT,Zy)=>{"use strict";var{skylightGLSL:Kz,Z_START:Zz,Z_END:Qz,GLASS_Y:Jz}=hc(),{oculusGLSL:tE,A:Mi}=Gr(),{windowLightGLSL:eE,C:z1}=Tn(),{doorLightGLSL:oE}=as(),E1=on(),ki=t1(),Mp=ps(),Wr=t=>t.toFixed(4),kp=.1,Sp=700,Hc={exposure:.88,shafts:1,bloom:1,vignette:.42,grain:.032};function nE(t,e){let o=e[0],r=e[1],n=e[2],a=e[3],s=e[4],i=e[5],c=e[6],f=e[7],l=e[8],v=e[9],d=e[10],p=e[11],u=e[12],h=e[13],g=e[14],m=e[15],y=o*i-r*s,x=o*c-n*s,_=o*f-a*s,M=r*c-n*i,w=r*f-a*i,k=n*f-a*c,E=l*h-v*u,z=l*g-d*u,P=l*m-p*u,R=v*g-d*h,B=v*m-p*h,$=d*m-p*g,q=y*$-x*B+_*R+M*P-w*z+k*E;return q?(q=1/q,t[0]=(i*$-c*B+f*R)*q,t[1]=(n*B-r*$-a*R)*q,t[2]=(h*k-g*w+m*M)*q,t[3]=(d*w-v*k-p*M)*q,t[4]=(c*P-s*$-f*z)*q,t[5]=(o*$-n*P+a*z)*q,t[6]=(g*_-u*k-m*x)*q,t[7]=(l*k-d*_+p*x)*q,t[8]=(s*B-i*P+f*E)*q,t[9]=(r*P-o*B-a*E)*q,t[10]=(u*w-h*_+m*y)*q,t[11]=(v*_-l*w-p*y)*q,t[12]=(i*z-s*R-c*E)*q,t[13]=(o*R-r*z+n*E)*q,t[14]=(h*x-u*M-g*y)*q,t[15]=(l*M-v*x+d*y)*q,t):null}function rE(t,e,o){let r=new Array(16);for(let n=0;n<4;n++)for(let a=0;a<4;a++){let s=0;for(let i=0;i<4;i++)s+=e[i*4+a]*o[n*4+i];r[n*4+a]=s}for(let n=0;n<16;n++)t[n]=r[n];return t}var aE=`
precision highp float;
attribute vec2 position;
varying vec2 uv;
void main() {
	uv = position * 0.5 + 0.5;
	gl_Position = vec4(position, 0.0, 1.0);
}`;Zy.exports=(t,e)=>{let o=!!e.isPhone,r=t.hasExtension("webgl_depth_texture"),n=o?10:18,a=()=>ki.zone==="studio"?4:e.post>=2?2:4,s=o?7:11,i=Pt=>t.texture(Object.assign({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"},Pt||{})),c=()=>t.framebuffer({color:i(),depth:!1}),f=i(),l=r?t.texture({width:4,height:4,format:"depth",type:"uint32"}):null,v=t.framebuffer({color:f,depth:l||!0}),d=[c(),c()],p=[c(),c()],u=[c(),c()],h=[c(),c()],g=new Array(16).fill(0),m=new Array(16).fill(0),y=[0,0,0],x={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},_={position:[-1,-1,3,-1,-1,3]},M=(Pt,ne,ze)=>t(Object.assign({vert:aE,frag:Pt,attributes:_,count:3,depth:{enable:!1,mask:!1},cull:{enable:!1},blend:{enable:!1},uniforms:ne,framebuffer:t.prop("out")},ze||{})),w=[2.6,0,Zz-3.2,12.6,Jz,Qz+.4],k=[Mi.x0-.2,0,Mi.z0,Mi.x1,Mi.domeTop,Mi.z1],E=[z1.x0,0,z1.z0,z1.x1,7.6,z1.z1],z=[.35,0,.35,13.65,7.6,9],P=Mp.AIR_BOX,R=Pt=>`vec3(${Wr(Pt[0])}, ${Wr(Pt[1])}, ${Wr(Pt[2])}), vec3(${Wr(Pt[3])}, ${Wr(Pt[4])}, ${Wr(Pt[5])})`,B=M(`
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

	${Kz()}
	${tE()}
	${eE()}
	${oE()}
	${Mp.sunGLSL()}

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
			vec2 t = hitBox(eye, rd, ${R(w)});
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
			vec2 t = hitBox(eye, rd, ${R(k)});
			t.y = min(t.y, len);
			if (t.y > t.x) {
				float st = (t.y - t.x) / float(N);
				float acc = 0.0;
				for (int i = 0; i < N; i++) {
					vec3 p = eye + rd * (t.x + (float(i) + jit) * st);
					if (p.y < ${Wr(Mi.dome.base)} && p.x > ${Wr(Mi.x0-.1)}) acc += oculusOpen(p) * treeShade(p) * air(p);
				}
				float ph = phase(dot(rd, SHAFT), 0.6) + 0.05;
				sum += mix(vec3(1.0, 0.88, 0.68), vec3(0.62, 0.74, 1.0) * 1.2, night) * acc * st * ph * strength.y;
			}
		}

		// the corridor windows
		if (strength.z > 0.0) {
			vec2 t = hitBox(eye, rd, ${R(E)});
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
			vec2 t = hitBox(eye, rd, ${R(z)});
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
			vec2 t = hitBox(eye, rd, ${R(P)});
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
	}`,{depthTex:()=>l,invVP:()=>g,eye:()=>y,time:t.context("time"),night:()=>E1.night,strength:()=>$,strength5:()=>q,studioBake:()=>Mp.bakedSun(t)}),$=[0,0,0,0],q=0;function ct(){let Pt=Hc.shafts*x.shafts,ne=E1.night;return $[0]=ki.box(w)?.06*Pt*(1+.9*ne):0,$[1]=ki.box(k,!1,"court")?.1*Pt*(1+.9*ne):0,$[2]=ki.box(E)?.07*Pt*(1+.4*ne):0,$[3]=ki.box(z)?.04*Pt*(1-.75*ne):0,ki.zone==="studio"?($[0]=$[1]=$[2]=$[3]=0,q=.065*Pt*(1+1*ne)):q=0,$[0]+$[1]+$[2]+$[3]+q>5e-4}let kt=M(`
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
	}`,{src:t.prop("src"),dir:(Pt,ne)=>[ne.dir[0]/ne.size[0],ne.dir[1]/ne.size[1]]}),xt=M(`
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
	}`,{src:t.prop("src"),texel:(Pt,ne)=>[.5/ne.size[0],.5/ne.size[1]],threshold:t.prop("threshold")}),vt=M(`
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
		return 2.0 * ${Wr(kp)} * ${Wr(Sp)} / (${Wr(Sp+kp)} - z * ${Wr(Sp-kp)});
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
	}`,{scene:()=>f,depthTex:()=>l||f,soft:()=>d[0],bloomA:()=>p[0],bloomB:()=>u[0],shafts:()=>h[0],res:()=>[v.width,v.height],time:t.context("time"),exposure:()=>Hc.exposure*x.exposure,vignette:()=>Math.min(1,Hc.vignette+x.vignette+.22*E1.night+(ki.zone==="studio"?.2:0)),night:()=>E1.night,grain:()=>Hc.grain,bloomK:()=>Hc.bloom,letterbox:()=>x.letterbox,fade:()=>x.fade,fadeColor:()=>x.fadeColor,aperture:()=>e.post>=2?x.aperture:0,focus:()=>x.focus,hasDepth:r?1:0},{framebuffer:null}),Et=t({framebuffer:()=>v});return{shot:x,look:Hc,hasDepth:r,capture(Pt,ne,ze){let Qe=Math.max(.4,Math.min(1,e.scale||1)),ve=Math.max(2,Math.round(Pt.drawingBufferWidth*Qe/2)*2),He=Math.max(2,Math.round(Pt.drawingBufferHeight*Qe/2)*2);(v.width!==ve||v.height!==He)&&v.resize(ve,He);let Fe=Math.max(1,Math.ceil(ve/2)),ot=Math.max(1,Math.ceil(He/2));d.forEach(W=>W.resize(Fe,ot)),p.forEach(W=>W.resize(Math.max(1,Math.ceil(ve/4)),Math.max(1,Math.ceil(He/4)))),u.forEach(W=>W.resize(Math.max(1,Math.ceil(ve/8)),Math.max(1,Math.ceil(He/8)))),h.forEach(W=>W.resize(Math.max(1,Math.ceil(ve/a())),Math.max(1,Math.ceil(He/a())))),rE(m,ne.proj,ne.view),nE(g,m),y[0]=ne.eye[0],y[1]=ne.eye[1],y[2]=ne.eye[2],Et(()=>{t.clear({color:[0,0,0,1],depth:1}),ze()})},present(){let Pt=ne=>[ne.width,ne.height];r&&e.post>=1&&ct()?(B({out:h[0]}),kt({out:h[1],src:h[0],dir:[1,0],size:Pt(h[0])}),kt({out:h[0],src:h[1],dir:[0,1],size:Pt(h[0])})):t.clear({color:[0,0,0,1],framebuffer:h[0]}),xt({out:d[0],src:f,size:[v.width,v.height],threshold:0}),kt({out:d[1],src:d[0],dir:[1,0],size:Pt(d[0])}),kt({out:d[0],src:d[1],dir:[0,1],size:Pt(d[0])}),xt({out:p[0],src:d[0],size:Pt(d[0]),threshold:.42}),kt({out:p[1],src:p[0],dir:[1,0],size:Pt(p[0])}),kt({out:p[0],src:p[1],dir:[0,1],size:Pt(p[0])}),xt({out:u[0],src:p[0],size:Pt(p[0]),threshold:0}),kt({out:u[1],src:u[0],dir:[1.5,0],size:Pt(u[0])}),kt({out:u[0],src:u[1],dir:[0,1.5],size:Pt(u[0])}),vt({out:null})}}}});var nb=Tt((qT,ob)=>{"use strict";var Jy=on().GLSL,sE=Zs(),zp=as(),{C:iE,FAR_DOOR:cE}=Tn(),lE=100*Math.PI/180,tb=t=>[cE.x-t[2],t[1],iE.zc-7+t[0]],eb=t=>[-t[2],t[1],t[0]];function fE(t){let e=[],o=[],r=[],n=[],a=sE.createBuilder(e,o,r,n);zp.addFrames(a,t);let s=zp.glassPanes(t),i=c=>{let f=[];for(let l=0;l<c.length;l+=3)f.push([c[l],c[l+1],c[l+2]]);return f};return{position:i(e),normal:i(o),elements:r,glass:s}}ob.exports=t=>{let e=zp.DOOR,o=["left","right"].map(l=>{let v=fE(l),d=v.position.length;return{part:l,hinge:l==="left"?e.x0:e.x1,sign:l==="left"?-1:1,src:v.position.map(p=>p.slice()),srcN:v.normal.map(p=>p.slice()),srcG:v.glass.map(p=>p.slice()),pos:t.buffer({data:new Float32Array(d*3),usage:"dynamic"}),nrm:t.buffer({data:new Float32Array(d*3),usage:"dynamic"}),gpos:t.buffer({data:new Float32Array(v.glass.length*3),usage:"dynamic"}),gnrm:t.buffer({data:new Float32Array(v.glass.length*3),usage:"dynamic"}),el:t.elements({data:new Uint32Array(v.elements),type:"uint32"}),glassCount:v.glass.length,outP:new Float32Array(d*3),outN:new Float32Array(d*3),outG:new Float32Array(v.glass.length*3),outGN:new Float32Array(v.glass.length*3)}}),r=null;function n(l){if(l!==r){r=l;for(let v of o){let d=v.sign*l,p=Math.cos(d),u=Math.sin(d),h=y=>{let x=y[0]-v.hinge,_=y[2];return[v.hinge+x*p+_*u,y[1],-x*u+_*p]},g=y=>[y[0]*p+y[2]*u,y[1],-y[0]*u+y[2]*p];v.src.forEach((y,x)=>{let _=tb(h(y));v.outP.set(_,x*3),v.outN.set(eb(g(v.srcN[x])),x*3)});let m=eb(g([0,0,1]));v.srcG.forEach((y,x)=>{v.outG.set(tb(h(y)),x*3),v.outGN.set(m,x*3)}),v.pos.subdata(v.outP),v.nrm.subdata(v.outN),v.gpos.subdata(v.outG),v.gnrm.subdata(v.outGN)}}}n(0);let a=`
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
		${Jy}
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
		${Jy}
		varying vec3 v_pos, v_n, v_eye;
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			float c = abs(dot(V, normalize(v_n)));
			float fres = pow(1.0 - c, 3.0);
			float d = (v_pos.x + v_pos.z) * 0.55 + v_pos.y * 0.85;
			float sheen = smoothstep(0.35, 0.0, abs(fract(d * 0.22) - 0.5)) * 0.05;
			float a = 0.05 + 0.32 * fres + sheen;
			gl_FragColor = vec4(toNight(mix(vec3(0.80, 0.86, 0.90), vec3(1.0, 0.95, 0.86), 0.4), 0.22), a);
		}`,attributes:{position:t.prop("pos"),normal:t.prop("nrm")},count:t.prop("count"),cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}}),c=0,f=()=>{n(c*lE);for(let l of o)s({pos:l.pos,nrm:l.nrm,el:l.el})};return f.glass=()=>{for(let l of o)i({pos:l.gpos,nrm:l.gnrm,count:l.glassCount})},f.setOpen=l=>{c=l||0},f.openNow=()=>c,f}});var ab=Tt((DT,rb)=>{"use strict";var hE=on().GLSL,{skylightGLSL:uE}=hc(),{oculusGLSL:dE}=Gr(),{windowLightGLSL:pE}=Tn(),fa=.22;function vE(){let t=[],e=[],o=[],r=[],s=(l,v)=>{let d=fa*.2*Math.pow(Math.sin(Math.PI*Math.pow(l,.85)),.9)*(v>0?1.06:.94),p=l*fa-fa*.12,u=v*d,h=Math.abs(v)*d*.42-.14*l*l*fa;h+=Math.sin(l*17+(v>0?0:2.1))*.012*fa*v*v;let g=(l-.3)*.55,m=Math.cos(g),y=Math.sin(g),x=h*m-u*y,_=h*y+u*m;return[p,x,_+.05*fa*l*l]},i=(l,v)=>{let p=s(Math.min(1,l+.01),v),u=s(Math.max(0,l-.01),v),h=s(l,Math.min(1,v+.01)),g=s(l,Math.max(-1,v-.01)),m=[p[0]-u[0],p[1]-u[1],p[2]-u[2]],y=[h[0]-g[0],h[1]-g[1],h[2]-g[2]],x=[y[1]*m[2]-y[2]*m[1],y[2]*m[0]-y[0]*m[2],y[0]*m[1]-y[1]*m[0]],_=Math.hypot(x[0],x[1],x[2])||1,M=x[1]<0?-1:1;return[x[0]/_*M,x[1]/_*M,x[2]/_*M]};for(let l=0;l<=18;l++){let v=l/18;for(let d=0;d<=5*2;d++){let p=d/5-1;t.push(s(v,p)),e.push(i(Math.min(.97,Math.max(.03,v)),p)),o.push([v,p])}}let c=5*2+1;for(let l=0;l<18;l++)for(let v=0;v<c-1;v++){let d=l*c+v,p=d+1,u=d+c,h=u+1;r.push([d,u,p],[p,u,h])}let f=t.length;return t.push([-fa*.12,0,-.003],[-fa*.12,0,.003],[-fa*.24,-.01,.0015],[-fa*.24,-.01,-.0015]),e.push([0,1,0],[0,1,0],[0,1,0],[0,1,0]),o.push([0,0],[0,0],[-.1,0],[-.1,0]),r.push([f,f+2,f+1],[f,f+3,f+2]),{pos:t,nrm:e,uv:o,idx:r}}rb.exports=t=>{let e=vE(),o=t({vert:`
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
		${hE}
		uniform float time;
		uniform float yScale, visible;
		varying vec3 v_pos, v_normal;
		varying vec2 v_uv;
		varying vec3 v_eye;

		${uE()}
		${dE()}
		${pE()}

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
		}`,attributes:{position:e.pos,normal:e.nrm,uv:e.uv},elements:e.idx,uniforms:{model:t.prop("model"),visible:1},cull:{enable:!1}}),r=on(),n=t({vert:`
		precision highp float;
		uniform mat4 proj, view, model;
		uniform float yScale;
		attribute vec2 corner;
		varying vec2 v_uv;
		void main() {
			vec3 c = (model * vec4(${(fa*.35).toFixed(3)}, 0.0, 0.0, 1.0)).xyz;
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{model:t.prop("model"),night:()=>r.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(a){a&&a.visible&&(o({model:a.model}),r.night>.01&&n({model:a.model}))}}});var cb=Tt((FT,ib)=>{"use strict";var{skylightGLSL:mE,Z_START:sb,Z_END:gE}=hc(),{oculusGLSL:xE,A:Uc}=Gr(),{windowLightGLSL:yE,C:Si}=Tn();ib.exports=(t,e)=>{let o=e.isPhone?900:2600,r=e.isPhone?350:900,n=e.isPhone?450:1300,a=e.isPhone?13:22,s=7,i=()=>(s=s*16807%2147483647,(s-1)/2147483646),c=Si.x0+.6,f=Si.x1-.3,l=[];for(let u=0;u<o;u++)l.push([2.5+i()*10.5,.3+i()*8,sb-3.5+i()*(gE-sb+4.5),i()]);for(let u=0;u<r;u++)l.push([Uc.x0+.3+i()*(Uc.x1-Uc.x0-.6),.3+i()*7.5,Uc.z0+.3+i()*(Uc.z1-Uc.z0-.6),i()]);for(let u=0;u<n;u++)l.push([c+i()*(f-c),.2+i()*5.6,Si.z0+.25+i()*(Si.z1-Si.z0-.5),i()]);let v=u=>u.toFixed(4),d=[[0,-50,0,0],[0,-50,0,0],[0,-50,0,0],[0,-50,0,0]],p=t({vert:`
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

		${mE()}
		${xE()}
		${yE()}

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
				p.z = clamp(p.z, ${v(Si.z0+.1)}, ${v(Si.z1-.1)});
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
		}`,attributes:{seed:l},count:l.length,primitive:"points",uniforms:{time:t.context("time"),pixelScale:u=>u.viewportHeight*.006,focus:(u,h)=>h&&h.focus||6,aperture:(u,h)=>h&&h.aperture||0,wake0:(u,h)=>(h&&h.wake||d)[0],wake1:(u,h)=>(h&&h.wake||d)[1],wake2:(u,h)=>(h&&h.wake||d)[2],wake3:(u,h)=>(h&&h.wake||d)[3],wakeDir:(u,h)=>h&&h.wakeDir||[0,0,1],gust:(u,h)=>h&&h.gust||[0,0]},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});return u=>p(u||{})}});var pb=Tt((GT,db)=>{"use strict";var{C:ub}=Tn(),lb=on(),fb=15.3,bE=37.1,hb=ub.z1+.9,wE=ub.z1+.7+16-.6;db.exports=(t,e)=>{let o=e.isPhone?36:80,r=11,n=()=>(r=r*16807%2147483647,(r-1)/2147483646),a=[];for(let f=0;f<o;f++){let l=.35+Math.pow(n(),1.8)*2.4;a.push([fb+n()*(bE-fb),l,hb+n()*(wE-hb),n()])}let s=[],i=[];a.forEach(f=>{[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(l=>{s.push(l[0],l[1]),i.push(...f)})});let c=t({vert:`
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
		}`,attributes:{corner:s,seed:i},count:s.length/2,uniforms:{time:t.context("time"),night:()=>lb.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(){lb.night>.01&&c()}}});var L1=Tt((HT,Nr)=>{"use strict";var vb=on(),Aa=hs(),_E=Mc(),Ls=Math.PI,Ie=t=>(+t).toFixed(4),ha=t=>`vec3(${Ie(t[0])}, ${Ie(t[1])}, ${Ie(t[2])})`,f0={x0:-2.05,z0:41.45,z1:47.55,top:5.1},Wo=-.55,hn=-2,S0=42.25,K0=43.65,Yr=45.35,tr=46.75,xn=2.75,Tr=.12,ME=(Wo+hn)/2,o0={x:-1.3,y:1.42,w:.42,h:.52,z:K0,cell:.026},vo={x0:-1.85,x1:-.75,top:.98,z0:K0-.3,z1:K0-.02},Vr={x0:-1.44,x1:-1.16,y0:vo.top-.002,y1:vo.top+.018},Lr={cx:-1.3,cz:K0-.165,w:.2,d:.255,y:vo.top+.0012},zn={x:-1.03,z:K0-.14,r:.042,h:.075},d0={x:-.86,z:K0-.12,h:.085,r:.019};d0.flame=[d0.x,vo.top+.012+d0.h+.028,d0.z];var T1={a:[zn.x-.004,vo.top+.03,zn.z+.004],b:[zn.x-.13,vo.top+.34,zn.z-.12]},z0=[-1.5,2.42,44.66],Y0=[-1.78,1.95,S0+.09],Xr={x:-1.32,z:44.08,y:.64,heading:.32},xb={window:{eye:[-1.3,1.33,42.8],target:[o0.x,1.37,K0],fov:54},paper:{eye:[-1.3,1.4,43.23],target:[Lr.cx,vo.top,Lr.cz+.01],fov:40},front:{eye:[1.6,1.62,43],target:[-.9,1.35,43],fov:55},bay:{eye:[4.2,2.1,44.6],target:[-1,1.9,44.5],fov:55}},Hn={z0:(S0+K0)/2+.03,z1:(S0+K0)/2+.56,y0:.98,y1:1.78,x:Wo+.03,cell:.047};xb.peek={eye:[-1.2,1.42,42.95],target:[Aa.PLAY.stoolX-Aa.OFF[0],.85,Aa.PLAY.keyFront+.2],fov:30};var Ts={ink:null,inkDirty:!1,fold:0,slide:0,shown:!0,active:!1};function mb(){return`
	// a quatrefoil hole in the brass (g: metres across the window from its centre)
	float grilleHole(vec2 g) {
		vec2 q = fract(g / ${Ie(o0.cell)} + 0.5) - 0.5;
		float d = min(min(length(q - vec2(0.17, 0.0)), length(q + vec2(0.17, 0.0))),
		              min(length(q - vec2(0.0, 0.17)), length(q + vec2(0.0, 0.17))));
		d = min(d, length(q) - 0.04);
		return 1.0 - smoothstep(0.15, 0.19, d);
	}
	// how much of the lamp's light reaches p (on the penitent's side) through the window
	float throughGrille(vec3 p, float soft) {
		vec3 d = p - ${ha(z0)};
		if (d.z > -0.001) return 0.0;
		float t = (${Ie(o0.z)} - ${Ie(z0[2])}) / d.z;
		vec2 g = (${ha(z0)} + d * t).xy - vec2(${Ie(o0.x)}, ${Ie(o0.y)});
		float inWin = (1.0 - smoothstep(${Ie(o0.w/2-.01)}, ${Ie(o0.w/2)} + soft, abs(g.x))) *
		              (1.0 - smoothstep(${Ie(o0.h/2-.01)}, ${Ie(o0.h/2)} + soft, abs(g.y)));
		// the lamp is not a point: the pattern blurs the further it falls
		// from the brass
		float pen = 0.045 * abs(p.z - ${Ie(o0.z)}) / abs(${Ie(o0.z)} - ${Ie(z0[2])}) / ${Ie(o0.cell)};
		vec2 qc = fract(g / ${Ie(o0.cell)} + 0.5) - 0.5;
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
		vec3 c = ${ha(d0.flame)};
		vec3 d = c - p;
		float s = 1.0;
		// the pot: a short upright cylinder
		vec2 a = vec2(${Ie(zn.x)}, ${Ie(zn.z)}) - p.xz;
		vec2 dd = d.xz;
		float t = clamp(dot(a, dd) / max(dot(dd, dd), 1e-5), 0.0, 1.0);
		float r = length(p.xz + dd * t - vec2(${Ie(zn.x)}, ${Ie(zn.z)}));
		float y = p.y + d.y * t;
		s *= mix(1.0, 0.25, (1.0 - smoothstep(${Ie(zn.r*.7)}, ${Ie(zn.r*1.6)}, r)) * (1.0 - smoothstep(${Ie(vo.top+zn.h*.8)}, ${Ie(vo.top+zn.h*1.3)}, y)));
		// the quill: a thin capsule
		vec3 qa = ${ha(T1.a)}, qb = ${ha(T1.b)};
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
		bool inB1 = p.z < ${Ie(K0)} && p.z > ${Ie(S0-.04)} && p.x < ${Ie(Wo+.02)};
		bool inPriest = p.z >= ${Ie(K0)} && p.z < ${Ie(Yr)} && p.x < ${Ie(Wo)};
		bool inB2 = p.z >= ${Ie(Yr)} && p.z < ${Ie(tr+.04)} && p.x < ${Ie(Wo)};
		// how open to the hall it is
		float open = 1.0;
		if (inB1) open = mix(0.7, 1.1, smoothstep(${Ie(hn)}, ${Ie(Wo)}, p.x));
		if (inPriest) open = 0.16;
		if (inB2) open = 0.10;
		// deeper into the bay, a little less of the hall's light
		open *= mix(0.62, 1.0, smoothstep(${Ie(f0.x0)}, 0.3, p.x));
		// the stair hall's candlelight (it stands there now: see stairhall.js)
		vec3 rs;
		vec3 col = roomLight(p + ${ha(Aa.OFF)}, N, V, gloss, rs) * 1.25 * open;
		spec += rs * open;
		// the lamp, warm, behind the brass
		vec3 Ld = ${ha(z0)} - p;
		float dl = length(Ld);
		vec3 L = Ld / dl;
		float T = inPriest ? 1.0 : (inB1 ? throughGrille(p, 0.0) : 0.0);
		vec3 lampCol = vec3(1.0, 0.70, 0.40) * mix(3.2, 1.0, night);
		vec3 lamp = lampCol * T * max(dot(N, L), 0.0) / (1.0 + dl * dl * 1.6);
		col += lamp;
		spec += lampCol * T * pow(max(dot(N, normalize(L + V)), 0.0), mix(8.0, 60.0, gloss)) * gloss / (1.0 + dl * dl * 1.6);
		// the little lamp in the open booth
		if (inB1) {
			vec3 Sd = ${ha(Y0)} - p;
			float ds = length(Sd);
			vec3 Ls = Sd / ds;
			vec3 sc = vec3(1.0, 0.72, 0.42) * mix(1.5, 0.35, night);
			col += sc * (max(dot(N, Ls), 0.0) * 0.8 + 0.2) / (0.15 + ds * ds * 1.6);
			spec += sc * pow(max(dot(N, normalize(Ls + V)), 0.0), mix(8.0, 60.0, gloss)) * gloss * 0.6 / (0.15 + ds * ds * 1.6);
		}
		// the candle
		if (night > 0.01) {
			vec3 Cd = ${ha(d0.flame)} - p;
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
	}`}var fn={WOOD:0,CARVED:1,VELVET:2,CUSHION:3,BRASS:4,INKGLASS:5,QUILL:6,LAMPGLASS:7,DARKWOOD:8};function yb(){let t=[],e=[],o=[],r=[],n=[],a=(f,l)=>[f[0]-l[0],f[1]-l[1],f[2]-l[2]],s=(f,l)=>[f[1]*l[2]-f[2]*l[1],f[2]*l[0]-f[0]*l[2],f[0]*l[1]-f[1]*l[0]],i=f=>{let l=Math.hypot(f[0],f[1],f[2])||1;return[f[0]/l,f[1]/l,f[2]/l]},c={pos:t,nrm:e,kind:o,uv:r,idx:n,norm:i,cross:s,sub:a};return c.v=(f,l,v,d)=>(t.push(f[0],f[1],f[2]),e.push(l[0],l[1],l[2]),o.push(v),r.push(d?d[0]:0,d?d[1]:0),t.length/3-1),c.quad=(f,l,v,d,p,u)=>{let h=i(s(a(l,f),a(d,f)));u=u||[[0,0],[1,0],[1,1],[0,1]];let g=c.v(f,h,p,u[0]),m=c.v(l,h,p,u[1]),y=c.v(v,h,p,u[2]),x=c.v(d,h,p,u[3]);n.push(g,m,y,g,y,x)},c.box=(f,l,v,d,p,u,h)=>{let g=(m,y,x,_,M,w,k,E)=>c.quad(m,y,x,_,h,[[M,k],[w,k],[w,E],[M,E]]);g([d,l,v],[d,l,u],[d,p,u],[d,p,v],v,u,l,p),g([f,l,u],[f,l,v],[f,p,v],[f,p,u],u,v,l,p),g([f,p,v],[d,p,v],[d,p,u],[f,p,u],f,d,v,u),g([f,l,u],[d,l,u],[d,l,v],[f,l,v],f,d,u,v),g([f,l,u],[d,l,u],[d,p,u],[f,p,u],f,d,l,p),g([d,l,v],[f,l,v],[f,p,v],[d,p,v],d,f,l,p)},c.tube=(f,l,v,d)=>{d=d||6;let p=t.length/3;for(let u=0;u<f.length;u++){let h=f[Math.max(0,u-1)],g=f[Math.min(f.length-1,u+1)],m=i(a(g,h)),y=Math.abs(m[1])>.9?[1,0,0]:[0,1,0],x=i(s(m,y)),_=s(x,m),M=typeof l=="function"?l(u/(f.length-1)):l;for(let w=0;w<=d;w++){let k=w/d*Ls*2,E=Math.cos(k),z=Math.sin(k),P=[x[0]*E+_[0]*z,x[1]*E+_[1]*z,x[2]*E+_[2]*z];c.v([f[u][0]+P[0]*M,f[u][1]+P[1]*M,f[u][2]+P[2]*M],P,v,[u/(f.length-1),w/d])}}for(let u=0;u<f.length-1;u++)for(let h=0;h<d;h++){let g=p+u*(d+1)+h,m=g+d+1;n.push(g,g+1,m,g+1,m+1,m)}},c.lathe=(f,l,v,d,p)=>{p=p||20;let u=t.length/3;for(let h=0;h<v.length;h++){let[g,m]=v[h],y=v[Math.max(0,h-1)],x=v[Math.min(v.length-1,h+1)],_=x[0]-y[0],M=x[1]-y[1];for(let w=0;w<=p;w++){let k=w/p*Ls*2,E=Math.cos(k),z=Math.sin(k),P=i([M*E,-_,M*z]);c.v([f+E*g,m,l+z*g],P,d,[w/p,h/(v.length-1)])}}for(let h=0;h<v.length-1;h++)for(let g=0;g<p;g++){let m=u+h*(p+1)+g,y=m+p+1;n.push(m,y,m+1,m+1,y,y+1)}},c.spire=(f,l,v,d,p,u)=>{let h=[[-d,-d],[d,-d],[d,d],[-d,d]];for(let g=0;g<4;g++){let m=h[g],y=h[(g+1)%4],x=[f+m[0],v,l+m[1]],_=[f+y[0],v,l+y[1]],M=[f,p,l],w=i(s(a(M,x),a(_,x))),k=c.v(x,w,u,[0,0]),E=c.v(_,w,u,[1,0]),z=c.v(M,w,u,[.5,1]);n.push(k,z,E)}},c.orient=()=>{for(let f=0;f<n.length;f+=3){let[l,v,d]=[n[f],n[f+1],n[f+2]],p=g=>[t[g*3],t[g*3+1],t[g*3+2]],u=s(a(p(v),p(l)),a(p(d),p(l))),h=[0,1,2].map(g=>e[l*3+g]+e[v*3+g]+e[d*3+g]);u[0]*h[0]+u[1]*h[1]+u[2]*h[2]<0&&(n[f+1]=d,n[f+2]=v)}return c},c}function A1(t,e,o,r){if(t<=e)return o;let n=t-e;return n>=r?0:Math.max(0,Math.sqrt(r*r-n*n)-(r-o))}var w0={ys:1.78,a:.56,r:.78};w0.apex=w0.ys+Math.sqrt(w0.r*w0.r-(w0.r-w0.a)*(w0.r-w0.a));function kE(){let t=yb(),e=fn.WOOD,o=fn.CARVED,r=fn.DARKWOOD,n=.06;t.box(hn,0,S0,Wo+.08,Tr,tr,r),t.box(hn,xn-.06,S0-.04,Wo+.1,xn,tr+.04,e),t.box(Wo,xn-.2,S0-.06,Wo+.12,xn-.06,tr+.06,e),t.box(Wo+.02,xn,S0-.08,Wo+.14,xn+.07,tr+.08,r),t.box(hn,Tr,S0,hn+.04,xn-.06,tr,e);for(let[l,v,d]of[[S0-n,S0,-1],[tr,tr+n,1]]){t.box(hn,0,l,Wo+.08,xn,v,e);let p=d<0?l-.018:v;t.box(hn+.18,.45,Math.min(p,p+.018),Wo-.12,2.35,Math.max(p,p+.018),r),t.box(hn+.26,.55,Math.min(p,p+.03*d),Wo-.2,2.25,Math.max(p,p+.03*d),e)}{let l=K0-.02,v=K0+.02,d=o0.x-o0.w/2,p=o0.x+o0.w/2,u=o0.y-o0.h/2,h=o0.y+o0.h/2;t.box(hn,Tr,l,Wo,Vr.y0,v,e),t.box(hn,Vr.y0,l,Vr.x0,Vr.y1,v,e),t.box(Vr.x1,Vr.y0,l,Wo,Vr.y1,v,e),t.box(hn,Vr.y1,l,Wo,u,v,e),t.box(hn,u,l,d,h,v,e),t.box(p,u,l,Wo,h,v,e),t.box(hn,h,l,Wo,xn-.06,v,e);let g=.05,m=l-.025;t.box(d-g,u-g,m,p+g,u,l,r),t.box(d-g,h,m,p+g,h+g,l,r),t.box(d-g,u,m,d,h,l,r),t.box(p,u,m,p+g,h,l,r),t.box(d-g-.02,h+g,m-.015,p+g+.02,h+g+.03,l,e),t.box(Vr.x0-.01,Vr.y1,l-.006,Vr.x1+.01,Vr.y1+.008,l,fn.BRASS)}{let l=Hn,v=Wo+.008,d=Wo+.052;t.box(v,l.y0,l.z0-.035,d,l.y1,l.z0,r),t.box(v,l.y0,l.z0,d,l.y0+.04,l.z1,r),t.box(v,l.y1-.04,l.z0,d,l.y1,l.z1,r),t.box(v+.008,Tr,l.z0-.035,d-.008,l.y0,l.z1,e),t.box(d-.008,Tr+.12,l.z0+.03,d,l.y0-.08,l.z1-.06,r),t.box(v-.004,l.y0-.012,l.z0-.045,d+.012,l.y0,l.z1,fn.BRASS)}t.box(hn,Tr,Yr-.02,Wo,xn-.06,Yr+.02,e),t.box(vo.x0,vo.top-.035,vo.z0,vo.x1,vo.top,vo.z1,e),t.tube([[vo.x0,vo.top-.018,vo.z0],[vo.x1,vo.top-.018,vo.z0]],.02,e,8);for(let l of[vo.x0+.1,vo.x1-.1]){let v=[];for(let d=0;d<=8;d++){let p=d/8;v.push([l,vo.top-.04-.22*p,vo.z1-.02-.22*Math.cos(p*Ls/2)])}t.tube(v,.018,r,6)}t.box(hn+.06,.12,S0,Wo-.1,.44,S0+.42,r),t.box(hn+.08,.44,S0+.01,Wo-.12,.52,S0+.41,fn.CUSHION),t.box(hn+.06,.12,tr-.42,Wo-.1,.44,tr,r),t.box(Y0[0]-.05,Y0[1]-.16,S0,Y0[0]+.05,Y0[1]-.02,S0+.012,fn.BRASS),t.tube([[Y0[0],Y0[1]-.09,S0+.012],[Y0[0],Y0[1]-.09,Y0[2]-.01],[Y0[0],Y0[1]-.05,Y0[2]]],.006,fn.BRASS,6),t.lathe(Y0[0],Y0[2],[[0,Y0[1]-.05],[.028,Y0[1]-.035],[.034,Y0[1]+.01],[.024,Y0[1]+.06],[.026,Y0[1]+.065]],fn.LAMPGLASS,16),t.box(Xr.x-.22,.12,Xr.z-.24,Xr.x+.22,Xr.y-.05,Xr.z+.16,r),t.box(Xr.x-.24,Xr.y-.05,Xr.z-.26,Xr.x+.24,Xr.y,Xr.z+.18,fn.CUSHION),t.tube([[z0[0],xn-.06,z0[2]],[z0[0],z0[1]+.07,z0[2]]],.005,fn.BRASS,5),t.lathe(z0[0],z0[2],[[0,z0[1]+.09],[.03,z0[1]+.08],[.02,z0[1]+.06]],fn.BRASS,12),t.lathe(z0[0],z0[2],[[0,z0[1]-.06],[.035,z0[1]-.04],[.045,z0[1]],[.035,z0[1]+.05],[.018,z0[1]+.07]],fn.LAMPGLASS,16);let a=Wo,s=Wo+n;function i(l,v,d){let p=(l+v)/2,u=40,h=[];for(let m=0;m<=u;m++)h.push(Tr+(xn-.2-Tr)*m/u);let g=[];h.forEach(m=>g.push(m));for(let m=1;m<24;m++)g.push(w0.ys+(w0.apex-w0.ys)*m/24);g.sort((m,y)=>m-y);for(let m=0;m<g.length-1;m++){let y=g[m],x=g[m+1];if(x-y<1e-4)continue;let _=d?A1(y,w0.ys,w0.a,w0.r):0,M=d?A1(x,w0.ys,w0.a,w0.r):0,w=(k,E)=>[k,E];t.quad([s,y,p-_],[s,y,l],[s,x,l],[s,x,p-M],e,[w(p-_,y),w(l,y),w(l,x),w(p-M,x)]),t.quad([s,y,v],[s,y,p+_],[s,x,p+M],[s,x,v],e,[w(v,y),w(p+_,y),w(p+M,x),w(v,x)]),(_>0||M>0)&&(t.quad([a,y,p-_],[s,y,p-_],[s,x,p-M],[a,x,p-M],r),t.quad([s,y,p+_],[a,y,p+_],[a,x,p+M],[s,x,p+M],r),t.quad([a,y,l],[a,y,p-_],[a,x,p-M],[a,x,l],e),t.quad([a,y,p+_],[a,y,v],[a,x,v],[a,x,p+M],e))}if(t.box(a,xn-.2,l,s,xn-.06,v,e),t.box(s,xn-.42,l+.05,s+.012,xn-.24,v-.05,o),d){let m=[];for(let y=0;y<=30;y++){let x=y/30,_=x<.5?Tr+(w0.apex-Tr)*(x*2):w0.apex-(w0.apex-Tr)*((x-.5)*2),M=x<.5?-1:1;m.push([s+.01,Math.min(_,w0.apex-.002),p+M*(A1(_,w0.ys,w0.a,w0.r)+.03)])}t.tube(m,.022,r,6)}}i(S0,K0,!0),i(Yr,tr,!0);{let l=K0,v=Yr,d=(l+v)/2;t.box(a,Tr,l,s,xn-.06,v,e);let p={ys:1.85,a:.55,r:.8},u=[];for(let h=0;h<=40;h++){let g=h/40,m=p.ys+Math.sqrt(p.r*p.r-(p.r-p.a)*(p.r-p.a)),y=g<.5?.35+(m-.35)*(g*2):m-(m-.35)*((g-.5)*2),x=g<.5?-1:1;u.push([s+.012,Math.min(y,m-.002),d+x*A1(y,p.ys,p.a,p.r)])}u.push(u[0]),t.tube(u,.02,r,6),t.box(s,.95,d-.22,s+.015,1.3,d+.22,o),t.box(s,.35,d-.42,s+.01,.75,d+.42,r),t.tube([[s+.03,1.12,v-.13],[s+.06,1.12,v-.13],[s+.06,1.12,v-.2]],.009,fn.BRASS,6)}[S0-.02,K0,Yr,tr+.02].forEach((l,v)=>{let d=v===1||v===2,p=.075,u=xn+(d?.62:.4);t.box(Wo+.06,0,l-p,Wo+.06+2*p,u,l+p,e),t.box(Wo+.04,u-.04,l-p-.02,Wo+.08+2*p,u,l+p+.02,r);let h=Wo+.06+p,g=d?.62:.5;t.spire(h,l,u,p*.95,u+g,e);for(let m=1;m<=3;m++){let y=u+g*m/4.2,x=p*.95*(1-m/4.2)+.02;for(let[_,M]of[[1,0],[-1,0],[0,1],[0,-1]])t.tube([[h+_*(x-.02),y-.02,l+M*(x-.02)],[h+_*(x+.015),y+.03,l+M*(x+.015)]],.008,r,4)}t.lathe(h,l,[[0,u+g-.02],[.03,u+g+.03],[.022,u+g+.07],[0,u+g+.1]],e,10)});let f=(l,v,d)=>{let p=(l+v)/2,u=Wo+.075,h=xn+.07,g=h+d,m=[1,0,0],y=t.v([u,h,l],m,o,[l,h]),x=t.v([u,h,v],m,o,[v,h]),_=t.v([u,g,p],m,o,[p,g]);t.idx.push(y,x,_);let M=t.v([u-.04,h,l],[-1,0,0],e),w=t.v([u-.04,h,v],[-1,0,0],e),k=t.v([u-.04,g,p],[-1,0,0],e);t.idx.push(M,k,w);let E=[],z=[];for(let $=0;$<=10;$++){let q=$/10;E.push([u+.02,h+d*q,l+(p-l)*q]),z.push([u+.02,h+d*q,v+(p-v)*q])}t.tube(E,.022,r,6),t.tube(z,.022,r,6);for(let $=2;$<=8;$+=2)for(let q of[E[$],z[$]])t.tube([q,[q[0]+.01,q[1]+.06,q[2]+(q===E[$]?-.02:.02)]],.01,r,4);t.lathe(u,p,[[0,g],[.035,g+.06],[.022,g+.12],[0,g+.16]].map(([$,q])=>[$,q]),e,10);let P=Math.min(.17,d*.32),R=h+d*.38,B=[];for(let $=0;$<=24;$++){let q=$/24*Ls*2;B.push([u+.012,R+Math.sin(q)*P,p+Math.cos(q)*P])}t.tube(B,.012,r,5)};f(S0-.02,K0,.52),f(K0,Yr,.82),f(Yr,tr+.02,.52),t.lathe(zn.x,zn.z,[[0,vo.top],[.036,vo.top+.001],[zn.r,vo.top+.012],[zn.r*1.02,vo.top+.035],[.036,vo.top+.052],[.02,vo.top+.062],[.016,vo.top+.068]],fn.INKGLASS,24),t.lathe(zn.x,zn.z,[[.016,vo.top+.064],[.021,vo.top+.066],[.022,vo.top+.075],[.016,vo.top+.076],[0,vo.top+.072]],fn.BRASS,20);{let l=T1.a,v=T1.b,d=26,p=y=>{let x=Math.sin(y*Ls)*.025;return[l[0]+(v[0]-l[0])*y+x*.6,l[1]+(v[1]-l[1])*y+x*.4,l[2]+(v[2]-l[2])*y+x]},u=[];for(let y=0;y<=d;y++)u.push(p(y/d));t.tube(u,y=>.0028*(1-.7*y)+6e-4,fn.QUILL,5);let h=t.norm(t.sub(v,l)),g=t.norm(t.cross(h,[.2,1,.1])),m=t.cross(g,h);for(let y of[-1,1]){let x=t.pos.length/3;for(let _=0;_<=d;_++){let M=_/d,w=p(M),k=M<.28?0:(y>0?.03:.02)*Math.sin(Ls*Math.pow((M-.28)/.72,.75)),E=k*.25,z=[w[0]+g[0]*y*k-m[0]*E,w[1]+g[1]*y*k-m[1]*E,w[2]+g[2]*y*k-m[2]*E];t.v(w,m,fn.QUILL,[M,0]),t.v(z,m,fn.QUILL,[M,y])}for(let _=0;_<d;_++){let M=x+_*2;t.idx.push(M,M+2,M+1,M+1,M+2,M+3)}}}return t.orient()}function SE(t,e){let r=f0.top,n=f0.x0;t(n-.35,0,f0.z0-.35,n,r+.35,f0.z1+.35),t(n,0,f0.z0-.35,-.35,r,f0.z0),t(n,0,f0.z1,-.35,r,f0.z1+.35),t(n,r,f0.z0,-.35,r+.35,f0.z1),t(.35,0,f0.z0-.42,.35+.16,r,f0.z0),t(.35,0,f0.z1,.35+.16,r,f0.z1+.42),t(.35,r,f0.z0-.5,.35+.18,r+.42,f0.z1+.5),t(.35,r+.42,f0.z0-.6,.35+.26,r+.52,f0.z1+.6),t(.35,0,f0.z0-.5,.35+.22,.42,f0.z0),t(.35,0,f0.z1,.35+.22,.42,f0.z1+.5),t(-.35-.01,0,f0.z0,.35+.12,.02,f0.z1),e(n,f0.z0,-.35,f0.z1)}Nr.exports=t=>{let e=cs(),o=vb.GLSL,r=kE(),n=`
	precision highp float;
	${o}
	uniform float time;
	${e.lanternGLSL()}
	${Aa.roomGLSL()}
	${mb()}
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
		}`,attributes:{position:r.pos,normal:r.nrm,kind:r.kind,uv:r.uv},elements:r.idx});function i(xt,vt,Et,Pt){let ne=[],ze=[],Qe=[],ve=[],He=[],W=Wo-.02,gt=w0.apex+.08,Mt=Tr+.015;for(let le=0;le<=40;le++){let me=le/40,se=gt+(Mt-gt)*me;for(let Ut=0;Ut<=90;Ut++){let rt=Ut/90,Xt=Et?.2+.13*me*me:vt-xt,ke=xt+rt*Xt,ae=Et?.05+.02*me:.035+.01*Math.sin(rt*7),Nt=rt*Pt*Ls*2+Math.sin(me*2+rt*5)*.6,$e=W-ae*(.5+.5*Math.sin(Nt))-(Et?.02*me:0),qe=[1,0,-(-ae*.5*Math.cos(Nt)*Pt*Ls*2/Xt)],je=Math.hypot(qe[0],qe[1],qe[2]);ne.push($e,se,ke),ze.push(qe[0]/je,0,qe[2]/je),Qe.push(2),ve.push(Math.sin(Nt),me)}}for(let le=0;le<40;le++)for(let me=0;me<90;me++){let se=le*91+me,Ut=se+90+1;He.push(se,Ut,se+1,se+1,Ut,Ut+1)}for(let le=0;le<He.length;le+=3){let[me,se,Ut]=[He[le],He[le+1],He[le+2]],rt=Nt=>[ne[Nt*3],ne[Nt*3+1],ne[Nt*3+2]],Xt=[0,1,2].map(Nt=>rt(se)[Nt]-rt(me)[Nt]),ke=[0,1,2].map(Nt=>rt(Ut)[Nt]-rt(me)[Nt]);Xt[1]*ke[2]-Xt[2]*ke[1]<0&&(He[le+1]=Ut,He[le+2]=se)}return{pos:ne,nrm:ze,kind:Qe,uv:ve,idx:He}}let c=i(S0+.02,S0+.4,!0,6),f=i(Yr+.04,tr-.04,!1,9),l={pos:c.pos.concat(f.pos),nrm:c.nrm.concat(f.nrm),kind:c.kind.concat(f.kind),uv:c.uv.concat(f.uv),idx:c.idx.concat(f.idx.map(xt=>xt+c.pos.length/3))},v=t({vert:`
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
			vec3 p = vec3(${Ie(o0.x)} + corner.x * ${Ie(o0.w/2)}, ${Ie(o0.y)} + corner.y * ${Ie(o0.h/2)}, ${Ie(o0.z)});
			v_pos = p; v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`${n}
		varying vec3 v_pos, v_eye;
		void main() {
			vec2 g = v_pos.xy - vec2(${Ie(o0.x)}, ${Ie(o0.y)});
			float hole = grilleHole(g);
			if (hole > 0.5) discard;
			vec3 N = vec3(0.0, 0.0, v_eye.z < ${Ie(o0.z)} ? -1.0 : 1.0);
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
			vec2 g = (v_pos.zy - vec2(${Ie((Hn.z0+Hn.z1)/2)}, ${Ie((Hn.y0+Hn.y1)/2)})) * ${Ie(o0.cell/Hn.cell)};
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
			vec3 p = vec3(${Ie(o0.x)} + corner.x * 0.75, ${Ie(o0.y)} + corner.y * 0.9, ${Ie(Yr-.03)});
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),h=14,g=[];for(let xt=0;xt<h;xt++)[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(vt=>g.push(vt[0],vt[1],(xt+.5)/h));let m=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec3 c;
		varying vec3 v_pos;
		void main() {
			// slices across the booth, from the window back towards the bench
			vec3 p = vec3(${Ie(ME)} + c.x * ${Ie((Wo-hn)/2-.02)}, 0.9 + (c.y + 1.0) * 0.8, ${Ie(K0-.03)} - c.z * 1.25);
			v_pos = p;
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`
		precision highp float;
		uniform float night, time;
		${mb().split("// the candle's light is hidden")[0]}
		varying vec3 v_pos;
		void main() {
			float T = throughGrille(v_pos, 0.0);
			float d = length(v_pos - ${ha(z0)});
			// dust drifting in the beam
			float dust = 0.65 + 0.35 * sin(v_pos.x * 23.0 + time * 0.3) * sin(v_pos.y * 17.0 - time * 0.21) * sin(v_pos.z * 19.0 + time * 0.17);
			vec3 col = vec3(1.0, 0.68, 0.36) * T * dust * 0.035 / (0.4 + d * d * 0.5) * mix(1.0, 0.7, night);
			gl_FragColor = vec4(col, 1.0);
		}`.replace("float grilleHole","float grilleHole"),attributes:{c:{buffer:t.buffer(g),size:3}},count:g.length/3,depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}}),y=(()=>{if(typeof document=="undefined")return null;let xt=document.createElement("canvas");xt.width=512,xt.height=652;let vt=xt.getContext("2d");vt.fillStyle="#cdb38a",vt.fillRect(0,0,xt.width,xt.height);let Et=7,Pt=()=>(Et=Et*1664525+1013904223>>>0,Et/4294967296);for(let ze=0;ze<2400;ze++){vt.fillStyle=`rgba(${Pt()<.5?"90,62,30":"245,230,200"},${.03+Pt()*.05})`;let Qe=Pt()*xt.width,ve=Pt()*xt.height;vt.fillRect(Qe,ve,1+Pt()*14,1)}for(let ze=0;ze<26;ze++){let Qe=Pt()*xt.width,ve=Pt()*xt.height,He=20+Pt()*90,Fe=vt.createRadialGradient(Qe,ve,0,Qe,ve,He);Fe.addColorStop(0,`rgba(120,80,35,${.04+Pt()*.06})`),Fe.addColorStop(1,"rgba(120,80,35,0)"),vt.fillStyle=Fe,vt.fillRect(Qe-He,ve-He,He*2,He*2)}let ne=vt.createRadialGradient(xt.width/2,xt.height/2,xt.width*.3,xt.width/2,xt.height/2,xt.height*.72);return ne.addColorStop(0,"rgba(110,70,30,0)"),ne.addColorStop(1,"rgba(110,70,30,0.38)"),vt.fillStyle=ne,vt.fillRect(0,0,xt.width,xt.height),xt})(),x=y?t.texture({data:y,min:"linear",mag:"linear",flipY:!1}):t.texture(),_=t.texture({shape:[8,8],data:new Uint8Array(8*8*4)}),M=[18,24],w=[],k=[];for(let xt=0;xt<=M[1];xt++)for(let vt=0;vt<=M[0];vt++)w.push(vt/M[0],xt/M[1]);for(let xt=0;xt<M[1];xt++)for(let vt=0;vt<M[0];vt++){let Et=xt*(M[0]+1)+vt,Pt=Et+M[0]+1;k.push(Et,Et+1,Pt,Et+1,Pt+1,Pt)}let E=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale, fold, slide;
		attribute vec2 st;
		varying vec3 v_pos, v_n, v_eye;
		varying vec2 v_st;
		void main() {
			// s across (texture left = +x), t from the near edge (0) to the far (1)
			float s = st.x, t = st.y;
			float x = ${Ie(Lr.cx+Lr.w/2)} - s * ${Ie(Lr.w)};
			float zNear = ${Ie(Lr.cz-Lr.d/2)};
			vec3 p = vec3(x, ${Ie(Lr.y)}, zNear + t * ${Ie(Lr.d)});
			vec3 n = vec3(0.0, 1.0, 0.0);
			// a slight cockle
			p.y += 0.0012 * sin(s * 7.0 + t * 3.0) * sin(t * 5.0);
			// the near half folds up and over onto the far half
			if (t < 0.5) {
				float a = fold * 3.14159 * 0.985;
				float dd = (0.5 - t) * ${Ie(Lr.d)};
				float zf = zNear + 0.5 * ${Ie(Lr.d)};
				p.z = zf - dd * cos(a);
				p.y = ${Ie(Lr.y)} + dd * sin(a) + 0.0016 * fold;
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
			if (v_pos.z > ${Ie(K0+.015)}) discard;
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
		}`,attributes:{st:{buffer:t.buffer(w),size:2}},elements:k,uniforms:{fold:()=>Ts.fold,slide:()=>Ts.slide,paperTex:x,inkTex:_},cull:{enable:!1}}),z=yb();z.lathe(d0.x,d0.z,[[0,vo.top],[.048,vo.top+.002],[.052,vo.top+.012],[.046,vo.top+.014],[.022,vo.top+.012],[0,vo.top+.012]],fn.BRASS,24),z.lathe(d0.x,d0.z,[[0,vo.top+.012],[d0.r,vo.top+.012],[d0.r*1.02,vo.top+.012+d0.h*.6],[d0.r,vo.top+.012+d0.h],[d0.r*.75,vo.top+.012+d0.h-.004],[0,vo.top+.012+d0.h-.008]],9,20),z.tube([[d0.x,vo.top+.012+d0.h-.008,d0.z],[d0.x+.001,vo.top+.012+d0.h+.012,d0.z]],.0012,8,4),z.orient();let P=t({vert:a,frag:`${n}
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
				float up = smoothstep(${Ie(vo.top+d0.h*.4)}, ${Ie(vo.top+.012+d0.h)}, v_pos.y);
				col += vec3(1.0, 0.55, 0.22) * up * 0.22 * candleFlicker();
			}
			gl_FragColor = vec4(col * night, 1.0);
		}`,attributes:{position:z.pos,normal:z.nrm,kind:z.kind,uv:z.uv},elements:z.idx}),R=t({vert:`
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
			vec3 p = ${ha(d0.flame)} + right * corner.x * size.x + vec3(0.0, 1.0, 0.0) * corner.y * size.y;
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{halo:t.prop("halo")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),B=[0,0],$=t({uniforms:{view:t.prop("view")}}),q=new Float32Array(16);function ct(xt){_E.translate(q,xt.view,Aa.OFF),$({view:q},()=>kt(xt))}function kt(xt){let vt=xt&&xt.reflected;if(s(),v(),d(),p(),Ts.ink&&Ts.inkDirty){let Et=Ts.ink;B[0]!==Et.width||B[1]!==Et.height?(_({data:Et,min:"linear",mag:"linear",flipY:!1}),B=[Et.width,Et.height]):_.subimage(Et),Ts.inkDirty=!1}Ts.shown&&E(),vb.night>.01&&(P(),vt||(R({halo:1}),R({halo:0}))),vt||(u(),m())}return ct};Nr.exports.addBay=SE;Nr.exports.BAY=f0;Nr.exports.OFF=Aa.OFF;Nr.exports.STATE=Ts;var gb=t=>[t[0]+Aa.OFF[0],t[1]+Aa.OFF[1],t[2]+Aa.OFF[2]];Nr.exports.SHOTS=Object.fromEntries(Object.entries(xb).map(([t,e])=>[t,Object.assign({},e,{eye:gb(e.eye),target:gb(e.target)})]));Nr.exports.SEAT=Xr;Nr.exports.LAMP=z0;Nr.exports.SCONCE=Y0;Nr.exports.GRILLE=o0;Nr.exports.PAPER=Lr;Nr.exports.ZONE={FRONT:Wo,BACK:hn,ZA:S0,ZB:K0,ZC:Yr,ZD:tr}});var Ep=Tt((UT,wb)=>{"use strict";function zE(t){let e=t>>>0||1;return function(){return e=e*1664525+1013904223>>>0,e/4294967296}}var bb={stroke:.05,letter:.045,word:.15,comma:.28,stop:.45,line:.25,para:.6},EE=["th","ng","er"];function AE(t,e,o){o=Object.assign({ink:"#2a1d12",xh:14,speed:23,lineHeight:2.85,seed:7,width:.12,pace:.45},o||{});let r=t.getContext("2d"),n={};Object.keys(bb).forEach(h=>{n[h]=bb[h]*o.pace});let a=[],s=0,i=0,c=0,f=[];function l(h,g){let m=zE(o.seed),y=o.xh,x={},_=q=>{let ct=e[q];if(!ct)return null;let kt=Math.floor(m()*ct.length);return ct.length>1&&kt===x[q]&&(kt=(kt+1)%ct.length),x[q]=kt,ct[kt]},M=q=>{if(e[q])return{g:_(q),sc:1};let ct=q.toLowerCase();return e[ct]?{g:_(ct),sc:/[A-Z]/.test(q)?1.32:1}:null},w=[],k=.15,E=0,z=0,P=(m()-.5)*.02,R=g/y,B=h.split(/\n\s*\n/);B.forEach((q,ct)=>{q.replace(/\s+/g," ").trim().split(" ").forEach(xt=>{let vt=[];for(let ze=0;ze<xt.length;ze++){let Qe=xt.substr(ze,2).toLowerCase();if(EE.indexOf(Qe)>=0&&e[Qe]&&m()<.55&&xt[ze]===xt[ze].toLowerCase()){vt.push({ch:Qe,gl:{g:_(Qe),sc:1}}),ze++;continue}let ve=M(xt[ze]);ve&&ve.g&&vt.push({ch:xt[ze],gl:ve})}let Et=vt.map(()=>.17+m()*.07),Pt=vt.reduce((ze,Qe,ve)=>ze+Qe.gl.g.w*Qe.gl.sc+Et[ve],0);E>0&&E+Pt>R&&(E=0,z++,k+=n.line,P=(m()-.5)*.02),vt.forEach((ze,Qe)=>{let ve=ze.gl.g,He=ze.gl.sc*(.95+m()*.1),Fe=(m()-.5)*.06,ot=(m()-.5)*.08+P*E,W=E,gt=z*o.lineHeight+1.9+ot,Mt=Math.cos(Fe),le=Math.sin(Fe),me=Ut=>[(W+(Ut[0]*Mt-Ut[1]*le)*He)*y,(gt+(Ut[0]*le+Ut[1]*Mt)*He)*y],se=(Ut,rt)=>{let Xt=0;for(let ae=1;ae<Ut.length;ae++)Xt+=Math.hypot(Ut[ae][0]-Ut[ae-1][0],Ut[ae][1]-Ut[ae-1][1]);let ke=Math.max(o.minDur||(rt?.06:.07),Xt/(o.speed*y));w.push({pts:Ut,L:Xt,start:k,dur:ke,dot:rt}),k+=ke};if(ve.s.forEach((Ut,rt)=>{rt>0&&(k+=n.stroke),se(Ut.map(me),!1)}),ve.dot){let Ut=ve.s[0][0];ve.s.forEach(Xt=>Xt.forEach(ke=>{ke[1]<Ut[1]&&(Ut=ke)}));let rt=me([Ut[0]+.1,-1.36]);k+=n.stroke*1.4,se([rt,[rt[0]+y*.05,rt[1]+y*.03]],!0)}k+=n.letter*(.6+m()*.8),E+=ve.w*He+Et[Qe]});let ne=xt[xt.length-1];k+=/[.!?]/.test(ne)?n.stop:/[,;:]/.test(ne)?n.comma:n.word,E+=.55+m()*.2}),ct<B.length-1&&(E=0,z+=1.6,k+=n.para)});let $=(z+1)*o.lineHeight*y+y*1.55;return{strokes:w,total:k,height:$}}function v(h,g){if(o.fixed){let m=o.fixed;r.setTransform(1,0,0,1,m.mx,m.my),r.clearRect(-m.mx,-m.my,t.width,t.height)}else{let m=Math.min(window.devicePixelRatio||1,2);t.width=Math.round(h*m),t.height=Math.round(g*m),t.style.height=g+"px",t.style.width=h+"px",r.setTransform(m,0,0,m,0,0),r.clearRect(0,0,h,g)}r.strokeStyle=o.ink,r.fillStyle=o.ink,r.lineCap="round",r.lineJoin="round",o.shadow&&(r.shadowColor=o.shadow,r.shadowBlur=o.shadowBlur||6)}let d=h=>h<.5?2*h*h:1-Math.pow(-2*h+2,2)/2;function p(h,g){let m=f[h.i]||0;if(g<=m)return;let y=o.width*o.xh,x=0;for(let _=1;_<h.pts.length;_++){let M=h.pts[_-1],w=h.pts[_],k=Math.hypot(w[0]-M[0],w[1]-M[1]),E=x,z=x+k;if(x=z,z<=m||k===0)continue;if(E>=g)break;let P=Math.max(0,(m-E)/k),R=Math.min(1,(g-E)/k),B=[M[0]+(w[0]-M[0])*P,M[1]+(w[1]-M[1])*P],$=[M[0]+(w[0]-M[0])*R,M[1]+(w[1]-M[1])*R],q=(E+z)/2/(h.L||1),ct=.72+.28*Math.sin(Math.PI*Math.min(1,Math.max(0,q)));r.lineWidth=y*ct,r.globalAlpha=.86+.14*ct,r.beginPath(),r.moveTo(B[0],B[1]),r.lineTo($[0],$[1]),r.stroke()}h.dot&&m===0&&(r.globalAlpha=1,r.beginPath(),r.arc(h.pts[0][0],h.pts[0][1],y*.75,0,Math.PI*2),r.fill()),f[h.i]=g}function u(h){let g=(h-c)/1e3;for(let m=0;m<a.length;m++){let y=a[m];if(y.start>g)break;let x=Math.min(1,(g-y.start)/y.dur);p(y,d(x)*y.L)}if(o.onPen){let m=0;for(;m+1<a.length&&a[m+1].start<=g;)m++;a[m]&&o.onPen(a[m].pts[0][1])}g<s?i=requestAnimationFrame(u):o.onDone&&o.onDone()}return{write(h,g){cancelAnimationFrame(i);let m=o.fixed?t.width-2*o.fixed.mx:t.parentElement.clientWidth,y=l(h,m);a=y.strokes,s=y.total;let x=typeof o.maxTime=="function"?o.maxTime(h):o.maxTime;if(x&&s>x){let M=x/s;a.forEach(w=>{w.start*=M,w.dur*=M}),s=x}a.forEach((M,w)=>{M.i=w}),f=[],v(m,y.height);let _=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(g||_){a.forEach(M=>p(M,M.L));return}return c=performance.now(),i=requestAnimationFrame(u),s},finish(){cancelAnimationFrame(i),a.forEach(h=>p(h,h.L)),o.onDone&&o.onDone()},stop(){cancelAnimationFrame(i)}}}wb.exports=AE});var Tp=Tt((BT,_b)=>{"use strict";var Ap=on(),TE='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M5.5 18.5l1.7-1.7M16.8 7.2l1.7-1.7"/></svg>',LE='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M19.5 14.6A8 8 0 0 1 9.4 4.5a8 8 0 1 0 10.1 10.1z"/></svg>';_b.exports=function(e){let o=document.createElement("button");o.type="button",o.className=e+" light-toggle";let r=()=>{let n=Ap.isNight;o.innerHTML=n?TE:LE,o.setAttribute("aria-label",n?"Switch to day":"Switch to night"),o.title=n?"Day":"Night",o.setAttribute("aria-pressed",n?"true":"false")};return r(),Ap.onChange(r),["mousedown","pointerdown"].forEach(n=>o.addEventListener(n,a=>a.stopPropagation())),o.addEventListener("click",n=>{n.stopPropagation(),Ap.toggle()}),o}});var zb=Tt((jT,Sb)=>{"use strict";var Z0=L1(),NE=hs(),OE=Ep(),RE="81efb912-50a2-4fcd-b5e8-c3a28eecbe93",Mb=100,Ya=t=>Math.max(0,Math.min(1,t)),vr=(t,e,o)=>{let r=Ya((o-t)/(e-t));return r*r*(3-2*r)},ua=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,Kr=(t,e,o)=>t+(e-t)*o,Mf=(t,e,o)=>[Kr(t[0],e[0],o),Kr(t[1],e[1],o),Kr(t[2],e[2],o)];function zi(t,e){let o=t.length-1,r=Ya(e)*o,n=Math.min(o-1,Math.floor(r)),a=r-n,s=t[Math.max(0,n-1)],i=t[n],c=t[n+1],f=t[Math.min(o,n+2)];return[0,1,2].map(l=>.5*(2*i[l]+(-s[l]+c[l])*a+(2*s[l]-5*i[l]+4*c[l]-f[l])*a*a+(-s[l]+3*i[l]-3*c[l]+f[l])*a*a*a))}var N1=t=>({eye:t.eye.slice(),target:t.target.slice(),fov:t.fov,roll:0});function Lp(t,e,o){return{eye:Mf(t.eye,e.eye,o),target:Mf(t.target,e.target,o),fov:Kr(t.fov,e.fov,o),roll:Kr(t.roll||0,e.roll||0,o)}}var kf=NE.PLAY,da=[kf.stoolX,1,kf.keyFront+.25],O1=[kf.stoolX,kf.keyTop+.03,kf.keyFront-.05],Op=t=>{let e=(15+110*t)*Math.PI/180,o=2.1+.4*t;return[da[0]+Math.cos(e)*o,1.15+.4*t,da[2]+Math.sin(e)*o]},Bc=[{eye:Op(1),target:[da[0],.92,da[2]-.15],fov:46,aperture:.6},{eye:[-6.93,3.2,45.85],target:[-6.93,.77,45.3],fov:34,aperture:.6,to:O1},{eye:[da[0]+1,1.14,da[2]+1.72],target:[O1[0]+.05,.8,O1[2]+.05],fov:40,aperture:1,to:O1}],kb=(t,e)=>Math.hypot(t[0]-e[0],t[1]-e[1],t[2]-e[2]),R1=t=>({fade:0,letterbox:.55,exposure:1.3,focus:kb(t.eye,t.to||da),aperture:t.aperture,vignette:.42,shafts:0}),Np={fade:0,letterbox:.55,exposure:2.1,focus:6.2,aperture:.55,vignette:.45,shafts:0},jc={fade:0,letterbox:.55,exposure:2,focus:.82,aperture:1.1,vignette:.48,shafts:0},_f={fade:0,letterbox:.55,exposure:1.8,focus:.42,aperture:1.3,vignette:.5,shafts:0},CE=`
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
`;Sb.exports=function(e){let{root:o,avatar:r}=e,n=document.createElement("style");n.textContent=CE,document.head.appendChild(n);let a=document.createElement("div");a.className="conf-ui",a.innerHTML=`
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
		</div>`,o.appendChild(a);let s=a.querySelector(".conf-write"),i=a.querySelector("textarea"),c=a.querySelector('[data-act="send"]'),f=a.querySelector(".conf-hint"),l=a.querySelector(".conf-close"),v=a.querySelector(".conf-final"),d=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,p=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;i.addEventListener("input",()=>{let rt=i.value.match(new RegExp("^\\s*(\\S+\\s+){0,"+(Mb-1)+"}\\S+"));(i.value.trim()?i.value.trim().split(/\s+/).length:0)>Mb&&rt&&(i.value=rt[0]),c.disabled=!i.value.trim()}),["keydown","keyup","keypress"].forEach(rt=>i.addEventListener(rt,Xt=>Xt.stopPropagation())),a.addEventListener("pointerdown",rt=>rt.stopPropagation()),a.addEventListener("click",rt=>{let Xt=rt.target.closest("button");Xt&&(rt.stopPropagation(),Xt.dataset.act==="send"&&ct(),Xt.dataset.act==="leave"&&vt())});let u=!1,h="",g=0,m=null,y=null,x="",_=null,M=0,w="",k=document.createElement("canvas");k.width=512,k.height=652;function E(rt){rt!==w&&(w=rt,s.classList.toggle("on",rt==="write"),f.classList.toggle("on",rt==="hint"),l.classList.toggle("on",u&&rt==="hint"&&(h==="room"||h==="peek")),v.classList.toggle("on",rt==="final"),rt==="write"&&setTimeout(()=>{if(h==="write")try{i.focus({preventScroll:!0})}catch(Xt){}},900))}function z(rt){h=rt,g=0}function P(rt,Xt){if(u)return;u=!0,m={eye:rt.eye.slice(),target:rt.target.slice(),fov:rt.fov,roll:rt.roll||0},y=Object.assign({},Xt),x="",i.value="",c.disabled=!0,Z0.STATE.fold=0,Z0.STATE.slide=0,Z0.STATE.shown=!0,Z0.STATE.active=!0;let ke=k.getContext("2d");ke.setTransform(1,0,0,1,0,0),ke.clearRect(0,0,k.width,k.height),Z0.STATE.ink=k,Z0.STATE.inkDirty=!0,document.body.classList.add("confessing");let ae=Bc[0],Nt=p?.3:5.5,$e=p?.3:3.6;R.i=0,R.u=0,R.T=Nt+$e,R.moving=!0,R.rest=0,R.raw=!0,R.lookFrom=y,R.lookTo=R1(ae);let S=[m.eye,[3.4,1.75,44.5],[.3,1.72,44.7],[-2.8,1.5,45.4],Op(0)],qe=[m.target,[-3,1.9,44.5],[-6.5,1.3,44.9],[da[0],1,da[2]-.1],ae.target];R.path=je=>{let lo=je*(Nt+$e);if(lo<Nt){let Fo=lo/Nt,qo=1-Math.cos(Fo*Math.PI/2);return{eye:zi(S,qo),target:zi(qe,vr(0,1,qo*1.05)),fov:Kr(m.fov,52,vr(.4,1,qo)),roll:(m.roll||0)*(1-qo)}}let Oo=(lo-Nt)/$e,_o=1-Math.pow(1-Oo,2.4);return{eye:Op(_o),target:ae.target,fov:Kr(52,ae.fov,_o),roll:.05*Math.sin(Math.PI*_o)}},z("room"),E("")}let R={i:0,u:0,T:1,moving:!1,rest:0,raw:!1,path:null,lookFrom:null,lookTo:null},B=()=>d?"Scroll on":"Swipe up";function $(rt){let Xt=ne,ke=Bc[rt],ae={eye:Xt.eye.slice(),target:Xt.target.slice(),fov:Xt.fov,roll:Xt.roll||0},Nt=Mf(ae.eye,ke.eye,.5),$e=[Nt[0]-da[0],0,Nt[2]-da[2]],S=Math.hypot($e[0],$e[2])||1,qe=[Nt[0]+$e[0]/S*.6,Nt[1]+.3,Nt[2]+$e[2]/S*.6];R.path=je=>{let lo=1-je;return{eye:[0,1,2].map(Oo=>lo*lo*ae.eye[Oo]+2*lo*je*qe[Oo]+je*je*ke.eye[Oo]),target:Mf(ae.target,ke.target,vr(0,1,je)),fov:Kr(ae.fov,ke.fov,je),roll:ae.roll*lo}},R.lookFrom=q||R1(Bc[R.i]),R.lookTo=R1(ke),R.i=rt,R.u=0,R.moving=!0,R.rest=0,R.raw=!1,R.T=p?.4:Math.max(2.8,Math.min(4.4,kb(ae.eye,ke.eye)*1+1.6)),E("")}let q=null;function ct(){if(h!=="write"||(x=i.value.trim(),!x))return;i.blur(),E("");let rt=Math.max(10,Math.min(22,24-x.length/28));_=OE(k,e.glyphs(),{ink:"rgba(30,16,8,0.97)",xh:rt,width:.15,seed:11+x.length,speed:60,pace:.2,minDur:.03,maxTime:Xt=>2.4+Xt.length/160,fixed:{mx:46,my:40},onPen:()=>{Z0.STATE.inkDirty=!0},onDone:()=>{Z0.STATE.inkDirty=!0}}),z("down")}function kt(){try{let rt={access_key:RE,subject:"A note left in the confessional",from_name:"Your gallery",message:x,page:location.href,when:new Date().toString()};fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(rt),keepalive:!0}).catch(()=>{})}catch(rt){}}function xt(){h==="ready"&&(kt(),z("fold"),E(""))}function vt(){!u||h==="leave"||(E(""),i.blur(),Et=ne,Pt=q,z("leave"))}let Et=null,Pt=null,ne=null,ze=Z0.SHOTS.window,Qe=Z0.OFF,ve=rt=>[rt[0]+Qe[0],rt[1],rt[2]],He=[[3.4,1.75,44.5],[.3,1.72,44.5],[-2.5,1.66,45],[-4.6,1.6,46.55],[-7,1.58,47.15],[-9.3,1.55,46.4],ve([1.25,1.5,43.25]),ve([-.55,1.36,42.92])],Fe=[[-3,1.9,44.5],[-6.5,1.5,44.6],[-7,1,44.4],[-7.6,.95,44],[-10.5,1.5,44.6],ve([-1,1.55,43.6]),ve([-1.4,1.35,43.1]),ve([-1.5,1.33,43.3])];function ot(rt){let Xt=ua(Ya(rt)),ke=[m.eye,...He,ze.eye],ae=[m.target,...Fe,ze.target];return{eye:zi(ke,Xt),target:zi(ae,vr(0,1,Xt*1.03)),fov:Kr(m.fov,ze.fov,vr(.6,.97,Xt)),roll:(m.roll||0)*(1-Xt)}}function W(rt,Xt){if(p)return rt;let ke=performance.now()/1e3,ae=.004*Xt,Nt=Math.sin(ke*.61)*.6+Math.sin(ke*1.37+1.3)*.4,$e=Math.sin(ke*.47+2.1)*.6+Math.sin(ke*1.13+.4)*.4;return{eye:[rt.eye[0]+Nt*ae,rt.eye[1]+$e*ae*.7,rt.eye[2]],target:[rt.target[0]+$e*ae*1.5,rt.target[1]+Nt*ae,rt.target[2]],fov:rt.fov,roll:rt.roll}}function gt(rt,Xt,ke){let ae={};for(let Nt in Xt)ae[Nt]=typeof Xt[Nt]=="number"&&typeof rt[Nt]=="number"?Kr(rt[Nt],Xt[Nt],ke):Xt[Nt];return ae}function Mt(rt){rt*=window.__confSpeed||1,g+=rt;let Xt=N1(ze),ke=N1(Z0.SHOTS.paper),ae,Nt,$e=N1(Z0.SHOTS.peek);if(h==="room")R.moving?(R.u=Math.min(1,R.u+rt/R.T),ae=R.path(R.raw?R.u:ua(R.u)),Nt=gt(R.lookFrom,R.lookTo,vr(.1,.9,R.u)),R.raw&&(Nt.fade=(y.fade||0)*(1-vr(0,.12,R.u))),R.u>=1&&(R.moving=!1,R.rest=0,f.textContent=B(),E("hint"))):(R.rest+=rt,ae=W(N1(Bc[R.i]),2.5),Nt=R1(Bc[R.i]));else if(h==="enter"){let qe=Ya(g/(p?.6:9)),je=ua(qe),lo=[le.eye,[-7.6,1.9,47.6],[-9.6,1.85,45.6],ve([.75,1.5,42.95]),ve([-.25,1.42,42.82]),ve([-.9,1.42,42.82]),$e.eye];ae={eye:zi(lo,je),target:Mf(le.target,$e.target,vr(0,.35,je)),fov:Kr(le.fov,$e.fov,vr(.3,1,je)),roll:0},Nt=gt(me,Np,vr(.2,.9,qe)),qe>=1&&z("peek")}else if(h==="peek")ae=W($e,1.5),Nt=Np,g>(p?.5:3.2)&&z("turn");else if(h==="turn"){let S=Ya(g/(p?.4:3.2));ae=Lp($e,Xt,ua(S)),Nt=gt(Np,jc,ua(S)),S>=1&&(z("write"),E("write"))}else if(h==="write")ae=W(Xt,1),Nt=jc;else if(h==="down"){let S=Ya(g/(p?.4:2));ae=Lp(Xt,ke,ua(S)),Nt=gt(jc,_f,ua(S)),S>=1&&(M=_.write(x,p)||0,Z0.STATE.inkDirty=!0,z("writing"))}else if(h==="writing")ae=W(ke,.6),Nt=_f,g>M+.8&&(z("ready"),f.textContent=d?"Scroll to fold it and pass it through":"Swipe up to fold it and pass it through",E("hint"));else if(h==="ready")ae=W(ke,.6),Nt=_f;else if(h==="fold"){let S=Ya(g/(p?.3:1.5));Z0.STATE.fold=ua(S),ae=W(ke,.6),Nt=_f,S>=1&&z("slide")}else if(h==="slide"){let qe=Ya(g/(p?.6:3.4));Z0.STATE.slide=ua(vr(0,.7,qe));let je=ua(vr(.35,1,qe));ae=Lp(ke,Xt,je),Nt=gt(_f,jc,je),qe>=1&&(Z0.STATE.shown=!1,z("final"),E("final"))}else if(h==="final")ae=W(Xt,1),Nt=jc;else if(h==="leave"){let S=p?.6:Et.eye[0]<Qe[0]-.3?12:7,qe=Ya(g/S),je={eye:m.eye,target:m.target,fov:m.fov,roll:m.roll},lo=ua(qe),Oo=Et.eye[0]<Qe[0]-.3,_o=Oo?[Et.eye,ve([-.55,1.4,42.8]),ve([1.4,1.55,43.3]),[-9.3,1.58,46.4],[-7,1.6,47.15],[-4.6,1.62,46.55],[-2.2,1.68,44.8],[.6,1.72,44.5],je.eye]:[Et.eye,[-3.4,1.7,46.2],[-1.2,1.7,44.8],[.6,1.72,44.5],je.eye],Fo=Oo?[Et.target,ve([1.5,1.45,43.4]),[-7,1.2,44.6],[-4,1.5,47],[-1.5,1.7,45.5],[1,1.8,44.5],[4,1.8,44.5],[7,1.9,44.2],je.target]:[Et.target,[-1.5,1.7,45.2],[2,1.8,44.5],[6,1.9,44.3],je.target];if(ae={eye:zi(_o,lo),target:zi(Fo,lo),fov:Kr(Et.fov,je.fov,lo),roll:je.roll*lo},Nt=gt(Pt||jc,y,vr(.1,.7,qe)),Nt.fade=(y.fade||0)*vr(.82,1,qe),qe>=1){u=!1,Z0.STATE.active=!1,Z0.STATE.shown=!0,Z0.STATE.fold=0,Z0.STATE.slide=0;let qo=k.getContext("2d");qo.setTransform(1,0,0,1,0,0),qo.clearRect(0,0,k.width,k.height),Z0.STATE.inkDirty=!0,document.body.classList.remove("confessing"),e.onExit&&e.onExit()}}return ne=ae,q=Nt,{camera:ae,look:Nt}}let le=null,me=null;function se(){if(h==="room"){if(R.moving||R.rest<.4)return;R.i<Bc.length-1?$(R.i+1):(le=ne,me=q,E(""),z("enter"));return}if(h==="peek"){g>.4&&z("turn");return}h==="ready"?xt():h==="writing"&&_&&(_.finish(),g=Math.max(g,M))}function Ut(){h==="room"&&!R.moving&&R.rest>.4&&R.i>0&&$(R.i-1)}return{start:P,update:Mt,leave:vt,get active(){return u},get stage(){return h},wheel(rt){rt>8?se():rt<-8&&Ut()},swipe(rt){rt>0?se():rt<0&&Ut()},tap(){se()},key(rt){return["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(rt)>=0?(se(),!0):["ArrowUp","ArrowLeft","PageUp"].indexOf(rt)>=0?(Ut(),!0):rt==="Escape"?(vt(),!0):!1},_setNote(rt){i.value=rt,i.dispatchEvent(new Event("input"))}}}});var $b=Tt((WT,Cb)=>{"use strict";var Wc=Mc(),C1=np(),Rp=mh(),$E=Nl(),Cp=ap(),PE=qr(),$1=!PE.isPhone&&!!(window.matchMedia&&window.matchMedia("(pointer: fine)").matches),{A:Or}=Gr(),{C:En,PAINTING_X:Kc}=Tn(),gr=t=>Math.max(0,Math.min(1,t)),he=(t,e,o)=>t+(e-t)*o,c0=(t,e,o)=>[he(t[0],e[0],o),he(t[1],e[1],o),he(t[2],e[2],o)],Co=(t,e)=>[t[0]+e[0],t[1]+e[1],t[2]+e[2]],$p=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],er=(t,e)=>[t[0]*e,t[1]*e,t[2]*e],re=(t,e,o)=>{let r=gr((o-t)/(e-t));return r*r*(3-2*r)};function IE(t,e,o,r,n,a){if(n<=0)return[t,o];let s=2/r,i=s*n,c=1/(1+i+.48*i*i+.235*i*i*i),f=a*r,l=Math.max(-f,Math.min(f,t-e)),v=t-l,d=(o+s*l)*n,p=(o-s*d)*c,u=v+(l+d)*c;return e-t>0==u>e&&(u=e,p=0),[u,p]}var Eb=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,qE=t=>t*t*t,Pp=t=>1-Math.pow(1-t,3),O0=t=>-(Math.cos(Math.PI*t)-1)/2;function G0(t,e){let o=t.length-1,r=gr(e)*o,n=Math.min(o-1,Math.floor(r)),a=r-n,s=t[Math.max(0,n-1)],i=t[n],c=t[n+1],f=t[Math.min(o,n+2)],l=a*a,v=l*a;return[0,1,2].map(d=>.5*(2*i[d]+(-s[d]+c[d])*a+(2*s[d]-5*i[d]+4*c[d]-f[d])*l+(-s[d]+3*i[d]-3*c[d]+f[d])*v))}var Lo=(t,e,o,r)=>({eye:t,target:e,fov:o,roll:r||0});function Ni(t,e,o){return Lo(c0(t.eye,e.eye,o),c0(t.target,e.target,o),he(t.fov,e.fov,o),he(t.roll,e.roll,o))}var Gp=()=>re(.75,1.3,window.innerWidth/window.innerHeight),or=(t,e)=>Ni(t,e,Gp()),P1=[7,3.95,En.hallEnd-.05],DE=[En.x1,2.9,En.zc],Xc=[16.75,4.55,6.75],Hp=[6.92,2.72,14.5],pa=[7.3,.015,47.1],FE=[Xc,[16.2,4,7],[15.3,3.45,6.4],[14.1,3.2,5.7],[12.2,3.35,6.6],[10,3.75,9.6],[8.2,3.8,12.2],[7.3,3.4,13.8],Hp],GE=[Hp,[7.3,4.6,19.5],[7.6,4.9,23.5],[6.6,4.3,28.5],[7.5,3.2,34],[6.8,2.1,39.5],[7.4,1,44.2],[7.2,.3,46.4],pa],Ai=[Kc[0],3,En.z0],Ti=[Kc[1],3,En.z0],qp=47.45,Rb=4.6,HE=13.2,UE=1.57,Sf=[7.55,1.25,46.75],Up=[17.25,2.42,46],Bp=[26.05,1.95,46],zf=[36.15,.015,44],F1=()=>he(6.8,6.15,Gp()),BE=[Sf,[9.6,1.65,46.2],[12.3,2.05,45.1],[14.6,2.35,44.5],[16.2,2.3,44.7],Up],jE=[Up,[20.2,2.05,45.6],[23.2,1.8,45],Bp],Li=[Kc[2],3,En.z0],Dp=[34.8,1.35,46],Os=[7.89,.03,19.03],Ab=.36,Tb=13.64,Rn=[{side:"left",z:34.5},{side:"left",z:23.5},{side:"left",z:14.6},{side:"right",z:14.6},{side:"right",z:23.5},{side:"right",z:34.5}];function Zr(t){let e=t.side==="left"?1:-1;return c0([7-e*1,3,t.z+e*.2],[7-e*.6,3.25,t.z+e*.13],Gp())}function WE(t){return t.side==="left"?or(Lo([8.6,3.9,t.z],[Ab,1.45,t.z],76),Lo([8,3.6,t.z+.7],[Ab,3.95,t.z-2],46,-.008)):or(Lo([5.4,3.9,t.z],[Tb,1.45,t.z],76),Lo([6,3.6,t.z-.7],[Tb,3.95,t.z+2],46,-.008))}var VE=()=>[zf,[35.6,.5,44.6],[33.2,1.5,45.6],[29,2.3,46.1],[23.5,2.7,45.9],[18.5,2.9,45.4],[14.8,3.1,44.3],[11,3.3,41.8],[7.4,3.4,38.8],[5.4,3.3,36.6],Zr(Rn[0])],XE=()=>[Zr(Rn[2]),[3,3.2,13.2],[1.7,3,12],[2.6,3.2,10],[5,3.6,8.9],[7,3.8,8.6],[9,3.6,8.9],[11.4,3.2,10],[12.3,3,12],[11,3.1,13.4],Zr(Rn[3])],YE=()=>[Zr(Rn[5]),[9,3.4,31],[7.8,2.8,27.5],[6.8,1.9,24.5],[7.4,1,21],[7.75,.35,19.6],Os],Lb={2:{pos:()=>Hp,amp:[.18,.07,.12],tumble:.5},7:{pos:()=>Sf,amp:[.12,.09,.1],tumble:.55},8:{pos:()=>Up,amp:[.1,.08,.08],tumble:.5},9:{pos:()=>Bp,amp:[.09,.06,.07],tumble:.45},10:{pos:()=>Dp,amp:[.07,.04,.06],tumble:.35},12:{pos:()=>Zr(Rn[0]),amp:[.12,.08,.1],tumble:.5},13:{pos:()=>Zr(Rn[1]),amp:[.12,.08,.1],tumble:.5},14:{pos:()=>Zr(Rn[2]),amp:[.12,.08,.1],tumble:.5},15:{pos:()=>Zr(Rn[3]),amp:[.12,.08,.1],tumble:.5},16:{pos:()=>Zr(Rn[4]),amp:[.12,.08,.1],tumble:.5},17:{pos:()=>Zr(Rn[5]),amp:[.12,.08,.1],tumble:.5}},Ns=[{name:"corridor",ui:"intro",look:{letterbox:1,exposure:1,focus:14,aperture:.25,vignette:.1},cam(t){let e=.9*(1-Math.exp(-t/14)),o=[0,Math.sin(t*.37)*.025,Math.sin(t*.23)*.06],r=or(Lo([En.x0+.9,1.85,En.zc+.25],[En.x1,2.85,En.zc-.1],64),Lo([En.x0+1.2,2,En.zc+.35],[En.x1,2.6,En.zc-.15],50));return r.eye=Co(Co(r.eye,[e,0,0]),o),r}},{name:"about",ui:"about",look:{letterbox:.55,exposure:1.32,focus:2.9,aperture:.9,vignette:.12,shafts:.65},cam(t){let e=[Math.sin(t*.21)*.08,Math.sin(t*.33)*.03,-.25*(1-Math.exp(-t/12))],o=or(Lo([16.6,1.9,9.2],[17.3,.4,5.6],64),Lo([15,1.35,7.75],[17.55,1.05,5.5],44,-.02));return o.eye=Co(o.eye,e),o}},{name:"sky",ui:"sky",look:{letterbox:.55,exposure:1,focus:2.1,aperture:.45,vignette:.1,shafts:1},cam(t){let e=[Math.sin(t*.12)*.35,Math.sin(t*.2)*.04,(1-Math.cos(t*.12))*.25],o=or(Lo([7,1.35,13],[7.2,7.6,20.4],74,.05),Lo([6.6,1.5,12.6],[7.3,7.2,20.8],56,.07));return o.eye=Co(o.eye,e),o}},{name:"master",ui:"master",look:{letterbox:.55,exposure:1.12,focus:8,aperture:.6,vignette:.3,shafts:.5},cam(t){let e=[Math.sin(t*.17)*.05,Math.sin(t*.29)*.02,-.35*(1-Math.exp(-t/16))],o=or(Lo([7,3.6,43.7],[7,3.85,P1[2]],74),Lo([7,3.6,41.3],[7,3.95,P1[2]],46));return o.eye=Co(o.eye,e),o}},{name:"story",ui:"story",look:{letterbox:.55,exposure:1,focus:8.1,aperture:.9,vignette:.4,shafts:.4},cam(t){let e=[Math.sin(t*.15)*.04,Math.sin(t*.25)*.015,0],o=or(Lo([7,3.9,40.3],[7,1.35,P1[2]],76),Lo([6.3,3.6,41.2],[3.7,3.95,P1[2]],46,-.008));return o.eye=Co(o.eye,e),o}},{name:"leaf",ui:"leaf",look:{letterbox:.55,exposure:1.15,focus:1.25,aperture:1.3,vignette:.35,shafts:.4},cam(t){let e=[Math.sin(t*.2)*.02,Math.sin(t*.3)*.006,0],o=or(Lo([7.15,.15,46],[7.3,.04,pa[2]],50),Lo([7.05,.14,45.9],[7.25,.05,pa[2]],32));return o.eye=Co(o.eye,e),o}},{name:"steps",ui:"steps",look:{letterbox:.9,exposure:1.2,focus:1.6,aperture:1.4,vignette:.4,shafts:.4},cam(t){let e=[Math.sin(t*.2)*.015,0,0],o=or(Lo([7.15,.1,46.3],[7.05,.1,qp],50),Lo([7.1,.12,45.85],[7,.2,qp],30));return o.eye=Co(o.eye,e),o}},{name:"float",ui:"float",look:{letterbox:.55,exposure:1.1,focus:2.2,aperture:.8,vignette:.3,shafts:.6},cam(t){let e=[Math.sin(t*.17)*.05,Math.sin(t*.27)*.02,0],o=or(Lo([7.3,.85,45.65],[7.6,1.38,47.1],64),Lo([7.25,.82,45.8],[7.65,1.35,47.1],44));return o.eye=Co(o.eye,e),o}},{name:"painting1",ui:"p1",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(t){let e=[Math.sin(t*.15)*.04,Math.sin(t*.25)*.015,0],o=or(Lo([Ai[0],2.3,46.85],[Ai[0],1.25,Ai[2]],74),Lo([Ai[0]-.6,2.55,46.85],[Ai[0]+1.9,2.9,Ai[2]],46,.008));return o.eye=Co(o.eye,e),o}},{name:"painting2",ui:"p2",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(t){let e=[Math.sin(t*.15)*.04,Math.sin(t*.25)*.015,0],o=or(Lo([Ti[0],1.95,46.85],[Ti[0],1,Ti[2]],74),Lo([Ti[0]-.6,2.1,46.85],[Ti[0]+1.9,2.75,Ti[2]],46,.008));return o.eye=Co(o.eye,e),o}},{name:"painting3",ui:"p3",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.9},cam(t){let e=[Math.sin(t*.15)*.04,Math.sin(t*.25)*.015,0],o=or(Lo([Li[0],1.4,46.85],[Li[0],.6,Li[2]],74),Lo([Li[0]-.6,1.45,46.85],[Li[0]+1.9,2,Li[2]],46,.008));return o.eye=Co(o.eye,e),o}},{name:"door",ui:"door",look:{letterbox:.8,exposure:1.05,focus:1.45,aperture:1.1,vignette:.35,shafts:1},cam(t){let e=[Math.sin(t*.2)*.02,Math.sin(t*.3)*.006,0],o=or(Lo([34.75,.5,44.15],[En.x1,.8,43.95],66),Lo([34.75,.45,44.3],[En.x1,.35,43.95],50));return o.eye=Co(o.eye,e),o}},...Rn.map((t,e)=>({name:"hall"+e,ui:"h"+e,look:{letterbox:.55,exposure:1,focus:7.6,aperture:.7,vignette:.35,shafts:.7},cam(o){let r=[Math.sin(o*.15)*.04,Math.sin(o*.25)*.015,Math.sin(o*.11)*.04],n=WE(t);return n.eye=Co(n.eye,r),n}})),{name:"rest",ui:"end",look:{letterbox:.55,exposure:1.05,focus:2.4,aperture:.5,vignette:.4,shafts:1.15},cam(t){let e=t*.025,o=or(Lo([7.75,2.6,18.6],[7.89,0,19.08],60),Lo([7.75,2.3,18.45],[7.89,0,19.08],46)),r=o.eye[0]-Os[0],n=o.eye[2]-Os[2];return o.eye=[Os[0]+r*Math.cos(e)-n*Math.sin(e),o.eye[1],Os[2]+r*Math.sin(e)+n*Math.cos(e)],o}}],KE=[1,.96,.88];function Nb(t,e){return{dur:e,cam(o,r,n){let a=O0(o),s=Ni(r,n,a),i=Rn[t].side==="left"?1:-1;return s.eye=Co(s.eye,[i*.6*Math.sin(Math.PI*a),.15*Math.sin(Math.PI*a),0]),s},look(o,r,n){let a={};for(let s in n)typeof n[s]=="number"&&(a[s]=he(r[s],n[s],o));return a.aperture=he(r.aperture,n.aperture,o)*(1-.5*Math.sin(Math.PI*o)),a},leaf(o){let r=O0(o),n=Zr(Rn[t]),a=Zr(Rn[t+1]),s=Rn[t].side==="left"?1:-1,i=Co(c0(n,a,.5),[s*1.2,.5,0]),c=G0([n,c0(n,i,.6),i,c0(a,i,.6),a],r);return{phase:"fly",pos:Co(c,[0,Math.sin(o*Math.PI*5)*.07*Math.sin(Math.PI*o),0]),tumble:.5+.35*Math.sin(Math.PI*o)}}}}var Ip=[{dur:6.2,cam(t,e,o){if(t<.5){let i=qE(t/.5),c=c0(e.eye,[En.x1-3.2,2.6,En.zc],i),f=c0(e.target,DE,re(0,.6,t/.5));return Lo(c,f,he(e.fov,e.fov-8,i),he(e.roll,.04,i))}let r=Pp((t-.5)/.5),n=[[Or.cx+.4,10.4,Or.zc+.6],[Or.cx-.6,7.6,Or.zc+1.3],[Or.cx-1.9,4.6,Or.zc+1.75],o.eye],a=[[Or.cx-.1,0,Or.zc-.2],[Or.cx-1,.4,Or.zc-.1],[Or.cx-1.1,.8,Or.zc-.2],o.target];return Lo(G0(n,r),G0(a,r),he(o.fov+14,o.fov,r),he(-.25,o.roll,r))},look(t,e,o){let r=re(.22,.5,t),n=1-re(.5,.74,t);return{fade:t<.5?r:n,fadeColor:KE,exposure:he(e.exposure,o.exposure,re(.5,.9,t))*(1+2.2*(t<.5?re(.15,.5,t):1-re(.5,.8,t))),letterbox:he(e.letterbox,o.letterbox,re(.3,.7,t)),aperture:t<.5?e.aperture*(1-t*2):o.aperture*re(.6,1,t),focus:he(4,o.focus,re(.5,1,t)),shafts:he(e.shafts,o.shafts,re(.4,.6,t)),vignette:he(e.vignette,o.vignette,t)}},leaf(){return{phase:"home"}}},{dur:9,cam(t,e,o,r){let n=[e.eye,[15.6,2.4,8.3],[15.4,2.7,7.1],[12.6,2.6,5.4],[9.6,2,7.4],[7.6,1.6,10.6],o.eye],a=G0(n,O0(t)),s=re(0,.12,t)*(1-re(.82,1,t)),i=c0(c0(e.target,o.target,re(.55,1,t)),r.pos,s),c=he(e.fov,o.fov,re(.3,1,t))-6*Math.sin(Math.PI*t),f=he(e.roll,o.roll,t)+.05*Math.sin(Math.PI*2*t);return Lo(a,i,c,f)},look(t,e,o,r,n){let a=Math.hypot(r.pos[0]-n[0],r.pos[1]-n[1],r.pos[2]-n[2]);return{exposure:he(e.exposure,o.exposure,re(.25,.75,t)),letterbox:he(e.letterbox,o.letterbox,t),focus:he(a,o.focus,re(.8,1,t)),aperture:he(.7,o.aperture,re(.8,1,t)),shafts:he(e.shafts,o.shafts,re(.3,.8,t)),vignette:he(e.vignette,o.vignette,t)}},leaf(t){let e=Eb(t),o=Math.sin(t*Math.PI*7)*.14*Math.sin(Math.PI*t);return{phase:"fly",pos:Co(G0(FE,e),[0,Math.sin(t*Math.PI*9)*.05*Math.sin(Math.PI*t),o]),tumble:1-.5*re(.8,1,t)}}},{dur:11.5,cam(t,e,o,r){let n=G0([e.eye,[7,1.9,19],[7.1,1.6,27.5],[6.9,1.1,36],[7,.7,42.5],[7.05,.5,45.7]],re(0,.8,t)*.6+O0(gr(t/.8))*.4),a=G0([[7.05,.5,45.7],[7,1.2,45.3],[7,2.6,43.8],o.eye],O0(re(.8,1,t))),s=t<.8?n:a,i=c0(c0(e.target,r.pos,re(.03,.22,t)),o.target,re(.82,1,t)),c=he(e.fov,o.fov,re(.15,.7,t))-6*re(.6,.8,t)*(1-re(.85,1,t)),f=he(e.roll,o.roll,re(0,.6,t))-.04*Math.sin(Math.PI*t);return Lo(s,i,c,f)},look(t,e,o,r,n){let a=Math.hypot(r.pos[0]-n[0],r.pos[1]-n[1],r.pos[2]-n[2]);return{exposure:he(e.exposure,o.exposure,re(.5,1,t)),letterbox:he(e.letterbox,o.letterbox,t),focus:he(a,o.focus,re(.84,1,t)),aperture:he(1.1,o.aperture,re(.84,1,t)),shafts:he(e.shafts,o.shafts,re(.2,.9,t)),vignette:he(e.vignette,o.vignette,re(.5,1,t))}},leaf(t){let e=he(Eb(t),t,.35),o=G0(GE,re(0,.78,e)),r=Math.sin(t*Math.PI*8)*.35*(1-re(.55,.76,t)),n=re(.7,.8,t);return{phase:"fly",pos:Co(o,[r,Math.abs(Math.cos(t*Math.PI*8))*.12*(1-n),0]),tumble:1-n,swing:r}}},{dur:2.6,cam(t,e,o){let r=O0(t),n=Ni(e,o,r);return n.eye=Co(n.eye,[0,0,-.35*Math.sin(Math.PI*r)]),n},look(t,e,o){let r=O0(t),n={};for(let a in o)typeof o[a]=="number"&&(n[a]=he(e[a],o[a],r));return n},leaf(){return{phase:"floor"}}},{dur:4.5,cam(t,e,o){let r=O0(t),n=G0([e.eye,[6.9,1.7,43.9],[7.05,.45,45.4],o.eye],r),a=c0(e.target,o.target,re(.1,.85,t));return Lo(n,a,he(e.fov,o.fov,re(.2,1,t)),he(e.roll,o.roll,r))},look(t,e,o){let r={};for(let n in o)typeof o[n]=="number"&&(r[n]=he(e[n],o[n],re(.2,1,t)));return r},leaf(){return{phase:"floor"}}},{dur:5.5,cam(t,e,o){return Ni(e,o,O0(t))},look(t,e,o){let r={};for(let n in o)typeof o[n]=="number"&&(r[n]=he(e[n],o[n],O0(t)));return r},leaf(){return{phase:"floor"}},walker(t){return he(Rb,F1(),t)}},{dur:11,kick:t=>gr((t-Vc())/(1-Vc())),cam(t,e,o,r){let n=Vc(),a=re(0,n,t)*(1-re(n+.12,n+.35,t)),s=Ob(Math.min(t,Yc)),i=Co(e.target,[(s-e.target[0])*.15*a,0,0]),c=re(n+.12,1,t),f=G0([e.eye,e.eye,Co(e.eye,[0,.12,-.3]),o.eye],c);return i=c0(i,r.pos,re(n+.06,n+.24,t)*(1-re(.9,1,t))),i=c0(i,o.target,re(.88,1,t)),Lo(f,i,he(e.fov,o.fov,c),he(e.roll,o.roll,c))},look(t,e,o,r,n){let a=Vc(),s=Math.hypot(r.pos[0]-n[0],r.pos[1]-n[1],r.pos[2]-n[2]),i=re(0,.12,t)*(1-re(a+.25,a+.5,t));return{letterbox:he(he(e.letterbox,o.letterbox,re(a,1,t)),1.75,i),exposure:he(e.exposure,o.exposure,re(a,1,t)),focus:t<a?e.focus:he(e.focus,s,re(a,a+.2,t)),aperture:he(e.aperture,o.aperture,re(a,1,t)),vignette:he(e.vignette,o.vignette,t),shafts:he(e.shafts,o.shafts,t)}},leaf(t){let e=gr((t-Vc())/(1-Vc()));if(e<=0)return{phase:"floor"};let o=re(0,.85,e)*.85+Pp(re(0,.15,e))*.15;return{phase:"fly",pos:Co(pa,[(Sf[0]-pa[0])*o+Math.sin(e*9)*.08*(1-e),(Sf[1]-pa[1])*o,(Sf[2]-pa[2])*o+Math.sin(e*7)*.06*(1-e)]),tumble:1.3-.75*e}},walker(t){return t<.985?Ob(t):null}},{dur:9,cam(t,e,o,r){let n=O0(t),a=G0([e.eye,[9.4,1.35,45.6],[12.4,2,45.9],[15,2.45,46.5],o.eye],n),s=1-re(.6,.92,t),i=c0(c0(e.target,r.pos,re(0,.15,t)),o.target,1-s),c=he(e.fov,o.fov,re(.3,1,t)),f=he(e.roll,o.roll,n)+.04*Math.sin(Math.PI*t);return Lo(a,i,c,f)},look(t,e,o,r,n){let a=Math.hypot(r.pos[0]-n[0],r.pos[1]-n[1],r.pos[2]-n[2]);return{letterbox:he(e.letterbox,o.letterbox,t),exposure:he(e.exposure,o.exposure,re(.3,.8,t)),focus:he(a,o.focus,re(.6,.95,t)),aperture:he(e.aperture,o.aperture,re(.6,1,t)),vignette:he(e.vignette,o.vignette,t),shafts:he(e.shafts,o.shafts,re(.3,.8,t))}},leaf(t){let e=O0(t);return{phase:"fly",pos:Co(G0(BE,e),[0,Math.sin(t*Math.PI*5)*.08*Math.sin(Math.PI*t),Math.sin(t*Math.PI*4)*.12*Math.sin(Math.PI*t)]),tumble:.55+.4*Math.sin(Math.PI*t)}}},{dur:6.5,cam(t,e,o){let r=O0(t),n=Ni(e,o,r);return n.eye=Co(n.eye,[0,.12*Math.sin(Math.PI*r),.1*Math.sin(Math.PI*r)]),n},look(t,e,o){let r={};for(let n in o)typeof o[n]=="number"&&(r[n]=he(e[n],o[n],t));return r.aperture=he(e.aperture,o.aperture,t)*(1-.5*Math.sin(Math.PI*t)),r},leaf(t){let e=O0(t);return{phase:"fly",pos:Co(G0(jE,e),[0,Math.sin(t*Math.PI*4)*.07*Math.sin(Math.PI*t),0]),tumble:.5+.3*Math.sin(Math.PI*t)}}},{dur:6.5,cam(t,e,o){let r=O0(t),n=Ni(e,o,r);return n.eye=Co(n.eye,[0,.1*Math.sin(Math.PI*r),.1*Math.sin(Math.PI*r)]),n},look(t,e,o){let r={};for(let n in o)typeof o[n]=="number"&&(r[n]=he(e[n],o[n],t));return r.aperture=he(e.aperture,o.aperture,t)*(1-.5*Math.sin(Math.PI*t)),r},leaf(t){let e=O0(t);return{phase:"fly",pos:Co(G0([Bp,[29.2,1.75,45.5],[32.2,1.5,45.4],Dp],e),[0,Math.sin(t*Math.PI*4)*.06*Math.sin(Math.PI*t),0]),tumble:.45+.25*Math.sin(Math.PI*t)}}},{dur:6,cam(t,e,o,r){let n=O0(t),a=G0([e.eye,[34.2,1.15,45.6],[34.5,.7,44.8],o.eye],n),s=re(.05,.3,t)*(1-re(.8,1,t)),i=c0(c0(e.target,o.target,re(.6,1,t)),r.pos,s);return Lo(a,i,he(e.fov,o.fov,re(.2,1,t)),he(e.roll,o.roll,n))},look(t,e,o,r,n){let a=Math.hypot(r.pos[0]-n[0],r.pos[1]-n[1],r.pos[2]-n[2]);return{letterbox:he(e.letterbox,o.letterbox,t),exposure:he(e.exposure,o.exposure,t),focus:he(a,o.focus,re(.8,1,t)),aperture:he(.9,o.aperture,re(.8,1,t)),vignette:he(e.vignette,o.vignette,t),shafts:he(e.shafts,o.shafts,t)}},leaf(t){let e=G0([Dp,[35.3,.9,45.2],[35.75,.4,44.4],[36,.08,44.05],zf],re(0,.85,t)),o=Math.sin(t*Math.PI*6)*.25*(1-re(.35,.82,t)),r=re(.78,.88,t);return{phase:"fly",pos:Co(e,[0,Math.abs(Math.cos(t*Math.PI*6))*.07*(1-r),o]),tumble:.7*(1-r),swing:o}}},{dur:12,door(t){let e=gr((t-.02)/.09);return Pp(e)+.07*Math.sin(gr((t-.08)/.18)*Math.PI)*(1-gr((t-.08)/.3))},cam(t,e,o,r){let n=Math.sin(t*340)*.012*re(.02,.05,t)*(1-re(.08,.16,t)),a=re(.06,1,t),s=G0([e.eye,[34.3,1,43.6],[31.5,1.9,43.4],[26.5,2.4,43.6],[21,2.6,43.6],[16.5,2.8,43.2],[12.6,3.1,41.2],[9.6,3.4,38],o.eye],a*.55+O0(a)*.45),i=Co(r.pos,[1,-.2,-1.45]);s=c0(s,i,re(.1,.22,t)*(1-re(.52,.72,t)));let c=re(.06,.16,t)*(1-re(.86,1,t)),f=c0(e.target,r.pos,c);f=c0(f,o.target,re(.86,1,t));let l=he(e.fov,o.fov,re(.1,1,t))+6*Math.sin(Math.PI*re(.08,.9,t)),v=he(e.roll,o.roll,t)+.06*Math.sin(Math.PI*2*re(.1,.9,t))+n;return Lo(Co(s,[0,n,0]),f,l,v)},look(t,e,o,r,n){let a=Math.hypot(r.pos[0]-n[0],r.pos[1]-n[1],r.pos[2]-n[2]),s=re(.02,.06,t)*(1-re(.08,.3,t));return{letterbox:he(e.letterbox,o.letterbox,re(.1,.4,t)),exposure:he(e.exposure,o.exposure,t)*(1+.8*s),focus:he(a,o.focus,re(.86,1,t)),aperture:he(.8,o.aperture,re(.86,1,t)),vignette:he(e.vignette,o.vignette,t),shafts:he(e.shafts,o.shafts,t)+s}},leaf(t){let e=gr((t-.05)/.95);if(e<=0)return{phase:"floor"};let o=G0(VE(),e*.6+O0(e)*.4),r=Math.sin(t*Math.PI*9)*.12*Math.sin(Math.PI*e);return{phase:"fly",pos:Co(o,[0,r*.6,r]),tumble:1.4-.8*e}}},...[0,1].map(t=>Nb(t,7.5)),{dur:10,cam(t,e,o,r){let n=O0(t),a=G0([e.eye,[7.6,3.2,16.2],[7,2.9,17.2],[6.5,3.2,16],o.eye],n),s=re(0,.15,t)*(1-re(.85,1,t)),i=c0(c0(e.target,o.target,re(.5,1,t)),r.pos,s);return Lo(a,i,he(e.fov,o.fov,n)+4*Math.sin(Math.PI*n),he(e.roll,o.roll,n))},look(t,e,o,r,n){let a=Math.hypot(r.pos[0]-n[0],r.pos[1]-n[1],r.pos[2]-n[2]);return{letterbox:he(e.letterbox,o.letterbox,t),exposure:he(e.exposure,o.exposure,t),focus:he(a,o.focus,re(.85,1,t)),aperture:he(.6,o.aperture,re(.85,1,t)),vignette:he(e.vignette,o.vignette,t),shafts:he(e.shafts,o.shafts,t)}},leaf(t){let e=O0(t),o=G0(XE(),e);return{phase:"fly",pos:Co(o,[0,Math.sin(t*Math.PI*6)*.06*Math.sin(Math.PI*t),0]),tumble:.6+.4*Math.sin(Math.PI*t)}}},...[3,4].map(t=>Nb(t,7.5)),{dur:10,cam(t,e,o,r){let n=O0(t),a=G0([e.eye,[7.6,4,30.5],[7.3,4.4,25.5],[7.1,4,21.8],o.eye],n),s=re(0,.2,t)*(1-re(.9,1,t)),i=c0(c0(e.target,o.target,re(.5,1,t)),r.pos,s);return Lo(a,i,he(e.fov,o.fov,n),he(e.roll,o.roll,n))},look(t,e,o,r,n){let a=Math.hypot(r.pos[0]-n[0],r.pos[1]-n[1],r.pos[2]-n[2]);return{letterbox:he(e.letterbox,o.letterbox,t),exposure:he(e.exposure,o.exposure,t),focus:he(a,o.focus,re(.85,1,t)),aperture:he(.7,o.aperture,re(.85,1,t)),vignette:he(e.vignette,o.vignette,t),shafts:he(e.shafts,o.shafts,t)}},leaf(t){let e=G0(YE(),re(0,.86,t)),o=Math.sin(t*Math.PI*7)*.3*(1-re(.4,.84,t)),r=re(.8,.9,t);return{phase:"fly",pos:Co(e,[o,Math.abs(Math.cos(t*Math.PI*7))*.08*(1-r),0]),tumble:.8*(1-r),swing:o}}}],Fp=9.2,Yc=.72;function Ob(t){return t<Yc?he(F1(),Fp,t/Yc):he(Fp,HE,(t-Yc)/(1-Yc))}function Vc(){return Yc*gr((pa[0]+.15-F1())/(Fp-F1()))}var D1={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},I1=t=>Object.assign({},D1,Ns[t].look),ZE=`
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
`;function mr(t,e,o){let r=document.createElement(t);return e&&(r.className=e),o!==void 0&&(r.innerHTML=o),r}var Ei=t=>String(t).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function q1(t,e,o){t.querySelectorAll(".tour-line").forEach((r,n)=>{r.style.transitionDelay=(e+n*o).toFixed(2)+"s"})}Cb.exports=function(e){let o=/tourdebug/.test(location.search),{fps:r}=e;if(!document.querySelector("link[data-tour-font]")){let j=document.createElement("link");j.rel="stylesheet",j.href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&display=swap",j.setAttribute("data-tour-font",""),document.head.appendChild(j)}let n=Ep(),a=null;fetch("res/hand.json").then(j=>j.ok?j.json():null).then(j=>{a=j}).catch(()=>{});let s=document.createElement("style");s.textContent=ZE+`
	.hand-text { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); clip-path: inset(50%); white-space: normal; }
	.tour-body canvas.hand { display: block; cursor: pointer; }`,s.textContent+=`
	body.touring #museum-mobile-controls,
	body.touring .painting-plaque { display: none !important; }`,document.head.appendChild(s);let i=mr("div","tour");i.setAttribute("role","region"),i.setAttribute("aria-label","Guided tour of the gallery. Swipe, scroll or press the arrow keys to move on.");let c=mr("div","tour-mark",Ei(C1.name)),f=mr("button","tour-free","Explore freely");f.type="button";let l=mr("div","tour-links",Rp.icons("tour-icon"));l.insertBefore(Tp()("tour-icon"),l.firstChild),l.insertBefore(x1().button("tour-icon"),l.firstChild.nextSibling);let v=mr("button","tour-free tour-note",'<svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 4c-7 1-11.5 5.5-13 13l-1.5 3 3-1.5c7.500-1.500 12-6 13-13z"/><path d="M5.5 20L13 12.500"/></svg><span>Leave a note</span>');v.type="button",v.setAttribute("aria-label","Leave a note: go to the piano room and the confessional"),l.appendChild(v),$1&&l.appendChild(f);let d=mr("div","tour-progress",Ns.map(()=>"<i></i>").join("")),p=mr("div","tour-hint",'<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M6 15l6-6 6 6"></path></svg><span></span>'),u=p.querySelector("span"),h=mr("div","tour-card tour-intro",`
		<span class="tour-line tour-kicker">A virtual gallery</span>
		<span class="tour-rule"></span>
		<h1 class="tour-line tour-title">${Ei(C1.name)}</h1>
		<span class="tour-line tour-sub tour-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</span>`);q1(h,.4,.35);let g=C1.text.split(/\n\s*\n/).map(j=>`<p class="tour-line">${Ei(j.trim())}</p>`).join(""),m=mr("div","tour-card tour-about",`
		<span class="tour-line tour-kicker">The artist</span>
		<h2 class="tour-line tour-title">${Ei(C1.title)}</h2>
		<span class="tour-rule"></span>
		${Rp.line("tour-line tour-contact")}
		${g}`);q1(m,.25,.28);let y=mr("div","tour-card tour-sky",`
		<span class="tour-line tour-sub">Every painting here waits for the light.</span>`);q1(y,.6,.3);let x=mr("div","tour-card tour-master","");function _(j){let dt=mr("div","tour-card tour-story",`
			<span class="tour-line tour-kicker"></span>
			<h2 class="tour-title tour-letters"></h2>
			<span class="tour-rule"></span>
			<span class="tour-line visit-row"></span>
			<div class="tour-body"></div>`),jt=dt.querySelector(".tour-title"),te=dt.querySelector(".tour-body");return dt.filled=!1,dt.body=te,dt.fill=()=>{let Kt=j();if(!Kt||dt.filled)return;dt.filled=!0;let Mo=Kt.title||"";dt.querySelector(".tour-kicker").textContent=$E(Kt)||"Oil on canvas";let xo=dt.querySelector(".visit-row");xo.innerHTML=Cp.button(Kt),xo.hidden=!xo.innerHTML;let Po=xo.querySelector(".visit-btn");Po&&(Po.addEventListener("click",De=>{De.stopPropagation(),Cp.open(Kt)}),dt.warm=()=>Cp.warm(Kt));let co=0;jt.innerHTML=Mo.split(" ").map(De=>'<span class="tour-word">'+De.split("").map(p0=>`<span style="transition-delay:${(.35+co++*.045).toFixed(3)}s">${Ei(p0)}</span>`).join("")+"</span>").join(" "),jt.setAttribute("aria-label",Mo);let ko=.35+Mo.length*.045+.2;dt.querySelector(".tour-rule").style.transitionDelay=ko.toFixed(2)+"s";let oo=String(Kt.description||"").split(/\n\s*\n/).filter(De=>De.trim());if(dt.querySelector(".tour-kicker").style.transitionDelay="0.1s",a&&oo.length){te.innerHTML=oo.map(R0=>`<p class="hand-text">${Ei(R0.trim())}</p>`).join("")+'<div class="hand-wrap"><canvas class="hand" aria-hidden="true"></canvas></div>';let De=te.querySelector("canvas"),p0=oo.map(R0=>R0.trim()).join(`

`),zo=!1,J0=!1,rr=0;te.addEventListener("wheel",()=>{zo=!0},{passive:!0}),te.addEventListener("touchmove",()=>{zo=!0},{passive:!0});let ar=parseFloat(getComputedStyle(te).fontSize)||17,i0=n(De,a,{ink:"rgba(244,236,223,0.93)",shadow:"rgba(0,0,0,0.55)",shadowBlur:7,xh:Math.max(8.5,ar*.56),width:.14,speed:80,pace:.12,minDur:.022,maxTime:R0=>3.5+R0.length/420,seed:3+Mo.length,onPen:R0=>{if(zo)return;let Jr=R0-te.clientHeight*.55;Jr>te.scrollTop+4&&(te.scrollTop+=Math.min(16,Jr-te.scrollTop))}});De.addEventListener("click",R0=>{R0.stopPropagation(),clearTimeout(rr),J0?i0.finish():(J0=!0,i0.write(p0,!0))}),dt.write=()=>{if(clearTimeout(rr),zo=!1,J0){i0.write(p0,!0);return}i0.write("",!0),rr=setTimeout(()=>{J0=!0,i0.write(p0)},ko*.6*1e3)},dt.stopWrite=()=>{clearTimeout(rr),i0.stop()};let Cr=0;window.addEventListener("resize",()=>{clearTimeout(Cr),Cr=setTimeout(()=>{J0&&dt.classList.contains("on")&&i0.write(p0,!0)},250)})}else te.innerHTML=oo.map(De=>`<p class="tour-line">${Ei(De.trim())}</p>`).join(""),te.querySelectorAll(".tour-line").forEach((De,p0)=>{De.style.transitionDelay=(ko+.3+Math.min(p0,6)*.35).toFixed(2)+"s"})},dt}let M=()=>e.paintings?e.paintings():[],w=j=>M().find(dt=>dt.side==="corridor"&&Math.abs(dt.paintingPosition[0]-j)<.5),k=_(()=>M().find(j=>j.side==="end")),E=()=>mr("div","tour-card",""),z=_(()=>w(Ai[0])),P=_(()=>w(Ti[0])),R=_(()=>w(Li[0])),B=Rn.map(j=>_(()=>M().find(dt=>dt.side===j.side&&Math.abs(dt.paintingPosition[2]-j.z)<.5))),$=mr("div","tour-card tour-endcard",`
		<span class="tour-line tour-kicker">Thank you for walking with me</span>
		<span class="tour-rule"></span>
		<span class="tour-line tour-sub">${$1?"The rest of the gallery is yours to wander.":"Swipe back to return to any painting."}</span>
		<span class="tour-line tour-sub tour-confess-line">Before you leave, the confessional is open.<br>Leave me a note; no one else will read it.</span>
		<div class="tour-line tour-end"><button type="button" class="tour-btn" data-act="confess">Leave something behind</button></div>
		${Rp.line("tour-line tour-contact")}
		<div class="tour-line tour-end">
			${$1?'<button type="button" class="tour-btn" data-act="free">Walk the gallery</button>':""}
			<button type="button" class="tour-btn quiet" data-act="list">All paintings</button>
			<button type="button" class="tour-btn quiet" data-act="replay">Replay</button>
		</div>`);q1($,.5,.35);let q=[h,m,y,x,k,E(),E(),E(),z,P,R,E(),...B,$];i.append(...q,c,l,d,p),document.body.appendChild(i);let ct=zb()({root:i,avatar:e.avatar,glyphs:()=>a,onExit:()=>{ae=-1,Ce&&(J={start:S},Ce=!1)}});document.body.classList.add("touring");let kt=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,xt=kt?"Scroll":"Swipe",vt=Ns.map((j,dt)=>dt===0?kt?"Scroll to begin":"Swipe up to begin":dt===1?xt+" to follow the leaf":dt===2?xt+" to follow the light":dt===3?xt+" for its story":dt===6||dt===7||dt===Ns.length-1?"":xt+" on"),Et=[0];Ip.forEach(j=>Et.push(Et[Et.length-1]+j.dur));let Pt=Et[Et.length-1],ne=210,ze=95,Qe=.35,ve=1.4,He=.32,Fe=1,ot=1.3,W=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,gt=2.2,Mt=.7,le=.9,me=!0,se=0,Ut=0,rt=0,Xt=-10,ke=!1,ae=-1,Nt=0,$e=0,S=0,qe=null,je=Object.assign({},I1(0)),lo=Ns[0].cam(0),Oo={phase:"home",pos:Xc.slice(),tumble:0},_o=0,Fo=j=>{let dt=0;for(let jt=1;jt<Et.length;jt++)Math.abs(Et[jt]-j)<Math.abs(Et[dt]-j)&&(dt=jt);return dt};function qo(j){let dt=q[j];dt&&dt.fill&&(dt.fill(),dt.body.scrollTop=0,dt.offsetWidth),q.forEach((jt,te)=>{let Kt=jt.classList.contains("on");jt.classList.toggle("on",te===j),te===j&&!Kt&&jt.write&&jt.write(),te!==j&&Kt&&jt.stopWrite&&jt.stopWrite()}),dt&&dt.warm&&dt.warm(),u.textContent=vt[j]||"",p.classList.toggle("on",!!vt[j])}function a0(){q.forEach(j=>{j.stopWrite&&j.classList.contains("on")&&j.stopWrite(),j.classList.remove("on")}),p.classList.remove("on")}let Q0=null,br=-1;function tt(j){if(ct.active||!me||qe)return;let dt=S-Xt>Qe;if(Xt=S,dt||!Q0){let jt=0,te=Pt;for(let Kt=0;Kt<Et.length;Kt++)if(Et[Kt]<=se-.02&&(jt=Et[Kt]),Et[Kt]>=se+.02){te=Et[Kt];break}Q0={lo:jt,hi:te}}S<br||(ke=!1,rt=Math.max(Q0.lo,Math.min(Q0.hi,rt+j)),rt=Math.max(se-gt,Math.min(se+gt,rt)))}function Bt(j){if(ct.active||!me||qe)return;let dt=ke?rt:se,jt;if(j>0)jt=Et.findIndex(te=>te>dt+.05);else{jt=-1;for(let te=Et.length-1;te>=0;te--)if(Et[te]<dt-.05){jt=te;break}}jt<0||(rt=Et[jt],ke=!0,Xt=S)}let Yt=null,qt=j=>j.stopPropagation();["touchstart","touchmove","touchend","mousedown","mouseup","click","contextmenu"].forEach(j=>i.addEventListener(j,qt)),i.addEventListener("pointerdown",j=>{if(j.stopPropagation(),!(j.target.closest("button, a")||j.target.closest(".tour-body"))){Yt={x:j.clientX,y:j.clientY,lx:j.clientX,ly:j.clientY,t:performance.now(),moved:0,v:0,lt:performance.now()};try{i.setPointerCapture(j.pointerId)}catch(dt){}}}),i.addEventListener("pointermove",j=>{if(!Yt)return;let dt=j.clientX-Yt.lx,jt=j.clientY-Yt.ly;Yt.lx=j.clientX,Yt.ly=j.clientY;let te=Math.abs(jt)>=Math.abs(dt)?-jt:-dt;Yt.moved+=Math.abs(te);let Kt=performance.now(),Mo=te/ze;Yt.v=Yt.v*.6+Mo/Math.max(.008,(Kt-Yt.lt)/1e3)*.4,Yt.lt=Kt,Yt.moved>6&&tt(Mo)});let Ee=j=>{let dt=Yt;if(Yt=null,!!dt){if(ct.active){dt.moved<10&&performance.now()-dt.t<500?ct.tap():dt.y-(j?j.clientY:dt.ly)>30&&ct.swipe(1);return}dt.moved<10&&performance.now()-dt.t<500?Bt(1):performance.now()-dt.lt<120&&tt(Math.max(-1.6,Math.min(1.6,dt.v*.22)))}};i.addEventListener("pointerup",j=>{j.stopPropagation(),Ee(j)}),i.addEventListener("pointercancel",()=>{Yt=null}),i.addEventListener("wheel",j=>{if(ct.active){if(j.target.closest(".conf-ui"))return;j.preventDefault(),ct.wheel(j.deltaY);return}if(j.target.closest(".tour-body")){let jt=j.target.closest(".tour-body"),te=jt.scrollTop+jt.clientHeight>=jt.scrollHeight-2&&j.deltaY>0,Kt=jt.scrollTop<=0&&j.deltaY<0;if(!te&&!Kt)return}j.preventDefault();let dt=j.deltaMode===1?j.deltaY*16:j.deltaMode===2?j.deltaY*window.innerHeight:j.deltaY;tt(dt/ne)},{passive:!1}),window.addEventListener("keydown",j=>{if(!me||qe||document.body.classList.contains("visiting"))return;if(ct.active){if(j.stopImmediatePropagation(),j.target&&/TEXTAREA|INPUT|BUTTON/.test(j.target.tagName))return;ct.key(j.key)&&j.preventDefault();return}let dt=j.key;if(["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(dt)>=0){if((dt==="Enter"||dt===" ")&&j.target&&j.target.tagName==="BUTTON")return;j.preventDefault(),j.stopImmediatePropagation(),Bt(1)}else["ArrowUp","ArrowLeft","PageUp"].indexOf(dt)>=0?(j.preventDefault(),j.stopImmediatePropagation(),Bt(-1)):dt==="Escape"?(j.preventDefault(),et()):/^[wasdzq]$/i.test(dt)&&j.stopImmediatePropagation()},!0),window.addEventListener("keyup",j=>{me&&!qe&&/^(Arrow|[wasdzq]$)/i.test(j.key)&&j.stopImmediatePropagation()},!0),f.addEventListener("click",j=>{j.stopPropagation(),et()}),["mousedown","pointerdown"].forEach(j=>v.addEventListener(j,dt=>dt.stopPropagation())),v.addEventListener("click",j=>{j.stopPropagation(),to()});let Xe=Lo([8.6,1.75,44.3],[-3,1.85,44.5],55,0),We=null,Ce=!1;function to(){if(!me||qe||ct.active||We)return;a0(),ae=-2;let j=lo.eye;if(j[0]>.5&&j[0]<13.5&&j[2]>36&&j[2]<50){Ce=!1,ct.start(lo,je);return}We={t:0}}$.addEventListener("click",j=>{let dt=j.target.closest("button");dt&&(j.stopPropagation(),dt.dataset.act==="free"&&et(),dt.dataset.act==="replay"&&mt(),dt.dataset.act==="list"&&Vu().show(!1),dt.dataset.act==="confess"&&(a0(),ae=-2,ct.start(lo,je)))});let Ge=[null,[Or.zc-1.6,Math.PI/2],[11.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[42.5+Kc[0]-7,0],[42.5+Kc[1]-7,0],[42.5+Kc[2]-7,0],[1e3,Math.PI/2],...Rn.map(j=>[j.z-1.6,j.side==="left"?-Math.PI/2:Math.PI/2]),[Os[2]-1.6,Math.PI]],go=null,Ve=0;function et(){if(!me||qe||!$1)return;let j=Fo(se),dt=Ge[j];go=j<=1?{phase:"home",pos:Xc.slice()}:j>=3&&j<=6?{phase:"floor",pos:pa.slice()}:j===11?{phase:"floor",pos:zf.slice()}:j===18?{phase:"floor",pos:Os.slice()}:null,Ve=j>=12?1:0,dt&&r.place&&r.place(dt[0],dt[1]),qe={start:S,fromCam:lo,fromLook:Object.assign({},je)},a0(),i.hidden=!0,document.body.classList.remove("touring"),e.onExit&&e.onExit()}function mt(){se=rt=0,Ut=0,ke=!1,ae=-1,Nt=0,$e=0,Oo={phase:"home",pos:Xc.slice(),tumble:0},J={start:S}}let J={start:-1},de=!1,ge=[],St={prev:null,vel:[0,0,0],axis:[1,0,0],dir:null,bank:0,rock:0,spin:0,fresh:!0};function Zt(j){_o+=j*(Oo.phase==="floor"?0:1);let dt=Oo.tumble===void 0?0:Oo.tumble,jt=Wc.fromTranslation(ge,Oo.pos);if(Oo.phase==="home")jt=Wc.rotateY(jt,jt,2.2+Math.sin(_o*.9)*.15),jt=Wc.rotateZ(jt,jt,-1+Math.sin(_o*1.3)*.12),jt=Wc.rotateX(jt,jt,.4);else if(Oo.phase==="floor")jt=Wc.rotateY(jt,jt,.65),jt=Wc.rotateX(jt,jt,.16);else{let te=Oo.pos;if(St.prev&&j>0){let Pn=[te[0]-St.prev[0],te[1]-St.prev[1],te[2]-St.prev[2]];if(Math.hypot(Pn[0],Pn[1],Pn[2])<1.5){let ll=Math.min(1,j*6);for(let Ds=0;Ds<3;Ds++)St.vel[Ds]+=(Pn[Ds]/j-St.vel[Ds])*ll}else St.vel=[0,0,0]}St.prev=te.slice();let Kt=St.vel,Mo=Math.hypot(Kt[0],Kt[1],Kt[2]),xo=re(.25,1.4,Mo),Po=re(.5,2,-Kt[1]),co=_o*.35*(.3+dt)+.65,ko=[Math.cos(co),0,Math.sin(co)];Mo>.001&&(ko=c0(ko,er(Kt,-1/Mo),xo));let oo=Math.min(1,j*4);St.axis=c0(St.axis,ko,St.fresh?1:oo);let De=St.axis,p0=Math.hypot(De[0],De[1],De[2])||1;De=er(De,1/p0);let zo=lo.eye,J0=[zo[0]-te[0],zo[1]-te[1],zo[2]-te[2]],rr=Math.hypot(J0[0],J0[1],J0[2])||1,ar=he(.6,.22,xo),i0=[J0[0]/rr*ar,1+J0[1]/rr*ar,J0[2]/rr*ar],Cr=De[0]*i0[0]+De[1]*i0[1]+De[2]*i0[2];i0=$p(i0,er(De,Cr));let R0=Math.hypot(i0[0],i0[1],i0[2])||1;i0=er(i0,1/R0);let Jr=[De[1]*i0[2]-De[2]*i0[1],De[2]*i0[0]-De[0]*i0[2],De[0]*i0[1]-De[1]*i0[0]],Vo=Math.hypot(Kt[0],Kt[2]),x0=0;if(Vo>.15&&St.dir&&j>0){let Pn=[Kt[0]/Vo,Kt[2]/Vo];x0=(St.dir[0]*Pn[1]-St.dir[1]*Pn[0])/j,St.dir=Pn}else Vo>.15&&(St.dir=[Kt[0]/Vo,Kt[2]/Vo]);St.bank+=(Math.max(-.8,Math.min(.8,x0*.3))*xo-St.bank)*Math.min(1,j*3),St.rock+=j*(1.5+2.4*xo),St.spin+=j*Po*7*(.4+dt);let $r=Math.sin(St.rock)*(.26+.45*dt)*(1-.5*Po)+St.bank+St.spin,Is=Math.sin(St.rock*.63+1)*(.16+.3*dt)+(Oo.swing||0)*.9,ma=Math.cos($r),qs=Math.sin($r),$f=Co(er(i0,ma),er(Jr,qs)),Za=Co(er(Jr,ma),er(i0,-qs));ma=Math.cos(Is),qs=Math.sin(Is);let qi=Co(er(De,ma),er($f,qs)),il=Co(er($f,ma),er(De,-qs)),Y1=Math.sin(St.rock+1.5708)*.035*(.3+dt)*(1-.5*xo),La=Co(te,er(Jr,Y1)),cl=[qi[0],qi[1],qi[2],0,il[0],il[1],il[2],0,Za[0],Za[1],Za[2],0,La[0],La[1],La[2],1];for(let Pn=0;Pn<16;Pn++)jt[Pn]=cl[Pn];St.fresh=!1}return Oo.phase!=="fly"&&(St.prev=null,St.vel=[0,0,0],St.fresh=!0,St.spin=0,St.bank=0,St.dir=null),{visible:!0,model:jt}}function Ye(j){for(let dt in D1)je[dt]=j[dt]!==void 0?j[dt]:D1[dt]}function eo(j,dt){if(j<=1)return{phase:"home",pos:Xc.slice(),tumble:0};let jt=Lb[j];if(jt){let te=jt.amp;return{phase:"fly",pos:Co(jt.pos(),[Math.sin(dt*.55)*te[0],Math.sin(dt*.8)*te[1],(1-Math.cos(dt*.45))*te[2]]),tumble:jt.tumble}}return{phase:"floor",pos:(j>=18?Os:j>=10?zf:pa).slice(),tumble:0}}let Se=0,Ue=null;function $o(j){let dt=Math.min(.1,Math.max(0,j-Se));if(Se=j,S=j,de||(de=!0,J.start=j),qe)return null;if(We&&(We.t+=dt,We.t>=.7&&(We=null,Ce=!0,ct.start(Xe,Object.assign({},D1,{fade:1,fadeColor:[0,0,0]})))),ct.active){let Vo=ct.update(dt);return lo=Vo.camera,Ye(Vo.look),o&&window.__camOverride&&(lo=window.__camOverride),o&&window.__lookOverride&&Object.assign(je,window.__lookOverride),{camera:lo,walker:null,door:1,look:je,leaf:Zt(dt)}}if(!ke&&!Yt&&S-Xt>Mt){let Vo=Fo(rt);Math.abs(Et[Vo]-rt)<le&&(rt=Et[Vo])}let jt=rt-se;if(ke){let x0=Math.sign(jt)*Math.min(Fe,Math.sqrt(2*ot*Math.abs(jt)))-Ut;Ut+=Math.sign(x0)*Math.min(Math.abs(x0),ot*dt),se+=Ut*dt,(jt>0&&se>=rt||jt<0&&se<=rt||Math.abs(rt-se)<1e-4)&&(se=rt,Ut=0,ke=!1)}else{let Vo=IE(se,rt,Ut,He,dt,3);se=Vo[0],Ut=Vo[1],Math.abs(rt-se)<1e-4&&Math.abs(Ut)<.001&&(se=rt,Ut=0)}let te=0;for(;te<Ip.length-1&&se>=Et[te+1];)te++;let Kt=Ip[te],Mo=gr((se-Et[te])/Kt.dur),xo=Ns[te],Po=Ns[te+1],co=Fo(se);co!==Nt&&(Nt=co,$e=0);let ko=Math.abs(se-Et[co])<.02;ko&&($e+=dt);let oo=1-re(0,1.2,Math.abs(se-Et[co])),De=Kt.leaf(Mo);if(De.pos?Oo=Object.assign({},De):Oo=Object.assign({},De,{pos:De.phase==="home"?Xc.slice():(te>=10?zf:pa).slice()}),Lb[co]&&oo>0){let Vo=eo(co,$e);Oo.pos=c0(Oo.pos,Vo.pos,oo)}let p0=Kt.walker&&(Mo>.01||te===6)?Kt.walker(Mo):null;Ue=p0==null?null:{x:p0,z:qp,heading:Math.PI/2,phase:(p0-Rb)/UE};let zo=Kt.cam(Mo,xo.cam(0),Po.cam(0),Oo);if(oo>0&&$e>0){let Vo=Ns[co],x0=Vo.cam(0),$r=Vo.cam($e);zo=Lo(Co(zo.eye,er($p($r.eye,x0.eye),oo)),Co(zo.target,er($p($r.target,x0.target),oo)),zo.fov+($r.fov-x0.fov)*oo,zo.roll+($r.roll-x0.roll)*oo)}if(oo>0&&!W){let Vo=S,x0=.006*oo,$r=Math.sin(Vo*.61)*.6+Math.sin(Vo*1.37+1.3)*.4,Is=Math.sin(Vo*.47+2.1)*.6+Math.sin(Vo*1.13+.4)*.4,ma=Math.sin(Vo*.53+4)*.5+Math.sin(Vo*.97+2.6)*.5;zo=Lo(Co(zo.eye,[$r*x0,Is*x0*.7,ma*x0]),Co(zo.target,[Is*x0*1.8,$r*x0*1.4,0]),zo.fov,zo.roll+ma*.0012*oo)}lo=zo;let J0=I1(te),rr=I1(te+1),ar=Object.assign({},J0,Kt.look(Mo,J0,rr,Oo,zo.eye));if(oo>0){let Vo=I1(co);for(let x0 in Vo)typeof Vo[x0]=="number"&&(ar[x0]=he(ar[x0],Vo[x0],oo))}Ye(ar);let Cr=ko&&Math.abs(rt-se)<.02?co:-1;Cr!==ae&&(Cr>=0&&(br=S+ve),ae=Cr,Cr>=0?qo(Cr):a0()),d.querySelectorAll("i").forEach((Vo,x0)=>Vo.classList.toggle("on",x0===co));let R0=ae>=0?q[ae]:null;R0&&R0.fill&&!R0.filled&&(R0.fill(),R0.filled&&(R0.classList.remove("on"),R0.offsetWidth,R0.classList.add("on")));let Jr=gr((j-J.start)/2.6);return Jr<1&&(je.fade=Math.max(je.fade,1-re(0,1,Jr)),je.fadeColor=[0,0,0]),o&&window.__camOverride&&(lo=window.__camOverride),o&&window.__lookOverride&&Object.assign(je,window.__lookOverride),{camera:lo,walker:Ue,door:Kt.door?Kt.door(Mo):te>=12?1:0,look:We?Object.assign(je,{fade:Math.max(je.fade||0,gr(We.t/.6)),fadeColor:[0,0,0]}):je,leaf:Zt(dt)}}return o&&(window.__tour={go:Bt,exit:et,wind:tt,confess(){a0(),ae=-2,ct.start(lo,je)},note:()=>to(),conf:ct,paper:L1().STATE,seek(j,dt){se=rt=Et[j]+(Et[j+1]-Et[j])*dt,Ut=0,ke=!1,Xt=S+1e6,J.start=S-10,de=!0},jump(j){se=rt=Et[j],Ut=0,ke=!1,$e=0,Xt=S,J.start=S-10,de=!0},state:()=>({current:Fo(se),scroll:+se.toFixed(3),target:+rt.toFixed(3),shown:ae,move:Math.abs(rt-se)>.02?{p:se}:null,camNow:lo,leaf:Oo,look:je})}),{update:$o,get active(){return me&&!qe},handover(j){if(!qe)return null;let dt=gr((j-qe.start)/1.8);return dt>=1?(me=!1,null):{from:qe.fromCam,fromLook:qe.fromLook,k:O0(dt)}},restingDoor:()=>Ve,restingLeaf(){return go?(Oo=go,Zt(0)):null},mix:Ni,cam:Lo}}});var Db=Tt((VT,qb)=>{var Ri=ps(),jp=Ri.O,{POOL:QE,ROT:tl}=Ri.STUDIO,Wp=t=>[t[0]+jp[0],t[1]+jp[1],t[2]+jp[2]],Ci=(t,e,o)=>t+(e-t)*o,Zc=(t,e,o)=>[Ci(t[0],e[0],o),Ci(t[1],e[1],o),Ci(t[2],e[2],o)],Oi=(t,e)=>[t[0]+e[0],t[1]+e[1],t[2]+e[2]],G1=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],xr=(t,e)=>[t[0]*e,t[1]*e,t[2]*e],Qc=t=>{let e=Math.hypot(t[0],t[1],t[2])||1;return xr(t,1/e)},Ef=(t,e)=>[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]],U1=t=>Math.max(0,Math.min(1,t)),Xp=t=>t*t*(3-2*t),Jc=(t,e,o)=>Xp(U1((o-t)/(e-t))),Pb=t=>.5-.5*Math.cos(Math.PI*U1(t));function H1(t,e){let o=t.length-1,r=U1(e)*o,n=Math.min(o-1,Math.floor(r)),a=r-n,s=t[Math.max(0,n-1)],i=t[n],c=t[n+1],f=t[Math.min(o,n+2)],l=a*a,v=l*a;return[0,1,2].map(d=>.5*(2*i[d]+(-s[d]+c[d])*a+(2*s[d]-5*i[d]+4*c[d]-f[d])*l+(-s[d]+3*i[d]-3*c[d]+f[d])*v))}var H0=tl.cx,$n=[H0+.3,.02,QE.z0+5.4],Yp=[5,7.42,11.25],Kp=[6.15,2.65,21],Zp=[H0,2.35,tl.cz-.9],Qp=[H0+.75,1.85,3.35],Jp=[H0-.75,1.6,3.7],JE=[H0+.15,1.05,$n[2]-.6],Cn=[{petal:Yp,eye:[6.5,6,9.55],at:Yp,fov:42,look:{aperture:.7}},{petal:Kp,eye:[2.6,2.2,18.2],at:[7.8,3.1,22],fov:50,look:{aperture:.35}},{petal:Zp,eye:[H0,1.05,8.4],at:[H0,3.05,tl.cz],fov:56,look:{aperture:.08}},{petal:Qp,eye:[10.55,.55,4.9],at:[H0,1.95,1],fov:50,look:{aperture:.3}},{petal:Jp,eye:[7.15,.24,5.4],at:[H0,1.7,1],fov:56,look:{aperture:.35}},{petal:$n,eye:[$n[0]-.2,.38,$n[2]+1.5],at:[H0,.9,1],fov:44,look:{aperture:.45}}],tv=[{dur:7,petal:[Yp,[4.6,6.6,12.4],[3.9,5.3,14],[3.6,4.1,16.2],[4.4,3.2,18.8],Kp],eye:[Cn[0].eye,[6,5.2,10.8],[5.4,3.9,12.8],[3.6,2.7,15.6],Cn[1].eye],sway:.55,track:1},{dur:8,petal:[Kp,[7.3,2.5,21.25],[H0,2.45,20.7],[H0,2.4,tl.cz+1.2],Zp],eye:[Cn[1].eye,[1.8,2.3,15.6],[3.2,1.9,11.6],[6.2,1.3,9.2],Cn[2].eye],sway:.12,track:.35},{dur:7,petal:[Zp,[H0,2.15,tl.cz-tl.ro-.8],[H0+.25,1.7,11],[H0-.3,1.55,7.2],[H0+.5,1.75,4.6],Qp],eye:[Cn[2].eye,[H0+.7,.9,9],[10.3,.95,7],Cn[3].eye],sway:.25,track:.6},{dur:6,petal:[Qp,[H0+.85,2.7,2.3],[H0-.1,3.1,2.15],[H0-.95,2.4,2.9],Jp],eye:[Cn[3].eye,[9.6,.55,5.6],[7.7,.45,5.3],Cn[4].eye],sway:.1,track:.5},{dur:7,petal:[Jp,[H0-.4,1.5,4.8],[H0+.6,1.25,5.9],JE,[$n[0]-.05,.4,$n[2]-.15],[$n[0],.07,$n[2]],$n],eye:[Cn[4].eye,[7.4,.55,6.4],[7.9,.5,8],Cn[5].eye],sway:.35,track:.7}],An=[0];tv.forEach(t=>An.push(An[An.length-1]+t.dur));var Vp=An[An.length-1],t7=210,e7=95,o7=.35,n7=.45,r7=.7,a7=.9;function Ib(t,e,o,r,n,a){r=Math.max(1e-4,r);let s=2/r,i=s*n,c=1/(1+i+.48*i*i+.235*i*i*i),f=t-e,l=a*r;f=Math.max(-l,Math.min(l,f));let v=t-f,d=(o+s*f)*n,p=(o-s*d)*c,u=v+(f+d)*c;return e-t>0==u>e&&(u=e,p=(u-e)/n),[u,p]}qb.exports=function(){let e=0,o=0,r=0,n=-10,a=0,s=null,i=null,c=!1,f=!1,l=!1,v=0,d=Cn[0].eye,p=w=>{let k=0;for(let E=1;E<An.length;E++)Math.abs(An[E]-w)<Math.abs(An[k]-w)&&(k=E);return k},u=w=>{(a-n>o7||i===null)&&(i=p(r)),n=a,c=!1;let k=An[Math.max(0,i-1)],E=An[Math.min(An.length-1,i+1)];r=Math.max(k,Math.min(E,r+w))},h=w=>{let k=p(r);r=An[Math.max(0,Math.min(An.length-1,k+w))],c=!0,n=a},g=null;window.addEventListener("wheel",w=>{if(w.target.closest&&w.target.closest(".koi-feed, .st-ui"))return;w.preventDefault();let k=w.deltaMode===1?w.deltaY*16:w.deltaMode===2?w.deltaY*window.innerHeight:w.deltaY;u(k/t7)},{passive:!1}),window.addEventListener("pointerdown",w=>{w.target.closest&&w.target.closest("button, a, .st-ui")||(g={ly:w.clientY,lx:w.clientX,moved:0,v:0,lt:performance.now()})}),window.addEventListener("pointermove",w=>{if(!g)return;let k=w.clientX-g.lx,E=w.clientY-g.ly;g.lx=w.clientX,g.ly=w.clientY;let z=Math.abs(E)>=Math.abs(k)?-E:-k;g.moved+=Math.abs(z);let P=performance.now(),R=z/e7;g.v=g.v*.6+R/Math.max(.008,(P-g.lt)/1e3)*.4,g.lt=P,g.moved>6&&u(R)}),window.addEventListener("pointerup",()=>{let w=g;g=null,w&&w.moved>=10&&performance.now()-w.lt<120&&u(Math.max(-1.6,Math.min(1.6,w.v*.22)))}),window.addEventListener("keydown",w=>{w.key==="ArrowDown"||w.key==="ArrowRight"||w.key==="PageDown"?h(1):(w.key==="ArrowUp"||w.key==="ArrowLeft"||w.key==="PageUp")&&h(-1)});function m(){h(1)}function y(w,k){let E=0;for(;E<tv.length-1&&w>=An[E+1];)E++;let z=tv[E],P=U1((w-An[E])/z.dur),R=Pb(P),B=p(w),$=1-Jc(0,.9,Math.abs(w-An[B])),q=H1(z.petal,R),ct=G1(H1(z.petal,Math.min(1,R+.02)),H1(z.petal,Math.max(0,R-.02))),kt=Qc(Ef([0,1,0],Math.hypot(ct[0],ct[2])>1e-4?ct:[1,0,0])),xt=Math.sin(R*Math.PI*(2.5+z.dur*.25))*Math.sin(R*Math.PI);q=Oi(q,xr(kt,xt*z.sway)),q[1]+=-Math.abs(xt)*z.sway*.25;let vt=B===0?[Math.sin(k*.9)*.01,0,Math.cos(k*.7)*.01]:[Math.sin(k*.53+B)*.07,Math.sin(k*.71+B*2)*.05,Math.cos(k*.47+B)*.07];q=Oi(q,xr(vt,B===5?0:$));let Pt=H1(z.eye,R),ne=Cn[E].at,ze=Cn[E+1].at,Qe=z.track*Jc(0,.3,P)*(1-Jc(.65,1,P)),ve=Zc(Zc(ne,ze,Jc(.25,.95,P)),q,Qe),He=Ci(Cn[E].fov,Cn[E+1].fov,Xp(P)),Fe=Ci(Cn[E].look.aperture,Cn[E+1].look.aperture,Xp(P)),ot=E===1?Math.sin(P*Math.PI)*-.08:E===2?Math.sin(P*Math.PI)*.04:E===3?Math.sin(P*Math.PI)*.05:0;return{p:q,eye:Pt,at:ve,fov:He,aperture:Fe,roll:ot,idx:E,u:P,near:B,hanging:B===0&&$>.98}}let x={prev:null,vel:[0,0,0],axis:[1,0,0],dir:null,bank:0,rock:0,spin:0,fresh:!0,go:0,fall:0};function _(w,k,E,z){let P,R,B;if(E)P=Qc([Math.sin(z*.8)*.25,-1,.35+Math.sin(z*1.1)*.15]),R=Qc(Ef(Ef(P,[.4,0,-1]),P)),B=Ef(P,R),x.prev=null,x.vel=[0,0,0],x.fresh=!0,x.spin=0,x.bank=0,x.dir=null,x.go=0,x.fall=0;else{if(x.prev&&k>0){let Mt=G1(w,x.prev);if(Math.hypot(Mt[0],Mt[1],Mt[2])<1.5){let le=Math.min(1,k*6);for(let me=0;me<3;me++)x.vel[me]+=(Mt[me]/k-x.vel[me])*le}else x.vel=[0,0,0]}x.prev=w.slice();let q=x.vel,ct=Math.hypot(q[0],q[1],q[2]),kt=Jc(.2,1.2,ct),xt=Jc(.35,1.6,-q[1]);x.go=kt,x.fall=xt;let vt=z*.35+.65,Et=[Math.cos(vt),0,Math.sin(vt)];ct>.001&&(Et=Zc(Et,xr(q,-1/ct),kt)),x.axis=Zc(x.axis,Et,x.fresh?1:Math.min(1,k*4)),P=Qc(x.axis);let Pt=Qc(G1(d,w)),ne=Ci(.6,.25,kt);R=[Pt[0]*ne,1+Pt[1]*ne,Pt[2]*ne],R=Qc(G1(R,xr(P,P[0]*R[0]+P[1]*R[1]+P[2]*R[2]))),B=Ef(P,R);let ze=Math.hypot(q[0],q[2]),Qe=0;if(ze>.15&&x.dir&&k>0){let Mt=[q[0]/ze,q[2]/ze];Qe=(x.dir[0]*Mt[1]-x.dir[1]*Mt[0])/k,x.dir=Mt}else ze>.15&&(x.dir=[q[0]/ze,q[2]/ze]);x.bank+=(Math.max(-.8,Math.min(.8,Qe*.3))*kt-x.bank)*Math.min(1,k*3),x.rock+=k*(1.7+2.6*kt),x.spin+=k*xt*6;let ve=Math.sin(x.rock)*(.42+.2*kt)*(1-.5*xt)+x.bank+x.spin,He=Math.sin(x.rock*.63+1)*.32,Fe=Math.cos(ve),ot=Math.sin(ve),W=Oi(xr(R,Fe),xr(B,ot)),gt=Oi(xr(B,Fe),xr(R,-ot));Fe=Math.cos(He),ot=Math.sin(He),P=Oi(xr(P,Fe),xr(W,ot)),R=Oi(xr(W,Fe),xr(P,-ot)),B=gt,w=Oi(w,xr(B,Math.sin(x.rock+1.5708)*.05*(1-.5*kt))),x.fresh=!1}let $=Wp(w);return[P[0],P[1],P[2],0,R[0],R[1],R[2],0,B[0],B[1],B[2],0,$[0],$[1],$[2],1]}function M(w){let k=s===null?0:Math.min(.1,Math.max(0,w-s));if(s=w,a=w,!c&&!g&&a-n>r7){let ct=p(r);Math.abs(An[ct]-r)<a7&&(r=An[ct])}if(c){let ct=Ib(e,r,o,1.2,k,1.4);e=ct[0],o=ct[1],Math.abs(r-e)<.001&&(e=r,o=0,c=!1)}else{let ct=Ib(e,r,o,n7,k,3);e=ct[0],o=ct[1],Math.abs(r-e)<1e-4&&Math.abs(o)<.001&&(e=r,o=0)}typeof window!="undefined"&&window.__stScroll!==void 0&&/tourdebug/.test(location.search)&&(e=r=window.__stScroll,o=0);let E=y(e,w);E.idx>=3&&!l&&(Ri.petalLure($n[0],$n[2]),l=!0),e>=Vp-.02&&!f&&(Ri.petalLand($n[0],$n[2]),f=!0,v=w),e<Vp-.3&&f&&(Ri.petalReset(),f=!1),E.idx<3&&l&&(l=!1);let z=Ri.petalState();if(f){let ct=Pb((w-v)/7);E.eye=Zc(E.eye,[$n[0]+.35,.3,$n[2]+.95],ct),E.at=Zc(E.at,[$n[0],0,$n[2]-.3],ct),E.fov=Ci(E.fov,38,ct)}d=E.eye;let P=_(E.p,k,E.hanging,w),R=E.hanging?.12:.2+.55*x.go+.35*x.fall,B=E.hanging?.05:Math.sin(x.rock*1.3)*.18+.12*x.go;Ri.setGuide({vis:!0,model:P,ang:w*.08,size:.09,flex:B,flutter:R});let $=P.slice(12,15),q=Wp(E.eye);return{eye:q,target:Wp(E.at),fov:E.fov,roll:E.roll,fade:0,pond:f&&z.eaten,shot:f?5:E.near,look:{letterbox:.55,focus:Math.max(.3,Math.hypot(q[0]-$[0],q[1]-$[1],q[2]-$[2])),aperture:E.aperture,vignette:.28,exposure:1,shafts:1},moving:Math.abs(o)>.02||Math.abs(r-e)>.01||f}}return{update:M,tap:m,get scroll(){return e},END:Vp}}});var s7=d2(),va=qr(),vv=Vu(),X1=va.reflection,i7=!1,ow=(t,e,o,r,n)=>r+(t-e)*(n-r)/(o-e),mv=()=>ow(window.innerWidth/window.innerHeight,16/9,9/16,1.7,Math.PI/3);navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)&&(mv=()=>ow(window.innerWidth/window.innerHeight,16/9,9/16,1.5,Math.PI/3));var nw=()=>2*Math.atan(Math.tan(mv()*.5)*window.innerHeight/window.innerWidth),c7=S2(),Of=new c7;Of.showPanel(0);i7&&document.body.appendChild(Of.dom);var _0,sl,sv,nl,iv,E0;function l7(){try{let t=document.createElement("canvas"),e=t.getContext("webgl")||t.getContext("experimental-webgl");return!!(e&&e.getExtension("OES_standard_derivatives"))}catch(t){return!1}}if(!l7())throw s7.finish(),vv.show(!0),new Error("This device cannot draw the 3D gallery; showing the list instead.");_0=z2()({extensions:["OES_element_index_uint","OES_standard_derivatives"],optionalExtensions:["EXT_texture_filter_anisotropic","WEBGL_depth_texture"],attributes:{alpha:!1,antialias:!1},pixelRatio:va.pixelRatio});location.hash==="#list"&&vv.show(!1);window.addEventListener("hashchange",()=>{location.hash==="#list"&&vv.show(!1)});sl=u3()();var f7=kd();sv=f7(_0,sl,X1);nl=Og()(_0,sl);iv=Pg()(_0);var Fb=ox()(_0,sl),Gb=dx()(_0),Hb=mx()(_0),Ub=Rx()(_0),Bb=qx()(_0),jb=Ux()(_0),$s=r5()(_0),cv=np(),rw=mh(),h7=Nl(),lv=ap(),V1=on(),U0=t1(),fv=p5(),aw=x1(),{A:ol}=Gr();E0=Ky()(sl,nw);var rl=Qy()(_0,va),Rs=nb()(_0),Wb=ab()(_0),u7=cb()(_0,va),d7=pb()(_0,va),Vb=cs()(_0),Xb=L1()(_0),Yb=hs()(_0),Af=ps()(_0),Ta=$b()({fps:E0,paintings:()=>nl.interactables(),avatar:$s,onExit:()=>E0.setPaused(!1)});E0.setPaused(!0);/tourdebug/.test(location.search)&&(window.__post=rl);var Cs=[],al=[],Un=[7,2,1.6];sl.viewer=Un;var p7=_0({cull:{enable:!0,face:"back"},uniforms:{view:()=>Cs,proj:()=>al,yScale:1,mirrorOn:()=>X1?1:0,night:()=>V1.night,studioBake:()=>ps().bakedSun(_0),time:_0.context("time")}}),Kb=_0({cull:{enable:!0,face:"front"},uniforms:{yScale:-1}}),sw=document.createElement("style");sw.textContent=`

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
`;document.head.appendChild(sw);var Qr=document.createElement("button");Qr.className="painting-plaque";Qr.type="button";Qr.setAttribute("aria-label","Read painting");document.body.appendChild(Qr);var nr=document.createElement("div");nr.className="story-overlay";nr.innerHTML=`

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

		${rw.line("story-contact")}

		<div class="visit-row story-visit"></div>

		<p
			class="story-body"
			id="story-body"
		></p>

	</article>
`;document.body.appendChild(nr);var Ps=document.createElement("div");Ps.className="museum-links";Ps.innerHTML=rw.icons("museum-link");Ps.insertBefore(Tp()("museum-link"),Ps.firstChild);Ps.insertBefore(aw.button("museum-link"),Ps.firstChild.nextSibling);["mousedown","pointerdown","click"].forEach(t=>Ps.addEventListener(t,e=>e.stopPropagation()));document.body.appendChild(Ps);var v7=nr.querySelector("#story-title"),m7=nr.querySelector("#story-body"),Zb=nr.querySelector("#story-meta"),g7=nr.querySelector(".story-contact"),Nf=nr.querySelector(".story-visit");Nf.addEventListener("click",t=>{t.target.closest(".visit-btn")&&Ii&&lv.open(Ii)});var x7=nr.querySelector(".story-close"),Ii=null,yr={p:0,target:0,last:0},iw={title:cv.title,description:cv.text,isAbout:!0},Ka=null;function gv(t){t&&(Ii=t,v7.textContent=t.title||"",m7.textContent=t.description||"",Zb.textContent=t.isAbout?"":h7(t),Zb.hidden=!!t.isAbout,g7.hidden=!t.isAbout,Nf.innerHTML=t.isAbout?"":lv.button(t),Nf.hidden=!Nf.innerHTML,Nf.hidden||lv.warm(t),nr.classList.toggle("about-mode",!!t.isAbout),nr.classList.add("open"),yr.target=t.isAbout?1:0,Ka=t,Qr.classList.remove("visible"),E0.setPaused(!0))}function xv(){nr.classList.remove("open"),yr.target=0,Ii=null,Ka=null,E0.setPaused(!1)}function cw(t){t&&(t.preventDefault(),t.stopPropagation()),Ka&&gv(Ka)}Qr.addEventListener("pointerup",cw,!0);Qr.addEventListener("touchend",cw,{passive:!1,capture:!0});Qr.addEventListener("click",t=>{t&&(t.preventDefault(),t.stopPropagation()),Ii===null&&Ka&&gv(Ka)},!0);x7.addEventListener("click",xv);nr.addEventListener("click",t=>{t.target===nr&&xv()});window.addEventListener("keydown",t=>{t.code==="Escape"&&nr.classList.contains("open")&&xv()});function Qb(t,e){let o=e[0],r=e[1],n=e[2];return[t[0]*o+t[4]*r+t[8]*n+t[12],t[1]*o+t[5]*r+t[9]*n+t[13],t[2]*o+t[6]*r+t[10]*n+t[14],t[3]*o+t[7]*r+t[11]*n+t[15]]}function y7(){if(Ii)return;if(Ta.active){Ka=null,Qr.classList.remove("visible");return}let t=nl.interactables(),e=E0.forward[0],o=E0.forward[2],r=Math.hypot(e,o)||1,n=null,a=1/0;for(let s of t){let i=s.paintingPosition,c=0,f=0;s.side==="left"?c=1:s.side==="right"?c=-1:s.side==="corridor"?f=1:f=-1;let l=i[0]-E0.pos[0],v=i[2]-E0.pos[2],d=-(l*c+v*f),p=Math.abs(l*f-v*c),u=-(e*c+o*f)/r,h=s.side==="end"?11:8,g=(s.width||2)/2;u>.9&&d>.5&&d<h&&p<g+.8&&d<a&&(n=s,a=d)}if(!n){let s=E0.pos[0],i=E0.pos[2];e/r>.85&&s<13.6&&i>ol.z0-.5&&i<ol.z1+.5&&(n=Object.assign({},iw,{plaqueTitle:cv.name}))}n?(Ka=n,Qr.textContent=n.isAbout?"ABOUT  \xB7  "+n.plaqueTitle:"READ  \xB7  "+n.title,Qr.classList.add("visible")):(Ka=null,Qr.classList.remove("visible"))}var Cf=Mc();function b7(){let t=$s.state;if(!t||!t.glowPos)return null;let e=Qb(E0.view(),[t.glowPos[0],t.glowPos[1]-.08,t.glowPos[2],1]),o=Qb(E0.proj(),e);return o[3]<=.05?null:[(o[0]/o[3]*.5+.5)*window.innerWidth,(.5-o[1]/o[3]*.5)*window.innerHeight,o[3]]}var hv=null;window.addEventListener("pointerdown",t=>{hv={x:t.clientX,y:t.clientY,t:performance.now()}},!0);window.addEventListener("pointerup",t=>{let e=hv;if(hv=null,!e||Ii||Ta.active||!t.target||!/^(CANVAS|BODY)$/.test(t.target.tagName)||Math.hypot(t.clientX-e.x,t.clientY-e.y)>12||performance.now()-e.t>600)return;let o=b7();if(!o)return;let r=!!document.pointerLockElement,n=r?window.innerWidth/2:t.clientX,a=r?window.innerHeight/2:t.clientY,s=Math.max(t.pointerType==="touch"?60:40,260/o[2]);Math.hypot(n-o[0],a-o[1])<s&&(t.preventDefault(),t.stopPropagation(),gv(iw))},!0);function w7(t){let e=Math.min(Math.max(t-yr.last,0),.1);yr.last=t;let o=e/1.6;if(yr.p=yr.target>yr.p?Math.min(1,yr.p+o):Math.max(0,yr.p-o),yr.p<=0)return;let r=yr.p<.5?2*yr.p*yr.p:1-Math.pow(-2*yr.p+2,2)/2,n=window.innerHeight>window.innerWidth,a=$s.state,s=a&&a.hipsPos?a.hipsPos[0]:ol.cx-1.2,i=a&&a.hipsPos?a.hipsPos[2]:ol.zc,c=n?[s-2.3,2,i-.1]:[s-1.55,1.55,i+.3],f=n?[s+.1,.2,i-.1]:[s+.1,.7,i+.6],l=E0.pos,v=E0.forward,d=[l[0],l[1],l[2]],p=[l[0]+v[0],l[1]+v[1],l[2]+v[2]],u=(y,x)=>y.map((_,M)=>_+(x[M]-_)*r),h=[ol.cx-6.2,1.7,ol.zc],g=1-r,m=d.map((y,x)=>g*g*y+2*g*r*h[x]+r*r*c[x]);Cf.lookAt(E0.view(),m,u(p,f),[0,1,0])}var lw=/[?&]studio\b/.test(location.search);if(lw){let t=document.createElement("style");t.textContent=".tour, #museum-mobile-controls, .painting-plaque { display: none !important; }",document.head.appendChild(t);let e=document.createElement("button");e.type="button",e.className="st-ui",e.setAttribute("aria-label","Day or night"),e.textContent="\u263E",t.textContent+=".st-ui { position: fixed; top: 18px; right: 18px; z-index: 30; width: 42px; height: 42px; border-radius: 50%; border: 1px solid rgba(244,236,223,0.4); background: rgba(12,10,8,0.3); color: #f4ecdf; font-size: 20px; cursor: pointer; backdrop-filter: blur(3px); -webkit-backdrop-filter: blur(3px); }",document.body.appendChild(e),e.addEventListener("pointerdown",r=>r.stopPropagation()),e.addEventListener("click",r=>{r.stopPropagation(),on().toggle(),setTimeout(()=>{e.textContent=on().night>.5?"\u2600":"\u263E"},50)});let o=null;window.addEventListener("pointerdown",r=>{o={x:r.clientX,y:r.clientY,t:performance.now()}}),window.addEventListener("pointerup",r=>{let n=o;o=null,!(!n||Math.hypot(r.clientX-n.x,r.clientY-n.y)>10||performance.now()-n.t>500)&&(r.target.closest&&r.target.closest("button")||dv.takes(r)||uv().tap())}),window.addEventListener("keydown",r=>{r.key==="n"?on().toggle():r.key===" "&&uv().tap()})}var ev=null;function uv(){return ev||(ev=Db()()),ev}var dv=(()=>{let t={mode:"idle",fedTill:0,offset:0,holdAt:null,now:0,lastShot:-1,doneShot:-1,since:0,hintUntil:0},e=null,o=null,r=null,n=(c,f)=>{r&&(r.textContent=c,r.classList.add("on"),t.hintUntil=f?t.now+f:0)},a=()=>{let c=document.createElement("style");c.textContent=`
.koi-feed { position: fixed; left: 0; right: 0; bottom: 7vh; display: flex; flex-direction: column; align-items: center; gap: 0.6em; z-index: 20; pointer-events: none; font-family: 'Cormorant Garamond', Georgia, serif; }
.koi-feed-btn { pointer-events: none; opacity: 0; transform: translateY(6px); transition: opacity 1.2s ease, transform 1.2s ease; background: rgba(12, 10, 8, 0.28); border: 1px solid rgba(244, 236, 223, 0.38); border-radius: 999px; color: #f4ecdf; font: italic 400 clamp(17px, 2.3vw, 24px)/1 'Cormorant Garamond', Georgia, serif; letter-spacing: 0.06em; padding: 0.7em 1.5em 0.75em; cursor: pointer; text-shadow: 0 1px 8px rgba(0, 0, 0, 0.55); backdrop-filter: blur(3px); -webkit-backdrop-filter: blur(3px); }
.koi-feed-btn.on { opacity: 1; transform: none; pointer-events: auto; }
.koi-feed-btn:hover { background: rgba(12, 10, 8, 0.42); border-color: rgba(244, 236, 223, 0.7); }
.koi-feed-btn .orn { display: inline-block; margin: 0 0.55em; font-style: normal; opacity: 0.75; transform: translateY(-0.05em); }
.koi-feed-hint { opacity: 0; transition: opacity 1.4s ease; color: #f4ecdf; font: italic 400 clamp(16px, 2vw, 21px)/1.3 'Cormorant Garamond', Georgia, serif; letter-spacing: 0.05em; text-shadow: 0 1px 10px rgba(0, 0, 0, 0.7); text-align: center; padding: 0 1em; }
.koi-feed-hint.on { opacity: 0.95; }
.koi-aim, .koi-aim canvas { cursor: crosshair !important; }
`,document.head.appendChild(c),e=document.createElement("div"),e.className="koi-feed",e.innerHTML='<button type="button" class="koi-feed-btn"><span class="orn">\u2766</span>Cast a crumb upon the water<span class="orn">\u2766</span></button><div class="koi-feed-hint"></div>',document.body.appendChild(e),o=e.querySelector(".koi-feed-btn"),r=e.querySelector(".koi-feed-hint"),o.addEventListener("pointerdown",f=>{f.stopPropagation(),t.mode==="idle"&&(t.mode="aim",t.holdAt=t.now-t.offset,t.since=t.now,o.classList.remove("on"),document.body.classList.add("koi-aim"),n("Touch the water where it should fall"))})},s=(c,f)=>{let l=Cf.multiply([],al,Cs),v=Cf.invert([],l);if(!v)return null;let d=c/window.innerWidth*2-1,p=1-f/window.innerHeight*2,u=[0,0,0,0];for(let h=0;h<4;h++)u[h]=v[h]*d+v[4+h]*p+v[8+h]*1+v[12+h];return[u[0]/u[3]-Un[0],u[1]/u[3]-Un[1],u[2]/u[3]-Un[2]]},i=()=>{t.holdAt!==null&&(t.offset=t.now-t.holdAt),t.holdAt=null,t.mode="idle",t.doneShot=t.lastShot,document.body.classList.remove("koi-aim"),r&&r.classList.remove("on")};return{time(c){return t.now=c,t.holdAt!==null?t.holdAt:c-t.offset},update(c){e||a(),c.shot!==t.lastShot&&(t.lastShot=c.shot);let f=ps();t.mode==="idle"?o.classList.toggle("on",!!c.pond&&t.doneShot!==c.shot):t.mode==="aim"?t.now-t.since>40&&i():t.mode==="watch"&&(f.feeding()&&(t.fedTill=t.now),(t.now-t.fedTill>5&&t.now-t.since>8||t.now-t.since>60)&&i()),t.hintUntil&&t.now>t.hintUntil&&(r.classList.remove("on"),t.hintUntil=0)},takes(c){if(t.mode==="idle")return!1;let f=ps(),l=s(c.clientX,c.clientY),v=l&&f.poolHit(Un,l);return v?(f.feedAt(v[0],v[1]),t.fedTill=t.now,t.mode==="aim"&&n("and they come, like embers through the dark",5),t.mode="watch",t.since=t.now,document.body.classList.remove("koi-aim"),!0):(t.mode==="aim"&&n("Upon the water, there\u2026"),!0)}}})(),$i={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},Pi=null,Rf=!1,B1=!1;function _7(t,e,o,r){let n=[o[0]-e[0],o[1]-e[1],o[2]-e[2]],a=Math.hypot(n[0],n[1],n[2])||1,s=[-n[2]/a,0,n[0]/a],i=Math.hypot(s[0],s[2])||1;s=[s[0]/i,0,s[2]/i];let c=Math.cos(r),f=Math.sin(r);return Cf.lookAt(t,e,o,[s[0]*f,c,s[2]*f])}function M7(t){let e=window.innerWidth/window.innerHeight,o=rl.shot,r=Ta.active?Ta.update(t):null,n=r?null:Ta.handover(t),a=null,s=$i;if(r){a=r.camera,s=r.look,Pi=r.leaf;let i=window.__walkOverride&&/tourdebug/.test(location.search)?window.__walkOverride:r.walker||null;$s.setWalk(i),Rf=!!i,Rs.setOpen(r.door||0)}else Pi=Ta.restingLeaf(),$s.setWalk(null),Rf=!1,Rs.setOpen(Ta.restingDoor());if(n){let i=E0.pos,c=E0.forward,f=Ta.cam([i[0],i[1],i[2]],[i[0]+c[0],i[1]+c[1],i[2]+c[2]],nw()*180/Math.PI,0);a=Ta.mix(n.from,f,n.k),s={};for(let l in $i)s[l]=Array.isArray($i[l])?$i[l]:n.fromLook[l]+($i[l]-n.fromLook[l])*n.k}if(a&&r&&(a=fv.apply(a,t)),lw&&!(/tourdebug/.test(location.search)&&window.__camOverride)){let i=uv().update(dv.time(t));dv.update(i),pv=i.moving!==!1,a=i,s=Object.assign({},$i,i.look)}if(a)_7(Cs,a.eye,a.target,a.roll||0),Cf.perspective(al,a.fov*Math.PI/180,e,.1,700),Un[0]=a.eye[0],Un[1]=a.eye[1],Un[2]=a.eye[2];else{let i=E0.view(),c=E0.proj();for(let d=0;d<16;d++)Cs[d]=i[d],al[d]=c[d];let f=i[12],l=i[13],v=i[14];Un[0]=-(i[0]*f+i[1]*l+i[2]*v),Un[1]=-(i[4]*f+i[5]*l+i[6]*v),Un[2]=-(i[8]*f+i[9]*l+i[10]*v)}for(let i in $i)o[i]=s[i];r&&fv.pull(o,t)}var Rr={wake:[[0,-50,0,0],[0,-50,0,0],[0,-50,0,0],[0,-50,0,0]],wakeDir:[0,0,1],gust:[0,0],focus:6,aperture:0},ov=[9,9,9,9],Jb=[0,0,0,0],Tf=0,nv=0,el=null,tw=0,ew=0,Lf=0;function k7(t){let e=Math.min(.1,Math.max(0,t-tw));tw=t,Rr.focus=rl.shot.focus,Rr.aperture=va.post>=2?rl.shot.aperture:0;for(let s=0;s<4;s++)ov[s]+=e,Rr.wake[s][3]=Jb[s]*Math.exp(-ov[s]/1.1);let o=Pi&&Pi.visible?Pi.model:null;if(o&&e>0){let s=[o[12],o[13],o[14]];if(el){let i=[s[0]-el[0],s[1]-el[1],s[2]-el[2]],c=Math.hypot(i[0],i[1],i[2]),f=c/e;if(c<1.5&&f>.12){let l=Math.min(1,e*8);for(let d=0;d<3;d++)Rr.wakeDir[d]+=(i[d]/c-Rr.wakeDir[d])*l;let v=Math.hypot(Rr.wakeDir[0],Rr.wakeDir[1],Rr.wakeDir[2])||1;for(let d=0;d<3;d++)Rr.wakeDir[d]/=v;if(nv+=e,nv>.14){nv=0;let d=Rr.wake[Tf];d[0]=s[0],d[1]=s[1],d[2]=s[2],Jb[Tf]=Math.min(1,(f-.12)/1.6)*.5,ov[Tf]=0,Tf=(Tf+1)%4}}}el=s}else o||(el=null);let r=Rs.openNow?Rs.openNow():0,n=e>0?(r-ew)/e:0;ew=r;let a=Math.max(-1,Math.min(1,n*1.2));Lf+=(a-Lf)*Math.min(1,e*(Math.abs(a)>Math.abs(Lf)?6:.7)),Rr.gust[0]+=Lf*5.5*e,Rr.gust[1]=Math.abs(Lf)}var rv=0,j1=!1,av=0,W1=0,pv=!0,S7=/[?&]nocap\b/.test(location.search);_0.frame(function({time:t}){if(document.body.classList.contains("visiting")){rv=0;return}if(av++,U0.zone==="studio"&&!S7&&W1>0&&t>W1){let n=pv||!V1.settled?.03333333333333333:.041666666666666664;if(t-W1<n-.006)return}W1=t;let e=Math.max(1,av);av=0,Of.begin(),V1.tick(t);let o=Ta.active&&fv.resting&&V1.settled&&(va.isPhone||va.scale<1||va.level>0);if(o){if(j1=!j1,j1){Of.end();return}}else j1=!1;let r=t-rv;rv=t,va.frame(o?r/2:r/e),X1=va.reflection,E0.tick({time:t}),w7(t),nl.update(E0.pos,E0.fmouse[1],mv()),y7(),M7(t),U0.update(Cs,al,Un),aw.listen(Un),B1=!Rf&&U0.room("stair")&&(!U0.room("court")||Un[0]<.5||Un[2]>30),$s.setPiano(B1),k7(t),rl.capture(arguments[0],{view:Cs,proj:al,eye:Un},()=>{p7(()=>{X1&&U0.floor&&(U0.zone==="studio"&&Af.reflect?Af.reflect(()=>Kb(()=>Af({reflected:!0})),pv?2:4):Kb(()=>{U0.room("studio",!0)&&Af({reflected:!0}),U0.zone!=="studio"&&(sv(),Fb({reflected:!0}),Vb(),U0.room("stair",!0)&&(Yb({reflected:!0}),Xb({reflected:!0,view:Cs})),U0.room("court",!0)&&jb(),(B1||U0.room("court",!0)||Rf)&&$s(),iv(nl.batch()),U0.room("street",!0)&&Gb(),U0.room("garden",!0)&&Ub(),U0.room("florence",!0)&&Bb(),Wb(Pi),Rs(),Hb(),Rs.glass())})),U0.room("studio")&&Af(),U0.zone!=="studio"&&(sv(),Fb(),Vb(),U0.room("stair")&&(Yb(),Xb({view:Cs})),U0.room("court")&&jb(),(B1||U0.room("court")||Rf)&&$s(),iv(nl.batch()),U0.room("street")&&Gb(),U0.room("garden")&&(Ub(),d7()),U0.room("florence")&&Bb(),Wb(Pi),Rs(),u7(Rr),Hb(),Rs.glass())})}),rl.present(),Of.end()});})();
