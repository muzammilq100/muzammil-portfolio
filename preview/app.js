"use strict";(()=>{var Tt=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var mm=Tt((IE,vm)=>{"use strict";var rc=document.getElementById("loader"),nc=rc&&rc.querySelector(".loader-name"),Sl=0,hh=0,uh=!1,I6=performance.now(),ac=.06,oc=0,Bu=0,fm=!1,q6=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;function D6(t){if(!nc)return;let e=nc.offsetWidth||1,r=(e*(1.14-1.28*t)-e).toFixed(1)+"px 0";nc.style.webkitMaskPosition=r,nc.style.maskPosition=r}function dm(t){let e=Math.min(.05,Bu?(t-Bu)/1e3:.016);Bu=t;let o=uh?.75:.22+(ac-oc)*1.2;if(oc=Math.min(ac,oc+Math.max(0,o)*e),q6&&(oc=ac),D6(oc),uh&&oc>=.999){fm||(fm=!0,setTimeout(pm,650));return}requestAnimationFrame(dm)}nc&&requestAnimationFrame(dm);function hm(){let t=Sl?hh/Math.max(Sl,24):0;ac=Math.max(ac,Math.min(.9,.06+t*.84))}function pm(){rc&&(rc.classList.add("done"),setTimeout(()=>rc.remove(),1400))}function ju(){uh||(uh=!0,window.__galleryReady=!0,rc&&(ac=1,nc||pm()))}var um=null;function F6(){clearTimeout(um),hh>=Sl&&performance.now()-I6>600&&(um=setTimeout(()=>{hh>=Sl&&ju()},450))}setTimeout(ju,2e4);var G6=t=>/(^|\/)(res|images)\//.test(t),fh=window.fetch.bind(window);async function H6(t,e){let o=await fh(t+".gz",e);if(!o.ok)throw new Error("no .gz");let r=new Uint8Array(await o.arrayBuffer());if(!(r[0]===31&&r[1]===139))return new Response(r);let n=new Blob([r]).stream().pipeThrough(new DecompressionStream("gzip")),a=await new Response(n).arrayBuffer();return new Response(a,{status:200,headers:{"Content-Type":"application/octet-stream"}})}window.fetch=function(t,e){let o=typeof t=="string"?t:t&&t.url||"";if(!G6(o))return fh(t,e);Sl++,hm();let r=a=>(hh++,hm(),F6(),a),n;return/\.bin$/.test(o)&&typeof DecompressionStream!="undefined"?n=H6(o,e).catch(()=>fh(t,e)):n=fh(t,e),n.then(r,a=>{throw r(),a})};vm.exports={finish:ju}});var qr=Tt((qE,ym)=>{"use strict";var gm=typeof navigator!="undefined"&&navigator.userAgent||"",U6=typeof window!="undefined"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches&&!window.matchMedia("(any-pointer: fine)").matches,wa=/Android|iPhone|iPad|iPod|Mobile|Silk|Kindle|webOS|BlackBerry|Opera Mini|IEMobile/i.test(gm)||/Macintosh/.test(gm)&&typeof navigator!="undefined"&&navigator.maxTouchPoints>1||U6,dh=typeof window!="undefined"&&window.devicePixelRatio||1,B6=typeof location!="undefined"&&/[?&]studio\b/.test(location.search),Wo={isPhone:wa,pixelRatio:B6?wa?Math.min(dh,1.25):Math.min(dh,1.5):wa?Math.min(dh,1.5):Math.min(dh,2),reflection:!wa,gardenDetail:wa?0:1,leafShare:wa?.65:1,motion:!wa,post:wa?1:2,level:wa?1:0};Wo.scale=1;var j6=wa?.55:.6,zl=0,ph=0,El=0,Al=0,sc=1,Tl=0,vh=48,ic=null,Wu=0;function W6(t){ic={fps:t,scale:Wo.scale},Wo.scale>.86?Wo.scale=.85:Wo.reflection?Wo.stepDown():Wo.scale>.71?Wo.scale=.7:Wo.stepDown()||(Wo.scale=Math.max(j6,Wo.scale-.1))}var xm=!0;try{/[?&]noadapt\b/.test(location.search)&&(xm=!1)}catch(t){}Wo.frame=t=>{if(!xm)return;if(!(t>0)||t>1){zl=0,ph=0;return}if(zl+=t,ph++,zl<.75)return;let e=ph/zl;if(zl=0,ph=0,Tl>0&&(Tl-=.75,Tl<=0&&(sc=1)),ic){if(e<ic.fps*1.08&&ic.scale>Wo.scale){if(++Wu>=2){Wo.scale=1,sc=1,Tl=0,vh=Math.min(vh,e*.85),Wu=0,El=0,ic=null;return}}else Wu=0;ic=null}if(e<vh){if(Al=0,++El>=2){if(El=0,Wo.scale>.61&&Wo.climbed){sc=Wo.scale-.05,Tl=40,Wo.scale=sc,Wo.climbed=!1;return}W6(e)}}else e>Math.max(vh*1.15,55)?(El=0,++Al>=6&&Wo.scale<sc-.001?(Wo.scale=Math.min(sc,Wo.scale+.05),Wo.climbed=!0,Al=0):Al>=6&&(Wo.climbed=!1)):(El=0,Al=0)};Wo.stepDown=()=>{if(Wo.reflection)Wo.reflection=!1;else if(Wo.gardenDetail>0||Wo.motion)Wo.gardenDetail=0,Wo.motion=!1,Wo.leafShare=Math.min(Wo.leafShare,.65);else if(Wo.post>0)Wo.post--;else return!1;return Wo.level++,!0};ym.exports=Wo});var Vu=Tt((DE,bm)=>{"use strict";bm.exports=[{file:"IMG_20250717_102753.jpg",slug:"love-me-like-i-am-already-dead",title:"Love me like I am Already Dead",medium:"Oil on canvas",size:[61,91],description:`We live in a world soaked in hypocrisy. We\u2019re told not to \u201Cspeak ill of the dead,\u201D yet we spend lifetimes speaking ill of the living. We judge, ignore, neglect\u2014and then pretend to mourn with grace when it\u2019s too late. People say beautiful things at funerals, but only after burying a lifetime of cruelty or silence.

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
but the loneliness of having no one willing to admit it happened.`}]});var mh=Tt((FE,Mm)=>{"use strict";var Vn={instagram:"muzammil_qureshi",email:"muzammilqureshi100@gmail.com"},wm='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/></svg>',_m='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M3.5 7l8.5 6 8.5-6"/></svg>';Vn.instagramUrl="https://instagram.com/"+Vn.instagram;Vn.mailUrl="mailto:"+Vn.email+"?subject="+encodeURIComponent("Your paintings");Vn.icons=t=>`
	<a class="${t}" href="${Vn.instagramUrl}" target="_blank" rel="noopener" aria-label="Instagram: @${Vn.instagram}" title="Instagram">${wm}</a>
	<a class="${t}" href="${Vn.mailUrl}" aria-label="Email ${Vn.email}" title="Email">${_m}</a>`;Vn.line=t=>`
	<span class="${t}">
		<a href="${Vn.instagramUrl}" target="_blank" rel="noopener">${wm}<span>@${Vn.instagram}</span></a>
		<a href="${Vn.mailUrl}">${_m}<span>${Vn.email}</span></a>
	</span>`;Mm.exports=Vn});var Ll=Tt((GE,km)=>{"use strict";km.exports=t=>{if(!t)return"";let e=[];return t.medium&&e.push(t.medium),t.size&&t.size.length===2&&e.push(t.size[0]+" \xD7 "+t.size[1]+" cm"),e.join("  \xB7  ")}});var Xu=Tt((HE,Em)=>{"use strict";var V6=Vu(),X6=mh(),Sm=Ll(),Y6=qr(),rs=t=>String(t).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),K6=`
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
`,Xn=null;function Z6(t){if(Xn){Xn.hidden=!1,requestAnimationFrame(()=>Xn.classList.add("on"));return}let e=document.createElement("style");e.textContent=K6,document.head.appendChild(e);let o=!Y6.isPhone;Xn=document.createElement("div"),Xn.className="plist",Xn.setAttribute("role","region"),Xn.setAttribute("aria-label","All paintings"),Xn.innerHTML=`
		${t?"":'<button type="button" class="plist-close">Back to the gallery</button>'}
		<header class="plist-head">
			<h1>Muzammil</h1>
			<p class="plist-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</p>
			${X6.line("plist-contact")}
		</header>
		${t?'<p class="plist-note">This device could not open the 3D gallery, so here are the paintings on their own.</p>':""}
		<main class="plist-grid">
			${V6.map(n=>`
			<article class="plist-item" id="${rs(n.slug)}">
				<img loading="lazy" decoding="async" alt="${rs(n.title)}, ${rs(Sm(n))}"
					src="images/web/${rs(n.slug)}${o?"":"-1024"}.webp"
					onerror="this.onerror=null;this.src='images/${rs(n.file)}'">
				<p class="plist-meta">${rs(Sm(n))}</p>
				<h2>${rs(n.title)}</h2>
				<details><summary>Read its story</summary>
					${String(n.description).split(/\n\s*\n/).map(a=>`<p>${rs(a.trim())}</p>`).join("")}
				</details>
			</article>`).join("")}
		</main>`,["mousedown","pointerdown","click","wheel","touchstart","touchmove","keydown"].forEach(n=>Xn.addEventListener(n,a=>a.stopPropagation(),{passive:!0}));let r=Xn.querySelector(".plist-close");r&&r.addEventListener("click",zm),document.body.appendChild(Xn),requestAnimationFrame(()=>Xn.classList.add("on"))}function zm(){Xn&&(Xn.classList.remove("on"),setTimeout(()=>{Xn.hidden=!0},500),location.hash==="#list"&&history.replaceState(null,"",location.pathname+location.search))}Em.exports={show:Z6,hide:zm}});var Am=Tt((Yu,Ku)=>{(function(t,e){typeof Yu=="object"&&typeof Ku!="undefined"?Ku.exports=e():typeof define=="function"&&define.amd?define(e):t.Stats=e()})(Yu,function(){var t=function(){function e(v){return n.appendChild(v.dom),v}function o(v){for(var u=0;u<n.children.length;u++)n.children[u].style.display=u===v?"block":"none";r=v}var r=0,n=document.createElement("div");n.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",n.addEventListener("click",function(v){v.preventDefault(),o(++r%n.children.length)},!1);var a=(performance||Date).now(),s=a,i=0,c=e(new t.Panel("FPS","#0ff","#002")),f=e(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var l=e(new t.Panel("MB","#f08","#201"));return o(0),{REVISION:16,dom:n,addPanel:e,showPanel:o,begin:function(){a=(performance||Date).now()},end:function(){i++;var v=(performance||Date).now();if(f.update(v-a,200),v>s+1e3&&(c.update(1e3*i/(v-s),100),s=v,i=0,l)){var u=performance.memory;l.update(u.usedJSHeapSize/1048576,u.jsHeapSizeLimit/1048576)}return v},update:function(){a=this.end()},domElement:n,setMode:o}};return t.Panel=function(e,o,r){var n=1/0,a=0,s=Math.round,i=s(window.devicePixelRatio||1),c=80*i,f=48*i,l=3*i,v=2*i,u=3*i,p=15*i,d=74*i,h=30*i,g=document.createElement("canvas");g.width=c,g.height=f,g.style.cssText="width:80px;height:48px";var m=g.getContext("2d");return m.font="bold "+9*i+"px Helvetica,Arial,sans-serif",m.textBaseline="top",m.fillStyle=r,m.fillRect(0,0,c,f),m.fillStyle=o,m.fillText(e,l,v),m.fillRect(u,p,d,h),m.fillStyle=r,m.globalAlpha=.9,m.fillRect(u,p,d,h),{dom:g,update:function(x,y){n=Math.min(n,x),a=Math.max(a,x),m.fillStyle=r,m.globalAlpha=1,m.fillRect(0,0,c,p),m.fillStyle=o,m.fillText(s(x)+" "+e+" ("+s(n)+"-"+s(a)+")",l,v),m.drawImage(g,u+i,p,d-i,h,u,p,d-i,h),m.fillRect(u+d-i,p,i,h),m.fillStyle=r,m.globalAlpha=.9,m.fillRect(u+d-i,p,i,s((1-x/y)*h))}}},t})});var Tm=Tt((Zu,Qu)=>{(function(t,e){typeof Zu=="object"&&typeof Qu!="undefined"?Qu.exports=e():typeof define=="function"&&define.amd?define(e):t.createREGL=e()})(Zu,function(){"use strict";var t=function(w){return w instanceof Uint8Array||w instanceof Uint16Array||w instanceof Uint32Array||w instanceof Int8Array||w instanceof Int16Array||w instanceof Int32Array||w instanceof Float32Array||w instanceof Float64Array||w instanceof Uint8ClampedArray},e=function(w,T){for(var q=Object.keys(T),st=0;st<q.length;++st)w[q[st]]=T[q[st]];return w},o=`
`;function r(w){return typeof atob!="undefined"?atob(w):"base64:"+w}function n(w){var T=new Error("(regl) "+w);throw console.error(T),T}function a(w,T){w||n(T)}function s(w){return w?": "+w:""}function i(w,T,q){w in T||n("unknown parameter ("+w+")"+s(q)+". possible values: "+Object.keys(T).join())}function c(w,T){t(w)||n("invalid parameter type"+s(T)+". must be a typed array")}function f(w,T){switch(T){case"number":return typeof w=="number";case"object":return typeof w=="object";case"string":return typeof w=="string";case"boolean":return typeof w=="boolean";case"function":return typeof w=="function";case"undefined":return typeof w=="undefined";case"symbol":return typeof w=="symbol"}}function l(w,T,q){f(w,T)||n("invalid parameter type"+s(q)+". expected "+T+", got "+typeof w)}function v(w,T){w>=0&&(w|0)===w||n("invalid parameter type, ("+w+")"+s(T)+". must be a nonnegative integer")}function u(w,T,q){T.indexOf(w)<0&&n("invalid value"+s(q)+". must be one of: "+T)}var p=["gl","canvas","container","attributes","pixelRatio","extensions","optionalExtensions","profile","onDone"];function d(w){Object.keys(w).forEach(function(T){p.indexOf(T)<0&&n('invalid regl constructor argument "'+T+'". must be one of '+p)})}function h(w,T){for(w=w+"";w.length<T;)w=" "+w;return w}function g(){this.name="unknown",this.lines=[],this.index={},this.hasErrors=!1}function m(w,T){this.number=w,this.line=T,this.errors=[]}function x(w,T,q){this.file=w,this.line=T,this.message=q}function y(){var w=new Error,T=(w.stack||w).toString(),q=/compileProcedure.*\n\s*at.*\((.*)\)/.exec(T);if(q)return q[1];var st=/compileProcedure.*\n\s*at\s+(.*)(\n|$)/.exec(T);return st?st[1]:"unknown"}function _(){var w=new Error,T=(w.stack||w).toString(),q=/at REGLCommand.*\n\s+at.*\((.*)\)/.exec(T);if(q)return q[1];var st=/at REGLCommand.*\n\s+at\s+(.*)\n/.exec(T);return st?st[1]:"unknown"}function M(w,T){var q=w.split(`
`),st=1,_t=0,rt={unknown:new g,0:new g};rt.unknown.name=rt[0].name=T||y(),rt.unknown.lines.push(new m(0,""));for(var dt=0;dt<q.length;++dt){var $t=q[dt],Gt=/^\s*#\s*(\w+)\s+(.+)\s*$/.exec($t);if(Gt)switch(Gt[1]){case"line":var Wt=/(\d+)(\s+\d+)?/.exec(Gt[2]);Wt&&(st=Wt[1]|0,Wt[2]&&(_t=Wt[2]|0,_t in rt||(rt[_t]=new g)));break;case"define":var Ht=/SHADER_NAME(_B64)?\s+(.*)$/.exec(Gt[2]);Ht&&(rt[_t].name=Ht[1]?r(Ht[2]):Ht[2]);break}rt[_t].lines.push(new m(st++,$t))}return Object.keys(rt).forEach(function(Jt){var ie=rt[Jt];ie.lines.forEach(function(Pt){ie.index[Pt.number]=Pt})}),rt}function b(w){var T=[];return w.split(`
`).forEach(function(q){if(!(q.length<5)){var st=/^ERROR:\s+(\d+):(\d+):\s*(.*)$/.exec(q);st?T.push(new x(st[1]|0,st[2]|0,st[3].trim())):q.length>0&&T.push(new x("unknown",0,q))}}),T}function k(w,T){T.forEach(function(q){var st=w[q.file];if(st){var _t=st.index[q.line];if(_t){_t.errors.push(q),st.hasErrors=!0;return}}w.unknown.hasErrors=!0,w.unknown.lines[0].errors.push(q)})}function E(w,T,q,st,_t){if(!w.getShaderParameter(T,w.COMPILE_STATUS)){var rt=w.getShaderInfoLog(T),dt=st===w.FRAGMENT_SHADER?"fragment":"vertex";it(q,"string",dt+" shader source must be a string",_t);var $t=M(q,_t),Gt=b(rt);k($t,Gt),Object.keys($t).forEach(function(Wt){var Ht=$t[Wt];if(!Ht.hasErrors)return;var Jt=[""],ie=[""];function Pt(ee,Z){Jt.push(ee),ie.push(Z||"")}Pt("file number "+Wt+": "+Ht.name+`
`,"color:red;text-decoration:underline;font-weight:bold"),Ht.lines.forEach(function(ee){if(ee.errors.length>0){Pt(h(ee.number,4)+"|  ","background-color:yellow; font-weight:bold"),Pt(ee.line+o,"color:red; background-color:yellow; font-weight:bold");var Z=0;ee.errors.forEach(function(pt){var jt=pt.message,me=/^\s*'(.*)'\s*:\s*(.*)$/.exec(jt);if(me){var At=me[1];switch(jt=me[2],At){case"assign":At="=";break}Z=Math.max(ee.line.indexOf(At,Z),0)}else Z=0;Pt(h("| ",6)),Pt(h("^^^",Z+3)+o,"font-weight:bold"),Pt(h("| ",6)),Pt(jt+o,"font-weight:bold")}),Pt(h("| ",6)+o)}else Pt(h(ee.number,4)+"|  "),Pt(ee.line+o,"color:red")}),typeof document!="undefined"&&!window.chrome?(ie[0]=Jt.join("%c"),console.log.apply(console,ie)):console.log(Jt.join(""))}),a.raise("Error compiling "+dt+" shader, "+$t[0].name)}}function z(w,T,q,st,_t){if(!w.getProgramParameter(T,w.LINK_STATUS)){var rt=w.getProgramInfoLog(T),dt=M(q,_t),$t=M(st,_t),Gt='Error linking program with vertex shader, "'+$t[0].name+'", and fragment shader "'+dt[0].name+'"';typeof document!="undefined"?console.log("%c"+Gt+o+"%c"+rt,"color:red;text-decoration:underline;font-weight:bold","color:red"):console.log(Gt+o+rt),a.raise(Gt)}}function P(w){w._commandRef=y()}function R(w,T,q,st){P(w);function _t(Gt){return Gt?st.id(Gt):0}w._fragId=_t(w.static.frag),w._vertId=_t(w.static.vert);function rt(Gt,Wt){Object.keys(Wt).forEach(function(Ht){Gt[st.id(Ht)]=!0})}var dt=w._uniformSet={};rt(dt,T.static),rt(dt,T.dynamic);var $t=w._attributeSet={};rt($t,q.static),rt($t,q.dynamic),w._hasCount="count"in w.static||"count"in w.dynamic||"elements"in w.static||"elements"in w.dynamic}function B(w,T){var q=_();n(w+" in command "+(T||y())+(q==="unknown"?"":" called from "+q))}function $(w,T,q){w||B(T,q||y())}function D(w,T,q,st){w in T||B("unknown parameter ("+w+")"+s(q)+". possible values: "+Object.keys(T).join(),st||y())}function it(w,T,q,st){f(w,T)||B("invalid parameter type"+s(q)+". expected "+T+", got "+typeof w,st||y())}function St(w){w()}function yt(w,T,q){w.texture?u(w.texture._texture.internalformat,T,"unsupported texture format for attachment"):u(w.renderbuffer._renderbuffer.format,q,"unsupported renderbuffer format for attachment")}var mt=33071,zt=9728,It=9984,re=9985,Ae=9986,lo=9987,ge=5120,$e=5121,He=5122,et=5123,j=5124,lt=5125,xt=5126,Kt=32819,te=32820,Zt=33635,qt=34042,ot=36193,Rt={};Rt[ge]=Rt[$e]=1,Rt[He]=Rt[et]=Rt[ot]=Rt[Zt]=Rt[Kt]=Rt[te]=2,Rt[j]=Rt[lt]=Rt[xt]=Rt[qt]=4;function Se(w,T){return w===te||w===Kt||w===Zt?2:w===qt?4:Rt[w]*T}function Qt(w){return!(w&w-1)&&!!w}function Ft(w,T,q){var st,_t=T.width,rt=T.height,dt=T.channels;a(_t>0&&_t<=q.maxTextureSize&&rt>0&&rt<=q.maxTextureSize,"invalid texture shape"),(w.wrapS!==mt||w.wrapT!==mt)&&a(Qt(_t)&&Qt(rt),"incompatible wrap mode for texture, both width and height must be power of 2"),T.mipmask===1?_t!==1&&rt!==1&&a(w.minFilter!==It&&w.minFilter!==Ae&&w.minFilter!==re&&w.minFilter!==lo,"min filter requires mipmap"):(a(Qt(_t)&&Qt(rt),"texture must be a square power of 2 to support mipmapping"),a(T.mipmask===(_t<<1)-1,"missing or incomplete mipmap data")),T.type===xt&&(q.extensions.indexOf("oes_texture_float_linear")<0&&a(w.minFilter===zt&&w.magFilter===zt,"filter not supported, must enable oes_texture_float_linear"),a(!w.genMipmaps,"mipmap generation not supported with float textures"));var $t=T.images;for(st=0;st<16;++st)if($t[st]){var Gt=_t>>st,Wt=rt>>st;a(T.mipmask&1<<st,"missing mipmap data");var Ht=$t[st];if(a(Ht.width===Gt&&Ht.height===Wt,"invalid shape for mip images"),a(Ht.format===T.format&&Ht.internalformat===T.internalformat&&Ht.type===T.type,"incompatible type for mip image"),!Ht.compressed)if(Ht.data){var Jt=Math.ceil(Se(Ht.type,dt)*Gt/Ht.unpackAlignment)*Ht.unpackAlignment;a(Ht.data.byteLength===Jt*Wt,"invalid data for image, buffer size is inconsistent with image format")}else Ht.element||Ht.copy}else w.genMipmaps||a((T.mipmask&1<<st)===0,"extra mipmap data");T.compressed&&a(!w.genMipmaps,"mipmap generation for compressed images not supported")}function Ue(w,T,q,st){var _t=w.width,rt=w.height,dt=w.channels;a(_t>0&&_t<=st.maxTextureSize&&rt>0&&rt<=st.maxTextureSize,"invalid texture shape"),a(_t===rt,"cube map must be square"),a(T.wrapS===mt&&T.wrapT===mt,"wrap mode not supported by cube map");for(var $t=0;$t<q.length;++$t){var Gt=q[$t];a(Gt.width===_t&&Gt.height===rt,"inconsistent cube map face shape"),T.genMipmaps&&(a(!Gt.compressed,"can not generate mipmap for compressed textures"),a(Gt.mipmask===1,"can not specify mipmaps and generate mipmaps"));for(var Wt=Gt.images,Ht=0;Ht<16;++Ht){var Jt=Wt[Ht];if(Jt){var ie=_t>>Ht,Pt=rt>>Ht;a(Gt.mipmask&1<<Ht,"missing mipmap data"),a(Jt.width===ie&&Jt.height===Pt,"invalid shape for mip images"),a(Jt.format===w.format&&Jt.internalformat===w.internalformat&&Jt.type===w.type,"incompatible type for mip image"),Jt.compressed||(Jt.data?a(Jt.data.byteLength===ie*Pt*Math.max(Se(Jt.type,dt),Jt.unpackAlignment),"invalid data for image, buffer size is inconsistent with image format"):Jt.element||Jt.copy)}}}}var S=e(a,{optional:St,raise:n,commandRaise:B,command:$,parameter:i,commandParameter:D,constructor:d,type:l,commandType:it,isTypedArray:c,nni:v,oneOf:u,shaderError:E,linkError:z,callSite:_,saveCommandRef:P,saveDrawInfo:R,framebufferFormat:yt,guessCommand:y,texture2D:Ft,textureCube:Ue}),De=0,Ve=0,uo=5,Oo=6;function wo(w,T){this.id=De++,this.type=w,this.data=T}function Fo(w){return w.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}function qo(w){if(w.length===0)return[];var T=w.charAt(0),q=w.charAt(w.length-1);if(w.length>1&&T===q&&(T==='"'||T==="'"))return['"'+Fo(w.substr(1,w.length-2))+'"'];var st=/\[(false|true|null|\d+|'[^']*'|"[^"]*")\]/.exec(w);if(st)return qo(w.substr(0,st.index)).concat(qo(st[1])).concat(qo(w.substr(st.index+st[0].length)));var _t=w.split(".");if(_t.length===1)return['"'+Fo(w)+'"'];for(var rt=[],dt=0;dt<_t.length;++dt)rt=rt.concat(qo(_t[dt]));return rt}function x0(w){return"["+qo(w).join("][")+"]"}function Ln(w,T){return new wo(w,x0(T+""))}function Nn(w){return typeof w=="function"&&!w._reglType||w instanceof wo}function tt(w,T){if(typeof w=="function")return new wo(Ve,w);if(typeof w=="number"||typeof w=="boolean")return new wo(uo,w);if(Array.isArray(w))return new wo(Oo,w.map((q,st)=>tt(q,T+"["+st+"]")));if(w instanceof wo)return w;S(!1,"invalid option type in uniform "+T)}var Vt={DynamicVariable:wo,define:Ln,isDynamic:Nn,unbox:tt,accessor:x0},Xt={next:typeof requestAnimationFrame=="function"?function(w){return requestAnimationFrame(w)}:function(w){return setTimeout(w,16)},cancel:typeof cancelAnimationFrame=="function"?function(w){return cancelAnimationFrame(w)}:clearTimeout},Bt=typeof performance!="undefined"&&performance.now?function(){return performance.now()}:function(){return+new Date};function Le(){var w={"":0},T=[""];return{id:function(q){var st=w[q];return st||(st=w[q]=T.length,T.push(q),st)},str:function(q){return T[q]}}}function Be(w,T,q){var st=document.createElement("canvas");e(st.style,{border:0,margin:0,padding:0,top:0,left:0}),w.appendChild(st),w===document.body&&(st.style.position="absolute",e(w.style,{margin:0,padding:0}));function _t(){var $t=window.innerWidth,Gt=window.innerHeight;if(w!==document.body){var Wt=w.getBoundingClientRect();$t=Wt.right-Wt.left,Gt=Wt.bottom-Wt.top}st.width=q*$t,st.height=q*Gt,e(st.style,{width:$t+"px",height:Gt+"px"})}var rt;w!==document.body&&typeof ResizeObserver=="function"?(rt=new ResizeObserver(function(){setTimeout(_t)}),rt.observe(w)):window.addEventListener("resize",_t,!1);function dt(){rt?rt.disconnect():window.removeEventListener("resize",_t),w.removeChild(st)}return _t(),{canvas:st,onDestroy:dt}}function Ye(w,T){function q(st){try{return w.getContext(st,T)}catch(_t){return null}}return q("webgl")||q("experimental-webgl")||q("webgl-experimental")}function Ie(w){return typeof w.nodeName=="string"&&typeof w.appendChild=="function"&&typeof w.getBoundingClientRect=="function"}function io(w){return typeof w.drawArrays=="function"||typeof w.drawElements=="function"}function je(w){return typeof w=="string"?w.split():(S(Array.isArray(w),"invalid extension array"),w)}function po(w){return typeof w=="string"?(S(typeof document!="undefined","not supported outside of DOM"),document.querySelector(w)):w}function Xe(w){var T=w||{},q,st,_t,rt,dt={},$t=[],Gt=[],Wt=typeof window=="undefined"?1:window.devicePixelRatio,Ht=!1,Jt=function(ee){ee&&S.raise(ee)},ie=function(){};if(typeof T=="string"?(S(typeof document!="undefined","selector queries only supported in DOM enviroments"),q=document.querySelector(T),S(q,"invalid query string for element")):typeof T=="object"?Ie(T)?q=T:io(T)?(rt=T,_t=rt.canvas):(S.constructor(T),"gl"in T?rt=T.gl:"canvas"in T?_t=po(T.canvas):"container"in T&&(st=po(T.container)),"attributes"in T&&(dt=T.attributes,S.type(dt,"object","invalid context attributes")),"extensions"in T&&($t=je(T.extensions)),"optionalExtensions"in T&&(Gt=je(T.optionalExtensions)),"onDone"in T&&(S.type(T.onDone,"function","invalid or missing onDone callback"),Jt=T.onDone),"profile"in T&&(Ht=!!T.profile),"pixelRatio"in T&&(Wt=+T.pixelRatio,S(Wt>0,"invalid pixel ratio"))):S.raise("invalid arguments to regl"),q&&(q.nodeName.toLowerCase()==="canvas"?_t=q:st=q),!rt){if(!_t){S(typeof document!="undefined","must manually specify webgl context outside of DOM environments");var Pt=Be(st||document.body,Jt,Wt);if(!Pt)return null;_t=Pt.canvas,ie=Pt.onDestroy}dt.premultipliedAlpha===void 0&&(dt.premultipliedAlpha=!0),rt=Ye(_t,dt)}return rt?{gl:rt,canvas:_t,container:st,extensions:$t,optionalExtensions:Gt,pixelRatio:Wt,profile:Ht,onDone:Jt,onDestroy:ie}:(ie(),Jt("webgl not supported, try upgrading your browser or graphics drivers http://get.webgl.org"),null)}function Ze(w,T){var q={};function st(dt){S.type(dt,"string","extension name must be string");var $t=dt.toLowerCase(),Gt;try{Gt=q[$t]=w.getExtension($t)}catch(Wt){}return!!Gt}for(var _t=0;_t<T.extensions.length;++_t){var rt=T.extensions[_t];if(!st(rt))return T.onDestroy(),T.onDone('"'+rt+'" extension is not supported by the current WebGL context, try upgrading your system or a different browser'),null}return T.optionalExtensions.forEach(st),{extensions:q,restore:function(){Object.keys(q).forEach(function(dt){if(q[dt]&&!st(dt))throw new Error("(regl): error restoring extension "+dt)})}}}function Mo(w,T){for(var q=Array(w),st=0;st<w;++st)q[st]=T(st);return q}var Y=5120,gt=5121,ft=5122,Ct=5123,pe=5124,Me=5125,ye=5126;function le(w){for(var T=16;T<=1<<28;T*=16)if(w<=T)return T;return 0}function ve(w){var T,q;return T=(w>65535)<<4,w>>>=T,q=(w>255)<<3,w>>>=q,T|=q,q=(w>15)<<2,w>>>=q,T|=q,q=(w>3)<<1,w>>>=q,T|=q,T|w>>1}function Je(){var w=Mo(8,function(){return[]});function T(rt){var dt=le(rt),$t=w[ve(dt)>>2];return $t.length>0?$t.pop():new ArrayBuffer(dt)}function q(rt){w[ve(rt.byteLength)>>2].push(rt)}function st(rt,dt){var $t=null;switch(rt){case Y:$t=new Int8Array(T(dt),0,dt);break;case gt:$t=new Uint8Array(T(dt),0,dt);break;case ft:$t=new Int16Array(T(2*dt),0,dt);break;case Ct:$t=new Uint16Array(T(2*dt),0,dt);break;case pe:$t=new Int32Array(T(4*dt),0,dt);break;case Me:$t=new Uint32Array(T(4*dt),0,dt);break;case ye:$t=new Float32Array(T(4*dt),0,dt);break;default:return null}return $t.length!==dt?$t.subarray(0,dt):$t}function _t(rt){q(rt.buffer)}return{alloc:T,free:q,allocType:st,freeType:_t}}var W=Je();W.zero=Je();var ht=3408,kt=3410,ue=3411,fe=3412,_o=3413,yo=3414,Uo=3415,ao=33901,Co=33902,co=3379,qe=3386,vo=34921,so=36347,p0=36348,t0=35661,ir=35660,l0=34930,Cr=36349,P0=34076,Jr=34024,Xo=7936,M0=7937,$r=7938,Ds=35724,ga=34047,Fs=36063,$f=34852,Qa=3553,Di=34067,sl=34069,K1=33984,Na=6408,il=5126,qn=5121,cl=36160,Gs=36053,yw=36064,bw=16384,ww=function(w,T){var q=1;T.ext_texture_filter_anisotropic&&(q=w.getParameter(ga));var st=1,_t=1;T.webgl_draw_buffers&&(st=w.getParameter($f),_t=w.getParameter(Fs));var rt=!!T.oes_texture_float;if(rt){var dt=w.createTexture();w.bindTexture(Qa,dt),w.texImage2D(Qa,0,Na,1,1,0,Na,il,null);var $t=w.createFramebuffer();if(w.bindFramebuffer(cl,$t),w.framebufferTexture2D(cl,yw,Qa,dt,0),w.bindTexture(Qa,null),w.checkFramebufferStatus(cl)!==Gs)rt=!1;else{w.viewport(0,0,1,1),w.clearColor(1,0,0,1),w.clear(bw);var Gt=W.allocType(il,4);w.readPixels(0,0,1,1,Na,il,Gt),w.getError()?rt=!1:(w.deleteFramebuffer($t),w.deleteTexture(dt),rt=Gt[0]===1),W.freeType(Gt)}}var Wt=typeof navigator!="undefined"&&(/MSIE/.test(navigator.userAgent)||/Trident\//.test(navigator.appVersion)||/Edge/.test(navigator.userAgent)),Ht=!0;if(!Wt){var Jt=w.createTexture(),ie=W.allocType(qn,36);w.activeTexture(K1),w.bindTexture(Di,Jt),w.texImage2D(sl,0,Na,3,3,0,Na,qn,ie),W.freeType(ie),w.bindTexture(Di,null),w.deleteTexture(Jt),Ht=!w.getError()}return{colorBits:[w.getParameter(kt),w.getParameter(ue),w.getParameter(fe),w.getParameter(_o)],depthBits:w.getParameter(yo),stencilBits:w.getParameter(Uo),subpixelBits:w.getParameter(ht),extensions:Object.keys(T).filter(function(Pt){return!!T[Pt]}),maxAnisotropic:q,maxDrawbuffers:st,maxColorAttachments:_t,pointSizeDims:w.getParameter(ao),lineWidthDims:w.getParameter(Co),maxViewportDims:w.getParameter(qe),maxCombinedTextureUnits:w.getParameter(t0),maxCubeMapSize:w.getParameter(P0),maxRenderbufferSize:w.getParameter(Jr),maxTextureUnits:w.getParameter(l0),maxTextureSize:w.getParameter(co),maxAttributes:w.getParameter(vo),maxVertexUniforms:w.getParameter(so),maxVertexTextureUnits:w.getParameter(ir),maxVaryingVectors:w.getParameter(p0),maxFragmentUniforms:w.getParameter(Cr),glsl:w.getParameter(Ds),renderer:w.getParameter(M0),vendor:w.getParameter(Xo),version:w.getParameter($r),readFloat:rt,npotTextureCube:Ht}};function ta(w){return!!w&&typeof w=="object"&&Array.isArray(w.shape)&&Array.isArray(w.stride)&&typeof w.offset=="number"&&w.shape.length===w.stride.length&&(Array.isArray(w.data)||t(w.data))}var wr=function(w){return Object.keys(w).map(function(T){return w[T]})},Pf={shape:Sw,flatten:kw};function _w(w,T,q){for(var st=0;st<T;++st)q[st]=w[st]}function Mw(w,T,q,st){for(var _t=0,rt=0;rt<T;++rt)for(var dt=w[rt],$t=0;$t<q;++$t)st[_t++]=dt[$t]}function _v(w,T,q,st,_t,rt){for(var dt=rt,$t=0;$t<T;++$t)for(var Gt=w[$t],Wt=0;Wt<q;++Wt)for(var Ht=Gt[Wt],Jt=0;Jt<st;++Jt)_t[dt++]=Ht[Jt]}function Mv(w,T,q,st,_t){for(var rt=1,dt=q+1;dt<T.length;++dt)rt*=T[dt];var $t=T[q];if(T.length-q===4){var Gt=T[q+1],Wt=T[q+2],Ht=T[q+3];for(dt=0;dt<$t;++dt)_v(w[dt],Gt,Wt,Ht,st,_t),_t+=rt}else for(dt=0;dt<$t;++dt)Mv(w[dt],T,q+1,st,_t),_t+=rt}function kw(w,T,q,st){var _t=1;if(T.length)for(var rt=0;rt<T.length;++rt)_t*=T[rt];else _t=0;var dt=st||W.allocType(q,_t);switch(T.length){case 0:break;case 1:_w(w,T[0],dt);break;case 2:Mw(w,T[0],T[1],dt);break;case 3:_v(w,T[0],T[1],T[2],dt,0);break;default:Mv(w,T,0,dt,0)}return dt}function Sw(w){for(var T=[],q=w;q.length;q=q[0])T.push(q.length);return T}var Z1={"[object Int8Array]":5120,"[object Int16Array]":5122,"[object Int32Array]":5124,"[object Uint8Array]":5121,"[object Uint8ClampedArray]":5121,"[object Uint16Array]":5123,"[object Uint32Array]":5125,"[object Float32Array]":5126,"[object Float64Array]":5121,"[object ArrayBuffer]":5121},zw=5120,Ew=5122,Aw=5124,Tw=5121,Lw=5123,Nw=5125,Ow=5126,Rw=5126,Hs={int8:zw,int16:Ew,int32:Aw,uint8:Tw,uint16:Lw,uint32:Nw,float:Ow,float32:Rw},Cw=35048,$w=35040,If={dynamic:Cw,stream:$w,static:35044},Q1=Pf.flatten,kv=Pf.shape,Sv=35044,Pw=35040,J1=5121,tu=5126,Ja=[];Ja[5120]=1,Ja[5122]=2,Ja[5124]=4,Ja[5121]=1,Ja[5123]=2,Ja[5125]=4,Ja[5126]=4;function qf(w){return Z1[Object.prototype.toString.call(w)]|0}function zv(w,T){for(var q=0;q<T.length;++q)w[q]=T[q]}function Ev(w,T,q,st,_t,rt,dt){for(var $t=0,Gt=0;Gt<q;++Gt)for(var Wt=0;Wt<st;++Wt)w[$t++]=T[_t*Gt+rt*Wt+dt]}function Iw(w,T,q,st){var _t=0,rt={};function dt(Z){this.id=_t++,this.buffer=w.createBuffer(),this.type=Z,this.usage=Sv,this.byteLength=0,this.dimension=1,this.dtype=J1,this.persistentData=null,q.profile&&(this.stats={size:0})}dt.prototype.bind=function(){w.bindBuffer(this.type,this.buffer)},dt.prototype.destroy=function(){ie(this)};var $t=[];function Gt(Z,pt){var jt=$t.pop();return jt||(jt=new dt(Z)),jt.bind(),Jt(jt,pt,Pw,0,1,!1),jt}function Wt(Z){$t.push(Z)}function Ht(Z,pt,jt){Z.byteLength=pt.byteLength,w.bufferData(Z.type,pt,jt)}function Jt(Z,pt,jt,me,At,be){var Ot;if(Z.usage=jt,Array.isArray(pt)){if(Z.dtype=me||tu,pt.length>0){var oe;if(Array.isArray(pt[0])){Ot=kv(pt);for(var Lt=1,ne=1;ne<Ot.length;++ne)Lt*=Ot[ne];Z.dimension=Lt,oe=Q1(pt,Ot,Z.dtype),Ht(Z,oe,jt),be?Z.persistentData=oe:W.freeType(oe)}else if(typeof pt[0]=="number"){Z.dimension=At;var We=W.allocType(Z.dtype,pt.length);zv(We,pt),Ht(Z,We,jt),be?Z.persistentData=We:W.freeType(We)}else t(pt[0])?(Z.dimension=pt[0].length,Z.dtype=me||qf(pt[0])||tu,oe=Q1(pt,[pt.length,pt[0].length],Z.dtype),Ht(Z,oe,jt),be?Z.persistentData=oe:W.freeType(oe)):S.raise("invalid buffer data")}}else if(t(pt))Z.dtype=me||qf(pt),Z.dimension=At,Ht(Z,pt,jt),be&&(Z.persistentData=new Uint8Array(new Uint8Array(pt.buffer)));else if(ta(pt)){Ot=pt.shape;var fo=pt.stride,ce=pt.offset,Yt=0,Et=0,eo=0,ko=0;Ot.length===1?(Yt=Ot[0],Et=1,eo=fo[0],ko=0):Ot.length===2?(Yt=Ot[0],Et=Ot[1],eo=fo[0],ko=fo[1]):S.raise("invalid shape"),Z.dtype=me||qf(pt.data)||tu,Z.dimension=Et;var Ne=W.allocType(Z.dtype,Yt*Et);Ev(Ne,pt.data,Yt,Et,eo,ko,ce),Ht(Z,Ne,jt),be?Z.persistentData=Ne:W.freeType(Ne)}else pt instanceof ArrayBuffer?(Z.dtype=J1,Z.dimension=At,Ht(Z,pt,jt),be&&(Z.persistentData=new Uint8Array(new Uint8Array(pt)))):S.raise("invalid buffer data")}function ie(Z){T.bufferCount--,st(Z);var pt=Z.buffer;S(pt,"buffer must not be deleted already"),w.deleteBuffer(pt),Z.buffer=null,delete rt[Z.id]}function Pt(Z,pt,jt,me){T.bufferCount++;var At=new dt(pt);rt[At.id]=At;function be(Lt){var ne=Sv,We=null,fo=0,ce=0,Yt=1;return Array.isArray(Lt)||t(Lt)||ta(Lt)||Lt instanceof ArrayBuffer?We=Lt:typeof Lt=="number"?fo=Lt|0:Lt&&(S.type(Lt,"object","buffer arguments must be an object, a number or an array"),"data"in Lt&&(S(We===null||Array.isArray(We)||t(We)||ta(We),"invalid data for buffer"),We=Lt.data),"usage"in Lt&&(S.parameter(Lt.usage,If,"invalid buffer usage"),ne=If[Lt.usage]),"type"in Lt&&(S.parameter(Lt.type,Hs,"invalid buffer type"),ce=Hs[Lt.type]),"dimension"in Lt&&(S.type(Lt.dimension,"number","invalid dimension"),Yt=Lt.dimension|0),"length"in Lt&&(S.nni(fo,"buffer length must be a nonnegative integer"),fo=Lt.length|0)),At.bind(),We?Jt(At,We,ne,ce,Yt,me):(fo&&w.bufferData(At.type,fo,ne),At.dtype=ce||J1,At.usage=ne,At.dimension=Yt,At.byteLength=fo),q.profile&&(At.stats.size=At.byteLength*Ja[At.dtype]),be}function Ot(Lt,ne){S(ne+Lt.byteLength<=At.byteLength,"invalid buffer subdata call, buffer is too small.  Can't write data of size "+Lt.byteLength+" starting from offset "+ne+" to a buffer of size "+At.byteLength),w.bufferSubData(At.type,ne,Lt)}function oe(Lt,ne){var We=(ne||0)|0,fo;if(At.bind(),t(Lt)||Lt instanceof ArrayBuffer)Ot(Lt,We);else if(Array.isArray(Lt)){if(Lt.length>0)if(typeof Lt[0]=="number"){var ce=W.allocType(At.dtype,Lt.length);zv(ce,Lt),Ot(ce,We),W.freeType(ce)}else if(Array.isArray(Lt[0])||t(Lt[0])){fo=kv(Lt);var Yt=Q1(Lt,fo,At.dtype);Ot(Yt,We),W.freeType(Yt)}else S.raise("invalid buffer data")}else if(ta(Lt)){fo=Lt.shape;var Et=Lt.stride,eo=0,ko=0,Ne=0,To=0;fo.length===1?(eo=fo[0],ko=1,Ne=Et[0],To=0):fo.length===2?(eo=fo[0],ko=fo[1],Ne=Et[0],To=Et[1]):S.raise("invalid shape");var ho=Array.isArray(Lt.data)?At.dtype:qf(Lt.data),Eo=W.allocType(ho,eo*ko);Ev(Eo,Lt.data,eo,ko,Ne,To,Lt.offset),Ot(Eo,We),W.freeType(Eo)}else S.raise("invalid data for buffer subdata");return be}return jt||be(Z),be._reglType="buffer",be._buffer=At,be.subdata=oe,q.profile&&(be.stats=At.stats),be.destroy=function(){ie(At)},be}function ee(){wr(rt).forEach(function(Z){Z.buffer=w.createBuffer(),w.bindBuffer(Z.type,Z.buffer),w.bufferData(Z.type,Z.persistentData||Z.byteLength,Z.usage)})}return q.profile&&(T.getTotalBufferSize=function(){var Z=0;return Object.keys(rt).forEach(function(pt){Z+=rt[pt].stats.size}),Z}),{create:Pt,createStream:Gt,destroyStream:Wt,clear:function(){wr(rt).forEach(ie),$t.forEach(ie)},getBuffer:function(Z){return Z&&Z._buffer instanceof dt?Z._buffer:null},restore:ee,_initBuffer:Jt}}var qw=0,Dw=0,Fw=1,Gw=1,Hw=4,Uw=4,Fi={points:qw,point:Dw,lines:Fw,line:Gw,triangles:Hw,triangle:Uw,"line loop":2,"line strip":3,"triangle strip":5,"triangle fan":6},Bw=0,jw=1,ll=4,Ww=5120,Gi=5121,Av=5122,Hi=5123,Tv=5124,Us=5125,eu=34963,Vw=35040,Xw=35044;function Yw(w,T,q,st){var _t={},rt=0,dt={uint8:Gi,uint16:Hi};T.oes_element_index_uint&&(dt.uint32=Us);function $t(ee){this.id=rt++,_t[this.id]=this,this.buffer=ee,this.primType=ll,this.vertCount=0,this.type=0}$t.prototype.bind=function(){this.buffer.bind()};var Gt=[];function Wt(ee){var Z=Gt.pop();return Z||(Z=new $t(q.create(null,eu,!0,!1)._buffer)),Jt(Z,ee,Vw,-1,-1,0,0),Z}function Ht(ee){Gt.push(ee)}function Jt(ee,Z,pt,jt,me,At,be){ee.buffer.bind();var Ot;if(Z){var oe=be;!be&&(!t(Z)||ta(Z)&&!t(Z.data))&&(oe=T.oes_element_index_uint?Us:Hi),q._initBuffer(ee.buffer,Z,pt,oe,3)}else w.bufferData(eu,At,pt),ee.buffer.dtype=Ot||Gi,ee.buffer.usage=pt,ee.buffer.dimension=3,ee.buffer.byteLength=At;if(Ot=be,!be){switch(ee.buffer.dtype){case Gi:case Ww:Ot=Gi;break;case Hi:case Av:Ot=Hi;break;case Us:case Tv:Ot=Us;break;default:S.raise("unsupported type for element array")}ee.buffer.dtype=Ot}ee.type=Ot,S(Ot!==Us||!!T.oes_element_index_uint,"32 bit element buffers not supported, enable oes_element_index_uint first");var Lt=me;Lt<0&&(Lt=ee.buffer.byteLength,Ot===Hi?Lt>>=1:Ot===Us&&(Lt>>=2)),ee.vertCount=Lt;var ne=jt;if(jt<0){ne=ll;var We=ee.buffer.dimension;We===1&&(ne=Bw),We===2&&(ne=jw),We===3&&(ne=ll)}ee.primType=ne}function ie(ee){st.elementsCount--,S(ee.buffer!==null,"must not double destroy elements"),delete _t[ee.id],ee.buffer.destroy(),ee.buffer=null}function Pt(ee,Z){var pt=q.create(null,eu,!0),jt=new $t(pt._buffer);st.elementsCount++;function me(At){if(!At)pt(),jt.primType=ll,jt.vertCount=0,jt.type=Gi;else if(typeof At=="number")pt(At),jt.primType=ll,jt.vertCount=At|0,jt.type=Gi;else{var be=null,Ot=Xw,oe=-1,Lt=-1,ne=0,We=0;Array.isArray(At)||t(At)||ta(At)?be=At:(S.type(At,"object","invalid arguments for elements"),"data"in At&&(be=At.data,S(Array.isArray(be)||t(be)||ta(be),"invalid data for element buffer")),"usage"in At&&(S.parameter(At.usage,If,"invalid element buffer usage"),Ot=If[At.usage]),"primitive"in At&&(S.parameter(At.primitive,Fi,"invalid element buffer primitive"),oe=Fi[At.primitive]),"count"in At&&(S(typeof At.count=="number"&&At.count>=0,"invalid vertex count for elements"),Lt=At.count|0),"type"in At&&(S.parameter(At.type,dt,"invalid buffer type"),We=dt[At.type]),"length"in At?ne=At.length|0:(ne=Lt,We===Hi||We===Av?ne*=2:(We===Us||We===Tv)&&(ne*=4))),Jt(jt,be,Ot,oe,Lt,ne,We)}return me}return me(ee),me._reglType="elements",me._elements=jt,me.subdata=function(At,be){return pt.subdata(At,be),me},me.destroy=function(){ie(jt)},me}return{create:Pt,createStream:Wt,destroyStream:Ht,getElements:function(ee){return typeof ee=="function"&&ee._elements instanceof $t?ee._elements:null},clear:function(){wr(_t).forEach(ie)}}}var Lv=new Float32Array(1),Kw=new Uint32Array(Lv.buffer),Zw=5123;function Nv(w){for(var T=W.allocType(Zw,w.length),q=0;q<w.length;++q)if(isNaN(w[q]))T[q]=65535;else if(w[q]===1/0)T[q]=31744;else if(w[q]===-1/0)T[q]=64512;else{Lv[0]=w[q];var st=Kw[0],_t=st>>>31<<15,rt=(st<<1>>>24)-127,dt=st>>13&1023;if(rt<-24)T[q]=_t;else if(rt<-14){var $t=-14-rt;T[q]=_t+(dt+1024>>$t)}else rt>15?T[q]=_t+31744:T[q]=_t+(rt+15<<10)+dt}return T}function N0(w){return Array.isArray(w)||t(w)}var Ov=function(w){return!(w&w-1)&&!!w},Qw=34467,xa=3553,ou=34067,Df=34069,Bs=6408,nu=6406,Ff=6407,fl=6409,Gf=6410,Rv=32854,ru=32855,Cv=36194,Jw=32819,t4=32820,e4=33635,o4=34042,au=6402,Hf=34041,su=35904,iu=35906,Ui=36193,cu=33776,lu=33777,fu=33778,hu=33779,$v=35986,Pv=35987,Iv=34798,qv=35840,Dv=35841,Fv=35842,Gv=35843,Hv=36196,Bi=5121,uu=5123,du=5125,hl=5126,n4=10242,r4=10243,a4=10497,pu=33071,s4=33648,i4=10240,c4=10241,vu=9728,l4=9729,mu=9984,Uv=9985,Bv=9986,gu=9987,f4=33170,Uf=4352,h4=4353,u4=4354,d4=34046,p4=3317,v4=37440,m4=37441,g4=37443,jv=37444,ul=33984,x4=[mu,Bv,Uv,gu],Bf=[0,fl,Gf,Ff,Bs],Pr={};Pr[fl]=Pr[nu]=Pr[au]=1,Pr[Hf]=Pr[Gf]=2,Pr[Ff]=Pr[su]=3,Pr[Bs]=Pr[iu]=4;function ji(w){return"[object "+w+"]"}var Wv=ji("HTMLCanvasElement"),Vv=ji("OffscreenCanvas"),Xv=ji("CanvasRenderingContext2D"),Yv=ji("ImageBitmap"),Kv=ji("HTMLImageElement"),Zv=ji("HTMLVideoElement"),y4=Object.keys(Z1).concat([Wv,Vv,Xv,Yv,Kv,Zv]),Wi=[];Wi[Bi]=1,Wi[hl]=4,Wi[Ui]=2,Wi[uu]=2,Wi[du]=4;var wn=[];wn[Rv]=2,wn[ru]=2,wn[Cv]=2,wn[Hf]=4,wn[cu]=.5,wn[lu]=.5,wn[fu]=1,wn[hu]=1,wn[$v]=.5,wn[Pv]=1,wn[Iv]=1,wn[qv]=.5,wn[Dv]=.25,wn[Fv]=.5,wn[Gv]=.25,wn[Hv]=.5;function Qv(w){return Array.isArray(w)&&(w.length===0||typeof w[0]=="number")}function Jv(w){if(!Array.isArray(w))return!1;var T=w.length;return!(T===0||!N0(w[0]))}function js(w){return Object.prototype.toString.call(w)}function t2(w){return js(w)===Wv}function e2(w){return js(w)===Vv}function b4(w){return js(w)===Xv}function w4(w){return js(w)===Yv}function _4(w){return js(w)===Kv}function M4(w){return js(w)===Zv}function xu(w){if(!w)return!1;var T=js(w);return y4.indexOf(T)>=0?!0:Qv(w)||Jv(w)||ta(w)}function o2(w){return Z1[Object.prototype.toString.call(w)]|0}function k4(w,T){var q=T.length;switch(w.type){case Bi:case uu:case du:case hl:var st=W.allocType(w.type,q);st.set(T),w.data=st;break;case Ui:w.data=Nv(T);break;default:S.raise("unsupported texture type, must specify a typed array")}}function n2(w,T){return W.allocType(w.type===Ui?hl:w.type,T)}function r2(w,T){w.type===Ui?(w.data=Nv(T),W.freeType(T)):w.data=T}function S4(w,T,q,st,_t,rt){for(var dt=w.width,$t=w.height,Gt=w.channels,Wt=dt*$t*Gt,Ht=n2(w,Wt),Jt=0,ie=0;ie<$t;++ie)for(var Pt=0;Pt<dt;++Pt)for(var ee=0;ee<Gt;++ee)Ht[Jt++]=T[q*Pt+st*ie+_t*ee+rt];r2(w,Ht)}function jf(w,T,q,st,_t,rt){var dt;if(typeof wn[w]!="undefined"?dt=wn[w]:dt=Pr[w]*Wi[T],rt&&(dt*=6),_t){for(var $t=0,Gt=q;Gt>=1;)$t+=dt*Gt*Gt,Gt/=2;return $t}else return dt*q*st}function z4(w,T,q,st,_t,rt,dt){var $t={"don't care":Uf,"dont care":Uf,nice:u4,fast:h4},Gt={repeat:a4,clamp:pu,mirror:s4},Wt={nearest:vu,linear:l4},Ht=e({mipmap:gu,"nearest mipmap nearest":mu,"linear mipmap nearest":Uv,"nearest mipmap linear":Bv,"linear mipmap linear":gu},Wt),Jt={none:0,browser:jv},ie={uint8:Bi,rgba4:Jw,rgb565:e4,"rgb5 a1":t4},Pt={alpha:nu,luminance:fl,"luminance alpha":Gf,rgb:Ff,rgba:Bs,rgba4:Rv,"rgb5 a1":ru,rgb565:Cv},ee={};T.ext_srgb&&(Pt.srgb=su,Pt.srgba=iu),T.oes_texture_float&&(ie.float32=ie.float=hl),T.oes_texture_half_float&&(ie.float16=ie["half float"]=Ui),T.webgl_depth_texture&&(e(Pt,{depth:au,"depth stencil":Hf}),e(ie,{uint16:uu,uint32:du,"depth stencil":o4})),T.webgl_compressed_texture_s3tc&&e(ee,{"rgb s3tc dxt1":cu,"rgba s3tc dxt1":lu,"rgba s3tc dxt3":fu,"rgba s3tc dxt5":hu}),T.webgl_compressed_texture_atc&&e(ee,{"rgb atc":$v,"rgba atc explicit alpha":Pv,"rgba atc interpolated alpha":Iv}),T.webgl_compressed_texture_pvrtc&&e(ee,{"rgb pvrtc 4bppv1":qv,"rgb pvrtc 2bppv1":Dv,"rgba pvrtc 4bppv1":Fv,"rgba pvrtc 2bppv1":Gv}),T.webgl_compressed_texture_etc1&&(ee["rgb etc1"]=Hv);var Z=Array.prototype.slice.call(w.getParameter(Qw));Object.keys(ee).forEach(function(C){var ct=ee[C];Z.indexOf(ct)>=0&&(Pt[C]=ct)});var pt=Object.keys(Pt);q.textureFormats=pt;var jt=[];Object.keys(Pt).forEach(function(C){var ct=Pt[C];jt[ct]=C});var me=[];Object.keys(ie).forEach(function(C){var ct=ie[C];me[ct]=C});var At=[];Object.keys(Wt).forEach(function(C){var ct=Wt[C];At[ct]=C});var be=[];Object.keys(Ht).forEach(function(C){var ct=Ht[C];be[ct]=C});var Ot=[];Object.keys(Gt).forEach(function(C){var ct=Gt[C];Ot[ct]=C});var oe=pt.reduce(function(C,ct){var nt=Pt[ct];return nt===fl||nt===nu||nt===fl||nt===Gf||nt===au||nt===Hf||T.ext_srgb&&(nt===su||nt===iu)?C[nt]=nt:nt===ru||ct.indexOf("rgba")>=0?C[nt]=Bs:C[nt]=Ff,C},{});function Lt(){this.internalformat=Bs,this.format=Bs,this.type=Bi,this.compressed=!1,this.premultiplyAlpha=!1,this.flipY=!1,this.unpackAlignment=1,this.colorSpace=jv,this.width=0,this.height=0,this.channels=0}function ne(C,ct){C.internalformat=ct.internalformat,C.format=ct.format,C.type=ct.type,C.compressed=ct.compressed,C.premultiplyAlpha=ct.premultiplyAlpha,C.flipY=ct.flipY,C.unpackAlignment=ct.unpackAlignment,C.colorSpace=ct.colorSpace,C.width=ct.width,C.height=ct.height,C.channels=ct.channels}function We(C,ct){if(!(typeof ct!="object"||!ct)){if("premultiplyAlpha"in ct&&(S.type(ct.premultiplyAlpha,"boolean","invalid premultiplyAlpha"),C.premultiplyAlpha=ct.premultiplyAlpha),"flipY"in ct&&(S.type(ct.flipY,"boolean","invalid texture flip"),C.flipY=ct.flipY),"alignment"in ct&&(S.oneOf(ct.alignment,[1,2,4,8],"invalid texture unpack alignment"),C.unpackAlignment=ct.alignment),"colorSpace"in ct&&(S.parameter(ct.colorSpace,Jt,"invalid colorSpace"),C.colorSpace=Jt[ct.colorSpace]),"type"in ct){var nt=ct.type;S(T.oes_texture_float||!(nt==="float"||nt==="float32"),"you must enable the OES_texture_float extension in order to use floating point textures."),S(T.oes_texture_half_float||!(nt==="half float"||nt==="float16"),"you must enable the OES_texture_half_float extension in order to use 16-bit floating point textures."),S(T.webgl_depth_texture||!(nt==="uint16"||nt==="uint32"||nt==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),S.parameter(nt,ie,"invalid texture type"),C.type=ie[nt]}var ke=C.width,Lo=C.height,N=C.channels,A=!1;"shape"in ct?(S(Array.isArray(ct.shape)&&ct.shape.length>=2,"shape must be an array"),ke=ct.shape[0],Lo=ct.shape[1],ct.shape.length===3&&(N=ct.shape[2],S(N>0&&N<=4,"invalid number of channels"),A=!0),S(ke>=0&&ke<=q.maxTextureSize,"invalid width"),S(Lo>=0&&Lo<=q.maxTextureSize,"invalid height")):("radius"in ct&&(ke=Lo=ct.radius,S(ke>=0&&ke<=q.maxTextureSize,"invalid radius")),"width"in ct&&(ke=ct.width,S(ke>=0&&ke<=q.maxTextureSize,"invalid width")),"height"in ct&&(Lo=ct.height,S(Lo>=0&&Lo<=q.maxTextureSize,"invalid height")),"channels"in ct&&(N=ct.channels,S(N>0&&N<=4,"invalid number of channels"),A=!0)),C.width=ke|0,C.height=Lo|0,C.channels=N|0;var G=!1;if("format"in ct){var K=ct.format;S(T.webgl_depth_texture||!(K==="depth"||K==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),S.parameter(K,Pt,"invalid texture format");var Q=C.internalformat=Pt[K];C.format=oe[Q],K in ie&&("type"in ct||(C.type=ie[K])),K in ee&&(C.compressed=!0),G=!0}!A&&G?C.channels=Pr[C.format]:A&&!G?C.channels!==Bf[C.format]&&(C.format=C.internalformat=Bf[C.channels]):G&&A&&S(C.channels===Pr[C.format],"number of channels inconsistent with specified format")}}function fo(C){w.pixelStorei(v4,C.flipY),w.pixelStorei(m4,C.premultiplyAlpha),w.pixelStorei(g4,C.colorSpace),w.pixelStorei(p4,C.unpackAlignment)}function ce(){Lt.call(this),this.xOffset=0,this.yOffset=0,this.data=null,this.needsFree=!1,this.element=null,this.needsCopy=!1}function Yt(C,ct){var nt=null;if(xu(ct)?nt=ct:ct&&(S.type(ct,"object","invalid pixel data type"),We(C,ct),"x"in ct&&(C.xOffset=ct.x|0),"y"in ct&&(C.yOffset=ct.y|0),xu(ct.data)&&(nt=ct.data)),S(!C.compressed||nt instanceof Uint8Array,"compressed texture data must be stored in a uint8array"),ct.copy){S(!nt,"can not specify copy and data field for the same texture");var ke=_t.viewportWidth,Lo=_t.viewportHeight;C.width=C.width||ke-C.xOffset,C.height=C.height||Lo-C.yOffset,C.needsCopy=!0,S(C.xOffset>=0&&C.xOffset<ke&&C.yOffset>=0&&C.yOffset<Lo&&C.width>0&&C.width<=ke&&C.height>0&&C.height<=Lo,"copy texture read out of bounds")}else if(!nt)C.width=C.width||1,C.height=C.height||1,C.channels=C.channels||4;else if(t(nt))C.channels=C.channels||4,C.data=nt,!("type"in ct)&&C.type===Bi&&(C.type=o2(nt));else if(Qv(nt))C.channels=C.channels||4,k4(C,nt),C.alignment=1,C.needsFree=!0;else if(ta(nt)){var N=nt.data;!Array.isArray(N)&&C.type===Bi&&(C.type=o2(N));var A=nt.shape,G=nt.stride,K,Q,U,H,V,O;A.length===3?(U=A[2],O=G[2]):(S(A.length===2,"invalid ndarray pixel data, must be 2 or 3D"),U=1,O=1),K=A[0],Q=A[1],H=G[0],V=G[1],C.alignment=1,C.width=K,C.height=Q,C.channels=U,C.format=C.internalformat=Bf[U],C.needsFree=!0,S4(C,N,H,V,O,nt.offset)}else if(t2(nt)||e2(nt)||b4(nt))t2(nt)||e2(nt)?C.element=nt:C.element=nt.canvas,C.width=C.element.width,C.height=C.element.height,C.channels=4;else if(w4(nt))C.element=nt,C.width=nt.width,C.height=nt.height,C.channels=4;else if(_4(nt))C.element=nt,C.width=nt.naturalWidth,C.height=nt.naturalHeight,C.channels=4;else if(M4(nt))C.element=nt,C.width=nt.videoWidth,C.height=nt.videoHeight,C.channels=4;else if(Jv(nt)){var F=C.width||nt[0].length,L=C.height||nt.length,X=C.channels;N0(nt[0][0])?X=X||nt[0][0].length:X=X||1;for(var J=Pf.shape(nt),bt=1,Mt=0;Mt<J.length;++Mt)bt*=J[Mt];var vt=n2(C,bt);Pf.flatten(nt,J,"",vt),r2(C,vt),C.alignment=1,C.width=F,C.height=L,C.channels=X,C.format=C.internalformat=Bf[X],C.needsFree=!0}C.type===hl?S(q.extensions.indexOf("oes_texture_float")>=0,"oes_texture_float extension not enabled"):C.type===Ui&&S(q.extensions.indexOf("oes_texture_half_float")>=0,"oes_texture_half_float extension not enabled")}function Et(C,ct,nt){var ke=C.element,Lo=C.data,N=C.internalformat,A=C.format,G=C.type,K=C.width,Q=C.height;fo(C),ke?w.texImage2D(ct,nt,A,A,G,ke):C.compressed?w.compressedTexImage2D(ct,nt,N,K,Q,0,Lo):C.needsCopy?(st(),w.copyTexImage2D(ct,nt,A,C.xOffset,C.yOffset,K,Q,0)):w.texImage2D(ct,nt,A,K,Q,0,A,G,Lo||null)}function eo(C,ct,nt,ke,Lo){var N=C.element,A=C.data,G=C.internalformat,K=C.format,Q=C.type,U=C.width,H=C.height;fo(C),N?w.texSubImage2D(ct,Lo,nt,ke,K,Q,N):C.compressed?w.compressedTexSubImage2D(ct,Lo,nt,ke,G,U,H,A):C.needsCopy?(st(),w.copyTexSubImage2D(ct,Lo,nt,ke,C.xOffset,C.yOffset,U,H)):w.texSubImage2D(ct,Lo,nt,ke,U,H,K,Q,A)}var ko=[];function Ne(){return ko.pop()||new ce}function To(C){C.needsFree&&W.freeType(C.data),ce.call(C),ko.push(C)}function ho(){Lt.call(this),this.genMipmaps=!1,this.mipmapHint=Uf,this.mipmask=0,this.images=Array(16)}function Eo(C,ct,nt){var ke=C.images[0]=Ne();C.mipmask=1,ke.width=C.width=ct,ke.height=C.height=nt,ke.channels=C.channels=4}function Bo(C,ct){var nt=null;if(xu(ct))nt=C.images[0]=Ne(),ne(nt,C),Yt(nt,ct),C.mipmask=1;else if(We(C,ct),Array.isArray(ct.mipmap))for(var ke=ct.mipmap,Lo=0;Lo<ke.length;++Lo)nt=C.images[Lo]=Ne(),ne(nt,C),nt.width>>=Lo,nt.height>>=Lo,Yt(nt,ke[Lo]),C.mipmask|=1<<Lo;else nt=C.images[0]=Ne(),ne(nt,C),Yt(nt,ct),C.mipmask=1;ne(C,C.images[0]),C.compressed&&(C.internalformat===cu||C.internalformat===lu||C.internalformat===fu||C.internalformat===hu)&&S(C.width%4===0&&C.height%4===0,"for compressed texture formats, mipmap level 0 must have width and height that are a multiple of 4")}function q0(C,ct){for(var nt=C.images,ke=0;ke<nt.length;++ke){if(!nt[ke])return;Et(nt[ke],ct,ke)}}var en=[];function $o(){var C=en.pop()||new ho;Lt.call(C),C.mipmask=0;for(var ct=0;ct<16;++ct)C.images[ct]=null;return C}function W0(C){for(var ct=C.images,nt=0;nt<ct.length;++nt)ct[nt]&&To(ct[nt]),ct[nt]=null;en.push(C)}function h0(){this.minFilter=vu,this.magFilter=vu,this.wrapS=pu,this.wrapT=pu,this.anisotropic=1,this.genMipmaps=!1,this.mipmapHint=Uf}function D0(C,ct){if("min"in ct){var nt=ct.min;S.parameter(nt,Ht),C.minFilter=Ht[nt],x4.indexOf(C.minFilter)>=0&&!("faces"in ct)&&(C.genMipmaps=!0)}if("mag"in ct){var ke=ct.mag;S.parameter(ke,Wt),C.magFilter=Wt[ke]}var Lo=C.wrapS,N=C.wrapT;if("wrap"in ct){var A=ct.wrap;typeof A=="string"?(S.parameter(A,Gt),Lo=N=Gt[A]):Array.isArray(A)&&(S.parameter(A[0],Gt),S.parameter(A[1],Gt),Lo=Gt[A[0]],N=Gt[A[1]])}else{if("wrapS"in ct){var G=ct.wrapS;S.parameter(G,Gt),Lo=Gt[G]}if("wrapT"in ct){var K=ct.wrapT;S.parameter(K,Gt),N=Gt[K]}}if(C.wrapS=Lo,C.wrapT=N,"anisotropic"in ct){var Q=ct.anisotropic;S(typeof Q=="number"&&Q>=1&&Q<=q.maxAnisotropic,"aniso samples must be between 1 and "),C.anisotropic=ct.anisotropic}if("mipmap"in ct){var U=!1;switch(typeof ct.mipmap){case"string":S.parameter(ct.mipmap,$t,"invalid mipmap hint"),C.mipmapHint=$t[ct.mipmap],C.genMipmaps=!0,U=!0;break;case"boolean":U=C.genMipmaps=ct.mipmap;break;case"object":S(Array.isArray(ct.mipmap),"invalid mipmap type"),C.genMipmaps=!1,U=!0;break;default:S.raise("invalid mipmap type")}U&&!("min"in ct)&&(C.minFilter=mu)}}function V0(C,ct){w.texParameteri(ct,c4,C.minFilter),w.texParameteri(ct,i4,C.magFilter),w.texParameteri(ct,n4,C.wrapS),w.texParameteri(ct,r4,C.wrapT),T.ext_texture_filter_anisotropic&&w.texParameteri(ct,d4,C.anisotropic),C.genMipmaps&&(w.hint(f4,C.mipmapHint),w.generateMipmap(ct))}var X0=0,dn={},_n=q.maxTextureUnits,O0=Array(_n).map(function(){return null});function So(C){Lt.call(this),this.mipmask=0,this.internalformat=Bs,this.id=X0++,this.refCount=1,this.target=C,this.texture=w.createTexture(),this.unit=-1,this.bindCount=0,this.texInfo=new h0,dt.profile&&(this.stats={size:0})}function Mn(C){w.activeTexture(ul),w.bindTexture(C.target,C.texture)}function Yo(){var C=O0[0];C?w.bindTexture(C.target,C.texture):w.bindTexture(xa,null)}function Ke(C){var ct=C.texture;S(ct,"must not double destroy texture");var nt=C.unit,ke=C.target;nt>=0&&(w.activeTexture(ul+nt),w.bindTexture(ke,null),O0[nt]=null),w.deleteTexture(ct),C.texture=null,C.params=null,C.pixels=null,C.refCount=0,delete dn[C.id],rt.textureCount--}e(So.prototype,{bind:function(){var C=this;C.bindCount+=1;var ct=C.unit;if(ct<0){for(var nt=0;nt<_n;++nt){var ke=O0[nt];if(ke){if(ke.bindCount>0)continue;ke.unit=-1}O0[nt]=C,ct=nt;break}ct>=_n&&S.raise("insufficient number of texture units"),dt.profile&&rt.maxTextureUnits<ct+1&&(rt.maxTextureUnits=ct+1),C.unit=ct,w.activeTexture(ul+ct),w.bindTexture(C.target,C.texture)}return ct},unbind:function(){this.bindCount-=1},decRef:function(){--this.refCount<=0&&Ke(this)}});function Ro(C,ct){var nt=new So(xa);dn[nt.id]=nt,rt.textureCount++;function ke(A,G){var K=nt.texInfo;h0.call(K);var Q=$o();return typeof A=="number"?typeof G=="number"?Eo(Q,A|0,G|0):Eo(Q,A|0,A|0):A?(S.type(A,"object","invalid arguments to regl.texture"),D0(K,A),Bo(Q,A)):Eo(Q,1,1),K.genMipmaps&&(Q.mipmask=(Q.width<<1)-1),nt.mipmask=Q.mipmask,ne(nt,Q),S.texture2D(K,Q,q),nt.internalformat=Q.internalformat,ke.width=Q.width,ke.height=Q.height,Mn(nt),q0(Q,xa),V0(K,xa),Yo(),W0(Q),dt.profile&&(nt.stats.size=jf(nt.internalformat,nt.type,Q.width,Q.height,K.genMipmaps,!1)),ke.format=jt[nt.internalformat],ke.type=me[nt.type],ke.mag=At[K.magFilter],ke.min=be[K.minFilter],ke.wrapS=Ot[K.wrapS],ke.wrapT=Ot[K.wrapT],ke}function Lo(A,G,K,Q){S(!!A,"must specify image data");var U=G|0,H=K|0,V=Q|0,O=Ne();return ne(O,nt),O.width=0,O.height=0,Yt(O,A),O.width=O.width||(nt.width>>V)-U,O.height=O.height||(nt.height>>V)-H,S(nt.type===O.type&&nt.format===O.format&&nt.internalformat===O.internalformat,"incompatible format for texture.subimage"),S(U>=0&&H>=0&&U+O.width<=nt.width&&H+O.height<=nt.height,"texture.subimage write out of bounds"),S(nt.mipmask&1<<V,"missing mipmap data"),S(O.data||O.element||O.needsCopy,"missing image data"),Mn(nt),eo(O,xa,U,H,V),Yo(),To(O),ke}function N(A,G){var K=A|0,Q=G|0||K;if(K===nt.width&&Q===nt.height)return ke;ke.width=nt.width=K,ke.height=nt.height=Q,Mn(nt);for(var U=0;nt.mipmask>>U;++U){var H=K>>U,V=Q>>U;if(!H||!V)break;w.texImage2D(xa,U,nt.format,H,V,0,nt.format,nt.type,null)}return Yo(),dt.profile&&(nt.stats.size=jf(nt.internalformat,nt.type,K,Q,!1,!1)),ke}return ke(C,ct),ke.subimage=Lo,ke.resize=N,ke._reglType="texture2d",ke._texture=nt,dt.profile&&(ke.stats=nt.stats),ke.destroy=function(){nt.decRef()},ke}function Do(C,ct,nt,ke,Lo,N){var A=new So(ou);dn[A.id]=A,rt.cubeCount++;var G=new Array(6);function K(H,V,O,F,L,X){var J,bt=A.texInfo;for(h0.call(bt),J=0;J<6;++J)G[J]=$o();if(typeof H=="number"||!H){var Mt=H|0||1;for(J=0;J<6;++J)Eo(G[J],Mt,Mt)}else if(typeof H=="object")if(V)Bo(G[0],H),Bo(G[1],V),Bo(G[2],O),Bo(G[3],F),Bo(G[4],L),Bo(G[5],X);else if(D0(bt,H),We(A,H),"faces"in H){var vt=H.faces;for(S(Array.isArray(vt)&&vt.length===6,"cube faces must be a length 6 array"),J=0;J<6;++J)S(typeof vt[J]=="object"&&!!vt[J],"invalid input for cube map face"),ne(G[J],A),Bo(G[J],vt[J])}else for(J=0;J<6;++J)Bo(G[J],H);else S.raise("invalid arguments to cube map");for(ne(A,G[0]),q.npotTextureCube||S(Ov(A.width)&&Ov(A.height),"your browser does not support non power or two texture dimensions"),bt.genMipmaps?A.mipmask=(G[0].width<<1)-1:A.mipmask=G[0].mipmask,S.textureCube(A,bt,G,q),A.internalformat=G[0].internalformat,K.width=G[0].width,K.height=G[0].height,Mn(A),J=0;J<6;++J)q0(G[J],Df+J);for(V0(bt,ou),Yo(),dt.profile&&(A.stats.size=jf(A.internalformat,A.type,K.width,K.height,bt.genMipmaps,!0)),K.format=jt[A.internalformat],K.type=me[A.type],K.mag=At[bt.magFilter],K.min=be[bt.minFilter],K.wrapS=Ot[bt.wrapS],K.wrapT=Ot[bt.wrapT],J=0;J<6;++J)W0(G[J]);return K}function Q(H,V,O,F,L){S(!!V,"must specify image data"),S(typeof H=="number"&&H===(H|0)&&H>=0&&H<6,"invalid face");var X=O|0,J=F|0,bt=L|0,Mt=Ne();return ne(Mt,A),Mt.width=0,Mt.height=0,Yt(Mt,V),Mt.width=Mt.width||(A.width>>bt)-X,Mt.height=Mt.height||(A.height>>bt)-J,S(A.type===Mt.type&&A.format===Mt.format&&A.internalformat===Mt.internalformat,"incompatible format for texture.subimage"),S(X>=0&&J>=0&&X+Mt.width<=A.width&&J+Mt.height<=A.height,"texture.subimage write out of bounds"),S(A.mipmask&1<<bt,"missing mipmap data"),S(Mt.data||Mt.element||Mt.needsCopy,"missing image data"),Mn(A),eo(Mt,Df+H,X,J,bt),Yo(),To(Mt),K}function U(H){var V=H|0;if(V!==A.width){K.width=A.width=V,K.height=A.height=V,Mn(A);for(var O=0;O<6;++O)for(var F=0;A.mipmask>>F;++F)w.texImage2D(Df+O,F,A.format,V>>F,V>>F,0,A.format,A.type,null);return Yo(),dt.profile&&(A.stats.size=jf(A.internalformat,A.type,K.width,K.height,!1,!0)),K}}return K(C,ct,nt,ke,Lo,N),K.subimage=Q,K.resize=U,K._reglType="textureCube",K._texture=A,dt.profile&&(K.stats=A.stats),K.destroy=function(){A.decRef()},K}function R0(){for(var C=0;C<_n;++C)w.activeTexture(ul+C),w.bindTexture(xa,null),O0[C]=null;wr(dn).forEach(Ke),rt.cubeCount=0,rt.textureCount=0}dt.profile&&(rt.getTotalTextureSize=function(){var C=0;return Object.keys(dn).forEach(function(ct){C+=dn[ct].stats.size}),C});function ba(){for(var C=0;C<_n;++C){var ct=O0[C];ct&&(ct.bindCount=0,ct.unit=-1,O0[C]=null)}wr(dn).forEach(function(nt){nt.texture=w.createTexture(),w.bindTexture(nt.target,nt.texture);for(var ke=0;ke<32;++ke)if(nt.mipmask&1<<ke)if(nt.target===xa)w.texImage2D(xa,ke,nt.internalformat,nt.width>>ke,nt.height>>ke,0,nt.internalformat,nt.type,null);else for(var Lo=0;Lo<6;++Lo)w.texImage2D(Df+Lo,ke,nt.internalformat,nt.width>>ke,nt.height>>ke,0,nt.internalformat,nt.type,null);V0(nt.texInfo,nt.target)})}function Qs(){for(var C=0;C<_n;++C){var ct=O0[C];ct&&(ct.bindCount=0,ct.unit=-1,O0[C]=null),w.activeTexture(ul+C),w.bindTexture(xa,null),w.bindTexture(ou,null)}}return{create2D:Ro,createCube:Do,clear:R0,getTexture:function(C){return null},restore:ba,refresh:Qs}}var ts=36161,Wf=32854,a2=32855,s2=36194,i2=33189,c2=36168,l2=34041,f2=35907,h2=34836,u2=34842,d2=34843,ea=[];ea[Wf]=2,ea[a2]=2,ea[s2]=2,ea[i2]=2,ea[c2]=1,ea[l2]=4,ea[f2]=4,ea[h2]=16,ea[u2]=8,ea[d2]=6;function p2(w,T,q){return ea[w]*T*q}var E4=function(w,T,q,st,_t){var rt={rgba4:Wf,rgb565:s2,"rgb5 a1":a2,depth:i2,stencil:c2,"depth stencil":l2};T.ext_srgb&&(rt.srgba=f2),T.ext_color_buffer_half_float&&(rt.rgba16f=u2,rt.rgb16f=d2),T.webgl_color_buffer_float&&(rt.rgba32f=h2);var dt=[];Object.keys(rt).forEach(function(Pt){var ee=rt[Pt];dt[ee]=Pt});var $t=0,Gt={};function Wt(Pt){this.id=$t++,this.refCount=1,this.renderbuffer=Pt,this.format=Wf,this.width=0,this.height=0,_t.profile&&(this.stats={size:0})}Wt.prototype.decRef=function(){--this.refCount<=0&&Ht(this)};function Ht(Pt){var ee=Pt.renderbuffer;S(ee,"must not double destroy renderbuffer"),w.bindRenderbuffer(ts,null),w.deleteRenderbuffer(ee),Pt.renderbuffer=null,Pt.refCount=0,delete Gt[Pt.id],st.renderbufferCount--}function Jt(Pt,ee){var Z=new Wt(w.createRenderbuffer());Gt[Z.id]=Z,st.renderbufferCount++;function pt(me,At){var be=0,Ot=0,oe=Wf;if(typeof me=="object"&&me){var Lt=me;if("shape"in Lt){var ne=Lt.shape;S(Array.isArray(ne)&&ne.length>=2,"invalid renderbuffer shape"),be=ne[0]|0,Ot=ne[1]|0}else"radius"in Lt&&(be=Ot=Lt.radius|0),"width"in Lt&&(be=Lt.width|0),"height"in Lt&&(Ot=Lt.height|0);"format"in Lt&&(S.parameter(Lt.format,rt,"invalid renderbuffer format"),oe=rt[Lt.format])}else typeof me=="number"?(be=me|0,typeof At=="number"?Ot=At|0:Ot=be):me?S.raise("invalid arguments to renderbuffer constructor"):be=Ot=1;if(S(be>0&&Ot>0&&be<=q.maxRenderbufferSize&&Ot<=q.maxRenderbufferSize,"invalid renderbuffer size"),!(be===Z.width&&Ot===Z.height&&oe===Z.format))return pt.width=Z.width=be,pt.height=Z.height=Ot,Z.format=oe,w.bindRenderbuffer(ts,Z.renderbuffer),w.renderbufferStorage(ts,oe,be,Ot),S(w.getError()===0,"invalid render buffer format"),_t.profile&&(Z.stats.size=p2(Z.format,Z.width,Z.height)),pt.format=dt[Z.format],pt}function jt(me,At){var be=me|0,Ot=At|0||be;return be===Z.width&&Ot===Z.height||(S(be>0&&Ot>0&&be<=q.maxRenderbufferSize&&Ot<=q.maxRenderbufferSize,"invalid renderbuffer size"),pt.width=Z.width=be,pt.height=Z.height=Ot,w.bindRenderbuffer(ts,Z.renderbuffer),w.renderbufferStorage(ts,Z.format,be,Ot),S(w.getError()===0,"invalid render buffer format"),_t.profile&&(Z.stats.size=p2(Z.format,Z.width,Z.height))),pt}return pt(Pt,ee),pt.resize=jt,pt._reglType="renderbuffer",pt._renderbuffer=Z,_t.profile&&(pt.stats=Z.stats),pt.destroy=function(){Z.decRef()},pt}_t.profile&&(st.getTotalRenderbufferSize=function(){var Pt=0;return Object.keys(Gt).forEach(function(ee){Pt+=Gt[ee].stats.size}),Pt});function ie(){wr(Gt).forEach(function(Pt){Pt.renderbuffer=w.createRenderbuffer(),w.bindRenderbuffer(ts,Pt.renderbuffer),w.renderbufferStorage(ts,Pt.format,Pt.width,Pt.height)}),w.bindRenderbuffer(ts,null)}return{create:Jt,clear:function(){wr(Gt).forEach(Ht)},restore:ie}},Oa=36160,yu=36161,Ws=3553,Vf=34069,v2=36064,m2=36096,g2=36128,x2=33306,y2=36053,A4=36054,T4=36055,L4=36057,N4=36061,O4=36193,R4=5121,C4=5126,b2=6407,w2=6408,$4=6402,P4=[b2,w2],bu=[];bu[w2]=4,bu[b2]=3;var Xf=[];Xf[R4]=1,Xf[C4]=4,Xf[O4]=2;var I4=32854,q4=32855,D4=36194,F4=33189,G4=36168,_2=34041,H4=35907,U4=34836,B4=34842,j4=34843,W4=[I4,q4,D4,H4,B4,j4,U4],Vi={};Vi[y2]="complete",Vi[A4]="incomplete attachment",Vi[L4]="incomplete dimensions",Vi[T4]="incomplete, missing attachment",Vi[N4]="unsupported";function V4(w,T,q,st,_t,rt){var dt={cur:null,next:null,dirty:!1,setFBO:null},$t=["rgba"],Gt=["rgba4","rgb565","rgb5 a1"];T.ext_srgb&&Gt.push("srgba"),T.ext_color_buffer_half_float&&Gt.push("rgba16f","rgb16f"),T.webgl_color_buffer_float&&Gt.push("rgba32f");var Wt=["uint8"];T.oes_texture_half_float&&Wt.push("half float","float16"),T.oes_texture_float&&Wt.push("float","float32");function Ht(ce,Yt,Et){this.target=ce,this.texture=Yt,this.renderbuffer=Et;var eo=0,ko=0;Yt?(eo=Yt.width,ko=Yt.height):Et&&(eo=Et.width,ko=Et.height),this.width=eo,this.height=ko}function Jt(ce){ce&&(ce.texture&&ce.texture._texture.decRef(),ce.renderbuffer&&ce.renderbuffer._renderbuffer.decRef())}function ie(ce,Yt,Et){if(ce)if(ce.texture){var eo=ce.texture._texture,ko=Math.max(1,eo.width),Ne=Math.max(1,eo.height);S(ko===Yt&&Ne===Et,"inconsistent width/height for supplied texture"),eo.refCount+=1}else{var To=ce.renderbuffer._renderbuffer;S(To.width===Yt&&To.height===Et,"inconsistent width/height for renderbuffer"),To.refCount+=1}}function Pt(ce,Yt){Yt&&(Yt.texture?w.framebufferTexture2D(Oa,ce,Yt.target,Yt.texture._texture.texture,0):w.framebufferRenderbuffer(Oa,ce,yu,Yt.renderbuffer._renderbuffer.renderbuffer))}function ee(ce){var Yt=Ws,Et=null,eo=null,ko=ce;typeof ce=="object"&&(ko=ce.data,"target"in ce&&(Yt=ce.target|0)),S.type(ko,"function","invalid attachment data");var Ne=ko._reglType;return Ne==="texture2d"?(Et=ko,S(Yt===Ws)):Ne==="textureCube"?(Et=ko,S(Yt>=Vf&&Yt<Vf+6,"invalid cube map target")):Ne==="renderbuffer"?(eo=ko,Yt=yu):S.raise("invalid regl object for attachment"),new Ht(Yt,Et,eo)}function Z(ce,Yt,Et,eo,ko){if(Et){var Ne=st.create2D({width:ce,height:Yt,format:eo,type:ko});return Ne._texture.refCount=0,new Ht(Ws,Ne,null)}else{var To=_t.create({width:ce,height:Yt,format:eo});return To._renderbuffer.refCount=0,new Ht(yu,null,To)}}function pt(ce){return ce&&(ce.texture||ce.renderbuffer)}function jt(ce,Yt,Et){ce&&(ce.texture?ce.texture.resize(Yt,Et):ce.renderbuffer&&ce.renderbuffer.resize(Yt,Et),ce.width=Yt,ce.height=Et)}var me=0,At={};function be(){this.id=me++,At[this.id]=this,this.framebuffer=w.createFramebuffer(),this.width=0,this.height=0,this.colorAttachments=[],this.depthAttachment=null,this.stencilAttachment=null,this.depthStencilAttachment=null}function Ot(ce){ce.colorAttachments.forEach(Jt),Jt(ce.depthAttachment),Jt(ce.stencilAttachment),Jt(ce.depthStencilAttachment)}function oe(ce){var Yt=ce.framebuffer;S(Yt,"must not double destroy framebuffer"),w.deleteFramebuffer(Yt),ce.framebuffer=null,rt.framebufferCount--,delete At[ce.id]}function Lt(ce){var Yt;w.bindFramebuffer(Oa,ce.framebuffer);var Et=ce.colorAttachments;for(Yt=0;Yt<Et.length;++Yt)Pt(v2+Yt,Et[Yt]);for(Yt=Et.length;Yt<q.maxColorAttachments;++Yt)w.framebufferTexture2D(Oa,v2+Yt,Ws,null,0);w.framebufferTexture2D(Oa,x2,Ws,null,0),w.framebufferTexture2D(Oa,m2,Ws,null,0),w.framebufferTexture2D(Oa,g2,Ws,null,0),Pt(m2,ce.depthAttachment),Pt(g2,ce.stencilAttachment),Pt(x2,ce.depthStencilAttachment);var eo=w.checkFramebufferStatus(Oa);!w.isContextLost()&&eo!==y2&&S.raise("framebuffer configuration not supported, status = "+Vi[eo]),w.bindFramebuffer(Oa,dt.next?dt.next.framebuffer:null),dt.cur=dt.next,w.getError()}function ne(ce,Yt){var Et=new be;rt.framebufferCount++;function eo(Ne,To){var ho;S(dt.next!==Et,"can not update framebuffer which is currently in use");var Eo=0,Bo=0,q0=!0,en=!0,$o=null,W0=!0,h0="rgba",D0="uint8",V0=1,X0=null,dn=null,_n=null,O0=!1;if(typeof Ne=="number")Eo=Ne|0,Bo=To|0||Eo;else if(!Ne)Eo=Bo=1;else{S.type(Ne,"object","invalid arguments for framebuffer");var So=Ne;if("shape"in So){var Mn=So.shape;S(Array.isArray(Mn)&&Mn.length>=2,"invalid shape for framebuffer"),Eo=Mn[0],Bo=Mn[1]}else"radius"in So&&(Eo=Bo=So.radius),"width"in So&&(Eo=So.width),"height"in So&&(Bo=So.height);("color"in So||"colors"in So)&&($o=So.color||So.colors,Array.isArray($o)&&S($o.length===1||T.webgl_draw_buffers,"multiple render targets not supported")),$o||("colorCount"in So&&(V0=So.colorCount|0,S(V0>0,"invalid color buffer count")),"colorTexture"in So&&(W0=!!So.colorTexture,h0="rgba4"),"colorType"in So&&(D0=So.colorType,W0?(S(T.oes_texture_float||!(D0==="float"||D0==="float32"),"you must enable OES_texture_float in order to use floating point framebuffer objects"),S(T.oes_texture_half_float||!(D0==="half float"||D0==="float16"),"you must enable OES_texture_half_float in order to use 16-bit floating point framebuffer objects")):D0==="half float"||D0==="float16"?(S(T.ext_color_buffer_half_float,"you must enable EXT_color_buffer_half_float to use 16-bit render buffers"),h0="rgba16f"):(D0==="float"||D0==="float32")&&(S(T.webgl_color_buffer_float,"you must enable WEBGL_color_buffer_float in order to use 32-bit floating point renderbuffers"),h0="rgba32f"),S.oneOf(D0,Wt,"invalid color type")),"colorFormat"in So&&(h0=So.colorFormat,$t.indexOf(h0)>=0?W0=!0:Gt.indexOf(h0)>=0?W0=!1:W0?S.oneOf(So.colorFormat,$t,"invalid color format for texture"):S.oneOf(So.colorFormat,Gt,"invalid color format for renderbuffer"))),("depthTexture"in So||"depthStencilTexture"in So)&&(O0=!!(So.depthTexture||So.depthStencilTexture),S(!O0||T.webgl_depth_texture,"webgl_depth_texture extension not supported")),"depth"in So&&(typeof So.depth=="boolean"?q0=So.depth:(X0=So.depth,en=!1)),"stencil"in So&&(typeof So.stencil=="boolean"?en=So.stencil:(dn=So.stencil,q0=!1)),"depthStencil"in So&&(typeof So.depthStencil=="boolean"?q0=en=So.depthStencil:(_n=So.depthStencil,q0=!1,en=!1))}var Yo=null,Ke=null,Ro=null,Do=null;if(Array.isArray($o))Yo=$o.map(ee);else if($o)Yo=[ee($o)];else for(Yo=new Array(V0),ho=0;ho<V0;++ho)Yo[ho]=Z(Eo,Bo,W0,h0,D0);S(T.webgl_draw_buffers||Yo.length<=1,"you must enable the WEBGL_draw_buffers extension in order to use multiple color buffers."),S(Yo.length<=q.maxColorAttachments,"too many color attachments, not supported"),Eo=Eo||Yo[0].width,Bo=Bo||Yo[0].height,X0?Ke=ee(X0):q0&&!en&&(Ke=Z(Eo,Bo,O0,"depth","uint32")),dn?Ro=ee(dn):en&&!q0&&(Ro=Z(Eo,Bo,!1,"stencil","uint8")),_n?Do=ee(_n):!X0&&!dn&&en&&q0&&(Do=Z(Eo,Bo,O0,"depth stencil","depth stencil")),S(!!X0+!!dn+!!_n<=1,"invalid framebuffer configuration, can specify exactly one depth/stencil attachment");var R0=null;for(ho=0;ho<Yo.length;++ho)if(ie(Yo[ho],Eo,Bo),S(!Yo[ho]||Yo[ho].texture&&P4.indexOf(Yo[ho].texture._texture.format)>=0||Yo[ho].renderbuffer&&W4.indexOf(Yo[ho].renderbuffer._renderbuffer.format)>=0,"framebuffer color attachment "+ho+" is invalid"),Yo[ho]&&Yo[ho].texture){var ba=bu[Yo[ho].texture._texture.format]*Xf[Yo[ho].texture._texture.type];R0===null?R0=ba:S(R0===ba,"all color attachments much have the same number of bits per pixel.")}return ie(Ke,Eo,Bo),S(!Ke||Ke.texture&&Ke.texture._texture.format===$4||Ke.renderbuffer&&Ke.renderbuffer._renderbuffer.format===F4,"invalid depth attachment for framebuffer object"),ie(Ro,Eo,Bo),S(!Ro||Ro.renderbuffer&&Ro.renderbuffer._renderbuffer.format===G4,"invalid stencil attachment for framebuffer object"),ie(Do,Eo,Bo),S(!Do||Do.texture&&Do.texture._texture.format===_2||Do.renderbuffer&&Do.renderbuffer._renderbuffer.format===_2,"invalid depth-stencil attachment for framebuffer object"),Ot(Et),Et.width=Eo,Et.height=Bo,Et.colorAttachments=Yo,Et.depthAttachment=Ke,Et.stencilAttachment=Ro,Et.depthStencilAttachment=Do,eo.color=Yo.map(pt),eo.depth=pt(Ke),eo.stencil=pt(Ro),eo.depthStencil=pt(Do),eo.width=Et.width,eo.height=Et.height,Lt(Et),eo}function ko(Ne,To){S(dt.next!==Et,"can not resize a framebuffer which is currently in use");var ho=Math.max(Ne|0,1),Eo=Math.max(To|0||ho,1);if(ho===Et.width&&Eo===Et.height)return eo;for(var Bo=Et.colorAttachments,q0=0;q0<Bo.length;++q0)jt(Bo[q0],ho,Eo);return jt(Et.depthAttachment,ho,Eo),jt(Et.stencilAttachment,ho,Eo),jt(Et.depthStencilAttachment,ho,Eo),Et.width=eo.width=ho,Et.height=eo.height=Eo,Lt(Et),eo}return eo(ce,Yt),e(eo,{resize:ko,_reglType:"framebuffer",_framebuffer:Et,destroy:function(){oe(Et),Ot(Et)},use:function(Ne){dt.setFBO({framebuffer:eo},Ne)}})}function We(ce){var Yt=Array(6);function Et(ko){var Ne;S(Yt.indexOf(dt.next)<0,"can not update framebuffer which is currently in use");var To={color:null},ho=0,Eo=null,Bo="rgba",q0="uint8",en=1;if(typeof ko=="number")ho=ko|0;else if(!ko)ho=1;else{S.type(ko,"object","invalid arguments for framebuffer");var $o=ko;if("shape"in $o){var W0=$o.shape;S(Array.isArray(W0)&&W0.length>=2,"invalid shape for framebuffer"),S(W0[0]===W0[1],"cube framebuffer must be square"),ho=W0[0]}else"radius"in $o&&(ho=$o.radius|0),"width"in $o?(ho=$o.width|0,"height"in $o&&S($o.height===ho,"must be square")):"height"in $o&&(ho=$o.height|0);("color"in $o||"colors"in $o)&&(Eo=$o.color||$o.colors,Array.isArray(Eo)&&S(Eo.length===1||T.webgl_draw_buffers,"multiple render targets not supported")),Eo||("colorCount"in $o&&(en=$o.colorCount|0,S(en>0,"invalid color buffer count")),"colorType"in $o&&(S.oneOf($o.colorType,Wt,"invalid color type"),q0=$o.colorType),"colorFormat"in $o&&(Bo=$o.colorFormat,S.oneOf($o.colorFormat,$t,"invalid color format for texture"))),"depth"in $o&&(To.depth=$o.depth),"stencil"in $o&&(To.stencil=$o.stencil),"depthStencil"in $o&&(To.depthStencil=$o.depthStencil)}var h0;if(Eo)if(Array.isArray(Eo))for(h0=[],Ne=0;Ne<Eo.length;++Ne)h0[Ne]=Eo[Ne];else h0=[Eo];else{h0=Array(en);var D0={radius:ho,format:Bo,type:q0};for(Ne=0;Ne<en;++Ne)h0[Ne]=st.createCube(D0)}for(To.color=Array(h0.length),Ne=0;Ne<h0.length;++Ne){var V0=h0[Ne];S(typeof V0=="function"&&V0._reglType==="textureCube","invalid cube map"),ho=ho||V0.width,S(V0.width===ho&&V0.height===ho,"invalid cube map shape"),To.color[Ne]={target:Vf,data:h0[Ne]}}for(Ne=0;Ne<6;++Ne){for(var X0=0;X0<h0.length;++X0)To.color[X0].target=Vf+Ne;Ne>0&&(To.depth=Yt[0].depth,To.stencil=Yt[0].stencil,To.depthStencil=Yt[0].depthStencil),Yt[Ne]?Yt[Ne](To):Yt[Ne]=ne(To)}return e(Et,{width:ho,height:ho,color:h0})}function eo(ko){var Ne,To=ko|0;if(S(To>0&&To<=q.maxCubeMapSize,"invalid radius for cube fbo"),To===Et.width)return Et;var ho=Et.color;for(Ne=0;Ne<ho.length;++Ne)ho[Ne].resize(To);for(Ne=0;Ne<6;++Ne)Yt[Ne].resize(To);return Et.width=Et.height=To,Et}return Et(ce),e(Et,{faces:Yt,resize:eo,_reglType:"framebufferCube",destroy:function(){Yt.forEach(function(ko){ko.destroy()})}})}function fo(){dt.cur=null,dt.next=null,dt.dirty=!0,wr(At).forEach(function(ce){ce.framebuffer=w.createFramebuffer(),Lt(ce)})}return e(dt,{getFramebuffer:function(ce){if(typeof ce=="function"&&ce._reglType==="framebuffer"){var Yt=ce._framebuffer;if(Yt instanceof be)return Yt}return null},create:ne,createCube:We,clear:function(){wr(At).forEach(oe)},restore:fo})}var X4=5126,M2=34962;function wu(){this.state=0,this.x=0,this.y=0,this.z=0,this.w=0,this.buffer=null,this.size=0,this.normalized=!1,this.type=X4,this.offset=0,this.stride=0,this.divisor=0}function Y4(w,T,q,st,_t){for(var rt=q.maxAttributes,dt=new Array(rt),$t=0;$t<rt;++$t)dt[$t]=new wu;var Gt=0,Wt={},Ht={Record:wu,scope:{},state:dt,currentVAO:null,targetVAO:null,restore:ie()?At:function(){},createVAO:be,getVAO:ee,destroyBuffer:Jt,setVAO:ie()?Z:pt,clear:ie()?jt:function(){}};function Jt(Ot){for(var oe=0;oe<dt.length;++oe){var Lt=dt[oe];Lt.buffer===Ot&&(w.disableVertexAttribArray(oe),Lt.buffer=null)}}function ie(){return T.oes_vertex_array_object}function Pt(){return T.angle_instanced_arrays}function ee(Ot){return typeof Ot=="function"&&Ot._vao?Ot._vao:null}function Z(Ot){if(Ot!==Ht.currentVAO){var oe=ie();Ot?oe.bindVertexArrayOES(Ot.vao):oe.bindVertexArrayOES(null),Ht.currentVAO=Ot}}function pt(Ot){if(Ot!==Ht.currentVAO){if(Ot)Ot.bindAttrs();else for(var oe=Pt(),Lt=0;Lt<dt.length;++Lt){var ne=dt[Lt];ne.buffer?(w.enableVertexAttribArray(Lt),w.vertexAttribPointer(Lt,ne.size,ne.type,ne.normalized,ne.stride,ne.offfset),oe&&ne.divisor&&oe.vertexAttribDivisorANGLE(Lt,ne.divisor)):(w.disableVertexAttribArray(Lt),w.vertexAttrib4f(Lt,ne.x,ne.y,ne.z,ne.w))}Ht.currentVAO=Ot}}function jt(){wr(Wt).forEach(function(Ot){Ot.destroy()})}function me(){this.id=++Gt,this.attributes=[];var Ot=ie();Ot?this.vao=Ot.createVertexArrayOES():this.vao=null,Wt[this.id]=this,this.buffers=[]}me.prototype.bindAttrs=function(){for(var Ot=Pt(),oe=this.attributes,Lt=0;Lt<oe.length;++Lt){var ne=oe[Lt];ne.buffer?(w.enableVertexAttribArray(Lt),w.bindBuffer(M2,ne.buffer.buffer),w.vertexAttribPointer(Lt,ne.size,ne.type,ne.normalized,ne.stride,ne.offset),Ot&&ne.divisor&&Ot.vertexAttribDivisorANGLE(Lt,ne.divisor)):(w.disableVertexAttribArray(Lt),w.vertexAttrib4f(Lt,ne.x,ne.y,ne.z,ne.w))}for(var We=oe.length;We<rt;++We)w.disableVertexAttribArray(We)},me.prototype.refresh=function(){var Ot=ie();Ot&&(Ot.bindVertexArrayOES(this.vao),this.bindAttrs(),Ht.currentVAO=this)},me.prototype.destroy=function(){if(this.vao){var Ot=ie();this===Ht.currentVAO&&(Ht.currentVAO=null,Ot.bindVertexArrayOES(null)),Ot.deleteVertexArrayOES(this.vao),this.vao=null}Wt[this.id]&&(delete Wt[this.id],st.vaoCount-=1)};function At(){var Ot=ie();Ot&&wr(Wt).forEach(function(oe){oe.refresh()})}function be(Ot){var oe=new me;st.vaoCount+=1;function Lt(ne){S(Array.isArray(ne),"arguments to vertex array constructor must be an array"),S(ne.length<rt,"too many attributes"),S(ne.length>0,"must specify at least one attribute");var We={},fo=oe.attributes;fo.length=ne.length;for(var ce=0;ce<ne.length;++ce){var Yt=ne[ce],Et=fo[ce]=new wu,eo=Yt.data||Yt;if(Array.isArray(eo)||t(eo)||ta(eo)){var ko;oe.buffers[ce]&&(ko=oe.buffers[ce],t(eo)&&ko._buffer.byteLength>=eo.byteLength?ko.subdata(eo):(ko.destroy(),oe.buffers[ce]=null)),oe.buffers[ce]||(ko=oe.buffers[ce]=_t.create(Yt,M2,!1,!0)),Et.buffer=_t.getBuffer(ko),Et.size=Et.buffer.dimension|0,Et.normalized=!1,Et.type=Et.buffer.dtype,Et.offset=0,Et.stride=0,Et.divisor=0,Et.state=1,We[ce]=1}else _t.getBuffer(Yt)?(Et.buffer=_t.getBuffer(Yt),Et.size=Et.buffer.dimension|0,Et.normalized=!1,Et.type=Et.buffer.dtype,Et.offset=0,Et.stride=0,Et.divisor=0,Et.state=1):_t.getBuffer(Yt.buffer)?(Et.buffer=_t.getBuffer(Yt.buffer),Et.size=(+Yt.size||Et.buffer.dimension)|0,Et.normalized=!!Yt.normalized||!1,"type"in Yt?(S.parameter(Yt.type,Hs,"invalid buffer type"),Et.type=Hs[Yt.type]):Et.type=Et.buffer.dtype,Et.offset=(Yt.offset||0)|0,Et.stride=(Yt.stride||0)|0,Et.divisor=(Yt.divisor||0)|0,Et.state=1,S(Et.size>=1&&Et.size<=4,"size must be between 1 and 4"),S(Et.offset>=0,"invalid offset"),S(Et.stride>=0&&Et.stride<=255,"stride must be between 0 and 255"),S(Et.divisor>=0,"divisor must be positive"),S(!Et.divisor||!!T.angle_instanced_arrays,"ANGLE_instanced_arrays must be enabled to use divisor")):"x"in Yt?(S(ce>0,"first attribute must not be a constant"),Et.x=+Yt.x||0,Et.y=+Yt.y||0,Et.z=+Yt.z||0,Et.w=+Yt.w||0,Et.state=2):S(!1,"invalid attribute spec for location "+ce)}for(var Ne=0;Ne<oe.buffers.length;++Ne)!We[Ne]&&oe.buffers[Ne]&&(oe.buffers[Ne].destroy(),oe.buffers[Ne]=null);return oe.refresh(),Lt}return Lt.destroy=function(){for(var ne=0;ne<oe.buffers.length;++ne)oe.buffers[ne]&&oe.buffers[ne].destroy();oe.buffers.length=0,oe.destroy()},Lt._vao=oe,Lt._reglType="vao",Lt(Ot)}return Ht}var k2=35632,K4=35633,Z4=35718,Q4=35721;function J4(w,T,q,st){var _t={},rt={};function dt(Z,pt,jt,me){this.name=Z,this.id=pt,this.location=jt,this.info=me}function $t(Z,pt){for(var jt=0;jt<Z.length;++jt)if(Z[jt].id===pt.id){Z[jt].location=pt.location;return}Z.push(pt)}function Gt(Z,pt,jt){var me=Z===k2?_t:rt,At=me[pt];if(!At){var be=T.str(pt);At=w.createShader(Z),w.shaderSource(At,be),w.compileShader(At),S.shaderError(w,At,be,Z,jt),me[pt]=At}return At}var Wt={},Ht=[],Jt=0;function ie(Z,pt){this.id=Jt++,this.fragId=Z,this.vertId=pt,this.program=null,this.uniforms=[],this.attributes=[],this.refCount=1,st.profile&&(this.stats={uniformsCount:0,attributesCount:0})}function Pt(Z,pt,jt){var me,At,be=Gt(k2,Z.fragId),Ot=Gt(K4,Z.vertId),oe=Z.program=w.createProgram();if(w.attachShader(oe,be),w.attachShader(oe,Ot),jt)for(me=0;me<jt.length;++me){var Lt=jt[me];w.bindAttribLocation(oe,Lt[0],Lt[1])}w.linkProgram(oe),S.linkError(w,oe,T.str(Z.fragId),T.str(Z.vertId),pt);var ne=w.getProgramParameter(oe,Z4);st.profile&&(Z.stats.uniformsCount=ne);var We=Z.uniforms;for(me=0;me<ne;++me)if(At=w.getActiveUniform(oe,me),At)if(At.size>1)for(var fo=0;fo<At.size;++fo){var ce=At.name.replace("[0]","["+fo+"]");$t(We,new dt(ce,T.id(ce),w.getUniformLocation(oe,ce),At))}else $t(We,new dt(At.name,T.id(At.name),w.getUniformLocation(oe,At.name),At));var Yt=w.getProgramParameter(oe,Q4);st.profile&&(Z.stats.attributesCount=Yt);var Et=Z.attributes;for(me=0;me<Yt;++me)At=w.getActiveAttrib(oe,me),At&&$t(Et,new dt(At.name,T.id(At.name),w.getAttribLocation(oe,At.name),At))}st.profile&&(q.getMaxUniformsCount=function(){var Z=0;return Ht.forEach(function(pt){pt.stats.uniformsCount>Z&&(Z=pt.stats.uniformsCount)}),Z},q.getMaxAttributesCount=function(){var Z=0;return Ht.forEach(function(pt){pt.stats.attributesCount>Z&&(Z=pt.stats.attributesCount)}),Z});function ee(){_t={},rt={};for(var Z=0;Z<Ht.length;++Z)Pt(Ht[Z],null,Ht[Z].attributes.map(function(pt){return[pt.location,pt.name]}))}return{clear:function(){var Z=w.deleteShader.bind(w);wr(_t).forEach(Z),_t={},wr(rt).forEach(Z),rt={},Ht.forEach(function(pt){w.deleteProgram(pt.program)}),Ht.length=0,Wt={},q.shaderCount=0},program:function(Z,pt,jt,me){S.command(Z>=0,"missing vertex shader",jt),S.command(pt>=0,"missing fragment shader",jt);var At=Wt[pt];At||(At=Wt[pt]={});var be=At[Z];if(be&&(be.refCount++,!me))return be;var Ot=new ie(pt,Z);return q.shaderCount++,Pt(Ot,jt,me),be||(At[Z]=Ot),Ht.push(Ot),e(Ot,{destroy:function(){if(Ot.refCount--,Ot.refCount<=0){w.deleteProgram(Ot.program);var oe=Ht.indexOf(Ot);Ht.splice(oe,1),q.shaderCount--}At[Ot.vertId].refCount<=0&&(w.deleteShader(rt[Ot.vertId]),delete rt[Ot.vertId],delete Wt[Ot.fragId][Ot.vertId]),Object.keys(Wt[Ot.fragId]).length||(w.deleteShader(_t[Ot.fragId]),delete _t[Ot.fragId],delete Wt[Ot.fragId])}})},restore:ee,shader:Gt,frag:-1,vert:-1}}var t6=6408,dl=5121,e6=3333,Yf=5126;function o6(w,T,q,st,_t,rt,dt){function $t(Ht){var Jt;T.next===null?(S(_t.preserveDrawingBuffer,'you must create a webgl context with "preserveDrawingBuffer":true in order to read pixels from the drawing buffer'),Jt=dl):(S(T.next.colorAttachments[0].texture!==null,"You cannot read from a renderbuffer"),Jt=T.next.colorAttachments[0].texture._texture.type,rt.oes_texture_float?(S(Jt===dl||Jt===Yf,"Reading from a framebuffer is only allowed for the types 'uint8' and 'float'"),Jt===Yf&&S(dt.readFloat,"Reading 'float' values is not permitted in your browser. For a fallback, please see: https://www.npmjs.com/package/glsl-read-float")):S(Jt===dl,"Reading from a framebuffer is only allowed for the type 'uint8'"));var ie=0,Pt=0,ee=st.framebufferWidth,Z=st.framebufferHeight,pt=null;t(Ht)?pt=Ht:Ht&&(S.type(Ht,"object","invalid arguments to regl.read()"),ie=Ht.x|0,Pt=Ht.y|0,S(ie>=0&&ie<st.framebufferWidth,"invalid x offset for regl.read"),S(Pt>=0&&Pt<st.framebufferHeight,"invalid y offset for regl.read"),ee=(Ht.width||st.framebufferWidth-ie)|0,Z=(Ht.height||st.framebufferHeight-Pt)|0,pt=Ht.data||null),pt&&(Jt===dl?S(pt instanceof Uint8Array,"buffer must be 'Uint8Array' when reading from a framebuffer of type 'uint8'"):Jt===Yf&&S(pt instanceof Float32Array,"buffer must be 'Float32Array' when reading from a framebuffer of type 'float'")),S(ee>0&&ee+ie<=st.framebufferWidth,"invalid width for read pixels"),S(Z>0&&Z+Pt<=st.framebufferHeight,"invalid height for read pixels"),q();var jt=ee*Z*4;return pt||(Jt===dl?pt=new Uint8Array(jt):Jt===Yf&&(pt=pt||new Float32Array(jt))),S.isTypedArray(pt,"data buffer for regl.read() must be a typedarray"),S(pt.byteLength>=jt,"data buffer for regl.read() too small"),w.pixelStorei(e6,4),w.readPixels(ie,Pt,ee,Z,t6,Jt,pt),pt}function Gt(Ht){var Jt;return T.setFBO({framebuffer:Ht.framebuffer},function(){Jt=$t(Ht)}),Jt}function Wt(Ht){return!Ht||!("framebuffer"in Ht)?$t(Ht):Gt(Ht)}return Wt}function Xi(w){return Array.prototype.slice.call(w)}function Yi(w){return Xi(w).join("")}function n6(){var w=0,T=[],q=[];function st(Jt){for(var ie=0;ie<q.length;++ie)if(q[ie]===Jt)return T[ie];var Pt="g"+w++;return T.push(Pt),q.push(Jt),Pt}function _t(){var Jt=[];function ie(){Jt.push.apply(Jt,Xi(arguments))}var Pt=[];function ee(){var Z="v"+w++;return Pt.push(Z),arguments.length>0&&(Jt.push(Z,"="),Jt.push.apply(Jt,Xi(arguments)),Jt.push(";")),Z}return e(ie,{def:ee,toString:function(){return Yi([Pt.length>0?"var "+Pt.join(",")+";":"",Yi(Jt)])}})}function rt(){var Jt=_t(),ie=_t(),Pt=Jt.toString,ee=ie.toString;function Z(pt,jt){ie(pt,jt,"=",Jt.def(pt,jt),";")}return e(function(){Jt.apply(Jt,Xi(arguments))},{def:Jt.def,entry:Jt,exit:ie,save:Z,set:function(pt,jt,me){Z(pt,jt),Jt(pt,jt,"=",me,";")},toString:function(){return Pt()+ee()}})}function dt(){var Jt=Yi(arguments),ie=rt(),Pt=rt(),ee=ie.toString,Z=Pt.toString;return e(ie,{then:function(){return ie.apply(ie,Xi(arguments)),this},else:function(){return Pt.apply(Pt,Xi(arguments)),this},toString:function(){var pt=Z();return pt&&(pt="else{"+pt+"}"),Yi(["if(",Jt,"){",ee(),"}",pt])}})}var $t=_t(),Gt={};function Wt(Jt,ie){var Pt=[];function ee(){var At="a"+Pt.length;return Pt.push(At),At}ie=ie||0;for(var Z=0;Z<ie;++Z)ee();var pt=rt(),jt=pt.toString,me=Gt[Jt]=e(pt,{arg:ee,toString:function(){return Yi(["function(",Pt.join(),"){",jt(),"}"])}});return me}function Ht(){var Jt=['"use strict";',$t,"return {"];Object.keys(Gt).forEach(function(ee){Jt.push('"',ee,'":',Gt[ee].toString(),",")}),Jt.push("}");var ie=Yi(Jt).replace(/;/g,`;
`).replace(/}/g,`}
`).replace(/{/g,`{
`),Pt=Function.apply(null,T.concat(ie));return Pt.apply(null,q)}return{global:$t,link:st,block:_t,proc:Wt,scope:rt,cond:dt,compile:Ht}}var Ki="xyzw".split(""),S2=5121,Zi=1,_u=2,Mu=0,ku=1,Su=2,zu=3,Kf=4,z2=5,E2=6,A2="dither",T2="blend.enable",L2="blend.color",Eu="blend.equation",Au="blend.func",N2="depth.enable",O2="depth.func",R2="depth.range",C2="depth.mask",Tu="colorMask",$2="cull.enable",P2="cull.face",Lu="frontFace",Nu="lineWidth",I2="polygonOffset.enable",Ou="polygonOffset.offset",q2="sample.alpha",D2="sample.enable",Ru="sample.coverage",F2="stencil.enable",G2="stencil.mask",Cu="stencil.func",$u="stencil.opFront",pl="stencil.opBack",H2="scissor.enable",Zf="scissor.box",Ra="viewport",vl="profile",Vs="framebuffer",ml="vert",gl="frag",Xs="elements",Ys="primitive",Ks="count",Qf="offset",Jf="instances",xl="vao",Pu="Width",Iu="Height",Qi=Vs+Pu,Ji=Vs+Iu,r6=Ra+Pu,a6=Ra+Iu,U2="drawingBuffer",B2=U2+Pu,j2=U2+Iu,s6=[Au,Eu,Cu,$u,pl,Ru,Ra,Zf,Ou],tc=34962,i6=34963,c6=35632,l6=35633,W2=3553,f6=34067,h6=2884,u6=3042,d6=3024,p6=2960,v6=2929,m6=3089,g6=32823,x6=32926,y6=32928,qu=5126,th=35664,eh=35665,oh=35666,Du=5124,nh=35667,rh=35668,ah=35669,Fu=35670,sh=35671,ih=35672,ch=35673,yl=35674,bl=35675,wl=35676,_l=35678,Ml=35680,V2=4,kl=1028,Zs=1029,X2=2304,Gu=2305,b6=32775,w6=32776,_6=519,es=7680,Y2=0,K2=1,Z2=32774,M6=513,Q2=36160,k6=36064,ya={0:0,1:1,zero:0,one:1,"src color":768,"one minus src color":769,"src alpha":770,"one minus src alpha":771,"dst color":774,"one minus dst color":775,"dst alpha":772,"one minus dst alpha":773,"constant color":32769,"one minus constant color":32770,"constant alpha":32771,"one minus constant alpha":32772,"src alpha saturate":776},J2=["constant color, constant alpha","one minus constant color, constant alpha","constant color, one minus constant alpha","one minus constant color, one minus constant alpha","constant alpha, constant color","constant alpha, one minus constant color","one minus constant alpha, constant color","one minus constant alpha, one minus constant color"],ec={never:512,less:513,"<":513,equal:514,"=":514,"==":514,"===":514,lequal:515,"<=":515,greater:516,">":516,notequal:517,"!=":517,"!==":517,gequal:518,">=":518,always:519},os={0:0,zero:0,keep:7680,replace:7681,increment:7682,decrement:7683,"increment wrap":34055,"decrement wrap":34056,invert:5386},tm={frag:c6,vert:l6},Hu={cw:X2,ccw:Gu};function lh(w){return Array.isArray(w)||t(w)||ta(w)}function em(w){return w.sort(function(T,q){return T===Ra?-1:q===Ra?1:T<q?-1:1})}function jn(w,T,q,st){this.thisDep=w,this.contextDep=T,this.propDep=q,this.append=st}function ns(w){return w&&!(w.thisDep||w.contextDep||w.propDep)}function I0(w){return new jn(!1,!1,!1,w)}function cr(w,T){var q=w.type;if(q===Mu){var st=w.data.length;return new jn(!0,st>=1,st>=2,T)}else if(q===Kf){var _t=w.data;return new jn(_t.thisDep,_t.contextDep,_t.propDep,T)}else{if(q===z2)return new jn(!1,!1,!1,T);if(q===E2){for(var rt=!1,dt=!1,$t=!1,Gt=0;Gt<w.data.length;++Gt){var Wt=w.data[Gt];if(Wt.type===ku)$t=!0;else if(Wt.type===Su)dt=!0;else if(Wt.type===zu)rt=!0;else if(Wt.type===Mu){rt=!0;var Ht=Wt.data;Ht>=1&&(dt=!0),Ht>=2&&($t=!0)}else Wt.type===Kf&&(rt=rt||Wt.data.thisDep,dt=dt||Wt.data.contextDep,$t=$t||Wt.data.propDep)}return new jn(rt,dt,$t,T)}else return new jn(q===zu,q===Su,q===ku,T)}}var om=new jn(!1,!1,!1,function(){});function S6(w,T,q,st,_t,rt,dt,$t,Gt,Wt,Ht,Jt,ie,Pt,ee){var Z=Wt.Record,pt={add:32774,subtract:32778,"reverse subtract":32779};q.ext_blend_minmax&&(pt.min=b6,pt.max=w6);var jt=q.angle_instanced_arrays,me=q.webgl_draw_buffers,At={dirty:!0,profile:ee.profile},be={},Ot=[],oe={},Lt={};function ne(N){return N.replace(".","_")}function We(N,A,G){var K=ne(N);Ot.push(N),be[K]=At[K]=!!G,oe[K]=A}function fo(N,A,G){var K=ne(N);Ot.push(N),Array.isArray(G)?(At[K]=G.slice(),be[K]=G.slice()):At[K]=be[K]=G,Lt[K]=A}We(A2,d6),We(T2,u6),fo(L2,"blendColor",[0,0,0,0]),fo(Eu,"blendEquationSeparate",[Z2,Z2]),fo(Au,"blendFuncSeparate",[K2,Y2,K2,Y2]),We(N2,v6,!0),fo(O2,"depthFunc",M6),fo(R2,"depthRange",[0,1]),fo(C2,"depthMask",!0),fo(Tu,Tu,[!0,!0,!0,!0]),We($2,h6),fo(P2,"cullFace",Zs),fo(Lu,Lu,Gu),fo(Nu,Nu,1),We(I2,g6),fo(Ou,"polygonOffset",[0,0]),We(q2,x6),We(D2,y6),fo(Ru,"sampleCoverage",[1,!1]),We(F2,p6),fo(G2,"stencilMask",-1),fo(Cu,"stencilFunc",[_6,0,-1]),fo($u,"stencilOpSeparate",[kl,es,es,es]),fo(pl,"stencilOpSeparate",[Zs,es,es,es]),We(H2,m6),fo(Zf,"scissor",[0,0,w.drawingBufferWidth,w.drawingBufferHeight]),fo(Ra,Ra,[0,0,w.drawingBufferWidth,w.drawingBufferHeight]);var ce={gl:w,context:ie,strings:T,next:be,current:At,draw:Jt,elements:rt,buffer:_t,shader:Ht,attributes:Wt.state,vao:Wt,uniforms:Gt,framebuffer:$t,extensions:q,timer:Pt,isBufferArgs:lh},Yt={primTypes:Fi,compareFuncs:ec,blendFuncs:ya,blendEquations:pt,stencilOps:os,glTypes:Hs,orientationType:Hu};S.optional(function(){ce.isArrayLike=N0}),me&&(Yt.backBuffer=[Zs],Yt.drawBuffer=Mo(st.maxDrawbuffers,function(N){return N===0?[0]:Mo(N,function(A){return k6+A})}));var Et=0;function eo(){var N=n6(),A=N.link,G=N.global;N.id=Et++,N.batchId="0";var K=A(ce),Q=N.shared={props:"a0"};Object.keys(ce).forEach(function(F){Q[F]=G.def(K,".",F)}),S.optional(function(){N.CHECK=A(S),N.commandStr=S.guessCommand(),N.command=A(N.commandStr),N.assert=function(F,L,X){F("if(!(",L,"))",this.CHECK,".commandRaise(",A(X),",",this.command,");")},Yt.invalidBlendCombinations=J2});var U=N.next={},H=N.current={};Object.keys(Lt).forEach(function(F){Array.isArray(At[F])&&(U[F]=G.def(Q.next,".",F),H[F]=G.def(Q.current,".",F))});var V=N.constants={};Object.keys(Yt).forEach(function(F){V[F]=G.def(JSON.stringify(Yt[F]))}),N.invoke=function(F,L){switch(L.type){case Mu:var X=["this",Q.context,Q.props,N.batchId];return F.def(A(L.data),".call(",X.slice(0,Math.max(L.data.length+1,4)),")");case ku:return F.def(Q.props,L.data);case Su:return F.def(Q.context,L.data);case zu:return F.def("this",L.data);case Kf:return L.data.append(N,F),L.data.ref;case z2:return L.data.toString();case E2:return L.data.map(function(J){return N.invoke(F,J)})}},N.attribCache={};var O={};return N.scopeAttrib=function(F){var L=T.id(F);if(L in O)return O[L];var X=Wt.scope[L];X||(X=Wt.scope[L]=new Z);var J=O[L]=A(X);return J},N}function ko(N){var A=N.static,G=N.dynamic,K;if(vl in A){var Q=!!A[vl];K=I0(function(H,V){return Q}),K.enable=Q}else if(vl in G){var U=G[vl];K=cr(U,function(H,V){return H.invoke(V,U)})}return K}function Ne(N,A){var G=N.static,K=N.dynamic;if(Vs in G){var Q=G[Vs];return Q?(Q=$t.getFramebuffer(Q),S.command(Q,"invalid framebuffer object"),I0(function(H,V){var O=H.link(Q),F=H.shared;V.set(F.framebuffer,".next",O);var L=F.context;return V.set(L,"."+Qi,O+".width"),V.set(L,"."+Ji,O+".height"),O})):I0(function(H,V){var O=H.shared;V.set(O.framebuffer,".next","null");var F=O.context;return V.set(F,"."+Qi,F+"."+B2),V.set(F,"."+Ji,F+"."+j2),"null"})}else if(Vs in K){var U=K[Vs];return cr(U,function(H,V){var O=H.invoke(V,U),F=H.shared,L=F.framebuffer,X=V.def(L,".getFramebuffer(",O,")");S.optional(function(){H.assert(V,"!"+O+"||"+X,"invalid framebuffer object")}),V.set(L,".next",X);var J=F.context;return V.set(J,"."+Qi,X+"?"+X+".width:"+J+"."+B2),V.set(J,"."+Ji,X+"?"+X+".height:"+J+"."+j2),X})}else return null}function To(N,A,G){var K=N.static,Q=N.dynamic;function U(O){if(O in K){var F=K[O];S.commandType(F,"object","invalid "+O,G.commandStr);var L=!0,X=F.x|0,J=F.y|0,bt,Mt;return"width"in F?(bt=F.width|0,S.command(bt>=0,"invalid "+O,G.commandStr)):L=!1,"height"in F?(Mt=F.height|0,S.command(Mt>=0,"invalid "+O,G.commandStr)):L=!1,new jn(!L&&A&&A.thisDep,!L&&A&&A.contextDep,!L&&A&&A.propDep,function(Fe,zo){var Oe=Fe.shared.context,Qe=bt;"width"in F||(Qe=zo.def(Oe,".",Qi,"-",X));var mo=Mt;return"height"in F||(mo=zo.def(Oe,".",Ji,"-",J)),[X,J,Qe,mo]})}else if(O in Q){var vt=Q[O],Ut=cr(vt,function(Fe,zo){var Oe=Fe.invoke(zo,vt);S.optional(function(){Fe.assert(zo,Oe+"&&typeof "+Oe+'==="object"',"invalid "+O)});var Qe=Fe.shared.context,mo=zo.def(Oe,".x|0"),jo=zo.def(Oe,".y|0"),z0=zo.def('"width" in ',Oe,"?",Oe,".width|0:","(",Qe,".",Qi,"-",mo,")"),Wn=zo.def('"height" in ',Oe,"?",Oe,".height|0:","(",Qe,".",Ji,"-",jo,")");return S.optional(function(){Fe.assert(zo,z0+">=0&&"+Wn+">=0","invalid "+O)}),[mo,jo,z0,Wn]});return A&&(Ut.thisDep=Ut.thisDep||A.thisDep,Ut.contextDep=Ut.contextDep||A.contextDep,Ut.propDep=Ut.propDep||A.propDep),Ut}else return A?new jn(A.thisDep,A.contextDep,A.propDep,function(Fe,zo){var Oe=Fe.shared.context;return[0,0,zo.def(Oe,".",Qi),zo.def(Oe,".",Ji)]}):null}var H=U(Ra);if(H){var V=H;H=new jn(H.thisDep,H.contextDep,H.propDep,function(O,F){var L=V.append(O,F),X=O.shared.context;return F.set(X,"."+r6,L[2]),F.set(X,"."+a6,L[3]),L})}return{viewport:H,scissor_box:U(Zf)}}function ho(N,A){var G=N.static,K=typeof G[gl]=="string"&&typeof G[ml]=="string";if(K){if(Object.keys(A.dynamic).length>0)return null;var Q=A.static,U=Object.keys(Q);if(U.length>0&&typeof Q[U[0]]=="number"){for(var H=[],V=0;V<U.length;++V)S(typeof Q[U[V]]=="number","must specify all vertex attribute locations when using vaos"),H.push([Q[U[V]]|0,U[V]]);return H}}return null}function Eo(N,A,G){var K=N.static,Q=N.dynamic;function U(L){if(L in K){var X=T.id(K[L]);S.optional(function(){Ht.shader(tm[L],X,S.guessCommand())});var J=I0(function(){return X});return J.id=X,J}else if(L in Q){var bt=Q[L];return cr(bt,function(Mt,vt){var Ut=Mt.invoke(vt,bt),Fe=vt.def(Mt.shared.strings,".id(",Ut,")");return S.optional(function(){vt(Mt.shared.shader,".shader(",tm[L],",",Fe,",",Mt.command,");")}),Fe})}return null}var H=U(gl),V=U(ml),O=null,F;return ns(H)&&ns(V)?(O=Ht.program(V.id,H.id,null,G),F=I0(function(L,X){return L.link(O)})):F=new jn(H&&H.thisDep||V&&V.thisDep,H&&H.contextDep||V&&V.contextDep,H&&H.propDep||V&&V.propDep,function(L,X){var J=L.shared.shader,bt;H?bt=H.append(L,X):bt=X.def(J,".",gl);var Mt;V?Mt=V.append(L,X):Mt=X.def(J,".",ml);var vt=J+".program("+Mt+","+bt;return S.optional(function(){vt+=","+L.command}),X.def(vt+")")}),{frag:H,vert:V,progVar:F,program:O}}function Bo(N,A){var G=N.static,K=N.dynamic;function Q(){if(Xs in G){var L=G[Xs];lh(L)?L=rt.getElements(rt.create(L,!0)):L&&(L=rt.getElements(L),S.command(L,"invalid elements",A.commandStr));var X=I0(function(bt,Mt){if(L){var vt=bt.link(L);return bt.ELEMENTS=vt,vt}return bt.ELEMENTS=null,null});return X.value=L,X}else if(Xs in K){var J=K[Xs];return cr(J,function(bt,Mt){var vt=bt.shared,Ut=vt.isBufferArgs,Fe=vt.elements,zo=bt.invoke(Mt,J),Oe=Mt.def("null"),Qe=Mt.def(Ut,"(",zo,")"),mo=bt.cond(Qe).then(Oe,"=",Fe,".createStream(",zo,");").else(Oe,"=",Fe,".getElements(",zo,");");return S.optional(function(){bt.assert(mo.else,"!"+zo+"||"+Oe,"invalid elements")}),Mt.entry(mo),Mt.exit(bt.cond(Qe).then(Fe,".destroyStream(",Oe,");")),bt.ELEMENTS=Oe,Oe})}return null}var U=Q();function H(){if(Ys in G){var L=G[Ys];return S.commandParameter(L,Fi,"invalid primitve",A.commandStr),I0(function(J,bt){return Fi[L]})}else if(Ys in K){var X=K[Ys];return cr(X,function(J,bt){var Mt=J.constants.primTypes,vt=J.invoke(bt,X);return S.optional(function(){J.assert(bt,vt+" in "+Mt,"invalid primitive, must be one of "+Object.keys(Fi))}),bt.def(Mt,"[",vt,"]")})}else if(U)return ns(U)?U.value?I0(function(J,bt){return bt.def(J.ELEMENTS,".primType")}):I0(function(){return V2}):new jn(U.thisDep,U.contextDep,U.propDep,function(J,bt){var Mt=J.ELEMENTS;return bt.def(Mt,"?",Mt,".primType:",V2)});return null}function V(L,X){if(L in G){var J=G[L]|0;return S.command(!X||J>=0,"invalid "+L,A.commandStr),I0(function(Mt,vt){return X&&(Mt.OFFSET=J),J})}else if(L in K){var bt=K[L];return cr(bt,function(Mt,vt){var Ut=Mt.invoke(vt,bt);return X&&(Mt.OFFSET=Ut,S.optional(function(){Mt.assert(vt,Ut+">=0","invalid "+L)})),Ut})}else if(X&&U)return I0(function(Mt,vt){return Mt.OFFSET="0",0});return null}var O=V(Qf,!0);function F(){if(Ks in G){var L=G[Ks]|0;return S.command(typeof L=="number"&&L>=0,"invalid vertex count",A.commandStr),I0(function(){return L})}else if(Ks in K){var X=K[Ks];return cr(X,function(Mt,vt){var Ut=Mt.invoke(vt,X);return S.optional(function(){Mt.assert(vt,"typeof "+Ut+'==="number"&&'+Ut+">=0&&"+Ut+"===("+Ut+"|0)","invalid vertex count")}),Ut})}else if(U)if(ns(U)){if(U)return O?new jn(O.thisDep,O.contextDep,O.propDep,function(Mt,vt){var Ut=vt.def(Mt.ELEMENTS,".vertCount-",Mt.OFFSET);return S.optional(function(){Mt.assert(vt,Ut+">=0","invalid vertex offset/element buffer too small")}),Ut}):I0(function(Mt,vt){return vt.def(Mt.ELEMENTS,".vertCount")});var J=I0(function(){return-1});return S.optional(function(){J.MISSING=!0}),J}else{var bt=new jn(U.thisDep||O.thisDep,U.contextDep||O.contextDep,U.propDep||O.propDep,function(Mt,vt){var Ut=Mt.ELEMENTS;return Mt.OFFSET?vt.def(Ut,"?",Ut,".vertCount-",Mt.OFFSET,":-1"):vt.def(Ut,"?",Ut,".vertCount:-1")});return S.optional(function(){bt.DYNAMIC=!0}),bt}return null}return{elements:U,primitive:H(),count:F(),instances:V(Jf,!1),offset:O}}function q0(N,A){var G=N.static,K=N.dynamic,Q={};return Ot.forEach(function(U){var H=ne(U);function V(O,F){if(U in G){var L=O(G[U]);Q[H]=I0(function(){return L})}else if(U in K){var X=K[U];Q[H]=cr(X,function(J,bt){return F(J,bt,J.invoke(bt,X))})}}switch(U){case $2:case T2:case A2:case F2:case N2:case H2:case I2:case q2:case D2:case C2:return V(function(O){return S.commandType(O,"boolean",U,A.commandStr),O},function(O,F,L){return S.optional(function(){O.assert(F,"typeof "+L+'==="boolean"',"invalid flag "+U,O.commandStr)}),L});case O2:return V(function(O){return S.commandParameter(O,ec,"invalid "+U,A.commandStr),ec[O]},function(O,F,L){var X=O.constants.compareFuncs;return S.optional(function(){O.assert(F,L+" in "+X,"invalid "+U+", must be one of "+Object.keys(ec))}),F.def(X,"[",L,"]")});case R2:return V(function(O){return S.command(N0(O)&&O.length===2&&typeof O[0]=="number"&&typeof O[1]=="number"&&O[0]<=O[1],"depth range is 2d array",A.commandStr),O},function(O,F,L){S.optional(function(){O.assert(F,O.shared.isArrayLike+"("+L+")&&"+L+".length===2&&typeof "+L+'[0]==="number"&&typeof '+L+'[1]==="number"&&'+L+"[0]<="+L+"[1]","depth range must be a 2d array")});var X=F.def("+",L,"[0]"),J=F.def("+",L,"[1]");return[X,J]});case Au:return V(function(O){S.commandType(O,"object","blend.func",A.commandStr);var F="srcRGB"in O?O.srcRGB:O.src,L="srcAlpha"in O?O.srcAlpha:O.src,X="dstRGB"in O?O.dstRGB:O.dst,J="dstAlpha"in O?O.dstAlpha:O.dst;return S.commandParameter(F,ya,H+".srcRGB",A.commandStr),S.commandParameter(L,ya,H+".srcAlpha",A.commandStr),S.commandParameter(X,ya,H+".dstRGB",A.commandStr),S.commandParameter(J,ya,H+".dstAlpha",A.commandStr),S.command(J2.indexOf(F+", "+X)===-1,"unallowed blending combination (srcRGB, dstRGB) = ("+F+", "+X+")",A.commandStr),[ya[F],ya[X],ya[L],ya[J]]},function(O,F,L){var X=O.constants.blendFuncs;S.optional(function(){O.assert(F,L+"&&typeof "+L+'==="object"',"invalid blend func, must be an object")});function J(Oe,Qe){var mo=F.def('"',Oe,Qe,'" in ',L,"?",L,".",Oe,Qe,":",L,".",Oe);return S.optional(function(){O.assert(F,mo+" in "+X,"invalid "+U+"."+Oe+Qe+", must be one of "+Object.keys(ya))}),mo}var bt=J("src","RGB"),Mt=J("dst","RGB");S.optional(function(){var Oe=O.constants.invalidBlendCombinations;O.assert(F,Oe+".indexOf("+bt+'+", "+'+Mt+") === -1 ","unallowed blending combination for (srcRGB, dstRGB)")});var vt=F.def(X,"[",bt,"]"),Ut=F.def(X,"[",J("src","Alpha"),"]"),Fe=F.def(X,"[",Mt,"]"),zo=F.def(X,"[",J("dst","Alpha"),"]");return[vt,Fe,Ut,zo]});case Eu:return V(function(O){if(typeof O=="string")return S.commandParameter(O,pt,"invalid "+U,A.commandStr),[pt[O],pt[O]];if(typeof O=="object")return S.commandParameter(O.rgb,pt,U+".rgb",A.commandStr),S.commandParameter(O.alpha,pt,U+".alpha",A.commandStr),[pt[O.rgb],pt[O.alpha]];S.commandRaise("invalid blend.equation",A.commandStr)},function(O,F,L){var X=O.constants.blendEquations,J=F.def(),bt=F.def(),Mt=O.cond("typeof ",L,'==="string"');return S.optional(function(){function vt(Ut,Fe,zo){O.assert(Ut,zo+" in "+X,"invalid "+Fe+", must be one of "+Object.keys(pt))}vt(Mt.then,U,L),O.assert(Mt.else,L+"&&typeof "+L+'==="object"',"invalid "+U),vt(Mt.else,U+".rgb",L+".rgb"),vt(Mt.else,U+".alpha",L+".alpha")}),Mt.then(J,"=",bt,"=",X,"[",L,"];"),Mt.else(J,"=",X,"[",L,".rgb];",bt,"=",X,"[",L,".alpha];"),F(Mt),[J,bt]});case L2:return V(function(O){return S.command(N0(O)&&O.length===4,"blend.color must be a 4d array",A.commandStr),Mo(4,function(F){return+O[F]})},function(O,F,L){return S.optional(function(){O.assert(F,O.shared.isArrayLike+"("+L+")&&"+L+".length===4","blend.color must be a 4d array")}),Mo(4,function(X){return F.def("+",L,"[",X,"]")})});case G2:return V(function(O){return S.commandType(O,"number",H,A.commandStr),O|0},function(O,F,L){return S.optional(function(){O.assert(F,"typeof "+L+'==="number"',"invalid stencil.mask")}),F.def(L,"|0")});case Cu:return V(function(O){S.commandType(O,"object",H,A.commandStr);var F=O.cmp||"keep",L=O.ref||0,X="mask"in O?O.mask:-1;return S.commandParameter(F,ec,U+".cmp",A.commandStr),S.commandType(L,"number",U+".ref",A.commandStr),S.commandType(X,"number",U+".mask",A.commandStr),[ec[F],L,X]},function(O,F,L){var X=O.constants.compareFuncs;S.optional(function(){function vt(){O.assert(F,Array.prototype.join.call(arguments,""),"invalid stencil.func")}vt(L+"&&typeof ",L,'==="object"'),vt('!("cmp" in ',L,")||(",L,".cmp in ",X,")")});var J=F.def('"cmp" in ',L,"?",X,"[",L,".cmp]",":",es),bt=F.def(L,".ref|0"),Mt=F.def('"mask" in ',L,"?",L,".mask|0:-1");return[J,bt,Mt]});case $u:case pl:return V(function(O){S.commandType(O,"object",H,A.commandStr);var F=O.fail||"keep",L=O.zfail||"keep",X=O.zpass||"keep";return S.commandParameter(F,os,U+".fail",A.commandStr),S.commandParameter(L,os,U+".zfail",A.commandStr),S.commandParameter(X,os,U+".zpass",A.commandStr),[U===pl?Zs:kl,os[F],os[L],os[X]]},function(O,F,L){var X=O.constants.stencilOps;S.optional(function(){O.assert(F,L+"&&typeof "+L+'==="object"',"invalid "+U)});function J(bt){return S.optional(function(){O.assert(F,'!("'+bt+'" in '+L+")||("+L+"."+bt+" in "+X+")","invalid "+U+"."+bt+", must be one of "+Object.keys(os))}),F.def('"',bt,'" in ',L,"?",X,"[",L,".",bt,"]:",es)}return[U===pl?Zs:kl,J("fail"),J("zfail"),J("zpass")]});case Ou:return V(function(O){S.commandType(O,"object",H,A.commandStr);var F=O.factor|0,L=O.units|0;return S.commandType(F,"number",H+".factor",A.commandStr),S.commandType(L,"number",H+".units",A.commandStr),[F,L]},function(O,F,L){S.optional(function(){O.assert(F,L+"&&typeof "+L+'==="object"',"invalid "+U)});var X=F.def(L,".factor|0"),J=F.def(L,".units|0");return[X,J]});case P2:return V(function(O){var F=0;return O==="front"?F=kl:O==="back"&&(F=Zs),S.command(!!F,H,A.commandStr),F},function(O,F,L){return S.optional(function(){O.assert(F,L+'==="front"||'+L+'==="back"',"invalid cull.face")}),F.def(L,'==="front"?',kl,":",Zs)});case Nu:return V(function(O){return S.command(typeof O=="number"&&O>=st.lineWidthDims[0]&&O<=st.lineWidthDims[1],"invalid line width, must be a positive number between "+st.lineWidthDims[0]+" and "+st.lineWidthDims[1],A.commandStr),O},function(O,F,L){return S.optional(function(){O.assert(F,"typeof "+L+'==="number"&&'+L+">="+st.lineWidthDims[0]+"&&"+L+"<="+st.lineWidthDims[1],"invalid line width")}),L});case Lu:return V(function(O){return S.commandParameter(O,Hu,H,A.commandStr),Hu[O]},function(O,F,L){return S.optional(function(){O.assert(F,L+'==="cw"||'+L+'==="ccw"',"invalid frontFace, must be one of cw,ccw")}),F.def(L+'==="cw"?'+X2+":"+Gu)});case Tu:return V(function(O){return S.command(N0(O)&&O.length===4,"color.mask must be length 4 array",A.commandStr),O.map(function(F){return!!F})},function(O,F,L){return S.optional(function(){O.assert(F,O.shared.isArrayLike+"("+L+")&&"+L+".length===4","invalid color.mask")}),Mo(4,function(X){return"!!"+L+"["+X+"]"})});case Ru:return V(function(O){S.command(typeof O=="object"&&O,H,A.commandStr);var F="value"in O?O.value:1,L=!!O.invert;return S.command(typeof F=="number"&&F>=0&&F<=1,"sample.coverage.value must be a number between 0 and 1",A.commandStr),[F,L]},function(O,F,L){S.optional(function(){O.assert(F,L+"&&typeof "+L+'==="object"',"invalid sample.coverage")});var X=F.def('"value" in ',L,"?+",L,".value:1"),J=F.def("!!",L,".invert");return[X,J]})}}),Q}function en(N,A){var G=N.static,K=N.dynamic,Q={};return Object.keys(G).forEach(function(U){var H=G[U],V;if(typeof H=="number"||typeof H=="boolean")V=I0(function(){return H});else if(typeof H=="function"){var O=H._reglType;O==="texture2d"||O==="textureCube"?V=I0(function(F){return F.link(H)}):O==="framebuffer"||O==="framebufferCube"?(S.command(H.color.length>0,'missing color attachment for framebuffer sent to uniform "'+U+'"',A.commandStr),V=I0(function(F){return F.link(H.color[0])})):S.commandRaise('invalid data for uniform "'+U+'"',A.commandStr)}else N0(H)?V=I0(function(F){var L=F.global.def("[",Mo(H.length,function(X){return S.command(typeof H[X]=="number"||typeof H[X]=="boolean","invalid uniform "+U,F.commandStr),H[X]}),"]");return L}):S.commandRaise('invalid or missing data for uniform "'+U+'"',A.commandStr);V.value=H,Q[U]=V}),Object.keys(K).forEach(function(U){var H=K[U];Q[U]=cr(H,function(V,O){return V.invoke(O,H)})}),Q}function $o(N,A){var G=N.static,K=N.dynamic,Q={};return Object.keys(G).forEach(function(U){var H=G[U],V=T.id(U),O=new Z;if(lh(H))O.state=Zi,O.buffer=_t.getBuffer(_t.create(H,tc,!1,!0)),O.type=0;else{var F=_t.getBuffer(H);if(F)O.state=Zi,O.buffer=F,O.type=0;else if(S.command(typeof H=="object"&&H,"invalid data for attribute "+U,A.commandStr),"constant"in H){var L=H.constant;O.buffer="null",O.state=_u,typeof L=="number"?O.x=L:(S.command(N0(L)&&L.length>0&&L.length<=4,"invalid constant for attribute "+U,A.commandStr),Ki.forEach(function(Fe,zo){zo<L.length&&(O[Fe]=L[zo])}))}else{lh(H.buffer)?F=_t.getBuffer(_t.create(H.buffer,tc,!1,!0)):F=_t.getBuffer(H.buffer),S.command(!!F,'missing buffer for attribute "'+U+'"',A.commandStr);var X=H.offset|0;S.command(X>=0,'invalid offset for attribute "'+U+'"',A.commandStr);var J=H.stride|0;S.command(J>=0&&J<256,'invalid stride for attribute "'+U+'", must be integer betweeen [0, 255]',A.commandStr);var bt=H.size|0;S.command(!("size"in H)||bt>0&&bt<=4,'invalid size for attribute "'+U+'", must be 1,2,3,4',A.commandStr);var Mt=!!H.normalized,vt=0;"type"in H&&(S.commandParameter(H.type,Hs,"invalid type for attribute "+U,A.commandStr),vt=Hs[H.type]);var Ut=H.divisor|0;"divisor"in H&&(S.command(Ut===0||jt,'cannot specify divisor for attribute "'+U+'", instancing not supported',A.commandStr),S.command(Ut>=0,'invalid divisor for attribute "'+U+'"',A.commandStr)),S.optional(function(){var Fe=A.commandStr,zo=["buffer","offset","divisor","normalized","type","size","stride"];Object.keys(H).forEach(function(Oe){S.command(zo.indexOf(Oe)>=0,'unknown parameter "'+Oe+'" for attribute pointer "'+U+'" (valid parameters are '+zo+")",Fe)})}),O.buffer=F,O.state=Zi,O.size=bt,O.normalized=Mt,O.type=vt||F.dtype,O.offset=X,O.stride=J,O.divisor=Ut}}Q[U]=I0(function(Fe,zo){var Oe=Fe.attribCache;if(V in Oe)return Oe[V];var Qe={isStream:!1};return Object.keys(O).forEach(function(mo){Qe[mo]=O[mo]}),O.buffer&&(Qe.buffer=Fe.link(O.buffer),Qe.type=Qe.type||Qe.buffer+".dtype"),Oe[V]=Qe,Qe})}),Object.keys(K).forEach(function(U){var H=K[U];function V(O,F){var L=O.invoke(F,H),X=O.shared,J=O.constants,bt=X.isBufferArgs,Mt=X.buffer;S.optional(function(){O.assert(F,L+"&&(typeof "+L+'==="object"||typeof '+L+'==="function")&&('+bt+"("+L+")||"+Mt+".getBuffer("+L+")||"+Mt+".getBuffer("+L+".buffer)||"+bt+"("+L+'.buffer)||("constant" in '+L+"&&(typeof "+L+'.constant==="number"||'+X.isArrayLike+"("+L+".constant))))",'invalid dynamic attribute "'+U+'"')});var vt={isStream:F.def(!1)},Ut=new Z;Ut.state=Zi,Object.keys(Ut).forEach(function(Qe){vt[Qe]=F.def(""+Ut[Qe])});var Fe=vt.buffer,zo=vt.type;F("if(",bt,"(",L,")){",vt.isStream,"=true;",Fe,"=",Mt,".createStream(",tc,",",L,");",zo,"=",Fe,".dtype;","}else{",Fe,"=",Mt,".getBuffer(",L,");","if(",Fe,"){",zo,"=",Fe,".dtype;",'}else if("constant" in ',L,"){",vt.state,"=",_u,";","if(typeof "+L+'.constant === "number"){',vt[Ki[0]],"=",L,".constant;",Ki.slice(1).map(function(Qe){return vt[Qe]}).join("="),"=0;","}else{",Ki.map(function(Qe,mo){return vt[Qe]+"="+L+".constant.length>"+mo+"?"+L+".constant["+mo+"]:0;"}).join(""),"}}else{","if(",bt,"(",L,".buffer)){",Fe,"=",Mt,".createStream(",tc,",",L,".buffer);","}else{",Fe,"=",Mt,".getBuffer(",L,".buffer);","}",zo,'="type" in ',L,"?",J.glTypes,"[",L,".type]:",Fe,".dtype;",vt.normalized,"=!!",L,".normalized;");function Oe(Qe){F(vt[Qe],"=",L,".",Qe,"|0;")}return Oe("size"),Oe("offset"),Oe("stride"),Oe("divisor"),F("}}"),F.exit("if(",vt.isStream,"){",Mt,".destroyStream(",Fe,");","}"),vt}Q[U]=cr(H,V)}),Q}function W0(N,A){var G=N.static,K=N.dynamic;if(xl in G){var Q=G[xl];return Q!==null&&Wt.getVAO(Q)===null&&(Q=Wt.createVAO(Q)),I0(function(H){return H.link(Wt.getVAO(Q))})}else if(xl in K){var U=K[xl];return cr(U,function(H,V){var O=H.invoke(V,U);return V.def(H.shared.vao+".getVAO("+O+")")})}return null}function h0(N){var A=N.static,G=N.dynamic,K={};return Object.keys(A).forEach(function(Q){var U=A[Q];K[Q]=I0(function(H,V){return typeof U=="number"||typeof U=="boolean"?""+U:H.link(U)})}),Object.keys(G).forEach(function(Q){var U=G[Q];K[Q]=cr(U,function(H,V){return H.invoke(V,U)})}),K}function D0(N,A,G,K,Q){var U=N.static,H=N.dynamic;S.optional(function(){var Oe=[Vs,ml,gl,Xs,Ys,Qf,Ks,Jf,vl,xl].concat(Ot);function Qe(mo){Object.keys(mo).forEach(function(jo){S.command(Oe.indexOf(jo)>=0,'unknown parameter "'+jo+'"',Q.commandStr)})}Qe(U),Qe(H)});var V=ho(N,A),O=Ne(N,Q),F=To(N,O,Q),L=Bo(N,Q),X=q0(N,Q),J=Eo(N,Q,V);function bt(Oe){var Qe=F[Oe];Qe&&(X[Oe]=Qe)}bt(Ra),bt(ne(Zf));var Mt=Object.keys(X).length>0,vt={framebuffer:O,draw:L,shader:J,state:X,dirty:Mt,scopeVAO:null,drawVAO:null,useVAO:!1,attributes:{}};if(vt.profile=ko(N,Q),vt.uniforms=en(G,Q),vt.drawVAO=vt.scopeVAO=W0(N,Q),!vt.drawVAO&&J.program&&!V&&q.angle_instanced_arrays){var Ut=!0,Fe=J.program.attributes.map(function(Oe){var Qe=A.static[Oe];return Ut=Ut&&!!Qe,Qe});if(Ut&&Fe.length>0){var zo=Wt.getVAO(Wt.createVAO(Fe));vt.drawVAO=new jn(null,null,null,function(Oe,Qe){return Oe.link(zo)}),vt.useVAO=!0}}return V?vt.useVAO=!0:vt.attributes=$o(A,Q),vt.context=h0(K,Q),vt}function V0(N,A,G){var K=N.shared,Q=K.context,U=N.scope();Object.keys(G).forEach(function(H){A.save(Q,"."+H);var V=G[H],O=V.append(N,A);Array.isArray(O)?U(Q,".",H,"=[",O.join(),"];"):U(Q,".",H,"=",O,";")}),A(U)}function X0(N,A,G,K){var Q=N.shared,U=Q.gl,H=Q.framebuffer,V;me&&(V=A.def(Q.extensions,".webgl_draw_buffers"));var O=N.constants,F=O.drawBuffer,L=O.backBuffer,X;G?X=G.append(N,A):X=A.def(H,".next"),K||A("if(",X,"!==",H,".cur){"),A("if(",X,"){",U,".bindFramebuffer(",Q2,",",X,".framebuffer);"),me&&A(V,".drawBuffersWEBGL(",F,"[",X,".colorAttachments.length]);"),A("}else{",U,".bindFramebuffer(",Q2,",null);"),me&&A(V,".drawBuffersWEBGL(",L,");"),A("}",H,".cur=",X,";"),K||A("}")}function dn(N,A,G){var K=N.shared,Q=K.gl,U=N.current,H=N.next,V=K.current,O=K.next,F=N.cond(V,".dirty");Ot.forEach(function(L){var X=ne(L);if(!(X in G.state)){var J,bt;if(X in H){J=H[X],bt=U[X];var Mt=Mo(At[X].length,function(Ut){return F.def(J,"[",Ut,"]")});F(N.cond(Mt.map(function(Ut,Fe){return Ut+"!=="+bt+"["+Fe+"]"}).join("||")).then(Q,".",Lt[X],"(",Mt,");",Mt.map(function(Ut,Fe){return bt+"["+Fe+"]="+Ut}).join(";"),";"))}else{J=F.def(O,".",X);var vt=N.cond(J,"!==",V,".",X);F(vt),X in oe?vt(N.cond(J).then(Q,".enable(",oe[X],");").else(Q,".disable(",oe[X],");"),V,".",X,"=",J,";"):vt(Q,".",Lt[X],"(",J,");",V,".",X,"=",J,";")}}}),Object.keys(G.state).length===0&&F(V,".dirty=false;"),A(F)}function _n(N,A,G,K){var Q=N.shared,U=N.current,H=Q.current,V=Q.gl;em(Object.keys(G)).forEach(function(O){var F=G[O];if(!(K&&!K(F))){var L=F.append(N,A);if(oe[O]){var X=oe[O];ns(F)?L?A(V,".enable(",X,");"):A(V,".disable(",X,");"):A(N.cond(L).then(V,".enable(",X,");").else(V,".disable(",X,");")),A(H,".",O,"=",L,";")}else if(N0(L)){var J=U[O];A(V,".",Lt[O],"(",L,");",L.map(function(bt,Mt){return J+"["+Mt+"]="+bt}).join(";"),";")}else A(V,".",Lt[O],"(",L,");",H,".",O,"=",L,";")}})}function O0(N,A){jt&&(N.instancing=A.def(N.shared.extensions,".angle_instanced_arrays"))}function So(N,A,G,K,Q){var U=N.shared,H=N.stats,V=U.current,O=U.timer,F=G.profile;function L(){return typeof performance=="undefined"?"Date.now()":"performance.now()"}var X,J;function bt(Oe){X=A.def(),Oe(X,"=",L(),";"),typeof Q=="string"?Oe(H,".count+=",Q,";"):Oe(H,".count++;"),Pt&&(K?(J=A.def(),Oe(J,"=",O,".getNumPendingQueries();")):Oe(O,".beginQuery(",H,");"))}function Mt(Oe){Oe(H,".cpuTime+=",L(),"-",X,";"),Pt&&(K?Oe(O,".pushScopeStats(",J,",",O,".getNumPendingQueries(),",H,");"):Oe(O,".endQuery();"))}function vt(Oe){var Qe=A.def(V,".profile");A(V,".profile=",Oe,";"),A.exit(V,".profile=",Qe,";")}var Ut;if(F){if(ns(F)){F.enable?(bt(A),Mt(A.exit),vt("true")):vt("false");return}Ut=F.append(N,A),vt(Ut)}else Ut=A.def(V,".profile");var Fe=N.block();bt(Fe),A("if(",Ut,"){",Fe,"}");var zo=N.block();Mt(zo),A.exit("if(",Ut,"){",zo,"}")}function Mn(N,A,G,K,Q){var U=N.shared;function H(O){switch(O){case th:case nh:case sh:return 2;case eh:case rh:case ih:return 3;case oh:case ah:case ch:return 4;default:return 1}}function V(O,F,L){var X=U.gl,J=A.def(O,".location"),bt=A.def(U.attributes,"[",J,"]"),Mt=L.state,vt=L.buffer,Ut=[L.x,L.y,L.z,L.w],Fe=["buffer","normalized","offset","stride"];function zo(){A("if(!",bt,".buffer){",X,".enableVertexAttribArray(",J,");}");var Qe=L.type,mo;if(L.size?mo=A.def(L.size,"||",F):mo=F,A("if(",bt,".type!==",Qe,"||",bt,".size!==",mo,"||",Fe.map(function(z0){return bt+"."+z0+"!=="+L[z0]}).join("||"),"){",X,".bindBuffer(",tc,",",vt,".buffer);",X,".vertexAttribPointer(",[J,mo,Qe,L.normalized,L.stride,L.offset],");",bt,".type=",Qe,";",bt,".size=",mo,";",Fe.map(function(z0){return bt+"."+z0+"="+L[z0]+";"}).join(""),"}"),jt){var jo=L.divisor;A("if(",bt,".divisor!==",jo,"){",N.instancing,".vertexAttribDivisorANGLE(",[J,jo],");",bt,".divisor=",jo,";}")}}function Oe(){A("if(",bt,".buffer){",X,".disableVertexAttribArray(",J,");",bt,".buffer=null;","}if(",Ki.map(function(Qe,mo){return bt+"."+Qe+"!=="+Ut[mo]}).join("||"),"){",X,".vertexAttrib4f(",J,",",Ut,");",Ki.map(function(Qe,mo){return bt+"."+Qe+"="+Ut[mo]+";"}).join(""),"}")}Mt===Zi?zo():Mt===_u?Oe():(A("if(",Mt,"===",Zi,"){"),zo(),A("}else{"),Oe(),A("}"))}K.forEach(function(O){var F=O.name,L=G.attributes[F],X;if(L){if(!Q(L))return;X=L.append(N,A)}else{if(!Q(om))return;var J=N.scopeAttrib(F);S.optional(function(){N.assert(A,J+".state","missing attribute "+F)}),X={},Object.keys(new Z).forEach(function(bt){X[bt]=A.def(J,".",bt)})}V(N.link(O),H(O.info.type),X)})}function Yo(N,A,G,K,Q){for(var U=N.shared,H=U.gl,V,O=0;O<K.length;++O){var F=K[O],L=F.name,X=F.info.type,J=G.uniforms[L],bt=N.link(F),Mt=bt+".location",vt;if(J){if(!Q(J))continue;if(ns(J)){var Ut=J.value;if(S.command(Ut!==null&&typeof Ut!="undefined",'missing uniform "'+L+'"',N.commandStr),X===_l||X===Ml){S.command(typeof Ut=="function"&&(X===_l&&(Ut._reglType==="texture2d"||Ut._reglType==="framebuffer")||X===Ml&&(Ut._reglType==="textureCube"||Ut._reglType==="framebufferCube")),"invalid texture for uniform "+L,N.commandStr);var Fe=N.link(Ut._texture||Ut.color[0]._texture);A(H,".uniform1i(",Mt,",",Fe+".bind());"),A.exit(Fe,".unbind();")}else if(X===yl||X===bl||X===wl){S.optional(function(){S.command(N0(Ut),"invalid matrix for uniform "+L,N.commandStr),S.command(X===yl&&Ut.length===4||X===bl&&Ut.length===9||X===wl&&Ut.length===16,"invalid length for matrix uniform "+L,N.commandStr)});var zo=N.global.def("new Float32Array(["+Array.prototype.slice.call(Ut)+"])"),Oe=2;X===bl?Oe=3:X===wl&&(Oe=4),A(H,".uniformMatrix",Oe,"fv(",Mt,",false,",zo,");")}else{switch(X){case qu:S.commandType(Ut,"number","uniform "+L,N.commandStr),V="1f";break;case th:S.command(N0(Ut)&&Ut.length===2,"uniform "+L,N.commandStr),V="2f";break;case eh:S.command(N0(Ut)&&Ut.length===3,"uniform "+L,N.commandStr),V="3f";break;case oh:S.command(N0(Ut)&&Ut.length===4,"uniform "+L,N.commandStr),V="4f";break;case Fu:S.commandType(Ut,"boolean","uniform "+L,N.commandStr),V="1i";break;case Du:S.commandType(Ut,"number","uniform "+L,N.commandStr),V="1i";break;case sh:S.command(N0(Ut)&&Ut.length===2,"uniform "+L,N.commandStr),V="2i";break;case nh:S.command(N0(Ut)&&Ut.length===2,"uniform "+L,N.commandStr),V="2i";break;case ih:S.command(N0(Ut)&&Ut.length===3,"uniform "+L,N.commandStr),V="3i";break;case rh:S.command(N0(Ut)&&Ut.length===3,"uniform "+L,N.commandStr),V="3i";break;case ch:S.command(N0(Ut)&&Ut.length===4,"uniform "+L,N.commandStr),V="4i";break;case ah:S.command(N0(Ut)&&Ut.length===4,"uniform "+L,N.commandStr),V="4i";break}A(H,".uniform",V,"(",Mt,",",N0(Ut)?Array.prototype.slice.call(Ut):Ut,");")}continue}else vt=J.append(N,A)}else{if(!Q(om))continue;vt=A.def(U.uniforms,"[",T.id(L),"]")}X===_l?(S(!Array.isArray(vt),"must specify a scalar prop for textures"),A("if(",vt,"&&",vt,'._reglType==="framebuffer"){',vt,"=",vt,".color[0];","}")):X===Ml&&(S(!Array.isArray(vt),"must specify a scalar prop for cube maps"),A("if(",vt,"&&",vt,'._reglType==="framebufferCube"){',vt,"=",vt,".color[0];","}")),S.optional(function(){function Wn(oa,lm){N.assert(A,oa,'bad data or missing for uniform "'+L+'".  '+lm)}function Uu(oa){S(!Array.isArray(vt),"must not specify an array type for uniform"),Wn("typeof "+vt+'==="'+oa+'"',"invalid type, expected "+oa)}function Ir(oa,lm){Array.isArray(vt)?S(vt.length===oa,"must have length "+oa):Wn(U.isArrayLike+"("+vt+")&&"+vt+".length==="+oa,"invalid vector, should have length "+oa,N.commandStr)}function cm(oa){S(!Array.isArray(vt),"must not specify a value type"),Wn("typeof "+vt+'==="function"&&'+vt+'._reglType==="texture'+(oa===W2?"2d":"Cube")+'"',"invalid texture type",N.commandStr)}switch(X){case Du:Uu("number");break;case nh:Ir(2,"number");break;case rh:Ir(3,"number");break;case ah:Ir(4,"number");break;case qu:Uu("number");break;case th:Ir(2,"number");break;case eh:Ir(3,"number");break;case oh:Ir(4,"number");break;case Fu:Uu("boolean");break;case sh:Ir(2,"boolean");break;case ih:Ir(3,"boolean");break;case ch:Ir(4,"boolean");break;case yl:Ir(4,"number");break;case bl:Ir(9,"number");break;case wl:Ir(16,"number");break;case _l:cm(W2);break;case Ml:cm(f6);break}});var Qe=1;switch(X){case _l:case Ml:var mo=A.def(vt,"._texture");A(H,".uniform1i(",Mt,",",mo,".bind());"),A.exit(mo,".unbind();");continue;case Du:case Fu:V="1i";break;case nh:case sh:V="2i",Qe=2;break;case rh:case ih:V="3i",Qe=3;break;case ah:case ch:V="4i",Qe=4;break;case qu:V="1f";break;case th:V="2f",Qe=2;break;case eh:V="3f",Qe=3;break;case oh:V="4f",Qe=4;break;case yl:V="Matrix2fv";break;case bl:V="Matrix3fv";break;case wl:V="Matrix4fv";break}if(A(H,".uniform",V,"(",Mt,","),V.charAt(0)==="M"){var jo=Math.pow(X-yl+2,2),z0=N.global.def("new Float32Array(",jo,")");Array.isArray(vt)?A("false,(",Mo(jo,function(Wn){return z0+"["+Wn+"]="+vt[Wn]}),",",z0,")"):A("false,(Array.isArray(",vt,")||",vt," instanceof Float32Array)?",vt,":(",Mo(jo,function(Wn){return z0+"["+Wn+"]="+vt+"["+Wn+"]"}),",",z0,")")}else Qe>1?A(Mo(Qe,function(Wn){return Array.isArray(vt)?vt[Wn]:vt+"["+Wn+"]"})):(S(!Array.isArray(vt),"uniform value must not be an array"),A(vt));A(");")}}function Ke(N,A,G,K){var Q=N.shared,U=Q.gl,H=Q.draw,V=K.draw;function O(){var mo=V.elements,jo,z0=A;return mo?((mo.contextDep&&K.contextDynamic||mo.propDep)&&(z0=G),jo=mo.append(N,z0)):jo=z0.def(H,".",Xs),jo&&z0("if("+jo+")"+U+".bindBuffer("+i6+","+jo+".buffer.buffer);"),jo}function F(){var mo=V.count,jo,z0=A;return mo?((mo.contextDep&&K.contextDynamic||mo.propDep)&&(z0=G),jo=mo.append(N,z0),S.optional(function(){mo.MISSING&&N.assert(A,"false","missing vertex count"),mo.DYNAMIC&&N.assert(z0,jo+">=0","missing vertex count")})):(jo=z0.def(H,".",Ks),S.optional(function(){N.assert(z0,jo+">=0","missing vertex count")})),jo}var L=O();function X(mo){var jo=V[mo];return jo?jo.contextDep&&K.contextDynamic||jo.propDep?jo.append(N,G):jo.append(N,A):A.def(H,".",mo)}var J=X(Ys),bt=X(Qf),Mt=F();if(typeof Mt=="number"){if(Mt===0)return}else G("if(",Mt,"){"),G.exit("}");var vt,Ut;jt&&(vt=X(Jf),Ut=N.instancing);var Fe=L+".type",zo=V.elements&&ns(V.elements);function Oe(){function mo(){G(Ut,".drawElementsInstancedANGLE(",[J,Mt,Fe,bt+"<<(("+Fe+"-"+S2+")>>1)",vt],");")}function jo(){G(Ut,".drawArraysInstancedANGLE(",[J,bt,Mt,vt],");")}L?zo?mo():(G("if(",L,"){"),mo(),G("}else{"),jo(),G("}")):jo()}function Qe(){function mo(){G(U+".drawElements("+[J,Mt,Fe,bt+"<<(("+Fe+"-"+S2+")>>1)"]+");")}function jo(){G(U+".drawArrays("+[J,bt,Mt]+");")}L?zo?mo():(G("if(",L,"){"),mo(),G("}else{"),jo(),G("}")):jo()}jt&&(typeof vt!="number"||vt>=0)?typeof vt=="string"?(G("if(",vt,">0){"),Oe(),G("}else if(",vt,"<0){"),Qe(),G("}")):Oe():Qe()}function Ro(N,A,G,K,Q){var U=eo(),H=U.proc("body",Q);return S.optional(function(){U.commandStr=A.commandStr,U.command=U.link(A.commandStr)}),jt&&(U.instancing=H.def(U.shared.extensions,".angle_instanced_arrays")),N(U,H,G,K),U.compile().body}function Do(N,A,G,K){O0(N,A),G.useVAO?G.drawVAO?A(N.shared.vao,".setVAO(",G.drawVAO.append(N,A),");"):A(N.shared.vao,".setVAO(",N.shared.vao,".targetVAO);"):(A(N.shared.vao,".setVAO(null);"),Mn(N,A,G,K.attributes,function(){return!0})),Yo(N,A,G,K.uniforms,function(){return!0}),Ke(N,A,A,G)}function R0(N,A){var G=N.proc("draw",1);O0(N,G),V0(N,G,A.context),X0(N,G,A.framebuffer),dn(N,G,A),_n(N,G,A.state),So(N,G,A,!1,!0);var K=A.shader.progVar.append(N,G);if(G(N.shared.gl,".useProgram(",K,".program);"),A.shader.program)Do(N,G,A,A.shader.program);else{G(N.shared.vao,".setVAO(null);");var Q=N.global.def("{}"),U=G.def(K,".id"),H=G.def(Q,"[",U,"]");G(N.cond(H).then(H,".call(this,a0);").else(H,"=",Q,"[",U,"]=",N.link(function(V){return Ro(Do,N,A,V,1)}),"(",K,");",H,".call(this,a0);"))}Object.keys(A.state).length>0&&G(N.shared.current,".dirty=true;")}function ba(N,A,G,K){N.batchId="a1",O0(N,A);function Q(){return!0}Mn(N,A,G,K.attributes,Q),Yo(N,A,G,K.uniforms,Q),Ke(N,A,A,G)}function Qs(N,A,G,K){O0(N,A);var Q=G.contextDep,U=A.def(),H="a0",V="a1",O=A.def();N.shared.props=O,N.batchId=U;var F=N.scope(),L=N.scope();A(F.entry,"for(",U,"=0;",U,"<",V,";++",U,"){",O,"=",H,"[",U,"];",L,"}",F.exit);function X(Fe){return Fe.contextDep&&Q||Fe.propDep}function J(Fe){return!X(Fe)}if(G.needsContext&&V0(N,L,G.context),G.needsFramebuffer&&X0(N,L,G.framebuffer),_n(N,L,G.state,X),G.profile&&X(G.profile)&&So(N,L,G,!1,!0),K)G.useVAO?G.drawVAO?X(G.drawVAO)?L(N.shared.vao,".setVAO(",G.drawVAO.append(N,L),");"):F(N.shared.vao,".setVAO(",G.drawVAO.append(N,F),");"):F(N.shared.vao,".setVAO(",N.shared.vao,".targetVAO);"):(F(N.shared.vao,".setVAO(null);"),Mn(N,F,G,K.attributes,J),Mn(N,L,G,K.attributes,X)),Yo(N,F,G,K.uniforms,J),Yo(N,L,G,K.uniforms,X),Ke(N,F,L,G);else{var bt=N.global.def("{}"),Mt=G.shader.progVar.append(N,L),vt=L.def(Mt,".id"),Ut=L.def(bt,"[",vt,"]");L(N.shared.gl,".useProgram(",Mt,".program);","if(!",Ut,"){",Ut,"=",bt,"[",vt,"]=",N.link(function(Fe){return Ro(ba,N,G,Fe,2)}),"(",Mt,");}",Ut,".call(this,a0[",U,"],",U,");")}}function C(N,A){var G=N.proc("batch",2);N.batchId="0",O0(N,G);var K=!1,Q=!0;Object.keys(A.context).forEach(function(bt){K=K||A.context[bt].propDep}),K||(V0(N,G,A.context),Q=!1);var U=A.framebuffer,H=!1;U?(U.propDep?K=H=!0:U.contextDep&&K&&(H=!0),H||X0(N,G,U)):X0(N,G,null),A.state.viewport&&A.state.viewport.propDep&&(K=!0);function V(bt){return bt.contextDep&&K||bt.propDep}dn(N,G,A),_n(N,G,A.state,function(bt){return!V(bt)}),(!A.profile||!V(A.profile))&&So(N,G,A,!1,"a1"),A.contextDep=K,A.needsContext=Q,A.needsFramebuffer=H;var O=A.shader.progVar;if(O.contextDep&&K||O.propDep)Qs(N,G,A,null);else{var F=O.append(N,G);if(G(N.shared.gl,".useProgram(",F,".program);"),A.shader.program)Qs(N,G,A,A.shader.program);else{G(N.shared.vao,".setVAO(null);");var L=N.global.def("{}"),X=G.def(F,".id"),J=G.def(L,"[",X,"]");G(N.cond(J).then(J,".call(this,a0,a1);").else(J,"=",L,"[",X,"]=",N.link(function(bt){return Ro(Qs,N,A,bt,2)}),"(",F,");",J,".call(this,a0,a1);"))}}Object.keys(A.state).length>0&&G(N.shared.current,".dirty=true;")}function ct(N,A){var G=N.proc("scope",3);N.batchId="a2";var K=N.shared,Q=K.current;V0(N,G,A.context),A.framebuffer&&A.framebuffer.append(N,G),em(Object.keys(A.state)).forEach(function(H){var V=A.state[H],O=V.append(N,G);N0(O)?O.forEach(function(F,L){G.set(N.next[H],"["+L+"]",F)}):G.set(K.next,"."+H,O)}),So(N,G,A,!0,!0),[Xs,Qf,Ks,Jf,Ys].forEach(function(H){var V=A.draw[H];V&&G.set(K.draw,"."+H,""+V.append(N,G))}),Object.keys(A.uniforms).forEach(function(H){var V=A.uniforms[H].append(N,G);Array.isArray(V)&&(V="["+V.join()+"]"),G.set(K.uniforms,"["+T.id(H)+"]",V)}),Object.keys(A.attributes).forEach(function(H){var V=A.attributes[H].append(N,G),O=N.scopeAttrib(H);Object.keys(new Z).forEach(function(F){G.set(O,"."+F,V[F])})}),A.scopeVAO&&G.set(K.vao,".targetVAO",A.scopeVAO.append(N,G));function U(H){var V=A.shader[H];V&&G.set(K.shader,"."+H,V.append(N,G))}U(ml),U(gl),Object.keys(A.state).length>0&&(G(Q,".dirty=true;"),G.exit(Q,".dirty=true;")),G("a1(",N.shared.context,",a0,",N.batchId,");")}function nt(N){if(!(typeof N!="object"||N0(N))){for(var A=Object.keys(N),G=0;G<A.length;++G)if(Vt.isDynamic(N[A[G]]))return!0;return!1}}function ke(N,A,G){var K=A.static[G];if(!K||!nt(K))return;var Q=N.global,U=Object.keys(K),H=!1,V=!1,O=!1,F=N.global.def("{}");U.forEach(function(X){var J=K[X];if(Vt.isDynamic(J)){typeof J=="function"&&(J=K[X]=Vt.unbox(J));var bt=cr(J,null);H=H||bt.thisDep,O=O||bt.propDep,V=V||bt.contextDep}else{switch(Q(F,".",X,"="),typeof J){case"number":Q(J);break;case"string":Q('"',J,'"');break;case"object":Array.isArray(J)&&Q("[",J.join(),"]");break;default:Q(N.link(J));break}Q(";")}});function L(X,J){U.forEach(function(bt){var Mt=K[bt];if(Vt.isDynamic(Mt)){var vt=X.invoke(J,Mt);J(F,".",bt,"=",vt,";")}})}A.dynamic[G]=new Vt.DynamicVariable(Kf,{thisDep:H,contextDep:V,propDep:O,ref:F,append:L}),delete A.static[G]}function Lo(N,A,G,K,Q){var U=eo();U.stats=U.link(Q),Object.keys(A.static).forEach(function(V){ke(U,A,V)}),s6.forEach(function(V){ke(U,N,V)});var H=D0(N,A,G,K,U);return R0(U,H),ct(U,H),C(U,H),e(U.compile(),{destroy:function(){H.shader.program.destroy()}})}return{next:be,current:At,procs:function(){var N=eo(),A=N.proc("poll"),G=N.proc("refresh"),K=N.block();A(K),G(K);var Q=N.shared,U=Q.gl,H=Q.next,V=Q.current;K(V,".dirty=false;"),X0(N,A),X0(N,G,null,!0);var O;jt&&(O=N.link(jt)),q.oes_vertex_array_object&&G(N.link(q.oes_vertex_array_object),".bindVertexArrayOES(null);");for(var F=0;F<st.maxAttributes;++F){var L=G.def(Q.attributes,"[",F,"]"),X=N.cond(L,".buffer");X.then(U,".enableVertexAttribArray(",F,");",U,".bindBuffer(",tc,",",L,".buffer.buffer);",U,".vertexAttribPointer(",F,",",L,".size,",L,".type,",L,".normalized,",L,".stride,",L,".offset);").else(U,".disableVertexAttribArray(",F,");",U,".vertexAttrib4f(",F,",",L,".x,",L,".y,",L,".z,",L,".w);",L,".buffer=null;"),G(X),jt&&G(O,".vertexAttribDivisorANGLE(",F,",",L,".divisor);")}return G(N.shared.vao,".currentVAO=null;",N.shared.vao,".setVAO(",N.shared.vao,".targetVAO);"),Object.keys(oe).forEach(function(J){var bt=oe[J],Mt=K.def(H,".",J),vt=N.block();vt("if(",Mt,"){",U,".enable(",bt,")}else{",U,".disable(",bt,")}",V,".",J,"=",Mt,";"),G(vt),A("if(",Mt,"!==",V,".",J,"){",vt,"}")}),Object.keys(Lt).forEach(function(J){var bt=Lt[J],Mt=At[J],vt,Ut,Fe=N.block();if(Fe(U,".",bt,"("),N0(Mt)){var zo=Mt.length;vt=N.global.def(H,".",J),Ut=N.global.def(V,".",J),Fe(Mo(zo,function(Oe){return vt+"["+Oe+"]"}),");",Mo(zo,function(Oe){return Ut+"["+Oe+"]="+vt+"["+Oe+"];"}).join("")),A("if(",Mo(zo,function(Oe){return vt+"["+Oe+"]!=="+Ut+"["+Oe+"]"}).join("||"),"){",Fe,"}")}else vt=K.def(H,".",J),Ut=K.def(V,".",J),Fe(vt,");",V,".",J,"=",vt,";"),A("if(",vt,"!==",Ut,"){",Fe,"}");G(Fe)}),N.compile()}(),compile:Lo}}function z6(){return{vaoCount:0,bufferCount:0,elementsCount:0,framebufferCount:0,shaderCount:0,textureCount:0,cubeCount:0,renderbufferCount:0,maxTextureUnits:0}}var E6=34918,A6=34919,nm=35007,T6=function(w,T){if(!T.ext_disjoint_timer_query)return null;var q=[];function st(){return q.pop()||T.ext_disjoint_timer_query.createQueryEXT()}function _t(jt){q.push(jt)}var rt=[];function dt(jt){var me=st();T.ext_disjoint_timer_query.beginQueryEXT(nm,me),rt.push(me),Pt(rt.length-1,rt.length,jt)}function $t(){T.ext_disjoint_timer_query.endQueryEXT(nm)}function Gt(){this.startQueryIndex=-1,this.endQueryIndex=-1,this.sum=0,this.stats=null}var Wt=[];function Ht(){return Wt.pop()||new Gt}function Jt(jt){Wt.push(jt)}var ie=[];function Pt(jt,me,At){var be=Ht();be.startQueryIndex=jt,be.endQueryIndex=me,be.sum=0,be.stats=At,ie.push(be)}var ee=[],Z=[];function pt(){var jt,me,At=rt.length;if(At!==0){Z.length=Math.max(Z.length,At+1),ee.length=Math.max(ee.length,At+1),ee[0]=0,Z[0]=0;var be=0;for(jt=0,me=0;me<rt.length;++me){var Ot=rt[me];T.ext_disjoint_timer_query.getQueryObjectEXT(Ot,A6)?(be+=T.ext_disjoint_timer_query.getQueryObjectEXT(Ot,E6),_t(Ot)):rt[jt++]=Ot,ee[me+1]=be,Z[me+1]=jt}for(rt.length=jt,jt=0,me=0;me<ie.length;++me){var oe=ie[me],Lt=oe.startQueryIndex,ne=oe.endQueryIndex;oe.sum+=ee[ne]-ee[Lt];var We=Z[Lt],fo=Z[ne];fo===We?(oe.stats.gpuTime+=oe.sum/1e6,Jt(oe)):(oe.startQueryIndex=We,oe.endQueryIndex=fo,ie[jt++]=oe)}ie.length=jt}}return{beginQuery:dt,endQuery:$t,pushScopeStats:Pt,update:pt,getNumPendingQueries:function(){return rt.length},clear:function(){q.push.apply(q,rt);for(var jt=0;jt<q.length;jt++)T.ext_disjoint_timer_query.deleteQueryEXT(q[jt]);rt.length=0,q.length=0},restore:function(){rt.length=0,q.length=0}}},L6=16384,N6=256,O6=1024,R6=34962,rm="webglcontextlost",am="webglcontextrestored",sm=1,C6=2,$6=3;function im(w,T){for(var q=0;q<w.length;++q)if(w[q]===T)return q;return-1}function P6(w){var T=Xe(w);if(!T)return null;var q=T.gl,st=q.getContextAttributes(),_t=q.isContextLost(),rt=Ze(q,T);if(!rt)return null;var dt=Le(),$t=z6(),Gt=rt.extensions,Wt=T6(q,Gt),Ht=Bt(),Jt=q.drawingBufferWidth,ie=q.drawingBufferHeight,Pt={tick:0,time:0,viewportWidth:Jt,viewportHeight:ie,framebufferWidth:Jt,framebufferHeight:ie,drawingBufferWidth:Jt,drawingBufferHeight:ie,pixelRatio:T.pixelRatio},ee={},Z={elements:null,primitive:4,count:-1,offset:0,instances:-1},pt=ww(q,Gt),jt=Iw(q,$t,T,At),me=Y4(q,Gt,pt,$t,jt);function At(Ke){return me.destroyBuffer(Ke)}var be=Yw(q,Gt,jt,$t),Ot=J4(q,dt,$t,T),oe=z4(q,Gt,pt,function(){We.procs.poll()},Pt,$t,T),Lt=E4(q,Gt,pt,$t,T),ne=V4(q,Gt,pt,oe,Lt,$t),We=S6(q,dt,Gt,pt,jt,be,oe,ne,ee,me,Ot,Z,Pt,Wt,T),fo=o6(q,ne,We.procs.poll,Pt,st,Gt,pt),ce=We.next,Yt=q.canvas,Et=[],eo=[],ko=[],Ne=[T.onDestroy],To=null;function ho(){if(Et.length===0){Wt&&Wt.update(),To=null;return}To=Xt.next(ho),_n();for(var Ke=Et.length-1;Ke>=0;--Ke){var Ro=Et[Ke];Ro&&Ro(Pt,null,0)}q.flush(),Wt&&Wt.update()}function Eo(){!To&&Et.length>0&&(To=Xt.next(ho))}function Bo(){To&&(Xt.cancel(ho),To=null)}function q0(Ke){Ke.preventDefault(),_t=!0,Bo(),eo.forEach(function(Ro){Ro()})}function en(Ke){q.getError(),_t=!1,rt.restore(),Ot.restore(),jt.restore(),oe.restore(),Lt.restore(),ne.restore(),me.restore(),Wt&&Wt.restore(),We.procs.refresh(),Eo(),ko.forEach(function(Ro){Ro()})}Yt&&(Yt.addEventListener(rm,q0,!1),Yt.addEventListener(am,en,!1));function $o(){Et.length=0,Bo(),Yt&&(Yt.removeEventListener(rm,q0),Yt.removeEventListener(am,en)),Ot.clear(),ne.clear(),Lt.clear(),oe.clear(),be.clear(),jt.clear(),me.clear(),Wt&&Wt.clear(),Ne.forEach(function(Ke){Ke()})}function W0(Ke){S(!!Ke,"invalid args to regl({...})"),S.type(Ke,"object","invalid args to regl({...})");function Ro(Q){var U=e({},Q);delete U.uniforms,delete U.attributes,delete U.context,delete U.vao,"stencil"in U&&U.stencil.op&&(U.stencil.opBack=U.stencil.opFront=U.stencil.op,delete U.stencil.op);function H(V){if(V in U){var O=U[V];delete U[V],Object.keys(O).forEach(function(F){U[V+"."+F]=O[F]})}}return H("blend"),H("depth"),H("cull"),H("stencil"),H("polygonOffset"),H("scissor"),H("sample"),"vao"in Q&&(U.vao=Q.vao),U}function Do(Q,U){var H={},V={};return Object.keys(Q).forEach(function(O){var F=Q[O];if(Vt.isDynamic(F)){V[O]=Vt.unbox(F,O);return}else if(U&&Array.isArray(F)){for(var L=0;L<F.length;++L)if(Vt.isDynamic(F[L])){V[O]=Vt.unbox(F,O);return}}H[O]=F}),{dynamic:V,static:H}}var R0=Do(Ke.context||{},!0),ba=Do(Ke.uniforms||{},!0),Qs=Do(Ke.attributes||{},!1),C=Do(Ro(Ke),!1),ct={gpuTime:0,cpuTime:0,count:0},nt=We.compile(C,Qs,ba,R0,ct),ke=nt.draw,Lo=nt.batch,N=nt.scope,A=[];function G(Q){for(;A.length<Q;)A.push(null);return A}function K(Q,U){var H;if(_t&&S.raise("context lost"),typeof Q=="function")return N.call(this,null,Q,0);if(typeof U=="function")if(typeof Q=="number")for(H=0;H<Q;++H)N.call(this,null,U,H);else if(Array.isArray(Q))for(H=0;H<Q.length;++H)N.call(this,Q[H],U,H);else return N.call(this,Q,U,0);else if(typeof Q=="number"){if(Q>0)return Lo.call(this,G(Q|0),Q|0)}else if(Array.isArray(Q)){if(Q.length)return Lo.call(this,Q,Q.length)}else return ke.call(this,Q)}return e(K,{stats:ct,destroy:function(){nt.destroy()}})}var h0=ne.setFBO=W0({framebuffer:Vt.define.call(null,sm,"framebuffer")});function D0(Ke,Ro){var Do=0;We.procs.poll();var R0=Ro.color;R0&&(q.clearColor(+R0[0]||0,+R0[1]||0,+R0[2]||0,+R0[3]||0),Do|=L6),"depth"in Ro&&(q.clearDepth(+Ro.depth),Do|=N6),"stencil"in Ro&&(q.clearStencil(Ro.stencil|0),Do|=O6),S(!!Do,"called regl.clear with no buffer specified"),q.clear(Do)}function V0(Ke){if(S(typeof Ke=="object"&&Ke,"regl.clear() takes an object as input"),"framebuffer"in Ke)if(Ke.framebuffer&&Ke.framebuffer_reglType==="framebufferCube")for(var Ro=0;Ro<6;++Ro)h0(e({framebuffer:Ke.framebuffer.faces[Ro]},Ke),D0);else h0(Ke,D0);else D0(null,Ke)}function X0(Ke){S.type(Ke,"function","regl.frame() callback must be a function"),Et.push(Ke);function Ro(){var Do=im(Et,Ke);S(Do>=0,"cannot cancel a frame twice");function R0(){var ba=im(Et,R0);Et[ba]=Et[Et.length-1],Et.length-=1,Et.length<=0&&Bo()}Et[Do]=R0}return Eo(),{cancel:Ro}}function dn(){var Ke=ce.viewport,Ro=ce.scissor_box;Ke[0]=Ke[1]=Ro[0]=Ro[1]=0,Pt.viewportWidth=Pt.framebufferWidth=Pt.drawingBufferWidth=Ke[2]=Ro[2]=q.drawingBufferWidth,Pt.viewportHeight=Pt.framebufferHeight=Pt.drawingBufferHeight=Ke[3]=Ro[3]=q.drawingBufferHeight}function _n(){Pt.tick+=1,Pt.time=So(),dn(),We.procs.poll()}function O0(){oe.refresh(),dn(),We.procs.refresh(),Wt&&Wt.update()}function So(){return(Bt()-Ht)/1e3}O0();function Mn(Ke,Ro){S.type(Ro,"function","listener callback must be a function");var Do;switch(Ke){case"frame":return X0(Ro);case"lost":Do=eo;break;case"restore":Do=ko;break;case"destroy":Do=Ne;break;default:S.raise("invalid event, must be one of frame,lost,restore,destroy")}return Do.push(Ro),{cancel:function(){for(var R0=0;R0<Do.length;++R0)if(Do[R0]===Ro){Do[R0]=Do[Do.length-1],Do.pop();return}}}}var Yo=e(W0,{clear:V0,prop:Vt.define.bind(null,sm),context:Vt.define.bind(null,C6),this:Vt.define.bind(null,$6),draw:W0({}),buffer:function(Ke){return jt.create(Ke,R6,!1,!1)},elements:function(Ke){return be.create(Ke,!1)},texture:oe.create2D,cube:oe.createCube,renderbuffer:Lt.create,framebuffer:ne.create,framebufferCube:ne.createCube,vao:me.createVAO,attributes:st,frame:X0,on:Mn,limits:pt,hasExtension:function(Ke){return pt.extensions.indexOf(Ke.toLowerCase())>=0},read:fo,destroy:$o,_gl:q,_refresh:O0,poll:function(){_n(),Wt&&Wt.update()},now:So,stats:$t});return T.onDone(null,Yo),Yo}return P6})});var Js=Tt((UE,Lm)=>{"use strict";var Ca=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],$a=(t,e)=>[t[0]+e[0],t[1]+e[1],t[2]+e[2]],_a=(t,e)=>[t[0]*e,t[1]*e,t[2]*e],gh=(t,e)=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2],Nl=(t,e)=>[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]],Ju=t=>Math.hypot(t[0],t[1],t[2]),Dr=t=>{let e=Ju(t)||1;return[t[0]/e,t[1]/e,t[2]/e]};function cc(t,e){let o=t.length-1,r=Math.min(Math.max(e,0),1)*o,n=Math.min(o-1,Math.floor(r)),a=r-n,s=t[Math.max(0,n-1)],i=t[n],c=t[n+1],f=t[Math.min(o,n+2)],l=[0,0,0];for(let v=0;v<3;v++)l[v]=.5*(2*i[v]+(-s[v]+c[v])*a+(2*s[v]-5*i[v]+4*c[v]-f[v])*a*a+(-s[v]+3*i[v]-3*c[v]+f[v])*a*a*a);return l}function Q6(t,e){return cc(t.map(o=>[o,0,0]),e)[0]}function J6(t,e,o,r){let n={curMat:[0,0,0]},s={r:[1,0,0,0,1,0,0,0,1],t:[0,0,0],s:1},i=[];n.save=()=>{i.push({r:s.r.slice(),t:s.t.slice(),s:s.s})},n.restore=()=>{s=i.pop()};let c=(u,p)=>{let d=new Array(9);for(let h=0;h<3;h++)for(let g=0;g<3;g++)d[h*3+g]=u[h*3]*p[g]+u[h*3+1]*p[3+g]+u[h*3+2]*p[6+g];return d},f=u=>[s.r[0]*u[0]+s.r[1]*u[1]+s.r[2]*u[2],s.r[3]*u[0]+s.r[4]*u[1]+s.r[5]*u[2],s.r[6]*u[0]+s.r[7]*u[1]+s.r[8]*u[2]];n.translate=(u,p,d)=>{let h=f([u,p,d]);s.t=[s.t[0]+h[0]*s.s,s.t[1]+h[1]*s.s,s.t[2]+h[2]*s.s]},n.scale=u=>{s.s*=u},n.rotateY=u=>{let p=Math.cos(u),d=Math.sin(u);s.r=c(s.r,[p,0,d,0,1,0,-d,0,p])},n.vert=(u,p,d)=>{let h=d||n.curMat,g=f(u),m=Dr(f(p));return t.push(g[0]*s.s+s.t[0],g[1]*s.s+s.t[1],g[2]*s.s+s.t[2]),e.push(m[0],m[1],m[2]),r.push(h[0],h[1],h[2]),t.length/3-1};let l=u=>[t[u*3],t[u*3+1],t[u*3+2]],v=u=>[e[u*3],e[u*3+1],e[u*3+2]];return n.tri=(u,p,d)=>{let h=l(u),g=Nl(Ca(l(p),h),Ca(l(d),h)),m=$a($a(v(u),v(p)),v(d));gh(g,m)<0?o.push(u,d,p):o.push(u,p,d)},n.box=(u,p,d,h,g,m,x)=>{let y=[[[u,p,d],[h,p,d],[u,g,d],[h,g,d],[0,0,-1]],[[h,p,m],[u,p,m],[h,g,m],[u,g,m],[0,0,1]],[[u,p,m],[u,p,d],[u,g,m],[u,g,d],[-1,0,0]],[[h,p,d],[h,p,m],[h,g,d],[h,g,m],[1,0,0]],[[u,g,d],[h,g,d],[u,g,m],[h,g,m],[0,1,0]],[[u,p,m],[h,p,m],[u,p,d],[h,p,d],[0,-1,0]]];for(let _ of y){let M=n.vert(_[0],_[4],x),b=n.vert(_[1],_[4],x),k=n.vert(_[2],_[4],x),E=n.vert(_[3],_[4],x);n.tri(M,b,k),n.tri(b,E,k)}},n.surface=(u,p,d,h)=>{h=h||{};let g=.001,m=M=>Math.min(1,Math.max(0,M)),x=[],y=[];for(let M=0;M<=p;M++){let b=[],k=[];for(let E=0;E<=d;E++){let z=M/p,P=E/d,R=u(z,P),B=Math.min(1-g,Math.max(g,z)),$=h.wrapV?P:Math.min(1-g,Math.max(g,P)),D=Ca(u(m(B+g),$),u(m(B-g),$)),it=h.wrapV?$+g:m($+g),St=h.wrapV?$-g:m($-g),yt=Ca(u(B,it),u(B,St)),mt=Nl(D,yt);Ju(mt)<1e-14&&(mt=h.inside?Ca(R,h.inside(z,P)):[0,1,0]),mt=Dr(mt),h.inside&&gh(mt,Ca(R,h.inside(z,P)))<0&&(mt=_a(mt,-1));let zt=h.mat?h.mat(z,P,R):null;b.push(n.vert(R,mt,zt)),h.double&&k.push(n.vert(R,_a(mt,-1),zt))}x.push(b),y.push(k)}let _=M=>{for(let b=0;b<p;b++)for(let k=0;k<d;k++){let E=M[b][k],z=M[b+1][k],P=M[b][k+1],R=M[b+1][k+1];n.tri(E,z,P),n.tri(z,R,P)}};_(x),h.double&&_(y)},n.ellipsoid=(u,p,d,h,g)=>{g=g||{};let m=g.warp||null;n.surface((x,y)=>{let _=x*Math.PI,M=y*Math.PI*2,b=m?m(x,y):1;return[u[0]+p[0]*b*Math.sin(_)*Math.cos(M),u[1]+p[1]*b*Math.cos(_),u[2]+p[2]*b*Math.sin(_)*Math.sin(M)]},d||10,h||14,{wrapV:!0,inside:()=>u,mat:g.mat})},n.tube=(u,p,d,h,g)=>{g=g||{};let m=40,x=[],y=null;for(let b=0;b<=m;b++){let k=b/m,E=cc(u,Math.max(0,k-.01)),z=cc(u,Math.min(1,k+.01)),P=Dr(Ca(z,E)),R;if(y)R=Dr(Ca(y,_a(P,gh(y,P))));else{let B=Math.abs(P[1])<.9?[0,1,0]:[1,0,0];R=Dr(Nl(P,B))}x.push({N:R,B:Dr(Nl(P,R))}),y=R}let _=b=>{let k=Math.min(Math.max(b,0),1)*m,E=Math.min(m-1,Math.floor(k)),z=k-E,P=x[E],R=x[E+1];return{N:Dr($a(_a(P.N,1-z),_a(R.N,z))),B:Dr($a(_a(P.B,1-z),_a(R.B,z)))}},M=g.squash||[1,1];n.surface((b,k)=>{let E=cc(u,b),z=_(b),P=p(b),R=k*Math.PI*2;return $a(E,$a(_a(z.N,Math.cos(R)*P*M[0]),_a(z.B,Math.sin(R)*P*M[1])))},d||12,h||8,{wrapV:!0,inside:b=>cc(u,b),mat:g.mat})},n.lathe=(u,p,d,h,g)=>{g=g||{};let m=[];for(let x=0;x<u.length-1;x++){let y=u[x+1][0]-u[x][0],_=u[x+1][1]-u[x][1];m.push(Dr([_,-y,0]))}for(let x=0;x<u.length-1;x++){let y=u[x],_=u[x+1],M=x===0||y[2]===1,b=x===u.length-2||_[2]===1,k=M?m[x]:Dr($a(m[x-1],m[x])),E=b?m[x]:Dr($a(m[x],m[x+1])),z=[],P=[];for(let R=0;R<=h;R++){let B=R/h*Math.PI*2,$=Math.cos(B),D=Math.sin(B),it=g.mat?g.mat(B,y[1]):null,St=g.mat?g.mat(B,_[1]):null;z.push(n.vert([p+y[0]*$,y[1],d+y[0]*D],[k[0]*$,k[1],k[0]*D],it)),P.push(n.vert([p+_[0]*$,_[1],d+_[0]*D],[E[0]*$,E[1],E[0]*D],St))}for(let R=0;R<h;R++)n.tri(z[R],z[R+1],P[R]),n.tri(z[R+1],P[R+1],P[R])}},n}Lm.exports={createBuilder:J6,catmull:cc,curve1:Q6,sub:Ca,add:$a,mul:_a,dot:gh,cross:Nl,norm:Dr,len:Ju}});var Cm=Tt((BE,Rm)=>{"use strict";var{norm:xh,add:yh,mul:as,sub:t_,cross:Nm}=Js(),Om=Math.PI*2,e_=(t,e,o)=>{let r=Math.min(1,Math.max(0,(o-t)/(e-t)));return r*r*(3-2*r)};function o_(t){let e=t>>>0;return()=>{e|=0,e=e+1831565813|0;let o=Math.imul(e^e>>>15,1|e);return o=o+Math.imul(o^o>>>7,61|o)^o,((o^o>>>14)>>>0)/4294967296}}function n_(t,e,o,r,n,a){let s=(u,p)=>[7,u*a,p];t.curMat=[0,0,0],t.box(e-a*1.36,r,o-a*1.36,e+a*1.36,r+.22,o+a*1.36),t.lathe([[a*1.24,r+.22,1],[a*1.3,r+.27],[a*1.31,r+.32],[a*1.26,r+.37,1],[a*1.1,r+.4],[a*1.14,r+.44,1],[a*1.18,r+.47],[a*1.1,r+.52,1],[a*.96,r+.55]],e,o,56,{mat:s});let i=r+.55,c=n-i,f=20,l=6,v=a*.075;return t.surface((u,p)=>{let d=i+u*c,h=a*(.96-.12*u),g=p*Om,m=p*f%1,x=h-v*4*m*(1-m);return[e+x*Math.cos(g),d,o+x*Math.sin(g)]},10,f*l,{wrapV:!0,inside:u=>[e,i+u*c,o],mat:(u,p)=>[7,p*Om*a,i+u*c]}),t.lathe([[a*.8,n-.02,1],[a*.9,n+.02],[a*.9,n+.07,1],[a*.82,n+.09,1],[a*.86,n+.13],[a*1.06,n+.2],[a*1.22,n+.28],[a*1.28,n+.33,1]],e,o,56,{mat:s}),t.curMat=[0,0,0],t.box(e-a*1.42,n+.33,o-a*1.42,e+a*1.42,n+.53,o+a*1.42),n+.53}function r_(t,e,o){t.curMat=[1,0,0],t.lathe([[e*1.1,0,1],[e*1.1,o*.14,1],[e*1.04,o*.14,1],[e*1.04,o*.2],[e*.97,o*.26,1],[e*.95,o*.26,1],[e*.95,o*.8,1],[e*.98,o*.8,1],[e*1.03,o*.86],[e*1.05,o*.92,1],[e*1.05,o,1],[e*.5,o,1],[0,o]],0,0,72)}function a_(t,e,o,r,n){t.save(),t.translate(e,0,o),r_(t,r,n),t.restore()}function s_(t,e,o,r,n,a){let s=o_(r),i=a?xh([a[0],0,a[1]]):null;t.save(),t.translate(e,0,o),t.scale(n||1),t.curMat=[3,0,0],t.lathe([[.17,0,1],[.2,.02],[.28,.13],[.36,.3],[.395,.47],[.38,.62],[.32,.74],[.29,.8],[.292,.82,1],[.325,.84],[.335,.88,1],[.3,.905,1],[.275,.895,1],[.272,.85]],0,0,48),t.curMat=[5,0,0],t.lathe([[.272,.85,1],[.1,.868],[0,.872]],0,0,24);let c=11,f=.86;for(let l=0;l<c;l++){let v=l>=c-2,u=l*2.399963+s()*.5,p=[Math.cos(u),0,Math.sin(u)],d=[-Math.sin(u),0,Math.cos(u)],h=l*.618%1,g=v?.06+s()*.06:.12+.62*h,m=1;if(i){let mt=p[0]*i[0]+p[2]*i[2];m=.25+.75*e_(-.7,.5,mt),g*=m}let x=v?1.1+s()*.25:.85+.55*(1-h*.55)+s()*.15,y=v?1+s()*.2:.95+s()*.28,_=v?.055:.215+s()*.05,M=.04+s()*.05,b=[p[0]*M,f,p[2]*M],k=[b[0]+p[0]*Math.sin(g)*x*.92,b[1]+Math.cos(g)*x,b[2]+p[2]*Math.sin(g)*x*.92],E=[b[0]+p[0]*Math.sin(g*.5)*x*.45,b[1]+x*.5,b[2]+p[2]*Math.sin(g*.5)*x*.45];t.curMat=[4,0,0],t.tube([b,E,k],mt=>.02-.008*mt,8,7);let z=24,P=g*.9+.05,R=g+(v?.12:(.95+.45*h)*(.35+.65*m)),B=[k],$=[],D=k;for(let mt=0;mt<z;mt++){let zt=mt/z,It=P+(R-P)*zt*zt,re=[p[0]*Math.sin(It),Math.cos(It),p[2]*Math.sin(It)];$.push(re),D=yh(D,as(re,y/z)),B.push(D)}$.push($[$.length-1]);let it=mt=>{let zt=mt*z,It=Math.min(z-1,Math.floor(zt)),re=zt-It;return yh(as(B[It],1-re),as(B[It+1],re))},St=mt=>{let zt=mt*z,It=Math.min(z,Math.floor(zt)),re=Math.min(z,It+1),Ae=zt-It;return xh(yh(as($[It],1-Ae),as($[re],Ae)))},yt=(s()-.5)*.5;t.curMat=[2,0,0],t.surface((mt,zt)=>{let It=zt*2-1,re=it(mt),Ae=St(mt),lo=yt*mt,ge=yh(as(d,Math.cos(lo)),as(Nm(Ae,d),Math.sin(lo)));ge=xh(t_(ge,as(Ae,ge[0]*Ae[0]+ge[1]*Ae[1]+ge[2]*Ae[2])));let $e=xh(Nm(ge,Ae)),He=_*Math.pow(Math.sin(Math.PI*Math.pow(mt,.72)),.85),et=.3*He*Math.abs(It)+.012*Math.sin(mt*40+It*2)*Math.abs(It)*(v?0:1),j=-.1*He*It*It*It*It,lt=et+j;return[re[0]+ge[0]*It*He+$e[0]*lt,re[1]+ge[1]*It*He+$e[1]*lt,re[2]+ge[2]*It*He+$e[2]*lt]},14,8,{double:!0,mat:(mt,zt)=>[2,zt*2-1,mt]})}t.restore()}Rm.exports={addFlutedColumn:n_,addStatue:a_,addPlant:s_}});var ss=Tt((jE,qm)=>{"use strict";var Dt={xc:7,r:2.5,spring:4.7};Dt.x0=Dt.xc-Dt.r;Dt.x1=Dt.xc+Dt.r;Dt.top=Dt.spring+Dt.r;var Yn=.06,y0=.1,$m=.08,bh=Dt.r,wh=[Dt.x0+bh/3,Dt.x0+2*bh/3,Dt.xc+bh/3,Dt.xc+2*bh/3],lc=.28,td=[.95,1.65,2.35,3.05,3.75],Pm=[1.05,1.8],Ol=[8,0,0],_r=[0,0,0];function Fr(t,e,o,r,n,a,s,i){t.box(Math.min(e,n),Math.min(o,a),Math.min(r,s),Math.max(e,n),Math.max(o,a),Math.max(r,s),i)}function fc(t,e,o,r,n,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),f=t.vert(r,a,s),l=t.vert(n,a,s);t.tri(i,c,f),t.tri(i,f,l)}function _h(t,e,o,r,n,a,s=48,i=0,c=Math.PI){let f=(l,v,u)=>[Dt.xc+v*Math.cos(l),Dt.spring+v*Math.sin(l),u];for(let l=0;l<s;l++){let v=i+(c-i)*l/s,u=i+(c-i)*(l+1)/s,p=(v+u)/2;fc(t,f(v,e,n),f(u,e,n),f(u,o,n),f(v,o,n),[0,0,1],a),fc(t,f(v,o,r),f(u,o,r),f(u,e,r),f(v,e,r),[0,0,-1],a),fc(t,f(v,e,r),f(u,e,r),f(u,e,n),f(v,e,n),[-Math.cos(p),-Math.sin(p),0],a),fc(t,f(u,o,r),f(v,o,r),f(v,o,n),f(u,o,n),[Math.cos(p),Math.sin(p),0],a)}}function i_(t){let r=a=>[Dt.xc+Dt.r*Math.cos(a),Dt.spring+Dt.r*Math.sin(a)],n=a=>{let s=Math.cos(a),i=Math.sin(a),c=Math.abs(s)>1e-6?Dt.r/Math.abs(s):1/0,f=i>1e-6?(8-Dt.spring)/i:1/0,l=Math.min(c,f);return[Math.min(Dt.x1,Math.max(Dt.x0,Dt.xc+s*l)),Math.min(8,Dt.spring+i*l)]};for(let a=0;a<48;a++){let s=Math.PI*a/48,i=Math.PI*(a+1)/48,c=r(s),f=r(i),l=n(s),v=n(i);for(let[p,d]of[[.35,1],[-.35,-1]])fc(t,[c[0],c[1],p],[f[0],f[1],p],[v[0],v[1],p],[l[0],l[1],p],[0,0,d],_r);let u=(s+i)/2;fc(t,[c[0],c[1],-.35],[f[0],f[1],-.35],[f[0],f[1],.35],[c[0],c[1],.35],[-Math.cos(u),-Math.sin(u),0],_r)}}function c_(t){Fr(t,-.35,0,-.35,Dt.x0,8,.35,_r),Fr(t,Dt.x1,0,-.35,14+.35,8,.35,_r),i_(t),Im(t)}function Im(t){Fr(t,Dt.x0-.32,.3,.35,Dt.x0,Dt.spring,.35+.07,_r),Fr(t,Dt.x1,.3,.35,Dt.x1+.32,Dt.spring,.35+.07,_r),Fr(t,Dt.x0-.32-.05,0,.35,Dt.x0,.3,.35+.07+.04,_r),Fr(t,Dt.x1,0,.35,Dt.x1+.32+.05,.3,.35+.07+.04,_r),Fr(t,Dt.x0-.32-.06,Dt.spring-.12,.35,Dt.x0,Dt.spring,.35+.07+.05,_r),Fr(t,Dt.x1,Dt.spring-.12,.35,Dt.x1+.32+.06,Dt.spring,.35+.07+.05,_r),_h(t,Dt.r,Dt.r+.32,.35,.35+.07,_r),_h(t,Dt.r+.32,Dt.r+.32+.06,.35,.35+.07+.03,_r),Fr(t,Dt.xc-.22,Dt.top-.08,.35,Dt.xc+.22,Dt.top+.32+.12,.35+.07+.06,_r)}function l_(t,e){e=e||"all";let o=e==="all",r=o||e==="fixed",n=-$m/2,a=$m/2,s=(u,p,d,h,g=0)=>Fr(t,u-g,p,n,d+g,h,a,Ol),i=u=>Dt.spring+Math.sqrt(Math.max(0,Dt.r*Dt.r-(u-Dt.xc)*(u-Dt.xc))),c=e==="right"?Dt.xc:Dt.x0,f=e==="left"?Dt.xc:Dt.x1,l=u=>o||e==="left"&&u<Dt.xc||e==="right"&&u>Dt.xc,v=o?null:Dt.spring-.06;if(r){s(Dt.x0,0,Dt.x0+y0,Dt.spring),s(Dt.x1-y0,0,Dt.x1,Dt.spring),_h(t,Dt.r-y0,Dt.r,n,a,Ol,64),s(Dt.x0,0,Dt.x1,.05),s(Dt.x0,Dt.spring-.06,Dt.x1,Dt.spring+.06);for(let u of Pm)_h(t,u-Yn/2,u+Yn/2,n,a,Ol,48)}if(o){s(Dt.x0,0,Dt.x1,lc),s(Dt.xc-y0/2,0,Dt.xc+y0/2,Dt.top-y0*.5);for(let u of wh)s(u-Yn/2,lc,u+Yn/2,i(u)-y0*.5);for(let u of td)s(Dt.x0,u-Yn/2,Dt.x1,u+Yn/2)}else if(e==="fixed"){s(Dt.xc-y0/2,Dt.spring+.06,Dt.xc+y0/2,Dt.top-y0*.5);for(let u of wh)s(u-Yn/2,Dt.spring+.06,u+Yn/2,i(u)-y0*.5)}else{let u=e==="left"?Dt.x0+y0:Dt.x1-y0;s(Math.min(u,u+(e==="left"?y0*.8:-y0*.8)),.05,Math.max(u,u+(e==="left"?y0*.8:-y0*.8)),v),s(c,.05,f,lc),s(c,v-.07,f,v);let p=e==="left"?Dt.xc-y0/2:Dt.xc;s(p,.05,p+y0/2,v);for(let d of wh)l(d)&&s(d-Yn/2,lc,d+Yn/2,v-.07);for(let d of td)s(c,d-Yn/2,f,d+Yn/2)}for(let u of[-1,1]){let p=Dt.xc+u*.16;l(p)&&(Fr(t,p-.02,1.05,a,p+.02,1.13,a+.06,Ol),Fr(t,p-(u>0?0:.14),1.07,a+.05,p+(u>0?.14:0),1.11,a+.08,Ol))}}function f_(t){t=t||"all";let e=[],o=0,{x0:r,x1:n,xc:a,r:s,spring:i}=Dt;if(t!=="fixed"){let f=t==="right"?a:r,l=t==="left"?a:n;if(e.push([f,0,o],[l,0,o],[l,i,o],[f,0,o],[l,i,o],[f,i,o]),t!=="all")return e}let c=48;for(let f=0;f<c;f++){let l=Math.PI*f/c,v=Math.PI*(f+1)/c;e.push([a,i,o],[a+s*Math.cos(l),i+s*Math.sin(l),o],[a+s*Math.cos(v),i+s*Math.sin(v),o])}return e}var e0=t=>t.toFixed(4);function h_(){let t=wh.map(r=>`vb = max(vb, barCover(abs(q.x - ${e0(r)}), ${e0(Yn/2)}, soft));`).join(`
		`),e=td.map(r=>`hb = max(hb, barCover(abs(q.y - ${e0(r)}), ${e0(Yn/2)}, soft));`).join(`
		`),o=Pm.map(r=>`ab = max(ab, barCover(abs(rr - ${e0(r)}), ${e0(Yn/2)}, soft));`).join(`
		`);return`
	float barCover(float d, float hw, float soft) {
		return 1.0 - smoothstep(hw - soft, hw + soft, d);
	}

	// how open the doorway is at a point (x, y) on a plane, 0..1
	float doorOpen(vec2 q, float soft) {
		float side = smoothstep(${e0(Dt.x0)} - soft, ${e0(Dt.x0)} + soft, q.x)
		           * (1.0 - smoothstep(${e0(Dt.x1)} - soft, ${e0(Dt.x1)} + soft, q.x));
		float above = smoothstep(-soft, soft, q.y);
		float rr = length(q - vec2(${e0(Dt.xc)}, ${e0(Dt.spring)}));
		float arch = q.y < ${e0(Dt.spring)} ? 1.0 : 1.0 - smoothstep(${e0(Dt.r)} - soft, ${e0(Dt.r)} + soft, rr);
		return side * above * arch;
	}

	// light that reaches floor point p through the door, 0..1
	float doorLight(vec3 p, vec3 toLight) {
		if (p.z < 0.3 || toLight.z > -0.01) return 0.0;
		// through the inner face of the wall
		float tIn = (${e0(.35)} - p.z) / toLight.z;
		float tMid = (0.0 - p.z) / toLight.z;
		float tOut = (${e0(-.35)} - p.z) / toLight.z;
		vec2 qIn = (p + toLight * tIn).xy;
		vec2 q = (p + toLight * tMid).xy;
		vec2 qOut = (p + toLight * tOut).xy;
		float dist = length(toLight * tMid);
		float soft = 0.006 + 0.016 * dist;
		float open = doorOpen(qIn, soft) * doorOpen(qOut, soft);
		if (open <= 0.0) return 0.0;

		// the frame: outer jambs, arched head, transom, rails, stiles, bars
		float rr = length(q - vec2(${e0(Dt.xc)}, ${e0(Dt.spring)}));
		float vb = barCover(abs(q.x - ${e0(Dt.xc)}), ${e0(y0/2)}, soft);
		${t}
		float hb = barCover(abs(q.y - ${e0(Dt.spring)}), 0.06, soft);
		hb = max(hb, 1.0 - smoothstep(${e0(lc)} - soft, ${e0(lc)} + soft, q.y));
		float hRows = 0.0;
		{
			float hb2 = 0.0;
			${e.replace(/hb = max\(hb,/g,"hb2 = max(hb2,")}
			hRows = q.y < ${e0(Dt.spring)} ? hb2 : 0.0;
		}
		float ab = 0.0;
		${o}
		ab = q.y > ${e0(Dt.spring)} ? ab : 0.0;
		float frame = max(
			barCover(abs(q.x - ${e0(Dt.x0+y0/2)}), ${e0(y0/2)}, soft),
			barCover(abs(q.x - ${e0(Dt.x1-y0/2)}), ${e0(y0/2)}, soft));
		frame = q.y < ${e0(Dt.spring)} ? frame : barCover(abs(rr - ${e0(Dt.r-y0/2)}), ${e0(y0/2)}, soft);
		float cover = max(max(max(vb, hb), max(hRows, ab)), frame);
		return open * (1.0 - cover * 0.92);
	}`}qm.exports={addEntranceWall:c_,addSurround:Im,addFrames:l_,glassPanes:f_,doorLightGLSL:h_,DOOR:Dt,WALL:.35}});var uc=Tt((WE,Bm)=>{"use strict";var ei=1.1583333333333334,oi=(13.05-8*.16)/9,od=ei+.16,nd=oi+.16,Ia=14/2-7.75/2,Mr=15,Rl=Ia+7.75,Pa=Mr+13.05,kr=.3,qa={y:8+.18,inset:.15},ti={y:8+.36,inset:kr},rd=8+.2,Cl=8+.62,ad=8+.9,sd=.016,Hm=.28,Um=.66,u_=(()=>{let t=[-.15,1,.3],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>o/e)})(),d_=(()=>{let t=[.42,1,-.32],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>o/e)})(),p_=[9,0,0],kn=[10,0,0];function hc(t,e,o,r,n,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),f=t.vert(r,a,s),l=t.vert(n,a,s);t.tri(i,c,f),t.tri(i,f,l)}function Kn(t,e,o,r,n,a,s){hc(t,[e,a,o],[r,a,o],[r,a,n],[e,a,n],[0,-1,0],s)}function ed(t,e,o,r,n,a,s,i){hc(t,[e,a,o],[r,a,o],[r,s,o],[e,s,o],[0,0,1],i),hc(t,[r,a,n],[e,a,n],[e,s,n],[r,s,n],[0,0,-1],i),hc(t,[e,a,n],[e,a,o],[e,s,o],[e,s,n],[1,0,0],i),hc(t,[r,a,o],[r,a,n],[r,s,n],[r,s,o],[-1,0,0],i)}function Dm(t,e,o,r,n){Kn(t,e[0],e[1],e[2],o[1],r,n),Kn(t,e[0],o[3],e[2],e[3],r,n),Kn(t,e[0],o[1],o[0],o[3],r,n),Kn(t,o[2],o[1],e[2],o[3],r,n)}var Fm=t=>Ia+t*od,Gm=t=>Mr+t*nd;function v_(t,e,o=48){let r=[Ia-kr,Mr-kr,Rl+kr,Pa+kr],n=(f,l)=>[f[0]+l,f[1]+l,f[2]-l,f[3]-l],a=n(r,qa.inset),s=n(r,ti.inset);Kn(t,0,0,14,r[1],8,e),Kn(t,0,r[3],14,o,8,e),Kn(t,0,r[1],r[0],r[3],8,e),Kn(t,r[2],r[1],14,r[3],8,e);let i=.06,c=.06;t.box(r[0]-i,8-c,r[1]-i,r[2]+i,8,r[1],kn),t.box(r[0]-i,8-c,r[3],r[2]+i,8,r[3]+i,kn),t.box(r[0]-i,8-c,r[1],r[0],8,r[3],kn),t.box(r[2],8-c,r[1],r[2]+i,8,r[3],kn),ed(t,...r.slice(0,2),...r.slice(2),8,qa.y,kn),Dm(t,r,a,qa.y,kn),ed(t,...a.slice(0,2),...a.slice(2),qa.y,ti.y,kn),Dm(t,a,s,ti.y,kn);for(let f=1;f<6;f++){let l=Fm(f)-.16;t.box(l,rd,Mr,l+.16,ti.y,Pa,kn)}for(let f=1;f<9;f++){let l=Gm(f)-.16;t.box(Ia,rd,l,Rl,ti.y,l+.16,kn)}for(let f=0;f<9;f++)for(let l=0;l<6;l++){let v=Fm(l),u=Gm(f);ed(t,v,u,v+ei,u+oi,ti.y,ad,kn),Kn(t,v,u,v+ei,u+oi,ad,p_),m_(t,v+ei/2,u+oi/2,ei/2,oi/2)}}function m_(t,e,o,r,n){let a=Cl,s=sd;Kn(t,e-r,o-s,e+r,o+s,a,kn),Kn(t,e-s,o-n,e+s,o+n,a,kn);for(let i of[1,-1]){let c=Math.hypot(r,n),f=r/c,l=i*n/c,v=-l*s,u=f*s;hc(t,[e-f*c+v,a,o-l*c+u],[e+f*c+v,a,o+l*c+u],[e+f*c-v,a,o+l*c-u],[e-f*c-v,a,o-l*c-u],[0,-1,0],kn)}for(let i of[Hm,Um]){let c=i*r,f=i*n;Kn(t,e-c-s,o-f-s,e+c+s,o-f+s,a,kn),Kn(t,e-c-s,o+f-s,e+c+s,o+f+s,a,kn),Kn(t,e-c-s,o-f+s,e-c+s,o+f-s,a,kn),Kn(t,e+c-s,o-f+s,e+c+s,o+f-s,a,kn)}}var go=t=>t.toFixed(4);function g_(){return`
	// by day the sun, high and a little towards the entrance; by night
	// the moon, lower and from the other side, so its squares of light
	// reach across the floor to the foot of the wall. (When the light is
	// switched, the squares slide from one to the other.)
	const vec3 SKY_SUN_DAY = vec3(${u_.map(go).join(", ")});
	const vec3 SKY_MOON = vec3(${d_.map(go).join(", ")});
	vec3 skySun() { return normalize(mix(SKY_SUN_DAY, SKY_MOON, night)); }
	#define SKY_SUN skySun()

	float rectOpen(vec2 q, vec4 r, float soft) {
		vec2 lo = smoothstep(r.xy - soft, r.xy + soft, q);
		vec2 hi = 1.0 - smoothstep(r.zw - soft, r.zw + soft, q);
		return lo.x * lo.y * hi.x * hi.y;
	}

	// inside a pane (not on a beam)? 0..1
	float paneOpen(vec2 q, float soft) {
		vec2 rel = q - vec2(${go(Ia)}, ${go(Mr)});
		vec2 pitch = vec2(${go(od)}, ${go(nd)});
		vec2 cell = floor(rel / pitch);
		if (cell.x < 0.0 || cell.y < 0.0 || cell.x > ${go(5)} || cell.y > ${go(8)}) return 0.0;
		vec2 loc = rel - cell * pitch;
		return rectOpen(loc, vec4(0.0, 0.0, ${go(ei)}, ${go(oi)}), soft);
	}

	float barCov(float d, float soft) {
		return 1.0 - smoothstep(${go(sd)} - soft, ${go(sd)} + soft, d);
	}

	// sunlight reaching point p through the skylight, 0..1
	float skylightAt(vec3 p) {
		if (p.y > ${go(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q0 = (p + L * ((${go(8)} - p.y) / L.y)).xz;
		vec2 q1 = (p + L * ((${go(qa.y)} - p.y) / L.y)).xz;
		vec2 qb = (p + L * ((${go(rd)} - p.y) / L.y)).xz;
		vec2 q2 = (p + L * ((${go(ti.y)} - p.y) / L.y)).xz;
		float tG = (${go(Cl)} - p.y) / L.y;
		vec2 qg = (p + L * tG).xz;
		vec2 qt = (p + L * ((${go(ad)} - p.y) / L.y)).xz;
		float soft = 0.004 + 0.007 * tG;
		float open = rectOpen(q0, vec4(${go(Ia-kr)}, ${go(Mr-kr)}, ${go(Rl+kr)}, ${go(Pa+kr)}), soft)
		           * rectOpen(q1, vec4(${go(Ia-kr+qa.inset)}, ${go(Mr-kr+qa.inset)}, ${go(Rl+kr-qa.inset)}, ${go(Pa+kr-qa.inset)}), soft)
		           * paneOpen(qb, soft) * paneOpen(q2, soft) * paneOpen(qt, soft);
		if (open <= 0.0) return 0.0;
		// the glazing, measured from the centre of this pane
		vec2 rel = qg - vec2(${go(Ia)}, ${go(Mr)});
		vec2 pitch = vec2(${go(od)}, ${go(nd)});
		vec2 paneHalf = vec2(${go(ei/2)}, ${go(oi/2)});
		vec2 c = rel - floor(rel / pitch) * pitch - paneHalf;
		vec2 ac = abs(c);
		vec2 an = ac / paneHalf;                       // 0 at the centre, 1 at the pane's edge
		float hm = min(paneHalf.x, paneHalf.y);
		float ring = max(an.x, an.y);
		float cover = max(barCov(ac.x, soft), barCov(ac.y, soft));
		cover = max(cover, barCov(abs(an.x - an.y) * hm * 0.7071, soft));
		cover = max(cover, barCov(abs(ring - ${go(Hm)}) * hm, soft));
		cover = max(cover, barCov(abs(ring - ${go(Um)}) * hm, soft));
		return open * (1.0 - cover * 0.9);
	}

	// the same light for the beams in the air: the whole opening glows a
	// little, and the panes and bars show in it, softly
	float skylightVol(vec3 p) {
		if (p.y > ${go(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q = (p + L * ((${go(Cl)} - p.y) / L.y)).xz;
		float open = rectOpen(q, vec4(${go(Ia)}, ${go(Mr)}, ${go(Rl)}, ${go(Pa)}), 0.25);
		if (open <= 0.0) return 0.0;
		return open * (0.13 + 0.87 * skylightAt(p));
	}

	// light thrown back up by the bright squares on the floor: strongest
	// on what stands beside them and faces them (the lower walls, the
	// pillars, the statues, the ceiling above), fading with distance
	float skylightBounce(vec3 p, vec3 n) {
		if (p.x > 14.2 || p.x < -0.4) return 0.0;
		vec3 L = SKY_SUN;
		vec2 c = vec2(${go(14/2)}, ${go((Mr+Pa)/2)}) - L.xz * (${go(Cl)} / L.y);
		vec2 d = max(abs(p.xz - c) - vec2(${go(7.75/2)}, ${go(13.05/2)}), 0.0);
		float fall = 1.0 / (1.0 + 0.09 * (dot(d, d) + p.y * p.y * 0.6));
		vec3 to = normalize(vec3(c.x, -0.4, c.y) - p);
		return fall * (0.3 + 0.7 * max(dot(n, to), 0.0));
	}

	// a soft daylight glow under the lantern
	float skylightGlow(vec3 p) {
		float z = smoothstep(${go(Mr-3)}, ${go(Mr+2)}, p.z)
		        * (1.0 - smoothstep(${go(Pa-2)}, ${go(Pa+3)}, p.z));
		float x = 1.0 - 0.35 * smoothstep(${go(7.75/2)}, ${go(14/2)}, abs(p.x - ${go(14/2)}));
		return z * x;
	}`}Bm.exports={addSkylight:v_,skylightGLSL:g_,Z_START:Mr,Z_END:Pa,GLASS_Y:Cl,HEIGHT:8}});var On=Tt((VE,Ym)=>{"use strict";var pc=ss(),fd=8,b0=.35,de={x0:13.65,x1:38.12,z0:41,z1:47.2,zc:44.1,hallEnd:50.65,spring:5.6,crown:fd},jm=(de.z1-de.z0)/2,id=de.crown-de.spring,ld=(id*id+jm*jm)/(2*id),hd=de.crown-ld;function dc(t){let e=t-de.zc;return hd+Math.sqrt(Math.max(0,ld*ld-e*e))}var to={first:17.43,pitch:4.4,count:5,halfW:1.2,sill:.75,spring:4.3},na=Array.from({length:to.count},(t,e)=>to.first+e*to.pitch),Vm=na.slice(1).map(t=>t-to.pitch/2),x_=[na[0],na[2],na[4]],kh=[na[1],na[3]],lr={r:1.3,sill:.62,spring:3.3},a0=[0,0,0],$l=[11,0,0],is=[10,0,0],Pl=[8,0,0];function pn(t,e,o,r,n,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),f=t.vert(r,a,s),l=t.vert(n,a,s);t.tri(i,c,f),t.tri(i,f,l)}function fr(t,e,o,r,n,a,s,i){t.box(Math.min(e,n),Math.min(o,a),Math.min(r,s),Math.max(e,n),Math.max(o,a),Math.max(r,s),i)}function Il(t,e){let{u0:o,u1:r,w0:n,w1:a,top:s,holes:i,mat:c}=e,f=new Set([o,r]);for(let h of i){f.add(h.u0),f.add(h.u1);let g=Math.max(8,Math.ceil((h.u1-h.u0)/(h.step||.08)));for(let m=1;m<g;m++)f.add(h.u0+(h.u1-h.u0)*m/g)}for(let h of e.cuts||[])f.add(h);let l=e.topStep||.5;for(let h=o;h<r;h+=l)f.add(h);let v=[...f].filter(h=>h>=o-1e-9&&h<=r+1e-9).sort((h,g)=>h-g),u=(h,g)=>h.bot?h.bot(g):h.bottom,p=(h,g)=>{let m=s(h),x=g.map(M=>[Math.max(0,u(M,h)),Math.min(M.head(h),m)]).filter(M=>M[1]>M[0]).sort((M,b)=>M[0]-b[0]),y=[],_=0;for(let M of x)M[0]>_+1e-6&&y.push([_,M[0]]),_=Math.max(_,M[1]);return m>_+1e-6&&y.push([_,m]),y},d=(h,g,m)=>[h,g,m];for(let h=0;h<v.length-1;h++){let g=v[h],m=v[h+1],x=(g+m)/2,y=i.filter(z=>x>z.u0&&x<z.u1),_=y.length?Math.max(g,Math.max(...y.map(z=>z.u0))+1e-7):g,M=y.length?Math.min(m,Math.min(...y.map(z=>z.u1))-1e-7):m,b=p(_,y),k=p(M,y),E=Math.min(b.length,k.length);for(let z=0;z<E;z++){let[P,R]=b[z],[B,$]=k[z];R-P<1e-6&&$-B<1e-6||(pn(t,d(g,P,a),d(m,B,a),d(m,$,a),d(g,R,a),[0,0,1],c),e.frontOnly||pn(t,d(m,B,n),d(g,P,n),d(g,R,n),d(m,$,n),[0,0,-1],c))}}e.noEnds||(pn(t,d(o,0,n),d(o,0,a),d(o,s(o),a),d(o,s(o),n),[-1,0,0],c),pn(t,d(r,0,a),d(r,0,n),d(r,s(r),n),d(r,s(r),a),[1,0,0],c));for(let h of i){if(h.noReveal)continue;let g=h.mat||e.revealMat||c,m=Math.max(0,u(h,h.u0+1e-7)),x=Math.max(0,u(h,h.u1-1e-7)),y=Math.min(h.head(h.u0+1e-7),s(h.u0)),_=Math.min(h.head(h.u1-1e-7),s(h.u1));y>m+1e-6&&pn(t,d(h.u0,m,a),d(h.u0,m,n),d(h.u0,y,n),d(h.u0,y,a),[1,0,0],g),_>x+1e-6&&pn(t,d(h.u1,x,n),d(h.u1,x,a),d(h.u1,_,a),d(h.u1,_,n),[-1,0,0],g);let M=Math.max(8,Math.ceil((h.u1-h.u0)/(h.step||.06)));for(let b=0;b<M;b++){let k=h.u0+(h.u1-h.u0)*b/M,E=h.u0+(h.u1-h.u0)*(b+1)/M,z=Math.max(k,h.u0+1e-7),P=Math.min(E,h.u1-1e-7),R=Math.min(h.head(z),s(k)),B=Math.min(h.head(P),s(E));if(!(R>=s(k)-1e-6&&B>=s(E)-1e-6)){let it=E-k,St=B-R,yt=Math.hypot(it,St)||1;pn(t,d(k,R,n),d(E,B,n),d(E,B,a),d(k,R,a),[St/yt,-it/yt,0],g)}let $=u(h,z),D=u(h,P);if($>1e-6||D>1e-6){let it=E-k,St=D-$,yt=Math.hypot(it,St)||1;pn(t,d(E,D,n),d(k,$,n),d(k,$,a),d(E,D,a),[-St/yt,it/yt,0],g)}}}}var cd=(t,e,o)=>r=>{let n=r-t;return o+Math.sqrt(Math.max(0,e*e-n*n))};function y_(t,e){let o=lr.r,r=lr.sill,n=lr.spring,a=de.z0,s=24,i=(p,d,h)=>[e+Math.cos(p)*d,h,a-Math.sin(p)*d];for(let p=0;p<s;p++){let d=Math.PI*p/s,h=Math.PI*(p+1)/s,g=[-Math.cos(d),0,Math.sin(d)],m=[-Math.cos(h),0,Math.sin(h)],x=[t.vert(i(d,o,r),g,a0),t.vert(i(h,o,r),m,a0),t.vert(i(h,o,n),m,a0),t.vert(i(d,o,n),g,a0)];t.tri(x[0],x[1],x[2]),t.tri(x[0],x[2],x[3])}let c=12,f=(p,d)=>[e+Math.cos(p)*Math.cos(d)*o,n+Math.sin(d)*o,a-Math.sin(p)*Math.cos(d)*o],l=(p,d)=>[-Math.cos(p)*Math.cos(d),-Math.sin(d),Math.sin(p)*Math.cos(d)];for(let p=0;p<s;p++)for(let d=0;d<c;d++){let h=Math.PI*p/s,g=Math.PI*(p+1)/s,m=Math.PI/2*d/c,x=Math.PI/2*(d+1)/c,y=[t.vert(f(h,m),l(h,m),is),t.vert(f(g,m),l(g,m),is),t.vert(f(g,x),l(g,x),is),t.vert(f(h,x),l(h,x),is)];t.tri(y[0],y[1],y[2]),t.tri(y[0],y[2],y[3])}for(let p=1;p<8;p++){let d=Math.PI*p/8,h=[];for(let g=0;g<=10;g++){let m=Math.PI/2*g/10*.97;h.push(f(d,m).map((x,y)=>x-l(d,m)[y]*.02))}t.tube(h,g=>.035*(1-g*.6),12,6,{mat:()=>is})}let v=t.vert([e,r,a],[0,1,0],a0);for(let p=0;p<s;p++){let d=Math.PI*p/s,h=Math.PI*(p+1)/s;t.tri(v,t.vert(i(d,o,r),[0,1,0],a0),t.vert(i(h,o,r),[0,1,0],a0))}fr(t,e-o-.12,r-.1,a,e+o+.12,r+.02,a+.12,a0),fr(t,e-o-.16,r-.2,a,e+o+.16,r-.1,a+.07,a0);let u=.16;for(let p=0;p<s;p++){let d=Math.PI*p/s,h=Math.PI*(p+1)/s,g=(m,x,y)=>[e+Math.cos(m)*x,n+Math.sin(m)*x,y];pn(t,g(d,o,a+.05),g(h,o,a+.05),g(h,o+u,a+.05),g(d,o+u,a+.05),[0,0,1],a0),pn(t,g(d,o+u,a),g(h,o+u,a),g(h,o+u,a+.05),g(d,o+u,a+.05),[Math.cos((d+h)/2),Math.sin((d+h)/2),0],a0),pn(t,g(d,o,a),g(h,o,a),g(h,o,a+.05),g(d,o,a+.05),[-Math.cos((d+h)/2),-Math.sin((d+h)/2),0],a0)}for(let p of[-1,1]){let d=e+p*o,h=e+p*(o+u);fr(t,d,r,a,h,n,a+.05,a0),fr(t,d-p*.02,n-.12,a,h+p*.06,n,a+.09,a0)}fr(t,e-.11,n+o-.04,a,e+.11,n+o+u+.1,a+.09,a0),t.lathe([[.66,r,1],[.66,r+.06,1],[.62,r+.1],[.6,r+.3],[.64,r+.34,1],[.64,r+.4,1],[0,r+.4]],e,a-.62,40,{mat:()=>a0})}var b_=lr.sill+.4,w_=de.z0-.62;function __(t){pn(t,[14,0,de.z0-b0],[de.x1+b0,0,de.z0-b0],[de.x1+b0,0,de.z1+b0],[14,0,de.z1+b0],[0,1,0],a0),t.curMat=$l,Il(t,{u0:14+b0,u1:de.x1+2*b0,w0:de.z0-2*b0,w1:de.z0,top:()=>de.spring,holes:kh.map(f=>({u0:f-lr.r,u1:f+lr.r,bottom:lr.sill,head:cd(f,lr.r,lr.spring),noReveal:!0})),mat:$l,cuts:[de.x1]});for(let f of kh)y_(t,f);t.save(),t.translate(0,0,de.z1),t.rotateY(Math.PI),t.translate(-(de.x1+2*b0),0,-2*b0);let e=f=>de.x1+2*b0-f;Il(t,{u0:e(de.x1+2*b0),u1:e(13.65),w0:0,w1:2*b0,top:()=>de.spring,holes:na.map(f=>({u0:e(f+to.halfW),u1:e(f-to.halfW),bottom:to.sill,head:cd(e(f),to.halfW,to.spring)})),mat:$l,revealMat:a0}),t.restore(),t.save(),t.translate(de.x1,0,0),t.rotateY(-Math.PI/2);let o=pc.DOOR,r=de.zc,n=o.r;Il(t,{u0:de.z0-2*b0,u1:de.z1+2*b0,w0:-2*b0,w1:0,top:f=>f<de.z0||f>de.z1?de.spring:dc(f),topStep:.15,holes:[{u0:r-n,u1:r+n,bottom:0,head:cd(r,n,o.spring)}],mat:$l,revealMat:a0}),t.restore(),t.save(),t.translate(14+b0,0,0),t.rotateY(-Math.PI/2),Il(t,{u0:de.z0,u1:de.z1,w0:-0,w1:2*b0,top:()=>fd,topStep:.15,holes:[{u0:de.z0,u1:de.z1,bottom:0,head:f=>dc(f)}],mat:$l,revealMat:a0}),t.restore();let a=14+b0,s=Math.ceil((de.x1-a)/1),i=28,c=[];for(let f=0;f<=s;f++){let l=a+(de.x1-a)*f/s,v=[];for(let u=0;u<=i;u++){let p=de.z0+(de.z1-de.z0)*u/i,d=dc(p),h=[0,hd-d,de.zc-p],g=Math.hypot(h[1],h[2]);v.push(t.vert([l,d,p],[0,h[1]/g,h[2]/g],is))}c.push(v)}for(let f=0;f<s;f++)for(let l=0;l<i;l++)t.tri(c[f][l],c[f+1][l],c[f][l+1]),t.tri(c[f+1][l],c[f+1][l+1],c[f][l+1])}function Wm(t,e,o,r){let a=[];for(let s=0;s<=32;s++){let i=de.z0+(de.z1-de.z0)*s/32,c=dc(i),f=hd-c,l=de.zc-i,v=Math.hypot(f,l),u=[c+f/v*r,i+l/v*r];a.push({y:c,z:i,iy:u[0],iz:u[1],n:[0,f/v,l/v]})}for(let s=0;s<32;s++){let i=a[s],c=a[s+1];pn(t,[e-o,i.iy,i.iz],[e+o,i.iy,i.iz],[e+o,c.iy,c.iz],[e-o,c.iy,c.iz],i.n,a0),pn(t,[e-o,i.y,i.z],[e-o,i.iy,i.iz],[e-o,c.iy,c.iz],[e-o,c.y,c.z],[-1,0,0],a0),pn(t,[e+o,i.iy,i.iz],[e+o,i.y,i.z],[e+o,c.y,c.z],[e+o,c.iy,c.iz],[1,0,0],a0)}}function Mh(t,e,o,r){let s=o,i=o+r*.16;fr(t,e-.28,0,s,e+.28,de.spring-.3,i,a0),fr(t,e-.28-.06,0,s,e+.28+.06,.32,o+r*(.16+.05),a0),fr(t,e-.28-.05,de.spring-.3,s,e+.28+.05,de.spring-.1,o+r*(.16+.05),a0),fr(t,e-.28-.1,de.spring-.1,s,e+.28+.1,de.spring,o+r*(.16+.1),a0)}function M_(t,e){let o=dc(de.zc),r=[[0,o-.13,1],[.05,o-.125],[.12,o-.1],[.16,o-.06,1],[.22,o-.05],[.3,o-.075],[.4,o-.06],[.48,o-.03,1],[.55,o-.035],[.7,o-.025],[.82,o-.012,1],[.95,o+.03]];t.lathe(r,e,de.zc,48,{mat:()=>is});for(let n=0;n<8;n++){let a=n*Math.PI/4,s=e+Math.cos(a)*.32,i=de.zc+Math.sin(a)*.32;t.save(),t.translate(s,o-.07,i),t.rotateY(-a),t.curMat=is,t.ellipsoid([0,0,0],[.13,.03,.06],6,10),t.restore()}}function k_(t){t.curMat=a0;for(let[e,o]of[[de.z0,1],[de.z1,-1]])fr(t,14.35,de.spring-.12,e,de.x1,de.spring,e+o*.1,a0),fr(t,14.35,de.spring-.04,e,de.x1,de.spring+.05,e+o*.18,a0);for(let[e,o]of[[de.z0,1],[de.z1,-1]])fr(t,14.35,0,e,de.x1,.42,e+o*.12,a0),fr(t,14.35,.42,e,de.x1,.5,e+o*.07,a0);for(let e of Vm)Wm(t,e,.24,.16),Mh(t,e,de.z0,1),Mh(t,e,de.z1,-1);for(let e of[14.35+.28,de.x1-.28])Wm(t,e,.28,.22),Mh(t,e,de.z0,1),Mh(t,e,de.z1,-1);for(let e of na)M_(t,e)}function S_(t){let e=de.z1+b0,o=e-.04,r=e+.04,n=(i,c,f,l)=>fr(t,i,c,o,f,l,r,Pl),a=to.halfW,s=(i,c,f,l,v,u)=>{let p=(d,h,g)=>[i+h*Math.cos(d),to.spring+h*Math.sin(d),g];for(let d=0;d<u;d++){let h=l+(v-l)*d/u,g=l+(v-l)*(d+1)/u;pn(t,p(h,c,o),p(g,c,o),p(g,f,o),p(h,f,o),[0,0,-1],Pl),pn(t,p(h,f,r),p(g,f,r),p(g,c,r),p(h,c,r),[0,0,1],Pl)}};for(let i of na){let c=i-a,f=i+a;n(c,to.sill,c+.07,to.spring),n(f-.07,to.sill,f,to.spring),n(c,to.sill,f,to.sill+.07),n(c,to.spring-.04,f,to.spring+.04);for(let v of[-.5,0,.5])n(i+v*a-.022,to.sill,i+v*a+.022,to.spring);let l=6;for(let v=1;v<l;v++){let u=to.sill+(to.spring-to.sill)*v/l;n(c,u-.02,f,u+.02)}s(i,a-.07,a,0,Math.PI,32),s(i,.42,.46,0,Math.PI,20);for(let v=1;v<6;v++){let u=Math.PI*v/6,p=Math.cos(u),d=Math.sin(u),h=.02,g=(m,x)=>[i+p*m-d*h*x,to.spring+d*m+p*h*x];pn(t,[...g(.44,-1),o],[...g(a-.05,-1),o],[...g(a-.05,1),o],[...g(.44,1),o],[0,0,-1],Pl),pn(t,[...g(.44,1),r],[...g(a-.05,1),r],[...g(a-.05,-1),r],[...g(.44,-1),r],[0,0,1],Pl)}}}function z_(){let t=[],e=de.z1+b0;for(let o of na){let r=o-to.halfW,n=o+to.halfW;t.push([r,to.sill,e],[n,to.sill,e],[n,to.spring,e],[r,to.sill,e],[n,to.spring,e],[r,to.spring,e]);for(let a=0;a<24;a++){let s=Math.PI*a/24,i=Math.PI*(a+1)/24;t.push([o,to.spring,e],[o+to.halfW*Math.cos(s),to.spring+to.halfW*Math.sin(s),e],[o+to.halfW*Math.cos(i),to.spring+to.halfW*Math.sin(i),e])}}return t}function Xm(t,e){t.save(),t.translate(de.x1+b0,0,de.zc-7),t.rotateY(-Math.PI/2),e(),t.restore()}function E_(t){Xm(t,()=>{pc.addSurround(t),pc.addFrames(t,"fixed")})}function A_(t){return pc.glassPanes(t||"fixed").map(([o,r,n])=>[de.x1+b0-n,r,de.zc-7+o])}function T_(t){__(t),k_(t),S_(t),E_(t),t.curMat=[0,0,0]}var L_={x:de.x1+b0,zLo:de.zc-pc.DOOR.r,zHi:de.zc+pc.DOOR.r},Go=t=>t.toFixed(4);function N_(){return`
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
		float k = floor((q.x - ${Go(to.first)}) / ${Go(to.pitch)} + 0.5);
		if (k < 0.0 || k > ${Go(to.count-1)}) return 0.0;
		float dx = q.x - (${Go(to.first)} + k * ${Go(to.pitch)});
		float side = 1.0 - smoothstep(${Go(to.halfW)} - soft, ${Go(to.halfW)} + soft, abs(dx));
		float sill = smoothstep(${Go(to.sill)} - soft, ${Go(to.sill)} + soft, q.y);
		float r = length(vec2(dx, q.y - ${Go(to.spring)}));
		float head = q.y < ${Go(to.spring)} ? 1.0 : 1.0 - smoothstep(${Go(to.halfW)} - soft, ${Go(to.halfW)} + soft, r);
		float open = side * sill * head;
		// the black glazing bars, softly
		float cover = 0.0;
		cover = max(cover, winBar(abs(dx), 0.022, soft));
		cover = max(cover, winBar(abs(abs(dx) - ${Go(to.halfW*.5)}), 0.022, soft));
		float rowH = ${Go((to.spring-to.sill)/6)};
		float ry = (q.y - ${Go(to.sill)}) / rowH;
		cover = max(cover, q.y < ${Go(to.spring)} ? winBar(abs(fract(ry + 0.5) - 0.5) * rowH, 0.02, soft) : 0.0);
		cover = max(cover, q.y > ${Go(to.spring)} ? winBar(abs(r - 0.44), 0.02, soft) : 0.0);
		return open * (1.0 - cover * 0.75);
	}

	// daylight reaching point p from the windows
	float windowLight(vec3 p, vec3 n) {
		if (p.x < ${Go(de.x0)} || p.z < ${Go(de.z0-.1)} || p.z > ${Go(de.z1)}) return 0.0;
		float ndl = max(dot(n, WIN_SKY), 0.0);
		if (ndl <= 0.0) return 0.0;
		float tIn = (${Go(de.z1)} - p.z) / WIN_SKY.z;
		float tOut = (${Go(de.z1+2*b0)} - p.z) / WIN_SKY.z;
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
		${kh.map(t=>`{ float d = abs(p.x - ${Go(t)}); if (d < best) { best = d; lamp = vec3(${Go(t)}, ${Go(lr.spring+.55)}, ${Go(de.z0-.15)}); } }`).join(`
		`)}
		return lamp;
	}

	float nicheLight(vec3 p, vec3 n) {
		if (p.z > ${Go(de.z0+1.6)} || p.z < ${Go(de.z0-lr.r-.1)} || p.x < ${Go(de.x0)}) return 0.0;
		vec3 lamp = nicheLamp(p);
		vec3 d = lamp - p;
		float dist = length(d);
		vec3 L = d / dist;
		// a cone pointing down into the niche
		float cone = smoothstep(0.35, 0.75, dot(-L, normalize(vec3(0.0, -1.0, 0.35))));
		float inside = 1.0 - smoothstep(${Go(lr.r)}, ${Go(lr.r+.5)}, abs(p.x - lamp.x));
		return max(dot(n, L), 0.0) * cone * inside / (1.0 + 0.35 * dist * dist);
	}

	// soft general daylight in the corridor, strongest near the glass
	float corridorGlow(vec3 p) {
		if (p.x < ${Go(de.x0-1)}) return 0.0;
		float inC = smoothstep(${Go(de.z0-1.5)}, ${Go(de.z0)}, p.z) * smoothstep(${Go(de.x0-1)}, ${Go(de.x0+1)}, p.x);
		float near = 0.55 + 0.45 * smoothstep(${Go(de.z0)}, ${Go(de.z1)}, p.z);
		return inC * near;
	}`}Ym.exports={wallWithHoles:Il,windowLightGLSL:N_,addWing:T_,windowGlass:z_,farDoorGlass:A_,atFarDoor:Xm,FAR_DOOR:L_,vaultY:dc,C:de,NICHE_X:kh,NICHE:lr,NICHE_PLINTH_TOP:b_,NICHE_STATUE_Z:w_,WIN:to,winCentres:na,piers:Vm,PAINTING_X:x_,HEIGHT:fd}});var Gr=Tt((XE,Qm)=>{"use strict";var ud=On(),v0=8,gc=.35,ni=14,mc=4,ze={x0:ni+gc,x1:ni+gc+2*mc,z0:5.9-mc,z1:5.9+mc,zc:5.9,cx:ni+gc+mc,arch:{r:2.6,spring:4.4},dome:{r:3.3,base:v0},oculus:3.3};ze.domeTop=ze.dome.base+ze.dome.r;var xc={spokes:16,ringE:[.42,.95],bar:.035},on={sxz:1.32,sy:1.6,yaw:.6};on.crownC=[ze.cx,.4+3.4*on.sy,ze.zc];on.crownR=[2.3*on.sxz,1.9*on.sy,2.3*on.sxz];on.trunkR=.26*on.sxz;on.trunkTop=.4+2.2*on.sy;var Km={inner:1.05,outer:1.62,seat:.48,soil:.4},Eh=(()=>{let t=[.2,1,-.15],e=Math.hypot(...t);return t.map(o=>o/e)})(),vn=[0,0,0],vc=[11,0,0],Sh=[10,0,0],zh=[9,0,0],O_=[5,0,0],dd=[3,0,0];function Da(t,e,o,r,n,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),f=t.vert(r,a,s),l=t.vert(n,a,s);t.tri(i,c,f),t.tri(i,f,l)}function Zn(t,e,o,r,n,a,s,i){t.box(Math.min(e,n),Math.min(o,a),Math.min(r,s),Math.max(e,n),Math.max(o,a),Math.max(r,s),i)}var R_=(t,e,o)=>r=>{let n=r-t;return o+Math.sqrt(Math.max(0,e*e-n*n))};function C_(t){t.save(),t.translate(ni+gc,0,0),t.rotateY(-Math.PI/2),ud.wallWithHoles(t,{u0:0,u1:ud.C.z0,w0:0,w1:2*gc,top:()=>v0,holes:[{u0:ze.zc-ze.arch.r,u1:ze.zc+ze.arch.r,bottom:0,head:R_(ze.zc,ze.arch.r,ze.arch.spring),step:.05}],mat:vc,revealMat:vn,topStep:1}),t.restore();let e=ni-gc;for(let[s,i]of[[0,ze.zc-ze.arch.r],[ze.zc+ze.arch.r,ud.C.z0]])Zn(t,e-.12,0,s,e,.42,i,vn),Zn(t,e-.07,.42,s,e,.5,i,vn);let o=e,r=.24,n=40,a=(s,i,c)=>[c,ze.arch.spring+Math.sin(s)*i,ze.zc+Math.cos(s)*i];for(let s=0;s<n;s++){let i=Math.PI*s/n,c=Math.PI*(s+1)/n;Da(t,a(i,ze.arch.r,o-.07),a(c,ze.arch.r,o-.07),a(c,ze.arch.r+r,o-.07),a(i,ze.arch.r+r,o-.07),[-1,0,0],vn),Da(t,a(i,ze.arch.r+r,o),a(c,ze.arch.r+r,o),a(c,ze.arch.r+r,o-.07),a(i,ze.arch.r+r,o-.07),[0,Math.sin((i+c)/2),Math.cos((i+c)/2)],vn),Da(t,a(i,ze.arch.r,o),a(c,ze.arch.r,o),a(c,ze.arch.r,o-.07),a(i,ze.arch.r,o-.07),[0,-Math.sin((i+c)/2),-Math.cos((i+c)/2)],vn)}Zn(t,o-.12,ze.arch.spring+ze.arch.r-.06,ze.zc-.17,o,ze.arch.spring+ze.arch.r+r+.16,ze.zc+.17,vn);for(let s of[-1,1]){let i=ze.zc+s*ze.arch.r,c=ze.zc+s*(ze.arch.r+r);Zn(t,o-.07,0,i,o,ze.arch.spring,c,vn),Zn(t,o-.13,ze.arch.spring-.16,i-s*.03,o,ze.arch.spring,c+s*.08,vn),Zn(t,o-.12,0,i-s*.03,o,.5,c+s*.06,vn)}}function $_(t){let{x0:e,x1:o,z0:r,z1:n}=ze;Da(t,[ni,0,r],[o,0,r],[o,0,n],[ni,0,n],[0,1,0],vn),t.curMat=vc,Da(t,[o,0,r],[o,0,n],[o,v0,n],[o,v0,r],[-1,0,0],vc),Da(t,[e,0,r],[o,0,r],[o,v0,r],[e,v0,r],[0,0,1],vc),Da(t,[o,0,n],[e,0,n],[e,v0,n],[o,v0,n],[0,0,-1],vc),Da(t,[e,0,n],[e,0,r],[e,v0,r],[e,v0,n],[1,0,0],vc),Zn(t,o-.12,0,r,o,.42,n,vn),Zn(t,e,0,r,o,.42,r+.12,vn),Zn(t,e,0,n-.12,o,.42,n,vn),Zn(t,o-.2,v0-.3,r,o,v0,n,vn),Zn(t,e,v0-.3,r,o,v0,r+.2,vn),Zn(t,e,v0-.3,n-.2,o,v0,n,vn),Zn(t,e,v0-.3,r,e+.2,v0,n,vn);let a=ze.dome.r,s=48,i=[];for(let m=0;m<=s;m++){let x=Math.PI*2*m/s;i.push([ze.cx+Math.cos(x)*a,ze.zc+Math.sin(x)*a])}let c=m=>{let x=Math.abs(Math.cos(m)),y=Math.abs(Math.sin(m));return Math.min(mc/Math.max(x,1e-6),mc/Math.max(y,1e-6))};for(let m=0;m<s;m++){let x=Math.PI*2*m/s,y=Math.PI*2*(m+1)/s,_=c(x),M=c(y),b=[ze.cx+Math.cos(x)*_,v0,ze.zc+Math.sin(x)*_],k=[ze.cx+Math.cos(y)*M,v0,ze.zc+Math.sin(y)*M];Da(t,[i[m][0],v0,i[m][1]],[i[m+1][0],v0,i[m+1][1]],k,b,[0,-1,0],Sh)}t.lathe([[a+.02,v0-.18,1],[a-.12,v0-.18,1],[a-.12,v0-.06,1],[a-.05,v0,1],[a,v0+.02]],ze.cx,ze.zc,s,{mat:()=>vn});let f=16,l=(m,x,y)=>[ze.cx+Math.cos(m)*Math.cos(x)*y,ze.dome.base+Math.sin(x)*y,ze.zc+Math.sin(m)*Math.cos(x)*y],v=Math.PI/2;for(let m=0;m<s;m++)for(let x=0;x<f;x++){let y=Math.PI*2*m/s,_=Math.PI*2*(m+1)/s,M=v*x/f,b=v*(x+1)/f,k=(z,P)=>[-Math.cos(z)*Math.cos(P),-Math.sin(P),-Math.sin(z)*Math.cos(P)],E=[t.vert(l(y,M,a),k(y,M),zh),t.vert(l(_,M,a),k(_,M),zh),t.vert(l(_,b,a),k(_,b),zh),t.vert(l(y,b,a),k(y,b),zh)];t.tri(E[0],E[1],E[2]),t.tri(E[0],E[2],E[3])}for(let m=0;m<xc.spokes;m++){let x=Math.PI*2*m/xc.spokes,y=[];for(let _=0;_<=14;_++)y.push(l(x,(v-.06)*_/14,a-.04));t.tube(y,()=>.04,20,6,{mat:()=>Sh})}for(let m of xc.ringE){let x=Math.cos(m)*(a-.04),y=ze.dome.base+Math.sin(m)*(a-.04),_=[];for(let M=0;M<=72;M++){let b=Math.PI*2*M/72;_.push([ze.cx+Math.cos(b)*x,y,ze.zc+Math.sin(b)*x])}t.tube(_,()=>.035,72,6,{mat:()=>Sh})}t.ellipsoid([ze.cx,ze.dome.base+a-.06,ze.zc],[.16,.08,.16],6,12,{mat:()=>Sh});let u=.46,p=.55,d=.12,h=(m,x,y,_)=>{Zn(t,m,u-.08,x,y,u,_,dd);let M=y-m>_-x?[m+.25,y-.25]:[m+.06,y-.06],b=y-m>_-x?[x+.06,_-.06]:[x+.25,_-.25];Zn(t,M[0],0,b[0],M[1],u-.08,b[1],dd)};h(o-d-p,r+1.1,o-d,n-1.1),h(e+1,r+d,o-1.1,r+d+p),h(e+1,n-d-p,o-1.1,n-d);let g=Km;t.lathe([[g.outer,0,1],[g.outer,g.seat-.1,1],[g.outer+.07,g.seat-.07,1],[g.outer+.07,g.seat,1],[g.inner-.05,g.seat,1],[g.inner-.05,g.seat-.06,1],[g.inner,g.seat-.08,1],[g.inner,g.soil]],ze.cx,ze.zc,64,{mat:()=>dd}),t.lathe([[g.inner,g.soil,1],[0,g.soil+.03]],ze.cx,ze.zc,48,{mat:()=>O_})}function P_(t){C_(t),$_(t),t.curMat=[0,0,0]}var s0=t=>t.toFixed(4);function Zm(){let t=ze.dome.r,e=xc.ringE.map(o=>Math.cos(o)*t);return`
	const vec3 SHAFT = vec3(${s0(Eh[0])}, ${s0(Eh[1])}, ${s0(Eh[2])});

	// how much sun the glass dome lets through towards p (0..1): the round
	// opening, less the soft shadows of its ribs and rings (worked out on
	// the dome's base, where the frame is seen almost straight on)
	float oculusOpen(vec3 p) {
		float t = (${s0(ze.dome.base+.6)} - p.y) / SHAFT.y;
		vec3 q = p + SHAFT * t;
		vec2 d2 = q.xz - vec2(${s0(ze.cx)}, ${s0(ze.zc)});
		float d = length(d2);
		float soft = 0.02 + 0.012 * t;
		float open = 1.0 - smoothstep(${s0(t-.15)} - soft, ${s0(t-.15)} + soft, d);
		float hw = ${s0(xc.bar)};
		float cover = 0.0;
		${e.map(o=>`cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, abs(d - ${s0(o)})));`).join(`
		`)}
		float ang = atan(d2.y, d2.x);
		float stp = ${s0(Math.PI*2/xc.spokes)};
		float da = abs(mod(ang + stp * 0.5, stp) - stp * 0.5);
		cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, d * sin(da)));
		cover = max(cover, 1.0 - smoothstep(0.16 - soft, 0.16 + soft, d));
		return open * (1.0 - cover * 0.85);
	}

	// the tree's own shade: its crown lets dappled light through, its
	// trunk blocks it
	float treeShade(vec3 p) {
		vec3 c = vec3(${s0(on.crownC[0])}, ${s0(on.crownC[1])}, ${s0(on.crownC[2])});
		vec3 r = vec3(${s0(on.crownR[0])}, ${s0(on.crownR[1])}, ${s0(on.crownR[2])});
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
		float tt = (${s0(on.trunkTop)} - p.y) / SHAFT.y;
		if (tt > 0.0) {
			vec2 o = p.xz - vec2(${s0(ze.cx)}, ${s0(ze.zc)});
			vec2 dir = SHAFT.xz;
			float k = clamp(-dot(o, dir) / dot(dir, dir), 0.0, tt);
			float dist = length(o + dir * k);
			tr *= smoothstep(${s0(on.trunkR*.7)}, ${s0(on.trunkR*1.3)}, dist);
		}
		return tr;
	}`}function I_(){return`
	${Zm()}

	// sunlight through the oculus reaching p (0..1)
	float alcoveSun(vec3 p, vec3 n) {
		if (p.x < ${s0(ze.x0-.75)} || p.z < ${s0(ze.z0-.5)} || p.z > ${s0(ze.z1+.5)}) return 0.0;
		float ndl = max(dot(n, SHAFT), 0.0);
		if (ndl <= 0.0) return 0.0;
		return ndl * oculusOpen(p) * treeShade(p);
	}

	// soft daylight filling the court, brightest under the dome
	float alcoveGlow(vec3 p) {
		if (p.x < ${s0(ze.x0-1.5)} || p.z < ${s0(ze.z0-1.5)} || p.z > ${s0(ze.z1+1.5)}) return 0.0;
		float inside = smoothstep(${s0(ze.x0-1.2)}, ${s0(ze.x0+.6)}, p.x);
		float d = length(p.xz - vec2(${s0(ze.cx)}, ${s0(ze.zc)}));
		return inside * (0.55 + 0.45 * smoothstep(0.0, 8.0, p.y)) * (1.0 - 0.35 * smoothstep(1.0, 5.0, d));
	}`}Qm.exports={addAlcove:P_,alcoveLightGLSL:I_,oculusGLSL:Zm,A:ze,BENCH:Km,SHAFT:Eh,TREE:on}});var nn=Tt((YE,t3)=>{"use strict";var ra=0;try{let t=location.search;/[?&]night\b/.test(t)&&(ra=1)}catch(t){}var Fa=ra,pd=0,Jm=[],Ah={tick(t){let e=pd?Math.min(.1,t-pd):0;if(pd=t,Fa!==ra){let o=e/2.4;Fa=ra>Fa?Math.min(ra,Fa+o):Math.max(ra,Fa-o)}return Ah.night},get night(){return Fa*Fa*(3-2*Fa)},get isNight(){return ra===1},get settled(){return Fa===ra},set(t){ra=t?1:0,Jm.forEach(e=>e(ra))},toggle(){Ah.set(!ra)},onChange(t){Jm.push(t)}};Ah.GLSL=`
uniform float night;
vec3 toNight(vec3 c, float keep) {
	float l = dot(c, vec3(0.299, 0.587, 0.114));
	vec3 n = mix(vec3(l), c, 0.35) * vec3(0.55, 0.70, 1.05) * keep;
	return mix(c, n, night);
}
`;t3.exports=Ah});var ls=Tt((KE,Fl)=>{"use strict";var vd=nn(),{C:md}=On(),{A:Th,BENCH:ql}=Gr(),rn=Math.PI,q_=[18,29,40],Lh=.575,cs=[],Dl=(t,e,o,r,n,a,s)=>cs.push(Object.assign({x:t,y:e,z:o,o:r,back:n,hw:a,s:1,k:1,range:7,mount:"wall"},s||{}));q_.forEach(t=>{Dl(1.25+Lh+.48,3.25,t,[1,0],.48,Lh,{s:1.2}),Dl(12.75-Lh-.48,3.25,t,[-1,0],.48,Lh,{s:1.2})});[3,11].forEach(t=>Dl(t,3.45,md.hallEnd-.5,[0,-1],.5,99,{s:1.2}));var D_=[14.63,19.63,24.03,28.43,32.83,md.x1-.28];D_.forEach(t=>Dl(t,3.15,md.z0+.16+.44,[0,1],.44,.28));[3,8.8].forEach(t=>Dl(.35+.44,2.75,t,[1,0],.44,99));{let t=(ql.inner+ql.outer)/2,e=Math.atan2(-1.12,-.98);cs.push({x:Th.cx+Math.cos(e)*t,y:ql.seat+.155,z:Th.zc+Math.sin(e)*t,o:[Math.cos(e),Math.sin(e)],back:0,hw:0,ring:[Th.cx,Th.zc,ql.outer+.07,ql.seat],s:.52,k:2.2,range:3.6,mount:"table"})}var gd=.13,Nh=.21,mn=gd/Math.cos(rn/6),Jo=t=>t.toFixed(4);function e3(t){let o=(t||cs.map((r,n)=>n)).map(r=>{let n=cs[r],a=-n.o[1],s=n.o[0],i=n.mount==="table"?`
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
		float t = mod(az + ${Jo(rn/6)}, ${Jo(rn/3)}) - ${Jo(rn/6)};
		float U = tan(t) / ${Jo(Math.tan(rn/6))};
		float V = (q.y / h) * (${Jo(gd/Nh)} / cos(t));
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
	}`}var w0=0,F_=1;function G_(){let t=[],e=[],o=[],r=[],n=[],a=(p,d,h,g)=>(t.push(p[0],p[1],p[2]),e.push(d[0],d[1],d[2]),o.push(h),r.push(g?g[0]:0,g?g[1]:0),t.length/3-1),s=(p,d)=>[p[0]-d[0],p[1]-d[1],p[2]-d[2]],i=(p,d)=>[p[1]*d[2]-p[2]*d[1],p[2]*d[0]-p[0]*d[2],p[0]*d[1]-p[1]*d[0]],c=p=>{let d=Math.hypot(p[0],p[1],p[2])||1;return[p[0]/d,p[1]/d,p[2]/d]};function f(p,d,h,g,m,x){let y=c(i(s(d,p),s(g,p))),_=a(p,y,m,[0,0]),M=a(d,y,m,[1,0]),b=a(h,y,m,[1,1]),k=a(g,y,m,[0,1]);n.push(_,M,b,_,b,k),x&&n.push(_,b,M,_,k,b)}function l(p,d,h){for(let x=0;x<p.length;x++){let y=p[Math.max(0,x-1)],_=p[Math.min(p.length-1,x+1)],M=c(s(_,y)),b=Math.abs(M[1])>.9?[1,0,0]:[0,1,0],k=c(i(M,b)),E=i(k,M),z=typeof d=="function"?d(x/(p.length-1)):d;for(let P=0;P<=6;P++){let R=P/6*rn*2,B=Math.cos(R),$=Math.sin(R),D=[k[0]*B+E[0]*$,k[1]*B+E[1]*$,k[2]*B+E[2]*$];a([p[x][0]+D[0]*z,p[x][1]+D[1]*z,p[x][2]+D[2]*z],D,h)}}let m=t.length/3-p.length*7;for(let x=0;x<p.length-1;x++)for(let y=0;y<6;y++){let _=m+x*7+y,M=_+6+1;n.push(_,M,_+1,_+1,M,M+1)}}function v(p,d,h,g,m,x,y,_,M){let b=(k,E,z)=>{let P=x+rn/6+z*rn/3;return[p[0]+Math.cos(P)*k,E,p[2]+Math.sin(P)*k]};for(let k=0;k<6;k++)f(b(g,d,k+1),b(g,d,k),b(m,h,k),b(m,h,k+1),y);if(_&&m>0)for(let k=0;k<6;k++){let E=a([p[0],h,p[2]],[0,1,0],y),z=a(b(m,h,k),[0,1,0],y),P=a(b(m,h,k+1),[0,1,0],y);n.push(E,P,z)}if(M&&g>0)for(let k=0;k<6;k++){let E=a([p[0],d,p[2]],[0,-1,0],y),z=a(b(g,d,k),[0,-1,0],y),P=a(b(g,d,k+1),[0,-1,0],y);n.push(E,z,P)}}function u(p,d,h,g,m,x,y){let _=[];for(let b=0;b<=18;b++){let k=b/18,E=(y||0)+k*g*rn*2,z=h*(1-.75*k);_.push([p[0]+d[0]*Math.cos(E)*z,p[1]+Math.sin(E)*z,p[2]+d[2]*Math.cos(E)*z])}l(_,m,x)}return cs.forEach(p=>{let d=p.s,h=Math.atan2(p.o[1],p.o[0]),g=[p.x,p.y,p.z],m=(_,M,b)=>[p.x+p.o[0]*_-p.o[1]*(b||0),p.y+M,p.z+p.o[1]*_+p.o[0]*(b||0)],x=p.y-Nh*d,y=p.y+Nh*d;for(let _=0;_<6;_++){let M=h+rn/6+_*rn/3,b=M+rn/3,k=mn*d*.97,E=[p.x+Math.cos(M)*k,x,p.z+Math.sin(M)*k],z=[p.x+Math.cos(b)*k,x,p.z+Math.sin(b)*k];f(z,E,[E[0],y,E[2]],[z[0],y,z[2]],F_,!0)}for(let _=0;_<6;_++){let M=h+rn/6+_*rn/3,b=mn*d;l([[p.x+Math.cos(M)*b,x-.02*d,p.z+Math.sin(M)*b],[p.x+Math.cos(M)*b,y+.02*d,p.z+Math.sin(M)*b]],.011*d,w0)}v(g,x-.035*d,x,mn*d*1.12,mn*d*1.12,h,w0,!0,!0),v(g,x-.1*d,x-.035*d,mn*d*.55,mn*d*1,h,w0,!1,!0),v(g,x-.17*d,x-.1*d,0,mn*d*.55,h,w0,!1,!1);for(let _=0;_<6;_++){let M=h+_*rn/3,b=gd*d*1.06,k=[p.x+Math.cos(M)*b,x-.06*d,p.z+Math.sin(M)*b];u(k,[-Math.sin(M),0,Math.cos(M)],.03*d,.85,.004*d,w0,.3)}v(g,y,y+.03*d,mn*d*1.14,mn*d*1.14,h,w0,!1,!0),v(g,y+.03*d,y+.2*d,mn*d*1.14,mn*d*.32,h,w0,!1,!1),v(g,y+.2*d,y+.27*d,mn*d*.34,mn*d*.34,h,w0,!1,!1),v(g,y+.27*d,y+.37*d,mn*d*.42,0,h,w0,!1,!0),l([[p.x,y+.36*d,p.z],[p.x,y+.47*d,p.z]],_=>.01*d*(1-.7*_),w0),v([p.x,0,p.z],y+.44*d,y+.47*d,.018*d,0,h,w0,!1,!0);for(let _=0;_<6;_++){let M=h+rn/6+_*rn/3,b=mn*d*1.14,k=[p.x+Math.cos(M)*b,y+.03*d,p.z+Math.sin(M)*b];l([k,[k[0],k[1]+.09*d,k[2]]],E=>.008*d*(1-.8*E),w0),v([k[0],0,k[2]],k[1]+.035*d,k[1]+.06*d,.014*d,.014*d,M,w0,!0,!0)}if(p.mount==="wall"){let _=p.back,M=x-.32,b=m(-_,0,0);((R,B,$)=>{let D=[p.o[0],0,p.o[1]],it=[-p.o[1],0,p.o[0]],St=(zt,It,re)=>[b[0]+it[0]*zt+D[0]*re,It,b[2]+it[2]*zt+D[2]*re],yt=.03,mt=.065;f(St(-$,R,mt),St($,R,mt),St($,B,mt),St(-$,B,mt),w0,!0),f(St($,R,yt),St($,R,mt),St($,B,mt),St($,B,yt),w0,!0),f(St(-$,R,mt),St(-$,R,yt),St(-$,B,yt),St(-$,B,mt),w0,!0),f(St(-$,B,mt),St($,B,mt),St($,B,yt),St(-$,B,yt),w0,!0),f(St(-$,R,yt),St($,R,yt),St($,R,mt),St(-$,R,mt),w0,!0),v([b[0]+D[0]*mt,0,b[2]+D[2]*mt],B,B+.05,$*.6,0,h,w0,!1,!0),v([b[0]+D[0]*mt,0,b[2]+D[2]*mt],R-.05,R,0,$*.6,h,w0,!1,!1)})(M-.2,M+.2,.07);let E=[];for(let R=0;R<=14;R++){let B=R/14,$=-_+.05+B*(_-.05),D=M+.04+(x-.17*d-M-.04)*Math.pow(B,2.2);E.push(m($,D-p.y,0))}l(E,R=>.022*(1-.3*R),w0);let z=[];for(let R=0;R<=10;R++){let B=R/10;z.push(m(-_+.05+B*_*.6,M-.14+B*.16+.05*Math.sin(B*rn)-p.y,0))}l(z,.009,w0);let P=z[z.length-1];u([P[0]-p.o[0]*.03,P[1]+.02,P[2]-p.o[1]*.03],[p.o[0],0,p.o[1]],.045,1.1,.007,w0,-.4),[.3,.55].forEach(R=>{let B=E[Math.round(R*14)],$=z[Math.round(R/.62*10)]||z[10];l([B,$],.006,w0)}),[-1,1].forEach(R=>{let B=m(-.05,-Nh*d-.2*d,0);u([B[0]-p.o[1]*R*.05,B[1],B[2]+p.o[0]*R*.05],[-p.o[1]*R,0,p.o[0]*R],.05*d,.9,.006,w0,rn)})}else for(let _=0;_<3;_++){let M=h+_*rn*2/3,b=[p.x+Math.cos(M)*mn*d*.7,x-.035*d,p.z+Math.sin(M)*mn*d*.7],k=[p.x+Math.cos(M)*mn*d*1.25,x-.17*d,p.z+Math.sin(M)*mn*d*1.25];l([b,k],.012*d,w0)}}),{pos:t,nrm:e,kind:o,uv:r,elems:n}}Fl.exports=t=>{let e=G_(),o=t({vert:`
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
		}`,attributes:{position:e.pos,normal:e.nrm,kind:e.kind,uv:e.uv},elements:e.elems,uniforms:{time:t.context("time"),night:()=>vd.night}}),r=[],n=[];cs.forEach((s,i)=>{[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(c=>{r.push(c[0],c[1]),n.push(s.x,s.y,s.z,s.s+i*.001)})});let a=t({vert:`
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
		}`,attributes:{corner:r,at:n},count:r.length/2,uniforms:{time:t.context("time"),night:()=>vd.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(){o(),vd.night>.01&&a()}};Fl.exports.lanternGLSL=e3;Fl.exports.LANTERNS=cs;Fl.exports.TREE_LANTERN=[cs.length-1]});var us=Tt((ZE,hr)=>{"use strict";var H_=nn(),o0=Math.PI,an=t=>(+t).toFixed(4),U_=t=>`vec3(${an(t[0])}, ${an(t[1])}, ${an(t[2])})`,oo={x:-7,z:44.5},Ao=5.2,Sn=15,Re={z0:42.6,z1:46.4,zc:44.5,spring:4,r:1.9},Ma={z0:42.2,z1:46.8,top:6.3,x:.35},Ch=[oo.x-Math.sqrt(Ao*Ao-3.05*3.05),0,0],F0={x0:-2.05+Ch[0],x1:Ch[0],z0:41.45,z1:47.55,top:4.3},xd=[[F0.x1+.05,2.35,F0.z0-.45],[F0.x1+.05,2.35,F0.z1+.45]].map(([t,e,o])=>{let r=Math.atan2(o-oo.z,t-oo.x);return[oo.x+Math.cos(r)*(Ao-.16),e,oo.z+Math.sin(r)*(Ao-.16)]}),Ko={ri:3.4,ro:Ao,a0:-35*o0/180,rise:.1836,step:3.6*o0/180,n:88,thick:.36};Ko.k=Ko.rise/Ko.step;var Qn=t=>Ko.a0-t,hs=t=>t*Ko.k,k0={x:oo.x+.1,z:oo.z-.15,yaw:-o0/2,scale:1.3},Ga=k0.scale/1.1,Gl={keyX0:k0.x-.524*Ga,keyX1:k0.x+.491*Ga,keyTop:.647*Ga,keyFront:k0.z+.808*Ga,keyBack:k0.z+.72*Ga,stoolX:k0.x-.041*Ga,stoolZ:k0.z+1.122*Ga,stoolFront:k0.z+.96*Ga,stoolTop:.37*Ga,heading:o0},Rh=[[3.6,44.5],[.6,44.5],[-2.2,44.7],[-4.5,46.5],[-7,47.2],[-9.4,46.6],[-10.5,44.9],[-10.9,43.2]];function n3(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let o=e;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}function B_(t,e){let o=1e9;for(let r=0;r<Rh.length-1;r++){let[n,a]=Rh[r],[s,i]=Rh[r+1],c=s-n,f=i-a,l=Math.max(0,Math.min(1,((t-n)*c+(e-a)*f)/(c*c+f*f)));o=Math.min(o,Math.hypot(t-n-c*l,e-a-f*l))}return o}var Oh=t=>Re.spring+Math.sqrt(Math.max(0,Re.r*Re.r-(t-Re.zc)*(t-Re.zc))),fs=t=>oo.x+Math.sqrt(Math.max(0,Ao*Ao-(t-oo.z)*(t-oo.z)));function yc(t,e){return Math.hypot(t-oo.x,e-oo.z)<Ao||t<=0&&t>oo.x&&e>Re.z0&&e<Re.z1||t>F0.x0&&t<F0.x1&&e>F0.z0&&e<F0.z1}function j_(t,e){if(Math.hypot(t-oo.x,e-oo.z)<Ko.ri-.05)return 99;let r=Math.atan2(e-oo.z,t-oo.x),n=Ko.a0-r;for(;n<0;)n+=2*o0;for(;n>=2*o0;)n-=2*o0;return n>Ko.n*Ko.step?99:hs(n)-Ko.thick}function W_(){let t=[],e=n3(1729),o=(a,s,i)=>{for(let c=Math.max(0,t.length-400);c<t.length;c++){let f=t[c];if(!(f[1]>.01)&&Math.hypot(f[0]-a,f[2]-s)<i+f[3]+.012)return!0}return!1},r=(a,s)=>{let i=a-k0.x,c=s-k0.z,f=Math.cos(k0.yaw),l=Math.sin(k0.yaw),v=(f*i-l*c)/k0.scale,u=(l*i+f*c)/k0.scale;return v>-1.05&&v<1.3&&u>-.7&&u<.72},n=0;for(;t.length<980&&n<6e4;){n++;let s=e()<.55?1.25+e()*2.1:1.25+Math.sqrt(e())*(Ao-1.45),i=e()*2*o0,c=oo.x+Math.cos(i)*s,f=oo.z+Math.sin(i)*s;if(!yc(c,f)||s>Ao-.18||r(c,f)||B_(c,f)<.62||j_(c,f)<2.3||c<F0.x1+.9)continue;let l=.022+e()*.02;if(o(c,f,l))continue;let v=e()<.15?.22+e()*.14:.05+e()*.15;t.push([c,0,f,l,v,e()*100])}for(let a=1;a<26;a++){let s=a<12?3:2;for(let i=0;i<s;i++){let c=(a+.25+e()*.5)*Ko.step,f=Qn(c),l=Ko.ri+.55+e()*(Ko.ro-Ko.ri-.75),v=.022+e()*.016;t.push([oo.x+Math.cos(f)*l,(a+1)*Ko.rise,oo.z+Math.sin(f)*l,v,.05+e()*.14,e()*100])}}for(let a of xd)for(let[s,i,c]of[[0,0,.26],[.06,.05,.18],[-.05,-.04,.14]])t.push([a[0]+s,a[1],a[2]+i,.024,c,e()*100]);for(let a of[F0.z0-.35,F0.z1+.35])for(let s=0;s<9;s++){let i=F0.x1+.35+e()*.5,c=a+(e()-.5)*.5;Math.hypot(i-oo.x,c-oo.z)>Ao-.15||t.push([i,0,c,.026+e()*.014,.18+e()*.3,e()*100])}return t}function V_(t){let o=n3(77),r=[];for(let n=0;n<14;n++){let a=t[Math.floor(o()*t.length)];r.push([a[0],a[1]+a[4],a[2]])}for(let n=0;n<12;n++){let a=r.map(()=>[0,0,0,0]);for(let s of t){let i=[s[0],s[1]+s[4],s[2]],c=0,f=1e9;r.forEach((l,v)=>{let u=(i[0]-l[0])**2+(i[1]-l[1])**2*4+(i[2]-l[2])**2;u<f&&(f=u,c=v)}),a[c][0]+=i[0],a[c][1]+=i[1],a[c][2]+=i[2],a[c][3]++}r=a.map((s,i)=>s[3]?[s[0]/s[3],s[1]/s[3],s[2]/s[3],s[3]]:r[i])}return r.filter(n=>n[3]>0).map(n=>[n[0],n[1]+.12,n[2],n[3]/t.length])}var yd=W_(),o3=V_(yd.filter(t=>t[1]<2||t[1]>2.5)).concat(xd.map(t=>[t[0],t[1]+.35,t[2],.035]));function r3(){return`
	vec3 roomLight(vec3 p, vec3 N, vec3 V, float gloss, out vec3 spec) {
		spec = vec3(0.0);
		vec3 col = vec3(0.0);
		float floorK = (p.y < 0.02 && N.y > 0.9) ? 1.0 : 0.0;
		${o3.map((e,o)=>`
		{
			vec3 d = ${U_(e)} - p;
			float dd = dot(d, d);
			vec3 L = d * inversesqrt(dd);
			float fl = 0.86 + 0.08 * sin(time * ${an(5.3+o*.71)} + ${an(o*1.9)}) + 0.06 * sin(time * ${an(11.7+o*1.3)} + ${an(o*.7)});
			float w = ${an(e[3]*o3.length)} * fl;
			float lam = max(dot(N, L), 0.0) * 0.82 + 0.18;
			col += w * lam / (0.7 + dd * 0.42);
			// the floor glows in pools round the candles
			col += w * floorK * 0.9 / (0.02 + dd * 7.0);
			spec += w * pow(max(dot(N, normalize(L + V)), 0.0), mix(10.0, 180.0, gloss)) * gloss * 1.6 / (0.25 + dd * 0.9);
		}`).join("")}
		col *= vec3(1.0, 0.56, 0.24) * 0.62;
		spec *= vec3(1.0, 0.62, 0.30) * 0.62;
		// light from the oculus, high above: pale by day, moonlight at night
		float up = smoothstep(0.0, ${an(Sn)}, p.y);
		vec3 sky = mix(vec3(0.10, 0.095, 0.085), vec3(0.030, 0.045, 0.085), night);
		col += sky * (0.35 + 0.65 * up) * (0.55 + 0.45 * max(N.y, 0.0)) * (0.6 + 0.4 * max(-dot(N, normalize(p - vec3(${an(oo.x)}, ${an(Sn)}, ${an(oo.z)}))), 0.0));
		// and straight down from it a soft pool falls on the piano and
		// whoever is playing it: it catches his shoulders, his hair, the
		// edge of the lid, and lifts them out of the dark
		float pool = 1.0 - smoothstep(0.5, 2.9, length(p.xz - vec2(${an(Gl.stoolX)}, ${an(Gl.keyFront+.1)})));
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
	}`}var bo={FLOOR:0,WALL:1,STEP:2,SOFFIT:3,STRING:4,CEIL:5,OCULUS:6,HALLSTONE:7,IRON:8,RAILING:9,CANDLE:10};function a3(){let t={pos:[],nrm:[],kind:[],uv:[],idx:[]};return t.v=(e,o,r,n)=>(t.pos.push(e[0],e[1],e[2]),t.nrm.push(o[0],o[1],o[2]),t.kind.push(r),t.uv.push(n?n[0]:0,n?n[1]:0),t.pos.length/3-1),t.quad=(e,o,r,n,a,s,i)=>{let c=t.v(e,a,s,i&&i[0]),f=t.v(o,a,s,i&&i[1]),l=t.v(r,a,s,i&&i[2]),v=t.v(n,a,s,i&&i[3]);t.idx.push(c,f,l,c,l,v)},t.tri=(e,o,r,n,a)=>{let s=t.v(e,n,a),i=t.v(o,n,a),c=t.v(r,n,a);t.idx.push(s,i,c)},t}function X_(){let t=a3(),e=(r,n,a)=>[oo.x+Math.cos(r)*n,a,oo.z+Math.sin(r)*n],o=r=>[Math.cos(r),0,Math.sin(r)];for(let n=0;n>F0.x0-.01;n-=.25)for(let a=41.2;a<47.8;a+=.2){let s=n-.25,i=n,c=a,f=a+.2;if(!(yc(s,c)||yc(i,c)||yc(s,f)||yc(i,f)||yc((s+i)/2,(c+f)/2)))continue;let l=c,v=f;s>fs(Re.z0)-.3&&(l=Math.max(l,Re.z0),v=Math.min(v,Re.z1),v<=l)||t.quad([s,0,l],[s,0,v],[i,0,v],[i,0,l],[0,1,0],bo.FLOOR)}{for(let n=0;n<360;n++){let a=n/360*2*o0,s=(n+1)/360*2*o0,i=(a+s)/2,c=e(i,Ao,0),f=0;c[0]>oo.x&&c[2]>Re.z0-.02&&c[2]<Re.z1+.02&&(f=Math.max(Oh(Math.min(Math.max(e(a,Ao,0)[2],Re.z0),Re.z1)),Oh(Math.min(Math.max(e(s,Ao,0)[2],Re.z0),Re.z1)))),c[0]<oo.x&&c[2]>F0.z0-.02&&c[2]<F0.z1+.02&&(f=F0.top);let l=a*Ao,v=s*Ao,u=o(a).map(h=>-h),p=o(s).map(h=>-h),d=[f];for(let h=Math.ceil(f/2.5)*2.5;h<Sn;h+=2.5)h>f+.01&&d.push(h);d.push(Sn);for(let h=0;h<d.length-1;h++){let g=d[h],m=d[h+1],x=t.v(e(a,Ao,g),u,bo.WALL,[l,g]),y=t.v(e(s,Ao,g),p,bo.WALL,[v,g]),_=t.v(e(s,Ao,m),p,bo.WALL,[v,m]),M=t.v(e(a,Ao,m),u,bo.WALL,[l,m]);t.idx.push(x,y,_,x,_,M)}}for(let[n,a,s]of[[6.55,.22,.07],[0,.32,.05]])for(let i=0;i<360;i++){let c=i/360*2*o0,f=(i+1)/360*2*o0,l=(c+f)/2,v=e(l,Ao,0);if(n<1&&(v[0]>oo.x&&v[2]>Re.z0&&v[2]<Re.z1||v[0]<oo.x&&v[2]>F0.z0&&v[2]<F0.z1))continue;let u=Ao-s;t.quad(e(c,u,n),e(f,u,n),e(f,u,n+a),e(c,u,n+a),o(l).map(p=>-p),bo.WALL,[[c*Ao,n+100],[f*Ao,n+100],[f*Ao,n+a+100],[c*Ao,n+a+100]]),t.quad(e(c,u,n+a),e(f,u,n+a),e(f,Ao,n+a),e(c,Ao,n+a),[0,1,0],bo.WALL,[[0,200],[0,200],[0,200],[0,200]]),n>1&&t.quad(e(c,Ao,n),e(f,Ao,n),e(f,u,n),e(c,u,n),[0,-1,0],bo.WALL,[[0,200],[0,200],[0,200],[0,200]])}}{let r=Ma.x;for(let[a,s]of[[Re.z0,1],[Re.z1,-1]]){let i=fs(a);t.quad([r,0,a],[i,0,a],[i,Re.spring,a],[r,Re.spring,a],[0,0,s],bo.WALL,[[r,0],[i,0],[i,Re.spring],[r,Re.spring]])}let n=40;for(let a=0;a<n;a++){let s=a/n*o0,i=(a+1)/n*o0,c=Re.zc-Math.cos(s)*Re.r,f=Re.zc-Math.cos(i)*Re.r,l=Re.spring+Math.sin(s)*Re.r,v=Re.spring+Math.sin(i)*Re.r,u=[0,-Math.sin(s),Math.cos(s)],p=[0,-Math.sin(i),Math.cos(i)],d=t.v([r,l,c],u,bo.WALL,[r,s*Re.r]),h=t.v([fs(c),l,c],u,bo.WALL,[fs(c),s*Re.r]),g=t.v([fs(f),v,f],p,bo.WALL,[fs(f),i*Re.r]),m=t.v([r,v,f],p,bo.WALL,[r,i*Re.r]);t.idx.push(d,h,g,d,g,m)}}{let r=Ma.x,n=.05;for(let f=Ma.z0;f<Ma.z1-1e-6;f+=n){let l=f,v=Math.min(Ma.z1,f+n),p=(d=>d>Re.z0&&d<Re.z1)((l+v)/2)?Math.max(Oh(l),Oh(v)):0;t.quad([r,p,l],[r,p,v],[r,Ma.top,v],[r,Ma.top,l],[1,0,0],bo.HALLSTONE,[[l,p],[v,p],[v,Ma.top],[l,Ma.top]])}let a=.32,s=.06,i=r+s,c=36;for(let f=0;f<c;f++){let l=f/c*o0,v=(f+1)/c*o0,u=(m,x)=>[i,Re.spring+Math.sin(m)*x,Re.zc-Math.cos(m)*x],p=Re.r,d=Re.r+a;t.quad(u(l,p),u(v,p),u(v,d),u(l,d),[1,0,0],bo.HALLSTONE,[[0,300],[0,300],[1,300],[1,300]]);let h=(m,x,y)=>[y,Re.spring+Math.sin(m)*x,Re.zc-Math.cos(m)*x],g=[0,Math.sin((l+v)/2),-Math.cos((l+v)/2)];t.quad(h(l,d,r),h(v,d,r),h(v,d,i),h(l,d,i),g,bo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),t.quad(h(l,p,r),h(v,p,r),h(v,p,i),h(l,p,i),g.map(m=>-m),bo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}for(let[f,l,v]of[[Re.z0-a,Re.z0,-1],[Re.z1,Re.z1+a,1]]){t.quad([i,0,f],[i,0,l],[i,Re.spring,l],[i,Re.spring,f],[1,0,0],bo.HALLSTONE,[[0,300],[1,300],[1,300],[0,300]]);let u=v<0?f:l,p=v<0?l:f;t.quad([r,0,u],[i,0,u],[i,Re.spring,u],[r,Re.spring,u],[0,0,v],bo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),t.quad([r,0,p],[i,0,p],[i,Re.spring,p],[r,Re.spring,p],[0,0,-v],bo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);let d=Re.spring-.16,h=.16,g=.11,m=Math.min(f,l)-.05,x=Math.max(f,l)+.05;t.quad([r+g,d,m],[r+g,d,x],[r+g,d+h,x],[r+g,d+h,m],[1,0,0],bo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),t.quad([r,d+h,m],[r+g,d+h,m],[r+g,d+h,x],[r,d+h,x],[0,1,0],bo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),t.quad([r,d,m],[r,d,x],[r+g,d,x],[r+g,d,m],[0,-1,0],bo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);for(let y of[m,x])t.quad([r,d,y],[r+g,d,y],[r+g,d+h,y],[r,d+h,y],[0,0,y===m?-1:1],bo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}{let f=Re.spring+Re.r-.05,l=Re.spring+Re.r+a+.12,v=.16,u=.22,p=i+.04;t.quad([p,f,Re.zc-v],[p,f,Re.zc+v],[p,l,Re.zc+u],[p,l,Re.zc-u],[1,0,0],bo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);for(let d of[-1,1])t.quad([r,f,Re.zc+d*v],[p,f,Re.zc+d*v],[p,l,Re.zc+d*u],[r,l,Re.zc+d*u],[0,0,d],bo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);t.quad([r,l,Re.zc-u],[p,l,Re.zc-u],[p,l,Re.zc+u],[r,l,Re.zc+u],[0,1,0],bo.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}}{let{x0:r,x1:n,z0:a,z1:s,top:i}=F0;t.quad([r,0,a],[r,0,s],[r,i,s],[r,i,a],[1,0,0],bo.WALL,[[a,0],[s,0],[s,i],[a,i]]);for(let[f,l]of[[a,1],[s,-1]]){let v=oo.x-Math.sqrt(Ao*Ao-(f-oo.z)*(f-oo.z));t.quad([r,0,f],[v,0,f],[v,i,f],[r,i,f],[0,0,l],bo.WALL,[[r,0],[v,0],[v,i],[r,i]])}let c=24;for(let f=0;f<c;f++){let l=a+(s-a)*f/c,v=a+(s-a)*(f+1)/c,u=oo.x-Math.sqrt(Ao*Ao-(l-oo.z)**2),p=oo.x-Math.sqrt(Ao*Ao-(v-oo.z)**2);t.quad([r,i,l],[u,i,l],[p,i,v],[r,i,v],[0,-1,0],bo.WALL,[[0,200],[0,200],[0,200],[0,200]])}for(let f=0;f<c;f++){let l=a+(s-a)*f/c,v=a+(s-a)*(f+1)/c,u=oo.x-Math.sqrt(Ao*Ao-(l-oo.z)**2)+.05,p=oo.x-Math.sqrt(Ao*Ao-(v-oo.z)**2)+.05;t.quad([u,i-.3,l],[p,i-.3,v],[p,i,v],[u,i,l],[1,0,0],bo.WALL,[[0,200],[0,200],[0,200],[0,200]])}}{let n=[1.15,1.6,2.3,3,3.35,4.2,Ao];for(let a=0;a<120;a++){let s=a/120*2*o0,i=(a+1)/120*2*o0,c=(s+i)/2;c>o0&&(c-=2*o0);for(let f=0;f<n.length-1;f++){let l=n[f],v=n[f+1],u=c*180/o0;l>=3.3&&u>8&&u<85||t.quad(e(s,l,Sn),e(s,v,Sn),e(i,v,Sn),e(i,l,Sn),[0,-1,0],bo.CEIL,[[s*l,l],[s*v,v],[i*v,v],[i*l,l]])}t.quad(e(s,1.15,Sn),e(i,1.15,Sn),e(i,1.15,Sn+.7),e(s,1.15,Sn+.7),o(c).map(f=>-f),bo.CEIL,[[0,400],[0,400],[0,400],[0,400]]),t.tri([oo.x,Sn+.7,oo.z],e(i,1.15,Sn+.7),e(s,1.15,Sn+.7),[0,-1,0],bo.OCULUS)}}{let r=Ko.ri,n=Ko.ro,a=Ko.n*Ko.step;for(let c=0;c<Ko.n;c++){let f=c*Ko.step,l=(c+1)*Ko.step,v=Qn(f),u=Qn(l),p=(c+1)*Ko.rise,d=c*Ko.rise,h=2;for(let x=0;x<h;x++){let y=v+(u-v)*x/h-(x===0?.004:0),_=v+(u-v)*(x+1)/h;t.quad(e(y,r,p),e(y,n,p),e(_,n,p),e(_,r,p),[0,1,0],bo.STEP,[[r*y,c],[n*y,c],[n*_,c],[r*_,c]])}let g=[-Math.sin(v),0,Math.cos(v)],m=v-.004;t.quad(e(m,r,d),e(m,n,d),e(m,n,p),e(m,r,p),g,bo.STEP,[[r*v,c+.5],[n*v,c+.5],[n*v,c+.5],[r*v,c+.5]]),t.quad(e(v,r,hs(f)+.06),e(u,r,hs(l)+.06),e(u,r,p),e(m,r,p),o((v+u)/2).map(x=>-x),bo.STEP,[[0,500],[0,500],[0,500],[0,500]])}let s=Math.ceil(a/(1.2*o0/180)),i=[r,r+.6,r+1.2,n];for(let c=0;c<s;c++){let f=c/s*a,l=(c+1)/s*a,v=Qn(f),u=Qn(l),p=hs(f),d=hs(l),h=p-Ko.thick,g=d-Ko.thick,m=o(v).map(k=>-k),x=o(u).map(k=>-k),y=t.v(e(v,r,h),m,bo.STRING,[f*r,0]),_=t.v(e(u,r,g),x,bo.STRING,[l*r,0]),M=t.v(e(u,r,d+.06),x,bo.STRING,[l*r,1]),b=t.v(e(v,r,p+.06),m,bo.STRING,[f*r,1]);t.idx.push(y,_,M,y,M,b);for(let k=0;k<i.length-1;k++){let E=i[k],z=i[k+1],P=R=>{let B=o(R);return[-B[0]*.12,-.99,-B[2]*.12]};t.quad(e(v,E,h),e(v,z,h),e(u,z,g),e(u,E,g),P((v+u)/2),bo.SOFFIT,[[f*E,E],[f*z,z],[l*z,z],[l*E,E]])}}}return t}function Y_(){let t=a3(),e=Ko.ri+.045,o=Ko.n*Ko.step,r=Math.ceil(o/(.8*o0/180)),n=.92,a=(c,f,l)=>[oo.x+Math.cos(c)*f,l,oo.z+Math.sin(c)*f],s=c=>[Math.cos(c),0,Math.sin(c)];for(let c=0;c<r;c++){let f=c/r*o,l=(c+1)/r*o,v=Qn(f),u=Qn(l),p=hs(f)+.06,d=hs(l)+.06,h=s(v).map(k=>-k),g=s(u).map(k=>-k),m=f*e,x=l*e,y=t.v(a(v,e,p),h,bo.RAILING,[m,0]),_=t.v(a(u,e,d),g,bo.RAILING,[x,0]),M=t.v(a(u,e,d+n),g,bo.RAILING,[x,n]),b=t.v(a(v,e,p+n),h,bo.RAILING,[m,n]);t.idx.push(y,_,M,y,M,b)}((c,f,l,v)=>{let p=h=>{let g=Qn(h),m=hs(h)+.06+f,x=a(g,e+c,m),y=s(g),_=[];for(let M=0;M<8;M++){let b=M/8*2*o0,k=[y[0]*Math.cos(b),Math.sin(b),y[2]*Math.cos(b)];_.push([[x[0]+k[0]*l,x[1]+k[1]*l,x[2]+k[2]*l],k])}return _},d=p(0);for(let h=1;h<=r;h++){let g=p(h/r*o);for(let m=0;m<8;m++){let x=(m+1)%8,y=t.v(d[m][0],d[m][1],v),_=t.v(g[m][0],g[m][1],v),M=t.v(g[x][0],g[x][1],v),b=t.v(d[x][0],d[x][1],v);t.idx.push(y,_,M,y,M,b)}d=g}})(0,n+.02,.028,bo.IRON);for(let c of xd){let f=Math.atan2(c[2]-oo.z,c[0]-oo.x),l=[Math.cos(f),0,Math.sin(f)],v=12;for(let h=0;h<v;h++){let g=h/v*2*o0,m=(h+1)/v*2*o0,x=(y,_,M)=>[c[0]+Math.cos(y)*_,M,c[2]+Math.sin(y)*_];t.quad(x(g,.16,c[1]),x(m,.16,c[1]),x(m,.13,c[1]-.05),x(g,.13,c[1]-.05),[Math.cos(g)*.6,.8,Math.sin(g)*.6],bo.IRON),t.quad(x(g,.16,c[1]),x(m,.16,c[1]),x(m,0,c[1]+.002),x(g,0,c[1]+.002),[0,1,0],bo.IRON)}let u=[c[0]+l[0]*.16,c[1]-.35,c[2]+l[2]*.16],p=[-l[2],0,l[0]],d=.018;t.quad([u[0]-p[0]*d,u[1],u[2]-p[2]*d],[u[0]+p[0]*d,u[1],u[2]+p[2]*d],[c[0]+p[0]*d,c[1]-.05,c[2]+p[2]*d],[c[0]-p[0]*d,c[1]-.05,c[2]-p[2]*d],[-l[0],.5,-l[2]],bo.IRON)}{let c=Qn(0),f=a(c,e,0),l=10;for(let v=0;v<l;v++){let u=v/l*2*o0,p=(v+1)/l*2*o0,d=(h,g,m)=>[f[0]+Math.cos(h)*g,m,f[2]+Math.sin(h)*g];t.quad(d(u,.035,0),d(p,.035,0),d(p,.035,n+.1),d(u,.035,n+.1),[Math.cos((u+p)/2),0,Math.sin((u+p)/2)],bo.IRON),t.quad(d(u,.06,n+.1),d(p,.06,n+.1),d(p,.03,n+.2),d(u,.03,n+.2),[Math.cos((u+p)/2)*.8,.6,Math.sin((u+p)/2)*.8],bo.IRON)}}return t}function K_(){let t=[],e=[],o=[],r=[];for(let a of yd){let[s,i,c,f,l,v]=a,u=t.length/3;for(let d=0;d<=7;d++){let h=d/7*2*o0+v,g=Math.cos(h),m=Math.sin(h);t.push(s+g*f,i,c+m*f,s+g*f,i+l,c+m*f),e.push(g,0,m,g,0,m),o.push(0,l,v,1,l,v)}for(let d=0;d<7;d++){let h=u+d*2;r.push(h,h+2,h+3,h,h+3,h+1)}let p=t.length/3;t.push(s,i+l-.006,c),e.push(0,1,0),o.push(2,l,v);for(let d=0;d<7;d++){let h=d/7*2*o0+v;t.push(s+Math.cos(h)*f,i+l,c+Math.sin(h)*f),e.push(0,1,0),o.push(1,l,v)}for(let d=0;d<7;d++)r.push(p,p+1+d,p+1+(d+1)%7)}return{pos:t,nrm:e,info:o,idx:r}}function Z_(){let t=[],e=[],o=[],r=[];for(let n of yd){let[a,s,i,,c,f]=n,l=t.length/3;for(let v of[[-1,0],[1,0],[1,1],[-1,1]])t.push(a,s+c+.004,i),e.push(v[0],v[1]),o.push(f);r.push(l,l+1,l+2,l,l+2,l+3)}return{ctr:t,corner:e,ph:o,idx:r}}function Q_(t){let e=new DataView(t),o=e.getUint32(4,!0),r=e.getUint32(8,!0),n=[],a=[];for(let m=0;m<3;m++)n.push(e.getFloat32(12+m*4,!0)),a.push(e.getFloat32(24+m*4,!0));let s=36,i=new Uint16Array(t,s,o*3);s+=o*6;let c=new Uint16Array(t,s,r);s+=r*2;let f=new Int8Array(t,s,o*3);s+=o*3;let l=new Uint8Array(t,s,o),v=new Float32Array(o*3),u=new Float32Array(o*3),p=new Float32Array(o),d=Math.cos(k0.yaw),h=Math.sin(k0.yaw),g=k0.scale;for(let m=0;m<o;m++){let x=(n[0]+i[m*3]/65535*a[0])*g,y=(n[1]+i[m*3+1]/65535*a[1])*g,_=(n[2]+i[m*3+2]/65535*a[2])*g;v[m*3]=k0.x+d*x+h*_,v[m*3+1]=y,v[m*3+2]=k0.z-h*x+d*_;let M=f[m*3]/127,b=f[m*3+1]/127,k=f[m*3+2]/127;u[m*3]=d*M+h*k,u[m*3+1]=b,u[m*3+2]=-h*M+d*k,p[m]=l[m]}return{pos:v,nrm:u,mat:p,idx:new Uint32Array(c)}}function J_(){let t=[],e=(v,u)=>[oo.x+Math.cos(v)*u,oo.z+Math.sin(v)*u];t.push([[0,Re.z0],[fs(Re.z0),Re.z0]]),t.push([[fs(Re.z1),Re.z1],[0,Re.z1]]);let o=Math.asin((Re.z1-oo.z)/Ao),r=72;for(let v=0;v<r;v++){let u=o+v/r*(2*o0-2*o),p=o+(v+1)/r*(2*o0-2*o);t.push([e(u,Ao-.25),e(p,Ao-.25)])}let n=Ch[0]-.55+.35;t.push([[n,F0.z0],[n,F0.z1]]);let a=2.4/Ko.k,s=12;for(let v=0;v<s;v++){let u=Qn(v/s*a),p=Qn((v+1)/s*a);t.push([e(u,Ko.ri-.2),e(p,Ko.ri-.2)])}t.push([e(Qn(0),Ko.ri-.2),e(Qn(0),Ao)]),t.push([e(Qn(a),Ko.ri-.2),e(Qn(a),Ao)]);let i=Math.cos(k0.yaw),c=Math.sin(k0.yaw),f=k0.scale,l=[[-1,-.62],[1.25,-.62],[1.25,.62],[-1,.62]].map(([v,u])=>[k0.x+(i*v+c*u)*f,k0.z+(-c*v+i*u)*f]);for(let v=0;v<4;v++)t.push([l[v],l[(v+1)%4]]);return t}hr.exports=t=>{let e=X_(),o=Y_(),r=K_(),n=Z_(),a=ls(),s=`
	precision highp float;
	${H_.GLSL}
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
				base *= 1.0 - 0.25 * smoothstep(3.0, ${an(Sn)}, v_pos.y);
			} else if (k < 2.5) {
				// the steps: a greyer, harder stone, worn paler in the middle
				float r = length(v_pos.xz - vec2(${an(oo.x)}, ${an(oo.z)}));
				base = limestone(v_pos.xz * 1.4 + v_uv * 0.3) * vec3(0.90, 0.88, 0.86);
				base *= 1.0 + 0.10 * (1.0 - smoothstep(0.0, 0.6, abs(r - ${an((Ko.ri+Ko.ro)/2)})));
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
				vec2 q = v_pos.xz - vec2(${an(oo.x)}, ${an(oo.z)});
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
		}`,attributes:{ctr:n.ctr,corner:n.corner,ph:n.ph},elements:new Uint32Array(n.idx),uniforms:{halo:t.prop("halo")},depth:{enable:!0,mask:!1},cull:{enable:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),u=null;fetch("res/piano.bin").then(g=>{if(!g.ok)throw new Error("Could not load piano.bin");return g.arrayBuffer()}).then(g=>{let m=Q_(g);u=t({vert:`
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
				}`,attributes:{position:m.pos,normal:m.nrm,mat:m.mat},elements:m.idx,cull:{enable:!1}})}).catch(g=>console.error(g));let p=(()=>{let g=[],m=[],x=[],y=[],M=[oo.x,Sn-.3,oo.z],b=[Gl.stoolX,.02,Gl.keyFront+.1],k=1.25,E=2.35;for(let z=0;z<=40;z++){let P=z/40*2*o0,R=Math.cos(P),B=Math.sin(P);g.push(M[0]+R*k,M[1],M[2]+B*k,b[0]+R*E,b[1],b[2]+B*E),m.push(R,.08,B,R,.08,B),x.push(1,0)}for(let z=0;z<40;z++){let P=z*2;y.push(P,P+1,P+3,P,P+3,P+2)}return{pos:g,nrm:m,hh:x,idx:y}})(),d=t({vert:`
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
		}`,attributes:{position:p.pos,normal:p.nrm,hh:p.hh},elements:p.idx,depth:{enable:!0,mask:!1},cull:{enable:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});function h(g){let m=g&&g.reflected;c(),f(),l(),u&&u(),m||(d(),v({halo:1}),v({halo:0}))}return h};hr.exports.C=oo;hr.exports.R=Ao;hr.exports.PASS=Re;hr.exports.SURR=Ma;hr.exports.OFF=Ch;hr.exports.BAY=F0;hr.exports.PATH=Rh;hr.exports.PIANO=k0;hr.exports.PLAY=Gl;hr.exports.TOP=Sn;hr.exports.roomGLSL=r3;hr.exports.segments=J_});var v3=Tt((QE,p3)=>{"use strict";var tM=Js(),{addFlutedColumn:s3,addStatue:eM,addPlant:oM}=Cm(),i3=ss(),nM=uc(),aa=On(),rM=Gr(),wc=us(),Ho=14,H0=aa.C.hallEnd+.35,i0=8,Qo=.35,bd=1.15,wd=1.15,_d=[18,29,40],aM=[[[0,0],[0,wc.PASS.z0]],[[0,wc.PASS.z1],[0,H0]],[[Ho,H0],[Ho,0]],[[0,0],[Ho,0]],[[Ho,H0],[0,H0]]],h3=[];for(let t of _d)for(let e of[1.25,Ho-1.25]){let o=bd/2,r=wd/2;h3.push([[e-o,t-r],[e+o,t-r]],[[e+o,t-r],[e+o,t+r]],[[e+o,t+r],[e-o,t+r]],[[e-o,t+r],[e-o,t-r]])}var Ph=12,u3=2.95,d3=.62,Dh=u3+d3,Ih=[{file:"venus.bin",x:1.85,z:H0-1.6,yaw:2.67,height:5.2,pedestal:!0,mat:1},{file:"david.bin",x:Ho-2.1,z:H0-1.6,yaw:-2.67,height:5.2,pedestal:!0,mat:1},{file:"pieta.bin",x:1.75,z:5.9,yaw:Math.PI/2,height:3.6,base:1,mat:1},{file:"spinario.bin",x:aa.NICHE_X[0],z:aa.NICHE_STATUE_Z,yaw:-.35,height:1.85,base:aa.NICHE_PLINTH_TOP,mat:3},{file:"charioteer.bin",x:aa.NICHE_X[1],z:aa.NICHE_STATUE_Z+.1,yaw:0,height:2.95,base:aa.NICHE_PLINTH_TOP,mat:3}],sM={x0:Qo,x1:3.15,z0:3.6,z1:8.2,top:1},c3=.8,Fh=1.17,Hl=[];[{z:10.4,dz:-.7},{z:19.2,dz:.7},{z:27.8,dz:-.7}].forEach((t,e)=>{Hl.push({x:1,z:t.z,seed:11+e*7,away:[1,t.dz]}),Hl.push({x:Ho-1,z:t.z,seed:53+e*5,away:[-1,t.dz]})});function Md(t,e,o,r){return[[[t-o,e-r],[t+o,e-r]],[[t+o,e-r],[t+o,e+r]],[[t+o,e+r],[t-o,e+r]],[[t-o,e+r],[t-o,e-r]]]}var Gh=[];for(let t of[-1,1])Gh.push(...Md(Ho/2+t*Dh,Ph,.85,.85));for(let t of Ih.filter(e=>e.pedestal))Gh.push(...Md(t.x,t.z,Fh*1.1,Fh*1.1));for(let t of Hl)Gh.push(...Md(t.x,t.z,.42,.42));var iM=aM.concat(h3,Gh,wc.segments());function cM(t){let o=new Map,r=(n,a,s)=>{let i=n+":"+a;o.has(i)||o.set(i,[]);let c=o.get(i);c.includes(s)||c.push(s)};for(let n of t){let a=Math.floor(Math.min(n[0][0],n[1][0])/4)-1,s=Math.floor(Math.max(n[0][0],n[1][0])/4)+1,i=Math.floor(Math.min(n[0][1],n[1][1])/4)-1,c=Math.floor(Math.max(n[0][1],n[1][1])/4)+1;for(let f=a;f<=s;f++)for(let l=i;l<=c;l++)r(f,l,n)}return{get(n,a){let s=Math.floor(n/4),i=Math.floor(a/4),c=[];for(let f=-1;f<=1;f++)for(let l=-1;l<=1;l++){let v=o.get(s+f+":"+(i+l));v&&c.push(...v)}return[...new Set(c)]}}}var qh=[],G0={curMat:[0,0,0]};function kd(t,e,o,r,n,a,s){let i=t.length/3;t.push(...o,...r,...n,...a),e.push(...s,...s,...s,...s);let c=G0.curMat;return qh.push(...c,...c,...c,...c),[i,i+2,i+1,i+1,i+2,i+3]}function Zo(t,e,o,r,n,a,s,i,c){let f=(l,v,u,p,d)=>{o.push(...kd(t,e,l,v,u,p,d))};f([r,n,a],[s,n,a],[r,i,a],[s,i,a],[0,0,-1]),f([s,n,c],[r,n,c],[s,i,c],[r,i,c],[0,0,1]),f([r,n,c],[r,n,a],[r,i,c],[r,i,a],[-1,0,0]),f([s,n,a],[s,n,c],[s,i,a],[s,i,c],[1,0,0]),f([r,i,a],[s,i,a],[r,i,c],[s,i,c],[0,1,0]),f([r,n,c],[s,n,c],[r,n,a],[s,n,a],[0,-1,0])}function bc(t,e,o,r,n){let a=G0,s=a.vert(t,n),i=a.vert(e,n),c=a.vert(o,n),f=a.vert(r,n);a.tri(s,i,c),a.tri(i,f,c)}function l3(t,e,o,r,n,a,s){for(let i=0;i<s;i++){let c=Math.PI*i/s,f=Math.PI*(i+1)/s,l=Math.cos(c),v=Math.sin(c),u=Math.cos(f),p=Math.sin(f),d=[t+o*l,e+o*v],h=[t+o*u,e+o*p],g=[t+r*l,e+r*v],m=[t+r*u,e+r*p];bc([d[0],d[1],n],[h[0],h[1],n],[g[0],g[1],n],[m[0],m[1],n],[0,0,-1]),bc([d[0],d[1],a],[h[0],h[1],a],[g[0],g[1],a],[m[0],m[1],a],[0,0,1]);let x=(c+f)/2;bc([d[0],d[1],n],[h[0],h[1],n],[d[0],d[1],a],[h[0],h[1],a],[-Math.cos(x),-Math.sin(x),0]),bc([g[0],g[1],n],[m[0],m[1],n],[g[0],g[1],a],[m[0],m[1],a],[Math.cos(x),Math.sin(x),0])}}function lM(t,e,o,r,n,a,s){for(let i=0;i<s;i++){let c=Math.PI*i/s,f=Math.PI*(i+1)/s,l=t+o*Math.cos(c),v=e+o*Math.sin(c),u=t+o*Math.cos(f),p=e+o*Math.sin(f);bc([l,v,n],[u,p,n],[l,r,n],[u,r,n],[0,0,-1]),bc([l,v,a],[u,p,a],[l,r,a],[u,r,a],[0,0,1])}}function fM(t,e,o,r){let n=Ho/2,a=u3,s=3,i=a+.42,c=i+.15,f=d3,l=Dh,v=5.98,u=r-.45,p=r+.45,d=64,h=s3(G0,n-l,r,0,v,f);s3(G0,n+l,r,0,v,f),G0.curMat=[0,0,0],l3(n,s,a,i,u,p,d),l3(n,s,i,c,u-.07,p+.07,d),lM(n,s,c,h+.05,u,p,d);for(let m of[-1,1]){let x=n+m*(c-.02),y=n+m*l;Zo(t,e,o,Math.min(x,y),s,u,Math.max(x,y),h+.05,p)}for(let m of[-1,1]){let x=n+m*(a-.05),y=n+m*(a+.85);Zo(t,e,o,Math.min(x,y),s-.16,r-.6,Math.max(x,y),s,r+.6)}let g=l+f*1.42+.45;Zo(t,e,o,n-g,h,r-.7,n+g,h+.44,r+.7),Zo(t,e,o,n-g+.12,h+.44,r-.62,n+g-.12,h+.7,r+.62),Zo(t,e,o,n-g-.1,h+.7,r-.84,n+g+.1,h+.84,r+.84),Zo(t,e,o,n-g-.22,h+.84,r-.96,n+g+.22,h+1,r+.96),Zo(t,e,o,n-.3,s+a-.1,r-.56,n+.3,h,r+.56)}function f3(t,e,o,r,n){Zo(t,e,o,r-.72,0,n-.72,r+.72,.2,n+.72),Zo(t,e,o,r-.58,.2,n-.58,r+.58,.4,n+.58),Zo(t,e,o,r-bd/2,.4,n-wd/2,r+bd/2,i0-1.35,n+wd/2),Zo(t,e,o,r-.67,.42,n-.67,r+.67,.62,n+.67),Zo(t,e,o,r-.67,i0-1.58,n-.67,r+.67,i0-1.35,n+.67),Zo(t,e,o,r-.82,i0-1.35,n-.82,r+.82,i0-1.05,n+.82),Zo(t,e,o,r-.66,i0-1.05,n-.66,r+.66,i0-.78,n+.66),Zo(t,e,o,r-.92,i0-.78,n-.92,r+.92,i0-.55,n+.92),Zo(t,e,o,r-.78,i0-.55,n-.78,r+.78,i0-.3,n+.78),Zo(t,e,o,r-.92,i0-.3,n-.92,r+.92,i0-.1,n+.92)}function $h(t,e,o,r,n){n==="left"?(Zo(t,e,o,-.08,1,r-3.8/2,.14,5.7,r+3.8/2),Zo(t,e,o,-.08-.04,1+.18,r-3.8/2+.18,.18,5.7-.18,r+3.8/2-.18)):(Zo(t,e,o,Ho-.14,1,r-3.8/2,Ho+.08,5.7,r+3.8/2),Zo(t,e,o,Ho-.18,1+.18,r-3.8/2+.18,Ho+.08+.04,5.7-.18,r+3.8/2-.18))}function hM(t,e,o,r){Zo(t,e,o,.65,i0-.16,r-1.65,.65+.22,i0,r+1.65),Zo(t,e,o,Ho-.65-.22,i0-.16,r-1.65,Ho-.65,i0,r+1.65),Zo(t,e,o,.65,i0-.16,r-1.65,Ho-.65,i0,r-1.43),Zo(t,e,o,.65,i0-.16,r+1.43,Ho-.65,i0,r+1.65),o.push(...kd(t,e,[.65+.22,i0-.16,r-1.43],[Ho-.65-.22,i0-.16,r-1.43],[.65+.22,i0-.16,r+1.43],[Ho-.65-.22,i0-.16,r+1.43],[0,-1,0]))}p3.exports=function(){let t=[],e=[],o=[];qh=[],G0=tM.createBuilder(t,e,o,qh),o.push(...kd(t,e,[0,0,0],[Ho,0,0],[0,0,H0],[Ho,0,H0],[0,1,0])),nM.addSkylight(G0,[0,0,0],H0),G0.curMat=[0,0,0];{let c=wc.SURR;Zo(t,e,o,-Qo,0,0,Qo,i0,c.z0),Zo(t,e,o,-Qo,0,c.z1,Qo,i0,H0),Zo(t,e,o,-Qo,c.top,c.z0,Qo,i0,c.z1)}Zo(t,e,o,Ho-Qo,0,aa.C.z1,Ho+Qo,i0,H0-Qo),Zo(t,e,o,Ho-Qo-.12,0,aa.C.z1+2*Qo,Ho-Qo,.42,H0-Qo),Zo(t,e,o,Ho-Qo-.07,.42,aa.C.z1+2*Qo,Ho-Qo,.5,H0-Qo);for(let[c,f]of[[0,wc.SURR.z0],[wc.SURR.z1,H0-Qo]])Zo(t,e,o,Qo,0,c,Qo+.12,.42,f),Zo(t,e,o,Qo,.42,c,Qo+.07,.5,f);Zo(t,e,o,Qo,0,H0-Qo-.12,Ho-Qo,.42,H0-Qo),Zo(t,e,o,Qo,.42,H0-Qo-.07,Ho-Qo,.5,H0-Qo),i3.addEntranceWall(G0),i3.addFrames(G0),G0.curMat=[0,0,0],Zo(t,e,o,-Qo,0,H0-Qo,Ho+Qo,i0,H0+Qo),fM(t,e,o,Ph);for(let c of _d)f3(t,e,o,1.25,c),f3(t,e,o,Ho-1.25,c);$h(t,e,o,22,"left"),$h(t,e,o,25,"right"),$h(t,e,o,33,"left"),$h(t,e,o,36,"right");let r=[4,9,34,39,44,49];for(let c of r)hM(t,e,o,c);aa.addWing(G0),G0.curMat=[0,0,0];for(let c of Ih.filter(f=>f.pedestal))eM(G0,c.x,c.z,Fh,c3);{let c=sM;G0.curMat=[0,0,0],G0.box(c.x0,0,c.z0-.08,c.x1+.08,.16,c.z1+.08,[0,0,0]),G0.box(c.x0,.16,c.z0+.04,c.x1-.04,c.top-.14,c.z1-.04,[0,0,0]),G0.box(c.x0,c.top-.14,c.z0-.02,c.x1+.03,c.top-.06,c.z1+.02,[0,0,0]),G0.box(c.x0,c.top-.06,c.z0-.06,c.x1+.07,c.top,c.z1+.06,[0,0,0])}rM.addAlcove(G0);for(let c of Hl)oM(G0,c.x,c.z,c.seed,1,c.away);G0.curMat=[0,0,0];let n=[[[Ho,H0-.35],[0,H0-.35]],[[0,3],[0,10]],[[Ho,15],[Ho,22]],[[0,24],[0,31]],[[Ho,33],[Ho,40]],[[0,41],[0,46]]],a=cM(iM),s=(c,f)=>{let l=0,v=1/0;return n.forEach((u,p)=>{let d=(u[0][0]+u[1][0])/2,h=(u[0][1]+u[1][1])/2,g=Math.hypot(c-d,f-h);g<v&&(v=g,l=p)}),l},i=[];for(let c=0;c<10;c++)i.push({c:[0,0,0,0],d:[1,0,0,0]});return{placements:n,lights:i,statues:Ih,occluders:[..._d.flatMap(c=>[[1.25,c,.78],[Ho-1.25,c,.78]]),[Ho/2-Dh,Ph,.86],[Ho/2+Dh,Ph,.86],...Ih.filter(c=>c.pedestal).map(c=>[c.x,c.z,Fh*1.12]),...Hl.map(c=>[c.x,c.z,.34])],pedestalTop:c3,mat:qh,getAreaIndex:s,getGridSegments:(c,f)=>a.get(c,f),getGridParts:(c,f)=>a.get(c,f),position:t,normal:e,elements:o}}});var Sd=Tt((JE,m3)=>{"use strict";var{doorLightGLSL:uM}=ss(),{skylightGLSL:dM}=uc(),{windowLightGLSL:pM,C:Sr}=On(),{alcoveLightGLSL:vM}=Gr(),Hr=t=>t.toFixed(4),mM=(()=>{let t=[-.22,.6,-.77],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>(o/e).toFixed(4)).join(", ")})();m3.exports=(t,e,o,r)=>{let a=(e.occluders||[]).slice(0,24).map(([p,d,h])=>`ao = min(ao, contact(v_pos.xz, vec2(${p.toFixed(3)}, ${d.toFixed(3)}), ${h.toFixed(3)}));`).join(`
      `),s={c:[0,0,0,0],d:[1,0,0,0]},i=-1,c=[],f=p=>{let d=p&&p.tick!==void 0?p.tick:0;if(d!==i||c.length===0){i=d;let h=e.viewer||[7,2,20];for(c=e.lights.filter(g=>g.c[3]>.5).map(g=>({l:g,d:Math.hypot(g.c[0]-h[0],g.c[2]-h[2])})).sort((g,m)=>g.d-m.d).slice(0,8).map(g=>g.l);c.length<8;)c.push(s)}return c},l={},v="",u="";for(let p=0;p<8;p++)l["lightC"+p]=d=>f(d)[p].c,l["lightD"+p]=d=>f(d)[p].d,v+="uniform vec4 lightC"+p+", lightD"+p+`;
`,u+="pic += pictureLight(lightC"+p+", lightD"+p+`, v_pos, N);
`;return t({frag:`
    precision highp float;

    uniform float yScale;
    uniform float mirrorOn;
    uniform float night;   // 0 by day, 1 at night
    uniform float time;
    ${ls().lanternGLSL()}

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

    ${uM()}

    ${dM()}

    ${pM()}

    ${vM()}

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
      ${u}

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
          float through = doorLight(v_pos, vec3(${mM}));
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
    }`,attributes:{position:e.position,normal:e.normal,a_mat:e.mat},uniforms:l,blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"zero"}},elements:new Uint32Array(e.elements),offset:r?t.prop("offset"):0,count:r?t.prop("count"):e.elements.length})}});var x3=Tt((tA,g3)=>{"strict mode";var gM="https://api.artic.edu/api/v1/artworks/search",xM=({image_id:t},e)=>`https://www.artic.edu/iiif/2/${t}/full/${e},/0/default.jpg`,yM="?query[bool][must][][term][classification_titles.keyword]=painting&query[bool][must][][term][is_public_domain]=true",bM="&fields=image_id,title,artist_title",wM={low:400,mid:843,high:1686};g3.exports={fetchList:async function(t,e){let o=gM+yM+bM+`&from=${t}&size=${e}`;return(await fetch(o).then(n=>n.json())).data.filter(n=>n.image_id)},fetchImage:async function(t,e){let o=xM(t,wM[e]),r=await fetch(o).then(n=>n.blob());return{title:t.title+" - "+t.artist_title,image:r}}}});var w3=Tt((eA,b3)=>{"use strict";var _M=Vu(),MM=qr(),kM=t=>"images/web/"+t.slug+(MM.isPhone?"-1024":"")+".webp";async function y3(t){let e=await fetch(t);if(!e.ok)throw new Error("Could not load "+t);return e.blob()}b3.exports={fetchList:async function(t,e){return _M.slice(t,t+e).map((o,r)=>({...o,image_id:t+r}))},fetchImage:async function(t){let e;try{e=await y3(kM(t))}catch(o){e=await y3("images/"+t.file)}return{title:t.title,image:e}}}});var M3=Tt((oA,_3)=>{"strict mode";_3.exports={default:"local",artic:x3(),local:w3()}});var Ed=Tt((nA,S3)=>{"strict mode";var ri=document.createElement("canvas"),zd=ri.width=ri.height=1024,ds=ri.getContext("2d");ds.mozImageSmoothingEnabled=!1;ds.webkitImageSmoothingEnabled=!1;ds.font="32px Verdana";ds.textBaseline="bottom";ds.fillStyle="#aaa";function k3(t,e,o,r){var n=e,a,s=0,i=0,c=e.split(" "),f,l;for(f=l=c.length;t.measureText(n).width>o&&f>1;){f--,n=a="";for(var v=0;v<l;v++)v<f?(n+=c[v],v+1<f&&(n+=" ")):(a+=c[v],v+1<l&&(a+=" "))}return r.push(n),i=t.measureText(n).width,a&&(s=k3(t,a,o,r),s>i&&(i=s)),i}S3.exports={init(t,e,o=zd){var r=[];k3(ds,e,Math.min(o*zd,zd),r),ds.clearRect(0,0,ri.width,ri.height);for(var n=0;n<r.length;n++)ds.fillText(r[n],0,ri.height-(Math.max(r.length,3)-n)*32);return t({data:ri,min:"mipmap",mipmap:"nice",flipY:!0})},draw(t){return t({frag:`
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
            }`,attributes:{pos:[0,0,1,0,0,1,1,1,0,1,1,0]},uniforms:{model:t.prop("textmodel"),tex:t.prop("text")},count:6,blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}})}}});var A3=Tt((rA,E3)=>{"strict mode";var Ad=M3(),SM=new URLSearchParams(window.location.search).get("api"),z3=Ad[SM]||Ad[Ad.default],zM=Ed(),Td={},Mc=[],EM=2;function AM(t){return(!navigator.connection||navigator.connection.downlink<EM)&&(t=t=="high"?"mid":"low"),t}var TM=qr(),_c=document.createElement("canvas");_c.width=_c.height=TM.isPhone?1024:2048;var Od=_c.getContext("2d");Od.imageSmoothingEnabled=!0;Od.imageSmoothingQuality="high";var Ld=!1,LM=t=>[(Mc.pop()||t.texture)([[[200,200,200]]]),e=>(Mc.pop()||t.texture)([[[0,0,0,0]]]),1];async function Nd(t,e,o){Ld===!1&&(Ld=t.hasExtension("EXT_texture_filter_anisotropic")?t._gl.getParameter(t._gl.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0);let r,n;try{let a=await z3.fetchImage(e,AM(o));n=a.title,r=await createImageBitmap(a.image),Od.drawImage(r,0,0,_c.width,_c.height)}catch(a){return console.error(a),o=="high"?await Nd(t,e,"low"):LM(t)}return[(Mc.pop()||t.texture)({data:_c,min:"mipmap",mipmap:"nice",aniso:Ld,flipY:!0}),a=>zM.init(Mc.pop()||t.texture,n,a),r.width/r.height]}E3.exports={fetch:(t,e=10,o="low",r,n)=>{let a=Object.keys(Td).length;z3.fetchList(a,e).then(s=>{e=s.length,s.map(i=>{if(Td[i.image_id]){--e===0&&n();return}Td[i.image_id]=i,Nd(t,i,o).then(([c,f,l])=>{r({...i,tex:c,textGen:f,aspect:l}),--e===0&&n()})})})},load:(t,e,o="low")=>{e.tex||e.loading||(e.loading=!0,Nd(t,e,o).then(([r,n])=>{e.loading=!1,e.tex=r,e.text=n(e.width)}))},unload:t=>{t.tex&&(Mc.push(t.tex),t.tex=void 0),t.text&&(Mc.push(t.text),t.text=void 0)}}});var L3=Tt((aA,T3)=>{T3.exports=NM;function NM(){var t=new Float32Array(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var O3=Tt((sA,N3)=>{N3.exports=OM;function OM(t){var e=new Float32Array(16);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}});var C3=Tt((iA,R3)=>{R3.exports=RM;function RM(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}});var Rd=Tt((cA,$3)=>{$3.exports=CM;function CM(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var I3=Tt((lA,P3)=>{P3.exports=$M;function $M(t,e){if(t===e){var o=e[1],r=e[2],n=e[3],a=e[6],s=e[7],i=e[11];t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=o,t[6]=e[9],t[7]=e[13],t[8]=r,t[9]=a,t[11]=e[14],t[12]=n,t[13]=s,t[14]=i}else t[0]=e[0],t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=e[1],t[5]=e[5],t[6]=e[9],t[7]=e[13],t[8]=e[2],t[9]=e[6],t[10]=e[10],t[11]=e[14],t[12]=e[3],t[13]=e[7],t[14]=e[11],t[15]=e[15];return t}});var D3=Tt((fA,q3)=>{q3.exports=PM;function PM(t,e){var o=e[0],r=e[1],n=e[2],a=e[3],s=e[4],i=e[5],c=e[6],f=e[7],l=e[8],v=e[9],u=e[10],p=e[11],d=e[12],h=e[13],g=e[14],m=e[15],x=o*i-r*s,y=o*c-n*s,_=o*f-a*s,M=r*c-n*i,b=r*f-a*i,k=n*f-a*c,E=l*h-v*d,z=l*g-u*d,P=l*m-p*d,R=v*g-u*h,B=v*m-p*h,$=u*m-p*g,D=x*$-y*B+_*R+M*P-b*z+k*E;return D?(D=1/D,t[0]=(i*$-c*B+f*R)*D,t[1]=(n*B-r*$-a*R)*D,t[2]=(h*k-g*b+m*M)*D,t[3]=(u*b-v*k-p*M)*D,t[4]=(c*P-s*$-f*z)*D,t[5]=(o*$-n*P+a*z)*D,t[6]=(g*_-d*k-m*y)*D,t[7]=(l*k-u*_+p*y)*D,t[8]=(s*B-i*P+f*E)*D,t[9]=(r*P-o*B-a*E)*D,t[10]=(d*b-h*_+m*x)*D,t[11]=(v*_-l*b-p*x)*D,t[12]=(i*z-s*R-c*E)*D,t[13]=(o*R-r*z+n*E)*D,t[14]=(h*y-d*M-g*x)*D,t[15]=(l*M-v*y+u*x)*D,t):null}});var G3=Tt((hA,F3)=>{F3.exports=IM;function IM(t,e){var o=e[0],r=e[1],n=e[2],a=e[3],s=e[4],i=e[5],c=e[6],f=e[7],l=e[8],v=e[9],u=e[10],p=e[11],d=e[12],h=e[13],g=e[14],m=e[15];return t[0]=i*(u*m-p*g)-v*(c*m-f*g)+h*(c*p-f*u),t[1]=-(r*(u*m-p*g)-v*(n*m-a*g)+h*(n*p-a*u)),t[2]=r*(c*m-f*g)-i*(n*m-a*g)+h*(n*f-a*c),t[3]=-(r*(c*p-f*u)-i*(n*p-a*u)+v*(n*f-a*c)),t[4]=-(s*(u*m-p*g)-l*(c*m-f*g)+d*(c*p-f*u)),t[5]=o*(u*m-p*g)-l*(n*m-a*g)+d*(n*p-a*u),t[6]=-(o*(c*m-f*g)-s*(n*m-a*g)+d*(n*f-a*c)),t[7]=o*(c*p-f*u)-s*(n*p-a*u)+l*(n*f-a*c),t[8]=s*(v*m-p*h)-l*(i*m-f*h)+d*(i*p-f*v),t[9]=-(o*(v*m-p*h)-l*(r*m-a*h)+d*(r*p-a*v)),t[10]=o*(i*m-f*h)-s*(r*m-a*h)+d*(r*f-a*i),t[11]=-(o*(i*p-f*v)-s*(r*p-a*v)+l*(r*f-a*i)),t[12]=-(s*(v*g-u*h)-l*(i*g-c*h)+d*(i*u-c*v)),t[13]=o*(v*g-u*h)-l*(r*g-n*h)+d*(r*u-n*v),t[14]=-(o*(i*g-c*h)-s*(r*g-n*h)+d*(r*c-n*i)),t[15]=o*(i*u-c*v)-s*(r*u-n*v)+l*(r*c-n*i),t}});var U3=Tt((uA,H3)=>{H3.exports=qM;function qM(t){var e=t[0],o=t[1],r=t[2],n=t[3],a=t[4],s=t[5],i=t[6],c=t[7],f=t[8],l=t[9],v=t[10],u=t[11],p=t[12],d=t[13],h=t[14],g=t[15],m=e*s-o*a,x=e*i-r*a,y=e*c-n*a,_=o*i-r*s,M=o*c-n*s,b=r*c-n*i,k=f*d-l*p,E=f*h-v*p,z=f*g-u*p,P=l*h-v*d,R=l*g-u*d,B=v*g-u*h;return m*B-x*R+y*P+_*z-M*E+b*k}});var j3=Tt((dA,B3)=>{B3.exports=DM;function DM(t,e,o){var r=e[0],n=e[1],a=e[2],s=e[3],i=e[4],c=e[5],f=e[6],l=e[7],v=e[8],u=e[9],p=e[10],d=e[11],h=e[12],g=e[13],m=e[14],x=e[15],y=o[0],_=o[1],M=o[2],b=o[3];return t[0]=y*r+_*i+M*v+b*h,t[1]=y*n+_*c+M*u+b*g,t[2]=y*a+_*f+M*p+b*m,t[3]=y*s+_*l+M*d+b*x,y=o[4],_=o[5],M=o[6],b=o[7],t[4]=y*r+_*i+M*v+b*h,t[5]=y*n+_*c+M*u+b*g,t[6]=y*a+_*f+M*p+b*m,t[7]=y*s+_*l+M*d+b*x,y=o[8],_=o[9],M=o[10],b=o[11],t[8]=y*r+_*i+M*v+b*h,t[9]=y*n+_*c+M*u+b*g,t[10]=y*a+_*f+M*p+b*m,t[11]=y*s+_*l+M*d+b*x,y=o[12],_=o[13],M=o[14],b=o[15],t[12]=y*r+_*i+M*v+b*h,t[13]=y*n+_*c+M*u+b*g,t[14]=y*a+_*f+M*p+b*m,t[15]=y*s+_*l+M*d+b*x,t}});var V3=Tt((pA,W3)=>{W3.exports=FM;function FM(t,e,o){var r=o[0],n=o[1],a=o[2],s,i,c,f,l,v,u,p,d,h,g,m;return e===t?(t[12]=e[0]*r+e[4]*n+e[8]*a+e[12],t[13]=e[1]*r+e[5]*n+e[9]*a+e[13],t[14]=e[2]*r+e[6]*n+e[10]*a+e[14],t[15]=e[3]*r+e[7]*n+e[11]*a+e[15]):(s=e[0],i=e[1],c=e[2],f=e[3],l=e[4],v=e[5],u=e[6],p=e[7],d=e[8],h=e[9],g=e[10],m=e[11],t[0]=s,t[1]=i,t[2]=c,t[3]=f,t[4]=l,t[5]=v,t[6]=u,t[7]=p,t[8]=d,t[9]=h,t[10]=g,t[11]=m,t[12]=s*r+l*n+d*a+e[12],t[13]=i*r+v*n+h*a+e[13],t[14]=c*r+u*n+g*a+e[14],t[15]=f*r+p*n+m*a+e[15]),t}});var Y3=Tt((vA,X3)=>{X3.exports=GM;function GM(t,e,o){var r=o[0],n=o[1],a=o[2];return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t[4]=e[4]*n,t[5]=e[5]*n,t[6]=e[6]*n,t[7]=e[7]*n,t[8]=e[8]*a,t[9]=e[9]*a,t[10]=e[10]*a,t[11]=e[11]*a,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}});var Z3=Tt((mA,K3)=>{K3.exports=HM;function HM(t,e,o,r){var n=r[0],a=r[1],s=r[2],i=Math.sqrt(n*n+a*a+s*s),c,f,l,v,u,p,d,h,g,m,x,y,_,M,b,k,E,z,P,R,B,$,D,it;return Math.abs(i)<1e-6?null:(i=1/i,n*=i,a*=i,s*=i,c=Math.sin(o),f=Math.cos(o),l=1-f,v=e[0],u=e[1],p=e[2],d=e[3],h=e[4],g=e[5],m=e[6],x=e[7],y=e[8],_=e[9],M=e[10],b=e[11],k=n*n*l+f,E=a*n*l+s*c,z=s*n*l-a*c,P=n*a*l-s*c,R=a*a*l+f,B=s*a*l+n*c,$=n*s*l+a*c,D=a*s*l-n*c,it=s*s*l+f,t[0]=v*k+h*E+y*z,t[1]=u*k+g*E+_*z,t[2]=p*k+m*E+M*z,t[3]=d*k+x*E+b*z,t[4]=v*P+h*R+y*B,t[5]=u*P+g*R+_*B,t[6]=p*P+m*R+M*B,t[7]=d*P+x*R+b*B,t[8]=v*$+h*D+y*it,t[9]=u*$+g*D+_*it,t[10]=p*$+m*D+M*it,t[11]=d*$+x*D+b*it,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t)}});var J3=Tt((gA,Q3)=>{Q3.exports=UM;function UM(t,e,o){var r=Math.sin(o),n=Math.cos(o),a=e[4],s=e[5],i=e[6],c=e[7],f=e[8],l=e[9],v=e[10],u=e[11];return e!==t&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[4]=a*n+f*r,t[5]=s*n+l*r,t[6]=i*n+v*r,t[7]=c*n+u*r,t[8]=f*n-a*r,t[9]=l*n-s*r,t[10]=v*n-i*r,t[11]=u*n-c*r,t}});var eg=Tt((xA,tg)=>{tg.exports=BM;function BM(t,e,o){var r=Math.sin(o),n=Math.cos(o),a=e[0],s=e[1],i=e[2],c=e[3],f=e[8],l=e[9],v=e[10],u=e[11];return e!==t&&(t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=a*n-f*r,t[1]=s*n-l*r,t[2]=i*n-v*r,t[3]=c*n-u*r,t[8]=a*r+f*n,t[9]=s*r+l*n,t[10]=i*r+v*n,t[11]=c*r+u*n,t}});var ng=Tt((yA,og)=>{og.exports=jM;function jM(t,e,o){var r=Math.sin(o),n=Math.cos(o),a=e[0],s=e[1],i=e[2],c=e[3],f=e[4],l=e[5],v=e[6],u=e[7];return e!==t&&(t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=a*n+f*r,t[1]=s*n+l*r,t[2]=i*n+v*r,t[3]=c*n+u*r,t[4]=f*n-a*r,t[5]=l*n-s*r,t[6]=v*n-i*r,t[7]=u*n-c*r,t}});var ag=Tt((bA,rg)=>{rg.exports=WM;function WM(t,e,o){var r,n,a,s=o[0],i=o[1],c=o[2],f=Math.sqrt(s*s+i*i+c*c);return Math.abs(f)<1e-6?null:(f=1/f,s*=f,i*=f,c*=f,r=Math.sin(e),n=Math.cos(e),a=1-n,t[0]=s*s*a+n,t[1]=i*s*a+c*r,t[2]=c*s*a-i*r,t[3]=0,t[4]=s*i*a-c*r,t[5]=i*i*a+n,t[6]=c*i*a+s*r,t[7]=0,t[8]=s*c*a+i*r,t[9]=i*c*a-s*r,t[10]=c*c*a+n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t)}});var ig=Tt((wA,sg)=>{sg.exports=VM;function VM(t,e,o){var r=e[0],n=e[1],a=e[2],s=e[3],i=r+r,c=n+n,f=a+a,l=r*i,v=r*c,u=r*f,p=n*c,d=n*f,h=a*f,g=s*i,m=s*c,x=s*f;return t[0]=1-(p+h),t[1]=v+x,t[2]=u-m,t[3]=0,t[4]=v-x,t[5]=1-(l+h),t[6]=d+g,t[7]=0,t[8]=u+m,t[9]=d-g,t[10]=1-(l+p),t[11]=0,t[12]=o[0],t[13]=o[1],t[14]=o[2],t[15]=1,t}});var lg=Tt((_A,cg)=>{cg.exports=XM;function XM(t,e){return t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=e[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var hg=Tt((MA,fg)=>{fg.exports=YM;function YM(t,e){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e[0],t[13]=e[1],t[14]=e[2],t[15]=1,t}});var dg=Tt((kA,ug)=>{ug.exports=KM;function KM(t,e){var o=Math.sin(e),r=Math.cos(e);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r,t[6]=o,t[7]=0,t[8]=0,t[9]=-o,t[10]=r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var vg=Tt((SA,pg)=>{pg.exports=ZM;function ZM(t,e){var o=Math.sin(e),r=Math.cos(e);return t[0]=r,t[1]=0,t[2]=-o,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=o,t[9]=0,t[10]=r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var gg=Tt((zA,mg)=>{mg.exports=QM;function QM(t,e){var o=Math.sin(e),r=Math.cos(e);return t[0]=r,t[1]=o,t[2]=0,t[3]=0,t[4]=-o,t[5]=r,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var yg=Tt((EA,xg)=>{xg.exports=JM;function JM(t,e){var o=e[0],r=e[1],n=e[2],a=e[3],s=o+o,i=r+r,c=n+n,f=o*s,l=r*s,v=r*i,u=n*s,p=n*i,d=n*c,h=a*s,g=a*i,m=a*c;return t[0]=1-v-d,t[1]=l+m,t[2]=u-g,t[3]=0,t[4]=l-m,t[5]=1-f-d,t[6]=p+h,t[7]=0,t[8]=u+g,t[9]=p-h,t[10]=1-f-v,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var wg=Tt((AA,bg)=>{bg.exports=t8;function t8(t,e,o,r,n,a,s){var i=1/(o-e),c=1/(n-r),f=1/(a-s);return t[0]=a*2*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a*2*c,t[6]=0,t[7]=0,t[8]=(o+e)*i,t[9]=(n+r)*c,t[10]=(s+a)*f,t[11]=-1,t[12]=0,t[13]=0,t[14]=s*a*2*f,t[15]=0,t}});var Mg=Tt((TA,_g)=>{_g.exports=e8;function e8(t,e,o,r,n){var a=1/Math.tan(e/2),s=1/(r-n);return t[0]=a/o,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(n+r)*s,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*n*r*s,t[15]=0,t}});var Sg=Tt((LA,kg)=>{kg.exports=o8;function o8(t,e,o,r){var n=Math.tan(e.upDegrees*Math.PI/180),a=Math.tan(e.downDegrees*Math.PI/180),s=Math.tan(e.leftDegrees*Math.PI/180),i=Math.tan(e.rightDegrees*Math.PI/180),c=2/(s+i),f=2/(n+a);return t[0]=c,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=f,t[6]=0,t[7]=0,t[8]=-((s-i)*c*.5),t[9]=(n-a)*f*.5,t[10]=r/(o-r),t[11]=-1,t[12]=0,t[13]=0,t[14]=r*o/(o-r),t[15]=0,t}});var Eg=Tt((NA,zg)=>{zg.exports=n8;function n8(t,e,o,r,n,a,s){var i=1/(e-o),c=1/(r-n),f=1/(a-s);return t[0]=-2*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*c,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*f,t[11]=0,t[12]=(e+o)*i,t[13]=(n+r)*c,t[14]=(s+a)*f,t[15]=1,t}});var Tg=Tt((OA,Ag)=>{var r8=Rd();Ag.exports=a8;function a8(t,e,o,r){var n,a,s,i,c,f,l,v,u,p,d=e[0],h=e[1],g=e[2],m=r[0],x=r[1],y=r[2],_=o[0],M=o[1],b=o[2];return Math.abs(d-_)<1e-6&&Math.abs(h-M)<1e-6&&Math.abs(g-b)<1e-6?r8(t):(l=d-_,v=h-M,u=g-b,p=1/Math.sqrt(l*l+v*v+u*u),l*=p,v*=p,u*=p,n=x*u-y*v,a=y*l-m*u,s=m*v-x*l,p=Math.sqrt(n*n+a*a+s*s),p?(p=1/p,n*=p,a*=p,s*=p):(n=0,a=0,s=0),i=v*s-u*a,c=u*n-l*s,f=l*a-v*n,p=Math.sqrt(i*i+c*c+f*f),p?(p=1/p,i*=p,c*=p,f*=p):(i=0,c=0,f=0),t[0]=n,t[1]=i,t[2]=l,t[3]=0,t[4]=a,t[5]=c,t[6]=v,t[7]=0,t[8]=s,t[9]=f,t[10]=u,t[11]=0,t[12]=-(n*d+a*h+s*g),t[13]=-(i*d+c*h+f*g),t[14]=-(l*d+v*h+u*g),t[15]=1,t)}});var Ng=Tt((RA,Lg)=>{Lg.exports=s8;function s8(t){return"mat4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+")"}});var kc=Tt((CA,Og)=>{Og.exports={create:L3(),clone:O3(),copy:C3(),identity:Rd(),transpose:I3(),invert:D3(),adjoint:G3(),determinant:U3(),multiply:j3(),translate:V3(),scale:Y3(),rotate:Z3(),rotateX:J3(),rotateY:eg(),rotateZ:ng(),fromRotation:ag(),fromRotationTranslation:ig(),fromScaling:lg(),fromTranslation:hg(),fromXRotation:dg(),fromYRotation:vg(),fromZRotation:gg(),fromQuat:yg(),frustum:wg(),perspective:Mg(),perspectiveFromFieldOfView:Sg(),ortho:Eg(),lookAt:Tg(),str:Ng()}});var $g=Tt(($A,Cg)=>{"use strict";var Rg=A3(),C0=kc(),ai=On(),i8=3e3,Hh="high",Cd,Bl=.36,jl=13.64,Sc=ai.C.hallEnd-.01,Wl=ai.C.z0+.01,c8=.356,l8=13.644,f8=ai.C.hallEnd-.006,h8=ai.C.z0+.006,u8=.12,Bh=4,zc=t=>Rn[t]&&Rn[t].cy||Bh,$d=.26,d8=5.6,p8=7,Rn=[{side:"right",z:34.5},{side:"right",z:23.5},{side:"left",z:23.5},{side:"end",z:Sc},{side:"left",z:34.5},{side:"right",z:14.6},{side:"left",z:14.6,maxW:3.7,maxH:3.7},{side:"corridor",x:ai.PAINTING_X[0],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:ai.PAINTING_X[1],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:ai.PAINTING_X[2],cy:3,maxW:3.3,maxH:3.73}];function v8(t,e){let o=e&&e.maxH||d8,r=e&&e.maxW||p8,n=Math.min(o,r/t);return{width:n*t,height:n}}function m8(t,e,o){let r=Rn[o],n=[],a=zc(o)-e/2;return r.side==="left"?(C0.fromTranslation(n,[Bl,a,r.z+t/2]),C0.rotateY(n,n,Math.PI/2)):r.side==="right"?(C0.fromTranslation(n,[jl,a,r.z-t/2]),C0.rotateY(n,n,-Math.PI/2)):r.side==="corridor"?C0.fromTranslation(n,[r.x-t/2,a,Wl]):(C0.fromTranslation(n,[7+t/2,a,Sc]),C0.rotateY(n,n,Math.PI)),C0.scale(n,n,[t,e,u8]),n}function g8(t,e,o){let r=Rn[o],n=[],a=zc(o)-e/2;return r.side==="left"?(C0.fromTranslation(n,[Bl,a,r.z+t/2]),C0.rotateY(n,n,Math.PI/2)):r.side==="right"?(C0.fromTranslation(n,[jl,a,r.z-t/2]),C0.rotateY(n,n,-Math.PI/2)):r.side==="corridor"?C0.fromTranslation(n,[r.x-t/2,a,Wl]):(C0.fromTranslation(n,[7+t/2,a,Sc]),C0.rotateY(n,n,Math.PI)),n}function x8(t,e,o){let r=Rn[o],n=[],a=zc(o)-e/2-$d-.38;return r.side==="left"?(C0.fromTranslation(n,[c8,a,r.z+t/2]),C0.rotateY(n,n,Math.PI/2)):r.side==="right"?(C0.fromTranslation(n,[l8,a,r.z-t/2]),C0.rotateY(n,n,-Math.PI/2)):r.side==="corridor"?C0.fromTranslation(n,[r.x-t/2,a,h8]):(C0.fromTranslation(n,[7+t/2,a,f8]),C0.rotateY(n,n,Math.PI)),C0.scale(n,n,[2,2,2]),n}function y8(t,e,o){let r=Rn[o],n=zc(o)-e/2-$d-.38;return r.side==="left"?[Bl+.55,n,r.z]:r.side==="right"?[jl-.55,n,r.z]:r.side==="corridor"?[r.x,n,Wl+.55]:[7,n,Sc-.55]}var Ul=.42;function Uh(t,e,o,r,n,a){return[e[0]*r,e[1]*r,e[2]*r,0,0,n,0,0,o[0]*a,o[1]*a,o[2]*a,0,t[0],t[1],t[2],1]}function b8(t,e,o){let r=Rn[o],n,a,s;r.side==="left"?(n=[Bl,r.z],a=[0,0,1],s=[1,0,0]):r.side==="right"?(n=[jl,r.z],a=[0,0,1],s=[-1,0,0]):r.side==="corridor"?(n=[r.x,Wl],a=[1,0,0],s=[0,0,1]):(n=[7,Sc],a=[1,0,0],s=[0,0,-1]);let i=zc(o)+e/2+$d+.3,c=Math.min(2.4,Math.max(.9,t*.55)),f=(p,d)=>[n[0]+s[0]*p,d,n[1]+s[2]*p],l=[.075,.062,.05],v=[{fixmodel:Uh(f(.014,i),a,s,.1,.13,.028),fixcol:l,fixglow:0},{fixmodel:Uh(f(Ul/2,i),a,s,.02,.02,Ul),fixcol:l,fixglow:0},{fixmodel:Uh(f(Ul,i),a,s,c,.034,.05),fixcol:l,fixglow:0},{fixmodel:Uh(f(Ul-.012,i-.019),a,s,c*.94,.006,.028),fixcol:l,fixglow:1}],u=f(Ul,i-.02);return{fixtures:v,light:{c:[u[0],u[1],u[2],1],d:[a[0],a[1],a[2],c/2]}}}Cg.exports=(t,e)=>{let o=[],r=[],n=a=>{let s=a.image_id;if(!Rn[s])return;let{width:i,height:c}=v8(a.aspect,Rn[s]),f=b8(i,c,s);e&&e.lights&&s<e.lights.length&&(e.lights[s]=f.light),o.push({...a,fixtures:f.fixtures,side:Rn[s].side,model:m8(i,c,s),framemodel:g8(i,c,s),framesize:[i,c],textmodel:x8(i,c,s),text:a.textGen(i),width:i,height:c,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:y8(i,c,s),paintingPosition:Rn[s].side==="left"?[Bl+.05,Bh,Rn[s].z]:Rn[s].side==="right"?[jl-.05,Bh,Rn[s].z]:Rn[s].side==="corridor"?[Rn[s].x,zc(s),Wl+.05]:[7,Bh,Sc-.05],textGen:null})};return Rg.fetch(t,Rn.length,Hh,n,()=>{}),{update:()=>{r=o,r.forEach(a=>{Rg.load(t,a,Hh)}),Hh="low",Cd&&clearTimeout(Cd),Cd=setTimeout(()=>{Hh="high"},i8)},batch:()=>r,interactables:()=>r.map((a,s)=>({side:a.side,width:a.width,index:s,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:a.plaquePosition,paintingPosition:a.paintingPosition}))}}});var Dg=Tt((PA,qg)=>{"use strict";var w8=Ed(),Pg=qr(),Ig=[[-.02,.125],[-.02,.15],[.035,.15],[.07,.12],[.07,.17],[.185,.17],[.185,.19],[.215,.19],[.26,.03]];function _8(){let t=[[0,0],[1,0],[1,1],[0,1]],e=[];Ig.forEach(([r,n])=>{t.forEach(([a,s])=>e.push([a,s,r,n]))});let o=[];for(let r=0;r<Ig.length-1;r++)for(let n=0;n<4;n++){let a=(n+1)%4,s=r*4+n,i=r*4+a,c=(r+1)*4+n,f=(r+1)*4+a;o.push(s,i,f,s,f,c)}return{verts:e,elems:o}}var M8=`#extension GL_OES_standard_derivatives : enable
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
}`,k8=`
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
}`;qg.exports=t=>{let e=w8.draw(t),o=t({frag:`#extension GL_OES_standard_derivatives : enable
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
	${ls().lanternGLSL()}
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
	}`,attributes:{pos:[0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,-.1,-.1,0,1.1,-.1,0,-.1,1.1,0,1.1,1.1,0]},elements:[0,1,2,3,2,1,1,0,5,4,5,0,3,1,7,5,7,1,0,2,4,6,4,2,8,9,4,5,4,9,9,11,5,7,5,11,11,10,7,6,7,10,10,8,6,4,6,8],uniforms:{model:t.prop("model"),tex:t.prop("tex"),psize:t.prop("framesize"),canvasCm:(s,i)=>i.size?[i.size[1],i.size[0]]:[61,91],texel:1/(Pg.isPhone?1024:2048),detail:()=>Pg.post===0?0:1},blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}}),r=_8(),n=t({frag:M8,vert:k8,attributes:{prof:r.verts},elements:r.elems,uniforms:{model:t.prop("framemodel"),fsize:t.prop("framesize")},cull:{enable:!1},blend:{enable:!1}}),a=t({frag:`#extension GL_OES_standard_derivatives : enable
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
}`,attributes:{pos:[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5],[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]]},elements:[0,1,2,0,2,3,4,5,6,4,6,7,0,1,5,0,5,4,2,3,7,2,7,6,0,3,7,0,7,4,1,2,6,1,6,5],uniforms:{model:t.prop("fixmodel"),fixcol:t.prop("fixcol"),fixglow:t.prop("fixglow")},cull:{enable:!1},blend:{enable:!1}});return function(s){o(s),n(s);let i=[];s.forEach(c=>{c.fixtures&&i.push(...c.fixtures)}),i.length&&a(i),e(s)}}});var Tc=Tt((FA,gn)=>{"use strict";var Ee=Math.PI,I=t=>(+t).toFixed(4),se=[-90,0,0],Nt=16,_e=27.5,ro=7.8,pr=11.6,sn=.55,Cn=(pr-ro)/(Nt/2),xe={c:[3.6,8.6,13.6,18.6,23.6],hw:1.3,sill:.62,spring:4.9};xe.top=xe.spring+xe.hw;var tr={cols:[-.65,0,.65],rowH:.71,w:.055,ring:.78},dr={rafter:_e/12,rafterW:.1,purlin:1,purlinW:.07},ps=[5.5,11,16.5,22],no={cx:Nt/2,hw:1.12,spring:3.95,pier:1.05,face:_e-1.45,back:_e-.2,floor:.66,top:6.55};no.x0=no.cx-no.hw-no.pier;no.x1=no.cx+no.hw+no.pier;var ut={x0:Nt/2-1.7,x1:Nt/2+1.7,z0:_e-no.face+.44,z1:13.8,curb:.5,top:.13},Te={cx:Nt/2,cz:18.1,ri:1.66,ro:2.06,top:6,hw:.84,spring:3.4,cornice:4.85,cloth:2.6,gap:.92},Fg=[.647,.614,.279,-.154,-.322,-.191,-.012,.041,-.087,-.551,-.876,-1,.368,.414,.325,.162,.216,.345,.495,.35,.369,-.7,-.522,-.318,-.128,-.041,.581,.696,.442,.274,.394,.607,.713,-.498,-.313,.401,.802,.751,-.174,-.702,-.917,-.992,-.883,.29,.475,.557,.55,.426,.135,-.125,-.259,-.391,-.671,-.951,-.964,-.727,-.471,-.32,-.244,-.123,.166,.573,.775,.395],Y0=t=>ut.z1-(t-5.6)/11*(ut.z1-ut.z0),c0={x:Nt/2,z:1,plinth:no.floor+.26,height:2.75,yaw:.35,file:"res/nymph.bin"},jh=_e-c0.z,Pd=[7.83,3.45,1.15],ur=(()=>{let t=[-.85,.3,.3],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>o/e)})(),Wh=(()=>{let t=[-.3,.82,.48],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>o/e)})(),Gg=t=>{let e=1e9,o=-1e9,r=1e9,n=-1e9;for(let a of[0,Nt])for(let s of[0,pr+.3])for(let i of[0,_e]){let c=(ro-s)/t[1],f=a+t[0]*c,l=i+t[2]*c;e=Math.min(e,f),o=Math.max(o,f),r=Math.min(r,l),n=Math.max(n,l)}return[e-.3,r-.3,o-e+.6,n-r+.6]},Dn={sun:Gg(ur),moon:Gg(Wh)},Vh=t=>[t[0]+se[0],t[1]+se[1],t[2]+se[2]];function Kh(t){(!t||t==="baked")&&(t=typeof location!="undefined"&&/analyticsun/.test(location.search)?"analytic":"baked");let e=xe.c.map(r=>`
		{
			float dz = q.z - ${I(r)};
			float inside = smoothstep(-b, b, ${I(xe.hw)} - abs(dz)) * smoothstep(-b, b, q.y - ${I(xe.sill)});
			float arch = smoothstep(-b, b, ${I(xe.hw)} - length(vec2(dz, max(q.y - ${I(xe.spring)}, 0.0))));
			o = max(o, inside * arch);
		}`).join(""),o=xe.c.map(r=>`
		{
			float dz = q.z - ${I(r)};
			if (abs(dz) < ${I(xe.hw+.2)}) {
				${tr.cols.map(n=>`bar = max(bar, 1.0 - smoothstep(${I(tr.w*.5)} - b, ${I(tr.w*.5)} + b, abs(dz - ${I(n)})));`).join(`
				`)}
				float ry = q.y - ${I(xe.sill)};
				float tr = abs(ry - ${I(tr.rowH)} * floor(ry / ${I(tr.rowH)} + 0.5));
				if (q.y < ${I(xe.spring+.02)}) bar = max(bar, 1.0 - smoothstep(${I(tr.w*.5)} - b, ${I(tr.w*.5)} + b, tr));
				float rr = length(vec2(dz, q.y - ${I(xe.spring)}));
				if (q.y > ${I(xe.spring)}) bar = max(bar, 1.0 - smoothstep(${I(tr.w*.5)} - b, ${I(tr.w*.5)} + b, abs(rr - ${I(tr.ring)})));
				// the frame round the opening
				bar = max(bar, 1.0 - smoothstep(0.0, b + 0.03, ${I(xe.hw)} - max(abs(dz), q.y > ${I(xe.spring)} ? rr : 0.0)));
			}
		}`).join("");return`
	const vec3 STUDIO_SUN_D = vec3(${I(ur[0])}, ${I(ur[1])}, ${I(ur[2])});
	const vec3 STUDIO_MOON_D = vec3(${I(Wh[0])}, ${I(Wh[1])}, ${I(Wh[2])});
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
		vec3 p = pw - vec3(${I(se[0])}, ${I(se[1])}, ${I(se[2])});
		vec3 S = STUDIO_SUN;
		// the niche: inside its hollow, the sun gets in only through the arch;
		// elsewhere its block of stone stands in the way of some of the light
		{
			// (worked as if the niche stood against the far wall: z turned round)
			vec3 q = vec3(${I(Nt)} - p.x, p.y, ${I(_e)} - p.z);
			vec3 Sq = vec3(-S.x, S.y, -S.z);
			float dxn = q.x - ${I(no.cx)};
			if (abs(dxn) < ${I(no.hw)} && q.z > ${I(no.face)} && q.y > ${I(no.floor-.05)} && q.y < ${I(no.spring)} + sqrt(max(${I(no.hw*no.hw)} - dxn * dxn, 0.0))) {
				if (Sq.z >= 0.0) return 0.0;
				vec3 hf = q + Sq * ((${I(no.face)} - q.z) / Sq.z);
				float hx = hf.x - ${I(no.cx)};
				float edge = ${I(no.hw)} - abs(hx);
				float topY = ${I(no.spring)} + sqrt(max(${I(no.hw*no.hw)} - hx * hx, 0.0));
				float soft = 0.02 + 0.03 * (${I(no.face)} - q.z) / Sq.z;
				float inA = smoothstep(-soft, soft, edge) * smoothstep(-soft, soft, topY - hf.y);
				if (inA <= 0.0) return 0.0;
			} else {
				vec3 bmin = vec3(${I(no.x0-.2)}, 0.0, ${I(no.face-.3)}), bmax = vec3(${I(no.x1+.2)}, ${I(6.95)}, ${I(_e)});
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
		float te = (${I(ro)} - p.y) / S.y;
		if (tw > 0.0 && tw < te) {
			vec3 h0 = p + S * tw;
			if (h0.z < 0.0 || h0.z > ${I(_e)}) return 0.0;
			vec3 h1 = p + S * ((${I(-sn)} - p.x) / S.x);
			vec3 hm = p + S * ((${I(-sn*.5)} - p.x) / S.x);
			float b = 0.006 + 0.0075 * tw;
			float open = min(studioWinOpen(h0, b), studioWinOpen(h1, b));
			if (open <= 0.0) return 0.0;
			float bar = studioWinBars(hm, b);
			return open * (1.0 - bar) * 0.92;
		}
		// up through the roof: the trusses' tie beams first
		vec3 he = p + S * max(te, 0.0);
		float vis = 1.0;
		if (p.y < ${I(ro)}) {
			if (he.z < 0.0 || he.z > ${I(_e)} || he.x < 0.0 || he.x > ${I(Nt)}) return 0.0;
			float be = 0.01 + 0.008 * te;
			${ps.map(r=>`vis *= smoothstep(0.08 - be, 0.08 + be, abs(he.z - ${I(r)}));`).join(`
			`)}
			// the bougainvillea along the tie beams
			${Ua.filter(r=>r[0]==="truss").map(([r,n,a])=>`vis *= 1.0 - studioVineShade(he.z - ${I(n)}, he.x, he.z, ${I(a)});`).join(`
			`)}
		}
		// then the glass: the two slopes of the roof
		float tl = (${I(Cn)} * p.x - p.y + ${I(ro)}) / (S.y - ${I(Cn)} * S.x);
		float tr = (${I(Cn)} * (${I(Nt)} - p.x) - p.y + ${I(ro)}) / (S.y + ${I(Cn)} * S.x);
		float t = 1e9;
		vec3 h = vec3(0.0);
		vec3 hl = p + S * tl, hr = p + S * tr;
		if (tl > 0.0 && hl.x >= -0.01 && hl.x <= ${I(Nt/2+.01)}) { t = tl; h = hl; }
		if (tr > 0.0 && tr < t && hr.x >= ${I(Nt/2-.01)} && hr.x <= ${I(Nt+.01)}) { t = tr; h = hr; }
		if (t > 1e8) return 0.0;
		if (h.z < 0.0 || h.z > ${I(_e)}) return 0.0;
		float b = 0.008 + 0.0075 * t;
		float rz = abs(h.z - ${I(dr.rafter)} * floor(h.z / ${I(dr.rafter)} + 0.5));
		float bar = 1.0 - smoothstep(${I(dr.rafterW*.5)} - b, ${I(dr.rafterW*.5)} + b, rz);
		// the ridge beam
		bar = max(bar, 1.0 - smoothstep(0.14 - b, 0.14 + b, abs(h.x - ${I(Nt/2)})));
		// the old glass is grimy: it lets less through than the windows,
		// unevenly, so the roof's light falls in soft dim drifts and the
		// windows' patterned beams are the bright, dramatic ones
		float pat = 0.42 + 0.3 * smoothstep(-0.6, 0.6, sin(h.x * 0.9 + 1.3) * sin(h.z * 0.7 + 0.4) + 0.4 * sin(h.x * 2.1 - h.z * 1.7));
		// and the vine along the rafters and the ridge
		${Ua.filter(r=>r[0]==="rafter").map(([r,n,a])=>`pat *= 1.0 - studioVineShade(h.z - ${I(n)}, h.x, h.z, ${I(a)});`).join(`
		`)}
		pat *= 1.0 - studioVineShade(h.x - ${I(Nt/2)}, h.z, h.x, 0.9);
		return vis * (1.0 - bar) * pat * 0.78;
	}

`:t==="bake"?`	// for the bake: how much of the sky a beam along S gets through the
	// windows or the roof, given where it crosses the eaves' height
	// (r: for points below the eaves, past the tie beams; g: above them)
	vec2 studioExit(vec3 q, vec3 S) {
		float g = 0.0;
		{
			float tl = (${I(Cn)} * q.x - q.y + ${I(ro)}) / (S.y - ${I(Cn)} * S.x);
			float tr = (${I(Cn)} * (${I(Nt)} - q.x) - q.y + ${I(ro)}) / (S.y + ${I(Cn)} * S.x);
			float t = 1e9;
			vec3 h = vec3(0.0);
			vec3 hl = q + S * tl, hr = q + S * tr;
			if (tl > -20.0 && hl.x >= -0.01 && hl.x <= ${I(Nt/2+.01)}) { t = tl; h = hl; }
			if (tr > -20.0 && tr < t && hr.x >= ${I(Nt/2-.01)} && hr.x <= ${I(Nt+.01)}) { t = tr; h = hr; }
			if (t < 1e8 && h.z >= 0.0 && h.z <= ${I(_e)}) {
				float b = 0.03 + 0.0075 * max(t, 0.0);
				float rz = abs(h.z - ${I(dr.rafter)} * floor(h.z / ${I(dr.rafter)} + 0.5));
				float bar = 1.0 - smoothstep(${I(dr.rafterW*.5)} - b, ${I(dr.rafterW*.5)} + b, rz);
				bar = max(bar, 1.0 - smoothstep(0.14 - b, 0.14 + b, abs(h.x - ${I(Nt/2)})));
				float pat = 0.42 + 0.3 * smoothstep(-0.6, 0.6, sin(h.x * 0.9 + 1.3) * sin(h.z * 0.7 + 0.4) + 0.4 * sin(h.x * 2.1 - h.z * 1.7));
				${Ua.filter(r=>r[0]==="rafter").map(([r,n,a])=>`pat *= 1.0 - studioVineShade(h.z - ${I(n)}, h.x, h.z, ${I(a)});`).join(`
				`)}
				pat *= 1.0 - studioVineShade(h.x - ${I(Nt/2)}, h.z, h.x, 0.9);
				g = (1.0 - bar) * pat * 0.78;
			}
		}
		float r = 0.0;
		if (q.x < 0.0) {
			// it leaves through a window in the left wall
			vec3 h0 = q + S * ((0.0 - q.x) / S.x);
			if (h0.z >= 0.0 && h0.z <= ${I(_e)} && h0.y > 0.0) {
				vec3 h1 = q + S * ((${I(-sn)} - q.x) / S.x);
				vec3 hm = q + S * ((${I(-sn*.5)} - q.x) / S.x);
				float b = 0.022;
				float open = min(studioWinOpen(h0, b), studioWinOpen(h1, b));
				r = open * (1.0 - studioWinBars(hm, b)) * 0.92;
			}
		} else if (q.x <= ${I(Nt)} && q.z >= 0.0 && q.z <= ${I(_e)}) {
			// up through the roof, past the tie beams and their vine
			float vis = 1.0;
			float be = 0.025;
			${ps.map(r=>`vis *= smoothstep(0.08 - be, 0.08 + be, abs(q.z - ${I(r)}));`).join(`
			`)}
			${Ua.filter(r=>r[0]==="truss").map(([r,n,a])=>`vis *= 1.0 - studioVineShade(q.z - ${I(n)}, q.x, q.z, ${I(a)});`).join(`
			`)}
			r = vis * g;
		}
		return vec2(r, g);
	}
	float studioSun0(vec3 pw) { return 0.0; }

`:`	uniform sampler2D studioBake;
	float studioSun0(vec3 pw) {
		vec3 p = pw - vec3(${I(se[0])}, ${I(se[1])}, ${I(se[2])});
		vec3 S = STUDIO_SUN;
		// the niche: inside its hollow, the sun gets in only through the arch;
		// elsewhere its block of stone stands in the way of some of the light
		{
			// (worked as if the niche stood against the far wall: z turned round)
			vec3 q = vec3(${I(Nt)} - p.x, p.y, ${I(_e)} - p.z);
			vec3 Sq = vec3(-S.x, S.y, -S.z);
			float dxn = q.x - ${I(no.cx)};
			if (abs(dxn) < ${I(no.hw)} && q.z > ${I(no.face)} && q.y > ${I(no.floor-.05)} && q.y < ${I(no.spring)} + sqrt(max(${I(no.hw*no.hw)} - dxn * dxn, 0.0))) {
				if (Sq.z >= 0.0) return 0.0;
				vec3 hf = q + Sq * ((${I(no.face)} - q.z) / Sq.z);
				float hx = hf.x - ${I(no.cx)};
				float edge = ${I(no.hw)} - abs(hx);
				float topY = ${I(no.spring)} + sqrt(max(${I(no.hw*no.hw)} - hx * hx, 0.0));
				float soft = 0.02 + 0.03 * (${I(no.face)} - q.z) / Sq.z;
				float inA = smoothstep(-soft, soft, edge) * smoothstep(-soft, soft, topY - hf.y);
				if (inA <= 0.0) return 0.0;
			} else {
				vec3 bmin = vec3(${I(no.x0-.2)}, 0.0, ${I(no.face-.3)}), bmax = vec3(${I(no.x1+.2)}, ${I(6.95)}, ${I(_e)});
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
		float hi = step(${I(ro)}, p.y);
		float v = 0.0;
		if (w < 0.999) {
			vec2 q = (p.xz + STUDIO_SUN_D.xz * ((${I(ro)} - p.y) / STUDIO_SUN_D.y) - vec2(${I(Dn.sun[0])}, ${I(Dn.sun[1])})) / vec2(${I(Dn.sun[2])}, ${I(Dn.sun[3])});
			vec4 t = texture2D(studioBake, q);
			v += (1.0 - w) * mix(t.r, t.g, hi);
		}
		if (w > 0.001) {
			vec2 q = (p.xz + STUDIO_MOON_D.xz * ((${I(ro)} - p.y) / STUDIO_MOON_D.y) - vec2(${I(Dn.moon[0])}, ${I(Dn.moon[1])})) / vec2(${I(Dn.moon[2])}, ${I(Dn.moon[3])});
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
		float an = atan(h.x - ${I(Te.cx)}, h.z - ${I(Te.cz)});
		float m = an - 1.5707963 * floor(an / 1.5707963 + 0.5);
		float d = R * sin(m);
		return (abs(d) < ${I(Te.hw)} && h.y < ${I(Te.spring)} + sqrt(max(${I(Te.hw*Te.hw)} - d * d, 0.0))) ? 1.0 : 0.0;
	}
	float rotShade(vec3 pw) {
		vec3 p = pw - vec3(${I(se[0])}, ${I(se[1])}, ${I(se[2])});
		vec3 S = STUDIO_SUN;
		vec2 c = p.xz - vec2(${I(Te.cx)}, ${I(Te.cz)});
		vec2 d = S.xz;
		float a = dot(d, d);
		float k = 1.0, t1, t2;
		// the stone (as one thin ring at the middle of the wall)
		if (rotHit(c, d, a, ${I((Te.ri+Te.ro)/2)}, t1, t2) > 0.0) {
			if (t1 > 0.03) { vec3 h = p + S * t1; if (h.y < ${I(Te.top-.2)} && rotOpen(h, ${I((Te.ri+Te.ro)/2)}) < 0.5) return 0.0; }
			if (t2 > 0.03) { vec3 h = p + S * t2; if (h.y < ${I(Te.top-.2)} && rotOpen(h, ${I((Te.ri+Te.ro)/2)}) < 0.5) return 0.0; }
		}
		// the cloth, except where it parts on the pool's line
		if (rotHit(c, d, a, ${I(Te.cloth+.15)}, t1, t2) > 0.0) {
			for (int i = 0; i < 2; i++) {
				float t = i == 0 ? t1 : t2;
				if (t > 0.08) {
					vec3 h = p + S * t;
					float an = atan(h.x - ${I(Te.cx)}, h.z - ${I(Te.cz)});
					float lat = ${I(Te.cloth+.15)} * abs(sin(an));
					bool gap = lat < ${I(Te.gap)} && h.y < ${I(Te.top)};
					if (h.y < ${I(Te.top)} && !gap) k *= 0.5;
				}
			}
		}
		return k;
	}
	float studioSun(vec3 pw) { float s0 = studioSun0(pw); return s0 > 0.0 ? s0 * rotShade(pw) : 0.0; }`}function Ba(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let o=e;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}var wt={FLOOR:0,PLASTER:1,STONE:2,STEEL:3,WATER:4,PAD:5,PETAL:6,STAMEN:7,MARBLE:8,WOOD:9,GESSO:10,PAINT:11,POT:12,SHADE:13,BULB:14,NICHE:15,JAR:16,SOIL:17,BRUSH:18,TRAVERTINE:19,CLOTH:20,WMARBLE:21,REDDOOR:22,REDPANEL:23,DARKWOOD:24,BRASS:25,BRACT:26,KEYHOLE:27,ROCK:28,OLDSTONE:29,HOLLOW:30,FLAME:31,CFLAME:32};function qd(){let t={pos:[],nrm:[],kind:[],uv:[],anchor:[],idx:[]};return t.float=null,t.v=(e,o,r,n)=>(t.pos.push(e[0]+se[0],e[1]+se[1],e[2]+se[2]),t.nrm.push(o[0],o[1],o[2]),t.kind.push(r),t.uv.push(n?n[0]:0,n?n[1]:0),t.float?t.anchor.push(t.float[0]+se[0],t.float[1]+se[2],t.float[2],1):t.anchor.push(0,0,0,0),t.pos.length/3-1),t.quad=(e,o,r,n,a,s,i)=>{let c=t.v(e,a,s,i&&i[0]),f=t.v(o,a,s,i&&i[1]),l=t.v(r,a,s,i&&i[2]),v=t.v(n,a,s,i&&i[3]);t.idx.push(c,f,l,c,l,v)},t.box=(e,o,r,n,a,s,i,c)=>{let f=c||{};f.top||t.quad([e,a,r],[e,a,s],[n,a,s],[n,a,r],[0,1,0],i,[[e,r],[e,s],[n,s],[n,r]]),f.bottom||t.quad([e,o,r],[n,o,r],[n,o,s],[e,o,s],[0,-1,0],i,[[e,r],[n,r],[n,s],[e,s]]),f.x0||t.quad([e,o,r],[e,o,s],[e,a,s],[e,a,r],[-1,0,0],i,[[r,o],[s,o],[s,a],[r,a]]),f.x1||t.quad([n,o,s],[n,o,r],[n,a,r],[n,a,s],[1,0,0],i,[[s,o],[r,o],[r,a],[s,a]]),f.z0||t.quad([n,o,r],[e,o,r],[e,a,r],[n,a,r],[0,0,-1],i,[[n,o],[e,o],[e,a],[n,a]]),f.z1||t.quad([e,o,s],[n,o,s],[n,a,s],[e,a,s],[0,0,1],i,[[e,o],[n,o],[n,a],[e,a]])},t.tbox=(e,o,r,n,a,s,i,c,f)=>{let l=Math.cos(r),v=Math.sin(r),u=Math.cos(f||0),p=Math.sin(f||0),d=(m,x,y)=>{let _=a+(x-a)*u-y*p*0,M=y+(x-a)*p,b=a+(x-a)*u;return[e+l*m+v*M,b,o-v*m+l*M]},h=m=>{let x=m[1]*u-m[2]*p,y=m[2]*u+m[1]*p;return[l*m[0]+v*y,x,-v*m[0]+l*y]},g=(m,x,y,_,M)=>t.quad(d(...m),d(...x),d(...y),d(..._),h(M),c,[[m[0]+m[2],m[1]],[x[0]+x[2],x[1]],[y[0]+y[2],y[1]],[_[0]+_[2],_[1]]]);g([-n,s,-i],[-n,s,i],[n,s,i],[n,s,-i],[0,1,0]),g([-n,a,-i],[n,a,-i],[n,a,i],[-n,a,i],[0,-1,0]),g([-n,a,-i],[-n,a,i],[-n,s,i],[-n,s,-i],[-1,0,0]),g([n,a,i],[n,a,-i],[n,s,-i],[n,s,i],[1,0,0]),g([n,a,-i],[-n,a,-i],[-n,s,-i],[n,s,-i],[0,0,-1]),g([-n,a,i],[n,a,i],[n,s,i],[-n,s,i],[0,0,1])},t.beam=(e,o,r,n,a)=>{let s=[o[0]-e[0],o[1]-e[1],o[2]-e[2]],i=Math.hypot(...s),c=s.map(d=>d/i),f=a||(Math.abs(c[1])>.9?[1,0,0]:[0,1,0]),l=[c[1]*f[2]-c[2]*f[1],c[2]*f[0]-c[0]*f[2],c[0]*f[1]-c[1]*f[0]],v=Math.hypot(...l);l=l.map(d=>d/v),f=[l[1]*c[2]-l[2]*c[1],l[2]*c[0]-l[0]*c[2],l[0]*c[1]-l[1]*c[0]];let u=(d,h,g)=>[d[0]+l[0]*r*h+f[0]*r*g,d[1]+l[1]*r*h+f[1]*r*g,d[2]+l[2]*r*h+f[2]*r*g],p=[[[1,-1],[1,1],l],[[1,1],[-1,1],f],[[-1,1],[-1,-1],l.map(d=>-d)],[[-1,-1],[1,-1],f.map(d=>-d)]];for(let[d,h,g]of p)t.quad(u(e,...d),u(o,...d),u(o,...h),u(e,...h),g,n,[[0,0],[i,0],[i,1],[0,1]])},t.lathe=(e,o,r,n,a)=>{let s=a||32,i=r.map(([c,f],l)=>{let v=r[Math.max(0,l-1)],u=r[Math.min(r.length-1,l+1)],p=u[0]-v[0],d=u[1]-v[1],h=Math.hypot(p,d)||1,g=d/h,m=-p/h,x=[];for(let y=0;y<=s;y++){let _=y/s*2*Ee;x.push(t.v([e+Math.cos(_)*c,f,o+Math.sin(_)*c],[Math.cos(_)*g,m,Math.sin(_)*g],n,[y/s*c*2*Ee,f]))}return x});for(let c=0;c<i.length-1;c++)for(let f=0;f<s;f++){let l=i[c][f],v=i[c][f+1],u=i[c+1][f+1],p=i[c+1][f];t.idx.push(l,p,u,l,u,v)}},t}var ka=t=>Math.abs(t)>=xe.hw?null:xe.spring+Math.sqrt(xe.hw*xe.hw-t*t),Ua=[["truss",ps[0],3.1],["truss",ps[1],5.4],["truss",ps[2],7.7],["truss",ps[3],2.2],["rafter",dr.rafter*2,1.7],["rafter",dr.rafter*5,8.5],["rafter",dr.rafter*8,13.6],["rafter",dr.rafter*10,17],["rafter",dr.rafter*11,6.1],["ridge",Nt/2,.9],...[.75,...xe.c.slice(1).map((t,e)=>(t+xe.c[e])/2),_e-.75].map((t,e)=>["wall",t,2.3+e*4.1])],Ql=(t,e)=>.5*Math.sin(t*1.9+e)+.5*Math.sin(t*.77+e*1.3)>-.25,Yg=t=>t<Nt/2?ro+Cn*t:ro+Cn*(Nt-t);function Zh(t,e,o){return t==="wall"?[.12,o,e]:t==="truss"?[o,ro-.12,e]:t==="rafter"?[o,Yg(o)-.2,e]:[e,pr-.32,o]}var Qh=t=>t==="ridge"?[.4,_e-.4]:t==="wall"?[.15,ro-.05]:[.35,Nt-.35],E0={w:1.95,spring:3.35,r:2.3,frame:.23,zl:_e-.05,zf:_e-.13};E0.c=E0.r-E0.w/2;var Ur=(t,e)=>{let o=E0.r+(e||0),r=Math.abs(t)+E0.c;return r>=o?E0.spring:E0.spring+Math.sqrt(o*o-r*r)};E0.top=Ur(0);function S8(t){let e=Nt/2,{w:o,frame:r,zl:n,zf:a}=E0,s=o/2,i=s+r,c=.02;for(let b=-i;b<i-1e-6;b+=c){let k=b,E=Math.min(i,b+c),z=(k+E)/2,P=Ur(k,r),R=Ur(E,r),B=0,$=0;Math.abs(z)<s&&(B=Ur(k),$=Ur(E)),Math.abs(z)>=s;{let D=Math.abs(z)<s?B:0,it=Math.abs(z)<s?$:0;t.quad([e+E,it,a],[e+k,D,a],[e+k,P,a],[e+E,R,a],[0,0,-1],wt.DARKWOOD,[[E,it],[k,D],[k,P],[E,R]])}t.quad([e+k,P,a],[e+k,P,_e],[e+E,R,_e],[e+E,R,a],[0,1,0],wt.DARKWOOD,[[k,0],[k,1],[E,1],[E,0]]),Math.abs(z)<s&&t.quad([e+k,B,a],[e+E,$,a],[e+E,$,n],[e+k,B,n],[0,-1,0],wt.DARKWOOD,[[k,0],[E,0],[E,1],[k,1]])}for(let b of[-1,1])t.quad([e+b*i,0,a],[e+b*i,0,_e],[e+b*i,E0.spring,_e],[e+b*i,E0.spring,a],[b,0,0],wt.DARKWOOD,[[0,0],[1,0],[1,1],[0,1]]),t.quad([e+b*s,0,a],[e+b*s,E0.spring,a],[e+b*s,E0.spring,n],[e+b*s,0,n],[-b,0,0],wt.DARKWOOD,[[0,0],[1,0],[1,1],[0,1]]),t.box(e+b*(s+r/2)-r/2-.04,0,a-.04,e+b*(s+r/2)+r/2+.04,.42,_e,wt.DARKWOOD);let f=40;for(let b=0;b<f;b++){let k=-s+2*s*b/f,E=-s+2*s*(b+1)/f;t.beam([e+k,Ur(k)+.03,a-.015],[e+E,Ur(E)+.03,a-.015],.018,wt.DARKWOOD)}for(let b of[-1,1])t.beam([e+b*(s+.03),.42,a-.015],[e+b*(s+.03),E0.spring+.02,a-.015],.018,wt.DARKWOOD);for(let b=-s;b<s-1e-6;b+=c){let k=b,E=Math.min(s,b+c),z=Ur(k),P=Ur(E);t.quad([e+E,0,n],[e+k,0,n],[e+k,z,n],[e+E,P,n],[0,0,-1],wt.REDDOOR,[[E,0],[k,0],[k,z],[E,P]])}let l=s-.2,v=.3,u=E0.spring+.07,p=n-.006,d=.05,h=(b,k,E,z)=>t.box(e+b,k,p-.018,e+E,z,p,wt.REDDOOR);h(-l,v,l,v+d),h(-l,u-d,l,u),h(-l,v,-l+d,u),h(l-d,v,l,u),t.box(e-l+.14,v+.14,p-.022,e+l-.14,u-.14,p,wt.REDDOOR);let g=E0.spring+.31;h(-s+.08,u+.06,s-.08,u+.12);for(let b of[-1,1]){let E=s-.17;for(let z=.07;z<E-1e-6;z+=c){let P=z,R=Math.min(E,z+c),B=Ur(P,-.18),$=Ur(R,-.18);if(B<=g+.02&&$<=g+.02)continue;let D=St=>e+b*St,it=[[D(P),g,p+.004],[D(R),g,p+.004],[D(R),Math.max(g,$),p+.004],[D(P),Math.max(g,B),p+.004]];b>0?t.quad(it[1],it[0],it[3],it[2],[0,0,-1],wt.REDPANEL,[[R,0],[P,0],[P,1],[R,1]]):t.quad(...it,[0,0,-1],wt.REDPANEL,[[P,0],[R,0],[R,1],[P,1]])}}t.beam([e,g-.02,p-.008],[e,Ur(0,-.12),p-.008],.03,wt.REDDOOR),t.beam([e-s+.1,g-.01,p-.006],[e+s-.1,g-.01,p-.006],.014,wt.REDDOOR);let m=e-s+.15,x=1.06,y=p-.03;t.box(m-.034,x-.2,y-.008,m+.034,x+.17,y+.012,wt.BRASS);for(let[b,k]of[[x+.2,.026],[x+.235,.016],[x-.23,.026],[x-.265,.016]])t.lathe(m,y-.002,[[0,b-k],[k,b-k*.4],[k,b+k*.4],[0,b+k]],wt.BRASS,12);for(let b=0;b<6;b++){let k=x-.17+b*.065;for(let E of[-1,1])t.beam([m+E*.034,k,y-.01],[m+E*.041,k+.03,y-.01],.006,wt.BRASS)}let _=y-.008,M=(b,k,E)=>{for(let z=0;z<E;z++){let P=Ee*z/E,R=Ee*(z+1)/E;for(let B=0;B<16;B++){let $=2*Ee*B/16,D=2*Ee*(B+1)/16,it=(re,Ae)=>[m+k*Math.sin(re)*Math.cos(Ae),x+.03+k*Math.sin(re)*Math.sin(Ae),b-k*Math.cos(re)],St=(re,Ae)=>[Math.sin(re)*Math.cos(Ae),Math.sin(re)*Math.sin(Ae),-Math.cos(re)],yt=t.v(it(P,$),St(P,$),wt.BRASS),mt=t.v(it(P,D),St(P,D),wt.BRASS),zt=t.v(it(R,D),St(R,D),wt.BRASS),It=t.v(it(R,$),St(R,$),wt.BRASS);t.idx.push(yt,mt,zt,yt,zt,It)}}};t.beam([m,x+.03,_],[m,x+.03,_-.05],.011,wt.BRASS),M(_-.075,.034,10),t.box(m-.008,x-.1,y-.0125,m+.008,x-.06,y-.0085,wt.KEYHOLE)}var Hg=[0,Ee/2,Ee,-Ee/2],Id=t=>{let e=Ee/2;return t-Math.round(t/e)*e},Yl=t=>{let e=Math.abs(t);return Te.top-.55*Math.pow(Math.max(0,Math.sin(e*3+.6)),6)-.25*Math.pow(Math.max(0,Math.sin(e*7+1.9)),8)-.06*Math.sin(e*23)},u0={cx:Nt/2,cz:Te.cz,hx:.57,hz:1.19,top:.19,file:"res/studio/grave.bin",tex:"res/studio/grave.webp"},IA=[[u0.cx-.19,u0.cz-.36,.16],[u0.cx-.05,u0.cz-.43,.25],[u0.cx+.24,u0.cz-.38,.1]];function z8(t){let{cx:e,cz:o,ri:r,ro:n,hw:a,spring:s}=Te,i=wt.OLDSTONE,c=(u,p,d)=>[e+Math.sin(u)*p,d,o+Math.cos(u)*p],f=u=>s+Math.sqrt(Math.max(0,a*a-u*u)),l=(u,p)=>{let d=[];for(let m=0;m<=160;m++)d.push(-Ee+2*Ee*m/160);let g=Math.asin(Math.min(.999,a/u));for(let m of Hg)for(let x of[-1,1])d.push(((m+x*g+Ee)%(2*Ee)+2*Ee)%(2*Ee)-Ee);d.sort((m,x)=>m-x);for(let m=0;m<d.length-1;m++){let x=d[m],y=d[m+1];if(y-x<1e-5)continue;let _=Id((x+y)/2),M=Math.abs(u*Math.sin(_))<a&&Math.abs(_)<Ee/4,b=yt=>M?f(u*Math.sin(Id(yt))):0,k=[Math.sin(x)*p,0,Math.cos(x)*p],E=[Math.sin(y)*p,0,Math.cos(y)*p],z=c(x,u,b(x)),P=c(y,u,b(y)),R=c(y,u,Yl(y)),B=c(x,u,Yl(x)),$=t.v(z,k,i,[u*x,z[1]]),D=t.v(P,E,i,[u*y,P[1]]),it=t.v(R,E,i,[u*y,R[1]]),St=t.v(B,k,i,[u*x,B[1]]);if(p>0?t.idx.push($,D,it,$,it,St):t.idx.push($,it,D,$,St,it),p>0){let yt=c(x,r,Yl(x)),mt=c(y,r,Yl(y));t.quad(B,R,mt,yt,[0,1,0],i,[[B[0],B[2]],[R[0],R[2]],[mt[0],mt[2]],[yt[0],yt[2]]])}}};l(n,1),l(r,-1);for(let u of Hg){let p=[Math.sin(u),0,Math.cos(u)],d=[Math.cos(u),0,-Math.sin(u)],h=(x,y,_)=>[e+p[0]*Math.sqrt(y*y-x*x)+d[0]*x,_,o+p[2]*Math.sqrt(y*y-x*x)+d[2]*x];for(let x of[-1,1]){let y=x*a,_=[-d[0]*x,0,-d[2]*x];t.quad(h(y,r,0),h(y,n,0),h(y,n,s),h(y,r,s),_,i,[[0,0],[1,0],[1,1],[0,1]])}let g=20;for(let x=0;x<g;x++){let y=-a+2*a*x/g,_=-a+2*a*(x+1)/g,M=(y+_)/2,b=f(M),k=[-(d[0]*M),-(b-s),-(d[2]*M)],E=Math.hypot(...k),z=k.map(P=>P/E);t.quad(h(y,r,f(y)),h(_,r,f(_)),h(_,n,f(_)),h(y,n,f(y)),z,i,[[y,0],[_,0],[_,1],[y,1]])}let m=n+.05;for(let x=0;x<24;x++){let y=Ee*x/24,_=Ee*(x+1)/24,M=a+.08,b=k=>{let E=Math.cos(k)*M;return h(Math.max(-m+.01,Math.min(m-.01,E)),m,s+Math.sin(k)*M)};t.beam(b(y),b(_),.06,i)}for(let x of[-1,1]){let y=h(x*(a+.1),n+.06,s-.15),_=h(x*(a+.1),n+.06,s);t.beam(y,_,.14,i)}t.beam(h(0,n+.07,s+a-.05),h(0,n+.07,s+a+.3),.13,i)}let v=(u,p,d,h,g)=>{for(let x=0;x<96;x++){let y=-Ee+2*Ee*x/96,_=-Ee+2*Ee*(x+1)/96,M=Id((y+_)/2);if(g&&Math.abs(p*Math.sin(M))<a+.05&&Math.abs(M)<Ee/4)continue;let b=[Math.sin(y),0,Math.cos(y)],k=[Math.sin(_),0,Math.cos(_)],E=t.v(c(y,p,d),b,i,[p*y,d]),z=t.v(c(_,p,d),k,i,[p*_,d]),P=t.v(c(_,p,h),k,i,[p*_,h]),R=t.v(c(y,p,h),b,i,[p*y,h]);t.idx.push(E,z,P,E,P,R),t.quad(c(y,p,h),c(_,p,h),c(_,u,h),c(y,u,h),[0,1,0],i,[[y,0],[_,0],[_,1],[y,1]]),t.quad(c(y,u,d),c(_,u,d),c(_,p,d),c(y,p,d),[0,-1,0],i,[[y,0],[_,0],[_,1],[y,1]])}};v(n-.02,n+.12,0,.38,!0),v(n-.02,n+.1,Te.cornice-.12,Te.cornice,!1),v(n-.02,n+.2,Te.cornice,Te.cornice+.2,!1);for(let u of[Ee/4,3*Ee/4,-Ee/4,-3*Ee/4]){let p=.3/n;for(let[d,h,g,m]of[[n,n+.07,.38,Te.cornice-.12]]){let x=u-p,y=u+p,_=[Math.sin(u),0,Math.cos(u)];t.quad(c(x,h,g),c(y,h,g),c(y,h,m),c(x,h,m),_,i,[[x*h,g],[y*h,g],[y*h,m],[x*h,m]]);for(let[M,b]of[[x,-1],[y,1]]){let k=[Math.cos(M)*b,0,-Math.sin(M)*b];t.quad(c(M,d,g),c(M,h,g),c(M,h,m),c(M,d,m),k,i,[[0,g],[1,g],[1,m],[0,m]])}}}}function E8(){let{cx:t,cz:e,ro:o}=Te,r=[],n=[],a=[],s=[],i=[],c=d=>{let h=(d/(2*Ee)*4%1+1)%1*64,g=Math.floor(h),m=h-g;return Fg[g%64]*(1-m)+Fg[(g+1)%64]*m},f=Ba(9090),l=Math.asin(Math.min(.999,Te.gap/Te.cloth)),v=[[l,Ee-l,0],[-Ee+l,-l,0],[-l-.02,l+.02,1],[Ee-l-.02,Ee+l+.02,1]],u=46,p=8;for(let[d,h,g]of v){let m=Math.round((h-d)*Te.cloth/.035),x=r.length/3,y=[],_=[];for(let b=0;b<=m;b++)_.push(.2+.25*f());for(let b=0;b<=(g?u:u+p);b++){let k=[];for(let E=0;E<=m;E++){let z=d+(h-d)*E/m,P=Yl(z)+.04,R=Math.min(z-d,h-z)*Te.cloth,B,$;if(b===0)B=Te.ri+.12,$=P+.03;else if(b===1)B=o+.08,$=P+.07;else if(b<=u){let D=(b-1)/(u-1);if($=(P+.02)*(1-D),g){let re=Math.abs(Math.sin(z))*Te.cloth/Te.gap,Ae=Te.spring+Te.hw+.32+.35*(1-Math.min(1,re));$=P+.02-(P+.02-Ae)*D}let it=.38*Math.pow(D,2)+.1*Math.sqrt(D)+.26,St=(.05+.34*Math.pow(D,1.3))*c(z),yt=(.02+.07*D)*Math.sin(z*Te.cloth/.16+2*c(z*1.7)),mt=.03*(1-D)*Math.sin(z*Te.cloth/.055)+.015*Math.sin(z*Te.cloth/.031+D*3),zt=yt+mt,It=.12*Math.exp(-R/.25)*Math.sin(R*18)*D;B=Math.max(o+.26,o+it+St+zt+It),g&&(B=o+.26+.06*Math.sin(z*Te.cloth/.09)+.05*D)}else{let D=(b-u)/p;B=o+.74+.39*c(z)+D*_[E]*(.7+.3*(1+c(z+.3))),$=.012+.05*Math.max(0,Math.sin(D*7+z*23))*(1-D)+.03*(1-D)}k.push([t+Math.sin(z)*B,$,e+Math.cos(z)*B])}y.push(k)}for(let b=0;b<y.length;b++)for(let k=0;k<=m;k++){let E=y[b][k],z=y[b][Math.max(k-1,0)],P=y[b][Math.min(k+1,m)],R=y[Math.max(b-1,0)][k],B=y[Math.min(b+1,y.length-1)][k],$=[P[0]-z[0],P[1]-z[1],P[2]-z[2]],D=[B[0]-R[0],B[1]-R[1],B[2]-R[2]],it=[$[1]*D[2]-$[2]*D[1],$[2]*D[0]-$[0]*D[2],$[0]*D[1]-$[1]*D[0]],St=Math.hypot(...it)||1;it=it.map(mt=>mt/St),r.push(E[0]+se[0],E[1]+se[1],E[2]+se[2]),n.push(...it),a.push((d+(h-d)*k/m)*Te.cloth,b/(u+p));let yt=b<=1?0:b<=u?(b-1)/(u-1):1-(b-u)/p*.9;i.push(b<=u?Math.pow(yt,1.3)*(1-.6*Math.pow(yt,6)):.4*yt*yt)}let M=m+1;for(let b=0;b<y.length-1;b++)for(let k=0;k<m;k++){let E=x+b*M+k;s.push(E,E+1,E+M+1,E,E+M+1,E+M)}}for(let d of[Ee/2,-Ee/2]){let h=r.length/3,g=40,m=30,x=[Math.sin(d),0,Math.cos(d)],y=[Math.cos(d),0,-Math.sin(d)];for(let _=0;_<=m;_++)for(let M=0;M<=g;M++){let b=-Te.hw+2*Te.hw*M/g,k=_/m,z=(Te.spring+Math.sqrt(Math.max(0,Te.hw*Te.hw-b*b))-.02)*(1-k)+.01,P=(Te.ri+Te.ro)/2+.06*Math.sin(b*34)*(.3+k)+.12*k*k,R=[t+x[0]*P+y[0]*b,z,e+x[2]*P+y[2]*b];r.push(R[0]+se[0],R[1]+se[1],R[2]+se[2]),i.push(.6*k);let B=[x[0]+y[0]*Math.cos(b*34)*.6,.1,x[2]+y[2]*Math.cos(b*34)*.6],$=Math.hypot(...B);n.push(B[0]/$,B[1]/$,B[2]/$),a.push(b,k)}for(let _=0;_<m;_++)for(let M=0;M<g;M++){let b=h+_*(g+1)+M;s.push(b,b+1,b+g+2,b,b+g+2,b+g+1)}}return{pos:r,nrm:n,uv:a,idx:s,sw:i}}function A8(t,e){let o=t.pos.length/3;for(let r=0;r<e.pos.length;r+=3){let n=e.pos[r]-se[0],a=e.pos[r+2]-se[2];t.pos.push(Nt-n+se[0],e.pos[r+1],_e-a+se[2]),t.nrm.push(-e.nrm[r],e.nrm[r+1],-e.nrm[r+2])}t.kind.push(...e.kind),t.uv.push(...e.uv),t.anchor.push(...e.anchor);for(let r of e.idx)t.idx.push(r+o)}function T8(t){let{cx:e,hw:o,spring:r,pier:n,face:a,back:s,floor:i,x0:c,x1:f}=no,l=wt.OLDSTONE,v=wt.HOLLOW,u=s-o,p=5.35,d=g=>r+Math.sqrt(Math.max(0,o*o-(g-e)*(g-e)));t.box(c-.1,0,a-.28,f+.1,i-.06,_e,l,{bottom:!0}),t.box(c-.14,i-.06,a-.34,f+.14,i,_e,l),t.box(e-.95,ut.top,a-.62,e+.95,ut.top+.15,a-.28,l,{bottom:!0});for(let[g,m]of[[c,e-o],[e+o,f]]){t.box(g,i,a+.03,m,p,_e,v,{bottom:!0});let x=g<e?g:m,y=g<e?m:g,_=g<e?1:-1,M=11,b=(p-.38-i)/M;for(let k=0;k<M;k++){let E=i+k*b+.018,z=i+(k+1)*b-.018,P=k%2===0,R=x+_*.01,B=P?y-_*.01:x+_*(n*.66);if(t.box(Math.min(R,B),E,a-.06,Math.max(R,B),z,a+.03,l,{z1:!0}),!P){let D=x+_*(n*.66+.025),it=y-_*.01;t.box(Math.min(D,it),E,a-.02,Math.max(D,it),z,a+.03,l,{z1:!0})}let $=x-_*.035;t.box(Math.min($,x+_*.02),E,a-.035,Math.max($,x+_*.02),z,P?a+.9:a+.55,l)}t.box(g-.05,p-.38,a-.07,m+.05,p-.3,_e,l),t.box(g-.02,p-.3,a-.03,m+.02,p-.12,_e,l),t.box(g-.09,p-.12,a-.11,m+.09,p,_e,l)}let h=.03;for(let g=e-o;g<e+o-1e-6;g+=h){let m=g,x=Math.min(e+o,g+h);t.quad([x,d(x),a+.02],[m,d(m),a+.02],[m,p,a+.02],[x,p,a+.02],[0,0,-1],l,[[x,d(x)],[m,d(m)],[m,p],[x,p]])}{let m=o+.07;for(let y=0;y<36;y++){let _=Ee*y/36,M=Ee*(y+1)/36;t.beam([e+Math.cos(_)*m,r+Math.sin(_)*m,a-.02],[e+Math.cos(M)*m,r+Math.sin(M)*m,a-.02],.065,l,[0,0,1])}for(let y of[-1,1])t.box(e+y*o-.16,r-.14,a-.06,e+y*o+.16,r,a+.4,l);let x=r+o;t.quad([e-.17,x+.32,a-.08],[e+.17,x+.32,a-.08],[e+.11,x-.06,a-.08],[e-.11,x-.06,a-.08],[0,0,-1],l,[[0,1],[1,1],[1,0],[0,0]]);for(let y of[-1,1])t.quad([e+y*.11,x-.06,a-.08],[e+y*.17,x+.32,a-.08],[e+y*.17,x+.32,a+.02],[e+y*.11,x-.06,a+.02],[y,-.15,0],l,[[0,0],[1,0],[1,1],[0,1]]);t.quad([e-.11,x-.06,a-.08],[e+.11,x-.06,a-.08],[e+.11,x-.06,a+.02],[e-.11,x-.06,a+.02],[0,-1,0],l,[[0,0],[1,0],[1,1],[0,1]])}for(let g of[-1,1]){let m=e+g*o;t.quad([m,i,a],[m,i,u],[m,r,u],[m,r,a],[-g,0,0],v,[[a,i],[u,i],[u,r],[a,r]])}{for(let y=0;y<40;y++){let _=Ee*y/40,M=Ee*(y+1)/40,b=(E,z)=>[e+Math.cos(E)*o,r+Math.sin(E)*o,z],k=[-Math.cos((_+M)/2),-Math.sin((_+M)/2),0];t.quad(b(_,a),b(M,a),b(M,u),b(_,u),k,v,[[o*_+0,a],[o*M,a],[o*M,u],[o*_,u]])}for(let y=0;y<40;y++){let _=Ee*y/40,M=Ee*(y+1)/40,b=(B,$)=>[e+Math.cos(B)*o,$,u+Math.sin(B)*o],k=B=>[-Math.cos(B),0,-Math.sin(B)],E=t.v(b(_,i),k(_),v,[o*_,i]),z=t.v(b(M,i),k(M),v,[o*M,i]),P=t.v(b(M,r),k(M),v,[o*M,r]),R=t.v(b(_,r),k(_),v,[o*_,r]);t.idx.push(E,z,P,E,P,R)}let x=[];for(let y=0;y<=14;y++){let _=Ee/2*y/14,M=[];for(let b=0;b<=40;b++){let k=Ee*b/40,E=[Math.cos(k)*Math.cos(_),Math.sin(_),Math.sin(k)*Math.cos(_)];M.push(t.v([e+o*E[0],r+o*E[1],u+o*E[2]],E.map(z=>-z),v,[o*k,r+o*_]))}x.push(M)}for(let y=0;y<14;y++)for(let _=0;_<40;_++){let M=x[y][_],b=x[y][_+1],k=x[y+1][_+1],E=x[y+1][_];t.idx.push(M,b,k,M,k,E)}t.box(e-o,i-.02,a-.02,e+o,i,s,v,{bottom:!0,x0:!0,x1:!0,z1:!0})}t.box(c0.x-.6,i,jh-.5,c0.x+.6,c0.plinth-.05,jh+.55,l,{bottom:!0}),t.box(c0.x-.64,c0.plinth-.05,jh-.54,c0.x+.64,c0.plinth,jh+.59,l),t.box(c-.06,p,a-.08,f+.06,p+.32,_e,l),t.box(c-.02,p+.32,a-.02,f+.02,p+.78,_e,l),t.box(c-.12,p+.78,a-.16,f+.12,p+.86,_e,l),t.box(c-.2,p+.86,a-.26,f+.2,p+1.02,_e,l);{let g=p+.55,m=.34,x=.2,y=28,_=[];for(let M=0;M<=4;M++){let b=M/4,k=[];for(let E=0;E<=y;E++){let z=2*Ee*E/y,P=.09*Math.sqrt(Math.max(0,1-b*b))+.01;k.push(t.v([e+Math.cos(z)*m*b,g+Math.sin(z)*x*b,a-.02-P],[Math.cos(z)*b*.6,Math.sin(z)*b*.6,-1],l,[Math.cos(z)*b,Math.sin(z)*b]))}_.push(k)}for(let M=0;M<4;M++)for(let b=0;b<y;b++){let k=_[M][b],E=_[M][b+1],z=_[M+1][b+1],P=_[M+1][b];t.idx.push(k,P,z,k,z,E)}for(let M=0;M<y;M++){let b=2*Ee*M/y,k=2*Ee*(M+1)/y;t.beam([e+Math.cos(b)*(m+.03),g+Math.sin(b)*(x+.03),a-.04],[e+Math.cos(k)*(m+.03),g+Math.sin(k)*(x+.03),a-.04],.025,l,[0,0,1])}for(let M of[-1,1])for(let b=0;b<14;b++){let k=1.8*Ee*b/14,E=1.8*Ee*(b+1)/14,z=.1*(1-b/16),P=.1*(1-(b+1)/16),R=e+M*(m+.16),B=g;t.beam([R+M*Math.cos(k)*z,B+Math.sin(k)*z,a-.04],[R+M*Math.cos(E)*P,B+Math.sin(E)*P,a-.04],.018,l,[0,0,1])}}{let g=p+1.02,m=.62,x=(f-c)/2+.2,y=a-.2,_=b=>g+m*(1-Math.abs(b-e)/x);for(let b=e-x;b<e+x-1e-6;b+=.1){let k=b,E=Math.min(e+x,b+.1);t.quad([E,g,y],[k,g,y],[k,_(k),y],[E,_(E),y],[0,0,-1],l,[[E,g],[k,g],[k,_(k)],[E,_(E)]])}let M=Math.hypot(x,m);for(let b of[-1,1]){let k=[b*m/M,x/M,0],E=e+b*(x+.06);t.quad([e,g+m+.06,y-.06],[E,g-.02,y-.06],[E,g-.02,_e],[e,g+m+.06,_e],k,l,[[0,y],[M,y],[M,_e],[0,_e]]),t.quad([e,g+m+.06,y-.06],[e,g+m-.06,y-.06],[E,g-.12,y-.06],[E,g-.02,y-.06],[0,0,-1],l,[[0,1],[0,0],[M,0],[M,1]])}}}var Ug=[[72,72,72,72,72,72,70,69,68,65,63,61,63,63,64,66,68,69,70,70,70,70,70,71],[72,72,72,72,72,72,70,69,68,65,63,61,63,63,64,66,68,69,70,70,70,70,70,71],[72,72,72,72,72,72,70,69,67,65,63,61,63,63,64,66,68,69,70,70,70,70,70,71],[41,44,57,57,57,53,51,34,53,55,57,57,59,59,59,63,65,65,65,64,60,60,60,59],[56,56,62,63,63,63,59,35,54,55,59,59,59,59,58,61,63,63,63,62,50,50,50,50],[62,73,73,73,71,71,60,40,54,55,59,60,60,60,58,62,65,65,65,61,54,49,49,54],[66,79,79,79,78,76,65,45,54,54,59,62,62,62,62,62,65,65,65,61,54,49,49,54],[66,80,81,82,82,82,65,50,48,57,62,62,62,62,62,62,65,65,65,61,54,49,49,54],[66,80,86,86,86,85,66,50,48,57,62,62,62,62,62,61,64,64,64,60,52,50,50,52],[64,80,86,86,86,85,66,50,43,57,62,62,62,62,61,61,63,63,63,59,51,50,50,49],[64,76,86,86,86,85,66,50,46,56,60,60,60,60,58,59,61,61,61,57,51,51,51,48],[59,66,85,85,85,85,66,50,46,47,54,56,56,56,53,55,58,58,58,55,52,52,51,46],[46,52,77,77,77,77,66,49,46,44,39,42,42,42,43,47,47,47,50,52,52,52,51,45],[38,38,49,60,60,60,56,46,46,44,39,42,42,42,44,47,47,47,51,52,52,52,51,37],[25,30,30,30,35,38,38,38,44,47,47,47,45,42,44,47,47,47,51,52,52,52,50,23],[13,14,27,28,29,30,31,36,45,49,49,49,48,41,44,47,47,47,51,52,52,52,41,17],[23,15,15,16,16,28,30,36,45,49,49,49,48,41,44,45,45,45,50,50,50,50,43,32],[23,19,19,19,19,19,23,34,45,49,49,49,48,41,44,44,44,44,51,51,51,51,46,32],[24,19,19,19,19,22,27,31,42,48,48,48,47,39,42,42,42,44,51,51,51,51,46,32],[24,19,19,19,23,25,28,31,38,42,42,42,40,37,40,41,42,44,51,51,51,51,46,32],[26,23,18,19,23,25,28,31,37,37,37,37,32,33,34,38,42,44,50,51,51,51,46,31],[31,30,27,27,23,25,28,30,31,31,31,30,28,28,29,34,40,42,48,49,49,49,46,31],[39,37,33,30,22,25,27,27,27,27,26,22,22,22,22,24,31,36,42,43,43,43,43,39],[42,40,35,30,27,14,14,15,15,15,12,12,12,13,13,15,16,18,39,43,43,43,43,42],[42,41,35,30,27,0,0,0,0,0,0,0,0,0,0,0,0,0,41,43,43,43,43,42],[42,41,35,29,27,0,0,0,0,0,0,0,0,0,0,0,0,0,41,43,43,43,43,42],[42,41,35,29,15,0,0,0,0,0,0,0,0,0,0,0,0,0,41,43,43,43,42,42]];function L8(t,e){let r=Ug.length,n=Math.max(0,Math.min(r-1.001,t/.1)),a=(e/(2*Ee)*24%24+24)%24,s=Math.floor(n),i=Math.floor(a),c=n-s,f=a-i,l=(p,d)=>Ug[Math.min(r-1,p)][d%24]/100,v=l(s,i)*(1-f)+l(s,i+1)*f,u=l(s+1,i)*(1-f)+l(s+1,i+1)*f;return v*(1-c)+u*c}var Fd=[[-2.5,2.1,2.3,1,1.3],[2.2,1.6,1.55,-1,4.1]];function Kg(t){let[e,o,r,n,a]=Fd[t],s=[],i=140,c=null;for(let f=0;f<=i;f++){let l=f/i,v=.02+Math.pow(l,.92)*r,u=e+n*o*2*Ee*l,p=L8(v,u)+.035;c=c===null?p:Math.max(p,c*.75+p*.25);let d=c+.018*Math.sin(l*37+a)+.01*Math.sin(l*71+a*3);s.push([c0.x+Math.sin(u)*d,c0.plinth+v+.025*Math.sin(l*23+a*2),c0.z-.05+Math.cos(u)*d,u,l])}return s}function N8(t){let e=Ba(77);for(let o=0;o<Fd.length;o++){let r=Kg(o);for(let n=0;n<r.length-1;n++)t.beam(r[n],r[n+1],.013*(1-r[n][4]*.45),wt.DARKWOOD)}for(let[o,r,n]of Ua){let[a,s]=Qh(o);for(let i=0;i<2;i++){let c=null;for(let f=a;f<=s;f+=.18){let l=Zh(o,r,f),v=Math.sin(f*3.1+i*2+n)*.07,u=Math.cos(f*2.3+i+n)*.05,p=o==="wall"?.25+.5*f/ro:0,d=o==="wall"?[.05+Math.abs(u)*.6,l[1],l[2]+v*(1.5+i)*(1+2*p)+(i-.5)*p]:o==="ridge"?[l[0]+v,l[1]+u+.12,l[2]]:[l[0],l[1]+u+.12,l[2]+v];c&&(o==="wall"||Ql(f,n)||e()<.5)&&t.beam(c,d,(o==="wall"?.022*(1.2-f/ro):.012)+.008*e(),wt.WOOD),c=d}}}}function O8(t){let e=Ba(4242),o=(n,a)=>!(Math.abs(n-u0.cx)<u0.hx+.2&&Math.abs(a-u0.cz+.08)<u0.hz+.42)&&!(n>ut.x0-ut.curb-.1&&n<ut.x1+ut.curb+.1&&a>ut.z0-ut.curb-.1&&a<ut.z1+ut.curb+.1)&&n>.2&&n<Nt-.2&&a>.3&&a<_e-.4,r=(n,a,s,i)=>{let c=.022+e()*.022,f=e()*2*Ee,l=Math.cos(f),v=Math.sin(f),u=(d,h)=>[n+(d*l-h*v)*c,a+.004*d*h,s+(d*v+h*l)*c],p=i?2:0;t.quad(u(-1,-1),u(-1,1),u(1,1),u(1,-1),[0,1,0],wt.BRACT,[[p,0],[p,1],[p+1,1],[p+1,0]])};for(let[n,a,s]of Ua){let[i,c]=Qh(n);for(let f=i;f<=c;f+=.05){if(!Ql(f,s)||e()>.55)continue;let l=Zh(n,a,f),v=l[0]+(e()-.5)*1.8,u=l[2]+(e()-.5)*1.8;o(v,u)&&r(v,.004,u,e()<.18)}}for(let n=0;n<260;n++){let a=Math.floor(e()*4),s,i;a<2?(s=a?ut.x1+ut.curb+.12+e()*e()*.9:ut.x0-ut.curb-.12-e()*e()*.9,i=ut.z0+e()*(ut.z1-ut.z0)):(i=a===2?ut.z0-ut.curb-.12-e()*e()*.9:ut.z1+ut.curb+.12+e()*e()*.9,s=ut.x0+e()*(ut.x1-ut.x0)),o(s,i)&&r(s,.004,i,e()<.18)}for(let n=0;n<70;n++){let a=ut.x0+.08+e()*(ut.x1-ut.x0-.16),s=ut.z0+.08+e()*(ut.z1-ut.z0-.16);Math.hypot(a-c0.x,s-c0.z)<.6||(t.float=[a,s,a*5.1+s*2.9],r(a,.016,s,e()<.2),t.float=null)}}function R8(t,e,o){let r=(a,s,i,c,f)=>{let l=t.pos.length/3,v=Math.cos(i),u=Math.sin(i),p=Math.cos(c),d=Math.sin(c),h=[v,0,-u],g=[u*d,p,v*d],m=[h[1]*g[2]-h[2]*g[1],h[2]*g[0]-h[0]*g[2],h[0]*g[1]-h[1]*g[0]],x=f?.95:o()*.8;for(let[y,_]of[[0,0],[1,0],[1,1],[0,1]]){let M=(y-.5)*s,b=(_-.5)*s;t.pos.push(a[0]+h[0]*M+g[0]*b+se[0],a[1]+h[1]*M+g[1]*b+se[1],a[2]+h[2]*M+g[2]*b+se[2]),t.nrm.push(...m),t.uv.push(y,_),t.shade.push(x),t.flower.push(1)}t.idx.push(l,l+1,l+2,l,l+2,l+3)};function n(a,s,i){let c=s/ro,f=Math.min(.15+.9*c,a<1||a>_e-1?.6:1.15),l=Math.round(3+7*c),v=s<1?0:Math.round((2+9*c)*(Ql(s*1.4,i)?1:.45));for(let u=0;u<l;u++){let p=o()*2*Ee;e([.04+o()*.22,s+(o()-.5)*.12,a+(o()-.5)*2*f],[Math.cos(p)*.4+.5,-.2-o()*.5,Math.sin(p)],[0,0,1],.07+o()*.06,.1)}for(let u=0;u<v;u++)r([.06+o()*.28,s+(o()-.5)*.18,a+(o()-.5)*2*f*.9],.34+o()*.32,o()*2*Ee,(o()-.5)*2.4,o()<.14);if(s>3&&o()<.05){let u=[.15,s,a+(o()-.5)*2*f],p=.4+o()*1.2;for(let d=0;d<p;d+=.13)u=[u[0]+.03,u[1]-.13,u[2]+(o()-.5)*.06],r([u[0],u[1],u[2]],(.26+o()*.2)*(1-.4*d/p),o()*2*Ee,(o()-.5)*.8,o()<.15)}}for(let[a,s,i]of Ua){let[c,f]=Qh(a);for(let l=c;l<=f;l+=.1){if(a==="wall"){n(s,l,i);continue}if(!Ql(l,i))continue;let v=Zh(a,s,l),u=()=>(o()-.5)*.7,p=4+Math.floor(o()*4);for(let d=0;d<p;d++){let h=a==="ridge"?[v[0]+u(),v[1]-o()*.25,v[2]+u()*.4]:[v[0]+u()*.4,v[1]-o()*.25,v[2]+u()];r(h,.42+o()*.4,o()*2*Ee,(o()-.5)*2.4,o()<.16)}for(let d=0;d<5;d++){let h=o()*2*Ee;e([v[0]+u()*.6,v[1]-o()*.2,v[2]+u()*.6],[Math.cos(h),-.3-o()*.5,Math.sin(h)],[-Math.sin(h),0,Math.cos(h)],.08+o()*.06,.1)}if(o()<.22){let d=.5+o()*2,h=[v[0],v[1],v[2]],g=[(o()-.5)*.08,(o()-.5)*.08];for(let m=0;m<d;m+=.13){h=[h[0]+g[0],h[1]-.13,h[2]+g[1]];let x=(.3+o()*.22)*(1-.4*m/d);if(r([h[0]+(o()-.5)*.08,h[1],h[2]+(o()-.5)*.08],x,o()*2*Ee,(o()-.5)*.8,o()<.15),o()<.6){let y=o()*2*Ee;e([h[0],h[1],h[2]],[Math.cos(y),-.6,Math.sin(y)],[-Math.sin(y),0,Math.cos(y)],.05+o()*.04,.1)}}}}}}var Bg=(()=>{let t=Ba(9001),e=[],o=[];for(let[n,a,s]of Ua){let[i,c]=Qh(n);for(let f=i;f<=c;f+=.1)Ql(f,s)&&o.push(Zh(n,a,f))}let r=o.filter(n=>n[0]>ut.x0-.6&&n[0]<ut.x1+.6&&n[2]>ut.z0&&n[2]<ut.z1);for(let n=0;n<64;n++){let a=n%2===0&&r.length?r:o,s=a[Math.floor(t()*a.length)];e.push({start:[s[0]+(t()-.5)*.4,s[1]-.25-t()*.3,s[2]+(t()-.5)*.4],period:18+t()*22,offset:t()*60,drift:[(t()-.5)*1.6,(t()-.5)*1.6],speed:.45+t()*.25,seed:t(),white:t()<.18?1:0})}return e})(),vs=[ut.x0+.06,ut.z0+.06,ut.x1-.06,ut.z1-.06];function C8(t,e){let o=e+t.offset,r=Math.floor(o/t.period),n=o-r*t.period,a=.6+.4*Math.sin(r*1.7+t.seed*5),s=t.start[0]+t.drift[0]*a,i=t.start[2]+t.drift[1]*a,c=s>vs[0]&&s<vs[2]&&i>vs[1]&&i<vs[3],f=c?.017:.006,l=(t.start[1]-f)/t.speed;return{ph:n,Tf:l,lx:s,lz:i,inPool:c}}var sa=[{at:[Nt/2-.8,Y0(7.6)],dir:.9,len:.92,kind:0,sip:21,first:9},{at:[Nt/2+.9,Y0(11.6)],dir:3.6,len:.74,kind:1,sip:29,first:17},{at:[Nt/2-.3,Y0(12.8)],dir:5.2,len:.86,kind:2,sip:25,first:4},{at:[Nt/2+1,Y0(7)],dir:2.2,len:.7,kind:1,sip:33,first:23},{at:[Nt/2-1.1,Y0(10.4)],dir:4.4,len:.82,kind:0,sip:27,first:13},{at:[Nt/2+.4,Y0(9)],dir:1.4,len:.94,kind:2,sip:31,first:28},{at:[Nt/2-.9,Y0(13)],dir:5.9,len:.66,kind:1,sip:23,first:6},{at:[Nt/2+1.1,Y0(12.6)],dir:3,len:.8,kind:0,sip:35,first:31}],si=[ut.x0+.5,ut.z0+.5,ut.x1-.5,ut.z1-.55],Vl=[ut.x0+.25,ut.z0+.25,ut.x1-.25,ut.z1-.3],Kl=12,Xl=-.36,Dd=[];function $8(){let t=d=>{let h=Math.sin(d*12.9898+78.233)*43758.5453;return h-Math.floor(h)},e=sa.map((d,h)=>({k:d,i:h,x:d.at[0],z:d.at[1],th:d.dir,w:0,v:.08,y:-.17,ph:h*2.1,pitch:0,kappa:0,thrust:0,amp:.2,stroking:h%2===0,modeT:t(h*3.1)*3,aim:d.dir,nextAim:t(h*7.7)*5,yAim:-.17,nextY:t(h*5.9)*8,gx:d.at[0],gz:d.at[1],nextSip:d.first,sipT:-1,bite:0,notice:0})),o=[],r=[];for(let d=0;d<Kl;d++)r.push({x:0,z:0,alive:0,born:0,seed:d*.37});let n={on:!1,x:0,z:0,t0:0,petal:!1,eaten:0,lure:null},a=0,s=0,i=d=>Math.atan2(Math.sin(d),Math.cos(d)),c=()=>t(++s*1.618+a*.37);return{fish:e,events:o,crumbs:r,feed:n,drop:(d,h)=>{d=Math.max(Vl[0],Math.min(Vl[2],d)),h=Math.max(Vl[1],Math.min(Vl[3],h)),Object.assign(n,{on:!0,x:d,z:h,t0:a,petal:!1,eaten:0}),r.forEach((g,m)=>{let x=t(a+m)*Math.PI*2,y=.04+.16*Math.sqrt(t(a*1.7+m*3.1));Object.assign(g,{x:d+Math.cos(x)*y,z:h+Math.sin(x)*y,alive:1,born:a+t(m*5.3+a)*.35})}),o.push([d,h,a,1]);for(let g of e)g.notice=a+.3+Math.hypot(g.x-d,g.z-h)*.35+t(g.i*9.1+a)*.7},lure:(d,h)=>{let g=null,m=1e9;for(let x of e){let y=Math.hypot(x.x-d,x.z-h);y<m&&(m=y,g=x)}n.lure={x:d,z:h,fish:g}},petal:(d,h)=>{Object.assign(n,{on:!0,x:d,z:h,t0:a,petal:!0,eaten:0}),r.forEach((m,x)=>Object.assign(m,{x:d,z:h,alive:x===0?1:0,born:a})),o.push([d,h,a,.45]);let g=n.lure&&n.lure.fish;if(!g){let m=1e9;for(let x of e){let y=Math.hypot(x.x-d,x.z-h);y<m&&(m=y,g=x)}}Math.hypot(g.x-d,g.z-h)>1.4&&(g.x=d+.2,g.z=h-1.2,g.th=Math.PI/2,g.y=-.22,g.v=.06);for(let m of e)m.notice=m===g?a+.9:a+4.5+Math.hypot(m.x-d,m.z-h)*.8+t(m.i*9.1)*2;n.lure=null},unpetal:()=>{if(!n.petal){n.lure=null;return}n.on=!1,n.petal=!1,n.eaten=0,n.lure=null;for(let d of r)d.alive=0},step:d=>{a+=d;let h=a,g=0;for(let m of r)!m.alive||h<m.born||(g++,m.x+=Math.sin(h*.7+m.seed*11)*.004*d,m.z+=Math.cos(h*.6+m.seed*7)*.004*d);if(n.on&&(g===0&&h>n.t0+1&&!n.petal||n.petal&&n.eaten&&h>n.eaten+3||h>n.t0+40)){n.petal=!1,n.on=!1;for(let m of r)m.alive=0}for(let m of e){let{k:x}=m,y=x.len,_=n.on&&h>m.notice;(h>m.nextAim||Math.hypot(m.gx-m.x,m.gz-m.z)<.7)&&(m.gx=si[0]+c()*(si[2]-si[0]),m.gz=si[1]+c()*(si[3]-si[1]),m.nextAim=h+12+c()*14),n.lure&&n.lure.fish===m&&(m.gx=n.lure.x+Math.cos(h*.3)*.3,m.gz=n.lure.z-.45+Math.sin(h*.3)*.2,m.nextAim=h+1,m.yAim=-.2),m.aim=Math.atan2(m.gz-m.z,m.gx-m.x)+.35*Math.sin(h*.21+m.i*1.7);let M=m.aim,b=.7,k=null;if(_){let ge=1e9;for(let et of r){if(!et.alive||h<et.born)continue;let j=Math.hypot(et.x-m.x,et.z-m.z)+.1*Math.sin(m.i*3.3+et.seed*9);j<ge&&(ge=j,k=et)}let $e=k?k.x:n.x,He=k?k.z:n.z;M=Math.atan2(He-m.z,$e-m.x),m.aim=M,b=1.8}let E=.6+y*.8+m.v*2,z=_?Vl:si,P=0;for(let ge of[0,.5,-.5]){let $e=m.x+Math.cos(m.th+ge)*E,He=m.z+Math.sin(m.th+ge)*E;P=Math.max(P,Math.max(z[0]-$e,$e-z[2],z[1]-He,He-z[3],0))}if(P>0){let ge=(z[0]+z[2])/2,$e=(z[1]+z[3])/2+Math.sin(m.i*2.3)*1.5,He=Math.atan2($e-m.z,ge-m.x),et=Math.min(1,P*2.2);M=m.th+i(He-m.th)*et+i(M-m.th)*(1-et),_||(m.aim=M),b=Math.max(b,.6+et*.8)}let R=0;for(let ge of e){if(ge===m)continue;let $e=ge.x-m.x,He=ge.z-m.z,et=Math.hypot($e,He),j=(_?.4:1)*(y+ge.k.len)/2+.2;if(et<j&&Math.abs(ge.y-m.y)<.14){let lt=i(Math.atan2(He,$e)-m.th);(Math.abs(lt)<1.6||et<j*.5)&&(R-=Math.sign(lt||1)*(j-et)/j*(Math.abs(lt)<1.6?1:.6))}}let B=i(M-m.th)+R*(_?.4:2);m.modeT-=d,_?(m.stroking=!0,m.modeT=Math.max(m.modeT,.4)):m.modeT<=0&&(m.stroking=!m.stroking,m.modeT=m.stroking?1.2+c()*1.6:1.6+c()*3.2),!m.stroking&&(Math.abs(B)>.9||m.v<.035)&&(m.stroking=!0,m.modeT=1+c()*.8),!_&&m.sipT<0&&h>m.nextSip&&(m.sipT=0,m.nextSip=h+x.sip*(.7+.6*c()));let $=0;if(m.sipT>=0){let ge=m.sipT;m.sipT+=d,$=Math.min(1,ge/1.6)*(1-Math.max(0,Math.min(1,(ge-2.6)/1.6))),ge<1.7&&m.sipT>=1.7&&o.push([m.x+Math.cos(m.th)*.03,m.z+Math.sin(m.th)*.03,h,.9]),ge<2.4&&m.sipT>=2.4&&o.push([m.x,m.z,h,.55]),(m.sipT>4.2||_)&&(m.sipT=-1)}let D=_&&n.petal?.7:1,it=(m.stroking?_?2.4*D:1:0)*(1-.6*$);m.thrust+=(it-m.thrust)*Math.min(d*3,1);let St=_?.9:.55;m.v+=(m.thrust*.085*(.7+.4*y)-St*m.v)*d,m.v=Math.max(m.v,.008);let yt=.35+.65*Math.min(1,m.thrust),mt=Math.max(-b,Math.min(b,B*1.3))*yt;m.w+=(mt-m.w)*Math.min(d*2.2,1),m.th+=m.w*d,h>m.nextY&&(m.yAim=-(.13+c()*.1),m.nextY=h+6+c()*10);let zt=m.yAim;if($>0&&(zt+=(-.045-zt)*$),_){let ge=k?k.x:n.x,$e=k?k.z:n.z,He=1-Math.min(1,Math.max(0,(Math.hypot(ge-m.x,$e-m.z)-.15)/.9));if(zt+=((n.petal?.012:-.04)-zt)*He,k&&h>m.bite&&m.y>(n.petal?-.02:-.08)){let et=m.x+Math.cos(m.th)*(n.petal?.09:.02),j=m.z+Math.sin(m.th)*(n.petal?.09:.02);Math.hypot(k.x-et,k.z-j)<(n.petal?.14:.09)&&(k.alive=0,m.bite=h+1.3,n.petal?(n.eaten=h,o.push([k.x,k.z,h,1.6]),o.push([k.x+Math.cos(m.th)*.12,k.z+Math.sin(m.th)*.12,h+.01,1])):o.push([k.x,k.z,h,.75]))}}m.x+=Math.cos(m.th)*m.v*d,m.z+=Math.sin(m.th)*m.v*d,m.x=Math.max(ut.x0+.15,Math.min(ut.x1-.15,m.x)),m.z=Math.max(ut.z0+.15,Math.min(ut.z1-.15,m.z));let It=(zt-m.y)*Math.min(d*(_?2:.8),1);m.y+=It;let re=_&&n.petal?.75:.4;m.pitch+=(Math.max(-re,Math.min(re,It/d/Math.max(m.v,.06)*(_&&n.petal?1.8:1)))-m.pitch)*Math.min(d*2.5,1);let Ae=Math.max(-1/y,Math.min(1/y,m.w/Math.max(m.v,.1)));m.kappa+=(Ae-m.kappa)*Math.min(d*4,1);let lo=.12+.88*Math.min(1.4,m.thrust)+.4*Math.min(1,Math.abs(m.w));m.amp+=(lo-m.amp)*Math.min(d*2,1),m.ph+=d*(2+5.5*Math.min(1.6,m.thrust))*(.75+.35/Math.sqrt(y))}for(;o.length&&h-o[0][2]>10;)o.shift()},get t(){return a}}}function P8(){let t=qd();{let e=ut.x0-ut.curb,o=ut.x1+ut.curb,r=ut.z0-ut.curb,n=ut.z1+ut.curb,a=[[0,0,Nt,r],[0,n,Nt,_e],[0,r,e,n],[o,r,Nt,n]];for(let[s,i,c,f]of a)for(let v=s;v<c-1e-6;v+=1)for(let u=i;u<f-1e-6;u+=1){let p=v,d=Math.min(c,v+1),h=u,g=Math.min(f,u+1);t.quad([p,0,h],[p,0,g],[d,0,g],[d,0,h],[0,1,0],wt.FLOOR,[[p,h],[p,g],[d,g],[d,h]])}}for(let e of[0,1]){let o=e?Nt:0,r=e?Nt+sn:-sn,n=e?[-1,0,0]:[1,0,0],a=.04;for(let p=0;p<_e-1e-6;p+=a){let d=p,h=Math.min(_e,p+a),g=(d+h)/2,m=null;if(!e)for(let y of xe.c)ka(g-y)!==null&&(m=[xe.sill,Math.min(ka(d-y)||xe.spring,ka(h-y)||xe.spring)]);let x=m?[[0,m[0]],[m[1],ro]]:[[0,ro]];for(let[y,_]of x)_<=y||(e?t.quad([o,y,h],[o,y,d],[o,_,d],[o,_,h],n,wt.ROCK,[[h,y],[d,y],[d,_],[h,_]]):t.quad([o,y,d],[o,y,h],[o,_,h],[o,_,d],n,wt.ROCK,[[d,y],[h,y],[h,_],[d,_]]))}if(!e)for(let p of xe.c){for(let m of[-1,1]){let x=p+m*xe.hw,y=[0,0,-m],_=[o,xe.sill,x],M=[r,xe.sill,x],b=[r,xe.spring,x],k=[o,xe.spring,x];m>0!=!!e?t.quad(_,M,b,k,y,wt.ROCK,[[0,xe.sill],[sn,xe.sill],[sn,xe.spring],[0,xe.spring]]):t.quad(k,b,M,_,y,wt.ROCK,[[0,xe.spring],[sn,xe.spring],[sn,xe.sill],[0,xe.sill]])}let d=28;for(let m=0;m<d;m++){let x=m/d*Ee,y=(m+1)/d*Ee,_=p+Math.cos(x)*xe.hw,M=p+Math.cos(y)*xe.hw,b=xe.spring+Math.sin(x)*xe.hw,k=xe.spring+Math.sin(y)*xe.hw,E=[0,-Math.sin((x+y)/2),-Math.cos((x+y)/2)];e?t.quad([o,b,_],[r,b,_],[r,k,M],[o,k,M],E,wt.ROCK,[[0,x],[sn,x],[sn,y],[0,y]]):t.quad([o,k,M],[r,k,M],[r,b,_],[o,b,_],E,wt.ROCK,[[0,y],[sn,y],[sn,x],[0,x]])}let h=e?Nt-.08:-sn,g=e?Nt+sn:.08;t.box(h,xe.sill-.09,p-xe.hw-.12,g,xe.sill,p+xe.hw+.12,wt.OLDSTONE)}let s=e?Nt:0,i=e?-1:1,c=wt.OLDSTONE,f=Math.min(s,s+i*.32),l=Math.max(s,s+i*.32);t.box(f,ro-.55,0,l,ro-.3,_e,c);let v=Math.min(s,s+i*.42),u=Math.max(s,s+i*.42);t.box(v,ro-.3,0,u,ro-.12,_e,c)}for(let[e,o]of[[0,1],[_e,-1]]){for(let s=0;s<32;s++){let i=s/32*Nt,c=(s+1)/32*Nt,f=v=>v<Nt/2?ro+Cn*v:ro+Cn*(Nt-v),l=o>0?[[c,0],[i,0],[i,f(i)],[c,f(c)]]:[[i,0],[c,0],[c,f(c)],[i,f(i)]];t.quad(...l.map(([v,u])=>[v,u,e]),[0,0,o],wt.ROCK,l.map(([v,u])=>[v,u]))}let n=o>0?0:_e-.32,a=o>0?.32:_e;t.box(0,ro-.55,n,Nt,ro-.3,a,wt.OLDSTONE)}S8(t);{let e=qd();T8(e),A8(t,e)}z8(t);{let{x0:e,x1:o,z0:r,z1:n,curb:a,top:s}=ut,i=.06,c=.085;t.box(e-a,0,r-a,e,s-c,n+a,wt.OLDSTONE,{bottom:!0}),t.box(o,0,r-a,o+a,s-c,n+a,wt.OLDSTONE,{bottom:!0}),t.box(e,0,r-a,o,s-c,r,wt.OLDSTONE,{bottom:!0}),t.box(e,0,n,o,s-c,n+a,wt.OLDSTONE,{bottom:!0}),t.box(e-a-i,s-c,r-a-i,e+i*.5,s,n+a+i,wt.OLDSTONE),t.box(o-i*.5,s-c,r-a-i,o+a+i,s,n+a+i,wt.OLDSTONE),t.box(e+i*.5,s-c,r-a-i,o-i*.5,s,r+i*.5,wt.OLDSTONE),t.box(e+i*.5,s-c,n-i*.5,o-i*.5,s,n+a+i,wt.OLDSTONE);let f=.5;for(let l=e;l<o-1e-6;l+=f)for(let v=r;v<n-1e-6;v+=f){let u=l,p=Math.min(o,l+f),d=v,h=Math.min(n,v+f);t.quad([u,0,d],[u,0,h],[p,0,h],[p,0,d],[0,1,0],wt.WATER,[[u,d],[u,h],[p,h],[p,d]])}}return t}function I8(t){for(let o of[0]){let r=o?Nt+sn*.5:-sn*.5,n=.05,a=tr.w*.5;for(let s of xe.c){for(let i of tr.cols){let c=ka(i)-.01;t.box(r-n,xe.sill,s+i-a,r+n,c,s+i+a,wt.STEEL)}for(let i=xe.sill+tr.rowH;i<xe.spring+.01;i+=tr.rowH)t.box(r-n,i-a,s-xe.hw,r+n,i+a,s+xe.hw,wt.STEEL);for(let[i,c]of[[xe.hw-.03,.06],[tr.ring,a]])for(let l=0;l<24;l++){let v=l/24*Ee,u=(l+1)/24*Ee;t.beam([r,xe.spring+Math.sin(v)*i,s+Math.cos(v)*i],[r,xe.spring+Math.sin(u)*i,s+Math.cos(u)*i],c,wt.STEEL,[1,0,0])}for(let i of[-1,1])t.box(r-n,xe.sill,s+i*(xe.hw-.03)-.03,r+n,xe.spring,s+i*(xe.hw-.03)+.03,wt.STEEL);t.box(r-n,xe.sill,s-xe.hw,r+n,xe.sill+.06,s+xe.hw,wt.STEEL)}}let e=o=>o<Nt/2?ro+Cn*o:ro+Cn*(Nt-o);for(let o=0;o<=12;o++){let r=o*dr.rafter;for(let[n,a]of[[-.3,Nt/2],[Nt/2,Nt+.3]])t.beam([n,e(Math.max(0,Math.min(Nt,n)))-.1,r],[a,e(a)-.1,r],.06,wt.STEEL)}t.beam([Nt/2,pr-.14,-.2],[Nt/2,pr-.14,_e+.2],.12,wt.STEEL);for(let o of[.05,Nt-.05])t.beam([o,ro-.05,0],[o,ro-.05,_e],.1,wt.STEEL);for(let o of ps){t.box(-.05,ro-.13,o-.08,Nt+.05,ro+.13,o+.08,wt.STEEL),t.beam([Nt/2,ro,o],[Nt/2,pr-.2,o],.07,wt.STEEL);for(let r of[-1,1])t.beam([Nt/2+r*Nt/4,ro,o],[Nt/2,pr-.4,o],.055,wt.STEEL),t.beam([Nt/2+r*Nt/4,ro,o],[Nt/2+r*Nt/4,e(Nt/2+r*Nt/4)-.2,o],.045,wt.STEEL),t.beam([Nt/2+r*(Nt/2-.1),ro,o],[Nt/2+r*Nt/4,e(Nt/2+r*Nt/4)-.2,o],.045,wt.STEEL);for(let r of[-1,1])t.box(Nt/2+r*Nt/4-.12,ro-.18,o-.1,Nt/2+r*Nt/4+.12,ro+.18,o+.1,wt.STEEL)}}function q8(t){let e=Ba(311),o=[],r=[[ut.x0+.9,Y0(6.6),.9,11],[ut.x1-.8,Y0(8.4),.85,10],[ut.x0+.8,Y0(10.6),.8,9],[ut.x1-.9,Y0(12.4),.9,11],[ut.x0+1,Y0(13.9),.65,7],[Nt/2+.2,Y0(9.6),.5,4],[ut.x1-.7,Y0(15.9),.6,6]];for(let[a,s,i,c]of r)for(let f=0;f<c;f++)for(let l=0;l<40;l++){let v=e()*2*Ee,u=i*Math.sqrt(e()),p=a+Math.cos(v)*u,d=s+Math.sin(v)*u,h=.15+e()*.17;if(!(p-h<ut.x0+.04||p+h>ut.x1-.04||d-h<ut.z0+.04||d+h>ut.z1-.04)&&!(Math.hypot(p-c0.x,d-c0.z)<.62+h)&&!o.some(g=>Math.hypot(g[0]-p,g[1]-d)<(g[2]+h)*.93)){o.push([p,d,h,e()*2*Ee,e()]);break}}for(let[a,s,i,c,f]of o){Dd.push([a,s,i]),t.float=[a,s,f*7.3+i*13];let l=28,v=4,u=i*1.08,p=[];for(let d=0;d<=v;d++){let h=[];for(let g=0;g<l;g++){let m=g/l*2*Ee,x=d/v,y=m-c,_=.012+.004*(1-x*x)+.006*Math.pow(x,6)*(.5+.5*Math.sin(m*3+f*9));h.push(t.v([a+Math.cos(m)*u*x,_,s+Math.sin(m)*u*x],[0,1,0],wt.PAD,[.5+.5*x*Math.sin(y),.5+.5*x*Math.cos(y)]))}p.push(h)}for(let d=0;d<v;d++)for(let h=0;h<l;h++){let g=p[d][h],m=p[d][(h+1)%l],x=p[d+1][(h+1)%l],y=p[d+1][h];t.idx.push(g,m,x,g,x,y)}}t.float=null;let n=[[ut.x0+.75,Y0(6.9),1],[ut.x1-.65,Y0(8.1),.85],[ut.x1-.95,Y0(12.6),1.1],[ut.x0+.95,Y0(10.3),.8],[ut.x1-.55,Y0(15.6),.9],[ut.x0+1.05,Y0(13.7),.75]];for(let[a,s,i]of n){t.float=[a,s,a*3.7+s*1.3];let c=.17;[[12,1,70],[10,.86,48],[8,.66,26]].forEach(([l,v,u],p)=>{for(let d=0;d<l;d++){let h=2*Ee*d/l+p*.33,g=(90-(90-u)*i)*Ee/180,m=6,x=4,y=[];for(let _=0;_<=m;_++){let M=_/m,b=(.18+.82*Math.sin(Ee*Math.min(1,Math.pow(M,.8)*.75+.1)))*.36*v*c,k=[];for(let E=0;E<=x;E++){let z=E/x*2-1,P=z*b,R=Math.abs(z)*Math.abs(z)*.12*v*c,B=M*v*c,$=B*Math.cos(g),D=B*Math.sin(g)+R,it=a+Math.cos(h)*$-Math.sin(h)*P,St=s+Math.sin(h)*$+Math.cos(h)*P;k.push(t.v([it,.03+D,St],[-Math.cos(h)*Math.sin(g)*.6,.8,-Math.sin(h)*Math.sin(g)*.6],wt.PETAL,[(p===2?.5:0)+.5*(.5+.5*z*.92),.98-M*.96]))}y.push(k)}for(let _=0;_<m;_++)for(let M=0;M<x;M++){let b=y[_][M],k=y[_][M+1],E=y[_+1][M+1],z=y[_+1][M];t.idx.push(b,k,E,b,E,z,b,E,k,b,z,E)}}}),t.lathe(a,s,[[0,.03+.05*c*4],[.025,.03+.045*c*4],[.032,.035],[0,.03]],wt.STAMEN,12)}t.float=null}function D8(t){let e=Ba(907);{t.box(1.25-.48,.86-.06,11.1-1.35,1.25+.48,.86,11.1+1.35,wt.WOOD);for(let i of[-1,1])for(let c of[-1,1])t.box(1.25+i*(.48-.08)-.04,0,11.1+c*(1.35-.1)-.04,1.25+i*(.48-.08)+.04,.86-.06,11.1+c*(1.35-.1)+.04,wt.WOOD);t.box(1.25-.48+.06,.16,11.1-1.35+.1,1.25+.48-.06,.19,11.1+1.35-.1,wt.WOOD);for(let i=0;i<11;i++){let c=1.25+(e()-.5)*.6,f=11.1+(e()-.5)*2.2,l=.035+e()*.04,v=.09+e()*.14;if(t.lathe(c,f,[[0,.86],[l,.86],[l*1.02,.86+v*.9],[l*.9,.86+v],[0,.86+v]],i%3?wt.JAR:wt.POT,14),i%3===0)for(let u=0;u<7;u++){let p=e()*2*Ee,d=.28+e()*.12,h=.12+e()*.2;t.beam([c,.86+.03,f],[c+Math.cos(p)*h*d,.86+.03+d,f+Math.sin(p)*h*d],.0055,wt.BRUSH)}}t.box(1.25-.3,.86,11.1+.7,1.25+.15,.86+.02,11.1+1.15,wt.WOOD)}for(let o=0;o<5;o++){let r=.55+e()*.6,n=.75+e()*.8,a=19.3+o*.16,s=.25+o*.07,i=.17,c=[s+n*Math.sin(i)*0,n,a];t.quad([s+.18,0,a-r/2],[s+.18,0,a+r/2],[s+.18-n*Math.sin(i),n*Math.cos(i),a+r/2],[s+.18-n*Math.sin(i),n*Math.cos(i),a-r/2],[Math.cos(i),Math.sin(i),0],o%2?wt.WOOD:wt.GESSO,[[0,0],[1,0],[1,1],[0,1]])}for(let[o,r,n]of Zg){t.beam([o,r+.42,_e],[o,r+.42,n-.02],.016,wt.STEEL),t.beam([o,r+.42,n],[o,r+.26,n],.01,wt.STEEL);for(let[a,s]of[[-1,-1],[1,-1],[1,1],[-1,1]])t.beam([o+a*.085,r-.2,n+s*.085],[o+a*.085,r+.16,n+s*.085],.009,wt.STEEL);t.box(o-.1,r-.24,n-.1,o+.1,r-.2,n+.1,wt.STEEL),t.lathe(o,n,[[.13,r+.16],[.05,r+.27],[0,r+.29]],wt.STEEL,4),t.lathe(o,n,[[0,r-.2],[.022,r-.19],[.022,r-.06],[0,r-.055]],wt.GESSO,10),t.lathe(o,n,[[0,r-.055],[.014,r-.035],[0,r+.02]],wt.FLAME,8)}for(let[o,r,n,a]of Jg){let s=r+a,i=.017;t.beam([o,s+.02,n],[o,Yg(o)-.05,n],.0018,wt.STEEL),t.lathe(o,n,[[0,r],[i*.8,r+.004],[i,r+.02],[i,s-.02],[i*1.12,s-.008],[i*.9,s],[0,s-.004]],wt.GESSO,10),t.beam([o,s-.004,n],[o,s+.014,n],.0016,wt.STEEL),t.lathe(o,n,[[0,s+.008],[.011,s+.026],[.008,s+.05],[0,s+.085]],wt.CFLAME,8)}}var F8=[[4.2,4.6,7.33],[11.8,4.6,7.33],[4.2,4.6,16.5],[11.8,4.6,16.5],[4.2,4.6,24.2],[11.8,4.6,24.2]],Zg=[-1,1].map(t=>[Nt/2+t*(1.95/2+.62),2.95,_e-.34]),Qg=[[8,3.4,5.3,7],[5,7.4,4.8,8],[10.9,9.6,5,8],[6.2,12.2,4.6,7],[3.4,17.6,4.8,7],[12.6,18.8,4.8,7],[8.6,24,5,8],[3,23.8,4.6,6]],Jg=(()=>{let t=[],e=911,o=()=>(e=e*16807%2147483647,(e-1)/2147483646);return Qg.forEach(([r,n,a,s],i)=>{for(let c=0,f=0;c<s&&f<400;f++){let l=o()*2*Ee,v=.25+1.25*Math.sqrt(o()),u=r+Math.cos(l)*v,p=n+Math.sin(l)*v,d=.24+.16*o(),h=a+(o()-.5)*2.4;Math.hypot(u-Te.cx,p-Te.cz)<3.4&&h<Te.top+.5||u<.8||u>Nt-.8||p<2.2||p>_e-.9||t.some(m=>Math.hypot(m[0]-u,m[2]-p)<.22)||(t.push([u,h,p,d,i]),c++)}}),t})(),G8=Qg.map((t,e)=>{let o=Jg.filter(n=>n[4]===e),r=[0,0,0];for(let n of o)r[0]+=n[0],r[1]+=n[1]+n[3]+.05,r[2]+=n[2];return[r[0]/o.length,r[1]/o.length,r[2]/o.length,o.length]}),qA=[[ut.x0-1,ut.z0-1,1],[ut.x1+1,ut.z0-1,.95],[ut.x0-1,ut.z1+1,1.15],[ut.x1+1,ut.z1+1,1.1],[.9,1.3,1.25],[Nt-.9,_e-1.2,1.3]],jg=[[0,0,.16,.5],[.16,0,.34,.4],[.35,0,.5,.36],[.5,0,.66,.38],[.68,0,.84,.42],[0,.6,.19,1],[.2,.57,.36,1],[.41,.6,.58,1]];function H8(){let t={pos:[],nrm:[],uv:[],shade:[],flower:[],idx:[]},e=Ba(1213),o=(r,n,a,s,i)=>{let c=jg[Math.floor(e()*jg.length)],f=(c[2]-c[0])/(c[3]-c[1]),l=s*f*1,v=5,u=t.pos.length/3,p=.6+e()*.4;for(let d=0;d<=v;d++){let h=d/v,g=i*h*h*s,m=[r[0]+n[0]*h*s,r[1]+n[1]*h*s-g,r[2]+n[2]*h*s];for(let x of[-.5,.5]){t.pos.push(m[0]+a[0]*x*l+se[0],m[1]+a[1]*x*l-Math.abs(x)*.08*l+se[1],m[2]+a[2]*x*l+se[2]);let y=[n[1]*a[2]-n[2]*a[1],n[2]*a[0]-n[0]*a[2],n[0]*a[1]-n[1]*a[0]],_=Math.hypot(...y)||1;t.nrm.push(y[0]/_,Math.abs(y[1]/_)+.2,y[2]/_),t.uv.push(x<0?c[0]:c[2],c[3]-(c[3]-c[1])*h),t.shade.push(p),t.flower.push(0)}}for(let d=0;d<v;d++){let h=u+d*2;t.idx.push(h,h+1,h+3,h,h+3,h+2)}};R8(t,o,e);for(let[r,n,a]of[[ut.x0-.3,ut.z1+.3,-1],[ut.x1+.3,ut.z0-.3,1],[ut.x0-.3,ut.z0-.2,-1]])for(let s=0;s<26;s++){let i=e()*2*Ee,c=r+(e()-.3)*.5*-a,f=n+(e()-.5)*.8,l=ut.top+.01-Math.max(0,Math.abs(c-r)-.1)*.6*e();o([c,Math.max(.05,l),f],[Math.cos(i),-.15,Math.sin(i)],[-Math.sin(i),0,Math.cos(i)],.08+e()*.05,.12)}return t}function U8(){let t=qd();for(let o of[0]){let r=o?Nt+sn*.5+.01:-sn*.5-.01,n=o?[-1,0,0]:[1,0,0];for(let a of xe.c)for(let i=a-xe.hw;i<a+xe.hw-1e-6;i+=.05){let c=i,f=Math.min(a+xe.hw,i+.05),l=ka(c-a+1e-4)||xe.spring,v=ka(f-a-1e-4)||xe.spring;o?t.quad([r,xe.sill,f],[r,xe.sill,c],[r,l,c],[r,v,f],n,0,[[f,xe.sill],[c,xe.sill],[c,l],[f,v]]):t.quad([r,xe.sill,c],[r,xe.sill,f],[r,v,f],[r,l,c],n,0,[[c,xe.sill],[f,xe.sill],[f,v],[c,l]])}}let e=Math.hypot(Cn,1);return t.quad([0,ro+.002,_e],[0,ro+.002,0],[Nt/2,pr+.002,0],[Nt/2,pr+.002,_e],[Cn/e,-1/e,0].map(o=>-o).map((o,r)=>r===1?-Math.abs(o):o),1,[[0,_e],[0,0],[Nt/2,0],[Nt/2,_e]]),t.quad([Nt,ro+.002,0],[Nt,ro+.002,_e],[Nt/2,pr+.002,_e],[Nt/2,pr+.002,0],[-Cn/e,-1/e,0],1,[[Nt,0],[Nt,_e],[Nt/2,_e],[Nt/2,0]]),t}var ii={ivy:[[.00293,.0127,.12207,.23633],[.13037,.00586,.24463,.24414],[.25293,.0166,.37207,.23242],[.37793,.02344,.49707,.22656],[.50293,.01367,.62207,.23535],[.62793,.03418,.74707,.21582]],blade:[[.01855,.50391,.02832,.99512],[.05762,.50391,.08301,.99512],[.10889,.50391,.12549,.99609],[.1582,.50391,.16943,.99512],[.19922,.50391,.22266,.99512],[.25,.50391,.26562,.99609],[.29932,.50391,.31006,.99609],[.33008,.50781,.37305,.99121],[.38721,.50391,.40918,.99609]],daisy:[[.75684,.00586,.86768,.24414],[.87793,.00781,.99707,.24121],[.00342,.25586,.12158,.49414],[.12842,.25586,.24609,.49414],[.25293,.25684,.37207,.49219],[.37891,.25586,.49609,.49316]],weed:[[.50293,.25781,.62207,.49121],[.62793,.26562,.74707,.48438],[.75293,.26855,.87207,.48047],[.88281,.25586,.99219,.49414],[.44043,.50977,.55957,.73926],[.5752,.50586,.67432,.74414],[.69043,.50586,.80908,.74414],[.81738,.50586,.93213,.74414],[.44043,.75781,.55957,.99219]],rleaf:[[.69824,.75586,.78076,.99414],[.79834,.75586,.88867,.99414],[.9043,.75586,.99072,.99414],[.94043,.54395,.99707,.70605]],petal:[[.56445,.75391,.68555,.99609]]},B8=[[.248,.8613],[.3438,.9785],[.4492,.584],[.5957,.3281],[.5371,.918],[.1699,.4062],[.752,.6699],[.5879,.2207],[.3789,.8477],[.2637,.2266],[.6758,.7422],[.6016,.0273],[.5762,.502],[.0469,.5078],[.1406,.7773],[.791,.7539],[.6113,.5605],[.9121,.6777],[.6523,.1523],[.2871,.3301],[.2109,.832],[.4297,.625],[.168,.4434],[.1348,.1211],[.9668,.0859],[.3164,.873],[.1777,.7539],[.0215,.3281],[.6719,.334],[.9844,.6172],[.6523,.3828],[.1152,.2988],[.0176,.1328],[.207,.0996],[.6152,.9844],[.0234,.0117],[.0723,.6328],[.2695,.7695],[.2539,.9395],[.502,.9941],[.1504,.9961],[.957,.8145],[.5117,.123],[.4062,.4941],[.0547,.1387],[.4375,.2949],[.373,.2109],[.1699,.3086],[.5176,.6445],[.4863,.3027],[.877,.6602],[.5977,.8887],[.5488,.0098],[.5156,.5332],[.6973,.1094],[.4707,.2051],[.498,.7559],[.0312,.7363],[.2051,.4629],[.541,.8379],[.8398,.8965],[.1426,.1855],[.3711,.1172],[.1328,.9082],[.75,.9629],[.2812,.0449],[.6367,.4277],[.2051,.9824],[.7012,.9766],[.0059,.9102],[.7168,.3379],[.1602,.584],[.8594,.1973],[.3516,.7227],[.0918,.9727],[.416,.3359],[.6465,.9355],[.3418,.627],[.7578,.332],[.0293,.6973],[.9004,.957],[.7012,.7617],[.1855,.8652],[.6914,.8184],[.5684,.543],[.6523,.8672],[.5742,.7441],[.2949,.4121],[.2363,.6387],[.25,.1953],[.0352,.5918],[.248,.293],[.0762,.4863],[.9785,.4922],[.9004,.7305],[.9277,.5527],[.9395,.125],[.3691,.8789],[.4805,.0469],[.5703,.4551],[.4199,.2246],[.0371,.625],[.3281,.4941],[.1152,.6094],[.2793,.834],[.5039,.166],[.4609,.5312],[.0645,.7715],[.6035,.7227],[.4746,.6348],[.6777,.5684],[.2773,.4512],[.8008,.1191],[.3945,.9297],[.2109,.6855],[.5977,.1875],[.5195,.0742],[.1309,.4609],[.9531,.4277],[.4785,.9648],[.543,.3262],[.9121,.041],[.5059,.7188],[.0098,.2969],[.8438,.3789],[.1504,.2637],[.7969,.873],[.8613,.9863],[.834,.7461],[.377,.6211],[.791,.7227],[.6758,.8457],[.7832,.8066],[.834,.5293],[.1973,.6562],[.8281,.9609],[.5332,.7773],[.9062,.8008],[.3262,.0234],[.8984,.7676]],Ec={IVY:0,BLADE:1,DAISY:2,WEED:3,ROSE:4,RLEAF:5,GRAPE:6},Wg=[[[.006,.013,-.051],[-.04,-.022,.004],[-.029,.026,-.015]],[[-.094,.019,.023],[.014,-.004,-.003],[.06,.026,-.027]],[[-.034,-.031,.002],[-.019,.07,-.028],[-.07,.018,-.039]],[[.102,-.049,-.011],[.057,-.046,.157],[.042,-.031,.089]],[[.026,.006,.019],[-.038,-.037,-.073],[-.042,-.019,.021]],[[.088,-.048,.008],[.143,-.012,.005],[-.044,.033,.028]],[[.039,-.084,-.04],[-.054,-.031,.031],[.076,.028,.014]],[[.082,-.037,-.05],[-.078,.011,.004],[-.076,-.047,.042]]],j8=2;function W8(){let t={pos:[],nrm:[],uv:[],info:[],idx:[]},e=[],o={pos:[],nrm:[],uv:[],info:[],idx:[]},r=t,n=Ba(2718),a=et=>{let j=Math.hypot(et[0],et[1],et[2])||1;return[et[0]/j,et[1]/j,et[2]/j]},s=(et,j)=>[et[1]*j[2]-et[2]*j[1],et[2]*j[0]-et[0]*j[2],et[0]*j[1]-et[1]*j[0]],i=(et,j)=>et[0]*j[0]+et[1]*j[1]+et[2]*j[2],c=(et,j,lt)=>[et[0]+j[0]*lt,et[1]+j[1]*lt,et[2]+j[2]*lt],f=et=>et[Math.floor(n()*et.length)],l=et=>(et[2]-et[0])*j8/(et[3]-et[1]),v=(et,j,lt,xt,Kt,te)=>(r.pos.push(et[0]+se[0],et[1]+se[1],et[2]+se[2]),r.nrm.push(j[0],j[1],j[2]),r.uv.push(lt[0],lt[1]),r.info.push(xt,Kt,te),r.pos.length/3-1),u=(et,j,lt,xt,Kt,te,Zt,qt,ot)=>{let Rt=ot?2:1,Se=r.pos.length/3;for(let Qt=0;Qt<=Rt;Qt++){let Ft=Qt/Rt,Ue=ot?c(c(et,lt,Ft),qt,ot*Ft*Ft):c(et,lt,Ft),S=xt[3]+(xt[1]-xt[3])*Ft;v(c(Ue,j,-1),Zt,[xt[0],S],Kt,te,Ft),v(c(Ue,j,1),Zt,[xt[2],S],Kt,te,Ft)}for(let Qt=0;Qt<Rt;Qt++){let Ft=Se+Qt*2;r.idx.push(Ft,Ft+1,Ft+3,Ft,Ft+3,Ft+2)}},p=null,d=[...ii.ivy,...ii.ivy,...ii.weed.slice(0,7)],h=[0,1,0],g=(et,j,lt,xt,Kt)=>{let te=f(d),Zt=s(lt,j),qt=a(c(c(j,lt,n()*.9-.25),Zt,(n()-.5)*.8)),ot=a(c(lt,qt,-i(lt,qt))),Rt=(n()-.5)*2,Se=Math.cos(Rt),Qt=Math.sin(Rt);ot=a(c(c([0,0,0],ot,Se),s(qt,ot),Qt));let Ft=s(ot,qt),Ue=xt*l(te);u(c(et,ot,-xt*.18),c([0,0,0],Ft,Ue/2),c([0,0,0],ot,xt),te,Kt,Ec.IVY,qt)},m=(et,j,lt,xt,Kt)=>{let te=Math.floor(n()*Wg.length),Zt=Wg[te],qt=s(lt,j),ot=a(c(c(j,lt,n()*.8-.3),qt,(n()-.5)*.9)),Rt=a(c(lt,ot,-i(lt,ot))),Se=n()*2*Ee,Qt=Math.cos(Se),Ft=Math.sin(Se);Rt=a(c(c([0,0,0],Rt,Qt),s(ot,Rt),Ft));let Ue=s(Rt,ot),S=te%4/4,De=Math.floor(te/4)/2,Ve=1.4,uo=[],Oo=r.pos.length/3;for(let wo=0;wo<3;wo++)for(let Fo=0;Fo<3;Fo++){let qo=Fo/2-.5,x0=.5-wo/2;uo.push(c(c(c(et,Ue,qo*xt),Rt,x0*xt),ot,Zt[wo][Fo]*xt*Ve))}for(let wo=0;wo<3;wo++)for(let Fo=0;Fo<3;Fo++){let qo=Math.max(Fo-1,0),x0=Math.min(Fo+1,2),Ln=Math.max(wo-1,0),Nn=Math.min(wo+1,2),tt=c(uo[wo*3+x0],uo[wo*3+qo],-1),Vt=c(uo[Ln*3+Fo],uo[Nn*3+Fo],-1),Xt=a(s(tt,Vt));i(Xt,ot)<0&&(Xt=Xt.map(Bt=>-Bt)),v(uo[wo*3+Fo],Xt,[S+Fo/2*.25,De+wo/2*.5],Kt,Ec.GRAPE,1)}for(let wo=0;wo<2;wo++)for(let Fo=0;Fo<2;Fo++){let qo=Oo+wo*3+Fo;r.idx.push(qo,qo+1,qo+4,qo,qo+4,qo+3)}},x=(et,j,lt,xt,Kt,te,Zt,qt,ot,Rt=.3)=>{let Se=Math.max(3,Math.round(Kt*2.4*Zt)),Qt=[];for(let Ue=0;Ue<Se;Ue++){let S=xt+(n()-.5)*Kt,De=Math.min(1,Math.abs(S-xt)/(Kt/2+.001)),Ve=te*(.6+.4*n())*(1-.5*De*De);Qt.push([S,qt||n()*.15,(n()-.5)*.5,Ve,0])}let Ft=0;for(;Qt.length&&Ft++<4e3;){let[Ue,S,De,Ve,uo]=Qt.pop(),Oo=S;for(let wo=0;wo<260&&(De+=(n()-.5)*.45,De=Math.max(-1,Math.min(1,De)),Ue+=Math.sin(De)*.09,S+=(qt?-1:1)*Math.cos(De)*.09,!(qt?Oo-S>Ve||S<(ot?ot(Ue):.05):S-Oo>Ve));wo++){let qo=qt?(Oo-S)/Ve:(S-Oo)/Ve,x0=n()<.9*Zt?n()<.5?2:1:0;for(let Ln=0;Ln<x0;Ln++){let Nn=.015+n()*.11,tt=Ue+(n()-.5)*.2,Vt=S+(n()-.5)*.12;if(p&&p(tt,Vt))continue;let Xt=c(c(c(et,j,tt),h,Vt),lt,Nn),Bt=(.14+.1*n())*(qt?1.05-.3*qo:1.2-.4*qo),Le=.45+.55*(Nn/.125)*(.6+.4*n());n()<Rt?n()<.55&&m(Xt,lt,h,Bt*1.7,Le):g(Xt,lt,h,Bt,Le)}uo<2&&n()<.035&&Qt.push([Ue,S,De+(n()<.5?-.7:.7),Ve*(.35+.4*n())*(1-qo*.5),uo+1])}}},y=(et,j,lt,xt,Kt)=>{let te=f(ii.rleaf),Zt=a(c(c(j,lt,n()*.8-.1),s(lt,j),(n()-.5)*.9)),qt=a(c(lt,Zt,-i(lt,Zt))),ot=(n()-.5)*3,Rt=Math.cos(ot),Se=Math.sin(ot);qt=a(c(c([0,0,0],qt,Rt),s(Zt,qt),Se));let Qt=s(qt,Zt);u(c(et,qt,-xt*.1),c([0,0,0],Qt,xt*l(te)/2),c([0,0,0],qt,xt),te,Kt,Ec.RLEAF,Zt)},_=(et,j,lt,xt,Kt,te,Zt)=>{let qt=Math.max(3,Math.round(Kt*2.2)),ot=(Ue,S,De)=>c(c(c(et,j,Ue),h,S),lt,De),Rt=y,Se=null,Qt=(Ue,...S)=>{p&&p(i(c(Ue,et,-1),j),Ue[1])||Rt(Ue,...S)},Ft=(Ue,S,De)=>{p&&p(i(c(Ue,et,-1),j),Ue[1])||e.push({at:Ue,f:S,size:De,spin:n()*2*Ee})};for(let Ue=0;Ue<qt;Ue++){let S=xt+(n()-.5)*Kt*.35,De=.05,Ve=(n()-.5)*1.4,uo=te*(.6+.4*n()),Oo=(S-xt)/(Kt/2+.001);for(let wo=0;wo<200&&De<uo&&(Ve+=(n()-.5)*.3+Oo*.012+(De>uo*.6?Math.sign(Ve||1)*.02:0),Ve=Math.max(-1.25,Math.min(1.25,Ve)),S+=Math.sin(Ve)*.08,De+=Math.cos(Ve)*.08,!(Math.abs(S-xt)>Kt*.6));wo++){let Fo=De/uo;for(let qo=0;qo<(n()<.8?2:1);qo++){let x0=.02+n()*.12;Qt(ot(S+(n()-.5)*.16,De+(n()-.5)*.12,x0),lt,h,.07+n()*.05,.5+.5*n())}if(Fo>.2&&n()<Zt*(.018+.038*Fo)){let qo=1+Math.floor(n()*3);for(let x0=0;x0<qo;x0++){let Ln=a(c(c(lt,h,(n()-.4)*.8),s(h,lt),(n()-.5)*.9));Ft(ot(S+(n()-.5)*.22,De+(n()-.5)*.2,.16+n()*.1),Ln,.19+n()*.09)}for(let x0=0;x0<3;x0++)Qt(ot(S+(n()-.5)*.25,De+(n()-.5)*.2,.05+n()*.08),lt,h,.07+n()*.04,.6+.4*n())}}}},M=(et,...j)=>_(et.o,et.u,et.n,...j);{let et=[[.28,.47,.66,.84,.97],[.5,.78,.96]];for(let j=0;j<Fd.length;j++){let lt=Kg(j);for(let xt=3;xt<lt.length;xt++){let[Kt,te,Zt,qt,ot]=lt[xt],Rt=[Math.sin(qt),0,Math.cos(qt)],Se=[Kt+Rt[0]*.025,te,Zt+Rt[2]*.025];if(xt%2===0)for(let Qt=0;Qt<2;Qt++)y(c(Se,[n()-.5,(n()-.5)*.6,n()-.5],.05),Rt,h,.045+.03*n()*(1-ot*.3),.35+.4*n())}for(let xt of et[j]){let Kt=Math.round(xt*(lt.length-1)),[te,Zt,qt,ot]=lt[Kt],Rt=[Math.sin(ot),0,Math.cos(ot)],Se=a([Rt[0]*.8,.35,Rt[2]*.8+.45]);e.push({at:[te+Rt[0]*.05,Zt+.02,qt+Rt[2]*.05],f:Se,size:.12+.035*n(),spin:n()*2*Ee});for(let Qt=0;Qt<2;Qt++)y(c([te,Zt,qt],Rt,.03+.02*n()),Rt,h,.045+.02*n(),.6+.4*n())}}}let b={o:[0,0,0],u:[1,0,0],n:[0,0,1]},k={o:[0,0,_e],u:[1,0,0],n:[0,0,-1]},E={o:[Nt,0,0],u:[0,0,1],n:[-1,0,0]},z=(et,...j)=>x(et.o,et.u,et.n,...j);z(b,4.1,3,7,1.5),z(b,12,3.4,5.8,1.3),z(b,1,2.2,4.2,1.2),z(b,15,2,5,1.2),M(b,3.6,3.2,5.6,1.1),M(b,12.6,3,4.8,1),M(b,.9,1.6,3.2,.8);{let et=no.face-.26,j={o:[0,0,_e-et+.03],u:[1,0,0],n:[0,0,1]},lt=5.35+1.02;x(j.o,j.u,j.n,Nt-no.x1+1,1.9,2.2,1.2,lt,()=>3.2),x(j.o,j.u,j.n,Nt-no.x0-.5,.8,1,.8,lt,()=>4.6);for(let xt=0;xt<70;xt++){let Kt=no.x0+.2+Math.pow(n(),1.6)*2.4,te=(no.x1-no.x0)/2+.2,Zt=lt+.62*(1-Math.abs(Kt-no.cx)/te)+.02;g([Nt-Kt,Zt+n()*.05,.1+n()*(_e-et-.15)],a([0,1,.3]),[0,0,1],.08+n()*.05,.7+.3*n())}}p=(et,j)=>Math.abs(et-Nt/2)<E0.w/2+E0.frame+.12&&j<E0.top+E0.frame+.12,z(k,5.3,3.2,6.2,1.4),z(k,11,3.6,7,1.4),z(k,1.2,2.4,4.4,1.2),z(k,14.9,2.2,5.4,1.2),x(k.o,k.u,k.n,Nt/2+.3,4,1.6,1.3,E0.top+1.7,et=>Math.abs(et-Nt/2)<E0.w/2+.3?E0.top+E0.frame+.15:2.4),M(k,5.6,3.4,5.2,1.2),M(k,10.6,3.6,5.8,1.2),M(k,14.6,2,4,.9),p=null,z(E,2.6,4,7,1.4),z(E,9.2,4.6,5.4,1.2),z(E,15.6,5,7.4,1.5),z(E,20.9,2,4,1.2),z(E,23.8,4.2,6.6,1.4),z(E,26.6,1.8,4.4,1.2),M(E,3.2,3.6,5.4,1.1),M(E,8.6,3,4.2,1),M(E,13.4,3.2,5.8,1.1),M(E,18.6,3.4,5,1.2),M(E,23.2,3.6,5.6,1.2),M(E,26.4,1.6,3.6,.9),p=(et,j)=>xe.c.some(lt=>{let xt=ka(et-lt);return xt!==null&&Math.abs(et-lt)<xe.hw+.06&&j>xe.sill-.05&&j<xt+.06});for(let[et,j]of Ua.filter(lt=>lt[0]==="wall")){let lt=j<1||j>_e-1;x([0,0,0],[0,0,1],[1,0,0],j,lt?1:1.7,ro-.6,lt?.9:1.1,0,null,.85)}for(let et of xe.c)x([0,0,0],[0,0,1],[1,0,0],et,xe.hw*2.3,1.6,.8,ro-.6,j=>ka(j-et)!==null?ka(j-et)+.15:ro-2.2,.85);p=null,r=o;let P=(et,j,lt,xt,Kt,te,Zt)=>{let qt=f(ii.blade),ot=[Math.cos(te),0,Math.sin(te)],Rt=Math.max(xt*.16,.012);u([et,j,lt],[-ot[2]*Rt/2,0,ot[0]*Rt/2],[ot[0]*Kt*xt*.4,xt,ot[2]*Kt*xt*.4],qt,Zt,Ec.BLADE,a([ot[0]*.5,1,ot[2]*.5]),ot,xt>.12?xt*Kt*.6:0)},R=(et,j,lt,xt,Kt)=>{for(let te=0;te<Kt;te++){let Zt=n()*2*Ee,qt=n()*.035;P(et+Math.cos(Zt)*qt,j,lt+Math.sin(Zt)*qt,xt*(.45+.55*n()),.25+.75*n(),Zt+(n()-.5),.6+.4*n())}},B=(et,j,lt,xt)=>{let Kt=4+Math.floor(n()*3),te=n()*2*Ee;for(let Zt=0;Zt<Kt;Zt++){let qt=f(ii.weed),ot=te+Zt*2*Ee/Kt+(n()-.5)*.4,Rt=[Math.cos(ot),0,Math.sin(ot)],Se=.35+n()*.45,Qt=xt*(.7+.5*n()),Ft=[Rt[0]*Math.cos(Se)*Qt,Math.sin(Se)*Qt,Rt[2]*Math.cos(Se)*Qt],Ue=Qt*l(qt);u([et,j+.004,lt],[-Rt[2]*Ue/2,0,Rt[0]*Ue/2],Ft,qt,.7+.3*n(),Ec.WEED,a([-Rt[0]*Math.sin(Se),Math.cos(Se),-Rt[2]*Math.sin(Se)]),[0,-1,0],Qt*.15)}},$=(et,j,lt)=>{let xt=.05+n()*.12;P(et,j,lt,xt+.02,.15,n()*2*Ee,.8);let Kt=f(ii.daisy),te=.03+n()*.025,Zt=(n()-.5)*.6,qt=n()*2*Ee,ot=[Math.cos(qt)*te*2,Math.sin(Zt)*te,Math.sin(qt)*te*2],Rt=[-Math.sin(qt)*te,0,Math.cos(qt)*te];u([et-Math.cos(qt)*te,j+xt,lt-Math.sin(qt)*te],Rt,ot,Kt,1,Ec.DAISY,[0,1,0]),B(et,j,lt,.04)},D=(et,j,lt,xt)=>{let Kt=n();Kt<.8?R(et,j,lt,xt?.2+.3*n():.08+.1*n(),xt?5+Math.floor(n()*6):3+Math.floor(n()*3)):Kt<.93?B(et,j,lt,xt?.09+.06*n():.06+.03*n()):$(et,j,lt)},it=ut.x0-ut.curb-.08,St=ut.x1+ut.curb+.08,yt=ut.z0-ut.curb-.08,mt=ut.z1+ut.curb+.08,zt=Nt-no.x1-.16,It=Nt-no.x0+.16,re=_e-no.face+.36,Ae=(et,j)=>Math.hypot(et-Te.cx,j-Te.cz),lo=(et,j)=>Math.abs(et-u0.cx)<u0.hx+.16&&Math.abs(j-u0.cz+.08)<u0.hz+.4||Ae(et,j)>Te.ri-.1&&Ae(et,j)<Te.ro+1.6||et>it&&et<St&&j>yt&&j<mt||et>zt&&et<It&&j<re||Math.abs(et-Nt/2)<1.15&&j>_e-.5||et<.06||et>Nt-.06||j<.06||j>_e-.06,ge=(et,j)=>{let lt=Math.min(et,Nt-et,j,_e-j),xt=Math.max(it-et,et-St,yt-j,j-mt),Kt=Math.max(zt-et,et-It,j-re);return Math.min(lt,Math.max(xt,0)+(xt<0?9:0),Math.max(Kt,0)+(Kt<0?9:0))},$e=(et,j)=>.5+.5*Math.sin(et*.9+1.3)*Math.sin(j*.7-.4)+.25*Math.sin(et*2.3+j*1.7);for(let et=0;et*2<Nt;et++)for(let j=0;j*2<_e;j++)for(let[lt,xt]of B8){let Kt=(et+lt)*2,te=(j+xt)*2;if(lo(Kt,te))continue;let Zt=ge(Kt,te),qt=(Zt<1.2?.75-.4*Zt:.2)*Math.max(.2,$e(Kt,te));n()<qt&&D(Kt,.002,te,Zt<.8&&n()<.85)}let He=(et,j,lt)=>{let xt=Math.hypot(j[0]-et[0],j[1]-et[1]);for(let Kt=0;Kt<xt;Kt+=.08){if(n()>.8)continue;let te=Kt/xt,Zt=.04+Math.pow(n(),2)*.3,qt=et[0]+(j[0]-et[0])*te+lt[0]*Zt,ot=et[1]+(j[1]-et[1])*te+lt[1]*Zt;lo(qt,ot)||D(qt,.002,ot,!0)}};He([0,0],[0,_e],[1,0]),He([Nt,0],[Nt,_e],[-1,0]),He([0,0],[Nt,0],[0,1]),He([0,_e],[Nt,_e],[0,-1]),He([it,yt],[St,yt],[0,-1]),He([it,yt],[it,mt],[-1,0]),He([St,yt],[St,mt],[1,0]),He([zt,re],[It,re],[0,1]),He([zt,0],[zt,re],[-1,0]),He([It,0],[It,re],[1,0]);for(let et=0;et<60;et++){let j=Math.floor(n()*3),lt,xt;j<2?(lt=j?ut.x1+.08+n()*.38:ut.x0-.08-n()*.38,xt=ut.z0+n()*(ut.z1-ut.z0)):(xt=ut.z1+.08+n()*.38,lt=ut.x0+n()*(ut.x1-ut.x0)),R(lt,ut.top,xt,.04+.06*n(),2+Math.floor(n()*3))}for(let et=0;et<70;et++){let j=n()*2-1,lt=Math.floor(n()*4),xt=u0.hx+.16+n()*n()*.25,Kt=u0.hz+.3+n()*n()*.25,te,Zt;lt<2?(te=u0.cx+(lt?xt:-xt),Zt=u0.cz-.08+j*Kt):(Zt=u0.cz-.08+(lt===2?Kt:-Kt),te=u0.cx+j*xt),R(te,0,Zt,.05+.09*n(),2+Math.floor(n()*4))}for(let et=0;et<6;et++)R(u0.cx+(n()*2-1)*(u0.hx+.1),.09,u0.cz-.08+(n()<.5?-1:1)*(u0.hz+.08+n()*.12),.03+.04*n(),2);return{walls:t,ground:o,roses:e}}var V8=`
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
`,DA=F8.map(t=>Vh([t[0],t[1]-.22,t[2]])),zr=`
	${V8}
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
	uniform float candleT;
	// a candle's flame: a steady breath, quick tremors, and now and then a
	// gutter when a draught finds it
	float candleFlicker(float s) {
		float t = candleT;
		float f = 0.78 + 0.1 * sin(t * 7.3 + s) * sin(t * 3.1 + s * 1.9) + 0.06 * sin(t * 17.9 + s * 3.1) + 0.05 * sin(t * 29.3 + s * 5.7);
		float gut = smoothstep(0.92, 1.0, sin(t * 0.83 + s * 2.3) * sin(t * 1.37 + s));
		return f * (1.0 - 0.45 * gut);
	}
	// what stands between a point and a candle: the rotunda's ring (but for
	// its arches) and its cloth
	vec3 candleShade(vec3 p, vec3 lp) {
		vec3 D = lp - p;
		vec2 c = p.xz - vec2(${I(Te.cx)}, ${I(Te.cz)});
		float a = dot(D.xz, D.xz);
		if (a < 1e-6) return vec3(1.0);
		float t1, t2;
		vec3 k = vec3(1.0);
		if (rotHit(c, D.xz, a, ${I((Te.ri+Te.ro)/2)}, t1, t2) > 0.0) {
			if (t1 > 0.002 && t1 < 0.998) { vec3 h = p + D * t1; if (h.y < ${I(Te.top-.2)} && rotOpen(h, ${I((Te.ri+Te.ro)/2)}) < 0.5) return vec3(0.0); }
			if (t2 > 0.002 && t2 < 0.998) { vec3 h = p + D * t2; if (h.y < ${I(Te.top-.2)} && rotOpen(h, ${I((Te.ri+Te.ro)/2)}) < 0.5) return vec3(0.0); }
		}
		if (rotHit(c, D.xz, a, ${I(Te.cloth+.15)}, t1, t2) > 0.0) {
			for (int i = 0; i < 2; i++) {
				float t = i == 0 ? t1 : t2;
				if (t > 0.002 && t < 0.998) {
					vec3 h = p + D * t;
					float an = atan(h.x - ${I(Te.cx)}, h.z - ${I(Te.cz)});
					bool gap = ${I(Te.cloth+.15)} * abs(sin(an)) < ${I(Te.gap)};
					if (h.y < ${I(Te.top)} && !gap) k *= vec3(0.75, 0.22, 0.2);
				}
			}
		}
		return k;
	}
	vec3 studioLight(vec3 pw, vec3 N, vec3 V, float gloss, out vec3 spec, out float sunVis) {
		vec3 p = pw - vec3(${I(se[0])}, ${I(se[1])}, ${I(se[2])});
		float vis = studioSun(pw + N * 0.03);
		sunVis = vis;
		vec3 sunC = mix(vec3(1.0, 0.84, 0.62) * 4.6, vec3(0.50, 0.64, 1.0) * 1.6, night);
		float lam = max(dot(N, STUDIO_SUN), 0.0);
		vec3 col = sunC * vis * lam;
		vec3 Hh = normalize(STUDIO_SUN + V);
		spec = sunC * vis * pow(max(dot(N, Hh), 0.0), mix(16.0, 400.0, gloss)) * mix(0.04, 1.0, gloss) * (lam > 0.0 ? 1.0 : 0.0);
		// by day a shaft from the glass roof finds the nymph's face
		{
			const vec3 FL = vec3(0.62, 0.62, 0.48);
			vec3 hc = p - vec3(${I(Pd[0])}, ${I(Pd[1])}, ${I(Pd[2])});
			vec3 Ls = normalize(FL);
			float off = length(hc - Ls * dot(hc, Ls));
			float beam = (1.0 - smoothstep(0.22, 0.5, off)) * (1.0 - night) * step(-0.6, dot(hc, Ls));
			if (beam > 0.0) {
				float fl = max(dot(N, Ls), 0.0);
				col += sunC * 0.55 * beam * fl;
				spec += sunC * 0.4 * beam * pow(max(dot(N, normalize(Ls + V)), 0.0), mix(16.0, 400.0, gloss)) * gloss * (fl > 0.0 ? 1.0 : 0.0);
			}
		}

		// skylight: the roof is glass, the walls are full of windows
		float upF = 0.5 + 0.5 * N.y;
		float hgt = clamp(p.y / ${I(ro)}, 0.0, 1.0);
		// corners and the foot of the walls get less of the sky
		float dw = min(min(p.x, ${I(Nt)} - p.x), min(p.z, ${I(_e)} - p.z));
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
		if (p.z > ${I(_e-6)}) {
			${Zg.map(t=>Vh(t)).map(t=>`
			{
				vec3 d = vec3(${I(t[0])}, ${I(t[1]-.06)}, ${I(t[2])}) - pw;
				float dd = dot(d, d);
				vec3 Ld = d * inversesqrt(dd);
				float w = mix(1.6, 2.4, night) / (0.25 + dd * 1.8);
				col += vec3(1.0, 0.6, 0.3) * w * (max(dot(N, Ld), 0.0) * 0.9 + 0.1);
				spec += vec3(1.0, 0.65, 0.35) * w * pow(max(dot(N, normalize(Ld + V)), 0.0), mix(16.0, 300.0, gloss)) * gloss * 0.6;
			}`).join("")}
		}
		// the hanging candles (by night): each drift a flickering flame, the
		// rotunda's ring putting its arches' shadows round the room and its
		// cloth staining what lies beyond it red
		float nk = smoothstep(0.35, 0.8, night);
		if (nk > 0.01) {
			${G8.map((t,e)=>`
			{
				float fl = candleFlicker(${I(e*7.31+1.7)});
				vec3 lp = vec3(${I(t[0])}, ${I(t[1])}, ${I(t[2])}) + vec3(sin(candleT * ${I(2.1+e*.37)} + ${I(e)}), 0.0, cos(candleT * ${I(1.7+e*.29)} + ${I(e*2)})) * 0.035 * (1.2 - fl);
				vec3 d = lp - p;
				float dd = dot(d, d);
				vec3 Ld = d * inversesqrt(dd);
				vec3 sh = candleShade(p + N * 0.02, lp);
				vec3 w = sh * (nk * ${I(1.6+.3*t[3])} * fl / (0.6 + dd * 0.42));
				col += vec3(1.0, 0.56, 0.24) * w * (max(dot(N, Ld), 0.0) * 0.88 + 0.12);
				spec += vec3(1.0, 0.62, 0.3) * w * pow(max(dot(N, normalize(Ld + V)), 0.0), mix(16.0, 300.0, gloss)) * gloss;
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
`;function X8(t){let e=new DataView(t),o=e.getUint32(4,!0),r=e.getUint32(8,!0),n=[],a=[];for(let l=0;l<3;l++)n.push(e.getFloat32(12+l*4,!0)),a.push(e.getFloat32(24+l*4,!0));let s=36,i=new Uint16Array(t,s,o*3);s+=o*6;let c=new Uint16Array(t,s,r);s+=r*2;let f=new Int8Array(t,s,o*3);return{nV:o,nI:r,mn:n,sz:a,pos:i,idx:c,nrm:f}}function Jn(t,e,o){let r=o&&o.wrap||"clamp",n=t.texture({data:[[[0,0,0,0]]],min:"linear",mag:"linear"}),a={tex:n,ready:!1};return fetch(e).then(s=>{if(!s.ok)throw new Error("Could not load "+e);return s.blob()}).then(s=>createImageBitmap(s,{premultiplyAlpha:"none"}).catch(()=>new Promise((i,c)=>{let f=new Image;f.onload=()=>i(f),f.onerror=c,f.src=URL.createObjectURL(s)}))).then(s=>{n({data:s,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrap:r}),a.ready=!0}).catch(s=>console.error(s)),a}var Xh=128,Yh=Math.round((ut.z1-ut.z0)/(11/372)),Zl=(ut.x1-ut.x0)/Xh,t5=(ut.z1-ut.z0)/Yh,Y8=.02,e5=`
	float simDec(vec2 c) { return (floor(c.x * 255.0 + 0.5) * 256.0 + floor(c.y * 255.0 + 0.5)) / 65535.0 * 2.0 - 1.0; }
	vec2 simEnc(float h) {
		float v = floor(clamp(h * 0.5 + 0.5, 0.0, 1.0) * 65535.0 + 0.5);
		float hi = floor(v / 256.0);
		return vec2(hi, v - hi * 256.0) / 255.0;
	}
`,Ha=`
	uniform float stime;
	uniform highp sampler2D simTex;
	${e5}
	float simAt(vec2 i) {
		i = clamp(i, vec2(0.0), vec2(${Xh-1}.0, ${Yh-1}.0));
		return simDec(texture2D(simTex, (i + 0.5) / vec2(${Xh}.0, ${Yh}.0)).rg);
	}
	// the height of the water at world xz (metres, tiny)
	float poolHeight(vec2 xz) {
		float h = 0.0018 * sin(xz.x * 2.1 + stime * 0.55) * sin(xz.y * 1.7 - stime * 0.43)
		        + 0.0010 * sin(xz.x * 3.7 - xz.y * 2.9 + stime * 0.8);
#ifndef NO_SIM
		vec2 g = (xz - vec2(${I(ut.x0+se[0])}, ${I(ut.z0+se[2])})) / vec2(${I(Zl)}, ${I(t5)}) - 0.5;
		vec2 i = floor(g), fr = g - i;
		float sh = mix(mix(simAt(i), simAt(i + vec2(1.0, 0.0)), fr.x), mix(simAt(i + vec2(0.0, 1.0)), simAt(i + vec2(1.0, 1.0)), fr.x), fr.y);
		h += sh * ${I(Y8)};
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
	}`,K8=`
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
	${zr}

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
		vec3 p = pw - vec3(${I(se[0])}, ${I(se[1])}, ${I(se[2])});
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
			base *= mix(1.0, 0.84, smoothstep(${I(ro-2.2)}, ${I(ro)}, p.y));
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
			float low = 1.0 - smoothstep(0.0, ${I(ut.top+.35)}, p.y);
			float moss = low * smoothstep(0.35, 0.65, fbm3(p * 4.0 + 2.0));
			base = mix(base, vec3(0.10, 0.12, 0.065), moss * 0.6);
			base *= mix(0.72, 1.0, smoothstep(0.0, 0.22, p.y));
			if (is(${wt.HOLLOW}.0)) {
				// the hollow: older, damper, never washed by the sun
				base *= vec3(0.70, 0.73, 0.68) * (0.85 + 0.15 * smoothstep(${I(no.floor)}, ${I(no.spring)}, p.y));
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
			base *= mix(1.0, 0.9, smoothstep(${I(ro-2)}, ${I(ro)}, p.y));
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
			float wallD = min(min(p.x, ${I(Nt)} - p.x), min(p.z, ${I(_e)} - p.z));
			base *= mix(0.72, 1.0, smoothstep(0.0, 1.2, wallD));
			N = normalize(N + (vec3(1.0, 0.0, 0.0) * (tn.r * 2.0 - 1.0) + vec3(0.0, 0.0, -1.0) * (tn.g * 2.0 - 1.0)) * 1.2);
			gloss = 0.12;
			aoK = mix(0.5, 1.0, tn.b) * mix(0.62, 1.0, smoothstep(0.0, 0.9, wallD));
			// the curb throws a soft shadow round the pool
			vec2 dq = max(vec2(${I(ut.x0-ut.curb)} - p.x, p.x - ${I(ut.x1+ut.curb)}), vec2(${I(ut.z0-ut.curb)} - p.z, p.z - ${I(ut.z1+ut.curb)}));
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
			// moss: soft cushions where rain and dust settle, on what faces up
			// (her shoulders, hair, the tops of her knees and arms, the folds)
			// and thicker down towards the damp base, with a velvety edge
			float up = smoothstep(0.15, 0.75, N.y);
			float mn = fbm3(p * 5.0 + 11.0), mf = fbm3(p * 23.0 + 3.0);
			float lowm = 1.0 - smoothstep(${I(c0.plinth+.2)}, ${I(c0.plinth+1.6)}, p.y);
			float moss = smoothstep(0.5, 0.4, mn - up * 0.12 - lowm * 0.1) * (0.12 + 0.88 * up * up + 0.3 * lowm);
			moss = clamp(moss * (0.75 + 0.5 * mf), 0.0, 1.0);
			vec3 mossC = mix(vec3(0.12, 0.15, 0.06), vec3(0.25, 0.29, 0.11), mf);
			base = mix(base, mossC, moss * 0.8);
			N = normalize(N + (vec3(mf, 0.0, mn) - 0.5) * moss * 0.6);
			base *= mix(0.62, 1.0, smoothstep(-0.7, 0.35, N.y));
			float foot = 1.0 - smoothstep(${I(c0.plinth)}, ${I(c0.plinth+.7)}, p.y);
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
		} else if (is(${wt.CFLAME}.0)) {
			// a hanging candle's flame: out by day; by night bright at its
			// root, flickering with its own drift's breath
			float nk = smoothstep(0.35, 0.8, night);
			if (nk < 0.02) discard;
			float fl = 0.75 + 0.25 * sin(time * 11.0 + p.x * 37.0 + p.z * 13.0) * sin(time * 6.1 + p.z * 29.0);
			gl_FragColor = vec4(sqrt(vec3(1.0, 0.7, 0.34) * 10.0 * fl * nk), 1.0);
			return;
		} else if (is(${wt.BULB}.0)) {
			vec3 glow = mix(vec3(0.75, 0.70, 0.62) * 0.35, vec3(1.0, 0.75, 0.45) * 3.5, night);
			gl_FragColor = vec4(sqrt(glow), 1.0);
			return;
		} else if (is(${wt.JAR}.0)) {
			base = mix(vec3(0.55, 0.42, 0.25), vec3(0.75, 0.70, 0.62), hash13(floor(p * 3.0)));
			gloss = 0.7;
		} else if (is(${wt.BRUSH}.0)) {
			base = mix(vec3(0.42, 0.10, 0.06), vec3(0.75, 0.62, 0.38), step(${I(.86+.24)}, p.y));
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
			float e = ${I(Zl)};
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
	}`,ci={tex:null,dummy:null};function Z8(t){if(ci.tex)return;let e=typeof navigator!="undefined"&&/Mobi|Android|iPhone|iPad/.test(navigator.userAgent),o=Math.min(e?1024:2048,t.limits.maxTextureSize),r=t.texture({width:o,height:o,min:"linear",mag:"linear",wrap:"clamp"}),n=t.framebuffer({color:r,depth:!1});t({vert:`
		precision highp float;
		attribute vec2 pos;
		varying vec2 uv;
		void main() { uv = pos * 0.5 + 0.5; gl_Position = vec4(pos, 0.0, 1.0); }`,frag:`
		precision highp float;
		varying vec2 uv;
		uniform float night;
		${Kh("bake")}
		void main() {
			vec2 qs = vec2(${I(Dn.sun[0])}, ${I(Dn.sun[1])}) + uv * vec2(${I(Dn.sun[2])}, ${I(Dn.sun[3])});
			vec2 qm = vec2(${I(Dn.moon[0])}, ${I(Dn.moon[1])}) + uv * vec2(${I(Dn.moon[2])}, ${I(Dn.moon[3])});
			gl_FragColor = vec4(studioExit(vec3(qs.x, ${I(ro)}, qs.y), STUDIO_SUN_D), studioExit(vec3(qm.x, ${I(ro)}, qm.y), STUDIO_MOON_D));
		}`,attributes:{pos:[-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]},uniforms:{night:0},count:6,depth:{enable:!1},framebuffer:n})(),ci.tex=r}function Q8(t){return ci.tex?ci.tex:(ci.dummy||(ci.dummy=t.texture({width:1,height:1,data:[0,0,0,0]})),ci.dummy)}gn.exports=function(t){Z8(t);let e=P8();I8(e),q8(e),D8(e),N8(e),O8(e);let o={enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"zero"}},r=performance.now(),n={t:0},a=0,s=t._gl,i=!!(s&&s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS)>0),c=Y=>i?Y:`#define NO_SIM
`+Y,f=(()=>{let Y=Xh,gt=Yh,ft=new Uint8Array(Y*gt*4);for(let yo=0;yo<Y*gt;yo++)ft[yo*4]=128,ft[yo*4+2]=128;let Ct=()=>t.framebuffer({color:t.texture({width:Y,height:gt,data:ft,min:"nearest",mag:"nearest",wrap:"clamp"}),depth:!1,stencil:!1}),pe=[Ct(),Ct()],Me=0,ye=new Uint8Array(Y*gt*4);for(let yo=0;yo<gt;yo++)for(let Uo=0;Uo<Y;Uo++){let ao=ut.x0+(Uo+.5)*Zl,Co=ut.z0+(yo+.5)*t5,co=Math.abs(ao-c0.x)<.43&&Math.abs(Co-c0.z)<.43,qe=0;for(let so of Dd)qe=Math.max(qe,1-Math.min(1,Math.max(0,(Math.hypot(ao-so[0],Co-so[1])-so[2]*.7)/(so[2]*.3))));let vo=(yo*Y+Uo)*4;ye[vo]=co?0:255,ye[vo+1]=Math.round(qe*255),ye[vo+3]=255}let le=t.texture({width:Y,height:gt,data:ye,min:"nearest",mag:"nearest",wrap:"clamp"}),ve=16,Je=[];for(let yo=0;yo<ve;yo++)Je.push([0,0,0,.04]);let W={prev:t.prop("prev"),mask:le};for(let yo=0;yo<ve;yo++)W["src["+yo+"]"]=(Uo=>()=>Je[Uo])(yo);let ht=Math.pow(.36*(1/60)/Zl,2),kt=t({vert:"precision highp float; attribute vec2 position; varying vec2 uv; void main() { uv = position * 0.5 + 0.5; gl_Position = vec4(position, 0.0, 1.0); }",frag:`
			precision highp float;
			uniform highp sampler2D prev, mask;
			uniform vec4 src[${ve}];
			varying vec2 uv;
			${e5}
			void main() {
				vec2 px = 1.0 / vec2(${Y}.0, ${gt}.0);
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
				float hn = h + (h - hp) * damp + ${I(ht)} * lap;
				hn *= 0.9993;
				// whatever touched the water this moment
				vec2 p = vec2(${I(ut.x0+se[0])}, ${I(ut.z0+se[2])}) + uv * vec2(${I(ut.x1-ut.x0)}, ${I(ut.z1-ut.z0)});
				for (int i = 0; i < ${ve}; i++) {
					vec4 s = src[i];
					if (s.z == 0.0) continue;
					vec2 dd = p - s.xy;
					hn += s.z * exp(-dot(dd, dd) / (s.w * s.w));
				}
				gl_FragColor = vec4(simEnc(clamp(hn, -1.0, 1.0)), simEnc(h));
			}`,attributes:{position:[-1,-1,1,-1,-1,1,1,1]},primitive:"triangle strip",count:4,framebuffer:t.prop("out"),uniforms:W,depth:{enable:!1,mask:!1},blend:{enable:!1},cull:{enable:!1},viewport:{x:0,y:0,width:Y,height:gt}}),ue=[],fe=0,_o=0;return{tex:()=>pe[Me].color[0],drop(yo,Uo,ao,Co){ue.push([yo,Uo,fe,ao,0,Co||.035]),typeof window!="undefined"&&window.__dropLog&&window.__dropLog.push([yo,Uo,fe,ao])},advance(yo,Uo){let ao=yo-fe-_o;if(ao<0||ao>2){fe=yo,_o=0;return}_o+=ao;let Co=0;for(;_o>=1/60&&Co<8;){_o-=1/60,fe+=1/60,Co++;let co=0;for(let qe=ue.length-1;qe>=0;qe--){let vo=ue[qe],so=fe-vo[2];if(so>1.4){ue.splice(qe,1);continue}if(co>=ve)continue;let p0=vo[3]*.05*Math.sin(so*2*Math.PI*2.4)*Math.exp(-so*3.2),t0=Je[co++];t0[0]=vo[0],t0[1]=vo[1],t0[2]=p0,t0[3]=vo[5]}for(let qe of Uo){if(co>=ve)break;let vo=Je[co++];vo[0]=qe[0],vo[1]=qe[1],vo[2]=qe[2],vo[3]=qe[3]}for(;co<ve;co++)Je[co][2]=0;kt({prev:pe[Me].color[0],out:pe[1-Me]}),Me=1-Me}Co===8&&(_o=0,fe=yo)},read(){return t.read({framebuffer:pe[Me]})}}})(),l=()=>{n.t=(performance.now()-r)/1e3,typeof window!="undefined"&&window.__studioFreeze!=null&&(n.t=window.__studioFreeze);for(let ft of Bg){let Ct=C8(ft,n.t),pe=Ct.ph-Ct.Tf;Ct.inPool&&pe>=0&&pe<.5&&!(ft.heard>n.t-1)&&(ft.heard=n.t,f.drop(Ct.lx+se[0],Ct.lz+se[2],1.1,.04))}let Y=n.t-S.sim.t;for((Y<0||Y>120)&&(Y=Math.min(Math.max(Y,0),120));Y>1e-6;){let ft=Math.min(Y,.05);S.sim.step(ft),Y-=ft}for(let ft of S.sim.events)ft[2]>a&&(a=ft[2],f.drop(ft[0]+se[0],ft[1]+se[2],ft[3]*1.3,ft[3]>=1?.07:.04));let gt=[];for(let ft of S.sim.fish){let Ct=Math.min(1,Math.max(0,(ft.y+.15)/.09));if(Ct<=0)continue;let pe=.008*Ct*Math.min(1.5,ft.v/.15);gt.push([ft.x+se[0]+Math.cos(ft.th)*.02,ft.z+se[2]+Math.sin(ft.th)*.02,pe,.045]),gt.push([ft.x+se[0]-Math.cos(ft.th)*.14,ft.z+se[2]-Math.sin(ft.th)*.14,-pe,.055])}f.advance(n.t,gt)},v={stime:()=>n.t,simTex:()=>f.tex()};typeof location!="undefined"&&/tourdebug/.test(location.search)&&(window.__studioClock=n,window.__pondSim=f);let u=t.texture({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"}),p=u,d=[4,4],h=0,g=t({}),m=()=>g(Y=>{if(b){b=!1;return}let gt=Y.viewportWidth,ft=Y.viewportHeight;u.width!==gt||u.height!==ft?u({copy:!0,width:gt,height:ft,min:"linear",mag:"linear",wrap:"clamp"}):u.subimage({copy:!0,width:gt,height:ft}),p=u,d[0]=gt,d[1]=ft,h=1}),x=t.texture({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"}),y=t.framebuffer({color:x,depth:!0}),_=t({framebuffer:y}),M=t.texture({width:1,height:1,data:[0,0,0,255]}),b=!1,k=0,E=!1,z=(Y,gt)=>g(ft=>{let Ct=ft.viewportWidth,pe=ft.viewportHeight,Me=Math.max(2,Math.round(Ct/2)),ye=Math.max(2,Math.round(pe/2)),le=!E;if((y.width!==Me||y.height!==ye)&&(y.resize(Me,ye),le=!0),d[0]=Ct,d[1]=pe,b=!0,h=1,!le&&++k%gt!==0){p=x;return}p=M,_(()=>{t.clear({color:[0,0,0,1],depth:1}),Y()}),p=x,E=!0}),P=Jn(t,"res/pond/lilypad.webp"),R=Jn(t,"res/pond/petals.webp"),B=Jn(t,"res/studio/rock_col.webp",{wrap:"repeat"}),$=Jn(t,"res/studio/rock_nrm.webp",{wrap:"repeat"}),D=Jn(t,"res/studio/oldstone_col.webp",{wrap:"repeat"}),it=Jn(t,"res/studio/oldstone_nrm.webp",{wrap:"repeat"}),St=Jn(t,"res/studio/floor_col.webp",{wrap:"repeat"}),yt=Jn(t,"res/studio/floor_nrm.webp",{wrap:"repeat"}),mt=Object.assign({padTex:()=>P.tex,petalTex:()=>R.tex,reflTex:()=>p,reflSize:()=>d,reflOn:()=>h,rockCol:()=>B.tex,rockNrm:()=>$.tex,oldCol:()=>D.tex,oldNrm:()=>it.tex,floorCol:()=>St.tex,floorNrm:()=>yt.tex},v),zt=(Y,gt)=>t({vert:c(Vg),frag:K8,attributes:{position:Y.pos,normal:Y.nrm,kind:Y.kind,uv:Y.uv,anchor:Y.anchor&&Y.anchor.length?Y.anchor:new Float32Array(Y.pos.length/3*4)},elements:new Uint32Array(Y.idx),count:gt||Y.idx.length,uniforms:mt,cull:{enable:!1},blend:o}),It=zt(e),re=null;fetch(c0.file).then(Y=>{if(!Y.ok)throw new Error("Could not load "+c0.file);return Y.arrayBuffer()}).then(Y=>{let gt=X8(Y),ft={pos:[],nrm:[],kind:[],uv:[],anchor:null,idx:[]},Ct=c0.height,pe=Math.cos(c0.yaw),Me=Math.sin(c0.yaw);for(let ye=0;ye<gt.nV;ye++){let le=(gt.mn[0]+gt.pos[ye*3]/65535*gt.sz[0])*Ct,ve=(gt.mn[1]+gt.pos[ye*3+1]/65535*gt.sz[1])*Ct,Je=(gt.mn[2]+gt.pos[ye*3+2]/65535*gt.sz[2])*Ct;ft.pos.push(c0.x+pe*le+Me*Je+se[0],c0.plinth+ve+se[1],c0.z-Me*le+pe*Je+se[2]);let W=gt.nrm[ye*3]/127,ht=gt.nrm[ye*3+1]/127,kt=gt.nrm[ye*3+2]/127;ft.nrm.push(pe*W+Me*kt,ht,-Me*W+pe*kt),ft.kind.push(wt.MARBLE),ft.uv.push(0,0)}for(let ye=0;ye<gt.nI;ye++)ft.idx.push(gt.idx[ye]);re=zt(ft)}).catch(Y=>console.error(Y));let Ae=null,lo=Jn(t,u0.tex);fetch(u0.file).then(Y=>{if(!Y.ok)throw new Error("Could not load "+u0.file);return Y.arrayBuffer()}).then(Y=>{let gt=new DataView(Y),ft=gt.getUint32(4,!0),Ct=gt.getUint32(8,!0),pe=12,Me=new Float32Array(Y,pe,ft*3);pe+=ft*12;let ye=new Uint16Array(Y,pe,ft*2);pe+=ft*4;let le=new Uint16Array(Y,pe,Ct);pe+=Ct*2;let ve=new Int8Array(Y,pe,ft*3),Je=new Float32Array(ft*3),W=new Float32Array(ft*3),ht=new Float32Array(ft*2);for(let kt=0;kt<ft;kt++)Je[kt*3]=Me[kt*3]+se[0],Je[kt*3+1]=Me[kt*3+1]+se[1],Je[kt*3+2]=Me[kt*3+2]+se[2],W[kt*3]=ve[kt*3]/127,W[kt*3+1]=ve[kt*3+1]/127,W[kt*3+2]=ve[kt*3+2]/127,ht[kt*2]=ye[kt*2]/65535,ht[kt*2+1]=1-ye[kt*2+1]/65535;Ae=t({vert:`
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
				}`,frag:`
				precision highp float;
				uniform float night, time;
				uniform sampler2D graveTex;
				varying vec3 v_pos, v_nrm, v_eye;
				varying vec2 v_uv;
				${zr}
				void main() {
					vec3 V = normalize(v_eye - v_pos);
					vec3 N = normalize(v_nrm);
					if (dot(N, V) < 0.0) N = -N;
					vec3 tc = texture2D(graveTex, v_uv).rgb;
					vec3 base = tc * tc * 1.15;
					vec3 spec; float sv;
					vec3 light = studioLight(v_pos, N, V, 0.15, spec, sv);
					vec3 col = base * light + spec * 0.15;
					col = studioAir(col, v_pos, v_eye);
					gl_FragColor = vec4(sqrt(max(col, 0.0)), 1.0);
				}`,attributes:{position:Je,normal:W,uv:ht},elements:le,uniforms:{graveTex:()=>lo.tex},cull:{enable:!1}})}).catch(Y=>console.error(Y));let ge=Jn(t,"res/tree/leaves.webp"),$e=H8(),He=t({vert:c(`
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
		${zr}
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
		}`,attributes:{position:$e.pos,normal:$e.nrm,uv:$e.uv,shade:$e.shade,flower:$e.flower},elements:new Uint32Array($e.idx),uniforms:{tex:ge.tex},cull:{enable:!1}}),et=Jn(t,"res/studio/plants.webp"),j=Jn(t,"res/studio/vleaves.webp"),lt=W8(),xt=Y=>t({vert:c(`
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
		${zr}
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
		}`,attributes:{position:Y.pos,normal:Y.nrm,uv:Y.uv,info:Y.info},elements:new Uint32Array(Y.idx),uniforms:{tex:et.tex,tex2:j.tex},cull:{enable:!1}}),Kt=xt(lt.walls),te=E8(),Zt=t({vert:c(`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		uniform float time, windK;
		attribute vec3 position, normal;
		attribute vec2 uv;
		attribute float sw;
		varying vec3 v_pos, v_nrm, v_eye;
		varying vec2 v_uv;
		void main() {
			// a slow flow in the still air: waves running down the fall, the
			// hem lifting and settling, never in step round the drum
			vec2 c = position.xz - vec2(${I(Te.cx+se[0])}, ${I(Te.cz+se[2])});
			float a = atan(c.x, c.y);
			vec2 out2 = normalize(c);
			float y = position.y;
			float w = sin(time * 0.55 + a * 2.3 - y * 0.9) * 0.6 + sin(time * 0.93 + a * 5.1 + y * 1.7) * 0.3 + sin(time * 0.31 - a * 1.3) * 0.4;
			float side = sin(time * 0.7 + a * 3.7 - y * 1.3);
			vec2 tng = vec2(-out2.y, out2.x);
			// and the wind: a draught from the windows' side across the drum,
			// coming in slow gusts. The cloth on the far side of the drum
			// from it lifts and billows out; the near side is pressed in
			// against the stone and ripples; the parted edges on the pool's
			// line, free, flap and curl most.
			vec2 wd = normalize(vec2(0.92, -0.38));
			float gust = (0.55 + 0.3 * sin(time * 0.29) * sin(time * 0.17 + 1.3) + 0.25 * sin(time * 0.61 + 0.7) + 0.12 * sin(time * 1.37 + a)) * windK;
			float lee = dot(out2, wd);
			float wave = sin(time * 1.6 + a * 4.0 - y * 1.5) * 0.55 + sin(time * 2.7 + a * 9.0 + y * 2.4) * 0.25;
			float lat = ${I(Te.cloth)} * abs(sin(a));
			float edge = (1.0 - smoothstep(${I(Te.gap)}, ${I(Te.gap+.9)}, lat)) * step(abs(sin(a)), 0.7);
			vec2 blow = wd * gust * (0.16 + 0.1 * wave) * mix(0.35, 1.0, smoothstep(-0.6, 0.6, lee))
				+ out2 * gust * max(lee, 0.0) * (0.14 + 0.08 * wave)
				+ tng * edge * gust * (sin(time * 2.1 + y * 2.3 + a * 6.0) * 0.13 + sin(time * 3.3 - y * 3.1) * 0.05);
			vec3 p0 = position + vec3(out2.x, 0.0, out2.y) * w * 0.09 * sw + vec3(tng.x, 0.0, tng.y) * side * 0.05 * sw
				+ vec3(blow.x, 0.03 * gust * wave, blow.y) * sw;
			v_pos = p0;
			v_nrm = normalize(normal + vec3(out2.x, 0.0, out2.y) * side * 0.3 * sw + vec3(tng.x, 0.0, tng.y) * wave * gust * 0.5 * sw);
			v_uv = uv;
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
		${zr}
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
		}`,attributes:{position:te.pos,normal:te.nrm,uv:te.uv,sw:te.sw},uniforms:{windK:()=>o5.k},elements:new Uint32Array(te.idx),cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",srcAlpha:"one",dstRGB:"one minus src alpha",dstAlpha:"one minus src alpha"}}}),qt=Jn(t,"res/studio/rose_col.webp"),ot=null;fetch("res/studio/rose.bin").then(Y=>{if(!Y.ok)throw new Error("Could not load res/studio/rose.bin");return Y.arrayBuffer()}).then(Y=>{let gt=new DataView(Y).getUint32(4,!0),ft=new Float32Array(Y,8,gt*8),Ct=new Float32Array(lt.roses.length*gt*3),pe=new Float32Array(Ct.length),Me=new Float32Array(lt.roses.length*gt*2),ye=0;for(let le of lt.roses){let ve=le.f,Je=Math.abs(ve[1])>.9?[1,0,0]:[0,1,0],W=[Je[1]*ve[2]-Je[2]*ve[1],Je[2]*ve[0]-Je[0]*ve[2],Je[0]*ve[1]-Je[1]*ve[0]],ht=Math.hypot(...W),kt=W.map(ao=>ao/ht),ue=[ve[1]*kt[2]-ve[2]*kt[1],ve[2]*kt[0]-ve[0]*kt[2],ve[0]*kt[1]-ve[1]*kt[0]],fe=Math.cos(le.spin),_o=Math.sin(le.spin),yo=kt.map((ao,Co)=>ao*fe+ue[Co]*_o),Uo=ue.map((ao,Co)=>ao*fe-kt[Co]*_o);for(let ao=0;ao<gt;ao++){let Co=ft[ao*8],co=ft[ao*8+1],qe=ft[ao*8+2],vo=ft[ao*8+3],so=ft[ao*8+4],p0=ft[ao*8+5];for(let t0=0;t0<3;t0++)Ct[ye*3+t0]=le.at[t0]+se[t0]+(yo[t0]*Co+Uo[t0]*co+ve[t0]*qe)*le.size,pe[ye*3+t0]=yo[t0]*vo+Uo[t0]*so+ve[t0]*p0;Me[ye*2]=ft[ao*8+6],Me[ye*2+1]=ft[ao*8+7],ye++}}ot=t({vert:c(`
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
				${zr}
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
				}`,attributes:{position:Ct,normal:pe,uv:Me},count:ye,uniforms:{tex:qt.tex},cull:{enable:!1}})}).catch(Y=>console.error(Y));let Rt=xt(lt.ground);typeof location!="undefined"&&/tourdebug/.test(location.search)&&console.log("studio greenery: ivy verts",lt.walls.pos.length/3,"ground verts",lt.ground.pos.length/3);let Se=(()=>{let Y=[],gt=[];for(let Me=0;Me<=14;Me++)for(let ye=0;ye<=6*2;ye++)Y.push([Me/14,ye/6-1]);let pe=6*2+1;for(let Me=0;Me<14;Me++)for(let ye=0;ye<6*2;ye++){let le=Me*pe+ye;gt.push([le,le+pe,le+pe+1],[le,le+pe+1,le+1])}return{uvw:Y,idx:gt}})(),Qt=t({vert:c(`
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
		${zr}
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
		}`,attributes:{uvw:Se.uvw},elements:Se.idx,uniforms:Object.assign({gModel:()=>Er.model,gPos:()=>{let Y=S.sim.crumbs[0];return[Y.x+se[0],0,Y.z+se[2]]},gAng:()=>Er.ang,gSize:()=>Er.size,gFlex:()=>Er.flex,gFlutter:()=>Er.flutter,gFloat:()=>Er.floating?1:0},v),cull:{enable:!1}}),Ft=(()=>{let Y={corner:[],start:[],par:[],misc:[],idx:[]};return Bg.forEach((gt,ft)=>{for(let Ct of[[-1,-1],[1,-1],[1,1],[-1,1]])Y.corner.push(Ct[0],Ct[1]),Y.start.push(gt.start[0]+se[0],gt.start[1],gt.start[2]+se[2]),Y.par.push(gt.period,gt.offset,gt.drift[0],gt.drift[1]),Y.misc.push(gt.speed,gt.seed,gt.white);Y.idx.push(ft*4,ft*4+1,ft*4+2,ft*4,ft*4+2,ft*4+3)}),Y})(),Ue=t({vert:c(`
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
			vec2 lq = land - vec2(${I(se[0])}, ${I(se[2])});
			bool inPool = lq.x > ${I(vs[0])} && lq.x < ${I(vs[2])} && lq.y > ${I(vs[1])} && lq.y < ${I(vs[3])};
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
		${zr}
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
		}`,attributes:{corner:Ft.corner,start:Ft.start,par:Ft.par,misc:Ft.misc},elements:new Uint32Array(Ft.idx),uniforms:v,cull:{enable:!1}}),S={sim:$8(),ready:!1};Fn=S.sim,typeof location!="undefined"&&/tourdebug/.test(location.search)&&(window.__koi=S.sim);let De=Object.assign({},v);sa.forEach((Y,gt)=>{De["koiA["+gt+"]"]=()=>{let ft=S.sim.fish[gt];return[ft.x+se[0],ft.y,ft.z+se[2],ft.th]},De["koiB["+gt+"]"]=()=>{let ft=S.sim.fish[gt];return[ft.kappa,ft.ph,ft.amp,ft.pitch]}});let Ve=(()=>{let gt=Math.round(96*(ut.z1-ut.z0)/(ut.x1-ut.x0)),ft=new Uint8Array(96*gt*4),Ct=[-ur[0]/ur[1]*-Xl,-ur[2]/ur[1]*-Xl],pe=96/(ut.x1-ut.x0),Me=gt/(ut.z1-ut.z0);for(let ye=0;ye<gt;ye++)for(let le=0;le<96;le++){let ve=ut.x0+(le+.5)/pe,Je=ut.z0+(ye+.5)/Me,W=0;for(let ht of Dd){let kt=Math.hypot(ve-(ht[0]+Ct[0]),Je-(ht[1]+Ct[1]));W=Math.max(W,1-Math.min(1,Math.max(0,(kt-ht[2]*.82)/(ht[2]*.35))))}ft[(ye*96+le)*4]=Math.round(W*255),ft[(ye*96+le)*4+3]=255}return t.texture({width:96,height:gt,data:ft,min:"linear",mag:"linear"})})(),uo=`
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
	`,Oo=`
		uniform vec4 koiA[${sa.length}], koiB[${sa.length}];
		uniform sampler2D padShadow;
		const vec3 W_SUN = vec3(${I(ur[0])}, ${I(ur[1])}, ${I(ur[2])});
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
			vec2 lp = pw.xz - vec2(${I(se[0])}, ${I(se[2])});
			// (the picture is for the bed; nearer the surface the shadow sits nearer the pad)
			vec2 back = W_SUN.xz / W_SUN.y * (pw.y - ${I(Xl)});
			vec2 uv = (lp - back - vec2(${I(ut.x0)}, ${I(ut.z0)})) / vec2(${I(ut.x1-ut.x0)}, ${I(ut.z1-ut.z0)});
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
			float e = ${I(Zl)};
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
	`,wo=(()=>{let Y=[],gt=[],ft=[],Ct=[],pe=(ht,kt,ue,fe,_o)=>(Y.push(ht+se[0],kt,ue+se[2]),gt.push(...fe),ft.push(_o),Y.length/3-1),Me=(ht,kt,ue,fe,_o,yo,Uo)=>{let ao=Y.length/3;for(let Co=0;Co<=fe;Co++)for(let co=0;co<=_o;co++)pe(ht[0]+kt[0]*Co/fe+ue[0]*co/_o,ht[1]+kt[1]*Co/fe+ue[1]*co/_o,ht[2]+kt[2]*Co/fe+ue[2]*co/_o,yo,Uo);for(let Co=0;Co<fe;Co++)for(let co=0;co<_o;co++){let qe=ao+Co*(_o+1)+co;Ct.push(qe,qe+1,qe+_o+2,qe,qe+_o+2,qe+_o+1)}},{x0:ye,x1:le,z0:ve,z1:Je}=ut,W=Xl;return Me([ye,W,ve],[le-ye,0,0],[0,0,Je-ve],8,22,[0,1,0],0),Me([ye,0,ve],[0,0,Je-ve],[0,W,0],22,2,[1,0,0],1),Me([le,0,ve],[0,0,Je-ve],[0,W,0],22,2,[-1,0,0],1),Me([ye,0,ve],[le-ye,0,0],[0,W,0],8,2,[0,0,1],1),Me([ye,0,Je],[le-ye,0,0],[0,W,0],8,2,[0,0,-1],1),{pos:Y,nrm:gt,kd:ft,idx:Ct}})(),Fo=Jn(t,"res/pond/gravel.jpg",{wrap:"repeat"}),qo=Object.assign({padShadow:Ve,gravel:()=>Fo.tex,reflTex:()=>p,reflSize:()=>d,reflOn:()=>h},De),x0=t({vert:c(`
		precision highp float;
		uniform mat4 proj, view;
		attribute vec3 position, normal;
		attribute float kd;
		varying vec3 v_pos, v_nrm, v_eye;
		varying float v_kd;
		${Ha}
		${uo}
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
		${zr}
		${Oo}
		float klen(int i) {
			${sa.map((Y,gt)=>`if (i == ${gt}) return ${I(Y.len)};`).join(" ")}
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
				base = mix(base, vec3(0.10, 0.13, 0.07), smoothstep(-0.05, ${I(Xl)}, v_pos.y) * 0.75);
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
		}`,attributes:{position:wo.pos,normal:wo.nrm,kd:wo.kd},elements:new Uint16Array(wo.idx),uniforms:qo,cull:{enable:!1},depth:{enable:!0,mask:!1,func:"less"},blend:o}),Ln=Jn(t,"res/koi.webp"),Nn=null,tt=null;fetch("res/koi.bin").then(Y=>{if(!Y.ok)throw new Error("Could not load res/koi.bin");return Y.arrayBuffer()}).then(Y=>{let gt=new DataView(Y),ft=gt.getUint32(4,!0),Ct=gt.getUint32(8,!0),pe=gt.getFloat32(12,!0),Me=16,ye=new Uint16Array(Y,Me,ft);Me+=ft*2;let le=new Int16Array(Y,Me,ft*2);Me+=ft*4;let ve=new Uint16Array(Y,Me,ft*2);Me+=ft*4;let Je=new Uint16Array(Y,Me,Ct);Me+=Ct*2;let W=new Int8Array(Y,Me,ft*3);Me+=ft*3;let ht=new Uint8Array(Y,Me,ft*2),kt=sa.length,ue=new Float32Array(ft*3*kt),fe=new Float32Array(ft*3*kt),_o=new Float32Array(ft*2*kt),yo=new Float32Array(ft*2*kt),Uo=new Float32Array(ft*4*kt);sa.forEach((co,qe)=>{for(let vo=0;vo<ft;vo++){let so=qe*ft+vo;ue[so*3]=ye[vo]/65535*1.2,ue[so*3+1]=le[vo*2]/32767*pe,ue[so*3+2]=le[vo*2+1]/32767*pe,fe[so*3]=W[vo*3]/127,fe[so*3+1]=W[vo*3+1]/127,fe[so*3+2]=W[vo*3+2]/127,_o[so*2]=ve[vo*2]/65535,_o[so*2+1]=ve[vo*2+1]/65535,yo[so*2]=ht[vo*2]/255,yo[so*2+1]=ht[vo*2+1]/255,Uo[so*4]=co.len,Uo[so*4+1]=co.kind,Uo[so*4+2]=qe,Uo[so*4+3]=0}});let ao=[],Co=[];for(let co=0;co<kt;co++)for(let qe=0;qe<Ct;qe+=3){let vo=Je[qe],so=Je[qe+1],p0=Je[qe+2];(Math.max(ht[vo*2],ht[so*2],ht[p0*2])>140?Co:ao).push(vo+co*ft,so+co*ft,p0+co*ft)}tt={body:t.elements({data:new Uint32Array(ao),type:"uint32"}),fins:t.elements({data:new Uint32Array(Co),type:"uint32"})},Nn=t({vert:c(`
				precision highp float;
				uniform mat4 proj, view;
				attribute vec3 loc, nrm;
				attribute vec2 uv, fin;
				attribute vec4 km;
				varying vec3 v_pos, v_nrm, v_eye;
				varying vec2 v_uv;
				varying float v_kind, v_fin, v_depth, v_seed, v_u;
				${Ha}
				${uo}
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
				${Ha}
				${zr}
				${Oo}
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
				}`,attributes:{loc:ue,nrm:fe,uv:_o,fin:yo,km:Uo},elements:t.prop("els"),uniforms:Object.assign({koiTex:()=>Ln.tex,padShadow:Ve,reflTex:()=>p,reflSize:()=>d,reflOn:()=>h},De),cull:{enable:!1},colorMask:t.prop("color"),depth:{enable:!0,mask:t.prop("write"),func:t.prop("func")},blend:o}),S.ready=!0}).catch(Y=>console.error(Y));let Vt=()=>{Nn&&(Nn({els:tt.body,color:[!1,!1,!1,!1],write:!0,func:"less"}),Nn({els:tt.body,color:[!0,!0,!0,!0],write:!1,func:"lequal"}),Nn({els:tt.fins,color:[!0,!0,!0,!0],write:!1,func:"less"}))},Xt=(()=>{let Y={cp:[],ci:[],idx:[]};for(let gt=0;gt<Kl;gt++){let ft=Y.cp.length/3,Ct=5,pe=7;for(let Me=0;Me<=Ct;Me++)for(let ye=0;ye<pe;ye++){let le=Me/Ct*Math.PI,ve=ye/pe*Math.PI*2,Je=1+.35*Math.sin(ve*3+gt*1.7)*Math.sin(le*2+gt);Y.cp.push(Math.sin(le)*Math.cos(ve)*Je,Math.cos(le)*.6,Math.sin(le)*Math.sin(ve)*Je*(.8+.4*(gt*.37%1))),Y.ci.push(gt)}for(let Me=0;Me<Ct;Me++)for(let ye=0;ye<pe;ye++){let le=ft+Me*pe+ye,ve=ft+Me*pe+(ye+1)%pe,Je=ft+(Me+1)*pe+ye,W=ft+(Me+1)*pe+(ye+1)%pe;Y.idx.push(le,ve,W,le,W,Je)}}return Y})(),Bt=Object.assign({},v);for(let Y=0;Y<Kl;Y++)Bt["crumbs["+Y+"]"]=()=>{let gt=S.sim.crumbs[Y],ft=S.sim.t,Ct=gt.alive&&!S.sim.feed.petal?Math.min(1,Math.max(0,(ft-gt.born)/.25)):0;return[gt.x+se[0],gt.z+se[2],Ct,gt.seed]};let Le=t({vert:c(`
		precision highp float;
		uniform mat4 proj, view;
		uniform vec4 crumbs[${Kl}];
		attribute vec3 cp;
		attribute float ci;
		varying vec3 v_pos, v_nrm, v_eye;
		${Ha}
		void main() {
			int k = int(ci + 0.5);
			vec4 c = crumbs[0];
			for (int i = 1; i < ${Kl}; i++) if (i == k) c = crumbs[i];
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
		${zr}
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
		}`,attributes:{cp:Xt.cp,ci:Xt.ci},elements:new Uint32Array(Xt.idx),uniforms:Bt,cull:{enable:!1}}),Be=U8(),Ye=t({vert:c(Vg),frag:`
		precision highp float;
		uniform float night, time;
		varying vec3 v_pos, v_nrm, v_eye;
		varying float v_kind;
		varying vec2 v_uv;
		${zr}
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			vec3 N = normalize(v_nrm);
			if (dot(N, V) < 0.0) N = -N;
			float F = 0.04 + 0.96 * pow(1.0 - max(dot(N, V), 0.0), 5.0);
			vec3 p = v_pos - vec3(${I(se[0])}, ${I(se[1])}, ${I(se[2])});
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
		}`,attributes:{position:Be.pos,normal:Be.nrm,kind:Be.kind,uv:Be.uv,anchor:Be.anchor},uniforms:v,elements:new Uint32Array(Be.idx),cull:{enable:!1},depth:{mask:!1},blend:o}),Ie=(()=>{let Y={pos:[],idx:[]},gt=300,ft=24,Ct=12;for(let pe=0;pe<=Ct;pe++){let Me=-.25*Ee+pe/Ct*.75*Ee;for(let ye=0;ye<=ft;ye++){let le=ye/ft*2*Ee;Y.pos.push(se[0]+Nt/2+gt*Math.cos(Me)*Math.cos(le),gt*Math.sin(Me),se[2]+_e/2+gt*Math.cos(Me)*Math.sin(le))}}for(let pe=0;pe<Ct;pe++)for(let Me=0;Me<ft;Me++){let ye=pe*(ft+1)+Me,le=ye+1,ve=ye+ft+2,Je=ye+ft+1;Y.idx.push(ye,le,ve,ye,ve,Je)}return Y})(),io=t({vert:c(`
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
		${zr}
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
		void main() {`),attributes:{position:Ie.pos},elements:new Uint32Array(Ie.idx),cull:{enable:!1}}),je=typeof navigator!="undefined"&&/Mobi|Android|iPhone|iPad/.test(navigator.userAgent),po=je?2600:6500,Xe=[];{let Y=Ba(4242),gt=(Ct,pe,Me)=>{let ye=-Ct/ur[0],le=pe+ur[1]*ye,ve=Me+ur[2]*ye;return xe.c.some(Je=>{let W=ka(ve-Je);return W!==null&&le>xe.sill&&le<W})},ft=0;for(;Xe.length<po&&ft++<po*60;){let Ct=[.2+Y()*(Nt-.4),.1+Y()*(ro+1),.2+Y()*(_e-.4)];Xe.length<po*.8&&!gt(...Ct)||Xe.push([...Ct,Y()])}}let Ze=t({vert:`
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
			p.y = mod(p.y - 0.1, ${I(ro+1)}) + 0.1;
			p += vec3(${I(se[0])}, ${I(se[1])}, ${I(se[2])});
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
			float size = sharp + blur * ${je?"12.0":"20.0"} * (0.6 + 0.4 * seed.w);
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
		}`,attributes:{seed:Xe},count:po,primitive:"points",uniforms:{pixelScale:Y=>Y.viewportHeight*.0055},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});function Mo(Y){let gt=!!(Y&&Y.reflected);gt||(m(),l()),io(),It(),gt||(x0(),Vt(),Le()),re&&re(),Ae&&Ae(),He(),gt||(Kt(),ot&&ot(),Rt()),Ue(),Er.vis&&!(Er.floating&&S.sim.feed.eaten)&&Qt(),Zt(),gt||(Ye(),Ze())}return Mo.reflect=z,Mo};var Fn=null,Er={vis:!1,model:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],ang:0,size:.09,flex:0,flutter:0,floating:!1},o5={k:1};function J8(t){o5.k=t}function tk(t){Object.assign(Er,t)}function ek(t,e){Fn&&!Fn.feed.lure&&!Fn.feed.petal&&Fn.lure(t,e)}function ok(t,e){Fn&&!Fn.feed.petal&&(Fn.petal(t,e),Er.floating=!0)}function nk(){Fn&&Fn.unpetal(),Er.floating=!1}function rk(){let t=Fn&&Fn.feed;return{landed:!!(t&&(t.petal||t.eaten))&&Er.floating,eaten:!!(t&&t.eaten&&Er.floating)}}function ak(t,e){if(e[1]>=-1e-4)return null;let o=-t[1]/e[1],r=t[0]+e[0]*o-se[0],n=t[2]+e[2]*o-se[2];return r<ut.x0||r>ut.x1||n<ut.z0||n>ut.z1?null:[r+se[0],n+se[2]]}function sk(t,e){Fn&&Fn.drop(t-se[0],e-se[2])}function ik(){return!!(Fn&&Fn.feed.on)}var Xg=[{from:[8,1.65,21.75],to:[8,1.7,21.2],at:[8,2.3,1],fov:52},{from:[8,1.65,21.1],to:[8,1.7,19.1],at:[8,2.4,1],fov:58},{from:[3.6,1.65,20.5],to:[4.6,1.75,18.7],at:[8.8,2.7,1.5],fov:58},{from:[8,1.45,11.2],to:[8,1.55,8.4],at:[8,2.5,.5],fov:46},{from:[8.9,3.9,11.4],to:[7.4,3.7,10.2],at:[8,-.2,7.2],fov:50,pond:!0},{from:[5.1,1.5,5.8],to:[5.7,1.7,4.6],at:[8,2.6,.8],fov:44},{from:[10.6,1.6,2.4],to:[9.7,1.7,3.6],at:[8,2.4,22],fov:60},{from:[2.6,1.5,19],to:[3.6,1.6,17.4],at:[8,6.8,8],fov:62}],Ac=11;function ck(t){let e=Xg.length,o=Math.floor(t/Ac)%e,r=t%Ac/Ac,n=r*r*(3-2*r),a=Xg[o],s=a.from.map((c,f)=>c+(a.to[f]-c)*n),i=Math.max(0,1-Math.min(r*Ac,(1-r)*Ac)/.7);return{eye:Vh(s),target:Vh(a.at),fov:a.fov,roll:0,fade:i,pond:!!a.pond&&i<.05,shot:Math.floor(t/Ac)}}gn.exports.previewCam=ck;gn.exports.setGuide=tk;gn.exports.setWind=J8;gn.exports.petalLure=ek;gn.exports.petalLand=ok;gn.exports.petalReset=nk;gn.exports.petalState=rk;gn.exports.STUDIO={W:Nt,L:_e,H:ro,POOL:ut,ROT:Te,NICHE:no,VENUS:c0,WIN:xe,TRUSS_Z:ps,GRAVE:u0};gn.exports.poolHit=ak;gn.exports.feedAt=sk;gn.exports.feeding=ik;gn.exports.sunGLSL=Kh;gn.exports.bakedSun=Q8;gn.exports.O=se;gn.exports.SIZE={W:Nt,L:_e,H:ro,RIDGE:pr};gn.exports.BOX=[se[0]-.8,0,se[2]-.8,se[0]+Nt+.8,pr+.5,se[2]+_e+.8];gn.exports.AIR_BOX=[se[0],0,se[2],se[0]+Nt,pr,se[2]+_e]});var t1=Tt((GA,c5)=>{"use strict";var{A:zn}=Gr(),{C:K0}=On(),{DOOR:Lc}=ss(),xn=us(),Nc=Tc(),a5=K0.hallEnd+.35,s5={arch:[13.6,0,zn.zc-zn.arch.r-.3,14.4,zn.arch.spring+zn.arch.r+.3,zn.zc+zn.arch.r+.3],mouth:[13.3,0,K0.z0-.3,14.3,8.2,K0.z1+.3],stair:[-.5,0,xn.SURR.z0-.2,.5,xn.SURR.top+.3,xn.SURR.z1+.2],door:[Lc.x0-.4,0,-.5,Lc.x1+.4,Lc.top+.4,.5],windows:[15.6,.4,K0.z1-.2,36.9,6.4,K0.z1+.9],farDoor:[K0.x1-.2,0,K0.zc-Lc.r-.4,K0.x1+.9,Lc.top+.4,K0.zc+Lc.r+.4]},ja={court:[zn.x0-.4,0,zn.z0-.3,zn.x1+.3,zn.domeTop+.5,zn.z1+.3],stair:[xn.C.x-xn.R-2.6,0,xn.C.z-xn.R-1.5,.5,15.6,xn.C.z+xn.R+1.5],street:[-60,-1,-140,74,60,.6],garden:[10,-1,K0.z1,46,60,K0.z1+110],florence:[K0.x1,-1,K0.zc-30,K0.x1+80,60,K0.zc+30],studio:Nc.BOX},lk=[[0,0,0,14,0,a5],[13.6,0,K0.z0,K0.x1+.4,0,K0.z1],[zn.x0-.4,0,zn.z0,zn.x1,0,zn.z1],[xn.C.x-xn.R-2.6,0,xn.C.z-xn.R,.4,0,xn.C.z+xn.R],[Nc.BOX[0],0,Nc.BOX[2],Nc.BOX[3],0,Nc.BOX[5]]],fk={hall:{court:["arch"],stair:["stair"],street:["door"],garden:["mouth","windows"],florence:["mouth","farDoor"]},wing:{court:["mouth","arch"],stair:["mouth","stair"],street:["mouth","door"],garden:["windows"],florence:["farDoor"]},court:{stair:["arch","stair"],street:["arch","door"],garden:["arch","mouth","windows"],florence:["arch","mouth","farDoor"]},stair:{court:["stair","arch"],street:["stair","door"],garden:["stair","mouth","windows"],florence:["stair","mouth","farDoor"]}},ef=new Float64Array(24),ia=[7,2,2],i5=0,Wa="out",Jh=!0;try{/[?&]nocull\b/.test(location.search)&&(Jh=!1)}catch(t){}var Jl={court:!0,stair:!0,street:!0,garden:!0,florence:!0,studio:!1},tf={court:!0,stair:!0,street:!0,garden:!0,florence:!0,studio:!1},n5=!0;function hk(t){let e=i=>[t[i],t[4+i],t[8+i],t[12+i]],o=e(0),r=e(1),n=e(2),a=e(3),s=(i,c,f,l)=>{for(let v=0;v<4;v++)ef[i*4+v]=c[v]+f*l[v]};s(0,a,1,o),s(1,a,-1,o),s(2,a,1,r),s(3,a,-1,r),s(4,a,1,n),s(5,a,-1,n)}function ms(t,e){if(!Jh)return!0;let o=e?-t[4]:t[1],r=e?-t[1]:t[4];for(let n=0;n<6;n++){let a=ef[n*4],s=ef[n*4+1],i=ef[n*4+2],c=ef[n*4+3],f=a>0?t[3]:t[0],l=s>0?r:o,v=i>0?t[5]:t[2];if(a*f+s*l+i*v+c<0)return!1}return!0}var Gd=(t,e)=>ia[0]>t[0]-e&&ia[0]<t[3]+e&&ia[2]>t[2]-e&&ia[2]<t[5]+e;function uk(t){if(Gd(t,.6))return null;let e=1/0,o=-1/0;for(let r=0;r<4;r++){let n=(r&1?t[3]:t[0])-ia[0],a=(r&2?t[5]:t[2])-ia[2],s=Math.atan2(n,a)-i5;s-=Math.round(s/(2*Math.PI))*2*Math.PI,e=Math.min(e,s),o=Math.max(o,s)}return o-e>Math.PI?null:[e,o]}function r5(t,e,o){let r=-Math.PI,n=Math.PI,a=s=>{let i=uk(s);return i?(r=Math.max(r,i[0]-.03),n=Math.min(n,i[1]+.03),r<=n):!0};for(let s of t){let i=s5[s];if(!Gd(i,.6)&&(!ms(i,o)||!a(i)))return!1}return ms(e,o)&&a(e)}function dk(){let t=ia[0],e=ia[2],o=Nc.BOX;return t>o[0]&&t<o[3]&&e>o[2]&&e<o[5]?"studio":t<0&&e>xn.C.z-xn.R-1.5&&t>xn.C.x-xn.R-2.6?"stair":t>14.1&&e>zn.z0-.3&&e<zn.z1+.3&&t<zn.x1+.3?"court":t>13.9&&e>K0.z0-.4&&e<K0.z1+.1&&t<K0.x1+.3?"wing":t>=0&&t<=14.1&&e>.3&&e<a5?"hall":"out"}var pk={PORTAL:s5,ROOM:ja,update(t,e,o){let r=new Array(16);for(let n=0;n<4;n++)for(let a=0;a<4;a++){let s=0;for(let i=0;i<4;i++)s+=e[i*4+a]*t[n*4+i];r[n*4+a]=s}hk(r),ia[0]=o[0],ia[1]=o[1],ia[2]=o[2],i5=Math.atan2(-t[2],-t[10]),Wa=dk();for(let n in ja){if(n==="studio"||Wa==="studio"){Jl[n]=tf[n]=n==="studio"&&Wa==="studio";continue}if(!Jh||Wa==="out"||Wa===n||Gd(ja[n],.3))Jl[n]=ms(ja[n],!1)||Wa===n,tf[n]=ms(ja[n],!0)||Wa===n;else{let a=fk[Wa][n];Jl[n]=a?r5(a,ja[n],!1):ms(ja[n],!1),tf[n]=a?r5(a,ja[n],!0):ms(ja[n],!0)}}n5=!Jh||lk.some(n=>ms(n,!1))},get zone(){return Wa},room(t,e){return e?tf[t]:Jl[t]},box(t,e,o){return o&&!(e?tf[o]:Jl[o])?!1:ms(t,e)},get floor(){return n5}};c5.exports=pk});var f5=Tt((HA,l5)=>{"use strict";var vk=Sd(),mk=t1();function gk(t){let e=new DataView(t);if(String.fromCharCode(e.getUint8(0),e.getUint8(1),e.getUint8(2),e.getUint8(3))!=="STAT")throw new Error("Not a statue file");let r=e.getUint32(4,!0),n=e.getUint32(8,!0),a=[],s=[];for(let v=0;v<3;v++)a.push(e.getFloat32(12+v*4,!0)),s.push(e.getFloat32(24+v*4,!0));let i=36,c=new Uint16Array(t,i,r*3);i+=r*6;let f=new Uint16Array(t,i,n);i+=n*2;let l=new Int8Array(t,i,r*3);return{nV:r,nI:n,mn:a,sz:s,pos:c,idx:f,nrm:l}}l5.exports=(t,e)=>{let o=[],r=[],n=[],a=[],s=null,i=e.statues.length,c=[],f=(v,u)=>{let p=o.length/3,d=u.height*.75,h=u.base!==void 0?u.base:e.pedestalTop;c.push({offset:a.length,count:v.nI,box:[u.x-d,h-.1,u.z-d,u.x+d,h+u.height+.2,u.z+d]});let g=u.height,m=Math.cos(u.yaw),x=Math.sin(u.yaw),y=u.base!==void 0?u.base:e.pedestalTop;for(let _=0;_<v.nV;_++){let M=(v.mn[0]+v.pos[_*3]/65535*v.sz[0])*g,b=(v.mn[1]+v.pos[_*3+1]/65535*v.sz[1])*g,k=(v.mn[2]+v.pos[_*3+2]/65535*v.sz[2])*g;o.push(u.x+m*M+x*k,y+b,u.z-x*M+m*k);let E=v.nrm[_*3]/127,z=v.nrm[_*3+1]/127,P=v.nrm[_*3+2]/127;r.push(m*E+x*P,z,-x*E+m*P),n.push(u.mat||1,0,0)}for(let _=0;_<v.nI;_++)a.push(p+v.idx[_])},l=()=>{a.length!==0&&(s=vk(t,{position:o,normal:r,mat:n,elements:a,lights:e.lights,get viewer(){return e.viewer}},!1,!0))};return e.statues.forEach(v=>{fetch("res/"+v.file).then(u=>{if(!u.ok)throw new Error("Could not load "+v.file);return u.arrayBuffer()}).then(u=>f(gk(u),v)).catch(u=>console.error(u)).then(()=>{--i===0&&l()})}),function(v){if(!s)return;let u=!!(v&&v.reflected),p=c.filter(d=>mk.box(d.box,u));p.length&&s(p)}}});var w5=Tt((UA,Ud)=>{"use strict";var xk=Js(),cn=1.29032,fi=[9.2968,2,5.9],yk=[[.767398,.00185,-.10827],[.010515,.769952,.087681],[-.107774,.08829,-.762374]],e1=2147.64,h5=725,u5=1288,d5=1450,p5=2576,vr=-5.197,ui=3.865,gs=10.135,di=-14.679,of=-30.229,nf=7.232,v5=-45.713,Oc=17.1*cn,hi=16.6*cn,rf=16.6*cn,m5=[6.9,17.1],o1=[2.95,16.6],bk=1.6,wk=0,_k=1,g5=2,Hd=3,x5=4,y5=5,Mk=6;function kk(){let t=[],e=[],o=[],r=[],n=xk.createBuilder(t,e,o,r),a=(f,l,v,u,p,d,h=1,g=1)=>{let m=[];for(let x=0;x<=h;x++){let y=[];for(let _=0;_<=g;_++){let M=[f[0]+l[0]*x/h+v[0]*_/g,f[1]+l[1]*x/h+v[1]*_/g,f[2]+l[2]*x/h+v[2]*_/g],b=d(M);y.push(n.vert(M,u,[p,b[0],b[1]]))}m.push(y)}for(let x=0;x<h;x++)for(let y=0;y<g;y++)n.tri(m[x][y],m[x+1][y],m[x][y+1]),n.tri(m[x+1][y],m[x+1][y+1],m[x][y+1])},s=f=>l=>[(fi[2]-l[2])/cn-f,l[1]/cn];a([-60,0,-.36],[130,0,0],[0,0,-140],[0,1,0],wk,f=>[f[0]/cn,f[2]/cn],13,14),a([ui,0,vr],[0,0,di-vr],[0,Oc,0],[1,0,0],_k,s(8.6),6,6),a([-40,0,vr],[ui+40,0,0],[0,Oc,0],[0,0,1],g5,f=>[(ui-f[0])/cn,f[1]/cn],8,4),a([-40,0,-.36],[0,0,vr+.36],[0,Oc,0],[1,0,0],g5,f=>[-f[2]/cn,f[1]/cn]),a([gs,0,-80],[0,0,vr+80],[0,hi,0],[-1,0,0],x5,s(8.6),12,6),a([gs,0,vr],[60,0,0],[0,hi,0],[0,0,1],y5,f=>[(f[0]-gs)/cn,f[1]/cn],8,4),a([70,0,vr],[0,0,-.36-vr],[0,hi,0],[-1,0,0],y5,f=>[-f[2]/cn,f[1]/cn]);let i=f=>[(f[0]-fi[0])/cn+4.18,f[1]/cn];a([-20,0,of],[nf+20,0,0],[0,rf,0],[0,0,1],Hd,i,8,6),a([nf,0,of],[0,0,v5-of],[0,rf,0],[1,0,0],Hd,s(28),4,4),a([nf,0,v5],[gs-nf,0,0],[0,hi,0],[0,0,1],x5,f=>[(f[0]-fi[0])/cn,f[1]/cn],2,4),a([-20,0,di],[0,0,of-di],[0,rf,0],[1,0,0],Hd,s(16),4,4);let c=(f,l,v,u)=>a(f,l,v,u,Mk,()=>[0,0],4,4);return c([-300,-20,-300],[600,0,0],[0,320,0],[0,0,1]),c([-300,300,-300],[600,0,0],[0,0,300],[0,-1,0]),c([-300,-20,0],[0,0,-300],[0,320,0],[1,0,0]),c([300,-20,-300],[0,0,300],[0,320,0],[-1,0,0]),{position:t,normal:e,elements:o,attr:r}}function li(t,e,o,r){let n=t.texture({data:[[r]],...o,min:"linear",mag:"linear"});return fetch(e).then(a=>{if(!a.ok)throw new Error("Could not load "+e);return a.blob()}).then(a=>createImageBitmap(a)).then(a=>{n({data:a,...o,min:"mipmap",mipmap:"nice",mag:"linear"})}).catch(a=>console.error(a)),n}var ca=t=>"vec3("+t.map(e=>e.toFixed(4)).join(", ")+")",Sk=[[[-.35,0,-.35],[14.35,9.2,50]],[[-40,0,di],[ui,Oc,vr]],[[gs,0,-80],[70,hi,vr]],[[-20,0,-80],[nf,rf,of]],[[-40,0,-80],[-20,rf,di]]],zk=Sk.map(t=>`if (hitBox(ro, rd, ${ca(t[0])}, ${ca(t[1])}, 1e4) ) return 0.0;`).join(`
		`),b5="mat3("+[0,1,2].map(t=>[0,1,2].map(e=>yk[e][t].toFixed(6)).join(", ")).join(", ")+")",Ek=`
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
	${zk}
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
	vec3 ro = ${ca(fi)};
	vec3 rd = p - ro;
	if (hitBox(ro, rd, ${ca([-40,0,di])}, ${ca([ui-.02,Oc,vr])}, 0.995)) return false;
	if (hitBox(ro, rd, ${ca([gs+.02,0,-80])}, ${ca([70,hi,vr])}, 0.995)) return false;
	return true;
}

// is this point sky in the photo? (only meaningful inside the photo)
bool photoSky(vec3 p) {
	vec3 pc = ${b5} * (p - ${ca(fi)});
	if (pc.z < 0.2) return false;
	vec2 uv = vec2(
		(${h5.toFixed(2)} + ${e1.toFixed(3)} * pc.x / pc.z) / ${d5.toFixed(1)},
		(${u5.toFixed(2)} - ${e1.toFixed(3)} * pc.y / pc.z) / ${p5.toFixed(1)}
	);
	if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) return false;
	return texture2D(photoMask, uv).r < 0.5;
}

// photo colour and how much to trust it (0..1)
vec4 photoAt(vec3 p, vec3 n, vec3 eye) {
	vec3 pc = ${b5} * (p - ${ca(fi)});
	if (pc.z < 0.2) return vec4(0.0);
	vec2 uv = vec2(
		(${h5.toFixed(2)} + ${e1.toFixed(3)} * pc.x / pc.z) / ${d5.toFixed(1)},
		(${u5.toFixed(2)} - ${e1.toFixed(3)} * pc.y / pc.z) / ${p5.toFixed(1)}
	);
	vec2 e = min(uv, 1.0 - uv);
	float w = smoothstep(0.002, 0.02, min(e.x, e.y));
	if (w <= 0.0) return vec4(0.0);
	w *= smoothstep(0.35, 0.75, texture2D(photoMask, uv).r);
	if (w <= 0.0) return vec4(0.0);
	if (!photoSees(p)) return vec4(0.0);
	// if we see this surface much more square-on than the photo did,
	// the photo would look smeared: hand over to the painted facade
	float camCos = abs(dot(normalize(p - ${ca(fi)}), n));
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
		base = texture2D(cobbleTex, fuv / ${bk.toFixed(2)}).rgb;
	} else if (kind < 2.5) {
		base = texture2D(pinkTex, vec2(fuv.x / ${m5[0].toFixed(2)}, 1.0 - fuv.y / ${m5[1].toFixed(2)})).rgb;
	} else if (kind < 3.5) {
		base = texture2D(yellowTex, vec2(fuv.x / ${o1[0].toFixed(2)}, 1.0 - fuv.y / ${o1[1].toFixed(2)})).rgb;
	} else {
		base = texture2D(creamTex, vec2(fuv.x / ${o1[0].toFixed(2)}, 1.0 - fuv.y / ${o1[1].toFixed(2)})).rgb;
	}

	// ---------- the photograph, where it can be trusted ----------
	bool projectable = kind < 0.5 || (kind > 0.5 && kind < 1.5) || (kind > 2.5 && kind < 4.5);
	if (kind < 0.5) {
		// the photo only shows ground inside the alley, or beyond its corners
		bool inAlley = v_pos.x > ${(ui-.05).toFixed(3)} && v_pos.x < ${(gs+.05).toFixed(3)};
		projectable = inAlley || v_pos.z < ${di.toFixed(3)};
		projectable = projectable && v_pos.z < ${(vr+4.5).toFixed(3)};
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
}`,Ak=`
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
}`,Tk=nn();Ud.exports=t=>{let e=kk(),o={wrapS:"clamp",wrapT:"clamp",flipY:!1},r={wrapS:"mirror",wrapT:"clamp",flipY:!1},n={wrapS:"repeat",wrapT:"repeat",flipY:!1},a=li(t,"res/street/photo.jpg",o,[190,160,120]),s=li(t,"res/street/photo_night.jpg",o,[12,14,22]),i=li(t,"res/street/photo_mask.png",o,[255,255,255]),c=li(t,"res/street/facade_pink.jpg",r,[200,150,135]),f=li(t,"res/street/facade_yellow.jpg",r,[225,180,95]),l=li(t,"res/street/facade_cream.jpg",r,[215,200,175]),v=li(t,"res/street/cobbles.jpg",n,[95,95,95]),u=Date.now(),p=t({frag:Ek,vert:Ak,attributes:{position:e.position,normal:e.normal,attr:e.attr},elements:new Uint32Array(e.elements),uniforms:{photo:a,photoMask:i,pinkTex:c,yellowTex:f,creamTex:l,cobbleTex:v,photoNight:s,night:()=>Tk.night,time:()=>(Date.now()-u)/1e3}});return function(){p()}};Ud.exports.layout={MOUTH_Z:vr,PINK_X:ui,RIGHT_X:gs,PINK_H:Oc,CREAM_H:hi,S:cn}});var k5=Tt((BA,M5)=>{"use strict";var Lk=nn().GLSL,{glassPanes:Nk}=ss(),_5=On();function Ok(){let t=[],e=[],o=(r,n)=>{for(let a of r)t.push(a),e.push(n)};return o(Nk(),[0,0,1]),o(_5.windowGlass(),[0,0,1]),o(_5.farDoorGlass(),[1,0,0]),{position:t,normal:e}}M5.exports=t=>{let e=Ok(),o=t({frag:`
		precision highp float;
		${Lk}
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
		}`,attributes:{position:e.position,normal:e.normal},count:e.position.length,cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}});return function(){o()}}});var G5=Tt((jA,Xd)=>{"use strict";var L5=nn().GLSL,Rk=Js(),Bd=qr(),{wallWithHoles:Ck,C:bs}=On(),Pe=.28,at={westBack:14.4,westCol:15-Pe,eastCol:37.4+Pe,eastBack:41.8,south:bs.z1+.7,northCol:bs.z1+.7+16,northBack:bs.z1+.7+19,cx:(15+37.4)/2,cz:(bs.z1+.7+bs.z1+.7+16-Pe)/2},n0={x0:at.westCol+Pe,x1:at.eastCol-Pe,z0:at.south,z1:at.northCol-Pe},Gn=3.3,cf=.92,ws=5.6,S5=6,Br=11.9,ys=9.6,Io={x0:at.cx-2.9,x1:at.cx+2.9,top:14.4},l1=7,N5=4,Wd=(at.eastCol-at.westCol)/l1,$k=(at.northCol-at.south)/N5,O5=3,ff=.26,gi=1.4,vi=1.1,r1=3,Sa=(()=>{let t=[.3,.82,-.49],e=Math.hypot(...t);return t.map(o=>o/e)})(),we={GROUND:0,BRICK:1,STONE:2,MARBLE:3,HEDGE:4,POT:5,ROOF:6,SHUTTER:7,PANE:8,PLASTER:9,BARK:10,IRON:11,SKY:12,LEAD:13,FARBRICK:14,DARK:15,SOIL:16},za=[],R5=(t,e,o)=>[at.cx+t,e,at.cz+o],a1=R5(-5.9,0,3.4),_s=.85,xs={c:[a1[0],4.6*_s+.5,a1[2]],r:[5*_s,3.6*_s,4.5*_s]},C5=[{d:[0,4.4,0],r:[3.9,2.6,3.6],n:230},{d:[-2.7,4,-1.2],r:[2.6,2.1,2.4],n:105},{d:[2.7,4.5,-1.6],r:[2.5,2.2,2.3],n:105},{d:[.8,6.9,.8],r:[2.6,2,2.5],n:105},{d:[-1.6,6.1,2],r:[2.2,1.9,2],n:80},{d:[2.3,3.4,1.8],r:[2,1.5,1.9],n:60}].map(t=>({c:[a1[0]+t.d[0]*_s,t.d[1]*_s+.5,a1[2]+t.d[2]*_s],r:t.r.map(e=>e*_s),n:t.n}));for(let t of C5)za.push({...t,cell:0,leaf:[.5,.7,.46],bloom:[1,1,1],size:[.95,1.35],magnolia:1,shadow:1});var Pk=[3.6,6.3,9];for(let t of Pk){let e=8.6+t%1.7*.6;za.push({c:R5(t,e/2+.5,5.2),r:[.9,e/2,.9],cell:1,leaf:[.5,.64,.5],bloom:[1,1,1],n:180,size:[.72,.98],spindle:1,shadow:1})}var Ik=[{d:[-8.4,-4],bloom:[1,.62,.78]},{d:[-3.6,-4.6],bloom:[1,.98,.94]},{d:[3.8,-4.3],bloom:[1,.98,.94]},{d:[8.5,-4],bloom:[1,.58,.72]}].map(t=>({x:at.cx+t.d[0],z:at.cz+t.d[1],bloom:t.bloom}));for(let t of Ik)za.push({c:[t.x,.95,t.z],r:[1.25,.95,1.1],cell:3,leaf:[.7,.86,.58],bloom:t.bloom,n:80,size:[.55,.8],shadow:1});var Vd=[45,135,225,315].map(t=>{let e=t*Math.PI/180;return[at.cx+Math.cos(e)*2.3,at.cz+Math.sin(e)*2.3]});for(let[t,e]of Vd)za.push({c:[t,1.85,e],r:[.62,.55,.62],cell:3,leaf:[.78,.95,.55],bloom:[1.25,1,.25],n:36,size:[.32,.42],shadow:1});var $5=[];{let t=(o,r,n,a,s,i)=>{let c=Math.hypot(n-o,a-r),f=Math.floor(c/.9);for(let l=0;l<=f;l++){let v=l/f,u=o+(n-o)*v,p=r+(a-r)*v;s!==void 0&&Math.abs((n!==o?u:p)-s)<i||$5.push([u,p])}};t(n0.x0+.45,n0.z0+1.2,n0.x0+.45,n0.z1-.45,at.cz,1),t(n0.x1-.45,n0.z0+1.2,n0.x1-.45,n0.z1-.45,at.cz,1),t(n0.x0+.45,n0.z1-.45,n0.x1-.45,n0.z1-.45,at.cx,1.9)}var qk=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],s1=t=>{let e=Math.hypot(t[0],t[1],t[2])||1;return[t[0]/e,t[1]/e,t[2]/e]};function Cc(t,e,o,r,n,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),f=t.vert(r,a,s),l=t.vert(n,a,s);t.tri(i,c,f),t.tri(i,f,l)}function ln(t,e,o,r,n,a,s,i){t.box(Math.min(e,n),Math.min(o,a),Math.min(r,s),Math.max(e,n),Math.max(o,a),Math.max(r,s),[i,0,0])}function Dk(t,e,o){return{vert:(r,n,a)=>t.vert(e(r),o(n),a),tri:t.tri}}var Fk={north:[t=>[t[0],t[1],at.northCol-t[2]],t=>[t[0],t[1],-t[2]]],west:[t=>[at.westCol+t[2],t[1],t[0]],t=>[t[2],t[1],t[0]]],east:[t=>[at.eastCol-t[2],t[1],t[0]],t=>[-t[2],t[1],t[0]]]};function P5(t,e,o,r,n){let a=[];for(let s=0;s<o;s++){let i=t+s*e+(s===0?r:.02),c=t+(s+1)*e-(s===o-1?n:.02);a.push([i,c,t+(s+.5)*e])}return a}var Gk=P5(at.westCol,Wd,l1,Pe+ff,Pe+ff),z5=P5(at.south,$k,N5,.32,Pe+ff),Rc=[at.cx-32.35,at.northCol-77],Hk=Array.from({length:l1-1},(t,e)=>at.westCol+(e+1)*Wd),I5=t=>(t[1]-t[0])/2-.2,lf=t=>(t[0]+t[1])/2;function Uk(t,e){let o=lf(t),r=I5(t);return{u0:t[0],u1:t[1],bottom:e?0:cf,head:n=>{let a=Math.abs(n-o);return a<r?Gn+Math.sqrt(r*r-a*a):Gn},step:.05}}function Bk(t,e,o){return{u0:t-o,u1:t+o,bot:r=>e-Math.sqrt(Math.max(0,o*o-(r-t)*(r-t))),head:r=>e+Math.sqrt(Math.max(0,o*o-(r-t)*(r-t))),step:.04,mat:[we.STONE,0,0]}}function jk(t,e,o,r){return{u0:t-e/2,u1:t+e/2,bottom:o,head:()=>r,step:.5,mat:[we.STONE,0,0]}}function E5(t,e,o){let[r,n]=Fk[e],a=Dk(t,r,n),s=[];o.arches.forEach((l,v)=>s.push(Uk(l,v===o.open)));let i=[];for(let l of o.bays||o.arches){let v=lf(l);o.oculi&&s.push(Bk(v,6.85,.3)),i.push({c:v,y0:o.win[0],y1:o.win[1],w:1.05})}for(let l of o.extraWindows||[])i.push(l);for(let l of i)s.push(jk(l.c,l.w,l.y0,l.y1));for(let l of o.extraHoles||[])s.push(l);Ck(a,{u0:o.u0,u1:o.u1,w0:-Pe,w1:Pe,top:o.top,holes:s,mat:[we.BRICK,0,0],revealMat:[we.BRICK,0,0],noEnds:o.noEnds,cuts:o.cuts,topStep:.25});let c=(l,v,u,p,d,h,g)=>{let m=r([l,v,u]),x=r([p,d,h]);ln(t,m[0],m[1],m[2],x[0],x[1],x[2],g)},f=(l,v,u,p,d,h)=>Cc(a,l,v,u,p,d,[h,0,0]);for(let l of o.arches){let v=lf(l),u=I5(l),p=28;for(let d of[Pe,-Pe]){let h=d>0?1:-1,g=d+h*.025;for(let m=0;m<p;m++){let x=Math.PI*m/p,y=Math.PI*(m+1)/p,_=(R,B)=>[v+Math.cos(R)*B,Gn+Math.sin(R)*B],M=_(x,u),b=_(y,u),k=_(x,u+.26),E=_(y,u+.26);f([M[0],M[1],g],[b[0],b[1],g],[E[0],E[1],g],[k[0],k[1],g],[0,0,h],we.STONE);let z=Math.cos((x+y)/2),P=Math.sin((x+y)/2);f([k[0],k[1],d],[E[0],E[1],d],[E[0],E[1],g],[k[0],k[1],g],[z,P,0],we.STONE)}}}if(o.arches.forEach((l,v)=>{v!==o.open&&c(l[0]-.02,cf,-Pe-.05,l[1]+.02,cf+.09,Pe+.05,we.STONE)}),c(o.u0,S5,-Pe,o.u1,S5+.18,Pe+.09,we.STONE),c(o.u0,o.win[0]-.12,Pe-.01,o.u1,o.win[0],Pe+.06,we.STONE),o.cornice)for(let[l,v,u]of o.cornice)c(l,u-.22,Pe-.01,v,u,Pe+.16,we.STONE),c(l,u,Pe-.01,v,u+.16,Pe+.42,we.STONE);for(let{c:l,y0:v,y1:u,w:p,door:d}of i){let h=p/2;if(f([l-h-.01,v,.06],[l+h+.01,v,.06],[l+h+.01,u,.06],[l-h-.01,u,.06],[0,0,1],d?we.DARK:we.PANE),d){c(l-h-.16,0,Pe-.01,l-h,u+.16,Pe+.07,we.STONE),c(l+h,0,Pe-.01,l+h+.16,u+.16,Pe+.07,we.STONE),c(l-h-.16,u,Pe-.01,l+h+.16,u+.2,Pe+.09,we.STONE),c(l-h,0,.07,l+h,u-.02,.12,we.SHUTTER),c(l-.012,0,.12,l+.012,u-.02,.14,we.DARK);continue}for(let g of[-1,1]){let m=l+g*h;c(m+g*.02,v+.02,Pe+.02,m+g*(h+.025),u-.02,Pe+.06,we.SHUTTER)}c(l-h-.09,u,Pe-.01,l+h+.09,u+.16,Pe+.05,we.STONE),c(l-h-.09,v-.1,Pe-.01,l+h+.09,v,Pe+.09,we.STONE),c(l-.015,v,.06,l+.015,u,.09,we.SHUTTER),c(l-h,(v+u)/2-.015,.06,l+h,(v+u)/2+.015,.09,we.SHUTTER)}if(o.oculi)for(let l of o.bays||o.arches){let v=lf(l);f([v-.31,6.54,0],[v+.31,6.54,0],[v+.31,7.16,0],[v-.31,7.16,0],[0,0,1],we.DARK)}for(let l of o.cols){let v=cf+.09,u=r([l,0,0]);ln(t,u[0]-.24,v,u[2]-.24,u[0]+.24,v+.12,u[2]+.24,we.MARBLE),t.lathe([[.23,v+.12,1],[.24,v+.17],[.2,v+.24],[.215,v+.28],[.17,v+.34,1],[.165,v+.6],[.155,Gn-.5],[.15,Gn-.38,1],[.175,Gn-.34,1],[.17,Gn-.3],[.2,Gn-.22],[.27,Gn-.15],[.29,Gn-.12,1]],u[0],u[2],18,{mat:()=>[we.MARBLE,0,0]}),ln(t,u[0]-.29,Gn-.12,u[2]-.29,u[0]+.29,Gn+.01,u[2]+.29,we.STONE)}o.walk&&o.walk(t)}function Wk(t){let e=[-1,0,1].map(n=>{let a=at.cx+n*1.7;return{u0:a-.6,u1:a+.6,bottom:11,head:s=>12.9+Math.sqrt(Math.max(0,.36-(s-a)*(s-a))),step:.04,mat:[we.STONE,0,0]}});E5(t,"north",{u0:at.westCol-Pe,u1:at.eastCol+Pe,top:n=>n>Io.x0+1e-6&&n<Io.x1-1e-6?Io.top:Br,cuts:[Io.x0,Io.x0+1e-5,Io.x1-1e-5,Io.x1],arches:Gk,open:O5,cols:Hk,oculi:!0,win:[8,9.9],extraHoles:e,cornice:[[at.westCol-Pe-3.3,Io.x0,Br],[Io.x1,at.eastCol+Pe+3.3,Br],[Io.x0-.2,Io.x1+.2,Io.top]],walk:n=>{ln(n,n0.x0,ws,at.northCol+Pe,n0.x1,ws+.2,at.northBack,we.PLASTER),ln(n,n0.x0,0,at.northBack,n0.x1,ws,at.northBack+.3,we.PLASTER);for(let a of[at.cx-7.2,at.cx,at.cx+7.2])Cc(n,[a-.8,0,at.northBack-.01],[a+.8,0,at.northBack-.01],[a+.8,2.9,at.northBack-.01],[a-.8,2.9,at.northBack-.01],[0,0,-1],[we.DARK,0,0]),ln(n,a-.98,0,at.northBack-.06,a+.98,3.12,at.northBack,we.STONE),Cc(n,[a-.8,0,at.northBack-.07],[a+.8,0,at.northBack-.07],[a+.8,2.9,at.northBack-.07],[a-.8,2.9,at.northBack-.07],[0,0,-1],[we.DARK,0,0])}}),Cc(t,[Io.x0,11,at.northCol+.2],[Io.x1,11,at.northCol+.2],[Io.x1,13.6,at.northCol+.2],[Io.x0,13.6,at.northCol+.2],[0,0,-1],[we.DARK,0,0]),ln(t,Io.x0+.3,10.88,at.northCol-Pe-.06,Io.x1-.3,11,at.northCol-Pe+.1,we.STONE),ln(t,at.westBack,ws+.2,at.northBack,at.eastBack,Br,at.northBack+3.4,we.BRICK),ln(t,at.westBack,ys,at.northCol-Pe,at.westCol-Pe,Br,at.northCol+Pe,we.BRICK),ln(t,at.eastCol+Pe,ys,at.northCol-Pe,at.eastBack,Br,at.northCol+Pe,we.BRICK),ln(t,at.westBack,ws+.2,at.northCol+Pe+.12,at.eastBack,Br,at.northBack,we.BRICK),af(t,[at.westBack-.5,Br+.16,at.northCol-Pe-.42],[Io.x0-at.westBack+.5,0,0],[0,2.6,4.4],we.ROOF),af(t,[Io.x1,Br+.16,at.northCol-Pe-.42],[at.eastBack+.5-Io.x1,0,0],[0,2.6,4.4],we.ROOF),af(t,[Io.x0-.3,Io.top+.16,at.northCol-Pe-.42],[Io.x1-Io.x0+.6,0,0],[0,1.4,3],we.ROOF),A5(t,[Io.x0-.3,Io.top+.16,at.northCol-Pe-.42],[Io.x0-.3,Io.top+1.56,at.northCol-Pe+2.58],[Io.x0-.3,Io.top+.16,at.northCol-Pe+2.58],[-1,0,0],we.BRICK),A5(t,[Io.x1+.3,Io.top+.16,at.northCol-Pe-.42],[Io.x1+.3,Io.top+1.56,at.northCol-Pe+2.58],[Io.x1+.3,Io.top+.16,at.northCol-Pe+2.58],[1,0,0],we.BRICK),ln(t,Io.x0,Br,at.northCol+Pe,Io.x1,Io.top,at.northCol+2.6,we.BRICK);for(let[n,a]of[[at.cx-9.8,at.northBack+.6],[at.cx+9.4,at.northBack+.4],[at.cx-4.6,at.northBack+1]])ln(t,n-.4,12.5,a-.4,n+.4,15.4,a+.4,we.BRICK),ln(t,n-.52,15.4,a-.52,n+.52,15.62,a+.52,we.STONE);let o=(n,a,s)=>{let i=n==="west"?-1:1,c=[];z5.forEach((v,u)=>{let p=lf(v);u===1?c.push({c:p,y0:0,y1:2.9,w:1.4,door:!0}):c.push({c:p,y0:1,y1:2.75,w:1.05}),c.push({c:p,y0:3.85,y1:5.45,w:1.05})}),E5(t,n,{u0:at.south,u1:at.northCol-Pe,top:()=>ys,arches:[],bays:z5,cols:[],win:[7.45,8.85],extraWindows:c,noEnds:!0,cornice:[[at.south,at.northCol-Pe,ys]]}),ln(t,a,0,at.south,s+i*(Pe+.12),ys,at.northBack+.3,we.BRICK);let f=s-i*Pe;ln(t,f,0,at.south,f-i*.06,.55,at.northCol-Pe,we.STONE);let l=s-i*(Pe+.42);af(t,[l,ys+.16,at.south],[0,0,at.northCol-Pe-at.south],[a-l+i*.4,1.9,0],we.ROOF)};o("west",at.westBack,at.westCol),o("east",at.eastBack,at.eastCol);let r=bs.x1+.7;ln(t,13.65,7.4,at.south-.02,r,7.62,at.south+.14,we.STONE),ln(t,13.65,10.4,at.south-.02,r,10.6,at.south+.38,we.STONE),af(t,[13.65,10.6,at.south+.38],[r-13.65,0,0],[0,2.2,-5],we.ROOF)}function A5(t,e,o,r,n,a){let s=[a,0,0];t.tri(t.vert(e,n,s),t.vert(o,n,s),t.vert(r,n,s))}function af(t,e,o,r,n){let a=s1([o[1]*r[2]-o[2]*r[1],o[2]*r[0]-o[0]*r[2],o[0]*r[1]-o[1]*r[0]]),s=a[1]<0?a.map(f=>-f):a,i=(f,l)=>[e[0]+o[0]*f+r[0]*l,e[1]+o[1]*f+r[1]*l,e[2]+o[2]*f+r[2]*l];Cc(t,i(0,0),i(1,0),i(1,1),i(0,1),s,[n,0,0]);let c=.08;Cc(t,i(0,0),i(1,0),[i(1,0)[0],i(1,0)[1]-c,i(1,0)[2]],[i(0,0)[0],i(0,0)[1]-c,i(0,0)[2]],s1([-r[0],0,-r[2]]),[n,0,0])}function Vk(t){let e=at.westBack,o=at.eastBack,r=at.south,n=at.northBack,a=36,s=22,i=[];for(let c=0;c<=a;c++){i.push([]);for(let f=0;f<=s;f++){let l=[e+(o-e)*c/a,0,r+(n-r)*f/s];i[c].push(t.vert(l,[0,1,0],[we.GROUND,0,0]))}}for(let c=0;c<a;c++)for(let f=0;f<s;f++)t.tri(i[c][f],i[c+1][f],i[c+1][f+1]),t.tri(i[c][f],i[c+1][f+1],i[c][f+1])}var sf=.46,mi=.58,pi=[[-.5,0],[-.52,.45],[-.46,.78],[-.3,.95],[0,1],[.3,.95],[.46,.78],[.52,.45],[.5,0]];function Xk(t,e,o){let r=vi+o,n=(t>0?n0.x1-at.cx:at.cx-n0.x0)-gi-o,a=vi+o,s=(e>0?n0.z1-at.cz:at.cz-n0.z0)-gi-o,i=r1+o,c=Math.sqrt(i*i-r*r),f=Math.sqrt(i*i-a*a),l=[[r,c],[r,s],[n,s],[n,a],[f,a]],v=Math.atan2(a,f),u=Math.atan2(c,r);for(let p=1;p<10;p++){let d=v+(u-v)*p/10;l.push([Math.cos(d)*i,Math.sin(d)*i])}return l.map(([p,d])=>[at.cx+t*p,at.cz+e*d])}function Yk(t,e,o){let r=o[0]-e[0],n=o[1]-e[1],a=Math.hypot(r,n),s=r/a,i=n/a,c=-i,f=s,l=sf*.5,v=-l,u=a+l,p=[],d=Math.max(1,Math.ceil((u-v)/1));for(let h=0;h<=d;h++){let g=v+(u-v)*h/d,m=[];for(let x=0;x<pi.length;x++){let[y,_]=pi[x],M=Math.min(pi.length-2,x),b=pi[Math.max(0,x-1)],k=pi[Math.min(pi.length-1,x+1)],E=(k[0]-b[0])*sf,P=(k[1]-b[1])*mi,R=-E,B=Math.hypot(P,R)||1,$=[e[0]+s*g+c*y*sf,_*mi,e[1]+i*g+f*y*sf],D=[c*(-P/B),-R/B,f*(-P/B)];m.push(t.vert($,D[1]<-.2?[c*Math.sign(y),.3,f*Math.sign(y)]:D,[we.HEDGE,0,0]))}p.push(m)}for(let h=0;h<d;h++)for(let g=0;g<pi.length-1;g++)t.tri(p[h][g],p[h+1][g],p[h+1][g+1]),t.tri(p[h][g],p[h+1][g+1],p[h][g+1]);for(let[h,g]of[[0,-1],[d,1]]){let m=p[h],x=t.vert([e[0]+s*(h?u:v),mi*.5,e[1]+i*(h?u:v)],[s*g,0,i*g],[we.HEDGE,0,0]);for(let y=0;y<m.length-1;y++)t.tri(x,m[y],m[y+1])}}function Kk(t){for(let e of[-1,1])for(let o of[-1,1]){let r=Xk(e,o,.3);for(let n=0;n<r.length;n++)Yk(t,r[n],r[(n+1)%r.length])}}function Zk(t){let e=at.cx,o=at.cz,r=()=>[we.STONE,0,0];t.lathe([[1.45,0,1],[1.45,.14,1],[1.12,.14,1],[1.12,.3,1],[0,.3]],e,o,8,{mat:r}),t.lathe([[.76,.3,1],[.8,.38,1],[.74,.44],[.76,.7],[.82,.9],[.8,1.02,1],[.88,1.06,1],[.88,1.18,1],[.6,1.18,1],[.6,.98]],e,o,24,{mat:r}),t.lathe([[.6,.98,1],[0,.98]],e,o,16,{mat:()=>[we.DARK,0,0]});let n={mat:()=>[we.IRON,0,0]};t.tube([[e-.72,1.1,o],[e-.72,1.9,o],[e-.7,2.3,o]],()=>.035,8,6,n),t.tube([[e+.72,1.1,o],[e+.72,1.9,o],[e+.7,2.3,o]],()=>.035,8,6,n);let a=[];for(let s=0;s<=10;s++){let i=Math.PI*s/10;a.push([e-Math.cos(i)*.7,2.3+Math.sin(i)*.45,o])}t.tube(a,()=>.03,20,6,n),t.tube([[e-.45,2.25,o],[e,2.38,o],[e+.45,2.25,o]],()=>.02,8,5,n),t.ellipsoid([e,2.32,o],[.03,.13,.13],6,10,n);for(let s of[-1,1]){let i=[];for(let c=0;c<=12;c++){let f=c/12*Math.PI*1.6,l=.16*(1-c/16);i.push([e+s*(.72-.18+Math.cos(f)*l*s*-1+0),1.95+Math.sin(f)*l,o])}t.tube(i,()=>.016,16,5,n)}}function Qk(t){for(let[e,o]of Vd)t.lathe([[.26,0,1],[.3,.06],[.36,.42],[.38,.5,1],[.44,.52,1],[.44,.64,1],[.38,.66,1],[.37,.6]],e,o,20,{mat:()=>[we.POT,0,0]}),t.lathe([[.37,.6,1],[0,.6]],e,o,12,{mat:()=>[we.SOIL,0,0]}),t.tube([[e,.6,o],[e+.02,1,o-.01],[e-.01,1.45,o+.02]],r=>.045-r*.02,6,6,{mat:()=>[we.BARK,0,0]})}function Jk(t){let[e,,o]=xs.c,r=D5(7),n=[[-1.8,.4,3.6],[1.6,-.9,3.9],[.4,1.9,3.4],[-.6,-1.7,4.2],[2.1,1.2,3.2]];for(let[a,s,i]of n){let c=[[e+a*.05,0,o+s*.05],[e+a*.25,i*.35,o+s*.25],[e+a*.6,i*.7,o+s*.6],[e+a,i,o+s],[e+a*1.35+(r()-.5),i+1.4,o+s*1.35+(r()-.5)]];t.tube(c,f=>.2*(1-f*.75),14,9,{mat:()=>[we.BARK,0,0]});for(let f=0;f<2;f++){let l=.55+f*.2,v=[e+a*l,i*l,o+s*l],u=r()*Math.PI*2;t.tube([v,[v[0]+Math.cos(u)*1.3,v[1]+.9,v[2]+Math.sin(u)*1.3],[v[0]+Math.cos(u)*2.3,v[1]+1.4+r(),v[2]+Math.sin(u)*2.3]],p=>.08*(1-p*.7),8,6,{mat:()=>[we.BARK,0,0]})}}for(let a of za.filter(s=>s.spindle))t.tube([[a.c[0],0,a.c[2]],[a.c[0],1.4,a.c[2]]],()=>.12,3,7,{mat:()=>[we.BARK,0,0]})}function tS(t){let e=()=>[we.FARBRICK,0,0],o=()=>[we.LEAD,0,0],r=(a,s,i,c,f,l)=>{t.lathe([[i+.3,20,1],[i+.3,c-1.2,1],[i+.8,c-.9,1],[i+.8,c,1],[i,c,1]],a,s,28,{mat:e});let v=[];for(let p=0;p<=12;p++){let d=p/12*Math.PI/2,h=Math.cos(d)*i,g=Math.sin(d)*f;l&&(h*=1-.18*Math.sin(d*2)),v.push([Math.max(h,i*.12),c+g])}t.lathe(v,a,s,28,{mat:o});let u=c+f;t.lathe([[i*.13,u-.2,1],[i*.13,u+3,1],[i*.18,u+3.2,1],[i*.02,u+6.4]],a,s,10,{mat:o})};ln(t,14,0,104,52,26,150,we.FARBRICK),t.lathe([[3,26],[.1,32]],33,108,4,{mat:e}),r(26,124,7.2,33,9.5,!0),r(40.5,116,6,31,8,!0),r(16.5,117,5.5,30,7.2,!0),t.lathe([[6.4,20,1],[6.4,34,1],[6.9,34.4,1],[6,34.4,1],[.6,46.5,1],[.15,50]],33,132,24,{mat:o});let n=(a,s,i)=>{ln(t,a-1.8,0,s-1.8,a+1.8,i,s+1.8,we.FARBRICK),t.lathe([[1.9,i,1],[1.6,i+3.5,1],[1.2,i+3.5,1],[1.2,i+6,1],[.9,i+6.2,1],[.05,i+13]],a,s,8,{mat:e})};n(20.5,109,36),n(46.5,112,38)}function eS(t){let o=[at.cx,0,at.cz],r=24,n=10,a=[];for(let s=0;s<=r;s++){a.push([]);let i=-Math.PI*.62+Math.PI*1.24*s/r;for(let c=0;c<=n;c++){let f=Math.PI/2*(c/n)-.05,l=[Math.sin(i)*Math.cos(f),Math.sin(f),Math.cos(i)*Math.cos(f)],v=[o[0]+l[0]*420,o[1]+l[1]*420,o[2]+l[2]*420];a[s].push(t.vert(v,[-l[0],-l[1],-l[2]],[we.SKY,0,0]))}}for(let s=0;s<r;s++)for(let i=0;i<n;i++)t.tri(a[s][i],a[s+1][i],a[s+1][i+1]),t.tri(a[s][i],a[s+1][i+1],a[s][i+1])}function oS(){let t=[],e=[],o=[],r=[],n=Rk.createBuilder(t,e,o,r);return Vk(n),Wk(n),Kk(n),Zk(n),Qk(n),Jk(n),n.save(),n.translate(Rc[0],0,Rc[1]),tS(n),n.restore(),eS(n),{position:t,normal:e,elements:o,attr:r}}var q5=[[[13.65,0,bs.z0-.7],[bs.x1+.7,10.6,at.south]],[[at.westBack,ws,at.northCol-Pe],[at.eastBack,Br,at.northBack+3.4]],[[Io.x0,Br,at.northCol-Pe],[Io.x1,Io.top,at.northCol+2.6]],[[at.westBack,0,at.south],[at.westCol+Pe,ys,at.northBack+.3]],[[at.eastCol-Pe,0,at.south],[at.eastBack,ys,at.northBack+.3]],[[14+Rc[0],0,104+Rc[1]],[52+Rc[0],26,150+Rc[1]]]];function nS(t,e,o,r){let n=.001,a=1e9;for(let s=0;s<3;s++){if(Math.abs(e[s])<1e-9){if(t[s]<o[s]||t[s]>r[s])return!1;continue}let i=(o[s]-t[s])/e[s],c=(r[s]-t[s])/e[s];if(i>c&&([i,c]=[c,i]),n=Math.max(n,i),a=Math.min(a,c),n>a)return!1}return!0}function n1(t,e,o,r){let n=[(t[0]-o[0])/r[0],(t[1]-o[1])/r[1],(t[2]-o[2])/r[2]],a=[e[0]/r[0],e[1]/r[1],e[2]/r[2]],s=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],i=n[0]*a[0]+n[1]*a[1]+n[2]*a[2],c=n[0]*n[0]+n[1]*n[1]+n[2]*n[2]-1,f=i*i-s*c;if(f<=0)return 0;let l=Math.sqrt(f),v=Math.max(0,(-i-l)/s),u=(-i+l)/s;return Math.max(0,u-v)}function jd(t){for(let[e,o]of q5)if(nS(t,Sa,e,o))return 0;return 1}function D5(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let o=e;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}function rS(){let t=[],e=[],o=[],r=[],n=[],a=[],s=[],i=D5(21),c=(d,h,g,m,x,y,_)=>{let M=t.length/3;for(let[b,k]of[[-1,-1],[1,-1],[1,1],[-1,1]])t.push(...d),e.push(b,k),o.push(h,g,m),r.push(...x),n.push(...y),a.push(..._);s.push(M,M+1,M+2,M,M+2,M+3)},f=(d,h)=>{let g=1;for(let m of za){if(m===h||!m.shadow)continue;let x=n1(d,Sa,m.c,m.r);x>0&&(g*=Math.exp(-x*.9))}return g},l=za.map(d=>({...d,pts:null}));for(let d of l)for(let h=0;h<d.n;h++){let g;do g=[i()*2-1,i()*2-1,i()*2-1];while(g[0]*g[0]+g[1]*g[1]+g[2]*g[2]>1);let m=Math.hypot(g[0],g[1],g[2])||1,x=Math.pow(i(),.35)*.98,y=[g[0]/m*x,g[1]/m*x,g[2]/m*x];if(d.spindle){let $=y[1],D=Math.sqrt(Math.max(.02,1-$*$))*($>0?1-$*.55:1+$*.25),it=Math.hypot(y[0],y[2])||1,St=D*Math.min(1,it*1.4);y=[y[0]/it*St,$,y[2]/it*St]}d.magnolia&&y[1]<-.55&&(y[1]=-.55+(y[1]+.55)*.35);let _=[d.c[0]+y[0]*d.r[0],d.c[1]+y[1]*d.r[1],d.c[2]+y[2]*d.r[2]],M,b;if(d.magnolia){let $=0;for(let St of C5)$=Math.max($,n1(_,Sa,St.c,St.r));M=Math.exp(-$*1.1);let D=1;for(let St of za)if(!St.magnolia&&St.shadow){let yt=n1(_,Sa,St.c,St.r);yt>0&&(D*=Math.exp(-yt*.9))}M*=jd(_)*D;let it=qk(_,xs.c);b=s1([it[0]/xs.r[0]+y[0]*.5,it[1]/xs.r[1]+y[1]*.5,it[2]/xs.r[2]+y[2]*.5]),x=Math.min(1,Math.hypot(it[0]/xs.r[0],it[1]/xs.r[1],it[2]/xs.r[2])*.6+x*.4)}else{let $=n1(_,Sa,d.c,d.r);M=Math.exp(-$*(d.spindle?2.2:1.25)),M*=jd(_)*f(_,za[l.indexOf(d)]),b=s1([y[0]/d.r[0],y[1]/d.r[1],y[2]/d.r[2]])}let k=Math.max(0,b[0]*Sa[0]+b[1]*Sa[1]+b[2]*Sa[2]),E=.25+.75*Math.pow(x,1.5)*(.65+.35*(b[1]*.5+.5)),z=d.size[0]+(d.size[1]-d.size[0])*i(),P=.85+i()*.3,R=d.leaf.map($=>$*P),B=d.cell;d.cell===3&&i()<.35&&(B=2),c(_,z,B,i()*Math.PI*2,[M,E,.35+.65*k],R,d.bloom)}for(let[d,h]of $5){let g=i()<.5;for(let m=0;m<3;m++){let x=[d+(i()-.5)*.7,.28+i()*.22,h+(i()-.5)*.5],y=jd(x)*f(x,null);c(x,.32+i()*.12,i()<.7?3:2,i()*6.28,[y,.6+i()*.3,.8],[.75,.9,.6],g?[1,.55,.75]:[.85,.8,1.15])}}let v=s.length/6,u=Array.from({length:v},(d,h)=>h);for(let d=v-1;d>0;d--){let h=Math.floor(i()*(d+1));[u[d],u[h]]=[u[h],u[d]]}let p=[];for(let d of u)for(let h=0;h<6;h++)p.push(s[d*6+h]);return{center:t,corner:e,par:o,light:r,tint:n,bloom:a,elements:p}}var Ce=t=>t.toFixed(4),hf=t=>`vec3(${Ce(t[0])}, ${Ce(t[1])}, ${Ce(t[2])})`,F5=`
const vec3 SUN = ${hf(Sa)};
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
`,aS=q5.map(([t,e])=>`if (hitBox(ro, SUN, ${hf(t)}, ${hf(e)})) return 0.0;`).join(`
	`),sS=za.filter(t=>t.shadow).map(t=>`tr *= crownShade(ro, ${hf(t.c)}, ${hf(t.r)}, ${t.spindle?"1.8":"1.0"});`).join(`
	`),iS=(t,e,o,r,n,a,s,i,c)=>`
	{
		float t = (${Ce(e)} - ro.${t}) / SUN.${t};
		if (t > 0.0) {
			vec3 q = ro + SUN * t;
			float u = q.${t==="z"?"x":"z"};
			if (q.y < ${Ce(ws)} && u > ${Ce(o-Pe)} && u < ${Ce(o+r*n+Pe)}) {
				float k = floor((u - ${Ce(o)}) / ${Ce(r)});
				float a = ${Ce(o)} + k * ${Ce(r)} + (k < 0.5 ? ${Ce(a)} : 0.02);
				float b = ${Ce(o)} + (k + 1.0) * ${Ce(r)} - (k > ${Ce(n-1.5)} ? ${Ce(s)} : 0.02);
				float c = 0.5 * (a + b), r = 0.5 * (b - a) - 0.2;
				float d = abs(u - c);
				float sill = abs(k - ${Ce(i)}) < 0.5 ? 0.0 : ${Ce(cf+.09)};
				bool hole = (q.y > sill && q.y < ${Ce(Gn)} && u > a && u < b && d < 0.5 * (b - a) - 0.17)
					|| (q.y >= ${Ce(Gn)} && d * d + (q.y - ${Ce(Gn)}) * (q.y - ${Ce(Gn)}) < r * r);
				if (!hole && ${c}) return 0.0;
			}
		}
	}`,i1=vi+.3,c1=vi+.3,uf=r1+.3,T5=n0.x1-at.cx-gi-.3,cS=n0.z1-at.cz-gi-.3,lS=at.cz-n0.z0-gi-.3,fS=Math.sqrt(uf*uf-i1*i1),hS=Math.sqrt(uf*uf-c1*c1),uS=[[at.cx,at.cz,.86,1.18],[at.cx,at.cz,1.25,.3],...Vd.map(([t,e])=>[t,e,.42,.65])].map(([t,e,o,r])=>`if (hitCyl(ro, vec2(${Ce(t)}, ${Ce(e)}), ${Ce(o)}, ${Ce(r)})) return 0.0;`).join(`
	`),dS=`
float segDist(vec2 p, vec2 a, vec2 b) {
	vec2 pa = p - a, ba = b - a;
	float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
	return length(pa - ba * h);
}

// distance to the nearest hedge line
float hedgeDist(vec2 xz) {
	vec2 q = abs(xz - vec2(${Ce(at.cx)}, ${Ce(at.cz)}));
	float b1 = xz.y > ${Ce(at.cz)} ? ${Ce(cS)} : ${Ce(lS)};
	vec2 A = vec2(${Ce(i1)}, ${Ce(fS)}), Bp = vec2(${Ce(i1)}, b1), C = vec2(${Ce(T5)}, b1);
	vec2 D = vec2(${Ce(T5)}, ${Ce(c1)}), E = vec2(${Ce(hS)}, ${Ce(c1)});
	float d = min(min(segDist(q, A, Bp), segDist(q, Bp, C)), min(segDist(q, C, D), segDist(q, D, E)));
	float ang = atan(q.y, q.x);
	if (ang > atan(E.y, E.x) && ang < atan(A.y, A.x)) d = min(d, abs(length(q) - ${Ce(uf)}));
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
	${aS}
	${iS("z",at.northCol,at.westCol,Wd,l1,Pe+ff,Pe+ff,O5,"ro.z > "+Ce(at.northCol-Pe))}
	// on lighter settings only the buildings cast shadows
	if (gardenDetail < 0.5) return 1.0;
	${uS}
	if (ro.y < ${Ce(mi)} && ro.x > ${Ce(n0.x0)} && ro.x < ${Ce(n0.x1)}) {
		for (int i = 1; i <= 4; i++) {
			float t = float(i) / 4.0 * (${Ce(mi)} - ro.y) / SUN.y;
			vec3 q = ro + SUN * t;
			float w = ${Ce(sf*.5)} * sqrt(max(0.0, 1.0 - pow(q.y / ${Ce(mi)}, 4.0)));
			if (hedgeDist(q.xz) < w) return 0.0;
		}
	}
	float tr = 1.0;
	${sS}
	return tr;
}
`,pS=`
precision highp float;
${L5}
varying vec3 v_pos, v_normal, v_attr, v_eye;
uniform float time, gardenDetail;
${F5}
${dS}

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

	if (kind == ${we.SKY}.0) {
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

	if (kind == ${we.GROUND}.0) {
		bool yard = P.x > ${Ce(n0.x0)} && P.x < ${Ce(n0.x1)} && P.z < ${Ce(n0.z1)};
		if (!yard) {
			// stone slabs under the arcades
			vec2 g = P.xz / 0.62;
			vec2 fg = fract(g);
			float h = hash(floor(g));
			base = mix(vec3(0.66, 0.60, 0.52), vec3(0.76, 0.70, 0.62), h);
			base *= 1.0 - 0.25 * (step(fg.x, 0.03) + step(fg.y, 0.03)) * (1.0 - lod);
			spec = 0.15;
		} else {
			float ex = min(P.x - ${Ce(n0.x0)}, ${Ce(n0.x1)} - P.x);
			float ez = min(P.z - ${Ce(n0.z0)}, ${Ce(n0.z1)} - P.z);
			float edge = min(ex, ez);
			float dx = abs(P.x - ${Ce(at.cx)}), dz = abs(P.z - ${Ce(at.cz)});
			float rc = length(vec2(dx, dz));
			if (edge < ${Ce(gi)}) {
				// brick path laid in rows, with a stone kerb
				vec2 q = ex < ez ? P.zx : P.xz;
				base = brick(q * vec2(1.0, 2.6), 0.4) * 0.9;
				if (abs(edge - ${Ce(gi)}) < 0.08) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (rc < ${Ce(r1)}) {
				// brick in rings round the wellhead
				float ang = atan(P.z - ${Ce(at.cz)}, P.x - ${Ce(at.cx)});
				vec2 q = vec2(ang * rc, rc);
				base = brick(q * vec2(1.0, 2.6), 0.5) * 0.92;
				if (abs(rc - ${Ce(r1)}) < 0.1) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (dx < ${Ce(vi)} || dz < ${Ce(vi)}) {
				// pale gravel
				float g = noise(P.xz * 40.0) * 0.6 + noise(P.xz * 9.0) * 0.4;
				base = mix(vec3(0.66, 0.58, 0.46), vec3(0.86, 0.79, 0.66), mix(g, 0.5, lod));
				base *= 0.94 + 0.12 * noise(P.xz * 1.3);
				float e = min(${Ce(vi)} - min(dx, dz), 1.0);
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
			ao *= 0.6 + 0.4 * smoothstep(0.85, 1.6, length(P.xz - vec2(${Ce(at.cx)}, ${Ce(at.cz)})));
		}
	} else if (kind == ${we.BRICK}.0) {
		float pink = smoothstep(0.4, 0.6, noise(wq * 0.05 + 7.0));
		base = mix(brick(wq, 0.25 * pink), vec3(0.68, 0.46, 0.33), lod * 0.6);
		base *= 1.0 - 0.18 * smoothstep(0.0, 1.5, 1.6 - P.y) * noise(wq * 1.5);
		ao *= 0.78 + 0.22 * smoothstep(0.0, 1.2, P.y);
	} else if (kind == ${we.STONE}.0) {
		float n = noise(wq * 3.0) * 0.5 + noise(wq * 0.7) * 0.5;
		base = mix(vec3(0.74, 0.70, 0.62), vec3(0.86, 0.83, 0.76), n);
		spec = 0.1;
	} else if (kind == ${we.MARBLE}.0) {
		// red Verona marble
		float n = noise3(P * vec3(5.0, 1.5, 5.0)) * 0.6 + noise3(P * 14.0) * 0.4;
		base = mix(vec3(0.56, 0.32, 0.25), vec3(0.68, 0.42, 0.33), n);
		base = mix(base, vec3(0.80, 0.66, 0.56), smoothstep(0.66, 0.74, noise3(P * 9.0 + 3.0)) * 0.35);
		spec = 0.35;
	} else if (kind == ${we.HEDGE}.0) {
		float n = noise3(P * 9.0) * 0.55 + noise3(P * 2.5) * 0.45;
		base = mix(vec3(0.05, 0.16, 0.04), vec3(0.22, 0.38, 0.10), n);
		ao *= 0.55 + 0.45 * smoothstep(0.0, ${Ce(mi)}, P.y) * (0.6 + 0.4 * n);
		N = normalize(N + vec3(noise3(P * 13.0) - 0.5, 0.0, noise3(P * 13.0 + 5.0) - 0.5) * 0.9);
	} else if (kind == ${we.POT}.0) {
		base = mix(vec3(0.66, 0.34, 0.20), vec3(0.75, 0.44, 0.28), noise(wq * 6.0));
	} else if (kind == ${we.SOIL}.0) {
		base = vec3(0.20, 0.14, 0.09);
	} else if (kind == ${we.ROOF}.0) {
		// rows of curved clay tiles
		float along = abs(N.x) > abs(N.z) ? P.z : P.x;
		float rib = abs(fract(along / 0.24) - 0.5) * 2.0;
		float h = hash(vec2(floor(along / 0.24), floor(P.y / 0.42)));
		base = mix(vec3(0.58, 0.30, 0.20), vec3(0.72, 0.44, 0.30), h);
		base = mix(base, vec3(0.45, 0.42, 0.36), smoothstep(0.55, 0.85, noise(P.xz * 0.6)) * 0.4);
		base *= mix(0.62 + 0.38 * (1.0 - rib * rib), 0.85, lod);
	} else if (kind == ${we.SHUTTER}.0) {
		float slat = fract(P.y / 0.07);
		base = vec3(0.17, 0.30, 0.20) * (0.75 + 0.25 * smoothstep(0.1, 0.5, slat));
	} else if (kind == ${we.PANE}.0) {
		vec3 R = reflect(-V, N);
		base = vec3(0.03, 0.035, 0.04);
		vec3 refl = skyColor(normalize(vec3(R.x, abs(R.y), R.z))) * 0.25;
		gl_FragColor = vec4(toNight(tonemap(base + refl * (0.4 + 0.6 * pow(1.0 - abs(dot(N, V)), 3.0))), 0.45), 1.0);
		return;
	} else if (kind == ${we.PLASTER}.0) {
		base = mix(vec3(0.82, 0.76, 0.64), vec3(0.88, 0.83, 0.72), noise(wq * 1.3));
		// a darker dado on the back walls
		if (abs(N.y) < 0.5 && P.y < 1.1) base *= 0.82;
	} else if (kind == ${we.BARK}.0) {
		base = mix(vec3(0.30, 0.27, 0.24), vec3(0.45, 0.42, 0.38), noise3(P * vec3(8.0, 2.0, 8.0)));
	} else if (kind == ${we.IRON}.0) {
		base = vec3(0.07, 0.07, 0.07);
		spec = 0.4;
	} else if (kind == ${we.LEAD}.0) {
		base = mix(vec3(0.30, 0.33, 0.35), vec3(0.40, 0.43, 0.45), noise(P.xy * 0.5));
		// ribs on the domes
		float a = atan(P.z - floor(P.z / 50.0) * 50.0, 1.0);
		base *= 0.9 + 0.1 * step(0.5, fract(a * 6.0));
		far = 1.0;
	} else if (kind == ${we.FARBRICK}.0) {
		base = mix(vec3(0.66, 0.46, 0.34), vec3(0.74, 0.54, 0.40), noise(P.xy * 0.3));
		// a row of small arches under the eaves and some dark windows
		far = 1.0;
	} else if (kind == ${we.DARK}.0) {
		base = vec3(0.025, 0.022, 0.02);
	}

	// ---------- light ----------

	// in the arcade walks the sky is mostly hidden
	bool walk = (P.x < ${Ce(at.westCol)} || P.x > ${Ce(at.eastCol)} || P.z > ${Ce(at.northCol)}) && P.y < ${Ce(ws+.05)} && P.z > ${Ce(at.south-.1)} && P.z < ${Ce(at.northBack+.5)};
	float skyVis = 0.55 + 0.45 * N.y;
	if (walk) {
		float depth = P.z > ${Ce(at.northCol)} ? P.z - ${Ce(at.northCol)} : (P.x < ${Ce(at.westCol)} ? ${Ce(at.westCol)} - P.x : P.x - ${Ce(at.eastCol)});
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
}`,vS=`
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
}`,mS=`
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
}`,gS=`
precision highp float;
${L5}
uniform sampler2D leaves;
varying vec2 v_uv;
varying vec3 v_light, v_tint, v_bloom, v_pos;
${F5}
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
}`;function xS(t,e,o){let r=t.texture({data:[[o]],min:"linear",mag:"linear"});return fetch(e).then(n=>{if(!n.ok)throw new Error("Could not load "+e);return n.blob()}).then(n=>createImageBitmap(n,{premultiplyAlpha:"none"})).then(n=>r({data:n,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(n=>console.error(n)),r}Xd.exports=t=>{let e=oS(),o=rS(),r=xS(t,"res/garden/foliage.webp",[0,0,0,0]),n=Date.now(),a=()=>Bd.motion?window.__streetClock!==void 0?window.__streetClock:(Date.now()-n)/1e3:20,s=t({frag:pS,vert:vS,attributes:{position:e.position,normal:e.normal,attr:e.attr},elements:new Uint32Array(e.elements),uniforms:{time:a,gardenDetail:()=>Bd.gardenDetail}}),i=t({frag:gS,vert:mS,attributes:{center:o.center,corner:o.corner,par:o.par,light:o.light,tint:o.tint,bloom:o.bloom},elements:new Uint32Array(o.elements),uniforms:{leaves:r,time:a},cull:{enable:!1},count:()=>Math.floor(o.elements.length*Bd.leafShare/6)*6});return function(){s(),i()}};Xd.exports.layout={G:at,YARD:n0,SUN:Sa}});var W5=Tt((WA,j5)=>{"use strict";var yS=nn().GLSL,bS=Js(),{C:B5}=On(),Hn=B5.x1+.35,Qd=B5.zc,Yd=[Hn-7.3,2,Qd],H5=5.2*Math.PI/180,U5=2100,wS=725,_S=1288,MS=1450,kS=2576,Va=Qd-3.2,u1=Qd+3.3,Kd=Hn+5,Zd=Hn+11.7,$c=3.9,df=Hn+22.7,f1=40;function SS(){let t=[],e=[],o=[],r=[],n=bS.createBuilder(t,e,o,r),a=(l,v,u,p,d,h)=>{let g=[];for(let m=0;m<=d;m++){g.push([]);for(let x=0;x<=h;x++){let y=[0,1,2].map(_=>l[_]+v[_]*m/d+u[_]*x/h);g[m].push(n.vert(y,p,[0,0,0]))}}for(let m=0;m<d;m++)for(let x=0;x<h;x++)n.tri(g[m][x],g[m+1][x],g[m+1][x+1]),n.tri(g[m][x],g[m+1][x+1],g[m][x+1])},s=u1-Va,i=.7;a([Hn-i,0,Va],[Kd-Hn+i,0,0],[0,0,s],[0,1,0],6,4);let c=Zd-Kd,f=Math.hypot(c,$c);return a([Kd,0,Va],[c,$c,0],[0,0,s],[-$c/f,c/f,0],6,4),a([Zd,$c,Va],[df-Zd,0,0],[0,0,s],[0,1,0],6,4),a([Hn-i,0,Va],[df-Hn+i,0,0],[0,f1,0],[0,0,1],12,12),a([Hn-i,0,u1],[df-Hn+i,0,0],[0,f1,0],[0,0,-1],12,12),a([df,0,Va],[0,f1,0],[0,0,s],[-1,0,0],8,4),a([Hn-i,f1,Va],[df-Hn+i,0,0],[0,0,s],[0,-1,0],6,4),{position:t,normal:e,elements:o,attr:r}}var er=t=>t.toFixed(5),h1=[[Hn+3.4,3.7,Va+.01,1],[Hn+8.6,4.1,u1-.01,-1],[Hn+14.8,$c+3.3,Va+.01,1],[Hn+19.6,$c+3.6,u1-.01,-1]],zS=`
precision highp float;
${yS}
uniform sampler2D photo;
uniform float time;
varying vec3 v_pos;
varying vec3 v_normal;
const int NLAMP = ${h1.length};
vec4 LAMP[NLAMP];

void main() {
	${h1.map((t,e)=>`LAMP[${e}] = vec4(${er(t[0])}, ${er(t[1])}, ${er(t[2])}, ${er(t[3])});`).join(`
	`)}
	vec3 d = v_pos - vec3(${er(Yd[0])}, ${er(Yd[1])}, ${er(Yd[2])});
	float c = ${er(Math.cos(H5))}, s = ${er(Math.sin(H5))};
	float fw = d.x * c + d.y * s;
	float up = -d.x * s + d.y * c;
	fw = max(fw, 0.05);
	vec2 px = vec2(${er(wS)} + ${er(U5)} * d.z / fw, ${er(_S)} - ${er(U5)} * up / fw);
	vec2 uv = px / vec2(${er(MS)}, ${er(kS)});
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
}`,ES=`
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
}`;j5.exports=t=>{let e=SS(),o=t.texture({data:[[[120,105,85]]],min:"linear",mag:"linear"});fetch("res/florence/photo.jpg").then(i=>{if(!i.ok)throw new Error("Could not load the Florence photo");return i.blob()}).then(i=>createImageBitmap(i)).then(i=>o({data:i,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(i=>console.error(i));let r=t({frag:zS,vert:ES,attributes:{position:e.position,normal:e.normal},elements:new Uint32Array(e.elements),uniforms:{photo:o},cull:{enable:!1}}),n={pos:[],nrm:[],k:[],idx:[]},a=(i,c,f)=>{let[l,v,u]=i,p=[[[1,0,0],[0,1,0],[0,0,1]],[[-1,0,0],[0,1,0],[0,0,-1]],[[0,0,1],[0,1,0],[-1,0,0]],[[0,0,-1],[0,1,0],[1,0,0]],[[0,1,0],[0,0,1],[1,0,0]],[[0,-1,0],[0,0,1],[-1,0,0]]];for(let[d,h,g]of p){let m=n.pos.length/3;for(let[x,y]of[[-1,-1],[1,-1],[1,1],[-1,1]])n.pos.push(l+d[0]*c[0]+h[0]*x*c[0]+g[0]*y*c[0],v+d[1]*c[1]+h[1]*x*c[1]+g[1]*y*c[1],u+d[2]*c[2]+h[2]*x*c[2]+g[2]*y*c[2]),n.nrm.push(...d),n.k.push(f);n.idx.push(m,m+1,m+2,m,m+2,m+3)}};for(let i of h1){let c=i[3],f=i[2]+c*.42;a([i[0],i[1],f],[.11,.17,.11],1);for(let l of[-1,1])for(let v of[-1,1])a([i[0]+l*.11,i[1],f+v*.11],[.014,.18,.014],0);a([i[0],i[1]+.2,f],[.15,.03,.15],0),a([i[0],i[1]+.27,f],[.05,.05,.05],0),a([i[0],i[1]-.19,f],[.09,.025,.09],0),a([i[0],i[1]+.34,i[2]+c*.21],[.015,.015,.21],0),a([i[0],i[1]+.15,i[2]+c*.03],[.04,.24,.03],0)}let s=t({vert:`
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
		}`,attributes:{position:n.pos,normal:n.nrm,k:n.k},elements:new Uint16Array(n.idx),cull:{enable:!1}});return function(){r(),s()}}});var Z5=Tt((VA,K5)=>{"use strict";var AS=nn().GLSL,{A:p1,BENCH:tp,SHAFT:Jd,TREE:pf,oculusGLSL:TS}=Gr(),LS=qr(),d1=pf.sxz,V5=pf.sy,X5=pf.yaw;function NS(t){let e=new DataView(t),o=e.getUint32(4,!0),r=e.getUint32(8,!0),n=e.getUint32(12,!0),a=[0,1,2].map(u=>e.getFloat32(16+u*4,!0)),s=[0,1,2].map(u=>e.getFloat32(28+u*4,!0)),i=40,c=new Uint16Array(t,i,o*3);i+=o*6;let f=new Uint16Array(t,i,o*2);i+=o*4;let l=new Int8Array(t,i,o*3);i+=o*3,i=i+3&-4;let v=new Uint32Array(t,i,n);return{nV:o,nWood:r,nI:n,mn:a,sz:s,pos:c,uv:f,nrm:l,idx:v}}function OS(t){let e=new Float32Array(t.nV*3),o=new Float32Array(t.nV*3),r=new Float32Array(t.nV*2),n=new Float32Array(t.nV),a=Math.cos(X5),s=Math.sin(X5);for(let i=0;i<t.nV;i++){let c=(t.mn[0]+t.pos[i*3]/65535*t.sz[0])*d1,f=(t.mn[1]+t.pos[i*3+1]/65535*t.sz[1])*V5,l=(t.mn[2]+t.pos[i*3+2]/65535*t.sz[2])*d1;e[i*3]=p1.cx+a*c+s*l,e[i*3+1]=tp.soil+.02+f,e[i*3+2]=p1.zc-s*c+a*l;let v=t.nrm[i*3]/127/d1,u=t.nrm[i*3+1]/127/V5,p=t.nrm[i*3+2]/127/d1,d=Math.hypot(v,u,p)||1;v/=d,u/=d,p/=d,o[i*3]=a*v+s*p,o[i*3+1]=u,o[i*3+2]=-s*v+a*p,r[i*2]=t.uv[i*2]/65535,r[i*2+1]=t.uv[i*2+1]/65535,n[i]=i>=t.nWood?1:0}return{position:e,normal:o,uv:r,leaf:n,elements:t.idx}}function Y5(t,e,o,r){let n=t.texture({data:[[r]],min:"linear",mag:"linear"});return fetch(e).then(a=>{if(!a.ok)throw new Error("Could not load "+e);return a.blob()}).then(a=>createImageBitmap(a,{premultiplyAlpha:"none"}).catch(()=>new Promise((s,i)=>{let c=new Image;c.onload=()=>s(c),c.onerror=i,c.src=URL.createObjectURL(a)}))).then(a=>n({data:a,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",...o})).catch(a=>console.error(a)),n}var yn=t=>t.toFixed(4),Pc=pf.crownC,Ic=pf.crownR,RS=`
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
	vec2 out2 = p.xz - vec2(${yn(p1.cx)}, ${yn(p1.zc)});
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
	vec3 cc = vec3(${yn(Pc[0])}, ${yn(Pc[1])}, ${yn(Pc[2])});
	vec3 cr = vec3(${yn(Ic[0])}, ${yn(Ic[1])}, ${yn(Ic[2])});
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
}`,Ms=ls(),CS=`
precision highp float;
${AS}
uniform float time;
${Ms.lanternGLSL(Ms.TREE_LANTERN)}
const vec3 LANTERN_POS = vec3(${Ms.LANTERNS[Ms.TREE_LANTERN[0]].x.toFixed(3)}, ${Ms.LANTERNS[Ms.TREE_LANTERN[0]].y.toFixed(3)}, ${Ms.LANTERNS[Ms.TREE_LANTERN[0]].z.toFixed(3)});
uniform sampler2D leaves, bark;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_leaf, v_shade;
varying vec3 v_eye;

${TS()}

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
	vec3 rel = (v_pos - vec3(${yn(Pc[0])}, ${yn(Pc[1])}, ${yn(Pc[2])})) / vec3(${yn(Ic[0])}, ${yn(Ic[1])}, ${yn(Ic[2])});
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
}`;K5.exports=t=>{let e=null,o=Y5(t,"res/tree/leaves.webp",{wrapS:"clamp",wrapT:"clamp"},[60,80,40,0]),r=Y5(t,"res/tree/bark.jpg",{wrapS:"repeat",wrapT:"repeat"},[90,80,70]),n=Date.now();return fetch("res/tree.bin").then(a=>{if(!a.ok)throw new Error("Could not load the tree");return a.arrayBuffer()}).then(a=>{let s=OS(NS(a));e=t({vert:RS,frag:CS,attributes:{position:s.position,normal:s.normal,uv:s.uv,leaf:s.leaf},elements:s.elements,uniforms:{leaves:o,bark:r,time:()=>LS.motion?typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-n)/1e3:0},cull:{enable:!1}})}).catch(a=>console.error(a)),function(){e&&e()}}});var x1=Tt((XA,ex)=>{"use strict";var qc=us(),$S="res/audio/go-tomorrow.mp3",PS="res/audio/go-tomorrow.json",J5="gallery-sound",v1=[qc.PIANO.x,1,qc.PIANO.z],IS=qc.R,mr=!0;try{localStorage.getItem(J5)==="off"&&(mr=!1)}catch(t){}var U0=null,$n=null,vf=null,mf=null,ks=null,Xa=null,xi=!1,m1=null,Q5=[],qS=(typeof performance!="undefined"?performance.now():0)/1e3;function DS(t){let e=Math.floor(t.sampleRate*2.6),o=t.createBuffer(2,e,t.sampleRate),r=12345,n=()=>(r=r*16807%2147483647,r/10737418235e-1-1);for(let a=0;a<2;a++){let s=o.getChannelData(a),i=0;for(let c=0;c<e;c++){let f=c/t.sampleRate,l=.25+.6*Math.exp(-f*2.2);i+=(n()-i)*l,s[c]=i*Math.pow(1-c/e,2.2)*Math.exp(-f*1.5)*(f<.012?f/.012:1)}}return o}function FS(){if(U0)return;U0=new Audio,U0.src=$S,U0.loop=!0,U0.preload="auto",U0.crossOrigin="anonymous";let t=window.AudioContext||window.webkitAudioContext;if(!t){U0.volume=.2;return}try{$n=new t;let e=$n.createMediaElementSource(U0);ks=$n.createBiquadFilter(),ks.type="lowpass",ks.frequency.value=1500,ks.Q.value=.4,vf=$n.createGain(),vf.gain.value=0,mf=$n.createGain(),mf.gain.value=0;let o=$n.createConvolver();o.buffer=DS($n),Xa=$n.createGain(),Xa.gain.value=mr?1:0,e.connect(ks),ks.connect(vf),vf.connect(Xa),ks.connect(o),o.connect(mf),mf.connect(Xa),Xa.connect($n.destination)}catch(e){$n=null,U0.volume=.2}}function tx(){if(xi||!mr)return;FS();let t=()=>U0.play().then(()=>{xi=!0}).catch(()=>{});$n&&$n.state==="suspended"?$n.resume().then(t,t):t()}typeof window!="undefined"&&(["pointerdown","pointerup","touchend","keydown","click"].forEach(t=>window.addEventListener(t,tx,{capture:!0,passive:!0})),document.addEventListener("visibilitychange",()=>{!U0||!xi||(document.hidden?U0.pause():mr&&U0.play().catch(()=>{}))}),fetch(PS).then(t=>t.ok?t.json():null).then(t=>{if(!t)return;let e=o=>{let r=o.map(s=>s[2]).sort((s,i)=>s-i),n=r[Math.floor(r.length*.03)]||0,a=r[Math.floor(r.length*.97)]||1;return o.map(s=>({t:s[0],w:s[1],x:Math.max(0,Math.min(1,(s[2]-n)/Math.max(a-n,.001)))}))};m1={left:e(t.l),right:e(t.r),level:t.e,dur:t.d}}).catch(()=>{}));var g1={AT:v1,listen(t){if(!$n||!xi)return;let e=t[0]-v1[0],o=t[2]-v1[2],r=Math.hypot(e,o,(t[1]-v1[1])*.5),n=Math.hypot(t[0]-qc.C.x,t[2]-qc.C.z)<IS+.4||t[0]<-.2&&Math.abs(t[2]-qc.C.z)<4,a,s,i;if(n){let f=Math.max(0,Math.min(1,(r-1.2)/5));a=1-.3*f,s=.22+.16*f,i=16e3}else{let f=5.5/Math.max(r,5.5),l=t[0]>14.2&&t[2]<12?.6:1;a=.5*Math.pow(f,1.5)*l,s=.34*Math.pow(f,.95)*l,i=(650+9e3*Math.pow(f,1.3))*(l<1?.7:1)}let c=$n.currentTime;vf.gain.setTargetAtTime(a,c,.35),mf.gain.setTargetAtTime(s,c,.35),ks.frequency.setTargetAtTime(i,c,.35)},time(){let t=m1&&m1.dur||158;return U0&&xi&&!U0.paused||U0&&xi?U0.currentTime%t:((performance.now()/1e3-qS)%t+t)%t},get cues(){return m1},get on(){return mr},set(t){mr=!!t;try{localStorage.setItem(J5,mr?"on":"off")}catch(e){}mr?(tx(),U0&&xi&&U0.play().catch(()=>{}),Xa&&Xa.gain.setTargetAtTime(1,$n.currentTime,.2)):Xa?Xa.gain.setTargetAtTime(0,$n.currentTime,.15):U0&&U0.pause(),Q5.forEach(e=>e(mr))},toggle(){g1.set(!mr)},onChange(t){Q5.push(t)},button(t){let e='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="M15.5 9a4.2 4.2 0 0 1 0 6M18 6.5a7.8 7.8 0 0 1 0 11"/></svg>',o='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="M16 9.5l5 5M21 9.5l-5 5"/></svg>',r=document.createElement("button");r.type="button",r.className=t+" sound-toggle";let n=()=>{r.innerHTML=mr?e:o,r.setAttribute("aria-label",mr?"Turn the music off":"Turn the music on"),r.title=mr?"Music on":"Music off",r.setAttribute("aria-pressed",mr?"true":"false")};return n(),g1.onChange(n),["mousedown","pointerdown"].forEach(a=>r.addEventListener(a,s=>s.stopPropagation())),r.addEventListener("click",a=>{a.stopPropagation(),g1.toggle()}),r}};ex.exports=g1});var ux=Tt((YA,ap)=>{"use strict";var np=nn().GLSL,{A:ox,BENCH:cx,oculusGLSL:lx}=Gr(),nx=qr(),fx=us(),rx=x1(),GS=1.74,HS=1.877,Un=GS/HS,bi={x:ox.cx-1.22,z:ox.zc+.02,hipY:cx.seat+.115},m0=(t,e)=>[t[3]*e[0]+t[0]*e[3]+t[1]*e[2]-t[2]*e[1],t[3]*e[1]-t[0]*e[2]+t[1]*e[3]+t[2]*e[0],t[3]*e[2]+t[0]*e[1]-t[1]*e[0]+t[2]*e[3],t[3]*e[3]-t[0]*e[0]-t[1]*e[1]-t[2]*e[2]],la=t=>[-t[0],-t[1],-t[2],t[3]],zs=(t,e)=>{let o=Math.hypot(t[0],t[1],t[2])||1,r=Math.sin(e/2);return[t[0]/o*r,t[1]/o*r,t[2]/o*r,Math.cos(e/2)]},y1=(t,e,o)=>m0(zs([0,0,1],o*Math.PI/180),m0(zs([0,1,0],e*Math.PI/180),zs([1,0,0],t*Math.PI/180))),rp=t=>{let e=Math.hypot(...t)||1;return t.map(o=>o/e)},Ea=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],xf=(t,e)=>[t[0]+e[0],t[1]+e[1],t[2]+e[2]],Ss=(t,e)=>[t[0]*e,t[1]*e,t[2]*e],op=(t,e)=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2],w1=t=>Math.hypot(t[0],t[1],t[2]),gf=t=>{let e=w1(t)||1;return[t[0]/e,t[1]/e,t[2]/e]},M1=(t,e)=>[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]],US=(t,e)=>{let o=[t[0],t[1],t[2]],r=Ss(M1(o,e),2);return xf(xf(e,Ss(r,t[3])),M1(o,r))},BS=(t,e)=>{let o=M1(t,e),r=1+op(t,e);return r<1e-6?[0,0,1,0]:rp([o[0],o[1],o[2],r])};function Ar(t,e,o){let[r,n,a,s]=e,i=r*r,c=n*n,f=a*a,l=r*n,v=r*a,u=n*a,p=s*r,d=s*n,h=s*a;return[(1-2*(c+f))*o[0],2*(l+h)*o[0],2*(v-d)*o[0],0,2*(l-h)*o[1],(1-2*(i+f))*o[1],2*(u+p)*o[1],0,2*(v+d)*o[2],2*(u-p)*o[2],(1-2*(i+c))*o[2],0,t[0],t[1],t[2],1]}function fn(t,e){let o=new Array(16);for(let r=0;r<4;r++)for(let n=0;n<4;n++)o[r*4+n]=t[n]*e[r*4]+t[4+n]*e[r*4+1]+t[8+n]*e[r*4+2]+t[12+n]*e[r*4+3];return o}function ep(t){let e=Math.hypot(t[0],t[1],t[2]),o=Math.hypot(t[4],t[5],t[6]),r=Math.hypot(t[8],t[9],t[10]),n=t[0]/e,a=t[1]/e,s=t[2]/e,i=t[4]/o,c=t[5]/o,f=t[6]/o,l=t[8]/r,v=t[9]/r,u=t[10]/r,p=n+c+u,d;if(p>0){let h=Math.sqrt(p+1)*2;d=[(f-v)/h,(l-s)/h,(a-i)/h,h/4]}else if(n>c&&n>u){let h=Math.sqrt(1+n-c-u)*2;d=[h/4,(i+a)/h,(l+s)/h,(f-v)/h]}else if(c>u){let h=Math.sqrt(1+c-n-u)*2;d=[(i+a)/h,h/4,(v+f)/h,(l-s)/h]}else{let h=Math.sqrt(1+u-n-c)*2;d=[(l+s)/h,(v+f)/h,h/4,(a-i)/h]}return rp(d)}var _1={LeftUpLeg:[-62,10,0],LeftLeg:[122,0,0],LeftFoot:[30,0,0],RightUpLeg:[0,-3,-2],RightLeg:[4,0,0],RightFoot:[35,-12,0],Neck:[10,0,0],Head:[6,0,0],LeftShoulder:[0,0,6],LeftArm:[-112.4,3.4,62.5],LeftForeArm:[0,-122.6,0],LeftHand:[0,0,-10],RightShoulder:[0,0,0],RightArm:[0,78,-8],RightForeArm:[0,14,0],RightHand:[0,0,0]};for(let t of["Left","Right"]){let e=t==="Left"?-1:1,o=t==="Left"?1:.35;["Index","Middle","Ring","Pinky"].forEach((r,n)=>{_1[t+"Hand"+r+"1"]=[0,0,e*(18+n*6)*o],_1[t+"Hand"+r+"2"]=[0,0,e*(26+n*6)*o],_1[t+"Hand"+r+"3"]=[0,0,e*16*o]})}function yi(t,e,o){let r=t-e;return r-=Math.round(r),Math.exp(-(r/o)*(r/o))}function ax(t){let e=9+20*Math.cos(2*Math.PI*t),o=4+13*yi(t,.14,.07)+57*yi(t,.72,.12),r=5*yi(t,.06,.04)-9*yi(t,.42,.12)+17*yi(t,.62,.05)-3*yi(t,.85,.1),n=-26*yi(t,.58,.06);return{hip:e,knee:o,ankle:r,toe:n}}function jS(t){let e=(t%1+1)%1,o=ax(e),r=ax(e+.5),n=Math.cos(2*Math.PI*e),a=Math.sin(2*Math.PI*e);return{swing:{LeftArm:[16*n,0,0],RightArm:[-16*n,0,0],LeftForeArm:[0,-14-8*Math.max(0,-n),0],RightForeArm:[0,14+8*Math.max(0,n),0]},pose:{Hips:[0,5*a,1.5*Math.cos(4*Math.PI*e)],Spine1:[3,-4*a,0],LeftUpLeg:[-o.hip,0,0],LeftLeg:[o.knee,0,0],LeftFoot:[o.ankle,0,0],LeftToeBase:[o.toe,0,0],RightUpLeg:[-r.hip,0,0],RightLeg:[r.knee,0,0],RightFoot:[r.ankle,0,0],RightToeBase:[r.toe,0,0],LeftArm:[0,0,-78],RightArm:[0,0,78],LeftHand:[0,0,-8],RightHand:[0,0,8]},sway:.022*n}}var sx=`
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
}`,k1=ls(),ix=`#extension GL_OES_standard_derivatives : enable
precision highp float;
${np}
uniform float time;
${fx.roomGLSL()}
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
${lx()}
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
}`;function WS(t,e){let o=t.texture({data:[[[120,100,90,255]]],min:"linear",mag:"linear"});return fetch(e).then(r=>{if(!r.ok)throw new Error("Could not load "+e);return r.blob()}).then(r=>createImageBitmap(r,{premultiplyAlpha:"none"}).catch(()=>new Promise((n,a)=>{let s=new Image;s.onload=()=>n(s),s.onerror=a,s.src=URL.createObjectURL(r)}))).then(r=>o({data:r,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(r=>console.error(r)),o}var hx={w:.13,h:.2},b1=t=>.011*(1-Math.pow(1-t,3));function VS(){let t=[],e=[],o=[],r=[],n=[],a=(h,g,m,x,y,_,M)=>{let b=t.length/3;[h,g,m,x].forEach((k,E)=>{t.push(...k),e.push(...y),o.push(...M[E]),r.push(_)}),n.push(b,b+1,b+2,b,b+2,b+3)},{w:s,h:i}=hx,c=i/2,f=[[0,1],[1,1],[1,0],[0,0]],l=-.006,v=s+.001,u=c+.001;a([0,l,-u],[v,l,-u],[v,l,u],[0,l,u],[0,-1,0],1,[[0,1],[1,1],[1,0],[0,0]]),a([0,l+.001,-u],[0,l+.001,u],[v,l+.001,u],[v,l+.001,-u],[0,1,0],2,f),a([-v,l,-u],[0,l,-u],[0,l,u],[-v,l,u],[0,-1,0],2,f),a([-v,l+.001,-u],[-v,l+.001,u],[0,l+.001,u],[0,l+.001,-u],[0,1,0],2,f);let p=8;for(let h of[1,-1]){for(let m=0;m<p;m++){let x=m/p,y=(m+1)/p,_=(.002+x*(s-.002))*h,M=(.002+y*(s-.002))*h,b=b1(x),k=b1(y),E=h>0?x:1-x,z=h>0?y:1-y,P=1,R=-(k-b)/(M-_);a([_,b,-c],[M,k,-c],[M,k,c],[_,b,c],[R,P,0],3,[[E,1],[z,1],[z,0],[E,0]]),a([_,l+.001,c],[M,l+.001,c],[M,k,c],[_,b,c],[0,0,1],4,f),a([_,b,-c],[M,k,-c],[M,l+.001,-c],[_,l+.001,-c],[0,0,-1],4,f)}let g=s*h;a([g,l+.001,-c],[g,b1(1),-c],[g,b1(1),c],[g,l+.001,c],[h,0,0],4,f)}let d=10;for(let h=0;h<d;h++){let g=h/d,m=(h+1)/d,x=t.length/3;for(let[y,_]of[[g,-c],[m,-c],[m,c],[g,c]])t.push(y,0,_),e.push(0,1,0),o.push(y,(_+c)/i),r.push(5);n.push(x,x+1,x+2,x,x+2,x+3)}return{pos:t,nrm:e,uv:o,kind:r,idx:n}}function XS(){if(typeof document=="undefined")return null;let t=document.createElement("canvas");t.width=512,t.height=768;let e=t.getContext("2d");e.fillStyle="#ebe5d8",e.fillRect(0,0,512,768);let o=7,r=()=>(o=o*16807%2147483647,o/2147483647),n=(s,i,c,f,l,v,u)=>{for(let p=0;p<v;p++){let d=s+(r()-.5)*c*2,h=i+(r()-.5)*f*2,g=20+r()*60,m=e.createRadialGradient(d,h,0,d,h,g);m.addColorStop(0,`rgba(${l},${u})`),m.addColorStop(1,`rgba(${l},0)`),e.fillStyle=m,e.fillRect(d-g,h-g,g*2,g*2)}},a=e.createRadialGradient(236,280,10,256,300,125);a.addColorStop(0,"#3d4866"),a.addColorStop(1,"#232a3d"),e.fillStyle=a,e.beginPath(),e.arc(256,300,122,0,Math.PI*2),e.fill(),e.fillStyle="#b8873f",e.beginPath(),e.moveTo(64,452);for(let s=64;s<=448;s+=16)e.lineTo(s,446+r()*4);for(let s=448;s>=64;s-=16)e.lineTo(s,466+r()*4);e.fill(),e.strokeStyle="#2b2f3a",e.lineCap="round",[[120,392,500,5],[160,352,530,4],[205,307,558,3]].forEach(([s,i,c,f])=>{e.lineWidth=f,e.beginPath(),e.moveTo(s,c),e.lineTo(i,c),e.stroke()});for(let s=0;s<9e3;s++)e.fillStyle=`rgba(90,80,60,${r()*.05})`,e.fillRect(r()*512,r()*768,1,1);return t}var YS=`
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
		float r = u * ${hx.w.toFixed(3)};
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
}`,KS=`
precision highp float;
${np}
uniform float time;
${k1.lanternGLSL(k1.TREE_LANTERN)}
uniform sampler2D cover;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_kind;
${lx()}
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
}`;function ZS(){let t=[],e=[],o=[],r=[],n=[],a=[.36,.11,.07],s=[.1,.07,.05],i=[.78,.76,.72],c=[.55,.41,.26],f=[.8,.55,.22],l=[[0,-.15,f,2],[.0012,-.147,f,2],[.004,-.138,f,2],[.0058,-.125,c,2],[.0064,-.112,c,2],[.006,-.104,c,2],[.0066,-.102,i,1],[.0066,-.08,i,1],[.0062,-.074,i,1],[.0068,-.072,i,1],[.007,-.066,i,1],[.0058,-.064,a,0],[.0062,-.04,a,0],[.0058,0,a,0],[.0046,.06,a,0],[.0036,.11,a,0],[.003,.13,s,0],[.0026,.136,s,0],[0,.139,s,0]],v=16;for(let u=0;u<l.length;u++){let[p,d,h,g]=l[u],m=g===2?.45:1;for(let x=0;x<=v;x++){let y=x/v*Math.PI*2;t.push(Math.cos(y)*p,d,Math.sin(y)*p*m);let _=Math.max(u-1,0),M=Math.min(u+1,l.length-1),b=l[M][0]-l[_][0],k=l[M][1]-l[_][1],E=Math.hypot(b,k)||1;e.push(Math.cos(y)*k/E,-b/E,Math.sin(y)*k/E/m),o.push(...h),r.push(g)}}for(let u=0;u<l.length-1;u++)for(let p=0;p<v;p++){let d=u*(v+1)+p,h=d+v+1;n.push(d,h,d+1,d+1,h,h+1)}return{pos:t,nrm:e,col:o,mat:r,idx:n}}var QS=`
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
}`,JS=`
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
}`,t7=`
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
}`,e7=`
precision highp float;
uniform float pulse;
varying vec2 v_c;
void main() {
	float d = length(v_c);
	float g = exp(-d * d * 6.0) * 0.10 + exp(-d * d * 30.0) * 0.08;
	gl_FragColor = vec4(vec3(1.0, 0.80, 0.45) * g * (0.75 + 0.25 * pulse), 1.0);
}`;ap.exports=t=>{let e="res/avatar/",o=null,r=Date.now(),n=()=>typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-r)/1e3,a={glowPos:[bi.x,1.9,bi.z],glow:0};Promise.all([fetch(e+"avatar.json").then(z=>z.json()),fetch(e+"avatar.bin").then(z=>z.arrayBuffer())]).then(([z,P])=>{o=f(z,P)}).catch(z=>console.error(z));let s=null;Promise.all([fetch(e+"motion.json").then(z=>z.ok?z.json():null),fetch(e+"motion.bin").then(z=>z.ok?z.arrayBuffer():null)]).then(([z,P])=>{if(!z||!P)return;let R={};for(let B in z.clips){let $=z.clips[B],D=$.bones.length,it=new Float32Array(P,$.mean,D*4),St={};$.bones.forEach((yt,mt)=>{St[yt]=[it[mt*4],it[mt*4+1],it[mt*4+2],it[mt*4+3]]}),R[B]=Object.assign({},$,{Q:new Int16Array(P,$.q,$.frames*D*4),H:new Float32Array(P,$.hips,$.frames*3),meanQ:St})}s=R}).catch(()=>{});function i(z,P){let R=z.frames,B=z.bones.length,$=(P%R+R)%R,D=Math.floor($)%R,it=(D+1)%R,St=$-Math.floor($),yt={};for(let It=0;It<B;It++){let re=(D*B+It)*4,Ae=(it*B+It)*4,lo=z.Q[re],ge=z.Q[re+1],$e=z.Q[re+2],He=z.Q[re+3],et=z.Q[Ae],j=z.Q[Ae+1],lt=z.Q[Ae+2],xt=z.Q[Ae+3];lo*et+ge*j+$e*lt+He*xt<0&&(et=-et,j=-j,lt=-lt,xt=-xt),yt[z.bones[It]]=rp([lo+(et-lo)*St,ge+(j-ge)*St,$e+(lt-$e)*St,He+(xt-He)*St])}let mt=D*3,zt=it*3;return{q:yt,hips:[z.H[mt]+(z.H[zt]-z.H[mt])*St,z.H[mt+1]+(z.H[zt+1]-z.H[mt+1])*St,z.H[mt+2]+(z.H[zt+2]-z.H[mt+2])*St]}}let c=t.texture({data:[[[255,255,255,255]]]});function f(z,P){let R=(tt,Vt)=>new Float32Array(P,tt,Vt),B=z.bones,$=B.length,D={};B.forEach((tt,Vt)=>{D[tt.name]=Vt});let it=[];for(let tt=0;tt<$;tt++)it.push(Array.from(R(z.ibm+tt*64,16)));let St=B.map(tt=>Ar(tt.t,tt.r,tt.s)),yt=[];for(let tt=0;tt<$;tt++){let Vt=B[tt].parent;yt[tt]=Vt<0?St[tt]:fn(yt[Vt],St[tt])}let mt=yt.map(ep),zt=z.meshes.map(tt=>{let Vt=R(tt.pos,tt.n*3),Xt=R(tt.nrm,tt.n*3),Bt=R(tt.uv,tt.n*2),Le=new Uint8Array(P,tt.jnt,tt.n*4),Be=R(tt.wgt,tt.n*4),Ye=new Uint16Array(P,tt.idx,tt.ni),Ie={};for(let Ct in tt.morphs){let pe=tt.morphs[Ct];Ie[Ct]={idx:new Uint16Array(P,pe.idx,pe.n),d:R(pe.d,pe.n*3)}}let io=new Float32Array(tt.n*3),je=new Float32Array(tt.n*3),po=new Float32Array(tt.n*3),Xe=t.buffer({data:io,usage:"dynamic"}),Ze=t.buffer({data:je,usage:"dynamic"}),Mo=/avaturn_hair/.test(tt.name),Y=/EyeAO|Eyelash/.test(tt.name),gt=/Body|Head/.test(tt.name),ft=tt.kind||0;return{m:tt,pos:Vt,nrm:Xt,uv:Bt,jnt:Le,wgt:Be,idx:Ye,morphs:Ie,outP:io,outN:je,work:po,pb:Xe,nbuf:Ze,tex:tt.tex?WS(t,e+tt.tex):c,kind:ft,alphaScale:/EyeAO/.test(tt.name)?.25:1,blend:tt.blend||Mo,alphaCut:Mo?.35:Y?.02:0,skin:gt?1:0}}),It=t({vert:sx,frag:ix,attributes:{position:t.prop("pb"),normal:t.prop("nb"),uv:t.prop("uv")},elements:t.prop("el"),uniforms:{tex:t.prop("tex"),alphaCut:t.prop("alphaCut"),skin:t.prop("skin"),kind:t.prop("kind"),alphaScale:t.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow,boothLamp:()=>b&&!k?b.lamp:[0,0,0,0],court:()=>b||k?0:1,candle:()=>k?1:0},cull:{enable:!1}}),re=t({vert:sx,frag:ix,attributes:{position:t.prop("pb"),normal:t.prop("nb"),uv:t.prop("uv")},elements:t.prop("el"),uniforms:{tex:t.prop("tex"),alphaCut:t.prop("alphaCut"),skin:t.prop("skin"),kind:t.prop("kind"),alphaScale:t.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow,boothLamp:()=>b&&!k?b.lamp:[0,0,0,0],court:()=>b||k?0:1,candle:()=>k?1:0},cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"one minus src alpha"}}}),Ae=.3;for(let tt of zt)if(tt.uvBuf=t.buffer(tt.uv),/Body/.test(tt.m.name)){let Vt=[],Xt=[];for(let Bt=0;Bt<tt.idx.length;Bt+=3){let Le=tt.idx[Bt],Be=tt.idx[Bt+1],Ye=tt.idx[Bt+2];(tt.pos[Le*3+1]<Ae&&tt.pos[Be*3+1]<Ae&&tt.pos[Ye*3+1]<Ae?Xt:Vt).push(Le,Be,Ye)}tt.el=t.elements({data:new Uint16Array(Vt),type:"uint16"}),Xt.length&&(tt.sockEl=t.elements({data:new Uint16Array(Xt),type:"uint16"}))}else tt.el=t.elements({data:tt.idx,type:"uint16"});let lo=yt[D.Hips],ge=zs([1,0,0],-Math.PI/2),$e=fn(Ar([bi.x-lo[12]*Un,bi.hipY-lo[14]*Un,bi.z+lo[13]*Un],ge,[1,1,1]),Ar([0,0,0],[0,0,0,1],[Un,Un,Un])),He=new Array($),et=-1,j=(tt,Vt,Xt)=>fn(Ar([tt,0,Vt],zs([0,1,0],Xt),[1,1,1]),Ar([0,0,0],[0,0,0,1],[Un,Un,Un])),lt=["LeftFoot","RightFoot","LeftToeBase","RightToeBase"].map(tt=>D[tt]),xt=lt.map(tt=>yt[tt][13]*Un);function Kt(tt){if(s&&s.walk)return te(tt);let Vt=jS(tt.phase),Xt={},Bt=je=>{for(let po in je){let Xe=je[po],Ze=y1(Xe[0],Xe[1],Xe[2]);Xt[po]=Xt[po]?m0(Xt[po],Ze):Ze}};Bt(Vt.swing),Bt(Vt.pose);let Le=Math.cos(tt.heading),Be=-Math.sin(tt.heading),Ye=j(tt.x+Le*Vt.sway,tt.z+Be*Vt.sway,tt.heading),Ie=new Array($);for(let je=0;je<$;je++){let po=B[je],Xe=St[je],Ze=Xt[po.name];if(Ze){let Mo=mt[je],Y=m0(la(Mo),m0(Ze,Mo));Xe=Ar(po.t,m0(po.r,Y),po.s)}Ie[je]=po.parent<0?fn(Ye,Xe):fn(Ie[po.parent],Xe)}let io=1/0;lt.forEach((je,po)=>{io=Math.min(io,Ie[je][13]-xt[po])});for(let je=0;je<$;je++)Ie[je]=Ie[je].slice(),Ie[je][13]-=io,He[je]=fn(Ie[je],it[je]);return{blink:0}}function te(tt){let Vt=s.walk,Xt=i(Vt,(tt.phase+Vt.phase0)*Vt.frames),Bt=j(tt.x,tt.z,tt.heading),Le=new Array($),Be=D.Hips;for(let Ie=0;Ie<$;Ie++){let io=B[Ie],je=St[Ie],po=Xt.q[io.name];if(po){let Xe=mt[Ie],Ze=m0(la(Xe),m0(po,Xe)),Mo=Ie===Be?[io.t[0]+Xt.hips[0],io.t[1]+Xt.hips[1],io.t[2]+Xt.hips[2]]:io.t;je=Ar(Mo,m0(io.r,Ze),io.s)}Le[Ie]=io.parent<0?fn(Bt,je):fn(Le[io.parent],je)}let Ye=1/0;lt.forEach((Ie,io)=>{Ye=Math.min(Ye,Le[Ie][13]-xt[io])});for(let Ie=0;Ie<$;Ie++)Le[Ie]=Le[Ie].slice(),Le[Ie][13]-=Ye,He[Ie]=fn(Le[Ie],it[Ie]);return{blink:0}}function Zt(tt,Vt){let Xt=Math.sin(tt*2*Math.PI/4.6),Bt=Math.sin(tt*.37)*.6+Math.sin(tt*.83+1)*.4,Le={LeftUpLeg:[-86,-6,0],RightUpLeg:[-84,7,0],LeftLeg:[88,0,0],RightLeg:[82,0,0],LeftFoot:[-4,0,0],RightFoot:[-2,0,0],Spine:[6,0,0],Spine1:[5+Xt*.8,0,0],Spine2:[4+Xt*.6,0,0],Neck:[10,0,0],Head:[12+Bt*2,Bt*2.5,0],LeftArm:[0,0,-72],RightArm:[0,0,72],LeftForeArm:[0,-62,0],RightForeArm:[0,62,0],LeftHand:[0,0,-10],RightHand:[0,0,10]},Be={};for(let Xe in Le){let Ze=Le[Xe];Be[Xe]=y1(Ze[0],Ze[1],Ze[2])}let Ye=j(Vt.x,Vt.z,Vt.heading),Ie=new Array($);for(let Xe=0;Xe<$;Xe++){let Ze=B[Xe],Mo=St[Xe],Y=Be[Ze.name];if(Y){let gt=mt[Xe],ft=m0(la(gt),m0(Y,gt));Mo=Ar(Ze.t,m0(Ze.r,ft),Ze.s)}Ie[Xe]=Ze.parent<0?fn(Ye,Mo):fn(Ie[Ze.parent],Mo)}let je=Ie[D.Hips][13]-(Vt.y+.1);for(let Xe=0;Xe<$;Xe++)Ie[Xe]=Ie[Xe].slice(),Ie[Xe][13]-=je,He[Xe]=fn(Ie[Xe],it[Xe]);let po=tt%4.1;return{blink:po<.16?Math.sin(po/.16*Math.PI):0}}let qt=tt=>[yt[tt][12],yt[tt][13],yt[tt][14]],ot=(tt,Vt)=>{let Xt=gf(tt),Bt=gf(Ea(Vt,Ss(Xt,op(Vt,Xt)))),Le=M1(Xt,Bt);return ep([Xt[0],Xt[1],Xt[2],0,Bt[0],Bt[1],Bt[2],0,Le[0],Le[1],Le[2],0,0,0,0,1])},Rt={};for(let tt of["Left","Right"]){let Vt=D[tt+"Arm"],Xt=D[tt+"ForeArm"],Bt=D[tt+"Hand"],Le=D[tt+"HandMiddle1"];Rt[tt]={a:Vt,f:Xt,h:Bt,upper:w1(Ea(qt(Xt),qt(Vt)))*Un,fore:w1(Ea(qt(Bt),qt(Xt)))*Un,dir0:gf(Ea(qt(Xt),qt(Vt))),qf0:ot(Ea(qt(Bt),qt(Xt)),[0,1,0]),qh0:ot(Ea(qt(Le),qt(Bt)),[0,1,0])}}let Se={};for(let tt of["Left","Right"])Se[Rt[tt].a]={side:tt,part:0},Se[Rt[tt].f]={side:tt,part:1},Se[Rt[tt].h]={side:tt,part:2};function Qt(tt,Vt,Xt){if(!tt||!tt.length)return{x:.5,lift:0,press:0,finger:1,busy:0};let Bt=0,Le=tt.length-1,Be=-1;for(;Bt<=Le;){let pe=Bt+Le>>1;tt[pe].t<=Vt?(Be=pe,Bt=pe+1):Le=pe-1}let Ye=tt[tt.length-1],Ie=tt[0],io=Be>=0?tt[Be]:{t:Ye.t-Xt,x:Ye.x,w:Ye.w},je=Be+1<tt.length?tt[Be+1]:{t:Ie.t+Xt,x:Ie.x,w:Ie.w},po=Math.max(.05,je.t-io.t),Xe=Math.min(.14,po*.45),Ze=Math.max(0,Math.min(1,(Vt-io.t-Xe)/Math.max(po-Xe-.03,.02))),Mo=Ze*Ze*(3-2*Ze),Y=Vt-io.t,gt=(.55+.45*io.w)*Math.exp(-Y/.11),ft=je.t-Vt,Ct=ft<.05?(.55+.45*je.w)*(1-ft/.05):0;return{x:io.x+(je.x-io.x)*Mo,lift:Math.sin(Math.PI*Ze)*Math.min(.05,.012+po*.03)*(po>2.5?.4:1),press:Math.max(gt,Ct),finger:Ct>gt?((Be+1)*7+3)%4:(Math.max(Be,0)*7+3)%4,busy:Math.exp(-Y/.9)}}let Ft={lean:0,turn:0,nod:0,pedal:0,last:-1},Ue=["Index","Middle","Ring","Pinky"];function S(tt){let Vt=fx.PLAY,Xt=rx.cues,Bt=rx.time(),Le=Xt&&Xt.dur||158,Be={Left:Qt(Xt&&Xt.left,Bt,Le),Right:Qt(Xt&&Xt.right,Bt,Le)},Ye=.35;if(Xt&&Xt.level&&Xt.level.length){let le=Bt*8,ve=Math.floor(le)%Xt.level.length,Je=(ve+1)%Xt.level.length;Ye=Xt.level[ve]+(Xt.level[Je]-Xt.level[ve])*(le-Math.floor(le))}let Ie=Ft.last<0?0:Math.min(.1,Math.max(0,tt-Ft.last));Ft.last=tt;let io=le=>Math.min(1,Ie*le);Ft.lean+=(Ye-Ft.lean)*io(1.2),Ft.turn+=(Be.Right.busy-Be.Left.busy-Ft.turn)*io(1.5),Ft.nod+=(Math.max(Be.Right.press,Be.Left.press*.7)-Ft.nod)*io(6),Ft.pedal+=((Be.Left.busy>.35?1:.15)-Ft.pedal)*io(5);let je=Math.sin(tt*2*Math.PI/4.6),po=Math.sin(Bt*.41)*.6+Math.sin(Bt*.17+1)*.4,Xe={LeftUpLeg:[-80,-9,0],RightUpLeg:[-77,9,0],LeftLeg:[86,0,0],RightLeg:[64,0,0],LeftFoot:[-2,0,0],RightFoot:[12-10*Ft.pedal,0,0],Spine:[9+3.5*Ft.lean+po*1.6,Ft.turn*2.5,-Ft.turn*1.6],Spine1:[7+je*.8+2.5*Ft.lean,Ft.turn*2.5,-Ft.turn*1.2],Spine2:[6+je*.6+po*.8,Ft.turn*1.5,0],Neck:[13+3*Ft.lean,Ft.turn*3,0],Head:[15+Ft.nod*3.5+po*1.5,Ft.turn*5,po*1.5]};for(let le of["Left","Right"]){let ve=le==="Left"?-1:1,Je=Be[le];Ue.forEach((W,ht)=>{let kt=ht===Je.finger?Je.press:Je.press*.2;Xe[le+"Hand"+W+"1"]=[0,0,ve*(20+3*ht+20*kt)],Xe[le+"Hand"+W+"2"]=[0,0,ve*(26+4*ht-6*kt)],Xe[le+"Hand"+W+"3"]=[0,0,ve*14]}),Xe[le+"HandThumb1"]=[0,ve*-18,ve*10]}let Ze={};for(let le in Xe){let ve=Xe[le];Ze[le]=y1(ve[0],ve[1],ve[2])}let Mo=yt[D.Hips][13]*Un,Y=fn(Ar([Vt.stoolX,Vt.stoolTop+.1-Mo,Vt.stoolFront+.15],zs([0,1,0],Vt.heading),[1,1,1]),Ar([0,0,0],[0,0,0,1],[Un,Un,Un])),gt=(Vt.keyX0+Vt.keyX1)/2,ft={};for(let le of["Left","Right"]){let ve=Be[le],Je=le==="Left"?gt-.4+.33*ve.x:gt+.07+.33*ve.x;ft[le]=[Je,Vt.keyTop+.062+ve.lift-ve.press*.012,Vt.keyFront+.075]}let Ct=new Array($),pe={},Me=[0,1,0];for(let le=0;le<$;le++){let ve=B[le],Je=St[le],W=Ze[ve.name],ht=Se[le];if(ht){let kt=Rt[ht.side];if(ht.part===0){let ue=Ct[ve.parent],fe=fn(ue,St[le]),_o=[fe[12],fe[13],fe[14]],yo=m0(ep(ue),la(mt[ve.parent])),Uo=Ea(ft[ht.side],_o),ao=w1(Uo),Co=(kt.upper+kt.fore)*.995;ao>Co&&(Uo=Ss(Uo,Co/ao),ao=Co);let co=Ss(Uo,1/ao),qe=(kt.upper*kt.upper-kt.fore*kt.fore+ao*ao)/(2*ao),vo=Math.sqrt(Math.max(0,kt.upper*kt.upper-qe*qe)),so=[ht.side==="Left"?-.6:.6,-.8,.3];so=gf(Ea(so,Ss(co,op(so,co))));let p0=xf(_o,xf(Ss(co,qe),Ss(so,vo)));kt.T=xf(_o,Uo),kt.elbow=p0;let t0=gf(Ea(p0,_o)),ir=m0(BS(US(yo,kt.dir0),t0),yo);pe[le]=ir,W=m0(la(yo),ir)}else if(ht.part===1){let ue=m0(ot(Ea(kt.T,kt.elbow),Me),la(kt.qf0));pe[le]=ue,W=m0(la(pe[ve.parent]),ue)}else{let ue=Be[ht.side],fe=m0(ot([ht.side==="Left"?.12:-.12,-.2-.1*ue.press,-1],Me),la(kt.qh0));pe[le]=fe,W=m0(la(pe[ve.parent]),fe)}}if(W){let kt=mt[le],ue=m0(la(kt),m0(W,kt));Je=Ar(ve.t,m0(ve.r,ue),ve.s)}Ct[le]=ve.parent<0?fn(Y,Je):fn(Ct[ve.parent],Je)}for(let le=0;le<$;le++)He[le]=fn(Ct[le],it[le]);a.pianist={head:[Ct[D.Head][12],Ct[D.Head][13],Ct[D.Head][14]]};let ye=tt%4.3;return{blink:ye<.16?Math.sin(ye/.16*Math.PI):0}}function De(tt,Vt){if(k)return S(tt);if(b)return Zt(tt,b);if(Vt)return Kt(Vt);let Xt=Math.sin(tt*2*Math.PI/4.2),Bt=tt%3.7,Le=Bt<.16?Math.sin(Bt/.16*Math.PI):0,Be=Math.sin(tt*.45),Ye=Math.sin(tt*.31+.8),Ie=Math.max(0,Math.sin(tt*.085)-.75)*4,io={RightArm:[0,-22*Ie,11*Be],RightForeArm:[0,8+26*Ie,0],RightHand:[38*Ye,0,6*Math.sin(tt*.7)],LeftUpLeg:[0,0,3.2*Math.sin(tt*.36)],RightFoot:[5*Math.sin(tt*.52+.4),0,0],Head:[0,1.6*Math.sin(tt*.21),0]};["Index","Middle","Ring","Pinky"].forEach((Y,gt)=>{let ft=Math.sin(tt*1.1-gt*.5);io["RightHand"+Y+"1"]=[0,0,8+12*ft],io["RightHand"+Y+"2"]=[0,0,6+10*ft]});let je={},po=(Y,gt)=>{for(let ft in Y){let Ct=Y[ft],pe=y1(Ct[0]*gt,Ct[1]*gt,Ct[2]*gt);je[ft]=je[ft]?m0(je[ft],pe):pe}};po(_1,1),po({Spine1:[Xt*.8,0,0],Spine2:[Xt*.6,0,0]},1),po(io,1);let Xe=new Array($),Ze=new Array($);for(let Y=0;Y<$;Y++){let gt=B[Y],ft=St[Y],Ct=je[gt.name];if(Ct){let pe=mt[Y],Me=m0(la(pe),m0(Ct,pe));ft=Ar(gt.t,m0(gt.r,Me),gt.s)}Xe[Y]=gt.parent<0?fn($e,ft):fn(Xe[gt.parent],ft),Ze[Y]=null}for(let Y=0;Y<$;Y++)He[Y]=fn(Xe[Y],it[Y]);let Mo=Y=>[Y[12],Y[13],Y[14]];return a.headPos=Mo(Xe[D.Head]),a.hipsPos=Mo(Xe[D.Hips]),a.headM=Xe[D.Head],{blink:Le}}function Ve(tt,Vt){let{pos:Xt,nrm:Bt,jnt:Le,wgt:Be,outP:Ye,outN:Ie,work:io,m:je}=tt,po=je.n,Xe=Xt;if(Vt){io.set(Xt);for(let Ze in tt.morphs){let Mo=Vt[Ze]||0;if(Mo<=0)continue;let Y=tt.morphs[Ze];for(let gt=0;gt<Y.idx.length;gt++){let ft=Y.idx[gt]*3;io[ft]+=Y.d[gt*3]*Mo,io[ft+1]+=Y.d[gt*3+1]*Mo,io[ft+2]+=Y.d[gt*3+2]*Mo}}Xe=io}for(let Ze=0;Ze<po;Ze++){let Mo=Xe[Ze*3],Y=Xe[Ze*3+1],gt=Xe[Ze*3+2],ft=Bt[Ze*3],Ct=Bt[Ze*3+1],pe=Bt[Ze*3+2],Me=0,ye=0,le=0,ve=0,Je=0,W=0;for(let kt=0;kt<4;kt++){let ue=Be[Ze*4+kt];if(ue===0)continue;let fe=He[Le[Ze*4+kt]];Me+=ue*(fe[0]*Mo+fe[4]*Y+fe[8]*gt+fe[12]),ye+=ue*(fe[1]*Mo+fe[5]*Y+fe[9]*gt+fe[13]),le+=ue*(fe[2]*Mo+fe[6]*Y+fe[10]*gt+fe[14]),ve+=ue*(fe[0]*ft+fe[4]*Ct+fe[8]*pe),Je+=ue*(fe[1]*ft+fe[5]*Ct+fe[9]*pe),W+=ue*(fe[2]*ft+fe[6]*Ct+fe[10]*pe)}Ye[Ze*3]=Me,Ye[Ze*3+1]=ye,Ye[Ze*3+2]=le;let ht=Math.hypot(ve,Je,W)||1;Ie[Ze*3]=ve/ht,Ie[Ze*3+1]=Je/ht,Ie[Ze*3+2]=W/ht}je.grid&&!Oo&&!b&&!k&&uo(tt),tt.sway&&Ln(tt),tt.pb.subdata(Ye),tt.nbuf.subdata(Ie)}function uo(tt){let[Vt,Xt]=tt.m.grid,Bt=tt.outP,Le=tt.outN,Be=cx.seat+.012;for(let Ye=1;Ye<Vt;Ye++){let Ie=Math.pow(1-Ye/(Vt-1),1.5);for(let io=0;io<Xt;io++){let je=(Ye*Xt+io)*3;Bt[je+1]>Be?Bt[je+1]=Be+(Bt[je+1]-Be)*Math.max(Ie,.15):Bt[je+1]=Be}}for(let Ye=0;Ye<Le.length;Ye+=3)Le[Ye]=0,Le[Ye+1]=1,Le[Ye+2]=0}let Oo=!1,wo=(tt,Vt,Xt,Bt,Le)=>({bone:D[tt],rate:Vt,damp:Xt,drag:Bt,most:Le,x:[0,0,0],v:[0,0,0],p:null,vel:[0,0,0]}),Fo={head:wo("Head",15,.32,.012,.035),chest:wo("Spine2",9,.38,.03,.1),hips:wo("Hips",7,.42,.045,.16)},qo=-1;function x0(tt){let Vt=qo<0?0:tt-qo;qo=tt;for(let Xt in Fo){let Bt=Fo[Xt],Le=He[Bt.bone],Be=yt[Bt.bone],Ye=Be[12],Ie=Be[13],io=Be[14],je=[Le[0]*Ye+Le[4]*Ie+Le[8]*io+Le[12],Le[1]*Ye+Le[5]*Ie+Le[9]*io+Le[13],Le[2]*Ye+Le[6]*Ie+Le[10]*io+Le[14]];if(!Bt.p||!(Vt>0)||Vt>.25||Math.hypot(je[0]-Bt.p[0],je[1]-Bt.p[1],je[2]-Bt.p[2])>.5){Bt.p=je,Bt.x=[0,0,0],Bt.v=[0,0,0],Bt.vel=[0,0,0];continue}let po=[(je[0]-Bt.p[0])/Vt,(je[1]-Bt.p[1])/Vt,(je[2]-Bt.p[2])/Vt],Xe=Math.max(1,Math.ceil(Vt/.016)),Ze=Vt/Xe;for(let Y=0;Y<3;Y++){let gt=Math.max(-30,Math.min(30,(po[Y]-Bt.vel[Y])/Vt)),ft=-po[Y]*Bt.drag;for(let Ct=0;Ct<Xe;Ct++)Bt.v[Y]+=((ft-Bt.x[Y])*Bt.rate*Bt.rate-2*Bt.damp*Bt.rate*Bt.v[Y]-gt)*Ze,Bt.x[Y]+=Bt.v[Y]*Ze}let Mo=Math.hypot(Bt.x[0],Bt.x[1],Bt.x[2]);if(Mo>Bt.most){let Y=Bt.most/Mo;Bt.x=[Bt.x[0]*Y,Bt.x[1]*Y,Bt.x[2]*Y]}Bt.p=je,Bt.vel=po}}for(let tt of zt){let Vt=tt.m,Xt=Vt.n,Bt=null,Le=null;if(Vt.kind===9){Le="head",Bt=new Float32Array(Xt);for(let Be=0;Be<Xt;Be++){let Ye=tt.uv[Be*2]<-.5?0:tt.uv[Be*2+1];Bt[Be]=Ye*Ye}}else if(Vt.name==="scarf"){Le="chest",Bt=new Float32Array(Xt);for(let Be=0;Be<Xt;Be++)Bt[Be]=l(1.52,1.12,tt.pos[Be*3+1])}else if(Vt.grid){Le="hips",Bt=new Float32Array(Xt);let Be=Vt.grid[0],Ye=Vt.grid[1];for(let Ie=0;Ie<Xt;Ie++)Bt[Ie]=Math.pow(Math.floor(Ie/Ye)/(Be-1),1.6)}Bt&&(tt.sway=Bt,tt.spring=Fo[Le],tt.loose=Le)}function Ln(tt){if(!Oo&&!k&&!b)return;let Vt=tt.spring.x,Xt=tt.sway,Bt=tt.outP;if(!(Math.abs(Vt[0])+Math.abs(Vt[1])+Math.abs(Vt[2])<1e-5))for(let Le=0,Be=Xt.length;Le<Be;Le++){let Ye=Xt[Le];Ye>0&&(Bt[Le*3]+=Vt[0]*Ye,Bt[Le*3+1]+=Vt[1]*Ye,Bt[Le*3+2]+=Vt[2]*Ye)}}function Nn(tt,Vt){Oo=!!Vt;let Xt=De(tt,Vt);x0(tt);let Bt={eyeBlinkLeft:Xt.blink,eyeBlinkRight:Xt.blink};for(let Le of zt)Ve(Le,Object.keys(Le.morphs).length?Bt:null);a.pose=Xt}return{parts:zt,update:Nn,drawOpaque:It,drawBlend:re,state:a}}function l(z,P,R){let B=Math.min(1,Math.max(0,(R-z)/(P-z)));return B*B*(3-2*B)}let v=VS(),u=XS(),p=u?t.texture({data:u,flipY:!1,min:"linear",mag:"linear"}):c,d=t({vert:YS,frag:KS,attributes:{position:v.pos,normal:v.nrm,uv:v.uv,kind:v.kind},elements:new Uint16Array(v.idx),uniforms:{model:t.prop("model"),turn:0,fold:1.12,cover:p},cull:{enable:!1}}),h=ZS(),g=t({vert:QS,frag:JS,attributes:{position:h.pos,normal:h.nrm,color:h.col,mat:h.mat},elements:new Uint16Array(h.idx),uniforms:{model:t.prop("model"),pulse:t.prop("pulse")},cull:{enable:!1}}),m=t({vert:t7,frag:e7,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{center:t.prop("center"),size:t.prop("size"),pulse:t.prop("pulse")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});function x(z){let P=z.headM,R=zt=>{let It=Math.hypot(...zt)||1;return zt.map(re=>re/It)},B=R([P[4],P[5],P[6]]),$=R([P[8],P[9],P[10]]),D=B,it=$.map(zt=>-zt),St=[it[1]*D[2]-it[2]*D[1],it[2]*D[0]-it[0]*D[2],it[0]*D[1]-it[1]*D[0]],yt=z.headPos,mt=[0,1,2].map(zt=>yt[zt]+B[zt]*.06+$[zt]*.185);return[St[0],St[1],St[2],0,it[0],it[1],it[2],0,D[0],D[1],D[2],0,mt[0],mt[1],mt[2],1]}let y=-1,_="",M=null,b=null,k=!1;function E(z){if(!o)return;let P=(nx.motion,n()),R=M?[M.x,M.z,M.heading,M.phase].map($=>$.toFixed(4)).join():"";(b||k||R!==_||!M&&Math.abs(P-y)>(nx.isPhone?1/30:0))&&(o.update(P,M),y=P,_=R);for(let $ of o.parts)$.blend||(o.drawOpaque({pb:$.pb,nb:$.nbuf,uv:$.uvBuf,el:$.el,tex:$.tex,alphaCut:$.alphaCut,skin:$.skin,kind:$.kind,alphaScale:$.alphaScale}),$.sockEl&&o.drawOpaque({pb:$.pb,nb:$.nbuf,uv:$.uvBuf,el:$.sockEl,tex:c,alphaCut:0,skin:0,kind:8,alphaScale:1}));let B=o.state;if(B.headM&&!M&&!b&&!k){d({model:x(B)});let $=B.headPos,D=Math.sin(P*1.3)*.02,it=[$[0],$[1]+.62+D,$[2]+.05],St=P*.6,yt=Ar(it,m0(zs([0,1,0],St),zs([0,0,1],.18)),[1.2,1.2,1.2]),mt=.5+.5*Math.sin(P*2);g({model:yt,pulse:mt}),a.glowPos=it,a.glow=.06+.03*mt,m({center:[it[0],it[1]-.12,it[2]],size:.1,pulse:mt})}for(let $ of o.parts)$.blend&&o.drawBlend({pb:$.pb,nb:$.nbuf,uv:$.uvBuf,el:$.el,tex:$.tex,alphaCut:$.alphaCut,skin:$.skin,kind:$.kind,alphaScale:$.alphaScale})}return E.state=a,E.place=bi,E.setWalk=z=>{M=z||null,M&&(a.glow=0)},E.setSeat=z=>{b=z||null,a.glow=b?0:a.glow,y=-1},E.setPiano=z=>{z=!!z,z!==k&&(k=z,k&&(a.glow=0),y=-1)},E};ap.exports.PLACE=bi});var sp=Tt((KA,dx)=>{"use strict";dx.exports={name:"Muzammil",title:"Hi, I\u2019m Muzammil.",text:`I\u2019m a self-taught artist. I paint emotions. Grief, longing, love, and the quiet ways we keep holding on. I borrow the light and stillness of the Renaissance to talk about very modern feelings.

This gallery is my portfolio, built brick by pixel, so my work has a home that never closes. Every painting comes with a few words, because some feelings need both a frame and a sentence.

You\u2019ll find me in the tree court, catching sunlight and trying not to get too absorbed. Wander the halls, stay as long as you like, and don\u2019t worry about the time. In here, the only thing that\u2019s drying is the paint.`}});var cp=Tt((ZA,yx)=>{"use strict";var gx=qr(),px=Ll(),Es=t=>String(t).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function ip(){return gx.isPhone||!window.matchMedia||!window.matchMedia("(pointer: fine)").matches?!1:window.innerWidth>=900&&window.innerHeight>=520}var o7=`
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
`,vx=!1;function xx(){if(vx)return;vx=!0;let t=document.createElement("style");t.textContent=o7,document.head.appendChild(t)}var n7='<svg class="visit-play" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="10.2"/><path d="M10 8.4l6 3.6-6 3.6z" fill="currentColor" stroke="none"/></svg>';function r7(t){return!t||!t.visit||!ip()?"":(xx(),`<button type="button" class="visit-btn" data-visit="${Es(t.slug||"")}" aria-label="Visit what remained: watch ${Es(t.title)} come to life">${n7}<span>Visit what remained</span></button>`)}function a7(t){let e=t.getContext("2d");t.width=t.height=160;let o=e.createImageData(160,160),r=!0,n=0;return function a(s){if(r){if(s-n>70){n=s;let i=o.data;for(let c=0;c<i.length;c+=4){let f=Math.random()*255;i[c]=i[c+1]=i[c+2]=f,i[c+3]=255}e.putImageData(o,0,0),t.style.transform=`translate(${(Math.random()*6-3).toFixed(1)}%, ${(Math.random()*6-3).toFixed(1)}%)`}requestAnimationFrame(a)}}(0),()=>{r=!1}}var yf=null;function s7(t){if(yf||!t||!t.visit)return;xx();let e=document.activeElement;document.body.classList.add("visiting");let o="images/web/"+t.slug+(gx.isPhone?"-1024":"")+".webp",r=document.createElement("div");r.className="visit",r.setAttribute("role","dialog"),r.setAttribute("aria-modal","true"),r.setAttribute("aria-label","Visiting "+t.title),r.innerHTML=`
		<video muted playsinline preload="auto" ${t.visit.poster?`poster="${Es(t.visit.poster)}"`:""}></video>
		<img class="visit-art" alt="${Es(t.title)}, ${Es(px(t))}" src="${Es(o)}">
		<canvas class="visit-grain" aria-hidden="true"></canvas>
		<div class="visit-vignette" aria-hidden="true"></div>
		<div class="visit-bar top" aria-hidden="true"></div>
		<div class="visit-bar bottom" aria-hidden="true"></div>
		<div class="visit-title">
			<span class="visit-kicker">A visit</span>
			<span class="visit-name">${Es(t.title)}</span>
			<span class="visit-meta">${Es(px(t))}</span>
		</div>
		<button type="button" class="visit-close" aria-label="Return to the gallery">\xD7</button>
		<button type="button" class="visit-skip">Skip</button>
		<div class="visit-end">
			<button type="button" class="primary" data-act="back">Return to the gallery</button>
			<button type="button" data-act="again">Watch again</button>
		</div>`,document.body.appendChild(r);let n=r.querySelector("video"),a=r.querySelector(".visit-title"),s=a7(r.querySelector(".visit-grain")),i=[],c=(g,m)=>i.push(setTimeout(g,m)),f=g=>g.stopPropagation();["mousedown","pointerdown","click","wheel","touchstart","touchmove"].forEach(g=>r.addEventListener(g,f));let l=g=>{g.key==="Escape"?(g.preventDefault(),h()):g.key===" "&&!(g.target&&g.target.tagName==="BUTTON")&&(g.preventDefault(),p()),g.stopImmediatePropagation()};window.addEventListener("keydown",l,!0);let v=g=>g.stopImmediatePropagation();window.addEventListener("keyup",v,!0);let u=!1;function p(){u||(u=!0,a.classList.add("on"),r.classList.add("resolved"),c(()=>{let g=r.querySelector('[data-act="back"]');g&&g.focus({preventScroll:!0})},1300))}function d(){u=!1,r.classList.remove("resolved"),a.classList.remove("on");try{n.currentTime=0}catch(m){}let g=n.play();g&&g.catch&&g.catch(()=>p()),r.classList.add("playing"),c(()=>{u||a.classList.add("on")},1600),c(()=>{u||a.classList.remove("on")},6200)}n.addEventListener("timeupdate",()=>{n.duration&&n.currentTime>n.duration-1.2&&p()}),n.addEventListener("ended",p),n.addEventListener("error",p);function h(){if(yf){yf=null,i.forEach(clearTimeout),r.classList.remove("on");try{n.pause()}catch(g){}window.removeEventListener("keydown",l,!0),window.removeEventListener("keyup",v,!0),document.body.classList.remove("visiting"),setTimeout(()=>{s(),r.remove(),e&&e.focus&&e.focus({preventScroll:!0})},1150)}}r.querySelector(".visit-close").addEventListener("click",h),r.querySelector(".visit-skip").addEventListener("click",()=>{try{n.pause()}catch(g){}p()}),r.querySelector(".visit-end").addEventListener("click",g=>{let m=g.target.closest("button");m&&(m.dataset.act==="back"&&h(),m.dataset.act==="again"&&(i.forEach(clearTimeout),d()))}),n.src=t.visit.video,yf={close:h},requestAnimationFrame(()=>{r.classList.add("on"),c(d,1300)})}var mx={};function i7(t){if(!t||!t.visit||mx[t.visit.video]||!ip())return;mx[t.visit.video]=!0;let e=document.createElement("link");e.rel="preload",e.as="video",e.href=t.visit.video,document.head.appendChild(e)}yx.exports={available:ip,button:r7,open:s7,warm:i7,get active(){return!!yf}}});var _x=Tt((QA,wx)=>{"use strict";var c7=qr(),Uc=[0,0],Dc=[0,0],Ya=null,fp=0;if(typeof window!="undefined"){window.addEventListener("pointermove",e=>{e.pointerType!=="touch"&&(Uc[0]=Math.max(-1,Math.min(1,e.clientX/window.innerWidth*2-1)),Uc[1]=Math.max(-1,Math.min(1,e.clientY/window.innerHeight*2-1)),fp=performance.now())},{passive:!0});let t=()=>{fp=performance.now()};["wheel","touchstart","touchmove","keydown","pointerdown"].forEach(e=>window.addEventListener(e,t,{passive:!0,capture:!0})),window.addEventListener("deviceorientation",e=>{e.gamma===null||e.beta===null||(Ya||(Ya=[e.gamma,e.beta]),Ya[0]+=(e.gamma-Ya[0])*.01,Ya[1]+=(e.beta-Ya[1])*.01,Uc[0]=Math.max(-1,Math.min(1,(e.gamma-Ya[0])/14)),Uc[1]=Math.max(-1,Math.min(1,(e.beta-Ya[1])/14)))},{passive:!0})}var bx=0,Fc=null,S1=null,Aa=[0,0,0],lp=0,Gc=null,Hc=0,wi={eye:[0,0,0],target:[0,0,0],fov:50,roll:0},l7={apply(t,e){let o=Math.min(.1,Math.max(0,e-bx));bx=e;let r=t.eye,n=t.target,a=[n[0]-r[0],n[1]-r[1],n[2]-r[2]],s=Math.hypot(a[0],a[1],a[2])||1;a=[a[0]/s,a[1]/s,a[2]/s];let i=[-a[2],0,a[0]],c=Math.hypot(i[0],i[2])||1;i=[i[0]/c,0,i[2]/c];let f=[i[1]*a[2]-i[2]*a[1],i[2]*a[0]-i[0]*a[2],i[0]*a[1]-i[1]*a[0]],l=!Fc;if(Fc&&o>0){let y=[r[0]-Fc[0],r[1]-Fc[1],r[2]-Fc[2]],_=Math.hypot(y[0],y[1],y[2]);if(_>2.5)l=!0;else{let b=Math.min(1,o*5);for(let k=0;k<3;k++)Aa[k]+=(y[k]/o-Aa[k])*b}let M=Math.hypot(n[0]-S1[0],n[1]-S1[1],n[2]-S1[2]);Hc=_/o<.12&&M/o<.2?Hc+o:0}l&&(Aa[0]=Aa[1]=Aa[2]=0,Hc=0),Fc=r.slice(),S1=n.slice(),lp=Math.hypot(Aa[0],Aa[1],Aa[2]);let v=Math.min(1,o*2.6);Dc[0]+=(Uc[0]-Dc[0])*v,Dc[1]+=(Uc[1]-Dc[1])*v;let u=Math.max(.03,Math.min(.32,s*.05)),p=(c7.isPhone&&!Ya?1.5:1)*Math.min(1,Hc/2.5),d=(Math.sin(e*.131)*.55+Math.sin(e*.071+1.3)*.45)*u*.55*p,h=Math.sin(e*.097+.6)*u*.16*p,g=Dc[0]*u+d,m=-Dc[1]*u*.45+h;for(let y=0;y<3;y++)wi.eye[y]=r[y]+i[y]*g+f[y]*m,wi.target[y]=n[y]+(i[y]*g+f[y]*m)*.12;r[1]>.05&&(wi.eye[1]=Math.max(.05,wi.eye[1]));let x=Aa[0]*i[0]+Aa[2]*i[2];return wi.fov=t.fov+Math.min(3.5,lp*.55),wi.roll=(t.roll||0)+Math.max(-.035,Math.min(.035,-x*.006)),wi},pull(t,e){(Gc===null||!(Math.abs(t.focus-Gc)<40))&&(Gc=t.focus);let o=1/60;Gc+=(t.focus-Gc)*Math.min(1,o*3.2),t.focus=Gc,t.aperture>0&&(t.aperture*=1+.25*Math.min(1,Hc/3))},get speed(){return lp},get resting(){return Hc>2&&performance.now()-fp>2e3}};wx.exports=l7});var hp=Tt((JA,Mx)=>{Mx.exports=1e-6});var up=Tt((tT,kx)=>{kx.exports=f7;function f7(){var t=new Float32Array(3);return t[0]=0,t[1]=0,t[2]=0,t}});var zx=Tt((eT,Sx)=>{Sx.exports=h7;function h7(t){var e=new Float32Array(3);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}});var dp=Tt((oT,Ex)=>{Ex.exports=u7;function u7(t,e,o){var r=new Float32Array(3);return r[0]=t,r[1]=e,r[2]=o,r}});var pp=Tt((nT,Ax)=>{Ax.exports=d7;function d7(t,e){var o=e[0],r=e[1],n=e[2],a=o*o+r*r+n*n;return a>0&&(a=1/Math.sqrt(a),t[0]=e[0]*a,t[1]=e[1]*a,t[2]=e[2]*a),t}});var vp=Tt((rT,Tx)=>{Tx.exports=p7;function p7(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}});var Rx=Tt((aT,Ox)=>{Ox.exports=m7;var Lx=dp(),Nx=pp(),v7=vp();function m7(t,e){var o=Lx(t[0],t[1],t[2]),r=Lx(e[0],e[1],e[2]);Nx(o,o),Nx(r,r);var n=v7(o,r);return n>1?0:Math.acos(n)}});var $x=Tt((sT,Cx)=>{Cx.exports=g7;function g7(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}});var Ix=Tt((iT,Px)=>{Px.exports=x7;function x7(t,e,o,r){return t[0]=e,t[1]=o,t[2]=r,t}});var Dx=Tt((cT,qx)=>{qx.exports=y7;var mp=hp();function y7(t,e){var o=t[0],r=t[1],n=t[2],a=e[0],s=e[1],i=e[2];return Math.abs(o-a)<=mp*Math.max(1,Math.abs(o),Math.abs(a))&&Math.abs(r-s)<=mp*Math.max(1,Math.abs(r),Math.abs(s))&&Math.abs(n-i)<=mp*Math.max(1,Math.abs(n),Math.abs(i))}});var Gx=Tt((lT,Fx)=>{Fx.exports=b7;function b7(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]}});var Ux=Tt((fT,Hx)=>{Hx.exports=w7;function w7(t,e,o){return t[0]=e[0]+o[0],t[1]=e[1]+o[1],t[2]=e[2]+o[2],t}});var gp=Tt((hT,Bx)=>{Bx.exports=_7;function _7(t,e,o){return t[0]=e[0]-o[0],t[1]=e[1]-o[1],t[2]=e[2]-o[2],t}});var Wx=Tt((uT,jx)=>{jx.exports=gp()});var xp=Tt((dT,Vx)=>{Vx.exports=M7;function M7(t,e,o){return t[0]=e[0]*o[0],t[1]=e[1]*o[1],t[2]=e[2]*o[2],t}});var Yx=Tt((pT,Xx)=>{Xx.exports=xp()});var yp=Tt((vT,Kx)=>{Kx.exports=k7;function k7(t,e,o){return t[0]=e[0]/o[0],t[1]=e[1]/o[1],t[2]=e[2]/o[2],t}});var Qx=Tt((mT,Zx)=>{Zx.exports=yp()});var ty=Tt((gT,Jx)=>{Jx.exports=S7;function S7(t,e,o){return t[0]=Math.min(e[0],o[0]),t[1]=Math.min(e[1],o[1]),t[2]=Math.min(e[2],o[2]),t}});var oy=Tt((xT,ey)=>{ey.exports=z7;function z7(t,e,o){return t[0]=Math.max(e[0],o[0]),t[1]=Math.max(e[1],o[1]),t[2]=Math.max(e[2],o[2]),t}});var ry=Tt((yT,ny)=>{ny.exports=E7;function E7(t,e){return t[0]=Math.floor(e[0]),t[1]=Math.floor(e[1]),t[2]=Math.floor(e[2]),t}});var sy=Tt((bT,ay)=>{ay.exports=A7;function A7(t,e){return t[0]=Math.ceil(e[0]),t[1]=Math.ceil(e[1]),t[2]=Math.ceil(e[2]),t}});var cy=Tt((wT,iy)=>{iy.exports=T7;function T7(t,e){return t[0]=Math.round(e[0]),t[1]=Math.round(e[1]),t[2]=Math.round(e[2]),t}});var fy=Tt((_T,ly)=>{ly.exports=L7;function L7(t,e,o){return t[0]=e[0]*o,t[1]=e[1]*o,t[2]=e[2]*o,t}});var uy=Tt((MT,hy)=>{hy.exports=N7;function N7(t,e,o,r){return t[0]=e[0]+o[0]*r,t[1]=e[1]+o[1]*r,t[2]=e[2]+o[2]*r,t}});var bp=Tt((kT,dy)=>{dy.exports=O7;function O7(t,e){var o=e[0]-t[0],r=e[1]-t[1],n=e[2]-t[2];return Math.sqrt(o*o+r*r+n*n)}});var vy=Tt((ST,py)=>{py.exports=bp()});var wp=Tt((zT,my)=>{my.exports=R7;function R7(t,e){var o=e[0]-t[0],r=e[1]-t[1],n=e[2]-t[2];return o*o+r*r+n*n}});var xy=Tt((ET,gy)=>{gy.exports=wp()});var _p=Tt((AT,yy)=>{yy.exports=C7;function C7(t){var e=t[0],o=t[1],r=t[2];return Math.sqrt(e*e+o*o+r*r)}});var wy=Tt((TT,by)=>{by.exports=_p()});var Mp=Tt((LT,_y)=>{_y.exports=$7;function $7(t){var e=t[0],o=t[1],r=t[2];return e*e+o*o+r*r}});var ky=Tt((NT,My)=>{My.exports=Mp()});var zy=Tt((OT,Sy)=>{Sy.exports=P7;function P7(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t}});var Ay=Tt((RT,Ey)=>{Ey.exports=I7;function I7(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t}});var Ly=Tt((CT,Ty)=>{Ty.exports=q7;function q7(t,e,o){var r=e[0],n=e[1],a=e[2],s=o[0],i=o[1],c=o[2];return t[0]=n*c-a*i,t[1]=a*s-r*c,t[2]=r*i-n*s,t}});var Oy=Tt(($T,Ny)=>{Ny.exports=D7;function D7(t,e,o,r){var n=e[0],a=e[1],s=e[2];return t[0]=n+r*(o[0]-n),t[1]=a+r*(o[1]-a),t[2]=s+r*(o[2]-s),t}});var Cy=Tt((PT,Ry)=>{Ry.exports=F7;function F7(t,e){e=e||1;var o=Math.random()*2*Math.PI,r=Math.random()*2-1,n=Math.sqrt(1-r*r)*e;return t[0]=Math.cos(o)*n,t[1]=Math.sin(o)*n,t[2]=r*e,t}});var Py=Tt((IT,$y)=>{$y.exports=G7;function G7(t,e,o){var r=e[0],n=e[1],a=e[2],s=o[3]*r+o[7]*n+o[11]*a+o[15];return s=s||1,t[0]=(o[0]*r+o[4]*n+o[8]*a+o[12])/s,t[1]=(o[1]*r+o[5]*n+o[9]*a+o[13])/s,t[2]=(o[2]*r+o[6]*n+o[10]*a+o[14])/s,t}});var qy=Tt((qT,Iy)=>{Iy.exports=H7;function H7(t,e,o){var r=e[0],n=e[1],a=e[2];return t[0]=r*o[0]+n*o[3]+a*o[6],t[1]=r*o[1]+n*o[4]+a*o[7],t[2]=r*o[2]+n*o[5]+a*o[8],t}});var Fy=Tt((DT,Dy)=>{Dy.exports=U7;function U7(t,e,o){var r=e[0],n=e[1],a=e[2],s=o[0],i=o[1],c=o[2],f=o[3],l=f*r+i*a-c*n,v=f*n+c*r-s*a,u=f*a+s*n-i*r,p=-s*r-i*n-c*a;return t[0]=l*f+p*-s+v*-c-u*-i,t[1]=v*f+p*-i+u*-s-l*-c,t[2]=u*f+p*-c+l*-i-v*-s,t}});var Hy=Tt((FT,Gy)=>{Gy.exports=B7;function B7(t,e,o,r){var n=o[1],a=o[2],s=e[1]-n,i=e[2]-a,c=Math.sin(r),f=Math.cos(r);return t[0]=e[0],t[1]=n+s*f-i*c,t[2]=a+s*c+i*f,t}});var By=Tt((GT,Uy)=>{Uy.exports=j7;function j7(t,e,o,r){var n=o[0],a=o[2],s=e[0]-n,i=e[2]-a,c=Math.sin(r),f=Math.cos(r);return t[0]=n+i*c+s*f,t[1]=e[1],t[2]=a+i*f-s*c,t}});var Wy=Tt((HT,jy)=>{jy.exports=W7;function W7(t,e,o,r){var n=o[0],a=o[1],s=e[0]-n,i=e[1]-a,c=Math.sin(r),f=Math.cos(r);return t[0]=n+s*f-i*c,t[1]=a+s*c+i*f,t[2]=e[2],t}});var Xy=Tt((UT,Vy)=>{Vy.exports=V7;var As=up()();function V7(t,e,o,r,n,a){var s,i;for(e||(e=3),o||(o=0),r?i=Math.min(r*e+o,t.length):i=t.length,s=o;s<i;s+=e)As[0]=t[s],As[1]=t[s+1],As[2]=t[s+2],n(As,As,a),t[s]=As[0],t[s+1]=As[1],t[s+2]=As[2];return t}});var Ky=Tt((BT,Yy)=>{Yy.exports={EPSILON:hp(),create:up(),clone:zx(),angle:Rx(),fromValues:dp(),copy:$x(),set:Ix(),equals:Dx(),exactEquals:Gx(),add:Ux(),subtract:gp(),sub:Wx(),multiply:xp(),mul:Yx(),divide:yp(),div:Qx(),min:ty(),max:oy(),floor:ry(),ceil:sy(),round:cy(),scale:fy(),scaleAndAdd:uy(),distance:bp(),dist:vy(),squaredDistance:wp(),sqrDist:xy(),length:_p(),len:wy(),squaredLength:Mp(),sqrLen:ky(),negate:zy(),inverse:Ay(),normalize:pp(),dot:vp(),cross:Ly(),lerp:Oy(),random:Cy(),transformMat4:Py(),transformMat3:qy(),transformQuat:Fy(),rotateX:Hy(),rotateY:By(),rotateZ:Wy(),forEach:Xy()}});var Jy=Tt((jT,Qy)=>{"use strict";function Zy(){let t={};return{on(e,o){return(t[e]=t[e]||[]).push(o),this},emit(e,o){(t[e]||[]).slice().forEach(r=>r(o))}}}Qy.exports=function(e){let o=e.ownerDocument||document,r=Zy(),n=null,a={dx:0,dy:0,dt:0},s=0,i=()=>o.pointerLockElement||o.webkitPointerLockElement||null,c=()=>{if(i())return;let l=e.requestPointerLock||e.webkitRequestPointerLock;if(l)try{let v=l.call(e);v&&v.catch&&v.catch(()=>{})}catch(v){}};e.addEventListener("mousedown",c,!1);let f=()=>{if(!i()){n&&(r.emit("release"),n.emit("end"),n=null);return}n=Zy(),s=Date.now(),r.emit("attain",n)};return o.addEventListener("pointerlockchange",f),o.addEventListener("webkitpointerlockchange",f),o.addEventListener("pointerlockerror",()=>r.emit("error")),(o.body||e).addEventListener("mousemove",l=>{n&&(a.dx=l.movementX||l.webkitMovementX||0,a.dy=l.movementY||l.webkitMovementY||0,a.dt=Date.now()-s,r.emit("data",a),n.emit("data",a))},!1),r.request=c,r.target=i,r.release=()=>{i()&&(o.exitPointerLock||o.webkitExitPointerLock).call(o)},r}});var rb=Tt((XT,nb)=>{"use strict";var _i=kc(),Mi=Ky(),X7=Jy(),WT=Math.PI/4,VT=Math.PI/6,tb=2,Y7=1,K7=2.4,Z7=2.4,Q7=1e3,J7=5,tz=7,kp=On().C,bf=[[7,1.6],[7,kp.zc],[kp.x1-2.95,kp.zc]],Ts=bf.slice(1).map((t,e)=>{let o=bf[e],r=t[0]-o[0],n=t[1]-o[1],a=Math.hypot(r,n);return{a:o,len:a,dir:[r/a,n/a]}}),Sp=Ts.reduce((t,e)=>t+e.len,0);function eb(t){let e=Math.max(0,Math.min(Sp,t));for(let r of Ts){if(e<=r.len)return[r.a[0]+r.dir[0]*e,r.a[1]+r.dir[1]*e];e-=r.len}let o=bf[bf.length-1];return[o[0],o[1]]}function ez(t){let e=0;for(let r=0;r<Ts.length;r++){let n=Ts[r],a=e+n.len;if(t<a-1e-4||r===Ts.length-1){let s=n.dir,c=t<=e+1e-4&&r>0?Ts[r-1].dir:n.dir;return{ahead:s,back:[-c[0],-c[1]]}}e=a}let o=Ts[Ts.length-1].dir;return{ahead:o,back:[-o[0],-o[1]]}}var oz=Math.PI/4,nz=7,rz=140,az=70,ob=(t,e,o)=>(1-t)*e+t*o,sz=t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2;nb.exports=function({getGridSegments:t,getGridParts:e},o){var r=[0,Math.PI],n=[0,Math.PI],a=0,s=[0,0,0],i=[tz,tb,bf[0][1]],c=0,f=1,l=0,v=[.707,0,.707],u=[0,1,0],p=[0,0,0],d=.5,h=_i.identity([]),g=_i.identity([]),m=!1,x=[0,0,0],y=[0,0,0],_=1,M=!1;let b=j=>{r[1]+=j*oz},k=(j,lt,xt)=>{if(j=Math.max(Math.min(j,100),-100),lt=Math.max(Math.min(lt,100),-100),r[0]=0,M){a=0;return}for(a+=j;a>=xt;)b(1),a-=xt;for(;a<=-xt;)b(-1),a+=xt};X7(document.body).on("attain",j=>{j.on("data",lt=>{k(lt.dx,lt.dy,rz)})});let z=null,P=null,R=0,B={x:0,y:0},$=58,D=document.createElement("div");D.id="museum-mobile-controls",D.innerHTML=`

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
	`,document.body.appendChild(D);let it=D.querySelector("#museum-joystick"),St=D.querySelector("#museum-joystick-knob"),yt=()=>{St.style.transform="translate(-50%, -50%)",s[0]=0,s[2]=0},mt=j=>{let lt=j.clientX-B.x,xt=j.clientY-B.y,Kt=Math.hypot(lt,xt);if(Kt>$&&(lt=lt/Kt*$,xt=xt/Kt*$),St.style.transform=`translate(
				calc(-50% + ${lt}px),
				calc(-50% + ${xt}px)
			)`,Kt<10){s[0]=0,s[2]=0;return}let Zt=lt/$,qt=xt/$;s[0]=0,s[2]=Math.abs(qt)>.15?qt:0},zt=(j,lt)=>{for(let xt=0;xt<j.length;xt++)if(j[xt].identifier===lt)return j[xt];return null},It=j=>!!(j&&j.closest&&j.closest(".painting-plaque, .story-overlay, .story-card, .story-close, button")),re=j=>{if(!It(j.target)&&(j.cancelable&&j.preventDefault(),!M))for(let lt=0;lt<j.changedTouches.length;lt++){let xt=j.changedTouches[lt];if(z===null&&xt.clientX<window.innerWidth*.48){z=xt.identifier;let Kt=it.getBoundingClientRect();B.x=Kt.left+Kt.width/2,B.y=Kt.top+Kt.height/2,mt(xt)}else P===null&&xt.clientX>=window.innerWidth*.48&&(P=xt.identifier,R=xt.clientX,a=0)}},Ae=j=>{if(It(j.target)||(j.cancelable&&j.preventDefault(),M))return;let lt=z===null?null:zt(j.touches,z);lt&&mt(lt);let xt=P===null?null:zt(j.touches,P);if(xt){let Kt=xt.clientX-R;R=xt.clientX,k(Kt,0,az)}},lo=j=>{if(!It(j.target)){j.cancelable&&j.preventDefault();for(let lt=0;lt<j.changedTouches.length;lt++){let xt=j.changedTouches[lt];xt.identifier===z&&(z=null,yt()),xt.identifier===P&&(P=null)}}};document.addEventListener("touchstart",re,{passive:!1}),document.addEventListener("touchmove",Ae,{passive:!1}),document.addEventListener("touchend",lo,{passive:!1}),document.addEventListener("touchcancel",lo,{passive:!1});let ge=document.createElement("style");ge.textContent=`

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
	`,document.head.appendChild(ge);var $e={};let He=j=>{if(j.defaultPrevented||j.ctrlKey||j.altKey||j.metaKey)return;let lt=j.type==="keydown";$e[j.code]=lt,lt&&!j.repeat&&!M&&((j.code==="KeyA"||j.code==="ArrowLeft")&&b(-1),(j.code==="KeyD"||j.code==="ArrowRight")&&b(1)),m=!1;let xt=$e.KeyW||$e.ArrowUp?1:0;s=[0,0,($e.KeyS||$e.ArrowDown?1:0)-xt],j.preventDefault()};window.addEventListener("keydown",He),window.addEventListener("keyup",He);var et=0;return{pos:i,fmouse:n,forward:v,up:u,setPaused:j=>{M=!!j,M&&(s[0]=0,s[2]=0,yt())},place:(j,lt)=>{c=Math.max(0,Math.min(Sp,j));let xt=eb(c);i[0]=xt[0],i[2]=xt[1],r[1]=lt,n[1]=lt,a=0,f=1},view:()=>h,proj:()=>(_i.perspective(g,o(),window.innerWidth/window.innerHeight,.1,700),g),tick:({time:j})=>{let lt=j-et;et=j;let xt=[0,0,0],Kt=[];Mi.set(v,Math.sin(n[1]),0,-Math.cos(n[1])),Mi.set(u,0,1,0);let te=m?Z7:K7,Zt=Math.sin(r[1]),qt=-Math.cos(r[1]),ot=ez(c),Rt=Zt*ot.ahead[0]+qt*ot.ahead[1],Se=Zt*ot.back[0]+qt*ot.back[1],Qt=f;Math.max(Rt,Se)>.3&&(Qt=Rt>=Se?1:-1);let Ft=M?0:-s[2]*te;l+=(Ft-l)*(1-Math.exp(-Math.min(lt,.1)*5.5)),Ft===0&&Math.abs(l)<.01&&(l=0);let Ue=l*Qt*Math.min(lt,.1);M&&(s[0]=0,s[2]=0,Ue=0,l=0),Ue!==0&&(f=Math.sign(Ue)*Math.sign(-s[2]||1)),c=Math.max(0,Math.min(Sp,c+Ue));let S=eb(c);Mi.set(p,S[0]-i[0],0,S[1]-i[2]);let De=Mi.len(p);De===0&&d!==.25&&(d=(Math.abs((d+.5)%1-.5)-.25)*.8+.25,(d+.01)%.25<.02&&(d=.25));let Ve=d;if(d+=De/(m?J7:Q7),i[1]=tb,Mi.add(i,i,p),_<1){_+=lt/Y7,_=Math.min(_,1);let uo=sz(_);Mi.set(i,ob(uo,x[0],y[0]),i[1],ob(uo,x[2],y[2]))}n[0]=0,n[1]+=(r[1]-n[1])*Math.min(1,Math.min(lt,.1)*nz),Math.abs(r[1]-n[1])<5e-4&&(n[1]=r[1]),_i.identity(h),_i.rotateX(h,h,0),_i.rotateY(h,h,n[1]),_i.translate(h,h,Mi.scale(xt,i,-1))}}}});var sb=Tt((YT,ab)=>{"use strict";var{skylightGLSL:iz,Z_START:cz,Z_END:lz,GLASS_Y:fz}=uc(),{oculusGLSL:hz,A:ki}=Gr(),{windowLightGLSL:uz,C:z1}=On(),{doorLightGLSL:dz}=ss(),E1=nn(),Si=t1(),zp=Tc(),jr=t=>t.toFixed(4),Ep=.1,Ap=700,Bc={exposure:.88,shafts:1,bloom:1,vignette:.42,grain:.032};function pz(t,e){let o=e[0],r=e[1],n=e[2],a=e[3],s=e[4],i=e[5],c=e[6],f=e[7],l=e[8],v=e[9],u=e[10],p=e[11],d=e[12],h=e[13],g=e[14],m=e[15],x=o*i-r*s,y=o*c-n*s,_=o*f-a*s,M=r*c-n*i,b=r*f-a*i,k=n*f-a*c,E=l*h-v*d,z=l*g-u*d,P=l*m-p*d,R=v*g-u*h,B=v*m-p*h,$=u*m-p*g,D=x*$-y*B+_*R+M*P-b*z+k*E;return D?(D=1/D,t[0]=(i*$-c*B+f*R)*D,t[1]=(n*B-r*$-a*R)*D,t[2]=(h*k-g*b+m*M)*D,t[3]=(u*b-v*k-p*M)*D,t[4]=(c*P-s*$-f*z)*D,t[5]=(o*$-n*P+a*z)*D,t[6]=(g*_-d*k-m*y)*D,t[7]=(l*k-u*_+p*y)*D,t[8]=(s*B-i*P+f*E)*D,t[9]=(r*P-o*B-a*E)*D,t[10]=(d*b-h*_+m*x)*D,t[11]=(v*_-l*b-p*x)*D,t[12]=(i*z-s*R-c*E)*D,t[13]=(o*R-r*z+n*E)*D,t[14]=(h*y-d*M-g*x)*D,t[15]=(l*M-v*y+u*x)*D,t):null}function vz(t,e,o){let r=new Array(16);for(let n=0;n<4;n++)for(let a=0;a<4;a++){let s=0;for(let i=0;i<4;i++)s+=e[i*4+a]*o[n*4+i];r[n*4+a]=s}for(let n=0;n<16;n++)t[n]=r[n];return t}var mz=`
precision highp float;
attribute vec2 position;
varying vec2 uv;
void main() {
	uv = position * 0.5 + 0.5;
	gl_Position = vec4(position, 0.0, 1.0);
}`;ab.exports=(t,e)=>{let o=!!e.isPhone,r=t.hasExtension("webgl_depth_texture"),n=o?10:18,a=()=>Si.zone==="studio"?4:e.post>=2?2:4,s=o?7:11,i=It=>t.texture(Object.assign({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"},It||{})),c=()=>t.framebuffer({color:i(),depth:!1}),f=i(),l=r?t.texture({width:4,height:4,format:"depth",type:"uint32"}):null,v=t.framebuffer({color:f,depth:l||!0}),u=[c(),c()],p=[c(),c()],d=[c(),c()],h=[c(),c()],g=new Array(16).fill(0),m=new Array(16).fill(0),x=[0,0,0],y={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},_={position:[-1,-1,3,-1,-1,3]},M=(It,re,Ae)=>t(Object.assign({vert:mz,frag:It,attributes:_,count:3,depth:{enable:!1,mask:!1},cull:{enable:!1},blend:{enable:!1},uniforms:re,framebuffer:t.prop("out")},Ae||{})),b=[2.6,0,cz-3.2,12.6,fz,lz+.4],k=[ki.x0-.2,0,ki.z0,ki.x1,ki.domeTop,ki.z1],E=[z1.x0,0,z1.z0,z1.x1,7.6,z1.z1],z=[.35,0,.35,13.65,7.6,9],P=zp.AIR_BOX,R=It=>`vec3(${jr(It[0])}, ${jr(It[1])}, ${jr(It[2])}), vec3(${jr(It[3])}, ${jr(It[4])}, ${jr(It[5])})`,B=M(`
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

	${iz()}
	${hz()}
	${uz()}
	${dz()}
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
			vec2 t = hitBox(eye, rd, ${R(k)});
			t.y = min(t.y, len);
			if (t.y > t.x) {
				float st = (t.y - t.x) / float(N);
				float acc = 0.0;
				for (int i = 0; i < N; i++) {
					vec3 p = eye + rd * (t.x + (float(i) + jit) * st);
					if (p.y < ${jr(ki.dome.base)} && p.x > ${jr(ki.x0-.1)}) acc += oculusOpen(p) * treeShade(p) * air(p);
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
	}`,{depthTex:()=>l,invVP:()=>g,eye:()=>x,time:t.context("time"),night:()=>E1.night,strength:()=>$,strength5:()=>D,studioBake:()=>zp.bakedSun(t)}),$=[0,0,0,0],D=0;function it(){let It=Bc.shafts*y.shafts,re=E1.night;return $[0]=Si.box(b)?.06*It*(1+.9*re):0,$[1]=Si.box(k,!1,"court")?.1*It*(1+.9*re):0,$[2]=Si.box(E)?.07*It*(1+.4*re):0,$[3]=Si.box(z)?.04*It*(1-.75*re):0,Si.zone==="studio"?($[0]=$[1]=$[2]=$[3]=0,D=.065*It*(1+1*re)):D=0,$[0]+$[1]+$[2]+$[3]+D>5e-4}let St=M(`
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
	}`,{src:t.prop("src"),dir:(It,re)=>[re.dir[0]/re.size[0],re.dir[1]/re.size[1]]}),yt=M(`
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
	}`,{src:t.prop("src"),texel:(It,re)=>[.5/re.size[0],.5/re.size[1]],threshold:t.prop("threshold")}),mt=M(`
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
		return 2.0 * ${jr(Ep)} * ${jr(Ap)} / (${jr(Ap+Ep)} - z * ${jr(Ap-Ep)});
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
	}`,{scene:()=>f,depthTex:()=>l||f,soft:()=>u[0],bloomA:()=>p[0],bloomB:()=>d[0],shafts:()=>h[0],res:()=>[v.width,v.height],time:t.context("time"),exposure:()=>Bc.exposure*y.exposure,vignette:()=>Math.min(1,Bc.vignette+y.vignette+.22*E1.night+(Si.zone==="studio"?.2:0)),night:()=>E1.night,grain:()=>Bc.grain,bloomK:()=>Bc.bloom,letterbox:()=>y.letterbox,fade:()=>y.fade,fadeColor:()=>y.fadeColor,aperture:()=>e.post>=2?y.aperture:0,focus:()=>y.focus,hasDepth:r?1:0},{framebuffer:null}),zt=t({framebuffer:()=>v});return{shot:y,look:Bc,hasDepth:r,capture(It,re,Ae){let lo=Math.max(.4,Math.min(1,e.scale||1)),ge=Math.max(2,Math.round(It.drawingBufferWidth*lo/2)*2),$e=Math.max(2,Math.round(It.drawingBufferHeight*lo/2)*2);(v.width!==ge||v.height!==$e)&&v.resize(ge,$e);let He=Math.max(1,Math.ceil(ge/2)),et=Math.max(1,Math.ceil($e/2));u.forEach(j=>j.resize(He,et)),p.forEach(j=>j.resize(Math.max(1,Math.ceil(ge/4)),Math.max(1,Math.ceil($e/4)))),d.forEach(j=>j.resize(Math.max(1,Math.ceil(ge/8)),Math.max(1,Math.ceil($e/8)))),h.forEach(j=>j.resize(Math.max(1,Math.ceil(ge/a())),Math.max(1,Math.ceil($e/a())))),vz(m,re.proj,re.view),pz(g,m),x[0]=re.eye[0],x[1]=re.eye[1],x[2]=re.eye[2],zt(()=>{t.clear({color:[0,0,0,1],depth:1}),Ae()})},present(){let It=re=>[re.width,re.height];r&&e.post>=1&&it()?(B({out:h[0]}),St({out:h[1],src:h[0],dir:[1,0],size:It(h[0])}),St({out:h[0],src:h[1],dir:[0,1],size:It(h[0])})):t.clear({color:[0,0,0,1],framebuffer:h[0]}),yt({out:u[0],src:f,size:[v.width,v.height],threshold:0}),St({out:u[1],src:u[0],dir:[1,0],size:It(u[0])}),St({out:u[0],src:u[1],dir:[0,1],size:It(u[0])}),yt({out:p[0],src:u[0],size:It(u[0]),threshold:.42}),St({out:p[1],src:p[0],dir:[1,0],size:It(p[0])}),St({out:p[0],src:p[1],dir:[0,1],size:It(p[0])}),yt({out:d[0],src:p[0],size:It(p[0]),threshold:0}),St({out:d[1],src:d[0],dir:[1.5,0],size:It(d[0])}),St({out:d[0],src:d[1],dir:[0,1.5],size:It(d[0])}),mt({out:null})}}}});var hb=Tt((KT,fb)=>{"use strict";var ib=nn().GLSL,gz=Js(),Tp=ss(),{C:xz,FAR_DOOR:yz}=On(),bz=100*Math.PI/180,cb=t=>[yz.x-t[2],t[1],xz.zc-7+t[0]],lb=t=>[-t[2],t[1],t[0]];function wz(t){let e=[],o=[],r=[],n=[],a=gz.createBuilder(e,o,r,n);Tp.addFrames(a,t);let s=Tp.glassPanes(t),i=c=>{let f=[];for(let l=0;l<c.length;l+=3)f.push([c[l],c[l+1],c[l+2]]);return f};return{position:i(e),normal:i(o),elements:r,glass:s}}fb.exports=t=>{let e=Tp.DOOR,o=["left","right"].map(l=>{let v=wz(l),u=v.position.length;return{part:l,hinge:l==="left"?e.x0:e.x1,sign:l==="left"?-1:1,src:v.position.map(p=>p.slice()),srcN:v.normal.map(p=>p.slice()),srcG:v.glass.map(p=>p.slice()),pos:t.buffer({data:new Float32Array(u*3),usage:"dynamic"}),nrm:t.buffer({data:new Float32Array(u*3),usage:"dynamic"}),gpos:t.buffer({data:new Float32Array(v.glass.length*3),usage:"dynamic"}),gnrm:t.buffer({data:new Float32Array(v.glass.length*3),usage:"dynamic"}),el:t.elements({data:new Uint32Array(v.elements),type:"uint32"}),glassCount:v.glass.length,outP:new Float32Array(u*3),outN:new Float32Array(u*3),outG:new Float32Array(v.glass.length*3),outGN:new Float32Array(v.glass.length*3)}}),r=null;function n(l){if(l!==r){r=l;for(let v of o){let u=v.sign*l,p=Math.cos(u),d=Math.sin(u),h=x=>{let y=x[0]-v.hinge,_=x[2];return[v.hinge+y*p+_*d,x[1],-y*d+_*p]},g=x=>[x[0]*p+x[2]*d,x[1],-x[0]*d+x[2]*p];v.src.forEach((x,y)=>{let _=cb(h(x));v.outP.set(_,y*3),v.outN.set(lb(g(v.srcN[y])),y*3)});let m=lb(g([0,0,1]));v.srcG.forEach((x,y)=>{v.outG.set(cb(h(x)),y*3),v.outGN.set(m,y*3)}),v.pos.subdata(v.outP),v.nrm.subdata(v.outN),v.gpos.subdata(v.outG),v.gnrm.subdata(v.outGN)}}}n(0);let a=`
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
		${ib}
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
		${ib}
		varying vec3 v_pos, v_n, v_eye;
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			float c = abs(dot(V, normalize(v_n)));
			float fres = pow(1.0 - c, 3.0);
			float d = (v_pos.x + v_pos.z) * 0.55 + v_pos.y * 0.85;
			float sheen = smoothstep(0.35, 0.0, abs(fract(d * 0.22) - 0.5)) * 0.05;
			float a = 0.05 + 0.32 * fres + sheen;
			gl_FragColor = vec4(toNight(mix(vec3(0.80, 0.86, 0.90), vec3(1.0, 0.95, 0.86), 0.4), 0.22), a);
		}`,attributes:{position:t.prop("pos"),normal:t.prop("nrm")},count:t.prop("count"),cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}}),c=0,f=()=>{n(c*bz);for(let l of o)s({pos:l.pos,nrm:l.nrm,el:l.el})};return f.glass=()=>{for(let l of o)i({pos:l.gpos,nrm:l.gnrm,count:l.glassCount})},f.setOpen=l=>{c=l||0},f.openNow=()=>c,f}});var db=Tt((ZT,ub)=>{"use strict";var _z=nn().GLSL,{skylightGLSL:Mz}=uc(),{oculusGLSL:kz}=Gr(),{windowLightGLSL:Sz}=On(),fa=.22;function zz(){let t=[],e=[],o=[],r=[],s=(l,v)=>{let u=fa*.2*Math.pow(Math.sin(Math.PI*Math.pow(l,.85)),.9)*(v>0?1.06:.94),p=l*fa-fa*.12,d=v*u,h=Math.abs(v)*u*.42-.14*l*l*fa;h+=Math.sin(l*17+(v>0?0:2.1))*.012*fa*v*v;let g=(l-.3)*.55,m=Math.cos(g),x=Math.sin(g),y=h*m-d*x,_=h*x+d*m;return[p,y,_+.05*fa*l*l]},i=(l,v)=>{let p=s(Math.min(1,l+.01),v),d=s(Math.max(0,l-.01),v),h=s(l,Math.min(1,v+.01)),g=s(l,Math.max(-1,v-.01)),m=[p[0]-d[0],p[1]-d[1],p[2]-d[2]],x=[h[0]-g[0],h[1]-g[1],h[2]-g[2]],y=[x[1]*m[2]-x[2]*m[1],x[2]*m[0]-x[0]*m[2],x[0]*m[1]-x[1]*m[0]],_=Math.hypot(y[0],y[1],y[2])||1,M=y[1]<0?-1:1;return[y[0]/_*M,y[1]/_*M,y[2]/_*M]};for(let l=0;l<=18;l++){let v=l/18;for(let u=0;u<=5*2;u++){let p=u/5-1;t.push(s(v,p)),e.push(i(Math.min(.97,Math.max(.03,v)),p)),o.push([v,p])}}let c=5*2+1;for(let l=0;l<18;l++)for(let v=0;v<c-1;v++){let u=l*c+v,p=u+1,d=u+c,h=d+1;r.push([u,d,p],[p,d,h])}let f=t.length;return t.push([-fa*.12,0,-.003],[-fa*.12,0,.003],[-fa*.24,-.01,.0015],[-fa*.24,-.01,-.0015]),e.push([0,1,0],[0,1,0],[0,1,0],[0,1,0]),o.push([0,0],[0,0],[-.1,0],[-.1,0]),r.push([f,f+2,f+1],[f,f+3,f+2]),{pos:t,nrm:e,uv:o,idx:r}}ub.exports=t=>{let e=zz(),o=t({vert:`
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
		${_z}
		uniform float time;
		uniform float yScale, visible;
		varying vec3 v_pos, v_normal;
		varying vec2 v_uv;
		varying vec3 v_eye;

		${Mz()}
		${kz()}
		${Sz()}

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
		}`,attributes:{position:e.pos,normal:e.nrm,uv:e.uv},elements:e.idx,uniforms:{model:t.prop("model"),visible:1},cull:{enable:!1}}),r=nn(),n=t({vert:`
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{model:t.prop("model"),night:()=>r.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(a){a&&a.visible&&(o({model:a.model}),r.night>.01&&n({model:a.model}))}}});var mb=Tt((QT,vb)=>{"use strict";var{skylightGLSL:Ez,Z_START:pb,Z_END:Az}=uc(),{oculusGLSL:Tz,A:jc}=Gr(),{windowLightGLSL:Lz,C:zi}=On();vb.exports=(t,e)=>{let o=e.isPhone?900:2600,r=e.isPhone?350:900,n=e.isPhone?450:1300,a=e.isPhone?13:22,s=7,i=()=>(s=s*16807%2147483647,(s-1)/2147483646),c=zi.x0+.6,f=zi.x1-.3,l=[];for(let d=0;d<o;d++)l.push([2.5+i()*10.5,.3+i()*8,pb-3.5+i()*(Az-pb+4.5),i()]);for(let d=0;d<r;d++)l.push([jc.x0+.3+i()*(jc.x1-jc.x0-.6),.3+i()*7.5,jc.z0+.3+i()*(jc.z1-jc.z0-.6),i()]);for(let d=0;d<n;d++)l.push([c+i()*(f-c),.2+i()*5.6,zi.z0+.25+i()*(zi.z1-zi.z0-.5),i()]);let v=d=>d.toFixed(4),u=[[0,-50,0,0],[0,-50,0,0],[0,-50,0,0],[0,-50,0,0]],p=t({vert:`
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

		${Ez()}
		${Tz()}
		${Lz()}

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
				p.z = clamp(p.z, ${v(zi.z0+.1)}, ${v(zi.z1-.1)});
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
		}`,attributes:{seed:l},count:l.length,primitive:"points",uniforms:{time:t.context("time"),pixelScale:d=>d.viewportHeight*.006,focus:(d,h)=>h&&h.focus||6,aperture:(d,h)=>h&&h.aperture||0,wake0:(d,h)=>(h&&h.wake||u)[0],wake1:(d,h)=>(h&&h.wake||u)[1],wake2:(d,h)=>(h&&h.wake||u)[2],wake3:(d,h)=>(h&&h.wake||u)[3],wakeDir:(d,h)=>h&&h.wakeDir||[0,0,1],gust:(d,h)=>h&&h.gust||[0,0]},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});return d=>p(d||{})}});var _b=Tt((JT,wb)=>{"use strict";var{C:bb}=On(),gb=nn(),xb=15.3,Nz=37.1,yb=bb.z1+.9,Oz=bb.z1+.7+16-.6;wb.exports=(t,e)=>{let o=e.isPhone?36:80,r=11,n=()=>(r=r*16807%2147483647,(r-1)/2147483646),a=[];for(let f=0;f<o;f++){let l=.35+Math.pow(n(),1.8)*2.4;a.push([xb+n()*(Nz-xb),l,yb+n()*(Oz-yb),n()])}let s=[],i=[];a.forEach(f=>{[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(l=>{s.push(l[0],l[1]),i.push(...f)})});let c=t({vert:`
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
		}`,attributes:{corner:s,seed:i},count:s.length/2,uniforms:{time:t.context("time"),night:()=>gb.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(){gb.night>.01&&c()}}});var L1=Tt((tL,Nr)=>{"use strict";var Mb=nn(),Ta=us(),Rz=kc(),Ns=Math.PI,Ge=t=>(+t).toFixed(4),ha=t=>`vec3(${Ge(t[0])}, ${Ge(t[1])}, ${Ge(t[2])})`,d0={x0:-2.05,z0:41.45,z1:47.55,top:5.1},Vo=-.55,un=-2,A0=42.25,Q0=43.65,Xr=45.35,or=46.75,bn=2.75,Tr=.12,Cz=(Vo+un)/2,r0={x:-1.3,y:1.42,w:.42,h:.52,z:Q0,cell:.026},xo={x0:-1.85,x1:-.75,top:.98,z0:Q0-.3,z1:Q0-.02},Wr={x0:-1.44,x1:-1.16,y0:xo.top-.002,y1:xo.top+.018},Lr={cx:-1.3,cz:Q0-.165,w:.2,d:.255,y:xo.top+.0012},En={x:-1.03,z:Q0-.14,r:.042,h:.075},g0={x:-.86,z:Q0-.12,h:.085,r:.019};g0.flame=[g0.x,xo.top+.012+g0.h+.028,g0.z];var T1={a:[En.x-.004,xo.top+.03,En.z+.004],b:[En.x-.13,xo.top+.34,En.z-.12]},T0=[-1.5,2.42,44.66],Z0=[-1.78,1.95,A0+.09],Vr={x:-1.32,z:44.08,y:.64,heading:.32},zb={window:{eye:[-1.3,1.33,42.8],target:[r0.x,1.37,Q0],fov:54},paper:{eye:[-1.3,1.4,43.23],target:[Lr.cx,xo.top,Lr.cz+.01],fov:40},front:{eye:[1.6,1.62,43],target:[-.9,1.35,43],fov:55},bay:{eye:[4.2,2.1,44.6],target:[-1,1.9,44.5],fov:55}},Bn={z0:(A0+Q0)/2+.03,z1:(A0+Q0)/2+.56,y0:.98,y1:1.78,x:Vo+.03,cell:.047};zb.peek={eye:[-1.2,1.42,42.95],target:[Ta.PLAY.stoolX-Ta.OFF[0],.85,Ta.PLAY.keyFront+.2],fov:30};var Ls={ink:null,inkDirty:!1,fold:0,slide:0,shown:!0,active:!1};function kb(){return`
	// a quatrefoil hole in the brass (g: metres across the window from its centre)
	float grilleHole(vec2 g) {
		vec2 q = fract(g / ${Ge(r0.cell)} + 0.5) - 0.5;
		float d = min(min(length(q - vec2(0.17, 0.0)), length(q + vec2(0.17, 0.0))),
		              min(length(q - vec2(0.0, 0.17)), length(q + vec2(0.0, 0.17))));
		d = min(d, length(q) - 0.04);
		return 1.0 - smoothstep(0.15, 0.19, d);
	}
	// how much of the lamp's light reaches p (on the penitent's side) through the window
	float throughGrille(vec3 p, float soft) {
		vec3 d = p - ${ha(T0)};
		if (d.z > -0.001) return 0.0;
		float t = (${Ge(r0.z)} - ${Ge(T0[2])}) / d.z;
		vec2 g = (${ha(T0)} + d * t).xy - vec2(${Ge(r0.x)}, ${Ge(r0.y)});
		float inWin = (1.0 - smoothstep(${Ge(r0.w/2-.01)}, ${Ge(r0.w/2)} + soft, abs(g.x))) *
		              (1.0 - smoothstep(${Ge(r0.h/2-.01)}, ${Ge(r0.h/2)} + soft, abs(g.y)));
		// the lamp is not a point: the pattern blurs the further it falls
		// from the brass
		float pen = 0.045 * abs(p.z - ${Ge(r0.z)}) / abs(${Ge(r0.z)} - ${Ge(T0[2])}) / ${Ge(r0.cell)};
		vec2 qc = fract(g / ${Ge(r0.cell)} + 0.5) - 0.5;
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
		vec3 c = ${ha(g0.flame)};
		vec3 d = c - p;
		float s = 1.0;
		// the pot: a short upright cylinder
		vec2 a = vec2(${Ge(En.x)}, ${Ge(En.z)}) - p.xz;
		vec2 dd = d.xz;
		float t = clamp(dot(a, dd) / max(dot(dd, dd), 1e-5), 0.0, 1.0);
		float r = length(p.xz + dd * t - vec2(${Ge(En.x)}, ${Ge(En.z)}));
		float y = p.y + d.y * t;
		s *= mix(1.0, 0.25, (1.0 - smoothstep(${Ge(En.r*.7)}, ${Ge(En.r*1.6)}, r)) * (1.0 - smoothstep(${Ge(xo.top+En.h*.8)}, ${Ge(xo.top+En.h*1.3)}, y)));
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
		bool inB1 = p.z < ${Ge(Q0)} && p.z > ${Ge(A0-.04)} && p.x < ${Ge(Vo+.02)};
		bool inPriest = p.z >= ${Ge(Q0)} && p.z < ${Ge(Xr)} && p.x < ${Ge(Vo)};
		bool inB2 = p.z >= ${Ge(Xr)} && p.z < ${Ge(or+.04)} && p.x < ${Ge(Vo)};
		// how open to the hall it is
		float open = 1.0;
		if (inB1) open = mix(0.7, 1.1, smoothstep(${Ge(un)}, ${Ge(Vo)}, p.x));
		if (inPriest) open = 0.16;
		if (inB2) open = 0.10;
		// deeper into the bay, a little less of the hall's light
		open *= mix(0.62, 1.0, smoothstep(${Ge(d0.x0)}, 0.3, p.x));
		// the stair hall's candlelight (it stands there now: see stairhall.js)
		vec3 rs;
		vec3 col = roomLight(p + ${ha(Ta.OFF)}, N, V, gloss, rs) * 1.25 * open;
		spec += rs * open;
		// the lamp, warm, behind the brass
		vec3 Ld = ${ha(T0)} - p;
		float dl = length(Ld);
		vec3 L = Ld / dl;
		float T = inPriest ? 1.0 : (inB1 ? throughGrille(p, 0.0) : 0.0);
		vec3 lampCol = vec3(1.0, 0.70, 0.40) * mix(3.2, 1.0, night);
		vec3 lamp = lampCol * T * max(dot(N, L), 0.0) / (1.0 + dl * dl * 1.6);
		col += lamp;
		spec += lampCol * T * pow(max(dot(N, normalize(L + V)), 0.0), mix(8.0, 60.0, gloss)) * gloss / (1.0 + dl * dl * 1.6);
		// the little lamp in the open booth
		if (inB1) {
			vec3 Sd = ${ha(Z0)} - p;
			float ds = length(Sd);
			vec3 Ls = Sd / ds;
			vec3 sc = vec3(1.0, 0.72, 0.42) * mix(1.5, 0.35, night);
			col += sc * (max(dot(N, Ls), 0.0) * 0.8 + 0.2) / (0.15 + ds * ds * 1.6);
			spec += sc * pow(max(dot(N, normalize(Ls + V)), 0.0), mix(8.0, 60.0, gloss)) * gloss * 0.6 / (0.15 + ds * ds * 1.6);
		}
		// the candle
		if (night > 0.01) {
			vec3 Cd = ${ha(g0.flame)} - p;
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
	}`}var hn={WOOD:0,CARVED:1,VELVET:2,CUSHION:3,BRASS:4,INKGLASS:5,QUILL:6,LAMPGLASS:7,DARKWOOD:8};function Eb(){let t=[],e=[],o=[],r=[],n=[],a=(f,l)=>[f[0]-l[0],f[1]-l[1],f[2]-l[2]],s=(f,l)=>[f[1]*l[2]-f[2]*l[1],f[2]*l[0]-f[0]*l[2],f[0]*l[1]-f[1]*l[0]],i=f=>{let l=Math.hypot(f[0],f[1],f[2])||1;return[f[0]/l,f[1]/l,f[2]/l]},c={pos:t,nrm:e,kind:o,uv:r,idx:n,norm:i,cross:s,sub:a};return c.v=(f,l,v,u)=>(t.push(f[0],f[1],f[2]),e.push(l[0],l[1],l[2]),o.push(v),r.push(u?u[0]:0,u?u[1]:0),t.length/3-1),c.quad=(f,l,v,u,p,d)=>{let h=i(s(a(l,f),a(u,f)));d=d||[[0,0],[1,0],[1,1],[0,1]];let g=c.v(f,h,p,d[0]),m=c.v(l,h,p,d[1]),x=c.v(v,h,p,d[2]),y=c.v(u,h,p,d[3]);n.push(g,m,x,g,x,y)},c.box=(f,l,v,u,p,d,h)=>{let g=(m,x,y,_,M,b,k,E)=>c.quad(m,x,y,_,h,[[M,k],[b,k],[b,E],[M,E]]);g([u,l,v],[u,l,d],[u,p,d],[u,p,v],v,d,l,p),g([f,l,d],[f,l,v],[f,p,v],[f,p,d],d,v,l,p),g([f,p,v],[u,p,v],[u,p,d],[f,p,d],f,u,v,d),g([f,l,d],[u,l,d],[u,l,v],[f,l,v],f,u,d,v),g([f,l,d],[u,l,d],[u,p,d],[f,p,d],f,u,l,p),g([u,l,v],[f,l,v],[f,p,v],[u,p,v],u,f,l,p)},c.tube=(f,l,v,u)=>{u=u||6;let p=t.length/3;for(let d=0;d<f.length;d++){let h=f[Math.max(0,d-1)],g=f[Math.min(f.length-1,d+1)],m=i(a(g,h)),x=Math.abs(m[1])>.9?[1,0,0]:[0,1,0],y=i(s(m,x)),_=s(y,m),M=typeof l=="function"?l(d/(f.length-1)):l;for(let b=0;b<=u;b++){let k=b/u*Ns*2,E=Math.cos(k),z=Math.sin(k),P=[y[0]*E+_[0]*z,y[1]*E+_[1]*z,y[2]*E+_[2]*z];c.v([f[d][0]+P[0]*M,f[d][1]+P[1]*M,f[d][2]+P[2]*M],P,v,[d/(f.length-1),b/u])}}for(let d=0;d<f.length-1;d++)for(let h=0;h<u;h++){let g=p+d*(u+1)+h,m=g+u+1;n.push(g,g+1,m,g+1,m+1,m)}},c.lathe=(f,l,v,u,p)=>{p=p||20;let d=t.length/3;for(let h=0;h<v.length;h++){let[g,m]=v[h],x=v[Math.max(0,h-1)],y=v[Math.min(v.length-1,h+1)],_=y[0]-x[0],M=y[1]-x[1];for(let b=0;b<=p;b++){let k=b/p*Ns*2,E=Math.cos(k),z=Math.sin(k),P=i([M*E,-_,M*z]);c.v([f+E*g,m,l+z*g],P,u,[b/p,h/(v.length-1)])}}for(let h=0;h<v.length-1;h++)for(let g=0;g<p;g++){let m=d+h*(p+1)+g,x=m+p+1;n.push(m,x,m+1,m+1,x,x+1)}},c.spire=(f,l,v,u,p,d)=>{let h=[[-u,-u],[u,-u],[u,u],[-u,u]];for(let g=0;g<4;g++){let m=h[g],x=h[(g+1)%4],y=[f+m[0],v,l+m[1]],_=[f+x[0],v,l+x[1]],M=[f,p,l],b=i(s(a(M,y),a(_,y))),k=c.v(y,b,d,[0,0]),E=c.v(_,b,d,[1,0]),z=c.v(M,b,d,[.5,1]);n.push(k,z,E)}},c.orient=()=>{for(let f=0;f<n.length;f+=3){let[l,v,u]=[n[f],n[f+1],n[f+2]],p=g=>[t[g*3],t[g*3+1],t[g*3+2]],d=s(a(p(v),p(l)),a(p(u),p(l))),h=[0,1,2].map(g=>e[l*3+g]+e[v*3+g]+e[u*3+g]);d[0]*h[0]+d[1]*h[1]+d[2]*h[2]<0&&(n[f+1]=u,n[f+2]=v)}return c},c}function A1(t,e,o,r){if(t<=e)return o;let n=t-e;return n>=r?0:Math.max(0,Math.sqrt(r*r-n*n)-(r-o))}var S0={ys:1.78,a:.56,r:.78};S0.apex=S0.ys+Math.sqrt(S0.r*S0.r-(S0.r-S0.a)*(S0.r-S0.a));function $z(){let t=Eb(),e=hn.WOOD,o=hn.CARVED,r=hn.DARKWOOD,n=.06;t.box(un,0,A0,Vo+.08,Tr,or,r),t.box(un,bn-.06,A0-.04,Vo+.1,bn,or+.04,e),t.box(Vo,bn-.2,A0-.06,Vo+.12,bn-.06,or+.06,e),t.box(Vo+.02,bn,A0-.08,Vo+.14,bn+.07,or+.08,r),t.box(un,Tr,A0,un+.04,bn-.06,or,e);for(let[l,v,u]of[[A0-n,A0,-1],[or,or+n,1]]){t.box(un,0,l,Vo+.08,bn,v,e);let p=u<0?l-.018:v;t.box(un+.18,.45,Math.min(p,p+.018),Vo-.12,2.35,Math.max(p,p+.018),r),t.box(un+.26,.55,Math.min(p,p+.03*u),Vo-.2,2.25,Math.max(p,p+.03*u),e)}{let l=Q0-.02,v=Q0+.02,u=r0.x-r0.w/2,p=r0.x+r0.w/2,d=r0.y-r0.h/2,h=r0.y+r0.h/2;t.box(un,Tr,l,Vo,Wr.y0,v,e),t.box(un,Wr.y0,l,Wr.x0,Wr.y1,v,e),t.box(Wr.x1,Wr.y0,l,Vo,Wr.y1,v,e),t.box(un,Wr.y1,l,Vo,d,v,e),t.box(un,d,l,u,h,v,e),t.box(p,d,l,Vo,h,v,e),t.box(un,h,l,Vo,bn-.06,v,e);let g=.05,m=l-.025;t.box(u-g,d-g,m,p+g,d,l,r),t.box(u-g,h,m,p+g,h+g,l,r),t.box(u-g,d,m,u,h,l,r),t.box(p,d,m,p+g,h,l,r),t.box(u-g-.02,h+g,m-.015,p+g+.02,h+g+.03,l,e),t.box(Wr.x0-.01,Wr.y1,l-.006,Wr.x1+.01,Wr.y1+.008,l,hn.BRASS)}{let l=Bn,v=Vo+.008,u=Vo+.052;t.box(v,l.y0,l.z0-.035,u,l.y1,l.z0,r),t.box(v,l.y0,l.z0,u,l.y0+.04,l.z1,r),t.box(v,l.y1-.04,l.z0,u,l.y1,l.z1,r),t.box(v+.008,Tr,l.z0-.035,u-.008,l.y0,l.z1,e),t.box(u-.008,Tr+.12,l.z0+.03,u,l.y0-.08,l.z1-.06,r),t.box(v-.004,l.y0-.012,l.z0-.045,u+.012,l.y0,l.z1,hn.BRASS)}t.box(un,Tr,Xr-.02,Vo,bn-.06,Xr+.02,e),t.box(xo.x0,xo.top-.035,xo.z0,xo.x1,xo.top,xo.z1,e),t.tube([[xo.x0,xo.top-.018,xo.z0],[xo.x1,xo.top-.018,xo.z0]],.02,e,8);for(let l of[xo.x0+.1,xo.x1-.1]){let v=[];for(let u=0;u<=8;u++){let p=u/8;v.push([l,xo.top-.04-.22*p,xo.z1-.02-.22*Math.cos(p*Ns/2)])}t.tube(v,.018,r,6)}t.box(un+.06,.12,A0,Vo-.1,.44,A0+.42,r),t.box(un+.08,.44,A0+.01,Vo-.12,.52,A0+.41,hn.CUSHION),t.box(un+.06,.12,or-.42,Vo-.1,.44,or,r),t.box(Z0[0]-.05,Z0[1]-.16,A0,Z0[0]+.05,Z0[1]-.02,A0+.012,hn.BRASS),t.tube([[Z0[0],Z0[1]-.09,A0+.012],[Z0[0],Z0[1]-.09,Z0[2]-.01],[Z0[0],Z0[1]-.05,Z0[2]]],.006,hn.BRASS,6),t.lathe(Z0[0],Z0[2],[[0,Z0[1]-.05],[.028,Z0[1]-.035],[.034,Z0[1]+.01],[.024,Z0[1]+.06],[.026,Z0[1]+.065]],hn.LAMPGLASS,16),t.box(Vr.x-.22,.12,Vr.z-.24,Vr.x+.22,Vr.y-.05,Vr.z+.16,r),t.box(Vr.x-.24,Vr.y-.05,Vr.z-.26,Vr.x+.24,Vr.y,Vr.z+.18,hn.CUSHION),t.tube([[T0[0],bn-.06,T0[2]],[T0[0],T0[1]+.07,T0[2]]],.005,hn.BRASS,5),t.lathe(T0[0],T0[2],[[0,T0[1]+.09],[.03,T0[1]+.08],[.02,T0[1]+.06]],hn.BRASS,12),t.lathe(T0[0],T0[2],[[0,T0[1]-.06],[.035,T0[1]-.04],[.045,T0[1]],[.035,T0[1]+.05],[.018,T0[1]+.07]],hn.LAMPGLASS,16);let a=Vo,s=Vo+n;function i(l,v,u){let p=(l+v)/2,d=40,h=[];for(let m=0;m<=d;m++)h.push(Tr+(bn-.2-Tr)*m/d);let g=[];h.forEach(m=>g.push(m));for(let m=1;m<24;m++)g.push(S0.ys+(S0.apex-S0.ys)*m/24);g.sort((m,x)=>m-x);for(let m=0;m<g.length-1;m++){let x=g[m],y=g[m+1];if(y-x<1e-4)continue;let _=u?A1(x,S0.ys,S0.a,S0.r):0,M=u?A1(y,S0.ys,S0.a,S0.r):0,b=(k,E)=>[k,E];t.quad([s,x,p-_],[s,x,l],[s,y,l],[s,y,p-M],e,[b(p-_,x),b(l,x),b(l,y),b(p-M,y)]),t.quad([s,x,v],[s,x,p+_],[s,y,p+M],[s,y,v],e,[b(v,x),b(p+_,x),b(p+M,y),b(v,y)]),(_>0||M>0)&&(t.quad([a,x,p-_],[s,x,p-_],[s,y,p-M],[a,y,p-M],r),t.quad([s,x,p+_],[a,x,p+_],[a,y,p+M],[s,y,p+M],r),t.quad([a,x,l],[a,x,p-_],[a,y,p-M],[a,y,l],e),t.quad([a,x,p+_],[a,x,v],[a,y,v],[a,y,p+M],e))}if(t.box(a,bn-.2,l,s,bn-.06,v,e),t.box(s,bn-.42,l+.05,s+.012,bn-.24,v-.05,o),u){let m=[];for(let x=0;x<=30;x++){let y=x/30,_=y<.5?Tr+(S0.apex-Tr)*(y*2):S0.apex-(S0.apex-Tr)*((y-.5)*2),M=y<.5?-1:1;m.push([s+.01,Math.min(_,S0.apex-.002),p+M*(A1(_,S0.ys,S0.a,S0.r)+.03)])}t.tube(m,.022,r,6)}}i(A0,Q0,!0),i(Xr,or,!0);{let l=Q0,v=Xr,u=(l+v)/2;t.box(a,Tr,l,s,bn-.06,v,e);let p={ys:1.85,a:.55,r:.8},d=[];for(let h=0;h<=40;h++){let g=h/40,m=p.ys+Math.sqrt(p.r*p.r-(p.r-p.a)*(p.r-p.a)),x=g<.5?.35+(m-.35)*(g*2):m-(m-.35)*((g-.5)*2),y=g<.5?-1:1;d.push([s+.012,Math.min(x,m-.002),u+y*A1(x,p.ys,p.a,p.r)])}d.push(d[0]),t.tube(d,.02,r,6),t.box(s,.95,u-.22,s+.015,1.3,u+.22,o),t.box(s,.35,u-.42,s+.01,.75,u+.42,r),t.tube([[s+.03,1.12,v-.13],[s+.06,1.12,v-.13],[s+.06,1.12,v-.2]],.009,hn.BRASS,6)}[A0-.02,Q0,Xr,or+.02].forEach((l,v)=>{let u=v===1||v===2,p=.075,d=bn+(u?.62:.4);t.box(Vo+.06,0,l-p,Vo+.06+2*p,d,l+p,e),t.box(Vo+.04,d-.04,l-p-.02,Vo+.08+2*p,d,l+p+.02,r);let h=Vo+.06+p,g=u?.62:.5;t.spire(h,l,d,p*.95,d+g,e);for(let m=1;m<=3;m++){let x=d+g*m/4.2,y=p*.95*(1-m/4.2)+.02;for(let[_,M]of[[1,0],[-1,0],[0,1],[0,-1]])t.tube([[h+_*(y-.02),x-.02,l+M*(y-.02)],[h+_*(y+.015),x+.03,l+M*(y+.015)]],.008,r,4)}t.lathe(h,l,[[0,d+g-.02],[.03,d+g+.03],[.022,d+g+.07],[0,d+g+.1]],e,10)});let f=(l,v,u)=>{let p=(l+v)/2,d=Vo+.075,h=bn+.07,g=h+u,m=[1,0,0],x=t.v([d,h,l],m,o,[l,h]),y=t.v([d,h,v],m,o,[v,h]),_=t.v([d,g,p],m,o,[p,g]);t.idx.push(x,y,_);let M=t.v([d-.04,h,l],[-1,0,0],e),b=t.v([d-.04,h,v],[-1,0,0],e),k=t.v([d-.04,g,p],[-1,0,0],e);t.idx.push(M,k,b);let E=[],z=[];for(let $=0;$<=10;$++){let D=$/10;E.push([d+.02,h+u*D,l+(p-l)*D]),z.push([d+.02,h+u*D,v+(p-v)*D])}t.tube(E,.022,r,6),t.tube(z,.022,r,6);for(let $=2;$<=8;$+=2)for(let D of[E[$],z[$]])t.tube([D,[D[0]+.01,D[1]+.06,D[2]+(D===E[$]?-.02:.02)]],.01,r,4);t.lathe(d,p,[[0,g],[.035,g+.06],[.022,g+.12],[0,g+.16]].map(([$,D])=>[$,D]),e,10);let P=Math.min(.17,u*.32),R=h+u*.38,B=[];for(let $=0;$<=24;$++){let D=$/24*Ns*2;B.push([d+.012,R+Math.sin(D)*P,p+Math.cos(D)*P])}t.tube(B,.012,r,5)};f(A0-.02,Q0,.52),f(Q0,Xr,.82),f(Xr,or+.02,.52),t.lathe(En.x,En.z,[[0,xo.top],[.036,xo.top+.001],[En.r,xo.top+.012],[En.r*1.02,xo.top+.035],[.036,xo.top+.052],[.02,xo.top+.062],[.016,xo.top+.068]],hn.INKGLASS,24),t.lathe(En.x,En.z,[[.016,xo.top+.064],[.021,xo.top+.066],[.022,xo.top+.075],[.016,xo.top+.076],[0,xo.top+.072]],hn.BRASS,20);{let l=T1.a,v=T1.b,u=26,p=x=>{let y=Math.sin(x*Ns)*.025;return[l[0]+(v[0]-l[0])*x+y*.6,l[1]+(v[1]-l[1])*x+y*.4,l[2]+(v[2]-l[2])*x+y]},d=[];for(let x=0;x<=u;x++)d.push(p(x/u));t.tube(d,x=>.0028*(1-.7*x)+6e-4,hn.QUILL,5);let h=t.norm(t.sub(v,l)),g=t.norm(t.cross(h,[.2,1,.1])),m=t.cross(g,h);for(let x of[-1,1]){let y=t.pos.length/3;for(let _=0;_<=u;_++){let M=_/u,b=p(M),k=M<.28?0:(x>0?.03:.02)*Math.sin(Ns*Math.pow((M-.28)/.72,.75)),E=k*.25,z=[b[0]+g[0]*x*k-m[0]*E,b[1]+g[1]*x*k-m[1]*E,b[2]+g[2]*x*k-m[2]*E];t.v(b,m,hn.QUILL,[M,0]),t.v(z,m,hn.QUILL,[M,x])}for(let _=0;_<u;_++){let M=y+_*2;t.idx.push(M,M+2,M+1,M+1,M+2,M+3)}}}return t.orient()}function Pz(t,e){let r=d0.top,n=d0.x0;t(n-.35,0,d0.z0-.35,n,r+.35,d0.z1+.35),t(n,0,d0.z0-.35,-.35,r,d0.z0),t(n,0,d0.z1,-.35,r,d0.z1+.35),t(n,r,d0.z0,-.35,r+.35,d0.z1),t(.35,0,d0.z0-.42,.35+.16,r,d0.z0),t(.35,0,d0.z1,.35+.16,r,d0.z1+.42),t(.35,r,d0.z0-.5,.35+.18,r+.42,d0.z1+.5),t(.35,r+.42,d0.z0-.6,.35+.26,r+.52,d0.z1+.6),t(.35,0,d0.z0-.5,.35+.22,.42,d0.z0),t(.35,0,d0.z1,.35+.22,.42,d0.z1+.5),t(-.35-.01,0,d0.z0,.35+.12,.02,d0.z1),e(n,d0.z0,-.35,d0.z1)}Nr.exports=t=>{let e=ls(),o=Mb.GLSL,r=$z(),n=`
	precision highp float;
	${o}
	uniform float time;
	${e.lanternGLSL()}
	${Ta.roomGLSL()}
	${kb()}
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
		}`,attributes:{position:r.pos,normal:r.nrm,kind:r.kind,uv:r.uv},elements:r.idx});function i(yt,mt,zt,It){let re=[],Ae=[],lo=[],ge=[],$e=[],j=Vo-.02,lt=S0.apex+.08,xt=Tr+.015;for(let Kt=0;Kt<=40;Kt++){let te=Kt/40,Zt=lt+(xt-lt)*te;for(let qt=0;qt<=90;qt++){let ot=qt/90,Rt=zt?.2+.13*te*te:mt-yt,Se=yt+ot*Rt,Qt=zt?.05+.02*te:.035+.01*Math.sin(ot*7),Ft=ot*It*Ns*2+Math.sin(te*2+ot*5)*.6,Ue=j-Qt*(.5+.5*Math.sin(Ft))-(zt?.02*te:0),De=[1,0,-(-Qt*.5*Math.cos(Ft)*It*Ns*2/Rt)],Ve=Math.hypot(De[0],De[1],De[2]);re.push(Ue,Zt,Se),Ae.push(De[0]/Ve,0,De[2]/Ve),lo.push(2),ge.push(Math.sin(Ft),te)}}for(let Kt=0;Kt<40;Kt++)for(let te=0;te<90;te++){let Zt=Kt*91+te,qt=Zt+90+1;$e.push(Zt,qt,Zt+1,Zt+1,qt,qt+1)}for(let Kt=0;Kt<$e.length;Kt+=3){let[te,Zt,qt]=[$e[Kt],$e[Kt+1],$e[Kt+2]],ot=Ft=>[re[Ft*3],re[Ft*3+1],re[Ft*3+2]],Rt=[0,1,2].map(Ft=>ot(Zt)[Ft]-ot(te)[Ft]),Se=[0,1,2].map(Ft=>ot(qt)[Ft]-ot(te)[Ft]);Rt[1]*Se[2]-Rt[2]*Se[1]<0&&($e[Kt+1]=qt,$e[Kt+2]=Zt)}return{pos:re,nrm:Ae,kind:lo,uv:ge,idx:$e}}let c=i(A0+.02,A0+.4,!0,6),f=i(Xr+.04,or-.04,!1,9),l={pos:c.pos.concat(f.pos),nrm:c.nrm.concat(f.nrm),kind:c.kind.concat(f.kind),uv:c.uv.concat(f.uv),idx:c.idx.concat(f.idx.map(yt=>yt+c.pos.length/3))},v=t({vert:`
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
		}`,attributes:{position:l.pos,normal:l.nrm,uv:l.uv},elements:l.idx}),u=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec2 corner;
		varying vec3 v_pos, v_eye;
		void main() {
			vec3 p = vec3(${Ge(r0.x)} + corner.x * ${Ge(r0.w/2)}, ${Ge(r0.y)} + corner.y * ${Ge(r0.h/2)}, ${Ge(r0.z)});
			v_pos = p; v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`${n}
		varying vec3 v_pos, v_eye;
		void main() {
			vec2 g = v_pos.xy - vec2(${Ge(r0.x)}, ${Ge(r0.y)});
			float hole = grilleHole(g);
			if (hole > 0.5) discard;
			vec3 N = vec3(0.0, 0.0, v_eye.z < ${Ge(r0.z)} ? -1.0 : 1.0);
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
			vec3 p = vec3(${Ge(Bn.x)}, ${Ge((Bn.y0+Bn.y1)/2)} + corner.y * ${Ge((Bn.y1-Bn.y0)/2-.04)}, ${Ge((Bn.z0+Bn.z1)/2)} + corner.x * ${Ge((Bn.z1-Bn.z0)/2)});
			v_pos = p; v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`${n}
		varying vec3 v_pos, v_eye;
		void main() {
			vec2 g = (v_pos.zy - vec2(${Ge((Bn.z0+Bn.z1)/2)}, ${Ge((Bn.y0+Bn.y1)/2)})) * ${Ge(r0.cell/Bn.cell)};
			float hole = grilleHole(g);
			if (hole > 0.5) discard;
			vec3 N = vec3(v_eye.x < ${Ge(Bn.x)} ? -1.0 : 1.0, 0.0, 0.0);
			vec3 V = normalize(v_eye - v_pos);
			vec3 spec;
			vec3 light = boothLight(v_pos + N * 0.01, N, V, 0.8, spec);
			vec3 base = vec3(0.16, 0.10, 0.05);
			vec3 col = base * light + spec * 0.6;
			// the rims of the holes catch the candles in the hall beyond
			float edge = smoothstep(0.25, 0.5, hole);
			col += vec3(1.0, 0.62, 0.30) * edge * (N.x < 0.0 ? 0.30 : 0.10);
			gl_FragColor = vec4(col, 1.0);
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,cull:{enable:!1}}),d=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec2 corner;
		varying vec2 v_c;
		void main() {
			vec3 p = vec3(${Ge(r0.x)} + corner.x * 0.75, ${Ge(r0.y)} + corner.y * 0.9, ${Ge(Xr-.03)});
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
			vec3 p = vec3(${Ge(Cz)} + c.x * ${Ge((Vo-un)/2-.02)}, 0.9 + (c.y + 1.0) * 0.8, ${Ge(Q0-.03)} - c.z * 1.25);
			v_pos = p;
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`
		precision highp float;
		uniform float night, time;
		${kb().split("// the candle's light is hidden")[0]}
		varying vec3 v_pos;
		void main() {
			float T = throughGrille(v_pos, 0.0);
			float d = length(v_pos - ${ha(T0)});
			// dust drifting in the beam
			float dust = 0.65 + 0.35 * sin(v_pos.x * 23.0 + time * 0.3) * sin(v_pos.y * 17.0 - time * 0.21) * sin(v_pos.z * 19.0 + time * 0.17);
			vec3 col = vec3(1.0, 0.68, 0.36) * T * dust * 0.035 / (0.4 + d * d * 0.5) * mix(1.0, 0.7, night);
			gl_FragColor = vec4(col, 1.0);
		}`.replace("float grilleHole","float grilleHole"),attributes:{c:{buffer:t.buffer(g),size:3}},count:g.length/3,depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}}),x=(()=>{if(typeof document=="undefined")return null;let yt=document.createElement("canvas");yt.width=512,yt.height=652;let mt=yt.getContext("2d");mt.fillStyle="#cdb38a",mt.fillRect(0,0,yt.width,yt.height);let zt=7,It=()=>(zt=zt*1664525+1013904223>>>0,zt/4294967296);for(let Ae=0;Ae<2400;Ae++){mt.fillStyle=`rgba(${It()<.5?"90,62,30":"245,230,200"},${.03+It()*.05})`;let lo=It()*yt.width,ge=It()*yt.height;mt.fillRect(lo,ge,1+It()*14,1)}for(let Ae=0;Ae<26;Ae++){let lo=It()*yt.width,ge=It()*yt.height,$e=20+It()*90,He=mt.createRadialGradient(lo,ge,0,lo,ge,$e);He.addColorStop(0,`rgba(120,80,35,${.04+It()*.06})`),He.addColorStop(1,"rgba(120,80,35,0)"),mt.fillStyle=He,mt.fillRect(lo-$e,ge-$e,$e*2,$e*2)}let re=mt.createRadialGradient(yt.width/2,yt.height/2,yt.width*.3,yt.width/2,yt.height/2,yt.height*.72);return re.addColorStop(0,"rgba(110,70,30,0)"),re.addColorStop(1,"rgba(110,70,30,0.38)"),mt.fillStyle=re,mt.fillRect(0,0,yt.width,yt.height),yt})(),y=x?t.texture({data:x,min:"linear",mag:"linear",flipY:!1}):t.texture(),_=t.texture({shape:[8,8],data:new Uint8Array(8*8*4)}),M=[18,24],b=[],k=[];for(let yt=0;yt<=M[1];yt++)for(let mt=0;mt<=M[0];mt++)b.push(mt/M[0],yt/M[1]);for(let yt=0;yt<M[1];yt++)for(let mt=0;mt<M[0];mt++){let zt=yt*(M[0]+1)+mt,It=zt+M[0]+1;k.push(zt,zt+1,It,zt+1,It+1,It)}let E=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale, fold, slide;
		attribute vec2 st;
		varying vec3 v_pos, v_n, v_eye;
		varying vec2 v_st;
		void main() {
			// s across (texture left = +x), t from the near edge (0) to the far (1)
			float s = st.x, t = st.y;
			float x = ${Ge(Lr.cx+Lr.w/2)} - s * ${Ge(Lr.w)};
			float zNear = ${Ge(Lr.cz-Lr.d/2)};
			vec3 p = vec3(x, ${Ge(Lr.y)}, zNear + t * ${Ge(Lr.d)});
			vec3 n = vec3(0.0, 1.0, 0.0);
			// a slight cockle
			p.y += 0.0012 * sin(s * 7.0 + t * 3.0) * sin(t * 5.0);
			// the near half folds up and over onto the far half
			if (t < 0.5) {
				float a = fold * 3.14159 * 0.985;
				float dd = (0.5 - t) * ${Ge(Lr.d)};
				float zf = zNear + 0.5 * ${Ge(Lr.d)};
				p.z = zf - dd * cos(a);
				p.y = ${Ge(Lr.y)} + dd * sin(a) + 0.0016 * fold;
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
			if (v_pos.z > ${Ge(Q0+.015)}) discard;
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
		}`,attributes:{st:{buffer:t.buffer(b),size:2}},elements:k,uniforms:{fold:()=>Ls.fold,slide:()=>Ls.slide,paperTex:y,inkTex:_},cull:{enable:!1}}),z=Eb();z.lathe(g0.x,g0.z,[[0,xo.top],[.048,xo.top+.002],[.052,xo.top+.012],[.046,xo.top+.014],[.022,xo.top+.012],[0,xo.top+.012]],hn.BRASS,24),z.lathe(g0.x,g0.z,[[0,xo.top+.012],[g0.r,xo.top+.012],[g0.r*1.02,xo.top+.012+g0.h*.6],[g0.r,xo.top+.012+g0.h],[g0.r*.75,xo.top+.012+g0.h-.004],[0,xo.top+.012+g0.h-.008]],9,20),z.tube([[g0.x,xo.top+.012+g0.h-.008,g0.z],[g0.x+.001,xo.top+.012+g0.h+.012,g0.z]],.0012,8,4),z.orient();let P=t({vert:a,frag:`${n}
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
				float up = smoothstep(${Ge(xo.top+g0.h*.4)}, ${Ge(xo.top+.012+g0.h)}, v_pos.y);
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
			vec3 p = ${ha(g0.flame)} + right * corner.x * size.x + vec3(0.0, 1.0, 0.0) * corner.y * size.y;
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{halo:t.prop("halo")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),B=[0,0],$=t({uniforms:{view:t.prop("view")}}),D=new Float32Array(16);function it(yt){Rz.translate(D,yt.view,Ta.OFF),$({view:D},()=>St(yt))}function St(yt){let mt=yt&&yt.reflected;if(s(),v(),u(),p(),Ls.ink&&Ls.inkDirty){let zt=Ls.ink;B[0]!==zt.width||B[1]!==zt.height?(_({data:zt,min:"linear",mag:"linear",flipY:!1}),B=[zt.width,zt.height]):_.subimage(zt),Ls.inkDirty=!1}Ls.shown&&E(),Mb.night>.01&&(P(),mt||(R({halo:1}),R({halo:0}))),mt||(d(),m())}return it};Nr.exports.addBay=Pz;Nr.exports.BAY=d0;Nr.exports.OFF=Ta.OFF;Nr.exports.STATE=Ls;var Sb=t=>[t[0]+Ta.OFF[0],t[1]+Ta.OFF[1],t[2]+Ta.OFF[2]];Nr.exports.SHOTS=Object.fromEntries(Object.entries(zb).map(([t,e])=>[t,Object.assign({},e,{eye:Sb(e.eye),target:Sb(e.target)})]));Nr.exports.SEAT=Vr;Nr.exports.LAMP=T0;Nr.exports.SCONCE=Z0;Nr.exports.GRILLE=r0;Nr.exports.PAPER=Lr;Nr.exports.ZONE={FRONT:Vo,BACK:un,ZA:A0,ZB:Q0,ZC:Xr,ZD:or}});var Lp=Tt((eL,Tb)=>{"use strict";function Iz(t){let e=t>>>0||1;return function(){return e=e*1664525+1013904223>>>0,e/4294967296}}var Ab={stroke:.05,letter:.045,word:.15,comma:.28,stop:.45,line:.25,para:.6},qz=["th","ng","er"];function Dz(t,e,o){o=Object.assign({ink:"#2a1d12",xh:14,speed:23,lineHeight:2.85,seed:7,width:.12,pace:.45},o||{});let r=t.getContext("2d"),n={};Object.keys(Ab).forEach(h=>{n[h]=Ab[h]*o.pace});let a=[],s=0,i=0,c=0,f=[];function l(h,g){let m=Iz(o.seed),x=o.xh,y={},_=D=>{let it=e[D];if(!it)return null;let St=Math.floor(m()*it.length);return it.length>1&&St===y[D]&&(St=(St+1)%it.length),y[D]=St,it[St]},M=D=>{if(e[D])return{g:_(D),sc:1};let it=D.toLowerCase();return e[it]?{g:_(it),sc:/[A-Z]/.test(D)?1.32:1}:null},b=[],k=.15,E=0,z=0,P=(m()-.5)*.02,R=g/x,B=h.split(/\n\s*\n/);B.forEach((D,it)=>{D.replace(/\s+/g," ").trim().split(" ").forEach(yt=>{let mt=[];for(let Ae=0;Ae<yt.length;Ae++){let lo=yt.substr(Ae,2).toLowerCase();if(qz.indexOf(lo)>=0&&e[lo]&&m()<.55&&yt[Ae]===yt[Ae].toLowerCase()){mt.push({ch:lo,gl:{g:_(lo),sc:1}}),Ae++;continue}let ge=M(yt[Ae]);ge&&ge.g&&mt.push({ch:yt[Ae],gl:ge})}let zt=mt.map(()=>.17+m()*.07),It=mt.reduce((Ae,lo,ge)=>Ae+lo.gl.g.w*lo.gl.sc+zt[ge],0);E>0&&E+It>R&&(E=0,z++,k+=n.line,P=(m()-.5)*.02),mt.forEach((Ae,lo)=>{let ge=Ae.gl.g,$e=Ae.gl.sc*(.95+m()*.1),He=(m()-.5)*.06,et=(m()-.5)*.08+P*E,j=E,lt=z*o.lineHeight+1.9+et,xt=Math.cos(He),Kt=Math.sin(He),te=qt=>[(j+(qt[0]*xt-qt[1]*Kt)*$e)*x,(lt+(qt[0]*Kt+qt[1]*xt)*$e)*x],Zt=(qt,ot)=>{let Rt=0;for(let Qt=1;Qt<qt.length;Qt++)Rt+=Math.hypot(qt[Qt][0]-qt[Qt-1][0],qt[Qt][1]-qt[Qt-1][1]);let Se=Math.max(o.minDur||(ot?.06:.07),Rt/(o.speed*x));b.push({pts:qt,L:Rt,start:k,dur:Se,dot:ot}),k+=Se};if(ge.s.forEach((qt,ot)=>{ot>0&&(k+=n.stroke),Zt(qt.map(te),!1)}),ge.dot){let qt=ge.s[0][0];ge.s.forEach(Rt=>Rt.forEach(Se=>{Se[1]<qt[1]&&(qt=Se)}));let ot=te([qt[0]+.1,-1.36]);k+=n.stroke*1.4,Zt([ot,[ot[0]+x*.05,ot[1]+x*.03]],!0)}k+=n.letter*(.6+m()*.8),E+=ge.w*$e+zt[lo]});let re=yt[yt.length-1];k+=/[.!?]/.test(re)?n.stop:/[,;:]/.test(re)?n.comma:n.word,E+=.55+m()*.2}),it<B.length-1&&(E=0,z+=1.6,k+=n.para)});let $=(z+1)*o.lineHeight*x+x*1.55;return{strokes:b,total:k,height:$}}function v(h,g){if(o.fixed){let m=o.fixed;r.setTransform(1,0,0,1,m.mx,m.my),r.clearRect(-m.mx,-m.my,t.width,t.height)}else{let m=Math.min(window.devicePixelRatio||1,2);t.width=Math.round(h*m),t.height=Math.round(g*m),t.style.height=g+"px",t.style.width=h+"px",r.setTransform(m,0,0,m,0,0),r.clearRect(0,0,h,g)}r.strokeStyle=o.ink,r.fillStyle=o.ink,r.lineCap="round",r.lineJoin="round",o.shadow&&(r.shadowColor=o.shadow,r.shadowBlur=o.shadowBlur||6)}let u=h=>h<.5?2*h*h:1-Math.pow(-2*h+2,2)/2;function p(h,g){let m=f[h.i]||0;if(g<=m)return;let x=o.width*o.xh,y=0;for(let _=1;_<h.pts.length;_++){let M=h.pts[_-1],b=h.pts[_],k=Math.hypot(b[0]-M[0],b[1]-M[1]),E=y,z=y+k;if(y=z,z<=m||k===0)continue;if(E>=g)break;let P=Math.max(0,(m-E)/k),R=Math.min(1,(g-E)/k),B=[M[0]+(b[0]-M[0])*P,M[1]+(b[1]-M[1])*P],$=[M[0]+(b[0]-M[0])*R,M[1]+(b[1]-M[1])*R],D=(E+z)/2/(h.L||1),it=.72+.28*Math.sin(Math.PI*Math.min(1,Math.max(0,D)));r.lineWidth=x*it,r.globalAlpha=.86+.14*it,r.beginPath(),r.moveTo(B[0],B[1]),r.lineTo($[0],$[1]),r.stroke()}h.dot&&m===0&&(r.globalAlpha=1,r.beginPath(),r.arc(h.pts[0][0],h.pts[0][1],x*.75,0,Math.PI*2),r.fill()),f[h.i]=g}function d(h){let g=(h-c)/1e3;for(let m=0;m<a.length;m++){let x=a[m];if(x.start>g)break;let y=Math.min(1,(g-x.start)/x.dur);p(x,u(y)*x.L)}if(o.onPen){let m=0;for(;m+1<a.length&&a[m+1].start<=g;)m++;a[m]&&o.onPen(a[m].pts[0][1])}g<s?i=requestAnimationFrame(d):o.onDone&&o.onDone()}return{write(h,g){cancelAnimationFrame(i);let m=o.fixed?t.width-2*o.fixed.mx:t.parentElement.clientWidth,x=l(h,m);a=x.strokes,s=x.total;let y=typeof o.maxTime=="function"?o.maxTime(h):o.maxTime;if(y&&s>y){let M=y/s;a.forEach(b=>{b.start*=M,b.dur*=M}),s=y}a.forEach((M,b)=>{M.i=b}),f=[],v(m,x.height);let _=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(g||_){a.forEach(M=>p(M,M.L));return}return c=performance.now(),i=requestAnimationFrame(d),s},finish(){cancelAnimationFrame(i),a.forEach(h=>p(h,h.L)),o.onDone&&o.onDone()},stop(){cancelAnimationFrame(i)}}}Tb.exports=Dz});var Op=Tt((oL,Lb)=>{"use strict";var Np=nn(),Fz='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M5.5 18.5l1.7-1.7M16.8 7.2l1.7-1.7"/></svg>',Gz='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M19.5 14.6A8 8 0 0 1 9.4 4.5a8 8 0 1 0 10.1 10.1z"/></svg>';Lb.exports=function(e){let o=document.createElement("button");o.type="button",o.className=e+" light-toggle";let r=()=>{let n=Np.isNight;o.innerHTML=n?Fz:Gz,o.setAttribute("aria-label",n?"Switch to day":"Switch to night"),o.title=n?"Day":"Night",o.setAttribute("aria-pressed",n?"true":"false")};return r(),Np.onChange(r),["mousedown","pointerdown"].forEach(n=>o.addEventListener(n,a=>a.stopPropagation())),o.addEventListener("click",n=>{n.stopPropagation(),Np.toggle()}),o}});var Cb=Tt((nL,Rb)=>{"use strict";var J0=L1(),Hz=us(),Uz=Lp(),Bz="81efb912-50a2-4fcd-b5e8-c3a28eecbe93",Nb=100,Ka=t=>Math.max(0,Math.min(1,t)),gr=(t,e,o)=>{let r=Ka((o-t)/(e-t));return r*r*(3-2*r)},ua=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,Yr=(t,e,o)=>t+(e-t)*o,_f=(t,e,o)=>[Yr(t[0],e[0],o),Yr(t[1],e[1],o),Yr(t[2],e[2],o)];function Ei(t,e){let o=t.length-1,r=Ka(e)*o,n=Math.min(o-1,Math.floor(r)),a=r-n,s=t[Math.max(0,n-1)],i=t[n],c=t[n+1],f=t[Math.min(o,n+2)];return[0,1,2].map(l=>.5*(2*i[l]+(-s[l]+c[l])*a+(2*s[l]-5*i[l]+4*c[l]-f[l])*a*a+(-s[l]+3*i[l]-3*c[l]+f[l])*a*a*a))}var N1=t=>({eye:t.eye.slice(),target:t.target.slice(),fov:t.fov,roll:0});function Rp(t,e,o){return{eye:_f(t.eye,e.eye,o),target:_f(t.target,e.target,o),fov:Yr(t.fov,e.fov,o),roll:Yr(t.roll||0,e.roll||0,o)}}var Mf=Hz.PLAY,da=[Mf.stoolX,1,Mf.keyFront+.25],O1=[Mf.stoolX,Mf.keyTop+.03,Mf.keyFront-.05],$p=t=>{let e=(15+110*t)*Math.PI/180,o=2.1+.4*t;return[da[0]+Math.cos(e)*o,1.15+.4*t,da[2]+Math.sin(e)*o]},Wc=[{eye:$p(1),target:[da[0],.92,da[2]-.15],fov:46,aperture:.6},{eye:[-6.93,3.2,45.85],target:[-6.93,.77,45.3],fov:34,aperture:.6,to:O1},{eye:[da[0]+1,1.14,da[2]+1.72],target:[O1[0]+.05,.8,O1[2]+.05],fov:40,aperture:1,to:O1}],Ob=(t,e)=>Math.hypot(t[0]-e[0],t[1]-e[1],t[2]-e[2]),R1=t=>({fade:0,letterbox:.55,exposure:1.3,focus:Ob(t.eye,t.to||da),aperture:t.aperture,vignette:.42,shafts:0}),Cp={fade:0,letterbox:.55,exposure:2.1,focus:6.2,aperture:.55,vignette:.45,shafts:0},Vc={fade:0,letterbox:.55,exposure:2,focus:.82,aperture:1.1,vignette:.48,shafts:0},wf={fade:0,letterbox:.55,exposure:1.8,focus:.42,aperture:1.3,vignette:.5,shafts:0},jz=`
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
`;Rb.exports=function(e){let{root:o,avatar:r}=e,n=document.createElement("style");n.textContent=jz,document.head.appendChild(n);let a=document.createElement("div");a.className="conf-ui",a.innerHTML=`
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
		</div>`,o.appendChild(a);let s=a.querySelector(".conf-write"),i=a.querySelector("textarea"),c=a.querySelector('[data-act="send"]'),f=a.querySelector(".conf-hint"),l=a.querySelector(".conf-close"),v=a.querySelector(".conf-final"),u=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,p=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;i.addEventListener("input",()=>{let ot=i.value.match(new RegExp("^\\s*(\\S+\\s+){0,"+(Nb-1)+"}\\S+"));(i.value.trim()?i.value.trim().split(/\s+/).length:0)>Nb&&ot&&(i.value=ot[0]),c.disabled=!i.value.trim()}),["keydown","keyup","keypress"].forEach(ot=>i.addEventListener(ot,Rt=>Rt.stopPropagation())),a.addEventListener("pointerdown",ot=>ot.stopPropagation()),a.addEventListener("click",ot=>{let Rt=ot.target.closest("button");Rt&&(ot.stopPropagation(),Rt.dataset.act==="send"&&it(),Rt.dataset.act==="leave"&&mt())});let d=!1,h="",g=0,m=null,x=null,y="",_=null,M=0,b="",k=document.createElement("canvas");k.width=512,k.height=652;function E(ot){ot!==b&&(b=ot,s.classList.toggle("on",ot==="write"),f.classList.toggle("on",ot==="hint"),l.classList.toggle("on",d&&ot==="hint"&&(h==="room"||h==="peek")),v.classList.toggle("on",ot==="final"),ot==="write"&&setTimeout(()=>{if(h==="write")try{i.focus({preventScroll:!0})}catch(Rt){}},900))}function z(ot){h=ot,g=0}function P(ot,Rt){if(d)return;d=!0,m={eye:ot.eye.slice(),target:ot.target.slice(),fov:ot.fov,roll:ot.roll||0},x=Object.assign({},Rt),y="",i.value="",c.disabled=!0,J0.STATE.fold=0,J0.STATE.slide=0,J0.STATE.shown=!0,J0.STATE.active=!0;let Se=k.getContext("2d");Se.setTransform(1,0,0,1,0,0),Se.clearRect(0,0,k.width,k.height),J0.STATE.ink=k,J0.STATE.inkDirty=!0,document.body.classList.add("confessing");let Qt=Wc[0],Ft=p?.3:5.5,Ue=p?.3:3.6;R.i=0,R.u=0,R.T=Ft+Ue,R.moving=!0,R.rest=0,R.raw=!0,R.lookFrom=x,R.lookTo=R1(Qt);let S=[m.eye,[3.4,1.75,44.5],[.3,1.72,44.7],[-2.8,1.5,45.4],$p(0)],De=[m.target,[-3,1.9,44.5],[-6.5,1.3,44.9],[da[0],1,da[2]-.1],Qt.target];R.path=Ve=>{let uo=Ve*(Ft+Ue);if(uo<Ft){let Fo=uo/Ft,qo=1-Math.cos(Fo*Math.PI/2);return{eye:Ei(S,qo),target:Ei(De,gr(0,1,qo*1.05)),fov:Yr(m.fov,52,gr(.4,1,qo)),roll:(m.roll||0)*(1-qo)}}let Oo=(uo-Ft)/Ue,wo=1-Math.pow(1-Oo,2.4);return{eye:$p(wo),target:Qt.target,fov:Yr(52,Qt.fov,wo),roll:.05*Math.sin(Math.PI*wo)}},z("room"),E("")}let R={i:0,u:0,T:1,moving:!1,rest:0,raw:!1,path:null,lookFrom:null,lookTo:null},B=()=>u?"Scroll on":"Swipe up";function $(ot){let Rt=re,Se=Wc[ot],Qt={eye:Rt.eye.slice(),target:Rt.target.slice(),fov:Rt.fov,roll:Rt.roll||0},Ft=_f(Qt.eye,Se.eye,.5),Ue=[Ft[0]-da[0],0,Ft[2]-da[2]],S=Math.hypot(Ue[0],Ue[2])||1,De=[Ft[0]+Ue[0]/S*.6,Ft[1]+.3,Ft[2]+Ue[2]/S*.6];R.path=Ve=>{let uo=1-Ve;return{eye:[0,1,2].map(Oo=>uo*uo*Qt.eye[Oo]+2*uo*Ve*De[Oo]+Ve*Ve*Se.eye[Oo]),target:_f(Qt.target,Se.target,gr(0,1,Ve)),fov:Yr(Qt.fov,Se.fov,Ve),roll:Qt.roll*uo}},R.lookFrom=D||R1(Wc[R.i]),R.lookTo=R1(Se),R.i=ot,R.u=0,R.moving=!0,R.rest=0,R.raw=!1,R.T=p?.4:Math.max(2.8,Math.min(4.4,Ob(Qt.eye,Se.eye)*1+1.6)),E("")}let D=null;function it(){if(h!=="write"||(y=i.value.trim(),!y))return;i.blur(),E("");let ot=Math.max(10,Math.min(22,24-y.length/28));_=Uz(k,e.glyphs(),{ink:"rgba(30,16,8,0.97)",xh:ot,width:.15,seed:11+y.length,speed:60,pace:.2,minDur:.03,maxTime:Rt=>2.4+Rt.length/160,fixed:{mx:46,my:40},onPen:()=>{J0.STATE.inkDirty=!0},onDone:()=>{J0.STATE.inkDirty=!0}}),z("down")}function St(){try{let ot={access_key:Bz,subject:"A note left in the confessional",from_name:"Your gallery",message:y,page:location.href,when:new Date().toString()};fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(ot),keepalive:!0}).catch(()=>{})}catch(ot){}}function yt(){h==="ready"&&(St(),z("fold"),E(""))}function mt(){!d||h==="leave"||(E(""),i.blur(),zt=re,It=D,z("leave"))}let zt=null,It=null,re=null,Ae=J0.SHOTS.window,lo=J0.OFF,ge=ot=>[ot[0]+lo[0],ot[1],ot[2]],$e=[[3.4,1.75,44.5],[.3,1.72,44.5],[-2.5,1.66,45],[-4.6,1.6,46.55],[-7,1.58,47.15],[-9.3,1.55,46.4],ge([1.25,1.5,43.25]),ge([-.55,1.36,42.92])],He=[[-3,1.9,44.5],[-6.5,1.5,44.6],[-7,1,44.4],[-7.6,.95,44],[-10.5,1.5,44.6],ge([-1,1.55,43.6]),ge([-1.4,1.35,43.1]),ge([-1.5,1.33,43.3])];function et(ot){let Rt=ua(Ka(ot)),Se=[m.eye,...$e,Ae.eye],Qt=[m.target,...He,Ae.target];return{eye:Ei(Se,Rt),target:Ei(Qt,gr(0,1,Rt*1.03)),fov:Yr(m.fov,Ae.fov,gr(.6,.97,Rt)),roll:(m.roll||0)*(1-Rt)}}function j(ot,Rt){if(p)return ot;let Se=performance.now()/1e3,Qt=.004*Rt,Ft=Math.sin(Se*.61)*.6+Math.sin(Se*1.37+1.3)*.4,Ue=Math.sin(Se*.47+2.1)*.6+Math.sin(Se*1.13+.4)*.4;return{eye:[ot.eye[0]+Ft*Qt,ot.eye[1]+Ue*Qt*.7,ot.eye[2]],target:[ot.target[0]+Ue*Qt*1.5,ot.target[1]+Ft*Qt,ot.target[2]],fov:ot.fov,roll:ot.roll}}function lt(ot,Rt,Se){let Qt={};for(let Ft in Rt)Qt[Ft]=typeof Rt[Ft]=="number"&&typeof ot[Ft]=="number"?Yr(ot[Ft],Rt[Ft],Se):Rt[Ft];return Qt}function xt(ot){ot*=window.__confSpeed||1,g+=ot;let Rt=N1(Ae),Se=N1(J0.SHOTS.paper),Qt,Ft,Ue=N1(J0.SHOTS.peek);if(h==="room")R.moving?(R.u=Math.min(1,R.u+ot/R.T),Qt=R.path(R.raw?R.u:ua(R.u)),Ft=lt(R.lookFrom,R.lookTo,gr(.1,.9,R.u)),R.raw&&(Ft.fade=(x.fade||0)*(1-gr(0,.12,R.u))),R.u>=1&&(R.moving=!1,R.rest=0,f.textContent=B(),E("hint"))):(R.rest+=ot,Qt=j(N1(Wc[R.i]),2.5),Ft=R1(Wc[R.i]));else if(h==="enter"){let De=Ka(g/(p?.6:9)),Ve=ua(De),uo=[Kt.eye,[-7.6,1.9,47.6],[-9.6,1.85,45.6],ge([.75,1.5,42.95]),ge([-.25,1.42,42.82]),ge([-.9,1.42,42.82]),Ue.eye];Qt={eye:Ei(uo,Ve),target:_f(Kt.target,Ue.target,gr(0,.35,Ve)),fov:Yr(Kt.fov,Ue.fov,gr(.3,1,Ve)),roll:0},Ft=lt(te,Cp,gr(.2,.9,De)),De>=1&&z("peek")}else if(h==="peek")Qt=j(Ue,1.5),Ft=Cp,g>(p?.5:3.2)&&z("turn");else if(h==="turn"){let S=Ka(g/(p?.4:3.2));Qt=Rp(Ue,Rt,ua(S)),Ft=lt(Cp,Vc,ua(S)),S>=1&&(z("write"),E("write"))}else if(h==="write")Qt=j(Rt,1),Ft=Vc;else if(h==="down"){let S=Ka(g/(p?.4:2));Qt=Rp(Rt,Se,ua(S)),Ft=lt(Vc,wf,ua(S)),S>=1&&(M=_.write(y,p)||0,J0.STATE.inkDirty=!0,z("writing"))}else if(h==="writing")Qt=j(Se,.6),Ft=wf,g>M+.8&&(z("ready"),f.textContent=u?"Scroll to fold it and pass it through":"Swipe up to fold it and pass it through",E("hint"));else if(h==="ready")Qt=j(Se,.6),Ft=wf;else if(h==="fold"){let S=Ka(g/(p?.3:1.5));J0.STATE.fold=ua(S),Qt=j(Se,.6),Ft=wf,S>=1&&z("slide")}else if(h==="slide"){let De=Ka(g/(p?.6:3.4));J0.STATE.slide=ua(gr(0,.7,De));let Ve=ua(gr(.35,1,De));Qt=Rp(Se,Rt,Ve),Ft=lt(wf,Vc,Ve),De>=1&&(J0.STATE.shown=!1,z("final"),E("final"))}else if(h==="final")Qt=j(Rt,1),Ft=Vc;else if(h==="leave"){let S=p?.6:zt.eye[0]<lo[0]-.3?12:7,De=Ka(g/S),Ve={eye:m.eye,target:m.target,fov:m.fov,roll:m.roll},uo=ua(De),Oo=zt.eye[0]<lo[0]-.3,wo=Oo?[zt.eye,ge([-.55,1.4,42.8]),ge([1.4,1.55,43.3]),[-9.3,1.58,46.4],[-7,1.6,47.15],[-4.6,1.62,46.55],[-2.2,1.68,44.8],[.6,1.72,44.5],Ve.eye]:[zt.eye,[-3.4,1.7,46.2],[-1.2,1.7,44.8],[.6,1.72,44.5],Ve.eye],Fo=Oo?[zt.target,ge([1.5,1.45,43.4]),[-7,1.2,44.6],[-4,1.5,47],[-1.5,1.7,45.5],[1,1.8,44.5],[4,1.8,44.5],[7,1.9,44.2],Ve.target]:[zt.target,[-1.5,1.7,45.2],[2,1.8,44.5],[6,1.9,44.3],Ve.target];if(Qt={eye:Ei(wo,uo),target:Ei(Fo,uo),fov:Yr(zt.fov,Ve.fov,uo),roll:Ve.roll*uo},Ft=lt(It||Vc,x,gr(.1,.7,De)),Ft.fade=(x.fade||0)*gr(.82,1,De),De>=1){d=!1,J0.STATE.active=!1,J0.STATE.shown=!0,J0.STATE.fold=0,J0.STATE.slide=0;let qo=k.getContext("2d");qo.setTransform(1,0,0,1,0,0),qo.clearRect(0,0,k.width,k.height),J0.STATE.inkDirty=!0,document.body.classList.remove("confessing"),e.onExit&&e.onExit()}}return re=Qt,D=Ft,{camera:Qt,look:Ft}}let Kt=null,te=null;function Zt(){if(h==="room"){if(R.moving||R.rest<.4)return;R.i<Wc.length-1?$(R.i+1):(Kt=re,te=D,E(""),z("enter"));return}if(h==="peek"){g>.4&&z("turn");return}h==="ready"?yt():h==="writing"&&_&&(_.finish(),g=Math.max(g,M))}function qt(){h==="room"&&!R.moving&&R.rest>.4&&R.i>0&&$(R.i-1)}return{start:P,update:xt,leave:mt,get active(){return d},get stage(){return h},wheel(ot){ot>8?Zt():ot<-8&&qt()},swipe(ot){ot>0?Zt():ot<0&&qt()},tap(){Zt()},key(ot){return["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(ot)>=0?(Zt(),!0):["ArrowUp","ArrowLeft","PageUp"].indexOf(ot)>=0?(qt(),!0):ot==="Escape"?(mt(),!0):!1},_setNote(ot){i.value=ot,i.dispatchEvent(new Event("input"))}}}});var Ub=Tt((rL,Hb)=>{"use strict";var Xc=kc(),C1=sp(),Pp=mh(),Wz=Ll(),Ip=cp(),Vz=qr(),$1=!Vz.isPhone&&!!(window.matchMedia&&window.matchMedia("(pointer: fine)").matches),{A:Or}=Gr(),{C:An,PAINTING_X:Qc}=On(),yr=t=>Math.max(0,Math.min(1,t)),he=(t,e,o)=>t+(e-t)*o,f0=(t,e,o)=>[he(t[0],e[0],o),he(t[1],e[1],o),he(t[2],e[2],o)],Po=(t,e)=>[t[0]+e[0],t[1]+e[1],t[2]+e[2]],qp=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],nr=(t,e)=>[t[0]*e,t[1]*e,t[2]*e],ae=(t,e,o)=>{let r=yr((o-t)/(e-t));return r*r*(3-2*r)};function Xz(t,e,o,r,n,a){if(n<=0)return[t,o];let s=2/r,i=s*n,c=1/(1+i+.48*i*i+.235*i*i*i),f=a*r,l=Math.max(-f,Math.min(f,t-e)),v=t-l,u=(o+s*l)*n,p=(o-s*u)*c,d=v+(l+u)*c;return e-t>0==d>e&&(d=e,p=0),[d,p]}var $b=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,Yz=t=>t*t*t,Dp=t=>1-Math.pow(1-t,3),$0=t=>-(Math.cos(Math.PI*t)-1)/2;function B0(t,e){let o=t.length-1,r=yr(e)*o,n=Math.min(o-1,Math.floor(r)),a=r-n,s=t[Math.max(0,n-1)],i=t[n],c=t[n+1],f=t[Math.min(o,n+2)],l=a*a,v=l*a;return[0,1,2].map(u=>.5*(2*i[u]+(-s[u]+c[u])*a+(2*s[u]-5*i[u]+4*c[u]-f[u])*l+(-s[u]+3*i[u]-3*c[u]+f[u])*v))}var No=(t,e,o,r)=>({eye:t,target:e,fov:o,roll:r||0});function Oi(t,e,o){return No(f0(t.eye,e.eye,o),f0(t.target,e.target,o),he(t.fov,e.fov,o),he(t.roll,e.roll,o))}var Bp=()=>ae(.75,1.3,window.innerWidth/window.innerHeight),rr=(t,e)=>Oi(t,e,Bp()),P1=[7,3.95,An.hallEnd-.05],Kz=[An.x1,2.9,An.zc],Kc=[16.75,4.55,6.75],jp=[6.92,2.72,14.5],pa=[7.3,.015,47.1],Zz=[Kc,[16.2,4,7],[15.3,3.45,6.4],[14.1,3.2,5.7],[12.2,3.35,6.6],[10,3.75,9.6],[8.2,3.8,12.2],[7.3,3.4,13.8],jp],Qz=[jp,[7.3,4.6,19.5],[7.6,4.9,23.5],[6.6,4.3,28.5],[7.5,3.2,34],[6.8,2.1,39.5],[7.4,1,44.2],[7.2,.3,46.4],pa],Ti=[Qc[0],3,An.z0],Li=[Qc[1],3,An.z0],Gp=47.45,Gb=4.6,Jz=13.2,tE=1.57,kf=[7.55,1.25,46.75],Wp=[17.25,2.42,46],Vp=[26.05,1.95,46],Sf=[36.15,.015,44],F1=()=>he(6.8,6.15,Bp()),eE=[kf,[9.6,1.65,46.2],[12.3,2.05,45.1],[14.6,2.35,44.5],[16.2,2.3,44.7],Wp],oE=[Wp,[20.2,2.05,45.6],[23.2,1.8,45],Vp],Ni=[Qc[2],3,An.z0],Hp=[34.8,1.35,46],Rs=[7.89,.03,19.03],Pb=.36,Ib=13.64,Pn=[{side:"left",z:34.5},{side:"left",z:23.5},{side:"left",z:14.6},{side:"right",z:14.6},{side:"right",z:23.5},{side:"right",z:34.5}];function Kr(t){let e=t.side==="left"?1:-1;return f0([7-e*1,3,t.z+e*.2],[7-e*.6,3.25,t.z+e*.13],Bp())}function nE(t){return t.side==="left"?rr(No([8.6,3.9,t.z],[Pb,1.45,t.z],76),No([8,3.6,t.z+.7],[Pb,3.95,t.z-2],46,-.008)):rr(No([5.4,3.9,t.z],[Ib,1.45,t.z],76),No([6,3.6,t.z-.7],[Ib,3.95,t.z+2],46,-.008))}var rE=()=>[Sf,[35.6,.5,44.6],[33.2,1.5,45.6],[29,2.3,46.1],[23.5,2.7,45.9],[18.5,2.9,45.4],[14.8,3.1,44.3],[11,3.3,41.8],[7.4,3.4,38.8],[5.4,3.3,36.6],Kr(Pn[0])],aE=()=>[Kr(Pn[2]),[3,3.2,13.2],[1.7,3,12],[2.6,3.2,10],[5,3.6,8.9],[7,3.8,8.6],[9,3.6,8.9],[11.4,3.2,10],[12.3,3,12],[11,3.1,13.4],Kr(Pn[3])],sE=()=>[Kr(Pn[5]),[9,3.4,31],[7.8,2.8,27.5],[6.8,1.9,24.5],[7.4,1,21],[7.75,.35,19.6],Rs],qb={2:{pos:()=>jp,amp:[.18,.07,.12],tumble:.5},7:{pos:()=>kf,amp:[.12,.09,.1],tumble:.55},8:{pos:()=>Wp,amp:[.1,.08,.08],tumble:.5},9:{pos:()=>Vp,amp:[.09,.06,.07],tumble:.45},10:{pos:()=>Hp,amp:[.07,.04,.06],tumble:.35},12:{pos:()=>Kr(Pn[0]),amp:[.12,.08,.1],tumble:.5},13:{pos:()=>Kr(Pn[1]),amp:[.12,.08,.1],tumble:.5},14:{pos:()=>Kr(Pn[2]),amp:[.12,.08,.1],tumble:.5},15:{pos:()=>Kr(Pn[3]),amp:[.12,.08,.1],tumble:.5},16:{pos:()=>Kr(Pn[4]),amp:[.12,.08,.1],tumble:.5},17:{pos:()=>Kr(Pn[5]),amp:[.12,.08,.1],tumble:.5}},Os=[{name:"corridor",ui:"intro",look:{letterbox:1,exposure:1,focus:14,aperture:.25,vignette:.1},cam(t){let e=.9*(1-Math.exp(-t/14)),o=[0,Math.sin(t*.37)*.025,Math.sin(t*.23)*.06],r=rr(No([An.x0+.9,1.85,An.zc+.25],[An.x1,2.85,An.zc-.1],64),No([An.x0+1.2,2,An.zc+.35],[An.x1,2.6,An.zc-.15],50));return r.eye=Po(Po(r.eye,[e,0,0]),o),r}},{name:"about",ui:"about",look:{letterbox:.55,exposure:1.32,focus:2.9,aperture:.9,vignette:.12,shafts:.65},cam(t){let e=[Math.sin(t*.21)*.08,Math.sin(t*.33)*.03,-.25*(1-Math.exp(-t/12))],o=rr(No([16.6,1.9,9.2],[17.3,.4,5.6],64),No([15,1.35,7.75],[17.55,1.05,5.5],44,-.02));return o.eye=Po(o.eye,e),o}},{name:"sky",ui:"sky",look:{letterbox:.55,exposure:1,focus:2.1,aperture:.45,vignette:.1,shafts:1},cam(t){let e=[Math.sin(t*.12)*.35,Math.sin(t*.2)*.04,(1-Math.cos(t*.12))*.25],o=rr(No([7,1.35,13],[7.2,7.6,20.4],74,.05),No([6.6,1.5,12.6],[7.3,7.2,20.8],56,.07));return o.eye=Po(o.eye,e),o}},{name:"master",ui:"master",look:{letterbox:.55,exposure:1.12,focus:8,aperture:.6,vignette:.3,shafts:.5},cam(t){let e=[Math.sin(t*.17)*.05,Math.sin(t*.29)*.02,-.35*(1-Math.exp(-t/16))],o=rr(No([7,3.6,43.7],[7,3.85,P1[2]],74),No([7,3.6,41.3],[7,3.95,P1[2]],46));return o.eye=Po(o.eye,e),o}},{name:"story",ui:"story",look:{letterbox:.55,exposure:1,focus:8.1,aperture:.9,vignette:.4,shafts:.4},cam(t){let e=[Math.sin(t*.15)*.04,Math.sin(t*.25)*.015,0],o=rr(No([7,3.9,40.3],[7,1.35,P1[2]],76),No([6.3,3.6,41.2],[3.7,3.95,P1[2]],46,-.008));return o.eye=Po(o.eye,e),o}},{name:"leaf",ui:"leaf",look:{letterbox:.55,exposure:1.15,focus:1.25,aperture:1.3,vignette:.35,shafts:.4},cam(t){let e=[Math.sin(t*.2)*.02,Math.sin(t*.3)*.006,0],o=rr(No([7.15,.15,46],[7.3,.04,pa[2]],50),No([7.05,.14,45.9],[7.25,.05,pa[2]],32));return o.eye=Po(o.eye,e),o}},{name:"steps",ui:"steps",look:{letterbox:.9,exposure:1.2,focus:1.6,aperture:1.4,vignette:.4,shafts:.4},cam(t){let e=[Math.sin(t*.2)*.015,0,0],o=rr(No([7.15,.1,46.3],[7.05,.1,Gp],50),No([7.1,.12,45.85],[7,.2,Gp],30));return o.eye=Po(o.eye,e),o}},{name:"float",ui:"float",look:{letterbox:.55,exposure:1.1,focus:2.2,aperture:.8,vignette:.3,shafts:.6},cam(t){let e=[Math.sin(t*.17)*.05,Math.sin(t*.27)*.02,0],o=rr(No([7.3,.85,45.65],[7.6,1.38,47.1],64),No([7.25,.82,45.8],[7.65,1.35,47.1],44));return o.eye=Po(o.eye,e),o}},{name:"painting1",ui:"p1",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(t){let e=[Math.sin(t*.15)*.04,Math.sin(t*.25)*.015,0],o=rr(No([Ti[0],2.3,46.85],[Ti[0],1.25,Ti[2]],74),No([Ti[0]-.6,2.55,46.85],[Ti[0]+1.9,2.9,Ti[2]],46,.008));return o.eye=Po(o.eye,e),o}},{name:"painting2",ui:"p2",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(t){let e=[Math.sin(t*.15)*.04,Math.sin(t*.25)*.015,0],o=rr(No([Li[0],1.95,46.85],[Li[0],1,Li[2]],74),No([Li[0]-.6,2.1,46.85],[Li[0]+1.9,2.75,Li[2]],46,.008));return o.eye=Po(o.eye,e),o}},{name:"painting3",ui:"p3",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.9},cam(t){let e=[Math.sin(t*.15)*.04,Math.sin(t*.25)*.015,0],o=rr(No([Ni[0],1.4,46.85],[Ni[0],.6,Ni[2]],74),No([Ni[0]-.6,1.45,46.85],[Ni[0]+1.9,2,Ni[2]],46,.008));return o.eye=Po(o.eye,e),o}},{name:"door",ui:"door",look:{letterbox:.8,exposure:1.05,focus:1.45,aperture:1.1,vignette:.35,shafts:1},cam(t){let e=[Math.sin(t*.2)*.02,Math.sin(t*.3)*.006,0],o=rr(No([34.75,.5,44.15],[An.x1,.8,43.95],66),No([34.75,.45,44.3],[An.x1,.35,43.95],50));return o.eye=Po(o.eye,e),o}},...Pn.map((t,e)=>({name:"hall"+e,ui:"h"+e,look:{letterbox:.55,exposure:1,focus:7.6,aperture:.7,vignette:.35,shafts:.7},cam(o){let r=[Math.sin(o*.15)*.04,Math.sin(o*.25)*.015,Math.sin(o*.11)*.04],n=nE(t);return n.eye=Po(n.eye,r),n}})),{name:"rest",ui:"end",look:{letterbox:.55,exposure:1.05,focus:2.4,aperture:.5,vignette:.4,shafts:1.15},cam(t){let e=t*.025,o=rr(No([7.75,2.6,18.6],[7.89,0,19.08],60),No([7.75,2.3,18.45],[7.89,0,19.08],46)),r=o.eye[0]-Rs[0],n=o.eye[2]-Rs[2];return o.eye=[Rs[0]+r*Math.cos(e)-n*Math.sin(e),o.eye[1],Rs[2]+r*Math.sin(e)+n*Math.cos(e)],o}}],iE=[1,.96,.88];function Db(t,e){return{dur:e,cam(o,r,n){let a=$0(o),s=Oi(r,n,a),i=Pn[t].side==="left"?1:-1;return s.eye=Po(s.eye,[i*.6*Math.sin(Math.PI*a),.15*Math.sin(Math.PI*a),0]),s},look(o,r,n){let a={};for(let s in n)typeof n[s]=="number"&&(a[s]=he(r[s],n[s],o));return a.aperture=he(r.aperture,n.aperture,o)*(1-.5*Math.sin(Math.PI*o)),a},leaf(o){let r=$0(o),n=Kr(Pn[t]),a=Kr(Pn[t+1]),s=Pn[t].side==="left"?1:-1,i=Po(f0(n,a,.5),[s*1.2,.5,0]),c=B0([n,f0(n,i,.6),i,f0(a,i,.6),a],r);return{phase:"fly",pos:Po(c,[0,Math.sin(o*Math.PI*5)*.07*Math.sin(Math.PI*o),0]),tumble:.5+.35*Math.sin(Math.PI*o)}}}}var Fp=[{dur:6.2,cam(t,e,o){if(t<.5){let i=Yz(t/.5),c=f0(e.eye,[An.x1-3.2,2.6,An.zc],i),f=f0(e.target,Kz,ae(0,.6,t/.5));return No(c,f,he(e.fov,e.fov-8,i),he(e.roll,.04,i))}let r=Dp((t-.5)/.5),n=[[Or.cx+.4,10.4,Or.zc+.6],[Or.cx-.6,7.6,Or.zc+1.3],[Or.cx-1.9,4.6,Or.zc+1.75],o.eye],a=[[Or.cx-.1,0,Or.zc-.2],[Or.cx-1,.4,Or.zc-.1],[Or.cx-1.1,.8,Or.zc-.2],o.target];return No(B0(n,r),B0(a,r),he(o.fov+14,o.fov,r),he(-.25,o.roll,r))},look(t,e,o){let r=ae(.22,.5,t),n=1-ae(.5,.74,t);return{fade:t<.5?r:n,fadeColor:iE,exposure:he(e.exposure,o.exposure,ae(.5,.9,t))*(1+2.2*(t<.5?ae(.15,.5,t):1-ae(.5,.8,t))),letterbox:he(e.letterbox,o.letterbox,ae(.3,.7,t)),aperture:t<.5?e.aperture*(1-t*2):o.aperture*ae(.6,1,t),focus:he(4,o.focus,ae(.5,1,t)),shafts:he(e.shafts,o.shafts,ae(.4,.6,t)),vignette:he(e.vignette,o.vignette,t)}},leaf(){return{phase:"home"}}},{dur:9,cam(t,e,o,r){let n=[e.eye,[15.6,2.4,8.3],[15.4,2.7,7.1],[12.6,2.6,5.4],[9.6,2,7.4],[7.6,1.6,10.6],o.eye],a=B0(n,$0(t)),s=ae(0,.12,t)*(1-ae(.82,1,t)),i=f0(f0(e.target,o.target,ae(.55,1,t)),r.pos,s),c=he(e.fov,o.fov,ae(.3,1,t))-6*Math.sin(Math.PI*t),f=he(e.roll,o.roll,t)+.05*Math.sin(Math.PI*2*t);return No(a,i,c,f)},look(t,e,o,r,n){let a=Math.hypot(r.pos[0]-n[0],r.pos[1]-n[1],r.pos[2]-n[2]);return{exposure:he(e.exposure,o.exposure,ae(.25,.75,t)),letterbox:he(e.letterbox,o.letterbox,t),focus:he(a,o.focus,ae(.8,1,t)),aperture:he(.7,o.aperture,ae(.8,1,t)),shafts:he(e.shafts,o.shafts,ae(.3,.8,t)),vignette:he(e.vignette,o.vignette,t)}},leaf(t){let e=$b(t),o=Math.sin(t*Math.PI*7)*.14*Math.sin(Math.PI*t);return{phase:"fly",pos:Po(B0(Zz,e),[0,Math.sin(t*Math.PI*9)*.05*Math.sin(Math.PI*t),o]),tumble:1-.5*ae(.8,1,t)}}},{dur:11.5,cam(t,e,o,r){let n=B0([e.eye,[7,1.9,19],[7.1,1.6,27.5],[6.9,1.1,36],[7,.7,42.5],[7.05,.5,45.7]],ae(0,.8,t)*.6+$0(yr(t/.8))*.4),a=B0([[7.05,.5,45.7],[7,1.2,45.3],[7,2.6,43.8],o.eye],$0(ae(.8,1,t))),s=t<.8?n:a,i=f0(f0(e.target,r.pos,ae(.03,.22,t)),o.target,ae(.82,1,t)),c=he(e.fov,o.fov,ae(.15,.7,t))-6*ae(.6,.8,t)*(1-ae(.85,1,t)),f=he(e.roll,o.roll,ae(0,.6,t))-.04*Math.sin(Math.PI*t);return No(s,i,c,f)},look(t,e,o,r,n){let a=Math.hypot(r.pos[0]-n[0],r.pos[1]-n[1],r.pos[2]-n[2]);return{exposure:he(e.exposure,o.exposure,ae(.5,1,t)),letterbox:he(e.letterbox,o.letterbox,t),focus:he(a,o.focus,ae(.84,1,t)),aperture:he(1.1,o.aperture,ae(.84,1,t)),shafts:he(e.shafts,o.shafts,ae(.2,.9,t)),vignette:he(e.vignette,o.vignette,ae(.5,1,t))}},leaf(t){let e=he($b(t),t,.35),o=B0(Qz,ae(0,.78,e)),r=Math.sin(t*Math.PI*8)*.35*(1-ae(.55,.76,t)),n=ae(.7,.8,t);return{phase:"fly",pos:Po(o,[r,Math.abs(Math.cos(t*Math.PI*8))*.12*(1-n),0]),tumble:1-n,swing:r}}},{dur:2.6,cam(t,e,o){let r=$0(t),n=Oi(e,o,r);return n.eye=Po(n.eye,[0,0,-.35*Math.sin(Math.PI*r)]),n},look(t,e,o){let r=$0(t),n={};for(let a in o)typeof o[a]=="number"&&(n[a]=he(e[a],o[a],r));return n},leaf(){return{phase:"floor"}}},{dur:4.5,cam(t,e,o){let r=$0(t),n=B0([e.eye,[6.9,1.7,43.9],[7.05,.45,45.4],o.eye],r),a=f0(e.target,o.target,ae(.1,.85,t));return No(n,a,he(e.fov,o.fov,ae(.2,1,t)),he(e.roll,o.roll,r))},look(t,e,o){let r={};for(let n in o)typeof o[n]=="number"&&(r[n]=he(e[n],o[n],ae(.2,1,t)));return r},leaf(){return{phase:"floor"}}},{dur:5.5,cam(t,e,o){return Oi(e,o,$0(t))},look(t,e,o){let r={};for(let n in o)typeof o[n]=="number"&&(r[n]=he(e[n],o[n],$0(t)));return r},leaf(){return{phase:"floor"}},walker(t){return he(Gb,F1(),t)}},{dur:11,kick:t=>yr((t-Yc())/(1-Yc())),cam(t,e,o,r){let n=Yc(),a=ae(0,n,t)*(1-ae(n+.12,n+.35,t)),s=Fb(Math.min(t,Zc)),i=Po(e.target,[(s-e.target[0])*.15*a,0,0]),c=ae(n+.12,1,t),f=B0([e.eye,e.eye,Po(e.eye,[0,.12,-.3]),o.eye],c);return i=f0(i,r.pos,ae(n+.06,n+.24,t)*(1-ae(.9,1,t))),i=f0(i,o.target,ae(.88,1,t)),No(f,i,he(e.fov,o.fov,c),he(e.roll,o.roll,c))},look(t,e,o,r,n){let a=Yc(),s=Math.hypot(r.pos[0]-n[0],r.pos[1]-n[1],r.pos[2]-n[2]),i=ae(0,.12,t)*(1-ae(a+.25,a+.5,t));return{letterbox:he(he(e.letterbox,o.letterbox,ae(a,1,t)),1.75,i),exposure:he(e.exposure,o.exposure,ae(a,1,t)),focus:t<a?e.focus:he(e.focus,s,ae(a,a+.2,t)),aperture:he(e.aperture,o.aperture,ae(a,1,t)),vignette:he(e.vignette,o.vignette,t),shafts:he(e.shafts,o.shafts,t)}},leaf(t){let e=yr((t-Yc())/(1-Yc()));if(e<=0)return{phase:"floor"};let o=ae(0,.85,e)*.85+Dp(ae(0,.15,e))*.15;return{phase:"fly",pos:Po(pa,[(kf[0]-pa[0])*o+Math.sin(e*9)*.08*(1-e),(kf[1]-pa[1])*o,(kf[2]-pa[2])*o+Math.sin(e*7)*.06*(1-e)]),tumble:1.3-.75*e}},walker(t){return t<.985?Fb(t):null}},{dur:9,cam(t,e,o,r){let n=$0(t),a=B0([e.eye,[9.4,1.35,45.6],[12.4,2,45.9],[15,2.45,46.5],o.eye],n),s=1-ae(.6,.92,t),i=f0(f0(e.target,r.pos,ae(0,.15,t)),o.target,1-s),c=he(e.fov,o.fov,ae(.3,1,t)),f=he(e.roll,o.roll,n)+.04*Math.sin(Math.PI*t);return No(a,i,c,f)},look(t,e,o,r,n){let a=Math.hypot(r.pos[0]-n[0],r.pos[1]-n[1],r.pos[2]-n[2]);return{letterbox:he(e.letterbox,o.letterbox,t),exposure:he(e.exposure,o.exposure,ae(.3,.8,t)),focus:he(a,o.focus,ae(.6,.95,t)),aperture:he(e.aperture,o.aperture,ae(.6,1,t)),vignette:he(e.vignette,o.vignette,t),shafts:he(e.shafts,o.shafts,ae(.3,.8,t))}},leaf(t){let e=$0(t);return{phase:"fly",pos:Po(B0(eE,e),[0,Math.sin(t*Math.PI*5)*.08*Math.sin(Math.PI*t),Math.sin(t*Math.PI*4)*.12*Math.sin(Math.PI*t)]),tumble:.55+.4*Math.sin(Math.PI*t)}}},{dur:6.5,cam(t,e,o){let r=$0(t),n=Oi(e,o,r);return n.eye=Po(n.eye,[0,.12*Math.sin(Math.PI*r),.1*Math.sin(Math.PI*r)]),n},look(t,e,o){let r={};for(let n in o)typeof o[n]=="number"&&(r[n]=he(e[n],o[n],t));return r.aperture=he(e.aperture,o.aperture,t)*(1-.5*Math.sin(Math.PI*t)),r},leaf(t){let e=$0(t);return{phase:"fly",pos:Po(B0(oE,e),[0,Math.sin(t*Math.PI*4)*.07*Math.sin(Math.PI*t),0]),tumble:.5+.3*Math.sin(Math.PI*t)}}},{dur:6.5,cam(t,e,o){let r=$0(t),n=Oi(e,o,r);return n.eye=Po(n.eye,[0,.1*Math.sin(Math.PI*r),.1*Math.sin(Math.PI*r)]),n},look(t,e,o){let r={};for(let n in o)typeof o[n]=="number"&&(r[n]=he(e[n],o[n],t));return r.aperture=he(e.aperture,o.aperture,t)*(1-.5*Math.sin(Math.PI*t)),r},leaf(t){let e=$0(t);return{phase:"fly",pos:Po(B0([Vp,[29.2,1.75,45.5],[32.2,1.5,45.4],Hp],e),[0,Math.sin(t*Math.PI*4)*.06*Math.sin(Math.PI*t),0]),tumble:.45+.25*Math.sin(Math.PI*t)}}},{dur:6,cam(t,e,o,r){let n=$0(t),a=B0([e.eye,[34.2,1.15,45.6],[34.5,.7,44.8],o.eye],n),s=ae(.05,.3,t)*(1-ae(.8,1,t)),i=f0(f0(e.target,o.target,ae(.6,1,t)),r.pos,s);return No(a,i,he(e.fov,o.fov,ae(.2,1,t)),he(e.roll,o.roll,n))},look(t,e,o,r,n){let a=Math.hypot(r.pos[0]-n[0],r.pos[1]-n[1],r.pos[2]-n[2]);return{letterbox:he(e.letterbox,o.letterbox,t),exposure:he(e.exposure,o.exposure,t),focus:he(a,o.focus,ae(.8,1,t)),aperture:he(.9,o.aperture,ae(.8,1,t)),vignette:he(e.vignette,o.vignette,t),shafts:he(e.shafts,o.shafts,t)}},leaf(t){let e=B0([Hp,[35.3,.9,45.2],[35.75,.4,44.4],[36,.08,44.05],Sf],ae(0,.85,t)),o=Math.sin(t*Math.PI*6)*.25*(1-ae(.35,.82,t)),r=ae(.78,.88,t);return{phase:"fly",pos:Po(e,[0,Math.abs(Math.cos(t*Math.PI*6))*.07*(1-r),o]),tumble:.7*(1-r),swing:o}}},{dur:12,door(t){let e=yr((t-.02)/.09);return Dp(e)+.07*Math.sin(yr((t-.08)/.18)*Math.PI)*(1-yr((t-.08)/.3))},cam(t,e,o,r){let n=Math.sin(t*340)*.012*ae(.02,.05,t)*(1-ae(.08,.16,t)),a=ae(.06,1,t),s=B0([e.eye,[34.3,1,43.6],[31.5,1.9,43.4],[26.5,2.4,43.6],[21,2.6,43.6],[16.5,2.8,43.2],[12.6,3.1,41.2],[9.6,3.4,38],o.eye],a*.55+$0(a)*.45),i=Po(r.pos,[1,-.2,-1.45]);s=f0(s,i,ae(.1,.22,t)*(1-ae(.52,.72,t)));let c=ae(.06,.16,t)*(1-ae(.86,1,t)),f=f0(e.target,r.pos,c);f=f0(f,o.target,ae(.86,1,t));let l=he(e.fov,o.fov,ae(.1,1,t))+6*Math.sin(Math.PI*ae(.08,.9,t)),v=he(e.roll,o.roll,t)+.06*Math.sin(Math.PI*2*ae(.1,.9,t))+n;return No(Po(s,[0,n,0]),f,l,v)},look(t,e,o,r,n){let a=Math.hypot(r.pos[0]-n[0],r.pos[1]-n[1],r.pos[2]-n[2]),s=ae(.02,.06,t)*(1-ae(.08,.3,t));return{letterbox:he(e.letterbox,o.letterbox,ae(.1,.4,t)),exposure:he(e.exposure,o.exposure,t)*(1+.8*s),focus:he(a,o.focus,ae(.86,1,t)),aperture:he(.8,o.aperture,ae(.86,1,t)),vignette:he(e.vignette,o.vignette,t),shafts:he(e.shafts,o.shafts,t)+s}},leaf(t){let e=yr((t-.05)/.95);if(e<=0)return{phase:"floor"};let o=B0(rE(),e*.6+$0(e)*.4),r=Math.sin(t*Math.PI*9)*.12*Math.sin(Math.PI*e);return{phase:"fly",pos:Po(o,[0,r*.6,r]),tumble:1.4-.8*e}}},...[0,1].map(t=>Db(t,7.5)),{dur:10,cam(t,e,o,r){let n=$0(t),a=B0([e.eye,[7.6,3.2,16.2],[7,2.9,17.2],[6.5,3.2,16],o.eye],n),s=ae(0,.15,t)*(1-ae(.85,1,t)),i=f0(f0(e.target,o.target,ae(.5,1,t)),r.pos,s);return No(a,i,he(e.fov,o.fov,n)+4*Math.sin(Math.PI*n),he(e.roll,o.roll,n))},look(t,e,o,r,n){let a=Math.hypot(r.pos[0]-n[0],r.pos[1]-n[1],r.pos[2]-n[2]);return{letterbox:he(e.letterbox,o.letterbox,t),exposure:he(e.exposure,o.exposure,t),focus:he(a,o.focus,ae(.85,1,t)),aperture:he(.6,o.aperture,ae(.85,1,t)),vignette:he(e.vignette,o.vignette,t),shafts:he(e.shafts,o.shafts,t)}},leaf(t){let e=$0(t),o=B0(aE(),e);return{phase:"fly",pos:Po(o,[0,Math.sin(t*Math.PI*6)*.06*Math.sin(Math.PI*t),0]),tumble:.6+.4*Math.sin(Math.PI*t)}}},...[3,4].map(t=>Db(t,7.5)),{dur:10,cam(t,e,o,r){let n=$0(t),a=B0([e.eye,[7.6,4,30.5],[7.3,4.4,25.5],[7.1,4,21.8],o.eye],n),s=ae(0,.2,t)*(1-ae(.9,1,t)),i=f0(f0(e.target,o.target,ae(.5,1,t)),r.pos,s);return No(a,i,he(e.fov,o.fov,n),he(e.roll,o.roll,n))},look(t,e,o,r,n){let a=Math.hypot(r.pos[0]-n[0],r.pos[1]-n[1],r.pos[2]-n[2]);return{letterbox:he(e.letterbox,o.letterbox,t),exposure:he(e.exposure,o.exposure,t),focus:he(a,o.focus,ae(.85,1,t)),aperture:he(.7,o.aperture,ae(.85,1,t)),vignette:he(e.vignette,o.vignette,t),shafts:he(e.shafts,o.shafts,t)}},leaf(t){let e=B0(sE(),ae(0,.86,t)),o=Math.sin(t*Math.PI*7)*.3*(1-ae(.4,.84,t)),r=ae(.8,.9,t);return{phase:"fly",pos:Po(e,[o,Math.abs(Math.cos(t*Math.PI*7))*.08*(1-r),0]),tumble:.8*(1-r),swing:o}}}],Up=9.2,Zc=.72;function Fb(t){return t<Zc?he(F1(),Up,t/Zc):he(Up,Jz,(t-Zc)/(1-Zc))}function Yc(){return Zc*yr((pa[0]+.15-F1())/(Up-F1()))}var D1={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},I1=t=>Object.assign({},D1,Os[t].look),cE=`
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
`;function xr(t,e,o){let r=document.createElement(t);return e&&(r.className=e),o!==void 0&&(r.innerHTML=o),r}var Ai=t=>String(t).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function q1(t,e,o){t.querySelectorAll(".tour-line").forEach((r,n)=>{r.style.transitionDelay=(e+n*o).toFixed(2)+"s"})}Hb.exports=function(e){let o=/tourdebug/.test(location.search),{fps:r}=e;if(!document.querySelector("link[data-tour-font]")){let W=document.createElement("link");W.rel="stylesheet",W.href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&display=swap",W.setAttribute("data-tour-font",""),document.head.appendChild(W)}let n=Lp(),a=null;fetch("res/hand.json").then(W=>W.ok?W.json():null).then(W=>{a=W}).catch(()=>{});let s=document.createElement("style");s.textContent=cE+`
	.hand-text { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); clip-path: inset(50%); white-space: normal; }
	.tour-body canvas.hand { display: block; cursor: pointer; }`,s.textContent+=`
	body.touring #museum-mobile-controls,
	body.touring .painting-plaque { display: none !important; }`,document.head.appendChild(s);let i=xr("div","tour");i.setAttribute("role","region"),i.setAttribute("aria-label","Guided tour of the gallery. Swipe, scroll or press the arrow keys to move on.");let c=xr("div","tour-mark",Ai(C1.name)),f=xr("button","tour-free","Explore freely");f.type="button";let l=xr("div","tour-links",Pp.icons("tour-icon"));l.insertBefore(Op()("tour-icon"),l.firstChild),l.insertBefore(x1().button("tour-icon"),l.firstChild.nextSibling);let v=xr("button","tour-free tour-note",'<svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 4c-7 1-11.5 5.5-13 13l-1.5 3 3-1.5c7.500-1.500 12-6 13-13z"/><path d="M5.5 20L13 12.500"/></svg><span>Leave a note</span>');v.type="button",v.setAttribute("aria-label","Leave a note: go to the piano room and the confessional"),l.appendChild(v),$1&&l.appendChild(f);let u=xr("div","tour-progress",Os.map(()=>"<i></i>").join("")),p=xr("div","tour-hint",'<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M6 15l6-6 6 6"></path></svg><span></span>'),d=p.querySelector("span"),h=xr("div","tour-card tour-intro",`
		<span class="tour-line tour-kicker">A virtual gallery</span>
		<span class="tour-rule"></span>
		<h1 class="tour-line tour-title">${Ai(C1.name)}</h1>
		<span class="tour-line tour-sub tour-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</span>`);q1(h,.4,.35);let g=C1.text.split(/\n\s*\n/).map(W=>`<p class="tour-line">${Ai(W.trim())}</p>`).join(""),m=xr("div","tour-card tour-about",`
		<span class="tour-line tour-kicker">The artist</span>
		<h2 class="tour-line tour-title">${Ai(C1.title)}</h2>
		<span class="tour-rule"></span>
		${Pp.line("tour-line tour-contact")}
		${g}`);q1(m,.25,.28);let x=xr("div","tour-card tour-sky",`
		<span class="tour-line tour-sub">Every painting here waits for the light.</span>`);q1(x,.6,.3);let y=xr("div","tour-card tour-master","");function _(W){let ht=xr("div","tour-card tour-story",`
			<span class="tour-line tour-kicker"></span>
			<h2 class="tour-title tour-letters"></h2>
			<span class="tour-rule"></span>
			<span class="tour-line visit-row"></span>
			<div class="tour-body"></div>`),kt=ht.querySelector(".tour-title"),ue=ht.querySelector(".tour-body");return ht.filled=!1,ht.body=ue,ht.fill=()=>{let fe=W();if(!fe||ht.filled)return;ht.filled=!0;let _o=fe.title||"";ht.querySelector(".tour-kicker").textContent=Wz(fe)||"Oil on canvas";let yo=ht.querySelector(".visit-row");yo.innerHTML=Ip.button(fe),yo.hidden=!yo.innerHTML;let Uo=yo.querySelector(".visit-btn");Uo&&(Uo.addEventListener("click",qe=>{qe.stopPropagation(),Ip.open(fe)}),ht.warm=()=>Ip.warm(fe));let ao=0;kt.innerHTML=_o.split(" ").map(qe=>'<span class="tour-word">'+qe.split("").map(vo=>`<span style="transition-delay:${(.35+ao++*.045).toFixed(3)}s">${Ai(vo)}</span>`).join("")+"</span>").join(" "),kt.setAttribute("aria-label",_o);let Co=.35+_o.length*.045+.2;ht.querySelector(".tour-rule").style.transitionDelay=Co.toFixed(2)+"s";let co=String(fe.description||"").split(/\n\s*\n/).filter(qe=>qe.trim());if(ht.querySelector(".tour-kicker").style.transitionDelay="0.1s",a&&co.length){ue.innerHTML=co.map(P0=>`<p class="hand-text">${Ai(P0.trim())}</p>`).join("")+'<div class="hand-wrap"><canvas class="hand" aria-hidden="true"></canvas></div>';let qe=ue.querySelector("canvas"),vo=co.map(P0=>P0.trim()).join(`

`),so=!1,p0=!1,t0=0;ue.addEventListener("wheel",()=>{so=!0},{passive:!0}),ue.addEventListener("touchmove",()=>{so=!0},{passive:!0});let ir=parseFloat(getComputedStyle(ue).fontSize)||17,l0=n(qe,a,{ink:"rgba(244,236,223,0.93)",shadow:"rgba(0,0,0,0.55)",shadowBlur:7,xh:Math.max(8.5,ir*.56),width:.14,speed:80,pace:.12,minDur:.022,maxTime:P0=>3.5+P0.length/420,seed:3+_o.length,onPen:P0=>{if(so)return;let Jr=P0-ue.clientHeight*.55;Jr>ue.scrollTop+4&&(ue.scrollTop+=Math.min(16,Jr-ue.scrollTop))}});qe.addEventListener("click",P0=>{P0.stopPropagation(),clearTimeout(t0),p0?l0.finish():(p0=!0,l0.write(vo,!0))}),ht.write=()=>{if(clearTimeout(t0),so=!1,p0){l0.write(vo,!0);return}l0.write("",!0),t0=setTimeout(()=>{p0=!0,l0.write(vo)},Co*.6*1e3)},ht.stopWrite=()=>{clearTimeout(t0),l0.stop()};let Cr=0;window.addEventListener("resize",()=>{clearTimeout(Cr),Cr=setTimeout(()=>{p0&&ht.classList.contains("on")&&l0.write(vo,!0)},250)})}else ue.innerHTML=co.map(qe=>`<p class="tour-line">${Ai(qe.trim())}</p>`).join(""),ue.querySelectorAll(".tour-line").forEach((qe,vo)=>{qe.style.transitionDelay=(Co+.3+Math.min(vo,6)*.35).toFixed(2)+"s"})},ht}let M=()=>e.paintings?e.paintings():[],b=W=>M().find(ht=>ht.side==="corridor"&&Math.abs(ht.paintingPosition[0]-W)<.5),k=_(()=>M().find(W=>W.side==="end")),E=()=>xr("div","tour-card",""),z=_(()=>b(Ti[0])),P=_(()=>b(Li[0])),R=_(()=>b(Ni[0])),B=Pn.map(W=>_(()=>M().find(ht=>ht.side===W.side&&Math.abs(ht.paintingPosition[2]-W.z)<.5))),$=xr("div","tour-card tour-endcard",`
		<span class="tour-line tour-kicker">Thank you for walking with me</span>
		<span class="tour-rule"></span>
		<span class="tour-line tour-sub">${$1?"The rest of the gallery is yours to wander.":"Swipe back to return to any painting."}</span>
		<span class="tour-line tour-sub tour-confess-line">Before you leave, the confessional is open.<br>Leave me a note; no one else will read it.</span>
		<div class="tour-line tour-end"><button type="button" class="tour-btn" data-act="confess">Leave something behind</button></div>
		${Pp.line("tour-line tour-contact")}
		<div class="tour-line tour-end">
			${$1?'<button type="button" class="tour-btn" data-act="free">Walk the gallery</button>':""}
			<button type="button" class="tour-btn quiet" data-act="list">All paintings</button>
			<button type="button" class="tour-btn quiet" data-act="replay">Replay</button>
		</div>`);q1($,.5,.35);let D=[h,m,x,y,k,E(),E(),E(),z,P,R,E(),...B,$];i.append(...D,c,l,u,p),document.body.appendChild(i);let it=Cb()({root:i,avatar:e.avatar,glyphs:()=>a,onExit:()=>{Qt=-1,Ie&&(Y={start:S},Ie=!1)}});document.body.classList.add("touring");let St=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,yt=St?"Scroll":"Swipe",mt=Os.map((W,ht)=>ht===0?St?"Scroll to begin":"Swipe up to begin":ht===1?yt+" to follow the leaf":ht===2?yt+" to follow the light":ht===3?yt+" for its story":ht===6||ht===7||ht===Os.length-1?"":yt+" on"),zt=[0];Fp.forEach(W=>zt.push(zt[zt.length-1]+W.dur));let It=zt[zt.length-1],re=210,Ae=95,lo=.35,ge=1.4,$e=.32,He=1,et=1.3,j=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,lt=2.2,xt=.7,Kt=.9,te=!0,Zt=0,qt=0,ot=0,Rt=-10,Se=!1,Qt=-1,Ft=0,Ue=0,S=0,De=null,Ve=Object.assign({},I1(0)),uo=Os[0].cam(0),Oo={phase:"home",pos:Kc.slice(),tumble:0},wo=0,Fo=W=>{let ht=0;for(let kt=1;kt<zt.length;kt++)Math.abs(zt[kt]-W)<Math.abs(zt[ht]-W)&&(ht=kt);return ht};function qo(W){let ht=D[W];ht&&ht.fill&&(ht.fill(),ht.body.scrollTop=0,ht.offsetWidth),D.forEach((kt,ue)=>{let fe=kt.classList.contains("on");kt.classList.toggle("on",ue===W),ue===W&&!fe&&kt.write&&kt.write(),ue!==W&&fe&&kt.stopWrite&&kt.stopWrite()}),ht&&ht.warm&&ht.warm(),d.textContent=mt[W]||"",p.classList.toggle("on",!!mt[W])}function x0(){D.forEach(W=>{W.stopWrite&&W.classList.contains("on")&&W.stopWrite(),W.classList.remove("on")}),p.classList.remove("on")}let Ln=null,Nn=-1;function tt(W){if(it.active||!te||De)return;let ht=S-Rt>lo;if(Rt=S,ht||!Ln){let kt=0,ue=It;for(let fe=0;fe<zt.length;fe++)if(zt[fe]<=Zt-.02&&(kt=zt[fe]),zt[fe]>=Zt+.02){ue=zt[fe];break}Ln={lo:kt,hi:ue}}S<Nn||(Se=!1,ot=Math.max(Ln.lo,Math.min(Ln.hi,ot+W)),ot=Math.max(Zt-lt,Math.min(Zt+lt,ot)))}function Vt(W){if(it.active||!te||De)return;let ht=Se?ot:Zt,kt;if(W>0)kt=zt.findIndex(ue=>ue>ht+.05);else{kt=-1;for(let ue=zt.length-1;ue>=0;ue--)if(zt[ue]<ht-.05){kt=ue;break}}kt<0||(ot=zt[kt],Se=!0,Rt=S)}let Xt=null,Bt=W=>W.stopPropagation();["touchstart","touchmove","touchend","mousedown","mouseup","click","contextmenu"].forEach(W=>i.addEventListener(W,Bt)),i.addEventListener("pointerdown",W=>{if(W.stopPropagation(),!(W.target.closest("button, a")||W.target.closest(".tour-body"))){Xt={x:W.clientX,y:W.clientY,lx:W.clientX,ly:W.clientY,t:performance.now(),moved:0,v:0,lt:performance.now()};try{i.setPointerCapture(W.pointerId)}catch(ht){}}}),i.addEventListener("pointermove",W=>{if(!Xt)return;let ht=W.clientX-Xt.lx,kt=W.clientY-Xt.ly;Xt.lx=W.clientX,Xt.ly=W.clientY;let ue=Math.abs(kt)>=Math.abs(ht)?-kt:-ht;Xt.moved+=Math.abs(ue);let fe=performance.now(),_o=ue/Ae;Xt.v=Xt.v*.6+_o/Math.max(.008,(fe-Xt.lt)/1e3)*.4,Xt.lt=fe,Xt.moved>6&&tt(_o)});let Le=W=>{let ht=Xt;if(Xt=null,!!ht){if(it.active){ht.moved<10&&performance.now()-ht.t<500?it.tap():ht.y-(W?W.clientY:ht.ly)>30&&it.swipe(1);return}ht.moved<10&&performance.now()-ht.t<500?Vt(1):performance.now()-ht.lt<120&&tt(Math.max(-1.6,Math.min(1.6,ht.v*.22)))}};i.addEventListener("pointerup",W=>{W.stopPropagation(),Le(W)}),i.addEventListener("pointercancel",()=>{Xt=null}),i.addEventListener("wheel",W=>{if(it.active){if(W.target.closest(".conf-ui"))return;W.preventDefault(),it.wheel(W.deltaY);return}if(W.target.closest(".tour-body")){let kt=W.target.closest(".tour-body"),ue=kt.scrollTop+kt.clientHeight>=kt.scrollHeight-2&&W.deltaY>0,fe=kt.scrollTop<=0&&W.deltaY<0;if(!ue&&!fe)return}W.preventDefault();let ht=W.deltaMode===1?W.deltaY*16:W.deltaMode===2?W.deltaY*window.innerHeight:W.deltaY;tt(ht/re)},{passive:!1}),window.addEventListener("keydown",W=>{if(!te||De||document.body.classList.contains("visiting"))return;if(it.active){if(W.stopImmediatePropagation(),W.target&&/TEXTAREA|INPUT|BUTTON/.test(W.target.tagName))return;it.key(W.key)&&W.preventDefault();return}let ht=W.key;if(["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(ht)>=0){if((ht==="Enter"||ht===" ")&&W.target&&W.target.tagName==="BUTTON")return;W.preventDefault(),W.stopImmediatePropagation(),Vt(1)}else["ArrowUp","ArrowLeft","PageUp"].indexOf(ht)>=0?(W.preventDefault(),W.stopImmediatePropagation(),Vt(-1)):ht==="Escape"?(W.preventDefault(),Ze()):/^[wasdzq]$/i.test(ht)&&W.stopImmediatePropagation()},!0),window.addEventListener("keyup",W=>{te&&!De&&/^(Arrow|[wasdzq]$)/i.test(W.key)&&W.stopImmediatePropagation()},!0),f.addEventListener("click",W=>{W.stopPropagation(),Ze()}),["mousedown","pointerdown"].forEach(W=>v.addEventListener(W,ht=>ht.stopPropagation())),v.addEventListener("click",W=>{W.stopPropagation(),io()});let Be=No([8.6,1.75,44.3],[-3,1.85,44.5],55,0),Ye=null,Ie=!1;function io(){if(!te||De||it.active||Ye)return;x0(),Qt=-2;let W=uo.eye;if(W[0]>.5&&W[0]<13.5&&W[2]>36&&W[2]<50){Ie=!1,it.start(uo,Ve);return}Ye={t:0}}$.addEventListener("click",W=>{let ht=W.target.closest("button");ht&&(W.stopPropagation(),ht.dataset.act==="free"&&Ze(),ht.dataset.act==="replay"&&Mo(),ht.dataset.act==="list"&&Xu().show(!1),ht.dataset.act==="confess"&&(x0(),Qt=-2,it.start(uo,Ve)))});let je=[null,[Or.zc-1.6,Math.PI/2],[11.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[42.5+Qc[0]-7,0],[42.5+Qc[1]-7,0],[42.5+Qc[2]-7,0],[1e3,Math.PI/2],...Pn.map(W=>[W.z-1.6,W.side==="left"?-Math.PI/2:Math.PI/2]),[Rs[2]-1.6,Math.PI]],po=null,Xe=0;function Ze(){if(!te||De||!$1)return;let W=Fo(Zt),ht=je[W];po=W<=1?{phase:"home",pos:Kc.slice()}:W>=3&&W<=6?{phase:"floor",pos:pa.slice()}:W===11?{phase:"floor",pos:Sf.slice()}:W===18?{phase:"floor",pos:Rs.slice()}:null,Xe=W>=12?1:0,ht&&r.place&&r.place(ht[0],ht[1]),De={start:S,fromCam:uo,fromLook:Object.assign({},Ve)},x0(),i.hidden=!0,document.body.classList.remove("touring"),e.onExit&&e.onExit()}function Mo(){Zt=ot=0,qt=0,Se=!1,Qt=-1,Ft=0,Ue=0,Oo={phase:"home",pos:Kc.slice(),tumble:0},Y={start:S}}let Y={start:-1},gt=!1,ft=[],Ct={prev:null,vel:[0,0,0],axis:[1,0,0],dir:null,bank:0,rock:0,spin:0,fresh:!0};function pe(W){wo+=W*(Oo.phase==="floor"?0:1);let ht=Oo.tumble===void 0?0:Oo.tumble,kt=Xc.fromTranslation(ft,Oo.pos);if(Oo.phase==="home")kt=Xc.rotateY(kt,kt,2.2+Math.sin(wo*.9)*.15),kt=Xc.rotateZ(kt,kt,-1+Math.sin(wo*1.3)*.12),kt=Xc.rotateX(kt,kt,.4);else if(Oo.phase==="floor")kt=Xc.rotateY(kt,kt,.65),kt=Xc.rotateX(kt,kt,.16);else{let ue=Oo.pos;if(Ct.prev&&W>0){let qn=[ue[0]-Ct.prev[0],ue[1]-Ct.prev[1],ue[2]-Ct.prev[2]];if(Math.hypot(qn[0],qn[1],qn[2])<1.5){let cl=Math.min(1,W*6);for(let Gs=0;Gs<3;Gs++)Ct.vel[Gs]+=(qn[Gs]/W-Ct.vel[Gs])*cl}else Ct.vel=[0,0,0]}Ct.prev=ue.slice();let fe=Ct.vel,_o=Math.hypot(fe[0],fe[1],fe[2]),yo=ae(.25,1.4,_o),Uo=ae(.5,2,-fe[1]),ao=wo*.35*(.3+ht)+.65,Co=[Math.cos(ao),0,Math.sin(ao)];_o>.001&&(Co=f0(Co,nr(fe,-1/_o),yo));let co=Math.min(1,W*4);Ct.axis=f0(Ct.axis,Co,Ct.fresh?1:co);let qe=Ct.axis,vo=Math.hypot(qe[0],qe[1],qe[2])||1;qe=nr(qe,1/vo);let so=uo.eye,p0=[so[0]-ue[0],so[1]-ue[1],so[2]-ue[2]],t0=Math.hypot(p0[0],p0[1],p0[2])||1,ir=he(.6,.22,yo),l0=[p0[0]/t0*ir,1+p0[1]/t0*ir,p0[2]/t0*ir],Cr=qe[0]*l0[0]+qe[1]*l0[1]+qe[2]*l0[2];l0=qp(l0,nr(qe,Cr));let P0=Math.hypot(l0[0],l0[1],l0[2])||1;l0=nr(l0,1/P0);let Jr=[qe[1]*l0[2]-qe[2]*l0[1],qe[2]*l0[0]-qe[0]*l0[2],qe[0]*l0[1]-qe[1]*l0[0]],Xo=Math.hypot(fe[0],fe[2]),M0=0;if(Xo>.15&&Ct.dir&&W>0){let qn=[fe[0]/Xo,fe[2]/Xo];M0=(Ct.dir[0]*qn[1]-Ct.dir[1]*qn[0])/W,Ct.dir=qn}else Xo>.15&&(Ct.dir=[fe[0]/Xo,fe[2]/Xo]);Ct.bank+=(Math.max(-.8,Math.min(.8,M0*.3))*yo-Ct.bank)*Math.min(1,W*3),Ct.rock+=W*(1.5+2.4*yo),Ct.spin+=W*Uo*7*(.4+ht);let $r=Math.sin(Ct.rock)*(.26+.45*ht)*(1-.5*Uo)+Ct.bank+Ct.spin,Ds=Math.sin(Ct.rock*.63+1)*(.16+.3*ht)+(Oo.swing||0)*.9,ga=Math.cos($r),Fs=Math.sin($r),$f=Po(nr(l0,ga),nr(Jr,Fs)),Qa=Po(nr(Jr,ga),nr(l0,-Fs));ga=Math.cos(Ds),Fs=Math.sin(Ds);let Di=Po(nr(qe,ga),nr($f,Fs)),sl=Po(nr($f,ga),nr(qe,-Fs)),K1=Math.sin(Ct.rock+1.5708)*.035*(.3+ht)*(1-.5*yo),Na=Po(ue,nr(Jr,K1)),il=[Di[0],Di[1],Di[2],0,sl[0],sl[1],sl[2],0,Qa[0],Qa[1],Qa[2],0,Na[0],Na[1],Na[2],1];for(let qn=0;qn<16;qn++)kt[qn]=il[qn];Ct.fresh=!1}return Oo.phase!=="fly"&&(Ct.prev=null,Ct.vel=[0,0,0],Ct.fresh=!0,Ct.spin=0,Ct.bank=0,Ct.dir=null),{visible:!0,model:kt}}function Me(W){for(let ht in D1)Ve[ht]=W[ht]!==void 0?W[ht]:D1[ht]}function ye(W,ht){if(W<=1)return{phase:"home",pos:Kc.slice(),tumble:0};let kt=qb[W];if(kt){let ue=kt.amp;return{phase:"fly",pos:Po(kt.pos(),[Math.sin(ht*.55)*ue[0],Math.sin(ht*.8)*ue[1],(1-Math.cos(ht*.45))*ue[2]]),tumble:kt.tumble}}return{phase:"floor",pos:(W>=18?Rs:W>=10?Sf:pa).slice(),tumble:0}}let le=0,ve=null;function Je(W){let ht=Math.min(.1,Math.max(0,W-le));if(le=W,S=W,gt||(gt=!0,Y.start=W),De)return null;if(Ye&&(Ye.t+=ht,Ye.t>=.7&&(Ye=null,Ie=!0,it.start(Be,Object.assign({},D1,{fade:1,fadeColor:[0,0,0]})))),it.active){let Xo=it.update(ht);return uo=Xo.camera,Me(Xo.look),o&&window.__camOverride&&(uo=window.__camOverride),o&&window.__lookOverride&&Object.assign(Ve,window.__lookOverride),{camera:uo,walker:null,door:1,look:Ve,leaf:pe(ht)}}if(!Se&&!Xt&&S-Rt>xt){let Xo=Fo(ot);Math.abs(zt[Xo]-ot)<Kt&&(ot=zt[Xo])}let kt=ot-Zt;if(Se){let M0=Math.sign(kt)*Math.min(He,Math.sqrt(2*et*Math.abs(kt)))-qt;qt+=Math.sign(M0)*Math.min(Math.abs(M0),et*ht),Zt+=qt*ht,(kt>0&&Zt>=ot||kt<0&&Zt<=ot||Math.abs(ot-Zt)<1e-4)&&(Zt=ot,qt=0,Se=!1)}else{let Xo=Xz(Zt,ot,qt,$e,ht,3);Zt=Xo[0],qt=Xo[1],Math.abs(ot-Zt)<1e-4&&Math.abs(qt)<.001&&(Zt=ot,qt=0)}let ue=0;for(;ue<Fp.length-1&&Zt>=zt[ue+1];)ue++;let fe=Fp[ue],_o=yr((Zt-zt[ue])/fe.dur),yo=Os[ue],Uo=Os[ue+1],ao=Fo(Zt);ao!==Ft&&(Ft=ao,Ue=0);let Co=Math.abs(Zt-zt[ao])<.02;Co&&(Ue+=ht);let co=1-ae(0,1.2,Math.abs(Zt-zt[ao])),qe=fe.leaf(_o);if(qe.pos?Oo=Object.assign({},qe):Oo=Object.assign({},qe,{pos:qe.phase==="home"?Kc.slice():(ue>=10?Sf:pa).slice()}),qb[ao]&&co>0){let Xo=ye(ao,Ue);Oo.pos=f0(Oo.pos,Xo.pos,co)}let vo=fe.walker&&(_o>.01||ue===6)?fe.walker(_o):null;ve=vo==null?null:{x:vo,z:Gp,heading:Math.PI/2,phase:(vo-Gb)/tE};let so=fe.cam(_o,yo.cam(0),Uo.cam(0),Oo);if(co>0&&Ue>0){let Xo=Os[ao],M0=Xo.cam(0),$r=Xo.cam(Ue);so=No(Po(so.eye,nr(qp($r.eye,M0.eye),co)),Po(so.target,nr(qp($r.target,M0.target),co)),so.fov+($r.fov-M0.fov)*co,so.roll+($r.roll-M0.roll)*co)}if(co>0&&!j){let Xo=S,M0=.006*co,$r=Math.sin(Xo*.61)*.6+Math.sin(Xo*1.37+1.3)*.4,Ds=Math.sin(Xo*.47+2.1)*.6+Math.sin(Xo*1.13+.4)*.4,ga=Math.sin(Xo*.53+4)*.5+Math.sin(Xo*.97+2.6)*.5;so=No(Po(so.eye,[$r*M0,Ds*M0*.7,ga*M0]),Po(so.target,[Ds*M0*1.8,$r*M0*1.4,0]),so.fov,so.roll+ga*.0012*co)}uo=so;let p0=I1(ue),t0=I1(ue+1),ir=Object.assign({},p0,fe.look(_o,p0,t0,Oo,so.eye));if(co>0){let Xo=I1(ao);for(let M0 in Xo)typeof Xo[M0]=="number"&&(ir[M0]=he(ir[M0],Xo[M0],co))}Me(ir);let Cr=Co&&Math.abs(ot-Zt)<.02?ao:-1;Cr!==Qt&&(Cr>=0&&(Nn=S+ge),Qt=Cr,Cr>=0?qo(Cr):x0()),u.querySelectorAll("i").forEach((Xo,M0)=>Xo.classList.toggle("on",M0===ao));let P0=Qt>=0?D[Qt]:null;P0&&P0.fill&&!P0.filled&&(P0.fill(),P0.filled&&(P0.classList.remove("on"),P0.offsetWidth,P0.classList.add("on")));let Jr=yr((W-Y.start)/2.6);return Jr<1&&(Ve.fade=Math.max(Ve.fade,1-ae(0,1,Jr)),Ve.fadeColor=[0,0,0]),o&&window.__camOverride&&(uo=window.__camOverride),o&&window.__lookOverride&&Object.assign(Ve,window.__lookOverride),{camera:uo,walker:ve,door:fe.door?fe.door(_o):ue>=12?1:0,look:Ye?Object.assign(Ve,{fade:Math.max(Ve.fade||0,yr(Ye.t/.6)),fadeColor:[0,0,0]}):Ve,leaf:pe(ht)}}return o&&(window.__tour={go:Vt,exit:Ze,wind:tt,confess(){x0(),Qt=-2,it.start(uo,Ve)},note:()=>io(),conf:it,paper:L1().STATE,seek(W,ht){Zt=ot=zt[W]+(zt[W+1]-zt[W])*ht,qt=0,Se=!1,Rt=S+1e6,Y.start=S-10,gt=!0},jump(W){Zt=ot=zt[W],qt=0,Se=!1,Ue=0,Rt=S,Y.start=S-10,gt=!0},state:()=>({current:Fo(Zt),scroll:+Zt.toFixed(3),target:+ot.toFixed(3),shown:Qt,move:Math.abs(ot-Zt)>.02?{p:Zt}:null,camNow:uo,leaf:Oo,look:Ve})}),{update:Je,get active(){return te&&!De},handover(W){if(!De)return null;let ht=yr((W-De.start)/1.8);return ht>=1?(te=!1,null):{from:De.fromCam,fromLook:De.fromLook,k:$0(ht)}},restingDoor:()=>Xe,restingLeaf(){return po?(Oo=po,pe(0)):null},mix:Oi,cam:No}}});var Xb=Tt((aL,Vb)=>{var U1=Tc(),Xp=U1.O,{ROT:lE,GRAVE:Bb}=U1.STUDIO,Yp=t=>[t[0]+Xp[0],t[1]+Xp[1],t[2]+Xp[2]],Ci=(t,e,o)=>t+(e-t)*o,Cs=(t,e,o)=>[Ci(t[0],e[0],o),Ci(t[1],e[1],o),Ci(t[2],e[2],o)],Ri=(t,e)=>[t[0]+e[0],t[1]+e[1],t[2]+e[2]],zf=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],ar=(t,e)=>[t[0]*e,t[1]*e,t[2]*e],$s=t=>{let e=Math.hypot(t[0],t[1],t[2])||1;return ar(t,1/e)},Jc=(t,e)=>[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]],B1=t=>Math.max(0,Math.min(1,t)),Zp=t=>t*t*(3-2*t),va=(t,e,o)=>Zp(B1((o-t)/(e-t))),jb=t=>.5-.5*Math.cos(Math.PI*B1(t));function G1(t,e){let o=t.length-1,r=B1(e)*o,n=Math.min(o-1,Math.floor(r)),a=r-n,s=t[Math.max(0,n-1)],i=t[n],c=t[n+1],f=t[Math.min(o,n+2)],l=a*a,v=l*a;return[0,1,2].map(u=>.5*(2*i[u]+(-s[u]+c[u])*a+(2*s[u]-5*i[u]+4*c[u]-f[u])*l+(-s[u]+3*i[u]-3*c[u]+f[u])*v))}var In=lE.cx,H1=[In+.06,Bb.top+.012,Bb.cz+.55],Qp=[9.1,7.42,5.5],Jp=[8.6,3.3,1.95],tv=[7.9,1.6,2.5],ev=[7.95,.17,6.4],ov=[In,.25,10.4],nv=[In,2,22.6],tn=[{petal:Qp,eye:[7.4,4.8,3.2],at:Qp,fov:44,look:{aperture:.6}},{petal:Jp,eye:[9.2,3.45,2.6],at:[7.85,3.2,1.15],fov:40,look:{aperture:.45}},{petal:tv,eye:[7,1.55,3.3],at:[8.1,1.75,1],fov:42,look:{aperture:.45}},{petal:ev,eye:[8.45,.55,7.9],at:[7.9,.25,5],fov:46,look:{aperture:.35}},{petal:ov,eye:[In,.95,7.4],at:[In,2,22],fov:48,look:{aperture:.12}},{petal:nv,eye:[In,2.6,26.9],at:[In,2.6,10],fov:58,look:{aperture:.04}},{petal:H1,eye:[In+.2,1.6,23.3],at:[In,.7,15.4],fov:50,look:{aperture:.2}}],Ef=[{dur:6,petal:[Qp,[9,6.6,4.6],[8.8,5.3,3.5],[8.7,4.1,2.5],Jp],eye:[tn[0].eye,[8.2,4.3,3.4],[9,3.7,3],tn[1].eye],sway:.45,track:.7},{dur:5,petal:[Jp,[8.4,2.6,2.3],[8.1,2,2.5],tv],eye:[tn[1].eye,[8.4,2.6,3.6],tn[2].eye],sway:.3,track:.6},{dur:6,petal:[tv,[8,1,3],[8,.45,3.9],[8,.2,5],ev],eye:[tn[2].eye,[7.4,1,4.6],[8.1,.7,7],tn[3].eye],sway:.2,track:.55},{dur:6,petal:[ev,[In,.2,8],[In,.22,9.6],ov],eye:[tn[3].eye,[9.4,.7,7],[8.9,.8,5.9],tn[4].eye],sway:.06,track:.5,roll:.06},{dur:9,petal:[ov,[8.4,.6,12.6],[10.6,1.2,14.2],[11.8,1.7,16.4],[12,2,18.4],[11.4,2.1,20.6],[9.8,2.1,22],nv],eye:[tn[4].eye,[9.6,1.4,10.4],[13,1.9,13.8],[14.4,2.2,18.2],[13.3,2.3,22.6],[10.6,2.5,25.8],tn[5].eye],sway:.15,track:.75,roll:-.05},{dur:8,petal:[nv,[In,1.6,21],[In+.02,1,19.9],[In+.05,.55,19.1],[H1[0],.26,H1[2]+.1],H1],eye:[tn[5].eye,[In+.15,2.1,24.6],tn[6].eye],sway:.25,track:.45}],tl={delay:.8,dur:14,eye:[In-.1,1.5,22.9],at:[In,.68,15.6]},Tn=[0];Ef.forEach(t=>Tn.push(Tn[Tn.length-1]+t.dur));var Kp=Tn[Tn.length-1],fE=210,hE=95,uE=.35,dE=.45,pE=.7,vE=.9;function Wb(t,e,o,r,n,a){r=Math.max(1e-4,r);let s=2/r,i=s*n,c=1/(1+i+.48*i*i+.235*i*i*i),f=t-e,l=a*r;f=Math.max(-l,Math.min(l,f));let v=t-f,u=(o+s*f)*n,p=(o-s*u)*c,d=v+(f+u)*c;return e-t>0==d>e&&(d=e,p=(d-e)/n),[d,p]}Vb.exports=function(){let e=0,o=0,r=0,n=-10,a=0,s=null,i=null,c=!1,f=!1,l=0,v=tn[0].eye,u=b=>{let k=0;for(let E=1;E<Tn.length;E++)Math.abs(Tn[E]-b)<Math.abs(Tn[k]-b)&&(k=E);return k},p=b=>{(a-n>uE||i===null)&&(i=u(r)),n=a,c=!1;let k=Tn[Math.max(0,i-1)],E=Tn[Math.min(Tn.length-1,i+1)];r=Math.max(k,Math.min(E,r+b))},d=b=>{let k=u(r);r=Tn[Math.max(0,Math.min(Tn.length-1,k+b))],c=!0,n=a},h=null;window.addEventListener("wheel",b=>{if(b.target.closest&&b.target.closest(".st-ui"))return;b.preventDefault();let k=b.deltaMode===1?b.deltaY*16:b.deltaMode===2?b.deltaY*window.innerHeight:b.deltaY;p(k/fE)},{passive:!1}),window.addEventListener("pointerdown",b=>{b.target.closest&&b.target.closest("button, a, .st-ui")||(h={ly:b.clientY,lx:b.clientX,moved:0,v:0,lt:performance.now()})}),window.addEventListener("pointermove",b=>{if(!h)return;let k=b.clientX-h.lx,E=b.clientY-h.ly;h.lx=b.clientX,h.ly=b.clientY;let z=Math.abs(E)>=Math.abs(k)?-E:-k;h.moved+=Math.abs(z);let P=performance.now(),R=z/hE;h.v=h.v*.6+R/Math.max(.008,(P-h.lt)/1e3)*.4,h.lt=P,h.moved>6&&p(R)}),window.addEventListener("pointerup",()=>{let b=h;h=null,b&&b.moved>=10&&performance.now()-b.lt<120&&p(Math.max(-1.6,Math.min(1.6,b.v*.22)))}),window.addEventListener("keydown",b=>{b.key==="ArrowDown"||b.key==="ArrowRight"||b.key==="PageDown"?d(1):(b.key==="ArrowUp"||b.key==="ArrowLeft"||b.key==="PageUp")&&d(-1)});function g(){d(1)}function m(b,k){let E=0;for(;E<Ef.length-1&&b>=Tn[E+1];)E++;let z=Ef[E],P=B1((b-Tn[E])/z.dur),R=jb(P),B=u(b),$=1-va(0,.9,Math.abs(b-Tn[B])),D=G1(z.petal,R),it=zf(G1(z.petal,Math.min(1,R+.02)),G1(z.petal,Math.max(0,R-.02))),St=$s(Jc([0,1,0],Math.hypot(it[0],it[2])>1e-4?it:[1,0,0])),yt=Math.sin(R*Math.PI*(2.5+z.dur*.25))*Math.sin(R*Math.PI);D=Ri(D,ar(St,yt*z.sway)),D[1]+=-Math.abs(yt)*z.sway*.25;let mt=B===0?[Math.sin(k*.9)*.01,0,Math.cos(k*.7)*.01]:[Math.sin(k*.53+B)*.07,Math.sin(k*.71+B*2)*.05,Math.cos(k*.47+B)*.07],zt=B===tn.length-1?0:$;D=Ri(D,ar(mt,zt));let It=G1(z.eye,R),re=tn[E].at,Ae=tn[E+1].at,lo=z.track*va(0,.3,P)*(1-va(.65,1,P)),ge=Cs(Cs(re,Ae,va(.25,.95,P)),D,lo),$e=Ci(tn[E].fov,tn[E+1].fov,Zp(P));if(z.zoom){let[j,lt,xt,Kt]=z.zoom,te=P<lt?va(j,lt,P):1-va(lt,xt,P);$e=Ci($e,Kt,te)}let He=Ci(tn[E].look.aperture,tn[E+1].look.aperture,Zp(P)),et=(z.roll||0)*Math.sin(P*Math.PI);return{p:D,eye:It,at:ge,fov:$e,aperture:He,roll:et,idx:E,u:P,near:B,hanging:B===0&&$>.98}}let x={prev:null,vel:[0,0,0],axis:[1,0,0],dir:null,bank:0,rock:0,spin:0,fresh:!0,go:0,fall:0};function y(b,k,E,z){let P,R,B;if(E)P=$s([Math.sin(z*.8)*.25,-1,.35+Math.sin(z*1.1)*.15]),R=$s(Jc(Jc(P,[.4,0,-1]),P)),B=Jc(P,R),x.prev=null,x.vel=[0,0,0],x.fresh=!0,x.spin=0,x.bank=0,x.dir=null,x.go=0,x.fall=0;else{if(x.prev&&k>0){let xt=zf(b,x.prev);if(Math.hypot(xt[0],xt[1],xt[2])<1.5){let Kt=Math.min(1,k*6);for(let te=0;te<3;te++)x.vel[te]+=(xt[te]/k-x.vel[te])*Kt}else x.vel=[0,0,0]}x.prev=b.slice();let D=x.vel,it=Math.hypot(D[0],D[1],D[2]),St=va(.2,1.2,it),yt=va(.35,1.6,-D[1]);x.go=St,x.fall=yt;let mt=z*.35+.65,zt=[Math.cos(mt),0,Math.sin(mt)];it>.001&&(zt=Cs(zt,ar(D,-1/it),St)),x.axis=Cs(x.axis,zt,x.fresh?1:Math.min(1,k*4)),P=$s(x.axis);let It=$s(zf(v,b)),re=Ci(.6,.25,St);R=[It[0]*re,1+It[1]*re,It[2]*re],R=$s(zf(R,ar(P,P[0]*R[0]+P[1]*R[1]+P[2]*R[2]))),B=Jc(P,R);let Ae=Math.hypot(D[0],D[2]),lo=0;if(Ae>.15&&x.dir&&k>0){let xt=[D[0]/Ae,D[2]/Ae];lo=(x.dir[0]*xt[1]-x.dir[1]*xt[0])/k,x.dir=xt}else Ae>.15&&(x.dir=[D[0]/Ae,D[2]/Ae]);x.bank+=(Math.max(-.8,Math.min(.8,lo*.3))*St-x.bank)*Math.min(1,k*3),x.rock+=k*(1.7+2.6*St),x.spin+=k*yt*6;let ge=Math.sin(x.rock)*(.42+.2*St)*(1-.5*yt)+x.bank+x.spin,$e=Math.sin(x.rock*.63+1)*.32,He=Math.cos(ge),et=Math.sin(ge),j=Ri(ar(R,He),ar(B,et)),lt=Ri(ar(B,He),ar(R,-et));He=Math.cos($e),et=Math.sin($e),P=Ri(ar(P,He),ar(j,et)),R=Ri(ar(j,He),ar(P,-et)),B=lt,b=Ri(b,ar(B,Math.sin(x.rock+1.5708)*.05*(1-.5*St))),x.fresh=!1}let $=Yp(b);return[P[0],P[1],P[2],0,R[0],R[1],R[2],0,B[0],B[1],B[2],0,$[0],$[1],$[2],1]}function _(b,k){let E=$s(Cs([b[0],b[1],b[2]],[Math.cos(.5),0,Math.sin(.5)],k)),z=Cs([b[4],b[5],b[6]],[0,1,0],k);z=$s(zf(z,ar(E,E[0]*z[0]+E[1]*z[1]+E[2]*z[2])));let P=Jc(E,z);return[E[0],E[1],E[2],0,z[0],z[1],z[2],0,P[0],P[1],P[2],0,b[12],b[13],b[14],1]}function M(b){let k=s===null?0:Math.min(.1,Math.max(0,b-s));if(s=b,a=b,!c&&!h&&a-n>pE){let it=u(r);Math.abs(Tn[it]-r)<vE&&(r=Tn[it])}if(c){let it=Wb(e,r,o,1.2,k,1.4);e=it[0],o=it[1],Math.abs(r-e)<.001&&(e=r,o=0,c=!1)}else{let it=Wb(e,r,o,dE,k,3);e=it[0],o=it[1],Math.abs(r-e)<1e-4&&Math.abs(o)<.001&&(e=r,o=0)}typeof window!="undefined"&&window.__stScroll!==void 0&&/tourdebug/.test(location.search)&&(e=r=window.__stScroll,o=0);let E=m(e,b);e>=Kp-.02&&!f&&(f=!0,l=b),e<Kp-.3&&f&&(f=!1);let z=va(.82,1,E.idx===Ef.length-1?E.u:0);if(f){let it=jb((b-l-tl.delay)/tl.dur);E.eye=Cs(E.eye,tl.eye,it),E.at=Cs(E.at,tl.at,it)}U1.setWind(1+.8*va(.3,1,E.idx===Ef.length-1?E.u:0)+(f?.2*va(0,4,b-l):0)),v=E.eye;let P=y(E.p,k,E.hanging,b);z>0&&(P=_(P,z));let R=(E.hanging?.12:.2+.55*x.go+.35*x.fall)*(1-z),B=(E.hanging?.05:Math.sin(x.rock*1.3)*.18+.12*x.go)*(1-z);U1.setGuide({vis:!0,model:P,ang:b*.08,size:.13,flex:B,flutter:R,floating:!1});let $=P.slice(12,15),D=Yp(E.eye);return{eye:D,target:Yp(E.at),fov:E.fov,roll:E.roll,fade:0,shot:f?tn.length:E.near,look:{letterbox:.55,focus:Math.max(.3,Math.hypot(D[0]-$[0],D[1]-$[1],D[2]-$[2])),aperture:E.aperture,vignette:.28,exposure:1,shafts:1},moving:Math.abs(o)>.02||Math.abs(r-e)>.01||f&&b-l<tl.delay+tl.dur+.5}}return{update:M,tap:g,get scroll(){return e},END:Kp}}});var mE=mm(),ma=qr(),gv=Xu(),Y1=ma.reflection,gE=!1,hw=(t,e,o,r,n)=>r+(t-e)*(n-r)/(o-e),xv=()=>hw(window.innerWidth/window.innerHeight,16/9,9/16,1.7,Math.PI/3);navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)&&(xv=()=>hw(window.innerWidth/window.innerHeight,16/9,9/16,1.5,Math.PI/3));var uw=()=>2*Math.atan(Math.tan(xv()*.5)*window.innerHeight/window.innerWidth),xE=Am(),Of=new xE;Of.showPanel(0);gE&&document.body.appendChild(Of.dom);var _0,al,lv,nl,fv,L0;function yE(){try{let t=document.createElement("canvas"),e=t.getContext("webgl")||t.getContext("experimental-webgl");return!!(e&&e.getExtension("OES_standard_derivatives"))}catch(t){return!1}}if(!yE())throw mE.finish(),gv.show(!0),new Error("This device cannot draw the 3D gallery; showing the list instead.");_0=Tm()({extensions:["OES_element_index_uint","OES_standard_derivatives"],optionalExtensions:["EXT_texture_filter_anisotropic","WEBGL_depth_texture"],attributes:{alpha:!1,antialias:!1},pixelRatio:ma.pixelRatio});location.hash==="#list"&&gv.show(!1);window.addEventListener("hashchange",()=>{location.hash==="#list"&&gv.show(!1)});al=v3()();var bE=Sd();lv=bE(_0,al,Y1);nl=$g()(_0,al);fv=Dg()(_0);var Yb=f5()(_0,al),Kb=w5()(_0),Zb=k5()(_0),Qb=G5()(_0),Jb=W5()(_0),tw=Z5()(_0),Is=ux()(_0),hv=sp(),dw=mh(),wE=Ll(),uv=cp(),X1=nn(),j0=t1(),dv=_x(),pw=x1(),{A:ol}=Gr();L0=rb()(al,uw);var rl=sb()(_0,ma),Ps=hb()(_0),ew=db()(_0),_E=mb()(_0,ma),ME=_b()(_0,ma),ow=ls()(_0),nw=L1()(_0),rw=us()(_0),Af=Tc()(_0),La=Ub()({fps:L0,paintings:()=>nl.interactables(),avatar:Is,onExit:()=>L0.setPaused(!1)});L0.setPaused(!0);/tourdebug/.test(location.search)&&(window.__post=rl);var Pi=[],Cf=[],Zr=[7,2,1.6];al.viewer=Zr;var kE=_0({cull:{enable:!0,face:"back"},uniforms:{view:()=>Pi,proj:()=>Cf,yScale:1,mirrorOn:()=>Y1?1:0,night:()=>X1.night,studioBake:()=>Tc().bakedSun(_0),candleT:_0.context("time"),time:_0.context("time")}}),aw=_0({cull:{enable:!0,face:"front"},uniforms:{yScale:-1}}),vw=document.createElement("style");vw.textContent=`

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
`;document.head.appendChild(vw);var Qr=document.createElement("button");Qr.className="painting-plaque";Qr.type="button";Qr.setAttribute("aria-label","Read painting");document.body.appendChild(Qr);var sr=document.createElement("div");sr.className="story-overlay";sr.innerHTML=`

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

		${dw.line("story-contact")}

		<div class="visit-row story-visit"></div>

		<p
			class="story-body"
			id="story-body"
		></p>

	</article>
`;document.body.appendChild(sr);var qs=document.createElement("div");qs.className="museum-links";qs.innerHTML=dw.icons("museum-link");qs.insertBefore(Op()("museum-link"),qs.firstChild);qs.insertBefore(pw.button("museum-link"),qs.firstChild.nextSibling);["mousedown","pointerdown","click"].forEach(t=>qs.addEventListener(t,e=>e.stopPropagation()));document.body.appendChild(qs);var SE=sr.querySelector("#story-title"),zE=sr.querySelector("#story-body"),sw=sr.querySelector("#story-meta"),EE=sr.querySelector(".story-contact"),Nf=sr.querySelector(".story-visit");Nf.addEventListener("click",t=>{t.target.closest(".visit-btn")&&qi&&uv.open(qi)});var AE=sr.querySelector(".story-close"),qi=null,br={p:0,target:0,last:0},mw={title:hv.title,description:hv.text,isAbout:!0},Za=null;function yv(t){t&&(qi=t,SE.textContent=t.title||"",zE.textContent=t.description||"",sw.textContent=t.isAbout?"":wE(t),sw.hidden=!!t.isAbout,EE.hidden=!t.isAbout,Nf.innerHTML=t.isAbout?"":uv.button(t),Nf.hidden=!Nf.innerHTML,Nf.hidden||uv.warm(t),sr.classList.toggle("about-mode",!!t.isAbout),sr.classList.add("open"),br.target=t.isAbout?1:0,Za=t,Qr.classList.remove("visible"),L0.setPaused(!0))}function bv(){sr.classList.remove("open"),br.target=0,qi=null,Za=null,L0.setPaused(!1)}function gw(t){t&&(t.preventDefault(),t.stopPropagation()),Za&&yv(Za)}Qr.addEventListener("pointerup",gw,!0);Qr.addEventListener("touchend",gw,{passive:!1,capture:!0});Qr.addEventListener("click",t=>{t&&(t.preventDefault(),t.stopPropagation()),qi===null&&Za&&yv(Za)},!0);AE.addEventListener("click",bv);sr.addEventListener("click",t=>{t.target===sr&&bv()});window.addEventListener("keydown",t=>{t.code==="Escape"&&sr.classList.contains("open")&&bv()});function iw(t,e){let o=e[0],r=e[1],n=e[2];return[t[0]*o+t[4]*r+t[8]*n+t[12],t[1]*o+t[5]*r+t[9]*n+t[13],t[2]*o+t[6]*r+t[10]*n+t[14],t[3]*o+t[7]*r+t[11]*n+t[15]]}function TE(){if(qi)return;if(La.active){Za=null,Qr.classList.remove("visible");return}let t=nl.interactables(),e=L0.forward[0],o=L0.forward[2],r=Math.hypot(e,o)||1,n=null,a=1/0;for(let s of t){let i=s.paintingPosition,c=0,f=0;s.side==="left"?c=1:s.side==="right"?c=-1:s.side==="corridor"?f=1:f=-1;let l=i[0]-L0.pos[0],v=i[2]-L0.pos[2],u=-(l*c+v*f),p=Math.abs(l*f-v*c),d=-(e*c+o*f)/r,h=s.side==="end"?11:8,g=(s.width||2)/2;d>.9&&u>.5&&u<h&&p<g+.8&&u<a&&(n=s,a=u)}if(!n){let s=L0.pos[0],i=L0.pos[2];e/r>.85&&s<13.6&&i>ol.z0-.5&&i<ol.z1+.5&&(n=Object.assign({},mw,{plaqueTitle:hv.name}))}n?(Za=n,Qr.textContent=n.isAbout?"ABOUT  \xB7  "+n.plaqueTitle:"READ  \xB7  "+n.title,Qr.classList.add("visible")):(Za=null,Qr.classList.remove("visible"))}var wv=kc();function LE(){let t=Is.state;if(!t||!t.glowPos)return null;let e=iw(L0.view(),[t.glowPos[0],t.glowPos[1]-.08,t.glowPos[2],1]),o=iw(L0.proj(),e);return o[3]<=.05?null:[(o[0]/o[3]*.5+.5)*window.innerWidth,(.5-o[1]/o[3]*.5)*window.innerHeight,o[3]]}var pv=null;window.addEventListener("pointerdown",t=>{pv={x:t.clientX,y:t.clientY,t:performance.now()}},!0);window.addEventListener("pointerup",t=>{let e=pv;if(pv=null,!e||qi||La.active||!t.target||!/^(CANVAS|BODY)$/.test(t.target.tagName)||Math.hypot(t.clientX-e.x,t.clientY-e.y)>12||performance.now()-e.t>600)return;let o=LE();if(!o)return;let r=!!document.pointerLockElement,n=r?window.innerWidth/2:t.clientX,a=r?window.innerHeight/2:t.clientY,s=Math.max(t.pointerType==="touch"?60:40,260/o[2]);Math.hypot(n-o[0],a-o[1])<s&&(t.preventDefault(),t.stopPropagation(),yv(mw))},!0);function NE(t){let e=Math.min(Math.max(t-br.last,0),.1);br.last=t;let o=e/1.6;if(br.p=br.target>br.p?Math.min(1,br.p+o):Math.max(0,br.p-o),br.p<=0)return;let r=br.p<.5?2*br.p*br.p:1-Math.pow(-2*br.p+2,2)/2,n=window.innerHeight>window.innerWidth,a=Is.state,s=a&&a.hipsPos?a.hipsPos[0]:ol.cx-1.2,i=a&&a.hipsPos?a.hipsPos[2]:ol.zc,c=n?[s-2.3,2,i-.1]:[s-1.55,1.55,i+.3],f=n?[s+.1,.2,i-.1]:[s+.1,.7,i+.6],l=L0.pos,v=L0.forward,u=[l[0],l[1],l[2]],p=[l[0]+v[0],l[1]+v[1],l[2]+v[2]],d=(x,y)=>x.map((_,M)=>_+(y[M]-_)*r),h=[ol.cx-6.2,1.7,ol.zc],g=1-r,m=u.map((x,y)=>g*g*x+2*g*r*h[y]+r*r*c[y]);wv.lookAt(L0.view(),m,d(p,f),[0,1,0])}var xw=/[?&]studio\b/.test(location.search);if(xw){let t=document.createElement("style");t.textContent=".tour, #museum-mobile-controls, .painting-plaque { display: none !important; }",document.head.appendChild(t);let e=document.createElement("button");e.type="button",e.className="st-ui",e.setAttribute("aria-label","Day or night"),e.textContent="\u263E",t.textContent+=".st-ui { position: fixed; top: 18px; right: 18px; z-index: 30; width: 42px; height: 42px; border-radius: 50%; border: 1px solid rgba(244,236,223,0.4); background: rgba(12,10,8,0.3); color: #f4ecdf; font-size: 20px; cursor: pointer; backdrop-filter: blur(3px); -webkit-backdrop-filter: blur(3px); }",document.body.appendChild(e),e.addEventListener("pointerdown",r=>r.stopPropagation()),e.addEventListener("click",r=>{r.stopPropagation(),nn().toggle(),setTimeout(()=>{e.textContent=nn().night>.5?"\u2600":"\u263E"},50)});let o=null;window.addEventListener("pointerdown",r=>{o={x:r.clientX,y:r.clientY,t:performance.now()}}),window.addEventListener("pointerup",r=>{let n=o;o=null,!(!n||Math.hypot(r.clientX-n.x,r.clientY-n.y)>10||performance.now()-n.t>500)&&(r.target.closest&&r.target.closest("button")||vv().tap())}),window.addEventListener("keydown",r=>{r.key==="n"?nn().toggle():r.key===" "&&vv().tap()})}var rv=null;function vv(){return rv||(rv=Xb()()),rv}var $i={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},Ii=null,Rf=!1,j1=!1;function OE(t,e,o,r){let n=[o[0]-e[0],o[1]-e[1],o[2]-e[2]],a=Math.hypot(n[0],n[1],n[2])||1,s=[-n[2]/a,0,n[0]/a],i=Math.hypot(s[0],s[2])||1;s=[s[0]/i,0,s[2]/i];let c=Math.cos(r),f=Math.sin(r);return wv.lookAt(t,e,o,[s[0]*f,c,s[2]*f])}function RE(t){let e=window.innerWidth/window.innerHeight,o=rl.shot,r=La.active?La.update(t):null,n=r?null:La.handover(t),a=null,s=$i;if(r){a=r.camera,s=r.look,Ii=r.leaf;let i=window.__walkOverride&&/tourdebug/.test(location.search)?window.__walkOverride:r.walker||null;Is.setWalk(i),Rf=!!i,Ps.setOpen(r.door||0)}else Ii=La.restingLeaf(),Is.setWalk(null),Rf=!1,Ps.setOpen(La.restingDoor());if(n){let i=L0.pos,c=L0.forward,f=La.cam([i[0],i[1],i[2]],[i[0]+c[0],i[1]+c[1],i[2]+c[2]],uw()*180/Math.PI,0);a=La.mix(n.from,f,n.k),s={};for(let l in $i)s[l]=Array.isArray($i[l])?$i[l]:n.fromLook[l]+($i[l]-n.fromLook[l])*n.k}if(a&&r&&(a=dv.apply(a,t)),xw&&!(/tourdebug/.test(location.search)&&window.__camOverride)){let i=vv().update(t);mv=i.moving!==!1,a=i,s=Object.assign({},$i,i.look)}if(a)OE(Pi,a.eye,a.target,a.roll||0),wv.perspective(Cf,a.fov*Math.PI/180,e,.1,700),Zr[0]=a.eye[0],Zr[1]=a.eye[1],Zr[2]=a.eye[2];else{let i=L0.view(),c=L0.proj();for(let u=0;u<16;u++)Pi[u]=i[u],Cf[u]=c[u];let f=i[12],l=i[13],v=i[14];Zr[0]=-(i[0]*f+i[1]*l+i[2]*v),Zr[1]=-(i[4]*f+i[5]*l+i[6]*v),Zr[2]=-(i[8]*f+i[9]*l+i[10]*v)}for(let i in $i)o[i]=s[i];r&&dv.pull(o,t)}var Rr={wake:[[0,-50,0,0],[0,-50,0,0],[0,-50,0,0],[0,-50,0,0]],wakeDir:[0,0,1],gust:[0,0],focus:6,aperture:0},av=[9,9,9,9],cw=[0,0,0,0],Tf=0,sv=0,el=null,lw=0,fw=0,Lf=0;function CE(t){let e=Math.min(.1,Math.max(0,t-lw));lw=t,Rr.focus=rl.shot.focus,Rr.aperture=ma.post>=2?rl.shot.aperture:0;for(let s=0;s<4;s++)av[s]+=e,Rr.wake[s][3]=cw[s]*Math.exp(-av[s]/1.1);let o=Ii&&Ii.visible?Ii.model:null;if(o&&e>0){let s=[o[12],o[13],o[14]];if(el){let i=[s[0]-el[0],s[1]-el[1],s[2]-el[2]],c=Math.hypot(i[0],i[1],i[2]),f=c/e;if(c<1.5&&f>.12){let l=Math.min(1,e*8);for(let u=0;u<3;u++)Rr.wakeDir[u]+=(i[u]/c-Rr.wakeDir[u])*l;let v=Math.hypot(Rr.wakeDir[0],Rr.wakeDir[1],Rr.wakeDir[2])||1;for(let u=0;u<3;u++)Rr.wakeDir[u]/=v;if(sv+=e,sv>.14){sv=0;let u=Rr.wake[Tf];u[0]=s[0],u[1]=s[1],u[2]=s[2],cw[Tf]=Math.min(1,(f-.12)/1.6)*.5,av[Tf]=0,Tf=(Tf+1)%4}}}el=s}else o||(el=null);let r=Ps.openNow?Ps.openNow():0,n=e>0?(r-fw)/e:0;fw=r;let a=Math.max(-1,Math.min(1,n*1.2));Lf+=(a-Lf)*Math.min(1,e*(Math.abs(a)>Math.abs(Lf)?6:.7)),Rr.gust[0]+=Lf*5.5*e,Rr.gust[1]=Math.abs(Lf)}var iv=0,W1=!1,cv=0,V1=0,mv=!0,$E=/[?&]nocap\b/.test(location.search);_0.frame(function({time:t}){if(document.body.classList.contains("visiting")){iv=0;return}if(cv++,j0.zone==="studio"&&!$E&&V1>0&&t>V1){let n=mv||!X1.settled?.03333333333333333:.041666666666666664;if(t-V1<n-.006)return}V1=t;let e=Math.max(1,cv);cv=0,Of.begin(),X1.tick(t);let o=La.active&&dv.resting&&X1.settled&&(ma.isPhone||ma.scale<1||ma.level>0);if(o){if(W1=!W1,W1){Of.end();return}}else W1=!1;let r=t-iv;iv=t,ma.frame(o?r/2:r/e),Y1=ma.reflection,L0.tick({time:t}),NE(t),nl.update(L0.pos,L0.fmouse[1],xv()),TE(),RE(t),j0.update(Pi,Cf,Zr),pw.listen(Zr),j1=!Rf&&j0.room("stair")&&(!j0.room("court")||Zr[0]<.5||Zr[2]>30),Is.setPiano(j1),CE(t),rl.capture(arguments[0],{view:Pi,proj:Cf,eye:Zr},()=>{kE(()=>{Y1&&j0.floor&&(j0.zone==="studio"&&Af.reflect?Af.reflect(()=>aw(()=>Af({reflected:!0})),mv?2:4):aw(()=>{j0.room("studio",!0)&&Af({reflected:!0}),j0.zone!=="studio"&&(lv(),Yb({reflected:!0}),ow(),j0.room("stair",!0)&&(rw({reflected:!0}),nw({reflected:!0,view:Pi})),j0.room("court",!0)&&tw(),(j1||j0.room("court",!0)||Rf)&&Is(),fv(nl.batch()),j0.room("street",!0)&&Kb(),j0.room("garden",!0)&&Qb(),j0.room("florence",!0)&&Jb(),ew(Ii),Ps(),Zb(),Ps.glass())})),j0.room("studio")&&Af(),j0.zone!=="studio"&&(lv(),Yb(),ow(),j0.room("stair")&&(rw(),nw({view:Pi})),j0.room("court")&&tw(),(j1||j0.room("court")||Rf)&&Is(),fv(nl.batch()),j0.room("street")&&Kb(),j0.room("garden")&&(Qb(),ME()),j0.room("florence")&&Jb(),ew(Ii),Ps(),_E(Rr),Zb(),Ps.glass())})}),rl.present(),Of.end()});})();
