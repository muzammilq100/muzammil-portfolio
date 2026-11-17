"use strict";(()=>{var pt=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var tm=pt((Ak,Jv)=>{"use strict";var Ti=document.getElementById("loader"),ki=Ti&&Ti.querySelector(".loader-name"),jc=0,Ef=0,Sf=!1,c4=performance.now(),Ai=.06,Si=0,U1=0,Xv=!1,l4=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;function f4(t){if(!ki)return;let e=ki.offsetWidth||1,n=(e*(1.14-1.28*t)-e).toFixed(1)+"px 0";ki.style.webkitMaskPosition=n,ki.style.maskPosition=n}function Qv(t){let e=Math.min(.05,U1?(t-U1)/1e3:.016);U1=t;let o=Sf?.75:.22+(Ai-Si)*1.2;if(Si=Math.min(Ai,Si+Math.max(0,o)*e),l4&&(Si=Ai),f4(Si),Sf&&Si>=.999){Xv||(Xv=!0,setTimeout(Zv,650));return}requestAnimationFrame(Qv)}ki&&requestAnimationFrame(Qv);function Yv(){let t=jc?Ef/Math.max(jc,24):0;Ai=Math.max(Ai,Math.min(.9,.06+t*.84))}function Zv(){Ti&&(Ti.classList.add("done"),setTimeout(()=>Ti.remove(),1400))}function B1(){Sf||(Sf=!0,window.__galleryReady=!0,Ti&&(Ai=1,ki||Zv()))}var Kv=null;function h4(){clearTimeout(Kv),Ef>=jc&&performance.now()-c4>600&&(Kv=setTimeout(()=>{Ef>=jc&&B1()},450))}setTimeout(B1,2e4);var u4=t=>/(^|\/)(res|images)\//.test(t),Mf=window.fetch.bind(window);async function d4(t,e){let o=await Mf(t+".gz",e);if(!o.ok)throw new Error("no .gz");let n=new Uint8Array(await o.arrayBuffer());if(!(n[0]===31&&n[1]===139))return new Response(n);let r=new Blob([n]).stream().pipeThrough(new DecompressionStream("gzip")),a=await new Response(r).arrayBuffer();return new Response(a,{status:200,headers:{"Content-Type":"application/octet-stream"}})}window.fetch=function(t,e){let o=typeof t=="string"?t:t&&t.url||"";if(!u4(o))return Mf(t,e);jc++,Yv();let n=a=>(Ef++,Yv(),h4(),a),r;return/\.bin$/.test(o)&&typeof DecompressionStream!="undefined"?r=d4(o,e).catch(()=>Mf(t,e)):r=Mf(t,e),r.then(n,a=>{throw n(),a})};Jv.exports={finish:B1}});var va=pt((Lk,rm)=>{"use strict";var em=typeof navigator!="undefined"&&navigator.userAgent||"",p4=typeof window!="undefined"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches&&!window.matchMedia("(any-pointer: fine)").matches,d0=/Android|iPhone|iPad|iPod|Mobile|Silk|Kindle|webOS|BlackBerry|Opera Mini|IEMobile/i.test(em)||/Macintosh/.test(em)&&typeof navigator!="undefined"&&navigator.maxTouchPoints>1||p4,om=typeof window!="undefined"&&window.devicePixelRatio||1,bo={isPhone:d0,pixelRatio:d0?Math.min(om,1.5):Math.min(om,2),reflection:!d0,gardenDetail:d0?0:1,leafShare:d0?.65:1,motion:!d0,post:d0?1:2,level:d0?1:0};bo.scale=1;var v4=d0?.55:.6,Wc=0,kf=0,Vc=0,Xc=0,Li=1,Yc=0,Tf=48,zi=null,j1=0;function m4(t){zi={fps:t,scale:bo.scale},bo.scale>.86?bo.scale=.85:bo.reflection?bo.stepDown():bo.scale>.71?bo.scale=.7:bo.stepDown()||(bo.scale=Math.max(v4,bo.scale-.1))}var nm=!0;try{/[?&]noadapt\b/.test(location.search)&&(nm=!1)}catch(t){}bo.frame=t=>{if(!nm)return;if(!(t>0)||t>1){Wc=0,kf=0;return}if(Wc+=t,kf++,Wc<.75)return;let e=kf/Wc;if(Wc=0,kf=0,Yc>0&&(Yc-=.75,Yc<=0&&(Li=1)),zi){if(e<zi.fps*1.08&&zi.scale>bo.scale){if(++j1>=2){bo.scale=1,Li=1,Yc=0,Tf=Math.min(Tf,e*.85),j1=0,Vc=0,zi=null;return}}else j1=0;zi=null}if(e<Tf){if(Xc=0,++Vc>=2){if(Vc=0,bo.scale>.61&&bo.climbed){Li=bo.scale-.05,Yc=40,bo.scale=Li,bo.climbed=!1;return}m4(e)}}else e>Math.max(Tf*1.15,55)?(Vc=0,++Xc>=6&&bo.scale<Li-.001?(bo.scale=Math.min(Li,bo.scale+.05),bo.climbed=!0,Xc=0):Xc>=6&&(bo.climbed=!1)):(Vc=0,Xc=0)};bo.stepDown=()=>{if(bo.reflection)bo.reflection=!1;else if(bo.gardenDetail>0||bo.motion)bo.gardenDetail=0,bo.motion=!1,bo.leafShare=Math.min(bo.leafShare,.65);else if(bo.post>0)bo.post--;else return!1;return bo.level++,!0};rm.exports=bo});var W1=pt((zk,am)=>{"use strict";am.exports=[{file:"IMG_20250717_102753.jpg",slug:"love-me-like-i-am-already-dead",title:"Love me like I am Already Dead",medium:"Oil on canvas",size:[61,91],description:`We live in a world soaked in hypocrisy. We\u2019re told not to \u201Cspeak ill of the dead,\u201D yet we spend lifetimes speaking ill of the living. We judge, ignore, neglect\u2014and then pretend to mourn with grace when it\u2019s too late. People say beautiful things at funerals, but only after burying a lifetime of cruelty or silence.

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
but the loneliness of having no one willing to admit it happened.`}]});var Af=pt((Nk,cm)=>{"use strict";var Ar={instagram:"muzammil_qureshi",email:"muzammilqureshi100@gmail.com"},sm='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/></svg>',im='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M3.5 7l8.5 6 8.5-6"/></svg>';Ar.instagramUrl="https://instagram.com/"+Ar.instagram;Ar.mailUrl="mailto:"+Ar.email+"?subject="+encodeURIComponent("Your paintings");Ar.icons=t=>`
	<a class="${t}" href="${Ar.instagramUrl}" target="_blank" rel="noopener" aria-label="Instagram: @${Ar.instagram}" title="Instagram">${sm}</a>
	<a class="${t}" href="${Ar.mailUrl}" aria-label="Email ${Ar.email}" title="Email">${im}</a>`;Ar.line=t=>`
	<span class="${t}">
		<a href="${Ar.instagramUrl}" target="_blank" rel="noopener">${sm}<span>@${Ar.instagram}</span></a>
		<a href="${Ar.mailUrl}">${im}<span>${Ar.email}</span></a>
	</span>`;cm.exports=Ar});var Kc=pt((Rk,lm)=>{"use strict";lm.exports=t=>{if(!t)return"";let e=[];return t.medium&&e.push(t.medium),t.size&&t.size.length===2&&e.push(t.size[0]+" \xD7 "+t.size[1]+" cm"),e.join("  \xB7  ")}});var V1=pt((Ck,um)=>{"use strict";var g4=W1(),x4=Af(),fm=Kc(),y4=va(),I0=t=>String(t).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),b4=`
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
`,Lr=null;function w4(t){if(Lr){Lr.hidden=!1,requestAnimationFrame(()=>Lr.classList.add("on"));return}let e=document.createElement("style");e.textContent=b4,document.head.appendChild(e);let o=!y4.isPhone;Lr=document.createElement("div"),Lr.className="plist",Lr.setAttribute("role","region"),Lr.setAttribute("aria-label","All paintings"),Lr.innerHTML=`
		${t?"":'<button type="button" class="plist-close">Back to the gallery</button>'}
		<header class="plist-head">
			<h1>Muzammil</h1>
			<p class="plist-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</p>
			${x4.line("plist-contact")}
		</header>
		${t?'<p class="plist-note">This device could not open the 3D gallery, so here are the paintings on their own.</p>':""}
		<main class="plist-grid">
			${g4.map(r=>`
			<article class="plist-item" id="${I0(r.slug)}">
				<img loading="lazy" decoding="async" alt="${I0(r.title)}, ${I0(fm(r))}"
					src="images/web/${I0(r.slug)}${o?"":"-1024"}.webp"
					onerror="this.onerror=null;this.src='images/${I0(r.file)}'">
				<p class="plist-meta">${I0(fm(r))}</p>
				<h2>${I0(r.title)}</h2>
				<details><summary>Read its story</summary>
					${String(r.description).split(/\n\s*\n/).map(a=>`<p>${I0(a.trim())}</p>`).join("")}
				</details>
			</article>`).join("")}
		</main>`,["mousedown","pointerdown","click","wheel","touchstart","touchmove","keydown"].forEach(r=>Lr.addEventListener(r,a=>a.stopPropagation(),{passive:!0}));let n=Lr.querySelector(".plist-close");n&&n.addEventListener("click",hm),document.body.appendChild(Lr),requestAnimationFrame(()=>Lr.classList.add("on"))}function hm(){Lr&&(Lr.classList.remove("on"),setTimeout(()=>{Lr.hidden=!0},500),location.hash==="#list"&&history.replaceState(null,"",location.pathname+location.search))}um.exports={show:w4,hide:hm}});var dm=pt((X1,Y1)=>{(function(t,e){typeof X1=="object"&&typeof Y1!="undefined"?Y1.exports=e():typeof define=="function"&&define.amd?define(e):t.Stats=e()})(X1,function(){var t=function(){function e(d){return r.appendChild(d.dom),d}function o(d){for(var u=0;u<r.children.length;u++)r.children[u].style.display=u===d?"block":"none";n=d}var n=0,r=document.createElement("div");r.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",r.addEventListener("click",function(d){d.preventDefault(),o(++n%r.children.length)},!1);var a=(performance||Date).now(),s=a,i=0,c=e(new t.Panel("FPS","#0ff","#002")),f=e(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var l=e(new t.Panel("MB","#f08","#201"));return o(0),{REVISION:16,dom:r,addPanel:e,showPanel:o,begin:function(){a=(performance||Date).now()},end:function(){i++;var d=(performance||Date).now();if(f.update(d-a,200),d>s+1e3&&(c.update(1e3*i/(d-s),100),s=d,i=0,l)){var u=performance.memory;l.update(u.usedJSHeapSize/1048576,u.jsHeapSizeLimit/1048576)}return d},update:function(){a=this.end()},domElement:r,setMode:o}};return t.Panel=function(e,o,n){var r=1/0,a=0,s=Math.round,i=s(window.devicePixelRatio||1),c=80*i,f=48*i,l=3*i,d=2*i,u=3*i,v=15*i,p=74*i,h=30*i,m=document.createElement("canvas");m.width=c,m.height=f,m.style.cssText="width:80px;height:48px";var g=m.getContext("2d");return g.font="bold "+9*i+"px Helvetica,Arial,sans-serif",g.textBaseline="top",g.fillStyle=n,g.fillRect(0,0,c,f),g.fillStyle=o,g.fillText(e,l,d),g.fillRect(u,v,p,h),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(u,v,p,h),{dom:m,update:function(y,b){r=Math.min(r,y),a=Math.max(a,y),g.fillStyle=n,g.globalAlpha=1,g.fillRect(0,0,c,v),g.fillStyle=o,g.fillText(s(y)+" "+e+" ("+s(r)+"-"+s(a)+")",l,d),g.drawImage(m,u+i,v,p-i,h,u,v,p-i,h),g.fillRect(u+p-i,v,i,h),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(u+p-i,v,i,s((1-y/b)*h))}}},t})});var pm=pt((K1,Q1)=>{(function(t,e){typeof K1=="object"&&typeof Q1!="undefined"?Q1.exports=e():typeof define=="function"&&define.amd?define(e):t.createREGL=e()})(K1,function(){"use strict";var t=function(x){return x instanceof Uint8Array||x instanceof Uint16Array||x instanceof Uint32Array||x instanceof Int8Array||x instanceof Int16Array||x instanceof Int32Array||x instanceof Float32Array||x instanceof Float64Array||x instanceof Uint8ClampedArray},e=function(x,S){for(var R=Object.keys(S),tt=0;tt<R.length;++tt)x[R[tt]]=S[R[tt]];return x},o=`
`;function n(x){return typeof atob!="undefined"?atob(x):"base64:"+x}function r(x){var S=new Error("(regl) "+x);throw console.error(S),S}function a(x,S){x||r(S)}function s(x){return x?": "+x:""}function i(x,S,R){x in S||r("unknown parameter ("+x+")"+s(R)+". possible values: "+Object.keys(S).join())}function c(x,S){t(x)||r("invalid parameter type"+s(S)+". must be a typed array")}function f(x,S){switch(S){case"number":return typeof x=="number";case"object":return typeof x=="object";case"string":return typeof x=="string";case"boolean":return typeof x=="boolean";case"function":return typeof x=="function";case"undefined":return typeof x=="undefined";case"symbol":return typeof x=="symbol"}}function l(x,S,R){f(x,S)||r("invalid parameter type"+s(R)+". expected "+S+", got "+typeof x)}function d(x,S){x>=0&&(x|0)===x||r("invalid parameter type, ("+x+")"+s(S)+". must be a nonnegative integer")}function u(x,S,R){S.indexOf(x)<0&&r("invalid value"+s(R)+". must be one of: "+S)}var v=["gl","canvas","container","attributes","pixelRatio","extensions","optionalExtensions","profile","onDone"];function p(x){Object.keys(x).forEach(function(S){v.indexOf(S)<0&&r('invalid regl constructor argument "'+S+'". must be one of '+v)})}function h(x,S){for(x=x+"";x.length<S;)x=" "+x;return x}function m(){this.name="unknown",this.lines=[],this.index={},this.hasErrors=!1}function g(x,S){this.number=x,this.line=S,this.errors=[]}function y(x,S,R){this.file=x,this.line=S,this.message=R}function b(){var x=new Error,S=(x.stack||x).toString(),R=/compileProcedure.*\n\s*at.*\((.*)\)/.exec(S);if(R)return R[1];var tt=/compileProcedure.*\n\s*at\s+(.*)(\n|$)/.exec(S);return tt?tt[1]:"unknown"}function w(){var x=new Error,S=(x.stack||x).toString(),R=/at REGLCommand.*\n\s+at.*\((.*)\)/.exec(S);if(R)return R[1];var tt=/at REGLCommand.*\n\s+at\s+(.*)\n/.exec(S);return tt?tt[1]:"unknown"}function _(x,S){var R=x.split(`
`),tt=1,it=0,Z={unknown:new m,0:new m};Z.unknown.name=Z[0].name=S||b(),Z.unknown.lines.push(new g(0,""));for(var nt=0;nt<R.length;++nt){var yt=R[nt],_t=/^\s*#\s*(\w+)\s+(.+)\s*$/.exec(yt);if(_t)switch(_t[1]){case"line":var Tt=/(\d+)(\s+\d+)?/.exec(_t[2]);Tt&&(tt=Tt[1]|0,Tt[2]&&(it=Tt[2]|0,it in Z||(Z[it]=new m)));break;case"define":var Mt=/SHADER_NAME(_B64)?\s+(.*)$/.exec(_t[2]);Mt&&(Z[it].name=Mt[1]?n(Mt[2]):Mt[2]);break}Z[it].lines.push(new g(tt++,yt))}return Object.keys(Z).forEach(function(zt){var Ft=Z[zt];Ft.lines.forEach(function(bt){Ft.index[bt.number]=bt})}),Z}function k(x){var S=[];return x.split(`
`).forEach(function(R){if(!(R.length<5)){var tt=/^ERROR:\s+(\d+):(\d+):\s*(.*)$/.exec(R);tt?S.push(new y(tt[1]|0,tt[2]|0,tt[3].trim())):R.length>0&&S.push(new y("unknown",0,R))}}),S}function N(x,S){S.forEach(function(R){var tt=x[R.file];if(tt){var it=tt.index[R.line];if(it){it.errors.push(R),tt.hasErrors=!0;return}}x.unknown.hasErrors=!0,x.unknown.lines[0].errors.push(R)})}function G(x,S,R,tt,it){if(!x.getShaderParameter(S,x.COMPILE_STATUS)){var Z=x.getShaderInfoLog(S),nt=tt===x.FRAGMENT_SHADER?"fragment":"vertex";Et(R,"string",nt+" shader source must be a string",it);var yt=_(R,it),_t=k(Z);N(yt,_t),Object.keys(yt).forEach(function(Tt){var Mt=yt[Tt];if(!Mt.hasErrors)return;var zt=[""],Ft=[""];function bt(Rt,j){zt.push(Rt),Ft.push(j||"")}bt("file number "+Tt+": "+Mt.name+`
`,"color:red;text-decoration:underline;font-weight:bold"),Mt.lines.forEach(function(Rt){if(Rt.errors.length>0){bt(h(Rt.number,4)+"|  ","background-color:yellow; font-weight:bold"),bt(Rt.line+o,"color:red; background-color:yellow; font-weight:bold");var j=0;Rt.errors.forEach(function(rt){var kt=rt.message,Ut=/^\s*'(.*)'\s*:\s*(.*)$/.exec(kt);if(Ut){var ut=Ut[1];switch(kt=Ut[2],ut){case"assign":ut="=";break}j=Math.max(Rt.line.indexOf(ut,j),0)}else j=0;bt(h("| ",6)),bt(h("^^^",j+3)+o,"font-weight:bold"),bt(h("| ",6)),bt(kt+o,"font-weight:bold")}),bt(h("| ",6)+o)}else bt(h(Rt.number,4)+"|  "),bt(Rt.line+o,"color:red")}),typeof document!="undefined"&&!window.chrome?(Ft[0]=zt.join("%c"),console.log.apply(console,Ft)):console.log(zt.join(""))}),a.raise("Error compiling "+nt+" shader, "+yt[0].name)}}function C(x,S,R,tt,it){if(!x.getProgramParameter(S,x.LINK_STATUS)){var Z=x.getProgramInfoLog(S),nt=_(R,it),yt=_(tt,it),_t='Error linking program with vertex shader, "'+yt[0].name+'", and fragment shader "'+nt[0].name+'"';typeof document!="undefined"?console.log("%c"+_t+o+"%c"+Z,"color:red;text-decoration:underline;font-weight:bold","color:red"):console.log(_t+o+Z),a.raise(_t)}}function X(x){x._commandRef=b()}function q(x,S,R,tt){X(x);function it(_t){return _t?tt.id(_t):0}x._fragId=it(x.static.frag),x._vertId=it(x.static.vert);function Z(_t,Tt){Object.keys(Tt).forEach(function(Mt){_t[tt.id(Mt)]=!0})}var nt=x._uniformSet={};Z(nt,S.static),Z(nt,S.dynamic);var yt=x._attributeSet={};Z(yt,R.static),Z(yt,R.dynamic),x._hasCount="count"in x.static||"count"in x.dynamic||"elements"in x.static||"elements"in x.dynamic}function ot(x,S){var R=w();r(x+" in command "+(S||b())+(R==="unknown"?"":" called from "+R))}function D(x,S,R){x||ot(S,R||b())}function K(x,S,R,tt){x in S||ot("unknown parameter ("+x+")"+s(R)+". possible values: "+Object.keys(S).join(),tt||b())}function Et(x,S,R,tt){f(x,S)||ot("invalid parameter type"+s(R)+". expected "+S+", got "+typeof x,tt||b())}function Ht(x){x()}function Lt(x,S,R){x.texture?u(x.texture._texture.internalformat,S,"unsupported texture format for attachment"):u(x.renderbuffer._renderbuffer.format,R,"unsupported renderbuffer format for attachment")}var xt=33071,lt=9728,Bt=9984,Ge=9985,Ce=9986,Xe=9987,we=5120,lo=5121,_o=5122,Xo=5123,Zt=5124,me=5125,ze=5126,no=32819,yo=32820,Ne=33635,ge=34042,gt=36193,ae={};ae[we]=ae[lo]=1,ae[_o]=ae[Xo]=ae[gt]=ae[Ne]=ae[no]=ae[yo]=2,ae[Zt]=ae[me]=ae[ze]=ae[ge]=4;function Re(x,S){return x===yo||x===no||x===Ne?2:x===ge?4:ae[x]*S}function ue(x){return!(x&x-1)&&!!x}function Kt(x,S,R){var tt,it=S.width,Z=S.height,nt=S.channels;a(it>0&&it<=R.maxTextureSize&&Z>0&&Z<=R.maxTextureSize,"invalid texture shape"),(x.wrapS!==xt||x.wrapT!==xt)&&a(ue(it)&&ue(Z),"incompatible wrap mode for texture, both width and height must be power of 2"),S.mipmask===1?it!==1&&Z!==1&&a(x.minFilter!==Bt&&x.minFilter!==Ce&&x.minFilter!==Ge&&x.minFilter!==Xe,"min filter requires mipmap"):(a(ue(it)&&ue(Z),"texture must be a square power of 2 to support mipmapping"),a(S.mipmask===(it<<1)-1,"missing or incomplete mipmap data")),S.type===ze&&(R.extensions.indexOf("oes_texture_float_linear")<0&&a(x.minFilter===lt&&x.magFilter===lt,"filter not supported, must enable oes_texture_float_linear"),a(!x.genMipmaps,"mipmap generation not supported with float textures"));var yt=S.images;for(tt=0;tt<16;++tt)if(yt[tt]){var _t=it>>tt,Tt=Z>>tt;a(S.mipmask&1<<tt,"missing mipmap data");var Mt=yt[tt];if(a(Mt.width===_t&&Mt.height===Tt,"invalid shape for mip images"),a(Mt.format===S.format&&Mt.internalformat===S.internalformat&&Mt.type===S.type,"incompatible type for mip image"),!Mt.compressed)if(Mt.data){var zt=Math.ceil(Re(Mt.type,nt)*_t/Mt.unpackAlignment)*Mt.unpackAlignment;a(Mt.data.byteLength===zt*Tt,"invalid data for image, buffer size is inconsistent with image format")}else Mt.element||Mt.copy}else x.genMipmaps||a((S.mipmask&1<<tt)===0,"extra mipmap data");S.compressed&&a(!x.genMipmaps,"mipmap generation for compressed images not supported")}function Mo(x,S,R,tt){var it=x.width,Z=x.height,nt=x.channels;a(it>0&&it<=tt.maxTextureSize&&Z>0&&Z<=tt.maxTextureSize,"invalid texture shape"),a(it===Z,"cube map must be square"),a(S.wrapS===xt&&S.wrapT===xt,"wrap mode not supported by cube map");for(var yt=0;yt<R.length;++yt){var _t=R[yt];a(_t.width===it&&_t.height===Z,"inconsistent cube map face shape"),S.genMipmaps&&(a(!_t.compressed,"can not generate mipmap for compressed textures"),a(_t.mipmask===1,"can not specify mipmaps and generate mipmaps"));for(var Tt=_t.images,Mt=0;Mt<16;++Mt){var zt=Tt[Mt];if(zt){var Ft=it>>Mt,bt=Z>>Mt;a(_t.mipmask&1<<Mt,"missing mipmap data"),a(zt.width===Ft&&zt.height===bt,"invalid shape for mip images"),a(zt.format===x.format&&zt.internalformat===x.internalformat&&zt.type===x.type,"incompatible type for mip image"),zt.compressed||(zt.data?a(zt.data.byteLength===Ft*bt*Math.max(Re(zt.type,nt),zt.unpackAlignment),"invalid data for image, buffer size is inconsistent with image format"):zt.element||zt.copy)}}}}var E=e(a,{optional:Ht,raise:r,commandRaise:ot,command:D,parameter:i,commandParameter:K,constructor:p,type:l,commandType:Et,isTypedArray:c,nni:d,oneOf:u,shaderError:G,linkError:C,callSite:w,saveCommandRef:X,saveDrawInfo:q,framebufferFormat:Lt,guessCommand:b,texture2D:Kt,textureCube:Mo}),so=0,Qe=0,Eo=5,Oo=6;function xn(x,S){this.id=so++,this.type=x,this.data=S}function Er(x){return x.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}function Xn(x){if(x.length===0)return[];var S=x.charAt(0),R=x.charAt(x.length-1);if(x.length>1&&S===R&&(S==='"'||S==="'"))return['"'+Er(x.substr(1,x.length-2))+'"'];var tt=/\[(false|true|null|\d+|'[^']*'|"[^"]*")\]/.exec(x);if(tt)return Xn(x.substr(0,tt.index)).concat(Xn(tt[1])).concat(Xn(x.substr(tt.index+tt[0].length)));var it=x.split(".");if(it.length===1)return['"'+Er(x)+'"'];for(var Z=[],nt=0;nt<it.length;++nt)Z=Z.concat(Xn(it[nt]));return Z}function Ka(x){return"["+Xn(x).join("][")+"]"}function L0(x,S){return new xn(x,Ka(S+""))}function ii(x){return typeof x=="function"&&!x._reglType||x instanceof xn}function Q(x,S){if(typeof x=="function")return new xn(Qe,x);if(typeof x=="number"||typeof x=="boolean")return new xn(Eo,x);if(Array.isArray(x))return new xn(Oo,x.map((R,tt)=>Q(R,S+"["+tt+"]")));if(x instanceof xn)return x;E(!1,"invalid option type in uniform "+S)}var Ct={DynamicVariable:xn,define:L0,isDynamic:ii,unbox:Q,accessor:Ka},$t={next:typeof requestAnimationFrame=="function"?function(x){return requestAnimationFrame(x)}:function(x){return setTimeout(x,16)},cancel:typeof cancelAnimationFrame=="function"?function(x){return cancelAnimationFrame(x)}:clearTimeout},Nt=typeof performance!="undefined"&&performance.now?function(){return performance.now()}:function(){return+new Date};function ce(){var x={"":0},S=[""];return{id:function(R){var tt=x[R];return tt||(tt=x[R]=S.length,S.push(R),tt)},str:function(R){return S[R]}}}function Se(x,S,R){var tt=document.createElement("canvas");e(tt.style,{border:0,margin:0,padding:0,top:0,left:0}),x.appendChild(tt),x===document.body&&(tt.style.position="absolute",e(x.style,{margin:0,padding:0}));function it(){var yt=window.innerWidth,_t=window.innerHeight;if(x!==document.body){var Tt=x.getBoundingClientRect();yt=Tt.right-Tt.left,_t=Tt.bottom-Tt.top}tt.width=R*yt,tt.height=R*_t,e(tt.style,{width:yt+"px",height:_t+"px"})}var Z;x!==document.body&&typeof ResizeObserver=="function"?(Z=new ResizeObserver(function(){setTimeout(it)}),Z.observe(x)):window.addEventListener("resize",it,!1);function nt(){Z?Z.disconnect():window.removeEventListener("resize",it),x.removeChild(tt)}return it(),{canvas:tt,onDestroy:nt}}function _e(x,S){function R(tt){try{return x.getContext(tt,S)}catch(it){return null}}return R("webgl")||R("experimental-webgl")||R("webgl-experimental")}function de(x){return typeof x.nodeName=="string"&&typeof x.appendChild=="function"&&typeof x.getBoundingClientRect=="function"}function Pe(x){return typeof x.drawArrays=="function"||typeof x.drawElements=="function"}function xe(x){return typeof x=="string"?x.split():(E(Array.isArray(x),"invalid extension array"),x)}function je(x){return typeof x=="string"?(E(typeof document!="undefined","not supported outside of DOM"),document.querySelector(x)):x}function Ee(x){var S=x||{},R,tt,it,Z,nt={},yt=[],_t=[],Tt=typeof window=="undefined"?1:window.devicePixelRatio,Mt=!1,zt=function(Rt){Rt&&E.raise(Rt)},Ft=function(){};if(typeof S=="string"?(E(typeof document!="undefined","selector queries only supported in DOM enviroments"),R=document.querySelector(S),E(R,"invalid query string for element")):typeof S=="object"?de(S)?R=S:Pe(S)?(Z=S,it=Z.canvas):(E.constructor(S),"gl"in S?Z=S.gl:"canvas"in S?it=je(S.canvas):"container"in S&&(tt=je(S.container)),"attributes"in S&&(nt=S.attributes,E.type(nt,"object","invalid context attributes")),"extensions"in S&&(yt=xe(S.extensions)),"optionalExtensions"in S&&(_t=xe(S.optionalExtensions)),"onDone"in S&&(E.type(S.onDone,"function","invalid or missing onDone callback"),zt=S.onDone),"profile"in S&&(Mt=!!S.profile),"pixelRatio"in S&&(Tt=+S.pixelRatio,E(Tt>0,"invalid pixel ratio"))):E.raise("invalid arguments to regl"),R&&(R.nodeName.toLowerCase()==="canvas"?it=R:tt=R),!Z){if(!it){E(typeof document!="undefined","must manually specify webgl context outside of DOM environments");var bt=Se(tt||document.body,zt,Tt);if(!bt)return null;it=bt.canvas,Ft=bt.onDestroy}nt.premultipliedAlpha===void 0&&(nt.premultipliedAlpha=!0),Z=_e(it,nt)}return Z?{gl:Z,canvas:it,container:tt,extensions:yt,optionalExtensions:_t,pixelRatio:Tt,profile:Mt,onDone:zt,onDestroy:Ft}:(Ft(),zt("webgl not supported, try upgrading your browser or graphics drivers http://get.webgl.org"),null)}function ke(x,S){var R={};function tt(nt){E.type(nt,"string","extension name must be string");var yt=nt.toLowerCase(),_t;try{_t=R[yt]=x.getExtension(yt)}catch(Tt){}return!!_t}for(var it=0;it<S.extensions.length;++it){var Z=S.extensions[it];if(!tt(Z))return S.onDestroy(),S.onDone('"'+Z+'" extension is not supported by the current WebGL context, try upgrading your system or a different browser'),null}return S.optionalExtensions.forEach(tt),{extensions:R,restore:function(){Object.keys(R).forEach(function(nt){if(R[nt]&&!tt(nt))throw new Error("(regl): error restoring extension "+nt)})}}}function Ye(x,S){for(var R=Array(x),tt=0;tt<x;++tt)R[tt]=S(tt);return R}var pe=5120,io=5121,zo=5122,ye=5123,Go=5124,fa=5125,l0=5126;function eo(x){for(var S=16;S<=1<<28;S*=16)if(x<=S)return S;return 0}function uo(x){var S,R;return S=(x>65535)<<4,x>>>=S,R=(x>255)<<3,x>>>=R,S|=R,R=(x>15)<<2,x>>>=R,S|=R,R=(x>3)<<1,x>>>=R,S|=R,S|x>>1}function In(){var x=Ye(8,function(){return[]});function S(Z){var nt=eo(Z),yt=x[uo(nt)>>2];return yt.length>0?yt.pop():new ArrayBuffer(nt)}function R(Z){x[uo(Z.byteLength)>>2].push(Z)}function tt(Z,nt){var yt=null;switch(Z){case pe:yt=new Int8Array(S(nt),0,nt);break;case io:yt=new Uint8Array(S(nt),0,nt);break;case zo:yt=new Int16Array(S(2*nt),0,nt);break;case ye:yt=new Uint16Array(S(2*nt),0,nt);break;case Go:yt=new Int32Array(S(4*nt),0,nt);break;case fa:yt=new Uint32Array(S(4*nt),0,nt);break;case l0:yt=new Float32Array(S(4*nt),0,nt);break;default:return null}return yt.length!==nt?yt.subarray(0,nt):yt}function it(Z){R(Z.buffer)}return{alloc:S,free:R,allocType:tt,freeType:it}}var B=In();B.zero=In();var ft=3408,jt=3410,se=3411,le=3412,en=3413,nr=3414,Sr=3415,on=33901,xr=33902,nn=3379,fo=3386,Yn=34921,jo=36347,$n=36348,Dr=35661,Gr=35660,Uo=34930,ha=36349,yn=34076,za=34024,So=7936,rn=7937,ua=7938,ds=35724,Qa=34047,ps=36063,Vl=34852,z0=3553,ci=34067,kc=34069,Yh=33984,f0=6408,Tc=5126,yr=5121,Ac=36160,vs=36053,B5=36064,j5=16384,W5=function(x,S){var R=1;S.ext_texture_filter_anisotropic&&(R=x.getParameter(Qa));var tt=1,it=1;S.webgl_draw_buffers&&(tt=x.getParameter(Vl),it=x.getParameter(ps));var Z=!!S.oes_texture_float;if(Z){var nt=x.createTexture();x.bindTexture(z0,nt),x.texImage2D(z0,0,f0,1,1,0,f0,Tc,null);var yt=x.createFramebuffer();if(x.bindFramebuffer(Ac,yt),x.framebufferTexture2D(Ac,B5,z0,nt,0),x.bindTexture(z0,null),x.checkFramebufferStatus(Ac)!==vs)Z=!1;else{x.viewport(0,0,1,1),x.clearColor(1,0,0,1),x.clear(j5);var _t=B.allocType(Tc,4);x.readPixels(0,0,1,1,f0,Tc,_t),x.getError()?Z=!1:(x.deleteFramebuffer(yt),x.deleteTexture(nt),Z=_t[0]===1),B.freeType(_t)}}var Tt=typeof navigator!="undefined"&&(/MSIE/.test(navigator.userAgent)||/Trident\//.test(navigator.appVersion)||/Edge/.test(navigator.userAgent)),Mt=!0;if(!Tt){var zt=x.createTexture(),Ft=B.allocType(yr,36);x.activeTexture(Yh),x.bindTexture(ci,zt),x.texImage2D(kc,0,f0,3,3,0,f0,yr,Ft),B.freeType(Ft),x.bindTexture(ci,null),x.deleteTexture(zt),Mt=!x.getError()}return{colorBits:[x.getParameter(jt),x.getParameter(se),x.getParameter(le),x.getParameter(en)],depthBits:x.getParameter(nr),stencilBits:x.getParameter(Sr),subpixelBits:x.getParameter(ft),extensions:Object.keys(S).filter(function(bt){return!!S[bt]}),maxAnisotropic:R,maxDrawbuffers:tt,maxColorAttachments:it,pointSizeDims:x.getParameter(on),lineWidthDims:x.getParameter(xr),maxViewportDims:x.getParameter(fo),maxCombinedTextureUnits:x.getParameter(Dr),maxCubeMapSize:x.getParameter(yn),maxRenderbufferSize:x.getParameter(za),maxTextureUnits:x.getParameter(Uo),maxTextureSize:x.getParameter(nn),maxAttributes:x.getParameter(Yn),maxVertexUniforms:x.getParameter(jo),maxVertexTextureUnits:x.getParameter(Gr),maxVaryingVectors:x.getParameter($n),maxFragmentUniforms:x.getParameter(ha),glsl:x.getParameter(ds),renderer:x.getParameter(rn),vendor:x.getParameter(So),version:x.getParameter(ua),readFloat:Z,npotTextureCube:Mt}};function Na(x){return!!x&&typeof x=="object"&&Array.isArray(x.shape)&&Array.isArray(x.stride)&&typeof x.offset=="number"&&x.shape.length===x.stride.length&&(Array.isArray(x.data)||t(x.data))}var Jr=function(x){return Object.keys(x).map(function(S){return x[S]})},Xl={shape:K5,flatten:Y5};function V5(x,S,R){for(var tt=0;tt<S;++tt)R[tt]=x[tt]}function X5(x,S,R,tt){for(var it=0,Z=0;Z<S;++Z)for(var nt=x[Z],yt=0;yt<R;++yt)tt[it++]=nt[yt]}function sp(x,S,R,tt,it,Z){for(var nt=Z,yt=0;yt<S;++yt)for(var _t=x[yt],Tt=0;Tt<R;++Tt)for(var Mt=_t[Tt],zt=0;zt<tt;++zt)it[nt++]=Mt[zt]}function ip(x,S,R,tt,it){for(var Z=1,nt=R+1;nt<S.length;++nt)Z*=S[nt];var yt=S[R];if(S.length-R===4){var _t=S[R+1],Tt=S[R+2],Mt=S[R+3];for(nt=0;nt<yt;++nt)sp(x[nt],_t,Tt,Mt,tt,it),it+=Z}else for(nt=0;nt<yt;++nt)ip(x[nt],S,R+1,tt,it),it+=Z}function Y5(x,S,R,tt){var it=1;if(S.length)for(var Z=0;Z<S.length;++Z)it*=S[Z];else it=0;var nt=tt||B.allocType(R,it);switch(S.length){case 0:break;case 1:V5(x,S[0],nt);break;case 2:X5(x,S[0],S[1],nt);break;case 3:sp(x,S[0],S[1],S[2],nt,0);break;default:ip(x,S,0,nt,0)}return nt}function K5(x){for(var S=[],R=x;R.length;R=R[0])S.push(R.length);return S}var Kh={"[object Int8Array]":5120,"[object Int16Array]":5122,"[object Int32Array]":5124,"[object Uint8Array]":5121,"[object Uint8ClampedArray]":5121,"[object Uint16Array]":5123,"[object Uint32Array]":5125,"[object Float32Array]":5126,"[object Float64Array]":5121,"[object ArrayBuffer]":5121},Q5=5120,Z5=5122,J5=5124,tb=5121,eb=5123,ob=5125,nb=5126,rb=5126,ms={int8:Q5,int16:Z5,int32:J5,uint8:tb,uint16:eb,uint32:ob,float:nb,float32:rb},ab=35048,sb=35040,Yl={dynamic:ab,stream:sb,static:35044},Qh=Xl.flatten,cp=Xl.shape,lp=35044,ib=35040,Zh=5121,Jh=5126,N0=[];N0[5120]=1,N0[5122]=2,N0[5124]=4,N0[5121]=1,N0[5123]=2,N0[5125]=4,N0[5126]=4;function Kl(x){return Kh[Object.prototype.toString.call(x)]|0}function fp(x,S){for(var R=0;R<S.length;++R)x[R]=S[R]}function hp(x,S,R,tt,it,Z,nt){for(var yt=0,_t=0;_t<R;++_t)for(var Tt=0;Tt<tt;++Tt)x[yt++]=S[it*_t+Z*Tt+nt]}function cb(x,S,R,tt){var it=0,Z={};function nt(j){this.id=it++,this.buffer=x.createBuffer(),this.type=j,this.usage=lp,this.byteLength=0,this.dimension=1,this.dtype=Zh,this.persistentData=null,R.profile&&(this.stats={size:0})}nt.prototype.bind=function(){x.bindBuffer(this.type,this.buffer)},nt.prototype.destroy=function(){Ft(this)};var yt=[];function _t(j,rt){var kt=yt.pop();return kt||(kt=new nt(j)),kt.bind(),zt(kt,rt,ib,0,1,!1),kt}function Tt(j){yt.push(j)}function Mt(j,rt,kt){j.byteLength=rt.byteLength,x.bufferData(j.type,rt,kt)}function zt(j,rt,kt,Ut,ut,Xt){var mt;if(j.usage=kt,Array.isArray(rt)){if(j.dtype=Ut||Jh,rt.length>0){var Ot;if(Array.isArray(rt[0])){mt=cp(rt);for(var dt=1,Pt=1;Pt<mt.length;++Pt)dt*=mt[Pt];j.dimension=dt,Ot=Qh(rt,mt,j.dtype),Mt(j,Ot,kt),Xt?j.persistentData=Ot:B.freeType(Ot)}else if(typeof rt[0]=="number"){j.dimension=ut;var ve=B.allocType(j.dtype,rt.length);fp(ve,rt),Mt(j,ve,kt),Xt?j.persistentData=ve:B.freeType(ve)}else t(rt[0])?(j.dimension=rt[0].length,j.dtype=Ut||Kl(rt[0])||Jh,Ot=Qh(rt,[rt.length,rt[0].length],j.dtype),Mt(j,Ot,kt),Xt?j.persistentData=Ot:B.freeType(Ot)):E.raise("invalid buffer data")}}else if(t(rt))j.dtype=Ut||Kl(rt),j.dimension=ut,Mt(j,rt,kt),Xt&&(j.persistentData=new Uint8Array(new Uint8Array(rt.buffer)));else if(Na(rt)){mt=rt.shape;var Oe=rt.stride,qt=rt.offset,At=0,ht=0,Ae=0,He=0;mt.length===1?(At=mt[0],ht=1,Ae=Oe[0],He=0):mt.length===2?(At=mt[0],ht=mt[1],Ae=Oe[0],He=Oe[1]):E.raise("invalid shape"),j.dtype=Ut||Kl(rt.data)||Jh,j.dimension=ht;var ee=B.allocType(j.dtype,At*ht);hp(ee,rt.data,At,ht,Ae,He,qt),Mt(j,ee,kt),Xt?j.persistentData=ee:B.freeType(ee)}else rt instanceof ArrayBuffer?(j.dtype=Zh,j.dimension=ut,Mt(j,rt,kt),Xt&&(j.persistentData=new Uint8Array(new Uint8Array(rt)))):E.raise("invalid buffer data")}function Ft(j){S.bufferCount--,tt(j);var rt=j.buffer;E(rt,"buffer must not be deleted already"),x.deleteBuffer(rt),j.buffer=null,delete Z[j.id]}function bt(j,rt,kt,Ut){S.bufferCount++;var ut=new nt(rt);Z[ut.id]=ut;function Xt(dt){var Pt=lp,ve=null,Oe=0,qt=0,At=1;return Array.isArray(dt)||t(dt)||Na(dt)||dt instanceof ArrayBuffer?ve=dt:typeof dt=="number"?Oe=dt|0:dt&&(E.type(dt,"object","buffer arguments must be an object, a number or an array"),"data"in dt&&(E(ve===null||Array.isArray(ve)||t(ve)||Na(ve),"invalid data for buffer"),ve=dt.data),"usage"in dt&&(E.parameter(dt.usage,Yl,"invalid buffer usage"),Pt=Yl[dt.usage]),"type"in dt&&(E.parameter(dt.type,ms,"invalid buffer type"),qt=ms[dt.type]),"dimension"in dt&&(E.type(dt.dimension,"number","invalid dimension"),At=dt.dimension|0),"length"in dt&&(E.nni(Oe,"buffer length must be a nonnegative integer"),Oe=dt.length|0)),ut.bind(),ve?zt(ut,ve,Pt,qt,At,Ut):(Oe&&x.bufferData(ut.type,Oe,Pt),ut.dtype=qt||Zh,ut.usage=Pt,ut.dimension=At,ut.byteLength=Oe),R.profile&&(ut.stats.size=ut.byteLength*N0[ut.dtype]),Xt}function mt(dt,Pt){E(Pt+dt.byteLength<=ut.byteLength,"invalid buffer subdata call, buffer is too small.  Can't write data of size "+dt.byteLength+" starting from offset "+Pt+" to a buffer of size "+ut.byteLength),x.bufferSubData(ut.type,Pt,dt)}function Ot(dt,Pt){var ve=(Pt||0)|0,Oe;if(ut.bind(),t(dt)||dt instanceof ArrayBuffer)mt(dt,ve);else if(Array.isArray(dt)){if(dt.length>0)if(typeof dt[0]=="number"){var qt=B.allocType(ut.dtype,dt.length);fp(qt,dt),mt(qt,ve),B.freeType(qt)}else if(Array.isArray(dt[0])||t(dt[0])){Oe=cp(dt);var At=Qh(dt,Oe,ut.dtype);mt(At,ve),B.freeType(At)}else E.raise("invalid buffer data")}else if(Na(dt)){Oe=dt.shape;var ht=dt.stride,Ae=0,He=0,ee=0,Ze=0;Oe.length===1?(Ae=Oe[0],He=1,ee=ht[0],Ze=0):Oe.length===2?(Ae=Oe[0],He=Oe[1],ee=ht[0],Ze=ht[1]):E.raise("invalid shape");var Ie=Array.isArray(dt.data)?ut.dtype:Kl(dt.data),We=B.allocType(Ie,Ae*He);hp(We,dt.data,Ae,He,ee,Ze,dt.offset),mt(We,ve),B.freeType(We)}else E.raise("invalid data for buffer subdata");return Xt}return kt||Xt(j),Xt._reglType="buffer",Xt._buffer=ut,Xt.subdata=Ot,R.profile&&(Xt.stats=ut.stats),Xt.destroy=function(){Ft(ut)},Xt}function Rt(){Jr(Z).forEach(function(j){j.buffer=x.createBuffer(),x.bindBuffer(j.type,j.buffer),x.bufferData(j.type,j.persistentData||j.byteLength,j.usage)})}return R.profile&&(S.getTotalBufferSize=function(){var j=0;return Object.keys(Z).forEach(function(rt){j+=Z[rt].stats.size}),j}),{create:bt,createStream:_t,destroyStream:Tt,clear:function(){Jr(Z).forEach(Ft),yt.forEach(Ft)},getBuffer:function(j){return j&&j._buffer instanceof nt?j._buffer:null},restore:Rt,_initBuffer:zt}}var lb=0,fb=0,hb=1,ub=1,db=4,pb=4,li={points:lb,point:fb,lines:hb,line:ub,triangles:db,triangle:pb,"line loop":2,"line strip":3,"triangle strip":5,"triangle fan":6},vb=0,mb=1,Lc=4,gb=5120,fi=5121,up=5122,hi=5123,dp=5124,gs=5125,t1=34963,xb=35040,yb=35044;function bb(x,S,R,tt){var it={},Z=0,nt={uint8:fi,uint16:hi};S.oes_element_index_uint&&(nt.uint32=gs);function yt(Rt){this.id=Z++,it[this.id]=this,this.buffer=Rt,this.primType=Lc,this.vertCount=0,this.type=0}yt.prototype.bind=function(){this.buffer.bind()};var _t=[];function Tt(Rt){var j=_t.pop();return j||(j=new yt(R.create(null,t1,!0,!1)._buffer)),zt(j,Rt,xb,-1,-1,0,0),j}function Mt(Rt){_t.push(Rt)}function zt(Rt,j,rt,kt,Ut,ut,Xt){Rt.buffer.bind();var mt;if(j){var Ot=Xt;!Xt&&(!t(j)||Na(j)&&!t(j.data))&&(Ot=S.oes_element_index_uint?gs:hi),R._initBuffer(Rt.buffer,j,rt,Ot,3)}else x.bufferData(t1,ut,rt),Rt.buffer.dtype=mt||fi,Rt.buffer.usage=rt,Rt.buffer.dimension=3,Rt.buffer.byteLength=ut;if(mt=Xt,!Xt){switch(Rt.buffer.dtype){case fi:case gb:mt=fi;break;case hi:case up:mt=hi;break;case gs:case dp:mt=gs;break;default:E.raise("unsupported type for element array")}Rt.buffer.dtype=mt}Rt.type=mt,E(mt!==gs||!!S.oes_element_index_uint,"32 bit element buffers not supported, enable oes_element_index_uint first");var dt=Ut;dt<0&&(dt=Rt.buffer.byteLength,mt===hi?dt>>=1:mt===gs&&(dt>>=2)),Rt.vertCount=dt;var Pt=kt;if(kt<0){Pt=Lc;var ve=Rt.buffer.dimension;ve===1&&(Pt=vb),ve===2&&(Pt=mb),ve===3&&(Pt=Lc)}Rt.primType=Pt}function Ft(Rt){tt.elementsCount--,E(Rt.buffer!==null,"must not double destroy elements"),delete it[Rt.id],Rt.buffer.destroy(),Rt.buffer=null}function bt(Rt,j){var rt=R.create(null,t1,!0),kt=new yt(rt._buffer);tt.elementsCount++;function Ut(ut){if(!ut)rt(),kt.primType=Lc,kt.vertCount=0,kt.type=fi;else if(typeof ut=="number")rt(ut),kt.primType=Lc,kt.vertCount=ut|0,kt.type=fi;else{var Xt=null,mt=yb,Ot=-1,dt=-1,Pt=0,ve=0;Array.isArray(ut)||t(ut)||Na(ut)?Xt=ut:(E.type(ut,"object","invalid arguments for elements"),"data"in ut&&(Xt=ut.data,E(Array.isArray(Xt)||t(Xt)||Na(Xt),"invalid data for element buffer")),"usage"in ut&&(E.parameter(ut.usage,Yl,"invalid element buffer usage"),mt=Yl[ut.usage]),"primitive"in ut&&(E.parameter(ut.primitive,li,"invalid element buffer primitive"),Ot=li[ut.primitive]),"count"in ut&&(E(typeof ut.count=="number"&&ut.count>=0,"invalid vertex count for elements"),dt=ut.count|0),"type"in ut&&(E.parameter(ut.type,nt,"invalid buffer type"),ve=nt[ut.type]),"length"in ut?Pt=ut.length|0:(Pt=dt,ve===hi||ve===up?Pt*=2:(ve===gs||ve===dp)&&(Pt*=4))),zt(kt,Xt,mt,Ot,dt,Pt,ve)}return Ut}return Ut(Rt),Ut._reglType="elements",Ut._elements=kt,Ut.subdata=function(ut,Xt){return rt.subdata(ut,Xt),Ut},Ut.destroy=function(){Ft(kt)},Ut}return{create:bt,createStream:Tt,destroyStream:Mt,getElements:function(Rt){return typeof Rt=="function"&&Rt._elements instanceof yt?Rt._elements:null},clear:function(){Jr(it).forEach(Ft)}}}var pp=new Float32Array(1),wb=new Uint32Array(pp.buffer),_b=5123;function vp(x){for(var S=B.allocType(_b,x.length),R=0;R<x.length;++R)if(isNaN(x[R]))S[R]=65535;else if(x[R]===1/0)S[R]=31744;else if(x[R]===-1/0)S[R]=64512;else{pp[0]=x[R];var tt=wb[0],it=tt>>>31<<15,Z=(tt<<1>>>24)-127,nt=tt>>13&1023;if(Z<-24)S[R]=it;else if(Z<-14){var yt=-14-Z;S[R]=it+(nt+1024>>yt)}else Z>15?S[R]=it+31744:S[R]=it+(Z+15<<10)+nt}return S}function dn(x){return Array.isArray(x)||t(x)}var mp=function(x){return!(x&x-1)&&!!x},Mb=34467,Za=3553,e1=34067,Ql=34069,xs=6408,o1=6406,Zl=6407,zc=6409,Jl=6410,gp=32854,n1=32855,xp=36194,Eb=32819,Sb=32820,kb=33635,Tb=34042,r1=6402,tf=34041,a1=35904,s1=35906,ui=36193,i1=33776,c1=33777,l1=33778,f1=33779,yp=35986,bp=35987,wp=34798,_p=35840,Mp=35841,Ep=35842,Sp=35843,kp=36196,di=5121,h1=5123,u1=5125,Nc=5126,Ab=10242,Lb=10243,zb=10497,d1=33071,Nb=33648,Rb=10240,Cb=10241,p1=9728,Ob=9729,v1=9984,Tp=9985,Ap=9986,m1=9987,Pb=33170,ef=4352,Ib=4353,$b=4354,Fb=34046,qb=3317,Db=37440,Gb=37441,Hb=37443,Lp=37444,Rc=33984,Ub=[v1,Ap,Tp,m1],of=[0,zc,Jl,Zl,xs],da={};da[zc]=da[o1]=da[r1]=1,da[tf]=da[Jl]=2,da[Zl]=da[a1]=3,da[xs]=da[s1]=4;function pi(x){return"[object "+x+"]"}var zp=pi("HTMLCanvasElement"),Np=pi("OffscreenCanvas"),Rp=pi("CanvasRenderingContext2D"),Cp=pi("ImageBitmap"),Op=pi("HTMLImageElement"),Pp=pi("HTMLVideoElement"),Bb=Object.keys(Kh).concat([zp,Np,Rp,Cp,Op,Pp]),vi=[];vi[di]=1,vi[Nc]=4,vi[ui]=2,vi[h1]=2,vi[u1]=4;var rr=[];rr[gp]=2,rr[n1]=2,rr[xp]=2,rr[tf]=4,rr[i1]=.5,rr[c1]=.5,rr[l1]=1,rr[f1]=1,rr[yp]=.5,rr[bp]=1,rr[wp]=1,rr[_p]=.5,rr[Mp]=.25,rr[Ep]=.5,rr[Sp]=.25,rr[kp]=.5;function Ip(x){return Array.isArray(x)&&(x.length===0||typeof x[0]=="number")}function $p(x){if(!Array.isArray(x))return!1;var S=x.length;return!(S===0||!dn(x[0]))}function ys(x){return Object.prototype.toString.call(x)}function Fp(x){return ys(x)===zp}function qp(x){return ys(x)===Np}function jb(x){return ys(x)===Rp}function Wb(x){return ys(x)===Cp}function Vb(x){return ys(x)===Op}function Xb(x){return ys(x)===Pp}function g1(x){if(!x)return!1;var S=ys(x);return Bb.indexOf(S)>=0?!0:Ip(x)||$p(x)||Na(x)}function Dp(x){return Kh[Object.prototype.toString.call(x)]|0}function Yb(x,S){var R=S.length;switch(x.type){case di:case h1:case u1:case Nc:var tt=B.allocType(x.type,R);tt.set(S),x.data=tt;break;case ui:x.data=vp(S);break;default:E.raise("unsupported texture type, must specify a typed array")}}function Gp(x,S){return B.allocType(x.type===ui?Nc:x.type,S)}function Hp(x,S){x.type===ui?(x.data=vp(S),B.freeType(S)):x.data=S}function Kb(x,S,R,tt,it,Z){for(var nt=x.width,yt=x.height,_t=x.channels,Tt=nt*yt*_t,Mt=Gp(x,Tt),zt=0,Ft=0;Ft<yt;++Ft)for(var bt=0;bt<nt;++bt)for(var Rt=0;Rt<_t;++Rt)Mt[zt++]=S[R*bt+tt*Ft+it*Rt+Z];Hp(x,Mt)}function nf(x,S,R,tt,it,Z){var nt;if(typeof rr[x]!="undefined"?nt=rr[x]:nt=da[x]*vi[S],Z&&(nt*=6),it){for(var yt=0,_t=R;_t>=1;)yt+=nt*_t*_t,_t/=2;return yt}else return nt*R*tt}function Qb(x,S,R,tt,it,Z,nt){var yt={"don't care":ef,"dont care":ef,nice:$b,fast:Ib},_t={repeat:zb,clamp:d1,mirror:Nb},Tt={nearest:p1,linear:Ob},Mt=e({mipmap:m1,"nearest mipmap nearest":v1,"linear mipmap nearest":Tp,"nearest mipmap linear":Ap,"linear mipmap linear":m1},Tt),zt={none:0,browser:Lp},Ft={uint8:di,rgba4:Eb,rgb565:kb,"rgb5 a1":Sb},bt={alpha:o1,luminance:zc,"luminance alpha":Jl,rgb:Zl,rgba:xs,rgba4:gp,"rgb5 a1":n1,rgb565:xp},Rt={};S.ext_srgb&&(bt.srgb=a1,bt.srgba=s1),S.oes_texture_float&&(Ft.float32=Ft.float=Nc),S.oes_texture_half_float&&(Ft.float16=Ft["half float"]=ui),S.webgl_depth_texture&&(e(bt,{depth:r1,"depth stencil":tf}),e(Ft,{uint16:h1,uint32:u1,"depth stencil":Tb})),S.webgl_compressed_texture_s3tc&&e(Rt,{"rgb s3tc dxt1":i1,"rgba s3tc dxt1":c1,"rgba s3tc dxt3":l1,"rgba s3tc dxt5":f1}),S.webgl_compressed_texture_atc&&e(Rt,{"rgb atc":yp,"rgba atc explicit alpha":bp,"rgba atc interpolated alpha":wp}),S.webgl_compressed_texture_pvrtc&&e(Rt,{"rgb pvrtc 4bppv1":_p,"rgb pvrtc 2bppv1":Mp,"rgba pvrtc 4bppv1":Ep,"rgba pvrtc 2bppv1":Sp}),S.webgl_compressed_texture_etc1&&(Rt["rgb etc1"]=kp);var j=Array.prototype.slice.call(x.getParameter(Mb));Object.keys(Rt).forEach(function(z){var et=Rt[z];j.indexOf(et)>=0&&(bt[z]=et)});var rt=Object.keys(bt);R.textureFormats=rt;var kt=[];Object.keys(bt).forEach(function(z){var et=bt[z];kt[et]=z});var Ut=[];Object.keys(Ft).forEach(function(z){var et=Ft[z];Ut[et]=z});var ut=[];Object.keys(Tt).forEach(function(z){var et=Tt[z];ut[et]=z});var Xt=[];Object.keys(Mt).forEach(function(z){var et=Mt[z];Xt[et]=z});var mt=[];Object.keys(_t).forEach(function(z){var et=_t[z];mt[et]=z});var Ot=rt.reduce(function(z,et){var Y=bt[et];return Y===zc||Y===o1||Y===zc||Y===Jl||Y===r1||Y===tf||S.ext_srgb&&(Y===a1||Y===s1)?z[Y]=Y:Y===n1||et.indexOf("rgba")>=0?z[Y]=xs:z[Y]=Zl,z},{});function dt(){this.internalformat=xs,this.format=xs,this.type=di,this.compressed=!1,this.premultiplyAlpha=!1,this.flipY=!1,this.unpackAlignment=1,this.colorSpace=Lp,this.width=0,this.height=0,this.channels=0}function Pt(z,et){z.internalformat=et.internalformat,z.format=et.format,z.type=et.type,z.compressed=et.compressed,z.premultiplyAlpha=et.premultiplyAlpha,z.flipY=et.flipY,z.unpackAlignment=et.unpackAlignment,z.colorSpace=et.colorSpace,z.width=et.width,z.height=et.height,z.channels=et.channels}function ve(z,et){if(!(typeof et!="object"||!et)){if("premultiplyAlpha"in et&&(E.type(et.premultiplyAlpha,"boolean","invalid premultiplyAlpha"),z.premultiplyAlpha=et.premultiplyAlpha),"flipY"in et&&(E.type(et.flipY,"boolean","invalid texture flip"),z.flipY=et.flipY),"alignment"in et&&(E.oneOf(et.alignment,[1,2,4,8],"invalid texture unpack alignment"),z.unpackAlignment=et.alignment),"colorSpace"in et&&(E.parameter(et.colorSpace,zt,"invalid colorSpace"),z.colorSpace=zt[et.colorSpace]),"type"in et){var Y=et.type;E(S.oes_texture_float||!(Y==="float"||Y==="float32"),"you must enable the OES_texture_float extension in order to use floating point textures."),E(S.oes_texture_half_float||!(Y==="half float"||Y==="float16"),"you must enable the OES_texture_half_float extension in order to use 16-bit floating point textures."),E(S.webgl_depth_texture||!(Y==="uint16"||Y==="uint32"||Y==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),E.parameter(Y,Ft,"invalid texture type"),z.type=Ft[Y]}var Qt=z.width,Je=z.height,A=z.channels,M=!1;"shape"in et?(E(Array.isArray(et.shape)&&et.shape.length>=2,"shape must be an array"),Qt=et.shape[0],Je=et.shape[1],et.shape.length===3&&(A=et.shape[2],E(A>0&&A<=4,"invalid number of channels"),M=!0),E(Qt>=0&&Qt<=R.maxTextureSize,"invalid width"),E(Je>=0&&Je<=R.maxTextureSize,"invalid height")):("radius"in et&&(Qt=Je=et.radius,E(Qt>=0&&Qt<=R.maxTextureSize,"invalid radius")),"width"in et&&(Qt=et.width,E(Qt>=0&&Qt<=R.maxTextureSize,"invalid width")),"height"in et&&(Je=et.height,E(Je>=0&&Je<=R.maxTextureSize,"invalid height")),"channels"in et&&(A=et.channels,E(A>0&&A<=4,"invalid number of channels"),M=!0)),z.width=Qt|0,z.height=Je|0,z.channels=A|0;var P=!1;if("format"in et){var U=et.format;E(S.webgl_depth_texture||!(U==="depth"||U==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),E.parameter(U,bt,"invalid texture format");var W=z.internalformat=bt[U];z.format=Ot[W],U in Ft&&("type"in et||(z.type=Ft[U])),U in Rt&&(z.compressed=!0),P=!0}!M&&P?z.channels=da[z.format]:M&&!P?z.channels!==of[z.format]&&(z.format=z.internalformat=of[z.channels]):P&&M&&E(z.channels===da[z.format],"number of channels inconsistent with specified format")}}function Oe(z){x.pixelStorei(Db,z.flipY),x.pixelStorei(Gb,z.premultiplyAlpha),x.pixelStorei(Hb,z.colorSpace),x.pixelStorei(qb,z.unpackAlignment)}function qt(){dt.call(this),this.xOffset=0,this.yOffset=0,this.data=null,this.needsFree=!1,this.element=null,this.needsCopy=!1}function At(z,et){var Y=null;if(g1(et)?Y=et:et&&(E.type(et,"object","invalid pixel data type"),ve(z,et),"x"in et&&(z.xOffset=et.x|0),"y"in et&&(z.yOffset=et.y|0),g1(et.data)&&(Y=et.data)),E(!z.compressed||Y instanceof Uint8Array,"compressed texture data must be stored in a uint8array"),et.copy){E(!Y,"can not specify copy and data field for the same texture");var Qt=it.viewportWidth,Je=it.viewportHeight;z.width=z.width||Qt-z.xOffset,z.height=z.height||Je-z.yOffset,z.needsCopy=!0,E(z.xOffset>=0&&z.xOffset<Qt&&z.yOffset>=0&&z.yOffset<Je&&z.width>0&&z.width<=Qt&&z.height>0&&z.height<=Je,"copy texture read out of bounds")}else if(!Y)z.width=z.width||1,z.height=z.height||1,z.channels=z.channels||4;else if(t(Y))z.channels=z.channels||4,z.data=Y,!("type"in et)&&z.type===di&&(z.type=Dp(Y));else if(Ip(Y))z.channels=z.channels||4,Yb(z,Y),z.alignment=1,z.needsFree=!0;else if(Na(Y)){var A=Y.data;!Array.isArray(A)&&z.type===di&&(z.type=Dp(A));var M=Y.shape,P=Y.stride,U,W,$,I,F,L;M.length===3?($=M[2],L=P[2]):(E(M.length===2,"invalid ndarray pixel data, must be 2 or 3D"),$=1,L=1),U=M[0],W=M[1],I=P[0],F=P[1],z.alignment=1,z.width=U,z.height=W,z.channels=$,z.format=z.internalformat=of[$],z.needsFree=!0,Kb(z,A,I,F,L,Y.offset)}else if(Fp(Y)||qp(Y)||jb(Y))Fp(Y)||qp(Y)?z.element=Y:z.element=Y.canvas,z.width=z.element.width,z.height=z.element.height,z.channels=4;else if(Wb(Y))z.element=Y,z.width=Y.width,z.height=Y.height,z.channels=4;else if(Vb(Y))z.element=Y,z.width=Y.naturalWidth,z.height=Y.naturalHeight,z.channels=4;else if(Xb(Y))z.element=Y,z.width=Y.videoWidth,z.height=Y.videoHeight,z.channels=4;else if($p(Y)){var O=z.width||Y[0].length,T=z.height||Y.length,H=z.channels;dn(Y[0][0])?H=H||Y[0][0].length:H=H||1;for(var V=Xl.shape(Y),st=1,ct=0;ct<V.length;++ct)st*=V[ct];var at=Gp(z,st);Xl.flatten(Y,V,"",at),Hp(z,at),z.alignment=1,z.width=O,z.height=T,z.channels=H,z.format=z.internalformat=of[H],z.needsFree=!0}z.type===Nc?E(R.extensions.indexOf("oes_texture_float")>=0,"oes_texture_float extension not enabled"):z.type===ui&&E(R.extensions.indexOf("oes_texture_half_float")>=0,"oes_texture_half_float extension not enabled")}function ht(z,et,Y){var Qt=z.element,Je=z.data,A=z.internalformat,M=z.format,P=z.type,U=z.width,W=z.height;Oe(z),Qt?x.texImage2D(et,Y,M,M,P,Qt):z.compressed?x.compressedTexImage2D(et,Y,A,U,W,0,Je):z.needsCopy?(tt(),x.copyTexImage2D(et,Y,M,z.xOffset,z.yOffset,U,W,0)):x.texImage2D(et,Y,M,U,W,0,M,P,Je||null)}function Ae(z,et,Y,Qt,Je){var A=z.element,M=z.data,P=z.internalformat,U=z.format,W=z.type,$=z.width,I=z.height;Oe(z),A?x.texSubImage2D(et,Je,Y,Qt,U,W,A):z.compressed?x.compressedTexSubImage2D(et,Je,Y,Qt,P,$,I,M):z.needsCopy?(tt(),x.copyTexSubImage2D(et,Je,Y,Qt,z.xOffset,z.yOffset,$,I)):x.texSubImage2D(et,Je,Y,Qt,$,I,U,W,M)}var He=[];function ee(){return He.pop()||new qt}function Ze(z){z.needsFree&&B.freeType(z.data),qt.call(z),He.push(z)}function Ie(){dt.call(this),this.genMipmaps=!1,this.mipmapHint=ef,this.mipmask=0,this.images=Array(16)}function We(z,et,Y){var Qt=z.images[0]=ee();z.mipmask=1,Qt.width=z.width=et,Qt.height=z.height=Y,Qt.channels=z.channels=4}function go(z,et){var Y=null;if(g1(et))Y=z.images[0]=ee(),Pt(Y,z),At(Y,et),z.mipmask=1;else if(ve(z,et),Array.isArray(et.mipmap))for(var Qt=et.mipmap,Je=0;Je<Qt.length;++Je)Y=z.images[Je]=ee(),Pt(Y,z),Y.width>>=Je,Y.height>>=Je,At(Y,Qt[Je]),z.mipmask|=1<<Je;else Y=z.images[0]=ee(),Pt(Y,z),At(Y,et),z.mipmask=1;Pt(z,z.images[0]),z.compressed&&(z.internalformat===i1||z.internalformat===c1||z.internalformat===l1||z.internalformat===f1)&&E(z.width%4===0&&z.height%4===0,"for compressed texture formats, mipmap level 0 must have width and height that are a multiple of 4")}function wn(z,et){for(var Y=z.images,Qt=0;Qt<Y.length;++Qt){if(!Y[Qt])return;ht(Y[Qt],et,Qt)}}var Fn=[];function ro(){var z=Fn.pop()||new Ie;dt.call(z),z.mipmask=0;for(var et=0;et<16;++et)z.images[et]=null;return z}function Ln(z){for(var et=z.images,Y=0;Y<et.length;++Y)et[Y]&&Ze(et[Y]),et[Y]=null;Fn.push(z)}function Wo(){this.minFilter=p1,this.magFilter=p1,this.wrapS=d1,this.wrapT=d1,this.anisotropic=1,this.genMipmaps=!1,this.mipmapHint=ef}function _n(z,et){if("min"in et){var Y=et.min;E.parameter(Y,Mt),z.minFilter=Mt[Y],Ub.indexOf(z.minFilter)>=0&&!("faces"in et)&&(z.genMipmaps=!0)}if("mag"in et){var Qt=et.mag;E.parameter(Qt,Tt),z.magFilter=Tt[Qt]}var Je=z.wrapS,A=z.wrapT;if("wrap"in et){var M=et.wrap;typeof M=="string"?(E.parameter(M,_t),Je=A=_t[M]):Array.isArray(M)&&(E.parameter(M[0],_t),E.parameter(M[1],_t),Je=_t[M[0]],A=_t[M[1]])}else{if("wrapS"in et){var P=et.wrapS;E.parameter(P,_t),Je=_t[P]}if("wrapT"in et){var U=et.wrapT;E.parameter(U,_t),A=_t[U]}}if(z.wrapS=Je,z.wrapT=A,"anisotropic"in et){var W=et.anisotropic;E(typeof W=="number"&&W>=1&&W<=R.maxAnisotropic,"aniso samples must be between 1 and "),z.anisotropic=et.anisotropic}if("mipmap"in et){var $=!1;switch(typeof et.mipmap){case"string":E.parameter(et.mipmap,yt,"invalid mipmap hint"),z.mipmapHint=yt[et.mipmap],z.genMipmaps=!0,$=!0;break;case"boolean":$=z.genMipmaps=et.mipmap;break;case"object":E(Array.isArray(et.mipmap),"invalid mipmap type"),z.genMipmaps=!1,$=!0;break;default:E.raise("invalid mipmap type")}$&&!("min"in et)&&(z.minFilter=v1)}}function zn(z,et){x.texParameteri(et,Cb,z.minFilter),x.texParameteri(et,Rb,z.magFilter),x.texParameteri(et,Ab,z.wrapS),x.texParameteri(et,Lb,z.wrapT),S.ext_texture_filter_anisotropic&&x.texParameteri(et,Fb,z.anisotropic),z.genMipmaps&&(x.hint(Pb,z.mipmapHint),x.generateMipmap(et))}var Nn=0,Kn={},ar=R.maxTextureUnits,pn=Array(ar).map(function(){return null});function Ue(z){dt.call(this),this.mipmask=0,this.internalformat=xs,this.id=Nn++,this.refCount=1,this.target=z,this.texture=x.createTexture(),this.unit=-1,this.bindCount=0,this.texInfo=new Wo,nt.profile&&(this.stats={size:0})}function sr(z){x.activeTexture(Rc),x.bindTexture(z.target,z.texture)}function ko(){var z=pn[0];z?x.bindTexture(z.target,z.texture):x.bindTexture(Za,null)}function be(z){var et=z.texture;E(et,"must not double destroy texture");var Y=z.unit,Qt=z.target;Y>=0&&(x.activeTexture(Rc+Y),x.bindTexture(Qt,null),pn[Y]=null),x.deleteTexture(et),z.texture=null,z.params=null,z.pixels=null,z.refCount=0,delete Kn[z.id],Z.textureCount--}e(Ue.prototype,{bind:function(){var z=this;z.bindCount+=1;var et=z.unit;if(et<0){for(var Y=0;Y<ar;++Y){var Qt=pn[Y];if(Qt){if(Qt.bindCount>0)continue;Qt.unit=-1}pn[Y]=z,et=Y;break}et>=ar&&E.raise("insufficient number of texture units"),nt.profile&&Z.maxTextureUnits<et+1&&(Z.maxTextureUnits=et+1),z.unit=et,x.activeTexture(Rc+et),x.bindTexture(z.target,z.texture)}return et},unbind:function(){this.bindCount-=1},decRef:function(){--this.refCount<=0&&be(this)}});function oo(z,et){var Y=new Ue(Za);Kn[Y.id]=Y,Z.textureCount++;function Qt(M,P){var U=Y.texInfo;Wo.call(U);var W=ro();return typeof M=="number"?typeof P=="number"?We(W,M|0,P|0):We(W,M|0,M|0):M?(E.type(M,"object","invalid arguments to regl.texture"),_n(U,M),go(W,M)):We(W,1,1),U.genMipmaps&&(W.mipmask=(W.width<<1)-1),Y.mipmask=W.mipmask,Pt(Y,W),E.texture2D(U,W,R),Y.internalformat=W.internalformat,Qt.width=W.width,Qt.height=W.height,sr(Y),wn(W,Za),zn(U,Za),ko(),Ln(W),nt.profile&&(Y.stats.size=nf(Y.internalformat,Y.type,W.width,W.height,U.genMipmaps,!1)),Qt.format=kt[Y.internalformat],Qt.type=Ut[Y.type],Qt.mag=ut[U.magFilter],Qt.min=Xt[U.minFilter],Qt.wrapS=mt[U.wrapS],Qt.wrapT=mt[U.wrapT],Qt}function Je(M,P,U,W){E(!!M,"must specify image data");var $=P|0,I=U|0,F=W|0,L=ee();return Pt(L,Y),L.width=0,L.height=0,At(L,M),L.width=L.width||(Y.width>>F)-$,L.height=L.height||(Y.height>>F)-I,E(Y.type===L.type&&Y.format===L.format&&Y.internalformat===L.internalformat,"incompatible format for texture.subimage"),E($>=0&&I>=0&&$+L.width<=Y.width&&I+L.height<=Y.height,"texture.subimage write out of bounds"),E(Y.mipmask&1<<F,"missing mipmap data"),E(L.data||L.element||L.needsCopy,"missing image data"),sr(Y),Ae(L,Za,$,I,F),ko(),Ze(L),Qt}function A(M,P){var U=M|0,W=P|0||U;if(U===Y.width&&W===Y.height)return Qt;Qt.width=Y.width=U,Qt.height=Y.height=W,sr(Y);for(var $=0;Y.mipmask>>$;++$){var I=U>>$,F=W>>$;if(!I||!F)break;x.texImage2D(Za,$,Y.format,I,F,0,Y.format,Y.type,null)}return ko(),nt.profile&&(Y.stats.size=nf(Y.internalformat,Y.type,U,W,!1,!1)),Qt}return Qt(z,et),Qt.subimage=Je,Qt.resize=A,Qt._reglType="texture2d",Qt._texture=Y,nt.profile&&(Qt.stats=Y.stats),Qt.destroy=function(){Y.decRef()},Qt}function ho(z,et,Y,Qt,Je,A){var M=new Ue(e1);Kn[M.id]=M,Z.cubeCount++;var P=new Array(6);function U(I,F,L,O,T,H){var V,st=M.texInfo;for(Wo.call(st),V=0;V<6;++V)P[V]=ro();if(typeof I=="number"||!I){var ct=I|0||1;for(V=0;V<6;++V)We(P[V],ct,ct)}else if(typeof I=="object")if(F)go(P[0],I),go(P[1],F),go(P[2],L),go(P[3],O),go(P[4],T),go(P[5],H);else if(_n(st,I),ve(M,I),"faces"in I){var at=I.faces;for(E(Array.isArray(at)&&at.length===6,"cube faces must be a length 6 array"),V=0;V<6;++V)E(typeof at[V]=="object"&&!!at[V],"invalid input for cube map face"),Pt(P[V],M),go(P[V],at[V])}else for(V=0;V<6;++V)go(P[V],I);else E.raise("invalid arguments to cube map");for(Pt(M,P[0]),R.npotTextureCube||E(mp(M.width)&&mp(M.height),"your browser does not support non power or two texture dimensions"),st.genMipmaps?M.mipmask=(P[0].width<<1)-1:M.mipmask=P[0].mipmask,E.textureCube(M,st,P,R),M.internalformat=P[0].internalformat,U.width=P[0].width,U.height=P[0].height,sr(M),V=0;V<6;++V)wn(P[V],Ql+V);for(zn(st,e1),ko(),nt.profile&&(M.stats.size=nf(M.internalformat,M.type,U.width,U.height,st.genMipmaps,!0)),U.format=kt[M.internalformat],U.type=Ut[M.type],U.mag=ut[st.magFilter],U.min=Xt[st.minFilter],U.wrapS=mt[st.wrapS],U.wrapT=mt[st.wrapT],V=0;V<6;++V)Ln(P[V]);return U}function W(I,F,L,O,T){E(!!F,"must specify image data"),E(typeof I=="number"&&I===(I|0)&&I>=0&&I<6,"invalid face");var H=L|0,V=O|0,st=T|0,ct=ee();return Pt(ct,M),ct.width=0,ct.height=0,At(ct,F),ct.width=ct.width||(M.width>>st)-H,ct.height=ct.height||(M.height>>st)-V,E(M.type===ct.type&&M.format===ct.format&&M.internalformat===ct.internalformat,"incompatible format for texture.subimage"),E(H>=0&&V>=0&&H+ct.width<=M.width&&V+ct.height<=M.height,"texture.subimage write out of bounds"),E(M.mipmask&1<<st,"missing mipmap data"),E(ct.data||ct.element||ct.needsCopy,"missing image data"),sr(M),Ae(ct,Ql+I,H,V,st),ko(),Ze(ct),U}function $(I){var F=I|0;if(F!==M.width){U.width=M.width=F,U.height=M.height=F,sr(M);for(var L=0;L<6;++L)for(var O=0;M.mipmask>>O;++O)x.texImage2D(Ql+L,O,M.format,F>>O,F>>O,0,M.format,M.type,null);return ko(),nt.profile&&(M.stats.size=nf(M.internalformat,M.type,U.width,U.height,!1,!0)),U}}return U(z,et,Y,Qt,Je,A),U.subimage=W,U.resize=$,U._reglType="textureCube",U._texture=M,nt.profile&&(U.stats=M.stats),U.destroy=function(){M.decRef()},U}function vn(){for(var z=0;z<ar;++z)x.activeTexture(Rc+z),x.bindTexture(Za,null),pn[z]=null;Jr(Kn).forEach(be),Z.cubeCount=0,Z.textureCount=0}nt.profile&&(Z.getTotalTextureSize=function(){var z=0;return Object.keys(Kn).forEach(function(et){z+=Kn[et].stats.size}),z});function t0(){for(var z=0;z<ar;++z){var et=pn[z];et&&(et.bindCount=0,et.unit=-1,pn[z]=null)}Jr(Kn).forEach(function(Y){Y.texture=x.createTexture(),x.bindTexture(Y.target,Y.texture);for(var Qt=0;Qt<32;++Qt)if(Y.mipmask&1<<Qt)if(Y.target===Za)x.texImage2D(Za,Qt,Y.internalformat,Y.width>>Qt,Y.height>>Qt,0,Y.internalformat,Y.type,null);else for(var Je=0;Je<6;++Je)x.texImage2D(Ql+Je,Qt,Y.internalformat,Y.width>>Qt,Y.height>>Qt,0,Y.internalformat,Y.type,null);zn(Y.texInfo,Y.target)})}function ks(){for(var z=0;z<ar;++z){var et=pn[z];et&&(et.bindCount=0,et.unit=-1,pn[z]=null),x.activeTexture(Rc+z),x.bindTexture(Za,null),x.bindTexture(e1,null)}}return{create2D:oo,createCube:ho,clear:vn,getTexture:function(z){return null},restore:t0,refresh:ks}}var R0=36161,rf=32854,Up=32855,Bp=36194,jp=33189,Wp=36168,Vp=34041,Xp=35907,Yp=34836,Kp=34842,Qp=34843,Ra=[];Ra[rf]=2,Ra[Up]=2,Ra[Bp]=2,Ra[jp]=2,Ra[Wp]=1,Ra[Vp]=4,Ra[Xp]=4,Ra[Yp]=16,Ra[Kp]=8,Ra[Qp]=6;function Zp(x,S,R){return Ra[x]*S*R}var Zb=function(x,S,R,tt,it){var Z={rgba4:rf,rgb565:Bp,"rgb5 a1":Up,depth:jp,stencil:Wp,"depth stencil":Vp};S.ext_srgb&&(Z.srgba=Xp),S.ext_color_buffer_half_float&&(Z.rgba16f=Kp,Z.rgb16f=Qp),S.webgl_color_buffer_float&&(Z.rgba32f=Yp);var nt=[];Object.keys(Z).forEach(function(bt){var Rt=Z[bt];nt[Rt]=bt});var yt=0,_t={};function Tt(bt){this.id=yt++,this.refCount=1,this.renderbuffer=bt,this.format=rf,this.width=0,this.height=0,it.profile&&(this.stats={size:0})}Tt.prototype.decRef=function(){--this.refCount<=0&&Mt(this)};function Mt(bt){var Rt=bt.renderbuffer;E(Rt,"must not double destroy renderbuffer"),x.bindRenderbuffer(R0,null),x.deleteRenderbuffer(Rt),bt.renderbuffer=null,bt.refCount=0,delete _t[bt.id],tt.renderbufferCount--}function zt(bt,Rt){var j=new Tt(x.createRenderbuffer());_t[j.id]=j,tt.renderbufferCount++;function rt(Ut,ut){var Xt=0,mt=0,Ot=rf;if(typeof Ut=="object"&&Ut){var dt=Ut;if("shape"in dt){var Pt=dt.shape;E(Array.isArray(Pt)&&Pt.length>=2,"invalid renderbuffer shape"),Xt=Pt[0]|0,mt=Pt[1]|0}else"radius"in dt&&(Xt=mt=dt.radius|0),"width"in dt&&(Xt=dt.width|0),"height"in dt&&(mt=dt.height|0);"format"in dt&&(E.parameter(dt.format,Z,"invalid renderbuffer format"),Ot=Z[dt.format])}else typeof Ut=="number"?(Xt=Ut|0,typeof ut=="number"?mt=ut|0:mt=Xt):Ut?E.raise("invalid arguments to renderbuffer constructor"):Xt=mt=1;if(E(Xt>0&&mt>0&&Xt<=R.maxRenderbufferSize&&mt<=R.maxRenderbufferSize,"invalid renderbuffer size"),!(Xt===j.width&&mt===j.height&&Ot===j.format))return rt.width=j.width=Xt,rt.height=j.height=mt,j.format=Ot,x.bindRenderbuffer(R0,j.renderbuffer),x.renderbufferStorage(R0,Ot,Xt,mt),E(x.getError()===0,"invalid render buffer format"),it.profile&&(j.stats.size=Zp(j.format,j.width,j.height)),rt.format=nt[j.format],rt}function kt(Ut,ut){var Xt=Ut|0,mt=ut|0||Xt;return Xt===j.width&&mt===j.height||(E(Xt>0&&mt>0&&Xt<=R.maxRenderbufferSize&&mt<=R.maxRenderbufferSize,"invalid renderbuffer size"),rt.width=j.width=Xt,rt.height=j.height=mt,x.bindRenderbuffer(R0,j.renderbuffer),x.renderbufferStorage(R0,j.format,Xt,mt),E(x.getError()===0,"invalid render buffer format"),it.profile&&(j.stats.size=Zp(j.format,j.width,j.height))),rt}return rt(bt,Rt),rt.resize=kt,rt._reglType="renderbuffer",rt._renderbuffer=j,it.profile&&(rt.stats=j.stats),rt.destroy=function(){j.decRef()},rt}it.profile&&(tt.getTotalRenderbufferSize=function(){var bt=0;return Object.keys(_t).forEach(function(Rt){bt+=_t[Rt].stats.size}),bt});function Ft(){Jr(_t).forEach(function(bt){bt.renderbuffer=x.createRenderbuffer(),x.bindRenderbuffer(R0,bt.renderbuffer),x.renderbufferStorage(R0,bt.format,bt.width,bt.height)}),x.bindRenderbuffer(R0,null)}return{create:zt,clear:function(){Jr(_t).forEach(Mt)},restore:Ft}},h0=36160,x1=36161,bs=3553,af=34069,Jp=36064,tv=36096,ev=36128,ov=33306,nv=36053,Jb=36054,tw=36055,ew=36057,ow=36061,nw=36193,rw=5121,aw=5126,rv=6407,av=6408,sw=6402,iw=[rv,av],y1=[];y1[av]=4,y1[rv]=3;var sf=[];sf[rw]=1,sf[aw]=4,sf[nw]=2;var cw=32854,lw=32855,fw=36194,hw=33189,uw=36168,sv=34041,dw=35907,pw=34836,vw=34842,mw=34843,gw=[cw,lw,fw,dw,vw,mw,pw],mi={};mi[nv]="complete",mi[Jb]="incomplete attachment",mi[ew]="incomplete dimensions",mi[tw]="incomplete, missing attachment",mi[ow]="unsupported";function xw(x,S,R,tt,it,Z){var nt={cur:null,next:null,dirty:!1,setFBO:null},yt=["rgba"],_t=["rgba4","rgb565","rgb5 a1"];S.ext_srgb&&_t.push("srgba"),S.ext_color_buffer_half_float&&_t.push("rgba16f","rgb16f"),S.webgl_color_buffer_float&&_t.push("rgba32f");var Tt=["uint8"];S.oes_texture_half_float&&Tt.push("half float","float16"),S.oes_texture_float&&Tt.push("float","float32");function Mt(qt,At,ht){this.target=qt,this.texture=At,this.renderbuffer=ht;var Ae=0,He=0;At?(Ae=At.width,He=At.height):ht&&(Ae=ht.width,He=ht.height),this.width=Ae,this.height=He}function zt(qt){qt&&(qt.texture&&qt.texture._texture.decRef(),qt.renderbuffer&&qt.renderbuffer._renderbuffer.decRef())}function Ft(qt,At,ht){if(qt)if(qt.texture){var Ae=qt.texture._texture,He=Math.max(1,Ae.width),ee=Math.max(1,Ae.height);E(He===At&&ee===ht,"inconsistent width/height for supplied texture"),Ae.refCount+=1}else{var Ze=qt.renderbuffer._renderbuffer;E(Ze.width===At&&Ze.height===ht,"inconsistent width/height for renderbuffer"),Ze.refCount+=1}}function bt(qt,At){At&&(At.texture?x.framebufferTexture2D(h0,qt,At.target,At.texture._texture.texture,0):x.framebufferRenderbuffer(h0,qt,x1,At.renderbuffer._renderbuffer.renderbuffer))}function Rt(qt){var At=bs,ht=null,Ae=null,He=qt;typeof qt=="object"&&(He=qt.data,"target"in qt&&(At=qt.target|0)),E.type(He,"function","invalid attachment data");var ee=He._reglType;return ee==="texture2d"?(ht=He,E(At===bs)):ee==="textureCube"?(ht=He,E(At>=af&&At<af+6,"invalid cube map target")):ee==="renderbuffer"?(Ae=He,At=x1):E.raise("invalid regl object for attachment"),new Mt(At,ht,Ae)}function j(qt,At,ht,Ae,He){if(ht){var ee=tt.create2D({width:qt,height:At,format:Ae,type:He});return ee._texture.refCount=0,new Mt(bs,ee,null)}else{var Ze=it.create({width:qt,height:At,format:Ae});return Ze._renderbuffer.refCount=0,new Mt(x1,null,Ze)}}function rt(qt){return qt&&(qt.texture||qt.renderbuffer)}function kt(qt,At,ht){qt&&(qt.texture?qt.texture.resize(At,ht):qt.renderbuffer&&qt.renderbuffer.resize(At,ht),qt.width=At,qt.height=ht)}var Ut=0,ut={};function Xt(){this.id=Ut++,ut[this.id]=this,this.framebuffer=x.createFramebuffer(),this.width=0,this.height=0,this.colorAttachments=[],this.depthAttachment=null,this.stencilAttachment=null,this.depthStencilAttachment=null}function mt(qt){qt.colorAttachments.forEach(zt),zt(qt.depthAttachment),zt(qt.stencilAttachment),zt(qt.depthStencilAttachment)}function Ot(qt){var At=qt.framebuffer;E(At,"must not double destroy framebuffer"),x.deleteFramebuffer(At),qt.framebuffer=null,Z.framebufferCount--,delete ut[qt.id]}function dt(qt){var At;x.bindFramebuffer(h0,qt.framebuffer);var ht=qt.colorAttachments;for(At=0;At<ht.length;++At)bt(Jp+At,ht[At]);for(At=ht.length;At<R.maxColorAttachments;++At)x.framebufferTexture2D(h0,Jp+At,bs,null,0);x.framebufferTexture2D(h0,ov,bs,null,0),x.framebufferTexture2D(h0,tv,bs,null,0),x.framebufferTexture2D(h0,ev,bs,null,0),bt(tv,qt.depthAttachment),bt(ev,qt.stencilAttachment),bt(ov,qt.depthStencilAttachment);var Ae=x.checkFramebufferStatus(h0);!x.isContextLost()&&Ae!==nv&&E.raise("framebuffer configuration not supported, status = "+mi[Ae]),x.bindFramebuffer(h0,nt.next?nt.next.framebuffer:null),nt.cur=nt.next,x.getError()}function Pt(qt,At){var ht=new Xt;Z.framebufferCount++;function Ae(ee,Ze){var Ie;E(nt.next!==ht,"can not update framebuffer which is currently in use");var We=0,go=0,wn=!0,Fn=!0,ro=null,Ln=!0,Wo="rgba",_n="uint8",zn=1,Nn=null,Kn=null,ar=null,pn=!1;if(typeof ee=="number")We=ee|0,go=Ze|0||We;else if(!ee)We=go=1;else{E.type(ee,"object","invalid arguments for framebuffer");var Ue=ee;if("shape"in Ue){var sr=Ue.shape;E(Array.isArray(sr)&&sr.length>=2,"invalid shape for framebuffer"),We=sr[0],go=sr[1]}else"radius"in Ue&&(We=go=Ue.radius),"width"in Ue&&(We=Ue.width),"height"in Ue&&(go=Ue.height);("color"in Ue||"colors"in Ue)&&(ro=Ue.color||Ue.colors,Array.isArray(ro)&&E(ro.length===1||S.webgl_draw_buffers,"multiple render targets not supported")),ro||("colorCount"in Ue&&(zn=Ue.colorCount|0,E(zn>0,"invalid color buffer count")),"colorTexture"in Ue&&(Ln=!!Ue.colorTexture,Wo="rgba4"),"colorType"in Ue&&(_n=Ue.colorType,Ln?(E(S.oes_texture_float||!(_n==="float"||_n==="float32"),"you must enable OES_texture_float in order to use floating point framebuffer objects"),E(S.oes_texture_half_float||!(_n==="half float"||_n==="float16"),"you must enable OES_texture_half_float in order to use 16-bit floating point framebuffer objects")):_n==="half float"||_n==="float16"?(E(S.ext_color_buffer_half_float,"you must enable EXT_color_buffer_half_float to use 16-bit render buffers"),Wo="rgba16f"):(_n==="float"||_n==="float32")&&(E(S.webgl_color_buffer_float,"you must enable WEBGL_color_buffer_float in order to use 32-bit floating point renderbuffers"),Wo="rgba32f"),E.oneOf(_n,Tt,"invalid color type")),"colorFormat"in Ue&&(Wo=Ue.colorFormat,yt.indexOf(Wo)>=0?Ln=!0:_t.indexOf(Wo)>=0?Ln=!1:Ln?E.oneOf(Ue.colorFormat,yt,"invalid color format for texture"):E.oneOf(Ue.colorFormat,_t,"invalid color format for renderbuffer"))),("depthTexture"in Ue||"depthStencilTexture"in Ue)&&(pn=!!(Ue.depthTexture||Ue.depthStencilTexture),E(!pn||S.webgl_depth_texture,"webgl_depth_texture extension not supported")),"depth"in Ue&&(typeof Ue.depth=="boolean"?wn=Ue.depth:(Nn=Ue.depth,Fn=!1)),"stencil"in Ue&&(typeof Ue.stencil=="boolean"?Fn=Ue.stencil:(Kn=Ue.stencil,wn=!1)),"depthStencil"in Ue&&(typeof Ue.depthStencil=="boolean"?wn=Fn=Ue.depthStencil:(ar=Ue.depthStencil,wn=!1,Fn=!1))}var ko=null,be=null,oo=null,ho=null;if(Array.isArray(ro))ko=ro.map(Rt);else if(ro)ko=[Rt(ro)];else for(ko=new Array(zn),Ie=0;Ie<zn;++Ie)ko[Ie]=j(We,go,Ln,Wo,_n);E(S.webgl_draw_buffers||ko.length<=1,"you must enable the WEBGL_draw_buffers extension in order to use multiple color buffers."),E(ko.length<=R.maxColorAttachments,"too many color attachments, not supported"),We=We||ko[0].width,go=go||ko[0].height,Nn?be=Rt(Nn):wn&&!Fn&&(be=j(We,go,pn,"depth","uint32")),Kn?oo=Rt(Kn):Fn&&!wn&&(oo=j(We,go,!1,"stencil","uint8")),ar?ho=Rt(ar):!Nn&&!Kn&&Fn&&wn&&(ho=j(We,go,pn,"depth stencil","depth stencil")),E(!!Nn+!!Kn+!!ar<=1,"invalid framebuffer configuration, can specify exactly one depth/stencil attachment");var vn=null;for(Ie=0;Ie<ko.length;++Ie)if(Ft(ko[Ie],We,go),E(!ko[Ie]||ko[Ie].texture&&iw.indexOf(ko[Ie].texture._texture.format)>=0||ko[Ie].renderbuffer&&gw.indexOf(ko[Ie].renderbuffer._renderbuffer.format)>=0,"framebuffer color attachment "+Ie+" is invalid"),ko[Ie]&&ko[Ie].texture){var t0=y1[ko[Ie].texture._texture.format]*sf[ko[Ie].texture._texture.type];vn===null?vn=t0:E(vn===t0,"all color attachments much have the same number of bits per pixel.")}return Ft(be,We,go),E(!be||be.texture&&be.texture._texture.format===sw||be.renderbuffer&&be.renderbuffer._renderbuffer.format===hw,"invalid depth attachment for framebuffer object"),Ft(oo,We,go),E(!oo||oo.renderbuffer&&oo.renderbuffer._renderbuffer.format===uw,"invalid stencil attachment for framebuffer object"),Ft(ho,We,go),E(!ho||ho.texture&&ho.texture._texture.format===sv||ho.renderbuffer&&ho.renderbuffer._renderbuffer.format===sv,"invalid depth-stencil attachment for framebuffer object"),mt(ht),ht.width=We,ht.height=go,ht.colorAttachments=ko,ht.depthAttachment=be,ht.stencilAttachment=oo,ht.depthStencilAttachment=ho,Ae.color=ko.map(rt),Ae.depth=rt(be),Ae.stencil=rt(oo),Ae.depthStencil=rt(ho),Ae.width=ht.width,Ae.height=ht.height,dt(ht),Ae}function He(ee,Ze){E(nt.next!==ht,"can not resize a framebuffer which is currently in use");var Ie=Math.max(ee|0,1),We=Math.max(Ze|0||Ie,1);if(Ie===ht.width&&We===ht.height)return Ae;for(var go=ht.colorAttachments,wn=0;wn<go.length;++wn)kt(go[wn],Ie,We);return kt(ht.depthAttachment,Ie,We),kt(ht.stencilAttachment,Ie,We),kt(ht.depthStencilAttachment,Ie,We),ht.width=Ae.width=Ie,ht.height=Ae.height=We,dt(ht),Ae}return Ae(qt,At),e(Ae,{resize:He,_reglType:"framebuffer",_framebuffer:ht,destroy:function(){Ot(ht),mt(ht)},use:function(ee){nt.setFBO({framebuffer:Ae},ee)}})}function ve(qt){var At=Array(6);function ht(He){var ee;E(At.indexOf(nt.next)<0,"can not update framebuffer which is currently in use");var Ze={color:null},Ie=0,We=null,go="rgba",wn="uint8",Fn=1;if(typeof He=="number")Ie=He|0;else if(!He)Ie=1;else{E.type(He,"object","invalid arguments for framebuffer");var ro=He;if("shape"in ro){var Ln=ro.shape;E(Array.isArray(Ln)&&Ln.length>=2,"invalid shape for framebuffer"),E(Ln[0]===Ln[1],"cube framebuffer must be square"),Ie=Ln[0]}else"radius"in ro&&(Ie=ro.radius|0),"width"in ro?(Ie=ro.width|0,"height"in ro&&E(ro.height===Ie,"must be square")):"height"in ro&&(Ie=ro.height|0);("color"in ro||"colors"in ro)&&(We=ro.color||ro.colors,Array.isArray(We)&&E(We.length===1||S.webgl_draw_buffers,"multiple render targets not supported")),We||("colorCount"in ro&&(Fn=ro.colorCount|0,E(Fn>0,"invalid color buffer count")),"colorType"in ro&&(E.oneOf(ro.colorType,Tt,"invalid color type"),wn=ro.colorType),"colorFormat"in ro&&(go=ro.colorFormat,E.oneOf(ro.colorFormat,yt,"invalid color format for texture"))),"depth"in ro&&(Ze.depth=ro.depth),"stencil"in ro&&(Ze.stencil=ro.stencil),"depthStencil"in ro&&(Ze.depthStencil=ro.depthStencil)}var Wo;if(We)if(Array.isArray(We))for(Wo=[],ee=0;ee<We.length;++ee)Wo[ee]=We[ee];else Wo=[We];else{Wo=Array(Fn);var _n={radius:Ie,format:go,type:wn};for(ee=0;ee<Fn;++ee)Wo[ee]=tt.createCube(_n)}for(Ze.color=Array(Wo.length),ee=0;ee<Wo.length;++ee){var zn=Wo[ee];E(typeof zn=="function"&&zn._reglType==="textureCube","invalid cube map"),Ie=Ie||zn.width,E(zn.width===Ie&&zn.height===Ie,"invalid cube map shape"),Ze.color[ee]={target:af,data:Wo[ee]}}for(ee=0;ee<6;++ee){for(var Nn=0;Nn<Wo.length;++Nn)Ze.color[Nn].target=af+ee;ee>0&&(Ze.depth=At[0].depth,Ze.stencil=At[0].stencil,Ze.depthStencil=At[0].depthStencil),At[ee]?At[ee](Ze):At[ee]=Pt(Ze)}return e(ht,{width:Ie,height:Ie,color:Wo})}function Ae(He){var ee,Ze=He|0;if(E(Ze>0&&Ze<=R.maxCubeMapSize,"invalid radius for cube fbo"),Ze===ht.width)return ht;var Ie=ht.color;for(ee=0;ee<Ie.length;++ee)Ie[ee].resize(Ze);for(ee=0;ee<6;++ee)At[ee].resize(Ze);return ht.width=ht.height=Ze,ht}return ht(qt),e(ht,{faces:At,resize:Ae,_reglType:"framebufferCube",destroy:function(){At.forEach(function(He){He.destroy()})}})}function Oe(){nt.cur=null,nt.next=null,nt.dirty=!0,Jr(ut).forEach(function(qt){qt.framebuffer=x.createFramebuffer(),dt(qt)})}return e(nt,{getFramebuffer:function(qt){if(typeof qt=="function"&&qt._reglType==="framebuffer"){var At=qt._framebuffer;if(At instanceof Xt)return At}return null},create:Pt,createCube:ve,clear:function(){Jr(ut).forEach(Ot)},restore:Oe})}var yw=5126,iv=34962;function b1(){this.state=0,this.x=0,this.y=0,this.z=0,this.w=0,this.buffer=null,this.size=0,this.normalized=!1,this.type=yw,this.offset=0,this.stride=0,this.divisor=0}function bw(x,S,R,tt,it){for(var Z=R.maxAttributes,nt=new Array(Z),yt=0;yt<Z;++yt)nt[yt]=new b1;var _t=0,Tt={},Mt={Record:b1,scope:{},state:nt,currentVAO:null,targetVAO:null,restore:Ft()?ut:function(){},createVAO:Xt,getVAO:Rt,destroyBuffer:zt,setVAO:Ft()?j:rt,clear:Ft()?kt:function(){}};function zt(mt){for(var Ot=0;Ot<nt.length;++Ot){var dt=nt[Ot];dt.buffer===mt&&(x.disableVertexAttribArray(Ot),dt.buffer=null)}}function Ft(){return S.oes_vertex_array_object}function bt(){return S.angle_instanced_arrays}function Rt(mt){return typeof mt=="function"&&mt._vao?mt._vao:null}function j(mt){if(mt!==Mt.currentVAO){var Ot=Ft();mt?Ot.bindVertexArrayOES(mt.vao):Ot.bindVertexArrayOES(null),Mt.currentVAO=mt}}function rt(mt){if(mt!==Mt.currentVAO){if(mt)mt.bindAttrs();else for(var Ot=bt(),dt=0;dt<nt.length;++dt){var Pt=nt[dt];Pt.buffer?(x.enableVertexAttribArray(dt),x.vertexAttribPointer(dt,Pt.size,Pt.type,Pt.normalized,Pt.stride,Pt.offfset),Ot&&Pt.divisor&&Ot.vertexAttribDivisorANGLE(dt,Pt.divisor)):(x.disableVertexAttribArray(dt),x.vertexAttrib4f(dt,Pt.x,Pt.y,Pt.z,Pt.w))}Mt.currentVAO=mt}}function kt(){Jr(Tt).forEach(function(mt){mt.destroy()})}function Ut(){this.id=++_t,this.attributes=[];var mt=Ft();mt?this.vao=mt.createVertexArrayOES():this.vao=null,Tt[this.id]=this,this.buffers=[]}Ut.prototype.bindAttrs=function(){for(var mt=bt(),Ot=this.attributes,dt=0;dt<Ot.length;++dt){var Pt=Ot[dt];Pt.buffer?(x.enableVertexAttribArray(dt),x.bindBuffer(iv,Pt.buffer.buffer),x.vertexAttribPointer(dt,Pt.size,Pt.type,Pt.normalized,Pt.stride,Pt.offset),mt&&Pt.divisor&&mt.vertexAttribDivisorANGLE(dt,Pt.divisor)):(x.disableVertexAttribArray(dt),x.vertexAttrib4f(dt,Pt.x,Pt.y,Pt.z,Pt.w))}for(var ve=Ot.length;ve<Z;++ve)x.disableVertexAttribArray(ve)},Ut.prototype.refresh=function(){var mt=Ft();mt&&(mt.bindVertexArrayOES(this.vao),this.bindAttrs(),Mt.currentVAO=this)},Ut.prototype.destroy=function(){if(this.vao){var mt=Ft();this===Mt.currentVAO&&(Mt.currentVAO=null,mt.bindVertexArrayOES(null)),mt.deleteVertexArrayOES(this.vao),this.vao=null}Tt[this.id]&&(delete Tt[this.id],tt.vaoCount-=1)};function ut(){var mt=Ft();mt&&Jr(Tt).forEach(function(Ot){Ot.refresh()})}function Xt(mt){var Ot=new Ut;tt.vaoCount+=1;function dt(Pt){E(Array.isArray(Pt),"arguments to vertex array constructor must be an array"),E(Pt.length<Z,"too many attributes"),E(Pt.length>0,"must specify at least one attribute");var ve={},Oe=Ot.attributes;Oe.length=Pt.length;for(var qt=0;qt<Pt.length;++qt){var At=Pt[qt],ht=Oe[qt]=new b1,Ae=At.data||At;if(Array.isArray(Ae)||t(Ae)||Na(Ae)){var He;Ot.buffers[qt]&&(He=Ot.buffers[qt],t(Ae)&&He._buffer.byteLength>=Ae.byteLength?He.subdata(Ae):(He.destroy(),Ot.buffers[qt]=null)),Ot.buffers[qt]||(He=Ot.buffers[qt]=it.create(At,iv,!1,!0)),ht.buffer=it.getBuffer(He),ht.size=ht.buffer.dimension|0,ht.normalized=!1,ht.type=ht.buffer.dtype,ht.offset=0,ht.stride=0,ht.divisor=0,ht.state=1,ve[qt]=1}else it.getBuffer(At)?(ht.buffer=it.getBuffer(At),ht.size=ht.buffer.dimension|0,ht.normalized=!1,ht.type=ht.buffer.dtype,ht.offset=0,ht.stride=0,ht.divisor=0,ht.state=1):it.getBuffer(At.buffer)?(ht.buffer=it.getBuffer(At.buffer),ht.size=(+At.size||ht.buffer.dimension)|0,ht.normalized=!!At.normalized||!1,"type"in At?(E.parameter(At.type,ms,"invalid buffer type"),ht.type=ms[At.type]):ht.type=ht.buffer.dtype,ht.offset=(At.offset||0)|0,ht.stride=(At.stride||0)|0,ht.divisor=(At.divisor||0)|0,ht.state=1,E(ht.size>=1&&ht.size<=4,"size must be between 1 and 4"),E(ht.offset>=0,"invalid offset"),E(ht.stride>=0&&ht.stride<=255,"stride must be between 0 and 255"),E(ht.divisor>=0,"divisor must be positive"),E(!ht.divisor||!!S.angle_instanced_arrays,"ANGLE_instanced_arrays must be enabled to use divisor")):"x"in At?(E(qt>0,"first attribute must not be a constant"),ht.x=+At.x||0,ht.y=+At.y||0,ht.z=+At.z||0,ht.w=+At.w||0,ht.state=2):E(!1,"invalid attribute spec for location "+qt)}for(var ee=0;ee<Ot.buffers.length;++ee)!ve[ee]&&Ot.buffers[ee]&&(Ot.buffers[ee].destroy(),Ot.buffers[ee]=null);return Ot.refresh(),dt}return dt.destroy=function(){for(var Pt=0;Pt<Ot.buffers.length;++Pt)Ot.buffers[Pt]&&Ot.buffers[Pt].destroy();Ot.buffers.length=0,Ot.destroy()},dt._vao=Ot,dt._reglType="vao",dt(mt)}return Mt}var cv=35632,ww=35633,_w=35718,Mw=35721;function Ew(x,S,R,tt){var it={},Z={};function nt(j,rt,kt,Ut){this.name=j,this.id=rt,this.location=kt,this.info=Ut}function yt(j,rt){for(var kt=0;kt<j.length;++kt)if(j[kt].id===rt.id){j[kt].location=rt.location;return}j.push(rt)}function _t(j,rt,kt){var Ut=j===cv?it:Z,ut=Ut[rt];if(!ut){var Xt=S.str(rt);ut=x.createShader(j),x.shaderSource(ut,Xt),x.compileShader(ut),E.shaderError(x,ut,Xt,j,kt),Ut[rt]=ut}return ut}var Tt={},Mt=[],zt=0;function Ft(j,rt){this.id=zt++,this.fragId=j,this.vertId=rt,this.program=null,this.uniforms=[],this.attributes=[],this.refCount=1,tt.profile&&(this.stats={uniformsCount:0,attributesCount:0})}function bt(j,rt,kt){var Ut,ut,Xt=_t(cv,j.fragId),mt=_t(ww,j.vertId),Ot=j.program=x.createProgram();if(x.attachShader(Ot,Xt),x.attachShader(Ot,mt),kt)for(Ut=0;Ut<kt.length;++Ut){var dt=kt[Ut];x.bindAttribLocation(Ot,dt[0],dt[1])}x.linkProgram(Ot),E.linkError(x,Ot,S.str(j.fragId),S.str(j.vertId),rt);var Pt=x.getProgramParameter(Ot,_w);tt.profile&&(j.stats.uniformsCount=Pt);var ve=j.uniforms;for(Ut=0;Ut<Pt;++Ut)if(ut=x.getActiveUniform(Ot,Ut),ut)if(ut.size>1)for(var Oe=0;Oe<ut.size;++Oe){var qt=ut.name.replace("[0]","["+Oe+"]");yt(ve,new nt(qt,S.id(qt),x.getUniformLocation(Ot,qt),ut))}else yt(ve,new nt(ut.name,S.id(ut.name),x.getUniformLocation(Ot,ut.name),ut));var At=x.getProgramParameter(Ot,Mw);tt.profile&&(j.stats.attributesCount=At);var ht=j.attributes;for(Ut=0;Ut<At;++Ut)ut=x.getActiveAttrib(Ot,Ut),ut&&yt(ht,new nt(ut.name,S.id(ut.name),x.getAttribLocation(Ot,ut.name),ut))}tt.profile&&(R.getMaxUniformsCount=function(){var j=0;return Mt.forEach(function(rt){rt.stats.uniformsCount>j&&(j=rt.stats.uniformsCount)}),j},R.getMaxAttributesCount=function(){var j=0;return Mt.forEach(function(rt){rt.stats.attributesCount>j&&(j=rt.stats.attributesCount)}),j});function Rt(){it={},Z={};for(var j=0;j<Mt.length;++j)bt(Mt[j],null,Mt[j].attributes.map(function(rt){return[rt.location,rt.name]}))}return{clear:function(){var j=x.deleteShader.bind(x);Jr(it).forEach(j),it={},Jr(Z).forEach(j),Z={},Mt.forEach(function(rt){x.deleteProgram(rt.program)}),Mt.length=0,Tt={},R.shaderCount=0},program:function(j,rt,kt,Ut){E.command(j>=0,"missing vertex shader",kt),E.command(rt>=0,"missing fragment shader",kt);var ut=Tt[rt];ut||(ut=Tt[rt]={});var Xt=ut[j];if(Xt&&(Xt.refCount++,!Ut))return Xt;var mt=new Ft(rt,j);return R.shaderCount++,bt(mt,kt,Ut),Xt||(ut[j]=mt),Mt.push(mt),e(mt,{destroy:function(){if(mt.refCount--,mt.refCount<=0){x.deleteProgram(mt.program);var Ot=Mt.indexOf(mt);Mt.splice(Ot,1),R.shaderCount--}ut[mt.vertId].refCount<=0&&(x.deleteShader(Z[mt.vertId]),delete Z[mt.vertId],delete Tt[mt.fragId][mt.vertId]),Object.keys(Tt[mt.fragId]).length||(x.deleteShader(it[mt.fragId]),delete it[mt.fragId],delete Tt[mt.fragId])}})},restore:Rt,shader:_t,frag:-1,vert:-1}}var Sw=6408,Cc=5121,kw=3333,cf=5126;function Tw(x,S,R,tt,it,Z,nt){function yt(Mt){var zt;S.next===null?(E(it.preserveDrawingBuffer,'you must create a webgl context with "preserveDrawingBuffer":true in order to read pixels from the drawing buffer'),zt=Cc):(E(S.next.colorAttachments[0].texture!==null,"You cannot read from a renderbuffer"),zt=S.next.colorAttachments[0].texture._texture.type,Z.oes_texture_float?(E(zt===Cc||zt===cf,"Reading from a framebuffer is only allowed for the types 'uint8' and 'float'"),zt===cf&&E(nt.readFloat,"Reading 'float' values is not permitted in your browser. For a fallback, please see: https://www.npmjs.com/package/glsl-read-float")):E(zt===Cc,"Reading from a framebuffer is only allowed for the type 'uint8'"));var Ft=0,bt=0,Rt=tt.framebufferWidth,j=tt.framebufferHeight,rt=null;t(Mt)?rt=Mt:Mt&&(E.type(Mt,"object","invalid arguments to regl.read()"),Ft=Mt.x|0,bt=Mt.y|0,E(Ft>=0&&Ft<tt.framebufferWidth,"invalid x offset for regl.read"),E(bt>=0&&bt<tt.framebufferHeight,"invalid y offset for regl.read"),Rt=(Mt.width||tt.framebufferWidth-Ft)|0,j=(Mt.height||tt.framebufferHeight-bt)|0,rt=Mt.data||null),rt&&(zt===Cc?E(rt instanceof Uint8Array,"buffer must be 'Uint8Array' when reading from a framebuffer of type 'uint8'"):zt===cf&&E(rt instanceof Float32Array,"buffer must be 'Float32Array' when reading from a framebuffer of type 'float'")),E(Rt>0&&Rt+Ft<=tt.framebufferWidth,"invalid width for read pixels"),E(j>0&&j+bt<=tt.framebufferHeight,"invalid height for read pixels"),R();var kt=Rt*j*4;return rt||(zt===Cc?rt=new Uint8Array(kt):zt===cf&&(rt=rt||new Float32Array(kt))),E.isTypedArray(rt,"data buffer for regl.read() must be a typedarray"),E(rt.byteLength>=kt,"data buffer for regl.read() too small"),x.pixelStorei(kw,4),x.readPixels(Ft,bt,Rt,j,Sw,zt,rt),rt}function _t(Mt){var zt;return S.setFBO({framebuffer:Mt.framebuffer},function(){zt=yt(Mt)}),zt}function Tt(Mt){return!Mt||!("framebuffer"in Mt)?yt(Mt):_t(Mt)}return Tt}function gi(x){return Array.prototype.slice.call(x)}function xi(x){return gi(x).join("")}function Aw(){var x=0,S=[],R=[];function tt(zt){for(var Ft=0;Ft<R.length;++Ft)if(R[Ft]===zt)return S[Ft];var bt="g"+x++;return S.push(bt),R.push(zt),bt}function it(){var zt=[];function Ft(){zt.push.apply(zt,gi(arguments))}var bt=[];function Rt(){var j="v"+x++;return bt.push(j),arguments.length>0&&(zt.push(j,"="),zt.push.apply(zt,gi(arguments)),zt.push(";")),j}return e(Ft,{def:Rt,toString:function(){return xi([bt.length>0?"var "+bt.join(",")+";":"",xi(zt)])}})}function Z(){var zt=it(),Ft=it(),bt=zt.toString,Rt=Ft.toString;function j(rt,kt){Ft(rt,kt,"=",zt.def(rt,kt),";")}return e(function(){zt.apply(zt,gi(arguments))},{def:zt.def,entry:zt,exit:Ft,save:j,set:function(rt,kt,Ut){j(rt,kt),zt(rt,kt,"=",Ut,";")},toString:function(){return bt()+Rt()}})}function nt(){var zt=xi(arguments),Ft=Z(),bt=Z(),Rt=Ft.toString,j=bt.toString;return e(Ft,{then:function(){return Ft.apply(Ft,gi(arguments)),this},else:function(){return bt.apply(bt,gi(arguments)),this},toString:function(){var rt=j();return rt&&(rt="else{"+rt+"}"),xi(["if(",zt,"){",Rt(),"}",rt])}})}var yt=it(),_t={};function Tt(zt,Ft){var bt=[];function Rt(){var ut="a"+bt.length;return bt.push(ut),ut}Ft=Ft||0;for(var j=0;j<Ft;++j)Rt();var rt=Z(),kt=rt.toString,Ut=_t[zt]=e(rt,{arg:Rt,toString:function(){return xi(["function(",bt.join(),"){",kt(),"}"])}});return Ut}function Mt(){var zt=['"use strict";',yt,"return {"];Object.keys(_t).forEach(function(Rt){zt.push('"',Rt,'":',_t[Rt].toString(),",")}),zt.push("}");var Ft=xi(zt).replace(/;/g,`;
`).replace(/}/g,`}
`).replace(/{/g,`{
`),bt=Function.apply(null,S.concat(Ft));return bt.apply(null,R)}return{global:yt,link:tt,block:it,proc:Tt,scope:Z,cond:nt,compile:Mt}}var yi="xyzw".split(""),lv=5121,bi=1,w1=2,_1=0,M1=1,E1=2,S1=3,lf=4,fv=5,hv=6,uv="dither",dv="blend.enable",pv="blend.color",k1="blend.equation",T1="blend.func",vv="depth.enable",mv="depth.func",gv="depth.range",xv="depth.mask",A1="colorMask",yv="cull.enable",bv="cull.face",L1="frontFace",z1="lineWidth",wv="polygonOffset.enable",N1="polygonOffset.offset",_v="sample.alpha",Mv="sample.enable",R1="sample.coverage",Ev="stencil.enable",Sv="stencil.mask",C1="stencil.func",O1="stencil.opFront",Oc="stencil.opBack",kv="scissor.enable",ff="scissor.box",u0="viewport",Pc="profile",ws="framebuffer",Ic="vert",$c="frag",_s="elements",Ms="primitive",Es="count",hf="offset",uf="instances",Fc="vao",P1="Width",I1="Height",wi=ws+P1,_i=ws+I1,Lw=u0+P1,zw=u0+I1,Tv="drawingBuffer",Av=Tv+P1,Lv=Tv+I1,Nw=[T1,k1,C1,O1,Oc,R1,u0,ff,N1],Mi=34962,Rw=34963,Cw=35632,Ow=35633,zv=3553,Pw=34067,Iw=2884,$w=3042,Fw=3024,qw=2960,Dw=2929,Gw=3089,Hw=32823,Uw=32926,Bw=32928,$1=5126,df=35664,pf=35665,vf=35666,F1=5124,mf=35667,gf=35668,xf=35669,q1=35670,yf=35671,bf=35672,wf=35673,qc=35674,Dc=35675,Gc=35676,Hc=35678,Uc=35680,Nv=4,Bc=1028,Ss=1029,Rv=2304,D1=2305,jw=32775,Ww=32776,Vw=519,C0=7680,Cv=0,Ov=1,Pv=32774,Xw=513,Iv=36160,Yw=36064,Ja={0:0,1:1,zero:0,one:1,"src color":768,"one minus src color":769,"src alpha":770,"one minus src alpha":771,"dst color":774,"one minus dst color":775,"dst alpha":772,"one minus dst alpha":773,"constant color":32769,"one minus constant color":32770,"constant alpha":32771,"one minus constant alpha":32772,"src alpha saturate":776},$v=["constant color, constant alpha","one minus constant color, constant alpha","constant color, one minus constant alpha","one minus constant color, one minus constant alpha","constant alpha, constant color","constant alpha, one minus constant color","one minus constant alpha, constant color","one minus constant alpha, one minus constant color"],Ei={never:512,less:513,"<":513,equal:514,"=":514,"==":514,"===":514,lequal:515,"<=":515,greater:516,">":516,notequal:517,"!=":517,"!==":517,gequal:518,">=":518,always:519},O0={0:0,zero:0,keep:7680,replace:7681,increment:7682,decrement:7683,"increment wrap":34055,"decrement wrap":34056,invert:5386},Fv={frag:Cw,vert:Ow},G1={cw:Rv,ccw:D1};function _f(x){return Array.isArray(x)||t(x)||Na(x)}function qv(x){return x.sort(function(S,R){return S===u0?-1:R===u0?1:S<R?-1:1})}function kr(x,S,R,tt){this.thisDep=x,this.contextDep=S,this.propDep=R,this.append=tt}function P0(x){return x&&!(x.thisDep||x.contextDep||x.propDep)}function bn(x){return new kr(!1,!1,!1,x)}function Hr(x,S){var R=x.type;if(R===_1){var tt=x.data.length;return new kr(!0,tt>=1,tt>=2,S)}else if(R===lf){var it=x.data;return new kr(it.thisDep,it.contextDep,it.propDep,S)}else{if(R===fv)return new kr(!1,!1,!1,S);if(R===hv){for(var Z=!1,nt=!1,yt=!1,_t=0;_t<x.data.length;++_t){var Tt=x.data[_t];if(Tt.type===M1)yt=!0;else if(Tt.type===E1)nt=!0;else if(Tt.type===S1)Z=!0;else if(Tt.type===_1){Z=!0;var Mt=Tt.data;Mt>=1&&(nt=!0),Mt>=2&&(yt=!0)}else Tt.type===lf&&(Z=Z||Tt.data.thisDep,nt=nt||Tt.data.contextDep,yt=yt||Tt.data.propDep)}return new kr(Z,nt,yt,S)}else return new kr(R===S1,R===E1,R===M1,S)}}var Dv=new kr(!1,!1,!1,function(){});function Kw(x,S,R,tt,it,Z,nt,yt,_t,Tt,Mt,zt,Ft,bt,Rt){var j=Tt.Record,rt={add:32774,subtract:32778,"reverse subtract":32779};R.ext_blend_minmax&&(rt.min=jw,rt.max=Ww);var kt=R.angle_instanced_arrays,Ut=R.webgl_draw_buffers,ut={dirty:!0,profile:Rt.profile},Xt={},mt=[],Ot={},dt={};function Pt(A){return A.replace(".","_")}function ve(A,M,P){var U=Pt(A);mt.push(A),Xt[U]=ut[U]=!!P,Ot[U]=M}function Oe(A,M,P){var U=Pt(A);mt.push(A),Array.isArray(P)?(ut[U]=P.slice(),Xt[U]=P.slice()):ut[U]=Xt[U]=P,dt[U]=M}ve(uv,Fw),ve(dv,$w),Oe(pv,"blendColor",[0,0,0,0]),Oe(k1,"blendEquationSeparate",[Pv,Pv]),Oe(T1,"blendFuncSeparate",[Ov,Cv,Ov,Cv]),ve(vv,Dw,!0),Oe(mv,"depthFunc",Xw),Oe(gv,"depthRange",[0,1]),Oe(xv,"depthMask",!0),Oe(A1,A1,[!0,!0,!0,!0]),ve(yv,Iw),Oe(bv,"cullFace",Ss),Oe(L1,L1,D1),Oe(z1,z1,1),ve(wv,Hw),Oe(N1,"polygonOffset",[0,0]),ve(_v,Uw),ve(Mv,Bw),Oe(R1,"sampleCoverage",[1,!1]),ve(Ev,qw),Oe(Sv,"stencilMask",-1),Oe(C1,"stencilFunc",[Vw,0,-1]),Oe(O1,"stencilOpSeparate",[Bc,C0,C0,C0]),Oe(Oc,"stencilOpSeparate",[Ss,C0,C0,C0]),ve(kv,Gw),Oe(ff,"scissor",[0,0,x.drawingBufferWidth,x.drawingBufferHeight]),Oe(u0,u0,[0,0,x.drawingBufferWidth,x.drawingBufferHeight]);var qt={gl:x,context:Ft,strings:S,next:Xt,current:ut,draw:zt,elements:Z,buffer:it,shader:Mt,attributes:Tt.state,vao:Tt,uniforms:_t,framebuffer:yt,extensions:R,timer:bt,isBufferArgs:_f},At={primTypes:li,compareFuncs:Ei,blendFuncs:Ja,blendEquations:rt,stencilOps:O0,glTypes:ms,orientationType:G1};E.optional(function(){qt.isArrayLike=dn}),Ut&&(At.backBuffer=[Ss],At.drawBuffer=Ye(tt.maxDrawbuffers,function(A){return A===0?[0]:Ye(A,function(M){return Yw+M})}));var ht=0;function Ae(){var A=Aw(),M=A.link,P=A.global;A.id=ht++,A.batchId="0";var U=M(qt),W=A.shared={props:"a0"};Object.keys(qt).forEach(function(O){W[O]=P.def(U,".",O)}),E.optional(function(){A.CHECK=M(E),A.commandStr=E.guessCommand(),A.command=M(A.commandStr),A.assert=function(O,T,H){O("if(!(",T,"))",this.CHECK,".commandRaise(",M(H),",",this.command,");")},At.invalidBlendCombinations=$v});var $=A.next={},I=A.current={};Object.keys(dt).forEach(function(O){Array.isArray(ut[O])&&($[O]=P.def(W.next,".",O),I[O]=P.def(W.current,".",O))});var F=A.constants={};Object.keys(At).forEach(function(O){F[O]=P.def(JSON.stringify(At[O]))}),A.invoke=function(O,T){switch(T.type){case _1:var H=["this",W.context,W.props,A.batchId];return O.def(M(T.data),".call(",H.slice(0,Math.max(T.data.length+1,4)),")");case M1:return O.def(W.props,T.data);case E1:return O.def(W.context,T.data);case S1:return O.def("this",T.data);case lf:return T.data.append(A,O),T.data.ref;case fv:return T.data.toString();case hv:return T.data.map(function(V){return A.invoke(O,V)})}},A.attribCache={};var L={};return A.scopeAttrib=function(O){var T=S.id(O);if(T in L)return L[T];var H=Tt.scope[T];H||(H=Tt.scope[T]=new j);var V=L[T]=M(H);return V},A}function He(A){var M=A.static,P=A.dynamic,U;if(Pc in M){var W=!!M[Pc];U=bn(function(I,F){return W}),U.enable=W}else if(Pc in P){var $=P[Pc];U=Hr($,function(I,F){return I.invoke(F,$)})}return U}function ee(A,M){var P=A.static,U=A.dynamic;if(ws in P){var W=P[ws];return W?(W=yt.getFramebuffer(W),E.command(W,"invalid framebuffer object"),bn(function(I,F){var L=I.link(W),O=I.shared;F.set(O.framebuffer,".next",L);var T=O.context;return F.set(T,"."+wi,L+".width"),F.set(T,"."+_i,L+".height"),L})):bn(function(I,F){var L=I.shared;F.set(L.framebuffer,".next","null");var O=L.context;return F.set(O,"."+wi,O+"."+Av),F.set(O,"."+_i,O+"."+Lv),"null"})}else if(ws in U){var $=U[ws];return Hr($,function(I,F){var L=I.invoke(F,$),O=I.shared,T=O.framebuffer,H=F.def(T,".getFramebuffer(",L,")");E.optional(function(){I.assert(F,"!"+L+"||"+H,"invalid framebuffer object")}),F.set(T,".next",H);var V=O.context;return F.set(V,"."+wi,H+"?"+H+".width:"+V+"."+Av),F.set(V,"."+_i,H+"?"+H+".height:"+V+"."+Lv),H})}else return null}function Ze(A,M,P){var U=A.static,W=A.dynamic;function $(L){if(L in U){var O=U[L];E.commandType(O,"object","invalid "+L,P.commandStr);var T=!0,H=O.x|0,V=O.y|0,st,ct;return"width"in O?(st=O.width|0,E.command(st>=0,"invalid "+L,P.commandStr)):T=!1,"height"in O?(ct=O.height|0,E.command(ct>=0,"invalid "+L,P.commandStr)):T=!1,new kr(!T&&M&&M.thisDep,!T&&M&&M.contextDep,!T&&M&&M.propDep,function(fe,Be){var oe=fe.shared.context,Me=st;"width"in O||(Me=Be.def(oe,".",wi,"-",H));var $e=ct;return"height"in O||($e=Be.def(oe,".",_i,"-",V)),[H,V,Me,$e]})}else if(L in W){var at=W[L],St=Hr(at,function(fe,Be){var oe=fe.invoke(Be,at);E.optional(function(){fe.assert(Be,oe+"&&typeof "+oe+'==="object"',"invalid "+L)});var Me=fe.shared.context,$e=Be.def(oe,".x|0"),xo=Be.def(oe,".y|0"),cn=Be.def('"width" in ',oe,"?",oe,".width|0:","(",Me,".",wi,"-",$e,")"),Tr=Be.def('"height" in ',oe,"?",oe,".height|0:","(",Me,".",_i,"-",xo,")");return E.optional(function(){fe.assert(Be,cn+">=0&&"+Tr+">=0","invalid "+L)}),[$e,xo,cn,Tr]});return M&&(St.thisDep=St.thisDep||M.thisDep,St.contextDep=St.contextDep||M.contextDep,St.propDep=St.propDep||M.propDep),St}else return M?new kr(M.thisDep,M.contextDep,M.propDep,function(fe,Be){var oe=fe.shared.context;return[0,0,Be.def(oe,".",wi),Be.def(oe,".",_i)]}):null}var I=$(u0);if(I){var F=I;I=new kr(I.thisDep,I.contextDep,I.propDep,function(L,O){var T=F.append(L,O),H=L.shared.context;return O.set(H,"."+Lw,T[2]),O.set(H,"."+zw,T[3]),T})}return{viewport:I,scissor_box:$(ff)}}function Ie(A,M){var P=A.static,U=typeof P[$c]=="string"&&typeof P[Ic]=="string";if(U){if(Object.keys(M.dynamic).length>0)return null;var W=M.static,$=Object.keys(W);if($.length>0&&typeof W[$[0]]=="number"){for(var I=[],F=0;F<$.length;++F)E(typeof W[$[F]]=="number","must specify all vertex attribute locations when using vaos"),I.push([W[$[F]]|0,$[F]]);return I}}return null}function We(A,M,P){var U=A.static,W=A.dynamic;function $(T){if(T in U){var H=S.id(U[T]);E.optional(function(){Mt.shader(Fv[T],H,E.guessCommand())});var V=bn(function(){return H});return V.id=H,V}else if(T in W){var st=W[T];return Hr(st,function(ct,at){var St=ct.invoke(at,st),fe=at.def(ct.shared.strings,".id(",St,")");return E.optional(function(){at(ct.shared.shader,".shader(",Fv[T],",",fe,",",ct.command,");")}),fe})}return null}var I=$($c),F=$(Ic),L=null,O;return P0(I)&&P0(F)?(L=Mt.program(F.id,I.id,null,P),O=bn(function(T,H){return T.link(L)})):O=new kr(I&&I.thisDep||F&&F.thisDep,I&&I.contextDep||F&&F.contextDep,I&&I.propDep||F&&F.propDep,function(T,H){var V=T.shared.shader,st;I?st=I.append(T,H):st=H.def(V,".",$c);var ct;F?ct=F.append(T,H):ct=H.def(V,".",Ic);var at=V+".program("+ct+","+st;return E.optional(function(){at+=","+T.command}),H.def(at+")")}),{frag:I,vert:F,progVar:O,program:L}}function go(A,M){var P=A.static,U=A.dynamic;function W(){if(_s in P){var T=P[_s];_f(T)?T=Z.getElements(Z.create(T,!0)):T&&(T=Z.getElements(T),E.command(T,"invalid elements",M.commandStr));var H=bn(function(st,ct){if(T){var at=st.link(T);return st.ELEMENTS=at,at}return st.ELEMENTS=null,null});return H.value=T,H}else if(_s in U){var V=U[_s];return Hr(V,function(st,ct){var at=st.shared,St=at.isBufferArgs,fe=at.elements,Be=st.invoke(ct,V),oe=ct.def("null"),Me=ct.def(St,"(",Be,")"),$e=st.cond(Me).then(oe,"=",fe,".createStream(",Be,");").else(oe,"=",fe,".getElements(",Be,");");return E.optional(function(){st.assert($e.else,"!"+Be+"||"+oe,"invalid elements")}),ct.entry($e),ct.exit(st.cond(Me).then(fe,".destroyStream(",oe,");")),st.ELEMENTS=oe,oe})}return null}var $=W();function I(){if(Ms in P){var T=P[Ms];return E.commandParameter(T,li,"invalid primitve",M.commandStr),bn(function(V,st){return li[T]})}else if(Ms in U){var H=U[Ms];return Hr(H,function(V,st){var ct=V.constants.primTypes,at=V.invoke(st,H);return E.optional(function(){V.assert(st,at+" in "+ct,"invalid primitive, must be one of "+Object.keys(li))}),st.def(ct,"[",at,"]")})}else if($)return P0($)?$.value?bn(function(V,st){return st.def(V.ELEMENTS,".primType")}):bn(function(){return Nv}):new kr($.thisDep,$.contextDep,$.propDep,function(V,st){var ct=V.ELEMENTS;return st.def(ct,"?",ct,".primType:",Nv)});return null}function F(T,H){if(T in P){var V=P[T]|0;return E.command(!H||V>=0,"invalid "+T,M.commandStr),bn(function(ct,at){return H&&(ct.OFFSET=V),V})}else if(T in U){var st=U[T];return Hr(st,function(ct,at){var St=ct.invoke(at,st);return H&&(ct.OFFSET=St,E.optional(function(){ct.assert(at,St+">=0","invalid "+T)})),St})}else if(H&&$)return bn(function(ct,at){return ct.OFFSET="0",0});return null}var L=F(hf,!0);function O(){if(Es in P){var T=P[Es]|0;return E.command(typeof T=="number"&&T>=0,"invalid vertex count",M.commandStr),bn(function(){return T})}else if(Es in U){var H=U[Es];return Hr(H,function(ct,at){var St=ct.invoke(at,H);return E.optional(function(){ct.assert(at,"typeof "+St+'==="number"&&'+St+">=0&&"+St+"===("+St+"|0)","invalid vertex count")}),St})}else if($)if(P0($)){if($)return L?new kr(L.thisDep,L.contextDep,L.propDep,function(ct,at){var St=at.def(ct.ELEMENTS,".vertCount-",ct.OFFSET);return E.optional(function(){ct.assert(at,St+">=0","invalid vertex offset/element buffer too small")}),St}):bn(function(ct,at){return at.def(ct.ELEMENTS,".vertCount")});var V=bn(function(){return-1});return E.optional(function(){V.MISSING=!0}),V}else{var st=new kr($.thisDep||L.thisDep,$.contextDep||L.contextDep,$.propDep||L.propDep,function(ct,at){var St=ct.ELEMENTS;return ct.OFFSET?at.def(St,"?",St,".vertCount-",ct.OFFSET,":-1"):at.def(St,"?",St,".vertCount:-1")});return E.optional(function(){st.DYNAMIC=!0}),st}return null}return{elements:$,primitive:I(),count:O(),instances:F(uf,!1),offset:L}}function wn(A,M){var P=A.static,U=A.dynamic,W={};return mt.forEach(function($){var I=Pt($);function F(L,O){if($ in P){var T=L(P[$]);W[I]=bn(function(){return T})}else if($ in U){var H=U[$];W[I]=Hr(H,function(V,st){return O(V,st,V.invoke(st,H))})}}switch($){case yv:case dv:case uv:case Ev:case vv:case kv:case wv:case _v:case Mv:case xv:return F(function(L){return E.commandType(L,"boolean",$,M.commandStr),L},function(L,O,T){return E.optional(function(){L.assert(O,"typeof "+T+'==="boolean"',"invalid flag "+$,L.commandStr)}),T});case mv:return F(function(L){return E.commandParameter(L,Ei,"invalid "+$,M.commandStr),Ei[L]},function(L,O,T){var H=L.constants.compareFuncs;return E.optional(function(){L.assert(O,T+" in "+H,"invalid "+$+", must be one of "+Object.keys(Ei))}),O.def(H,"[",T,"]")});case gv:return F(function(L){return E.command(dn(L)&&L.length===2&&typeof L[0]=="number"&&typeof L[1]=="number"&&L[0]<=L[1],"depth range is 2d array",M.commandStr),L},function(L,O,T){E.optional(function(){L.assert(O,L.shared.isArrayLike+"("+T+")&&"+T+".length===2&&typeof "+T+'[0]==="number"&&typeof '+T+'[1]==="number"&&'+T+"[0]<="+T+"[1]","depth range must be a 2d array")});var H=O.def("+",T,"[0]"),V=O.def("+",T,"[1]");return[H,V]});case T1:return F(function(L){E.commandType(L,"object","blend.func",M.commandStr);var O="srcRGB"in L?L.srcRGB:L.src,T="srcAlpha"in L?L.srcAlpha:L.src,H="dstRGB"in L?L.dstRGB:L.dst,V="dstAlpha"in L?L.dstAlpha:L.dst;return E.commandParameter(O,Ja,I+".srcRGB",M.commandStr),E.commandParameter(T,Ja,I+".srcAlpha",M.commandStr),E.commandParameter(H,Ja,I+".dstRGB",M.commandStr),E.commandParameter(V,Ja,I+".dstAlpha",M.commandStr),E.command($v.indexOf(O+", "+H)===-1,"unallowed blending combination (srcRGB, dstRGB) = ("+O+", "+H+")",M.commandStr),[Ja[O],Ja[H],Ja[T],Ja[V]]},function(L,O,T){var H=L.constants.blendFuncs;E.optional(function(){L.assert(O,T+"&&typeof "+T+'==="object"',"invalid blend func, must be an object")});function V(oe,Me){var $e=O.def('"',oe,Me,'" in ',T,"?",T,".",oe,Me,":",T,".",oe);return E.optional(function(){L.assert(O,$e+" in "+H,"invalid "+$+"."+oe+Me+", must be one of "+Object.keys(Ja))}),$e}var st=V("src","RGB"),ct=V("dst","RGB");E.optional(function(){var oe=L.constants.invalidBlendCombinations;L.assert(O,oe+".indexOf("+st+'+", "+'+ct+") === -1 ","unallowed blending combination for (srcRGB, dstRGB)")});var at=O.def(H,"[",st,"]"),St=O.def(H,"[",V("src","Alpha"),"]"),fe=O.def(H,"[",ct,"]"),Be=O.def(H,"[",V("dst","Alpha"),"]");return[at,fe,St,Be]});case k1:return F(function(L){if(typeof L=="string")return E.commandParameter(L,rt,"invalid "+$,M.commandStr),[rt[L],rt[L]];if(typeof L=="object")return E.commandParameter(L.rgb,rt,$+".rgb",M.commandStr),E.commandParameter(L.alpha,rt,$+".alpha",M.commandStr),[rt[L.rgb],rt[L.alpha]];E.commandRaise("invalid blend.equation",M.commandStr)},function(L,O,T){var H=L.constants.blendEquations,V=O.def(),st=O.def(),ct=L.cond("typeof ",T,'==="string"');return E.optional(function(){function at(St,fe,Be){L.assert(St,Be+" in "+H,"invalid "+fe+", must be one of "+Object.keys(rt))}at(ct.then,$,T),L.assert(ct.else,T+"&&typeof "+T+'==="object"',"invalid "+$),at(ct.else,$+".rgb",T+".rgb"),at(ct.else,$+".alpha",T+".alpha")}),ct.then(V,"=",st,"=",H,"[",T,"];"),ct.else(V,"=",H,"[",T,".rgb];",st,"=",H,"[",T,".alpha];"),O(ct),[V,st]});case pv:return F(function(L){return E.command(dn(L)&&L.length===4,"blend.color must be a 4d array",M.commandStr),Ye(4,function(O){return+L[O]})},function(L,O,T){return E.optional(function(){L.assert(O,L.shared.isArrayLike+"("+T+")&&"+T+".length===4","blend.color must be a 4d array")}),Ye(4,function(H){return O.def("+",T,"[",H,"]")})});case Sv:return F(function(L){return E.commandType(L,"number",I,M.commandStr),L|0},function(L,O,T){return E.optional(function(){L.assert(O,"typeof "+T+'==="number"',"invalid stencil.mask")}),O.def(T,"|0")});case C1:return F(function(L){E.commandType(L,"object",I,M.commandStr);var O=L.cmp||"keep",T=L.ref||0,H="mask"in L?L.mask:-1;return E.commandParameter(O,Ei,$+".cmp",M.commandStr),E.commandType(T,"number",$+".ref",M.commandStr),E.commandType(H,"number",$+".mask",M.commandStr),[Ei[O],T,H]},function(L,O,T){var H=L.constants.compareFuncs;E.optional(function(){function at(){L.assert(O,Array.prototype.join.call(arguments,""),"invalid stencil.func")}at(T+"&&typeof ",T,'==="object"'),at('!("cmp" in ',T,")||(",T,".cmp in ",H,")")});var V=O.def('"cmp" in ',T,"?",H,"[",T,".cmp]",":",C0),st=O.def(T,".ref|0"),ct=O.def('"mask" in ',T,"?",T,".mask|0:-1");return[V,st,ct]});case O1:case Oc:return F(function(L){E.commandType(L,"object",I,M.commandStr);var O=L.fail||"keep",T=L.zfail||"keep",H=L.zpass||"keep";return E.commandParameter(O,O0,$+".fail",M.commandStr),E.commandParameter(T,O0,$+".zfail",M.commandStr),E.commandParameter(H,O0,$+".zpass",M.commandStr),[$===Oc?Ss:Bc,O0[O],O0[T],O0[H]]},function(L,O,T){var H=L.constants.stencilOps;E.optional(function(){L.assert(O,T+"&&typeof "+T+'==="object"',"invalid "+$)});function V(st){return E.optional(function(){L.assert(O,'!("'+st+'" in '+T+")||("+T+"."+st+" in "+H+")","invalid "+$+"."+st+", must be one of "+Object.keys(O0))}),O.def('"',st,'" in ',T,"?",H,"[",T,".",st,"]:",C0)}return[$===Oc?Ss:Bc,V("fail"),V("zfail"),V("zpass")]});case N1:return F(function(L){E.commandType(L,"object",I,M.commandStr);var O=L.factor|0,T=L.units|0;return E.commandType(O,"number",I+".factor",M.commandStr),E.commandType(T,"number",I+".units",M.commandStr),[O,T]},function(L,O,T){E.optional(function(){L.assert(O,T+"&&typeof "+T+'==="object"',"invalid "+$)});var H=O.def(T,".factor|0"),V=O.def(T,".units|0");return[H,V]});case bv:return F(function(L){var O=0;return L==="front"?O=Bc:L==="back"&&(O=Ss),E.command(!!O,I,M.commandStr),O},function(L,O,T){return E.optional(function(){L.assert(O,T+'==="front"||'+T+'==="back"',"invalid cull.face")}),O.def(T,'==="front"?',Bc,":",Ss)});case z1:return F(function(L){return E.command(typeof L=="number"&&L>=tt.lineWidthDims[0]&&L<=tt.lineWidthDims[1],"invalid line width, must be a positive number between "+tt.lineWidthDims[0]+" and "+tt.lineWidthDims[1],M.commandStr),L},function(L,O,T){return E.optional(function(){L.assert(O,"typeof "+T+'==="number"&&'+T+">="+tt.lineWidthDims[0]+"&&"+T+"<="+tt.lineWidthDims[1],"invalid line width")}),T});case L1:return F(function(L){return E.commandParameter(L,G1,I,M.commandStr),G1[L]},function(L,O,T){return E.optional(function(){L.assert(O,T+'==="cw"||'+T+'==="ccw"',"invalid frontFace, must be one of cw,ccw")}),O.def(T+'==="cw"?'+Rv+":"+D1)});case A1:return F(function(L){return E.command(dn(L)&&L.length===4,"color.mask must be length 4 array",M.commandStr),L.map(function(O){return!!O})},function(L,O,T){return E.optional(function(){L.assert(O,L.shared.isArrayLike+"("+T+")&&"+T+".length===4","invalid color.mask")}),Ye(4,function(H){return"!!"+T+"["+H+"]"})});case R1:return F(function(L){E.command(typeof L=="object"&&L,I,M.commandStr);var O="value"in L?L.value:1,T=!!L.invert;return E.command(typeof O=="number"&&O>=0&&O<=1,"sample.coverage.value must be a number between 0 and 1",M.commandStr),[O,T]},function(L,O,T){E.optional(function(){L.assert(O,T+"&&typeof "+T+'==="object"',"invalid sample.coverage")});var H=O.def('"value" in ',T,"?+",T,".value:1"),V=O.def("!!",T,".invert");return[H,V]})}}),W}function Fn(A,M){var P=A.static,U=A.dynamic,W={};return Object.keys(P).forEach(function($){var I=P[$],F;if(typeof I=="number"||typeof I=="boolean")F=bn(function(){return I});else if(typeof I=="function"){var L=I._reglType;L==="texture2d"||L==="textureCube"?F=bn(function(O){return O.link(I)}):L==="framebuffer"||L==="framebufferCube"?(E.command(I.color.length>0,'missing color attachment for framebuffer sent to uniform "'+$+'"',M.commandStr),F=bn(function(O){return O.link(I.color[0])})):E.commandRaise('invalid data for uniform "'+$+'"',M.commandStr)}else dn(I)?F=bn(function(O){var T=O.global.def("[",Ye(I.length,function(H){return E.command(typeof I[H]=="number"||typeof I[H]=="boolean","invalid uniform "+$,O.commandStr),I[H]}),"]");return T}):E.commandRaise('invalid or missing data for uniform "'+$+'"',M.commandStr);F.value=I,W[$]=F}),Object.keys(U).forEach(function($){var I=U[$];W[$]=Hr(I,function(F,L){return F.invoke(L,I)})}),W}function ro(A,M){var P=A.static,U=A.dynamic,W={};return Object.keys(P).forEach(function($){var I=P[$],F=S.id($),L=new j;if(_f(I))L.state=bi,L.buffer=it.getBuffer(it.create(I,Mi,!1,!0)),L.type=0;else{var O=it.getBuffer(I);if(O)L.state=bi,L.buffer=O,L.type=0;else if(E.command(typeof I=="object"&&I,"invalid data for attribute "+$,M.commandStr),"constant"in I){var T=I.constant;L.buffer="null",L.state=w1,typeof T=="number"?L.x=T:(E.command(dn(T)&&T.length>0&&T.length<=4,"invalid constant for attribute "+$,M.commandStr),yi.forEach(function(fe,Be){Be<T.length&&(L[fe]=T[Be])}))}else{_f(I.buffer)?O=it.getBuffer(it.create(I.buffer,Mi,!1,!0)):O=it.getBuffer(I.buffer),E.command(!!O,'missing buffer for attribute "'+$+'"',M.commandStr);var H=I.offset|0;E.command(H>=0,'invalid offset for attribute "'+$+'"',M.commandStr);var V=I.stride|0;E.command(V>=0&&V<256,'invalid stride for attribute "'+$+'", must be integer betweeen [0, 255]',M.commandStr);var st=I.size|0;E.command(!("size"in I)||st>0&&st<=4,'invalid size for attribute "'+$+'", must be 1,2,3,4',M.commandStr);var ct=!!I.normalized,at=0;"type"in I&&(E.commandParameter(I.type,ms,"invalid type for attribute "+$,M.commandStr),at=ms[I.type]);var St=I.divisor|0;"divisor"in I&&(E.command(St===0||kt,'cannot specify divisor for attribute "'+$+'", instancing not supported',M.commandStr),E.command(St>=0,'invalid divisor for attribute "'+$+'"',M.commandStr)),E.optional(function(){var fe=M.commandStr,Be=["buffer","offset","divisor","normalized","type","size","stride"];Object.keys(I).forEach(function(oe){E.command(Be.indexOf(oe)>=0,'unknown parameter "'+oe+'" for attribute pointer "'+$+'" (valid parameters are '+Be+")",fe)})}),L.buffer=O,L.state=bi,L.size=st,L.normalized=ct,L.type=at||O.dtype,L.offset=H,L.stride=V,L.divisor=St}}W[$]=bn(function(fe,Be){var oe=fe.attribCache;if(F in oe)return oe[F];var Me={isStream:!1};return Object.keys(L).forEach(function($e){Me[$e]=L[$e]}),L.buffer&&(Me.buffer=fe.link(L.buffer),Me.type=Me.type||Me.buffer+".dtype"),oe[F]=Me,Me})}),Object.keys(U).forEach(function($){var I=U[$];function F(L,O){var T=L.invoke(O,I),H=L.shared,V=L.constants,st=H.isBufferArgs,ct=H.buffer;E.optional(function(){L.assert(O,T+"&&(typeof "+T+'==="object"||typeof '+T+'==="function")&&('+st+"("+T+")||"+ct+".getBuffer("+T+")||"+ct+".getBuffer("+T+".buffer)||"+st+"("+T+'.buffer)||("constant" in '+T+"&&(typeof "+T+'.constant==="number"||'+H.isArrayLike+"("+T+".constant))))",'invalid dynamic attribute "'+$+'"')});var at={isStream:O.def(!1)},St=new j;St.state=bi,Object.keys(St).forEach(function(Me){at[Me]=O.def(""+St[Me])});var fe=at.buffer,Be=at.type;O("if(",st,"(",T,")){",at.isStream,"=true;",fe,"=",ct,".createStream(",Mi,",",T,");",Be,"=",fe,".dtype;","}else{",fe,"=",ct,".getBuffer(",T,");","if(",fe,"){",Be,"=",fe,".dtype;",'}else if("constant" in ',T,"){",at.state,"=",w1,";","if(typeof "+T+'.constant === "number"){',at[yi[0]],"=",T,".constant;",yi.slice(1).map(function(Me){return at[Me]}).join("="),"=0;","}else{",yi.map(function(Me,$e){return at[Me]+"="+T+".constant.length>"+$e+"?"+T+".constant["+$e+"]:0;"}).join(""),"}}else{","if(",st,"(",T,".buffer)){",fe,"=",ct,".createStream(",Mi,",",T,".buffer);","}else{",fe,"=",ct,".getBuffer(",T,".buffer);","}",Be,'="type" in ',T,"?",V.glTypes,"[",T,".type]:",fe,".dtype;",at.normalized,"=!!",T,".normalized;");function oe(Me){O(at[Me],"=",T,".",Me,"|0;")}return oe("size"),oe("offset"),oe("stride"),oe("divisor"),O("}}"),O.exit("if(",at.isStream,"){",ct,".destroyStream(",fe,");","}"),at}W[$]=Hr(I,F)}),W}function Ln(A,M){var P=A.static,U=A.dynamic;if(Fc in P){var W=P[Fc];return W!==null&&Tt.getVAO(W)===null&&(W=Tt.createVAO(W)),bn(function(I){return I.link(Tt.getVAO(W))})}else if(Fc in U){var $=U[Fc];return Hr($,function(I,F){var L=I.invoke(F,$);return F.def(I.shared.vao+".getVAO("+L+")")})}return null}function Wo(A){var M=A.static,P=A.dynamic,U={};return Object.keys(M).forEach(function(W){var $=M[W];U[W]=bn(function(I,F){return typeof $=="number"||typeof $=="boolean"?""+$:I.link($)})}),Object.keys(P).forEach(function(W){var $=P[W];U[W]=Hr($,function(I,F){return I.invoke(F,$)})}),U}function _n(A,M,P,U,W){var $=A.static,I=A.dynamic;E.optional(function(){var oe=[ws,Ic,$c,_s,Ms,hf,Es,uf,Pc,Fc].concat(mt);function Me($e){Object.keys($e).forEach(function(xo){E.command(oe.indexOf(xo)>=0,'unknown parameter "'+xo+'"',W.commandStr)})}Me($),Me(I)});var F=Ie(A,M),L=ee(A,W),O=Ze(A,L,W),T=go(A,W),H=wn(A,W),V=We(A,W,F);function st(oe){var Me=O[oe];Me&&(H[oe]=Me)}st(u0),st(Pt(ff));var ct=Object.keys(H).length>0,at={framebuffer:L,draw:T,shader:V,state:H,dirty:ct,scopeVAO:null,drawVAO:null,useVAO:!1,attributes:{}};if(at.profile=He(A,W),at.uniforms=Fn(P,W),at.drawVAO=at.scopeVAO=Ln(A,W),!at.drawVAO&&V.program&&!F&&R.angle_instanced_arrays){var St=!0,fe=V.program.attributes.map(function(oe){var Me=M.static[oe];return St=St&&!!Me,Me});if(St&&fe.length>0){var Be=Tt.getVAO(Tt.createVAO(fe));at.drawVAO=new kr(null,null,null,function(oe,Me){return oe.link(Be)}),at.useVAO=!0}}return F?at.useVAO=!0:at.attributes=ro(M,W),at.context=Wo(U,W),at}function zn(A,M,P){var U=A.shared,W=U.context,$=A.scope();Object.keys(P).forEach(function(I){M.save(W,"."+I);var F=P[I],L=F.append(A,M);Array.isArray(L)?$(W,".",I,"=[",L.join(),"];"):$(W,".",I,"=",L,";")}),M($)}function Nn(A,M,P,U){var W=A.shared,$=W.gl,I=W.framebuffer,F;Ut&&(F=M.def(W.extensions,".webgl_draw_buffers"));var L=A.constants,O=L.drawBuffer,T=L.backBuffer,H;P?H=P.append(A,M):H=M.def(I,".next"),U||M("if(",H,"!==",I,".cur){"),M("if(",H,"){",$,".bindFramebuffer(",Iv,",",H,".framebuffer);"),Ut&&M(F,".drawBuffersWEBGL(",O,"[",H,".colorAttachments.length]);"),M("}else{",$,".bindFramebuffer(",Iv,",null);"),Ut&&M(F,".drawBuffersWEBGL(",T,");"),M("}",I,".cur=",H,";"),U||M("}")}function Kn(A,M,P){var U=A.shared,W=U.gl,$=A.current,I=A.next,F=U.current,L=U.next,O=A.cond(F,".dirty");mt.forEach(function(T){var H=Pt(T);if(!(H in P.state)){var V,st;if(H in I){V=I[H],st=$[H];var ct=Ye(ut[H].length,function(St){return O.def(V,"[",St,"]")});O(A.cond(ct.map(function(St,fe){return St+"!=="+st+"["+fe+"]"}).join("||")).then(W,".",dt[H],"(",ct,");",ct.map(function(St,fe){return st+"["+fe+"]="+St}).join(";"),";"))}else{V=O.def(L,".",H);var at=A.cond(V,"!==",F,".",H);O(at),H in Ot?at(A.cond(V).then(W,".enable(",Ot[H],");").else(W,".disable(",Ot[H],");"),F,".",H,"=",V,";"):at(W,".",dt[H],"(",V,");",F,".",H,"=",V,";")}}}),Object.keys(P.state).length===0&&O(F,".dirty=false;"),M(O)}function ar(A,M,P,U){var W=A.shared,$=A.current,I=W.current,F=W.gl;qv(Object.keys(P)).forEach(function(L){var O=P[L];if(!(U&&!U(O))){var T=O.append(A,M);if(Ot[L]){var H=Ot[L];P0(O)?T?M(F,".enable(",H,");"):M(F,".disable(",H,");"):M(A.cond(T).then(F,".enable(",H,");").else(F,".disable(",H,");")),M(I,".",L,"=",T,";")}else if(dn(T)){var V=$[L];M(F,".",dt[L],"(",T,");",T.map(function(st,ct){return V+"["+ct+"]="+st}).join(";"),";")}else M(F,".",dt[L],"(",T,");",I,".",L,"=",T,";")}})}function pn(A,M){kt&&(A.instancing=M.def(A.shared.extensions,".angle_instanced_arrays"))}function Ue(A,M,P,U,W){var $=A.shared,I=A.stats,F=$.current,L=$.timer,O=P.profile;function T(){return typeof performance=="undefined"?"Date.now()":"performance.now()"}var H,V;function st(oe){H=M.def(),oe(H,"=",T(),";"),typeof W=="string"?oe(I,".count+=",W,";"):oe(I,".count++;"),bt&&(U?(V=M.def(),oe(V,"=",L,".getNumPendingQueries();")):oe(L,".beginQuery(",I,");"))}function ct(oe){oe(I,".cpuTime+=",T(),"-",H,";"),bt&&(U?oe(L,".pushScopeStats(",V,",",L,".getNumPendingQueries(),",I,");"):oe(L,".endQuery();"))}function at(oe){var Me=M.def(F,".profile");M(F,".profile=",oe,";"),M.exit(F,".profile=",Me,";")}var St;if(O){if(P0(O)){O.enable?(st(M),ct(M.exit),at("true")):at("false");return}St=O.append(A,M),at(St)}else St=M.def(F,".profile");var fe=A.block();st(fe),M("if(",St,"){",fe,"}");var Be=A.block();ct(Be),M.exit("if(",St,"){",Be,"}")}function sr(A,M,P,U,W){var $=A.shared;function I(L){switch(L){case df:case mf:case yf:return 2;case pf:case gf:case bf:return 3;case vf:case xf:case wf:return 4;default:return 1}}function F(L,O,T){var H=$.gl,V=M.def(L,".location"),st=M.def($.attributes,"[",V,"]"),ct=T.state,at=T.buffer,St=[T.x,T.y,T.z,T.w],fe=["buffer","normalized","offset","stride"];function Be(){M("if(!",st,".buffer){",H,".enableVertexAttribArray(",V,");}");var Me=T.type,$e;if(T.size?$e=M.def(T.size,"||",O):$e=O,M("if(",st,".type!==",Me,"||",st,".size!==",$e,"||",fe.map(function(cn){return st+"."+cn+"!=="+T[cn]}).join("||"),"){",H,".bindBuffer(",Mi,",",at,".buffer);",H,".vertexAttribPointer(",[V,$e,Me,T.normalized,T.stride,T.offset],");",st,".type=",Me,";",st,".size=",$e,";",fe.map(function(cn){return st+"."+cn+"="+T[cn]+";"}).join(""),"}"),kt){var xo=T.divisor;M("if(",st,".divisor!==",xo,"){",A.instancing,".vertexAttribDivisorANGLE(",[V,xo],");",st,".divisor=",xo,";}")}}function oe(){M("if(",st,".buffer){",H,".disableVertexAttribArray(",V,");",st,".buffer=null;","}if(",yi.map(function(Me,$e){return st+"."+Me+"!=="+St[$e]}).join("||"),"){",H,".vertexAttrib4f(",V,",",St,");",yi.map(function(Me,$e){return st+"."+Me+"="+St[$e]+";"}).join(""),"}")}ct===bi?Be():ct===w1?oe():(M("if(",ct,"===",bi,"){"),Be(),M("}else{"),oe(),M("}"))}U.forEach(function(L){var O=L.name,T=P.attributes[O],H;if(T){if(!W(T))return;H=T.append(A,M)}else{if(!W(Dv))return;var V=A.scopeAttrib(O);E.optional(function(){A.assert(M,V+".state","missing attribute "+O)}),H={},Object.keys(new j).forEach(function(st){H[st]=M.def(V,".",st)})}F(A.link(L),I(L.info.type),H)})}function ko(A,M,P,U,W){for(var $=A.shared,I=$.gl,F,L=0;L<U.length;++L){var O=U[L],T=O.name,H=O.info.type,V=P.uniforms[T],st=A.link(O),ct=st+".location",at;if(V){if(!W(V))continue;if(P0(V)){var St=V.value;if(E.command(St!==null&&typeof St!="undefined",'missing uniform "'+T+'"',A.commandStr),H===Hc||H===Uc){E.command(typeof St=="function"&&(H===Hc&&(St._reglType==="texture2d"||St._reglType==="framebuffer")||H===Uc&&(St._reglType==="textureCube"||St._reglType==="framebufferCube")),"invalid texture for uniform "+T,A.commandStr);var fe=A.link(St._texture||St.color[0]._texture);M(I,".uniform1i(",ct,",",fe+".bind());"),M.exit(fe,".unbind();")}else if(H===qc||H===Dc||H===Gc){E.optional(function(){E.command(dn(St),"invalid matrix for uniform "+T,A.commandStr),E.command(H===qc&&St.length===4||H===Dc&&St.length===9||H===Gc&&St.length===16,"invalid length for matrix uniform "+T,A.commandStr)});var Be=A.global.def("new Float32Array(["+Array.prototype.slice.call(St)+"])"),oe=2;H===Dc?oe=3:H===Gc&&(oe=4),M(I,".uniformMatrix",oe,"fv(",ct,",false,",Be,");")}else{switch(H){case $1:E.commandType(St,"number","uniform "+T,A.commandStr),F="1f";break;case df:E.command(dn(St)&&St.length===2,"uniform "+T,A.commandStr),F="2f";break;case pf:E.command(dn(St)&&St.length===3,"uniform "+T,A.commandStr),F="3f";break;case vf:E.command(dn(St)&&St.length===4,"uniform "+T,A.commandStr),F="4f";break;case q1:E.commandType(St,"boolean","uniform "+T,A.commandStr),F="1i";break;case F1:E.commandType(St,"number","uniform "+T,A.commandStr),F="1i";break;case yf:E.command(dn(St)&&St.length===2,"uniform "+T,A.commandStr),F="2i";break;case mf:E.command(dn(St)&&St.length===2,"uniform "+T,A.commandStr),F="2i";break;case bf:E.command(dn(St)&&St.length===3,"uniform "+T,A.commandStr),F="3i";break;case gf:E.command(dn(St)&&St.length===3,"uniform "+T,A.commandStr),F="3i";break;case wf:E.command(dn(St)&&St.length===4,"uniform "+T,A.commandStr),F="4i";break;case xf:E.command(dn(St)&&St.length===4,"uniform "+T,A.commandStr),F="4i";break}M(I,".uniform",F,"(",ct,",",dn(St)?Array.prototype.slice.call(St):St,");")}continue}else at=V.append(A,M)}else{if(!W(Dv))continue;at=M.def($.uniforms,"[",S.id(T),"]")}H===Hc?(E(!Array.isArray(at),"must specify a scalar prop for textures"),M("if(",at,"&&",at,'._reglType==="framebuffer"){',at,"=",at,".color[0];","}")):H===Uc&&(E(!Array.isArray(at),"must specify a scalar prop for cube maps"),M("if(",at,"&&",at,'._reglType==="framebufferCube"){',at,"=",at,".color[0];","}")),E.optional(function(){function Tr(Ca,Vv){A.assert(M,Ca,'bad data or missing for uniform "'+T+'".  '+Vv)}function H1(Ca){E(!Array.isArray(at),"must not specify an array type for uniform"),Tr("typeof "+at+'==="'+Ca+'"',"invalid type, expected "+Ca)}function pa(Ca,Vv){Array.isArray(at)?E(at.length===Ca,"must have length "+Ca):Tr($.isArrayLike+"("+at+")&&"+at+".length==="+Ca,"invalid vector, should have length "+Ca,A.commandStr)}function Wv(Ca){E(!Array.isArray(at),"must not specify a value type"),Tr("typeof "+at+'==="function"&&'+at+'._reglType==="texture'+(Ca===zv?"2d":"Cube")+'"',"invalid texture type",A.commandStr)}switch(H){case F1:H1("number");break;case mf:pa(2,"number");break;case gf:pa(3,"number");break;case xf:pa(4,"number");break;case $1:H1("number");break;case df:pa(2,"number");break;case pf:pa(3,"number");break;case vf:pa(4,"number");break;case q1:H1("boolean");break;case yf:pa(2,"boolean");break;case bf:pa(3,"boolean");break;case wf:pa(4,"boolean");break;case qc:pa(4,"number");break;case Dc:pa(9,"number");break;case Gc:pa(16,"number");break;case Hc:Wv(zv);break;case Uc:Wv(Pw);break}});var Me=1;switch(H){case Hc:case Uc:var $e=M.def(at,"._texture");M(I,".uniform1i(",ct,",",$e,".bind());"),M.exit($e,".unbind();");continue;case F1:case q1:F="1i";break;case mf:case yf:F="2i",Me=2;break;case gf:case bf:F="3i",Me=3;break;case xf:case wf:F="4i",Me=4;break;case $1:F="1f";break;case df:F="2f",Me=2;break;case pf:F="3f",Me=3;break;case vf:F="4f",Me=4;break;case qc:F="Matrix2fv";break;case Dc:F="Matrix3fv";break;case Gc:F="Matrix4fv";break}if(M(I,".uniform",F,"(",ct,","),F.charAt(0)==="M"){var xo=Math.pow(H-qc+2,2),cn=A.global.def("new Float32Array(",xo,")");Array.isArray(at)?M("false,(",Ye(xo,function(Tr){return cn+"["+Tr+"]="+at[Tr]}),",",cn,")"):M("false,(Array.isArray(",at,")||",at," instanceof Float32Array)?",at,":(",Ye(xo,function(Tr){return cn+"["+Tr+"]="+at+"["+Tr+"]"}),",",cn,")")}else Me>1?M(Ye(Me,function(Tr){return Array.isArray(at)?at[Tr]:at+"["+Tr+"]"})):(E(!Array.isArray(at),"uniform value must not be an array"),M(at));M(");")}}function be(A,M,P,U){var W=A.shared,$=W.gl,I=W.draw,F=U.draw;function L(){var $e=F.elements,xo,cn=M;return $e?(($e.contextDep&&U.contextDynamic||$e.propDep)&&(cn=P),xo=$e.append(A,cn)):xo=cn.def(I,".",_s),xo&&cn("if("+xo+")"+$+".bindBuffer("+Rw+","+xo+".buffer.buffer);"),xo}function O(){var $e=F.count,xo,cn=M;return $e?(($e.contextDep&&U.contextDynamic||$e.propDep)&&(cn=P),xo=$e.append(A,cn),E.optional(function(){$e.MISSING&&A.assert(M,"false","missing vertex count"),$e.DYNAMIC&&A.assert(cn,xo+">=0","missing vertex count")})):(xo=cn.def(I,".",Es),E.optional(function(){A.assert(cn,xo+">=0","missing vertex count")})),xo}var T=L();function H($e){var xo=F[$e];return xo?xo.contextDep&&U.contextDynamic||xo.propDep?xo.append(A,P):xo.append(A,M):M.def(I,".",$e)}var V=H(Ms),st=H(hf),ct=O();if(typeof ct=="number"){if(ct===0)return}else P("if(",ct,"){"),P.exit("}");var at,St;kt&&(at=H(uf),St=A.instancing);var fe=T+".type",Be=F.elements&&P0(F.elements);function oe(){function $e(){P(St,".drawElementsInstancedANGLE(",[V,ct,fe,st+"<<(("+fe+"-"+lv+")>>1)",at],");")}function xo(){P(St,".drawArraysInstancedANGLE(",[V,st,ct,at],");")}T?Be?$e():(P("if(",T,"){"),$e(),P("}else{"),xo(),P("}")):xo()}function Me(){function $e(){P($+".drawElements("+[V,ct,fe,st+"<<(("+fe+"-"+lv+")>>1)"]+");")}function xo(){P($+".drawArrays("+[V,st,ct]+");")}T?Be?$e():(P("if(",T,"){"),$e(),P("}else{"),xo(),P("}")):xo()}kt&&(typeof at!="number"||at>=0)?typeof at=="string"?(P("if(",at,">0){"),oe(),P("}else if(",at,"<0){"),Me(),P("}")):oe():Me()}function oo(A,M,P,U,W){var $=Ae(),I=$.proc("body",W);return E.optional(function(){$.commandStr=M.commandStr,$.command=$.link(M.commandStr)}),kt&&($.instancing=I.def($.shared.extensions,".angle_instanced_arrays")),A($,I,P,U),$.compile().body}function ho(A,M,P,U){pn(A,M),P.useVAO?P.drawVAO?M(A.shared.vao,".setVAO(",P.drawVAO.append(A,M),");"):M(A.shared.vao,".setVAO(",A.shared.vao,".targetVAO);"):(M(A.shared.vao,".setVAO(null);"),sr(A,M,P,U.attributes,function(){return!0})),ko(A,M,P,U.uniforms,function(){return!0}),be(A,M,M,P)}function vn(A,M){var P=A.proc("draw",1);pn(A,P),zn(A,P,M.context),Nn(A,P,M.framebuffer),Kn(A,P,M),ar(A,P,M.state),Ue(A,P,M,!1,!0);var U=M.shader.progVar.append(A,P);if(P(A.shared.gl,".useProgram(",U,".program);"),M.shader.program)ho(A,P,M,M.shader.program);else{P(A.shared.vao,".setVAO(null);");var W=A.global.def("{}"),$=P.def(U,".id"),I=P.def(W,"[",$,"]");P(A.cond(I).then(I,".call(this,a0);").else(I,"=",W,"[",$,"]=",A.link(function(F){return oo(ho,A,M,F,1)}),"(",U,");",I,".call(this,a0);"))}Object.keys(M.state).length>0&&P(A.shared.current,".dirty=true;")}function t0(A,M,P,U){A.batchId="a1",pn(A,M);function W(){return!0}sr(A,M,P,U.attributes,W),ko(A,M,P,U.uniforms,W),be(A,M,M,P)}function ks(A,M,P,U){pn(A,M);var W=P.contextDep,$=M.def(),I="a0",F="a1",L=M.def();A.shared.props=L,A.batchId=$;var O=A.scope(),T=A.scope();M(O.entry,"for(",$,"=0;",$,"<",F,";++",$,"){",L,"=",I,"[",$,"];",T,"}",O.exit);function H(fe){return fe.contextDep&&W||fe.propDep}function V(fe){return!H(fe)}if(P.needsContext&&zn(A,T,P.context),P.needsFramebuffer&&Nn(A,T,P.framebuffer),ar(A,T,P.state,H),P.profile&&H(P.profile)&&Ue(A,T,P,!1,!0),U)P.useVAO?P.drawVAO?H(P.drawVAO)?T(A.shared.vao,".setVAO(",P.drawVAO.append(A,T),");"):O(A.shared.vao,".setVAO(",P.drawVAO.append(A,O),");"):O(A.shared.vao,".setVAO(",A.shared.vao,".targetVAO);"):(O(A.shared.vao,".setVAO(null);"),sr(A,O,P,U.attributes,V),sr(A,T,P,U.attributes,H)),ko(A,O,P,U.uniforms,V),ko(A,T,P,U.uniforms,H),be(A,O,T,P);else{var st=A.global.def("{}"),ct=P.shader.progVar.append(A,T),at=T.def(ct,".id"),St=T.def(st,"[",at,"]");T(A.shared.gl,".useProgram(",ct,".program);","if(!",St,"){",St,"=",st,"[",at,"]=",A.link(function(fe){return oo(t0,A,P,fe,2)}),"(",ct,");}",St,".call(this,a0[",$,"],",$,");")}}function z(A,M){var P=A.proc("batch",2);A.batchId="0",pn(A,P);var U=!1,W=!0;Object.keys(M.context).forEach(function(st){U=U||M.context[st].propDep}),U||(zn(A,P,M.context),W=!1);var $=M.framebuffer,I=!1;$?($.propDep?U=I=!0:$.contextDep&&U&&(I=!0),I||Nn(A,P,$)):Nn(A,P,null),M.state.viewport&&M.state.viewport.propDep&&(U=!0);function F(st){return st.contextDep&&U||st.propDep}Kn(A,P,M),ar(A,P,M.state,function(st){return!F(st)}),(!M.profile||!F(M.profile))&&Ue(A,P,M,!1,"a1"),M.contextDep=U,M.needsContext=W,M.needsFramebuffer=I;var L=M.shader.progVar;if(L.contextDep&&U||L.propDep)ks(A,P,M,null);else{var O=L.append(A,P);if(P(A.shared.gl,".useProgram(",O,".program);"),M.shader.program)ks(A,P,M,M.shader.program);else{P(A.shared.vao,".setVAO(null);");var T=A.global.def("{}"),H=P.def(O,".id"),V=P.def(T,"[",H,"]");P(A.cond(V).then(V,".call(this,a0,a1);").else(V,"=",T,"[",H,"]=",A.link(function(st){return oo(ks,A,M,st,2)}),"(",O,");",V,".call(this,a0,a1);"))}}Object.keys(M.state).length>0&&P(A.shared.current,".dirty=true;")}function et(A,M){var P=A.proc("scope",3);A.batchId="a2";var U=A.shared,W=U.current;zn(A,P,M.context),M.framebuffer&&M.framebuffer.append(A,P),qv(Object.keys(M.state)).forEach(function(I){var F=M.state[I],L=F.append(A,P);dn(L)?L.forEach(function(O,T){P.set(A.next[I],"["+T+"]",O)}):P.set(U.next,"."+I,L)}),Ue(A,P,M,!0,!0),[_s,hf,Es,uf,Ms].forEach(function(I){var F=M.draw[I];F&&P.set(U.draw,"."+I,""+F.append(A,P))}),Object.keys(M.uniforms).forEach(function(I){var F=M.uniforms[I].append(A,P);Array.isArray(F)&&(F="["+F.join()+"]"),P.set(U.uniforms,"["+S.id(I)+"]",F)}),Object.keys(M.attributes).forEach(function(I){var F=M.attributes[I].append(A,P),L=A.scopeAttrib(I);Object.keys(new j).forEach(function(O){P.set(L,"."+O,F[O])})}),M.scopeVAO&&P.set(U.vao,".targetVAO",M.scopeVAO.append(A,P));function $(I){var F=M.shader[I];F&&P.set(U.shader,"."+I,F.append(A,P))}$(Ic),$($c),Object.keys(M.state).length>0&&(P(W,".dirty=true;"),P.exit(W,".dirty=true;")),P("a1(",A.shared.context,",a0,",A.batchId,");")}function Y(A){if(!(typeof A!="object"||dn(A))){for(var M=Object.keys(A),P=0;P<M.length;++P)if(Ct.isDynamic(A[M[P]]))return!0;return!1}}function Qt(A,M,P){var U=M.static[P];if(!U||!Y(U))return;var W=A.global,$=Object.keys(U),I=!1,F=!1,L=!1,O=A.global.def("{}");$.forEach(function(H){var V=U[H];if(Ct.isDynamic(V)){typeof V=="function"&&(V=U[H]=Ct.unbox(V));var st=Hr(V,null);I=I||st.thisDep,L=L||st.propDep,F=F||st.contextDep}else{switch(W(O,".",H,"="),typeof V){case"number":W(V);break;case"string":W('"',V,'"');break;case"object":Array.isArray(V)&&W("[",V.join(),"]");break;default:W(A.link(V));break}W(";")}});function T(H,V){$.forEach(function(st){var ct=U[st];if(Ct.isDynamic(ct)){var at=H.invoke(V,ct);V(O,".",st,"=",at,";")}})}M.dynamic[P]=new Ct.DynamicVariable(lf,{thisDep:I,contextDep:F,propDep:L,ref:O,append:T}),delete M.static[P]}function Je(A,M,P,U,W){var $=Ae();$.stats=$.link(W),Object.keys(M.static).forEach(function(F){Qt($,M,F)}),Nw.forEach(function(F){Qt($,A,F)});var I=_n(A,M,P,U,$);return vn($,I),et($,I),z($,I),e($.compile(),{destroy:function(){I.shader.program.destroy()}})}return{next:Xt,current:ut,procs:function(){var A=Ae(),M=A.proc("poll"),P=A.proc("refresh"),U=A.block();M(U),P(U);var W=A.shared,$=W.gl,I=W.next,F=W.current;U(F,".dirty=false;"),Nn(A,M),Nn(A,P,null,!0);var L;kt&&(L=A.link(kt)),R.oes_vertex_array_object&&P(A.link(R.oes_vertex_array_object),".bindVertexArrayOES(null);");for(var O=0;O<tt.maxAttributes;++O){var T=P.def(W.attributes,"[",O,"]"),H=A.cond(T,".buffer");H.then($,".enableVertexAttribArray(",O,");",$,".bindBuffer(",Mi,",",T,".buffer.buffer);",$,".vertexAttribPointer(",O,",",T,".size,",T,".type,",T,".normalized,",T,".stride,",T,".offset);").else($,".disableVertexAttribArray(",O,");",$,".vertexAttrib4f(",O,",",T,".x,",T,".y,",T,".z,",T,".w);",T,".buffer=null;"),P(H),kt&&P(L,".vertexAttribDivisorANGLE(",O,",",T,".divisor);")}return P(A.shared.vao,".currentVAO=null;",A.shared.vao,".setVAO(",A.shared.vao,".targetVAO);"),Object.keys(Ot).forEach(function(V){var st=Ot[V],ct=U.def(I,".",V),at=A.block();at("if(",ct,"){",$,".enable(",st,")}else{",$,".disable(",st,")}",F,".",V,"=",ct,";"),P(at),M("if(",ct,"!==",F,".",V,"){",at,"}")}),Object.keys(dt).forEach(function(V){var st=dt[V],ct=ut[V],at,St,fe=A.block();if(fe($,".",st,"("),dn(ct)){var Be=ct.length;at=A.global.def(I,".",V),St=A.global.def(F,".",V),fe(Ye(Be,function(oe){return at+"["+oe+"]"}),");",Ye(Be,function(oe){return St+"["+oe+"]="+at+"["+oe+"];"}).join("")),M("if(",Ye(Be,function(oe){return at+"["+oe+"]!=="+St+"["+oe+"]"}).join("||"),"){",fe,"}")}else at=U.def(I,".",V),St=U.def(F,".",V),fe(at,");",F,".",V,"=",at,";"),M("if(",at,"!==",St,"){",fe,"}");P(fe)}),A.compile()}(),compile:Je}}function Qw(){return{vaoCount:0,bufferCount:0,elementsCount:0,framebufferCount:0,shaderCount:0,textureCount:0,cubeCount:0,renderbufferCount:0,maxTextureUnits:0}}var Zw=34918,Jw=34919,Gv=35007,t4=function(x,S){if(!S.ext_disjoint_timer_query)return null;var R=[];function tt(){return R.pop()||S.ext_disjoint_timer_query.createQueryEXT()}function it(kt){R.push(kt)}var Z=[];function nt(kt){var Ut=tt();S.ext_disjoint_timer_query.beginQueryEXT(Gv,Ut),Z.push(Ut),bt(Z.length-1,Z.length,kt)}function yt(){S.ext_disjoint_timer_query.endQueryEXT(Gv)}function _t(){this.startQueryIndex=-1,this.endQueryIndex=-1,this.sum=0,this.stats=null}var Tt=[];function Mt(){return Tt.pop()||new _t}function zt(kt){Tt.push(kt)}var Ft=[];function bt(kt,Ut,ut){var Xt=Mt();Xt.startQueryIndex=kt,Xt.endQueryIndex=Ut,Xt.sum=0,Xt.stats=ut,Ft.push(Xt)}var Rt=[],j=[];function rt(){var kt,Ut,ut=Z.length;if(ut!==0){j.length=Math.max(j.length,ut+1),Rt.length=Math.max(Rt.length,ut+1),Rt[0]=0,j[0]=0;var Xt=0;for(kt=0,Ut=0;Ut<Z.length;++Ut){var mt=Z[Ut];S.ext_disjoint_timer_query.getQueryObjectEXT(mt,Jw)?(Xt+=S.ext_disjoint_timer_query.getQueryObjectEXT(mt,Zw),it(mt)):Z[kt++]=mt,Rt[Ut+1]=Xt,j[Ut+1]=kt}for(Z.length=kt,kt=0,Ut=0;Ut<Ft.length;++Ut){var Ot=Ft[Ut],dt=Ot.startQueryIndex,Pt=Ot.endQueryIndex;Ot.sum+=Rt[Pt]-Rt[dt];var ve=j[dt],Oe=j[Pt];Oe===ve?(Ot.stats.gpuTime+=Ot.sum/1e6,zt(Ot)):(Ot.startQueryIndex=ve,Ot.endQueryIndex=Oe,Ft[kt++]=Ot)}Ft.length=kt}}return{beginQuery:nt,endQuery:yt,pushScopeStats:bt,update:rt,getNumPendingQueries:function(){return Z.length},clear:function(){R.push.apply(R,Z);for(var kt=0;kt<R.length;kt++)S.ext_disjoint_timer_query.deleteQueryEXT(R[kt]);Z.length=0,R.length=0},restore:function(){Z.length=0,R.length=0}}},e4=16384,o4=256,n4=1024,r4=34962,Hv="webglcontextlost",Uv="webglcontextrestored",Bv=1,a4=2,s4=3;function jv(x,S){for(var R=0;R<x.length;++R)if(x[R]===S)return R;return-1}function i4(x){var S=Ee(x);if(!S)return null;var R=S.gl,tt=R.getContextAttributes(),it=R.isContextLost(),Z=ke(R,S);if(!Z)return null;var nt=ce(),yt=Qw(),_t=Z.extensions,Tt=t4(R,_t),Mt=Nt(),zt=R.drawingBufferWidth,Ft=R.drawingBufferHeight,bt={tick:0,time:0,viewportWidth:zt,viewportHeight:Ft,framebufferWidth:zt,framebufferHeight:Ft,drawingBufferWidth:zt,drawingBufferHeight:Ft,pixelRatio:S.pixelRatio},Rt={},j={elements:null,primitive:4,count:-1,offset:0,instances:-1},rt=W5(R,_t),kt=cb(R,yt,S,ut),Ut=bw(R,_t,rt,yt,kt);function ut(be){return Ut.destroyBuffer(be)}var Xt=bb(R,_t,kt,yt),mt=Ew(R,nt,yt,S),Ot=Qb(R,_t,rt,function(){ve.procs.poll()},bt,yt,S),dt=Zb(R,_t,rt,yt,S),Pt=xw(R,_t,rt,Ot,dt,yt),ve=Kw(R,nt,_t,rt,kt,Xt,Ot,Pt,Rt,Ut,mt,j,bt,Tt,S),Oe=Tw(R,Pt,ve.procs.poll,bt,tt,_t,rt),qt=ve.next,At=R.canvas,ht=[],Ae=[],He=[],ee=[S.onDestroy],Ze=null;function Ie(){if(ht.length===0){Tt&&Tt.update(),Ze=null;return}Ze=$t.next(Ie),ar();for(var be=ht.length-1;be>=0;--be){var oo=ht[be];oo&&oo(bt,null,0)}R.flush(),Tt&&Tt.update()}function We(){!Ze&&ht.length>0&&(Ze=$t.next(Ie))}function go(){Ze&&($t.cancel(Ie),Ze=null)}function wn(be){be.preventDefault(),it=!0,go(),Ae.forEach(function(oo){oo()})}function Fn(be){R.getError(),it=!1,Z.restore(),mt.restore(),kt.restore(),Ot.restore(),dt.restore(),Pt.restore(),Ut.restore(),Tt&&Tt.restore(),ve.procs.refresh(),We(),He.forEach(function(oo){oo()})}At&&(At.addEventListener(Hv,wn,!1),At.addEventListener(Uv,Fn,!1));function ro(){ht.length=0,go(),At&&(At.removeEventListener(Hv,wn),At.removeEventListener(Uv,Fn)),mt.clear(),Pt.clear(),dt.clear(),Ot.clear(),Xt.clear(),kt.clear(),Ut.clear(),Tt&&Tt.clear(),ee.forEach(function(be){be()})}function Ln(be){E(!!be,"invalid args to regl({...})"),E.type(be,"object","invalid args to regl({...})");function oo(W){var $=e({},W);delete $.uniforms,delete $.attributes,delete $.context,delete $.vao,"stencil"in $&&$.stencil.op&&($.stencil.opBack=$.stencil.opFront=$.stencil.op,delete $.stencil.op);function I(F){if(F in $){var L=$[F];delete $[F],Object.keys(L).forEach(function(O){$[F+"."+O]=L[O]})}}return I("blend"),I("depth"),I("cull"),I("stencil"),I("polygonOffset"),I("scissor"),I("sample"),"vao"in W&&($.vao=W.vao),$}function ho(W,$){var I={},F={};return Object.keys(W).forEach(function(L){var O=W[L];if(Ct.isDynamic(O)){F[L]=Ct.unbox(O,L);return}else if($&&Array.isArray(O)){for(var T=0;T<O.length;++T)if(Ct.isDynamic(O[T])){F[L]=Ct.unbox(O,L);return}}I[L]=O}),{dynamic:F,static:I}}var vn=ho(be.context||{},!0),t0=ho(be.uniforms||{},!0),ks=ho(be.attributes||{},!1),z=ho(oo(be),!1),et={gpuTime:0,cpuTime:0,count:0},Y=ve.compile(z,ks,t0,vn,et),Qt=Y.draw,Je=Y.batch,A=Y.scope,M=[];function P(W){for(;M.length<W;)M.push(null);return M}function U(W,$){var I;if(it&&E.raise("context lost"),typeof W=="function")return A.call(this,null,W,0);if(typeof $=="function")if(typeof W=="number")for(I=0;I<W;++I)A.call(this,null,$,I);else if(Array.isArray(W))for(I=0;I<W.length;++I)A.call(this,W[I],$,I);else return A.call(this,W,$,0);else if(typeof W=="number"){if(W>0)return Je.call(this,P(W|0),W|0)}else if(Array.isArray(W)){if(W.length)return Je.call(this,W,W.length)}else return Qt.call(this,W)}return e(U,{stats:et,destroy:function(){Y.destroy()}})}var Wo=Pt.setFBO=Ln({framebuffer:Ct.define.call(null,Bv,"framebuffer")});function _n(be,oo){var ho=0;ve.procs.poll();var vn=oo.color;vn&&(R.clearColor(+vn[0]||0,+vn[1]||0,+vn[2]||0,+vn[3]||0),ho|=e4),"depth"in oo&&(R.clearDepth(+oo.depth),ho|=o4),"stencil"in oo&&(R.clearStencil(oo.stencil|0),ho|=n4),E(!!ho,"called regl.clear with no buffer specified"),R.clear(ho)}function zn(be){if(E(typeof be=="object"&&be,"regl.clear() takes an object as input"),"framebuffer"in be)if(be.framebuffer&&be.framebuffer_reglType==="framebufferCube")for(var oo=0;oo<6;++oo)Wo(e({framebuffer:be.framebuffer.faces[oo]},be),_n);else Wo(be,_n);else _n(null,be)}function Nn(be){E.type(be,"function","regl.frame() callback must be a function"),ht.push(be);function oo(){var ho=jv(ht,be);E(ho>=0,"cannot cancel a frame twice");function vn(){var t0=jv(ht,vn);ht[t0]=ht[ht.length-1],ht.length-=1,ht.length<=0&&go()}ht[ho]=vn}return We(),{cancel:oo}}function Kn(){var be=qt.viewport,oo=qt.scissor_box;be[0]=be[1]=oo[0]=oo[1]=0,bt.viewportWidth=bt.framebufferWidth=bt.drawingBufferWidth=be[2]=oo[2]=R.drawingBufferWidth,bt.viewportHeight=bt.framebufferHeight=bt.drawingBufferHeight=be[3]=oo[3]=R.drawingBufferHeight}function ar(){bt.tick+=1,bt.time=Ue(),Kn(),ve.procs.poll()}function pn(){Ot.refresh(),Kn(),ve.procs.refresh(),Tt&&Tt.update()}function Ue(){return(Nt()-Mt)/1e3}pn();function sr(be,oo){E.type(oo,"function","listener callback must be a function");var ho;switch(be){case"frame":return Nn(oo);case"lost":ho=Ae;break;case"restore":ho=He;break;case"destroy":ho=ee;break;default:E.raise("invalid event, must be one of frame,lost,restore,destroy")}return ho.push(oo),{cancel:function(){for(var vn=0;vn<ho.length;++vn)if(ho[vn]===oo){ho[vn]=ho[ho.length-1],ho.pop();return}}}}var ko=e(Ln,{clear:zn,prop:Ct.define.bind(null,Bv),context:Ct.define.bind(null,a4),this:Ct.define.bind(null,s4),draw:Ln({}),buffer:function(be){return kt.create(be,r4,!1,!1)},elements:function(be){return Xt.create(be,!1)},texture:Ot.create2D,cube:Ot.createCube,renderbuffer:dt.create,framebuffer:Pt.create,framebufferCube:Pt.createCube,vao:Ut.createVAO,attributes:tt,frame:Nn,on:sr,limits:rt,hasExtension:function(be){return rt.extensions.indexOf(be.toLowerCase())>=0},read:Oe,destroy:ro,_gl:R,_refresh:pn,poll:function(){ar(),Tt&&Tt.update()},now:Ue,stats:yt});return S.onDone(null,ko),ko}return i4})});var Ts=pt((Ok,vm)=>{"use strict";var p0=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],v0=(t,e)=>[t[0]+e[0],t[1]+e[1],t[2]+e[2]],e0=(t,e)=>[t[0]*e,t[1]*e,t[2]*e],Lf=(t,e)=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2],Qc=(t,e)=>[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]],Z1=t=>Math.hypot(t[0],t[1],t[2]),ma=t=>{let e=Z1(t)||1;return[t[0]/e,t[1]/e,t[2]/e]};function Ni(t,e){let o=t.length-1,n=Math.min(Math.max(e,0),1)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,s=t[Math.max(0,r-1)],i=t[r],c=t[r+1],f=t[Math.min(o,r+2)],l=[0,0,0];for(let d=0;d<3;d++)l[d]=.5*(2*i[d]+(-s[d]+c[d])*a+(2*s[d]-5*i[d]+4*c[d]-f[d])*a*a+(-s[d]+3*i[d]-3*c[d]+f[d])*a*a*a);return l}function _4(t,e){return Ni(t.map(o=>[o,0,0]),e)[0]}function M4(t,e,o,n){let r={curMat:[0,0,0]},s={r:[1,0,0,0,1,0,0,0,1],t:[0,0,0],s:1},i=[];r.save=()=>{i.push({r:s.r.slice(),t:s.t.slice(),s:s.s})},r.restore=()=>{s=i.pop()};let c=(u,v)=>{let p=new Array(9);for(let h=0;h<3;h++)for(let m=0;m<3;m++)p[h*3+m]=u[h*3]*v[m]+u[h*3+1]*v[3+m]+u[h*3+2]*v[6+m];return p},f=u=>[s.r[0]*u[0]+s.r[1]*u[1]+s.r[2]*u[2],s.r[3]*u[0]+s.r[4]*u[1]+s.r[5]*u[2],s.r[6]*u[0]+s.r[7]*u[1]+s.r[8]*u[2]];r.translate=(u,v,p)=>{let h=f([u,v,p]);s.t=[s.t[0]+h[0]*s.s,s.t[1]+h[1]*s.s,s.t[2]+h[2]*s.s]},r.scale=u=>{s.s*=u},r.rotateY=u=>{let v=Math.cos(u),p=Math.sin(u);s.r=c(s.r,[v,0,p,0,1,0,-p,0,v])},r.vert=(u,v,p)=>{let h=p||r.curMat,m=f(u),g=ma(f(v));return t.push(m[0]*s.s+s.t[0],m[1]*s.s+s.t[1],m[2]*s.s+s.t[2]),e.push(g[0],g[1],g[2]),n.push(h[0],h[1],h[2]),t.length/3-1};let l=u=>[t[u*3],t[u*3+1],t[u*3+2]],d=u=>[e[u*3],e[u*3+1],e[u*3+2]];return r.tri=(u,v,p)=>{let h=l(u),m=Qc(p0(l(v),h),p0(l(p),h)),g=v0(v0(d(u),d(v)),d(p));Lf(m,g)<0?o.push(u,p,v):o.push(u,v,p)},r.box=(u,v,p,h,m,g,y)=>{let b=[[[u,v,p],[h,v,p],[u,m,p],[h,m,p],[0,0,-1]],[[h,v,g],[u,v,g],[h,m,g],[u,m,g],[0,0,1]],[[u,v,g],[u,v,p],[u,m,g],[u,m,p],[-1,0,0]],[[h,v,p],[h,v,g],[h,m,p],[h,m,g],[1,0,0]],[[u,m,p],[h,m,p],[u,m,g],[h,m,g],[0,1,0]],[[u,v,g],[h,v,g],[u,v,p],[h,v,p],[0,-1,0]]];for(let w of b){let _=r.vert(w[0],w[4],y),k=r.vert(w[1],w[4],y),N=r.vert(w[2],w[4],y),G=r.vert(w[3],w[4],y);r.tri(_,k,N),r.tri(k,G,N)}},r.surface=(u,v,p,h)=>{h=h||{};let m=.001,g=_=>Math.min(1,Math.max(0,_)),y=[],b=[];for(let _=0;_<=v;_++){let k=[],N=[];for(let G=0;G<=p;G++){let C=_/v,X=G/p,q=u(C,X),ot=Math.min(1-m,Math.max(m,C)),D=h.wrapV?X:Math.min(1-m,Math.max(m,X)),K=p0(u(g(ot+m),D),u(g(ot-m),D)),Et=h.wrapV?D+m:g(D+m),Ht=h.wrapV?D-m:g(D-m),Lt=p0(u(ot,Et),u(ot,Ht)),xt=Qc(K,Lt);Z1(xt)<1e-14&&(xt=h.inside?p0(q,h.inside(C,X)):[0,1,0]),xt=ma(xt),h.inside&&Lf(xt,p0(q,h.inside(C,X)))<0&&(xt=e0(xt,-1));let lt=h.mat?h.mat(C,X,q):null;k.push(r.vert(q,xt,lt)),h.double&&N.push(r.vert(q,e0(xt,-1),lt))}y.push(k),b.push(N)}let w=_=>{for(let k=0;k<v;k++)for(let N=0;N<p;N++){let G=_[k][N],C=_[k+1][N],X=_[k][N+1],q=_[k+1][N+1];r.tri(G,C,X),r.tri(C,q,X)}};w(y),h.double&&w(b)},r.ellipsoid=(u,v,p,h,m)=>{m=m||{};let g=m.warp||null;r.surface((y,b)=>{let w=y*Math.PI,_=b*Math.PI*2,k=g?g(y,b):1;return[u[0]+v[0]*k*Math.sin(w)*Math.cos(_),u[1]+v[1]*k*Math.cos(w),u[2]+v[2]*k*Math.sin(w)*Math.sin(_)]},p||10,h||14,{wrapV:!0,inside:()=>u,mat:m.mat})},r.tube=(u,v,p,h,m)=>{m=m||{};let g=40,y=[],b=null;for(let k=0;k<=g;k++){let N=k/g,G=Ni(u,Math.max(0,N-.01)),C=Ni(u,Math.min(1,N+.01)),X=ma(p0(C,G)),q;if(b)q=ma(p0(b,e0(X,Lf(b,X))));else{let ot=Math.abs(X[1])<.9?[0,1,0]:[1,0,0];q=ma(Qc(X,ot))}y.push({N:q,B:ma(Qc(X,q))}),b=q}let w=k=>{let N=Math.min(Math.max(k,0),1)*g,G=Math.min(g-1,Math.floor(N)),C=N-G,X=y[G],q=y[G+1];return{N:ma(v0(e0(X.N,1-C),e0(q.N,C))),B:ma(v0(e0(X.B,1-C),e0(q.B,C)))}},_=m.squash||[1,1];r.surface((k,N)=>{let G=Ni(u,k),C=w(k),X=v(k),q=N*Math.PI*2;return v0(G,v0(e0(C.N,Math.cos(q)*X*_[0]),e0(C.B,Math.sin(q)*X*_[1])))},p||12,h||8,{wrapV:!0,inside:k=>Ni(u,k),mat:m.mat})},r.lathe=(u,v,p,h,m)=>{m=m||{};let g=[];for(let y=0;y<u.length-1;y++){let b=u[y+1][0]-u[y][0],w=u[y+1][1]-u[y][1];g.push(ma([w,-b,0]))}for(let y=0;y<u.length-1;y++){let b=u[y],w=u[y+1],_=y===0||b[2]===1,k=y===u.length-2||w[2]===1,N=_?g[y]:ma(v0(g[y-1],g[y])),G=k?g[y]:ma(v0(g[y],g[y+1])),C=[],X=[];for(let q=0;q<=h;q++){let ot=q/h*Math.PI*2,D=Math.cos(ot),K=Math.sin(ot),Et=m.mat?m.mat(ot,b[1]):null,Ht=m.mat?m.mat(ot,w[1]):null;C.push(r.vert([v+b[0]*D,b[1],p+b[0]*K],[N[0]*D,N[1],N[0]*K],Et)),X.push(r.vert([v+w[0]*D,w[1],p+w[0]*K],[G[0]*D,G[1],G[0]*K],Ht))}for(let q=0;q<h;q++)r.tri(C[q],C[q+1],X[q]),r.tri(C[q+1],X[q+1],X[q])}},r}vm.exports={createBuilder:M4,catmull:Ni,curve1:_4,sub:p0,add:v0,mul:e0,dot:Lf,cross:Qc,norm:ma,len:Z1}});var ym=pt((Pk,xm)=>{"use strict";var{norm:zf,add:Nf,mul:$0,sub:E4,cross:mm}=Ts(),gm=Math.PI*2,S4=(t,e,o)=>{let n=Math.min(1,Math.max(0,(o-t)/(e-t)));return n*n*(3-2*n)};function k4(t){let e=t>>>0;return()=>{e|=0,e=e+1831565813|0;let o=Math.imul(e^e>>>15,1|e);return o=o+Math.imul(o^o>>>7,61|o)^o,((o^o>>>14)>>>0)/4294967296}}function T4(t,e,o,n,r,a){let s=(u,v)=>[7,u*a,v];t.curMat=[0,0,0],t.box(e-a*1.36,n,o-a*1.36,e+a*1.36,n+.22,o+a*1.36),t.lathe([[a*1.24,n+.22,1],[a*1.3,n+.27],[a*1.31,n+.32],[a*1.26,n+.37,1],[a*1.1,n+.4],[a*1.14,n+.44,1],[a*1.18,n+.47],[a*1.1,n+.52,1],[a*.96,n+.55]],e,o,56,{mat:s});let i=n+.55,c=r-i,f=20,l=6,d=a*.075;return t.surface((u,v)=>{let p=i+u*c,h=a*(.96-.12*u),m=v*gm,g=v*f%1,y=h-d*4*g*(1-g);return[e+y*Math.cos(m),p,o+y*Math.sin(m)]},10,f*l,{wrapV:!0,inside:u=>[e,i+u*c,o],mat:(u,v)=>[7,v*gm*a,i+u*c]}),t.lathe([[a*.8,r-.02,1],[a*.9,r+.02],[a*.9,r+.07,1],[a*.82,r+.09,1],[a*.86,r+.13],[a*1.06,r+.2],[a*1.22,r+.28],[a*1.28,r+.33,1]],e,o,56,{mat:s}),t.curMat=[0,0,0],t.box(e-a*1.42,r+.33,o-a*1.42,e+a*1.42,r+.53,o+a*1.42),r+.53}function A4(t,e,o){t.curMat=[1,0,0],t.lathe([[e*1.1,0,1],[e*1.1,o*.14,1],[e*1.04,o*.14,1],[e*1.04,o*.2],[e*.97,o*.26,1],[e*.95,o*.26,1],[e*.95,o*.8,1],[e*.98,o*.8,1],[e*1.03,o*.86],[e*1.05,o*.92,1],[e*1.05,o,1],[e*.5,o,1],[0,o]],0,0,72)}function L4(t,e,o,n,r){t.save(),t.translate(e,0,o),A4(t,n,r),t.restore()}function z4(t,e,o,n,r,a){let s=k4(n),i=a?zf([a[0],0,a[1]]):null;t.save(),t.translate(e,0,o),t.scale(r||1),t.curMat=[3,0,0],t.lathe([[.17,0,1],[.2,.02],[.28,.13],[.36,.3],[.395,.47],[.38,.62],[.32,.74],[.29,.8],[.292,.82,1],[.325,.84],[.335,.88,1],[.3,.905,1],[.275,.895,1],[.272,.85]],0,0,48),t.curMat=[5,0,0],t.lathe([[.272,.85,1],[.1,.868],[0,.872]],0,0,24);let c=11,f=.86;for(let l=0;l<c;l++){let d=l>=c-2,u=l*2.399963+s()*.5,v=[Math.cos(u),0,Math.sin(u)],p=[-Math.sin(u),0,Math.cos(u)],h=l*.618%1,m=d?.06+s()*.06:.12+.62*h,g=1;if(i){let xt=v[0]*i[0]+v[2]*i[2];g=.25+.75*S4(-.7,.5,xt),m*=g}let y=d?1.1+s()*.25:.85+.55*(1-h*.55)+s()*.15,b=d?1+s()*.2:.95+s()*.28,w=d?.055:.215+s()*.05,_=.04+s()*.05,k=[v[0]*_,f,v[2]*_],N=[k[0]+v[0]*Math.sin(m)*y*.92,k[1]+Math.cos(m)*y,k[2]+v[2]*Math.sin(m)*y*.92],G=[k[0]+v[0]*Math.sin(m*.5)*y*.45,k[1]+y*.5,k[2]+v[2]*Math.sin(m*.5)*y*.45];t.curMat=[4,0,0],t.tube([k,G,N],xt=>.02-.008*xt,8,7);let C=24,X=m*.9+.05,q=m+(d?.12:(.95+.45*h)*(.35+.65*g)),ot=[N],D=[],K=N;for(let xt=0;xt<C;xt++){let lt=xt/C,Bt=X+(q-X)*lt*lt,Ge=[v[0]*Math.sin(Bt),Math.cos(Bt),v[2]*Math.sin(Bt)];D.push(Ge),K=Nf(K,$0(Ge,b/C)),ot.push(K)}D.push(D[D.length-1]);let Et=xt=>{let lt=xt*C,Bt=Math.min(C-1,Math.floor(lt)),Ge=lt-Bt;return Nf($0(ot[Bt],1-Ge),$0(ot[Bt+1],Ge))},Ht=xt=>{let lt=xt*C,Bt=Math.min(C,Math.floor(lt)),Ge=Math.min(C,Bt+1),Ce=lt-Bt;return zf(Nf($0(D[Bt],1-Ce),$0(D[Ge],Ce)))},Lt=(s()-.5)*.5;t.curMat=[2,0,0],t.surface((xt,lt)=>{let Bt=lt*2-1,Ge=Et(xt),Ce=Ht(xt),Xe=Lt*xt,we=Nf($0(p,Math.cos(Xe)),$0(mm(Ce,p),Math.sin(Xe)));we=zf(E4(we,$0(Ce,we[0]*Ce[0]+we[1]*Ce[1]+we[2]*Ce[2])));let lo=zf(mm(we,Ce)),_o=w*Math.pow(Math.sin(Math.PI*Math.pow(xt,.72)),.85),Xo=.3*_o*Math.abs(Bt)+.012*Math.sin(xt*40+Bt*2)*Math.abs(Bt)*(d?0:1),Zt=-.1*_o*Bt*Bt*Bt*Bt,me=Xo+Zt;return[Ge[0]+we[0]*Bt*_o+lo[0]*me,Ge[1]+we[1]*Bt*_o+lo[1]*me,Ge[2]+we[2]*Bt*_o+lo[2]*me]},14,8,{double:!0,mat:(xt,lt)=>[2,lt*2-1,xt]})}t.restore()}xm.exports={addFlutedColumn:T4,addStatue:L4,addPlant:z4}});var F0=pt((Ik,Mm)=>{"use strict";var wt={xc:7,r:2.5,spring:4.7};wt.x0=wt.xc-wt.r;wt.x1=wt.xc+wt.r;wt.top=wt.spring+wt.r;var zr=.06,Zo=.1,bm=.08,Rf=wt.r,Cf=[wt.x0+Rf/3,wt.x0+2*Rf/3,wt.xc+Rf/3,wt.xc+2*Rf/3],Ri=.28,J1=[.95,1.65,2.35,3.05,3.75],wm=[1.05,1.8],Zc=[8,0,0],ta=[0,0,0];function ga(t,e,o,n,r,a,s,i){t.box(Math.min(e,r),Math.min(o,a),Math.min(n,s),Math.max(e,r),Math.max(o,a),Math.max(n,s),i)}function Ci(t,e,o,n,r,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),f=t.vert(n,a,s),l=t.vert(r,a,s);t.tri(i,c,f),t.tri(i,f,l)}function Of(t,e,o,n,r,a,s=48,i=0,c=Math.PI){let f=(l,d,u)=>[wt.xc+d*Math.cos(l),wt.spring+d*Math.sin(l),u];for(let l=0;l<s;l++){let d=i+(c-i)*l/s,u=i+(c-i)*(l+1)/s,v=(d+u)/2;Ci(t,f(d,e,r),f(u,e,r),f(u,o,r),f(d,o,r),[0,0,1],a),Ci(t,f(d,o,n),f(u,o,n),f(u,e,n),f(d,e,n),[0,0,-1],a),Ci(t,f(d,e,n),f(u,e,n),f(u,e,r),f(d,e,r),[-Math.cos(v),-Math.sin(v),0],a),Ci(t,f(u,o,n),f(d,o,n),f(d,o,r),f(u,o,r),[Math.cos(v),Math.sin(v),0],a)}}function N4(t){let n=a=>[wt.xc+wt.r*Math.cos(a),wt.spring+wt.r*Math.sin(a)],r=a=>{let s=Math.cos(a),i=Math.sin(a),c=Math.abs(s)>1e-6?wt.r/Math.abs(s):1/0,f=i>1e-6?(8-wt.spring)/i:1/0,l=Math.min(c,f);return[Math.min(wt.x1,Math.max(wt.x0,wt.xc+s*l)),Math.min(8,wt.spring+i*l)]};for(let a=0;a<48;a++){let s=Math.PI*a/48,i=Math.PI*(a+1)/48,c=n(s),f=n(i),l=r(s),d=r(i);for(let[v,p]of[[.35,1],[-.35,-1]])Ci(t,[c[0],c[1],v],[f[0],f[1],v],[d[0],d[1],v],[l[0],l[1],v],[0,0,p],ta);let u=(s+i)/2;Ci(t,[c[0],c[1],-.35],[f[0],f[1],-.35],[f[0],f[1],.35],[c[0],c[1],.35],[-Math.cos(u),-Math.sin(u),0],ta)}}function R4(t){ga(t,-.35,0,-.35,wt.x0,8,.35,ta),ga(t,wt.x1,0,-.35,14+.35,8,.35,ta),N4(t),_m(t)}function _m(t){ga(t,wt.x0-.32,.3,.35,wt.x0,wt.spring,.35+.07,ta),ga(t,wt.x1,.3,.35,wt.x1+.32,wt.spring,.35+.07,ta),ga(t,wt.x0-.32-.05,0,.35,wt.x0,.3,.35+.07+.04,ta),ga(t,wt.x1,0,.35,wt.x1+.32+.05,.3,.35+.07+.04,ta),ga(t,wt.x0-.32-.06,wt.spring-.12,.35,wt.x0,wt.spring,.35+.07+.05,ta),ga(t,wt.x1,wt.spring-.12,.35,wt.x1+.32+.06,wt.spring,.35+.07+.05,ta),Of(t,wt.r,wt.r+.32,.35,.35+.07,ta),Of(t,wt.r+.32,wt.r+.32+.06,.35,.35+.07+.03,ta),ga(t,wt.xc-.22,wt.top-.08,.35,wt.xc+.22,wt.top+.32+.12,.35+.07+.06,ta)}function C4(t,e){e=e||"all";let o=e==="all",n=o||e==="fixed",r=-bm/2,a=bm/2,s=(u,v,p,h,m=0)=>ga(t,u-m,v,r,p+m,h,a,Zc),i=u=>wt.spring+Math.sqrt(Math.max(0,wt.r*wt.r-(u-wt.xc)*(u-wt.xc))),c=e==="right"?wt.xc:wt.x0,f=e==="left"?wt.xc:wt.x1,l=u=>o||e==="left"&&u<wt.xc||e==="right"&&u>wt.xc,d=o?null:wt.spring-.06;if(n){s(wt.x0,0,wt.x0+Zo,wt.spring),s(wt.x1-Zo,0,wt.x1,wt.spring),Of(t,wt.r-Zo,wt.r,r,a,Zc,64),s(wt.x0,0,wt.x1,.05),s(wt.x0,wt.spring-.06,wt.x1,wt.spring+.06);for(let u of wm)Of(t,u-zr/2,u+zr/2,r,a,Zc,48)}if(o){s(wt.x0,0,wt.x1,Ri),s(wt.xc-Zo/2,0,wt.xc+Zo/2,wt.top-Zo*.5);for(let u of Cf)s(u-zr/2,Ri,u+zr/2,i(u)-Zo*.5);for(let u of J1)s(wt.x0,u-zr/2,wt.x1,u+zr/2)}else if(e==="fixed"){s(wt.xc-Zo/2,wt.spring+.06,wt.xc+Zo/2,wt.top-Zo*.5);for(let u of Cf)s(u-zr/2,wt.spring+.06,u+zr/2,i(u)-Zo*.5)}else{let u=e==="left"?wt.x0+Zo:wt.x1-Zo;s(Math.min(u,u+(e==="left"?Zo*.8:-Zo*.8)),.05,Math.max(u,u+(e==="left"?Zo*.8:-Zo*.8)),d),s(c,.05,f,Ri),s(c,d-.07,f,d);let v=e==="left"?wt.xc-Zo/2:wt.xc;s(v,.05,v+Zo/2,d);for(let p of Cf)l(p)&&s(p-zr/2,Ri,p+zr/2,d-.07);for(let p of J1)s(c,p-zr/2,f,p+zr/2)}for(let u of[-1,1]){let v=wt.xc+u*.16;l(v)&&(ga(t,v-.02,1.05,a,v+.02,1.13,a+.06,Zc),ga(t,v-(u>0?0:.14),1.07,a+.05,v+(u>0?.14:0),1.11,a+.08,Zc))}}function O4(t){t=t||"all";let e=[],o=0,{x0:n,x1:r,xc:a,r:s,spring:i}=wt;if(t!=="fixed"){let f=t==="right"?a:n,l=t==="left"?a:r;if(e.push([f,0,o],[l,0,o],[l,i,o],[f,0,o],[l,i,o],[f,i,o]),t!=="all")return e}let c=48;for(let f=0;f<c;f++){let l=Math.PI*f/c,d=Math.PI*(f+1)/c;e.push([a,i,o],[a+s*Math.cos(l),i+s*Math.sin(l),o],[a+s*Math.cos(d),i+s*Math.sin(d),o])}return e}var Po=t=>t.toFixed(4);function P4(){let t=Cf.map(n=>`vb = max(vb, barCover(abs(q.x - ${Po(n)}), ${Po(zr/2)}, soft));`).join(`
		`),e=J1.map(n=>`hb = max(hb, barCover(abs(q.y - ${Po(n)}), ${Po(zr/2)}, soft));`).join(`
		`),o=wm.map(n=>`ab = max(ab, barCover(abs(rr - ${Po(n)}), ${Po(zr/2)}, soft));`).join(`
		`);return`
	float barCover(float d, float hw, float soft) {
		return 1.0 - smoothstep(hw - soft, hw + soft, d);
	}

	// how open the doorway is at a point (x, y) on a plane, 0..1
	float doorOpen(vec2 q, float soft) {
		float side = smoothstep(${Po(wt.x0)} - soft, ${Po(wt.x0)} + soft, q.x)
		           * (1.0 - smoothstep(${Po(wt.x1)} - soft, ${Po(wt.x1)} + soft, q.x));
		float above = smoothstep(-soft, soft, q.y);
		float rr = length(q - vec2(${Po(wt.xc)}, ${Po(wt.spring)}));
		float arch = q.y < ${Po(wt.spring)} ? 1.0 : 1.0 - smoothstep(${Po(wt.r)} - soft, ${Po(wt.r)} + soft, rr);
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
		float rr = length(q - vec2(${Po(wt.xc)}, ${Po(wt.spring)}));
		float vb = barCover(abs(q.x - ${Po(wt.xc)}), ${Po(Zo/2)}, soft);
		${t}
		float hb = barCover(abs(q.y - ${Po(wt.spring)}), 0.06, soft);
		hb = max(hb, 1.0 - smoothstep(${Po(Ri)} - soft, ${Po(Ri)} + soft, q.y));
		float hRows = 0.0;
		{
			float hb2 = 0.0;
			${e.replace(/hb = max\(hb,/g,"hb2 = max(hb2,")}
			hRows = q.y < ${Po(wt.spring)} ? hb2 : 0.0;
		}
		float ab = 0.0;
		${o}
		ab = q.y > ${Po(wt.spring)} ? ab : 0.0;
		float frame = max(
			barCover(abs(q.x - ${Po(wt.x0+Zo/2)}), ${Po(Zo/2)}, soft),
			barCover(abs(q.x - ${Po(wt.x1-Zo/2)}), ${Po(Zo/2)}, soft));
		frame = q.y < ${Po(wt.spring)} ? frame : barCover(abs(rr - ${Po(wt.r-Zo/2)}), ${Po(Zo/2)}, soft);
		float cover = max(max(max(vb, hb), max(hRows, ab)), frame);
		return open * (1.0 - cover * 0.92);
	}`}Mm.exports={addEntranceWall:R4,addSurround:_m,addFrames:C4,glassPanes:O4,doorLightGLSL:P4,DOOR:wt,WALL:.35}});var Pi=pt(($k,Lm)=>{"use strict";var Ls=1.1583333333333334,zs=(13.05-8*.16)/9,eu=Ls+.16,ou=zs+.16,g0=14/2-7.75/2,ea=15,Jc=g0+7.75,m0=ea+13.05,oa=.3,x0={y:8+.18,inset:.15},As={y:8+.36,inset:oa},nu=8+.2,tl=8+.62,ru=8+.9,au=.016,Tm=.28,Am=.66,I4=(()=>{let t=[-.15,1,.3],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>o/e)})(),$4=(()=>{let t=[.42,1,-.32],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>o/e)})(),F4=[9,0,0],ir=[10,0,0];function Oi(t,e,o,n,r,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),f=t.vert(n,a,s),l=t.vert(r,a,s);t.tri(i,c,f),t.tri(i,f,l)}function Nr(t,e,o,n,r,a,s){Oi(t,[e,a,o],[n,a,o],[n,a,r],[e,a,r],[0,-1,0],s)}function tu(t,e,o,n,r,a,s,i){Oi(t,[e,a,o],[n,a,o],[n,s,o],[e,s,o],[0,0,1],i),Oi(t,[n,a,r],[e,a,r],[e,s,r],[n,s,r],[0,0,-1],i),Oi(t,[e,a,r],[e,a,o],[e,s,o],[e,s,r],[1,0,0],i),Oi(t,[n,a,o],[n,a,r],[n,s,r],[n,s,o],[-1,0,0],i)}function Em(t,e,o,n,r){Nr(t,e[0],e[1],e[2],o[1],n,r),Nr(t,e[0],o[3],e[2],e[3],n,r),Nr(t,e[0],o[1],o[0],o[3],n,r),Nr(t,o[2],o[1],e[2],o[3],n,r)}var Sm=t=>g0+t*eu,km=t=>ea+t*ou;function q4(t,e,o=48){let n=[g0-oa,ea-oa,Jc+oa,m0+oa],r=(f,l)=>[f[0]+l,f[1]+l,f[2]-l,f[3]-l],a=r(n,x0.inset),s=r(n,As.inset);Nr(t,0,0,14,n[1],8,e),Nr(t,0,n[3],14,o,8,e),Nr(t,0,n[1],n[0],n[3],8,e),Nr(t,n[2],n[1],14,n[3],8,e);let i=.06,c=.06;t.box(n[0]-i,8-c,n[1]-i,n[2]+i,8,n[1],ir),t.box(n[0]-i,8-c,n[3],n[2]+i,8,n[3]+i,ir),t.box(n[0]-i,8-c,n[1],n[0],8,n[3],ir),t.box(n[2],8-c,n[1],n[2]+i,8,n[3],ir),tu(t,...n.slice(0,2),...n.slice(2),8,x0.y,ir),Em(t,n,a,x0.y,ir),tu(t,...a.slice(0,2),...a.slice(2),x0.y,As.y,ir),Em(t,a,s,As.y,ir);for(let f=1;f<6;f++){let l=Sm(f)-.16;t.box(l,nu,ea,l+.16,As.y,m0,ir)}for(let f=1;f<9;f++){let l=km(f)-.16;t.box(g0,nu,l,Jc,As.y,l+.16,ir)}for(let f=0;f<9;f++)for(let l=0;l<6;l++){let d=Sm(l),u=km(f);tu(t,d,u,d+Ls,u+zs,As.y,ru,ir),Nr(t,d,u,d+Ls,u+zs,ru,F4),D4(t,d+Ls/2,u+zs/2,Ls/2,zs/2)}}function D4(t,e,o,n,r){let a=tl,s=au;Nr(t,e-n,o-s,e+n,o+s,a,ir),Nr(t,e-s,o-r,e+s,o+r,a,ir);for(let i of[1,-1]){let c=Math.hypot(n,r),f=n/c,l=i*r/c,d=-l*s,u=f*s;Oi(t,[e-f*c+d,a,o-l*c+u],[e+f*c+d,a,o+l*c+u],[e+f*c-d,a,o+l*c-u],[e-f*c-d,a,o-l*c-u],[0,-1,0],ir)}for(let i of[Tm,Am]){let c=i*n,f=i*r;Nr(t,e-c-s,o-f-s,e+c+s,o-f+s,a,ir),Nr(t,e-c-s,o+f-s,e+c+s,o+f+s,a,ir),Nr(t,e-c-s,o-f+s,e-c+s,o+f-s,a,ir),Nr(t,e+c-s,o-f+s,e+c+s,o+f-s,a,ir)}}var Fe=t=>t.toFixed(4);function G4(){return`
	// by day the sun, high and a little towards the entrance; by night
	// the moon, lower and from the other side, so its squares of light
	// reach across the floor to the foot of the wall. (When the light is
	// switched, the squares slide from one to the other.)
	const vec3 SKY_SUN_DAY = vec3(${I4.map(Fe).join(", ")});
	const vec3 SKY_MOON = vec3(${$4.map(Fe).join(", ")});
	vec3 skySun() { return normalize(mix(SKY_SUN_DAY, SKY_MOON, night)); }
	#define SKY_SUN skySun()

	float rectOpen(vec2 q, vec4 r, float soft) {
		vec2 lo = smoothstep(r.xy - soft, r.xy + soft, q);
		vec2 hi = 1.0 - smoothstep(r.zw - soft, r.zw + soft, q);
		return lo.x * lo.y * hi.x * hi.y;
	}

	// inside a pane (not on a beam)? 0..1
	float paneOpen(vec2 q, float soft) {
		vec2 rel = q - vec2(${Fe(g0)}, ${Fe(ea)});
		vec2 pitch = vec2(${Fe(eu)}, ${Fe(ou)});
		vec2 cell = floor(rel / pitch);
		if (cell.x < 0.0 || cell.y < 0.0 || cell.x > ${Fe(5)} || cell.y > ${Fe(8)}) return 0.0;
		vec2 loc = rel - cell * pitch;
		return rectOpen(loc, vec4(0.0, 0.0, ${Fe(Ls)}, ${Fe(zs)}), soft);
	}

	float barCov(float d, float soft) {
		return 1.0 - smoothstep(${Fe(au)} - soft, ${Fe(au)} + soft, d);
	}

	// sunlight reaching point p through the skylight, 0..1
	float skylightAt(vec3 p) {
		if (p.y > ${Fe(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q0 = (p + L * ((${Fe(8)} - p.y) / L.y)).xz;
		vec2 q1 = (p + L * ((${Fe(x0.y)} - p.y) / L.y)).xz;
		vec2 qb = (p + L * ((${Fe(nu)} - p.y) / L.y)).xz;
		vec2 q2 = (p + L * ((${Fe(As.y)} - p.y) / L.y)).xz;
		float tG = (${Fe(tl)} - p.y) / L.y;
		vec2 qg = (p + L * tG).xz;
		vec2 qt = (p + L * ((${Fe(ru)} - p.y) / L.y)).xz;
		float soft = 0.004 + 0.007 * tG;
		float open = rectOpen(q0, vec4(${Fe(g0-oa)}, ${Fe(ea-oa)}, ${Fe(Jc+oa)}, ${Fe(m0+oa)}), soft)
		           * rectOpen(q1, vec4(${Fe(g0-oa+x0.inset)}, ${Fe(ea-oa+x0.inset)}, ${Fe(Jc+oa-x0.inset)}, ${Fe(m0+oa-x0.inset)}), soft)
		           * paneOpen(qb, soft) * paneOpen(q2, soft) * paneOpen(qt, soft);
		if (open <= 0.0) return 0.0;
		// the glazing, measured from the centre of this pane
		vec2 rel = qg - vec2(${Fe(g0)}, ${Fe(ea)});
		vec2 pitch = vec2(${Fe(eu)}, ${Fe(ou)});
		vec2 paneHalf = vec2(${Fe(Ls/2)}, ${Fe(zs/2)});
		vec2 c = rel - floor(rel / pitch) * pitch - paneHalf;
		vec2 ac = abs(c);
		vec2 an = ac / paneHalf;                       // 0 at the centre, 1 at the pane's edge
		float hm = min(paneHalf.x, paneHalf.y);
		float ring = max(an.x, an.y);
		float cover = max(barCov(ac.x, soft), barCov(ac.y, soft));
		cover = max(cover, barCov(abs(an.x - an.y) * hm * 0.7071, soft));
		cover = max(cover, barCov(abs(ring - ${Fe(Tm)}) * hm, soft));
		cover = max(cover, barCov(abs(ring - ${Fe(Am)}) * hm, soft));
		return open * (1.0 - cover * 0.9);
	}

	// the same light for the beams in the air: the whole opening glows a
	// little, and the panes and bars show in it, softly
	float skylightVol(vec3 p) {
		if (p.y > ${Fe(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q = (p + L * ((${Fe(tl)} - p.y) / L.y)).xz;
		float open = rectOpen(q, vec4(${Fe(g0)}, ${Fe(ea)}, ${Fe(Jc)}, ${Fe(m0)}), 0.25);
		if (open <= 0.0) return 0.0;
		return open * (0.13 + 0.87 * skylightAt(p));
	}

	// light thrown back up by the bright squares on the floor: strongest
	// on what stands beside them and faces them (the lower walls, the
	// pillars, the statues, the ceiling above), fading with distance
	float skylightBounce(vec3 p, vec3 n) {
		if (p.x > 14.2 || p.x < -0.4) return 0.0;
		vec3 L = SKY_SUN;
		vec2 c = vec2(${Fe(14/2)}, ${Fe((ea+m0)/2)}) - L.xz * (${Fe(tl)} / L.y);
		vec2 d = max(abs(p.xz - c) - vec2(${Fe(7.75/2)}, ${Fe(13.05/2)}), 0.0);
		float fall = 1.0 / (1.0 + 0.09 * (dot(d, d) + p.y * p.y * 0.6));
		vec3 to = normalize(vec3(c.x, -0.4, c.y) - p);
		return fall * (0.3 + 0.7 * max(dot(n, to), 0.0));
	}

	// a soft daylight glow under the lantern
	float skylightGlow(vec3 p) {
		float z = smoothstep(${Fe(ea-3)}, ${Fe(ea+2)}, p.z)
		        * (1.0 - smoothstep(${Fe(m0-2)}, ${Fe(m0+3)}, p.z));
		float x = 1.0 - 0.35 * smoothstep(${Fe(7.75/2)}, ${Fe(14/2)}, abs(p.x - ${Fe(14/2)}));
		return z * x;
	}`}Lm.exports={addSkylight:q4,skylightGLSL:G4,Z_START:ea,Z_END:m0,GLASS_Y:tl,HEIGHT:8}});var pr=pt((Fk,Om)=>{"use strict";var $i=F0(),lu=8,Jo=.35,Gt={x0:13.65,x1:38.12,z0:41,z1:47.2,zc:44.1,hallEnd:50.65,spring:5.6,crown:lu},zm=(Gt.z1-Gt.z0)/2,su=Gt.crown-Gt.spring,cu=(su*su+zm*zm)/(2*su),fu=Gt.crown-cu;function Ii(t){let e=t-Gt.zc;return fu+Math.sqrt(Math.max(0,cu*cu-e*e))}var Te={first:17.43,pitch:4.4,count:5,halfW:1.2,sill:.75,spring:4.3},Oa=Array.from({length:Te.count},(t,e)=>Te.first+e*Te.pitch),Rm=Oa.slice(1).map(t=>t-Te.pitch/2),H4=[Oa[0],Oa[2],Oa[4]],If=[Oa[1],Oa[3]],Ur={r:1.3,sill:.62,spring:3.3},qo=[0,0,0],el=[11,0,0],q0=[10,0,0],ol=[8,0,0];function Qn(t,e,o,n,r,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),f=t.vert(n,a,s),l=t.vert(r,a,s);t.tri(i,c,f),t.tri(i,f,l)}function Br(t,e,o,n,r,a,s,i){t.box(Math.min(e,r),Math.min(o,a),Math.min(n,s),Math.max(e,r),Math.max(o,a),Math.max(n,s),i)}function nl(t,e){let{u0:o,u1:n,w0:r,w1:a,top:s,holes:i,mat:c}=e,f=new Set([o,n]);for(let h of i){f.add(h.u0),f.add(h.u1);let m=Math.max(8,Math.ceil((h.u1-h.u0)/(h.step||.08)));for(let g=1;g<m;g++)f.add(h.u0+(h.u1-h.u0)*g/m)}for(let h of e.cuts||[])f.add(h);let l=e.topStep||.5;for(let h=o;h<n;h+=l)f.add(h);let d=[...f].filter(h=>h>=o-1e-9&&h<=n+1e-9).sort((h,m)=>h-m),u=(h,m)=>h.bot?h.bot(m):h.bottom,v=(h,m)=>{let g=s(h),y=m.map(_=>[Math.max(0,u(_,h)),Math.min(_.head(h),g)]).filter(_=>_[1]>_[0]).sort((_,k)=>_[0]-k[0]),b=[],w=0;for(let _ of y)_[0]>w+1e-6&&b.push([w,_[0]]),w=Math.max(w,_[1]);return g>w+1e-6&&b.push([w,g]),b},p=(h,m,g)=>[h,m,g];for(let h=0;h<d.length-1;h++){let m=d[h],g=d[h+1],y=(m+g)/2,b=i.filter(C=>y>C.u0&&y<C.u1),w=b.length?Math.max(m,Math.max(...b.map(C=>C.u0))+1e-7):m,_=b.length?Math.min(g,Math.min(...b.map(C=>C.u1))-1e-7):g,k=v(w,b),N=v(_,b),G=Math.min(k.length,N.length);for(let C=0;C<G;C++){let[X,q]=k[C],[ot,D]=N[C];q-X<1e-6&&D-ot<1e-6||(Qn(t,p(m,X,a),p(g,ot,a),p(g,D,a),p(m,q,a),[0,0,1],c),e.frontOnly||Qn(t,p(g,ot,r),p(m,X,r),p(m,q,r),p(g,D,r),[0,0,-1],c))}}e.noEnds||(Qn(t,p(o,0,r),p(o,0,a),p(o,s(o),a),p(o,s(o),r),[-1,0,0],c),Qn(t,p(n,0,a),p(n,0,r),p(n,s(n),r),p(n,s(n),a),[1,0,0],c));for(let h of i){if(h.noReveal)continue;let m=h.mat||e.revealMat||c,g=Math.max(0,u(h,h.u0+1e-7)),y=Math.max(0,u(h,h.u1-1e-7)),b=Math.min(h.head(h.u0+1e-7),s(h.u0)),w=Math.min(h.head(h.u1-1e-7),s(h.u1));b>g+1e-6&&Qn(t,p(h.u0,g,a),p(h.u0,g,r),p(h.u0,b,r),p(h.u0,b,a),[1,0,0],m),w>y+1e-6&&Qn(t,p(h.u1,y,r),p(h.u1,y,a),p(h.u1,w,a),p(h.u1,w,r),[-1,0,0],m);let _=Math.max(8,Math.ceil((h.u1-h.u0)/(h.step||.06)));for(let k=0;k<_;k++){let N=h.u0+(h.u1-h.u0)*k/_,G=h.u0+(h.u1-h.u0)*(k+1)/_,C=Math.max(N,h.u0+1e-7),X=Math.min(G,h.u1-1e-7),q=Math.min(h.head(C),s(N)),ot=Math.min(h.head(X),s(G));if(!(q>=s(N)-1e-6&&ot>=s(G)-1e-6)){let Et=G-N,Ht=ot-q,Lt=Math.hypot(Et,Ht)||1;Qn(t,p(N,q,r),p(G,ot,r),p(G,ot,a),p(N,q,a),[Ht/Lt,-Et/Lt,0],m)}let D=u(h,C),K=u(h,X);if(D>1e-6||K>1e-6){let Et=G-N,Ht=K-D,Lt=Math.hypot(Et,Ht)||1;Qn(t,p(G,K,r),p(N,D,r),p(N,D,a),p(G,K,a),[-Ht/Lt,Et/Lt,0],m)}}}}var iu=(t,e,o)=>n=>{let r=n-t;return o+Math.sqrt(Math.max(0,e*e-r*r))};function U4(t,e){let o=Ur.r,n=Ur.sill,r=Ur.spring,a=Gt.z0,s=24,i=(v,p,h)=>[e+Math.cos(v)*p,h,a-Math.sin(v)*p];for(let v=0;v<s;v++){let p=Math.PI*v/s,h=Math.PI*(v+1)/s,m=[-Math.cos(p),0,Math.sin(p)],g=[-Math.cos(h),0,Math.sin(h)],y=[t.vert(i(p,o,n),m,qo),t.vert(i(h,o,n),g,qo),t.vert(i(h,o,r),g,qo),t.vert(i(p,o,r),m,qo)];t.tri(y[0],y[1],y[2]),t.tri(y[0],y[2],y[3])}let c=12,f=(v,p)=>[e+Math.cos(v)*Math.cos(p)*o,r+Math.sin(p)*o,a-Math.sin(v)*Math.cos(p)*o],l=(v,p)=>[-Math.cos(v)*Math.cos(p),-Math.sin(p),Math.sin(v)*Math.cos(p)];for(let v=0;v<s;v++)for(let p=0;p<c;p++){let h=Math.PI*v/s,m=Math.PI*(v+1)/s,g=Math.PI/2*p/c,y=Math.PI/2*(p+1)/c,b=[t.vert(f(h,g),l(h,g),q0),t.vert(f(m,g),l(m,g),q0),t.vert(f(m,y),l(m,y),q0),t.vert(f(h,y),l(h,y),q0)];t.tri(b[0],b[1],b[2]),t.tri(b[0],b[2],b[3])}for(let v=1;v<8;v++){let p=Math.PI*v/8,h=[];for(let m=0;m<=10;m++){let g=Math.PI/2*m/10*.97;h.push(f(p,g).map((y,b)=>y-l(p,g)[b]*.02))}t.tube(h,m=>.035*(1-m*.6),12,6,{mat:()=>q0})}let d=t.vert([e,n,a],[0,1,0],qo);for(let v=0;v<s;v++){let p=Math.PI*v/s,h=Math.PI*(v+1)/s;t.tri(d,t.vert(i(p,o,n),[0,1,0],qo),t.vert(i(h,o,n),[0,1,0],qo))}Br(t,e-o-.12,n-.1,a,e+o+.12,n+.02,a+.12,qo),Br(t,e-o-.16,n-.2,a,e+o+.16,n-.1,a+.07,qo);let u=.16;for(let v=0;v<s;v++){let p=Math.PI*v/s,h=Math.PI*(v+1)/s,m=(g,y,b)=>[e+Math.cos(g)*y,r+Math.sin(g)*y,b];Qn(t,m(p,o,a+.05),m(h,o,a+.05),m(h,o+u,a+.05),m(p,o+u,a+.05),[0,0,1],qo),Qn(t,m(p,o+u,a),m(h,o+u,a),m(h,o+u,a+.05),m(p,o+u,a+.05),[Math.cos((p+h)/2),Math.sin((p+h)/2),0],qo),Qn(t,m(p,o,a),m(h,o,a),m(h,o,a+.05),m(p,o,a+.05),[-Math.cos((p+h)/2),-Math.sin((p+h)/2),0],qo)}for(let v of[-1,1]){let p=e+v*o,h=e+v*(o+u);Br(t,p,n,a,h,r,a+.05,qo),Br(t,p-v*.02,r-.12,a,h+v*.06,r,a+.09,qo)}Br(t,e-.11,r+o-.04,a,e+.11,r+o+u+.1,a+.09,qo),t.lathe([[.66,n,1],[.66,n+.06,1],[.62,n+.1],[.6,n+.3],[.64,n+.34,1],[.64,n+.4,1],[0,n+.4]],e,a-.62,40,{mat:()=>qo})}var B4=Ur.sill+.4,j4=Gt.z0-.62;function W4(t){Qn(t,[14,0,Gt.z0-Jo],[Gt.x1+Jo,0,Gt.z0-Jo],[Gt.x1+Jo,0,Gt.z1+Jo],[14,0,Gt.z1+Jo],[0,1,0],qo),t.curMat=el,nl(t,{u0:14+Jo,u1:Gt.x1+2*Jo,w0:Gt.z0-2*Jo,w1:Gt.z0,top:()=>Gt.spring,holes:If.map(f=>({u0:f-Ur.r,u1:f+Ur.r,bottom:Ur.sill,head:iu(f,Ur.r,Ur.spring),noReveal:!0})),mat:el,cuts:[Gt.x1]});for(let f of If)U4(t,f);t.save(),t.translate(0,0,Gt.z1),t.rotateY(Math.PI),t.translate(-(Gt.x1+2*Jo),0,-2*Jo);let e=f=>Gt.x1+2*Jo-f;nl(t,{u0:e(Gt.x1+2*Jo),u1:e(13.65),w0:0,w1:2*Jo,top:()=>Gt.spring,holes:Oa.map(f=>({u0:e(f+Te.halfW),u1:e(f-Te.halfW),bottom:Te.sill,head:iu(e(f),Te.halfW,Te.spring)})),mat:el,revealMat:qo}),t.restore(),t.save(),t.translate(Gt.x1,0,0),t.rotateY(-Math.PI/2);let o=$i.DOOR,n=Gt.zc,r=o.r;nl(t,{u0:Gt.z0-2*Jo,u1:Gt.z1+2*Jo,w0:-2*Jo,w1:0,top:f=>f<Gt.z0||f>Gt.z1?Gt.spring:Ii(f),topStep:.15,holes:[{u0:n-r,u1:n+r,bottom:0,head:iu(n,r,o.spring)}],mat:el,revealMat:qo}),t.restore(),t.save(),t.translate(14+Jo,0,0),t.rotateY(-Math.PI/2),nl(t,{u0:Gt.z0,u1:Gt.z1,w0:-0,w1:2*Jo,top:()=>lu,topStep:.15,holes:[{u0:Gt.z0,u1:Gt.z1,bottom:0,head:f=>Ii(f)}],mat:el,revealMat:qo}),t.restore();let a=14+Jo,s=Math.ceil((Gt.x1-a)/1),i=28,c=[];for(let f=0;f<=s;f++){let l=a+(Gt.x1-a)*f/s,d=[];for(let u=0;u<=i;u++){let v=Gt.z0+(Gt.z1-Gt.z0)*u/i,p=Ii(v),h=[0,fu-p,Gt.zc-v],m=Math.hypot(h[1],h[2]);d.push(t.vert([l,p,v],[0,h[1]/m,h[2]/m],q0))}c.push(d)}for(let f=0;f<s;f++)for(let l=0;l<i;l++)t.tri(c[f][l],c[f+1][l],c[f][l+1]),t.tri(c[f+1][l],c[f+1][l+1],c[f][l+1])}function Nm(t,e,o,n){let a=[];for(let s=0;s<=32;s++){let i=Gt.z0+(Gt.z1-Gt.z0)*s/32,c=Ii(i),f=fu-c,l=Gt.zc-i,d=Math.hypot(f,l),u=[c+f/d*n,i+l/d*n];a.push({y:c,z:i,iy:u[0],iz:u[1],n:[0,f/d,l/d]})}for(let s=0;s<32;s++){let i=a[s],c=a[s+1];Qn(t,[e-o,i.iy,i.iz],[e+o,i.iy,i.iz],[e+o,c.iy,c.iz],[e-o,c.iy,c.iz],i.n,qo),Qn(t,[e-o,i.y,i.z],[e-o,i.iy,i.iz],[e-o,c.iy,c.iz],[e-o,c.y,c.z],[-1,0,0],qo),Qn(t,[e+o,i.iy,i.iz],[e+o,i.y,i.z],[e+o,c.y,c.z],[e+o,c.iy,c.iz],[1,0,0],qo)}}function Pf(t,e,o,n){let s=o,i=o+n*.16;Br(t,e-.28,0,s,e+.28,Gt.spring-.3,i,qo),Br(t,e-.28-.06,0,s,e+.28+.06,.32,o+n*(.16+.05),qo),Br(t,e-.28-.05,Gt.spring-.3,s,e+.28+.05,Gt.spring-.1,o+n*(.16+.05),qo),Br(t,e-.28-.1,Gt.spring-.1,s,e+.28+.1,Gt.spring,o+n*(.16+.1),qo)}function V4(t,e){let o=Ii(Gt.zc),n=[[0,o-.13,1],[.05,o-.125],[.12,o-.1],[.16,o-.06,1],[.22,o-.05],[.3,o-.075],[.4,o-.06],[.48,o-.03,1],[.55,o-.035],[.7,o-.025],[.82,o-.012,1],[.95,o+.03]];t.lathe(n,e,Gt.zc,48,{mat:()=>q0});for(let r=0;r<8;r++){let a=r*Math.PI/4,s=e+Math.cos(a)*.32,i=Gt.zc+Math.sin(a)*.32;t.save(),t.translate(s,o-.07,i),t.rotateY(-a),t.curMat=q0,t.ellipsoid([0,0,0],[.13,.03,.06],6,10),t.restore()}}function X4(t){t.curMat=qo;for(let[e,o]of[[Gt.z0,1],[Gt.z1,-1]])Br(t,14.35,Gt.spring-.12,e,Gt.x1,Gt.spring,e+o*.1,qo),Br(t,14.35,Gt.spring-.04,e,Gt.x1,Gt.spring+.05,e+o*.18,qo);for(let[e,o]of[[Gt.z0,1],[Gt.z1,-1]])Br(t,14.35,0,e,Gt.x1,.42,e+o*.12,qo),Br(t,14.35,.42,e,Gt.x1,.5,e+o*.07,qo);for(let e of Rm)Nm(t,e,.24,.16),Pf(t,e,Gt.z0,1),Pf(t,e,Gt.z1,-1);for(let e of[14.35+.28,Gt.x1-.28])Nm(t,e,.28,.22),Pf(t,e,Gt.z0,1),Pf(t,e,Gt.z1,-1);for(let e of Oa)V4(t,e)}function Y4(t){let e=Gt.z1+Jo,o=e-.04,n=e+.04,r=(i,c,f,l)=>Br(t,i,c,o,f,l,n,ol),a=Te.halfW,s=(i,c,f,l,d,u)=>{let v=(p,h,m)=>[i+h*Math.cos(p),Te.spring+h*Math.sin(p),m];for(let p=0;p<u;p++){let h=l+(d-l)*p/u,m=l+(d-l)*(p+1)/u;Qn(t,v(h,c,o),v(m,c,o),v(m,f,o),v(h,f,o),[0,0,-1],ol),Qn(t,v(h,f,n),v(m,f,n),v(m,c,n),v(h,c,n),[0,0,1],ol)}};for(let i of Oa){let c=i-a,f=i+a;r(c,Te.sill,c+.07,Te.spring),r(f-.07,Te.sill,f,Te.spring),r(c,Te.sill,f,Te.sill+.07),r(c,Te.spring-.04,f,Te.spring+.04);for(let d of[-.5,0,.5])r(i+d*a-.022,Te.sill,i+d*a+.022,Te.spring);let l=6;for(let d=1;d<l;d++){let u=Te.sill+(Te.spring-Te.sill)*d/l;r(c,u-.02,f,u+.02)}s(i,a-.07,a,0,Math.PI,32),s(i,.42,.46,0,Math.PI,20);for(let d=1;d<6;d++){let u=Math.PI*d/6,v=Math.cos(u),p=Math.sin(u),h=.02,m=(g,y)=>[i+v*g-p*h*y,Te.spring+p*g+v*h*y];Qn(t,[...m(.44,-1),o],[...m(a-.05,-1),o],[...m(a-.05,1),o],[...m(.44,1),o],[0,0,-1],ol),Qn(t,[...m(.44,1),n],[...m(a-.05,1),n],[...m(a-.05,-1),n],[...m(.44,-1),n],[0,0,1],ol)}}}function K4(){let t=[],e=Gt.z1+Jo;for(let o of Oa){let n=o-Te.halfW,r=o+Te.halfW;t.push([n,Te.sill,e],[r,Te.sill,e],[r,Te.spring,e],[n,Te.sill,e],[r,Te.spring,e],[n,Te.spring,e]);for(let a=0;a<24;a++){let s=Math.PI*a/24,i=Math.PI*(a+1)/24;t.push([o,Te.spring,e],[o+Te.halfW*Math.cos(s),Te.spring+Te.halfW*Math.sin(s),e],[o+Te.halfW*Math.cos(i),Te.spring+Te.halfW*Math.sin(i),e])}}return t}function Cm(t,e){t.save(),t.translate(Gt.x1+Jo,0,Gt.zc-7),t.rotateY(-Math.PI/2),e(),t.restore()}function Q4(t){Cm(t,()=>{$i.addSurround(t),$i.addFrames(t,"fixed")})}function Z4(t){return $i.glassPanes(t||"fixed").map(([o,n,r])=>[Gt.x1+Jo-r,n,Gt.zc-7+o])}function J4(t){W4(t),X4(t),Y4(t),Q4(t),t.curMat=[0,0,0]}var t_={x:Gt.x1+Jo,zLo:Gt.zc-$i.DOOR.r,zHi:Gt.zc+$i.DOOR.r},po=t=>t.toFixed(4);function e_(){return`
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
		float k = floor((q.x - ${po(Te.first)}) / ${po(Te.pitch)} + 0.5);
		if (k < 0.0 || k > ${po(Te.count-1)}) return 0.0;
		float dx = q.x - (${po(Te.first)} + k * ${po(Te.pitch)});
		float side = 1.0 - smoothstep(${po(Te.halfW)} - soft, ${po(Te.halfW)} + soft, abs(dx));
		float sill = smoothstep(${po(Te.sill)} - soft, ${po(Te.sill)} + soft, q.y);
		float r = length(vec2(dx, q.y - ${po(Te.spring)}));
		float head = q.y < ${po(Te.spring)} ? 1.0 : 1.0 - smoothstep(${po(Te.halfW)} - soft, ${po(Te.halfW)} + soft, r);
		float open = side * sill * head;
		// the black glazing bars, softly
		float cover = 0.0;
		cover = max(cover, winBar(abs(dx), 0.022, soft));
		cover = max(cover, winBar(abs(abs(dx) - ${po(Te.halfW*.5)}), 0.022, soft));
		float rowH = ${po((Te.spring-Te.sill)/6)};
		float ry = (q.y - ${po(Te.sill)}) / rowH;
		cover = max(cover, q.y < ${po(Te.spring)} ? winBar(abs(fract(ry + 0.5) - 0.5) * rowH, 0.02, soft) : 0.0);
		cover = max(cover, q.y > ${po(Te.spring)} ? winBar(abs(r - 0.44), 0.02, soft) : 0.0);
		return open * (1.0 - cover * 0.75);
	}

	// daylight reaching point p from the windows
	float windowLight(vec3 p, vec3 n) {
		if (p.x < ${po(Gt.x0)} || p.z < ${po(Gt.z0-.1)} || p.z > ${po(Gt.z1)}) return 0.0;
		float ndl = max(dot(n, WIN_SKY), 0.0);
		if (ndl <= 0.0) return 0.0;
		float tIn = (${po(Gt.z1)} - p.z) / WIN_SKY.z;
		float tOut = (${po(Gt.z1+2*Jo)} - p.z) / WIN_SKY.z;
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
		${If.map(t=>`{ float d = abs(p.x - ${po(t)}); if (d < best) { best = d; lamp = vec3(${po(t)}, ${po(Ur.spring+.55)}, ${po(Gt.z0-.15)}); } }`).join(`
		`)}
		return lamp;
	}

	float nicheLight(vec3 p, vec3 n) {
		if (p.z > ${po(Gt.z0+1.6)} || p.z < ${po(Gt.z0-Ur.r-.1)} || p.x < ${po(Gt.x0)}) return 0.0;
		vec3 lamp = nicheLamp(p);
		vec3 d = lamp - p;
		float dist = length(d);
		vec3 L = d / dist;
		// a cone pointing down into the niche
		float cone = smoothstep(0.35, 0.75, dot(-L, normalize(vec3(0.0, -1.0, 0.35))));
		float inside = 1.0 - smoothstep(${po(Ur.r)}, ${po(Ur.r+.5)}, abs(p.x - lamp.x));
		return max(dot(n, L), 0.0) * cone * inside / (1.0 + 0.35 * dist * dist);
	}

	// soft general daylight in the corridor, strongest near the glass
	float corridorGlow(vec3 p) {
		if (p.x < ${po(Gt.x0-1)}) return 0.0;
		float inC = smoothstep(${po(Gt.z0-1.5)}, ${po(Gt.z0)}, p.z) * smoothstep(${po(Gt.x0-1)}, ${po(Gt.x0+1)}, p.x);
		float near = 0.55 + 0.45 * smoothstep(${po(Gt.z0)}, ${po(Gt.z1)}, p.z);
		return inC * near;
	}`}Om.exports={wallWithHoles:nl,windowLightGLSL:e_,addWing:J4,windowGlass:K4,farDoorGlass:Z4,atFarDoor:Cm,FAR_DOOR:t_,vaultY:Ii,C:Gt,NICHE_X:If,NICHE:Ur,NICHE_PLINTH_TOP:B4,NICHE_STATUE_Z:j4,WIN:Te,winCentres:Oa,piers:Rm,PAINTING_X:H4,HEIGHT:lu}});var xa=pt((qk,$m)=>{"use strict";var hu=pr(),Yo=8,Di=.35,Ns=14,qi=4,Jt={x0:Ns+Di,x1:Ns+Di+2*qi,z0:5.9-qi,z1:5.9+qi,zc:5.9,cx:Ns+Di+qi,arch:{r:2.6,spring:4.4},dome:{r:3.3,base:Yo},oculus:3.3};Jt.domeTop=Jt.dome.base+Jt.dome.r;var Gi={spokes:16,ringE:[.42,.95],bar:.035},qn={sxz:1.32,sy:1.6,yaw:.6};qn.crownC=[Jt.cx,.4+3.4*qn.sy,Jt.zc];qn.crownR=[2.3*qn.sxz,1.9*qn.sy,2.3*qn.sxz];qn.trunkR=.26*qn.sxz;qn.trunkTop=.4+2.2*qn.sy;var Pm={inner:1.05,outer:1.62,seat:.48,soil:.4},qf=(()=>{let t=[.2,1,-.15],e=Math.hypot(...t);return t.map(o=>o/e)})(),Zn=[0,0,0],Fi=[11,0,0],$f=[10,0,0],Ff=[9,0,0],o_=[5,0,0],uu=[3,0,0];function y0(t,e,o,n,r,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),f=t.vert(n,a,s),l=t.vert(r,a,s);t.tri(i,c,f),t.tri(i,f,l)}function Rr(t,e,o,n,r,a,s,i){t.box(Math.min(e,r),Math.min(o,a),Math.min(n,s),Math.max(e,r),Math.max(o,a),Math.max(n,s),i)}var n_=(t,e,o)=>n=>{let r=n-t;return o+Math.sqrt(Math.max(0,e*e-r*r))};function r_(t){t.save(),t.translate(Ns+Di,0,0),t.rotateY(-Math.PI/2),hu.wallWithHoles(t,{u0:0,u1:hu.C.z0,w0:0,w1:2*Di,top:()=>Yo,holes:[{u0:Jt.zc-Jt.arch.r,u1:Jt.zc+Jt.arch.r,bottom:0,head:n_(Jt.zc,Jt.arch.r,Jt.arch.spring),step:.05}],mat:Fi,revealMat:Zn,topStep:1}),t.restore();let e=Ns-Di;for(let[s,i]of[[0,Jt.zc-Jt.arch.r],[Jt.zc+Jt.arch.r,hu.C.z0]])Rr(t,e-.12,0,s,e,.42,i,Zn),Rr(t,e-.07,.42,s,e,.5,i,Zn);let o=e,n=.24,r=40,a=(s,i,c)=>[c,Jt.arch.spring+Math.sin(s)*i,Jt.zc+Math.cos(s)*i];for(let s=0;s<r;s++){let i=Math.PI*s/r,c=Math.PI*(s+1)/r;y0(t,a(i,Jt.arch.r,o-.07),a(c,Jt.arch.r,o-.07),a(c,Jt.arch.r+n,o-.07),a(i,Jt.arch.r+n,o-.07),[-1,0,0],Zn),y0(t,a(i,Jt.arch.r+n,o),a(c,Jt.arch.r+n,o),a(c,Jt.arch.r+n,o-.07),a(i,Jt.arch.r+n,o-.07),[0,Math.sin((i+c)/2),Math.cos((i+c)/2)],Zn),y0(t,a(i,Jt.arch.r,o),a(c,Jt.arch.r,o),a(c,Jt.arch.r,o-.07),a(i,Jt.arch.r,o-.07),[0,-Math.sin((i+c)/2),-Math.cos((i+c)/2)],Zn)}Rr(t,o-.12,Jt.arch.spring+Jt.arch.r-.06,Jt.zc-.17,o,Jt.arch.spring+Jt.arch.r+n+.16,Jt.zc+.17,Zn);for(let s of[-1,1]){let i=Jt.zc+s*Jt.arch.r,c=Jt.zc+s*(Jt.arch.r+n);Rr(t,o-.07,0,i,o,Jt.arch.spring,c,Zn),Rr(t,o-.13,Jt.arch.spring-.16,i-s*.03,o,Jt.arch.spring,c+s*.08,Zn),Rr(t,o-.12,0,i-s*.03,o,.5,c+s*.06,Zn)}}function a_(t){let{x0:e,x1:o,z0:n,z1:r}=Jt;y0(t,[Ns,0,n],[o,0,n],[o,0,r],[Ns,0,r],[0,1,0],Zn),t.curMat=Fi,y0(t,[o,0,n],[o,0,r],[o,Yo,r],[o,Yo,n],[-1,0,0],Fi),y0(t,[e,0,n],[o,0,n],[o,Yo,n],[e,Yo,n],[0,0,1],Fi),y0(t,[o,0,r],[e,0,r],[e,Yo,r],[o,Yo,r],[0,0,-1],Fi),y0(t,[e,0,r],[e,0,n],[e,Yo,n],[e,Yo,r],[1,0,0],Fi),Rr(t,o-.12,0,n,o,.42,r,Zn),Rr(t,e,0,n,o,.42,n+.12,Zn),Rr(t,e,0,r-.12,o,.42,r,Zn),Rr(t,o-.2,Yo-.3,n,o,Yo,r,Zn),Rr(t,e,Yo-.3,n,o,Yo,n+.2,Zn),Rr(t,e,Yo-.3,r-.2,o,Yo,r,Zn),Rr(t,e,Yo-.3,n,e+.2,Yo,r,Zn);let a=Jt.dome.r,s=48,i=[];for(let g=0;g<=s;g++){let y=Math.PI*2*g/s;i.push([Jt.cx+Math.cos(y)*a,Jt.zc+Math.sin(y)*a])}let c=g=>{let y=Math.abs(Math.cos(g)),b=Math.abs(Math.sin(g));return Math.min(qi/Math.max(y,1e-6),qi/Math.max(b,1e-6))};for(let g=0;g<s;g++){let y=Math.PI*2*g/s,b=Math.PI*2*(g+1)/s,w=c(y),_=c(b),k=[Jt.cx+Math.cos(y)*w,Yo,Jt.zc+Math.sin(y)*w],N=[Jt.cx+Math.cos(b)*_,Yo,Jt.zc+Math.sin(b)*_];y0(t,[i[g][0],Yo,i[g][1]],[i[g+1][0],Yo,i[g+1][1]],N,k,[0,-1,0],$f)}t.lathe([[a+.02,Yo-.18,1],[a-.12,Yo-.18,1],[a-.12,Yo-.06,1],[a-.05,Yo,1],[a,Yo+.02]],Jt.cx,Jt.zc,s,{mat:()=>Zn});let f=16,l=(g,y,b)=>[Jt.cx+Math.cos(g)*Math.cos(y)*b,Jt.dome.base+Math.sin(y)*b,Jt.zc+Math.sin(g)*Math.cos(y)*b],d=Math.PI/2;for(let g=0;g<s;g++)for(let y=0;y<f;y++){let b=Math.PI*2*g/s,w=Math.PI*2*(g+1)/s,_=d*y/f,k=d*(y+1)/f,N=(C,X)=>[-Math.cos(C)*Math.cos(X),-Math.sin(X),-Math.sin(C)*Math.cos(X)],G=[t.vert(l(b,_,a),N(b,_),Ff),t.vert(l(w,_,a),N(w,_),Ff),t.vert(l(w,k,a),N(w,k),Ff),t.vert(l(b,k,a),N(b,k),Ff)];t.tri(G[0],G[1],G[2]),t.tri(G[0],G[2],G[3])}for(let g=0;g<Gi.spokes;g++){let y=Math.PI*2*g/Gi.spokes,b=[];for(let w=0;w<=14;w++)b.push(l(y,(d-.06)*w/14,a-.04));t.tube(b,()=>.04,20,6,{mat:()=>$f})}for(let g of Gi.ringE){let y=Math.cos(g)*(a-.04),b=Jt.dome.base+Math.sin(g)*(a-.04),w=[];for(let _=0;_<=72;_++){let k=Math.PI*2*_/72;w.push([Jt.cx+Math.cos(k)*y,b,Jt.zc+Math.sin(k)*y])}t.tube(w,()=>.035,72,6,{mat:()=>$f})}t.ellipsoid([Jt.cx,Jt.dome.base+a-.06,Jt.zc],[.16,.08,.16],6,12,{mat:()=>$f});let u=.46,v=.55,p=.12,h=(g,y,b,w)=>{Rr(t,g,u-.08,y,b,u,w,uu);let _=b-g>w-y?[g+.25,b-.25]:[g+.06,b-.06],k=b-g>w-y?[y+.06,w-.06]:[y+.25,w-.25];Rr(t,_[0],0,k[0],_[1],u-.08,k[1],uu)};h(o-p-v,n+1.1,o-p,r-1.1),h(e+1,n+p,o-1.1,n+p+v),h(e+1,r-p-v,o-1.1,r-p);let m=Pm;t.lathe([[m.outer,0,1],[m.outer,m.seat-.1,1],[m.outer+.07,m.seat-.07,1],[m.outer+.07,m.seat,1],[m.inner-.05,m.seat,1],[m.inner-.05,m.seat-.06,1],[m.inner,m.seat-.08,1],[m.inner,m.soil]],Jt.cx,Jt.zc,64,{mat:()=>uu}),t.lathe([[m.inner,m.soil,1],[0,m.soil+.03]],Jt.cx,Jt.zc,48,{mat:()=>o_})}function s_(t){r_(t),a_(t),t.curMat=[0,0,0]}var Do=t=>t.toFixed(4);function Im(){let t=Jt.dome.r,e=Gi.ringE.map(o=>Math.cos(o)*t);return`
	const vec3 SHAFT = vec3(${Do(qf[0])}, ${Do(qf[1])}, ${Do(qf[2])});

	// how much sun the glass dome lets through towards p (0..1): the round
	// opening, less the soft shadows of its ribs and rings (worked out on
	// the dome's base, where the frame is seen almost straight on)
	float oculusOpen(vec3 p) {
		float t = (${Do(Jt.dome.base+.6)} - p.y) / SHAFT.y;
		vec3 q = p + SHAFT * t;
		vec2 d2 = q.xz - vec2(${Do(Jt.cx)}, ${Do(Jt.zc)});
		float d = length(d2);
		float soft = 0.02 + 0.012 * t;
		float open = 1.0 - smoothstep(${Do(t-.15)} - soft, ${Do(t-.15)} + soft, d);
		float hw = ${Do(Gi.bar)};
		float cover = 0.0;
		${e.map(o=>`cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, abs(d - ${Do(o)})));`).join(`
		`)}
		float ang = atan(d2.y, d2.x);
		float stp = ${Do(Math.PI*2/Gi.spokes)};
		float da = abs(mod(ang + stp * 0.5, stp) - stp * 0.5);
		cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, d * sin(da)));
		cover = max(cover, 1.0 - smoothstep(0.16 - soft, 0.16 + soft, d));
		return open * (1.0 - cover * 0.85);
	}

	// the tree's own shade: its crown lets dappled light through, its
	// trunk blocks it
	float treeShade(vec3 p) {
		vec3 c = vec3(${Do(qn.crownC[0])}, ${Do(qn.crownC[1])}, ${Do(qn.crownC[2])});
		vec3 r = vec3(${Do(qn.crownR[0])}, ${Do(qn.crownR[1])}, ${Do(qn.crownR[2])});
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
		float tt = (${Do(qn.trunkTop)} - p.y) / SHAFT.y;
		if (tt > 0.0) {
			vec2 o = p.xz - vec2(${Do(Jt.cx)}, ${Do(Jt.zc)});
			vec2 dir = SHAFT.xz;
			float k = clamp(-dot(o, dir) / dot(dir, dir), 0.0, tt);
			float dist = length(o + dir * k);
			tr *= smoothstep(${Do(qn.trunkR*.7)}, ${Do(qn.trunkR*1.3)}, dist);
		}
		return tr;
	}`}function i_(){return`
	${Im()}

	// sunlight through the oculus reaching p (0..1)
	float alcoveSun(vec3 p, vec3 n) {
		if (p.x < ${Do(Jt.x0-.75)} || p.z < ${Do(Jt.z0-.5)} || p.z > ${Do(Jt.z1+.5)}) return 0.0;
		float ndl = max(dot(n, SHAFT), 0.0);
		if (ndl <= 0.0) return 0.0;
		return ndl * oculusOpen(p) * treeShade(p);
	}

	// soft daylight filling the court, brightest under the dome
	float alcoveGlow(vec3 p) {
		if (p.x < ${Do(Jt.x0-1.5)} || p.z < ${Do(Jt.z0-1.5)} || p.z > ${Do(Jt.z1+1.5)}) return 0.0;
		float inside = smoothstep(${Do(Jt.x0-1.2)}, ${Do(Jt.x0+.6)}, p.x);
		float d = length(p.xz - vec2(${Do(Jt.cx)}, ${Do(Jt.zc)}));
		return inside * (0.55 + 0.45 * smoothstep(0.0, 8.0, p.y)) * (1.0 - 0.35 * smoothstep(1.0, 5.0, d));
	}`}$m.exports={addAlcove:s_,alcoveLightGLSL:i_,oculusGLSL:Im,A:Jt,BENCH:Pm,SHAFT:qf,TREE:qn}});var cr=pt((Dk,qm)=>{"use strict";var Pa=0;try{let t=location.search;/[?&]night\b/.test(t)&&(Pa=1)}catch(t){}var b0=Pa,du=0,Fm=[],Df={tick(t){let e=du?Math.min(.1,t-du):0;if(du=t,b0!==Pa){let o=e/2.4;b0=Pa>b0?Math.min(Pa,b0+o):Math.max(Pa,b0-o)}return Df.night},get night(){return b0*b0*(3-2*b0)},get isNight(){return Pa===1},get settled(){return b0===Pa},set(t){Pa=t?1:0,Fm.forEach(e=>e(Pa))},toggle(){Df.set(!Pa)},onChange(t){Fm.push(t)}};Df.GLSL=`
uniform float night;
vec3 toNight(vec3 c, float keep) {
	float l = dot(c, vec3(0.299, 0.587, 0.114));
	vec3 n = mix(vec3(l), c, 0.35) * vec3(0.55, 0.70, 1.05) * keep;
	return mix(c, n, night);
}
`;qm.exports=Df});var G0=pt((Gk,sl)=>{"use strict";var pu=cr(),{C:vu}=pr(),{A:Gf,BENCH:rl}=xa(),Dn=Math.PI,c_=[18,29,40],Hf=.575,D0=[],al=(t,e,o,n,r,a,s)=>D0.push(Object.assign({x:t,y:e,z:o,o:n,back:r,hw:a,s:1,k:1,range:7,mount:"wall"},s||{}));c_.forEach(t=>{al(1.25+Hf+.48,3.25,t,[1,0],.48,Hf,{s:1.2}),al(12.75-Hf-.48,3.25,t,[-1,0],.48,Hf,{s:1.2})});[3,11].forEach(t=>al(t,3.45,vu.hallEnd-.5,[0,-1],.5,99,{s:1.2}));var l_=[14.63,19.63,24.03,28.43,32.83,vu.x1-.28];l_.forEach(t=>al(t,3.15,vu.z0+.16+.44,[0,1],.44,.28));[3,8.8].forEach(t=>al(.35+.44,2.75,t,[1,0],.44,99));{let t=(rl.inner+rl.outer)/2,e=Math.atan2(-1.12,-.98);D0.push({x:Gf.cx+Math.cos(e)*t,y:rl.seat+.155,z:Gf.zc+Math.sin(e)*t,o:[Math.cos(e),Math.sin(e)],back:0,hw:0,ring:[Gf.cx,Gf.zc,rl.outer+.07,rl.seat],s:.52,k:2.2,range:3.6,mount:"table"})}var mu=.13,Uf=.21,Jn=mu/Math.cos(Dn/6),Co=t=>t.toFixed(4);function Dm(t){let o=(t||D0.map((n,r)=>r)).map(n=>{let r=D0[n],a=-r.o[1],s=r.o[0],i=r.mount==="table"?`
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
		float t = mod(az + ${Co(Dn/6)}, ${Co(Dn/3)}) - ${Co(Dn/6)};
		float U = tan(t) / ${Co(Math.tan(Dn/6))};
		float V = (q.y / h) * (${Co(mu/Uf)} / cos(t));
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
	}`}var tn=0,f_=1;function h_(){let t=[],e=[],o=[],n=[],r=[],a=(v,p,h,m)=>(t.push(v[0],v[1],v[2]),e.push(p[0],p[1],p[2]),o.push(h),n.push(m?m[0]:0,m?m[1]:0),t.length/3-1),s=(v,p)=>[v[0]-p[0],v[1]-p[1],v[2]-p[2]],i=(v,p)=>[v[1]*p[2]-v[2]*p[1],v[2]*p[0]-v[0]*p[2],v[0]*p[1]-v[1]*p[0]],c=v=>{let p=Math.hypot(v[0],v[1],v[2])||1;return[v[0]/p,v[1]/p,v[2]/p]};function f(v,p,h,m,g,y){let b=c(i(s(p,v),s(m,v))),w=a(v,b,g,[0,0]),_=a(p,b,g,[1,0]),k=a(h,b,g,[1,1]),N=a(m,b,g,[0,1]);r.push(w,_,k,w,k,N),y&&r.push(w,k,_,w,N,k)}function l(v,p,h){for(let y=0;y<v.length;y++){let b=v[Math.max(0,y-1)],w=v[Math.min(v.length-1,y+1)],_=c(s(w,b)),k=Math.abs(_[1])>.9?[1,0,0]:[0,1,0],N=c(i(_,k)),G=i(N,_),C=typeof p=="function"?p(y/(v.length-1)):p;for(let X=0;X<=6;X++){let q=X/6*Dn*2,ot=Math.cos(q),D=Math.sin(q),K=[N[0]*ot+G[0]*D,N[1]*ot+G[1]*D,N[2]*ot+G[2]*D];a([v[y][0]+K[0]*C,v[y][1]+K[1]*C,v[y][2]+K[2]*C],K,h)}}let g=t.length/3-v.length*7;for(let y=0;y<v.length-1;y++)for(let b=0;b<6;b++){let w=g+y*7+b,_=w+6+1;r.push(w,_,w+1,w+1,_,_+1)}}function d(v,p,h,m,g,y,b,w,_){let k=(N,G,C)=>{let X=y+Dn/6+C*Dn/3;return[v[0]+Math.cos(X)*N,G,v[2]+Math.sin(X)*N]};for(let N=0;N<6;N++)f(k(m,p,N+1),k(m,p,N),k(g,h,N),k(g,h,N+1),b);if(w&&g>0)for(let N=0;N<6;N++){let G=a([v[0],h,v[2]],[0,1,0],b),C=a(k(g,h,N),[0,1,0],b),X=a(k(g,h,N+1),[0,1,0],b);r.push(G,X,C)}if(_&&m>0)for(let N=0;N<6;N++){let G=a([v[0],p,v[2]],[0,-1,0],b),C=a(k(m,p,N),[0,-1,0],b),X=a(k(m,p,N+1),[0,-1,0],b);r.push(G,C,X)}}function u(v,p,h,m,g,y,b){let w=[];for(let k=0;k<=18;k++){let N=k/18,G=(b||0)+N*m*Dn*2,C=h*(1-.75*N);w.push([v[0]+p[0]*Math.cos(G)*C,v[1]+Math.sin(G)*C,v[2]+p[2]*Math.cos(G)*C])}l(w,g,y)}return D0.forEach(v=>{let p=v.s,h=Math.atan2(v.o[1],v.o[0]),m=[v.x,v.y,v.z],g=(w,_,k)=>[v.x+v.o[0]*w-v.o[1]*(k||0),v.y+_,v.z+v.o[1]*w+v.o[0]*(k||0)],y=v.y-Uf*p,b=v.y+Uf*p;for(let w=0;w<6;w++){let _=h+Dn/6+w*Dn/3,k=_+Dn/3,N=Jn*p*.97,G=[v.x+Math.cos(_)*N,y,v.z+Math.sin(_)*N],C=[v.x+Math.cos(k)*N,y,v.z+Math.sin(k)*N];f(C,G,[G[0],b,G[2]],[C[0],b,C[2]],f_,!0)}for(let w=0;w<6;w++){let _=h+Dn/6+w*Dn/3,k=Jn*p;l([[v.x+Math.cos(_)*k,y-.02*p,v.z+Math.sin(_)*k],[v.x+Math.cos(_)*k,b+.02*p,v.z+Math.sin(_)*k]],.011*p,tn)}d(m,y-.035*p,y,Jn*p*1.12,Jn*p*1.12,h,tn,!0,!0),d(m,y-.1*p,y-.035*p,Jn*p*.55,Jn*p*1,h,tn,!1,!0),d(m,y-.17*p,y-.1*p,0,Jn*p*.55,h,tn,!1,!1);for(let w=0;w<6;w++){let _=h+w*Dn/3,k=mu*p*1.06,N=[v.x+Math.cos(_)*k,y-.06*p,v.z+Math.sin(_)*k];u(N,[-Math.sin(_),0,Math.cos(_)],.03*p,.85,.004*p,tn,.3)}d(m,b,b+.03*p,Jn*p*1.14,Jn*p*1.14,h,tn,!1,!0),d(m,b+.03*p,b+.2*p,Jn*p*1.14,Jn*p*.32,h,tn,!1,!1),d(m,b+.2*p,b+.27*p,Jn*p*.34,Jn*p*.34,h,tn,!1,!1),d(m,b+.27*p,b+.37*p,Jn*p*.42,0,h,tn,!1,!0),l([[v.x,b+.36*p,v.z],[v.x,b+.47*p,v.z]],w=>.01*p*(1-.7*w),tn),d([v.x,0,v.z],b+.44*p,b+.47*p,.018*p,0,h,tn,!1,!0);for(let w=0;w<6;w++){let _=h+Dn/6+w*Dn/3,k=Jn*p*1.14,N=[v.x+Math.cos(_)*k,b+.03*p,v.z+Math.sin(_)*k];l([N,[N[0],N[1]+.09*p,N[2]]],G=>.008*p*(1-.8*G),tn),d([N[0],0,N[2]],N[1]+.035*p,N[1]+.06*p,.014*p,.014*p,_,tn,!0,!0)}if(v.mount==="wall"){let w=v.back,_=y-.32,k=g(-w,0,0);((q,ot,D)=>{let K=[v.o[0],0,v.o[1]],Et=[-v.o[1],0,v.o[0]],Ht=(lt,Bt,Ge)=>[k[0]+Et[0]*lt+K[0]*Ge,Bt,k[2]+Et[2]*lt+K[2]*Ge],Lt=.03,xt=.065;f(Ht(-D,q,xt),Ht(D,q,xt),Ht(D,ot,xt),Ht(-D,ot,xt),tn,!0),f(Ht(D,q,Lt),Ht(D,q,xt),Ht(D,ot,xt),Ht(D,ot,Lt),tn,!0),f(Ht(-D,q,xt),Ht(-D,q,Lt),Ht(-D,ot,Lt),Ht(-D,ot,xt),tn,!0),f(Ht(-D,ot,xt),Ht(D,ot,xt),Ht(D,ot,Lt),Ht(-D,ot,Lt),tn,!0),f(Ht(-D,q,Lt),Ht(D,q,Lt),Ht(D,q,xt),Ht(-D,q,xt),tn,!0),d([k[0]+K[0]*xt,0,k[2]+K[2]*xt],ot,ot+.05,D*.6,0,h,tn,!1,!0),d([k[0]+K[0]*xt,0,k[2]+K[2]*xt],q-.05,q,0,D*.6,h,tn,!1,!1)})(_-.2,_+.2,.07);let G=[];for(let q=0;q<=14;q++){let ot=q/14,D=-w+.05+ot*(w-.05),K=_+.04+(y-.17*p-_-.04)*Math.pow(ot,2.2);G.push(g(D,K-v.y,0))}l(G,q=>.022*(1-.3*q),tn);let C=[];for(let q=0;q<=10;q++){let ot=q/10;C.push(g(-w+.05+ot*w*.6,_-.14+ot*.16+.05*Math.sin(ot*Dn)-v.y,0))}l(C,.009,tn);let X=C[C.length-1];u([X[0]-v.o[0]*.03,X[1]+.02,X[2]-v.o[1]*.03],[v.o[0],0,v.o[1]],.045,1.1,.007,tn,-.4),[.3,.55].forEach(q=>{let ot=G[Math.round(q*14)],D=C[Math.round(q/.62*10)]||C[10];l([ot,D],.006,tn)}),[-1,1].forEach(q=>{let ot=g(-.05,-Uf*p-.2*p,0);u([ot[0]-v.o[1]*q*.05,ot[1],ot[2]+v.o[0]*q*.05],[-v.o[1]*q,0,v.o[0]*q],.05*p,.9,.006,tn,Dn)})}else for(let w=0;w<3;w++){let _=h+w*Dn*2/3,k=[v.x+Math.cos(_)*Jn*p*.7,y-.035*p,v.z+Math.sin(_)*Jn*p*.7],N=[v.x+Math.cos(_)*Jn*p*1.25,y-.17*p,v.z+Math.sin(_)*Jn*p*1.25];l([k,N],.012*p,tn)}}),{pos:t,nrm:e,kind:o,uv:n,elems:r}}sl.exports=t=>{let e=h_(),o=t({vert:`
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
		${Dm()}
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
		}`,attributes:{position:e.pos,normal:e.nrm,kind:e.kind,uv:e.uv},elements:e.elems,uniforms:{time:t.context("time"),night:()=>pu.night}}),n=[],r=[];D0.forEach((s,i)=>{[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(c=>{n.push(c[0],c[1]),r.push(s.x,s.y,s.z,s.s+i*.001)})});let a=t({vert:`
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
		}`,attributes:{corner:n,at:r},count:n.length/2,uniforms:{time:t.context("time"),night:()=>pu.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(){o(),pu.night>.01&&a()}};sl.exports.lanternGLSL=Dm;sl.exports.LANTERNS=D0;sl.exports.TREE_LANTERN=[D0.length-1]});var B0=pt((Hk,jr)=>{"use strict";var u_=cr(),Io=Math.PI,Gn=t=>(+t).toFixed(4),d_=t=>`vec3(${Gn(t[0])}, ${Gn(t[1])}, ${Gn(t[2])})`,Le={x:-7,z:44.5},Ke=5.2,lr=15,ne={z0:42.6,z1:46.4,zc:44.5,spring:4,r:1.9},o0={z0:42.2,z1:46.8,top:6.3,x:.35},Wf=[Le.x-Math.sqrt(Ke*Ke-3.05*3.05),0,0],Mn={x0:-2.05+Wf[0],x1:Wf[0],z0:41.45,z1:47.55,top:4.3},gu=[[Mn.x1+.05,2.35,Mn.z0-.45],[Mn.x1+.05,2.35,Mn.z1+.45]].map(([t,e,o])=>{let n=Math.atan2(o-Le.z,t-Le.x);return[Le.x+Math.cos(n)*(Ke-.16),e,Le.z+Math.sin(n)*(Ke-.16)]}),To={ri:3.4,ro:Ke,a0:-35*Io/180,rise:.1836,step:3.6*Io/180,n:88,thick:.36};To.k=To.rise/To.step;var Cr=t=>To.a0-t,U0=t=>t*To.k,an={x:Le.x+.1,z:Le.z-.15,yaw:-Io/2,scale:1.3},w0=an.scale/1.1,il={keyX0:an.x-.524*w0,keyX1:an.x+.491*w0,keyTop:.647*w0,keyFront:an.z+.808*w0,keyBack:an.z+.72*w0,stoolX:an.x-.041*w0,stoolZ:an.z+1.122*w0,stoolFront:an.z+.96*w0,stoolTop:.37*w0,heading:Io},jf=[[3.6,44.5],[.6,44.5],[-2.2,44.7],[-4.5,46.5],[-7,47.2],[-9.4,46.6],[-10.5,44.9],[-10.9,43.2]];function Hm(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let o=e;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}function p_(t,e){let o=1e9;for(let n=0;n<jf.length-1;n++){let[r,a]=jf[n],[s,i]=jf[n+1],c=s-r,f=i-a,l=Math.max(0,Math.min(1,((t-r)*c+(e-a)*f)/(c*c+f*f)));o=Math.min(o,Math.hypot(t-r-c*l,e-a-f*l))}return o}var Bf=t=>ne.spring+Math.sqrt(Math.max(0,ne.r*ne.r-(t-ne.zc)*(t-ne.zc))),H0=t=>Le.x+Math.sqrt(Math.max(0,Ke*Ke-(t-Le.z)*(t-Le.z)));function Hi(t,e){return Math.hypot(t-Le.x,e-Le.z)<Ke||t<=0&&t>Le.x&&e>ne.z0&&e<ne.z1||t>Mn.x0&&t<Mn.x1&&e>Mn.z0&&e<Mn.z1}function v_(t,e){if(Math.hypot(t-Le.x,e-Le.z)<To.ri-.05)return 99;let n=Math.atan2(e-Le.z,t-Le.x),r=To.a0-n;for(;r<0;)r+=2*Io;for(;r>=2*Io;)r-=2*Io;return r>To.n*To.step?99:U0(r)-To.thick}function m_(){let t=[],e=Hm(1729),o=(a,s,i)=>{for(let c=Math.max(0,t.length-400);c<t.length;c++){let f=t[c];if(!(f[1]>.01)&&Math.hypot(f[0]-a,f[2]-s)<i+f[3]+.012)return!0}return!1},n=(a,s)=>{let i=a-an.x,c=s-an.z,f=Math.cos(an.yaw),l=Math.sin(an.yaw),d=(f*i-l*c)/an.scale,u=(l*i+f*c)/an.scale;return d>-1.05&&d<1.3&&u>-.7&&u<.72},r=0;for(;t.length<980&&r<6e4;){r++;let s=e()<.55?1.25+e()*2.1:1.25+Math.sqrt(e())*(Ke-1.45),i=e()*2*Io,c=Le.x+Math.cos(i)*s,f=Le.z+Math.sin(i)*s;if(!Hi(c,f)||s>Ke-.18||n(c,f)||p_(c,f)<.62||v_(c,f)<2.3||c<Mn.x1+.9)continue;let l=.022+e()*.02;if(o(c,f,l))continue;let d=e()<.15?.22+e()*.14:.05+e()*.15;t.push([c,0,f,l,d,e()*100])}for(let a=1;a<26;a++){let s=a<12?3:2;for(let i=0;i<s;i++){let c=(a+.25+e()*.5)*To.step,f=Cr(c),l=To.ri+.55+e()*(To.ro-To.ri-.75),d=.022+e()*.016;t.push([Le.x+Math.cos(f)*l,(a+1)*To.rise,Le.z+Math.sin(f)*l,d,.05+e()*.14,e()*100])}}for(let a of gu)for(let[s,i,c]of[[0,0,.26],[.06,.05,.18],[-.05,-.04,.14]])t.push([a[0]+s,a[1],a[2]+i,.024,c,e()*100]);for(let a of[Mn.z0-.35,Mn.z1+.35])for(let s=0;s<9;s++){let i=Mn.x1+.35+e()*.5,c=a+(e()-.5)*.5;Math.hypot(i-Le.x,c-Le.z)>Ke-.15||t.push([i,0,c,.026+e()*.014,.18+e()*.3,e()*100])}return t}function g_(t){let o=Hm(77),n=[];for(let r=0;r<14;r++){let a=t[Math.floor(o()*t.length)];n.push([a[0],a[1]+a[4],a[2]])}for(let r=0;r<12;r++){let a=n.map(()=>[0,0,0,0]);for(let s of t){let i=[s[0],s[1]+s[4],s[2]],c=0,f=1e9;n.forEach((l,d)=>{let u=(i[0]-l[0])**2+(i[1]-l[1])**2*4+(i[2]-l[2])**2;u<f&&(f=u,c=d)}),a[c][0]+=i[0],a[c][1]+=i[1],a[c][2]+=i[2],a[c][3]++}n=a.map((s,i)=>s[3]?[s[0]/s[3],s[1]/s[3],s[2]/s[3],s[3]]:n[i])}return n.filter(r=>r[3]>0).map(r=>[r[0],r[1]+.12,r[2],r[3]/t.length])}var xu=m_(),Gm=g_(xu.filter(t=>t[1]<2||t[1]>2.5)).concat(gu.map(t=>[t[0],t[1]+.35,t[2],.035]));function Um(){return`
	vec3 roomLight(vec3 p, vec3 N, vec3 V, float gloss, out vec3 spec) {
		spec = vec3(0.0);
		vec3 col = vec3(0.0);
		float floorK = (p.y < 0.02 && N.y > 0.9) ? 1.0 : 0.0;
		${Gm.map((e,o)=>`
		{
			vec3 d = ${d_(e)} - p;
			float dd = dot(d, d);
			vec3 L = d * inversesqrt(dd);
			float fl = 0.86 + 0.08 * sin(time * ${Gn(5.3+o*.71)} + ${Gn(o*1.9)}) + 0.06 * sin(time * ${Gn(11.7+o*1.3)} + ${Gn(o*.7)});
			float w = ${Gn(e[3]*Gm.length)} * fl;
			float lam = max(dot(N, L), 0.0) * 0.82 + 0.18;
			col += w * lam / (0.7 + dd * 0.42);
			// the floor glows in pools round the candles
			col += w * floorK * 0.9 / (0.02 + dd * 7.0);
			spec += w * pow(max(dot(N, normalize(L + V)), 0.0), mix(10.0, 180.0, gloss)) * gloss * 1.6 / (0.25 + dd * 0.9);
		}`).join("")}
		col *= vec3(1.0, 0.56, 0.24) * 0.62;
		spec *= vec3(1.0, 0.62, 0.30) * 0.62;
		// light from the oculus, high above: pale by day, moonlight at night
		float up = smoothstep(0.0, ${Gn(lr)}, p.y);
		vec3 sky = mix(vec3(0.10, 0.095, 0.085), vec3(0.030, 0.045, 0.085), night);
		col += sky * (0.35 + 0.65 * up) * (0.55 + 0.45 * max(N.y, 0.0)) * (0.6 + 0.4 * max(-dot(N, normalize(p - vec3(${Gn(Le.x)}, ${Gn(lr)}, ${Gn(Le.z)}))), 0.0));
		// and straight down from it a soft pool falls on the piano and
		// whoever is playing it: it catches his shoulders, his hair, the
		// edge of the lid, and lifts them out of the dark
		float pool = 1.0 - smoothstep(0.5, 2.9, length(p.xz - vec2(${Gn(il.stoolX)}, ${Gn(il.keyFront+.1)})));
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
	}`}var De={FLOOR:0,WALL:1,STEP:2,SOFFIT:3,STRING:4,CEIL:5,OCULUS:6,HALLSTONE:7,IRON:8,RAILING:9,CANDLE:10};function Bm(){let t={pos:[],nrm:[],kind:[],uv:[],idx:[]};return t.v=(e,o,n,r)=>(t.pos.push(e[0],e[1],e[2]),t.nrm.push(o[0],o[1],o[2]),t.kind.push(n),t.uv.push(r?r[0]:0,r?r[1]:0),t.pos.length/3-1),t.quad=(e,o,n,r,a,s,i)=>{let c=t.v(e,a,s,i&&i[0]),f=t.v(o,a,s,i&&i[1]),l=t.v(n,a,s,i&&i[2]),d=t.v(r,a,s,i&&i[3]);t.idx.push(c,f,l,c,l,d)},t.tri=(e,o,n,r,a)=>{let s=t.v(e,r,a),i=t.v(o,r,a),c=t.v(n,r,a);t.idx.push(s,i,c)},t}function x_(){let t=Bm(),e=(n,r,a)=>[Le.x+Math.cos(n)*r,a,Le.z+Math.sin(n)*r],o=n=>[Math.cos(n),0,Math.sin(n)];for(let r=0;r>Mn.x0-.01;r-=.25)for(let a=41.2;a<47.8;a+=.2){let s=r-.25,i=r,c=a,f=a+.2;if(!(Hi(s,c)||Hi(i,c)||Hi(s,f)||Hi(i,f)||Hi((s+i)/2,(c+f)/2)))continue;let l=c,d=f;s>H0(ne.z0)-.3&&(l=Math.max(l,ne.z0),d=Math.min(d,ne.z1),d<=l)||t.quad([s,0,l],[s,0,d],[i,0,d],[i,0,l],[0,1,0],De.FLOOR)}{for(let r=0;r<360;r++){let a=r/360*2*Io,s=(r+1)/360*2*Io,i=(a+s)/2,c=e(i,Ke,0),f=0;c[0]>Le.x&&c[2]>ne.z0-.02&&c[2]<ne.z1+.02&&(f=Math.max(Bf(Math.min(Math.max(e(a,Ke,0)[2],ne.z0),ne.z1)),Bf(Math.min(Math.max(e(s,Ke,0)[2],ne.z0),ne.z1)))),c[0]<Le.x&&c[2]>Mn.z0-.02&&c[2]<Mn.z1+.02&&(f=Mn.top);let l=a*Ke,d=s*Ke,u=o(a).map(h=>-h),v=o(s).map(h=>-h),p=[f];for(let h=Math.ceil(f/2.5)*2.5;h<lr;h+=2.5)h>f+.01&&p.push(h);p.push(lr);for(let h=0;h<p.length-1;h++){let m=p[h],g=p[h+1],y=t.v(e(a,Ke,m),u,De.WALL,[l,m]),b=t.v(e(s,Ke,m),v,De.WALL,[d,m]),w=t.v(e(s,Ke,g),v,De.WALL,[d,g]),_=t.v(e(a,Ke,g),u,De.WALL,[l,g]);t.idx.push(y,b,w,y,w,_)}}for(let[r,a,s]of[[6.55,.22,.07],[0,.32,.05]])for(let i=0;i<360;i++){let c=i/360*2*Io,f=(i+1)/360*2*Io,l=(c+f)/2,d=e(l,Ke,0);if(r<1&&(d[0]>Le.x&&d[2]>ne.z0&&d[2]<ne.z1||d[0]<Le.x&&d[2]>Mn.z0&&d[2]<Mn.z1))continue;let u=Ke-s;t.quad(e(c,u,r),e(f,u,r),e(f,u,r+a),e(c,u,r+a),o(l).map(v=>-v),De.WALL,[[c*Ke,r+100],[f*Ke,r+100],[f*Ke,r+a+100],[c*Ke,r+a+100]]),t.quad(e(c,u,r+a),e(f,u,r+a),e(f,Ke,r+a),e(c,Ke,r+a),[0,1,0],De.WALL,[[0,200],[0,200],[0,200],[0,200]]),r>1&&t.quad(e(c,Ke,r),e(f,Ke,r),e(f,u,r),e(c,u,r),[0,-1,0],De.WALL,[[0,200],[0,200],[0,200],[0,200]])}}{let n=o0.x;for(let[a,s]of[[ne.z0,1],[ne.z1,-1]]){let i=H0(a);t.quad([n,0,a],[i,0,a],[i,ne.spring,a],[n,ne.spring,a],[0,0,s],De.WALL,[[n,0],[i,0],[i,ne.spring],[n,ne.spring]])}let r=40;for(let a=0;a<r;a++){let s=a/r*Io,i=(a+1)/r*Io,c=ne.zc-Math.cos(s)*ne.r,f=ne.zc-Math.cos(i)*ne.r,l=ne.spring+Math.sin(s)*ne.r,d=ne.spring+Math.sin(i)*ne.r,u=[0,-Math.sin(s),Math.cos(s)],v=[0,-Math.sin(i),Math.cos(i)],p=t.v([n,l,c],u,De.WALL,[n,s*ne.r]),h=t.v([H0(c),l,c],u,De.WALL,[H0(c),s*ne.r]),m=t.v([H0(f),d,f],v,De.WALL,[H0(f),i*ne.r]),g=t.v([n,d,f],v,De.WALL,[n,i*ne.r]);t.idx.push(p,h,m,p,m,g)}}{let n=o0.x,r=.05;for(let f=o0.z0;f<o0.z1-1e-6;f+=r){let l=f,d=Math.min(o0.z1,f+r),v=(p=>p>ne.z0&&p<ne.z1)((l+d)/2)?Math.max(Bf(l),Bf(d)):0;t.quad([n,v,l],[n,v,d],[n,o0.top,d],[n,o0.top,l],[1,0,0],De.HALLSTONE,[[l,v],[d,v],[d,o0.top],[l,o0.top]])}let a=.32,s=.06,i=n+s,c=36;for(let f=0;f<c;f++){let l=f/c*Io,d=(f+1)/c*Io,u=(g,y)=>[i,ne.spring+Math.sin(g)*y,ne.zc-Math.cos(g)*y],v=ne.r,p=ne.r+a;t.quad(u(l,v),u(d,v),u(d,p),u(l,p),[1,0,0],De.HALLSTONE,[[0,300],[0,300],[1,300],[1,300]]);let h=(g,y,b)=>[b,ne.spring+Math.sin(g)*y,ne.zc-Math.cos(g)*y],m=[0,Math.sin((l+d)/2),-Math.cos((l+d)/2)];t.quad(h(l,p,n),h(d,p,n),h(d,p,i),h(l,p,i),m,De.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),t.quad(h(l,v,n),h(d,v,n),h(d,v,i),h(l,v,i),m.map(g=>-g),De.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}for(let[f,l,d]of[[ne.z0-a,ne.z0,-1],[ne.z1,ne.z1+a,1]]){t.quad([i,0,f],[i,0,l],[i,ne.spring,l],[i,ne.spring,f],[1,0,0],De.HALLSTONE,[[0,300],[1,300],[1,300],[0,300]]);let u=d<0?f:l,v=d<0?l:f;t.quad([n,0,u],[i,0,u],[i,ne.spring,u],[n,ne.spring,u],[0,0,d],De.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),t.quad([n,0,v],[i,0,v],[i,ne.spring,v],[n,ne.spring,v],[0,0,-d],De.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);let p=ne.spring-.16,h=.16,m=.11,g=Math.min(f,l)-.05,y=Math.max(f,l)+.05;t.quad([n+m,p,g],[n+m,p,y],[n+m,p+h,y],[n+m,p+h,g],[1,0,0],De.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),t.quad([n,p+h,g],[n+m,p+h,g],[n+m,p+h,y],[n,p+h,y],[0,1,0],De.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),t.quad([n,p,g],[n,p,y],[n+m,p,y],[n+m,p,g],[0,-1,0],De.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);for(let b of[g,y])t.quad([n,p,b],[n+m,p,b],[n+m,p+h,b],[n,p+h,b],[0,0,b===g?-1:1],De.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}{let f=ne.spring+ne.r-.05,l=ne.spring+ne.r+a+.12,d=.16,u=.22,v=i+.04;t.quad([v,f,ne.zc-d],[v,f,ne.zc+d],[v,l,ne.zc+u],[v,l,ne.zc-u],[1,0,0],De.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);for(let p of[-1,1])t.quad([n,f,ne.zc+p*d],[v,f,ne.zc+p*d],[v,l,ne.zc+p*u],[n,l,ne.zc+p*u],[0,0,p],De.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);t.quad([n,l,ne.zc-u],[v,l,ne.zc-u],[v,l,ne.zc+u],[n,l,ne.zc+u],[0,1,0],De.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}}{let{x0:n,x1:r,z0:a,z1:s,top:i}=Mn;t.quad([n,0,a],[n,0,s],[n,i,s],[n,i,a],[1,0,0],De.WALL,[[a,0],[s,0],[s,i],[a,i]]);for(let[f,l]of[[a,1],[s,-1]]){let d=Le.x-Math.sqrt(Ke*Ke-(f-Le.z)*(f-Le.z));t.quad([n,0,f],[d,0,f],[d,i,f],[n,i,f],[0,0,l],De.WALL,[[n,0],[d,0],[d,i],[n,i]])}let c=24;for(let f=0;f<c;f++){let l=a+(s-a)*f/c,d=a+(s-a)*(f+1)/c,u=Le.x-Math.sqrt(Ke*Ke-(l-Le.z)**2),v=Le.x-Math.sqrt(Ke*Ke-(d-Le.z)**2);t.quad([n,i,l],[u,i,l],[v,i,d],[n,i,d],[0,-1,0],De.WALL,[[0,200],[0,200],[0,200],[0,200]])}for(let f=0;f<c;f++){let l=a+(s-a)*f/c,d=a+(s-a)*(f+1)/c,u=Le.x-Math.sqrt(Ke*Ke-(l-Le.z)**2)+.05,v=Le.x-Math.sqrt(Ke*Ke-(d-Le.z)**2)+.05;t.quad([u,i-.3,l],[v,i-.3,d],[v,i,d],[u,i,l],[1,0,0],De.WALL,[[0,200],[0,200],[0,200],[0,200]])}}{let r=[1.15,1.6,2.3,3,3.35,4.2,Ke];for(let a=0;a<120;a++){let s=a/120*2*Io,i=(a+1)/120*2*Io,c=(s+i)/2;c>Io&&(c-=2*Io);for(let f=0;f<r.length-1;f++){let l=r[f],d=r[f+1],u=c*180/Io;l>=3.3&&u>8&&u<85||t.quad(e(s,l,lr),e(s,d,lr),e(i,d,lr),e(i,l,lr),[0,-1,0],De.CEIL,[[s*l,l],[s*d,d],[i*d,d],[i*l,l]])}t.quad(e(s,1.15,lr),e(i,1.15,lr),e(i,1.15,lr+.7),e(s,1.15,lr+.7),o(c).map(f=>-f),De.CEIL,[[0,400],[0,400],[0,400],[0,400]]),t.tri([Le.x,lr+.7,Le.z],e(i,1.15,lr+.7),e(s,1.15,lr+.7),[0,-1,0],De.OCULUS)}}{let n=To.ri,r=To.ro,a=To.n*To.step;for(let c=0;c<To.n;c++){let f=c*To.step,l=(c+1)*To.step,d=Cr(f),u=Cr(l),v=(c+1)*To.rise,p=c*To.rise,h=2;for(let y=0;y<h;y++){let b=d+(u-d)*y/h-(y===0?.004:0),w=d+(u-d)*(y+1)/h;t.quad(e(b,n,v),e(b,r,v),e(w,r,v),e(w,n,v),[0,1,0],De.STEP,[[n*b,c],[r*b,c],[r*w,c],[n*w,c]])}let m=[-Math.sin(d),0,Math.cos(d)],g=d-.004;t.quad(e(g,n,p),e(g,r,p),e(g,r,v),e(g,n,v),m,De.STEP,[[n*d,c+.5],[r*d,c+.5],[r*d,c+.5],[n*d,c+.5]]),t.quad(e(d,n,U0(f)+.06),e(u,n,U0(l)+.06),e(u,n,v),e(g,n,v),o((d+u)/2).map(y=>-y),De.STEP,[[0,500],[0,500],[0,500],[0,500]])}let s=Math.ceil(a/(1.2*Io/180)),i=[n,n+.6,n+1.2,r];for(let c=0;c<s;c++){let f=c/s*a,l=(c+1)/s*a,d=Cr(f),u=Cr(l),v=U0(f),p=U0(l),h=v-To.thick,m=p-To.thick,g=o(d).map(N=>-N),y=o(u).map(N=>-N),b=t.v(e(d,n,h),g,De.STRING,[f*n,0]),w=t.v(e(u,n,m),y,De.STRING,[l*n,0]),_=t.v(e(u,n,p+.06),y,De.STRING,[l*n,1]),k=t.v(e(d,n,v+.06),g,De.STRING,[f*n,1]);t.idx.push(b,w,_,b,_,k);for(let N=0;N<i.length-1;N++){let G=i[N],C=i[N+1],X=q=>{let ot=o(q);return[-ot[0]*.12,-.99,-ot[2]*.12]};t.quad(e(d,G,h),e(d,C,h),e(u,C,m),e(u,G,m),X((d+u)/2),De.SOFFIT,[[f*G,G],[f*C,C],[l*C,C],[l*G,G]])}}}return t}function y_(){let t=Bm(),e=To.ri+.045,o=To.n*To.step,n=Math.ceil(o/(.8*Io/180)),r=.92,a=(c,f,l)=>[Le.x+Math.cos(c)*f,l,Le.z+Math.sin(c)*f],s=c=>[Math.cos(c),0,Math.sin(c)];for(let c=0;c<n;c++){let f=c/n*o,l=(c+1)/n*o,d=Cr(f),u=Cr(l),v=U0(f)+.06,p=U0(l)+.06,h=s(d).map(N=>-N),m=s(u).map(N=>-N),g=f*e,y=l*e,b=t.v(a(d,e,v),h,De.RAILING,[g,0]),w=t.v(a(u,e,p),m,De.RAILING,[y,0]),_=t.v(a(u,e,p+r),m,De.RAILING,[y,r]),k=t.v(a(d,e,v+r),h,De.RAILING,[g,r]);t.idx.push(b,w,_,b,_,k)}((c,f,l,d)=>{let v=h=>{let m=Cr(h),g=U0(h)+.06+f,y=a(m,e+c,g),b=s(m),w=[];for(let _=0;_<8;_++){let k=_/8*2*Io,N=[b[0]*Math.cos(k),Math.sin(k),b[2]*Math.cos(k)];w.push([[y[0]+N[0]*l,y[1]+N[1]*l,y[2]+N[2]*l],N])}return w},p=v(0);for(let h=1;h<=n;h++){let m=v(h/n*o);for(let g=0;g<8;g++){let y=(g+1)%8,b=t.v(p[g][0],p[g][1],d),w=t.v(m[g][0],m[g][1],d),_=t.v(m[y][0],m[y][1],d),k=t.v(p[y][0],p[y][1],d);t.idx.push(b,w,_,b,_,k)}p=m}})(0,r+.02,.028,De.IRON);for(let c of gu){let f=Math.atan2(c[2]-Le.z,c[0]-Le.x),l=[Math.cos(f),0,Math.sin(f)],d=12;for(let h=0;h<d;h++){let m=h/d*2*Io,g=(h+1)/d*2*Io,y=(b,w,_)=>[c[0]+Math.cos(b)*w,_,c[2]+Math.sin(b)*w];t.quad(y(m,.16,c[1]),y(g,.16,c[1]),y(g,.13,c[1]-.05),y(m,.13,c[1]-.05),[Math.cos(m)*.6,.8,Math.sin(m)*.6],De.IRON),t.quad(y(m,.16,c[1]),y(g,.16,c[1]),y(g,0,c[1]+.002),y(m,0,c[1]+.002),[0,1,0],De.IRON)}let u=[c[0]+l[0]*.16,c[1]-.35,c[2]+l[2]*.16],v=[-l[2],0,l[0]],p=.018;t.quad([u[0]-v[0]*p,u[1],u[2]-v[2]*p],[u[0]+v[0]*p,u[1],u[2]+v[2]*p],[c[0]+v[0]*p,c[1]-.05,c[2]+v[2]*p],[c[0]-v[0]*p,c[1]-.05,c[2]-v[2]*p],[-l[0],.5,-l[2]],De.IRON)}{let c=Cr(0),f=a(c,e,0),l=10;for(let d=0;d<l;d++){let u=d/l*2*Io,v=(d+1)/l*2*Io,p=(h,m,g)=>[f[0]+Math.cos(h)*m,g,f[2]+Math.sin(h)*m];t.quad(p(u,.035,0),p(v,.035,0),p(v,.035,r+.1),p(u,.035,r+.1),[Math.cos((u+v)/2),0,Math.sin((u+v)/2)],De.IRON),t.quad(p(u,.06,r+.1),p(v,.06,r+.1),p(v,.03,r+.2),p(u,.03,r+.2),[Math.cos((u+v)/2)*.8,.6,Math.sin((u+v)/2)*.8],De.IRON)}}return t}function b_(){let t=[],e=[],o=[],n=[];for(let a of xu){let[s,i,c,f,l,d]=a,u=t.length/3;for(let p=0;p<=7;p++){let h=p/7*2*Io+d,m=Math.cos(h),g=Math.sin(h);t.push(s+m*f,i,c+g*f,s+m*f,i+l,c+g*f),e.push(m,0,g,m,0,g),o.push(0,l,d,1,l,d)}for(let p=0;p<7;p++){let h=u+p*2;n.push(h,h+2,h+3,h,h+3,h+1)}let v=t.length/3;t.push(s,i+l-.006,c),e.push(0,1,0),o.push(2,l,d);for(let p=0;p<7;p++){let h=p/7*2*Io+d;t.push(s+Math.cos(h)*f,i+l,c+Math.sin(h)*f),e.push(0,1,0),o.push(1,l,d)}for(let p=0;p<7;p++)n.push(v,v+1+p,v+1+(p+1)%7)}return{pos:t,nrm:e,info:o,idx:n}}function w_(){let t=[],e=[],o=[],n=[];for(let r of xu){let[a,s,i,,c,f]=r,l=t.length/3;for(let d of[[-1,0],[1,0],[1,1],[-1,1]])t.push(a,s+c+.004,i),e.push(d[0],d[1]),o.push(f);n.push(l,l+1,l+2,l,l+2,l+3)}return{ctr:t,corner:e,ph:o,idx:n}}function __(t){let e=new DataView(t),o=e.getUint32(4,!0),n=e.getUint32(8,!0),r=[],a=[];for(let g=0;g<3;g++)r.push(e.getFloat32(12+g*4,!0)),a.push(e.getFloat32(24+g*4,!0));let s=36,i=new Uint16Array(t,s,o*3);s+=o*6;let c=new Uint16Array(t,s,n);s+=n*2;let f=new Int8Array(t,s,o*3);s+=o*3;let l=new Uint8Array(t,s,o),d=new Float32Array(o*3),u=new Float32Array(o*3),v=new Float32Array(o),p=Math.cos(an.yaw),h=Math.sin(an.yaw),m=an.scale;for(let g=0;g<o;g++){let y=(r[0]+i[g*3]/65535*a[0])*m,b=(r[1]+i[g*3+1]/65535*a[1])*m,w=(r[2]+i[g*3+2]/65535*a[2])*m;d[g*3]=an.x+p*y+h*w,d[g*3+1]=b,d[g*3+2]=an.z-h*y+p*w;let _=f[g*3]/127,k=f[g*3+1]/127,N=f[g*3+2]/127;u[g*3]=p*_+h*N,u[g*3+1]=k,u[g*3+2]=-h*_+p*N,v[g]=l[g]}return{pos:d,nrm:u,mat:v,idx:new Uint32Array(c)}}function M_(){let t=[],e=(d,u)=>[Le.x+Math.cos(d)*u,Le.z+Math.sin(d)*u];t.push([[0,ne.z0],[H0(ne.z0),ne.z0]]),t.push([[H0(ne.z1),ne.z1],[0,ne.z1]]);let o=Math.asin((ne.z1-Le.z)/Ke),n=72;for(let d=0;d<n;d++){let u=o+d/n*(2*Io-2*o),v=o+(d+1)/n*(2*Io-2*o);t.push([e(u,Ke-.25),e(v,Ke-.25)])}let r=Wf[0]-.55+.35;t.push([[r,Mn.z0],[r,Mn.z1]]);let a=2.4/To.k,s=12;for(let d=0;d<s;d++){let u=Cr(d/s*a),v=Cr((d+1)/s*a);t.push([e(u,To.ri-.2),e(v,To.ri-.2)])}t.push([e(Cr(0),To.ri-.2),e(Cr(0),Ke)]),t.push([e(Cr(a),To.ri-.2),e(Cr(a),Ke)]);let i=Math.cos(an.yaw),c=Math.sin(an.yaw),f=an.scale,l=[[-1,-.62],[1.25,-.62],[1.25,.62],[-1,.62]].map(([d,u])=>[an.x+(i*d+c*u)*f,an.z+(-c*d+i*u)*f]);for(let d=0;d<4;d++)t.push([l[d],l[(d+1)%4]]);return t}jr.exports=t=>{let e=x_(),o=y_(),n=b_(),r=w_(),a=G0(),s=`
	precision highp float;
	${u_.GLSL}
	uniform float time;
	${Um()}
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
				base *= 1.0 - 0.25 * smoothstep(3.0, ${Gn(lr)}, v_pos.y);
			} else if (k < 2.5) {
				// the steps: a greyer, harder stone, worn paler in the middle
				float r = length(v_pos.xz - vec2(${Gn(Le.x)}, ${Gn(Le.z)}));
				base = limestone(v_pos.xz * 1.4 + v_uv * 0.3) * vec3(0.90, 0.88, 0.86);
				base *= 1.0 + 0.10 * (1.0 - smoothstep(0.0, 0.6, abs(r - ${Gn((To.ri+To.ro)/2)})));
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
				vec2 q = v_pos.xz - vec2(${Gn(Le.x)}, ${Gn(Le.z)});
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
		}`,attributes:{position:n.pos,normal:n.nrm,info:n.info},elements:new Uint32Array(n.idx),cull:{enable:!1}}),d=t({vert:`
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
		}`,attributes:{ctr:r.ctr,corner:r.corner,ph:r.ph},elements:new Uint32Array(r.idx),uniforms:{halo:t.prop("halo")},depth:{enable:!0,mask:!1},cull:{enable:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),u=null;fetch("res/piano.bin").then(m=>{if(!m.ok)throw new Error("Could not load piano.bin");return m.arrayBuffer()}).then(m=>{let g=__(m);u=t({vert:`
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
				}`,attributes:{position:g.pos,normal:g.nrm,mat:g.mat},elements:g.idx,cull:{enable:!1}})}).catch(m=>console.error(m));let v=(()=>{let m=[],g=[],y=[],b=[],_=[Le.x,lr-.3,Le.z],k=[il.stoolX,.02,il.keyFront+.1],N=1.25,G=2.35;for(let C=0;C<=40;C++){let X=C/40*2*Io,q=Math.cos(X),ot=Math.sin(X);m.push(_[0]+q*N,_[1],_[2]+ot*N,k[0]+q*G,k[1],k[2]+ot*G),g.push(q,.08,ot,q,.08,ot),y.push(1,0)}for(let C=0;C<40;C++){let X=C*2;b.push(X,X+1,X+3,X,X+3,X+2)}return{pos:m,nrm:g,hh:y,idx:b}})(),p=t({vert:`
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
		}`,attributes:{position:v.pos,normal:v.nrm,hh:v.hh},elements:v.idx,depth:{enable:!0,mask:!1},cull:{enable:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});function h(m){let g=m&&m.reflected;c(),f(),l(),u&&u(),g||(p(),d({halo:1}),d({halo:0}))}return h};jr.exports.C=Le;jr.exports.R=Ke;jr.exports.PASS=ne;jr.exports.SURR=o0;jr.exports.OFF=Wf;jr.exports.BAY=Mn;jr.exports.PATH=jf;jr.exports.PIANO=an;jr.exports.PLAY=il;jr.exports.TOP=lr;jr.exports.roomGLSL=Um;jr.exports.segments=M_});var t2=pt((Uk,Jm)=>{"use strict";var E_=Ts(),{addFlutedColumn:jm,addStatue:S_,addPlant:k_}=ym(),Wm=F0(),T_=Pi(),Ia=pr(),A_=xa(),Bi=B0(),vo=14,Sn=Ia.C.hallEnd+.35,Ho=8,No=.35,yu=1.15,bu=1.15,wu=[18,29,40],L_=[[[0,0],[0,Bi.PASS.z0]],[[0,Bi.PASS.z1],[0,Sn]],[[vo,Sn],[vo,0]],[[0,0],[vo,0]],[[vo,Sn],[0,Sn]]],Km=[];for(let t of wu)for(let e of[1.25,vo-1.25]){let o=yu/2,n=bu/2;Km.push([[e-o,t-n],[e+o,t-n]],[[e+o,t-n],[e+o,t+n]],[[e+o,t+n],[e-o,t+n]],[[e-o,t+n],[e-o,t-n]])}var Xf=12,Qm=2.95,Zm=.62,Qf=Qm+Zm,Yf=[{file:"venus.bin",x:1.85,z:Sn-1.6,yaw:2.67,height:5.2,pedestal:!0,mat:1},{file:"david.bin",x:vo-2.1,z:Sn-1.6,yaw:-2.67,height:5.2,pedestal:!0,mat:1},{file:"pieta.bin",x:1.75,z:5.9,yaw:Math.PI/2,height:3.6,base:1,mat:1},{file:"spinario.bin",x:Ia.NICHE_X[0],z:Ia.NICHE_STATUE_Z,yaw:-.35,height:1.85,base:Ia.NICHE_PLINTH_TOP,mat:3},{file:"charioteer.bin",x:Ia.NICHE_X[1],z:Ia.NICHE_STATUE_Z+.1,yaw:0,height:2.95,base:Ia.NICHE_PLINTH_TOP,mat:3}],z_={x0:No,x1:3.15,z0:3.6,z1:8.2,top:1},Vm=.8,Zf=1.17,cl=[];[{z:10.4,dz:-.7},{z:19.2,dz:.7},{z:27.8,dz:-.7}].forEach((t,e)=>{cl.push({x:1,z:t.z,seed:11+e*7,away:[1,t.dz]}),cl.push({x:vo-1,z:t.z,seed:53+e*5,away:[-1,t.dz]})});function _u(t,e,o,n){return[[[t-o,e-n],[t+o,e-n]],[[t+o,e-n],[t+o,e+n]],[[t+o,e+n],[t-o,e+n]],[[t-o,e+n],[t-o,e-n]]]}var Jf=[];for(let t of[-1,1])Jf.push(..._u(vo/2+t*Qf,Xf,.85,.85));for(let t of Yf.filter(e=>e.pedestal))Jf.push(..._u(t.x,t.z,Zf*1.1,Zf*1.1));for(let t of cl)Jf.push(..._u(t.x,t.z,.42,.42));var N_=L_.concat(Km,Jf,Bi.segments());function R_(t){let o=new Map,n=(r,a,s)=>{let i=r+":"+a;o.has(i)||o.set(i,[]);let c=o.get(i);c.includes(s)||c.push(s)};for(let r of t){let a=Math.floor(Math.min(r[0][0],r[1][0])/4)-1,s=Math.floor(Math.max(r[0][0],r[1][0])/4)+1,i=Math.floor(Math.min(r[0][1],r[1][1])/4)-1,c=Math.floor(Math.max(r[0][1],r[1][1])/4)+1;for(let f=a;f<=s;f++)for(let l=i;l<=c;l++)n(f,l,r)}return{get(r,a){let s=Math.floor(r/4),i=Math.floor(a/4),c=[];for(let f=-1;f<=1;f++)for(let l=-1;l<=1;l++){let d=o.get(s+f+":"+(i+l));d&&c.push(...d)}return[...new Set(c)]}}}var Kf=[],En={curMat:[0,0,0]};function Mu(t,e,o,n,r,a,s){let i=t.length/3;t.push(...o,...n,...r,...a),e.push(...s,...s,...s,...s);let c=En.curMat;return Kf.push(...c,...c,...c,...c),[i,i+2,i+1,i+1,i+2,i+3]}function Ao(t,e,o,n,r,a,s,i,c){let f=(l,d,u,v,p)=>{o.push(...Mu(t,e,l,d,u,v,p))};f([n,r,a],[s,r,a],[n,i,a],[s,i,a],[0,0,-1]),f([s,r,c],[n,r,c],[s,i,c],[n,i,c],[0,0,1]),f([n,r,c],[n,r,a],[n,i,c],[n,i,a],[-1,0,0]),f([s,r,a],[s,r,c],[s,i,a],[s,i,c],[1,0,0]),f([n,i,a],[s,i,a],[n,i,c],[s,i,c],[0,1,0]),f([n,r,c],[s,r,c],[n,r,a],[s,r,a],[0,-1,0])}function Ui(t,e,o,n,r){let a=En,s=a.vert(t,r),i=a.vert(e,r),c=a.vert(o,r),f=a.vert(n,r);a.tri(s,i,c),a.tri(i,f,c)}function Xm(t,e,o,n,r,a,s){for(let i=0;i<s;i++){let c=Math.PI*i/s,f=Math.PI*(i+1)/s,l=Math.cos(c),d=Math.sin(c),u=Math.cos(f),v=Math.sin(f),p=[t+o*l,e+o*d],h=[t+o*u,e+o*v],m=[t+n*l,e+n*d],g=[t+n*u,e+n*v];Ui([p[0],p[1],r],[h[0],h[1],r],[m[0],m[1],r],[g[0],g[1],r],[0,0,-1]),Ui([p[0],p[1],a],[h[0],h[1],a],[m[0],m[1],a],[g[0],g[1],a],[0,0,1]);let y=(c+f)/2;Ui([p[0],p[1],r],[h[0],h[1],r],[p[0],p[1],a],[h[0],h[1],a],[-Math.cos(y),-Math.sin(y),0]),Ui([m[0],m[1],r],[g[0],g[1],r],[m[0],m[1],a],[g[0],g[1],a],[Math.cos(y),Math.sin(y),0])}}function C_(t,e,o,n,r,a,s){for(let i=0;i<s;i++){let c=Math.PI*i/s,f=Math.PI*(i+1)/s,l=t+o*Math.cos(c),d=e+o*Math.sin(c),u=t+o*Math.cos(f),v=e+o*Math.sin(f);Ui([l,d,r],[u,v,r],[l,n,r],[u,n,r],[0,0,-1]),Ui([l,d,a],[u,v,a],[l,n,a],[u,n,a],[0,0,1])}}function O_(t,e,o,n){let r=vo/2,a=Qm,s=3,i=a+.42,c=i+.15,f=Zm,l=Qf,d=5.98,u=n-.45,v=n+.45,p=64,h=jm(En,r-l,n,0,d,f);jm(En,r+l,n,0,d,f),En.curMat=[0,0,0],Xm(r,s,a,i,u,v,p),Xm(r,s,i,c,u-.07,v+.07,p),C_(r,s,c,h+.05,u,v,p);for(let g of[-1,1]){let y=r+g*(c-.02),b=r+g*l;Ao(t,e,o,Math.min(y,b),s,u,Math.max(y,b),h+.05,v)}for(let g of[-1,1]){let y=r+g*(a-.05),b=r+g*(a+.85);Ao(t,e,o,Math.min(y,b),s-.16,n-.6,Math.max(y,b),s,n+.6)}let m=l+f*1.42+.45;Ao(t,e,o,r-m,h,n-.7,r+m,h+.44,n+.7),Ao(t,e,o,r-m+.12,h+.44,n-.62,r+m-.12,h+.7,n+.62),Ao(t,e,o,r-m-.1,h+.7,n-.84,r+m+.1,h+.84,n+.84),Ao(t,e,o,r-m-.22,h+.84,n-.96,r+m+.22,h+1,n+.96),Ao(t,e,o,r-.3,s+a-.1,n-.56,r+.3,h,n+.56)}function Ym(t,e,o,n,r){Ao(t,e,o,n-.72,0,r-.72,n+.72,.2,r+.72),Ao(t,e,o,n-.58,.2,r-.58,n+.58,.4,r+.58),Ao(t,e,o,n-yu/2,.4,r-bu/2,n+yu/2,Ho-1.35,r+bu/2),Ao(t,e,o,n-.67,.42,r-.67,n+.67,.62,r+.67),Ao(t,e,o,n-.67,Ho-1.58,r-.67,n+.67,Ho-1.35,r+.67),Ao(t,e,o,n-.82,Ho-1.35,r-.82,n+.82,Ho-1.05,r+.82),Ao(t,e,o,n-.66,Ho-1.05,r-.66,n+.66,Ho-.78,r+.66),Ao(t,e,o,n-.92,Ho-.78,r-.92,n+.92,Ho-.55,r+.92),Ao(t,e,o,n-.78,Ho-.55,r-.78,n+.78,Ho-.3,r+.78),Ao(t,e,o,n-.92,Ho-.3,r-.92,n+.92,Ho-.1,r+.92)}function Vf(t,e,o,n,r){r==="left"?(Ao(t,e,o,-.08,1,n-3.8/2,.14,5.7,n+3.8/2),Ao(t,e,o,-.08-.04,1+.18,n-3.8/2+.18,.18,5.7-.18,n+3.8/2-.18)):(Ao(t,e,o,vo-.14,1,n-3.8/2,vo+.08,5.7,n+3.8/2),Ao(t,e,o,vo-.18,1+.18,n-3.8/2+.18,vo+.08+.04,5.7-.18,n+3.8/2-.18))}function P_(t,e,o,n){Ao(t,e,o,.65,Ho-.16,n-1.65,.65+.22,Ho,n+1.65),Ao(t,e,o,vo-.65-.22,Ho-.16,n-1.65,vo-.65,Ho,n+1.65),Ao(t,e,o,.65,Ho-.16,n-1.65,vo-.65,Ho,n-1.43),Ao(t,e,o,.65,Ho-.16,n+1.43,vo-.65,Ho,n+1.65),o.push(...Mu(t,e,[.65+.22,Ho-.16,n-1.43],[vo-.65-.22,Ho-.16,n-1.43],[.65+.22,Ho-.16,n+1.43],[vo-.65-.22,Ho-.16,n+1.43],[0,-1,0]))}Jm.exports=function(){let t=[],e=[],o=[];Kf=[],En=E_.createBuilder(t,e,o,Kf),o.push(...Mu(t,e,[0,0,0],[vo,0,0],[0,0,Sn],[vo,0,Sn],[0,1,0])),T_.addSkylight(En,[0,0,0],Sn),En.curMat=[0,0,0];{let c=Bi.SURR;Ao(t,e,o,-No,0,0,No,Ho,c.z0),Ao(t,e,o,-No,0,c.z1,No,Ho,Sn),Ao(t,e,o,-No,c.top,c.z0,No,Ho,c.z1)}Ao(t,e,o,vo-No,0,Ia.C.z1,vo+No,Ho,Sn-No),Ao(t,e,o,vo-No-.12,0,Ia.C.z1+2*No,vo-No,.42,Sn-No),Ao(t,e,o,vo-No-.07,.42,Ia.C.z1+2*No,vo-No,.5,Sn-No);for(let[c,f]of[[0,Bi.SURR.z0],[Bi.SURR.z1,Sn-No]])Ao(t,e,o,No,0,c,No+.12,.42,f),Ao(t,e,o,No,.42,c,No+.07,.5,f);Ao(t,e,o,No,0,Sn-No-.12,vo-No,.42,Sn-No),Ao(t,e,o,No,.42,Sn-No-.07,vo-No,.5,Sn-No),Wm.addEntranceWall(En),Wm.addFrames(En),En.curMat=[0,0,0],Ao(t,e,o,-No,0,Sn-No,vo+No,Ho,Sn+No),O_(t,e,o,Xf);for(let c of wu)Ym(t,e,o,1.25,c),Ym(t,e,o,vo-1.25,c);Vf(t,e,o,22,"left"),Vf(t,e,o,25,"right"),Vf(t,e,o,33,"left"),Vf(t,e,o,36,"right");let n=[4,9,34,39,44,49];for(let c of n)P_(t,e,o,c);Ia.addWing(En),En.curMat=[0,0,0];for(let c of Yf.filter(f=>f.pedestal))S_(En,c.x,c.z,Zf,Vm);{let c=z_;En.curMat=[0,0,0],En.box(c.x0,0,c.z0-.08,c.x1+.08,.16,c.z1+.08,[0,0,0]),En.box(c.x0,.16,c.z0+.04,c.x1-.04,c.top-.14,c.z1-.04,[0,0,0]),En.box(c.x0,c.top-.14,c.z0-.02,c.x1+.03,c.top-.06,c.z1+.02,[0,0,0]),En.box(c.x0,c.top-.06,c.z0-.06,c.x1+.07,c.top,c.z1+.06,[0,0,0])}A_.addAlcove(En);for(let c of cl)k_(En,c.x,c.z,c.seed,1,c.away);En.curMat=[0,0,0];let r=[[[vo,Sn-.35],[0,Sn-.35]],[[0,3],[0,10]],[[vo,15],[vo,22]],[[0,24],[0,31]],[[vo,33],[vo,40]],[[0,41],[0,46]]],a=R_(N_),s=(c,f)=>{let l=0,d=1/0;return r.forEach((u,v)=>{let p=(u[0][0]+u[1][0])/2,h=(u[0][1]+u[1][1])/2,m=Math.hypot(c-p,f-h);m<d&&(d=m,l=v)}),l},i=[];for(let c=0;c<10;c++)i.push({c:[0,0,0,0],d:[1,0,0,0]});return{placements:r,lights:i,statues:Yf,occluders:[...wu.flatMap(c=>[[1.25,c,.78],[vo-1.25,c,.78]]),[vo/2-Qf,Xf,.86],[vo/2+Qf,Xf,.86],...Yf.filter(c=>c.pedestal).map(c=>[c.x,c.z,Zf*1.12]),...cl.map(c=>[c.x,c.z,.34])],pedestalTop:Vm,mat:Kf,getAreaIndex:s,getGridSegments:(c,f)=>a.get(c,f),getGridParts:(c,f)=>a.get(c,f),position:t,normal:e,elements:o}}});var Eu=pt((Bk,e2)=>{"use strict";var{doorLightGLSL:I_}=F0(),{skylightGLSL:$_}=Pi(),{windowLightGLSL:F_,C:na}=pr(),{alcoveLightGLSL:q_}=xa(),ya=t=>t.toFixed(4),D_=(()=>{let t=[-.22,.6,-.77],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>(o/e).toFixed(4)).join(", ")})();e2.exports=(t,e,o,n)=>{let a=(e.occluders||[]).slice(0,24).map(([v,p,h])=>`ao = min(ao, contact(v_pos.xz, vec2(${v.toFixed(3)}, ${p.toFixed(3)}), ${h.toFixed(3)}));`).join(`
      `),s={c:[0,0,0,0],d:[1,0,0,0]},i=-1,c=[],f=v=>{let p=v&&v.tick!==void 0?v.tick:0;if(p!==i||c.length===0){i=p;let h=e.viewer||[7,2,20];for(c=e.lights.filter(m=>m.c[3]>.5).map(m=>({l:m,d:Math.hypot(m.c[0]-h[0],m.c[2]-h[2])})).sort((m,g)=>m.d-g.d).slice(0,8).map(m=>m.l);c.length<8;)c.push(s)}return c},l={},d="",u="";for(let v=0;v<8;v++)l["lightC"+v]=p=>f(p)[v].c,l["lightD"+v]=p=>f(p)[v].d,d+="uniform vec4 lightC"+v+", lightD"+v+`;
`,u+="pic += pictureLight(lightC"+v+", lightD"+v+`, v_pos, N);
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

    ${I_()}

    ${$_()}

    ${F_()}

    ${q_()}

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
        step(abs(v_pos.z - ${ya(na.hallEnd)}), 0.02) * step(0.5, -N.z) +
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
                 + exp(-pow((v_pos.z - ${ya((na.z0+na.z1)/2)}) / 1.3, 2.0)) * step(14.0, v_pos.x);
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
      light += (1.0 - smoothstep(2.0, 16.0, abs(v_pos.z - ${ya(na.hallEnd-1.6)}))) * 0.09 * (1.0 - smoothstep(14.5, 18.0, v_pos.x));

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
          float through = doorLight(v_pos, vec3(${D_}));
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
        if (v_pos.x < 14.0) wallD = min(wallD, ${ya(na.hallEnd)} - v_pos.z);
        if (v_pos.x < 14.0 && (v_pos.z < ${ya(na.z0)} || v_pos.z > ${ya(na.z1)})) wallD = min(wallD, 13.65 - v_pos.x);
        if (v_pos.x > 13.65 && v_pos.z > ${ya(na.z0-1)}) wallD = min(min(min(wallD, v_pos.z - ${ya(na.z0)}), ${ya(na.z1)} - v_pos.z), ${ya(na.x1)} - v_pos.x);
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
        if (v_pos.z < ${ya(na.z0+.3)} && v_pos.x > ${ya(na.x0)}) {
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
    }`,attributes:{position:e.position,normal:e.normal,a_mat:e.mat},uniforms:l,blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"zero"}},elements:new Uint32Array(e.elements),offset:n?t.prop("offset"):0,count:n?t.prop("count"):e.elements.length})}});var n2=pt((jk,o2)=>{"strict mode";var G_="https://api.artic.edu/api/v1/artworks/search",H_=({image_id:t},e)=>`https://www.artic.edu/iiif/2/${t}/full/${e},/0/default.jpg`,U_="?query[bool][must][][term][classification_titles.keyword]=painting&query[bool][must][][term][is_public_domain]=true",B_="&fields=image_id,title,artist_title",j_={low:400,mid:843,high:1686};o2.exports={fetchList:async function(t,e){let o=G_+U_+B_+`&from=${t}&size=${e}`;return(await fetch(o).then(r=>r.json())).data.filter(r=>r.image_id)},fetchImage:async function(t,e){let o=H_(t,j_[e]),n=await fetch(o).then(r=>r.blob());return{title:t.title+" - "+t.artist_title,image:n}}}});var s2=pt((Wk,a2)=>{"use strict";var W_=W1(),V_=va(),X_=t=>"images/web/"+t.slug+(V_.isPhone?"-1024":"")+".webp";async function r2(t){let e=await fetch(t);if(!e.ok)throw new Error("Could not load "+t);return e.blob()}a2.exports={fetchList:async function(t,e){return W_.slice(t,t+e).map((o,n)=>({...o,image_id:t+n}))},fetchImage:async function(t){let e;try{e=await r2(X_(t))}catch(o){e=await r2("images/"+t.file)}return{title:t.title,image:e}}}});var c2=pt((Vk,i2)=>{"strict mode";i2.exports={default:"local",artic:n2(),local:s2()}});var ku=pt((Xk,f2)=>{"strict mode";var Rs=document.createElement("canvas"),Su=Rs.width=Rs.height=1024,j0=Rs.getContext("2d");j0.mozImageSmoothingEnabled=!1;j0.webkitImageSmoothingEnabled=!1;j0.font="32px Verdana";j0.textBaseline="bottom";j0.fillStyle="#aaa";function l2(t,e,o,n){var r=e,a,s=0,i=0,c=e.split(" "),f,l;for(f=l=c.length;t.measureText(r).width>o&&f>1;){f--,r=a="";for(var d=0;d<l;d++)d<f?(r+=c[d],d+1<f&&(r+=" ")):(a+=c[d],d+1<l&&(a+=" "))}return n.push(r),i=t.measureText(r).width,a&&(s=l2(t,a,o,n),s>i&&(i=s)),i}f2.exports={init(t,e,o=Su){var n=[];l2(j0,e,Math.min(o*Su,Su),n),j0.clearRect(0,0,Rs.width,Rs.height);for(var r=0;r<n.length;r++)j0.fillText(n[r],0,Rs.height-(Math.max(n.length,3)-r)*32);return t({data:Rs,min:"mipmap",mipmap:"nice",flipY:!0})},draw(t){return t({frag:`
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
            }`,attributes:{pos:[0,0,1,0,0,1,1,1,0,1,1,0]},uniforms:{model:t.prop("textmodel"),tex:t.prop("text")},count:6,blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}})}}});var d2=pt((Yk,u2)=>{"strict mode";var Tu=c2(),Y_=new URLSearchParams(window.location.search).get("api"),h2=Tu[Y_]||Tu[Tu.default],K_=ku(),Au={},Wi=[],Q_=2;function Z_(t){return(!navigator.connection||navigator.connection.downlink<Q_)&&(t=t=="high"?"mid":"low"),t}var J_=va(),ji=document.createElement("canvas");ji.width=ji.height=J_.isPhone?1024:2048;var Nu=ji.getContext("2d");Nu.imageSmoothingEnabled=!0;Nu.imageSmoothingQuality="high";var Lu=!1,t6=t=>[(Wi.pop()||t.texture)([[[200,200,200]]]),e=>(Wi.pop()||t.texture)([[[0,0,0,0]]]),1];async function zu(t,e,o){Lu===!1&&(Lu=t.hasExtension("EXT_texture_filter_anisotropic")?t._gl.getParameter(t._gl.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0);let n,r;try{let a=await h2.fetchImage(e,Z_(o));r=a.title,n=await createImageBitmap(a.image),Nu.drawImage(n,0,0,ji.width,ji.height)}catch(a){return console.error(a),o=="high"?await zu(t,e,"low"):t6(t)}return[(Wi.pop()||t.texture)({data:ji,min:"mipmap",mipmap:"nice",aniso:Lu,flipY:!0}),a=>K_.init(Wi.pop()||t.texture,r,a),n.width/n.height]}u2.exports={fetch:(t,e=10,o="low",n,r)=>{let a=Object.keys(Au).length;h2.fetchList(a,e).then(s=>{e=s.length,s.map(i=>{if(Au[i.image_id]){--e===0&&r();return}Au[i.image_id]=i,zu(t,i,o).then(([c,f,l])=>{n({...i,tex:c,textGen:f,aspect:l}),--e===0&&r()})})})},load:(t,e,o="low")=>{e.tex||e.loading||(e.loading=!0,zu(t,e,o).then(([n,r])=>{e.loading=!1,e.tex=n,e.text=r(e.width)}))},unload:t=>{t.tex&&(Wi.push(t.tex),t.tex=void 0),t.text&&(Wi.push(t.text),t.text=void 0)}}});var v2=pt((Kk,p2)=>{p2.exports=e6;function e6(){var t=new Float32Array(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var g2=pt((Qk,m2)=>{m2.exports=o6;function o6(t){var e=new Float32Array(16);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}});var y2=pt((Zk,x2)=>{x2.exports=n6;function n6(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}});var Ru=pt((Jk,b2)=>{b2.exports=r6;function r6(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var _2=pt((tT,w2)=>{w2.exports=a6;function a6(t,e){if(t===e){var o=e[1],n=e[2],r=e[3],a=e[6],s=e[7],i=e[11];t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=o,t[6]=e[9],t[7]=e[13],t[8]=n,t[9]=a,t[11]=e[14],t[12]=r,t[13]=s,t[14]=i}else t[0]=e[0],t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=e[1],t[5]=e[5],t[6]=e[9],t[7]=e[13],t[8]=e[2],t[9]=e[6],t[10]=e[10],t[11]=e[14],t[12]=e[3],t[13]=e[7],t[14]=e[11],t[15]=e[15];return t}});var E2=pt((eT,M2)=>{M2.exports=s6;function s6(t,e){var o=e[0],n=e[1],r=e[2],a=e[3],s=e[4],i=e[5],c=e[6],f=e[7],l=e[8],d=e[9],u=e[10],v=e[11],p=e[12],h=e[13],m=e[14],g=e[15],y=o*i-n*s,b=o*c-r*s,w=o*f-a*s,_=n*c-r*i,k=n*f-a*i,N=r*f-a*c,G=l*h-d*p,C=l*m-u*p,X=l*g-v*p,q=d*m-u*h,ot=d*g-v*h,D=u*g-v*m,K=y*D-b*ot+w*q+_*X-k*C+N*G;return K?(K=1/K,t[0]=(i*D-c*ot+f*q)*K,t[1]=(r*ot-n*D-a*q)*K,t[2]=(h*N-m*k+g*_)*K,t[3]=(u*k-d*N-v*_)*K,t[4]=(c*X-s*D-f*C)*K,t[5]=(o*D-r*X+a*C)*K,t[6]=(m*w-p*N-g*b)*K,t[7]=(l*N-u*w+v*b)*K,t[8]=(s*ot-i*X+f*G)*K,t[9]=(n*X-o*ot-a*G)*K,t[10]=(p*k-h*w+g*y)*K,t[11]=(d*w-l*k-v*y)*K,t[12]=(i*C-s*q-c*G)*K,t[13]=(o*q-n*C+r*G)*K,t[14]=(h*b-p*_-m*y)*K,t[15]=(l*_-d*b+u*y)*K,t):null}});var k2=pt((oT,S2)=>{S2.exports=i6;function i6(t,e){var o=e[0],n=e[1],r=e[2],a=e[3],s=e[4],i=e[5],c=e[6],f=e[7],l=e[8],d=e[9],u=e[10],v=e[11],p=e[12],h=e[13],m=e[14],g=e[15];return t[0]=i*(u*g-v*m)-d*(c*g-f*m)+h*(c*v-f*u),t[1]=-(n*(u*g-v*m)-d*(r*g-a*m)+h*(r*v-a*u)),t[2]=n*(c*g-f*m)-i*(r*g-a*m)+h*(r*f-a*c),t[3]=-(n*(c*v-f*u)-i*(r*v-a*u)+d*(r*f-a*c)),t[4]=-(s*(u*g-v*m)-l*(c*g-f*m)+p*(c*v-f*u)),t[5]=o*(u*g-v*m)-l*(r*g-a*m)+p*(r*v-a*u),t[6]=-(o*(c*g-f*m)-s*(r*g-a*m)+p*(r*f-a*c)),t[7]=o*(c*v-f*u)-s*(r*v-a*u)+l*(r*f-a*c),t[8]=s*(d*g-v*h)-l*(i*g-f*h)+p*(i*v-f*d),t[9]=-(o*(d*g-v*h)-l*(n*g-a*h)+p*(n*v-a*d)),t[10]=o*(i*g-f*h)-s*(n*g-a*h)+p*(n*f-a*i),t[11]=-(o*(i*v-f*d)-s*(n*v-a*d)+l*(n*f-a*i)),t[12]=-(s*(d*m-u*h)-l*(i*m-c*h)+p*(i*u-c*d)),t[13]=o*(d*m-u*h)-l*(n*m-r*h)+p*(n*u-r*d),t[14]=-(o*(i*m-c*h)-s*(n*m-r*h)+p*(n*c-r*i)),t[15]=o*(i*u-c*d)-s*(n*u-r*d)+l*(n*c-r*i),t}});var A2=pt((nT,T2)=>{T2.exports=c6;function c6(t){var e=t[0],o=t[1],n=t[2],r=t[3],a=t[4],s=t[5],i=t[6],c=t[7],f=t[8],l=t[9],d=t[10],u=t[11],v=t[12],p=t[13],h=t[14],m=t[15],g=e*s-o*a,y=e*i-n*a,b=e*c-r*a,w=o*i-n*s,_=o*c-r*s,k=n*c-r*i,N=f*p-l*v,G=f*h-d*v,C=f*m-u*v,X=l*h-d*p,q=l*m-u*p,ot=d*m-u*h;return g*ot-y*q+b*X+w*C-_*G+k*N}});var z2=pt((rT,L2)=>{L2.exports=l6;function l6(t,e,o){var n=e[0],r=e[1],a=e[2],s=e[3],i=e[4],c=e[5],f=e[6],l=e[7],d=e[8],u=e[9],v=e[10],p=e[11],h=e[12],m=e[13],g=e[14],y=e[15],b=o[0],w=o[1],_=o[2],k=o[3];return t[0]=b*n+w*i+_*d+k*h,t[1]=b*r+w*c+_*u+k*m,t[2]=b*a+w*f+_*v+k*g,t[3]=b*s+w*l+_*p+k*y,b=o[4],w=o[5],_=o[6],k=o[7],t[4]=b*n+w*i+_*d+k*h,t[5]=b*r+w*c+_*u+k*m,t[6]=b*a+w*f+_*v+k*g,t[7]=b*s+w*l+_*p+k*y,b=o[8],w=o[9],_=o[10],k=o[11],t[8]=b*n+w*i+_*d+k*h,t[9]=b*r+w*c+_*u+k*m,t[10]=b*a+w*f+_*v+k*g,t[11]=b*s+w*l+_*p+k*y,b=o[12],w=o[13],_=o[14],k=o[15],t[12]=b*n+w*i+_*d+k*h,t[13]=b*r+w*c+_*u+k*m,t[14]=b*a+w*f+_*v+k*g,t[15]=b*s+w*l+_*p+k*y,t}});var R2=pt((aT,N2)=>{N2.exports=f6;function f6(t,e,o){var n=o[0],r=o[1],a=o[2],s,i,c,f,l,d,u,v,p,h,m,g;return e===t?(t[12]=e[0]*n+e[4]*r+e[8]*a+e[12],t[13]=e[1]*n+e[5]*r+e[9]*a+e[13],t[14]=e[2]*n+e[6]*r+e[10]*a+e[14],t[15]=e[3]*n+e[7]*r+e[11]*a+e[15]):(s=e[0],i=e[1],c=e[2],f=e[3],l=e[4],d=e[5],u=e[6],v=e[7],p=e[8],h=e[9],m=e[10],g=e[11],t[0]=s,t[1]=i,t[2]=c,t[3]=f,t[4]=l,t[5]=d,t[6]=u,t[7]=v,t[8]=p,t[9]=h,t[10]=m,t[11]=g,t[12]=s*n+l*r+p*a+e[12],t[13]=i*n+d*r+h*a+e[13],t[14]=c*n+u*r+m*a+e[14],t[15]=f*n+v*r+g*a+e[15]),t}});var O2=pt((sT,C2)=>{C2.exports=h6;function h6(t,e,o){var n=o[0],r=o[1],a=o[2];return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t[3]=e[3]*n,t[4]=e[4]*r,t[5]=e[5]*r,t[6]=e[6]*r,t[7]=e[7]*r,t[8]=e[8]*a,t[9]=e[9]*a,t[10]=e[10]*a,t[11]=e[11]*a,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}});var I2=pt((iT,P2)=>{P2.exports=u6;function u6(t,e,o,n){var r=n[0],a=n[1],s=n[2],i=Math.sqrt(r*r+a*a+s*s),c,f,l,d,u,v,p,h,m,g,y,b,w,_,k,N,G,C,X,q,ot,D,K,Et;return Math.abs(i)<1e-6?null:(i=1/i,r*=i,a*=i,s*=i,c=Math.sin(o),f=Math.cos(o),l=1-f,d=e[0],u=e[1],v=e[2],p=e[3],h=e[4],m=e[5],g=e[6],y=e[7],b=e[8],w=e[9],_=e[10],k=e[11],N=r*r*l+f,G=a*r*l+s*c,C=s*r*l-a*c,X=r*a*l-s*c,q=a*a*l+f,ot=s*a*l+r*c,D=r*s*l+a*c,K=a*s*l-r*c,Et=s*s*l+f,t[0]=d*N+h*G+b*C,t[1]=u*N+m*G+w*C,t[2]=v*N+g*G+_*C,t[3]=p*N+y*G+k*C,t[4]=d*X+h*q+b*ot,t[5]=u*X+m*q+w*ot,t[6]=v*X+g*q+_*ot,t[7]=p*X+y*q+k*ot,t[8]=d*D+h*K+b*Et,t[9]=u*D+m*K+w*Et,t[10]=v*D+g*K+_*Et,t[11]=p*D+y*K+k*Et,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t)}});var F2=pt((cT,$2)=>{$2.exports=d6;function d6(t,e,o){var n=Math.sin(o),r=Math.cos(o),a=e[4],s=e[5],i=e[6],c=e[7],f=e[8],l=e[9],d=e[10],u=e[11];return e!==t&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[4]=a*r+f*n,t[5]=s*r+l*n,t[6]=i*r+d*n,t[7]=c*r+u*n,t[8]=f*r-a*n,t[9]=l*r-s*n,t[10]=d*r-i*n,t[11]=u*r-c*n,t}});var D2=pt((lT,q2)=>{q2.exports=p6;function p6(t,e,o){var n=Math.sin(o),r=Math.cos(o),a=e[0],s=e[1],i=e[2],c=e[3],f=e[8],l=e[9],d=e[10],u=e[11];return e!==t&&(t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=a*r-f*n,t[1]=s*r-l*n,t[2]=i*r-d*n,t[3]=c*r-u*n,t[8]=a*n+f*r,t[9]=s*n+l*r,t[10]=i*n+d*r,t[11]=c*n+u*r,t}});var H2=pt((fT,G2)=>{G2.exports=v6;function v6(t,e,o){var n=Math.sin(o),r=Math.cos(o),a=e[0],s=e[1],i=e[2],c=e[3],f=e[4],l=e[5],d=e[6],u=e[7];return e!==t&&(t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=a*r+f*n,t[1]=s*r+l*n,t[2]=i*r+d*n,t[3]=c*r+u*n,t[4]=f*r-a*n,t[5]=l*r-s*n,t[6]=d*r-i*n,t[7]=u*r-c*n,t}});var B2=pt((hT,U2)=>{U2.exports=m6;function m6(t,e,o){var n,r,a,s=o[0],i=o[1],c=o[2],f=Math.sqrt(s*s+i*i+c*c);return Math.abs(f)<1e-6?null:(f=1/f,s*=f,i*=f,c*=f,n=Math.sin(e),r=Math.cos(e),a=1-r,t[0]=s*s*a+r,t[1]=i*s*a+c*n,t[2]=c*s*a-i*n,t[3]=0,t[4]=s*i*a-c*n,t[5]=i*i*a+r,t[6]=c*i*a+s*n,t[7]=0,t[8]=s*c*a+i*n,t[9]=i*c*a-s*n,t[10]=c*c*a+r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t)}});var W2=pt((uT,j2)=>{j2.exports=g6;function g6(t,e,o){var n=e[0],r=e[1],a=e[2],s=e[3],i=n+n,c=r+r,f=a+a,l=n*i,d=n*c,u=n*f,v=r*c,p=r*f,h=a*f,m=s*i,g=s*c,y=s*f;return t[0]=1-(v+h),t[1]=d+y,t[2]=u-g,t[3]=0,t[4]=d-y,t[5]=1-(l+h),t[6]=p+m,t[7]=0,t[8]=u+g,t[9]=p-m,t[10]=1-(l+v),t[11]=0,t[12]=o[0],t[13]=o[1],t[14]=o[2],t[15]=1,t}});var X2=pt((dT,V2)=>{V2.exports=x6;function x6(t,e){return t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=e[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var K2=pt((pT,Y2)=>{Y2.exports=y6;function y6(t,e){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e[0],t[13]=e[1],t[14]=e[2],t[15]=1,t}});var Z2=pt((vT,Q2)=>{Q2.exports=b6;function b6(t,e){var o=Math.sin(e),n=Math.cos(e);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=n,t[6]=o,t[7]=0,t[8]=0,t[9]=-o,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var tg=pt((mT,J2)=>{J2.exports=w6;function w6(t,e){var o=Math.sin(e),n=Math.cos(e);return t[0]=n,t[1]=0,t[2]=-o,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=o,t[9]=0,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var og=pt((gT,eg)=>{eg.exports=_6;function _6(t,e){var o=Math.sin(e),n=Math.cos(e);return t[0]=n,t[1]=o,t[2]=0,t[3]=0,t[4]=-o,t[5]=n,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var rg=pt((xT,ng)=>{ng.exports=M6;function M6(t,e){var o=e[0],n=e[1],r=e[2],a=e[3],s=o+o,i=n+n,c=r+r,f=o*s,l=n*s,d=n*i,u=r*s,v=r*i,p=r*c,h=a*s,m=a*i,g=a*c;return t[0]=1-d-p,t[1]=l+g,t[2]=u-m,t[3]=0,t[4]=l-g,t[5]=1-f-p,t[6]=v+h,t[7]=0,t[8]=u+m,t[9]=v-h,t[10]=1-f-d,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var sg=pt((yT,ag)=>{ag.exports=E6;function E6(t,e,o,n,r,a,s){var i=1/(o-e),c=1/(r-n),f=1/(a-s);return t[0]=a*2*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a*2*c,t[6]=0,t[7]=0,t[8]=(o+e)*i,t[9]=(r+n)*c,t[10]=(s+a)*f,t[11]=-1,t[12]=0,t[13]=0,t[14]=s*a*2*f,t[15]=0,t}});var cg=pt((bT,ig)=>{ig.exports=S6;function S6(t,e,o,n,r){var a=1/Math.tan(e/2),s=1/(n-r);return t[0]=a/o,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(r+n)*s,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*r*n*s,t[15]=0,t}});var fg=pt((wT,lg)=>{lg.exports=k6;function k6(t,e,o,n){var r=Math.tan(e.upDegrees*Math.PI/180),a=Math.tan(e.downDegrees*Math.PI/180),s=Math.tan(e.leftDegrees*Math.PI/180),i=Math.tan(e.rightDegrees*Math.PI/180),c=2/(s+i),f=2/(r+a);return t[0]=c,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=f,t[6]=0,t[7]=0,t[8]=-((s-i)*c*.5),t[9]=(r-a)*f*.5,t[10]=n/(o-n),t[11]=-1,t[12]=0,t[13]=0,t[14]=n*o/(o-n),t[15]=0,t}});var ug=pt((_T,hg)=>{hg.exports=T6;function T6(t,e,o,n,r,a,s){var i=1/(e-o),c=1/(n-r),f=1/(a-s);return t[0]=-2*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*c,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*f,t[11]=0,t[12]=(e+o)*i,t[13]=(r+n)*c,t[14]=(s+a)*f,t[15]=1,t}});var pg=pt((MT,dg)=>{var A6=Ru();dg.exports=L6;function L6(t,e,o,n){var r,a,s,i,c,f,l,d,u,v,p=e[0],h=e[1],m=e[2],g=n[0],y=n[1],b=n[2],w=o[0],_=o[1],k=o[2];return Math.abs(p-w)<1e-6&&Math.abs(h-_)<1e-6&&Math.abs(m-k)<1e-6?A6(t):(l=p-w,d=h-_,u=m-k,v=1/Math.sqrt(l*l+d*d+u*u),l*=v,d*=v,u*=v,r=y*u-b*d,a=b*l-g*u,s=g*d-y*l,v=Math.sqrt(r*r+a*a+s*s),v?(v=1/v,r*=v,a*=v,s*=v):(r=0,a=0,s=0),i=d*s-u*a,c=u*r-l*s,f=l*a-d*r,v=Math.sqrt(i*i+c*c+f*f),v?(v=1/v,i*=v,c*=v,f*=v):(i=0,c=0,f=0),t[0]=r,t[1]=i,t[2]=l,t[3]=0,t[4]=a,t[5]=c,t[6]=d,t[7]=0,t[8]=s,t[9]=f,t[10]=u,t[11]=0,t[12]=-(r*p+a*h+s*m),t[13]=-(i*p+c*h+f*m),t[14]=-(l*p+d*h+u*m),t[15]=1,t)}});var mg=pt((ET,vg)=>{vg.exports=z6;function z6(t){return"mat4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+")"}});var Vi=pt((ST,gg)=>{gg.exports={create:v2(),clone:g2(),copy:y2(),identity:Ru(),transpose:_2(),invert:E2(),adjoint:k2(),determinant:A2(),multiply:z2(),translate:R2(),scale:O2(),rotate:I2(),rotateX:F2(),rotateY:D2(),rotateZ:H2(),fromRotation:B2(),fromRotationTranslation:W2(),fromScaling:X2(),fromTranslation:K2(),fromXRotation:Z2(),fromYRotation:tg(),fromZRotation:og(),fromQuat:rg(),frustum:sg(),perspective:cg(),perspectiveFromFieldOfView:fg(),ortho:ug(),lookAt:pg(),str:mg()}});var bg=pt((kT,yg)=>{"use strict";var xg=d2(),mn=Vi(),Cs=pr(),N6=3e3,th="high",Cu,fl=.36,hl=13.64,Xi=Cs.C.hallEnd-.01,ul=Cs.C.z0+.01,R6=.356,C6=13.644,O6=Cs.C.hallEnd-.006,P6=Cs.C.z0+.006,I6=.12,oh=4,Yi=t=>vr[t]&&vr[t].cy||oh,Ou=.26,$6=5.6,F6=7,vr=[{side:"right",z:34.5},{side:"right",z:23.5},{side:"left",z:23.5},{side:"end",z:Xi},{side:"left",z:34.5},{side:"right",z:14.6},{side:"left",z:14.6,maxW:3.7,maxH:3.7},{side:"corridor",x:Cs.PAINTING_X[0],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:Cs.PAINTING_X[1],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:Cs.PAINTING_X[2],cy:3,maxW:3.3,maxH:3.73}];function q6(t,e){let o=e&&e.maxH||$6,n=e&&e.maxW||F6,r=Math.min(o,n/t);return{width:r*t,height:r}}function D6(t,e,o){let n=vr[o],r=[],a=Yi(o)-e/2;return n.side==="left"?(mn.fromTranslation(r,[fl,a,n.z+t/2]),mn.rotateY(r,r,Math.PI/2)):n.side==="right"?(mn.fromTranslation(r,[hl,a,n.z-t/2]),mn.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?mn.fromTranslation(r,[n.x-t/2,a,ul]):(mn.fromTranslation(r,[7+t/2,a,Xi]),mn.rotateY(r,r,Math.PI)),mn.scale(r,r,[t,e,I6]),r}function G6(t,e,o){let n=vr[o],r=[],a=Yi(o)-e/2;return n.side==="left"?(mn.fromTranslation(r,[fl,a,n.z+t/2]),mn.rotateY(r,r,Math.PI/2)):n.side==="right"?(mn.fromTranslation(r,[hl,a,n.z-t/2]),mn.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?mn.fromTranslation(r,[n.x-t/2,a,ul]):(mn.fromTranslation(r,[7+t/2,a,Xi]),mn.rotateY(r,r,Math.PI)),r}function H6(t,e,o){let n=vr[o],r=[],a=Yi(o)-e/2-Ou-.38;return n.side==="left"?(mn.fromTranslation(r,[R6,a,n.z+t/2]),mn.rotateY(r,r,Math.PI/2)):n.side==="right"?(mn.fromTranslation(r,[C6,a,n.z-t/2]),mn.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?mn.fromTranslation(r,[n.x-t/2,a,P6]):(mn.fromTranslation(r,[7+t/2,a,O6]),mn.rotateY(r,r,Math.PI)),mn.scale(r,r,[2,2,2]),r}function U6(t,e,o){let n=vr[o],r=Yi(o)-e/2-Ou-.38;return n.side==="left"?[fl+.55,r,n.z]:n.side==="right"?[hl-.55,r,n.z]:n.side==="corridor"?[n.x,r,ul+.55]:[7,r,Xi-.55]}var ll=.42;function eh(t,e,o,n,r,a){return[e[0]*n,e[1]*n,e[2]*n,0,0,r,0,0,o[0]*a,o[1]*a,o[2]*a,0,t[0],t[1],t[2],1]}function B6(t,e,o){let n=vr[o],r,a,s;n.side==="left"?(r=[fl,n.z],a=[0,0,1],s=[1,0,0]):n.side==="right"?(r=[hl,n.z],a=[0,0,1],s=[-1,0,0]):n.side==="corridor"?(r=[n.x,ul],a=[1,0,0],s=[0,0,1]):(r=[7,Xi],a=[1,0,0],s=[0,0,-1]);let i=Yi(o)+e/2+Ou+.3,c=Math.min(2.4,Math.max(.9,t*.55)),f=(v,p)=>[r[0]+s[0]*v,p,r[1]+s[2]*v],l=[.075,.062,.05],d=[{fixmodel:eh(f(.014,i),a,s,.1,.13,.028),fixcol:l,fixglow:0},{fixmodel:eh(f(ll/2,i),a,s,.02,.02,ll),fixcol:l,fixglow:0},{fixmodel:eh(f(ll,i),a,s,c,.034,.05),fixcol:l,fixglow:0},{fixmodel:eh(f(ll-.012,i-.019),a,s,c*.94,.006,.028),fixcol:l,fixglow:1}],u=f(ll,i-.02);return{fixtures:d,light:{c:[u[0],u[1],u[2],1],d:[a[0],a[1],a[2],c/2]}}}yg.exports=(t,e)=>{let o=[],n=[],r=a=>{let s=a.image_id;if(!vr[s])return;let{width:i,height:c}=q6(a.aspect,vr[s]),f=B6(i,c,s);e&&e.lights&&s<e.lights.length&&(e.lights[s]=f.light),o.push({...a,fixtures:f.fixtures,side:vr[s].side,model:D6(i,c,s),framemodel:G6(i,c,s),framesize:[i,c],textmodel:H6(i,c,s),text:a.textGen(i),width:i,height:c,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:U6(i,c,s),paintingPosition:vr[s].side==="left"?[fl+.05,oh,vr[s].z]:vr[s].side==="right"?[hl-.05,oh,vr[s].z]:vr[s].side==="corridor"?[vr[s].x,Yi(s),ul+.05]:[7,oh,Xi-.05],textGen:null})};return xg.fetch(t,vr.length,th,r,()=>{}),{update:()=>{n=o,n.forEach(a=>{xg.load(t,a,th)}),th="low",Cu&&clearTimeout(Cu),Cu=setTimeout(()=>{th="high"},N6)},batch:()=>n,interactables:()=>n.map((a,s)=>({side:a.side,width:a.width,index:s,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:a.plaquePosition,paintingPosition:a.paintingPosition}))}}});var Eg=pt((TT,Mg)=>{"use strict";var j6=ku(),wg=va(),_g=[[-.02,.125],[-.02,.15],[.035,.15],[.07,.12],[.07,.17],[.185,.17],[.185,.19],[.215,.19],[.26,.03]];function W6(){let t=[[0,0],[1,0],[1,1],[0,1]],e=[];_g.forEach(([n,r])=>{t.forEach(([a,s])=>e.push([a,s,n,r]))});let o=[];for(let n=0;n<_g.length-1;n++)for(let r=0;r<4;r++){let a=(r+1)%4,s=n*4+r,i=n*4+a,c=(n+1)*4+r,f=(n+1)*4+a;o.push(s,i,f,s,f,c)}return{verts:e,elems:o}}var V6=`#extension GL_OES_standard_derivatives : enable
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
}`,X6=`
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
}`;Mg.exports=t=>{let e=j6.draw(t),o=t({frag:`#extension GL_OES_standard_derivatives : enable
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
	}`,attributes:{pos:[0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,-.1,-.1,0,1.1,-.1,0,-.1,1.1,0,1.1,1.1,0]},elements:[0,1,2,3,2,1,1,0,5,4,5,0,3,1,7,5,7,1,0,2,4,6,4,2,8,9,4,5,4,9,9,11,5,7,5,11,11,10,7,6,7,10,10,8,6,4,6,8],uniforms:{model:t.prop("model"),tex:t.prop("tex"),psize:t.prop("framesize"),canvasCm:(s,i)=>i.size?[i.size[1],i.size[0]]:[61,91],texel:1/(wg.isPhone?1024:2048),detail:()=>wg.post===0?0:1},blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}}),n=W6(),r=t({frag:V6,vert:X6,attributes:{prof:n.verts},elements:n.elems,uniforms:{model:t.prop("framemodel"),fsize:t.prop("framesize")},cull:{enable:!1},blend:{enable:!1}}),a=t({frag:`#extension GL_OES_standard_derivatives : enable
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
}`,attributes:{pos:[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5],[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]]},elements:[0,1,2,0,2,3,4,5,6,4,6,7,0,1,5,0,5,4,2,3,7,2,7,6,0,3,7,0,7,4,1,2,6,1,6,5],uniforms:{model:t.prop("fixmodel"),fixcol:t.prop("fixcol"),fixglow:t.prop("fixglow")},cull:{enable:!1},blend:{enable:!1}});return function(s){o(s),r(s);let i=[];s.forEach(c=>{c.fixtures&&i.push(...c.fixtures)}),i.length&&a(i),e(s)}}});var Qi=pt((AT,Da)=>{"use strict";var kn=Math.PI,Wt=t=>(+t).toFixed(4),Ro=[-90,0,0],Vt=16,Lo=22,mo=7.8,ba=11.6,fr=.55,qa=(ba-mo)/(Vt/2),te={c:[3.6,8.6,13.6,18.6],hw:1.3,sill:.62,spring:4.9};te.top=te.spring+te.hw;var Or={cols:[-.65,0,.65],rowH:.71,w:.055,ring:.78},$a={rafter:Lo/12,rafterW:.1,purlin:1,purlinW:.07},Ag=[5.5,11,16.5],Ve={x0:Vt/2-1.9,x1:Vt/2+1.9,z0:5.6,z1:16.6,curb:.5,top:.36},Fa={x:Vt/2,z:14.9,plinth:.86,height:2.35,yaw:kn+.35},Pu=(()=>{let t=[-.7,.56,.44],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>o/e)})(),Iu=t=>[t[0]+Ro[0],t[1]+Ro[1],t[2]+Ro[2]],Wr={rain:/[?&]rain\b/.test(typeof location!="undefined"?location.search:"")?1:0,target:0,last:0};Wr.target=Wr.rain;function Lg(){let t=te.c.map(o=>`
		{
			float dz = q.z - ${Wt(o)};
			float inside = smoothstep(-b, b, ${Wt(te.hw)} - abs(dz)) * smoothstep(-b, b, q.y - ${Wt(te.sill)});
			float arch = smoothstep(-b, b, ${Wt(te.hw)} - length(vec2(dz, max(q.y - ${Wt(te.spring)}, 0.0))));
			o = max(o, inside * arch);
		}`).join(""),e=te.c.map(o=>`
		{
			float dz = q.z - ${Wt(o)};
			if (abs(dz) < ${Wt(te.hw+.2)}) {
				${Or.cols.map(n=>`bar = max(bar, 1.0 - smoothstep(${Wt(Or.w*.5)} - b, ${Wt(Or.w*.5)} + b, abs(dz - ${Wt(n)})));`).join(`
				`)}
				float ry = q.y - ${Wt(te.sill)};
				float tr = abs(ry - ${Wt(Or.rowH)} * floor(ry / ${Wt(Or.rowH)} + 0.5));
				if (q.y < ${Wt(te.spring+.02)}) bar = max(bar, 1.0 - smoothstep(${Wt(Or.w*.5)} - b, ${Wt(Or.w*.5)} + b, tr));
				float rr = length(vec2(dz, q.y - ${Wt(te.spring)}));
				if (q.y > ${Wt(te.spring)}) bar = max(bar, 1.0 - smoothstep(${Wt(Or.w*.5)} - b, ${Wt(Or.w*.5)} + b, abs(rr - ${Wt(Or.ring)})));
				// the frame round the opening
				bar = max(bar, 1.0 - smoothstep(0.0, b + 0.03, ${Wt(te.hw)} - max(abs(dz), q.y > ${Wt(te.spring)} ? rr : 0.0)));
			}
		}`).join("");return`
	const vec3 STUDIO_SUN = vec3(${Wt(Pu[0])}, ${Wt(Pu[1])}, ${Wt(Pu[2])});

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

	float studioSun(vec3 pw) {
		vec3 p = pw - vec3(${Wt(Ro[0])}, ${Wt(Ro[1])}, ${Wt(Ro[2])});
		vec3 S = STUDIO_SUN;
		// where the ray towards the sun leaves through the left wall
		float tw = (0.0 - p.x) / S.x;
		// and where it rises past the eaves
		float te = (${Wt(mo)} - p.y) / S.y;
		if (tw > 0.0 && tw < te) {
			vec3 h0 = p + S * tw;
			if (h0.z < 0.0 || h0.z > ${Wt(Lo)}) return 0.0;
			vec3 h1 = p + S * ((${Wt(-fr)} - p.x) / S.x);
			vec3 hm = p + S * ((${Wt(-fr*.5)} - p.x) / S.x);
			float b = 0.006 + 0.0075 * tw;
			float open = min(studioWinOpen(h0, b), studioWinOpen(h1, b));
			if (open <= 0.0) return 0.0;
			float bar = studioWinBars(hm, b);
			return open * (1.0 - bar) * 0.92;
		}
		// up through the roof: the trusses' tie beams first
		vec3 he = p + S * max(te, 0.0);
		float vis = 1.0;
		if (p.y < ${Wt(mo)}) {
			if (he.z < 0.0 || he.z > ${Wt(Lo)} || he.x < 0.0 || he.x > ${Wt(Vt)}) return 0.0;
			float be = 0.01 + 0.008 * te;
			${Ag.map(o=>`vis *= smoothstep(0.08 - be, 0.08 + be, abs(he.z - ${Wt(o)}));`).join(`
			`)}
		}
		// then the glass: the two slopes of the roof
		float tl = (${Wt(qa)} * p.x - p.y + ${Wt(mo)}) / (S.y - ${Wt(qa)} * S.x);
		float tr = (${Wt(qa)} * (${Wt(Vt)} - p.x) - p.y + ${Wt(mo)}) / (S.y + ${Wt(qa)} * S.x);
		float t = 1e9;
		vec3 h = vec3(0.0);
		vec3 hl = p + S * tl, hr = p + S * tr;
		if (tl > 0.0 && hl.x >= -0.01 && hl.x <= ${Wt(Vt/2+.01)}) { t = tl; h = hl; }
		if (tr > 0.0 && tr < t && hr.x >= ${Wt(Vt/2-.01)} && hr.x <= ${Wt(Vt+.01)}) { t = tr; h = hr; }
		if (t > 1e8) return 0.0;
		if (h.z < 0.0 || h.z > ${Wt(Lo)}) return 0.0;
		float b = 0.008 + 0.0075 * t;
		float rz = abs(h.z - ${Wt($a.rafter)} * floor(h.z / ${Wt($a.rafter)} + 0.5));
		float bar = 1.0 - smoothstep(${Wt($a.rafterW*.5)} - b, ${Wt($a.rafterW*.5)} + b, rz);
		float ux = h.x < ${Wt(Vt/2)} ? h.x : ${Wt(Vt)} - h.x;
		float rx = abs(ux - ${Wt($a.purlin)} * floor(ux / ${Wt($a.purlin)} + 0.5));
		bar = max(bar, 1.0 - smoothstep(${Wt($a.purlinW*.5)} - b, ${Wt($a.purlinW*.5)} + b, rx));
		// the ridge beam
		bar = max(bar, 1.0 - smoothstep(0.14 - b, 0.14 + b, abs(h.x - ${Wt(Vt/2)})));
		return vis * (1.0 - bar) * 0.58;
	}`}function $u(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let o=e;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}var vt={FLOOR:0,PLASTER:1,STONE:2,STEEL:3,WATER:4,PAD:5,PETAL:6,STAMEN:7,MARBLE:8,WOOD:9,GESSO:10,PAINT:11,POT:12,SHADE:13,BULB:14,NICHE:15,JAR:16,SOIL:17,BRUSH:18,TRAVERTINE:19,CLOTH:20};function zg(){let t={pos:[],nrm:[],kind:[],uv:[],idx:[]};return t.v=(e,o,n,r)=>(t.pos.push(e[0]+Ro[0],e[1]+Ro[1],e[2]+Ro[2]),t.nrm.push(o[0],o[1],o[2]),t.kind.push(n),t.uv.push(r?r[0]:0,r?r[1]:0),t.pos.length/3-1),t.quad=(e,o,n,r,a,s,i)=>{let c=t.v(e,a,s,i&&i[0]),f=t.v(o,a,s,i&&i[1]),l=t.v(n,a,s,i&&i[2]),d=t.v(r,a,s,i&&i[3]);t.idx.push(c,f,l,c,l,d)},t.box=(e,o,n,r,a,s,i,c)=>{let f=c||{};f.top||t.quad([e,a,n],[e,a,s],[r,a,s],[r,a,n],[0,1,0],i,[[e,n],[e,s],[r,s],[r,n]]),f.bottom||t.quad([e,o,n],[r,o,n],[r,o,s],[e,o,s],[0,-1,0],i,[[e,n],[r,n],[r,s],[e,s]]),f.x0||t.quad([e,o,n],[e,o,s],[e,a,s],[e,a,n],[-1,0,0],i,[[n,o],[s,o],[s,a],[n,a]]),f.x1||t.quad([r,o,s],[r,o,n],[r,a,n],[r,a,s],[1,0,0],i,[[s,o],[n,o],[n,a],[s,a]]),f.z0||t.quad([r,o,n],[e,o,n],[e,a,n],[r,a,n],[0,0,-1],i,[[r,o],[e,o],[e,a],[r,a]]),f.z1||t.quad([e,o,s],[r,o,s],[r,a,s],[e,a,s],[0,0,1],i,[[e,o],[r,o],[r,a],[e,a]])},t.tbox=(e,o,n,r,a,s,i,c,f)=>{let l=Math.cos(n),d=Math.sin(n),u=Math.cos(f||0),v=Math.sin(f||0),p=(g,y,b)=>{let w=a+(y-a)*u-b*v*0,_=b+(y-a)*v,k=a+(y-a)*u;return[e+l*g+d*_,k,o-d*g+l*_]},h=g=>{let y=g[1]*u-g[2]*v,b=g[2]*u+g[1]*v;return[l*g[0]+d*b,y,-d*g[0]+l*b]},m=(g,y,b,w,_)=>t.quad(p(...g),p(...y),p(...b),p(...w),h(_),c,[[g[0]+g[2],g[1]],[y[0]+y[2],y[1]],[b[0]+b[2],b[1]],[w[0]+w[2],w[1]]]);m([-r,s,-i],[-r,s,i],[r,s,i],[r,s,-i],[0,1,0]),m([-r,a,-i],[r,a,-i],[r,a,i],[-r,a,i],[0,-1,0]),m([-r,a,-i],[-r,a,i],[-r,s,i],[-r,s,-i],[-1,0,0]),m([r,a,i],[r,a,-i],[r,s,-i],[r,s,i],[1,0,0]),m([r,a,-i],[-r,a,-i],[-r,s,-i],[r,s,-i],[0,0,-1]),m([-r,a,i],[r,a,i],[r,s,i],[-r,s,i],[0,0,1])},t.beam=(e,o,n,r,a)=>{let s=[o[0]-e[0],o[1]-e[1],o[2]-e[2]],i=Math.hypot(...s),c=s.map(p=>p/i),f=a||(Math.abs(c[1])>.9?[1,0,0]:[0,1,0]),l=[c[1]*f[2]-c[2]*f[1],c[2]*f[0]-c[0]*f[2],c[0]*f[1]-c[1]*f[0]],d=Math.hypot(...l);l=l.map(p=>p/d),f=[l[1]*c[2]-l[2]*c[1],l[2]*c[0]-l[0]*c[2],l[0]*c[1]-l[1]*c[0]];let u=(p,h,m)=>[p[0]+l[0]*n*h+f[0]*n*m,p[1]+l[1]*n*h+f[1]*n*m,p[2]+l[2]*n*h+f[2]*n*m],v=[[[1,-1],[1,1],l],[[1,1],[-1,1],f],[[-1,1],[-1,-1],l.map(p=>-p)],[[-1,-1],[1,-1],f.map(p=>-p)]];for(let[p,h,m]of v)t.quad(u(e,...p),u(o,...p),u(o,...h),u(e,...h),m,r,[[0,0],[i,0],[i,1],[0,1]])},t.lathe=(e,o,n,r,a)=>{let s=a||32,i=n.map(([c,f],l)=>{let d=n[Math.max(0,l-1)],u=n[Math.min(n.length-1,l+1)],v=u[0]-d[0],p=u[1]-d[1],h=Math.hypot(v,p)||1,m=p/h,g=-v/h,y=[];for(let b=0;b<=s;b++){let w=b/s*2*kn;y.push(t.v([e+Math.cos(w)*c,f,o+Math.sin(w)*c],[Math.cos(w)*m,g,Math.sin(w)*m],r,[b/s*c*2*kn,f]))}return y});for(let c=0;c<i.length-1;c++)for(let f=0;f<s;f++){let l=i[c][f],d=i[c][f+1],u=i[c+1][f+1],v=i[c+1][f];t.idx.push(l,v,u,l,u,d)}},t}var Ki=t=>Math.abs(t)>=te.hw?null:te.spring+Math.sqrt(te.hw*te.hw-t*t);function Y6(){let t=zg();{let e=Ve.x0-Ve.curb,o=Ve.x1+Ve.curb,n=Ve.z0-Ve.curb,r=Ve.z1+Ve.curb,a=[[0,0,Vt,n],[0,r,Vt,Lo],[0,n,e,r],[o,n,Vt,r]];for(let[s,i,c,f]of a)for(let d=s;d<c-1e-6;d+=1)for(let u=i;u<f-1e-6;u+=1){let v=d,p=Math.min(c,d+1),h=u,m=Math.min(f,u+1);t.quad([v,0,h],[v,0,m],[p,0,m],[p,0,h],[0,1,0],vt.FLOOR,[[v,h],[v,m],[p,m],[p,h]])}}for(let e of[0,1]){let o=e?Vt:0,n=e?Vt+fr:-fr,r=e?[-1,0,0]:[1,0,0],a=.04;for(let h=0;h<Lo-1e-6;h+=a){let m=h,g=Math.min(Lo,h+a),y=(m+g)/2,b=null;for(let _ of te.c)Ki(y-_)!==null&&(b=[te.sill,Math.min(Ki(m-_)||te.spring,Ki(g-_)||te.spring)]);let w=b?[[0,b[0]],[b[1],mo]]:[[0,mo]];for(let[_,k]of w)k<=_||(e?t.quad([o,_,g],[o,_,m],[o,k,m],[o,k,g],r,vt.PLASTER,[[g,_],[m,_],[m,k],[g,k]]):t.quad([o,_,m],[o,_,g],[o,k,g],[o,k,m],r,vt.PLASTER,[[m,_],[g,_],[g,k],[m,k]]))}for(let h of te.c){for(let b of[-1,1]){let w=h+b*te.hw,_=[0,0,-b],k=[o,te.sill,w],N=[n,te.sill,w],G=[n,te.spring,w],C=[o,te.spring,w];b>0!=!!e?t.quad(k,N,G,C,_,vt.PLASTER,[[0,te.sill],[fr,te.sill],[fr,te.spring],[0,te.spring]]):t.quad(C,G,N,k,_,vt.PLASTER,[[0,te.spring],[fr,te.spring],[fr,te.sill],[0,te.sill]])}let m=28;for(let b=0;b<m;b++){let w=b/m*kn,_=(b+1)/m*kn,k=h+Math.cos(w)*te.hw,N=h+Math.cos(_)*te.hw,G=te.spring+Math.sin(w)*te.hw,C=te.spring+Math.sin(_)*te.hw,X=[0,-Math.sin((w+_)/2),-Math.cos((w+_)/2)];e?t.quad([o,G,k],[n,G,k],[n,C,N],[o,C,N],X,vt.PLASTER,[[0,w],[fr,w],[fr,_],[0,_]]):t.quad([o,C,N],[n,C,N],[n,G,k],[o,G,k],X,vt.PLASTER,[[0,_],[fr,_],[fr,w],[0,w]])}let g=e?Vt-.08:-fr,y=e?Vt+fr:.08;t.box(g,te.sill-.09,h-te.hw-.12,y,te.sill,h+te.hw+.12,vt.STONE)}let s=e?Vt:0,i=e?-1:1,c=[.6,...te.c.slice(1).map((h,m)=>(h+te.c[m])/2),Lo-.6];for(let h of c){let m=Math.min(s,s+i*.14),g=Math.max(s,s+i*.14);t.box(m,0,h-.34,g,mo-.7,h+.34,vt.STONE,{bottom:!0});let y=Math.min(s,s+i*.24),b=Math.max(s,s+i*.24);t.box(y,0,h-.44,b,.55,h+.44,vt.STONE,{bottom:!0}),t.box(y,mo-.95,h-.46,b,mo-.7,h+.46,vt.STONE)}let f=Math.min(s,s+i*.05),l=Math.max(s,s+i*.05);t.box(f,0,0,l,.22,Lo,vt.STONE,{bottom:!0});let d=Math.min(s,s+i*.32),u=Math.max(s,s+i*.32);t.box(d,mo-.55,0,u,mo-.3,Lo,vt.STONE);let v=Math.min(s,s+i*.42),p=Math.max(s,s+i*.42);t.box(v,mo-.3,0,p,mo-.12,Lo,vt.STONE)}for(let[e,o]of[[0,1],[Lo,-1]]){for(let c=0;c<32;c++){let f=c/32*Vt,l=(c+1)/32*Vt,d=v=>v<Vt/2?mo+qa*v:mo+qa*(Vt-v),u=o>0?[[l,0],[f,0],[f,d(f)],[l,d(l)]]:[[f,0],[l,0],[l,d(l)],[f,d(f)]];t.quad(...u.map(([v,p])=>[v,p,e]),[0,0,o],vt.PLASTER,u.map(([v,p])=>[v,p]))}let r=o>0?0:Lo-.05,a=o>0?.05:Lo;t.box(0,0,r,Vt,.22,a,vt.STONE,{bottom:!0});let s=o>0?0:Lo-.32,i=o>0?.32:Lo;t.box(0,mo-.55,s,Vt,mo-.3,i,vt.STONE)}{let o=Vt/2-1.1,n=Vt/2+1.1,r=3.9;t.box(o-.3,0,0,o,r+.3,.12,vt.STONE),t.box(n,0,0,n+.3,r+.3,.12,vt.STONE),t.box(o-.3,r,0,n+.3,r+.4,.14,vt.STONE);for(let[a,s]of[[o,Vt/2-.01],[Vt/2+.01,n]])t.box(a,0,.02,s,r,.02+.06,vt.WOOD),t.box(a+.12,.3,.02+.06,s-.12,1.7,.02+.09,vt.WOOD),t.box(a+.12,2,.02+.06,s-.12,r-.2,.02+.09,vt.WOOD)}{let e=Lo,o=Vt/2,n=1.25,r=4.6;t.quad([o-n,.9,e-.02],[o+n,.9,e-.02],[o+n,r,e-.02],[o-n,r,e-.02],[0,0,-1],vt.NICHE,[[0,.9],[1,.9],[1,r],[0,r]]);for(let l of[-1,1]){let d=o+l*(n+.24);t.box(d-.24,0,e-.42,d+.24,r,e,vt.TRAVERTINE,{z1:!0,bottom:!0}),t.box(d-.3,0,e-.5,d+.3,.9,e,vt.TRAVERTINE,{z1:!0,bottom:!0}),t.box(d-.31,r,e-.5,d+.31,r+.22,e,vt.TRAVERTINE,{z1:!0})}t.box(o-n-.55,r+.22,e-.56,o+n+.55,r+.72,e,vt.TRAVERTINE,{z1:!0}),t.box(o-n-.65,r+.72,e-.66,o+n+.65,r+.84,e,vt.TRAVERTINE,{z1:!0});let a=r+.84,s=a+1.05,i=n+.7,c=e-.6;t.quad([o-i,a,c],[o+i,a,c],[o,s,c],[o,s,c],[0,0,-1],vt.TRAVERTINE,[[0,a],[1,a],[.5,s],[.5,s]]);let f=Math.hypot(i,s-a);for(let l of[-1,1]){let d=l*(s-a)/f,u=i/f,v=[o+l*i,a,c],p=[o,s,c],h=[o,s,e],m=[o+l*i,a,e];l<0?t.quad(v,m,h,p,[d,u,0],vt.TRAVERTINE,[[0,0],[1,0],[1,1],[0,1]]):t.quad(v,p,h,m,[d,u,0],vt.TRAVERTINE,[[0,0],[1,0],[1,1],[0,1]])}t.box(o-n,0,e-.36,o+n,.9,e,vt.TRAVERTINE,{z1:!0,bottom:!0})}{let{x0:e,x1:o,z0:n,z1:r,curb:a,top:s}=Ve,i=.06,c=.08;t.box(e-a,0,n-a,e,s-c,r+a,vt.TRAVERTINE,{bottom:!0}),t.box(o,0,n-a,o+a,s-c,r+a,vt.TRAVERTINE,{bottom:!0}),t.box(e,0,n-a,o,s-c,n,vt.TRAVERTINE,{bottom:!0}),t.box(e,0,r,o,s-c,r+a,vt.TRAVERTINE,{bottom:!0}),t.box(e-a-i,s-c,n-a-i,e+i*.5,s,r+a+i,vt.TRAVERTINE),t.box(o-i*.5,s-c,n-a-i,o+a+i,s,r+a+i,vt.TRAVERTINE),t.box(e+i*.5,s-c,n-a-i,o-i*.5,s,n+i*.5,vt.TRAVERTINE),t.box(e+i*.5,s-c,r-i*.5,o-i*.5,s,r+a+i,vt.TRAVERTINE);let f=.5;for(let v=e;v<o-1e-6;v+=f)for(let p=n;p<r-1e-6;p+=f){let h=v,m=Math.min(o,v+f),g=p,y=Math.min(r,p+f);t.quad([h,0,g],[h,0,y],[m,0,y],[m,0,g],[0,1,0],vt.WATER,[[h,g],[h,y],[m,y],[m,g]])}let{x:l,z:d,plinth:u}=Fa;t.box(l-.42,0,d-.42,l+.42,u-.12,d+.42,vt.TRAVERTINE,{bottom:!0}),t.box(l-.5,u-.12,d-.5,l+.5,u,d+.5,vt.TRAVERTINE),t.box(l-.48,0,d-.48,l+.48,.12,d+.48,vt.TRAVERTINE,{bottom:!0})}return t}function K6(t){for(let o of[0,1]){let n=o?Vt+fr*.5:-fr*.5,r=.05,a=Or.w*.5;for(let s of te.c){for(let i of Or.cols){let c=Ki(i)-.01;t.box(n-r,te.sill,s+i-a,n+r,c,s+i+a,vt.STEEL)}for(let i=te.sill+Or.rowH;i<te.spring+.01;i+=Or.rowH)t.box(n-r,i-a,s-te.hw,n+r,i+a,s+te.hw,vt.STEEL);for(let[i,c]of[[te.hw-.03,.06],[Or.ring,a]])for(let l=0;l<24;l++){let d=l/24*kn,u=(l+1)/24*kn;t.beam([n,te.spring+Math.sin(d)*i,s+Math.cos(d)*i],[n,te.spring+Math.sin(u)*i,s+Math.cos(u)*i],c,vt.STEEL,[1,0,0])}for(let i of[-1,1])t.box(n-r,te.sill,s+i*(te.hw-.03)-.03,n+r,te.spring,s+i*(te.hw-.03)+.03,vt.STEEL);t.box(n-r,te.sill,s-te.hw,n+r,te.sill+.06,s+te.hw,vt.STEEL)}}let e=o=>o<Vt/2?mo+qa*o:mo+qa*(Vt-o);for(let o=0;o<=12;o++){let n=o*$a.rafter;for(let[r,a]of[[-.3,Vt/2],[Vt/2,Vt+.3]])t.beam([r,e(Math.max(0,Math.min(Vt,r)))-.1,n],[a,e(a)-.1,n],.06,vt.STEEL)}for(let o=$a.purlin;o<Vt/2-.2;o+=$a.purlin)for(let n of[o,Vt-o])t.beam([n,e(n)-.06,-.2],[n,e(n)-.06,Lo+.2],.035,vt.STEEL);t.beam([Vt/2,ba-.14,-.2],[Vt/2,ba-.14,Lo+.2],.12,vt.STEEL);for(let o of[.05,Vt-.05])t.beam([o,mo-.05,0],[o,mo-.05,Lo],.1,vt.STEEL);for(let o of Ag){t.box(-.05,mo-.13,o-.08,Vt+.05,mo+.13,o+.08,vt.STEEL),t.beam([Vt/2,mo,o],[Vt/2,ba-.2,o],.07,vt.STEEL);for(let n of[-1,1])t.beam([Vt/2+n*Vt/4,mo,o],[Vt/2,ba-.4,o],.055,vt.STEEL),t.beam([Vt/2+n*Vt/4,mo,o],[Vt/2+n*Vt/4,e(Vt/2+n*Vt/4)-.2,o],.045,vt.STEEL),t.beam([Vt/2+n*(Vt/2-.1),mo,o],[Vt/2+n*Vt/4,e(Vt/2+n*Vt/4)-.2,o],.045,vt.STEEL);for(let n of[-1,1])t.box(Vt/2+n*Vt/4-.12,mo-.18,o-.1,Vt/2+n*Vt/4+.12,mo+.18,o+.1,vt.STEEL)}}function Q6(t){let e=$u(311),o=[],n=[[Ve.x0+.9,6.6,.9,10],[Ve.x1-.8,8.4,.85,9],[Ve.x0+.8,10.6,.8,8],[Ve.x1-.9,12.4,.9,10],[Ve.x0+1,13.9,.65,6],[Vt/2+.2,9.6,.5,4],[Ve.x1-.7,15.9,.55,5]];for(let[a,s,i,c]of n)for(let f=0;f<c;f++)for(let l=0;l<40;l++){let d=e()*2*kn,u=i*Math.sqrt(e()),v=a+Math.cos(d)*u,p=s+Math.sin(d)*u,h=.15+e()*.17;if(!(v-h<Ve.x0+.04||v+h>Ve.x1-.04||p-h<Ve.z0+.04||p+h>Ve.z1-.04)&&!(Math.hypot(v-Fa.x,p-Fa.z)<.62+h)&&!o.some(m=>Math.hypot(m[0]-v,m[1]-p)<(m[2]+h)*.93)){o.push([v,p,h,e()*2*kn,e()]);break}}for(let[a,s,i,c,f]of o){let d=.34+f*.1,u=t.v([a,.012,s],[0,1,0],vt.PAD,[.5,f]),v=null;for(let p=0;p<=30;p++){let h=c+d/2+(2*kn-d)*p/30,m=i*(1+.03*Math.sin(h*7+f*10)),g=t.v([a+Math.cos(h)*m,.012+.008*Math.sin(h*3+f*9),s+Math.sin(h)*m],[0,1,0],vt.PAD,[1,f]);v!==null&&t.idx.push(u,v,g),v=g}v=null;for(let p=0;p<=30;p++){let h=c+d/2+(2*kn-d)*p/30,m=i*(1+.03*Math.sin(h*7+f*10)),g=[a+Math.cos(h)*m,.012,s+Math.sin(h)*m],y=[a+Math.cos(h)*(m+.012),.03,s+Math.sin(h)*(m+.012)],b=t.v(g,[Math.cos(h),.4,Math.sin(h)],vt.PAD,[1.2,f]),w=t.v(y,[Math.cos(h),.4,Math.sin(h)],vt.PAD,[1.2,f]);v&&t.idx.push(v[0],b,w,v[0],w,v[1]),v=[b,w]}}let r=[[Ve.x0+.75,6.9,1],[Ve.x1-.65,8.1,.85],[Ve.x1-.95,12.6,1.1],[Ve.x0+.95,10.3,.8],[Ve.x1-.55,15.6,.9],[Ve.x0+1.15,13.7,.75]];for(let[a,s,i]of r)[[12,1,70],[10,.86,48],[8,.66,26]].forEach(([l,d,u],v)=>{for(let p=0;p<l;p++){let h=2*kn*p/l+v*.33,m=(90-(90-u)*i)*kn/180,g=6,y=4,b=[];for(let w=0;w<=g;w++){let _=w/g,k=Math.sin(kn*Math.pow(_,.8))*.42*d*.17,N=[];for(let G=0;G<=y;G++){let C=G/y*2-1,X=C*k,q=Math.abs(C)*Math.abs(C)*.12*d*.17,ot=_*d*.17,D=ot*Math.cos(m),K=ot*Math.sin(m)+q,Et=a+Math.cos(h)*D-Math.sin(h)*X,Ht=s+Math.sin(h)*D+Math.cos(h)*X;N.push(t.v([Et,.03+K,Ht],[-Math.cos(h)*Math.sin(m)*.6,.8,-Math.sin(h)*Math.sin(m)*.6],vt.PETAL,[_,(C+1)/2]))}b.push(N)}for(let w=0;w<g;w++)for(let _=0;_<y;_++){let k=b[w][_],N=b[w][_+1],G=b[w+1][_+1],C=b[w+1][_];t.idx.push(k,N,G,k,G,C,k,G,N,k,C,G)}}}),t.lathe(a,s,[[0,.03+.05*.17*4],[.025,.03+.045*.17*4],[.032,.035],[0,.03]],vt.STAMEN,12)}function Z6(t,e){let o=$u(907);[{x:12.4,z:6.2,yaw:.62,lean:.2},{x:13.1,z:9.7,yaw:.95,lean:.24},{x:12.6,z:13.3,yaw:1.22,lean:.18}].forEach((r,a)=>{let s=Math.cos(r.yaw),i=Math.sin(r.yaw),c=Math.cos(r.lean),f=Math.sin(r.lean),l=(_,k,N)=>[r.x+s*_+i*(N+k*f),k*c,r.z-i*_+s*(N+k*f)],d=_=>[s*_[0]+i*_[2],_[1],-i*_[0]+s*_[2]],u=(_,k)=>t.beam(l(..._),l(...k),.022,vt.WOOD);u([-.36,0,0],[-.06,2.15,0]),u([.36,0,0],[.06,2.15,0]),t.beam(l(0,.05,.02),l(0,2.3,.02),.026,vt.WOOD),t.beam([r.x+i*.95,0,r.z+s*.95],l(0,1.85,.04),.02,vt.WOOD);let v=l(-.42,.78,-.06),p=l(.42,.78,-.06);t.beam(v,p,.035,vt.WOOD);let h=.305,m=.91,g=.82,y=-.11,b=-.08,w=(_,k,N,G,C,X,q)=>t.quad(l(..._),l(...k),l(...N),l(...G),d(C),X,q);w([-h,g,y],[h,g,y],[h,g+m,y],[-h,g+m,y],[0,f,-c],vt.PAINT,[[0+a,0],[1+a,0],[1+a,1],[0+a,1]]),w([h,g,b],[-h,g,b],[-h,g+m,b],[h,g+m,b],[0,-f,c],vt.WOOD,[[0,0],[1,0],[1,1],[0,1]]);for(let _ of[-1,1])w([_*h,g,_>0?y:b],[_*h,g,_>0?b:y],[_*h,g+m,_>0?b:y],[_*h,g+m,_>0?y:b],[_,0,0],vt.GESSO,[[0,0],[1,0],[1,1],[0,1]]);w([-h,g+m,y],[h,g+m,y],[h,g+m,b],[-h,g+m,b],[0,c,f],vt.GESSO,[[0,0],[1,0],[1,1],[0,1]]),w([h,g,y],[-h,g,y],[-h,g,b],[h,g,b],[0,-c,-f],vt.GESSO,[[0,0],[1,0],[1,1],[0,1]]),t.beam(l(-.07,g+m+.04,-.1),l(.07,g+m+.04,-.1),.03,vt.WOOD)});for(let f=0;f<14;f++)for(let l=0;l<3*14;l++){let d=11.4+3.1999999999999993*f/14,u=11.4+(14.6-11.4)*(f+1)/14,v=4.6+(15-4.6)*l/(3*14),p=4.6+(15-4.6)*(l+1)/(3*14),h=(m,g)=>.004+.012*Math.max(0,Math.sin(m*4.1+g*1.3)*Math.sin(g*2.7-m));t.quad([d,h(d,v),v],[d,h(d,p),p],[u,h(u,p),p],[u,h(u,v),v],[0,1,0],vt.CLOTH,[[d,v],[d,p],[u,p],[u,v]])}{t.box(1.25-.48,.86-.06,11.1-1.35,1.25+.48,.86,11.1+1.35,vt.WOOD);for(let f of[-1,1])for(let l of[-1,1])t.box(1.25+f*(.48-.08)-.04,0,11.1+l*(1.35-.1)-.04,1.25+f*(.48-.08)+.04,.86-.06,11.1+l*(1.35-.1)+.04,vt.WOOD);t.box(1.25-.48+.06,.16,11.1-1.35+.1,1.25+.48-.06,.19,11.1+1.35-.1,vt.WOOD);for(let f=0;f<11;f++){let l=1.25+(o()-.5)*.6,d=11.1+(o()-.5)*2.2,u=.035+o()*.04,v=.09+o()*.14;if(t.lathe(l,d,[[0,.86],[u,.86],[u*1.02,.86+v*.9],[u*.9,.86+v],[0,.86+v]],f%3?vt.JAR:vt.POT,14),f%3===0)for(let p=0;p<7;p++){let h=o()*2*kn,m=.28+o()*.12,g=.12+o()*.2;t.beam([l,.86+.03,d],[l+Math.cos(h)*g*m,.86+.03+m,d+Math.sin(h)*g*m],.0055,vt.BRUSH)}}t.box(1.25-.3,.86,11.1+.7,1.25+.15,.86+.02,11.1+1.15,vt.WOOD)}for(let r=0;r<5;r++){let a=.55+o()*.6,s=.75+o()*.8,i=19.3+r*.16,c=.25+r*.07,f=.17,l=[c+s*Math.sin(f)*0,s,i];t.quad([c+.18,0,i-a/2],[c+.18,0,i+a/2],[c+.18-s*Math.sin(f),s*Math.cos(f),i+a/2],[c+.18-s*Math.sin(f),s*Math.cos(f),i-a/2],[Math.cos(f),Math.sin(f),0],r%2?vt.WOOD:vt.GESSO,[[0,0],[1,0],[1,1],[0,1]])}{t.lathe(11.2,8.2,[[0,.62],[.2,.62],[.2,.66],[0,.66]],vt.WOOD,20);for(let s=0;s<3;s++){let i=2*kn*s/3+.4;t.beam([11.2+Math.cos(i)*.24,0,8.2+Math.sin(i)*.24],[11.2+Math.cos(i)*.12,.62,8.2+Math.sin(i)*.12],.018,vt.WOOD)}}for(let[r,a,s]of e)t.lathe(r,a,[[0,0],[.26*s,0],[.33*s,.32*s],[.36*s,.55*s],[.38*s,.6*s],[.34*s,.6*s],[0,.57*s]],vt.POT,36),t.lathe(r,a,[[0,.57*s],[.33*s,.575*s],[0,.58*s]],vt.SOIL,20);for(let r of Ng)t.beam([r[0],mo,r[2]],[r[0],r[1]+.05,r[2]],.008,vt.STEEL),t.lathe(r[0],r[2],[[.04,r[1]+.06],[.06,r[1]+.02],[.16,r[1]-.09],[.29,r[1]-.22],[.33,r[1]-.28],[.32,r[1]-.285]],vt.SHADE,32),t.lathe(r[0],r[2],[[0,r[1]-.25],[.06,r[1]-.2],[0,r[1]-.12]],vt.BULB,12)}var Ng=[[4.2,4.6,7.33],[11.8,4.6,7.33],[4.2,4.6,16.5],[11.8,4.6,16.5]],Rg=[[Ve.x0-1,Ve.z0-1,1],[Ve.x1+1,Ve.z0-1,.95],[Ve.x0-1,Ve.z1+1,1.15],[Ve.x1+1,Ve.z1+1,1.1],[.9,1.3,1.25],[Vt-.9,Lo-1.2,1.3]],Sg=[[0,0,.16,.5],[.16,0,.34,.4],[.35,0,.5,.36],[.5,0,.66,.38],[.68,0,.84,.42],[0,.6,.19,1],[.2,.57,.36,1],[.41,.6,.58,1]];function J6(){let t={pos:[],nrm:[],uv:[],shade:[],idx:[]},e=$u(1213),o=(r,a,s,i,c)=>{let f=Sg[Math.floor(e()*Sg.length)],l=(f[2]-f[0])/(f[3]-f[1]),d=i*l*1,u=5,v=t.pos.length/3,p=.6+e()*.4;for(let h=0;h<=u;h++){let m=h/u,g=c*m*m*i,y=[r[0]+a[0]*m*i,r[1]+a[1]*m*i-g,r[2]+a[2]*m*i];for(let b of[-.5,.5]){t.pos.push(y[0]+s[0]*b*d+Ro[0],y[1]+s[1]*b*d-Math.abs(b)*.08*d+Ro[1],y[2]+s[2]*b*d+Ro[2]);let w=[a[1]*s[2]-a[2]*s[1],a[2]*s[0]-a[0]*s[2],a[0]*s[1]-a[1]*s[0]],_=Math.hypot(...w)||1;t.nrm.push(w[0]/_,Math.abs(w[1]/_)+.2,w[2]/_),t.uv.push(b<0?f[0]:f[2],f[3]-(f[3]-f[1])*m),t.shade.push(p)}}for(let h=0;h<u;h++){let m=v+h*2;t.idx.push(m,m+1,m+3,m,m+3,m+2)}};for(let[r,a,s]of Rg){let i=30+Math.floor(e()*10);for(let c=0;c<i;c++){let f=e()*2*kn,l=.45+e()*.9,d=(.55+e()*.4)*s,u=(.2+e()*.9)*s,v=[r+Math.cos(f)*u*Math.cos(l)*.5,.58*s+u*Math.sin(l)*.9,a+Math.sin(f)*u*Math.cos(l)*.5],p=[Math.cos(f)*Math.cos(l*.6),Math.sin(l*.6),Math.sin(f)*Math.cos(l*.6)];o(v,p,[-Math.sin(f),0,Math.cos(f)],d,.25+e()*.25)}}let n=Vt/2;for(let r=0;r<34;r++){let a=n-2+e()*4,s=4.6+.9+e()*.9,i=Lo-.65-e()*.05,c=1+e()*3.2,f=Math.floor(c/.11);for(let l=0;l<f&&(s-=.11,a+=(e()-.5)*.05,!(s<.9));l++)for(let d=0;d<2;d++){let u=e()*2*kn;o([a,s,i-.02-e()*.12],[Math.cos(u)*.5,-.6+e()*.3,-.5],[Math.sin(u),0,0],.15+e()*.1,.1)}}for(let[r,a,s]of[[Ve.x0-.3,Ve.z0-.3,-1],[Ve.x1+.3,Ve.z1+.3,1],[Ve.x0-.3,Ve.z1+.2,-1]])for(let i=0;i<26;i++){let c=e()*2*kn,f=r+(e()-.3)*.5*-s,l=a+(e()-.5)*.8,d=Ve.top+.01-Math.max(0,Math.abs(f-r)-.1)*.6*e();o([f,Math.max(.05,d),l],[Math.cos(c),-.15,Math.sin(c)],[-Math.sin(c),0,Math.cos(c)],.08+e()*.05,.12)}return t}function tM(){let t=zg();for(let o of[0,1]){let n=o?Vt+fr*.5+.01:-fr*.5-.01,r=o?[-1,0,0]:[1,0,0];for(let a of te.c)for(let i=a-te.hw;i<a+te.hw-1e-6;i+=.05){let c=i,f=Math.min(a+te.hw,i+.05),l=Ki(c-a+1e-4)||te.spring,d=Ki(f-a-1e-4)||te.spring;o?t.quad([n,te.sill,f],[n,te.sill,c],[n,l,c],[n,d,f],r,0,[[f,te.sill],[c,te.sill],[c,l],[f,d]]):t.quad([n,te.sill,c],[n,te.sill,f],[n,d,f],[n,l,c],r,0,[[c,te.sill],[f,te.sill],[f,d],[c,l]])}}let e=Math.hypot(qa,1);return t.quad([0,mo+.002,Lo],[0,mo+.002,0],[Vt/2,ba+.002,0],[Vt/2,ba+.002,Lo],[qa/e,-1/e,0].map(o=>-o).map((o,n)=>n===1?-Math.abs(o):o),1,[[0,Lo],[0,0],[Vt/2,0],[Vt/2,Lo]]),t.quad([Vt,mo+.002,0],[Vt,mo+.002,Lo],[Vt/2,ba+.002,Lo],[Vt/2,ba+.002,0],[-qa/e,-1/e,0],1,[[Vt,0],[Vt,Lo],[Vt/2,Lo],[Vt/2,0]]),t}var eM=`
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
`,oM=Ng.map(t=>Iu([t[0],t[1]-.22,t[2]])),nh=`
	${eM}
	${Lg()}

	// the sky outside: what the windows and the roof show, and what
	// lights the room when the sun does not
	vec3 studioSky(vec3 d) {
		float up = clamp(d.y, -0.2, 1.0);
		vec3 dayZen = vec3(0.30, 0.48, 0.80), dayHor = vec3(0.92, 0.88, 0.80);
		vec3 day = mix(dayHor, dayZen, pow(max(up, 0.0), 0.55));
		float sd = max(dot(d, STUDIO_SUN), 0.0);
		day += vec3(1.0, 0.86, 0.62) * (pow(sd, 6.0) * 0.45 + pow(sd, 60.0) * 0.8) * (1.0 - rain);
		// rain: a low, even, pearl-grey sky
		vec3 grey = mix(vec3(0.60, 0.61, 0.62), vec3(0.47, 0.50, 0.54), pow(max(up, 0.0), 0.6)) * 0.78;
		day = mix(day, grey, rain);
		vec3 nZen = vec3(0.012, 0.022, 0.05), nHor = vec3(0.05, 0.065, 0.10);
		vec3 nite = mix(nHor, nZen, pow(max(up, 0.0), 0.5)) + vec3(0.55, 0.65, 0.9) * pow(sd, 40.0) * 0.3 * (1.0 - rain);
		nite = mix(nite, vec3(0.03, 0.035, 0.045), rain * 0.6);
		return mix(day, nite, night);
	}

	// the light reaching a point: sun through the openings, the sky
	// through the glass, light bounced off the sunlit floor, and at night
	// the pendant lamps. Returns diffuse light; spec gets the sun's glint.
	vec3 studioLight(vec3 pw, vec3 N, vec3 V, float gloss, out vec3 spec, out float sunVis) {
		vec3 p = pw - vec3(${Wt(Ro[0])}, ${Wt(Ro[1])}, ${Wt(Ro[2])});
		float vis = studioSun(pw + N * 0.03);
		sunVis = vis;
		vec3 sunC = mix(vec3(1.0, 0.80, 0.56) * 4.6, vec3(0.42, 0.55, 0.95) * 0.75, night) * (1.0 - 0.97 * rain);
		float lam = max(dot(N, STUDIO_SUN), 0.0);
		vec3 col = sunC * vis * lam;
		vec3 Hh = normalize(STUDIO_SUN + V);
		spec = sunC * vis * pow(max(dot(N, Hh), 0.0), mix(16.0, 400.0, gloss)) * mix(0.04, 1.0, gloss) * (lam > 0.0 ? 1.0 : 0.0);

		// skylight: the roof is glass, the walls are full of windows
		float upF = 0.5 + 0.5 * N.y;
		float hgt = clamp(p.y / ${Wt(mo)}, 0.0, 1.0);
		// corners and the foot of the walls get less of the sky
		float dw = min(min(p.x, ${Wt(Vt)} - p.x), min(p.z, ${Wt(Lo)} - p.z));
		float occ = mix(0.55, 1.0, smoothstep(0.0, 2.2, dw)) * mix(0.72, 1.0, smoothstep(0.0, 2.5, p.y));
		vec3 skyC = mix(vec3(0.70, 0.65, 0.58), vec3(0.035, 0.05, 0.09), night);
		// under a rain sky the glass roof floods the room with soft grey light
		skyC = mix(skyC, mix(vec3(0.74, 0.77, 0.80) * 1.45, vec3(0.03, 0.04, 0.06), night), rain);
		col += skyC * (0.22 + 0.62 * upF) * occ * (0.85 + 0.3 * hgt) * 0.36;
		// the bright left windows, seen from walls and things facing them
		vec3 winC = mix(vec3(1.0, 0.86, 0.66), vec3(0.62, 0.66, 0.70) * 1.2, rain);
		col += mix(winC, vec3(0.06, 0.08, 0.14), night) * (max(-N.x, 0.0) + rain * max(N.x, 0.0)) * 0.16 * occ;
		// light thrown back up off the sunlit floor: warm, from below
		float pools = mix(1.0, 0.15, night) * (1.0 - 0.75 * rain);
		col += vec3(0.95, 0.68, 0.42) * pools * (0.12 + 0.26 * max(-N.y, 0.0)) * (1.0 - smoothstep(0.5, 6.0, p.y)) * smoothstep(0.0, 1.2, dw);

		// the lamps (by night)
		if (night > 0.01) {
			${oM.map(t=>`
			{
				vec3 d = vec3(${Wt(t[0])}, ${Wt(t[1])}, ${Wt(t[2])}) - pw;
				float dd = dot(d, d);
				vec3 Ld = d * inversesqrt(dd);
				// the shade throws the light downwards
				float cone = smoothstep(0.05, 0.55, Ld.y);
				float w = night * 14.0 * cone / (1.0 + dd * 0.9);
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
		vec3 airC = mix(mix(vec3(0.36, 0.30, 0.24), vec3(0.50, 0.53, 0.56), rain), vec3(0.02, 0.03, 0.05), night);
		return mix(col, airC, h * mix(0.25, 0.34, rain));
	}
`;function nM(t){let e=new DataView(t),o=e.getUint32(4,!0),n=e.getUint32(8,!0),r=[],a=[];for(let l=0;l<3;l++)r.push(e.getFloat32(12+l*4,!0)),a.push(e.getFloat32(24+l*4,!0));let s=36,i=new Uint16Array(t,s,o*3);s+=o*6;let c=new Uint16Array(t,s,n);s+=n*2;let f=new Int8Array(t,s,o*3);return{nV:o,nI:n,mn:r,sz:a,pos:i,idx:c,nrm:f}}function rM(t,e){let o=t.texture({data:[[[0,0,0,0]]],min:"linear",mag:"linear"}),n={tex:o,ready:!1};return fetch(e).then(r=>{if(!r.ok)throw new Error("Could not load "+e);return r.blob()}).then(r=>createImageBitmap(r,{premultiplyAlpha:"none"}).catch(()=>new Promise((a,s)=>{let i=new Image;i.onload=()=>a(i),i.onerror=s,i.src=URL.createObjectURL(r)}))).then(r=>{o({data:r,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear"}),n.ready=!0}).catch(r=>console.error(r)),n}var kg=`
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
	}`,aM=`
	precision highp float;
	uniform float night, time, yScale, mirrorOn, rain;
	varying vec3 v_pos, v_nrm, v_eye;
	varying float v_kind;
	varying vec2 v_uv;
	${nh}

	bool is(float k) { return abs(v_kind - k) < 0.5; }

	void main() {
		vec3 pw = v_pos;
		vec3 p = pw - vec3(${Wt(Ro[0])}, ${Wt(Ro[1])}, ${Wt(Ro[2])});
		vec3 V = normalize(v_eye - pw);
		vec3 N = normalize(v_nrm);
		if (dot(N, V) < 0.0 && !is(${vt.PETAL}.0)) N = -N;
		if (is(${vt.PETAL}.0) && dot(N, V) < 0.0) N = -N;

		// in the reflection under the floor, the floor and the water are not drawn
		bool floorish = is(${vt.FLOOR}.0) || is(${vt.WATER}.0);
		if (yScale < 0.0 && floorish) discard;

		vec3 base = vec3(0.5);
		float gloss = 0.1;
		float rough = 1.0;
		float aoK = 1.0;
		float sss = 0.0;

		if (is(${vt.PLASTER}.0) || is(${vt.NICHE}.0)) {
			// old lime plaster: warm, patchy, with a soft trowelled bloom
			float big = fbm3(p * vec3(0.35, 0.45, 0.35));
			float mid = fbm3(p * 1.6 + 3.0);
			float fine = vnoise3(p * 14.0);
			vec3 a = vec3(0.70, 0.60, 0.47), b = vec3(0.84, 0.76, 0.63);
			base = mix(a, b, smoothstep(0.3, 0.7, big));
			base *= 0.86 + 0.22 * mid + 0.05 * fine;
			// damp stains low down, soot high up
			base *= mix(0.86, 1.0, smoothstep(0.0, 1.4, p.y + 0.6 * mid));
			base *= mix(1.0, 0.9, smoothstep(${Wt(mo-2)}, ${Wt(mo)}, p.y));
			// where the plaster has come away, old brick shows through
			float bare = smoothstep(0.70, 0.74, fbm3(p * vec3(0.5, 0.8, 0.5) + 11.0)) * smoothstep(0.4, 1.6, p.y) * 0.85;
			vec2 bk = (abs(N.x) > 0.5 ? p.zy : p.xy) * vec2(1.0 / 0.23, 1.0 / 0.075);
			bk.x += floor(bk.y) * 0.5;
			float mortar = max(smoothstep(0.9, 0.97, fract(bk.x)), smoothstep(0.82, 0.92, fract(bk.y)));
			vec3 brick = mix(vec3(0.55, 0.30, 0.20), vec3(0.42, 0.25, 0.18), vnoise3(vec3(floor(bk), 0.0) * 0.7)) * (0.85 + 0.3 * hash13(vec3(floor(bk), 1.0)));
			brick = mix(brick, vec3(0.62, 0.58, 0.52), mortar);
			base = mix(base, brick, bare);
			if (is(${vt.NICHE}.0)) base *= 0.55;
			gloss = 0.04;
		} else if (is(${vt.STONE}.0)) {
			float n = fbm3(p * vec3(1.2, 2.5, 1.2));
			base = mix(vec3(0.72, 0.66, 0.56), vec3(0.84, 0.79, 0.70), n) * (0.92 + 0.12 * vnoise3(p * 20.0));
			gloss = 0.12;
		} else if (is(${vt.TRAVERTINE}.0)) {
			// travertine: bands, little holes, a warm cream
			float band = fbm3(vec3(p.x * 0.4, p.y * 9.0 + fbm3(p * 1.5) * 2.0, p.z * 0.4));
			base = mix(vec3(0.73, 0.65, 0.53), vec3(0.88, 0.82, 0.72), band);
			float pit = smoothstep(0.84, 0.9, vnoise3(p * 55.0));
			base *= 1.0 - pit * 0.18;
			// wet and darker just above the water
			base *= mix(0.78, 1.0, smoothstep(0.0, 0.12, p.y));
			gloss = 0.18;
		} else if (is(${vt.STEEL}.0)) {
			base = vec3(0.035, 0.036, 0.038) * (0.8 + 0.4 * vnoise3(p * 3.0));
			gloss = 0.45;
		} else if (is(${vt.FLOOR}.0)) {
			// big honed limestone flags, set in a running bond
			vec2 q = p.xz;
			float row = floor(q.y / 1.2);
			q.x += mod(row, 2.0) * 0.45;
			vec2 cell = floor(q / vec2(0.9, 1.2));
			vec2 fr = fract(q / vec2(0.9, 1.2)) * vec2(0.9, 1.2);
			float grout = 1.0 - smoothstep(0.0, 0.012, min(min(fr.x, 0.9 - fr.x), min(fr.y, 1.2 - fr.y)));
			float tone = hash13(vec3(cell, 3.0));
			float n = fbm3(vec3(p.x * 1.3, 0.0, p.z * 1.3) + vec3(cell * 3.1, 0.0));
			base = mix(vec3(0.58, 0.51, 0.42), vec3(0.74, 0.67, 0.57), tone * 0.6 + n * 0.4);
			base *= 1.0 - grout * 0.35;
			// worn paths and paint drips near the easels
			float wear = fbm3(vec3(p.x * 0.6, 1.0, p.z * 0.6));
			gloss = mix(0.35, 0.6, wear) * (1.0 - grout);
			float drip = smoothstep(0.82, 0.86, vnoise3(vec3(p.xz * 6.0, 2.0))) * smoothstep(9.8, 11.5, p.x);
			base = mix(base, vec3(0.55, 0.25, 0.12), drip * 0.5);
			aoK = mix(0.62, 1.0, smoothstep(0.0, 0.9, min(min(p.x, ${Wt(Vt)} - p.x), min(p.z, ${Wt(Lo)} - p.z))));
			// the curb throws a soft shadow round the pool
			vec2 dq = max(vec2(${Wt(Ve.x0-Ve.curb)} - p.x, p.x - ${Wt(Ve.x1+Ve.curb)}), vec2(${Wt(Ve.z0-Ve.curb)} - p.z, p.z - ${Wt(Ve.z1+Ve.curb)}));
			float dpool = max(max(dq.x, dq.y), 0.0);
			aoK *= mix(0.7, 1.0, smoothstep(0.0, 0.4, dpool));
		} else if (is(${vt.WATER}.0)) {
			base = vec3(0.012, 0.018, 0.014);
			gloss = 1.0;
		} else if (is(${vt.PAD}.0)) {
			float sh = v_uv.y;
			vec2 q = (p.xz) * 9.0;
			float veins = smoothstep(0.85, 1.0, abs(sin(atan(q.y, q.x) * 9.0)));
			base = mix(vec3(0.10, 0.20, 0.05), vec3(0.28, 0.36, 0.10), sh) * (0.85 + 0.25 * vnoise3(vec3(p.xz * 18.0, sh)));
			base = mix(base, vec3(0.45, 0.22, 0.10), smoothstep(1.1, 1.2, v_uv.x) * 0.7);
			base *= 1.0 - veins * 0.12;
			gloss = 0.55;
		} else if (is(${vt.PETAL}.0)) {
			base = mix(vec3(0.98, 0.90, 0.92), vec3(0.86, 0.36, 0.62), smoothstep(0.2, 1.0, v_uv.x));
			sss = 0.6;
			gloss = 0.25;
		} else if (is(${vt.STAMEN}.0)) {
			base = vec3(0.95, 0.66, 0.12);
			gloss = 0.2;
		} else if (is(${vt.MARBLE}.0)) {
			// warm white marble with faint grey veins
			float v = fbm3(p * 2.2);
			float vein = 1.0 - smoothstep(0.0, 0.035, abs(sin((p.y * 3.0 + p.x * 2.0 + v * 6.0))) - 0.0) ;
			base = mix(vec3(0.86, 0.83, 0.77), vec3(0.93, 0.91, 0.86), v) * (1.0 - 0.06 * vein);
			// a little grime in the folds, darker at the foot
			base *= mix(0.84, 1.0, smoothstep(${Wt(Fa.plinth)}, ${Wt(Fa.plinth+.5)}, p.y));
			sss = 0.18;
			gloss = 0.32;
		} else if (is(${vt.WOOD}.0)) {
			float g = vnoise3(vec3(p.x * 2.0, p.y * 30.0, p.z * 2.0));
			base = mix(vec3(0.26, 0.15, 0.08), vec3(0.42, 0.27, 0.15), g) * (0.85 + 0.2 * vnoise3(p * 5.0));
			gloss = 0.2;
		} else if (is(${vt.GESSO}.0)) {
			base = vec3(0.86, 0.83, 0.76) * (0.95 + 0.08 * vnoise3(p * 30.0));
		} else if (is(${vt.PAINT}.0)) {
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
		} else if (is(${vt.POT}.0)) {
			base = vec3(0.025, 0.025, 0.028);
			gloss = 0.85;
		} else if (is(${vt.SOIL}.0)) {
			base = vec3(0.10, 0.07, 0.05) * (0.7 + 0.5 * vnoise3(p * 40.0));
		} else if (is(${vt.SHADE}.0)) {
			base = vec3(0.03);
			gloss = 0.6;
		} else if (is(${vt.BULB}.0)) {
			vec3 glow = mix(vec3(0.75, 0.70, 0.62) * 0.35, vec3(1.0, 0.75, 0.45) * 3.5, night);
			gl_FragColor = vec4(sqrt(glow), 1.0);
			return;
		} else if (is(${vt.JAR}.0)) {
			base = mix(vec3(0.55, 0.42, 0.25), vec3(0.75, 0.70, 0.62), hash13(floor(p * 3.0)));
			gloss = 0.7;
		} else if (is(${vt.BRUSH}.0)) {
			base = mix(vec3(0.42, 0.10, 0.06), vec3(0.75, 0.62, 0.38), step(${Wt(.86+.24)}, p.y));
			gloss = 0.5;
		} else if (is(${vt.CLOTH}.0)) {
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
		if (is(${vt.POT}.0) || is(${vt.STEEL}.0) || is(${vt.SHADE}.0) || is(${vt.JAR}.0)) {
			col += env * (0.04 + 0.6 * fres) * gloss * 1.2;
		}

		col = studioAir(col, pw, v_eye);

		float alpha = 1.0;
		if (is(${vt.FLOOR}.0)) {
			float cosV = clamp(V.y, 0.0, 1.0);
			float refl = (0.06 + 0.45 * pow(1.0 - cosV, 4.0)) * gloss * 1.4;
			alpha = 1.0 - refl * mirrorOn;
			alpha = mix(alpha, 1.0, clamp(sunVis * 0.5, 0.0, 0.5));
		}
		if (is(${vt.WATER}.0)) {
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
	}`;Da.exports=function(t){let e=Y6();K6(e),Q6(e),Z6(e,Rg);let o={enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"zero"}},n=(p,h)=>t({vert:kg,frag:aM,attributes:{position:p.pos,normal:p.nrm,kind:p.kind,uv:p.uv},elements:new Uint32Array(p.idx),count:h||p.idx.length,uniforms:{rain:()=>Wr.rain},cull:{enable:!1},blend:o}),r=n(e),a=null;fetch("res/venus.bin").then(p=>{if(!p.ok)throw new Error("Could not load venus.bin");return p.arrayBuffer()}).then(p=>{let h=nM(p),m={pos:[],nrm:[],kind:[],uv:[],idx:[]},g=Fa.height,y=Math.cos(Fa.yaw),b=Math.sin(Fa.yaw);for(let w=0;w<h.nV;w++){let _=(h.mn[0]+h.pos[w*3]/65535*h.sz[0])*g,k=(h.mn[1]+h.pos[w*3+1]/65535*h.sz[1])*g,N=(h.mn[2]+h.pos[w*3+2]/65535*h.sz[2])*g;m.pos.push(Fa.x+y*_+b*N+Ro[0],Fa.plinth+k+Ro[1],Fa.z-b*_+y*N+Ro[2]);let G=h.nrm[w*3]/127,C=h.nrm[w*3+1]/127,X=h.nrm[w*3+2]/127;m.nrm.push(y*G+b*X,C,-b*G+y*X),m.kind.push(vt.MARBLE),m.uv.push(0,0)}for(let w=0;w<h.nI;w++)m.idx.push(h.idx[w]);a=n(m)}).catch(p=>console.error(p));let s=rM(t,"res/tree/leaves.webp"),i=J6(),c=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec3 position, normal;
		attribute vec2 uv;
		attribute float shade;
		varying vec3 v_pos, v_nrm, v_eye;
		varying vec2 v_uv;
		varying float v_shade;
		void main() {
			v_pos = position; v_nrm = normal; v_uv = uv; v_shade = shade;
			vec3 t = view[3].xyz;
			v_eye = -vec3(dot(view[0].xyz, t), dot(view[1].xyz, t), dot(view[2].xyz, t));
			v_eye.y *= yScale;
			vec3 p = position; p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`
		precision highp float;
		uniform float night, time, rain;
		uniform sampler2D tex;
		varying vec3 v_pos, v_nrm, v_eye;
		varying vec2 v_uv;
		varying float v_shade;
		${nh}
		void main() {
			vec4 t = texture2D(tex, v_uv);
			if (t.a < 0.5) discard;
			vec3 V = normalize(v_eye - v_pos);
			vec3 N = normalize(v_nrm);
			if (dot(N, V) < 0.0) N = -N;
			vec3 base = t.rgb * t.rgb * vec3(0.8, 0.95, 0.75) * v_shade;
			vec3 spec; float sv;
			vec3 light = studioLight(v_pos, N, V, 0.4, spec, sv);
			// light through the leaf
			float through = max(dot(-N, STUDIO_SUN), 0.0) * sv;
			vec3 col = base * light + base * vec3(0.9, 1.0, 0.5) * through * 2.2 * (1.0 - night) + spec * 0.3;
			col = studioAir(col, v_pos, v_eye);
			gl_FragColor = vec4(sqrt(max(col, 0.0)), 1.0);
		}`,attributes:{position:i.pos,normal:i.nrm,uv:i.uv,shade:i.shade},elements:new Uint32Array(i.idx),uniforms:{tex:s.tex,rain:()=>Wr.rain},cull:{enable:!1}}),f=tM(),l=t({vert:kg,frag:`
		precision highp float;
		uniform float night, time, rain;
		varying vec3 v_pos, v_nrm, v_eye;
		varying float v_kind;
		varying vec2 v_uv;
		${nh}

		vec2 hash22(vec2 p) {
			vec3 a = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
			a += dot(a, a.yzx + 33.33);
			return fract((a.xx + a.yz) * a.zy);
		}
		// beads of rain sitting on the glass: returns coverage, and the
		// drop's local position (for its highlight and its dark rim)
		float beads(vec2 q, float cell, float fill, out vec2 local) {
			vec2 c = floor(q / cell), f = fract(q / cell);
			float best = 0.0; local = vec2(0.0);
			for (int j = -1; j <= 1; j++) for (int i = -1; i <= 1; i++) {
				vec2 o = vec2(float(i), float(j));
				vec2 h = hash22(c + o);
				if (h.x > fill) continue;
				vec2 ctr = o + 0.15 + 0.7 * hash22(c + o + 17.0);
				float r = (0.12 + 0.28 * h.y);
				vec2 d = (f - ctr) * vec2(1.0, 0.85);
				float m = smoothstep(r, r * 0.75, length(d));
				if (m > best) { best = m; local = d / r; }
			}
			return best;
		}
		// rivulets running down: a drop sliding down each column with a
		// thin wet trail behind it
		float runs(vec2 q, float speed, out float head) {
			float colW = 0.07;
			float c = floor(q.x / colW);
			vec2 h = hash22(vec2(c, 3.0));
			head = 0.0;
			if (h.x > 0.45) return 0.0;
			float x = (fract(q.x / colW) - 0.5) * colW;
			// the path wanders a little
			x += sin(q.y * 7.0 + h.y * 20.0) * 0.004;
			float len = 2.6 + 3.0 * h.y;
			float y = mod(-q.y + time * speed * (0.6 + h.x * 2.0) + h.y * 10.0, len);
			float head0 = smoothstep(0.012, 0.006, length(vec2(x, (y - 0.025) * 0.6)));
			float trail = smoothstep(0.004, 0.0012, abs(x)) * smoothstep(0.0, 0.03, y) * (1.0 - smoothstep(0.3, 1.6, y));
			head = head0;
			return max(head0, trail * 0.7);
		}

		void main() {
			vec3 V = normalize(v_eye - v_pos);
			vec3 N = normalize(v_nrm);
			if (dot(N, V) < 0.0) N = -N;
			float F = 0.04 + 0.96 * pow(1.0 - max(dot(N, V), 0.0), 5.0);
			vec3 p = v_pos - vec3(${Wt(Ro[0])}, ${Wt(Ro[1])}, ${Wt(Ro[2])});
			bool roof = v_kind > 0.5;
			float dust = fbm3(p * vec3(1.5, 3.0, 1.5)) * (roof ? 1.0 : 0.6);
			float streak = roof ? smoothstep(0.55, 0.9, vnoise3(vec3(p.z * 9.0, p.x * 0.6, 0.0))) * 0.5 : 0.0;
			vec3 c = mix(vec3(0.85, 0.80, 0.72), vec3(0.12, 0.13, 0.17), night) * (dust * 0.5 + streak);
			float a = clamp(0.05 + dust * 0.16 + streak * 0.2 + F * 0.4, 0.0, 0.6);
			vec3 sky = studioSky(reflect(-V, N));
			vec3 col = mix(c, sky, F / max(a, 0.01) * 0.4);

			if (rain > 0.001) {
				// the pane's own coordinates, "down" along the glass
				vec2 q = roof ? vec2(p.z, -abs(p.x - ${Wt(Vt/2)}) * 1.25) : vec2(p.z, p.y);
				q.y = -q.y;
				// mist: the glass fogs from the cold, thickest low down
				float mist = roof ? 0.55 : mix(0.75, 0.42, smoothstep(${Wt(te.sill)}, ${Wt(te.top)}, p.y));
				mist *= 0.75 + 0.5 * fbm3(vec3(p.z * 2.0, p.y * 2.0 + p.x, 4.0));
				vec3 mistC = mix(vec3(0.70, 0.72, 0.74), vec3(0.06, 0.07, 0.09), night);
				// beads, big and small
				vec2 l1, l2;
				vec2 qb = roof ? q * 0.7 : q;
				float b1 = beads(qb, 0.065, 0.55, l1);
				float b2 = beads(qb + 7.3, 0.026, 0.75, l2);
				float bead = max(b1, b2 * 0.9);
				vec2 l = b1 > b2 ? l1 : l2;
				// running rivulets wipe clear lines through the mist
				float hd;
				float run = runs(q, roof ? 0.35 : 0.55, hd);
				// spatter: fresh drops landing on the roof
				float splat = 0.0;
				if (roof) {
					vec2 sc = floor(q / 0.22);
					vec2 sh = hash22(sc + 5.0);
					float ph = fract(time * (0.8 + sh.x) + sh.y);
					vec2 sp = (sc + 0.2 + 0.6 * hash22(sc + 9.0)) * 0.22;
					float rr = ph * 0.05;
					splat = smoothstep(0.004, 0.0, abs(length(q - sp) - rr)) * (1.0 - ph);
				}
				float wet = max(bead, run);
				// a drop is a little lens: dark at the rim, the sky's light
				// caught in its upper side, a tiny bright point
				vec3 dropC = mix(vec3(0.26, 0.27, 0.29), vec3(0.98, 0.99, 1.0), smoothstep(-0.1, 0.9, -l.y));
				dropC += vec3(1.0) * smoothstep(0.35, 0.0, length(l - vec2(-0.25, -0.35))) * 0.8;
				dropC = mix(dropC, dropC * vec3(0.06, 0.07, 0.1), night);
				vec3 rc = mix(mistC, dropC, wet);
				rc = mix(rc, mistC * 1.15, splat * 0.7);
				float ra = mix(mist * 0.6 * (1.0 - run * 0.8), 0.8, bead) + splat * 0.4;
				col = mix(col, rc, rain);
				a = mix(a, clamp(ra, 0.0, 0.85), rain);
			}
			gl_FragColor = vec4(sqrt(max(col, 0.0)), a);
		}`,attributes:{position:f.pos,normal:f.nrm,kind:f.kind,uv:f.uv},uniforms:{rain:()=>Wr.rain},elements:new Uint32Array(f.idx),cull:{enable:!1},depth:{mask:!1},blend:o}),d=(()=>{let p={pos:[],idx:[]},h=300,m=24,g=12;for(let y=0;y<=g;y++){let b=-.25*kn+y/g*.75*kn;for(let w=0;w<=m;w++){let _=w/m*2*kn;p.pos.push(Ro[0]+Vt/2+h*Math.cos(b)*Math.cos(_),h*Math.sin(b),Ro[2]+Lo/2+h*Math.cos(b)*Math.sin(_))}}for(let y=0;y<g;y++)for(let b=0;b<m;b++){let w=y*(m+1)+b,_=w+1,k=w+m+2,N=w+m+1;p.idx.push(w,_,k,w,k,N)}return p})(),u=t({vert:`
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
		uniform float night, time, rain;
		varying vec3 v_pos, v_eye;
		${nh}
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
			trees = mix(trees, studioSky(vec3(d.x, 0.05, d.z)), rain * 0.55);
			col = mix(col, trees * 1.15, inTrees);
			vec3 meadow = mix(vec3(0.55, 0.55, 0.32), vec3(0.75, 0.70, 0.50), vnoise3(vec3(d.xz * 80.0, 0.0)));
			meadow = mix(meadow, toNightC(meadow), night);
			meadow = mix(meadow, vec3(0.38, 0.40, 0.36), rain * 0.7);
			col = mix(col, meadow, ground);
			// the rain itself: two layers of falling streaks
			if (rain > 0.001) {
				float streaks = 0.0;
				for (int k = 0; k < 2; k++) {
					float sc = k == 0 ? 160.0 : 90.0;
					vec2 q = vec2(az * sc, d.y * sc * 0.25 + time * (k == 0 ? 9.0 : 6.0));
					vec2 cc = floor(q), ff = fract(q);
					float r = hash13(vec3(cc, float(k)));
					float x = abs(ff.x - 0.2 - 0.6 * hash13(vec3(cc, 7.0 + float(k))));
					streaks += smoothstep(0.06, 0.0, x) * smoothstep(0.0, 0.2, ff.y) * smoothstep(1.0, 0.5, ff.y) * step(0.55, r);
				}
				col = mix(col, vec3(0.86, 0.88, 0.9) * mix(1.0, 0.08, night), clamp(streaks, 0.0, 1.0) * 0.28 * rain);
			}
			gl_FragColor = vec4(sqrt(max(col, 0.0)), 1.0);
		}`.replace("${LIGHT}","").replace("void main() {",`vec3 toNightC(vec3 c) { float l = dot(c, vec3(0.3, 0.59, 0.11)); return vec3(l) * vec3(0.06, 0.08, 0.14); }
		void main() {`),attributes:{position:d.pos},uniforms:{rain:()=>Wr.rain},elements:new Uint32Array(d.idx),cull:{enable:!1}});function v(p){let h=performance.now()/1e3,m=Math.min(.1,Math.max(0,h-Wr.last));Wr.last=h,Wr.rain+=(Wr.target-Wr.rain)*Math.min(1,m*.8),u(),r(),a&&a(),s.ready&&c(),p&&p.reflected||l()}return v};var Tg=[{from:[12.6,1.65,.9],to:[11.4,1.75,2.6],at:[6.2,2.6,15.5],fov:60},{from:[8,1.45,1.4],to:[8,1.25,4.4],at:[8,1.7,16],fov:50},{from:[7.2,1.6,3.8],to:[8.3,1.55,5.2],at:[13,1.4,10.4],fov:52},{from:[6.2,1.45,10.4],to:[7,1.75,11.6],at:[8,2.3,15.2],fov:44},{from:[2.6,1.5,2.6],to:[3.6,1.6,4.4],at:[7,6.8,12],fov:62}],dl=11;function sM(t){let e=Tg.length,o=Math.floor(t/dl)%e,n=t%dl/dl,r=n*n*(3-2*n),a=Tg[o],s=a.from.map((c,f)=>c+(a.to[f]-c)*r),i=Math.max(0,1-Math.min(n*dl,(1-n)*dl)/.7);return{eye:Iu(s),target:Iu(a.at),fov:a.fov,roll:0,fade:i}}Da.exports.previewCam=sM;Da.exports.setRain=t=>{Wr.target=t?1:0};Da.exports.raining=()=>Wr.rain;Da.exports.rainTarget=()=>Wr.target;Da.exports.sunGLSL=Lg;Da.exports.O=Ro;Da.exports.SIZE={W:Vt,L:Lo,H:mo,RIDGE:ba};Da.exports.BOX=[Ro[0]-.8,0,Ro[2]-.8,Ro[0]+Vt+.8,ba+.5,Ro[2]+Lo+.8];Da.exports.AIR_BOX=[Ro[0],0,Ro[2],Ro[0]+Vt,ba,Ro[2]+Lo]});var ah=pt((LT,Fg)=>{"use strict";var{A:hr}=xa(),{C:Rn}=pr(),{DOOR:Zi}=F0(),tr=B0(),Ji=Qi(),Pg=Rn.hallEnd+.35,Ig={arch:[13.6,0,hr.zc-hr.arch.r-.3,14.4,hr.arch.spring+hr.arch.r+.3,hr.zc+hr.arch.r+.3],mouth:[13.3,0,Rn.z0-.3,14.3,8.2,Rn.z1+.3],stair:[-.5,0,tr.SURR.z0-.2,.5,tr.SURR.top+.3,tr.SURR.z1+.2],door:[Zi.x0-.4,0,-.5,Zi.x1+.4,Zi.top+.4,.5],windows:[15.6,.4,Rn.z1-.2,36.9,6.4,Rn.z1+.9],farDoor:[Rn.x1-.2,0,Rn.zc-Zi.r-.4,Rn.x1+.9,Zi.top+.4,Rn.zc+Zi.r+.4]},_0={court:[hr.x0-.4,0,hr.z0-.3,hr.x1+.3,hr.domeTop+.5,hr.z1+.3],stair:[tr.C.x-tr.R-2.6,0,tr.C.z-tr.R-1.5,.5,15.6,tr.C.z+tr.R+1.5],street:[-60,-1,-140,74,60,.6],garden:[10,-1,Rn.z1,46,60,Rn.z1+110],florence:[Rn.x1,-1,Rn.zc-30,Rn.x1+80,60,Rn.zc+30],studio:Ji.BOX},iM=[[0,0,0,14,0,Pg],[13.6,0,Rn.z0,Rn.x1+.4,0,Rn.z1],[hr.x0-.4,0,hr.z0,hr.x1,0,hr.z1],[tr.C.x-tr.R-2.6,0,tr.C.z-tr.R,.4,0,tr.C.z+tr.R],[Ji.BOX[0],0,Ji.BOX[2],Ji.BOX[3],0,Ji.BOX[5]]],cM={hall:{court:["arch"],stair:["stair"],street:["door"],garden:["mouth","windows"],florence:["mouth","farDoor"]},wing:{court:["mouth","arch"],stair:["mouth","stair"],street:["mouth","door"],garden:["windows"],florence:["farDoor"]},court:{stair:["arch","stair"],street:["arch","door"],garden:["arch","mouth","windows"],florence:["arch","mouth","farDoor"]},stair:{court:["stair","arch"],street:["stair","door"],garden:["stair","mouth","windows"],florence:["stair","mouth","farDoor"]}},ml=new Float64Array(24),Ga=[7,2,2],$g=0,M0="out",rh=!0;try{/[?&]nocull\b/.test(location.search)&&(rh=!1)}catch(t){}var pl={court:!0,stair:!0,street:!0,garden:!0,florence:!0,studio:!1},vl={court:!0,stair:!0,street:!0,garden:!0,florence:!0,studio:!1},Cg=!0;function lM(t){let e=i=>[t[i],t[4+i],t[8+i],t[12+i]],o=e(0),n=e(1),r=e(2),a=e(3),s=(i,c,f,l)=>{for(let d=0;d<4;d++)ml[i*4+d]=c[d]+f*l[d]};s(0,a,1,o),s(1,a,-1,o),s(2,a,1,n),s(3,a,-1,n),s(4,a,1,r),s(5,a,-1,r)}function W0(t,e){if(!rh)return!0;let o=e?-t[4]:t[1],n=e?-t[1]:t[4];for(let r=0;r<6;r++){let a=ml[r*4],s=ml[r*4+1],i=ml[r*4+2],c=ml[r*4+3],f=a>0?t[3]:t[0],l=s>0?n:o,d=i>0?t[5]:t[2];if(a*f+s*l+i*d+c<0)return!1}return!0}var Fu=(t,e)=>Ga[0]>t[0]-e&&Ga[0]<t[3]+e&&Ga[2]>t[2]-e&&Ga[2]<t[5]+e;function fM(t){if(Fu(t,.6))return null;let e=1/0,o=-1/0;for(let n=0;n<4;n++){let r=(n&1?t[3]:t[0])-Ga[0],a=(n&2?t[5]:t[2])-Ga[2],s=Math.atan2(r,a)-$g;s-=Math.round(s/(2*Math.PI))*2*Math.PI,e=Math.min(e,s),o=Math.max(o,s)}return o-e>Math.PI?null:[e,o]}function Og(t,e,o){let n=-Math.PI,r=Math.PI,a=s=>{let i=fM(s);return i?(n=Math.max(n,i[0]-.03),r=Math.min(r,i[1]+.03),n<=r):!0};for(let s of t){let i=Ig[s];if(!Fu(i,.6)&&(!W0(i,o)||!a(i)))return!1}return W0(e,o)&&a(e)}function hM(){let t=Ga[0],e=Ga[2],o=Ji.BOX;return t>o[0]&&t<o[3]&&e>o[2]&&e<o[5]?"studio":t<0&&e>tr.C.z-tr.R-1.5&&t>tr.C.x-tr.R-2.6?"stair":t>14.1&&e>hr.z0-.3&&e<hr.z1+.3&&t<hr.x1+.3?"court":t>13.9&&e>Rn.z0-.4&&e<Rn.z1+.1&&t<Rn.x1+.3?"wing":t>=0&&t<=14.1&&e>.3&&e<Pg?"hall":"out"}var uM={PORTAL:Ig,ROOM:_0,update(t,e,o){let n=new Array(16);for(let r=0;r<4;r++)for(let a=0;a<4;a++){let s=0;for(let i=0;i<4;i++)s+=e[i*4+a]*t[r*4+i];n[r*4+a]=s}lM(n),Ga[0]=o[0],Ga[1]=o[1],Ga[2]=o[2],$g=Math.atan2(-t[2],-t[10]),M0=hM();for(let r in _0){if(r==="studio"||M0==="studio"){pl[r]=vl[r]=r==="studio"&&M0==="studio";continue}if(!rh||M0==="out"||M0===r||Fu(_0[r],.3))pl[r]=W0(_0[r],!1)||M0===r,vl[r]=W0(_0[r],!0)||M0===r;else{let a=cM[M0][r];pl[r]=a?Og(a,_0[r],!1):W0(_0[r],!1),vl[r]=a?Og(a,_0[r],!0):W0(_0[r],!0)}}Cg=!rh||iM.some(r=>W0(r,!1))},get zone(){return M0},room(t,e){return e?vl[t]:pl[t]},box(t,e,o){return o&&!(e?vl[o]:pl[o])?!1:W0(t,e)},get floor(){return Cg}};Fg.exports=uM});var Dg=pt((zT,qg)=>{"use strict";var dM=Eu(),pM=ah();function vM(t){let e=new DataView(t);if(String.fromCharCode(e.getUint8(0),e.getUint8(1),e.getUint8(2),e.getUint8(3))!=="STAT")throw new Error("Not a statue file");let n=e.getUint32(4,!0),r=e.getUint32(8,!0),a=[],s=[];for(let d=0;d<3;d++)a.push(e.getFloat32(12+d*4,!0)),s.push(e.getFloat32(24+d*4,!0));let i=36,c=new Uint16Array(t,i,n*3);i+=n*6;let f=new Uint16Array(t,i,r);i+=r*2;let l=new Int8Array(t,i,n*3);return{nV:n,nI:r,mn:a,sz:s,pos:c,idx:f,nrm:l}}qg.exports=(t,e)=>{let o=[],n=[],r=[],a=[],s=null,i=e.statues.length,c=[],f=(d,u)=>{let v=o.length/3,p=u.height*.75,h=u.base!==void 0?u.base:e.pedestalTop;c.push({offset:a.length,count:d.nI,box:[u.x-p,h-.1,u.z-p,u.x+p,h+u.height+.2,u.z+p]});let m=u.height,g=Math.cos(u.yaw),y=Math.sin(u.yaw),b=u.base!==void 0?u.base:e.pedestalTop;for(let w=0;w<d.nV;w++){let _=(d.mn[0]+d.pos[w*3]/65535*d.sz[0])*m,k=(d.mn[1]+d.pos[w*3+1]/65535*d.sz[1])*m,N=(d.mn[2]+d.pos[w*3+2]/65535*d.sz[2])*m;o.push(u.x+g*_+y*N,b+k,u.z-y*_+g*N);let G=d.nrm[w*3]/127,C=d.nrm[w*3+1]/127,X=d.nrm[w*3+2]/127;n.push(g*G+y*X,C,-y*G+g*X),r.push(u.mat||1,0,0)}for(let w=0;w<d.nI;w++)a.push(v+d.idx[w])},l=()=>{a.length!==0&&(s=dM(t,{position:o,normal:n,mat:r,elements:a,lights:e.lights,get viewer(){return e.viewer}},!1,!0))};return e.statues.forEach(d=>{fetch("res/"+d.file).then(u=>{if(!u.ok)throw new Error("Could not load "+d.file);return u.arrayBuffer()}).then(u=>f(vM(u),d)).catch(u=>console.error(u)).then(()=>{--i===0&&l()})}),function(d){if(!s)return;let u=!!(d&&d.reflected),v=c.filter(p=>pM.box(p.box,u));v.length&&s(v)}}});var Qg=pt((NT,Du)=>{"use strict";var mM=Ts(),Hn=1.29032,Ps=[9.2968,2,5.9],gM=[[.767398,.00185,-.10827],[.010515,.769952,.087681],[-.107774,.08829,-.762374]],sh=2147.64,Gg=725,Hg=1288,Ug=1450,Bg=2576,Vr=-5.197,$s=3.865,V0=10.135,Fs=-14.679,gl=-30.229,xl=7.232,jg=-45.713,tc=17.1*Hn,Is=16.6*Hn,yl=16.6*Hn,Wg=[6.9,17.1],ih=[2.95,16.6],xM=1.6,yM=0,bM=1,Vg=2,qu=3,Xg=4,Yg=5,wM=6;function _M(){let t=[],e=[],o=[],n=[],r=mM.createBuilder(t,e,o,n),a=(f,l,d,u,v,p,h=1,m=1)=>{let g=[];for(let y=0;y<=h;y++){let b=[];for(let w=0;w<=m;w++){let _=[f[0]+l[0]*y/h+d[0]*w/m,f[1]+l[1]*y/h+d[1]*w/m,f[2]+l[2]*y/h+d[2]*w/m],k=p(_);b.push(r.vert(_,u,[v,k[0],k[1]]))}g.push(b)}for(let y=0;y<h;y++)for(let b=0;b<m;b++)r.tri(g[y][b],g[y+1][b],g[y][b+1]),r.tri(g[y+1][b],g[y+1][b+1],g[y][b+1])},s=f=>l=>[(Ps[2]-l[2])/Hn-f,l[1]/Hn];a([-60,0,-.36],[130,0,0],[0,0,-140],[0,1,0],yM,f=>[f[0]/Hn,f[2]/Hn],13,14),a([$s,0,Vr],[0,0,Fs-Vr],[0,tc,0],[1,0,0],bM,s(8.6),6,6),a([-40,0,Vr],[$s+40,0,0],[0,tc,0],[0,0,1],Vg,f=>[($s-f[0])/Hn,f[1]/Hn],8,4),a([-40,0,-.36],[0,0,Vr+.36],[0,tc,0],[1,0,0],Vg,f=>[-f[2]/Hn,f[1]/Hn]),a([V0,0,-80],[0,0,Vr+80],[0,Is,0],[-1,0,0],Xg,s(8.6),12,6),a([V0,0,Vr],[60,0,0],[0,Is,0],[0,0,1],Yg,f=>[(f[0]-V0)/Hn,f[1]/Hn],8,4),a([70,0,Vr],[0,0,-.36-Vr],[0,Is,0],[-1,0,0],Yg,f=>[-f[2]/Hn,f[1]/Hn]);let i=f=>[(f[0]-Ps[0])/Hn+4.18,f[1]/Hn];a([-20,0,gl],[xl+20,0,0],[0,yl,0],[0,0,1],qu,i,8,6),a([xl,0,gl],[0,0,jg-gl],[0,yl,0],[1,0,0],qu,s(28),4,4),a([xl,0,jg],[V0-xl,0,0],[0,Is,0],[0,0,1],Xg,f=>[(f[0]-Ps[0])/Hn,f[1]/Hn],2,4),a([-20,0,Fs],[0,0,gl-Fs],[0,yl,0],[1,0,0],qu,s(16),4,4);let c=(f,l,d,u)=>a(f,l,d,u,wM,()=>[0,0],4,4);return c([-300,-20,-300],[600,0,0],[0,320,0],[0,0,1]),c([-300,300,-300],[600,0,0],[0,0,300],[0,-1,0]),c([-300,-20,0],[0,0,-300],[0,320,0],[1,0,0]),c([300,-20,-300],[0,0,300],[0,320,0],[-1,0,0]),{position:t,normal:e,elements:o,attr:n}}function Os(t,e,o,n){let r=t.texture({data:[[n]],...o,min:"linear",mag:"linear"});return fetch(e).then(a=>{if(!a.ok)throw new Error("Could not load "+e);return a.blob()}).then(a=>createImageBitmap(a)).then(a=>{r({data:a,...o,min:"mipmap",mipmap:"nice",mag:"linear"})}).catch(a=>console.error(a)),r}var Ha=t=>"vec3("+t.map(e=>e.toFixed(4)).join(", ")+")",MM=[[[-.35,0,-.35],[14.35,9.2,50]],[[-40,0,Fs],[$s,tc,Vr]],[[V0,0,-80],[70,Is,Vr]],[[-20,0,-80],[xl,yl,gl]],[[-40,0,-80],[-20,yl,Fs]]],EM=MM.map(t=>`if (hitBox(ro, rd, ${Ha(t[0])}, ${Ha(t[1])}, 1e4) ) return 0.0;`).join(`
		`),Kg="mat3("+[0,1,2].map(t=>[0,1,2].map(e=>gM[e][t].toFixed(6)).join(", ")).join(", ")+")",SM=`
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
	${EM}
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
	vec3 ro = ${Ha(Ps)};
	vec3 rd = p - ro;
	if (hitBox(ro, rd, ${Ha([-40,0,Fs])}, ${Ha([$s-.02,tc,Vr])}, 0.995)) return false;
	if (hitBox(ro, rd, ${Ha([V0+.02,0,-80])}, ${Ha([70,Is,Vr])}, 0.995)) return false;
	return true;
}

// is this point sky in the photo? (only meaningful inside the photo)
bool photoSky(vec3 p) {
	vec3 pc = ${Kg} * (p - ${Ha(Ps)});
	if (pc.z < 0.2) return false;
	vec2 uv = vec2(
		(${Gg.toFixed(2)} + ${sh.toFixed(3)} * pc.x / pc.z) / ${Ug.toFixed(1)},
		(${Hg.toFixed(2)} - ${sh.toFixed(3)} * pc.y / pc.z) / ${Bg.toFixed(1)}
	);
	if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) return false;
	return texture2D(photoMask, uv).r < 0.5;
}

// photo colour and how much to trust it (0..1)
vec4 photoAt(vec3 p, vec3 n, vec3 eye) {
	vec3 pc = ${Kg} * (p - ${Ha(Ps)});
	if (pc.z < 0.2) return vec4(0.0);
	vec2 uv = vec2(
		(${Gg.toFixed(2)} + ${sh.toFixed(3)} * pc.x / pc.z) / ${Ug.toFixed(1)},
		(${Hg.toFixed(2)} - ${sh.toFixed(3)} * pc.y / pc.z) / ${Bg.toFixed(1)}
	);
	vec2 e = min(uv, 1.0 - uv);
	float w = smoothstep(0.002, 0.02, min(e.x, e.y));
	if (w <= 0.0) return vec4(0.0);
	w *= smoothstep(0.35, 0.75, texture2D(photoMask, uv).r);
	if (w <= 0.0) return vec4(0.0);
	if (!photoSees(p)) return vec4(0.0);
	// if we see this surface much more square-on than the photo did,
	// the photo would look smeared: hand over to the painted facade
	float camCos = abs(dot(normalize(p - ${Ha(Ps)}), n));
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
		base = texture2D(cobbleTex, fuv / ${xM.toFixed(2)}).rgb;
	} else if (kind < 2.5) {
		base = texture2D(pinkTex, vec2(fuv.x / ${Wg[0].toFixed(2)}, 1.0 - fuv.y / ${Wg[1].toFixed(2)})).rgb;
	} else if (kind < 3.5) {
		base = texture2D(yellowTex, vec2(fuv.x / ${ih[0].toFixed(2)}, 1.0 - fuv.y / ${ih[1].toFixed(2)})).rgb;
	} else {
		base = texture2D(creamTex, vec2(fuv.x / ${ih[0].toFixed(2)}, 1.0 - fuv.y / ${ih[1].toFixed(2)})).rgb;
	}

	// ---------- the photograph, where it can be trusted ----------
	bool projectable = kind < 0.5 || (kind > 0.5 && kind < 1.5) || (kind > 2.5 && kind < 4.5);
	if (kind < 0.5) {
		// the photo only shows ground inside the alley, or beyond its corners
		bool inAlley = v_pos.x > ${($s-.05).toFixed(3)} && v_pos.x < ${(V0+.05).toFixed(3)};
		projectable = inAlley || v_pos.z < ${Fs.toFixed(3)};
		projectable = projectable && v_pos.z < ${(Vr+4.5).toFixed(3)};
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
}`,kM=`
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
}`,TM=cr();Du.exports=t=>{let e=_M(),o={wrapS:"clamp",wrapT:"clamp",flipY:!1},n={wrapS:"mirror",wrapT:"clamp",flipY:!1},r={wrapS:"repeat",wrapT:"repeat",flipY:!1},a=Os(t,"res/street/photo.jpg",o,[190,160,120]),s=Os(t,"res/street/photo_night.jpg",o,[12,14,22]),i=Os(t,"res/street/photo_mask.png",o,[255,255,255]),c=Os(t,"res/street/facade_pink.jpg",n,[200,150,135]),f=Os(t,"res/street/facade_yellow.jpg",n,[225,180,95]),l=Os(t,"res/street/facade_cream.jpg",n,[215,200,175]),d=Os(t,"res/street/cobbles.jpg",r,[95,95,95]),u=Date.now(),v=t({frag:SM,vert:kM,attributes:{position:e.position,normal:e.normal,attr:e.attr},elements:new Uint32Array(e.elements),uniforms:{photo:a,photoMask:i,pinkTex:c,yellowTex:f,creamTex:l,cobbleTex:d,photoNight:s,night:()=>TM.night,time:()=>(Date.now()-u)/1e3}});return function(){v()}};Du.exports.layout={MOUTH_Z:Vr,PINK_X:$s,RIGHT_X:V0,PINK_H:tc,CREAM_H:Is,S:Hn}});var t3=pt((RT,Jg)=>{"use strict";var AM=cr().GLSL,{glassPanes:LM}=F0(),Zg=pr();function zM(){let t=[],e=[],o=(n,r)=>{for(let a of n)t.push(a),e.push(r)};return o(LM(),[0,0,1]),o(Zg.windowGlass(),[0,0,1]),o(Zg.farDoorGlass(),[1,0,0]),{position:t,normal:e}}Jg.exports=t=>{let e=zM(),o=t({frag:`
		precision highp float;
		${AM}
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
		}`,attributes:{position:e.position,normal:e.normal},count:e.position.length,cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}});return function(){o()}}});var g3=pt((CT,ju)=>{"use strict";var s3=cr().GLSL,NM=Ts(),Gu=va(),{wallWithHoles:RM,C:K0}=pr(),ie=.28,J={westBack:14.4,westCol:15-ie,eastCol:37.4+ie,eastBack:41.8,south:K0.z1+.7,northCol:K0.z1+.7+16,northBack:K0.z1+.7+19,cx:(15+37.4)/2,cz:(K0.z1+.7+K0.z1+.7+16-ie)/2},$o={x0:J.westCol+ie,x1:J.eastCol-ie,z0:J.south,z1:J.northCol-ie},br=3.3,_l=.92,Q0=5.6,e3=6,wa=11.9,Y0=9.6,co={x0:J.cx-2.9,x1:J.cx+2.9,top:14.4},ph=7,i3=4,Uu=(J.eastCol-J.westCol)/ph,CM=(J.northCol-J.south)/i3,c3=3,El=.26,Hs=1.4,Ds=1.1,lh=3,n0=(()=>{let t=[.3,.82,-.49],e=Math.hypot(...t);return t.map(o=>o/e)})(),Yt={GROUND:0,BRICK:1,STONE:2,MARBLE:3,HEDGE:4,POT:5,ROOF:6,SHUTTER:7,PANE:8,PLASTER:9,BARK:10,IRON:11,SKY:12,LEAD:13,FARBRICK:14,DARK:15,SOIL:16},r0=[],l3=(t,e,o)=>[J.cx+t,e,J.cz+o],fh=l3(-5.9,0,3.4),Z0=.85,X0={c:[fh[0],4.6*Z0+.5,fh[2]],r:[5*Z0,3.6*Z0,4.5*Z0]},f3=[{d:[0,4.4,0],r:[3.9,2.6,3.6],n:230},{d:[-2.7,4,-1.2],r:[2.6,2.1,2.4],n:105},{d:[2.7,4.5,-1.6],r:[2.5,2.2,2.3],n:105},{d:[.8,6.9,.8],r:[2.6,2,2.5],n:105},{d:[-1.6,6.1,2],r:[2.2,1.9,2],n:80},{d:[2.3,3.4,1.8],r:[2,1.5,1.9],n:60}].map(t=>({c:[fh[0]+t.d[0]*Z0,t.d[1]*Z0+.5,fh[2]+t.d[2]*Z0],r:t.r.map(e=>e*Z0),n:t.n}));for(let t of f3)r0.push({...t,cell:0,leaf:[.5,.7,.46],bloom:[1,1,1],size:[.95,1.35],magnolia:1,shadow:1});var OM=[3.6,6.3,9];for(let t of OM){let e=8.6+t%1.7*.6;r0.push({c:l3(t,e/2+.5,5.2),r:[.9,e/2,.9],cell:1,leaf:[.5,.64,.5],bloom:[1,1,1],n:180,size:[.72,.98],spindle:1,shadow:1})}var PM=[{d:[-8.4,-4],bloom:[1,.62,.78]},{d:[-3.6,-4.6],bloom:[1,.98,.94]},{d:[3.8,-4.3],bloom:[1,.98,.94]},{d:[8.5,-4],bloom:[1,.58,.72]}].map(t=>({x:J.cx+t.d[0],z:J.cz+t.d[1],bloom:t.bloom}));for(let t of PM)r0.push({c:[t.x,.95,t.z],r:[1.25,.95,1.1],cell:3,leaf:[.7,.86,.58],bloom:t.bloom,n:80,size:[.55,.8],shadow:1});var Bu=[45,135,225,315].map(t=>{let e=t*Math.PI/180;return[J.cx+Math.cos(e)*2.3,J.cz+Math.sin(e)*2.3]});for(let[t,e]of Bu)r0.push({c:[t,1.85,e],r:[.62,.55,.62],cell:3,leaf:[.78,.95,.55],bloom:[1.25,1,.25],n:36,size:[.32,.42],shadow:1});var h3=[];{let t=(o,n,r,a,s,i)=>{let c=Math.hypot(r-o,a-n),f=Math.floor(c/.9);for(let l=0;l<=f;l++){let d=l/f,u=o+(r-o)*d,v=n+(a-n)*d;s!==void 0&&Math.abs((r!==o?u:v)-s)<i||h3.push([u,v])}};t($o.x0+.45,$o.z0+1.2,$o.x0+.45,$o.z1-.45,J.cz,1),t($o.x1-.45,$o.z0+1.2,$o.x1-.45,$o.z1-.45,J.cz,1),t($o.x0+.45,$o.z1-.45,$o.x1-.45,$o.z1-.45,J.cx,1.9)}var IM=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],hh=t=>{let e=Math.hypot(t[0],t[1],t[2])||1;return[t[0]/e,t[1]/e,t[2]/e]};function oc(t,e,o,n,r,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),f=t.vert(n,a,s),l=t.vert(r,a,s);t.tri(i,c,f),t.tri(i,f,l)}function Un(t,e,o,n,r,a,s,i){t.box(Math.min(e,r),Math.min(o,a),Math.min(n,s),Math.max(e,r),Math.max(o,a),Math.max(n,s),[i,0,0])}function $M(t,e,o){return{vert:(n,r,a)=>t.vert(e(n),o(r),a),tri:t.tri}}var FM={north:[t=>[t[0],t[1],J.northCol-t[2]],t=>[t[0],t[1],-t[2]]],west:[t=>[J.westCol+t[2],t[1],t[0]],t=>[t[2],t[1],t[0]]],east:[t=>[J.eastCol-t[2],t[1],t[0]],t=>[-t[2],t[1],t[0]]]};function u3(t,e,o,n,r){let a=[];for(let s=0;s<o;s++){let i=t+s*e+(s===0?n:.02),c=t+(s+1)*e-(s===o-1?r:.02);a.push([i,c,t+(s+.5)*e])}return a}var qM=u3(J.westCol,Uu,ph,ie+El,ie+El),o3=u3(J.south,CM,i3,.32,ie+El),ec=[J.cx-32.35,J.northCol-77],DM=Array.from({length:ph-1},(t,e)=>J.westCol+(e+1)*Uu),d3=t=>(t[1]-t[0])/2-.2,Ml=t=>(t[0]+t[1])/2;function GM(t,e){let o=Ml(t),n=d3(t);return{u0:t[0],u1:t[1],bottom:e?0:_l,head:r=>{let a=Math.abs(r-o);return a<n?br+Math.sqrt(n*n-a*a):br},step:.05}}function HM(t,e,o){return{u0:t-o,u1:t+o,bot:n=>e-Math.sqrt(Math.max(0,o*o-(n-t)*(n-t))),head:n=>e+Math.sqrt(Math.max(0,o*o-(n-t)*(n-t))),step:.04,mat:[Yt.STONE,0,0]}}function UM(t,e,o,n){return{u0:t-e/2,u1:t+e/2,bottom:o,head:()=>n,step:.5,mat:[Yt.STONE,0,0]}}function n3(t,e,o){let[n,r]=FM[e],a=$M(t,n,r),s=[];o.arches.forEach((l,d)=>s.push(GM(l,d===o.open)));let i=[];for(let l of o.bays||o.arches){let d=Ml(l);o.oculi&&s.push(HM(d,6.85,.3)),i.push({c:d,y0:o.win[0],y1:o.win[1],w:1.05})}for(let l of o.extraWindows||[])i.push(l);for(let l of i)s.push(UM(l.c,l.w,l.y0,l.y1));for(let l of o.extraHoles||[])s.push(l);RM(a,{u0:o.u0,u1:o.u1,w0:-ie,w1:ie,top:o.top,holes:s,mat:[Yt.BRICK,0,0],revealMat:[Yt.BRICK,0,0],noEnds:o.noEnds,cuts:o.cuts,topStep:.25});let c=(l,d,u,v,p,h,m)=>{let g=n([l,d,u]),y=n([v,p,h]);Un(t,g[0],g[1],g[2],y[0],y[1],y[2],m)},f=(l,d,u,v,p,h)=>oc(a,l,d,u,v,p,[h,0,0]);for(let l of o.arches){let d=Ml(l),u=d3(l),v=28;for(let p of[ie,-ie]){let h=p>0?1:-1,m=p+h*.025;for(let g=0;g<v;g++){let y=Math.PI*g/v,b=Math.PI*(g+1)/v,w=(q,ot)=>[d+Math.cos(q)*ot,br+Math.sin(q)*ot],_=w(y,u),k=w(b,u),N=w(y,u+.26),G=w(b,u+.26);f([_[0],_[1],m],[k[0],k[1],m],[G[0],G[1],m],[N[0],N[1],m],[0,0,h],Yt.STONE);let C=Math.cos((y+b)/2),X=Math.sin((y+b)/2);f([N[0],N[1],p],[G[0],G[1],p],[G[0],G[1],m],[N[0],N[1],m],[C,X,0],Yt.STONE)}}}if(o.arches.forEach((l,d)=>{d!==o.open&&c(l[0]-.02,_l,-ie-.05,l[1]+.02,_l+.09,ie+.05,Yt.STONE)}),c(o.u0,e3,-ie,o.u1,e3+.18,ie+.09,Yt.STONE),c(o.u0,o.win[0]-.12,ie-.01,o.u1,o.win[0],ie+.06,Yt.STONE),o.cornice)for(let[l,d,u]of o.cornice)c(l,u-.22,ie-.01,d,u,ie+.16,Yt.STONE),c(l,u,ie-.01,d,u+.16,ie+.42,Yt.STONE);for(let{c:l,y0:d,y1:u,w:v,door:p}of i){let h=v/2;if(f([l-h-.01,d,.06],[l+h+.01,d,.06],[l+h+.01,u,.06],[l-h-.01,u,.06],[0,0,1],p?Yt.DARK:Yt.PANE),p){c(l-h-.16,0,ie-.01,l-h,u+.16,ie+.07,Yt.STONE),c(l+h,0,ie-.01,l+h+.16,u+.16,ie+.07,Yt.STONE),c(l-h-.16,u,ie-.01,l+h+.16,u+.2,ie+.09,Yt.STONE),c(l-h,0,.07,l+h,u-.02,.12,Yt.SHUTTER),c(l-.012,0,.12,l+.012,u-.02,.14,Yt.DARK);continue}for(let m of[-1,1]){let g=l+m*h;c(g+m*.02,d+.02,ie+.02,g+m*(h+.025),u-.02,ie+.06,Yt.SHUTTER)}c(l-h-.09,u,ie-.01,l+h+.09,u+.16,ie+.05,Yt.STONE),c(l-h-.09,d-.1,ie-.01,l+h+.09,d,ie+.09,Yt.STONE),c(l-.015,d,.06,l+.015,u,.09,Yt.SHUTTER),c(l-h,(d+u)/2-.015,.06,l+h,(d+u)/2+.015,.09,Yt.SHUTTER)}if(o.oculi)for(let l of o.bays||o.arches){let d=Ml(l);f([d-.31,6.54,0],[d+.31,6.54,0],[d+.31,7.16,0],[d-.31,7.16,0],[0,0,1],Yt.DARK)}for(let l of o.cols){let d=_l+.09,u=n([l,0,0]);Un(t,u[0]-.24,d,u[2]-.24,u[0]+.24,d+.12,u[2]+.24,Yt.MARBLE),t.lathe([[.23,d+.12,1],[.24,d+.17],[.2,d+.24],[.215,d+.28],[.17,d+.34,1],[.165,d+.6],[.155,br-.5],[.15,br-.38,1],[.175,br-.34,1],[.17,br-.3],[.2,br-.22],[.27,br-.15],[.29,br-.12,1]],u[0],u[2],18,{mat:()=>[Yt.MARBLE,0,0]}),Un(t,u[0]-.29,br-.12,u[2]-.29,u[0]+.29,br+.01,u[2]+.29,Yt.STONE)}o.walk&&o.walk(t)}function BM(t){let e=[-1,0,1].map(r=>{let a=J.cx+r*1.7;return{u0:a-.6,u1:a+.6,bottom:11,head:s=>12.9+Math.sqrt(Math.max(0,.36-(s-a)*(s-a))),step:.04,mat:[Yt.STONE,0,0]}});n3(t,"north",{u0:J.westCol-ie,u1:J.eastCol+ie,top:r=>r>co.x0+1e-6&&r<co.x1-1e-6?co.top:wa,cuts:[co.x0,co.x0+1e-5,co.x1-1e-5,co.x1],arches:qM,open:c3,cols:DM,oculi:!0,win:[8,9.9],extraHoles:e,cornice:[[J.westCol-ie-3.3,co.x0,wa],[co.x1,J.eastCol+ie+3.3,wa],[co.x0-.2,co.x1+.2,co.top]],walk:r=>{Un(r,$o.x0,Q0,J.northCol+ie,$o.x1,Q0+.2,J.northBack,Yt.PLASTER),Un(r,$o.x0,0,J.northBack,$o.x1,Q0,J.northBack+.3,Yt.PLASTER);for(let a of[J.cx-7.2,J.cx,J.cx+7.2])oc(r,[a-.8,0,J.northBack-.01],[a+.8,0,J.northBack-.01],[a+.8,2.9,J.northBack-.01],[a-.8,2.9,J.northBack-.01],[0,0,-1],[Yt.DARK,0,0]),Un(r,a-.98,0,J.northBack-.06,a+.98,3.12,J.northBack,Yt.STONE),oc(r,[a-.8,0,J.northBack-.07],[a+.8,0,J.northBack-.07],[a+.8,2.9,J.northBack-.07],[a-.8,2.9,J.northBack-.07],[0,0,-1],[Yt.DARK,0,0])}}),oc(t,[co.x0,11,J.northCol+.2],[co.x1,11,J.northCol+.2],[co.x1,13.6,J.northCol+.2],[co.x0,13.6,J.northCol+.2],[0,0,-1],[Yt.DARK,0,0]),Un(t,co.x0+.3,10.88,J.northCol-ie-.06,co.x1-.3,11,J.northCol-ie+.1,Yt.STONE),Un(t,J.westBack,Q0+.2,J.northBack,J.eastBack,wa,J.northBack+3.4,Yt.BRICK),Un(t,J.westBack,Y0,J.northCol-ie,J.westCol-ie,wa,J.northCol+ie,Yt.BRICK),Un(t,J.eastCol+ie,Y0,J.northCol-ie,J.eastBack,wa,J.northCol+ie,Yt.BRICK),Un(t,J.westBack,Q0+.2,J.northCol+ie+.12,J.eastBack,wa,J.northBack,Yt.BRICK),bl(t,[J.westBack-.5,wa+.16,J.northCol-ie-.42],[co.x0-J.westBack+.5,0,0],[0,2.6,4.4],Yt.ROOF),bl(t,[co.x1,wa+.16,J.northCol-ie-.42],[J.eastBack+.5-co.x1,0,0],[0,2.6,4.4],Yt.ROOF),bl(t,[co.x0-.3,co.top+.16,J.northCol-ie-.42],[co.x1-co.x0+.6,0,0],[0,1.4,3],Yt.ROOF),r3(t,[co.x0-.3,co.top+.16,J.northCol-ie-.42],[co.x0-.3,co.top+1.56,J.northCol-ie+2.58],[co.x0-.3,co.top+.16,J.northCol-ie+2.58],[-1,0,0],Yt.BRICK),r3(t,[co.x1+.3,co.top+.16,J.northCol-ie-.42],[co.x1+.3,co.top+1.56,J.northCol-ie+2.58],[co.x1+.3,co.top+.16,J.northCol-ie+2.58],[1,0,0],Yt.BRICK),Un(t,co.x0,wa,J.northCol+ie,co.x1,co.top,J.northCol+2.6,Yt.BRICK);for(let[r,a]of[[J.cx-9.8,J.northBack+.6],[J.cx+9.4,J.northBack+.4],[J.cx-4.6,J.northBack+1]])Un(t,r-.4,12.5,a-.4,r+.4,15.4,a+.4,Yt.BRICK),Un(t,r-.52,15.4,a-.52,r+.52,15.62,a+.52,Yt.STONE);let o=(r,a,s)=>{let i=r==="west"?-1:1,c=[];o3.forEach((d,u)=>{let v=Ml(d);u===1?c.push({c:v,y0:0,y1:2.9,w:1.4,door:!0}):c.push({c:v,y0:1,y1:2.75,w:1.05}),c.push({c:v,y0:3.85,y1:5.45,w:1.05})}),n3(t,r,{u0:J.south,u1:J.northCol-ie,top:()=>Y0,arches:[],bays:o3,cols:[],win:[7.45,8.85],extraWindows:c,noEnds:!0,cornice:[[J.south,J.northCol-ie,Y0]]}),Un(t,a,0,J.south,s+i*(ie+.12),Y0,J.northBack+.3,Yt.BRICK);let f=s-i*ie;Un(t,f,0,J.south,f-i*.06,.55,J.northCol-ie,Yt.STONE);let l=s-i*(ie+.42);bl(t,[l,Y0+.16,J.south],[0,0,J.northCol-ie-J.south],[a-l+i*.4,1.9,0],Yt.ROOF)};o("west",J.westBack,J.westCol),o("east",J.eastBack,J.eastCol);let n=K0.x1+.7;Un(t,13.65,7.4,J.south-.02,n,7.62,J.south+.14,Yt.STONE),Un(t,13.65,10.4,J.south-.02,n,10.6,J.south+.38,Yt.STONE),bl(t,[13.65,10.6,J.south+.38],[n-13.65,0,0],[0,2.2,-5],Yt.ROOF)}function r3(t,e,o,n,r,a){let s=[a,0,0];t.tri(t.vert(e,r,s),t.vert(o,r,s),t.vert(n,r,s))}function bl(t,e,o,n,r){let a=hh([o[1]*n[2]-o[2]*n[1],o[2]*n[0]-o[0]*n[2],o[0]*n[1]-o[1]*n[0]]),s=a[1]<0?a.map(f=>-f):a,i=(f,l)=>[e[0]+o[0]*f+n[0]*l,e[1]+o[1]*f+n[1]*l,e[2]+o[2]*f+n[2]*l];oc(t,i(0,0),i(1,0),i(1,1),i(0,1),s,[r,0,0]);let c=.08;oc(t,i(0,0),i(1,0),[i(1,0)[0],i(1,0)[1]-c,i(1,0)[2]],[i(0,0)[0],i(0,0)[1]-c,i(0,0)[2]],hh([-n[0],0,-n[2]]),[r,0,0])}function jM(t){let e=J.westBack,o=J.eastBack,n=J.south,r=J.northBack,a=36,s=22,i=[];for(let c=0;c<=a;c++){i.push([]);for(let f=0;f<=s;f++){let l=[e+(o-e)*c/a,0,n+(r-n)*f/s];i[c].push(t.vert(l,[0,1,0],[Yt.GROUND,0,0]))}}for(let c=0;c<a;c++)for(let f=0;f<s;f++)t.tri(i[c][f],i[c+1][f],i[c+1][f+1]),t.tri(i[c][f],i[c+1][f+1],i[c][f+1])}var wl=.46,Gs=.58,qs=[[-.5,0],[-.52,.45],[-.46,.78],[-.3,.95],[0,1],[.3,.95],[.46,.78],[.52,.45],[.5,0]];function WM(t,e,o){let n=Ds+o,r=(t>0?$o.x1-J.cx:J.cx-$o.x0)-Hs-o,a=Ds+o,s=(e>0?$o.z1-J.cz:J.cz-$o.z0)-Hs-o,i=lh+o,c=Math.sqrt(i*i-n*n),f=Math.sqrt(i*i-a*a),l=[[n,c],[n,s],[r,s],[r,a],[f,a]],d=Math.atan2(a,f),u=Math.atan2(c,n);for(let v=1;v<10;v++){let p=d+(u-d)*v/10;l.push([Math.cos(p)*i,Math.sin(p)*i])}return l.map(([v,p])=>[J.cx+t*v,J.cz+e*p])}function VM(t,e,o){let n=o[0]-e[0],r=o[1]-e[1],a=Math.hypot(n,r),s=n/a,i=r/a,c=-i,f=s,l=wl*.5,d=-l,u=a+l,v=[],p=Math.max(1,Math.ceil((u-d)/1));for(let h=0;h<=p;h++){let m=d+(u-d)*h/p,g=[];for(let y=0;y<qs.length;y++){let[b,w]=qs[y],_=Math.min(qs.length-2,y),k=qs[Math.max(0,y-1)],N=qs[Math.min(qs.length-1,y+1)],G=(N[0]-k[0])*wl,X=(N[1]-k[1])*Gs,q=-G,ot=Math.hypot(X,q)||1,D=[e[0]+s*m+c*b*wl,w*Gs,e[1]+i*m+f*b*wl],K=[c*(-X/ot),-q/ot,f*(-X/ot)];g.push(t.vert(D,K[1]<-.2?[c*Math.sign(b),.3,f*Math.sign(b)]:K,[Yt.HEDGE,0,0]))}v.push(g)}for(let h=0;h<p;h++)for(let m=0;m<qs.length-1;m++)t.tri(v[h][m],v[h+1][m],v[h+1][m+1]),t.tri(v[h][m],v[h+1][m+1],v[h][m+1]);for(let[h,m]of[[0,-1],[p,1]]){let g=v[h],y=t.vert([e[0]+s*(h?u:d),Gs*.5,e[1]+i*(h?u:d)],[s*m,0,i*m],[Yt.HEDGE,0,0]);for(let b=0;b<g.length-1;b++)t.tri(y,g[b],g[b+1])}}function XM(t){for(let e of[-1,1])for(let o of[-1,1]){let n=WM(e,o,.3);for(let r=0;r<n.length;r++)VM(t,n[r],n[(r+1)%n.length])}}function YM(t){let e=J.cx,o=J.cz,n=()=>[Yt.STONE,0,0];t.lathe([[1.45,0,1],[1.45,.14,1],[1.12,.14,1],[1.12,.3,1],[0,.3]],e,o,8,{mat:n}),t.lathe([[.76,.3,1],[.8,.38,1],[.74,.44],[.76,.7],[.82,.9],[.8,1.02,1],[.88,1.06,1],[.88,1.18,1],[.6,1.18,1],[.6,.98]],e,o,24,{mat:n}),t.lathe([[.6,.98,1],[0,.98]],e,o,16,{mat:()=>[Yt.DARK,0,0]});let r={mat:()=>[Yt.IRON,0,0]};t.tube([[e-.72,1.1,o],[e-.72,1.9,o],[e-.7,2.3,o]],()=>.035,8,6,r),t.tube([[e+.72,1.1,o],[e+.72,1.9,o],[e+.7,2.3,o]],()=>.035,8,6,r);let a=[];for(let s=0;s<=10;s++){let i=Math.PI*s/10;a.push([e-Math.cos(i)*.7,2.3+Math.sin(i)*.45,o])}t.tube(a,()=>.03,20,6,r),t.tube([[e-.45,2.25,o],[e,2.38,o],[e+.45,2.25,o]],()=>.02,8,5,r),t.ellipsoid([e,2.32,o],[.03,.13,.13],6,10,r);for(let s of[-1,1]){let i=[];for(let c=0;c<=12;c++){let f=c/12*Math.PI*1.6,l=.16*(1-c/16);i.push([e+s*(.72-.18+Math.cos(f)*l*s*-1+0),1.95+Math.sin(f)*l,o])}t.tube(i,()=>.016,16,5,r)}}function KM(t){for(let[e,o]of Bu)t.lathe([[.26,0,1],[.3,.06],[.36,.42],[.38,.5,1],[.44,.52,1],[.44,.64,1],[.38,.66,1],[.37,.6]],e,o,20,{mat:()=>[Yt.POT,0,0]}),t.lathe([[.37,.6,1],[0,.6]],e,o,12,{mat:()=>[Yt.SOIL,0,0]}),t.tube([[e,.6,o],[e+.02,1,o-.01],[e-.01,1.45,o+.02]],n=>.045-n*.02,6,6,{mat:()=>[Yt.BARK,0,0]})}function QM(t){let[e,,o]=X0.c,n=v3(7),r=[[-1.8,.4,3.6],[1.6,-.9,3.9],[.4,1.9,3.4],[-.6,-1.7,4.2],[2.1,1.2,3.2]];for(let[a,s,i]of r){let c=[[e+a*.05,0,o+s*.05],[e+a*.25,i*.35,o+s*.25],[e+a*.6,i*.7,o+s*.6],[e+a,i,o+s],[e+a*1.35+(n()-.5),i+1.4,o+s*1.35+(n()-.5)]];t.tube(c,f=>.2*(1-f*.75),14,9,{mat:()=>[Yt.BARK,0,0]});for(let f=0;f<2;f++){let l=.55+f*.2,d=[e+a*l,i*l,o+s*l],u=n()*Math.PI*2;t.tube([d,[d[0]+Math.cos(u)*1.3,d[1]+.9,d[2]+Math.sin(u)*1.3],[d[0]+Math.cos(u)*2.3,d[1]+1.4+n(),d[2]+Math.sin(u)*2.3]],v=>.08*(1-v*.7),8,6,{mat:()=>[Yt.BARK,0,0]})}}for(let a of r0.filter(s=>s.spindle))t.tube([[a.c[0],0,a.c[2]],[a.c[0],1.4,a.c[2]]],()=>.12,3,7,{mat:()=>[Yt.BARK,0,0]})}function ZM(t){let e=()=>[Yt.FARBRICK,0,0],o=()=>[Yt.LEAD,0,0],n=(a,s,i,c,f,l)=>{t.lathe([[i+.3,20,1],[i+.3,c-1.2,1],[i+.8,c-.9,1],[i+.8,c,1],[i,c,1]],a,s,28,{mat:e});let d=[];for(let v=0;v<=12;v++){let p=v/12*Math.PI/2,h=Math.cos(p)*i,m=Math.sin(p)*f;l&&(h*=1-.18*Math.sin(p*2)),d.push([Math.max(h,i*.12),c+m])}t.lathe(d,a,s,28,{mat:o});let u=c+f;t.lathe([[i*.13,u-.2,1],[i*.13,u+3,1],[i*.18,u+3.2,1],[i*.02,u+6.4]],a,s,10,{mat:o})};Un(t,14,0,104,52,26,150,Yt.FARBRICK),t.lathe([[3,26],[.1,32]],33,108,4,{mat:e}),n(26,124,7.2,33,9.5,!0),n(40.5,116,6,31,8,!0),n(16.5,117,5.5,30,7.2,!0),t.lathe([[6.4,20,1],[6.4,34,1],[6.9,34.4,1],[6,34.4,1],[.6,46.5,1],[.15,50]],33,132,24,{mat:o});let r=(a,s,i)=>{Un(t,a-1.8,0,s-1.8,a+1.8,i,s+1.8,Yt.FARBRICK),t.lathe([[1.9,i,1],[1.6,i+3.5,1],[1.2,i+3.5,1],[1.2,i+6,1],[.9,i+6.2,1],[.05,i+13]],a,s,8,{mat:e})};r(20.5,109,36),r(46.5,112,38)}function JM(t){let o=[J.cx,0,J.cz],n=24,r=10,a=[];for(let s=0;s<=n;s++){a.push([]);let i=-Math.PI*.62+Math.PI*1.24*s/n;for(let c=0;c<=r;c++){let f=Math.PI/2*(c/r)-.05,l=[Math.sin(i)*Math.cos(f),Math.sin(f),Math.cos(i)*Math.cos(f)],d=[o[0]+l[0]*420,o[1]+l[1]*420,o[2]+l[2]*420];a[s].push(t.vert(d,[-l[0],-l[1],-l[2]],[Yt.SKY,0,0]))}}for(let s=0;s<n;s++)for(let i=0;i<r;i++)t.tri(a[s][i],a[s+1][i],a[s+1][i+1]),t.tri(a[s][i],a[s+1][i+1],a[s][i+1])}function t8(){let t=[],e=[],o=[],n=[],r=NM.createBuilder(t,e,o,n);return jM(r),BM(r),XM(r),YM(r),KM(r),QM(r),r.save(),r.translate(ec[0],0,ec[1]),ZM(r),r.restore(),JM(r),{position:t,normal:e,elements:o,attr:n}}var p3=[[[13.65,0,K0.z0-.7],[K0.x1+.7,10.6,J.south]],[[J.westBack,Q0,J.northCol-ie],[J.eastBack,wa,J.northBack+3.4]],[[co.x0,wa,J.northCol-ie],[co.x1,co.top,J.northCol+2.6]],[[J.westBack,0,J.south],[J.westCol+ie,Y0,J.northBack+.3]],[[J.eastCol-ie,0,J.south],[J.eastBack,Y0,J.northBack+.3]],[[14+ec[0],0,104+ec[1]],[52+ec[0],26,150+ec[1]]]];function e8(t,e,o,n){let r=.001,a=1e9;for(let s=0;s<3;s++){if(Math.abs(e[s])<1e-9){if(t[s]<o[s]||t[s]>n[s])return!1;continue}let i=(o[s]-t[s])/e[s],c=(n[s]-t[s])/e[s];if(i>c&&([i,c]=[c,i]),r=Math.max(r,i),a=Math.min(a,c),r>a)return!1}return!0}function ch(t,e,o,n){let r=[(t[0]-o[0])/n[0],(t[1]-o[1])/n[1],(t[2]-o[2])/n[2]],a=[e[0]/n[0],e[1]/n[1],e[2]/n[2]],s=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],i=r[0]*a[0]+r[1]*a[1]+r[2]*a[2],c=r[0]*r[0]+r[1]*r[1]+r[2]*r[2]-1,f=i*i-s*c;if(f<=0)return 0;let l=Math.sqrt(f),d=Math.max(0,(-i-l)/s),u=(-i+l)/s;return Math.max(0,u-d)}function Hu(t){for(let[e,o]of p3)if(e8(t,n0,e,o))return 0;return 1}function v3(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let o=e;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}function o8(){let t=[],e=[],o=[],n=[],r=[],a=[],s=[],i=v3(21),c=(p,h,m,g,y,b,w)=>{let _=t.length/3;for(let[k,N]of[[-1,-1],[1,-1],[1,1],[-1,1]])t.push(...p),e.push(k,N),o.push(h,m,g),n.push(...y),r.push(...b),a.push(...w);s.push(_,_+1,_+2,_,_+2,_+3)},f=(p,h)=>{let m=1;for(let g of r0){if(g===h||!g.shadow)continue;let y=ch(p,n0,g.c,g.r);y>0&&(m*=Math.exp(-y*.9))}return m},l=r0.map(p=>({...p,pts:null}));for(let p of l)for(let h=0;h<p.n;h++){let m;do m=[i()*2-1,i()*2-1,i()*2-1];while(m[0]*m[0]+m[1]*m[1]+m[2]*m[2]>1);let g=Math.hypot(m[0],m[1],m[2])||1,y=Math.pow(i(),.35)*.98,b=[m[0]/g*y,m[1]/g*y,m[2]/g*y];if(p.spindle){let D=b[1],K=Math.sqrt(Math.max(.02,1-D*D))*(D>0?1-D*.55:1+D*.25),Et=Math.hypot(b[0],b[2])||1,Ht=K*Math.min(1,Et*1.4);b=[b[0]/Et*Ht,D,b[2]/Et*Ht]}p.magnolia&&b[1]<-.55&&(b[1]=-.55+(b[1]+.55)*.35);let w=[p.c[0]+b[0]*p.r[0],p.c[1]+b[1]*p.r[1],p.c[2]+b[2]*p.r[2]],_,k;if(p.magnolia){let D=0;for(let Ht of f3)D=Math.max(D,ch(w,n0,Ht.c,Ht.r));_=Math.exp(-D*1.1);let K=1;for(let Ht of r0)if(!Ht.magnolia&&Ht.shadow){let Lt=ch(w,n0,Ht.c,Ht.r);Lt>0&&(K*=Math.exp(-Lt*.9))}_*=Hu(w)*K;let Et=IM(w,X0.c);k=hh([Et[0]/X0.r[0]+b[0]*.5,Et[1]/X0.r[1]+b[1]*.5,Et[2]/X0.r[2]+b[2]*.5]),y=Math.min(1,Math.hypot(Et[0]/X0.r[0],Et[1]/X0.r[1],Et[2]/X0.r[2])*.6+y*.4)}else{let D=ch(w,n0,p.c,p.r);_=Math.exp(-D*(p.spindle?2.2:1.25)),_*=Hu(w)*f(w,r0[l.indexOf(p)]),k=hh([b[0]/p.r[0],b[1]/p.r[1],b[2]/p.r[2]])}let N=Math.max(0,k[0]*n0[0]+k[1]*n0[1]+k[2]*n0[2]),G=.25+.75*Math.pow(y,1.5)*(.65+.35*(k[1]*.5+.5)),C=p.size[0]+(p.size[1]-p.size[0])*i(),X=.85+i()*.3,q=p.leaf.map(D=>D*X),ot=p.cell;p.cell===3&&i()<.35&&(ot=2),c(w,C,ot,i()*Math.PI*2,[_,G,.35+.65*N],q,p.bloom)}for(let[p,h]of h3){let m=i()<.5;for(let g=0;g<3;g++){let y=[p+(i()-.5)*.7,.28+i()*.22,h+(i()-.5)*.5],b=Hu(y)*f(y,null);c(y,.32+i()*.12,i()<.7?3:2,i()*6.28,[b,.6+i()*.3,.8],[.75,.9,.6],m?[1,.55,.75]:[.85,.8,1.15])}}let d=s.length/6,u=Array.from({length:d},(p,h)=>h);for(let p=d-1;p>0;p--){let h=Math.floor(i()*(p+1));[u[p],u[h]]=[u[h],u[p]]}let v=[];for(let p of u)for(let h=0;h<6;h++)v.push(s[p*6+h]);return{center:t,corner:e,par:o,light:n,tint:r,bloom:a,elements:v}}var re=t=>t.toFixed(4),Sl=t=>`vec3(${re(t[0])}, ${re(t[1])}, ${re(t[2])})`,m3=`
const vec3 SUN = ${Sl(n0)};
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
`,n8=p3.map(([t,e])=>`if (hitBox(ro, SUN, ${Sl(t)}, ${Sl(e)})) return 0.0;`).join(`
	`),r8=r0.filter(t=>t.shadow).map(t=>`tr *= crownShade(ro, ${Sl(t.c)}, ${Sl(t.r)}, ${t.spindle?"1.8":"1.0"});`).join(`
	`),a8=(t,e,o,n,r,a,s,i,c)=>`
	{
		float t = (${re(e)} - ro.${t}) / SUN.${t};
		if (t > 0.0) {
			vec3 q = ro + SUN * t;
			float u = q.${t==="z"?"x":"z"};
			if (q.y < ${re(Q0)} && u > ${re(o-ie)} && u < ${re(o+n*r+ie)}) {
				float k = floor((u - ${re(o)}) / ${re(n)});
				float a = ${re(o)} + k * ${re(n)} + (k < 0.5 ? ${re(a)} : 0.02);
				float b = ${re(o)} + (k + 1.0) * ${re(n)} - (k > ${re(r-1.5)} ? ${re(s)} : 0.02);
				float c = 0.5 * (a + b), r = 0.5 * (b - a) - 0.2;
				float d = abs(u - c);
				float sill = abs(k - ${re(i)}) < 0.5 ? 0.0 : ${re(_l+.09)};
				bool hole = (q.y > sill && q.y < ${re(br)} && u > a && u < b && d < 0.5 * (b - a) - 0.17)
					|| (q.y >= ${re(br)} && d * d + (q.y - ${re(br)}) * (q.y - ${re(br)}) < r * r);
				if (!hole && ${c}) return 0.0;
			}
		}
	}`,uh=Ds+.3,dh=Ds+.3,kl=lh+.3,a3=$o.x1-J.cx-Hs-.3,s8=$o.z1-J.cz-Hs-.3,i8=J.cz-$o.z0-Hs-.3,c8=Math.sqrt(kl*kl-uh*uh),l8=Math.sqrt(kl*kl-dh*dh),f8=[[J.cx,J.cz,.86,1.18],[J.cx,J.cz,1.25,.3],...Bu.map(([t,e])=>[t,e,.42,.65])].map(([t,e,o,n])=>`if (hitCyl(ro, vec2(${re(t)}, ${re(e)}), ${re(o)}, ${re(n)})) return 0.0;`).join(`
	`),h8=`
float segDist(vec2 p, vec2 a, vec2 b) {
	vec2 pa = p - a, ba = b - a;
	float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
	return length(pa - ba * h);
}

// distance to the nearest hedge line
float hedgeDist(vec2 xz) {
	vec2 q = abs(xz - vec2(${re(J.cx)}, ${re(J.cz)}));
	float b1 = xz.y > ${re(J.cz)} ? ${re(s8)} : ${re(i8)};
	vec2 A = vec2(${re(uh)}, ${re(c8)}), Bp = vec2(${re(uh)}, b1), C = vec2(${re(a3)}, b1);
	vec2 D = vec2(${re(a3)}, ${re(dh)}), E = vec2(${re(l8)}, ${re(dh)});
	float d = min(min(segDist(q, A, Bp), segDist(q, Bp, C)), min(segDist(q, C, D), segDist(q, D, E)));
	float ang = atan(q.y, q.x);
	if (ang > atan(E.y, E.x) && ang < atan(A.y, A.x)) d = min(d, abs(length(q) - ${re(kl)}));
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
	${n8}
	${a8("z",J.northCol,J.westCol,Uu,ph,ie+El,ie+El,c3,"ro.z > "+re(J.northCol-ie))}
	// on lighter settings only the buildings cast shadows
	if (gardenDetail < 0.5) return 1.0;
	${f8}
	if (ro.y < ${re(Gs)} && ro.x > ${re($o.x0)} && ro.x < ${re($o.x1)}) {
		for (int i = 1; i <= 4; i++) {
			float t = float(i) / 4.0 * (${re(Gs)} - ro.y) / SUN.y;
			vec3 q = ro + SUN * t;
			float w = ${re(wl*.5)} * sqrt(max(0.0, 1.0 - pow(q.y / ${re(Gs)}, 4.0)));
			if (hedgeDist(q.xz) < w) return 0.0;
		}
	}
	float tr = 1.0;
	${r8}
	return tr;
}
`,u8=`
precision highp float;
${s3}
varying vec3 v_pos, v_normal, v_attr, v_eye;
uniform float time, gardenDetail;
${m3}
${h8}

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
			float dx = abs(P.x - ${re(J.cx)}), dz = abs(P.z - ${re(J.cz)});
			float rc = length(vec2(dx, dz));
			if (edge < ${re(Hs)}) {
				// brick path laid in rows, with a stone kerb
				vec2 q = ex < ez ? P.zx : P.xz;
				base = brick(q * vec2(1.0, 2.6), 0.4) * 0.9;
				if (abs(edge - ${re(Hs)}) < 0.08) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (rc < ${re(lh)}) {
				// brick in rings round the wellhead
				float ang = atan(P.z - ${re(J.cz)}, P.x - ${re(J.cx)});
				vec2 q = vec2(ang * rc, rc);
				base = brick(q * vec2(1.0, 2.6), 0.5) * 0.92;
				if (abs(rc - ${re(lh)}) < 0.1) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (dx < ${re(Ds)} || dz < ${re(Ds)}) {
				// pale gravel
				float g = noise(P.xz * 40.0) * 0.6 + noise(P.xz * 9.0) * 0.4;
				base = mix(vec3(0.66, 0.58, 0.46), vec3(0.86, 0.79, 0.66), mix(g, 0.5, lod));
				base *= 0.94 + 0.12 * noise(P.xz * 1.3);
				float e = min(${re(Ds)} - min(dx, dz), 1.0);
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
			ao *= 0.6 + 0.4 * smoothstep(0.85, 1.6, length(P.xz - vec2(${re(J.cx)}, ${re(J.cz)})));
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
		ao *= 0.55 + 0.45 * smoothstep(0.0, ${re(Gs)}, P.y) * (0.6 + 0.4 * n);
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
	bool walk = (P.x < ${re(J.westCol)} || P.x > ${re(J.eastCol)} || P.z > ${re(J.northCol)}) && P.y < ${re(Q0+.05)} && P.z > ${re(J.south-.1)} && P.z < ${re(J.northBack+.5)};
	float skyVis = 0.55 + 0.45 * N.y;
	if (walk) {
		float depth = P.z > ${re(J.northCol)} ? P.z - ${re(J.northCol)} : (P.x < ${re(J.westCol)} ? ${re(J.westCol)} - P.x : P.x - ${re(J.eastCol)});
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
}`,d8=`
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
}`,p8=`
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
}`,v8=`
precision highp float;
${s3}
uniform sampler2D leaves;
varying vec2 v_uv;
varying vec3 v_light, v_tint, v_bloom, v_pos;
${m3}
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
}`;function m8(t,e,o){let n=t.texture({data:[[o]],min:"linear",mag:"linear"});return fetch(e).then(r=>{if(!r.ok)throw new Error("Could not load "+e);return r.blob()}).then(r=>createImageBitmap(r,{premultiplyAlpha:"none"})).then(r=>n({data:r,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(r=>console.error(r)),n}ju.exports=t=>{let e=t8(),o=o8(),n=m8(t,"res/garden/foliage.webp",[0,0,0,0]),r=Date.now(),a=()=>Gu.motion?window.__streetClock!==void 0?window.__streetClock:(Date.now()-r)/1e3:20,s=t({frag:u8,vert:d8,attributes:{position:e.position,normal:e.normal,attr:e.attr},elements:new Uint32Array(e.elements),uniforms:{time:a,gardenDetail:()=>Gu.gardenDetail}}),i=t({frag:v8,vert:p8,attributes:{center:o.center,corner:o.corner,par:o.par,light:o.light,tint:o.tint,bloom:o.bloom},elements:new Uint32Array(o.elements),uniforms:{leaves:n,time:a},cull:{enable:!1},count:()=>Math.floor(o.elements.length*Gu.leafShare/6)*6});return function(){s(),i()}};ju.exports.layout={G:J,YARD:$o,SUN:n0}});var _3=pt((OT,w3)=>{"use strict";var g8=cr().GLSL,x8=Ts(),{C:b3}=pr(),wr=b3.x1+.35,Yu=b3.zc,Wu=[wr-7.3,2,Yu],x3=5.2*Math.PI/180,y3=2100,y8=725,b8=1288,w8=1450,_8=2576,E0=Yu-3.2,gh=Yu+3.3,Vu=wr+5,Xu=wr+11.7,nc=3.9,Tl=wr+22.7,vh=40;function M8(){let t=[],e=[],o=[],n=[],r=x8.createBuilder(t,e,o,n),a=(l,d,u,v,p,h)=>{let m=[];for(let g=0;g<=p;g++){m.push([]);for(let y=0;y<=h;y++){let b=[0,1,2].map(w=>l[w]+d[w]*g/p+u[w]*y/h);m[g].push(r.vert(b,v,[0,0,0]))}}for(let g=0;g<p;g++)for(let y=0;y<h;y++)r.tri(m[g][y],m[g+1][y],m[g+1][y+1]),r.tri(m[g][y],m[g+1][y+1],m[g][y+1])},s=gh-E0,i=.7;a([wr-i,0,E0],[Vu-wr+i,0,0],[0,0,s],[0,1,0],6,4);let c=Xu-Vu,f=Math.hypot(c,nc);return a([Vu,0,E0],[c,nc,0],[0,0,s],[-nc/f,c/f,0],6,4),a([Xu,nc,E0],[Tl-Xu,0,0],[0,0,s],[0,1,0],6,4),a([wr-i,0,E0],[Tl-wr+i,0,0],[0,vh,0],[0,0,1],12,12),a([wr-i,0,gh],[Tl-wr+i,0,0],[0,vh,0],[0,0,-1],12,12),a([Tl,0,E0],[0,vh,0],[0,0,s],[-1,0,0],8,4),a([wr-i,vh,E0],[Tl-wr+i,0,0],[0,0,s],[0,-1,0],6,4),{position:t,normal:e,elements:o,attr:n}}var Pr=t=>t.toFixed(5),mh=[[wr+3.4,3.7,E0+.01,1],[wr+8.6,4.1,gh-.01,-1],[wr+14.8,nc+3.3,E0+.01,1],[wr+19.6,nc+3.6,gh-.01,-1]],E8=`
precision highp float;
${g8}
uniform sampler2D photo;
uniform float time;
varying vec3 v_pos;
varying vec3 v_normal;
const int NLAMP = ${mh.length};
vec4 LAMP[NLAMP];

void main() {
	${mh.map((t,e)=>`LAMP[${e}] = vec4(${Pr(t[0])}, ${Pr(t[1])}, ${Pr(t[2])}, ${Pr(t[3])});`).join(`
	`)}
	vec3 d = v_pos - vec3(${Pr(Wu[0])}, ${Pr(Wu[1])}, ${Pr(Wu[2])});
	float c = ${Pr(Math.cos(x3))}, s = ${Pr(Math.sin(x3))};
	float fw = d.x * c + d.y * s;
	float up = -d.x * s + d.y * c;
	fw = max(fw, 0.05);
	vec2 px = vec2(${Pr(y8)} + ${Pr(y3)} * d.z / fw, ${Pr(b8)} - ${Pr(y3)} * up / fw);
	vec2 uv = px / vec2(${Pr(w8)}, ${Pr(_8)});
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
	for (int i = 0; i < ${mh.length}; i++) {
		vec4 L = LAMP[i];                       // x, y, z, side (+1 left wall, -1 right)
		vec3 d = L.xyz - v_pos;
		float dd = dot(d, d);
		float fl = 0.92 + 0.05 * sin(time * 7.3 + float(i) * 2.1) + 0.03 * sin(time * 17.0 + float(i));
		// the wall it hangs on is lit across, the paving from above
		float face = v_normal.y > 0.5 ? max(normalize(d).y, 0.0) : 0.35 + 0.65 * max(dot(v_normal, normalize(d)), 0.0);
		lit += albedo * vec3(1.0, 0.62, 0.30) * face * fl * lampK * 3.2 / (0.6 + dd * 0.45);
	}
	gl_FragColor = vec4(lit, 1.0);
}`,S8=`
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
}`;w3.exports=t=>{let e=M8(),o=t.texture({data:[[[120,105,85]]],min:"linear",mag:"linear"});fetch("res/florence/photo.jpg").then(i=>{if(!i.ok)throw new Error("Could not load the Florence photo");return i.blob()}).then(i=>createImageBitmap(i)).then(i=>o({data:i,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(i=>console.error(i));let n=t({frag:E8,vert:S8,attributes:{position:e.position,normal:e.normal},elements:new Uint32Array(e.elements),uniforms:{photo:o},cull:{enable:!1}}),r={pos:[],nrm:[],k:[],idx:[]},a=(i,c,f)=>{let[l,d,u]=i,v=[[[1,0,0],[0,1,0],[0,0,1]],[[-1,0,0],[0,1,0],[0,0,-1]],[[0,0,1],[0,1,0],[-1,0,0]],[[0,0,-1],[0,1,0],[1,0,0]],[[0,1,0],[0,0,1],[1,0,0]],[[0,-1,0],[0,0,1],[-1,0,0]]];for(let[p,h,m]of v){let g=r.pos.length/3;for(let[y,b]of[[-1,-1],[1,-1],[1,1],[-1,1]])r.pos.push(l+p[0]*c[0]+h[0]*y*c[0]+m[0]*b*c[0],d+p[1]*c[1]+h[1]*y*c[1]+m[1]*b*c[1],u+p[2]*c[2]+h[2]*y*c[2]+m[2]*b*c[2]),r.nrm.push(...p),r.k.push(f);r.idx.push(g,g+1,g+2,g,g+2,g+3)}};for(let i of mh){let c=i[3],f=i[2]+c*.42;a([i[0],i[1],f],[.11,.17,.11],1);for(let l of[-1,1])for(let d of[-1,1])a([i[0]+l*.11,i[1],f+d*.11],[.014,.18,.014],0);a([i[0],i[1]+.2,f],[.15,.03,.15],0),a([i[0],i[1]+.27,f],[.05,.05,.05],0),a([i[0],i[1]-.19,f],[.09,.025,.09],0),a([i[0],i[1]+.34,i[2]+c*.21],[.015,.015,.21],0),a([i[0],i[1]+.15,i[2]+c*.03],[.04,.24,.03],0)}let s=t({vert:`
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
		}`,attributes:{position:r.pos,normal:r.nrm,k:r.k},elements:new Uint16Array(r.idx),cull:{enable:!1}});return function(){n(),s()}}});var T3=pt((PT,k3)=>{"use strict";var k8=cr().GLSL,{A:yh,BENCH:Qu,SHAFT:Ku,TREE:Al,oculusGLSL:T8}=xa(),A8=va(),xh=Al.sxz,M3=Al.sy,E3=Al.yaw;function L8(t){let e=new DataView(t),o=e.getUint32(4,!0),n=e.getUint32(8,!0),r=e.getUint32(12,!0),a=[0,1,2].map(u=>e.getFloat32(16+u*4,!0)),s=[0,1,2].map(u=>e.getFloat32(28+u*4,!0)),i=40,c=new Uint16Array(t,i,o*3);i+=o*6;let f=new Uint16Array(t,i,o*2);i+=o*4;let l=new Int8Array(t,i,o*3);i+=o*3,i=i+3&-4;let d=new Uint32Array(t,i,r);return{nV:o,nWood:n,nI:r,mn:a,sz:s,pos:c,uv:f,nrm:l,idx:d}}function z8(t){let e=new Float32Array(t.nV*3),o=new Float32Array(t.nV*3),n=new Float32Array(t.nV*2),r=new Float32Array(t.nV),a=Math.cos(E3),s=Math.sin(E3);for(let i=0;i<t.nV;i++){let c=(t.mn[0]+t.pos[i*3]/65535*t.sz[0])*xh,f=(t.mn[1]+t.pos[i*3+1]/65535*t.sz[1])*M3,l=(t.mn[2]+t.pos[i*3+2]/65535*t.sz[2])*xh;e[i*3]=yh.cx+a*c+s*l,e[i*3+1]=Qu.soil+.02+f,e[i*3+2]=yh.zc-s*c+a*l;let d=t.nrm[i*3]/127/xh,u=t.nrm[i*3+1]/127/M3,v=t.nrm[i*3+2]/127/xh,p=Math.hypot(d,u,v)||1;d/=p,u/=p,v/=p,o[i*3]=a*d+s*v,o[i*3+1]=u,o[i*3+2]=-s*d+a*v,n[i*2]=t.uv[i*2]/65535,n[i*2+1]=t.uv[i*2+1]/65535,r[i]=i>=t.nWood?1:0}return{position:e,normal:o,uv:n,leaf:r,elements:t.idx}}function S3(t,e,o,n){let r=t.texture({data:[[n]],min:"linear",mag:"linear"});return fetch(e).then(a=>{if(!a.ok)throw new Error("Could not load "+e);return a.blob()}).then(a=>createImageBitmap(a,{premultiplyAlpha:"none"}).catch(()=>new Promise((s,i)=>{let c=new Image;c.onload=()=>s(c),c.onerror=i,c.src=URL.createObjectURL(a)}))).then(a=>r({data:a,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",...o})).catch(a=>console.error(a)),r}var er=t=>t.toFixed(4),rc=Al.crownC,ac=Al.crownR,N8=`
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

const vec3 SHAFT = vec3(${er(Ku[0])}, ${er(Ku[1])}, ${er(Ku[2])});

void main() {
	vec3 p = position;
	// the air in the court is never quite still. The whole tree leans
	// with it, slowly, more the higher and the further out on a limb
	// (wood and leaves together, so every leaf stays on its twig) ...
	float h = max(p.y - 1.2, 0.0);
	vec2 out2 = p.xz - vec2(${er(yh.cx)}, ${er(yh.zc)});
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
	vec3 cc = vec3(${er(rc[0])}, ${er(rc[1])}, ${er(rc[2])});
	vec3 cr = vec3(${er(ac[0])}, ${er(ac[1])}, ${er(ac[2])});
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
}`,J0=G0(),R8=`
precision highp float;
${k8}
uniform float time;
${J0.lanternGLSL(J0.TREE_LANTERN)}
const vec3 LANTERN_POS = vec3(${J0.LANTERNS[J0.TREE_LANTERN[0]].x.toFixed(3)}, ${J0.LANTERNS[J0.TREE_LANTERN[0]].y.toFixed(3)}, ${J0.LANTERNS[J0.TREE_LANTERN[0]].z.toFixed(3)});
uniform sampler2D leaves, bark;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_leaf, v_shade;
varying vec3 v_eye;

${T8()}

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
	vec3 rel = (v_pos - vec3(${er(rc[0])}, ${er(rc[1])}, ${er(rc[2])})) / vec3(${er(ac[0])}, ${er(ac[1])}, ${er(ac[2])});
	float outer = clamp(length(rel), 0.0, 1.0);
	float ao = mix(0.38, 1.0, outer * outer) * (0.75 + 0.25 * smoothstep(0.4, 2.0, v_pos.y));
	// and the trunk darkens where it meets the soil
	ao *= 0.6 + 0.4 * smoothstep(${er(Qu.soil)}, ${er(Qu.soil+.5)}, v_pos.y);

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
}`;k3.exports=t=>{let e=null,o=S3(t,"res/tree/leaves.webp",{wrapS:"clamp",wrapT:"clamp"},[60,80,40,0]),n=S3(t,"res/tree/bark.jpg",{wrapS:"repeat",wrapT:"repeat"},[90,80,70]),r=Date.now();return fetch("res/tree.bin").then(a=>{if(!a.ok)throw new Error("Could not load the tree");return a.arrayBuffer()}).then(a=>{let s=z8(L8(a));e=t({vert:N8,frag:R8,attributes:{position:s.position,normal:s.normal,uv:s.uv,leaf:s.leaf},elements:s.elements,uniforms:{leaves:o,bark:n,time:()=>A8.motion?typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-r)/1e3:0},cull:{enable:!1}})}).catch(a=>console.error(a)),function(){e&&e()}}});var Mh=pt((IT,N3)=>{"use strict";var sc=B0(),C8="res/audio/go-tomorrow.mp3",O8="res/audio/go-tomorrow.json",L3="gallery-sound",bh=[sc.PIANO.x,1,sc.PIANO.z],P8=sc.R,Xr=!0;try{localStorage.getItem(L3)==="off"&&(Xr=!1)}catch(t){}var Tn=null,mr=null,Ll=null,zl=null,ts=null,S0=null,Us=!1,wh=null,A3=[],I8=(typeof performance!="undefined"?performance.now():0)/1e3;function $8(t){let e=Math.floor(t.sampleRate*2.6),o=t.createBuffer(2,e,t.sampleRate),n=12345,r=()=>(n=n*16807%2147483647,n/10737418235e-1-1);for(let a=0;a<2;a++){let s=o.getChannelData(a),i=0;for(let c=0;c<e;c++){let f=c/t.sampleRate,l=.25+.6*Math.exp(-f*2.2);i+=(r()-i)*l,s[c]=i*Math.pow(1-c/e,2.2)*Math.exp(-f*1.5)*(f<.012?f/.012:1)}}return o}function F8(){if(Tn)return;Tn=new Audio,Tn.src=C8,Tn.loop=!0,Tn.preload="auto",Tn.crossOrigin="anonymous";let t=window.AudioContext||window.webkitAudioContext;if(!t){Tn.volume=.2;return}try{mr=new t;let e=mr.createMediaElementSource(Tn);ts=mr.createBiquadFilter(),ts.type="lowpass",ts.frequency.value=1500,ts.Q.value=.4,Ll=mr.createGain(),Ll.gain.value=0,zl=mr.createGain(),zl.gain.value=0;let o=mr.createConvolver();o.buffer=$8(mr),S0=mr.createGain(),S0.gain.value=Xr?1:0,e.connect(ts),ts.connect(Ll),Ll.connect(S0),ts.connect(o),o.connect(zl),zl.connect(S0),S0.connect(mr.destination)}catch(e){mr=null,Tn.volume=.2}}function z3(){if(Us||!Xr)return;F8();let t=()=>Tn.play().then(()=>{Us=!0}).catch(()=>{});mr&&mr.state==="suspended"?mr.resume().then(t,t):t()}typeof window!="undefined"&&(["pointerdown","pointerup","touchend","keydown","click"].forEach(t=>window.addEventListener(t,z3,{capture:!0,passive:!0})),document.addEventListener("visibilitychange",()=>{!Tn||!Us||(document.hidden?Tn.pause():Xr&&Tn.play().catch(()=>{}))}),fetch(O8).then(t=>t.ok?t.json():null).then(t=>{if(!t)return;let e=o=>{let n=o.map(s=>s[2]).sort((s,i)=>s-i),r=n[Math.floor(n.length*.03)]||0,a=n[Math.floor(n.length*.97)]||1;return o.map(s=>({t:s[0],w:s[1],x:Math.max(0,Math.min(1,(s[2]-r)/Math.max(a-r,.001)))}))};wh={left:e(t.l),right:e(t.r),level:t.e,dur:t.d}}).catch(()=>{}));var _h={AT:bh,listen(t){if(!mr||!Us)return;let e=t[0]-bh[0],o=t[2]-bh[2],n=Math.hypot(e,o,(t[1]-bh[1])*.5),r=Math.hypot(t[0]-sc.C.x,t[2]-sc.C.z)<P8+.4||t[0]<-.2&&Math.abs(t[2]-sc.C.z)<4,a,s,i;if(r){let f=Math.max(0,Math.min(1,(n-1.2)/5));a=1-.3*f,s=.22+.16*f,i=16e3}else{let f=5.5/Math.max(n,5.5),l=t[0]>14.2&&t[2]<12?.6:1;a=.5*Math.pow(f,1.5)*l,s=.34*Math.pow(f,.95)*l,i=(650+9e3*Math.pow(f,1.3))*(l<1?.7:1)}let c=mr.currentTime;Ll.gain.setTargetAtTime(a,c,.35),zl.gain.setTargetAtTime(s,c,.35),ts.frequency.setTargetAtTime(i,c,.35)},time(){let t=wh&&wh.dur||158;return Tn&&Us&&!Tn.paused||Tn&&Us?Tn.currentTime%t:((performance.now()/1e3-I8)%t+t)%t},get cues(){return wh},get on(){return Xr},set(t){Xr=!!t;try{localStorage.setItem(L3,Xr?"on":"off")}catch(e){}Xr?(z3(),Tn&&Us&&Tn.play().catch(()=>{}),S0&&S0.gain.setTargetAtTime(1,mr.currentTime,.2)):S0?S0.gain.setTargetAtTime(0,mr.currentTime,.15):Tn&&Tn.pause(),A3.forEach(e=>e(Xr))},toggle(){_h.set(!Xr)},onChange(t){A3.push(t)},button(t){let e='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="M15.5 9a4.2 4.2 0 0 1 0 6M18 6.5a7.8 7.8 0 0 1 0 11"/></svg>',o='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="M16 9.5l5 5M21 9.5l-5 5"/></svg>',n=document.createElement("button");n.type="button",n.className=t+" sound-toggle";let r=()=>{n.innerHTML=Xr?e:o,n.setAttribute("aria-label",Xr?"Turn the music off":"Turn the music on"),n.title=Xr?"Music on":"Music off",n.setAttribute("aria-pressed",Xr?"true":"false")};return r(),_h.onChange(r),["mousedown","pointerdown"].forEach(a=>n.addEventListener(a,s=>s.stopPropagation())),n.addEventListener("click",a=>{a.stopPropagation(),_h.toggle()}),n}};N3.exports=_h});var H3=pt(($T,od)=>{"use strict";var td=cr().GLSL,{A:R3,BENCH:F3,oculusGLSL:q3}=xa(),C3=va(),D3=B0(),O3=Mh(),q8=1.74,D8=1.877,_r=q8/D8,js={x:R3.cx-1.22,z:R3.zc+.02,hipY:F3.seat+.115},Ko=(t,e)=>[t[3]*e[0]+t[0]*e[3]+t[1]*e[2]-t[2]*e[1],t[3]*e[1]-t[0]*e[2]+t[1]*e[3]+t[2]*e[0],t[3]*e[2]+t[0]*e[1]-t[1]*e[0]+t[2]*e[3],t[3]*e[3]-t[0]*e[0]-t[1]*e[1]-t[2]*e[2]],Ua=t=>[-t[0],-t[1],-t[2],t[3]],os=(t,e)=>{let o=Math.hypot(t[0],t[1],t[2])||1,n=Math.sin(e/2);return[t[0]/o*n,t[1]/o*n,t[2]/o*n,Math.cos(e/2)]},Eh=(t,e,o)=>Ko(os([0,0,1],o*Math.PI/180),Ko(os([0,1,0],e*Math.PI/180),os([1,0,0],t*Math.PI/180))),ed=t=>{let e=Math.hypot(...t)||1;return t.map(o=>o/e)},a0=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],Rl=(t,e)=>[t[0]+e[0],t[1]+e[1],t[2]+e[2]],es=(t,e)=>[t[0]*e,t[1]*e,t[2]*e],Ju=(t,e)=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2],kh=t=>Math.hypot(t[0],t[1],t[2]),Nl=t=>{let e=kh(t)||1;return[t[0]/e,t[1]/e,t[2]/e]},Ah=(t,e)=>[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]],G8=(t,e)=>{let o=[t[0],t[1],t[2]],n=es(Ah(o,e),2);return Rl(Rl(e,es(n,t[3])),Ah(o,n))},H8=(t,e)=>{let o=Ah(t,e),n=1+Ju(t,e);return n<1e-6?[0,0,1,0]:ed([o[0],o[1],o[2],n])};function ra(t,e,o){let[n,r,a,s]=e,i=n*n,c=r*r,f=a*a,l=n*r,d=n*a,u=r*a,v=s*n,p=s*r,h=s*a;return[(1-2*(c+f))*o[0],2*(l+h)*o[0],2*(d-p)*o[0],0,2*(l-h)*o[1],(1-2*(i+f))*o[1],2*(u+v)*o[1],0,2*(d+p)*o[2],2*(u-v)*o[2],(1-2*(i+c))*o[2],0,t[0],t[1],t[2],1]}function Bn(t,e){let o=new Array(16);for(let n=0;n<4;n++)for(let r=0;r<4;r++)o[n*4+r]=t[r]*e[n*4]+t[4+r]*e[n*4+1]+t[8+r]*e[n*4+2]+t[12+r]*e[n*4+3];return o}function Zu(t){let e=Math.hypot(t[0],t[1],t[2]),o=Math.hypot(t[4],t[5],t[6]),n=Math.hypot(t[8],t[9],t[10]),r=t[0]/e,a=t[1]/e,s=t[2]/e,i=t[4]/o,c=t[5]/o,f=t[6]/o,l=t[8]/n,d=t[9]/n,u=t[10]/n,v=r+c+u,p;if(v>0){let h=Math.sqrt(v+1)*2;p=[(f-d)/h,(l-s)/h,(a-i)/h,h/4]}else if(r>c&&r>u){let h=Math.sqrt(1+r-c-u)*2;p=[h/4,(i+a)/h,(l+s)/h,(f-d)/h]}else if(c>u){let h=Math.sqrt(1+c-r-u)*2;p=[(i+a)/h,h/4,(d+f)/h,(l-s)/h]}else{let h=Math.sqrt(1+u-r-c)*2;p=[(l+s)/h,(d+f)/h,h/4,(a-i)/h]}return ed(p)}var Th={LeftUpLeg:[-62,10,0],LeftLeg:[122,0,0],LeftFoot:[30,0,0],RightUpLeg:[0,-3,-2],RightLeg:[4,0,0],RightFoot:[35,-12,0],Neck:[10,0,0],Head:[6,0,0],LeftShoulder:[0,0,6],LeftArm:[-112.4,3.4,62.5],LeftForeArm:[0,-122.6,0],LeftHand:[0,0,-10],RightShoulder:[0,0,0],RightArm:[0,78,-8],RightForeArm:[0,14,0],RightHand:[0,0,0]};for(let t of["Left","Right"]){let e=t==="Left"?-1:1,o=t==="Left"?1:.35;["Index","Middle","Ring","Pinky"].forEach((n,r)=>{Th[t+"Hand"+n+"1"]=[0,0,e*(18+r*6)*o],Th[t+"Hand"+n+"2"]=[0,0,e*(26+r*6)*o],Th[t+"Hand"+n+"3"]=[0,0,e*16*o]})}function Bs(t,e,o){let n=t-e;return n-=Math.round(n),Math.exp(-(n/o)*(n/o))}function P3(t){let e=9+20*Math.cos(2*Math.PI*t),o=4+13*Bs(t,.14,.07)+57*Bs(t,.72,.12),n=5*Bs(t,.06,.04)-9*Bs(t,.42,.12)+17*Bs(t,.62,.05)-3*Bs(t,.85,.1),r=-26*Bs(t,.58,.06);return{hip:e,knee:o,ankle:n,toe:r}}function U8(t){let e=(t%1+1)%1,o=P3(e),n=P3(e+.5),r=Math.cos(2*Math.PI*e),a=Math.sin(2*Math.PI*e);return{swing:{LeftArm:[16*r,0,0],RightArm:[-16*r,0,0],LeftForeArm:[0,-14-8*Math.max(0,-r),0],RightForeArm:[0,14+8*Math.max(0,r),0]},pose:{Hips:[0,5*a,1.5*Math.cos(4*Math.PI*e)],Spine1:[3,-4*a,0],LeftUpLeg:[-o.hip,0,0],LeftLeg:[o.knee,0,0],LeftFoot:[o.ankle,0,0],LeftToeBase:[o.toe,0,0],RightUpLeg:[-n.hip,0,0],RightLeg:[n.knee,0,0],RightFoot:[n.ankle,0,0],RightToeBase:[n.toe,0,0],LeftArm:[0,0,-78],RightArm:[0,0,78],LeftHand:[0,0,-8],RightHand:[0,0,8]},sway:.022*r}}var I3=`
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
}`,Lh=G0(),$3=`#extension GL_OES_standard_derivatives : enable
precision highp float;
${td}
uniform float time;
${D3.roomGLSL()}
${Lh.lanternGLSL(Lh.TREE_LANTERN)}
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
${q3()}
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
}`;function B8(t,e){let o=t.texture({data:[[[120,100,90,255]]],min:"linear",mag:"linear"});return fetch(e).then(n=>{if(!n.ok)throw new Error("Could not load "+e);return n.blob()}).then(n=>createImageBitmap(n,{premultiplyAlpha:"none"}).catch(()=>new Promise((r,a)=>{let s=new Image;s.onload=()=>r(s),s.onerror=a,s.src=URL.createObjectURL(n)}))).then(n=>o({data:n,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(n=>console.error(n)),o}var G3={w:.13,h:.2},Sh=t=>.011*(1-Math.pow(1-t,3));function j8(){let t=[],e=[],o=[],n=[],r=[],a=(h,m,g,y,b,w,_)=>{let k=t.length/3;[h,m,g,y].forEach((N,G)=>{t.push(...N),e.push(...b),o.push(..._[G]),n.push(w)}),r.push(k,k+1,k+2,k,k+2,k+3)},{w:s,h:i}=G3,c=i/2,f=[[0,1],[1,1],[1,0],[0,0]],l=-.006,d=s+.001,u=c+.001;a([0,l,-u],[d,l,-u],[d,l,u],[0,l,u],[0,-1,0],1,[[0,1],[1,1],[1,0],[0,0]]),a([0,l+.001,-u],[0,l+.001,u],[d,l+.001,u],[d,l+.001,-u],[0,1,0],2,f),a([-d,l,-u],[0,l,-u],[0,l,u],[-d,l,u],[0,-1,0],2,f),a([-d,l+.001,-u],[-d,l+.001,u],[0,l+.001,u],[0,l+.001,-u],[0,1,0],2,f);let v=8;for(let h of[1,-1]){for(let g=0;g<v;g++){let y=g/v,b=(g+1)/v,w=(.002+y*(s-.002))*h,_=(.002+b*(s-.002))*h,k=Sh(y),N=Sh(b),G=h>0?y:1-y,C=h>0?b:1-b,X=1,q=-(N-k)/(_-w);a([w,k,-c],[_,N,-c],[_,N,c],[w,k,c],[q,X,0],3,[[G,1],[C,1],[C,0],[G,0]]),a([w,l+.001,c],[_,l+.001,c],[_,N,c],[w,k,c],[0,0,1],4,f),a([w,k,-c],[_,N,-c],[_,l+.001,-c],[w,l+.001,-c],[0,0,-1],4,f)}let m=s*h;a([m,l+.001,-c],[m,Sh(1),-c],[m,Sh(1),c],[m,l+.001,c],[h,0,0],4,f)}let p=10;for(let h=0;h<p;h++){let m=h/p,g=(h+1)/p,y=t.length/3;for(let[b,w]of[[m,-c],[g,-c],[g,c],[m,c]])t.push(b,0,w),e.push(0,1,0),o.push(b,(w+c)/i),n.push(5);r.push(y,y+1,y+2,y,y+2,y+3)}return{pos:t,nrm:e,uv:o,kind:n,idx:r}}function W8(){if(typeof document=="undefined")return null;let t=document.createElement("canvas");t.width=512,t.height=768;let e=t.getContext("2d");e.fillStyle="#ebe5d8",e.fillRect(0,0,512,768);let o=7,n=()=>(o=o*16807%2147483647,o/2147483647),r=(s,i,c,f,l,d,u)=>{for(let v=0;v<d;v++){let p=s+(n()-.5)*c*2,h=i+(n()-.5)*f*2,m=20+n()*60,g=e.createRadialGradient(p,h,0,p,h,m);g.addColorStop(0,`rgba(${l},${u})`),g.addColorStop(1,`rgba(${l},0)`),e.fillStyle=g,e.fillRect(p-m,h-m,m*2,m*2)}},a=e.createRadialGradient(236,280,10,256,300,125);a.addColorStop(0,"#3d4866"),a.addColorStop(1,"#232a3d"),e.fillStyle=a,e.beginPath(),e.arc(256,300,122,0,Math.PI*2),e.fill(),e.fillStyle="#b8873f",e.beginPath(),e.moveTo(64,452);for(let s=64;s<=448;s+=16)e.lineTo(s,446+n()*4);for(let s=448;s>=64;s-=16)e.lineTo(s,466+n()*4);e.fill(),e.strokeStyle="#2b2f3a",e.lineCap="round",[[120,392,500,5],[160,352,530,4],[205,307,558,3]].forEach(([s,i,c,f])=>{e.lineWidth=f,e.beginPath(),e.moveTo(s,c),e.lineTo(i,c),e.stroke()});for(let s=0;s<9e3;s++)e.fillStyle=`rgba(90,80,60,${n()*.05})`,e.fillRect(n()*512,n()*768,1,1);return t}var V8=`
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
		float r = u * ${G3.w.toFixed(3)};
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
}`,X8=`
precision highp float;
${td}
uniform float time;
${Lh.lanternGLSL(Lh.TREE_LANTERN)}
uniform sampler2D cover;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_kind;
${q3()}
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
}`;function Y8(){let t=[],e=[],o=[],n=[],r=[],a=[.36,.11,.07],s=[.1,.07,.05],i=[.78,.76,.72],c=[.55,.41,.26],f=[.8,.55,.22],l=[[0,-.15,f,2],[.0012,-.147,f,2],[.004,-.138,f,2],[.0058,-.125,c,2],[.0064,-.112,c,2],[.006,-.104,c,2],[.0066,-.102,i,1],[.0066,-.08,i,1],[.0062,-.074,i,1],[.0068,-.072,i,1],[.007,-.066,i,1],[.0058,-.064,a,0],[.0062,-.04,a,0],[.0058,0,a,0],[.0046,.06,a,0],[.0036,.11,a,0],[.003,.13,s,0],[.0026,.136,s,0],[0,.139,s,0]],d=16;for(let u=0;u<l.length;u++){let[v,p,h,m]=l[u],g=m===2?.45:1;for(let y=0;y<=d;y++){let b=y/d*Math.PI*2;t.push(Math.cos(b)*v,p,Math.sin(b)*v*g);let w=Math.max(u-1,0),_=Math.min(u+1,l.length-1),k=l[_][0]-l[w][0],N=l[_][1]-l[w][1],G=Math.hypot(k,N)||1;e.push(Math.cos(b)*N/G,-k/G,Math.sin(b)*N/G/g),o.push(...h),n.push(m)}}for(let u=0;u<l.length-1;u++)for(let v=0;v<d;v++){let p=u*(d+1)+v,h=p+d+1;r.push(p,h,p+1,p+1,h,h+1)}return{pos:t,nrm:e,col:o,mat:n,idx:r}}var K8=`
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
}`,Q8=`
precision highp float;
${td}
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
}`,Z8=`
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
}`,J8=`
precision highp float;
uniform float pulse;
varying vec2 v_c;
void main() {
	float d = length(v_c);
	float g = exp(-d * d * 6.0) * 0.10 + exp(-d * d * 30.0) * 0.08;
	gl_FragColor = vec4(vec3(1.0, 0.80, 0.45) * g * (0.75 + 0.25 * pulse), 1.0);
}`;od.exports=t=>{let e="res/avatar/",o=null,n=Date.now(),r=()=>typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-n)/1e3,a={glowPos:[js.x,1.9,js.z],glow:0};Promise.all([fetch(e+"avatar.json").then(C=>C.json()),fetch(e+"avatar.bin").then(C=>C.arrayBuffer())]).then(([C,X])=>{o=f(C,X)}).catch(C=>console.error(C));let s=null;Promise.all([fetch(e+"motion.json").then(C=>C.ok?C.json():null),fetch(e+"motion.bin").then(C=>C.ok?C.arrayBuffer():null)]).then(([C,X])=>{if(!C||!X)return;let q={};for(let ot in C.clips){let D=C.clips[ot],K=D.bones.length,Et=new Float32Array(X,D.mean,K*4),Ht={};D.bones.forEach((Lt,xt)=>{Ht[Lt]=[Et[xt*4],Et[xt*4+1],Et[xt*4+2],Et[xt*4+3]]}),q[ot]=Object.assign({},D,{Q:new Int16Array(X,D.q,D.frames*K*4),H:new Float32Array(X,D.hips,D.frames*3),meanQ:Ht})}s=q}).catch(()=>{});function i(C,X){let q=C.frames,ot=C.bones.length,D=(X%q+q)%q,K=Math.floor(D)%q,Et=(K+1)%q,Ht=D-Math.floor(D),Lt={};for(let Bt=0;Bt<ot;Bt++){let Ge=(K*ot+Bt)*4,Ce=(Et*ot+Bt)*4,Xe=C.Q[Ge],we=C.Q[Ge+1],lo=C.Q[Ge+2],_o=C.Q[Ge+3],Xo=C.Q[Ce],Zt=C.Q[Ce+1],me=C.Q[Ce+2],ze=C.Q[Ce+3];Xe*Xo+we*Zt+lo*me+_o*ze<0&&(Xo=-Xo,Zt=-Zt,me=-me,ze=-ze),Lt[C.bones[Bt]]=ed([Xe+(Xo-Xe)*Ht,we+(Zt-we)*Ht,lo+(me-lo)*Ht,_o+(ze-_o)*Ht])}let xt=K*3,lt=Et*3;return{q:Lt,hips:[C.H[xt]+(C.H[lt]-C.H[xt])*Ht,C.H[xt+1]+(C.H[lt+1]-C.H[xt+1])*Ht,C.H[xt+2]+(C.H[lt+2]-C.H[xt+2])*Ht]}}let c=t.texture({data:[[[255,255,255,255]]]});function f(C,X){let q=(Q,Ct)=>new Float32Array(X,Q,Ct),ot=C.bones,D=ot.length,K={};ot.forEach((Q,Ct)=>{K[Q.name]=Ct});let Et=[];for(let Q=0;Q<D;Q++)Et.push(Array.from(q(C.ibm+Q*64,16)));let Ht=ot.map(Q=>ra(Q.t,Q.r,Q.s)),Lt=[];for(let Q=0;Q<D;Q++){let Ct=ot[Q].parent;Lt[Q]=Ct<0?Ht[Q]:Bn(Lt[Ct],Ht[Q])}let xt=Lt.map(Zu),lt=C.meshes.map(Q=>{let Ct=q(Q.pos,Q.n*3),$t=q(Q.nrm,Q.n*3),Nt=q(Q.uv,Q.n*2),ce=new Uint8Array(X,Q.jnt,Q.n*4),Se=q(Q.wgt,Q.n*4),_e=new Uint16Array(X,Q.idx,Q.ni),de={};for(let ye in Q.morphs){let Go=Q.morphs[ye];de[ye]={idx:new Uint16Array(X,Go.idx,Go.n),d:q(Go.d,Go.n*3)}}let Pe=new Float32Array(Q.n*3),xe=new Float32Array(Q.n*3),je=new Float32Array(Q.n*3),Ee=t.buffer({data:Pe,usage:"dynamic"}),ke=t.buffer({data:xe,usage:"dynamic"}),Ye=/avaturn_hair/.test(Q.name),pe=/EyeAO|Eyelash/.test(Q.name),io=/Body|Head/.test(Q.name),zo=Q.kind||0;return{m:Q,pos:Ct,nrm:$t,uv:Nt,jnt:ce,wgt:Se,idx:_e,morphs:de,outP:Pe,outN:xe,work:je,pb:Ee,nbuf:ke,tex:Q.tex?B8(t,e+Q.tex):c,kind:zo,alphaScale:/EyeAO/.test(Q.name)?.25:1,blend:Q.blend||Ye,alphaCut:Ye?.35:pe?.02:0,skin:io?1:0}}),Bt=t({vert:I3,frag:$3,attributes:{position:t.prop("pb"),normal:t.prop("nb"),uv:t.prop("uv")},elements:t.prop("el"),uniforms:{tex:t.prop("tex"),alphaCut:t.prop("alphaCut"),skin:t.prop("skin"),kind:t.prop("kind"),alphaScale:t.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow,boothLamp:()=>k&&!N?k.lamp:[0,0,0,0],court:()=>k||N?0:1,candle:()=>N?1:0},cull:{enable:!1}}),Ge=t({vert:I3,frag:$3,attributes:{position:t.prop("pb"),normal:t.prop("nb"),uv:t.prop("uv")},elements:t.prop("el"),uniforms:{tex:t.prop("tex"),alphaCut:t.prop("alphaCut"),skin:t.prop("skin"),kind:t.prop("kind"),alphaScale:t.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow,boothLamp:()=>k&&!N?k.lamp:[0,0,0,0],court:()=>k||N?0:1,candle:()=>N?1:0},cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"one minus src alpha"}}}),Ce=.3;for(let Q of lt)if(Q.uvBuf=t.buffer(Q.uv),/Body/.test(Q.m.name)){let Ct=[],$t=[];for(let Nt=0;Nt<Q.idx.length;Nt+=3){let ce=Q.idx[Nt],Se=Q.idx[Nt+1],_e=Q.idx[Nt+2];(Q.pos[ce*3+1]<Ce&&Q.pos[Se*3+1]<Ce&&Q.pos[_e*3+1]<Ce?$t:Ct).push(ce,Se,_e)}Q.el=t.elements({data:new Uint16Array(Ct),type:"uint16"}),$t.length&&(Q.sockEl=t.elements({data:new Uint16Array($t),type:"uint16"}))}else Q.el=t.elements({data:Q.idx,type:"uint16"});let Xe=Lt[K.Hips],we=os([1,0,0],-Math.PI/2),lo=Bn(ra([js.x-Xe[12]*_r,js.hipY-Xe[14]*_r,js.z+Xe[13]*_r],we,[1,1,1]),ra([0,0,0],[0,0,0,1],[_r,_r,_r])),_o=new Array(D),Xo=-1,Zt=(Q,Ct,$t)=>Bn(ra([Q,0,Ct],os([0,1,0],$t),[1,1,1]),ra([0,0,0],[0,0,0,1],[_r,_r,_r])),me=["LeftFoot","RightFoot","LeftToeBase","RightToeBase"].map(Q=>K[Q]),ze=me.map(Q=>Lt[Q][13]*_r);function no(Q){if(s&&s.walk)return yo(Q);let Ct=U8(Q.phase),$t={},Nt=xe=>{for(let je in xe){let Ee=xe[je],ke=Eh(Ee[0],Ee[1],Ee[2]);$t[je]=$t[je]?Ko($t[je],ke):ke}};Nt(Ct.swing),Nt(Ct.pose);let ce=Math.cos(Q.heading),Se=-Math.sin(Q.heading),_e=Zt(Q.x+ce*Ct.sway,Q.z+Se*Ct.sway,Q.heading),de=new Array(D);for(let xe=0;xe<D;xe++){let je=ot[xe],Ee=Ht[xe],ke=$t[je.name];if(ke){let Ye=xt[xe],pe=Ko(Ua(Ye),Ko(ke,Ye));Ee=ra(je.t,Ko(je.r,pe),je.s)}de[xe]=je.parent<0?Bn(_e,Ee):Bn(de[je.parent],Ee)}let Pe=1/0;me.forEach((xe,je)=>{Pe=Math.min(Pe,de[xe][13]-ze[je])});for(let xe=0;xe<D;xe++)de[xe]=de[xe].slice(),de[xe][13]-=Pe,_o[xe]=Bn(de[xe],Et[xe]);return{blink:0}}function yo(Q){let Ct=s.walk,$t=i(Ct,(Q.phase+Ct.phase0)*Ct.frames),Nt=Zt(Q.x,Q.z,Q.heading),ce=new Array(D),Se=K.Hips;for(let de=0;de<D;de++){let Pe=ot[de],xe=Ht[de],je=$t.q[Pe.name];if(je){let Ee=xt[de],ke=Ko(Ua(Ee),Ko(je,Ee)),Ye=de===Se?[Pe.t[0]+$t.hips[0],Pe.t[1]+$t.hips[1],Pe.t[2]+$t.hips[2]]:Pe.t;xe=ra(Ye,Ko(Pe.r,ke),Pe.s)}ce[de]=Pe.parent<0?Bn(Nt,xe):Bn(ce[Pe.parent],xe)}let _e=1/0;me.forEach((de,Pe)=>{_e=Math.min(_e,ce[de][13]-ze[Pe])});for(let de=0;de<D;de++)ce[de]=ce[de].slice(),ce[de][13]-=_e,_o[de]=Bn(ce[de],Et[de]);return{blink:0}}function Ne(Q,Ct){let $t=Math.sin(Q*2*Math.PI/4.6),Nt=Math.sin(Q*.37)*.6+Math.sin(Q*.83+1)*.4,ce={LeftUpLeg:[-86,-6,0],RightUpLeg:[-84,7,0],LeftLeg:[88,0,0],RightLeg:[82,0,0],LeftFoot:[-4,0,0],RightFoot:[-2,0,0],Spine:[6,0,0],Spine1:[5+$t*.8,0,0],Spine2:[4+$t*.6,0,0],Neck:[10,0,0],Head:[12+Nt*2,Nt*2.5,0],LeftArm:[0,0,-72],RightArm:[0,0,72],LeftForeArm:[0,-62,0],RightForeArm:[0,62,0],LeftHand:[0,0,-10],RightHand:[0,0,10]},Se={};for(let Ee in ce){let ke=ce[Ee];Se[Ee]=Eh(ke[0],ke[1],ke[2])}let _e=Zt(Ct.x,Ct.z,Ct.heading),de=new Array(D);for(let Ee=0;Ee<D;Ee++){let ke=ot[Ee],Ye=Ht[Ee],pe=Se[ke.name];if(pe){let io=xt[Ee],zo=Ko(Ua(io),Ko(pe,io));Ye=ra(ke.t,Ko(ke.r,zo),ke.s)}de[Ee]=ke.parent<0?Bn(_e,Ye):Bn(de[ke.parent],Ye)}let xe=de[K.Hips][13]-(Ct.y+.1);for(let Ee=0;Ee<D;Ee++)de[Ee]=de[Ee].slice(),de[Ee][13]-=xe,_o[Ee]=Bn(de[Ee],Et[Ee]);let je=Q%4.1;return{blink:je<.16?Math.sin(je/.16*Math.PI):0}}let ge=Q=>[Lt[Q][12],Lt[Q][13],Lt[Q][14]],gt=(Q,Ct)=>{let $t=Nl(Q),Nt=Nl(a0(Ct,es($t,Ju(Ct,$t)))),ce=Ah($t,Nt);return Zu([$t[0],$t[1],$t[2],0,Nt[0],Nt[1],Nt[2],0,ce[0],ce[1],ce[2],0,0,0,0,1])},ae={};for(let Q of["Left","Right"]){let Ct=K[Q+"Arm"],$t=K[Q+"ForeArm"],Nt=K[Q+"Hand"],ce=K[Q+"HandMiddle1"];ae[Q]={a:Ct,f:$t,h:Nt,upper:kh(a0(ge($t),ge(Ct)))*_r,fore:kh(a0(ge(Nt),ge($t)))*_r,dir0:Nl(a0(ge($t),ge(Ct))),qf0:gt(a0(ge(Nt),ge($t)),[0,1,0]),qh0:gt(a0(ge(ce),ge(Nt)),[0,1,0])}}let Re={};for(let Q of["Left","Right"])Re[ae[Q].a]={side:Q,part:0},Re[ae[Q].f]={side:Q,part:1},Re[ae[Q].h]={side:Q,part:2};function ue(Q,Ct,$t){if(!Q||!Q.length)return{x:.5,lift:0,press:0,finger:1,busy:0};let Nt=0,ce=Q.length-1,Se=-1;for(;Nt<=ce;){let Go=Nt+ce>>1;Q[Go].t<=Ct?(Se=Go,Nt=Go+1):ce=Go-1}let _e=Q[Q.length-1],de=Q[0],Pe=Se>=0?Q[Se]:{t:_e.t-$t,x:_e.x,w:_e.w},xe=Se+1<Q.length?Q[Se+1]:{t:de.t+$t,x:de.x,w:de.w},je=Math.max(.05,xe.t-Pe.t),Ee=Math.min(.14,je*.45),ke=Math.max(0,Math.min(1,(Ct-Pe.t-Ee)/Math.max(je-Ee-.03,.02))),Ye=ke*ke*(3-2*ke),pe=Ct-Pe.t,io=(.55+.45*Pe.w)*Math.exp(-pe/.11),zo=xe.t-Ct,ye=zo<.05?(.55+.45*xe.w)*(1-zo/.05):0;return{x:Pe.x+(xe.x-Pe.x)*Ye,lift:Math.sin(Math.PI*ke)*Math.min(.05,.012+je*.03)*(je>2.5?.4:1),press:Math.max(io,ye),finger:ye>io?((Se+1)*7+3)%4:(Math.max(Se,0)*7+3)%4,busy:Math.exp(-pe/.9)}}let Kt={lean:0,turn:0,nod:0,pedal:0,last:-1},Mo=["Index","Middle","Ring","Pinky"];function E(Q){let Ct=D3.PLAY,$t=O3.cues,Nt=O3.time(),ce=$t&&$t.dur||158,Se={Left:ue($t&&$t.left,Nt,ce),Right:ue($t&&$t.right,Nt,ce)},_e=.35;if($t&&$t.level&&$t.level.length){let eo=Nt*8,uo=Math.floor(eo)%$t.level.length,In=(uo+1)%$t.level.length;_e=$t.level[uo]+($t.level[In]-$t.level[uo])*(eo-Math.floor(eo))}let de=Kt.last<0?0:Math.min(.1,Math.max(0,Q-Kt.last));Kt.last=Q;let Pe=eo=>Math.min(1,de*eo);Kt.lean+=(_e-Kt.lean)*Pe(1.2),Kt.turn+=(Se.Right.busy-Se.Left.busy-Kt.turn)*Pe(1.5),Kt.nod+=(Math.max(Se.Right.press,Se.Left.press*.7)-Kt.nod)*Pe(6),Kt.pedal+=((Se.Left.busy>.35?1:.15)-Kt.pedal)*Pe(5);let xe=Math.sin(Q*2*Math.PI/4.6),je=Math.sin(Nt*.41)*.6+Math.sin(Nt*.17+1)*.4,Ee={LeftUpLeg:[-80,-9,0],RightUpLeg:[-77,9,0],LeftLeg:[86,0,0],RightLeg:[64,0,0],LeftFoot:[-2,0,0],RightFoot:[12-10*Kt.pedal,0,0],Spine:[9+3.5*Kt.lean+je*1.6,Kt.turn*2.5,-Kt.turn*1.6],Spine1:[7+xe*.8+2.5*Kt.lean,Kt.turn*2.5,-Kt.turn*1.2],Spine2:[6+xe*.6+je*.8,Kt.turn*1.5,0],Neck:[13+3*Kt.lean,Kt.turn*3,0],Head:[15+Kt.nod*3.5+je*1.5,Kt.turn*5,je*1.5]};for(let eo of["Left","Right"]){let uo=eo==="Left"?-1:1,In=Se[eo];Mo.forEach((B,ft)=>{let jt=ft===In.finger?In.press:In.press*.2;Ee[eo+"Hand"+B+"1"]=[0,0,uo*(20+3*ft+20*jt)],Ee[eo+"Hand"+B+"2"]=[0,0,uo*(26+4*ft-6*jt)],Ee[eo+"Hand"+B+"3"]=[0,0,uo*14]}),Ee[eo+"HandThumb1"]=[0,uo*-18,uo*10]}let ke={};for(let eo in Ee){let uo=Ee[eo];ke[eo]=Eh(uo[0],uo[1],uo[2])}let Ye=Lt[K.Hips][13]*_r,pe=Bn(ra([Ct.stoolX,Ct.stoolTop+.1-Ye,Ct.stoolFront+.15],os([0,1,0],Ct.heading),[1,1,1]),ra([0,0,0],[0,0,0,1],[_r,_r,_r])),io=(Ct.keyX0+Ct.keyX1)/2,zo={};for(let eo of["Left","Right"]){let uo=Se[eo],In=eo==="Left"?io-.4+.33*uo.x:io+.07+.33*uo.x;zo[eo]=[In,Ct.keyTop+.062+uo.lift-uo.press*.012,Ct.keyFront+.075]}let ye=new Array(D),Go={},fa=[0,1,0];for(let eo=0;eo<D;eo++){let uo=ot[eo],In=Ht[eo],B=ke[uo.name],ft=Re[eo];if(ft){let jt=ae[ft.side];if(ft.part===0){let se=ye[uo.parent],le=Bn(se,Ht[eo]),en=[le[12],le[13],le[14]],nr=Ko(Zu(se),Ua(xt[uo.parent])),Sr=a0(zo[ft.side],en),on=kh(Sr),xr=(jt.upper+jt.fore)*.995;on>xr&&(Sr=es(Sr,xr/on),on=xr);let nn=es(Sr,1/on),fo=(jt.upper*jt.upper-jt.fore*jt.fore+on*on)/(2*on),Yn=Math.sqrt(Math.max(0,jt.upper*jt.upper-fo*fo)),jo=[ft.side==="Left"?-.6:.6,-.8,.3];jo=Nl(a0(jo,es(nn,Ju(jo,nn))));let $n=Rl(en,Rl(es(nn,fo),es(jo,Yn)));jt.T=Rl(en,Sr),jt.elbow=$n;let Dr=Nl(a0($n,en)),Gr=Ko(H8(G8(nr,jt.dir0),Dr),nr);Go[eo]=Gr,B=Ko(Ua(nr),Gr)}else if(ft.part===1){let se=Ko(gt(a0(jt.T,jt.elbow),fa),Ua(jt.qf0));Go[eo]=se,B=Ko(Ua(Go[uo.parent]),se)}else{let se=Se[ft.side],le=Ko(gt([ft.side==="Left"?.12:-.12,-.2-.1*se.press,-1],fa),Ua(jt.qh0));Go[eo]=le,B=Ko(Ua(Go[uo.parent]),le)}}if(B){let jt=xt[eo],se=Ko(Ua(jt),Ko(B,jt));In=ra(uo.t,Ko(uo.r,se),uo.s)}ye[eo]=uo.parent<0?Bn(pe,In):Bn(ye[uo.parent],In)}for(let eo=0;eo<D;eo++)_o[eo]=Bn(ye[eo],Et[eo]);a.pianist={head:[ye[K.Head][12],ye[K.Head][13],ye[K.Head][14]]};let l0=Q%4.3;return{blink:l0<.16?Math.sin(l0/.16*Math.PI):0}}function so(Q,Ct){if(N)return E(Q);if(k)return Ne(Q,k);if(Ct)return no(Ct);let $t=Math.sin(Q*2*Math.PI/4.2),Nt=Q%3.7,ce=Nt<.16?Math.sin(Nt/.16*Math.PI):0,Se=Math.sin(Q*.45),_e=Math.sin(Q*.31+.8),de=Math.max(0,Math.sin(Q*.085)-.75)*4,Pe={RightArm:[0,-22*de,11*Se],RightForeArm:[0,8+26*de,0],RightHand:[38*_e,0,6*Math.sin(Q*.7)],LeftUpLeg:[0,0,3.2*Math.sin(Q*.36)],RightFoot:[5*Math.sin(Q*.52+.4),0,0],Head:[0,1.6*Math.sin(Q*.21),0]};["Index","Middle","Ring","Pinky"].forEach((pe,io)=>{let zo=Math.sin(Q*1.1-io*.5);Pe["RightHand"+pe+"1"]=[0,0,8+12*zo],Pe["RightHand"+pe+"2"]=[0,0,6+10*zo]});let xe={},je=(pe,io)=>{for(let zo in pe){let ye=pe[zo],Go=Eh(ye[0]*io,ye[1]*io,ye[2]*io);xe[zo]=xe[zo]?Ko(xe[zo],Go):Go}};je(Th,1),je({Spine1:[$t*.8,0,0],Spine2:[$t*.6,0,0]},1),je(Pe,1);let Ee=new Array(D),ke=new Array(D);for(let pe=0;pe<D;pe++){let io=ot[pe],zo=Ht[pe],ye=xe[io.name];if(ye){let Go=xt[pe],fa=Ko(Ua(Go),Ko(ye,Go));zo=ra(io.t,Ko(io.r,fa),io.s)}Ee[pe]=io.parent<0?Bn(lo,zo):Bn(Ee[io.parent],zo),ke[pe]=null}for(let pe=0;pe<D;pe++)_o[pe]=Bn(Ee[pe],Et[pe]);let Ye=pe=>[pe[12],pe[13],pe[14]];return a.headPos=Ye(Ee[K.Head]),a.hipsPos=Ye(Ee[K.Hips]),a.headM=Ee[K.Head],{blink:ce}}function Qe(Q,Ct){let{pos:$t,nrm:Nt,jnt:ce,wgt:Se,outP:_e,outN:de,work:Pe,m:xe}=Q,je=xe.n,Ee=$t;if(Ct){Pe.set($t);for(let ke in Q.morphs){let Ye=Ct[ke]||0;if(Ye<=0)continue;let pe=Q.morphs[ke];for(let io=0;io<pe.idx.length;io++){let zo=pe.idx[io]*3;Pe[zo]+=pe.d[io*3]*Ye,Pe[zo+1]+=pe.d[io*3+1]*Ye,Pe[zo+2]+=pe.d[io*3+2]*Ye}}Ee=Pe}for(let ke=0;ke<je;ke++){let Ye=Ee[ke*3],pe=Ee[ke*3+1],io=Ee[ke*3+2],zo=Nt[ke*3],ye=Nt[ke*3+1],Go=Nt[ke*3+2],fa=0,l0=0,eo=0,uo=0,In=0,B=0;for(let jt=0;jt<4;jt++){let se=Se[ke*4+jt];if(se===0)continue;let le=_o[ce[ke*4+jt]];fa+=se*(le[0]*Ye+le[4]*pe+le[8]*io+le[12]),l0+=se*(le[1]*Ye+le[5]*pe+le[9]*io+le[13]),eo+=se*(le[2]*Ye+le[6]*pe+le[10]*io+le[14]),uo+=se*(le[0]*zo+le[4]*ye+le[8]*Go),In+=se*(le[1]*zo+le[5]*ye+le[9]*Go),B+=se*(le[2]*zo+le[6]*ye+le[10]*Go)}_e[ke*3]=fa,_e[ke*3+1]=l0,_e[ke*3+2]=eo;let ft=Math.hypot(uo,In,B)||1;de[ke*3]=uo/ft,de[ke*3+1]=In/ft,de[ke*3+2]=B/ft}xe.grid&&!Oo&&!k&&!N&&Eo(Q),Q.sway&&L0(Q),Q.pb.subdata(_e),Q.nbuf.subdata(de)}function Eo(Q){let[Ct,$t]=Q.m.grid,Nt=Q.outP,ce=Q.outN,Se=F3.seat+.012;for(let _e=1;_e<Ct;_e++){let de=Math.pow(1-_e/(Ct-1),1.5);for(let Pe=0;Pe<$t;Pe++){let xe=(_e*$t+Pe)*3;Nt[xe+1]>Se?Nt[xe+1]=Se+(Nt[xe+1]-Se)*Math.max(de,.15):Nt[xe+1]=Se}}for(let _e=0;_e<ce.length;_e+=3)ce[_e]=0,ce[_e+1]=1,ce[_e+2]=0}let Oo=!1,xn=(Q,Ct,$t,Nt,ce)=>({bone:K[Q],rate:Ct,damp:$t,drag:Nt,most:ce,x:[0,0,0],v:[0,0,0],p:null,vel:[0,0,0]}),Er={head:xn("Head",15,.32,.012,.035),chest:xn("Spine2",9,.38,.03,.1),hips:xn("Hips",7,.42,.045,.16)},Xn=-1;function Ka(Q){let Ct=Xn<0?0:Q-Xn;Xn=Q;for(let $t in Er){let Nt=Er[$t],ce=_o[Nt.bone],Se=Lt[Nt.bone],_e=Se[12],de=Se[13],Pe=Se[14],xe=[ce[0]*_e+ce[4]*de+ce[8]*Pe+ce[12],ce[1]*_e+ce[5]*de+ce[9]*Pe+ce[13],ce[2]*_e+ce[6]*de+ce[10]*Pe+ce[14]];if(!Nt.p||!(Ct>0)||Ct>.25||Math.hypot(xe[0]-Nt.p[0],xe[1]-Nt.p[1],xe[2]-Nt.p[2])>.5){Nt.p=xe,Nt.x=[0,0,0],Nt.v=[0,0,0],Nt.vel=[0,0,0];continue}let je=[(xe[0]-Nt.p[0])/Ct,(xe[1]-Nt.p[1])/Ct,(xe[2]-Nt.p[2])/Ct],Ee=Math.max(1,Math.ceil(Ct/.016)),ke=Ct/Ee;for(let pe=0;pe<3;pe++){let io=Math.max(-30,Math.min(30,(je[pe]-Nt.vel[pe])/Ct)),zo=-je[pe]*Nt.drag;for(let ye=0;ye<Ee;ye++)Nt.v[pe]+=((zo-Nt.x[pe])*Nt.rate*Nt.rate-2*Nt.damp*Nt.rate*Nt.v[pe]-io)*ke,Nt.x[pe]+=Nt.v[pe]*ke}let Ye=Math.hypot(Nt.x[0],Nt.x[1],Nt.x[2]);if(Ye>Nt.most){let pe=Nt.most/Ye;Nt.x=[Nt.x[0]*pe,Nt.x[1]*pe,Nt.x[2]*pe]}Nt.p=xe,Nt.vel=je}}for(let Q of lt){let Ct=Q.m,$t=Ct.n,Nt=null,ce=null;if(Ct.kind===9){ce="head",Nt=new Float32Array($t);for(let Se=0;Se<$t;Se++){let _e=Q.uv[Se*2]<-.5?0:Q.uv[Se*2+1];Nt[Se]=_e*_e}}else if(Ct.name==="scarf"){ce="chest",Nt=new Float32Array($t);for(let Se=0;Se<$t;Se++)Nt[Se]=l(1.52,1.12,Q.pos[Se*3+1])}else if(Ct.grid){ce="hips",Nt=new Float32Array($t);let Se=Ct.grid[0],_e=Ct.grid[1];for(let de=0;de<$t;de++)Nt[de]=Math.pow(Math.floor(de/_e)/(Se-1),1.6)}Nt&&(Q.sway=Nt,Q.spring=Er[ce],Q.loose=ce)}function L0(Q){if(!Oo&&!N&&!k)return;let Ct=Q.spring.x,$t=Q.sway,Nt=Q.outP;if(!(Math.abs(Ct[0])+Math.abs(Ct[1])+Math.abs(Ct[2])<1e-5))for(let ce=0,Se=$t.length;ce<Se;ce++){let _e=$t[ce];_e>0&&(Nt[ce*3]+=Ct[0]*_e,Nt[ce*3+1]+=Ct[1]*_e,Nt[ce*3+2]+=Ct[2]*_e)}}function ii(Q,Ct){Oo=!!Ct;let $t=so(Q,Ct);Ka(Q);let Nt={eyeBlinkLeft:$t.blink,eyeBlinkRight:$t.blink};for(let ce of lt)Qe(ce,Object.keys(ce.morphs).length?Nt:null);a.pose=$t}return{parts:lt,update:ii,drawOpaque:Bt,drawBlend:Ge,state:a}}function l(C,X,q){let ot=Math.min(1,Math.max(0,(q-C)/(X-C)));return ot*ot*(3-2*ot)}let d=j8(),u=W8(),v=u?t.texture({data:u,flipY:!1,min:"linear",mag:"linear"}):c,p=t({vert:V8,frag:X8,attributes:{position:d.pos,normal:d.nrm,uv:d.uv,kind:d.kind},elements:new Uint16Array(d.idx),uniforms:{model:t.prop("model"),turn:0,fold:1.12,cover:v},cull:{enable:!1}}),h=Y8(),m=t({vert:K8,frag:Q8,attributes:{position:h.pos,normal:h.nrm,color:h.col,mat:h.mat},elements:new Uint16Array(h.idx),uniforms:{model:t.prop("model"),pulse:t.prop("pulse")},cull:{enable:!1}}),g=t({vert:Z8,frag:J8,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{center:t.prop("center"),size:t.prop("size"),pulse:t.prop("pulse")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});function y(C){let X=C.headM,q=lt=>{let Bt=Math.hypot(...lt)||1;return lt.map(Ge=>Ge/Bt)},ot=q([X[4],X[5],X[6]]),D=q([X[8],X[9],X[10]]),K=ot,Et=D.map(lt=>-lt),Ht=[Et[1]*K[2]-Et[2]*K[1],Et[2]*K[0]-Et[0]*K[2],Et[0]*K[1]-Et[1]*K[0]],Lt=C.headPos,xt=[0,1,2].map(lt=>Lt[lt]+ot[lt]*.06+D[lt]*.185);return[Ht[0],Ht[1],Ht[2],0,Et[0],Et[1],Et[2],0,K[0],K[1],K[2],0,xt[0],xt[1],xt[2],1]}let b=-1,w="",_=null,k=null,N=!1;function G(C){if(!o)return;let X=(C3.motion,r()),q=_?[_.x,_.z,_.heading,_.phase].map(D=>D.toFixed(4)).join():"";(k||N||q!==w||!_&&Math.abs(X-b)>(C3.isPhone?1/30:0))&&(o.update(X,_),b=X,w=q);for(let D of o.parts)D.blend||(o.drawOpaque({pb:D.pb,nb:D.nbuf,uv:D.uvBuf,el:D.el,tex:D.tex,alphaCut:D.alphaCut,skin:D.skin,kind:D.kind,alphaScale:D.alphaScale}),D.sockEl&&o.drawOpaque({pb:D.pb,nb:D.nbuf,uv:D.uvBuf,el:D.sockEl,tex:c,alphaCut:0,skin:0,kind:8,alphaScale:1}));let ot=o.state;if(ot.headM&&!_&&!k&&!N){p({model:y(ot)});let D=ot.headPos,K=Math.sin(X*1.3)*.02,Et=[D[0],D[1]+.62+K,D[2]+.05],Ht=X*.6,Lt=ra(Et,Ko(os([0,1,0],Ht),os([0,0,1],.18)),[1.2,1.2,1.2]),xt=.5+.5*Math.sin(X*2);m({model:Lt,pulse:xt}),a.glowPos=Et,a.glow=.06+.03*xt,g({center:[Et[0],Et[1]-.12,Et[2]],size:.1,pulse:xt})}for(let D of o.parts)D.blend&&o.drawBlend({pb:D.pb,nb:D.nbuf,uv:D.uvBuf,el:D.el,tex:D.tex,alphaCut:D.alphaCut,skin:D.skin,kind:D.kind,alphaScale:D.alphaScale})}return G.state=a,G.place=js,G.setWalk=C=>{_=C||null,_&&(a.glow=0)},G.setSeat=C=>{k=C||null,a.glow=k?0:a.glow,b=-1},G.setPiano=C=>{C=!!C,C!==N&&(N=C,N&&(a.glow=0),b=-1)},G};od.exports.PLACE=js});var nd=pt((FT,U3)=>{"use strict";U3.exports={name:"Muzammil",title:"Hi, I\u2019m Muzammil.",text:`I\u2019m a self-taught artist. I paint emotions. Grief, longing, love, and the quiet ways we keep holding on. I borrow the light and stillness of the Renaissance to talk about very modern feelings.

This gallery is my portfolio, built brick by pixel, so my work has a home that never closes. Every painting comes with a few words, because some feelings need both a frame and a sentence.

You\u2019ll find me in the tree court, catching sunlight and trying not to get too absorbed. Wander the halls, stay as long as you like, and don\u2019t worry about the time. In here, the only thing that\u2019s drying is the paint.`}});var ad=pt((qT,Y3)=>{"use strict";var V3=va(),B3=Kc(),ns=t=>String(t).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function rd(){return V3.isPhone||!window.matchMedia||!window.matchMedia("(pointer: fine)").matches?!1:window.innerWidth>=900&&window.innerHeight>=520}var tE=`
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
`,j3=!1;function X3(){if(j3)return;j3=!0;let t=document.createElement("style");t.textContent=tE,document.head.appendChild(t)}var eE='<svg class="visit-play" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="10.2"/><path d="M10 8.4l6 3.6-6 3.6z" fill="currentColor" stroke="none"/></svg>';function oE(t){return!t||!t.visit||!rd()?"":(X3(),`<button type="button" class="visit-btn" data-visit="${ns(t.slug||"")}" aria-label="Visit what remained: watch ${ns(t.title)} come to life">${eE}<span>Visit what remained</span></button>`)}function nE(t){let e=t.getContext("2d");t.width=t.height=160;let o=e.createImageData(160,160),n=!0,r=0;return function a(s){if(n){if(s-r>70){r=s;let i=o.data;for(let c=0;c<i.length;c+=4){let f=Math.random()*255;i[c]=i[c+1]=i[c+2]=f,i[c+3]=255}e.putImageData(o,0,0),t.style.transform=`translate(${(Math.random()*6-3).toFixed(1)}%, ${(Math.random()*6-3).toFixed(1)}%)`}requestAnimationFrame(a)}}(0),()=>{n=!1}}var Cl=null;function rE(t){if(Cl||!t||!t.visit)return;X3();let e=document.activeElement;document.body.classList.add("visiting");let o="images/web/"+t.slug+(V3.isPhone?"-1024":"")+".webp",n=document.createElement("div");n.className="visit",n.setAttribute("role","dialog"),n.setAttribute("aria-modal","true"),n.setAttribute("aria-label","Visiting "+t.title),n.innerHTML=`
		<video muted playsinline preload="auto" ${t.visit.poster?`poster="${ns(t.visit.poster)}"`:""}></video>
		<img class="visit-art" alt="${ns(t.title)}, ${ns(B3(t))}" src="${ns(o)}">
		<canvas class="visit-grain" aria-hidden="true"></canvas>
		<div class="visit-vignette" aria-hidden="true"></div>
		<div class="visit-bar top" aria-hidden="true"></div>
		<div class="visit-bar bottom" aria-hidden="true"></div>
		<div class="visit-title">
			<span class="visit-kicker">A visit</span>
			<span class="visit-name">${ns(t.title)}</span>
			<span class="visit-meta">${ns(B3(t))}</span>
		</div>
		<button type="button" class="visit-close" aria-label="Return to the gallery">\xD7</button>
		<button type="button" class="visit-skip">Skip</button>
		<div class="visit-end">
			<button type="button" class="primary" data-act="back">Return to the gallery</button>
			<button type="button" data-act="again">Watch again</button>
		</div>`,document.body.appendChild(n);let r=n.querySelector("video"),a=n.querySelector(".visit-title"),s=nE(n.querySelector(".visit-grain")),i=[],c=(m,g)=>i.push(setTimeout(m,g)),f=m=>m.stopPropagation();["mousedown","pointerdown","click","wheel","touchstart","touchmove"].forEach(m=>n.addEventListener(m,f));let l=m=>{m.key==="Escape"?(m.preventDefault(),h()):m.key===" "&&!(m.target&&m.target.tagName==="BUTTON")&&(m.preventDefault(),v()),m.stopImmediatePropagation()};window.addEventListener("keydown",l,!0);let d=m=>m.stopImmediatePropagation();window.addEventListener("keyup",d,!0);let u=!1;function v(){u||(u=!0,a.classList.add("on"),n.classList.add("resolved"),c(()=>{let m=n.querySelector('[data-act="back"]');m&&m.focus({preventScroll:!0})},1300))}function p(){u=!1,n.classList.remove("resolved"),a.classList.remove("on");try{r.currentTime=0}catch(g){}let m=r.play();m&&m.catch&&m.catch(()=>v()),n.classList.add("playing"),c(()=>{u||a.classList.add("on")},1600),c(()=>{u||a.classList.remove("on")},6200)}r.addEventListener("timeupdate",()=>{r.duration&&r.currentTime>r.duration-1.2&&v()}),r.addEventListener("ended",v),r.addEventListener("error",v);function h(){if(Cl){Cl=null,i.forEach(clearTimeout),n.classList.remove("on");try{r.pause()}catch(m){}window.removeEventListener("keydown",l,!0),window.removeEventListener("keyup",d,!0),document.body.classList.remove("visiting"),setTimeout(()=>{s(),n.remove(),e&&e.focus&&e.focus({preventScroll:!0})},1150)}}n.querySelector(".visit-close").addEventListener("click",h),n.querySelector(".visit-skip").addEventListener("click",()=>{try{r.pause()}catch(m){}v()}),n.querySelector(".visit-end").addEventListener("click",m=>{let g=m.target.closest("button");g&&(g.dataset.act==="back"&&h(),g.dataset.act==="again"&&(i.forEach(clearTimeout),p()))}),r.src=t.visit.video,Cl={close:h},requestAnimationFrame(()=>{n.classList.add("on"),c(p,1300)})}var W3={};function aE(t){if(!t||!t.visit||W3[t.visit.video]||!rd())return;W3[t.visit.video]=!0;let e=document.createElement("link");e.rel="preload",e.as="video",e.href=t.visit.video,document.head.appendChild(e)}Y3.exports={available:rd,button:oE,open:rE,warm:aE,get active(){return!!Cl}}});var Z3=pt((DT,Q3)=>{"use strict";var sE=va(),hc=[0,0],ic=[0,0],k0=null,id=0;if(typeof window!="undefined"){window.addEventListener("pointermove",e=>{e.pointerType!=="touch"&&(hc[0]=Math.max(-1,Math.min(1,e.clientX/window.innerWidth*2-1)),hc[1]=Math.max(-1,Math.min(1,e.clientY/window.innerHeight*2-1)),id=performance.now())},{passive:!0});let t=()=>{id=performance.now()};["wheel","touchstart","touchmove","keydown","pointerdown"].forEach(e=>window.addEventListener(e,t,{passive:!0,capture:!0})),window.addEventListener("deviceorientation",e=>{e.gamma===null||e.beta===null||(k0||(k0=[e.gamma,e.beta]),k0[0]+=(e.gamma-k0[0])*.01,k0[1]+=(e.beta-k0[1])*.01,hc[0]=Math.max(-1,Math.min(1,(e.gamma-k0[0])/14)),hc[1]=Math.max(-1,Math.min(1,(e.beta-k0[1])/14)))},{passive:!0})}var K3=0,cc=null,zh=null,s0=[0,0,0],sd=0,lc=null,fc=0,Ws={eye:[0,0,0],target:[0,0,0],fov:50,roll:0},iE={apply(t,e){let o=Math.min(.1,Math.max(0,e-K3));K3=e;let n=t.eye,r=t.target,a=[r[0]-n[0],r[1]-n[1],r[2]-n[2]],s=Math.hypot(a[0],a[1],a[2])||1;a=[a[0]/s,a[1]/s,a[2]/s];let i=[-a[2],0,a[0]],c=Math.hypot(i[0],i[2])||1;i=[i[0]/c,0,i[2]/c];let f=[i[1]*a[2]-i[2]*a[1],i[2]*a[0]-i[0]*a[2],i[0]*a[1]-i[1]*a[0]],l=!cc;if(cc&&o>0){let b=[n[0]-cc[0],n[1]-cc[1],n[2]-cc[2]],w=Math.hypot(b[0],b[1],b[2]);if(w>2.5)l=!0;else{let k=Math.min(1,o*5);for(let N=0;N<3;N++)s0[N]+=(b[N]/o-s0[N])*k}let _=Math.hypot(r[0]-zh[0],r[1]-zh[1],r[2]-zh[2]);fc=w/o<.12&&_/o<.2?fc+o:0}l&&(s0[0]=s0[1]=s0[2]=0,fc=0),cc=n.slice(),zh=r.slice(),sd=Math.hypot(s0[0],s0[1],s0[2]);let d=Math.min(1,o*2.6);ic[0]+=(hc[0]-ic[0])*d,ic[1]+=(hc[1]-ic[1])*d;let u=Math.max(.03,Math.min(.32,s*.05)),v=(sE.isPhone&&!k0?1.5:1)*Math.min(1,fc/2.5),p=(Math.sin(e*.131)*.55+Math.sin(e*.071+1.3)*.45)*u*.55*v,h=Math.sin(e*.097+.6)*u*.16*v,m=ic[0]*u+p,g=-ic[1]*u*.45+h;for(let b=0;b<3;b++)Ws.eye[b]=n[b]+i[b]*m+f[b]*g,Ws.target[b]=r[b]+(i[b]*m+f[b]*g)*.12;n[1]>.05&&(Ws.eye[1]=Math.max(.05,Ws.eye[1]));let y=s0[0]*i[0]+s0[2]*i[2];return Ws.fov=t.fov+Math.min(3.5,sd*.55),Ws.roll=(t.roll||0)+Math.max(-.035,Math.min(.035,-y*.006)),Ws},pull(t,e){(lc===null||!(Math.abs(t.focus-lc)<40))&&(lc=t.focus);let o=1/60;lc+=(t.focus-lc)*Math.min(1,o*3.2),t.focus=lc,t.aperture>0&&(t.aperture*=1+.25*Math.min(1,fc/3))},get speed(){return sd},get resting(){return fc>2&&performance.now()-id>2e3}};Q3.exports=iE});var cd=pt((GT,J3)=>{J3.exports=1e-6});var ld=pt((HT,tx)=>{tx.exports=cE;function cE(){var t=new Float32Array(3);return t[0]=0,t[1]=0,t[2]=0,t}});var ox=pt((UT,ex)=>{ex.exports=lE;function lE(t){var e=new Float32Array(3);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}});var fd=pt((BT,nx)=>{nx.exports=fE;function fE(t,e,o){var n=new Float32Array(3);return n[0]=t,n[1]=e,n[2]=o,n}});var hd=pt((jT,rx)=>{rx.exports=hE;function hE(t,e){var o=e[0],n=e[1],r=e[2],a=o*o+n*n+r*r;return a>0&&(a=1/Math.sqrt(a),t[0]=e[0]*a,t[1]=e[1]*a,t[2]=e[2]*a),t}});var ud=pt((WT,ax)=>{ax.exports=uE;function uE(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}});var lx=pt((VT,cx)=>{cx.exports=pE;var sx=fd(),ix=hd(),dE=ud();function pE(t,e){var o=sx(t[0],t[1],t[2]),n=sx(e[0],e[1],e[2]);ix(o,o),ix(n,n);var r=dE(o,n);return r>1?0:Math.acos(r)}});var hx=pt((XT,fx)=>{fx.exports=vE;function vE(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}});var dx=pt((YT,ux)=>{ux.exports=mE;function mE(t,e,o,n){return t[0]=e,t[1]=o,t[2]=n,t}});var vx=pt((KT,px)=>{px.exports=gE;var dd=cd();function gE(t,e){var o=t[0],n=t[1],r=t[2],a=e[0],s=e[1],i=e[2];return Math.abs(o-a)<=dd*Math.max(1,Math.abs(o),Math.abs(a))&&Math.abs(n-s)<=dd*Math.max(1,Math.abs(n),Math.abs(s))&&Math.abs(r-i)<=dd*Math.max(1,Math.abs(r),Math.abs(i))}});var gx=pt((QT,mx)=>{mx.exports=xE;function xE(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]}});var yx=pt((ZT,xx)=>{xx.exports=yE;function yE(t,e,o){return t[0]=e[0]+o[0],t[1]=e[1]+o[1],t[2]=e[2]+o[2],t}});var pd=pt((JT,bx)=>{bx.exports=bE;function bE(t,e,o){return t[0]=e[0]-o[0],t[1]=e[1]-o[1],t[2]=e[2]-o[2],t}});var _x=pt((tA,wx)=>{wx.exports=pd()});var vd=pt((eA,Mx)=>{Mx.exports=wE;function wE(t,e,o){return t[0]=e[0]*o[0],t[1]=e[1]*o[1],t[2]=e[2]*o[2],t}});var Sx=pt((oA,Ex)=>{Ex.exports=vd()});var md=pt((nA,kx)=>{kx.exports=_E;function _E(t,e,o){return t[0]=e[0]/o[0],t[1]=e[1]/o[1],t[2]=e[2]/o[2],t}});var Ax=pt((rA,Tx)=>{Tx.exports=md()});var zx=pt((aA,Lx)=>{Lx.exports=ME;function ME(t,e,o){return t[0]=Math.min(e[0],o[0]),t[1]=Math.min(e[1],o[1]),t[2]=Math.min(e[2],o[2]),t}});var Rx=pt((sA,Nx)=>{Nx.exports=EE;function EE(t,e,o){return t[0]=Math.max(e[0],o[0]),t[1]=Math.max(e[1],o[1]),t[2]=Math.max(e[2],o[2]),t}});var Ox=pt((iA,Cx)=>{Cx.exports=SE;function SE(t,e){return t[0]=Math.floor(e[0]),t[1]=Math.floor(e[1]),t[2]=Math.floor(e[2]),t}});var Ix=pt((cA,Px)=>{Px.exports=kE;function kE(t,e){return t[0]=Math.ceil(e[0]),t[1]=Math.ceil(e[1]),t[2]=Math.ceil(e[2]),t}});var Fx=pt((lA,$x)=>{$x.exports=TE;function TE(t,e){return t[0]=Math.round(e[0]),t[1]=Math.round(e[1]),t[2]=Math.round(e[2]),t}});var Dx=pt((fA,qx)=>{qx.exports=AE;function AE(t,e,o){return t[0]=e[0]*o,t[1]=e[1]*o,t[2]=e[2]*o,t}});var Hx=pt((hA,Gx)=>{Gx.exports=LE;function LE(t,e,o,n){return t[0]=e[0]+o[0]*n,t[1]=e[1]+o[1]*n,t[2]=e[2]+o[2]*n,t}});var gd=pt((uA,Ux)=>{Ux.exports=zE;function zE(t,e){var o=e[0]-t[0],n=e[1]-t[1],r=e[2]-t[2];return Math.sqrt(o*o+n*n+r*r)}});var jx=pt((dA,Bx)=>{Bx.exports=gd()});var xd=pt((pA,Wx)=>{Wx.exports=NE;function NE(t,e){var o=e[0]-t[0],n=e[1]-t[1],r=e[2]-t[2];return o*o+n*n+r*r}});var Xx=pt((vA,Vx)=>{Vx.exports=xd()});var yd=pt((mA,Yx)=>{Yx.exports=RE;function RE(t){var e=t[0],o=t[1],n=t[2];return Math.sqrt(e*e+o*o+n*n)}});var Qx=pt((gA,Kx)=>{Kx.exports=yd()});var bd=pt((xA,Zx)=>{Zx.exports=CE;function CE(t){var e=t[0],o=t[1],n=t[2];return e*e+o*o+n*n}});var ty=pt((yA,Jx)=>{Jx.exports=bd()});var oy=pt((bA,ey)=>{ey.exports=OE;function OE(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t}});var ry=pt((wA,ny)=>{ny.exports=PE;function PE(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t}});var sy=pt((_A,ay)=>{ay.exports=IE;function IE(t,e,o){var n=e[0],r=e[1],a=e[2],s=o[0],i=o[1],c=o[2];return t[0]=r*c-a*i,t[1]=a*s-n*c,t[2]=n*i-r*s,t}});var cy=pt((MA,iy)=>{iy.exports=$E;function $E(t,e,o,n){var r=e[0],a=e[1],s=e[2];return t[0]=r+n*(o[0]-r),t[1]=a+n*(o[1]-a),t[2]=s+n*(o[2]-s),t}});var fy=pt((EA,ly)=>{ly.exports=FE;function FE(t,e){e=e||1;var o=Math.random()*2*Math.PI,n=Math.random()*2-1,r=Math.sqrt(1-n*n)*e;return t[0]=Math.cos(o)*r,t[1]=Math.sin(o)*r,t[2]=n*e,t}});var uy=pt((SA,hy)=>{hy.exports=qE;function qE(t,e,o){var n=e[0],r=e[1],a=e[2],s=o[3]*n+o[7]*r+o[11]*a+o[15];return s=s||1,t[0]=(o[0]*n+o[4]*r+o[8]*a+o[12])/s,t[1]=(o[1]*n+o[5]*r+o[9]*a+o[13])/s,t[2]=(o[2]*n+o[6]*r+o[10]*a+o[14])/s,t}});var py=pt((kA,dy)=>{dy.exports=DE;function DE(t,e,o){var n=e[0],r=e[1],a=e[2];return t[0]=n*o[0]+r*o[3]+a*o[6],t[1]=n*o[1]+r*o[4]+a*o[7],t[2]=n*o[2]+r*o[5]+a*o[8],t}});var my=pt((TA,vy)=>{vy.exports=GE;function GE(t,e,o){var n=e[0],r=e[1],a=e[2],s=o[0],i=o[1],c=o[2],f=o[3],l=f*n+i*a-c*r,d=f*r+c*n-s*a,u=f*a+s*r-i*n,v=-s*n-i*r-c*a;return t[0]=l*f+v*-s+d*-c-u*-i,t[1]=d*f+v*-i+u*-s-l*-c,t[2]=u*f+v*-c+l*-i-d*-s,t}});var xy=pt((AA,gy)=>{gy.exports=HE;function HE(t,e,o,n){var r=o[1],a=o[2],s=e[1]-r,i=e[2]-a,c=Math.sin(n),f=Math.cos(n);return t[0]=e[0],t[1]=r+s*f-i*c,t[2]=a+s*c+i*f,t}});var by=pt((LA,yy)=>{yy.exports=UE;function UE(t,e,o,n){var r=o[0],a=o[2],s=e[0]-r,i=e[2]-a,c=Math.sin(n),f=Math.cos(n);return t[0]=r+i*c+s*f,t[1]=e[1],t[2]=a+i*f-s*c,t}});var _y=pt((zA,wy)=>{wy.exports=BE;function BE(t,e,o,n){var r=o[0],a=o[1],s=e[0]-r,i=e[1]-a,c=Math.sin(n),f=Math.cos(n);return t[0]=r+s*f-i*c,t[1]=a+s*c+i*f,t[2]=e[2],t}});var Ey=pt((NA,My)=>{My.exports=jE;var rs=ld()();function jE(t,e,o,n,r,a){var s,i;for(e||(e=3),o||(o=0),n?i=Math.min(n*e+o,t.length):i=t.length,s=o;s<i;s+=e)rs[0]=t[s],rs[1]=t[s+1],rs[2]=t[s+2],r(rs,rs,a),t[s]=rs[0],t[s+1]=rs[1],t[s+2]=rs[2];return t}});var ky=pt((RA,Sy)=>{Sy.exports={EPSILON:cd(),create:ld(),clone:ox(),angle:lx(),fromValues:fd(),copy:hx(),set:dx(),equals:vx(),exactEquals:gx(),add:yx(),subtract:pd(),sub:_x(),multiply:vd(),mul:Sx(),divide:md(),div:Ax(),min:zx(),max:Rx(),floor:Ox(),ceil:Ix(),round:Fx(),scale:Dx(),scaleAndAdd:Hx(),distance:gd(),dist:jx(),squaredDistance:xd(),sqrDist:Xx(),length:yd(),len:Qx(),squaredLength:bd(),sqrLen:ty(),negate:oy(),inverse:ry(),normalize:hd(),dot:ud(),cross:sy(),lerp:cy(),random:fy(),transformMat4:uy(),transformMat3:py(),transformQuat:my(),rotateX:xy(),rotateY:by(),rotateZ:_y(),forEach:Ey()}});var Ly=pt((CA,Ay)=>{"use strict";function Ty(){let t={};return{on(e,o){return(t[e]=t[e]||[]).push(o),this},emit(e,o){(t[e]||[]).slice().forEach(n=>n(o))}}}Ay.exports=function(e){let o=e.ownerDocument||document,n=Ty(),r=null,a={dx:0,dy:0,dt:0},s=0,i=()=>o.pointerLockElement||o.webkitPointerLockElement||null,c=()=>{if(i())return;let l=e.requestPointerLock||e.webkitRequestPointerLock;if(l)try{let d=l.call(e);d&&d.catch&&d.catch(()=>{})}catch(d){}};e.addEventListener("mousedown",c,!1);let f=()=>{if(!i()){r&&(n.emit("release"),r.emit("end"),r=null);return}r=Ty(),s=Date.now(),n.emit("attain",r)};return o.addEventListener("pointerlockchange",f),o.addEventListener("webkitpointerlockchange",f),o.addEventListener("pointerlockerror",()=>n.emit("error")),(o.body||e).addEventListener("mousemove",l=>{r&&(a.dx=l.movementX||l.webkitMovementX||0,a.dy=l.movementY||l.webkitMovementY||0,a.dt=Date.now()-s,n.emit("data",a),r.emit("data",a))},!1),n.request=c,n.target=i,n.release=()=>{i()&&(o.exitPointerLock||o.webkitExitPointerLock).call(o)},n}});var Oy=pt((IA,Cy)=>{"use strict";var Vs=Vi(),Xs=ky(),WE=Ly(),OA=Math.PI/4,PA=Math.PI/6,zy=2,VE=1,XE=2.4,YE=2.4,KE=1e3,QE=5,ZE=7,wd=pr().C,Ol=[[7,1.6],[7,wd.zc],[wd.x1-2.95,wd.zc]],as=Ol.slice(1).map((t,e)=>{let o=Ol[e],n=t[0]-o[0],r=t[1]-o[1],a=Math.hypot(n,r);return{a:o,len:a,dir:[n/a,r/a]}}),_d=as.reduce((t,e)=>t+e.len,0);function Ny(t){let e=Math.max(0,Math.min(_d,t));for(let n of as){if(e<=n.len)return[n.a[0]+n.dir[0]*e,n.a[1]+n.dir[1]*e];e-=n.len}let o=Ol[Ol.length-1];return[o[0],o[1]]}function JE(t){let e=0;for(let n=0;n<as.length;n++){let r=as[n],a=e+r.len;if(t<a-1e-4||n===as.length-1){let s=r.dir,c=t<=e+1e-4&&n>0?as[n-1].dir:r.dir;return{ahead:s,back:[-c[0],-c[1]]}}e=a}let o=as[as.length-1].dir;return{ahead:o,back:[-o[0],-o[1]]}}var tS=Math.PI/4,eS=7,oS=140,nS=70,Ry=(t,e,o)=>(1-t)*e+t*o,rS=t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2;Cy.exports=function({getGridSegments:t,getGridParts:e},o){var n=[0,Math.PI],r=[0,Math.PI],a=0,s=[0,0,0],i=[ZE,zy,Ol[0][1]],c=0,f=1,l=0,d=[.707,0,.707],u=[0,1,0],v=[0,0,0],p=.5,h=Vs.identity([]),m=Vs.identity([]),g=!1,y=[0,0,0],b=[0,0,0],w=1,_=!1;let k=Zt=>{n[1]+=Zt*tS},N=(Zt,me,ze)=>{if(Zt=Math.max(Math.min(Zt,100),-100),me=Math.max(Math.min(me,100),-100),n[0]=0,_){a=0;return}for(a+=Zt;a>=ze;)k(1),a-=ze;for(;a<=-ze;)k(-1),a+=ze};WE(document.body).on("attain",Zt=>{Zt.on("data",me=>{N(me.dx,me.dy,oS)})});let C=null,X=null,q=0,ot={x:0,y:0},D=58,K=document.createElement("div");K.id="museum-mobile-controls",K.innerHTML=`

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
	`,document.body.appendChild(K);let Et=K.querySelector("#museum-joystick"),Ht=K.querySelector("#museum-joystick-knob"),Lt=()=>{Ht.style.transform="translate(-50%, -50%)",s[0]=0,s[2]=0},xt=Zt=>{let me=Zt.clientX-ot.x,ze=Zt.clientY-ot.y,no=Math.hypot(me,ze);if(no>D&&(me=me/no*D,ze=ze/no*D),Ht.style.transform=`translate(
				calc(-50% + ${me}px),
				calc(-50% + ${ze}px)
			)`,no<10){s[0]=0,s[2]=0;return}let Ne=me/D,ge=ze/D;s[0]=0,s[2]=Math.abs(ge)>.15?ge:0},lt=(Zt,me)=>{for(let ze=0;ze<Zt.length;ze++)if(Zt[ze].identifier===me)return Zt[ze];return null},Bt=Zt=>!!(Zt&&Zt.closest&&Zt.closest(".painting-plaque, .story-overlay, .story-card, .story-close, button")),Ge=Zt=>{if(!Bt(Zt.target)&&(Zt.cancelable&&Zt.preventDefault(),!_))for(let me=0;me<Zt.changedTouches.length;me++){let ze=Zt.changedTouches[me];if(C===null&&ze.clientX<window.innerWidth*.48){C=ze.identifier;let no=Et.getBoundingClientRect();ot.x=no.left+no.width/2,ot.y=no.top+no.height/2,xt(ze)}else X===null&&ze.clientX>=window.innerWidth*.48&&(X=ze.identifier,q=ze.clientX,a=0)}},Ce=Zt=>{if(Bt(Zt.target)||(Zt.cancelable&&Zt.preventDefault(),_))return;let me=C===null?null:lt(Zt.touches,C);me&&xt(me);let ze=X===null?null:lt(Zt.touches,X);if(ze){let no=ze.clientX-q;q=ze.clientX,N(no,0,nS)}},Xe=Zt=>{if(!Bt(Zt.target)){Zt.cancelable&&Zt.preventDefault();for(let me=0;me<Zt.changedTouches.length;me++){let ze=Zt.changedTouches[me];ze.identifier===C&&(C=null,Lt()),ze.identifier===X&&(X=null)}}};document.addEventListener("touchstart",Ge,{passive:!1}),document.addEventListener("touchmove",Ce,{passive:!1}),document.addEventListener("touchend",Xe,{passive:!1}),document.addEventListener("touchcancel",Xe,{passive:!1});let we=document.createElement("style");we.textContent=`

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
	`,document.head.appendChild(we);var lo={};let _o=Zt=>{if(Zt.defaultPrevented||Zt.ctrlKey||Zt.altKey||Zt.metaKey)return;let me=Zt.type==="keydown";lo[Zt.code]=me,me&&!Zt.repeat&&!_&&((Zt.code==="KeyA"||Zt.code==="ArrowLeft")&&k(-1),(Zt.code==="KeyD"||Zt.code==="ArrowRight")&&k(1)),g=!1;let ze=lo.KeyW||lo.ArrowUp?1:0;s=[0,0,(lo.KeyS||lo.ArrowDown?1:0)-ze],Zt.preventDefault()};window.addEventListener("keydown",_o),window.addEventListener("keyup",_o);var Xo=0;return{pos:i,fmouse:r,forward:d,up:u,setPaused:Zt=>{_=!!Zt,_&&(s[0]=0,s[2]=0,Lt())},place:(Zt,me)=>{c=Math.max(0,Math.min(_d,Zt));let ze=Ny(c);i[0]=ze[0],i[2]=ze[1],n[1]=me,r[1]=me,a=0,f=1},view:()=>h,proj:()=>(Vs.perspective(m,o(),window.innerWidth/window.innerHeight,.1,700),m),tick:({time:Zt})=>{let me=Zt-Xo;Xo=Zt;let ze=[0,0,0],no=[];Xs.set(d,Math.sin(r[1]),0,-Math.cos(r[1])),Xs.set(u,0,1,0);let yo=g?YE:XE,Ne=Math.sin(n[1]),ge=-Math.cos(n[1]),gt=JE(c),ae=Ne*gt.ahead[0]+ge*gt.ahead[1],Re=Ne*gt.back[0]+ge*gt.back[1],ue=f;Math.max(ae,Re)>.3&&(ue=ae>=Re?1:-1);let Kt=_?0:-s[2]*yo;l+=(Kt-l)*(1-Math.exp(-Math.min(me,.1)*5.5)),Kt===0&&Math.abs(l)<.01&&(l=0);let Mo=l*ue*Math.min(me,.1);_&&(s[0]=0,s[2]=0,Mo=0,l=0),Mo!==0&&(f=Math.sign(Mo)*Math.sign(-s[2]||1)),c=Math.max(0,Math.min(_d,c+Mo));let E=Ny(c);Xs.set(v,E[0]-i[0],0,E[1]-i[2]);let so=Xs.len(v);so===0&&p!==.25&&(p=(Math.abs((p+.5)%1-.5)-.25)*.8+.25,(p+.01)%.25<.02&&(p=.25));let Qe=p;if(p+=so/(g?QE:KE),i[1]=zy,Xs.add(i,i,v),w<1){w+=me/VE,w=Math.min(w,1);let Eo=rS(w);Xs.set(i,Ry(Eo,y[0],b[0]),i[1],Ry(Eo,y[2],b[2]))}r[0]=0,r[1]+=(n[1]-r[1])*Math.min(1,Math.min(me,.1)*eS),Math.abs(n[1]-r[1])<5e-4&&(r[1]=n[1]),Vs.identity(h),Vs.rotateX(h,h,0),Vs.rotateY(h,h,r[1]),Vs.translate(h,h,Xs.scale(ze,i,-1))}}}});var Iy=pt(($A,Py)=>{"use strict";var{skylightGLSL:aS,Z_START:sS,Z_END:iS,GLASS_Y:cS}=Pi(),{oculusGLSL:lS,A:Ys}=xa(),{windowLightGLSL:fS,C:Nh}=pr(),{doorLightGLSL:hS}=F0(),Rh=cr(),Pl=ah(),Md=Qi(),_a=t=>t.toFixed(4),Ed=.1,Sd=700,uc={exposure:.88,shafts:1,bloom:1,vignette:.42,grain:.032};function uS(t,e){let o=e[0],n=e[1],r=e[2],a=e[3],s=e[4],i=e[5],c=e[6],f=e[7],l=e[8],d=e[9],u=e[10],v=e[11],p=e[12],h=e[13],m=e[14],g=e[15],y=o*i-n*s,b=o*c-r*s,w=o*f-a*s,_=n*c-r*i,k=n*f-a*i,N=r*f-a*c,G=l*h-d*p,C=l*m-u*p,X=l*g-v*p,q=d*m-u*h,ot=d*g-v*h,D=u*g-v*m,K=y*D-b*ot+w*q+_*X-k*C+N*G;return K?(K=1/K,t[0]=(i*D-c*ot+f*q)*K,t[1]=(r*ot-n*D-a*q)*K,t[2]=(h*N-m*k+g*_)*K,t[3]=(u*k-d*N-v*_)*K,t[4]=(c*X-s*D-f*C)*K,t[5]=(o*D-r*X+a*C)*K,t[6]=(m*w-p*N-g*b)*K,t[7]=(l*N-u*w+v*b)*K,t[8]=(s*ot-i*X+f*G)*K,t[9]=(n*X-o*ot-a*G)*K,t[10]=(p*k-h*w+g*y)*K,t[11]=(d*w-l*k-v*y)*K,t[12]=(i*C-s*q-c*G)*K,t[13]=(o*q-n*C+r*G)*K,t[14]=(h*b-p*_-m*y)*K,t[15]=(l*_-d*b+u*y)*K,t):null}function dS(t,e,o){let n=new Array(16);for(let r=0;r<4;r++)for(let a=0;a<4;a++){let s=0;for(let i=0;i<4;i++)s+=e[i*4+a]*o[r*4+i];n[r*4+a]=s}for(let r=0;r<16;r++)t[r]=n[r];return t}var pS=`
precision highp float;
attribute vec2 position;
varying vec2 uv;
void main() {
	uv = position * 0.5 + 0.5;
	gl_Position = vec4(position, 0.0, 1.0);
}`;Py.exports=(t,e)=>{let o=!!e.isPhone,n=t.hasExtension("webgl_depth_texture"),r=o?10:18,a=()=>e.post>=2?2:4,s=lt=>t.texture(Object.assign({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"},lt||{})),i=()=>t.framebuffer({color:s(),depth:!1}),c=s(),f=n?t.texture({width:4,height:4,format:"depth",type:"uint32"}):null,l=t.framebuffer({color:c,depth:f||!0}),d=[i(),i()],u=[i(),i()],v=[i(),i()],p=[i(),i()],h=new Array(16).fill(0),m=new Array(16).fill(0),g=[0,0,0],y={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},b={position:[-1,-1,3,-1,-1,3]},w=(lt,Bt,Ge)=>t(Object.assign({vert:pS,frag:lt,attributes:b,count:3,depth:{enable:!1,mask:!1},cull:{enable:!1},blend:{enable:!1},uniforms:Bt,framebuffer:t.prop("out")},Ge||{})),_=[2.6,0,sS-3.2,12.6,cS,iS+.4],k=[Ys.x0-.2,0,Ys.z0,Ys.x1,Ys.domeTop,Ys.z1],N=[Nh.x0,0,Nh.z0,Nh.x1,7.6,Nh.z1],G=[.35,0,.35,13.65,7.6,9],C=Md.AIR_BOX,X=lt=>`vec3(${_a(lt[0])}, ${_a(lt[1])}, ${_a(lt[2])}), vec3(${_a(lt[3])}, ${_a(lt[4])}, ${_a(lt[5])})`,q=w(`
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

	${aS()}
	${lS()}
	${fS()}
	${hS()}
	${Md.sunGLSL()}

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
			vec2 t = hitBox(eye, rd, ${X(_)});
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
			vec2 t = hitBox(eye, rd, ${X(k)});
			t.y = min(t.y, len);
			if (t.y > t.x) {
				float st = (t.y - t.x) / float(N);
				float acc = 0.0;
				for (int i = 0; i < N; i++) {
					vec3 p = eye + rd * (t.x + (float(i) + jit) * st);
					if (p.y < ${_a(Ys.dome.base)} && p.x > ${_a(Ys.x0-.1)}) acc += oculusOpen(p) * treeShade(p) * air(p);
				}
				float ph = phase(dot(rd, SHAFT), 0.6) + 0.05;
				sum += mix(vec3(1.0, 0.88, 0.68), vec3(0.62, 0.74, 1.0) * 1.2, night) * acc * st * ph * strength.y;
			}
		}

		// the corridor windows
		if (strength.z > 0.0) {
			vec2 t = hitBox(eye, rd, ${X(N)});
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
			vec2 t = hitBox(eye, rd, ${X(G)});
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
			vec2 t = hitBox(eye, rd, ${X(C)});
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
	}`,{depthTex:()=>f,invVP:()=>h,eye:()=>g,time:t.context("time"),night:()=>Rh.night,strength:()=>ot,strength5:()=>D}),ot=[0,0,0,0],D=0;function K(){let lt=uc.shafts*y.shafts,Bt=Rh.night;return ot[0]=Pl.box(_)?.06*lt*(1+.9*Bt):0,ot[1]=Pl.box(k,!1,"court")?.1*lt*(1+.9*Bt):0,ot[2]=Pl.box(N)?.07*lt*(1+.4*Bt):0,ot[3]=Pl.box(G)?.04*lt*(1-.75*Bt):0,Pl.zone==="studio"?(ot[0]=ot[1]=ot[2]=ot[3]=0,D=.03*lt*(1+.6*Bt)*(1-.92*Md.raining())):D=0,ot[0]+ot[1]+ot[2]+ot[3]+D>5e-4}let Et=w(`
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
	}`,{src:t.prop("src"),dir:(lt,Bt)=>[Bt.dir[0]/Bt.size[0],Bt.dir[1]/Bt.size[1]]}),Ht=w(`
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
	}`,{src:t.prop("src"),texel:(lt,Bt)=>[.5/Bt.size[0],.5/Bt.size[1]],threshold:t.prop("threshold")}),Lt=w(`
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
		return 2.0 * ${_a(Ed)} * ${_a(Sd)} / (${_a(Sd+Ed)} - z * ${_a(Sd-Ed)});
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
	}`,{scene:()=>c,depthTex:()=>f||c,soft:()=>d[0],bloomA:()=>u[0],bloomB:()=>v[0],shafts:()=>p[0],res:()=>[l.width,l.height],time:t.context("time"),exposure:()=>uc.exposure*y.exposure,vignette:()=>Math.min(1,uc.vignette+y.vignette+.22*Rh.night),night:()=>Rh.night,grain:()=>uc.grain,bloomK:()=>uc.bloom,letterbox:()=>y.letterbox,fade:()=>y.fade,fadeColor:()=>y.fadeColor,aperture:()=>e.post>=2?y.aperture:0,focus:()=>y.focus,hasDepth:n?1:0},{framebuffer:null}),xt=t({framebuffer:()=>l});return{shot:y,look:uc,hasDepth:n,capture(lt,Bt,Ge){let Ce=Math.max(.4,Math.min(1,e.scale||1)),Xe=Math.max(2,Math.round(lt.drawingBufferWidth*Ce/2)*2),we=Math.max(2,Math.round(lt.drawingBufferHeight*Ce/2)*2);(l.width!==Xe||l.height!==we)&&l.resize(Xe,we);let lo=Math.max(1,Math.ceil(Xe/2)),_o=Math.max(1,Math.ceil(we/2));d.forEach(Xo=>Xo.resize(lo,_o)),u.forEach(Xo=>Xo.resize(Math.max(1,Math.ceil(Xe/4)),Math.max(1,Math.ceil(we/4)))),v.forEach(Xo=>Xo.resize(Math.max(1,Math.ceil(Xe/8)),Math.max(1,Math.ceil(we/8)))),p.forEach(Xo=>Xo.resize(Math.max(1,Math.ceil(Xe/a())),Math.max(1,Math.ceil(we/a())))),dS(m,Bt.proj,Bt.view),uS(h,m),g[0]=Bt.eye[0],g[1]=Bt.eye[1],g[2]=Bt.eye[2],xt(()=>{t.clear({color:[0,0,0,1],depth:1}),Ge()})},present(){let lt=Bt=>[Bt.width,Bt.height];n&&e.post>=1&&K()?(q({out:p[0]}),Et({out:p[1],src:p[0],dir:[1,0],size:lt(p[0])}),Et({out:p[0],src:p[1],dir:[0,1],size:lt(p[0])})):t.clear({color:[0,0,0,1],framebuffer:p[0]}),Ht({out:d[0],src:c,size:[l.width,l.height],threshold:0}),Et({out:d[1],src:d[0],dir:[1,0],size:lt(d[0])}),Et({out:d[0],src:d[1],dir:[0,1],size:lt(d[0])}),Ht({out:u[0],src:d[0],size:lt(d[0]),threshold:.42}),Et({out:u[1],src:u[0],dir:[1,0],size:lt(u[0])}),Et({out:u[0],src:u[1],dir:[0,1],size:lt(u[0])}),Ht({out:v[0],src:u[0],size:lt(u[0]),threshold:0}),Et({out:v[1],src:v[0],dir:[1.5,0],size:lt(v[0])}),Et({out:v[0],src:v[1],dir:[0,1.5],size:lt(v[0])}),Lt({out:null})}}}});var Gy=pt((FA,Dy)=>{"use strict";var $y=cr().GLSL,vS=Ts(),kd=F0(),{C:mS,FAR_DOOR:gS}=pr(),xS=100*Math.PI/180,Fy=t=>[gS.x-t[2],t[1],mS.zc-7+t[0]],qy=t=>[-t[2],t[1],t[0]];function yS(t){let e=[],o=[],n=[],r=[],a=vS.createBuilder(e,o,n,r);kd.addFrames(a,t);let s=kd.glassPanes(t),i=c=>{let f=[];for(let l=0;l<c.length;l+=3)f.push([c[l],c[l+1],c[l+2]]);return f};return{position:i(e),normal:i(o),elements:n,glass:s}}Dy.exports=t=>{let e=kd.DOOR,o=["left","right"].map(l=>{let d=yS(l),u=d.position.length;return{part:l,hinge:l==="left"?e.x0:e.x1,sign:l==="left"?-1:1,src:d.position.map(v=>v.slice()),srcN:d.normal.map(v=>v.slice()),srcG:d.glass.map(v=>v.slice()),pos:t.buffer({data:new Float32Array(u*3),usage:"dynamic"}),nrm:t.buffer({data:new Float32Array(u*3),usage:"dynamic"}),gpos:t.buffer({data:new Float32Array(d.glass.length*3),usage:"dynamic"}),gnrm:t.buffer({data:new Float32Array(d.glass.length*3),usage:"dynamic"}),el:t.elements({data:new Uint32Array(d.elements),type:"uint32"}),glassCount:d.glass.length,outP:new Float32Array(u*3),outN:new Float32Array(u*3),outG:new Float32Array(d.glass.length*3),outGN:new Float32Array(d.glass.length*3)}}),n=null;function r(l){if(l!==n){n=l;for(let d of o){let u=d.sign*l,v=Math.cos(u),p=Math.sin(u),h=y=>{let b=y[0]-d.hinge,w=y[2];return[d.hinge+b*v+w*p,y[1],-b*p+w*v]},m=y=>[y[0]*v+y[2]*p,y[1],-y[0]*p+y[2]*v];d.src.forEach((y,b)=>{let w=Fy(h(y));d.outP.set(w,b*3),d.outN.set(qy(m(d.srcN[b])),b*3)});let g=qy(m([0,0,1]));d.srcG.forEach((y,b)=>{d.outG.set(Fy(h(y)),b*3),d.outGN.set(g,b*3)}),d.pos.subdata(d.outP),d.nrm.subdata(d.outN),d.gpos.subdata(d.outG),d.gnrm.subdata(d.outGN)}}}r(0);let a=`
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
		${$y}
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
		${$y}
		varying vec3 v_pos, v_n, v_eye;
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			float c = abs(dot(V, normalize(v_n)));
			float fres = pow(1.0 - c, 3.0);
			float d = (v_pos.x + v_pos.z) * 0.55 + v_pos.y * 0.85;
			float sheen = smoothstep(0.35, 0.0, abs(fract(d * 0.22) - 0.5)) * 0.05;
			float a = 0.05 + 0.32 * fres + sheen;
			gl_FragColor = vec4(toNight(mix(vec3(0.80, 0.86, 0.90), vec3(1.0, 0.95, 0.86), 0.4), 0.22), a);
		}`,attributes:{position:t.prop("pos"),normal:t.prop("nrm")},count:t.prop("count"),cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}}),c=0,f=()=>{r(c*xS);for(let l of o)s({pos:l.pos,nrm:l.nrm,el:l.el})};return f.glass=()=>{for(let l of o)i({pos:l.gpos,nrm:l.gnrm,count:l.glassCount})},f.setOpen=l=>{c=l||0},f.openNow=()=>c,f}});var Uy=pt((qA,Hy)=>{"use strict";var bS=cr().GLSL,{skylightGLSL:wS}=Pi(),{oculusGLSL:_S}=xa(),{windowLightGLSL:MS}=pr(),Ba=.22;function ES(){let t=[],e=[],o=[],n=[],s=(l,d)=>{let u=Ba*.2*Math.pow(Math.sin(Math.PI*Math.pow(l,.85)),.9)*(d>0?1.06:.94),v=l*Ba-Ba*.12,p=d*u,h=Math.abs(d)*u*.42-.14*l*l*Ba;h+=Math.sin(l*17+(d>0?0:2.1))*.012*Ba*d*d;let m=(l-.3)*.55,g=Math.cos(m),y=Math.sin(m),b=h*g-p*y,w=h*y+p*g;return[v,b,w+.05*Ba*l*l]},i=(l,d)=>{let v=s(Math.min(1,l+.01),d),p=s(Math.max(0,l-.01),d),h=s(l,Math.min(1,d+.01)),m=s(l,Math.max(-1,d-.01)),g=[v[0]-p[0],v[1]-p[1],v[2]-p[2]],y=[h[0]-m[0],h[1]-m[1],h[2]-m[2]],b=[y[1]*g[2]-y[2]*g[1],y[2]*g[0]-y[0]*g[2],y[0]*g[1]-y[1]*g[0]],w=Math.hypot(b[0],b[1],b[2])||1,_=b[1]<0?-1:1;return[b[0]/w*_,b[1]/w*_,b[2]/w*_]};for(let l=0;l<=18;l++){let d=l/18;for(let u=0;u<=5*2;u++){let v=u/5-1;t.push(s(d,v)),e.push(i(Math.min(.97,Math.max(.03,d)),v)),o.push([d,v])}}let c=5*2+1;for(let l=0;l<18;l++)for(let d=0;d<c-1;d++){let u=l*c+d,v=u+1,p=u+c,h=p+1;n.push([u,p,v],[v,p,h])}let f=t.length;return t.push([-Ba*.12,0,-.003],[-Ba*.12,0,.003],[-Ba*.24,-.01,.0015],[-Ba*.24,-.01,-.0015]),e.push([0,1,0],[0,1,0],[0,1,0],[0,1,0]),o.push([0,0],[0,0],[-.1,0],[-.1,0]),n.push([f,f+2,f+1],[f,f+3,f+2]),{pos:t,nrm:e,uv:o,idx:n}}Hy.exports=t=>{let e=ES(),o=t({vert:`
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
		${bS}
		uniform float time;
		uniform float yScale, visible;
		varying vec3 v_pos, v_normal;
		varying vec2 v_uv;
		varying vec3 v_eye;

		${wS()}
		${_S()}
		${MS()}

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
		}`,attributes:{position:e.pos,normal:e.nrm,uv:e.uv},elements:e.idx,uniforms:{model:t.prop("model"),visible:1},cull:{enable:!1}}),n=cr(),r=t({vert:`
		precision highp float;
		uniform mat4 proj, view, model;
		uniform float yScale;
		attribute vec2 corner;
		varying vec2 v_uv;
		void main() {
			vec3 c = (model * vec4(${(Ba*.35).toFixed(3)}, 0.0, 0.0, 1.0)).xyz;
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{model:t.prop("model"),night:()=>n.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(a){a&&a.visible&&(o({model:a.model}),n.night>.01&&r({model:a.model}))}}});var Wy=pt((DA,jy)=>{"use strict";var{skylightGLSL:SS,Z_START:By,Z_END:kS}=Pi(),{oculusGLSL:TS,A:dc}=xa(),{windowLightGLSL:AS,C:Ks}=pr();jy.exports=(t,e)=>{let o=e.isPhone?900:2600,n=e.isPhone?350:900,r=e.isPhone?450:1300,a=e.isPhone?13:22,s=7,i=()=>(s=s*16807%2147483647,(s-1)/2147483646),c=Ks.x0+.6,f=Ks.x1-.3,l=[];for(let p=0;p<o;p++)l.push([2.5+i()*10.5,.3+i()*8,By-3.5+i()*(kS-By+4.5),i()]);for(let p=0;p<n;p++)l.push([dc.x0+.3+i()*(dc.x1-dc.x0-.6),.3+i()*7.5,dc.z0+.3+i()*(dc.z1-dc.z0-.6),i()]);for(let p=0;p<r;p++)l.push([c+i()*(f-c),.2+i()*5.6,Ks.z0+.25+i()*(Ks.z1-Ks.z0-.5),i()]);let d=p=>p.toFixed(4),u=[[0,-50,0,0],[0,-50,0,0],[0,-50,0,0],[0,-50,0,0]],v=t({vert:`
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

		${SS()}
		${TS()}
		${AS()}

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
				p.z = clamp(p.z, ${d(Ks.z0+.1)}, ${d(Ks.z1-.1)});
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
		}`,attributes:{seed:l},count:l.length,primitive:"points",uniforms:{time:t.context("time"),pixelScale:p=>p.viewportHeight*.006,focus:(p,h)=>h&&h.focus||6,aperture:(p,h)=>h&&h.aperture||0,wake0:(p,h)=>(h&&h.wake||u)[0],wake1:(p,h)=>(h&&h.wake||u)[1],wake2:(p,h)=>(h&&h.wake||u)[2],wake3:(p,h)=>(h&&h.wake||u)[3],wakeDir:(p,h)=>h&&h.wakeDir||[0,0,1],gust:(p,h)=>h&&h.gust||[0,0]},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});return p=>v(p||{})}});var Zy=pt((GA,Qy)=>{"use strict";var{C:Ky}=pr(),Vy=cr(),Xy=15.3,LS=37.1,Yy=Ky.z1+.9,zS=Ky.z1+.7+16-.6;Qy.exports=(t,e)=>{let o=e.isPhone?36:80,n=11,r=()=>(n=n*16807%2147483647,(n-1)/2147483646),a=[];for(let f=0;f<o;f++){let l=.35+Math.pow(r(),1.8)*2.4;a.push([Xy+r()*(LS-Xy),l,Yy+r()*(zS-Yy),r()])}let s=[],i=[];a.forEach(f=>{[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(l=>{s.push(l[0],l[1]),i.push(...f)})});let c=t({vert:`
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
		}`,attributes:{corner:s,seed:i},count:s.length/2,uniforms:{time:t.context("time"),night:()=>Vy.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(){Vy.night>.01&&c()}}});var Ph=pt((HA,ia)=>{"use strict";var Jy=cr(),i0=B0(),NS=Vi(),is=Math.PI,he=t=>(+t).toFixed(4),ja=t=>`vec3(${he(t[0])}, ${he(t[1])}, ${he(t[2])})`,Vo={x0:-2.05,z0:41.45,z1:47.55,top:5.1},wo=-.55,Wn=-2,ln=42.25,On=43.65,Sa=45.35,Ir=46.75,or=2.75,aa=.12,RS=(wo+Wn)/2,Fo={x:-1.3,y:1.42,w:.42,h:.52,z:On,cell:.026},qe={x0:-1.85,x1:-.75,top:.98,z0:On-.3,z1:On-.02},Ma={x0:-1.44,x1:-1.16,y0:qe.top-.002,y1:qe.top+.018},sa={cx:-1.3,cz:On-.165,w:.2,d:.255,y:qe.top+.0012},ur={x:-1.03,z:On-.14,r:.042,h:.075},Qo={x:-.86,z:On-.12,h:.085,r:.019};Qo.flame=[Qo.x,qe.top+.012+Qo.h+.028,Qo.z];var Oh={a:[ur.x-.004,qe.top+.03,ur.z+.004],b:[ur.x-.13,qe.top+.34,ur.z-.12]},fn=[-1.5,2.42,44.66],Cn=[-1.78,1.95,ln+.09],Ea={x:-1.32,z:44.08,y:.64,heading:.32},o5={window:{eye:[-1.3,1.33,42.8],target:[Fo.x,1.37,On],fov:54},paper:{eye:[-1.3,1.4,43.23],target:[sa.cx,qe.top,sa.cz+.01],fov:40},front:{eye:[1.6,1.62,43],target:[-.9,1.35,43],fov:55},bay:{eye:[4.2,2.1,44.6],target:[-1,1.9,44.5],fov:55}},Mr={z0:(ln+On)/2+.03,z1:(ln+On)/2+.56,y0:.98,y1:1.78,x:wo+.03,cell:.047};o5.peek={eye:[-1.2,1.42,42.95],target:[i0.PLAY.stoolX-i0.OFF[0],.85,i0.PLAY.keyFront+.2],fov:30};var ss={ink:null,inkDirty:!1,fold:0,slide:0,shown:!0,active:!1};function t5(){return`
	// a quatrefoil hole in the brass (g: metres across the window from its centre)
	float grilleHole(vec2 g) {
		vec2 q = fract(g / ${he(Fo.cell)} + 0.5) - 0.5;
		float d = min(min(length(q - vec2(0.17, 0.0)), length(q + vec2(0.17, 0.0))),
		              min(length(q - vec2(0.0, 0.17)), length(q + vec2(0.0, 0.17))));
		d = min(d, length(q) - 0.04);
		return 1.0 - smoothstep(0.15, 0.19, d);
	}
	// how much of the lamp's light reaches p (on the penitent's side) through the window
	float throughGrille(vec3 p, float soft) {
		vec3 d = p - ${ja(fn)};
		if (d.z > -0.001) return 0.0;
		float t = (${he(Fo.z)} - ${he(fn[2])}) / d.z;
		vec2 g = (${ja(fn)} + d * t).xy - vec2(${he(Fo.x)}, ${he(Fo.y)});
		float inWin = (1.0 - smoothstep(${he(Fo.w/2-.01)}, ${he(Fo.w/2)} + soft, abs(g.x))) *
		              (1.0 - smoothstep(${he(Fo.h/2-.01)}, ${he(Fo.h/2)} + soft, abs(g.y)));
		// the lamp is not a point: the pattern blurs the further it falls
		// from the brass
		float pen = 0.045 * abs(p.z - ${he(Fo.z)}) / abs(${he(Fo.z)} - ${he(fn[2])}) / ${he(Fo.cell)};
		vec2 qc = fract(g / ${he(Fo.cell)} + 0.5) - 0.5;
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
		vec3 c = ${ja(Qo.flame)};
		vec3 d = c - p;
		float s = 1.0;
		// the pot: a short upright cylinder
		vec2 a = vec2(${he(ur.x)}, ${he(ur.z)}) - p.xz;
		vec2 dd = d.xz;
		float t = clamp(dot(a, dd) / max(dot(dd, dd), 1e-5), 0.0, 1.0);
		float r = length(p.xz + dd * t - vec2(${he(ur.x)}, ${he(ur.z)}));
		float y = p.y + d.y * t;
		s *= mix(1.0, 0.25, (1.0 - smoothstep(${he(ur.r*.7)}, ${he(ur.r*1.6)}, r)) * (1.0 - smoothstep(${he(qe.top+ur.h*.8)}, ${he(qe.top+ur.h*1.3)}, y)));
		// the quill: a thin capsule
		vec3 qa = ${ja(Oh.a)}, qb = ${ja(Oh.b)};
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
		bool inB1 = p.z < ${he(On)} && p.z > ${he(ln-.04)} && p.x < ${he(wo+.02)};
		bool inPriest = p.z >= ${he(On)} && p.z < ${he(Sa)} && p.x < ${he(wo)};
		bool inB2 = p.z >= ${he(Sa)} && p.z < ${he(Ir+.04)} && p.x < ${he(wo)};
		// how open to the hall it is
		float open = 1.0;
		if (inB1) open = mix(0.7, 1.1, smoothstep(${he(Wn)}, ${he(wo)}, p.x));
		if (inPriest) open = 0.16;
		if (inB2) open = 0.10;
		// deeper into the bay, a little less of the hall's light
		open *= mix(0.62, 1.0, smoothstep(${he(Vo.x0)}, 0.3, p.x));
		// the stair hall's candlelight (it stands there now: see stairhall.js)
		vec3 rs;
		vec3 col = roomLight(p + ${ja(i0.OFF)}, N, V, gloss, rs) * 1.25 * open;
		spec += rs * open;
		// the lamp, warm, behind the brass
		vec3 Ld = ${ja(fn)} - p;
		float dl = length(Ld);
		vec3 L = Ld / dl;
		float T = inPriest ? 1.0 : (inB1 ? throughGrille(p, 0.0) : 0.0);
		vec3 lampCol = vec3(1.0, 0.70, 0.40) * mix(3.2, 1.0, night);
		vec3 lamp = lampCol * T * max(dot(N, L), 0.0) / (1.0 + dl * dl * 1.6);
		col += lamp;
		spec += lampCol * T * pow(max(dot(N, normalize(L + V)), 0.0), mix(8.0, 60.0, gloss)) * gloss / (1.0 + dl * dl * 1.6);
		// the little lamp in the open booth
		if (inB1) {
			vec3 Sd = ${ja(Cn)} - p;
			float ds = length(Sd);
			vec3 Ls = Sd / ds;
			vec3 sc = vec3(1.0, 0.72, 0.42) * mix(1.5, 0.35, night);
			col += sc * (max(dot(N, Ls), 0.0) * 0.8 + 0.2) / (0.15 + ds * ds * 1.6);
			spec += sc * pow(max(dot(N, normalize(Ls + V)), 0.0), mix(8.0, 60.0, gloss)) * gloss * 0.6 / (0.15 + ds * ds * 1.6);
		}
		// the candle
		if (night > 0.01) {
			vec3 Cd = ${ja(Qo.flame)} - p;
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
	}`}var jn={WOOD:0,CARVED:1,VELVET:2,CUSHION:3,BRASS:4,INKGLASS:5,QUILL:6,LAMPGLASS:7,DARKWOOD:8};function n5(){let t=[],e=[],o=[],n=[],r=[],a=(f,l)=>[f[0]-l[0],f[1]-l[1],f[2]-l[2]],s=(f,l)=>[f[1]*l[2]-f[2]*l[1],f[2]*l[0]-f[0]*l[2],f[0]*l[1]-f[1]*l[0]],i=f=>{let l=Math.hypot(f[0],f[1],f[2])||1;return[f[0]/l,f[1]/l,f[2]/l]},c={pos:t,nrm:e,kind:o,uv:n,idx:r,norm:i,cross:s,sub:a};return c.v=(f,l,d,u)=>(t.push(f[0],f[1],f[2]),e.push(l[0],l[1],l[2]),o.push(d),n.push(u?u[0]:0,u?u[1]:0),t.length/3-1),c.quad=(f,l,d,u,v,p)=>{let h=i(s(a(l,f),a(u,f)));p=p||[[0,0],[1,0],[1,1],[0,1]];let m=c.v(f,h,v,p[0]),g=c.v(l,h,v,p[1]),y=c.v(d,h,v,p[2]),b=c.v(u,h,v,p[3]);r.push(m,g,y,m,y,b)},c.box=(f,l,d,u,v,p,h)=>{let m=(g,y,b,w,_,k,N,G)=>c.quad(g,y,b,w,h,[[_,N],[k,N],[k,G],[_,G]]);m([u,l,d],[u,l,p],[u,v,p],[u,v,d],d,p,l,v),m([f,l,p],[f,l,d],[f,v,d],[f,v,p],p,d,l,v),m([f,v,d],[u,v,d],[u,v,p],[f,v,p],f,u,d,p),m([f,l,p],[u,l,p],[u,l,d],[f,l,d],f,u,p,d),m([f,l,p],[u,l,p],[u,v,p],[f,v,p],f,u,l,v),m([u,l,d],[f,l,d],[f,v,d],[u,v,d],u,f,l,v)},c.tube=(f,l,d,u)=>{u=u||6;let v=t.length/3;for(let p=0;p<f.length;p++){let h=f[Math.max(0,p-1)],m=f[Math.min(f.length-1,p+1)],g=i(a(m,h)),y=Math.abs(g[1])>.9?[1,0,0]:[0,1,0],b=i(s(g,y)),w=s(b,g),_=typeof l=="function"?l(p/(f.length-1)):l;for(let k=0;k<=u;k++){let N=k/u*is*2,G=Math.cos(N),C=Math.sin(N),X=[b[0]*G+w[0]*C,b[1]*G+w[1]*C,b[2]*G+w[2]*C];c.v([f[p][0]+X[0]*_,f[p][1]+X[1]*_,f[p][2]+X[2]*_],X,d,[p/(f.length-1),k/u])}}for(let p=0;p<f.length-1;p++)for(let h=0;h<u;h++){let m=v+p*(u+1)+h,g=m+u+1;r.push(m,m+1,g,m+1,g+1,g)}},c.lathe=(f,l,d,u,v)=>{v=v||20;let p=t.length/3;for(let h=0;h<d.length;h++){let[m,g]=d[h],y=d[Math.max(0,h-1)],b=d[Math.min(d.length-1,h+1)],w=b[0]-y[0],_=b[1]-y[1];for(let k=0;k<=v;k++){let N=k/v*is*2,G=Math.cos(N),C=Math.sin(N),X=i([_*G,-w,_*C]);c.v([f+G*m,g,l+C*m],X,u,[k/v,h/(d.length-1)])}}for(let h=0;h<d.length-1;h++)for(let m=0;m<v;m++){let g=p+h*(v+1)+m,y=g+v+1;r.push(g,y,g+1,g+1,y,y+1)}},c.spire=(f,l,d,u,v,p)=>{let h=[[-u,-u],[u,-u],[u,u],[-u,u]];for(let m=0;m<4;m++){let g=h[m],y=h[(m+1)%4],b=[f+g[0],d,l+g[1]],w=[f+y[0],d,l+y[1]],_=[f,v,l],k=i(s(a(_,b),a(w,b))),N=c.v(b,k,p,[0,0]),G=c.v(w,k,p,[1,0]),C=c.v(_,k,p,[.5,1]);r.push(N,C,G)}},c.orient=()=>{for(let f=0;f<r.length;f+=3){let[l,d,u]=[r[f],r[f+1],r[f+2]],v=m=>[t[m*3],t[m*3+1],t[m*3+2]],p=s(a(v(d),v(l)),a(v(u),v(l))),h=[0,1,2].map(m=>e[l*3+m]+e[d*3+m]+e[u*3+m]);p[0]*h[0]+p[1]*h[1]+p[2]*h[2]<0&&(r[f+1]=u,r[f+2]=d)}return c},c}function Ch(t,e,o,n){if(t<=e)return o;let r=t-e;return r>=n?0:Math.max(0,Math.sqrt(n*n-r*r)-(n-o))}var sn={ys:1.78,a:.56,r:.78};sn.apex=sn.ys+Math.sqrt(sn.r*sn.r-(sn.r-sn.a)*(sn.r-sn.a));function CS(){let t=n5(),e=jn.WOOD,o=jn.CARVED,n=jn.DARKWOOD,r=.06;t.box(Wn,0,ln,wo+.08,aa,Ir,n),t.box(Wn,or-.06,ln-.04,wo+.1,or,Ir+.04,e),t.box(wo,or-.2,ln-.06,wo+.12,or-.06,Ir+.06,e),t.box(wo+.02,or,ln-.08,wo+.14,or+.07,Ir+.08,n),t.box(Wn,aa,ln,Wn+.04,or-.06,Ir,e);for(let[l,d,u]of[[ln-r,ln,-1],[Ir,Ir+r,1]]){t.box(Wn,0,l,wo+.08,or,d,e);let v=u<0?l-.018:d;t.box(Wn+.18,.45,Math.min(v,v+.018),wo-.12,2.35,Math.max(v,v+.018),n),t.box(Wn+.26,.55,Math.min(v,v+.03*u),wo-.2,2.25,Math.max(v,v+.03*u),e)}{let l=On-.02,d=On+.02,u=Fo.x-Fo.w/2,v=Fo.x+Fo.w/2,p=Fo.y-Fo.h/2,h=Fo.y+Fo.h/2;t.box(Wn,aa,l,wo,Ma.y0,d,e),t.box(Wn,Ma.y0,l,Ma.x0,Ma.y1,d,e),t.box(Ma.x1,Ma.y0,l,wo,Ma.y1,d,e),t.box(Wn,Ma.y1,l,wo,p,d,e),t.box(Wn,p,l,u,h,d,e),t.box(v,p,l,wo,h,d,e),t.box(Wn,h,l,wo,or-.06,d,e);let m=.05,g=l-.025;t.box(u-m,p-m,g,v+m,p,l,n),t.box(u-m,h,g,v+m,h+m,l,n),t.box(u-m,p,g,u,h,l,n),t.box(v,p,g,v+m,h,l,n),t.box(u-m-.02,h+m,g-.015,v+m+.02,h+m+.03,l,e),t.box(Ma.x0-.01,Ma.y1,l-.006,Ma.x1+.01,Ma.y1+.008,l,jn.BRASS)}{let l=Mr,d=wo+.008,u=wo+.052;t.box(d,l.y0,l.z0-.035,u,l.y1,l.z0,n),t.box(d,l.y0,l.z0,u,l.y0+.04,l.z1,n),t.box(d,l.y1-.04,l.z0,u,l.y1,l.z1,n),t.box(d+.008,aa,l.z0-.035,u-.008,l.y0,l.z1,e),t.box(u-.008,aa+.12,l.z0+.03,u,l.y0-.08,l.z1-.06,n),t.box(d-.004,l.y0-.012,l.z0-.045,u+.012,l.y0,l.z1,jn.BRASS)}t.box(Wn,aa,Sa-.02,wo,or-.06,Sa+.02,e),t.box(qe.x0,qe.top-.035,qe.z0,qe.x1,qe.top,qe.z1,e),t.tube([[qe.x0,qe.top-.018,qe.z0],[qe.x1,qe.top-.018,qe.z0]],.02,e,8);for(let l of[qe.x0+.1,qe.x1-.1]){let d=[];for(let u=0;u<=8;u++){let v=u/8;d.push([l,qe.top-.04-.22*v,qe.z1-.02-.22*Math.cos(v*is/2)])}t.tube(d,.018,n,6)}t.box(Wn+.06,.12,ln,wo-.1,.44,ln+.42,n),t.box(Wn+.08,.44,ln+.01,wo-.12,.52,ln+.41,jn.CUSHION),t.box(Wn+.06,.12,Ir-.42,wo-.1,.44,Ir,n),t.box(Cn[0]-.05,Cn[1]-.16,ln,Cn[0]+.05,Cn[1]-.02,ln+.012,jn.BRASS),t.tube([[Cn[0],Cn[1]-.09,ln+.012],[Cn[0],Cn[1]-.09,Cn[2]-.01],[Cn[0],Cn[1]-.05,Cn[2]]],.006,jn.BRASS,6),t.lathe(Cn[0],Cn[2],[[0,Cn[1]-.05],[.028,Cn[1]-.035],[.034,Cn[1]+.01],[.024,Cn[1]+.06],[.026,Cn[1]+.065]],jn.LAMPGLASS,16),t.box(Ea.x-.22,.12,Ea.z-.24,Ea.x+.22,Ea.y-.05,Ea.z+.16,n),t.box(Ea.x-.24,Ea.y-.05,Ea.z-.26,Ea.x+.24,Ea.y,Ea.z+.18,jn.CUSHION),t.tube([[fn[0],or-.06,fn[2]],[fn[0],fn[1]+.07,fn[2]]],.005,jn.BRASS,5),t.lathe(fn[0],fn[2],[[0,fn[1]+.09],[.03,fn[1]+.08],[.02,fn[1]+.06]],jn.BRASS,12),t.lathe(fn[0],fn[2],[[0,fn[1]-.06],[.035,fn[1]-.04],[.045,fn[1]],[.035,fn[1]+.05],[.018,fn[1]+.07]],jn.LAMPGLASS,16);let a=wo,s=wo+r;function i(l,d,u){let v=(l+d)/2,p=40,h=[];for(let g=0;g<=p;g++)h.push(aa+(or-.2-aa)*g/p);let m=[];h.forEach(g=>m.push(g));for(let g=1;g<24;g++)m.push(sn.ys+(sn.apex-sn.ys)*g/24);m.sort((g,y)=>g-y);for(let g=0;g<m.length-1;g++){let y=m[g],b=m[g+1];if(b-y<1e-4)continue;let w=u?Ch(y,sn.ys,sn.a,sn.r):0,_=u?Ch(b,sn.ys,sn.a,sn.r):0,k=(N,G)=>[N,G];t.quad([s,y,v-w],[s,y,l],[s,b,l],[s,b,v-_],e,[k(v-w,y),k(l,y),k(l,b),k(v-_,b)]),t.quad([s,y,d],[s,y,v+w],[s,b,v+_],[s,b,d],e,[k(d,y),k(v+w,y),k(v+_,b),k(d,b)]),(w>0||_>0)&&(t.quad([a,y,v-w],[s,y,v-w],[s,b,v-_],[a,b,v-_],n),t.quad([s,y,v+w],[a,y,v+w],[a,b,v+_],[s,b,v+_],n),t.quad([a,y,l],[a,y,v-w],[a,b,v-_],[a,b,l],e),t.quad([a,y,v+w],[a,y,d],[a,b,d],[a,b,v+_],e))}if(t.box(a,or-.2,l,s,or-.06,d,e),t.box(s,or-.42,l+.05,s+.012,or-.24,d-.05,o),u){let g=[];for(let y=0;y<=30;y++){let b=y/30,w=b<.5?aa+(sn.apex-aa)*(b*2):sn.apex-(sn.apex-aa)*((b-.5)*2),_=b<.5?-1:1;g.push([s+.01,Math.min(w,sn.apex-.002),v+_*(Ch(w,sn.ys,sn.a,sn.r)+.03)])}t.tube(g,.022,n,6)}}i(ln,On,!0),i(Sa,Ir,!0);{let l=On,d=Sa,u=(l+d)/2;t.box(a,aa,l,s,or-.06,d,e);let v={ys:1.85,a:.55,r:.8},p=[];for(let h=0;h<=40;h++){let m=h/40,g=v.ys+Math.sqrt(v.r*v.r-(v.r-v.a)*(v.r-v.a)),y=m<.5?.35+(g-.35)*(m*2):g-(g-.35)*((m-.5)*2),b=m<.5?-1:1;p.push([s+.012,Math.min(y,g-.002),u+b*Ch(y,v.ys,v.a,v.r)])}p.push(p[0]),t.tube(p,.02,n,6),t.box(s,.95,u-.22,s+.015,1.3,u+.22,o),t.box(s,.35,u-.42,s+.01,.75,u+.42,n),t.tube([[s+.03,1.12,d-.13],[s+.06,1.12,d-.13],[s+.06,1.12,d-.2]],.009,jn.BRASS,6)}[ln-.02,On,Sa,Ir+.02].forEach((l,d)=>{let u=d===1||d===2,v=.075,p=or+(u?.62:.4);t.box(wo+.06,0,l-v,wo+.06+2*v,p,l+v,e),t.box(wo+.04,p-.04,l-v-.02,wo+.08+2*v,p,l+v+.02,n);let h=wo+.06+v,m=u?.62:.5;t.spire(h,l,p,v*.95,p+m,e);for(let g=1;g<=3;g++){let y=p+m*g/4.2,b=v*.95*(1-g/4.2)+.02;for(let[w,_]of[[1,0],[-1,0],[0,1],[0,-1]])t.tube([[h+w*(b-.02),y-.02,l+_*(b-.02)],[h+w*(b+.015),y+.03,l+_*(b+.015)]],.008,n,4)}t.lathe(h,l,[[0,p+m-.02],[.03,p+m+.03],[.022,p+m+.07],[0,p+m+.1]],e,10)});let f=(l,d,u)=>{let v=(l+d)/2,p=wo+.075,h=or+.07,m=h+u,g=[1,0,0],y=t.v([p,h,l],g,o,[l,h]),b=t.v([p,h,d],g,o,[d,h]),w=t.v([p,m,v],g,o,[v,m]);t.idx.push(y,b,w);let _=t.v([p-.04,h,l],[-1,0,0],e),k=t.v([p-.04,h,d],[-1,0,0],e),N=t.v([p-.04,m,v],[-1,0,0],e);t.idx.push(_,N,k);let G=[],C=[];for(let D=0;D<=10;D++){let K=D/10;G.push([p+.02,h+u*K,l+(v-l)*K]),C.push([p+.02,h+u*K,d+(v-d)*K])}t.tube(G,.022,n,6),t.tube(C,.022,n,6);for(let D=2;D<=8;D+=2)for(let K of[G[D],C[D]])t.tube([K,[K[0]+.01,K[1]+.06,K[2]+(K===G[D]?-.02:.02)]],.01,n,4);t.lathe(p,v,[[0,m],[.035,m+.06],[.022,m+.12],[0,m+.16]].map(([D,K])=>[D,K]),e,10);let X=Math.min(.17,u*.32),q=h+u*.38,ot=[];for(let D=0;D<=24;D++){let K=D/24*is*2;ot.push([p+.012,q+Math.sin(K)*X,v+Math.cos(K)*X])}t.tube(ot,.012,n,5)};f(ln-.02,On,.52),f(On,Sa,.82),f(Sa,Ir+.02,.52),t.lathe(ur.x,ur.z,[[0,qe.top],[.036,qe.top+.001],[ur.r,qe.top+.012],[ur.r*1.02,qe.top+.035],[.036,qe.top+.052],[.02,qe.top+.062],[.016,qe.top+.068]],jn.INKGLASS,24),t.lathe(ur.x,ur.z,[[.016,qe.top+.064],[.021,qe.top+.066],[.022,qe.top+.075],[.016,qe.top+.076],[0,qe.top+.072]],jn.BRASS,20);{let l=Oh.a,d=Oh.b,u=26,v=y=>{let b=Math.sin(y*is)*.025;return[l[0]+(d[0]-l[0])*y+b*.6,l[1]+(d[1]-l[1])*y+b*.4,l[2]+(d[2]-l[2])*y+b]},p=[];for(let y=0;y<=u;y++)p.push(v(y/u));t.tube(p,y=>.0028*(1-.7*y)+6e-4,jn.QUILL,5);let h=t.norm(t.sub(d,l)),m=t.norm(t.cross(h,[.2,1,.1])),g=t.cross(m,h);for(let y of[-1,1]){let b=t.pos.length/3;for(let w=0;w<=u;w++){let _=w/u,k=v(_),N=_<.28?0:(y>0?.03:.02)*Math.sin(is*Math.pow((_-.28)/.72,.75)),G=N*.25,C=[k[0]+m[0]*y*N-g[0]*G,k[1]+m[1]*y*N-g[1]*G,k[2]+m[2]*y*N-g[2]*G];t.v(k,g,jn.QUILL,[_,0]),t.v(C,g,jn.QUILL,[_,y])}for(let w=0;w<u;w++){let _=b+w*2;t.idx.push(_,_+2,_+1,_+1,_+2,_+3)}}}return t.orient()}function OS(t,e){let n=Vo.top,r=Vo.x0;t(r-.35,0,Vo.z0-.35,r,n+.35,Vo.z1+.35),t(r,0,Vo.z0-.35,-.35,n,Vo.z0),t(r,0,Vo.z1,-.35,n,Vo.z1+.35),t(r,n,Vo.z0,-.35,n+.35,Vo.z1),t(.35,0,Vo.z0-.42,.35+.16,n,Vo.z0),t(.35,0,Vo.z1,.35+.16,n,Vo.z1+.42),t(.35,n,Vo.z0-.5,.35+.18,n+.42,Vo.z1+.5),t(.35,n+.42,Vo.z0-.6,.35+.26,n+.52,Vo.z1+.6),t(.35,0,Vo.z0-.5,.35+.22,.42,Vo.z0),t(.35,0,Vo.z1,.35+.22,.42,Vo.z1+.5),t(-.35-.01,0,Vo.z0,.35+.12,.02,Vo.z1),e(r,Vo.z0,-.35,Vo.z1)}ia.exports=t=>{let e=G0(),o=Jy.GLSL,n=CS(),r=`
	precision highp float;
	${o}
	uniform float time;
	${e.lanternGLSL()}
	${i0.roomGLSL()}
	${t5()}
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
		}`,attributes:{position:n.pos,normal:n.nrm,kind:n.kind,uv:n.uv},elements:n.idx});function i(Lt,xt,lt,Bt){let Ge=[],Ce=[],Xe=[],we=[],lo=[],Zt=wo-.02,me=sn.apex+.08,ze=aa+.015;for(let no=0;no<=40;no++){let yo=no/40,Ne=me+(ze-me)*yo;for(let ge=0;ge<=90;ge++){let gt=ge/90,ae=lt?.2+.13*yo*yo:xt-Lt,Re=Lt+gt*ae,ue=lt?.05+.02*yo:.035+.01*Math.sin(gt*7),Kt=gt*Bt*is*2+Math.sin(yo*2+gt*5)*.6,Mo=Zt-ue*(.5+.5*Math.sin(Kt))-(lt?.02*yo:0),so=[1,0,-(-ue*.5*Math.cos(Kt)*Bt*is*2/ae)],Qe=Math.hypot(so[0],so[1],so[2]);Ge.push(Mo,Ne,Re),Ce.push(so[0]/Qe,0,so[2]/Qe),Xe.push(2),we.push(Math.sin(Kt),yo)}}for(let no=0;no<40;no++)for(let yo=0;yo<90;yo++){let Ne=no*91+yo,ge=Ne+90+1;lo.push(Ne,ge,Ne+1,Ne+1,ge,ge+1)}for(let no=0;no<lo.length;no+=3){let[yo,Ne,ge]=[lo[no],lo[no+1],lo[no+2]],gt=Kt=>[Ge[Kt*3],Ge[Kt*3+1],Ge[Kt*3+2]],ae=[0,1,2].map(Kt=>gt(Ne)[Kt]-gt(yo)[Kt]),Re=[0,1,2].map(Kt=>gt(ge)[Kt]-gt(yo)[Kt]);ae[1]*Re[2]-ae[2]*Re[1]<0&&(lo[no+1]=ge,lo[no+2]=Ne)}return{pos:Ge,nrm:Ce,kind:Xe,uv:we,idx:lo}}let c=i(ln+.02,ln+.4,!0,6),f=i(Sa+.04,Ir-.04,!1,9),l={pos:c.pos.concat(f.pos),nrm:c.nrm.concat(f.nrm),kind:c.kind.concat(f.kind),uv:c.uv.concat(f.uv),idx:c.idx.concat(f.idx.map(Lt=>Lt+c.pos.length/3))},d=t({vert:`
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
		}`,attributes:{position:l.pos,normal:l.nrm,uv:l.uv},elements:l.idx}),u=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec2 corner;
		varying vec3 v_pos, v_eye;
		void main() {
			vec3 p = vec3(${he(Fo.x)} + corner.x * ${he(Fo.w/2)}, ${he(Fo.y)} + corner.y * ${he(Fo.h/2)}, ${he(Fo.z)});
			v_pos = p; v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`${r}
		varying vec3 v_pos, v_eye;
		void main() {
			vec2 g = v_pos.xy - vec2(${he(Fo.x)}, ${he(Fo.y)});
			float hole = grilleHole(g);
			if (hole > 0.5) discard;
			vec3 N = vec3(0.0, 0.0, v_eye.z < ${he(Fo.z)} ? -1.0 : 1.0);
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
			vec3 p = vec3(${he(Mr.x)}, ${he((Mr.y0+Mr.y1)/2)} + corner.y * ${he((Mr.y1-Mr.y0)/2-.04)}, ${he((Mr.z0+Mr.z1)/2)} + corner.x * ${he((Mr.z1-Mr.z0)/2)});
			v_pos = p; v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`${r}
		varying vec3 v_pos, v_eye;
		void main() {
			vec2 g = (v_pos.zy - vec2(${he((Mr.z0+Mr.z1)/2)}, ${he((Mr.y0+Mr.y1)/2)})) * ${he(Fo.cell/Mr.cell)};
			float hole = grilleHole(g);
			if (hole > 0.5) discard;
			vec3 N = vec3(v_eye.x < ${he(Mr.x)} ? -1.0 : 1.0, 0.0, 0.0);
			vec3 V = normalize(v_eye - v_pos);
			vec3 spec;
			vec3 light = boothLight(v_pos + N * 0.01, N, V, 0.8, spec);
			vec3 base = vec3(0.16, 0.10, 0.05);
			vec3 col = base * light + spec * 0.6;
			// the rims of the holes catch the candles in the hall beyond
			float edge = smoothstep(0.25, 0.5, hole);
			col += vec3(1.0, 0.62, 0.30) * edge * (N.x < 0.0 ? 0.30 : 0.10);
			gl_FragColor = vec4(col, 1.0);
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,cull:{enable:!1}}),p=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec2 corner;
		varying vec2 v_c;
		void main() {
			vec3 p = vec3(${he(Fo.x)} + corner.x * 0.75, ${he(Fo.y)} + corner.y * 0.9, ${he(Sa-.03)});
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),h=14,m=[];for(let Lt=0;Lt<h;Lt++)[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(xt=>m.push(xt[0],xt[1],(Lt+.5)/h));let g=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec3 c;
		varying vec3 v_pos;
		void main() {
			// slices across the booth, from the window back towards the bench
			vec3 p = vec3(${he(RS)} + c.x * ${he((wo-Wn)/2-.02)}, 0.9 + (c.y + 1.0) * 0.8, ${he(On-.03)} - c.z * 1.25);
			v_pos = p;
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`
		precision highp float;
		uniform float night, time;
		${t5().split("// the candle's light is hidden")[0]}
		varying vec3 v_pos;
		void main() {
			float T = throughGrille(v_pos, 0.0);
			float d = length(v_pos - ${ja(fn)});
			// dust drifting in the beam
			float dust = 0.65 + 0.35 * sin(v_pos.x * 23.0 + time * 0.3) * sin(v_pos.y * 17.0 - time * 0.21) * sin(v_pos.z * 19.0 + time * 0.17);
			vec3 col = vec3(1.0, 0.68, 0.36) * T * dust * 0.035 / (0.4 + d * d * 0.5) * mix(1.0, 0.7, night);
			gl_FragColor = vec4(col, 1.0);
		}`.replace("float grilleHole","float grilleHole"),attributes:{c:{buffer:t.buffer(m),size:3}},count:m.length/3,depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}}),y=(()=>{if(typeof document=="undefined")return null;let Lt=document.createElement("canvas");Lt.width=512,Lt.height=652;let xt=Lt.getContext("2d");xt.fillStyle="#cdb38a",xt.fillRect(0,0,Lt.width,Lt.height);let lt=7,Bt=()=>(lt=lt*1664525+1013904223>>>0,lt/4294967296);for(let Ce=0;Ce<2400;Ce++){xt.fillStyle=`rgba(${Bt()<.5?"90,62,30":"245,230,200"},${.03+Bt()*.05})`;let Xe=Bt()*Lt.width,we=Bt()*Lt.height;xt.fillRect(Xe,we,1+Bt()*14,1)}for(let Ce=0;Ce<26;Ce++){let Xe=Bt()*Lt.width,we=Bt()*Lt.height,lo=20+Bt()*90,_o=xt.createRadialGradient(Xe,we,0,Xe,we,lo);_o.addColorStop(0,`rgba(120,80,35,${.04+Bt()*.06})`),_o.addColorStop(1,"rgba(120,80,35,0)"),xt.fillStyle=_o,xt.fillRect(Xe-lo,we-lo,lo*2,lo*2)}let Ge=xt.createRadialGradient(Lt.width/2,Lt.height/2,Lt.width*.3,Lt.width/2,Lt.height/2,Lt.height*.72);return Ge.addColorStop(0,"rgba(110,70,30,0)"),Ge.addColorStop(1,"rgba(110,70,30,0.38)"),xt.fillStyle=Ge,xt.fillRect(0,0,Lt.width,Lt.height),Lt})(),b=y?t.texture({data:y,min:"linear",mag:"linear",flipY:!1}):t.texture(),w=t.texture({shape:[8,8],data:new Uint8Array(8*8*4)}),_=[18,24],k=[],N=[];for(let Lt=0;Lt<=_[1];Lt++)for(let xt=0;xt<=_[0];xt++)k.push(xt/_[0],Lt/_[1]);for(let Lt=0;Lt<_[1];Lt++)for(let xt=0;xt<_[0];xt++){let lt=Lt*(_[0]+1)+xt,Bt=lt+_[0]+1;N.push(lt,lt+1,Bt,lt+1,Bt+1,Bt)}let G=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale, fold, slide;
		attribute vec2 st;
		varying vec3 v_pos, v_n, v_eye;
		varying vec2 v_st;
		void main() {
			// s across (texture left = +x), t from the near edge (0) to the far (1)
			float s = st.x, t = st.y;
			float x = ${he(sa.cx+sa.w/2)} - s * ${he(sa.w)};
			float zNear = ${he(sa.cz-sa.d/2)};
			vec3 p = vec3(x, ${he(sa.y)}, zNear + t * ${he(sa.d)});
			vec3 n = vec3(0.0, 1.0, 0.0);
			// a slight cockle
			p.y += 0.0012 * sin(s * 7.0 + t * 3.0) * sin(t * 5.0);
			// the near half folds up and over onto the far half
			if (t < 0.5) {
				float a = fold * 3.14159 * 0.985;
				float dd = (0.5 - t) * ${he(sa.d)};
				float zf = zNear + 0.5 * ${he(sa.d)};
				p.z = zf - dd * cos(a);
				p.y = ${he(sa.y)} + dd * sin(a) + 0.0016 * fold;
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
			if (v_pos.z > ${he(On+.015)}) discard;
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
		}`,attributes:{st:{buffer:t.buffer(k),size:2}},elements:N,uniforms:{fold:()=>ss.fold,slide:()=>ss.slide,paperTex:b,inkTex:w},cull:{enable:!1}}),C=n5();C.lathe(Qo.x,Qo.z,[[0,qe.top],[.048,qe.top+.002],[.052,qe.top+.012],[.046,qe.top+.014],[.022,qe.top+.012],[0,qe.top+.012]],jn.BRASS,24),C.lathe(Qo.x,Qo.z,[[0,qe.top+.012],[Qo.r,qe.top+.012],[Qo.r*1.02,qe.top+.012+Qo.h*.6],[Qo.r,qe.top+.012+Qo.h],[Qo.r*.75,qe.top+.012+Qo.h-.004],[0,qe.top+.012+Qo.h-.008]],9,20),C.tube([[Qo.x,qe.top+.012+Qo.h-.008,Qo.z],[Qo.x+.001,qe.top+.012+Qo.h+.012,Qo.z]],.0012,8,4),C.orient();let X=t({vert:a,frag:`${r}
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
				float up = smoothstep(${he(qe.top+Qo.h*.4)}, ${he(qe.top+.012+Qo.h)}, v_pos.y);
				col += vec3(1.0, 0.55, 0.22) * up * 0.22 * candleFlicker();
			}
			gl_FragColor = vec4(col * night, 1.0);
		}`,attributes:{position:C.pos,normal:C.nrm,kind:C.kind,uv:C.uv},elements:C.idx}),q=t({vert:`
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
			vec3 p = ${ja(Qo.flame)} + right * corner.x * size.x + vec3(0.0, 1.0, 0.0) * corner.y * size.y;
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{halo:t.prop("halo")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),ot=[0,0],D=t({uniforms:{view:t.prop("view")}}),K=new Float32Array(16);function Et(Lt){NS.translate(K,Lt.view,i0.OFF),D({view:K},()=>Ht(Lt))}function Ht(Lt){let xt=Lt&&Lt.reflected;if(s(),d(),u(),v(),ss.ink&&ss.inkDirty){let lt=ss.ink;ot[0]!==lt.width||ot[1]!==lt.height?(w({data:lt,min:"linear",mag:"linear",flipY:!1}),ot=[lt.width,lt.height]):w.subimage(lt),ss.inkDirty=!1}ss.shown&&G(),Jy.night>.01&&(X(),xt||(q({halo:1}),q({halo:0}))),xt||(p(),g())}return Et};ia.exports.addBay=OS;ia.exports.BAY=Vo;ia.exports.OFF=i0.OFF;ia.exports.STATE=ss;var e5=t=>[t[0]+i0.OFF[0],t[1]+i0.OFF[1],t[2]+i0.OFF[2]];ia.exports.SHOTS=Object.fromEntries(Object.entries(o5).map(([t,e])=>[t,Object.assign({},e,{eye:e5(e.eye),target:e5(e.target)})]));ia.exports.SEAT=Ea;ia.exports.LAMP=fn;ia.exports.SCONCE=Cn;ia.exports.GRILLE=Fo;ia.exports.PAPER=sa;ia.exports.ZONE={FRONT:wo,BACK:Wn,ZA:ln,ZB:On,ZC:Sa,ZD:Ir}});var Td=pt((UA,a5)=>{"use strict";function PS(t){let e=t>>>0||1;return function(){return e=e*1664525+1013904223>>>0,e/4294967296}}var r5={stroke:.05,letter:.045,word:.15,comma:.28,stop:.45,line:.25,para:.6},IS=["th","ng","er"];function $S(t,e,o){o=Object.assign({ink:"#2a1d12",xh:14,speed:23,lineHeight:2.85,seed:7,width:.12,pace:.45},o||{});let n=t.getContext("2d"),r={};Object.keys(r5).forEach(h=>{r[h]=r5[h]*o.pace});let a=[],s=0,i=0,c=0,f=[];function l(h,m){let g=PS(o.seed),y=o.xh,b={},w=K=>{let Et=e[K];if(!Et)return null;let Ht=Math.floor(g()*Et.length);return Et.length>1&&Ht===b[K]&&(Ht=(Ht+1)%Et.length),b[K]=Ht,Et[Ht]},_=K=>{if(e[K])return{g:w(K),sc:1};let Et=K.toLowerCase();return e[Et]?{g:w(Et),sc:/[A-Z]/.test(K)?1.32:1}:null},k=[],N=.15,G=0,C=0,X=(g()-.5)*.02,q=m/y,ot=h.split(/\n\s*\n/);ot.forEach((K,Et)=>{K.replace(/\s+/g," ").trim().split(" ").forEach(Lt=>{let xt=[];for(let Ce=0;Ce<Lt.length;Ce++){let Xe=Lt.substr(Ce,2).toLowerCase();if(IS.indexOf(Xe)>=0&&e[Xe]&&g()<.55&&Lt[Ce]===Lt[Ce].toLowerCase()){xt.push({ch:Xe,gl:{g:w(Xe),sc:1}}),Ce++;continue}let we=_(Lt[Ce]);we&&we.g&&xt.push({ch:Lt[Ce],gl:we})}let lt=xt.map(()=>.17+g()*.07),Bt=xt.reduce((Ce,Xe,we)=>Ce+Xe.gl.g.w*Xe.gl.sc+lt[we],0);G>0&&G+Bt>q&&(G=0,C++,N+=r.line,X=(g()-.5)*.02),xt.forEach((Ce,Xe)=>{let we=Ce.gl.g,lo=Ce.gl.sc*(.95+g()*.1),_o=(g()-.5)*.06,Xo=(g()-.5)*.08+X*G,Zt=G,me=C*o.lineHeight+1.9+Xo,ze=Math.cos(_o),no=Math.sin(_o),yo=ge=>[(Zt+(ge[0]*ze-ge[1]*no)*lo)*y,(me+(ge[0]*no+ge[1]*ze)*lo)*y],Ne=(ge,gt)=>{let ae=0;for(let ue=1;ue<ge.length;ue++)ae+=Math.hypot(ge[ue][0]-ge[ue-1][0],ge[ue][1]-ge[ue-1][1]);let Re=Math.max(o.minDur||(gt?.06:.07),ae/(o.speed*y));k.push({pts:ge,L:ae,start:N,dur:Re,dot:gt}),N+=Re};if(we.s.forEach((ge,gt)=>{gt>0&&(N+=r.stroke),Ne(ge.map(yo),!1)}),we.dot){let ge=we.s[0][0];we.s.forEach(ae=>ae.forEach(Re=>{Re[1]<ge[1]&&(ge=Re)}));let gt=yo([ge[0]+.1,-1.36]);N+=r.stroke*1.4,Ne([gt,[gt[0]+y*.05,gt[1]+y*.03]],!0)}N+=r.letter*(.6+g()*.8),G+=we.w*lo+lt[Xe]});let Ge=Lt[Lt.length-1];N+=/[.!?]/.test(Ge)?r.stop:/[,;:]/.test(Ge)?r.comma:r.word,G+=.55+g()*.2}),Et<ot.length-1&&(G=0,C+=1.6,N+=r.para)});let D=(C+1)*o.lineHeight*y+y*1.55;return{strokes:k,total:N,height:D}}function d(h,m){if(o.fixed){let g=o.fixed;n.setTransform(1,0,0,1,g.mx,g.my),n.clearRect(-g.mx,-g.my,t.width,t.height)}else{let g=Math.min(window.devicePixelRatio||1,2);t.width=Math.round(h*g),t.height=Math.round(m*g),t.style.height=m+"px",t.style.width=h+"px",n.setTransform(g,0,0,g,0,0),n.clearRect(0,0,h,m)}n.strokeStyle=o.ink,n.fillStyle=o.ink,n.lineCap="round",n.lineJoin="round",o.shadow&&(n.shadowColor=o.shadow,n.shadowBlur=o.shadowBlur||6)}let u=h=>h<.5?2*h*h:1-Math.pow(-2*h+2,2)/2;function v(h,m){let g=f[h.i]||0;if(m<=g)return;let y=o.width*o.xh,b=0;for(let w=1;w<h.pts.length;w++){let _=h.pts[w-1],k=h.pts[w],N=Math.hypot(k[0]-_[0],k[1]-_[1]),G=b,C=b+N;if(b=C,C<=g||N===0)continue;if(G>=m)break;let X=Math.max(0,(g-G)/N),q=Math.min(1,(m-G)/N),ot=[_[0]+(k[0]-_[0])*X,_[1]+(k[1]-_[1])*X],D=[_[0]+(k[0]-_[0])*q,_[1]+(k[1]-_[1])*q],K=(G+C)/2/(h.L||1),Et=.72+.28*Math.sin(Math.PI*Math.min(1,Math.max(0,K)));n.lineWidth=y*Et,n.globalAlpha=.86+.14*Et,n.beginPath(),n.moveTo(ot[0],ot[1]),n.lineTo(D[0],D[1]),n.stroke()}h.dot&&g===0&&(n.globalAlpha=1,n.beginPath(),n.arc(h.pts[0][0],h.pts[0][1],y*.75,0,Math.PI*2),n.fill()),f[h.i]=m}function p(h){let m=(h-c)/1e3;for(let g=0;g<a.length;g++){let y=a[g];if(y.start>m)break;let b=Math.min(1,(m-y.start)/y.dur);v(y,u(b)*y.L)}if(o.onPen){let g=0;for(;g+1<a.length&&a[g+1].start<=m;)g++;a[g]&&o.onPen(a[g].pts[0][1])}m<s?i=requestAnimationFrame(p):o.onDone&&o.onDone()}return{write(h,m){cancelAnimationFrame(i);let g=o.fixed?t.width-2*o.fixed.mx:t.parentElement.clientWidth,y=l(h,g);a=y.strokes,s=y.total;let b=typeof o.maxTime=="function"?o.maxTime(h):o.maxTime;if(b&&s>b){let _=b/s;a.forEach(k=>{k.start*=_,k.dur*=_}),s=b}a.forEach((_,k)=>{_.i=k}),f=[],d(g,y.height);let w=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(m||w){a.forEach(_=>v(_,_.L));return}return c=performance.now(),i=requestAnimationFrame(p),s},finish(){cancelAnimationFrame(i),a.forEach(h=>v(h,h.L)),o.onDone&&o.onDone()},stop(){cancelAnimationFrame(i)}}}a5.exports=$S});var Ld=pt((BA,s5)=>{"use strict";var Ad=cr(),FS='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M5.5 18.5l1.7-1.7M16.8 7.2l1.7-1.7"/></svg>',qS='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M19.5 14.6A8 8 0 0 1 9.4 4.5a8 8 0 1 0 10.1 10.1z"/></svg>';s5.exports=function(e){let o=document.createElement("button");o.type="button",o.className=e+" light-toggle";let n=()=>{let r=Ad.isNight;o.innerHTML=r?FS:qS,o.setAttribute("aria-label",r?"Switch to day":"Switch to night"),o.title=r?"Day":"Night",o.setAttribute("aria-pressed",r?"true":"false")};return n(),Ad.onChange(n),["mousedown","pointerdown"].forEach(r=>o.addEventListener(r,a=>a.stopPropagation())),o.addEventListener("click",r=>{r.stopPropagation(),Ad.toggle()}),o}});var f5=pt((jA,l5)=>{"use strict";var Pn=Ph(),DS=B0(),GS=Td(),HS="81efb912-50a2-4fcd-b5e8-c3a28eecbe93",i5=100,T0=t=>Math.max(0,Math.min(1,t)),Yr=(t,e,o)=>{let n=T0((o-t)/(e-t));return n*n*(3-2*n)},Wa=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,ka=(t,e,o)=>t+(e-t)*o,$l=(t,e,o)=>[ka(t[0],e[0],o),ka(t[1],e[1],o),ka(t[2],e[2],o)];function Qs(t,e){let o=t.length-1,n=T0(e)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,s=t[Math.max(0,r-1)],i=t[r],c=t[r+1],f=t[Math.min(o,r+2)];return[0,1,2].map(l=>.5*(2*i[l]+(-s[l]+c[l])*a+(2*s[l]-5*i[l]+4*c[l]-f[l])*a*a+(-s[l]+3*i[l]-3*c[l]+f[l])*a*a*a))}var Ih=t=>({eye:t.eye.slice(),target:t.target.slice(),fov:t.fov,roll:0});function zd(t,e,o){return{eye:$l(t.eye,e.eye,o),target:$l(t.target,e.target,o),fov:ka(t.fov,e.fov,o),roll:ka(t.roll||0,e.roll||0,o)}}var Fl=DS.PLAY,Va=[Fl.stoolX,1,Fl.keyFront+.25],$h=[Fl.stoolX,Fl.keyTop+.03,Fl.keyFront-.05],Rd=t=>{let e=(15+110*t)*Math.PI/180,o=2.1+.4*t;return[Va[0]+Math.cos(e)*o,1.15+.4*t,Va[2]+Math.sin(e)*o]},pc=[{eye:Rd(1),target:[Va[0],.92,Va[2]-.15],fov:46,aperture:.6},{eye:[-6.93,3.2,45.85],target:[-6.93,.77,45.3],fov:34,aperture:.6,to:$h},{eye:[Va[0]+1,1.14,Va[2]+1.72],target:[$h[0]+.05,.8,$h[2]+.05],fov:40,aperture:1,to:$h}],c5=(t,e)=>Math.hypot(t[0]-e[0],t[1]-e[1],t[2]-e[2]),Fh=t=>({fade:0,letterbox:.55,exposure:1.3,focus:c5(t.eye,t.to||Va),aperture:t.aperture,vignette:.42,shafts:0}),Nd={fade:0,letterbox:.55,exposure:2.1,focus:6.2,aperture:.55,vignette:.45,shafts:0},vc={fade:0,letterbox:.55,exposure:2,focus:.82,aperture:1.1,vignette:.48,shafts:0},Il={fade:0,letterbox:.55,exposure:1.8,focus:.42,aperture:1.3,vignette:.5,shafts:0},US=`
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
`;l5.exports=function(e){let{root:o,avatar:n}=e,r=document.createElement("style");r.textContent=US,document.head.appendChild(r);let a=document.createElement("div");a.className="conf-ui",a.innerHTML=`
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
		</div>`,o.appendChild(a);let s=a.querySelector(".conf-write"),i=a.querySelector("textarea"),c=a.querySelector('[data-act="send"]'),f=a.querySelector(".conf-hint"),l=a.querySelector(".conf-close"),d=a.querySelector(".conf-final"),u=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,v=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;i.addEventListener("input",()=>{let gt=i.value.match(new RegExp("^\\s*(\\S+\\s+){0,"+(i5-1)+"}\\S+"));(i.value.trim()?i.value.trim().split(/\s+/).length:0)>i5&&gt&&(i.value=gt[0]),c.disabled=!i.value.trim()}),["keydown","keyup","keypress"].forEach(gt=>i.addEventListener(gt,ae=>ae.stopPropagation())),a.addEventListener("pointerdown",gt=>gt.stopPropagation()),a.addEventListener("click",gt=>{let ae=gt.target.closest("button");ae&&(gt.stopPropagation(),ae.dataset.act==="send"&&Et(),ae.dataset.act==="leave"&&xt())});let p=!1,h="",m=0,g=null,y=null,b="",w=null,_=0,k="",N=document.createElement("canvas");N.width=512,N.height=652;function G(gt){gt!==k&&(k=gt,s.classList.toggle("on",gt==="write"),f.classList.toggle("on",gt==="hint"),l.classList.toggle("on",p&&gt==="hint"&&(h==="room"||h==="peek")),d.classList.toggle("on",gt==="final"),gt==="write"&&setTimeout(()=>{if(h==="write")try{i.focus({preventScroll:!0})}catch(ae){}},900))}function C(gt){h=gt,m=0}function X(gt,ae){if(p)return;p=!0,g={eye:gt.eye.slice(),target:gt.target.slice(),fov:gt.fov,roll:gt.roll||0},y=Object.assign({},ae),b="",i.value="",c.disabled=!0,Pn.STATE.fold=0,Pn.STATE.slide=0,Pn.STATE.shown=!0,Pn.STATE.active=!0;let Re=N.getContext("2d");Re.setTransform(1,0,0,1,0,0),Re.clearRect(0,0,N.width,N.height),Pn.STATE.ink=N,Pn.STATE.inkDirty=!0,document.body.classList.add("confessing");let ue=pc[0],Kt=v?.3:5.5,Mo=v?.3:3.6;q.i=0,q.u=0,q.T=Kt+Mo,q.moving=!0,q.rest=0,q.raw=!0,q.lookFrom=y,q.lookTo=Fh(ue);let E=[g.eye,[3.4,1.75,44.5],[.3,1.72,44.7],[-2.8,1.5,45.4],Rd(0)],so=[g.target,[-3,1.9,44.5],[-6.5,1.3,44.9],[Va[0],1,Va[2]-.1],ue.target];q.path=Qe=>{let Eo=Qe*(Kt+Mo);if(Eo<Kt){let Er=Eo/Kt,Xn=1-Math.cos(Er*Math.PI/2);return{eye:Qs(E,Xn),target:Qs(so,Yr(0,1,Xn*1.05)),fov:ka(g.fov,52,Yr(.4,1,Xn)),roll:(g.roll||0)*(1-Xn)}}let Oo=(Eo-Kt)/Mo,xn=1-Math.pow(1-Oo,2.4);return{eye:Rd(xn),target:ue.target,fov:ka(52,ue.fov,xn),roll:.05*Math.sin(Math.PI*xn)}},C("room"),G("")}let q={i:0,u:0,T:1,moving:!1,rest:0,raw:!1,path:null,lookFrom:null,lookTo:null},ot=()=>u?"Scroll on":"Swipe up";function D(gt){let ae=Ge,Re=pc[gt],ue={eye:ae.eye.slice(),target:ae.target.slice(),fov:ae.fov,roll:ae.roll||0},Kt=$l(ue.eye,Re.eye,.5),Mo=[Kt[0]-Va[0],0,Kt[2]-Va[2]],E=Math.hypot(Mo[0],Mo[2])||1,so=[Kt[0]+Mo[0]/E*.6,Kt[1]+.3,Kt[2]+Mo[2]/E*.6];q.path=Qe=>{let Eo=1-Qe;return{eye:[0,1,2].map(Oo=>Eo*Eo*ue.eye[Oo]+2*Eo*Qe*so[Oo]+Qe*Qe*Re.eye[Oo]),target:$l(ue.target,Re.target,Yr(0,1,Qe)),fov:ka(ue.fov,Re.fov,Qe),roll:ue.roll*Eo}},q.lookFrom=K||Fh(pc[q.i]),q.lookTo=Fh(Re),q.i=gt,q.u=0,q.moving=!0,q.rest=0,q.raw=!1,q.T=v?.4:Math.max(2.8,Math.min(4.4,c5(ue.eye,Re.eye)*1+1.6)),G("")}let K=null;function Et(){if(h!=="write"||(b=i.value.trim(),!b))return;i.blur(),G("");let gt=Math.max(10,Math.min(22,24-b.length/28));w=GS(N,e.glyphs(),{ink:"rgba(30,16,8,0.97)",xh:gt,width:.15,seed:11+b.length,speed:60,pace:.2,minDur:.03,maxTime:ae=>2.4+ae.length/160,fixed:{mx:46,my:40},onPen:()=>{Pn.STATE.inkDirty=!0},onDone:()=>{Pn.STATE.inkDirty=!0}}),C("down")}function Ht(){try{let gt={access_key:HS,subject:"A note left in the confessional",from_name:"Your gallery",message:b,page:location.href,when:new Date().toString()};fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(gt),keepalive:!0}).catch(()=>{})}catch(gt){}}function Lt(){h==="ready"&&(Ht(),C("fold"),G(""))}function xt(){!p||h==="leave"||(G(""),i.blur(),lt=Ge,Bt=K,C("leave"))}let lt=null,Bt=null,Ge=null,Ce=Pn.SHOTS.window,Xe=Pn.OFF,we=gt=>[gt[0]+Xe[0],gt[1],gt[2]],lo=[[3.4,1.75,44.5],[.3,1.72,44.5],[-2.5,1.66,45],[-4.6,1.6,46.55],[-7,1.58,47.15],[-9.3,1.55,46.4],we([1.25,1.5,43.25]),we([-.55,1.36,42.92])],_o=[[-3,1.9,44.5],[-6.5,1.5,44.6],[-7,1,44.4],[-7.6,.95,44],[-10.5,1.5,44.6],we([-1,1.55,43.6]),we([-1.4,1.35,43.1]),we([-1.5,1.33,43.3])];function Xo(gt){let ae=Wa(T0(gt)),Re=[g.eye,...lo,Ce.eye],ue=[g.target,..._o,Ce.target];return{eye:Qs(Re,ae),target:Qs(ue,Yr(0,1,ae*1.03)),fov:ka(g.fov,Ce.fov,Yr(.6,.97,ae)),roll:(g.roll||0)*(1-ae)}}function Zt(gt,ae){if(v)return gt;let Re=performance.now()/1e3,ue=.004*ae,Kt=Math.sin(Re*.61)*.6+Math.sin(Re*1.37+1.3)*.4,Mo=Math.sin(Re*.47+2.1)*.6+Math.sin(Re*1.13+.4)*.4;return{eye:[gt.eye[0]+Kt*ue,gt.eye[1]+Mo*ue*.7,gt.eye[2]],target:[gt.target[0]+Mo*ue*1.5,gt.target[1]+Kt*ue,gt.target[2]],fov:gt.fov,roll:gt.roll}}function me(gt,ae,Re){let ue={};for(let Kt in ae)ue[Kt]=typeof ae[Kt]=="number"&&typeof gt[Kt]=="number"?ka(gt[Kt],ae[Kt],Re):ae[Kt];return ue}function ze(gt){gt*=window.__confSpeed||1,m+=gt;let ae=Ih(Ce),Re=Ih(Pn.SHOTS.paper),ue,Kt,Mo=Ih(Pn.SHOTS.peek);if(h==="room")q.moving?(q.u=Math.min(1,q.u+gt/q.T),ue=q.path(q.raw?q.u:Wa(q.u)),Kt=me(q.lookFrom,q.lookTo,Yr(.1,.9,q.u)),q.raw&&(Kt.fade=(y.fade||0)*(1-Yr(0,.12,q.u))),q.u>=1&&(q.moving=!1,q.rest=0,f.textContent=ot(),G("hint"))):(q.rest+=gt,ue=Zt(Ih(pc[q.i]),2.5),Kt=Fh(pc[q.i]));else if(h==="enter"){let so=T0(m/(v?.6:9)),Qe=Wa(so),Eo=[no.eye,[-7.6,1.9,47.6],[-9.6,1.85,45.6],we([.75,1.5,42.95]),we([-.25,1.42,42.82]),we([-.9,1.42,42.82]),Mo.eye];ue={eye:Qs(Eo,Qe),target:$l(no.target,Mo.target,Yr(0,.35,Qe)),fov:ka(no.fov,Mo.fov,Yr(.3,1,Qe)),roll:0},Kt=me(yo,Nd,Yr(.2,.9,so)),so>=1&&C("peek")}else if(h==="peek")ue=Zt(Mo,1.5),Kt=Nd,m>(v?.5:3.2)&&C("turn");else if(h==="turn"){let E=T0(m/(v?.4:3.2));ue=zd(Mo,ae,Wa(E)),Kt=me(Nd,vc,Wa(E)),E>=1&&(C("write"),G("write"))}else if(h==="write")ue=Zt(ae,1),Kt=vc;else if(h==="down"){let E=T0(m/(v?.4:2));ue=zd(ae,Re,Wa(E)),Kt=me(vc,Il,Wa(E)),E>=1&&(_=w.write(b,v)||0,Pn.STATE.inkDirty=!0,C("writing"))}else if(h==="writing")ue=Zt(Re,.6),Kt=Il,m>_+.8&&(C("ready"),f.textContent=u?"Scroll to fold it and pass it through":"Swipe up to fold it and pass it through",G("hint"));else if(h==="ready")ue=Zt(Re,.6),Kt=Il;else if(h==="fold"){let E=T0(m/(v?.3:1.5));Pn.STATE.fold=Wa(E),ue=Zt(Re,.6),Kt=Il,E>=1&&C("slide")}else if(h==="slide"){let so=T0(m/(v?.6:3.4));Pn.STATE.slide=Wa(Yr(0,.7,so));let Qe=Wa(Yr(.35,1,so));ue=zd(Re,ae,Qe),Kt=me(Il,vc,Qe),so>=1&&(Pn.STATE.shown=!1,C("final"),G("final"))}else if(h==="final")ue=Zt(ae,1),Kt=vc;else if(h==="leave"){let E=v?.6:lt.eye[0]<Xe[0]-.3?12:7,so=T0(m/E),Qe={eye:g.eye,target:g.target,fov:g.fov,roll:g.roll},Eo=Wa(so),Oo=lt.eye[0]<Xe[0]-.3,xn=Oo?[lt.eye,we([-.55,1.4,42.8]),we([1.4,1.55,43.3]),[-9.3,1.58,46.4],[-7,1.6,47.15],[-4.6,1.62,46.55],[-2.2,1.68,44.8],[.6,1.72,44.5],Qe.eye]:[lt.eye,[-3.4,1.7,46.2],[-1.2,1.7,44.8],[.6,1.72,44.5],Qe.eye],Er=Oo?[lt.target,we([1.5,1.45,43.4]),[-7,1.2,44.6],[-4,1.5,47],[-1.5,1.7,45.5],[1,1.8,44.5],[4,1.8,44.5],[7,1.9,44.2],Qe.target]:[lt.target,[-1.5,1.7,45.2],[2,1.8,44.5],[6,1.9,44.3],Qe.target];if(ue={eye:Qs(xn,Eo),target:Qs(Er,Eo),fov:ka(lt.fov,Qe.fov,Eo),roll:Qe.roll*Eo},Kt=me(Bt||vc,y,Yr(.1,.7,so)),Kt.fade=(y.fade||0)*Yr(.82,1,so),so>=1){p=!1,Pn.STATE.active=!1,Pn.STATE.shown=!0,Pn.STATE.fold=0,Pn.STATE.slide=0;let Xn=N.getContext("2d");Xn.setTransform(1,0,0,1,0,0),Xn.clearRect(0,0,N.width,N.height),Pn.STATE.inkDirty=!0,document.body.classList.remove("confessing"),e.onExit&&e.onExit()}}return Ge=ue,K=Kt,{camera:ue,look:Kt}}let no=null,yo=null;function Ne(){if(h==="room"){if(q.moving||q.rest<.4)return;q.i<pc.length-1?D(q.i+1):(no=Ge,yo=K,G(""),C("enter"));return}if(h==="peek"){m>.4&&C("turn");return}h==="ready"?Lt():h==="writing"&&w&&(w.finish(),m=Math.max(m,_))}function ge(){h==="room"&&!q.moving&&q.rest>.4&&q.i>0&&D(q.i-1)}return{start:X,update:ze,leave:xt,get active(){return p},get stage(){return h},wheel(gt){gt>8?Ne():gt<-8&&ge()},swipe(gt){gt>0?Ne():gt<0&&ge()},tap(){Ne()},key(gt){return["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(gt)>=0?(Ne(),!0):["ArrowUp","ArrowLeft","PageUp"].indexOf(gt)>=0?(ge(),!0):gt==="Escape"?(xt(),!0):!1},_setNote(gt){i.value=gt,i.dispatchEvent(new Event("input"))}}}});var y5=pt((WA,x5)=>{"use strict";var mc=Vi(),qh=nd(),Cd=Af(),BS=Kc(),Od=ad(),jS=va(),Dh=!jS.isPhone&&!!(window.matchMedia&&window.matchMedia("(pointer: fine)").matches),{A:ca}=xa(),{C:dr,PAINTING_X:bc}=pr(),Qr=t=>Math.max(0,Math.min(1,t)),Dt=(t,e,o)=>t+(e-t)*o,Bo=(t,e,o)=>[Dt(t[0],e[0],o),Dt(t[1],e[1],o),Dt(t[2],e[2],o)],ao=(t,e)=>[t[0]+e[0],t[1]+e[1],t[2]+e[2]],Pd=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],$r=(t,e)=>[t[0]*e,t[1]*e,t[2]*e],It=(t,e,o)=>{let n=Qr((o-t)/(e-t));return n*n*(3-2*n)};function WS(t,e,o,n,r,a){if(r<=0)return[t,o];let s=2/n,i=s*r,c=1/(1+i+.48*i*i+.235*i*i*i),f=a*n,l=Math.max(-f,Math.min(f,t-e)),d=t-l,u=(o+s*l)*r,v=(o-s*u)*c,p=d+(l+u)*c;return e-t>0==p>e&&(p=e,v=0),[p,v]}var h5=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,VS=t=>t*t*t,Id=t=>1-Math.pow(1-t,3),gn=t=>-(Math.cos(Math.PI*t)-1)/2;function An(t,e){let o=t.length-1,n=Qr(e)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,s=t[Math.max(0,r-1)],i=t[r],c=t[r+1],f=t[Math.min(o,r+2)],l=a*a,d=l*a;return[0,1,2].map(u=>.5*(2*i[u]+(-s[u]+c[u])*a+(2*s[u]-5*i[u]+4*c[u]-f[u])*l+(-s[u]+3*i[u]-3*c[u]+f[u])*d))}var to=(t,e,o,n)=>({eye:t,target:e,fov:o,roll:n||0});function oi(t,e,o){return to(Bo(t.eye,e.eye,o),Bo(t.target,e.target,o),Dt(t.fov,e.fov,o),Dt(t.roll,e.roll,o))}var Gd=()=>It(.75,1.3,window.innerWidth/window.innerHeight),Fr=(t,e)=>oi(t,e,Gd()),Gh=[7,3.95,dr.hallEnd-.05],XS=[dr.x1,2.9,dr.zc],xc=[16.75,4.55,6.75],Hd=[6.92,2.72,14.5],Xa=[7.3,.015,47.1],YS=[xc,[16.2,4,7],[15.3,3.45,6.4],[14.1,3.2,5.7],[12.2,3.35,6.6],[10,3.75,9.6],[8.2,3.8,12.2],[7.3,3.4,13.8],Hd],KS=[Hd,[7.3,4.6,19.5],[7.6,4.9,23.5],[6.6,4.3,28.5],[7.5,3.2,34],[6.8,2.1,39.5],[7.4,1,44.2],[7.2,.3,46.4],Xa],Js=[bc[0],3,dr.z0],ti=[bc[1],3,dr.z0],Fd=47.45,g5=4.6,QS=13.2,ZS=1.57,ql=[7.55,1.25,46.75],Ud=[17.25,2.42,46],Bd=[26.05,1.95,46],Dl=[36.15,.015,44],jh=()=>Dt(6.8,6.15,Gd()),JS=[ql,[9.6,1.65,46.2],[12.3,2.05,45.1],[14.6,2.35,44.5],[16.2,2.3,44.7],Ud],tk=[Ud,[20.2,2.05,45.6],[23.2,1.8,45],Bd],ei=[bc[2],3,dr.z0],qd=[34.8,1.35,46],ls=[7.89,.03,19.03],u5=.36,d5=13.64,gr=[{side:"left",z:34.5},{side:"left",z:23.5},{side:"left",z:14.6},{side:"right",z:14.6},{side:"right",z:23.5},{side:"right",z:34.5}];function Ta(t){let e=t.side==="left"?1:-1;return Bo([7-e*1,3,t.z+e*.2],[7-e*.6,3.25,t.z+e*.13],Gd())}function ek(t){return t.side==="left"?Fr(to([8.6,3.9,t.z],[u5,1.45,t.z],76),to([8,3.6,t.z+.7],[u5,3.95,t.z-2],46,-.008)):Fr(to([5.4,3.9,t.z],[d5,1.45,t.z],76),to([6,3.6,t.z-.7],[d5,3.95,t.z+2],46,-.008))}var ok=()=>[Dl,[35.6,.5,44.6],[33.2,1.5,45.6],[29,2.3,46.1],[23.5,2.7,45.9],[18.5,2.9,45.4],[14.8,3.1,44.3],[11,3.3,41.8],[7.4,3.4,38.8],[5.4,3.3,36.6],Ta(gr[0])],nk=()=>[Ta(gr[2]),[3,3.2,13.2],[1.7,3,12],[2.6,3.2,10],[5,3.6,8.9],[7,3.8,8.6],[9,3.6,8.9],[11.4,3.2,10],[12.3,3,12],[11,3.1,13.4],Ta(gr[3])],rk=()=>[Ta(gr[5]),[9,3.4,31],[7.8,2.8,27.5],[6.8,1.9,24.5],[7.4,1,21],[7.75,.35,19.6],ls],p5={2:{pos:()=>Hd,amp:[.18,.07,.12],tumble:.5},7:{pos:()=>ql,amp:[.12,.09,.1],tumble:.55},8:{pos:()=>Ud,amp:[.1,.08,.08],tumble:.5},9:{pos:()=>Bd,amp:[.09,.06,.07],tumble:.45},10:{pos:()=>qd,amp:[.07,.04,.06],tumble:.35},12:{pos:()=>Ta(gr[0]),amp:[.12,.08,.1],tumble:.5},13:{pos:()=>Ta(gr[1]),amp:[.12,.08,.1],tumble:.5},14:{pos:()=>Ta(gr[2]),amp:[.12,.08,.1],tumble:.5},15:{pos:()=>Ta(gr[3]),amp:[.12,.08,.1],tumble:.5},16:{pos:()=>Ta(gr[4]),amp:[.12,.08,.1],tumble:.5},17:{pos:()=>Ta(gr[5]),amp:[.12,.08,.1],tumble:.5}},cs=[{name:"corridor",ui:"intro",look:{letterbox:1,exposure:1,focus:14,aperture:.25,vignette:.1},cam(t){let e=.9*(1-Math.exp(-t/14)),o=[0,Math.sin(t*.37)*.025,Math.sin(t*.23)*.06],n=Fr(to([dr.x0+.9,1.85,dr.zc+.25],[dr.x1,2.85,dr.zc-.1],64),to([dr.x0+1.2,2,dr.zc+.35],[dr.x1,2.6,dr.zc-.15],50));return n.eye=ao(ao(n.eye,[e,0,0]),o),n}},{name:"about",ui:"about",look:{letterbox:.55,exposure:1.32,focus:2.9,aperture:.9,vignette:.12,shafts:.65},cam(t){let e=[Math.sin(t*.21)*.08,Math.sin(t*.33)*.03,-.25*(1-Math.exp(-t/12))],o=Fr(to([16.6,1.9,9.2],[17.3,.4,5.6],64),to([15,1.35,7.75],[17.55,1.05,5.5],44,-.02));return o.eye=ao(o.eye,e),o}},{name:"sky",ui:"sky",look:{letterbox:.55,exposure:1,focus:2.1,aperture:.45,vignette:.1,shafts:1},cam(t){let e=[Math.sin(t*.12)*.35,Math.sin(t*.2)*.04,(1-Math.cos(t*.12))*.25],o=Fr(to([7,1.35,13],[7.2,7.6,20.4],74,.05),to([6.6,1.5,12.6],[7.3,7.2,20.8],56,.07));return o.eye=ao(o.eye,e),o}},{name:"master",ui:"master",look:{letterbox:.55,exposure:1.12,focus:8,aperture:.6,vignette:.3,shafts:.5},cam(t){let e=[Math.sin(t*.17)*.05,Math.sin(t*.29)*.02,-.35*(1-Math.exp(-t/16))],o=Fr(to([7,3.6,43.7],[7,3.85,Gh[2]],74),to([7,3.6,41.3],[7,3.95,Gh[2]],46));return o.eye=ao(o.eye,e),o}},{name:"story",ui:"story",look:{letterbox:.55,exposure:1,focus:8.1,aperture:.9,vignette:.4,shafts:.4},cam(t){let e=[Math.sin(t*.15)*.04,Math.sin(t*.25)*.015,0],o=Fr(to([7,3.9,40.3],[7,1.35,Gh[2]],76),to([6.3,3.6,41.2],[3.7,3.95,Gh[2]],46,-.008));return o.eye=ao(o.eye,e),o}},{name:"leaf",ui:"leaf",look:{letterbox:.55,exposure:1.15,focus:1.25,aperture:1.3,vignette:.35,shafts:.4},cam(t){let e=[Math.sin(t*.2)*.02,Math.sin(t*.3)*.006,0],o=Fr(to([7.15,.15,46],[7.3,.04,Xa[2]],50),to([7.05,.14,45.9],[7.25,.05,Xa[2]],32));return o.eye=ao(o.eye,e),o}},{name:"steps",ui:"steps",look:{letterbox:.9,exposure:1.2,focus:1.6,aperture:1.4,vignette:.4,shafts:.4},cam(t){let e=[Math.sin(t*.2)*.015,0,0],o=Fr(to([7.15,.1,46.3],[7.05,.1,Fd],50),to([7.1,.12,45.85],[7,.2,Fd],30));return o.eye=ao(o.eye,e),o}},{name:"float",ui:"float",look:{letterbox:.55,exposure:1.1,focus:2.2,aperture:.8,vignette:.3,shafts:.6},cam(t){let e=[Math.sin(t*.17)*.05,Math.sin(t*.27)*.02,0],o=Fr(to([7.3,.85,45.65],[7.6,1.38,47.1],64),to([7.25,.82,45.8],[7.65,1.35,47.1],44));return o.eye=ao(o.eye,e),o}},{name:"painting1",ui:"p1",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(t){let e=[Math.sin(t*.15)*.04,Math.sin(t*.25)*.015,0],o=Fr(to([Js[0],2.3,46.85],[Js[0],1.25,Js[2]],74),to([Js[0]-.6,2.55,46.85],[Js[0]+1.9,2.9,Js[2]],46,.008));return o.eye=ao(o.eye,e),o}},{name:"painting2",ui:"p2",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(t){let e=[Math.sin(t*.15)*.04,Math.sin(t*.25)*.015,0],o=Fr(to([ti[0],1.95,46.85],[ti[0],1,ti[2]],74),to([ti[0]-.6,2.1,46.85],[ti[0]+1.9,2.75,ti[2]],46,.008));return o.eye=ao(o.eye,e),o}},{name:"painting3",ui:"p3",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.9},cam(t){let e=[Math.sin(t*.15)*.04,Math.sin(t*.25)*.015,0],o=Fr(to([ei[0],1.4,46.85],[ei[0],.6,ei[2]],74),to([ei[0]-.6,1.45,46.85],[ei[0]+1.9,2,ei[2]],46,.008));return o.eye=ao(o.eye,e),o}},{name:"door",ui:"door",look:{letterbox:.8,exposure:1.05,focus:1.45,aperture:1.1,vignette:.35,shafts:1},cam(t){let e=[Math.sin(t*.2)*.02,Math.sin(t*.3)*.006,0],o=Fr(to([34.75,.5,44.15],[dr.x1,.8,43.95],66),to([34.75,.45,44.3],[dr.x1,.35,43.95],50));return o.eye=ao(o.eye,e),o}},...gr.map((t,e)=>({name:"hall"+e,ui:"h"+e,look:{letterbox:.55,exposure:1,focus:7.6,aperture:.7,vignette:.35,shafts:.7},cam(o){let n=[Math.sin(o*.15)*.04,Math.sin(o*.25)*.015,Math.sin(o*.11)*.04],r=ek(t);return r.eye=ao(r.eye,n),r}})),{name:"rest",ui:"end",look:{letterbox:.55,exposure:1.05,focus:2.4,aperture:.5,vignette:.4,shafts:1.15},cam(t){let e=t*.025,o=Fr(to([7.75,2.6,18.6],[7.89,0,19.08],60),to([7.75,2.3,18.45],[7.89,0,19.08],46)),n=o.eye[0]-ls[0],r=o.eye[2]-ls[2];return o.eye=[ls[0]+n*Math.cos(e)-r*Math.sin(e),o.eye[1],ls[2]+n*Math.sin(e)+r*Math.cos(e)],o}}],ak=[1,.96,.88];function v5(t,e){return{dur:e,cam(o,n,r){let a=gn(o),s=oi(n,r,a),i=gr[t].side==="left"?1:-1;return s.eye=ao(s.eye,[i*.6*Math.sin(Math.PI*a),.15*Math.sin(Math.PI*a),0]),s},look(o,n,r){let a={};for(let s in r)typeof r[s]=="number"&&(a[s]=Dt(n[s],r[s],o));return a.aperture=Dt(n.aperture,r.aperture,o)*(1-.5*Math.sin(Math.PI*o)),a},leaf(o){let n=gn(o),r=Ta(gr[t]),a=Ta(gr[t+1]),s=gr[t].side==="left"?1:-1,i=ao(Bo(r,a,.5),[s*1.2,.5,0]),c=An([r,Bo(r,i,.6),i,Bo(a,i,.6),a],n);return{phase:"fly",pos:ao(c,[0,Math.sin(o*Math.PI*5)*.07*Math.sin(Math.PI*o),0]),tumble:.5+.35*Math.sin(Math.PI*o)}}}}var $d=[{dur:6.2,cam(t,e,o){if(t<.5){let i=VS(t/.5),c=Bo(e.eye,[dr.x1-3.2,2.6,dr.zc],i),f=Bo(e.target,XS,It(0,.6,t/.5));return to(c,f,Dt(e.fov,e.fov-8,i),Dt(e.roll,.04,i))}let n=Id((t-.5)/.5),r=[[ca.cx+.4,10.4,ca.zc+.6],[ca.cx-.6,7.6,ca.zc+1.3],[ca.cx-1.9,4.6,ca.zc+1.75],o.eye],a=[[ca.cx-.1,0,ca.zc-.2],[ca.cx-1,.4,ca.zc-.1],[ca.cx-1.1,.8,ca.zc-.2],o.target];return to(An(r,n),An(a,n),Dt(o.fov+14,o.fov,n),Dt(-.25,o.roll,n))},look(t,e,o){let n=It(.22,.5,t),r=1-It(.5,.74,t);return{fade:t<.5?n:r,fadeColor:ak,exposure:Dt(e.exposure,o.exposure,It(.5,.9,t))*(1+2.2*(t<.5?It(.15,.5,t):1-It(.5,.8,t))),letterbox:Dt(e.letterbox,o.letterbox,It(.3,.7,t)),aperture:t<.5?e.aperture*(1-t*2):o.aperture*It(.6,1,t),focus:Dt(4,o.focus,It(.5,1,t)),shafts:Dt(e.shafts,o.shafts,It(.4,.6,t)),vignette:Dt(e.vignette,o.vignette,t)}},leaf(){return{phase:"home"}}},{dur:9,cam(t,e,o,n){let r=[e.eye,[15.6,2.4,8.3],[15.4,2.7,7.1],[12.6,2.6,5.4],[9.6,2,7.4],[7.6,1.6,10.6],o.eye],a=An(r,gn(t)),s=It(0,.12,t)*(1-It(.82,1,t)),i=Bo(Bo(e.target,o.target,It(.55,1,t)),n.pos,s),c=Dt(e.fov,o.fov,It(.3,1,t))-6*Math.sin(Math.PI*t),f=Dt(e.roll,o.roll,t)+.05*Math.sin(Math.PI*2*t);return to(a,i,c,f)},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{exposure:Dt(e.exposure,o.exposure,It(.25,.75,t)),letterbox:Dt(e.letterbox,o.letterbox,t),focus:Dt(a,o.focus,It(.8,1,t)),aperture:Dt(.7,o.aperture,It(.8,1,t)),shafts:Dt(e.shafts,o.shafts,It(.3,.8,t)),vignette:Dt(e.vignette,o.vignette,t)}},leaf(t){let e=h5(t),o=Math.sin(t*Math.PI*7)*.14*Math.sin(Math.PI*t);return{phase:"fly",pos:ao(An(YS,e),[0,Math.sin(t*Math.PI*9)*.05*Math.sin(Math.PI*t),o]),tumble:1-.5*It(.8,1,t)}}},{dur:11.5,cam(t,e,o,n){let r=An([e.eye,[7,1.9,19],[7.1,1.6,27.5],[6.9,1.1,36],[7,.7,42.5],[7.05,.5,45.7]],It(0,.8,t)*.6+gn(Qr(t/.8))*.4),a=An([[7.05,.5,45.7],[7,1.2,45.3],[7,2.6,43.8],o.eye],gn(It(.8,1,t))),s=t<.8?r:a,i=Bo(Bo(e.target,n.pos,It(.03,.22,t)),o.target,It(.82,1,t)),c=Dt(e.fov,o.fov,It(.15,.7,t))-6*It(.6,.8,t)*(1-It(.85,1,t)),f=Dt(e.roll,o.roll,It(0,.6,t))-.04*Math.sin(Math.PI*t);return to(s,i,c,f)},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{exposure:Dt(e.exposure,o.exposure,It(.5,1,t)),letterbox:Dt(e.letterbox,o.letterbox,t),focus:Dt(a,o.focus,It(.84,1,t)),aperture:Dt(1.1,o.aperture,It(.84,1,t)),shafts:Dt(e.shafts,o.shafts,It(.2,.9,t)),vignette:Dt(e.vignette,o.vignette,It(.5,1,t))}},leaf(t){let e=Dt(h5(t),t,.35),o=An(KS,It(0,.78,e)),n=Math.sin(t*Math.PI*8)*.35*(1-It(.55,.76,t)),r=It(.7,.8,t);return{phase:"fly",pos:ao(o,[n,Math.abs(Math.cos(t*Math.PI*8))*.12*(1-r),0]),tumble:1-r,swing:n}}},{dur:2.6,cam(t,e,o){let n=gn(t),r=oi(e,o,n);return r.eye=ao(r.eye,[0,0,-.35*Math.sin(Math.PI*n)]),r},look(t,e,o){let n=gn(t),r={};for(let a in o)typeof o[a]=="number"&&(r[a]=Dt(e[a],o[a],n));return r},leaf(){return{phase:"floor"}}},{dur:4.5,cam(t,e,o){let n=gn(t),r=An([e.eye,[6.9,1.7,43.9],[7.05,.45,45.4],o.eye],n),a=Bo(e.target,o.target,It(.1,.85,t));return to(r,a,Dt(e.fov,o.fov,It(.2,1,t)),Dt(e.roll,o.roll,n))},look(t,e,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=Dt(e[r],o[r],It(.2,1,t)));return n},leaf(){return{phase:"floor"}}},{dur:5.5,cam(t,e,o){return oi(e,o,gn(t))},look(t,e,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=Dt(e[r],o[r],gn(t)));return n},leaf(){return{phase:"floor"}},walker(t){return Dt(g5,jh(),t)}},{dur:11,kick:t=>Qr((t-gc())/(1-gc())),cam(t,e,o,n){let r=gc(),a=It(0,r,t)*(1-It(r+.12,r+.35,t)),s=m5(Math.min(t,yc)),i=ao(e.target,[(s-e.target[0])*.15*a,0,0]),c=It(r+.12,1,t),f=An([e.eye,e.eye,ao(e.eye,[0,.12,-.3]),o.eye],c);return i=Bo(i,n.pos,It(r+.06,r+.24,t)*(1-It(.9,1,t))),i=Bo(i,o.target,It(.88,1,t)),to(f,i,Dt(e.fov,o.fov,c),Dt(e.roll,o.roll,c))},look(t,e,o,n,r){let a=gc(),s=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]),i=It(0,.12,t)*(1-It(a+.25,a+.5,t));return{letterbox:Dt(Dt(e.letterbox,o.letterbox,It(a,1,t)),1.75,i),exposure:Dt(e.exposure,o.exposure,It(a,1,t)),focus:t<a?e.focus:Dt(e.focus,s,It(a,a+.2,t)),aperture:Dt(e.aperture,o.aperture,It(a,1,t)),vignette:Dt(e.vignette,o.vignette,t),shafts:Dt(e.shafts,o.shafts,t)}},leaf(t){let e=Qr((t-gc())/(1-gc()));if(e<=0)return{phase:"floor"};let o=It(0,.85,e)*.85+Id(It(0,.15,e))*.15;return{phase:"fly",pos:ao(Xa,[(ql[0]-Xa[0])*o+Math.sin(e*9)*.08*(1-e),(ql[1]-Xa[1])*o,(ql[2]-Xa[2])*o+Math.sin(e*7)*.06*(1-e)]),tumble:1.3-.75*e}},walker(t){return t<.985?m5(t):null}},{dur:9,cam(t,e,o,n){let r=gn(t),a=An([e.eye,[9.4,1.35,45.6],[12.4,2,45.9],[15,2.45,46.5],o.eye],r),s=1-It(.6,.92,t),i=Bo(Bo(e.target,n.pos,It(0,.15,t)),o.target,1-s),c=Dt(e.fov,o.fov,It(.3,1,t)),f=Dt(e.roll,o.roll,r)+.04*Math.sin(Math.PI*t);return to(a,i,c,f)},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:Dt(e.letterbox,o.letterbox,t),exposure:Dt(e.exposure,o.exposure,It(.3,.8,t)),focus:Dt(a,o.focus,It(.6,.95,t)),aperture:Dt(e.aperture,o.aperture,It(.6,1,t)),vignette:Dt(e.vignette,o.vignette,t),shafts:Dt(e.shafts,o.shafts,It(.3,.8,t))}},leaf(t){let e=gn(t);return{phase:"fly",pos:ao(An(JS,e),[0,Math.sin(t*Math.PI*5)*.08*Math.sin(Math.PI*t),Math.sin(t*Math.PI*4)*.12*Math.sin(Math.PI*t)]),tumble:.55+.4*Math.sin(Math.PI*t)}}},{dur:6.5,cam(t,e,o){let n=gn(t),r=oi(e,o,n);return r.eye=ao(r.eye,[0,.12*Math.sin(Math.PI*n),.1*Math.sin(Math.PI*n)]),r},look(t,e,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=Dt(e[r],o[r],t));return n.aperture=Dt(e.aperture,o.aperture,t)*(1-.5*Math.sin(Math.PI*t)),n},leaf(t){let e=gn(t);return{phase:"fly",pos:ao(An(tk,e),[0,Math.sin(t*Math.PI*4)*.07*Math.sin(Math.PI*t),0]),tumble:.5+.3*Math.sin(Math.PI*t)}}},{dur:6.5,cam(t,e,o){let n=gn(t),r=oi(e,o,n);return r.eye=ao(r.eye,[0,.1*Math.sin(Math.PI*n),.1*Math.sin(Math.PI*n)]),r},look(t,e,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=Dt(e[r],o[r],t));return n.aperture=Dt(e.aperture,o.aperture,t)*(1-.5*Math.sin(Math.PI*t)),n},leaf(t){let e=gn(t);return{phase:"fly",pos:ao(An([Bd,[29.2,1.75,45.5],[32.2,1.5,45.4],qd],e),[0,Math.sin(t*Math.PI*4)*.06*Math.sin(Math.PI*t),0]),tumble:.45+.25*Math.sin(Math.PI*t)}}},{dur:6,cam(t,e,o,n){let r=gn(t),a=An([e.eye,[34.2,1.15,45.6],[34.5,.7,44.8],o.eye],r),s=It(.05,.3,t)*(1-It(.8,1,t)),i=Bo(Bo(e.target,o.target,It(.6,1,t)),n.pos,s);return to(a,i,Dt(e.fov,o.fov,It(.2,1,t)),Dt(e.roll,o.roll,r))},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:Dt(e.letterbox,o.letterbox,t),exposure:Dt(e.exposure,o.exposure,t),focus:Dt(a,o.focus,It(.8,1,t)),aperture:Dt(.9,o.aperture,It(.8,1,t)),vignette:Dt(e.vignette,o.vignette,t),shafts:Dt(e.shafts,o.shafts,t)}},leaf(t){let e=An([qd,[35.3,.9,45.2],[35.75,.4,44.4],[36,.08,44.05],Dl],It(0,.85,t)),o=Math.sin(t*Math.PI*6)*.25*(1-It(.35,.82,t)),n=It(.78,.88,t);return{phase:"fly",pos:ao(e,[0,Math.abs(Math.cos(t*Math.PI*6))*.07*(1-n),o]),tumble:.7*(1-n),swing:o}}},{dur:12,door(t){let e=Qr((t-.02)/.09);return Id(e)+.07*Math.sin(Qr((t-.08)/.18)*Math.PI)*(1-Qr((t-.08)/.3))},cam(t,e,o,n){let r=Math.sin(t*340)*.012*It(.02,.05,t)*(1-It(.08,.16,t)),a=It(.06,1,t),s=An([e.eye,[34.3,1,43.6],[31.5,1.9,43.4],[26.5,2.4,43.6],[21,2.6,43.6],[16.5,2.8,43.2],[12.6,3.1,41.2],[9.6,3.4,38],o.eye],a*.55+gn(a)*.45),i=ao(n.pos,[1,-.2,-1.45]);s=Bo(s,i,It(.1,.22,t)*(1-It(.52,.72,t)));let c=It(.06,.16,t)*(1-It(.86,1,t)),f=Bo(e.target,n.pos,c);f=Bo(f,o.target,It(.86,1,t));let l=Dt(e.fov,o.fov,It(.1,1,t))+6*Math.sin(Math.PI*It(.08,.9,t)),d=Dt(e.roll,o.roll,t)+.06*Math.sin(Math.PI*2*It(.1,.9,t))+r;return to(ao(s,[0,r,0]),f,l,d)},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]),s=It(.02,.06,t)*(1-It(.08,.3,t));return{letterbox:Dt(e.letterbox,o.letterbox,It(.1,.4,t)),exposure:Dt(e.exposure,o.exposure,t)*(1+.8*s),focus:Dt(a,o.focus,It(.86,1,t)),aperture:Dt(.8,o.aperture,It(.86,1,t)),vignette:Dt(e.vignette,o.vignette,t),shafts:Dt(e.shafts,o.shafts,t)+s}},leaf(t){let e=Qr((t-.05)/.95);if(e<=0)return{phase:"floor"};let o=An(ok(),e*.6+gn(e)*.4),n=Math.sin(t*Math.PI*9)*.12*Math.sin(Math.PI*e);return{phase:"fly",pos:ao(o,[0,n*.6,n]),tumble:1.4-.8*e}}},...[0,1].map(t=>v5(t,7.5)),{dur:10,cam(t,e,o,n){let r=gn(t),a=An([e.eye,[7.6,3.2,16.2],[7,2.9,17.2],[6.5,3.2,16],o.eye],r),s=It(0,.15,t)*(1-It(.85,1,t)),i=Bo(Bo(e.target,o.target,It(.5,1,t)),n.pos,s);return to(a,i,Dt(e.fov,o.fov,r)+4*Math.sin(Math.PI*r),Dt(e.roll,o.roll,r))},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:Dt(e.letterbox,o.letterbox,t),exposure:Dt(e.exposure,o.exposure,t),focus:Dt(a,o.focus,It(.85,1,t)),aperture:Dt(.6,o.aperture,It(.85,1,t)),vignette:Dt(e.vignette,o.vignette,t),shafts:Dt(e.shafts,o.shafts,t)}},leaf(t){let e=gn(t),o=An(nk(),e);return{phase:"fly",pos:ao(o,[0,Math.sin(t*Math.PI*6)*.06*Math.sin(Math.PI*t),0]),tumble:.6+.4*Math.sin(Math.PI*t)}}},...[3,4].map(t=>v5(t,7.5)),{dur:10,cam(t,e,o,n){let r=gn(t),a=An([e.eye,[7.6,4,30.5],[7.3,4.4,25.5],[7.1,4,21.8],o.eye],r),s=It(0,.2,t)*(1-It(.9,1,t)),i=Bo(Bo(e.target,o.target,It(.5,1,t)),n.pos,s);return to(a,i,Dt(e.fov,o.fov,r),Dt(e.roll,o.roll,r))},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:Dt(e.letterbox,o.letterbox,t),exposure:Dt(e.exposure,o.exposure,t),focus:Dt(a,o.focus,It(.85,1,t)),aperture:Dt(.7,o.aperture,It(.85,1,t)),vignette:Dt(e.vignette,o.vignette,t),shafts:Dt(e.shafts,o.shafts,t)}},leaf(t){let e=An(rk(),It(0,.86,t)),o=Math.sin(t*Math.PI*7)*.3*(1-It(.4,.84,t)),n=It(.8,.9,t);return{phase:"fly",pos:ao(e,[o,Math.abs(Math.cos(t*Math.PI*7))*.08*(1-n),0]),tumble:.8*(1-n),swing:o}}}],Dd=9.2,yc=.72;function m5(t){return t<yc?Dt(jh(),Dd,t/yc):Dt(Dd,QS,(t-yc)/(1-yc))}function gc(){return yc*Qr((Xa[0]+.15-jh())/(Dd-jh()))}var Bh={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},Hh=t=>Object.assign({},Bh,cs[t].look),sk=`
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
`;function Kr(t,e,o){let n=document.createElement(t);return e&&(n.className=e),o!==void 0&&(n.innerHTML=o),n}var Zs=t=>String(t).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function Uh(t,e,o){t.querySelectorAll(".tour-line").forEach((n,r)=>{n.style.transitionDelay=(e+r*o).toFixed(2)+"s"})}x5.exports=function(e){let o=/tourdebug/.test(location.search),{fps:n}=e;if(!document.querySelector("link[data-tour-font]")){let B=document.createElement("link");B.rel="stylesheet",B.href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&display=swap",B.setAttribute("data-tour-font",""),document.head.appendChild(B)}let r=Td(),a=null;fetch("res/hand.json").then(B=>B.ok?B.json():null).then(B=>{a=B}).catch(()=>{});let s=document.createElement("style");s.textContent=sk+`
	.hand-text { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); clip-path: inset(50%); white-space: normal; }
	.tour-body canvas.hand { display: block; cursor: pointer; }`,s.textContent+=`
	body.touring #museum-mobile-controls,
	body.touring .painting-plaque { display: none !important; }`,document.head.appendChild(s);let i=Kr("div","tour");i.setAttribute("role","region"),i.setAttribute("aria-label","Guided tour of the gallery. Swipe, scroll or press the arrow keys to move on.");let c=Kr("div","tour-mark",Zs(qh.name)),f=Kr("button","tour-free","Explore freely");f.type="button";let l=Kr("div","tour-links",Cd.icons("tour-icon"));l.insertBefore(Ld()("tour-icon"),l.firstChild),l.insertBefore(Mh().button("tour-icon"),l.firstChild.nextSibling);let d=Kr("button","tour-free tour-note",'<svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 4c-7 1-11.5 5.5-13 13l-1.5 3 3-1.5c7.500-1.500 12-6 13-13z"/><path d="M5.5 20L13 12.500"/></svg><span>Leave a note</span>');d.type="button",d.setAttribute("aria-label","Leave a note: go to the piano room and the confessional"),l.appendChild(d),Dh&&l.appendChild(f);let u=Kr("div","tour-progress",cs.map(()=>"<i></i>").join("")),v=Kr("div","tour-hint",'<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M6 15l6-6 6 6"></path></svg><span></span>'),p=v.querySelector("span"),h=Kr("div","tour-card tour-intro",`
		<span class="tour-line tour-kicker">A virtual gallery</span>
		<span class="tour-rule"></span>
		<h1 class="tour-line tour-title">${Zs(qh.name)}</h1>
		<span class="tour-line tour-sub tour-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</span>`);Uh(h,.4,.35);let m=qh.text.split(/\n\s*\n/).map(B=>`<p class="tour-line">${Zs(B.trim())}</p>`).join(""),g=Kr("div","tour-card tour-about",`
		<span class="tour-line tour-kicker">The artist</span>
		<h2 class="tour-line tour-title">${Zs(qh.title)}</h2>
		<span class="tour-rule"></span>
		${Cd.line("tour-line tour-contact")}
		${m}`);Uh(g,.25,.28);let y=Kr("div","tour-card tour-sky",`
		<span class="tour-line tour-sub">Every painting here waits for the light.</span>`);Uh(y,.6,.3);let b=Kr("div","tour-card tour-master","");function w(B){let ft=Kr("div","tour-card tour-story",`
			<span class="tour-line tour-kicker"></span>
			<h2 class="tour-title tour-letters"></h2>
			<span class="tour-rule"></span>
			<span class="tour-line visit-row"></span>
			<div class="tour-body"></div>`),jt=ft.querySelector(".tour-title"),se=ft.querySelector(".tour-body");return ft.filled=!1,ft.body=se,ft.fill=()=>{let le=B();if(!le||ft.filled)return;ft.filled=!0;let en=le.title||"";ft.querySelector(".tour-kicker").textContent=BS(le)||"Oil on canvas";let nr=ft.querySelector(".visit-row");nr.innerHTML=Od.button(le),nr.hidden=!nr.innerHTML;let Sr=nr.querySelector(".visit-btn");Sr&&(Sr.addEventListener("click",fo=>{fo.stopPropagation(),Od.open(le)}),ft.warm=()=>Od.warm(le));let on=0;jt.innerHTML=en.split(" ").map(fo=>'<span class="tour-word">'+fo.split("").map(Yn=>`<span style="transition-delay:${(.35+on++*.045).toFixed(3)}s">${Zs(Yn)}</span>`).join("")+"</span>").join(" "),jt.setAttribute("aria-label",en);let xr=.35+en.length*.045+.2;ft.querySelector(".tour-rule").style.transitionDelay=xr.toFixed(2)+"s";let nn=String(le.description||"").split(/\n\s*\n/).filter(fo=>fo.trim());if(ft.querySelector(".tour-kicker").style.transitionDelay="0.1s",a&&nn.length){se.innerHTML=nn.map(yn=>`<p class="hand-text">${Zs(yn.trim())}</p>`).join("")+'<div class="hand-wrap"><canvas class="hand" aria-hidden="true"></canvas></div>';let fo=se.querySelector("canvas"),Yn=nn.map(yn=>yn.trim()).join(`

`),jo=!1,$n=!1,Dr=0;se.addEventListener("wheel",()=>{jo=!0},{passive:!0}),se.addEventListener("touchmove",()=>{jo=!0},{passive:!0});let Gr=parseFloat(getComputedStyle(se).fontSize)||17,Uo=r(fo,a,{ink:"rgba(244,236,223,0.93)",shadow:"rgba(0,0,0,0.55)",shadowBlur:7,xh:Math.max(8.5,Gr*.56),width:.14,speed:80,pace:.12,minDur:.022,maxTime:yn=>3.5+yn.length/420,seed:3+en.length,onPen:yn=>{if(jo)return;let za=yn-se.clientHeight*.55;za>se.scrollTop+4&&(se.scrollTop+=Math.min(16,za-se.scrollTop))}});fo.addEventListener("click",yn=>{yn.stopPropagation(),clearTimeout(Dr),$n?Uo.finish():($n=!0,Uo.write(Yn,!0))}),ft.write=()=>{if(clearTimeout(Dr),jo=!1,$n){Uo.write(Yn,!0);return}Uo.write("",!0),Dr=setTimeout(()=>{$n=!0,Uo.write(Yn)},xr*.6*1e3)},ft.stopWrite=()=>{clearTimeout(Dr),Uo.stop()};let ha=0;window.addEventListener("resize",()=>{clearTimeout(ha),ha=setTimeout(()=>{$n&&ft.classList.contains("on")&&Uo.write(Yn,!0)},250)})}else se.innerHTML=nn.map(fo=>`<p class="tour-line">${Zs(fo.trim())}</p>`).join(""),se.querySelectorAll(".tour-line").forEach((fo,Yn)=>{fo.style.transitionDelay=(xr+.3+Math.min(Yn,6)*.35).toFixed(2)+"s"})},ft}let _=()=>e.paintings?e.paintings():[],k=B=>_().find(ft=>ft.side==="corridor"&&Math.abs(ft.paintingPosition[0]-B)<.5),N=w(()=>_().find(B=>B.side==="end")),G=()=>Kr("div","tour-card",""),C=w(()=>k(Js[0])),X=w(()=>k(ti[0])),q=w(()=>k(ei[0])),ot=gr.map(B=>w(()=>_().find(ft=>ft.side===B.side&&Math.abs(ft.paintingPosition[2]-B.z)<.5))),D=Kr("div","tour-card tour-endcard",`
		<span class="tour-line tour-kicker">Thank you for walking with me</span>
		<span class="tour-rule"></span>
		<span class="tour-line tour-sub">${Dh?"The rest of the gallery is yours to wander.":"Swipe back to return to any painting."}</span>
		<span class="tour-line tour-sub tour-confess-line">Before you leave, the confessional is open.<br>Leave me a note; no one else will read it.</span>
		<div class="tour-line tour-end"><button type="button" class="tour-btn" data-act="confess">Leave something behind</button></div>
		${Cd.line("tour-line tour-contact")}
		<div class="tour-line tour-end">
			${Dh?'<button type="button" class="tour-btn" data-act="free">Walk the gallery</button>':""}
			<button type="button" class="tour-btn quiet" data-act="list">All paintings</button>
			<button type="button" class="tour-btn quiet" data-act="replay">Replay</button>
		</div>`);Uh(D,.5,.35);let K=[h,g,y,b,N,G(),G(),G(),C,X,q,G(),...ot,D];i.append(...K,c,l,u,v),document.body.appendChild(i);let Et=f5()({root:i,avatar:e.avatar,glyphs:()=>a,onExit:()=>{ue=-1,de&&(pe={start:E},de=!1)}});document.body.classList.add("touring");let Ht=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,Lt=Ht?"Scroll":"Swipe",xt=cs.map((B,ft)=>ft===0?Ht?"Scroll to begin":"Swipe up to begin":ft===1?Lt+" to follow the leaf":ft===2?Lt+" to follow the light":ft===3?Lt+" for its story":ft===6||ft===7||ft===cs.length-1?"":Lt+" on"),lt=[0];$d.forEach(B=>lt.push(lt[lt.length-1]+B.dur));let Bt=lt[lt.length-1],Ge=210,Ce=95,Xe=.35,we=1.4,lo=.32,_o=1,Xo=1.3,Zt=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,me=2.2,ze=.7,no=.9,yo=!0,Ne=0,ge=0,gt=0,ae=-10,Re=!1,ue=-1,Kt=0,Mo=0,E=0,so=null,Qe=Object.assign({},Hh(0)),Eo=cs[0].cam(0),Oo={phase:"home",pos:xc.slice(),tumble:0},xn=0,Er=B=>{let ft=0;for(let jt=1;jt<lt.length;jt++)Math.abs(lt[jt]-B)<Math.abs(lt[ft]-B)&&(ft=jt);return ft};function Xn(B){let ft=K[B];ft&&ft.fill&&(ft.fill(),ft.body.scrollTop=0,ft.offsetWidth),K.forEach((jt,se)=>{let le=jt.classList.contains("on");jt.classList.toggle("on",se===B),se===B&&!le&&jt.write&&jt.write(),se!==B&&le&&jt.stopWrite&&jt.stopWrite()}),ft&&ft.warm&&ft.warm(),p.textContent=xt[B]||"",v.classList.toggle("on",!!xt[B])}function Ka(){K.forEach(B=>{B.stopWrite&&B.classList.contains("on")&&B.stopWrite(),B.classList.remove("on")}),v.classList.remove("on")}let L0=null,ii=-1;function Q(B){if(Et.active||!yo||so)return;let ft=E-ae>Xe;if(ae=E,ft||!L0){let jt=0,se=Bt;for(let le=0;le<lt.length;le++)if(lt[le]<=Ne-.02&&(jt=lt[le]),lt[le]>=Ne+.02){se=lt[le];break}L0={lo:jt,hi:se}}E<ii||(Re=!1,gt=Math.max(L0.lo,Math.min(L0.hi,gt+B)),gt=Math.max(Ne-me,Math.min(Ne+me,gt)))}function Ct(B){if(Et.active||!yo||so)return;let ft=Re?gt:Ne,jt;if(B>0)jt=lt.findIndex(se=>se>ft+.05);else{jt=-1;for(let se=lt.length-1;se>=0;se--)if(lt[se]<ft-.05){jt=se;break}}jt<0||(gt=lt[jt],Re=!0,ae=E)}let $t=null,Nt=B=>B.stopPropagation();["touchstart","touchmove","touchend","mousedown","mouseup","click","contextmenu"].forEach(B=>i.addEventListener(B,Nt)),i.addEventListener("pointerdown",B=>{if(B.stopPropagation(),!(B.target.closest("button, a")||B.target.closest(".tour-body"))){$t={x:B.clientX,y:B.clientY,lx:B.clientX,ly:B.clientY,t:performance.now(),moved:0,v:0,lt:performance.now()};try{i.setPointerCapture(B.pointerId)}catch(ft){}}}),i.addEventListener("pointermove",B=>{if(!$t)return;let ft=B.clientX-$t.lx,jt=B.clientY-$t.ly;$t.lx=B.clientX,$t.ly=B.clientY;let se=Math.abs(jt)>=Math.abs(ft)?-jt:-ft;$t.moved+=Math.abs(se);let le=performance.now(),en=se/Ce;$t.v=$t.v*.6+en/Math.max(.008,(le-$t.lt)/1e3)*.4,$t.lt=le,$t.moved>6&&Q(en)});let ce=B=>{let ft=$t;if($t=null,!!ft){if(Et.active){ft.moved<10&&performance.now()-ft.t<500?Et.tap():ft.y-(B?B.clientY:ft.ly)>30&&Et.swipe(1);return}ft.moved<10&&performance.now()-ft.t<500?Ct(1):performance.now()-ft.lt<120&&Q(Math.max(-1.6,Math.min(1.6,ft.v*.22)))}};i.addEventListener("pointerup",B=>{B.stopPropagation(),ce(B)}),i.addEventListener("pointercancel",()=>{$t=null}),i.addEventListener("wheel",B=>{if(Et.active){if(B.target.closest(".conf-ui"))return;B.preventDefault(),Et.wheel(B.deltaY);return}if(B.target.closest(".tour-body")){let jt=B.target.closest(".tour-body"),se=jt.scrollTop+jt.clientHeight>=jt.scrollHeight-2&&B.deltaY>0,le=jt.scrollTop<=0&&B.deltaY<0;if(!se&&!le)return}B.preventDefault();let ft=B.deltaMode===1?B.deltaY*16:B.deltaMode===2?B.deltaY*window.innerHeight:B.deltaY;Q(ft/Ge)},{passive:!1}),window.addEventListener("keydown",B=>{if(!yo||so||document.body.classList.contains("visiting"))return;if(Et.active){if(B.stopImmediatePropagation(),B.target&&/TEXTAREA|INPUT|BUTTON/.test(B.target.tagName))return;Et.key(B.key)&&B.preventDefault();return}let ft=B.key;if(["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(ft)>=0){if((ft==="Enter"||ft===" ")&&B.target&&B.target.tagName==="BUTTON")return;B.preventDefault(),B.stopImmediatePropagation(),Ct(1)}else["ArrowUp","ArrowLeft","PageUp"].indexOf(ft)>=0?(B.preventDefault(),B.stopImmediatePropagation(),Ct(-1)):ft==="Escape"?(B.preventDefault(),ke()):/^[wasdzq]$/i.test(ft)&&B.stopImmediatePropagation()},!0),window.addEventListener("keyup",B=>{yo&&!so&&/^(Arrow|[wasdzq]$)/i.test(B.key)&&B.stopImmediatePropagation()},!0),f.addEventListener("click",B=>{B.stopPropagation(),ke()}),["mousedown","pointerdown"].forEach(B=>d.addEventListener(B,ft=>ft.stopPropagation())),d.addEventListener("click",B=>{B.stopPropagation(),Pe()});let Se=to([8.6,1.75,44.3],[-3,1.85,44.5],55,0),_e=null,de=!1;function Pe(){if(!yo||so||Et.active||_e)return;Ka(),ue=-2;let B=Eo.eye;if(B[0]>.5&&B[0]<13.5&&B[2]>36&&B[2]<50){de=!1,Et.start(Eo,Qe);return}_e={t:0}}D.addEventListener("click",B=>{let ft=B.target.closest("button");ft&&(B.stopPropagation(),ft.dataset.act==="free"&&ke(),ft.dataset.act==="replay"&&Ye(),ft.dataset.act==="list"&&V1().show(!1),ft.dataset.act==="confess"&&(Ka(),ue=-2,Et.start(Eo,Qe)))});let xe=[null,[ca.zc-1.6,Math.PI/2],[11.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[42.5+bc[0]-7,0],[42.5+bc[1]-7,0],[42.5+bc[2]-7,0],[1e3,Math.PI/2],...gr.map(B=>[B.z-1.6,B.side==="left"?-Math.PI/2:Math.PI/2]),[ls[2]-1.6,Math.PI]],je=null,Ee=0;function ke(){if(!yo||so||!Dh)return;let B=Er(Ne),ft=xe[B];je=B<=1?{phase:"home",pos:xc.slice()}:B>=3&&B<=6?{phase:"floor",pos:Xa.slice()}:B===11?{phase:"floor",pos:Dl.slice()}:B===18?{phase:"floor",pos:ls.slice()}:null,Ee=B>=12?1:0,ft&&n.place&&n.place(ft[0],ft[1]),so={start:E,fromCam:Eo,fromLook:Object.assign({},Qe)},Ka(),i.hidden=!0,document.body.classList.remove("touring"),e.onExit&&e.onExit()}function Ye(){Ne=gt=0,ge=0,Re=!1,ue=-1,Kt=0,Mo=0,Oo={phase:"home",pos:xc.slice(),tumble:0},pe={start:E}}let pe={start:-1},io=!1,zo=[],ye={prev:null,vel:[0,0,0],axis:[1,0,0],dir:null,bank:0,rock:0,spin:0,fresh:!0};function Go(B){xn+=B*(Oo.phase==="floor"?0:1);let ft=Oo.tumble===void 0?0:Oo.tumble,jt=mc.fromTranslation(zo,Oo.pos);if(Oo.phase==="home")jt=mc.rotateY(jt,jt,2.2+Math.sin(xn*.9)*.15),jt=mc.rotateZ(jt,jt,-1+Math.sin(xn*1.3)*.12),jt=mc.rotateX(jt,jt,.4);else if(Oo.phase==="floor")jt=mc.rotateY(jt,jt,.65),jt=mc.rotateX(jt,jt,.16);else{let se=Oo.pos;if(ye.prev&&B>0){let yr=[se[0]-ye.prev[0],se[1]-ye.prev[1],se[2]-ye.prev[2]];if(Math.hypot(yr[0],yr[1],yr[2])<1.5){let Ac=Math.min(1,B*6);for(let vs=0;vs<3;vs++)ye.vel[vs]+=(yr[vs]/B-ye.vel[vs])*Ac}else ye.vel=[0,0,0]}ye.prev=se.slice();let le=ye.vel,en=Math.hypot(le[0],le[1],le[2]),nr=It(.25,1.4,en),Sr=It(.5,2,-le[1]),on=xn*.35*(.3+ft)+.65,xr=[Math.cos(on),0,Math.sin(on)];en>.001&&(xr=Bo(xr,$r(le,-1/en),nr));let nn=Math.min(1,B*4);ye.axis=Bo(ye.axis,xr,ye.fresh?1:nn);let fo=ye.axis,Yn=Math.hypot(fo[0],fo[1],fo[2])||1;fo=$r(fo,1/Yn);let jo=Eo.eye,$n=[jo[0]-se[0],jo[1]-se[1],jo[2]-se[2]],Dr=Math.hypot($n[0],$n[1],$n[2])||1,Gr=Dt(.6,.22,nr),Uo=[$n[0]/Dr*Gr,1+$n[1]/Dr*Gr,$n[2]/Dr*Gr],ha=fo[0]*Uo[0]+fo[1]*Uo[1]+fo[2]*Uo[2];Uo=Pd(Uo,$r(fo,ha));let yn=Math.hypot(Uo[0],Uo[1],Uo[2])||1;Uo=$r(Uo,1/yn);let za=[fo[1]*Uo[2]-fo[2]*Uo[1],fo[2]*Uo[0]-fo[0]*Uo[2],fo[0]*Uo[1]-fo[1]*Uo[0]],So=Math.hypot(le[0],le[2]),rn=0;if(So>.15&&ye.dir&&B>0){let yr=[le[0]/So,le[2]/So];rn=(ye.dir[0]*yr[1]-ye.dir[1]*yr[0])/B,ye.dir=yr}else So>.15&&(ye.dir=[le[0]/So,le[2]/So]);ye.bank+=(Math.max(-.8,Math.min(.8,rn*.3))*nr-ye.bank)*Math.min(1,B*3),ye.rock+=B*(1.5+2.4*nr),ye.spin+=B*Sr*7*(.4+ft);let ua=Math.sin(ye.rock)*(.26+.45*ft)*(1-.5*Sr)+ye.bank+ye.spin,ds=Math.sin(ye.rock*.63+1)*(.16+.3*ft)+(Oo.swing||0)*.9,Qa=Math.cos(ua),ps=Math.sin(ua),Vl=ao($r(Uo,Qa),$r(za,ps)),z0=ao($r(za,Qa),$r(Uo,-ps));Qa=Math.cos(ds),ps=Math.sin(ds);let ci=ao($r(fo,Qa),$r(Vl,ps)),kc=ao($r(Vl,Qa),$r(fo,-ps)),Yh=Math.sin(ye.rock+1.5708)*.035*(.3+ft)*(1-.5*nr),f0=ao(se,$r(za,Yh)),Tc=[ci[0],ci[1],ci[2],0,kc[0],kc[1],kc[2],0,z0[0],z0[1],z0[2],0,f0[0],f0[1],f0[2],1];for(let yr=0;yr<16;yr++)jt[yr]=Tc[yr];ye.fresh=!1}return Oo.phase!=="fly"&&(ye.prev=null,ye.vel=[0,0,0],ye.fresh=!0,ye.spin=0,ye.bank=0,ye.dir=null),{visible:!0,model:jt}}function fa(B){for(let ft in Bh)Qe[ft]=B[ft]!==void 0?B[ft]:Bh[ft]}function l0(B,ft){if(B<=1)return{phase:"home",pos:xc.slice(),tumble:0};let jt=p5[B];if(jt){let se=jt.amp;return{phase:"fly",pos:ao(jt.pos(),[Math.sin(ft*.55)*se[0],Math.sin(ft*.8)*se[1],(1-Math.cos(ft*.45))*se[2]]),tumble:jt.tumble}}return{phase:"floor",pos:(B>=18?ls:B>=10?Dl:Xa).slice(),tumble:0}}let eo=0,uo=null;function In(B){let ft=Math.min(.1,Math.max(0,B-eo));if(eo=B,E=B,io||(io=!0,pe.start=B),so)return null;if(_e&&(_e.t+=ft,_e.t>=.7&&(_e=null,de=!0,Et.start(Se,Object.assign({},Bh,{fade:1,fadeColor:[0,0,0]})))),Et.active){let So=Et.update(ft);return Eo=So.camera,fa(So.look),o&&window.__camOverride&&(Eo=window.__camOverride),o&&window.__lookOverride&&Object.assign(Qe,window.__lookOverride),{camera:Eo,walker:null,door:1,look:Qe,leaf:Go(ft)}}if(!Re&&!$t&&E-ae>ze){let So=Er(gt);Math.abs(lt[So]-gt)<no&&(gt=lt[So])}let jt=gt-Ne;if(Re){let rn=Math.sign(jt)*Math.min(_o,Math.sqrt(2*Xo*Math.abs(jt)))-ge;ge+=Math.sign(rn)*Math.min(Math.abs(rn),Xo*ft),Ne+=ge*ft,(jt>0&&Ne>=gt||jt<0&&Ne<=gt||Math.abs(gt-Ne)<1e-4)&&(Ne=gt,ge=0,Re=!1)}else{let So=WS(Ne,gt,ge,lo,ft,3);Ne=So[0],ge=So[1],Math.abs(gt-Ne)<1e-4&&Math.abs(ge)<.001&&(Ne=gt,ge=0)}let se=0;for(;se<$d.length-1&&Ne>=lt[se+1];)se++;let le=$d[se],en=Qr((Ne-lt[se])/le.dur),nr=cs[se],Sr=cs[se+1],on=Er(Ne);on!==Kt&&(Kt=on,Mo=0);let xr=Math.abs(Ne-lt[on])<.02;xr&&(Mo+=ft);let nn=1-It(0,1.2,Math.abs(Ne-lt[on])),fo=le.leaf(en);if(fo.pos?Oo=Object.assign({},fo):Oo=Object.assign({},fo,{pos:fo.phase==="home"?xc.slice():(se>=10?Dl:Xa).slice()}),p5[on]&&nn>0){let So=l0(on,Mo);Oo.pos=Bo(Oo.pos,So.pos,nn)}let Yn=le.walker&&(en>.01||se===6)?le.walker(en):null;uo=Yn==null?null:{x:Yn,z:Fd,heading:Math.PI/2,phase:(Yn-g5)/ZS};let jo=le.cam(en,nr.cam(0),Sr.cam(0),Oo);if(nn>0&&Mo>0){let So=cs[on],rn=So.cam(0),ua=So.cam(Mo);jo=to(ao(jo.eye,$r(Pd(ua.eye,rn.eye),nn)),ao(jo.target,$r(Pd(ua.target,rn.target),nn)),jo.fov+(ua.fov-rn.fov)*nn,jo.roll+(ua.roll-rn.roll)*nn)}if(nn>0&&!Zt){let So=E,rn=.006*nn,ua=Math.sin(So*.61)*.6+Math.sin(So*1.37+1.3)*.4,ds=Math.sin(So*.47+2.1)*.6+Math.sin(So*1.13+.4)*.4,Qa=Math.sin(So*.53+4)*.5+Math.sin(So*.97+2.6)*.5;jo=to(ao(jo.eye,[ua*rn,ds*rn*.7,Qa*rn]),ao(jo.target,[ds*rn*1.8,ua*rn*1.4,0]),jo.fov,jo.roll+Qa*.0012*nn)}Eo=jo;let $n=Hh(se),Dr=Hh(se+1),Gr=Object.assign({},$n,le.look(en,$n,Dr,Oo,jo.eye));if(nn>0){let So=Hh(on);for(let rn in So)typeof So[rn]=="number"&&(Gr[rn]=Dt(Gr[rn],So[rn],nn))}fa(Gr);let ha=xr&&Math.abs(gt-Ne)<.02?on:-1;ha!==ue&&(ha>=0&&(ii=E+we),ue=ha,ha>=0?Xn(ha):Ka()),u.querySelectorAll("i").forEach((So,rn)=>So.classList.toggle("on",rn===on));let yn=ue>=0?K[ue]:null;yn&&yn.fill&&!yn.filled&&(yn.fill(),yn.filled&&(yn.classList.remove("on"),yn.offsetWidth,yn.classList.add("on")));let za=Qr((B-pe.start)/2.6);return za<1&&(Qe.fade=Math.max(Qe.fade,1-It(0,1,za)),Qe.fadeColor=[0,0,0]),o&&window.__camOverride&&(Eo=window.__camOverride),o&&window.__lookOverride&&Object.assign(Qe,window.__lookOverride),{camera:Eo,walker:uo,door:le.door?le.door(en):se>=12?1:0,look:_e?Object.assign(Qe,{fade:Math.max(Qe.fade||0,Qr(_e.t/.6)),fadeColor:[0,0,0]}):Qe,leaf:Go(ft)}}return o&&(window.__tour={go:Ct,exit:ke,wind:Q,confess(){Ka(),ue=-2,Et.start(Eo,Qe)},note:()=>Pe(),conf:Et,paper:Ph().STATE,seek(B,ft){Ne=gt=lt[B]+(lt[B+1]-lt[B])*ft,ge=0,Re=!1,ae=E+1e6,pe.start=E-10,io=!0},jump(B){Ne=gt=lt[B],ge=0,Re=!1,Mo=0,ae=E,pe.start=E-10,io=!0},state:()=>({current:Er(Ne),scroll:+Ne.toFixed(3),target:+gt.toFixed(3),shown:ue,move:Math.abs(gt-Ne)>.02?{p:Ne}:null,camNow:Eo,leaf:Oo,look:Qe})}),{update:In,get active(){return yo&&!so},handover(B){if(!so)return null;let ft=Qr((B-so.start)/1.8);return ft>=1?(yo=!1,null):{from:so.fromCam,fromLook:so.fromLook,k:gn(ft)}},restingDoor:()=>Ee,restingLeaf(){return je?(Oo=je,Go(0)):null},mix:oi,cam:to}}});var ik=tm(),Ya=va(),ep=V1(),Xh=Ya.reflection,ck=!1,I5=(t,e,o,n,r)=>n+(t-e)*(r-n)/(o-e),op=()=>I5(window.innerWidth/window.innerHeight,16/9,9/16,1.7,Math.PI/3);navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)&&(op=()=>I5(window.innerWidth/window.innerHeight,16/9,9/16,1.5,Math.PI/3));var $5=()=>2*Math.atan(Math.tan(op()*.5)*window.innerHeight/window.innerWidth),lk=dm(),Bl=new lk;Bl.showPanel(0);ck&&document.body.appendChild(Bl.dom);var un,Sc,Xd,Mc,Yd,hn;function fk(){try{let t=document.createElement("canvas"),e=t.getContext("webgl")||t.getContext("experimental-webgl");return!!(e&&e.getExtension("OES_standard_derivatives"))}catch(t){return!1}}if(!fk())throw ik.finish(),ep.show(!0),new Error("This device cannot draw the 3D gallery; showing the list instead.");un=pm()({extensions:["OES_element_index_uint","OES_standard_derivatives"],optionalExtensions:["EXT_texture_filter_anisotropic","WEBGL_depth_texture"],attributes:{alpha:!1,antialias:!1},pixelRatio:Ya.pixelRatio});location.hash==="#list"&&ep.show(!1);window.addEventListener("hashchange",()=>{location.hash==="#list"&&ep.show(!1)});Sc=t2()();var hk=Eu();Xd=hk(un,Sc,Xh);Mc=bg()(un,Sc);Yd=Eg()(un);var b5=Dg()(un,Sc),w5=Qg()(un),_5=t3()(un),M5=g3()(un),E5=_3()(un),S5=T3()(un),hs=H3()(un),Kd=nd(),F5=Af(),uk=Kc(),Qd=ad(),Zd=cr(),Vn=ah(),Jd=Z3(),q5=Mh(),{A:_c}=xa();hn=Oy()(Sc,$5);var Ec=Iy()(un,Ya),fs=Gy()(un),k5=Uy()(un),dk=Wy()(un,Ya),pk=Zy()(un,Ya),T5=G0()(un),A5=Ph()(un),L5=B0()(un),z5=Qi()(un),c0=y5()({fps:hn,paintings:()=>Mc.interactables(),avatar:hs,onExit:()=>hn.setPaused(!1)});hn.setPaused(!0);/tourdebug/.test(location.search)&&(window.__post=Ec);var ri=[],Wl=[],Aa=[7,2,1.6];Sc.viewer=Aa;var vk=un({cull:{enable:!0,face:"back"},uniforms:{view:()=>ri,proj:()=>Wl,yScale:1,mirrorOn:()=>Xh?1:0,night:()=>Zd.night,time:un.context("time")}}),mk=un({cull:{enable:!0,face:"front"},uniforms:{yScale:-1}}),D5=document.createElement("style");D5.textContent=`

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
`;document.head.appendChild(D5);var La=document.createElement("button");La.className="painting-plaque";La.type="button";La.setAttribute("aria-label","Read painting");document.body.appendChild(La);var qr=document.createElement("div");qr.className="story-overlay";qr.innerHTML=`

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

		${F5.line("story-contact")}

		<div class="visit-row story-visit"></div>

		<p
			class="story-body"
			id="story-body"
		></p>

	</article>
`;document.body.appendChild(qr);var us=document.createElement("div");us.className="museum-links";us.innerHTML=F5.icons("museum-link");us.insertBefore(Ld()("museum-link"),us.firstChild);us.insertBefore(q5.button("museum-link"),us.firstChild.nextSibling);["mousedown","pointerdown","click"].forEach(t=>us.addEventListener(t,e=>e.stopPropagation()));document.body.appendChild(us);var gk=qr.querySelector("#story-title"),xk=qr.querySelector("#story-body"),N5=qr.querySelector("#story-meta"),yk=qr.querySelector(".story-contact"),Ul=qr.querySelector(".story-visit");Ul.addEventListener("click",t=>{t.target.closest(".visit-btn")&&si&&Qd.open(si)});var bk=qr.querySelector(".story-close"),si=null,Zr={p:0,target:0,last:0},G5={title:Kd.title,description:Kd.text,isAbout:!0},A0=null;function np(t){t&&(si=t,gk.textContent=t.title||"",xk.textContent=t.description||"",N5.textContent=t.isAbout?"":uk(t),N5.hidden=!!t.isAbout,yk.hidden=!t.isAbout,Ul.innerHTML=t.isAbout?"":Qd.button(t),Ul.hidden=!Ul.innerHTML,Ul.hidden||Qd.warm(t),qr.classList.toggle("about-mode",!!t.isAbout),qr.classList.add("open"),Zr.target=t.isAbout?1:0,A0=t,La.classList.remove("visible"),hn.setPaused(!0))}function rp(){qr.classList.remove("open"),Zr.target=0,si=null,A0=null,hn.setPaused(!1)}function H5(t){t&&(t.preventDefault(),t.stopPropagation()),A0&&np(A0)}La.addEventListener("pointerup",H5,!0);La.addEventListener("touchend",H5,{passive:!1,capture:!0});La.addEventListener("click",t=>{t&&(t.preventDefault(),t.stopPropagation()),si===null&&A0&&np(A0)},!0);bk.addEventListener("click",rp);qr.addEventListener("click",t=>{t.target===qr&&rp()});window.addEventListener("keydown",t=>{t.code==="Escape"&&qr.classList.contains("open")&&rp()});function R5(t,e){let o=e[0],n=e[1],r=e[2];return[t[0]*o+t[4]*n+t[8]*r+t[12],t[1]*o+t[5]*n+t[9]*r+t[13],t[2]*o+t[6]*n+t[10]*r+t[14],t[3]*o+t[7]*n+t[11]*r+t[15]]}function wk(){if(si)return;if(c0.active){A0=null,La.classList.remove("visible");return}let t=Mc.interactables(),e=hn.forward[0],o=hn.forward[2],n=Math.hypot(e,o)||1,r=null,a=1/0;for(let s of t){let i=s.paintingPosition,c=0,f=0;s.side==="left"?c=1:s.side==="right"?c=-1:s.side==="corridor"?f=1:f=-1;let l=i[0]-hn.pos[0],d=i[2]-hn.pos[2],u=-(l*c+d*f),v=Math.abs(l*f-d*c),p=-(e*c+o*f)/n,h=s.side==="end"?11:8,m=(s.width||2)/2;p>.9&&u>.5&&u<h&&v<m+.8&&u<a&&(r=s,a=u)}if(!r){let s=hn.pos[0],i=hn.pos[2];e/n>.85&&s<13.6&&i>_c.z0-.5&&i<_c.z1+.5&&(r=Object.assign({},G5,{plaqueTitle:Kd.name}))}r?(A0=r,La.textContent=r.isAbout?"ABOUT  \xB7  "+r.plaqueTitle:"READ  \xB7  "+r.title,La.classList.add("visible")):(A0=null,La.classList.remove("visible"))}var ap=Vi();function _k(){let t=hs.state;if(!t||!t.glowPos)return null;let e=R5(hn.view(),[t.glowPos[0],t.glowPos[1]-.08,t.glowPos[2],1]),o=R5(hn.proj(),e);return o[3]<=.05?null:[(o[0]/o[3]*.5+.5)*window.innerWidth,(.5-o[1]/o[3]*.5)*window.innerHeight,o[3]]}var tp=null;window.addEventListener("pointerdown",t=>{tp={x:t.clientX,y:t.clientY,t:performance.now()}},!0);window.addEventListener("pointerup",t=>{let e=tp;if(tp=null,!e||si||c0.active||!t.target||!/^(CANVAS|BODY)$/.test(t.target.tagName)||Math.hypot(t.clientX-e.x,t.clientY-e.y)>12||performance.now()-e.t>600)return;let o=_k();if(!o)return;let n=!!document.pointerLockElement,r=n?window.innerWidth/2:t.clientX,a=n?window.innerHeight/2:t.clientY,s=Math.max(t.pointerType==="touch"?60:40,260/o[2]);Math.hypot(r-o[0],a-o[1])<s&&(t.preventDefault(),t.stopPropagation(),np(G5))},!0);function Mk(t){let e=Math.min(Math.max(t-Zr.last,0),.1);Zr.last=t;let o=e/1.6;if(Zr.p=Zr.target>Zr.p?Math.min(1,Zr.p+o):Math.max(0,Zr.p-o),Zr.p<=0)return;let n=Zr.p<.5?2*Zr.p*Zr.p:1-Math.pow(-2*Zr.p+2,2)/2,r=window.innerHeight>window.innerWidth,a=hs.state,s=a&&a.hipsPos?a.hipsPos[0]:_c.cx-1.2,i=a&&a.hipsPos?a.hipsPos[2]:_c.zc,c=r?[s-2.3,2,i-.1]:[s-1.55,1.55,i+.3],f=r?[s+.1,.2,i-.1]:[s+.1,.7,i+.6],l=hn.pos,d=hn.forward,u=[l[0],l[1],l[2]],v=[l[0]+d[0],l[1]+d[1],l[2]+d[2]],p=(y,b)=>y.map((w,_)=>w+(b[_]-w)*n),h=[_c.cx-6.2,1.7,_c.zc],m=1-n,g=u.map((y,b)=>m*m*y+2*m*n*h[b]+n*n*c[b]);ap.lookAt(hn.view(),g,p(v,f),[0,1,0])}var U5=/[?&]studio\b/.test(location.search);if(U5){let t=document.createElement("style");t.textContent=".tour, #museum-mobile-controls, .painting-plaque { display: none !important; }",document.head.appendChild(t);let e=()=>{let o=Qi(),n=cr(),r=o.rainTarget()>.5,a=n.isNight;!r&&!a?o.setRain(!0):r&&!a?n.toggle():r&&a?o.setRain(!1):n.toggle()};window.addEventListener("pointerdown",e),window.addEventListener("keydown",o=>{(o.key==="n"||o.key===" ")&&e()})}var ni={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},ai=null,jl=!1,Wh=!1;function Ek(t,e,o,n){let r=[o[0]-e[0],o[1]-e[1],o[2]-e[2]],a=Math.hypot(r[0],r[1],r[2])||1,s=[-r[2]/a,0,r[0]/a],i=Math.hypot(s[0],s[2])||1;s=[s[0]/i,0,s[2]/i];let c=Math.cos(n),f=Math.sin(n);return ap.lookAt(t,e,o,[s[0]*f,c,s[2]*f])}function Sk(t){let e=window.innerWidth/window.innerHeight,o=Ec.shot,n=c0.active?c0.update(t):null,r=n?null:c0.handover(t),a=null,s=ni;if(n){a=n.camera,s=n.look,ai=n.leaf;let i=window.__walkOverride&&/tourdebug/.test(location.search)?window.__walkOverride:n.walker||null;hs.setWalk(i),jl=!!i,fs.setOpen(n.door||0)}else ai=c0.restingLeaf(),hs.setWalk(null),jl=!1,fs.setOpen(c0.restingDoor());if(r){let i=hn.pos,c=hn.forward,f=c0.cam([i[0],i[1],i[2]],[i[0]+c[0],i[1]+c[1],i[2]+c[2]],$5()*180/Math.PI,0);a=c0.mix(r.from,f,r.k),s={};for(let l in ni)s[l]=Array.isArray(ni[l])?ni[l]:r.fromLook[l]+(ni[l]-r.fromLook[l])*r.k}if(a&&n&&(a=Jd.apply(a,t)),U5&&!(/tourdebug/.test(location.search)&&window.__camOverride)){let i=Qi().previewCam(t);a=i,s=Object.assign({},ni,{fade:i.fade,focus:8})}if(a)Ek(ri,a.eye,a.target,a.roll||0),ap.perspective(Wl,a.fov*Math.PI/180,e,.1,700),Aa[0]=a.eye[0],Aa[1]=a.eye[1],Aa[2]=a.eye[2];else{let i=hn.view(),c=hn.proj();for(let u=0;u<16;u++)ri[u]=i[u],Wl[u]=c[u];let f=i[12],l=i[13],d=i[14];Aa[0]=-(i[0]*f+i[1]*l+i[2]*d),Aa[1]=-(i[4]*f+i[5]*l+i[6]*d),Aa[2]=-(i[8]*f+i[9]*l+i[10]*d)}for(let i in ni)o[i]=s[i];n&&Jd.pull(o,t)}var la={wake:[[0,-50,0,0],[0,-50,0,0],[0,-50,0,0],[0,-50,0,0]],wakeDir:[0,0,1],gust:[0,0],focus:6,aperture:0},jd=[9,9,9,9],C5=[0,0,0,0],Gl=0,Wd=0,wc=null,O5=0,P5=0,Hl=0;function kk(t){let e=Math.min(.1,Math.max(0,t-O5));O5=t,la.focus=Ec.shot.focus,la.aperture=Ya.post>=2?Ec.shot.aperture:0;for(let s=0;s<4;s++)jd[s]+=e,la.wake[s][3]=C5[s]*Math.exp(-jd[s]/1.1);let o=ai&&ai.visible?ai.model:null;if(o&&e>0){let s=[o[12],o[13],o[14]];if(wc){let i=[s[0]-wc[0],s[1]-wc[1],s[2]-wc[2]],c=Math.hypot(i[0],i[1],i[2]),f=c/e;if(c<1.5&&f>.12){let l=Math.min(1,e*8);for(let u=0;u<3;u++)la.wakeDir[u]+=(i[u]/c-la.wakeDir[u])*l;let d=Math.hypot(la.wakeDir[0],la.wakeDir[1],la.wakeDir[2])||1;for(let u=0;u<3;u++)la.wakeDir[u]/=d;if(Wd+=e,Wd>.14){Wd=0;let u=la.wake[Gl];u[0]=s[0],u[1]=s[1],u[2]=s[2],C5[Gl]=Math.min(1,(f-.12)/1.6)*.5,jd[Gl]=0,Gl=(Gl+1)%4}}}wc=s}else o||(wc=null);let n=fs.openNow?fs.openNow():0,r=e>0?(n-P5)/e:0;P5=n;let a=Math.max(-1,Math.min(1,r*1.2));Hl+=(a-Hl)*Math.min(1,e*(Math.abs(a)>Math.abs(Hl)?6:.7)),la.gust[0]+=Hl*5.5*e,la.gust[1]=Math.abs(Hl)}var Vd=0,Vh=!1;un.frame(function({time:t}){if(document.body.classList.contains("visiting")){Vd=0;return}Bl.begin(),Zd.tick(t);let e=c0.active&&Jd.resting&&Zd.settled&&(Ya.isPhone||Ya.scale<1||Ya.level>0);if(e){if(Vh=!Vh,Vh){Bl.end();return}}else Vh=!1;let o=t-Vd;Vd=t,Ya.frame(e?o/2:o),Xh=Ya.reflection,hn.tick({time:t}),Mk(t),Mc.update(hn.pos,hn.fmouse[1],op()),wk(),Sk(t),Vn.update(ri,Wl,Aa),q5.listen(Aa),Wh=!jl&&Vn.room("stair")&&(!Vn.room("court")||Aa[0]<.5||Aa[2]>30),hs.setPiano(Wh),kk(t),Ec.capture(arguments[0],{view:ri,proj:Wl,eye:Aa},()=>{vk(()=>{Xh&&Vn.floor&&mk(()=>{Vn.room("studio",!0)&&z5({reflected:!0}),Vn.zone!=="studio"&&(Xd(),b5({reflected:!0}),T5(),Vn.room("stair",!0)&&(L5({reflected:!0}),A5({reflected:!0,view:ri})),Vn.room("court",!0)&&S5(),(Wh||Vn.room("court",!0)||jl)&&hs(),Yd(Mc.batch()),Vn.room("street",!0)&&w5(),Vn.room("garden",!0)&&M5(),Vn.room("florence",!0)&&E5(),k5(ai),fs(),_5(),fs.glass())}),Vn.room("studio")&&z5(),Vn.zone!=="studio"&&(Xd(),b5(),T5(),Vn.room("stair")&&(L5(),A5({view:ri})),Vn.room("court")&&S5(),(Wh||Vn.room("court")||jl)&&hs(),Yd(Mc.batch()),Vn.room("street")&&w5(),Vn.room("garden")&&(M5(),pk()),Vn.room("florence")&&E5(),k5(ai),fs(),dk(la),_5(),fs.glass())})}),Ec.present(),Bl.end()});})();
