"use strict";(()=>{var mt=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var am=mt(($k,rm)=>{"use strict";var Ti=document.getElementById("loader"),Ai=Ti&&Ti.querySelector(".loader-name"),jc=0,Tf=0,Lf=!1,u4=performance.now(),Li=.06,ki=0,V1=0,Jv=!1,d4=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;function p4(t){if(!Ai)return;let e=Ai.offsetWidth||1,n=(e*(1.14-1.28*t)-e).toFixed(1)+"px 0";Ai.style.webkitMaskPosition=n,Ai.style.maskPosition=n}function om(t){let e=Math.min(.05,V1?(t-V1)/1e3:.016);V1=t;let o=Lf?.75:.22+(Li-ki)*1.2;if(ki=Math.min(Li,ki+Math.max(0,o)*e),d4&&(ki=Li),p4(ki),Lf&&ki>=.999){Jv||(Jv=!0,setTimeout(nm,650));return}requestAnimationFrame(om)}Ai&&requestAnimationFrame(om);function tm(){let t=jc?Tf/Math.max(jc,24):0;Li=Math.max(Li,Math.min(.9,.06+t*.84))}function nm(){Ti&&(Ti.classList.add("done"),setTimeout(()=>Ti.remove(),1400))}function X1(){Lf||(Lf=!0,window.__galleryReady=!0,Ti&&(Li=1,Ai||nm()))}var em=null;function v4(){clearTimeout(em),Tf>=jc&&performance.now()-u4>600&&(em=setTimeout(()=>{Tf>=jc&&X1()},450))}setTimeout(X1,2e4);var m4=t=>/(^|\/)(res|images)\//.test(t),Af=window.fetch.bind(window);async function g4(t,e){let o=await Af(t+".gz",e);if(!o.ok)throw new Error("no .gz");let n=new Uint8Array(await o.arrayBuffer());if(!(n[0]===31&&n[1]===139))return new Response(n);let r=new Blob([n]).stream().pipeThrough(new DecompressionStream("gzip")),a=await new Response(r).arrayBuffer();return new Response(a,{status:200,headers:{"Content-Type":"application/octet-stream"}})}window.fetch=function(t,e){let o=typeof t=="string"?t:t&&t.url||"";if(!m4(o))return Af(t,e);jc++,tm();let n=a=>(Tf++,tm(),v4(),a),r;return/\.bin$/.test(o)&&typeof DecompressionStream!="undefined"?r=g4(o,e).catch(()=>Af(t,e)):r=Af(t,e),r.then(n,a=>{throw n(),a})};rm.exports={finish:X1}});var ba=mt((Fk,lm)=>{"use strict";var sm=typeof navigator!="undefined"&&navigator.userAgent||"",x4=typeof window!="undefined"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches&&!window.matchMedia("(any-pointer: fine)").matches,d0=/Android|iPhone|iPad|iPod|Mobile|Silk|Kindle|webOS|BlackBerry|Opera Mini|IEMobile/i.test(sm)||/Macintosh/.test(sm)&&typeof navigator!="undefined"&&navigator.maxTouchPoints>1||x4,im=typeof window!="undefined"&&window.devicePixelRatio||1,_o={isPhone:d0,pixelRatio:d0?Math.min(im,1.5):Math.min(im,2),reflection:!d0,gardenDetail:d0?0:1,leafShare:d0?.65:1,motion:!d0,post:d0?1:2,level:d0?1:0};_o.scale=1;var b4=d0?.55:.6,Wc=0,zf=0,Vc=0,Xc=0,zi=1,Yc=0,Rf=48,Ri=null,Y1=0;function y4(t){Ri={fps:t,scale:_o.scale},_o.scale>.86?_o.scale=.85:_o.reflection?_o.stepDown():_o.scale>.71?_o.scale=.7:_o.stepDown()||(_o.scale=Math.max(b4,_o.scale-.1))}var cm=!0;try{/[?&]noadapt\b/.test(location.search)&&(cm=!1)}catch(t){}_o.frame=t=>{if(!cm)return;if(!(t>0)||t>1){Wc=0,zf=0;return}if(Wc+=t,zf++,Wc<.75)return;let e=zf/Wc;if(Wc=0,zf=0,Yc>0&&(Yc-=.75,Yc<=0&&(zi=1)),Ri){if(e<Ri.fps*1.08&&Ri.scale>_o.scale){if(++Y1>=2){_o.scale=1,zi=1,Yc=0,Rf=Math.min(Rf,e*.85),Y1=0,Vc=0,Ri=null;return}}else Y1=0;Ri=null}if(e<Rf){if(Xc=0,++Vc>=2){if(Vc=0,_o.scale>.61&&_o.climbed){zi=_o.scale-.05,Yc=40,_o.scale=zi,_o.climbed=!1;return}y4(e)}}else e>Math.max(Rf*1.15,55)?(Vc=0,++Xc>=6&&_o.scale<zi-.001?(_o.scale=Math.min(zi,_o.scale+.05),_o.climbed=!0,Xc=0):Xc>=6&&(_o.climbed=!1)):(Vc=0,Xc=0)};_o.stepDown=()=>{if(_o.reflection)_o.reflection=!1;else if(_o.gardenDetail>0||_o.motion)_o.gardenDetail=0,_o.motion=!1,_o.leafShare=Math.min(_o.leafShare,.65);else if(_o.post>0)_o.post--;else return!1;return _o.level++,!0};lm.exports=_o});var K1=mt((Dk,fm)=>{"use strict";fm.exports=[{file:"IMG_20250717_102753.jpg",slug:"love-me-like-i-am-already-dead",title:"Love me like I am Already Dead",medium:"Oil on canvas",size:[61,91],description:`We live in a world soaked in hypocrisy. We\u2019re told not to \u201Cspeak ill of the dead,\u201D yet we spend lifetimes speaking ill of the living. We judge, ignore, neglect\u2014and then pretend to mourn with grace when it\u2019s too late. People say beautiful things at funerals, but only after burying a lifetime of cruelty or silence.

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
but the loneliness of having no one willing to admit it happened.`}]});var Nf=mt((qk,dm)=>{"use strict";var Lr={instagram:"muzammil_qureshi",email:"muzammilqureshi100@gmail.com"},hm='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/></svg>',um='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M3.5 7l8.5 6 8.5-6"/></svg>';Lr.instagramUrl="https://instagram.com/"+Lr.instagram;Lr.mailUrl="mailto:"+Lr.email+"?subject="+encodeURIComponent("Your paintings");Lr.icons=t=>`
	<a class="${t}" href="${Lr.instagramUrl}" target="_blank" rel="noopener" aria-label="Instagram: @${Lr.instagram}" title="Instagram">${hm}</a>
	<a class="${t}" href="${Lr.mailUrl}" aria-label="Email ${Lr.email}" title="Email">${um}</a>`;Lr.line=t=>`
	<span class="${t}">
		<a href="${Lr.instagramUrl}" target="_blank" rel="noopener">${hm}<span>@${Lr.instagram}</span></a>
		<a href="${Lr.mailUrl}">${um}<span>${Lr.email}</span></a>
	</span>`;dm.exports=Lr});var Kc=mt((Gk,pm)=>{"use strict";pm.exports=t=>{if(!t)return"";let e=[];return t.medium&&e.push(t.medium),t.size&&t.size.length===2&&e.push(t.size[0]+" \xD7 "+t.size[1]+" cm"),e.join("  \xB7  ")}});var Q1=mt((Hk,gm)=>{"use strict";var w4=K1(),_4=Nf(),vm=Kc(),M4=ba(),I0=t=>String(t).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),E4=`
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
`,zr=null;function S4(t){if(zr){zr.hidden=!1,requestAnimationFrame(()=>zr.classList.add("on"));return}let e=document.createElement("style");e.textContent=E4,document.head.appendChild(e);let o=!M4.isPhone;zr=document.createElement("div"),zr.className="plist",zr.setAttribute("role","region"),zr.setAttribute("aria-label","All paintings"),zr.innerHTML=`
		${t?"":'<button type="button" class="plist-close">Back to the gallery</button>'}
		<header class="plist-head">
			<h1>Muzammil</h1>
			<p class="plist-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</p>
			${_4.line("plist-contact")}
		</header>
		${t?'<p class="plist-note">This device could not open the 3D gallery, so here are the paintings on their own.</p>':""}
		<main class="plist-grid">
			${w4.map(r=>`
			<article class="plist-item" id="${I0(r.slug)}">
				<img loading="lazy" decoding="async" alt="${I0(r.title)}, ${I0(vm(r))}"
					src="images/web/${I0(r.slug)}${o?"":"-1024"}.webp"
					onerror="this.onerror=null;this.src='images/${I0(r.file)}'">
				<p class="plist-meta">${I0(vm(r))}</p>
				<h2>${I0(r.title)}</h2>
				<details><summary>Read its story</summary>
					${String(r.description).split(/\n\s*\n/).map(a=>`<p>${I0(a.trim())}</p>`).join("")}
				</details>
			</article>`).join("")}
		</main>`,["mousedown","pointerdown","click","wheel","touchstart","touchmove","keydown"].forEach(r=>zr.addEventListener(r,a=>a.stopPropagation(),{passive:!0}));let n=zr.querySelector(".plist-close");n&&n.addEventListener("click",mm),document.body.appendChild(zr),requestAnimationFrame(()=>zr.classList.add("on"))}function mm(){zr&&(zr.classList.remove("on"),setTimeout(()=>{zr.hidden=!0},500),location.hash==="#list"&&history.replaceState(null,"",location.pathname+location.search))}gm.exports={show:S4,hide:mm}});var xm=mt((Z1,J1)=>{(function(t,e){typeof Z1=="object"&&typeof J1!="undefined"?J1.exports=e():typeof define=="function"&&define.amd?define(e):t.Stats=e()})(Z1,function(){var t=function(){function e(p){return r.appendChild(p.dom),p}function o(p){for(var d=0;d<r.children.length;d++)r.children[d].style.display=d===p?"block":"none";n=p}var n=0,r=document.createElement("div");r.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",r.addEventListener("click",function(p){p.preventDefault(),o(++n%r.children.length)},!1);var a=(performance||Date).now(),s=a,i=0,c=e(new t.Panel("FPS","#0ff","#002")),f=e(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var l=e(new t.Panel("MB","#f08","#201"));return o(0),{REVISION:16,dom:r,addPanel:e,showPanel:o,begin:function(){a=(performance||Date).now()},end:function(){i++;var p=(performance||Date).now();if(f.update(p-a,200),p>s+1e3&&(c.update(1e3*i/(p-s),100),s=p,i=0,l)){var d=performance.memory;l.update(d.usedJSHeapSize/1048576,d.jsHeapSizeLimit/1048576)}return p},update:function(){a=this.end()},domElement:r,setMode:o}};return t.Panel=function(e,o,n){var r=1/0,a=0,s=Math.round,i=s(window.devicePixelRatio||1),c=80*i,f=48*i,l=3*i,p=2*i,d=3*i,v=15*i,u=74*i,h=30*i,m=document.createElement("canvas");m.width=c,m.height=f,m.style.cssText="width:80px;height:48px";var g=m.getContext("2d");return g.font="bold "+9*i+"px Helvetica,Arial,sans-serif",g.textBaseline="top",g.fillStyle=n,g.fillRect(0,0,c,f),g.fillStyle=o,g.fillText(e,l,p),g.fillRect(d,v,u,h),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(d,v,u,h),{dom:m,update:function(b,y){r=Math.min(r,b),a=Math.max(a,b),g.fillStyle=n,g.globalAlpha=1,g.fillRect(0,0,c,v),g.fillStyle=o,g.fillText(s(b)+" "+e+" ("+s(r)+"-"+s(a)+")",l,p),g.drawImage(m,d+i,v,u-i,h,d,v,u-i,h),g.fillRect(d+u-i,v,i,h),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(d+u-i,v,i,s((1-b/y)*h))}}},t})});var bm=mt((tu,eu)=>{(function(t,e){typeof tu=="object"&&typeof eu!="undefined"?eu.exports=e():typeof define=="function"&&define.amd?define(e):t.createREGL=e()})(tu,function(){"use strict";var t=function(x){return x instanceof Uint8Array||x instanceof Uint16Array||x instanceof Uint32Array||x instanceof Int8Array||x instanceof Int16Array||x instanceof Int32Array||x instanceof Float32Array||x instanceof Float64Array||x instanceof Uint8ClampedArray},e=function(x,k){for(var C=Object.keys(k),et=0;et<C.length;++et)x[C[et]]=k[C[et]];return x},o=`
`;function n(x){return typeof atob!="undefined"?atob(x):"base64:"+x}function r(x){var k=new Error("(regl) "+x);throw console.error(k),k}function a(x,k){x||r(k)}function s(x){return x?": "+x:""}function i(x,k,C){x in k||r("unknown parameter ("+x+")"+s(C)+". possible values: "+Object.keys(k).join())}function c(x,k){t(x)||r("invalid parameter type"+s(k)+". must be a typed array")}function f(x,k){switch(k){case"number":return typeof x=="number";case"object":return typeof x=="object";case"string":return typeof x=="string";case"boolean":return typeof x=="boolean";case"function":return typeof x=="function";case"undefined":return typeof x=="undefined";case"symbol":return typeof x=="symbol"}}function l(x,k,C){f(x,k)||r("invalid parameter type"+s(C)+". expected "+k+", got "+typeof x)}function p(x,k){x>=0&&(x|0)===x||r("invalid parameter type, ("+x+")"+s(k)+". must be a nonnegative integer")}function d(x,k,C){k.indexOf(x)<0&&r("invalid value"+s(C)+". must be one of: "+k)}var v=["gl","canvas","container","attributes","pixelRatio","extensions","optionalExtensions","profile","onDone"];function u(x){Object.keys(x).forEach(function(k){v.indexOf(k)<0&&r('invalid regl constructor argument "'+k+'". must be one of '+v)})}function h(x,k){for(x=x+"";x.length<k;)x=" "+x;return x}function m(){this.name="unknown",this.lines=[],this.index={},this.hasErrors=!1}function g(x,k){this.number=x,this.line=k,this.errors=[]}function b(x,k,C){this.file=x,this.line=k,this.message=C}function y(){var x=new Error,k=(x.stack||x).toString(),C=/compileProcedure.*\n\s*at.*\((.*)\)/.exec(k);if(C)return C[1];var et=/compileProcedure.*\n\s*at\s+(.*)(\n|$)/.exec(k);return et?et[1]:"unknown"}function w(){var x=new Error,k=(x.stack||x).toString(),C=/at REGLCommand.*\n\s+at.*\((.*)\)/.exec(k);if(C)return C[1];var et=/at REGLCommand.*\n\s+at\s+(.*)\n/.exec(k);return et?et[1]:"unknown"}function _(x,k){var C=x.split(`
`),et=1,lt=0,J={unknown:new m,0:new m};J.unknown.name=J[0].name=k||y(),J.unknown.lines.push(new g(0,""));for(var nt=0;nt<C.length;++nt){var yt=C[nt],Mt=/^\s*#\s*(\w+)\s+(.+)\s*$/.exec(yt);if(Mt)switch(Mt[1]){case"line":var At=/(\d+)(\s+\d+)?/.exec(Mt[2]);At&&(et=At[1]|0,At[2]&&(lt=At[2]|0,lt in J||(J[lt]=new m)));break;case"define":var Et=/SHADER_NAME(_B64)?\s+(.*)$/.exec(Mt[2]);Et&&(J[lt].name=Et[1]?n(Et[2]):Et[2]);break}J[lt].lines.push(new g(et++,yt))}return Object.keys(J).forEach(function(Rt){var qt=J[Rt];qt.lines.forEach(function(wt){qt.index[wt.number]=wt})}),J}function M(x){var k=[];return x.split(`
`).forEach(function(C){if(!(C.length<5)){var et=/^ERROR:\s+(\d+):(\d+):\s*(.*)$/.exec(C);et?k.push(new b(et[1]|0,et[2]|0,et[3].trim())):C.length>0&&k.push(new b("unknown",0,C))}}),k}function T(x,k){k.forEach(function(C){var et=x[C.file];if(et){var lt=et.index[C.line];if(lt){lt.errors.push(C),et.hasErrors=!0;return}}x.unknown.hasErrors=!0,x.unknown.lines[0].errors.push(C)})}function I(x,k,C,et,lt){if(!x.getShaderParameter(k,x.COMPILE_STATUS)){var J=x.getShaderInfoLog(k),nt=et===x.FRAGMENT_SHADER?"fragment":"vertex";pt(C,"string",nt+" shader source must be a string",lt);var yt=_(C,lt),Mt=M(J);T(yt,Mt),Object.keys(yt).forEach(function(At){var Et=yt[At];if(!Et.hasErrors)return;var Rt=[""],qt=[""];function wt(Ct,W){Rt.push(Ct),qt.push(W||"")}wt("file number "+At+": "+Et.name+`
`,"color:red;text-decoration:underline;font-weight:bold"),Et.lines.forEach(function(Ct){if(Ct.errors.length>0){wt(h(Ct.number,4)+"|  ","background-color:yellow; font-weight:bold"),wt(Ct.line+o,"color:red; background-color:yellow; font-weight:bold");var W=0;Ct.errors.forEach(function(rt){var kt=rt.message,jt=/^\s*'(.*)'\s*:\s*(.*)$/.exec(kt);if(jt){var dt=jt[1];switch(kt=jt[2],dt){case"assign":dt="=";break}W=Math.max(Ct.line.indexOf(dt,W),0)}else W=0;wt(h("| ",6)),wt(h("^^^",W+3)+o,"font-weight:bold"),wt(h("| ",6)),wt(kt+o,"font-weight:bold")}),wt(h("| ",6)+o)}else wt(h(Ct.number,4)+"|  "),wt(Ct.line+o,"color:red")}),typeof document!="undefined"&&!window.chrome?(qt[0]=Rt.join("%c"),console.log.apply(console,qt)):console.log(Rt.join(""))}),a.raise("Error compiling "+nt+" shader, "+yt[0].name)}}function N(x,k,C,et,lt){if(!x.getProgramParameter(k,x.LINK_STATUS)){var J=x.getProgramInfoLog(k),nt=_(C,lt),yt=_(et,lt),Mt='Error linking program with vertex shader, "'+yt[0].name+'", and fragment shader "'+nt[0].name+'"';typeof document!="undefined"?console.log("%c"+Mt+o+"%c"+J,"color:red;text-decoration:underline;font-weight:bold","color:red"):console.log(Mt+o+J),a.raise(Mt)}}function B(x){x._commandRef=y()}function D(x,k,C,et){B(x);function lt(Mt){return Mt?et.id(Mt):0}x._fragId=lt(x.static.frag),x._vertId=lt(x.static.vert);function J(Mt,At){Object.keys(At).forEach(function(Et){Mt[et.id(Et)]=!0})}var nt=x._uniformSet={};J(nt,k.static),J(nt,k.dynamic);var yt=x._attributeSet={};J(yt,C.static),J(yt,C.dynamic),x._hasCount="count"in x.static||"count"in x.dynamic||"elements"in x.static||"elements"in x.dynamic}function K(x,k){var C=w();r(x+" in command "+(k||y())+(C==="unknown"?"":" called from "+C))}function q(x,k,C){x||K(k,C||y())}function X(x,k,C,et){x in k||K("unknown parameter ("+x+")"+s(C)+". possible values: "+Object.keys(k).join(),et||y())}function pt(x,k,C,et){f(x,k)||K("invalid parameter type"+s(C)+". expected "+k+", got "+typeof x,et||y())}function Ft(x){x()}function Lt(x,k,C){x.texture?d(x.texture._texture.internalformat,k,"unsupported texture format for attachment"):d(x.renderbuffer._renderbuffer.format,C,"unsupported renderbuffer format for attachment")}var gt=33071,ct=9728,Wt=9984,ze=9985,Se=9986,Xe=9987,_e=5120,fo=5121,Eo=5122,Ko=5123,Zt=5124,ge=5125,Ce=5126,no=32819,wo=32820,Oe=33635,xe=34042,bt=36193,ae={};ae[_e]=ae[fo]=1,ae[Eo]=ae[Ko]=ae[bt]=ae[Oe]=ae[no]=ae[wo]=2,ae[Zt]=ae[ge]=ae[Ce]=ae[xe]=4;function Pe(x,k){return x===wo||x===no||x===Oe?2:x===xe?4:ae[x]*k}function de(x){return!(x&x-1)&&!!x}function Kt(x,k,C){var et,lt=k.width,J=k.height,nt=k.channels;a(lt>0&&lt<=C.maxTextureSize&&J>0&&J<=C.maxTextureSize,"invalid texture shape"),(x.wrapS!==gt||x.wrapT!==gt)&&a(de(lt)&&de(J),"incompatible wrap mode for texture, both width and height must be power of 2"),k.mipmask===1?lt!==1&&J!==1&&a(x.minFilter!==Wt&&x.minFilter!==Se&&x.minFilter!==ze&&x.minFilter!==Xe,"min filter requires mipmap"):(a(de(lt)&&de(J),"texture must be a square power of 2 to support mipmapping"),a(k.mipmask===(lt<<1)-1,"missing or incomplete mipmap data")),k.type===Ce&&(C.extensions.indexOf("oes_texture_float_linear")<0&&a(x.minFilter===ct&&x.magFilter===ct,"filter not supported, must enable oes_texture_float_linear"),a(!x.genMipmaps,"mipmap generation not supported with float textures"));var yt=k.images;for(et=0;et<16;++et)if(yt[et]){var Mt=lt>>et,At=J>>et;a(k.mipmask&1<<et,"missing mipmap data");var Et=yt[et];if(a(Et.width===Mt&&Et.height===At,"invalid shape for mip images"),a(Et.format===k.format&&Et.internalformat===k.internalformat&&Et.type===k.type,"incompatible type for mip image"),!Et.compressed)if(Et.data){var Rt=Math.ceil(Pe(Et.type,nt)*Mt/Et.unpackAlignment)*Et.unpackAlignment;a(Et.data.byteLength===Rt*At,"invalid data for image, buffer size is inconsistent with image format")}else Et.element||Et.copy}else x.genMipmaps||a((k.mipmask&1<<et)===0,"extra mipmap data");k.compressed&&a(!x.genMipmaps,"mipmap generation for compressed images not supported")}function So(x,k,C,et){var lt=x.width,J=x.height,nt=x.channels;a(lt>0&&lt<=et.maxTextureSize&&J>0&&J<=et.maxTextureSize,"invalid texture shape"),a(lt===J,"cube map must be square"),a(k.wrapS===gt&&k.wrapT===gt,"wrap mode not supported by cube map");for(var yt=0;yt<C.length;++yt){var Mt=C[yt];a(Mt.width===lt&&Mt.height===J,"inconsistent cube map face shape"),k.genMipmaps&&(a(!Mt.compressed,"can not generate mipmap for compressed textures"),a(Mt.mipmask===1,"can not specify mipmaps and generate mipmaps"));for(var At=Mt.images,Et=0;Et<16;++Et){var Rt=At[Et];if(Rt){var qt=lt>>Et,wt=J>>Et;a(Mt.mipmask&1<<Et,"missing mipmap data"),a(Rt.width===qt&&Rt.height===wt,"invalid shape for mip images"),a(Rt.format===x.format&&Rt.internalformat===x.internalformat&&Rt.type===x.type,"incompatible type for mip image"),Rt.compressed||(Rt.data?a(Rt.data.byteLength===qt*wt*Math.max(Pe(Rt.type,nt),Rt.unpackAlignment),"invalid data for image, buffer size is inconsistent with image format"):Rt.element||Rt.copy)}}}}var S=e(a,{optional:Ft,raise:r,commandRaise:K,command:q,parameter:i,commandParameter:X,constructor:u,type:l,commandType:pt,isTypedArray:c,nni:p,oneOf:d,shaderError:I,linkError:N,callSite:w,saveCommandRef:B,saveDrawInfo:D,framebufferFormat:Lt,guessCommand:y,texture2D:Kt,textureCube:So}),so=0,Qe=0,ko=5,Oo=6;function yn(x,k){this.id=so++,this.type=x,this.data=k}function Sr(x){return x.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}function Yn(x){if(x.length===0)return[];var k=x.charAt(0),C=x.charAt(x.length-1);if(x.length>1&&k===C&&(k==='"'||k==="'"))return['"'+Sr(x.substr(1,x.length-2))+'"'];var et=/\[(false|true|null|\d+|'[^']*'|"[^"]*")\]/.exec(x);if(et)return Yn(x.substr(0,et.index)).concat(Yn(et[1])).concat(Yn(x.substr(et.index+et[0].length)));var lt=x.split(".");if(lt.length===1)return['"'+Sr(x)+'"'];for(var J=[],nt=0;nt<lt.length;++nt)J=J.concat(Yn(lt[nt]));return J}function Ka(x){return"["+Yn(x).join("][")+"]"}function L0(x,k){return new yn(x,Ka(k+""))}function ci(x){return typeof x=="function"&&!x._reglType||x instanceof yn}function Z(x,k){if(typeof x=="function")return new yn(Qe,x);if(typeof x=="number"||typeof x=="boolean")return new yn(ko,x);if(Array.isArray(x))return new yn(Oo,x.map((C,et)=>Z(C,k+"["+et+"]")));if(x instanceof yn)return x;S(!1,"invalid option type in uniform "+k)}var Ot={DynamicVariable:yn,define:L0,isDynamic:ci,unbox:Z,accessor:Ka},Dt={next:typeof requestAnimationFrame=="function"?function(x){return requestAnimationFrame(x)}:function(x){return setTimeout(x,16)},cancel:typeof cancelAnimationFrame=="function"?function(x){return cancelAnimationFrame(x)}:clearTimeout},Nt=typeof performance!="undefined"&&performance.now?function(){return performance.now()}:function(){return+new Date};function le(){var x={"":0},k=[""];return{id:function(C){var et=x[C];return et||(et=x[C]=k.length,k.push(C),et)},str:function(C){return k[C]}}}function Ae(x,k,C){var et=document.createElement("canvas");e(et.style,{border:0,margin:0,padding:0,top:0,left:0}),x.appendChild(et),x===document.body&&(et.style.position="absolute",e(x.style,{margin:0,padding:0}));function lt(){var yt=window.innerWidth,Mt=window.innerHeight;if(x!==document.body){var At=x.getBoundingClientRect();yt=At.right-At.left,Mt=At.bottom-At.top}et.width=C*yt,et.height=C*Mt,e(et.style,{width:yt+"px",height:Mt+"px"})}var J;x!==document.body&&typeof ResizeObserver=="function"?(J=new ResizeObserver(function(){setTimeout(lt)}),J.observe(x)):window.addEventListener("resize",lt,!1);function nt(){J?J.disconnect():window.removeEventListener("resize",lt),x.removeChild(et)}return lt(),{canvas:et,onDestroy:nt}}function Me(x,k){function C(et){try{return x.getContext(et,k)}catch(lt){return null}}return C("webgl")||C("experimental-webgl")||C("webgl-experimental")}function pe(x){return typeof x.nodeName=="string"&&typeof x.appendChild=="function"&&typeof x.getBoundingClientRect=="function"}function $e(x){return typeof x.drawArrays=="function"||typeof x.drawElements=="function"}function be(x){return typeof x=="string"?x.split():(S(Array.isArray(x),"invalid extension array"),x)}function We(x){return typeof x=="string"?(S(typeof document!="undefined","not supported outside of DOM"),document.querySelector(x)):x}function ke(x){var k=x||{},C,et,lt,J,nt={},yt=[],Mt=[],At=typeof window=="undefined"?1:window.devicePixelRatio,Et=!1,Rt=function(Ct){Ct&&S.raise(Ct)},qt=function(){};if(typeof k=="string"?(S(typeof document!="undefined","selector queries only supported in DOM enviroments"),C=document.querySelector(k),S(C,"invalid query string for element")):typeof k=="object"?pe(k)?C=k:$e(k)?(J=k,lt=J.canvas):(S.constructor(k),"gl"in k?J=k.gl:"canvas"in k?lt=We(k.canvas):"container"in k&&(et=We(k.container)),"attributes"in k&&(nt=k.attributes,S.type(nt,"object","invalid context attributes")),"extensions"in k&&(yt=be(k.extensions)),"optionalExtensions"in k&&(Mt=be(k.optionalExtensions)),"onDone"in k&&(S.type(k.onDone,"function","invalid or missing onDone callback"),Rt=k.onDone),"profile"in k&&(Et=!!k.profile),"pixelRatio"in k&&(At=+k.pixelRatio,S(At>0,"invalid pixel ratio"))):S.raise("invalid arguments to regl"),C&&(C.nodeName.toLowerCase()==="canvas"?lt=C:et=C),!J){if(!lt){S(typeof document!="undefined","must manually specify webgl context outside of DOM environments");var wt=Ae(et||document.body,Rt,At);if(!wt)return null;lt=wt.canvas,qt=wt.onDestroy}nt.premultipliedAlpha===void 0&&(nt.premultipliedAlpha=!0),J=Me(lt,nt)}return J?{gl:J,canvas:lt,container:et,extensions:yt,optionalExtensions:Mt,pixelRatio:At,profile:Et,onDone:Rt,onDestroy:qt}:(qt(),Rt("webgl not supported, try upgrading your browser or graphics drivers http://get.webgl.org"),null)}function Te(x,k){var C={};function et(nt){S.type(nt,"string","extension name must be string");var yt=nt.toLowerCase(),Mt;try{Mt=C[yt]=x.getExtension(yt)}catch(At){}return!!Mt}for(var lt=0;lt<k.extensions.length;++lt){var J=k.extensions[lt];if(!et(J))return k.onDestroy(),k.onDone('"'+J+'" extension is not supported by the current WebGL context, try upgrading your system or a different browser'),null}return k.optionalExtensions.forEach(et),{extensions:C,restore:function(){Object.keys(C).forEach(function(nt){if(C[nt]&&!et(nt))throw new Error("(regl): error restoring extension "+nt)})}}}function Ye(x,k){for(var C=Array(x),et=0;et<x;++et)C[et]=k(et);return C}var ve=5120,io=5121,Ro=5122,ye=5123,Go=5124,pa=5125,l0=5126;function eo(x){for(var k=16;k<=1<<28;k*=16)if(x<=k)return k;return 0}function vo(x){var k,C;return k=(x>65535)<<4,x>>>=k,C=(x>255)<<3,x>>>=C,k|=C,C=(x>15)<<2,x>>>=C,k|=C,C=(x>3)<<1,x>>>=C,k|=C,k|x>>1}function $n(){var x=Ye(8,function(){return[]});function k(J){var nt=eo(J),yt=x[vo(nt)>>2];return yt.length>0?yt.pop():new ArrayBuffer(nt)}function C(J){x[vo(J.byteLength)>>2].push(J)}function et(J,nt){var yt=null;switch(J){case ve:yt=new Int8Array(k(nt),0,nt);break;case io:yt=new Uint8Array(k(nt),0,nt);break;case Ro:yt=new Int16Array(k(2*nt),0,nt);break;case ye:yt=new Uint16Array(k(2*nt),0,nt);break;case Go:yt=new Int32Array(k(4*nt),0,nt);break;case pa:yt=new Uint32Array(k(4*nt),0,nt);break;case l0:yt=new Float32Array(k(4*nt),0,nt);break;default:return null}return yt.length!==nt?yt.subarray(0,nt):yt}function lt(J){C(J.buffer)}return{alloc:k,free:C,allocType:et,freeType:lt}}var j=$n();j.zero=$n();var ht=3408,Vt=3410,se=3411,fe=3412,nn=3413,ar=3414,kr=3415,rn=33901,br=33902,an=3379,uo=3386,Kn=34921,Wo=36347,Fn=36348,Hr=35661,Br=35660,Uo=34930,va=36349,wn=34076,Oa=34024,Ao=7936,sn=7937,ma=7938,ps=35724,Qa=34047,vs=36063,Ql=34852,z0=3553,li=34067,kc=34069,Jh=33984,f0=6408,Ac=5126,yr=5121,Tc=36160,ms=36053,X5=36064,Y5=16384,K5=function(x,k){var C=1;k.ext_texture_filter_anisotropic&&(C=x.getParameter(Qa));var et=1,lt=1;k.webgl_draw_buffers&&(et=x.getParameter(Ql),lt=x.getParameter(vs));var J=!!k.oes_texture_float;if(J){var nt=x.createTexture();x.bindTexture(z0,nt),x.texImage2D(z0,0,f0,1,1,0,f0,Ac,null);var yt=x.createFramebuffer();if(x.bindFramebuffer(Tc,yt),x.framebufferTexture2D(Tc,X5,z0,nt,0),x.bindTexture(z0,null),x.checkFramebufferStatus(Tc)!==ms)J=!1;else{x.viewport(0,0,1,1),x.clearColor(1,0,0,1),x.clear(Y5);var Mt=j.allocType(Ac,4);x.readPixels(0,0,1,1,f0,Ac,Mt),x.getError()?J=!1:(x.deleteFramebuffer(yt),x.deleteTexture(nt),J=Mt[0]===1),j.freeType(Mt)}}var At=typeof navigator!="undefined"&&(/MSIE/.test(navigator.userAgent)||/Trident\//.test(navigator.appVersion)||/Edge/.test(navigator.userAgent)),Et=!0;if(!At){var Rt=x.createTexture(),qt=j.allocType(yr,36);x.activeTexture(Jh),x.bindTexture(li,Rt),x.texImage2D(kc,0,f0,3,3,0,f0,yr,qt),j.freeType(qt),x.bindTexture(li,null),x.deleteTexture(Rt),Et=!x.getError()}return{colorBits:[x.getParameter(Vt),x.getParameter(se),x.getParameter(fe),x.getParameter(nn)],depthBits:x.getParameter(ar),stencilBits:x.getParameter(kr),subpixelBits:x.getParameter(ht),extensions:Object.keys(k).filter(function(wt){return!!k[wt]}),maxAnisotropic:C,maxDrawbuffers:et,maxColorAttachments:lt,pointSizeDims:x.getParameter(rn),lineWidthDims:x.getParameter(br),maxViewportDims:x.getParameter(uo),maxCombinedTextureUnits:x.getParameter(Hr),maxCubeMapSize:x.getParameter(wn),maxRenderbufferSize:x.getParameter(Oa),maxTextureUnits:x.getParameter(Uo),maxTextureSize:x.getParameter(an),maxAttributes:x.getParameter(Kn),maxVertexUniforms:x.getParameter(Wo),maxVertexTextureUnits:x.getParameter(Br),maxVaryingVectors:x.getParameter(Fn),maxFragmentUniforms:x.getParameter(va),glsl:x.getParameter(ps),renderer:x.getParameter(sn),vendor:x.getParameter(Ao),version:x.getParameter(ma),readFloat:J,npotTextureCube:Et}};function Pa(x){return!!x&&typeof x=="object"&&Array.isArray(x.shape)&&Array.isArray(x.stride)&&typeof x.offset=="number"&&x.shape.length===x.stride.length&&(Array.isArray(x.data)||t(x.data))}var ea=function(x){return Object.keys(x).map(function(k){return x[k]})},Zl={shape:ty,flatten:J5};function Q5(x,k,C){for(var et=0;et<k;++et)C[et]=x[et]}function Z5(x,k,C,et){for(var lt=0,J=0;J<k;++J)for(var nt=x[J],yt=0;yt<C;++yt)et[lt++]=nt[yt]}function hp(x,k,C,et,lt,J){for(var nt=J,yt=0;yt<k;++yt)for(var Mt=x[yt],At=0;At<C;++At)for(var Et=Mt[At],Rt=0;Rt<et;++Rt)lt[nt++]=Et[Rt]}function up(x,k,C,et,lt){for(var J=1,nt=C+1;nt<k.length;++nt)J*=k[nt];var yt=k[C];if(k.length-C===4){var Mt=k[C+1],At=k[C+2],Et=k[C+3];for(nt=0;nt<yt;++nt)hp(x[nt],Mt,At,Et,et,lt),lt+=J}else for(nt=0;nt<yt;++nt)up(x[nt],k,C+1,et,lt),lt+=J}function J5(x,k,C,et){var lt=1;if(k.length)for(var J=0;J<k.length;++J)lt*=k[J];else lt=0;var nt=et||j.allocType(C,lt);switch(k.length){case 0:break;case 1:Q5(x,k[0],nt);break;case 2:Z5(x,k[0],k[1],nt);break;case 3:hp(x,k[0],k[1],k[2],nt,0);break;default:up(x,k,0,nt,0)}return nt}function ty(x){for(var k=[],C=x;C.length;C=C[0])k.push(C.length);return k}var t1={"[object Int8Array]":5120,"[object Int16Array]":5122,"[object Int32Array]":5124,"[object Uint8Array]":5121,"[object Uint8ClampedArray]":5121,"[object Uint16Array]":5123,"[object Uint32Array]":5125,"[object Float32Array]":5126,"[object Float64Array]":5121,"[object ArrayBuffer]":5121},ey=5120,oy=5122,ny=5124,ry=5121,ay=5123,sy=5125,iy=5126,cy=5126,gs={int8:ey,int16:oy,int32:ny,uint8:ry,uint16:ay,uint32:sy,float:iy,float32:cy},ly=35048,fy=35040,Jl={dynamic:ly,stream:fy,static:35044},e1=Zl.flatten,dp=Zl.shape,pp=35044,hy=35040,o1=5121,n1=5126,R0=[];R0[5120]=1,R0[5122]=2,R0[5124]=4,R0[5121]=1,R0[5123]=2,R0[5125]=4,R0[5126]=4;function tf(x){return t1[Object.prototype.toString.call(x)]|0}function vp(x,k){for(var C=0;C<k.length;++C)x[C]=k[C]}function mp(x,k,C,et,lt,J,nt){for(var yt=0,Mt=0;Mt<C;++Mt)for(var At=0;At<et;++At)x[yt++]=k[lt*Mt+J*At+nt]}function uy(x,k,C,et){var lt=0,J={};function nt(W){this.id=lt++,this.buffer=x.createBuffer(),this.type=W,this.usage=pp,this.byteLength=0,this.dimension=1,this.dtype=o1,this.persistentData=null,C.profile&&(this.stats={size:0})}nt.prototype.bind=function(){x.bindBuffer(this.type,this.buffer)},nt.prototype.destroy=function(){qt(this)};var yt=[];function Mt(W,rt){var kt=yt.pop();return kt||(kt=new nt(W)),kt.bind(),Rt(kt,rt,hy,0,1,!1),kt}function At(W){yt.push(W)}function Et(W,rt,kt){W.byteLength=rt.byteLength,x.bufferData(W.type,rt,kt)}function Rt(W,rt,kt,jt,dt,Xt){var xt;if(W.usage=kt,Array.isArray(rt)){if(W.dtype=jt||n1,rt.length>0){var Pt;if(Array.isArray(rt[0])){xt=dp(rt);for(var vt=1,It=1;It<xt.length;++It)vt*=xt[It];W.dimension=vt,Pt=e1(rt,xt,W.dtype),Et(W,Pt,kt),Xt?W.persistentData=Pt:j.freeType(Pt)}else if(typeof rt[0]=="number"){W.dimension=dt;var me=j.allocType(W.dtype,rt.length);vp(me,rt),Et(W,me,kt),Xt?W.persistentData=me:j.freeType(me)}else t(rt[0])?(W.dimension=rt[0].length,W.dtype=jt||tf(rt[0])||n1,Pt=e1(rt,[rt.length,rt[0].length],W.dtype),Et(W,Pt,kt),Xt?W.persistentData=Pt:j.freeType(Pt)):S.raise("invalid buffer data")}}else if(t(rt))W.dtype=jt||tf(rt),W.dimension=dt,Et(W,rt,kt),Xt&&(W.persistentData=new Uint8Array(new Uint8Array(rt.buffer)));else if(Pa(rt)){xt=rt.shape;var Ie=rt.stride,Gt=rt.offset,Tt=0,ut=0,Re=0,Be=0;xt.length===1?(Tt=xt[0],ut=1,Re=Ie[0],Be=0):xt.length===2?(Tt=xt[0],ut=xt[1],Re=Ie[0],Be=Ie[1]):S.raise("invalid shape"),W.dtype=jt||tf(rt.data)||n1,W.dimension=ut;var ee=j.allocType(W.dtype,Tt*ut);mp(ee,rt.data,Tt,ut,Re,Be,Gt),Et(W,ee,kt),Xt?W.persistentData=ee:j.freeType(ee)}else rt instanceof ArrayBuffer?(W.dtype=o1,W.dimension=dt,Et(W,rt,kt),Xt&&(W.persistentData=new Uint8Array(new Uint8Array(rt)))):S.raise("invalid buffer data")}function qt(W){k.bufferCount--,et(W);var rt=W.buffer;S(rt,"buffer must not be deleted already"),x.deleteBuffer(rt),W.buffer=null,delete J[W.id]}function wt(W,rt,kt,jt){k.bufferCount++;var dt=new nt(rt);J[dt.id]=dt;function Xt(vt){var It=pp,me=null,Ie=0,Gt=0,Tt=1;return Array.isArray(vt)||t(vt)||Pa(vt)||vt instanceof ArrayBuffer?me=vt:typeof vt=="number"?Ie=vt|0:vt&&(S.type(vt,"object","buffer arguments must be an object, a number or an array"),"data"in vt&&(S(me===null||Array.isArray(me)||t(me)||Pa(me),"invalid data for buffer"),me=vt.data),"usage"in vt&&(S.parameter(vt.usage,Jl,"invalid buffer usage"),It=Jl[vt.usage]),"type"in vt&&(S.parameter(vt.type,gs,"invalid buffer type"),Gt=gs[vt.type]),"dimension"in vt&&(S.type(vt.dimension,"number","invalid dimension"),Tt=vt.dimension|0),"length"in vt&&(S.nni(Ie,"buffer length must be a nonnegative integer"),Ie=vt.length|0)),dt.bind(),me?Rt(dt,me,It,Gt,Tt,jt):(Ie&&x.bufferData(dt.type,Ie,It),dt.dtype=Gt||o1,dt.usage=It,dt.dimension=Tt,dt.byteLength=Ie),C.profile&&(dt.stats.size=dt.byteLength*R0[dt.dtype]),Xt}function xt(vt,It){S(It+vt.byteLength<=dt.byteLength,"invalid buffer subdata call, buffer is too small.  Can't write data of size "+vt.byteLength+" starting from offset "+It+" to a buffer of size "+dt.byteLength),x.bufferSubData(dt.type,It,vt)}function Pt(vt,It){var me=(It||0)|0,Ie;if(dt.bind(),t(vt)||vt instanceof ArrayBuffer)xt(vt,me);else if(Array.isArray(vt)){if(vt.length>0)if(typeof vt[0]=="number"){var Gt=j.allocType(dt.dtype,vt.length);vp(Gt,vt),xt(Gt,me),j.freeType(Gt)}else if(Array.isArray(vt[0])||t(vt[0])){Ie=dp(vt);var Tt=e1(vt,Ie,dt.dtype);xt(Tt,me),j.freeType(Tt)}else S.raise("invalid buffer data")}else if(Pa(vt)){Ie=vt.shape;var ut=vt.stride,Re=0,Be=0,ee=0,Ze=0;Ie.length===1?(Re=Ie[0],Be=1,ee=ut[0],Ze=0):Ie.length===2?(Re=Ie[0],Be=Ie[1],ee=ut[0],Ze=ut[1]):S.raise("invalid shape");var Fe=Array.isArray(vt.data)?dt.dtype:tf(vt.data),Ve=j.allocType(Fe,Re*Be);mp(Ve,vt.data,Re,Be,ee,Ze,vt.offset),xt(Ve,me),j.freeType(Ve)}else S.raise("invalid data for buffer subdata");return Xt}return kt||Xt(W),Xt._reglType="buffer",Xt._buffer=dt,Xt.subdata=Pt,C.profile&&(Xt.stats=dt.stats),Xt.destroy=function(){qt(dt)},Xt}function Ct(){ea(J).forEach(function(W){W.buffer=x.createBuffer(),x.bindBuffer(W.type,W.buffer),x.bufferData(W.type,W.persistentData||W.byteLength,W.usage)})}return C.profile&&(k.getTotalBufferSize=function(){var W=0;return Object.keys(J).forEach(function(rt){W+=J[rt].stats.size}),W}),{create:wt,createStream:Mt,destroyStream:At,clear:function(){ea(J).forEach(qt),yt.forEach(qt)},getBuffer:function(W){return W&&W._buffer instanceof nt?W._buffer:null},restore:Ct,_initBuffer:Rt}}var dy=0,py=0,vy=1,my=1,gy=4,xy=4,fi={points:dy,point:py,lines:vy,line:my,triangles:gy,triangle:xy,"line loop":2,"line strip":3,"triangle strip":5,"triangle fan":6},by=0,yy=1,Lc=4,wy=5120,hi=5121,gp=5122,ui=5123,xp=5124,xs=5125,r1=34963,_y=35040,My=35044;function Ey(x,k,C,et){var lt={},J=0,nt={uint8:hi,uint16:ui};k.oes_element_index_uint&&(nt.uint32=xs);function yt(Ct){this.id=J++,lt[this.id]=this,this.buffer=Ct,this.primType=Lc,this.vertCount=0,this.type=0}yt.prototype.bind=function(){this.buffer.bind()};var Mt=[];function At(Ct){var W=Mt.pop();return W||(W=new yt(C.create(null,r1,!0,!1)._buffer)),Rt(W,Ct,_y,-1,-1,0,0),W}function Et(Ct){Mt.push(Ct)}function Rt(Ct,W,rt,kt,jt,dt,Xt){Ct.buffer.bind();var xt;if(W){var Pt=Xt;!Xt&&(!t(W)||Pa(W)&&!t(W.data))&&(Pt=k.oes_element_index_uint?xs:ui),C._initBuffer(Ct.buffer,W,rt,Pt,3)}else x.bufferData(r1,dt,rt),Ct.buffer.dtype=xt||hi,Ct.buffer.usage=rt,Ct.buffer.dimension=3,Ct.buffer.byteLength=dt;if(xt=Xt,!Xt){switch(Ct.buffer.dtype){case hi:case wy:xt=hi;break;case ui:case gp:xt=ui;break;case xs:case xp:xt=xs;break;default:S.raise("unsupported type for element array")}Ct.buffer.dtype=xt}Ct.type=xt,S(xt!==xs||!!k.oes_element_index_uint,"32 bit element buffers not supported, enable oes_element_index_uint first");var vt=jt;vt<0&&(vt=Ct.buffer.byteLength,xt===ui?vt>>=1:xt===xs&&(vt>>=2)),Ct.vertCount=vt;var It=kt;if(kt<0){It=Lc;var me=Ct.buffer.dimension;me===1&&(It=by),me===2&&(It=yy),me===3&&(It=Lc)}Ct.primType=It}function qt(Ct){et.elementsCount--,S(Ct.buffer!==null,"must not double destroy elements"),delete lt[Ct.id],Ct.buffer.destroy(),Ct.buffer=null}function wt(Ct,W){var rt=C.create(null,r1,!0),kt=new yt(rt._buffer);et.elementsCount++;function jt(dt){if(!dt)rt(),kt.primType=Lc,kt.vertCount=0,kt.type=hi;else if(typeof dt=="number")rt(dt),kt.primType=Lc,kt.vertCount=dt|0,kt.type=hi;else{var Xt=null,xt=My,Pt=-1,vt=-1,It=0,me=0;Array.isArray(dt)||t(dt)||Pa(dt)?Xt=dt:(S.type(dt,"object","invalid arguments for elements"),"data"in dt&&(Xt=dt.data,S(Array.isArray(Xt)||t(Xt)||Pa(Xt),"invalid data for element buffer")),"usage"in dt&&(S.parameter(dt.usage,Jl,"invalid element buffer usage"),xt=Jl[dt.usage]),"primitive"in dt&&(S.parameter(dt.primitive,fi,"invalid element buffer primitive"),Pt=fi[dt.primitive]),"count"in dt&&(S(typeof dt.count=="number"&&dt.count>=0,"invalid vertex count for elements"),vt=dt.count|0),"type"in dt&&(S.parameter(dt.type,nt,"invalid buffer type"),me=nt[dt.type]),"length"in dt?It=dt.length|0:(It=vt,me===ui||me===gp?It*=2:(me===xs||me===xp)&&(It*=4))),Rt(kt,Xt,xt,Pt,vt,It,me)}return jt}return jt(Ct),jt._reglType="elements",jt._elements=kt,jt.subdata=function(dt,Xt){return rt.subdata(dt,Xt),jt},jt.destroy=function(){qt(kt)},jt}return{create:wt,createStream:At,destroyStream:Et,getElements:function(Ct){return typeof Ct=="function"&&Ct._elements instanceof yt?Ct._elements:null},clear:function(){ea(lt).forEach(qt)}}}var bp=new Float32Array(1),Sy=new Uint32Array(bp.buffer),ky=5123;function yp(x){for(var k=j.allocType(ky,x.length),C=0;C<x.length;++C)if(isNaN(x[C]))k[C]=65535;else if(x[C]===1/0)k[C]=31744;else if(x[C]===-1/0)k[C]=64512;else{bp[0]=x[C];var et=Sy[0],lt=et>>>31<<15,J=(et<<1>>>24)-127,nt=et>>13&1023;if(J<-24)k[C]=lt;else if(J<-14){var yt=-14-J;k[C]=lt+(nt+1024>>yt)}else J>15?k[C]=lt+31744:k[C]=lt+(J+15<<10)+nt}return k}function vn(x){return Array.isArray(x)||t(x)}var wp=function(x){return!(x&x-1)&&!!x},Ay=34467,Za=3553,a1=34067,ef=34069,bs=6408,s1=6406,of=6407,zc=6409,nf=6410,_p=32854,i1=32855,Mp=36194,Ty=32819,Ly=32820,zy=33635,Ry=34042,c1=6402,rf=34041,l1=35904,f1=35906,di=36193,h1=33776,u1=33777,d1=33778,p1=33779,Ep=35986,Sp=35987,kp=34798,Ap=35840,Tp=35841,Lp=35842,zp=35843,Rp=36196,pi=5121,v1=5123,m1=5125,Rc=5126,Ny=10242,Cy=10243,Oy=10497,g1=33071,Py=33648,Iy=10240,$y=10241,x1=9728,Fy=9729,b1=9984,Np=9985,Cp=9986,y1=9987,Dy=33170,af=4352,qy=4353,Gy=4354,Hy=34046,By=3317,Uy=37440,jy=37441,Wy=37443,Op=37444,Nc=33984,Vy=[b1,Cp,Np,y1],sf=[0,zc,nf,of,bs],ga={};ga[zc]=ga[s1]=ga[c1]=1,ga[rf]=ga[nf]=2,ga[of]=ga[l1]=3,ga[bs]=ga[f1]=4;function vi(x){return"[object "+x+"]"}var Pp=vi("HTMLCanvasElement"),Ip=vi("OffscreenCanvas"),$p=vi("CanvasRenderingContext2D"),Fp=vi("ImageBitmap"),Dp=vi("HTMLImageElement"),qp=vi("HTMLVideoElement"),Xy=Object.keys(t1).concat([Pp,Ip,$p,Fp,Dp,qp]),mi=[];mi[pi]=1,mi[Rc]=4,mi[di]=2,mi[v1]=2,mi[m1]=4;var sr=[];sr[_p]=2,sr[i1]=2,sr[Mp]=2,sr[rf]=4,sr[h1]=.5,sr[u1]=.5,sr[d1]=1,sr[p1]=1,sr[Ep]=.5,sr[Sp]=1,sr[kp]=1,sr[Ap]=.5,sr[Tp]=.25,sr[Lp]=.5,sr[zp]=.25,sr[Rp]=.5;function Gp(x){return Array.isArray(x)&&(x.length===0||typeof x[0]=="number")}function Hp(x){if(!Array.isArray(x))return!1;var k=x.length;return!(k===0||!vn(x[0]))}function ys(x){return Object.prototype.toString.call(x)}function Bp(x){return ys(x)===Pp}function Up(x){return ys(x)===Ip}function Yy(x){return ys(x)===$p}function Ky(x){return ys(x)===Fp}function Qy(x){return ys(x)===Dp}function Zy(x){return ys(x)===qp}function w1(x){if(!x)return!1;var k=ys(x);return Xy.indexOf(k)>=0?!0:Gp(x)||Hp(x)||Pa(x)}function jp(x){return t1[Object.prototype.toString.call(x)]|0}function Jy(x,k){var C=k.length;switch(x.type){case pi:case v1:case m1:case Rc:var et=j.allocType(x.type,C);et.set(k),x.data=et;break;case di:x.data=yp(k);break;default:S.raise("unsupported texture type, must specify a typed array")}}function Wp(x,k){return j.allocType(x.type===di?Rc:x.type,k)}function Vp(x,k){x.type===di?(x.data=yp(k),j.freeType(k)):x.data=k}function tw(x,k,C,et,lt,J){for(var nt=x.width,yt=x.height,Mt=x.channels,At=nt*yt*Mt,Et=Wp(x,At),Rt=0,qt=0;qt<yt;++qt)for(var wt=0;wt<nt;++wt)for(var Ct=0;Ct<Mt;++Ct)Et[Rt++]=k[C*wt+et*qt+lt*Ct+J];Vp(x,Et)}function cf(x,k,C,et,lt,J){var nt;if(typeof sr[x]!="undefined"?nt=sr[x]:nt=ga[x]*mi[k],J&&(nt*=6),lt){for(var yt=0,Mt=C;Mt>=1;)yt+=nt*Mt*Mt,Mt/=2;return yt}else return nt*C*et}function ew(x,k,C,et,lt,J,nt){var yt={"don't care":af,"dont care":af,nice:Gy,fast:qy},Mt={repeat:Oy,clamp:g1,mirror:Py},At={nearest:x1,linear:Fy},Et=e({mipmap:y1,"nearest mipmap nearest":b1,"linear mipmap nearest":Np,"nearest mipmap linear":Cp,"linear mipmap linear":y1},At),Rt={none:0,browser:Op},qt={uint8:pi,rgba4:Ty,rgb565:zy,"rgb5 a1":Ly},wt={alpha:s1,luminance:zc,"luminance alpha":nf,rgb:of,rgba:bs,rgba4:_p,"rgb5 a1":i1,rgb565:Mp},Ct={};k.ext_srgb&&(wt.srgb=l1,wt.srgba=f1),k.oes_texture_float&&(qt.float32=qt.float=Rc),k.oes_texture_half_float&&(qt.float16=qt["half float"]=di),k.webgl_depth_texture&&(e(wt,{depth:c1,"depth stencil":rf}),e(qt,{uint16:v1,uint32:m1,"depth stencil":Ry})),k.webgl_compressed_texture_s3tc&&e(Ct,{"rgb s3tc dxt1":h1,"rgba s3tc dxt1":u1,"rgba s3tc dxt3":d1,"rgba s3tc dxt5":p1}),k.webgl_compressed_texture_atc&&e(Ct,{"rgb atc":Ep,"rgba atc explicit alpha":Sp,"rgba atc interpolated alpha":kp}),k.webgl_compressed_texture_pvrtc&&e(Ct,{"rgb pvrtc 4bppv1":Ap,"rgb pvrtc 2bppv1":Tp,"rgba pvrtc 4bppv1":Lp,"rgba pvrtc 2bppv1":zp}),k.webgl_compressed_texture_etc1&&(Ct["rgb etc1"]=Rp);var W=Array.prototype.slice.call(x.getParameter(Ay));Object.keys(Ct).forEach(function(R){var ot=Ct[R];W.indexOf(ot)>=0&&(wt[R]=ot)});var rt=Object.keys(wt);C.textureFormats=rt;var kt=[];Object.keys(wt).forEach(function(R){var ot=wt[R];kt[ot]=R});var jt=[];Object.keys(qt).forEach(function(R){var ot=qt[R];jt[ot]=R});var dt=[];Object.keys(At).forEach(function(R){var ot=At[R];dt[ot]=R});var Xt=[];Object.keys(Et).forEach(function(R){var ot=Et[R];Xt[ot]=R});var xt=[];Object.keys(Mt).forEach(function(R){var ot=Mt[R];xt[ot]=R});var Pt=rt.reduce(function(R,ot){var Q=wt[ot];return Q===zc||Q===s1||Q===zc||Q===nf||Q===c1||Q===rf||k.ext_srgb&&(Q===l1||Q===f1)?R[Q]=Q:Q===i1||ot.indexOf("rgba")>=0?R[Q]=bs:R[Q]=of,R},{});function vt(){this.internalformat=bs,this.format=bs,this.type=pi,this.compressed=!1,this.premultiplyAlpha=!1,this.flipY=!1,this.unpackAlignment=1,this.colorSpace=Op,this.width=0,this.height=0,this.channels=0}function It(R,ot){R.internalformat=ot.internalformat,R.format=ot.format,R.type=ot.type,R.compressed=ot.compressed,R.premultiplyAlpha=ot.premultiplyAlpha,R.flipY=ot.flipY,R.unpackAlignment=ot.unpackAlignment,R.colorSpace=ot.colorSpace,R.width=ot.width,R.height=ot.height,R.channels=ot.channels}function me(R,ot){if(!(typeof ot!="object"||!ot)){if("premultiplyAlpha"in ot&&(S.type(ot.premultiplyAlpha,"boolean","invalid premultiplyAlpha"),R.premultiplyAlpha=ot.premultiplyAlpha),"flipY"in ot&&(S.type(ot.flipY,"boolean","invalid texture flip"),R.flipY=ot.flipY),"alignment"in ot&&(S.oneOf(ot.alignment,[1,2,4,8],"invalid texture unpack alignment"),R.unpackAlignment=ot.alignment),"colorSpace"in ot&&(S.parameter(ot.colorSpace,Rt,"invalid colorSpace"),R.colorSpace=Rt[ot.colorSpace]),"type"in ot){var Q=ot.type;S(k.oes_texture_float||!(Q==="float"||Q==="float32"),"you must enable the OES_texture_float extension in order to use floating point textures."),S(k.oes_texture_half_float||!(Q==="half float"||Q==="float16"),"you must enable the OES_texture_half_float extension in order to use 16-bit floating point textures."),S(k.webgl_depth_texture||!(Q==="uint16"||Q==="uint32"||Q==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),S.parameter(Q,qt,"invalid texture type"),R.type=qt[Q]}var Qt=R.width,Je=R.height,L=R.channels,E=!1;"shape"in ot?(S(Array.isArray(ot.shape)&&ot.shape.length>=2,"shape must be an array"),Qt=ot.shape[0],Je=ot.shape[1],ot.shape.length===3&&(L=ot.shape[2],S(L>0&&L<=4,"invalid number of channels"),E=!0),S(Qt>=0&&Qt<=C.maxTextureSize,"invalid width"),S(Je>=0&&Je<=C.maxTextureSize,"invalid height")):("radius"in ot&&(Qt=Je=ot.radius,S(Qt>=0&&Qt<=C.maxTextureSize,"invalid radius")),"width"in ot&&(Qt=ot.width,S(Qt>=0&&Qt<=C.maxTextureSize,"invalid width")),"height"in ot&&(Je=ot.height,S(Je>=0&&Je<=C.maxTextureSize,"invalid height")),"channels"in ot&&(L=ot.channels,S(L>0&&L<=4,"invalid number of channels"),E=!0)),R.width=Qt|0,R.height=Je|0,R.channels=L|0;var P=!1;if("format"in ot){var U=ot.format;S(k.webgl_depth_texture||!(U==="depth"||U==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),S.parameter(U,wt,"invalid texture format");var V=R.internalformat=wt[U];R.format=Pt[V],U in qt&&("type"in ot||(R.type=qt[U])),U in Ct&&(R.compressed=!0),P=!0}!E&&P?R.channels=ga[R.format]:E&&!P?R.channels!==sf[R.format]&&(R.format=R.internalformat=sf[R.channels]):P&&E&&S(R.channels===ga[R.format],"number of channels inconsistent with specified format")}}function Ie(R){x.pixelStorei(Uy,R.flipY),x.pixelStorei(jy,R.premultiplyAlpha),x.pixelStorei(Wy,R.colorSpace),x.pixelStorei(By,R.unpackAlignment)}function Gt(){vt.call(this),this.xOffset=0,this.yOffset=0,this.data=null,this.needsFree=!1,this.element=null,this.needsCopy=!1}function Tt(R,ot){var Q=null;if(w1(ot)?Q=ot:ot&&(S.type(ot,"object","invalid pixel data type"),me(R,ot),"x"in ot&&(R.xOffset=ot.x|0),"y"in ot&&(R.yOffset=ot.y|0),w1(ot.data)&&(Q=ot.data)),S(!R.compressed||Q instanceof Uint8Array,"compressed texture data must be stored in a uint8array"),ot.copy){S(!Q,"can not specify copy and data field for the same texture");var Qt=lt.viewportWidth,Je=lt.viewportHeight;R.width=R.width||Qt-R.xOffset,R.height=R.height||Je-R.yOffset,R.needsCopy=!0,S(R.xOffset>=0&&R.xOffset<Qt&&R.yOffset>=0&&R.yOffset<Je&&R.width>0&&R.width<=Qt&&R.height>0&&R.height<=Je,"copy texture read out of bounds")}else if(!Q)R.width=R.width||1,R.height=R.height||1,R.channels=R.channels||4;else if(t(Q))R.channels=R.channels||4,R.data=Q,!("type"in ot)&&R.type===pi&&(R.type=jp(Q));else if(Gp(Q))R.channels=R.channels||4,Jy(R,Q),R.alignment=1,R.needsFree=!0;else if(Pa(Q)){var L=Q.data;!Array.isArray(L)&&R.type===pi&&(R.type=jp(L));var E=Q.shape,P=Q.stride,U,V,F,$,G,z;E.length===3?(F=E[2],z=P[2]):(S(E.length===2,"invalid ndarray pixel data, must be 2 or 3D"),F=1,z=1),U=E[0],V=E[1],$=P[0],G=P[1],R.alignment=1,R.width=U,R.height=V,R.channels=F,R.format=R.internalformat=sf[F],R.needsFree=!0,tw(R,L,$,G,z,Q.offset)}else if(Bp(Q)||Up(Q)||Yy(Q))Bp(Q)||Up(Q)?R.element=Q:R.element=Q.canvas,R.width=R.element.width,R.height=R.element.height,R.channels=4;else if(Ky(Q))R.element=Q,R.width=Q.width,R.height=Q.height,R.channels=4;else if(Qy(Q))R.element=Q,R.width=Q.naturalWidth,R.height=Q.naturalHeight,R.channels=4;else if(Zy(Q))R.element=Q,R.width=Q.videoWidth,R.height=Q.videoHeight,R.channels=4;else if(Hp(Q)){var O=R.width||Q[0].length,A=R.height||Q.length,H=R.channels;vn(Q[0][0])?H=H||Q[0][0].length:H=H||1;for(var Y=Zl.shape(Q),st=1,ft=0;ft<Y.length;++ft)st*=Y[ft];var at=Wp(R,st);Zl.flatten(Q,Y,"",at),Vp(R,at),R.alignment=1,R.width=O,R.height=A,R.channels=H,R.format=R.internalformat=sf[H],R.needsFree=!0}R.type===Rc?S(C.extensions.indexOf("oes_texture_float")>=0,"oes_texture_float extension not enabled"):R.type===di&&S(C.extensions.indexOf("oes_texture_half_float")>=0,"oes_texture_half_float extension not enabled")}function ut(R,ot,Q){var Qt=R.element,Je=R.data,L=R.internalformat,E=R.format,P=R.type,U=R.width,V=R.height;Ie(R),Qt?x.texImage2D(ot,Q,E,E,P,Qt):R.compressed?x.compressedTexImage2D(ot,Q,L,U,V,0,Je):R.needsCopy?(et(),x.copyTexImage2D(ot,Q,E,R.xOffset,R.yOffset,U,V,0)):x.texImage2D(ot,Q,E,U,V,0,E,P,Je||null)}function Re(R,ot,Q,Qt,Je){var L=R.element,E=R.data,P=R.internalformat,U=R.format,V=R.type,F=R.width,$=R.height;Ie(R),L?x.texSubImage2D(ot,Je,Q,Qt,U,V,L):R.compressed?x.compressedTexSubImage2D(ot,Je,Q,Qt,P,F,$,E):R.needsCopy?(et(),x.copyTexSubImage2D(ot,Je,Q,Qt,R.xOffset,R.yOffset,F,$)):x.texSubImage2D(ot,Je,Q,Qt,F,$,U,V,E)}var Be=[];function ee(){return Be.pop()||new Gt}function Ze(R){R.needsFree&&j.freeType(R.data),Gt.call(R),Be.push(R)}function Fe(){vt.call(this),this.genMipmaps=!1,this.mipmapHint=af,this.mipmask=0,this.images=Array(16)}function Ve(R,ot,Q){var Qt=R.images[0]=ee();R.mipmask=1,Qt.width=R.width=ot,Qt.height=R.height=Q,Qt.channels=R.channels=4}function xo(R,ot){var Q=null;if(w1(ot))Q=R.images[0]=ee(),It(Q,R),Tt(Q,ot),R.mipmask=1;else if(me(R,ot),Array.isArray(ot.mipmap))for(var Qt=ot.mipmap,Je=0;Je<Qt.length;++Je)Q=R.images[Je]=ee(),It(Q,R),Q.width>>=Je,Q.height>>=Je,Tt(Q,Qt[Je]),R.mipmask|=1<<Je;else Q=R.images[0]=ee(),It(Q,R),Tt(Q,ot),R.mipmask=1;It(R,R.images[0]),R.compressed&&(R.internalformat===h1||R.internalformat===u1||R.internalformat===d1||R.internalformat===p1)&&S(R.width%4===0&&R.height%4===0,"for compressed texture formats, mipmap level 0 must have width and height that are a multiple of 4")}function Mn(R,ot){for(var Q=R.images,Qt=0;Qt<Q.length;++Qt){if(!Q[Qt])return;ut(Q[Qt],ot,Qt)}}var Dn=[];function ro(){var R=Dn.pop()||new Fe;vt.call(R),R.mipmask=0;for(var ot=0;ot<16;++ot)R.images[ot]=null;return R}function zn(R){for(var ot=R.images,Q=0;Q<ot.length;++Q)ot[Q]&&Ze(ot[Q]),ot[Q]=null;Dn.push(R)}function Vo(){this.minFilter=x1,this.magFilter=x1,this.wrapS=g1,this.wrapT=g1,this.anisotropic=1,this.genMipmaps=!1,this.mipmapHint=af}function En(R,ot){if("min"in ot){var Q=ot.min;S.parameter(Q,Et),R.minFilter=Et[Q],Vy.indexOf(R.minFilter)>=0&&!("faces"in ot)&&(R.genMipmaps=!0)}if("mag"in ot){var Qt=ot.mag;S.parameter(Qt,At),R.magFilter=At[Qt]}var Je=R.wrapS,L=R.wrapT;if("wrap"in ot){var E=ot.wrap;typeof E=="string"?(S.parameter(E,Mt),Je=L=Mt[E]):Array.isArray(E)&&(S.parameter(E[0],Mt),S.parameter(E[1],Mt),Je=Mt[E[0]],L=Mt[E[1]])}else{if("wrapS"in ot){var P=ot.wrapS;S.parameter(P,Mt),Je=Mt[P]}if("wrapT"in ot){var U=ot.wrapT;S.parameter(U,Mt),L=Mt[U]}}if(R.wrapS=Je,R.wrapT=L,"anisotropic"in ot){var V=ot.anisotropic;S(typeof V=="number"&&V>=1&&V<=C.maxAnisotropic,"aniso samples must be between 1 and "),R.anisotropic=ot.anisotropic}if("mipmap"in ot){var F=!1;switch(typeof ot.mipmap){case"string":S.parameter(ot.mipmap,yt,"invalid mipmap hint"),R.mipmapHint=yt[ot.mipmap],R.genMipmaps=!0,F=!0;break;case"boolean":F=R.genMipmaps=ot.mipmap;break;case"object":S(Array.isArray(ot.mipmap),"invalid mipmap type"),R.genMipmaps=!1,F=!0;break;default:S.raise("invalid mipmap type")}F&&!("min"in ot)&&(R.minFilter=b1)}}function Rn(R,ot){x.texParameteri(ot,$y,R.minFilter),x.texParameteri(ot,Iy,R.magFilter),x.texParameteri(ot,Ny,R.wrapS),x.texParameteri(ot,Cy,R.wrapT),k.ext_texture_filter_anisotropic&&x.texParameteri(ot,Hy,R.anisotropic),R.genMipmaps&&(x.hint(Dy,R.mipmapHint),x.generateMipmap(ot))}var Nn=0,Qn={},ir=C.maxTextureUnits,mn=Array(ir).map(function(){return null});function Ue(R){vt.call(this),this.mipmask=0,this.internalformat=bs,this.id=Nn++,this.refCount=1,this.target=R,this.texture=x.createTexture(),this.unit=-1,this.bindCount=0,this.texInfo=new Vo,nt.profile&&(this.stats={size:0})}function cr(R){x.activeTexture(Nc),x.bindTexture(R.target,R.texture)}function To(){var R=mn[0];R?x.bindTexture(R.target,R.texture):x.bindTexture(Za,null)}function we(R){var ot=R.texture;S(ot,"must not double destroy texture");var Q=R.unit,Qt=R.target;Q>=0&&(x.activeTexture(Nc+Q),x.bindTexture(Qt,null),mn[Q]=null),x.deleteTexture(ot),R.texture=null,R.params=null,R.pixels=null,R.refCount=0,delete Qn[R.id],J.textureCount--}e(Ue.prototype,{bind:function(){var R=this;R.bindCount+=1;var ot=R.unit;if(ot<0){for(var Q=0;Q<ir;++Q){var Qt=mn[Q];if(Qt){if(Qt.bindCount>0)continue;Qt.unit=-1}mn[Q]=R,ot=Q;break}ot>=ir&&S.raise("insufficient number of texture units"),nt.profile&&J.maxTextureUnits<ot+1&&(J.maxTextureUnits=ot+1),R.unit=ot,x.activeTexture(Nc+ot),x.bindTexture(R.target,R.texture)}return ot},unbind:function(){this.bindCount-=1},decRef:function(){--this.refCount<=0&&we(this)}});function oo(R,ot){var Q=new Ue(Za);Qn[Q.id]=Q,J.textureCount++;function Qt(E,P){var U=Q.texInfo;Vo.call(U);var V=ro();return typeof E=="number"?typeof P=="number"?Ve(V,E|0,P|0):Ve(V,E|0,E|0):E?(S.type(E,"object","invalid arguments to regl.texture"),En(U,E),xo(V,E)):Ve(V,1,1),U.genMipmaps&&(V.mipmask=(V.width<<1)-1),Q.mipmask=V.mipmask,It(Q,V),S.texture2D(U,V,C),Q.internalformat=V.internalformat,Qt.width=V.width,Qt.height=V.height,cr(Q),Mn(V,Za),Rn(U,Za),To(),zn(V),nt.profile&&(Q.stats.size=cf(Q.internalformat,Q.type,V.width,V.height,U.genMipmaps,!1)),Qt.format=kt[Q.internalformat],Qt.type=jt[Q.type],Qt.mag=dt[U.magFilter],Qt.min=Xt[U.minFilter],Qt.wrapS=xt[U.wrapS],Qt.wrapT=xt[U.wrapT],Qt}function Je(E,P,U,V){S(!!E,"must specify image data");var F=P|0,$=U|0,G=V|0,z=ee();return It(z,Q),z.width=0,z.height=0,Tt(z,E),z.width=z.width||(Q.width>>G)-F,z.height=z.height||(Q.height>>G)-$,S(Q.type===z.type&&Q.format===z.format&&Q.internalformat===z.internalformat,"incompatible format for texture.subimage"),S(F>=0&&$>=0&&F+z.width<=Q.width&&$+z.height<=Q.height,"texture.subimage write out of bounds"),S(Q.mipmask&1<<G,"missing mipmap data"),S(z.data||z.element||z.needsCopy,"missing image data"),cr(Q),Re(z,Za,F,$,G),To(),Ze(z),Qt}function L(E,P){var U=E|0,V=P|0||U;if(U===Q.width&&V===Q.height)return Qt;Qt.width=Q.width=U,Qt.height=Q.height=V,cr(Q);for(var F=0;Q.mipmask>>F;++F){var $=U>>F,G=V>>F;if(!$||!G)break;x.texImage2D(Za,F,Q.format,$,G,0,Q.format,Q.type,null)}return To(),nt.profile&&(Q.stats.size=cf(Q.internalformat,Q.type,U,V,!1,!1)),Qt}return Qt(R,ot),Qt.subimage=Je,Qt.resize=L,Qt._reglType="texture2d",Qt._texture=Q,nt.profile&&(Qt.stats=Q.stats),Qt.destroy=function(){Q.decRef()},Qt}function po(R,ot,Q,Qt,Je,L){var E=new Ue(a1);Qn[E.id]=E,J.cubeCount++;var P=new Array(6);function U($,G,z,O,A,H){var Y,st=E.texInfo;for(Vo.call(st),Y=0;Y<6;++Y)P[Y]=ro();if(typeof $=="number"||!$){var ft=$|0||1;for(Y=0;Y<6;++Y)Ve(P[Y],ft,ft)}else if(typeof $=="object")if(G)xo(P[0],$),xo(P[1],G),xo(P[2],z),xo(P[3],O),xo(P[4],A),xo(P[5],H);else if(En(st,$),me(E,$),"faces"in $){var at=$.faces;for(S(Array.isArray(at)&&at.length===6,"cube faces must be a length 6 array"),Y=0;Y<6;++Y)S(typeof at[Y]=="object"&&!!at[Y],"invalid input for cube map face"),It(P[Y],E),xo(P[Y],at[Y])}else for(Y=0;Y<6;++Y)xo(P[Y],$);else S.raise("invalid arguments to cube map");for(It(E,P[0]),C.npotTextureCube||S(wp(E.width)&&wp(E.height),"your browser does not support non power or two texture dimensions"),st.genMipmaps?E.mipmask=(P[0].width<<1)-1:E.mipmask=P[0].mipmask,S.textureCube(E,st,P,C),E.internalformat=P[0].internalformat,U.width=P[0].width,U.height=P[0].height,cr(E),Y=0;Y<6;++Y)Mn(P[Y],ef+Y);for(Rn(st,a1),To(),nt.profile&&(E.stats.size=cf(E.internalformat,E.type,U.width,U.height,st.genMipmaps,!0)),U.format=kt[E.internalformat],U.type=jt[E.type],U.mag=dt[st.magFilter],U.min=Xt[st.minFilter],U.wrapS=xt[st.wrapS],U.wrapT=xt[st.wrapT],Y=0;Y<6;++Y)zn(P[Y]);return U}function V($,G,z,O,A){S(!!G,"must specify image data"),S(typeof $=="number"&&$===($|0)&&$>=0&&$<6,"invalid face");var H=z|0,Y=O|0,st=A|0,ft=ee();return It(ft,E),ft.width=0,ft.height=0,Tt(ft,G),ft.width=ft.width||(E.width>>st)-H,ft.height=ft.height||(E.height>>st)-Y,S(E.type===ft.type&&E.format===ft.format&&E.internalformat===ft.internalformat,"incompatible format for texture.subimage"),S(H>=0&&Y>=0&&H+ft.width<=E.width&&Y+ft.height<=E.height,"texture.subimage write out of bounds"),S(E.mipmask&1<<st,"missing mipmap data"),S(ft.data||ft.element||ft.needsCopy,"missing image data"),cr(E),Re(ft,ef+$,H,Y,st),To(),Ze(ft),U}function F($){var G=$|0;if(G!==E.width){U.width=E.width=G,U.height=E.height=G,cr(E);for(var z=0;z<6;++z)for(var O=0;E.mipmask>>O;++O)x.texImage2D(ef+z,O,E.format,G>>O,G>>O,0,E.format,E.type,null);return To(),nt.profile&&(E.stats.size=cf(E.internalformat,E.type,U.width,U.height,!1,!0)),U}}return U(R,ot,Q,Qt,Je,L),U.subimage=V,U.resize=F,U._reglType="textureCube",U._texture=E,nt.profile&&(U.stats=E.stats),U.destroy=function(){E.decRef()},U}function gn(){for(var R=0;R<ir;++R)x.activeTexture(Nc+R),x.bindTexture(Za,null),mn[R]=null;ea(Qn).forEach(we),J.cubeCount=0,J.textureCount=0}nt.profile&&(J.getTotalTextureSize=function(){var R=0;return Object.keys(Qn).forEach(function(ot){R+=Qn[ot].stats.size}),R});function t0(){for(var R=0;R<ir;++R){var ot=mn[R];ot&&(ot.bindCount=0,ot.unit=-1,mn[R]=null)}ea(Qn).forEach(function(Q){Q.texture=x.createTexture(),x.bindTexture(Q.target,Q.texture);for(var Qt=0;Qt<32;++Qt)if(Q.mipmask&1<<Qt)if(Q.target===Za)x.texImage2D(Za,Qt,Q.internalformat,Q.width>>Qt,Q.height>>Qt,0,Q.internalformat,Q.type,null);else for(var Je=0;Je<6;++Je)x.texImage2D(ef+Je,Qt,Q.internalformat,Q.width>>Qt,Q.height>>Qt,0,Q.internalformat,Q.type,null);Rn(Q.texInfo,Q.target)})}function As(){for(var R=0;R<ir;++R){var ot=mn[R];ot&&(ot.bindCount=0,ot.unit=-1,mn[R]=null),x.activeTexture(Nc+R),x.bindTexture(Za,null),x.bindTexture(a1,null)}}return{create2D:oo,createCube:po,clear:gn,getTexture:function(R){return null},restore:t0,refresh:As}}var N0=36161,lf=32854,Xp=32855,Yp=36194,Kp=33189,Qp=36168,Zp=34041,Jp=35907,tv=34836,ev=34842,ov=34843,Ia=[];Ia[lf]=2,Ia[Xp]=2,Ia[Yp]=2,Ia[Kp]=2,Ia[Qp]=1,Ia[Zp]=4,Ia[Jp]=4,Ia[tv]=16,Ia[ev]=8,Ia[ov]=6;function nv(x,k,C){return Ia[x]*k*C}var ow=function(x,k,C,et,lt){var J={rgba4:lf,rgb565:Yp,"rgb5 a1":Xp,depth:Kp,stencil:Qp,"depth stencil":Zp};k.ext_srgb&&(J.srgba=Jp),k.ext_color_buffer_half_float&&(J.rgba16f=ev,J.rgb16f=ov),k.webgl_color_buffer_float&&(J.rgba32f=tv);var nt=[];Object.keys(J).forEach(function(wt){var Ct=J[wt];nt[Ct]=wt});var yt=0,Mt={};function At(wt){this.id=yt++,this.refCount=1,this.renderbuffer=wt,this.format=lf,this.width=0,this.height=0,lt.profile&&(this.stats={size:0})}At.prototype.decRef=function(){--this.refCount<=0&&Et(this)};function Et(wt){var Ct=wt.renderbuffer;S(Ct,"must not double destroy renderbuffer"),x.bindRenderbuffer(N0,null),x.deleteRenderbuffer(Ct),wt.renderbuffer=null,wt.refCount=0,delete Mt[wt.id],et.renderbufferCount--}function Rt(wt,Ct){var W=new At(x.createRenderbuffer());Mt[W.id]=W,et.renderbufferCount++;function rt(jt,dt){var Xt=0,xt=0,Pt=lf;if(typeof jt=="object"&&jt){var vt=jt;if("shape"in vt){var It=vt.shape;S(Array.isArray(It)&&It.length>=2,"invalid renderbuffer shape"),Xt=It[0]|0,xt=It[1]|0}else"radius"in vt&&(Xt=xt=vt.radius|0),"width"in vt&&(Xt=vt.width|0),"height"in vt&&(xt=vt.height|0);"format"in vt&&(S.parameter(vt.format,J,"invalid renderbuffer format"),Pt=J[vt.format])}else typeof jt=="number"?(Xt=jt|0,typeof dt=="number"?xt=dt|0:xt=Xt):jt?S.raise("invalid arguments to renderbuffer constructor"):Xt=xt=1;if(S(Xt>0&&xt>0&&Xt<=C.maxRenderbufferSize&&xt<=C.maxRenderbufferSize,"invalid renderbuffer size"),!(Xt===W.width&&xt===W.height&&Pt===W.format))return rt.width=W.width=Xt,rt.height=W.height=xt,W.format=Pt,x.bindRenderbuffer(N0,W.renderbuffer),x.renderbufferStorage(N0,Pt,Xt,xt),S(x.getError()===0,"invalid render buffer format"),lt.profile&&(W.stats.size=nv(W.format,W.width,W.height)),rt.format=nt[W.format],rt}function kt(jt,dt){var Xt=jt|0,xt=dt|0||Xt;return Xt===W.width&&xt===W.height||(S(Xt>0&&xt>0&&Xt<=C.maxRenderbufferSize&&xt<=C.maxRenderbufferSize,"invalid renderbuffer size"),rt.width=W.width=Xt,rt.height=W.height=xt,x.bindRenderbuffer(N0,W.renderbuffer),x.renderbufferStorage(N0,W.format,Xt,xt),S(x.getError()===0,"invalid render buffer format"),lt.profile&&(W.stats.size=nv(W.format,W.width,W.height))),rt}return rt(wt,Ct),rt.resize=kt,rt._reglType="renderbuffer",rt._renderbuffer=W,lt.profile&&(rt.stats=W.stats),rt.destroy=function(){W.decRef()},rt}lt.profile&&(et.getTotalRenderbufferSize=function(){var wt=0;return Object.keys(Mt).forEach(function(Ct){wt+=Mt[Ct].stats.size}),wt});function qt(){ea(Mt).forEach(function(wt){wt.renderbuffer=x.createRenderbuffer(),x.bindRenderbuffer(N0,wt.renderbuffer),x.renderbufferStorage(N0,wt.format,wt.width,wt.height)}),x.bindRenderbuffer(N0,null)}return{create:Rt,clear:function(){ea(Mt).forEach(Et)},restore:qt}},h0=36160,_1=36161,ws=3553,ff=34069,rv=36064,av=36096,sv=36128,iv=33306,cv=36053,nw=36054,rw=36055,aw=36057,sw=36061,iw=36193,cw=5121,lw=5126,lv=6407,fv=6408,fw=6402,hw=[lv,fv],M1=[];M1[fv]=4,M1[lv]=3;var hf=[];hf[cw]=1,hf[lw]=4,hf[iw]=2;var uw=32854,dw=32855,pw=36194,vw=33189,mw=36168,hv=34041,gw=35907,xw=34836,bw=34842,yw=34843,ww=[uw,dw,pw,gw,bw,yw,xw],gi={};gi[cv]="complete",gi[nw]="incomplete attachment",gi[aw]="incomplete dimensions",gi[rw]="incomplete, missing attachment",gi[sw]="unsupported";function _w(x,k,C,et,lt,J){var nt={cur:null,next:null,dirty:!1,setFBO:null},yt=["rgba"],Mt=["rgba4","rgb565","rgb5 a1"];k.ext_srgb&&Mt.push("srgba"),k.ext_color_buffer_half_float&&Mt.push("rgba16f","rgb16f"),k.webgl_color_buffer_float&&Mt.push("rgba32f");var At=["uint8"];k.oes_texture_half_float&&At.push("half float","float16"),k.oes_texture_float&&At.push("float","float32");function Et(Gt,Tt,ut){this.target=Gt,this.texture=Tt,this.renderbuffer=ut;var Re=0,Be=0;Tt?(Re=Tt.width,Be=Tt.height):ut&&(Re=ut.width,Be=ut.height),this.width=Re,this.height=Be}function Rt(Gt){Gt&&(Gt.texture&&Gt.texture._texture.decRef(),Gt.renderbuffer&&Gt.renderbuffer._renderbuffer.decRef())}function qt(Gt,Tt,ut){if(Gt)if(Gt.texture){var Re=Gt.texture._texture,Be=Math.max(1,Re.width),ee=Math.max(1,Re.height);S(Be===Tt&&ee===ut,"inconsistent width/height for supplied texture"),Re.refCount+=1}else{var Ze=Gt.renderbuffer._renderbuffer;S(Ze.width===Tt&&Ze.height===ut,"inconsistent width/height for renderbuffer"),Ze.refCount+=1}}function wt(Gt,Tt){Tt&&(Tt.texture?x.framebufferTexture2D(h0,Gt,Tt.target,Tt.texture._texture.texture,0):x.framebufferRenderbuffer(h0,Gt,_1,Tt.renderbuffer._renderbuffer.renderbuffer))}function Ct(Gt){var Tt=ws,ut=null,Re=null,Be=Gt;typeof Gt=="object"&&(Be=Gt.data,"target"in Gt&&(Tt=Gt.target|0)),S.type(Be,"function","invalid attachment data");var ee=Be._reglType;return ee==="texture2d"?(ut=Be,S(Tt===ws)):ee==="textureCube"?(ut=Be,S(Tt>=ff&&Tt<ff+6,"invalid cube map target")):ee==="renderbuffer"?(Re=Be,Tt=_1):S.raise("invalid regl object for attachment"),new Et(Tt,ut,Re)}function W(Gt,Tt,ut,Re,Be){if(ut){var ee=et.create2D({width:Gt,height:Tt,format:Re,type:Be});return ee._texture.refCount=0,new Et(ws,ee,null)}else{var Ze=lt.create({width:Gt,height:Tt,format:Re});return Ze._renderbuffer.refCount=0,new Et(_1,null,Ze)}}function rt(Gt){return Gt&&(Gt.texture||Gt.renderbuffer)}function kt(Gt,Tt,ut){Gt&&(Gt.texture?Gt.texture.resize(Tt,ut):Gt.renderbuffer&&Gt.renderbuffer.resize(Tt,ut),Gt.width=Tt,Gt.height=ut)}var jt=0,dt={};function Xt(){this.id=jt++,dt[this.id]=this,this.framebuffer=x.createFramebuffer(),this.width=0,this.height=0,this.colorAttachments=[],this.depthAttachment=null,this.stencilAttachment=null,this.depthStencilAttachment=null}function xt(Gt){Gt.colorAttachments.forEach(Rt),Rt(Gt.depthAttachment),Rt(Gt.stencilAttachment),Rt(Gt.depthStencilAttachment)}function Pt(Gt){var Tt=Gt.framebuffer;S(Tt,"must not double destroy framebuffer"),x.deleteFramebuffer(Tt),Gt.framebuffer=null,J.framebufferCount--,delete dt[Gt.id]}function vt(Gt){var Tt;x.bindFramebuffer(h0,Gt.framebuffer);var ut=Gt.colorAttachments;for(Tt=0;Tt<ut.length;++Tt)wt(rv+Tt,ut[Tt]);for(Tt=ut.length;Tt<C.maxColorAttachments;++Tt)x.framebufferTexture2D(h0,rv+Tt,ws,null,0);x.framebufferTexture2D(h0,iv,ws,null,0),x.framebufferTexture2D(h0,av,ws,null,0),x.framebufferTexture2D(h0,sv,ws,null,0),wt(av,Gt.depthAttachment),wt(sv,Gt.stencilAttachment),wt(iv,Gt.depthStencilAttachment);var Re=x.checkFramebufferStatus(h0);!x.isContextLost()&&Re!==cv&&S.raise("framebuffer configuration not supported, status = "+gi[Re]),x.bindFramebuffer(h0,nt.next?nt.next.framebuffer:null),nt.cur=nt.next,x.getError()}function It(Gt,Tt){var ut=new Xt;J.framebufferCount++;function Re(ee,Ze){var Fe;S(nt.next!==ut,"can not update framebuffer which is currently in use");var Ve=0,xo=0,Mn=!0,Dn=!0,ro=null,zn=!0,Vo="rgba",En="uint8",Rn=1,Nn=null,Qn=null,ir=null,mn=!1;if(typeof ee=="number")Ve=ee|0,xo=Ze|0||Ve;else if(!ee)Ve=xo=1;else{S.type(ee,"object","invalid arguments for framebuffer");var Ue=ee;if("shape"in Ue){var cr=Ue.shape;S(Array.isArray(cr)&&cr.length>=2,"invalid shape for framebuffer"),Ve=cr[0],xo=cr[1]}else"radius"in Ue&&(Ve=xo=Ue.radius),"width"in Ue&&(Ve=Ue.width),"height"in Ue&&(xo=Ue.height);("color"in Ue||"colors"in Ue)&&(ro=Ue.color||Ue.colors,Array.isArray(ro)&&S(ro.length===1||k.webgl_draw_buffers,"multiple render targets not supported")),ro||("colorCount"in Ue&&(Rn=Ue.colorCount|0,S(Rn>0,"invalid color buffer count")),"colorTexture"in Ue&&(zn=!!Ue.colorTexture,Vo="rgba4"),"colorType"in Ue&&(En=Ue.colorType,zn?(S(k.oes_texture_float||!(En==="float"||En==="float32"),"you must enable OES_texture_float in order to use floating point framebuffer objects"),S(k.oes_texture_half_float||!(En==="half float"||En==="float16"),"you must enable OES_texture_half_float in order to use 16-bit floating point framebuffer objects")):En==="half float"||En==="float16"?(S(k.ext_color_buffer_half_float,"you must enable EXT_color_buffer_half_float to use 16-bit render buffers"),Vo="rgba16f"):(En==="float"||En==="float32")&&(S(k.webgl_color_buffer_float,"you must enable WEBGL_color_buffer_float in order to use 32-bit floating point renderbuffers"),Vo="rgba32f"),S.oneOf(En,At,"invalid color type")),"colorFormat"in Ue&&(Vo=Ue.colorFormat,yt.indexOf(Vo)>=0?zn=!0:Mt.indexOf(Vo)>=0?zn=!1:zn?S.oneOf(Ue.colorFormat,yt,"invalid color format for texture"):S.oneOf(Ue.colorFormat,Mt,"invalid color format for renderbuffer"))),("depthTexture"in Ue||"depthStencilTexture"in Ue)&&(mn=!!(Ue.depthTexture||Ue.depthStencilTexture),S(!mn||k.webgl_depth_texture,"webgl_depth_texture extension not supported")),"depth"in Ue&&(typeof Ue.depth=="boolean"?Mn=Ue.depth:(Nn=Ue.depth,Dn=!1)),"stencil"in Ue&&(typeof Ue.stencil=="boolean"?Dn=Ue.stencil:(Qn=Ue.stencil,Mn=!1)),"depthStencil"in Ue&&(typeof Ue.depthStencil=="boolean"?Mn=Dn=Ue.depthStencil:(ir=Ue.depthStencil,Mn=!1,Dn=!1))}var To=null,we=null,oo=null,po=null;if(Array.isArray(ro))To=ro.map(Ct);else if(ro)To=[Ct(ro)];else for(To=new Array(Rn),Fe=0;Fe<Rn;++Fe)To[Fe]=W(Ve,xo,zn,Vo,En);S(k.webgl_draw_buffers||To.length<=1,"you must enable the WEBGL_draw_buffers extension in order to use multiple color buffers."),S(To.length<=C.maxColorAttachments,"too many color attachments, not supported"),Ve=Ve||To[0].width,xo=xo||To[0].height,Nn?we=Ct(Nn):Mn&&!Dn&&(we=W(Ve,xo,mn,"depth","uint32")),Qn?oo=Ct(Qn):Dn&&!Mn&&(oo=W(Ve,xo,!1,"stencil","uint8")),ir?po=Ct(ir):!Nn&&!Qn&&Dn&&Mn&&(po=W(Ve,xo,mn,"depth stencil","depth stencil")),S(!!Nn+!!Qn+!!ir<=1,"invalid framebuffer configuration, can specify exactly one depth/stencil attachment");var gn=null;for(Fe=0;Fe<To.length;++Fe)if(qt(To[Fe],Ve,xo),S(!To[Fe]||To[Fe].texture&&hw.indexOf(To[Fe].texture._texture.format)>=0||To[Fe].renderbuffer&&ww.indexOf(To[Fe].renderbuffer._renderbuffer.format)>=0,"framebuffer color attachment "+Fe+" is invalid"),To[Fe]&&To[Fe].texture){var t0=M1[To[Fe].texture._texture.format]*hf[To[Fe].texture._texture.type];gn===null?gn=t0:S(gn===t0,"all color attachments much have the same number of bits per pixel.")}return qt(we,Ve,xo),S(!we||we.texture&&we.texture._texture.format===fw||we.renderbuffer&&we.renderbuffer._renderbuffer.format===vw,"invalid depth attachment for framebuffer object"),qt(oo,Ve,xo),S(!oo||oo.renderbuffer&&oo.renderbuffer._renderbuffer.format===mw,"invalid stencil attachment for framebuffer object"),qt(po,Ve,xo),S(!po||po.texture&&po.texture._texture.format===hv||po.renderbuffer&&po.renderbuffer._renderbuffer.format===hv,"invalid depth-stencil attachment for framebuffer object"),xt(ut),ut.width=Ve,ut.height=xo,ut.colorAttachments=To,ut.depthAttachment=we,ut.stencilAttachment=oo,ut.depthStencilAttachment=po,Re.color=To.map(rt),Re.depth=rt(we),Re.stencil=rt(oo),Re.depthStencil=rt(po),Re.width=ut.width,Re.height=ut.height,vt(ut),Re}function Be(ee,Ze){S(nt.next!==ut,"can not resize a framebuffer which is currently in use");var Fe=Math.max(ee|0,1),Ve=Math.max(Ze|0||Fe,1);if(Fe===ut.width&&Ve===ut.height)return Re;for(var xo=ut.colorAttachments,Mn=0;Mn<xo.length;++Mn)kt(xo[Mn],Fe,Ve);return kt(ut.depthAttachment,Fe,Ve),kt(ut.stencilAttachment,Fe,Ve),kt(ut.depthStencilAttachment,Fe,Ve),ut.width=Re.width=Fe,ut.height=Re.height=Ve,vt(ut),Re}return Re(Gt,Tt),e(Re,{resize:Be,_reglType:"framebuffer",_framebuffer:ut,destroy:function(){Pt(ut),xt(ut)},use:function(ee){nt.setFBO({framebuffer:Re},ee)}})}function me(Gt){var Tt=Array(6);function ut(Be){var ee;S(Tt.indexOf(nt.next)<0,"can not update framebuffer which is currently in use");var Ze={color:null},Fe=0,Ve=null,xo="rgba",Mn="uint8",Dn=1;if(typeof Be=="number")Fe=Be|0;else if(!Be)Fe=1;else{S.type(Be,"object","invalid arguments for framebuffer");var ro=Be;if("shape"in ro){var zn=ro.shape;S(Array.isArray(zn)&&zn.length>=2,"invalid shape for framebuffer"),S(zn[0]===zn[1],"cube framebuffer must be square"),Fe=zn[0]}else"radius"in ro&&(Fe=ro.radius|0),"width"in ro?(Fe=ro.width|0,"height"in ro&&S(ro.height===Fe,"must be square")):"height"in ro&&(Fe=ro.height|0);("color"in ro||"colors"in ro)&&(Ve=ro.color||ro.colors,Array.isArray(Ve)&&S(Ve.length===1||k.webgl_draw_buffers,"multiple render targets not supported")),Ve||("colorCount"in ro&&(Dn=ro.colorCount|0,S(Dn>0,"invalid color buffer count")),"colorType"in ro&&(S.oneOf(ro.colorType,At,"invalid color type"),Mn=ro.colorType),"colorFormat"in ro&&(xo=ro.colorFormat,S.oneOf(ro.colorFormat,yt,"invalid color format for texture"))),"depth"in ro&&(Ze.depth=ro.depth),"stencil"in ro&&(Ze.stencil=ro.stencil),"depthStencil"in ro&&(Ze.depthStencil=ro.depthStencil)}var Vo;if(Ve)if(Array.isArray(Ve))for(Vo=[],ee=0;ee<Ve.length;++ee)Vo[ee]=Ve[ee];else Vo=[Ve];else{Vo=Array(Dn);var En={radius:Fe,format:xo,type:Mn};for(ee=0;ee<Dn;++ee)Vo[ee]=et.createCube(En)}for(Ze.color=Array(Vo.length),ee=0;ee<Vo.length;++ee){var Rn=Vo[ee];S(typeof Rn=="function"&&Rn._reglType==="textureCube","invalid cube map"),Fe=Fe||Rn.width,S(Rn.width===Fe&&Rn.height===Fe,"invalid cube map shape"),Ze.color[ee]={target:ff,data:Vo[ee]}}for(ee=0;ee<6;++ee){for(var Nn=0;Nn<Vo.length;++Nn)Ze.color[Nn].target=ff+ee;ee>0&&(Ze.depth=Tt[0].depth,Ze.stencil=Tt[0].stencil,Ze.depthStencil=Tt[0].depthStencil),Tt[ee]?Tt[ee](Ze):Tt[ee]=It(Ze)}return e(ut,{width:Fe,height:Fe,color:Vo})}function Re(Be){var ee,Ze=Be|0;if(S(Ze>0&&Ze<=C.maxCubeMapSize,"invalid radius for cube fbo"),Ze===ut.width)return ut;var Fe=ut.color;for(ee=0;ee<Fe.length;++ee)Fe[ee].resize(Ze);for(ee=0;ee<6;++ee)Tt[ee].resize(Ze);return ut.width=ut.height=Ze,ut}return ut(Gt),e(ut,{faces:Tt,resize:Re,_reglType:"framebufferCube",destroy:function(){Tt.forEach(function(Be){Be.destroy()})}})}function Ie(){nt.cur=null,nt.next=null,nt.dirty=!0,ea(dt).forEach(function(Gt){Gt.framebuffer=x.createFramebuffer(),vt(Gt)})}return e(nt,{getFramebuffer:function(Gt){if(typeof Gt=="function"&&Gt._reglType==="framebuffer"){var Tt=Gt._framebuffer;if(Tt instanceof Xt)return Tt}return null},create:It,createCube:me,clear:function(){ea(dt).forEach(Pt)},restore:Ie})}var Mw=5126,uv=34962;function E1(){this.state=0,this.x=0,this.y=0,this.z=0,this.w=0,this.buffer=null,this.size=0,this.normalized=!1,this.type=Mw,this.offset=0,this.stride=0,this.divisor=0}function Ew(x,k,C,et,lt){for(var J=C.maxAttributes,nt=new Array(J),yt=0;yt<J;++yt)nt[yt]=new E1;var Mt=0,At={},Et={Record:E1,scope:{},state:nt,currentVAO:null,targetVAO:null,restore:qt()?dt:function(){},createVAO:Xt,getVAO:Ct,destroyBuffer:Rt,setVAO:qt()?W:rt,clear:qt()?kt:function(){}};function Rt(xt){for(var Pt=0;Pt<nt.length;++Pt){var vt=nt[Pt];vt.buffer===xt&&(x.disableVertexAttribArray(Pt),vt.buffer=null)}}function qt(){return k.oes_vertex_array_object}function wt(){return k.angle_instanced_arrays}function Ct(xt){return typeof xt=="function"&&xt._vao?xt._vao:null}function W(xt){if(xt!==Et.currentVAO){var Pt=qt();xt?Pt.bindVertexArrayOES(xt.vao):Pt.bindVertexArrayOES(null),Et.currentVAO=xt}}function rt(xt){if(xt!==Et.currentVAO){if(xt)xt.bindAttrs();else for(var Pt=wt(),vt=0;vt<nt.length;++vt){var It=nt[vt];It.buffer?(x.enableVertexAttribArray(vt),x.vertexAttribPointer(vt,It.size,It.type,It.normalized,It.stride,It.offfset),Pt&&It.divisor&&Pt.vertexAttribDivisorANGLE(vt,It.divisor)):(x.disableVertexAttribArray(vt),x.vertexAttrib4f(vt,It.x,It.y,It.z,It.w))}Et.currentVAO=xt}}function kt(){ea(At).forEach(function(xt){xt.destroy()})}function jt(){this.id=++Mt,this.attributes=[];var xt=qt();xt?this.vao=xt.createVertexArrayOES():this.vao=null,At[this.id]=this,this.buffers=[]}jt.prototype.bindAttrs=function(){for(var xt=wt(),Pt=this.attributes,vt=0;vt<Pt.length;++vt){var It=Pt[vt];It.buffer?(x.enableVertexAttribArray(vt),x.bindBuffer(uv,It.buffer.buffer),x.vertexAttribPointer(vt,It.size,It.type,It.normalized,It.stride,It.offset),xt&&It.divisor&&xt.vertexAttribDivisorANGLE(vt,It.divisor)):(x.disableVertexAttribArray(vt),x.vertexAttrib4f(vt,It.x,It.y,It.z,It.w))}for(var me=Pt.length;me<J;++me)x.disableVertexAttribArray(me)},jt.prototype.refresh=function(){var xt=qt();xt&&(xt.bindVertexArrayOES(this.vao),this.bindAttrs(),Et.currentVAO=this)},jt.prototype.destroy=function(){if(this.vao){var xt=qt();this===Et.currentVAO&&(Et.currentVAO=null,xt.bindVertexArrayOES(null)),xt.deleteVertexArrayOES(this.vao),this.vao=null}At[this.id]&&(delete At[this.id],et.vaoCount-=1)};function dt(){var xt=qt();xt&&ea(At).forEach(function(Pt){Pt.refresh()})}function Xt(xt){var Pt=new jt;et.vaoCount+=1;function vt(It){S(Array.isArray(It),"arguments to vertex array constructor must be an array"),S(It.length<J,"too many attributes"),S(It.length>0,"must specify at least one attribute");var me={},Ie=Pt.attributes;Ie.length=It.length;for(var Gt=0;Gt<It.length;++Gt){var Tt=It[Gt],ut=Ie[Gt]=new E1,Re=Tt.data||Tt;if(Array.isArray(Re)||t(Re)||Pa(Re)){var Be;Pt.buffers[Gt]&&(Be=Pt.buffers[Gt],t(Re)&&Be._buffer.byteLength>=Re.byteLength?Be.subdata(Re):(Be.destroy(),Pt.buffers[Gt]=null)),Pt.buffers[Gt]||(Be=Pt.buffers[Gt]=lt.create(Tt,uv,!1,!0)),ut.buffer=lt.getBuffer(Be),ut.size=ut.buffer.dimension|0,ut.normalized=!1,ut.type=ut.buffer.dtype,ut.offset=0,ut.stride=0,ut.divisor=0,ut.state=1,me[Gt]=1}else lt.getBuffer(Tt)?(ut.buffer=lt.getBuffer(Tt),ut.size=ut.buffer.dimension|0,ut.normalized=!1,ut.type=ut.buffer.dtype,ut.offset=0,ut.stride=0,ut.divisor=0,ut.state=1):lt.getBuffer(Tt.buffer)?(ut.buffer=lt.getBuffer(Tt.buffer),ut.size=(+Tt.size||ut.buffer.dimension)|0,ut.normalized=!!Tt.normalized||!1,"type"in Tt?(S.parameter(Tt.type,gs,"invalid buffer type"),ut.type=gs[Tt.type]):ut.type=ut.buffer.dtype,ut.offset=(Tt.offset||0)|0,ut.stride=(Tt.stride||0)|0,ut.divisor=(Tt.divisor||0)|0,ut.state=1,S(ut.size>=1&&ut.size<=4,"size must be between 1 and 4"),S(ut.offset>=0,"invalid offset"),S(ut.stride>=0&&ut.stride<=255,"stride must be between 0 and 255"),S(ut.divisor>=0,"divisor must be positive"),S(!ut.divisor||!!k.angle_instanced_arrays,"ANGLE_instanced_arrays must be enabled to use divisor")):"x"in Tt?(S(Gt>0,"first attribute must not be a constant"),ut.x=+Tt.x||0,ut.y=+Tt.y||0,ut.z=+Tt.z||0,ut.w=+Tt.w||0,ut.state=2):S(!1,"invalid attribute spec for location "+Gt)}for(var ee=0;ee<Pt.buffers.length;++ee)!me[ee]&&Pt.buffers[ee]&&(Pt.buffers[ee].destroy(),Pt.buffers[ee]=null);return Pt.refresh(),vt}return vt.destroy=function(){for(var It=0;It<Pt.buffers.length;++It)Pt.buffers[It]&&Pt.buffers[It].destroy();Pt.buffers.length=0,Pt.destroy()},vt._vao=Pt,vt._reglType="vao",vt(xt)}return Et}var dv=35632,Sw=35633,kw=35718,Aw=35721;function Tw(x,k,C,et){var lt={},J={};function nt(W,rt,kt,jt){this.name=W,this.id=rt,this.location=kt,this.info=jt}function yt(W,rt){for(var kt=0;kt<W.length;++kt)if(W[kt].id===rt.id){W[kt].location=rt.location;return}W.push(rt)}function Mt(W,rt,kt){var jt=W===dv?lt:J,dt=jt[rt];if(!dt){var Xt=k.str(rt);dt=x.createShader(W),x.shaderSource(dt,Xt),x.compileShader(dt),S.shaderError(x,dt,Xt,W,kt),jt[rt]=dt}return dt}var At={},Et=[],Rt=0;function qt(W,rt){this.id=Rt++,this.fragId=W,this.vertId=rt,this.program=null,this.uniforms=[],this.attributes=[],this.refCount=1,et.profile&&(this.stats={uniformsCount:0,attributesCount:0})}function wt(W,rt,kt){var jt,dt,Xt=Mt(dv,W.fragId),xt=Mt(Sw,W.vertId),Pt=W.program=x.createProgram();if(x.attachShader(Pt,Xt),x.attachShader(Pt,xt),kt)for(jt=0;jt<kt.length;++jt){var vt=kt[jt];x.bindAttribLocation(Pt,vt[0],vt[1])}x.linkProgram(Pt),S.linkError(x,Pt,k.str(W.fragId),k.str(W.vertId),rt);var It=x.getProgramParameter(Pt,kw);et.profile&&(W.stats.uniformsCount=It);var me=W.uniforms;for(jt=0;jt<It;++jt)if(dt=x.getActiveUniform(Pt,jt),dt)if(dt.size>1)for(var Ie=0;Ie<dt.size;++Ie){var Gt=dt.name.replace("[0]","["+Ie+"]");yt(me,new nt(Gt,k.id(Gt),x.getUniformLocation(Pt,Gt),dt))}else yt(me,new nt(dt.name,k.id(dt.name),x.getUniformLocation(Pt,dt.name),dt));var Tt=x.getProgramParameter(Pt,Aw);et.profile&&(W.stats.attributesCount=Tt);var ut=W.attributes;for(jt=0;jt<Tt;++jt)dt=x.getActiveAttrib(Pt,jt),dt&&yt(ut,new nt(dt.name,k.id(dt.name),x.getAttribLocation(Pt,dt.name),dt))}et.profile&&(C.getMaxUniformsCount=function(){var W=0;return Et.forEach(function(rt){rt.stats.uniformsCount>W&&(W=rt.stats.uniformsCount)}),W},C.getMaxAttributesCount=function(){var W=0;return Et.forEach(function(rt){rt.stats.attributesCount>W&&(W=rt.stats.attributesCount)}),W});function Ct(){lt={},J={};for(var W=0;W<Et.length;++W)wt(Et[W],null,Et[W].attributes.map(function(rt){return[rt.location,rt.name]}))}return{clear:function(){var W=x.deleteShader.bind(x);ea(lt).forEach(W),lt={},ea(J).forEach(W),J={},Et.forEach(function(rt){x.deleteProgram(rt.program)}),Et.length=0,At={},C.shaderCount=0},program:function(W,rt,kt,jt){S.command(W>=0,"missing vertex shader",kt),S.command(rt>=0,"missing fragment shader",kt);var dt=At[rt];dt||(dt=At[rt]={});var Xt=dt[W];if(Xt&&(Xt.refCount++,!jt))return Xt;var xt=new qt(rt,W);return C.shaderCount++,wt(xt,kt,jt),Xt||(dt[W]=xt),Et.push(xt),e(xt,{destroy:function(){if(xt.refCount--,xt.refCount<=0){x.deleteProgram(xt.program);var Pt=Et.indexOf(xt);Et.splice(Pt,1),C.shaderCount--}dt[xt.vertId].refCount<=0&&(x.deleteShader(J[xt.vertId]),delete J[xt.vertId],delete At[xt.fragId][xt.vertId]),Object.keys(At[xt.fragId]).length||(x.deleteShader(lt[xt.fragId]),delete lt[xt.fragId],delete At[xt.fragId])}})},restore:Ct,shader:Mt,frag:-1,vert:-1}}var Lw=6408,Cc=5121,zw=3333,uf=5126;function Rw(x,k,C,et,lt,J,nt){function yt(Et){var Rt;k.next===null?(S(lt.preserveDrawingBuffer,'you must create a webgl context with "preserveDrawingBuffer":true in order to read pixels from the drawing buffer'),Rt=Cc):(S(k.next.colorAttachments[0].texture!==null,"You cannot read from a renderbuffer"),Rt=k.next.colorAttachments[0].texture._texture.type,J.oes_texture_float?(S(Rt===Cc||Rt===uf,"Reading from a framebuffer is only allowed for the types 'uint8' and 'float'"),Rt===uf&&S(nt.readFloat,"Reading 'float' values is not permitted in your browser. For a fallback, please see: https://www.npmjs.com/package/glsl-read-float")):S(Rt===Cc,"Reading from a framebuffer is only allowed for the type 'uint8'"));var qt=0,wt=0,Ct=et.framebufferWidth,W=et.framebufferHeight,rt=null;t(Et)?rt=Et:Et&&(S.type(Et,"object","invalid arguments to regl.read()"),qt=Et.x|0,wt=Et.y|0,S(qt>=0&&qt<et.framebufferWidth,"invalid x offset for regl.read"),S(wt>=0&&wt<et.framebufferHeight,"invalid y offset for regl.read"),Ct=(Et.width||et.framebufferWidth-qt)|0,W=(Et.height||et.framebufferHeight-wt)|0,rt=Et.data||null),rt&&(Rt===Cc?S(rt instanceof Uint8Array,"buffer must be 'Uint8Array' when reading from a framebuffer of type 'uint8'"):Rt===uf&&S(rt instanceof Float32Array,"buffer must be 'Float32Array' when reading from a framebuffer of type 'float'")),S(Ct>0&&Ct+qt<=et.framebufferWidth,"invalid width for read pixels"),S(W>0&&W+wt<=et.framebufferHeight,"invalid height for read pixels"),C();var kt=Ct*W*4;return rt||(Rt===Cc?rt=new Uint8Array(kt):Rt===uf&&(rt=rt||new Float32Array(kt))),S.isTypedArray(rt,"data buffer for regl.read() must be a typedarray"),S(rt.byteLength>=kt,"data buffer for regl.read() too small"),x.pixelStorei(zw,4),x.readPixels(qt,wt,Ct,W,Lw,Rt,rt),rt}function Mt(Et){var Rt;return k.setFBO({framebuffer:Et.framebuffer},function(){Rt=yt(Et)}),Rt}function At(Et){return!Et||!("framebuffer"in Et)?yt(Et):Mt(Et)}return At}function xi(x){return Array.prototype.slice.call(x)}function bi(x){return xi(x).join("")}function Nw(){var x=0,k=[],C=[];function et(Rt){for(var qt=0;qt<C.length;++qt)if(C[qt]===Rt)return k[qt];var wt="g"+x++;return k.push(wt),C.push(Rt),wt}function lt(){var Rt=[];function qt(){Rt.push.apply(Rt,xi(arguments))}var wt=[];function Ct(){var W="v"+x++;return wt.push(W),arguments.length>0&&(Rt.push(W,"="),Rt.push.apply(Rt,xi(arguments)),Rt.push(";")),W}return e(qt,{def:Ct,toString:function(){return bi([wt.length>0?"var "+wt.join(",")+";":"",bi(Rt)])}})}function J(){var Rt=lt(),qt=lt(),wt=Rt.toString,Ct=qt.toString;function W(rt,kt){qt(rt,kt,"=",Rt.def(rt,kt),";")}return e(function(){Rt.apply(Rt,xi(arguments))},{def:Rt.def,entry:Rt,exit:qt,save:W,set:function(rt,kt,jt){W(rt,kt),Rt(rt,kt,"=",jt,";")},toString:function(){return wt()+Ct()}})}function nt(){var Rt=bi(arguments),qt=J(),wt=J(),Ct=qt.toString,W=wt.toString;return e(qt,{then:function(){return qt.apply(qt,xi(arguments)),this},else:function(){return wt.apply(wt,xi(arguments)),this},toString:function(){var rt=W();return rt&&(rt="else{"+rt+"}"),bi(["if(",Rt,"){",Ct(),"}",rt])}})}var yt=lt(),Mt={};function At(Rt,qt){var wt=[];function Ct(){var dt="a"+wt.length;return wt.push(dt),dt}qt=qt||0;for(var W=0;W<qt;++W)Ct();var rt=J(),kt=rt.toString,jt=Mt[Rt]=e(rt,{arg:Ct,toString:function(){return bi(["function(",wt.join(),"){",kt(),"}"])}});return jt}function Et(){var Rt=['"use strict";',yt,"return {"];Object.keys(Mt).forEach(function(Ct){Rt.push('"',Ct,'":',Mt[Ct].toString(),",")}),Rt.push("}");var qt=bi(Rt).replace(/;/g,`;
`).replace(/}/g,`}
`).replace(/{/g,`{
`),wt=Function.apply(null,k.concat(qt));return wt.apply(null,C)}return{global:yt,link:et,block:lt,proc:At,scope:J,cond:nt,compile:Et}}var yi="xyzw".split(""),pv=5121,wi=1,S1=2,k1=0,A1=1,T1=2,L1=3,df=4,vv=5,mv=6,gv="dither",xv="blend.enable",bv="blend.color",z1="blend.equation",R1="blend.func",yv="depth.enable",wv="depth.func",_v="depth.range",Mv="depth.mask",N1="colorMask",Ev="cull.enable",Sv="cull.face",C1="frontFace",O1="lineWidth",kv="polygonOffset.enable",P1="polygonOffset.offset",Av="sample.alpha",Tv="sample.enable",I1="sample.coverage",Lv="stencil.enable",zv="stencil.mask",$1="stencil.func",F1="stencil.opFront",Oc="stencil.opBack",Rv="scissor.enable",pf="scissor.box",u0="viewport",Pc="profile",_s="framebuffer",Ic="vert",$c="frag",Ms="elements",Es="primitive",Ss="count",vf="offset",mf="instances",Fc="vao",D1="Width",q1="Height",_i=_s+D1,Mi=_s+q1,Cw=u0+D1,Ow=u0+q1,Nv="drawingBuffer",Cv=Nv+D1,Ov=Nv+q1,Pw=[R1,z1,$1,F1,Oc,I1,u0,pf,P1],Ei=34962,Iw=34963,$w=35632,Fw=35633,Pv=3553,Dw=34067,qw=2884,Gw=3042,Hw=3024,Bw=2960,Uw=2929,jw=3089,Ww=32823,Vw=32926,Xw=32928,G1=5126,gf=35664,xf=35665,bf=35666,H1=5124,yf=35667,wf=35668,_f=35669,B1=35670,Mf=35671,Ef=35672,Sf=35673,Dc=35674,qc=35675,Gc=35676,Hc=35678,Bc=35680,Iv=4,Uc=1028,ks=1029,$v=2304,U1=2305,Yw=32775,Kw=32776,Qw=519,C0=7680,Fv=0,Dv=1,qv=32774,Zw=513,Gv=36160,Jw=36064,Ja={0:0,1:1,zero:0,one:1,"src color":768,"one minus src color":769,"src alpha":770,"one minus src alpha":771,"dst color":774,"one minus dst color":775,"dst alpha":772,"one minus dst alpha":773,"constant color":32769,"one minus constant color":32770,"constant alpha":32771,"one minus constant alpha":32772,"src alpha saturate":776},Hv=["constant color, constant alpha","one minus constant color, constant alpha","constant color, one minus constant alpha","one minus constant color, one minus constant alpha","constant alpha, constant color","constant alpha, one minus constant color","one minus constant alpha, constant color","one minus constant alpha, one minus constant color"],Si={never:512,less:513,"<":513,equal:514,"=":514,"==":514,"===":514,lequal:515,"<=":515,greater:516,">":516,notequal:517,"!=":517,"!==":517,gequal:518,">=":518,always:519},O0={0:0,zero:0,keep:7680,replace:7681,increment:7682,decrement:7683,"increment wrap":34055,"decrement wrap":34056,invert:5386},Bv={frag:$w,vert:Fw},j1={cw:$v,ccw:U1};function kf(x){return Array.isArray(x)||t(x)||Pa(x)}function Uv(x){return x.sort(function(k,C){return k===u0?-1:C===u0?1:k<C?-1:1})}function Ar(x,k,C,et){this.thisDep=x,this.contextDep=k,this.propDep=C,this.append=et}function P0(x){return x&&!(x.thisDep||x.contextDep||x.propDep)}function _n(x){return new Ar(!1,!1,!1,x)}function Ur(x,k){var C=x.type;if(C===k1){var et=x.data.length;return new Ar(!0,et>=1,et>=2,k)}else if(C===df){var lt=x.data;return new Ar(lt.thisDep,lt.contextDep,lt.propDep,k)}else{if(C===vv)return new Ar(!1,!1,!1,k);if(C===mv){for(var J=!1,nt=!1,yt=!1,Mt=0;Mt<x.data.length;++Mt){var At=x.data[Mt];if(At.type===A1)yt=!0;else if(At.type===T1)nt=!0;else if(At.type===L1)J=!0;else if(At.type===k1){J=!0;var Et=At.data;Et>=1&&(nt=!0),Et>=2&&(yt=!0)}else At.type===df&&(J=J||At.data.thisDep,nt=nt||At.data.contextDep,yt=yt||At.data.propDep)}return new Ar(J,nt,yt,k)}else return new Ar(C===L1,C===T1,C===A1,k)}}var jv=new Ar(!1,!1,!1,function(){});function t4(x,k,C,et,lt,J,nt,yt,Mt,At,Et,Rt,qt,wt,Ct){var W=At.Record,rt={add:32774,subtract:32778,"reverse subtract":32779};C.ext_blend_minmax&&(rt.min=Yw,rt.max=Kw);var kt=C.angle_instanced_arrays,jt=C.webgl_draw_buffers,dt={dirty:!0,profile:Ct.profile},Xt={},xt=[],Pt={},vt={};function It(L){return L.replace(".","_")}function me(L,E,P){var U=It(L);xt.push(L),Xt[U]=dt[U]=!!P,Pt[U]=E}function Ie(L,E,P){var U=It(L);xt.push(L),Array.isArray(P)?(dt[U]=P.slice(),Xt[U]=P.slice()):dt[U]=Xt[U]=P,vt[U]=E}me(gv,Hw),me(xv,Gw),Ie(bv,"blendColor",[0,0,0,0]),Ie(z1,"blendEquationSeparate",[qv,qv]),Ie(R1,"blendFuncSeparate",[Dv,Fv,Dv,Fv]),me(yv,Uw,!0),Ie(wv,"depthFunc",Zw),Ie(_v,"depthRange",[0,1]),Ie(Mv,"depthMask",!0),Ie(N1,N1,[!0,!0,!0,!0]),me(Ev,qw),Ie(Sv,"cullFace",ks),Ie(C1,C1,U1),Ie(O1,O1,1),me(kv,Ww),Ie(P1,"polygonOffset",[0,0]),me(Av,Vw),me(Tv,Xw),Ie(I1,"sampleCoverage",[1,!1]),me(Lv,Bw),Ie(zv,"stencilMask",-1),Ie($1,"stencilFunc",[Qw,0,-1]),Ie(F1,"stencilOpSeparate",[Uc,C0,C0,C0]),Ie(Oc,"stencilOpSeparate",[ks,C0,C0,C0]),me(Rv,jw),Ie(pf,"scissor",[0,0,x.drawingBufferWidth,x.drawingBufferHeight]),Ie(u0,u0,[0,0,x.drawingBufferWidth,x.drawingBufferHeight]);var Gt={gl:x,context:qt,strings:k,next:Xt,current:dt,draw:Rt,elements:J,buffer:lt,shader:Et,attributes:At.state,vao:At,uniforms:Mt,framebuffer:yt,extensions:C,timer:wt,isBufferArgs:kf},Tt={primTypes:fi,compareFuncs:Si,blendFuncs:Ja,blendEquations:rt,stencilOps:O0,glTypes:gs,orientationType:j1};S.optional(function(){Gt.isArrayLike=vn}),jt&&(Tt.backBuffer=[ks],Tt.drawBuffer=Ye(et.maxDrawbuffers,function(L){return L===0?[0]:Ye(L,function(E){return Jw+E})}));var ut=0;function Re(){var L=Nw(),E=L.link,P=L.global;L.id=ut++,L.batchId="0";var U=E(Gt),V=L.shared={props:"a0"};Object.keys(Gt).forEach(function(O){V[O]=P.def(U,".",O)}),S.optional(function(){L.CHECK=E(S),L.commandStr=S.guessCommand(),L.command=E(L.commandStr),L.assert=function(O,A,H){O("if(!(",A,"))",this.CHECK,".commandRaise(",E(H),",",this.command,");")},Tt.invalidBlendCombinations=Hv});var F=L.next={},$=L.current={};Object.keys(vt).forEach(function(O){Array.isArray(dt[O])&&(F[O]=P.def(V.next,".",O),$[O]=P.def(V.current,".",O))});var G=L.constants={};Object.keys(Tt).forEach(function(O){G[O]=P.def(JSON.stringify(Tt[O]))}),L.invoke=function(O,A){switch(A.type){case k1:var H=["this",V.context,V.props,L.batchId];return O.def(E(A.data),".call(",H.slice(0,Math.max(A.data.length+1,4)),")");case A1:return O.def(V.props,A.data);case T1:return O.def(V.context,A.data);case L1:return O.def("this",A.data);case df:return A.data.append(L,O),A.data.ref;case vv:return A.data.toString();case mv:return A.data.map(function(Y){return L.invoke(O,Y)})}},L.attribCache={};var z={};return L.scopeAttrib=function(O){var A=k.id(O);if(A in z)return z[A];var H=At.scope[A];H||(H=At.scope[A]=new W);var Y=z[A]=E(H);return Y},L}function Be(L){var E=L.static,P=L.dynamic,U;if(Pc in E){var V=!!E[Pc];U=_n(function($,G){return V}),U.enable=V}else if(Pc in P){var F=P[Pc];U=Ur(F,function($,G){return $.invoke(G,F)})}return U}function ee(L,E){var P=L.static,U=L.dynamic;if(_s in P){var V=P[_s];return V?(V=yt.getFramebuffer(V),S.command(V,"invalid framebuffer object"),_n(function($,G){var z=$.link(V),O=$.shared;G.set(O.framebuffer,".next",z);var A=O.context;return G.set(A,"."+_i,z+".width"),G.set(A,"."+Mi,z+".height"),z})):_n(function($,G){var z=$.shared;G.set(z.framebuffer,".next","null");var O=z.context;return G.set(O,"."+_i,O+"."+Cv),G.set(O,"."+Mi,O+"."+Ov),"null"})}else if(_s in U){var F=U[_s];return Ur(F,function($,G){var z=$.invoke(G,F),O=$.shared,A=O.framebuffer,H=G.def(A,".getFramebuffer(",z,")");S.optional(function(){$.assert(G,"!"+z+"||"+H,"invalid framebuffer object")}),G.set(A,".next",H);var Y=O.context;return G.set(Y,"."+_i,H+"?"+H+".width:"+Y+"."+Cv),G.set(Y,"."+Mi,H+"?"+H+".height:"+Y+"."+Ov),H})}else return null}function Ze(L,E,P){var U=L.static,V=L.dynamic;function F(z){if(z in U){var O=U[z];S.commandType(O,"object","invalid "+z,P.commandStr);var A=!0,H=O.x|0,Y=O.y|0,st,ft;return"width"in O?(st=O.width|0,S.command(st>=0,"invalid "+z,P.commandStr)):A=!1,"height"in O?(ft=O.height|0,S.command(ft>=0,"invalid "+z,P.commandStr)):A=!1,new Ar(!A&&E&&E.thisDep,!A&&E&&E.contextDep,!A&&E&&E.propDep,function(he,je){var oe=he.shared.context,Ee=st;"width"in O||(Ee=je.def(oe,".",_i,"-",H));var De=ft;return"height"in O||(De=je.def(oe,".",Mi,"-",Y)),[H,Y,Ee,De]})}else if(z in V){var at=V[z],St=Ur(at,function(he,je){var oe=he.invoke(je,at);S.optional(function(){he.assert(je,oe+"&&typeof "+oe+'==="object"',"invalid "+z)});var Ee=he.shared.context,De=je.def(oe,".x|0"),bo=je.def(oe,".y|0"),fn=je.def('"width" in ',oe,"?",oe,".width|0:","(",Ee,".",_i,"-",De,")"),Tr=je.def('"height" in ',oe,"?",oe,".height|0:","(",Ee,".",Mi,"-",bo,")");return S.optional(function(){he.assert(je,fn+">=0&&"+Tr+">=0","invalid "+z)}),[De,bo,fn,Tr]});return E&&(St.thisDep=St.thisDep||E.thisDep,St.contextDep=St.contextDep||E.contextDep,St.propDep=St.propDep||E.propDep),St}else return E?new Ar(E.thisDep,E.contextDep,E.propDep,function(he,je){var oe=he.shared.context;return[0,0,je.def(oe,".",_i),je.def(oe,".",Mi)]}):null}var $=F(u0);if($){var G=$;$=new Ar($.thisDep,$.contextDep,$.propDep,function(z,O){var A=G.append(z,O),H=z.shared.context;return O.set(H,"."+Cw,A[2]),O.set(H,"."+Ow,A[3]),A})}return{viewport:$,scissor_box:F(pf)}}function Fe(L,E){var P=L.static,U=typeof P[$c]=="string"&&typeof P[Ic]=="string";if(U){if(Object.keys(E.dynamic).length>0)return null;var V=E.static,F=Object.keys(V);if(F.length>0&&typeof V[F[0]]=="number"){for(var $=[],G=0;G<F.length;++G)S(typeof V[F[G]]=="number","must specify all vertex attribute locations when using vaos"),$.push([V[F[G]]|0,F[G]]);return $}}return null}function Ve(L,E,P){var U=L.static,V=L.dynamic;function F(A){if(A in U){var H=k.id(U[A]);S.optional(function(){Et.shader(Bv[A],H,S.guessCommand())});var Y=_n(function(){return H});return Y.id=H,Y}else if(A in V){var st=V[A];return Ur(st,function(ft,at){var St=ft.invoke(at,st),he=at.def(ft.shared.strings,".id(",St,")");return S.optional(function(){at(ft.shared.shader,".shader(",Bv[A],",",he,",",ft.command,");")}),he})}return null}var $=F($c),G=F(Ic),z=null,O;return P0($)&&P0(G)?(z=Et.program(G.id,$.id,null,P),O=_n(function(A,H){return A.link(z)})):O=new Ar($&&$.thisDep||G&&G.thisDep,$&&$.contextDep||G&&G.contextDep,$&&$.propDep||G&&G.propDep,function(A,H){var Y=A.shared.shader,st;$?st=$.append(A,H):st=H.def(Y,".",$c);var ft;G?ft=G.append(A,H):ft=H.def(Y,".",Ic);var at=Y+".program("+ft+","+st;return S.optional(function(){at+=","+A.command}),H.def(at+")")}),{frag:$,vert:G,progVar:O,program:z}}function xo(L,E){var P=L.static,U=L.dynamic;function V(){if(Ms in P){var A=P[Ms];kf(A)?A=J.getElements(J.create(A,!0)):A&&(A=J.getElements(A),S.command(A,"invalid elements",E.commandStr));var H=_n(function(st,ft){if(A){var at=st.link(A);return st.ELEMENTS=at,at}return st.ELEMENTS=null,null});return H.value=A,H}else if(Ms in U){var Y=U[Ms];return Ur(Y,function(st,ft){var at=st.shared,St=at.isBufferArgs,he=at.elements,je=st.invoke(ft,Y),oe=ft.def("null"),Ee=ft.def(St,"(",je,")"),De=st.cond(Ee).then(oe,"=",he,".createStream(",je,");").else(oe,"=",he,".getElements(",je,");");return S.optional(function(){st.assert(De.else,"!"+je+"||"+oe,"invalid elements")}),ft.entry(De),ft.exit(st.cond(Ee).then(he,".destroyStream(",oe,");")),st.ELEMENTS=oe,oe})}return null}var F=V();function $(){if(Es in P){var A=P[Es];return S.commandParameter(A,fi,"invalid primitve",E.commandStr),_n(function(Y,st){return fi[A]})}else if(Es in U){var H=U[Es];return Ur(H,function(Y,st){var ft=Y.constants.primTypes,at=Y.invoke(st,H);return S.optional(function(){Y.assert(st,at+" in "+ft,"invalid primitive, must be one of "+Object.keys(fi))}),st.def(ft,"[",at,"]")})}else if(F)return P0(F)?F.value?_n(function(Y,st){return st.def(Y.ELEMENTS,".primType")}):_n(function(){return Iv}):new Ar(F.thisDep,F.contextDep,F.propDep,function(Y,st){var ft=Y.ELEMENTS;return st.def(ft,"?",ft,".primType:",Iv)});return null}function G(A,H){if(A in P){var Y=P[A]|0;return S.command(!H||Y>=0,"invalid "+A,E.commandStr),_n(function(ft,at){return H&&(ft.OFFSET=Y),Y})}else if(A in U){var st=U[A];return Ur(st,function(ft,at){var St=ft.invoke(at,st);return H&&(ft.OFFSET=St,S.optional(function(){ft.assert(at,St+">=0","invalid "+A)})),St})}else if(H&&F)return _n(function(ft,at){return ft.OFFSET="0",0});return null}var z=G(vf,!0);function O(){if(Ss in P){var A=P[Ss]|0;return S.command(typeof A=="number"&&A>=0,"invalid vertex count",E.commandStr),_n(function(){return A})}else if(Ss in U){var H=U[Ss];return Ur(H,function(ft,at){var St=ft.invoke(at,H);return S.optional(function(){ft.assert(at,"typeof "+St+'==="number"&&'+St+">=0&&"+St+"===("+St+"|0)","invalid vertex count")}),St})}else if(F)if(P0(F)){if(F)return z?new Ar(z.thisDep,z.contextDep,z.propDep,function(ft,at){var St=at.def(ft.ELEMENTS,".vertCount-",ft.OFFSET);return S.optional(function(){ft.assert(at,St+">=0","invalid vertex offset/element buffer too small")}),St}):_n(function(ft,at){return at.def(ft.ELEMENTS,".vertCount")});var Y=_n(function(){return-1});return S.optional(function(){Y.MISSING=!0}),Y}else{var st=new Ar(F.thisDep||z.thisDep,F.contextDep||z.contextDep,F.propDep||z.propDep,function(ft,at){var St=ft.ELEMENTS;return ft.OFFSET?at.def(St,"?",St,".vertCount-",ft.OFFSET,":-1"):at.def(St,"?",St,".vertCount:-1")});return S.optional(function(){st.DYNAMIC=!0}),st}return null}return{elements:F,primitive:$(),count:O(),instances:G(mf,!1),offset:z}}function Mn(L,E){var P=L.static,U=L.dynamic,V={};return xt.forEach(function(F){var $=It(F);function G(z,O){if(F in P){var A=z(P[F]);V[$]=_n(function(){return A})}else if(F in U){var H=U[F];V[$]=Ur(H,function(Y,st){return O(Y,st,Y.invoke(st,H))})}}switch(F){case Ev:case xv:case gv:case Lv:case yv:case Rv:case kv:case Av:case Tv:case Mv:return G(function(z){return S.commandType(z,"boolean",F,E.commandStr),z},function(z,O,A){return S.optional(function(){z.assert(O,"typeof "+A+'==="boolean"',"invalid flag "+F,z.commandStr)}),A});case wv:return G(function(z){return S.commandParameter(z,Si,"invalid "+F,E.commandStr),Si[z]},function(z,O,A){var H=z.constants.compareFuncs;return S.optional(function(){z.assert(O,A+" in "+H,"invalid "+F+", must be one of "+Object.keys(Si))}),O.def(H,"[",A,"]")});case _v:return G(function(z){return S.command(vn(z)&&z.length===2&&typeof z[0]=="number"&&typeof z[1]=="number"&&z[0]<=z[1],"depth range is 2d array",E.commandStr),z},function(z,O,A){S.optional(function(){z.assert(O,z.shared.isArrayLike+"("+A+")&&"+A+".length===2&&typeof "+A+'[0]==="number"&&typeof '+A+'[1]==="number"&&'+A+"[0]<="+A+"[1]","depth range must be a 2d array")});var H=O.def("+",A,"[0]"),Y=O.def("+",A,"[1]");return[H,Y]});case R1:return G(function(z){S.commandType(z,"object","blend.func",E.commandStr);var O="srcRGB"in z?z.srcRGB:z.src,A="srcAlpha"in z?z.srcAlpha:z.src,H="dstRGB"in z?z.dstRGB:z.dst,Y="dstAlpha"in z?z.dstAlpha:z.dst;return S.commandParameter(O,Ja,$+".srcRGB",E.commandStr),S.commandParameter(A,Ja,$+".srcAlpha",E.commandStr),S.commandParameter(H,Ja,$+".dstRGB",E.commandStr),S.commandParameter(Y,Ja,$+".dstAlpha",E.commandStr),S.command(Hv.indexOf(O+", "+H)===-1,"unallowed blending combination (srcRGB, dstRGB) = ("+O+", "+H+")",E.commandStr),[Ja[O],Ja[H],Ja[A],Ja[Y]]},function(z,O,A){var H=z.constants.blendFuncs;S.optional(function(){z.assert(O,A+"&&typeof "+A+'==="object"',"invalid blend func, must be an object")});function Y(oe,Ee){var De=O.def('"',oe,Ee,'" in ',A,"?",A,".",oe,Ee,":",A,".",oe);return S.optional(function(){z.assert(O,De+" in "+H,"invalid "+F+"."+oe+Ee+", must be one of "+Object.keys(Ja))}),De}var st=Y("src","RGB"),ft=Y("dst","RGB");S.optional(function(){var oe=z.constants.invalidBlendCombinations;z.assert(O,oe+".indexOf("+st+'+", "+'+ft+") === -1 ","unallowed blending combination for (srcRGB, dstRGB)")});var at=O.def(H,"[",st,"]"),St=O.def(H,"[",Y("src","Alpha"),"]"),he=O.def(H,"[",ft,"]"),je=O.def(H,"[",Y("dst","Alpha"),"]");return[at,he,St,je]});case z1:return G(function(z){if(typeof z=="string")return S.commandParameter(z,rt,"invalid "+F,E.commandStr),[rt[z],rt[z]];if(typeof z=="object")return S.commandParameter(z.rgb,rt,F+".rgb",E.commandStr),S.commandParameter(z.alpha,rt,F+".alpha",E.commandStr),[rt[z.rgb],rt[z.alpha]];S.commandRaise("invalid blend.equation",E.commandStr)},function(z,O,A){var H=z.constants.blendEquations,Y=O.def(),st=O.def(),ft=z.cond("typeof ",A,'==="string"');return S.optional(function(){function at(St,he,je){z.assert(St,je+" in "+H,"invalid "+he+", must be one of "+Object.keys(rt))}at(ft.then,F,A),z.assert(ft.else,A+"&&typeof "+A+'==="object"',"invalid "+F),at(ft.else,F+".rgb",A+".rgb"),at(ft.else,F+".alpha",A+".alpha")}),ft.then(Y,"=",st,"=",H,"[",A,"];"),ft.else(Y,"=",H,"[",A,".rgb];",st,"=",H,"[",A,".alpha];"),O(ft),[Y,st]});case bv:return G(function(z){return S.command(vn(z)&&z.length===4,"blend.color must be a 4d array",E.commandStr),Ye(4,function(O){return+z[O]})},function(z,O,A){return S.optional(function(){z.assert(O,z.shared.isArrayLike+"("+A+")&&"+A+".length===4","blend.color must be a 4d array")}),Ye(4,function(H){return O.def("+",A,"[",H,"]")})});case zv:return G(function(z){return S.commandType(z,"number",$,E.commandStr),z|0},function(z,O,A){return S.optional(function(){z.assert(O,"typeof "+A+'==="number"',"invalid stencil.mask")}),O.def(A,"|0")});case $1:return G(function(z){S.commandType(z,"object",$,E.commandStr);var O=z.cmp||"keep",A=z.ref||0,H="mask"in z?z.mask:-1;return S.commandParameter(O,Si,F+".cmp",E.commandStr),S.commandType(A,"number",F+".ref",E.commandStr),S.commandType(H,"number",F+".mask",E.commandStr),[Si[O],A,H]},function(z,O,A){var H=z.constants.compareFuncs;S.optional(function(){function at(){z.assert(O,Array.prototype.join.call(arguments,""),"invalid stencil.func")}at(A+"&&typeof ",A,'==="object"'),at('!("cmp" in ',A,")||(",A,".cmp in ",H,")")});var Y=O.def('"cmp" in ',A,"?",H,"[",A,".cmp]",":",C0),st=O.def(A,".ref|0"),ft=O.def('"mask" in ',A,"?",A,".mask|0:-1");return[Y,st,ft]});case F1:case Oc:return G(function(z){S.commandType(z,"object",$,E.commandStr);var O=z.fail||"keep",A=z.zfail||"keep",H=z.zpass||"keep";return S.commandParameter(O,O0,F+".fail",E.commandStr),S.commandParameter(A,O0,F+".zfail",E.commandStr),S.commandParameter(H,O0,F+".zpass",E.commandStr),[F===Oc?ks:Uc,O0[O],O0[A],O0[H]]},function(z,O,A){var H=z.constants.stencilOps;S.optional(function(){z.assert(O,A+"&&typeof "+A+'==="object"',"invalid "+F)});function Y(st){return S.optional(function(){z.assert(O,'!("'+st+'" in '+A+")||("+A+"."+st+" in "+H+")","invalid "+F+"."+st+", must be one of "+Object.keys(O0))}),O.def('"',st,'" in ',A,"?",H,"[",A,".",st,"]:",C0)}return[F===Oc?ks:Uc,Y("fail"),Y("zfail"),Y("zpass")]});case P1:return G(function(z){S.commandType(z,"object",$,E.commandStr);var O=z.factor|0,A=z.units|0;return S.commandType(O,"number",$+".factor",E.commandStr),S.commandType(A,"number",$+".units",E.commandStr),[O,A]},function(z,O,A){S.optional(function(){z.assert(O,A+"&&typeof "+A+'==="object"',"invalid "+F)});var H=O.def(A,".factor|0"),Y=O.def(A,".units|0");return[H,Y]});case Sv:return G(function(z){var O=0;return z==="front"?O=Uc:z==="back"&&(O=ks),S.command(!!O,$,E.commandStr),O},function(z,O,A){return S.optional(function(){z.assert(O,A+'==="front"||'+A+'==="back"',"invalid cull.face")}),O.def(A,'==="front"?',Uc,":",ks)});case O1:return G(function(z){return S.command(typeof z=="number"&&z>=et.lineWidthDims[0]&&z<=et.lineWidthDims[1],"invalid line width, must be a positive number between "+et.lineWidthDims[0]+" and "+et.lineWidthDims[1],E.commandStr),z},function(z,O,A){return S.optional(function(){z.assert(O,"typeof "+A+'==="number"&&'+A+">="+et.lineWidthDims[0]+"&&"+A+"<="+et.lineWidthDims[1],"invalid line width")}),A});case C1:return G(function(z){return S.commandParameter(z,j1,$,E.commandStr),j1[z]},function(z,O,A){return S.optional(function(){z.assert(O,A+'==="cw"||'+A+'==="ccw"',"invalid frontFace, must be one of cw,ccw")}),O.def(A+'==="cw"?'+$v+":"+U1)});case N1:return G(function(z){return S.command(vn(z)&&z.length===4,"color.mask must be length 4 array",E.commandStr),z.map(function(O){return!!O})},function(z,O,A){return S.optional(function(){z.assert(O,z.shared.isArrayLike+"("+A+")&&"+A+".length===4","invalid color.mask")}),Ye(4,function(H){return"!!"+A+"["+H+"]"})});case I1:return G(function(z){S.command(typeof z=="object"&&z,$,E.commandStr);var O="value"in z?z.value:1,A=!!z.invert;return S.command(typeof O=="number"&&O>=0&&O<=1,"sample.coverage.value must be a number between 0 and 1",E.commandStr),[O,A]},function(z,O,A){S.optional(function(){z.assert(O,A+"&&typeof "+A+'==="object"',"invalid sample.coverage")});var H=O.def('"value" in ',A,"?+",A,".value:1"),Y=O.def("!!",A,".invert");return[H,Y]})}}),V}function Dn(L,E){var P=L.static,U=L.dynamic,V={};return Object.keys(P).forEach(function(F){var $=P[F],G;if(typeof $=="number"||typeof $=="boolean")G=_n(function(){return $});else if(typeof $=="function"){var z=$._reglType;z==="texture2d"||z==="textureCube"?G=_n(function(O){return O.link($)}):z==="framebuffer"||z==="framebufferCube"?(S.command($.color.length>0,'missing color attachment for framebuffer sent to uniform "'+F+'"',E.commandStr),G=_n(function(O){return O.link($.color[0])})):S.commandRaise('invalid data for uniform "'+F+'"',E.commandStr)}else vn($)?G=_n(function(O){var A=O.global.def("[",Ye($.length,function(H){return S.command(typeof $[H]=="number"||typeof $[H]=="boolean","invalid uniform "+F,O.commandStr),$[H]}),"]");return A}):S.commandRaise('invalid or missing data for uniform "'+F+'"',E.commandStr);G.value=$,V[F]=G}),Object.keys(U).forEach(function(F){var $=U[F];V[F]=Ur($,function(G,z){return G.invoke(z,$)})}),V}function ro(L,E){var P=L.static,U=L.dynamic,V={};return Object.keys(P).forEach(function(F){var $=P[F],G=k.id(F),z=new W;if(kf($))z.state=wi,z.buffer=lt.getBuffer(lt.create($,Ei,!1,!0)),z.type=0;else{var O=lt.getBuffer($);if(O)z.state=wi,z.buffer=O,z.type=0;else if(S.command(typeof $=="object"&&$,"invalid data for attribute "+F,E.commandStr),"constant"in $){var A=$.constant;z.buffer="null",z.state=S1,typeof A=="number"?z.x=A:(S.command(vn(A)&&A.length>0&&A.length<=4,"invalid constant for attribute "+F,E.commandStr),yi.forEach(function(he,je){je<A.length&&(z[he]=A[je])}))}else{kf($.buffer)?O=lt.getBuffer(lt.create($.buffer,Ei,!1,!0)):O=lt.getBuffer($.buffer),S.command(!!O,'missing buffer for attribute "'+F+'"',E.commandStr);var H=$.offset|0;S.command(H>=0,'invalid offset for attribute "'+F+'"',E.commandStr);var Y=$.stride|0;S.command(Y>=0&&Y<256,'invalid stride for attribute "'+F+'", must be integer betweeen [0, 255]',E.commandStr);var st=$.size|0;S.command(!("size"in $)||st>0&&st<=4,'invalid size for attribute "'+F+'", must be 1,2,3,4',E.commandStr);var ft=!!$.normalized,at=0;"type"in $&&(S.commandParameter($.type,gs,"invalid type for attribute "+F,E.commandStr),at=gs[$.type]);var St=$.divisor|0;"divisor"in $&&(S.command(St===0||kt,'cannot specify divisor for attribute "'+F+'", instancing not supported',E.commandStr),S.command(St>=0,'invalid divisor for attribute "'+F+'"',E.commandStr)),S.optional(function(){var he=E.commandStr,je=["buffer","offset","divisor","normalized","type","size","stride"];Object.keys($).forEach(function(oe){S.command(je.indexOf(oe)>=0,'unknown parameter "'+oe+'" for attribute pointer "'+F+'" (valid parameters are '+je+")",he)})}),z.buffer=O,z.state=wi,z.size=st,z.normalized=ft,z.type=at||O.dtype,z.offset=H,z.stride=Y,z.divisor=St}}V[F]=_n(function(he,je){var oe=he.attribCache;if(G in oe)return oe[G];var Ee={isStream:!1};return Object.keys(z).forEach(function(De){Ee[De]=z[De]}),z.buffer&&(Ee.buffer=he.link(z.buffer),Ee.type=Ee.type||Ee.buffer+".dtype"),oe[G]=Ee,Ee})}),Object.keys(U).forEach(function(F){var $=U[F];function G(z,O){var A=z.invoke(O,$),H=z.shared,Y=z.constants,st=H.isBufferArgs,ft=H.buffer;S.optional(function(){z.assert(O,A+"&&(typeof "+A+'==="object"||typeof '+A+'==="function")&&('+st+"("+A+")||"+ft+".getBuffer("+A+")||"+ft+".getBuffer("+A+".buffer)||"+st+"("+A+'.buffer)||("constant" in '+A+"&&(typeof "+A+'.constant==="number"||'+H.isArrayLike+"("+A+".constant))))",'invalid dynamic attribute "'+F+'"')});var at={isStream:O.def(!1)},St=new W;St.state=wi,Object.keys(St).forEach(function(Ee){at[Ee]=O.def(""+St[Ee])});var he=at.buffer,je=at.type;O("if(",st,"(",A,")){",at.isStream,"=true;",he,"=",ft,".createStream(",Ei,",",A,");",je,"=",he,".dtype;","}else{",he,"=",ft,".getBuffer(",A,");","if(",he,"){",je,"=",he,".dtype;",'}else if("constant" in ',A,"){",at.state,"=",S1,";","if(typeof "+A+'.constant === "number"){',at[yi[0]],"=",A,".constant;",yi.slice(1).map(function(Ee){return at[Ee]}).join("="),"=0;","}else{",yi.map(function(Ee,De){return at[Ee]+"="+A+".constant.length>"+De+"?"+A+".constant["+De+"]:0;"}).join(""),"}}else{","if(",st,"(",A,".buffer)){",he,"=",ft,".createStream(",Ei,",",A,".buffer);","}else{",he,"=",ft,".getBuffer(",A,".buffer);","}",je,'="type" in ',A,"?",Y.glTypes,"[",A,".type]:",he,".dtype;",at.normalized,"=!!",A,".normalized;");function oe(Ee){O(at[Ee],"=",A,".",Ee,"|0;")}return oe("size"),oe("offset"),oe("stride"),oe("divisor"),O("}}"),O.exit("if(",at.isStream,"){",ft,".destroyStream(",he,");","}"),at}V[F]=Ur($,G)}),V}function zn(L,E){var P=L.static,U=L.dynamic;if(Fc in P){var V=P[Fc];return V!==null&&At.getVAO(V)===null&&(V=At.createVAO(V)),_n(function($){return $.link(At.getVAO(V))})}else if(Fc in U){var F=U[Fc];return Ur(F,function($,G){var z=$.invoke(G,F);return G.def($.shared.vao+".getVAO("+z+")")})}return null}function Vo(L){var E=L.static,P=L.dynamic,U={};return Object.keys(E).forEach(function(V){var F=E[V];U[V]=_n(function($,G){return typeof F=="number"||typeof F=="boolean"?""+F:$.link(F)})}),Object.keys(P).forEach(function(V){var F=P[V];U[V]=Ur(F,function($,G){return $.invoke(G,F)})}),U}function En(L,E,P,U,V){var F=L.static,$=L.dynamic;S.optional(function(){var oe=[_s,Ic,$c,Ms,Es,vf,Ss,mf,Pc,Fc].concat(xt);function Ee(De){Object.keys(De).forEach(function(bo){S.command(oe.indexOf(bo)>=0,'unknown parameter "'+bo+'"',V.commandStr)})}Ee(F),Ee($)});var G=Fe(L,E),z=ee(L,V),O=Ze(L,z,V),A=xo(L,V),H=Mn(L,V),Y=Ve(L,V,G);function st(oe){var Ee=O[oe];Ee&&(H[oe]=Ee)}st(u0),st(It(pf));var ft=Object.keys(H).length>0,at={framebuffer:z,draw:A,shader:Y,state:H,dirty:ft,scopeVAO:null,drawVAO:null,useVAO:!1,attributes:{}};if(at.profile=Be(L,V),at.uniforms=Dn(P,V),at.drawVAO=at.scopeVAO=zn(L,V),!at.drawVAO&&Y.program&&!G&&C.angle_instanced_arrays){var St=!0,he=Y.program.attributes.map(function(oe){var Ee=E.static[oe];return St=St&&!!Ee,Ee});if(St&&he.length>0){var je=At.getVAO(At.createVAO(he));at.drawVAO=new Ar(null,null,null,function(oe,Ee){return oe.link(je)}),at.useVAO=!0}}return G?at.useVAO=!0:at.attributes=ro(E,V),at.context=Vo(U,V),at}function Rn(L,E,P){var U=L.shared,V=U.context,F=L.scope();Object.keys(P).forEach(function($){E.save(V,"."+$);var G=P[$],z=G.append(L,E);Array.isArray(z)?F(V,".",$,"=[",z.join(),"];"):F(V,".",$,"=",z,";")}),E(F)}function Nn(L,E,P,U){var V=L.shared,F=V.gl,$=V.framebuffer,G;jt&&(G=E.def(V.extensions,".webgl_draw_buffers"));var z=L.constants,O=z.drawBuffer,A=z.backBuffer,H;P?H=P.append(L,E):H=E.def($,".next"),U||E("if(",H,"!==",$,".cur){"),E("if(",H,"){",F,".bindFramebuffer(",Gv,",",H,".framebuffer);"),jt&&E(G,".drawBuffersWEBGL(",O,"[",H,".colorAttachments.length]);"),E("}else{",F,".bindFramebuffer(",Gv,",null);"),jt&&E(G,".drawBuffersWEBGL(",A,");"),E("}",$,".cur=",H,";"),U||E("}")}function Qn(L,E,P){var U=L.shared,V=U.gl,F=L.current,$=L.next,G=U.current,z=U.next,O=L.cond(G,".dirty");xt.forEach(function(A){var H=It(A);if(!(H in P.state)){var Y,st;if(H in $){Y=$[H],st=F[H];var ft=Ye(dt[H].length,function(St){return O.def(Y,"[",St,"]")});O(L.cond(ft.map(function(St,he){return St+"!=="+st+"["+he+"]"}).join("||")).then(V,".",vt[H],"(",ft,");",ft.map(function(St,he){return st+"["+he+"]="+St}).join(";"),";"))}else{Y=O.def(z,".",H);var at=L.cond(Y,"!==",G,".",H);O(at),H in Pt?at(L.cond(Y).then(V,".enable(",Pt[H],");").else(V,".disable(",Pt[H],");"),G,".",H,"=",Y,";"):at(V,".",vt[H],"(",Y,");",G,".",H,"=",Y,";")}}}),Object.keys(P.state).length===0&&O(G,".dirty=false;"),E(O)}function ir(L,E,P,U){var V=L.shared,F=L.current,$=V.current,G=V.gl;Uv(Object.keys(P)).forEach(function(z){var O=P[z];if(!(U&&!U(O))){var A=O.append(L,E);if(Pt[z]){var H=Pt[z];P0(O)?A?E(G,".enable(",H,");"):E(G,".disable(",H,");"):E(L.cond(A).then(G,".enable(",H,");").else(G,".disable(",H,");")),E($,".",z,"=",A,";")}else if(vn(A)){var Y=F[z];E(G,".",vt[z],"(",A,");",A.map(function(st,ft){return Y+"["+ft+"]="+st}).join(";"),";")}else E(G,".",vt[z],"(",A,");",$,".",z,"=",A,";")}})}function mn(L,E){kt&&(L.instancing=E.def(L.shared.extensions,".angle_instanced_arrays"))}function Ue(L,E,P,U,V){var F=L.shared,$=L.stats,G=F.current,z=F.timer,O=P.profile;function A(){return typeof performance=="undefined"?"Date.now()":"performance.now()"}var H,Y;function st(oe){H=E.def(),oe(H,"=",A(),";"),typeof V=="string"?oe($,".count+=",V,";"):oe($,".count++;"),wt&&(U?(Y=E.def(),oe(Y,"=",z,".getNumPendingQueries();")):oe(z,".beginQuery(",$,");"))}function ft(oe){oe($,".cpuTime+=",A(),"-",H,";"),wt&&(U?oe(z,".pushScopeStats(",Y,",",z,".getNumPendingQueries(),",$,");"):oe(z,".endQuery();"))}function at(oe){var Ee=E.def(G,".profile");E(G,".profile=",oe,";"),E.exit(G,".profile=",Ee,";")}var St;if(O){if(P0(O)){O.enable?(st(E),ft(E.exit),at("true")):at("false");return}St=O.append(L,E),at(St)}else St=E.def(G,".profile");var he=L.block();st(he),E("if(",St,"){",he,"}");var je=L.block();ft(je),E.exit("if(",St,"){",je,"}")}function cr(L,E,P,U,V){var F=L.shared;function $(z){switch(z){case gf:case yf:case Mf:return 2;case xf:case wf:case Ef:return 3;case bf:case _f:case Sf:return 4;default:return 1}}function G(z,O,A){var H=F.gl,Y=E.def(z,".location"),st=E.def(F.attributes,"[",Y,"]"),ft=A.state,at=A.buffer,St=[A.x,A.y,A.z,A.w],he=["buffer","normalized","offset","stride"];function je(){E("if(!",st,".buffer){",H,".enableVertexAttribArray(",Y,");}");var Ee=A.type,De;if(A.size?De=E.def(A.size,"||",O):De=O,E("if(",st,".type!==",Ee,"||",st,".size!==",De,"||",he.map(function(fn){return st+"."+fn+"!=="+A[fn]}).join("||"),"){",H,".bindBuffer(",Ei,",",at,".buffer);",H,".vertexAttribPointer(",[Y,De,Ee,A.normalized,A.stride,A.offset],");",st,".type=",Ee,";",st,".size=",De,";",he.map(function(fn){return st+"."+fn+"="+A[fn]+";"}).join(""),"}"),kt){var bo=A.divisor;E("if(",st,".divisor!==",bo,"){",L.instancing,".vertexAttribDivisorANGLE(",[Y,bo],");",st,".divisor=",bo,";}")}}function oe(){E("if(",st,".buffer){",H,".disableVertexAttribArray(",Y,");",st,".buffer=null;","}if(",yi.map(function(Ee,De){return st+"."+Ee+"!=="+St[De]}).join("||"),"){",H,".vertexAttrib4f(",Y,",",St,");",yi.map(function(Ee,De){return st+"."+Ee+"="+St[De]+";"}).join(""),"}")}ft===wi?je():ft===S1?oe():(E("if(",ft,"===",wi,"){"),je(),E("}else{"),oe(),E("}"))}U.forEach(function(z){var O=z.name,A=P.attributes[O],H;if(A){if(!V(A))return;H=A.append(L,E)}else{if(!V(jv))return;var Y=L.scopeAttrib(O);S.optional(function(){L.assert(E,Y+".state","missing attribute "+O)}),H={},Object.keys(new W).forEach(function(st){H[st]=E.def(Y,".",st)})}G(L.link(z),$(z.info.type),H)})}function To(L,E,P,U,V){for(var F=L.shared,$=F.gl,G,z=0;z<U.length;++z){var O=U[z],A=O.name,H=O.info.type,Y=P.uniforms[A],st=L.link(O),ft=st+".location",at;if(Y){if(!V(Y))continue;if(P0(Y)){var St=Y.value;if(S.command(St!==null&&typeof St!="undefined",'missing uniform "'+A+'"',L.commandStr),H===Hc||H===Bc){S.command(typeof St=="function"&&(H===Hc&&(St._reglType==="texture2d"||St._reglType==="framebuffer")||H===Bc&&(St._reglType==="textureCube"||St._reglType==="framebufferCube")),"invalid texture for uniform "+A,L.commandStr);var he=L.link(St._texture||St.color[0]._texture);E($,".uniform1i(",ft,",",he+".bind());"),E.exit(he,".unbind();")}else if(H===Dc||H===qc||H===Gc){S.optional(function(){S.command(vn(St),"invalid matrix for uniform "+A,L.commandStr),S.command(H===Dc&&St.length===4||H===qc&&St.length===9||H===Gc&&St.length===16,"invalid length for matrix uniform "+A,L.commandStr)});var je=L.global.def("new Float32Array(["+Array.prototype.slice.call(St)+"])"),oe=2;H===qc?oe=3:H===Gc&&(oe=4),E($,".uniformMatrix",oe,"fv(",ft,",false,",je,");")}else{switch(H){case G1:S.commandType(St,"number","uniform "+A,L.commandStr),G="1f";break;case gf:S.command(vn(St)&&St.length===2,"uniform "+A,L.commandStr),G="2f";break;case xf:S.command(vn(St)&&St.length===3,"uniform "+A,L.commandStr),G="3f";break;case bf:S.command(vn(St)&&St.length===4,"uniform "+A,L.commandStr),G="4f";break;case B1:S.commandType(St,"boolean","uniform "+A,L.commandStr),G="1i";break;case H1:S.commandType(St,"number","uniform "+A,L.commandStr),G="1i";break;case Mf:S.command(vn(St)&&St.length===2,"uniform "+A,L.commandStr),G="2i";break;case yf:S.command(vn(St)&&St.length===2,"uniform "+A,L.commandStr),G="2i";break;case Ef:S.command(vn(St)&&St.length===3,"uniform "+A,L.commandStr),G="3i";break;case wf:S.command(vn(St)&&St.length===3,"uniform "+A,L.commandStr),G="3i";break;case Sf:S.command(vn(St)&&St.length===4,"uniform "+A,L.commandStr),G="4i";break;case _f:S.command(vn(St)&&St.length===4,"uniform "+A,L.commandStr),G="4i";break}E($,".uniform",G,"(",ft,",",vn(St)?Array.prototype.slice.call(St):St,");")}continue}else at=Y.append(L,E)}else{if(!V(jv))continue;at=E.def(F.uniforms,"[",k.id(A),"]")}H===Hc?(S(!Array.isArray(at),"must specify a scalar prop for textures"),E("if(",at,"&&",at,'._reglType==="framebuffer"){',at,"=",at,".color[0];","}")):H===Bc&&(S(!Array.isArray(at),"must specify a scalar prop for cube maps"),E("if(",at,"&&",at,'._reglType==="framebufferCube"){',at,"=",at,".color[0];","}")),S.optional(function(){function Tr($a,Zv){L.assert(E,$a,'bad data or missing for uniform "'+A+'".  '+Zv)}function W1($a){S(!Array.isArray(at),"must not specify an array type for uniform"),Tr("typeof "+at+'==="'+$a+'"',"invalid type, expected "+$a)}function xa($a,Zv){Array.isArray(at)?S(at.length===$a,"must have length "+$a):Tr(F.isArrayLike+"("+at+")&&"+at+".length==="+$a,"invalid vector, should have length "+$a,L.commandStr)}function Qv($a){S(!Array.isArray(at),"must not specify a value type"),Tr("typeof "+at+'==="function"&&'+at+'._reglType==="texture'+($a===Pv?"2d":"Cube")+'"',"invalid texture type",L.commandStr)}switch(H){case H1:W1("number");break;case yf:xa(2,"number");break;case wf:xa(3,"number");break;case _f:xa(4,"number");break;case G1:W1("number");break;case gf:xa(2,"number");break;case xf:xa(3,"number");break;case bf:xa(4,"number");break;case B1:W1("boolean");break;case Mf:xa(2,"boolean");break;case Ef:xa(3,"boolean");break;case Sf:xa(4,"boolean");break;case Dc:xa(4,"number");break;case qc:xa(9,"number");break;case Gc:xa(16,"number");break;case Hc:Qv(Pv);break;case Bc:Qv(Dw);break}});var Ee=1;switch(H){case Hc:case Bc:var De=E.def(at,"._texture");E($,".uniform1i(",ft,",",De,".bind());"),E.exit(De,".unbind();");continue;case H1:case B1:G="1i";break;case yf:case Mf:G="2i",Ee=2;break;case wf:case Ef:G="3i",Ee=3;break;case _f:case Sf:G="4i",Ee=4;break;case G1:G="1f";break;case gf:G="2f",Ee=2;break;case xf:G="3f",Ee=3;break;case bf:G="4f",Ee=4;break;case Dc:G="Matrix2fv";break;case qc:G="Matrix3fv";break;case Gc:G="Matrix4fv";break}if(E($,".uniform",G,"(",ft,","),G.charAt(0)==="M"){var bo=Math.pow(H-Dc+2,2),fn=L.global.def("new Float32Array(",bo,")");Array.isArray(at)?E("false,(",Ye(bo,function(Tr){return fn+"["+Tr+"]="+at[Tr]}),",",fn,")"):E("false,(Array.isArray(",at,")||",at," instanceof Float32Array)?",at,":(",Ye(bo,function(Tr){return fn+"["+Tr+"]="+at+"["+Tr+"]"}),",",fn,")")}else Ee>1?E(Ye(Ee,function(Tr){return Array.isArray(at)?at[Tr]:at+"["+Tr+"]"})):(S(!Array.isArray(at),"uniform value must not be an array"),E(at));E(");")}}function we(L,E,P,U){var V=L.shared,F=V.gl,$=V.draw,G=U.draw;function z(){var De=G.elements,bo,fn=E;return De?((De.contextDep&&U.contextDynamic||De.propDep)&&(fn=P),bo=De.append(L,fn)):bo=fn.def($,".",Ms),bo&&fn("if("+bo+")"+F+".bindBuffer("+Iw+","+bo+".buffer.buffer);"),bo}function O(){var De=G.count,bo,fn=E;return De?((De.contextDep&&U.contextDynamic||De.propDep)&&(fn=P),bo=De.append(L,fn),S.optional(function(){De.MISSING&&L.assert(E,"false","missing vertex count"),De.DYNAMIC&&L.assert(fn,bo+">=0","missing vertex count")})):(bo=fn.def($,".",Ss),S.optional(function(){L.assert(fn,bo+">=0","missing vertex count")})),bo}var A=z();function H(De){var bo=G[De];return bo?bo.contextDep&&U.contextDynamic||bo.propDep?bo.append(L,P):bo.append(L,E):E.def($,".",De)}var Y=H(Es),st=H(vf),ft=O();if(typeof ft=="number"){if(ft===0)return}else P("if(",ft,"){"),P.exit("}");var at,St;kt&&(at=H(mf),St=L.instancing);var he=A+".type",je=G.elements&&P0(G.elements);function oe(){function De(){P(St,".drawElementsInstancedANGLE(",[Y,ft,he,st+"<<(("+he+"-"+pv+")>>1)",at],");")}function bo(){P(St,".drawArraysInstancedANGLE(",[Y,st,ft,at],");")}A?je?De():(P("if(",A,"){"),De(),P("}else{"),bo(),P("}")):bo()}function Ee(){function De(){P(F+".drawElements("+[Y,ft,he,st+"<<(("+he+"-"+pv+")>>1)"]+");")}function bo(){P(F+".drawArrays("+[Y,st,ft]+");")}A?je?De():(P("if(",A,"){"),De(),P("}else{"),bo(),P("}")):bo()}kt&&(typeof at!="number"||at>=0)?typeof at=="string"?(P("if(",at,">0){"),oe(),P("}else if(",at,"<0){"),Ee(),P("}")):oe():Ee()}function oo(L,E,P,U,V){var F=Re(),$=F.proc("body",V);return S.optional(function(){F.commandStr=E.commandStr,F.command=F.link(E.commandStr)}),kt&&(F.instancing=$.def(F.shared.extensions,".angle_instanced_arrays")),L(F,$,P,U),F.compile().body}function po(L,E,P,U){mn(L,E),P.useVAO?P.drawVAO?E(L.shared.vao,".setVAO(",P.drawVAO.append(L,E),");"):E(L.shared.vao,".setVAO(",L.shared.vao,".targetVAO);"):(E(L.shared.vao,".setVAO(null);"),cr(L,E,P,U.attributes,function(){return!0})),To(L,E,P,U.uniforms,function(){return!0}),we(L,E,E,P)}function gn(L,E){var P=L.proc("draw",1);mn(L,P),Rn(L,P,E.context),Nn(L,P,E.framebuffer),Qn(L,P,E),ir(L,P,E.state),Ue(L,P,E,!1,!0);var U=E.shader.progVar.append(L,P);if(P(L.shared.gl,".useProgram(",U,".program);"),E.shader.program)po(L,P,E,E.shader.program);else{P(L.shared.vao,".setVAO(null);");var V=L.global.def("{}"),F=P.def(U,".id"),$=P.def(V,"[",F,"]");P(L.cond($).then($,".call(this,a0);").else($,"=",V,"[",F,"]=",L.link(function(G){return oo(po,L,E,G,1)}),"(",U,");",$,".call(this,a0);"))}Object.keys(E.state).length>0&&P(L.shared.current,".dirty=true;")}function t0(L,E,P,U){L.batchId="a1",mn(L,E);function V(){return!0}cr(L,E,P,U.attributes,V),To(L,E,P,U.uniforms,V),we(L,E,E,P)}function As(L,E,P,U){mn(L,E);var V=P.contextDep,F=E.def(),$="a0",G="a1",z=E.def();L.shared.props=z,L.batchId=F;var O=L.scope(),A=L.scope();E(O.entry,"for(",F,"=0;",F,"<",G,";++",F,"){",z,"=",$,"[",F,"];",A,"}",O.exit);function H(he){return he.contextDep&&V||he.propDep}function Y(he){return!H(he)}if(P.needsContext&&Rn(L,A,P.context),P.needsFramebuffer&&Nn(L,A,P.framebuffer),ir(L,A,P.state,H),P.profile&&H(P.profile)&&Ue(L,A,P,!1,!0),U)P.useVAO?P.drawVAO?H(P.drawVAO)?A(L.shared.vao,".setVAO(",P.drawVAO.append(L,A),");"):O(L.shared.vao,".setVAO(",P.drawVAO.append(L,O),");"):O(L.shared.vao,".setVAO(",L.shared.vao,".targetVAO);"):(O(L.shared.vao,".setVAO(null);"),cr(L,O,P,U.attributes,Y),cr(L,A,P,U.attributes,H)),To(L,O,P,U.uniforms,Y),To(L,A,P,U.uniforms,H),we(L,O,A,P);else{var st=L.global.def("{}"),ft=P.shader.progVar.append(L,A),at=A.def(ft,".id"),St=A.def(st,"[",at,"]");A(L.shared.gl,".useProgram(",ft,".program);","if(!",St,"){",St,"=",st,"[",at,"]=",L.link(function(he){return oo(t0,L,P,he,2)}),"(",ft,");}",St,".call(this,a0[",F,"],",F,");")}}function R(L,E){var P=L.proc("batch",2);L.batchId="0",mn(L,P);var U=!1,V=!0;Object.keys(E.context).forEach(function(st){U=U||E.context[st].propDep}),U||(Rn(L,P,E.context),V=!1);var F=E.framebuffer,$=!1;F?(F.propDep?U=$=!0:F.contextDep&&U&&($=!0),$||Nn(L,P,F)):Nn(L,P,null),E.state.viewport&&E.state.viewport.propDep&&(U=!0);function G(st){return st.contextDep&&U||st.propDep}Qn(L,P,E),ir(L,P,E.state,function(st){return!G(st)}),(!E.profile||!G(E.profile))&&Ue(L,P,E,!1,"a1"),E.contextDep=U,E.needsContext=V,E.needsFramebuffer=$;var z=E.shader.progVar;if(z.contextDep&&U||z.propDep)As(L,P,E,null);else{var O=z.append(L,P);if(P(L.shared.gl,".useProgram(",O,".program);"),E.shader.program)As(L,P,E,E.shader.program);else{P(L.shared.vao,".setVAO(null);");var A=L.global.def("{}"),H=P.def(O,".id"),Y=P.def(A,"[",H,"]");P(L.cond(Y).then(Y,".call(this,a0,a1);").else(Y,"=",A,"[",H,"]=",L.link(function(st){return oo(As,L,E,st,2)}),"(",O,");",Y,".call(this,a0,a1);"))}}Object.keys(E.state).length>0&&P(L.shared.current,".dirty=true;")}function ot(L,E){var P=L.proc("scope",3);L.batchId="a2";var U=L.shared,V=U.current;Rn(L,P,E.context),E.framebuffer&&E.framebuffer.append(L,P),Uv(Object.keys(E.state)).forEach(function($){var G=E.state[$],z=G.append(L,P);vn(z)?z.forEach(function(O,A){P.set(L.next[$],"["+A+"]",O)}):P.set(U.next,"."+$,z)}),Ue(L,P,E,!0,!0),[Ms,vf,Ss,mf,Es].forEach(function($){var G=E.draw[$];G&&P.set(U.draw,"."+$,""+G.append(L,P))}),Object.keys(E.uniforms).forEach(function($){var G=E.uniforms[$].append(L,P);Array.isArray(G)&&(G="["+G.join()+"]"),P.set(U.uniforms,"["+k.id($)+"]",G)}),Object.keys(E.attributes).forEach(function($){var G=E.attributes[$].append(L,P),z=L.scopeAttrib($);Object.keys(new W).forEach(function(O){P.set(z,"."+O,G[O])})}),E.scopeVAO&&P.set(U.vao,".targetVAO",E.scopeVAO.append(L,P));function F($){var G=E.shader[$];G&&P.set(U.shader,"."+$,G.append(L,P))}F(Ic),F($c),Object.keys(E.state).length>0&&(P(V,".dirty=true;"),P.exit(V,".dirty=true;")),P("a1(",L.shared.context,",a0,",L.batchId,");")}function Q(L){if(!(typeof L!="object"||vn(L))){for(var E=Object.keys(L),P=0;P<E.length;++P)if(Ot.isDynamic(L[E[P]]))return!0;return!1}}function Qt(L,E,P){var U=E.static[P];if(!U||!Q(U))return;var V=L.global,F=Object.keys(U),$=!1,G=!1,z=!1,O=L.global.def("{}");F.forEach(function(H){var Y=U[H];if(Ot.isDynamic(Y)){typeof Y=="function"&&(Y=U[H]=Ot.unbox(Y));var st=Ur(Y,null);$=$||st.thisDep,z=z||st.propDep,G=G||st.contextDep}else{switch(V(O,".",H,"="),typeof Y){case"number":V(Y);break;case"string":V('"',Y,'"');break;case"object":Array.isArray(Y)&&V("[",Y.join(),"]");break;default:V(L.link(Y));break}V(";")}});function A(H,Y){F.forEach(function(st){var ft=U[st];if(Ot.isDynamic(ft)){var at=H.invoke(Y,ft);Y(O,".",st,"=",at,";")}})}E.dynamic[P]=new Ot.DynamicVariable(df,{thisDep:$,contextDep:G,propDep:z,ref:O,append:A}),delete E.static[P]}function Je(L,E,P,U,V){var F=Re();F.stats=F.link(V),Object.keys(E.static).forEach(function(G){Qt(F,E,G)}),Pw.forEach(function(G){Qt(F,L,G)});var $=En(L,E,P,U,F);return gn(F,$),ot(F,$),R(F,$),e(F.compile(),{destroy:function(){$.shader.program.destroy()}})}return{next:Xt,current:dt,procs:function(){var L=Re(),E=L.proc("poll"),P=L.proc("refresh"),U=L.block();E(U),P(U);var V=L.shared,F=V.gl,$=V.next,G=V.current;U(G,".dirty=false;"),Nn(L,E),Nn(L,P,null,!0);var z;kt&&(z=L.link(kt)),C.oes_vertex_array_object&&P(L.link(C.oes_vertex_array_object),".bindVertexArrayOES(null);");for(var O=0;O<et.maxAttributes;++O){var A=P.def(V.attributes,"[",O,"]"),H=L.cond(A,".buffer");H.then(F,".enableVertexAttribArray(",O,");",F,".bindBuffer(",Ei,",",A,".buffer.buffer);",F,".vertexAttribPointer(",O,",",A,".size,",A,".type,",A,".normalized,",A,".stride,",A,".offset);").else(F,".disableVertexAttribArray(",O,");",F,".vertexAttrib4f(",O,",",A,".x,",A,".y,",A,".z,",A,".w);",A,".buffer=null;"),P(H),kt&&P(z,".vertexAttribDivisorANGLE(",O,",",A,".divisor);")}return P(L.shared.vao,".currentVAO=null;",L.shared.vao,".setVAO(",L.shared.vao,".targetVAO);"),Object.keys(Pt).forEach(function(Y){var st=Pt[Y],ft=U.def($,".",Y),at=L.block();at("if(",ft,"){",F,".enable(",st,")}else{",F,".disable(",st,")}",G,".",Y,"=",ft,";"),P(at),E("if(",ft,"!==",G,".",Y,"){",at,"}")}),Object.keys(vt).forEach(function(Y){var st=vt[Y],ft=dt[Y],at,St,he=L.block();if(he(F,".",st,"("),vn(ft)){var je=ft.length;at=L.global.def($,".",Y),St=L.global.def(G,".",Y),he(Ye(je,function(oe){return at+"["+oe+"]"}),");",Ye(je,function(oe){return St+"["+oe+"]="+at+"["+oe+"];"}).join("")),E("if(",Ye(je,function(oe){return at+"["+oe+"]!=="+St+"["+oe+"]"}).join("||"),"){",he,"}")}else at=U.def($,".",Y),St=U.def(G,".",Y),he(at,");",G,".",Y,"=",at,";"),E("if(",at,"!==",St,"){",he,"}");P(he)}),L.compile()}(),compile:Je}}function e4(){return{vaoCount:0,bufferCount:0,elementsCount:0,framebufferCount:0,shaderCount:0,textureCount:0,cubeCount:0,renderbufferCount:0,maxTextureUnits:0}}var o4=34918,n4=34919,Wv=35007,r4=function(x,k){if(!k.ext_disjoint_timer_query)return null;var C=[];function et(){return C.pop()||k.ext_disjoint_timer_query.createQueryEXT()}function lt(kt){C.push(kt)}var J=[];function nt(kt){var jt=et();k.ext_disjoint_timer_query.beginQueryEXT(Wv,jt),J.push(jt),wt(J.length-1,J.length,kt)}function yt(){k.ext_disjoint_timer_query.endQueryEXT(Wv)}function Mt(){this.startQueryIndex=-1,this.endQueryIndex=-1,this.sum=0,this.stats=null}var At=[];function Et(){return At.pop()||new Mt}function Rt(kt){At.push(kt)}var qt=[];function wt(kt,jt,dt){var Xt=Et();Xt.startQueryIndex=kt,Xt.endQueryIndex=jt,Xt.sum=0,Xt.stats=dt,qt.push(Xt)}var Ct=[],W=[];function rt(){var kt,jt,dt=J.length;if(dt!==0){W.length=Math.max(W.length,dt+1),Ct.length=Math.max(Ct.length,dt+1),Ct[0]=0,W[0]=0;var Xt=0;for(kt=0,jt=0;jt<J.length;++jt){var xt=J[jt];k.ext_disjoint_timer_query.getQueryObjectEXT(xt,n4)?(Xt+=k.ext_disjoint_timer_query.getQueryObjectEXT(xt,o4),lt(xt)):J[kt++]=xt,Ct[jt+1]=Xt,W[jt+1]=kt}for(J.length=kt,kt=0,jt=0;jt<qt.length;++jt){var Pt=qt[jt],vt=Pt.startQueryIndex,It=Pt.endQueryIndex;Pt.sum+=Ct[It]-Ct[vt];var me=W[vt],Ie=W[It];Ie===me?(Pt.stats.gpuTime+=Pt.sum/1e6,Rt(Pt)):(Pt.startQueryIndex=me,Pt.endQueryIndex=Ie,qt[kt++]=Pt)}qt.length=kt}}return{beginQuery:nt,endQuery:yt,pushScopeStats:wt,update:rt,getNumPendingQueries:function(){return J.length},clear:function(){C.push.apply(C,J);for(var kt=0;kt<C.length;kt++)k.ext_disjoint_timer_query.deleteQueryEXT(C[kt]);J.length=0,C.length=0},restore:function(){J.length=0,C.length=0}}},a4=16384,s4=256,i4=1024,c4=34962,Vv="webglcontextlost",Xv="webglcontextrestored",Yv=1,l4=2,f4=3;function Kv(x,k){for(var C=0;C<x.length;++C)if(x[C]===k)return C;return-1}function h4(x){var k=ke(x);if(!k)return null;var C=k.gl,et=C.getContextAttributes(),lt=C.isContextLost(),J=Te(C,k);if(!J)return null;var nt=le(),yt=e4(),Mt=J.extensions,At=r4(C,Mt),Et=Nt(),Rt=C.drawingBufferWidth,qt=C.drawingBufferHeight,wt={tick:0,time:0,viewportWidth:Rt,viewportHeight:qt,framebufferWidth:Rt,framebufferHeight:qt,drawingBufferWidth:Rt,drawingBufferHeight:qt,pixelRatio:k.pixelRatio},Ct={},W={elements:null,primitive:4,count:-1,offset:0,instances:-1},rt=K5(C,Mt),kt=uy(C,yt,k,dt),jt=Ew(C,Mt,rt,yt,kt);function dt(we){return jt.destroyBuffer(we)}var Xt=Ey(C,Mt,kt,yt),xt=Tw(C,nt,yt,k),Pt=ew(C,Mt,rt,function(){me.procs.poll()},wt,yt,k),vt=ow(C,Mt,rt,yt,k),It=_w(C,Mt,rt,Pt,vt,yt),me=t4(C,nt,Mt,rt,kt,Xt,Pt,It,Ct,jt,xt,W,wt,At,k),Ie=Rw(C,It,me.procs.poll,wt,et,Mt,rt),Gt=me.next,Tt=C.canvas,ut=[],Re=[],Be=[],ee=[k.onDestroy],Ze=null;function Fe(){if(ut.length===0){At&&At.update(),Ze=null;return}Ze=Dt.next(Fe),ir();for(var we=ut.length-1;we>=0;--we){var oo=ut[we];oo&&oo(wt,null,0)}C.flush(),At&&At.update()}function Ve(){!Ze&&ut.length>0&&(Ze=Dt.next(Fe))}function xo(){Ze&&(Dt.cancel(Fe),Ze=null)}function Mn(we){we.preventDefault(),lt=!0,xo(),Re.forEach(function(oo){oo()})}function Dn(we){C.getError(),lt=!1,J.restore(),xt.restore(),kt.restore(),Pt.restore(),vt.restore(),It.restore(),jt.restore(),At&&At.restore(),me.procs.refresh(),Ve(),Be.forEach(function(oo){oo()})}Tt&&(Tt.addEventListener(Vv,Mn,!1),Tt.addEventListener(Xv,Dn,!1));function ro(){ut.length=0,xo(),Tt&&(Tt.removeEventListener(Vv,Mn),Tt.removeEventListener(Xv,Dn)),xt.clear(),It.clear(),vt.clear(),Pt.clear(),Xt.clear(),kt.clear(),jt.clear(),At&&At.clear(),ee.forEach(function(we){we()})}function zn(we){S(!!we,"invalid args to regl({...})"),S.type(we,"object","invalid args to regl({...})");function oo(V){var F=e({},V);delete F.uniforms,delete F.attributes,delete F.context,delete F.vao,"stencil"in F&&F.stencil.op&&(F.stencil.opBack=F.stencil.opFront=F.stencil.op,delete F.stencil.op);function $(G){if(G in F){var z=F[G];delete F[G],Object.keys(z).forEach(function(O){F[G+"."+O]=z[O]})}}return $("blend"),$("depth"),$("cull"),$("stencil"),$("polygonOffset"),$("scissor"),$("sample"),"vao"in V&&(F.vao=V.vao),F}function po(V,F){var $={},G={};return Object.keys(V).forEach(function(z){var O=V[z];if(Ot.isDynamic(O)){G[z]=Ot.unbox(O,z);return}else if(F&&Array.isArray(O)){for(var A=0;A<O.length;++A)if(Ot.isDynamic(O[A])){G[z]=Ot.unbox(O,z);return}}$[z]=O}),{dynamic:G,static:$}}var gn=po(we.context||{},!0),t0=po(we.uniforms||{},!0),As=po(we.attributes||{},!1),R=po(oo(we),!1),ot={gpuTime:0,cpuTime:0,count:0},Q=me.compile(R,As,t0,gn,ot),Qt=Q.draw,Je=Q.batch,L=Q.scope,E=[];function P(V){for(;E.length<V;)E.push(null);return E}function U(V,F){var $;if(lt&&S.raise("context lost"),typeof V=="function")return L.call(this,null,V,0);if(typeof F=="function")if(typeof V=="number")for($=0;$<V;++$)L.call(this,null,F,$);else if(Array.isArray(V))for($=0;$<V.length;++$)L.call(this,V[$],F,$);else return L.call(this,V,F,0);else if(typeof V=="number"){if(V>0)return Je.call(this,P(V|0),V|0)}else if(Array.isArray(V)){if(V.length)return Je.call(this,V,V.length)}else return Qt.call(this,V)}return e(U,{stats:ot,destroy:function(){Q.destroy()}})}var Vo=It.setFBO=zn({framebuffer:Ot.define.call(null,Yv,"framebuffer")});function En(we,oo){var po=0;me.procs.poll();var gn=oo.color;gn&&(C.clearColor(+gn[0]||0,+gn[1]||0,+gn[2]||0,+gn[3]||0),po|=a4),"depth"in oo&&(C.clearDepth(+oo.depth),po|=s4),"stencil"in oo&&(C.clearStencil(oo.stencil|0),po|=i4),S(!!po,"called regl.clear with no buffer specified"),C.clear(po)}function Rn(we){if(S(typeof we=="object"&&we,"regl.clear() takes an object as input"),"framebuffer"in we)if(we.framebuffer&&we.framebuffer_reglType==="framebufferCube")for(var oo=0;oo<6;++oo)Vo(e({framebuffer:we.framebuffer.faces[oo]},we),En);else Vo(we,En);else En(null,we)}function Nn(we){S.type(we,"function","regl.frame() callback must be a function"),ut.push(we);function oo(){var po=Kv(ut,we);S(po>=0,"cannot cancel a frame twice");function gn(){var t0=Kv(ut,gn);ut[t0]=ut[ut.length-1],ut.length-=1,ut.length<=0&&xo()}ut[po]=gn}return Ve(),{cancel:oo}}function Qn(){var we=Gt.viewport,oo=Gt.scissor_box;we[0]=we[1]=oo[0]=oo[1]=0,wt.viewportWidth=wt.framebufferWidth=wt.drawingBufferWidth=we[2]=oo[2]=C.drawingBufferWidth,wt.viewportHeight=wt.framebufferHeight=wt.drawingBufferHeight=we[3]=oo[3]=C.drawingBufferHeight}function ir(){wt.tick+=1,wt.time=Ue(),Qn(),me.procs.poll()}function mn(){Pt.refresh(),Qn(),me.procs.refresh(),At&&At.update()}function Ue(){return(Nt()-Et)/1e3}mn();function cr(we,oo){S.type(oo,"function","listener callback must be a function");var po;switch(we){case"frame":return Nn(oo);case"lost":po=Re;break;case"restore":po=Be;break;case"destroy":po=ee;break;default:S.raise("invalid event, must be one of frame,lost,restore,destroy")}return po.push(oo),{cancel:function(){for(var gn=0;gn<po.length;++gn)if(po[gn]===oo){po[gn]=po[po.length-1],po.pop();return}}}}var To=e(zn,{clear:Rn,prop:Ot.define.bind(null,Yv),context:Ot.define.bind(null,l4),this:Ot.define.bind(null,f4),draw:zn({}),buffer:function(we){return kt.create(we,c4,!1,!1)},elements:function(we){return Xt.create(we,!1)},texture:Pt.create2D,cube:Pt.createCube,renderbuffer:vt.create,framebuffer:It.create,framebufferCube:It.createCube,vao:jt.createVAO,attributes:et,frame:Nn,on:cr,limits:rt,hasExtension:function(we){return rt.extensions.indexOf(we.toLowerCase())>=0},read:Ie,destroy:ro,_gl:C,_refresh:mn,poll:function(){ir(),At&&At.update()},now:Ue,stats:yt});return k.onDone(null,To),To}return h4})});var Ts=mt((Bk,ym)=>{"use strict";var p0=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],v0=(t,e)=>[t[0]+e[0],t[1]+e[1],t[2]+e[2]],e0=(t,e)=>[t[0]*e,t[1]*e,t[2]*e],Cf=(t,e)=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2],Qc=(t,e)=>[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]],ou=t=>Math.hypot(t[0],t[1],t[2]),ya=t=>{let e=ou(t)||1;return[t[0]/e,t[1]/e,t[2]/e]};function Ni(t,e){let o=t.length-1,n=Math.min(Math.max(e,0),1)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,s=t[Math.max(0,r-1)],i=t[r],c=t[r+1],f=t[Math.min(o,r+2)],l=[0,0,0];for(let p=0;p<3;p++)l[p]=.5*(2*i[p]+(-s[p]+c[p])*a+(2*s[p]-5*i[p]+4*c[p]-f[p])*a*a+(-s[p]+3*i[p]-3*c[p]+f[p])*a*a*a);return l}function k4(t,e){return Ni(t.map(o=>[o,0,0]),e)[0]}function A4(t,e,o,n){let r={curMat:[0,0,0]},s={r:[1,0,0,0,1,0,0,0,1],t:[0,0,0],s:1},i=[];r.save=()=>{i.push({r:s.r.slice(),t:s.t.slice(),s:s.s})},r.restore=()=>{s=i.pop()};let c=(d,v)=>{let u=new Array(9);for(let h=0;h<3;h++)for(let m=0;m<3;m++)u[h*3+m]=d[h*3]*v[m]+d[h*3+1]*v[3+m]+d[h*3+2]*v[6+m];return u},f=d=>[s.r[0]*d[0]+s.r[1]*d[1]+s.r[2]*d[2],s.r[3]*d[0]+s.r[4]*d[1]+s.r[5]*d[2],s.r[6]*d[0]+s.r[7]*d[1]+s.r[8]*d[2]];r.translate=(d,v,u)=>{let h=f([d,v,u]);s.t=[s.t[0]+h[0]*s.s,s.t[1]+h[1]*s.s,s.t[2]+h[2]*s.s]},r.scale=d=>{s.s*=d},r.rotateY=d=>{let v=Math.cos(d),u=Math.sin(d);s.r=c(s.r,[v,0,u,0,1,0,-u,0,v])},r.vert=(d,v,u)=>{let h=u||r.curMat,m=f(d),g=ya(f(v));return t.push(m[0]*s.s+s.t[0],m[1]*s.s+s.t[1],m[2]*s.s+s.t[2]),e.push(g[0],g[1],g[2]),n.push(h[0],h[1],h[2]),t.length/3-1};let l=d=>[t[d*3],t[d*3+1],t[d*3+2]],p=d=>[e[d*3],e[d*3+1],e[d*3+2]];return r.tri=(d,v,u)=>{let h=l(d),m=Qc(p0(l(v),h),p0(l(u),h)),g=v0(v0(p(d),p(v)),p(u));Cf(m,g)<0?o.push(d,u,v):o.push(d,v,u)},r.box=(d,v,u,h,m,g,b)=>{let y=[[[d,v,u],[h,v,u],[d,m,u],[h,m,u],[0,0,-1]],[[h,v,g],[d,v,g],[h,m,g],[d,m,g],[0,0,1]],[[d,v,g],[d,v,u],[d,m,g],[d,m,u],[-1,0,0]],[[h,v,u],[h,v,g],[h,m,u],[h,m,g],[1,0,0]],[[d,m,u],[h,m,u],[d,m,g],[h,m,g],[0,1,0]],[[d,v,g],[h,v,g],[d,v,u],[h,v,u],[0,-1,0]]];for(let w of y){let _=r.vert(w[0],w[4],b),M=r.vert(w[1],w[4],b),T=r.vert(w[2],w[4],b),I=r.vert(w[3],w[4],b);r.tri(_,M,T),r.tri(M,I,T)}},r.surface=(d,v,u,h)=>{h=h||{};let m=.001,g=_=>Math.min(1,Math.max(0,_)),b=[],y=[];for(let _=0;_<=v;_++){let M=[],T=[];for(let I=0;I<=u;I++){let N=_/v,B=I/u,D=d(N,B),K=Math.min(1-m,Math.max(m,N)),q=h.wrapV?B:Math.min(1-m,Math.max(m,B)),X=p0(d(g(K+m),q),d(g(K-m),q)),pt=h.wrapV?q+m:g(q+m),Ft=h.wrapV?q-m:g(q-m),Lt=p0(d(K,pt),d(K,Ft)),gt=Qc(X,Lt);ou(gt)<1e-14&&(gt=h.inside?p0(D,h.inside(N,B)):[0,1,0]),gt=ya(gt),h.inside&&Cf(gt,p0(D,h.inside(N,B)))<0&&(gt=e0(gt,-1));let ct=h.mat?h.mat(N,B,D):null;M.push(r.vert(D,gt,ct)),h.double&&T.push(r.vert(D,e0(gt,-1),ct))}b.push(M),y.push(T)}let w=_=>{for(let M=0;M<v;M++)for(let T=0;T<u;T++){let I=_[M][T],N=_[M+1][T],B=_[M][T+1],D=_[M+1][T+1];r.tri(I,N,B),r.tri(N,D,B)}};w(b),h.double&&w(y)},r.ellipsoid=(d,v,u,h,m)=>{m=m||{};let g=m.warp||null;r.surface((b,y)=>{let w=b*Math.PI,_=y*Math.PI*2,M=g?g(b,y):1;return[d[0]+v[0]*M*Math.sin(w)*Math.cos(_),d[1]+v[1]*M*Math.cos(w),d[2]+v[2]*M*Math.sin(w)*Math.sin(_)]},u||10,h||14,{wrapV:!0,inside:()=>d,mat:m.mat})},r.tube=(d,v,u,h,m)=>{m=m||{};let g=40,b=[],y=null;for(let M=0;M<=g;M++){let T=M/g,I=Ni(d,Math.max(0,T-.01)),N=Ni(d,Math.min(1,T+.01)),B=ya(p0(N,I)),D;if(y)D=ya(p0(y,e0(B,Cf(y,B))));else{let K=Math.abs(B[1])<.9?[0,1,0]:[1,0,0];D=ya(Qc(B,K))}b.push({N:D,B:ya(Qc(B,D))}),y=D}let w=M=>{let T=Math.min(Math.max(M,0),1)*g,I=Math.min(g-1,Math.floor(T)),N=T-I,B=b[I],D=b[I+1];return{N:ya(v0(e0(B.N,1-N),e0(D.N,N))),B:ya(v0(e0(B.B,1-N),e0(D.B,N)))}},_=m.squash||[1,1];r.surface((M,T)=>{let I=Ni(d,M),N=w(M),B=v(M),D=T*Math.PI*2;return v0(I,v0(e0(N.N,Math.cos(D)*B*_[0]),e0(N.B,Math.sin(D)*B*_[1])))},u||12,h||8,{wrapV:!0,inside:M=>Ni(d,M),mat:m.mat})},r.lathe=(d,v,u,h,m)=>{m=m||{};let g=[];for(let b=0;b<d.length-1;b++){let y=d[b+1][0]-d[b][0],w=d[b+1][1]-d[b][1];g.push(ya([w,-y,0]))}for(let b=0;b<d.length-1;b++){let y=d[b],w=d[b+1],_=b===0||y[2]===1,M=b===d.length-2||w[2]===1,T=_?g[b]:ya(v0(g[b-1],g[b])),I=M?g[b]:ya(v0(g[b],g[b+1])),N=[],B=[];for(let D=0;D<=h;D++){let K=D/h*Math.PI*2,q=Math.cos(K),X=Math.sin(K),pt=m.mat?m.mat(K,y[1]):null,Ft=m.mat?m.mat(K,w[1]):null;N.push(r.vert([v+y[0]*q,y[1],u+y[0]*X],[T[0]*q,T[1],T[0]*X],pt)),B.push(r.vert([v+w[0]*q,w[1],u+w[0]*X],[I[0]*q,I[1],I[0]*X],Ft))}for(let D=0;D<h;D++)r.tri(N[D],N[D+1],B[D]),r.tri(N[D+1],B[D+1],B[D])}},r}ym.exports={createBuilder:A4,catmull:Ni,curve1:k4,sub:p0,add:v0,mul:e0,dot:Cf,cross:Qc,norm:ya,len:ou}});var Em=mt((Uk,Mm)=>{"use strict";var{norm:Of,add:Pf,mul:$0,sub:T4,cross:wm}=Ts(),_m=Math.PI*2,L4=(t,e,o)=>{let n=Math.min(1,Math.max(0,(o-t)/(e-t)));return n*n*(3-2*n)};function z4(t){let e=t>>>0;return()=>{e|=0,e=e+1831565813|0;let o=Math.imul(e^e>>>15,1|e);return o=o+Math.imul(o^o>>>7,61|o)^o,((o^o>>>14)>>>0)/4294967296}}function R4(t,e,o,n,r,a){let s=(d,v)=>[7,d*a,v];t.curMat=[0,0,0],t.box(e-a*1.36,n,o-a*1.36,e+a*1.36,n+.22,o+a*1.36),t.lathe([[a*1.24,n+.22,1],[a*1.3,n+.27],[a*1.31,n+.32],[a*1.26,n+.37,1],[a*1.1,n+.4],[a*1.14,n+.44,1],[a*1.18,n+.47],[a*1.1,n+.52,1],[a*.96,n+.55]],e,o,56,{mat:s});let i=n+.55,c=r-i,f=20,l=6,p=a*.075;return t.surface((d,v)=>{let u=i+d*c,h=a*(.96-.12*d),m=v*_m,g=v*f%1,b=h-p*4*g*(1-g);return[e+b*Math.cos(m),u,o+b*Math.sin(m)]},10,f*l,{wrapV:!0,inside:d=>[e,i+d*c,o],mat:(d,v)=>[7,v*_m*a,i+d*c]}),t.lathe([[a*.8,r-.02,1],[a*.9,r+.02],[a*.9,r+.07,1],[a*.82,r+.09,1],[a*.86,r+.13],[a*1.06,r+.2],[a*1.22,r+.28],[a*1.28,r+.33,1]],e,o,56,{mat:s}),t.curMat=[0,0,0],t.box(e-a*1.42,r+.33,o-a*1.42,e+a*1.42,r+.53,o+a*1.42),r+.53}function N4(t,e,o){t.curMat=[1,0,0],t.lathe([[e*1.1,0,1],[e*1.1,o*.14,1],[e*1.04,o*.14,1],[e*1.04,o*.2],[e*.97,o*.26,1],[e*.95,o*.26,1],[e*.95,o*.8,1],[e*.98,o*.8,1],[e*1.03,o*.86],[e*1.05,o*.92,1],[e*1.05,o,1],[e*.5,o,1],[0,o]],0,0,72)}function C4(t,e,o,n,r){t.save(),t.translate(e,0,o),N4(t,n,r),t.restore()}function O4(t,e,o,n,r,a){let s=z4(n),i=a?Of([a[0],0,a[1]]):null;t.save(),t.translate(e,0,o),t.scale(r||1),t.curMat=[3,0,0],t.lathe([[.17,0,1],[.2,.02],[.28,.13],[.36,.3],[.395,.47],[.38,.62],[.32,.74],[.29,.8],[.292,.82,1],[.325,.84],[.335,.88,1],[.3,.905,1],[.275,.895,1],[.272,.85]],0,0,48),t.curMat=[5,0,0],t.lathe([[.272,.85,1],[.1,.868],[0,.872]],0,0,24);let c=11,f=.86;for(let l=0;l<c;l++){let p=l>=c-2,d=l*2.399963+s()*.5,v=[Math.cos(d),0,Math.sin(d)],u=[-Math.sin(d),0,Math.cos(d)],h=l*.618%1,m=p?.06+s()*.06:.12+.62*h,g=1;if(i){let gt=v[0]*i[0]+v[2]*i[2];g=.25+.75*L4(-.7,.5,gt),m*=g}let b=p?1.1+s()*.25:.85+.55*(1-h*.55)+s()*.15,y=p?1+s()*.2:.95+s()*.28,w=p?.055:.215+s()*.05,_=.04+s()*.05,M=[v[0]*_,f,v[2]*_],T=[M[0]+v[0]*Math.sin(m)*b*.92,M[1]+Math.cos(m)*b,M[2]+v[2]*Math.sin(m)*b*.92],I=[M[0]+v[0]*Math.sin(m*.5)*b*.45,M[1]+b*.5,M[2]+v[2]*Math.sin(m*.5)*b*.45];t.curMat=[4,0,0],t.tube([M,I,T],gt=>.02-.008*gt,8,7);let N=24,B=m*.9+.05,D=m+(p?.12:(.95+.45*h)*(.35+.65*g)),K=[T],q=[],X=T;for(let gt=0;gt<N;gt++){let ct=gt/N,Wt=B+(D-B)*ct*ct,ze=[v[0]*Math.sin(Wt),Math.cos(Wt),v[2]*Math.sin(Wt)];q.push(ze),X=Pf(X,$0(ze,y/N)),K.push(X)}q.push(q[q.length-1]);let pt=gt=>{let ct=gt*N,Wt=Math.min(N-1,Math.floor(ct)),ze=ct-Wt;return Pf($0(K[Wt],1-ze),$0(K[Wt+1],ze))},Ft=gt=>{let ct=gt*N,Wt=Math.min(N,Math.floor(ct)),ze=Math.min(N,Wt+1),Se=ct-Wt;return Of(Pf($0(q[Wt],1-Se),$0(q[ze],Se)))},Lt=(s()-.5)*.5;t.curMat=[2,0,0],t.surface((gt,ct)=>{let Wt=ct*2-1,ze=pt(gt),Se=Ft(gt),Xe=Lt*gt,_e=Pf($0(u,Math.cos(Xe)),$0(wm(Se,u),Math.sin(Xe)));_e=Of(T4(_e,$0(Se,_e[0]*Se[0]+_e[1]*Se[1]+_e[2]*Se[2])));let fo=Of(wm(_e,Se)),Eo=w*Math.pow(Math.sin(Math.PI*Math.pow(gt,.72)),.85),Ko=.3*Eo*Math.abs(Wt)+.012*Math.sin(gt*40+Wt*2)*Math.abs(Wt)*(p?0:1),Zt=-.1*Eo*Wt*Wt*Wt*Wt,ge=Ko+Zt;return[ze[0]+_e[0]*Wt*Eo+fo[0]*ge,ze[1]+_e[1]*Wt*Eo+fo[1]*ge,ze[2]+_e[2]*Wt*Eo+fo[2]*ge]},14,8,{double:!0,mat:(gt,ct)=>[2,ct*2-1,gt]})}t.restore()}Mm.exports={addFlutedColumn:R4,addStatue:C4,addPlant:O4}});var F0=mt((jk,Tm)=>{"use strict";var _t={xc:7,r:2.5,spring:4.7};_t.x0=_t.xc-_t.r;_t.x1=_t.xc+_t.r;_t.top=_t.spring+_t.r;var Rr=.06,tn=.1,Sm=.08,If=_t.r,$f=[_t.x0+If/3,_t.x0+2*If/3,_t.xc+If/3,_t.xc+2*If/3],Ci=.28,nu=[.95,1.65,2.35,3.05,3.75],km=[1.05,1.8],Zc=[8,0,0],oa=[0,0,0];function wa(t,e,o,n,r,a,s,i){t.box(Math.min(e,r),Math.min(o,a),Math.min(n,s),Math.max(e,r),Math.max(o,a),Math.max(n,s),i)}function Oi(t,e,o,n,r,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),f=t.vert(n,a,s),l=t.vert(r,a,s);t.tri(i,c,f),t.tri(i,f,l)}function Ff(t,e,o,n,r,a,s=48,i=0,c=Math.PI){let f=(l,p,d)=>[_t.xc+p*Math.cos(l),_t.spring+p*Math.sin(l),d];for(let l=0;l<s;l++){let p=i+(c-i)*l/s,d=i+(c-i)*(l+1)/s,v=(p+d)/2;Oi(t,f(p,e,r),f(d,e,r),f(d,o,r),f(p,o,r),[0,0,1],a),Oi(t,f(p,o,n),f(d,o,n),f(d,e,n),f(p,e,n),[0,0,-1],a),Oi(t,f(p,e,n),f(d,e,n),f(d,e,r),f(p,e,r),[-Math.cos(v),-Math.sin(v),0],a),Oi(t,f(d,o,n),f(p,o,n),f(p,o,r),f(d,o,r),[Math.cos(v),Math.sin(v),0],a)}}function P4(t){let n=a=>[_t.xc+_t.r*Math.cos(a),_t.spring+_t.r*Math.sin(a)],r=a=>{let s=Math.cos(a),i=Math.sin(a),c=Math.abs(s)>1e-6?_t.r/Math.abs(s):1/0,f=i>1e-6?(8-_t.spring)/i:1/0,l=Math.min(c,f);return[Math.min(_t.x1,Math.max(_t.x0,_t.xc+s*l)),Math.min(8,_t.spring+i*l)]};for(let a=0;a<48;a++){let s=Math.PI*a/48,i=Math.PI*(a+1)/48,c=n(s),f=n(i),l=r(s),p=r(i);for(let[v,u]of[[.35,1],[-.35,-1]])Oi(t,[c[0],c[1],v],[f[0],f[1],v],[p[0],p[1],v],[l[0],l[1],v],[0,0,u],oa);let d=(s+i)/2;Oi(t,[c[0],c[1],-.35],[f[0],f[1],-.35],[f[0],f[1],.35],[c[0],c[1],.35],[-Math.cos(d),-Math.sin(d),0],oa)}}function I4(t){wa(t,-.35,0,-.35,_t.x0,8,.35,oa),wa(t,_t.x1,0,-.35,14+.35,8,.35,oa),P4(t),Am(t)}function Am(t){wa(t,_t.x0-.32,.3,.35,_t.x0,_t.spring,.35+.07,oa),wa(t,_t.x1,.3,.35,_t.x1+.32,_t.spring,.35+.07,oa),wa(t,_t.x0-.32-.05,0,.35,_t.x0,.3,.35+.07+.04,oa),wa(t,_t.x1,0,.35,_t.x1+.32+.05,.3,.35+.07+.04,oa),wa(t,_t.x0-.32-.06,_t.spring-.12,.35,_t.x0,_t.spring,.35+.07+.05,oa),wa(t,_t.x1,_t.spring-.12,.35,_t.x1+.32+.06,_t.spring,.35+.07+.05,oa),Ff(t,_t.r,_t.r+.32,.35,.35+.07,oa),Ff(t,_t.r+.32,_t.r+.32+.06,.35,.35+.07+.03,oa),wa(t,_t.xc-.22,_t.top-.08,.35,_t.xc+.22,_t.top+.32+.12,.35+.07+.06,oa)}function $4(t,e){e=e||"all";let o=e==="all",n=o||e==="fixed",r=-Sm/2,a=Sm/2,s=(d,v,u,h,m=0)=>wa(t,d-m,v,r,u+m,h,a,Zc),i=d=>_t.spring+Math.sqrt(Math.max(0,_t.r*_t.r-(d-_t.xc)*(d-_t.xc))),c=e==="right"?_t.xc:_t.x0,f=e==="left"?_t.xc:_t.x1,l=d=>o||e==="left"&&d<_t.xc||e==="right"&&d>_t.xc,p=o?null:_t.spring-.06;if(n){s(_t.x0,0,_t.x0+tn,_t.spring),s(_t.x1-tn,0,_t.x1,_t.spring),Ff(t,_t.r-tn,_t.r,r,a,Zc,64),s(_t.x0,0,_t.x1,.05),s(_t.x0,_t.spring-.06,_t.x1,_t.spring+.06);for(let d of km)Ff(t,d-Rr/2,d+Rr/2,r,a,Zc,48)}if(o){s(_t.x0,0,_t.x1,Ci),s(_t.xc-tn/2,0,_t.xc+tn/2,_t.top-tn*.5);for(let d of $f)s(d-Rr/2,Ci,d+Rr/2,i(d)-tn*.5);for(let d of nu)s(_t.x0,d-Rr/2,_t.x1,d+Rr/2)}else if(e==="fixed"){s(_t.xc-tn/2,_t.spring+.06,_t.xc+tn/2,_t.top-tn*.5);for(let d of $f)s(d-Rr/2,_t.spring+.06,d+Rr/2,i(d)-tn*.5)}else{let d=e==="left"?_t.x0+tn:_t.x1-tn;s(Math.min(d,d+(e==="left"?tn*.8:-tn*.8)),.05,Math.max(d,d+(e==="left"?tn*.8:-tn*.8)),p),s(c,.05,f,Ci),s(c,p-.07,f,p);let v=e==="left"?_t.xc-tn/2:_t.xc;s(v,.05,v+tn/2,p);for(let u of $f)l(u)&&s(u-Rr/2,Ci,u+Rr/2,p-.07);for(let u of nu)s(c,u-Rr/2,f,u+Rr/2)}for(let d of[-1,1]){let v=_t.xc+d*.16;l(v)&&(wa(t,v-.02,1.05,a,v+.02,1.13,a+.06,Zc),wa(t,v-(d>0?0:.14),1.07,a+.05,v+(d>0?.14:0),1.11,a+.08,Zc))}}function F4(t){t=t||"all";let e=[],o=0,{x0:n,x1:r,xc:a,r:s,spring:i}=_t;if(t!=="fixed"){let f=t==="right"?a:n,l=t==="left"?a:r;if(e.push([f,0,o],[l,0,o],[l,i,o],[f,0,o],[l,i,o],[f,i,o]),t!=="all")return e}let c=48;for(let f=0;f<c;f++){let l=Math.PI*f/c,p=Math.PI*(f+1)/c;e.push([a,i,o],[a+s*Math.cos(l),i+s*Math.sin(l),o],[a+s*Math.cos(p),i+s*Math.sin(p),o])}return e}var Po=t=>t.toFixed(4);function D4(){let t=$f.map(n=>`vb = max(vb, barCover(abs(q.x - ${Po(n)}), ${Po(Rr/2)}, soft));`).join(`
		`),e=nu.map(n=>`hb = max(hb, barCover(abs(q.y - ${Po(n)}), ${Po(Rr/2)}, soft));`).join(`
		`),o=km.map(n=>`ab = max(ab, barCover(abs(rr - ${Po(n)}), ${Po(Rr/2)}, soft));`).join(`
		`);return`
	float barCover(float d, float hw, float soft) {
		return 1.0 - smoothstep(hw - soft, hw + soft, d);
	}

	// how open the doorway is at a point (x, y) on a plane, 0..1
	float doorOpen(vec2 q, float soft) {
		float side = smoothstep(${Po(_t.x0)} - soft, ${Po(_t.x0)} + soft, q.x)
		           * (1.0 - smoothstep(${Po(_t.x1)} - soft, ${Po(_t.x1)} + soft, q.x));
		float above = smoothstep(-soft, soft, q.y);
		float rr = length(q - vec2(${Po(_t.xc)}, ${Po(_t.spring)}));
		float arch = q.y < ${Po(_t.spring)} ? 1.0 : 1.0 - smoothstep(${Po(_t.r)} - soft, ${Po(_t.r)} + soft, rr);
		return side * above * arch;
	}

	// light that reaches floor point p through the door, 0..1
	float doorLight(vec3 p, vec3 toLight) {
		if (p.z < 0.3 || toLight.z > -0.01) return 0.0;
		// through the inner face of the wall
		float tIn = (${Po(.35)} - p.z) / toLight.z;
		float tMid = (0.0 - p.z) / toLight.z;
		float tOut = (${Po(-.35)} - p.z) / toLight.z;
		vec2 qIn = (p + toLight * tIn).xy;
		vec2 q = (p + toLight * tMid).xy;
		vec2 qOut = (p + toLight * tOut).xy;
		float dist = length(toLight * tMid);
		float soft = 0.006 + 0.016 * dist;
		float open = doorOpen(qIn, soft) * doorOpen(qOut, soft);
		if (open <= 0.0) return 0.0;

		// the frame: outer jambs, arched head, transom, rails, stiles, bars
		float rr = length(q - vec2(${Po(_t.xc)}, ${Po(_t.spring)}));
		float vb = barCover(abs(q.x - ${Po(_t.xc)}), ${Po(tn/2)}, soft);
		${t}
		float hb = barCover(abs(q.y - ${Po(_t.spring)}), 0.06, soft);
		hb = max(hb, 1.0 - smoothstep(${Po(Ci)} - soft, ${Po(Ci)} + soft, q.y));
		float hRows = 0.0;
		{
			float hb2 = 0.0;
			${e.replace(/hb = max\(hb,/g,"hb2 = max(hb2,")}
			hRows = q.y < ${Po(_t.spring)} ? hb2 : 0.0;
		}
		float ab = 0.0;
		${o}
		ab = q.y > ${Po(_t.spring)} ? ab : 0.0;
		float frame = max(
			barCover(abs(q.x - ${Po(_t.x0+tn/2)}), ${Po(tn/2)}, soft),
			barCover(abs(q.x - ${Po(_t.x1-tn/2)}), ${Po(tn/2)}, soft));
		frame = q.y < ${Po(_t.spring)} ? frame : barCover(abs(rr - ${Po(_t.r-tn/2)}), ${Po(tn/2)}, soft);
		float cover = max(max(max(vb, hb), max(hRows, ab)), frame);
		return open * (1.0 - cover * 0.92);
	}`}Tm.exports={addEntranceWall:I4,addSurround:Am,addFrames:$4,glassPanes:F4,doorLightGLSL:D4,DOOR:_t,WALL:.35}});var Ii=mt((Wk,Om)=>{"use strict";var zs=1.1583333333333334,Rs=(13.05-8*.16)/9,au=zs+.16,su=Rs+.16,g0=14/2-7.75/2,na=15,Jc=g0+7.75,m0=na+13.05,ra=.3,x0={y:8+.18,inset:.15},Ls={y:8+.36,inset:ra},iu=8+.2,tl=8+.62,cu=8+.9,lu=.016,Nm=.28,Cm=.66,q4=(()=>{let t=[-.15,1,.3],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>o/e)})(),G4=(()=>{let t=[.42,1,-.32],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>o/e)})(),H4=[9,0,0],lr=[10,0,0];function Pi(t,e,o,n,r,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),f=t.vert(n,a,s),l=t.vert(r,a,s);t.tri(i,c,f),t.tri(i,f,l)}function Nr(t,e,o,n,r,a,s){Pi(t,[e,a,o],[n,a,o],[n,a,r],[e,a,r],[0,-1,0],s)}function ru(t,e,o,n,r,a,s,i){Pi(t,[e,a,o],[n,a,o],[n,s,o],[e,s,o],[0,0,1],i),Pi(t,[n,a,r],[e,a,r],[e,s,r],[n,s,r],[0,0,-1],i),Pi(t,[e,a,r],[e,a,o],[e,s,o],[e,s,r],[1,0,0],i),Pi(t,[n,a,o],[n,a,r],[n,s,r],[n,s,o],[-1,0,0],i)}function Lm(t,e,o,n,r){Nr(t,e[0],e[1],e[2],o[1],n,r),Nr(t,e[0],o[3],e[2],e[3],n,r),Nr(t,e[0],o[1],o[0],o[3],n,r),Nr(t,o[2],o[1],e[2],o[3],n,r)}var zm=t=>g0+t*au,Rm=t=>na+t*su;function B4(t,e,o=48){let n=[g0-ra,na-ra,Jc+ra,m0+ra],r=(f,l)=>[f[0]+l,f[1]+l,f[2]-l,f[3]-l],a=r(n,x0.inset),s=r(n,Ls.inset);Nr(t,0,0,14,n[1],8,e),Nr(t,0,n[3],14,o,8,e),Nr(t,0,n[1],n[0],n[3],8,e),Nr(t,n[2],n[1],14,n[3],8,e);let i=.06,c=.06;t.box(n[0]-i,8-c,n[1]-i,n[2]+i,8,n[1],lr),t.box(n[0]-i,8-c,n[3],n[2]+i,8,n[3]+i,lr),t.box(n[0]-i,8-c,n[1],n[0],8,n[3],lr),t.box(n[2],8-c,n[1],n[2]+i,8,n[3],lr),ru(t,...n.slice(0,2),...n.slice(2),8,x0.y,lr),Lm(t,n,a,x0.y,lr),ru(t,...a.slice(0,2),...a.slice(2),x0.y,Ls.y,lr),Lm(t,a,s,Ls.y,lr);for(let f=1;f<6;f++){let l=zm(f)-.16;t.box(l,iu,na,l+.16,Ls.y,m0,lr)}for(let f=1;f<9;f++){let l=Rm(f)-.16;t.box(g0,iu,l,Jc,Ls.y,l+.16,lr)}for(let f=0;f<9;f++)for(let l=0;l<6;l++){let p=zm(l),d=Rm(f);ru(t,p,d,p+zs,d+Rs,Ls.y,cu,lr),Nr(t,p,d,p+zs,d+Rs,cu,H4),U4(t,p+zs/2,d+Rs/2,zs/2,Rs/2)}}function U4(t,e,o,n,r){let a=tl,s=lu;Nr(t,e-n,o-s,e+n,o+s,a,lr),Nr(t,e-s,o-r,e+s,o+r,a,lr);for(let i of[1,-1]){let c=Math.hypot(n,r),f=n/c,l=i*r/c,p=-l*s,d=f*s;Pi(t,[e-f*c+p,a,o-l*c+d],[e+f*c+p,a,o+l*c+d],[e+f*c-p,a,o+l*c-d],[e-f*c-p,a,o-l*c-d],[0,-1,0],lr)}for(let i of[Nm,Cm]){let c=i*n,f=i*r;Nr(t,e-c-s,o-f-s,e+c+s,o-f+s,a,lr),Nr(t,e-c-s,o+f-s,e+c+s,o+f+s,a,lr),Nr(t,e-c-s,o-f+s,e-c+s,o+f-s,a,lr),Nr(t,e+c-s,o-f+s,e+c+s,o+f-s,a,lr)}}var qe=t=>t.toFixed(4);function j4(){return`
	// by day the sun, high and a little towards the entrance; by night
	// the moon, lower and from the other side, so its squares of light
	// reach across the floor to the foot of the wall. (When the light is
	// switched, the squares slide from one to the other.)
	const vec3 SKY_SUN_DAY = vec3(${q4.map(qe).join(", ")});
	const vec3 SKY_MOON = vec3(${G4.map(qe).join(", ")});
	vec3 skySun() { return normalize(mix(SKY_SUN_DAY, SKY_MOON, night)); }
	#define SKY_SUN skySun()

	float rectOpen(vec2 q, vec4 r, float soft) {
		vec2 lo = smoothstep(r.xy - soft, r.xy + soft, q);
		vec2 hi = 1.0 - smoothstep(r.zw - soft, r.zw + soft, q);
		return lo.x * lo.y * hi.x * hi.y;
	}

	// inside a pane (not on a beam)? 0..1
	float paneOpen(vec2 q, float soft) {
		vec2 rel = q - vec2(${qe(g0)}, ${qe(na)});
		vec2 pitch = vec2(${qe(au)}, ${qe(su)});
		vec2 cell = floor(rel / pitch);
		if (cell.x < 0.0 || cell.y < 0.0 || cell.x > ${qe(5)} || cell.y > ${qe(8)}) return 0.0;
		vec2 loc = rel - cell * pitch;
		return rectOpen(loc, vec4(0.0, 0.0, ${qe(zs)}, ${qe(Rs)}), soft);
	}

	float barCov(float d, float soft) {
		return 1.0 - smoothstep(${qe(lu)} - soft, ${qe(lu)} + soft, d);
	}

	// sunlight reaching point p through the skylight, 0..1
	float skylightAt(vec3 p) {
		if (p.y > ${qe(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q0 = (p + L * ((${qe(8)} - p.y) / L.y)).xz;
		vec2 q1 = (p + L * ((${qe(x0.y)} - p.y) / L.y)).xz;
		vec2 qb = (p + L * ((${qe(iu)} - p.y) / L.y)).xz;
		vec2 q2 = (p + L * ((${qe(Ls.y)} - p.y) / L.y)).xz;
		float tG = (${qe(tl)} - p.y) / L.y;
		vec2 qg = (p + L * tG).xz;
		vec2 qt = (p + L * ((${qe(cu)} - p.y) / L.y)).xz;
		float soft = 0.004 + 0.007 * tG;
		float open = rectOpen(q0, vec4(${qe(g0-ra)}, ${qe(na-ra)}, ${qe(Jc+ra)}, ${qe(m0+ra)}), soft)
		           * rectOpen(q1, vec4(${qe(g0-ra+x0.inset)}, ${qe(na-ra+x0.inset)}, ${qe(Jc+ra-x0.inset)}, ${qe(m0+ra-x0.inset)}), soft)
		           * paneOpen(qb, soft) * paneOpen(q2, soft) * paneOpen(qt, soft);
		if (open <= 0.0) return 0.0;
		// the glazing, measured from the centre of this pane
		vec2 rel = qg - vec2(${qe(g0)}, ${qe(na)});
		vec2 pitch = vec2(${qe(au)}, ${qe(su)});
		vec2 paneHalf = vec2(${qe(zs/2)}, ${qe(Rs/2)});
		vec2 c = rel - floor(rel / pitch) * pitch - paneHalf;
		vec2 ac = abs(c);
		vec2 an = ac / paneHalf;                       // 0 at the centre, 1 at the pane's edge
		float hm = min(paneHalf.x, paneHalf.y);
		float ring = max(an.x, an.y);
		float cover = max(barCov(ac.x, soft), barCov(ac.y, soft));
		cover = max(cover, barCov(abs(an.x - an.y) * hm * 0.7071, soft));
		cover = max(cover, barCov(abs(ring - ${qe(Nm)}) * hm, soft));
		cover = max(cover, barCov(abs(ring - ${qe(Cm)}) * hm, soft));
		return open * (1.0 - cover * 0.9);
	}

	// the same light for the beams in the air: the whole opening glows a
	// little, and the panes and bars show in it, softly
	float skylightVol(vec3 p) {
		if (p.y > ${qe(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q = (p + L * ((${qe(tl)} - p.y) / L.y)).xz;
		float open = rectOpen(q, vec4(${qe(g0)}, ${qe(na)}, ${qe(Jc)}, ${qe(m0)}), 0.25);
		if (open <= 0.0) return 0.0;
		return open * (0.13 + 0.87 * skylightAt(p));
	}

	// light thrown back up by the bright squares on the floor: strongest
	// on what stands beside them and faces them (the lower walls, the
	// pillars, the statues, the ceiling above), fading with distance
	float skylightBounce(vec3 p, vec3 n) {
		if (p.x > 14.2 || p.x < -0.4) return 0.0;
		vec3 L = SKY_SUN;
		vec2 c = vec2(${qe(14/2)}, ${qe((na+m0)/2)}) - L.xz * (${qe(tl)} / L.y);
		vec2 d = max(abs(p.xz - c) - vec2(${qe(7.75/2)}, ${qe(13.05/2)}), 0.0);
		float fall = 1.0 / (1.0 + 0.09 * (dot(d, d) + p.y * p.y * 0.6));
		vec3 to = normalize(vec3(c.x, -0.4, c.y) - p);
		return fall * (0.3 + 0.7 * max(dot(n, to), 0.0));
	}

	// a soft daylight glow under the lantern
	float skylightGlow(vec3 p) {
		float z = smoothstep(${qe(na-3)}, ${qe(na+2)}, p.z)
		        * (1.0 - smoothstep(${qe(m0-2)}, ${qe(m0+3)}, p.z));
		float x = 1.0 - 0.35 * smoothstep(${qe(7.75/2)}, ${qe(14/2)}, abs(p.x - ${qe(14/2)}));
		return z * x;
	}`}Om.exports={addSkylight:B4,skylightGLSL:j4,Z_START:na,Z_END:m0,GLASS_Y:tl,HEIGHT:8}});var vr=mt((Vk,Dm)=>{"use strict";var Fi=F0(),du=8,en=.35,Bt={x0:13.65,x1:38.12,z0:41,z1:47.2,zc:44.1,hallEnd:50.65,spring:5.6,crown:du},Pm=(Bt.z1-Bt.z0)/2,fu=Bt.crown-Bt.spring,uu=(fu*fu+Pm*Pm)/(2*fu),pu=Bt.crown-uu;function $i(t){let e=t-Bt.zc;return pu+Math.sqrt(Math.max(0,uu*uu-e*e))}var Le={first:17.43,pitch:4.4,count:5,halfW:1.2,sill:.75,spring:4.3},Fa=Array.from({length:Le.count},(t,e)=>Le.first+e*Le.pitch),$m=Fa.slice(1).map(t=>t-Le.pitch/2),W4=[Fa[0],Fa[2],Fa[4]],qf=[Fa[1],Fa[3]],jr={r:1.3,sill:.62,spring:3.3},Do=[0,0,0],el=[11,0,0],D0=[10,0,0],ol=[8,0,0];function Zn(t,e,o,n,r,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),f=t.vert(n,a,s),l=t.vert(r,a,s);t.tri(i,c,f),t.tri(i,f,l)}function Wr(t,e,o,n,r,a,s,i){t.box(Math.min(e,r),Math.min(o,a),Math.min(n,s),Math.max(e,r),Math.max(o,a),Math.max(n,s),i)}function nl(t,e){let{u0:o,u1:n,w0:r,w1:a,top:s,holes:i,mat:c}=e,f=new Set([o,n]);for(let h of i){f.add(h.u0),f.add(h.u1);let m=Math.max(8,Math.ceil((h.u1-h.u0)/(h.step||.08)));for(let g=1;g<m;g++)f.add(h.u0+(h.u1-h.u0)*g/m)}for(let h of e.cuts||[])f.add(h);let l=e.topStep||.5;for(let h=o;h<n;h+=l)f.add(h);let p=[...f].filter(h=>h>=o-1e-9&&h<=n+1e-9).sort((h,m)=>h-m),d=(h,m)=>h.bot?h.bot(m):h.bottom,v=(h,m)=>{let g=s(h),b=m.map(_=>[Math.max(0,d(_,h)),Math.min(_.head(h),g)]).filter(_=>_[1]>_[0]).sort((_,M)=>_[0]-M[0]),y=[],w=0;for(let _ of b)_[0]>w+1e-6&&y.push([w,_[0]]),w=Math.max(w,_[1]);return g>w+1e-6&&y.push([w,g]),y},u=(h,m,g)=>[h,m,g];for(let h=0;h<p.length-1;h++){let m=p[h],g=p[h+1],b=(m+g)/2,y=i.filter(N=>b>N.u0&&b<N.u1),w=y.length?Math.max(m,Math.max(...y.map(N=>N.u0))+1e-7):m,_=y.length?Math.min(g,Math.min(...y.map(N=>N.u1))-1e-7):g,M=v(w,y),T=v(_,y),I=Math.min(M.length,T.length);for(let N=0;N<I;N++){let[B,D]=M[N],[K,q]=T[N];D-B<1e-6&&q-K<1e-6||(Zn(t,u(m,B,a),u(g,K,a),u(g,q,a),u(m,D,a),[0,0,1],c),e.frontOnly||Zn(t,u(g,K,r),u(m,B,r),u(m,D,r),u(g,q,r),[0,0,-1],c))}}e.noEnds||(Zn(t,u(o,0,r),u(o,0,a),u(o,s(o),a),u(o,s(o),r),[-1,0,0],c),Zn(t,u(n,0,a),u(n,0,r),u(n,s(n),r),u(n,s(n),a),[1,0,0],c));for(let h of i){if(h.noReveal)continue;let m=h.mat||e.revealMat||c,g=Math.max(0,d(h,h.u0+1e-7)),b=Math.max(0,d(h,h.u1-1e-7)),y=Math.min(h.head(h.u0+1e-7),s(h.u0)),w=Math.min(h.head(h.u1-1e-7),s(h.u1));y>g+1e-6&&Zn(t,u(h.u0,g,a),u(h.u0,g,r),u(h.u0,y,r),u(h.u0,y,a),[1,0,0],m),w>b+1e-6&&Zn(t,u(h.u1,b,r),u(h.u1,b,a),u(h.u1,w,a),u(h.u1,w,r),[-1,0,0],m);let _=Math.max(8,Math.ceil((h.u1-h.u0)/(h.step||.06)));for(let M=0;M<_;M++){let T=h.u0+(h.u1-h.u0)*M/_,I=h.u0+(h.u1-h.u0)*(M+1)/_,N=Math.max(T,h.u0+1e-7),B=Math.min(I,h.u1-1e-7),D=Math.min(h.head(N),s(T)),K=Math.min(h.head(B),s(I));if(!(D>=s(T)-1e-6&&K>=s(I)-1e-6)){let pt=I-T,Ft=K-D,Lt=Math.hypot(pt,Ft)||1;Zn(t,u(T,D,r),u(I,K,r),u(I,K,a),u(T,D,a),[Ft/Lt,-pt/Lt,0],m)}let q=d(h,N),X=d(h,B);if(q>1e-6||X>1e-6){let pt=I-T,Ft=X-q,Lt=Math.hypot(pt,Ft)||1;Zn(t,u(I,X,r),u(T,q,r),u(T,q,a),u(I,X,a),[-Ft/Lt,pt/Lt,0],m)}}}}var hu=(t,e,o)=>n=>{let r=n-t;return o+Math.sqrt(Math.max(0,e*e-r*r))};function V4(t,e){let o=jr.r,n=jr.sill,r=jr.spring,a=Bt.z0,s=24,i=(v,u,h)=>[e+Math.cos(v)*u,h,a-Math.sin(v)*u];for(let v=0;v<s;v++){let u=Math.PI*v/s,h=Math.PI*(v+1)/s,m=[-Math.cos(u),0,Math.sin(u)],g=[-Math.cos(h),0,Math.sin(h)],b=[t.vert(i(u,o,n),m,Do),t.vert(i(h,o,n),g,Do),t.vert(i(h,o,r),g,Do),t.vert(i(u,o,r),m,Do)];t.tri(b[0],b[1],b[2]),t.tri(b[0],b[2],b[3])}let c=12,f=(v,u)=>[e+Math.cos(v)*Math.cos(u)*o,r+Math.sin(u)*o,a-Math.sin(v)*Math.cos(u)*o],l=(v,u)=>[-Math.cos(v)*Math.cos(u),-Math.sin(u),Math.sin(v)*Math.cos(u)];for(let v=0;v<s;v++)for(let u=0;u<c;u++){let h=Math.PI*v/s,m=Math.PI*(v+1)/s,g=Math.PI/2*u/c,b=Math.PI/2*(u+1)/c,y=[t.vert(f(h,g),l(h,g),D0),t.vert(f(m,g),l(m,g),D0),t.vert(f(m,b),l(m,b),D0),t.vert(f(h,b),l(h,b),D0)];t.tri(y[0],y[1],y[2]),t.tri(y[0],y[2],y[3])}for(let v=1;v<8;v++){let u=Math.PI*v/8,h=[];for(let m=0;m<=10;m++){let g=Math.PI/2*m/10*.97;h.push(f(u,g).map((b,y)=>b-l(u,g)[y]*.02))}t.tube(h,m=>.035*(1-m*.6),12,6,{mat:()=>D0})}let p=t.vert([e,n,a],[0,1,0],Do);for(let v=0;v<s;v++){let u=Math.PI*v/s,h=Math.PI*(v+1)/s;t.tri(p,t.vert(i(u,o,n),[0,1,0],Do),t.vert(i(h,o,n),[0,1,0],Do))}Wr(t,e-o-.12,n-.1,a,e+o+.12,n+.02,a+.12,Do),Wr(t,e-o-.16,n-.2,a,e+o+.16,n-.1,a+.07,Do);let d=.16;for(let v=0;v<s;v++){let u=Math.PI*v/s,h=Math.PI*(v+1)/s,m=(g,b,y)=>[e+Math.cos(g)*b,r+Math.sin(g)*b,y];Zn(t,m(u,o,a+.05),m(h,o,a+.05),m(h,o+d,a+.05),m(u,o+d,a+.05),[0,0,1],Do),Zn(t,m(u,o+d,a),m(h,o+d,a),m(h,o+d,a+.05),m(u,o+d,a+.05),[Math.cos((u+h)/2),Math.sin((u+h)/2),0],Do),Zn(t,m(u,o,a),m(h,o,a),m(h,o,a+.05),m(u,o,a+.05),[-Math.cos((u+h)/2),-Math.sin((u+h)/2),0],Do)}for(let v of[-1,1]){let u=e+v*o,h=e+v*(o+d);Wr(t,u,n,a,h,r,a+.05,Do),Wr(t,u-v*.02,r-.12,a,h+v*.06,r,a+.09,Do)}Wr(t,e-.11,r+o-.04,a,e+.11,r+o+d+.1,a+.09,Do),t.lathe([[.66,n,1],[.66,n+.06,1],[.62,n+.1],[.6,n+.3],[.64,n+.34,1],[.64,n+.4,1],[0,n+.4]],e,a-.62,40,{mat:()=>Do})}var X4=jr.sill+.4,Y4=Bt.z0-.62;function K4(t){Zn(t,[14,0,Bt.z0-en],[Bt.x1+en,0,Bt.z0-en],[Bt.x1+en,0,Bt.z1+en],[14,0,Bt.z1+en],[0,1,0],Do),t.curMat=el,nl(t,{u0:14+en,u1:Bt.x1+2*en,w0:Bt.z0-2*en,w1:Bt.z0,top:()=>Bt.spring,holes:qf.map(f=>({u0:f-jr.r,u1:f+jr.r,bottom:jr.sill,head:hu(f,jr.r,jr.spring),noReveal:!0})),mat:el,cuts:[Bt.x1]});for(let f of qf)V4(t,f);t.save(),t.translate(0,0,Bt.z1),t.rotateY(Math.PI),t.translate(-(Bt.x1+2*en),0,-2*en);let e=f=>Bt.x1+2*en-f;nl(t,{u0:e(Bt.x1+2*en),u1:e(13.65),w0:0,w1:2*en,top:()=>Bt.spring,holes:Fa.map(f=>({u0:e(f+Le.halfW),u1:e(f-Le.halfW),bottom:Le.sill,head:hu(e(f),Le.halfW,Le.spring)})),mat:el,revealMat:Do}),t.restore(),t.save(),t.translate(Bt.x1,0,0),t.rotateY(-Math.PI/2);let o=Fi.DOOR,n=Bt.zc,r=o.r;nl(t,{u0:Bt.z0-2*en,u1:Bt.z1+2*en,w0:-2*en,w1:0,top:f=>f<Bt.z0||f>Bt.z1?Bt.spring:$i(f),topStep:.15,holes:[{u0:n-r,u1:n+r,bottom:0,head:hu(n,r,o.spring)}],mat:el,revealMat:Do}),t.restore(),t.save(),t.translate(14+en,0,0),t.rotateY(-Math.PI/2),nl(t,{u0:Bt.z0,u1:Bt.z1,w0:-0,w1:2*en,top:()=>du,topStep:.15,holes:[{u0:Bt.z0,u1:Bt.z1,bottom:0,head:f=>$i(f)}],mat:el,revealMat:Do}),t.restore();let a=14+en,s=Math.ceil((Bt.x1-a)/1),i=28,c=[];for(let f=0;f<=s;f++){let l=a+(Bt.x1-a)*f/s,p=[];for(let d=0;d<=i;d++){let v=Bt.z0+(Bt.z1-Bt.z0)*d/i,u=$i(v),h=[0,pu-u,Bt.zc-v],m=Math.hypot(h[1],h[2]);p.push(t.vert([l,u,v],[0,h[1]/m,h[2]/m],D0))}c.push(p)}for(let f=0;f<s;f++)for(let l=0;l<i;l++)t.tri(c[f][l],c[f+1][l],c[f][l+1]),t.tri(c[f+1][l],c[f+1][l+1],c[f][l+1])}function Im(t,e,o,n){let a=[];for(let s=0;s<=32;s++){let i=Bt.z0+(Bt.z1-Bt.z0)*s/32,c=$i(i),f=pu-c,l=Bt.zc-i,p=Math.hypot(f,l),d=[c+f/p*n,i+l/p*n];a.push({y:c,z:i,iy:d[0],iz:d[1],n:[0,f/p,l/p]})}for(let s=0;s<32;s++){let i=a[s],c=a[s+1];Zn(t,[e-o,i.iy,i.iz],[e+o,i.iy,i.iz],[e+o,c.iy,c.iz],[e-o,c.iy,c.iz],i.n,Do),Zn(t,[e-o,i.y,i.z],[e-o,i.iy,i.iz],[e-o,c.iy,c.iz],[e-o,c.y,c.z],[-1,0,0],Do),Zn(t,[e+o,i.iy,i.iz],[e+o,i.y,i.z],[e+o,c.y,c.z],[e+o,c.iy,c.iz],[1,0,0],Do)}}function Df(t,e,o,n){let s=o,i=o+n*.16;Wr(t,e-.28,0,s,e+.28,Bt.spring-.3,i,Do),Wr(t,e-.28-.06,0,s,e+.28+.06,.32,o+n*(.16+.05),Do),Wr(t,e-.28-.05,Bt.spring-.3,s,e+.28+.05,Bt.spring-.1,o+n*(.16+.05),Do),Wr(t,e-.28-.1,Bt.spring-.1,s,e+.28+.1,Bt.spring,o+n*(.16+.1),Do)}function Q4(t,e){let o=$i(Bt.zc),n=[[0,o-.13,1],[.05,o-.125],[.12,o-.1],[.16,o-.06,1],[.22,o-.05],[.3,o-.075],[.4,o-.06],[.48,o-.03,1],[.55,o-.035],[.7,o-.025],[.82,o-.012,1],[.95,o+.03]];t.lathe(n,e,Bt.zc,48,{mat:()=>D0});for(let r=0;r<8;r++){let a=r*Math.PI/4,s=e+Math.cos(a)*.32,i=Bt.zc+Math.sin(a)*.32;t.save(),t.translate(s,o-.07,i),t.rotateY(-a),t.curMat=D0,t.ellipsoid([0,0,0],[.13,.03,.06],6,10),t.restore()}}function Z4(t){t.curMat=Do;for(let[e,o]of[[Bt.z0,1],[Bt.z1,-1]])Wr(t,14.35,Bt.spring-.12,e,Bt.x1,Bt.spring,e+o*.1,Do),Wr(t,14.35,Bt.spring-.04,e,Bt.x1,Bt.spring+.05,e+o*.18,Do);for(let[e,o]of[[Bt.z0,1],[Bt.z1,-1]])Wr(t,14.35,0,e,Bt.x1,.42,e+o*.12,Do),Wr(t,14.35,.42,e,Bt.x1,.5,e+o*.07,Do);for(let e of $m)Im(t,e,.24,.16),Df(t,e,Bt.z0,1),Df(t,e,Bt.z1,-1);for(let e of[14.35+.28,Bt.x1-.28])Im(t,e,.28,.22),Df(t,e,Bt.z0,1),Df(t,e,Bt.z1,-1);for(let e of Fa)Q4(t,e)}function J4(t){let e=Bt.z1+en,o=e-.04,n=e+.04,r=(i,c,f,l)=>Wr(t,i,c,o,f,l,n,ol),a=Le.halfW,s=(i,c,f,l,p,d)=>{let v=(u,h,m)=>[i+h*Math.cos(u),Le.spring+h*Math.sin(u),m];for(let u=0;u<d;u++){let h=l+(p-l)*u/d,m=l+(p-l)*(u+1)/d;Zn(t,v(h,c,o),v(m,c,o),v(m,f,o),v(h,f,o),[0,0,-1],ol),Zn(t,v(h,f,n),v(m,f,n),v(m,c,n),v(h,c,n),[0,0,1],ol)}};for(let i of Fa){let c=i-a,f=i+a;r(c,Le.sill,c+.07,Le.spring),r(f-.07,Le.sill,f,Le.spring),r(c,Le.sill,f,Le.sill+.07),r(c,Le.spring-.04,f,Le.spring+.04);for(let p of[-.5,0,.5])r(i+p*a-.022,Le.sill,i+p*a+.022,Le.spring);let l=6;for(let p=1;p<l;p++){let d=Le.sill+(Le.spring-Le.sill)*p/l;r(c,d-.02,f,d+.02)}s(i,a-.07,a,0,Math.PI,32),s(i,.42,.46,0,Math.PI,20);for(let p=1;p<6;p++){let d=Math.PI*p/6,v=Math.cos(d),u=Math.sin(d),h=.02,m=(g,b)=>[i+v*g-u*h*b,Le.spring+u*g+v*h*b];Zn(t,[...m(.44,-1),o],[...m(a-.05,-1),o],[...m(a-.05,1),o],[...m(.44,1),o],[0,0,-1],ol),Zn(t,[...m(.44,1),n],[...m(a-.05,1),n],[...m(a-.05,-1),n],[...m(.44,-1),n],[0,0,1],ol)}}}function t_(){let t=[],e=Bt.z1+en;for(let o of Fa){let n=o-Le.halfW,r=o+Le.halfW;t.push([n,Le.sill,e],[r,Le.sill,e],[r,Le.spring,e],[n,Le.sill,e],[r,Le.spring,e],[n,Le.spring,e]);for(let a=0;a<24;a++){let s=Math.PI*a/24,i=Math.PI*(a+1)/24;t.push([o,Le.spring,e],[o+Le.halfW*Math.cos(s),Le.spring+Le.halfW*Math.sin(s),e],[o+Le.halfW*Math.cos(i),Le.spring+Le.halfW*Math.sin(i),e])}}return t}function Fm(t,e){t.save(),t.translate(Bt.x1+en,0,Bt.zc-7),t.rotateY(-Math.PI/2),e(),t.restore()}function e_(t){Fm(t,()=>{Fi.addSurround(t),Fi.addFrames(t,"fixed")})}function o_(t){return Fi.glassPanes(t||"fixed").map(([o,n,r])=>[Bt.x1+en-r,n,Bt.zc-7+o])}function n_(t){K4(t),Z4(t),J4(t),e_(t),t.curMat=[0,0,0]}var r_={x:Bt.x1+en,zLo:Bt.zc-Fi.DOOR.r,zHi:Bt.zc+Fi.DOOR.r},mo=t=>t.toFixed(4);function a_(){return`
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
		float k = floor((q.x - ${mo(Le.first)}) / ${mo(Le.pitch)} + 0.5);
		if (k < 0.0 || k > ${mo(Le.count-1)}) return 0.0;
		float dx = q.x - (${mo(Le.first)} + k * ${mo(Le.pitch)});
		float side = 1.0 - smoothstep(${mo(Le.halfW)} - soft, ${mo(Le.halfW)} + soft, abs(dx));
		float sill = smoothstep(${mo(Le.sill)} - soft, ${mo(Le.sill)} + soft, q.y);
		float r = length(vec2(dx, q.y - ${mo(Le.spring)}));
		float head = q.y < ${mo(Le.spring)} ? 1.0 : 1.0 - smoothstep(${mo(Le.halfW)} - soft, ${mo(Le.halfW)} + soft, r);
		float open = side * sill * head;
		// the black glazing bars, softly
		float cover = 0.0;
		cover = max(cover, winBar(abs(dx), 0.022, soft));
		cover = max(cover, winBar(abs(abs(dx) - ${mo(Le.halfW*.5)}), 0.022, soft));
		float rowH = ${mo((Le.spring-Le.sill)/6)};
		float ry = (q.y - ${mo(Le.sill)}) / rowH;
		cover = max(cover, q.y < ${mo(Le.spring)} ? winBar(abs(fract(ry + 0.5) - 0.5) * rowH, 0.02, soft) : 0.0);
		cover = max(cover, q.y > ${mo(Le.spring)} ? winBar(abs(r - 0.44), 0.02, soft) : 0.0);
		return open * (1.0 - cover * 0.75);
	}

	// daylight reaching point p from the windows
	float windowLight(vec3 p, vec3 n) {
		if (p.x < ${mo(Bt.x0)} || p.z < ${mo(Bt.z0-.1)} || p.z > ${mo(Bt.z1)}) return 0.0;
		float ndl = max(dot(n, WIN_SKY), 0.0);
		if (ndl <= 0.0) return 0.0;
		float tIn = (${mo(Bt.z1)} - p.z) / WIN_SKY.z;
		float tOut = (${mo(Bt.z1+2*en)} - p.z) / WIN_SKY.z;
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
		${qf.map(t=>`{ float d = abs(p.x - ${mo(t)}); if (d < best) { best = d; lamp = vec3(${mo(t)}, ${mo(jr.spring+.55)}, ${mo(Bt.z0-.15)}); } }`).join(`
		`)}
		return lamp;
	}

	float nicheLight(vec3 p, vec3 n) {
		if (p.z > ${mo(Bt.z0+1.6)} || p.z < ${mo(Bt.z0-jr.r-.1)} || p.x < ${mo(Bt.x0)}) return 0.0;
		vec3 lamp = nicheLamp(p);
		vec3 d = lamp - p;
		float dist = length(d);
		vec3 L = d / dist;
		// a cone pointing down into the niche
		float cone = smoothstep(0.35, 0.75, dot(-L, normalize(vec3(0.0, -1.0, 0.35))));
		float inside = 1.0 - smoothstep(${mo(jr.r)}, ${mo(jr.r+.5)}, abs(p.x - lamp.x));
		return max(dot(n, L), 0.0) * cone * inside / (1.0 + 0.35 * dist * dist);
	}

	// soft general daylight in the corridor, strongest near the glass
	float corridorGlow(vec3 p) {
		if (p.x < ${mo(Bt.x0-1)}) return 0.0;
		float inC = smoothstep(${mo(Bt.z0-1.5)}, ${mo(Bt.z0)}, p.z) * smoothstep(${mo(Bt.x0-1)}, ${mo(Bt.x0+1)}, p.x);
		float near = 0.55 + 0.45 * smoothstep(${mo(Bt.z0)}, ${mo(Bt.z1)}, p.z);
		return inC * near;
	}`}Dm.exports={wallWithHoles:nl,windowLightGLSL:a_,addWing:n_,windowGlass:t_,farDoorGlass:o_,atFarDoor:Fm,FAR_DOOR:r_,vaultY:$i,C:Bt,NICHE_X:qf,NICHE:jr,NICHE_PLINTH_TOP:X4,NICHE_STATUE_Z:Y4,WIN:Le,winCentres:Fa,piers:$m,PAINTING_X:W4,HEIGHT:du}});var _a=mt((Xk,Hm)=>{"use strict";var vu=vr(),Qo=8,Gi=.35,Ns=14,qi=4,Jt={x0:Ns+Gi,x1:Ns+Gi+2*qi,z0:5.9-qi,z1:5.9+qi,zc:5.9,cx:Ns+Gi+qi,arch:{r:2.6,spring:4.4},dome:{r:3.3,base:Qo},oculus:3.3};Jt.domeTop=Jt.dome.base+Jt.dome.r;var Hi={spokes:16,ringE:[.42,.95],bar:.035},qn={sxz:1.32,sy:1.6,yaw:.6};qn.crownC=[Jt.cx,.4+3.4*qn.sy,Jt.zc];qn.crownR=[2.3*qn.sxz,1.9*qn.sy,2.3*qn.sxz];qn.trunkR=.26*qn.sxz;qn.trunkTop=.4+2.2*qn.sy;var qm={inner:1.05,outer:1.62,seat:.48,soil:.4},Bf=(()=>{let t=[.2,1,-.15],e=Math.hypot(...t);return t.map(o=>o/e)})(),Jn=[0,0,0],Di=[11,0,0],Gf=[10,0,0],Hf=[9,0,0],s_=[5,0,0],mu=[3,0,0];function b0(t,e,o,n,r,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),f=t.vert(n,a,s),l=t.vert(r,a,s);t.tri(i,c,f),t.tri(i,f,l)}function Cr(t,e,o,n,r,a,s,i){t.box(Math.min(e,r),Math.min(o,a),Math.min(n,s),Math.max(e,r),Math.max(o,a),Math.max(n,s),i)}var i_=(t,e,o)=>n=>{let r=n-t;return o+Math.sqrt(Math.max(0,e*e-r*r))};function c_(t){t.save(),t.translate(Ns+Gi,0,0),t.rotateY(-Math.PI/2),vu.wallWithHoles(t,{u0:0,u1:vu.C.z0,w0:0,w1:2*Gi,top:()=>Qo,holes:[{u0:Jt.zc-Jt.arch.r,u1:Jt.zc+Jt.arch.r,bottom:0,head:i_(Jt.zc,Jt.arch.r,Jt.arch.spring),step:.05}],mat:Di,revealMat:Jn,topStep:1}),t.restore();let e=Ns-Gi;for(let[s,i]of[[0,Jt.zc-Jt.arch.r],[Jt.zc+Jt.arch.r,vu.C.z0]])Cr(t,e-.12,0,s,e,.42,i,Jn),Cr(t,e-.07,.42,s,e,.5,i,Jn);let o=e,n=.24,r=40,a=(s,i,c)=>[c,Jt.arch.spring+Math.sin(s)*i,Jt.zc+Math.cos(s)*i];for(let s=0;s<r;s++){let i=Math.PI*s/r,c=Math.PI*(s+1)/r;b0(t,a(i,Jt.arch.r,o-.07),a(c,Jt.arch.r,o-.07),a(c,Jt.arch.r+n,o-.07),a(i,Jt.arch.r+n,o-.07),[-1,0,0],Jn),b0(t,a(i,Jt.arch.r+n,o),a(c,Jt.arch.r+n,o),a(c,Jt.arch.r+n,o-.07),a(i,Jt.arch.r+n,o-.07),[0,Math.sin((i+c)/2),Math.cos((i+c)/2)],Jn),b0(t,a(i,Jt.arch.r,o),a(c,Jt.arch.r,o),a(c,Jt.arch.r,o-.07),a(i,Jt.arch.r,o-.07),[0,-Math.sin((i+c)/2),-Math.cos((i+c)/2)],Jn)}Cr(t,o-.12,Jt.arch.spring+Jt.arch.r-.06,Jt.zc-.17,o,Jt.arch.spring+Jt.arch.r+n+.16,Jt.zc+.17,Jn);for(let s of[-1,1]){let i=Jt.zc+s*Jt.arch.r,c=Jt.zc+s*(Jt.arch.r+n);Cr(t,o-.07,0,i,o,Jt.arch.spring,c,Jn),Cr(t,o-.13,Jt.arch.spring-.16,i-s*.03,o,Jt.arch.spring,c+s*.08,Jn),Cr(t,o-.12,0,i-s*.03,o,.5,c+s*.06,Jn)}}function l_(t){let{x0:e,x1:o,z0:n,z1:r}=Jt;b0(t,[Ns,0,n],[o,0,n],[o,0,r],[Ns,0,r],[0,1,0],Jn),t.curMat=Di,b0(t,[o,0,n],[o,0,r],[o,Qo,r],[o,Qo,n],[-1,0,0],Di),b0(t,[e,0,n],[o,0,n],[o,Qo,n],[e,Qo,n],[0,0,1],Di),b0(t,[o,0,r],[e,0,r],[e,Qo,r],[o,Qo,r],[0,0,-1],Di),b0(t,[e,0,r],[e,0,n],[e,Qo,n],[e,Qo,r],[1,0,0],Di),Cr(t,o-.12,0,n,o,.42,r,Jn),Cr(t,e,0,n,o,.42,n+.12,Jn),Cr(t,e,0,r-.12,o,.42,r,Jn),Cr(t,o-.2,Qo-.3,n,o,Qo,r,Jn),Cr(t,e,Qo-.3,n,o,Qo,n+.2,Jn),Cr(t,e,Qo-.3,r-.2,o,Qo,r,Jn),Cr(t,e,Qo-.3,n,e+.2,Qo,r,Jn);let a=Jt.dome.r,s=48,i=[];for(let g=0;g<=s;g++){let b=Math.PI*2*g/s;i.push([Jt.cx+Math.cos(b)*a,Jt.zc+Math.sin(b)*a])}let c=g=>{let b=Math.abs(Math.cos(g)),y=Math.abs(Math.sin(g));return Math.min(qi/Math.max(b,1e-6),qi/Math.max(y,1e-6))};for(let g=0;g<s;g++){let b=Math.PI*2*g/s,y=Math.PI*2*(g+1)/s,w=c(b),_=c(y),M=[Jt.cx+Math.cos(b)*w,Qo,Jt.zc+Math.sin(b)*w],T=[Jt.cx+Math.cos(y)*_,Qo,Jt.zc+Math.sin(y)*_];b0(t,[i[g][0],Qo,i[g][1]],[i[g+1][0],Qo,i[g+1][1]],T,M,[0,-1,0],Gf)}t.lathe([[a+.02,Qo-.18,1],[a-.12,Qo-.18,1],[a-.12,Qo-.06,1],[a-.05,Qo,1],[a,Qo+.02]],Jt.cx,Jt.zc,s,{mat:()=>Jn});let f=16,l=(g,b,y)=>[Jt.cx+Math.cos(g)*Math.cos(b)*y,Jt.dome.base+Math.sin(b)*y,Jt.zc+Math.sin(g)*Math.cos(b)*y],p=Math.PI/2;for(let g=0;g<s;g++)for(let b=0;b<f;b++){let y=Math.PI*2*g/s,w=Math.PI*2*(g+1)/s,_=p*b/f,M=p*(b+1)/f,T=(N,B)=>[-Math.cos(N)*Math.cos(B),-Math.sin(B),-Math.sin(N)*Math.cos(B)],I=[t.vert(l(y,_,a),T(y,_),Hf),t.vert(l(w,_,a),T(w,_),Hf),t.vert(l(w,M,a),T(w,M),Hf),t.vert(l(y,M,a),T(y,M),Hf)];t.tri(I[0],I[1],I[2]),t.tri(I[0],I[2],I[3])}for(let g=0;g<Hi.spokes;g++){let b=Math.PI*2*g/Hi.spokes,y=[];for(let w=0;w<=14;w++)y.push(l(b,(p-.06)*w/14,a-.04));t.tube(y,()=>.04,20,6,{mat:()=>Gf})}for(let g of Hi.ringE){let b=Math.cos(g)*(a-.04),y=Jt.dome.base+Math.sin(g)*(a-.04),w=[];for(let _=0;_<=72;_++){let M=Math.PI*2*_/72;w.push([Jt.cx+Math.cos(M)*b,y,Jt.zc+Math.sin(M)*b])}t.tube(w,()=>.035,72,6,{mat:()=>Gf})}t.ellipsoid([Jt.cx,Jt.dome.base+a-.06,Jt.zc],[.16,.08,.16],6,12,{mat:()=>Gf});let d=.46,v=.55,u=.12,h=(g,b,y,w)=>{Cr(t,g,d-.08,b,y,d,w,mu);let _=y-g>w-b?[g+.25,y-.25]:[g+.06,y-.06],M=y-g>w-b?[b+.06,w-.06]:[b+.25,w-.25];Cr(t,_[0],0,M[0],_[1],d-.08,M[1],mu)};h(o-u-v,n+1.1,o-u,r-1.1),h(e+1,n+u,o-1.1,n+u+v),h(e+1,r-u-v,o-1.1,r-u);let m=qm;t.lathe([[m.outer,0,1],[m.outer,m.seat-.1,1],[m.outer+.07,m.seat-.07,1],[m.outer+.07,m.seat,1],[m.inner-.05,m.seat,1],[m.inner-.05,m.seat-.06,1],[m.inner,m.seat-.08,1],[m.inner,m.soil]],Jt.cx,Jt.zc,64,{mat:()=>mu}),t.lathe([[m.inner,m.soil,1],[0,m.soil+.03]],Jt.cx,Jt.zc,48,{mat:()=>s_})}function f_(t){c_(t),l_(t),t.curMat=[0,0,0]}var qo=t=>t.toFixed(4);function Gm(){let t=Jt.dome.r,e=Hi.ringE.map(o=>Math.cos(o)*t);return`
	const vec3 SHAFT = vec3(${qo(Bf[0])}, ${qo(Bf[1])}, ${qo(Bf[2])});

	// how much sun the glass dome lets through towards p (0..1): the round
	// opening, less the soft shadows of its ribs and rings (worked out on
	// the dome's base, where the frame is seen almost straight on)
	float oculusOpen(vec3 p) {
		float t = (${qo(Jt.dome.base+.6)} - p.y) / SHAFT.y;
		vec3 q = p + SHAFT * t;
		vec2 d2 = q.xz - vec2(${qo(Jt.cx)}, ${qo(Jt.zc)});
		float d = length(d2);
		float soft = 0.02 + 0.012 * t;
		float open = 1.0 - smoothstep(${qo(t-.15)} - soft, ${qo(t-.15)} + soft, d);
		float hw = ${qo(Hi.bar)};
		float cover = 0.0;
		${e.map(o=>`cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, abs(d - ${qo(o)})));`).join(`
		`)}
		float ang = atan(d2.y, d2.x);
		float stp = ${qo(Math.PI*2/Hi.spokes)};
		float da = abs(mod(ang + stp * 0.5, stp) - stp * 0.5);
		cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, d * sin(da)));
		cover = max(cover, 1.0 - smoothstep(0.16 - soft, 0.16 + soft, d));
		return open * (1.0 - cover * 0.85);
	}

	// the tree's own shade: its crown lets dappled light through, its
	// trunk blocks it
	float treeShade(vec3 p) {
		vec3 c = vec3(${qo(qn.crownC[0])}, ${qo(qn.crownC[1])}, ${qo(qn.crownC[2])});
		vec3 r = vec3(${qo(qn.crownR[0])}, ${qo(qn.crownR[1])}, ${qo(qn.crownR[2])});
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
		float tt = (${qo(qn.trunkTop)} - p.y) / SHAFT.y;
		if (tt > 0.0) {
			vec2 o = p.xz - vec2(${qo(Jt.cx)}, ${qo(Jt.zc)});
			vec2 dir = SHAFT.xz;
			float k = clamp(-dot(o, dir) / dot(dir, dir), 0.0, tt);
			float dist = length(o + dir * k);
			tr *= smoothstep(${qo(qn.trunkR*.7)}, ${qo(qn.trunkR*1.3)}, dist);
		}
		return tr;
	}`}function h_(){return`
	${Gm()}

	// sunlight through the oculus reaching p (0..1)
	float alcoveSun(vec3 p, vec3 n) {
		if (p.x < ${qo(Jt.x0-.75)} || p.z < ${qo(Jt.z0-.5)} || p.z > ${qo(Jt.z1+.5)}) return 0.0;
		float ndl = max(dot(n, SHAFT), 0.0);
		if (ndl <= 0.0) return 0.0;
		return ndl * oculusOpen(p) * treeShade(p);
	}

	// soft daylight filling the court, brightest under the dome
	float alcoveGlow(vec3 p) {
		if (p.x < ${qo(Jt.x0-1.5)} || p.z < ${qo(Jt.z0-1.5)} || p.z > ${qo(Jt.z1+1.5)}) return 0.0;
		float inside = smoothstep(${qo(Jt.x0-1.2)}, ${qo(Jt.x0+.6)}, p.x);
		float d = length(p.xz - vec2(${qo(Jt.cx)}, ${qo(Jt.zc)}));
		return inside * (0.55 + 0.45 * smoothstep(0.0, 8.0, p.y)) * (1.0 - 0.35 * smoothstep(1.0, 5.0, d));
	}`}Hm.exports={addAlcove:f_,alcoveLightGLSL:h_,oculusGLSL:Gm,A:Jt,BENCH:qm,SHAFT:Bf,TREE:qn}});var tr=mt((Yk,Um)=>{"use strict";var Da=0;try{let t=location.search;/[?&]night\b/.test(t)&&(Da=1)}catch(t){}var y0=Da,gu=0,Bm=[],Uf={tick(t){let e=gu?Math.min(.1,t-gu):0;if(gu=t,y0!==Da){let o=e/2.4;y0=Da>y0?Math.min(Da,y0+o):Math.max(Da,y0-o)}return Uf.night},get night(){return y0*y0*(3-2*y0)},get isNight(){return Da===1},get settled(){return y0===Da},set(t){Da=t?1:0,Bm.forEach(e=>e(Da))},toggle(){Uf.set(!Da)},onChange(t){Bm.push(t)}};Uf.GLSL=`
uniform float night;
vec3 toNight(vec3 c, float keep) {
	float l = dot(c, vec3(0.299, 0.587, 0.114));
	vec3 n = mix(vec3(l), c, 0.35) * vec3(0.55, 0.70, 1.05) * keep;
	return mix(c, n, night);
}
`;Um.exports=Uf});var G0=mt((Kk,sl)=>{"use strict";var xu=tr(),{C:bu}=vr(),{A:jf,BENCH:rl}=_a(),Gn=Math.PI,u_=[18,29,40],Wf=.575,q0=[],al=(t,e,o,n,r,a,s)=>q0.push(Object.assign({x:t,y:e,z:o,o:n,back:r,hw:a,s:1,k:1,range:7,mount:"wall"},s||{}));u_.forEach(t=>{al(1.25+Wf+.48,3.25,t,[1,0],.48,Wf,{s:1.2}),al(12.75-Wf-.48,3.25,t,[-1,0],.48,Wf,{s:1.2})});[3,11].forEach(t=>al(t,3.45,bu.hallEnd-.5,[0,-1],.5,99,{s:1.2}));var d_=[14.63,19.63,24.03,28.43,32.83,bu.x1-.28];d_.forEach(t=>al(t,3.15,bu.z0+.16+.44,[0,1],.44,.28));[3,8.8].forEach(t=>al(.35+.44,2.75,t,[1,0],.44,99));{let t=(rl.inner+rl.outer)/2,e=Math.atan2(-1.12,-.98);q0.push({x:jf.cx+Math.cos(e)*t,y:rl.seat+.155,z:jf.zc+Math.sin(e)*t,o:[Math.cos(e),Math.sin(e)],back:0,hw:0,ring:[jf.cx,jf.zc,rl.outer+.07,rl.seat],s:.52,k:2.2,range:3.6,mount:"table"})}var yu=.13,Vf=.21,er=yu/Math.cos(Gn/6),Co=t=>t.toFixed(4);function jm(t){let o=(t||q0.map((n,r)=>r)).map(n=>{let r=q0[n],a=-r.o[1],s=r.o[0],i=r.mount==="table"?`
				// the bench it stands on hides the floor under and around it
				if (p.y < ${Co(r.ring[3]-.03)}) {
					float tt = ${Co(r.y-r.ring[3])} / max(-D.y, 1e-3);
					vec2 hit = vec2(${Co(r.x)}, ${Co(r.z)}) + D.xz * tt - vec2(${Co(r.ring[0])}, ${Co(r.ring[1])});
					T *= smoothstep(${Co(r.ring[2]-.02)}, ${Co(r.ring[2]+.12)}, length(hit));
				}`:"",c=r.mount==="wall"?`
				{
					// what it hangs on stands behind it and hides what lies beyond
					float behind = -dot(D.xz, vec2(${Co(r.o[0])}, ${Co(r.o[1])}));
					if (behind > ${Co(r.back+.06)}) {
						float side = abs(dot(D.xz, vec2(${Co(a)}, ${Co(s)}))) * ${Co(r.back)} / behind;
						T *= smoothstep(${Co(r.hw-.04)}, ${Co(r.hw+.04)}, side);
					}
				}`:"";return`
			{
				vec3 D = p - vec3(${Co(r.x)}, ${Co(r.y)}, ${Co(r.z)});
				float d2 = dot(D, D);
				if (d2 < ${Co(r.range*r.range)}) {
					float d = sqrt(d2);
					// the direction in the lantern's own frame
					float c = ${Co(Math.cos(Math.atan2(r.o[1],r.o[0])))}, s = ${Co(Math.sin(Math.atan2(r.o[1],r.o[0])))};
					vec3 q = vec3(D.x * c + D.z * s, D.y, -D.x * s + D.z * c);
					float T = lanternGlass(q, 0.10 + 0.05 * d);
					${c}${i}
					float fl = 0.90 + 0.06 * sin(time * 6.1 + ${Co(n*1.7)}) + 0.04 * sin(time * 15.3 + ${Co(n*2.9)}) * sin(time * 1.9 + ${Co(n*.6)});
					float lam = max(dot(N, -D / d), 0.0) * 0.85 + 0.15;
					float fall = 1.0 / (1.0 + d2 * ${Co(1/(r.s*r.s))}) * (1.0 - smoothstep(${Co(r.range*.6)}, ${Co(r.range)}, d));
					sum += ${Co(r.k)} * T * fl * lam * fall;
				}
			}`}).join("");return`
	// how much of a lantern's light gets out in direction q (lantern frame,
	// y up): through the leaded glass, past the iron posts, a little
	// through the vents in the roof and the open work under the base
	float lanternGlass(vec3 q, float blur) {
		float h = length(q.xz) + 1e-5;
		float az = atan(q.z, q.x);
		// which of the six panels, and where across it
		float t = mod(az + ${Co(Gn/6)}, ${Co(Gn/3)}) - ${Co(Gn/6)};
		float U = tan(t) / ${Co(Math.tan(Gn/6))};
		float V = (q.y / h) * (${Co(yu/Vf)} / cos(t));
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
	}`}var on=0,p_=1;function v_(){let t=[],e=[],o=[],n=[],r=[],a=(v,u,h,m)=>(t.push(v[0],v[1],v[2]),e.push(u[0],u[1],u[2]),o.push(h),n.push(m?m[0]:0,m?m[1]:0),t.length/3-1),s=(v,u)=>[v[0]-u[0],v[1]-u[1],v[2]-u[2]],i=(v,u)=>[v[1]*u[2]-v[2]*u[1],v[2]*u[0]-v[0]*u[2],v[0]*u[1]-v[1]*u[0]],c=v=>{let u=Math.hypot(v[0],v[1],v[2])||1;return[v[0]/u,v[1]/u,v[2]/u]};function f(v,u,h,m,g,b){let y=c(i(s(u,v),s(m,v))),w=a(v,y,g,[0,0]),_=a(u,y,g,[1,0]),M=a(h,y,g,[1,1]),T=a(m,y,g,[0,1]);r.push(w,_,M,w,M,T),b&&r.push(w,M,_,w,T,M)}function l(v,u,h){for(let b=0;b<v.length;b++){let y=v[Math.max(0,b-1)],w=v[Math.min(v.length-1,b+1)],_=c(s(w,y)),M=Math.abs(_[1])>.9?[1,0,0]:[0,1,0],T=c(i(_,M)),I=i(T,_),N=typeof u=="function"?u(b/(v.length-1)):u;for(let B=0;B<=6;B++){let D=B/6*Gn*2,K=Math.cos(D),q=Math.sin(D),X=[T[0]*K+I[0]*q,T[1]*K+I[1]*q,T[2]*K+I[2]*q];a([v[b][0]+X[0]*N,v[b][1]+X[1]*N,v[b][2]+X[2]*N],X,h)}}let g=t.length/3-v.length*7;for(let b=0;b<v.length-1;b++)for(let y=0;y<6;y++){let w=g+b*7+y,_=w+6+1;r.push(w,_,w+1,w+1,_,_+1)}}function p(v,u,h,m,g,b,y,w,_){let M=(T,I,N)=>{let B=b+Gn/6+N*Gn/3;return[v[0]+Math.cos(B)*T,I,v[2]+Math.sin(B)*T]};for(let T=0;T<6;T++)f(M(m,u,T+1),M(m,u,T),M(g,h,T),M(g,h,T+1),y);if(w&&g>0)for(let T=0;T<6;T++){let I=a([v[0],h,v[2]],[0,1,0],y),N=a(M(g,h,T),[0,1,0],y),B=a(M(g,h,T+1),[0,1,0],y);r.push(I,B,N)}if(_&&m>0)for(let T=0;T<6;T++){let I=a([v[0],u,v[2]],[0,-1,0],y),N=a(M(m,u,T),[0,-1,0],y),B=a(M(m,u,T+1),[0,-1,0],y);r.push(I,N,B)}}function d(v,u,h,m,g,b,y){let w=[];for(let M=0;M<=18;M++){let T=M/18,I=(y||0)+T*m*Gn*2,N=h*(1-.75*T);w.push([v[0]+u[0]*Math.cos(I)*N,v[1]+Math.sin(I)*N,v[2]+u[2]*Math.cos(I)*N])}l(w,g,b)}return q0.forEach(v=>{let u=v.s,h=Math.atan2(v.o[1],v.o[0]),m=[v.x,v.y,v.z],g=(w,_,M)=>[v.x+v.o[0]*w-v.o[1]*(M||0),v.y+_,v.z+v.o[1]*w+v.o[0]*(M||0)],b=v.y-Vf*u,y=v.y+Vf*u;for(let w=0;w<6;w++){let _=h+Gn/6+w*Gn/3,M=_+Gn/3,T=er*u*.97,I=[v.x+Math.cos(_)*T,b,v.z+Math.sin(_)*T],N=[v.x+Math.cos(M)*T,b,v.z+Math.sin(M)*T];f(N,I,[I[0],y,I[2]],[N[0],y,N[2]],p_,!0)}for(let w=0;w<6;w++){let _=h+Gn/6+w*Gn/3,M=er*u;l([[v.x+Math.cos(_)*M,b-.02*u,v.z+Math.sin(_)*M],[v.x+Math.cos(_)*M,y+.02*u,v.z+Math.sin(_)*M]],.011*u,on)}p(m,b-.035*u,b,er*u*1.12,er*u*1.12,h,on,!0,!0),p(m,b-.1*u,b-.035*u,er*u*.55,er*u*1,h,on,!1,!0),p(m,b-.17*u,b-.1*u,0,er*u*.55,h,on,!1,!1);for(let w=0;w<6;w++){let _=h+w*Gn/3,M=yu*u*1.06,T=[v.x+Math.cos(_)*M,b-.06*u,v.z+Math.sin(_)*M];d(T,[-Math.sin(_),0,Math.cos(_)],.03*u,.85,.004*u,on,.3)}p(m,y,y+.03*u,er*u*1.14,er*u*1.14,h,on,!1,!0),p(m,y+.03*u,y+.2*u,er*u*1.14,er*u*.32,h,on,!1,!1),p(m,y+.2*u,y+.27*u,er*u*.34,er*u*.34,h,on,!1,!1),p(m,y+.27*u,y+.37*u,er*u*.42,0,h,on,!1,!0),l([[v.x,y+.36*u,v.z],[v.x,y+.47*u,v.z]],w=>.01*u*(1-.7*w),on),p([v.x,0,v.z],y+.44*u,y+.47*u,.018*u,0,h,on,!1,!0);for(let w=0;w<6;w++){let _=h+Gn/6+w*Gn/3,M=er*u*1.14,T=[v.x+Math.cos(_)*M,y+.03*u,v.z+Math.sin(_)*M];l([T,[T[0],T[1]+.09*u,T[2]]],I=>.008*u*(1-.8*I),on),p([T[0],0,T[2]],T[1]+.035*u,T[1]+.06*u,.014*u,.014*u,_,on,!0,!0)}if(v.mount==="wall"){let w=v.back,_=b-.32,M=g(-w,0,0);((D,K,q)=>{let X=[v.o[0],0,v.o[1]],pt=[-v.o[1],0,v.o[0]],Ft=(ct,Wt,ze)=>[M[0]+pt[0]*ct+X[0]*ze,Wt,M[2]+pt[2]*ct+X[2]*ze],Lt=.03,gt=.065;f(Ft(-q,D,gt),Ft(q,D,gt),Ft(q,K,gt),Ft(-q,K,gt),on,!0),f(Ft(q,D,Lt),Ft(q,D,gt),Ft(q,K,gt),Ft(q,K,Lt),on,!0),f(Ft(-q,D,gt),Ft(-q,D,Lt),Ft(-q,K,Lt),Ft(-q,K,gt),on,!0),f(Ft(-q,K,gt),Ft(q,K,gt),Ft(q,K,Lt),Ft(-q,K,Lt),on,!0),f(Ft(-q,D,Lt),Ft(q,D,Lt),Ft(q,D,gt),Ft(-q,D,gt),on,!0),p([M[0]+X[0]*gt,0,M[2]+X[2]*gt],K,K+.05,q*.6,0,h,on,!1,!0),p([M[0]+X[0]*gt,0,M[2]+X[2]*gt],D-.05,D,0,q*.6,h,on,!1,!1)})(_-.2,_+.2,.07);let I=[];for(let D=0;D<=14;D++){let K=D/14,q=-w+.05+K*(w-.05),X=_+.04+(b-.17*u-_-.04)*Math.pow(K,2.2);I.push(g(q,X-v.y,0))}l(I,D=>.022*(1-.3*D),on);let N=[];for(let D=0;D<=10;D++){let K=D/10;N.push(g(-w+.05+K*w*.6,_-.14+K*.16+.05*Math.sin(K*Gn)-v.y,0))}l(N,.009,on);let B=N[N.length-1];d([B[0]-v.o[0]*.03,B[1]+.02,B[2]-v.o[1]*.03],[v.o[0],0,v.o[1]],.045,1.1,.007,on,-.4),[.3,.55].forEach(D=>{let K=I[Math.round(D*14)],q=N[Math.round(D/.62*10)]||N[10];l([K,q],.006,on)}),[-1,1].forEach(D=>{let K=g(-.05,-Vf*u-.2*u,0);d([K[0]-v.o[1]*D*.05,K[1],K[2]+v.o[0]*D*.05],[-v.o[1]*D,0,v.o[0]*D],.05*u,.9,.006,on,Gn)})}else for(let w=0;w<3;w++){let _=h+w*Gn*2/3,M=[v.x+Math.cos(_)*er*u*.7,b-.035*u,v.z+Math.sin(_)*er*u*.7],T=[v.x+Math.cos(_)*er*u*1.25,b-.17*u,v.z+Math.sin(_)*er*u*1.25];l([M,T],.012*u,on)}}),{pos:t,nrm:e,kind:o,uv:n,elems:r}}sl.exports=t=>{let e=v_(),o=t({vert:`
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
		${jm()}
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
		}`,attributes:{position:e.pos,normal:e.nrm,kind:e.kind,uv:e.uv},elements:e.elems,uniforms:{time:t.context("time"),night:()=>xu.night}}),n=[],r=[];q0.forEach((s,i)=>{[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(c=>{n.push(c[0],c[1]),r.push(s.x,s.y,s.z,s.s+i*.001)})});let a=t({vert:`
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
		}`,attributes:{corner:n,at:r},count:n.length/2,uniforms:{time:t.context("time"),night:()=>xu.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(){o(),xu.night>.01&&a()}};sl.exports.lanternGLSL=jm;sl.exports.LANTERNS=q0;sl.exports.TREE_LANTERN=[q0.length-1]});var U0=mt((Qk,Vr)=>{"use strict";var m_=tr(),Io=Math.PI,Hn=t=>(+t).toFixed(4),g_=t=>`vec3(${Hn(t[0])}, ${Hn(t[1])}, ${Hn(t[2])})`,Ne={x:-7,z:44.5},Ke=5.2,fr=15,ne={z0:42.6,z1:46.4,zc:44.5,spring:4,r:1.9},o0={z0:42.2,z1:46.8,top:6.3,x:.35},Kf=[Ne.x-Math.sqrt(Ke*Ke-3.05*3.05),0,0],Sn={x0:-2.05+Kf[0],x1:Kf[0],z0:41.45,z1:47.55,top:4.3},wu=[[Sn.x1+.05,2.35,Sn.z0-.45],[Sn.x1+.05,2.35,Sn.z1+.45]].map(([t,e,o])=>{let n=Math.atan2(o-Ne.z,t-Ne.x);return[Ne.x+Math.cos(n)*(Ke-.16),e,Ne.z+Math.sin(n)*(Ke-.16)]}),Lo={ri:3.4,ro:Ke,a0:-35*Io/180,rise:.1836,step:3.6*Io/180,n:88,thick:.36};Lo.k=Lo.rise/Lo.step;var Or=t=>Lo.a0-t,B0=t=>t*Lo.k,cn={x:Ne.x+.1,z:Ne.z-.15,yaw:-Io/2,scale:1.3},w0=cn.scale/1.1,il={keyX0:cn.x-.524*w0,keyX1:cn.x+.491*w0,keyTop:.647*w0,keyFront:cn.z+.808*w0,keyBack:cn.z+.72*w0,stoolX:cn.x-.041*w0,stoolZ:cn.z+1.122*w0,stoolFront:cn.z+.96*w0,stoolTop:.37*w0,heading:Io},Yf=[[3.6,44.5],[.6,44.5],[-2.2,44.7],[-4.5,46.5],[-7,47.2],[-9.4,46.6],[-10.5,44.9],[-10.9,43.2]];function Vm(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let o=e;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}function x_(t,e){let o=1e9;for(let n=0;n<Yf.length-1;n++){let[r,a]=Yf[n],[s,i]=Yf[n+1],c=s-r,f=i-a,l=Math.max(0,Math.min(1,((t-r)*c+(e-a)*f)/(c*c+f*f)));o=Math.min(o,Math.hypot(t-r-c*l,e-a-f*l))}return o}var Xf=t=>ne.spring+Math.sqrt(Math.max(0,ne.r*ne.r-(t-ne.zc)*(t-ne.zc))),H0=t=>Ne.x+Math.sqrt(Math.max(0,Ke*Ke-(t-Ne.z)*(t-Ne.z)));function Bi(t,e){return Math.hypot(t-Ne.x,e-Ne.z)<Ke||t<=0&&t>Ne.x&&e>ne.z0&&e<ne.z1||t>Sn.x0&&t<Sn.x1&&e>Sn.z0&&e<Sn.z1}function b_(t,e){if(Math.hypot(t-Ne.x,e-Ne.z)<Lo.ri-.05)return 99;let n=Math.atan2(e-Ne.z,t-Ne.x),r=Lo.a0-n;for(;r<0;)r+=2*Io;for(;r>=2*Io;)r-=2*Io;return r>Lo.n*Lo.step?99:B0(r)-Lo.thick}function y_(){let t=[],e=Vm(1729),o=(a,s,i)=>{for(let c=Math.max(0,t.length-400);c<t.length;c++){let f=t[c];if(!(f[1]>.01)&&Math.hypot(f[0]-a,f[2]-s)<i+f[3]+.012)return!0}return!1},n=(a,s)=>{let i=a-cn.x,c=s-cn.z,f=Math.cos(cn.yaw),l=Math.sin(cn.yaw),p=(f*i-l*c)/cn.scale,d=(l*i+f*c)/cn.scale;return p>-1.05&&p<1.3&&d>-.7&&d<.72},r=0;for(;t.length<980&&r<6e4;){r++;let s=e()<.55?1.25+e()*2.1:1.25+Math.sqrt(e())*(Ke-1.45),i=e()*2*Io,c=Ne.x+Math.cos(i)*s,f=Ne.z+Math.sin(i)*s;if(!Bi(c,f)||s>Ke-.18||n(c,f)||x_(c,f)<.62||b_(c,f)<2.3||c<Sn.x1+.9)continue;let l=.022+e()*.02;if(o(c,f,l))continue;let p=e()<.15?.22+e()*.14:.05+e()*.15;t.push([c,0,f,l,p,e()*100])}for(let a=1;a<26;a++){let s=a<12?3:2;for(let i=0;i<s;i++){let c=(a+.25+e()*.5)*Lo.step,f=Or(c),l=Lo.ri+.55+e()*(Lo.ro-Lo.ri-.75),p=.022+e()*.016;t.push([Ne.x+Math.cos(f)*l,(a+1)*Lo.rise,Ne.z+Math.sin(f)*l,p,.05+e()*.14,e()*100])}}for(let a of wu)for(let[s,i,c]of[[0,0,.26],[.06,.05,.18],[-.05,-.04,.14]])t.push([a[0]+s,a[1],a[2]+i,.024,c,e()*100]);for(let a of[Sn.z0-.35,Sn.z1+.35])for(let s=0;s<9;s++){let i=Sn.x1+.35+e()*.5,c=a+(e()-.5)*.5;Math.hypot(i-Ne.x,c-Ne.z)>Ke-.15||t.push([i,0,c,.026+e()*.014,.18+e()*.3,e()*100])}return t}function w_(t){let o=Vm(77),n=[];for(let r=0;r<14;r++){let a=t[Math.floor(o()*t.length)];n.push([a[0],a[1]+a[4],a[2]])}for(let r=0;r<12;r++){let a=n.map(()=>[0,0,0,0]);for(let s of t){let i=[s[0],s[1]+s[4],s[2]],c=0,f=1e9;n.forEach((l,p)=>{let d=(i[0]-l[0])**2+(i[1]-l[1])**2*4+(i[2]-l[2])**2;d<f&&(f=d,c=p)}),a[c][0]+=i[0],a[c][1]+=i[1],a[c][2]+=i[2],a[c][3]++}n=a.map((s,i)=>s[3]?[s[0]/s[3],s[1]/s[3],s[2]/s[3],s[3]]:n[i])}return n.filter(r=>r[3]>0).map(r=>[r[0],r[1]+.12,r[2],r[3]/t.length])}var _u=y_(),Wm=w_(_u.filter(t=>t[1]<2||t[1]>2.5)).concat(wu.map(t=>[t[0],t[1]+.35,t[2],.035]));function Xm(){return`
	vec3 roomLight(vec3 p, vec3 N, vec3 V, float gloss, out vec3 spec) {
		spec = vec3(0.0);
		vec3 col = vec3(0.0);
		float floorK = (p.y < 0.02 && N.y > 0.9) ? 1.0 : 0.0;
		${Wm.map((e,o)=>`
		{
			vec3 d = ${g_(e)} - p;
			float dd = dot(d, d);
			vec3 L = d * inversesqrt(dd);
			float fl = 0.86 + 0.08 * sin(time * ${Hn(5.3+o*.71)} + ${Hn(o*1.9)}) + 0.06 * sin(time * ${Hn(11.7+o*1.3)} + ${Hn(o*.7)});
			float w = ${Hn(e[3]*Wm.length)} * fl;
			float lam = max(dot(N, L), 0.0) * 0.82 + 0.18;
			col += w * lam / (0.7 + dd * 0.42);
			// the floor glows in pools round the candles
			col += w * floorK * 0.9 / (0.02 + dd * 7.0);
			spec += w * pow(max(dot(N, normalize(L + V)), 0.0), mix(10.0, 180.0, gloss)) * gloss * 1.6 / (0.25 + dd * 0.9);
		}`).join("")}
		col *= vec3(1.0, 0.56, 0.24) * 0.62;
		spec *= vec3(1.0, 0.62, 0.30) * 0.62;
		// light from the oculus, high above: pale by day, moonlight at night
		float up = smoothstep(0.0, ${Hn(fr)}, p.y);
		vec3 sky = mix(vec3(0.10, 0.095, 0.085), vec3(0.030, 0.045, 0.085), night);
		col += sky * (0.35 + 0.65 * up) * (0.55 + 0.45 * max(N.y, 0.0)) * (0.6 + 0.4 * max(-dot(N, normalize(p - vec3(${Hn(Ne.x)}, ${Hn(fr)}, ${Hn(Ne.z)}))), 0.0));
		// and straight down from it a soft pool falls on the piano and
		// whoever is playing it: it catches his shoulders, his hair, the
		// edge of the lid, and lifts them out of the dark
		float pool = 1.0 - smoothstep(0.5, 2.9, length(p.xz - vec2(${Hn(il.stoolX)}, ${Hn(il.keyFront+.1)})));
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
	}`}var He={FLOOR:0,WALL:1,STEP:2,SOFFIT:3,STRING:4,CEIL:5,OCULUS:6,HALLSTONE:7,IRON:8,RAILING:9,CANDLE:10};function Ym(){let t={pos:[],nrm:[],kind:[],uv:[],idx:[]};return t.v=(e,o,n,r)=>(t.pos.push(e[0],e[1],e[2]),t.nrm.push(o[0],o[1],o[2]),t.kind.push(n),t.uv.push(r?r[0]:0,r?r[1]:0),t.pos.length/3-1),t.quad=(e,o,n,r,a,s,i)=>{let c=t.v(e,a,s,i&&i[0]),f=t.v(o,a,s,i&&i[1]),l=t.v(n,a,s,i&&i[2]),p=t.v(r,a,s,i&&i[3]);t.idx.push(c,f,l,c,l,p)},t.tri=(e,o,n,r,a)=>{let s=t.v(e,r,a),i=t.v(o,r,a),c=t.v(n,r,a);t.idx.push(s,i,c)},t}function __(){let t=Ym(),e=(n,r,a)=>[Ne.x+Math.cos(n)*r,a,Ne.z+Math.sin(n)*r],o=n=>[Math.cos(n),0,Math.sin(n)];for(let r=0;r>Sn.x0-.01;r-=.25)for(let a=41.2;a<47.8;a+=.2){let s=r-.25,i=r,c=a,f=a+.2;if(!(Bi(s,c)||Bi(i,c)||Bi(s,f)||Bi(i,f)||Bi((s+i)/2,(c+f)/2)))continue;let l=c,p=f;s>H0(ne.z0)-.3&&(l=Math.max(l,ne.z0),p=Math.min(p,ne.z1),p<=l)||t.quad([s,0,l],[s,0,p],[i,0,p],[i,0,l],[0,1,0],He.FLOOR)}{for(let r=0;r<360;r++){let a=r/360*2*Io,s=(r+1)/360*2*Io,i=(a+s)/2,c=e(i,Ke,0),f=0;c[0]>Ne.x&&c[2]>ne.z0-.02&&c[2]<ne.z1+.02&&(f=Math.max(Xf(Math.min(Math.max(e(a,Ke,0)[2],ne.z0),ne.z1)),Xf(Math.min(Math.max(e(s,Ke,0)[2],ne.z0),ne.z1)))),c[0]<Ne.x&&c[2]>Sn.z0-.02&&c[2]<Sn.z1+.02&&(f=Sn.top);let l=a*Ke,p=s*Ke,d=o(a).map(h=>-h),v=o(s).map(h=>-h),u=[f];for(let h=Math.ceil(f/2.5)*2.5;h<fr;h+=2.5)h>f+.01&&u.push(h);u.push(fr);for(let h=0;h<u.length-1;h++){let m=u[h],g=u[h+1],b=t.v(e(a,Ke,m),d,He.WALL,[l,m]),y=t.v(e(s,Ke,m),v,He.WALL,[p,m]),w=t.v(e(s,Ke,g),v,He.WALL,[p,g]),_=t.v(e(a,Ke,g),d,He.WALL,[l,g]);t.idx.push(b,y,w,b,w,_)}}for(let[r,a,s]of[[6.55,.22,.07],[0,.32,.05]])for(let i=0;i<360;i++){let c=i/360*2*Io,f=(i+1)/360*2*Io,l=(c+f)/2,p=e(l,Ke,0);if(r<1&&(p[0]>Ne.x&&p[2]>ne.z0&&p[2]<ne.z1||p[0]<Ne.x&&p[2]>Sn.z0&&p[2]<Sn.z1))continue;let d=Ke-s;t.quad(e(c,d,r),e(f,d,r),e(f,d,r+a),e(c,d,r+a),o(l).map(v=>-v),He.WALL,[[c*Ke,r+100],[f*Ke,r+100],[f*Ke,r+a+100],[c*Ke,r+a+100]]),t.quad(e(c,d,r+a),e(f,d,r+a),e(f,Ke,r+a),e(c,Ke,r+a),[0,1,0],He.WALL,[[0,200],[0,200],[0,200],[0,200]]),r>1&&t.quad(e(c,Ke,r),e(f,Ke,r),e(f,d,r),e(c,d,r),[0,-1,0],He.WALL,[[0,200],[0,200],[0,200],[0,200]])}}{let n=o0.x;for(let[a,s]of[[ne.z0,1],[ne.z1,-1]]){let i=H0(a);t.quad([n,0,a],[i,0,a],[i,ne.spring,a],[n,ne.spring,a],[0,0,s],He.WALL,[[n,0],[i,0],[i,ne.spring],[n,ne.spring]])}let r=40;for(let a=0;a<r;a++){let s=a/r*Io,i=(a+1)/r*Io,c=ne.zc-Math.cos(s)*ne.r,f=ne.zc-Math.cos(i)*ne.r,l=ne.spring+Math.sin(s)*ne.r,p=ne.spring+Math.sin(i)*ne.r,d=[0,-Math.sin(s),Math.cos(s)],v=[0,-Math.sin(i),Math.cos(i)],u=t.v([n,l,c],d,He.WALL,[n,s*ne.r]),h=t.v([H0(c),l,c],d,He.WALL,[H0(c),s*ne.r]),m=t.v([H0(f),p,f],v,He.WALL,[H0(f),i*ne.r]),g=t.v([n,p,f],v,He.WALL,[n,i*ne.r]);t.idx.push(u,h,m,u,m,g)}}{let n=o0.x,r=.05;for(let f=o0.z0;f<o0.z1-1e-6;f+=r){let l=f,p=Math.min(o0.z1,f+r),v=(u=>u>ne.z0&&u<ne.z1)((l+p)/2)?Math.max(Xf(l),Xf(p)):0;t.quad([n,v,l],[n,v,p],[n,o0.top,p],[n,o0.top,l],[1,0,0],He.HALLSTONE,[[l,v],[p,v],[p,o0.top],[l,o0.top]])}let a=.32,s=.06,i=n+s,c=36;for(let f=0;f<c;f++){let l=f/c*Io,p=(f+1)/c*Io,d=(g,b)=>[i,ne.spring+Math.sin(g)*b,ne.zc-Math.cos(g)*b],v=ne.r,u=ne.r+a;t.quad(d(l,v),d(p,v),d(p,u),d(l,u),[1,0,0],He.HALLSTONE,[[0,300],[0,300],[1,300],[1,300]]);let h=(g,b,y)=>[y,ne.spring+Math.sin(g)*b,ne.zc-Math.cos(g)*b],m=[0,Math.sin((l+p)/2),-Math.cos((l+p)/2)];t.quad(h(l,u,n),h(p,u,n),h(p,u,i),h(l,u,i),m,He.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),t.quad(h(l,v,n),h(p,v,n),h(p,v,i),h(l,v,i),m.map(g=>-g),He.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}for(let[f,l,p]of[[ne.z0-a,ne.z0,-1],[ne.z1,ne.z1+a,1]]){t.quad([i,0,f],[i,0,l],[i,ne.spring,l],[i,ne.spring,f],[1,0,0],He.HALLSTONE,[[0,300],[1,300],[1,300],[0,300]]);let d=p<0?f:l,v=p<0?l:f;t.quad([n,0,d],[i,0,d],[i,ne.spring,d],[n,ne.spring,d],[0,0,p],He.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),t.quad([n,0,v],[i,0,v],[i,ne.spring,v],[n,ne.spring,v],[0,0,-p],He.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);let u=ne.spring-.16,h=.16,m=.11,g=Math.min(f,l)-.05,b=Math.max(f,l)+.05;t.quad([n+m,u,g],[n+m,u,b],[n+m,u+h,b],[n+m,u+h,g],[1,0,0],He.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),t.quad([n,u+h,g],[n+m,u+h,g],[n+m,u+h,b],[n,u+h,b],[0,1,0],He.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),t.quad([n,u,g],[n,u,b],[n+m,u,b],[n+m,u,g],[0,-1,0],He.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);for(let y of[g,b])t.quad([n,u,y],[n+m,u,y],[n+m,u+h,y],[n,u+h,y],[0,0,y===g?-1:1],He.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}{let f=ne.spring+ne.r-.05,l=ne.spring+ne.r+a+.12,p=.16,d=.22,v=i+.04;t.quad([v,f,ne.zc-p],[v,f,ne.zc+p],[v,l,ne.zc+d],[v,l,ne.zc-d],[1,0,0],He.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);for(let u of[-1,1])t.quad([n,f,ne.zc+u*p],[v,f,ne.zc+u*p],[v,l,ne.zc+u*d],[n,l,ne.zc+u*d],[0,0,u],He.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);t.quad([n,l,ne.zc-d],[v,l,ne.zc-d],[v,l,ne.zc+d],[n,l,ne.zc+d],[0,1,0],He.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}}{let{x0:n,x1:r,z0:a,z1:s,top:i}=Sn;t.quad([n,0,a],[n,0,s],[n,i,s],[n,i,a],[1,0,0],He.WALL,[[a,0],[s,0],[s,i],[a,i]]);for(let[f,l]of[[a,1],[s,-1]]){let p=Ne.x-Math.sqrt(Ke*Ke-(f-Ne.z)*(f-Ne.z));t.quad([n,0,f],[p,0,f],[p,i,f],[n,i,f],[0,0,l],He.WALL,[[n,0],[p,0],[p,i],[n,i]])}let c=24;for(let f=0;f<c;f++){let l=a+(s-a)*f/c,p=a+(s-a)*(f+1)/c,d=Ne.x-Math.sqrt(Ke*Ke-(l-Ne.z)**2),v=Ne.x-Math.sqrt(Ke*Ke-(p-Ne.z)**2);t.quad([n,i,l],[d,i,l],[v,i,p],[n,i,p],[0,-1,0],He.WALL,[[0,200],[0,200],[0,200],[0,200]])}for(let f=0;f<c;f++){let l=a+(s-a)*f/c,p=a+(s-a)*(f+1)/c,d=Ne.x-Math.sqrt(Ke*Ke-(l-Ne.z)**2)+.05,v=Ne.x-Math.sqrt(Ke*Ke-(p-Ne.z)**2)+.05;t.quad([d,i-.3,l],[v,i-.3,p],[v,i,p],[d,i,l],[1,0,0],He.WALL,[[0,200],[0,200],[0,200],[0,200]])}}{let r=[1.15,1.6,2.3,3,3.35,4.2,Ke];for(let a=0;a<120;a++){let s=a/120*2*Io,i=(a+1)/120*2*Io,c=(s+i)/2;c>Io&&(c-=2*Io);for(let f=0;f<r.length-1;f++){let l=r[f],p=r[f+1],d=c*180/Io;l>=3.3&&d>8&&d<85||t.quad(e(s,l,fr),e(s,p,fr),e(i,p,fr),e(i,l,fr),[0,-1,0],He.CEIL,[[s*l,l],[s*p,p],[i*p,p],[i*l,l]])}t.quad(e(s,1.15,fr),e(i,1.15,fr),e(i,1.15,fr+.7),e(s,1.15,fr+.7),o(c).map(f=>-f),He.CEIL,[[0,400],[0,400],[0,400],[0,400]]),t.tri([Ne.x,fr+.7,Ne.z],e(i,1.15,fr+.7),e(s,1.15,fr+.7),[0,-1,0],He.OCULUS)}}{let n=Lo.ri,r=Lo.ro,a=Lo.n*Lo.step;for(let c=0;c<Lo.n;c++){let f=c*Lo.step,l=(c+1)*Lo.step,p=Or(f),d=Or(l),v=(c+1)*Lo.rise,u=c*Lo.rise,h=2;for(let b=0;b<h;b++){let y=p+(d-p)*b/h-(b===0?.004:0),w=p+(d-p)*(b+1)/h;t.quad(e(y,n,v),e(y,r,v),e(w,r,v),e(w,n,v),[0,1,0],He.STEP,[[n*y,c],[r*y,c],[r*w,c],[n*w,c]])}let m=[-Math.sin(p),0,Math.cos(p)],g=p-.004;t.quad(e(g,n,u),e(g,r,u),e(g,r,v),e(g,n,v),m,He.STEP,[[n*p,c+.5],[r*p,c+.5],[r*p,c+.5],[n*p,c+.5]]),t.quad(e(p,n,B0(f)+.06),e(d,n,B0(l)+.06),e(d,n,v),e(g,n,v),o((p+d)/2).map(b=>-b),He.STEP,[[0,500],[0,500],[0,500],[0,500]])}let s=Math.ceil(a/(1.2*Io/180)),i=[n,n+.6,n+1.2,r];for(let c=0;c<s;c++){let f=c/s*a,l=(c+1)/s*a,p=Or(f),d=Or(l),v=B0(f),u=B0(l),h=v-Lo.thick,m=u-Lo.thick,g=o(p).map(T=>-T),b=o(d).map(T=>-T),y=t.v(e(p,n,h),g,He.STRING,[f*n,0]),w=t.v(e(d,n,m),b,He.STRING,[l*n,0]),_=t.v(e(d,n,u+.06),b,He.STRING,[l*n,1]),M=t.v(e(p,n,v+.06),g,He.STRING,[f*n,1]);t.idx.push(y,w,_,y,_,M);for(let T=0;T<i.length-1;T++){let I=i[T],N=i[T+1],B=D=>{let K=o(D);return[-K[0]*.12,-.99,-K[2]*.12]};t.quad(e(p,I,h),e(p,N,h),e(d,N,m),e(d,I,m),B((p+d)/2),He.SOFFIT,[[f*I,I],[f*N,N],[l*N,N],[l*I,I]])}}}return t}function M_(){let t=Ym(),e=Lo.ri+.045,o=Lo.n*Lo.step,n=Math.ceil(o/(.8*Io/180)),r=.92,a=(c,f,l)=>[Ne.x+Math.cos(c)*f,l,Ne.z+Math.sin(c)*f],s=c=>[Math.cos(c),0,Math.sin(c)];for(let c=0;c<n;c++){let f=c/n*o,l=(c+1)/n*o,p=Or(f),d=Or(l),v=B0(f)+.06,u=B0(l)+.06,h=s(p).map(T=>-T),m=s(d).map(T=>-T),g=f*e,b=l*e,y=t.v(a(p,e,v),h,He.RAILING,[g,0]),w=t.v(a(d,e,u),m,He.RAILING,[b,0]),_=t.v(a(d,e,u+r),m,He.RAILING,[b,r]),M=t.v(a(p,e,v+r),h,He.RAILING,[g,r]);t.idx.push(y,w,_,y,_,M)}((c,f,l,p)=>{let v=h=>{let m=Or(h),g=B0(h)+.06+f,b=a(m,e+c,g),y=s(m),w=[];for(let _=0;_<8;_++){let M=_/8*2*Io,T=[y[0]*Math.cos(M),Math.sin(M),y[2]*Math.cos(M)];w.push([[b[0]+T[0]*l,b[1]+T[1]*l,b[2]+T[2]*l],T])}return w},u=v(0);for(let h=1;h<=n;h++){let m=v(h/n*o);for(let g=0;g<8;g++){let b=(g+1)%8,y=t.v(u[g][0],u[g][1],p),w=t.v(m[g][0],m[g][1],p),_=t.v(m[b][0],m[b][1],p),M=t.v(u[b][0],u[b][1],p);t.idx.push(y,w,_,y,_,M)}u=m}})(0,r+.02,.028,He.IRON);for(let c of wu){let f=Math.atan2(c[2]-Ne.z,c[0]-Ne.x),l=[Math.cos(f),0,Math.sin(f)],p=12;for(let h=0;h<p;h++){let m=h/p*2*Io,g=(h+1)/p*2*Io,b=(y,w,_)=>[c[0]+Math.cos(y)*w,_,c[2]+Math.sin(y)*w];t.quad(b(m,.16,c[1]),b(g,.16,c[1]),b(g,.13,c[1]-.05),b(m,.13,c[1]-.05),[Math.cos(m)*.6,.8,Math.sin(m)*.6],He.IRON),t.quad(b(m,.16,c[1]),b(g,.16,c[1]),b(g,0,c[1]+.002),b(m,0,c[1]+.002),[0,1,0],He.IRON)}let d=[c[0]+l[0]*.16,c[1]-.35,c[2]+l[2]*.16],v=[-l[2],0,l[0]],u=.018;t.quad([d[0]-v[0]*u,d[1],d[2]-v[2]*u],[d[0]+v[0]*u,d[1],d[2]+v[2]*u],[c[0]+v[0]*u,c[1]-.05,c[2]+v[2]*u],[c[0]-v[0]*u,c[1]-.05,c[2]-v[2]*u],[-l[0],.5,-l[2]],He.IRON)}{let c=Or(0),f=a(c,e,0),l=10;for(let p=0;p<l;p++){let d=p/l*2*Io,v=(p+1)/l*2*Io,u=(h,m,g)=>[f[0]+Math.cos(h)*m,g,f[2]+Math.sin(h)*m];t.quad(u(d,.035,0),u(v,.035,0),u(v,.035,r+.1),u(d,.035,r+.1),[Math.cos((d+v)/2),0,Math.sin((d+v)/2)],He.IRON),t.quad(u(d,.06,r+.1),u(v,.06,r+.1),u(v,.03,r+.2),u(d,.03,r+.2),[Math.cos((d+v)/2)*.8,.6,Math.sin((d+v)/2)*.8],He.IRON)}}return t}function E_(){let t=[],e=[],o=[],n=[];for(let a of _u){let[s,i,c,f,l,p]=a,d=t.length/3;for(let u=0;u<=7;u++){let h=u/7*2*Io+p,m=Math.cos(h),g=Math.sin(h);t.push(s+m*f,i,c+g*f,s+m*f,i+l,c+g*f),e.push(m,0,g,m,0,g),o.push(0,l,p,1,l,p)}for(let u=0;u<7;u++){let h=d+u*2;n.push(h,h+2,h+3,h,h+3,h+1)}let v=t.length/3;t.push(s,i+l-.006,c),e.push(0,1,0),o.push(2,l,p);for(let u=0;u<7;u++){let h=u/7*2*Io+p;t.push(s+Math.cos(h)*f,i+l,c+Math.sin(h)*f),e.push(0,1,0),o.push(1,l,p)}for(let u=0;u<7;u++)n.push(v,v+1+u,v+1+(u+1)%7)}return{pos:t,nrm:e,info:o,idx:n}}function S_(){let t=[],e=[],o=[],n=[];for(let r of _u){let[a,s,i,,c,f]=r,l=t.length/3;for(let p of[[-1,0],[1,0],[1,1],[-1,1]])t.push(a,s+c+.004,i),e.push(p[0],p[1]),o.push(f);n.push(l,l+1,l+2,l,l+2,l+3)}return{ctr:t,corner:e,ph:o,idx:n}}function k_(t){let e=new DataView(t),o=e.getUint32(4,!0),n=e.getUint32(8,!0),r=[],a=[];for(let g=0;g<3;g++)r.push(e.getFloat32(12+g*4,!0)),a.push(e.getFloat32(24+g*4,!0));let s=36,i=new Uint16Array(t,s,o*3);s+=o*6;let c=new Uint16Array(t,s,n);s+=n*2;let f=new Int8Array(t,s,o*3);s+=o*3;let l=new Uint8Array(t,s,o),p=new Float32Array(o*3),d=new Float32Array(o*3),v=new Float32Array(o),u=Math.cos(cn.yaw),h=Math.sin(cn.yaw),m=cn.scale;for(let g=0;g<o;g++){let b=(r[0]+i[g*3]/65535*a[0])*m,y=(r[1]+i[g*3+1]/65535*a[1])*m,w=(r[2]+i[g*3+2]/65535*a[2])*m;p[g*3]=cn.x+u*b+h*w,p[g*3+1]=y,p[g*3+2]=cn.z-h*b+u*w;let _=f[g*3]/127,M=f[g*3+1]/127,T=f[g*3+2]/127;d[g*3]=u*_+h*T,d[g*3+1]=M,d[g*3+2]=-h*_+u*T,v[g]=l[g]}return{pos:p,nrm:d,mat:v,idx:new Uint32Array(c)}}function A_(){let t=[],e=(p,d)=>[Ne.x+Math.cos(p)*d,Ne.z+Math.sin(p)*d];t.push([[0,ne.z0],[H0(ne.z0),ne.z0]]),t.push([[H0(ne.z1),ne.z1],[0,ne.z1]]);let o=Math.asin((ne.z1-Ne.z)/Ke),n=72;for(let p=0;p<n;p++){let d=o+p/n*(2*Io-2*o),v=o+(p+1)/n*(2*Io-2*o);t.push([e(d,Ke-.25),e(v,Ke-.25)])}let r=Kf[0]-.55+.35;t.push([[r,Sn.z0],[r,Sn.z1]]);let a=2.4/Lo.k,s=12;for(let p=0;p<s;p++){let d=Or(p/s*a),v=Or((p+1)/s*a);t.push([e(d,Lo.ri-.2),e(v,Lo.ri-.2)])}t.push([e(Or(0),Lo.ri-.2),e(Or(0),Ke)]),t.push([e(Or(a),Lo.ri-.2),e(Or(a),Ke)]);let i=Math.cos(cn.yaw),c=Math.sin(cn.yaw),f=cn.scale,l=[[-1,-.62],[1.25,-.62],[1.25,.62],[-1,.62]].map(([p,d])=>[cn.x+(i*p+c*d)*f,cn.z+(-c*p+i*d)*f]);for(let p=0;p<4;p++)t.push([l[p],l[(p+1)%4]]);return t}Vr.exports=t=>{let e=__(),o=M_(),n=E_(),r=S_(),a=G0(),s=`
	precision highp float;
	${m_.GLSL}
	uniform float time;
	${Xm()}
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
				base *= 1.0 - 0.25 * smoothstep(3.0, ${Hn(fr)}, v_pos.y);
			} else if (k < 2.5) {
				// the steps: a greyer, harder stone, worn paler in the middle
				float r = length(v_pos.xz - vec2(${Hn(Ne.x)}, ${Hn(Ne.z)}));
				base = limestone(v_pos.xz * 1.4 + v_uv * 0.3) * vec3(0.90, 0.88, 0.86);
				base *= 1.0 + 0.10 * (1.0 - smoothstep(0.0, 0.6, abs(r - ${Hn((Lo.ri+Lo.ro)/2)})));
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
				vec2 q = v_pos.xz - vec2(${Hn(Ne.x)}, ${Hn(Ne.z)});
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
		}`,attributes:{position:n.pos,normal:n.nrm,info:n.info},elements:new Uint32Array(n.idx),cull:{enable:!1}}),p=t({vert:`
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
		}`,attributes:{ctr:r.ctr,corner:r.corner,ph:r.ph},elements:new Uint32Array(r.idx),uniforms:{halo:t.prop("halo")},depth:{enable:!0,mask:!1},cull:{enable:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),d=null;fetch("res/piano.bin").then(m=>{if(!m.ok)throw new Error("Could not load piano.bin");return m.arrayBuffer()}).then(m=>{let g=k_(m);d=t({vert:`
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
				}`,attributes:{position:g.pos,normal:g.nrm,mat:g.mat},elements:g.idx,cull:{enable:!1}})}).catch(m=>console.error(m));let v=(()=>{let m=[],g=[],b=[],y=[],_=[Ne.x,fr-.3,Ne.z],M=[il.stoolX,.02,il.keyFront+.1],T=1.25,I=2.35;for(let N=0;N<=40;N++){let B=N/40*2*Io,D=Math.cos(B),K=Math.sin(B);m.push(_[0]+D*T,_[1],_[2]+K*T,M[0]+D*I,M[1],M[2]+K*I),g.push(D,.08,K,D,.08,K),b.push(1,0)}for(let N=0;N<40;N++){let B=N*2;y.push(B,B+1,B+3,B,B+3,B+2)}return{pos:m,nrm:g,hh:b,idx:y}})(),u=t({vert:`
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
		}`,attributes:{position:v.pos,normal:v.nrm,hh:v.hh},elements:v.idx,depth:{enable:!0,mask:!1},cull:{enable:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});function h(m){let g=m&&m.reflected;c(),f(),l(),d&&d(),g||(u(),p({halo:1}),p({halo:0}))}return h};Vr.exports.C=Ne;Vr.exports.R=Ke;Vr.exports.PASS=ne;Vr.exports.SURR=o0;Vr.exports.OFF=Kf;Vr.exports.BAY=Sn;Vr.exports.PATH=Yf;Vr.exports.PIANO=cn;Vr.exports.PLAY=il;Vr.exports.TOP=fr;Vr.exports.roomGLSL=Xm;Vr.exports.segments=A_});var a2=mt((Zk,r2)=>{"use strict";var T_=Ts(),{addFlutedColumn:Km,addStatue:L_,addPlant:z_}=Em(),Qm=F0(),R_=Ii(),qa=vr(),N_=_a(),ji=U0(),go=14,An=qa.C.hallEnd+.35,Bo=8,No=.35,Mu=1.15,Eu=1.15,Su=[18,29,40],C_=[[[0,0],[0,ji.PASS.z0]],[[0,ji.PASS.z1],[0,An]],[[go,An],[go,0]],[[0,0],[go,0]],[[go,An],[0,An]]],e2=[];for(let t of Su)for(let e of[1.25,go-1.25]){let o=Mu/2,n=Eu/2;e2.push([[e-o,t-n],[e+o,t-n]],[[e+o,t-n],[e+o,t+n]],[[e+o,t+n],[e-o,t+n]],[[e-o,t+n],[e-o,t-n]])}var Zf=12,o2=2.95,n2=.62,eh=o2+n2,Jf=[{file:"venus.bin",x:1.85,z:An-1.6,yaw:2.67,height:5.2,pedestal:!0,mat:1},{file:"david.bin",x:go-2.1,z:An-1.6,yaw:-2.67,height:5.2,pedestal:!0,mat:1},{file:"pieta.bin",x:1.75,z:5.9,yaw:Math.PI/2,height:3.6,base:1,mat:1},{file:"spinario.bin",x:qa.NICHE_X[0],z:qa.NICHE_STATUE_Z,yaw:-.35,height:1.85,base:qa.NICHE_PLINTH_TOP,mat:3},{file:"charioteer.bin",x:qa.NICHE_X[1],z:qa.NICHE_STATUE_Z+.1,yaw:0,height:2.95,base:qa.NICHE_PLINTH_TOP,mat:3}],O_={x0:No,x1:3.15,z0:3.6,z1:8.2,top:1},Zm=.8,oh=1.17,cl=[];[{z:10.4,dz:-.7},{z:19.2,dz:.7},{z:27.8,dz:-.7}].forEach((t,e)=>{cl.push({x:1,z:t.z,seed:11+e*7,away:[1,t.dz]}),cl.push({x:go-1,z:t.z,seed:53+e*5,away:[-1,t.dz]})});function ku(t,e,o,n){return[[[t-o,e-n],[t+o,e-n]],[[t+o,e-n],[t+o,e+n]],[[t+o,e+n],[t-o,e+n]],[[t-o,e+n],[t-o,e-n]]]}var nh=[];for(let t of[-1,1])nh.push(...ku(go/2+t*eh,Zf,.85,.85));for(let t of Jf.filter(e=>e.pedestal))nh.push(...ku(t.x,t.z,oh*1.1,oh*1.1));for(let t of cl)nh.push(...ku(t.x,t.z,.42,.42));var P_=C_.concat(e2,nh,ji.segments());function I_(t){let o=new Map,n=(r,a,s)=>{let i=r+":"+a;o.has(i)||o.set(i,[]);let c=o.get(i);c.includes(s)||c.push(s)};for(let r of t){let a=Math.floor(Math.min(r[0][0],r[1][0])/4)-1,s=Math.floor(Math.max(r[0][0],r[1][0])/4)+1,i=Math.floor(Math.min(r[0][1],r[1][1])/4)-1,c=Math.floor(Math.max(r[0][1],r[1][1])/4)+1;for(let f=a;f<=s;f++)for(let l=i;l<=c;l++)n(f,l,r)}return{get(r,a){let s=Math.floor(r/4),i=Math.floor(a/4),c=[];for(let f=-1;f<=1;f++)for(let l=-1;l<=1;l++){let p=o.get(s+f+":"+(i+l));p&&c.push(...p)}return[...new Set(c)]}}}var th=[],kn={curMat:[0,0,0]};function Au(t,e,o,n,r,a,s){let i=t.length/3;t.push(...o,...n,...r,...a),e.push(...s,...s,...s,...s);let c=kn.curMat;return th.push(...c,...c,...c,...c),[i,i+2,i+1,i+1,i+2,i+3]}function zo(t,e,o,n,r,a,s,i,c){let f=(l,p,d,v,u)=>{o.push(...Au(t,e,l,p,d,v,u))};f([n,r,a],[s,r,a],[n,i,a],[s,i,a],[0,0,-1]),f([s,r,c],[n,r,c],[s,i,c],[n,i,c],[0,0,1]),f([n,r,c],[n,r,a],[n,i,c],[n,i,a],[-1,0,0]),f([s,r,a],[s,r,c],[s,i,a],[s,i,c],[1,0,0]),f([n,i,a],[s,i,a],[n,i,c],[s,i,c],[0,1,0]),f([n,r,c],[s,r,c],[n,r,a],[s,r,a],[0,-1,0])}function Ui(t,e,o,n,r){let a=kn,s=a.vert(t,r),i=a.vert(e,r),c=a.vert(o,r),f=a.vert(n,r);a.tri(s,i,c),a.tri(i,f,c)}function Jm(t,e,o,n,r,a,s){for(let i=0;i<s;i++){let c=Math.PI*i/s,f=Math.PI*(i+1)/s,l=Math.cos(c),p=Math.sin(c),d=Math.cos(f),v=Math.sin(f),u=[t+o*l,e+o*p],h=[t+o*d,e+o*v],m=[t+n*l,e+n*p],g=[t+n*d,e+n*v];Ui([u[0],u[1],r],[h[0],h[1],r],[m[0],m[1],r],[g[0],g[1],r],[0,0,-1]),Ui([u[0],u[1],a],[h[0],h[1],a],[m[0],m[1],a],[g[0],g[1],a],[0,0,1]);let b=(c+f)/2;Ui([u[0],u[1],r],[h[0],h[1],r],[u[0],u[1],a],[h[0],h[1],a],[-Math.cos(b),-Math.sin(b),0]),Ui([m[0],m[1],r],[g[0],g[1],r],[m[0],m[1],a],[g[0],g[1],a],[Math.cos(b),Math.sin(b),0])}}function $_(t,e,o,n,r,a,s){for(let i=0;i<s;i++){let c=Math.PI*i/s,f=Math.PI*(i+1)/s,l=t+o*Math.cos(c),p=e+o*Math.sin(c),d=t+o*Math.cos(f),v=e+o*Math.sin(f);Ui([l,p,r],[d,v,r],[l,n,r],[d,n,r],[0,0,-1]),Ui([l,p,a],[d,v,a],[l,n,a],[d,n,a],[0,0,1])}}function F_(t,e,o,n){let r=go/2,a=o2,s=3,i=a+.42,c=i+.15,f=n2,l=eh,p=5.98,d=n-.45,v=n+.45,u=64,h=Km(kn,r-l,n,0,p,f);Km(kn,r+l,n,0,p,f),kn.curMat=[0,0,0],Jm(r,s,a,i,d,v,u),Jm(r,s,i,c,d-.07,v+.07,u),$_(r,s,c,h+.05,d,v,u);for(let g of[-1,1]){let b=r+g*(c-.02),y=r+g*l;zo(t,e,o,Math.min(b,y),s,d,Math.max(b,y),h+.05,v)}for(let g of[-1,1]){let b=r+g*(a-.05),y=r+g*(a+.85);zo(t,e,o,Math.min(b,y),s-.16,n-.6,Math.max(b,y),s,n+.6)}let m=l+f*1.42+.45;zo(t,e,o,r-m,h,n-.7,r+m,h+.44,n+.7),zo(t,e,o,r-m+.12,h+.44,n-.62,r+m-.12,h+.7,n+.62),zo(t,e,o,r-m-.1,h+.7,n-.84,r+m+.1,h+.84,n+.84),zo(t,e,o,r-m-.22,h+.84,n-.96,r+m+.22,h+1,n+.96),zo(t,e,o,r-.3,s+a-.1,n-.56,r+.3,h,n+.56)}function t2(t,e,o,n,r){zo(t,e,o,n-.72,0,r-.72,n+.72,.2,r+.72),zo(t,e,o,n-.58,.2,r-.58,n+.58,.4,r+.58),zo(t,e,o,n-Mu/2,.4,r-Eu/2,n+Mu/2,Bo-1.35,r+Eu/2),zo(t,e,o,n-.67,.42,r-.67,n+.67,.62,r+.67),zo(t,e,o,n-.67,Bo-1.58,r-.67,n+.67,Bo-1.35,r+.67),zo(t,e,o,n-.82,Bo-1.35,r-.82,n+.82,Bo-1.05,r+.82),zo(t,e,o,n-.66,Bo-1.05,r-.66,n+.66,Bo-.78,r+.66),zo(t,e,o,n-.92,Bo-.78,r-.92,n+.92,Bo-.55,r+.92),zo(t,e,o,n-.78,Bo-.55,r-.78,n+.78,Bo-.3,r+.78),zo(t,e,o,n-.92,Bo-.3,r-.92,n+.92,Bo-.1,r+.92)}function Qf(t,e,o,n,r){r==="left"?(zo(t,e,o,-.08,1,n-3.8/2,.14,5.7,n+3.8/2),zo(t,e,o,-.08-.04,1+.18,n-3.8/2+.18,.18,5.7-.18,n+3.8/2-.18)):(zo(t,e,o,go-.14,1,n-3.8/2,go+.08,5.7,n+3.8/2),zo(t,e,o,go-.18,1+.18,n-3.8/2+.18,go+.08+.04,5.7-.18,n+3.8/2-.18))}function D_(t,e,o,n){zo(t,e,o,.65,Bo-.16,n-1.65,.65+.22,Bo,n+1.65),zo(t,e,o,go-.65-.22,Bo-.16,n-1.65,go-.65,Bo,n+1.65),zo(t,e,o,.65,Bo-.16,n-1.65,go-.65,Bo,n-1.43),zo(t,e,o,.65,Bo-.16,n+1.43,go-.65,Bo,n+1.65),o.push(...Au(t,e,[.65+.22,Bo-.16,n-1.43],[go-.65-.22,Bo-.16,n-1.43],[.65+.22,Bo-.16,n+1.43],[go-.65-.22,Bo-.16,n+1.43],[0,-1,0]))}r2.exports=function(){let t=[],e=[],o=[];th=[],kn=T_.createBuilder(t,e,o,th),o.push(...Au(t,e,[0,0,0],[go,0,0],[0,0,An],[go,0,An],[0,1,0])),R_.addSkylight(kn,[0,0,0],An),kn.curMat=[0,0,0];{let c=ji.SURR;zo(t,e,o,-No,0,0,No,Bo,c.z0),zo(t,e,o,-No,0,c.z1,No,Bo,An),zo(t,e,o,-No,c.top,c.z0,No,Bo,c.z1)}zo(t,e,o,go-No,0,qa.C.z1,go+No,Bo,An-No),zo(t,e,o,go-No-.12,0,qa.C.z1+2*No,go-No,.42,An-No),zo(t,e,o,go-No-.07,.42,qa.C.z1+2*No,go-No,.5,An-No);for(let[c,f]of[[0,ji.SURR.z0],[ji.SURR.z1,An-No]])zo(t,e,o,No,0,c,No+.12,.42,f),zo(t,e,o,No,.42,c,No+.07,.5,f);zo(t,e,o,No,0,An-No-.12,go-No,.42,An-No),zo(t,e,o,No,.42,An-No-.07,go-No,.5,An-No),Qm.addEntranceWall(kn),Qm.addFrames(kn),kn.curMat=[0,0,0],zo(t,e,o,-No,0,An-No,go+No,Bo,An+No),F_(t,e,o,Zf);for(let c of Su)t2(t,e,o,1.25,c),t2(t,e,o,go-1.25,c);Qf(t,e,o,22,"left"),Qf(t,e,o,25,"right"),Qf(t,e,o,33,"left"),Qf(t,e,o,36,"right");let n=[4,9,34,39,44,49];for(let c of n)D_(t,e,o,c);qa.addWing(kn),kn.curMat=[0,0,0];for(let c of Jf.filter(f=>f.pedestal))L_(kn,c.x,c.z,oh,Zm);{let c=O_;kn.curMat=[0,0,0],kn.box(c.x0,0,c.z0-.08,c.x1+.08,.16,c.z1+.08,[0,0,0]),kn.box(c.x0,.16,c.z0+.04,c.x1-.04,c.top-.14,c.z1-.04,[0,0,0]),kn.box(c.x0,c.top-.14,c.z0-.02,c.x1+.03,c.top-.06,c.z1+.02,[0,0,0]),kn.box(c.x0,c.top-.06,c.z0-.06,c.x1+.07,c.top,c.z1+.06,[0,0,0])}N_.addAlcove(kn);for(let c of cl)z_(kn,c.x,c.z,c.seed,1,c.away);kn.curMat=[0,0,0];let r=[[[go,An-.35],[0,An-.35]],[[0,3],[0,10]],[[go,15],[go,22]],[[0,24],[0,31]],[[go,33],[go,40]],[[0,41],[0,46]]],a=I_(P_),s=(c,f)=>{let l=0,p=1/0;return r.forEach((d,v)=>{let u=(d[0][0]+d[1][0])/2,h=(d[0][1]+d[1][1])/2,m=Math.hypot(c-u,f-h);m<p&&(p=m,l=v)}),l},i=[];for(let c=0;c<10;c++)i.push({c:[0,0,0,0],d:[1,0,0,0]});return{placements:r,lights:i,statues:Jf,occluders:[...Su.flatMap(c=>[[1.25,c,.78],[go-1.25,c,.78]]),[go/2-eh,Zf,.86],[go/2+eh,Zf,.86],...Jf.filter(c=>c.pedestal).map(c=>[c.x,c.z,oh*1.12]),...cl.map(c=>[c.x,c.z,.34])],pedestalTop:Zm,mat:th,getAreaIndex:s,getGridSegments:(c,f)=>a.get(c,f),getGridParts:(c,f)=>a.get(c,f),position:t,normal:e,elements:o}}});var Tu=mt((Jk,s2)=>{"use strict";var{doorLightGLSL:q_}=F0(),{skylightGLSL:G_}=Ii(),{windowLightGLSL:H_,C:aa}=vr(),{alcoveLightGLSL:B_}=_a(),Ma=t=>t.toFixed(4),U_=(()=>{let t=[-.22,.6,-.77],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>(o/e).toFixed(4)).join(", ")})();s2.exports=(t,e,o,n)=>{let a=(e.occluders||[]).slice(0,24).map(([v,u,h])=>`ao = min(ao, contact(v_pos.xz, vec2(${v.toFixed(3)}, ${u.toFixed(3)}), ${h.toFixed(3)}));`).join(`
      `),s={c:[0,0,0,0],d:[1,0,0,0]},i=-1,c=[],f=v=>{let u=v&&v.tick!==void 0?v.tick:0;if(u!==i||c.length===0){i=u;let h=e.viewer||[7,2,20];for(c=e.lights.filter(m=>m.c[3]>.5).map(m=>({l:m,d:Math.hypot(m.c[0]-h[0],m.c[2]-h[2])})).sort((m,g)=>m.d-g.d).slice(0,8).map(m=>m.l);c.length<8;)c.push(s)}return c},l={},p="",d="";for(let v=0;v<8;v++)l["lightC"+v]=u=>f(u)[v].c,l["lightD"+v]=u=>f(u)[v].d,p+="uniform vec4 lightC"+v+", lightD"+v+`;
`,d+="pic += pictureLight(lightC"+v+", lightD"+v+`, v_pos, N);
`;return t({frag:`
    precision highp float;

    uniform float yScale;
    uniform float mirrorOn;
    uniform float night;   // 0 by day, 1 at night
    uniform float time;
    ${G0().lanternGLSL()}

    varying vec3 v_pos;
    varying vec3 v_relativepos;
    varying vec3 v_normal;
    varying vec3 v_eye;
    varying vec3 v_mat;

    ${p}

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

    ${q_()}

    ${G_()}

    ${H_()}

    ${B_()}

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
        step(abs(v_pos.z - ${Ma(aa.hallEnd)}), 0.02) * step(0.5, -N.z) +
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
                 + exp(-pow((v_pos.z - ${Ma((aa.z0+aa.z1)/2)}) / 1.3, 2.0)) * step(14.0, v_pos.x);
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
      light += (1.0 - smoothstep(2.0, 16.0, abs(v_pos.z - ${Ma(aa.hallEnd-1.6)}))) * 0.09 * (1.0 - smoothstep(14.5, 18.0, v_pos.x));

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
          float through = doorLight(v_pos, vec3(${U_}));
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
        if (v_pos.x < 14.0) wallD = min(wallD, ${Ma(aa.hallEnd)} - v_pos.z);
        if (v_pos.x < 14.0 && (v_pos.z < ${Ma(aa.z0)} || v_pos.z > ${Ma(aa.z1)})) wallD = min(wallD, 13.65 - v_pos.x);
        if (v_pos.x > 13.65 && v_pos.z > ${Ma(aa.z0-1)}) wallD = min(min(min(wallD, v_pos.z - ${Ma(aa.z0)}), ${Ma(aa.z1)} - v_pos.z), ${Ma(aa.x1)} - v_pos.x);
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
        if (v_pos.z < ${Ma(aa.z0+.3)} && v_pos.x > ${Ma(aa.x0)}) {
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
    }`,attributes:{position:e.position,normal:e.normal,a_mat:e.mat},uniforms:l,blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"zero"}},elements:new Uint32Array(e.elements),offset:n?t.prop("offset"):0,count:n?t.prop("count"):e.elements.length})}});var c2=mt((tA,i2)=>{"strict mode";var j_="https://api.artic.edu/api/v1/artworks/search",W_=({image_id:t},e)=>`https://www.artic.edu/iiif/2/${t}/full/${e},/0/default.jpg`,V_="?query[bool][must][][term][classification_titles.keyword]=painting&query[bool][must][][term][is_public_domain]=true",X_="&fields=image_id,title,artist_title",Y_={low:400,mid:843,high:1686};i2.exports={fetchList:async function(t,e){let o=j_+V_+X_+`&from=${t}&size=${e}`;return(await fetch(o).then(r=>r.json())).data.filter(r=>r.image_id)},fetchImage:async function(t,e){let o=W_(t,Y_[e]),n=await fetch(o).then(r=>r.blob());return{title:t.title+" - "+t.artist_title,image:n}}}});var h2=mt((eA,f2)=>{"use strict";var K_=K1(),Q_=ba(),Z_=t=>"images/web/"+t.slug+(Q_.isPhone?"-1024":"")+".webp";async function l2(t){let e=await fetch(t);if(!e.ok)throw new Error("Could not load "+t);return e.blob()}f2.exports={fetchList:async function(t,e){return K_.slice(t,t+e).map((o,n)=>({...o,image_id:t+n}))},fetchImage:async function(t){let e;try{e=await l2(Z_(t))}catch(o){e=await l2("images/"+t.file)}return{title:t.title,image:e}}}});var d2=mt((oA,u2)=>{"strict mode";u2.exports={default:"local",artic:c2(),local:h2()}});var zu=mt((nA,v2)=>{"strict mode";var Cs=document.createElement("canvas"),Lu=Cs.width=Cs.height=1024,j0=Cs.getContext("2d");j0.mozImageSmoothingEnabled=!1;j0.webkitImageSmoothingEnabled=!1;j0.font="32px Verdana";j0.textBaseline="bottom";j0.fillStyle="#aaa";function p2(t,e,o,n){var r=e,a,s=0,i=0,c=e.split(" "),f,l;for(f=l=c.length;t.measureText(r).width>o&&f>1;){f--,r=a="";for(var p=0;p<l;p++)p<f?(r+=c[p],p+1<f&&(r+=" ")):(a+=c[p],p+1<l&&(a+=" "))}return n.push(r),i=t.measureText(r).width,a&&(s=p2(t,a,o,n),s>i&&(i=s)),i}v2.exports={init(t,e,o=Lu){var n=[];p2(j0,e,Math.min(o*Lu,Lu),n),j0.clearRect(0,0,Cs.width,Cs.height);for(var r=0;r<n.length;r++)j0.fillText(n[r],0,Cs.height-(Math.max(n.length,3)-r)*32);return t({data:Cs,min:"mipmap",mipmap:"nice",flipY:!0})},draw(t){return t({frag:`
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
            }`,attributes:{pos:[0,0,1,0,0,1,1,1,0,1,1,0]},uniforms:{model:t.prop("textmodel"),tex:t.prop("text")},count:6,blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}})}}});var x2=mt((rA,g2)=>{"strict mode";var Ru=d2(),J_=new URLSearchParams(window.location.search).get("api"),m2=Ru[J_]||Ru[Ru.default],t6=zu(),Nu={},Vi=[],e6=2;function o6(t){return(!navigator.connection||navigator.connection.downlink<e6)&&(t=t=="high"?"mid":"low"),t}var n6=ba(),Wi=document.createElement("canvas");Wi.width=Wi.height=n6.isPhone?1024:2048;var Pu=Wi.getContext("2d");Pu.imageSmoothingEnabled=!0;Pu.imageSmoothingQuality="high";var Cu=!1,r6=t=>[(Vi.pop()||t.texture)([[[200,200,200]]]),e=>(Vi.pop()||t.texture)([[[0,0,0,0]]]),1];async function Ou(t,e,o){Cu===!1&&(Cu=t.hasExtension("EXT_texture_filter_anisotropic")?t._gl.getParameter(t._gl.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0);let n,r;try{let a=await m2.fetchImage(e,o6(o));r=a.title,n=await createImageBitmap(a.image),Pu.drawImage(n,0,0,Wi.width,Wi.height)}catch(a){return console.error(a),o=="high"?await Ou(t,e,"low"):r6(t)}return[(Vi.pop()||t.texture)({data:Wi,min:"mipmap",mipmap:"nice",aniso:Cu,flipY:!0}),a=>t6.init(Vi.pop()||t.texture,r,a),n.width/n.height]}g2.exports={fetch:(t,e=10,o="low",n,r)=>{let a=Object.keys(Nu).length;m2.fetchList(a,e).then(s=>{e=s.length,s.map(i=>{if(Nu[i.image_id]){--e===0&&r();return}Nu[i.image_id]=i,Ou(t,i,o).then(([c,f,l])=>{n({...i,tex:c,textGen:f,aspect:l}),--e===0&&r()})})})},load:(t,e,o="low")=>{e.tex||e.loading||(e.loading=!0,Ou(t,e,o).then(([n,r])=>{e.loading=!1,e.tex=n,e.text=r(e.width)}))},unload:t=>{t.tex&&(Vi.push(t.tex),t.tex=void 0),t.text&&(Vi.push(t.text),t.text=void 0)}}});var y2=mt((aA,b2)=>{b2.exports=a6;function a6(){var t=new Float32Array(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var _2=mt((sA,w2)=>{w2.exports=s6;function s6(t){var e=new Float32Array(16);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}});var E2=mt((iA,M2)=>{M2.exports=i6;function i6(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}});var Iu=mt((cA,S2)=>{S2.exports=c6;function c6(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var A2=mt((lA,k2)=>{k2.exports=l6;function l6(t,e){if(t===e){var o=e[1],n=e[2],r=e[3],a=e[6],s=e[7],i=e[11];t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=o,t[6]=e[9],t[7]=e[13],t[8]=n,t[9]=a,t[11]=e[14],t[12]=r,t[13]=s,t[14]=i}else t[0]=e[0],t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=e[1],t[5]=e[5],t[6]=e[9],t[7]=e[13],t[8]=e[2],t[9]=e[6],t[10]=e[10],t[11]=e[14],t[12]=e[3],t[13]=e[7],t[14]=e[11],t[15]=e[15];return t}});var L2=mt((fA,T2)=>{T2.exports=f6;function f6(t,e){var o=e[0],n=e[1],r=e[2],a=e[3],s=e[4],i=e[5],c=e[6],f=e[7],l=e[8],p=e[9],d=e[10],v=e[11],u=e[12],h=e[13],m=e[14],g=e[15],b=o*i-n*s,y=o*c-r*s,w=o*f-a*s,_=n*c-r*i,M=n*f-a*i,T=r*f-a*c,I=l*h-p*u,N=l*m-d*u,B=l*g-v*u,D=p*m-d*h,K=p*g-v*h,q=d*g-v*m,X=b*q-y*K+w*D+_*B-M*N+T*I;return X?(X=1/X,t[0]=(i*q-c*K+f*D)*X,t[1]=(r*K-n*q-a*D)*X,t[2]=(h*T-m*M+g*_)*X,t[3]=(d*M-p*T-v*_)*X,t[4]=(c*B-s*q-f*N)*X,t[5]=(o*q-r*B+a*N)*X,t[6]=(m*w-u*T-g*y)*X,t[7]=(l*T-d*w+v*y)*X,t[8]=(s*K-i*B+f*I)*X,t[9]=(n*B-o*K-a*I)*X,t[10]=(u*M-h*w+g*b)*X,t[11]=(p*w-l*M-v*b)*X,t[12]=(i*N-s*D-c*I)*X,t[13]=(o*D-n*N+r*I)*X,t[14]=(h*y-u*_-m*b)*X,t[15]=(l*_-p*y+d*b)*X,t):null}});var R2=mt((hA,z2)=>{z2.exports=h6;function h6(t,e){var o=e[0],n=e[1],r=e[2],a=e[3],s=e[4],i=e[5],c=e[6],f=e[7],l=e[8],p=e[9],d=e[10],v=e[11],u=e[12],h=e[13],m=e[14],g=e[15];return t[0]=i*(d*g-v*m)-p*(c*g-f*m)+h*(c*v-f*d),t[1]=-(n*(d*g-v*m)-p*(r*g-a*m)+h*(r*v-a*d)),t[2]=n*(c*g-f*m)-i*(r*g-a*m)+h*(r*f-a*c),t[3]=-(n*(c*v-f*d)-i*(r*v-a*d)+p*(r*f-a*c)),t[4]=-(s*(d*g-v*m)-l*(c*g-f*m)+u*(c*v-f*d)),t[5]=o*(d*g-v*m)-l*(r*g-a*m)+u*(r*v-a*d),t[6]=-(o*(c*g-f*m)-s*(r*g-a*m)+u*(r*f-a*c)),t[7]=o*(c*v-f*d)-s*(r*v-a*d)+l*(r*f-a*c),t[8]=s*(p*g-v*h)-l*(i*g-f*h)+u*(i*v-f*p),t[9]=-(o*(p*g-v*h)-l*(n*g-a*h)+u*(n*v-a*p)),t[10]=o*(i*g-f*h)-s*(n*g-a*h)+u*(n*f-a*i),t[11]=-(o*(i*v-f*p)-s*(n*v-a*p)+l*(n*f-a*i)),t[12]=-(s*(p*m-d*h)-l*(i*m-c*h)+u*(i*d-c*p)),t[13]=o*(p*m-d*h)-l*(n*m-r*h)+u*(n*d-r*p),t[14]=-(o*(i*m-c*h)-s*(n*m-r*h)+u*(n*c-r*i)),t[15]=o*(i*d-c*p)-s*(n*d-r*p)+l*(n*c-r*i),t}});var C2=mt((uA,N2)=>{N2.exports=u6;function u6(t){var e=t[0],o=t[1],n=t[2],r=t[3],a=t[4],s=t[5],i=t[6],c=t[7],f=t[8],l=t[9],p=t[10],d=t[11],v=t[12],u=t[13],h=t[14],m=t[15],g=e*s-o*a,b=e*i-n*a,y=e*c-r*a,w=o*i-n*s,_=o*c-r*s,M=n*c-r*i,T=f*u-l*v,I=f*h-p*v,N=f*m-d*v,B=l*h-p*u,D=l*m-d*u,K=p*m-d*h;return g*K-b*D+y*B+w*N-_*I+M*T}});var P2=mt((dA,O2)=>{O2.exports=d6;function d6(t,e,o){var n=e[0],r=e[1],a=e[2],s=e[3],i=e[4],c=e[5],f=e[6],l=e[7],p=e[8],d=e[9],v=e[10],u=e[11],h=e[12],m=e[13],g=e[14],b=e[15],y=o[0],w=o[1],_=o[2],M=o[3];return t[0]=y*n+w*i+_*p+M*h,t[1]=y*r+w*c+_*d+M*m,t[2]=y*a+w*f+_*v+M*g,t[3]=y*s+w*l+_*u+M*b,y=o[4],w=o[5],_=o[6],M=o[7],t[4]=y*n+w*i+_*p+M*h,t[5]=y*r+w*c+_*d+M*m,t[6]=y*a+w*f+_*v+M*g,t[7]=y*s+w*l+_*u+M*b,y=o[8],w=o[9],_=o[10],M=o[11],t[8]=y*n+w*i+_*p+M*h,t[9]=y*r+w*c+_*d+M*m,t[10]=y*a+w*f+_*v+M*g,t[11]=y*s+w*l+_*u+M*b,y=o[12],w=o[13],_=o[14],M=o[15],t[12]=y*n+w*i+_*p+M*h,t[13]=y*r+w*c+_*d+M*m,t[14]=y*a+w*f+_*v+M*g,t[15]=y*s+w*l+_*u+M*b,t}});var $2=mt((pA,I2)=>{I2.exports=p6;function p6(t,e,o){var n=o[0],r=o[1],a=o[2],s,i,c,f,l,p,d,v,u,h,m,g;return e===t?(t[12]=e[0]*n+e[4]*r+e[8]*a+e[12],t[13]=e[1]*n+e[5]*r+e[9]*a+e[13],t[14]=e[2]*n+e[6]*r+e[10]*a+e[14],t[15]=e[3]*n+e[7]*r+e[11]*a+e[15]):(s=e[0],i=e[1],c=e[2],f=e[3],l=e[4],p=e[5],d=e[6],v=e[7],u=e[8],h=e[9],m=e[10],g=e[11],t[0]=s,t[1]=i,t[2]=c,t[3]=f,t[4]=l,t[5]=p,t[6]=d,t[7]=v,t[8]=u,t[9]=h,t[10]=m,t[11]=g,t[12]=s*n+l*r+u*a+e[12],t[13]=i*n+p*r+h*a+e[13],t[14]=c*n+d*r+m*a+e[14],t[15]=f*n+v*r+g*a+e[15]),t}});var D2=mt((vA,F2)=>{F2.exports=v6;function v6(t,e,o){var n=o[0],r=o[1],a=o[2];return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t[3]=e[3]*n,t[4]=e[4]*r,t[5]=e[5]*r,t[6]=e[6]*r,t[7]=e[7]*r,t[8]=e[8]*a,t[9]=e[9]*a,t[10]=e[10]*a,t[11]=e[11]*a,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}});var G2=mt((mA,q2)=>{q2.exports=m6;function m6(t,e,o,n){var r=n[0],a=n[1],s=n[2],i=Math.sqrt(r*r+a*a+s*s),c,f,l,p,d,v,u,h,m,g,b,y,w,_,M,T,I,N,B,D,K,q,X,pt;return Math.abs(i)<1e-6?null:(i=1/i,r*=i,a*=i,s*=i,c=Math.sin(o),f=Math.cos(o),l=1-f,p=e[0],d=e[1],v=e[2],u=e[3],h=e[4],m=e[5],g=e[6],b=e[7],y=e[8],w=e[9],_=e[10],M=e[11],T=r*r*l+f,I=a*r*l+s*c,N=s*r*l-a*c,B=r*a*l-s*c,D=a*a*l+f,K=s*a*l+r*c,q=r*s*l+a*c,X=a*s*l-r*c,pt=s*s*l+f,t[0]=p*T+h*I+y*N,t[1]=d*T+m*I+w*N,t[2]=v*T+g*I+_*N,t[3]=u*T+b*I+M*N,t[4]=p*B+h*D+y*K,t[5]=d*B+m*D+w*K,t[6]=v*B+g*D+_*K,t[7]=u*B+b*D+M*K,t[8]=p*q+h*X+y*pt,t[9]=d*q+m*X+w*pt,t[10]=v*q+g*X+_*pt,t[11]=u*q+b*X+M*pt,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t)}});var B2=mt((gA,H2)=>{H2.exports=g6;function g6(t,e,o){var n=Math.sin(o),r=Math.cos(o),a=e[4],s=e[5],i=e[6],c=e[7],f=e[8],l=e[9],p=e[10],d=e[11];return e!==t&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[4]=a*r+f*n,t[5]=s*r+l*n,t[6]=i*r+p*n,t[7]=c*r+d*n,t[8]=f*r-a*n,t[9]=l*r-s*n,t[10]=p*r-i*n,t[11]=d*r-c*n,t}});var j2=mt((xA,U2)=>{U2.exports=x6;function x6(t,e,o){var n=Math.sin(o),r=Math.cos(o),a=e[0],s=e[1],i=e[2],c=e[3],f=e[8],l=e[9],p=e[10],d=e[11];return e!==t&&(t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=a*r-f*n,t[1]=s*r-l*n,t[2]=i*r-p*n,t[3]=c*r-d*n,t[8]=a*n+f*r,t[9]=s*n+l*r,t[10]=i*n+p*r,t[11]=c*n+d*r,t}});var V2=mt((bA,W2)=>{W2.exports=b6;function b6(t,e,o){var n=Math.sin(o),r=Math.cos(o),a=e[0],s=e[1],i=e[2],c=e[3],f=e[4],l=e[5],p=e[6],d=e[7];return e!==t&&(t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=a*r+f*n,t[1]=s*r+l*n,t[2]=i*r+p*n,t[3]=c*r+d*n,t[4]=f*r-a*n,t[5]=l*r-s*n,t[6]=p*r-i*n,t[7]=d*r-c*n,t}});var Y2=mt((yA,X2)=>{X2.exports=y6;function y6(t,e,o){var n,r,a,s=o[0],i=o[1],c=o[2],f=Math.sqrt(s*s+i*i+c*c);return Math.abs(f)<1e-6?null:(f=1/f,s*=f,i*=f,c*=f,n=Math.sin(e),r=Math.cos(e),a=1-r,t[0]=s*s*a+r,t[1]=i*s*a+c*n,t[2]=c*s*a-i*n,t[3]=0,t[4]=s*i*a-c*n,t[5]=i*i*a+r,t[6]=c*i*a+s*n,t[7]=0,t[8]=s*c*a+i*n,t[9]=i*c*a-s*n,t[10]=c*c*a+r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t)}});var Q2=mt((wA,K2)=>{K2.exports=w6;function w6(t,e,o){var n=e[0],r=e[1],a=e[2],s=e[3],i=n+n,c=r+r,f=a+a,l=n*i,p=n*c,d=n*f,v=r*c,u=r*f,h=a*f,m=s*i,g=s*c,b=s*f;return t[0]=1-(v+h),t[1]=p+b,t[2]=d-g,t[3]=0,t[4]=p-b,t[5]=1-(l+h),t[6]=u+m,t[7]=0,t[8]=d+g,t[9]=u-m,t[10]=1-(l+v),t[11]=0,t[12]=o[0],t[13]=o[1],t[14]=o[2],t[15]=1,t}});var J2=mt((_A,Z2)=>{Z2.exports=_6;function _6(t,e){return t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=e[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var eg=mt((MA,tg)=>{tg.exports=M6;function M6(t,e){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e[0],t[13]=e[1],t[14]=e[2],t[15]=1,t}});var ng=mt((EA,og)=>{og.exports=E6;function E6(t,e){var o=Math.sin(e),n=Math.cos(e);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=n,t[6]=o,t[7]=0,t[8]=0,t[9]=-o,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var ag=mt((SA,rg)=>{rg.exports=S6;function S6(t,e){var o=Math.sin(e),n=Math.cos(e);return t[0]=n,t[1]=0,t[2]=-o,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=o,t[9]=0,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var ig=mt((kA,sg)=>{sg.exports=k6;function k6(t,e){var o=Math.sin(e),n=Math.cos(e);return t[0]=n,t[1]=o,t[2]=0,t[3]=0,t[4]=-o,t[5]=n,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var lg=mt((AA,cg)=>{cg.exports=A6;function A6(t,e){var o=e[0],n=e[1],r=e[2],a=e[3],s=o+o,i=n+n,c=r+r,f=o*s,l=n*s,p=n*i,d=r*s,v=r*i,u=r*c,h=a*s,m=a*i,g=a*c;return t[0]=1-p-u,t[1]=l+g,t[2]=d-m,t[3]=0,t[4]=l-g,t[5]=1-f-u,t[6]=v+h,t[7]=0,t[8]=d+m,t[9]=v-h,t[10]=1-f-p,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var hg=mt((TA,fg)=>{fg.exports=T6;function T6(t,e,o,n,r,a,s){var i=1/(o-e),c=1/(r-n),f=1/(a-s);return t[0]=a*2*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a*2*c,t[6]=0,t[7]=0,t[8]=(o+e)*i,t[9]=(r+n)*c,t[10]=(s+a)*f,t[11]=-1,t[12]=0,t[13]=0,t[14]=s*a*2*f,t[15]=0,t}});var dg=mt((LA,ug)=>{ug.exports=L6;function L6(t,e,o,n,r){var a=1/Math.tan(e/2),s=1/(n-r);return t[0]=a/o,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(r+n)*s,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*r*n*s,t[15]=0,t}});var vg=mt((zA,pg)=>{pg.exports=z6;function z6(t,e,o,n){var r=Math.tan(e.upDegrees*Math.PI/180),a=Math.tan(e.downDegrees*Math.PI/180),s=Math.tan(e.leftDegrees*Math.PI/180),i=Math.tan(e.rightDegrees*Math.PI/180),c=2/(s+i),f=2/(r+a);return t[0]=c,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=f,t[6]=0,t[7]=0,t[8]=-((s-i)*c*.5),t[9]=(r-a)*f*.5,t[10]=n/(o-n),t[11]=-1,t[12]=0,t[13]=0,t[14]=n*o/(o-n),t[15]=0,t}});var gg=mt((RA,mg)=>{mg.exports=R6;function R6(t,e,o,n,r,a,s){var i=1/(e-o),c=1/(n-r),f=1/(a-s);return t[0]=-2*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*c,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*f,t[11]=0,t[12]=(e+o)*i,t[13]=(r+n)*c,t[14]=(s+a)*f,t[15]=1,t}});var bg=mt((NA,xg)=>{var N6=Iu();xg.exports=C6;function C6(t,e,o,n){var r,a,s,i,c,f,l,p,d,v,u=e[0],h=e[1],m=e[2],g=n[0],b=n[1],y=n[2],w=o[0],_=o[1],M=o[2];return Math.abs(u-w)<1e-6&&Math.abs(h-_)<1e-6&&Math.abs(m-M)<1e-6?N6(t):(l=u-w,p=h-_,d=m-M,v=1/Math.sqrt(l*l+p*p+d*d),l*=v,p*=v,d*=v,r=b*d-y*p,a=y*l-g*d,s=g*p-b*l,v=Math.sqrt(r*r+a*a+s*s),v?(v=1/v,r*=v,a*=v,s*=v):(r=0,a=0,s=0),i=p*s-d*a,c=d*r-l*s,f=l*a-p*r,v=Math.sqrt(i*i+c*c+f*f),v?(v=1/v,i*=v,c*=v,f*=v):(i=0,c=0,f=0),t[0]=r,t[1]=i,t[2]=l,t[3]=0,t[4]=a,t[5]=c,t[6]=p,t[7]=0,t[8]=s,t[9]=f,t[10]=d,t[11]=0,t[12]=-(r*u+a*h+s*m),t[13]=-(i*u+c*h+f*m),t[14]=-(l*u+p*h+d*m),t[15]=1,t)}});var wg=mt((CA,yg)=>{yg.exports=O6;function O6(t){return"mat4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+")"}});var Xi=mt((OA,_g)=>{_g.exports={create:y2(),clone:_2(),copy:E2(),identity:Iu(),transpose:A2(),invert:L2(),adjoint:R2(),determinant:C2(),multiply:P2(),translate:$2(),scale:D2(),rotate:G2(),rotateX:B2(),rotateY:j2(),rotateZ:V2(),fromRotation:Y2(),fromRotationTranslation:Q2(),fromScaling:J2(),fromTranslation:eg(),fromXRotation:ng(),fromYRotation:ag(),fromZRotation:ig(),fromQuat:lg(),frustum:hg(),perspective:dg(),perspectiveFromFieldOfView:vg(),ortho:gg(),lookAt:bg(),str:wg()}});var Sg=mt((PA,Eg)=>{"use strict";var Mg=x2(),xn=Xi(),Os=vr(),P6=3e3,rh="high",$u,fl=.36,hl=13.64,Yi=Os.C.hallEnd-.01,ul=Os.C.z0+.01,I6=.356,$6=13.644,F6=Os.C.hallEnd-.006,D6=Os.C.z0+.006,q6=.12,sh=4,Ki=t=>mr[t]&&mr[t].cy||sh,Fu=.26,G6=5.6,H6=7,mr=[{side:"right",z:34.5},{side:"right",z:23.5},{side:"left",z:23.5},{side:"end",z:Yi},{side:"left",z:34.5},{side:"right",z:14.6},{side:"left",z:14.6,maxW:3.7,maxH:3.7},{side:"corridor",x:Os.PAINTING_X[0],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:Os.PAINTING_X[1],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:Os.PAINTING_X[2],cy:3,maxW:3.3,maxH:3.73}];function B6(t,e){let o=e&&e.maxH||G6,n=e&&e.maxW||H6,r=Math.min(o,n/t);return{width:r*t,height:r}}function U6(t,e,o){let n=mr[o],r=[],a=Ki(o)-e/2;return n.side==="left"?(xn.fromTranslation(r,[fl,a,n.z+t/2]),xn.rotateY(r,r,Math.PI/2)):n.side==="right"?(xn.fromTranslation(r,[hl,a,n.z-t/2]),xn.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?xn.fromTranslation(r,[n.x-t/2,a,ul]):(xn.fromTranslation(r,[7+t/2,a,Yi]),xn.rotateY(r,r,Math.PI)),xn.scale(r,r,[t,e,q6]),r}function j6(t,e,o){let n=mr[o],r=[],a=Ki(o)-e/2;return n.side==="left"?(xn.fromTranslation(r,[fl,a,n.z+t/2]),xn.rotateY(r,r,Math.PI/2)):n.side==="right"?(xn.fromTranslation(r,[hl,a,n.z-t/2]),xn.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?xn.fromTranslation(r,[n.x-t/2,a,ul]):(xn.fromTranslation(r,[7+t/2,a,Yi]),xn.rotateY(r,r,Math.PI)),r}function W6(t,e,o){let n=mr[o],r=[],a=Ki(o)-e/2-Fu-.38;return n.side==="left"?(xn.fromTranslation(r,[I6,a,n.z+t/2]),xn.rotateY(r,r,Math.PI/2)):n.side==="right"?(xn.fromTranslation(r,[$6,a,n.z-t/2]),xn.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?xn.fromTranslation(r,[n.x-t/2,a,D6]):(xn.fromTranslation(r,[7+t/2,a,F6]),xn.rotateY(r,r,Math.PI)),xn.scale(r,r,[2,2,2]),r}function V6(t,e,o){let n=mr[o],r=Ki(o)-e/2-Fu-.38;return n.side==="left"?[fl+.55,r,n.z]:n.side==="right"?[hl-.55,r,n.z]:n.side==="corridor"?[n.x,r,ul+.55]:[7,r,Yi-.55]}var ll=.42;function ah(t,e,o,n,r,a){return[e[0]*n,e[1]*n,e[2]*n,0,0,r,0,0,o[0]*a,o[1]*a,o[2]*a,0,t[0],t[1],t[2],1]}function X6(t,e,o){let n=mr[o],r,a,s;n.side==="left"?(r=[fl,n.z],a=[0,0,1],s=[1,0,0]):n.side==="right"?(r=[hl,n.z],a=[0,0,1],s=[-1,0,0]):n.side==="corridor"?(r=[n.x,ul],a=[1,0,0],s=[0,0,1]):(r=[7,Yi],a=[1,0,0],s=[0,0,-1]);let i=Ki(o)+e/2+Fu+.3,c=Math.min(2.4,Math.max(.9,t*.55)),f=(v,u)=>[r[0]+s[0]*v,u,r[1]+s[2]*v],l=[.075,.062,.05],p=[{fixmodel:ah(f(.014,i),a,s,.1,.13,.028),fixcol:l,fixglow:0},{fixmodel:ah(f(ll/2,i),a,s,.02,.02,ll),fixcol:l,fixglow:0},{fixmodel:ah(f(ll,i),a,s,c,.034,.05),fixcol:l,fixglow:0},{fixmodel:ah(f(ll-.012,i-.019),a,s,c*.94,.006,.028),fixcol:l,fixglow:1}],d=f(ll,i-.02);return{fixtures:p,light:{c:[d[0],d[1],d[2],1],d:[a[0],a[1],a[2],c/2]}}}Eg.exports=(t,e)=>{let o=[],n=[],r=a=>{let s=a.image_id;if(!mr[s])return;let{width:i,height:c}=B6(a.aspect,mr[s]),f=X6(i,c,s);e&&e.lights&&s<e.lights.length&&(e.lights[s]=f.light),o.push({...a,fixtures:f.fixtures,side:mr[s].side,model:U6(i,c,s),framemodel:j6(i,c,s),framesize:[i,c],textmodel:W6(i,c,s),text:a.textGen(i),width:i,height:c,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:V6(i,c,s),paintingPosition:mr[s].side==="left"?[fl+.05,sh,mr[s].z]:mr[s].side==="right"?[hl-.05,sh,mr[s].z]:mr[s].side==="corridor"?[mr[s].x,Ki(s),ul+.05]:[7,sh,Yi-.05],textGen:null})};return Mg.fetch(t,mr.length,rh,r,()=>{}),{update:()=>{n=o,n.forEach(a=>{Mg.load(t,a,rh)}),rh="low",$u&&clearTimeout($u),$u=setTimeout(()=>{rh="high"},P6)},batch:()=>n,interactables:()=>n.map((a,s)=>({side:a.side,width:a.width,index:s,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:a.plaquePosition,paintingPosition:a.paintingPosition}))}}});var Lg=mt((IA,Tg)=>{"use strict";var Y6=zu(),kg=ba(),Ag=[[-.02,.125],[-.02,.15],[.035,.15],[.07,.12],[.07,.17],[.185,.17],[.185,.19],[.215,.19],[.26,.03]];function K6(){let t=[[0,0],[1,0],[1,1],[0,1]],e=[];Ag.forEach(([n,r])=>{t.forEach(([a,s])=>e.push([a,s,n,r]))});let o=[];for(let n=0;n<Ag.length-1;n++)for(let r=0;r<4;r++){let a=(r+1)%4,s=n*4+r,i=n*4+a,c=(n+1)*4+r,f=(n+1)*4+a;o.push(s,i,f,s,f,c)}return{verts:e,elems:o}}var Q6=`#extension GL_OES_standard_derivatives : enable
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
}`,Z6=`
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
}`;Tg.exports=t=>{let e=Y6.draw(t),o=t({frag:`#extension GL_OES_standard_derivatives : enable
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
	${G0().lanternGLSL()}
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
	}`,attributes:{pos:[0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,-.1,-.1,0,1.1,-.1,0,-.1,1.1,0,1.1,1.1,0]},elements:[0,1,2,3,2,1,1,0,5,4,5,0,3,1,7,5,7,1,0,2,4,6,4,2,8,9,4,5,4,9,9,11,5,7,5,11,11,10,7,6,7,10,10,8,6,4,6,8],uniforms:{model:t.prop("model"),tex:t.prop("tex"),psize:t.prop("framesize"),canvasCm:(s,i)=>i.size?[i.size[1],i.size[0]]:[61,91],texel:1/(kg.isPhone?1024:2048),detail:()=>kg.post===0?0:1},blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}}),n=K6(),r=t({frag:Q6,vert:Z6,attributes:{prof:n.verts},elements:n.elems,uniforms:{model:t.prop("framemodel"),fsize:t.prop("framesize")},cull:{enable:!1},blend:{enable:!1}}),a=t({frag:`#extension GL_OES_standard_derivatives : enable
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
}`,attributes:{pos:[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5],[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]]},elements:[0,1,2,0,2,3,4,5,6,4,6,7,0,1,5,0,5,4,2,3,7,2,7,6,0,3,7,0,7,4,1,2,6,1,6,5],uniforms:{model:t.prop("fixmodel"),fixcol:t.prop("fixcol"),fixglow:t.prop("fixglow")},cull:{enable:!1},blend:{enable:!1}});return function(s){o(s),r(s);let i=[];s.forEach(c=>{c.fixtures&&i.push(...c.fixtures)}),i.length&&a(i),e(s)}}});var gl=mt((FA,W0)=>{"use strict";var Xo=Math.PI,zt=t=>(+t).toFixed(4),yo=[-90,0,0],Ut=16,co=22,ho=7.8,sa=11.6,hr=.55,ia=(sa-ho)/(Ut/2),te={c:[3.6,8.6,13.6,18.6],hw:1.3,sill:.62,spring:4.9};te.top=te.spring+te.hw;var Pr={cols:[-.65,0,.65],rowH:.71,w:.055,ring:.78},Ho={rafter:co/12,rafterW:.1,purlin:1,purlinW:.07},pl=[5.5,11,16.5],ie={x0:Ut/2-1.9,x1:Ut/2+1.9,z0:5.6,z1:16.6,curb:.5,top:.36},Ir={x:Ut/2,z:14.9,plinth:.86,height:2.05,yaw:Xo+.35,file:"res/nymph.bin"},Du=(()=>{let t=[-.68,.6,-.36],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>o/e)})(),qu=t=>[t[0]+yo[0],t[1]+yo[1],t[2]+yo[2]];function Cg(){let t=te.c.map(o=>`
		{
			float dz = q.z - ${zt(o)};
			float inside = smoothstep(-b, b, ${zt(te.hw)} - abs(dz)) * smoothstep(-b, b, q.y - ${zt(te.sill)});
			float arch = smoothstep(-b, b, ${zt(te.hw)} - length(vec2(dz, max(q.y - ${zt(te.spring)}, 0.0))));
			o = max(o, inside * arch);
		}`).join(""),e=te.c.map(o=>`
		{
			float dz = q.z - ${zt(o)};
			if (abs(dz) < ${zt(te.hw+.2)}) {
				${Pr.cols.map(n=>`bar = max(bar, 1.0 - smoothstep(${zt(Pr.w*.5)} - b, ${zt(Pr.w*.5)} + b, abs(dz - ${zt(n)})));`).join(`
				`)}
				float ry = q.y - ${zt(te.sill)};
				float tr = abs(ry - ${zt(Pr.rowH)} * floor(ry / ${zt(Pr.rowH)} + 0.5));
				if (q.y < ${zt(te.spring+.02)}) bar = max(bar, 1.0 - smoothstep(${zt(Pr.w*.5)} - b, ${zt(Pr.w*.5)} + b, tr));
				float rr = length(vec2(dz, q.y - ${zt(te.spring)}));
				if (q.y > ${zt(te.spring)}) bar = max(bar, 1.0 - smoothstep(${zt(Pr.w*.5)} - b, ${zt(Pr.w*.5)} + b, abs(rr - ${zt(Pr.ring)})));
				// the frame round the opening
				bar = max(bar, 1.0 - smoothstep(0.0, b + 0.03, ${zt(te.hw)} - max(abs(dz), q.y > ${zt(te.spring)} ? rr : 0.0)));
			}
		}`).join("");return`
	const vec3 STUDIO_SUN = vec3(${zt(Du[0])}, ${zt(Du[1])}, ${zt(Du[2])});

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

	// the leaded pattern in each pane of the roof: q is the pane's own
	// coordinates (centre 0, half size ${zt(Ho.purlin/2)} x ${zt(Ho.rafter/2)}),
	// b the softness. Returns how much light gets through.
	float studioRoofPattern(vec2 q, float b) {
		vec2 hs = vec2(${zt(Ho.purlin/2)}, ${zt(Ho.rafter/2)});
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
		vec3 p = pw - vec3(${zt(yo[0])}, ${zt(yo[1])}, ${zt(yo[2])});
		vec3 S = STUDIO_SUN;
		// where the ray towards the sun leaves through the left wall
		float tw = (0.0 - p.x) / S.x;
		// and where it rises past the eaves
		float te = (${zt(ho)} - p.y) / S.y;
		if (tw > 0.0 && tw < te) {
			vec3 h0 = p + S * tw;
			if (h0.z < 0.0 || h0.z > ${zt(co)}) return 0.0;
			vec3 h1 = p + S * ((${zt(-hr)} - p.x) / S.x);
			vec3 hm = p + S * ((${zt(-hr*.5)} - p.x) / S.x);
			float b = 0.006 + 0.0075 * tw;
			float open = min(studioWinOpen(h0, b), studioWinOpen(h1, b));
			if (open <= 0.0) return 0.0;
			float bar = studioWinBars(hm, b);
			return open * (1.0 - bar) * 0.92;
		}
		// up through the roof: the trusses' tie beams first
		vec3 he = p + S * max(te, 0.0);
		float vis = 1.0;
		if (p.y < ${zt(ho)}) {
			if (he.z < 0.0 || he.z > ${zt(co)} || he.x < 0.0 || he.x > ${zt(Ut)}) return 0.0;
			float be = 0.01 + 0.008 * te;
			${pl.map(o=>`vis *= smoothstep(0.08 - be, 0.08 + be, abs(he.z - ${zt(o)}));`).join(`
			`)}
			// the bougainvillea along the tie beams
			${vl.filter(o=>o[0]==="truss").map(([o,n,r])=>`vis *= 1.0 - studioVineShade(he.z - ${zt(n)}, he.x, he.z, ${zt(r)});`).join(`
			`)}
		}
		// then the glass: the two slopes of the roof
		float tl = (${zt(ia)} * p.x - p.y + ${zt(ho)}) / (S.y - ${zt(ia)} * S.x);
		float tr = (${zt(ia)} * (${zt(Ut)} - p.x) - p.y + ${zt(ho)}) / (S.y + ${zt(ia)} * S.x);
		float t = 1e9;
		vec3 h = vec3(0.0);
		vec3 hl = p + S * tl, hr = p + S * tr;
		if (tl > 0.0 && hl.x >= -0.01 && hl.x <= ${zt(Ut/2+.01)}) { t = tl; h = hl; }
		if (tr > 0.0 && tr < t && hr.x >= ${zt(Ut/2-.01)} && hr.x <= ${zt(Ut+.01)}) { t = tr; h = hr; }
		if (t > 1e8) return 0.0;
		if (h.z < 0.0 || h.z > ${zt(co)}) return 0.0;
		float b = 0.008 + 0.0075 * t;
		float rz = abs(h.z - ${zt(Ho.rafter)} * floor(h.z / ${zt(Ho.rafter)} + 0.5));
		float bar = 1.0 - smoothstep(${zt(Ho.rafterW*.5)} - b, ${zt(Ho.rafterW*.5)} + b, rz);
		float ux = h.x < ${zt(Ut/2)} ? h.x : ${zt(Ut)} - h.x;
		float rx = abs(ux - ${zt(Ho.purlin)} * floor(ux / ${zt(Ho.purlin)} + 0.5));
		bar = max(bar, 1.0 - smoothstep(${zt(Ho.purlinW*.5)} - b, ${zt(Ho.purlinW*.5)} + b, rx));
		// the ridge beam
		bar = max(bar, 1.0 - smoothstep(0.14 - b, 0.14 + b, abs(h.x - ${zt(Ut/2)})));
		// the leaded pattern in the panes (its shadow is crisper than
		// the sun's disc would allow, for the drawing to read)
		vec2 pq = vec2(ux - ${zt(Ho.purlin)} * floor(ux / ${zt(Ho.purlin)}) - ${zt(Ho.purlin/2)}, h.z - ${zt(Ho.rafter)} * floor(h.z / ${zt(Ho.rafter)}) - ${zt(Ho.rafter/2)});
		float pat = studioRoofPattern(pq, 0.004 + 0.0035 * t);
		// and along the rafters and the ridge
		${vl.filter(o=>o[0]==="rafter").map(([o,n,r])=>`pat *= 1.0 - studioVineShade(h.z - ${zt(n)}, h.x, h.z, ${zt(r)});`).join(`
		`)}
		pat *= 1.0 - studioVineShade(h.x - ${zt(Ut/2)}, h.z, h.x, 0.9);
		return vis * (1.0 - bar) * pat * 0.78;
	}`}function ml(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let o=e;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}var it={FLOOR:0,PLASTER:1,STONE:2,STEEL:3,WATER:4,PAD:5,PETAL:6,STAMEN:7,MARBLE:8,WOOD:9,GESSO:10,PAINT:11,POT:12,SHADE:13,BULB:14,NICHE:15,JAR:16,SOIL:17,BRUSH:18,TRAVERTINE:19,CLOTH:20,WMARBLE:21,REDDOOR:22,REDPANEL:23,DARKWOOD:24,BRASS:25,BRACT:26,KEYHOLE:27};function Og(){let t={pos:[],nrm:[],kind:[],uv:[],idx:[]};return t.v=(e,o,n,r)=>(t.pos.push(e[0]+yo[0],e[1]+yo[1],e[2]+yo[2]),t.nrm.push(o[0],o[1],o[2]),t.kind.push(n),t.uv.push(r?r[0]:0,r?r[1]:0),t.pos.length/3-1),t.quad=(e,o,n,r,a,s,i)=>{let c=t.v(e,a,s,i&&i[0]),f=t.v(o,a,s,i&&i[1]),l=t.v(n,a,s,i&&i[2]),p=t.v(r,a,s,i&&i[3]);t.idx.push(c,f,l,c,l,p)},t.box=(e,o,n,r,a,s,i,c)=>{let f=c||{};f.top||t.quad([e,a,n],[e,a,s],[r,a,s],[r,a,n],[0,1,0],i,[[e,n],[e,s],[r,s],[r,n]]),f.bottom||t.quad([e,o,n],[r,o,n],[r,o,s],[e,o,s],[0,-1,0],i,[[e,n],[r,n],[r,s],[e,s]]),f.x0||t.quad([e,o,n],[e,o,s],[e,a,s],[e,a,n],[-1,0,0],i,[[n,o],[s,o],[s,a],[n,a]]),f.x1||t.quad([r,o,s],[r,o,n],[r,a,n],[r,a,s],[1,0,0],i,[[s,o],[n,o],[n,a],[s,a]]),f.z0||t.quad([r,o,n],[e,o,n],[e,a,n],[r,a,n],[0,0,-1],i,[[r,o],[e,o],[e,a],[r,a]]),f.z1||t.quad([e,o,s],[r,o,s],[r,a,s],[e,a,s],[0,0,1],i,[[e,o],[r,o],[r,a],[e,a]])},t.tbox=(e,o,n,r,a,s,i,c,f)=>{let l=Math.cos(n),p=Math.sin(n),d=Math.cos(f||0),v=Math.sin(f||0),u=(g,b,y)=>{let w=a+(b-a)*d-y*v*0,_=y+(b-a)*v,M=a+(b-a)*d;return[e+l*g+p*_,M,o-p*g+l*_]},h=g=>{let b=g[1]*d-g[2]*v,y=g[2]*d+g[1]*v;return[l*g[0]+p*y,b,-p*g[0]+l*y]},m=(g,b,y,w,_)=>t.quad(u(...g),u(...b),u(...y),u(...w),h(_),c,[[g[0]+g[2],g[1]],[b[0]+b[2],b[1]],[y[0]+y[2],y[1]],[w[0]+w[2],w[1]]]);m([-r,s,-i],[-r,s,i],[r,s,i],[r,s,-i],[0,1,0]),m([-r,a,-i],[r,a,-i],[r,a,i],[-r,a,i],[0,-1,0]),m([-r,a,-i],[-r,a,i],[-r,s,i],[-r,s,-i],[-1,0,0]),m([r,a,i],[r,a,-i],[r,s,-i],[r,s,i],[1,0,0]),m([r,a,-i],[-r,a,-i],[-r,s,-i],[r,s,-i],[0,0,-1]),m([-r,a,i],[r,a,i],[r,s,i],[-r,s,i],[0,0,1])},t.beam=(e,o,n,r,a)=>{let s=[o[0]-e[0],o[1]-e[1],o[2]-e[2]],i=Math.hypot(...s),c=s.map(u=>u/i),f=a||(Math.abs(c[1])>.9?[1,0,0]:[0,1,0]),l=[c[1]*f[2]-c[2]*f[1],c[2]*f[0]-c[0]*f[2],c[0]*f[1]-c[1]*f[0]],p=Math.hypot(...l);l=l.map(u=>u/p),f=[l[1]*c[2]-l[2]*c[1],l[2]*c[0]-l[0]*c[2],l[0]*c[1]-l[1]*c[0]];let d=(u,h,m)=>[u[0]+l[0]*n*h+f[0]*n*m,u[1]+l[1]*n*h+f[1]*n*m,u[2]+l[2]*n*h+f[2]*n*m],v=[[[1,-1],[1,1],l],[[1,1],[-1,1],f],[[-1,1],[-1,-1],l.map(u=>-u)],[[-1,-1],[1,-1],f.map(u=>-u)]];for(let[u,h,m]of v)t.quad(d(e,...u),d(o,...u),d(o,...h),d(e,...h),m,r,[[0,0],[i,0],[i,1],[0,1]])},t.lathe=(e,o,n,r,a)=>{let s=a||32,i=n.map(([c,f],l)=>{let p=n[Math.max(0,l-1)],d=n[Math.min(n.length-1,l+1)],v=d[0]-p[0],u=d[1]-p[1],h=Math.hypot(v,u)||1,m=u/h,g=-v/h,b=[];for(let y=0;y<=s;y++){let w=y/s*2*Xo;b.push(t.v([e+Math.cos(w)*c,f,o+Math.sin(w)*c],[Math.cos(w)*m,g,Math.sin(w)*m],r,[y/s*c*2*Xo,f]))}return b});for(let c=0;c<i.length-1;c++)for(let f=0;f<s;f++){let l=i[c][f],p=i[c][f+1],d=i[c+1][f+1],v=i[c+1][f];t.idx.push(l,v,d,l,d,p)}},t}var Qi=t=>Math.abs(t)>=te.hw?null:te.spring+Math.sqrt(te.hw*te.hw-t*t),vl=[["truss",pl[0],3.1],["truss",pl[1],5.4],["truss",pl[2],7.7],["rafter",Ho.rafter*2,1.7],["rafter",Ho.rafter*5,8.5],["rafter",Ho.rafter*8,13.6],["rafter",Ho.rafter*10,17],["ridge",Ut/2,.9]],Gu=(t,e)=>.5*Math.sin(t*1.9+e)+.5*Math.sin(t*.77+e*1.3)>-.25,J6=t=>t<Ut/2?ho+ia*t:ho+ia*(Ut-t);function Hu(t,e,o){return t==="truss"?[o,ho-.12,e]:t==="rafter"?[o,J6(o)-.2,e]:[e,sa-.32,o]}var Bu=t=>t==="ridge"?[.4,co-.4]:[.35,Ut-.35],Xr={w:1.72,spring:2.05,r:2.05,frame:.21,zl:co-.05,zf:co-.13};Xr.c=Xr.r-Xr.w/2;var Ea=(t,e)=>{let o=Xr.r+(e||0),n=Math.abs(t)+Xr.c;return n>=o?Xr.spring:Xr.spring+Math.sqrt(o*o-n*n)};Xr.top=Ea(0);function tM(t){let e=Ut/2,{w:o,frame:n,zl:r,zf:a}=Xr,s=o/2,i=s+n,c=.02;for(let M=-i;M<i-1e-6;M+=c){let T=M,I=Math.min(i,M+c),N=(T+I)/2,B=Ea(T,n),D=Ea(I,n),K=0,q=0;Math.abs(N)<s&&(K=Ea(T),q=Ea(I)),Math.abs(N)>=s;{let X=Math.abs(N)<s?K:0,pt=Math.abs(N)<s?q:0;t.quad([e+I,pt,a],[e+T,X,a],[e+T,B,a],[e+I,D,a],[0,0,-1],it.DARKWOOD,[[I,pt],[T,X],[T,B],[I,D]])}t.quad([e+T,B,a],[e+T,B,co],[e+I,D,co],[e+I,D,a],[0,1,0],it.DARKWOOD,[[T,0],[T,1],[I,1],[I,0]]),Math.abs(N)<s&&t.quad([e+T,K,a],[e+I,q,a],[e+I,q,r],[e+T,K,r],[0,-1,0],it.DARKWOOD,[[T,0],[I,0],[I,1],[T,1]])}for(let M of[-1,1])t.quad([e+M*i,0,a],[e+M*i,0,co],[e+M*i,Xr.spring,co],[e+M*i,Xr.spring,a],[M,0,0],it.DARKWOOD,[[0,0],[1,0],[1,1],[0,1]]),t.quad([e+M*s,0,a],[e+M*s,Xr.spring,a],[e+M*s,Xr.spring,r],[e+M*s,0,r],[-M,0,0],it.DARKWOOD,[[0,0],[1,0],[1,1],[0,1]]),t.box(e+M*(s+n/2)-n/2-.04,0,a-.04,e+M*(s+n/2)+n/2+.04,.42,co,it.DARKWOOD);let f=40;for(let M=0;M<f;M++){let T=-s+2*s*M/f,I=-s+2*s*(M+1)/f;t.beam([e+T,Ea(T)+.03,a-.015],[e+I,Ea(I)+.03,a-.015],.018,it.DARKWOOD)}for(let M of[-1,1])t.beam([e+M*(s+.03),.42,a-.015],[e+M*(s+.03),Xr.spring+.02,a-.015],.018,it.DARKWOOD);for(let M=-s;M<s-1e-6;M+=c){let T=M,I=Math.min(s,M+c),N=Ea(T),B=Ea(I);t.quad([e+I,0,r],[e+T,0,r],[e+T,N,r],[e+I,B,r],[0,0,-1],it.REDDOOR,[[I,0],[T,0],[T,N],[I,B]])}let l=s-.2,p=.3,d=2.12,v=r-.006,u=.05,h=(M,T,I,N)=>t.box(e+M,T,v-.018,e+I,N,v,it.REDDOOR);h(-l,p,l,p+u),h(-l,d-u,l,d),h(-l,p,-l+u,d),h(l-u,p,l,d),t.box(e-l+.14,p+.14,v-.022,e+l-.14,d-.14,v,it.REDDOOR);let m=2.36;h(-s+.08,d+.06,s-.08,d+.12);for(let M of[-1,1]){let I=s-.17;for(let N=.07;N<I-1e-6;N+=c){let B=N,D=Math.min(I,N+c),K=Ea(B,-.18),q=Ea(D,-.18);if(K<=m+.02&&q<=m+.02)continue;let X=Ft=>e+M*Ft,pt=[[X(B),m,v+.004],[X(D),m,v+.004],[X(D),Math.max(m,q),v+.004],[X(B),Math.max(m,K),v+.004]];M>0?t.quad(pt[1],pt[0],pt[3],pt[2],[0,0,-1],it.REDPANEL,[[D,0],[B,0],[B,1],[D,1]]):t.quad(...pt,[0,0,-1],it.REDPANEL,[[B,0],[D,0],[D,1],[B,1]])}}t.beam([e,m-.02,v-.008],[e,Ea(0,-.12),v-.008],.03,it.REDDOOR),t.beam([e-s+.1,m-.01,v-.006],[e+s-.1,m-.01,v-.006],.014,it.REDDOOR);let g=e-s+.15,b=1.06,y=v-.03;t.box(g-.034,b-.2,y-.008,g+.034,b+.17,y+.012,it.BRASS);for(let[M,T]of[[b+.2,.026],[b+.235,.016],[b-.23,.026],[b-.265,.016]])t.lathe(g,y-.002,[[0,M-T],[T,M-T*.4],[T,M+T*.4],[0,M+T]],it.BRASS,12);for(let M=0;M<6;M++){let T=b-.17+M*.065;for(let I of[-1,1])t.beam([g+I*.034,T,y-.01],[g+I*.041,T+.03,y-.01],.006,it.BRASS)}let w=y-.008,_=(M,T,I)=>{for(let N=0;N<I;N++){let B=Xo*N/I,D=Xo*(N+1)/I;for(let K=0;K<16;K++){let q=2*Xo*K/16,X=2*Xo*(K+1)/16,pt=(ze,Se)=>[g+T*Math.sin(ze)*Math.cos(Se),b+.03+T*Math.sin(ze)*Math.sin(Se),M-T*Math.cos(ze)],Ft=(ze,Se)=>[Math.sin(ze)*Math.cos(Se),Math.sin(ze)*Math.sin(Se),-Math.cos(ze)],Lt=t.v(pt(B,q),Ft(B,q),it.BRASS),gt=t.v(pt(B,X),Ft(B,X),it.BRASS),ct=t.v(pt(D,X),Ft(D,X),it.BRASS),Wt=t.v(pt(D,q),Ft(D,q),it.BRASS);t.idx.push(Lt,gt,ct,Lt,ct,Wt)}}};t.beam([g,b+.03,w],[g,b+.03,w-.05],.011,it.BRASS),_(w-.075,.034,10),t.box(g-.008,b-.1,y-.0125,g+.008,b-.06,y-.0085,it.KEYHOLE)}function eM(t){let e=ml(77);for(let[o,n,r]of vl){let[a,s]=Bu(o);for(let i=0;i<2;i++){let c=null;for(let f=a;f<=s;f+=.18){let l=Hu(o,n,f),p=Math.sin(f*3.1+i*2+r)*.07,d=Math.cos(f*2.3+i+r)*.05,v=o==="ridge"?[l[0]+p,l[1]+d+.12,l[2]]:[l[0],l[1]+d+.12,l[2]+p];c&&(Gu(f,r)||e()<.5)&&t.beam(c,v,.012+.008*e(),it.WOOD),c=v}}}}function oM(t){let e=ml(4242),o=(r,a)=>!(r>ie.x0-ie.curb-.1&&r<ie.x1+ie.curb+.1&&a>ie.z0-ie.curb-.1&&a<ie.z1+ie.curb+.1)&&r>.2&&r<Ut-.2&&a>.3&&a<co-.4,n=(r,a,s,i)=>{let c=.022+e()*.022,f=e()*2*Xo,l=Math.cos(f),p=Math.sin(f),d=(u,h)=>[r+(u*l-h*p)*c,a+.004*u*h,s+(u*p+h*l)*c],v=i?2:0;t.quad(d(-1,-1),d(-1,1),d(1,1),d(1,-1),[0,1,0],it.BRACT,[[v,0],[v,1],[v+1,1],[v+1,0]])};for(let[r,a,s]of vl){let[i,c]=Bu(r);for(let f=i;f<=c;f+=.05){if(!Gu(f,s)||e()>.55)continue;let l=Hu(r,a,f),p=l[0]+(e()-.5)*1.8,d=l[2]+(e()-.5)*1.8;o(p,d)&&n(p,.004,d,e()<.18)}}for(let r=0;r<260;r++){let a=Math.floor(e()*4),s,i;a<2?(s=a?ie.x1+ie.curb+.12+e()*e()*.9:ie.x0-ie.curb-.12-e()*e()*.9,i=ie.z0+e()*(ie.z1-ie.z0)):(i=a===2?ie.z0-ie.curb-.12-e()*e()*.9:ie.z1+ie.curb+.12+e()*e()*.9,s=ie.x0+e()*(ie.x1-ie.x0)),o(s,i)&&n(s,.004,i,e()<.18)}for(let r=0;r<70;r++){let a=ie.x0+.08+e()*(ie.x1-ie.x0-.16),s=ie.z0+.08+e()*(ie.z1-ie.z0-.16);Math.hypot(a-Ir.x,s-Ir.z)<.6||n(a,.016,s,e()<.2)}}function nM(t,e,o){let n=(r,a,s,i,c)=>{let f=t.pos.length/3,l=Math.cos(s),p=Math.sin(s),d=Math.cos(i),v=Math.sin(i),u=[l,0,-p],h=[p*v,d,l*v],m=[u[1]*h[2]-u[2]*h[1],u[2]*h[0]-u[0]*h[2],u[0]*h[1]-u[1]*h[0]],g=c?.95:o()*.8;for(let[b,y]of[[0,0],[1,0],[1,1],[0,1]]){let w=(b-.5)*a,_=(y-.5)*a;t.pos.push(r[0]+u[0]*w+h[0]*_+yo[0],r[1]+u[1]*w+h[1]*_+yo[1],r[2]+u[2]*w+h[2]*_+yo[2]),t.nrm.push(...m),t.uv.push(b,y),t.shade.push(g),t.flower.push(1)}t.idx.push(f,f+1,f+2,f,f+2,f+3)};for(let[r,a,s]of vl){let[i,c]=Bu(r);for(let f=i;f<=c;f+=.1){if(!Gu(f,s))continue;let l=Hu(r,a,f),p=()=>(o()-.5)*.7,d=4+Math.floor(o()*4);for(let v=0;v<d;v++){let u=r==="ridge"?[l[0]+p(),l[1]-o()*.25,l[2]+p()*.4]:[l[0]+p()*.4,l[1]-o()*.25,l[2]+p()];n(u,.42+o()*.4,o()*2*Xo,(o()-.5)*2.4,o()<.16)}for(let v=0;v<5;v++){let u=o()*2*Xo;e([l[0]+p()*.6,l[1]-o()*.2,l[2]+p()*.6],[Math.cos(u),-.3-o()*.5,Math.sin(u)],[-Math.sin(u),0,Math.cos(u)],.08+o()*.06,.1)}if(o()<.22){let v=.5+o()*2,u=[l[0],l[1],l[2]],h=[(o()-.5)*.08,(o()-.5)*.08];for(let m=0;m<v;m+=.13){u=[u[0]+h[0],u[1]-.13,u[2]+h[1]];let g=(.3+o()*.22)*(1-.4*m/v);if(n([u[0]+(o()-.5)*.08,u[1],u[2]+(o()-.5)*.08],g,o()*2*Xo,(o()-.5)*.8,o()<.15),o()<.6){let b=o()*2*Xo;e([u[0],u[1],u[2]],[Math.cos(b),-.6,Math.sin(b)],[-Math.sin(b),0,Math.cos(b)],.05+o()*.04,.1)}}}}}}function rM(){let t=Og();{let e=ie.x0-ie.curb,o=ie.x1+ie.curb,n=ie.z0-ie.curb,r=ie.z1+ie.curb,a=[[0,0,Ut,n],[0,r,Ut,co],[0,n,e,r],[o,n,Ut,r]];for(let[s,i,c,f]of a)for(let p=s;p<c-1e-6;p+=1)for(let d=i;d<f-1e-6;d+=1){let v=p,u=Math.min(c,p+1),h=d,m=Math.min(f,d+1);t.quad([v,0,h],[v,0,m],[u,0,m],[u,0,h],[0,1,0],it.FLOOR,[[v,h],[v,m],[u,m],[u,h]])}}for(let e of[0,1]){let o=e?Ut:0,n=e?Ut+hr:-hr,r=e?[-1,0,0]:[1,0,0],a=.04;for(let h=0;h<co-1e-6;h+=a){let m=h,g=Math.min(co,h+a),b=(m+g)/2,y=null;if(!e)for(let _ of te.c)Qi(b-_)!==null&&(y=[te.sill,Math.min(Qi(m-_)||te.spring,Qi(g-_)||te.spring)]);let w=y?[[0,y[0]],[y[1],ho]]:[[0,ho]];for(let[_,M]of w)M<=_||(e?t.quad([o,_,g],[o,_,m],[o,M,m],[o,M,g],r,it.PLASTER,[[g,_],[m,_],[m,M],[g,M]]):t.quad([o,_,m],[o,_,g],[o,M,g],[o,M,m],r,it.PLASTER,[[m,_],[g,_],[g,M],[m,M]]))}if(!e)for(let h of te.c){for(let y of[-1,1]){let w=h+y*te.hw,_=[0,0,-y],M=[o,te.sill,w],T=[n,te.sill,w],I=[n,te.spring,w],N=[o,te.spring,w];y>0!=!!e?t.quad(M,T,I,N,_,it.PLASTER,[[0,te.sill],[hr,te.sill],[hr,te.spring],[0,te.spring]]):t.quad(N,I,T,M,_,it.PLASTER,[[0,te.spring],[hr,te.spring],[hr,te.sill],[0,te.sill]])}let m=28;for(let y=0;y<m;y++){let w=y/m*Xo,_=(y+1)/m*Xo,M=h+Math.cos(w)*te.hw,T=h+Math.cos(_)*te.hw,I=te.spring+Math.sin(w)*te.hw,N=te.spring+Math.sin(_)*te.hw,B=[0,-Math.sin((w+_)/2),-Math.cos((w+_)/2)];e?t.quad([o,I,M],[n,I,M],[n,N,T],[o,N,T],B,it.PLASTER,[[0,w],[hr,w],[hr,_],[0,_]]):t.quad([o,N,T],[n,N,T],[n,I,M],[o,I,M],B,it.PLASTER,[[0,_],[hr,_],[hr,w],[0,w]])}let g=e?Ut-.08:-hr,b=e?Ut+hr:.08;t.box(g,te.sill-.09,h-te.hw-.12,b,te.sill,h+te.hw+.12,it.STONE)}let s=e?Ut:0,i=e?-1:1,c=[.6,...te.c.slice(1).map((h,m)=>(h+te.c[m])/2),co-.6];for(let h of c){let m=Math.min(s,s+i*.14),g=Math.max(s,s+i*.14);t.box(m,0,h-.34,g,ho-.7,h+.34,it.STONE,{bottom:!0});let b=Math.min(s,s+i*.24),y=Math.max(s,s+i*.24);t.box(b,0,h-.44,y,.55,h+.44,it.STONE,{bottom:!0}),t.box(b,ho-.95,h-.46,y,ho-.7,h+.46,it.STONE)}let f=Math.min(s,s+i*.05),l=Math.max(s,s+i*.05);t.box(f,0,0,l,.22,co,it.STONE,{bottom:!0});let p=Math.min(s,s+i*.32),d=Math.max(s,s+i*.32);t.box(p,ho-.55,0,d,ho-.3,co,it.STONE);let v=Math.min(s,s+i*.42),u=Math.max(s,s+i*.42);t.box(v,ho-.3,0,u,ho-.12,co,it.STONE)}for(let[e,o]of[[0,1],[co,-1]]){for(let c=0;c<32;c++){let f=c/32*Ut,l=(c+1)/32*Ut,p=v=>v<Ut/2?ho+ia*v:ho+ia*(Ut-v),d=o>0?[[l,0],[f,0],[f,p(f)],[l,p(l)]]:[[f,0],[l,0],[l,p(l)],[f,p(f)]];t.quad(...d.map(([v,u])=>[v,u,e]),[0,0,o],it.PLASTER,d.map(([v,u])=>[v,u]))}let r=o>0?0:co-.05,a=o>0?.05:co;t.box(0,0,r,Ut,.22,a,it.STONE,{bottom:!0});let s=o>0?0:co-.32,i=o>0?.32:co;t.box(0,ho-.55,s,Ut,ho-.3,i,it.STONE)}{let o=Ut/2-1.1,n=Ut/2+1.1,r=3.9;t.box(o-.3,0,0,o,r+.3,.12,it.STONE),t.box(n,0,0,n+.3,r+.3,.12,it.STONE),t.box(o-.3,r,0,n+.3,r+.4,.14,it.STONE);for(let[a,s]of[[o,Ut/2-.01],[Ut/2+.01,n]])t.box(a,0,.02,s,r,.02+.06,it.WOOD),t.box(a+.12,.3,.02+.06,s-.12,1.7,.02+.09,it.WOOD),t.box(a+.12,2,.02+.06,s-.12,r-.2,.02+.09,it.WOOD)}tM(t);{let{x0:e,x1:o,z0:n,z1:r,curb:a,top:s}=ie,i=.06,c=.08;t.box(e-a,0,n-a,e,s-c,r+a,it.WMARBLE,{bottom:!0}),t.box(o,0,n-a,o+a,s-c,r+a,it.WMARBLE,{bottom:!0}),t.box(e,0,n-a,o,s-c,n,it.WMARBLE,{bottom:!0}),t.box(e,0,r,o,s-c,r+a,it.WMARBLE,{bottom:!0}),t.box(e-a-i,s-c,n-a-i,e+i*.5,s,r+a+i,it.WMARBLE),t.box(o-i*.5,s-c,n-a-i,o+a+i,s,r+a+i,it.WMARBLE),t.box(e+i*.5,s-c,n-a-i,o-i*.5,s,n+i*.5,it.WMARBLE),t.box(e+i*.5,s-c,r-i*.5,o-i*.5,s,r+a+i,it.WMARBLE);let f=.5;for(let v=e;v<o-1e-6;v+=f)for(let u=n;u<r-1e-6;u+=f){let h=v,m=Math.min(o,v+f),g=u,b=Math.min(r,u+f);t.quad([h,0,g],[h,0,b],[m,0,b],[m,0,g],[0,1,0],it.WATER,[[h,g],[h,b],[m,b],[m,g]])}let{x:l,z:p,plinth:d}=Ir;t.box(l-.42,0,p-.42,l+.42,d-.12,p+.42,it.WMARBLE,{bottom:!0}),t.box(l-.5,d-.12,p-.5,l+.5,d,p+.5,it.WMARBLE),t.box(l-.48,0,p-.48,l+.48,.12,p+.48,it.WMARBLE,{bottom:!0})}return t}function aM(t){for(let o of[0]){let n=o?Ut+hr*.5:-hr*.5,r=.05,a=Pr.w*.5;for(let s of te.c){for(let i of Pr.cols){let c=Qi(i)-.01;t.box(n-r,te.sill,s+i-a,n+r,c,s+i+a,it.STEEL)}for(let i=te.sill+Pr.rowH;i<te.spring+.01;i+=Pr.rowH)t.box(n-r,i-a,s-te.hw,n+r,i+a,s+te.hw,it.STEEL);for(let[i,c]of[[te.hw-.03,.06],[Pr.ring,a]])for(let l=0;l<24;l++){let p=l/24*Xo,d=(l+1)/24*Xo;t.beam([n,te.spring+Math.sin(p)*i,s+Math.cos(p)*i],[n,te.spring+Math.sin(d)*i,s+Math.cos(d)*i],c,it.STEEL,[1,0,0])}for(let i of[-1,1])t.box(n-r,te.sill,s+i*(te.hw-.03)-.03,n+r,te.spring,s+i*(te.hw-.03)+.03,it.STEEL);t.box(n-r,te.sill,s-te.hw,n+r,te.sill+.06,s+te.hw,it.STEEL)}}let e=o=>o<Ut/2?ho+ia*o:ho+ia*(Ut-o);for(let o=0;o<=12;o++){let n=o*Ho.rafter;for(let[r,a]of[[-.3,Ut/2],[Ut/2,Ut+.3]])t.beam([r,e(Math.max(0,Math.min(Ut,r)))-.1,n],[a,e(a)-.1,n],.06,it.STEEL)}for(let o=Ho.purlin;o<Ut/2-.2;o+=Ho.purlin)for(let n of[o,Ut-o])t.beam([n,e(n)-.06,-.2],[n,e(n)-.06,co+.2],.035,it.STEEL);t.beam([Ut/2,sa-.14,-.2],[Ut/2,sa-.14,co+.2],.12,it.STEEL);for(let o of[.05,Ut-.05])t.beam([o,ho-.05,0],[o,ho-.05,co],.1,it.STEEL);for(let o of pl){t.box(-.05,ho-.13,o-.08,Ut+.05,ho+.13,o+.08,it.STEEL),t.beam([Ut/2,ho,o],[Ut/2,sa-.2,o],.07,it.STEEL);for(let n of[-1,1])t.beam([Ut/2+n*Ut/4,ho,o],[Ut/2,sa-.4,o],.055,it.STEEL),t.beam([Ut/2+n*Ut/4,ho,o],[Ut/2+n*Ut/4,e(Ut/2+n*Ut/4)-.2,o],.045,it.STEEL),t.beam([Ut/2+n*(Ut/2-.1),ho,o],[Ut/2+n*Ut/4,e(Ut/2+n*Ut/4)-.2,o],.045,it.STEEL);for(let n of[-1,1])t.box(Ut/2+n*Ut/4-.12,ho-.18,o-.1,Ut/2+n*Ut/4+.12,ho+.18,o+.1,it.STEEL)}}function sM(t){let e=ml(311),o=[],n=[[ie.x0+.9,6.6,.9,10],[ie.x1-.8,8.4,.85,9],[ie.x0+.8,10.6,.8,8],[ie.x1-.9,12.4,.9,10],[ie.x0+1,13.9,.65,6],[Ut/2+.2,9.6,.5,4],[ie.x1-.7,15.9,.55,5]];for(let[a,s,i,c]of n)for(let f=0;f<c;f++)for(let l=0;l<40;l++){let p=e()*2*Xo,d=i*Math.sqrt(e()),v=a+Math.cos(p)*d,u=s+Math.sin(p)*d,h=.15+e()*.17;if(!(v-h<ie.x0+.04||v+h>ie.x1-.04||u-h<ie.z0+.04||u+h>ie.z1-.04)&&!(Math.hypot(v-Ir.x,u-Ir.z)<.62+h)&&!o.some(m=>Math.hypot(m[0]-v,m[1]-u)<(m[2]+h)*.93)){o.push([v,u,h,e()*2*Xo,e()]);break}}for(let[a,s,i,c,f]of o){let p=.34+f*.1,d=t.v([a,.012,s],[0,1,0],it.PAD,[.5,f]),v=null;for(let u=0;u<=30;u++){let h=c+p/2+(2*Xo-p)*u/30,m=i*(1+.03*Math.sin(h*7+f*10)),g=t.v([a+Math.cos(h)*m,.012+.008*Math.sin(h*3+f*9),s+Math.sin(h)*m],[0,1,0],it.PAD,[1,f]);v!==null&&t.idx.push(d,v,g),v=g}v=null;for(let u=0;u<=30;u++){let h=c+p/2+(2*Xo-p)*u/30,m=i*(1+.03*Math.sin(h*7+f*10)),g=[a+Math.cos(h)*m,.012,s+Math.sin(h)*m],b=[a+Math.cos(h)*(m+.012),.03,s+Math.sin(h)*(m+.012)],y=t.v(g,[Math.cos(h),.4,Math.sin(h)],it.PAD,[1.2,f]),w=t.v(b,[Math.cos(h),.4,Math.sin(h)],it.PAD,[1.2,f]);v&&t.idx.push(v[0],y,w,v[0],w,v[1]),v=[y,w]}}let r=[[ie.x0+.75,6.9,1],[ie.x1-.65,8.1,.85],[ie.x1-.95,12.6,1.1],[ie.x0+.95,10.3,.8],[ie.x1-.55,15.6,.9],[ie.x0+1.15,13.7,.75]];for(let[a,s,i]of r)[[12,1,70],[10,.86,48],[8,.66,26]].forEach(([l,p,d],v)=>{for(let u=0;u<l;u++){let h=2*Xo*u/l+v*.33,m=(90-(90-d)*i)*Xo/180,g=6,b=4,y=[];for(let w=0;w<=g;w++){let _=w/g,M=Math.sin(Xo*Math.pow(_,.8))*.42*p*.17,T=[];for(let I=0;I<=b;I++){let N=I/b*2-1,B=N*M,D=Math.abs(N)*Math.abs(N)*.12*p*.17,K=_*p*.17,q=K*Math.cos(m),X=K*Math.sin(m)+D,pt=a+Math.cos(h)*q-Math.sin(h)*B,Ft=s+Math.sin(h)*q+Math.cos(h)*B;T.push(t.v([pt,.03+X,Ft],[-Math.cos(h)*Math.sin(m)*.6,.8,-Math.sin(h)*Math.sin(m)*.6],it.PETAL,[_,(N+1)/2]))}y.push(T)}for(let w=0;w<g;w++)for(let _=0;_<b;_++){let M=y[w][_],T=y[w][_+1],I=y[w+1][_+1],N=y[w+1][_];t.idx.push(M,T,I,M,I,N,M,I,T,M,N,I)}}}),t.lathe(a,s,[[0,.03+.05*.17*4],[.025,.03+.045*.17*4],[.032,.035],[0,.03]],it.STAMEN,12)}function iM(t){let e=ml(907);{t.box(1.25-.48,.86-.06,11.1-1.35,1.25+.48,.86,11.1+1.35,it.WOOD);for(let i of[-1,1])for(let c of[-1,1])t.box(1.25+i*(.48-.08)-.04,0,11.1+c*(1.35-.1)-.04,1.25+i*(.48-.08)+.04,.86-.06,11.1+c*(1.35-.1)+.04,it.WOOD);t.box(1.25-.48+.06,.16,11.1-1.35+.1,1.25+.48-.06,.19,11.1+1.35-.1,it.WOOD);for(let i=0;i<11;i++){let c=1.25+(e()-.5)*.6,f=11.1+(e()-.5)*2.2,l=.035+e()*.04,p=.09+e()*.14;if(t.lathe(c,f,[[0,.86],[l,.86],[l*1.02,.86+p*.9],[l*.9,.86+p],[0,.86+p]],i%3?it.JAR:it.POT,14),i%3===0)for(let d=0;d<7;d++){let v=e()*2*Xo,u=.28+e()*.12,h=.12+e()*.2;t.beam([c,.86+.03,f],[c+Math.cos(v)*h*u,.86+.03+u,f+Math.sin(v)*h*u],.0055,it.BRUSH)}}t.box(1.25-.3,.86,11.1+.7,1.25+.15,.86+.02,11.1+1.15,it.WOOD)}for(let o=0;o<5;o++){let n=.55+e()*.6,r=.75+e()*.8,a=19.3+o*.16,s=.25+o*.07,i=.17,c=[s+r*Math.sin(i)*0,r,a];t.quad([s+.18,0,a-n/2],[s+.18,0,a+n/2],[s+.18-r*Math.sin(i),r*Math.cos(i),a+n/2],[s+.18-r*Math.sin(i),r*Math.cos(i),a-n/2],[Math.cos(i),Math.sin(i),0],o%2?it.WOOD:it.GESSO,[[0,0],[1,0],[1,1],[0,1]])}for(let o of Pg)t.beam([o[0],ho,o[2]],[o[0],o[1]+.05,o[2]],.008,it.STEEL),t.lathe(o[0],o[2],[[.04,o[1]+.06],[.06,o[1]+.02],[.16,o[1]-.09],[.29,o[1]-.22],[.33,o[1]-.28],[.32,o[1]-.285]],it.SHADE,32),t.lathe(o[0],o[2],[[0,o[1]-.25],[.06,o[1]-.2],[0,o[1]-.12]],it.BULB,12)}var Pg=[[4.2,4.6,7.33],[11.8,4.6,7.33],[4.2,4.6,16.5],[11.8,4.6,16.5]],$A=[[ie.x0-1,ie.z0-1,1],[ie.x1+1,ie.z0-1,.95],[ie.x0-1,ie.z1+1,1.15],[ie.x1+1,ie.z1+1,1.1],[.9,1.3,1.25],[Ut-.9,co-1.2,1.3]],zg=[[0,0,.16,.5],[.16,0,.34,.4],[.35,0,.5,.36],[.5,0,.66,.38],[.68,0,.84,.42],[0,.6,.19,1],[.2,.57,.36,1],[.41,.6,.58,1]];function cM(){let t={pos:[],nrm:[],uv:[],shade:[],flower:[],idx:[]},e=ml(1213),o=(n,r,a,s,i)=>{let c=zg[Math.floor(e()*zg.length)],f=(c[2]-c[0])/(c[3]-c[1]),l=s*f*1,p=5,d=t.pos.length/3,v=.6+e()*.4;for(let u=0;u<=p;u++){let h=u/p,m=i*h*h*s,g=[n[0]+r[0]*h*s,n[1]+r[1]*h*s-m,n[2]+r[2]*h*s];for(let b of[-.5,.5]){t.pos.push(g[0]+a[0]*b*l+yo[0],g[1]+a[1]*b*l-Math.abs(b)*.08*l+yo[1],g[2]+a[2]*b*l+yo[2]);let y=[r[1]*a[2]-r[2]*a[1],r[2]*a[0]-r[0]*a[2],r[0]*a[1]-r[1]*a[0]],w=Math.hypot(...y)||1;t.nrm.push(y[0]/w,Math.abs(y[1]/w)+.2,y[2]/w),t.uv.push(b<0?c[0]:c[2],c[3]-(c[3]-c[1])*h),t.shade.push(v),t.flower.push(0)}}for(let u=0;u<p;u++){let h=d+u*2;t.idx.push(h,h+1,h+3,h,h+3,h+2)}};nM(t,o,e);for(let[n,r,a]of[[ie.x0-.3,ie.z0-.3,-1],[ie.x1+.3,ie.z1+.3,1],[ie.x0-.3,ie.z1+.2,-1]])for(let s=0;s<26;s++){let i=e()*2*Xo,c=n+(e()-.3)*.5*-a,f=r+(e()-.5)*.8,l=ie.top+.01-Math.max(0,Math.abs(c-n)-.1)*.6*e();o([c,Math.max(.05,l),f],[Math.cos(i),-.15,Math.sin(i)],[-Math.sin(i),0,Math.cos(i)],.08+e()*.05,.12)}return t}function lM(){let t=Og();for(let o of[0]){let n=o?Ut+hr*.5+.01:-hr*.5-.01,r=o?[-1,0,0]:[1,0,0];for(let a of te.c)for(let i=a-te.hw;i<a+te.hw-1e-6;i+=.05){let c=i,f=Math.min(a+te.hw,i+.05),l=Qi(c-a+1e-4)||te.spring,p=Qi(f-a-1e-4)||te.spring;o?t.quad([n,te.sill,f],[n,te.sill,c],[n,l,c],[n,p,f],r,0,[[f,te.sill],[c,te.sill],[c,l],[f,p]]):t.quad([n,te.sill,c],[n,te.sill,f],[n,p,f],[n,l,c],r,0,[[c,te.sill],[f,te.sill],[f,p],[c,l]])}}let e=Math.hypot(ia,1);return t.quad([0,ho+.002,co],[0,ho+.002,0],[Ut/2,sa+.002,0],[Ut/2,sa+.002,co],[ia/e,-1/e,0].map(o=>-o).map((o,n)=>n===1?-Math.abs(o):o),1,[[0,co],[0,0],[Ut/2,0],[Ut/2,co]]),t.quad([Ut,ho+.002,0],[Ut,ho+.002,co],[Ut/2,sa+.002,co],[Ut/2,sa+.002,0],[-ia/e,-1/e,0],1,[[Ut,0],[Ut,co],[Ut/2,co],[Ut/2,0]]),t}var fM=`
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
`,hM=Pg.map(t=>qu([t[0],t[1]-.22,t[2]])),ih=`
	${fM}
	${Cg()}

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
		vec3 p = pw - vec3(${zt(yo[0])}, ${zt(yo[1])}, ${zt(yo[2])});
		float vis = studioSun(pw + N * 0.03);
		sunVis = vis;
		vec3 sunC = mix(vec3(1.0, 0.88, 0.70) * 3.9, vec3(0.50, 0.64, 1.0) * 1.35, night);
		float lam = max(dot(N, STUDIO_SUN), 0.0);
		vec3 col = sunC * vis * lam;
		vec3 Hh = normalize(STUDIO_SUN + V);
		spec = sunC * vis * pow(max(dot(N, Hh), 0.0), mix(16.0, 400.0, gloss)) * mix(0.04, 1.0, gloss) * (lam > 0.0 ? 1.0 : 0.0);

		// skylight: the roof is glass, the walls are full of windows
		float upF = 0.5 + 0.5 * N.y;
		float hgt = clamp(p.y / ${zt(ho)}, 0.0, 1.0);
		// corners and the foot of the walls get less of the sky
		float dw = min(min(p.x, ${zt(Ut)} - p.x), min(p.z, ${zt(co)} - p.z));
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
			${hM.map(t=>`
			{
				vec3 d = vec3(${zt(t[0])}, ${zt(t[1])}, ${zt(t[2])}) - pw;
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
`;function uM(t){let e=new DataView(t),o=e.getUint32(4,!0),n=e.getUint32(8,!0),r=[],a=[];for(let l=0;l<3;l++)r.push(e.getFloat32(12+l*4,!0)),a.push(e.getFloat32(24+l*4,!0));let s=36,i=new Uint16Array(t,s,o*3);s+=o*6;let c=new Uint16Array(t,s,n);s+=n*2;let f=new Int8Array(t,s,o*3);return{nV:o,nI:n,mn:r,sz:a,pos:i,idx:c,nrm:f}}function dM(t,e){let o=t.texture({data:[[[0,0,0,0]]],min:"linear",mag:"linear"}),n={tex:o,ready:!1};return fetch(e).then(r=>{if(!r.ok)throw new Error("Could not load "+e);return r.blob()}).then(r=>createImageBitmap(r,{premultiplyAlpha:"none"}).catch(()=>new Promise((a,s)=>{let i=new Image;i.onload=()=>a(i),i.onerror=s,i.src=URL.createObjectURL(r)}))).then(r=>{o({data:r,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear"}),n.ready=!0}).catch(r=>console.error(r)),n}var Rg=`
	precision highp float;
	uniform mat4 proj, view;
	uniform float yScale;
	attribute vec3 position, normal;
	attribute float kind;
	attribute vec2 uv;
	varying vec3 v_pos, v_nrm, v_eye;
	varying float v_kind;
	varying vec2 v_uv;
	void main() {
		v_pos = position; v_nrm = normal; v_kind = kind; v_uv = uv;
		vec3 t = view[3].xyz;
		v_eye = -vec3(dot(view[0].xyz, t), dot(view[1].xyz, t), dot(view[2].xyz, t));
		v_eye.y *= yScale;
		vec3 p = position; p.y *= yScale;
		gl_Position = proj * view * vec4(p, 1.0);
	}`,pM=`
	precision highp float;
	uniform float night, time, yScale, mirrorOn;
	varying vec3 v_pos, v_nrm, v_eye;
	varying float v_kind;
	varying vec2 v_uv;
	${ih}

	bool is(float k) { return abs(v_kind - k) < 0.5; }

	void main() {
		vec3 pw = v_pos;
		vec3 p = pw - vec3(${zt(yo[0])}, ${zt(yo[1])}, ${zt(yo[2])});
		vec3 V = normalize(v_eye - pw);
		vec3 N = normalize(v_nrm);
		if (dot(N, V) < 0.0 && !is(${it.PETAL}.0)) N = -N;
		if (is(${it.PETAL}.0) && dot(N, V) < 0.0) N = -N;

		// in the reflection under the floor, the floor and the water are not drawn
		bool floorish = is(${it.FLOOR}.0) || is(${it.WATER}.0);
		if (yScale < 0.0 && floorish) discard;

		// fallen bracts: little papery hearts, pink or white
		if (is(${it.BRACT}.0)) {
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

		if (is(${it.PLASTER}.0) || is(${it.NICHE}.0)) {
			// old lime plaster: warm, patchy, with a soft trowelled bloom
			float big = fbm3(p * vec3(0.35, 0.45, 0.35));
			float mid = fbm3(p * 1.6 + 3.0);
			float fine = vnoise3(p * 14.0);
			vec3 a = vec3(0.70, 0.60, 0.47), b = vec3(0.84, 0.76, 0.63);
			base = mix(a, b, smoothstep(0.3, 0.7, big));
			base *= 0.86 + 0.22 * mid + 0.05 * fine;
			// damp stains low down, soot high up
			base *= mix(0.86, 1.0, smoothstep(0.0, 1.4, p.y + 0.6 * mid));
			base *= mix(1.0, 0.9, smoothstep(${zt(ho-2)}, ${zt(ho)}, p.y));
			// where the plaster has come away, old brick shows through
			float bare = smoothstep(0.70, 0.74, fbm3(p * vec3(0.5, 0.8, 0.5) + 11.0)) * smoothstep(0.4, 1.6, p.y) * 0.85;
			vec2 bk = (abs(N.x) > 0.5 ? p.zy : p.xy) * vec2(1.0 / 0.23, 1.0 / 0.075);
			bk.x += floor(bk.y) * 0.5;
			float mortar = max(smoothstep(0.9, 0.97, fract(bk.x)), smoothstep(0.82, 0.92, fract(bk.y)));
			vec3 brick = mix(vec3(0.55, 0.30, 0.20), vec3(0.42, 0.25, 0.18), vnoise3(vec3(floor(bk), 0.0) * 0.7)) * (0.85 + 0.3 * hash13(vec3(floor(bk), 1.0)));
			brick = mix(brick, vec3(0.62, 0.58, 0.52), mortar);
			base = mix(base, brick, bare);
			if (is(${it.NICHE}.0)) base *= 0.55;
			gloss = 0.04;
		} else if (is(${it.STONE}.0)) {
			float n = fbm3(p * vec3(1.2, 2.5, 1.2));
			base = mix(vec3(0.72, 0.66, 0.56), vec3(0.84, 0.79, 0.70), n) * (0.92 + 0.12 * vnoise3(p * 20.0));
			gloss = 0.12;
		} else if (is(${it.TRAVERTINE}.0)) {
			// travertine: bands, little holes, a warm cream
			float band = fbm3(vec3(p.x * 0.4, p.y * 9.0 + fbm3(p * 1.5) * 2.0, p.z * 0.4));
			base = mix(vec3(0.73, 0.65, 0.53), vec3(0.88, 0.82, 0.72), band);
			float pit = smoothstep(0.84, 0.9, vnoise3(p * 55.0));
			base *= 1.0 - pit * 0.18;
			// wet and darker just above the water
			base *= mix(0.78, 1.0, smoothstep(0.0, 0.12, p.y));
			gloss = 0.18;
		} else if (is(${it.STEEL}.0)) {
			base = vec3(0.035, 0.036, 0.038) * (0.8 + 0.4 * vnoise3(p * 3.0));
			gloss = 0.45;
		} else if (is(${it.FLOOR}.0)) {
			// the gallery's own floor: polished chequered marble, black and
			// dark cream, laid on the diagonal, with fine veins and hair-line
			// grout, the polish duller where people walk
			vec2 tq = mat2(0.70711, 0.70711, -0.70711, 0.70711) * (p.xz - vec2(${zt(Ut/2)}, 0.0));
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
			aoK = mix(0.62, 1.0, smoothstep(0.0, 0.9, min(min(p.x, ${zt(Ut)} - p.x), min(p.z, ${zt(co)} - p.z))));
			// the curb throws a soft shadow round the pool
			vec2 dq = max(vec2(${zt(ie.x0-ie.curb)} - p.x, p.x - ${zt(ie.x1+ie.curb)}), vec2(${zt(ie.z0-ie.curb)} - p.z, p.z - ${zt(ie.z1+ie.curb)}));
			float dpool = max(max(dq.x, dq.y), 0.0);
			aoK *= mix(0.7, 1.0, smoothstep(0.0, 0.4, dpool));
		} else if (is(${it.WMARBLE}.0)) {
			// white statuary marble, polished: a soft grey cloud and fine veins
			float cl = fbm3(p * 1.4 + 2.0);
			float v1 = abs(sin(p.x * 3.1 + p.z * 1.7 + p.y * 5.0 + cl * 7.0));
			float vein = (1.0 - smoothstep(0.0, 0.05, v1)) * 0.7 + (1.0 - smoothstep(0.0, 0.02, abs(sin(p.z * 6.3 - p.x * 2.2 + cl * 11.0)))) * 0.3;
			base = mix(vec3(0.68, 0.68, 0.66), vec3(0.76, 0.76, 0.74), cl);
			base = mix(base, vec3(0.50, 0.51, 0.52), vein * 0.45);
			base *= mix(0.8, 1.0, smoothstep(0.0, 0.1, p.y));
			gloss = 0.88;
		} else if (is(${it.REDDOOR}.0) || is(${it.REDPANEL}.0)) {
			// deep crimson paint over wood: a soft sheen, the grain just showing
			float grain = vnoise3(vec3(p.x * 40.0, p.y * 2.0, p.z * 40.0));
			base = vec3(0.30, 0.022, 0.026) * (0.88 + 0.2 * grain);
			if (is(${it.REDPANEL}.0)) base *= 0.55;
			gloss = 0.62;
		} else if (is(${it.DARKWOOD}.0)) {
			float grain = vnoise3(vec3(p.x * 3.0, p.y * 45.0, p.z * 3.0));
			base = mix(vec3(0.030, 0.019, 0.014), vec3(0.062, 0.040, 0.028), grain);
			gloss = 0.35;
		} else if (is(${it.BRASS}.0)) {
			base = vec3(0.60, 0.44, 0.17) * (0.85 + 0.25 * vnoise3(p * 90.0));
			gloss = 0.78;
		} else if (is(${it.KEYHOLE}.0)) {
			base = vec3(0.004);
		} else if (is(${it.BRACT}.0)) {
			float white = step(1.5, v_uv.x);
			base = mix(vec3(0.62, 0.03, 0.22), vec3(0.86, 0.80, 0.80), white) * (0.8 + 0.3 * hash13(floor(p * 30.0)));
			sss = 0.5;
		} else if (is(${it.WATER}.0)) {
			base = vec3(0.012, 0.018, 0.014);
			gloss = 1.0;
		} else if (is(${it.PAD}.0)) {
			float sh = v_uv.y;
			vec2 q = (p.xz) * 9.0;
			float veins = smoothstep(0.85, 1.0, abs(sin(atan(q.y, q.x) * 9.0)));
			base = mix(vec3(0.10, 0.20, 0.05), vec3(0.28, 0.36, 0.10), sh) * (0.85 + 0.25 * vnoise3(vec3(p.xz * 18.0, sh)));
			base = mix(base, vec3(0.45, 0.22, 0.10), smoothstep(1.1, 1.2, v_uv.x) * 0.7);
			base *= 1.0 - veins * 0.12;
			gloss = 0.55;
		} else if (is(${it.PETAL}.0)) {
			base = mix(vec3(0.98, 0.90, 0.92), vec3(0.86, 0.36, 0.62), smoothstep(0.2, 1.0, v_uv.x));
			sss = 0.6;
			gloss = 0.25;
		} else if (is(${it.STAMEN}.0)) {
			base = vec3(0.95, 0.66, 0.12);
			gloss = 0.2;
		} else if (is(${it.MARBLE}.0)) {
			// warm white marble with faint grey veins
			float v = fbm3(p * 2.2);
			float vein = 1.0 - smoothstep(0.0, 0.035, abs(sin((p.y * 3.0 + p.x * 2.0 + v * 6.0))) - 0.0) ;
			base = mix(vec3(0.86, 0.83, 0.77), vec3(0.93, 0.91, 0.86), v) * (1.0 - 0.06 * vein);
			// a little grime in the folds, darker at the foot
			base *= mix(0.84, 1.0, smoothstep(${zt(Ir.plinth)}, ${zt(Ir.plinth+.5)}, p.y));
			sss = 0.18;
			gloss = 0.32;
		} else if (is(${it.WOOD}.0)) {
			float g = vnoise3(vec3(p.x * 2.0, p.y * 30.0, p.z * 2.0));
			base = mix(vec3(0.26, 0.15, 0.08), vec3(0.42, 0.27, 0.15), g) * (0.85 + 0.2 * vnoise3(p * 5.0));
			gloss = 0.2;
		} else if (is(${it.GESSO}.0)) {
			base = vec3(0.86, 0.83, 0.76) * (0.95 + 0.08 * vnoise3(p * 30.0));
		} else if (is(${it.PAINT}.0)) {
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
		} else if (is(${it.POT}.0)) {
			base = vec3(0.025, 0.025, 0.028);
			gloss = 0.85;
		} else if (is(${it.SOIL}.0)) {
			base = vec3(0.10, 0.07, 0.05) * (0.7 + 0.5 * vnoise3(p * 40.0));
		} else if (is(${it.SHADE}.0)) {
			base = vec3(0.03);
			gloss = 0.6;
		} else if (is(${it.BULB}.0)) {
			vec3 glow = mix(vec3(0.75, 0.70, 0.62) * 0.35, vec3(1.0, 0.75, 0.45) * 3.5, night);
			gl_FragColor = vec4(sqrt(glow), 1.0);
			return;
		} else if (is(${it.JAR}.0)) {
			base = mix(vec3(0.55, 0.42, 0.25), vec3(0.75, 0.70, 0.62), hash13(floor(p * 3.0)));
			gloss = 0.7;
		} else if (is(${it.BRUSH}.0)) {
			base = mix(vec3(0.42, 0.10, 0.06), vec3(0.75, 0.62, 0.38), step(${zt(.86+.24)}, p.y));
			gloss = 0.5;
		} else if (is(${it.CLOTH}.0)) {
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
		if (is(${it.POT}.0) || is(${it.STEEL}.0) || is(${it.SHADE}.0) || is(${it.JAR}.0)) {
			col += env * (0.04 + 0.6 * fres) * gloss * 1.2;
		}
		if (is(${it.BRASS}.0)) {
			col = base * light * 0.35 + spec * base * 2.5 + env * base * 1.6;
		}
		if (is(${it.REDDOOR}.0) || is(${it.REDPANEL}.0) || is(${it.WMARBLE}.0)) {
			col += env * (0.03 + 0.5 * fres) * gloss;
		}

		col = studioAir(col, pw, v_eye);

		float alpha = 1.0;
		if (is(${it.FLOOR}.0)) {
			// as polished as the gallery's: a clear reflection even looking
			// down, a mirror at grazing angles, more on the black tiles
			float cosV = clamp(V.y, 0.0, 1.0);
			float refl = 0.16 + 0.58 * pow(1.0 - cosV, 3.0);
			refl *= mix(0.72, 1.0, checker);
			refl *= gloss;
			alpha = 1.0 - refl * mirrorOn;
			alpha = mix(alpha, 1.0, clamp(sunVis * 0.4, 0.0, 0.45));
		}
		if (is(${it.WATER}.0)) {
			// still, dark water: almost a mirror, the sky's light on it, a
			// very slow breath of ripples
			float cosV = clamp(V.y, 0.0, 1.0);
			float rip = vnoise3(vec3(p.xz * 3.0, time * 0.15)) - 0.5;
			float F = 0.02 + 0.98 * pow(1.0 - cosV, 5.0);
			float refl = mix(0.72, 0.98, F) + rip * 0.03;
			col = base * light * 0.35 + spec * 1.6;
			col = studioAir(col, pw, v_eye);
			alpha = 1.0 - refl * mirrorOn;
			if (mirrorOn < 0.5) { col = mix(col, studioSky(R) * 0.35, F); alpha = 1.0; }
		}

		col = max(col, vec3(0.0));
		gl_FragColor = vec4(sqrt(col), alpha);
	}`;W0.exports=function(t){let e=rM();aM(e),sM(e),iM(e),eM(e),oM(e);let o={enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"zero"}},n=(u,h)=>t({vert:Rg,frag:pM,attributes:{position:u.pos,normal:u.nrm,kind:u.kind,uv:u.uv},elements:new Uint32Array(u.idx),count:h||u.idx.length,cull:{enable:!1},blend:o}),r=n(e),a=null;fetch(Ir.file).then(u=>{if(!u.ok)throw new Error("Could not load "+Ir.file);return u.arrayBuffer()}).then(u=>{let h=uM(u),m={pos:[],nrm:[],kind:[],uv:[],idx:[]},g=Ir.height,b=Math.cos(Ir.yaw),y=Math.sin(Ir.yaw);for(let w=0;w<h.nV;w++){let _=(h.mn[0]+h.pos[w*3]/65535*h.sz[0])*g,M=(h.mn[1]+h.pos[w*3+1]/65535*h.sz[1])*g,T=(h.mn[2]+h.pos[w*3+2]/65535*h.sz[2])*g;m.pos.push(Ir.x+b*_+y*T+yo[0],Ir.plinth+M+yo[1],Ir.z-y*_+b*T+yo[2]);let I=h.nrm[w*3]/127,N=h.nrm[w*3+1]/127,B=h.nrm[w*3+2]/127;m.nrm.push(b*I+y*B,N,-y*I+b*B),m.kind.push(it.MARBLE),m.uv.push(0,0)}for(let w=0;w<h.nI;w++)m.idx.push(h.idx[w]);a=n(m)}).catch(u=>console.error(u));let s=dM(t,"res/tree/leaves.webp"),i=cM(),c=t({vert:`
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
		}`,frag:`
		precision highp float;
		uniform float night, time;
		uniform sampler2D tex;
		varying vec3 v_pos, v_nrm, v_eye;
		varying vec2 v_uv;
		varying float v_shade, v_flower;
		${ih}
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
		}`,attributes:{position:i.pos,normal:i.nrm,uv:i.uv,shade:i.shade,flower:i.flower},elements:new Uint32Array(i.idx),uniforms:{tex:s.tex},cull:{enable:!1}}),f=lM(),l=t({vert:Rg,frag:`
		precision highp float;
		uniform float night, time;
		varying vec3 v_pos, v_nrm, v_eye;
		varying float v_kind;
		varying vec2 v_uv;
		${ih}
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			vec3 N = normalize(v_nrm);
			if (dot(N, V) < 0.0) N = -N;
			float F = 0.04 + 0.96 * pow(1.0 - max(dot(N, V), 0.0), 5.0);
			vec3 p = v_pos - vec3(${zt(yo[0])}, ${zt(yo[1])}, ${zt(yo[2])});
			float dust = fbm3(p * vec3(1.5, 3.0, 1.5)) * (v_kind > 0.5 ? 1.0 : 0.6);
			// streaks where old rain has run down the roof
			float streak = v_kind > 0.5 ? smoothstep(0.55, 0.9, vnoise3(vec3(p.z * 9.0, p.x * 0.6, 0.0))) * 0.5 : 0.0;
			vec3 c = mix(vec3(0.85, 0.80, 0.72), vec3(0.12, 0.13, 0.17), night) * (dust * 0.5 + streak);
			float a = clamp(0.05 + dust * 0.16 + streak * 0.2 + F * 0.4, 0.0, 0.6);
			vec3 col = mix(c, studioSky(reflect(-V, N)), F / max(a, 0.01) * 0.4);
			// the roof's leaded pattern: dark cames, frosted rondels lit
			// from behind by the sky
			if (v_kind > 0.5) {
				float ux = p.x < ${zt(Ut/2)} ? p.x : ${zt(Ut)} - p.x;
				vec2 pq = vec2(ux - ${zt(Ho.purlin)} * floor(ux / ${zt(Ho.purlin)}) - ${zt(Ho.purlin/2)}, p.z - ${zt(Ho.rafter)} * floor(p.z / ${zt(Ho.rafter)}) - ${zt(Ho.rafter/2)});
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
		}`,attributes:{position:f.pos,normal:f.nrm,kind:f.kind,uv:f.uv},elements:new Uint32Array(f.idx),cull:{enable:!1},depth:{mask:!1},blend:o}),p=(()=>{let u={pos:[],idx:[]},h=300,m=24,g=12;for(let b=0;b<=g;b++){let y=-.25*Xo+b/g*.75*Xo;for(let w=0;w<=m;w++){let _=w/m*2*Xo;u.pos.push(yo[0]+Ut/2+h*Math.cos(y)*Math.cos(_),h*Math.sin(y),yo[2]+co/2+h*Math.cos(y)*Math.sin(_))}}for(let b=0;b<g;b++)for(let y=0;y<m;y++){let w=b*(m+1)+y,_=w+1,M=w+m+2,T=w+m+1;u.idx.push(w,_,M,w,M,T)}return u})(),d=t({vert:`
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
		}`,frag:`
		precision highp float;
		uniform float night, time;
		varying vec3 v_pos, v_eye;
		${ih}
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
		void main() {`),attributes:{position:p.pos},elements:new Uint32Array(p.idx),cull:{enable:!1}});function v(u){d(),r(),a&&a(),c(),u&&u.reflected||l()}return v};var Ng=[{from:[12.6,1.65,.9],to:[11.4,1.75,2.6],at:[6.2,2.6,15.5],fov:60},{from:[8,1.45,1.4],to:[8,1.25,4.4],at:[8,1.7,16],fov:50},{from:[7.2,1.6,3.8],to:[8.3,1.55,5.2],at:[13,1.4,10.4],fov:52},{from:[6.2,1.45,10.4],to:[7,1.75,11.6],at:[8,2.3,15.2],fov:44},{from:[2.6,1.5,2.6],to:[3.6,1.6,4.4],at:[7,6.8,12],fov:62}],dl=11;function vM(t){let e=Ng.length,o=Math.floor(t/dl)%e,n=t%dl/dl,r=n*n*(3-2*n),a=Ng[o],s=a.from.map((c,f)=>c+(a.to[f]-c)*r),i=Math.max(0,1-Math.min(n*dl,(1-n)*dl)/.7);return{eye:qu(s),target:qu(a.at),fov:a.fov,roll:0,fade:i}}W0.exports.previewCam=vM;W0.exports.sunGLSL=Cg;W0.exports.O=yo;W0.exports.SIZE={W:Ut,L:co,H:ho,RIDGE:sa};W0.exports.BOX=[yo[0]-.8,0,yo[2]-.8,yo[0]+Ut+.8,sa+.5,yo[2]+co+.8];W0.exports.AIR_BOX=[yo[0],0,yo[2],yo[0]+Ut,sa,yo[2]+co]});var lh=mt((DA,Gg)=>{"use strict";var{A:ur}=_a(),{C:Cn}=vr(),{DOOR:Zi}=F0(),or=U0(),Ji=gl(),Fg=Cn.hallEnd+.35,Dg={arch:[13.6,0,ur.zc-ur.arch.r-.3,14.4,ur.arch.spring+ur.arch.r+.3,ur.zc+ur.arch.r+.3],mouth:[13.3,0,Cn.z0-.3,14.3,8.2,Cn.z1+.3],stair:[-.5,0,or.SURR.z0-.2,.5,or.SURR.top+.3,or.SURR.z1+.2],door:[Zi.x0-.4,0,-.5,Zi.x1+.4,Zi.top+.4,.5],windows:[15.6,.4,Cn.z1-.2,36.9,6.4,Cn.z1+.9],farDoor:[Cn.x1-.2,0,Cn.zc-Zi.r-.4,Cn.x1+.9,Zi.top+.4,Cn.zc+Zi.r+.4]},_0={court:[ur.x0-.4,0,ur.z0-.3,ur.x1+.3,ur.domeTop+.5,ur.z1+.3],stair:[or.C.x-or.R-2.6,0,or.C.z-or.R-1.5,.5,15.6,or.C.z+or.R+1.5],street:[-60,-1,-140,74,60,.6],garden:[10,-1,Cn.z1,46,60,Cn.z1+110],florence:[Cn.x1,-1,Cn.zc-30,Cn.x1+80,60,Cn.zc+30],studio:Ji.BOX},mM=[[0,0,0,14,0,Fg],[13.6,0,Cn.z0,Cn.x1+.4,0,Cn.z1],[ur.x0-.4,0,ur.z0,ur.x1,0,ur.z1],[or.C.x-or.R-2.6,0,or.C.z-or.R,.4,0,or.C.z+or.R],[Ji.BOX[0],0,Ji.BOX[2],Ji.BOX[3],0,Ji.BOX[5]]],gM={hall:{court:["arch"],stair:["stair"],street:["door"],garden:["mouth","windows"],florence:["mouth","farDoor"]},wing:{court:["mouth","arch"],stair:["mouth","stair"],street:["mouth","door"],garden:["windows"],florence:["farDoor"]},court:{stair:["arch","stair"],street:["arch","door"],garden:["arch","mouth","windows"],florence:["arch","mouth","farDoor"]},stair:{court:["stair","arch"],street:["stair","door"],garden:["stair","mouth","windows"],florence:["stair","mouth","farDoor"]}},yl=new Float64Array(24),Ga=[7,2,2],qg=0,M0="out",ch=!0;try{/[?&]nocull\b/.test(location.search)&&(ch=!1)}catch(t){}var xl={court:!0,stair:!0,street:!0,garden:!0,florence:!0,studio:!1},bl={court:!0,stair:!0,street:!0,garden:!0,florence:!0,studio:!1},Ig=!0;function xM(t){let e=i=>[t[i],t[4+i],t[8+i],t[12+i]],o=e(0),n=e(1),r=e(2),a=e(3),s=(i,c,f,l)=>{for(let p=0;p<4;p++)yl[i*4+p]=c[p]+f*l[p]};s(0,a,1,o),s(1,a,-1,o),s(2,a,1,n),s(3,a,-1,n),s(4,a,1,r),s(5,a,-1,r)}function V0(t,e){if(!ch)return!0;let o=e?-t[4]:t[1],n=e?-t[1]:t[4];for(let r=0;r<6;r++){let a=yl[r*4],s=yl[r*4+1],i=yl[r*4+2],c=yl[r*4+3],f=a>0?t[3]:t[0],l=s>0?n:o,p=i>0?t[5]:t[2];if(a*f+s*l+i*p+c<0)return!1}return!0}var Uu=(t,e)=>Ga[0]>t[0]-e&&Ga[0]<t[3]+e&&Ga[2]>t[2]-e&&Ga[2]<t[5]+e;function bM(t){if(Uu(t,.6))return null;let e=1/0,o=-1/0;for(let n=0;n<4;n++){let r=(n&1?t[3]:t[0])-Ga[0],a=(n&2?t[5]:t[2])-Ga[2],s=Math.atan2(r,a)-qg;s-=Math.round(s/(2*Math.PI))*2*Math.PI,e=Math.min(e,s),o=Math.max(o,s)}return o-e>Math.PI?null:[e,o]}function $g(t,e,o){let n=-Math.PI,r=Math.PI,a=s=>{let i=bM(s);return i?(n=Math.max(n,i[0]-.03),r=Math.min(r,i[1]+.03),n<=r):!0};for(let s of t){let i=Dg[s];if(!Uu(i,.6)&&(!V0(i,o)||!a(i)))return!1}return V0(e,o)&&a(e)}function yM(){let t=Ga[0],e=Ga[2],o=Ji.BOX;return t>o[0]&&t<o[3]&&e>o[2]&&e<o[5]?"studio":t<0&&e>or.C.z-or.R-1.5&&t>or.C.x-or.R-2.6?"stair":t>14.1&&e>ur.z0-.3&&e<ur.z1+.3&&t<ur.x1+.3?"court":t>13.9&&e>Cn.z0-.4&&e<Cn.z1+.1&&t<Cn.x1+.3?"wing":t>=0&&t<=14.1&&e>.3&&e<Fg?"hall":"out"}var wM={PORTAL:Dg,ROOM:_0,update(t,e,o){let n=new Array(16);for(let r=0;r<4;r++)for(let a=0;a<4;a++){let s=0;for(let i=0;i<4;i++)s+=e[i*4+a]*t[r*4+i];n[r*4+a]=s}xM(n),Ga[0]=o[0],Ga[1]=o[1],Ga[2]=o[2],qg=Math.atan2(-t[2],-t[10]),M0=yM();for(let r in _0){if(r==="studio"||M0==="studio"){xl[r]=bl[r]=r==="studio"&&M0==="studio";continue}if(!ch||M0==="out"||M0===r||Uu(_0[r],.3))xl[r]=V0(_0[r],!1)||M0===r,bl[r]=V0(_0[r],!0)||M0===r;else{let a=gM[M0][r];xl[r]=a?$g(a,_0[r],!1):V0(_0[r],!1),bl[r]=a?$g(a,_0[r],!0):V0(_0[r],!0)}}Ig=!ch||mM.some(r=>V0(r,!1))},get zone(){return M0},room(t,e){return e?bl[t]:xl[t]},box(t,e,o){return o&&!(e?bl[o]:xl[o])?!1:V0(t,e)},get floor(){return Ig}};Gg.exports=wM});var Bg=mt((qA,Hg)=>{"use strict";var _M=Tu(),MM=lh();function EM(t){let e=new DataView(t);if(String.fromCharCode(e.getUint8(0),e.getUint8(1),e.getUint8(2),e.getUint8(3))!=="STAT")throw new Error("Not a statue file");let n=e.getUint32(4,!0),r=e.getUint32(8,!0),a=[],s=[];for(let p=0;p<3;p++)a.push(e.getFloat32(12+p*4,!0)),s.push(e.getFloat32(24+p*4,!0));let i=36,c=new Uint16Array(t,i,n*3);i+=n*6;let f=new Uint16Array(t,i,r);i+=r*2;let l=new Int8Array(t,i,n*3);return{nV:n,nI:r,mn:a,sz:s,pos:c,idx:f,nrm:l}}Hg.exports=(t,e)=>{let o=[],n=[],r=[],a=[],s=null,i=e.statues.length,c=[],f=(p,d)=>{let v=o.length/3,u=d.height*.75,h=d.base!==void 0?d.base:e.pedestalTop;c.push({offset:a.length,count:p.nI,box:[d.x-u,h-.1,d.z-u,d.x+u,h+d.height+.2,d.z+u]});let m=d.height,g=Math.cos(d.yaw),b=Math.sin(d.yaw),y=d.base!==void 0?d.base:e.pedestalTop;for(let w=0;w<p.nV;w++){let _=(p.mn[0]+p.pos[w*3]/65535*p.sz[0])*m,M=(p.mn[1]+p.pos[w*3+1]/65535*p.sz[1])*m,T=(p.mn[2]+p.pos[w*3+2]/65535*p.sz[2])*m;o.push(d.x+g*_+b*T,y+M,d.z-b*_+g*T);let I=p.nrm[w*3]/127,N=p.nrm[w*3+1]/127,B=p.nrm[w*3+2]/127;n.push(g*I+b*B,N,-b*I+g*B),r.push(d.mat||1,0,0)}for(let w=0;w<p.nI;w++)a.push(v+p.idx[w])},l=()=>{a.length!==0&&(s=_M(t,{position:o,normal:n,mat:r,elements:a,lights:e.lights,get viewer(){return e.viewer}},!1,!0))};return e.statues.forEach(p=>{fetch("res/"+p.file).then(d=>{if(!d.ok)throw new Error("Could not load "+p.file);return d.arrayBuffer()}).then(d=>f(EM(d),p)).catch(d=>console.error(d)).then(()=>{--i===0&&l()})}),function(p){if(!s)return;let d=!!(p&&p.reflected),v=c.filter(u=>MM.box(u.box,d));v.length&&s(v)}}});var t3=mt((GA,Wu)=>{"use strict";var SM=Ts(),Bn=1.29032,Is=[9.2968,2,5.9],kM=[[.767398,.00185,-.10827],[.010515,.769952,.087681],[-.107774,.08829,-.762374]],fh=2147.64,Ug=725,jg=1288,Wg=1450,Vg=2576,Yr=-5.197,Fs=3.865,X0=10.135,Ds=-14.679,wl=-30.229,_l=7.232,Xg=-45.713,tc=17.1*Bn,$s=16.6*Bn,Ml=16.6*Bn,Yg=[6.9,17.1],hh=[2.95,16.6],AM=1.6,TM=0,LM=1,Kg=2,ju=3,Qg=4,Zg=5,zM=6;function RM(){let t=[],e=[],o=[],n=[],r=SM.createBuilder(t,e,o,n),a=(f,l,p,d,v,u,h=1,m=1)=>{let g=[];for(let b=0;b<=h;b++){let y=[];for(let w=0;w<=m;w++){let _=[f[0]+l[0]*b/h+p[0]*w/m,f[1]+l[1]*b/h+p[1]*w/m,f[2]+l[2]*b/h+p[2]*w/m],M=u(_);y.push(r.vert(_,d,[v,M[0],M[1]]))}g.push(y)}for(let b=0;b<h;b++)for(let y=0;y<m;y++)r.tri(g[b][y],g[b+1][y],g[b][y+1]),r.tri(g[b+1][y],g[b+1][y+1],g[b][y+1])},s=f=>l=>[(Is[2]-l[2])/Bn-f,l[1]/Bn];a([-60,0,-.36],[130,0,0],[0,0,-140],[0,1,0],TM,f=>[f[0]/Bn,f[2]/Bn],13,14),a([Fs,0,Yr],[0,0,Ds-Yr],[0,tc,0],[1,0,0],LM,s(8.6),6,6),a([-40,0,Yr],[Fs+40,0,0],[0,tc,0],[0,0,1],Kg,f=>[(Fs-f[0])/Bn,f[1]/Bn],8,4),a([-40,0,-.36],[0,0,Yr+.36],[0,tc,0],[1,0,0],Kg,f=>[-f[2]/Bn,f[1]/Bn]),a([X0,0,-80],[0,0,Yr+80],[0,$s,0],[-1,0,0],Qg,s(8.6),12,6),a([X0,0,Yr],[60,0,0],[0,$s,0],[0,0,1],Zg,f=>[(f[0]-X0)/Bn,f[1]/Bn],8,4),a([70,0,Yr],[0,0,-.36-Yr],[0,$s,0],[-1,0,0],Zg,f=>[-f[2]/Bn,f[1]/Bn]);let i=f=>[(f[0]-Is[0])/Bn+4.18,f[1]/Bn];a([-20,0,wl],[_l+20,0,0],[0,Ml,0],[0,0,1],ju,i,8,6),a([_l,0,wl],[0,0,Xg-wl],[0,Ml,0],[1,0,0],ju,s(28),4,4),a([_l,0,Xg],[X0-_l,0,0],[0,$s,0],[0,0,1],Qg,f=>[(f[0]-Is[0])/Bn,f[1]/Bn],2,4),a([-20,0,Ds],[0,0,wl-Ds],[0,Ml,0],[1,0,0],ju,s(16),4,4);let c=(f,l,p,d)=>a(f,l,p,d,zM,()=>[0,0],4,4);return c([-300,-20,-300],[600,0,0],[0,320,0],[0,0,1]),c([-300,300,-300],[600,0,0],[0,0,300],[0,-1,0]),c([-300,-20,0],[0,0,-300],[0,320,0],[1,0,0]),c([300,-20,-300],[0,0,300],[0,320,0],[-1,0,0]),{position:t,normal:e,elements:o,attr:n}}function Ps(t,e,o,n){let r=t.texture({data:[[n]],...o,min:"linear",mag:"linear"});return fetch(e).then(a=>{if(!a.ok)throw new Error("Could not load "+e);return a.blob()}).then(a=>createImageBitmap(a)).then(a=>{r({data:a,...o,min:"mipmap",mipmap:"nice",mag:"linear"})}).catch(a=>console.error(a)),r}var Ha=t=>"vec3("+t.map(e=>e.toFixed(4)).join(", ")+")",NM=[[[-.35,0,-.35],[14.35,9.2,50]],[[-40,0,Ds],[Fs,tc,Yr]],[[X0,0,-80],[70,$s,Yr]],[[-20,0,-80],[_l,Ml,wl]],[[-40,0,-80],[-20,Ml,Ds]]],CM=NM.map(t=>`if (hitBox(ro, rd, ${Ha(t[0])}, ${Ha(t[1])}, 1e4) ) return 0.0;`).join(`
		`),Jg="mat3("+[0,1,2].map(t=>[0,1,2].map(e=>kM[e][t].toFixed(6)).join(", ")).join(", ")+")",OM=`
precision highp float;

uniform sampler2D photo, photoNight, photoMask, pinkTex, yellowTex, creamTex, cobbleTex;
uniform float time;
uniform float night;   // 0 by day, 1 at night

varying vec3 v_pos;
varying vec3 v_normal;
varying vec3 v_attr;
varying vec3 v_eye;

const vec3 SUN = ${Ha([-.25,.4,.88].map(t=>t/Math.hypot(-.25,.4,.88)))};

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
	${CM}
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
	vec3 ro = ${Ha(Is)};
	vec3 rd = p - ro;
	if (hitBox(ro, rd, ${Ha([-40,0,Ds])}, ${Ha([Fs-.02,tc,Yr])}, 0.995)) return false;
	if (hitBox(ro, rd, ${Ha([X0+.02,0,-80])}, ${Ha([70,$s,Yr])}, 0.995)) return false;
	return true;
}

// is this point sky in the photo? (only meaningful inside the photo)
bool photoSky(vec3 p) {
	vec3 pc = ${Jg} * (p - ${Ha(Is)});
	if (pc.z < 0.2) return false;
	vec2 uv = vec2(
		(${Ug.toFixed(2)} + ${fh.toFixed(3)} * pc.x / pc.z) / ${Wg.toFixed(1)},
		(${jg.toFixed(2)} - ${fh.toFixed(3)} * pc.y / pc.z) / ${Vg.toFixed(1)}
	);
	if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) return false;
	return texture2D(photoMask, uv).r < 0.5;
}

// photo colour and how much to trust it (0..1)
vec4 photoAt(vec3 p, vec3 n, vec3 eye) {
	vec3 pc = ${Jg} * (p - ${Ha(Is)});
	if (pc.z < 0.2) return vec4(0.0);
	vec2 uv = vec2(
		(${Ug.toFixed(2)} + ${fh.toFixed(3)} * pc.x / pc.z) / ${Wg.toFixed(1)},
		(${jg.toFixed(2)} - ${fh.toFixed(3)} * pc.y / pc.z) / ${Vg.toFixed(1)}
	);
	vec2 e = min(uv, 1.0 - uv);
	float w = smoothstep(0.002, 0.02, min(e.x, e.y));
	if (w <= 0.0) return vec4(0.0);
	w *= smoothstep(0.35, 0.75, texture2D(photoMask, uv).r);
	if (w <= 0.0) return vec4(0.0);
	if (!photoSees(p)) return vec4(0.0);
	// if we see this surface much more square-on than the photo did,
	// the photo would look smeared: hand over to the painted facade
	float camCos = abs(dot(normalize(p - ${Ha(Is)}), n));
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
		base = texture2D(cobbleTex, fuv / ${AM.toFixed(2)}).rgb;
	} else if (kind < 2.5) {
		base = texture2D(pinkTex, vec2(fuv.x / ${Yg[0].toFixed(2)}, 1.0 - fuv.y / ${Yg[1].toFixed(2)})).rgb;
	} else if (kind < 3.5) {
		base = texture2D(yellowTex, vec2(fuv.x / ${hh[0].toFixed(2)}, 1.0 - fuv.y / ${hh[1].toFixed(2)})).rgb;
	} else {
		base = texture2D(creamTex, vec2(fuv.x / ${hh[0].toFixed(2)}, 1.0 - fuv.y / ${hh[1].toFixed(2)})).rgb;
	}

	// ---------- the photograph, where it can be trusted ----------
	bool projectable = kind < 0.5 || (kind > 0.5 && kind < 1.5) || (kind > 2.5 && kind < 4.5);
	if (kind < 0.5) {
		// the photo only shows ground inside the alley, or beyond its corners
		bool inAlley = v_pos.x > ${(Fs-.05).toFixed(3)} && v_pos.x < ${(X0+.05).toFixed(3)};
		projectable = inAlley || v_pos.z < ${Ds.toFixed(3)};
		projectable = projectable && v_pos.z < ${(Yr+4.5).toFixed(3)};
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
}`,PM=`
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
}`,IM=tr();Wu.exports=t=>{let e=RM(),o={wrapS:"clamp",wrapT:"clamp",flipY:!1},n={wrapS:"mirror",wrapT:"clamp",flipY:!1},r={wrapS:"repeat",wrapT:"repeat",flipY:!1},a=Ps(t,"res/street/photo.jpg",o,[190,160,120]),s=Ps(t,"res/street/photo_night.jpg",o,[12,14,22]),i=Ps(t,"res/street/photo_mask.png",o,[255,255,255]),c=Ps(t,"res/street/facade_pink.jpg",n,[200,150,135]),f=Ps(t,"res/street/facade_yellow.jpg",n,[225,180,95]),l=Ps(t,"res/street/facade_cream.jpg",n,[215,200,175]),p=Ps(t,"res/street/cobbles.jpg",r,[95,95,95]),d=Date.now(),v=t({frag:OM,vert:PM,attributes:{position:e.position,normal:e.normal,attr:e.attr},elements:new Uint32Array(e.elements),uniforms:{photo:a,photoMask:i,pinkTex:c,yellowTex:f,creamTex:l,cobbleTex:p,photoNight:s,night:()=>IM.night,time:()=>(Date.now()-d)/1e3}});return function(){v()}};Wu.exports.layout={MOUTH_Z:Yr,PINK_X:Fs,RIGHT_X:X0,PINK_H:tc,CREAM_H:$s,S:Bn}});var n3=mt((HA,o3)=>{"use strict";var $M=tr().GLSL,{glassPanes:FM}=F0(),e3=vr();function DM(){let t=[],e=[],o=(n,r)=>{for(let a of n)t.push(a),e.push(r)};return o(FM(),[0,0,1]),o(e3.windowGlass(),[0,0,1]),o(e3.farDoorGlass(),[1,0,0]),{position:t,normal:e}}o3.exports=t=>{let e=DM(),o=t({frag:`
		precision highp float;
		${$M}
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
		}`,attributes:{position:e.position,normal:e.normal},count:e.position.length,cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}});return function(){o()}}});var y3=mt((BA,Qu)=>{"use strict";var l3=tr().GLSL,qM=Ts(),Vu=ba(),{wallWithHoles:GM,C:Q0}=vr(),ce=.28,tt={westBack:14.4,westCol:15-ce,eastCol:37.4+ce,eastBack:41.8,south:Q0.z1+.7,northCol:Q0.z1+.7+16,northBack:Q0.z1+.7+19,cx:(15+37.4)/2,cz:(Q0.z1+.7+Q0.z1+.7+16-ce)/2},$o={x0:tt.westCol+ce,x1:tt.eastCol-ce,z0:tt.south,z1:tt.northCol-ce},wr=3.3,kl=.92,Z0=5.6,r3=6,Sa=11.9,K0=9.6,lo={x0:tt.cx-2.9,x1:tt.cx+2.9,top:14.4},xh=7,f3=4,Yu=(tt.eastCol-tt.westCol)/xh,HM=(tt.northCol-tt.south)/f3,h3=3,Tl=.26,Bs=1.4,Gs=1.1,dh=3,n0=(()=>{let t=[.3,.82,-.49],e=Math.hypot(...t);return t.map(o=>o/e)})(),Yt={GROUND:0,BRICK:1,STONE:2,MARBLE:3,HEDGE:4,POT:5,ROOF:6,SHUTTER:7,PANE:8,PLASTER:9,BARK:10,IRON:11,SKY:12,LEAD:13,FARBRICK:14,DARK:15,SOIL:16},r0=[],u3=(t,e,o)=>[tt.cx+t,e,tt.cz+o],ph=u3(-5.9,0,3.4),J0=.85,Y0={c:[ph[0],4.6*J0+.5,ph[2]],r:[5*J0,3.6*J0,4.5*J0]},d3=[{d:[0,4.4,0],r:[3.9,2.6,3.6],n:230},{d:[-2.7,4,-1.2],r:[2.6,2.1,2.4],n:105},{d:[2.7,4.5,-1.6],r:[2.5,2.2,2.3],n:105},{d:[.8,6.9,.8],r:[2.6,2,2.5],n:105},{d:[-1.6,6.1,2],r:[2.2,1.9,2],n:80},{d:[2.3,3.4,1.8],r:[2,1.5,1.9],n:60}].map(t=>({c:[ph[0]+t.d[0]*J0,t.d[1]*J0+.5,ph[2]+t.d[2]*J0],r:t.r.map(e=>e*J0),n:t.n}));for(let t of d3)r0.push({...t,cell:0,leaf:[.5,.7,.46],bloom:[1,1,1],size:[.95,1.35],magnolia:1,shadow:1});var BM=[3.6,6.3,9];for(let t of BM){let e=8.6+t%1.7*.6;r0.push({c:u3(t,e/2+.5,5.2),r:[.9,e/2,.9],cell:1,leaf:[.5,.64,.5],bloom:[1,1,1],n:180,size:[.72,.98],spindle:1,shadow:1})}var UM=[{d:[-8.4,-4],bloom:[1,.62,.78]},{d:[-3.6,-4.6],bloom:[1,.98,.94]},{d:[3.8,-4.3],bloom:[1,.98,.94]},{d:[8.5,-4],bloom:[1,.58,.72]}].map(t=>({x:tt.cx+t.d[0],z:tt.cz+t.d[1],bloom:t.bloom}));for(let t of UM)r0.push({c:[t.x,.95,t.z],r:[1.25,.95,1.1],cell:3,leaf:[.7,.86,.58],bloom:t.bloom,n:80,size:[.55,.8],shadow:1});var Ku=[45,135,225,315].map(t=>{let e=t*Math.PI/180;return[tt.cx+Math.cos(e)*2.3,tt.cz+Math.sin(e)*2.3]});for(let[t,e]of Ku)r0.push({c:[t,1.85,e],r:[.62,.55,.62],cell:3,leaf:[.78,.95,.55],bloom:[1.25,1,.25],n:36,size:[.32,.42],shadow:1});var p3=[];{let t=(o,n,r,a,s,i)=>{let c=Math.hypot(r-o,a-n),f=Math.floor(c/.9);for(let l=0;l<=f;l++){let p=l/f,d=o+(r-o)*p,v=n+(a-n)*p;s!==void 0&&Math.abs((r!==o?d:v)-s)<i||p3.push([d,v])}};t($o.x0+.45,$o.z0+1.2,$o.x0+.45,$o.z1-.45,tt.cz,1),t($o.x1-.45,$o.z0+1.2,$o.x1-.45,$o.z1-.45,tt.cz,1),t($o.x0+.45,$o.z1-.45,$o.x1-.45,$o.z1-.45,tt.cx,1.9)}var jM=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],vh=t=>{let e=Math.hypot(t[0],t[1],t[2])||1;return[t[0]/e,t[1]/e,t[2]/e]};function oc(t,e,o,n,r,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),f=t.vert(n,a,s),l=t.vert(r,a,s);t.tri(i,c,f),t.tri(i,f,l)}function Un(t,e,o,n,r,a,s,i){t.box(Math.min(e,r),Math.min(o,a),Math.min(n,s),Math.max(e,r),Math.max(o,a),Math.max(n,s),[i,0,0])}function WM(t,e,o){return{vert:(n,r,a)=>t.vert(e(n),o(r),a),tri:t.tri}}var VM={north:[t=>[t[0],t[1],tt.northCol-t[2]],t=>[t[0],t[1],-t[2]]],west:[t=>[tt.westCol+t[2],t[1],t[0]],t=>[t[2],t[1],t[0]]],east:[t=>[tt.eastCol-t[2],t[1],t[0]],t=>[-t[2],t[1],t[0]]]};function v3(t,e,o,n,r){let a=[];for(let s=0;s<o;s++){let i=t+s*e+(s===0?n:.02),c=t+(s+1)*e-(s===o-1?r:.02);a.push([i,c,t+(s+.5)*e])}return a}var XM=v3(tt.westCol,Yu,xh,ce+Tl,ce+Tl),a3=v3(tt.south,HM,f3,.32,ce+Tl),ec=[tt.cx-32.35,tt.northCol-77],YM=Array.from({length:xh-1},(t,e)=>tt.westCol+(e+1)*Yu),m3=t=>(t[1]-t[0])/2-.2,Al=t=>(t[0]+t[1])/2;function KM(t,e){let o=Al(t),n=m3(t);return{u0:t[0],u1:t[1],bottom:e?0:kl,head:r=>{let a=Math.abs(r-o);return a<n?wr+Math.sqrt(n*n-a*a):wr},step:.05}}function QM(t,e,o){return{u0:t-o,u1:t+o,bot:n=>e-Math.sqrt(Math.max(0,o*o-(n-t)*(n-t))),head:n=>e+Math.sqrt(Math.max(0,o*o-(n-t)*(n-t))),step:.04,mat:[Yt.STONE,0,0]}}function ZM(t,e,o,n){return{u0:t-e/2,u1:t+e/2,bottom:o,head:()=>n,step:.5,mat:[Yt.STONE,0,0]}}function s3(t,e,o){let[n,r]=VM[e],a=WM(t,n,r),s=[];o.arches.forEach((l,p)=>s.push(KM(l,p===o.open)));let i=[];for(let l of o.bays||o.arches){let p=Al(l);o.oculi&&s.push(QM(p,6.85,.3)),i.push({c:p,y0:o.win[0],y1:o.win[1],w:1.05})}for(let l of o.extraWindows||[])i.push(l);for(let l of i)s.push(ZM(l.c,l.w,l.y0,l.y1));for(let l of o.extraHoles||[])s.push(l);GM(a,{u0:o.u0,u1:o.u1,w0:-ce,w1:ce,top:o.top,holes:s,mat:[Yt.BRICK,0,0],revealMat:[Yt.BRICK,0,0],noEnds:o.noEnds,cuts:o.cuts,topStep:.25});let c=(l,p,d,v,u,h,m)=>{let g=n([l,p,d]),b=n([v,u,h]);Un(t,g[0],g[1],g[2],b[0],b[1],b[2],m)},f=(l,p,d,v,u,h)=>oc(a,l,p,d,v,u,[h,0,0]);for(let l of o.arches){let p=Al(l),d=m3(l),v=28;for(let u of[ce,-ce]){let h=u>0?1:-1,m=u+h*.025;for(let g=0;g<v;g++){let b=Math.PI*g/v,y=Math.PI*(g+1)/v,w=(D,K)=>[p+Math.cos(D)*K,wr+Math.sin(D)*K],_=w(b,d),M=w(y,d),T=w(b,d+.26),I=w(y,d+.26);f([_[0],_[1],m],[M[0],M[1],m],[I[0],I[1],m],[T[0],T[1],m],[0,0,h],Yt.STONE);let N=Math.cos((b+y)/2),B=Math.sin((b+y)/2);f([T[0],T[1],u],[I[0],I[1],u],[I[0],I[1],m],[T[0],T[1],m],[N,B,0],Yt.STONE)}}}if(o.arches.forEach((l,p)=>{p!==o.open&&c(l[0]-.02,kl,-ce-.05,l[1]+.02,kl+.09,ce+.05,Yt.STONE)}),c(o.u0,r3,-ce,o.u1,r3+.18,ce+.09,Yt.STONE),c(o.u0,o.win[0]-.12,ce-.01,o.u1,o.win[0],ce+.06,Yt.STONE),o.cornice)for(let[l,p,d]of o.cornice)c(l,d-.22,ce-.01,p,d,ce+.16,Yt.STONE),c(l,d,ce-.01,p,d+.16,ce+.42,Yt.STONE);for(let{c:l,y0:p,y1:d,w:v,door:u}of i){let h=v/2;if(f([l-h-.01,p,.06],[l+h+.01,p,.06],[l+h+.01,d,.06],[l-h-.01,d,.06],[0,0,1],u?Yt.DARK:Yt.PANE),u){c(l-h-.16,0,ce-.01,l-h,d+.16,ce+.07,Yt.STONE),c(l+h,0,ce-.01,l+h+.16,d+.16,ce+.07,Yt.STONE),c(l-h-.16,d,ce-.01,l+h+.16,d+.2,ce+.09,Yt.STONE),c(l-h,0,.07,l+h,d-.02,.12,Yt.SHUTTER),c(l-.012,0,.12,l+.012,d-.02,.14,Yt.DARK);continue}for(let m of[-1,1]){let g=l+m*h;c(g+m*.02,p+.02,ce+.02,g+m*(h+.025),d-.02,ce+.06,Yt.SHUTTER)}c(l-h-.09,d,ce-.01,l+h+.09,d+.16,ce+.05,Yt.STONE),c(l-h-.09,p-.1,ce-.01,l+h+.09,p,ce+.09,Yt.STONE),c(l-.015,p,.06,l+.015,d,.09,Yt.SHUTTER),c(l-h,(p+d)/2-.015,.06,l+h,(p+d)/2+.015,.09,Yt.SHUTTER)}if(o.oculi)for(let l of o.bays||o.arches){let p=Al(l);f([p-.31,6.54,0],[p+.31,6.54,0],[p+.31,7.16,0],[p-.31,7.16,0],[0,0,1],Yt.DARK)}for(let l of o.cols){let p=kl+.09,d=n([l,0,0]);Un(t,d[0]-.24,p,d[2]-.24,d[0]+.24,p+.12,d[2]+.24,Yt.MARBLE),t.lathe([[.23,p+.12,1],[.24,p+.17],[.2,p+.24],[.215,p+.28],[.17,p+.34,1],[.165,p+.6],[.155,wr-.5],[.15,wr-.38,1],[.175,wr-.34,1],[.17,wr-.3],[.2,wr-.22],[.27,wr-.15],[.29,wr-.12,1]],d[0],d[2],18,{mat:()=>[Yt.MARBLE,0,0]}),Un(t,d[0]-.29,wr-.12,d[2]-.29,d[0]+.29,wr+.01,d[2]+.29,Yt.STONE)}o.walk&&o.walk(t)}function JM(t){let e=[-1,0,1].map(r=>{let a=tt.cx+r*1.7;return{u0:a-.6,u1:a+.6,bottom:11,head:s=>12.9+Math.sqrt(Math.max(0,.36-(s-a)*(s-a))),step:.04,mat:[Yt.STONE,0,0]}});s3(t,"north",{u0:tt.westCol-ce,u1:tt.eastCol+ce,top:r=>r>lo.x0+1e-6&&r<lo.x1-1e-6?lo.top:Sa,cuts:[lo.x0,lo.x0+1e-5,lo.x1-1e-5,lo.x1],arches:XM,open:h3,cols:YM,oculi:!0,win:[8,9.9],extraHoles:e,cornice:[[tt.westCol-ce-3.3,lo.x0,Sa],[lo.x1,tt.eastCol+ce+3.3,Sa],[lo.x0-.2,lo.x1+.2,lo.top]],walk:r=>{Un(r,$o.x0,Z0,tt.northCol+ce,$o.x1,Z0+.2,tt.northBack,Yt.PLASTER),Un(r,$o.x0,0,tt.northBack,$o.x1,Z0,tt.northBack+.3,Yt.PLASTER);for(let a of[tt.cx-7.2,tt.cx,tt.cx+7.2])oc(r,[a-.8,0,tt.northBack-.01],[a+.8,0,tt.northBack-.01],[a+.8,2.9,tt.northBack-.01],[a-.8,2.9,tt.northBack-.01],[0,0,-1],[Yt.DARK,0,0]),Un(r,a-.98,0,tt.northBack-.06,a+.98,3.12,tt.northBack,Yt.STONE),oc(r,[a-.8,0,tt.northBack-.07],[a+.8,0,tt.northBack-.07],[a+.8,2.9,tt.northBack-.07],[a-.8,2.9,tt.northBack-.07],[0,0,-1],[Yt.DARK,0,0])}}),oc(t,[lo.x0,11,tt.northCol+.2],[lo.x1,11,tt.northCol+.2],[lo.x1,13.6,tt.northCol+.2],[lo.x0,13.6,tt.northCol+.2],[0,0,-1],[Yt.DARK,0,0]),Un(t,lo.x0+.3,10.88,tt.northCol-ce-.06,lo.x1-.3,11,tt.northCol-ce+.1,Yt.STONE),Un(t,tt.westBack,Z0+.2,tt.northBack,tt.eastBack,Sa,tt.northBack+3.4,Yt.BRICK),Un(t,tt.westBack,K0,tt.northCol-ce,tt.westCol-ce,Sa,tt.northCol+ce,Yt.BRICK),Un(t,tt.eastCol+ce,K0,tt.northCol-ce,tt.eastBack,Sa,tt.northCol+ce,Yt.BRICK),Un(t,tt.westBack,Z0+.2,tt.northCol+ce+.12,tt.eastBack,Sa,tt.northBack,Yt.BRICK),El(t,[tt.westBack-.5,Sa+.16,tt.northCol-ce-.42],[lo.x0-tt.westBack+.5,0,0],[0,2.6,4.4],Yt.ROOF),El(t,[lo.x1,Sa+.16,tt.northCol-ce-.42],[tt.eastBack+.5-lo.x1,0,0],[0,2.6,4.4],Yt.ROOF),El(t,[lo.x0-.3,lo.top+.16,tt.northCol-ce-.42],[lo.x1-lo.x0+.6,0,0],[0,1.4,3],Yt.ROOF),i3(t,[lo.x0-.3,lo.top+.16,tt.northCol-ce-.42],[lo.x0-.3,lo.top+1.56,tt.northCol-ce+2.58],[lo.x0-.3,lo.top+.16,tt.northCol-ce+2.58],[-1,0,0],Yt.BRICK),i3(t,[lo.x1+.3,lo.top+.16,tt.northCol-ce-.42],[lo.x1+.3,lo.top+1.56,tt.northCol-ce+2.58],[lo.x1+.3,lo.top+.16,tt.northCol-ce+2.58],[1,0,0],Yt.BRICK),Un(t,lo.x0,Sa,tt.northCol+ce,lo.x1,lo.top,tt.northCol+2.6,Yt.BRICK);for(let[r,a]of[[tt.cx-9.8,tt.northBack+.6],[tt.cx+9.4,tt.northBack+.4],[tt.cx-4.6,tt.northBack+1]])Un(t,r-.4,12.5,a-.4,r+.4,15.4,a+.4,Yt.BRICK),Un(t,r-.52,15.4,a-.52,r+.52,15.62,a+.52,Yt.STONE);let o=(r,a,s)=>{let i=r==="west"?-1:1,c=[];a3.forEach((p,d)=>{let v=Al(p);d===1?c.push({c:v,y0:0,y1:2.9,w:1.4,door:!0}):c.push({c:v,y0:1,y1:2.75,w:1.05}),c.push({c:v,y0:3.85,y1:5.45,w:1.05})}),s3(t,r,{u0:tt.south,u1:tt.northCol-ce,top:()=>K0,arches:[],bays:a3,cols:[],win:[7.45,8.85],extraWindows:c,noEnds:!0,cornice:[[tt.south,tt.northCol-ce,K0]]}),Un(t,a,0,tt.south,s+i*(ce+.12),K0,tt.northBack+.3,Yt.BRICK);let f=s-i*ce;Un(t,f,0,tt.south,f-i*.06,.55,tt.northCol-ce,Yt.STONE);let l=s-i*(ce+.42);El(t,[l,K0+.16,tt.south],[0,0,tt.northCol-ce-tt.south],[a-l+i*.4,1.9,0],Yt.ROOF)};o("west",tt.westBack,tt.westCol),o("east",tt.eastBack,tt.eastCol);let n=Q0.x1+.7;Un(t,13.65,7.4,tt.south-.02,n,7.62,tt.south+.14,Yt.STONE),Un(t,13.65,10.4,tt.south-.02,n,10.6,tt.south+.38,Yt.STONE),El(t,[13.65,10.6,tt.south+.38],[n-13.65,0,0],[0,2.2,-5],Yt.ROOF)}function i3(t,e,o,n,r,a){let s=[a,0,0];t.tri(t.vert(e,r,s),t.vert(o,r,s),t.vert(n,r,s))}function El(t,e,o,n,r){let a=vh([o[1]*n[2]-o[2]*n[1],o[2]*n[0]-o[0]*n[2],o[0]*n[1]-o[1]*n[0]]),s=a[1]<0?a.map(f=>-f):a,i=(f,l)=>[e[0]+o[0]*f+n[0]*l,e[1]+o[1]*f+n[1]*l,e[2]+o[2]*f+n[2]*l];oc(t,i(0,0),i(1,0),i(1,1),i(0,1),s,[r,0,0]);let c=.08;oc(t,i(0,0),i(1,0),[i(1,0)[0],i(1,0)[1]-c,i(1,0)[2]],[i(0,0)[0],i(0,0)[1]-c,i(0,0)[2]],vh([-n[0],0,-n[2]]),[r,0,0])}function t8(t){let e=tt.westBack,o=tt.eastBack,n=tt.south,r=tt.northBack,a=36,s=22,i=[];for(let c=0;c<=a;c++){i.push([]);for(let f=0;f<=s;f++){let l=[e+(o-e)*c/a,0,n+(r-n)*f/s];i[c].push(t.vert(l,[0,1,0],[Yt.GROUND,0,0]))}}for(let c=0;c<a;c++)for(let f=0;f<s;f++)t.tri(i[c][f],i[c+1][f],i[c+1][f+1]),t.tri(i[c][f],i[c+1][f+1],i[c][f+1])}var Sl=.46,Hs=.58,qs=[[-.5,0],[-.52,.45],[-.46,.78],[-.3,.95],[0,1],[.3,.95],[.46,.78],[.52,.45],[.5,0]];function e8(t,e,o){let n=Gs+o,r=(t>0?$o.x1-tt.cx:tt.cx-$o.x0)-Bs-o,a=Gs+o,s=(e>0?$o.z1-tt.cz:tt.cz-$o.z0)-Bs-o,i=dh+o,c=Math.sqrt(i*i-n*n),f=Math.sqrt(i*i-a*a),l=[[n,c],[n,s],[r,s],[r,a],[f,a]],p=Math.atan2(a,f),d=Math.atan2(c,n);for(let v=1;v<10;v++){let u=p+(d-p)*v/10;l.push([Math.cos(u)*i,Math.sin(u)*i])}return l.map(([v,u])=>[tt.cx+t*v,tt.cz+e*u])}function o8(t,e,o){let n=o[0]-e[0],r=o[1]-e[1],a=Math.hypot(n,r),s=n/a,i=r/a,c=-i,f=s,l=Sl*.5,p=-l,d=a+l,v=[],u=Math.max(1,Math.ceil((d-p)/1));for(let h=0;h<=u;h++){let m=p+(d-p)*h/u,g=[];for(let b=0;b<qs.length;b++){let[y,w]=qs[b],_=Math.min(qs.length-2,b),M=qs[Math.max(0,b-1)],T=qs[Math.min(qs.length-1,b+1)],I=(T[0]-M[0])*Sl,B=(T[1]-M[1])*Hs,D=-I,K=Math.hypot(B,D)||1,q=[e[0]+s*m+c*y*Sl,w*Hs,e[1]+i*m+f*y*Sl],X=[c*(-B/K),-D/K,f*(-B/K)];g.push(t.vert(q,X[1]<-.2?[c*Math.sign(y),.3,f*Math.sign(y)]:X,[Yt.HEDGE,0,0]))}v.push(g)}for(let h=0;h<u;h++)for(let m=0;m<qs.length-1;m++)t.tri(v[h][m],v[h+1][m],v[h+1][m+1]),t.tri(v[h][m],v[h+1][m+1],v[h][m+1]);for(let[h,m]of[[0,-1],[u,1]]){let g=v[h],b=t.vert([e[0]+s*(h?d:p),Hs*.5,e[1]+i*(h?d:p)],[s*m,0,i*m],[Yt.HEDGE,0,0]);for(let y=0;y<g.length-1;y++)t.tri(b,g[y],g[y+1])}}function n8(t){for(let e of[-1,1])for(let o of[-1,1]){let n=e8(e,o,.3);for(let r=0;r<n.length;r++)o8(t,n[r],n[(r+1)%n.length])}}function r8(t){let e=tt.cx,o=tt.cz,n=()=>[Yt.STONE,0,0];t.lathe([[1.45,0,1],[1.45,.14,1],[1.12,.14,1],[1.12,.3,1],[0,.3]],e,o,8,{mat:n}),t.lathe([[.76,.3,1],[.8,.38,1],[.74,.44],[.76,.7],[.82,.9],[.8,1.02,1],[.88,1.06,1],[.88,1.18,1],[.6,1.18,1],[.6,.98]],e,o,24,{mat:n}),t.lathe([[.6,.98,1],[0,.98]],e,o,16,{mat:()=>[Yt.DARK,0,0]});let r={mat:()=>[Yt.IRON,0,0]};t.tube([[e-.72,1.1,o],[e-.72,1.9,o],[e-.7,2.3,o]],()=>.035,8,6,r),t.tube([[e+.72,1.1,o],[e+.72,1.9,o],[e+.7,2.3,o]],()=>.035,8,6,r);let a=[];for(let s=0;s<=10;s++){let i=Math.PI*s/10;a.push([e-Math.cos(i)*.7,2.3+Math.sin(i)*.45,o])}t.tube(a,()=>.03,20,6,r),t.tube([[e-.45,2.25,o],[e,2.38,o],[e+.45,2.25,o]],()=>.02,8,5,r),t.ellipsoid([e,2.32,o],[.03,.13,.13],6,10,r);for(let s of[-1,1]){let i=[];for(let c=0;c<=12;c++){let f=c/12*Math.PI*1.6,l=.16*(1-c/16);i.push([e+s*(.72-.18+Math.cos(f)*l*s*-1+0),1.95+Math.sin(f)*l,o])}t.tube(i,()=>.016,16,5,r)}}function a8(t){for(let[e,o]of Ku)t.lathe([[.26,0,1],[.3,.06],[.36,.42],[.38,.5,1],[.44,.52,1],[.44,.64,1],[.38,.66,1],[.37,.6]],e,o,20,{mat:()=>[Yt.POT,0,0]}),t.lathe([[.37,.6,1],[0,.6]],e,o,12,{mat:()=>[Yt.SOIL,0,0]}),t.tube([[e,.6,o],[e+.02,1,o-.01],[e-.01,1.45,o+.02]],n=>.045-n*.02,6,6,{mat:()=>[Yt.BARK,0,0]})}function s8(t){let[e,,o]=Y0.c,n=x3(7),r=[[-1.8,.4,3.6],[1.6,-.9,3.9],[.4,1.9,3.4],[-.6,-1.7,4.2],[2.1,1.2,3.2]];for(let[a,s,i]of r){let c=[[e+a*.05,0,o+s*.05],[e+a*.25,i*.35,o+s*.25],[e+a*.6,i*.7,o+s*.6],[e+a,i,o+s],[e+a*1.35+(n()-.5),i+1.4,o+s*1.35+(n()-.5)]];t.tube(c,f=>.2*(1-f*.75),14,9,{mat:()=>[Yt.BARK,0,0]});for(let f=0;f<2;f++){let l=.55+f*.2,p=[e+a*l,i*l,o+s*l],d=n()*Math.PI*2;t.tube([p,[p[0]+Math.cos(d)*1.3,p[1]+.9,p[2]+Math.sin(d)*1.3],[p[0]+Math.cos(d)*2.3,p[1]+1.4+n(),p[2]+Math.sin(d)*2.3]],v=>.08*(1-v*.7),8,6,{mat:()=>[Yt.BARK,0,0]})}}for(let a of r0.filter(s=>s.spindle))t.tube([[a.c[0],0,a.c[2]],[a.c[0],1.4,a.c[2]]],()=>.12,3,7,{mat:()=>[Yt.BARK,0,0]})}function i8(t){let e=()=>[Yt.FARBRICK,0,0],o=()=>[Yt.LEAD,0,0],n=(a,s,i,c,f,l)=>{t.lathe([[i+.3,20,1],[i+.3,c-1.2,1],[i+.8,c-.9,1],[i+.8,c,1],[i,c,1]],a,s,28,{mat:e});let p=[];for(let v=0;v<=12;v++){let u=v/12*Math.PI/2,h=Math.cos(u)*i,m=Math.sin(u)*f;l&&(h*=1-.18*Math.sin(u*2)),p.push([Math.max(h,i*.12),c+m])}t.lathe(p,a,s,28,{mat:o});let d=c+f;t.lathe([[i*.13,d-.2,1],[i*.13,d+3,1],[i*.18,d+3.2,1],[i*.02,d+6.4]],a,s,10,{mat:o})};Un(t,14,0,104,52,26,150,Yt.FARBRICK),t.lathe([[3,26],[.1,32]],33,108,4,{mat:e}),n(26,124,7.2,33,9.5,!0),n(40.5,116,6,31,8,!0),n(16.5,117,5.5,30,7.2,!0),t.lathe([[6.4,20,1],[6.4,34,1],[6.9,34.4,1],[6,34.4,1],[.6,46.5,1],[.15,50]],33,132,24,{mat:o});let r=(a,s,i)=>{Un(t,a-1.8,0,s-1.8,a+1.8,i,s+1.8,Yt.FARBRICK),t.lathe([[1.9,i,1],[1.6,i+3.5,1],[1.2,i+3.5,1],[1.2,i+6,1],[.9,i+6.2,1],[.05,i+13]],a,s,8,{mat:e})};r(20.5,109,36),r(46.5,112,38)}function c8(t){let o=[tt.cx,0,tt.cz],n=24,r=10,a=[];for(let s=0;s<=n;s++){a.push([]);let i=-Math.PI*.62+Math.PI*1.24*s/n;for(let c=0;c<=r;c++){let f=Math.PI/2*(c/r)-.05,l=[Math.sin(i)*Math.cos(f),Math.sin(f),Math.cos(i)*Math.cos(f)],p=[o[0]+l[0]*420,o[1]+l[1]*420,o[2]+l[2]*420];a[s].push(t.vert(p,[-l[0],-l[1],-l[2]],[Yt.SKY,0,0]))}}for(let s=0;s<n;s++)for(let i=0;i<r;i++)t.tri(a[s][i],a[s+1][i],a[s+1][i+1]),t.tri(a[s][i],a[s+1][i+1],a[s][i+1])}function l8(){let t=[],e=[],o=[],n=[],r=qM.createBuilder(t,e,o,n);return t8(r),JM(r),n8(r),r8(r),a8(r),s8(r),r.save(),r.translate(ec[0],0,ec[1]),i8(r),r.restore(),c8(r),{position:t,normal:e,elements:o,attr:n}}var g3=[[[13.65,0,Q0.z0-.7],[Q0.x1+.7,10.6,tt.south]],[[tt.westBack,Z0,tt.northCol-ce],[tt.eastBack,Sa,tt.northBack+3.4]],[[lo.x0,Sa,tt.northCol-ce],[lo.x1,lo.top,tt.northCol+2.6]],[[tt.westBack,0,tt.south],[tt.westCol+ce,K0,tt.northBack+.3]],[[tt.eastCol-ce,0,tt.south],[tt.eastBack,K0,tt.northBack+.3]],[[14+ec[0],0,104+ec[1]],[52+ec[0],26,150+ec[1]]]];function f8(t,e,o,n){let r=.001,a=1e9;for(let s=0;s<3;s++){if(Math.abs(e[s])<1e-9){if(t[s]<o[s]||t[s]>n[s])return!1;continue}let i=(o[s]-t[s])/e[s],c=(n[s]-t[s])/e[s];if(i>c&&([i,c]=[c,i]),r=Math.max(r,i),a=Math.min(a,c),r>a)return!1}return!0}function uh(t,e,o,n){let r=[(t[0]-o[0])/n[0],(t[1]-o[1])/n[1],(t[2]-o[2])/n[2]],a=[e[0]/n[0],e[1]/n[1],e[2]/n[2]],s=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],i=r[0]*a[0]+r[1]*a[1]+r[2]*a[2],c=r[0]*r[0]+r[1]*r[1]+r[2]*r[2]-1,f=i*i-s*c;if(f<=0)return 0;let l=Math.sqrt(f),p=Math.max(0,(-i-l)/s),d=(-i+l)/s;return Math.max(0,d-p)}function Xu(t){for(let[e,o]of g3)if(f8(t,n0,e,o))return 0;return 1}function x3(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let o=e;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}function h8(){let t=[],e=[],o=[],n=[],r=[],a=[],s=[],i=x3(21),c=(u,h,m,g,b,y,w)=>{let _=t.length/3;for(let[M,T]of[[-1,-1],[1,-1],[1,1],[-1,1]])t.push(...u),e.push(M,T),o.push(h,m,g),n.push(...b),r.push(...y),a.push(...w);s.push(_,_+1,_+2,_,_+2,_+3)},f=(u,h)=>{let m=1;for(let g of r0){if(g===h||!g.shadow)continue;let b=uh(u,n0,g.c,g.r);b>0&&(m*=Math.exp(-b*.9))}return m},l=r0.map(u=>({...u,pts:null}));for(let u of l)for(let h=0;h<u.n;h++){let m;do m=[i()*2-1,i()*2-1,i()*2-1];while(m[0]*m[0]+m[1]*m[1]+m[2]*m[2]>1);let g=Math.hypot(m[0],m[1],m[2])||1,b=Math.pow(i(),.35)*.98,y=[m[0]/g*b,m[1]/g*b,m[2]/g*b];if(u.spindle){let q=y[1],X=Math.sqrt(Math.max(.02,1-q*q))*(q>0?1-q*.55:1+q*.25),pt=Math.hypot(y[0],y[2])||1,Ft=X*Math.min(1,pt*1.4);y=[y[0]/pt*Ft,q,y[2]/pt*Ft]}u.magnolia&&y[1]<-.55&&(y[1]=-.55+(y[1]+.55)*.35);let w=[u.c[0]+y[0]*u.r[0],u.c[1]+y[1]*u.r[1],u.c[2]+y[2]*u.r[2]],_,M;if(u.magnolia){let q=0;for(let Ft of d3)q=Math.max(q,uh(w,n0,Ft.c,Ft.r));_=Math.exp(-q*1.1);let X=1;for(let Ft of r0)if(!Ft.magnolia&&Ft.shadow){let Lt=uh(w,n0,Ft.c,Ft.r);Lt>0&&(X*=Math.exp(-Lt*.9))}_*=Xu(w)*X;let pt=jM(w,Y0.c);M=vh([pt[0]/Y0.r[0]+y[0]*.5,pt[1]/Y0.r[1]+y[1]*.5,pt[2]/Y0.r[2]+y[2]*.5]),b=Math.min(1,Math.hypot(pt[0]/Y0.r[0],pt[1]/Y0.r[1],pt[2]/Y0.r[2])*.6+b*.4)}else{let q=uh(w,n0,u.c,u.r);_=Math.exp(-q*(u.spindle?2.2:1.25)),_*=Xu(w)*f(w,r0[l.indexOf(u)]),M=vh([y[0]/u.r[0],y[1]/u.r[1],y[2]/u.r[2]])}let T=Math.max(0,M[0]*n0[0]+M[1]*n0[1]+M[2]*n0[2]),I=.25+.75*Math.pow(b,1.5)*(.65+.35*(M[1]*.5+.5)),N=u.size[0]+(u.size[1]-u.size[0])*i(),B=.85+i()*.3,D=u.leaf.map(q=>q*B),K=u.cell;u.cell===3&&i()<.35&&(K=2),c(w,N,K,i()*Math.PI*2,[_,I,.35+.65*T],D,u.bloom)}for(let[u,h]of p3){let m=i()<.5;for(let g=0;g<3;g++){let b=[u+(i()-.5)*.7,.28+i()*.22,h+(i()-.5)*.5],y=Xu(b)*f(b,null);c(b,.32+i()*.12,i()<.7?3:2,i()*6.28,[y,.6+i()*.3,.8],[.75,.9,.6],m?[1,.55,.75]:[.85,.8,1.15])}}let p=s.length/6,d=Array.from({length:p},(u,h)=>h);for(let u=p-1;u>0;u--){let h=Math.floor(i()*(u+1));[d[u],d[h]]=[d[h],d[u]]}let v=[];for(let u of d)for(let h=0;h<6;h++)v.push(s[u*6+h]);return{center:t,corner:e,par:o,light:n,tint:r,bloom:a,elements:v}}var re=t=>t.toFixed(4),Ll=t=>`vec3(${re(t[0])}, ${re(t[1])}, ${re(t[2])})`,b3=`
const vec3 SUN = ${Ll(n0)};
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
`,u8=g3.map(([t,e])=>`if (hitBox(ro, SUN, ${Ll(t)}, ${Ll(e)})) return 0.0;`).join(`
	`),d8=r0.filter(t=>t.shadow).map(t=>`tr *= crownShade(ro, ${Ll(t.c)}, ${Ll(t.r)}, ${t.spindle?"1.8":"1.0"});`).join(`
	`),p8=(t,e,o,n,r,a,s,i,c)=>`
	{
		float t = (${re(e)} - ro.${t}) / SUN.${t};
		if (t > 0.0) {
			vec3 q = ro + SUN * t;
			float u = q.${t==="z"?"x":"z"};
			if (q.y < ${re(Z0)} && u > ${re(o-ce)} && u < ${re(o+n*r+ce)}) {
				float k = floor((u - ${re(o)}) / ${re(n)});
				float a = ${re(o)} + k * ${re(n)} + (k < 0.5 ? ${re(a)} : 0.02);
				float b = ${re(o)} + (k + 1.0) * ${re(n)} - (k > ${re(r-1.5)} ? ${re(s)} : 0.02);
				float c = 0.5 * (a + b), r = 0.5 * (b - a) - 0.2;
				float d = abs(u - c);
				float sill = abs(k - ${re(i)}) < 0.5 ? 0.0 : ${re(kl+.09)};
				bool hole = (q.y > sill && q.y < ${re(wr)} && u > a && u < b && d < 0.5 * (b - a) - 0.17)
					|| (q.y >= ${re(wr)} && d * d + (q.y - ${re(wr)}) * (q.y - ${re(wr)}) < r * r);
				if (!hole && ${c}) return 0.0;
			}
		}
	}`,mh=Gs+.3,gh=Gs+.3,zl=dh+.3,c3=$o.x1-tt.cx-Bs-.3,v8=$o.z1-tt.cz-Bs-.3,m8=tt.cz-$o.z0-Bs-.3,g8=Math.sqrt(zl*zl-mh*mh),x8=Math.sqrt(zl*zl-gh*gh),b8=[[tt.cx,tt.cz,.86,1.18],[tt.cx,tt.cz,1.25,.3],...Ku.map(([t,e])=>[t,e,.42,.65])].map(([t,e,o,n])=>`if (hitCyl(ro, vec2(${re(t)}, ${re(e)}), ${re(o)}, ${re(n)})) return 0.0;`).join(`
	`),y8=`
float segDist(vec2 p, vec2 a, vec2 b) {
	vec2 pa = p - a, ba = b - a;
	float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
	return length(pa - ba * h);
}

// distance to the nearest hedge line
float hedgeDist(vec2 xz) {
	vec2 q = abs(xz - vec2(${re(tt.cx)}, ${re(tt.cz)}));
	float b1 = xz.y > ${re(tt.cz)} ? ${re(v8)} : ${re(m8)};
	vec2 A = vec2(${re(mh)}, ${re(g8)}), Bp = vec2(${re(mh)}, b1), C = vec2(${re(c3)}, b1);
	vec2 D = vec2(${re(c3)}, ${re(gh)}), E = vec2(${re(x8)}, ${re(gh)});
	float d = min(min(segDist(q, A, Bp), segDist(q, Bp, C)), min(segDist(q, C, D), segDist(q, D, E)));
	float ang = atan(q.y, q.x);
	if (ang > atan(E.y, E.x) && ang < atan(A.y, A.x)) d = min(d, abs(length(q) - ${re(zl)}));
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
	${u8}
	${p8("z",tt.northCol,tt.westCol,Yu,xh,ce+Tl,ce+Tl,h3,"ro.z > "+re(tt.northCol-ce))}
	// on lighter settings only the buildings cast shadows
	if (gardenDetail < 0.5) return 1.0;
	${b8}
	if (ro.y < ${re(Hs)} && ro.x > ${re($o.x0)} && ro.x < ${re($o.x1)}) {
		for (int i = 1; i <= 4; i++) {
			float t = float(i) / 4.0 * (${re(Hs)} - ro.y) / SUN.y;
			vec3 q = ro + SUN * t;
			float w = ${re(Sl*.5)} * sqrt(max(0.0, 1.0 - pow(q.y / ${re(Hs)}, 4.0)));
			if (hedgeDist(q.xz) < w) return 0.0;
		}
	}
	float tr = 1.0;
	${d8}
	return tr;
}
`,w8=`
precision highp float;
${l3}
varying vec3 v_pos, v_normal, v_attr, v_eye;
uniform float time, gardenDetail;
${b3}
${y8}

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

	if (kind == ${Yt.SKY}.0) {
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

	if (kind == ${Yt.GROUND}.0) {
		bool yard = P.x > ${re($o.x0)} && P.x < ${re($o.x1)} && P.z < ${re($o.z1)};
		if (!yard) {
			// stone slabs under the arcades
			vec2 g = P.xz / 0.62;
			vec2 fg = fract(g);
			float h = hash(floor(g));
			base = mix(vec3(0.66, 0.60, 0.52), vec3(0.76, 0.70, 0.62), h);
			base *= 1.0 - 0.25 * (step(fg.x, 0.03) + step(fg.y, 0.03)) * (1.0 - lod);
			spec = 0.15;
		} else {
			float ex = min(P.x - ${re($o.x0)}, ${re($o.x1)} - P.x);
			float ez = min(P.z - ${re($o.z0)}, ${re($o.z1)} - P.z);
			float edge = min(ex, ez);
			float dx = abs(P.x - ${re(tt.cx)}), dz = abs(P.z - ${re(tt.cz)});
			float rc = length(vec2(dx, dz));
			if (edge < ${re(Bs)}) {
				// brick path laid in rows, with a stone kerb
				vec2 q = ex < ez ? P.zx : P.xz;
				base = brick(q * vec2(1.0, 2.6), 0.4) * 0.9;
				if (abs(edge - ${re(Bs)}) < 0.08) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (rc < ${re(dh)}) {
				// brick in rings round the wellhead
				float ang = atan(P.z - ${re(tt.cz)}, P.x - ${re(tt.cx)});
				vec2 q = vec2(ang * rc, rc);
				base = brick(q * vec2(1.0, 2.6), 0.5) * 0.92;
				if (abs(rc - ${re(dh)}) < 0.1) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (dx < ${re(Gs)} || dz < ${re(Gs)}) {
				// pale gravel
				float g = noise(P.xz * 40.0) * 0.6 + noise(P.xz * 9.0) * 0.4;
				base = mix(vec3(0.66, 0.58, 0.46), vec3(0.86, 0.79, 0.66), mix(g, 0.5, lod));
				base *= 0.94 + 0.12 * noise(P.xz * 1.3);
				float e = min(${re(Gs)} - min(dx, dz), 1.0);
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
			ao *= 0.6 + 0.4 * smoothstep(0.85, 1.6, length(P.xz - vec2(${re(tt.cx)}, ${re(tt.cz)})));
		}
	} else if (kind == ${Yt.BRICK}.0) {
		float pink = smoothstep(0.4, 0.6, noise(wq * 0.05 + 7.0));
		base = mix(brick(wq, 0.25 * pink), vec3(0.68, 0.46, 0.33), lod * 0.6);
		base *= 1.0 - 0.18 * smoothstep(0.0, 1.5, 1.6 - P.y) * noise(wq * 1.5);
		ao *= 0.78 + 0.22 * smoothstep(0.0, 1.2, P.y);
	} else if (kind == ${Yt.STONE}.0) {
		float n = noise(wq * 3.0) * 0.5 + noise(wq * 0.7) * 0.5;
		base = mix(vec3(0.74, 0.70, 0.62), vec3(0.86, 0.83, 0.76), n);
		spec = 0.1;
	} else if (kind == ${Yt.MARBLE}.0) {
		// red Verona marble
		float n = noise3(P * vec3(5.0, 1.5, 5.0)) * 0.6 + noise3(P * 14.0) * 0.4;
		base = mix(vec3(0.56, 0.32, 0.25), vec3(0.68, 0.42, 0.33), n);
		base = mix(base, vec3(0.80, 0.66, 0.56), smoothstep(0.66, 0.74, noise3(P * 9.0 + 3.0)) * 0.35);
		spec = 0.35;
	} else if (kind == ${Yt.HEDGE}.0) {
		float n = noise3(P * 9.0) * 0.55 + noise3(P * 2.5) * 0.45;
		base = mix(vec3(0.05, 0.16, 0.04), vec3(0.22, 0.38, 0.10), n);
		ao *= 0.55 + 0.45 * smoothstep(0.0, ${re(Hs)}, P.y) * (0.6 + 0.4 * n);
		N = normalize(N + vec3(noise3(P * 13.0) - 0.5, 0.0, noise3(P * 13.0 + 5.0) - 0.5) * 0.9);
	} else if (kind == ${Yt.POT}.0) {
		base = mix(vec3(0.66, 0.34, 0.20), vec3(0.75, 0.44, 0.28), noise(wq * 6.0));
	} else if (kind == ${Yt.SOIL}.0) {
		base = vec3(0.20, 0.14, 0.09);
	} else if (kind == ${Yt.ROOF}.0) {
		// rows of curved clay tiles
		float along = abs(N.x) > abs(N.z) ? P.z : P.x;
		float rib = abs(fract(along / 0.24) - 0.5) * 2.0;
		float h = hash(vec2(floor(along / 0.24), floor(P.y / 0.42)));
		base = mix(vec3(0.58, 0.30, 0.20), vec3(0.72, 0.44, 0.30), h);
		base = mix(base, vec3(0.45, 0.42, 0.36), smoothstep(0.55, 0.85, noise(P.xz * 0.6)) * 0.4);
		base *= mix(0.62 + 0.38 * (1.0 - rib * rib), 0.85, lod);
	} else if (kind == ${Yt.SHUTTER}.0) {
		float slat = fract(P.y / 0.07);
		base = vec3(0.17, 0.30, 0.20) * (0.75 + 0.25 * smoothstep(0.1, 0.5, slat));
	} else if (kind == ${Yt.PANE}.0) {
		vec3 R = reflect(-V, N);
		base = vec3(0.03, 0.035, 0.04);
		vec3 refl = skyColor(normalize(vec3(R.x, abs(R.y), R.z))) * 0.25;
		gl_FragColor = vec4(toNight(tonemap(base + refl * (0.4 + 0.6 * pow(1.0 - abs(dot(N, V)), 3.0))), 0.45), 1.0);
		return;
	} else if (kind == ${Yt.PLASTER}.0) {
		base = mix(vec3(0.82, 0.76, 0.64), vec3(0.88, 0.83, 0.72), noise(wq * 1.3));
		// a darker dado on the back walls
		if (abs(N.y) < 0.5 && P.y < 1.1) base *= 0.82;
	} else if (kind == ${Yt.BARK}.0) {
		base = mix(vec3(0.30, 0.27, 0.24), vec3(0.45, 0.42, 0.38), noise3(P * vec3(8.0, 2.0, 8.0)));
	} else if (kind == ${Yt.IRON}.0) {
		base = vec3(0.07, 0.07, 0.07);
		spec = 0.4;
	} else if (kind == ${Yt.LEAD}.0) {
		base = mix(vec3(0.30, 0.33, 0.35), vec3(0.40, 0.43, 0.45), noise(P.xy * 0.5));
		// ribs on the domes
		float a = atan(P.z - floor(P.z / 50.0) * 50.0, 1.0);
		base *= 0.9 + 0.1 * step(0.5, fract(a * 6.0));
		far = 1.0;
	} else if (kind == ${Yt.FARBRICK}.0) {
		base = mix(vec3(0.66, 0.46, 0.34), vec3(0.74, 0.54, 0.40), noise(P.xy * 0.3));
		// a row of small arches under the eaves and some dark windows
		far = 1.0;
	} else if (kind == ${Yt.DARK}.0) {
		base = vec3(0.025, 0.022, 0.02);
	}

	// ---------- light ----------

	// in the arcade walks the sky is mostly hidden
	bool walk = (P.x < ${re(tt.westCol)} || P.x > ${re(tt.eastCol)} || P.z > ${re(tt.northCol)}) && P.y < ${re(Z0+.05)} && P.z > ${re(tt.south-.1)} && P.z < ${re(tt.northBack+.5)};
	float skyVis = 0.55 + 0.45 * N.y;
	if (walk) {
		float depth = P.z > ${re(tt.northCol)} ? P.z - ${re(tt.northCol)} : (P.x < ${re(tt.westCol)} ? ${re(tt.westCol)} - P.x : P.x - ${re(tt.eastCol)});
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
}`,_8=`
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
}`,M8=`
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
}`,E8=`
precision highp float;
${l3}
uniform sampler2D leaves;
varying vec2 v_uv;
varying vec3 v_light, v_tint, v_bloom, v_pos;
${b3}
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
}`;function S8(t,e,o){let n=t.texture({data:[[o]],min:"linear",mag:"linear"});return fetch(e).then(r=>{if(!r.ok)throw new Error("Could not load "+e);return r.blob()}).then(r=>createImageBitmap(r,{premultiplyAlpha:"none"})).then(r=>n({data:r,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(r=>console.error(r)),n}Qu.exports=t=>{let e=l8(),o=h8(),n=S8(t,"res/garden/foliage.webp",[0,0,0,0]),r=Date.now(),a=()=>Vu.motion?window.__streetClock!==void 0?window.__streetClock:(Date.now()-r)/1e3:20,s=t({frag:w8,vert:_8,attributes:{position:e.position,normal:e.normal,attr:e.attr},elements:new Uint32Array(e.elements),uniforms:{time:a,gardenDetail:()=>Vu.gardenDetail}}),i=t({frag:E8,vert:M8,attributes:{center:o.center,corner:o.corner,par:o.par,light:o.light,tint:o.tint,bloom:o.bloom},elements:new Uint32Array(o.elements),uniforms:{leaves:n,time:a},cull:{enable:!1},count:()=>Math.floor(o.elements.length*Vu.leafShare/6)*6});return function(){s(),i()}};Qu.exports.layout={G:tt,YARD:$o,SUN:n0}});var S3=mt((UA,E3)=>{"use strict";var k8=tr().GLSL,A8=Ts(),{C:M3}=vr(),_r=M3.x1+.35,ed=M3.zc,Zu=[_r-7.3,2,ed],w3=5.2*Math.PI/180,_3=2100,T8=725,L8=1288,z8=1450,R8=2576,E0=ed-3.2,wh=ed+3.3,Ju=_r+5,td=_r+11.7,nc=3.9,Rl=_r+22.7,bh=40;function N8(){let t=[],e=[],o=[],n=[],r=A8.createBuilder(t,e,o,n),a=(l,p,d,v,u,h)=>{let m=[];for(let g=0;g<=u;g++){m.push([]);for(let b=0;b<=h;b++){let y=[0,1,2].map(w=>l[w]+p[w]*g/u+d[w]*b/h);m[g].push(r.vert(y,v,[0,0,0]))}}for(let g=0;g<u;g++)for(let b=0;b<h;b++)r.tri(m[g][b],m[g+1][b],m[g+1][b+1]),r.tri(m[g][b],m[g+1][b+1],m[g][b+1])},s=wh-E0,i=.7;a([_r-i,0,E0],[Ju-_r+i,0,0],[0,0,s],[0,1,0],6,4);let c=td-Ju,f=Math.hypot(c,nc);return a([Ju,0,E0],[c,nc,0],[0,0,s],[-nc/f,c/f,0],6,4),a([td,nc,E0],[Rl-td,0,0],[0,0,s],[0,1,0],6,4),a([_r-i,0,E0],[Rl-_r+i,0,0],[0,bh,0],[0,0,1],12,12),a([_r-i,0,wh],[Rl-_r+i,0,0],[0,bh,0],[0,0,-1],12,12),a([Rl,0,E0],[0,bh,0],[0,0,s],[-1,0,0],8,4),a([_r-i,bh,E0],[Rl-_r+i,0,0],[0,0,s],[0,-1,0],6,4),{position:t,normal:e,elements:o,attr:n}}var $r=t=>t.toFixed(5),yh=[[_r+3.4,3.7,E0+.01,1],[_r+8.6,4.1,wh-.01,-1],[_r+14.8,nc+3.3,E0+.01,1],[_r+19.6,nc+3.6,wh-.01,-1]],C8=`
precision highp float;
${k8}
uniform sampler2D photo;
uniform float time;
varying vec3 v_pos;
varying vec3 v_normal;
const int NLAMP = ${yh.length};
vec4 LAMP[NLAMP];

void main() {
	${yh.map((t,e)=>`LAMP[${e}] = vec4(${$r(t[0])}, ${$r(t[1])}, ${$r(t[2])}, ${$r(t[3])});`).join(`
	`)}
	vec3 d = v_pos - vec3(${$r(Zu[0])}, ${$r(Zu[1])}, ${$r(Zu[2])});
	float c = ${$r(Math.cos(w3))}, s = ${$r(Math.sin(w3))};
	float fw = d.x * c + d.y * s;
	float up = -d.x * s + d.y * c;
	fw = max(fw, 0.05);
	vec2 px = vec2(${$r(T8)} + ${$r(_3)} * d.z / fw, ${$r(L8)} - ${$r(_3)} * up / fw);
	vec2 uv = px / vec2(${$r(z8)}, ${$r(R8)});
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
	for (int i = 0; i < ${yh.length}; i++) {
		vec4 L = LAMP[i];                       // x, y, z, side (+1 left wall, -1 right)
		vec3 d = L.xyz - v_pos;
		float dd = dot(d, d);
		float fl = 0.92 + 0.05 * sin(time * 7.3 + float(i) * 2.1) + 0.03 * sin(time * 17.0 + float(i));
		// the wall it hangs on is lit across, the paving from above
		float face = v_normal.y > 0.5 ? max(normalize(d).y, 0.0) : 0.35 + 0.65 * max(dot(v_normal, normalize(d)), 0.0);
		lit += albedo * vec3(1.0, 0.62, 0.30) * face * fl * lampK * 3.2 / (0.6 + dd * 0.45);
	}
	gl_FragColor = vec4(lit, 1.0);
}`,O8=`
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
}`;E3.exports=t=>{let e=N8(),o=t.texture({data:[[[120,105,85]]],min:"linear",mag:"linear"});fetch("res/florence/photo.jpg").then(i=>{if(!i.ok)throw new Error("Could not load the Florence photo");return i.blob()}).then(i=>createImageBitmap(i)).then(i=>o({data:i,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(i=>console.error(i));let n=t({frag:C8,vert:O8,attributes:{position:e.position,normal:e.normal},elements:new Uint32Array(e.elements),uniforms:{photo:o},cull:{enable:!1}}),r={pos:[],nrm:[],k:[],idx:[]},a=(i,c,f)=>{let[l,p,d]=i,v=[[[1,0,0],[0,1,0],[0,0,1]],[[-1,0,0],[0,1,0],[0,0,-1]],[[0,0,1],[0,1,0],[-1,0,0]],[[0,0,-1],[0,1,0],[1,0,0]],[[0,1,0],[0,0,1],[1,0,0]],[[0,-1,0],[0,0,1],[-1,0,0]]];for(let[u,h,m]of v){let g=r.pos.length/3;for(let[b,y]of[[-1,-1],[1,-1],[1,1],[-1,1]])r.pos.push(l+u[0]*c[0]+h[0]*b*c[0]+m[0]*y*c[0],p+u[1]*c[1]+h[1]*b*c[1]+m[1]*y*c[1],d+u[2]*c[2]+h[2]*b*c[2]+m[2]*y*c[2]),r.nrm.push(...u),r.k.push(f);r.idx.push(g,g+1,g+2,g,g+2,g+3)}};for(let i of yh){let c=i[3],f=i[2]+c*.42;a([i[0],i[1],f],[.11,.17,.11],1);for(let l of[-1,1])for(let p of[-1,1])a([i[0]+l*.11,i[1],f+p*.11],[.014,.18,.014],0);a([i[0],i[1]+.2,f],[.15,.03,.15],0),a([i[0],i[1]+.27,f],[.05,.05,.05],0),a([i[0],i[1]-.19,f],[.09,.025,.09],0),a([i[0],i[1]+.34,i[2]+c*.21],[.015,.015,.21],0),a([i[0],i[1]+.15,i[2]+c*.03],[.04,.24,.03],0)}let s=t({vert:`
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
		}`,attributes:{position:r.pos,normal:r.nrm,k:r.k},elements:new Uint16Array(r.idx),cull:{enable:!1}});return function(){n(),s()}}});var z3=mt((jA,L3)=>{"use strict";var P8=tr().GLSL,{A:Mh,BENCH:nd,SHAFT:od,TREE:Nl,oculusGLSL:I8}=_a(),$8=ba(),_h=Nl.sxz,k3=Nl.sy,A3=Nl.yaw;function F8(t){let e=new DataView(t),o=e.getUint32(4,!0),n=e.getUint32(8,!0),r=e.getUint32(12,!0),a=[0,1,2].map(d=>e.getFloat32(16+d*4,!0)),s=[0,1,2].map(d=>e.getFloat32(28+d*4,!0)),i=40,c=new Uint16Array(t,i,o*3);i+=o*6;let f=new Uint16Array(t,i,o*2);i+=o*4;let l=new Int8Array(t,i,o*3);i+=o*3,i=i+3&-4;let p=new Uint32Array(t,i,r);return{nV:o,nWood:n,nI:r,mn:a,sz:s,pos:c,uv:f,nrm:l,idx:p}}function D8(t){let e=new Float32Array(t.nV*3),o=new Float32Array(t.nV*3),n=new Float32Array(t.nV*2),r=new Float32Array(t.nV),a=Math.cos(A3),s=Math.sin(A3);for(let i=0;i<t.nV;i++){let c=(t.mn[0]+t.pos[i*3]/65535*t.sz[0])*_h,f=(t.mn[1]+t.pos[i*3+1]/65535*t.sz[1])*k3,l=(t.mn[2]+t.pos[i*3+2]/65535*t.sz[2])*_h;e[i*3]=Mh.cx+a*c+s*l,e[i*3+1]=nd.soil+.02+f,e[i*3+2]=Mh.zc-s*c+a*l;let p=t.nrm[i*3]/127/_h,d=t.nrm[i*3+1]/127/k3,v=t.nrm[i*3+2]/127/_h,u=Math.hypot(p,d,v)||1;p/=u,d/=u,v/=u,o[i*3]=a*p+s*v,o[i*3+1]=d,o[i*3+2]=-s*p+a*v,n[i*2]=t.uv[i*2]/65535,n[i*2+1]=t.uv[i*2+1]/65535,r[i]=i>=t.nWood?1:0}return{position:e,normal:o,uv:n,leaf:r,elements:t.idx}}function T3(t,e,o,n){let r=t.texture({data:[[n]],min:"linear",mag:"linear"});return fetch(e).then(a=>{if(!a.ok)throw new Error("Could not load "+e);return a.blob()}).then(a=>createImageBitmap(a,{premultiplyAlpha:"none"}).catch(()=>new Promise((s,i)=>{let c=new Image;c.onload=()=>s(c),c.onerror=i,c.src=URL.createObjectURL(a)}))).then(a=>r({data:a,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",...o})).catch(a=>console.error(a)),r}var nr=t=>t.toFixed(4),rc=Nl.crownC,ac=Nl.crownR,q8=`
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

const vec3 SHAFT = vec3(${nr(od[0])}, ${nr(od[1])}, ${nr(od[2])});

void main() {
	vec3 p = position;
	// the air in the court is never quite still. The whole tree leans
	// with it, slowly, more the higher and the further out on a limb
	// (wood and leaves together, so every leaf stays on its twig) ...
	float h = max(p.y - 1.2, 0.0);
	vec2 out2 = p.xz - vec2(${nr(Mh.cx)}, ${nr(Mh.zc)});
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
	vec3 cc = vec3(${nr(rc[0])}, ${nr(rc[1])}, ${nr(rc[2])});
	vec3 cr = vec3(${nr(ac[0])}, ${nr(ac[1])}, ${nr(ac[2])});
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
}`,ts=G0(),G8=`
precision highp float;
${P8}
uniform float time;
${ts.lanternGLSL(ts.TREE_LANTERN)}
const vec3 LANTERN_POS = vec3(${ts.LANTERNS[ts.TREE_LANTERN[0]].x.toFixed(3)}, ${ts.LANTERNS[ts.TREE_LANTERN[0]].y.toFixed(3)}, ${ts.LANTERNS[ts.TREE_LANTERN[0]].z.toFixed(3)});
uniform sampler2D leaves, bark;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_leaf, v_shade;
varying vec3 v_eye;

${I8()}

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
	vec3 rel = (v_pos - vec3(${nr(rc[0])}, ${nr(rc[1])}, ${nr(rc[2])})) / vec3(${nr(ac[0])}, ${nr(ac[1])}, ${nr(ac[2])});
	float outer = clamp(length(rel), 0.0, 1.0);
	float ao = mix(0.38, 1.0, outer * outer) * (0.75 + 0.25 * smoothstep(0.4, 2.0, v_pos.y));
	// and the trunk darkens where it meets the soil
	ao *= 0.6 + 0.4 * smoothstep(${nr(nd.soil)}, ${nr(nd.soil+.5)}, v_pos.y);

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
}`;L3.exports=t=>{let e=null,o=T3(t,"res/tree/leaves.webp",{wrapS:"clamp",wrapT:"clamp"},[60,80,40,0]),n=T3(t,"res/tree/bark.jpg",{wrapS:"repeat",wrapT:"repeat"},[90,80,70]),r=Date.now();return fetch("res/tree.bin").then(a=>{if(!a.ok)throw new Error("Could not load the tree");return a.arrayBuffer()}).then(a=>{let s=D8(F8(a));e=t({vert:q8,frag:G8,attributes:{position:s.position,normal:s.normal,uv:s.uv,leaf:s.leaf},elements:s.elements,uniforms:{leaves:o,bark:n,time:()=>$8.motion?typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-r)/1e3:0},cull:{enable:!1}})}).catch(a=>console.error(a)),function(){e&&e()}}});var Ah=mt((WA,O3)=>{"use strict";var sc=U0(),H8="res/audio/go-tomorrow.mp3",B8="res/audio/go-tomorrow.json",N3="gallery-sound",Eh=[sc.PIANO.x,1,sc.PIANO.z],U8=sc.R,Kr=!0;try{localStorage.getItem(N3)==="off"&&(Kr=!1)}catch(t){}var Tn=null,gr=null,Cl=null,Ol=null,es=null,S0=null,Us=!1,Sh=null,R3=[],j8=(typeof performance!="undefined"?performance.now():0)/1e3;function W8(t){let e=Math.floor(t.sampleRate*2.6),o=t.createBuffer(2,e,t.sampleRate),n=12345,r=()=>(n=n*16807%2147483647,n/10737418235e-1-1);for(let a=0;a<2;a++){let s=o.getChannelData(a),i=0;for(let c=0;c<e;c++){let f=c/t.sampleRate,l=.25+.6*Math.exp(-f*2.2);i+=(r()-i)*l,s[c]=i*Math.pow(1-c/e,2.2)*Math.exp(-f*1.5)*(f<.012?f/.012:1)}}return o}function V8(){if(Tn)return;Tn=new Audio,Tn.src=H8,Tn.loop=!0,Tn.preload="auto",Tn.crossOrigin="anonymous";let t=window.AudioContext||window.webkitAudioContext;if(!t){Tn.volume=.2;return}try{gr=new t;let e=gr.createMediaElementSource(Tn);es=gr.createBiquadFilter(),es.type="lowpass",es.frequency.value=1500,es.Q.value=.4,Cl=gr.createGain(),Cl.gain.value=0,Ol=gr.createGain(),Ol.gain.value=0;let o=gr.createConvolver();o.buffer=W8(gr),S0=gr.createGain(),S0.gain.value=Kr?1:0,e.connect(es),es.connect(Cl),Cl.connect(S0),es.connect(o),o.connect(Ol),Ol.connect(S0),S0.connect(gr.destination)}catch(e){gr=null,Tn.volume=.2}}function C3(){if(Us||!Kr)return;V8();let t=()=>Tn.play().then(()=>{Us=!0}).catch(()=>{});gr&&gr.state==="suspended"?gr.resume().then(t,t):t()}typeof window!="undefined"&&(["pointerdown","pointerup","touchend","keydown","click"].forEach(t=>window.addEventListener(t,C3,{capture:!0,passive:!0})),document.addEventListener("visibilitychange",()=>{!Tn||!Us||(document.hidden?Tn.pause():Kr&&Tn.play().catch(()=>{}))}),fetch(B8).then(t=>t.ok?t.json():null).then(t=>{if(!t)return;let e=o=>{let n=o.map(s=>s[2]).sort((s,i)=>s-i),r=n[Math.floor(n.length*.03)]||0,a=n[Math.floor(n.length*.97)]||1;return o.map(s=>({t:s[0],w:s[1],x:Math.max(0,Math.min(1,(s[2]-r)/Math.max(a-r,.001)))}))};Sh={left:e(t.l),right:e(t.r),level:t.e,dur:t.d}}).catch(()=>{}));var kh={AT:Eh,listen(t){if(!gr||!Us)return;let e=t[0]-Eh[0],o=t[2]-Eh[2],n=Math.hypot(e,o,(t[1]-Eh[1])*.5),r=Math.hypot(t[0]-sc.C.x,t[2]-sc.C.z)<U8+.4||t[0]<-.2&&Math.abs(t[2]-sc.C.z)<4,a,s,i;if(r){let f=Math.max(0,Math.min(1,(n-1.2)/5));a=1-.3*f,s=.22+.16*f,i=16e3}else{let f=5.5/Math.max(n,5.5),l=t[0]>14.2&&t[2]<12?.6:1;a=.5*Math.pow(f,1.5)*l,s=.34*Math.pow(f,.95)*l,i=(650+9e3*Math.pow(f,1.3))*(l<1?.7:1)}let c=gr.currentTime;Cl.gain.setTargetAtTime(a,c,.35),Ol.gain.setTargetAtTime(s,c,.35),es.frequency.setTargetAtTime(i,c,.35)},time(){let t=Sh&&Sh.dur||158;return Tn&&Us&&!Tn.paused||Tn&&Us?Tn.currentTime%t:((performance.now()/1e3-j8)%t+t)%t},get cues(){return Sh},get on(){return Kr},set(t){Kr=!!t;try{localStorage.setItem(N3,Kr?"on":"off")}catch(e){}Kr?(C3(),Tn&&Us&&Tn.play().catch(()=>{}),S0&&S0.gain.setTargetAtTime(1,gr.currentTime,.2)):S0?S0.gain.setTargetAtTime(0,gr.currentTime,.15):Tn&&Tn.pause(),R3.forEach(e=>e(Kr))},toggle(){kh.set(!Kr)},onChange(t){R3.push(t)},button(t){let e='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="M15.5 9a4.2 4.2 0 0 1 0 6M18 6.5a7.8 7.8 0 0 1 0 11"/></svg>',o='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="M16 9.5l5 5M21 9.5l-5 5"/></svg>',n=document.createElement("button");n.type="button",n.className=t+" sound-toggle";let r=()=>{n.innerHTML=Kr?e:o,n.setAttribute("aria-label",Kr?"Turn the music off":"Turn the music on"),n.title=Kr?"Music on":"Music off",n.setAttribute("aria-pressed",Kr?"true":"false")};return r(),kh.onChange(r),["mousedown","pointerdown"].forEach(a=>n.addEventListener(a,s=>s.stopPropagation())),n.addEventListener("click",a=>{a.stopPropagation(),kh.toggle()}),n}};O3.exports=kh});var j3=mt((VA,cd)=>{"use strict";var sd=tr().GLSL,{A:P3,BENCH:G3,oculusGLSL:H3}=_a(),I3=ba(),B3=U0(),$3=Ah(),X8=1.74,Y8=1.877,Mr=X8/Y8,Ws={x:P3.cx-1.22,z:P3.zc+.02,hipY:G3.seat+.115},Zo=(t,e)=>[t[3]*e[0]+t[0]*e[3]+t[1]*e[2]-t[2]*e[1],t[3]*e[1]-t[0]*e[2]+t[1]*e[3]+t[2]*e[0],t[3]*e[2]+t[0]*e[1]-t[1]*e[0]+t[2]*e[3],t[3]*e[3]-t[0]*e[0]-t[1]*e[1]-t[2]*e[2]],Ba=t=>[-t[0],-t[1],-t[2],t[3]],ns=(t,e)=>{let o=Math.hypot(t[0],t[1],t[2])||1,n=Math.sin(e/2);return[t[0]/o*n,t[1]/o*n,t[2]/o*n,Math.cos(e/2)]},Th=(t,e,o)=>Zo(ns([0,0,1],o*Math.PI/180),Zo(ns([0,1,0],e*Math.PI/180),ns([1,0,0],t*Math.PI/180))),id=t=>{let e=Math.hypot(...t)||1;return t.map(o=>o/e)},a0=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],Il=(t,e)=>[t[0]+e[0],t[1]+e[1],t[2]+e[2]],os=(t,e)=>[t[0]*e,t[1]*e,t[2]*e],ad=(t,e)=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2],zh=t=>Math.hypot(t[0],t[1],t[2]),Pl=t=>{let e=zh(t)||1;return[t[0]/e,t[1]/e,t[2]/e]},Nh=(t,e)=>[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]],K8=(t,e)=>{let o=[t[0],t[1],t[2]],n=os(Nh(o,e),2);return Il(Il(e,os(n,t[3])),Nh(o,n))},Q8=(t,e)=>{let o=Nh(t,e),n=1+ad(t,e);return n<1e-6?[0,0,1,0]:id([o[0],o[1],o[2],n])};function ca(t,e,o){let[n,r,a,s]=e,i=n*n,c=r*r,f=a*a,l=n*r,p=n*a,d=r*a,v=s*n,u=s*r,h=s*a;return[(1-2*(c+f))*o[0],2*(l+h)*o[0],2*(p-u)*o[0],0,2*(l-h)*o[1],(1-2*(i+f))*o[1],2*(d+v)*o[1],0,2*(p+u)*o[2],2*(d-v)*o[2],(1-2*(i+c))*o[2],0,t[0],t[1],t[2],1]}function jn(t,e){let o=new Array(16);for(let n=0;n<4;n++)for(let r=0;r<4;r++)o[n*4+r]=t[r]*e[n*4]+t[4+r]*e[n*4+1]+t[8+r]*e[n*4+2]+t[12+r]*e[n*4+3];return o}function rd(t){let e=Math.hypot(t[0],t[1],t[2]),o=Math.hypot(t[4],t[5],t[6]),n=Math.hypot(t[8],t[9],t[10]),r=t[0]/e,a=t[1]/e,s=t[2]/e,i=t[4]/o,c=t[5]/o,f=t[6]/o,l=t[8]/n,p=t[9]/n,d=t[10]/n,v=r+c+d,u;if(v>0){let h=Math.sqrt(v+1)*2;u=[(f-p)/h,(l-s)/h,(a-i)/h,h/4]}else if(r>c&&r>d){let h=Math.sqrt(1+r-c-d)*2;u=[h/4,(i+a)/h,(l+s)/h,(f-p)/h]}else if(c>d){let h=Math.sqrt(1+c-r-d)*2;u=[(i+a)/h,h/4,(p+f)/h,(l-s)/h]}else{let h=Math.sqrt(1+d-r-c)*2;u=[(l+s)/h,(p+f)/h,h/4,(a-i)/h]}return id(u)}var Rh={LeftUpLeg:[-62,10,0],LeftLeg:[122,0,0],LeftFoot:[30,0,0],RightUpLeg:[0,-3,-2],RightLeg:[4,0,0],RightFoot:[35,-12,0],Neck:[10,0,0],Head:[6,0,0],LeftShoulder:[0,0,6],LeftArm:[-112.4,3.4,62.5],LeftForeArm:[0,-122.6,0],LeftHand:[0,0,-10],RightShoulder:[0,0,0],RightArm:[0,78,-8],RightForeArm:[0,14,0],RightHand:[0,0,0]};for(let t of["Left","Right"]){let e=t==="Left"?-1:1,o=t==="Left"?1:.35;["Index","Middle","Ring","Pinky"].forEach((n,r)=>{Rh[t+"Hand"+n+"1"]=[0,0,e*(18+r*6)*o],Rh[t+"Hand"+n+"2"]=[0,0,e*(26+r*6)*o],Rh[t+"Hand"+n+"3"]=[0,0,e*16*o]})}function js(t,e,o){let n=t-e;return n-=Math.round(n),Math.exp(-(n/o)*(n/o))}function F3(t){let e=9+20*Math.cos(2*Math.PI*t),o=4+13*js(t,.14,.07)+57*js(t,.72,.12),n=5*js(t,.06,.04)-9*js(t,.42,.12)+17*js(t,.62,.05)-3*js(t,.85,.1),r=-26*js(t,.58,.06);return{hip:e,knee:o,ankle:n,toe:r}}function Z8(t){let e=(t%1+1)%1,o=F3(e),n=F3(e+.5),r=Math.cos(2*Math.PI*e),a=Math.sin(2*Math.PI*e);return{swing:{LeftArm:[16*r,0,0],RightArm:[-16*r,0,0],LeftForeArm:[0,-14-8*Math.max(0,-r),0],RightForeArm:[0,14+8*Math.max(0,r),0]},pose:{Hips:[0,5*a,1.5*Math.cos(4*Math.PI*e)],Spine1:[3,-4*a,0],LeftUpLeg:[-o.hip,0,0],LeftLeg:[o.knee,0,0],LeftFoot:[o.ankle,0,0],LeftToeBase:[o.toe,0,0],RightUpLeg:[-n.hip,0,0],RightLeg:[n.knee,0,0],RightFoot:[n.ankle,0,0],RightToeBase:[n.toe,0,0],LeftArm:[0,0,-78],RightArm:[0,0,78],LeftHand:[0,0,-8],RightHand:[0,0,8]},sway:.022*r}}var D3=`
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
}`,Ch=G0(),q3=`#extension GL_OES_standard_derivatives : enable
precision highp float;
${sd}
uniform float time;
${B3.roomGLSL()}
${Ch.lanternGLSL(Ch.TREE_LANTERN)}
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
${H3()}
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
}`;function J8(t,e){let o=t.texture({data:[[[120,100,90,255]]],min:"linear",mag:"linear"});return fetch(e).then(n=>{if(!n.ok)throw new Error("Could not load "+e);return n.blob()}).then(n=>createImageBitmap(n,{premultiplyAlpha:"none"}).catch(()=>new Promise((r,a)=>{let s=new Image;s.onload=()=>r(s),s.onerror=a,s.src=URL.createObjectURL(n)}))).then(n=>o({data:n,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(n=>console.error(n)),o}var U3={w:.13,h:.2},Lh=t=>.011*(1-Math.pow(1-t,3));function tE(){let t=[],e=[],o=[],n=[],r=[],a=(h,m,g,b,y,w,_)=>{let M=t.length/3;[h,m,g,b].forEach((T,I)=>{t.push(...T),e.push(...y),o.push(..._[I]),n.push(w)}),r.push(M,M+1,M+2,M,M+2,M+3)},{w:s,h:i}=U3,c=i/2,f=[[0,1],[1,1],[1,0],[0,0]],l=-.006,p=s+.001,d=c+.001;a([0,l,-d],[p,l,-d],[p,l,d],[0,l,d],[0,-1,0],1,[[0,1],[1,1],[1,0],[0,0]]),a([0,l+.001,-d],[0,l+.001,d],[p,l+.001,d],[p,l+.001,-d],[0,1,0],2,f),a([-p,l,-d],[0,l,-d],[0,l,d],[-p,l,d],[0,-1,0],2,f),a([-p,l+.001,-d],[-p,l+.001,d],[0,l+.001,d],[0,l+.001,-d],[0,1,0],2,f);let v=8;for(let h of[1,-1]){for(let g=0;g<v;g++){let b=g/v,y=(g+1)/v,w=(.002+b*(s-.002))*h,_=(.002+y*(s-.002))*h,M=Lh(b),T=Lh(y),I=h>0?b:1-b,N=h>0?y:1-y,B=1,D=-(T-M)/(_-w);a([w,M,-c],[_,T,-c],[_,T,c],[w,M,c],[D,B,0],3,[[I,1],[N,1],[N,0],[I,0]]),a([w,l+.001,c],[_,l+.001,c],[_,T,c],[w,M,c],[0,0,1],4,f),a([w,M,-c],[_,T,-c],[_,l+.001,-c],[w,l+.001,-c],[0,0,-1],4,f)}let m=s*h;a([m,l+.001,-c],[m,Lh(1),-c],[m,Lh(1),c],[m,l+.001,c],[h,0,0],4,f)}let u=10;for(let h=0;h<u;h++){let m=h/u,g=(h+1)/u,b=t.length/3;for(let[y,w]of[[m,-c],[g,-c],[g,c],[m,c]])t.push(y,0,w),e.push(0,1,0),o.push(y,(w+c)/i),n.push(5);r.push(b,b+1,b+2,b,b+2,b+3)}return{pos:t,nrm:e,uv:o,kind:n,idx:r}}function eE(){if(typeof document=="undefined")return null;let t=document.createElement("canvas");t.width=512,t.height=768;let e=t.getContext("2d");e.fillStyle="#ebe5d8",e.fillRect(0,0,512,768);let o=7,n=()=>(o=o*16807%2147483647,o/2147483647),r=(s,i,c,f,l,p,d)=>{for(let v=0;v<p;v++){let u=s+(n()-.5)*c*2,h=i+(n()-.5)*f*2,m=20+n()*60,g=e.createRadialGradient(u,h,0,u,h,m);g.addColorStop(0,`rgba(${l},${d})`),g.addColorStop(1,`rgba(${l},0)`),e.fillStyle=g,e.fillRect(u-m,h-m,m*2,m*2)}},a=e.createRadialGradient(236,280,10,256,300,125);a.addColorStop(0,"#3d4866"),a.addColorStop(1,"#232a3d"),e.fillStyle=a,e.beginPath(),e.arc(256,300,122,0,Math.PI*2),e.fill(),e.fillStyle="#b8873f",e.beginPath(),e.moveTo(64,452);for(let s=64;s<=448;s+=16)e.lineTo(s,446+n()*4);for(let s=448;s>=64;s-=16)e.lineTo(s,466+n()*4);e.fill(),e.strokeStyle="#2b2f3a",e.lineCap="round",[[120,392,500,5],[160,352,530,4],[205,307,558,3]].forEach(([s,i,c,f])=>{e.lineWidth=f,e.beginPath(),e.moveTo(s,c),e.lineTo(i,c),e.stroke()});for(let s=0;s<9e3;s++)e.fillStyle=`rgba(90,80,60,${n()*.05})`,e.fillRect(n()*512,n()*768,1,1);return t}var oE=`
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
		float r = u * ${U3.w.toFixed(3)};
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
}`,nE=`
precision highp float;
${sd}
uniform float time;
${Ch.lanternGLSL(Ch.TREE_LANTERN)}
uniform sampler2D cover;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_kind;
${H3()}
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
}`;function rE(){let t=[],e=[],o=[],n=[],r=[],a=[.36,.11,.07],s=[.1,.07,.05],i=[.78,.76,.72],c=[.55,.41,.26],f=[.8,.55,.22],l=[[0,-.15,f,2],[.0012,-.147,f,2],[.004,-.138,f,2],[.0058,-.125,c,2],[.0064,-.112,c,2],[.006,-.104,c,2],[.0066,-.102,i,1],[.0066,-.08,i,1],[.0062,-.074,i,1],[.0068,-.072,i,1],[.007,-.066,i,1],[.0058,-.064,a,0],[.0062,-.04,a,0],[.0058,0,a,0],[.0046,.06,a,0],[.0036,.11,a,0],[.003,.13,s,0],[.0026,.136,s,0],[0,.139,s,0]],p=16;for(let d=0;d<l.length;d++){let[v,u,h,m]=l[d],g=m===2?.45:1;for(let b=0;b<=p;b++){let y=b/p*Math.PI*2;t.push(Math.cos(y)*v,u,Math.sin(y)*v*g);let w=Math.max(d-1,0),_=Math.min(d+1,l.length-1),M=l[_][0]-l[w][0],T=l[_][1]-l[w][1],I=Math.hypot(M,T)||1;e.push(Math.cos(y)*T/I,-M/I,Math.sin(y)*T/I/g),o.push(...h),n.push(m)}}for(let d=0;d<l.length-1;d++)for(let v=0;v<p;v++){let u=d*(p+1)+v,h=u+p+1;r.push(u,h,u+1,u+1,h,h+1)}return{pos:t,nrm:e,col:o,mat:n,idx:r}}var aE=`
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
}`,sE=`
precision highp float;
${sd}
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
}`,iE=`
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
}`,cE=`
precision highp float;
uniform float pulse;
varying vec2 v_c;
void main() {
	float d = length(v_c);
	float g = exp(-d * d * 6.0) * 0.10 + exp(-d * d * 30.0) * 0.08;
	gl_FragColor = vec4(vec3(1.0, 0.80, 0.45) * g * (0.75 + 0.25 * pulse), 1.0);
}`;cd.exports=t=>{let e="res/avatar/",o=null,n=Date.now(),r=()=>typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-n)/1e3,a={glowPos:[Ws.x,1.9,Ws.z],glow:0};Promise.all([fetch(e+"avatar.json").then(N=>N.json()),fetch(e+"avatar.bin").then(N=>N.arrayBuffer())]).then(([N,B])=>{o=f(N,B)}).catch(N=>console.error(N));let s=null;Promise.all([fetch(e+"motion.json").then(N=>N.ok?N.json():null),fetch(e+"motion.bin").then(N=>N.ok?N.arrayBuffer():null)]).then(([N,B])=>{if(!N||!B)return;let D={};for(let K in N.clips){let q=N.clips[K],X=q.bones.length,pt=new Float32Array(B,q.mean,X*4),Ft={};q.bones.forEach((Lt,gt)=>{Ft[Lt]=[pt[gt*4],pt[gt*4+1],pt[gt*4+2],pt[gt*4+3]]}),D[K]=Object.assign({},q,{Q:new Int16Array(B,q.q,q.frames*X*4),H:new Float32Array(B,q.hips,q.frames*3),meanQ:Ft})}s=D}).catch(()=>{});function i(N,B){let D=N.frames,K=N.bones.length,q=(B%D+D)%D,X=Math.floor(q)%D,pt=(X+1)%D,Ft=q-Math.floor(q),Lt={};for(let Wt=0;Wt<K;Wt++){let ze=(X*K+Wt)*4,Se=(pt*K+Wt)*4,Xe=N.Q[ze],_e=N.Q[ze+1],fo=N.Q[ze+2],Eo=N.Q[ze+3],Ko=N.Q[Se],Zt=N.Q[Se+1],ge=N.Q[Se+2],Ce=N.Q[Se+3];Xe*Ko+_e*Zt+fo*ge+Eo*Ce<0&&(Ko=-Ko,Zt=-Zt,ge=-ge,Ce=-Ce),Lt[N.bones[Wt]]=id([Xe+(Ko-Xe)*Ft,_e+(Zt-_e)*Ft,fo+(ge-fo)*Ft,Eo+(Ce-Eo)*Ft])}let gt=X*3,ct=pt*3;return{q:Lt,hips:[N.H[gt]+(N.H[ct]-N.H[gt])*Ft,N.H[gt+1]+(N.H[ct+1]-N.H[gt+1])*Ft,N.H[gt+2]+(N.H[ct+2]-N.H[gt+2])*Ft]}}let c=t.texture({data:[[[255,255,255,255]]]});function f(N,B){let D=(Z,Ot)=>new Float32Array(B,Z,Ot),K=N.bones,q=K.length,X={};K.forEach((Z,Ot)=>{X[Z.name]=Ot});let pt=[];for(let Z=0;Z<q;Z++)pt.push(Array.from(D(N.ibm+Z*64,16)));let Ft=K.map(Z=>ca(Z.t,Z.r,Z.s)),Lt=[];for(let Z=0;Z<q;Z++){let Ot=K[Z].parent;Lt[Z]=Ot<0?Ft[Z]:jn(Lt[Ot],Ft[Z])}let gt=Lt.map(rd),ct=N.meshes.map(Z=>{let Ot=D(Z.pos,Z.n*3),Dt=D(Z.nrm,Z.n*3),Nt=D(Z.uv,Z.n*2),le=new Uint8Array(B,Z.jnt,Z.n*4),Ae=D(Z.wgt,Z.n*4),Me=new Uint16Array(B,Z.idx,Z.ni),pe={};for(let ye in Z.morphs){let Go=Z.morphs[ye];pe[ye]={idx:new Uint16Array(B,Go.idx,Go.n),d:D(Go.d,Go.n*3)}}let $e=new Float32Array(Z.n*3),be=new Float32Array(Z.n*3),We=new Float32Array(Z.n*3),ke=t.buffer({data:$e,usage:"dynamic"}),Te=t.buffer({data:be,usage:"dynamic"}),Ye=/avaturn_hair/.test(Z.name),ve=/EyeAO|Eyelash/.test(Z.name),io=/Body|Head/.test(Z.name),Ro=Z.kind||0;return{m:Z,pos:Ot,nrm:Dt,uv:Nt,jnt:le,wgt:Ae,idx:Me,morphs:pe,outP:$e,outN:be,work:We,pb:ke,nbuf:Te,tex:Z.tex?J8(t,e+Z.tex):c,kind:Ro,alphaScale:/EyeAO/.test(Z.name)?.25:1,blend:Z.blend||Ye,alphaCut:Ye?.35:ve?.02:0,skin:io?1:0}}),Wt=t({vert:D3,frag:q3,attributes:{position:t.prop("pb"),normal:t.prop("nb"),uv:t.prop("uv")},elements:t.prop("el"),uniforms:{tex:t.prop("tex"),alphaCut:t.prop("alphaCut"),skin:t.prop("skin"),kind:t.prop("kind"),alphaScale:t.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow,boothLamp:()=>M&&!T?M.lamp:[0,0,0,0],court:()=>M||T?0:1,candle:()=>T?1:0},cull:{enable:!1}}),ze=t({vert:D3,frag:q3,attributes:{position:t.prop("pb"),normal:t.prop("nb"),uv:t.prop("uv")},elements:t.prop("el"),uniforms:{tex:t.prop("tex"),alphaCut:t.prop("alphaCut"),skin:t.prop("skin"),kind:t.prop("kind"),alphaScale:t.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow,boothLamp:()=>M&&!T?M.lamp:[0,0,0,0],court:()=>M||T?0:1,candle:()=>T?1:0},cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"one minus src alpha"}}}),Se=.3;for(let Z of ct)if(Z.uvBuf=t.buffer(Z.uv),/Body/.test(Z.m.name)){let Ot=[],Dt=[];for(let Nt=0;Nt<Z.idx.length;Nt+=3){let le=Z.idx[Nt],Ae=Z.idx[Nt+1],Me=Z.idx[Nt+2];(Z.pos[le*3+1]<Se&&Z.pos[Ae*3+1]<Se&&Z.pos[Me*3+1]<Se?Dt:Ot).push(le,Ae,Me)}Z.el=t.elements({data:new Uint16Array(Ot),type:"uint16"}),Dt.length&&(Z.sockEl=t.elements({data:new Uint16Array(Dt),type:"uint16"}))}else Z.el=t.elements({data:Z.idx,type:"uint16"});let Xe=Lt[X.Hips],_e=ns([1,0,0],-Math.PI/2),fo=jn(ca([Ws.x-Xe[12]*Mr,Ws.hipY-Xe[14]*Mr,Ws.z+Xe[13]*Mr],_e,[1,1,1]),ca([0,0,0],[0,0,0,1],[Mr,Mr,Mr])),Eo=new Array(q),Ko=-1,Zt=(Z,Ot,Dt)=>jn(ca([Z,0,Ot],ns([0,1,0],Dt),[1,1,1]),ca([0,0,0],[0,0,0,1],[Mr,Mr,Mr])),ge=["LeftFoot","RightFoot","LeftToeBase","RightToeBase"].map(Z=>X[Z]),Ce=ge.map(Z=>Lt[Z][13]*Mr);function no(Z){if(s&&s.walk)return wo(Z);let Ot=Z8(Z.phase),Dt={},Nt=be=>{for(let We in be){let ke=be[We],Te=Th(ke[0],ke[1],ke[2]);Dt[We]=Dt[We]?Zo(Dt[We],Te):Te}};Nt(Ot.swing),Nt(Ot.pose);let le=Math.cos(Z.heading),Ae=-Math.sin(Z.heading),Me=Zt(Z.x+le*Ot.sway,Z.z+Ae*Ot.sway,Z.heading),pe=new Array(q);for(let be=0;be<q;be++){let We=K[be],ke=Ft[be],Te=Dt[We.name];if(Te){let Ye=gt[be],ve=Zo(Ba(Ye),Zo(Te,Ye));ke=ca(We.t,Zo(We.r,ve),We.s)}pe[be]=We.parent<0?jn(Me,ke):jn(pe[We.parent],ke)}let $e=1/0;ge.forEach((be,We)=>{$e=Math.min($e,pe[be][13]-Ce[We])});for(let be=0;be<q;be++)pe[be]=pe[be].slice(),pe[be][13]-=$e,Eo[be]=jn(pe[be],pt[be]);return{blink:0}}function wo(Z){let Ot=s.walk,Dt=i(Ot,(Z.phase+Ot.phase0)*Ot.frames),Nt=Zt(Z.x,Z.z,Z.heading),le=new Array(q),Ae=X.Hips;for(let pe=0;pe<q;pe++){let $e=K[pe],be=Ft[pe],We=Dt.q[$e.name];if(We){let ke=gt[pe],Te=Zo(Ba(ke),Zo(We,ke)),Ye=pe===Ae?[$e.t[0]+Dt.hips[0],$e.t[1]+Dt.hips[1],$e.t[2]+Dt.hips[2]]:$e.t;be=ca(Ye,Zo($e.r,Te),$e.s)}le[pe]=$e.parent<0?jn(Nt,be):jn(le[$e.parent],be)}let Me=1/0;ge.forEach((pe,$e)=>{Me=Math.min(Me,le[pe][13]-Ce[$e])});for(let pe=0;pe<q;pe++)le[pe]=le[pe].slice(),le[pe][13]-=Me,Eo[pe]=jn(le[pe],pt[pe]);return{blink:0}}function Oe(Z,Ot){let Dt=Math.sin(Z*2*Math.PI/4.6),Nt=Math.sin(Z*.37)*.6+Math.sin(Z*.83+1)*.4,le={LeftUpLeg:[-86,-6,0],RightUpLeg:[-84,7,0],LeftLeg:[88,0,0],RightLeg:[82,0,0],LeftFoot:[-4,0,0],RightFoot:[-2,0,0],Spine:[6,0,0],Spine1:[5+Dt*.8,0,0],Spine2:[4+Dt*.6,0,0],Neck:[10,0,0],Head:[12+Nt*2,Nt*2.5,0],LeftArm:[0,0,-72],RightArm:[0,0,72],LeftForeArm:[0,-62,0],RightForeArm:[0,62,0],LeftHand:[0,0,-10],RightHand:[0,0,10]},Ae={};for(let ke in le){let Te=le[ke];Ae[ke]=Th(Te[0],Te[1],Te[2])}let Me=Zt(Ot.x,Ot.z,Ot.heading),pe=new Array(q);for(let ke=0;ke<q;ke++){let Te=K[ke],Ye=Ft[ke],ve=Ae[Te.name];if(ve){let io=gt[ke],Ro=Zo(Ba(io),Zo(ve,io));Ye=ca(Te.t,Zo(Te.r,Ro),Te.s)}pe[ke]=Te.parent<0?jn(Me,Ye):jn(pe[Te.parent],Ye)}let be=pe[X.Hips][13]-(Ot.y+.1);for(let ke=0;ke<q;ke++)pe[ke]=pe[ke].slice(),pe[ke][13]-=be,Eo[ke]=jn(pe[ke],pt[ke]);let We=Z%4.1;return{blink:We<.16?Math.sin(We/.16*Math.PI):0}}let xe=Z=>[Lt[Z][12],Lt[Z][13],Lt[Z][14]],bt=(Z,Ot)=>{let Dt=Pl(Z),Nt=Pl(a0(Ot,os(Dt,ad(Ot,Dt)))),le=Nh(Dt,Nt);return rd([Dt[0],Dt[1],Dt[2],0,Nt[0],Nt[1],Nt[2],0,le[0],le[1],le[2],0,0,0,0,1])},ae={};for(let Z of["Left","Right"]){let Ot=X[Z+"Arm"],Dt=X[Z+"ForeArm"],Nt=X[Z+"Hand"],le=X[Z+"HandMiddle1"];ae[Z]={a:Ot,f:Dt,h:Nt,upper:zh(a0(xe(Dt),xe(Ot)))*Mr,fore:zh(a0(xe(Nt),xe(Dt)))*Mr,dir0:Pl(a0(xe(Dt),xe(Ot))),qf0:bt(a0(xe(Nt),xe(Dt)),[0,1,0]),qh0:bt(a0(xe(le),xe(Nt)),[0,1,0])}}let Pe={};for(let Z of["Left","Right"])Pe[ae[Z].a]={side:Z,part:0},Pe[ae[Z].f]={side:Z,part:1},Pe[ae[Z].h]={side:Z,part:2};function de(Z,Ot,Dt){if(!Z||!Z.length)return{x:.5,lift:0,press:0,finger:1,busy:0};let Nt=0,le=Z.length-1,Ae=-1;for(;Nt<=le;){let Go=Nt+le>>1;Z[Go].t<=Ot?(Ae=Go,Nt=Go+1):le=Go-1}let Me=Z[Z.length-1],pe=Z[0],$e=Ae>=0?Z[Ae]:{t:Me.t-Dt,x:Me.x,w:Me.w},be=Ae+1<Z.length?Z[Ae+1]:{t:pe.t+Dt,x:pe.x,w:pe.w},We=Math.max(.05,be.t-$e.t),ke=Math.min(.14,We*.45),Te=Math.max(0,Math.min(1,(Ot-$e.t-ke)/Math.max(We-ke-.03,.02))),Ye=Te*Te*(3-2*Te),ve=Ot-$e.t,io=(.55+.45*$e.w)*Math.exp(-ve/.11),Ro=be.t-Ot,ye=Ro<.05?(.55+.45*be.w)*(1-Ro/.05):0;return{x:$e.x+(be.x-$e.x)*Ye,lift:Math.sin(Math.PI*Te)*Math.min(.05,.012+We*.03)*(We>2.5?.4:1),press:Math.max(io,ye),finger:ye>io?((Ae+1)*7+3)%4:(Math.max(Ae,0)*7+3)%4,busy:Math.exp(-ve/.9)}}let Kt={lean:0,turn:0,nod:0,pedal:0,last:-1},So=["Index","Middle","Ring","Pinky"];function S(Z){let Ot=B3.PLAY,Dt=$3.cues,Nt=$3.time(),le=Dt&&Dt.dur||158,Ae={Left:de(Dt&&Dt.left,Nt,le),Right:de(Dt&&Dt.right,Nt,le)},Me=.35;if(Dt&&Dt.level&&Dt.level.length){let eo=Nt*8,vo=Math.floor(eo)%Dt.level.length,$n=(vo+1)%Dt.level.length;Me=Dt.level[vo]+(Dt.level[$n]-Dt.level[vo])*(eo-Math.floor(eo))}let pe=Kt.last<0?0:Math.min(.1,Math.max(0,Z-Kt.last));Kt.last=Z;let $e=eo=>Math.min(1,pe*eo);Kt.lean+=(Me-Kt.lean)*$e(1.2),Kt.turn+=(Ae.Right.busy-Ae.Left.busy-Kt.turn)*$e(1.5),Kt.nod+=(Math.max(Ae.Right.press,Ae.Left.press*.7)-Kt.nod)*$e(6),Kt.pedal+=((Ae.Left.busy>.35?1:.15)-Kt.pedal)*$e(5);let be=Math.sin(Z*2*Math.PI/4.6),We=Math.sin(Nt*.41)*.6+Math.sin(Nt*.17+1)*.4,ke={LeftUpLeg:[-80,-9,0],RightUpLeg:[-77,9,0],LeftLeg:[86,0,0],RightLeg:[64,0,0],LeftFoot:[-2,0,0],RightFoot:[12-10*Kt.pedal,0,0],Spine:[9+3.5*Kt.lean+We*1.6,Kt.turn*2.5,-Kt.turn*1.6],Spine1:[7+be*.8+2.5*Kt.lean,Kt.turn*2.5,-Kt.turn*1.2],Spine2:[6+be*.6+We*.8,Kt.turn*1.5,0],Neck:[13+3*Kt.lean,Kt.turn*3,0],Head:[15+Kt.nod*3.5+We*1.5,Kt.turn*5,We*1.5]};for(let eo of["Left","Right"]){let vo=eo==="Left"?-1:1,$n=Ae[eo];So.forEach((j,ht)=>{let Vt=ht===$n.finger?$n.press:$n.press*.2;ke[eo+"Hand"+j+"1"]=[0,0,vo*(20+3*ht+20*Vt)],ke[eo+"Hand"+j+"2"]=[0,0,vo*(26+4*ht-6*Vt)],ke[eo+"Hand"+j+"3"]=[0,0,vo*14]}),ke[eo+"HandThumb1"]=[0,vo*-18,vo*10]}let Te={};for(let eo in ke){let vo=ke[eo];Te[eo]=Th(vo[0],vo[1],vo[2])}let Ye=Lt[X.Hips][13]*Mr,ve=jn(ca([Ot.stoolX,Ot.stoolTop+.1-Ye,Ot.stoolFront+.15],ns([0,1,0],Ot.heading),[1,1,1]),ca([0,0,0],[0,0,0,1],[Mr,Mr,Mr])),io=(Ot.keyX0+Ot.keyX1)/2,Ro={};for(let eo of["Left","Right"]){let vo=Ae[eo],$n=eo==="Left"?io-.4+.33*vo.x:io+.07+.33*vo.x;Ro[eo]=[$n,Ot.keyTop+.062+vo.lift-vo.press*.012,Ot.keyFront+.075]}let ye=new Array(q),Go={},pa=[0,1,0];for(let eo=0;eo<q;eo++){let vo=K[eo],$n=Ft[eo],j=Te[vo.name],ht=Pe[eo];if(ht){let Vt=ae[ht.side];if(ht.part===0){let se=ye[vo.parent],fe=jn(se,Ft[eo]),nn=[fe[12],fe[13],fe[14]],ar=Zo(rd(se),Ba(gt[vo.parent])),kr=a0(Ro[ht.side],nn),rn=zh(kr),br=(Vt.upper+Vt.fore)*.995;rn>br&&(kr=os(kr,br/rn),rn=br);let an=os(kr,1/rn),uo=(Vt.upper*Vt.upper-Vt.fore*Vt.fore+rn*rn)/(2*rn),Kn=Math.sqrt(Math.max(0,Vt.upper*Vt.upper-uo*uo)),Wo=[ht.side==="Left"?-.6:.6,-.8,.3];Wo=Pl(a0(Wo,os(an,ad(Wo,an))));let Fn=Il(nn,Il(os(an,uo),os(Wo,Kn)));Vt.T=Il(nn,kr),Vt.elbow=Fn;let Hr=Pl(a0(Fn,nn)),Br=Zo(Q8(K8(ar,Vt.dir0),Hr),ar);Go[eo]=Br,j=Zo(Ba(ar),Br)}else if(ht.part===1){let se=Zo(bt(a0(Vt.T,Vt.elbow),pa),Ba(Vt.qf0));Go[eo]=se,j=Zo(Ba(Go[vo.parent]),se)}else{let se=Ae[ht.side],fe=Zo(bt([ht.side==="Left"?.12:-.12,-.2-.1*se.press,-1],pa),Ba(Vt.qh0));Go[eo]=fe,j=Zo(Ba(Go[vo.parent]),fe)}}if(j){let Vt=gt[eo],se=Zo(Ba(Vt),Zo(j,Vt));$n=ca(vo.t,Zo(vo.r,se),vo.s)}ye[eo]=vo.parent<0?jn(ve,$n):jn(ye[vo.parent],$n)}for(let eo=0;eo<q;eo++)Eo[eo]=jn(ye[eo],pt[eo]);a.pianist={head:[ye[X.Head][12],ye[X.Head][13],ye[X.Head][14]]};let l0=Z%4.3;return{blink:l0<.16?Math.sin(l0/.16*Math.PI):0}}function so(Z,Ot){if(T)return S(Z);if(M)return Oe(Z,M);if(Ot)return no(Ot);let Dt=Math.sin(Z*2*Math.PI/4.2),Nt=Z%3.7,le=Nt<.16?Math.sin(Nt/.16*Math.PI):0,Ae=Math.sin(Z*.45),Me=Math.sin(Z*.31+.8),pe=Math.max(0,Math.sin(Z*.085)-.75)*4,$e={RightArm:[0,-22*pe,11*Ae],RightForeArm:[0,8+26*pe,0],RightHand:[38*Me,0,6*Math.sin(Z*.7)],LeftUpLeg:[0,0,3.2*Math.sin(Z*.36)],RightFoot:[5*Math.sin(Z*.52+.4),0,0],Head:[0,1.6*Math.sin(Z*.21),0]};["Index","Middle","Ring","Pinky"].forEach((ve,io)=>{let Ro=Math.sin(Z*1.1-io*.5);$e["RightHand"+ve+"1"]=[0,0,8+12*Ro],$e["RightHand"+ve+"2"]=[0,0,6+10*Ro]});let be={},We=(ve,io)=>{for(let Ro in ve){let ye=ve[Ro],Go=Th(ye[0]*io,ye[1]*io,ye[2]*io);be[Ro]=be[Ro]?Zo(be[Ro],Go):Go}};We(Rh,1),We({Spine1:[Dt*.8,0,0],Spine2:[Dt*.6,0,0]},1),We($e,1);let ke=new Array(q),Te=new Array(q);for(let ve=0;ve<q;ve++){let io=K[ve],Ro=Ft[ve],ye=be[io.name];if(ye){let Go=gt[ve],pa=Zo(Ba(Go),Zo(ye,Go));Ro=ca(io.t,Zo(io.r,pa),io.s)}ke[ve]=io.parent<0?jn(fo,Ro):jn(ke[io.parent],Ro),Te[ve]=null}for(let ve=0;ve<q;ve++)Eo[ve]=jn(ke[ve],pt[ve]);let Ye=ve=>[ve[12],ve[13],ve[14]];return a.headPos=Ye(ke[X.Head]),a.hipsPos=Ye(ke[X.Hips]),a.headM=ke[X.Head],{blink:le}}function Qe(Z,Ot){let{pos:Dt,nrm:Nt,jnt:le,wgt:Ae,outP:Me,outN:pe,work:$e,m:be}=Z,We=be.n,ke=Dt;if(Ot){$e.set(Dt);for(let Te in Z.morphs){let Ye=Ot[Te]||0;if(Ye<=0)continue;let ve=Z.morphs[Te];for(let io=0;io<ve.idx.length;io++){let Ro=ve.idx[io]*3;$e[Ro]+=ve.d[io*3]*Ye,$e[Ro+1]+=ve.d[io*3+1]*Ye,$e[Ro+2]+=ve.d[io*3+2]*Ye}}ke=$e}for(let Te=0;Te<We;Te++){let Ye=ke[Te*3],ve=ke[Te*3+1],io=ke[Te*3+2],Ro=Nt[Te*3],ye=Nt[Te*3+1],Go=Nt[Te*3+2],pa=0,l0=0,eo=0,vo=0,$n=0,j=0;for(let Vt=0;Vt<4;Vt++){let se=Ae[Te*4+Vt];if(se===0)continue;let fe=Eo[le[Te*4+Vt]];pa+=se*(fe[0]*Ye+fe[4]*ve+fe[8]*io+fe[12]),l0+=se*(fe[1]*Ye+fe[5]*ve+fe[9]*io+fe[13]),eo+=se*(fe[2]*Ye+fe[6]*ve+fe[10]*io+fe[14]),vo+=se*(fe[0]*Ro+fe[4]*ye+fe[8]*Go),$n+=se*(fe[1]*Ro+fe[5]*ye+fe[9]*Go),j+=se*(fe[2]*Ro+fe[6]*ye+fe[10]*Go)}Me[Te*3]=pa,Me[Te*3+1]=l0,Me[Te*3+2]=eo;let ht=Math.hypot(vo,$n,j)||1;pe[Te*3]=vo/ht,pe[Te*3+1]=$n/ht,pe[Te*3+2]=j/ht}be.grid&&!Oo&&!M&&!T&&ko(Z),Z.sway&&L0(Z),Z.pb.subdata(Me),Z.nbuf.subdata(pe)}function ko(Z){let[Ot,Dt]=Z.m.grid,Nt=Z.outP,le=Z.outN,Ae=G3.seat+.012;for(let Me=1;Me<Ot;Me++){let pe=Math.pow(1-Me/(Ot-1),1.5);for(let $e=0;$e<Dt;$e++){let be=(Me*Dt+$e)*3;Nt[be+1]>Ae?Nt[be+1]=Ae+(Nt[be+1]-Ae)*Math.max(pe,.15):Nt[be+1]=Ae}}for(let Me=0;Me<le.length;Me+=3)le[Me]=0,le[Me+1]=1,le[Me+2]=0}let Oo=!1,yn=(Z,Ot,Dt,Nt,le)=>({bone:X[Z],rate:Ot,damp:Dt,drag:Nt,most:le,x:[0,0,0],v:[0,0,0],p:null,vel:[0,0,0]}),Sr={head:yn("Head",15,.32,.012,.035),chest:yn("Spine2",9,.38,.03,.1),hips:yn("Hips",7,.42,.045,.16)},Yn=-1;function Ka(Z){let Ot=Yn<0?0:Z-Yn;Yn=Z;for(let Dt in Sr){let Nt=Sr[Dt],le=Eo[Nt.bone],Ae=Lt[Nt.bone],Me=Ae[12],pe=Ae[13],$e=Ae[14],be=[le[0]*Me+le[4]*pe+le[8]*$e+le[12],le[1]*Me+le[5]*pe+le[9]*$e+le[13],le[2]*Me+le[6]*pe+le[10]*$e+le[14]];if(!Nt.p||!(Ot>0)||Ot>.25||Math.hypot(be[0]-Nt.p[0],be[1]-Nt.p[1],be[2]-Nt.p[2])>.5){Nt.p=be,Nt.x=[0,0,0],Nt.v=[0,0,0],Nt.vel=[0,0,0];continue}let We=[(be[0]-Nt.p[0])/Ot,(be[1]-Nt.p[1])/Ot,(be[2]-Nt.p[2])/Ot],ke=Math.max(1,Math.ceil(Ot/.016)),Te=Ot/ke;for(let ve=0;ve<3;ve++){let io=Math.max(-30,Math.min(30,(We[ve]-Nt.vel[ve])/Ot)),Ro=-We[ve]*Nt.drag;for(let ye=0;ye<ke;ye++)Nt.v[ve]+=((Ro-Nt.x[ve])*Nt.rate*Nt.rate-2*Nt.damp*Nt.rate*Nt.v[ve]-io)*Te,Nt.x[ve]+=Nt.v[ve]*Te}let Ye=Math.hypot(Nt.x[0],Nt.x[1],Nt.x[2]);if(Ye>Nt.most){let ve=Nt.most/Ye;Nt.x=[Nt.x[0]*ve,Nt.x[1]*ve,Nt.x[2]*ve]}Nt.p=be,Nt.vel=We}}for(let Z of ct){let Ot=Z.m,Dt=Ot.n,Nt=null,le=null;if(Ot.kind===9){le="head",Nt=new Float32Array(Dt);for(let Ae=0;Ae<Dt;Ae++){let Me=Z.uv[Ae*2]<-.5?0:Z.uv[Ae*2+1];Nt[Ae]=Me*Me}}else if(Ot.name==="scarf"){le="chest",Nt=new Float32Array(Dt);for(let Ae=0;Ae<Dt;Ae++)Nt[Ae]=l(1.52,1.12,Z.pos[Ae*3+1])}else if(Ot.grid){le="hips",Nt=new Float32Array(Dt);let Ae=Ot.grid[0],Me=Ot.grid[1];for(let pe=0;pe<Dt;pe++)Nt[pe]=Math.pow(Math.floor(pe/Me)/(Ae-1),1.6)}Nt&&(Z.sway=Nt,Z.spring=Sr[le],Z.loose=le)}function L0(Z){if(!Oo&&!T&&!M)return;let Ot=Z.spring.x,Dt=Z.sway,Nt=Z.outP;if(!(Math.abs(Ot[0])+Math.abs(Ot[1])+Math.abs(Ot[2])<1e-5))for(let le=0,Ae=Dt.length;le<Ae;le++){let Me=Dt[le];Me>0&&(Nt[le*3]+=Ot[0]*Me,Nt[le*3+1]+=Ot[1]*Me,Nt[le*3+2]+=Ot[2]*Me)}}function ci(Z,Ot){Oo=!!Ot;let Dt=so(Z,Ot);Ka(Z);let Nt={eyeBlinkLeft:Dt.blink,eyeBlinkRight:Dt.blink};for(let le of ct)Qe(le,Object.keys(le.morphs).length?Nt:null);a.pose=Dt}return{parts:ct,update:ci,drawOpaque:Wt,drawBlend:ze,state:a}}function l(N,B,D){let K=Math.min(1,Math.max(0,(D-N)/(B-N)));return K*K*(3-2*K)}let p=tE(),d=eE(),v=d?t.texture({data:d,flipY:!1,min:"linear",mag:"linear"}):c,u=t({vert:oE,frag:nE,attributes:{position:p.pos,normal:p.nrm,uv:p.uv,kind:p.kind},elements:new Uint16Array(p.idx),uniforms:{model:t.prop("model"),turn:0,fold:1.12,cover:v},cull:{enable:!1}}),h=rE(),m=t({vert:aE,frag:sE,attributes:{position:h.pos,normal:h.nrm,color:h.col,mat:h.mat},elements:new Uint16Array(h.idx),uniforms:{model:t.prop("model"),pulse:t.prop("pulse")},cull:{enable:!1}}),g=t({vert:iE,frag:cE,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{center:t.prop("center"),size:t.prop("size"),pulse:t.prop("pulse")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});function b(N){let B=N.headM,D=ct=>{let Wt=Math.hypot(...ct)||1;return ct.map(ze=>ze/Wt)},K=D([B[4],B[5],B[6]]),q=D([B[8],B[9],B[10]]),X=K,pt=q.map(ct=>-ct),Ft=[pt[1]*X[2]-pt[2]*X[1],pt[2]*X[0]-pt[0]*X[2],pt[0]*X[1]-pt[1]*X[0]],Lt=N.headPos,gt=[0,1,2].map(ct=>Lt[ct]+K[ct]*.06+q[ct]*.185);return[Ft[0],Ft[1],Ft[2],0,pt[0],pt[1],pt[2],0,X[0],X[1],X[2],0,gt[0],gt[1],gt[2],1]}let y=-1,w="",_=null,M=null,T=!1;function I(N){if(!o)return;let B=(I3.motion,r()),D=_?[_.x,_.z,_.heading,_.phase].map(q=>q.toFixed(4)).join():"";(M||T||D!==w||!_&&Math.abs(B-y)>(I3.isPhone?1/30:0))&&(o.update(B,_),y=B,w=D);for(let q of o.parts)q.blend||(o.drawOpaque({pb:q.pb,nb:q.nbuf,uv:q.uvBuf,el:q.el,tex:q.tex,alphaCut:q.alphaCut,skin:q.skin,kind:q.kind,alphaScale:q.alphaScale}),q.sockEl&&o.drawOpaque({pb:q.pb,nb:q.nbuf,uv:q.uvBuf,el:q.sockEl,tex:c,alphaCut:0,skin:0,kind:8,alphaScale:1}));let K=o.state;if(K.headM&&!_&&!M&&!T){u({model:b(K)});let q=K.headPos,X=Math.sin(B*1.3)*.02,pt=[q[0],q[1]+.62+X,q[2]+.05],Ft=B*.6,Lt=ca(pt,Zo(ns([0,1,0],Ft),ns([0,0,1],.18)),[1.2,1.2,1.2]),gt=.5+.5*Math.sin(B*2);m({model:Lt,pulse:gt}),a.glowPos=pt,a.glow=.06+.03*gt,g({center:[pt[0],pt[1]-.12,pt[2]],size:.1,pulse:gt})}for(let q of o.parts)q.blend&&o.drawBlend({pb:q.pb,nb:q.nbuf,uv:q.uvBuf,el:q.el,tex:q.tex,alphaCut:q.alphaCut,skin:q.skin,kind:q.kind,alphaScale:q.alphaScale})}return I.state=a,I.place=Ws,I.setWalk=N=>{_=N||null,_&&(a.glow=0)},I.setSeat=N=>{M=N||null,a.glow=M?0:a.glow,y=-1},I.setPiano=N=>{N=!!N,N!==T&&(T=N,T&&(a.glow=0),y=-1)},I};cd.exports.PLACE=Ws});var ld=mt((XA,W3)=>{"use strict";W3.exports={name:"Muzammil",title:"Hi, I\u2019m Muzammil.",text:`I\u2019m a self-taught artist. I paint emotions. Grief, longing, love, and the quiet ways we keep holding on. I borrow the light and stillness of the Renaissance to talk about very modern feelings.

This gallery is my portfolio, built brick by pixel, so my work has a home that never closes. Every painting comes with a few words, because some feelings need both a frame and a sentence.

You\u2019ll find me in the tree court, catching sunlight and trying not to get too absorbed. Wander the halls, stay as long as you like, and don\u2019t worry about the time. In here, the only thing that\u2019s drying is the paint.`}});var hd=mt((YA,Z3)=>{"use strict";var K3=ba(),V3=Kc(),rs=t=>String(t).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function fd(){return K3.isPhone||!window.matchMedia||!window.matchMedia("(pointer: fine)").matches?!1:window.innerWidth>=900&&window.innerHeight>=520}var lE=`
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
`,X3=!1;function Q3(){if(X3)return;X3=!0;let t=document.createElement("style");t.textContent=lE,document.head.appendChild(t)}var fE='<svg class="visit-play" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="10.2"/><path d="M10 8.4l6 3.6-6 3.6z" fill="currentColor" stroke="none"/></svg>';function hE(t){return!t||!t.visit||!fd()?"":(Q3(),`<button type="button" class="visit-btn" data-visit="${rs(t.slug||"")}" aria-label="Visit what remained: watch ${rs(t.title)} come to life">${fE}<span>Visit what remained</span></button>`)}function uE(t){let e=t.getContext("2d");t.width=t.height=160;let o=e.createImageData(160,160),n=!0,r=0;return function a(s){if(n){if(s-r>70){r=s;let i=o.data;for(let c=0;c<i.length;c+=4){let f=Math.random()*255;i[c]=i[c+1]=i[c+2]=f,i[c+3]=255}e.putImageData(o,0,0),t.style.transform=`translate(${(Math.random()*6-3).toFixed(1)}%, ${(Math.random()*6-3).toFixed(1)}%)`}requestAnimationFrame(a)}}(0),()=>{n=!1}}var $l=null;function dE(t){if($l||!t||!t.visit)return;Q3();let e=document.activeElement;document.body.classList.add("visiting");let o="images/web/"+t.slug+(K3.isPhone?"-1024":"")+".webp",n=document.createElement("div");n.className="visit",n.setAttribute("role","dialog"),n.setAttribute("aria-modal","true"),n.setAttribute("aria-label","Visiting "+t.title),n.innerHTML=`
		<video muted playsinline preload="auto" ${t.visit.poster?`poster="${rs(t.visit.poster)}"`:""}></video>
		<img class="visit-art" alt="${rs(t.title)}, ${rs(V3(t))}" src="${rs(o)}">
		<canvas class="visit-grain" aria-hidden="true"></canvas>
		<div class="visit-vignette" aria-hidden="true"></div>
		<div class="visit-bar top" aria-hidden="true"></div>
		<div class="visit-bar bottom" aria-hidden="true"></div>
		<div class="visit-title">
			<span class="visit-kicker">A visit</span>
			<span class="visit-name">${rs(t.title)}</span>
			<span class="visit-meta">${rs(V3(t))}</span>
		</div>
		<button type="button" class="visit-close" aria-label="Return to the gallery">\xD7</button>
		<button type="button" class="visit-skip">Skip</button>
		<div class="visit-end">
			<button type="button" class="primary" data-act="back">Return to the gallery</button>
			<button type="button" data-act="again">Watch again</button>
		</div>`,document.body.appendChild(n);let r=n.querySelector("video"),a=n.querySelector(".visit-title"),s=uE(n.querySelector(".visit-grain")),i=[],c=(m,g)=>i.push(setTimeout(m,g)),f=m=>m.stopPropagation();["mousedown","pointerdown","click","wheel","touchstart","touchmove"].forEach(m=>n.addEventListener(m,f));let l=m=>{m.key==="Escape"?(m.preventDefault(),h()):m.key===" "&&!(m.target&&m.target.tagName==="BUTTON")&&(m.preventDefault(),v()),m.stopImmediatePropagation()};window.addEventListener("keydown",l,!0);let p=m=>m.stopImmediatePropagation();window.addEventListener("keyup",p,!0);let d=!1;function v(){d||(d=!0,a.classList.add("on"),n.classList.add("resolved"),c(()=>{let m=n.querySelector('[data-act="back"]');m&&m.focus({preventScroll:!0})},1300))}function u(){d=!1,n.classList.remove("resolved"),a.classList.remove("on");try{r.currentTime=0}catch(g){}let m=r.play();m&&m.catch&&m.catch(()=>v()),n.classList.add("playing"),c(()=>{d||a.classList.add("on")},1600),c(()=>{d||a.classList.remove("on")},6200)}r.addEventListener("timeupdate",()=>{r.duration&&r.currentTime>r.duration-1.2&&v()}),r.addEventListener("ended",v),r.addEventListener("error",v);function h(){if($l){$l=null,i.forEach(clearTimeout),n.classList.remove("on");try{r.pause()}catch(m){}window.removeEventListener("keydown",l,!0),window.removeEventListener("keyup",p,!0),document.body.classList.remove("visiting"),setTimeout(()=>{s(),n.remove(),e&&e.focus&&e.focus({preventScroll:!0})},1150)}}n.querySelector(".visit-close").addEventListener("click",h),n.querySelector(".visit-skip").addEventListener("click",()=>{try{r.pause()}catch(m){}v()}),n.querySelector(".visit-end").addEventListener("click",m=>{let g=m.target.closest("button");g&&(g.dataset.act==="back"&&h(),g.dataset.act==="again"&&(i.forEach(clearTimeout),u()))}),r.src=t.visit.video,$l={close:h},requestAnimationFrame(()=>{n.classList.add("on"),c(u,1300)})}var Y3={};function pE(t){if(!t||!t.visit||Y3[t.visit.video]||!fd())return;Y3[t.visit.video]=!0;let e=document.createElement("link");e.rel="preload",e.as="video",e.href=t.visit.video,document.head.appendChild(e)}Z3.exports={available:fd,button:hE,open:dE,warm:pE,get active(){return!!$l}}});var ex=mt((KA,tx)=>{"use strict";var vE=ba(),hc=[0,0],ic=[0,0],k0=null,dd=0;if(typeof window!="undefined"){window.addEventListener("pointermove",e=>{e.pointerType!=="touch"&&(hc[0]=Math.max(-1,Math.min(1,e.clientX/window.innerWidth*2-1)),hc[1]=Math.max(-1,Math.min(1,e.clientY/window.innerHeight*2-1)),dd=performance.now())},{passive:!0});let t=()=>{dd=performance.now()};["wheel","touchstart","touchmove","keydown","pointerdown"].forEach(e=>window.addEventListener(e,t,{passive:!0,capture:!0})),window.addEventListener("deviceorientation",e=>{e.gamma===null||e.beta===null||(k0||(k0=[e.gamma,e.beta]),k0[0]+=(e.gamma-k0[0])*.01,k0[1]+=(e.beta-k0[1])*.01,hc[0]=Math.max(-1,Math.min(1,(e.gamma-k0[0])/14)),hc[1]=Math.max(-1,Math.min(1,(e.beta-k0[1])/14)))},{passive:!0})}var J3=0,cc=null,Oh=null,s0=[0,0,0],ud=0,lc=null,fc=0,Vs={eye:[0,0,0],target:[0,0,0],fov:50,roll:0},mE={apply(t,e){let o=Math.min(.1,Math.max(0,e-J3));J3=e;let n=t.eye,r=t.target,a=[r[0]-n[0],r[1]-n[1],r[2]-n[2]],s=Math.hypot(a[0],a[1],a[2])||1;a=[a[0]/s,a[1]/s,a[2]/s];let i=[-a[2],0,a[0]],c=Math.hypot(i[0],i[2])||1;i=[i[0]/c,0,i[2]/c];let f=[i[1]*a[2]-i[2]*a[1],i[2]*a[0]-i[0]*a[2],i[0]*a[1]-i[1]*a[0]],l=!cc;if(cc&&o>0){let y=[n[0]-cc[0],n[1]-cc[1],n[2]-cc[2]],w=Math.hypot(y[0],y[1],y[2]);if(w>2.5)l=!0;else{let M=Math.min(1,o*5);for(let T=0;T<3;T++)s0[T]+=(y[T]/o-s0[T])*M}let _=Math.hypot(r[0]-Oh[0],r[1]-Oh[1],r[2]-Oh[2]);fc=w/o<.12&&_/o<.2?fc+o:0}l&&(s0[0]=s0[1]=s0[2]=0,fc=0),cc=n.slice(),Oh=r.slice(),ud=Math.hypot(s0[0],s0[1],s0[2]);let p=Math.min(1,o*2.6);ic[0]+=(hc[0]-ic[0])*p,ic[1]+=(hc[1]-ic[1])*p;let d=Math.max(.03,Math.min(.32,s*.05)),v=(vE.isPhone&&!k0?1.5:1)*Math.min(1,fc/2.5),u=(Math.sin(e*.131)*.55+Math.sin(e*.071+1.3)*.45)*d*.55*v,h=Math.sin(e*.097+.6)*d*.16*v,m=ic[0]*d+u,g=-ic[1]*d*.45+h;for(let y=0;y<3;y++)Vs.eye[y]=n[y]+i[y]*m+f[y]*g,Vs.target[y]=r[y]+(i[y]*m+f[y]*g)*.12;n[1]>.05&&(Vs.eye[1]=Math.max(.05,Vs.eye[1]));let b=s0[0]*i[0]+s0[2]*i[2];return Vs.fov=t.fov+Math.min(3.5,ud*.55),Vs.roll=(t.roll||0)+Math.max(-.035,Math.min(.035,-b*.006)),Vs},pull(t,e){(lc===null||!(Math.abs(t.focus-lc)<40))&&(lc=t.focus);let o=1/60;lc+=(t.focus-lc)*Math.min(1,o*3.2),t.focus=lc,t.aperture>0&&(t.aperture*=1+.25*Math.min(1,fc/3))},get speed(){return ud},get resting(){return fc>2&&performance.now()-dd>2e3}};tx.exports=mE});var pd=mt((QA,ox)=>{ox.exports=1e-6});var vd=mt((ZA,nx)=>{nx.exports=gE;function gE(){var t=new Float32Array(3);return t[0]=0,t[1]=0,t[2]=0,t}});var ax=mt((JA,rx)=>{rx.exports=xE;function xE(t){var e=new Float32Array(3);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}});var md=mt((tT,sx)=>{sx.exports=bE;function bE(t,e,o){var n=new Float32Array(3);return n[0]=t,n[1]=e,n[2]=o,n}});var gd=mt((eT,ix)=>{ix.exports=yE;function yE(t,e){var o=e[0],n=e[1],r=e[2],a=o*o+n*n+r*r;return a>0&&(a=1/Math.sqrt(a),t[0]=e[0]*a,t[1]=e[1]*a,t[2]=e[2]*a),t}});var xd=mt((oT,cx)=>{cx.exports=wE;function wE(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}});var ux=mt((nT,hx)=>{hx.exports=ME;var lx=md(),fx=gd(),_E=xd();function ME(t,e){var o=lx(t[0],t[1],t[2]),n=lx(e[0],e[1],e[2]);fx(o,o),fx(n,n);var r=_E(o,n);return r>1?0:Math.acos(r)}});var px=mt((rT,dx)=>{dx.exports=EE;function EE(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}});var mx=mt((aT,vx)=>{vx.exports=SE;function SE(t,e,o,n){return t[0]=e,t[1]=o,t[2]=n,t}});var xx=mt((sT,gx)=>{gx.exports=kE;var bd=pd();function kE(t,e){var o=t[0],n=t[1],r=t[2],a=e[0],s=e[1],i=e[2];return Math.abs(o-a)<=bd*Math.max(1,Math.abs(o),Math.abs(a))&&Math.abs(n-s)<=bd*Math.max(1,Math.abs(n),Math.abs(s))&&Math.abs(r-i)<=bd*Math.max(1,Math.abs(r),Math.abs(i))}});var yx=mt((iT,bx)=>{bx.exports=AE;function AE(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]}});var _x=mt((cT,wx)=>{wx.exports=TE;function TE(t,e,o){return t[0]=e[0]+o[0],t[1]=e[1]+o[1],t[2]=e[2]+o[2],t}});var yd=mt((lT,Mx)=>{Mx.exports=LE;function LE(t,e,o){return t[0]=e[0]-o[0],t[1]=e[1]-o[1],t[2]=e[2]-o[2],t}});var Sx=mt((fT,Ex)=>{Ex.exports=yd()});var wd=mt((hT,kx)=>{kx.exports=zE;function zE(t,e,o){return t[0]=e[0]*o[0],t[1]=e[1]*o[1],t[2]=e[2]*o[2],t}});var Tx=mt((uT,Ax)=>{Ax.exports=wd()});var _d=mt((dT,Lx)=>{Lx.exports=RE;function RE(t,e,o){return t[0]=e[0]/o[0],t[1]=e[1]/o[1],t[2]=e[2]/o[2],t}});var Rx=mt((pT,zx)=>{zx.exports=_d()});var Cx=mt((vT,Nx)=>{Nx.exports=NE;function NE(t,e,o){return t[0]=Math.min(e[0],o[0]),t[1]=Math.min(e[1],o[1]),t[2]=Math.min(e[2],o[2]),t}});var Px=mt((mT,Ox)=>{Ox.exports=CE;function CE(t,e,o){return t[0]=Math.max(e[0],o[0]),t[1]=Math.max(e[1],o[1]),t[2]=Math.max(e[2],o[2]),t}});var $x=mt((gT,Ix)=>{Ix.exports=OE;function OE(t,e){return t[0]=Math.floor(e[0]),t[1]=Math.floor(e[1]),t[2]=Math.floor(e[2]),t}});var Dx=mt((xT,Fx)=>{Fx.exports=PE;function PE(t,e){return t[0]=Math.ceil(e[0]),t[1]=Math.ceil(e[1]),t[2]=Math.ceil(e[2]),t}});var Gx=mt((bT,qx)=>{qx.exports=IE;function IE(t,e){return t[0]=Math.round(e[0]),t[1]=Math.round(e[1]),t[2]=Math.round(e[2]),t}});var Bx=mt((yT,Hx)=>{Hx.exports=$E;function $E(t,e,o){return t[0]=e[0]*o,t[1]=e[1]*o,t[2]=e[2]*o,t}});var jx=mt((wT,Ux)=>{Ux.exports=FE;function FE(t,e,o,n){return t[0]=e[0]+o[0]*n,t[1]=e[1]+o[1]*n,t[2]=e[2]+o[2]*n,t}});var Md=mt((_T,Wx)=>{Wx.exports=DE;function DE(t,e){var o=e[0]-t[0],n=e[1]-t[1],r=e[2]-t[2];return Math.sqrt(o*o+n*n+r*r)}});var Xx=mt((MT,Vx)=>{Vx.exports=Md()});var Ed=mt((ET,Yx)=>{Yx.exports=qE;function qE(t,e){var o=e[0]-t[0],n=e[1]-t[1],r=e[2]-t[2];return o*o+n*n+r*r}});var Qx=mt((ST,Kx)=>{Kx.exports=Ed()});var Sd=mt((kT,Zx)=>{Zx.exports=GE;function GE(t){var e=t[0],o=t[1],n=t[2];return Math.sqrt(e*e+o*o+n*n)}});var tb=mt((AT,Jx)=>{Jx.exports=Sd()});var kd=mt((TT,eb)=>{eb.exports=HE;function HE(t){var e=t[0],o=t[1],n=t[2];return e*e+o*o+n*n}});var nb=mt((LT,ob)=>{ob.exports=kd()});var ab=mt((zT,rb)=>{rb.exports=BE;function BE(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t}});var ib=mt((RT,sb)=>{sb.exports=UE;function UE(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t}});var lb=mt((NT,cb)=>{cb.exports=jE;function jE(t,e,o){var n=e[0],r=e[1],a=e[2],s=o[0],i=o[1],c=o[2];return t[0]=r*c-a*i,t[1]=a*s-n*c,t[2]=n*i-r*s,t}});var hb=mt((CT,fb)=>{fb.exports=WE;function WE(t,e,o,n){var r=e[0],a=e[1],s=e[2];return t[0]=r+n*(o[0]-r),t[1]=a+n*(o[1]-a),t[2]=s+n*(o[2]-s),t}});var db=mt((OT,ub)=>{ub.exports=VE;function VE(t,e){e=e||1;var o=Math.random()*2*Math.PI,n=Math.random()*2-1,r=Math.sqrt(1-n*n)*e;return t[0]=Math.cos(o)*r,t[1]=Math.sin(o)*r,t[2]=n*e,t}});var vb=mt((PT,pb)=>{pb.exports=XE;function XE(t,e,o){var n=e[0],r=e[1],a=e[2],s=o[3]*n+o[7]*r+o[11]*a+o[15];return s=s||1,t[0]=(o[0]*n+o[4]*r+o[8]*a+o[12])/s,t[1]=(o[1]*n+o[5]*r+o[9]*a+o[13])/s,t[2]=(o[2]*n+o[6]*r+o[10]*a+o[14])/s,t}});var gb=mt((IT,mb)=>{mb.exports=YE;function YE(t,e,o){var n=e[0],r=e[1],a=e[2];return t[0]=n*o[0]+r*o[3]+a*o[6],t[1]=n*o[1]+r*o[4]+a*o[7],t[2]=n*o[2]+r*o[5]+a*o[8],t}});var bb=mt(($T,xb)=>{xb.exports=KE;function KE(t,e,o){var n=e[0],r=e[1],a=e[2],s=o[0],i=o[1],c=o[2],f=o[3],l=f*n+i*a-c*r,p=f*r+c*n-s*a,d=f*a+s*r-i*n,v=-s*n-i*r-c*a;return t[0]=l*f+v*-s+p*-c-d*-i,t[1]=p*f+v*-i+d*-s-l*-c,t[2]=d*f+v*-c+l*-i-p*-s,t}});var wb=mt((FT,yb)=>{yb.exports=QE;function QE(t,e,o,n){var r=o[1],a=o[2],s=e[1]-r,i=e[2]-a,c=Math.sin(n),f=Math.cos(n);return t[0]=e[0],t[1]=r+s*f-i*c,t[2]=a+s*c+i*f,t}});var Mb=mt((DT,_b)=>{_b.exports=ZE;function ZE(t,e,o,n){var r=o[0],a=o[2],s=e[0]-r,i=e[2]-a,c=Math.sin(n),f=Math.cos(n);return t[0]=r+i*c+s*f,t[1]=e[1],t[2]=a+i*f-s*c,t}});var Sb=mt((qT,Eb)=>{Eb.exports=JE;function JE(t,e,o,n){var r=o[0],a=o[1],s=e[0]-r,i=e[1]-a,c=Math.sin(n),f=Math.cos(n);return t[0]=r+s*f-i*c,t[1]=a+s*c+i*f,t[2]=e[2],t}});var Ab=mt((GT,kb)=>{kb.exports=tS;var as=vd()();function tS(t,e,o,n,r,a){var s,i;for(e||(e=3),o||(o=0),n?i=Math.min(n*e+o,t.length):i=t.length,s=o;s<i;s+=e)as[0]=t[s],as[1]=t[s+1],as[2]=t[s+2],r(as,as,a),t[s]=as[0],t[s+1]=as[1],t[s+2]=as[2];return t}});var Lb=mt((HT,Tb)=>{Tb.exports={EPSILON:pd(),create:vd(),clone:ax(),angle:ux(),fromValues:md(),copy:px(),set:mx(),equals:xx(),exactEquals:yx(),add:_x(),subtract:yd(),sub:Sx(),multiply:wd(),mul:Tx(),divide:_d(),div:Rx(),min:Cx(),max:Px(),floor:$x(),ceil:Dx(),round:Gx(),scale:Bx(),scaleAndAdd:jx(),distance:Md(),dist:Xx(),squaredDistance:Ed(),sqrDist:Qx(),length:Sd(),len:tb(),squaredLength:kd(),sqrLen:nb(),negate:ab(),inverse:ib(),normalize:gd(),dot:xd(),cross:lb(),lerp:hb(),random:db(),transformMat4:vb(),transformMat3:gb(),transformQuat:bb(),rotateX:wb(),rotateY:Mb(),rotateZ:Sb(),forEach:Ab()}});var Nb=mt((BT,Rb)=>{"use strict";function zb(){let t={};return{on(e,o){return(t[e]=t[e]||[]).push(o),this},emit(e,o){(t[e]||[]).slice().forEach(n=>n(o))}}}Rb.exports=function(e){let o=e.ownerDocument||document,n=zb(),r=null,a={dx:0,dy:0,dt:0},s=0,i=()=>o.pointerLockElement||o.webkitPointerLockElement||null,c=()=>{if(i())return;let l=e.requestPointerLock||e.webkitRequestPointerLock;if(l)try{let p=l.call(e);p&&p.catch&&p.catch(()=>{})}catch(p){}};e.addEventListener("mousedown",c,!1);let f=()=>{if(!i()){r&&(n.emit("release"),r.emit("end"),r=null);return}r=zb(),s=Date.now(),n.emit("attain",r)};return o.addEventListener("pointerlockchange",f),o.addEventListener("webkitpointerlockchange",f),o.addEventListener("pointerlockerror",()=>n.emit("error")),(o.body||e).addEventListener("mousemove",l=>{r&&(a.dx=l.movementX||l.webkitMovementX||0,a.dy=l.movementY||l.webkitMovementY||0,a.dt=Date.now()-s,n.emit("data",a),r.emit("data",a))},!1),n.request=c,n.target=i,n.release=()=>{i()&&(o.exitPointerLock||o.webkitExitPointerLock).call(o)},n}});var $b=mt((WT,Ib)=>{"use strict";var Xs=Xi(),Ys=Lb(),eS=Nb(),UT=Math.PI/4,jT=Math.PI/6,Cb=2,oS=1,nS=2.4,rS=2.4,aS=1e3,sS=5,iS=7,Ad=vr().C,Fl=[[7,1.6],[7,Ad.zc],[Ad.x1-2.95,Ad.zc]],ss=Fl.slice(1).map((t,e)=>{let o=Fl[e],n=t[0]-o[0],r=t[1]-o[1],a=Math.hypot(n,r);return{a:o,len:a,dir:[n/a,r/a]}}),Td=ss.reduce((t,e)=>t+e.len,0);function Ob(t){let e=Math.max(0,Math.min(Td,t));for(let n of ss){if(e<=n.len)return[n.a[0]+n.dir[0]*e,n.a[1]+n.dir[1]*e];e-=n.len}let o=Fl[Fl.length-1];return[o[0],o[1]]}function cS(t){let e=0;for(let n=0;n<ss.length;n++){let r=ss[n],a=e+r.len;if(t<a-1e-4||n===ss.length-1){let s=r.dir,c=t<=e+1e-4&&n>0?ss[n-1].dir:r.dir;return{ahead:s,back:[-c[0],-c[1]]}}e=a}let o=ss[ss.length-1].dir;return{ahead:o,back:[-o[0],-o[1]]}}var lS=Math.PI/4,fS=7,hS=140,uS=70,Pb=(t,e,o)=>(1-t)*e+t*o,dS=t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2;Ib.exports=function({getGridSegments:t,getGridParts:e},o){var n=[0,Math.PI],r=[0,Math.PI],a=0,s=[0,0,0],i=[iS,Cb,Fl[0][1]],c=0,f=1,l=0,p=[.707,0,.707],d=[0,1,0],v=[0,0,0],u=.5,h=Xs.identity([]),m=Xs.identity([]),g=!1,b=[0,0,0],y=[0,0,0],w=1,_=!1;let M=Zt=>{n[1]+=Zt*lS},T=(Zt,ge,Ce)=>{if(Zt=Math.max(Math.min(Zt,100),-100),ge=Math.max(Math.min(ge,100),-100),n[0]=0,_){a=0;return}for(a+=Zt;a>=Ce;)M(1),a-=Ce;for(;a<=-Ce;)M(-1),a+=Ce};eS(document.body).on("attain",Zt=>{Zt.on("data",ge=>{T(ge.dx,ge.dy,hS)})});let N=null,B=null,D=0,K={x:0,y:0},q=58,X=document.createElement("div");X.id="museum-mobile-controls",X.innerHTML=`

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
	`,document.body.appendChild(X);let pt=X.querySelector("#museum-joystick"),Ft=X.querySelector("#museum-joystick-knob"),Lt=()=>{Ft.style.transform="translate(-50%, -50%)",s[0]=0,s[2]=0},gt=Zt=>{let ge=Zt.clientX-K.x,Ce=Zt.clientY-K.y,no=Math.hypot(ge,Ce);if(no>q&&(ge=ge/no*q,Ce=Ce/no*q),Ft.style.transform=`translate(
				calc(-50% + ${ge}px),
				calc(-50% + ${Ce}px)
			)`,no<10){s[0]=0,s[2]=0;return}let Oe=ge/q,xe=Ce/q;s[0]=0,s[2]=Math.abs(xe)>.15?xe:0},ct=(Zt,ge)=>{for(let Ce=0;Ce<Zt.length;Ce++)if(Zt[Ce].identifier===ge)return Zt[Ce];return null},Wt=Zt=>!!(Zt&&Zt.closest&&Zt.closest(".painting-plaque, .story-overlay, .story-card, .story-close, button")),ze=Zt=>{if(!Wt(Zt.target)&&(Zt.cancelable&&Zt.preventDefault(),!_))for(let ge=0;ge<Zt.changedTouches.length;ge++){let Ce=Zt.changedTouches[ge];if(N===null&&Ce.clientX<window.innerWidth*.48){N=Ce.identifier;let no=pt.getBoundingClientRect();K.x=no.left+no.width/2,K.y=no.top+no.height/2,gt(Ce)}else B===null&&Ce.clientX>=window.innerWidth*.48&&(B=Ce.identifier,D=Ce.clientX,a=0)}},Se=Zt=>{if(Wt(Zt.target)||(Zt.cancelable&&Zt.preventDefault(),_))return;let ge=N===null?null:ct(Zt.touches,N);ge&&gt(ge);let Ce=B===null?null:ct(Zt.touches,B);if(Ce){let no=Ce.clientX-D;D=Ce.clientX,T(no,0,uS)}},Xe=Zt=>{if(!Wt(Zt.target)){Zt.cancelable&&Zt.preventDefault();for(let ge=0;ge<Zt.changedTouches.length;ge++){let Ce=Zt.changedTouches[ge];Ce.identifier===N&&(N=null,Lt()),Ce.identifier===B&&(B=null)}}};document.addEventListener("touchstart",ze,{passive:!1}),document.addEventListener("touchmove",Se,{passive:!1}),document.addEventListener("touchend",Xe,{passive:!1}),document.addEventListener("touchcancel",Xe,{passive:!1});let _e=document.createElement("style");_e.textContent=`

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
	`,document.head.appendChild(_e);var fo={};let Eo=Zt=>{if(Zt.defaultPrevented||Zt.ctrlKey||Zt.altKey||Zt.metaKey)return;let ge=Zt.type==="keydown";fo[Zt.code]=ge,ge&&!Zt.repeat&&!_&&((Zt.code==="KeyA"||Zt.code==="ArrowLeft")&&M(-1),(Zt.code==="KeyD"||Zt.code==="ArrowRight")&&M(1)),g=!1;let Ce=fo.KeyW||fo.ArrowUp?1:0;s=[0,0,(fo.KeyS||fo.ArrowDown?1:0)-Ce],Zt.preventDefault()};window.addEventListener("keydown",Eo),window.addEventListener("keyup",Eo);var Ko=0;return{pos:i,fmouse:r,forward:p,up:d,setPaused:Zt=>{_=!!Zt,_&&(s[0]=0,s[2]=0,Lt())},place:(Zt,ge)=>{c=Math.max(0,Math.min(Td,Zt));let Ce=Ob(c);i[0]=Ce[0],i[2]=Ce[1],n[1]=ge,r[1]=ge,a=0,f=1},view:()=>h,proj:()=>(Xs.perspective(m,o(),window.innerWidth/window.innerHeight,.1,700),m),tick:({time:Zt})=>{let ge=Zt-Ko;Ko=Zt;let Ce=[0,0,0],no=[];Ys.set(p,Math.sin(r[1]),0,-Math.cos(r[1])),Ys.set(d,0,1,0);let wo=g?rS:nS,Oe=Math.sin(n[1]),xe=-Math.cos(n[1]),bt=cS(c),ae=Oe*bt.ahead[0]+xe*bt.ahead[1],Pe=Oe*bt.back[0]+xe*bt.back[1],de=f;Math.max(ae,Pe)>.3&&(de=ae>=Pe?1:-1);let Kt=_?0:-s[2]*wo;l+=(Kt-l)*(1-Math.exp(-Math.min(ge,.1)*5.5)),Kt===0&&Math.abs(l)<.01&&(l=0);let So=l*de*Math.min(ge,.1);_&&(s[0]=0,s[2]=0,So=0,l=0),So!==0&&(f=Math.sign(So)*Math.sign(-s[2]||1)),c=Math.max(0,Math.min(Td,c+So));let S=Ob(c);Ys.set(v,S[0]-i[0],0,S[1]-i[2]);let so=Ys.len(v);so===0&&u!==.25&&(u=(Math.abs((u+.5)%1-.5)-.25)*.8+.25,(u+.01)%.25<.02&&(u=.25));let Qe=u;if(u+=so/(g?sS:aS),i[1]=Cb,Ys.add(i,i,v),w<1){w+=ge/oS,w=Math.min(w,1);let ko=dS(w);Ys.set(i,Pb(ko,b[0],y[0]),i[1],Pb(ko,b[2],y[2]))}r[0]=0,r[1]+=(n[1]-r[1])*Math.min(1,Math.min(ge,.1)*fS),Math.abs(n[1]-r[1])<5e-4&&(r[1]=n[1]),Xs.identity(h),Xs.rotateX(h,h,0),Xs.rotateY(h,h,r[1]),Xs.translate(h,h,Ys.scale(Ce,i,-1))}}}});var qb=mt((VT,Db)=>{"use strict";var{skylightGLSL:pS,Z_START:vS,Z_END:mS,GLASS_Y:gS}=Ii(),{oculusGLSL:xS,A:Ks}=_a(),{windowLightGLSL:bS,C:Ph}=vr(),{doorLightGLSL:yS}=F0(),Ih=tr(),Dl=lh(),Fb=gl(),ka=t=>t.toFixed(4),Ld=.1,zd=700,uc={exposure:.88,shafts:1,bloom:1,vignette:.42,grain:.032};function wS(t,e){let o=e[0],n=e[1],r=e[2],a=e[3],s=e[4],i=e[5],c=e[6],f=e[7],l=e[8],p=e[9],d=e[10],v=e[11],u=e[12],h=e[13],m=e[14],g=e[15],b=o*i-n*s,y=o*c-r*s,w=o*f-a*s,_=n*c-r*i,M=n*f-a*i,T=r*f-a*c,I=l*h-p*u,N=l*m-d*u,B=l*g-v*u,D=p*m-d*h,K=p*g-v*h,q=d*g-v*m,X=b*q-y*K+w*D+_*B-M*N+T*I;return X?(X=1/X,t[0]=(i*q-c*K+f*D)*X,t[1]=(r*K-n*q-a*D)*X,t[2]=(h*T-m*M+g*_)*X,t[3]=(d*M-p*T-v*_)*X,t[4]=(c*B-s*q-f*N)*X,t[5]=(o*q-r*B+a*N)*X,t[6]=(m*w-u*T-g*y)*X,t[7]=(l*T-d*w+v*y)*X,t[8]=(s*K-i*B+f*I)*X,t[9]=(n*B-o*K-a*I)*X,t[10]=(u*M-h*w+g*b)*X,t[11]=(p*w-l*M-v*b)*X,t[12]=(i*N-s*D-c*I)*X,t[13]=(o*D-n*N+r*I)*X,t[14]=(h*y-u*_-m*b)*X,t[15]=(l*_-p*y+d*b)*X,t):null}function _S(t,e,o){let n=new Array(16);for(let r=0;r<4;r++)for(let a=0;a<4;a++){let s=0;for(let i=0;i<4;i++)s+=e[i*4+a]*o[r*4+i];n[r*4+a]=s}for(let r=0;r<16;r++)t[r]=n[r];return t}var MS=`
precision highp float;
attribute vec2 position;
varying vec2 uv;
void main() {
	uv = position * 0.5 + 0.5;
	gl_Position = vec4(position, 0.0, 1.0);
}`;Db.exports=(t,e)=>{let o=!!e.isPhone,n=t.hasExtension("webgl_depth_texture"),r=o?10:18,a=()=>e.post>=2?2:4,s=ct=>t.texture(Object.assign({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"},ct||{})),i=()=>t.framebuffer({color:s(),depth:!1}),c=s(),f=n?t.texture({width:4,height:4,format:"depth",type:"uint32"}):null,l=t.framebuffer({color:c,depth:f||!0}),p=[i(),i()],d=[i(),i()],v=[i(),i()],u=[i(),i()],h=new Array(16).fill(0),m=new Array(16).fill(0),g=[0,0,0],b={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},y={position:[-1,-1,3,-1,-1,3]},w=(ct,Wt,ze)=>t(Object.assign({vert:MS,frag:ct,attributes:y,count:3,depth:{enable:!1,mask:!1},cull:{enable:!1},blend:{enable:!1},uniforms:Wt,framebuffer:t.prop("out")},ze||{})),_=[2.6,0,vS-3.2,12.6,gS,mS+.4],M=[Ks.x0-.2,0,Ks.z0,Ks.x1,Ks.domeTop,Ks.z1],T=[Ph.x0,0,Ph.z0,Ph.x1,7.6,Ph.z1],I=[.35,0,.35,13.65,7.6,9],N=Fb.AIR_BOX,B=ct=>`vec3(${ka(ct[0])}, ${ka(ct[1])}, ${ka(ct[2])}), vec3(${ka(ct[3])}, ${ka(ct[4])}, ${ka(ct[5])})`,D=w(`
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

	${pS()}
	${xS()}
	${bS()}
	${yS()}
	${Fb.sunGLSL()}

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
			vec2 t = hitBox(eye, rd, ${B(_)});
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
			vec2 t = hitBox(eye, rd, ${B(M)});
			t.y = min(t.y, len);
			if (t.y > t.x) {
				float st = (t.y - t.x) / float(N);
				float acc = 0.0;
				for (int i = 0; i < N; i++) {
					vec3 p = eye + rd * (t.x + (float(i) + jit) * st);
					if (p.y < ${ka(Ks.dome.base)} && p.x > ${ka(Ks.x0-.1)}) acc += oculusOpen(p) * treeShade(p) * air(p);
				}
				float ph = phase(dot(rd, SHAFT), 0.6) + 0.05;
				sum += mix(vec3(1.0, 0.88, 0.68), vec3(0.62, 0.74, 1.0) * 1.2, night) * acc * st * ph * strength.y;
			}
		}

		// the corridor windows
		if (strength.z > 0.0) {
			vec2 t = hitBox(eye, rd, ${B(T)});
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
			vec2 t = hitBox(eye, rd, ${B(I)});
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
			vec2 t = hitBox(eye, rd, ${B(N)});
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
	}`,{depthTex:()=>f,invVP:()=>h,eye:()=>g,time:t.context("time"),night:()=>Ih.night,strength:()=>K,strength5:()=>q}),K=[0,0,0,0],q=0;function X(){let ct=uc.shafts*b.shafts,Wt=Ih.night;return K[0]=Dl.box(_)?.06*ct*(1+.9*Wt):0,K[1]=Dl.box(M,!1,"court")?.1*ct*(1+.9*Wt):0,K[2]=Dl.box(T)?.07*ct*(1+.4*Wt):0,K[3]=Dl.box(I)?.04*ct*(1-.75*Wt):0,Dl.zone==="studio"?(K[0]=K[1]=K[2]=K[3]=0,q=.03*ct*(1+1.3*Wt)):q=0,K[0]+K[1]+K[2]+K[3]+q>5e-4}let pt=w(`
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
	}`,{src:t.prop("src"),dir:(ct,Wt)=>[Wt.dir[0]/Wt.size[0],Wt.dir[1]/Wt.size[1]]}),Ft=w(`
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
	}`,{src:t.prop("src"),texel:(ct,Wt)=>[.5/Wt.size[0],.5/Wt.size[1]],threshold:t.prop("threshold")}),Lt=w(`
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
		return 2.0 * ${ka(Ld)} * ${ka(zd)} / (${ka(zd+Ld)} - z * ${ka(zd-Ld)});
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
	}`,{scene:()=>c,depthTex:()=>f||c,soft:()=>p[0],bloomA:()=>d[0],bloomB:()=>v[0],shafts:()=>u[0],res:()=>[l.width,l.height],time:t.context("time"),exposure:()=>uc.exposure*b.exposure,vignette:()=>Math.min(1,uc.vignette+b.vignette+.22*Ih.night),night:()=>Ih.night,grain:()=>uc.grain,bloomK:()=>uc.bloom,letterbox:()=>b.letterbox,fade:()=>b.fade,fadeColor:()=>b.fadeColor,aperture:()=>e.post>=2?b.aperture:0,focus:()=>b.focus,hasDepth:n?1:0},{framebuffer:null}),gt=t({framebuffer:()=>l});return{shot:b,look:uc,hasDepth:n,capture(ct,Wt,ze){let Se=Math.max(.4,Math.min(1,e.scale||1)),Xe=Math.max(2,Math.round(ct.drawingBufferWidth*Se/2)*2),_e=Math.max(2,Math.round(ct.drawingBufferHeight*Se/2)*2);(l.width!==Xe||l.height!==_e)&&l.resize(Xe,_e);let fo=Math.max(1,Math.ceil(Xe/2)),Eo=Math.max(1,Math.ceil(_e/2));p.forEach(Ko=>Ko.resize(fo,Eo)),d.forEach(Ko=>Ko.resize(Math.max(1,Math.ceil(Xe/4)),Math.max(1,Math.ceil(_e/4)))),v.forEach(Ko=>Ko.resize(Math.max(1,Math.ceil(Xe/8)),Math.max(1,Math.ceil(_e/8)))),u.forEach(Ko=>Ko.resize(Math.max(1,Math.ceil(Xe/a())),Math.max(1,Math.ceil(_e/a())))),_S(m,Wt.proj,Wt.view),wS(h,m),g[0]=Wt.eye[0],g[1]=Wt.eye[1],g[2]=Wt.eye[2],gt(()=>{t.clear({color:[0,0,0,1],depth:1}),ze()})},present(){let ct=Wt=>[Wt.width,Wt.height];n&&e.post>=1&&X()?(D({out:u[0]}),pt({out:u[1],src:u[0],dir:[1,0],size:ct(u[0])}),pt({out:u[0],src:u[1],dir:[0,1],size:ct(u[0])})):t.clear({color:[0,0,0,1],framebuffer:u[0]}),Ft({out:p[0],src:c,size:[l.width,l.height],threshold:0}),pt({out:p[1],src:p[0],dir:[1,0],size:ct(p[0])}),pt({out:p[0],src:p[1],dir:[0,1],size:ct(p[0])}),Ft({out:d[0],src:p[0],size:ct(p[0]),threshold:.42}),pt({out:d[1],src:d[0],dir:[1,0],size:ct(d[0])}),pt({out:d[0],src:d[1],dir:[0,1],size:ct(d[0])}),Ft({out:v[0],src:d[0],size:ct(d[0]),threshold:0}),pt({out:v[1],src:v[0],dir:[1.5,0],size:ct(v[0])}),pt({out:v[0],src:v[1],dir:[0,1.5],size:ct(v[0])}),Lt({out:null})}}}});var jb=mt((XT,Ub)=>{"use strict";var Gb=tr().GLSL,ES=Ts(),Rd=F0(),{C:SS,FAR_DOOR:kS}=vr(),AS=100*Math.PI/180,Hb=t=>[kS.x-t[2],t[1],SS.zc-7+t[0]],Bb=t=>[-t[2],t[1],t[0]];function TS(t){let e=[],o=[],n=[],r=[],a=ES.createBuilder(e,o,n,r);Rd.addFrames(a,t);let s=Rd.glassPanes(t),i=c=>{let f=[];for(let l=0;l<c.length;l+=3)f.push([c[l],c[l+1],c[l+2]]);return f};return{position:i(e),normal:i(o),elements:n,glass:s}}Ub.exports=t=>{let e=Rd.DOOR,o=["left","right"].map(l=>{let p=TS(l),d=p.position.length;return{part:l,hinge:l==="left"?e.x0:e.x1,sign:l==="left"?-1:1,src:p.position.map(v=>v.slice()),srcN:p.normal.map(v=>v.slice()),srcG:p.glass.map(v=>v.slice()),pos:t.buffer({data:new Float32Array(d*3),usage:"dynamic"}),nrm:t.buffer({data:new Float32Array(d*3),usage:"dynamic"}),gpos:t.buffer({data:new Float32Array(p.glass.length*3),usage:"dynamic"}),gnrm:t.buffer({data:new Float32Array(p.glass.length*3),usage:"dynamic"}),el:t.elements({data:new Uint32Array(p.elements),type:"uint32"}),glassCount:p.glass.length,outP:new Float32Array(d*3),outN:new Float32Array(d*3),outG:new Float32Array(p.glass.length*3),outGN:new Float32Array(p.glass.length*3)}}),n=null;function r(l){if(l!==n){n=l;for(let p of o){let d=p.sign*l,v=Math.cos(d),u=Math.sin(d),h=b=>{let y=b[0]-p.hinge,w=b[2];return[p.hinge+y*v+w*u,b[1],-y*u+w*v]},m=b=>[b[0]*v+b[2]*u,b[1],-b[0]*u+b[2]*v];p.src.forEach((b,y)=>{let w=Hb(h(b));p.outP.set(w,y*3),p.outN.set(Bb(m(p.srcN[y])),y*3)});let g=Bb(m([0,0,1]));p.srcG.forEach((b,y)=>{p.outG.set(Hb(h(b)),y*3),p.outGN.set(g,y*3)}),p.pos.subdata(p.outP),p.nrm.subdata(p.outN),p.gpos.subdata(p.outG),p.gnrm.subdata(p.outGN)}}}r(0);let a=`
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
		${Gb}
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
		${Gb}
		varying vec3 v_pos, v_n, v_eye;
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			float c = abs(dot(V, normalize(v_n)));
			float fres = pow(1.0 - c, 3.0);
			float d = (v_pos.x + v_pos.z) * 0.55 + v_pos.y * 0.85;
			float sheen = smoothstep(0.35, 0.0, abs(fract(d * 0.22) - 0.5)) * 0.05;
			float a = 0.05 + 0.32 * fres + sheen;
			gl_FragColor = vec4(toNight(mix(vec3(0.80, 0.86, 0.90), vec3(1.0, 0.95, 0.86), 0.4), 0.22), a);
		}`,attributes:{position:t.prop("pos"),normal:t.prop("nrm")},count:t.prop("count"),cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}}),c=0,f=()=>{r(c*AS);for(let l of o)s({pos:l.pos,nrm:l.nrm,el:l.el})};return f.glass=()=>{for(let l of o)i({pos:l.gpos,nrm:l.gnrm,count:l.glassCount})},f.setOpen=l=>{c=l||0},f.openNow=()=>c,f}});var Vb=mt((YT,Wb)=>{"use strict";var LS=tr().GLSL,{skylightGLSL:zS}=Ii(),{oculusGLSL:RS}=_a(),{windowLightGLSL:NS}=vr(),Ua=.22;function CS(){let t=[],e=[],o=[],n=[],s=(l,p)=>{let d=Ua*.2*Math.pow(Math.sin(Math.PI*Math.pow(l,.85)),.9)*(p>0?1.06:.94),v=l*Ua-Ua*.12,u=p*d,h=Math.abs(p)*d*.42-.14*l*l*Ua;h+=Math.sin(l*17+(p>0?0:2.1))*.012*Ua*p*p;let m=(l-.3)*.55,g=Math.cos(m),b=Math.sin(m),y=h*g-u*b,w=h*b+u*g;return[v,y,w+.05*Ua*l*l]},i=(l,p)=>{let v=s(Math.min(1,l+.01),p),u=s(Math.max(0,l-.01),p),h=s(l,Math.min(1,p+.01)),m=s(l,Math.max(-1,p-.01)),g=[v[0]-u[0],v[1]-u[1],v[2]-u[2]],b=[h[0]-m[0],h[1]-m[1],h[2]-m[2]],y=[b[1]*g[2]-b[2]*g[1],b[2]*g[0]-b[0]*g[2],b[0]*g[1]-b[1]*g[0]],w=Math.hypot(y[0],y[1],y[2])||1,_=y[1]<0?-1:1;return[y[0]/w*_,y[1]/w*_,y[2]/w*_]};for(let l=0;l<=18;l++){let p=l/18;for(let d=0;d<=5*2;d++){let v=d/5-1;t.push(s(p,v)),e.push(i(Math.min(.97,Math.max(.03,p)),v)),o.push([p,v])}}let c=5*2+1;for(let l=0;l<18;l++)for(let p=0;p<c-1;p++){let d=l*c+p,v=d+1,u=d+c,h=u+1;n.push([d,u,v],[v,u,h])}let f=t.length;return t.push([-Ua*.12,0,-.003],[-Ua*.12,0,.003],[-Ua*.24,-.01,.0015],[-Ua*.24,-.01,-.0015]),e.push([0,1,0],[0,1,0],[0,1,0],[0,1,0]),o.push([0,0],[0,0],[-.1,0],[-.1,0]),n.push([f,f+2,f+1],[f,f+3,f+2]),{pos:t,nrm:e,uv:o,idx:n}}Wb.exports=t=>{let e=CS(),o=t({vert:`
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
		${LS}
		uniform float time;
		uniform float yScale, visible;
		varying vec3 v_pos, v_normal;
		varying vec2 v_uv;
		varying vec3 v_eye;

		${zS()}
		${RS()}
		${NS()}

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
		}`,attributes:{position:e.pos,normal:e.nrm,uv:e.uv},elements:e.idx,uniforms:{model:t.prop("model"),visible:1},cull:{enable:!1}}),n=tr(),r=t({vert:`
		precision highp float;
		uniform mat4 proj, view, model;
		uniform float yScale;
		attribute vec2 corner;
		varying vec2 v_uv;
		void main() {
			vec3 c = (model * vec4(${(Ua*.35).toFixed(3)}, 0.0, 0.0, 1.0)).xyz;
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{model:t.prop("model"),night:()=>n.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(a){a&&a.visible&&(o({model:a.model}),n.night>.01&&r({model:a.model}))}}});var Kb=mt((KT,Yb)=>{"use strict";var{skylightGLSL:OS,Z_START:Xb,Z_END:PS}=Ii(),{oculusGLSL:IS,A:dc}=_a(),{windowLightGLSL:$S,C:Qs}=vr();Yb.exports=(t,e)=>{let o=e.isPhone?900:2600,n=e.isPhone?350:900,r=e.isPhone?450:1300,a=e.isPhone?13:22,s=7,i=()=>(s=s*16807%2147483647,(s-1)/2147483646),c=Qs.x0+.6,f=Qs.x1-.3,l=[];for(let u=0;u<o;u++)l.push([2.5+i()*10.5,.3+i()*8,Xb-3.5+i()*(PS-Xb+4.5),i()]);for(let u=0;u<n;u++)l.push([dc.x0+.3+i()*(dc.x1-dc.x0-.6),.3+i()*7.5,dc.z0+.3+i()*(dc.z1-dc.z0-.6),i()]);for(let u=0;u<r;u++)l.push([c+i()*(f-c),.2+i()*5.6,Qs.z0+.25+i()*(Qs.z1-Qs.z0-.5),i()]);let p=u=>u.toFixed(4),d=[[0,-50,0,0],[0,-50,0,0],[0,-50,0,0],[0,-50,0,0]],v=t({vert:`
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

		${OS()}
		${IS()}
		${$S()}

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
				p.x = ${p(c)} + mod(p.x - ${p(c)} - gust.x * (0.55 + 0.9 * seed.w), ${p(f-c)});
				p.y += sin(time * 5.0 + s * 11.0) * 0.22 * gust.y;
				p.z += cos(time * 4.3 + s * 13.0) * 0.30 * gust.y;
				p.z = clamp(p.z, ${p(Qs.z0+.1)}, ${p(Qs.z1-.1)});
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
			float size = sharp + blur * ${p(a)} * (0.6 + 0.4 * seed.w);
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
		}`,attributes:{seed:l},count:l.length,primitive:"points",uniforms:{time:t.context("time"),pixelScale:u=>u.viewportHeight*.006,focus:(u,h)=>h&&h.focus||6,aperture:(u,h)=>h&&h.aperture||0,wake0:(u,h)=>(h&&h.wake||d)[0],wake1:(u,h)=>(h&&h.wake||d)[1],wake2:(u,h)=>(h&&h.wake||d)[2],wake3:(u,h)=>(h&&h.wake||d)[3],wakeDir:(u,h)=>h&&h.wakeDir||[0,0,1],gust:(u,h)=>h&&h.gust||[0,0]},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});return u=>v(u||{})}});var o5=mt((QT,e5)=>{"use strict";var{C:t5}=vr(),Qb=tr(),Zb=15.3,FS=37.1,Jb=t5.z1+.9,DS=t5.z1+.7+16-.6;e5.exports=(t,e)=>{let o=e.isPhone?36:80,n=11,r=()=>(n=n*16807%2147483647,(n-1)/2147483646),a=[];for(let f=0;f<o;f++){let l=.35+Math.pow(r(),1.8)*2.4;a.push([Zb+r()*(FS-Zb),l,Jb+r()*(DS-Jb),r()])}let s=[],i=[];a.forEach(f=>{[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(l=>{s.push(l[0],l[1]),i.push(...f)})});let c=t({vert:`
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
		}`,attributes:{corner:s,seed:i},count:s.length/2,uniforms:{time:t.context("time"),night:()=>Qb.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(){Qb.night>.01&&c()}}});var Dh=mt((ZT,ha)=>{"use strict";var n5=tr(),i0=U0(),qS=Xi(),cs=Math.PI,ue=t=>(+t).toFixed(4),ja=t=>`vec3(${ue(t[0])}, ${ue(t[1])}, ${ue(t[2])})`,Yo={x0:-2.05,z0:41.45,z1:47.55,top:5.1},Mo=-.55,Vn=-2,hn=42.25,Pn=43.65,La=45.35,Fr=46.75,rr=2.75,la=.12,GS=(Mo+Vn)/2,Fo={x:-1.3,y:1.42,w:.42,h:.52,z:Pn,cell:.026},Ge={x0:-1.85,x1:-.75,top:.98,z0:Pn-.3,z1:Pn-.02},Aa={x0:-1.44,x1:-1.16,y0:Ge.top-.002,y1:Ge.top+.018},fa={cx:-1.3,cz:Pn-.165,w:.2,d:.255,y:Ge.top+.0012},dr={x:-1.03,z:Pn-.14,r:.042,h:.075},Jo={x:-.86,z:Pn-.12,h:.085,r:.019};Jo.flame=[Jo.x,Ge.top+.012+Jo.h+.028,Jo.z];var Fh={a:[dr.x-.004,Ge.top+.03,dr.z+.004],b:[dr.x-.13,Ge.top+.34,dr.z-.12]},un=[-1.5,2.42,44.66],On=[-1.78,1.95,hn+.09],Ta={x:-1.32,z:44.08,y:.64,heading:.32},s5={window:{eye:[-1.3,1.33,42.8],target:[Fo.x,1.37,Pn],fov:54},paper:{eye:[-1.3,1.4,43.23],target:[fa.cx,Ge.top,fa.cz+.01],fov:40},front:{eye:[1.6,1.62,43],target:[-.9,1.35,43],fov:55},bay:{eye:[4.2,2.1,44.6],target:[-1,1.9,44.5],fov:55}},Er={z0:(hn+Pn)/2+.03,z1:(hn+Pn)/2+.56,y0:.98,y1:1.78,x:Mo+.03,cell:.047};s5.peek={eye:[-1.2,1.42,42.95],target:[i0.PLAY.stoolX-i0.OFF[0],.85,i0.PLAY.keyFront+.2],fov:30};var is={ink:null,inkDirty:!1,fold:0,slide:0,shown:!0,active:!1};function r5(){return`
	// a quatrefoil hole in the brass (g: metres across the window from its centre)
	float grilleHole(vec2 g) {
		vec2 q = fract(g / ${ue(Fo.cell)} + 0.5) - 0.5;
		float d = min(min(length(q - vec2(0.17, 0.0)), length(q + vec2(0.17, 0.0))),
		              min(length(q - vec2(0.0, 0.17)), length(q + vec2(0.0, 0.17))));
		d = min(d, length(q) - 0.04);
		return 1.0 - smoothstep(0.15, 0.19, d);
	}
	// how much of the lamp's light reaches p (on the penitent's side) through the window
	float throughGrille(vec3 p, float soft) {
		vec3 d = p - ${ja(un)};
		if (d.z > -0.001) return 0.0;
		float t = (${ue(Fo.z)} - ${ue(un[2])}) / d.z;
		vec2 g = (${ja(un)} + d * t).xy - vec2(${ue(Fo.x)}, ${ue(Fo.y)});
		float inWin = (1.0 - smoothstep(${ue(Fo.w/2-.01)}, ${ue(Fo.w/2)} + soft, abs(g.x))) *
		              (1.0 - smoothstep(${ue(Fo.h/2-.01)}, ${ue(Fo.h/2)} + soft, abs(g.y)));
		// the lamp is not a point: the pattern blurs the further it falls
		// from the brass
		float pen = 0.045 * abs(p.z - ${ue(Fo.z)}) / abs(${ue(Fo.z)} - ${ue(un[2])}) / ${ue(Fo.cell)};
		vec2 qc = fract(g / ${ue(Fo.cell)} + 0.5) - 0.5;
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
		vec3 c = ${ja(Jo.flame)};
		vec3 d = c - p;
		float s = 1.0;
		// the pot: a short upright cylinder
		vec2 a = vec2(${ue(dr.x)}, ${ue(dr.z)}) - p.xz;
		vec2 dd = d.xz;
		float t = clamp(dot(a, dd) / max(dot(dd, dd), 1e-5), 0.0, 1.0);
		float r = length(p.xz + dd * t - vec2(${ue(dr.x)}, ${ue(dr.z)}));
		float y = p.y + d.y * t;
		s *= mix(1.0, 0.25, (1.0 - smoothstep(${ue(dr.r*.7)}, ${ue(dr.r*1.6)}, r)) * (1.0 - smoothstep(${ue(Ge.top+dr.h*.8)}, ${ue(Ge.top+dr.h*1.3)}, y)));
		// the quill: a thin capsule
		vec3 qa = ${ja(Fh.a)}, qb = ${ja(Fh.b)};
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
		bool inB1 = p.z < ${ue(Pn)} && p.z > ${ue(hn-.04)} && p.x < ${ue(Mo+.02)};
		bool inPriest = p.z >= ${ue(Pn)} && p.z < ${ue(La)} && p.x < ${ue(Mo)};
		bool inB2 = p.z >= ${ue(La)} && p.z < ${ue(Fr+.04)} && p.x < ${ue(Mo)};
		// how open to the hall it is
		float open = 1.0;
		if (inB1) open = mix(0.7, 1.1, smoothstep(${ue(Vn)}, ${ue(Mo)}, p.x));
		if (inPriest) open = 0.16;
		if (inB2) open = 0.10;
		// deeper into the bay, a little less of the hall's light
		open *= mix(0.62, 1.0, smoothstep(${ue(Yo.x0)}, 0.3, p.x));
		// the stair hall's candlelight (it stands there now: see stairhall.js)
		vec3 rs;
		vec3 col = roomLight(p + ${ja(i0.OFF)}, N, V, gloss, rs) * 1.25 * open;
		spec += rs * open;
		// the lamp, warm, behind the brass
		vec3 Ld = ${ja(un)} - p;
		float dl = length(Ld);
		vec3 L = Ld / dl;
		float T = inPriest ? 1.0 : (inB1 ? throughGrille(p, 0.0) : 0.0);
		vec3 lampCol = vec3(1.0, 0.70, 0.40) * mix(3.2, 1.0, night);
		vec3 lamp = lampCol * T * max(dot(N, L), 0.0) / (1.0 + dl * dl * 1.6);
		col += lamp;
		spec += lampCol * T * pow(max(dot(N, normalize(L + V)), 0.0), mix(8.0, 60.0, gloss)) * gloss / (1.0 + dl * dl * 1.6);
		// the little lamp in the open booth
		if (inB1) {
			vec3 Sd = ${ja(On)} - p;
			float ds = length(Sd);
			vec3 Ls = Sd / ds;
			vec3 sc = vec3(1.0, 0.72, 0.42) * mix(1.5, 0.35, night);
			col += sc * (max(dot(N, Ls), 0.0) * 0.8 + 0.2) / (0.15 + ds * ds * 1.6);
			spec += sc * pow(max(dot(N, normalize(Ls + V)), 0.0), mix(8.0, 60.0, gloss)) * gloss * 0.6 / (0.15 + ds * ds * 1.6);
		}
		// the candle
		if (night > 0.01) {
			vec3 Cd = ${ja(Jo.flame)} - p;
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
	}`}var Wn={WOOD:0,CARVED:1,VELVET:2,CUSHION:3,BRASS:4,INKGLASS:5,QUILL:6,LAMPGLASS:7,DARKWOOD:8};function i5(){let t=[],e=[],o=[],n=[],r=[],a=(f,l)=>[f[0]-l[0],f[1]-l[1],f[2]-l[2]],s=(f,l)=>[f[1]*l[2]-f[2]*l[1],f[2]*l[0]-f[0]*l[2],f[0]*l[1]-f[1]*l[0]],i=f=>{let l=Math.hypot(f[0],f[1],f[2])||1;return[f[0]/l,f[1]/l,f[2]/l]},c={pos:t,nrm:e,kind:o,uv:n,idx:r,norm:i,cross:s,sub:a};return c.v=(f,l,p,d)=>(t.push(f[0],f[1],f[2]),e.push(l[0],l[1],l[2]),o.push(p),n.push(d?d[0]:0,d?d[1]:0),t.length/3-1),c.quad=(f,l,p,d,v,u)=>{let h=i(s(a(l,f),a(d,f)));u=u||[[0,0],[1,0],[1,1],[0,1]];let m=c.v(f,h,v,u[0]),g=c.v(l,h,v,u[1]),b=c.v(p,h,v,u[2]),y=c.v(d,h,v,u[3]);r.push(m,g,b,m,b,y)},c.box=(f,l,p,d,v,u,h)=>{let m=(g,b,y,w,_,M,T,I)=>c.quad(g,b,y,w,h,[[_,T],[M,T],[M,I],[_,I]]);m([d,l,p],[d,l,u],[d,v,u],[d,v,p],p,u,l,v),m([f,l,u],[f,l,p],[f,v,p],[f,v,u],u,p,l,v),m([f,v,p],[d,v,p],[d,v,u],[f,v,u],f,d,p,u),m([f,l,u],[d,l,u],[d,l,p],[f,l,p],f,d,u,p),m([f,l,u],[d,l,u],[d,v,u],[f,v,u],f,d,l,v),m([d,l,p],[f,l,p],[f,v,p],[d,v,p],d,f,l,v)},c.tube=(f,l,p,d)=>{d=d||6;let v=t.length/3;for(let u=0;u<f.length;u++){let h=f[Math.max(0,u-1)],m=f[Math.min(f.length-1,u+1)],g=i(a(m,h)),b=Math.abs(g[1])>.9?[1,0,0]:[0,1,0],y=i(s(g,b)),w=s(y,g),_=typeof l=="function"?l(u/(f.length-1)):l;for(let M=0;M<=d;M++){let T=M/d*cs*2,I=Math.cos(T),N=Math.sin(T),B=[y[0]*I+w[0]*N,y[1]*I+w[1]*N,y[2]*I+w[2]*N];c.v([f[u][0]+B[0]*_,f[u][1]+B[1]*_,f[u][2]+B[2]*_],B,p,[u/(f.length-1),M/d])}}for(let u=0;u<f.length-1;u++)for(let h=0;h<d;h++){let m=v+u*(d+1)+h,g=m+d+1;r.push(m,m+1,g,m+1,g+1,g)}},c.lathe=(f,l,p,d,v)=>{v=v||20;let u=t.length/3;for(let h=0;h<p.length;h++){let[m,g]=p[h],b=p[Math.max(0,h-1)],y=p[Math.min(p.length-1,h+1)],w=y[0]-b[0],_=y[1]-b[1];for(let M=0;M<=v;M++){let T=M/v*cs*2,I=Math.cos(T),N=Math.sin(T),B=i([_*I,-w,_*N]);c.v([f+I*m,g,l+N*m],B,d,[M/v,h/(p.length-1)])}}for(let h=0;h<p.length-1;h++)for(let m=0;m<v;m++){let g=u+h*(v+1)+m,b=g+v+1;r.push(g,b,g+1,g+1,b,b+1)}},c.spire=(f,l,p,d,v,u)=>{let h=[[-d,-d],[d,-d],[d,d],[-d,d]];for(let m=0;m<4;m++){let g=h[m],b=h[(m+1)%4],y=[f+g[0],p,l+g[1]],w=[f+b[0],p,l+b[1]],_=[f,v,l],M=i(s(a(_,y),a(w,y))),T=c.v(y,M,u,[0,0]),I=c.v(w,M,u,[1,0]),N=c.v(_,M,u,[.5,1]);r.push(T,N,I)}},c.orient=()=>{for(let f=0;f<r.length;f+=3){let[l,p,d]=[r[f],r[f+1],r[f+2]],v=m=>[t[m*3],t[m*3+1],t[m*3+2]],u=s(a(v(p),v(l)),a(v(d),v(l))),h=[0,1,2].map(m=>e[l*3+m]+e[p*3+m]+e[d*3+m]);u[0]*h[0]+u[1]*h[1]+u[2]*h[2]<0&&(r[f+1]=d,r[f+2]=p)}return c},c}function $h(t,e,o,n){if(t<=e)return o;let r=t-e;return r>=n?0:Math.max(0,Math.sqrt(n*n-r*r)-(n-o))}var ln={ys:1.78,a:.56,r:.78};ln.apex=ln.ys+Math.sqrt(ln.r*ln.r-(ln.r-ln.a)*(ln.r-ln.a));function HS(){let t=i5(),e=Wn.WOOD,o=Wn.CARVED,n=Wn.DARKWOOD,r=.06;t.box(Vn,0,hn,Mo+.08,la,Fr,n),t.box(Vn,rr-.06,hn-.04,Mo+.1,rr,Fr+.04,e),t.box(Mo,rr-.2,hn-.06,Mo+.12,rr-.06,Fr+.06,e),t.box(Mo+.02,rr,hn-.08,Mo+.14,rr+.07,Fr+.08,n),t.box(Vn,la,hn,Vn+.04,rr-.06,Fr,e);for(let[l,p,d]of[[hn-r,hn,-1],[Fr,Fr+r,1]]){t.box(Vn,0,l,Mo+.08,rr,p,e);let v=d<0?l-.018:p;t.box(Vn+.18,.45,Math.min(v,v+.018),Mo-.12,2.35,Math.max(v,v+.018),n),t.box(Vn+.26,.55,Math.min(v,v+.03*d),Mo-.2,2.25,Math.max(v,v+.03*d),e)}{let l=Pn-.02,p=Pn+.02,d=Fo.x-Fo.w/2,v=Fo.x+Fo.w/2,u=Fo.y-Fo.h/2,h=Fo.y+Fo.h/2;t.box(Vn,la,l,Mo,Aa.y0,p,e),t.box(Vn,Aa.y0,l,Aa.x0,Aa.y1,p,e),t.box(Aa.x1,Aa.y0,l,Mo,Aa.y1,p,e),t.box(Vn,Aa.y1,l,Mo,u,p,e),t.box(Vn,u,l,d,h,p,e),t.box(v,u,l,Mo,h,p,e),t.box(Vn,h,l,Mo,rr-.06,p,e);let m=.05,g=l-.025;t.box(d-m,u-m,g,v+m,u,l,n),t.box(d-m,h,g,v+m,h+m,l,n),t.box(d-m,u,g,d,h,l,n),t.box(v,u,g,v+m,h,l,n),t.box(d-m-.02,h+m,g-.015,v+m+.02,h+m+.03,l,e),t.box(Aa.x0-.01,Aa.y1,l-.006,Aa.x1+.01,Aa.y1+.008,l,Wn.BRASS)}{let l=Er,p=Mo+.008,d=Mo+.052;t.box(p,l.y0,l.z0-.035,d,l.y1,l.z0,n),t.box(p,l.y0,l.z0,d,l.y0+.04,l.z1,n),t.box(p,l.y1-.04,l.z0,d,l.y1,l.z1,n),t.box(p+.008,la,l.z0-.035,d-.008,l.y0,l.z1,e),t.box(d-.008,la+.12,l.z0+.03,d,l.y0-.08,l.z1-.06,n),t.box(p-.004,l.y0-.012,l.z0-.045,d+.012,l.y0,l.z1,Wn.BRASS)}t.box(Vn,la,La-.02,Mo,rr-.06,La+.02,e),t.box(Ge.x0,Ge.top-.035,Ge.z0,Ge.x1,Ge.top,Ge.z1,e),t.tube([[Ge.x0,Ge.top-.018,Ge.z0],[Ge.x1,Ge.top-.018,Ge.z0]],.02,e,8);for(let l of[Ge.x0+.1,Ge.x1-.1]){let p=[];for(let d=0;d<=8;d++){let v=d/8;p.push([l,Ge.top-.04-.22*v,Ge.z1-.02-.22*Math.cos(v*cs/2)])}t.tube(p,.018,n,6)}t.box(Vn+.06,.12,hn,Mo-.1,.44,hn+.42,n),t.box(Vn+.08,.44,hn+.01,Mo-.12,.52,hn+.41,Wn.CUSHION),t.box(Vn+.06,.12,Fr-.42,Mo-.1,.44,Fr,n),t.box(On[0]-.05,On[1]-.16,hn,On[0]+.05,On[1]-.02,hn+.012,Wn.BRASS),t.tube([[On[0],On[1]-.09,hn+.012],[On[0],On[1]-.09,On[2]-.01],[On[0],On[1]-.05,On[2]]],.006,Wn.BRASS,6),t.lathe(On[0],On[2],[[0,On[1]-.05],[.028,On[1]-.035],[.034,On[1]+.01],[.024,On[1]+.06],[.026,On[1]+.065]],Wn.LAMPGLASS,16),t.box(Ta.x-.22,.12,Ta.z-.24,Ta.x+.22,Ta.y-.05,Ta.z+.16,n),t.box(Ta.x-.24,Ta.y-.05,Ta.z-.26,Ta.x+.24,Ta.y,Ta.z+.18,Wn.CUSHION),t.tube([[un[0],rr-.06,un[2]],[un[0],un[1]+.07,un[2]]],.005,Wn.BRASS,5),t.lathe(un[0],un[2],[[0,un[1]+.09],[.03,un[1]+.08],[.02,un[1]+.06]],Wn.BRASS,12),t.lathe(un[0],un[2],[[0,un[1]-.06],[.035,un[1]-.04],[.045,un[1]],[.035,un[1]+.05],[.018,un[1]+.07]],Wn.LAMPGLASS,16);let a=Mo,s=Mo+r;function i(l,p,d){let v=(l+p)/2,u=40,h=[];for(let g=0;g<=u;g++)h.push(la+(rr-.2-la)*g/u);let m=[];h.forEach(g=>m.push(g));for(let g=1;g<24;g++)m.push(ln.ys+(ln.apex-ln.ys)*g/24);m.sort((g,b)=>g-b);for(let g=0;g<m.length-1;g++){let b=m[g],y=m[g+1];if(y-b<1e-4)continue;let w=d?$h(b,ln.ys,ln.a,ln.r):0,_=d?$h(y,ln.ys,ln.a,ln.r):0,M=(T,I)=>[T,I];t.quad([s,b,v-w],[s,b,l],[s,y,l],[s,y,v-_],e,[M(v-w,b),M(l,b),M(l,y),M(v-_,y)]),t.quad([s,b,p],[s,b,v+w],[s,y,v+_],[s,y,p],e,[M(p,b),M(v+w,b),M(v+_,y),M(p,y)]),(w>0||_>0)&&(t.quad([a,b,v-w],[s,b,v-w],[s,y,v-_],[a,y,v-_],n),t.quad([s,b,v+w],[a,b,v+w],[a,y,v+_],[s,y,v+_],n),t.quad([a,b,l],[a,b,v-w],[a,y,v-_],[a,y,l],e),t.quad([a,b,v+w],[a,b,p],[a,y,p],[a,y,v+_],e))}if(t.box(a,rr-.2,l,s,rr-.06,p,e),t.box(s,rr-.42,l+.05,s+.012,rr-.24,p-.05,o),d){let g=[];for(let b=0;b<=30;b++){let y=b/30,w=y<.5?la+(ln.apex-la)*(y*2):ln.apex-(ln.apex-la)*((y-.5)*2),_=y<.5?-1:1;g.push([s+.01,Math.min(w,ln.apex-.002),v+_*($h(w,ln.ys,ln.a,ln.r)+.03)])}t.tube(g,.022,n,6)}}i(hn,Pn,!0),i(La,Fr,!0);{let l=Pn,p=La,d=(l+p)/2;t.box(a,la,l,s,rr-.06,p,e);let v={ys:1.85,a:.55,r:.8},u=[];for(let h=0;h<=40;h++){let m=h/40,g=v.ys+Math.sqrt(v.r*v.r-(v.r-v.a)*(v.r-v.a)),b=m<.5?.35+(g-.35)*(m*2):g-(g-.35)*((m-.5)*2),y=m<.5?-1:1;u.push([s+.012,Math.min(b,g-.002),d+y*$h(b,v.ys,v.a,v.r)])}u.push(u[0]),t.tube(u,.02,n,6),t.box(s,.95,d-.22,s+.015,1.3,d+.22,o),t.box(s,.35,d-.42,s+.01,.75,d+.42,n),t.tube([[s+.03,1.12,p-.13],[s+.06,1.12,p-.13],[s+.06,1.12,p-.2]],.009,Wn.BRASS,6)}[hn-.02,Pn,La,Fr+.02].forEach((l,p)=>{let d=p===1||p===2,v=.075,u=rr+(d?.62:.4);t.box(Mo+.06,0,l-v,Mo+.06+2*v,u,l+v,e),t.box(Mo+.04,u-.04,l-v-.02,Mo+.08+2*v,u,l+v+.02,n);let h=Mo+.06+v,m=d?.62:.5;t.spire(h,l,u,v*.95,u+m,e);for(let g=1;g<=3;g++){let b=u+m*g/4.2,y=v*.95*(1-g/4.2)+.02;for(let[w,_]of[[1,0],[-1,0],[0,1],[0,-1]])t.tube([[h+w*(y-.02),b-.02,l+_*(y-.02)],[h+w*(y+.015),b+.03,l+_*(y+.015)]],.008,n,4)}t.lathe(h,l,[[0,u+m-.02],[.03,u+m+.03],[.022,u+m+.07],[0,u+m+.1]],e,10)});let f=(l,p,d)=>{let v=(l+p)/2,u=Mo+.075,h=rr+.07,m=h+d,g=[1,0,0],b=t.v([u,h,l],g,o,[l,h]),y=t.v([u,h,p],g,o,[p,h]),w=t.v([u,m,v],g,o,[v,m]);t.idx.push(b,y,w);let _=t.v([u-.04,h,l],[-1,0,0],e),M=t.v([u-.04,h,p],[-1,0,0],e),T=t.v([u-.04,m,v],[-1,0,0],e);t.idx.push(_,T,M);let I=[],N=[];for(let q=0;q<=10;q++){let X=q/10;I.push([u+.02,h+d*X,l+(v-l)*X]),N.push([u+.02,h+d*X,p+(v-p)*X])}t.tube(I,.022,n,6),t.tube(N,.022,n,6);for(let q=2;q<=8;q+=2)for(let X of[I[q],N[q]])t.tube([X,[X[0]+.01,X[1]+.06,X[2]+(X===I[q]?-.02:.02)]],.01,n,4);t.lathe(u,v,[[0,m],[.035,m+.06],[.022,m+.12],[0,m+.16]].map(([q,X])=>[q,X]),e,10);let B=Math.min(.17,d*.32),D=h+d*.38,K=[];for(let q=0;q<=24;q++){let X=q/24*cs*2;K.push([u+.012,D+Math.sin(X)*B,v+Math.cos(X)*B])}t.tube(K,.012,n,5)};f(hn-.02,Pn,.52),f(Pn,La,.82),f(La,Fr+.02,.52),t.lathe(dr.x,dr.z,[[0,Ge.top],[.036,Ge.top+.001],[dr.r,Ge.top+.012],[dr.r*1.02,Ge.top+.035],[.036,Ge.top+.052],[.02,Ge.top+.062],[.016,Ge.top+.068]],Wn.INKGLASS,24),t.lathe(dr.x,dr.z,[[.016,Ge.top+.064],[.021,Ge.top+.066],[.022,Ge.top+.075],[.016,Ge.top+.076],[0,Ge.top+.072]],Wn.BRASS,20);{let l=Fh.a,p=Fh.b,d=26,v=b=>{let y=Math.sin(b*cs)*.025;return[l[0]+(p[0]-l[0])*b+y*.6,l[1]+(p[1]-l[1])*b+y*.4,l[2]+(p[2]-l[2])*b+y]},u=[];for(let b=0;b<=d;b++)u.push(v(b/d));t.tube(u,b=>.0028*(1-.7*b)+6e-4,Wn.QUILL,5);let h=t.norm(t.sub(p,l)),m=t.norm(t.cross(h,[.2,1,.1])),g=t.cross(m,h);for(let b of[-1,1]){let y=t.pos.length/3;for(let w=0;w<=d;w++){let _=w/d,M=v(_),T=_<.28?0:(b>0?.03:.02)*Math.sin(cs*Math.pow((_-.28)/.72,.75)),I=T*.25,N=[M[0]+m[0]*b*T-g[0]*I,M[1]+m[1]*b*T-g[1]*I,M[2]+m[2]*b*T-g[2]*I];t.v(M,g,Wn.QUILL,[_,0]),t.v(N,g,Wn.QUILL,[_,b])}for(let w=0;w<d;w++){let _=y+w*2;t.idx.push(_,_+2,_+1,_+1,_+2,_+3)}}}return t.orient()}function BS(t,e){let n=Yo.top,r=Yo.x0;t(r-.35,0,Yo.z0-.35,r,n+.35,Yo.z1+.35),t(r,0,Yo.z0-.35,-.35,n,Yo.z0),t(r,0,Yo.z1,-.35,n,Yo.z1+.35),t(r,n,Yo.z0,-.35,n+.35,Yo.z1),t(.35,0,Yo.z0-.42,.35+.16,n,Yo.z0),t(.35,0,Yo.z1,.35+.16,n,Yo.z1+.42),t(.35,n,Yo.z0-.5,.35+.18,n+.42,Yo.z1+.5),t(.35,n+.42,Yo.z0-.6,.35+.26,n+.52,Yo.z1+.6),t(.35,0,Yo.z0-.5,.35+.22,.42,Yo.z0),t(.35,0,Yo.z1,.35+.22,.42,Yo.z1+.5),t(-.35-.01,0,Yo.z0,.35+.12,.02,Yo.z1),e(r,Yo.z0,-.35,Yo.z1)}ha.exports=t=>{let e=G0(),o=n5.GLSL,n=HS(),r=`
	precision highp float;
	${o}
	uniform float time;
	${e.lanternGLSL()}
	${i0.roomGLSL()}
	${r5()}
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
	}`,s=t({vert:a,frag:`${r}
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
		}`,attributes:{position:n.pos,normal:n.nrm,kind:n.kind,uv:n.uv},elements:n.idx});function i(Lt,gt,ct,Wt){let ze=[],Se=[],Xe=[],_e=[],fo=[],Zt=Mo-.02,ge=ln.apex+.08,Ce=la+.015;for(let no=0;no<=40;no++){let wo=no/40,Oe=ge+(Ce-ge)*wo;for(let xe=0;xe<=90;xe++){let bt=xe/90,ae=ct?.2+.13*wo*wo:gt-Lt,Pe=Lt+bt*ae,de=ct?.05+.02*wo:.035+.01*Math.sin(bt*7),Kt=bt*Wt*cs*2+Math.sin(wo*2+bt*5)*.6,So=Zt-de*(.5+.5*Math.sin(Kt))-(ct?.02*wo:0),so=[1,0,-(-de*.5*Math.cos(Kt)*Wt*cs*2/ae)],Qe=Math.hypot(so[0],so[1],so[2]);ze.push(So,Oe,Pe),Se.push(so[0]/Qe,0,so[2]/Qe),Xe.push(2),_e.push(Math.sin(Kt),wo)}}for(let no=0;no<40;no++)for(let wo=0;wo<90;wo++){let Oe=no*91+wo,xe=Oe+90+1;fo.push(Oe,xe,Oe+1,Oe+1,xe,xe+1)}for(let no=0;no<fo.length;no+=3){let[wo,Oe,xe]=[fo[no],fo[no+1],fo[no+2]],bt=Kt=>[ze[Kt*3],ze[Kt*3+1],ze[Kt*3+2]],ae=[0,1,2].map(Kt=>bt(Oe)[Kt]-bt(wo)[Kt]),Pe=[0,1,2].map(Kt=>bt(xe)[Kt]-bt(wo)[Kt]);ae[1]*Pe[2]-ae[2]*Pe[1]<0&&(fo[no+1]=xe,fo[no+2]=Oe)}return{pos:ze,nrm:Se,kind:Xe,uv:_e,idx:fo}}let c=i(hn+.02,hn+.4,!0,6),f=i(La+.04,Fr-.04,!1,9),l={pos:c.pos.concat(f.pos),nrm:c.nrm.concat(f.nrm),kind:c.kind.concat(f.kind),uv:c.uv.concat(f.uv),idx:c.idx.concat(f.idx.map(Lt=>Lt+c.pos.length/3))},p=t({vert:`
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
		}`,attributes:{position:l.pos,normal:l.nrm,uv:l.uv},elements:l.idx}),d=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec2 corner;
		varying vec3 v_pos, v_eye;
		void main() {
			vec3 p = vec3(${ue(Fo.x)} + corner.x * ${ue(Fo.w/2)}, ${ue(Fo.y)} + corner.y * ${ue(Fo.h/2)}, ${ue(Fo.z)});
			v_pos = p; v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`${r}
		varying vec3 v_pos, v_eye;
		void main() {
			vec2 g = v_pos.xy - vec2(${ue(Fo.x)}, ${ue(Fo.y)});
			float hole = grilleHole(g);
			if (hole > 0.5) discard;
			vec3 N = vec3(0.0, 0.0, v_eye.z < ${ue(Fo.z)} ? -1.0 : 1.0);
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
			vec3 p = vec3(${ue(Er.x)}, ${ue((Er.y0+Er.y1)/2)} + corner.y * ${ue((Er.y1-Er.y0)/2-.04)}, ${ue((Er.z0+Er.z1)/2)} + corner.x * ${ue((Er.z1-Er.z0)/2)});
			v_pos = p; v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`${r}
		varying vec3 v_pos, v_eye;
		void main() {
			vec2 g = (v_pos.zy - vec2(${ue((Er.z0+Er.z1)/2)}, ${ue((Er.y0+Er.y1)/2)})) * ${ue(Fo.cell/Er.cell)};
			float hole = grilleHole(g);
			if (hole > 0.5) discard;
			vec3 N = vec3(v_eye.x < ${ue(Er.x)} ? -1.0 : 1.0, 0.0, 0.0);
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
			vec3 p = vec3(${ue(Fo.x)} + corner.x * 0.75, ${ue(Fo.y)} + corner.y * 0.9, ${ue(La-.03)});
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),h=14,m=[];for(let Lt=0;Lt<h;Lt++)[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(gt=>m.push(gt[0],gt[1],(Lt+.5)/h));let g=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec3 c;
		varying vec3 v_pos;
		void main() {
			// slices across the booth, from the window back towards the bench
			vec3 p = vec3(${ue(GS)} + c.x * ${ue((Mo-Vn)/2-.02)}, 0.9 + (c.y + 1.0) * 0.8, ${ue(Pn-.03)} - c.z * 1.25);
			v_pos = p;
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`
		precision highp float;
		uniform float night, time;
		${r5().split("// the candle's light is hidden")[0]}
		varying vec3 v_pos;
		void main() {
			float T = throughGrille(v_pos, 0.0);
			float d = length(v_pos - ${ja(un)});
			// dust drifting in the beam
			float dust = 0.65 + 0.35 * sin(v_pos.x * 23.0 + time * 0.3) * sin(v_pos.y * 17.0 - time * 0.21) * sin(v_pos.z * 19.0 + time * 0.17);
			vec3 col = vec3(1.0, 0.68, 0.36) * T * dust * 0.035 / (0.4 + d * d * 0.5) * mix(1.0, 0.7, night);
			gl_FragColor = vec4(col, 1.0);
		}`.replace("float grilleHole","float grilleHole"),attributes:{c:{buffer:t.buffer(m),size:3}},count:m.length/3,depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}}),b=(()=>{if(typeof document=="undefined")return null;let Lt=document.createElement("canvas");Lt.width=512,Lt.height=652;let gt=Lt.getContext("2d");gt.fillStyle="#cdb38a",gt.fillRect(0,0,Lt.width,Lt.height);let ct=7,Wt=()=>(ct=ct*1664525+1013904223>>>0,ct/4294967296);for(let Se=0;Se<2400;Se++){gt.fillStyle=`rgba(${Wt()<.5?"90,62,30":"245,230,200"},${.03+Wt()*.05})`;let Xe=Wt()*Lt.width,_e=Wt()*Lt.height;gt.fillRect(Xe,_e,1+Wt()*14,1)}for(let Se=0;Se<26;Se++){let Xe=Wt()*Lt.width,_e=Wt()*Lt.height,fo=20+Wt()*90,Eo=gt.createRadialGradient(Xe,_e,0,Xe,_e,fo);Eo.addColorStop(0,`rgba(120,80,35,${.04+Wt()*.06})`),Eo.addColorStop(1,"rgba(120,80,35,0)"),gt.fillStyle=Eo,gt.fillRect(Xe-fo,_e-fo,fo*2,fo*2)}let ze=gt.createRadialGradient(Lt.width/2,Lt.height/2,Lt.width*.3,Lt.width/2,Lt.height/2,Lt.height*.72);return ze.addColorStop(0,"rgba(110,70,30,0)"),ze.addColorStop(1,"rgba(110,70,30,0.38)"),gt.fillStyle=ze,gt.fillRect(0,0,Lt.width,Lt.height),Lt})(),y=b?t.texture({data:b,min:"linear",mag:"linear",flipY:!1}):t.texture(),w=t.texture({shape:[8,8],data:new Uint8Array(8*8*4)}),_=[18,24],M=[],T=[];for(let Lt=0;Lt<=_[1];Lt++)for(let gt=0;gt<=_[0];gt++)M.push(gt/_[0],Lt/_[1]);for(let Lt=0;Lt<_[1];Lt++)for(let gt=0;gt<_[0];gt++){let ct=Lt*(_[0]+1)+gt,Wt=ct+_[0]+1;T.push(ct,ct+1,Wt,ct+1,Wt+1,Wt)}let I=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale, fold, slide;
		attribute vec2 st;
		varying vec3 v_pos, v_n, v_eye;
		varying vec2 v_st;
		void main() {
			// s across (texture left = +x), t from the near edge (0) to the far (1)
			float s = st.x, t = st.y;
			float x = ${ue(fa.cx+fa.w/2)} - s * ${ue(fa.w)};
			float zNear = ${ue(fa.cz-fa.d/2)};
			vec3 p = vec3(x, ${ue(fa.y)}, zNear + t * ${ue(fa.d)});
			vec3 n = vec3(0.0, 1.0, 0.0);
			// a slight cockle
			p.y += 0.0012 * sin(s * 7.0 + t * 3.0) * sin(t * 5.0);
			// the near half folds up and over onto the far half
			if (t < 0.5) {
				float a = fold * 3.14159 * 0.985;
				float dd = (0.5 - t) * ${ue(fa.d)};
				float zf = zNear + 0.5 * ${ue(fa.d)};
				p.z = zf - dd * cos(a);
				p.y = ${ue(fa.y)} + dd * sin(a) + 0.0016 * fold;
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
			if (v_pos.z > ${ue(Pn+.015)}) discard;
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
		}`,attributes:{st:{buffer:t.buffer(M),size:2}},elements:T,uniforms:{fold:()=>is.fold,slide:()=>is.slide,paperTex:y,inkTex:w},cull:{enable:!1}}),N=i5();N.lathe(Jo.x,Jo.z,[[0,Ge.top],[.048,Ge.top+.002],[.052,Ge.top+.012],[.046,Ge.top+.014],[.022,Ge.top+.012],[0,Ge.top+.012]],Wn.BRASS,24),N.lathe(Jo.x,Jo.z,[[0,Ge.top+.012],[Jo.r,Ge.top+.012],[Jo.r*1.02,Ge.top+.012+Jo.h*.6],[Jo.r,Ge.top+.012+Jo.h],[Jo.r*.75,Ge.top+.012+Jo.h-.004],[0,Ge.top+.012+Jo.h-.008]],9,20),N.tube([[Jo.x,Ge.top+.012+Jo.h-.008,Jo.z],[Jo.x+.001,Ge.top+.012+Jo.h+.012,Jo.z]],.0012,8,4),N.orient();let B=t({vert:a,frag:`${r}
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
				float up = smoothstep(${ue(Ge.top+Jo.h*.4)}, ${ue(Ge.top+.012+Jo.h)}, v_pos.y);
				col += vec3(1.0, 0.55, 0.22) * up * 0.22 * candleFlicker();
			}
			gl_FragColor = vec4(col * night, 1.0);
		}`,attributes:{position:N.pos,normal:N.nrm,kind:N.kind,uv:N.uv},elements:N.idx}),D=t({vert:`
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
			vec3 p = ${ja(Jo.flame)} + right * corner.x * size.x + vec3(0.0, 1.0, 0.0) * corner.y * size.y;
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{halo:t.prop("halo")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),K=[0,0],q=t({uniforms:{view:t.prop("view")}}),X=new Float32Array(16);function pt(Lt){qS.translate(X,Lt.view,i0.OFF),q({view:X},()=>Ft(Lt))}function Ft(Lt){let gt=Lt&&Lt.reflected;if(s(),p(),d(),v(),is.ink&&is.inkDirty){let ct=is.ink;K[0]!==ct.width||K[1]!==ct.height?(w({data:ct,min:"linear",mag:"linear",flipY:!1}),K=[ct.width,ct.height]):w.subimage(ct),is.inkDirty=!1}is.shown&&I(),n5.night>.01&&(B(),gt||(D({halo:1}),D({halo:0}))),gt||(u(),g())}return pt};ha.exports.addBay=BS;ha.exports.BAY=Yo;ha.exports.OFF=i0.OFF;ha.exports.STATE=is;var a5=t=>[t[0]+i0.OFF[0],t[1]+i0.OFF[1],t[2]+i0.OFF[2]];ha.exports.SHOTS=Object.fromEntries(Object.entries(s5).map(([t,e])=>[t,Object.assign({},e,{eye:a5(e.eye),target:a5(e.target)})]));ha.exports.SEAT=Ta;ha.exports.LAMP=un;ha.exports.SCONCE=On;ha.exports.GRILLE=Fo;ha.exports.PAPER=fa;ha.exports.ZONE={FRONT:Mo,BACK:Vn,ZA:hn,ZB:Pn,ZC:La,ZD:Fr}});var Nd=mt((JT,l5)=>{"use strict";function US(t){let e=t>>>0||1;return function(){return e=e*1664525+1013904223>>>0,e/4294967296}}var c5={stroke:.05,letter:.045,word:.15,comma:.28,stop:.45,line:.25,para:.6},jS=["th","ng","er"];function WS(t,e,o){o=Object.assign({ink:"#2a1d12",xh:14,speed:23,lineHeight:2.85,seed:7,width:.12,pace:.45},o||{});let n=t.getContext("2d"),r={};Object.keys(c5).forEach(h=>{r[h]=c5[h]*o.pace});let a=[],s=0,i=0,c=0,f=[];function l(h,m){let g=US(o.seed),b=o.xh,y={},w=X=>{let pt=e[X];if(!pt)return null;let Ft=Math.floor(g()*pt.length);return pt.length>1&&Ft===y[X]&&(Ft=(Ft+1)%pt.length),y[X]=Ft,pt[Ft]},_=X=>{if(e[X])return{g:w(X),sc:1};let pt=X.toLowerCase();return e[pt]?{g:w(pt),sc:/[A-Z]/.test(X)?1.32:1}:null},M=[],T=.15,I=0,N=0,B=(g()-.5)*.02,D=m/b,K=h.split(/\n\s*\n/);K.forEach((X,pt)=>{X.replace(/\s+/g," ").trim().split(" ").forEach(Lt=>{let gt=[];for(let Se=0;Se<Lt.length;Se++){let Xe=Lt.substr(Se,2).toLowerCase();if(jS.indexOf(Xe)>=0&&e[Xe]&&g()<.55&&Lt[Se]===Lt[Se].toLowerCase()){gt.push({ch:Xe,gl:{g:w(Xe),sc:1}}),Se++;continue}let _e=_(Lt[Se]);_e&&_e.g&&gt.push({ch:Lt[Se],gl:_e})}let ct=gt.map(()=>.17+g()*.07),Wt=gt.reduce((Se,Xe,_e)=>Se+Xe.gl.g.w*Xe.gl.sc+ct[_e],0);I>0&&I+Wt>D&&(I=0,N++,T+=r.line,B=(g()-.5)*.02),gt.forEach((Se,Xe)=>{let _e=Se.gl.g,fo=Se.gl.sc*(.95+g()*.1),Eo=(g()-.5)*.06,Ko=(g()-.5)*.08+B*I,Zt=I,ge=N*o.lineHeight+1.9+Ko,Ce=Math.cos(Eo),no=Math.sin(Eo),wo=xe=>[(Zt+(xe[0]*Ce-xe[1]*no)*fo)*b,(ge+(xe[0]*no+xe[1]*Ce)*fo)*b],Oe=(xe,bt)=>{let ae=0;for(let de=1;de<xe.length;de++)ae+=Math.hypot(xe[de][0]-xe[de-1][0],xe[de][1]-xe[de-1][1]);let Pe=Math.max(o.minDur||(bt?.06:.07),ae/(o.speed*b));M.push({pts:xe,L:ae,start:T,dur:Pe,dot:bt}),T+=Pe};if(_e.s.forEach((xe,bt)=>{bt>0&&(T+=r.stroke),Oe(xe.map(wo),!1)}),_e.dot){let xe=_e.s[0][0];_e.s.forEach(ae=>ae.forEach(Pe=>{Pe[1]<xe[1]&&(xe=Pe)}));let bt=wo([xe[0]+.1,-1.36]);T+=r.stroke*1.4,Oe([bt,[bt[0]+b*.05,bt[1]+b*.03]],!0)}T+=r.letter*(.6+g()*.8),I+=_e.w*fo+ct[Xe]});let ze=Lt[Lt.length-1];T+=/[.!?]/.test(ze)?r.stop:/[,;:]/.test(ze)?r.comma:r.word,I+=.55+g()*.2}),pt<K.length-1&&(I=0,N+=1.6,T+=r.para)});let q=(N+1)*o.lineHeight*b+b*1.55;return{strokes:M,total:T,height:q}}function p(h,m){if(o.fixed){let g=o.fixed;n.setTransform(1,0,0,1,g.mx,g.my),n.clearRect(-g.mx,-g.my,t.width,t.height)}else{let g=Math.min(window.devicePixelRatio||1,2);t.width=Math.round(h*g),t.height=Math.round(m*g),t.style.height=m+"px",t.style.width=h+"px",n.setTransform(g,0,0,g,0,0),n.clearRect(0,0,h,m)}n.strokeStyle=o.ink,n.fillStyle=o.ink,n.lineCap="round",n.lineJoin="round",o.shadow&&(n.shadowColor=o.shadow,n.shadowBlur=o.shadowBlur||6)}let d=h=>h<.5?2*h*h:1-Math.pow(-2*h+2,2)/2;function v(h,m){let g=f[h.i]||0;if(m<=g)return;let b=o.width*o.xh,y=0;for(let w=1;w<h.pts.length;w++){let _=h.pts[w-1],M=h.pts[w],T=Math.hypot(M[0]-_[0],M[1]-_[1]),I=y,N=y+T;if(y=N,N<=g||T===0)continue;if(I>=m)break;let B=Math.max(0,(g-I)/T),D=Math.min(1,(m-I)/T),K=[_[0]+(M[0]-_[0])*B,_[1]+(M[1]-_[1])*B],q=[_[0]+(M[0]-_[0])*D,_[1]+(M[1]-_[1])*D],X=(I+N)/2/(h.L||1),pt=.72+.28*Math.sin(Math.PI*Math.min(1,Math.max(0,X)));n.lineWidth=b*pt,n.globalAlpha=.86+.14*pt,n.beginPath(),n.moveTo(K[0],K[1]),n.lineTo(q[0],q[1]),n.stroke()}h.dot&&g===0&&(n.globalAlpha=1,n.beginPath(),n.arc(h.pts[0][0],h.pts[0][1],b*.75,0,Math.PI*2),n.fill()),f[h.i]=m}function u(h){let m=(h-c)/1e3;for(let g=0;g<a.length;g++){let b=a[g];if(b.start>m)break;let y=Math.min(1,(m-b.start)/b.dur);v(b,d(y)*b.L)}if(o.onPen){let g=0;for(;g+1<a.length&&a[g+1].start<=m;)g++;a[g]&&o.onPen(a[g].pts[0][1])}m<s?i=requestAnimationFrame(u):o.onDone&&o.onDone()}return{write(h,m){cancelAnimationFrame(i);let g=o.fixed?t.width-2*o.fixed.mx:t.parentElement.clientWidth,b=l(h,g);a=b.strokes,s=b.total;let y=typeof o.maxTime=="function"?o.maxTime(h):o.maxTime;if(y&&s>y){let _=y/s;a.forEach(M=>{M.start*=_,M.dur*=_}),s=y}a.forEach((_,M)=>{_.i=M}),f=[],p(g,b.height);let w=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(m||w){a.forEach(_=>v(_,_.L));return}return c=performance.now(),i=requestAnimationFrame(u),s},finish(){cancelAnimationFrame(i),a.forEach(h=>v(h,h.L)),o.onDone&&o.onDone()},stop(){cancelAnimationFrame(i)}}}l5.exports=WS});var Od=mt((tL,f5)=>{"use strict";var Cd=tr(),VS='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M5.5 18.5l1.7-1.7M16.8 7.2l1.7-1.7"/></svg>',XS='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M19.5 14.6A8 8 0 0 1 9.4 4.5a8 8 0 1 0 10.1 10.1z"/></svg>';f5.exports=function(e){let o=document.createElement("button");o.type="button",o.className=e+" light-toggle";let n=()=>{let r=Cd.isNight;o.innerHTML=r?VS:XS,o.setAttribute("aria-label",r?"Switch to day":"Switch to night"),o.title=r?"Day":"Night",o.setAttribute("aria-pressed",r?"true":"false")};return n(),Cd.onChange(n),["mousedown","pointerdown"].forEach(r=>o.addEventListener(r,a=>a.stopPropagation())),o.addEventListener("click",r=>{r.stopPropagation(),Cd.toggle()}),o}});var p5=mt((eL,d5)=>{"use strict";var In=Dh(),YS=U0(),KS=Nd(),QS="81efb912-50a2-4fcd-b5e8-c3a28eecbe93",h5=100,A0=t=>Math.max(0,Math.min(1,t)),Qr=(t,e,o)=>{let n=A0((o-t)/(e-t));return n*n*(3-2*n)},Wa=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,za=(t,e,o)=>t+(e-t)*o,Gl=(t,e,o)=>[za(t[0],e[0],o),za(t[1],e[1],o),za(t[2],e[2],o)];function Zs(t,e){let o=t.length-1,n=A0(e)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,s=t[Math.max(0,r-1)],i=t[r],c=t[r+1],f=t[Math.min(o,r+2)];return[0,1,2].map(l=>.5*(2*i[l]+(-s[l]+c[l])*a+(2*s[l]-5*i[l]+4*c[l]-f[l])*a*a+(-s[l]+3*i[l]-3*c[l]+f[l])*a*a*a))}var qh=t=>({eye:t.eye.slice(),target:t.target.slice(),fov:t.fov,roll:0});function Pd(t,e,o){return{eye:Gl(t.eye,e.eye,o),target:Gl(t.target,e.target,o),fov:za(t.fov,e.fov,o),roll:za(t.roll||0,e.roll||0,o)}}var Hl=YS.PLAY,Va=[Hl.stoolX,1,Hl.keyFront+.25],Gh=[Hl.stoolX,Hl.keyTop+.03,Hl.keyFront-.05],$d=t=>{let e=(15+110*t)*Math.PI/180,o=2.1+.4*t;return[Va[0]+Math.cos(e)*o,1.15+.4*t,Va[2]+Math.sin(e)*o]},pc=[{eye:$d(1),target:[Va[0],.92,Va[2]-.15],fov:46,aperture:.6},{eye:[-6.93,3.2,45.85],target:[-6.93,.77,45.3],fov:34,aperture:.6,to:Gh},{eye:[Va[0]+1,1.14,Va[2]+1.72],target:[Gh[0]+.05,.8,Gh[2]+.05],fov:40,aperture:1,to:Gh}],u5=(t,e)=>Math.hypot(t[0]-e[0],t[1]-e[1],t[2]-e[2]),Hh=t=>({fade:0,letterbox:.55,exposure:1.3,focus:u5(t.eye,t.to||Va),aperture:t.aperture,vignette:.42,shafts:0}),Id={fade:0,letterbox:.55,exposure:2.1,focus:6.2,aperture:.55,vignette:.45,shafts:0},vc={fade:0,letterbox:.55,exposure:2,focus:.82,aperture:1.1,vignette:.48,shafts:0},ql={fade:0,letterbox:.55,exposure:1.8,focus:.42,aperture:1.3,vignette:.5,shafts:0},ZS=`
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
`;d5.exports=function(e){let{root:o,avatar:n}=e,r=document.createElement("style");r.textContent=ZS,document.head.appendChild(r);let a=document.createElement("div");a.className="conf-ui",a.innerHTML=`
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
		</div>`,o.appendChild(a);let s=a.querySelector(".conf-write"),i=a.querySelector("textarea"),c=a.querySelector('[data-act="send"]'),f=a.querySelector(".conf-hint"),l=a.querySelector(".conf-close"),p=a.querySelector(".conf-final"),d=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,v=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;i.addEventListener("input",()=>{let bt=i.value.match(new RegExp("^\\s*(\\S+\\s+){0,"+(h5-1)+"}\\S+"));(i.value.trim()?i.value.trim().split(/\s+/).length:0)>h5&&bt&&(i.value=bt[0]),c.disabled=!i.value.trim()}),["keydown","keyup","keypress"].forEach(bt=>i.addEventListener(bt,ae=>ae.stopPropagation())),a.addEventListener("pointerdown",bt=>bt.stopPropagation()),a.addEventListener("click",bt=>{let ae=bt.target.closest("button");ae&&(bt.stopPropagation(),ae.dataset.act==="send"&&pt(),ae.dataset.act==="leave"&&gt())});let u=!1,h="",m=0,g=null,b=null,y="",w=null,_=0,M="",T=document.createElement("canvas");T.width=512,T.height=652;function I(bt){bt!==M&&(M=bt,s.classList.toggle("on",bt==="write"),f.classList.toggle("on",bt==="hint"),l.classList.toggle("on",u&&bt==="hint"&&(h==="room"||h==="peek")),p.classList.toggle("on",bt==="final"),bt==="write"&&setTimeout(()=>{if(h==="write")try{i.focus({preventScroll:!0})}catch(ae){}},900))}function N(bt){h=bt,m=0}function B(bt,ae){if(u)return;u=!0,g={eye:bt.eye.slice(),target:bt.target.slice(),fov:bt.fov,roll:bt.roll||0},b=Object.assign({},ae),y="",i.value="",c.disabled=!0,In.STATE.fold=0,In.STATE.slide=0,In.STATE.shown=!0,In.STATE.active=!0;let Pe=T.getContext("2d");Pe.setTransform(1,0,0,1,0,0),Pe.clearRect(0,0,T.width,T.height),In.STATE.ink=T,In.STATE.inkDirty=!0,document.body.classList.add("confessing");let de=pc[0],Kt=v?.3:5.5,So=v?.3:3.6;D.i=0,D.u=0,D.T=Kt+So,D.moving=!0,D.rest=0,D.raw=!0,D.lookFrom=b,D.lookTo=Hh(de);let S=[g.eye,[3.4,1.75,44.5],[.3,1.72,44.7],[-2.8,1.5,45.4],$d(0)],so=[g.target,[-3,1.9,44.5],[-6.5,1.3,44.9],[Va[0],1,Va[2]-.1],de.target];D.path=Qe=>{let ko=Qe*(Kt+So);if(ko<Kt){let Sr=ko/Kt,Yn=1-Math.cos(Sr*Math.PI/2);return{eye:Zs(S,Yn),target:Zs(so,Qr(0,1,Yn*1.05)),fov:za(g.fov,52,Qr(.4,1,Yn)),roll:(g.roll||0)*(1-Yn)}}let Oo=(ko-Kt)/So,yn=1-Math.pow(1-Oo,2.4);return{eye:$d(yn),target:de.target,fov:za(52,de.fov,yn),roll:.05*Math.sin(Math.PI*yn)}},N("room"),I("")}let D={i:0,u:0,T:1,moving:!1,rest:0,raw:!1,path:null,lookFrom:null,lookTo:null},K=()=>d?"Scroll on":"Swipe up";function q(bt){let ae=ze,Pe=pc[bt],de={eye:ae.eye.slice(),target:ae.target.slice(),fov:ae.fov,roll:ae.roll||0},Kt=Gl(de.eye,Pe.eye,.5),So=[Kt[0]-Va[0],0,Kt[2]-Va[2]],S=Math.hypot(So[0],So[2])||1,so=[Kt[0]+So[0]/S*.6,Kt[1]+.3,Kt[2]+So[2]/S*.6];D.path=Qe=>{let ko=1-Qe;return{eye:[0,1,2].map(Oo=>ko*ko*de.eye[Oo]+2*ko*Qe*so[Oo]+Qe*Qe*Pe.eye[Oo]),target:Gl(de.target,Pe.target,Qr(0,1,Qe)),fov:za(de.fov,Pe.fov,Qe),roll:de.roll*ko}},D.lookFrom=X||Hh(pc[D.i]),D.lookTo=Hh(Pe),D.i=bt,D.u=0,D.moving=!0,D.rest=0,D.raw=!1,D.T=v?.4:Math.max(2.8,Math.min(4.4,u5(de.eye,Pe.eye)*1+1.6)),I("")}let X=null;function pt(){if(h!=="write"||(y=i.value.trim(),!y))return;i.blur(),I("");let bt=Math.max(10,Math.min(22,24-y.length/28));w=KS(T,e.glyphs(),{ink:"rgba(30,16,8,0.97)",xh:bt,width:.15,seed:11+y.length,speed:60,pace:.2,minDur:.03,maxTime:ae=>2.4+ae.length/160,fixed:{mx:46,my:40},onPen:()=>{In.STATE.inkDirty=!0},onDone:()=>{In.STATE.inkDirty=!0}}),N("down")}function Ft(){try{let bt={access_key:QS,subject:"A note left in the confessional",from_name:"Your gallery",message:y,page:location.href,when:new Date().toString()};fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(bt),keepalive:!0}).catch(()=>{})}catch(bt){}}function Lt(){h==="ready"&&(Ft(),N("fold"),I(""))}function gt(){!u||h==="leave"||(I(""),i.blur(),ct=ze,Wt=X,N("leave"))}let ct=null,Wt=null,ze=null,Se=In.SHOTS.window,Xe=In.OFF,_e=bt=>[bt[0]+Xe[0],bt[1],bt[2]],fo=[[3.4,1.75,44.5],[.3,1.72,44.5],[-2.5,1.66,45],[-4.6,1.6,46.55],[-7,1.58,47.15],[-9.3,1.55,46.4],_e([1.25,1.5,43.25]),_e([-.55,1.36,42.92])],Eo=[[-3,1.9,44.5],[-6.5,1.5,44.6],[-7,1,44.4],[-7.6,.95,44],[-10.5,1.5,44.6],_e([-1,1.55,43.6]),_e([-1.4,1.35,43.1]),_e([-1.5,1.33,43.3])];function Ko(bt){let ae=Wa(A0(bt)),Pe=[g.eye,...fo,Se.eye],de=[g.target,...Eo,Se.target];return{eye:Zs(Pe,ae),target:Zs(de,Qr(0,1,ae*1.03)),fov:za(g.fov,Se.fov,Qr(.6,.97,ae)),roll:(g.roll||0)*(1-ae)}}function Zt(bt,ae){if(v)return bt;let Pe=performance.now()/1e3,de=.004*ae,Kt=Math.sin(Pe*.61)*.6+Math.sin(Pe*1.37+1.3)*.4,So=Math.sin(Pe*.47+2.1)*.6+Math.sin(Pe*1.13+.4)*.4;return{eye:[bt.eye[0]+Kt*de,bt.eye[1]+So*de*.7,bt.eye[2]],target:[bt.target[0]+So*de*1.5,bt.target[1]+Kt*de,bt.target[2]],fov:bt.fov,roll:bt.roll}}function ge(bt,ae,Pe){let de={};for(let Kt in ae)de[Kt]=typeof ae[Kt]=="number"&&typeof bt[Kt]=="number"?za(bt[Kt],ae[Kt],Pe):ae[Kt];return de}function Ce(bt){bt*=window.__confSpeed||1,m+=bt;let ae=qh(Se),Pe=qh(In.SHOTS.paper),de,Kt,So=qh(In.SHOTS.peek);if(h==="room")D.moving?(D.u=Math.min(1,D.u+bt/D.T),de=D.path(D.raw?D.u:Wa(D.u)),Kt=ge(D.lookFrom,D.lookTo,Qr(.1,.9,D.u)),D.raw&&(Kt.fade=(b.fade||0)*(1-Qr(0,.12,D.u))),D.u>=1&&(D.moving=!1,D.rest=0,f.textContent=K(),I("hint"))):(D.rest+=bt,de=Zt(qh(pc[D.i]),2.5),Kt=Hh(pc[D.i]));else if(h==="enter"){let so=A0(m/(v?.6:9)),Qe=Wa(so),ko=[no.eye,[-7.6,1.9,47.6],[-9.6,1.85,45.6],_e([.75,1.5,42.95]),_e([-.25,1.42,42.82]),_e([-.9,1.42,42.82]),So.eye];de={eye:Zs(ko,Qe),target:Gl(no.target,So.target,Qr(0,.35,Qe)),fov:za(no.fov,So.fov,Qr(.3,1,Qe)),roll:0},Kt=ge(wo,Id,Qr(.2,.9,so)),so>=1&&N("peek")}else if(h==="peek")de=Zt(So,1.5),Kt=Id,m>(v?.5:3.2)&&N("turn");else if(h==="turn"){let S=A0(m/(v?.4:3.2));de=Pd(So,ae,Wa(S)),Kt=ge(Id,vc,Wa(S)),S>=1&&(N("write"),I("write"))}else if(h==="write")de=Zt(ae,1),Kt=vc;else if(h==="down"){let S=A0(m/(v?.4:2));de=Pd(ae,Pe,Wa(S)),Kt=ge(vc,ql,Wa(S)),S>=1&&(_=w.write(y,v)||0,In.STATE.inkDirty=!0,N("writing"))}else if(h==="writing")de=Zt(Pe,.6),Kt=ql,m>_+.8&&(N("ready"),f.textContent=d?"Scroll to fold it and pass it through":"Swipe up to fold it and pass it through",I("hint"));else if(h==="ready")de=Zt(Pe,.6),Kt=ql;else if(h==="fold"){let S=A0(m/(v?.3:1.5));In.STATE.fold=Wa(S),de=Zt(Pe,.6),Kt=ql,S>=1&&N("slide")}else if(h==="slide"){let so=A0(m/(v?.6:3.4));In.STATE.slide=Wa(Qr(0,.7,so));let Qe=Wa(Qr(.35,1,so));de=Pd(Pe,ae,Qe),Kt=ge(ql,vc,Qe),so>=1&&(In.STATE.shown=!1,N("final"),I("final"))}else if(h==="final")de=Zt(ae,1),Kt=vc;else if(h==="leave"){let S=v?.6:ct.eye[0]<Xe[0]-.3?12:7,so=A0(m/S),Qe={eye:g.eye,target:g.target,fov:g.fov,roll:g.roll},ko=Wa(so),Oo=ct.eye[0]<Xe[0]-.3,yn=Oo?[ct.eye,_e([-.55,1.4,42.8]),_e([1.4,1.55,43.3]),[-9.3,1.58,46.4],[-7,1.6,47.15],[-4.6,1.62,46.55],[-2.2,1.68,44.8],[.6,1.72,44.5],Qe.eye]:[ct.eye,[-3.4,1.7,46.2],[-1.2,1.7,44.8],[.6,1.72,44.5],Qe.eye],Sr=Oo?[ct.target,_e([1.5,1.45,43.4]),[-7,1.2,44.6],[-4,1.5,47],[-1.5,1.7,45.5],[1,1.8,44.5],[4,1.8,44.5],[7,1.9,44.2],Qe.target]:[ct.target,[-1.5,1.7,45.2],[2,1.8,44.5],[6,1.9,44.3],Qe.target];if(de={eye:Zs(yn,ko),target:Zs(Sr,ko),fov:za(ct.fov,Qe.fov,ko),roll:Qe.roll*ko},Kt=ge(Wt||vc,b,Qr(.1,.7,so)),Kt.fade=(b.fade||0)*Qr(.82,1,so),so>=1){u=!1,In.STATE.active=!1,In.STATE.shown=!0,In.STATE.fold=0,In.STATE.slide=0;let Yn=T.getContext("2d");Yn.setTransform(1,0,0,1,0,0),Yn.clearRect(0,0,T.width,T.height),In.STATE.inkDirty=!0,document.body.classList.remove("confessing"),e.onExit&&e.onExit()}}return ze=de,X=Kt,{camera:de,look:Kt}}let no=null,wo=null;function Oe(){if(h==="room"){if(D.moving||D.rest<.4)return;D.i<pc.length-1?q(D.i+1):(no=ze,wo=X,I(""),N("enter"));return}if(h==="peek"){m>.4&&N("turn");return}h==="ready"?Lt():h==="writing"&&w&&(w.finish(),m=Math.max(m,_))}function xe(){h==="room"&&!D.moving&&D.rest>.4&&D.i>0&&q(D.i-1)}return{start:B,update:Ce,leave:gt,get active(){return u},get stage(){return h},wheel(bt){bt>8?Oe():bt<-8&&xe()},swipe(bt){bt>0?Oe():bt<0&&xe()},tap(){Oe()},key(bt){return["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(bt)>=0?(Oe(),!0):["ArrowUp","ArrowLeft","PageUp"].indexOf(bt)>=0?(xe(),!0):bt==="Escape"?(gt(),!0):!1},_setNote(bt){i.value=bt,i.dispatchEvent(new Event("input"))}}}});var M5=mt((oL,_5)=>{"use strict";var mc=Xi(),Bh=ld(),Fd=Nf(),JS=Kc(),Dd=hd(),tk=ba(),Uh=!tk.isPhone&&!!(window.matchMedia&&window.matchMedia("(pointer: fine)").matches),{A:ua}=_a(),{C:pr,PAINTING_X:yc}=vr(),Jr=t=>Math.max(0,Math.min(1,t)),Ht=(t,e,o)=>t+(e-t)*o,jo=(t,e,o)=>[Ht(t[0],e[0],o),Ht(t[1],e[1],o),Ht(t[2],e[2],o)],ao=(t,e)=>[t[0]+e[0],t[1]+e[1],t[2]+e[2]],qd=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],Dr=(t,e)=>[t[0]*e,t[1]*e,t[2]*e],$t=(t,e,o)=>{let n=Jr((o-t)/(e-t));return n*n*(3-2*n)};function ek(t,e,o,n,r,a){if(r<=0)return[t,o];let s=2/n,i=s*r,c=1/(1+i+.48*i*i+.235*i*i*i),f=a*n,l=Math.max(-f,Math.min(f,t-e)),p=t-l,d=(o+s*l)*r,v=(o-s*d)*c,u=p+(l+d)*c;return e-t>0==u>e&&(u=e,v=0),[u,v]}var v5=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,ok=t=>t*t*t,Gd=t=>1-Math.pow(1-t,3),bn=t=>-(Math.cos(Math.PI*t)-1)/2;function Ln(t,e){let o=t.length-1,n=Jr(e)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,s=t[Math.max(0,r-1)],i=t[r],c=t[r+1],f=t[Math.min(o,r+2)],l=a*a,p=l*a;return[0,1,2].map(d=>.5*(2*i[d]+(-s[d]+c[d])*a+(2*s[d]-5*i[d]+4*c[d]-f[d])*l+(-s[d]+3*i[d]-3*c[d]+f[d])*p))}var to=(t,e,o,n)=>({eye:t,target:e,fov:o,roll:n||0});function ni(t,e,o){return to(jo(t.eye,e.eye,o),jo(t.target,e.target,o),Ht(t.fov,e.fov,o),Ht(t.roll,e.roll,o))}var Wd=()=>$t(.75,1.3,window.innerWidth/window.innerHeight),qr=(t,e)=>ni(t,e,Wd()),jh=[7,3.95,pr.hallEnd-.05],nk=[pr.x1,2.9,pr.zc],xc=[16.75,4.55,6.75],Vd=[6.92,2.72,14.5],Xa=[7.3,.015,47.1],rk=[xc,[16.2,4,7],[15.3,3.45,6.4],[14.1,3.2,5.7],[12.2,3.35,6.6],[10,3.75,9.6],[8.2,3.8,12.2],[7.3,3.4,13.8],Vd],ak=[Vd,[7.3,4.6,19.5],[7.6,4.9,23.5],[6.6,4.3,28.5],[7.5,3.2,34],[6.8,2.1,39.5],[7.4,1,44.2],[7.2,.3,46.4],Xa],ti=[yc[0],3,pr.z0],ei=[yc[1],3,pr.z0],Bd=47.45,w5=4.6,sk=13.2,ik=1.57,Bl=[7.55,1.25,46.75],Xd=[17.25,2.42,46],Yd=[26.05,1.95,46],Ul=[36.15,.015,44],Yh=()=>Ht(6.8,6.15,Wd()),ck=[Bl,[9.6,1.65,46.2],[12.3,2.05,45.1],[14.6,2.35,44.5],[16.2,2.3,44.7],Xd],lk=[Xd,[20.2,2.05,45.6],[23.2,1.8,45],Yd],oi=[yc[2],3,pr.z0],Ud=[34.8,1.35,46],fs=[7.89,.03,19.03],m5=.36,g5=13.64,xr=[{side:"left",z:34.5},{side:"left",z:23.5},{side:"left",z:14.6},{side:"right",z:14.6},{side:"right",z:23.5},{side:"right",z:34.5}];function Ra(t){let e=t.side==="left"?1:-1;return jo([7-e*1,3,t.z+e*.2],[7-e*.6,3.25,t.z+e*.13],Wd())}function fk(t){return t.side==="left"?qr(to([8.6,3.9,t.z],[m5,1.45,t.z],76),to([8,3.6,t.z+.7],[m5,3.95,t.z-2],46,-.008)):qr(to([5.4,3.9,t.z],[g5,1.45,t.z],76),to([6,3.6,t.z-.7],[g5,3.95,t.z+2],46,-.008))}var hk=()=>[Ul,[35.6,.5,44.6],[33.2,1.5,45.6],[29,2.3,46.1],[23.5,2.7,45.9],[18.5,2.9,45.4],[14.8,3.1,44.3],[11,3.3,41.8],[7.4,3.4,38.8],[5.4,3.3,36.6],Ra(xr[0])],uk=()=>[Ra(xr[2]),[3,3.2,13.2],[1.7,3,12],[2.6,3.2,10],[5,3.6,8.9],[7,3.8,8.6],[9,3.6,8.9],[11.4,3.2,10],[12.3,3,12],[11,3.1,13.4],Ra(xr[3])],dk=()=>[Ra(xr[5]),[9,3.4,31],[7.8,2.8,27.5],[6.8,1.9,24.5],[7.4,1,21],[7.75,.35,19.6],fs],x5={2:{pos:()=>Vd,amp:[.18,.07,.12],tumble:.5},7:{pos:()=>Bl,amp:[.12,.09,.1],tumble:.55},8:{pos:()=>Xd,amp:[.1,.08,.08],tumble:.5},9:{pos:()=>Yd,amp:[.09,.06,.07],tumble:.45},10:{pos:()=>Ud,amp:[.07,.04,.06],tumble:.35},12:{pos:()=>Ra(xr[0]),amp:[.12,.08,.1],tumble:.5},13:{pos:()=>Ra(xr[1]),amp:[.12,.08,.1],tumble:.5},14:{pos:()=>Ra(xr[2]),amp:[.12,.08,.1],tumble:.5},15:{pos:()=>Ra(xr[3]),amp:[.12,.08,.1],tumble:.5},16:{pos:()=>Ra(xr[4]),amp:[.12,.08,.1],tumble:.5},17:{pos:()=>Ra(xr[5]),amp:[.12,.08,.1],tumble:.5}},ls=[{name:"corridor",ui:"intro",look:{letterbox:1,exposure:1,focus:14,aperture:.25,vignette:.1},cam(t){let e=.9*(1-Math.exp(-t/14)),o=[0,Math.sin(t*.37)*.025,Math.sin(t*.23)*.06],n=qr(to([pr.x0+.9,1.85,pr.zc+.25],[pr.x1,2.85,pr.zc-.1],64),to([pr.x0+1.2,2,pr.zc+.35],[pr.x1,2.6,pr.zc-.15],50));return n.eye=ao(ao(n.eye,[e,0,0]),o),n}},{name:"about",ui:"about",look:{letterbox:.55,exposure:1.32,focus:2.9,aperture:.9,vignette:.12,shafts:.65},cam(t){let e=[Math.sin(t*.21)*.08,Math.sin(t*.33)*.03,-.25*(1-Math.exp(-t/12))],o=qr(to([16.6,1.9,9.2],[17.3,.4,5.6],64),to([15,1.35,7.75],[17.55,1.05,5.5],44,-.02));return o.eye=ao(o.eye,e),o}},{name:"sky",ui:"sky",look:{letterbox:.55,exposure:1,focus:2.1,aperture:.45,vignette:.1,shafts:1},cam(t){let e=[Math.sin(t*.12)*.35,Math.sin(t*.2)*.04,(1-Math.cos(t*.12))*.25],o=qr(to([7,1.35,13],[7.2,7.6,20.4],74,.05),to([6.6,1.5,12.6],[7.3,7.2,20.8],56,.07));return o.eye=ao(o.eye,e),o}},{name:"master",ui:"master",look:{letterbox:.55,exposure:1.12,focus:8,aperture:.6,vignette:.3,shafts:.5},cam(t){let e=[Math.sin(t*.17)*.05,Math.sin(t*.29)*.02,-.35*(1-Math.exp(-t/16))],o=qr(to([7,3.6,43.7],[7,3.85,jh[2]],74),to([7,3.6,41.3],[7,3.95,jh[2]],46));return o.eye=ao(o.eye,e),o}},{name:"story",ui:"story",look:{letterbox:.55,exposure:1,focus:8.1,aperture:.9,vignette:.4,shafts:.4},cam(t){let e=[Math.sin(t*.15)*.04,Math.sin(t*.25)*.015,0],o=qr(to([7,3.9,40.3],[7,1.35,jh[2]],76),to([6.3,3.6,41.2],[3.7,3.95,jh[2]],46,-.008));return o.eye=ao(o.eye,e),o}},{name:"leaf",ui:"leaf",look:{letterbox:.55,exposure:1.15,focus:1.25,aperture:1.3,vignette:.35,shafts:.4},cam(t){let e=[Math.sin(t*.2)*.02,Math.sin(t*.3)*.006,0],o=qr(to([7.15,.15,46],[7.3,.04,Xa[2]],50),to([7.05,.14,45.9],[7.25,.05,Xa[2]],32));return o.eye=ao(o.eye,e),o}},{name:"steps",ui:"steps",look:{letterbox:.9,exposure:1.2,focus:1.6,aperture:1.4,vignette:.4,shafts:.4},cam(t){let e=[Math.sin(t*.2)*.015,0,0],o=qr(to([7.15,.1,46.3],[7.05,.1,Bd],50),to([7.1,.12,45.85],[7,.2,Bd],30));return o.eye=ao(o.eye,e),o}},{name:"float",ui:"float",look:{letterbox:.55,exposure:1.1,focus:2.2,aperture:.8,vignette:.3,shafts:.6},cam(t){let e=[Math.sin(t*.17)*.05,Math.sin(t*.27)*.02,0],o=qr(to([7.3,.85,45.65],[7.6,1.38,47.1],64),to([7.25,.82,45.8],[7.65,1.35,47.1],44));return o.eye=ao(o.eye,e),o}},{name:"painting1",ui:"p1",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(t){let e=[Math.sin(t*.15)*.04,Math.sin(t*.25)*.015,0],o=qr(to([ti[0],2.3,46.85],[ti[0],1.25,ti[2]],74),to([ti[0]-.6,2.55,46.85],[ti[0]+1.9,2.9,ti[2]],46,.008));return o.eye=ao(o.eye,e),o}},{name:"painting2",ui:"p2",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(t){let e=[Math.sin(t*.15)*.04,Math.sin(t*.25)*.015,0],o=qr(to([ei[0],1.95,46.85],[ei[0],1,ei[2]],74),to([ei[0]-.6,2.1,46.85],[ei[0]+1.9,2.75,ei[2]],46,.008));return o.eye=ao(o.eye,e),o}},{name:"painting3",ui:"p3",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.9},cam(t){let e=[Math.sin(t*.15)*.04,Math.sin(t*.25)*.015,0],o=qr(to([oi[0],1.4,46.85],[oi[0],.6,oi[2]],74),to([oi[0]-.6,1.45,46.85],[oi[0]+1.9,2,oi[2]],46,.008));return o.eye=ao(o.eye,e),o}},{name:"door",ui:"door",look:{letterbox:.8,exposure:1.05,focus:1.45,aperture:1.1,vignette:.35,shafts:1},cam(t){let e=[Math.sin(t*.2)*.02,Math.sin(t*.3)*.006,0],o=qr(to([34.75,.5,44.15],[pr.x1,.8,43.95],66),to([34.75,.45,44.3],[pr.x1,.35,43.95],50));return o.eye=ao(o.eye,e),o}},...xr.map((t,e)=>({name:"hall"+e,ui:"h"+e,look:{letterbox:.55,exposure:1,focus:7.6,aperture:.7,vignette:.35,shafts:.7},cam(o){let n=[Math.sin(o*.15)*.04,Math.sin(o*.25)*.015,Math.sin(o*.11)*.04],r=fk(t);return r.eye=ao(r.eye,n),r}})),{name:"rest",ui:"end",look:{letterbox:.55,exposure:1.05,focus:2.4,aperture:.5,vignette:.4,shafts:1.15},cam(t){let e=t*.025,o=qr(to([7.75,2.6,18.6],[7.89,0,19.08],60),to([7.75,2.3,18.45],[7.89,0,19.08],46)),n=o.eye[0]-fs[0],r=o.eye[2]-fs[2];return o.eye=[fs[0]+n*Math.cos(e)-r*Math.sin(e),o.eye[1],fs[2]+n*Math.sin(e)+r*Math.cos(e)],o}}],pk=[1,.96,.88];function b5(t,e){return{dur:e,cam(o,n,r){let a=bn(o),s=ni(n,r,a),i=xr[t].side==="left"?1:-1;return s.eye=ao(s.eye,[i*.6*Math.sin(Math.PI*a),.15*Math.sin(Math.PI*a),0]),s},look(o,n,r){let a={};for(let s in r)typeof r[s]=="number"&&(a[s]=Ht(n[s],r[s],o));return a.aperture=Ht(n.aperture,r.aperture,o)*(1-.5*Math.sin(Math.PI*o)),a},leaf(o){let n=bn(o),r=Ra(xr[t]),a=Ra(xr[t+1]),s=xr[t].side==="left"?1:-1,i=ao(jo(r,a,.5),[s*1.2,.5,0]),c=Ln([r,jo(r,i,.6),i,jo(a,i,.6),a],n);return{phase:"fly",pos:ao(c,[0,Math.sin(o*Math.PI*5)*.07*Math.sin(Math.PI*o),0]),tumble:.5+.35*Math.sin(Math.PI*o)}}}}var Hd=[{dur:6.2,cam(t,e,o){if(t<.5){let i=ok(t/.5),c=jo(e.eye,[pr.x1-3.2,2.6,pr.zc],i),f=jo(e.target,nk,$t(0,.6,t/.5));return to(c,f,Ht(e.fov,e.fov-8,i),Ht(e.roll,.04,i))}let n=Gd((t-.5)/.5),r=[[ua.cx+.4,10.4,ua.zc+.6],[ua.cx-.6,7.6,ua.zc+1.3],[ua.cx-1.9,4.6,ua.zc+1.75],o.eye],a=[[ua.cx-.1,0,ua.zc-.2],[ua.cx-1,.4,ua.zc-.1],[ua.cx-1.1,.8,ua.zc-.2],o.target];return to(Ln(r,n),Ln(a,n),Ht(o.fov+14,o.fov,n),Ht(-.25,o.roll,n))},look(t,e,o){let n=$t(.22,.5,t),r=1-$t(.5,.74,t);return{fade:t<.5?n:r,fadeColor:pk,exposure:Ht(e.exposure,o.exposure,$t(.5,.9,t))*(1+2.2*(t<.5?$t(.15,.5,t):1-$t(.5,.8,t))),letterbox:Ht(e.letterbox,o.letterbox,$t(.3,.7,t)),aperture:t<.5?e.aperture*(1-t*2):o.aperture*$t(.6,1,t),focus:Ht(4,o.focus,$t(.5,1,t)),shafts:Ht(e.shafts,o.shafts,$t(.4,.6,t)),vignette:Ht(e.vignette,o.vignette,t)}},leaf(){return{phase:"home"}}},{dur:9,cam(t,e,o,n){let r=[e.eye,[15.6,2.4,8.3],[15.4,2.7,7.1],[12.6,2.6,5.4],[9.6,2,7.4],[7.6,1.6,10.6],o.eye],a=Ln(r,bn(t)),s=$t(0,.12,t)*(1-$t(.82,1,t)),i=jo(jo(e.target,o.target,$t(.55,1,t)),n.pos,s),c=Ht(e.fov,o.fov,$t(.3,1,t))-6*Math.sin(Math.PI*t),f=Ht(e.roll,o.roll,t)+.05*Math.sin(Math.PI*2*t);return to(a,i,c,f)},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{exposure:Ht(e.exposure,o.exposure,$t(.25,.75,t)),letterbox:Ht(e.letterbox,o.letterbox,t),focus:Ht(a,o.focus,$t(.8,1,t)),aperture:Ht(.7,o.aperture,$t(.8,1,t)),shafts:Ht(e.shafts,o.shafts,$t(.3,.8,t)),vignette:Ht(e.vignette,o.vignette,t)}},leaf(t){let e=v5(t),o=Math.sin(t*Math.PI*7)*.14*Math.sin(Math.PI*t);return{phase:"fly",pos:ao(Ln(rk,e),[0,Math.sin(t*Math.PI*9)*.05*Math.sin(Math.PI*t),o]),tumble:1-.5*$t(.8,1,t)}}},{dur:11.5,cam(t,e,o,n){let r=Ln([e.eye,[7,1.9,19],[7.1,1.6,27.5],[6.9,1.1,36],[7,.7,42.5],[7.05,.5,45.7]],$t(0,.8,t)*.6+bn(Jr(t/.8))*.4),a=Ln([[7.05,.5,45.7],[7,1.2,45.3],[7,2.6,43.8],o.eye],bn($t(.8,1,t))),s=t<.8?r:a,i=jo(jo(e.target,n.pos,$t(.03,.22,t)),o.target,$t(.82,1,t)),c=Ht(e.fov,o.fov,$t(.15,.7,t))-6*$t(.6,.8,t)*(1-$t(.85,1,t)),f=Ht(e.roll,o.roll,$t(0,.6,t))-.04*Math.sin(Math.PI*t);return to(s,i,c,f)},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{exposure:Ht(e.exposure,o.exposure,$t(.5,1,t)),letterbox:Ht(e.letterbox,o.letterbox,t),focus:Ht(a,o.focus,$t(.84,1,t)),aperture:Ht(1.1,o.aperture,$t(.84,1,t)),shafts:Ht(e.shafts,o.shafts,$t(.2,.9,t)),vignette:Ht(e.vignette,o.vignette,$t(.5,1,t))}},leaf(t){let e=Ht(v5(t),t,.35),o=Ln(ak,$t(0,.78,e)),n=Math.sin(t*Math.PI*8)*.35*(1-$t(.55,.76,t)),r=$t(.7,.8,t);return{phase:"fly",pos:ao(o,[n,Math.abs(Math.cos(t*Math.PI*8))*.12*(1-r),0]),tumble:1-r,swing:n}}},{dur:2.6,cam(t,e,o){let n=bn(t),r=ni(e,o,n);return r.eye=ao(r.eye,[0,0,-.35*Math.sin(Math.PI*n)]),r},look(t,e,o){let n=bn(t),r={};for(let a in o)typeof o[a]=="number"&&(r[a]=Ht(e[a],o[a],n));return r},leaf(){return{phase:"floor"}}},{dur:4.5,cam(t,e,o){let n=bn(t),r=Ln([e.eye,[6.9,1.7,43.9],[7.05,.45,45.4],o.eye],n),a=jo(e.target,o.target,$t(.1,.85,t));return to(r,a,Ht(e.fov,o.fov,$t(.2,1,t)),Ht(e.roll,o.roll,n))},look(t,e,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=Ht(e[r],o[r],$t(.2,1,t)));return n},leaf(){return{phase:"floor"}}},{dur:5.5,cam(t,e,o){return ni(e,o,bn(t))},look(t,e,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=Ht(e[r],o[r],bn(t)));return n},leaf(){return{phase:"floor"}},walker(t){return Ht(w5,Yh(),t)}},{dur:11,kick:t=>Jr((t-gc())/(1-gc())),cam(t,e,o,n){let r=gc(),a=$t(0,r,t)*(1-$t(r+.12,r+.35,t)),s=y5(Math.min(t,bc)),i=ao(e.target,[(s-e.target[0])*.15*a,0,0]),c=$t(r+.12,1,t),f=Ln([e.eye,e.eye,ao(e.eye,[0,.12,-.3]),o.eye],c);return i=jo(i,n.pos,$t(r+.06,r+.24,t)*(1-$t(.9,1,t))),i=jo(i,o.target,$t(.88,1,t)),to(f,i,Ht(e.fov,o.fov,c),Ht(e.roll,o.roll,c))},look(t,e,o,n,r){let a=gc(),s=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]),i=$t(0,.12,t)*(1-$t(a+.25,a+.5,t));return{letterbox:Ht(Ht(e.letterbox,o.letterbox,$t(a,1,t)),1.75,i),exposure:Ht(e.exposure,o.exposure,$t(a,1,t)),focus:t<a?e.focus:Ht(e.focus,s,$t(a,a+.2,t)),aperture:Ht(e.aperture,o.aperture,$t(a,1,t)),vignette:Ht(e.vignette,o.vignette,t),shafts:Ht(e.shafts,o.shafts,t)}},leaf(t){let e=Jr((t-gc())/(1-gc()));if(e<=0)return{phase:"floor"};let o=$t(0,.85,e)*.85+Gd($t(0,.15,e))*.15;return{phase:"fly",pos:ao(Xa,[(Bl[0]-Xa[0])*o+Math.sin(e*9)*.08*(1-e),(Bl[1]-Xa[1])*o,(Bl[2]-Xa[2])*o+Math.sin(e*7)*.06*(1-e)]),tumble:1.3-.75*e}},walker(t){return t<.985?y5(t):null}},{dur:9,cam(t,e,o,n){let r=bn(t),a=Ln([e.eye,[9.4,1.35,45.6],[12.4,2,45.9],[15,2.45,46.5],o.eye],r),s=1-$t(.6,.92,t),i=jo(jo(e.target,n.pos,$t(0,.15,t)),o.target,1-s),c=Ht(e.fov,o.fov,$t(.3,1,t)),f=Ht(e.roll,o.roll,r)+.04*Math.sin(Math.PI*t);return to(a,i,c,f)},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:Ht(e.letterbox,o.letterbox,t),exposure:Ht(e.exposure,o.exposure,$t(.3,.8,t)),focus:Ht(a,o.focus,$t(.6,.95,t)),aperture:Ht(e.aperture,o.aperture,$t(.6,1,t)),vignette:Ht(e.vignette,o.vignette,t),shafts:Ht(e.shafts,o.shafts,$t(.3,.8,t))}},leaf(t){let e=bn(t);return{phase:"fly",pos:ao(Ln(ck,e),[0,Math.sin(t*Math.PI*5)*.08*Math.sin(Math.PI*t),Math.sin(t*Math.PI*4)*.12*Math.sin(Math.PI*t)]),tumble:.55+.4*Math.sin(Math.PI*t)}}},{dur:6.5,cam(t,e,o){let n=bn(t),r=ni(e,o,n);return r.eye=ao(r.eye,[0,.12*Math.sin(Math.PI*n),.1*Math.sin(Math.PI*n)]),r},look(t,e,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=Ht(e[r],o[r],t));return n.aperture=Ht(e.aperture,o.aperture,t)*(1-.5*Math.sin(Math.PI*t)),n},leaf(t){let e=bn(t);return{phase:"fly",pos:ao(Ln(lk,e),[0,Math.sin(t*Math.PI*4)*.07*Math.sin(Math.PI*t),0]),tumble:.5+.3*Math.sin(Math.PI*t)}}},{dur:6.5,cam(t,e,o){let n=bn(t),r=ni(e,o,n);return r.eye=ao(r.eye,[0,.1*Math.sin(Math.PI*n),.1*Math.sin(Math.PI*n)]),r},look(t,e,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=Ht(e[r],o[r],t));return n.aperture=Ht(e.aperture,o.aperture,t)*(1-.5*Math.sin(Math.PI*t)),n},leaf(t){let e=bn(t);return{phase:"fly",pos:ao(Ln([Yd,[29.2,1.75,45.5],[32.2,1.5,45.4],Ud],e),[0,Math.sin(t*Math.PI*4)*.06*Math.sin(Math.PI*t),0]),tumble:.45+.25*Math.sin(Math.PI*t)}}},{dur:6,cam(t,e,o,n){let r=bn(t),a=Ln([e.eye,[34.2,1.15,45.6],[34.5,.7,44.8],o.eye],r),s=$t(.05,.3,t)*(1-$t(.8,1,t)),i=jo(jo(e.target,o.target,$t(.6,1,t)),n.pos,s);return to(a,i,Ht(e.fov,o.fov,$t(.2,1,t)),Ht(e.roll,o.roll,r))},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:Ht(e.letterbox,o.letterbox,t),exposure:Ht(e.exposure,o.exposure,t),focus:Ht(a,o.focus,$t(.8,1,t)),aperture:Ht(.9,o.aperture,$t(.8,1,t)),vignette:Ht(e.vignette,o.vignette,t),shafts:Ht(e.shafts,o.shafts,t)}},leaf(t){let e=Ln([Ud,[35.3,.9,45.2],[35.75,.4,44.4],[36,.08,44.05],Ul],$t(0,.85,t)),o=Math.sin(t*Math.PI*6)*.25*(1-$t(.35,.82,t)),n=$t(.78,.88,t);return{phase:"fly",pos:ao(e,[0,Math.abs(Math.cos(t*Math.PI*6))*.07*(1-n),o]),tumble:.7*(1-n),swing:o}}},{dur:12,door(t){let e=Jr((t-.02)/.09);return Gd(e)+.07*Math.sin(Jr((t-.08)/.18)*Math.PI)*(1-Jr((t-.08)/.3))},cam(t,e,o,n){let r=Math.sin(t*340)*.012*$t(.02,.05,t)*(1-$t(.08,.16,t)),a=$t(.06,1,t),s=Ln([e.eye,[34.3,1,43.6],[31.5,1.9,43.4],[26.5,2.4,43.6],[21,2.6,43.6],[16.5,2.8,43.2],[12.6,3.1,41.2],[9.6,3.4,38],o.eye],a*.55+bn(a)*.45),i=ao(n.pos,[1,-.2,-1.45]);s=jo(s,i,$t(.1,.22,t)*(1-$t(.52,.72,t)));let c=$t(.06,.16,t)*(1-$t(.86,1,t)),f=jo(e.target,n.pos,c);f=jo(f,o.target,$t(.86,1,t));let l=Ht(e.fov,o.fov,$t(.1,1,t))+6*Math.sin(Math.PI*$t(.08,.9,t)),p=Ht(e.roll,o.roll,t)+.06*Math.sin(Math.PI*2*$t(.1,.9,t))+r;return to(ao(s,[0,r,0]),f,l,p)},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]),s=$t(.02,.06,t)*(1-$t(.08,.3,t));return{letterbox:Ht(e.letterbox,o.letterbox,$t(.1,.4,t)),exposure:Ht(e.exposure,o.exposure,t)*(1+.8*s),focus:Ht(a,o.focus,$t(.86,1,t)),aperture:Ht(.8,o.aperture,$t(.86,1,t)),vignette:Ht(e.vignette,o.vignette,t),shafts:Ht(e.shafts,o.shafts,t)+s}},leaf(t){let e=Jr((t-.05)/.95);if(e<=0)return{phase:"floor"};let o=Ln(hk(),e*.6+bn(e)*.4),n=Math.sin(t*Math.PI*9)*.12*Math.sin(Math.PI*e);return{phase:"fly",pos:ao(o,[0,n*.6,n]),tumble:1.4-.8*e}}},...[0,1].map(t=>b5(t,7.5)),{dur:10,cam(t,e,o,n){let r=bn(t),a=Ln([e.eye,[7.6,3.2,16.2],[7,2.9,17.2],[6.5,3.2,16],o.eye],r),s=$t(0,.15,t)*(1-$t(.85,1,t)),i=jo(jo(e.target,o.target,$t(.5,1,t)),n.pos,s);return to(a,i,Ht(e.fov,o.fov,r)+4*Math.sin(Math.PI*r),Ht(e.roll,o.roll,r))},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:Ht(e.letterbox,o.letterbox,t),exposure:Ht(e.exposure,o.exposure,t),focus:Ht(a,o.focus,$t(.85,1,t)),aperture:Ht(.6,o.aperture,$t(.85,1,t)),vignette:Ht(e.vignette,o.vignette,t),shafts:Ht(e.shafts,o.shafts,t)}},leaf(t){let e=bn(t),o=Ln(uk(),e);return{phase:"fly",pos:ao(o,[0,Math.sin(t*Math.PI*6)*.06*Math.sin(Math.PI*t),0]),tumble:.6+.4*Math.sin(Math.PI*t)}}},...[3,4].map(t=>b5(t,7.5)),{dur:10,cam(t,e,o,n){let r=bn(t),a=Ln([e.eye,[7.6,4,30.5],[7.3,4.4,25.5],[7.1,4,21.8],o.eye],r),s=$t(0,.2,t)*(1-$t(.9,1,t)),i=jo(jo(e.target,o.target,$t(.5,1,t)),n.pos,s);return to(a,i,Ht(e.fov,o.fov,r),Ht(e.roll,o.roll,r))},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:Ht(e.letterbox,o.letterbox,t),exposure:Ht(e.exposure,o.exposure,t),focus:Ht(a,o.focus,$t(.85,1,t)),aperture:Ht(.7,o.aperture,$t(.85,1,t)),vignette:Ht(e.vignette,o.vignette,t),shafts:Ht(e.shafts,o.shafts,t)}},leaf(t){let e=Ln(dk(),$t(0,.86,t)),o=Math.sin(t*Math.PI*7)*.3*(1-$t(.4,.84,t)),n=$t(.8,.9,t);return{phase:"fly",pos:ao(e,[o,Math.abs(Math.cos(t*Math.PI*7))*.08*(1-n),0]),tumble:.8*(1-n),swing:o}}}],jd=9.2,bc=.72;function y5(t){return t<bc?Ht(Yh(),jd,t/bc):Ht(jd,sk,(t-bc)/(1-bc))}function gc(){return bc*Jr((Xa[0]+.15-Yh())/(jd-Yh()))}var Xh={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},Wh=t=>Object.assign({},Xh,ls[t].look),vk=`
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
`;function Zr(t,e,o){let n=document.createElement(t);return e&&(n.className=e),o!==void 0&&(n.innerHTML=o),n}var Js=t=>String(t).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function Vh(t,e,o){t.querySelectorAll(".tour-line").forEach((n,r)=>{n.style.transitionDelay=(e+r*o).toFixed(2)+"s"})}_5.exports=function(e){let o=/tourdebug/.test(location.search),{fps:n}=e;if(!document.querySelector("link[data-tour-font]")){let j=document.createElement("link");j.rel="stylesheet",j.href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&display=swap",j.setAttribute("data-tour-font",""),document.head.appendChild(j)}let r=Nd(),a=null;fetch("res/hand.json").then(j=>j.ok?j.json():null).then(j=>{a=j}).catch(()=>{});let s=document.createElement("style");s.textContent=vk+`
	.hand-text { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); clip-path: inset(50%); white-space: normal; }
	.tour-body canvas.hand { display: block; cursor: pointer; }`,s.textContent+=`
	body.touring #museum-mobile-controls,
	body.touring .painting-plaque { display: none !important; }`,document.head.appendChild(s);let i=Zr("div","tour");i.setAttribute("role","region"),i.setAttribute("aria-label","Guided tour of the gallery. Swipe, scroll or press the arrow keys to move on.");let c=Zr("div","tour-mark",Js(Bh.name)),f=Zr("button","tour-free","Explore freely");f.type="button";let l=Zr("div","tour-links",Fd.icons("tour-icon"));l.insertBefore(Od()("tour-icon"),l.firstChild),l.insertBefore(Ah().button("tour-icon"),l.firstChild.nextSibling);let p=Zr("button","tour-free tour-note",'<svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 4c-7 1-11.5 5.5-13 13l-1.5 3 3-1.5c7.500-1.500 12-6 13-13z"/><path d="M5.5 20L13 12.500"/></svg><span>Leave a note</span>');p.type="button",p.setAttribute("aria-label","Leave a note: go to the piano room and the confessional"),l.appendChild(p),Uh&&l.appendChild(f);let d=Zr("div","tour-progress",ls.map(()=>"<i></i>").join("")),v=Zr("div","tour-hint",'<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M6 15l6-6 6 6"></path></svg><span></span>'),u=v.querySelector("span"),h=Zr("div","tour-card tour-intro",`
		<span class="tour-line tour-kicker">A virtual gallery</span>
		<span class="tour-rule"></span>
		<h1 class="tour-line tour-title">${Js(Bh.name)}</h1>
		<span class="tour-line tour-sub tour-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</span>`);Vh(h,.4,.35);let m=Bh.text.split(/\n\s*\n/).map(j=>`<p class="tour-line">${Js(j.trim())}</p>`).join(""),g=Zr("div","tour-card tour-about",`
		<span class="tour-line tour-kicker">The artist</span>
		<h2 class="tour-line tour-title">${Js(Bh.title)}</h2>
		<span class="tour-rule"></span>
		${Fd.line("tour-line tour-contact")}
		${m}`);Vh(g,.25,.28);let b=Zr("div","tour-card tour-sky",`
		<span class="tour-line tour-sub">Every painting here waits for the light.</span>`);Vh(b,.6,.3);let y=Zr("div","tour-card tour-master","");function w(j){let ht=Zr("div","tour-card tour-story",`
			<span class="tour-line tour-kicker"></span>
			<h2 class="tour-title tour-letters"></h2>
			<span class="tour-rule"></span>
			<span class="tour-line visit-row"></span>
			<div class="tour-body"></div>`),Vt=ht.querySelector(".tour-title"),se=ht.querySelector(".tour-body");return ht.filled=!1,ht.body=se,ht.fill=()=>{let fe=j();if(!fe||ht.filled)return;ht.filled=!0;let nn=fe.title||"";ht.querySelector(".tour-kicker").textContent=JS(fe)||"Oil on canvas";let ar=ht.querySelector(".visit-row");ar.innerHTML=Dd.button(fe),ar.hidden=!ar.innerHTML;let kr=ar.querySelector(".visit-btn");kr&&(kr.addEventListener("click",uo=>{uo.stopPropagation(),Dd.open(fe)}),ht.warm=()=>Dd.warm(fe));let rn=0;Vt.innerHTML=nn.split(" ").map(uo=>'<span class="tour-word">'+uo.split("").map(Kn=>`<span style="transition-delay:${(.35+rn++*.045).toFixed(3)}s">${Js(Kn)}</span>`).join("")+"</span>").join(" "),Vt.setAttribute("aria-label",nn);let br=.35+nn.length*.045+.2;ht.querySelector(".tour-rule").style.transitionDelay=br.toFixed(2)+"s";let an=String(fe.description||"").split(/\n\s*\n/).filter(uo=>uo.trim());if(ht.querySelector(".tour-kicker").style.transitionDelay="0.1s",a&&an.length){se.innerHTML=an.map(wn=>`<p class="hand-text">${Js(wn.trim())}</p>`).join("")+'<div class="hand-wrap"><canvas class="hand" aria-hidden="true"></canvas></div>';let uo=se.querySelector("canvas"),Kn=an.map(wn=>wn.trim()).join(`

`),Wo=!1,Fn=!1,Hr=0;se.addEventListener("wheel",()=>{Wo=!0},{passive:!0}),se.addEventListener("touchmove",()=>{Wo=!0},{passive:!0});let Br=parseFloat(getComputedStyle(se).fontSize)||17,Uo=r(uo,a,{ink:"rgba(244,236,223,0.93)",shadow:"rgba(0,0,0,0.55)",shadowBlur:7,xh:Math.max(8.5,Br*.56),width:.14,speed:80,pace:.12,minDur:.022,maxTime:wn=>3.5+wn.length/420,seed:3+nn.length,onPen:wn=>{if(Wo)return;let Oa=wn-se.clientHeight*.55;Oa>se.scrollTop+4&&(se.scrollTop+=Math.min(16,Oa-se.scrollTop))}});uo.addEventListener("click",wn=>{wn.stopPropagation(),clearTimeout(Hr),Fn?Uo.finish():(Fn=!0,Uo.write(Kn,!0))}),ht.write=()=>{if(clearTimeout(Hr),Wo=!1,Fn){Uo.write(Kn,!0);return}Uo.write("",!0),Hr=setTimeout(()=>{Fn=!0,Uo.write(Kn)},br*.6*1e3)},ht.stopWrite=()=>{clearTimeout(Hr),Uo.stop()};let va=0;window.addEventListener("resize",()=>{clearTimeout(va),va=setTimeout(()=>{Fn&&ht.classList.contains("on")&&Uo.write(Kn,!0)},250)})}else se.innerHTML=an.map(uo=>`<p class="tour-line">${Js(uo.trim())}</p>`).join(""),se.querySelectorAll(".tour-line").forEach((uo,Kn)=>{uo.style.transitionDelay=(br+.3+Math.min(Kn,6)*.35).toFixed(2)+"s"})},ht}let _=()=>e.paintings?e.paintings():[],M=j=>_().find(ht=>ht.side==="corridor"&&Math.abs(ht.paintingPosition[0]-j)<.5),T=w(()=>_().find(j=>j.side==="end")),I=()=>Zr("div","tour-card",""),N=w(()=>M(ti[0])),B=w(()=>M(ei[0])),D=w(()=>M(oi[0])),K=xr.map(j=>w(()=>_().find(ht=>ht.side===j.side&&Math.abs(ht.paintingPosition[2]-j.z)<.5))),q=Zr("div","tour-card tour-endcard",`
		<span class="tour-line tour-kicker">Thank you for walking with me</span>
		<span class="tour-rule"></span>
		<span class="tour-line tour-sub">${Uh?"The rest of the gallery is yours to wander.":"Swipe back to return to any painting."}</span>
		<span class="tour-line tour-sub tour-confess-line">Before you leave, the confessional is open.<br>Leave me a note; no one else will read it.</span>
		<div class="tour-line tour-end"><button type="button" class="tour-btn" data-act="confess">Leave something behind</button></div>
		${Fd.line("tour-line tour-contact")}
		<div class="tour-line tour-end">
			${Uh?'<button type="button" class="tour-btn" data-act="free">Walk the gallery</button>':""}
			<button type="button" class="tour-btn quiet" data-act="list">All paintings</button>
			<button type="button" class="tour-btn quiet" data-act="replay">Replay</button>
		</div>`);Vh(q,.5,.35);let X=[h,g,b,y,T,I(),I(),I(),N,B,D,I(),...K,q];i.append(...X,c,l,d,v),document.body.appendChild(i);let pt=p5()({root:i,avatar:e.avatar,glyphs:()=>a,onExit:()=>{de=-1,pe&&(ve={start:S},pe=!1)}});document.body.classList.add("touring");let Ft=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,Lt=Ft?"Scroll":"Swipe",gt=ls.map((j,ht)=>ht===0?Ft?"Scroll to begin":"Swipe up to begin":ht===1?Lt+" to follow the leaf":ht===2?Lt+" to follow the light":ht===3?Lt+" for its story":ht===6||ht===7||ht===ls.length-1?"":Lt+" on"),ct=[0];Hd.forEach(j=>ct.push(ct[ct.length-1]+j.dur));let Wt=ct[ct.length-1],ze=210,Se=95,Xe=.35,_e=1.4,fo=.32,Eo=1,Ko=1.3,Zt=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,ge=2.2,Ce=.7,no=.9,wo=!0,Oe=0,xe=0,bt=0,ae=-10,Pe=!1,de=-1,Kt=0,So=0,S=0,so=null,Qe=Object.assign({},Wh(0)),ko=ls[0].cam(0),Oo={phase:"home",pos:xc.slice(),tumble:0},yn=0,Sr=j=>{let ht=0;for(let Vt=1;Vt<ct.length;Vt++)Math.abs(ct[Vt]-j)<Math.abs(ct[ht]-j)&&(ht=Vt);return ht};function Yn(j){let ht=X[j];ht&&ht.fill&&(ht.fill(),ht.body.scrollTop=0,ht.offsetWidth),X.forEach((Vt,se)=>{let fe=Vt.classList.contains("on");Vt.classList.toggle("on",se===j),se===j&&!fe&&Vt.write&&Vt.write(),se!==j&&fe&&Vt.stopWrite&&Vt.stopWrite()}),ht&&ht.warm&&ht.warm(),u.textContent=gt[j]||"",v.classList.toggle("on",!!gt[j])}function Ka(){X.forEach(j=>{j.stopWrite&&j.classList.contains("on")&&j.stopWrite(),j.classList.remove("on")}),v.classList.remove("on")}let L0=null,ci=-1;function Z(j){if(pt.active||!wo||so)return;let ht=S-ae>Xe;if(ae=S,ht||!L0){let Vt=0,se=Wt;for(let fe=0;fe<ct.length;fe++)if(ct[fe]<=Oe-.02&&(Vt=ct[fe]),ct[fe]>=Oe+.02){se=ct[fe];break}L0={lo:Vt,hi:se}}S<ci||(Pe=!1,bt=Math.max(L0.lo,Math.min(L0.hi,bt+j)),bt=Math.max(Oe-ge,Math.min(Oe+ge,bt)))}function Ot(j){if(pt.active||!wo||so)return;let ht=Pe?bt:Oe,Vt;if(j>0)Vt=ct.findIndex(se=>se>ht+.05);else{Vt=-1;for(let se=ct.length-1;se>=0;se--)if(ct[se]<ht-.05){Vt=se;break}}Vt<0||(bt=ct[Vt],Pe=!0,ae=S)}let Dt=null,Nt=j=>j.stopPropagation();["touchstart","touchmove","touchend","mousedown","mouseup","click","contextmenu"].forEach(j=>i.addEventListener(j,Nt)),i.addEventListener("pointerdown",j=>{if(j.stopPropagation(),!(j.target.closest("button, a")||j.target.closest(".tour-body"))){Dt={x:j.clientX,y:j.clientY,lx:j.clientX,ly:j.clientY,t:performance.now(),moved:0,v:0,lt:performance.now()};try{i.setPointerCapture(j.pointerId)}catch(ht){}}}),i.addEventListener("pointermove",j=>{if(!Dt)return;let ht=j.clientX-Dt.lx,Vt=j.clientY-Dt.ly;Dt.lx=j.clientX,Dt.ly=j.clientY;let se=Math.abs(Vt)>=Math.abs(ht)?-Vt:-ht;Dt.moved+=Math.abs(se);let fe=performance.now(),nn=se/Se;Dt.v=Dt.v*.6+nn/Math.max(.008,(fe-Dt.lt)/1e3)*.4,Dt.lt=fe,Dt.moved>6&&Z(nn)});let le=j=>{let ht=Dt;if(Dt=null,!!ht){if(pt.active){ht.moved<10&&performance.now()-ht.t<500?pt.tap():ht.y-(j?j.clientY:ht.ly)>30&&pt.swipe(1);return}ht.moved<10&&performance.now()-ht.t<500?Ot(1):performance.now()-ht.lt<120&&Z(Math.max(-1.6,Math.min(1.6,ht.v*.22)))}};i.addEventListener("pointerup",j=>{j.stopPropagation(),le(j)}),i.addEventListener("pointercancel",()=>{Dt=null}),i.addEventListener("wheel",j=>{if(pt.active){if(j.target.closest(".conf-ui"))return;j.preventDefault(),pt.wheel(j.deltaY);return}if(j.target.closest(".tour-body")){let Vt=j.target.closest(".tour-body"),se=Vt.scrollTop+Vt.clientHeight>=Vt.scrollHeight-2&&j.deltaY>0,fe=Vt.scrollTop<=0&&j.deltaY<0;if(!se&&!fe)return}j.preventDefault();let ht=j.deltaMode===1?j.deltaY*16:j.deltaMode===2?j.deltaY*window.innerHeight:j.deltaY;Z(ht/ze)},{passive:!1}),window.addEventListener("keydown",j=>{if(!wo||so||document.body.classList.contains("visiting"))return;if(pt.active){if(j.stopImmediatePropagation(),j.target&&/TEXTAREA|INPUT|BUTTON/.test(j.target.tagName))return;pt.key(j.key)&&j.preventDefault();return}let ht=j.key;if(["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(ht)>=0){if((ht==="Enter"||ht===" ")&&j.target&&j.target.tagName==="BUTTON")return;j.preventDefault(),j.stopImmediatePropagation(),Ot(1)}else["ArrowUp","ArrowLeft","PageUp"].indexOf(ht)>=0?(j.preventDefault(),j.stopImmediatePropagation(),Ot(-1)):ht==="Escape"?(j.preventDefault(),Te()):/^[wasdzq]$/i.test(ht)&&j.stopImmediatePropagation()},!0),window.addEventListener("keyup",j=>{wo&&!so&&/^(Arrow|[wasdzq]$)/i.test(j.key)&&j.stopImmediatePropagation()},!0),f.addEventListener("click",j=>{j.stopPropagation(),Te()}),["mousedown","pointerdown"].forEach(j=>p.addEventListener(j,ht=>ht.stopPropagation())),p.addEventListener("click",j=>{j.stopPropagation(),$e()});let Ae=to([8.6,1.75,44.3],[-3,1.85,44.5],55,0),Me=null,pe=!1;function $e(){if(!wo||so||pt.active||Me)return;Ka(),de=-2;let j=ko.eye;if(j[0]>.5&&j[0]<13.5&&j[2]>36&&j[2]<50){pe=!1,pt.start(ko,Qe);return}Me={t:0}}q.addEventListener("click",j=>{let ht=j.target.closest("button");ht&&(j.stopPropagation(),ht.dataset.act==="free"&&Te(),ht.dataset.act==="replay"&&Ye(),ht.dataset.act==="list"&&Q1().show(!1),ht.dataset.act==="confess"&&(Ka(),de=-2,pt.start(ko,Qe)))});let be=[null,[ua.zc-1.6,Math.PI/2],[11.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[42.5+yc[0]-7,0],[42.5+yc[1]-7,0],[42.5+yc[2]-7,0],[1e3,Math.PI/2],...xr.map(j=>[j.z-1.6,j.side==="left"?-Math.PI/2:Math.PI/2]),[fs[2]-1.6,Math.PI]],We=null,ke=0;function Te(){if(!wo||so||!Uh)return;let j=Sr(Oe),ht=be[j];We=j<=1?{phase:"home",pos:xc.slice()}:j>=3&&j<=6?{phase:"floor",pos:Xa.slice()}:j===11?{phase:"floor",pos:Ul.slice()}:j===18?{phase:"floor",pos:fs.slice()}:null,ke=j>=12?1:0,ht&&n.place&&n.place(ht[0],ht[1]),so={start:S,fromCam:ko,fromLook:Object.assign({},Qe)},Ka(),i.hidden=!0,document.body.classList.remove("touring"),e.onExit&&e.onExit()}function Ye(){Oe=bt=0,xe=0,Pe=!1,de=-1,Kt=0,So=0,Oo={phase:"home",pos:xc.slice(),tumble:0},ve={start:S}}let ve={start:-1},io=!1,Ro=[],ye={prev:null,vel:[0,0,0],axis:[1,0,0],dir:null,bank:0,rock:0,spin:0,fresh:!0};function Go(j){yn+=j*(Oo.phase==="floor"?0:1);let ht=Oo.tumble===void 0?0:Oo.tumble,Vt=mc.fromTranslation(Ro,Oo.pos);if(Oo.phase==="home")Vt=mc.rotateY(Vt,Vt,2.2+Math.sin(yn*.9)*.15),Vt=mc.rotateZ(Vt,Vt,-1+Math.sin(yn*1.3)*.12),Vt=mc.rotateX(Vt,Vt,.4);else if(Oo.phase==="floor")Vt=mc.rotateY(Vt,Vt,.65),Vt=mc.rotateX(Vt,Vt,.16);else{let se=Oo.pos;if(ye.prev&&j>0){let yr=[se[0]-ye.prev[0],se[1]-ye.prev[1],se[2]-ye.prev[2]];if(Math.hypot(yr[0],yr[1],yr[2])<1.5){let Tc=Math.min(1,j*6);for(let ms=0;ms<3;ms++)ye.vel[ms]+=(yr[ms]/j-ye.vel[ms])*Tc}else ye.vel=[0,0,0]}ye.prev=se.slice();let fe=ye.vel,nn=Math.hypot(fe[0],fe[1],fe[2]),ar=$t(.25,1.4,nn),kr=$t(.5,2,-fe[1]),rn=yn*.35*(.3+ht)+.65,br=[Math.cos(rn),0,Math.sin(rn)];nn>.001&&(br=jo(br,Dr(fe,-1/nn),ar));let an=Math.min(1,j*4);ye.axis=jo(ye.axis,br,ye.fresh?1:an);let uo=ye.axis,Kn=Math.hypot(uo[0],uo[1],uo[2])||1;uo=Dr(uo,1/Kn);let Wo=ko.eye,Fn=[Wo[0]-se[0],Wo[1]-se[1],Wo[2]-se[2]],Hr=Math.hypot(Fn[0],Fn[1],Fn[2])||1,Br=Ht(.6,.22,ar),Uo=[Fn[0]/Hr*Br,1+Fn[1]/Hr*Br,Fn[2]/Hr*Br],va=uo[0]*Uo[0]+uo[1]*Uo[1]+uo[2]*Uo[2];Uo=qd(Uo,Dr(uo,va));let wn=Math.hypot(Uo[0],Uo[1],Uo[2])||1;Uo=Dr(Uo,1/wn);let Oa=[uo[1]*Uo[2]-uo[2]*Uo[1],uo[2]*Uo[0]-uo[0]*Uo[2],uo[0]*Uo[1]-uo[1]*Uo[0]],Ao=Math.hypot(fe[0],fe[2]),sn=0;if(Ao>.15&&ye.dir&&j>0){let yr=[fe[0]/Ao,fe[2]/Ao];sn=(ye.dir[0]*yr[1]-ye.dir[1]*yr[0])/j,ye.dir=yr}else Ao>.15&&(ye.dir=[fe[0]/Ao,fe[2]/Ao]);ye.bank+=(Math.max(-.8,Math.min(.8,sn*.3))*ar-ye.bank)*Math.min(1,j*3),ye.rock+=j*(1.5+2.4*ar),ye.spin+=j*kr*7*(.4+ht);let ma=Math.sin(ye.rock)*(.26+.45*ht)*(1-.5*kr)+ye.bank+ye.spin,ps=Math.sin(ye.rock*.63+1)*(.16+.3*ht)+(Oo.swing||0)*.9,Qa=Math.cos(ma),vs=Math.sin(ma),Ql=ao(Dr(Uo,Qa),Dr(Oa,vs)),z0=ao(Dr(Oa,Qa),Dr(Uo,-vs));Qa=Math.cos(ps),vs=Math.sin(ps);let li=ao(Dr(uo,Qa),Dr(Ql,vs)),kc=ao(Dr(Ql,Qa),Dr(uo,-vs)),Jh=Math.sin(ye.rock+1.5708)*.035*(.3+ht)*(1-.5*ar),f0=ao(se,Dr(Oa,Jh)),Ac=[li[0],li[1],li[2],0,kc[0],kc[1],kc[2],0,z0[0],z0[1],z0[2],0,f0[0],f0[1],f0[2],1];for(let yr=0;yr<16;yr++)Vt[yr]=Ac[yr];ye.fresh=!1}return Oo.phase!=="fly"&&(ye.prev=null,ye.vel=[0,0,0],ye.fresh=!0,ye.spin=0,ye.bank=0,ye.dir=null),{visible:!0,model:Vt}}function pa(j){for(let ht in Xh)Qe[ht]=j[ht]!==void 0?j[ht]:Xh[ht]}function l0(j,ht){if(j<=1)return{phase:"home",pos:xc.slice(),tumble:0};let Vt=x5[j];if(Vt){let se=Vt.amp;return{phase:"fly",pos:ao(Vt.pos(),[Math.sin(ht*.55)*se[0],Math.sin(ht*.8)*se[1],(1-Math.cos(ht*.45))*se[2]]),tumble:Vt.tumble}}return{phase:"floor",pos:(j>=18?fs:j>=10?Ul:Xa).slice(),tumble:0}}let eo=0,vo=null;function $n(j){let ht=Math.min(.1,Math.max(0,j-eo));if(eo=j,S=j,io||(io=!0,ve.start=j),so)return null;if(Me&&(Me.t+=ht,Me.t>=.7&&(Me=null,pe=!0,pt.start(Ae,Object.assign({},Xh,{fade:1,fadeColor:[0,0,0]})))),pt.active){let Ao=pt.update(ht);return ko=Ao.camera,pa(Ao.look),o&&window.__camOverride&&(ko=window.__camOverride),o&&window.__lookOverride&&Object.assign(Qe,window.__lookOverride),{camera:ko,walker:null,door:1,look:Qe,leaf:Go(ht)}}if(!Pe&&!Dt&&S-ae>Ce){let Ao=Sr(bt);Math.abs(ct[Ao]-bt)<no&&(bt=ct[Ao])}let Vt=bt-Oe;if(Pe){let sn=Math.sign(Vt)*Math.min(Eo,Math.sqrt(2*Ko*Math.abs(Vt)))-xe;xe+=Math.sign(sn)*Math.min(Math.abs(sn),Ko*ht),Oe+=xe*ht,(Vt>0&&Oe>=bt||Vt<0&&Oe<=bt||Math.abs(bt-Oe)<1e-4)&&(Oe=bt,xe=0,Pe=!1)}else{let Ao=ek(Oe,bt,xe,fo,ht,3);Oe=Ao[0],xe=Ao[1],Math.abs(bt-Oe)<1e-4&&Math.abs(xe)<.001&&(Oe=bt,xe=0)}let se=0;for(;se<Hd.length-1&&Oe>=ct[se+1];)se++;let fe=Hd[se],nn=Jr((Oe-ct[se])/fe.dur),ar=ls[se],kr=ls[se+1],rn=Sr(Oe);rn!==Kt&&(Kt=rn,So=0);let br=Math.abs(Oe-ct[rn])<.02;br&&(So+=ht);let an=1-$t(0,1.2,Math.abs(Oe-ct[rn])),uo=fe.leaf(nn);if(uo.pos?Oo=Object.assign({},uo):Oo=Object.assign({},uo,{pos:uo.phase==="home"?xc.slice():(se>=10?Ul:Xa).slice()}),x5[rn]&&an>0){let Ao=l0(rn,So);Oo.pos=jo(Oo.pos,Ao.pos,an)}let Kn=fe.walker&&(nn>.01||se===6)?fe.walker(nn):null;vo=Kn==null?null:{x:Kn,z:Bd,heading:Math.PI/2,phase:(Kn-w5)/ik};let Wo=fe.cam(nn,ar.cam(0),kr.cam(0),Oo);if(an>0&&So>0){let Ao=ls[rn],sn=Ao.cam(0),ma=Ao.cam(So);Wo=to(ao(Wo.eye,Dr(qd(ma.eye,sn.eye),an)),ao(Wo.target,Dr(qd(ma.target,sn.target),an)),Wo.fov+(ma.fov-sn.fov)*an,Wo.roll+(ma.roll-sn.roll)*an)}if(an>0&&!Zt){let Ao=S,sn=.006*an,ma=Math.sin(Ao*.61)*.6+Math.sin(Ao*1.37+1.3)*.4,ps=Math.sin(Ao*.47+2.1)*.6+Math.sin(Ao*1.13+.4)*.4,Qa=Math.sin(Ao*.53+4)*.5+Math.sin(Ao*.97+2.6)*.5;Wo=to(ao(Wo.eye,[ma*sn,ps*sn*.7,Qa*sn]),ao(Wo.target,[ps*sn*1.8,ma*sn*1.4,0]),Wo.fov,Wo.roll+Qa*.0012*an)}ko=Wo;let Fn=Wh(se),Hr=Wh(se+1),Br=Object.assign({},Fn,fe.look(nn,Fn,Hr,Oo,Wo.eye));if(an>0){let Ao=Wh(rn);for(let sn in Ao)typeof Ao[sn]=="number"&&(Br[sn]=Ht(Br[sn],Ao[sn],an))}pa(Br);let va=br&&Math.abs(bt-Oe)<.02?rn:-1;va!==de&&(va>=0&&(ci=S+_e),de=va,va>=0?Yn(va):Ka()),d.querySelectorAll("i").forEach((Ao,sn)=>Ao.classList.toggle("on",sn===rn));let wn=de>=0?X[de]:null;wn&&wn.fill&&!wn.filled&&(wn.fill(),wn.filled&&(wn.classList.remove("on"),wn.offsetWidth,wn.classList.add("on")));let Oa=Jr((j-ve.start)/2.6);return Oa<1&&(Qe.fade=Math.max(Qe.fade,1-$t(0,1,Oa)),Qe.fadeColor=[0,0,0]),o&&window.__camOverride&&(ko=window.__camOverride),o&&window.__lookOverride&&Object.assign(Qe,window.__lookOverride),{camera:ko,walker:vo,door:fe.door?fe.door(nn):se>=12?1:0,look:Me?Object.assign(Qe,{fade:Math.max(Qe.fade||0,Jr(Me.t/.6)),fadeColor:[0,0,0]}):Qe,leaf:Go(ht)}}return o&&(window.__tour={go:Ot,exit:Te,wind:Z,confess(){Ka(),de=-2,pt.start(ko,Qe)},note:()=>$e(),conf:pt,paper:Dh().STATE,seek(j,ht){Oe=bt=ct[j]+(ct[j+1]-ct[j])*ht,xe=0,Pe=!1,ae=S+1e6,ve.start=S-10,io=!0},jump(j){Oe=bt=ct[j],xe=0,Pe=!1,So=0,ae=S,ve.start=S-10,io=!0},state:()=>({current:Sr(Oe),scroll:+Oe.toFixed(3),target:+bt.toFixed(3),shown:de,move:Math.abs(bt-Oe)>.02?{p:Oe}:null,camNow:ko,leaf:Oo,look:Qe})}),{update:$n,get active(){return wo&&!so},handover(j){if(!so)return null;let ht=Jr((j-so.start)/1.8);return ht>=1?(wo=!1,null):{from:so.fromCam,fromLook:so.fromLook,k:bn(ht)}},restingDoor:()=>ke,restingLeaf(){return We?(Oo=We,Go(0)):null},mix:ni,cam:to}}});var mk=am(),Ya=ba(),sp=Q1(),Zh=Ya.reflection,gk=!1,q5=(t,e,o,n,r)=>n+(t-e)*(r-n)/(o-e),ip=()=>q5(window.innerWidth/window.innerHeight,16/9,9/16,1.7,Math.PI/3);navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)&&(ip=()=>q5(window.innerWidth/window.innerHeight,16/9,9/16,1.5,Math.PI/3));var G5=()=>2*Math.atan(Math.tan(ip()*.5)*window.innerHeight/window.innerWidth),xk=xm(),Xl=new xk;Xl.showPanel(0);gk&&document.body.appendChild(Xl.dom);var pn,Sc,Jd,Mc,tp,dn;function bk(){try{let t=document.createElement("canvas"),e=t.getContext("webgl")||t.getContext("experimental-webgl");return!!(e&&e.getExtension("OES_standard_derivatives"))}catch(t){return!1}}if(!bk())throw mk.finish(),sp.show(!0),new Error("This device cannot draw the 3D gallery; showing the list instead.");pn=bm()({extensions:["OES_element_index_uint","OES_standard_derivatives"],optionalExtensions:["EXT_texture_filter_anisotropic","WEBGL_depth_texture"],attributes:{alpha:!1,antialias:!1},pixelRatio:Ya.pixelRatio});location.hash==="#list"&&sp.show(!1);window.addEventListener("hashchange",()=>{location.hash==="#list"&&sp.show(!1)});Sc=a2()();var yk=Tu();Jd=yk(pn,Sc,Zh);Mc=Sg()(pn,Sc);tp=Lg()(pn);var E5=Bg()(pn,Sc),S5=t3()(pn),k5=n3()(pn),A5=y3()(pn),T5=S3()(pn),L5=z3()(pn),us=j3()(pn),ep=ld(),H5=Nf(),wk=Kc(),op=hd(),np=tr(),Xn=lh(),rp=ex(),B5=Ah(),{A:_c}=_a();dn=$b()(Sc,G5);var Ec=qb()(pn,Ya),hs=jb()(pn),z5=Vb()(pn),_k=Kb()(pn,Ya),Mk=o5()(pn,Ya),R5=G0()(pn),N5=Dh()(pn),C5=U0()(pn),O5=gl()(pn),c0=M5()({fps:dn,paintings:()=>Mc.interactables(),avatar:us,onExit:()=>dn.setPaused(!1)});dn.setPaused(!0);/tourdebug/.test(location.search)&&(window.__post=Ec);var ai=[],Kl=[],Na=[7,2,1.6];Sc.viewer=Na;var Ek=pn({cull:{enable:!0,face:"back"},uniforms:{view:()=>ai,proj:()=>Kl,yScale:1,mirrorOn:()=>Zh?1:0,night:()=>np.night,time:pn.context("time")}}),Sk=pn({cull:{enable:!0,face:"front"},uniforms:{yScale:-1}}),U5=document.createElement("style");U5.textContent=`

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
`;document.head.appendChild(U5);var Ca=document.createElement("button");Ca.className="painting-plaque";Ca.type="button";Ca.setAttribute("aria-label","Read painting");document.body.appendChild(Ca);var Gr=document.createElement("div");Gr.className="story-overlay";Gr.innerHTML=`

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

		${H5.line("story-contact")}

		<div class="visit-row story-visit"></div>

		<p
			class="story-body"
			id="story-body"
		></p>

	</article>
`;document.body.appendChild(Gr);var ds=document.createElement("div");ds.className="museum-links";ds.innerHTML=H5.icons("museum-link");ds.insertBefore(Od()("museum-link"),ds.firstChild);ds.insertBefore(B5.button("museum-link"),ds.firstChild.nextSibling);["mousedown","pointerdown","click"].forEach(t=>ds.addEventListener(t,e=>e.stopPropagation()));document.body.appendChild(ds);var kk=Gr.querySelector("#story-title"),Ak=Gr.querySelector("#story-body"),P5=Gr.querySelector("#story-meta"),Tk=Gr.querySelector(".story-contact"),Vl=Gr.querySelector(".story-visit");Vl.addEventListener("click",t=>{t.target.closest(".visit-btn")&&ii&&op.open(ii)});var Lk=Gr.querySelector(".story-close"),ii=null,ta={p:0,target:0,last:0},j5={title:ep.title,description:ep.text,isAbout:!0},T0=null;function cp(t){t&&(ii=t,kk.textContent=t.title||"",Ak.textContent=t.description||"",P5.textContent=t.isAbout?"":wk(t),P5.hidden=!!t.isAbout,Tk.hidden=!t.isAbout,Vl.innerHTML=t.isAbout?"":op.button(t),Vl.hidden=!Vl.innerHTML,Vl.hidden||op.warm(t),Gr.classList.toggle("about-mode",!!t.isAbout),Gr.classList.add("open"),ta.target=t.isAbout?1:0,T0=t,Ca.classList.remove("visible"),dn.setPaused(!0))}function lp(){Gr.classList.remove("open"),ta.target=0,ii=null,T0=null,dn.setPaused(!1)}function W5(t){t&&(t.preventDefault(),t.stopPropagation()),T0&&cp(T0)}Ca.addEventListener("pointerup",W5,!0);Ca.addEventListener("touchend",W5,{passive:!1,capture:!0});Ca.addEventListener("click",t=>{t&&(t.preventDefault(),t.stopPropagation()),ii===null&&T0&&cp(T0)},!0);Lk.addEventListener("click",lp);Gr.addEventListener("click",t=>{t.target===Gr&&lp()});window.addEventListener("keydown",t=>{t.code==="Escape"&&Gr.classList.contains("open")&&lp()});function I5(t,e){let o=e[0],n=e[1],r=e[2];return[t[0]*o+t[4]*n+t[8]*r+t[12],t[1]*o+t[5]*n+t[9]*r+t[13],t[2]*o+t[6]*n+t[10]*r+t[14],t[3]*o+t[7]*n+t[11]*r+t[15]]}function zk(){if(ii)return;if(c0.active){T0=null,Ca.classList.remove("visible");return}let t=Mc.interactables(),e=dn.forward[0],o=dn.forward[2],n=Math.hypot(e,o)||1,r=null,a=1/0;for(let s of t){let i=s.paintingPosition,c=0,f=0;s.side==="left"?c=1:s.side==="right"?c=-1:s.side==="corridor"?f=1:f=-1;let l=i[0]-dn.pos[0],p=i[2]-dn.pos[2],d=-(l*c+p*f),v=Math.abs(l*f-p*c),u=-(e*c+o*f)/n,h=s.side==="end"?11:8,m=(s.width||2)/2;u>.9&&d>.5&&d<h&&v<m+.8&&d<a&&(r=s,a=d)}if(!r){let s=dn.pos[0],i=dn.pos[2];e/n>.85&&s<13.6&&i>_c.z0-.5&&i<_c.z1+.5&&(r=Object.assign({},j5,{plaqueTitle:ep.name}))}r?(T0=r,Ca.textContent=r.isAbout?"ABOUT  \xB7  "+r.plaqueTitle:"READ  \xB7  "+r.title,Ca.classList.add("visible")):(T0=null,Ca.classList.remove("visible"))}var fp=Xi();function Rk(){let t=us.state;if(!t||!t.glowPos)return null;let e=I5(dn.view(),[t.glowPos[0],t.glowPos[1]-.08,t.glowPos[2],1]),o=I5(dn.proj(),e);return o[3]<=.05?null:[(o[0]/o[3]*.5+.5)*window.innerWidth,(.5-o[1]/o[3]*.5)*window.innerHeight,o[3]]}var ap=null;window.addEventListener("pointerdown",t=>{ap={x:t.clientX,y:t.clientY,t:performance.now()}},!0);window.addEventListener("pointerup",t=>{let e=ap;if(ap=null,!e||ii||c0.active||!t.target||!/^(CANVAS|BODY)$/.test(t.target.tagName)||Math.hypot(t.clientX-e.x,t.clientY-e.y)>12||performance.now()-e.t>600)return;let o=Rk();if(!o)return;let n=!!document.pointerLockElement,r=n?window.innerWidth/2:t.clientX,a=n?window.innerHeight/2:t.clientY,s=Math.max(t.pointerType==="touch"?60:40,260/o[2]);Math.hypot(r-o[0],a-o[1])<s&&(t.preventDefault(),t.stopPropagation(),cp(j5))},!0);function Nk(t){let e=Math.min(Math.max(t-ta.last,0),.1);ta.last=t;let o=e/1.6;if(ta.p=ta.target>ta.p?Math.min(1,ta.p+o):Math.max(0,ta.p-o),ta.p<=0)return;let n=ta.p<.5?2*ta.p*ta.p:1-Math.pow(-2*ta.p+2,2)/2,r=window.innerHeight>window.innerWidth,a=us.state,s=a&&a.hipsPos?a.hipsPos[0]:_c.cx-1.2,i=a&&a.hipsPos?a.hipsPos[2]:_c.zc,c=r?[s-2.3,2,i-.1]:[s-1.55,1.55,i+.3],f=r?[s+.1,.2,i-.1]:[s+.1,.7,i+.6],l=dn.pos,p=dn.forward,d=[l[0],l[1],l[2]],v=[l[0]+p[0],l[1]+p[1],l[2]+p[2]],u=(b,y)=>b.map((w,_)=>w+(y[_]-w)*n),h=[_c.cx-6.2,1.7,_c.zc],m=1-n,g=d.map((b,y)=>m*m*b+2*m*n*h[y]+n*n*c[y]);fp.lookAt(dn.view(),g,u(v,f),[0,1,0])}var V5=/[?&]studio\b/.test(location.search);if(V5){let t=document.createElement("style");t.textContent=".tour, #museum-mobile-controls, .painting-plaque { display: none !important; }",document.head.appendChild(t),window.addEventListener("pointerdown",()=>tr().toggle()),window.addEventListener("keydown",e=>{(e.key==="n"||e.key===" ")&&tr().toggle()})}var ri={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},si=null,Yl=!1,Kh=!1;function Ck(t,e,o,n){let r=[o[0]-e[0],o[1]-e[1],o[2]-e[2]],a=Math.hypot(r[0],r[1],r[2])||1,s=[-r[2]/a,0,r[0]/a],i=Math.hypot(s[0],s[2])||1;s=[s[0]/i,0,s[2]/i];let c=Math.cos(n),f=Math.sin(n);return fp.lookAt(t,e,o,[s[0]*f,c,s[2]*f])}function Ok(t){let e=window.innerWidth/window.innerHeight,o=Ec.shot,n=c0.active?c0.update(t):null,r=n?null:c0.handover(t),a=null,s=ri;if(n){a=n.camera,s=n.look,si=n.leaf;let i=window.__walkOverride&&/tourdebug/.test(location.search)?window.__walkOverride:n.walker||null;us.setWalk(i),Yl=!!i,hs.setOpen(n.door||0)}else si=c0.restingLeaf(),us.setWalk(null),Yl=!1,hs.setOpen(c0.restingDoor());if(r){let i=dn.pos,c=dn.forward,f=c0.cam([i[0],i[1],i[2]],[i[0]+c[0],i[1]+c[1],i[2]+c[2]],G5()*180/Math.PI,0);a=c0.mix(r.from,f,r.k),s={};for(let l in ri)s[l]=Array.isArray(ri[l])?ri[l]:r.fromLook[l]+(ri[l]-r.fromLook[l])*r.k}if(a&&n&&(a=rp.apply(a,t)),V5&&!(/tourdebug/.test(location.search)&&window.__camOverride)){let i=gl().previewCam(t);a=i,s=Object.assign({},ri,{fade:i.fade,focus:8})}if(a)Ck(ai,a.eye,a.target,a.roll||0),fp.perspective(Kl,a.fov*Math.PI/180,e,.1,700),Na[0]=a.eye[0],Na[1]=a.eye[1],Na[2]=a.eye[2];else{let i=dn.view(),c=dn.proj();for(let d=0;d<16;d++)ai[d]=i[d],Kl[d]=c[d];let f=i[12],l=i[13],p=i[14];Na[0]=-(i[0]*f+i[1]*l+i[2]*p),Na[1]=-(i[4]*f+i[5]*l+i[6]*p),Na[2]=-(i[8]*f+i[9]*l+i[10]*p)}for(let i in ri)o[i]=s[i];n&&rp.pull(o,t)}var da={wake:[[0,-50,0,0],[0,-50,0,0],[0,-50,0,0],[0,-50,0,0]],wakeDir:[0,0,1],gust:[0,0],focus:6,aperture:0},Kd=[9,9,9,9],$5=[0,0,0,0],jl=0,Qd=0,wc=null,F5=0,D5=0,Wl=0;function Pk(t){let e=Math.min(.1,Math.max(0,t-F5));F5=t,da.focus=Ec.shot.focus,da.aperture=Ya.post>=2?Ec.shot.aperture:0;for(let s=0;s<4;s++)Kd[s]+=e,da.wake[s][3]=$5[s]*Math.exp(-Kd[s]/1.1);let o=si&&si.visible?si.model:null;if(o&&e>0){let s=[o[12],o[13],o[14]];if(wc){let i=[s[0]-wc[0],s[1]-wc[1],s[2]-wc[2]],c=Math.hypot(i[0],i[1],i[2]),f=c/e;if(c<1.5&&f>.12){let l=Math.min(1,e*8);for(let d=0;d<3;d++)da.wakeDir[d]+=(i[d]/c-da.wakeDir[d])*l;let p=Math.hypot(da.wakeDir[0],da.wakeDir[1],da.wakeDir[2])||1;for(let d=0;d<3;d++)da.wakeDir[d]/=p;if(Qd+=e,Qd>.14){Qd=0;let d=da.wake[jl];d[0]=s[0],d[1]=s[1],d[2]=s[2],$5[jl]=Math.min(1,(f-.12)/1.6)*.5,Kd[jl]=0,jl=(jl+1)%4}}}wc=s}else o||(wc=null);let n=hs.openNow?hs.openNow():0,r=e>0?(n-D5)/e:0;D5=n;let a=Math.max(-1,Math.min(1,r*1.2));Wl+=(a-Wl)*Math.min(1,e*(Math.abs(a)>Math.abs(Wl)?6:.7)),da.gust[0]+=Wl*5.5*e,da.gust[1]=Math.abs(Wl)}var Zd=0,Qh=!1;pn.frame(function({time:t}){if(document.body.classList.contains("visiting")){Zd=0;return}Xl.begin(),np.tick(t);let e=c0.active&&rp.resting&&np.settled&&(Ya.isPhone||Ya.scale<1||Ya.level>0);if(e){if(Qh=!Qh,Qh){Xl.end();return}}else Qh=!1;let o=t-Zd;Zd=t,Ya.frame(e?o/2:o),Zh=Ya.reflection,dn.tick({time:t}),Nk(t),Mc.update(dn.pos,dn.fmouse[1],ip()),zk(),Ok(t),Xn.update(ai,Kl,Na),B5.listen(Na),Kh=!Yl&&Xn.room("stair")&&(!Xn.room("court")||Na[0]<.5||Na[2]>30),us.setPiano(Kh),Pk(t),Ec.capture(arguments[0],{view:ai,proj:Kl,eye:Na},()=>{Ek(()=>{Zh&&Xn.floor&&Sk(()=>{Xn.room("studio",!0)&&O5({reflected:!0}),Xn.zone!=="studio"&&(Jd(),E5({reflected:!0}),R5(),Xn.room("stair",!0)&&(C5({reflected:!0}),N5({reflected:!0,view:ai})),Xn.room("court",!0)&&L5(),(Kh||Xn.room("court",!0)||Yl)&&us(),tp(Mc.batch()),Xn.room("street",!0)&&S5(),Xn.room("garden",!0)&&A5(),Xn.room("florence",!0)&&T5(),z5(si),hs(),k5(),hs.glass())}),Xn.room("studio")&&O5(),Xn.zone!=="studio"&&(Jd(),E5(),R5(),Xn.room("stair")&&(C5(),N5({view:ai})),Xn.room("court")&&L5(),(Kh||Xn.room("court")||Yl)&&us(),tp(Mc.batch()),Xn.room("street")&&S5(),Xn.room("garden")&&(A5(),Mk()),Xn.room("florence")&&T5(),z5(si),hs(),_k(da),k5(),hs.glass())})}),Ec.present(),Xl.end()});})();
