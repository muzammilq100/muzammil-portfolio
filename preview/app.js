"use strict";(()=>{var de=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var hm=de((XS,fm)=>{"use strict";var M0=document.getElementById("loader"),_0=M0&&M0.querySelector(".loader-name"),jc=0,Tf=0,Lf=!1,_4=performance.now(),k0=.06,w0=0,Zu=0,am=!1,M4=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;function k4(e){if(!_0)return;let t=_0.offsetWidth||1,n=(t*(1.14-1.28*e)-t).toFixed(1)+"px 0";_0.style.webkitMaskPosition=n,_0.style.maskPosition=n}function cm(e){let t=Math.min(.05,Zu?(e-Zu)/1e3:.016);Zu=e;let o=Lf?.75:.22+(k0-w0)*1.2;if(w0=Math.min(k0,w0+Math.max(0,o)*t),M4&&(w0=k0),k4(w0),Lf&&w0>=.999){am||(am=!0,setTimeout(lm,650));return}requestAnimationFrame(cm)}_0&&requestAnimationFrame(cm);function im(){let e=jc?Tf/Math.max(jc,24):0;k0=Math.max(k0,Math.min(.9,.06+e*.84))}function lm(){M0&&(M0.classList.add("done"),setTimeout(()=>M0.remove(),1400))}function Ju(){Lf||(Lf=!0,window.__galleryReady=!0,M0&&(k0=1,_0||lm()))}var sm=null;function E4(){clearTimeout(sm),Tf>=jc&&performance.now()-_4>600&&(sm=setTimeout(()=>{Tf>=jc&&Ju()},450))}setTimeout(Ju,2e4);var S4=e=>/(^|\/)(res|images)\//.test(e),Af=window.fetch.bind(window);async function A4(e,t){let o=await Af(e+".gz",t);if(!o.ok)throw new Error("no .gz");let n=new Uint8Array(await o.arrayBuffer());if(!(n[0]===31&&n[1]===139))return new Response(n);let r=new Blob([n]).stream().pipeThrough(new DecompressionStream("gzip")),a=await new Response(r).arrayBuffer();return new Response(a,{status:200,headers:{"Content-Type":"application/octet-stream"}})}window.fetch=function(e,t){let o=typeof e=="string"?e:e&&e.url||"";if(!S4(o))return Af(e,t);jc++,im();let n=a=>(Tf++,im(),E4(),a),r;return/\.bin$/.test(o)&&typeof DecompressionStream!="undefined"?r=A4(o,t).catch(()=>Af(e,t)):r=Af(e,t),r.then(n,a=>{throw n(),a})};fm.exports={finish:Ju}});var sa=de((YS,pm)=>{"use strict";var um=typeof navigator!="undefined"&&navigator.userAgent||"",T4=typeof window!="undefined"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches&&!window.matchMedia("(any-pointer: fine)").matches,Ha=/Android|iPhone|iPad|iPod|Mobile|Silk|Kindle|webOS|BlackBerry|Opera Mini|IEMobile/i.test(um)||/Macintosh/.test(um)&&typeof navigator!="undefined"&&navigator.maxTouchPoints>1||T4,zf=typeof window!="undefined"&&window.devicePixelRatio||1,L4=typeof location!="undefined"&&/[?&](studio|redroom)\b/.test(location.search),vo={isPhone:Ha,pixelRatio:L4?Ha?Math.min(zf,1.25):Math.min(zf,1.5):Ha?Math.min(zf,1.5):Math.min(zf,2),reflection:!Ha,gardenDetail:Ha?0:1,leafShare:Ha?.65:1,motion:!Ha,post:Ha?1:2,level:Ha?1:0};vo.scale=1;var z4=Ha?.55:.6,Wc=0,Cf=0,Vc=0,Xc=0,E0=1,Yc=0,Nf=48,S0=null,e1=0;function C4(e){S0={fps:e,scale:vo.scale},vo.scale>.86?vo.scale=.85:vo.reflection?vo.stepDown():vo.scale>.71?vo.scale=.7:vo.stepDown()||(vo.scale=Math.max(z4,vo.scale-.1))}var dm=!0;try{/[?&]noadapt\b/.test(location.search)&&(dm=!1)}catch(e){}vo.frame=e=>{if(!dm)return;if(!(e>0)||e>1){Wc=0,Cf=0;return}if(Wc+=e,Cf++,Wc<.75)return;let t=Cf/Wc;if(Wc=0,Cf=0,Yc>0&&(Yc-=.75,Yc<=0&&(E0=1)),S0){if(t<S0.fps*1.08&&S0.scale>vo.scale){if(++e1>=2){vo.scale=1,E0=1,Yc=0,Nf=Math.min(Nf,t*.85),e1=0,Vc=0,S0=null;return}}else e1=0;S0=null}if(t<Nf){if(Xc=0,++Vc>=2){if(Vc=0,vo.scale>.61&&vo.climbed){E0=vo.scale-.05,Yc=40,vo.scale=E0,vo.climbed=!1;return}C4(t)}}else t>Math.max(Nf*1.15,55)?(Vc=0,++Xc>=6&&vo.scale<E0-.001?(vo.scale=Math.min(E0,vo.scale+.05),vo.climbed=!0,Xc=0):Xc>=6&&(vo.climbed=!1)):(Vc=0,Xc=0)};vo.stepDown=()=>{if(vo.reflection)vo.reflection=!1;else if(vo.gardenDetail>0||vo.motion)vo.gardenDetail=0,vo.motion=!1,vo.leafShare=Math.min(vo.leafShare,.65);else if(vo.post>0)vo.post--;else return!1;return vo.level++,!0};pm.exports=vo});var t1=de((KS,vm)=>{"use strict";vm.exports=[{file:"IMG_20250717_102753.jpg",slug:"love-me-like-i-am-already-dead",title:"Love me like I am Already Dead",medium:"Oil on canvas",size:[61,91],description:`We live in a world soaked in hypocrisy. We\u2019re told not to \u201Cspeak ill of the dead,\u201D yet we spend lifetimes speaking ill of the living. We judge, ignore, neglect\u2014and then pretend to mourn with grace when it\u2019s too late. People say beautiful things at funerals, but only after burying a lifetime of cruelty or silence.

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
but the loneliness of having no one willing to admit it happened.`}]});var Rf=de((QS,xm)=>{"use strict";var _r={instagram:"muzammil_qureshi",email:"muzammilqureshi100@gmail.com"},mm='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/></svg>',gm='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M3.5 7l8.5 6 8.5-6"/></svg>';_r.instagramUrl="https://instagram.com/"+_r.instagram;_r.mailUrl="mailto:"+_r.email+"?subject="+encodeURIComponent("Your paintings");_r.icons=e=>`
	<a class="${e}" href="${_r.instagramUrl}" target="_blank" rel="noopener" aria-label="Instagram: @${_r.instagram}" title="Instagram">${mm}</a>
	<a class="${e}" href="${_r.mailUrl}" aria-label="Email ${_r.email}" title="Email">${gm}</a>`;_r.line=e=>`
	<span class="${e}">
		<a href="${_r.instagramUrl}" target="_blank" rel="noopener">${mm}<span>@${_r.instagram}</span></a>
		<a href="${_r.mailUrl}">${gm}<span>${_r.email}</span></a>
	</span>`;xm.exports=_r});var Kc=de((ZS,ym)=>{"use strict";ym.exports=e=>{if(!e)return"";let t=[];return e.medium&&t.push(e.medium),e.size&&e.size.length===2&&t.push(e.size[0]+" \xD7 "+e.size[1]+" cm"),t.join("  \xB7  ")}});var o1=de((JS,_m)=>{"use strict";var N4=t1(),R4=Rf(),bm=Kc(),P4=sa(),Ai=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),O4=`
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
`,Mr=null;function I4(e){if(Mr){Mr.hidden=!1,requestAnimationFrame(()=>Mr.classList.add("on"));return}let t=document.createElement("style");t.textContent=O4,document.head.appendChild(t);let o=!P4.isPhone;Mr=document.createElement("div"),Mr.className="plist",Mr.setAttribute("role","region"),Mr.setAttribute("aria-label","All paintings"),Mr.innerHTML=`
		${e?"":'<button type="button" class="plist-close">Back to the gallery</button>'}
		<header class="plist-head">
			<h1>Muzammil</h1>
			<p class="plist-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</p>
			${R4.line("plist-contact")}
		</header>
		${e?'<p class="plist-note">This device could not open the 3D gallery, so here are the paintings on their own.</p>':""}
		<main class="plist-grid">
			${N4.map(r=>`
			<article class="plist-item" id="${Ai(r.slug)}">
				<img loading="lazy" decoding="async" alt="${Ai(r.title)}, ${Ai(bm(r))}"
					src="images/web/${Ai(r.slug)}${o?"":"-1024"}.webp"
					onerror="this.onerror=null;this.src='images/${Ai(r.file)}'">
				<p class="plist-meta">${Ai(bm(r))}</p>
				<h2>${Ai(r.title)}</h2>
				<details><summary>Read its story</summary>
					${String(r.description).split(/\n\s*\n/).map(a=>`<p>${Ai(a.trim())}</p>`).join("")}
				</details>
			</article>`).join("")}
		</main>`,["mousedown","pointerdown","click","wheel","touchstart","touchmove","keydown"].forEach(r=>Mr.addEventListener(r,a=>a.stopPropagation(),{passive:!0}));let n=Mr.querySelector(".plist-close");n&&n.addEventListener("click",wm),document.body.appendChild(Mr),requestAnimationFrame(()=>Mr.classList.add("on"))}function wm(){Mr&&(Mr.classList.remove("on"),setTimeout(()=>{Mr.hidden=!0},500),location.hash==="#list"&&history.replaceState(null,"",location.pathname+location.search))}_m.exports={show:I4,hide:wm}});var Mm=de((n1,r1)=>{(function(e,t){typeof n1=="object"&&typeof r1!="undefined"?r1.exports=t():typeof define=="function"&&define.amd?define(t):e.Stats=t()})(n1,function(){var e=function(){function t(u){return r.appendChild(u.dom),u}function o(u){for(var h=0;h<r.children.length;h++)r.children[h].style.display=h===u?"block":"none";n=u}var n=0,r=document.createElement("div");r.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",r.addEventListener("click",function(u){u.preventDefault(),o(++n%r.children.length)},!1);var a=(performance||Date).now(),i=a,s=0,c=t(new e.Panel("FPS","#0ff","#002")),f=t(new e.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var l=t(new e.Panel("MB","#f08","#201"));return o(0),{REVISION:16,dom:r,addPanel:t,showPanel:o,begin:function(){a=(performance||Date).now()},end:function(){s++;var u=(performance||Date).now();if(f.update(u-a,200),u>i+1e3&&(c.update(1e3*s/(u-i),100),i=u,s=0,l)){var h=performance.memory;l.update(h.usedJSHeapSize/1048576,h.jsHeapSizeLimit/1048576)}return u},update:function(){a=this.end()},domElement:r,setMode:o}};return e.Panel=function(t,o,n){var r=1/0,a=0,i=Math.round,s=i(window.devicePixelRatio||1),c=80*s,f=48*s,l=3*s,u=2*s,h=3*s,d=15*s,v=74*s,p=30*s,m=document.createElement("canvas");m.width=c,m.height=f,m.style.cssText="width:80px;height:48px";var g=m.getContext("2d");return g.font="bold "+9*s+"px Helvetica,Arial,sans-serif",g.textBaseline="top",g.fillStyle=n,g.fillRect(0,0,c,f),g.fillStyle=o,g.fillText(t,l,u),g.fillRect(h,d,v,p),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(h,d,v,p),{dom:m,update:function(y,b){r=Math.min(r,y),a=Math.max(a,y),g.fillStyle=n,g.globalAlpha=1,g.fillRect(0,0,c,d),g.fillStyle=o,g.fillText(i(y)+" "+t+" ("+i(r)+"-"+i(a)+")",l,u),g.drawImage(m,h+s,d,v-s,p,h,d,v-s,p),g.fillRect(h+v-s,d,s,p),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(h+v-s,d,s,i((1-y/b)*p))}}},e})});var km=de((a1,i1)=>{(function(e,t){typeof a1=="object"&&typeof i1!="undefined"?i1.exports=t():typeof define=="function"&&define.amd?define(t):e.createREGL=t()})(a1,function(){"use strict";var e=function(x){return x instanceof Uint8Array||x instanceof Uint16Array||x instanceof Uint32Array||x instanceof Int8Array||x instanceof Int16Array||x instanceof Int32Array||x instanceof Float32Array||x instanceof Float64Array||x instanceof Uint8ClampedArray},t=function(x,M){for(var C=Object.keys(M),J=0;J<C.length;++J)x[C[J]]=M[C[J]];return x},o=`
`;function n(x){return typeof atob!="undefined"?atob(x):"base64:"+x}function r(x){var M=new Error("(regl) "+x);throw console.error(M),M}function a(x,M){x||r(M)}function i(x){return x?": "+x:""}function s(x,M,C){x in M||r("unknown parameter ("+x+")"+i(C)+". possible values: "+Object.keys(M).join())}function c(x,M){e(x)||r("invalid parameter type"+i(M)+". must be a typed array")}function f(x,M){switch(M){case"number":return typeof x=="number";case"object":return typeof x=="object";case"string":return typeof x=="string";case"boolean":return typeof x=="boolean";case"function":return typeof x=="function";case"undefined":return typeof x=="undefined";case"symbol":return typeof x=="symbol"}}function l(x,M,C){f(x,M)||r("invalid parameter type"+i(C)+". expected "+M+", got "+typeof x)}function u(x,M){x>=0&&(x|0)===x||r("invalid parameter type, ("+x+")"+i(M)+". must be a nonnegative integer")}function h(x,M,C){M.indexOf(x)<0&&r("invalid value"+i(C)+". must be one of: "+M)}var d=["gl","canvas","container","attributes","pixelRatio","extensions","optionalExtensions","profile","onDone"];function v(x){Object.keys(x).forEach(function(M){d.indexOf(M)<0&&r('invalid regl constructor argument "'+M+'". must be one of '+d)})}function p(x,M){for(x=x+"";x.length<M;)x=" "+x;return x}function m(){this.name="unknown",this.lines=[],this.index={},this.hasErrors=!1}function g(x,M){this.number=x,this.line=M,this.errors=[]}function y(x,M,C){this.file=x,this.line=M,this.message=C}function b(){var x=new Error,M=(x.stack||x).toString(),C=/compileProcedure.*\n\s*at.*\((.*)\)/.exec(M);if(C)return C[1];var J=/compileProcedure.*\n\s*at\s+(.*)(\n|$)/.exec(M);return J?J[1]:"unknown"}function k(){var x=new Error,M=(x.stack||x).toString(),C=/at REGLCommand.*\n\s+at.*\((.*)\)/.exec(M);if(C)return C[1];var J=/at REGLCommand.*\n\s+at\s+(.*)\n/.exec(M);return J?J[1]:"unknown"}function E(x,M){var C=x.split(`
`),J=1,se=0,Q={unknown:new m,0:new m};Q.unknown.name=Q[0].name=M||b(),Q.unknown.lines.push(new g(0,""));for(var oe=0;oe<C.length;++oe){var ge=C[oe],we=/^\s*#\s*(\w+)\s+(.+)\s*$/.exec(ge);if(we)switch(we[1]){case"line":var Ee=/(\d+)(\s+\d+)?/.exec(we[2]);Ee&&(J=Ee[1]|0,Ee[2]&&(se=Ee[2]|0,se in Q||(Q[se]=new m)));break;case"define":var _e=/SHADER_NAME(_B64)?\s+(.*)$/.exec(we[2]);_e&&(Q[se].name=_e[1]?n(_e[2]):_e[2]);break}Q[se].lines.push(new g(J++,ge))}return Object.keys(Q).forEach(function(Le){var Fe=Q[Le];Fe.lines.forEach(function(xe){Fe.index[xe.number]=xe})}),Q}function L(x){var M=[];return x.split(`
`).forEach(function(C){if(!(C.length<5)){var J=/^ERROR:\s+(\d+):(\d+):\s*(.*)$/.exec(C);J?M.push(new y(J[1]|0,J[2]|0,J[3].trim())):C.length>0&&M.push(new y("unknown",0,C))}}),M}function N(x,M){M.forEach(function(C){var J=x[C.file];if(J){var se=J.index[C.line];if(se){se.errors.push(C),J.hasErrors=!0;return}}x.unknown.hasErrors=!0,x.unknown.lines[0].errors.push(C)})}function W(x,M,C,J,se){if(!x.getShaderParameter(M,x.COMPILE_STATUS)){var Q=x.getShaderInfoLog(M),oe=J===x.FRAGMENT_SHADER?"fragment":"vertex";be(C,"string",oe+" shader source must be a string",se);var ge=E(C,se),we=L(Q);N(ge,we),Object.keys(ge).forEach(function(Ee){var _e=ge[Ee];if(!_e.hasErrors)return;var Le=[""],Fe=[""];function xe(Ce,B){Le.push(Ce),Fe.push(B||"")}xe("file number "+Ee+": "+_e.name+`
`,"color:red;text-decoration:underline;font-weight:bold"),_e.lines.forEach(function(Ce){if(Ce.errors.length>0){xe(p(Ce.number,4)+"|  ","background-color:yellow; font-weight:bold"),xe(Ce.line+o,"color:red; background-color:yellow; font-weight:bold");var B=0;Ce.errors.forEach(function(ne){var ke=ne.message,Ue=/^\s*'(.*)'\s*:\s*(.*)$/.exec(ke);if(Ue){var ue=Ue[1];switch(ke=Ue[2],ue){case"assign":ue="=";break}B=Math.max(Ce.line.indexOf(ue,B),0)}else B=0;xe(p("| ",6)),xe(p("^^^",B+3)+o,"font-weight:bold"),xe(p("| ",6)),xe(ke+o,"font-weight:bold")}),xe(p("| ",6)+o)}else xe(p(Ce.number,4)+"|  "),xe(Ce.line+o,"color:red")}),typeof document!="undefined"&&!window.chrome?(Fe[0]=Le.join("%c"),console.log.apply(console,Fe)):console.log(Le.join(""))}),a.raise("Error compiling "+oe+" shader, "+ge[0].name)}}function O(x,M,C,J,se){if(!x.getProgramParameter(M,x.LINK_STATUS)){var Q=x.getProgramInfoLog(M),oe=E(C,se),ge=E(J,se),we='Error linking program with vertex shader, "'+ge[0].name+'", and fragment shader "'+oe[0].name+'"';typeof document!="undefined"?console.log("%c"+we+o+"%c"+Q,"color:red;text-decoration:underline;font-weight:bold","color:red"):console.log(we+o+Q),a.raise(we)}}function te(x){x._commandRef=b()}function D(x,M,C,J){te(x);function se(we){return we?J.id(we):0}x._fragId=se(x.static.frag),x._vertId=se(x.static.vert);function Q(we,Ee){Object.keys(Ee).forEach(function(_e){we[J.id(_e)]=!0})}var oe=x._uniformSet={};Q(oe,M.static),Q(oe,M.dynamic);var ge=x._attributeSet={};Q(ge,C.static),Q(ge,C.dynamic),x._hasCount="count"in x.static||"count"in x.dynamic||"elements"in x.static||"elements"in x.dynamic}function re(x,M){var C=k();r(x+" in command "+(M||b())+(C==="unknown"?"":" called from "+C))}function q(x,M,C){x||re(M,C||b())}function Y(x,M,C,J){x in M||re("unknown parameter ("+x+")"+i(C)+". possible values: "+Object.keys(M).join(),J||b())}function be(x,M,C,J){f(x,M)||re("invalid parameter type"+i(C)+". expected "+M+", got "+typeof x,J||b())}function qe(x){x()}function Ae(x,M,C){x.texture?h(x.texture._texture.internalformat,M,"unsupported texture format for attachment"):h(x.renderbuffer._renderbuffer.format,C,"unsupported renderbuffer format for attachment")}var he=33071,Te=9728,dt=9984,qt=9985,He=9986,pt=9987,St=5120,to=5121,ao=5122,Ho=5123,Xe=5124,ht=5125,vt=5126,Zt=32819,po=32820,Lt=33635,mt=34042,me=36193,tt={};tt[St]=tt[to]=1,tt[ao]=tt[Ho]=tt[me]=tt[Lt]=tt[Zt]=tt[po]=2,tt[Xe]=tt[ht]=tt[vt]=tt[mt]=4;function zt(x,M){return x===po||x===Zt||x===Lt?2:x===mt?4:tt[x]*M}function ct(x){return!(x&x-1)&&!!x}function Ve(x,M,C){var J,se=M.width,Q=M.height,oe=M.channels;a(se>0&&se<=C.maxTextureSize&&Q>0&&Q<=C.maxTextureSize,"invalid texture shape"),(x.wrapS!==he||x.wrapT!==he)&&a(ct(se)&&ct(Q),"incompatible wrap mode for texture, both width and height must be power of 2"),M.mipmask===1?se!==1&&Q!==1&&a(x.minFilter!==dt&&x.minFilter!==He&&x.minFilter!==qt&&x.minFilter!==pt,"min filter requires mipmap"):(a(ct(se)&&ct(Q),"texture must be a square power of 2 to support mipmapping"),a(M.mipmask===(se<<1)-1,"missing or incomplete mipmap data")),M.type===vt&&(C.extensions.indexOf("oes_texture_float_linear")<0&&a(x.minFilter===Te&&x.magFilter===Te,"filter not supported, must enable oes_texture_float_linear"),a(!x.genMipmaps,"mipmap generation not supported with float textures"));var ge=M.images;for(J=0;J<16;++J)if(ge[J]){var we=se>>J,Ee=Q>>J;a(M.mipmask&1<<J,"missing mipmap data");var _e=ge[J];if(a(_e.width===we&&_e.height===Ee,"invalid shape for mip images"),a(_e.format===M.format&&_e.internalformat===M.internalformat&&_e.type===M.type,"incompatible type for mip image"),!_e.compressed)if(_e.data){var Le=Math.ceil(zt(_e.type,oe)*we/_e.unpackAlignment)*_e.unpackAlignment;a(_e.data.byteLength===Le*Ee,"invalid data for image, buffer size is inconsistent with image format")}else _e.element||_e.copy}else x.genMipmaps||a((M.mipmask&1<<J)===0,"extra mipmap data");M.compressed&&a(!x.genMipmaps,"mipmap generation for compressed images not supported")}function go(x,M,C,J){var se=x.width,Q=x.height,oe=x.channels;a(se>0&&se<=J.maxTextureSize&&Q>0&&Q<=J.maxTextureSize,"invalid texture shape"),a(se===Q,"cube map must be square"),a(M.wrapS===he&&M.wrapT===he,"wrap mode not supported by cube map");for(var ge=0;ge<C.length;++ge){var we=C[ge];a(we.width===se&&we.height===Q,"inconsistent cube map face shape"),M.genMipmaps&&(a(!we.compressed,"can not generate mipmap for compressed textures"),a(we.mipmask===1,"can not specify mipmaps and generate mipmaps"));for(var Ee=we.images,_e=0;_e<16;++_e){var Le=Ee[_e];if(Le){var Fe=se>>_e,xe=Q>>_e;a(we.mipmask&1<<_e,"missing mipmap data"),a(Le.width===Fe&&Le.height===xe,"invalid shape for mip images"),a(Le.format===x.format&&Le.internalformat===x.internalformat&&Le.type===x.type,"incompatible type for mip image"),Le.compressed||(Le.data?a(Le.data.byteLength===Fe*xe*Math.max(zt(Le.type,oe),Le.unpackAlignment),"invalid data for image, buffer size is inconsistent with image format"):Le.element||Le.copy)}}}}var _=t(a,{optional:qe,raise:r,commandRaise:re,command:q,parameter:s,commandParameter:Y,constructor:v,type:l,commandType:be,isTypedArray:c,nni:u,oneOf:h,shaderError:W,linkError:O,callSite:k,saveCommandRef:te,saveDrawInfo:D,framebufferFormat:Ae,guessCommand:b,texture2D:Ve,textureCube:go}),oo=0,Wt=0,xo=5,Eo=6;function hn(x,M){this.id=oo++,this.type=x,this.data=M}function mr(x){return x.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}function Dn(x){if(x.length===0)return[];var M=x.charAt(0),C=x.charAt(x.length-1);if(x.length>1&&M===C&&(M==='"'||M==="'"))return['"'+mr(x.substr(1,x.length-2))+'"'];var J=/\[(false|true|null|\d+|'[^']*'|"[^"]*")\]/.exec(x);if(J)return Dn(x.substr(0,J.index)).concat(Dn(J[1])).concat(Dn(x.substr(J.index+J[0].length)));var se=x.split(".");if(se.length===1)return['"'+mr(x)+'"'];for(var Q=[],oe=0;oe<se.length;++oe)Q=Q.concat(Dn(se[oe]));return Q}function Fa(x){return"["+Dn(x).join("][")+"]"}function bi(x,M){return new hn(x,Fa(M+""))}function n0(x){return typeof x=="function"&&!x._reglType||x instanceof hn}function K(x,M){if(typeof x=="function")return new hn(Wt,x);if(typeof x=="number"||typeof x=="boolean")return new hn(xo,x);if(Array.isArray(x))return new hn(Eo,x.map((C,J)=>K(C,M+"["+J+"]")));if(x instanceof hn)return x;_(!1,"invalid option type in uniform "+M)}var Ne={DynamicVariable:hn,define:bi,isDynamic:n0,unbox:K,accessor:Fa},Ie={next:typeof requestAnimationFrame=="function"?function(x){return requestAnimationFrame(x)}:function(x){return setTimeout(x,16)},cancel:typeof cancelAnimationFrame=="function"?function(x){return cancelAnimationFrame(x)}:clearTimeout},ze=typeof performance!="undefined"&&performance.now?function(){return performance.now()}:function(){return+new Date};function at(){var x={"":0},M=[""];return{id:function(C){var J=x[C];return J||(J=x[C]=M.length,M.push(C),J)},str:function(C){return M[C]}}}function Mt(x,M,C){var J=document.createElement("canvas");t(J.style,{border:0,margin:0,padding:0,top:0,left:0}),x.appendChild(J),x===document.body&&(J.style.position="absolute",t(x.style,{margin:0,padding:0}));function se(){var ge=window.innerWidth,we=window.innerHeight;if(x!==document.body){var Ee=x.getBoundingClientRect();ge=Ee.right-Ee.left,we=Ee.bottom-Ee.top}J.width=C*ge,J.height=C*we,t(J.style,{width:ge+"px",height:we+"px"})}var Q;x!==document.body&&typeof ResizeObserver=="function"?(Q=new ResizeObserver(function(){setTimeout(se)}),Q.observe(x)):window.addEventListener("resize",se,!1);function oe(){Q?Q.disconnect():window.removeEventListener("resize",se),x.removeChild(J)}return se(),{canvas:J,onDestroy:oe}}function bt(x,M){function C(J){try{return x.getContext(J,M)}catch(se){return null}}return C("webgl")||C("experimental-webgl")||C("webgl-experimental")}function lt(x){return typeof x.nodeName=="string"&&typeof x.appendChild=="function"&&typeof x.getBoundingClientRect=="function"}function Nt(x){return typeof x.drawArrays=="function"||typeof x.drawElements=="function"}function gt(x){return typeof x=="string"?x.split():(_(Array.isArray(x),"invalid extension array"),x)}function Ht(x){return typeof x=="string"?(_(typeof document!="undefined","not supported outside of DOM"),document.querySelector(x)):x}function _t(x){var M=x||{},C,J,se,Q,oe={},ge=[],we=[],Ee=typeof window=="undefined"?1:window.devicePixelRatio,_e=!1,Le=function(Ce){Ce&&_.raise(Ce)},Fe=function(){};if(typeof M=="string"?(_(typeof document!="undefined","selector queries only supported in DOM enviroments"),C=document.querySelector(M),_(C,"invalid query string for element")):typeof M=="object"?lt(M)?C=M:Nt(M)?(Q=M,se=Q.canvas):(_.constructor(M),"gl"in M?Q=M.gl:"canvas"in M?se=Ht(M.canvas):"container"in M&&(J=Ht(M.container)),"attributes"in M&&(oe=M.attributes,_.type(oe,"object","invalid context attributes")),"extensions"in M&&(ge=gt(M.extensions)),"optionalExtensions"in M&&(we=gt(M.optionalExtensions)),"onDone"in M&&(_.type(M.onDone,"function","invalid or missing onDone callback"),Le=M.onDone),"profile"in M&&(_e=!!M.profile),"pixelRatio"in M&&(Ee=+M.pixelRatio,_(Ee>0,"invalid pixel ratio"))):_.raise("invalid arguments to regl"),C&&(C.nodeName.toLowerCase()==="canvas"?se=C:J=C),!Q){if(!se){_(typeof document!="undefined","must manually specify webgl context outside of DOM environments");var xe=Mt(J||document.body,Le,Ee);if(!xe)return null;se=xe.canvas,Fe=xe.onDestroy}oe.premultipliedAlpha===void 0&&(oe.premultipliedAlpha=!0),Q=bt(se,oe)}return Q?{gl:Q,canvas:se,container:J,extensions:ge,optionalExtensions:we,pixelRatio:Ee,profile:_e,onDone:Le,onDestroy:Fe}:(Fe(),Le("webgl not supported, try upgrading your browser or graphics drivers http://get.webgl.org"),null)}function kt(x,M){var C={};function J(oe){_.type(oe,"string","extension name must be string");var ge=oe.toLowerCase(),we;try{we=C[ge]=x.getExtension(ge)}catch(Ee){}return!!we}for(var se=0;se<M.extensions.length;++se){var Q=M.extensions[se];if(!J(Q))return M.onDestroy(),M.onDone('"'+Q+'" extension is not supported by the current WebGL context, try upgrading your system or a different browser'),null}return M.optionalExtensions.forEach(J),{extensions:C,restore:function(){Object.keys(C).forEach(function(oe){if(C[oe]&&!J(oe))throw new Error("(regl): error restoring extension "+oe)})}}}function Bt(x,M){for(var C=Array(x),J=0;J<x;++J)C[J]=M(J);return C}var ft=5120,no=5121,_o=5122,xt=5123,Po=5124,na=5125,ei=5126;function Kt(x){for(var M=16;M<=1<<28;M*=16)if(x<=M)return M;return 0}function so(x){var M,C;return M=(x>65535)<<4,x>>>=M,C=(x>255)<<3,x>>>=C,M|=C,C=(x>15)<<2,x>>>=C,M|=C,C=(x>3)<<1,x>>>=C,M|=C,M|x>>1}function Tn(){var x=Bt(8,function(){return[]});function M(Q){var oe=Kt(Q),ge=x[so(oe)>>2];return ge.length>0?ge.pop():new ArrayBuffer(oe)}function C(Q){x[so(Q.byteLength)>>2].push(Q)}function J(Q,oe){var ge=null;switch(Q){case ft:ge=new Int8Array(M(oe),0,oe);break;case no:ge=new Uint8Array(M(oe),0,oe);break;case _o:ge=new Int16Array(M(2*oe),0,oe);break;case xt:ge=new Uint16Array(M(2*oe),0,oe);break;case Po:ge=new Int32Array(M(4*oe),0,oe);break;case na:ge=new Uint32Array(M(4*oe),0,oe);break;case ei:ge=new Float32Array(M(4*oe),0,oe);break;default:return null}return ge.length!==oe?ge.subarray(0,oe):ge}function se(Q){C(Q.buffer)}return{alloc:M,free:C,allocType:J,freeType:se}}var U=Tn();U.zero=Tn();var le=3408,Be=3410,ot=3411,nt=3412,Vo=3413,Ln=3414,gr=3415,Uo=33901,Pr=33902,Zo=3379,So=3386,nn=34921,Co=36347,$n=36348,xr=35661,rr=35660,rn=34930,ar=36349,yr=34076,Xn=34024,co=7936,Xo=7937,ra=7938,ss=35724,Ga=34047,cs=36063,Ql=34852,wi=3553,r0=34067,Sc=34069,ru=33984,ti=6408,Ac=5126,fr=5121,Tc=36160,ls=36053,r5=36064,a5=16384,i5=function(x,M){var C=1;M.ext_texture_filter_anisotropic&&(C=x.getParameter(Ga));var J=1,se=1;M.webgl_draw_buffers&&(J=x.getParameter(Ql),se=x.getParameter(cs));var Q=!!M.oes_texture_float;if(Q){var oe=x.createTexture();x.bindTexture(wi,oe),x.texImage2D(wi,0,ti,1,1,0,ti,Ac,null);var ge=x.createFramebuffer();if(x.bindFramebuffer(Tc,ge),x.framebufferTexture2D(Tc,r5,wi,oe,0),x.bindTexture(wi,null),x.checkFramebufferStatus(Tc)!==ls)Q=!1;else{x.viewport(0,0,1,1),x.clearColor(1,0,0,1),x.clear(a5);var we=U.allocType(Ac,4);x.readPixels(0,0,1,1,ti,Ac,we),x.getError()?Q=!1:(x.deleteFramebuffer(ge),x.deleteTexture(oe),Q=we[0]===1),U.freeType(we)}}var Ee=typeof navigator!="undefined"&&(/MSIE/.test(navigator.userAgent)||/Trident\//.test(navigator.appVersion)||/Edge/.test(navigator.userAgent)),_e=!0;if(!Ee){var Le=x.createTexture(),Fe=U.allocType(fr,36);x.activeTexture(ru),x.bindTexture(r0,Le),x.texImage2D(Sc,0,ti,3,3,0,ti,fr,Fe),U.freeType(Fe),x.bindTexture(r0,null),x.deleteTexture(Le),_e=!x.getError()}return{colorBits:[x.getParameter(Be),x.getParameter(ot),x.getParameter(nt),x.getParameter(Vo)],depthBits:x.getParameter(Ln),stencilBits:x.getParameter(gr),subpixelBits:x.getParameter(le),extensions:Object.keys(M).filter(function(xe){return!!M[xe]}),maxAnisotropic:C,maxDrawbuffers:J,maxColorAttachments:se,pointSizeDims:x.getParameter(Uo),lineWidthDims:x.getParameter(Pr),maxViewportDims:x.getParameter(So),maxCombinedTextureUnits:x.getParameter(xr),maxCubeMapSize:x.getParameter(yr),maxRenderbufferSize:x.getParameter(Xn),maxTextureUnits:x.getParameter(rn),maxTextureSize:x.getParameter(Zo),maxAttributes:x.getParameter(nn),maxVertexUniforms:x.getParameter(Co),maxVertexTextureUnits:x.getParameter(rr),maxVaryingVectors:x.getParameter($n),maxFragmentUniforms:x.getParameter(ar),glsl:x.getParameter(ss),renderer:x.getParameter(Xo),vendor:x.getParameter(co),version:x.getParameter(ra),readFloat:Q,npotTextureCube:_e}};function _a(x){return!!x&&typeof x=="object"&&Array.isArray(x.shape)&&Array.isArray(x.stride)&&typeof x.offset=="number"&&x.shape.length===x.stride.length&&(Array.isArray(x.data)||e(x.data))}var jr=function(x){return Object.keys(x).map(function(M){return x[M]})},Zl={shape:f5,flatten:l5};function s5(x,M,C){for(var J=0;J<M;++J)C[J]=x[J]}function c5(x,M,C,J){for(var se=0,Q=0;Q<M;++Q)for(var oe=x[Q],ge=0;ge<C;++ge)J[se++]=oe[ge]}function gp(x,M,C,J,se,Q){for(var oe=Q,ge=0;ge<M;++ge)for(var we=x[ge],Ee=0;Ee<C;++Ee)for(var _e=we[Ee],Le=0;Le<J;++Le)se[oe++]=_e[Le]}function xp(x,M,C,J,se){for(var Q=1,oe=C+1;oe<M.length;++oe)Q*=M[oe];var ge=M[C];if(M.length-C===4){var we=M[C+1],Ee=M[C+2],_e=M[C+3];for(oe=0;oe<ge;++oe)gp(x[oe],we,Ee,_e,J,se),se+=Q}else for(oe=0;oe<ge;++oe)xp(x[oe],M,C+1,J,se),se+=Q}function l5(x,M,C,J){var se=1;if(M.length)for(var Q=0;Q<M.length;++Q)se*=M[Q];else se=0;var oe=J||U.allocType(C,se);switch(M.length){case 0:break;case 1:s5(x,M[0],oe);break;case 2:c5(x,M[0],M[1],oe);break;case 3:gp(x,M[0],M[1],M[2],oe,0);break;default:xp(x,M,0,oe,0)}return oe}function f5(x){for(var M=[],C=x;C.length;C=C[0])M.push(C.length);return M}var au={"[object Int8Array]":5120,"[object Int16Array]":5122,"[object Int32Array]":5124,"[object Uint8Array]":5121,"[object Uint8ClampedArray]":5121,"[object Uint16Array]":5123,"[object Uint32Array]":5125,"[object Float32Array]":5126,"[object Float64Array]":5121,"[object ArrayBuffer]":5121},h5=5120,u5=5122,d5=5124,p5=5121,v5=5123,m5=5125,g5=5126,x5=5126,fs={int8:h5,int16:u5,int32:d5,uint8:p5,uint16:v5,uint32:m5,float:g5,float32:x5},y5=35048,b5=35040,Jl={dynamic:y5,stream:b5,static:35044},iu=Zl.flatten,yp=Zl.shape,bp=35044,w5=35040,su=5121,cu=5126,_i=[];_i[5120]=1,_i[5122]=2,_i[5124]=4,_i[5121]=1,_i[5123]=2,_i[5125]=4,_i[5126]=4;function ef(x){return au[Object.prototype.toString.call(x)]|0}function wp(x,M){for(var C=0;C<M.length;++C)x[C]=M[C]}function _p(x,M,C,J,se,Q,oe){for(var ge=0,we=0;we<C;++we)for(var Ee=0;Ee<J;++Ee)x[ge++]=M[se*we+Q*Ee+oe]}function _5(x,M,C,J){var se=0,Q={};function oe(B){this.id=se++,this.buffer=x.createBuffer(),this.type=B,this.usage=bp,this.byteLength=0,this.dimension=1,this.dtype=su,this.persistentData=null,C.profile&&(this.stats={size:0})}oe.prototype.bind=function(){x.bindBuffer(this.type,this.buffer)},oe.prototype.destroy=function(){Fe(this)};var ge=[];function we(B,ne){var ke=ge.pop();return ke||(ke=new oe(B)),ke.bind(),Le(ke,ne,w5,0,1,!1),ke}function Ee(B){ge.push(B)}function _e(B,ne,ke){B.byteLength=ne.byteLength,x.bufferData(B.type,ne,ke)}function Le(B,ne,ke,Ue,ue,je){var ve;if(B.usage=ke,Array.isArray(ne)){if(B.dtype=Ue||cu,ne.length>0){var Re;if(Array.isArray(ne[0])){ve=yp(ne);for(var pe=1,Pe=1;Pe<ve.length;++Pe)pe*=ve[Pe];B.dimension=pe,Re=iu(ne,ve,B.dtype),_e(B,Re,ke),je?B.persistentData=Re:U.freeType(Re)}else if(typeof ne[0]=="number"){B.dimension=ue;var ut=U.allocType(B.dtype,ne.length);wp(ut,ne),_e(B,ut,ke),je?B.persistentData=ut:U.freeType(ut)}else e(ne[0])?(B.dimension=ne[0].length,B.dtype=Ue||ef(ne[0])||cu,Re=iu(ne,[ne.length,ne[0].length],B.dtype),_e(B,Re,ke),je?B.persistentData=Re:U.freeType(Re)):_.raise("invalid buffer data")}}else if(e(ne))B.dtype=Ue||ef(ne),B.dimension=ue,_e(B,ne,ke),je&&(B.persistentData=new Uint8Array(new Uint8Array(ne.buffer)));else if(_a(ne)){ve=ne.shape;var Ct=ne.stride,Ge=ne.offset,Se=0,fe=0,At=0,Gt=0;ve.length===1?(Se=ve[0],fe=1,At=Ct[0],Gt=0):ve.length===2?(Se=ve[0],fe=ve[1],At=Ct[0],Gt=Ct[1]):_.raise("invalid shape"),B.dtype=Ue||ef(ne.data)||cu,B.dimension=fe;var Qe=U.allocType(B.dtype,Se*fe);_p(Qe,ne.data,Se,fe,At,Gt,Ge),_e(B,Qe,ke),je?B.persistentData=Qe:U.freeType(Qe)}else ne instanceof ArrayBuffer?(B.dtype=su,B.dimension=ue,_e(B,ne,ke),je&&(B.persistentData=new Uint8Array(new Uint8Array(ne)))):_.raise("invalid buffer data")}function Fe(B){M.bufferCount--,J(B);var ne=B.buffer;_(ne,"buffer must not be deleted already"),x.deleteBuffer(ne),B.buffer=null,delete Q[B.id]}function xe(B,ne,ke,Ue){M.bufferCount++;var ue=new oe(ne);Q[ue.id]=ue;function je(pe){var Pe=bp,ut=null,Ct=0,Ge=0,Se=1;return Array.isArray(pe)||e(pe)||_a(pe)||pe instanceof ArrayBuffer?ut=pe:typeof pe=="number"?Ct=pe|0:pe&&(_.type(pe,"object","buffer arguments must be an object, a number or an array"),"data"in pe&&(_(ut===null||Array.isArray(ut)||e(ut)||_a(ut),"invalid data for buffer"),ut=pe.data),"usage"in pe&&(_.parameter(pe.usage,Jl,"invalid buffer usage"),Pe=Jl[pe.usage]),"type"in pe&&(_.parameter(pe.type,fs,"invalid buffer type"),Ge=fs[pe.type]),"dimension"in pe&&(_.type(pe.dimension,"number","invalid dimension"),Se=pe.dimension|0),"length"in pe&&(_.nni(Ct,"buffer length must be a nonnegative integer"),Ct=pe.length|0)),ue.bind(),ut?Le(ue,ut,Pe,Ge,Se,Ue):(Ct&&x.bufferData(ue.type,Ct,Pe),ue.dtype=Ge||su,ue.usage=Pe,ue.dimension=Se,ue.byteLength=Ct),C.profile&&(ue.stats.size=ue.byteLength*_i[ue.dtype]),je}function ve(pe,Pe){_(Pe+pe.byteLength<=ue.byteLength,"invalid buffer subdata call, buffer is too small.  Can't write data of size "+pe.byteLength+" starting from offset "+Pe+" to a buffer of size "+ue.byteLength),x.bufferSubData(ue.type,Pe,pe)}function Re(pe,Pe){var ut=(Pe||0)|0,Ct;if(ue.bind(),e(pe)||pe instanceof ArrayBuffer)ve(pe,ut);else if(Array.isArray(pe)){if(pe.length>0)if(typeof pe[0]=="number"){var Ge=U.allocType(ue.dtype,pe.length);wp(Ge,pe),ve(Ge,ut),U.freeType(Ge)}else if(Array.isArray(pe[0])||e(pe[0])){Ct=yp(pe);var Se=iu(pe,Ct,ue.dtype);ve(Se,ut),U.freeType(Se)}else _.raise("invalid buffer data")}else if(_a(pe)){Ct=pe.shape;var fe=pe.stride,At=0,Gt=0,Qe=0,Vt=0;Ct.length===1?(At=Ct[0],Gt=1,Qe=fe[0],Vt=0):Ct.length===2?(At=Ct[0],Gt=Ct[1],Qe=fe[0],Vt=fe[1]):_.raise("invalid shape");var Rt=Array.isArray(pe.data)?ue.dtype:ef(pe.data),Ut=U.allocType(Rt,At*Gt);_p(Ut,pe.data,At,Gt,Qe,Vt,pe.offset),ve(Ut,ut),U.freeType(Ut)}else _.raise("invalid data for buffer subdata");return je}return ke||je(B),je._reglType="buffer",je._buffer=ue,je.subdata=Re,C.profile&&(je.stats=ue.stats),je.destroy=function(){Fe(ue)},je}function Ce(){jr(Q).forEach(function(B){B.buffer=x.createBuffer(),x.bindBuffer(B.type,B.buffer),x.bufferData(B.type,B.persistentData||B.byteLength,B.usage)})}return C.profile&&(M.getTotalBufferSize=function(){var B=0;return Object.keys(Q).forEach(function(ne){B+=Q[ne].stats.size}),B}),{create:xe,createStream:we,destroyStream:Ee,clear:function(){jr(Q).forEach(Fe),ge.forEach(Fe)},getBuffer:function(B){return B&&B._buffer instanceof oe?B._buffer:null},restore:Ce,_initBuffer:Le}}var M5=0,k5=0,E5=1,S5=1,A5=4,T5=4,a0={points:M5,point:k5,lines:E5,line:S5,triangles:A5,triangle:T5,"line loop":2,"line strip":3,"triangle strip":5,"triangle fan":6},L5=0,z5=1,Lc=4,C5=5120,i0=5121,Mp=5122,s0=5123,kp=5124,hs=5125,lu=34963,N5=35040,R5=35044;function P5(x,M,C,J){var se={},Q=0,oe={uint8:i0,uint16:s0};M.oes_element_index_uint&&(oe.uint32=hs);function ge(Ce){this.id=Q++,se[this.id]=this,this.buffer=Ce,this.primType=Lc,this.vertCount=0,this.type=0}ge.prototype.bind=function(){this.buffer.bind()};var we=[];function Ee(Ce){var B=we.pop();return B||(B=new ge(C.create(null,lu,!0,!1)._buffer)),Le(B,Ce,N5,-1,-1,0,0),B}function _e(Ce){we.push(Ce)}function Le(Ce,B,ne,ke,Ue,ue,je){Ce.buffer.bind();var ve;if(B){var Re=je;!je&&(!e(B)||_a(B)&&!e(B.data))&&(Re=M.oes_element_index_uint?hs:s0),C._initBuffer(Ce.buffer,B,ne,Re,3)}else x.bufferData(lu,ue,ne),Ce.buffer.dtype=ve||i0,Ce.buffer.usage=ne,Ce.buffer.dimension=3,Ce.buffer.byteLength=ue;if(ve=je,!je){switch(Ce.buffer.dtype){case i0:case C5:ve=i0;break;case s0:case Mp:ve=s0;break;case hs:case kp:ve=hs;break;default:_.raise("unsupported type for element array")}Ce.buffer.dtype=ve}Ce.type=ve,_(ve!==hs||!!M.oes_element_index_uint,"32 bit element buffers not supported, enable oes_element_index_uint first");var pe=Ue;pe<0&&(pe=Ce.buffer.byteLength,ve===s0?pe>>=1:ve===hs&&(pe>>=2)),Ce.vertCount=pe;var Pe=ke;if(ke<0){Pe=Lc;var ut=Ce.buffer.dimension;ut===1&&(Pe=L5),ut===2&&(Pe=z5),ut===3&&(Pe=Lc)}Ce.primType=Pe}function Fe(Ce){J.elementsCount--,_(Ce.buffer!==null,"must not double destroy elements"),delete se[Ce.id],Ce.buffer.destroy(),Ce.buffer=null}function xe(Ce,B){var ne=C.create(null,lu,!0),ke=new ge(ne._buffer);J.elementsCount++;function Ue(ue){if(!ue)ne(),ke.primType=Lc,ke.vertCount=0,ke.type=i0;else if(typeof ue=="number")ne(ue),ke.primType=Lc,ke.vertCount=ue|0,ke.type=i0;else{var je=null,ve=R5,Re=-1,pe=-1,Pe=0,ut=0;Array.isArray(ue)||e(ue)||_a(ue)?je=ue:(_.type(ue,"object","invalid arguments for elements"),"data"in ue&&(je=ue.data,_(Array.isArray(je)||e(je)||_a(je),"invalid data for element buffer")),"usage"in ue&&(_.parameter(ue.usage,Jl,"invalid element buffer usage"),ve=Jl[ue.usage]),"primitive"in ue&&(_.parameter(ue.primitive,a0,"invalid element buffer primitive"),Re=a0[ue.primitive]),"count"in ue&&(_(typeof ue.count=="number"&&ue.count>=0,"invalid vertex count for elements"),pe=ue.count|0),"type"in ue&&(_.parameter(ue.type,oe,"invalid buffer type"),ut=oe[ue.type]),"length"in ue?Pe=ue.length|0:(Pe=pe,ut===s0||ut===Mp?Pe*=2:(ut===hs||ut===kp)&&(Pe*=4))),Le(ke,je,ve,Re,pe,Pe,ut)}return Ue}return Ue(Ce),Ue._reglType="elements",Ue._elements=ke,Ue.subdata=function(ue,je){return ne.subdata(ue,je),Ue},Ue.destroy=function(){Fe(ke)},Ue}return{create:xe,createStream:Ee,destroyStream:_e,getElements:function(Ce){return typeof Ce=="function"&&Ce._elements instanceof ge?Ce._elements:null},clear:function(){jr(se).forEach(Fe)}}}var Ep=new Float32Array(1),O5=new Uint32Array(Ep.buffer),I5=5123;function Sp(x){for(var M=U.allocType(I5,x.length),C=0;C<x.length;++C)if(isNaN(x[C]))M[C]=65535;else if(x[C]===1/0)M[C]=31744;else if(x[C]===-1/0)M[C]=64512;else{Ep[0]=x[C];var J=O5[0],se=J>>>31<<15,Q=(J<<1>>>24)-127,oe=J>>13&1023;if(Q<-24)M[C]=se;else if(Q<-14){var ge=-14-Q;M[C]=se+(oe+1024>>ge)}else Q>15?M[C]=se+31744:M[C]=se+(Q+15<<10)+oe}return M}function an(x){return Array.isArray(x)||e(x)}var Ap=function(x){return!(x&x-1)&&!!x},F5=34467,Da=3553,fu=34067,tf=34069,us=6408,hu=6406,of=6407,zc=6409,nf=6410,Tp=32854,uu=32855,Lp=36194,G5=32819,D5=32820,$5=33635,q5=34042,du=6402,rf=34041,pu=35904,vu=35906,c0=36193,mu=33776,gu=33777,xu=33778,yu=33779,zp=35986,Cp=35987,Np=34798,Rp=35840,Pp=35841,Op=35842,Ip=35843,Fp=36196,l0=5121,bu=5123,wu=5125,Cc=5126,H5=10242,U5=10243,B5=10497,_u=33071,j5=33648,W5=10240,V5=10241,Mu=9728,X5=9729,ku=9984,Gp=9985,Dp=9986,Eu=9987,Y5=33170,af=4352,K5=4353,Q5=4354,Z5=34046,J5=3317,ew=37440,tw=37441,ow=37443,$p=37444,Nc=33984,nw=[ku,Dp,Gp,Eu],sf=[0,zc,nf,of,us],aa={};aa[zc]=aa[hu]=aa[du]=1,aa[rf]=aa[nf]=2,aa[of]=aa[pu]=3,aa[us]=aa[vu]=4;function f0(x){return"[object "+x+"]"}var qp=f0("HTMLCanvasElement"),Hp=f0("OffscreenCanvas"),Up=f0("CanvasRenderingContext2D"),Bp=f0("ImageBitmap"),jp=f0("HTMLImageElement"),Wp=f0("HTMLVideoElement"),rw=Object.keys(au).concat([qp,Hp,Up,Bp,jp,Wp]),h0=[];h0[l0]=1,h0[Cc]=4,h0[c0]=2,h0[bu]=2,h0[wu]=4;var Yn=[];Yn[Tp]=2,Yn[uu]=2,Yn[Lp]=2,Yn[rf]=4,Yn[mu]=.5,Yn[gu]=.5,Yn[xu]=1,Yn[yu]=1,Yn[zp]=.5,Yn[Cp]=1,Yn[Np]=1,Yn[Rp]=.5,Yn[Pp]=.25,Yn[Op]=.5,Yn[Ip]=.25,Yn[Fp]=.5;function Vp(x){return Array.isArray(x)&&(x.length===0||typeof x[0]=="number")}function Xp(x){if(!Array.isArray(x))return!1;var M=x.length;return!(M===0||!an(x[0]))}function ds(x){return Object.prototype.toString.call(x)}function Yp(x){return ds(x)===qp}function Kp(x){return ds(x)===Hp}function aw(x){return ds(x)===Up}function iw(x){return ds(x)===Bp}function sw(x){return ds(x)===jp}function cw(x){return ds(x)===Wp}function Su(x){if(!x)return!1;var M=ds(x);return rw.indexOf(M)>=0?!0:Vp(x)||Xp(x)||_a(x)}function Qp(x){return au[Object.prototype.toString.call(x)]|0}function lw(x,M){var C=M.length;switch(x.type){case l0:case bu:case wu:case Cc:var J=U.allocType(x.type,C);J.set(M),x.data=J;break;case c0:x.data=Sp(M);break;default:_.raise("unsupported texture type, must specify a typed array")}}function Zp(x,M){return U.allocType(x.type===c0?Cc:x.type,M)}function Jp(x,M){x.type===c0?(x.data=Sp(M),U.freeType(M)):x.data=M}function fw(x,M,C,J,se,Q){for(var oe=x.width,ge=x.height,we=x.channels,Ee=oe*ge*we,_e=Zp(x,Ee),Le=0,Fe=0;Fe<ge;++Fe)for(var xe=0;xe<oe;++xe)for(var Ce=0;Ce<we;++Ce)_e[Le++]=M[C*xe+J*Fe+se*Ce+Q];Jp(x,_e)}function cf(x,M,C,J,se,Q){var oe;if(typeof Yn[x]!="undefined"?oe=Yn[x]:oe=aa[x]*h0[M],Q&&(oe*=6),se){for(var ge=0,we=C;we>=1;)ge+=oe*we*we,we/=2;return ge}else return oe*C*J}function hw(x,M,C,J,se,Q,oe){var ge={"don't care":af,"dont care":af,nice:Q5,fast:K5},we={repeat:B5,clamp:_u,mirror:j5},Ee={nearest:Mu,linear:X5},_e=t({mipmap:Eu,"nearest mipmap nearest":ku,"linear mipmap nearest":Gp,"nearest mipmap linear":Dp,"linear mipmap linear":Eu},Ee),Le={none:0,browser:$p},Fe={uint8:l0,rgba4:G5,rgb565:$5,"rgb5 a1":D5},xe={alpha:hu,luminance:zc,"luminance alpha":nf,rgb:of,rgba:us,rgba4:Tp,"rgb5 a1":uu,rgb565:Lp},Ce={};M.ext_srgb&&(xe.srgb=pu,xe.srgba=vu),M.oes_texture_float&&(Fe.float32=Fe.float=Cc),M.oes_texture_half_float&&(Fe.float16=Fe["half float"]=c0),M.webgl_depth_texture&&(t(xe,{depth:du,"depth stencil":rf}),t(Fe,{uint16:bu,uint32:wu,"depth stencil":q5})),M.webgl_compressed_texture_s3tc&&t(Ce,{"rgb s3tc dxt1":mu,"rgba s3tc dxt1":gu,"rgba s3tc dxt3":xu,"rgba s3tc dxt5":yu}),M.webgl_compressed_texture_atc&&t(Ce,{"rgb atc":zp,"rgba atc explicit alpha":Cp,"rgba atc interpolated alpha":Np}),M.webgl_compressed_texture_pvrtc&&t(Ce,{"rgb pvrtc 4bppv1":Rp,"rgb pvrtc 2bppv1":Pp,"rgba pvrtc 4bppv1":Op,"rgba pvrtc 2bppv1":Ip}),M.webgl_compressed_texture_etc1&&(Ce["rgb etc1"]=Fp);var B=Array.prototype.slice.call(x.getParameter(F5));Object.keys(Ce).forEach(function(z){var ee=Ce[z];B.indexOf(ee)>=0&&(xe[z]=ee)});var ne=Object.keys(xe);C.textureFormats=ne;var ke=[];Object.keys(xe).forEach(function(z){var ee=xe[z];ke[ee]=z});var Ue=[];Object.keys(Fe).forEach(function(z){var ee=Fe[z];Ue[ee]=z});var ue=[];Object.keys(Ee).forEach(function(z){var ee=Ee[z];ue[ee]=z});var je=[];Object.keys(_e).forEach(function(z){var ee=_e[z];je[ee]=z});var ve=[];Object.keys(we).forEach(function(z){var ee=we[z];ve[ee]=z});var Re=ne.reduce(function(z,ee){var X=xe[ee];return X===zc||X===hu||X===zc||X===nf||X===du||X===rf||M.ext_srgb&&(X===pu||X===vu)?z[X]=X:X===uu||ee.indexOf("rgba")>=0?z[X]=us:z[X]=of,z},{});function pe(){this.internalformat=us,this.format=us,this.type=l0,this.compressed=!1,this.premultiplyAlpha=!1,this.flipY=!1,this.unpackAlignment=1,this.colorSpace=$p,this.width=0,this.height=0,this.channels=0}function Pe(z,ee){z.internalformat=ee.internalformat,z.format=ee.format,z.type=ee.type,z.compressed=ee.compressed,z.premultiplyAlpha=ee.premultiplyAlpha,z.flipY=ee.flipY,z.unpackAlignment=ee.unpackAlignment,z.colorSpace=ee.colorSpace,z.width=ee.width,z.height=ee.height,z.channels=ee.channels}function ut(z,ee){if(!(typeof ee!="object"||!ee)){if("premultiplyAlpha"in ee&&(_.type(ee.premultiplyAlpha,"boolean","invalid premultiplyAlpha"),z.premultiplyAlpha=ee.premultiplyAlpha),"flipY"in ee&&(_.type(ee.flipY,"boolean","invalid texture flip"),z.flipY=ee.flipY),"alignment"in ee&&(_.oneOf(ee.alignment,[1,2,4,8],"invalid texture unpack alignment"),z.unpackAlignment=ee.alignment),"colorSpace"in ee&&(_.parameter(ee.colorSpace,Le,"invalid colorSpace"),z.colorSpace=Le[ee.colorSpace]),"type"in ee){var X=ee.type;_(M.oes_texture_float||!(X==="float"||X==="float32"),"you must enable the OES_texture_float extension in order to use floating point textures."),_(M.oes_texture_half_float||!(X==="half float"||X==="float16"),"you must enable the OES_texture_half_float extension in order to use 16-bit floating point textures."),_(M.webgl_depth_texture||!(X==="uint16"||X==="uint32"||X==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),_.parameter(X,Fe,"invalid texture type"),z.type=Fe[X]}var Ye=z.width,Xt=z.height,A=z.channels,w=!1;"shape"in ee?(_(Array.isArray(ee.shape)&&ee.shape.length>=2,"shape must be an array"),Ye=ee.shape[0],Xt=ee.shape[1],ee.shape.length===3&&(A=ee.shape[2],_(A>0&&A<=4,"invalid number of channels"),w=!0),_(Ye>=0&&Ye<=C.maxTextureSize,"invalid width"),_(Xt>=0&&Xt<=C.maxTextureSize,"invalid height")):("radius"in ee&&(Ye=Xt=ee.radius,_(Ye>=0&&Ye<=C.maxTextureSize,"invalid radius")),"width"in ee&&(Ye=ee.width,_(Ye>=0&&Ye<=C.maxTextureSize,"invalid width")),"height"in ee&&(Xt=ee.height,_(Xt>=0&&Xt<=C.maxTextureSize,"invalid height")),"channels"in ee&&(A=ee.channels,_(A>0&&A<=4,"invalid number of channels"),w=!0)),z.width=Ye|0,z.height=Xt|0,z.channels=A|0;var P=!1;if("format"in ee){var H=ee.format;_(M.webgl_depth_texture||!(H==="depth"||H==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),_.parameter(H,xe,"invalid texture format");var j=z.internalformat=xe[H];z.format=Re[j],H in Fe&&("type"in ee||(z.type=Fe[H])),H in Ce&&(z.compressed=!0),P=!0}!w&&P?z.channels=aa[z.format]:w&&!P?z.channels!==sf[z.format]&&(z.format=z.internalformat=sf[z.channels]):P&&w&&_(z.channels===aa[z.format],"number of channels inconsistent with specified format")}}function Ct(z){x.pixelStorei(ew,z.flipY),x.pixelStorei(tw,z.premultiplyAlpha),x.pixelStorei(ow,z.colorSpace),x.pixelStorei(J5,z.unpackAlignment)}function Ge(){pe.call(this),this.xOffset=0,this.yOffset=0,this.data=null,this.needsFree=!1,this.element=null,this.needsCopy=!1}function Se(z,ee){var X=null;if(Su(ee)?X=ee:ee&&(_.type(ee,"object","invalid pixel data type"),ut(z,ee),"x"in ee&&(z.xOffset=ee.x|0),"y"in ee&&(z.yOffset=ee.y|0),Su(ee.data)&&(X=ee.data)),_(!z.compressed||X instanceof Uint8Array,"compressed texture data must be stored in a uint8array"),ee.copy){_(!X,"can not specify copy and data field for the same texture");var Ye=se.viewportWidth,Xt=se.viewportHeight;z.width=z.width||Ye-z.xOffset,z.height=z.height||Xt-z.yOffset,z.needsCopy=!0,_(z.xOffset>=0&&z.xOffset<Ye&&z.yOffset>=0&&z.yOffset<Xt&&z.width>0&&z.width<=Ye&&z.height>0&&z.height<=Xt,"copy texture read out of bounds")}else if(!X)z.width=z.width||1,z.height=z.height||1,z.channels=z.channels||4;else if(e(X))z.channels=z.channels||4,z.data=X,!("type"in ee)&&z.type===l0&&(z.type=Qp(X));else if(Vp(X))z.channels=z.channels||4,lw(z,X),z.alignment=1,z.needsFree=!0;else if(_a(X)){var A=X.data;!Array.isArray(A)&&z.type===l0&&(z.type=Qp(A));var w=X.shape,P=X.stride,H,j,F,I,G,T;w.length===3?(F=w[2],T=P[2]):(_(w.length===2,"invalid ndarray pixel data, must be 2 or 3D"),F=1,T=1),H=w[0],j=w[1],I=P[0],G=P[1],z.alignment=1,z.width=H,z.height=j,z.channels=F,z.format=z.internalformat=sf[F],z.needsFree=!0,fw(z,A,I,G,T,X.offset)}else if(Yp(X)||Kp(X)||aw(X))Yp(X)||Kp(X)?z.element=X:z.element=X.canvas,z.width=z.element.width,z.height=z.element.height,z.channels=4;else if(iw(X))z.element=X,z.width=X.width,z.height=X.height,z.channels=4;else if(sw(X))z.element=X,z.width=X.naturalWidth,z.height=X.naturalHeight,z.channels=4;else if(cw(X))z.element=X,z.width=X.videoWidth,z.height=X.videoHeight,z.channels=4;else if(Xp(X)){var R=z.width||X[0].length,S=z.height||X.length,$=z.channels;an(X[0][0])?$=$||X[0][0].length:$=$||1;for(var V=Zl.shape(X),ie=1,ce=0;ce<V.length;++ce)ie*=V[ce];var ae=Zp(z,ie);Zl.flatten(X,V,"",ae),Jp(z,ae),z.alignment=1,z.width=R,z.height=S,z.channels=$,z.format=z.internalformat=sf[$],z.needsFree=!0}z.type===Cc?_(C.extensions.indexOf("oes_texture_float")>=0,"oes_texture_float extension not enabled"):z.type===c0&&_(C.extensions.indexOf("oes_texture_half_float")>=0,"oes_texture_half_float extension not enabled")}function fe(z,ee,X){var Ye=z.element,Xt=z.data,A=z.internalformat,w=z.format,P=z.type,H=z.width,j=z.height;Ct(z),Ye?x.texImage2D(ee,X,w,w,P,Ye):z.compressed?x.compressedTexImage2D(ee,X,A,H,j,0,Xt):z.needsCopy?(J(),x.copyTexImage2D(ee,X,w,z.xOffset,z.yOffset,H,j,0)):x.texImage2D(ee,X,w,H,j,0,w,P,Xt||null)}function At(z,ee,X,Ye,Xt){var A=z.element,w=z.data,P=z.internalformat,H=z.format,j=z.type,F=z.width,I=z.height;Ct(z),A?x.texSubImage2D(ee,Xt,X,Ye,H,j,A):z.compressed?x.compressedTexSubImage2D(ee,Xt,X,Ye,P,F,I,w):z.needsCopy?(J(),x.copyTexSubImage2D(ee,Xt,X,Ye,z.xOffset,z.yOffset,F,I)):x.texSubImage2D(ee,Xt,X,Ye,F,I,H,j,w)}var Gt=[];function Qe(){return Gt.pop()||new Ge}function Vt(z){z.needsFree&&U.freeType(z.data),Ge.call(z),Gt.push(z)}function Rt(){pe.call(this),this.genMipmaps=!1,this.mipmapHint=af,this.mipmask=0,this.images=Array(16)}function Ut(z,ee,X){var Ye=z.images[0]=Qe();z.mipmask=1,Ye.width=z.width=ee,Ye.height=z.height=X,Ye.channels=z.channels=4}function ho(z,ee){var X=null;if(Su(ee))X=z.images[0]=Qe(),Pe(X,z),Se(X,ee),z.mipmask=1;else if(ut(z,ee),Array.isArray(ee.mipmap))for(var Ye=ee.mipmap,Xt=0;Xt<Ye.length;++Xt)X=z.images[Xt]=Qe(),Pe(X,z),X.width>>=Xt,X.height>>=Xt,Se(X,Ye[Xt]),z.mipmask|=1<<Xt;else X=z.images[0]=Qe(),Pe(X,z),Se(X,ee),z.mipmask=1;Pe(z,z.images[0]),z.compressed&&(z.internalformat===mu||z.internalformat===gu||z.internalformat===xu||z.internalformat===yu)&&_(z.width%4===0&&z.height%4===0,"for compressed texture formats, mipmap level 0 must have width and height that are a multiple of 4")}function dn(z,ee){for(var X=z.images,Ye=0;Ye<X.length;++Ye){if(!X[Ye])return;fe(X[Ye],ee,Ye)}}var zn=[];function Jt(){var z=zn.pop()||new Rt;pe.call(z),z.mipmask=0;for(var ee=0;ee<16;++ee)z.images[ee]=null;return z}function wn(z){for(var ee=z.images,X=0;X<ee.length;++X)ee[X]&&Vt(ee[X]),ee[X]=null;zn.push(z)}function Fo(){this.minFilter=Mu,this.magFilter=Mu,this.wrapS=_u,this.wrapT=_u,this.anisotropic=1,this.genMipmaps=!1,this.mipmapHint=af}function pn(z,ee){if("min"in ee){var X=ee.min;_.parameter(X,_e),z.minFilter=_e[X],nw.indexOf(z.minFilter)>=0&&!("faces"in ee)&&(z.genMipmaps=!0)}if("mag"in ee){var Ye=ee.mag;_.parameter(Ye,Ee),z.magFilter=Ee[Ye]}var Xt=z.wrapS,A=z.wrapT;if("wrap"in ee){var w=ee.wrap;typeof w=="string"?(_.parameter(w,we),Xt=A=we[w]):Array.isArray(w)&&(_.parameter(w[0],we),_.parameter(w[1],we),Xt=we[w[0]],A=we[w[1]])}else{if("wrapS"in ee){var P=ee.wrapS;_.parameter(P,we),Xt=we[P]}if("wrapT"in ee){var H=ee.wrapT;_.parameter(H,we),A=we[H]}}if(z.wrapS=Xt,z.wrapT=A,"anisotropic"in ee){var j=ee.anisotropic;_(typeof j=="number"&&j>=1&&j<=C.maxAnisotropic,"aniso samples must be between 1 and "),z.anisotropic=ee.anisotropic}if("mipmap"in ee){var F=!1;switch(typeof ee.mipmap){case"string":_.parameter(ee.mipmap,ge,"invalid mipmap hint"),z.mipmapHint=ge[ee.mipmap],z.genMipmaps=!0,F=!0;break;case"boolean":F=z.genMipmaps=ee.mipmap;break;case"object":_(Array.isArray(ee.mipmap),"invalid mipmap type"),z.genMipmaps=!1,F=!0;break;default:_.raise("invalid mipmap type")}F&&!("min"in ee)&&(z.minFilter=ku)}}function _n(z,ee){x.texParameteri(ee,V5,z.minFilter),x.texParameteri(ee,W5,z.magFilter),x.texParameteri(ee,H5,z.wrapS),x.texParameteri(ee,U5,z.wrapT),M.ext_texture_filter_anisotropic&&x.texParameteri(ee,Z5,z.anisotropic),z.genMipmaps&&(x.hint(Y5,z.mipmapHint),x.generateMipmap(ee))}var Mn=0,qn={},Kn=C.maxTextureUnits,sn=Array(Kn).map(function(){return null});function Dt(z){pe.call(this),this.mipmask=0,this.internalformat=us,this.id=Mn++,this.refCount=1,this.target=z,this.texture=x.createTexture(),this.unit=-1,this.bindCount=0,this.texInfo=new Fo,oe.profile&&(this.stats={size:0})}function Qn(z){x.activeTexture(Nc),x.bindTexture(z.target,z.texture)}function yo(){var z=sn[0];z?x.bindTexture(z.target,z.texture):x.bindTexture(Da,null)}function yt(z){var ee=z.texture;_(ee,"must not double destroy texture");var X=z.unit,Ye=z.target;X>=0&&(x.activeTexture(Nc+X),x.bindTexture(Ye,null),sn[X]=null),x.deleteTexture(ee),z.texture=null,z.params=null,z.pixels=null,z.refCount=0,delete qn[z.id],Q.textureCount--}t(Dt.prototype,{bind:function(){var z=this;z.bindCount+=1;var ee=z.unit;if(ee<0){for(var X=0;X<Kn;++X){var Ye=sn[X];if(Ye){if(Ye.bindCount>0)continue;Ye.unit=-1}sn[X]=z,ee=X;break}ee>=Kn&&_.raise("insufficient number of texture units"),oe.profile&&Q.maxTextureUnits<ee+1&&(Q.maxTextureUnits=ee+1),z.unit=ee,x.activeTexture(Nc+ee),x.bindTexture(z.target,z.texture)}return ee},unbind:function(){this.bindCount-=1},decRef:function(){--this.refCount<=0&&yt(this)}});function Qt(z,ee){var X=new Dt(Da);qn[X.id]=X,Q.textureCount++;function Ye(w,P){var H=X.texInfo;Fo.call(H);var j=Jt();return typeof w=="number"?typeof P=="number"?Ut(j,w|0,P|0):Ut(j,w|0,w|0):w?(_.type(w,"object","invalid arguments to regl.texture"),pn(H,w),ho(j,w)):Ut(j,1,1),H.genMipmaps&&(j.mipmask=(j.width<<1)-1),X.mipmask=j.mipmask,Pe(X,j),_.texture2D(H,j,C),X.internalformat=j.internalformat,Ye.width=j.width,Ye.height=j.height,Qn(X),dn(j,Da),_n(H,Da),yo(),wn(j),oe.profile&&(X.stats.size=cf(X.internalformat,X.type,j.width,j.height,H.genMipmaps,!1)),Ye.format=ke[X.internalformat],Ye.type=Ue[X.type],Ye.mag=ue[H.magFilter],Ye.min=je[H.minFilter],Ye.wrapS=ve[H.wrapS],Ye.wrapT=ve[H.wrapT],Ye}function Xt(w,P,H,j){_(!!w,"must specify image data");var F=P|0,I=H|0,G=j|0,T=Qe();return Pe(T,X),T.width=0,T.height=0,Se(T,w),T.width=T.width||(X.width>>G)-F,T.height=T.height||(X.height>>G)-I,_(X.type===T.type&&X.format===T.format&&X.internalformat===T.internalformat,"incompatible format for texture.subimage"),_(F>=0&&I>=0&&F+T.width<=X.width&&I+T.height<=X.height,"texture.subimage write out of bounds"),_(X.mipmask&1<<G,"missing mipmap data"),_(T.data||T.element||T.needsCopy,"missing image data"),Qn(X),At(T,Da,F,I,G),yo(),Vt(T),Ye}function A(w,P){var H=w|0,j=P|0||H;if(H===X.width&&j===X.height)return Ye;Ye.width=X.width=H,Ye.height=X.height=j,Qn(X);for(var F=0;X.mipmask>>F;++F){var I=H>>F,G=j>>F;if(!I||!G)break;x.texImage2D(Da,F,X.format,I,G,0,X.format,X.type,null)}return yo(),oe.profile&&(X.stats.size=cf(X.internalformat,X.type,H,j,!1,!1)),Ye}return Ye(z,ee),Ye.subimage=Xt,Ye.resize=A,Ye._reglType="texture2d",Ye._texture=X,oe.profile&&(Ye.stats=X.stats),Ye.destroy=function(){X.decRef()},Ye}function io(z,ee,X,Ye,Xt,A){var w=new Dt(fu);qn[w.id]=w,Q.cubeCount++;var P=new Array(6);function H(I,G,T,R,S,$){var V,ie=w.texInfo;for(Fo.call(ie),V=0;V<6;++V)P[V]=Jt();if(typeof I=="number"||!I){var ce=I|0||1;for(V=0;V<6;++V)Ut(P[V],ce,ce)}else if(typeof I=="object")if(G)ho(P[0],I),ho(P[1],G),ho(P[2],T),ho(P[3],R),ho(P[4],S),ho(P[5],$);else if(pn(ie,I),ut(w,I),"faces"in I){var ae=I.faces;for(_(Array.isArray(ae)&&ae.length===6,"cube faces must be a length 6 array"),V=0;V<6;++V)_(typeof ae[V]=="object"&&!!ae[V],"invalid input for cube map face"),Pe(P[V],w),ho(P[V],ae[V])}else for(V=0;V<6;++V)ho(P[V],I);else _.raise("invalid arguments to cube map");for(Pe(w,P[0]),C.npotTextureCube||_(Ap(w.width)&&Ap(w.height),"your browser does not support non power or two texture dimensions"),ie.genMipmaps?w.mipmask=(P[0].width<<1)-1:w.mipmask=P[0].mipmask,_.textureCube(w,ie,P,C),w.internalformat=P[0].internalformat,H.width=P[0].width,H.height=P[0].height,Qn(w),V=0;V<6;++V)dn(P[V],tf+V);for(_n(ie,fu),yo(),oe.profile&&(w.stats.size=cf(w.internalformat,w.type,H.width,H.height,ie.genMipmaps,!0)),H.format=ke[w.internalformat],H.type=Ue[w.type],H.mag=ue[ie.magFilter],H.min=je[ie.minFilter],H.wrapS=ve[ie.wrapS],H.wrapT=ve[ie.wrapT],V=0;V<6;++V)wn(P[V]);return H}function j(I,G,T,R,S){_(!!G,"must specify image data"),_(typeof I=="number"&&I===(I|0)&&I>=0&&I<6,"invalid face");var $=T|0,V=R|0,ie=S|0,ce=Qe();return Pe(ce,w),ce.width=0,ce.height=0,Se(ce,G),ce.width=ce.width||(w.width>>ie)-$,ce.height=ce.height||(w.height>>ie)-V,_(w.type===ce.type&&w.format===ce.format&&w.internalformat===ce.internalformat,"incompatible format for texture.subimage"),_($>=0&&V>=0&&$+ce.width<=w.width&&V+ce.height<=w.height,"texture.subimage write out of bounds"),_(w.mipmask&1<<ie,"missing mipmap data"),_(ce.data||ce.element||ce.needsCopy,"missing image data"),Qn(w),At(ce,tf+I,$,V,ie),yo(),Vt(ce),H}function F(I){var G=I|0;if(G!==w.width){H.width=w.width=G,H.height=w.height=G,Qn(w);for(var T=0;T<6;++T)for(var R=0;w.mipmask>>R;++R)x.texImage2D(tf+T,R,w.format,G>>R,G>>R,0,w.format,w.type,null);return yo(),oe.profile&&(w.stats.size=cf(w.internalformat,w.type,H.width,H.height,!1,!0)),H}}return H(z,ee,X,Ye,Xt,A),H.subimage=j,H.resize=F,H._reglType="textureCube",H._texture=w,oe.profile&&(H.stats=w.stats),H.destroy=function(){w.decRef()},H}function cn(){for(var z=0;z<Kn;++z)x.activeTexture(Nc+z),x.bindTexture(Da,null),sn[z]=null;jr(qn).forEach(yt),Q.cubeCount=0,Q.textureCount=0}oe.profile&&(Q.getTotalTextureSize=function(){var z=0;return Object.keys(qn).forEach(function(ee){z+=qn[ee].stats.size}),z});function qa(){for(var z=0;z<Kn;++z){var ee=sn[z];ee&&(ee.bindCount=0,ee.unit=-1,sn[z]=null)}jr(qn).forEach(function(X){X.texture=x.createTexture(),x.bindTexture(X.target,X.texture);for(var Ye=0;Ye<32;++Ye)if(X.mipmask&1<<Ye)if(X.target===Da)x.texImage2D(Da,Ye,X.internalformat,X.width>>Ye,X.height>>Ye,0,X.internalformat,X.type,null);else for(var Xt=0;Xt<6;++Xt)x.texImage2D(tf+Xt,Ye,X.internalformat,X.width>>Ye,X.height>>Ye,0,X.internalformat,X.type,null);_n(X.texInfo,X.target)})}function bs(){for(var z=0;z<Kn;++z){var ee=sn[z];ee&&(ee.bindCount=0,ee.unit=-1,sn[z]=null),x.activeTexture(Nc+z),x.bindTexture(Da,null),x.bindTexture(fu,null)}}return{create2D:Qt,createCube:io,clear:cn,getTexture:function(z){return null},restore:qa,refresh:bs}}var Mi=36161,lf=32854,ev=32855,tv=36194,ov=33189,nv=36168,rv=34041,av=35907,iv=34836,sv=34842,cv=34843,Ma=[];Ma[lf]=2,Ma[ev]=2,Ma[tv]=2,Ma[ov]=2,Ma[nv]=1,Ma[rv]=4,Ma[av]=4,Ma[iv]=16,Ma[sv]=8,Ma[cv]=6;function lv(x,M,C){return Ma[x]*M*C}var uw=function(x,M,C,J,se){var Q={rgba4:lf,rgb565:tv,"rgb5 a1":ev,depth:ov,stencil:nv,"depth stencil":rv};M.ext_srgb&&(Q.srgba=av),M.ext_color_buffer_half_float&&(Q.rgba16f=sv,Q.rgb16f=cv),M.webgl_color_buffer_float&&(Q.rgba32f=iv);var oe=[];Object.keys(Q).forEach(function(xe){var Ce=Q[xe];oe[Ce]=xe});var ge=0,we={};function Ee(xe){this.id=ge++,this.refCount=1,this.renderbuffer=xe,this.format=lf,this.width=0,this.height=0,se.profile&&(this.stats={size:0})}Ee.prototype.decRef=function(){--this.refCount<=0&&_e(this)};function _e(xe){var Ce=xe.renderbuffer;_(Ce,"must not double destroy renderbuffer"),x.bindRenderbuffer(Mi,null),x.deleteRenderbuffer(Ce),xe.renderbuffer=null,xe.refCount=0,delete we[xe.id],J.renderbufferCount--}function Le(xe,Ce){var B=new Ee(x.createRenderbuffer());we[B.id]=B,J.renderbufferCount++;function ne(Ue,ue){var je=0,ve=0,Re=lf;if(typeof Ue=="object"&&Ue){var pe=Ue;if("shape"in pe){var Pe=pe.shape;_(Array.isArray(Pe)&&Pe.length>=2,"invalid renderbuffer shape"),je=Pe[0]|0,ve=Pe[1]|0}else"radius"in pe&&(je=ve=pe.radius|0),"width"in pe&&(je=pe.width|0),"height"in pe&&(ve=pe.height|0);"format"in pe&&(_.parameter(pe.format,Q,"invalid renderbuffer format"),Re=Q[pe.format])}else typeof Ue=="number"?(je=Ue|0,typeof ue=="number"?ve=ue|0:ve=je):Ue?_.raise("invalid arguments to renderbuffer constructor"):je=ve=1;if(_(je>0&&ve>0&&je<=C.maxRenderbufferSize&&ve<=C.maxRenderbufferSize,"invalid renderbuffer size"),!(je===B.width&&ve===B.height&&Re===B.format))return ne.width=B.width=je,ne.height=B.height=ve,B.format=Re,x.bindRenderbuffer(Mi,B.renderbuffer),x.renderbufferStorage(Mi,Re,je,ve),_(x.getError()===0,"invalid render buffer format"),se.profile&&(B.stats.size=lv(B.format,B.width,B.height)),ne.format=oe[B.format],ne}function ke(Ue,ue){var je=Ue|0,ve=ue|0||je;return je===B.width&&ve===B.height||(_(je>0&&ve>0&&je<=C.maxRenderbufferSize&&ve<=C.maxRenderbufferSize,"invalid renderbuffer size"),ne.width=B.width=je,ne.height=B.height=ve,x.bindRenderbuffer(Mi,B.renderbuffer),x.renderbufferStorage(Mi,B.format,je,ve),_(x.getError()===0,"invalid render buffer format"),se.profile&&(B.stats.size=lv(B.format,B.width,B.height))),ne}return ne(xe,Ce),ne.resize=ke,ne._reglType="renderbuffer",ne._renderbuffer=B,se.profile&&(ne.stats=B.stats),ne.destroy=function(){B.decRef()},ne}se.profile&&(J.getTotalRenderbufferSize=function(){var xe=0;return Object.keys(we).forEach(function(Ce){xe+=we[Ce].stats.size}),xe});function Fe(){jr(we).forEach(function(xe){xe.renderbuffer=x.createRenderbuffer(),x.bindRenderbuffer(Mi,xe.renderbuffer),x.renderbufferStorage(Mi,xe.format,xe.width,xe.height)}),x.bindRenderbuffer(Mi,null)}return{create:Le,clear:function(){jr(we).forEach(_e)},restore:Fe}},oi=36160,Au=36161,ps=3553,ff=34069,fv=36064,hv=36096,uv=36128,dv=33306,pv=36053,dw=36054,pw=36055,vw=36057,mw=36061,gw=36193,xw=5121,yw=5126,vv=6407,mv=6408,bw=6402,ww=[vv,mv],Tu=[];Tu[mv]=4,Tu[vv]=3;var hf=[];hf[xw]=1,hf[yw]=4,hf[gw]=2;var _w=32854,Mw=32855,kw=36194,Ew=33189,Sw=36168,gv=34041,Aw=35907,Tw=34836,Lw=34842,zw=34843,Cw=[_w,Mw,kw,Aw,Lw,zw,Tw],u0={};u0[pv]="complete",u0[dw]="incomplete attachment",u0[vw]="incomplete dimensions",u0[pw]="incomplete, missing attachment",u0[mw]="unsupported";function Nw(x,M,C,J,se,Q){var oe={cur:null,next:null,dirty:!1,setFBO:null},ge=["rgba"],we=["rgba4","rgb565","rgb5 a1"];M.ext_srgb&&we.push("srgba"),M.ext_color_buffer_half_float&&we.push("rgba16f","rgb16f"),M.webgl_color_buffer_float&&we.push("rgba32f");var Ee=["uint8"];M.oes_texture_half_float&&Ee.push("half float","float16"),M.oes_texture_float&&Ee.push("float","float32");function _e(Ge,Se,fe){this.target=Ge,this.texture=Se,this.renderbuffer=fe;var At=0,Gt=0;Se?(At=Se.width,Gt=Se.height):fe&&(At=fe.width,Gt=fe.height),this.width=At,this.height=Gt}function Le(Ge){Ge&&(Ge.texture&&Ge.texture._texture.decRef(),Ge.renderbuffer&&Ge.renderbuffer._renderbuffer.decRef())}function Fe(Ge,Se,fe){if(Ge)if(Ge.texture){var At=Ge.texture._texture,Gt=Math.max(1,At.width),Qe=Math.max(1,At.height);_(Gt===Se&&Qe===fe,"inconsistent width/height for supplied texture"),At.refCount+=1}else{var Vt=Ge.renderbuffer._renderbuffer;_(Vt.width===Se&&Vt.height===fe,"inconsistent width/height for renderbuffer"),Vt.refCount+=1}}function xe(Ge,Se){Se&&(Se.texture?x.framebufferTexture2D(oi,Ge,Se.target,Se.texture._texture.texture,0):x.framebufferRenderbuffer(oi,Ge,Au,Se.renderbuffer._renderbuffer.renderbuffer))}function Ce(Ge){var Se=ps,fe=null,At=null,Gt=Ge;typeof Ge=="object"&&(Gt=Ge.data,"target"in Ge&&(Se=Ge.target|0)),_.type(Gt,"function","invalid attachment data");var Qe=Gt._reglType;return Qe==="texture2d"?(fe=Gt,_(Se===ps)):Qe==="textureCube"?(fe=Gt,_(Se>=ff&&Se<ff+6,"invalid cube map target")):Qe==="renderbuffer"?(At=Gt,Se=Au):_.raise("invalid regl object for attachment"),new _e(Se,fe,At)}function B(Ge,Se,fe,At,Gt){if(fe){var Qe=J.create2D({width:Ge,height:Se,format:At,type:Gt});return Qe._texture.refCount=0,new _e(ps,Qe,null)}else{var Vt=se.create({width:Ge,height:Se,format:At});return Vt._renderbuffer.refCount=0,new _e(Au,null,Vt)}}function ne(Ge){return Ge&&(Ge.texture||Ge.renderbuffer)}function ke(Ge,Se,fe){Ge&&(Ge.texture?Ge.texture.resize(Se,fe):Ge.renderbuffer&&Ge.renderbuffer.resize(Se,fe),Ge.width=Se,Ge.height=fe)}var Ue=0,ue={};function je(){this.id=Ue++,ue[this.id]=this,this.framebuffer=x.createFramebuffer(),this.width=0,this.height=0,this.colorAttachments=[],this.depthAttachment=null,this.stencilAttachment=null,this.depthStencilAttachment=null}function ve(Ge){Ge.colorAttachments.forEach(Le),Le(Ge.depthAttachment),Le(Ge.stencilAttachment),Le(Ge.depthStencilAttachment)}function Re(Ge){var Se=Ge.framebuffer;_(Se,"must not double destroy framebuffer"),x.deleteFramebuffer(Se),Ge.framebuffer=null,Q.framebufferCount--,delete ue[Ge.id]}function pe(Ge){var Se;x.bindFramebuffer(oi,Ge.framebuffer);var fe=Ge.colorAttachments;for(Se=0;Se<fe.length;++Se)xe(fv+Se,fe[Se]);for(Se=fe.length;Se<C.maxColorAttachments;++Se)x.framebufferTexture2D(oi,fv+Se,ps,null,0);x.framebufferTexture2D(oi,dv,ps,null,0),x.framebufferTexture2D(oi,hv,ps,null,0),x.framebufferTexture2D(oi,uv,ps,null,0),xe(hv,Ge.depthAttachment),xe(uv,Ge.stencilAttachment),xe(dv,Ge.depthStencilAttachment);var At=x.checkFramebufferStatus(oi);!x.isContextLost()&&At!==pv&&_.raise("framebuffer configuration not supported, status = "+u0[At]),x.bindFramebuffer(oi,oe.next?oe.next.framebuffer:null),oe.cur=oe.next,x.getError()}function Pe(Ge,Se){var fe=new je;Q.framebufferCount++;function At(Qe,Vt){var Rt;_(oe.next!==fe,"can not update framebuffer which is currently in use");var Ut=0,ho=0,dn=!0,zn=!0,Jt=null,wn=!0,Fo="rgba",pn="uint8",_n=1,Mn=null,qn=null,Kn=null,sn=!1;if(typeof Qe=="number")Ut=Qe|0,ho=Vt|0||Ut;else if(!Qe)Ut=ho=1;else{_.type(Qe,"object","invalid arguments for framebuffer");var Dt=Qe;if("shape"in Dt){var Qn=Dt.shape;_(Array.isArray(Qn)&&Qn.length>=2,"invalid shape for framebuffer"),Ut=Qn[0],ho=Qn[1]}else"radius"in Dt&&(Ut=ho=Dt.radius),"width"in Dt&&(Ut=Dt.width),"height"in Dt&&(ho=Dt.height);("color"in Dt||"colors"in Dt)&&(Jt=Dt.color||Dt.colors,Array.isArray(Jt)&&_(Jt.length===1||M.webgl_draw_buffers,"multiple render targets not supported")),Jt||("colorCount"in Dt&&(_n=Dt.colorCount|0,_(_n>0,"invalid color buffer count")),"colorTexture"in Dt&&(wn=!!Dt.colorTexture,Fo="rgba4"),"colorType"in Dt&&(pn=Dt.colorType,wn?(_(M.oes_texture_float||!(pn==="float"||pn==="float32"),"you must enable OES_texture_float in order to use floating point framebuffer objects"),_(M.oes_texture_half_float||!(pn==="half float"||pn==="float16"),"you must enable OES_texture_half_float in order to use 16-bit floating point framebuffer objects")):pn==="half float"||pn==="float16"?(_(M.ext_color_buffer_half_float,"you must enable EXT_color_buffer_half_float to use 16-bit render buffers"),Fo="rgba16f"):(pn==="float"||pn==="float32")&&(_(M.webgl_color_buffer_float,"you must enable WEBGL_color_buffer_float in order to use 32-bit floating point renderbuffers"),Fo="rgba32f"),_.oneOf(pn,Ee,"invalid color type")),"colorFormat"in Dt&&(Fo=Dt.colorFormat,ge.indexOf(Fo)>=0?wn=!0:we.indexOf(Fo)>=0?wn=!1:wn?_.oneOf(Dt.colorFormat,ge,"invalid color format for texture"):_.oneOf(Dt.colorFormat,we,"invalid color format for renderbuffer"))),("depthTexture"in Dt||"depthStencilTexture"in Dt)&&(sn=!!(Dt.depthTexture||Dt.depthStencilTexture),_(!sn||M.webgl_depth_texture,"webgl_depth_texture extension not supported")),"depth"in Dt&&(typeof Dt.depth=="boolean"?dn=Dt.depth:(Mn=Dt.depth,zn=!1)),"stencil"in Dt&&(typeof Dt.stencil=="boolean"?zn=Dt.stencil:(qn=Dt.stencil,dn=!1)),"depthStencil"in Dt&&(typeof Dt.depthStencil=="boolean"?dn=zn=Dt.depthStencil:(Kn=Dt.depthStencil,dn=!1,zn=!1))}var yo=null,yt=null,Qt=null,io=null;if(Array.isArray(Jt))yo=Jt.map(Ce);else if(Jt)yo=[Ce(Jt)];else for(yo=new Array(_n),Rt=0;Rt<_n;++Rt)yo[Rt]=B(Ut,ho,wn,Fo,pn);_(M.webgl_draw_buffers||yo.length<=1,"you must enable the WEBGL_draw_buffers extension in order to use multiple color buffers."),_(yo.length<=C.maxColorAttachments,"too many color attachments, not supported"),Ut=Ut||yo[0].width,ho=ho||yo[0].height,Mn?yt=Ce(Mn):dn&&!zn&&(yt=B(Ut,ho,sn,"depth","uint32")),qn?Qt=Ce(qn):zn&&!dn&&(Qt=B(Ut,ho,!1,"stencil","uint8")),Kn?io=Ce(Kn):!Mn&&!qn&&zn&&dn&&(io=B(Ut,ho,sn,"depth stencil","depth stencil")),_(!!Mn+!!qn+!!Kn<=1,"invalid framebuffer configuration, can specify exactly one depth/stencil attachment");var cn=null;for(Rt=0;Rt<yo.length;++Rt)if(Fe(yo[Rt],Ut,ho),_(!yo[Rt]||yo[Rt].texture&&ww.indexOf(yo[Rt].texture._texture.format)>=0||yo[Rt].renderbuffer&&Cw.indexOf(yo[Rt].renderbuffer._renderbuffer.format)>=0,"framebuffer color attachment "+Rt+" is invalid"),yo[Rt]&&yo[Rt].texture){var qa=Tu[yo[Rt].texture._texture.format]*hf[yo[Rt].texture._texture.type];cn===null?cn=qa:_(cn===qa,"all color attachments much have the same number of bits per pixel.")}return Fe(yt,Ut,ho),_(!yt||yt.texture&&yt.texture._texture.format===bw||yt.renderbuffer&&yt.renderbuffer._renderbuffer.format===Ew,"invalid depth attachment for framebuffer object"),Fe(Qt,Ut,ho),_(!Qt||Qt.renderbuffer&&Qt.renderbuffer._renderbuffer.format===Sw,"invalid stencil attachment for framebuffer object"),Fe(io,Ut,ho),_(!io||io.texture&&io.texture._texture.format===gv||io.renderbuffer&&io.renderbuffer._renderbuffer.format===gv,"invalid depth-stencil attachment for framebuffer object"),ve(fe),fe.width=Ut,fe.height=ho,fe.colorAttachments=yo,fe.depthAttachment=yt,fe.stencilAttachment=Qt,fe.depthStencilAttachment=io,At.color=yo.map(ne),At.depth=ne(yt),At.stencil=ne(Qt),At.depthStencil=ne(io),At.width=fe.width,At.height=fe.height,pe(fe),At}function Gt(Qe,Vt){_(oe.next!==fe,"can not resize a framebuffer which is currently in use");var Rt=Math.max(Qe|0,1),Ut=Math.max(Vt|0||Rt,1);if(Rt===fe.width&&Ut===fe.height)return At;for(var ho=fe.colorAttachments,dn=0;dn<ho.length;++dn)ke(ho[dn],Rt,Ut);return ke(fe.depthAttachment,Rt,Ut),ke(fe.stencilAttachment,Rt,Ut),ke(fe.depthStencilAttachment,Rt,Ut),fe.width=At.width=Rt,fe.height=At.height=Ut,pe(fe),At}return At(Ge,Se),t(At,{resize:Gt,_reglType:"framebuffer",_framebuffer:fe,destroy:function(){Re(fe),ve(fe)},use:function(Qe){oe.setFBO({framebuffer:At},Qe)}})}function ut(Ge){var Se=Array(6);function fe(Gt){var Qe;_(Se.indexOf(oe.next)<0,"can not update framebuffer which is currently in use");var Vt={color:null},Rt=0,Ut=null,ho="rgba",dn="uint8",zn=1;if(typeof Gt=="number")Rt=Gt|0;else if(!Gt)Rt=1;else{_.type(Gt,"object","invalid arguments for framebuffer");var Jt=Gt;if("shape"in Jt){var wn=Jt.shape;_(Array.isArray(wn)&&wn.length>=2,"invalid shape for framebuffer"),_(wn[0]===wn[1],"cube framebuffer must be square"),Rt=wn[0]}else"radius"in Jt&&(Rt=Jt.radius|0),"width"in Jt?(Rt=Jt.width|0,"height"in Jt&&_(Jt.height===Rt,"must be square")):"height"in Jt&&(Rt=Jt.height|0);("color"in Jt||"colors"in Jt)&&(Ut=Jt.color||Jt.colors,Array.isArray(Ut)&&_(Ut.length===1||M.webgl_draw_buffers,"multiple render targets not supported")),Ut||("colorCount"in Jt&&(zn=Jt.colorCount|0,_(zn>0,"invalid color buffer count")),"colorType"in Jt&&(_.oneOf(Jt.colorType,Ee,"invalid color type"),dn=Jt.colorType),"colorFormat"in Jt&&(ho=Jt.colorFormat,_.oneOf(Jt.colorFormat,ge,"invalid color format for texture"))),"depth"in Jt&&(Vt.depth=Jt.depth),"stencil"in Jt&&(Vt.stencil=Jt.stencil),"depthStencil"in Jt&&(Vt.depthStencil=Jt.depthStencil)}var Fo;if(Ut)if(Array.isArray(Ut))for(Fo=[],Qe=0;Qe<Ut.length;++Qe)Fo[Qe]=Ut[Qe];else Fo=[Ut];else{Fo=Array(zn);var pn={radius:Rt,format:ho,type:dn};for(Qe=0;Qe<zn;++Qe)Fo[Qe]=J.createCube(pn)}for(Vt.color=Array(Fo.length),Qe=0;Qe<Fo.length;++Qe){var _n=Fo[Qe];_(typeof _n=="function"&&_n._reglType==="textureCube","invalid cube map"),Rt=Rt||_n.width,_(_n.width===Rt&&_n.height===Rt,"invalid cube map shape"),Vt.color[Qe]={target:ff,data:Fo[Qe]}}for(Qe=0;Qe<6;++Qe){for(var Mn=0;Mn<Fo.length;++Mn)Vt.color[Mn].target=ff+Qe;Qe>0&&(Vt.depth=Se[0].depth,Vt.stencil=Se[0].stencil,Vt.depthStencil=Se[0].depthStencil),Se[Qe]?Se[Qe](Vt):Se[Qe]=Pe(Vt)}return t(fe,{width:Rt,height:Rt,color:Fo})}function At(Gt){var Qe,Vt=Gt|0;if(_(Vt>0&&Vt<=C.maxCubeMapSize,"invalid radius for cube fbo"),Vt===fe.width)return fe;var Rt=fe.color;for(Qe=0;Qe<Rt.length;++Qe)Rt[Qe].resize(Vt);for(Qe=0;Qe<6;++Qe)Se[Qe].resize(Vt);return fe.width=fe.height=Vt,fe}return fe(Ge),t(fe,{faces:Se,resize:At,_reglType:"framebufferCube",destroy:function(){Se.forEach(function(Gt){Gt.destroy()})}})}function Ct(){oe.cur=null,oe.next=null,oe.dirty=!0,jr(ue).forEach(function(Ge){Ge.framebuffer=x.createFramebuffer(),pe(Ge)})}return t(oe,{getFramebuffer:function(Ge){if(typeof Ge=="function"&&Ge._reglType==="framebuffer"){var Se=Ge._framebuffer;if(Se instanceof je)return Se}return null},create:Pe,createCube:ut,clear:function(){jr(ue).forEach(Re)},restore:Ct})}var Rw=5126,xv=34962;function Lu(){this.state=0,this.x=0,this.y=0,this.z=0,this.w=0,this.buffer=null,this.size=0,this.normalized=!1,this.type=Rw,this.offset=0,this.stride=0,this.divisor=0}function Pw(x,M,C,J,se){for(var Q=C.maxAttributes,oe=new Array(Q),ge=0;ge<Q;++ge)oe[ge]=new Lu;var we=0,Ee={},_e={Record:Lu,scope:{},state:oe,currentVAO:null,targetVAO:null,restore:Fe()?ue:function(){},createVAO:je,getVAO:Ce,destroyBuffer:Le,setVAO:Fe()?B:ne,clear:Fe()?ke:function(){}};function Le(ve){for(var Re=0;Re<oe.length;++Re){var pe=oe[Re];pe.buffer===ve&&(x.disableVertexAttribArray(Re),pe.buffer=null)}}function Fe(){return M.oes_vertex_array_object}function xe(){return M.angle_instanced_arrays}function Ce(ve){return typeof ve=="function"&&ve._vao?ve._vao:null}function B(ve){if(ve!==_e.currentVAO){var Re=Fe();ve?Re.bindVertexArrayOES(ve.vao):Re.bindVertexArrayOES(null),_e.currentVAO=ve}}function ne(ve){if(ve!==_e.currentVAO){if(ve)ve.bindAttrs();else for(var Re=xe(),pe=0;pe<oe.length;++pe){var Pe=oe[pe];Pe.buffer?(x.enableVertexAttribArray(pe),x.vertexAttribPointer(pe,Pe.size,Pe.type,Pe.normalized,Pe.stride,Pe.offfset),Re&&Pe.divisor&&Re.vertexAttribDivisorANGLE(pe,Pe.divisor)):(x.disableVertexAttribArray(pe),x.vertexAttrib4f(pe,Pe.x,Pe.y,Pe.z,Pe.w))}_e.currentVAO=ve}}function ke(){jr(Ee).forEach(function(ve){ve.destroy()})}function Ue(){this.id=++we,this.attributes=[];var ve=Fe();ve?this.vao=ve.createVertexArrayOES():this.vao=null,Ee[this.id]=this,this.buffers=[]}Ue.prototype.bindAttrs=function(){for(var ve=xe(),Re=this.attributes,pe=0;pe<Re.length;++pe){var Pe=Re[pe];Pe.buffer?(x.enableVertexAttribArray(pe),x.bindBuffer(xv,Pe.buffer.buffer),x.vertexAttribPointer(pe,Pe.size,Pe.type,Pe.normalized,Pe.stride,Pe.offset),ve&&Pe.divisor&&ve.vertexAttribDivisorANGLE(pe,Pe.divisor)):(x.disableVertexAttribArray(pe),x.vertexAttrib4f(pe,Pe.x,Pe.y,Pe.z,Pe.w))}for(var ut=Re.length;ut<Q;++ut)x.disableVertexAttribArray(ut)},Ue.prototype.refresh=function(){var ve=Fe();ve&&(ve.bindVertexArrayOES(this.vao),this.bindAttrs(),_e.currentVAO=this)},Ue.prototype.destroy=function(){if(this.vao){var ve=Fe();this===_e.currentVAO&&(_e.currentVAO=null,ve.bindVertexArrayOES(null)),ve.deleteVertexArrayOES(this.vao),this.vao=null}Ee[this.id]&&(delete Ee[this.id],J.vaoCount-=1)};function ue(){var ve=Fe();ve&&jr(Ee).forEach(function(Re){Re.refresh()})}function je(ve){var Re=new Ue;J.vaoCount+=1;function pe(Pe){_(Array.isArray(Pe),"arguments to vertex array constructor must be an array"),_(Pe.length<Q,"too many attributes"),_(Pe.length>0,"must specify at least one attribute");var ut={},Ct=Re.attributes;Ct.length=Pe.length;for(var Ge=0;Ge<Pe.length;++Ge){var Se=Pe[Ge],fe=Ct[Ge]=new Lu,At=Se.data||Se;if(Array.isArray(At)||e(At)||_a(At)){var Gt;Re.buffers[Ge]&&(Gt=Re.buffers[Ge],e(At)&&Gt._buffer.byteLength>=At.byteLength?Gt.subdata(At):(Gt.destroy(),Re.buffers[Ge]=null)),Re.buffers[Ge]||(Gt=Re.buffers[Ge]=se.create(Se,xv,!1,!0)),fe.buffer=se.getBuffer(Gt),fe.size=fe.buffer.dimension|0,fe.normalized=!1,fe.type=fe.buffer.dtype,fe.offset=0,fe.stride=0,fe.divisor=0,fe.state=1,ut[Ge]=1}else se.getBuffer(Se)?(fe.buffer=se.getBuffer(Se),fe.size=fe.buffer.dimension|0,fe.normalized=!1,fe.type=fe.buffer.dtype,fe.offset=0,fe.stride=0,fe.divisor=0,fe.state=1):se.getBuffer(Se.buffer)?(fe.buffer=se.getBuffer(Se.buffer),fe.size=(+Se.size||fe.buffer.dimension)|0,fe.normalized=!!Se.normalized||!1,"type"in Se?(_.parameter(Se.type,fs,"invalid buffer type"),fe.type=fs[Se.type]):fe.type=fe.buffer.dtype,fe.offset=(Se.offset||0)|0,fe.stride=(Se.stride||0)|0,fe.divisor=(Se.divisor||0)|0,fe.state=1,_(fe.size>=1&&fe.size<=4,"size must be between 1 and 4"),_(fe.offset>=0,"invalid offset"),_(fe.stride>=0&&fe.stride<=255,"stride must be between 0 and 255"),_(fe.divisor>=0,"divisor must be positive"),_(!fe.divisor||!!M.angle_instanced_arrays,"ANGLE_instanced_arrays must be enabled to use divisor")):"x"in Se?(_(Ge>0,"first attribute must not be a constant"),fe.x=+Se.x||0,fe.y=+Se.y||0,fe.z=+Se.z||0,fe.w=+Se.w||0,fe.state=2):_(!1,"invalid attribute spec for location "+Ge)}for(var Qe=0;Qe<Re.buffers.length;++Qe)!ut[Qe]&&Re.buffers[Qe]&&(Re.buffers[Qe].destroy(),Re.buffers[Qe]=null);return Re.refresh(),pe}return pe.destroy=function(){for(var Pe=0;Pe<Re.buffers.length;++Pe)Re.buffers[Pe]&&Re.buffers[Pe].destroy();Re.buffers.length=0,Re.destroy()},pe._vao=Re,pe._reglType="vao",pe(ve)}return _e}var yv=35632,Ow=35633,Iw=35718,Fw=35721;function Gw(x,M,C,J){var se={},Q={};function oe(B,ne,ke,Ue){this.name=B,this.id=ne,this.location=ke,this.info=Ue}function ge(B,ne){for(var ke=0;ke<B.length;++ke)if(B[ke].id===ne.id){B[ke].location=ne.location;return}B.push(ne)}function we(B,ne,ke){var Ue=B===yv?se:Q,ue=Ue[ne];if(!ue){var je=M.str(ne);ue=x.createShader(B),x.shaderSource(ue,je),x.compileShader(ue),_.shaderError(x,ue,je,B,ke),Ue[ne]=ue}return ue}var Ee={},_e=[],Le=0;function Fe(B,ne){this.id=Le++,this.fragId=B,this.vertId=ne,this.program=null,this.uniforms=[],this.attributes=[],this.refCount=1,J.profile&&(this.stats={uniformsCount:0,attributesCount:0})}function xe(B,ne,ke){var Ue,ue,je=we(yv,B.fragId),ve=we(Ow,B.vertId),Re=B.program=x.createProgram();if(x.attachShader(Re,je),x.attachShader(Re,ve),ke)for(Ue=0;Ue<ke.length;++Ue){var pe=ke[Ue];x.bindAttribLocation(Re,pe[0],pe[1])}x.linkProgram(Re),_.linkError(x,Re,M.str(B.fragId),M.str(B.vertId),ne);var Pe=x.getProgramParameter(Re,Iw);J.profile&&(B.stats.uniformsCount=Pe);var ut=B.uniforms;for(Ue=0;Ue<Pe;++Ue)if(ue=x.getActiveUniform(Re,Ue),ue)if(ue.size>1)for(var Ct=0;Ct<ue.size;++Ct){var Ge=ue.name.replace("[0]","["+Ct+"]");ge(ut,new oe(Ge,M.id(Ge),x.getUniformLocation(Re,Ge),ue))}else ge(ut,new oe(ue.name,M.id(ue.name),x.getUniformLocation(Re,ue.name),ue));var Se=x.getProgramParameter(Re,Fw);J.profile&&(B.stats.attributesCount=Se);var fe=B.attributes;for(Ue=0;Ue<Se;++Ue)ue=x.getActiveAttrib(Re,Ue),ue&&ge(fe,new oe(ue.name,M.id(ue.name),x.getAttribLocation(Re,ue.name),ue))}J.profile&&(C.getMaxUniformsCount=function(){var B=0;return _e.forEach(function(ne){ne.stats.uniformsCount>B&&(B=ne.stats.uniformsCount)}),B},C.getMaxAttributesCount=function(){var B=0;return _e.forEach(function(ne){ne.stats.attributesCount>B&&(B=ne.stats.attributesCount)}),B});function Ce(){se={},Q={};for(var B=0;B<_e.length;++B)xe(_e[B],null,_e[B].attributes.map(function(ne){return[ne.location,ne.name]}))}return{clear:function(){var B=x.deleteShader.bind(x);jr(se).forEach(B),se={},jr(Q).forEach(B),Q={},_e.forEach(function(ne){x.deleteProgram(ne.program)}),_e.length=0,Ee={},C.shaderCount=0},program:function(B,ne,ke,Ue){_.command(B>=0,"missing vertex shader",ke),_.command(ne>=0,"missing fragment shader",ke);var ue=Ee[ne];ue||(ue=Ee[ne]={});var je=ue[B];if(je&&(je.refCount++,!Ue))return je;var ve=new Fe(ne,B);return C.shaderCount++,xe(ve,ke,Ue),je||(ue[B]=ve),_e.push(ve),t(ve,{destroy:function(){if(ve.refCount--,ve.refCount<=0){x.deleteProgram(ve.program);var Re=_e.indexOf(ve);_e.splice(Re,1),C.shaderCount--}ue[ve.vertId].refCount<=0&&(x.deleteShader(Q[ve.vertId]),delete Q[ve.vertId],delete Ee[ve.fragId][ve.vertId]),Object.keys(Ee[ve.fragId]).length||(x.deleteShader(se[ve.fragId]),delete se[ve.fragId],delete Ee[ve.fragId])}})},restore:Ce,shader:we,frag:-1,vert:-1}}var Dw=6408,Rc=5121,$w=3333,uf=5126;function qw(x,M,C,J,se,Q,oe){function ge(_e){var Le;M.next===null?(_(se.preserveDrawingBuffer,'you must create a webgl context with "preserveDrawingBuffer":true in order to read pixels from the drawing buffer'),Le=Rc):(_(M.next.colorAttachments[0].texture!==null,"You cannot read from a renderbuffer"),Le=M.next.colorAttachments[0].texture._texture.type,Q.oes_texture_float?(_(Le===Rc||Le===uf,"Reading from a framebuffer is only allowed for the types 'uint8' and 'float'"),Le===uf&&_(oe.readFloat,"Reading 'float' values is not permitted in your browser. For a fallback, please see: https://www.npmjs.com/package/glsl-read-float")):_(Le===Rc,"Reading from a framebuffer is only allowed for the type 'uint8'"));var Fe=0,xe=0,Ce=J.framebufferWidth,B=J.framebufferHeight,ne=null;e(_e)?ne=_e:_e&&(_.type(_e,"object","invalid arguments to regl.read()"),Fe=_e.x|0,xe=_e.y|0,_(Fe>=0&&Fe<J.framebufferWidth,"invalid x offset for regl.read"),_(xe>=0&&xe<J.framebufferHeight,"invalid y offset for regl.read"),Ce=(_e.width||J.framebufferWidth-Fe)|0,B=(_e.height||J.framebufferHeight-xe)|0,ne=_e.data||null),ne&&(Le===Rc?_(ne instanceof Uint8Array,"buffer must be 'Uint8Array' when reading from a framebuffer of type 'uint8'"):Le===uf&&_(ne instanceof Float32Array,"buffer must be 'Float32Array' when reading from a framebuffer of type 'float'")),_(Ce>0&&Ce+Fe<=J.framebufferWidth,"invalid width for read pixels"),_(B>0&&B+xe<=J.framebufferHeight,"invalid height for read pixels"),C();var ke=Ce*B*4;return ne||(Le===Rc?ne=new Uint8Array(ke):Le===uf&&(ne=ne||new Float32Array(ke))),_.isTypedArray(ne,"data buffer for regl.read() must be a typedarray"),_(ne.byteLength>=ke,"data buffer for regl.read() too small"),x.pixelStorei($w,4),x.readPixels(Fe,xe,Ce,B,Dw,Le,ne),ne}function we(_e){var Le;return M.setFBO({framebuffer:_e.framebuffer},function(){Le=ge(_e)}),Le}function Ee(_e){return!_e||!("framebuffer"in _e)?ge(_e):we(_e)}return Ee}function d0(x){return Array.prototype.slice.call(x)}function p0(x){return d0(x).join("")}function Hw(){var x=0,M=[],C=[];function J(Le){for(var Fe=0;Fe<C.length;++Fe)if(C[Fe]===Le)return M[Fe];var xe="g"+x++;return M.push(xe),C.push(Le),xe}function se(){var Le=[];function Fe(){Le.push.apply(Le,d0(arguments))}var xe=[];function Ce(){var B="v"+x++;return xe.push(B),arguments.length>0&&(Le.push(B,"="),Le.push.apply(Le,d0(arguments)),Le.push(";")),B}return t(Fe,{def:Ce,toString:function(){return p0([xe.length>0?"var "+xe.join(",")+";":"",p0(Le)])}})}function Q(){var Le=se(),Fe=se(),xe=Le.toString,Ce=Fe.toString;function B(ne,ke){Fe(ne,ke,"=",Le.def(ne,ke),";")}return t(function(){Le.apply(Le,d0(arguments))},{def:Le.def,entry:Le,exit:Fe,save:B,set:function(ne,ke,Ue){B(ne,ke),Le(ne,ke,"=",Ue,";")},toString:function(){return xe()+Ce()}})}function oe(){var Le=p0(arguments),Fe=Q(),xe=Q(),Ce=Fe.toString,B=xe.toString;return t(Fe,{then:function(){return Fe.apply(Fe,d0(arguments)),this},else:function(){return xe.apply(xe,d0(arguments)),this},toString:function(){var ne=B();return ne&&(ne="else{"+ne+"}"),p0(["if(",Le,"){",Ce(),"}",ne])}})}var ge=se(),we={};function Ee(Le,Fe){var xe=[];function Ce(){var ue="a"+xe.length;return xe.push(ue),ue}Fe=Fe||0;for(var B=0;B<Fe;++B)Ce();var ne=Q(),ke=ne.toString,Ue=we[Le]=t(ne,{arg:Ce,toString:function(){return p0(["function(",xe.join(),"){",ke(),"}"])}});return Ue}function _e(){var Le=['"use strict";',ge,"return {"];Object.keys(we).forEach(function(Ce){Le.push('"',Ce,'":',we[Ce].toString(),",")}),Le.push("}");var Fe=p0(Le).replace(/;/g,`;
`).replace(/}/g,`}
`).replace(/{/g,`{
`),xe=Function.apply(null,M.concat(Fe));return xe.apply(null,C)}return{global:ge,link:J,block:se,proc:Ee,scope:Q,cond:oe,compile:_e}}var v0="xyzw".split(""),bv=5121,m0=1,zu=2,Cu=0,Nu=1,Ru=2,Pu=3,df=4,wv=5,_v=6,Mv="dither",kv="blend.enable",Ev="blend.color",Ou="blend.equation",Iu="blend.func",Sv="depth.enable",Av="depth.func",Tv="depth.range",Lv="depth.mask",Fu="colorMask",zv="cull.enable",Cv="cull.face",Gu="frontFace",Du="lineWidth",Nv="polygonOffset.enable",$u="polygonOffset.offset",Rv="sample.alpha",Pv="sample.enable",qu="sample.coverage",Ov="stencil.enable",Iv="stencil.mask",Hu="stencil.func",Uu="stencil.opFront",Pc="stencil.opBack",Fv="scissor.enable",pf="scissor.box",ni="viewport",Oc="profile",vs="framebuffer",Ic="vert",Fc="frag",ms="elements",gs="primitive",xs="count",vf="offset",mf="instances",Gc="vao",Bu="Width",ju="Height",g0=vs+Bu,x0=vs+ju,Uw=ni+Bu,Bw=ni+ju,Gv="drawingBuffer",Dv=Gv+Bu,$v=Gv+ju,jw=[Iu,Ou,Hu,Uu,Pc,qu,ni,pf,$u],y0=34962,Ww=34963,Vw=35632,Xw=35633,qv=3553,Yw=34067,Kw=2884,Qw=3042,Zw=3024,Jw=2960,e4=2929,t4=3089,o4=32823,n4=32926,r4=32928,Wu=5126,gf=35664,xf=35665,yf=35666,Vu=5124,bf=35667,wf=35668,_f=35669,Xu=35670,Mf=35671,kf=35672,Ef=35673,Dc=35674,$c=35675,qc=35676,Hc=35678,Uc=35680,Hv=4,Bc=1028,ys=1029,Uv=2304,Yu=2305,a4=32775,i4=32776,s4=519,ki=7680,Bv=0,jv=1,Wv=32774,c4=513,Vv=36160,l4=36064,$a={0:0,1:1,zero:0,one:1,"src color":768,"one minus src color":769,"src alpha":770,"one minus src alpha":771,"dst color":774,"one minus dst color":775,"dst alpha":772,"one minus dst alpha":773,"constant color":32769,"one minus constant color":32770,"constant alpha":32771,"one minus constant alpha":32772,"src alpha saturate":776},Xv=["constant color, constant alpha","one minus constant color, constant alpha","constant color, one minus constant alpha","one minus constant color, one minus constant alpha","constant alpha, constant color","constant alpha, one minus constant color","one minus constant alpha, constant color","one minus constant alpha, one minus constant color"],b0={never:512,less:513,"<":513,equal:514,"=":514,"==":514,"===":514,lequal:515,"<=":515,greater:516,">":516,notequal:517,"!=":517,"!==":517,gequal:518,">=":518,always:519},Ei={0:0,zero:0,keep:7680,replace:7681,increment:7682,decrement:7683,"increment wrap":34055,"decrement wrap":34056,invert:5386},Yv={frag:Vw,vert:Xw},Ku={cw:Uv,ccw:Yu};function Sf(x){return Array.isArray(x)||e(x)||_a(x)}function Kv(x){return x.sort(function(M,C){return M===ni?-1:C===ni?1:M<C?-1:1})}function br(x,M,C,J){this.thisDep=x,this.contextDep=M,this.propDep=C,this.append=J}function Si(x){return x&&!(x.thisDep||x.contextDep||x.propDep)}function un(x){return new br(!1,!1,!1,x)}function Or(x,M){var C=x.type;if(C===Cu){var J=x.data.length;return new br(!0,J>=1,J>=2,M)}else if(C===df){var se=x.data;return new br(se.thisDep,se.contextDep,se.propDep,M)}else{if(C===wv)return new br(!1,!1,!1,M);if(C===_v){for(var Q=!1,oe=!1,ge=!1,we=0;we<x.data.length;++we){var Ee=x.data[we];if(Ee.type===Nu)ge=!0;else if(Ee.type===Ru)oe=!0;else if(Ee.type===Pu)Q=!0;else if(Ee.type===Cu){Q=!0;var _e=Ee.data;_e>=1&&(oe=!0),_e>=2&&(ge=!0)}else Ee.type===df&&(Q=Q||Ee.data.thisDep,oe=oe||Ee.data.contextDep,ge=ge||Ee.data.propDep)}return new br(Q,oe,ge,M)}else return new br(C===Pu,C===Ru,C===Nu,M)}}var Qv=new br(!1,!1,!1,function(){});function f4(x,M,C,J,se,Q,oe,ge,we,Ee,_e,Le,Fe,xe,Ce){var B=Ee.Record,ne={add:32774,subtract:32778,"reverse subtract":32779};C.ext_blend_minmax&&(ne.min=a4,ne.max=i4);var ke=C.angle_instanced_arrays,Ue=C.webgl_draw_buffers,ue={dirty:!0,profile:Ce.profile},je={},ve=[],Re={},pe={};function Pe(A){return A.replace(".","_")}function ut(A,w,P){var H=Pe(A);ve.push(A),je[H]=ue[H]=!!P,Re[H]=w}function Ct(A,w,P){var H=Pe(A);ve.push(A),Array.isArray(P)?(ue[H]=P.slice(),je[H]=P.slice()):ue[H]=je[H]=P,pe[H]=w}ut(Mv,Zw),ut(kv,Qw),Ct(Ev,"blendColor",[0,0,0,0]),Ct(Ou,"blendEquationSeparate",[Wv,Wv]),Ct(Iu,"blendFuncSeparate",[jv,Bv,jv,Bv]),ut(Sv,e4,!0),Ct(Av,"depthFunc",c4),Ct(Tv,"depthRange",[0,1]),Ct(Lv,"depthMask",!0),Ct(Fu,Fu,[!0,!0,!0,!0]),ut(zv,Kw),Ct(Cv,"cullFace",ys),Ct(Gu,Gu,Yu),Ct(Du,Du,1),ut(Nv,o4),Ct($u,"polygonOffset",[0,0]),ut(Rv,n4),ut(Pv,r4),Ct(qu,"sampleCoverage",[1,!1]),ut(Ov,Jw),Ct(Iv,"stencilMask",-1),Ct(Hu,"stencilFunc",[s4,0,-1]),Ct(Uu,"stencilOpSeparate",[Bc,ki,ki,ki]),Ct(Pc,"stencilOpSeparate",[ys,ki,ki,ki]),ut(Fv,t4),Ct(pf,"scissor",[0,0,x.drawingBufferWidth,x.drawingBufferHeight]),Ct(ni,ni,[0,0,x.drawingBufferWidth,x.drawingBufferHeight]);var Ge={gl:x,context:Fe,strings:M,next:je,current:ue,draw:Le,elements:Q,buffer:se,shader:_e,attributes:Ee.state,vao:Ee,uniforms:we,framebuffer:ge,extensions:C,timer:xe,isBufferArgs:Sf},Se={primTypes:a0,compareFuncs:b0,blendFuncs:$a,blendEquations:ne,stencilOps:Ei,glTypes:fs,orientationType:Ku};_.optional(function(){Ge.isArrayLike=an}),Ue&&(Se.backBuffer=[ys],Se.drawBuffer=Bt(J.maxDrawbuffers,function(A){return A===0?[0]:Bt(A,function(w){return l4+w})}));var fe=0;function At(){var A=Hw(),w=A.link,P=A.global;A.id=fe++,A.batchId="0";var H=w(Ge),j=A.shared={props:"a0"};Object.keys(Ge).forEach(function(R){j[R]=P.def(H,".",R)}),_.optional(function(){A.CHECK=w(_),A.commandStr=_.guessCommand(),A.command=w(A.commandStr),A.assert=function(R,S,$){R("if(!(",S,"))",this.CHECK,".commandRaise(",w($),",",this.command,");")},Se.invalidBlendCombinations=Xv});var F=A.next={},I=A.current={};Object.keys(pe).forEach(function(R){Array.isArray(ue[R])&&(F[R]=P.def(j.next,".",R),I[R]=P.def(j.current,".",R))});var G=A.constants={};Object.keys(Se).forEach(function(R){G[R]=P.def(JSON.stringify(Se[R]))}),A.invoke=function(R,S){switch(S.type){case Cu:var $=["this",j.context,j.props,A.batchId];return R.def(w(S.data),".call(",$.slice(0,Math.max(S.data.length+1,4)),")");case Nu:return R.def(j.props,S.data);case Ru:return R.def(j.context,S.data);case Pu:return R.def("this",S.data);case df:return S.data.append(A,R),S.data.ref;case wv:return S.data.toString();case _v:return S.data.map(function(V){return A.invoke(R,V)})}},A.attribCache={};var T={};return A.scopeAttrib=function(R){var S=M.id(R);if(S in T)return T[S];var $=Ee.scope[S];$||($=Ee.scope[S]=new B);var V=T[S]=w($);return V},A}function Gt(A){var w=A.static,P=A.dynamic,H;if(Oc in w){var j=!!w[Oc];H=un(function(I,G){return j}),H.enable=j}else if(Oc in P){var F=P[Oc];H=Or(F,function(I,G){return I.invoke(G,F)})}return H}function Qe(A,w){var P=A.static,H=A.dynamic;if(vs in P){var j=P[vs];return j?(j=ge.getFramebuffer(j),_.command(j,"invalid framebuffer object"),un(function(I,G){var T=I.link(j),R=I.shared;G.set(R.framebuffer,".next",T);var S=R.context;return G.set(S,"."+g0,T+".width"),G.set(S,"."+x0,T+".height"),T})):un(function(I,G){var T=I.shared;G.set(T.framebuffer,".next","null");var R=T.context;return G.set(R,"."+g0,R+"."+Dv),G.set(R,"."+x0,R+"."+$v),"null"})}else if(vs in H){var F=H[vs];return Or(F,function(I,G){var T=I.invoke(G,F),R=I.shared,S=R.framebuffer,$=G.def(S,".getFramebuffer(",T,")");_.optional(function(){I.assert(G,"!"+T+"||"+$,"invalid framebuffer object")}),G.set(S,".next",$);var V=R.context;return G.set(V,"."+g0,$+"?"+$+".width:"+V+"."+Dv),G.set(V,"."+x0,$+"?"+$+".height:"+V+"."+$v),$})}else return null}function Vt(A,w,P){var H=A.static,j=A.dynamic;function F(T){if(T in H){var R=H[T];_.commandType(R,"object","invalid "+T,P.commandStr);var S=!0,$=R.x|0,V=R.y|0,ie,ce;return"width"in R?(ie=R.width|0,_.command(ie>=0,"invalid "+T,P.commandStr)):S=!1,"height"in R?(ce=R.height|0,_.command(ce>=0,"invalid "+T,P.commandStr)):S=!1,new br(!S&&w&&w.thisDep,!S&&w&&w.contextDep,!S&&w&&w.propDep,function(it,$t){var Ze=it.shared.context,wt=ie;"width"in R||(wt=$t.def(Ze,".",g0,"-",$));var Pt=ce;return"height"in R||(Pt=$t.def(Ze,".",x0,"-",V)),[$,V,wt,Pt]})}else if(T in j){var ae=j[T],Me=Or(ae,function(it,$t){var Ze=it.invoke($t,ae);_.optional(function(){it.assert($t,Ze+"&&typeof "+Ze+'==="object"',"invalid "+T)});var wt=it.shared.context,Pt=$t.def(Ze,".x|0"),uo=$t.def(Ze,".y|0"),Jo=$t.def('"width" in ',Ze,"?",Ze,".width|0:","(",wt,".",g0,"-",Pt,")"),wr=$t.def('"height" in ',Ze,"?",Ze,".height|0:","(",wt,".",x0,"-",uo,")");return _.optional(function(){it.assert($t,Jo+">=0&&"+wr+">=0","invalid "+T)}),[Pt,uo,Jo,wr]});return w&&(Me.thisDep=Me.thisDep||w.thisDep,Me.contextDep=Me.contextDep||w.contextDep,Me.propDep=Me.propDep||w.propDep),Me}else return w?new br(w.thisDep,w.contextDep,w.propDep,function(it,$t){var Ze=it.shared.context;return[0,0,$t.def(Ze,".",g0),$t.def(Ze,".",x0)]}):null}var I=F(ni);if(I){var G=I;I=new br(I.thisDep,I.contextDep,I.propDep,function(T,R){var S=G.append(T,R),$=T.shared.context;return R.set($,"."+Uw,S[2]),R.set($,"."+Bw,S[3]),S})}return{viewport:I,scissor_box:F(pf)}}function Rt(A,w){var P=A.static,H=typeof P[Fc]=="string"&&typeof P[Ic]=="string";if(H){if(Object.keys(w.dynamic).length>0)return null;var j=w.static,F=Object.keys(j);if(F.length>0&&typeof j[F[0]]=="number"){for(var I=[],G=0;G<F.length;++G)_(typeof j[F[G]]=="number","must specify all vertex attribute locations when using vaos"),I.push([j[F[G]]|0,F[G]]);return I}}return null}function Ut(A,w,P){var H=A.static,j=A.dynamic;function F(S){if(S in H){var $=M.id(H[S]);_.optional(function(){_e.shader(Yv[S],$,_.guessCommand())});var V=un(function(){return $});return V.id=$,V}else if(S in j){var ie=j[S];return Or(ie,function(ce,ae){var Me=ce.invoke(ae,ie),it=ae.def(ce.shared.strings,".id(",Me,")");return _.optional(function(){ae(ce.shared.shader,".shader(",Yv[S],",",it,",",ce.command,");")}),it})}return null}var I=F(Fc),G=F(Ic),T=null,R;return Si(I)&&Si(G)?(T=_e.program(G.id,I.id,null,P),R=un(function(S,$){return S.link(T)})):R=new br(I&&I.thisDep||G&&G.thisDep,I&&I.contextDep||G&&G.contextDep,I&&I.propDep||G&&G.propDep,function(S,$){var V=S.shared.shader,ie;I?ie=I.append(S,$):ie=$.def(V,".",Fc);var ce;G?ce=G.append(S,$):ce=$.def(V,".",Ic);var ae=V+".program("+ce+","+ie;return _.optional(function(){ae+=","+S.command}),$.def(ae+")")}),{frag:I,vert:G,progVar:R,program:T}}function ho(A,w){var P=A.static,H=A.dynamic;function j(){if(ms in P){var S=P[ms];Sf(S)?S=Q.getElements(Q.create(S,!0)):S&&(S=Q.getElements(S),_.command(S,"invalid elements",w.commandStr));var $=un(function(ie,ce){if(S){var ae=ie.link(S);return ie.ELEMENTS=ae,ae}return ie.ELEMENTS=null,null});return $.value=S,$}else if(ms in H){var V=H[ms];return Or(V,function(ie,ce){var ae=ie.shared,Me=ae.isBufferArgs,it=ae.elements,$t=ie.invoke(ce,V),Ze=ce.def("null"),wt=ce.def(Me,"(",$t,")"),Pt=ie.cond(wt).then(Ze,"=",it,".createStream(",$t,");").else(Ze,"=",it,".getElements(",$t,");");return _.optional(function(){ie.assert(Pt.else,"!"+$t+"||"+Ze,"invalid elements")}),ce.entry(Pt),ce.exit(ie.cond(wt).then(it,".destroyStream(",Ze,");")),ie.ELEMENTS=Ze,Ze})}return null}var F=j();function I(){if(gs in P){var S=P[gs];return _.commandParameter(S,a0,"invalid primitve",w.commandStr),un(function(V,ie){return a0[S]})}else if(gs in H){var $=H[gs];return Or($,function(V,ie){var ce=V.constants.primTypes,ae=V.invoke(ie,$);return _.optional(function(){V.assert(ie,ae+" in "+ce,"invalid primitive, must be one of "+Object.keys(a0))}),ie.def(ce,"[",ae,"]")})}else if(F)return Si(F)?F.value?un(function(V,ie){return ie.def(V.ELEMENTS,".primType")}):un(function(){return Hv}):new br(F.thisDep,F.contextDep,F.propDep,function(V,ie){var ce=V.ELEMENTS;return ie.def(ce,"?",ce,".primType:",Hv)});return null}function G(S,$){if(S in P){var V=P[S]|0;return _.command(!$||V>=0,"invalid "+S,w.commandStr),un(function(ce,ae){return $&&(ce.OFFSET=V),V})}else if(S in H){var ie=H[S];return Or(ie,function(ce,ae){var Me=ce.invoke(ae,ie);return $&&(ce.OFFSET=Me,_.optional(function(){ce.assert(ae,Me+">=0","invalid "+S)})),Me})}else if($&&F)return un(function(ce,ae){return ce.OFFSET="0",0});return null}var T=G(vf,!0);function R(){if(xs in P){var S=P[xs]|0;return _.command(typeof S=="number"&&S>=0,"invalid vertex count",w.commandStr),un(function(){return S})}else if(xs in H){var $=H[xs];return Or($,function(ce,ae){var Me=ce.invoke(ae,$);return _.optional(function(){ce.assert(ae,"typeof "+Me+'==="number"&&'+Me+">=0&&"+Me+"===("+Me+"|0)","invalid vertex count")}),Me})}else if(F)if(Si(F)){if(F)return T?new br(T.thisDep,T.contextDep,T.propDep,function(ce,ae){var Me=ae.def(ce.ELEMENTS,".vertCount-",ce.OFFSET);return _.optional(function(){ce.assert(ae,Me+">=0","invalid vertex offset/element buffer too small")}),Me}):un(function(ce,ae){return ae.def(ce.ELEMENTS,".vertCount")});var V=un(function(){return-1});return _.optional(function(){V.MISSING=!0}),V}else{var ie=new br(F.thisDep||T.thisDep,F.contextDep||T.contextDep,F.propDep||T.propDep,function(ce,ae){var Me=ce.ELEMENTS;return ce.OFFSET?ae.def(Me,"?",Me,".vertCount-",ce.OFFSET,":-1"):ae.def(Me,"?",Me,".vertCount:-1")});return _.optional(function(){ie.DYNAMIC=!0}),ie}return null}return{elements:F,primitive:I(),count:R(),instances:G(mf,!1),offset:T}}function dn(A,w){var P=A.static,H=A.dynamic,j={};return ve.forEach(function(F){var I=Pe(F);function G(T,R){if(F in P){var S=T(P[F]);j[I]=un(function(){return S})}else if(F in H){var $=H[F];j[I]=Or($,function(V,ie){return R(V,ie,V.invoke(ie,$))})}}switch(F){case zv:case kv:case Mv:case Ov:case Sv:case Fv:case Nv:case Rv:case Pv:case Lv:return G(function(T){return _.commandType(T,"boolean",F,w.commandStr),T},function(T,R,S){return _.optional(function(){T.assert(R,"typeof "+S+'==="boolean"',"invalid flag "+F,T.commandStr)}),S});case Av:return G(function(T){return _.commandParameter(T,b0,"invalid "+F,w.commandStr),b0[T]},function(T,R,S){var $=T.constants.compareFuncs;return _.optional(function(){T.assert(R,S+" in "+$,"invalid "+F+", must be one of "+Object.keys(b0))}),R.def($,"[",S,"]")});case Tv:return G(function(T){return _.command(an(T)&&T.length===2&&typeof T[0]=="number"&&typeof T[1]=="number"&&T[0]<=T[1],"depth range is 2d array",w.commandStr),T},function(T,R,S){_.optional(function(){T.assert(R,T.shared.isArrayLike+"("+S+")&&"+S+".length===2&&typeof "+S+'[0]==="number"&&typeof '+S+'[1]==="number"&&'+S+"[0]<="+S+"[1]","depth range must be a 2d array")});var $=R.def("+",S,"[0]"),V=R.def("+",S,"[1]");return[$,V]});case Iu:return G(function(T){_.commandType(T,"object","blend.func",w.commandStr);var R="srcRGB"in T?T.srcRGB:T.src,S="srcAlpha"in T?T.srcAlpha:T.src,$="dstRGB"in T?T.dstRGB:T.dst,V="dstAlpha"in T?T.dstAlpha:T.dst;return _.commandParameter(R,$a,I+".srcRGB",w.commandStr),_.commandParameter(S,$a,I+".srcAlpha",w.commandStr),_.commandParameter($,$a,I+".dstRGB",w.commandStr),_.commandParameter(V,$a,I+".dstAlpha",w.commandStr),_.command(Xv.indexOf(R+", "+$)===-1,"unallowed blending combination (srcRGB, dstRGB) = ("+R+", "+$+")",w.commandStr),[$a[R],$a[$],$a[S],$a[V]]},function(T,R,S){var $=T.constants.blendFuncs;_.optional(function(){T.assert(R,S+"&&typeof "+S+'==="object"',"invalid blend func, must be an object")});function V(Ze,wt){var Pt=R.def('"',Ze,wt,'" in ',S,"?",S,".",Ze,wt,":",S,".",Ze);return _.optional(function(){T.assert(R,Pt+" in "+$,"invalid "+F+"."+Ze+wt+", must be one of "+Object.keys($a))}),Pt}var ie=V("src","RGB"),ce=V("dst","RGB");_.optional(function(){var Ze=T.constants.invalidBlendCombinations;T.assert(R,Ze+".indexOf("+ie+'+", "+'+ce+") === -1 ","unallowed blending combination for (srcRGB, dstRGB)")});var ae=R.def($,"[",ie,"]"),Me=R.def($,"[",V("src","Alpha"),"]"),it=R.def($,"[",ce,"]"),$t=R.def($,"[",V("dst","Alpha"),"]");return[ae,it,Me,$t]});case Ou:return G(function(T){if(typeof T=="string")return _.commandParameter(T,ne,"invalid "+F,w.commandStr),[ne[T],ne[T]];if(typeof T=="object")return _.commandParameter(T.rgb,ne,F+".rgb",w.commandStr),_.commandParameter(T.alpha,ne,F+".alpha",w.commandStr),[ne[T.rgb],ne[T.alpha]];_.commandRaise("invalid blend.equation",w.commandStr)},function(T,R,S){var $=T.constants.blendEquations,V=R.def(),ie=R.def(),ce=T.cond("typeof ",S,'==="string"');return _.optional(function(){function ae(Me,it,$t){T.assert(Me,$t+" in "+$,"invalid "+it+", must be one of "+Object.keys(ne))}ae(ce.then,F,S),T.assert(ce.else,S+"&&typeof "+S+'==="object"',"invalid "+F),ae(ce.else,F+".rgb",S+".rgb"),ae(ce.else,F+".alpha",S+".alpha")}),ce.then(V,"=",ie,"=",$,"[",S,"];"),ce.else(V,"=",$,"[",S,".rgb];",ie,"=",$,"[",S,".alpha];"),R(ce),[V,ie]});case Ev:return G(function(T){return _.command(an(T)&&T.length===4,"blend.color must be a 4d array",w.commandStr),Bt(4,function(R){return+T[R]})},function(T,R,S){return _.optional(function(){T.assert(R,T.shared.isArrayLike+"("+S+")&&"+S+".length===4","blend.color must be a 4d array")}),Bt(4,function($){return R.def("+",S,"[",$,"]")})});case Iv:return G(function(T){return _.commandType(T,"number",I,w.commandStr),T|0},function(T,R,S){return _.optional(function(){T.assert(R,"typeof "+S+'==="number"',"invalid stencil.mask")}),R.def(S,"|0")});case Hu:return G(function(T){_.commandType(T,"object",I,w.commandStr);var R=T.cmp||"keep",S=T.ref||0,$="mask"in T?T.mask:-1;return _.commandParameter(R,b0,F+".cmp",w.commandStr),_.commandType(S,"number",F+".ref",w.commandStr),_.commandType($,"number",F+".mask",w.commandStr),[b0[R],S,$]},function(T,R,S){var $=T.constants.compareFuncs;_.optional(function(){function ae(){T.assert(R,Array.prototype.join.call(arguments,""),"invalid stencil.func")}ae(S+"&&typeof ",S,'==="object"'),ae('!("cmp" in ',S,")||(",S,".cmp in ",$,")")});var V=R.def('"cmp" in ',S,"?",$,"[",S,".cmp]",":",ki),ie=R.def(S,".ref|0"),ce=R.def('"mask" in ',S,"?",S,".mask|0:-1");return[V,ie,ce]});case Uu:case Pc:return G(function(T){_.commandType(T,"object",I,w.commandStr);var R=T.fail||"keep",S=T.zfail||"keep",$=T.zpass||"keep";return _.commandParameter(R,Ei,F+".fail",w.commandStr),_.commandParameter(S,Ei,F+".zfail",w.commandStr),_.commandParameter($,Ei,F+".zpass",w.commandStr),[F===Pc?ys:Bc,Ei[R],Ei[S],Ei[$]]},function(T,R,S){var $=T.constants.stencilOps;_.optional(function(){T.assert(R,S+"&&typeof "+S+'==="object"',"invalid "+F)});function V(ie){return _.optional(function(){T.assert(R,'!("'+ie+'" in '+S+")||("+S+"."+ie+" in "+$+")","invalid "+F+"."+ie+", must be one of "+Object.keys(Ei))}),R.def('"',ie,'" in ',S,"?",$,"[",S,".",ie,"]:",ki)}return[F===Pc?ys:Bc,V("fail"),V("zfail"),V("zpass")]});case $u:return G(function(T){_.commandType(T,"object",I,w.commandStr);var R=T.factor|0,S=T.units|0;return _.commandType(R,"number",I+".factor",w.commandStr),_.commandType(S,"number",I+".units",w.commandStr),[R,S]},function(T,R,S){_.optional(function(){T.assert(R,S+"&&typeof "+S+'==="object"',"invalid "+F)});var $=R.def(S,".factor|0"),V=R.def(S,".units|0");return[$,V]});case Cv:return G(function(T){var R=0;return T==="front"?R=Bc:T==="back"&&(R=ys),_.command(!!R,I,w.commandStr),R},function(T,R,S){return _.optional(function(){T.assert(R,S+'==="front"||'+S+'==="back"',"invalid cull.face")}),R.def(S,'==="front"?',Bc,":",ys)});case Du:return G(function(T){return _.command(typeof T=="number"&&T>=J.lineWidthDims[0]&&T<=J.lineWidthDims[1],"invalid line width, must be a positive number between "+J.lineWidthDims[0]+" and "+J.lineWidthDims[1],w.commandStr),T},function(T,R,S){return _.optional(function(){T.assert(R,"typeof "+S+'==="number"&&'+S+">="+J.lineWidthDims[0]+"&&"+S+"<="+J.lineWidthDims[1],"invalid line width")}),S});case Gu:return G(function(T){return _.commandParameter(T,Ku,I,w.commandStr),Ku[T]},function(T,R,S){return _.optional(function(){T.assert(R,S+'==="cw"||'+S+'==="ccw"',"invalid frontFace, must be one of cw,ccw")}),R.def(S+'==="cw"?'+Uv+":"+Yu)});case Fu:return G(function(T){return _.command(an(T)&&T.length===4,"color.mask must be length 4 array",w.commandStr),T.map(function(R){return!!R})},function(T,R,S){return _.optional(function(){T.assert(R,T.shared.isArrayLike+"("+S+")&&"+S+".length===4","invalid color.mask")}),Bt(4,function($){return"!!"+S+"["+$+"]"})});case qu:return G(function(T){_.command(typeof T=="object"&&T,I,w.commandStr);var R="value"in T?T.value:1,S=!!T.invert;return _.command(typeof R=="number"&&R>=0&&R<=1,"sample.coverage.value must be a number between 0 and 1",w.commandStr),[R,S]},function(T,R,S){_.optional(function(){T.assert(R,S+"&&typeof "+S+'==="object"',"invalid sample.coverage")});var $=R.def('"value" in ',S,"?+",S,".value:1"),V=R.def("!!",S,".invert");return[$,V]})}}),j}function zn(A,w){var P=A.static,H=A.dynamic,j={};return Object.keys(P).forEach(function(F){var I=P[F],G;if(typeof I=="number"||typeof I=="boolean")G=un(function(){return I});else if(typeof I=="function"){var T=I._reglType;T==="texture2d"||T==="textureCube"?G=un(function(R){return R.link(I)}):T==="framebuffer"||T==="framebufferCube"?(_.command(I.color.length>0,'missing color attachment for framebuffer sent to uniform "'+F+'"',w.commandStr),G=un(function(R){return R.link(I.color[0])})):_.commandRaise('invalid data for uniform "'+F+'"',w.commandStr)}else an(I)?G=un(function(R){var S=R.global.def("[",Bt(I.length,function($){return _.command(typeof I[$]=="number"||typeof I[$]=="boolean","invalid uniform "+F,R.commandStr),I[$]}),"]");return S}):_.commandRaise('invalid or missing data for uniform "'+F+'"',w.commandStr);G.value=I,j[F]=G}),Object.keys(H).forEach(function(F){var I=H[F];j[F]=Or(I,function(G,T){return G.invoke(T,I)})}),j}function Jt(A,w){var P=A.static,H=A.dynamic,j={};return Object.keys(P).forEach(function(F){var I=P[F],G=M.id(F),T=new B;if(Sf(I))T.state=m0,T.buffer=se.getBuffer(se.create(I,y0,!1,!0)),T.type=0;else{var R=se.getBuffer(I);if(R)T.state=m0,T.buffer=R,T.type=0;else if(_.command(typeof I=="object"&&I,"invalid data for attribute "+F,w.commandStr),"constant"in I){var S=I.constant;T.buffer="null",T.state=zu,typeof S=="number"?T.x=S:(_.command(an(S)&&S.length>0&&S.length<=4,"invalid constant for attribute "+F,w.commandStr),v0.forEach(function(it,$t){$t<S.length&&(T[it]=S[$t])}))}else{Sf(I.buffer)?R=se.getBuffer(se.create(I.buffer,y0,!1,!0)):R=se.getBuffer(I.buffer),_.command(!!R,'missing buffer for attribute "'+F+'"',w.commandStr);var $=I.offset|0;_.command($>=0,'invalid offset for attribute "'+F+'"',w.commandStr);var V=I.stride|0;_.command(V>=0&&V<256,'invalid stride for attribute "'+F+'", must be integer betweeen [0, 255]',w.commandStr);var ie=I.size|0;_.command(!("size"in I)||ie>0&&ie<=4,'invalid size for attribute "'+F+'", must be 1,2,3,4',w.commandStr);var ce=!!I.normalized,ae=0;"type"in I&&(_.commandParameter(I.type,fs,"invalid type for attribute "+F,w.commandStr),ae=fs[I.type]);var Me=I.divisor|0;"divisor"in I&&(_.command(Me===0||ke,'cannot specify divisor for attribute "'+F+'", instancing not supported',w.commandStr),_.command(Me>=0,'invalid divisor for attribute "'+F+'"',w.commandStr)),_.optional(function(){var it=w.commandStr,$t=["buffer","offset","divisor","normalized","type","size","stride"];Object.keys(I).forEach(function(Ze){_.command($t.indexOf(Ze)>=0,'unknown parameter "'+Ze+'" for attribute pointer "'+F+'" (valid parameters are '+$t+")",it)})}),T.buffer=R,T.state=m0,T.size=ie,T.normalized=ce,T.type=ae||R.dtype,T.offset=$,T.stride=V,T.divisor=Me}}j[F]=un(function(it,$t){var Ze=it.attribCache;if(G in Ze)return Ze[G];var wt={isStream:!1};return Object.keys(T).forEach(function(Pt){wt[Pt]=T[Pt]}),T.buffer&&(wt.buffer=it.link(T.buffer),wt.type=wt.type||wt.buffer+".dtype"),Ze[G]=wt,wt})}),Object.keys(H).forEach(function(F){var I=H[F];function G(T,R){var S=T.invoke(R,I),$=T.shared,V=T.constants,ie=$.isBufferArgs,ce=$.buffer;_.optional(function(){T.assert(R,S+"&&(typeof "+S+'==="object"||typeof '+S+'==="function")&&('+ie+"("+S+")||"+ce+".getBuffer("+S+")||"+ce+".getBuffer("+S+".buffer)||"+ie+"("+S+'.buffer)||("constant" in '+S+"&&(typeof "+S+'.constant==="number"||'+$.isArrayLike+"("+S+".constant))))",'invalid dynamic attribute "'+F+'"')});var ae={isStream:R.def(!1)},Me=new B;Me.state=m0,Object.keys(Me).forEach(function(wt){ae[wt]=R.def(""+Me[wt])});var it=ae.buffer,$t=ae.type;R("if(",ie,"(",S,")){",ae.isStream,"=true;",it,"=",ce,".createStream(",y0,",",S,");",$t,"=",it,".dtype;","}else{",it,"=",ce,".getBuffer(",S,");","if(",it,"){",$t,"=",it,".dtype;",'}else if("constant" in ',S,"){",ae.state,"=",zu,";","if(typeof "+S+'.constant === "number"){',ae[v0[0]],"=",S,".constant;",v0.slice(1).map(function(wt){return ae[wt]}).join("="),"=0;","}else{",v0.map(function(wt,Pt){return ae[wt]+"="+S+".constant.length>"+Pt+"?"+S+".constant["+Pt+"]:0;"}).join(""),"}}else{","if(",ie,"(",S,".buffer)){",it,"=",ce,".createStream(",y0,",",S,".buffer);","}else{",it,"=",ce,".getBuffer(",S,".buffer);","}",$t,'="type" in ',S,"?",V.glTypes,"[",S,".type]:",it,".dtype;",ae.normalized,"=!!",S,".normalized;");function Ze(wt){R(ae[wt],"=",S,".",wt,"|0;")}return Ze("size"),Ze("offset"),Ze("stride"),Ze("divisor"),R("}}"),R.exit("if(",ae.isStream,"){",ce,".destroyStream(",it,");","}"),ae}j[F]=Or(I,G)}),j}function wn(A,w){var P=A.static,H=A.dynamic;if(Gc in P){var j=P[Gc];return j!==null&&Ee.getVAO(j)===null&&(j=Ee.createVAO(j)),un(function(I){return I.link(Ee.getVAO(j))})}else if(Gc in H){var F=H[Gc];return Or(F,function(I,G){var T=I.invoke(G,F);return G.def(I.shared.vao+".getVAO("+T+")")})}return null}function Fo(A){var w=A.static,P=A.dynamic,H={};return Object.keys(w).forEach(function(j){var F=w[j];H[j]=un(function(I,G){return typeof F=="number"||typeof F=="boolean"?""+F:I.link(F)})}),Object.keys(P).forEach(function(j){var F=P[j];H[j]=Or(F,function(I,G){return I.invoke(G,F)})}),H}function pn(A,w,P,H,j){var F=A.static,I=A.dynamic;_.optional(function(){var Ze=[vs,Ic,Fc,ms,gs,vf,xs,mf,Oc,Gc].concat(ve);function wt(Pt){Object.keys(Pt).forEach(function(uo){_.command(Ze.indexOf(uo)>=0,'unknown parameter "'+uo+'"',j.commandStr)})}wt(F),wt(I)});var G=Rt(A,w),T=Qe(A,j),R=Vt(A,T,j),S=ho(A,j),$=dn(A,j),V=Ut(A,j,G);function ie(Ze){var wt=R[Ze];wt&&($[Ze]=wt)}ie(ni),ie(Pe(pf));var ce=Object.keys($).length>0,ae={framebuffer:T,draw:S,shader:V,state:$,dirty:ce,scopeVAO:null,drawVAO:null,useVAO:!1,attributes:{}};if(ae.profile=Gt(A,j),ae.uniforms=zn(P,j),ae.drawVAO=ae.scopeVAO=wn(A,j),!ae.drawVAO&&V.program&&!G&&C.angle_instanced_arrays){var Me=!0,it=V.program.attributes.map(function(Ze){var wt=w.static[Ze];return Me=Me&&!!wt,wt});if(Me&&it.length>0){var $t=Ee.getVAO(Ee.createVAO(it));ae.drawVAO=new br(null,null,null,function(Ze,wt){return Ze.link($t)}),ae.useVAO=!0}}return G?ae.useVAO=!0:ae.attributes=Jt(w,j),ae.context=Fo(H,j),ae}function _n(A,w,P){var H=A.shared,j=H.context,F=A.scope();Object.keys(P).forEach(function(I){w.save(j,"."+I);var G=P[I],T=G.append(A,w);Array.isArray(T)?F(j,".",I,"=[",T.join(),"];"):F(j,".",I,"=",T,";")}),w(F)}function Mn(A,w,P,H){var j=A.shared,F=j.gl,I=j.framebuffer,G;Ue&&(G=w.def(j.extensions,".webgl_draw_buffers"));var T=A.constants,R=T.drawBuffer,S=T.backBuffer,$;P?$=P.append(A,w):$=w.def(I,".next"),H||w("if(",$,"!==",I,".cur){"),w("if(",$,"){",F,".bindFramebuffer(",Vv,",",$,".framebuffer);"),Ue&&w(G,".drawBuffersWEBGL(",R,"[",$,".colorAttachments.length]);"),w("}else{",F,".bindFramebuffer(",Vv,",null);"),Ue&&w(G,".drawBuffersWEBGL(",S,");"),w("}",I,".cur=",$,";"),H||w("}")}function qn(A,w,P){var H=A.shared,j=H.gl,F=A.current,I=A.next,G=H.current,T=H.next,R=A.cond(G,".dirty");ve.forEach(function(S){var $=Pe(S);if(!($ in P.state)){var V,ie;if($ in I){V=I[$],ie=F[$];var ce=Bt(ue[$].length,function(Me){return R.def(V,"[",Me,"]")});R(A.cond(ce.map(function(Me,it){return Me+"!=="+ie+"["+it+"]"}).join("||")).then(j,".",pe[$],"(",ce,");",ce.map(function(Me,it){return ie+"["+it+"]="+Me}).join(";"),";"))}else{V=R.def(T,".",$);var ae=A.cond(V,"!==",G,".",$);R(ae),$ in Re?ae(A.cond(V).then(j,".enable(",Re[$],");").else(j,".disable(",Re[$],");"),G,".",$,"=",V,";"):ae(j,".",pe[$],"(",V,");",G,".",$,"=",V,";")}}}),Object.keys(P.state).length===0&&R(G,".dirty=false;"),w(R)}function Kn(A,w,P,H){var j=A.shared,F=A.current,I=j.current,G=j.gl;Kv(Object.keys(P)).forEach(function(T){var R=P[T];if(!(H&&!H(R))){var S=R.append(A,w);if(Re[T]){var $=Re[T];Si(R)?S?w(G,".enable(",$,");"):w(G,".disable(",$,");"):w(A.cond(S).then(G,".enable(",$,");").else(G,".disable(",$,");")),w(I,".",T,"=",S,";")}else if(an(S)){var V=F[T];w(G,".",pe[T],"(",S,");",S.map(function(ie,ce){return V+"["+ce+"]="+ie}).join(";"),";")}else w(G,".",pe[T],"(",S,");",I,".",T,"=",S,";")}})}function sn(A,w){ke&&(A.instancing=w.def(A.shared.extensions,".angle_instanced_arrays"))}function Dt(A,w,P,H,j){var F=A.shared,I=A.stats,G=F.current,T=F.timer,R=P.profile;function S(){return typeof performance=="undefined"?"Date.now()":"performance.now()"}var $,V;function ie(Ze){$=w.def(),Ze($,"=",S(),";"),typeof j=="string"?Ze(I,".count+=",j,";"):Ze(I,".count++;"),xe&&(H?(V=w.def(),Ze(V,"=",T,".getNumPendingQueries();")):Ze(T,".beginQuery(",I,");"))}function ce(Ze){Ze(I,".cpuTime+=",S(),"-",$,";"),xe&&(H?Ze(T,".pushScopeStats(",V,",",T,".getNumPendingQueries(),",I,");"):Ze(T,".endQuery();"))}function ae(Ze){var wt=w.def(G,".profile");w(G,".profile=",Ze,";"),w.exit(G,".profile=",wt,";")}var Me;if(R){if(Si(R)){R.enable?(ie(w),ce(w.exit),ae("true")):ae("false");return}Me=R.append(A,w),ae(Me)}else Me=w.def(G,".profile");var it=A.block();ie(it),w("if(",Me,"){",it,"}");var $t=A.block();ce($t),w.exit("if(",Me,"){",$t,"}")}function Qn(A,w,P,H,j){var F=A.shared;function I(T){switch(T){case gf:case bf:case Mf:return 2;case xf:case wf:case kf:return 3;case yf:case _f:case Ef:return 4;default:return 1}}function G(T,R,S){var $=F.gl,V=w.def(T,".location"),ie=w.def(F.attributes,"[",V,"]"),ce=S.state,ae=S.buffer,Me=[S.x,S.y,S.z,S.w],it=["buffer","normalized","offset","stride"];function $t(){w("if(!",ie,".buffer){",$,".enableVertexAttribArray(",V,");}");var wt=S.type,Pt;if(S.size?Pt=w.def(S.size,"||",R):Pt=R,w("if(",ie,".type!==",wt,"||",ie,".size!==",Pt,"||",it.map(function(Jo){return ie+"."+Jo+"!=="+S[Jo]}).join("||"),"){",$,".bindBuffer(",y0,",",ae,".buffer);",$,".vertexAttribPointer(",[V,Pt,wt,S.normalized,S.stride,S.offset],");",ie,".type=",wt,";",ie,".size=",Pt,";",it.map(function(Jo){return ie+"."+Jo+"="+S[Jo]+";"}).join(""),"}"),ke){var uo=S.divisor;w("if(",ie,".divisor!==",uo,"){",A.instancing,".vertexAttribDivisorANGLE(",[V,uo],");",ie,".divisor=",uo,";}")}}function Ze(){w("if(",ie,".buffer){",$,".disableVertexAttribArray(",V,");",ie,".buffer=null;","}if(",v0.map(function(wt,Pt){return ie+"."+wt+"!=="+Me[Pt]}).join("||"),"){",$,".vertexAttrib4f(",V,",",Me,");",v0.map(function(wt,Pt){return ie+"."+wt+"="+Me[Pt]+";"}).join(""),"}")}ce===m0?$t():ce===zu?Ze():(w("if(",ce,"===",m0,"){"),$t(),w("}else{"),Ze(),w("}"))}H.forEach(function(T){var R=T.name,S=P.attributes[R],$;if(S){if(!j(S))return;$=S.append(A,w)}else{if(!j(Qv))return;var V=A.scopeAttrib(R);_.optional(function(){A.assert(w,V+".state","missing attribute "+R)}),$={},Object.keys(new B).forEach(function(ie){$[ie]=w.def(V,".",ie)})}G(A.link(T),I(T.info.type),$)})}function yo(A,w,P,H,j){for(var F=A.shared,I=F.gl,G,T=0;T<H.length;++T){var R=H[T],S=R.name,$=R.info.type,V=P.uniforms[S],ie=A.link(R),ce=ie+".location",ae;if(V){if(!j(V))continue;if(Si(V)){var Me=V.value;if(_.command(Me!==null&&typeof Me!="undefined",'missing uniform "'+S+'"',A.commandStr),$===Hc||$===Uc){_.command(typeof Me=="function"&&($===Hc&&(Me._reglType==="texture2d"||Me._reglType==="framebuffer")||$===Uc&&(Me._reglType==="textureCube"||Me._reglType==="framebufferCube")),"invalid texture for uniform "+S,A.commandStr);var it=A.link(Me._texture||Me.color[0]._texture);w(I,".uniform1i(",ce,",",it+".bind());"),w.exit(it,".unbind();")}else if($===Dc||$===$c||$===qc){_.optional(function(){_.command(an(Me),"invalid matrix for uniform "+S,A.commandStr),_.command($===Dc&&Me.length===4||$===$c&&Me.length===9||$===qc&&Me.length===16,"invalid length for matrix uniform "+S,A.commandStr)});var $t=A.global.def("new Float32Array(["+Array.prototype.slice.call(Me)+"])"),Ze=2;$===$c?Ze=3:$===qc&&(Ze=4),w(I,".uniformMatrix",Ze,"fv(",ce,",false,",$t,");")}else{switch($){case Wu:_.commandType(Me,"number","uniform "+S,A.commandStr),G="1f";break;case gf:_.command(an(Me)&&Me.length===2,"uniform "+S,A.commandStr),G="2f";break;case xf:_.command(an(Me)&&Me.length===3,"uniform "+S,A.commandStr),G="3f";break;case yf:_.command(an(Me)&&Me.length===4,"uniform "+S,A.commandStr),G="4f";break;case Xu:_.commandType(Me,"boolean","uniform "+S,A.commandStr),G="1i";break;case Vu:_.commandType(Me,"number","uniform "+S,A.commandStr),G="1i";break;case Mf:_.command(an(Me)&&Me.length===2,"uniform "+S,A.commandStr),G="2i";break;case bf:_.command(an(Me)&&Me.length===2,"uniform "+S,A.commandStr),G="2i";break;case kf:_.command(an(Me)&&Me.length===3,"uniform "+S,A.commandStr),G="3i";break;case wf:_.command(an(Me)&&Me.length===3,"uniform "+S,A.commandStr),G="3i";break;case Ef:_.command(an(Me)&&Me.length===4,"uniform "+S,A.commandStr),G="4i";break;case _f:_.command(an(Me)&&Me.length===4,"uniform "+S,A.commandStr),G="4i";break}w(I,".uniform",G,"(",ce,",",an(Me)?Array.prototype.slice.call(Me):Me,");")}continue}else ae=V.append(A,w)}else{if(!j(Qv))continue;ae=w.def(F.uniforms,"[",M.id(S),"]")}$===Hc?(_(!Array.isArray(ae),"must specify a scalar prop for textures"),w("if(",ae,"&&",ae,'._reglType==="framebuffer"){',ae,"=",ae,".color[0];","}")):$===Uc&&(_(!Array.isArray(ae),"must specify a scalar prop for cube maps"),w("if(",ae,"&&",ae,'._reglType==="framebufferCube"){',ae,"=",ae,".color[0];","}")),_.optional(function(){function wr(ka,rm){A.assert(w,ka,'bad data or missing for uniform "'+S+'".  '+rm)}function Qu(ka){_(!Array.isArray(ae),"must not specify an array type for uniform"),wr("typeof "+ae+'==="'+ka+'"',"invalid type, expected "+ka)}function ia(ka,rm){Array.isArray(ae)?_(ae.length===ka,"must have length "+ka):wr(F.isArrayLike+"("+ae+")&&"+ae+".length==="+ka,"invalid vector, should have length "+ka,A.commandStr)}function nm(ka){_(!Array.isArray(ae),"must not specify a value type"),wr("typeof "+ae+'==="function"&&'+ae+'._reglType==="texture'+(ka===qv?"2d":"Cube")+'"',"invalid texture type",A.commandStr)}switch($){case Vu:Qu("number");break;case bf:ia(2,"number");break;case wf:ia(3,"number");break;case _f:ia(4,"number");break;case Wu:Qu("number");break;case gf:ia(2,"number");break;case xf:ia(3,"number");break;case yf:ia(4,"number");break;case Xu:Qu("boolean");break;case Mf:ia(2,"boolean");break;case kf:ia(3,"boolean");break;case Ef:ia(4,"boolean");break;case Dc:ia(4,"number");break;case $c:ia(9,"number");break;case qc:ia(16,"number");break;case Hc:nm(qv);break;case Uc:nm(Yw);break}});var wt=1;switch($){case Hc:case Uc:var Pt=w.def(ae,"._texture");w(I,".uniform1i(",ce,",",Pt,".bind());"),w.exit(Pt,".unbind();");continue;case Vu:case Xu:G="1i";break;case bf:case Mf:G="2i",wt=2;break;case wf:case kf:G="3i",wt=3;break;case _f:case Ef:G="4i",wt=4;break;case Wu:G="1f";break;case gf:G="2f",wt=2;break;case xf:G="3f",wt=3;break;case yf:G="4f",wt=4;break;case Dc:G="Matrix2fv";break;case $c:G="Matrix3fv";break;case qc:G="Matrix4fv";break}if(w(I,".uniform",G,"(",ce,","),G.charAt(0)==="M"){var uo=Math.pow($-Dc+2,2),Jo=A.global.def("new Float32Array(",uo,")");Array.isArray(ae)?w("false,(",Bt(uo,function(wr){return Jo+"["+wr+"]="+ae[wr]}),",",Jo,")"):w("false,(Array.isArray(",ae,")||",ae," instanceof Float32Array)?",ae,":(",Bt(uo,function(wr){return Jo+"["+wr+"]="+ae+"["+wr+"]"}),",",Jo,")")}else wt>1?w(Bt(wt,function(wr){return Array.isArray(ae)?ae[wr]:ae+"["+wr+"]"})):(_(!Array.isArray(ae),"uniform value must not be an array"),w(ae));w(");")}}function yt(A,w,P,H){var j=A.shared,F=j.gl,I=j.draw,G=H.draw;function T(){var Pt=G.elements,uo,Jo=w;return Pt?((Pt.contextDep&&H.contextDynamic||Pt.propDep)&&(Jo=P),uo=Pt.append(A,Jo)):uo=Jo.def(I,".",ms),uo&&Jo("if("+uo+")"+F+".bindBuffer("+Ww+","+uo+".buffer.buffer);"),uo}function R(){var Pt=G.count,uo,Jo=w;return Pt?((Pt.contextDep&&H.contextDynamic||Pt.propDep)&&(Jo=P),uo=Pt.append(A,Jo),_.optional(function(){Pt.MISSING&&A.assert(w,"false","missing vertex count"),Pt.DYNAMIC&&A.assert(Jo,uo+">=0","missing vertex count")})):(uo=Jo.def(I,".",xs),_.optional(function(){A.assert(Jo,uo+">=0","missing vertex count")})),uo}var S=T();function $(Pt){var uo=G[Pt];return uo?uo.contextDep&&H.contextDynamic||uo.propDep?uo.append(A,P):uo.append(A,w):w.def(I,".",Pt)}var V=$(gs),ie=$(vf),ce=R();if(typeof ce=="number"){if(ce===0)return}else P("if(",ce,"){"),P.exit("}");var ae,Me;ke&&(ae=$(mf),Me=A.instancing);var it=S+".type",$t=G.elements&&Si(G.elements);function Ze(){function Pt(){P(Me,".drawElementsInstancedANGLE(",[V,ce,it,ie+"<<(("+it+"-"+bv+")>>1)",ae],");")}function uo(){P(Me,".drawArraysInstancedANGLE(",[V,ie,ce,ae],");")}S?$t?Pt():(P("if(",S,"){"),Pt(),P("}else{"),uo(),P("}")):uo()}function wt(){function Pt(){P(F+".drawElements("+[V,ce,it,ie+"<<(("+it+"-"+bv+")>>1)"]+");")}function uo(){P(F+".drawArrays("+[V,ie,ce]+");")}S?$t?Pt():(P("if(",S,"){"),Pt(),P("}else{"),uo(),P("}")):uo()}ke&&(typeof ae!="number"||ae>=0)?typeof ae=="string"?(P("if(",ae,">0){"),Ze(),P("}else if(",ae,"<0){"),wt(),P("}")):Ze():wt()}function Qt(A,w,P,H,j){var F=At(),I=F.proc("body",j);return _.optional(function(){F.commandStr=w.commandStr,F.command=F.link(w.commandStr)}),ke&&(F.instancing=I.def(F.shared.extensions,".angle_instanced_arrays")),A(F,I,P,H),F.compile().body}function io(A,w,P,H){sn(A,w),P.useVAO?P.drawVAO?w(A.shared.vao,".setVAO(",P.drawVAO.append(A,w),");"):w(A.shared.vao,".setVAO(",A.shared.vao,".targetVAO);"):(w(A.shared.vao,".setVAO(null);"),Qn(A,w,P,H.attributes,function(){return!0})),yo(A,w,P,H.uniforms,function(){return!0}),yt(A,w,w,P)}function cn(A,w){var P=A.proc("draw",1);sn(A,P),_n(A,P,w.context),Mn(A,P,w.framebuffer),qn(A,P,w),Kn(A,P,w.state),Dt(A,P,w,!1,!0);var H=w.shader.progVar.append(A,P);if(P(A.shared.gl,".useProgram(",H,".program);"),w.shader.program)io(A,P,w,w.shader.program);else{P(A.shared.vao,".setVAO(null);");var j=A.global.def("{}"),F=P.def(H,".id"),I=P.def(j,"[",F,"]");P(A.cond(I).then(I,".call(this,a0);").else(I,"=",j,"[",F,"]=",A.link(function(G){return Qt(io,A,w,G,1)}),"(",H,");",I,".call(this,a0);"))}Object.keys(w.state).length>0&&P(A.shared.current,".dirty=true;")}function qa(A,w,P,H){A.batchId="a1",sn(A,w);function j(){return!0}Qn(A,w,P,H.attributes,j),yo(A,w,P,H.uniforms,j),yt(A,w,w,P)}function bs(A,w,P,H){sn(A,w);var j=P.contextDep,F=w.def(),I="a0",G="a1",T=w.def();A.shared.props=T,A.batchId=F;var R=A.scope(),S=A.scope();w(R.entry,"for(",F,"=0;",F,"<",G,";++",F,"){",T,"=",I,"[",F,"];",S,"}",R.exit);function $(it){return it.contextDep&&j||it.propDep}function V(it){return!$(it)}if(P.needsContext&&_n(A,S,P.context),P.needsFramebuffer&&Mn(A,S,P.framebuffer),Kn(A,S,P.state,$),P.profile&&$(P.profile)&&Dt(A,S,P,!1,!0),H)P.useVAO?P.drawVAO?$(P.drawVAO)?S(A.shared.vao,".setVAO(",P.drawVAO.append(A,S),");"):R(A.shared.vao,".setVAO(",P.drawVAO.append(A,R),");"):R(A.shared.vao,".setVAO(",A.shared.vao,".targetVAO);"):(R(A.shared.vao,".setVAO(null);"),Qn(A,R,P,H.attributes,V),Qn(A,S,P,H.attributes,$)),yo(A,R,P,H.uniforms,V),yo(A,S,P,H.uniforms,$),yt(A,R,S,P);else{var ie=A.global.def("{}"),ce=P.shader.progVar.append(A,S),ae=S.def(ce,".id"),Me=S.def(ie,"[",ae,"]");S(A.shared.gl,".useProgram(",ce,".program);","if(!",Me,"){",Me,"=",ie,"[",ae,"]=",A.link(function(it){return Qt(qa,A,P,it,2)}),"(",ce,");}",Me,".call(this,a0[",F,"],",F,");")}}function z(A,w){var P=A.proc("batch",2);A.batchId="0",sn(A,P);var H=!1,j=!0;Object.keys(w.context).forEach(function(ie){H=H||w.context[ie].propDep}),H||(_n(A,P,w.context),j=!1);var F=w.framebuffer,I=!1;F?(F.propDep?H=I=!0:F.contextDep&&H&&(I=!0),I||Mn(A,P,F)):Mn(A,P,null),w.state.viewport&&w.state.viewport.propDep&&(H=!0);function G(ie){return ie.contextDep&&H||ie.propDep}qn(A,P,w),Kn(A,P,w.state,function(ie){return!G(ie)}),(!w.profile||!G(w.profile))&&Dt(A,P,w,!1,"a1"),w.contextDep=H,w.needsContext=j,w.needsFramebuffer=I;var T=w.shader.progVar;if(T.contextDep&&H||T.propDep)bs(A,P,w,null);else{var R=T.append(A,P);if(P(A.shared.gl,".useProgram(",R,".program);"),w.shader.program)bs(A,P,w,w.shader.program);else{P(A.shared.vao,".setVAO(null);");var S=A.global.def("{}"),$=P.def(R,".id"),V=P.def(S,"[",$,"]");P(A.cond(V).then(V,".call(this,a0,a1);").else(V,"=",S,"[",$,"]=",A.link(function(ie){return Qt(bs,A,w,ie,2)}),"(",R,");",V,".call(this,a0,a1);"))}}Object.keys(w.state).length>0&&P(A.shared.current,".dirty=true;")}function ee(A,w){var P=A.proc("scope",3);A.batchId="a2";var H=A.shared,j=H.current;_n(A,P,w.context),w.framebuffer&&w.framebuffer.append(A,P),Kv(Object.keys(w.state)).forEach(function(I){var G=w.state[I],T=G.append(A,P);an(T)?T.forEach(function(R,S){P.set(A.next[I],"["+S+"]",R)}):P.set(H.next,"."+I,T)}),Dt(A,P,w,!0,!0),[ms,vf,xs,mf,gs].forEach(function(I){var G=w.draw[I];G&&P.set(H.draw,"."+I,""+G.append(A,P))}),Object.keys(w.uniforms).forEach(function(I){var G=w.uniforms[I].append(A,P);Array.isArray(G)&&(G="["+G.join()+"]"),P.set(H.uniforms,"["+M.id(I)+"]",G)}),Object.keys(w.attributes).forEach(function(I){var G=w.attributes[I].append(A,P),T=A.scopeAttrib(I);Object.keys(new B).forEach(function(R){P.set(T,"."+R,G[R])})}),w.scopeVAO&&P.set(H.vao,".targetVAO",w.scopeVAO.append(A,P));function F(I){var G=w.shader[I];G&&P.set(H.shader,"."+I,G.append(A,P))}F(Ic),F(Fc),Object.keys(w.state).length>0&&(P(j,".dirty=true;"),P.exit(j,".dirty=true;")),P("a1(",A.shared.context,",a0,",A.batchId,");")}function X(A){if(!(typeof A!="object"||an(A))){for(var w=Object.keys(A),P=0;P<w.length;++P)if(Ne.isDynamic(A[w[P]]))return!0;return!1}}function Ye(A,w,P){var H=w.static[P];if(!H||!X(H))return;var j=A.global,F=Object.keys(H),I=!1,G=!1,T=!1,R=A.global.def("{}");F.forEach(function($){var V=H[$];if(Ne.isDynamic(V)){typeof V=="function"&&(V=H[$]=Ne.unbox(V));var ie=Or(V,null);I=I||ie.thisDep,T=T||ie.propDep,G=G||ie.contextDep}else{switch(j(R,".",$,"="),typeof V){case"number":j(V);break;case"string":j('"',V,'"');break;case"object":Array.isArray(V)&&j("[",V.join(),"]");break;default:j(A.link(V));break}j(";")}});function S($,V){F.forEach(function(ie){var ce=H[ie];if(Ne.isDynamic(ce)){var ae=$.invoke(V,ce);V(R,".",ie,"=",ae,";")}})}w.dynamic[P]=new Ne.DynamicVariable(df,{thisDep:I,contextDep:G,propDep:T,ref:R,append:S}),delete w.static[P]}function Xt(A,w,P,H,j){var F=At();F.stats=F.link(j),Object.keys(w.static).forEach(function(G){Ye(F,w,G)}),jw.forEach(function(G){Ye(F,A,G)});var I=pn(A,w,P,H,F);return cn(F,I),ee(F,I),z(F,I),t(F.compile(),{destroy:function(){I.shader.program.destroy()}})}return{next:je,current:ue,procs:function(){var A=At(),w=A.proc("poll"),P=A.proc("refresh"),H=A.block();w(H),P(H);var j=A.shared,F=j.gl,I=j.next,G=j.current;H(G,".dirty=false;"),Mn(A,w),Mn(A,P,null,!0);var T;ke&&(T=A.link(ke)),C.oes_vertex_array_object&&P(A.link(C.oes_vertex_array_object),".bindVertexArrayOES(null);");for(var R=0;R<J.maxAttributes;++R){var S=P.def(j.attributes,"[",R,"]"),$=A.cond(S,".buffer");$.then(F,".enableVertexAttribArray(",R,");",F,".bindBuffer(",y0,",",S,".buffer.buffer);",F,".vertexAttribPointer(",R,",",S,".size,",S,".type,",S,".normalized,",S,".stride,",S,".offset);").else(F,".disableVertexAttribArray(",R,");",F,".vertexAttrib4f(",R,",",S,".x,",S,".y,",S,".z,",S,".w);",S,".buffer=null;"),P($),ke&&P(T,".vertexAttribDivisorANGLE(",R,",",S,".divisor);")}return P(A.shared.vao,".currentVAO=null;",A.shared.vao,".setVAO(",A.shared.vao,".targetVAO);"),Object.keys(Re).forEach(function(V){var ie=Re[V],ce=H.def(I,".",V),ae=A.block();ae("if(",ce,"){",F,".enable(",ie,")}else{",F,".disable(",ie,")}",G,".",V,"=",ce,";"),P(ae),w("if(",ce,"!==",G,".",V,"){",ae,"}")}),Object.keys(pe).forEach(function(V){var ie=pe[V],ce=ue[V],ae,Me,it=A.block();if(it(F,".",ie,"("),an(ce)){var $t=ce.length;ae=A.global.def(I,".",V),Me=A.global.def(G,".",V),it(Bt($t,function(Ze){return ae+"["+Ze+"]"}),");",Bt($t,function(Ze){return Me+"["+Ze+"]="+ae+"["+Ze+"];"}).join("")),w("if(",Bt($t,function(Ze){return ae+"["+Ze+"]!=="+Me+"["+Ze+"]"}).join("||"),"){",it,"}")}else ae=H.def(I,".",V),Me=H.def(G,".",V),it(ae,");",G,".",V,"=",ae,";"),w("if(",ae,"!==",Me,"){",it,"}");P(it)}),A.compile()}(),compile:Xt}}function h4(){return{vaoCount:0,bufferCount:0,elementsCount:0,framebufferCount:0,shaderCount:0,textureCount:0,cubeCount:0,renderbufferCount:0,maxTextureUnits:0}}var u4=34918,d4=34919,Zv=35007,p4=function(x,M){if(!M.ext_disjoint_timer_query)return null;var C=[];function J(){return C.pop()||M.ext_disjoint_timer_query.createQueryEXT()}function se(ke){C.push(ke)}var Q=[];function oe(ke){var Ue=J();M.ext_disjoint_timer_query.beginQueryEXT(Zv,Ue),Q.push(Ue),xe(Q.length-1,Q.length,ke)}function ge(){M.ext_disjoint_timer_query.endQueryEXT(Zv)}function we(){this.startQueryIndex=-1,this.endQueryIndex=-1,this.sum=0,this.stats=null}var Ee=[];function _e(){return Ee.pop()||new we}function Le(ke){Ee.push(ke)}var Fe=[];function xe(ke,Ue,ue){var je=_e();je.startQueryIndex=ke,je.endQueryIndex=Ue,je.sum=0,je.stats=ue,Fe.push(je)}var Ce=[],B=[];function ne(){var ke,Ue,ue=Q.length;if(ue!==0){B.length=Math.max(B.length,ue+1),Ce.length=Math.max(Ce.length,ue+1),Ce[0]=0,B[0]=0;var je=0;for(ke=0,Ue=0;Ue<Q.length;++Ue){var ve=Q[Ue];M.ext_disjoint_timer_query.getQueryObjectEXT(ve,d4)?(je+=M.ext_disjoint_timer_query.getQueryObjectEXT(ve,u4),se(ve)):Q[ke++]=ve,Ce[Ue+1]=je,B[Ue+1]=ke}for(Q.length=ke,ke=0,Ue=0;Ue<Fe.length;++Ue){var Re=Fe[Ue],pe=Re.startQueryIndex,Pe=Re.endQueryIndex;Re.sum+=Ce[Pe]-Ce[pe];var ut=B[pe],Ct=B[Pe];Ct===ut?(Re.stats.gpuTime+=Re.sum/1e6,Le(Re)):(Re.startQueryIndex=ut,Re.endQueryIndex=Ct,Fe[ke++]=Re)}Fe.length=ke}}return{beginQuery:oe,endQuery:ge,pushScopeStats:xe,update:ne,getNumPendingQueries:function(){return Q.length},clear:function(){C.push.apply(C,Q);for(var ke=0;ke<C.length;ke++)M.ext_disjoint_timer_query.deleteQueryEXT(C[ke]);Q.length=0,C.length=0},restore:function(){Q.length=0,C.length=0}}},v4=16384,m4=256,g4=1024,x4=34962,Jv="webglcontextlost",em="webglcontextrestored",tm=1,y4=2,b4=3;function om(x,M){for(var C=0;C<x.length;++C)if(x[C]===M)return C;return-1}function w4(x){var M=_t(x);if(!M)return null;var C=M.gl,J=C.getContextAttributes(),se=C.isContextLost(),Q=kt(C,M);if(!Q)return null;var oe=at(),ge=h4(),we=Q.extensions,Ee=p4(C,we),_e=ze(),Le=C.drawingBufferWidth,Fe=C.drawingBufferHeight,xe={tick:0,time:0,viewportWidth:Le,viewportHeight:Fe,framebufferWidth:Le,framebufferHeight:Fe,drawingBufferWidth:Le,drawingBufferHeight:Fe,pixelRatio:M.pixelRatio},Ce={},B={elements:null,primitive:4,count:-1,offset:0,instances:-1},ne=i5(C,we),ke=_5(C,ge,M,ue),Ue=Pw(C,we,ne,ge,ke);function ue(yt){return Ue.destroyBuffer(yt)}var je=P5(C,we,ke,ge),ve=Gw(C,oe,ge,M),Re=hw(C,we,ne,function(){ut.procs.poll()},xe,ge,M),pe=uw(C,we,ne,ge,M),Pe=Nw(C,we,ne,Re,pe,ge),ut=f4(C,oe,we,ne,ke,je,Re,Pe,Ce,Ue,ve,B,xe,Ee,M),Ct=qw(C,Pe,ut.procs.poll,xe,J,we,ne),Ge=ut.next,Se=C.canvas,fe=[],At=[],Gt=[],Qe=[M.onDestroy],Vt=null;function Rt(){if(fe.length===0){Ee&&Ee.update(),Vt=null;return}Vt=Ie.next(Rt),Kn();for(var yt=fe.length-1;yt>=0;--yt){var Qt=fe[yt];Qt&&Qt(xe,null,0)}C.flush(),Ee&&Ee.update()}function Ut(){!Vt&&fe.length>0&&(Vt=Ie.next(Rt))}function ho(){Vt&&(Ie.cancel(Rt),Vt=null)}function dn(yt){yt.preventDefault(),se=!0,ho(),At.forEach(function(Qt){Qt()})}function zn(yt){C.getError(),se=!1,Q.restore(),ve.restore(),ke.restore(),Re.restore(),pe.restore(),Pe.restore(),Ue.restore(),Ee&&Ee.restore(),ut.procs.refresh(),Ut(),Gt.forEach(function(Qt){Qt()})}Se&&(Se.addEventListener(Jv,dn,!1),Se.addEventListener(em,zn,!1));function Jt(){fe.length=0,ho(),Se&&(Se.removeEventListener(Jv,dn),Se.removeEventListener(em,zn)),ve.clear(),Pe.clear(),pe.clear(),Re.clear(),je.clear(),ke.clear(),Ue.clear(),Ee&&Ee.clear(),Qe.forEach(function(yt){yt()})}function wn(yt){_(!!yt,"invalid args to regl({...})"),_.type(yt,"object","invalid args to regl({...})");function Qt(j){var F=t({},j);delete F.uniforms,delete F.attributes,delete F.context,delete F.vao,"stencil"in F&&F.stencil.op&&(F.stencil.opBack=F.stencil.opFront=F.stencil.op,delete F.stencil.op);function I(G){if(G in F){var T=F[G];delete F[G],Object.keys(T).forEach(function(R){F[G+"."+R]=T[R]})}}return I("blend"),I("depth"),I("cull"),I("stencil"),I("polygonOffset"),I("scissor"),I("sample"),"vao"in j&&(F.vao=j.vao),F}function io(j,F){var I={},G={};return Object.keys(j).forEach(function(T){var R=j[T];if(Ne.isDynamic(R)){G[T]=Ne.unbox(R,T);return}else if(F&&Array.isArray(R)){for(var S=0;S<R.length;++S)if(Ne.isDynamic(R[S])){G[T]=Ne.unbox(R,T);return}}I[T]=R}),{dynamic:G,static:I}}var cn=io(yt.context||{},!0),qa=io(yt.uniforms||{},!0),bs=io(yt.attributes||{},!1),z=io(Qt(yt),!1),ee={gpuTime:0,cpuTime:0,count:0},X=ut.compile(z,bs,qa,cn,ee),Ye=X.draw,Xt=X.batch,A=X.scope,w=[];function P(j){for(;w.length<j;)w.push(null);return w}function H(j,F){var I;if(se&&_.raise("context lost"),typeof j=="function")return A.call(this,null,j,0);if(typeof F=="function")if(typeof j=="number")for(I=0;I<j;++I)A.call(this,null,F,I);else if(Array.isArray(j))for(I=0;I<j.length;++I)A.call(this,j[I],F,I);else return A.call(this,j,F,0);else if(typeof j=="number"){if(j>0)return Xt.call(this,P(j|0),j|0)}else if(Array.isArray(j)){if(j.length)return Xt.call(this,j,j.length)}else return Ye.call(this,j)}return t(H,{stats:ee,destroy:function(){X.destroy()}})}var Fo=Pe.setFBO=wn({framebuffer:Ne.define.call(null,tm,"framebuffer")});function pn(yt,Qt){var io=0;ut.procs.poll();var cn=Qt.color;cn&&(C.clearColor(+cn[0]||0,+cn[1]||0,+cn[2]||0,+cn[3]||0),io|=v4),"depth"in Qt&&(C.clearDepth(+Qt.depth),io|=m4),"stencil"in Qt&&(C.clearStencil(Qt.stencil|0),io|=g4),_(!!io,"called regl.clear with no buffer specified"),C.clear(io)}function _n(yt){if(_(typeof yt=="object"&&yt,"regl.clear() takes an object as input"),"framebuffer"in yt)if(yt.framebuffer&&yt.framebuffer_reglType==="framebufferCube")for(var Qt=0;Qt<6;++Qt)Fo(t({framebuffer:yt.framebuffer.faces[Qt]},yt),pn);else Fo(yt,pn);else pn(null,yt)}function Mn(yt){_.type(yt,"function","regl.frame() callback must be a function"),fe.push(yt);function Qt(){var io=om(fe,yt);_(io>=0,"cannot cancel a frame twice");function cn(){var qa=om(fe,cn);fe[qa]=fe[fe.length-1],fe.length-=1,fe.length<=0&&ho()}fe[io]=cn}return Ut(),{cancel:Qt}}function qn(){var yt=Ge.viewport,Qt=Ge.scissor_box;yt[0]=yt[1]=Qt[0]=Qt[1]=0,xe.viewportWidth=xe.framebufferWidth=xe.drawingBufferWidth=yt[2]=Qt[2]=C.drawingBufferWidth,xe.viewportHeight=xe.framebufferHeight=xe.drawingBufferHeight=yt[3]=Qt[3]=C.drawingBufferHeight}function Kn(){xe.tick+=1,xe.time=Dt(),qn(),ut.procs.poll()}function sn(){Re.refresh(),qn(),ut.procs.refresh(),Ee&&Ee.update()}function Dt(){return(ze()-_e)/1e3}sn();function Qn(yt,Qt){_.type(Qt,"function","listener callback must be a function");var io;switch(yt){case"frame":return Mn(Qt);case"lost":io=At;break;case"restore":io=Gt;break;case"destroy":io=Qe;break;default:_.raise("invalid event, must be one of frame,lost,restore,destroy")}return io.push(Qt),{cancel:function(){for(var cn=0;cn<io.length;++cn)if(io[cn]===Qt){io[cn]=io[io.length-1],io.pop();return}}}}var yo=t(wn,{clear:_n,prop:Ne.define.bind(null,tm),context:Ne.define.bind(null,y4),this:Ne.define.bind(null,b4),draw:wn({}),buffer:function(yt){return ke.create(yt,x4,!1,!1)},elements:function(yt){return je.create(yt,!1)},texture:Re.create2D,cube:Re.createCube,renderbuffer:pe.create,framebuffer:Pe.create,framebufferCube:Pe.createCube,vao:Ue.createVAO,attributes:J,frame:Mn,on:Qn,limits:ne,hasExtension:function(yt){return ne.extensions.indexOf(yt.toLowerCase())>=0},read:Ct,destroy:Jt,_gl:C,_refresh:sn,poll:function(){Kn(),Ee&&Ee.update()},now:Dt,stats:ge});return M.onDone(null,yo),yo}return w4})});var ws=de((eA,Em)=>{"use strict";var ri=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],ai=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],Ua=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],Pf=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],Qc=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],s1=e=>Math.hypot(e[0],e[1],e[2]),ca=e=>{let t=s1(e)||1;return[e[0]/t,e[1]/t,e[2]/t]};function A0(e,t){let o=e.length-1,n=Math.min(Math.max(t,0),1)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,i=e[Math.max(0,r-1)],s=e[r],c=e[r+1],f=e[Math.min(o,r+2)],l=[0,0,0];for(let u=0;u<3;u++)l[u]=.5*(2*s[u]+(-i[u]+c[u])*a+(2*i[u]-5*s[u]+4*c[u]-f[u])*a*a+(-i[u]+3*s[u]-3*c[u]+f[u])*a*a*a);return l}function F4(e,t){return A0(e.map(o=>[o,0,0]),t)[0]}function G4(e,t,o,n){let r={curMat:[0,0,0]},i={r:[1,0,0,0,1,0,0,0,1],t:[0,0,0],s:1},s=[];r.save=()=>{s.push({r:i.r.slice(),t:i.t.slice(),s:i.s})},r.restore=()=>{i=s.pop()};let c=(h,d)=>{let v=new Array(9);for(let p=0;p<3;p++)for(let m=0;m<3;m++)v[p*3+m]=h[p*3]*d[m]+h[p*3+1]*d[3+m]+h[p*3+2]*d[6+m];return v},f=h=>[i.r[0]*h[0]+i.r[1]*h[1]+i.r[2]*h[2],i.r[3]*h[0]+i.r[4]*h[1]+i.r[5]*h[2],i.r[6]*h[0]+i.r[7]*h[1]+i.r[8]*h[2]];r.translate=(h,d,v)=>{let p=f([h,d,v]);i.t=[i.t[0]+p[0]*i.s,i.t[1]+p[1]*i.s,i.t[2]+p[2]*i.s]},r.scale=h=>{i.s*=h},r.rotateY=h=>{let d=Math.cos(h),v=Math.sin(h);i.r=c(i.r,[d,0,v,0,1,0,-v,0,d])},r.vert=(h,d,v)=>{let p=v||r.curMat,m=f(h),g=ca(f(d));return e.push(m[0]*i.s+i.t[0],m[1]*i.s+i.t[1],m[2]*i.s+i.t[2]),t.push(g[0],g[1],g[2]),n.push(p[0],p[1],p[2]),e.length/3-1};let l=h=>[e[h*3],e[h*3+1],e[h*3+2]],u=h=>[t[h*3],t[h*3+1],t[h*3+2]];return r.tri=(h,d,v)=>{let p=l(h),m=Qc(ri(l(d),p),ri(l(v),p)),g=ai(ai(u(h),u(d)),u(v));Pf(m,g)<0?o.push(h,v,d):o.push(h,d,v)},r.box=(h,d,v,p,m,g,y)=>{let b=[[[h,d,v],[p,d,v],[h,m,v],[p,m,v],[0,0,-1]],[[p,d,g],[h,d,g],[p,m,g],[h,m,g],[0,0,1]],[[h,d,g],[h,d,v],[h,m,g],[h,m,v],[-1,0,0]],[[p,d,v],[p,d,g],[p,m,v],[p,m,g],[1,0,0]],[[h,m,v],[p,m,v],[h,m,g],[p,m,g],[0,1,0]],[[h,d,g],[p,d,g],[h,d,v],[p,d,v],[0,-1,0]]];for(let k of b){let E=r.vert(k[0],k[4],y),L=r.vert(k[1],k[4],y),N=r.vert(k[2],k[4],y),W=r.vert(k[3],k[4],y);r.tri(E,L,N),r.tri(L,W,N)}},r.surface=(h,d,v,p)=>{p=p||{};let m=.001,g=E=>Math.min(1,Math.max(0,E)),y=[],b=[];for(let E=0;E<=d;E++){let L=[],N=[];for(let W=0;W<=v;W++){let O=E/d,te=W/v,D=h(O,te),re=Math.min(1-m,Math.max(m,O)),q=p.wrapV?te:Math.min(1-m,Math.max(m,te)),Y=ri(h(g(re+m),q),h(g(re-m),q)),be=p.wrapV?q+m:g(q+m),qe=p.wrapV?q-m:g(q-m),Ae=ri(h(re,be),h(re,qe)),he=Qc(Y,Ae);s1(he)<1e-14&&(he=p.inside?ri(D,p.inside(O,te)):[0,1,0]),he=ca(he),p.inside&&Pf(he,ri(D,p.inside(O,te)))<0&&(he=Ua(he,-1));let Te=p.mat?p.mat(O,te,D):null;L.push(r.vert(D,he,Te)),p.double&&N.push(r.vert(D,Ua(he,-1),Te))}y.push(L),b.push(N)}let k=E=>{for(let L=0;L<d;L++)for(let N=0;N<v;N++){let W=E[L][N],O=E[L+1][N],te=E[L][N+1],D=E[L+1][N+1];r.tri(W,O,te),r.tri(O,D,te)}};k(y),p.double&&k(b)},r.ellipsoid=(h,d,v,p,m)=>{m=m||{};let g=m.warp||null;r.surface((y,b)=>{let k=y*Math.PI,E=b*Math.PI*2,L=g?g(y,b):1;return[h[0]+d[0]*L*Math.sin(k)*Math.cos(E),h[1]+d[1]*L*Math.cos(k),h[2]+d[2]*L*Math.sin(k)*Math.sin(E)]},v||10,p||14,{wrapV:!0,inside:()=>h,mat:m.mat})},r.tube=(h,d,v,p,m)=>{m=m||{};let g=40,y=[],b=null;for(let L=0;L<=g;L++){let N=L/g,W=A0(h,Math.max(0,N-.01)),O=A0(h,Math.min(1,N+.01)),te=ca(ri(O,W)),D;if(b)D=ca(ri(b,Ua(te,Pf(b,te))));else{let re=Math.abs(te[1])<.9?[0,1,0]:[1,0,0];D=ca(Qc(te,re))}y.push({N:D,B:ca(Qc(te,D))}),b=D}let k=L=>{let N=Math.min(Math.max(L,0),1)*g,W=Math.min(g-1,Math.floor(N)),O=N-W,te=y[W],D=y[W+1];return{N:ca(ai(Ua(te.N,1-O),Ua(D.N,O))),B:ca(ai(Ua(te.B,1-O),Ua(D.B,O)))}},E=m.squash||[1,1];r.surface((L,N)=>{let W=A0(h,L),O=k(L),te=d(L),D=N*Math.PI*2;return ai(W,ai(Ua(O.N,Math.cos(D)*te*E[0]),Ua(O.B,Math.sin(D)*te*E[1])))},v||12,p||8,{wrapV:!0,inside:L=>A0(h,L),mat:m.mat})},r.lathe=(h,d,v,p,m)=>{m=m||{};let g=[];for(let y=0;y<h.length-1;y++){let b=h[y+1][0]-h[y][0],k=h[y+1][1]-h[y][1];g.push(ca([k,-b,0]))}for(let y=0;y<h.length-1;y++){let b=h[y],k=h[y+1],E=y===0||b[2]===1,L=y===h.length-2||k[2]===1,N=E?g[y]:ca(ai(g[y-1],g[y])),W=L?g[y]:ca(ai(g[y],g[y+1])),O=[],te=[];for(let D=0;D<=p;D++){let re=D/p*Math.PI*2,q=Math.cos(re),Y=Math.sin(re),be=m.mat?m.mat(re,b[1]):null,qe=m.mat?m.mat(re,k[1]):null;O.push(r.vert([d+b[0]*q,b[1],v+b[0]*Y],[N[0]*q,N[1],N[0]*Y],be)),te.push(r.vert([d+k[0]*q,k[1],v+k[0]*Y],[W[0]*q,W[1],W[0]*Y],qe))}for(let D=0;D<p;D++)r.tri(O[D],O[D+1],te[D]),r.tri(O[D+1],te[D+1],te[D])}},r}Em.exports={createBuilder:G4,catmull:A0,curve1:F4,sub:ri,add:ai,mul:Ua,dot:Pf,cross:Qc,norm:ca,len:s1}});var Lm=de((tA,Tm)=>{"use strict";var{norm:Of,add:If,mul:Ti,sub:D4,cross:Sm}=ws(),Am=Math.PI*2,$4=(e,t,o)=>{let n=Math.min(1,Math.max(0,(o-e)/(t-e)));return n*n*(3-2*n)};function q4(e){let t=e>>>0;return()=>{t|=0,t=t+1831565813|0;let o=Math.imul(t^t>>>15,1|t);return o=o+Math.imul(o^o>>>7,61|o)^o,((o^o>>>14)>>>0)/4294967296}}function H4(e,t,o,n,r,a){let i=(h,d)=>[7,h*a,d];e.curMat=[0,0,0],e.box(t-a*1.36,n,o-a*1.36,t+a*1.36,n+.22,o+a*1.36),e.lathe([[a*1.24,n+.22,1],[a*1.3,n+.27],[a*1.31,n+.32],[a*1.26,n+.37,1],[a*1.1,n+.4],[a*1.14,n+.44,1],[a*1.18,n+.47],[a*1.1,n+.52,1],[a*.96,n+.55]],t,o,56,{mat:i});let s=n+.55,c=r-s,f=20,l=6,u=a*.075;return e.surface((h,d)=>{let v=s+h*c,p=a*(.96-.12*h),m=d*Am,g=d*f%1,y=p-u*4*g*(1-g);return[t+y*Math.cos(m),v,o+y*Math.sin(m)]},10,f*l,{wrapV:!0,inside:h=>[t,s+h*c,o],mat:(h,d)=>[7,d*Am*a,s+h*c]}),e.lathe([[a*.8,r-.02,1],[a*.9,r+.02],[a*.9,r+.07,1],[a*.82,r+.09,1],[a*.86,r+.13],[a*1.06,r+.2],[a*1.22,r+.28],[a*1.28,r+.33,1]],t,o,56,{mat:i}),e.curMat=[0,0,0],e.box(t-a*1.42,r+.33,o-a*1.42,t+a*1.42,r+.53,o+a*1.42),r+.53}function U4(e,t,o){e.curMat=[1,0,0],e.lathe([[t*1.1,0,1],[t*1.1,o*.14,1],[t*1.04,o*.14,1],[t*1.04,o*.2],[t*.97,o*.26,1],[t*.95,o*.26,1],[t*.95,o*.8,1],[t*.98,o*.8,1],[t*1.03,o*.86],[t*1.05,o*.92,1],[t*1.05,o,1],[t*.5,o,1],[0,o]],0,0,72)}function B4(e,t,o,n,r){e.save(),e.translate(t,0,o),U4(e,n,r),e.restore()}function j4(e,t,o,n,r,a){let i=q4(n),s=a?Of([a[0],0,a[1]]):null;e.save(),e.translate(t,0,o),e.scale(r||1),e.curMat=[3,0,0],e.lathe([[.17,0,1],[.2,.02],[.28,.13],[.36,.3],[.395,.47],[.38,.62],[.32,.74],[.29,.8],[.292,.82,1],[.325,.84],[.335,.88,1],[.3,.905,1],[.275,.895,1],[.272,.85]],0,0,48),e.curMat=[5,0,0],e.lathe([[.272,.85,1],[.1,.868],[0,.872]],0,0,24);let c=11,f=.86;for(let l=0;l<c;l++){let u=l>=c-2,h=l*2.399963+i()*.5,d=[Math.cos(h),0,Math.sin(h)],v=[-Math.sin(h),0,Math.cos(h)],p=l*.618%1,m=u?.06+i()*.06:.12+.62*p,g=1;if(s){let he=d[0]*s[0]+d[2]*s[2];g=.25+.75*$4(-.7,.5,he),m*=g}let y=u?1.1+i()*.25:.85+.55*(1-p*.55)+i()*.15,b=u?1+i()*.2:.95+i()*.28,k=u?.055:.215+i()*.05,E=.04+i()*.05,L=[d[0]*E,f,d[2]*E],N=[L[0]+d[0]*Math.sin(m)*y*.92,L[1]+Math.cos(m)*y,L[2]+d[2]*Math.sin(m)*y*.92],W=[L[0]+d[0]*Math.sin(m*.5)*y*.45,L[1]+y*.5,L[2]+d[2]*Math.sin(m*.5)*y*.45];e.curMat=[4,0,0],e.tube([L,W,N],he=>.02-.008*he,8,7);let O=24,te=m*.9+.05,D=m+(u?.12:(.95+.45*p)*(.35+.65*g)),re=[N],q=[],Y=N;for(let he=0;he<O;he++){let Te=he/O,dt=te+(D-te)*Te*Te,qt=[d[0]*Math.sin(dt),Math.cos(dt),d[2]*Math.sin(dt)];q.push(qt),Y=If(Y,Ti(qt,b/O)),re.push(Y)}q.push(q[q.length-1]);let be=he=>{let Te=he*O,dt=Math.min(O-1,Math.floor(Te)),qt=Te-dt;return If(Ti(re[dt],1-qt),Ti(re[dt+1],qt))},qe=he=>{let Te=he*O,dt=Math.min(O,Math.floor(Te)),qt=Math.min(O,dt+1),He=Te-dt;return Of(If(Ti(q[dt],1-He),Ti(q[qt],He)))},Ae=(i()-.5)*.5;e.curMat=[2,0,0],e.surface((he,Te)=>{let dt=Te*2-1,qt=be(he),He=qe(he),pt=Ae*he,St=If(Ti(v,Math.cos(pt)),Ti(Sm(He,v),Math.sin(pt)));St=Of(D4(St,Ti(He,St[0]*He[0]+St[1]*He[1]+St[2]*He[2])));let to=Of(Sm(St,He)),ao=k*Math.pow(Math.sin(Math.PI*Math.pow(he,.72)),.85),Ho=.3*ao*Math.abs(dt)+.012*Math.sin(he*40+dt*2)*Math.abs(dt)*(u?0:1),Xe=-.1*ao*dt*dt*dt*dt,ht=Ho+Xe;return[qt[0]+St[0]*dt*ao+to[0]*ht,qt[1]+St[1]*dt*ao+to[1]*ht,qt[2]+St[2]*dt*ao+to[2]*ht]},14,8,{double:!0,mat:(he,Te)=>[2,Te*2-1,he]})}e.restore()}Tm.exports={addFlutedColumn:H4,addStatue:B4,addPlant:j4}});var Li=de((oA,Rm)=>{"use strict";var ye={xc:7,r:2.5,spring:4.7};ye.x0=ye.xc-ye.r;ye.x1=ye.xc+ye.r;ye.top=ye.spring+ye.r;var kr=.06,Bo=.1,zm=.08,Ff=ye.r,Gf=[ye.x0+Ff/3,ye.x0+2*Ff/3,ye.xc+Ff/3,ye.xc+2*Ff/3],T0=.28,c1=[.95,1.65,2.35,3.05,3.75],Cm=[1.05,1.8],Zc=[8,0,0],Wr=[0,0,0];function la(e,t,o,n,r,a,i,s){e.box(Math.min(t,r),Math.min(o,a),Math.min(n,i),Math.max(t,r),Math.max(o,a),Math.max(n,i),s)}function L0(e,t,o,n,r,a,i){let s=e.vert(t,a,i),c=e.vert(o,a,i),f=e.vert(n,a,i),l=e.vert(r,a,i);e.tri(s,c,f),e.tri(s,f,l)}function Df(e,t,o,n,r,a,i=48,s=0,c=Math.PI){let f=(l,u,h)=>[ye.xc+u*Math.cos(l),ye.spring+u*Math.sin(l),h];for(let l=0;l<i;l++){let u=s+(c-s)*l/i,h=s+(c-s)*(l+1)/i,d=(u+h)/2;L0(e,f(u,t,r),f(h,t,r),f(h,o,r),f(u,o,r),[0,0,1],a),L0(e,f(u,o,n),f(h,o,n),f(h,t,n),f(u,t,n),[0,0,-1],a),L0(e,f(u,t,n),f(h,t,n),f(h,t,r),f(u,t,r),[-Math.cos(d),-Math.sin(d),0],a),L0(e,f(h,o,n),f(u,o,n),f(u,o,r),f(h,o,r),[Math.cos(d),Math.sin(d),0],a)}}function W4(e){let n=a=>[ye.xc+ye.r*Math.cos(a),ye.spring+ye.r*Math.sin(a)],r=a=>{let i=Math.cos(a),s=Math.sin(a),c=Math.abs(i)>1e-6?ye.r/Math.abs(i):1/0,f=s>1e-6?(8-ye.spring)/s:1/0,l=Math.min(c,f);return[Math.min(ye.x1,Math.max(ye.x0,ye.xc+i*l)),Math.min(8,ye.spring+s*l)]};for(let a=0;a<48;a++){let i=Math.PI*a/48,s=Math.PI*(a+1)/48,c=n(i),f=n(s),l=r(i),u=r(s);for(let[d,v]of[[.35,1],[-.35,-1]])L0(e,[c[0],c[1],d],[f[0],f[1],d],[u[0],u[1],d],[l[0],l[1],d],[0,0,v],Wr);let h=(i+s)/2;L0(e,[c[0],c[1],-.35],[f[0],f[1],-.35],[f[0],f[1],.35],[c[0],c[1],.35],[-Math.cos(h),-Math.sin(h),0],Wr)}}function V4(e){la(e,-.35,0,-.35,ye.x0,8,.35,Wr),la(e,ye.x1,0,-.35,14+.35,8,.35,Wr),W4(e),Nm(e)}function Nm(e){la(e,ye.x0-.32,.3,.35,ye.x0,ye.spring,.35+.07,Wr),la(e,ye.x1,.3,.35,ye.x1+.32,ye.spring,.35+.07,Wr),la(e,ye.x0-.32-.05,0,.35,ye.x0,.3,.35+.07+.04,Wr),la(e,ye.x1,0,.35,ye.x1+.32+.05,.3,.35+.07+.04,Wr),la(e,ye.x0-.32-.06,ye.spring-.12,.35,ye.x0,ye.spring,.35+.07+.05,Wr),la(e,ye.x1,ye.spring-.12,.35,ye.x1+.32+.06,ye.spring,.35+.07+.05,Wr),Df(e,ye.r,ye.r+.32,.35,.35+.07,Wr),Df(e,ye.r+.32,ye.r+.32+.06,.35,.35+.07+.03,Wr),la(e,ye.xc-.22,ye.top-.08,.35,ye.xc+.22,ye.top+.32+.12,.35+.07+.06,Wr)}function X4(e,t){t=t||"all";let o=t==="all",n=o||t==="fixed",r=-zm/2,a=zm/2,i=(h,d,v,p,m=0)=>la(e,h-m,d,r,v+m,p,a,Zc),s=h=>ye.spring+Math.sqrt(Math.max(0,ye.r*ye.r-(h-ye.xc)*(h-ye.xc))),c=t==="right"?ye.xc:ye.x0,f=t==="left"?ye.xc:ye.x1,l=h=>o||t==="left"&&h<ye.xc||t==="right"&&h>ye.xc,u=o?null:ye.spring-.06;if(n){i(ye.x0,0,ye.x0+Bo,ye.spring),i(ye.x1-Bo,0,ye.x1,ye.spring),Df(e,ye.r-Bo,ye.r,r,a,Zc,64),i(ye.x0,0,ye.x1,.05),i(ye.x0,ye.spring-.06,ye.x1,ye.spring+.06);for(let h of Cm)Df(e,h-kr/2,h+kr/2,r,a,Zc,48)}if(o){i(ye.x0,0,ye.x1,T0),i(ye.xc-Bo/2,0,ye.xc+Bo/2,ye.top-Bo*.5);for(let h of Gf)i(h-kr/2,T0,h+kr/2,s(h)-Bo*.5);for(let h of c1)i(ye.x0,h-kr/2,ye.x1,h+kr/2)}else if(t==="fixed"){i(ye.xc-Bo/2,ye.spring+.06,ye.xc+Bo/2,ye.top-Bo*.5);for(let h of Gf)i(h-kr/2,ye.spring+.06,h+kr/2,s(h)-Bo*.5)}else{let h=t==="left"?ye.x0+Bo:ye.x1-Bo;i(Math.min(h,h+(t==="left"?Bo*.8:-Bo*.8)),.05,Math.max(h,h+(t==="left"?Bo*.8:-Bo*.8)),u),i(c,.05,f,T0),i(c,u-.07,f,u);let d=t==="left"?ye.xc-Bo/2:ye.xc;i(d,.05,d+Bo/2,u);for(let v of Gf)l(v)&&i(v-kr/2,T0,v+kr/2,u-.07);for(let v of c1)i(c,v-kr/2,f,v+kr/2)}for(let h of[-1,1]){let d=ye.xc+h*.16;l(d)&&(la(e,d-.02,1.05,a,d+.02,1.13,a+.06,Zc),la(e,d-(h>0?0:.14),1.07,a+.05,d+(h>0?.14:0),1.11,a+.08,Zc))}}function Y4(e){e=e||"all";let t=[],o=0,{x0:n,x1:r,xc:a,r:i,spring:s}=ye;if(e!=="fixed"){let f=e==="right"?a:n,l=e==="left"?a:r;if(t.push([f,0,o],[l,0,o],[l,s,o],[f,0,o],[l,s,o],[f,s,o]),e!=="all")return t}let c=48;for(let f=0;f<c;f++){let l=Math.PI*f/c,u=Math.PI*(f+1)/c;t.push([a,s,o],[a+i*Math.cos(l),s+i*Math.sin(l),o],[a+i*Math.cos(u),s+i*Math.sin(u),o])}return t}var Ao=e=>e.toFixed(4);function K4(){let e=Gf.map(n=>`vb = max(vb, barCover(abs(q.x - ${Ao(n)}), ${Ao(kr/2)}, soft));`).join(`
		`),t=c1.map(n=>`hb = max(hb, barCover(abs(q.y - ${Ao(n)}), ${Ao(kr/2)}, soft));`).join(`
		`),o=Cm.map(n=>`ab = max(ab, barCover(abs(rr - ${Ao(n)}), ${Ao(kr/2)}, soft));`).join(`
		`);return`
	float barCover(float d, float hw, float soft) {
		return 1.0 - smoothstep(hw - soft, hw + soft, d);
	}

	// how open the doorway is at a point (x, y) on a plane, 0..1
	float doorOpen(vec2 q, float soft) {
		float side = smoothstep(${Ao(ye.x0)} - soft, ${Ao(ye.x0)} + soft, q.x)
		           * (1.0 - smoothstep(${Ao(ye.x1)} - soft, ${Ao(ye.x1)} + soft, q.x));
		float above = smoothstep(-soft, soft, q.y);
		float rr = length(q - vec2(${Ao(ye.xc)}, ${Ao(ye.spring)}));
		float arch = q.y < ${Ao(ye.spring)} ? 1.0 : 1.0 - smoothstep(${Ao(ye.r)} - soft, ${Ao(ye.r)} + soft, rr);
		return side * above * arch;
	}

	// light that reaches floor point p through the door, 0..1
	float doorLight(vec3 p, vec3 toLight) {
		if (p.z < 0.3 || toLight.z > -0.01) return 0.0;
		// through the inner face of the wall
		float tIn = (${Ao(.35)} - p.z) / toLight.z;
		float tMid = (0.0 - p.z) / toLight.z;
		float tOut = (${Ao(-.35)} - p.z) / toLight.z;
		vec2 qIn = (p + toLight * tIn).xy;
		vec2 q = (p + toLight * tMid).xy;
		vec2 qOut = (p + toLight * tOut).xy;
		float dist = length(toLight * tMid);
		float soft = 0.006 + 0.016 * dist;
		float open = doorOpen(qIn, soft) * doorOpen(qOut, soft);
		if (open <= 0.0) return 0.0;

		// the frame: outer jambs, arched head, transom, rails, stiles, bars
		float rr = length(q - vec2(${Ao(ye.xc)}, ${Ao(ye.spring)}));
		float vb = barCover(abs(q.x - ${Ao(ye.xc)}), ${Ao(Bo/2)}, soft);
		${e}
		float hb = barCover(abs(q.y - ${Ao(ye.spring)}), 0.06, soft);
		hb = max(hb, 1.0 - smoothstep(${Ao(T0)} - soft, ${Ao(T0)} + soft, q.y));
		float hRows = 0.0;
		{
			float hb2 = 0.0;
			${t.replace(/hb = max\(hb,/g,"hb2 = max(hb2,")}
			hRows = q.y < ${Ao(ye.spring)} ? hb2 : 0.0;
		}
		float ab = 0.0;
		${o}
		ab = q.y > ${Ao(ye.spring)} ? ab : 0.0;
		float frame = max(
			barCover(abs(q.x - ${Ao(ye.x0+Bo/2)}), ${Ao(Bo/2)}, soft),
			barCover(abs(q.x - ${Ao(ye.x1-Bo/2)}), ${Ao(Bo/2)}, soft));
		frame = q.y < ${Ao(ye.spring)} ? frame : barCover(abs(rr - ${Ao(ye.r-Bo/2)}), ${Ao(Bo/2)}, soft);
		float cover = max(max(max(vb, hb), max(hRows, ab)), frame);
		return open * (1.0 - cover * 0.92);
	}`}Rm.exports={addEntranceWall:V4,addSurround:Nm,addFrames:X4,glassPanes:Y4,doorLightGLSL:K4,DOOR:ye,WALL:.35}});var C0=de((nA,Dm)=>{"use strict";var Ms=1.1583333333333334,ks=(13.05-8*.16)/9,f1=Ms+.16,h1=ks+.16,si=14/2-7.75/2,Vr=15,Jc=si+7.75,ii=Vr+13.05,Xr=.3,ci={y:8+.18,inset:.15},_s={y:8+.36,inset:Xr},u1=8+.2,el=8+.62,d1=8+.9,p1=.016,Fm=.28,Gm=.66,Q4=(()=>{let e=[-.15,1,.3],t=Math.hypot(e[0],e[1],e[2]);return e.map(o=>o/t)})(),Z4=(()=>{let e=[.42,1,-.32],t=Math.hypot(e[0],e[1],e[2]);return e.map(o=>o/t)})(),J4=[9,0,0],Zn=[10,0,0];function z0(e,t,o,n,r,a,i){let s=e.vert(t,a,i),c=e.vert(o,a,i),f=e.vert(n,a,i),l=e.vert(r,a,i);e.tri(s,c,f),e.tri(s,f,l)}function Er(e,t,o,n,r,a,i){z0(e,[t,a,o],[n,a,o],[n,a,r],[t,a,r],[0,-1,0],i)}function l1(e,t,o,n,r,a,i,s){z0(e,[t,a,o],[n,a,o],[n,i,o],[t,i,o],[0,0,1],s),z0(e,[n,a,r],[t,a,r],[t,i,r],[n,i,r],[0,0,-1],s),z0(e,[t,a,r],[t,a,o],[t,i,o],[t,i,r],[1,0,0],s),z0(e,[n,a,o],[n,a,r],[n,i,r],[n,i,o],[-1,0,0],s)}function Pm(e,t,o,n,r){Er(e,t[0],t[1],t[2],o[1],n,r),Er(e,t[0],o[3],t[2],t[3],n,r),Er(e,t[0],o[1],o[0],o[3],n,r),Er(e,o[2],o[1],t[2],o[3],n,r)}var Om=e=>si+e*f1,Im=e=>Vr+e*h1;function e_(e,t,o=48){let n=[si-Xr,Vr-Xr,Jc+Xr,ii+Xr],r=(f,l)=>[f[0]+l,f[1]+l,f[2]-l,f[3]-l],a=r(n,ci.inset),i=r(n,_s.inset);Er(e,0,0,14,n[1],8,t),Er(e,0,n[3],14,o,8,t),Er(e,0,n[1],n[0],n[3],8,t),Er(e,n[2],n[1],14,n[3],8,t);let s=.06,c=.06;e.box(n[0]-s,8-c,n[1]-s,n[2]+s,8,n[1],Zn),e.box(n[0]-s,8-c,n[3],n[2]+s,8,n[3]+s,Zn),e.box(n[0]-s,8-c,n[1],n[0],8,n[3],Zn),e.box(n[2],8-c,n[1],n[2]+s,8,n[3],Zn),l1(e,...n.slice(0,2),...n.slice(2),8,ci.y,Zn),Pm(e,n,a,ci.y,Zn),l1(e,...a.slice(0,2),...a.slice(2),ci.y,_s.y,Zn),Pm(e,a,i,_s.y,Zn);for(let f=1;f<6;f++){let l=Om(f)-.16;e.box(l,u1,Vr,l+.16,_s.y,ii,Zn)}for(let f=1;f<9;f++){let l=Im(f)-.16;e.box(si,u1,l,Jc,_s.y,l+.16,Zn)}for(let f=0;f<9;f++)for(let l=0;l<6;l++){let u=Om(l),h=Im(f);l1(e,u,h,u+Ms,h+ks,_s.y,d1,Zn),Er(e,u,h,u+Ms,h+ks,d1,J4),t_(e,u+Ms/2,h+ks/2,Ms/2,ks/2)}}function t_(e,t,o,n,r){let a=el,i=p1;Er(e,t-n,o-i,t+n,o+i,a,Zn),Er(e,t-i,o-r,t+i,o+r,a,Zn);for(let s of[1,-1]){let c=Math.hypot(n,r),f=n/c,l=s*r/c,u=-l*i,h=f*i;z0(e,[t-f*c+u,a,o-l*c+h],[t+f*c+u,a,o+l*c+h],[t+f*c-u,a,o+l*c-h],[t-f*c-u,a,o-l*c-h],[0,-1,0],Zn)}for(let s of[Fm,Gm]){let c=s*n,f=s*r;Er(e,t-c-i,o-f-i,t+c+i,o-f+i,a,Zn),Er(e,t-c-i,o+f-i,t+c+i,o+f+i,a,Zn),Er(e,t-c-i,o-f+i,t-c+i,o+f-i,a,Zn),Er(e,t+c-i,o-f+i,t+c+i,o+f-i,a,Zn)}}var Ot=e=>e.toFixed(4);function o_(){return`
	// by day the sun, high and a little towards the entrance; by night
	// the moon, lower and from the other side, so its squares of light
	// reach across the floor to the foot of the wall. (When the light is
	// switched, the squares slide from one to the other.)
	const vec3 SKY_SUN_DAY = vec3(${Q4.map(Ot).join(", ")});
	const vec3 SKY_MOON = vec3(${Z4.map(Ot).join(", ")});
	vec3 skySun() { return normalize(mix(SKY_SUN_DAY, SKY_MOON, night)); }
	#define SKY_SUN skySun()

	float rectOpen(vec2 q, vec4 r, float soft) {
		vec2 lo = smoothstep(r.xy - soft, r.xy + soft, q);
		vec2 hi = 1.0 - smoothstep(r.zw - soft, r.zw + soft, q);
		return lo.x * lo.y * hi.x * hi.y;
	}

	// inside a pane (not on a beam)? 0..1
	float paneOpen(vec2 q, float soft) {
		vec2 rel = q - vec2(${Ot(si)}, ${Ot(Vr)});
		vec2 pitch = vec2(${Ot(f1)}, ${Ot(h1)});
		vec2 cell = floor(rel / pitch);
		if (cell.x < 0.0 || cell.y < 0.0 || cell.x > ${Ot(5)} || cell.y > ${Ot(8)}) return 0.0;
		vec2 loc = rel - cell * pitch;
		return rectOpen(loc, vec4(0.0, 0.0, ${Ot(Ms)}, ${Ot(ks)}), soft);
	}

	float barCov(float d, float soft) {
		return 1.0 - smoothstep(${Ot(p1)} - soft, ${Ot(p1)} + soft, d);
	}

	// sunlight reaching point p through the skylight, 0..1
	float skylightAt(vec3 p) {
		if (p.y > ${Ot(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q0 = (p + L * ((${Ot(8)} - p.y) / L.y)).xz;
		vec2 q1 = (p + L * ((${Ot(ci.y)} - p.y) / L.y)).xz;
		vec2 qb = (p + L * ((${Ot(u1)} - p.y) / L.y)).xz;
		vec2 q2 = (p + L * ((${Ot(_s.y)} - p.y) / L.y)).xz;
		float tG = (${Ot(el)} - p.y) / L.y;
		vec2 qg = (p + L * tG).xz;
		vec2 qt = (p + L * ((${Ot(d1)} - p.y) / L.y)).xz;
		float soft = 0.004 + 0.007 * tG;
		float open = rectOpen(q0, vec4(${Ot(si-Xr)}, ${Ot(Vr-Xr)}, ${Ot(Jc+Xr)}, ${Ot(ii+Xr)}), soft)
		           * rectOpen(q1, vec4(${Ot(si-Xr+ci.inset)}, ${Ot(Vr-Xr+ci.inset)}, ${Ot(Jc+Xr-ci.inset)}, ${Ot(ii+Xr-ci.inset)}), soft)
		           * paneOpen(qb, soft) * paneOpen(q2, soft) * paneOpen(qt, soft);
		if (open <= 0.0) return 0.0;
		// the glazing, measured from the centre of this pane
		vec2 rel = qg - vec2(${Ot(si)}, ${Ot(Vr)});
		vec2 pitch = vec2(${Ot(f1)}, ${Ot(h1)});
		vec2 paneHalf = vec2(${Ot(Ms/2)}, ${Ot(ks/2)});
		vec2 c = rel - floor(rel / pitch) * pitch - paneHalf;
		vec2 ac = abs(c);
		vec2 an = ac / paneHalf;                       // 0 at the centre, 1 at the pane's edge
		float hm = min(paneHalf.x, paneHalf.y);
		float ring = max(an.x, an.y);
		float cover = max(barCov(ac.x, soft), barCov(ac.y, soft));
		cover = max(cover, barCov(abs(an.x - an.y) * hm * 0.7071, soft));
		cover = max(cover, barCov(abs(ring - ${Ot(Fm)}) * hm, soft));
		cover = max(cover, barCov(abs(ring - ${Ot(Gm)}) * hm, soft));
		return open * (1.0 - cover * 0.9);
	}

	// the same light for the beams in the air: the whole opening glows a
	// little, and the panes and bars show in it, softly
	float skylightVol(vec3 p) {
		if (p.y > ${Ot(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q = (p + L * ((${Ot(el)} - p.y) / L.y)).xz;
		float open = rectOpen(q, vec4(${Ot(si)}, ${Ot(Vr)}, ${Ot(Jc)}, ${Ot(ii)}), 0.25);
		if (open <= 0.0) return 0.0;
		return open * (0.13 + 0.87 * skylightAt(p));
	}

	// light thrown back up by the bright squares on the floor: strongest
	// on what stands beside them and faces them (the lower walls, the
	// pillars, the statues, the ceiling above), fading with distance
	float skylightBounce(vec3 p, vec3 n) {
		if (p.x > 14.2 || p.x < -0.4) return 0.0;
		vec3 L = SKY_SUN;
		vec2 c = vec2(${Ot(14/2)}, ${Ot((Vr+ii)/2)}) - L.xz * (${Ot(el)} / L.y);
		vec2 d = max(abs(p.xz - c) - vec2(${Ot(7.75/2)}, ${Ot(13.05/2)}), 0.0);
		float fall = 1.0 / (1.0 + 0.09 * (dot(d, d) + p.y * p.y * 0.6));
		vec3 to = normalize(vec3(c.x, -0.4, c.y) - p);
		return fall * (0.3 + 0.7 * max(dot(n, to), 0.0));
	}

	// a soft daylight glow under the lantern
	float skylightGlow(vec3 p) {
		float z = smoothstep(${Ot(Vr-3)}, ${Ot(Vr+2)}, p.z)
		        * (1.0 - smoothstep(${Ot(ii-2)}, ${Ot(ii+3)}, p.z));
		float x = 1.0 - 0.35 * smoothstep(${Ot(7.75/2)}, ${Ot(14/2)}, abs(p.x - ${Ot(14/2)}));
		return z * x;
	}`}Dm.exports={addSkylight:e_,skylightGLSL:o_,Z_START:Vr,Z_END:ii,GLASS_Y:el,HEIGHT:8}});var ir=de((rA,Bm)=>{"use strict";var R0=Li(),x1=8,jo=.35,$e={x0:13.65,x1:38.12,z0:41,z1:47.2,zc:44.1,hallEnd:50.65,spring:5.6,crown:x1},$m=($e.z1-$e.z0)/2,v1=$e.crown-$e.spring,g1=(v1*v1+$m*$m)/(2*v1),y1=$e.crown-g1;function N0(e){let t=e-$e.zc;return y1+Math.sqrt(Math.max(0,g1*g1-t*t))}var Et={first:17.43,pitch:4.4,count:5,halfW:1.2,sill:.75,spring:4.3},Ea=Array.from({length:Et.count},(e,t)=>Et.first+t*Et.pitch),Hm=Ea.slice(1).map(e=>e-Et.pitch/2),n_=[Ea[0],Ea[2],Ea[4]],qf=[Ea[1],Ea[3]],Ir={r:1.3,sill:.62,spring:3.3},No=[0,0,0],tl=[11,0,0],zi=[10,0,0],ol=[8,0,0];function Hn(e,t,o,n,r,a,i){let s=e.vert(t,a,i),c=e.vert(o,a,i),f=e.vert(n,a,i),l=e.vert(r,a,i);e.tri(s,c,f),e.tri(s,f,l)}function Fr(e,t,o,n,r,a,i,s){e.box(Math.min(t,r),Math.min(o,a),Math.min(n,i),Math.max(t,r),Math.max(o,a),Math.max(n,i),s)}function nl(e,t){let{u0:o,u1:n,w0:r,w1:a,top:i,holes:s,mat:c}=t,f=new Set([o,n]);for(let p of s){f.add(p.u0),f.add(p.u1);let m=Math.max(8,Math.ceil((p.u1-p.u0)/(p.step||.08)));for(let g=1;g<m;g++)f.add(p.u0+(p.u1-p.u0)*g/m)}for(let p of t.cuts||[])f.add(p);let l=t.topStep||.5;for(let p=o;p<n;p+=l)f.add(p);let u=[...f].filter(p=>p>=o-1e-9&&p<=n+1e-9).sort((p,m)=>p-m),h=(p,m)=>p.bot?p.bot(m):p.bottom,d=(p,m)=>{let g=i(p),y=m.map(E=>[Math.max(0,h(E,p)),Math.min(E.head(p),g)]).filter(E=>E[1]>E[0]).sort((E,L)=>E[0]-L[0]),b=[],k=0;for(let E of y)E[0]>k+1e-6&&b.push([k,E[0]]),k=Math.max(k,E[1]);return g>k+1e-6&&b.push([k,g]),b},v=(p,m,g)=>[p,m,g];for(let p=0;p<u.length-1;p++){let m=u[p],g=u[p+1],y=(m+g)/2,b=s.filter(O=>y>O.u0&&y<O.u1),k=b.length?Math.max(m,Math.max(...b.map(O=>O.u0))+1e-7):m,E=b.length?Math.min(g,Math.min(...b.map(O=>O.u1))-1e-7):g,L=d(k,b),N=d(E,b),W=Math.min(L.length,N.length);for(let O=0;O<W;O++){let[te,D]=L[O],[re,q]=N[O];D-te<1e-6&&q-re<1e-6||(Hn(e,v(m,te,a),v(g,re,a),v(g,q,a),v(m,D,a),[0,0,1],c),t.frontOnly||Hn(e,v(g,re,r),v(m,te,r),v(m,D,r),v(g,q,r),[0,0,-1],c))}}t.noEnds||(Hn(e,v(o,0,r),v(o,0,a),v(o,i(o),a),v(o,i(o),r),[-1,0,0],c),Hn(e,v(n,0,a),v(n,0,r),v(n,i(n),r),v(n,i(n),a),[1,0,0],c));for(let p of s){if(p.noReveal)continue;let m=p.mat||t.revealMat||c,g=Math.max(0,h(p,p.u0+1e-7)),y=Math.max(0,h(p,p.u1-1e-7)),b=Math.min(p.head(p.u0+1e-7),i(p.u0)),k=Math.min(p.head(p.u1-1e-7),i(p.u1));b>g+1e-6&&Hn(e,v(p.u0,g,a),v(p.u0,g,r),v(p.u0,b,r),v(p.u0,b,a),[1,0,0],m),k>y+1e-6&&Hn(e,v(p.u1,y,r),v(p.u1,y,a),v(p.u1,k,a),v(p.u1,k,r),[-1,0,0],m);let E=Math.max(8,Math.ceil((p.u1-p.u0)/(p.step||.06)));for(let L=0;L<E;L++){let N=p.u0+(p.u1-p.u0)*L/E,W=p.u0+(p.u1-p.u0)*(L+1)/E,O=Math.max(N,p.u0+1e-7),te=Math.min(W,p.u1-1e-7),D=Math.min(p.head(O),i(N)),re=Math.min(p.head(te),i(W));if(!(D>=i(N)-1e-6&&re>=i(W)-1e-6)){let be=W-N,qe=re-D,Ae=Math.hypot(be,qe)||1;Hn(e,v(N,D,r),v(W,re,r),v(W,re,a),v(N,D,a),[qe/Ae,-be/Ae,0],m)}let q=h(p,O),Y=h(p,te);if(q>1e-6||Y>1e-6){let be=W-N,qe=Y-q,Ae=Math.hypot(be,qe)||1;Hn(e,v(W,Y,r),v(N,q,r),v(N,q,a),v(W,Y,a),[-qe/Ae,be/Ae,0],m)}}}}var m1=(e,t,o)=>n=>{let r=n-e;return o+Math.sqrt(Math.max(0,t*t-r*r))};function r_(e,t){let o=Ir.r,n=Ir.sill,r=Ir.spring,a=$e.z0,i=24,s=(d,v,p)=>[t+Math.cos(d)*v,p,a-Math.sin(d)*v];for(let d=0;d<i;d++){let v=Math.PI*d/i,p=Math.PI*(d+1)/i,m=[-Math.cos(v),0,Math.sin(v)],g=[-Math.cos(p),0,Math.sin(p)],y=[e.vert(s(v,o,n),m,No),e.vert(s(p,o,n),g,No),e.vert(s(p,o,r),g,No),e.vert(s(v,o,r),m,No)];e.tri(y[0],y[1],y[2]),e.tri(y[0],y[2],y[3])}let c=12,f=(d,v)=>[t+Math.cos(d)*Math.cos(v)*o,r+Math.sin(v)*o,a-Math.sin(d)*Math.cos(v)*o],l=(d,v)=>[-Math.cos(d)*Math.cos(v),-Math.sin(v),Math.sin(d)*Math.cos(v)];for(let d=0;d<i;d++)for(let v=0;v<c;v++){let p=Math.PI*d/i,m=Math.PI*(d+1)/i,g=Math.PI/2*v/c,y=Math.PI/2*(v+1)/c,b=[e.vert(f(p,g),l(p,g),zi),e.vert(f(m,g),l(m,g),zi),e.vert(f(m,y),l(m,y),zi),e.vert(f(p,y),l(p,y),zi)];e.tri(b[0],b[1],b[2]),e.tri(b[0],b[2],b[3])}for(let d=1;d<8;d++){let v=Math.PI*d/8,p=[];for(let m=0;m<=10;m++){let g=Math.PI/2*m/10*.97;p.push(f(v,g).map((y,b)=>y-l(v,g)[b]*.02))}e.tube(p,m=>.035*(1-m*.6),12,6,{mat:()=>zi})}let u=e.vert([t,n,a],[0,1,0],No);for(let d=0;d<i;d++){let v=Math.PI*d/i,p=Math.PI*(d+1)/i;e.tri(u,e.vert(s(v,o,n),[0,1,0],No),e.vert(s(p,o,n),[0,1,0],No))}Fr(e,t-o-.12,n-.1,a,t+o+.12,n+.02,a+.12,No),Fr(e,t-o-.16,n-.2,a,t+o+.16,n-.1,a+.07,No);let h=.16;for(let d=0;d<i;d++){let v=Math.PI*d/i,p=Math.PI*(d+1)/i,m=(g,y,b)=>[t+Math.cos(g)*y,r+Math.sin(g)*y,b];Hn(e,m(v,o,a+.05),m(p,o,a+.05),m(p,o+h,a+.05),m(v,o+h,a+.05),[0,0,1],No),Hn(e,m(v,o+h,a),m(p,o+h,a),m(p,o+h,a+.05),m(v,o+h,a+.05),[Math.cos((v+p)/2),Math.sin((v+p)/2),0],No),Hn(e,m(v,o,a),m(p,o,a),m(p,o,a+.05),m(v,o,a+.05),[-Math.cos((v+p)/2),-Math.sin((v+p)/2),0],No)}for(let d of[-1,1]){let v=t+d*o,p=t+d*(o+h);Fr(e,v,n,a,p,r,a+.05,No),Fr(e,v-d*.02,r-.12,a,p+d*.06,r,a+.09,No)}Fr(e,t-.11,r+o-.04,a,t+.11,r+o+h+.1,a+.09,No),e.lathe([[.66,n,1],[.66,n+.06,1],[.62,n+.1],[.6,n+.3],[.64,n+.34,1],[.64,n+.4,1],[0,n+.4]],t,a-.62,40,{mat:()=>No})}var a_=Ir.sill+.4,i_=$e.z0-.62;function s_(e){Hn(e,[14,0,$e.z0-jo],[$e.x1+jo,0,$e.z0-jo],[$e.x1+jo,0,$e.z1+jo],[14,0,$e.z1+jo],[0,1,0],No),e.curMat=tl,nl(e,{u0:14+jo,u1:$e.x1+2*jo,w0:$e.z0-2*jo,w1:$e.z0,top:()=>$e.spring,holes:qf.map(f=>({u0:f-Ir.r,u1:f+Ir.r,bottom:Ir.sill,head:m1(f,Ir.r,Ir.spring),noReveal:!0})),mat:tl,cuts:[$e.x1]});for(let f of qf)r_(e,f);e.save(),e.translate(0,0,$e.z1),e.rotateY(Math.PI),e.translate(-($e.x1+2*jo),0,-2*jo);let t=f=>$e.x1+2*jo-f;nl(e,{u0:t($e.x1+2*jo),u1:t(13.65),w0:0,w1:2*jo,top:()=>$e.spring,holes:Ea.map(f=>({u0:t(f+Et.halfW),u1:t(f-Et.halfW),bottom:Et.sill,head:m1(t(f),Et.halfW,Et.spring)})),mat:tl,revealMat:No}),e.restore(),e.save(),e.translate($e.x1,0,0),e.rotateY(-Math.PI/2);let o=R0.DOOR,n=$e.zc,r=o.r;nl(e,{u0:$e.z0-2*jo,u1:$e.z1+2*jo,w0:-2*jo,w1:0,top:f=>f<$e.z0||f>$e.z1?$e.spring:N0(f),topStep:.15,holes:[{u0:n-r,u1:n+r,bottom:0,head:m1(n,r,o.spring)}],mat:tl,revealMat:No}),e.restore(),e.save(),e.translate(14+jo,0,0),e.rotateY(-Math.PI/2),nl(e,{u0:$e.z0,u1:$e.z1,w0:-0,w1:2*jo,top:()=>x1,topStep:.15,holes:[{u0:$e.z0,u1:$e.z1,bottom:0,head:f=>N0(f)}],mat:tl,revealMat:No}),e.restore();let a=14+jo,i=Math.ceil(($e.x1-a)/1),s=28,c=[];for(let f=0;f<=i;f++){let l=a+($e.x1-a)*f/i,u=[];for(let h=0;h<=s;h++){let d=$e.z0+($e.z1-$e.z0)*h/s,v=N0(d),p=[0,y1-v,$e.zc-d],m=Math.hypot(p[1],p[2]);u.push(e.vert([l,v,d],[0,p[1]/m,p[2]/m],zi))}c.push(u)}for(let f=0;f<i;f++)for(let l=0;l<s;l++)e.tri(c[f][l],c[f+1][l],c[f][l+1]),e.tri(c[f+1][l],c[f+1][l+1],c[f][l+1])}function qm(e,t,o,n){let a=[];for(let i=0;i<=32;i++){let s=$e.z0+($e.z1-$e.z0)*i/32,c=N0(s),f=y1-c,l=$e.zc-s,u=Math.hypot(f,l),h=[c+f/u*n,s+l/u*n];a.push({y:c,z:s,iy:h[0],iz:h[1],n:[0,f/u,l/u]})}for(let i=0;i<32;i++){let s=a[i],c=a[i+1];Hn(e,[t-o,s.iy,s.iz],[t+o,s.iy,s.iz],[t+o,c.iy,c.iz],[t-o,c.iy,c.iz],s.n,No),Hn(e,[t-o,s.y,s.z],[t-o,s.iy,s.iz],[t-o,c.iy,c.iz],[t-o,c.y,c.z],[-1,0,0],No),Hn(e,[t+o,s.iy,s.iz],[t+o,s.y,s.z],[t+o,c.y,c.z],[t+o,c.iy,c.iz],[1,0,0],No)}}function $f(e,t,o,n){let i=o,s=o+n*.16;Fr(e,t-.28,0,i,t+.28,$e.spring-.3,s,No),Fr(e,t-.28-.06,0,i,t+.28+.06,.32,o+n*(.16+.05),No),Fr(e,t-.28-.05,$e.spring-.3,i,t+.28+.05,$e.spring-.1,o+n*(.16+.05),No),Fr(e,t-.28-.1,$e.spring-.1,i,t+.28+.1,$e.spring,o+n*(.16+.1),No)}function c_(e,t){let o=N0($e.zc),n=[[0,o-.13,1],[.05,o-.125],[.12,o-.1],[.16,o-.06,1],[.22,o-.05],[.3,o-.075],[.4,o-.06],[.48,o-.03,1],[.55,o-.035],[.7,o-.025],[.82,o-.012,1],[.95,o+.03]];e.lathe(n,t,$e.zc,48,{mat:()=>zi});for(let r=0;r<8;r++){let a=r*Math.PI/4,i=t+Math.cos(a)*.32,s=$e.zc+Math.sin(a)*.32;e.save(),e.translate(i,o-.07,s),e.rotateY(-a),e.curMat=zi,e.ellipsoid([0,0,0],[.13,.03,.06],6,10),e.restore()}}function l_(e){e.curMat=No;for(let[t,o]of[[$e.z0,1],[$e.z1,-1]])Fr(e,14.35,$e.spring-.12,t,$e.x1,$e.spring,t+o*.1,No),Fr(e,14.35,$e.spring-.04,t,$e.x1,$e.spring+.05,t+o*.18,No);for(let[t,o]of[[$e.z0,1],[$e.z1,-1]])Fr(e,14.35,0,t,$e.x1,.42,t+o*.12,No),Fr(e,14.35,.42,t,$e.x1,.5,t+o*.07,No);for(let t of Hm)qm(e,t,.24,.16),$f(e,t,$e.z0,1),$f(e,t,$e.z1,-1);for(let t of[14.35+.28,$e.x1-.28])qm(e,t,.28,.22),$f(e,t,$e.z0,1),$f(e,t,$e.z1,-1);for(let t of Ea)c_(e,t)}function f_(e){let t=$e.z1+jo,o=t-.04,n=t+.04,r=(s,c,f,l)=>Fr(e,s,c,o,f,l,n,ol),a=Et.halfW,i=(s,c,f,l,u,h)=>{let d=(v,p,m)=>[s+p*Math.cos(v),Et.spring+p*Math.sin(v),m];for(let v=0;v<h;v++){let p=l+(u-l)*v/h,m=l+(u-l)*(v+1)/h;Hn(e,d(p,c,o),d(m,c,o),d(m,f,o),d(p,f,o),[0,0,-1],ol),Hn(e,d(p,f,n),d(m,f,n),d(m,c,n),d(p,c,n),[0,0,1],ol)}};for(let s of Ea){let c=s-a,f=s+a;r(c,Et.sill,c+.07,Et.spring),r(f-.07,Et.sill,f,Et.spring),r(c,Et.sill,f,Et.sill+.07),r(c,Et.spring-.04,f,Et.spring+.04);for(let u of[-.5,0,.5])r(s+u*a-.022,Et.sill,s+u*a+.022,Et.spring);let l=6;for(let u=1;u<l;u++){let h=Et.sill+(Et.spring-Et.sill)*u/l;r(c,h-.02,f,h+.02)}i(s,a-.07,a,0,Math.PI,32),i(s,.42,.46,0,Math.PI,20);for(let u=1;u<6;u++){let h=Math.PI*u/6,d=Math.cos(h),v=Math.sin(h),p=.02,m=(g,y)=>[s+d*g-v*p*y,Et.spring+v*g+d*p*y];Hn(e,[...m(.44,-1),o],[...m(a-.05,-1),o],[...m(a-.05,1),o],[...m(.44,1),o],[0,0,-1],ol),Hn(e,[...m(.44,1),n],[...m(a-.05,1),n],[...m(a-.05,-1),n],[...m(.44,-1),n],[0,0,1],ol)}}}function h_(){let e=[],t=$e.z1+jo;for(let o of Ea){let n=o-Et.halfW,r=o+Et.halfW;e.push([n,Et.sill,t],[r,Et.sill,t],[r,Et.spring,t],[n,Et.sill,t],[r,Et.spring,t],[n,Et.spring,t]);for(let a=0;a<24;a++){let i=Math.PI*a/24,s=Math.PI*(a+1)/24;e.push([o,Et.spring,t],[o+Et.halfW*Math.cos(i),Et.spring+Et.halfW*Math.sin(i),t],[o+Et.halfW*Math.cos(s),Et.spring+Et.halfW*Math.sin(s),t])}}return e}function Um(e,t){e.save(),e.translate($e.x1+jo,0,$e.zc-7),e.rotateY(-Math.PI/2),t(),e.restore()}function u_(e){Um(e,()=>{R0.addSurround(e),R0.addFrames(e,"fixed")})}function d_(e){return R0.glassPanes(e||"fixed").map(([o,n,r])=>[$e.x1+jo-r,n,$e.zc-7+o])}function p_(e){s_(e),l_(e),f_(e),u_(e),e.curMat=[0,0,0]}var v_={x:$e.x1+jo,zLo:$e.zc-R0.DOOR.r,zHi:$e.zc+R0.DOOR.r},lo=e=>e.toFixed(4);function m_(){return`
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
		float k = floor((q.x - ${lo(Et.first)}) / ${lo(Et.pitch)} + 0.5);
		if (k < 0.0 || k > ${lo(Et.count-1)}) return 0.0;
		float dx = q.x - (${lo(Et.first)} + k * ${lo(Et.pitch)});
		float side = 1.0 - smoothstep(${lo(Et.halfW)} - soft, ${lo(Et.halfW)} + soft, abs(dx));
		float sill = smoothstep(${lo(Et.sill)} - soft, ${lo(Et.sill)} + soft, q.y);
		float r = length(vec2(dx, q.y - ${lo(Et.spring)}));
		float head = q.y < ${lo(Et.spring)} ? 1.0 : 1.0 - smoothstep(${lo(Et.halfW)} - soft, ${lo(Et.halfW)} + soft, r);
		float open = side * sill * head;
		// the black glazing bars, softly
		float cover = 0.0;
		cover = max(cover, winBar(abs(dx), 0.022, soft));
		cover = max(cover, winBar(abs(abs(dx) - ${lo(Et.halfW*.5)}), 0.022, soft));
		float rowH = ${lo((Et.spring-Et.sill)/6)};
		float ry = (q.y - ${lo(Et.sill)}) / rowH;
		cover = max(cover, q.y < ${lo(Et.spring)} ? winBar(abs(fract(ry + 0.5) - 0.5) * rowH, 0.02, soft) : 0.0);
		cover = max(cover, q.y > ${lo(Et.spring)} ? winBar(abs(r - 0.44), 0.02, soft) : 0.0);
		return open * (1.0 - cover * 0.75);
	}

	// daylight reaching point p from the windows
	float windowLight(vec3 p, vec3 n) {
		if (p.x < ${lo($e.x0)} || p.z < ${lo($e.z0-.1)} || p.z > ${lo($e.z1)}) return 0.0;
		float ndl = max(dot(n, WIN_SKY), 0.0);
		if (ndl <= 0.0) return 0.0;
		float tIn = (${lo($e.z1)} - p.z) / WIN_SKY.z;
		float tOut = (${lo($e.z1+2*jo)} - p.z) / WIN_SKY.z;
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
		${qf.map(e=>`{ float d = abs(p.x - ${lo(e)}); if (d < best) { best = d; lamp = vec3(${lo(e)}, ${lo(Ir.spring+.55)}, ${lo($e.z0-.15)}); } }`).join(`
		`)}
		return lamp;
	}

	float nicheLight(vec3 p, vec3 n) {
		if (p.z > ${lo($e.z0+1.6)} || p.z < ${lo($e.z0-Ir.r-.1)} || p.x < ${lo($e.x0)}) return 0.0;
		vec3 lamp = nicheLamp(p);
		vec3 d = lamp - p;
		float dist = length(d);
		vec3 L = d / dist;
		// a cone pointing down into the niche
		float cone = smoothstep(0.35, 0.75, dot(-L, normalize(vec3(0.0, -1.0, 0.35))));
		float inside = 1.0 - smoothstep(${lo(Ir.r)}, ${lo(Ir.r+.5)}, abs(p.x - lamp.x));
		return max(dot(n, L), 0.0) * cone * inside / (1.0 + 0.35 * dist * dist);
	}

	// soft general daylight in the corridor, strongest near the glass
	float corridorGlow(vec3 p) {
		if (p.x < ${lo($e.x0-1)}) return 0.0;
		float inC = smoothstep(${lo($e.z0-1.5)}, ${lo($e.z0)}, p.z) * smoothstep(${lo($e.x0-1)}, ${lo($e.x0+1)}, p.x);
		float near = 0.55 + 0.45 * smoothstep(${lo($e.z0)}, ${lo($e.z1)}, p.z);
		return inC * near;
	}`}Bm.exports={wallWithHoles:nl,windowLightGLSL:m_,addWing:p_,windowGlass:h_,farDoorGlass:d_,atFarDoor:Um,FAR_DOOR:v_,vaultY:N0,C:$e,NICHE_X:qf,NICHE:Ir,NICHE_PLINTH_TOP:a_,NICHE_STATUE_Z:i_,WIN:Et,winCentres:Ea,piers:Hm,PAINTING_X:n_,HEIGHT:x1}});var fa=de((aA,Vm)=>{"use strict";var b1=ir(),Do=8,I0=.35,Es=14,O0=4,Ke={x0:Es+I0,x1:Es+I0+2*O0,z0:5.9-O0,z1:5.9+O0,zc:5.9,cx:Es+I0+O0,arch:{r:2.6,spring:4.4},dome:{r:3.3,base:Do},oculus:3.3};Ke.domeTop=Ke.dome.base+Ke.dome.r;var F0={spokes:16,ringE:[.42,.95],bar:.035},Cn={sxz:1.32,sy:1.6,yaw:.6};Cn.crownC=[Ke.cx,.4+3.4*Cn.sy,Ke.zc];Cn.crownR=[2.3*Cn.sxz,1.9*Cn.sy,2.3*Cn.sxz];Cn.trunkR=.26*Cn.sxz;Cn.trunkTop=.4+2.2*Cn.sy;var jm={inner:1.05,outer:1.62,seat:.48,soil:.4},Bf=(()=>{let e=[.2,1,-.15],t=Math.hypot(...e);return e.map(o=>o/t)})(),Un=[0,0,0],P0=[11,0,0],Hf=[10,0,0],Uf=[9,0,0],g_=[5,0,0],w1=[3,0,0];function li(e,t,o,n,r,a,i){let s=e.vert(t,a,i),c=e.vert(o,a,i),f=e.vert(n,a,i),l=e.vert(r,a,i);e.tri(s,c,f),e.tri(s,f,l)}function Sr(e,t,o,n,r,a,i,s){e.box(Math.min(t,r),Math.min(o,a),Math.min(n,i),Math.max(t,r),Math.max(o,a),Math.max(n,i),s)}var x_=(e,t,o)=>n=>{let r=n-e;return o+Math.sqrt(Math.max(0,t*t-r*r))};function y_(e){e.save(),e.translate(Es+I0,0,0),e.rotateY(-Math.PI/2),b1.wallWithHoles(e,{u0:0,u1:b1.C.z0,w0:0,w1:2*I0,top:()=>Do,holes:[{u0:Ke.zc-Ke.arch.r,u1:Ke.zc+Ke.arch.r,bottom:0,head:x_(Ke.zc,Ke.arch.r,Ke.arch.spring),step:.05}],mat:P0,revealMat:Un,topStep:1}),e.restore();let t=Es-I0;for(let[i,s]of[[0,Ke.zc-Ke.arch.r],[Ke.zc+Ke.arch.r,b1.C.z0]])Sr(e,t-.12,0,i,t,.42,s,Un),Sr(e,t-.07,.42,i,t,.5,s,Un);let o=t,n=.24,r=40,a=(i,s,c)=>[c,Ke.arch.spring+Math.sin(i)*s,Ke.zc+Math.cos(i)*s];for(let i=0;i<r;i++){let s=Math.PI*i/r,c=Math.PI*(i+1)/r;li(e,a(s,Ke.arch.r,o-.07),a(c,Ke.arch.r,o-.07),a(c,Ke.arch.r+n,o-.07),a(s,Ke.arch.r+n,o-.07),[-1,0,0],Un),li(e,a(s,Ke.arch.r+n,o),a(c,Ke.arch.r+n,o),a(c,Ke.arch.r+n,o-.07),a(s,Ke.arch.r+n,o-.07),[0,Math.sin((s+c)/2),Math.cos((s+c)/2)],Un),li(e,a(s,Ke.arch.r,o),a(c,Ke.arch.r,o),a(c,Ke.arch.r,o-.07),a(s,Ke.arch.r,o-.07),[0,-Math.sin((s+c)/2),-Math.cos((s+c)/2)],Un)}Sr(e,o-.12,Ke.arch.spring+Ke.arch.r-.06,Ke.zc-.17,o,Ke.arch.spring+Ke.arch.r+n+.16,Ke.zc+.17,Un);for(let i of[-1,1]){let s=Ke.zc+i*Ke.arch.r,c=Ke.zc+i*(Ke.arch.r+n);Sr(e,o-.07,0,s,o,Ke.arch.spring,c,Un),Sr(e,o-.13,Ke.arch.spring-.16,s-i*.03,o,Ke.arch.spring,c+i*.08,Un),Sr(e,o-.12,0,s-i*.03,o,.5,c+i*.06,Un)}}function b_(e){let{x0:t,x1:o,z0:n,z1:r}=Ke;li(e,[Es,0,n],[o,0,n],[o,0,r],[Es,0,r],[0,1,0],Un),e.curMat=P0,li(e,[o,0,n],[o,0,r],[o,Do,r],[o,Do,n],[-1,0,0],P0),li(e,[t,0,n],[o,0,n],[o,Do,n],[t,Do,n],[0,0,1],P0),li(e,[o,0,r],[t,0,r],[t,Do,r],[o,Do,r],[0,0,-1],P0),li(e,[t,0,r],[t,0,n],[t,Do,n],[t,Do,r],[1,0,0],P0),Sr(e,o-.12,0,n,o,.42,r,Un),Sr(e,t,0,n,o,.42,n+.12,Un),Sr(e,t,0,r-.12,o,.42,r,Un),Sr(e,o-.2,Do-.3,n,o,Do,r,Un),Sr(e,t,Do-.3,n,o,Do,n+.2,Un),Sr(e,t,Do-.3,r-.2,o,Do,r,Un),Sr(e,t,Do-.3,n,t+.2,Do,r,Un);let a=Ke.dome.r,i=48,s=[];for(let g=0;g<=i;g++){let y=Math.PI*2*g/i;s.push([Ke.cx+Math.cos(y)*a,Ke.zc+Math.sin(y)*a])}let c=g=>{let y=Math.abs(Math.cos(g)),b=Math.abs(Math.sin(g));return Math.min(O0/Math.max(y,1e-6),O0/Math.max(b,1e-6))};for(let g=0;g<i;g++){let y=Math.PI*2*g/i,b=Math.PI*2*(g+1)/i,k=c(y),E=c(b),L=[Ke.cx+Math.cos(y)*k,Do,Ke.zc+Math.sin(y)*k],N=[Ke.cx+Math.cos(b)*E,Do,Ke.zc+Math.sin(b)*E];li(e,[s[g][0],Do,s[g][1]],[s[g+1][0],Do,s[g+1][1]],N,L,[0,-1,0],Hf)}e.lathe([[a+.02,Do-.18,1],[a-.12,Do-.18,1],[a-.12,Do-.06,1],[a-.05,Do,1],[a,Do+.02]],Ke.cx,Ke.zc,i,{mat:()=>Un});let f=16,l=(g,y,b)=>[Ke.cx+Math.cos(g)*Math.cos(y)*b,Ke.dome.base+Math.sin(y)*b,Ke.zc+Math.sin(g)*Math.cos(y)*b],u=Math.PI/2;for(let g=0;g<i;g++)for(let y=0;y<f;y++){let b=Math.PI*2*g/i,k=Math.PI*2*(g+1)/i,E=u*y/f,L=u*(y+1)/f,N=(O,te)=>[-Math.cos(O)*Math.cos(te),-Math.sin(te),-Math.sin(O)*Math.cos(te)],W=[e.vert(l(b,E,a),N(b,E),Uf),e.vert(l(k,E,a),N(k,E),Uf),e.vert(l(k,L,a),N(k,L),Uf),e.vert(l(b,L,a),N(b,L),Uf)];e.tri(W[0],W[1],W[2]),e.tri(W[0],W[2],W[3])}for(let g=0;g<F0.spokes;g++){let y=Math.PI*2*g/F0.spokes,b=[];for(let k=0;k<=14;k++)b.push(l(y,(u-.06)*k/14,a-.04));e.tube(b,()=>.04,20,6,{mat:()=>Hf})}for(let g of F0.ringE){let y=Math.cos(g)*(a-.04),b=Ke.dome.base+Math.sin(g)*(a-.04),k=[];for(let E=0;E<=72;E++){let L=Math.PI*2*E/72;k.push([Ke.cx+Math.cos(L)*y,b,Ke.zc+Math.sin(L)*y])}e.tube(k,()=>.035,72,6,{mat:()=>Hf})}e.ellipsoid([Ke.cx,Ke.dome.base+a-.06,Ke.zc],[.16,.08,.16],6,12,{mat:()=>Hf});let h=.46,d=.55,v=.12,p=(g,y,b,k)=>{Sr(e,g,h-.08,y,b,h,k,w1);let E=b-g>k-y?[g+.25,b-.25]:[g+.06,b-.06],L=b-g>k-y?[y+.06,k-.06]:[y+.25,k-.25];Sr(e,E[0],0,L[0],E[1],h-.08,L[1],w1)};p(o-v-d,n+1.1,o-v,r-1.1),p(t+1,n+v,o-1.1,n+v+d),p(t+1,r-v-d,o-1.1,r-v);let m=jm;e.lathe([[m.outer,0,1],[m.outer,m.seat-.1,1],[m.outer+.07,m.seat-.07,1],[m.outer+.07,m.seat,1],[m.inner-.05,m.seat,1],[m.inner-.05,m.seat-.06,1],[m.inner,m.seat-.08,1],[m.inner,m.soil]],Ke.cx,Ke.zc,64,{mat:()=>w1}),e.lathe([[m.inner,m.soil,1],[0,m.soil+.03]],Ke.cx,Ke.zc,48,{mat:()=>g_})}function w_(e){y_(e),b_(e),e.curMat=[0,0,0]}var Ro=e=>e.toFixed(4);function Wm(){let e=Ke.dome.r,t=F0.ringE.map(o=>Math.cos(o)*e);return`
	const vec3 SHAFT = vec3(${Ro(Bf[0])}, ${Ro(Bf[1])}, ${Ro(Bf[2])});

	// how much sun the glass dome lets through towards p (0..1): the round
	// opening, less the soft shadows of its ribs and rings (worked out on
	// the dome's base, where the frame is seen almost straight on)
	float oculusOpen(vec3 p) {
		float t = (${Ro(Ke.dome.base+.6)} - p.y) / SHAFT.y;
		vec3 q = p + SHAFT * t;
		vec2 d2 = q.xz - vec2(${Ro(Ke.cx)}, ${Ro(Ke.zc)});
		float d = length(d2);
		float soft = 0.02 + 0.012 * t;
		float open = 1.0 - smoothstep(${Ro(e-.15)} - soft, ${Ro(e-.15)} + soft, d);
		float hw = ${Ro(F0.bar)};
		float cover = 0.0;
		${t.map(o=>`cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, abs(d - ${Ro(o)})));`).join(`
		`)}
		float ang = atan(d2.y, d2.x);
		float stp = ${Ro(Math.PI*2/F0.spokes)};
		float da = abs(mod(ang + stp * 0.5, stp) - stp * 0.5);
		cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, d * sin(da)));
		cover = max(cover, 1.0 - smoothstep(0.16 - soft, 0.16 + soft, d));
		return open * (1.0 - cover * 0.85);
	}

	// the tree's own shade: its crown lets dappled light through, its
	// trunk blocks it
	float treeShade(vec3 p) {
		vec3 c = vec3(${Ro(Cn.crownC[0])}, ${Ro(Cn.crownC[1])}, ${Ro(Cn.crownC[2])});
		vec3 r = vec3(${Ro(Cn.crownR[0])}, ${Ro(Cn.crownR[1])}, ${Ro(Cn.crownR[2])});
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
		float tt = (${Ro(Cn.trunkTop)} - p.y) / SHAFT.y;
		if (tt > 0.0) {
			vec2 o = p.xz - vec2(${Ro(Ke.cx)}, ${Ro(Ke.zc)});
			vec2 dir = SHAFT.xz;
			float k = clamp(-dot(o, dir) / dot(dir, dir), 0.0, tt);
			float dist = length(o + dir * k);
			tr *= smoothstep(${Ro(Cn.trunkR*.7)}, ${Ro(Cn.trunkR*1.3)}, dist);
		}
		return tr;
	}`}function __(){return`
	${Wm()}

	// sunlight through the oculus reaching p (0..1)
	float alcoveSun(vec3 p, vec3 n) {
		if (p.x < ${Ro(Ke.x0-.75)} || p.z < ${Ro(Ke.z0-.5)} || p.z > ${Ro(Ke.z1+.5)}) return 0.0;
		float ndl = max(dot(n, SHAFT), 0.0);
		if (ndl <= 0.0) return 0.0;
		return ndl * oculusOpen(p) * treeShade(p);
	}

	// soft daylight filling the court, brightest under the dome
	float alcoveGlow(vec3 p) {
		if (p.x < ${Ro(Ke.x0-1.5)} || p.z < ${Ro(Ke.z0-1.5)} || p.z > ${Ro(Ke.z1+1.5)}) return 0.0;
		float inside = smoothstep(${Ro(Ke.x0-1.2)}, ${Ro(Ke.x0+.6)}, p.x);
		float d = length(p.xz - vec2(${Ro(Ke.cx)}, ${Ro(Ke.zc)}));
		return inside * (0.55 + 0.45 * smoothstep(0.0, 8.0, p.y)) * (1.0 - 0.35 * smoothstep(1.0, 5.0, d));
	}`}Vm.exports={addAlcove:w_,alcoveLightGLSL:__,oculusGLSL:Wm,A:Ke,BENCH:jm,SHAFT:Bf,TREE:Cn}});var Jn=de((iA,Ym)=>{"use strict";var Sa=0;try{let e=location.search;/[?&]night\b/.test(e)&&(Sa=1)}catch(e){}var fi=Sa,_1=0,Xm=[],jf={tick(e){let t=_1?Math.min(.1,e-_1):0;if(_1=e,fi!==Sa){let o=t/2.4;fi=Sa>fi?Math.min(Sa,fi+o):Math.max(Sa,fi-o)}return jf.night},get night(){return fi*fi*(3-2*fi)},get isNight(){return Sa===1},get settled(){return fi===Sa},set(e){Sa=e?1:0,Xm.forEach(t=>t(Sa))},toggle(){jf.set(!Sa)},onChange(e){Xm.push(e)}};jf.GLSL=`
uniform float night;
vec3 toNight(vec3 c, float keep) {
	float l = dot(c, vec3(0.299, 0.587, 0.114));
	vec3 n = mix(vec3(l), c, 0.35) * vec3(0.55, 0.70, 1.05) * keep;
	return mix(c, n, night);
}
`;Ym.exports=jf});var Ni=de((sA,il)=>{"use strict";var M1=Jn(),{C:k1}=ir(),{A:Wf,BENCH:rl}=fa(),Nn=Math.PI,M_=[18,29,40],Vf=.575,Ci=[],al=(e,t,o,n,r,a,i)=>Ci.push(Object.assign({x:e,y:t,z:o,o:n,back:r,hw:a,s:1,k:1,range:7,mount:"wall"},i||{}));M_.forEach(e=>{al(1.25+Vf+.48,3.25,e,[1,0],.48,Vf,{s:1.2}),al(12.75-Vf-.48,3.25,e,[-1,0],.48,Vf,{s:1.2})});[3,11].forEach(e=>al(e,3.45,k1.hallEnd-.5,[0,-1],.5,99,{s:1.2}));var k_=[14.63,19.63,24.03,28.43,32.83,k1.x1-.28];k_.forEach(e=>al(e,3.15,k1.z0+.16+.44,[0,1],.44,.28));[3,8.8].forEach(e=>al(.35+.44,2.75,e,[1,0],.44,99));{let e=(rl.inner+rl.outer)/2,t=Math.atan2(-1.12,-.98);Ci.push({x:Wf.cx+Math.cos(t)*e,y:rl.seat+.155,z:Wf.zc+Math.sin(t)*e,o:[Math.cos(t),Math.sin(t)],back:0,hw:0,ring:[Wf.cx,Wf.zc,rl.outer+.07,rl.seat],s:.52,k:2.2,range:3.6,mount:"table"})}var E1=.13,Xf=.21,Bn=E1/Math.cos(Nn/6),ko=e=>e.toFixed(4);function Km(e){let o=(e||Ci.map((n,r)=>r)).map(n=>{let r=Ci[n],a=-r.o[1],i=r.o[0],s=r.mount==="table"?`
				// the bench it stands on hides the floor under and around it
				if (p.y < ${ko(r.ring[3]-.03)}) {
					float tt = ${ko(r.y-r.ring[3])} / max(-D.y, 1e-3);
					vec2 hit = vec2(${ko(r.x)}, ${ko(r.z)}) + D.xz * tt - vec2(${ko(r.ring[0])}, ${ko(r.ring[1])});
					T *= smoothstep(${ko(r.ring[2]-.02)}, ${ko(r.ring[2]+.12)}, length(hit));
				}`:"",c=r.mount==="wall"?`
				{
					// what it hangs on stands behind it and hides what lies beyond
					float behind = -dot(D.xz, vec2(${ko(r.o[0])}, ${ko(r.o[1])}));
					if (behind > ${ko(r.back+.06)}) {
						float side = abs(dot(D.xz, vec2(${ko(a)}, ${ko(i)}))) * ${ko(r.back)} / behind;
						T *= smoothstep(${ko(r.hw-.04)}, ${ko(r.hw+.04)}, side);
					}
				}`:"";return`
			{
				vec3 D = p - vec3(${ko(r.x)}, ${ko(r.y)}, ${ko(r.z)});
				float d2 = dot(D, D);
				if (d2 < ${ko(r.range*r.range)}) {
					float d = sqrt(d2);
					// the direction in the lantern's own frame
					float c = ${ko(Math.cos(Math.atan2(r.o[1],r.o[0])))}, s = ${ko(Math.sin(Math.atan2(r.o[1],r.o[0])))};
					vec3 q = vec3(D.x * c + D.z * s, D.y, -D.x * s + D.z * c);
					float T = lanternGlass(q, 0.10 + 0.05 * d);
					${c}${s}
					float fl = 0.90 + 0.06 * sin(time * 6.1 + ${ko(n*1.7)}) + 0.04 * sin(time * 15.3 + ${ko(n*2.9)}) * sin(time * 1.9 + ${ko(n*.6)});
					float lam = max(dot(N, -D / d), 0.0) * 0.85 + 0.15;
					float fall = 1.0 / (1.0 + d2 * ${ko(1/(r.s*r.s))}) * (1.0 - smoothstep(${ko(r.range*.6)}, ${ko(r.range)}, d));
					sum += ${ko(r.k)} * T * fl * lam * fall;
				}
			}`}).join("");return`
	// how much of a lantern's light gets out in direction q (lantern frame,
	// y up): through the leaded glass, past the iron posts, a little
	// through the vents in the roof and the open work under the base
	float lanternGlass(vec3 q, float blur) {
		float h = length(q.xz) + 1e-5;
		float az = atan(q.z, q.x);
		// which of the six panels, and where across it
		float t = mod(az + ${ko(Nn/6)}, ${ko(Nn/3)}) - ${ko(Nn/6)};
		float U = tan(t) / ${ko(Math.tan(Nn/6))};
		float V = (q.y / h) * (${ko(E1/Xf)} / cos(t));
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
	}`}var Wo=0,E_=1;function S_(){let e=[],t=[],o=[],n=[],r=[],a=(d,v,p,m)=>(e.push(d[0],d[1],d[2]),t.push(v[0],v[1],v[2]),o.push(p),n.push(m?m[0]:0,m?m[1]:0),e.length/3-1),i=(d,v)=>[d[0]-v[0],d[1]-v[1],d[2]-v[2]],s=(d,v)=>[d[1]*v[2]-d[2]*v[1],d[2]*v[0]-d[0]*v[2],d[0]*v[1]-d[1]*v[0]],c=d=>{let v=Math.hypot(d[0],d[1],d[2])||1;return[d[0]/v,d[1]/v,d[2]/v]};function f(d,v,p,m,g,y){let b=c(s(i(v,d),i(m,d))),k=a(d,b,g,[0,0]),E=a(v,b,g,[1,0]),L=a(p,b,g,[1,1]),N=a(m,b,g,[0,1]);r.push(k,E,L,k,L,N),y&&r.push(k,L,E,k,N,L)}function l(d,v,p){for(let y=0;y<d.length;y++){let b=d[Math.max(0,y-1)],k=d[Math.min(d.length-1,y+1)],E=c(i(k,b)),L=Math.abs(E[1])>.9?[1,0,0]:[0,1,0],N=c(s(E,L)),W=s(N,E),O=typeof v=="function"?v(y/(d.length-1)):v;for(let te=0;te<=6;te++){let D=te/6*Nn*2,re=Math.cos(D),q=Math.sin(D),Y=[N[0]*re+W[0]*q,N[1]*re+W[1]*q,N[2]*re+W[2]*q];a([d[y][0]+Y[0]*O,d[y][1]+Y[1]*O,d[y][2]+Y[2]*O],Y,p)}}let g=e.length/3-d.length*7;for(let y=0;y<d.length-1;y++)for(let b=0;b<6;b++){let k=g+y*7+b,E=k+6+1;r.push(k,E,k+1,k+1,E,E+1)}}function u(d,v,p,m,g,y,b,k,E){let L=(N,W,O)=>{let te=y+Nn/6+O*Nn/3;return[d[0]+Math.cos(te)*N,W,d[2]+Math.sin(te)*N]};for(let N=0;N<6;N++)f(L(m,v,N+1),L(m,v,N),L(g,p,N),L(g,p,N+1),b);if(k&&g>0)for(let N=0;N<6;N++){let W=a([d[0],p,d[2]],[0,1,0],b),O=a(L(g,p,N),[0,1,0],b),te=a(L(g,p,N+1),[0,1,0],b);r.push(W,te,O)}if(E&&m>0)for(let N=0;N<6;N++){let W=a([d[0],v,d[2]],[0,-1,0],b),O=a(L(m,v,N),[0,-1,0],b),te=a(L(m,v,N+1),[0,-1,0],b);r.push(W,O,te)}}function h(d,v,p,m,g,y,b){let k=[];for(let L=0;L<=18;L++){let N=L/18,W=(b||0)+N*m*Nn*2,O=p*(1-.75*N);k.push([d[0]+v[0]*Math.cos(W)*O,d[1]+Math.sin(W)*O,d[2]+v[2]*Math.cos(W)*O])}l(k,g,y)}return Ci.forEach(d=>{let v=d.s,p=Math.atan2(d.o[1],d.o[0]),m=[d.x,d.y,d.z],g=(k,E,L)=>[d.x+d.o[0]*k-d.o[1]*(L||0),d.y+E,d.z+d.o[1]*k+d.o[0]*(L||0)],y=d.y-Xf*v,b=d.y+Xf*v;for(let k=0;k<6;k++){let E=p+Nn/6+k*Nn/3,L=E+Nn/3,N=Bn*v*.97,W=[d.x+Math.cos(E)*N,y,d.z+Math.sin(E)*N],O=[d.x+Math.cos(L)*N,y,d.z+Math.sin(L)*N];f(O,W,[W[0],b,W[2]],[O[0],b,O[2]],E_,!0)}for(let k=0;k<6;k++){let E=p+Nn/6+k*Nn/3,L=Bn*v;l([[d.x+Math.cos(E)*L,y-.02*v,d.z+Math.sin(E)*L],[d.x+Math.cos(E)*L,b+.02*v,d.z+Math.sin(E)*L]],.011*v,Wo)}u(m,y-.035*v,y,Bn*v*1.12,Bn*v*1.12,p,Wo,!0,!0),u(m,y-.1*v,y-.035*v,Bn*v*.55,Bn*v*1,p,Wo,!1,!0),u(m,y-.17*v,y-.1*v,0,Bn*v*.55,p,Wo,!1,!1);for(let k=0;k<6;k++){let E=p+k*Nn/3,L=E1*v*1.06,N=[d.x+Math.cos(E)*L,y-.06*v,d.z+Math.sin(E)*L];h(N,[-Math.sin(E),0,Math.cos(E)],.03*v,.85,.004*v,Wo,.3)}u(m,b,b+.03*v,Bn*v*1.14,Bn*v*1.14,p,Wo,!1,!0),u(m,b+.03*v,b+.2*v,Bn*v*1.14,Bn*v*.32,p,Wo,!1,!1),u(m,b+.2*v,b+.27*v,Bn*v*.34,Bn*v*.34,p,Wo,!1,!1),u(m,b+.27*v,b+.37*v,Bn*v*.42,0,p,Wo,!1,!0),l([[d.x,b+.36*v,d.z],[d.x,b+.47*v,d.z]],k=>.01*v*(1-.7*k),Wo),u([d.x,0,d.z],b+.44*v,b+.47*v,.018*v,0,p,Wo,!1,!0);for(let k=0;k<6;k++){let E=p+Nn/6+k*Nn/3,L=Bn*v*1.14,N=[d.x+Math.cos(E)*L,b+.03*v,d.z+Math.sin(E)*L];l([N,[N[0],N[1]+.09*v,N[2]]],W=>.008*v*(1-.8*W),Wo),u([N[0],0,N[2]],N[1]+.035*v,N[1]+.06*v,.014*v,.014*v,E,Wo,!0,!0)}if(d.mount==="wall"){let k=d.back,E=y-.32,L=g(-k,0,0);((D,re,q)=>{let Y=[d.o[0],0,d.o[1]],be=[-d.o[1],0,d.o[0]],qe=(Te,dt,qt)=>[L[0]+be[0]*Te+Y[0]*qt,dt,L[2]+be[2]*Te+Y[2]*qt],Ae=.03,he=.065;f(qe(-q,D,he),qe(q,D,he),qe(q,re,he),qe(-q,re,he),Wo,!0),f(qe(q,D,Ae),qe(q,D,he),qe(q,re,he),qe(q,re,Ae),Wo,!0),f(qe(-q,D,he),qe(-q,D,Ae),qe(-q,re,Ae),qe(-q,re,he),Wo,!0),f(qe(-q,re,he),qe(q,re,he),qe(q,re,Ae),qe(-q,re,Ae),Wo,!0),f(qe(-q,D,Ae),qe(q,D,Ae),qe(q,D,he),qe(-q,D,he),Wo,!0),u([L[0]+Y[0]*he,0,L[2]+Y[2]*he],re,re+.05,q*.6,0,p,Wo,!1,!0),u([L[0]+Y[0]*he,0,L[2]+Y[2]*he],D-.05,D,0,q*.6,p,Wo,!1,!1)})(E-.2,E+.2,.07);let W=[];for(let D=0;D<=14;D++){let re=D/14,q=-k+.05+re*(k-.05),Y=E+.04+(y-.17*v-E-.04)*Math.pow(re,2.2);W.push(g(q,Y-d.y,0))}l(W,D=>.022*(1-.3*D),Wo);let O=[];for(let D=0;D<=10;D++){let re=D/10;O.push(g(-k+.05+re*k*.6,E-.14+re*.16+.05*Math.sin(re*Nn)-d.y,0))}l(O,.009,Wo);let te=O[O.length-1];h([te[0]-d.o[0]*.03,te[1]+.02,te[2]-d.o[1]*.03],[d.o[0],0,d.o[1]],.045,1.1,.007,Wo,-.4),[.3,.55].forEach(D=>{let re=W[Math.round(D*14)],q=O[Math.round(D/.62*10)]||O[10];l([re,q],.006,Wo)}),[-1,1].forEach(D=>{let re=g(-.05,-Xf*v-.2*v,0);h([re[0]-d.o[1]*D*.05,re[1],re[2]+d.o[0]*D*.05],[-d.o[1]*D,0,d.o[0]*D],.05*v,.9,.006,Wo,Nn)})}else for(let k=0;k<3;k++){let E=p+k*Nn*2/3,L=[d.x+Math.cos(E)*Bn*v*.7,y-.035*v,d.z+Math.sin(E)*Bn*v*.7],N=[d.x+Math.cos(E)*Bn*v*1.25,y-.17*v,d.z+Math.sin(E)*Bn*v*1.25];l([L,N],.012*v,Wo)}}),{pos:e,nrm:t,kind:o,uv:n,elems:r}}il.exports=e=>{let t=S_(),o=e({vert:`
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
		${Km()}
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
		}`,attributes:{position:t.pos,normal:t.nrm,kind:t.kind,uv:t.uv},elements:t.elems,uniforms:{time:e.context("time"),night:()=>M1.night}}),n=[],r=[];Ci.forEach((i,s)=>{[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(c=>{n.push(c[0],c[1]),r.push(i.x,i.y,i.z,i.s+s*.001)})});let a=e({vert:`
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
		}`,attributes:{corner:n,at:r},count:n.length/2,uniforms:{time:e.context("time"),night:()=>M1.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(){o(),M1.night>.01&&a()}};il.exports.lanternGLSL=Km;il.exports.LANTERNS=Ci;il.exports.TREE_LANTERN=[Ci.length-1]});var Oi=de((cA,Gr)=>{"use strict";var A_=Jn(),To=Math.PI,Rn=e=>(+e).toFixed(4),T_=e=>`vec3(${Rn(e[0])}, ${Rn(e[1])}, ${Rn(e[2])})`,Tt={x:-7,z:44.5},jt=5.2,er=15,Je={z0:42.6,z1:46.4,zc:44.5,spring:4,r:1.9},Ba={z0:42.2,z1:46.8,top:6.3,x:.35},Qf=[Tt.x-Math.sqrt(jt*jt-3.05*3.05),0,0],vn={x0:-2.05+Qf[0],x1:Qf[0],z0:41.45,z1:47.55,top:4.3},S1=[[vn.x1+.05,2.35,vn.z0-.45],[vn.x1+.05,2.35,vn.z1+.45]].map(([e,t,o])=>{let n=Math.atan2(o-Tt.z,e-Tt.x);return[Tt.x+Math.cos(n)*(jt-.16),t,Tt.z+Math.sin(n)*(jt-.16)]}),bo={ri:3.4,ro:jt,a0:-35*To/180,rise:.1836,step:3.6*To/180,n:88,thick:.36};bo.k=bo.rise/bo.step;var Ar=e=>bo.a0-e,Pi=e=>e*bo.k,Yo={x:Tt.x+.1,z:Tt.z-.15,yaw:-To/2,scale:1.3},hi=Yo.scale/1.1,sl={keyX0:Yo.x-.524*hi,keyX1:Yo.x+.491*hi,keyTop:.647*hi,keyFront:Yo.z+.808*hi,keyBack:Yo.z+.72*hi,stoolX:Yo.x-.041*hi,stoolZ:Yo.z+1.122*hi,stoolFront:Yo.z+.96*hi,stoolTop:.37*hi,heading:To},Kf=[[3.6,44.5],[.6,44.5],[-2.2,44.7],[-4.5,46.5],[-7,47.2],[-9.4,46.6],[-10.5,44.9],[-10.9,43.2]];function Zm(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let o=t;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}function L_(e,t){let o=1e9;for(let n=0;n<Kf.length-1;n++){let[r,a]=Kf[n],[i,s]=Kf[n+1],c=i-r,f=s-a,l=Math.max(0,Math.min(1,((e-r)*c+(t-a)*f)/(c*c+f*f)));o=Math.min(o,Math.hypot(e-r-c*l,t-a-f*l))}return o}var Yf=e=>Je.spring+Math.sqrt(Math.max(0,Je.r*Je.r-(e-Je.zc)*(e-Je.zc))),Ri=e=>Tt.x+Math.sqrt(Math.max(0,jt*jt-(e-Tt.z)*(e-Tt.z)));function G0(e,t){return Math.hypot(e-Tt.x,t-Tt.z)<jt||e<=0&&e>Tt.x&&t>Je.z0&&t<Je.z1||e>vn.x0&&e<vn.x1&&t>vn.z0&&t<vn.z1}function z_(e,t){if(Math.hypot(e-Tt.x,t-Tt.z)<bo.ri-.05)return 99;let n=Math.atan2(t-Tt.z,e-Tt.x),r=bo.a0-n;for(;r<0;)r+=2*To;for(;r>=2*To;)r-=2*To;return r>bo.n*bo.step?99:Pi(r)-bo.thick}function C_(){let e=[],t=Zm(1729),o=(a,i,s)=>{for(let c=Math.max(0,e.length-400);c<e.length;c++){let f=e[c];if(!(f[1]>.01)&&Math.hypot(f[0]-a,f[2]-i)<s+f[3]+.012)return!0}return!1},n=(a,i)=>{let s=a-Yo.x,c=i-Yo.z,f=Math.cos(Yo.yaw),l=Math.sin(Yo.yaw),u=(f*s-l*c)/Yo.scale,h=(l*s+f*c)/Yo.scale;return u>-1.05&&u<1.3&&h>-.7&&h<.72},r=0;for(;e.length<980&&r<6e4;){r++;let i=t()<.55?1.25+t()*2.1:1.25+Math.sqrt(t())*(jt-1.45),s=t()*2*To,c=Tt.x+Math.cos(s)*i,f=Tt.z+Math.sin(s)*i;if(!G0(c,f)||i>jt-.18||n(c,f)||L_(c,f)<.62||z_(c,f)<2.3||c<vn.x1+.9)continue;let l=.022+t()*.02;if(o(c,f,l))continue;let u=t()<.15?.22+t()*.14:.05+t()*.15;e.push([c,0,f,l,u,t()*100])}for(let a=1;a<26;a++){let i=a<12?3:2;for(let s=0;s<i;s++){let c=(a+.25+t()*.5)*bo.step,f=Ar(c),l=bo.ri+.55+t()*(bo.ro-bo.ri-.75),u=.022+t()*.016;e.push([Tt.x+Math.cos(f)*l,(a+1)*bo.rise,Tt.z+Math.sin(f)*l,u,.05+t()*.14,t()*100])}}for(let a of S1)for(let[i,s,c]of[[0,0,.26],[.06,.05,.18],[-.05,-.04,.14]])e.push([a[0]+i,a[1],a[2]+s,.024,c,t()*100]);for(let a of[vn.z0-.35,vn.z1+.35])for(let i=0;i<9;i++){let s=vn.x1+.35+t()*.5,c=a+(t()-.5)*.5;Math.hypot(s-Tt.x,c-Tt.z)>jt-.15||e.push([s,0,c,.026+t()*.014,.18+t()*.3,t()*100])}return e}function N_(e){let o=Zm(77),n=[];for(let r=0;r<14;r++){let a=e[Math.floor(o()*e.length)];n.push([a[0],a[1]+a[4],a[2]])}for(let r=0;r<12;r++){let a=n.map(()=>[0,0,0,0]);for(let i of e){let s=[i[0],i[1]+i[4],i[2]],c=0,f=1e9;n.forEach((l,u)=>{let h=(s[0]-l[0])**2+(s[1]-l[1])**2*4+(s[2]-l[2])**2;h<f&&(f=h,c=u)}),a[c][0]+=s[0],a[c][1]+=s[1],a[c][2]+=s[2],a[c][3]++}n=a.map((i,s)=>i[3]?[i[0]/i[3],i[1]/i[3],i[2]/i[3],i[3]]:n[s])}return n.filter(r=>r[3]>0).map(r=>[r[0],r[1]+.12,r[2],r[3]/e.length])}var A1=C_(),Qm=N_(A1.filter(e=>e[1]<2||e[1]>2.5)).concat(S1.map(e=>[e[0],e[1]+.35,e[2],.035]));function Jm(){return`
	vec3 roomLight(vec3 p, vec3 N, vec3 V, float gloss, out vec3 spec) {
		spec = vec3(0.0);
		vec3 col = vec3(0.0);
		float floorK = (p.y < 0.02 && N.y > 0.9) ? 1.0 : 0.0;
		${Qm.map((t,o)=>`
		{
			vec3 d = ${T_(t)} - p;
			float dd = dot(d, d);
			vec3 L = d * inversesqrt(dd);
			float fl = 0.86 + 0.08 * sin(time * ${Rn(5.3+o*.71)} + ${Rn(o*1.9)}) + 0.06 * sin(time * ${Rn(11.7+o*1.3)} + ${Rn(o*.7)});
			float w = ${Rn(t[3]*Qm.length)} * fl;
			float lam = max(dot(N, L), 0.0) * 0.82 + 0.18;
			col += w * lam / (0.7 + dd * 0.42);
			// the floor glows in pools round the candles
			col += w * floorK * 0.9 / (0.02 + dd * 7.0);
			spec += w * pow(max(dot(N, normalize(L + V)), 0.0), mix(10.0, 180.0, gloss)) * gloss * 1.6 / (0.25 + dd * 0.9);
		}`).join("")}
		col *= vec3(1.0, 0.56, 0.24) * 0.62;
		spec *= vec3(1.0, 0.62, 0.30) * 0.62;
		// light from the oculus, high above: pale by day, moonlight at night
		float up = smoothstep(0.0, ${Rn(er)}, p.y);
		vec3 sky = mix(vec3(0.10, 0.095, 0.085), vec3(0.030, 0.045, 0.085), night);
		col += sky * (0.35 + 0.65 * up) * (0.55 + 0.45 * max(N.y, 0.0)) * (0.6 + 0.4 * max(-dot(N, normalize(p - vec3(${Rn(Tt.x)}, ${Rn(er)}, ${Rn(Tt.z)}))), 0.0));
		// and straight down from it a soft pool falls on the piano and
		// whoever is playing it: it catches his shoulders, his hair, the
		// edge of the lid, and lifts them out of the dark
		float pool = 1.0 - smoothstep(0.5, 2.9, length(p.xz - vec2(${Rn(sl.stoolX)}, ${Rn(sl.keyFront+.1)})));
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
	}`}var Ft={FLOOR:0,WALL:1,STEP:2,SOFFIT:3,STRING:4,CEIL:5,OCULUS:6,HALLSTONE:7,IRON:8,RAILING:9,CANDLE:10};function e2(){let e={pos:[],nrm:[],kind:[],uv:[],idx:[]};return e.v=(t,o,n,r)=>(e.pos.push(t[0],t[1],t[2]),e.nrm.push(o[0],o[1],o[2]),e.kind.push(n),e.uv.push(r?r[0]:0,r?r[1]:0),e.pos.length/3-1),e.quad=(t,o,n,r,a,i,s)=>{let c=e.v(t,a,i,s&&s[0]),f=e.v(o,a,i,s&&s[1]),l=e.v(n,a,i,s&&s[2]),u=e.v(r,a,i,s&&s[3]);e.idx.push(c,f,l,c,l,u)},e.tri=(t,o,n,r,a)=>{let i=e.v(t,r,a),s=e.v(o,r,a),c=e.v(n,r,a);e.idx.push(i,s,c)},e}function R_(){let e=e2(),t=(n,r,a)=>[Tt.x+Math.cos(n)*r,a,Tt.z+Math.sin(n)*r],o=n=>[Math.cos(n),0,Math.sin(n)];for(let r=0;r>vn.x0-.01;r-=.25)for(let a=41.2;a<47.8;a+=.2){let i=r-.25,s=r,c=a,f=a+.2;if(!(G0(i,c)||G0(s,c)||G0(i,f)||G0(s,f)||G0((i+s)/2,(c+f)/2)))continue;let l=c,u=f;i>Ri(Je.z0)-.3&&(l=Math.max(l,Je.z0),u=Math.min(u,Je.z1),u<=l)||e.quad([i,0,l],[i,0,u],[s,0,u],[s,0,l],[0,1,0],Ft.FLOOR)}{for(let r=0;r<360;r++){let a=r/360*2*To,i=(r+1)/360*2*To,s=(a+i)/2,c=t(s,jt,0),f=0;c[0]>Tt.x&&c[2]>Je.z0-.02&&c[2]<Je.z1+.02&&(f=Math.max(Yf(Math.min(Math.max(t(a,jt,0)[2],Je.z0),Je.z1)),Yf(Math.min(Math.max(t(i,jt,0)[2],Je.z0),Je.z1)))),c[0]<Tt.x&&c[2]>vn.z0-.02&&c[2]<vn.z1+.02&&(f=vn.top);let l=a*jt,u=i*jt,h=o(a).map(p=>-p),d=o(i).map(p=>-p),v=[f];for(let p=Math.ceil(f/2.5)*2.5;p<er;p+=2.5)p>f+.01&&v.push(p);v.push(er);for(let p=0;p<v.length-1;p++){let m=v[p],g=v[p+1],y=e.v(t(a,jt,m),h,Ft.WALL,[l,m]),b=e.v(t(i,jt,m),d,Ft.WALL,[u,m]),k=e.v(t(i,jt,g),d,Ft.WALL,[u,g]),E=e.v(t(a,jt,g),h,Ft.WALL,[l,g]);e.idx.push(y,b,k,y,k,E)}}for(let[r,a,i]of[[6.55,.22,.07],[0,.32,.05]])for(let s=0;s<360;s++){let c=s/360*2*To,f=(s+1)/360*2*To,l=(c+f)/2,u=t(l,jt,0);if(r<1&&(u[0]>Tt.x&&u[2]>Je.z0&&u[2]<Je.z1||u[0]<Tt.x&&u[2]>vn.z0&&u[2]<vn.z1))continue;let h=jt-i;e.quad(t(c,h,r),t(f,h,r),t(f,h,r+a),t(c,h,r+a),o(l).map(d=>-d),Ft.WALL,[[c*jt,r+100],[f*jt,r+100],[f*jt,r+a+100],[c*jt,r+a+100]]),e.quad(t(c,h,r+a),t(f,h,r+a),t(f,jt,r+a),t(c,jt,r+a),[0,1,0],Ft.WALL,[[0,200],[0,200],[0,200],[0,200]]),r>1&&e.quad(t(c,jt,r),t(f,jt,r),t(f,h,r),t(c,h,r),[0,-1,0],Ft.WALL,[[0,200],[0,200],[0,200],[0,200]])}}{let n=Ba.x;for(let[a,i]of[[Je.z0,1],[Je.z1,-1]]){let s=Ri(a);e.quad([n,0,a],[s,0,a],[s,Je.spring,a],[n,Je.spring,a],[0,0,i],Ft.WALL,[[n,0],[s,0],[s,Je.spring],[n,Je.spring]])}let r=40;for(let a=0;a<r;a++){let i=a/r*To,s=(a+1)/r*To,c=Je.zc-Math.cos(i)*Je.r,f=Je.zc-Math.cos(s)*Je.r,l=Je.spring+Math.sin(i)*Je.r,u=Je.spring+Math.sin(s)*Je.r,h=[0,-Math.sin(i),Math.cos(i)],d=[0,-Math.sin(s),Math.cos(s)],v=e.v([n,l,c],h,Ft.WALL,[n,i*Je.r]),p=e.v([Ri(c),l,c],h,Ft.WALL,[Ri(c),i*Je.r]),m=e.v([Ri(f),u,f],d,Ft.WALL,[Ri(f),s*Je.r]),g=e.v([n,u,f],d,Ft.WALL,[n,s*Je.r]);e.idx.push(v,p,m,v,m,g)}}{let n=Ba.x,r=.05;for(let f=Ba.z0;f<Ba.z1-1e-6;f+=r){let l=f,u=Math.min(Ba.z1,f+r),d=(v=>v>Je.z0&&v<Je.z1)((l+u)/2)?Math.max(Yf(l),Yf(u)):0;e.quad([n,d,l],[n,d,u],[n,Ba.top,u],[n,Ba.top,l],[1,0,0],Ft.HALLSTONE,[[l,d],[u,d],[u,Ba.top],[l,Ba.top]])}let a=.32,i=.06,s=n+i,c=36;for(let f=0;f<c;f++){let l=f/c*To,u=(f+1)/c*To,h=(g,y)=>[s,Je.spring+Math.sin(g)*y,Je.zc-Math.cos(g)*y],d=Je.r,v=Je.r+a;e.quad(h(l,d),h(u,d),h(u,v),h(l,v),[1,0,0],Ft.HALLSTONE,[[0,300],[0,300],[1,300],[1,300]]);let p=(g,y,b)=>[b,Je.spring+Math.sin(g)*y,Je.zc-Math.cos(g)*y],m=[0,Math.sin((l+u)/2),-Math.cos((l+u)/2)];e.quad(p(l,v,n),p(u,v,n),p(u,v,s),p(l,v,s),m,Ft.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),e.quad(p(l,d,n),p(u,d,n),p(u,d,s),p(l,d,s),m.map(g=>-g),Ft.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}for(let[f,l,u]of[[Je.z0-a,Je.z0,-1],[Je.z1,Je.z1+a,1]]){e.quad([s,0,f],[s,0,l],[s,Je.spring,l],[s,Je.spring,f],[1,0,0],Ft.HALLSTONE,[[0,300],[1,300],[1,300],[0,300]]);let h=u<0?f:l,d=u<0?l:f;e.quad([n,0,h],[s,0,h],[s,Je.spring,h],[n,Je.spring,h],[0,0,u],Ft.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),e.quad([n,0,d],[s,0,d],[s,Je.spring,d],[n,Je.spring,d],[0,0,-u],Ft.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);let v=Je.spring-.16,p=.16,m=.11,g=Math.min(f,l)-.05,y=Math.max(f,l)+.05;e.quad([n+m,v,g],[n+m,v,y],[n+m,v+p,y],[n+m,v+p,g],[1,0,0],Ft.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),e.quad([n,v+p,g],[n+m,v+p,g],[n+m,v+p,y],[n,v+p,y],[0,1,0],Ft.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),e.quad([n,v,g],[n,v,y],[n+m,v,y],[n+m,v,g],[0,-1,0],Ft.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);for(let b of[g,y])e.quad([n,v,b],[n+m,v,b],[n+m,v+p,b],[n,v+p,b],[0,0,b===g?-1:1],Ft.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}{let f=Je.spring+Je.r-.05,l=Je.spring+Je.r+a+.12,u=.16,h=.22,d=s+.04;e.quad([d,f,Je.zc-u],[d,f,Je.zc+u],[d,l,Je.zc+h],[d,l,Je.zc-h],[1,0,0],Ft.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);for(let v of[-1,1])e.quad([n,f,Je.zc+v*u],[d,f,Je.zc+v*u],[d,l,Je.zc+v*h],[n,l,Je.zc+v*h],[0,0,v],Ft.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);e.quad([n,l,Je.zc-h],[d,l,Je.zc-h],[d,l,Je.zc+h],[n,l,Je.zc+h],[0,1,0],Ft.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}}{let{x0:n,x1:r,z0:a,z1:i,top:s}=vn;e.quad([n,0,a],[n,0,i],[n,s,i],[n,s,a],[1,0,0],Ft.WALL,[[a,0],[i,0],[i,s],[a,s]]);for(let[f,l]of[[a,1],[i,-1]]){let u=Tt.x-Math.sqrt(jt*jt-(f-Tt.z)*(f-Tt.z));e.quad([n,0,f],[u,0,f],[u,s,f],[n,s,f],[0,0,l],Ft.WALL,[[n,0],[u,0],[u,s],[n,s]])}let c=24;for(let f=0;f<c;f++){let l=a+(i-a)*f/c,u=a+(i-a)*(f+1)/c,h=Tt.x-Math.sqrt(jt*jt-(l-Tt.z)**2),d=Tt.x-Math.sqrt(jt*jt-(u-Tt.z)**2);e.quad([n,s,l],[h,s,l],[d,s,u],[n,s,u],[0,-1,0],Ft.WALL,[[0,200],[0,200],[0,200],[0,200]])}for(let f=0;f<c;f++){let l=a+(i-a)*f/c,u=a+(i-a)*(f+1)/c,h=Tt.x-Math.sqrt(jt*jt-(l-Tt.z)**2)+.05,d=Tt.x-Math.sqrt(jt*jt-(u-Tt.z)**2)+.05;e.quad([h,s-.3,l],[d,s-.3,u],[d,s,u],[h,s,l],[1,0,0],Ft.WALL,[[0,200],[0,200],[0,200],[0,200]])}}{let r=[1.15,1.6,2.3,3,3.35,4.2,jt];for(let a=0;a<120;a++){let i=a/120*2*To,s=(a+1)/120*2*To,c=(i+s)/2;c>To&&(c-=2*To);for(let f=0;f<r.length-1;f++){let l=r[f],u=r[f+1],h=c*180/To;l>=3.3&&h>8&&h<85||e.quad(t(i,l,er),t(i,u,er),t(s,u,er),t(s,l,er),[0,-1,0],Ft.CEIL,[[i*l,l],[i*u,u],[s*u,u],[s*l,l]])}e.quad(t(i,1.15,er),t(s,1.15,er),t(s,1.15,er+.7),t(i,1.15,er+.7),o(c).map(f=>-f),Ft.CEIL,[[0,400],[0,400],[0,400],[0,400]]),e.tri([Tt.x,er+.7,Tt.z],t(s,1.15,er+.7),t(i,1.15,er+.7),[0,-1,0],Ft.OCULUS)}}{let n=bo.ri,r=bo.ro,a=bo.n*bo.step;for(let c=0;c<bo.n;c++){let f=c*bo.step,l=(c+1)*bo.step,u=Ar(f),h=Ar(l),d=(c+1)*bo.rise,v=c*bo.rise,p=2;for(let y=0;y<p;y++){let b=u+(h-u)*y/p-(y===0?.004:0),k=u+(h-u)*(y+1)/p;e.quad(t(b,n,d),t(b,r,d),t(k,r,d),t(k,n,d),[0,1,0],Ft.STEP,[[n*b,c],[r*b,c],[r*k,c],[n*k,c]])}let m=[-Math.sin(u),0,Math.cos(u)],g=u-.004;e.quad(t(g,n,v),t(g,r,v),t(g,r,d),t(g,n,d),m,Ft.STEP,[[n*u,c+.5],[r*u,c+.5],[r*u,c+.5],[n*u,c+.5]]),e.quad(t(u,n,Pi(f)+.06),t(h,n,Pi(l)+.06),t(h,n,d),t(g,n,d),o((u+h)/2).map(y=>-y),Ft.STEP,[[0,500],[0,500],[0,500],[0,500]])}let i=Math.ceil(a/(1.2*To/180)),s=[n,n+.6,n+1.2,r];for(let c=0;c<i;c++){let f=c/i*a,l=(c+1)/i*a,u=Ar(f),h=Ar(l),d=Pi(f),v=Pi(l),p=d-bo.thick,m=v-bo.thick,g=o(u).map(N=>-N),y=o(h).map(N=>-N),b=e.v(t(u,n,p),g,Ft.STRING,[f*n,0]),k=e.v(t(h,n,m),y,Ft.STRING,[l*n,0]),E=e.v(t(h,n,v+.06),y,Ft.STRING,[l*n,1]),L=e.v(t(u,n,d+.06),g,Ft.STRING,[f*n,1]);e.idx.push(b,k,E,b,E,L);for(let N=0;N<s.length-1;N++){let W=s[N],O=s[N+1],te=D=>{let re=o(D);return[-re[0]*.12,-.99,-re[2]*.12]};e.quad(t(u,W,p),t(u,O,p),t(h,O,m),t(h,W,m),te((u+h)/2),Ft.SOFFIT,[[f*W,W],[f*O,O],[l*O,O],[l*W,W]])}}}return e}function P_(){let e=e2(),t=bo.ri+.045,o=bo.n*bo.step,n=Math.ceil(o/(.8*To/180)),r=.92,a=(c,f,l)=>[Tt.x+Math.cos(c)*f,l,Tt.z+Math.sin(c)*f],i=c=>[Math.cos(c),0,Math.sin(c)];for(let c=0;c<n;c++){let f=c/n*o,l=(c+1)/n*o,u=Ar(f),h=Ar(l),d=Pi(f)+.06,v=Pi(l)+.06,p=i(u).map(N=>-N),m=i(h).map(N=>-N),g=f*t,y=l*t,b=e.v(a(u,t,d),p,Ft.RAILING,[g,0]),k=e.v(a(h,t,v),m,Ft.RAILING,[y,0]),E=e.v(a(h,t,v+r),m,Ft.RAILING,[y,r]),L=e.v(a(u,t,d+r),p,Ft.RAILING,[g,r]);e.idx.push(b,k,E,b,E,L)}((c,f,l,u)=>{let d=p=>{let m=Ar(p),g=Pi(p)+.06+f,y=a(m,t+c,g),b=i(m),k=[];for(let E=0;E<8;E++){let L=E/8*2*To,N=[b[0]*Math.cos(L),Math.sin(L),b[2]*Math.cos(L)];k.push([[y[0]+N[0]*l,y[1]+N[1]*l,y[2]+N[2]*l],N])}return k},v=d(0);for(let p=1;p<=n;p++){let m=d(p/n*o);for(let g=0;g<8;g++){let y=(g+1)%8,b=e.v(v[g][0],v[g][1],u),k=e.v(m[g][0],m[g][1],u),E=e.v(m[y][0],m[y][1],u),L=e.v(v[y][0],v[y][1],u);e.idx.push(b,k,E,b,E,L)}v=m}})(0,r+.02,.028,Ft.IRON);for(let c of S1){let f=Math.atan2(c[2]-Tt.z,c[0]-Tt.x),l=[Math.cos(f),0,Math.sin(f)],u=12;for(let p=0;p<u;p++){let m=p/u*2*To,g=(p+1)/u*2*To,y=(b,k,E)=>[c[0]+Math.cos(b)*k,E,c[2]+Math.sin(b)*k];e.quad(y(m,.16,c[1]),y(g,.16,c[1]),y(g,.13,c[1]-.05),y(m,.13,c[1]-.05),[Math.cos(m)*.6,.8,Math.sin(m)*.6],Ft.IRON),e.quad(y(m,.16,c[1]),y(g,.16,c[1]),y(g,0,c[1]+.002),y(m,0,c[1]+.002),[0,1,0],Ft.IRON)}let h=[c[0]+l[0]*.16,c[1]-.35,c[2]+l[2]*.16],d=[-l[2],0,l[0]],v=.018;e.quad([h[0]-d[0]*v,h[1],h[2]-d[2]*v],[h[0]+d[0]*v,h[1],h[2]+d[2]*v],[c[0]+d[0]*v,c[1]-.05,c[2]+d[2]*v],[c[0]-d[0]*v,c[1]-.05,c[2]-d[2]*v],[-l[0],.5,-l[2]],Ft.IRON)}{let c=Ar(0),f=a(c,t,0),l=10;for(let u=0;u<l;u++){let h=u/l*2*To,d=(u+1)/l*2*To,v=(p,m,g)=>[f[0]+Math.cos(p)*m,g,f[2]+Math.sin(p)*m];e.quad(v(h,.035,0),v(d,.035,0),v(d,.035,r+.1),v(h,.035,r+.1),[Math.cos((h+d)/2),0,Math.sin((h+d)/2)],Ft.IRON),e.quad(v(h,.06,r+.1),v(d,.06,r+.1),v(d,.03,r+.2),v(h,.03,r+.2),[Math.cos((h+d)/2)*.8,.6,Math.sin((h+d)/2)*.8],Ft.IRON)}}return e}function O_(){let e=[],t=[],o=[],n=[];for(let a of A1){let[i,s,c,f,l,u]=a,h=e.length/3;for(let v=0;v<=7;v++){let p=v/7*2*To+u,m=Math.cos(p),g=Math.sin(p);e.push(i+m*f,s,c+g*f,i+m*f,s+l,c+g*f),t.push(m,0,g,m,0,g),o.push(0,l,u,1,l,u)}for(let v=0;v<7;v++){let p=h+v*2;n.push(p,p+2,p+3,p,p+3,p+1)}let d=e.length/3;e.push(i,s+l-.006,c),t.push(0,1,0),o.push(2,l,u);for(let v=0;v<7;v++){let p=v/7*2*To+u;e.push(i+Math.cos(p)*f,s+l,c+Math.sin(p)*f),t.push(0,1,0),o.push(1,l,u)}for(let v=0;v<7;v++)n.push(d,d+1+v,d+1+(v+1)%7)}return{pos:e,nrm:t,info:o,idx:n}}function I_(){let e=[],t=[],o=[],n=[];for(let r of A1){let[a,i,s,,c,f]=r,l=e.length/3;for(let u of[[-1,0],[1,0],[1,1],[-1,1]])e.push(a,i+c+.004,s),t.push(u[0],u[1]),o.push(f);n.push(l,l+1,l+2,l,l+2,l+3)}return{ctr:e,corner:t,ph:o,idx:n}}function F_(e){let t=new DataView(e),o=t.getUint32(4,!0),n=t.getUint32(8,!0),r=[],a=[];for(let g=0;g<3;g++)r.push(t.getFloat32(12+g*4,!0)),a.push(t.getFloat32(24+g*4,!0));let i=36,s=new Uint16Array(e,i,o*3);i+=o*6;let c=new Uint16Array(e,i,n);i+=n*2;let f=new Int8Array(e,i,o*3);i+=o*3;let l=new Uint8Array(e,i,o),u=new Float32Array(o*3),h=new Float32Array(o*3),d=new Float32Array(o),v=Math.cos(Yo.yaw),p=Math.sin(Yo.yaw),m=Yo.scale;for(let g=0;g<o;g++){let y=(r[0]+s[g*3]/65535*a[0])*m,b=(r[1]+s[g*3+1]/65535*a[1])*m,k=(r[2]+s[g*3+2]/65535*a[2])*m;u[g*3]=Yo.x+v*y+p*k,u[g*3+1]=b,u[g*3+2]=Yo.z-p*y+v*k;let E=f[g*3]/127,L=f[g*3+1]/127,N=f[g*3+2]/127;h[g*3]=v*E+p*N,h[g*3+1]=L,h[g*3+2]=-p*E+v*N,d[g]=l[g]}return{pos:u,nrm:h,mat:d,idx:new Uint32Array(c)}}function G_(){let e=[],t=(u,h)=>[Tt.x+Math.cos(u)*h,Tt.z+Math.sin(u)*h];e.push([[0,Je.z0],[Ri(Je.z0),Je.z0]]),e.push([[Ri(Je.z1),Je.z1],[0,Je.z1]]);let o=Math.asin((Je.z1-Tt.z)/jt),n=72;for(let u=0;u<n;u++){let h=o+u/n*(2*To-2*o),d=o+(u+1)/n*(2*To-2*o);e.push([t(h,jt-.25),t(d,jt-.25)])}let r=Qf[0]-.55+.35;e.push([[r,vn.z0],[r,vn.z1]]);let a=2.4/bo.k,i=12;for(let u=0;u<i;u++){let h=Ar(u/i*a),d=Ar((u+1)/i*a);e.push([t(h,bo.ri-.2),t(d,bo.ri-.2)])}e.push([t(Ar(0),bo.ri-.2),t(Ar(0),jt)]),e.push([t(Ar(a),bo.ri-.2),t(Ar(a),jt)]);let s=Math.cos(Yo.yaw),c=Math.sin(Yo.yaw),f=Yo.scale,l=[[-1,-.62],[1.25,-.62],[1.25,.62],[-1,.62]].map(([u,h])=>[Yo.x+(s*u+c*h)*f,Yo.z+(-c*u+s*h)*f]);for(let u=0;u<4;u++)e.push([l[u],l[(u+1)%4]]);return e}Gr.exports=e=>{let t=R_(),o=P_(),n=O_(),r=I_(),a=Ni(),i=`
	precision highp float;
	${A_.GLSL}
	uniform float time;
	${Jm()}
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
	}`,s=`
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
	}`,c=e({vert:s,frag:`${i}
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
				base *= 1.0 - 0.25 * smoothstep(3.0, ${Rn(er)}, v_pos.y);
			} else if (k < 2.5) {
				// the steps: a greyer, harder stone, worn paler in the middle
				float r = length(v_pos.xz - vec2(${Rn(Tt.x)}, ${Rn(Tt.z)}));
				base = limestone(v_pos.xz * 1.4 + v_uv * 0.3) * vec3(0.90, 0.88, 0.86);
				base *= 1.0 + 0.10 * (1.0 - smoothstep(0.0, 0.6, abs(r - ${Rn((bo.ri+bo.ro)/2)})));
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
				vec2 q = v_pos.xz - vec2(${Rn(Tt.x)}, ${Rn(Tt.z)});
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
		}`,attributes:{position:t.pos,normal:t.nrm,kind:t.kind,uv:t.uv},elements:new Uint32Array(t.idx),cull:{enable:!1}}),f=e({vert:s,frag:`${i}
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
		}`,frag:`${i}
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
		}`,attributes:{position:n.pos,normal:n.nrm,info:n.info},elements:new Uint32Array(n.idx),cull:{enable:!1}}),u=e({vert:`
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
		}`,attributes:{ctr:r.ctr,corner:r.corner,ph:r.ph},elements:new Uint32Array(r.idx),uniforms:{halo:e.prop("halo")},depth:{enable:!0,mask:!1},cull:{enable:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),h=null;fetch("res/piano.bin").then(m=>{if(!m.ok)throw new Error("Could not load piano.bin");return m.arrayBuffer()}).then(m=>{let g=F_(m);h=e({vert:`
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
				}`,frag:`${i}
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
				}`,attributes:{position:g.pos,normal:g.nrm,mat:g.mat},elements:g.idx,cull:{enable:!1}})}).catch(m=>console.error(m));let d=(()=>{let m=[],g=[],y=[],b=[],E=[Tt.x,er-.3,Tt.z],L=[sl.stoolX,.02,sl.keyFront+.1],N=1.25,W=2.35;for(let O=0;O<=40;O++){let te=O/40*2*To,D=Math.cos(te),re=Math.sin(te);m.push(E[0]+D*N,E[1],E[2]+re*N,L[0]+D*W,L[1],L[2]+re*W),g.push(D,.08,re,D,.08,re),y.push(1,0)}for(let O=0;O<40;O++){let te=O*2;b.push(te,te+1,te+3,te,te+3,te+2)}return{pos:m,nrm:g,hh:y,idx:b}})(),v=e({vert:`
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
		}`,attributes:{position:d.pos,normal:d.nrm,hh:d.hh},elements:d.idx,depth:{enable:!0,mask:!1},cull:{enable:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});function p(m){let g=m&&m.reflected;c(),f(),l(),h&&h(),g||(v(),u({halo:1}),u({halo:0}))}return p};Gr.exports.C=Tt;Gr.exports.R=jt;Gr.exports.PASS=Je;Gr.exports.SURR=Ba;Gr.exports.OFF=Qf;Gr.exports.BAY=vn;Gr.exports.PATH=Kf;Gr.exports.PIANO=Yo;Gr.exports.PLAY=sl;Gr.exports.TOP=er;Gr.exports.roomGLSL=Jm;Gr.exports.segments=G_});var f2=de((lA,l2)=>{"use strict";var D_=ws(),{addFlutedColumn:t2,addStatue:$_,addPlant:q_}=Lm(),o2=Li(),H_=C0(),Aa=ir(),U_=fa(),$0=Oi(),fo=14,gn=Aa.C.hallEnd+.35,Oo=8,Mo=.35,T1=1.15,L1=1.15,z1=[18,29,40],B_=[[[0,0],[0,$0.PASS.z0]],[[0,$0.PASS.z1],[0,gn]],[[fo,gn],[fo,0]],[[0,0],[fo,0]],[[fo,gn],[0,gn]]],i2=[];for(let e of z1)for(let t of[1.25,fo-1.25]){let o=T1/2,n=L1/2;i2.push([[t-o,e-n],[t+o,e-n]],[[t+o,e-n],[t+o,e+n]],[[t+o,e+n],[t-o,e+n]],[[t-o,e+n],[t-o,e-n]])}var Jf=12,s2=2.95,c2=.62,oh=s2+c2,eh=[{file:"venus.bin",x:1.85,z:gn-1.6,yaw:2.67,height:5.2,pedestal:!0,mat:1},{file:"david.bin",x:fo-2.1,z:gn-1.6,yaw:-2.67,height:5.2,pedestal:!0,mat:1},{file:"pieta.bin",x:1.75,z:5.9,yaw:Math.PI/2,height:3.6,base:1,mat:1},{file:"spinario.bin",x:Aa.NICHE_X[0],z:Aa.NICHE_STATUE_Z,yaw:-.35,height:1.85,base:Aa.NICHE_PLINTH_TOP,mat:3},{file:"charioteer.bin",x:Aa.NICHE_X[1],z:Aa.NICHE_STATUE_Z+.1,yaw:0,height:2.95,base:Aa.NICHE_PLINTH_TOP,mat:3}],j_={x0:Mo,x1:3.15,z0:3.6,z1:8.2,top:1},n2=.8,nh=1.17,cl=[];[{z:10.4,dz:-.7},{z:19.2,dz:.7},{z:27.8,dz:-.7}].forEach((e,t)=>{cl.push({x:1,z:e.z,seed:11+t*7,away:[1,e.dz]}),cl.push({x:fo-1,z:e.z,seed:53+t*5,away:[-1,e.dz]})});function C1(e,t,o,n){return[[[e-o,t-n],[e+o,t-n]],[[e+o,t-n],[e+o,t+n]],[[e+o,t+n],[e-o,t+n]],[[e-o,t+n],[e-o,t-n]]]}var rh=[];for(let e of[-1,1])rh.push(...C1(fo/2+e*oh,Jf,.85,.85));for(let e of eh.filter(t=>t.pedestal))rh.push(...C1(e.x,e.z,nh*1.1,nh*1.1));for(let e of cl)rh.push(...C1(e.x,e.z,.42,.42));var W_=B_.concat(i2,rh,$0.segments());function V_(e){let o=new Map,n=(r,a,i)=>{let s=r+":"+a;o.has(s)||o.set(s,[]);let c=o.get(s);c.includes(i)||c.push(i)};for(let r of e){let a=Math.floor(Math.min(r[0][0],r[1][0])/4)-1,i=Math.floor(Math.max(r[0][0],r[1][0])/4)+1,s=Math.floor(Math.min(r[0][1],r[1][1])/4)-1,c=Math.floor(Math.max(r[0][1],r[1][1])/4)+1;for(let f=a;f<=i;f++)for(let l=s;l<=c;l++)n(f,l,r)}return{get(r,a){let i=Math.floor(r/4),s=Math.floor(a/4),c=[];for(let f=-1;f<=1;f++)for(let l=-1;l<=1;l++){let u=o.get(i+f+":"+(s+l));u&&c.push(...u)}return[...new Set(c)]}}}var th=[],mn={curMat:[0,0,0]};function N1(e,t,o,n,r,a,i){let s=e.length/3;e.push(...o,...n,...r,...a),t.push(...i,...i,...i,...i);let c=mn.curMat;return th.push(...c,...c,...c,...c),[s,s+2,s+1,s+1,s+2,s+3]}function wo(e,t,o,n,r,a,i,s,c){let f=(l,u,h,d,v)=>{o.push(...N1(e,t,l,u,h,d,v))};f([n,r,a],[i,r,a],[n,s,a],[i,s,a],[0,0,-1]),f([i,r,c],[n,r,c],[i,s,c],[n,s,c],[0,0,1]),f([n,r,c],[n,r,a],[n,s,c],[n,s,a],[-1,0,0]),f([i,r,a],[i,r,c],[i,s,a],[i,s,c],[1,0,0]),f([n,s,a],[i,s,a],[n,s,c],[i,s,c],[0,1,0]),f([n,r,c],[i,r,c],[n,r,a],[i,r,a],[0,-1,0])}function D0(e,t,o,n,r){let a=mn,i=a.vert(e,r),s=a.vert(t,r),c=a.vert(o,r),f=a.vert(n,r);a.tri(i,s,c),a.tri(s,f,c)}function r2(e,t,o,n,r,a,i){for(let s=0;s<i;s++){let c=Math.PI*s/i,f=Math.PI*(s+1)/i,l=Math.cos(c),u=Math.sin(c),h=Math.cos(f),d=Math.sin(f),v=[e+o*l,t+o*u],p=[e+o*h,t+o*d],m=[e+n*l,t+n*u],g=[e+n*h,t+n*d];D0([v[0],v[1],r],[p[0],p[1],r],[m[0],m[1],r],[g[0],g[1],r],[0,0,-1]),D0([v[0],v[1],a],[p[0],p[1],a],[m[0],m[1],a],[g[0],g[1],a],[0,0,1]);let y=(c+f)/2;D0([v[0],v[1],r],[p[0],p[1],r],[v[0],v[1],a],[p[0],p[1],a],[-Math.cos(y),-Math.sin(y),0]),D0([m[0],m[1],r],[g[0],g[1],r],[m[0],m[1],a],[g[0],g[1],a],[Math.cos(y),Math.sin(y),0])}}function X_(e,t,o,n,r,a,i){for(let s=0;s<i;s++){let c=Math.PI*s/i,f=Math.PI*(s+1)/i,l=e+o*Math.cos(c),u=t+o*Math.sin(c),h=e+o*Math.cos(f),d=t+o*Math.sin(f);D0([l,u,r],[h,d,r],[l,n,r],[h,n,r],[0,0,-1]),D0([l,u,a],[h,d,a],[l,n,a],[h,n,a],[0,0,1])}}function Y_(e,t,o,n){let r=fo/2,a=s2,i=3,s=a+.42,c=s+.15,f=c2,l=oh,u=5.98,h=n-.45,d=n+.45,v=64,p=t2(mn,r-l,n,0,u,f);t2(mn,r+l,n,0,u,f),mn.curMat=[0,0,0],r2(r,i,a,s,h,d,v),r2(r,i,s,c,h-.07,d+.07,v),X_(r,i,c,p+.05,h,d,v);for(let g of[-1,1]){let y=r+g*(c-.02),b=r+g*l;wo(e,t,o,Math.min(y,b),i,h,Math.max(y,b),p+.05,d)}for(let g of[-1,1]){let y=r+g*(a-.05),b=r+g*(a+.85);wo(e,t,o,Math.min(y,b),i-.16,n-.6,Math.max(y,b),i,n+.6)}let m=l+f*1.42+.45;wo(e,t,o,r-m,p,n-.7,r+m,p+.44,n+.7),wo(e,t,o,r-m+.12,p+.44,n-.62,r+m-.12,p+.7,n+.62),wo(e,t,o,r-m-.1,p+.7,n-.84,r+m+.1,p+.84,n+.84),wo(e,t,o,r-m-.22,p+.84,n-.96,r+m+.22,p+1,n+.96),wo(e,t,o,r-.3,i+a-.1,n-.56,r+.3,p,n+.56)}function a2(e,t,o,n,r){wo(e,t,o,n-.72,0,r-.72,n+.72,.2,r+.72),wo(e,t,o,n-.58,.2,r-.58,n+.58,.4,r+.58),wo(e,t,o,n-T1/2,.4,r-L1/2,n+T1/2,Oo-1.35,r+L1/2),wo(e,t,o,n-.67,.42,r-.67,n+.67,.62,r+.67),wo(e,t,o,n-.67,Oo-1.58,r-.67,n+.67,Oo-1.35,r+.67),wo(e,t,o,n-.82,Oo-1.35,r-.82,n+.82,Oo-1.05,r+.82),wo(e,t,o,n-.66,Oo-1.05,r-.66,n+.66,Oo-.78,r+.66),wo(e,t,o,n-.92,Oo-.78,r-.92,n+.92,Oo-.55,r+.92),wo(e,t,o,n-.78,Oo-.55,r-.78,n+.78,Oo-.3,r+.78),wo(e,t,o,n-.92,Oo-.3,r-.92,n+.92,Oo-.1,r+.92)}function Zf(e,t,o,n,r){r==="left"?(wo(e,t,o,-.08,1,n-3.8/2,.14,5.7,n+3.8/2),wo(e,t,o,-.08-.04,1+.18,n-3.8/2+.18,.18,5.7-.18,n+3.8/2-.18)):(wo(e,t,o,fo-.14,1,n-3.8/2,fo+.08,5.7,n+3.8/2),wo(e,t,o,fo-.18,1+.18,n-3.8/2+.18,fo+.08+.04,5.7-.18,n+3.8/2-.18))}function K_(e,t,o,n){wo(e,t,o,.65,Oo-.16,n-1.65,.65+.22,Oo,n+1.65),wo(e,t,o,fo-.65-.22,Oo-.16,n-1.65,fo-.65,Oo,n+1.65),wo(e,t,o,.65,Oo-.16,n-1.65,fo-.65,Oo,n-1.43),wo(e,t,o,.65,Oo-.16,n+1.43,fo-.65,Oo,n+1.65),o.push(...N1(e,t,[.65+.22,Oo-.16,n-1.43],[fo-.65-.22,Oo-.16,n-1.43],[.65+.22,Oo-.16,n+1.43],[fo-.65-.22,Oo-.16,n+1.43],[0,-1,0]))}l2.exports=function(){let e=[],t=[],o=[];th=[],mn=D_.createBuilder(e,t,o,th),o.push(...N1(e,t,[0,0,0],[fo,0,0],[0,0,gn],[fo,0,gn],[0,1,0])),H_.addSkylight(mn,[0,0,0],gn),mn.curMat=[0,0,0];{let c=$0.SURR;wo(e,t,o,-Mo,0,0,Mo,Oo,c.z0),wo(e,t,o,-Mo,0,c.z1,Mo,Oo,gn),wo(e,t,o,-Mo,c.top,c.z0,Mo,Oo,c.z1)}wo(e,t,o,fo-Mo,0,Aa.C.z1,fo+Mo,Oo,gn-Mo),wo(e,t,o,fo-Mo-.12,0,Aa.C.z1+2*Mo,fo-Mo,.42,gn-Mo),wo(e,t,o,fo-Mo-.07,.42,Aa.C.z1+2*Mo,fo-Mo,.5,gn-Mo);for(let[c,f]of[[0,$0.SURR.z0],[$0.SURR.z1,gn-Mo]])wo(e,t,o,Mo,0,c,Mo+.12,.42,f),wo(e,t,o,Mo,.42,c,Mo+.07,.5,f);wo(e,t,o,Mo,0,gn-Mo-.12,fo-Mo,.42,gn-Mo),wo(e,t,o,Mo,.42,gn-Mo-.07,fo-Mo,.5,gn-Mo),o2.addEntranceWall(mn),o2.addFrames(mn),mn.curMat=[0,0,0],wo(e,t,o,-Mo,0,gn-Mo,fo+Mo,Oo,gn+Mo),Y_(e,t,o,Jf);for(let c of z1)a2(e,t,o,1.25,c),a2(e,t,o,fo-1.25,c);Zf(e,t,o,22,"left"),Zf(e,t,o,25,"right"),Zf(e,t,o,33,"left"),Zf(e,t,o,36,"right");let n=[4,9,34,39,44,49];for(let c of n)K_(e,t,o,c);Aa.addWing(mn),mn.curMat=[0,0,0];for(let c of eh.filter(f=>f.pedestal))$_(mn,c.x,c.z,nh,n2);{let c=j_;mn.curMat=[0,0,0],mn.box(c.x0,0,c.z0-.08,c.x1+.08,.16,c.z1+.08,[0,0,0]),mn.box(c.x0,.16,c.z0+.04,c.x1-.04,c.top-.14,c.z1-.04,[0,0,0]),mn.box(c.x0,c.top-.14,c.z0-.02,c.x1+.03,c.top-.06,c.z1+.02,[0,0,0]),mn.box(c.x0,c.top-.06,c.z0-.06,c.x1+.07,c.top,c.z1+.06,[0,0,0])}U_.addAlcove(mn);for(let c of cl)q_(mn,c.x,c.z,c.seed,1,c.away);mn.curMat=[0,0,0];let r=[[[fo,gn-.35],[0,gn-.35]],[[0,3],[0,10]],[[fo,15],[fo,22]],[[0,24],[0,31]],[[fo,33],[fo,40]],[[0,41],[0,46]]],a=V_(W_),i=(c,f)=>{let l=0,u=1/0;return r.forEach((h,d)=>{let v=(h[0][0]+h[1][0])/2,p=(h[0][1]+h[1][1])/2,m=Math.hypot(c-v,f-p);m<u&&(u=m,l=d)}),l},s=[];for(let c=0;c<10;c++)s.push({c:[0,0,0,0],d:[1,0,0,0]});return{placements:r,lights:s,statues:eh,occluders:[...z1.flatMap(c=>[[1.25,c,.78],[fo-1.25,c,.78]]),[fo/2-oh,Jf,.86],[fo/2+oh,Jf,.86],...eh.filter(c=>c.pedestal).map(c=>[c.x,c.z,nh*1.12]),...cl.map(c=>[c.x,c.z,.34])],pedestalTop:n2,mat:th,getAreaIndex:i,getGridSegments:(c,f)=>a.get(c,f),getGridParts:(c,f)=>a.get(c,f),position:e,normal:t,elements:o}}});var R1=de((fA,h2)=>{"use strict";var{doorLightGLSL:Q_}=Li(),{skylightGLSL:Z_}=C0(),{windowLightGLSL:J_,C:Yr}=ir(),{alcoveLightGLSL:e6}=fa(),ha=e=>e.toFixed(4),t6=(()=>{let e=[-.22,.6,-.77],t=Math.hypot(e[0],e[1],e[2]);return e.map(o=>(o/t).toFixed(4)).join(", ")})();h2.exports=(e,t,o,n)=>{let a=(t.occluders||[]).slice(0,24).map(([d,v,p])=>`ao = min(ao, contact(v_pos.xz, vec2(${d.toFixed(3)}, ${v.toFixed(3)}), ${p.toFixed(3)}));`).join(`
      `),i={c:[0,0,0,0],d:[1,0,0,0]},s=-1,c=[],f=d=>{let v=d&&d.tick!==void 0?d.tick:0;if(v!==s||c.length===0){s=v;let p=t.viewer||[7,2,20];for(c=t.lights.filter(m=>m.c[3]>.5).map(m=>({l:m,d:Math.hypot(m.c[0]-p[0],m.c[2]-p[2])})).sort((m,g)=>m.d-g.d).slice(0,8).map(m=>m.l);c.length<8;)c.push(i)}return c},l={},u="",h="";for(let d=0;d<8;d++)l["lightC"+d]=v=>f(v)[d].c,l["lightD"+d]=v=>f(v)[d].d,u+="uniform vec4 lightC"+d+", lightD"+d+`;
`,h+="pic += pictureLight(lightC"+d+", lightD"+d+`, v_pos, N);
`;return e({frag:`
    precision highp float;

    uniform float yScale;
    uniform float mirrorOn;
    uniform float night;   // 0 by day, 1 at night
    uniform float time;
    ${Ni().lanternGLSL()}

    varying vec3 v_pos;
    varying vec3 v_relativepos;
    varying vec3 v_normal;
    varying vec3 v_eye;
    varying vec3 v_mat;

    ${u}

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

    ${Q_()}

    ${Z_()}

    ${J_()}

    ${e6()}

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
        step(abs(v_pos.z - ${ha(Yr.hallEnd)}), 0.02) * step(0.5, -N.z) +
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
                 + exp(-pow((v_pos.z - ${ha((Yr.z0+Yr.z1)/2)}) / 1.3, 2.0)) * step(14.0, v_pos.x);
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
      light += (1.0 - smoothstep(2.0, 16.0, abs(v_pos.z - ${ha(Yr.hallEnd-1.6)}))) * 0.09 * (1.0 - smoothstep(14.5, 18.0, v_pos.x));

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
          float through = doorLight(v_pos, vec3(${t6}));
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
        if (v_pos.x < 14.0) wallD = min(wallD, ${ha(Yr.hallEnd)} - v_pos.z);
        if (v_pos.x < 14.0 && (v_pos.z < ${ha(Yr.z0)} || v_pos.z > ${ha(Yr.z1)})) wallD = min(wallD, 13.65 - v_pos.x);
        if (v_pos.x > 13.65 && v_pos.z > ${ha(Yr.z0-1)}) wallD = min(min(min(wallD, v_pos.z - ${ha(Yr.z0)}), ${ha(Yr.z1)} - v_pos.z), ${ha(Yr.x1)} - v_pos.x);
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
        if (v_pos.z < ${ha(Yr.z0+.3)} && v_pos.x > ${ha(Yr.x0)}) {
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
    }`,attributes:{position:t.position,normal:t.normal,a_mat:t.mat},uniforms:l,blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"zero"}},elements:new Uint32Array(t.elements),offset:n?e.prop("offset"):0,count:n?e.prop("count"):t.elements.length})}});var d2=de((hA,u2)=>{"strict mode";var o6="https://api.artic.edu/api/v1/artworks/search",n6=({image_id:e},t)=>`https://www.artic.edu/iiif/2/${e}/full/${t},/0/default.jpg`,r6="?query[bool][must][][term][classification_titles.keyword]=painting&query[bool][must][][term][is_public_domain]=true",a6="&fields=image_id,title,artist_title",i6={low:400,mid:843,high:1686};u2.exports={fetchList:async function(e,t){let o=o6+r6+a6+`&from=${e}&size=${t}`;return(await fetch(o).then(r=>r.json())).data.filter(r=>r.image_id)},fetchImage:async function(e,t){let o=n6(e,i6[t]),n=await fetch(o).then(r=>r.blob());return{title:e.title+" - "+e.artist_title,image:n}}}});var m2=de((uA,v2)=>{"use strict";var s6=t1(),c6=sa(),l6=e=>"images/web/"+e.slug+(c6.isPhone?"-1024":"")+".webp";async function p2(e){let t=await fetch(e);if(!t.ok)throw new Error("Could not load "+e);return t.blob()}v2.exports={fetchList:async function(e,t){return s6.slice(e,e+t).map((o,n)=>({...o,image_id:e+n}))},fetchImage:async function(e){let t;try{t=await p2(l6(e))}catch(o){t=await p2("images/"+e.file)}return{title:e.title,image:t}}}});var x2=de((dA,g2)=>{"strict mode";g2.exports={default:"local",artic:d2(),local:m2()}});var O1=de((pA,b2)=>{"strict mode";var Ss=document.createElement("canvas"),P1=Ss.width=Ss.height=1024,Ii=Ss.getContext("2d");Ii.mozImageSmoothingEnabled=!1;Ii.webkitImageSmoothingEnabled=!1;Ii.font="32px Verdana";Ii.textBaseline="bottom";Ii.fillStyle="#aaa";function y2(e,t,o,n){var r=t,a,i=0,s=0,c=t.split(" "),f,l;for(f=l=c.length;e.measureText(r).width>o&&f>1;){f--,r=a="";for(var u=0;u<l;u++)u<f?(r+=c[u],u+1<f&&(r+=" ")):(a+=c[u],u+1<l&&(a+=" "))}return n.push(r),s=e.measureText(r).width,a&&(i=y2(e,a,o,n),i>s&&(s=i)),s}b2.exports={init(e,t,o=P1){var n=[];y2(Ii,t,Math.min(o*P1,P1),n),Ii.clearRect(0,0,Ss.width,Ss.height);for(var r=0;r<n.length;r++)Ii.fillText(n[r],0,Ss.height-(Math.max(n.length,3)-r)*32);return e({data:Ss,min:"mipmap",mipmap:"nice",flipY:!0})},draw(e){return e({frag:`
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
            }`,attributes:{pos:[0,0,1,0,0,1,1,1,0,1,1,0]},uniforms:{model:e.prop("textmodel"),tex:e.prop("text")},count:6,blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}})}}});var M2=de((vA,_2)=>{"strict mode";var I1=x2(),f6=new URLSearchParams(window.location.search).get("api"),w2=I1[f6]||I1[I1.default],h6=O1(),F1={},H0=[],u6=2;function d6(e){return(!navigator.connection||navigator.connection.downlink<u6)&&(e=e=="high"?"mid":"low"),e}var p6=sa(),q0=document.createElement("canvas");q0.width=q0.height=p6.isPhone?1024:2048;var $1=q0.getContext("2d");$1.imageSmoothingEnabled=!0;$1.imageSmoothingQuality="high";var G1=!1,v6=e=>[(H0.pop()||e.texture)([[[200,200,200]]]),t=>(H0.pop()||e.texture)([[[0,0,0,0]]]),1];async function D1(e,t,o){G1===!1&&(G1=e.hasExtension("EXT_texture_filter_anisotropic")?e._gl.getParameter(e._gl.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0);let n,r;try{let a=await w2.fetchImage(t,d6(o));r=a.title,n=await createImageBitmap(a.image),$1.drawImage(n,0,0,q0.width,q0.height)}catch(a){return console.error(a),o=="high"?await D1(e,t,"low"):v6(e)}return[(H0.pop()||e.texture)({data:q0,min:"mipmap",mipmap:"nice",aniso:G1,flipY:!0}),a=>h6.init(H0.pop()||e.texture,r,a),n.width/n.height]}_2.exports={fetch:(e,t=10,o="low",n,r)=>{let a=Object.keys(F1).length;w2.fetchList(a,t).then(i=>{t=i.length,i.map(s=>{if(F1[s.image_id]){--t===0&&r();return}F1[s.image_id]=s,D1(e,s,o).then(([c,f,l])=>{n({...s,tex:c,textGen:f,aspect:l}),--t===0&&r()})})})},load:(e,t,o="low")=>{t.tex||t.loading||(t.loading=!0,D1(e,t,o).then(([n,r])=>{t.loading=!1,t.tex=n,t.text=r(t.width)}))},unload:e=>{e.tex&&(H0.push(e.tex),e.tex=void 0),e.text&&(H0.push(e.text),e.text=void 0)}}});var E2=de((mA,k2)=>{k2.exports=m6;function m6(){var e=new Float32Array(16);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var A2=de((gA,S2)=>{S2.exports=g6;function g6(e){var t=new Float32Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}});var L2=de((xA,T2)=>{T2.exports=x6;function x6(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}});var q1=de((yA,z2)=>{z2.exports=y6;function y6(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var N2=de((bA,C2)=>{C2.exports=b6;function b6(e,t){if(e===t){var o=t[1],n=t[2],r=t[3],a=t[6],i=t[7],s=t[11];e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=o,e[6]=t[9],e[7]=t[13],e[8]=n,e[9]=a,e[11]=t[14],e[12]=r,e[13]=i,e[14]=s}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15];return e}});var P2=de((wA,R2)=>{R2.exports=w6;function w6(e,t){var o=t[0],n=t[1],r=t[2],a=t[3],i=t[4],s=t[5],c=t[6],f=t[7],l=t[8],u=t[9],h=t[10],d=t[11],v=t[12],p=t[13],m=t[14],g=t[15],y=o*s-n*i,b=o*c-r*i,k=o*f-a*i,E=n*c-r*s,L=n*f-a*s,N=r*f-a*c,W=l*p-u*v,O=l*m-h*v,te=l*g-d*v,D=u*m-h*p,re=u*g-d*p,q=h*g-d*m,Y=y*q-b*re+k*D+E*te-L*O+N*W;return Y?(Y=1/Y,e[0]=(s*q-c*re+f*D)*Y,e[1]=(r*re-n*q-a*D)*Y,e[2]=(p*N-m*L+g*E)*Y,e[3]=(h*L-u*N-d*E)*Y,e[4]=(c*te-i*q-f*O)*Y,e[5]=(o*q-r*te+a*O)*Y,e[6]=(m*k-v*N-g*b)*Y,e[7]=(l*N-h*k+d*b)*Y,e[8]=(i*re-s*te+f*W)*Y,e[9]=(n*te-o*re-a*W)*Y,e[10]=(v*L-p*k+g*y)*Y,e[11]=(u*k-l*L-d*y)*Y,e[12]=(s*O-i*D-c*W)*Y,e[13]=(o*D-n*O+r*W)*Y,e[14]=(p*b-v*E-m*y)*Y,e[15]=(l*E-u*b+h*y)*Y,e):null}});var I2=de((_A,O2)=>{O2.exports=_6;function _6(e,t){var o=t[0],n=t[1],r=t[2],a=t[3],i=t[4],s=t[5],c=t[6],f=t[7],l=t[8],u=t[9],h=t[10],d=t[11],v=t[12],p=t[13],m=t[14],g=t[15];return e[0]=s*(h*g-d*m)-u*(c*g-f*m)+p*(c*d-f*h),e[1]=-(n*(h*g-d*m)-u*(r*g-a*m)+p*(r*d-a*h)),e[2]=n*(c*g-f*m)-s*(r*g-a*m)+p*(r*f-a*c),e[3]=-(n*(c*d-f*h)-s*(r*d-a*h)+u*(r*f-a*c)),e[4]=-(i*(h*g-d*m)-l*(c*g-f*m)+v*(c*d-f*h)),e[5]=o*(h*g-d*m)-l*(r*g-a*m)+v*(r*d-a*h),e[6]=-(o*(c*g-f*m)-i*(r*g-a*m)+v*(r*f-a*c)),e[7]=o*(c*d-f*h)-i*(r*d-a*h)+l*(r*f-a*c),e[8]=i*(u*g-d*p)-l*(s*g-f*p)+v*(s*d-f*u),e[9]=-(o*(u*g-d*p)-l*(n*g-a*p)+v*(n*d-a*u)),e[10]=o*(s*g-f*p)-i*(n*g-a*p)+v*(n*f-a*s),e[11]=-(o*(s*d-f*u)-i*(n*d-a*u)+l*(n*f-a*s)),e[12]=-(i*(u*m-h*p)-l*(s*m-c*p)+v*(s*h-c*u)),e[13]=o*(u*m-h*p)-l*(n*m-r*p)+v*(n*h-r*u),e[14]=-(o*(s*m-c*p)-i*(n*m-r*p)+v*(n*c-r*s)),e[15]=o*(s*h-c*u)-i*(n*h-r*u)+l*(n*c-r*s),e}});var G2=de((MA,F2)=>{F2.exports=M6;function M6(e){var t=e[0],o=e[1],n=e[2],r=e[3],a=e[4],i=e[5],s=e[6],c=e[7],f=e[8],l=e[9],u=e[10],h=e[11],d=e[12],v=e[13],p=e[14],m=e[15],g=t*i-o*a,y=t*s-n*a,b=t*c-r*a,k=o*s-n*i,E=o*c-r*i,L=n*c-r*s,N=f*v-l*d,W=f*p-u*d,O=f*m-h*d,te=l*p-u*v,D=l*m-h*v,re=u*m-h*p;return g*re-y*D+b*te+k*O-E*W+L*N}});var $2=de((kA,D2)=>{D2.exports=k6;function k6(e,t,o){var n=t[0],r=t[1],a=t[2],i=t[3],s=t[4],c=t[5],f=t[6],l=t[7],u=t[8],h=t[9],d=t[10],v=t[11],p=t[12],m=t[13],g=t[14],y=t[15],b=o[0],k=o[1],E=o[2],L=o[3];return e[0]=b*n+k*s+E*u+L*p,e[1]=b*r+k*c+E*h+L*m,e[2]=b*a+k*f+E*d+L*g,e[3]=b*i+k*l+E*v+L*y,b=o[4],k=o[5],E=o[6],L=o[7],e[4]=b*n+k*s+E*u+L*p,e[5]=b*r+k*c+E*h+L*m,e[6]=b*a+k*f+E*d+L*g,e[7]=b*i+k*l+E*v+L*y,b=o[8],k=o[9],E=o[10],L=o[11],e[8]=b*n+k*s+E*u+L*p,e[9]=b*r+k*c+E*h+L*m,e[10]=b*a+k*f+E*d+L*g,e[11]=b*i+k*l+E*v+L*y,b=o[12],k=o[13],E=o[14],L=o[15],e[12]=b*n+k*s+E*u+L*p,e[13]=b*r+k*c+E*h+L*m,e[14]=b*a+k*f+E*d+L*g,e[15]=b*i+k*l+E*v+L*y,e}});var H2=de((EA,q2)=>{q2.exports=E6;function E6(e,t,o){var n=o[0],r=o[1],a=o[2],i,s,c,f,l,u,h,d,v,p,m,g;return t===e?(e[12]=t[0]*n+t[4]*r+t[8]*a+t[12],e[13]=t[1]*n+t[5]*r+t[9]*a+t[13],e[14]=t[2]*n+t[6]*r+t[10]*a+t[14],e[15]=t[3]*n+t[7]*r+t[11]*a+t[15]):(i=t[0],s=t[1],c=t[2],f=t[3],l=t[4],u=t[5],h=t[6],d=t[7],v=t[8],p=t[9],m=t[10],g=t[11],e[0]=i,e[1]=s,e[2]=c,e[3]=f,e[4]=l,e[5]=u,e[6]=h,e[7]=d,e[8]=v,e[9]=p,e[10]=m,e[11]=g,e[12]=i*n+l*r+v*a+t[12],e[13]=s*n+u*r+p*a+t[13],e[14]=c*n+h*r+m*a+t[14],e[15]=f*n+d*r+g*a+t[15]),e}});var B2=de((SA,U2)=>{U2.exports=S6;function S6(e,t,o){var n=o[0],r=o[1],a=o[2];return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e[4]=t[4]*r,e[5]=t[5]*r,e[6]=t[6]*r,e[7]=t[7]*r,e[8]=t[8]*a,e[9]=t[9]*a,e[10]=t[10]*a,e[11]=t[11]*a,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}});var W2=de((AA,j2)=>{j2.exports=A6;function A6(e,t,o,n){var r=n[0],a=n[1],i=n[2],s=Math.sqrt(r*r+a*a+i*i),c,f,l,u,h,d,v,p,m,g,y,b,k,E,L,N,W,O,te,D,re,q,Y,be;return Math.abs(s)<1e-6?null:(s=1/s,r*=s,a*=s,i*=s,c=Math.sin(o),f=Math.cos(o),l=1-f,u=t[0],h=t[1],d=t[2],v=t[3],p=t[4],m=t[5],g=t[6],y=t[7],b=t[8],k=t[9],E=t[10],L=t[11],N=r*r*l+f,W=a*r*l+i*c,O=i*r*l-a*c,te=r*a*l-i*c,D=a*a*l+f,re=i*a*l+r*c,q=r*i*l+a*c,Y=a*i*l-r*c,be=i*i*l+f,e[0]=u*N+p*W+b*O,e[1]=h*N+m*W+k*O,e[2]=d*N+g*W+E*O,e[3]=v*N+y*W+L*O,e[4]=u*te+p*D+b*re,e[5]=h*te+m*D+k*re,e[6]=d*te+g*D+E*re,e[7]=v*te+y*D+L*re,e[8]=u*q+p*Y+b*be,e[9]=h*q+m*Y+k*be,e[10]=d*q+g*Y+E*be,e[11]=v*q+y*Y+L*be,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)}});var X2=de((TA,V2)=>{V2.exports=T6;function T6(e,t,o){var n=Math.sin(o),r=Math.cos(o),a=t[4],i=t[5],s=t[6],c=t[7],f=t[8],l=t[9],u=t[10],h=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=a*r+f*n,e[5]=i*r+l*n,e[6]=s*r+u*n,e[7]=c*r+h*n,e[8]=f*r-a*n,e[9]=l*r-i*n,e[10]=u*r-s*n,e[11]=h*r-c*n,e}});var K2=de((LA,Y2)=>{Y2.exports=L6;function L6(e,t,o){var n=Math.sin(o),r=Math.cos(o),a=t[0],i=t[1],s=t[2],c=t[3],f=t[8],l=t[9],u=t[10],h=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*r-f*n,e[1]=i*r-l*n,e[2]=s*r-u*n,e[3]=c*r-h*n,e[8]=a*n+f*r,e[9]=i*n+l*r,e[10]=s*n+u*r,e[11]=c*n+h*r,e}});var Z2=de((zA,Q2)=>{Q2.exports=z6;function z6(e,t,o){var n=Math.sin(o),r=Math.cos(o),a=t[0],i=t[1],s=t[2],c=t[3],f=t[4],l=t[5],u=t[6],h=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*r+f*n,e[1]=i*r+l*n,e[2]=s*r+u*n,e[3]=c*r+h*n,e[4]=f*r-a*n,e[5]=l*r-i*n,e[6]=u*r-s*n,e[7]=h*r-c*n,e}});var eg=de((CA,J2)=>{J2.exports=C6;function C6(e,t,o){var n,r,a,i=o[0],s=o[1],c=o[2],f=Math.sqrt(i*i+s*s+c*c);return Math.abs(f)<1e-6?null:(f=1/f,i*=f,s*=f,c*=f,n=Math.sin(t),r=Math.cos(t),a=1-r,e[0]=i*i*a+r,e[1]=s*i*a+c*n,e[2]=c*i*a-s*n,e[3]=0,e[4]=i*s*a-c*n,e[5]=s*s*a+r,e[6]=c*s*a+i*n,e[7]=0,e[8]=i*c*a+s*n,e[9]=s*c*a-i*n,e[10]=c*c*a+r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e)}});var og=de((NA,tg)=>{tg.exports=N6;function N6(e,t,o){var n=t[0],r=t[1],a=t[2],i=t[3],s=n+n,c=r+r,f=a+a,l=n*s,u=n*c,h=n*f,d=r*c,v=r*f,p=a*f,m=i*s,g=i*c,y=i*f;return e[0]=1-(d+p),e[1]=u+y,e[2]=h-g,e[3]=0,e[4]=u-y,e[5]=1-(l+p),e[6]=v+m,e[7]=0,e[8]=h+g,e[9]=v-m,e[10]=1-(l+d),e[11]=0,e[12]=o[0],e[13]=o[1],e[14]=o[2],e[15]=1,e}});var rg=de((RA,ng)=>{ng.exports=R6;function R6(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=t[1],e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=t[2],e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var ig=de((PA,ag)=>{ag.exports=P6;function P6(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=t[0],e[13]=t[1],e[14]=t[2],e[15]=1,e}});var cg=de((OA,sg)=>{sg.exports=O6;function O6(e,t){var o=Math.sin(t),n=Math.cos(t);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=n,e[6]=o,e[7]=0,e[8]=0,e[9]=-o,e[10]=n,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var fg=de((IA,lg)=>{lg.exports=I6;function I6(e,t){var o=Math.sin(t),n=Math.cos(t);return e[0]=n,e[1]=0,e[2]=-o,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=o,e[9]=0,e[10]=n,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var ug=de((FA,hg)=>{hg.exports=F6;function F6(e,t){var o=Math.sin(t),n=Math.cos(t);return e[0]=n,e[1]=o,e[2]=0,e[3]=0,e[4]=-o,e[5]=n,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var pg=de((GA,dg)=>{dg.exports=G6;function G6(e,t){var o=t[0],n=t[1],r=t[2],a=t[3],i=o+o,s=n+n,c=r+r,f=o*i,l=n*i,u=n*s,h=r*i,d=r*s,v=r*c,p=a*i,m=a*s,g=a*c;return e[0]=1-u-v,e[1]=l+g,e[2]=h-m,e[3]=0,e[4]=l-g,e[5]=1-f-v,e[6]=d+p,e[7]=0,e[8]=h+m,e[9]=d-p,e[10]=1-f-u,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}});var mg=de((DA,vg)=>{vg.exports=D6;function D6(e,t,o,n,r,a,i){var s=1/(o-t),c=1/(r-n),f=1/(a-i);return e[0]=a*2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a*2*c,e[6]=0,e[7]=0,e[8]=(o+t)*s,e[9]=(r+n)*c,e[10]=(i+a)*f,e[11]=-1,e[12]=0,e[13]=0,e[14]=i*a*2*f,e[15]=0,e}});var xg=de(($A,gg)=>{gg.exports=$6;function $6(e,t,o,n,r){var a=1/Math.tan(t/2),i=1/(n-r);return e[0]=a/o,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=(r+n)*i,e[11]=-1,e[12]=0,e[13]=0,e[14]=2*r*n*i,e[15]=0,e}});var bg=de((qA,yg)=>{yg.exports=q6;function q6(e,t,o,n){var r=Math.tan(t.upDegrees*Math.PI/180),a=Math.tan(t.downDegrees*Math.PI/180),i=Math.tan(t.leftDegrees*Math.PI/180),s=Math.tan(t.rightDegrees*Math.PI/180),c=2/(i+s),f=2/(r+a);return e[0]=c,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=f,e[6]=0,e[7]=0,e[8]=-((i-s)*c*.5),e[9]=(r-a)*f*.5,e[10]=n/(o-n),e[11]=-1,e[12]=0,e[13]=0,e[14]=n*o/(o-n),e[15]=0,e}});var _g=de((HA,wg)=>{wg.exports=H6;function H6(e,t,o,n,r,a,i){var s=1/(t-o),c=1/(n-r),f=1/(a-i);return e[0]=-2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*c,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*f,e[11]=0,e[12]=(t+o)*s,e[13]=(r+n)*c,e[14]=(i+a)*f,e[15]=1,e}});var kg=de((UA,Mg)=>{var U6=q1();Mg.exports=B6;function B6(e,t,o,n){var r,a,i,s,c,f,l,u,h,d,v=t[0],p=t[1],m=t[2],g=n[0],y=n[1],b=n[2],k=o[0],E=o[1],L=o[2];return Math.abs(v-k)<1e-6&&Math.abs(p-E)<1e-6&&Math.abs(m-L)<1e-6?U6(e):(l=v-k,u=p-E,h=m-L,d=1/Math.sqrt(l*l+u*u+h*h),l*=d,u*=d,h*=d,r=y*h-b*u,a=b*l-g*h,i=g*u-y*l,d=Math.sqrt(r*r+a*a+i*i),d?(d=1/d,r*=d,a*=d,i*=d):(r=0,a=0,i=0),s=u*i-h*a,c=h*r-l*i,f=l*a-u*r,d=Math.sqrt(s*s+c*c+f*f),d?(d=1/d,s*=d,c*=d,f*=d):(s=0,c=0,f=0),e[0]=r,e[1]=s,e[2]=l,e[3]=0,e[4]=a,e[5]=c,e[6]=u,e[7]=0,e[8]=i,e[9]=f,e[10]=h,e[11]=0,e[12]=-(r*v+a*p+i*m),e[13]=-(s*v+c*p+f*m),e[14]=-(l*v+u*p+h*m),e[15]=1,e)}});var Sg=de((BA,Eg)=>{Eg.exports=j6;function j6(e){return"mat4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+", "+e[6]+", "+e[7]+", "+e[8]+", "+e[9]+", "+e[10]+", "+e[11]+", "+e[12]+", "+e[13]+", "+e[14]+", "+e[15]+")"}});var U0=de((jA,Ag)=>{Ag.exports={create:E2(),clone:A2(),copy:L2(),identity:q1(),transpose:N2(),invert:P2(),adjoint:I2(),determinant:G2(),multiply:$2(),translate:H2(),scale:B2(),rotate:W2(),rotateX:X2(),rotateY:K2(),rotateZ:Z2(),fromRotation:eg(),fromRotationTranslation:og(),fromScaling:rg(),fromTranslation:ig(),fromXRotation:cg(),fromYRotation:fg(),fromZRotation:ug(),fromQuat:pg(),frustum:mg(),perspective:xg(),perspectiveFromFieldOfView:bg(),ortho:_g(),lookAt:kg(),str:Sg()}});var zg=de((WA,Lg)=>{"use strict";var Tg=M2(),ln=U0(),As=ir(),W6=3e3,ah="high",H1,fl=.36,hl=13.64,B0=As.C.hallEnd-.01,ul=As.C.z0+.01,V6=.356,X6=13.644,Y6=As.C.hallEnd-.006,K6=As.C.z0+.006,Q6=.12,sh=4,j0=e=>sr[e]&&sr[e].cy||sh,U1=.26,Z6=5.6,J6=7,sr=[{side:"right",z:34.5},{side:"right",z:23.5},{side:"left",z:23.5},{side:"end",z:B0},{side:"left",z:34.5},{side:"right",z:14.6},{side:"left",z:14.6,maxW:3.7,maxH:3.7},{side:"corridor",x:As.PAINTING_X[0],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:As.PAINTING_X[1],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:As.PAINTING_X[2],cy:3,maxW:3.3,maxH:3.73}];function eM(e,t){let o=t&&t.maxH||Z6,n=t&&t.maxW||J6,r=Math.min(o,n/e);return{width:r*e,height:r}}function tM(e,t,o){let n=sr[o],r=[],a=j0(o)-t/2;return n.side==="left"?(ln.fromTranslation(r,[fl,a,n.z+e/2]),ln.rotateY(r,r,Math.PI/2)):n.side==="right"?(ln.fromTranslation(r,[hl,a,n.z-e/2]),ln.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?ln.fromTranslation(r,[n.x-e/2,a,ul]):(ln.fromTranslation(r,[7+e/2,a,B0]),ln.rotateY(r,r,Math.PI)),ln.scale(r,r,[e,t,Q6]),r}function oM(e,t,o){let n=sr[o],r=[],a=j0(o)-t/2;return n.side==="left"?(ln.fromTranslation(r,[fl,a,n.z+e/2]),ln.rotateY(r,r,Math.PI/2)):n.side==="right"?(ln.fromTranslation(r,[hl,a,n.z-e/2]),ln.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?ln.fromTranslation(r,[n.x-e/2,a,ul]):(ln.fromTranslation(r,[7+e/2,a,B0]),ln.rotateY(r,r,Math.PI)),r}function nM(e,t,o){let n=sr[o],r=[],a=j0(o)-t/2-U1-.38;return n.side==="left"?(ln.fromTranslation(r,[V6,a,n.z+e/2]),ln.rotateY(r,r,Math.PI/2)):n.side==="right"?(ln.fromTranslation(r,[X6,a,n.z-e/2]),ln.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?ln.fromTranslation(r,[n.x-e/2,a,K6]):(ln.fromTranslation(r,[7+e/2,a,Y6]),ln.rotateY(r,r,Math.PI)),ln.scale(r,r,[2,2,2]),r}function rM(e,t,o){let n=sr[o],r=j0(o)-t/2-U1-.38;return n.side==="left"?[fl+.55,r,n.z]:n.side==="right"?[hl-.55,r,n.z]:n.side==="corridor"?[n.x,r,ul+.55]:[7,r,B0-.55]}var ll=.42;function ih(e,t,o,n,r,a){return[t[0]*n,t[1]*n,t[2]*n,0,0,r,0,0,o[0]*a,o[1]*a,o[2]*a,0,e[0],e[1],e[2],1]}function aM(e,t,o){let n=sr[o],r,a,i;n.side==="left"?(r=[fl,n.z],a=[0,0,1],i=[1,0,0]):n.side==="right"?(r=[hl,n.z],a=[0,0,1],i=[-1,0,0]):n.side==="corridor"?(r=[n.x,ul],a=[1,0,0],i=[0,0,1]):(r=[7,B0],a=[1,0,0],i=[0,0,-1]);let s=j0(o)+t/2+U1+.3,c=Math.min(2.4,Math.max(.9,e*.55)),f=(d,v)=>[r[0]+i[0]*d,v,r[1]+i[2]*d],l=[.075,.062,.05],u=[{fixmodel:ih(f(.014,s),a,i,.1,.13,.028),fixcol:l,fixglow:0},{fixmodel:ih(f(ll/2,s),a,i,.02,.02,ll),fixcol:l,fixglow:0},{fixmodel:ih(f(ll,s),a,i,c,.034,.05),fixcol:l,fixglow:0},{fixmodel:ih(f(ll-.012,s-.019),a,i,c*.94,.006,.028),fixcol:l,fixglow:1}],h=f(ll,s-.02);return{fixtures:u,light:{c:[h[0],h[1],h[2],1],d:[a[0],a[1],a[2],c/2]}}}Lg.exports=(e,t)=>{let o=[],n=[],r=a=>{let i=a.image_id;if(!sr[i])return;let{width:s,height:c}=eM(a.aspect,sr[i]),f=aM(s,c,i);t&&t.lights&&i<t.lights.length&&(t.lights[i]=f.light),o.push({...a,fixtures:f.fixtures,side:sr[i].side,model:tM(s,c,i),framemodel:oM(s,c,i),framesize:[s,c],textmodel:nM(s,c,i),text:a.textGen(s),width:s,height:c,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:rM(s,c,i),paintingPosition:sr[i].side==="left"?[fl+.05,sh,sr[i].z]:sr[i].side==="right"?[hl-.05,sh,sr[i].z]:sr[i].side==="corridor"?[sr[i].x,j0(i),ul+.05]:[7,sh,B0-.05],textGen:null})};return Tg.fetch(e,sr.length,ah,r,()=>{}),{update:()=>{n=o,n.forEach(a=>{Tg.load(e,a,ah)}),ah="low",H1&&clearTimeout(H1),H1=setTimeout(()=>{ah="high"},W6)},batch:()=>n,interactables:()=>n.map((a,i)=>({side:a.side,width:a.width,index:i,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:a.plaquePosition,paintingPosition:a.paintingPosition}))}}});var Pg=de((VA,Rg)=>{"use strict";var iM=O1(),Cg=sa(),Ng=[[-.02,.125],[-.02,.15],[.035,.15],[.07,.12],[.07,.17],[.185,.17],[.185,.19],[.215,.19],[.26,.03]];function sM(){let e=[[0,0],[1,0],[1,1],[0,1]],t=[];Ng.forEach(([n,r])=>{e.forEach(([a,i])=>t.push([a,i,n,r]))});let o=[];for(let n=0;n<Ng.length-1;n++)for(let r=0;r<4;r++){let a=(r+1)%4,i=n*4+r,s=n*4+a,c=(n+1)*4+r,f=(n+1)*4+a;o.push(i,s,f,i,f,c)}return{verts:t,elems:o}}var cM=`#extension GL_OES_standard_derivatives : enable
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
}`,lM=`
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
}`;Rg.exports=e=>{let t=iM.draw(e),o=e({frag:`#extension GL_OES_standard_derivatives : enable
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
	${Ni().lanternGLSL()}
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
	}`,attributes:{pos:[0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,-.1,-.1,0,1.1,-.1,0,-.1,1.1,0,1.1,1.1,0]},elements:[0,1,2,3,2,1,1,0,5,4,5,0,3,1,7,5,7,1,0,2,4,6,4,2,8,9,4,5,4,9,9,11,5,7,5,11,11,10,7,6,7,10,10,8,6,4,6,8],uniforms:{model:e.prop("model"),tex:e.prop("tex"),psize:e.prop("framesize"),canvasCm:(i,s)=>s.size?[s.size[1],s.size[0]]:[61,91],texel:1/(Cg.isPhone?1024:2048),detail:()=>Cg.post===0?0:1},blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}}),n=sM(),r=e({frag:cM,vert:lM,attributes:{prof:n.verts},elements:n.elems,uniforms:{model:e.prop("framemodel"),fsize:e.prop("framesize")},cull:{enable:!1},blend:{enable:!1}}),a=e({frag:`#extension GL_OES_standard_derivatives : enable
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
}`,attributes:{pos:[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5],[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]]},elements:[0,1,2,0,2,3,4,5,6,4,6,7,0,1,5,0,5,4,2,3,7,2,7,6,0,3,7,0,7,4,1,2,6,1,6,5],uniforms:{model:e.prop("fixmodel"),fixcol:e.prop("fixcol"),fixglow:e.prop("fixglow")},cull:{enable:!1},blend:{enable:!1}});return function(i){o(i),r(i);let s=[];i.forEach(c=>{c.fixtures&&s.push(...c.fixtures)}),s.length&&a(s),t(i)}}});var ch=de((XA,Og)=>{"use strict";var ui=[-90,0,0],B1=16,j1=27.5,W1=11.6;Og.exports={O:ui,W:B1,L:j1,RIDGE:W1,BOX:[ui[0]-.8,0,ui[2]-11.5,ui[0]+B1+.8,W1+.5,ui[2]+j1+.8],AIR_BOX:[ui[0],0,ui[2],ui[0]+B1,W1,ui[2]+j1]}});var fh=de((YA,qg)=>{"use strict";var{A:tr}=fa(),{C:kn}=ir(),{DOOR:W0}=Li(),jn=Oi(),V0=ch(),Gg=kn.hallEnd+.35,Dg={arch:[13.6,0,tr.zc-tr.arch.r-.3,14.4,tr.arch.spring+tr.arch.r+.3,tr.zc+tr.arch.r+.3],mouth:[13.3,0,kn.z0-.3,14.3,8.2,kn.z1+.3],stair:[-.5,0,jn.SURR.z0-.2,.5,jn.SURR.top+.3,jn.SURR.z1+.2],door:[W0.x0-.4,0,-.5,W0.x1+.4,W0.top+.4,.5],windows:[15.6,.4,kn.z1-.2,36.9,6.4,kn.z1+.9],farDoor:[kn.x1-.2,0,kn.zc-W0.r-.4,kn.x1+.9,W0.top+.4,kn.zc+W0.r+.4]},di={court:[tr.x0-.4,0,tr.z0-.3,tr.x1+.3,tr.domeTop+.5,tr.z1+.3],stair:[jn.C.x-jn.R-2.6,0,jn.C.z-jn.R-1.5,.5,15.6,jn.C.z+jn.R+1.5],street:[-60,-1,-140,74,60,.6],garden:[10,-1,kn.z1,46,60,kn.z1+110],florence:[kn.x1,-1,kn.zc-30,kn.x1+80,60,kn.zc+30],studio:V0.BOX},fM=[[0,0,0,14,0,Gg],[13.6,0,kn.z0,kn.x1+.4,0,kn.z1],[tr.x0-.4,0,tr.z0,tr.x1,0,tr.z1],[jn.C.x-jn.R-2.6,0,jn.C.z-jn.R,.4,0,jn.C.z+jn.R],[V0.BOX[0],0,V0.BOX[2],V0.BOX[3],0,V0.BOX[5]]],hM={hall:{court:["arch"],stair:["stair"],street:["door"],garden:["mouth","windows"],florence:["mouth","farDoor"]},wing:{court:["mouth","arch"],stair:["mouth","stair"],street:["mouth","door"],garden:["windows"],florence:["farDoor"]},court:{stair:["arch","stair"],street:["arch","door"],garden:["arch","mouth","windows"],florence:["arch","mouth","farDoor"]},stair:{court:["stair","arch"],street:["stair","door"],garden:["stair","mouth","windows"],florence:["stair","mouth","farDoor"]}},vl=new Float64Array(24),Ta=[7,2,2],$g=0,pi="out",lh=!0;try{/[?&]nocull\b/.test(location.search)&&(lh=!1)}catch(e){}var dl={court:!0,stair:!0,street:!0,garden:!0,florence:!0,studio:!1},pl={court:!0,stair:!0,street:!0,garden:!0,florence:!0,studio:!1},Ig=!0;function uM(e){let t=s=>[e[s],e[4+s],e[8+s],e[12+s]],o=t(0),n=t(1),r=t(2),a=t(3),i=(s,c,f,l)=>{for(let u=0;u<4;u++)vl[s*4+u]=c[u]+f*l[u]};i(0,a,1,o),i(1,a,-1,o),i(2,a,1,n),i(3,a,-1,n),i(4,a,1,r),i(5,a,-1,r)}function Fi(e,t){if(!lh)return!0;let o=t?-e[4]:e[1],n=t?-e[1]:e[4];for(let r=0;r<6;r++){let a=vl[r*4],i=vl[r*4+1],s=vl[r*4+2],c=vl[r*4+3],f=a>0?e[3]:e[0],l=i>0?n:o,u=s>0?e[5]:e[2];if(a*f+i*l+s*u+c<0)return!1}return!0}var V1=(e,t)=>Ta[0]>e[0]-t&&Ta[0]<e[3]+t&&Ta[2]>e[2]-t&&Ta[2]<e[5]+t;function dM(e){if(V1(e,.6))return null;let t=1/0,o=-1/0;for(let n=0;n<4;n++){let r=(n&1?e[3]:e[0])-Ta[0],a=(n&2?e[5]:e[2])-Ta[2],i=Math.atan2(r,a)-$g;i-=Math.round(i/(2*Math.PI))*2*Math.PI,t=Math.min(t,i),o=Math.max(o,i)}return o-t>Math.PI?null:[t,o]}function Fg(e,t,o){let n=-Math.PI,r=Math.PI,a=i=>{let s=dM(i);return s?(n=Math.max(n,s[0]-.03),r=Math.min(r,s[1]+.03),n<=r):!0};for(let i of e){let s=Dg[i];if(!V1(s,.6)&&(!Fi(s,o)||!a(s)))return!1}return Fi(t,o)&&a(t)}function pM(){let e=Ta[0],t=Ta[2],o=V0.BOX;return e>o[0]&&e<o[3]&&t>o[2]&&t<o[5]?"studio":e<0&&t>jn.C.z-jn.R-1.5&&e>jn.C.x-jn.R-2.6?"stair":e>14.1&&t>tr.z0-.3&&t<tr.z1+.3&&e<tr.x1+.3?"court":e>13.9&&t>kn.z0-.4&&t<kn.z1+.1&&e<kn.x1+.3?"wing":e>=0&&e<=14.1&&t>.3&&t<Gg?"hall":"out"}var vM={PORTAL:Dg,ROOM:di,update(e,t,o){let n=new Array(16);for(let r=0;r<4;r++)for(let a=0;a<4;a++){let i=0;for(let s=0;s<4;s++)i+=t[s*4+a]*e[r*4+s];n[r*4+a]=i}uM(n),Ta[0]=o[0],Ta[1]=o[1],Ta[2]=o[2],$g=Math.atan2(-e[2],-e[10]),pi=pM();for(let r in di){if(r==="studio"||pi==="studio"){dl[r]=pl[r]=r==="studio"&&pi==="studio";continue}if(!lh||pi==="out"||pi===r||V1(di[r],.3))dl[r]=Fi(di[r],!1)||pi===r,pl[r]=Fi(di[r],!0)||pi===r;else{let a=hM[pi][r];dl[r]=a?Fg(a,di[r],!1):Fi(di[r],!1),pl[r]=a?Fg(a,di[r],!0):Fi(di[r],!0)}}Ig=!lh||fM.some(r=>Fi(r,!1))},get zone(){return pi},room(e,t){return t?pl[e]:dl[e]},box(e,t,o){return o&&!(t?pl[o]:dl[o])?!1:Fi(e,t)},get floor(){return Ig}};qg.exports=vM});var Ug=de((KA,Hg)=>{"use strict";var mM=R1(),gM=fh();function xM(e){let t=new DataView(e);if(String.fromCharCode(t.getUint8(0),t.getUint8(1),t.getUint8(2),t.getUint8(3))!=="STAT")throw new Error("Not a statue file");let n=t.getUint32(4,!0),r=t.getUint32(8,!0),a=[],i=[];for(let u=0;u<3;u++)a.push(t.getFloat32(12+u*4,!0)),i.push(t.getFloat32(24+u*4,!0));let s=36,c=new Uint16Array(e,s,n*3);s+=n*6;let f=new Uint16Array(e,s,r);s+=r*2;let l=new Int8Array(e,s,n*3);return{nV:n,nI:r,mn:a,sz:i,pos:c,idx:f,nrm:l}}Hg.exports=(e,t)=>{let o=[],n=[],r=[],a=[],i=null,s=t.statues.length,c=[],f=(u,h)=>{let d=o.length/3,v=h.height*.75,p=h.base!==void 0?h.base:t.pedestalTop;c.push({offset:a.length,count:u.nI,box:[h.x-v,p-.1,h.z-v,h.x+v,p+h.height+.2,h.z+v]});let m=h.height,g=Math.cos(h.yaw),y=Math.sin(h.yaw),b=h.base!==void 0?h.base:t.pedestalTop;for(let k=0;k<u.nV;k++){let E=(u.mn[0]+u.pos[k*3]/65535*u.sz[0])*m,L=(u.mn[1]+u.pos[k*3+1]/65535*u.sz[1])*m,N=(u.mn[2]+u.pos[k*3+2]/65535*u.sz[2])*m;o.push(h.x+g*E+y*N,b+L,h.z-y*E+g*N);let W=u.nrm[k*3]/127,O=u.nrm[k*3+1]/127,te=u.nrm[k*3+2]/127;n.push(g*W+y*te,O,-y*W+g*te),r.push(h.mat||1,0,0)}for(let k=0;k<u.nI;k++)a.push(d+u.idx[k])},l=()=>{a.length!==0&&(i=mM(e,{position:o,normal:n,mat:r,elements:a,lights:t.lights,get viewer(){return t.viewer}},!1,!0))};return t.statues.forEach(u=>{fetch("res/"+u.file).then(h=>{if(!h.ok)throw new Error("Could not load "+u.file);return h.arrayBuffer()}).then(h=>f(xM(h),u)).catch(h=>console.error(h)).then(()=>{--s===0&&l()})}),function(u){if(!i)return;let h=!!(u&&u.reflected),d=c.filter(v=>gM.box(v.box,h));d.length&&i(d)}}});var ex=de((QA,Y1)=>{"use strict";var yM=ws(),Pn=1.29032,Ls=[9.2968,2,5.9],bM=[[.767398,.00185,-.10827],[.010515,.769952,.087681],[-.107774,.08829,-.762374]],hh=2147.64,Bg=725,jg=1288,Wg=1450,Vg=2576,Dr=-5.197,Cs=3.865,Gi=10.135,Ns=-14.679,ml=-30.229,gl=7.232,Xg=-45.713,X0=17.1*Pn,zs=16.6*Pn,xl=16.6*Pn,Yg=[6.9,17.1],uh=[2.95,16.6],wM=1.6,_M=0,MM=1,Kg=2,X1=3,Qg=4,Zg=5,kM=6;function EM(){let e=[],t=[],o=[],n=[],r=yM.createBuilder(e,t,o,n),a=(f,l,u,h,d,v,p=1,m=1)=>{let g=[];for(let y=0;y<=p;y++){let b=[];for(let k=0;k<=m;k++){let E=[f[0]+l[0]*y/p+u[0]*k/m,f[1]+l[1]*y/p+u[1]*k/m,f[2]+l[2]*y/p+u[2]*k/m],L=v(E);b.push(r.vert(E,h,[d,L[0],L[1]]))}g.push(b)}for(let y=0;y<p;y++)for(let b=0;b<m;b++)r.tri(g[y][b],g[y+1][b],g[y][b+1]),r.tri(g[y+1][b],g[y+1][b+1],g[y][b+1])},i=f=>l=>[(Ls[2]-l[2])/Pn-f,l[1]/Pn];a([-60,0,-.36],[130,0,0],[0,0,-140],[0,1,0],_M,f=>[f[0]/Pn,f[2]/Pn],13,14),a([Cs,0,Dr],[0,0,Ns-Dr],[0,X0,0],[1,0,0],MM,i(8.6),6,6),a([-40,0,Dr],[Cs+40,0,0],[0,X0,0],[0,0,1],Kg,f=>[(Cs-f[0])/Pn,f[1]/Pn],8,4),a([-40,0,-.36],[0,0,Dr+.36],[0,X0,0],[1,0,0],Kg,f=>[-f[2]/Pn,f[1]/Pn]),a([Gi,0,-80],[0,0,Dr+80],[0,zs,0],[-1,0,0],Qg,i(8.6),12,6),a([Gi,0,Dr],[60,0,0],[0,zs,0],[0,0,1],Zg,f=>[(f[0]-Gi)/Pn,f[1]/Pn],8,4),a([70,0,Dr],[0,0,-.36-Dr],[0,zs,0],[-1,0,0],Zg,f=>[-f[2]/Pn,f[1]/Pn]);let s=f=>[(f[0]-Ls[0])/Pn+4.18,f[1]/Pn];a([-20,0,ml],[gl+20,0,0],[0,xl,0],[0,0,1],X1,s,8,6),a([gl,0,ml],[0,0,Xg-ml],[0,xl,0],[1,0,0],X1,i(28),4,4),a([gl,0,Xg],[Gi-gl,0,0],[0,zs,0],[0,0,1],Qg,f=>[(f[0]-Ls[0])/Pn,f[1]/Pn],2,4),a([-20,0,Ns],[0,0,ml-Ns],[0,xl,0],[1,0,0],X1,i(16),4,4);let c=(f,l,u,h)=>a(f,l,u,h,kM,()=>[0,0],4,4);return c([-300,-20,-300],[600,0,0],[0,320,0],[0,0,1]),c([-300,300,-300],[600,0,0],[0,0,300],[0,-1,0]),c([-300,-20,0],[0,0,-300],[0,320,0],[1,0,0]),c([300,-20,-300],[0,0,300],[0,320,0],[-1,0,0]),{position:e,normal:t,elements:o,attr:n}}function Ts(e,t,o,n){let r=e.texture({data:[[n]],...o,min:"linear",mag:"linear"});return fetch(t).then(a=>{if(!a.ok)throw new Error("Could not load "+t);return a.blob()}).then(a=>createImageBitmap(a)).then(a=>{r({data:a,...o,min:"mipmap",mipmap:"nice",mag:"linear"})}).catch(a=>console.error(a)),r}var La=e=>"vec3("+e.map(t=>t.toFixed(4)).join(", ")+")",SM=[[[-.35,0,-.35],[14.35,9.2,50]],[[-40,0,Ns],[Cs,X0,Dr]],[[Gi,0,-80],[70,zs,Dr]],[[-20,0,-80],[gl,xl,ml]],[[-40,0,-80],[-20,xl,Ns]]],AM=SM.map(e=>`if (hitBox(ro, rd, ${La(e[0])}, ${La(e[1])}, 1e4) ) return 0.0;`).join(`
		`),Jg="mat3("+[0,1,2].map(e=>[0,1,2].map(t=>bM[t][e].toFixed(6)).join(", ")).join(", ")+")",TM=`
precision highp float;

uniform sampler2D photo, photoNight, photoMask, pinkTex, yellowTex, creamTex, cobbleTex;
uniform float time;
uniform float night;   // 0 by day, 1 at night

varying vec3 v_pos;
varying vec3 v_normal;
varying vec3 v_attr;
varying vec3 v_eye;

const vec3 SUN = ${La([-.25,.4,.88].map(e=>e/Math.hypot(-.25,.4,.88)))};

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
	${AM}
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
	vec3 ro = ${La(Ls)};
	vec3 rd = p - ro;
	if (hitBox(ro, rd, ${La([-40,0,Ns])}, ${La([Cs-.02,X0,Dr])}, 0.995)) return false;
	if (hitBox(ro, rd, ${La([Gi+.02,0,-80])}, ${La([70,zs,Dr])}, 0.995)) return false;
	return true;
}

// is this point sky in the photo? (only meaningful inside the photo)
bool photoSky(vec3 p) {
	vec3 pc = ${Jg} * (p - ${La(Ls)});
	if (pc.z < 0.2) return false;
	vec2 uv = vec2(
		(${Bg.toFixed(2)} + ${hh.toFixed(3)} * pc.x / pc.z) / ${Wg.toFixed(1)},
		(${jg.toFixed(2)} - ${hh.toFixed(3)} * pc.y / pc.z) / ${Vg.toFixed(1)}
	);
	if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) return false;
	return texture2D(photoMask, uv).r < 0.5;
}

// photo colour and how much to trust it (0..1)
vec4 photoAt(vec3 p, vec3 n, vec3 eye) {
	vec3 pc = ${Jg} * (p - ${La(Ls)});
	if (pc.z < 0.2) return vec4(0.0);
	vec2 uv = vec2(
		(${Bg.toFixed(2)} + ${hh.toFixed(3)} * pc.x / pc.z) / ${Wg.toFixed(1)},
		(${jg.toFixed(2)} - ${hh.toFixed(3)} * pc.y / pc.z) / ${Vg.toFixed(1)}
	);
	vec2 e = min(uv, 1.0 - uv);
	float w = smoothstep(0.002, 0.02, min(e.x, e.y));
	if (w <= 0.0) return vec4(0.0);
	w *= smoothstep(0.35, 0.75, texture2D(photoMask, uv).r);
	if (w <= 0.0) return vec4(0.0);
	if (!photoSees(p)) return vec4(0.0);
	// if we see this surface much more square-on than the photo did,
	// the photo would look smeared: hand over to the painted facade
	float camCos = abs(dot(normalize(p - ${La(Ls)}), n));
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
		base = texture2D(cobbleTex, fuv / ${wM.toFixed(2)}).rgb;
	} else if (kind < 2.5) {
		base = texture2D(pinkTex, vec2(fuv.x / ${Yg[0].toFixed(2)}, 1.0 - fuv.y / ${Yg[1].toFixed(2)})).rgb;
	} else if (kind < 3.5) {
		base = texture2D(yellowTex, vec2(fuv.x / ${uh[0].toFixed(2)}, 1.0 - fuv.y / ${uh[1].toFixed(2)})).rgb;
	} else {
		base = texture2D(creamTex, vec2(fuv.x / ${uh[0].toFixed(2)}, 1.0 - fuv.y / ${uh[1].toFixed(2)})).rgb;
	}

	// ---------- the photograph, where it can be trusted ----------
	bool projectable = kind < 0.5 || (kind > 0.5 && kind < 1.5) || (kind > 2.5 && kind < 4.5);
	if (kind < 0.5) {
		// the photo only shows ground inside the alley, or beyond its corners
		bool inAlley = v_pos.x > ${(Cs-.05).toFixed(3)} && v_pos.x < ${(Gi+.05).toFixed(3)};
		projectable = inAlley || v_pos.z < ${Ns.toFixed(3)};
		projectable = projectable && v_pos.z < ${(Dr+4.5).toFixed(3)};
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
}`,LM=`
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
}`,zM=Jn();Y1.exports=e=>{let t=EM(),o={wrapS:"clamp",wrapT:"clamp",flipY:!1},n={wrapS:"mirror",wrapT:"clamp",flipY:!1},r={wrapS:"repeat",wrapT:"repeat",flipY:!1},a=Ts(e,"res/street/photo.jpg",o,[190,160,120]),i=Ts(e,"res/street/photo_night.jpg",o,[12,14,22]),s=Ts(e,"res/street/photo_mask.png",o,[255,255,255]),c=Ts(e,"res/street/facade_pink.jpg",n,[200,150,135]),f=Ts(e,"res/street/facade_yellow.jpg",n,[225,180,95]),l=Ts(e,"res/street/facade_cream.jpg",n,[215,200,175]),u=Ts(e,"res/street/cobbles.jpg",r,[95,95,95]),h=Date.now(),d=e({frag:TM,vert:LM,attributes:{position:t.position,normal:t.normal,attr:t.attr},elements:new Uint32Array(t.elements),uniforms:{photo:a,photoMask:s,pinkTex:c,yellowTex:f,creamTex:l,cobbleTex:u,photoNight:i,night:()=>zM.night,time:()=>(Date.now()-h)/1e3}});return function(){d()}};Y1.exports.layout={MOUTH_Z:Dr,PINK_X:Cs,RIGHT_X:Gi,PINK_H:X0,CREAM_H:zs,S:Pn}});var nx=de((ZA,ox)=>{"use strict";var CM=Jn().GLSL,{glassPanes:NM}=Li(),tx=ir();function RM(){let e=[],t=[],o=(n,r)=>{for(let a of n)e.push(a),t.push(r)};return o(NM(),[0,0,1]),o(tx.windowGlass(),[0,0,1]),o(tx.farDoorGlass(),[1,0,0]),{position:e,normal:t}}ox.exports=e=>{let t=RM(),o=e({frag:`
		precision highp float;
		${CM}
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
		}`,attributes:{position:t.position,normal:t.normal},count:t.position.length,cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}});return function(){o()}}});var bx=de((JA,ed)=>{"use strict";var lx=Jn().GLSL,PM=ws(),K1=sa(),{wallWithHoles:OM,C:qi}=ir(),rt=.28,Z={westBack:14.4,westCol:15-rt,eastCol:37.4+rt,eastBack:41.8,south:qi.z1+.7,northCol:qi.z1+.7+16,northBack:qi.z1+.7+19,cx:(15+37.4)/2,cz:(qi.z1+.7+qi.z1+.7+16-rt)/2},Lo={x0:Z.westCol+rt,x1:Z.eastCol-rt,z0:Z.south,z1:Z.northCol-rt},hr=3.3,wl=.92,Hi=5.6,rx=6,ua=11.9,$i=9.6,ro={x0:Z.cx-2.9,x1:Z.cx+2.9,top:14.4},yh=7,fx=4,Z1=(Z.eastCol-Z.westCol)/yh,IM=(Z.northCol-Z.south)/fx,hx=3,Ml=.26,Is=1.4,Ps=1.1,ph=3,ja=(()=>{let e=[.3,.82,-.49],t=Math.hypot(...e);return e.map(o=>o/t)})(),We={GROUND:0,BRICK:1,STONE:2,MARBLE:3,HEDGE:4,POT:5,ROOF:6,SHUTTER:7,PANE:8,PLASTER:9,BARK:10,IRON:11,SKY:12,LEAD:13,FARBRICK:14,DARK:15,SOIL:16},Wa=[],ux=(e,t,o)=>[Z.cx+e,t,Z.cz+o],vh=ux(-5.9,0,3.4),Ui=.85,Di={c:[vh[0],4.6*Ui+.5,vh[2]],r:[5*Ui,3.6*Ui,4.5*Ui]},dx=[{d:[0,4.4,0],r:[3.9,2.6,3.6],n:230},{d:[-2.7,4,-1.2],r:[2.6,2.1,2.4],n:105},{d:[2.7,4.5,-1.6],r:[2.5,2.2,2.3],n:105},{d:[.8,6.9,.8],r:[2.6,2,2.5],n:105},{d:[-1.6,6.1,2],r:[2.2,1.9,2],n:80},{d:[2.3,3.4,1.8],r:[2,1.5,1.9],n:60}].map(e=>({c:[vh[0]+e.d[0]*Ui,e.d[1]*Ui+.5,vh[2]+e.d[2]*Ui],r:e.r.map(t=>t*Ui),n:e.n}));for(let e of dx)Wa.push({...e,cell:0,leaf:[.5,.7,.46],bloom:[1,1,1],size:[.95,1.35],magnolia:1,shadow:1});var FM=[3.6,6.3,9];for(let e of FM){let t=8.6+e%1.7*.6;Wa.push({c:ux(e,t/2+.5,5.2),r:[.9,t/2,.9],cell:1,leaf:[.5,.64,.5],bloom:[1,1,1],n:180,size:[.72,.98],spindle:1,shadow:1})}var GM=[{d:[-8.4,-4],bloom:[1,.62,.78]},{d:[-3.6,-4.6],bloom:[1,.98,.94]},{d:[3.8,-4.3],bloom:[1,.98,.94]},{d:[8.5,-4],bloom:[1,.58,.72]}].map(e=>({x:Z.cx+e.d[0],z:Z.cz+e.d[1],bloom:e.bloom}));for(let e of GM)Wa.push({c:[e.x,.95,e.z],r:[1.25,.95,1.1],cell:3,leaf:[.7,.86,.58],bloom:e.bloom,n:80,size:[.55,.8],shadow:1});var J1=[45,135,225,315].map(e=>{let t=e*Math.PI/180;return[Z.cx+Math.cos(t)*2.3,Z.cz+Math.sin(t)*2.3]});for(let[e,t]of J1)Wa.push({c:[e,1.85,t],r:[.62,.55,.62],cell:3,leaf:[.78,.95,.55],bloom:[1.25,1,.25],n:36,size:[.32,.42],shadow:1});var px=[];{let e=(o,n,r,a,i,s)=>{let c=Math.hypot(r-o,a-n),f=Math.floor(c/.9);for(let l=0;l<=f;l++){let u=l/f,h=o+(r-o)*u,d=n+(a-n)*u;i!==void 0&&Math.abs((r!==o?h:d)-i)<s||px.push([h,d])}};e(Lo.x0+.45,Lo.z0+1.2,Lo.x0+.45,Lo.z1-.45,Z.cz,1),e(Lo.x1-.45,Lo.z0+1.2,Lo.x1-.45,Lo.z1-.45,Z.cz,1),e(Lo.x0+.45,Lo.z1-.45,Lo.x1-.45,Lo.z1-.45,Z.cx,1.9)}var DM=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],mh=e=>{let t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]};function K0(e,t,o,n,r,a,i){let s=e.vert(t,a,i),c=e.vert(o,a,i),f=e.vert(n,a,i),l=e.vert(r,a,i);e.tri(s,c,f),e.tri(s,f,l)}function On(e,t,o,n,r,a,i,s){e.box(Math.min(t,r),Math.min(o,a),Math.min(n,i),Math.max(t,r),Math.max(o,a),Math.max(n,i),[s,0,0])}function $M(e,t,o){return{vert:(n,r,a)=>e.vert(t(n),o(r),a),tri:e.tri}}var qM={north:[e=>[e[0],e[1],Z.northCol-e[2]],e=>[e[0],e[1],-e[2]]],west:[e=>[Z.westCol+e[2],e[1],e[0]],e=>[e[2],e[1],e[0]]],east:[e=>[Z.eastCol-e[2],e[1],e[0]],e=>[-e[2],e[1],e[0]]]};function vx(e,t,o,n,r){let a=[];for(let i=0;i<o;i++){let s=e+i*t+(i===0?n:.02),c=e+(i+1)*t-(i===o-1?r:.02);a.push([s,c,e+(i+.5)*t])}return a}var HM=vx(Z.westCol,Z1,yh,rt+Ml,rt+Ml),ax=vx(Z.south,IM,fx,.32,rt+Ml),Y0=[Z.cx-32.35,Z.northCol-77],UM=Array.from({length:yh-1},(e,t)=>Z.westCol+(t+1)*Z1),mx=e=>(e[1]-e[0])/2-.2,_l=e=>(e[0]+e[1])/2;function BM(e,t){let o=_l(e),n=mx(e);return{u0:e[0],u1:e[1],bottom:t?0:wl,head:r=>{let a=Math.abs(r-o);return a<n?hr+Math.sqrt(n*n-a*a):hr},step:.05}}function jM(e,t,o){return{u0:e-o,u1:e+o,bot:n=>t-Math.sqrt(Math.max(0,o*o-(n-e)*(n-e))),head:n=>t+Math.sqrt(Math.max(0,o*o-(n-e)*(n-e))),step:.04,mat:[We.STONE,0,0]}}function WM(e,t,o,n){return{u0:e-t/2,u1:e+t/2,bottom:o,head:()=>n,step:.5,mat:[We.STONE,0,0]}}function ix(e,t,o){let[n,r]=qM[t],a=$M(e,n,r),i=[];o.arches.forEach((l,u)=>i.push(BM(l,u===o.open)));let s=[];for(let l of o.bays||o.arches){let u=_l(l);o.oculi&&i.push(jM(u,6.85,.3)),s.push({c:u,y0:o.win[0],y1:o.win[1],w:1.05})}for(let l of o.extraWindows||[])s.push(l);for(let l of s)i.push(WM(l.c,l.w,l.y0,l.y1));for(let l of o.extraHoles||[])i.push(l);OM(a,{u0:o.u0,u1:o.u1,w0:-rt,w1:rt,top:o.top,holes:i,mat:[We.BRICK,0,0],revealMat:[We.BRICK,0,0],noEnds:o.noEnds,cuts:o.cuts,topStep:.25});let c=(l,u,h,d,v,p,m)=>{let g=n([l,u,h]),y=n([d,v,p]);On(e,g[0],g[1],g[2],y[0],y[1],y[2],m)},f=(l,u,h,d,v,p)=>K0(a,l,u,h,d,v,[p,0,0]);for(let l of o.arches){let u=_l(l),h=mx(l),d=28;for(let v of[rt,-rt]){let p=v>0?1:-1,m=v+p*.025;for(let g=0;g<d;g++){let y=Math.PI*g/d,b=Math.PI*(g+1)/d,k=(D,re)=>[u+Math.cos(D)*re,hr+Math.sin(D)*re],E=k(y,h),L=k(b,h),N=k(y,h+.26),W=k(b,h+.26);f([E[0],E[1],m],[L[0],L[1],m],[W[0],W[1],m],[N[0],N[1],m],[0,0,p],We.STONE);let O=Math.cos((y+b)/2),te=Math.sin((y+b)/2);f([N[0],N[1],v],[W[0],W[1],v],[W[0],W[1],m],[N[0],N[1],m],[O,te,0],We.STONE)}}}if(o.arches.forEach((l,u)=>{u!==o.open&&c(l[0]-.02,wl,-rt-.05,l[1]+.02,wl+.09,rt+.05,We.STONE)}),c(o.u0,rx,-rt,o.u1,rx+.18,rt+.09,We.STONE),c(o.u0,o.win[0]-.12,rt-.01,o.u1,o.win[0],rt+.06,We.STONE),o.cornice)for(let[l,u,h]of o.cornice)c(l,h-.22,rt-.01,u,h,rt+.16,We.STONE),c(l,h,rt-.01,u,h+.16,rt+.42,We.STONE);for(let{c:l,y0:u,y1:h,w:d,door:v}of s){let p=d/2;if(f([l-p-.01,u,.06],[l+p+.01,u,.06],[l+p+.01,h,.06],[l-p-.01,h,.06],[0,0,1],v?We.DARK:We.PANE),v){c(l-p-.16,0,rt-.01,l-p,h+.16,rt+.07,We.STONE),c(l+p,0,rt-.01,l+p+.16,h+.16,rt+.07,We.STONE),c(l-p-.16,h,rt-.01,l+p+.16,h+.2,rt+.09,We.STONE),c(l-p,0,.07,l+p,h-.02,.12,We.SHUTTER),c(l-.012,0,.12,l+.012,h-.02,.14,We.DARK);continue}for(let m of[-1,1]){let g=l+m*p;c(g+m*.02,u+.02,rt+.02,g+m*(p+.025),h-.02,rt+.06,We.SHUTTER)}c(l-p-.09,h,rt-.01,l+p+.09,h+.16,rt+.05,We.STONE),c(l-p-.09,u-.1,rt-.01,l+p+.09,u,rt+.09,We.STONE),c(l-.015,u,.06,l+.015,h,.09,We.SHUTTER),c(l-p,(u+h)/2-.015,.06,l+p,(u+h)/2+.015,.09,We.SHUTTER)}if(o.oculi)for(let l of o.bays||o.arches){let u=_l(l);f([u-.31,6.54,0],[u+.31,6.54,0],[u+.31,7.16,0],[u-.31,7.16,0],[0,0,1],We.DARK)}for(let l of o.cols){let u=wl+.09,h=n([l,0,0]);On(e,h[0]-.24,u,h[2]-.24,h[0]+.24,u+.12,h[2]+.24,We.MARBLE),e.lathe([[.23,u+.12,1],[.24,u+.17],[.2,u+.24],[.215,u+.28],[.17,u+.34,1],[.165,u+.6],[.155,hr-.5],[.15,hr-.38,1],[.175,hr-.34,1],[.17,hr-.3],[.2,hr-.22],[.27,hr-.15],[.29,hr-.12,1]],h[0],h[2],18,{mat:()=>[We.MARBLE,0,0]}),On(e,h[0]-.29,hr-.12,h[2]-.29,h[0]+.29,hr+.01,h[2]+.29,We.STONE)}o.walk&&o.walk(e)}function VM(e){let t=[-1,0,1].map(r=>{let a=Z.cx+r*1.7;return{u0:a-.6,u1:a+.6,bottom:11,head:i=>12.9+Math.sqrt(Math.max(0,.36-(i-a)*(i-a))),step:.04,mat:[We.STONE,0,0]}});ix(e,"north",{u0:Z.westCol-rt,u1:Z.eastCol+rt,top:r=>r>ro.x0+1e-6&&r<ro.x1-1e-6?ro.top:ua,cuts:[ro.x0,ro.x0+1e-5,ro.x1-1e-5,ro.x1],arches:HM,open:hx,cols:UM,oculi:!0,win:[8,9.9],extraHoles:t,cornice:[[Z.westCol-rt-3.3,ro.x0,ua],[ro.x1,Z.eastCol+rt+3.3,ua],[ro.x0-.2,ro.x1+.2,ro.top]],walk:r=>{On(r,Lo.x0,Hi,Z.northCol+rt,Lo.x1,Hi+.2,Z.northBack,We.PLASTER),On(r,Lo.x0,0,Z.northBack,Lo.x1,Hi,Z.northBack+.3,We.PLASTER);for(let a of[Z.cx-7.2,Z.cx,Z.cx+7.2])K0(r,[a-.8,0,Z.northBack-.01],[a+.8,0,Z.northBack-.01],[a+.8,2.9,Z.northBack-.01],[a-.8,2.9,Z.northBack-.01],[0,0,-1],[We.DARK,0,0]),On(r,a-.98,0,Z.northBack-.06,a+.98,3.12,Z.northBack,We.STONE),K0(r,[a-.8,0,Z.northBack-.07],[a+.8,0,Z.northBack-.07],[a+.8,2.9,Z.northBack-.07],[a-.8,2.9,Z.northBack-.07],[0,0,-1],[We.DARK,0,0])}}),K0(e,[ro.x0,11,Z.northCol+.2],[ro.x1,11,Z.northCol+.2],[ro.x1,13.6,Z.northCol+.2],[ro.x0,13.6,Z.northCol+.2],[0,0,-1],[We.DARK,0,0]),On(e,ro.x0+.3,10.88,Z.northCol-rt-.06,ro.x1-.3,11,Z.northCol-rt+.1,We.STONE),On(e,Z.westBack,Hi+.2,Z.northBack,Z.eastBack,ua,Z.northBack+3.4,We.BRICK),On(e,Z.westBack,$i,Z.northCol-rt,Z.westCol-rt,ua,Z.northCol+rt,We.BRICK),On(e,Z.eastCol+rt,$i,Z.northCol-rt,Z.eastBack,ua,Z.northCol+rt,We.BRICK),On(e,Z.westBack,Hi+.2,Z.northCol+rt+.12,Z.eastBack,ua,Z.northBack,We.BRICK),yl(e,[Z.westBack-.5,ua+.16,Z.northCol-rt-.42],[ro.x0-Z.westBack+.5,0,0],[0,2.6,4.4],We.ROOF),yl(e,[ro.x1,ua+.16,Z.northCol-rt-.42],[Z.eastBack+.5-ro.x1,0,0],[0,2.6,4.4],We.ROOF),yl(e,[ro.x0-.3,ro.top+.16,Z.northCol-rt-.42],[ro.x1-ro.x0+.6,0,0],[0,1.4,3],We.ROOF),sx(e,[ro.x0-.3,ro.top+.16,Z.northCol-rt-.42],[ro.x0-.3,ro.top+1.56,Z.northCol-rt+2.58],[ro.x0-.3,ro.top+.16,Z.northCol-rt+2.58],[-1,0,0],We.BRICK),sx(e,[ro.x1+.3,ro.top+.16,Z.northCol-rt-.42],[ro.x1+.3,ro.top+1.56,Z.northCol-rt+2.58],[ro.x1+.3,ro.top+.16,Z.northCol-rt+2.58],[1,0,0],We.BRICK),On(e,ro.x0,ua,Z.northCol+rt,ro.x1,ro.top,Z.northCol+2.6,We.BRICK);for(let[r,a]of[[Z.cx-9.8,Z.northBack+.6],[Z.cx+9.4,Z.northBack+.4],[Z.cx-4.6,Z.northBack+1]])On(e,r-.4,12.5,a-.4,r+.4,15.4,a+.4,We.BRICK),On(e,r-.52,15.4,a-.52,r+.52,15.62,a+.52,We.STONE);let o=(r,a,i)=>{let s=r==="west"?-1:1,c=[];ax.forEach((u,h)=>{let d=_l(u);h===1?c.push({c:d,y0:0,y1:2.9,w:1.4,door:!0}):c.push({c:d,y0:1,y1:2.75,w:1.05}),c.push({c:d,y0:3.85,y1:5.45,w:1.05})}),ix(e,r,{u0:Z.south,u1:Z.northCol-rt,top:()=>$i,arches:[],bays:ax,cols:[],win:[7.45,8.85],extraWindows:c,noEnds:!0,cornice:[[Z.south,Z.northCol-rt,$i]]}),On(e,a,0,Z.south,i+s*(rt+.12),$i,Z.northBack+.3,We.BRICK);let f=i-s*rt;On(e,f,0,Z.south,f-s*.06,.55,Z.northCol-rt,We.STONE);let l=i-s*(rt+.42);yl(e,[l,$i+.16,Z.south],[0,0,Z.northCol-rt-Z.south],[a-l+s*.4,1.9,0],We.ROOF)};o("west",Z.westBack,Z.westCol),o("east",Z.eastBack,Z.eastCol);let n=qi.x1+.7;On(e,13.65,7.4,Z.south-.02,n,7.62,Z.south+.14,We.STONE),On(e,13.65,10.4,Z.south-.02,n,10.6,Z.south+.38,We.STONE),yl(e,[13.65,10.6,Z.south+.38],[n-13.65,0,0],[0,2.2,-5],We.ROOF)}function sx(e,t,o,n,r,a){let i=[a,0,0];e.tri(e.vert(t,r,i),e.vert(o,r,i),e.vert(n,r,i))}function yl(e,t,o,n,r){let a=mh([o[1]*n[2]-o[2]*n[1],o[2]*n[0]-o[0]*n[2],o[0]*n[1]-o[1]*n[0]]),i=a[1]<0?a.map(f=>-f):a,s=(f,l)=>[t[0]+o[0]*f+n[0]*l,t[1]+o[1]*f+n[1]*l,t[2]+o[2]*f+n[2]*l];K0(e,s(0,0),s(1,0),s(1,1),s(0,1),i,[r,0,0]);let c=.08;K0(e,s(0,0),s(1,0),[s(1,0)[0],s(1,0)[1]-c,s(1,0)[2]],[s(0,0)[0],s(0,0)[1]-c,s(0,0)[2]],mh([-n[0],0,-n[2]]),[r,0,0])}function XM(e){let t=Z.westBack,o=Z.eastBack,n=Z.south,r=Z.northBack,a=36,i=22,s=[];for(let c=0;c<=a;c++){s.push([]);for(let f=0;f<=i;f++){let l=[t+(o-t)*c/a,0,n+(r-n)*f/i];s[c].push(e.vert(l,[0,1,0],[We.GROUND,0,0]))}}for(let c=0;c<a;c++)for(let f=0;f<i;f++)e.tri(s[c][f],s[c+1][f],s[c+1][f+1]),e.tri(s[c][f],s[c+1][f+1],s[c][f+1])}var bl=.46,Os=.58,Rs=[[-.5,0],[-.52,.45],[-.46,.78],[-.3,.95],[0,1],[.3,.95],[.46,.78],[.52,.45],[.5,0]];function YM(e,t,o){let n=Ps+o,r=(e>0?Lo.x1-Z.cx:Z.cx-Lo.x0)-Is-o,a=Ps+o,i=(t>0?Lo.z1-Z.cz:Z.cz-Lo.z0)-Is-o,s=ph+o,c=Math.sqrt(s*s-n*n),f=Math.sqrt(s*s-a*a),l=[[n,c],[n,i],[r,i],[r,a],[f,a]],u=Math.atan2(a,f),h=Math.atan2(c,n);for(let d=1;d<10;d++){let v=u+(h-u)*d/10;l.push([Math.cos(v)*s,Math.sin(v)*s])}return l.map(([d,v])=>[Z.cx+e*d,Z.cz+t*v])}function KM(e,t,o){let n=o[0]-t[0],r=o[1]-t[1],a=Math.hypot(n,r),i=n/a,s=r/a,c=-s,f=i,l=bl*.5,u=-l,h=a+l,d=[],v=Math.max(1,Math.ceil((h-u)/1));for(let p=0;p<=v;p++){let m=u+(h-u)*p/v,g=[];for(let y=0;y<Rs.length;y++){let[b,k]=Rs[y],E=Math.min(Rs.length-2,y),L=Rs[Math.max(0,y-1)],N=Rs[Math.min(Rs.length-1,y+1)],W=(N[0]-L[0])*bl,te=(N[1]-L[1])*Os,D=-W,re=Math.hypot(te,D)||1,q=[t[0]+i*m+c*b*bl,k*Os,t[1]+s*m+f*b*bl],Y=[c*(-te/re),-D/re,f*(-te/re)];g.push(e.vert(q,Y[1]<-.2?[c*Math.sign(b),.3,f*Math.sign(b)]:Y,[We.HEDGE,0,0]))}d.push(g)}for(let p=0;p<v;p++)for(let m=0;m<Rs.length-1;m++)e.tri(d[p][m],d[p+1][m],d[p+1][m+1]),e.tri(d[p][m],d[p+1][m+1],d[p][m+1]);for(let[p,m]of[[0,-1],[v,1]]){let g=d[p],y=e.vert([t[0]+i*(p?h:u),Os*.5,t[1]+s*(p?h:u)],[i*m,0,s*m],[We.HEDGE,0,0]);for(let b=0;b<g.length-1;b++)e.tri(y,g[b],g[b+1])}}function QM(e){for(let t of[-1,1])for(let o of[-1,1]){let n=YM(t,o,.3);for(let r=0;r<n.length;r++)KM(e,n[r],n[(r+1)%n.length])}}function ZM(e){let t=Z.cx,o=Z.cz,n=()=>[We.STONE,0,0];e.lathe([[1.45,0,1],[1.45,.14,1],[1.12,.14,1],[1.12,.3,1],[0,.3]],t,o,8,{mat:n}),e.lathe([[.76,.3,1],[.8,.38,1],[.74,.44],[.76,.7],[.82,.9],[.8,1.02,1],[.88,1.06,1],[.88,1.18,1],[.6,1.18,1],[.6,.98]],t,o,24,{mat:n}),e.lathe([[.6,.98,1],[0,.98]],t,o,16,{mat:()=>[We.DARK,0,0]});let r={mat:()=>[We.IRON,0,0]};e.tube([[t-.72,1.1,o],[t-.72,1.9,o],[t-.7,2.3,o]],()=>.035,8,6,r),e.tube([[t+.72,1.1,o],[t+.72,1.9,o],[t+.7,2.3,o]],()=>.035,8,6,r);let a=[];for(let i=0;i<=10;i++){let s=Math.PI*i/10;a.push([t-Math.cos(s)*.7,2.3+Math.sin(s)*.45,o])}e.tube(a,()=>.03,20,6,r),e.tube([[t-.45,2.25,o],[t,2.38,o],[t+.45,2.25,o]],()=>.02,8,5,r),e.ellipsoid([t,2.32,o],[.03,.13,.13],6,10,r);for(let i of[-1,1]){let s=[];for(let c=0;c<=12;c++){let f=c/12*Math.PI*1.6,l=.16*(1-c/16);s.push([t+i*(.72-.18+Math.cos(f)*l*i*-1+0),1.95+Math.sin(f)*l,o])}e.tube(s,()=>.016,16,5,r)}}function JM(e){for(let[t,o]of J1)e.lathe([[.26,0,1],[.3,.06],[.36,.42],[.38,.5,1],[.44,.52,1],[.44,.64,1],[.38,.66,1],[.37,.6]],t,o,20,{mat:()=>[We.POT,0,0]}),e.lathe([[.37,.6,1],[0,.6]],t,o,12,{mat:()=>[We.SOIL,0,0]}),e.tube([[t,.6,o],[t+.02,1,o-.01],[t-.01,1.45,o+.02]],n=>.045-n*.02,6,6,{mat:()=>[We.BARK,0,0]})}function ek(e){let[t,,o]=Di.c,n=xx(7),r=[[-1.8,.4,3.6],[1.6,-.9,3.9],[.4,1.9,3.4],[-.6,-1.7,4.2],[2.1,1.2,3.2]];for(let[a,i,s]of r){let c=[[t+a*.05,0,o+i*.05],[t+a*.25,s*.35,o+i*.25],[t+a*.6,s*.7,o+i*.6],[t+a,s,o+i],[t+a*1.35+(n()-.5),s+1.4,o+i*1.35+(n()-.5)]];e.tube(c,f=>.2*(1-f*.75),14,9,{mat:()=>[We.BARK,0,0]});for(let f=0;f<2;f++){let l=.55+f*.2,u=[t+a*l,s*l,o+i*l],h=n()*Math.PI*2;e.tube([u,[u[0]+Math.cos(h)*1.3,u[1]+.9,u[2]+Math.sin(h)*1.3],[u[0]+Math.cos(h)*2.3,u[1]+1.4+n(),u[2]+Math.sin(h)*2.3]],d=>.08*(1-d*.7),8,6,{mat:()=>[We.BARK,0,0]})}}for(let a of Wa.filter(i=>i.spindle))e.tube([[a.c[0],0,a.c[2]],[a.c[0],1.4,a.c[2]]],()=>.12,3,7,{mat:()=>[We.BARK,0,0]})}function tk(e){let t=()=>[We.FARBRICK,0,0],o=()=>[We.LEAD,0,0],n=(a,i,s,c,f,l)=>{e.lathe([[s+.3,20,1],[s+.3,c-1.2,1],[s+.8,c-.9,1],[s+.8,c,1],[s,c,1]],a,i,28,{mat:t});let u=[];for(let d=0;d<=12;d++){let v=d/12*Math.PI/2,p=Math.cos(v)*s,m=Math.sin(v)*f;l&&(p*=1-.18*Math.sin(v*2)),u.push([Math.max(p,s*.12),c+m])}e.lathe(u,a,i,28,{mat:o});let h=c+f;e.lathe([[s*.13,h-.2,1],[s*.13,h+3,1],[s*.18,h+3.2,1],[s*.02,h+6.4]],a,i,10,{mat:o})};On(e,14,0,104,52,26,150,We.FARBRICK),e.lathe([[3,26],[.1,32]],33,108,4,{mat:t}),n(26,124,7.2,33,9.5,!0),n(40.5,116,6,31,8,!0),n(16.5,117,5.5,30,7.2,!0),e.lathe([[6.4,20,1],[6.4,34,1],[6.9,34.4,1],[6,34.4,1],[.6,46.5,1],[.15,50]],33,132,24,{mat:o});let r=(a,i,s)=>{On(e,a-1.8,0,i-1.8,a+1.8,s,i+1.8,We.FARBRICK),e.lathe([[1.9,s,1],[1.6,s+3.5,1],[1.2,s+3.5,1],[1.2,s+6,1],[.9,s+6.2,1],[.05,s+13]],a,i,8,{mat:t})};r(20.5,109,36),r(46.5,112,38)}function ok(e){let o=[Z.cx,0,Z.cz],n=24,r=10,a=[];for(let i=0;i<=n;i++){a.push([]);let s=-Math.PI*.62+Math.PI*1.24*i/n;for(let c=0;c<=r;c++){let f=Math.PI/2*(c/r)-.05,l=[Math.sin(s)*Math.cos(f),Math.sin(f),Math.cos(s)*Math.cos(f)],u=[o[0]+l[0]*420,o[1]+l[1]*420,o[2]+l[2]*420];a[i].push(e.vert(u,[-l[0],-l[1],-l[2]],[We.SKY,0,0]))}}for(let i=0;i<n;i++)for(let s=0;s<r;s++)e.tri(a[i][s],a[i+1][s],a[i+1][s+1]),e.tri(a[i][s],a[i+1][s+1],a[i][s+1])}function nk(){let e=[],t=[],o=[],n=[],r=PM.createBuilder(e,t,o,n);return XM(r),VM(r),QM(r),ZM(r),JM(r),ek(r),r.save(),r.translate(Y0[0],0,Y0[1]),tk(r),r.restore(),ok(r),{position:e,normal:t,elements:o,attr:n}}var gx=[[[13.65,0,qi.z0-.7],[qi.x1+.7,10.6,Z.south]],[[Z.westBack,Hi,Z.northCol-rt],[Z.eastBack,ua,Z.northBack+3.4]],[[ro.x0,ua,Z.northCol-rt],[ro.x1,ro.top,Z.northCol+2.6]],[[Z.westBack,0,Z.south],[Z.westCol+rt,$i,Z.northBack+.3]],[[Z.eastCol-rt,0,Z.south],[Z.eastBack,$i,Z.northBack+.3]],[[14+Y0[0],0,104+Y0[1]],[52+Y0[0],26,150+Y0[1]]]];function rk(e,t,o,n){let r=.001,a=1e9;for(let i=0;i<3;i++){if(Math.abs(t[i])<1e-9){if(e[i]<o[i]||e[i]>n[i])return!1;continue}let s=(o[i]-e[i])/t[i],c=(n[i]-e[i])/t[i];if(s>c&&([s,c]=[c,s]),r=Math.max(r,s),a=Math.min(a,c),r>a)return!1}return!0}function dh(e,t,o,n){let r=[(e[0]-o[0])/n[0],(e[1]-o[1])/n[1],(e[2]-o[2])/n[2]],a=[t[0]/n[0],t[1]/n[1],t[2]/n[2]],i=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],s=r[0]*a[0]+r[1]*a[1]+r[2]*a[2],c=r[0]*r[0]+r[1]*r[1]+r[2]*r[2]-1,f=s*s-i*c;if(f<=0)return 0;let l=Math.sqrt(f),u=Math.max(0,(-s-l)/i),h=(-s+l)/i;return Math.max(0,h-u)}function Q1(e){for(let[t,o]of gx)if(rk(e,ja,t,o))return 0;return 1}function xx(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let o=t;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}function ak(){let e=[],t=[],o=[],n=[],r=[],a=[],i=[],s=xx(21),c=(v,p,m,g,y,b,k)=>{let E=e.length/3;for(let[L,N]of[[-1,-1],[1,-1],[1,1],[-1,1]])e.push(...v),t.push(L,N),o.push(p,m,g),n.push(...y),r.push(...b),a.push(...k);i.push(E,E+1,E+2,E,E+2,E+3)},f=(v,p)=>{let m=1;for(let g of Wa){if(g===p||!g.shadow)continue;let y=dh(v,ja,g.c,g.r);y>0&&(m*=Math.exp(-y*.9))}return m},l=Wa.map(v=>({...v,pts:null}));for(let v of l)for(let p=0;p<v.n;p++){let m;do m=[s()*2-1,s()*2-1,s()*2-1];while(m[0]*m[0]+m[1]*m[1]+m[2]*m[2]>1);let g=Math.hypot(m[0],m[1],m[2])||1,y=Math.pow(s(),.35)*.98,b=[m[0]/g*y,m[1]/g*y,m[2]/g*y];if(v.spindle){let q=b[1],Y=Math.sqrt(Math.max(.02,1-q*q))*(q>0?1-q*.55:1+q*.25),be=Math.hypot(b[0],b[2])||1,qe=Y*Math.min(1,be*1.4);b=[b[0]/be*qe,q,b[2]/be*qe]}v.magnolia&&b[1]<-.55&&(b[1]=-.55+(b[1]+.55)*.35);let k=[v.c[0]+b[0]*v.r[0],v.c[1]+b[1]*v.r[1],v.c[2]+b[2]*v.r[2]],E,L;if(v.magnolia){let q=0;for(let qe of dx)q=Math.max(q,dh(k,ja,qe.c,qe.r));E=Math.exp(-q*1.1);let Y=1;for(let qe of Wa)if(!qe.magnolia&&qe.shadow){let Ae=dh(k,ja,qe.c,qe.r);Ae>0&&(Y*=Math.exp(-Ae*.9))}E*=Q1(k)*Y;let be=DM(k,Di.c);L=mh([be[0]/Di.r[0]+b[0]*.5,be[1]/Di.r[1]+b[1]*.5,be[2]/Di.r[2]+b[2]*.5]),y=Math.min(1,Math.hypot(be[0]/Di.r[0],be[1]/Di.r[1],be[2]/Di.r[2])*.6+y*.4)}else{let q=dh(k,ja,v.c,v.r);E=Math.exp(-q*(v.spindle?2.2:1.25)),E*=Q1(k)*f(k,Wa[l.indexOf(v)]),L=mh([b[0]/v.r[0],b[1]/v.r[1],b[2]/v.r[2]])}let N=Math.max(0,L[0]*ja[0]+L[1]*ja[1]+L[2]*ja[2]),W=.25+.75*Math.pow(y,1.5)*(.65+.35*(L[1]*.5+.5)),O=v.size[0]+(v.size[1]-v.size[0])*s(),te=.85+s()*.3,D=v.leaf.map(q=>q*te),re=v.cell;v.cell===3&&s()<.35&&(re=2),c(k,O,re,s()*Math.PI*2,[E,W,.35+.65*N],D,v.bloom)}for(let[v,p]of px){let m=s()<.5;for(let g=0;g<3;g++){let y=[v+(s()-.5)*.7,.28+s()*.22,p+(s()-.5)*.5],b=Q1(y)*f(y,null);c(y,.32+s()*.12,s()<.7?3:2,s()*6.28,[b,.6+s()*.3,.8],[.75,.9,.6],m?[1,.55,.75]:[.85,.8,1.15])}}let u=i.length/6,h=Array.from({length:u},(v,p)=>p);for(let v=u-1;v>0;v--){let p=Math.floor(s()*(v+1));[h[v],h[p]]=[h[p],h[v]]}let d=[];for(let v of h)for(let p=0;p<6;p++)d.push(i[v*6+p]);return{center:e,corner:t,par:o,light:n,tint:r,bloom:a,elements:d}}var et=e=>e.toFixed(4),kl=e=>`vec3(${et(e[0])}, ${et(e[1])}, ${et(e[2])})`,yx=`
const vec3 SUN = ${kl(ja)};
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
`,ik=gx.map(([e,t])=>`if (hitBox(ro, SUN, ${kl(e)}, ${kl(t)})) return 0.0;`).join(`
	`),sk=Wa.filter(e=>e.shadow).map(e=>`tr *= crownShade(ro, ${kl(e.c)}, ${kl(e.r)}, ${e.spindle?"1.8":"1.0"});`).join(`
	`),ck=(e,t,o,n,r,a,i,s,c)=>`
	{
		float t = (${et(t)} - ro.${e}) / SUN.${e};
		if (t > 0.0) {
			vec3 q = ro + SUN * t;
			float u = q.${e==="z"?"x":"z"};
			if (q.y < ${et(Hi)} && u > ${et(o-rt)} && u < ${et(o+n*r+rt)}) {
				float k = floor((u - ${et(o)}) / ${et(n)});
				float a = ${et(o)} + k * ${et(n)} + (k < 0.5 ? ${et(a)} : 0.02);
				float b = ${et(o)} + (k + 1.0) * ${et(n)} - (k > ${et(r-1.5)} ? ${et(i)} : 0.02);
				float c = 0.5 * (a + b), r = 0.5 * (b - a) - 0.2;
				float d = abs(u - c);
				float sill = abs(k - ${et(s)}) < 0.5 ? 0.0 : ${et(wl+.09)};
				bool hole = (q.y > sill && q.y < ${et(hr)} && u > a && u < b && d < 0.5 * (b - a) - 0.17)
					|| (q.y >= ${et(hr)} && d * d + (q.y - ${et(hr)}) * (q.y - ${et(hr)}) < r * r);
				if (!hole && ${c}) return 0.0;
			}
		}
	}`,gh=Ps+.3,xh=Ps+.3,El=ph+.3,cx=Lo.x1-Z.cx-Is-.3,lk=Lo.z1-Z.cz-Is-.3,fk=Z.cz-Lo.z0-Is-.3,hk=Math.sqrt(El*El-gh*gh),uk=Math.sqrt(El*El-xh*xh),dk=[[Z.cx,Z.cz,.86,1.18],[Z.cx,Z.cz,1.25,.3],...J1.map(([e,t])=>[e,t,.42,.65])].map(([e,t,o,n])=>`if (hitCyl(ro, vec2(${et(e)}, ${et(t)}), ${et(o)}, ${et(n)})) return 0.0;`).join(`
	`),pk=`
float segDist(vec2 p, vec2 a, vec2 b) {
	vec2 pa = p - a, ba = b - a;
	float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
	return length(pa - ba * h);
}

// distance to the nearest hedge line
float hedgeDist(vec2 xz) {
	vec2 q = abs(xz - vec2(${et(Z.cx)}, ${et(Z.cz)}));
	float b1 = xz.y > ${et(Z.cz)} ? ${et(lk)} : ${et(fk)};
	vec2 A = vec2(${et(gh)}, ${et(hk)}), Bp = vec2(${et(gh)}, b1), C = vec2(${et(cx)}, b1);
	vec2 D = vec2(${et(cx)}, ${et(xh)}), E = vec2(${et(uk)}, ${et(xh)});
	float d = min(min(segDist(q, A, Bp), segDist(q, Bp, C)), min(segDist(q, C, D), segDist(q, D, E)));
	float ang = atan(q.y, q.x);
	if (ang > atan(E.y, E.x) && ang < atan(A.y, A.x)) d = min(d, abs(length(q) - ${et(El)}));
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
	${ik}
	${ck("z",Z.northCol,Z.westCol,Z1,yh,rt+Ml,rt+Ml,hx,"ro.z > "+et(Z.northCol-rt))}
	// on lighter settings only the buildings cast shadows
	if (gardenDetail < 0.5) return 1.0;
	${dk}
	if (ro.y < ${et(Os)} && ro.x > ${et(Lo.x0)} && ro.x < ${et(Lo.x1)}) {
		for (int i = 1; i <= 4; i++) {
			float t = float(i) / 4.0 * (${et(Os)} - ro.y) / SUN.y;
			vec3 q = ro + SUN * t;
			float w = ${et(bl*.5)} * sqrt(max(0.0, 1.0 - pow(q.y / ${et(Os)}, 4.0)));
			if (hedgeDist(q.xz) < w) return 0.0;
		}
	}
	float tr = 1.0;
	${sk}
	return tr;
}
`,vk=`
precision highp float;
${lx}
varying vec3 v_pos, v_normal, v_attr, v_eye;
uniform float time, gardenDetail;
${yx}
${pk}

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

	if (kind == ${We.SKY}.0) {
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

	if (kind == ${We.GROUND}.0) {
		bool yard = P.x > ${et(Lo.x0)} && P.x < ${et(Lo.x1)} && P.z < ${et(Lo.z1)};
		if (!yard) {
			// stone slabs under the arcades
			vec2 g = P.xz / 0.62;
			vec2 fg = fract(g);
			float h = hash(floor(g));
			base = mix(vec3(0.66, 0.60, 0.52), vec3(0.76, 0.70, 0.62), h);
			base *= 1.0 - 0.25 * (step(fg.x, 0.03) + step(fg.y, 0.03)) * (1.0 - lod);
			spec = 0.15;
		} else {
			float ex = min(P.x - ${et(Lo.x0)}, ${et(Lo.x1)} - P.x);
			float ez = min(P.z - ${et(Lo.z0)}, ${et(Lo.z1)} - P.z);
			float edge = min(ex, ez);
			float dx = abs(P.x - ${et(Z.cx)}), dz = abs(P.z - ${et(Z.cz)});
			float rc = length(vec2(dx, dz));
			if (edge < ${et(Is)}) {
				// brick path laid in rows, with a stone kerb
				vec2 q = ex < ez ? P.zx : P.xz;
				base = brick(q * vec2(1.0, 2.6), 0.4) * 0.9;
				if (abs(edge - ${et(Is)}) < 0.08) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (rc < ${et(ph)}) {
				// brick in rings round the wellhead
				float ang = atan(P.z - ${et(Z.cz)}, P.x - ${et(Z.cx)});
				vec2 q = vec2(ang * rc, rc);
				base = brick(q * vec2(1.0, 2.6), 0.5) * 0.92;
				if (abs(rc - ${et(ph)}) < 0.1) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (dx < ${et(Ps)} || dz < ${et(Ps)}) {
				// pale gravel
				float g = noise(P.xz * 40.0) * 0.6 + noise(P.xz * 9.0) * 0.4;
				base = mix(vec3(0.66, 0.58, 0.46), vec3(0.86, 0.79, 0.66), mix(g, 0.5, lod));
				base *= 0.94 + 0.12 * noise(P.xz * 1.3);
				float e = min(${et(Ps)} - min(dx, dz), 1.0);
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
			ao *= 0.6 + 0.4 * smoothstep(0.85, 1.6, length(P.xz - vec2(${et(Z.cx)}, ${et(Z.cz)})));
		}
	} else if (kind == ${We.BRICK}.0) {
		float pink = smoothstep(0.4, 0.6, noise(wq * 0.05 + 7.0));
		base = mix(brick(wq, 0.25 * pink), vec3(0.68, 0.46, 0.33), lod * 0.6);
		base *= 1.0 - 0.18 * smoothstep(0.0, 1.5, 1.6 - P.y) * noise(wq * 1.5);
		ao *= 0.78 + 0.22 * smoothstep(0.0, 1.2, P.y);
	} else if (kind == ${We.STONE}.0) {
		float n = noise(wq * 3.0) * 0.5 + noise(wq * 0.7) * 0.5;
		base = mix(vec3(0.74, 0.70, 0.62), vec3(0.86, 0.83, 0.76), n);
		spec = 0.1;
	} else if (kind == ${We.MARBLE}.0) {
		// red Verona marble
		float n = noise3(P * vec3(5.0, 1.5, 5.0)) * 0.6 + noise3(P * 14.0) * 0.4;
		base = mix(vec3(0.56, 0.32, 0.25), vec3(0.68, 0.42, 0.33), n);
		base = mix(base, vec3(0.80, 0.66, 0.56), smoothstep(0.66, 0.74, noise3(P * 9.0 + 3.0)) * 0.35);
		spec = 0.35;
	} else if (kind == ${We.HEDGE}.0) {
		float n = noise3(P * 9.0) * 0.55 + noise3(P * 2.5) * 0.45;
		base = mix(vec3(0.05, 0.16, 0.04), vec3(0.22, 0.38, 0.10), n);
		ao *= 0.55 + 0.45 * smoothstep(0.0, ${et(Os)}, P.y) * (0.6 + 0.4 * n);
		N = normalize(N + vec3(noise3(P * 13.0) - 0.5, 0.0, noise3(P * 13.0 + 5.0) - 0.5) * 0.9);
	} else if (kind == ${We.POT}.0) {
		base = mix(vec3(0.66, 0.34, 0.20), vec3(0.75, 0.44, 0.28), noise(wq * 6.0));
	} else if (kind == ${We.SOIL}.0) {
		base = vec3(0.20, 0.14, 0.09);
	} else if (kind == ${We.ROOF}.0) {
		// rows of curved clay tiles
		float along = abs(N.x) > abs(N.z) ? P.z : P.x;
		float rib = abs(fract(along / 0.24) - 0.5) * 2.0;
		float h = hash(vec2(floor(along / 0.24), floor(P.y / 0.42)));
		base = mix(vec3(0.58, 0.30, 0.20), vec3(0.72, 0.44, 0.30), h);
		base = mix(base, vec3(0.45, 0.42, 0.36), smoothstep(0.55, 0.85, noise(P.xz * 0.6)) * 0.4);
		base *= mix(0.62 + 0.38 * (1.0 - rib * rib), 0.85, lod);
	} else if (kind == ${We.SHUTTER}.0) {
		float slat = fract(P.y / 0.07);
		base = vec3(0.17, 0.30, 0.20) * (0.75 + 0.25 * smoothstep(0.1, 0.5, slat));
	} else if (kind == ${We.PANE}.0) {
		vec3 R = reflect(-V, N);
		base = vec3(0.03, 0.035, 0.04);
		vec3 refl = skyColor(normalize(vec3(R.x, abs(R.y), R.z))) * 0.25;
		gl_FragColor = vec4(toNight(tonemap(base + refl * (0.4 + 0.6 * pow(1.0 - abs(dot(N, V)), 3.0))), 0.45), 1.0);
		return;
	} else if (kind == ${We.PLASTER}.0) {
		base = mix(vec3(0.82, 0.76, 0.64), vec3(0.88, 0.83, 0.72), noise(wq * 1.3));
		// a darker dado on the back walls
		if (abs(N.y) < 0.5 && P.y < 1.1) base *= 0.82;
	} else if (kind == ${We.BARK}.0) {
		base = mix(vec3(0.30, 0.27, 0.24), vec3(0.45, 0.42, 0.38), noise3(P * vec3(8.0, 2.0, 8.0)));
	} else if (kind == ${We.IRON}.0) {
		base = vec3(0.07, 0.07, 0.07);
		spec = 0.4;
	} else if (kind == ${We.LEAD}.0) {
		base = mix(vec3(0.30, 0.33, 0.35), vec3(0.40, 0.43, 0.45), noise(P.xy * 0.5));
		// ribs on the domes
		float a = atan(P.z - floor(P.z / 50.0) * 50.0, 1.0);
		base *= 0.9 + 0.1 * step(0.5, fract(a * 6.0));
		far = 1.0;
	} else if (kind == ${We.FARBRICK}.0) {
		base = mix(vec3(0.66, 0.46, 0.34), vec3(0.74, 0.54, 0.40), noise(P.xy * 0.3));
		// a row of small arches under the eaves and some dark windows
		far = 1.0;
	} else if (kind == ${We.DARK}.0) {
		base = vec3(0.025, 0.022, 0.02);
	}

	// ---------- light ----------

	// in the arcade walks the sky is mostly hidden
	bool walk = (P.x < ${et(Z.westCol)} || P.x > ${et(Z.eastCol)} || P.z > ${et(Z.northCol)}) && P.y < ${et(Hi+.05)} && P.z > ${et(Z.south-.1)} && P.z < ${et(Z.northBack+.5)};
	float skyVis = 0.55 + 0.45 * N.y;
	if (walk) {
		float depth = P.z > ${et(Z.northCol)} ? P.z - ${et(Z.northCol)} : (P.x < ${et(Z.westCol)} ? ${et(Z.westCol)} - P.x : P.x - ${et(Z.eastCol)});
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
}`,mk=`
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
}`,gk=`
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
}`,xk=`
precision highp float;
${lx}
uniform sampler2D leaves;
varying vec2 v_uv;
varying vec3 v_light, v_tint, v_bloom, v_pos;
${yx}
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
}`;function yk(e,t,o){let n=e.texture({data:[[o]],min:"linear",mag:"linear"});return fetch(t).then(r=>{if(!r.ok)throw new Error("Could not load "+t);return r.blob()}).then(r=>createImageBitmap(r,{premultiplyAlpha:"none"})).then(r=>n({data:r,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(r=>console.error(r)),n}ed.exports=e=>{let t=nk(),o=ak(),n=yk(e,"res/garden/foliage.webp",[0,0,0,0]),r=Date.now(),a=()=>K1.motion?window.__streetClock!==void 0?window.__streetClock:(Date.now()-r)/1e3:20,i=e({frag:vk,vert:mk,attributes:{position:t.position,normal:t.normal,attr:t.attr},elements:new Uint32Array(t.elements),uniforms:{time:a,gardenDetail:()=>K1.gardenDetail}}),s=e({frag:xk,vert:gk,attributes:{center:o.center,corner:o.corner,par:o.par,light:o.light,tint:o.tint,bloom:o.bloom},elements:new Uint32Array(o.elements),uniforms:{leaves:n,time:a},cull:{enable:!1},count:()=>Math.floor(o.elements.length*K1.leafShare/6)*6});return function(){i(),s()}};ed.exports.layout={G:Z,YARD:Lo,SUN:ja}});var Ex=de((eT,kx)=>{"use strict";var bk=Jn().GLSL,wk=ws(),{C:Mx}=ir(),ur=Mx.x1+.35,rd=Mx.zc,td=[ur-7.3,2,rd],wx=5.2*Math.PI/180,_x=2100,_k=725,Mk=1288,kk=1450,Ek=2576,vi=rd-3.2,_h=rd+3.3,od=ur+5,nd=ur+11.7,Q0=3.9,Sl=ur+22.7,bh=40;function Sk(){let e=[],t=[],o=[],n=[],r=wk.createBuilder(e,t,o,n),a=(l,u,h,d,v,p)=>{let m=[];for(let g=0;g<=v;g++){m.push([]);for(let y=0;y<=p;y++){let b=[0,1,2].map(k=>l[k]+u[k]*g/v+h[k]*y/p);m[g].push(r.vert(b,d,[0,0,0]))}}for(let g=0;g<v;g++)for(let y=0;y<p;y++)r.tri(m[g][y],m[g+1][y],m[g+1][y+1]),r.tri(m[g][y],m[g+1][y+1],m[g][y+1])},i=_h-vi,s=.7;a([ur-s,0,vi],[od-ur+s,0,0],[0,0,i],[0,1,0],6,4);let c=nd-od,f=Math.hypot(c,Q0);return a([od,0,vi],[c,Q0,0],[0,0,i],[-Q0/f,c/f,0],6,4),a([nd,Q0,vi],[Sl-nd,0,0],[0,0,i],[0,1,0],6,4),a([ur-s,0,vi],[Sl-ur+s,0,0],[0,bh,0],[0,0,1],12,12),a([ur-s,0,_h],[Sl-ur+s,0,0],[0,bh,0],[0,0,-1],12,12),a([Sl,0,vi],[0,bh,0],[0,0,i],[-1,0,0],8,4),a([ur-s,bh,vi],[Sl-ur+s,0,0],[0,0,i],[0,-1,0],6,4),{position:e,normal:t,elements:o,attr:n}}var Tr=e=>e.toFixed(5),wh=[[ur+3.4,3.7,vi+.01,1],[ur+8.6,4.1,_h-.01,-1],[ur+14.8,Q0+3.3,vi+.01,1],[ur+19.6,Q0+3.6,_h-.01,-1]],Ak=`
precision highp float;
${bk}
uniform sampler2D photo;
uniform float time;
varying vec3 v_pos;
varying vec3 v_normal;
const int NLAMP = ${wh.length};
vec4 LAMP[NLAMP];

void main() {
	${wh.map((e,t)=>`LAMP[${t}] = vec4(${Tr(e[0])}, ${Tr(e[1])}, ${Tr(e[2])}, ${Tr(e[3])});`).join(`
	`)}
	vec3 d = v_pos - vec3(${Tr(td[0])}, ${Tr(td[1])}, ${Tr(td[2])});
	float c = ${Tr(Math.cos(wx))}, s = ${Tr(Math.sin(wx))};
	float fw = d.x * c + d.y * s;
	float up = -d.x * s + d.y * c;
	fw = max(fw, 0.05);
	vec2 px = vec2(${Tr(_k)} + ${Tr(_x)} * d.z / fw, ${Tr(Mk)} - ${Tr(_x)} * up / fw);
	vec2 uv = px / vec2(${Tr(kk)}, ${Tr(Ek)});
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
	for (int i = 0; i < ${wh.length}; i++) {
		vec4 L = LAMP[i];                       // x, y, z, side (+1 left wall, -1 right)
		vec3 d = L.xyz - v_pos;
		float dd = dot(d, d);
		float fl = 0.92 + 0.05 * sin(time * 7.3 + float(i) * 2.1) + 0.03 * sin(time * 17.0 + float(i));
		// the wall it hangs on is lit across, the paving from above
		float face = v_normal.y > 0.5 ? max(normalize(d).y, 0.0) : 0.35 + 0.65 * max(dot(v_normal, normalize(d)), 0.0);
		lit += albedo * vec3(1.0, 0.62, 0.30) * face * fl * lampK * 3.2 / (0.6 + dd * 0.45);
	}
	gl_FragColor = vec4(lit, 1.0);
}`,Tk=`
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
}`;kx.exports=e=>{let t=Sk(),o=e.texture({data:[[[120,105,85]]],min:"linear",mag:"linear"});fetch("res/florence/photo.jpg").then(s=>{if(!s.ok)throw new Error("Could not load the Florence photo");return s.blob()}).then(s=>createImageBitmap(s)).then(s=>o({data:s,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(s=>console.error(s));let n=e({frag:Ak,vert:Tk,attributes:{position:t.position,normal:t.normal},elements:new Uint32Array(t.elements),uniforms:{photo:o},cull:{enable:!1}}),r={pos:[],nrm:[],k:[],idx:[]},a=(s,c,f)=>{let[l,u,h]=s,d=[[[1,0,0],[0,1,0],[0,0,1]],[[-1,0,0],[0,1,0],[0,0,-1]],[[0,0,1],[0,1,0],[-1,0,0]],[[0,0,-1],[0,1,0],[1,0,0]],[[0,1,0],[0,0,1],[1,0,0]],[[0,-1,0],[0,0,1],[-1,0,0]]];for(let[v,p,m]of d){let g=r.pos.length/3;for(let[y,b]of[[-1,-1],[1,-1],[1,1],[-1,1]])r.pos.push(l+v[0]*c[0]+p[0]*y*c[0]+m[0]*b*c[0],u+v[1]*c[1]+p[1]*y*c[1]+m[1]*b*c[1],h+v[2]*c[2]+p[2]*y*c[2]+m[2]*b*c[2]),r.nrm.push(...v),r.k.push(f);r.idx.push(g,g+1,g+2,g,g+2,g+3)}};for(let s of wh){let c=s[3],f=s[2]+c*.42;a([s[0],s[1],f],[.11,.17,.11],1);for(let l of[-1,1])for(let u of[-1,1])a([s[0]+l*.11,s[1],f+u*.11],[.014,.18,.014],0);a([s[0],s[1]+.2,f],[.15,.03,.15],0),a([s[0],s[1]+.27,f],[.05,.05,.05],0),a([s[0],s[1]-.19,f],[.09,.025,.09],0),a([s[0],s[1]+.34,s[2]+c*.21],[.015,.015,.21],0),a([s[0],s[1]+.15,s[2]+c*.03],[.04,.24,.03],0)}let i=e({vert:`
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
		}`,attributes:{position:r.pos,normal:r.nrm,k:r.k},elements:new Uint16Array(r.idx),cull:{enable:!1}});return function(){n(),i()}}});var zx=de((tT,Lx)=>{"use strict";var Lk=Jn().GLSL,{A:kh,BENCH:id,SHAFT:ad,TREE:Al,oculusGLSL:zk}=fa(),Ck=sa(),Mh=Al.sxz,Sx=Al.sy,Ax=Al.yaw;function Nk(e){let t=new DataView(e),o=t.getUint32(4,!0),n=t.getUint32(8,!0),r=t.getUint32(12,!0),a=[0,1,2].map(h=>t.getFloat32(16+h*4,!0)),i=[0,1,2].map(h=>t.getFloat32(28+h*4,!0)),s=40,c=new Uint16Array(e,s,o*3);s+=o*6;let f=new Uint16Array(e,s,o*2);s+=o*4;let l=new Int8Array(e,s,o*3);s+=o*3,s=s+3&-4;let u=new Uint32Array(e,s,r);return{nV:o,nWood:n,nI:r,mn:a,sz:i,pos:c,uv:f,nrm:l,idx:u}}function Rk(e){let t=new Float32Array(e.nV*3),o=new Float32Array(e.nV*3),n=new Float32Array(e.nV*2),r=new Float32Array(e.nV),a=Math.cos(Ax),i=Math.sin(Ax);for(let s=0;s<e.nV;s++){let c=(e.mn[0]+e.pos[s*3]/65535*e.sz[0])*Mh,f=(e.mn[1]+e.pos[s*3+1]/65535*e.sz[1])*Sx,l=(e.mn[2]+e.pos[s*3+2]/65535*e.sz[2])*Mh;t[s*3]=kh.cx+a*c+i*l,t[s*3+1]=id.soil+.02+f,t[s*3+2]=kh.zc-i*c+a*l;let u=e.nrm[s*3]/127/Mh,h=e.nrm[s*3+1]/127/Sx,d=e.nrm[s*3+2]/127/Mh,v=Math.hypot(u,h,d)||1;u/=v,h/=v,d/=v,o[s*3]=a*u+i*d,o[s*3+1]=h,o[s*3+2]=-i*u+a*d,n[s*2]=e.uv[s*2]/65535,n[s*2+1]=e.uv[s*2+1]/65535,r[s]=s>=e.nWood?1:0}return{position:t,normal:o,uv:n,leaf:r,elements:e.idx}}function Tx(e,t,o,n){let r=e.texture({data:[[n]],min:"linear",mag:"linear"});return fetch(t).then(a=>{if(!a.ok)throw new Error("Could not load "+t);return a.blob()}).then(a=>createImageBitmap(a,{premultiplyAlpha:"none"}).catch(()=>new Promise((i,s)=>{let c=new Image;c.onload=()=>i(c),c.onerror=s,c.src=URL.createObjectURL(a)}))).then(a=>r({data:a,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",...o})).catch(a=>console.error(a)),r}var Wn=e=>e.toFixed(4),Z0=Al.crownC,J0=Al.crownR,Pk=`
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

const vec3 SHAFT = vec3(${Wn(ad[0])}, ${Wn(ad[1])}, ${Wn(ad[2])});

void main() {
	vec3 p = position;
	// the air in the court is never quite still. The whole tree leans
	// with it, slowly, more the higher and the further out on a limb
	// (wood and leaves together, so every leaf stays on its twig) ...
	float h = max(p.y - 1.2, 0.0);
	vec2 out2 = p.xz - vec2(${Wn(kh.cx)}, ${Wn(kh.zc)});
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
	vec3 cc = vec3(${Wn(Z0[0])}, ${Wn(Z0[1])}, ${Wn(Z0[2])});
	vec3 cr = vec3(${Wn(J0[0])}, ${Wn(J0[1])}, ${Wn(J0[2])});
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
}`,Bi=Ni(),Ok=`
precision highp float;
${Lk}
uniform float time;
${Bi.lanternGLSL(Bi.TREE_LANTERN)}
const vec3 LANTERN_POS = vec3(${Bi.LANTERNS[Bi.TREE_LANTERN[0]].x.toFixed(3)}, ${Bi.LANTERNS[Bi.TREE_LANTERN[0]].y.toFixed(3)}, ${Bi.LANTERNS[Bi.TREE_LANTERN[0]].z.toFixed(3)});
uniform sampler2D leaves, bark;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_leaf, v_shade;
varying vec3 v_eye;

${zk()}

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
	vec3 rel = (v_pos - vec3(${Wn(Z0[0])}, ${Wn(Z0[1])}, ${Wn(Z0[2])})) / vec3(${Wn(J0[0])}, ${Wn(J0[1])}, ${Wn(J0[2])});
	float outer = clamp(length(rel), 0.0, 1.0);
	float ao = mix(0.38, 1.0, outer * outer) * (0.75 + 0.25 * smoothstep(0.4, 2.0, v_pos.y));
	// and the trunk darkens where it meets the soil
	ao *= 0.6 + 0.4 * smoothstep(${Wn(id.soil)}, ${Wn(id.soil+.5)}, v_pos.y);

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
}`;Lx.exports=e=>{let t=null,o=Tx(e,"res/tree/leaves.webp",{wrapS:"clamp",wrapT:"clamp"},[60,80,40,0]),n=Tx(e,"res/tree/bark.jpg",{wrapS:"repeat",wrapT:"repeat"},[90,80,70]),r=Date.now();return fetch("res/tree.bin").then(a=>{if(!a.ok)throw new Error("Could not load the tree");return a.arrayBuffer()}).then(a=>{let i=Rk(Nk(a));t=e({vert:Pk,frag:Ok,attributes:{position:i.position,normal:i.normal,uv:i.uv,leaf:i.leaf},elements:i.elements,uniforms:{leaves:o,bark:n,time:()=>Ck.motion?typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-r)/1e3:0},cull:{enable:!1}})}).catch(a=>console.error(a)),function(){t&&t()}}});var Th=de((oT,Px)=>{"use strict";var ec=Oi(),Ik="res/audio/go-tomorrow.mp3",Fk="res/audio/go-tomorrow.json",Nx="gallery-sound",Eh=[ec.PIANO.x,1,ec.PIANO.z],Gk=ec.R,$r=!0;try{localStorage.getItem(Nx)==="off"&&($r=!1)}catch(e){}var xn=null,cr=null,Tl=null,Ll=null,ji=null,mi=null,Fs=!1,Sh=null,Cx=[],Dk=(typeof performance!="undefined"?performance.now():0)/1e3;function $k(e){let t=Math.floor(e.sampleRate*2.6),o=e.createBuffer(2,t,e.sampleRate),n=12345,r=()=>(n=n*16807%2147483647,n/10737418235e-1-1);for(let a=0;a<2;a++){let i=o.getChannelData(a),s=0;for(let c=0;c<t;c++){let f=c/e.sampleRate,l=.25+.6*Math.exp(-f*2.2);s+=(r()-s)*l,i[c]=s*Math.pow(1-c/t,2.2)*Math.exp(-f*1.5)*(f<.012?f/.012:1)}}return o}function qk(){if(xn)return;xn=new Audio,xn.src=Ik,xn.loop=!0,xn.preload="auto",xn.crossOrigin="anonymous";let e=window.AudioContext||window.webkitAudioContext;if(!e){xn.volume=.2;return}try{cr=new e;let t=cr.createMediaElementSource(xn);ji=cr.createBiquadFilter(),ji.type="lowpass",ji.frequency.value=1500,ji.Q.value=.4,Tl=cr.createGain(),Tl.gain.value=0,Ll=cr.createGain(),Ll.gain.value=0;let o=cr.createConvolver();o.buffer=$k(cr),mi=cr.createGain(),mi.gain.value=$r?1:0,t.connect(ji),ji.connect(Tl),Tl.connect(mi),ji.connect(o),o.connect(Ll),Ll.connect(mi),mi.connect(cr.destination)}catch(t){cr=null,xn.volume=.2}}function Rx(){if(Fs||!$r)return;qk();let e=()=>xn.play().then(()=>{Fs=!0}).catch(()=>{});cr&&cr.state==="suspended"?cr.resume().then(e,e):e()}typeof window!="undefined"&&(["pointerdown","pointerup","touchend","keydown","click"].forEach(e=>window.addEventListener(e,Rx,{capture:!0,passive:!0})),document.addEventListener("visibilitychange",()=>{!xn||!Fs||(document.hidden?xn.pause():$r&&xn.play().catch(()=>{}))}),fetch(Fk).then(e=>e.ok?e.json():null).then(e=>{if(!e)return;let t=o=>{let n=o.map(i=>i[2]).sort((i,s)=>i-s),r=n[Math.floor(n.length*.03)]||0,a=n[Math.floor(n.length*.97)]||1;return o.map(i=>({t:i[0],w:i[1],x:Math.max(0,Math.min(1,(i[2]-r)/Math.max(a-r,.001)))}))};Sh={left:t(e.l),right:t(e.r),level:e.e,dur:e.d}}).catch(()=>{}));var Ah={AT:Eh,listen(e){if(!cr||!Fs)return;let t=e[0]-Eh[0],o=e[2]-Eh[2],n=Math.hypot(t,o,(e[1]-Eh[1])*.5),r=Math.hypot(e[0]-ec.C.x,e[2]-ec.C.z)<Gk+.4||e[0]<-.2&&Math.abs(e[2]-ec.C.z)<4,a,i,s;if(r){let f=Math.max(0,Math.min(1,(n-1.2)/5));a=1-.3*f,i=.22+.16*f,s=16e3}else{let f=5.5/Math.max(n,5.5),l=e[0]>14.2&&e[2]<12?.6:1;a=.5*Math.pow(f,1.5)*l,i=.34*Math.pow(f,.95)*l,s=(650+9e3*Math.pow(f,1.3))*(l<1?.7:1)}let c=cr.currentTime;Tl.gain.setTargetAtTime(a,c,.35),Ll.gain.setTargetAtTime(i,c,.35),ji.frequency.setTargetAtTime(s,c,.35)},time(){let e=Sh&&Sh.dur||158;return xn&&Fs&&!xn.paused||xn&&Fs?xn.currentTime%e:((performance.now()/1e3-Dk)%e+e)%e},get cues(){return Sh},get on(){return $r},set(e){$r=!!e;try{localStorage.setItem(Nx,$r?"on":"off")}catch(t){}$r?(Rx(),xn&&Fs&&xn.play().catch(()=>{}),mi&&mi.gain.setTargetAtTime(1,cr.currentTime,.2)):mi?mi.gain.setTargetAtTime(0,cr.currentTime,.15):xn&&xn.pause(),Cx.forEach(t=>t($r))},toggle(){Ah.set(!$r)},onChange(e){Cx.push(e)},button(e){let t='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="M15.5 9a4.2 4.2 0 0 1 0 6M18 6.5a7.8 7.8 0 0 1 0 11"/></svg>',o='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="M16 9.5l5 5M21 9.5l-5 5"/></svg>',n=document.createElement("button");n.type="button",n.className=e+" sound-toggle";let r=()=>{n.innerHTML=$r?t:o,n.setAttribute("aria-label",$r?"Turn the music off":"Turn the music on"),n.title=$r?"Music on":"Music off",n.setAttribute("aria-pressed",$r?"true":"false")};return r(),Ah.onChange(r),["mousedown","pointerdown"].forEach(a=>n.addEventListener(a,i=>i.stopPropagation())),n.addEventListener("click",a=>{a.stopPropagation(),Ah.toggle()}),n}};Px.exports=Ah});var jx=de((nT,hd)=>{"use strict";var ld=Jn().GLSL,{A:Ox,BENCH:qx,oculusGLSL:Hx}=fa(),Ix=sa(),Ux=Oi(),Fx=Th(),Hk=1.74,Uk=1.877,dr=Hk/Uk,Ds={x:Ox.cx-1.22,z:Ox.zc+.02,hipY:qx.seat+.115},$o=(e,t)=>[e[3]*t[0]+e[0]*t[3]+e[1]*t[2]-e[2]*t[1],e[3]*t[1]-e[0]*t[2]+e[1]*t[3]+e[2]*t[0],e[3]*t[2]+e[0]*t[1]-e[1]*t[0]+e[2]*t[3],e[3]*t[3]-e[0]*t[0]-e[1]*t[1]-e[2]*t[2]],za=e=>[-e[0],-e[1],-e[2],e[3]],Vi=(e,t)=>{let o=Math.hypot(e[0],e[1],e[2])||1,n=Math.sin(t/2);return[e[0]/o*n,e[1]/o*n,e[2]/o*n,Math.cos(t/2)]},Lh=(e,t,o)=>$o(Vi([0,0,1],o*Math.PI/180),$o(Vi([0,1,0],t*Math.PI/180),Vi([1,0,0],e*Math.PI/180))),fd=e=>{let t=Math.hypot(...e)||1;return e.map(o=>o/t)},Va=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],Cl=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],Wi=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],cd=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],Ch=e=>Math.hypot(e[0],e[1],e[2]),zl=e=>{let t=Ch(e)||1;return[e[0]/t,e[1]/t,e[2]/t]},Rh=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],Bk=(e,t)=>{let o=[e[0],e[1],e[2]],n=Wi(Rh(o,t),2);return Cl(Cl(t,Wi(n,e[3])),Rh(o,n))},jk=(e,t)=>{let o=Rh(e,t),n=1+cd(e,t);return n<1e-6?[0,0,1,0]:fd([o[0],o[1],o[2],n])};function Kr(e,t,o){let[n,r,a,i]=t,s=n*n,c=r*r,f=a*a,l=n*r,u=n*a,h=r*a,d=i*n,v=i*r,p=i*a;return[(1-2*(c+f))*o[0],2*(l+p)*o[0],2*(u-v)*o[0],0,2*(l-p)*o[1],(1-2*(s+f))*o[1],2*(h+d)*o[1],0,2*(u+v)*o[2],2*(h-d)*o[2],(1-2*(s+c))*o[2],0,e[0],e[1],e[2],1]}function In(e,t){let o=new Array(16);for(let n=0;n<4;n++)for(let r=0;r<4;r++)o[n*4+r]=e[r]*t[n*4]+e[4+r]*t[n*4+1]+e[8+r]*t[n*4+2]+e[12+r]*t[n*4+3];return o}function sd(e){let t=Math.hypot(e[0],e[1],e[2]),o=Math.hypot(e[4],e[5],e[6]),n=Math.hypot(e[8],e[9],e[10]),r=e[0]/t,a=e[1]/t,i=e[2]/t,s=e[4]/o,c=e[5]/o,f=e[6]/o,l=e[8]/n,u=e[9]/n,h=e[10]/n,d=r+c+h,v;if(d>0){let p=Math.sqrt(d+1)*2;v=[(f-u)/p,(l-i)/p,(a-s)/p,p/4]}else if(r>c&&r>h){let p=Math.sqrt(1+r-c-h)*2;v=[p/4,(s+a)/p,(l+i)/p,(f-u)/p]}else if(c>h){let p=Math.sqrt(1+c-r-h)*2;v=[(s+a)/p,p/4,(u+f)/p,(l-i)/p]}else{let p=Math.sqrt(1+h-r-c)*2;v=[(l+i)/p,(u+f)/p,p/4,(a-s)/p]}return fd(v)}var Nh={LeftUpLeg:[-62,10,0],LeftLeg:[122,0,0],LeftFoot:[30,0,0],RightUpLeg:[0,-3,-2],RightLeg:[4,0,0],RightFoot:[35,-12,0],Neck:[10,0,0],Head:[6,0,0],LeftShoulder:[0,0,6],LeftArm:[-112.4,3.4,62.5],LeftForeArm:[0,-122.6,0],LeftHand:[0,0,-10],RightShoulder:[0,0,0],RightArm:[0,78,-8],RightForeArm:[0,14,0],RightHand:[0,0,0]};for(let e of["Left","Right"]){let t=e==="Left"?-1:1,o=e==="Left"?1:.35;["Index","Middle","Ring","Pinky"].forEach((n,r)=>{Nh[e+"Hand"+n+"1"]=[0,0,t*(18+r*6)*o],Nh[e+"Hand"+n+"2"]=[0,0,t*(26+r*6)*o],Nh[e+"Hand"+n+"3"]=[0,0,t*16*o]})}function Gs(e,t,o){let n=e-t;return n-=Math.round(n),Math.exp(-(n/o)*(n/o))}function Gx(e){let t=9+20*Math.cos(2*Math.PI*e),o=4+13*Gs(e,.14,.07)+57*Gs(e,.72,.12),n=5*Gs(e,.06,.04)-9*Gs(e,.42,.12)+17*Gs(e,.62,.05)-3*Gs(e,.85,.1),r=-26*Gs(e,.58,.06);return{hip:t,knee:o,ankle:n,toe:r}}function Wk(e){let t=(e%1+1)%1,o=Gx(t),n=Gx(t+.5),r=Math.cos(2*Math.PI*t),a=Math.sin(2*Math.PI*t);return{swing:{LeftArm:[16*r,0,0],RightArm:[-16*r,0,0],LeftForeArm:[0,-14-8*Math.max(0,-r),0],RightForeArm:[0,14+8*Math.max(0,r),0]},pose:{Hips:[0,5*a,1.5*Math.cos(4*Math.PI*t)],Spine1:[3,-4*a,0],LeftUpLeg:[-o.hip,0,0],LeftLeg:[o.knee,0,0],LeftFoot:[o.ankle,0,0],LeftToeBase:[o.toe,0,0],RightUpLeg:[-n.hip,0,0],RightLeg:[n.knee,0,0],RightFoot:[n.ankle,0,0],RightToeBase:[n.toe,0,0],LeftArm:[0,0,-78],RightArm:[0,0,78],LeftHand:[0,0,-8],RightHand:[0,0,8]},sway:.022*r}}var Dx=`
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
}`,Ph=Ni(),$x=`#extension GL_OES_standard_derivatives : enable
precision highp float;
${ld}
uniform float time;
${Ux.roomGLSL()}
${Ph.lanternGLSL(Ph.TREE_LANTERN)}
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
${Hx()}
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
}`;function Vk(e,t){let o=e.texture({data:[[[120,100,90,255]]],min:"linear",mag:"linear"});return fetch(t).then(n=>{if(!n.ok)throw new Error("Could not load "+t);return n.blob()}).then(n=>createImageBitmap(n,{premultiplyAlpha:"none"}).catch(()=>new Promise((r,a)=>{let i=new Image;i.onload=()=>r(i),i.onerror=a,i.src=URL.createObjectURL(n)}))).then(n=>o({data:n,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(n=>console.error(n)),o}var Bx={w:.13,h:.2},zh=e=>.011*(1-Math.pow(1-e,3));function Xk(){let e=[],t=[],o=[],n=[],r=[],a=(p,m,g,y,b,k,E)=>{let L=e.length/3;[p,m,g,y].forEach((N,W)=>{e.push(...N),t.push(...b),o.push(...E[W]),n.push(k)}),r.push(L,L+1,L+2,L,L+2,L+3)},{w:i,h:s}=Bx,c=s/2,f=[[0,1],[1,1],[1,0],[0,0]],l=-.006,u=i+.001,h=c+.001;a([0,l,-h],[u,l,-h],[u,l,h],[0,l,h],[0,-1,0],1,[[0,1],[1,1],[1,0],[0,0]]),a([0,l+.001,-h],[0,l+.001,h],[u,l+.001,h],[u,l+.001,-h],[0,1,0],2,f),a([-u,l,-h],[0,l,-h],[0,l,h],[-u,l,h],[0,-1,0],2,f),a([-u,l+.001,-h],[-u,l+.001,h],[0,l+.001,h],[0,l+.001,-h],[0,1,0],2,f);let d=8;for(let p of[1,-1]){for(let g=0;g<d;g++){let y=g/d,b=(g+1)/d,k=(.002+y*(i-.002))*p,E=(.002+b*(i-.002))*p,L=zh(y),N=zh(b),W=p>0?y:1-y,O=p>0?b:1-b,te=1,D=-(N-L)/(E-k);a([k,L,-c],[E,N,-c],[E,N,c],[k,L,c],[D,te,0],3,[[W,1],[O,1],[O,0],[W,0]]),a([k,l+.001,c],[E,l+.001,c],[E,N,c],[k,L,c],[0,0,1],4,f),a([k,L,-c],[E,N,-c],[E,l+.001,-c],[k,l+.001,-c],[0,0,-1],4,f)}let m=i*p;a([m,l+.001,-c],[m,zh(1),-c],[m,zh(1),c],[m,l+.001,c],[p,0,0],4,f)}let v=10;for(let p=0;p<v;p++){let m=p/v,g=(p+1)/v,y=e.length/3;for(let[b,k]of[[m,-c],[g,-c],[g,c],[m,c]])e.push(b,0,k),t.push(0,1,0),o.push(b,(k+c)/s),n.push(5);r.push(y,y+1,y+2,y,y+2,y+3)}return{pos:e,nrm:t,uv:o,kind:n,idx:r}}function Yk(){if(typeof document=="undefined")return null;let e=document.createElement("canvas");e.width=512,e.height=768;let t=e.getContext("2d");t.fillStyle="#ebe5d8",t.fillRect(0,0,512,768);let o=7,n=()=>(o=o*16807%2147483647,o/2147483647),r=(i,s,c,f,l,u,h)=>{for(let d=0;d<u;d++){let v=i+(n()-.5)*c*2,p=s+(n()-.5)*f*2,m=20+n()*60,g=t.createRadialGradient(v,p,0,v,p,m);g.addColorStop(0,`rgba(${l},${h})`),g.addColorStop(1,`rgba(${l},0)`),t.fillStyle=g,t.fillRect(v-m,p-m,m*2,m*2)}},a=t.createRadialGradient(236,280,10,256,300,125);a.addColorStop(0,"#3d4866"),a.addColorStop(1,"#232a3d"),t.fillStyle=a,t.beginPath(),t.arc(256,300,122,0,Math.PI*2),t.fill(),t.fillStyle="#b8873f",t.beginPath(),t.moveTo(64,452);for(let i=64;i<=448;i+=16)t.lineTo(i,446+n()*4);for(let i=448;i>=64;i-=16)t.lineTo(i,466+n()*4);t.fill(),t.strokeStyle="#2b2f3a",t.lineCap="round",[[120,392,500,5],[160,352,530,4],[205,307,558,3]].forEach(([i,s,c,f])=>{t.lineWidth=f,t.beginPath(),t.moveTo(i,c),t.lineTo(s,c),t.stroke()});for(let i=0;i<9e3;i++)t.fillStyle=`rgba(90,80,60,${n()*.05})`,t.fillRect(n()*512,n()*768,1,1);return e}var Kk=`
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
		float r = u * ${Bx.w.toFixed(3)};
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
}`,Qk=`
precision highp float;
${ld}
uniform float time;
${Ph.lanternGLSL(Ph.TREE_LANTERN)}
uniform sampler2D cover;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_kind;
${Hx()}
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
}`;function Zk(){let e=[],t=[],o=[],n=[],r=[],a=[.36,.11,.07],i=[.1,.07,.05],s=[.78,.76,.72],c=[.55,.41,.26],f=[.8,.55,.22],l=[[0,-.15,f,2],[.0012,-.147,f,2],[.004,-.138,f,2],[.0058,-.125,c,2],[.0064,-.112,c,2],[.006,-.104,c,2],[.0066,-.102,s,1],[.0066,-.08,s,1],[.0062,-.074,s,1],[.0068,-.072,s,1],[.007,-.066,s,1],[.0058,-.064,a,0],[.0062,-.04,a,0],[.0058,0,a,0],[.0046,.06,a,0],[.0036,.11,a,0],[.003,.13,i,0],[.0026,.136,i,0],[0,.139,i,0]],u=16;for(let h=0;h<l.length;h++){let[d,v,p,m]=l[h],g=m===2?.45:1;for(let y=0;y<=u;y++){let b=y/u*Math.PI*2;e.push(Math.cos(b)*d,v,Math.sin(b)*d*g);let k=Math.max(h-1,0),E=Math.min(h+1,l.length-1),L=l[E][0]-l[k][0],N=l[E][1]-l[k][1],W=Math.hypot(L,N)||1;t.push(Math.cos(b)*N/W,-L/W,Math.sin(b)*N/W/g),o.push(...p),n.push(m)}}for(let h=0;h<l.length-1;h++)for(let d=0;d<u;d++){let v=h*(u+1)+d,p=v+u+1;r.push(v,p,v+1,v+1,p,p+1)}return{pos:e,nrm:t,col:o,mat:n,idx:r}}var Jk=`
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
}`,eE=`
precision highp float;
${ld}
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
}`,tE=`
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
}`,oE=`
precision highp float;
uniform float pulse;
varying vec2 v_c;
void main() {
	float d = length(v_c);
	float g = exp(-d * d * 6.0) * 0.10 + exp(-d * d * 30.0) * 0.08;
	gl_FragColor = vec4(vec3(1.0, 0.80, 0.45) * g * (0.75 + 0.25 * pulse), 1.0);
}`;hd.exports=e=>{let t="res/avatar/",o=null,n=Date.now(),r=()=>typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-n)/1e3,a={glowPos:[Ds.x,1.9,Ds.z],glow:0};Promise.all([fetch(t+"avatar.json").then(O=>O.json()),fetch(t+"avatar.bin").then(O=>O.arrayBuffer())]).then(([O,te])=>{o=f(O,te)}).catch(O=>console.error(O));let i=null;Promise.all([fetch(t+"motion.json").then(O=>O.ok?O.json():null),fetch(t+"motion.bin").then(O=>O.ok?O.arrayBuffer():null)]).then(([O,te])=>{if(!O||!te)return;let D={};for(let re in O.clips){let q=O.clips[re],Y=q.bones.length,be=new Float32Array(te,q.mean,Y*4),qe={};q.bones.forEach((Ae,he)=>{qe[Ae]=[be[he*4],be[he*4+1],be[he*4+2],be[he*4+3]]}),D[re]=Object.assign({},q,{Q:new Int16Array(te,q.q,q.frames*Y*4),H:new Float32Array(te,q.hips,q.frames*3),meanQ:qe})}i=D}).catch(()=>{});function s(O,te){let D=O.frames,re=O.bones.length,q=(te%D+D)%D,Y=Math.floor(q)%D,be=(Y+1)%D,qe=q-Math.floor(q),Ae={};for(let dt=0;dt<re;dt++){let qt=(Y*re+dt)*4,He=(be*re+dt)*4,pt=O.Q[qt],St=O.Q[qt+1],to=O.Q[qt+2],ao=O.Q[qt+3],Ho=O.Q[He],Xe=O.Q[He+1],ht=O.Q[He+2],vt=O.Q[He+3];pt*Ho+St*Xe+to*ht+ao*vt<0&&(Ho=-Ho,Xe=-Xe,ht=-ht,vt=-vt),Ae[O.bones[dt]]=fd([pt+(Ho-pt)*qe,St+(Xe-St)*qe,to+(ht-to)*qe,ao+(vt-ao)*qe])}let he=Y*3,Te=be*3;return{q:Ae,hips:[O.H[he]+(O.H[Te]-O.H[he])*qe,O.H[he+1]+(O.H[Te+1]-O.H[he+1])*qe,O.H[he+2]+(O.H[Te+2]-O.H[he+2])*qe]}}let c=e.texture({data:[[[255,255,255,255]]]});function f(O,te){let D=(K,Ne)=>new Float32Array(te,K,Ne),re=O.bones,q=re.length,Y={};re.forEach((K,Ne)=>{Y[K.name]=Ne});let be=[];for(let K=0;K<q;K++)be.push(Array.from(D(O.ibm+K*64,16)));let qe=re.map(K=>Kr(K.t,K.r,K.s)),Ae=[];for(let K=0;K<q;K++){let Ne=re[K].parent;Ae[K]=Ne<0?qe[K]:In(Ae[Ne],qe[K])}let he=Ae.map(sd),Te=O.meshes.map(K=>{let Ne=D(K.pos,K.n*3),Ie=D(K.nrm,K.n*3),ze=D(K.uv,K.n*2),at=new Uint8Array(te,K.jnt,K.n*4),Mt=D(K.wgt,K.n*4),bt=new Uint16Array(te,K.idx,K.ni),lt={};for(let xt in K.morphs){let Po=K.morphs[xt];lt[xt]={idx:new Uint16Array(te,Po.idx,Po.n),d:D(Po.d,Po.n*3)}}let Nt=new Float32Array(K.n*3),gt=new Float32Array(K.n*3),Ht=new Float32Array(K.n*3),_t=e.buffer({data:Nt,usage:"dynamic"}),kt=e.buffer({data:gt,usage:"dynamic"}),Bt=/avaturn_hair/.test(K.name),ft=/EyeAO|Eyelash/.test(K.name),no=/Body|Head/.test(K.name),_o=K.kind||0;return{m:K,pos:Ne,nrm:Ie,uv:ze,jnt:at,wgt:Mt,idx:bt,morphs:lt,outP:Nt,outN:gt,work:Ht,pb:_t,nbuf:kt,tex:K.tex?Vk(e,t+K.tex):c,kind:_o,alphaScale:/EyeAO/.test(K.name)?.25:1,blend:K.blend||Bt,alphaCut:Bt?.35:ft?.02:0,skin:no?1:0}}),dt=e({vert:Dx,frag:$x,attributes:{position:e.prop("pb"),normal:e.prop("nb"),uv:e.prop("uv")},elements:e.prop("el"),uniforms:{tex:e.prop("tex"),alphaCut:e.prop("alphaCut"),skin:e.prop("skin"),kind:e.prop("kind"),alphaScale:e.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow,boothLamp:()=>L&&!N?L.lamp:[0,0,0,0],court:()=>L||N?0:1,candle:()=>N?1:0},cull:{enable:!1}}),qt=e({vert:Dx,frag:$x,attributes:{position:e.prop("pb"),normal:e.prop("nb"),uv:e.prop("uv")},elements:e.prop("el"),uniforms:{tex:e.prop("tex"),alphaCut:e.prop("alphaCut"),skin:e.prop("skin"),kind:e.prop("kind"),alphaScale:e.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow,boothLamp:()=>L&&!N?L.lamp:[0,0,0,0],court:()=>L||N?0:1,candle:()=>N?1:0},cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"one minus src alpha"}}}),He=.3;for(let K of Te)if(K.uvBuf=e.buffer(K.uv),/Body/.test(K.m.name)){let Ne=[],Ie=[];for(let ze=0;ze<K.idx.length;ze+=3){let at=K.idx[ze],Mt=K.idx[ze+1],bt=K.idx[ze+2];(K.pos[at*3+1]<He&&K.pos[Mt*3+1]<He&&K.pos[bt*3+1]<He?Ie:Ne).push(at,Mt,bt)}K.el=e.elements({data:new Uint16Array(Ne),type:"uint16"}),Ie.length&&(K.sockEl=e.elements({data:new Uint16Array(Ie),type:"uint16"}))}else K.el=e.elements({data:K.idx,type:"uint16"});let pt=Ae[Y.Hips],St=Vi([1,0,0],-Math.PI/2),to=In(Kr([Ds.x-pt[12]*dr,Ds.hipY-pt[14]*dr,Ds.z+pt[13]*dr],St,[1,1,1]),Kr([0,0,0],[0,0,0,1],[dr,dr,dr])),ao=new Array(q),Ho=-1,Xe=(K,Ne,Ie)=>In(Kr([K,0,Ne],Vi([0,1,0],Ie),[1,1,1]),Kr([0,0,0],[0,0,0,1],[dr,dr,dr])),ht=["LeftFoot","RightFoot","LeftToeBase","RightToeBase"].map(K=>Y[K]),vt=ht.map(K=>Ae[K][13]*dr);function Zt(K){if(i&&i.walk)return po(K);let Ne=Wk(K.phase),Ie={},ze=gt=>{for(let Ht in gt){let _t=gt[Ht],kt=Lh(_t[0],_t[1],_t[2]);Ie[Ht]=Ie[Ht]?$o(Ie[Ht],kt):kt}};ze(Ne.swing),ze(Ne.pose);let at=Math.cos(K.heading),Mt=-Math.sin(K.heading),bt=Xe(K.x+at*Ne.sway,K.z+Mt*Ne.sway,K.heading),lt=new Array(q);for(let gt=0;gt<q;gt++){let Ht=re[gt],_t=qe[gt],kt=Ie[Ht.name];if(kt){let Bt=he[gt],ft=$o(za(Bt),$o(kt,Bt));_t=Kr(Ht.t,$o(Ht.r,ft),Ht.s)}lt[gt]=Ht.parent<0?In(bt,_t):In(lt[Ht.parent],_t)}let Nt=1/0;ht.forEach((gt,Ht)=>{Nt=Math.min(Nt,lt[gt][13]-vt[Ht])});for(let gt=0;gt<q;gt++)lt[gt]=lt[gt].slice(),lt[gt][13]-=Nt,ao[gt]=In(lt[gt],be[gt]);return{blink:0}}function po(K){let Ne=i.walk,Ie=s(Ne,(K.phase+Ne.phase0)*Ne.frames),ze=Xe(K.x,K.z,K.heading),at=new Array(q),Mt=Y.Hips;for(let lt=0;lt<q;lt++){let Nt=re[lt],gt=qe[lt],Ht=Ie.q[Nt.name];if(Ht){let _t=he[lt],kt=$o(za(_t),$o(Ht,_t)),Bt=lt===Mt?[Nt.t[0]+Ie.hips[0],Nt.t[1]+Ie.hips[1],Nt.t[2]+Ie.hips[2]]:Nt.t;gt=Kr(Bt,$o(Nt.r,kt),Nt.s)}at[lt]=Nt.parent<0?In(ze,gt):In(at[Nt.parent],gt)}let bt=1/0;ht.forEach((lt,Nt)=>{bt=Math.min(bt,at[lt][13]-vt[Nt])});for(let lt=0;lt<q;lt++)at[lt]=at[lt].slice(),at[lt][13]-=bt,ao[lt]=In(at[lt],be[lt]);return{blink:0}}function Lt(K,Ne){let Ie=Math.sin(K*2*Math.PI/4.6),ze=Math.sin(K*.37)*.6+Math.sin(K*.83+1)*.4,at={LeftUpLeg:[-86,-6,0],RightUpLeg:[-84,7,0],LeftLeg:[88,0,0],RightLeg:[82,0,0],LeftFoot:[-4,0,0],RightFoot:[-2,0,0],Spine:[6,0,0],Spine1:[5+Ie*.8,0,0],Spine2:[4+Ie*.6,0,0],Neck:[10,0,0],Head:[12+ze*2,ze*2.5,0],LeftArm:[0,0,-72],RightArm:[0,0,72],LeftForeArm:[0,-62,0],RightForeArm:[0,62,0],LeftHand:[0,0,-10],RightHand:[0,0,10]},Mt={};for(let _t in at){let kt=at[_t];Mt[_t]=Lh(kt[0],kt[1],kt[2])}let bt=Xe(Ne.x,Ne.z,Ne.heading),lt=new Array(q);for(let _t=0;_t<q;_t++){let kt=re[_t],Bt=qe[_t],ft=Mt[kt.name];if(ft){let no=he[_t],_o=$o(za(no),$o(ft,no));Bt=Kr(kt.t,$o(kt.r,_o),kt.s)}lt[_t]=kt.parent<0?In(bt,Bt):In(lt[kt.parent],Bt)}let gt=lt[Y.Hips][13]-(Ne.y+.1);for(let _t=0;_t<q;_t++)lt[_t]=lt[_t].slice(),lt[_t][13]-=gt,ao[_t]=In(lt[_t],be[_t]);let Ht=K%4.1;return{blink:Ht<.16?Math.sin(Ht/.16*Math.PI):0}}let mt=K=>[Ae[K][12],Ae[K][13],Ae[K][14]],me=(K,Ne)=>{let Ie=zl(K),ze=zl(Va(Ne,Wi(Ie,cd(Ne,Ie)))),at=Rh(Ie,ze);return sd([Ie[0],Ie[1],Ie[2],0,ze[0],ze[1],ze[2],0,at[0],at[1],at[2],0,0,0,0,1])},tt={};for(let K of["Left","Right"]){let Ne=Y[K+"Arm"],Ie=Y[K+"ForeArm"],ze=Y[K+"Hand"],at=Y[K+"HandMiddle1"];tt[K]={a:Ne,f:Ie,h:ze,upper:Ch(Va(mt(Ie),mt(Ne)))*dr,fore:Ch(Va(mt(ze),mt(Ie)))*dr,dir0:zl(Va(mt(Ie),mt(Ne))),qf0:me(Va(mt(ze),mt(Ie)),[0,1,0]),qh0:me(Va(mt(at),mt(ze)),[0,1,0])}}let zt={};for(let K of["Left","Right"])zt[tt[K].a]={side:K,part:0},zt[tt[K].f]={side:K,part:1},zt[tt[K].h]={side:K,part:2};function ct(K,Ne,Ie){if(!K||!K.length)return{x:.5,lift:0,press:0,finger:1,busy:0};let ze=0,at=K.length-1,Mt=-1;for(;ze<=at;){let Po=ze+at>>1;K[Po].t<=Ne?(Mt=Po,ze=Po+1):at=Po-1}let bt=K[K.length-1],lt=K[0],Nt=Mt>=0?K[Mt]:{t:bt.t-Ie,x:bt.x,w:bt.w},gt=Mt+1<K.length?K[Mt+1]:{t:lt.t+Ie,x:lt.x,w:lt.w},Ht=Math.max(.05,gt.t-Nt.t),_t=Math.min(.14,Ht*.45),kt=Math.max(0,Math.min(1,(Ne-Nt.t-_t)/Math.max(Ht-_t-.03,.02))),Bt=kt*kt*(3-2*kt),ft=Ne-Nt.t,no=(.55+.45*Nt.w)*Math.exp(-ft/.11),_o=gt.t-Ne,xt=_o<.05?(.55+.45*gt.w)*(1-_o/.05):0;return{x:Nt.x+(gt.x-Nt.x)*Bt,lift:Math.sin(Math.PI*kt)*Math.min(.05,.012+Ht*.03)*(Ht>2.5?.4:1),press:Math.max(no,xt),finger:xt>no?((Mt+1)*7+3)%4:(Math.max(Mt,0)*7+3)%4,busy:Math.exp(-ft/.9)}}let Ve={lean:0,turn:0,nod:0,pedal:0,last:-1},go=["Index","Middle","Ring","Pinky"];function _(K){let Ne=Ux.PLAY,Ie=Fx.cues,ze=Fx.time(),at=Ie&&Ie.dur||158,Mt={Left:ct(Ie&&Ie.left,ze,at),Right:ct(Ie&&Ie.right,ze,at)},bt=.35;if(Ie&&Ie.level&&Ie.level.length){let Kt=ze*8,so=Math.floor(Kt)%Ie.level.length,Tn=(so+1)%Ie.level.length;bt=Ie.level[so]+(Ie.level[Tn]-Ie.level[so])*(Kt-Math.floor(Kt))}let lt=Ve.last<0?0:Math.min(.1,Math.max(0,K-Ve.last));Ve.last=K;let Nt=Kt=>Math.min(1,lt*Kt);Ve.lean+=(bt-Ve.lean)*Nt(1.2),Ve.turn+=(Mt.Right.busy-Mt.Left.busy-Ve.turn)*Nt(1.5),Ve.nod+=(Math.max(Mt.Right.press,Mt.Left.press*.7)-Ve.nod)*Nt(6),Ve.pedal+=((Mt.Left.busy>.35?1:.15)-Ve.pedal)*Nt(5);let gt=Math.sin(K*2*Math.PI/4.6),Ht=Math.sin(ze*.41)*.6+Math.sin(ze*.17+1)*.4,_t={LeftUpLeg:[-80,-9,0],RightUpLeg:[-77,9,0],LeftLeg:[86,0,0],RightLeg:[64,0,0],LeftFoot:[-2,0,0],RightFoot:[12-10*Ve.pedal,0,0],Spine:[9+3.5*Ve.lean+Ht*1.6,Ve.turn*2.5,-Ve.turn*1.6],Spine1:[7+gt*.8+2.5*Ve.lean,Ve.turn*2.5,-Ve.turn*1.2],Spine2:[6+gt*.6+Ht*.8,Ve.turn*1.5,0],Neck:[13+3*Ve.lean,Ve.turn*3,0],Head:[15+Ve.nod*3.5+Ht*1.5,Ve.turn*5,Ht*1.5]};for(let Kt of["Left","Right"]){let so=Kt==="Left"?-1:1,Tn=Mt[Kt];go.forEach((U,le)=>{let Be=le===Tn.finger?Tn.press:Tn.press*.2;_t[Kt+"Hand"+U+"1"]=[0,0,so*(20+3*le+20*Be)],_t[Kt+"Hand"+U+"2"]=[0,0,so*(26+4*le-6*Be)],_t[Kt+"Hand"+U+"3"]=[0,0,so*14]}),_t[Kt+"HandThumb1"]=[0,so*-18,so*10]}let kt={};for(let Kt in _t){let so=_t[Kt];kt[Kt]=Lh(so[0],so[1],so[2])}let Bt=Ae[Y.Hips][13]*dr,ft=In(Kr([Ne.stoolX,Ne.stoolTop+.1-Bt,Ne.stoolFront+.15],Vi([0,1,0],Ne.heading),[1,1,1]),Kr([0,0,0],[0,0,0,1],[dr,dr,dr])),no=(Ne.keyX0+Ne.keyX1)/2,_o={};for(let Kt of["Left","Right"]){let so=Mt[Kt],Tn=Kt==="Left"?no-.4+.33*so.x:no+.07+.33*so.x;_o[Kt]=[Tn,Ne.keyTop+.062+so.lift-so.press*.012,Ne.keyFront+.075]}let xt=new Array(q),Po={},na=[0,1,0];for(let Kt=0;Kt<q;Kt++){let so=re[Kt],Tn=qe[Kt],U=kt[so.name],le=zt[Kt];if(le){let Be=tt[le.side];if(le.part===0){let ot=xt[so.parent],nt=In(ot,qe[Kt]),Vo=[nt[12],nt[13],nt[14]],Ln=$o(sd(ot),za(he[so.parent])),gr=Va(_o[le.side],Vo),Uo=Ch(gr),Pr=(Be.upper+Be.fore)*.995;Uo>Pr&&(gr=Wi(gr,Pr/Uo),Uo=Pr);let Zo=Wi(gr,1/Uo),So=(Be.upper*Be.upper-Be.fore*Be.fore+Uo*Uo)/(2*Uo),nn=Math.sqrt(Math.max(0,Be.upper*Be.upper-So*So)),Co=[le.side==="Left"?-.6:.6,-.8,.3];Co=zl(Va(Co,Wi(Zo,cd(Co,Zo))));let $n=Cl(Vo,Cl(Wi(Zo,So),Wi(Co,nn)));Be.T=Cl(Vo,gr),Be.elbow=$n;let xr=zl(Va($n,Vo)),rr=$o(jk(Bk(Ln,Be.dir0),xr),Ln);Po[Kt]=rr,U=$o(za(Ln),rr)}else if(le.part===1){let ot=$o(me(Va(Be.T,Be.elbow),na),za(Be.qf0));Po[Kt]=ot,U=$o(za(Po[so.parent]),ot)}else{let ot=Mt[le.side],nt=$o(me([le.side==="Left"?.12:-.12,-.2-.1*ot.press,-1],na),za(Be.qh0));Po[Kt]=nt,U=$o(za(Po[so.parent]),nt)}}if(U){let Be=he[Kt],ot=$o(za(Be),$o(U,Be));Tn=Kr(so.t,$o(so.r,ot),so.s)}xt[Kt]=so.parent<0?In(ft,Tn):In(xt[so.parent],Tn)}for(let Kt=0;Kt<q;Kt++)ao[Kt]=In(xt[Kt],be[Kt]);a.pianist={head:[xt[Y.Head][12],xt[Y.Head][13],xt[Y.Head][14]]};let ei=K%4.3;return{blink:ei<.16?Math.sin(ei/.16*Math.PI):0}}function oo(K,Ne){if(N)return _(K);if(L)return Lt(K,L);if(Ne)return Zt(Ne);let Ie=Math.sin(K*2*Math.PI/4.2),ze=K%3.7,at=ze<.16?Math.sin(ze/.16*Math.PI):0,Mt=Math.sin(K*.45),bt=Math.sin(K*.31+.8),lt=Math.max(0,Math.sin(K*.085)-.75)*4,Nt={RightArm:[0,-22*lt,11*Mt],RightForeArm:[0,8+26*lt,0],RightHand:[38*bt,0,6*Math.sin(K*.7)],LeftUpLeg:[0,0,3.2*Math.sin(K*.36)],RightFoot:[5*Math.sin(K*.52+.4),0,0],Head:[0,1.6*Math.sin(K*.21),0]};["Index","Middle","Ring","Pinky"].forEach((ft,no)=>{let _o=Math.sin(K*1.1-no*.5);Nt["RightHand"+ft+"1"]=[0,0,8+12*_o],Nt["RightHand"+ft+"2"]=[0,0,6+10*_o]});let gt={},Ht=(ft,no)=>{for(let _o in ft){let xt=ft[_o],Po=Lh(xt[0]*no,xt[1]*no,xt[2]*no);gt[_o]=gt[_o]?$o(gt[_o],Po):Po}};Ht(Nh,1),Ht({Spine1:[Ie*.8,0,0],Spine2:[Ie*.6,0,0]},1),Ht(Nt,1);let _t=new Array(q),kt=new Array(q);for(let ft=0;ft<q;ft++){let no=re[ft],_o=qe[ft],xt=gt[no.name];if(xt){let Po=he[ft],na=$o(za(Po),$o(xt,Po));_o=Kr(no.t,$o(no.r,na),no.s)}_t[ft]=no.parent<0?In(to,_o):In(_t[no.parent],_o),kt[ft]=null}for(let ft=0;ft<q;ft++)ao[ft]=In(_t[ft],be[ft]);let Bt=ft=>[ft[12],ft[13],ft[14]];return a.headPos=Bt(_t[Y.Head]),a.hipsPos=Bt(_t[Y.Hips]),a.headM=_t[Y.Head],{blink:at}}function Wt(K,Ne){let{pos:Ie,nrm:ze,jnt:at,wgt:Mt,outP:bt,outN:lt,work:Nt,m:gt}=K,Ht=gt.n,_t=Ie;if(Ne){Nt.set(Ie);for(let kt in K.morphs){let Bt=Ne[kt]||0;if(Bt<=0)continue;let ft=K.morphs[kt];for(let no=0;no<ft.idx.length;no++){let _o=ft.idx[no]*3;Nt[_o]+=ft.d[no*3]*Bt,Nt[_o+1]+=ft.d[no*3+1]*Bt,Nt[_o+2]+=ft.d[no*3+2]*Bt}}_t=Nt}for(let kt=0;kt<Ht;kt++){let Bt=_t[kt*3],ft=_t[kt*3+1],no=_t[kt*3+2],_o=ze[kt*3],xt=ze[kt*3+1],Po=ze[kt*3+2],na=0,ei=0,Kt=0,so=0,Tn=0,U=0;for(let Be=0;Be<4;Be++){let ot=Mt[kt*4+Be];if(ot===0)continue;let nt=ao[at[kt*4+Be]];na+=ot*(nt[0]*Bt+nt[4]*ft+nt[8]*no+nt[12]),ei+=ot*(nt[1]*Bt+nt[5]*ft+nt[9]*no+nt[13]),Kt+=ot*(nt[2]*Bt+nt[6]*ft+nt[10]*no+nt[14]),so+=ot*(nt[0]*_o+nt[4]*xt+nt[8]*Po),Tn+=ot*(nt[1]*_o+nt[5]*xt+nt[9]*Po),U+=ot*(nt[2]*_o+nt[6]*xt+nt[10]*Po)}bt[kt*3]=na,bt[kt*3+1]=ei,bt[kt*3+2]=Kt;let le=Math.hypot(so,Tn,U)||1;lt[kt*3]=so/le,lt[kt*3+1]=Tn/le,lt[kt*3+2]=U/le}gt.grid&&!Eo&&!L&&!N&&xo(K),K.sway&&bi(K),K.pb.subdata(bt),K.nbuf.subdata(lt)}function xo(K){let[Ne,Ie]=K.m.grid,ze=K.outP,at=K.outN,Mt=qx.seat+.012;for(let bt=1;bt<Ne;bt++){let lt=Math.pow(1-bt/(Ne-1),1.5);for(let Nt=0;Nt<Ie;Nt++){let gt=(bt*Ie+Nt)*3;ze[gt+1]>Mt?ze[gt+1]=Mt+(ze[gt+1]-Mt)*Math.max(lt,.15):ze[gt+1]=Mt}}for(let bt=0;bt<at.length;bt+=3)at[bt]=0,at[bt+1]=1,at[bt+2]=0}let Eo=!1,hn=(K,Ne,Ie,ze,at)=>({bone:Y[K],rate:Ne,damp:Ie,drag:ze,most:at,x:[0,0,0],v:[0,0,0],p:null,vel:[0,0,0]}),mr={head:hn("Head",15,.32,.012,.035),chest:hn("Spine2",9,.38,.03,.1),hips:hn("Hips",7,.42,.045,.16)},Dn=-1;function Fa(K){let Ne=Dn<0?0:K-Dn;Dn=K;for(let Ie in mr){let ze=mr[Ie],at=ao[ze.bone],Mt=Ae[ze.bone],bt=Mt[12],lt=Mt[13],Nt=Mt[14],gt=[at[0]*bt+at[4]*lt+at[8]*Nt+at[12],at[1]*bt+at[5]*lt+at[9]*Nt+at[13],at[2]*bt+at[6]*lt+at[10]*Nt+at[14]];if(!ze.p||!(Ne>0)||Ne>.25||Math.hypot(gt[0]-ze.p[0],gt[1]-ze.p[1],gt[2]-ze.p[2])>.5){ze.p=gt,ze.x=[0,0,0],ze.v=[0,0,0],ze.vel=[0,0,0];continue}let Ht=[(gt[0]-ze.p[0])/Ne,(gt[1]-ze.p[1])/Ne,(gt[2]-ze.p[2])/Ne],_t=Math.max(1,Math.ceil(Ne/.016)),kt=Ne/_t;for(let ft=0;ft<3;ft++){let no=Math.max(-30,Math.min(30,(Ht[ft]-ze.vel[ft])/Ne)),_o=-Ht[ft]*ze.drag;for(let xt=0;xt<_t;xt++)ze.v[ft]+=((_o-ze.x[ft])*ze.rate*ze.rate-2*ze.damp*ze.rate*ze.v[ft]-no)*kt,ze.x[ft]+=ze.v[ft]*kt}let Bt=Math.hypot(ze.x[0],ze.x[1],ze.x[2]);if(Bt>ze.most){let ft=ze.most/Bt;ze.x=[ze.x[0]*ft,ze.x[1]*ft,ze.x[2]*ft]}ze.p=gt,ze.vel=Ht}}for(let K of Te){let Ne=K.m,Ie=Ne.n,ze=null,at=null;if(Ne.kind===9){at="head",ze=new Float32Array(Ie);for(let Mt=0;Mt<Ie;Mt++){let bt=K.uv[Mt*2]<-.5?0:K.uv[Mt*2+1];ze[Mt]=bt*bt}}else if(Ne.name==="scarf"){at="chest",ze=new Float32Array(Ie);for(let Mt=0;Mt<Ie;Mt++)ze[Mt]=l(1.52,1.12,K.pos[Mt*3+1])}else if(Ne.grid){at="hips",ze=new Float32Array(Ie);let Mt=Ne.grid[0],bt=Ne.grid[1];for(let lt=0;lt<Ie;lt++)ze[lt]=Math.pow(Math.floor(lt/bt)/(Mt-1),1.6)}ze&&(K.sway=ze,K.spring=mr[at],K.loose=at)}function bi(K){if(!Eo&&!N&&!L)return;let Ne=K.spring.x,Ie=K.sway,ze=K.outP;if(!(Math.abs(Ne[0])+Math.abs(Ne[1])+Math.abs(Ne[2])<1e-5))for(let at=0,Mt=Ie.length;at<Mt;at++){let bt=Ie[at];bt>0&&(ze[at*3]+=Ne[0]*bt,ze[at*3+1]+=Ne[1]*bt,ze[at*3+2]+=Ne[2]*bt)}}function n0(K,Ne){Eo=!!Ne;let Ie=oo(K,Ne);Fa(K);let ze={eyeBlinkLeft:Ie.blink,eyeBlinkRight:Ie.blink};for(let at of Te)Wt(at,Object.keys(at.morphs).length?ze:null);a.pose=Ie}return{parts:Te,update:n0,drawOpaque:dt,drawBlend:qt,state:a}}function l(O,te,D){let re=Math.min(1,Math.max(0,(D-O)/(te-O)));return re*re*(3-2*re)}let u=Xk(),h=Yk(),d=h?e.texture({data:h,flipY:!1,min:"linear",mag:"linear"}):c,v=e({vert:Kk,frag:Qk,attributes:{position:u.pos,normal:u.nrm,uv:u.uv,kind:u.kind},elements:new Uint16Array(u.idx),uniforms:{model:e.prop("model"),turn:0,fold:1.12,cover:d},cull:{enable:!1}}),p=Zk(),m=e({vert:Jk,frag:eE,attributes:{position:p.pos,normal:p.nrm,color:p.col,mat:p.mat},elements:new Uint16Array(p.idx),uniforms:{model:e.prop("model"),pulse:e.prop("pulse")},cull:{enable:!1}}),g=e({vert:tE,frag:oE,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{center:e.prop("center"),size:e.prop("size"),pulse:e.prop("pulse")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});function y(O){let te=O.headM,D=Te=>{let dt=Math.hypot(...Te)||1;return Te.map(qt=>qt/dt)},re=D([te[4],te[5],te[6]]),q=D([te[8],te[9],te[10]]),Y=re,be=q.map(Te=>-Te),qe=[be[1]*Y[2]-be[2]*Y[1],be[2]*Y[0]-be[0]*Y[2],be[0]*Y[1]-be[1]*Y[0]],Ae=O.headPos,he=[0,1,2].map(Te=>Ae[Te]+re[Te]*.06+q[Te]*.185);return[qe[0],qe[1],qe[2],0,be[0],be[1],be[2],0,Y[0],Y[1],Y[2],0,he[0],he[1],he[2],1]}let b=-1,k="",E=null,L=null,N=!1;function W(O){if(!o)return;let te=(Ix.motion,r()),D=E?[E.x,E.z,E.heading,E.phase].map(q=>q.toFixed(4)).join():"";(L||N||D!==k||!E&&Math.abs(te-b)>(Ix.isPhone?1/30:0))&&(o.update(te,E),b=te,k=D);for(let q of o.parts)q.blend||(o.drawOpaque({pb:q.pb,nb:q.nbuf,uv:q.uvBuf,el:q.el,tex:q.tex,alphaCut:q.alphaCut,skin:q.skin,kind:q.kind,alphaScale:q.alphaScale}),q.sockEl&&o.drawOpaque({pb:q.pb,nb:q.nbuf,uv:q.uvBuf,el:q.sockEl,tex:c,alphaCut:0,skin:0,kind:8,alphaScale:1}));let re=o.state;if(re.headM&&!E&&!L&&!N){v({model:y(re)});let q=re.headPos,Y=Math.sin(te*1.3)*.02,be=[q[0],q[1]+.62+Y,q[2]+.05],qe=te*.6,Ae=Kr(be,$o(Vi([0,1,0],qe),Vi([0,0,1],.18)),[1.2,1.2,1.2]),he=.5+.5*Math.sin(te*2);m({model:Ae,pulse:he}),a.glowPos=be,a.glow=.06+.03*he,g({center:[be[0],be[1]-.12,be[2]],size:.1,pulse:he})}for(let q of o.parts)q.blend&&o.drawBlend({pb:q.pb,nb:q.nbuf,uv:q.uvBuf,el:q.el,tex:q.tex,alphaCut:q.alphaCut,skin:q.skin,kind:q.kind,alphaScale:q.alphaScale})}return W.state=a,W.place=Ds,W.setWalk=O=>{E=O||null,E&&(a.glow=0)},W.setSeat=O=>{L=O||null,a.glow=L?0:a.glow,b=-1},W.setPiano=O=>{O=!!O,O!==N&&(N=O,N&&(a.glow=0),b=-1)},W};hd.exports.PLACE=Ds});var ud=de((rT,Wx)=>{"use strict";Wx.exports={name:"Muzammil",title:"Hi, I\u2019m Muzammil.",text:`I\u2019m a self-taught artist. I paint emotions. Grief, longing, love, and the quiet ways we keep holding on. I borrow the light and stillness of the Renaissance to talk about very modern feelings.

This gallery is my portfolio, built brick by pixel, so my work has a home that never closes. Every painting comes with a few words, because some feelings need both a frame and a sentence.

You\u2019ll find me in the tree court, catching sunlight and trying not to get too absorbed. Wander the halls, stay as long as you like, and don\u2019t worry about the time. In here, the only thing that\u2019s drying is the paint.`}});var pd=de((aT,Zx)=>{"use strict";var Kx=sa(),Vx=Kc(),Xi=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function dd(){return Kx.isPhone||!window.matchMedia||!window.matchMedia("(pointer: fine)").matches?!1:window.innerWidth>=900&&window.innerHeight>=520}var nE=`
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
`,Xx=!1;function Qx(){if(Xx)return;Xx=!0;let e=document.createElement("style");e.textContent=nE,document.head.appendChild(e)}var rE='<svg class="visit-play" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="10.2"/><path d="M10 8.4l6 3.6-6 3.6z" fill="currentColor" stroke="none"/></svg>';function aE(e){return!e||!e.visit||!dd()?"":(Qx(),`<button type="button" class="visit-btn" data-visit="${Xi(e.slug||"")}" aria-label="Visit what remained: watch ${Xi(e.title)} come to life">${rE}<span>Visit what remained</span></button>`)}function iE(e){let t=e.getContext("2d");e.width=e.height=160;let o=t.createImageData(160,160),n=!0,r=0;return function a(i){if(n){if(i-r>70){r=i;let s=o.data;for(let c=0;c<s.length;c+=4){let f=Math.random()*255;s[c]=s[c+1]=s[c+2]=f,s[c+3]=255}t.putImageData(o,0,0),e.style.transform=`translate(${(Math.random()*6-3).toFixed(1)}%, ${(Math.random()*6-3).toFixed(1)}%)`}requestAnimationFrame(a)}}(0),()=>{n=!1}}var Nl=null;function sE(e){if(Nl||!e||!e.visit)return;Qx();let t=document.activeElement;document.body.classList.add("visiting");let o="images/web/"+e.slug+(Kx.isPhone?"-1024":"")+".webp",n=document.createElement("div");n.className="visit",n.setAttribute("role","dialog"),n.setAttribute("aria-modal","true"),n.setAttribute("aria-label","Visiting "+e.title),n.innerHTML=`
		<video muted playsinline preload="auto" ${e.visit.poster?`poster="${Xi(e.visit.poster)}"`:""}></video>
		<img class="visit-art" alt="${Xi(e.title)}, ${Xi(Vx(e))}" src="${Xi(o)}">
		<canvas class="visit-grain" aria-hidden="true"></canvas>
		<div class="visit-vignette" aria-hidden="true"></div>
		<div class="visit-bar top" aria-hidden="true"></div>
		<div class="visit-bar bottom" aria-hidden="true"></div>
		<div class="visit-title">
			<span class="visit-kicker">A visit</span>
			<span class="visit-name">${Xi(e.title)}</span>
			<span class="visit-meta">${Xi(Vx(e))}</span>
		</div>
		<button type="button" class="visit-close" aria-label="Return to the gallery">\xD7</button>
		<button type="button" class="visit-skip">Skip</button>
		<div class="visit-end">
			<button type="button" class="primary" data-act="back">Return to the gallery</button>
			<button type="button" data-act="again">Watch again</button>
		</div>`,document.body.appendChild(n);let r=n.querySelector("video"),a=n.querySelector(".visit-title"),i=iE(n.querySelector(".visit-grain")),s=[],c=(m,g)=>s.push(setTimeout(m,g)),f=m=>m.stopPropagation();["mousedown","pointerdown","click","wheel","touchstart","touchmove"].forEach(m=>n.addEventListener(m,f));let l=m=>{m.key==="Escape"?(m.preventDefault(),p()):m.key===" "&&!(m.target&&m.target.tagName==="BUTTON")&&(m.preventDefault(),d()),m.stopImmediatePropagation()};window.addEventListener("keydown",l,!0);let u=m=>m.stopImmediatePropagation();window.addEventListener("keyup",u,!0);let h=!1;function d(){h||(h=!0,a.classList.add("on"),n.classList.add("resolved"),c(()=>{let m=n.querySelector('[data-act="back"]');m&&m.focus({preventScroll:!0})},1300))}function v(){h=!1,n.classList.remove("resolved"),a.classList.remove("on");try{r.currentTime=0}catch(g){}let m=r.play();m&&m.catch&&m.catch(()=>d()),n.classList.add("playing"),c(()=>{h||a.classList.add("on")},1600),c(()=>{h||a.classList.remove("on")},6200)}r.addEventListener("timeupdate",()=>{r.duration&&r.currentTime>r.duration-1.2&&d()}),r.addEventListener("ended",d),r.addEventListener("error",d);function p(){if(Nl){Nl=null,s.forEach(clearTimeout),n.classList.remove("on");try{r.pause()}catch(m){}window.removeEventListener("keydown",l,!0),window.removeEventListener("keyup",u,!0),document.body.classList.remove("visiting"),setTimeout(()=>{i(),n.remove(),t&&t.focus&&t.focus({preventScroll:!0})},1150)}}n.querySelector(".visit-close").addEventListener("click",p),n.querySelector(".visit-skip").addEventListener("click",()=>{try{r.pause()}catch(m){}d()}),n.querySelector(".visit-end").addEventListener("click",m=>{let g=m.target.closest("button");g&&(g.dataset.act==="back"&&p(),g.dataset.act==="again"&&(s.forEach(clearTimeout),v()))}),r.src=e.visit.video,Nl={close:p},requestAnimationFrame(()=>{n.classList.add("on"),c(v,1300)})}var Yx={};function cE(e){if(!e||!e.visit||Yx[e.visit.video]||!dd())return;Yx[e.visit.video]=!0;let t=document.createElement("link");t.rel="preload",t.as="video",t.href=e.visit.video,document.head.appendChild(t)}Zx.exports={available:dd,button:aE,open:sE,warm:cE,get active(){return!!Nl}}});var t3=de((iT,e3)=>{"use strict";var lE=sa(),ac=[0,0],tc=[0,0],gi=null,md=0;if(typeof window!="undefined"){window.addEventListener("pointermove",t=>{t.pointerType!=="touch"&&(ac[0]=Math.max(-1,Math.min(1,t.clientX/window.innerWidth*2-1)),ac[1]=Math.max(-1,Math.min(1,t.clientY/window.innerHeight*2-1)),md=performance.now())},{passive:!0});let e=()=>{md=performance.now()};["wheel","touchstart","touchmove","keydown","pointerdown"].forEach(t=>window.addEventListener(t,e,{passive:!0,capture:!0})),window.addEventListener("deviceorientation",t=>{t.gamma===null||t.beta===null||(gi||(gi=[t.gamma,t.beta]),gi[0]+=(t.gamma-gi[0])*.01,gi[1]+=(t.beta-gi[1])*.01,ac[0]=Math.max(-1,Math.min(1,(t.gamma-gi[0])/14)),ac[1]=Math.max(-1,Math.min(1,(t.beta-gi[1])/14)))},{passive:!0})}var Jx=0,oc=null,Oh=null,Xa=[0,0,0],vd=0,nc=null,rc=0,$s={eye:[0,0,0],target:[0,0,0],fov:50,roll:0},fE={apply(e,t){let o=Math.min(.1,Math.max(0,t-Jx));Jx=t;let n=e.eye,r=e.target,a=[r[0]-n[0],r[1]-n[1],r[2]-n[2]],i=Math.hypot(a[0],a[1],a[2])||1;a=[a[0]/i,a[1]/i,a[2]/i];let s=[-a[2],0,a[0]],c=Math.hypot(s[0],s[2])||1;s=[s[0]/c,0,s[2]/c];let f=[s[1]*a[2]-s[2]*a[1],s[2]*a[0]-s[0]*a[2],s[0]*a[1]-s[1]*a[0]],l=!oc;if(oc&&o>0){let b=[n[0]-oc[0],n[1]-oc[1],n[2]-oc[2]],k=Math.hypot(b[0],b[1],b[2]);if(k>2.5)l=!0;else{let L=Math.min(1,o*5);for(let N=0;N<3;N++)Xa[N]+=(b[N]/o-Xa[N])*L}let E=Math.hypot(r[0]-Oh[0],r[1]-Oh[1],r[2]-Oh[2]);rc=k/o<.12&&E/o<.2?rc+o:0}l&&(Xa[0]=Xa[1]=Xa[2]=0,rc=0),oc=n.slice(),Oh=r.slice(),vd=Math.hypot(Xa[0],Xa[1],Xa[2]);let u=Math.min(1,o*2.6);tc[0]+=(ac[0]-tc[0])*u,tc[1]+=(ac[1]-tc[1])*u;let h=Math.max(.03,Math.min(.32,i*.05)),d=(lE.isPhone&&!gi?1.5:1)*Math.min(1,rc/2.5),v=(Math.sin(t*.131)*.55+Math.sin(t*.071+1.3)*.45)*h*.55*d,p=Math.sin(t*.097+.6)*h*.16*d,m=tc[0]*h+v,g=-tc[1]*h*.45+p;for(let b=0;b<3;b++)$s.eye[b]=n[b]+s[b]*m+f[b]*g,$s.target[b]=r[b]+(s[b]*m+f[b]*g)*.12;n[1]>.05&&($s.eye[1]=Math.max(.05,$s.eye[1]));let y=Xa[0]*s[0]+Xa[2]*s[2];return $s.fov=e.fov+Math.min(3.5,vd*.55),$s.roll=(e.roll||0)+Math.max(-.035,Math.min(.035,-y*.006)),$s},pull(e,t){(nc===null||!(Math.abs(e.focus-nc)<40))&&(nc=e.focus);let o=1/60;nc+=(e.focus-nc)*Math.min(1,o*3.2),e.focus=nc,e.aperture>0&&(e.aperture*=1+.25*Math.min(1,rc/3))},get speed(){return vd},get resting(){return rc>2&&performance.now()-md>2e3}};e3.exports=fE});var gd=de((sT,o3)=>{o3.exports=1e-6});var xd=de((cT,n3)=>{n3.exports=hE;function hE(){var e=new Float32Array(3);return e[0]=0,e[1]=0,e[2]=0,e}});var a3=de((lT,r3)=>{r3.exports=uE;function uE(e){var t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}});var yd=de((fT,i3)=>{i3.exports=dE;function dE(e,t,o){var n=new Float32Array(3);return n[0]=e,n[1]=t,n[2]=o,n}});var bd=de((hT,s3)=>{s3.exports=pE;function pE(e,t){var o=t[0],n=t[1],r=t[2],a=o*o+n*n+r*r;return a>0&&(a=1/Math.sqrt(a),e[0]=t[0]*a,e[1]=t[1]*a,e[2]=t[2]*a),e}});var wd=de((uT,c3)=>{c3.exports=vE;function vE(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}});var u3=de((dT,h3)=>{h3.exports=gE;var l3=yd(),f3=bd(),mE=wd();function gE(e,t){var o=l3(e[0],e[1],e[2]),n=l3(t[0],t[1],t[2]);f3(o,o),f3(n,n);var r=mE(o,n);return r>1?0:Math.acos(r)}});var p3=de((pT,d3)=>{d3.exports=xE;function xE(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}});var m3=de((vT,v3)=>{v3.exports=yE;function yE(e,t,o,n){return e[0]=t,e[1]=o,e[2]=n,e}});var x3=de((mT,g3)=>{g3.exports=bE;var _d=gd();function bE(e,t){var o=e[0],n=e[1],r=e[2],a=t[0],i=t[1],s=t[2];return Math.abs(o-a)<=_d*Math.max(1,Math.abs(o),Math.abs(a))&&Math.abs(n-i)<=_d*Math.max(1,Math.abs(n),Math.abs(i))&&Math.abs(r-s)<=_d*Math.max(1,Math.abs(r),Math.abs(s))}});var b3=de((gT,y3)=>{y3.exports=wE;function wE(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]}});var _3=de((xT,w3)=>{w3.exports=_E;function _E(e,t,o){return e[0]=t[0]+o[0],e[1]=t[1]+o[1],e[2]=t[2]+o[2],e}});var Md=de((yT,M3)=>{M3.exports=ME;function ME(e,t,o){return e[0]=t[0]-o[0],e[1]=t[1]-o[1],e[2]=t[2]-o[2],e}});var E3=de((bT,k3)=>{k3.exports=Md()});var kd=de((wT,S3)=>{S3.exports=kE;function kE(e,t,o){return e[0]=t[0]*o[0],e[1]=t[1]*o[1],e[2]=t[2]*o[2],e}});var T3=de((_T,A3)=>{A3.exports=kd()});var Ed=de((MT,L3)=>{L3.exports=EE;function EE(e,t,o){return e[0]=t[0]/o[0],e[1]=t[1]/o[1],e[2]=t[2]/o[2],e}});var C3=de((kT,z3)=>{z3.exports=Ed()});var R3=de((ET,N3)=>{N3.exports=SE;function SE(e,t,o){return e[0]=Math.min(t[0],o[0]),e[1]=Math.min(t[1],o[1]),e[2]=Math.min(t[2],o[2]),e}});var O3=de((ST,P3)=>{P3.exports=AE;function AE(e,t,o){return e[0]=Math.max(t[0],o[0]),e[1]=Math.max(t[1],o[1]),e[2]=Math.max(t[2],o[2]),e}});var F3=de((AT,I3)=>{I3.exports=TE;function TE(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e}});var D3=de((TT,G3)=>{G3.exports=LE;function LE(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e}});var q3=de((LT,$3)=>{$3.exports=zE;function zE(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e}});var U3=de((zT,H3)=>{H3.exports=CE;function CE(e,t,o){return e[0]=t[0]*o,e[1]=t[1]*o,e[2]=t[2]*o,e}});var j3=de((CT,B3)=>{B3.exports=NE;function NE(e,t,o,n){return e[0]=t[0]+o[0]*n,e[1]=t[1]+o[1]*n,e[2]=t[2]+o[2]*n,e}});var Sd=de((NT,W3)=>{W3.exports=RE;function RE(e,t){var o=t[0]-e[0],n=t[1]-e[1],r=t[2]-e[2];return Math.sqrt(o*o+n*n+r*r)}});var X3=de((RT,V3)=>{V3.exports=Sd()});var Ad=de((PT,Y3)=>{Y3.exports=PE;function PE(e,t){var o=t[0]-e[0],n=t[1]-e[1],r=t[2]-e[2];return o*o+n*n+r*r}});var Q3=de((OT,K3)=>{K3.exports=Ad()});var Td=de((IT,Z3)=>{Z3.exports=OE;function OE(e){var t=e[0],o=e[1],n=e[2];return Math.sqrt(t*t+o*o+n*n)}});var ey=de((FT,J3)=>{J3.exports=Td()});var Ld=de((GT,ty)=>{ty.exports=IE;function IE(e){var t=e[0],o=e[1],n=e[2];return t*t+o*o+n*n}});var ny=de((DT,oy)=>{oy.exports=Ld()});var ay=de(($T,ry)=>{ry.exports=FE;function FE(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e}});var sy=de((qT,iy)=>{iy.exports=GE;function GE(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e}});var ly=de((HT,cy)=>{cy.exports=DE;function DE(e,t,o){var n=t[0],r=t[1],a=t[2],i=o[0],s=o[1],c=o[2];return e[0]=r*c-a*s,e[1]=a*i-n*c,e[2]=n*s-r*i,e}});var hy=de((UT,fy)=>{fy.exports=$E;function $E(e,t,o,n){var r=t[0],a=t[1],i=t[2];return e[0]=r+n*(o[0]-r),e[1]=a+n*(o[1]-a),e[2]=i+n*(o[2]-i),e}});var dy=de((BT,uy)=>{uy.exports=qE;function qE(e,t){t=t||1;var o=Math.random()*2*Math.PI,n=Math.random()*2-1,r=Math.sqrt(1-n*n)*t;return e[0]=Math.cos(o)*r,e[1]=Math.sin(o)*r,e[2]=n*t,e}});var vy=de((jT,py)=>{py.exports=HE;function HE(e,t,o){var n=t[0],r=t[1],a=t[2],i=o[3]*n+o[7]*r+o[11]*a+o[15];return i=i||1,e[0]=(o[0]*n+o[4]*r+o[8]*a+o[12])/i,e[1]=(o[1]*n+o[5]*r+o[9]*a+o[13])/i,e[2]=(o[2]*n+o[6]*r+o[10]*a+o[14])/i,e}});var gy=de((WT,my)=>{my.exports=UE;function UE(e,t,o){var n=t[0],r=t[1],a=t[2];return e[0]=n*o[0]+r*o[3]+a*o[6],e[1]=n*o[1]+r*o[4]+a*o[7],e[2]=n*o[2]+r*o[5]+a*o[8],e}});var yy=de((VT,xy)=>{xy.exports=BE;function BE(e,t,o){var n=t[0],r=t[1],a=t[2],i=o[0],s=o[1],c=o[2],f=o[3],l=f*n+s*a-c*r,u=f*r+c*n-i*a,h=f*a+i*r-s*n,d=-i*n-s*r-c*a;return e[0]=l*f+d*-i+u*-c-h*-s,e[1]=u*f+d*-s+h*-i-l*-c,e[2]=h*f+d*-c+l*-s-u*-i,e}});var wy=de((XT,by)=>{by.exports=jE;function jE(e,t,o,n){var r=o[1],a=o[2],i=t[1]-r,s=t[2]-a,c=Math.sin(n),f=Math.cos(n);return e[0]=t[0],e[1]=r+i*f-s*c,e[2]=a+i*c+s*f,e}});var My=de((YT,_y)=>{_y.exports=WE;function WE(e,t,o,n){var r=o[0],a=o[2],i=t[0]-r,s=t[2]-a,c=Math.sin(n),f=Math.cos(n);return e[0]=r+s*c+i*f,e[1]=t[1],e[2]=a+s*f-i*c,e}});var Ey=de((KT,ky)=>{ky.exports=VE;function VE(e,t,o,n){var r=o[0],a=o[1],i=t[0]-r,s=t[1]-a,c=Math.sin(n),f=Math.cos(n);return e[0]=r+i*f-s*c,e[1]=a+i*c+s*f,e[2]=t[2],e}});var Ay=de((QT,Sy)=>{Sy.exports=XE;var Yi=xd()();function XE(e,t,o,n,r,a){var i,s;for(t||(t=3),o||(o=0),n?s=Math.min(n*t+o,e.length):s=e.length,i=o;i<s;i+=t)Yi[0]=e[i],Yi[1]=e[i+1],Yi[2]=e[i+2],r(Yi,Yi,a),e[i]=Yi[0],e[i+1]=Yi[1],e[i+2]=Yi[2];return e}});var Ly=de((ZT,Ty)=>{Ty.exports={EPSILON:gd(),create:xd(),clone:a3(),angle:u3(),fromValues:yd(),copy:p3(),set:m3(),equals:x3(),exactEquals:b3(),add:_3(),subtract:Md(),sub:E3(),multiply:kd(),mul:T3(),divide:Ed(),div:C3(),min:R3(),max:O3(),floor:F3(),ceil:D3(),round:q3(),scale:U3(),scaleAndAdd:j3(),distance:Sd(),dist:X3(),squaredDistance:Ad(),sqrDist:Q3(),length:Td(),len:ey(),squaredLength:Ld(),sqrLen:ny(),negate:ay(),inverse:sy(),normalize:bd(),dot:wd(),cross:ly(),lerp:hy(),random:dy(),transformMat4:vy(),transformMat3:gy(),transformQuat:yy(),rotateX:wy(),rotateY:My(),rotateZ:Ey(),forEach:Ay()}});var Ny=de((JT,Cy)=>{"use strict";function zy(){let e={};return{on(t,o){return(e[t]=e[t]||[]).push(o),this},emit(t,o){(e[t]||[]).slice().forEach(n=>n(o))}}}Cy.exports=function(t){let o=t.ownerDocument||document,n=zy(),r=null,a={dx:0,dy:0,dt:0},i=0,s=()=>o.pointerLockElement||o.webkitPointerLockElement||null,c=()=>{if(s())return;let l=t.requestPointerLock||t.webkitRequestPointerLock;if(l)try{let u=l.call(t);u&&u.catch&&u.catch(()=>{})}catch(u){}};t.addEventListener("mousedown",c,!1);let f=()=>{if(!s()){r&&(n.emit("release"),r.emit("end"),r=null);return}r=zy(),i=Date.now(),n.emit("attain",r)};return o.addEventListener("pointerlockchange",f),o.addEventListener("webkitpointerlockchange",f),o.addEventListener("pointerlockerror",()=>n.emit("error")),(o.body||t).addEventListener("mousemove",l=>{r&&(a.dx=l.movementX||l.webkitMovementX||0,a.dy=l.movementY||l.webkitMovementY||0,a.dt=Date.now()-i,n.emit("data",a),r.emit("data",a))},!1),n.request=c,n.target=s,n.release=()=>{s()&&(o.exitPointerLock||o.webkitExitPointerLock).call(o)},n}});var Fy=de((oL,Iy)=>{"use strict";var qs=U0(),Hs=Ly(),YE=Ny(),eL=Math.PI/4,tL=Math.PI/6,Ry=2,KE=1,QE=2.4,ZE=2.4,JE=1e3,e8=5,t8=7,zd=ir().C,Rl=[[7,1.6],[7,zd.zc],[zd.x1-2.95,zd.zc]],Ki=Rl.slice(1).map((e,t)=>{let o=Rl[t],n=e[0]-o[0],r=e[1]-o[1],a=Math.hypot(n,r);return{a:o,len:a,dir:[n/a,r/a]}}),Cd=Ki.reduce((e,t)=>e+t.len,0);function Py(e){let t=Math.max(0,Math.min(Cd,e));for(let n of Ki){if(t<=n.len)return[n.a[0]+n.dir[0]*t,n.a[1]+n.dir[1]*t];t-=n.len}let o=Rl[Rl.length-1];return[o[0],o[1]]}function o8(e){let t=0;for(let n=0;n<Ki.length;n++){let r=Ki[n],a=t+r.len;if(e<a-1e-4||n===Ki.length-1){let i=r.dir,c=e<=t+1e-4&&n>0?Ki[n-1].dir:r.dir;return{ahead:i,back:[-c[0],-c[1]]}}t=a}let o=Ki[Ki.length-1].dir;return{ahead:o,back:[-o[0],-o[1]]}}var n8=Math.PI/4,r8=7,a8=140,i8=70,Oy=(e,t,o)=>(1-e)*t+e*o,s8=e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2;Iy.exports=function({getGridSegments:e,getGridParts:t},o){var n=[0,Math.PI],r=[0,Math.PI],a=0,i=[0,0,0],s=[t8,Ry,Rl[0][1]],c=0,f=1,l=0,u=[.707,0,.707],h=[0,1,0],d=[0,0,0],v=.5,p=qs.identity([]),m=qs.identity([]),g=!1,y=[0,0,0],b=[0,0,0],k=1,E=!1;let L=Xe=>{n[1]+=Xe*n8},N=(Xe,ht,vt)=>{if(Xe=Math.max(Math.min(Xe,100),-100),ht=Math.max(Math.min(ht,100),-100),n[0]=0,E){a=0;return}for(a+=Xe;a>=vt;)L(1),a-=vt;for(;a<=-vt;)L(-1),a+=vt};YE(document.body).on("attain",Xe=>{Xe.on("data",ht=>{N(ht.dx,ht.dy,a8)})});let O=null,te=null,D=0,re={x:0,y:0},q=58,Y=document.createElement("div");Y.id="museum-mobile-controls",Y.innerHTML=`

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
	`,document.body.appendChild(Y);let be=Y.querySelector("#museum-joystick"),qe=Y.querySelector("#museum-joystick-knob"),Ae=()=>{qe.style.transform="translate(-50%, -50%)",i[0]=0,i[2]=0},he=Xe=>{let ht=Xe.clientX-re.x,vt=Xe.clientY-re.y,Zt=Math.hypot(ht,vt);if(Zt>q&&(ht=ht/Zt*q,vt=vt/Zt*q),qe.style.transform=`translate(
				calc(-50% + ${ht}px),
				calc(-50% + ${vt}px)
			)`,Zt<10){i[0]=0,i[2]=0;return}let Lt=ht/q,mt=vt/q;i[0]=0,i[2]=Math.abs(mt)>.15?mt:0},Te=(Xe,ht)=>{for(let vt=0;vt<Xe.length;vt++)if(Xe[vt].identifier===ht)return Xe[vt];return null},dt=Xe=>!!(Xe&&Xe.closest&&Xe.closest(".painting-plaque, .story-overlay, .story-card, .story-close, button")),qt=Xe=>{if(!dt(Xe.target)&&(Xe.cancelable&&Xe.preventDefault(),!E))for(let ht=0;ht<Xe.changedTouches.length;ht++){let vt=Xe.changedTouches[ht];if(O===null&&vt.clientX<window.innerWidth*.48){O=vt.identifier;let Zt=be.getBoundingClientRect();re.x=Zt.left+Zt.width/2,re.y=Zt.top+Zt.height/2,he(vt)}else te===null&&vt.clientX>=window.innerWidth*.48&&(te=vt.identifier,D=vt.clientX,a=0)}},He=Xe=>{if(dt(Xe.target)||(Xe.cancelable&&Xe.preventDefault(),E))return;let ht=O===null?null:Te(Xe.touches,O);ht&&he(ht);let vt=te===null?null:Te(Xe.touches,te);if(vt){let Zt=vt.clientX-D;D=vt.clientX,N(Zt,0,i8)}},pt=Xe=>{if(!dt(Xe.target)){Xe.cancelable&&Xe.preventDefault();for(let ht=0;ht<Xe.changedTouches.length;ht++){let vt=Xe.changedTouches[ht];vt.identifier===O&&(O=null,Ae()),vt.identifier===te&&(te=null)}}};document.addEventListener("touchstart",qt,{passive:!1}),document.addEventListener("touchmove",He,{passive:!1}),document.addEventListener("touchend",pt,{passive:!1}),document.addEventListener("touchcancel",pt,{passive:!1});let St=document.createElement("style");St.textContent=`

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
	`,document.head.appendChild(St);var to={};let ao=Xe=>{if(Xe.defaultPrevented||Xe.ctrlKey||Xe.altKey||Xe.metaKey)return;let ht=Xe.type==="keydown";to[Xe.code]=ht,ht&&!Xe.repeat&&!E&&((Xe.code==="KeyA"||Xe.code==="ArrowLeft")&&L(-1),(Xe.code==="KeyD"||Xe.code==="ArrowRight")&&L(1)),g=!1;let vt=to.KeyW||to.ArrowUp?1:0;i=[0,0,(to.KeyS||to.ArrowDown?1:0)-vt],Xe.preventDefault()};window.addEventListener("keydown",ao),window.addEventListener("keyup",ao);var Ho=0;return{pos:s,fmouse:r,forward:u,up:h,setPaused:Xe=>{E=!!Xe,E&&(i[0]=0,i[2]=0,Ae())},place:(Xe,ht)=>{c=Math.max(0,Math.min(Cd,Xe));let vt=Py(c);s[0]=vt[0],s[2]=vt[1],n[1]=ht,r[1]=ht,a=0,f=1},view:()=>p,proj:()=>(qs.perspective(m,o(),window.innerWidth/window.innerHeight,.1,700),m),tick:({time:Xe})=>{let ht=Xe-Ho;Ho=Xe;let vt=[0,0,0],Zt=[];Hs.set(u,Math.sin(r[1]),0,-Math.cos(r[1])),Hs.set(h,0,1,0);let po=g?ZE:QE,Lt=Math.sin(n[1]),mt=-Math.cos(n[1]),me=o8(c),tt=Lt*me.ahead[0]+mt*me.ahead[1],zt=Lt*me.back[0]+mt*me.back[1],ct=f;Math.max(tt,zt)>.3&&(ct=tt>=zt?1:-1);let Ve=E?0:-i[2]*po;l+=(Ve-l)*(1-Math.exp(-Math.min(ht,.1)*5.5)),Ve===0&&Math.abs(l)<.01&&(l=0);let go=l*ct*Math.min(ht,.1);E&&(i[0]=0,i[2]=0,go=0,l=0),go!==0&&(f=Math.sign(go)*Math.sign(-i[2]||1)),c=Math.max(0,Math.min(Cd,c+go));let _=Py(c);Hs.set(d,_[0]-s[0],0,_[1]-s[2]);let oo=Hs.len(d);oo===0&&v!==.25&&(v=(Math.abs((v+.5)%1-.5)-.25)*.8+.25,(v+.01)%.25<.02&&(v=.25));let Wt=v;if(v+=oo/(g?e8:JE),s[1]=Ry,Hs.add(s,s,d),k<1){k+=ht/KE,k=Math.min(k,1);let xo=s8(k);Hs.set(s,Oy(xo,y[0],b[0]),s[1],Oy(xo,y[2],b[2]))}r[0]=0,r[1]+=(n[1]-r[1])*Math.min(1,Math.min(ht,.1)*r8),Math.abs(n[1]-r[1])<5e-4&&(r[1]=n[1]),qs.identity(p),qs.rotateX(p,p,0),qs.rotateY(p,p,r[1]),qs.translate(p,p,Hs.scale(vt,s,-1))}}}});var Dy=de((nL,Gy)=>{"use strict";var{skylightGLSL:c8,Z_START:l8,Z_END:f8,GLASS_Y:h8}=C0(),{oculusGLSL:u8,A:Us}=fa(),{windowLightGLSL:d8,C:Ih}=ir(),{doorLightGLSL:p8}=Li(),Fh=Jn(),Qi=fh(),v8=ch(),ic=null,da=e=>e.toFixed(4),Nd=.1,Rd=700,sc={exposure:.88,shafts:1,bloom:1,vignette:.42,grain:.032};function m8(e,t){let o=t[0],n=t[1],r=t[2],a=t[3],i=t[4],s=t[5],c=t[6],f=t[7],l=t[8],u=t[9],h=t[10],d=t[11],v=t[12],p=t[13],m=t[14],g=t[15],y=o*s-n*i,b=o*c-r*i,k=o*f-a*i,E=n*c-r*s,L=n*f-a*s,N=r*f-a*c,W=l*p-u*v,O=l*m-h*v,te=l*g-d*v,D=u*m-h*p,re=u*g-d*p,q=h*g-d*m,Y=y*q-b*re+k*D+E*te-L*O+N*W;return Y?(Y=1/Y,e[0]=(s*q-c*re+f*D)*Y,e[1]=(r*re-n*q-a*D)*Y,e[2]=(p*N-m*L+g*E)*Y,e[3]=(h*L-u*N-d*E)*Y,e[4]=(c*te-i*q-f*O)*Y,e[5]=(o*q-r*te+a*O)*Y,e[6]=(m*k-v*N-g*b)*Y,e[7]=(l*N-h*k+d*b)*Y,e[8]=(i*re-s*te+f*W)*Y,e[9]=(n*te-o*re-a*W)*Y,e[10]=(v*L-p*k+g*y)*Y,e[11]=(u*k-l*L-d*y)*Y,e[12]=(s*O-i*D-c*W)*Y,e[13]=(o*D-n*O+r*W)*Y,e[14]=(p*b-v*E-m*y)*Y,e[15]=(l*E-u*b+h*y)*Y,e):null}function g8(e,t,o){let n=new Array(16);for(let r=0;r<4;r++)for(let a=0;a<4;a++){let i=0;for(let s=0;s<4;s++)i+=t[s*4+a]*o[r*4+s];n[r*4+a]=i}for(let r=0;r<16;r++)e[r]=n[r];return e}var x8=`
precision highp float;
attribute vec2 position;
varying vec2 uv;
void main() {
	uv = position * 0.5 + 0.5;
	gl_Position = vec4(position, 0.0, 1.0);
}`;Gy.exports=(e,t)=>{let o=!!t.isPhone,n=e.hasExtension("webgl_depth_texture"),r=o?10:18,a=()=>Qi.zone==="studio"?4:t.post>=2?2:4,i=o?7:11,s=He=>e.texture(Object.assign({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"},He||{})),c=()=>e.framebuffer({color:s(),depth:!1}),f=s(),l=n?e.texture({width:4,height:4,format:"depth",type:"uint32"}):null,u=e.framebuffer({color:f,depth:l||!0}),h=[c(),c()],d=[c(),c()],v=[c(),c()],p=[c(),c()],m=new Array(16).fill(0),g=new Array(16).fill(0),y=[0,0,0],b={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},k={position:[-1,-1,3,-1,-1,3]},E=(He,pt,St)=>e(Object.assign({vert:x8,frag:He,attributes:k,count:3,depth:{enable:!1,mask:!1},cull:{enable:!1},blend:{enable:!1},uniforms:pt,framebuffer:e.prop("out")},St||{})),L=[2.6,0,l8-3.2,12.6,h8,f8+.4],N=[Us.x0-.2,0,Us.z0,Us.x1,Us.domeTop,Us.z1],W=[Ih.x0,0,Ih.z0,Ih.x1,7.6,Ih.z1],O=[.35,0,.35,13.65,7.6,9],te=v8.AIR_BOX,D=He=>`vec3(${da(He[0])}, ${da(He[1])}, ${da(He[2])}), vec3(${da(He[3])}, ${da(He[4])}, ${da(He[5])})`,re=`
	#define STUDIO_SUN vec3(0.0, 1.0, 0.0)
	float studioSun(vec3 p) { return 0.0; }`,q=He=>E(`
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

	${c8()}
	${u8()}
	${d8()}
	${p8()}
	${He}

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
			vec2 t = hitBox(eye, rd, ${D(L)});
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
			vec2 t = hitBox(eye, rd, ${D(N)});
			t.y = min(t.y, len);
			if (t.y > t.x) {
				float st = (t.y - t.x) / float(N);
				float acc = 0.0;
				for (int i = 0; i < N; i++) {
					vec3 p = eye + rd * (t.x + (float(i) + jit) * st);
					if (p.y < ${da(Us.dome.base)} && p.x > ${da(Us.x0-.1)}) acc += oculusOpen(p) * treeShade(p) * air(p);
				}
				float ph = phase(dot(rd, SHAFT), 0.6) + 0.05;
				sum += mix(vec3(1.0, 0.88, 0.68), vec3(0.62, 0.74, 1.0) * 1.2, night) * acc * st * ph * strength.y;
			}
		}

		// the corridor windows
		if (strength.z > 0.0) {
			vec2 t = hitBox(eye, rd, ${D(W)});
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
			vec2 t = hitBox(eye, rd, ${D(O)});
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
			vec2 t = hitBox(eye, rd, ${D(te)});
			t.y = min(t.y, len);
			if (t.y > t.x) {
				const int NS = ${i};
				float st = (t.y - t.x) / float(NS);
				float acc = 0.0;
				for (int i = 0; i < NS; i++) {
					vec3 p = eye + rd * (t.x + (float(i) + jit) * st);
					#ifdef STUDIO_AIR_EVEN
					acc += studioSun(p) * (0.75 + 0.25 * air(p));
					#else
					acc += studioSun(p) * air(p);
					#endif
				}
				#ifdef STUDIO_SUN2
				// (a room lit from both sides: the red room, redroom.js)
				float ph = 0.5 * (phase(dot(rd, STUDIO_SUN), 0.4) + phase(dot(rd, STUDIO_SUN2), 0.4)) + 0.05;
				#else
				float ph = phase(dot(rd, STUDIO_SUN), 0.6) + 0.04;
				#endif
				#ifdef SHAFT_TINT
				// (a soft ceiling: a deep colour must not run past what the
				// picture can hold, or it bleaches)
				float sv = acc * st * ph * strength5;
				sum += SHAFT_TINT * sv / (1.0 + sv * 0.8);
				#else
				sum += mix(vec3(1.0, 0.84, 0.62), vec3(0.62, 0.74, 1.0) * 1.15, night) * acc * st * ph * strength5;
				#endif
			}
		}

		gl_FragColor = vec4(sum, 1.0);
	}`,{depthTex:()=>l,invVP:()=>m,eye:()=>y,time:e.context("time"),night:()=>Fh.night,strength:()=>be,strength5:()=>qe,...He===re?{}:{studioBake:()=>ic.bakedSun(e)}}),Y=q(re),be=[0,0,0,0],qe=0;function Ae(){let He=sc.shafts*b.shafts,pt=Fh.night;return be[0]=Qi.box(L)?.06*He*(1+.9*pt):0,be[1]=Qi.box(N,!1,"court")?.1*He*(1+.9*pt):0,be[2]=Qi.box(W)?.07*He*(1+.4*pt):0,be[3]=Qi.box(O)?.04*He*(1-.75*pt):0,Qi.zone==="studio"?(be[0]=be[1]=be[2]=be[3]=0,qe=.065*He*(1+1*pt)):qe=0,be[0]+be[1]+be[2]+be[3]+qe>5e-4}let he=E(`
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
	}`,{src:e.prop("src"),dir:(He,pt)=>[pt.dir[0]/pt.size[0],pt.dir[1]/pt.size[1]]}),Te=E(`
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
	}`,{src:e.prop("src"),texel:(He,pt)=>[.5/pt.size[0],.5/pt.size[1]],threshold:e.prop("threshold")}),dt=E(`
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
		return 2.0 * ${da(Nd)} * ${da(Rd)} / (${da(Rd+Nd)} - z * ${da(Rd-Nd)});
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
	}`,{scene:()=>f,depthTex:()=>l||f,soft:()=>h[0],bloomA:()=>d[0],bloomB:()=>v[0],shafts:()=>p[0],res:()=>[u.width,u.height],time:e.context("time"),exposure:()=>sc.exposure*b.exposure,vignette:()=>Math.min(1,sc.vignette+b.vignette+.22*Fh.night+(Qi.zone==="studio"?.2:0)),night:()=>Fh.night,grain:()=>sc.grain,bloomK:()=>sc.bloom,letterbox:()=>b.letterbox,fade:()=>b.fade,fadeColor:()=>b.fadeColor,aperture:()=>t.post>=2?b.aperture:0,focus:()=>b.focus,hasDepth:n?1:0},{framebuffer:null}),qt=e({framebuffer:()=>u});return{shot:b,look:sc,hasDepth:n,useStudio(He){ic!==He&&(ic=He,Y=q(He?He.sunGLSL():re))},capture(He,pt,St){let to=Math.max(.4,Math.min(1,t.scale||1)),ao=Math.max(2,Math.round(He.drawingBufferWidth*to/2)*2),Ho=Math.max(2,Math.round(He.drawingBufferHeight*to/2)*2);(u.width!==ao||u.height!==Ho)&&u.resize(ao,Ho);let Xe=Math.max(1,Math.ceil(ao/2)),ht=Math.max(1,Math.ceil(Ho/2));h.forEach(vt=>vt.resize(Xe,ht)),d.forEach(vt=>vt.resize(Math.max(1,Math.ceil(ao/4)),Math.max(1,Math.ceil(Ho/4)))),v.forEach(vt=>vt.resize(Math.max(1,Math.ceil(ao/8)),Math.max(1,Math.ceil(Ho/8)))),p.forEach(vt=>vt.resize(Math.max(1,Math.ceil(ao/a())),Math.max(1,Math.ceil(Ho/a())))),g8(g,pt.proj,pt.view),m8(m,g),y[0]=pt.eye[0],y[1]=pt.eye[1],y[2]=pt.eye[2],qt(()=>{e.clear({color:[0,0,0,1],depth:1}),St()})},present(){let He=pt=>[pt.width,pt.height];n&&t.post>=1&&Ae()?(Y({out:p[0]}),he({out:p[1],src:p[0],dir:[1,0],size:He(p[0])}),he({out:p[0],src:p[1],dir:[0,1],size:He(p[0])})):e.clear({color:[0,0,0,1],framebuffer:p[0]}),Te({out:h[0],src:f,size:[u.width,u.height],threshold:0}),he({out:h[1],src:h[0],dir:[1,0],size:He(h[0])}),he({out:h[0],src:h[1],dir:[0,1],size:He(h[0])}),Te({out:d[0],src:h[0],size:He(h[0]),threshold:Qi.zone==="studio"&&ic&&ic.POST&&ic.POST.threshold||.42}),he({out:d[1],src:d[0],dir:[1,0],size:He(d[0])}),he({out:d[0],src:d[1],dir:[0,1],size:He(d[0])}),Te({out:v[0],src:d[0],size:He(d[0]),threshold:0}),he({out:v[1],src:v[0],dir:[1.5,0],size:He(v[0])}),he({out:v[0],src:v[1],dir:[0,1.5],size:He(v[0])}),dt({out:null})}}}});var By=de((rL,Uy)=>{"use strict";var $y=Jn().GLSL,y8=ws(),Pd=Li(),{C:b8,FAR_DOOR:w8}=ir(),_8=100*Math.PI/180,qy=e=>[w8.x-e[2],e[1],b8.zc-7+e[0]],Hy=e=>[-e[2],e[1],e[0]];function M8(e){let t=[],o=[],n=[],r=[],a=y8.createBuilder(t,o,n,r);Pd.addFrames(a,e);let i=Pd.glassPanes(e),s=c=>{let f=[];for(let l=0;l<c.length;l+=3)f.push([c[l],c[l+1],c[l+2]]);return f};return{position:s(t),normal:s(o),elements:n,glass:i}}Uy.exports=e=>{let t=Pd.DOOR,o=["left","right"].map(l=>{let u=M8(l),h=u.position.length;return{part:l,hinge:l==="left"?t.x0:t.x1,sign:l==="left"?-1:1,src:u.position.map(d=>d.slice()),srcN:u.normal.map(d=>d.slice()),srcG:u.glass.map(d=>d.slice()),pos:e.buffer({data:new Float32Array(h*3),usage:"dynamic"}),nrm:e.buffer({data:new Float32Array(h*3),usage:"dynamic"}),gpos:e.buffer({data:new Float32Array(u.glass.length*3),usage:"dynamic"}),gnrm:e.buffer({data:new Float32Array(u.glass.length*3),usage:"dynamic"}),el:e.elements({data:new Uint32Array(u.elements),type:"uint32"}),glassCount:u.glass.length,outP:new Float32Array(h*3),outN:new Float32Array(h*3),outG:new Float32Array(u.glass.length*3),outGN:new Float32Array(u.glass.length*3)}}),n=null;function r(l){if(l!==n){n=l;for(let u of o){let h=u.sign*l,d=Math.cos(h),v=Math.sin(h),p=y=>{let b=y[0]-u.hinge,k=y[2];return[u.hinge+b*d+k*v,y[1],-b*v+k*d]},m=y=>[y[0]*d+y[2]*v,y[1],-y[0]*v+y[2]*d];u.src.forEach((y,b)=>{let k=qy(p(y));u.outP.set(k,b*3),u.outN.set(Hy(m(u.srcN[b])),b*3)});let g=Hy(m([0,0,1]));u.srcG.forEach((y,b)=>{u.outG.set(qy(p(y)),b*3),u.outGN.set(g,b*3)}),u.pos.subdata(u.outP),u.nrm.subdata(u.outN),u.gpos.subdata(u.outG),u.gnrm.subdata(u.outGN)}}}r(0);let a=`
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
	}`,i=e({vert:a,frag:`
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
		}`,attributes:{position:e.prop("pos"),normal:e.prop("nrm")},elements:e.prop("el"),cull:{enable:!1}}),s=e({vert:a,frag:`
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
		}`,attributes:{position:e.prop("pos"),normal:e.prop("nrm")},count:e.prop("count"),cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}}),c=0,f=()=>{r(c*_8);for(let l of o)i({pos:l.pos,nrm:l.nrm,el:l.el})};return f.glass=()=>{for(let l of o)s({pos:l.gpos,nrm:l.gnrm,count:l.glassCount})},f.setOpen=l=>{c=l||0},f.openNow=()=>c,f}});var Wy=de((aL,jy)=>{"use strict";var k8=Jn().GLSL,{skylightGLSL:E8}=C0(),{oculusGLSL:S8}=fa(),{windowLightGLSL:A8}=ir(),Ca=.22;function T8(){let e=[],t=[],o=[],n=[],i=(l,u)=>{let h=Ca*.2*Math.pow(Math.sin(Math.PI*Math.pow(l,.85)),.9)*(u>0?1.06:.94),d=l*Ca-Ca*.12,v=u*h,p=Math.abs(u)*h*.42-.14*l*l*Ca;p+=Math.sin(l*17+(u>0?0:2.1))*.012*Ca*u*u;let m=(l-.3)*.55,g=Math.cos(m),y=Math.sin(m),b=p*g-v*y,k=p*y+v*g;return[d,b,k+.05*Ca*l*l]},s=(l,u)=>{let d=i(Math.min(1,l+.01),u),v=i(Math.max(0,l-.01),u),p=i(l,Math.min(1,u+.01)),m=i(l,Math.max(-1,u-.01)),g=[d[0]-v[0],d[1]-v[1],d[2]-v[2]],y=[p[0]-m[0],p[1]-m[1],p[2]-m[2]],b=[y[1]*g[2]-y[2]*g[1],y[2]*g[0]-y[0]*g[2],y[0]*g[1]-y[1]*g[0]],k=Math.hypot(b[0],b[1],b[2])||1,E=b[1]<0?-1:1;return[b[0]/k*E,b[1]/k*E,b[2]/k*E]};for(let l=0;l<=18;l++){let u=l/18;for(let h=0;h<=5*2;h++){let d=h/5-1;e.push(i(u,d)),t.push(s(Math.min(.97,Math.max(.03,u)),d)),o.push([u,d])}}let c=5*2+1;for(let l=0;l<18;l++)for(let u=0;u<c-1;u++){let h=l*c+u,d=h+1,v=h+c,p=v+1;n.push([h,v,d],[d,v,p])}let f=e.length;return e.push([-Ca*.12,0,-.003],[-Ca*.12,0,.003],[-Ca*.24,-.01,.0015],[-Ca*.24,-.01,-.0015]),t.push([0,1,0],[0,1,0],[0,1,0],[0,1,0]),o.push([0,0],[0,0],[-.1,0],[-.1,0]),n.push([f,f+2,f+1],[f,f+3,f+2]),{pos:e,nrm:t,uv:o,idx:n}}jy.exports=e=>{let t=T8(),o=e({vert:`
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
		${k8}
		uniform float time;
		uniform float yScale, visible;
		varying vec3 v_pos, v_normal;
		varying vec2 v_uv;
		varying vec3 v_eye;

		${E8()}
		${S8()}
		${A8()}

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
		}`,attributes:{position:t.pos,normal:t.nrm,uv:t.uv},elements:t.idx,uniforms:{model:e.prop("model"),visible:1},cull:{enable:!1}}),n=Jn(),r=e({vert:`
		precision highp float;
		uniform mat4 proj, view, model;
		uniform float yScale;
		attribute vec2 corner;
		varying vec2 v_uv;
		void main() {
			vec3 c = (model * vec4(${(Ca*.35).toFixed(3)}, 0.0, 0.0, 1.0)).xyz;
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{model:e.prop("model"),night:()=>n.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(a){a&&a.visible&&(o({model:a.model}),n.night>.01&&r({model:a.model}))}}});var Yy=de((iL,Xy)=>{"use strict";var{skylightGLSL:L8,Z_START:Vy,Z_END:z8}=C0(),{oculusGLSL:C8,A:cc}=fa(),{windowLightGLSL:N8,C:Bs}=ir();Xy.exports=(e,t)=>{let o=t.isPhone?900:2600,n=t.isPhone?350:900,r=t.isPhone?450:1300,a=t.isPhone?13:22,i=7,s=()=>(i=i*16807%2147483647,(i-1)/2147483646),c=Bs.x0+.6,f=Bs.x1-.3,l=[];for(let v=0;v<o;v++)l.push([2.5+s()*10.5,.3+s()*8,Vy-3.5+s()*(z8-Vy+4.5),s()]);for(let v=0;v<n;v++)l.push([cc.x0+.3+s()*(cc.x1-cc.x0-.6),.3+s()*7.5,cc.z0+.3+s()*(cc.z1-cc.z0-.6),s()]);for(let v=0;v<r;v++)l.push([c+s()*(f-c),.2+s()*5.6,Bs.z0+.25+s()*(Bs.z1-Bs.z0-.5),s()]);let u=v=>v.toFixed(4),h=[[0,-50,0,0],[0,-50,0,0],[0,-50,0,0],[0,-50,0,0]],d=e({vert:`
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

		${L8()}
		${C8()}
		${N8()}

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
				p.x = ${u(c)} + mod(p.x - ${u(c)} - gust.x * (0.55 + 0.9 * seed.w), ${u(f-c)});
				p.y += sin(time * 5.0 + s * 11.0) * 0.22 * gust.y;
				p.z += cos(time * 4.3 + s * 13.0) * 0.30 * gust.y;
				p.z = clamp(p.z, ${u(Bs.z0+.1)}, ${u(Bs.z1-.1)});
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
			float size = sharp + blur * ${u(a)} * (0.6 + 0.4 * seed.w);
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
		}`,attributes:{seed:l},count:l.length,primitive:"points",uniforms:{time:e.context("time"),pixelScale:v=>v.viewportHeight*.006,focus:(v,p)=>p&&p.focus||6,aperture:(v,p)=>p&&p.aperture||0,wake0:(v,p)=>(p&&p.wake||h)[0],wake1:(v,p)=>(p&&p.wake||h)[1],wake2:(v,p)=>(p&&p.wake||h)[2],wake3:(v,p)=>(p&&p.wake||h)[3],wakeDir:(v,p)=>p&&p.wakeDir||[0,0,1],gust:(v,p)=>p&&p.gust||[0,0]},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});return v=>d(v||{})}});var tb=de((sL,eb)=>{"use strict";var{C:Jy}=ir(),Ky=Jn(),Qy=15.3,R8=37.1,Zy=Jy.z1+.9,P8=Jy.z1+.7+16-.6;eb.exports=(e,t)=>{let o=t.isPhone?36:80,n=11,r=()=>(n=n*16807%2147483647,(n-1)/2147483646),a=[];for(let f=0;f<o;f++){let l=.35+Math.pow(r(),1.8)*2.4;a.push([Qy+r()*(R8-Qy),l,Zy+r()*(P8-Zy),r()])}let i=[],s=[];a.forEach(f=>{[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(l=>{i.push(l[0],l[1]),s.push(...f)})});let c=e({vert:`
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
		}`,attributes:{corner:i,seed:s},count:i.length/2,uniforms:{time:e.context("time"),night:()=>Ky.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(){Ky.night>.01&&c()}}});var $h=de((cL,Jr)=>{"use strict";var ob=Jn(),Ya=Oi(),O8=U0(),Ji=Math.PI,st=e=>(+e).toFixed(4),Na=e=>`vec3(${st(e[0])}, ${st(e[1])}, ${st(e[2])})`,Go={x0:-2.05,z0:41.45,z1:47.55,top:5.1},mo=-.55,Gn=-2,en=42.25,Sn=43.65,ma=45.35,Lr=46.75,Vn=2.75,Qr=.12,I8=(mo+Gn)/2,zo={x:-1.3,y:1.42,w:.42,h:.52,z:Sn,cell:.026},It={x0:-1.85,x1:-.75,top:.98,z0:Sn-.3,z1:Sn-.02},pa={x0:-1.44,x1:-1.16,y0:It.top-.002,y1:It.top+.018},Zr={cx:-1.3,cz:Sn-.165,w:.2,d:.255,y:It.top+.0012},or={x:-1.03,z:Sn-.14,r:.042,h:.075},qo={x:-.86,z:Sn-.12,h:.085,r:.019};qo.flame=[qo.x,It.top+.012+qo.h+.028,qo.z];var Dh={a:[or.x-.004,It.top+.03,or.z+.004],b:[or.x-.13,It.top+.34,or.z-.12]},tn=[-1.5,2.42,44.66],En=[-1.78,1.95,en+.09],va={x:-1.32,z:44.08,y:.64,heading:.32},ab={window:{eye:[-1.3,1.33,42.8],target:[zo.x,1.37,Sn],fov:54},paper:{eye:[-1.3,1.4,43.23],target:[Zr.cx,It.top,Zr.cz+.01],fov:40},front:{eye:[1.6,1.62,43],target:[-.9,1.35,43],fov:55},bay:{eye:[4.2,2.1,44.6],target:[-1,1.9,44.5],fov:55}},pr={z0:(en+Sn)/2+.03,z1:(en+Sn)/2+.56,y0:.98,y1:1.78,x:mo+.03,cell:.047};ab.peek={eye:[-1.2,1.42,42.95],target:[Ya.PLAY.stoolX-Ya.OFF[0],.85,Ya.PLAY.keyFront+.2],fov:30};var Zi={ink:null,inkDirty:!1,fold:0,slide:0,shown:!0,active:!1};function nb(){return`
	// a quatrefoil hole in the brass (g: metres across the window from its centre)
	float grilleHole(vec2 g) {
		vec2 q = fract(g / ${st(zo.cell)} + 0.5) - 0.5;
		float d = min(min(length(q - vec2(0.17, 0.0)), length(q + vec2(0.17, 0.0))),
		              min(length(q - vec2(0.0, 0.17)), length(q + vec2(0.0, 0.17))));
		d = min(d, length(q) - 0.04);
		return 1.0 - smoothstep(0.15, 0.19, d);
	}
	// how much of the lamp's light reaches p (on the penitent's side) through the window
	float throughGrille(vec3 p, float soft) {
		vec3 d = p - ${Na(tn)};
		if (d.z > -0.001) return 0.0;
		float t = (${st(zo.z)} - ${st(tn[2])}) / d.z;
		vec2 g = (${Na(tn)} + d * t).xy - vec2(${st(zo.x)}, ${st(zo.y)});
		float inWin = (1.0 - smoothstep(${st(zo.w/2-.01)}, ${st(zo.w/2)} + soft, abs(g.x))) *
		              (1.0 - smoothstep(${st(zo.h/2-.01)}, ${st(zo.h/2)} + soft, abs(g.y)));
		// the lamp is not a point: the pattern blurs the further it falls
		// from the brass
		float pen = 0.045 * abs(p.z - ${st(zo.z)}) / abs(${st(zo.z)} - ${st(tn[2])}) / ${st(zo.cell)};
		vec2 qc = fract(g / ${st(zo.cell)} + 0.5) - 0.5;
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
		vec3 c = ${Na(qo.flame)};
		vec3 d = c - p;
		float s = 1.0;
		// the pot: a short upright cylinder
		vec2 a = vec2(${st(or.x)}, ${st(or.z)}) - p.xz;
		vec2 dd = d.xz;
		float t = clamp(dot(a, dd) / max(dot(dd, dd), 1e-5), 0.0, 1.0);
		float r = length(p.xz + dd * t - vec2(${st(or.x)}, ${st(or.z)}));
		float y = p.y + d.y * t;
		s *= mix(1.0, 0.25, (1.0 - smoothstep(${st(or.r*.7)}, ${st(or.r*1.6)}, r)) * (1.0 - smoothstep(${st(It.top+or.h*.8)}, ${st(It.top+or.h*1.3)}, y)));
		// the quill: a thin capsule
		vec3 qa = ${Na(Dh.a)}, qb = ${Na(Dh.b)};
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
		bool inB1 = p.z < ${st(Sn)} && p.z > ${st(en-.04)} && p.x < ${st(mo+.02)};
		bool inPriest = p.z >= ${st(Sn)} && p.z < ${st(ma)} && p.x < ${st(mo)};
		bool inB2 = p.z >= ${st(ma)} && p.z < ${st(Lr+.04)} && p.x < ${st(mo)};
		// how open to the hall it is
		float open = 1.0;
		if (inB1) open = mix(0.7, 1.1, smoothstep(${st(Gn)}, ${st(mo)}, p.x));
		if (inPriest) open = 0.16;
		if (inB2) open = 0.10;
		// deeper into the bay, a little less of the hall's light
		open *= mix(0.62, 1.0, smoothstep(${st(Go.x0)}, 0.3, p.x));
		// the stair hall's candlelight (it stands there now: see stairhall.js)
		vec3 rs;
		vec3 col = roomLight(p + ${Na(Ya.OFF)}, N, V, gloss, rs) * 1.25 * open;
		spec += rs * open;
		// the lamp, warm, behind the brass
		vec3 Ld = ${Na(tn)} - p;
		float dl = length(Ld);
		vec3 L = Ld / dl;
		float T = inPriest ? 1.0 : (inB1 ? throughGrille(p, 0.0) : 0.0);
		vec3 lampCol = vec3(1.0, 0.70, 0.40) * mix(3.2, 1.0, night);
		vec3 lamp = lampCol * T * max(dot(N, L), 0.0) / (1.0 + dl * dl * 1.6);
		col += lamp;
		spec += lampCol * T * pow(max(dot(N, normalize(L + V)), 0.0), mix(8.0, 60.0, gloss)) * gloss / (1.0 + dl * dl * 1.6);
		// the little lamp in the open booth
		if (inB1) {
			vec3 Sd = ${Na(En)} - p;
			float ds = length(Sd);
			vec3 Ls = Sd / ds;
			vec3 sc = vec3(1.0, 0.72, 0.42) * mix(1.5, 0.35, night);
			col += sc * (max(dot(N, Ls), 0.0) * 0.8 + 0.2) / (0.15 + ds * ds * 1.6);
			spec += sc * pow(max(dot(N, normalize(Ls + V)), 0.0), mix(8.0, 60.0, gloss)) * gloss * 0.6 / (0.15 + ds * ds * 1.6);
		}
		// the candle
		if (night > 0.01) {
			vec3 Cd = ${Na(qo.flame)} - p;
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
	}`}var Fn={WOOD:0,CARVED:1,VELVET:2,CUSHION:3,BRASS:4,INKGLASS:5,QUILL:6,LAMPGLASS:7,DARKWOOD:8};function ib(){let e=[],t=[],o=[],n=[],r=[],a=(f,l)=>[f[0]-l[0],f[1]-l[1],f[2]-l[2]],i=(f,l)=>[f[1]*l[2]-f[2]*l[1],f[2]*l[0]-f[0]*l[2],f[0]*l[1]-f[1]*l[0]],s=f=>{let l=Math.hypot(f[0],f[1],f[2])||1;return[f[0]/l,f[1]/l,f[2]/l]},c={pos:e,nrm:t,kind:o,uv:n,idx:r,norm:s,cross:i,sub:a};return c.v=(f,l,u,h)=>(e.push(f[0],f[1],f[2]),t.push(l[0],l[1],l[2]),o.push(u),n.push(h?h[0]:0,h?h[1]:0),e.length/3-1),c.quad=(f,l,u,h,d,v)=>{let p=s(i(a(l,f),a(h,f)));v=v||[[0,0],[1,0],[1,1],[0,1]];let m=c.v(f,p,d,v[0]),g=c.v(l,p,d,v[1]),y=c.v(u,p,d,v[2]),b=c.v(h,p,d,v[3]);r.push(m,g,y,m,y,b)},c.box=(f,l,u,h,d,v,p)=>{let m=(g,y,b,k,E,L,N,W)=>c.quad(g,y,b,k,p,[[E,N],[L,N],[L,W],[E,W]]);m([h,l,u],[h,l,v],[h,d,v],[h,d,u],u,v,l,d),m([f,l,v],[f,l,u],[f,d,u],[f,d,v],v,u,l,d),m([f,d,u],[h,d,u],[h,d,v],[f,d,v],f,h,u,v),m([f,l,v],[h,l,v],[h,l,u],[f,l,u],f,h,v,u),m([f,l,v],[h,l,v],[h,d,v],[f,d,v],f,h,l,d),m([h,l,u],[f,l,u],[f,d,u],[h,d,u],h,f,l,d)},c.tube=(f,l,u,h)=>{h=h||6;let d=e.length/3;for(let v=0;v<f.length;v++){let p=f[Math.max(0,v-1)],m=f[Math.min(f.length-1,v+1)],g=s(a(m,p)),y=Math.abs(g[1])>.9?[1,0,0]:[0,1,0],b=s(i(g,y)),k=i(b,g),E=typeof l=="function"?l(v/(f.length-1)):l;for(let L=0;L<=h;L++){let N=L/h*Ji*2,W=Math.cos(N),O=Math.sin(N),te=[b[0]*W+k[0]*O,b[1]*W+k[1]*O,b[2]*W+k[2]*O];c.v([f[v][0]+te[0]*E,f[v][1]+te[1]*E,f[v][2]+te[2]*E],te,u,[v/(f.length-1),L/h])}}for(let v=0;v<f.length-1;v++)for(let p=0;p<h;p++){let m=d+v*(h+1)+p,g=m+h+1;r.push(m,m+1,g,m+1,g+1,g)}},c.lathe=(f,l,u,h,d)=>{d=d||20;let v=e.length/3;for(let p=0;p<u.length;p++){let[m,g]=u[p],y=u[Math.max(0,p-1)],b=u[Math.min(u.length-1,p+1)],k=b[0]-y[0],E=b[1]-y[1];for(let L=0;L<=d;L++){let N=L/d*Ji*2,W=Math.cos(N),O=Math.sin(N),te=s([E*W,-k,E*O]);c.v([f+W*m,g,l+O*m],te,h,[L/d,p/(u.length-1)])}}for(let p=0;p<u.length-1;p++)for(let m=0;m<d;m++){let g=v+p*(d+1)+m,y=g+d+1;r.push(g,y,g+1,g+1,y,y+1)}},c.spire=(f,l,u,h,d,v)=>{let p=[[-h,-h],[h,-h],[h,h],[-h,h]];for(let m=0;m<4;m++){let g=p[m],y=p[(m+1)%4],b=[f+g[0],u,l+g[1]],k=[f+y[0],u,l+y[1]],E=[f,d,l],L=s(i(a(E,b),a(k,b))),N=c.v(b,L,v,[0,0]),W=c.v(k,L,v,[1,0]),O=c.v(E,L,v,[.5,1]);r.push(N,O,W)}},c.orient=()=>{for(let f=0;f<r.length;f+=3){let[l,u,h]=[r[f],r[f+1],r[f+2]],d=m=>[e[m*3],e[m*3+1],e[m*3+2]],v=i(a(d(u),d(l)),a(d(h),d(l))),p=[0,1,2].map(m=>t[l*3+m]+t[u*3+m]+t[h*3+m]);v[0]*p[0]+v[1]*p[1]+v[2]*p[2]<0&&(r[f+1]=h,r[f+2]=u)}return c},c}function Gh(e,t,o,n){if(e<=t)return o;let r=e-t;return r>=n?0:Math.max(0,Math.sqrt(n*n-r*r)-(n-o))}var Ko={ys:1.78,a:.56,r:.78};Ko.apex=Ko.ys+Math.sqrt(Ko.r*Ko.r-(Ko.r-Ko.a)*(Ko.r-Ko.a));function F8(){let e=ib(),t=Fn.WOOD,o=Fn.CARVED,n=Fn.DARKWOOD,r=.06;e.box(Gn,0,en,mo+.08,Qr,Lr,n),e.box(Gn,Vn-.06,en-.04,mo+.1,Vn,Lr+.04,t),e.box(mo,Vn-.2,en-.06,mo+.12,Vn-.06,Lr+.06,t),e.box(mo+.02,Vn,en-.08,mo+.14,Vn+.07,Lr+.08,n),e.box(Gn,Qr,en,Gn+.04,Vn-.06,Lr,t);for(let[l,u,h]of[[en-r,en,-1],[Lr,Lr+r,1]]){e.box(Gn,0,l,mo+.08,Vn,u,t);let d=h<0?l-.018:u;e.box(Gn+.18,.45,Math.min(d,d+.018),mo-.12,2.35,Math.max(d,d+.018),n),e.box(Gn+.26,.55,Math.min(d,d+.03*h),mo-.2,2.25,Math.max(d,d+.03*h),t)}{let l=Sn-.02,u=Sn+.02,h=zo.x-zo.w/2,d=zo.x+zo.w/2,v=zo.y-zo.h/2,p=zo.y+zo.h/2;e.box(Gn,Qr,l,mo,pa.y0,u,t),e.box(Gn,pa.y0,l,pa.x0,pa.y1,u,t),e.box(pa.x1,pa.y0,l,mo,pa.y1,u,t),e.box(Gn,pa.y1,l,mo,v,u,t),e.box(Gn,v,l,h,p,u,t),e.box(d,v,l,mo,p,u,t),e.box(Gn,p,l,mo,Vn-.06,u,t);let m=.05,g=l-.025;e.box(h-m,v-m,g,d+m,v,l,n),e.box(h-m,p,g,d+m,p+m,l,n),e.box(h-m,v,g,h,p,l,n),e.box(d,v,g,d+m,p,l,n),e.box(h-m-.02,p+m,g-.015,d+m+.02,p+m+.03,l,t),e.box(pa.x0-.01,pa.y1,l-.006,pa.x1+.01,pa.y1+.008,l,Fn.BRASS)}{let l=pr,u=mo+.008,h=mo+.052;e.box(u,l.y0,l.z0-.035,h,l.y1,l.z0,n),e.box(u,l.y0,l.z0,h,l.y0+.04,l.z1,n),e.box(u,l.y1-.04,l.z0,h,l.y1,l.z1,n),e.box(u+.008,Qr,l.z0-.035,h-.008,l.y0,l.z1,t),e.box(h-.008,Qr+.12,l.z0+.03,h,l.y0-.08,l.z1-.06,n),e.box(u-.004,l.y0-.012,l.z0-.045,h+.012,l.y0,l.z1,Fn.BRASS)}e.box(Gn,Qr,ma-.02,mo,Vn-.06,ma+.02,t),e.box(It.x0,It.top-.035,It.z0,It.x1,It.top,It.z1,t),e.tube([[It.x0,It.top-.018,It.z0],[It.x1,It.top-.018,It.z0]],.02,t,8);for(let l of[It.x0+.1,It.x1-.1]){let u=[];for(let h=0;h<=8;h++){let d=h/8;u.push([l,It.top-.04-.22*d,It.z1-.02-.22*Math.cos(d*Ji/2)])}e.tube(u,.018,n,6)}e.box(Gn+.06,.12,en,mo-.1,.44,en+.42,n),e.box(Gn+.08,.44,en+.01,mo-.12,.52,en+.41,Fn.CUSHION),e.box(Gn+.06,.12,Lr-.42,mo-.1,.44,Lr,n),e.box(En[0]-.05,En[1]-.16,en,En[0]+.05,En[1]-.02,en+.012,Fn.BRASS),e.tube([[En[0],En[1]-.09,en+.012],[En[0],En[1]-.09,En[2]-.01],[En[0],En[1]-.05,En[2]]],.006,Fn.BRASS,6),e.lathe(En[0],En[2],[[0,En[1]-.05],[.028,En[1]-.035],[.034,En[1]+.01],[.024,En[1]+.06],[.026,En[1]+.065]],Fn.LAMPGLASS,16),e.box(va.x-.22,.12,va.z-.24,va.x+.22,va.y-.05,va.z+.16,n),e.box(va.x-.24,va.y-.05,va.z-.26,va.x+.24,va.y,va.z+.18,Fn.CUSHION),e.tube([[tn[0],Vn-.06,tn[2]],[tn[0],tn[1]+.07,tn[2]]],.005,Fn.BRASS,5),e.lathe(tn[0],tn[2],[[0,tn[1]+.09],[.03,tn[1]+.08],[.02,tn[1]+.06]],Fn.BRASS,12),e.lathe(tn[0],tn[2],[[0,tn[1]-.06],[.035,tn[1]-.04],[.045,tn[1]],[.035,tn[1]+.05],[.018,tn[1]+.07]],Fn.LAMPGLASS,16);let a=mo,i=mo+r;function s(l,u,h){let d=(l+u)/2,v=40,p=[];for(let g=0;g<=v;g++)p.push(Qr+(Vn-.2-Qr)*g/v);let m=[];p.forEach(g=>m.push(g));for(let g=1;g<24;g++)m.push(Ko.ys+(Ko.apex-Ko.ys)*g/24);m.sort((g,y)=>g-y);for(let g=0;g<m.length-1;g++){let y=m[g],b=m[g+1];if(b-y<1e-4)continue;let k=h?Gh(y,Ko.ys,Ko.a,Ko.r):0,E=h?Gh(b,Ko.ys,Ko.a,Ko.r):0,L=(N,W)=>[N,W];e.quad([i,y,d-k],[i,y,l],[i,b,l],[i,b,d-E],t,[L(d-k,y),L(l,y),L(l,b),L(d-E,b)]),e.quad([i,y,u],[i,y,d+k],[i,b,d+E],[i,b,u],t,[L(u,y),L(d+k,y),L(d+E,b),L(u,b)]),(k>0||E>0)&&(e.quad([a,y,d-k],[i,y,d-k],[i,b,d-E],[a,b,d-E],n),e.quad([i,y,d+k],[a,y,d+k],[a,b,d+E],[i,b,d+E],n),e.quad([a,y,l],[a,y,d-k],[a,b,d-E],[a,b,l],t),e.quad([a,y,d+k],[a,y,u],[a,b,u],[a,b,d+E],t))}if(e.box(a,Vn-.2,l,i,Vn-.06,u,t),e.box(i,Vn-.42,l+.05,i+.012,Vn-.24,u-.05,o),h){let g=[];for(let y=0;y<=30;y++){let b=y/30,k=b<.5?Qr+(Ko.apex-Qr)*(b*2):Ko.apex-(Ko.apex-Qr)*((b-.5)*2),E=b<.5?-1:1;g.push([i+.01,Math.min(k,Ko.apex-.002),d+E*(Gh(k,Ko.ys,Ko.a,Ko.r)+.03)])}e.tube(g,.022,n,6)}}s(en,Sn,!0),s(ma,Lr,!0);{let l=Sn,u=ma,h=(l+u)/2;e.box(a,Qr,l,i,Vn-.06,u,t);let d={ys:1.85,a:.55,r:.8},v=[];for(let p=0;p<=40;p++){let m=p/40,g=d.ys+Math.sqrt(d.r*d.r-(d.r-d.a)*(d.r-d.a)),y=m<.5?.35+(g-.35)*(m*2):g-(g-.35)*((m-.5)*2),b=m<.5?-1:1;v.push([i+.012,Math.min(y,g-.002),h+b*Gh(y,d.ys,d.a,d.r)])}v.push(v[0]),e.tube(v,.02,n,6),e.box(i,.95,h-.22,i+.015,1.3,h+.22,o),e.box(i,.35,h-.42,i+.01,.75,h+.42,n),e.tube([[i+.03,1.12,u-.13],[i+.06,1.12,u-.13],[i+.06,1.12,u-.2]],.009,Fn.BRASS,6)}[en-.02,Sn,ma,Lr+.02].forEach((l,u)=>{let h=u===1||u===2,d=.075,v=Vn+(h?.62:.4);e.box(mo+.06,0,l-d,mo+.06+2*d,v,l+d,t),e.box(mo+.04,v-.04,l-d-.02,mo+.08+2*d,v,l+d+.02,n);let p=mo+.06+d,m=h?.62:.5;e.spire(p,l,v,d*.95,v+m,t);for(let g=1;g<=3;g++){let y=v+m*g/4.2,b=d*.95*(1-g/4.2)+.02;for(let[k,E]of[[1,0],[-1,0],[0,1],[0,-1]])e.tube([[p+k*(b-.02),y-.02,l+E*(b-.02)],[p+k*(b+.015),y+.03,l+E*(b+.015)]],.008,n,4)}e.lathe(p,l,[[0,v+m-.02],[.03,v+m+.03],[.022,v+m+.07],[0,v+m+.1]],t,10)});let f=(l,u,h)=>{let d=(l+u)/2,v=mo+.075,p=Vn+.07,m=p+h,g=[1,0,0],y=e.v([v,p,l],g,o,[l,p]),b=e.v([v,p,u],g,o,[u,p]),k=e.v([v,m,d],g,o,[d,m]);e.idx.push(y,b,k);let E=e.v([v-.04,p,l],[-1,0,0],t),L=e.v([v-.04,p,u],[-1,0,0],t),N=e.v([v-.04,m,d],[-1,0,0],t);e.idx.push(E,N,L);let W=[],O=[];for(let q=0;q<=10;q++){let Y=q/10;W.push([v+.02,p+h*Y,l+(d-l)*Y]),O.push([v+.02,p+h*Y,u+(d-u)*Y])}e.tube(W,.022,n,6),e.tube(O,.022,n,6);for(let q=2;q<=8;q+=2)for(let Y of[W[q],O[q]])e.tube([Y,[Y[0]+.01,Y[1]+.06,Y[2]+(Y===W[q]?-.02:.02)]],.01,n,4);e.lathe(v,d,[[0,m],[.035,m+.06],[.022,m+.12],[0,m+.16]].map(([q,Y])=>[q,Y]),t,10);let te=Math.min(.17,h*.32),D=p+h*.38,re=[];for(let q=0;q<=24;q++){let Y=q/24*Ji*2;re.push([v+.012,D+Math.sin(Y)*te,d+Math.cos(Y)*te])}e.tube(re,.012,n,5)};f(en-.02,Sn,.52),f(Sn,ma,.82),f(ma,Lr+.02,.52),e.lathe(or.x,or.z,[[0,It.top],[.036,It.top+.001],[or.r,It.top+.012],[or.r*1.02,It.top+.035],[.036,It.top+.052],[.02,It.top+.062],[.016,It.top+.068]],Fn.INKGLASS,24),e.lathe(or.x,or.z,[[.016,It.top+.064],[.021,It.top+.066],[.022,It.top+.075],[.016,It.top+.076],[0,It.top+.072]],Fn.BRASS,20);{let l=Dh.a,u=Dh.b,h=26,d=y=>{let b=Math.sin(y*Ji)*.025;return[l[0]+(u[0]-l[0])*y+b*.6,l[1]+(u[1]-l[1])*y+b*.4,l[2]+(u[2]-l[2])*y+b]},v=[];for(let y=0;y<=h;y++)v.push(d(y/h));e.tube(v,y=>.0028*(1-.7*y)+6e-4,Fn.QUILL,5);let p=e.norm(e.sub(u,l)),m=e.norm(e.cross(p,[.2,1,.1])),g=e.cross(m,p);for(let y of[-1,1]){let b=e.pos.length/3;for(let k=0;k<=h;k++){let E=k/h,L=d(E),N=E<.28?0:(y>0?.03:.02)*Math.sin(Ji*Math.pow((E-.28)/.72,.75)),W=N*.25,O=[L[0]+m[0]*y*N-g[0]*W,L[1]+m[1]*y*N-g[1]*W,L[2]+m[2]*y*N-g[2]*W];e.v(L,g,Fn.QUILL,[E,0]),e.v(O,g,Fn.QUILL,[E,y])}for(let k=0;k<h;k++){let E=b+k*2;e.idx.push(E,E+2,E+1,E+1,E+2,E+3)}}}return e.orient()}function G8(e,t){let n=Go.top,r=Go.x0;e(r-.35,0,Go.z0-.35,r,n+.35,Go.z1+.35),e(r,0,Go.z0-.35,-.35,n,Go.z0),e(r,0,Go.z1,-.35,n,Go.z1+.35),e(r,n,Go.z0,-.35,n+.35,Go.z1),e(.35,0,Go.z0-.42,.35+.16,n,Go.z0),e(.35,0,Go.z1,.35+.16,n,Go.z1+.42),e(.35,n,Go.z0-.5,.35+.18,n+.42,Go.z1+.5),e(.35,n+.42,Go.z0-.6,.35+.26,n+.52,Go.z1+.6),e(.35,0,Go.z0-.5,.35+.22,.42,Go.z0),e(.35,0,Go.z1,.35+.22,.42,Go.z1+.5),e(-.35-.01,0,Go.z0,.35+.12,.02,Go.z1),t(r,Go.z0,-.35,Go.z1)}Jr.exports=e=>{let t=Ni(),o=ob.GLSL,n=F8(),r=`
	precision highp float;
	${o}
	uniform float time;
	${t.lanternGLSL()}
	${Ya.roomGLSL()}
	${nb()}
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
	}`,i=e({vert:a,frag:`${r}
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
		}`,attributes:{position:n.pos,normal:n.nrm,kind:n.kind,uv:n.uv},elements:n.idx});function s(Ae,he,Te,dt){let qt=[],He=[],pt=[],St=[],to=[],Xe=mo-.02,ht=Ko.apex+.08,vt=Qr+.015;for(let Zt=0;Zt<=40;Zt++){let po=Zt/40,Lt=ht+(vt-ht)*po;for(let mt=0;mt<=90;mt++){let me=mt/90,tt=Te?.2+.13*po*po:he-Ae,zt=Ae+me*tt,ct=Te?.05+.02*po:.035+.01*Math.sin(me*7),Ve=me*dt*Ji*2+Math.sin(po*2+me*5)*.6,go=Xe-ct*(.5+.5*Math.sin(Ve))-(Te?.02*po:0),oo=[1,0,-(-ct*.5*Math.cos(Ve)*dt*Ji*2/tt)],Wt=Math.hypot(oo[0],oo[1],oo[2]);qt.push(go,Lt,zt),He.push(oo[0]/Wt,0,oo[2]/Wt),pt.push(2),St.push(Math.sin(Ve),po)}}for(let Zt=0;Zt<40;Zt++)for(let po=0;po<90;po++){let Lt=Zt*91+po,mt=Lt+90+1;to.push(Lt,mt,Lt+1,Lt+1,mt,mt+1)}for(let Zt=0;Zt<to.length;Zt+=3){let[po,Lt,mt]=[to[Zt],to[Zt+1],to[Zt+2]],me=Ve=>[qt[Ve*3],qt[Ve*3+1],qt[Ve*3+2]],tt=[0,1,2].map(Ve=>me(Lt)[Ve]-me(po)[Ve]),zt=[0,1,2].map(Ve=>me(mt)[Ve]-me(po)[Ve]);tt[1]*zt[2]-tt[2]*zt[1]<0&&(to[Zt+1]=mt,to[Zt+2]=Lt)}return{pos:qt,nrm:He,kind:pt,uv:St,idx:to}}let c=s(en+.02,en+.4,!0,6),f=s(ma+.04,Lr-.04,!1,9),l={pos:c.pos.concat(f.pos),nrm:c.nrm.concat(f.nrm),kind:c.kind.concat(f.kind),uv:c.uv.concat(f.uv),idx:c.idx.concat(f.idx.map(Ae=>Ae+c.pos.length/3))},u=e({vert:`
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
			vec3 p = vec3(${st(zo.x)} + corner.x * ${st(zo.w/2)}, ${st(zo.y)} + corner.y * ${st(zo.h/2)}, ${st(zo.z)});
			v_pos = p; v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`${r}
		varying vec3 v_pos, v_eye;
		void main() {
			vec2 g = v_pos.xy - vec2(${st(zo.x)}, ${st(zo.y)});
			float hole = grilleHole(g);
			if (hole > 0.5) discard;
			vec3 N = vec3(0.0, 0.0, v_eye.z < ${st(zo.z)} ? -1.0 : 1.0);
			vec3 V = normalize(v_eye - v_pos);
			vec3 spec;
			vec3 light = boothLight(v_pos + N * 0.01, N, V, 0.8, spec);
			// dark old bronze, its edges catching the lamp behind it
			vec3 base = vec3(0.16, 0.10, 0.05);
			vec3 col = base * light + spec * 0.6;
			float edge = smoothstep(0.25, 0.5, hole);
			col += vec3(1.0, 0.66, 0.34) * edge * mix(0.35, 0.22, night);
			gl_FragColor = vec4(col, 1.0);
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,cull:{enable:!1}}),d=e({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec2 corner;
		varying vec3 v_pos, v_eye;
		void main() {
			vec3 p = vec3(${st(pr.x)}, ${st((pr.y0+pr.y1)/2)} + corner.y * ${st((pr.y1-pr.y0)/2-.04)}, ${st((pr.z0+pr.z1)/2)} + corner.x * ${st((pr.z1-pr.z0)/2)});
			v_pos = p; v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`${r}
		varying vec3 v_pos, v_eye;
		void main() {
			vec2 g = (v_pos.zy - vec2(${st((pr.z0+pr.z1)/2)}, ${st((pr.y0+pr.y1)/2)})) * ${st(zo.cell/pr.cell)};
			float hole = grilleHole(g);
			if (hole > 0.5) discard;
			vec3 N = vec3(v_eye.x < ${st(pr.x)} ? -1.0 : 1.0, 0.0, 0.0);
			vec3 V = normalize(v_eye - v_pos);
			vec3 spec;
			vec3 light = boothLight(v_pos + N * 0.01, N, V, 0.8, spec);
			vec3 base = vec3(0.16, 0.10, 0.05);
			vec3 col = base * light + spec * 0.6;
			// the rims of the holes catch the candles in the hall beyond
			float edge = smoothstep(0.25, 0.5, hole);
			col += vec3(1.0, 0.62, 0.30) * edge * (N.x < 0.0 ? 0.30 : 0.10);
			gl_FragColor = vec4(col, 1.0);
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,cull:{enable:!1}}),v=e({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec2 corner;
		varying vec2 v_c;
		void main() {
			vec3 p = vec3(${st(zo.x)} + corner.x * 0.75, ${st(zo.y)} + corner.y * 0.9, ${st(ma-.03)});
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),p=14,m=[];for(let Ae=0;Ae<p;Ae++)[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(he=>m.push(he[0],he[1],(Ae+.5)/p));let g=e({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec3 c;
		varying vec3 v_pos;
		void main() {
			// slices across the booth, from the window back towards the bench
			vec3 p = vec3(${st(I8)} + c.x * ${st((mo-Gn)/2-.02)}, 0.9 + (c.y + 1.0) * 0.8, ${st(Sn-.03)} - c.z * 1.25);
			v_pos = p;
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`
		precision highp float;
		uniform float night, time;
		${nb().split("// the candle's light is hidden")[0]}
		varying vec3 v_pos;
		void main() {
			float T = throughGrille(v_pos, 0.0);
			float d = length(v_pos - ${Na(tn)});
			// dust drifting in the beam
			float dust = 0.65 + 0.35 * sin(v_pos.x * 23.0 + time * 0.3) * sin(v_pos.y * 17.0 - time * 0.21) * sin(v_pos.z * 19.0 + time * 0.17);
			vec3 col = vec3(1.0, 0.68, 0.36) * T * dust * 0.035 / (0.4 + d * d * 0.5) * mix(1.0, 0.7, night);
			gl_FragColor = vec4(col, 1.0);
		}`.replace("float grilleHole","float grilleHole"),attributes:{c:{buffer:e.buffer(m),size:3}},count:m.length/3,depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}}),y=(()=>{if(typeof document=="undefined")return null;let Ae=document.createElement("canvas");Ae.width=512,Ae.height=652;let he=Ae.getContext("2d");he.fillStyle="#cdb38a",he.fillRect(0,0,Ae.width,Ae.height);let Te=7,dt=()=>(Te=Te*1664525+1013904223>>>0,Te/4294967296);for(let He=0;He<2400;He++){he.fillStyle=`rgba(${dt()<.5?"90,62,30":"245,230,200"},${.03+dt()*.05})`;let pt=dt()*Ae.width,St=dt()*Ae.height;he.fillRect(pt,St,1+dt()*14,1)}for(let He=0;He<26;He++){let pt=dt()*Ae.width,St=dt()*Ae.height,to=20+dt()*90,ao=he.createRadialGradient(pt,St,0,pt,St,to);ao.addColorStop(0,`rgba(120,80,35,${.04+dt()*.06})`),ao.addColorStop(1,"rgba(120,80,35,0)"),he.fillStyle=ao,he.fillRect(pt-to,St-to,to*2,to*2)}let qt=he.createRadialGradient(Ae.width/2,Ae.height/2,Ae.width*.3,Ae.width/2,Ae.height/2,Ae.height*.72);return qt.addColorStop(0,"rgba(110,70,30,0)"),qt.addColorStop(1,"rgba(110,70,30,0.38)"),he.fillStyle=qt,he.fillRect(0,0,Ae.width,Ae.height),Ae})(),b=y?e.texture({data:y,min:"linear",mag:"linear",flipY:!1}):e.texture(),k=e.texture({shape:[8,8],data:new Uint8Array(8*8*4)}),E=[18,24],L=[],N=[];for(let Ae=0;Ae<=E[1];Ae++)for(let he=0;he<=E[0];he++)L.push(he/E[0],Ae/E[1]);for(let Ae=0;Ae<E[1];Ae++)for(let he=0;he<E[0];he++){let Te=Ae*(E[0]+1)+he,dt=Te+E[0]+1;N.push(Te,Te+1,dt,Te+1,dt+1,dt)}let W=e({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale, fold, slide;
		attribute vec2 st;
		varying vec3 v_pos, v_n, v_eye;
		varying vec2 v_st;
		void main() {
			// s across (texture left = +x), t from the near edge (0) to the far (1)
			float s = st.x, t = st.y;
			float x = ${st(Zr.cx+Zr.w/2)} - s * ${st(Zr.w)};
			float zNear = ${st(Zr.cz-Zr.d/2)};
			vec3 p = vec3(x, ${st(Zr.y)}, zNear + t * ${st(Zr.d)});
			vec3 n = vec3(0.0, 1.0, 0.0);
			// a slight cockle
			p.y += 0.0012 * sin(s * 7.0 + t * 3.0) * sin(t * 5.0);
			// the near half folds up and over onto the far half
			if (t < 0.5) {
				float a = fold * 3.14159 * 0.985;
				float dd = (0.5 - t) * ${st(Zr.d)};
				float zf = zNear + 0.5 * ${st(Zr.d)};
				p.z = zf - dd * cos(a);
				p.y = ${st(Zr.y)} + dd * sin(a) + 0.0016 * fold;
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
			if (v_pos.z > ${st(Sn+.015)}) discard;
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
		}`,attributes:{st:{buffer:e.buffer(L),size:2}},elements:N,uniforms:{fold:()=>Zi.fold,slide:()=>Zi.slide,paperTex:b,inkTex:k},cull:{enable:!1}}),O=ib();O.lathe(qo.x,qo.z,[[0,It.top],[.048,It.top+.002],[.052,It.top+.012],[.046,It.top+.014],[.022,It.top+.012],[0,It.top+.012]],Fn.BRASS,24),O.lathe(qo.x,qo.z,[[0,It.top+.012],[qo.r,It.top+.012],[qo.r*1.02,It.top+.012+qo.h*.6],[qo.r,It.top+.012+qo.h],[qo.r*.75,It.top+.012+qo.h-.004],[0,It.top+.012+qo.h-.008]],9,20),O.tube([[qo.x,It.top+.012+qo.h-.008,qo.z],[qo.x+.001,It.top+.012+qo.h+.012,qo.z]],.0012,8,4),O.orient();let te=e({vert:a,frag:`${r}
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
				float up = smoothstep(${st(It.top+qo.h*.4)}, ${st(It.top+.012+qo.h)}, v_pos.y);
				col += vec3(1.0, 0.55, 0.22) * up * 0.22 * candleFlicker();
			}
			gl_FragColor = vec4(col * night, 1.0);
		}`,attributes:{position:O.pos,normal:O.nrm,kind:O.kind,uv:O.uv},elements:O.idx}),D=e({vert:`
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
			vec3 p = ${Na(qo.flame)} + right * corner.x * size.x + vec3(0.0, 1.0, 0.0) * corner.y * size.y;
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{halo:e.prop("halo")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),re=[0,0],q=e({uniforms:{view:e.prop("view")}}),Y=new Float32Array(16);function be(Ae){O8.translate(Y,Ae.view,Ya.OFF),q({view:Y},()=>qe(Ae))}function qe(Ae){let he=Ae&&Ae.reflected;if(i(),u(),h(),d(),Zi.ink&&Zi.inkDirty){let Te=Zi.ink;re[0]!==Te.width||re[1]!==Te.height?(k({data:Te,min:"linear",mag:"linear",flipY:!1}),re=[Te.width,Te.height]):k.subimage(Te),Zi.inkDirty=!1}Zi.shown&&W(),ob.night>.01&&(te(),he||(D({halo:1}),D({halo:0}))),he||(v(),g())}return be};Jr.exports.addBay=G8;Jr.exports.BAY=Go;Jr.exports.OFF=Ya.OFF;Jr.exports.STATE=Zi;var rb=e=>[e[0]+Ya.OFF[0],e[1]+Ya.OFF[1],e[2]+Ya.OFF[2]];Jr.exports.SHOTS=Object.fromEntries(Object.entries(ab).map(([e,t])=>[e,Object.assign({},t,{eye:rb(t.eye),target:rb(t.target)})]));Jr.exports.SEAT=va;Jr.exports.LAMP=tn;Jr.exports.SCONCE=En;Jr.exports.GRILLE=zo;Jr.exports.PAPER=Zr;Jr.exports.ZONE={FRONT:mo,BACK:Gn,ZA:en,ZB:Sn,ZC:ma,ZD:Lr}});var Id=de((lL,xb)=>{"use strict";var fc=Jn(),D8=ch(),hb="love-me-like-i-am-already-dead",$8=3621206063,q8=e=>{let t=2166136261;for(let o=0;o<e.length;o++)t^=e.charCodeAt(o),t=Math.imul(t,16777619)>>>0;return t>>>0},Fl=/[?&]redroom\b/.test(location.search),Ol=Fl||/[?&]studio\b/.test(location.search),sb=[.32,.02,.05],cb=[.3,.37],Il=e=>Math.max(0,Math.min(1,e)),Pl=e=>(e=Il(e),e*e*(3-2*e)),H8=e=>(e=Il(e),e*e*e),hc=(e,t,o)=>e+(t-e)*o,lb=(e,t,o)=>[hc(e[0],t[0],o),hc(e[1],t[1],o),hc(e[2],t[2],o)],lc={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},U8=`
.cons-btn {
	display: inline-flex; align-items: center; gap: 10px;
	min-height: 40px; margin: 2px 0 14px; padding: 0 18px 0 14px;
	border: 1px solid rgba(190,40,60,.7); border-radius: 999px;
	background: rgba(120,10,25,.18); color: #f4ecdf;
	font: 500 12px/1.2 Georgia, serif; letter-spacing: .16em; text-transform: uppercase;
	cursor: pointer; pointer-events: auto;
	transition: background .35s ease, border-color .35s ease, box-shadow .35s ease;
}
.cons-btn:hover { background: rgba(150,15,35,.32); border-color: #d9475d; box-shadow: 0 0 26px rgba(200,30,60,.25); }
.cons-btn:focus-visible { outline: 2px solid #e9cf9a; outline-offset: 3px; }
.cons-btn svg { flex: none; }
.cons-ask {
	position: fixed; inset: 0; z-index: 420;
	display: flex; align-items: center; justify-content: center;
	background: rgba(6,3,4,.55); opacity: 0; transition: opacity .6s ease;
	font-family: 'Cormorant Garamond', Georgia, serif; color: #f4ecdf;
	backdrop-filter: blur(3px); -webkit-backdrop-filter: blur(3px);
}
.cons-ask.on { opacity: 1; }
.cons-card {
	position: relative; width: min(460px, 88vw); padding: 34px 32px 30px;
	background: rgba(24,10,12,.82); border: 1px solid rgba(190,40,60,.45); border-radius: 4px;
	box-shadow: 0 30px 80px rgba(0,0,0,.6); text-align: center;
}
.cons-kicker { display: block; font: 500 11px/1.4 Georgia, serif; letter-spacing: .26em; text-transform: uppercase; color: #d98a96; margin-bottom: 18px; }
.cons-q { font-size: 23px; line-height: 1.4; font-style: italic; margin: 0 0 22px; }
.cons-form { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; }
.cons-in {
	flex: 1 1 180px; min-width: 0; height: 42px; padding: 0 14px;
	background: rgba(0,0,0,.35); color: #f4ecdf; border: 1px solid rgba(244,236,223,.3); border-radius: 3px;
	font: 18px Georgia, serif; text-align: center;
}
.cons-in:focus { outline: none; border-color: #d9475d; }
.cons-go, .cons-flower {
	height: 42px; padding: 0 20px; border-radius: 999px; cursor: pointer;
	border: 1px solid rgba(190,40,60,.75); background: rgba(140,15,35,.35); color: #f4ecdf;
	font: 500 12px/1 Georgia, serif; letter-spacing: .18em; text-transform: uppercase;
}
.cons-go:hover, .cons-flower:hover { background: rgba(170,20,45,.55); }
.cons-flower { height: 48px; padding: 0 26px; display: inline-flex; align-items: center; gap: 10px; }
.cons-msg { min-height: 1.4em; margin: 16px 0 0; font-size: 17px; font-style: italic; color: #e9b8c0; opacity: 0; transition: opacity .5s ease; }
.cons-msg.on { opacity: 1; }
.cons-x {
	position: absolute; top: 8px; right: 10px; width: 34px; height: 34px;
	background: none; border: 0; color: rgba(244,236,223,.6); font-size: 22px; cursor: pointer;
}
.cons-x:hover { color: #f4ecdf; }
.cons-shake { animation: cons-shake .45s ease; }
@keyframes cons-shake { 20%, 60% { transform: translateX(-7px); } 40%, 80% { transform: translateX(7px); } }

/* in the room */
body.in-conservatory .tour,
body.in-conservatory #museum-mobile-controls,
body.in-conservatory .painting-plaque { display: none !important; }
.cons-ui { position: fixed; top: 16px; right: 16px; z-index: 410; display: flex; gap: 10px; opacity: 0; transition: opacity 1s ease; pointer-events: none; }
.cons-ui.on { opacity: 1; pointer-events: auto; }
.cons-ui button, .st-ui {
	height: 40px; min-width: 40px; padding: 0 14px; border-radius: 999px;
	border: 1px solid rgba(244,236,223,.4); background: rgba(12,10,8,.35); color: #f4ecdf;
	font: 500 11px/1 Georgia, serif; letter-spacing: .18em; text-transform: uppercase; cursor: pointer;
	backdrop-filter: blur(3px); -webkit-backdrop-filter: blur(3px);
}
.cons-ui .cons-sky { font-size: 18px; padding: 0; width: 40px; letter-spacing: 0; text-transform: none; }
.cons-name {
	position: fixed; left: 50%; top: 13vh; transform: translateX(-50%); z-index: 405;
	font: italic 400 clamp(20px, 3.2vw, 34px)/1.3 'Cormorant Garamond', Georgia, serif; color: #f4ecdf;
	text-shadow: 0 2px 24px rgba(0,0,0,.85); letter-spacing: .04em; text-align: center; white-space: nowrap;
	opacity: 0; transition: opacity 2.2s ease; pointer-events: none;
}
.cons-name.on { opacity: .92; }
.cons-note {
	position: fixed; left: 50%; bottom: 12vh; transform: translate(-50%, 10px); z-index: 410;
	width: min(440px, 86vw); padding: 22px 26px 24px; text-align: center;
	background: rgba(20,8,10,.72); border: 1px solid rgba(190,40,60,.4); border-radius: 4px;
	font-family: 'Cormorant Garamond', Georgia, serif; color: #f4ecdf;
	opacity: 0; transition: opacity 1.2s ease, transform 1.2s ease; pointer-events: none;
	backdrop-filter: blur(3px); -webkit-backdrop-filter: blur(3px);
}
.cons-note.on { opacity: 1; transform: translate(-50%, 0); pointer-events: auto; }
.cons-note p { margin: 0 0 16px; font-size: 20px; line-height: 1.4; font-style: italic; }
`,ub='<svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8.5c-2.2 0-3.6-1.6-3.6-3.4C8.4 3.6 10 2.5 12 3.6c2-1.1 3.6 0 3.6 1.5 0 1.8-1.4 3.4-3.6 3.4z"/><path d="M12 8.5V21"/><path d="M12 15c-2.5-.2-4-1.6-4.4-3.4 2.3.1 3.8 1.1 4.4 3.4z"/><path d="M12 13c1.8-.4 3-1.6 3.3-3 -1.7.1-2.9 1-3.3 3z"/></svg>',B8='<svg aria-hidden="true" width="16" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 21V9a6 6 0 0 1 12 0v12"/><path d="M4 21h16"/><path d="M14.5 13.5v1"/></svg>',qh=null;function j8(){return qh||(qh=new Promise((e,t)=>{let o=Fl?"__redRoom":"__conservatoryRoom";if(window[o]){e(window[o]);return}let n=document.createElement("script");n.src=Fl?"redroom.js?v=8fcd924000":"conservatory.js?v=dda9d144f6",n.async=!0,n.onload=()=>window[o]?e(window[o]):t(new Error("The room did not load")),n.onerror=()=>{qh=null,t(new Error("The conservatory could not be fetched"))},document.head.appendChild(n)})),qh}var Hh=null,Uh=null,Za=null,Gl=null,fb=null,Qa=null,zr="idle",db=0,pb=0,es=null,ea=null,js=null,Ka=null,vr=null,ga=null,W8=!1;function ts(e,t,o){let n=document.createElement(e);return t&&(n.className=t),o!==void 0&&(n.innerHTML=o),n}function uc(e){zr=e,db=pb}function vb(){return j8().then(e=>(Za=e,Gl||(Gl=e.studio(Hh),Uh&&Uh.useStudio&&Uh.useStudio(e.studio)),e))}var Od=!1;function V8(e){if(!e||e.slug!==hb||Ol||Od)return null;let t=ts("button","cons-btn",B8+"<span>The Conservatory of Unsaid Things</span>");return t.type="button",t.setAttribute("aria-label","The Conservatory of Unsaid Things: answer its question to go in"),t.addEventListener("pointerdown",o=>o.stopPropagation()),t.addEventListener("click",o=>{o.stopPropagation(),X8(e)}),t}function X8(e){if(zr!=="idle"||Od)return;document.body.classList.add("cons-asking");let t=ts("div","cons-ask");t.setAttribute("role","dialog"),t.setAttribute("aria-label","The Conservatory of Unsaid Things");let o=ts("div","cons-card",`
		<button type="button" class="cons-x" aria-label="Close">\xD7</button>
		<span class="cons-kicker">The Conservatory of Unsaid Things</span>
		<p class="cons-q">They are offered only at the end,<br>and heal nothing they touch.<br>What are they?</p>
		<form class="cons-form" autocomplete="off">
			<input class="cons-in" type="text" aria-label="Your answer" spellcheck="false" autocapitalize="off">
			<button type="submit" class="cons-go">Answer</button>
		</form>
		<p class="cons-msg" aria-live="polite"></p>`);t.appendChild(o),document.body.appendChild(t),requestAnimationFrame(()=>t.classList.add("on"));let n=o.querySelector(".cons-in"),r=o.querySelector(".cons-msg"),a=()=>{t.classList.remove("on"),document.body.classList.remove("cons-asking"),setTimeout(()=>t.remove(),600),window.removeEventListener("keydown",i,!0)},i=s=>{s.stopPropagation(),s.key==="Escape"&&a()};window.addEventListener("keydown",i,!0),["pointerdown","wheel","touchstart","touchmove"].forEach(s=>t.addEventListener(s,c=>c.stopPropagation(),{passive:!0})),t.addEventListener("click",s=>{s.target===t&&a()}),o.querySelector(".cons-x").addEventListener("click",a),setTimeout(()=>n.focus(),350),o.querySelector("form").addEventListener("submit",s=>{s.preventDefault();let c=n.value.trim().replace(/[.!?]+$/,"").toLowerCase();if(q8(c)===$8){vb().catch(f=>console.error(f)),o.innerHTML=`
				<button type="button" class="cons-x" aria-label="Close">\xD7</button>
				<span class="cons-kicker">The Conservatory of Unsaid Things</span>
				<p class="cons-q">Flowers.</p>
				<button type="button" class="cons-flower">${ub}<span>Bring a flower while it still matters</span></button>`,o.querySelector(".cons-x").addEventListener("click",a),o.querySelector(".cons-flower").addEventListener("click",()=>{a(),Y8(e)}),setTimeout(()=>{let f=o.querySelector(".cons-flower");f&&f.focus()},50);return}Od=!0,n.disabled=!0,o.querySelector(".cons-go").disabled=!0,r.textContent="Not this time.",r.classList.add("on"),document.querySelectorAll(".cons-btn").forEach(f=>f.remove()),setTimeout(a,1800)})}function Y8(e){let t=e.paintingPosition,o=e.width||1.6,n=e.height||1.1,r=e.side==="right",a=r?[-1,0,0]:[1,0,0],i=r?[0,0,1]:[0,0,-1],s=(cb[0]-.5)*o,c=(.5-cb[1])*n;ea={at:[t[0]+i[0]*s-a[0]*.04,t[1]+c,t[2]+i[2]*s],n:a},es=null,W8=!1,document.body.classList.add("in-conservatory"),uc("zoom"),K8()}function K8(){if(Ka){Ka.classList.add("on");return}Ka=ts("div","cons-ui");let e=ts("button","cons-sky",fc.night>.5?"\u2600":"\u263E");e.type="button",e.setAttribute("aria-label","Day or night"),e.addEventListener("click",o=>{o.stopPropagation(),fc.toggle(),setTimeout(()=>{e.textContent=fc.night>.5?"\u2600":"\u263E"},50)});let t=ts("button","cons-back","\u2190 Back to the gallery");t.type="button",t.setAttribute("aria-label","Back to the gallery"),t.addEventListener("click",o=>{o.stopPropagation(),gb()}),Ka.appendChild(e),Ka.appendChild(t),["pointerdown","pointerup"].forEach(o=>Ka.addEventListener(o,n=>n.stopPropagation())),document.body.appendChild(Ka),requestAnimationFrame(()=>Ka.classList.add("on")),ga=ts("div","cons-name","The Conservatory of Unsaid Things"),document.body.appendChild(ga),window.addEventListener("keydown",mb)}var mb=e=>{e.key==="Escape"&&(zr==="room"||zr==="wait")&&gb()};function Q8(){vr&&vr.remove(),vr=ts("div","cons-note",`
		<p>You brought a flower while it still matters.<br>Lay it down.</p>
		<button type="button" class="cons-flower">${ub}<span>Place the flower</span></button>`),["pointerdown","pointerup"].forEach(e=>vr.addEventListener(e,t=>t.stopPropagation())),vr.querySelector("button").addEventListener("click",e=>{e.stopPropagation(),Qa&&Qa.placeFlower(),vr.classList.remove("on"),setTimeout(()=>{vr&&(vr.remove(),vr=null)},1300)}),document.body.appendChild(vr),requestAnimationFrame(()=>vr.classList.add("on"))}function gb(){zr!=="room"&&zr!=="wait"||(uc("leave"),vr&&vr.classList.remove("on"),ga&&ga.classList.remove("on"))}function Z8(){Qa&&(Qa.dispose(),Qa=null),Za&&(Za.studio.setFlower(-1),Za.studio.setGuide({vis:!1})),vr&&(vr.remove(),vr=null),Ka&&Ka.classList.remove("on"),ga&&(ga.remove(),ga=null),window.removeEventListener("keydown",mb),document.body.classList.remove("in-conservatory"),uc("back")}function J8(e,t,o){if(pb=e,Ol){if(!Qa)return null;let r=Qa.update(e);return{eye:r.eye,target:r.target,fov:r.fov,roll:r.roll,moving:r.moving,look:Object.assign({},lc,r.look)}}if(zr==="idle")return o&&(js=o),null;let n=e-db;if(zr==="zoom"){if(!es&&(es=t?{eye:t.eye.slice(),target:t.target.slice(),fov:t.fov,roll:t.roll||0}:null,js=o||lc,!es))return null;let a=Il(n/2.8),i=Pl(a),s=H8(a),c=[ea.at[0]+ea.n[0]*.09,ea.at[1],ea.at[2]+ea.n[2]*.09],f=lb(es.eye,c,hc(i,1,s*.6)),l=lb(es.target,ea.at,Pl(a*1.6)),u=Object.assign({},lc,js,{fade:Pl((a-.72)/.28),fadeColor:sb,aperture:0,letterbox:js&&js.letterbox||0});return a>=1&&uc("wait"),{eye:f,target:l,fov:hc(es.fov,26,i),roll:hc(es.roll,0,i),look:u,moving:!0}}if(zr==="wait")return Za&&Gl&&Za.studio.ready()&&n>.35&&(Qa=Za.tour({intro:!0,onLanded:Q8,onFlowerSettled:()=>{}}),ga&&setTimeout(()=>{ga&&zr==="room"&&ga.classList.add("on"),setTimeout(()=>{ga&&ga.classList.remove("on")},5200)},2600),uc("room")),{eye:[ea.at[0]+ea.n[0]*.09,ea.at[1],ea.at[2]+ea.n[2]*.09],target:ea.at,fov:26,roll:0,look:Object.assign({},lc,js,{fade:1,fadeColor:sb}),moving:!1};if(zr==="room"||zr==="leave"){let r=Qa.update(e),a=Object.assign({},lc,r.look);if(zr==="leave"){let i=Il(n/.9);a.fade=Math.max(a.fade||0,Pl(i)),a.fadeColor=[0,0,0],i>=1&&Z8()}return{eye:r.eye,target:r.target,fov:r.fov,roll:r.roll,moving:r.moving,look:a}}if(zr==="back"){let r=Il(n/1.2);return r>=1?(uc("idle"),null):t?{eye:t.eye,target:t.target,fov:t.fov,roll:t.roll||0,look:Object.assign({},lc,o||js,{fade:1-Pl(r),fadeColor:[0,0,0]}),moving:!0}:null}return null}xb.exports={SLUG:hb,PREVIEW:Ol,box:D8,init(e){Hh=e.regl,Uh=e.post;let t=document.createElement("style");t.textContent=U8,document.head.appendChild(t),fb=Hh.texture({width:1,height:1,data:[0,0,0,0]}),Ol&&eS()},button:V8,update:J8,get draw(){return Gl},get active(){return zr!=="idle"||Ol},get alwaysMirror(){return Fl&&!!Gl},bake(){return Za?Za.studio.bakedSun(Hh):fb}};function eS(){let e=document.createElement("style");if(e.textContent=".tour, #museum-mobile-controls, .painting-plaque { display: none !important; } .st-ui { position: fixed; top: 18px; right: 18px; z-index: 30; width: 42px; padding: 0; font-size: 20px; letter-spacing: 0; }",document.head.appendChild(e),vb().then(()=>{Qa=Za.tour({})}).catch(o=>console.error(o)),Fl)return;let t=document.createElement("button");t.type="button",t.className="st-ui",t.setAttribute("aria-label","Day or night"),t.textContent="\u263E",document.body.appendChild(t),t.addEventListener("pointerdown",o=>o.stopPropagation()),t.addEventListener("click",o=>{o.stopPropagation(),fc.toggle(),setTimeout(()=>{t.textContent=fc.night>.5?"\u2600":"\u263E"},50)}),window.addEventListener("keydown",o=>{o.key==="n"&&fc.toggle()})}});var Fd=de((fL,bb)=>{"use strict";function tS(e){let t=e>>>0||1;return function(){return t=t*1664525+1013904223>>>0,t/4294967296}}var yb={stroke:.05,letter:.045,word:.15,comma:.28,stop:.45,line:.25,para:.6},oS=["th","ng","er"];function nS(e,t,o){o=Object.assign({ink:"#2a1d12",xh:14,speed:23,lineHeight:2.85,seed:7,width:.12,pace:.45},o||{});let n=e.getContext("2d"),r={};Object.keys(yb).forEach(p=>{r[p]=yb[p]*o.pace});let a=[],i=0,s=0,c=0,f=[];function l(p,m){let g=tS(o.seed),y=o.xh,b={},k=Y=>{let be=t[Y];if(!be)return null;let qe=Math.floor(g()*be.length);return be.length>1&&qe===b[Y]&&(qe=(qe+1)%be.length),b[Y]=qe,be[qe]},E=Y=>{if(t[Y])return{g:k(Y),sc:1};let be=Y.toLowerCase();return t[be]?{g:k(be),sc:/[A-Z]/.test(Y)?1.32:1}:null},L=[],N=.15,W=0,O=0,te=(g()-.5)*.02,D=m/y,re=p.split(/\n\s*\n/);re.forEach((Y,be)=>{Y.replace(/\s+/g," ").trim().split(" ").forEach(Ae=>{let he=[];for(let He=0;He<Ae.length;He++){let pt=Ae.substr(He,2).toLowerCase();if(oS.indexOf(pt)>=0&&t[pt]&&g()<.55&&Ae[He]===Ae[He].toLowerCase()){he.push({ch:pt,gl:{g:k(pt),sc:1}}),He++;continue}let St=E(Ae[He]);St&&St.g&&he.push({ch:Ae[He],gl:St})}let Te=he.map(()=>.17+g()*.07),dt=he.reduce((He,pt,St)=>He+pt.gl.g.w*pt.gl.sc+Te[St],0);W>0&&W+dt>D&&(W=0,O++,N+=r.line,te=(g()-.5)*.02),he.forEach((He,pt)=>{let St=He.gl.g,to=He.gl.sc*(.95+g()*.1),ao=(g()-.5)*.06,Ho=(g()-.5)*.08+te*W,Xe=W,ht=O*o.lineHeight+1.9+Ho,vt=Math.cos(ao),Zt=Math.sin(ao),po=mt=>[(Xe+(mt[0]*vt-mt[1]*Zt)*to)*y,(ht+(mt[0]*Zt+mt[1]*vt)*to)*y],Lt=(mt,me)=>{let tt=0;for(let ct=1;ct<mt.length;ct++)tt+=Math.hypot(mt[ct][0]-mt[ct-1][0],mt[ct][1]-mt[ct-1][1]);let zt=Math.max(o.minDur||(me?.06:.07),tt/(o.speed*y));L.push({pts:mt,L:tt,start:N,dur:zt,dot:me}),N+=zt};if(St.s.forEach((mt,me)=>{me>0&&(N+=r.stroke),Lt(mt.map(po),!1)}),St.dot){let mt=St.s[0][0];St.s.forEach(tt=>tt.forEach(zt=>{zt[1]<mt[1]&&(mt=zt)}));let me=po([mt[0]+.1,-1.36]);N+=r.stroke*1.4,Lt([me,[me[0]+y*.05,me[1]+y*.03]],!0)}N+=r.letter*(.6+g()*.8),W+=St.w*to+Te[pt]});let qt=Ae[Ae.length-1];N+=/[.!?]/.test(qt)?r.stop:/[,;:]/.test(qt)?r.comma:r.word,W+=.55+g()*.2}),be<re.length-1&&(W=0,O+=1.6,N+=r.para)});let q=(O+1)*o.lineHeight*y+y*1.55;return{strokes:L,total:N,height:q}}function u(p,m){if(o.fixed){let g=o.fixed;n.setTransform(1,0,0,1,g.mx,g.my),n.clearRect(-g.mx,-g.my,e.width,e.height)}else{let g=Math.min(window.devicePixelRatio||1,2);e.width=Math.round(p*g),e.height=Math.round(m*g),e.style.height=m+"px",e.style.width=p+"px",n.setTransform(g,0,0,g,0,0),n.clearRect(0,0,p,m)}n.strokeStyle=o.ink,n.fillStyle=o.ink,n.lineCap="round",n.lineJoin="round",o.shadow&&(n.shadowColor=o.shadow,n.shadowBlur=o.shadowBlur||6)}let h=p=>p<.5?2*p*p:1-Math.pow(-2*p+2,2)/2;function d(p,m){let g=f[p.i]||0;if(m<=g)return;let y=o.width*o.xh,b=0;for(let k=1;k<p.pts.length;k++){let E=p.pts[k-1],L=p.pts[k],N=Math.hypot(L[0]-E[0],L[1]-E[1]),W=b,O=b+N;if(b=O,O<=g||N===0)continue;if(W>=m)break;let te=Math.max(0,(g-W)/N),D=Math.min(1,(m-W)/N),re=[E[0]+(L[0]-E[0])*te,E[1]+(L[1]-E[1])*te],q=[E[0]+(L[0]-E[0])*D,E[1]+(L[1]-E[1])*D],Y=(W+O)/2/(p.L||1),be=.72+.28*Math.sin(Math.PI*Math.min(1,Math.max(0,Y)));n.lineWidth=y*be,n.globalAlpha=.86+.14*be,n.beginPath(),n.moveTo(re[0],re[1]),n.lineTo(q[0],q[1]),n.stroke()}p.dot&&g===0&&(n.globalAlpha=1,n.beginPath(),n.arc(p.pts[0][0],p.pts[0][1],y*.75,0,Math.PI*2),n.fill()),f[p.i]=m}function v(p){let m=(p-c)/1e3;for(let g=0;g<a.length;g++){let y=a[g];if(y.start>m)break;let b=Math.min(1,(m-y.start)/y.dur);d(y,h(b)*y.L)}if(o.onPen){let g=0;for(;g+1<a.length&&a[g+1].start<=m;)g++;a[g]&&o.onPen(a[g].pts[0][1])}m<i?s=requestAnimationFrame(v):o.onDone&&o.onDone()}return{write(p,m){cancelAnimationFrame(s);let g=o.fixed?e.width-2*o.fixed.mx:e.parentElement.clientWidth,y=l(p,g);a=y.strokes,i=y.total;let b=typeof o.maxTime=="function"?o.maxTime(p):o.maxTime;if(b&&i>b){let E=b/i;a.forEach(L=>{L.start*=E,L.dur*=E}),i=b}a.forEach((E,L)=>{E.i=L}),f=[],u(g,y.height);let k=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(m||k){a.forEach(E=>d(E,E.L));return}return c=performance.now(),s=requestAnimationFrame(v),i},finish(){cancelAnimationFrame(s),a.forEach(p=>d(p,p.L)),o.onDone&&o.onDone()},stop(){cancelAnimationFrame(s)}}}bb.exports=nS});var Dd=de((hL,wb)=>{"use strict";var Gd=Jn(),rS='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M5.5 18.5l1.7-1.7M16.8 7.2l1.7-1.7"/></svg>',aS='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M19.5 14.6A8 8 0 0 1 9.4 4.5a8 8 0 1 0 10.1 10.1z"/></svg>';wb.exports=function(t){let o=document.createElement("button");o.type="button",o.className=t+" light-toggle";let n=()=>{let r=Gd.isNight;o.innerHTML=r?rS:aS,o.setAttribute("aria-label",r?"Switch to day":"Switch to night"),o.title=r?"Day":"Night",o.setAttribute("aria-pressed",r?"true":"false")};return n(),Gd.onChange(n),["mousedown","pointerdown"].forEach(r=>o.addEventListener(r,a=>a.stopPropagation())),o.addEventListener("click",r=>{r.stopPropagation(),Gd.toggle()}),o}});var Eb=de((uL,kb)=>{"use strict";var An=$h(),iS=Oi(),sS=Fd(),cS="81efb912-50a2-4fcd-b5e8-c3a28eecbe93",_b=100,xi=e=>Math.max(0,Math.min(1,e)),qr=(e,t,o)=>{let n=xi((o-e)/(t-e));return n*n*(3-2*n)},Ra=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,xa=(e,t,o)=>e+(t-e)*o,$l=(e,t,o)=>[xa(e[0],t[0],o),xa(e[1],t[1],o),xa(e[2],t[2],o)];function Ws(e,t){let o=e.length-1,n=xi(t)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,i=e[Math.max(0,r-1)],s=e[r],c=e[r+1],f=e[Math.min(o,r+2)];return[0,1,2].map(l=>.5*(2*s[l]+(-i[l]+c[l])*a+(2*i[l]-5*s[l]+4*c[l]-f[l])*a*a+(-i[l]+3*s[l]-3*c[l]+f[l])*a*a*a))}var Bh=e=>({eye:e.eye.slice(),target:e.target.slice(),fov:e.fov,roll:0});function $d(e,t,o){return{eye:$l(e.eye,t.eye,o),target:$l(e.target,t.target,o),fov:xa(e.fov,t.fov,o),roll:xa(e.roll||0,t.roll||0,o)}}var ql=iS.PLAY,Pa=[ql.stoolX,1,ql.keyFront+.25],jh=[ql.stoolX,ql.keyTop+.03,ql.keyFront-.05],Hd=e=>{let t=(15+110*e)*Math.PI/180,o=2.1+.4*e;return[Pa[0]+Math.cos(t)*o,1.15+.4*e,Pa[2]+Math.sin(t)*o]},dc=[{eye:Hd(1),target:[Pa[0],.92,Pa[2]-.15],fov:46,aperture:.6},{eye:[-6.93,3.2,45.85],target:[-6.93,.77,45.3],fov:34,aperture:.6,to:jh},{eye:[Pa[0]+1,1.14,Pa[2]+1.72],target:[jh[0]+.05,.8,jh[2]+.05],fov:40,aperture:1,to:jh}],Mb=(e,t)=>Math.hypot(e[0]-t[0],e[1]-t[1],e[2]-t[2]),Wh=e=>({fade:0,letterbox:.55,exposure:1.3,focus:Mb(e.eye,e.to||Pa),aperture:e.aperture,vignette:.42,shafts:0}),qd={fade:0,letterbox:.55,exposure:2.1,focus:6.2,aperture:.55,vignette:.45,shafts:0},pc={fade:0,letterbox:.55,exposure:2,focus:.82,aperture:1.1,vignette:.48,shafts:0},Dl={fade:0,letterbox:.55,exposure:1.8,focus:.42,aperture:1.3,vignette:.5,shafts:0},lS=`
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
`;kb.exports=function(t){let{root:o,avatar:n}=t,r=document.createElement("style");r.textContent=lS,document.head.appendChild(r);let a=document.createElement("div");a.className="conf-ui",a.innerHTML=`
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
		</div>`,o.appendChild(a);let i=a.querySelector(".conf-write"),s=a.querySelector("textarea"),c=a.querySelector('[data-act="send"]'),f=a.querySelector(".conf-hint"),l=a.querySelector(".conf-close"),u=a.querySelector(".conf-final"),h=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,d=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;s.addEventListener("input",()=>{let me=s.value.match(new RegExp("^\\s*(\\S+\\s+){0,"+(_b-1)+"}\\S+"));(s.value.trim()?s.value.trim().split(/\s+/).length:0)>_b&&me&&(s.value=me[0]),c.disabled=!s.value.trim()}),["keydown","keyup","keypress"].forEach(me=>s.addEventListener(me,tt=>tt.stopPropagation())),a.addEventListener("pointerdown",me=>me.stopPropagation()),a.addEventListener("click",me=>{let tt=me.target.closest("button");tt&&(me.stopPropagation(),tt.dataset.act==="send"&&be(),tt.dataset.act==="leave"&&he())});let v=!1,p="",m=0,g=null,y=null,b="",k=null,E=0,L="",N=document.createElement("canvas");N.width=512,N.height=652;function W(me){me!==L&&(L=me,i.classList.toggle("on",me==="write"),f.classList.toggle("on",me==="hint"),l.classList.toggle("on",v&&me==="hint"&&(p==="room"||p==="peek")),u.classList.toggle("on",me==="final"),me==="write"&&setTimeout(()=>{if(p==="write")try{s.focus({preventScroll:!0})}catch(tt){}},900))}function O(me){p=me,m=0}function te(me,tt){if(v)return;v=!0,g={eye:me.eye.slice(),target:me.target.slice(),fov:me.fov,roll:me.roll||0},y=Object.assign({},tt),b="",s.value="",c.disabled=!0,An.STATE.fold=0,An.STATE.slide=0,An.STATE.shown=!0,An.STATE.active=!0;let zt=N.getContext("2d");zt.setTransform(1,0,0,1,0,0),zt.clearRect(0,0,N.width,N.height),An.STATE.ink=N,An.STATE.inkDirty=!0,document.body.classList.add("confessing");let ct=dc[0],Ve=d?.3:5.5,go=d?.3:3.6;D.i=0,D.u=0,D.T=Ve+go,D.moving=!0,D.rest=0,D.raw=!0,D.lookFrom=y,D.lookTo=Wh(ct);let _=[g.eye,[3.4,1.75,44.5],[.3,1.72,44.7],[-2.8,1.5,45.4],Hd(0)],oo=[g.target,[-3,1.9,44.5],[-6.5,1.3,44.9],[Pa[0],1,Pa[2]-.1],ct.target];D.path=Wt=>{let xo=Wt*(Ve+go);if(xo<Ve){let mr=xo/Ve,Dn=1-Math.cos(mr*Math.PI/2);return{eye:Ws(_,Dn),target:Ws(oo,qr(0,1,Dn*1.05)),fov:xa(g.fov,52,qr(.4,1,Dn)),roll:(g.roll||0)*(1-Dn)}}let Eo=(xo-Ve)/go,hn=1-Math.pow(1-Eo,2.4);return{eye:Hd(hn),target:ct.target,fov:xa(52,ct.fov,hn),roll:.05*Math.sin(Math.PI*hn)}},O("room"),W("")}let D={i:0,u:0,T:1,moving:!1,rest:0,raw:!1,path:null,lookFrom:null,lookTo:null},re=()=>h?"Scroll on":"Swipe up";function q(me){let tt=qt,zt=dc[me],ct={eye:tt.eye.slice(),target:tt.target.slice(),fov:tt.fov,roll:tt.roll||0},Ve=$l(ct.eye,zt.eye,.5),go=[Ve[0]-Pa[0],0,Ve[2]-Pa[2]],_=Math.hypot(go[0],go[2])||1,oo=[Ve[0]+go[0]/_*.6,Ve[1]+.3,Ve[2]+go[2]/_*.6];D.path=Wt=>{let xo=1-Wt;return{eye:[0,1,2].map(Eo=>xo*xo*ct.eye[Eo]+2*xo*Wt*oo[Eo]+Wt*Wt*zt.eye[Eo]),target:$l(ct.target,zt.target,qr(0,1,Wt)),fov:xa(ct.fov,zt.fov,Wt),roll:ct.roll*xo}},D.lookFrom=Y||Wh(dc[D.i]),D.lookTo=Wh(zt),D.i=me,D.u=0,D.moving=!0,D.rest=0,D.raw=!1,D.T=d?.4:Math.max(2.8,Math.min(4.4,Mb(ct.eye,zt.eye)*1+1.6)),W("")}let Y=null;function be(){if(p!=="write"||(b=s.value.trim(),!b))return;s.blur(),W("");let me=Math.max(10,Math.min(22,24-b.length/28));k=sS(N,t.glyphs(),{ink:"rgba(30,16,8,0.97)",xh:me,width:.15,seed:11+b.length,speed:60,pace:.2,minDur:.03,maxTime:tt=>2.4+tt.length/160,fixed:{mx:46,my:40},onPen:()=>{An.STATE.inkDirty=!0},onDone:()=>{An.STATE.inkDirty=!0}}),O("down")}function qe(){try{let me={access_key:cS,subject:"A note left in the confessional",from_name:"Your gallery",message:b,page:location.href,when:new Date().toString()};fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(me),keepalive:!0}).catch(()=>{})}catch(me){}}function Ae(){p==="ready"&&(qe(),O("fold"),W(""))}function he(){!v||p==="leave"||(W(""),s.blur(),Te=qt,dt=Y,O("leave"))}let Te=null,dt=null,qt=null,He=An.SHOTS.window,pt=An.OFF,St=me=>[me[0]+pt[0],me[1],me[2]],to=[[3.4,1.75,44.5],[.3,1.72,44.5],[-2.5,1.66,45],[-4.6,1.6,46.55],[-7,1.58,47.15],[-9.3,1.55,46.4],St([1.25,1.5,43.25]),St([-.55,1.36,42.92])],ao=[[-3,1.9,44.5],[-6.5,1.5,44.6],[-7,1,44.4],[-7.6,.95,44],[-10.5,1.5,44.6],St([-1,1.55,43.6]),St([-1.4,1.35,43.1]),St([-1.5,1.33,43.3])];function Ho(me){let tt=Ra(xi(me)),zt=[g.eye,...to,He.eye],ct=[g.target,...ao,He.target];return{eye:Ws(zt,tt),target:Ws(ct,qr(0,1,tt*1.03)),fov:xa(g.fov,He.fov,qr(.6,.97,tt)),roll:(g.roll||0)*(1-tt)}}function Xe(me,tt){if(d)return me;let zt=performance.now()/1e3,ct=.004*tt,Ve=Math.sin(zt*.61)*.6+Math.sin(zt*1.37+1.3)*.4,go=Math.sin(zt*.47+2.1)*.6+Math.sin(zt*1.13+.4)*.4;return{eye:[me.eye[0]+Ve*ct,me.eye[1]+go*ct*.7,me.eye[2]],target:[me.target[0]+go*ct*1.5,me.target[1]+Ve*ct,me.target[2]],fov:me.fov,roll:me.roll}}function ht(me,tt,zt){let ct={};for(let Ve in tt)ct[Ve]=typeof tt[Ve]=="number"&&typeof me[Ve]=="number"?xa(me[Ve],tt[Ve],zt):tt[Ve];return ct}function vt(me){me*=window.__confSpeed||1,m+=me;let tt=Bh(He),zt=Bh(An.SHOTS.paper),ct,Ve,go=Bh(An.SHOTS.peek);if(p==="room")D.moving?(D.u=Math.min(1,D.u+me/D.T),ct=D.path(D.raw?D.u:Ra(D.u)),Ve=ht(D.lookFrom,D.lookTo,qr(.1,.9,D.u)),D.raw&&(Ve.fade=(y.fade||0)*(1-qr(0,.12,D.u))),D.u>=1&&(D.moving=!1,D.rest=0,f.textContent=re(),W("hint"))):(D.rest+=me,ct=Xe(Bh(dc[D.i]),2.5),Ve=Wh(dc[D.i]));else if(p==="enter"){let oo=xi(m/(d?.6:9)),Wt=Ra(oo),xo=[Zt.eye,[-7.6,1.9,47.6],[-9.6,1.85,45.6],St([.75,1.5,42.95]),St([-.25,1.42,42.82]),St([-.9,1.42,42.82]),go.eye];ct={eye:Ws(xo,Wt),target:$l(Zt.target,go.target,qr(0,.35,Wt)),fov:xa(Zt.fov,go.fov,qr(.3,1,Wt)),roll:0},Ve=ht(po,qd,qr(.2,.9,oo)),oo>=1&&O("peek")}else if(p==="peek")ct=Xe(go,1.5),Ve=qd,m>(d?.5:3.2)&&O("turn");else if(p==="turn"){let _=xi(m/(d?.4:3.2));ct=$d(go,tt,Ra(_)),Ve=ht(qd,pc,Ra(_)),_>=1&&(O("write"),W("write"))}else if(p==="write")ct=Xe(tt,1),Ve=pc;else if(p==="down"){let _=xi(m/(d?.4:2));ct=$d(tt,zt,Ra(_)),Ve=ht(pc,Dl,Ra(_)),_>=1&&(E=k.write(b,d)||0,An.STATE.inkDirty=!0,O("writing"))}else if(p==="writing")ct=Xe(zt,.6),Ve=Dl,m>E+.8&&(O("ready"),f.textContent=h?"Scroll to fold it and pass it through":"Swipe up to fold it and pass it through",W("hint"));else if(p==="ready")ct=Xe(zt,.6),Ve=Dl;else if(p==="fold"){let _=xi(m/(d?.3:1.5));An.STATE.fold=Ra(_),ct=Xe(zt,.6),Ve=Dl,_>=1&&O("slide")}else if(p==="slide"){let oo=xi(m/(d?.6:3.4));An.STATE.slide=Ra(qr(0,.7,oo));let Wt=Ra(qr(.35,1,oo));ct=$d(zt,tt,Wt),Ve=ht(Dl,pc,Wt),oo>=1&&(An.STATE.shown=!1,O("final"),W("final"))}else if(p==="final")ct=Xe(tt,1),Ve=pc;else if(p==="leave"){let _=d?.6:Te.eye[0]<pt[0]-.3?12:7,oo=xi(m/_),Wt={eye:g.eye,target:g.target,fov:g.fov,roll:g.roll},xo=Ra(oo),Eo=Te.eye[0]<pt[0]-.3,hn=Eo?[Te.eye,St([-.55,1.4,42.8]),St([1.4,1.55,43.3]),[-9.3,1.58,46.4],[-7,1.6,47.15],[-4.6,1.62,46.55],[-2.2,1.68,44.8],[.6,1.72,44.5],Wt.eye]:[Te.eye,[-3.4,1.7,46.2],[-1.2,1.7,44.8],[.6,1.72,44.5],Wt.eye],mr=Eo?[Te.target,St([1.5,1.45,43.4]),[-7,1.2,44.6],[-4,1.5,47],[-1.5,1.7,45.5],[1,1.8,44.5],[4,1.8,44.5],[7,1.9,44.2],Wt.target]:[Te.target,[-1.5,1.7,45.2],[2,1.8,44.5],[6,1.9,44.3],Wt.target];if(ct={eye:Ws(hn,xo),target:Ws(mr,xo),fov:xa(Te.fov,Wt.fov,xo),roll:Wt.roll*xo},Ve=ht(dt||pc,y,qr(.1,.7,oo)),Ve.fade=(y.fade||0)*qr(.82,1,oo),oo>=1){v=!1,An.STATE.active=!1,An.STATE.shown=!0,An.STATE.fold=0,An.STATE.slide=0;let Dn=N.getContext("2d");Dn.setTransform(1,0,0,1,0,0),Dn.clearRect(0,0,N.width,N.height),An.STATE.inkDirty=!0,document.body.classList.remove("confessing"),t.onExit&&t.onExit()}}return qt=ct,Y=Ve,{camera:ct,look:Ve}}let Zt=null,po=null;function Lt(){if(p==="room"){if(D.moving||D.rest<.4)return;D.i<dc.length-1?q(D.i+1):(Zt=qt,po=Y,W(""),O("enter"));return}if(p==="peek"){m>.4&&O("turn");return}p==="ready"?Ae():p==="writing"&&k&&(k.finish(),m=Math.max(m,E))}function mt(){p==="room"&&!D.moving&&D.rest>.4&&D.i>0&&q(D.i-1)}return{start:te,update:vt,leave:he,get active(){return v},get stage(){return p},wheel(me){me>8?Lt():me<-8&&mt()},swipe(me){me>0?Lt():me<0&&mt()},tap(){Lt()},key(me){return["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(me)>=0?(Lt(),!0):["ArrowUp","ArrowLeft","PageUp"].indexOf(me)>=0?(mt(),!0):me==="Escape"?(he(),!0):!1},_setNote(me){s.value=me,s.dispatchEvent(new Event("input"))}}}});var Pb=de((dL,Rb)=>{"use strict";var vc=U0(),Vh=ud(),Ud=Rf(),fS=Kc(),Bd=pd(),hS=sa(),Xh=!hS.isPhone&&!!(window.matchMedia&&window.matchMedia("(pointer: fine)").matches),{A:ta}=fa(),{C:nr,PAINTING_X:yc}=ir(),Ur=e=>Math.max(0,Math.min(1,e)),De=(e,t,o)=>e+(t-e)*o,Io=(e,t,o)=>[De(e[0],t[0],o),De(e[1],t[1],o),De(e[2],t[2],o)],eo=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],jd=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],Cr=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],Oe=(e,t,o)=>{let n=Ur((o-e)/(t-e));return n*n*(3-2*n)};function uS(e,t,o,n,r,a){if(r<=0)return[e,o];let i=2/n,s=i*r,c=1/(1+s+.48*s*s+.235*s*s*s),f=a*n,l=Math.max(-f,Math.min(f,e-t)),u=e-l,h=(o+i*l)*r,d=(o-i*h)*c,v=u+(l+h)*c;return t-e>0==v>t&&(v=t,d=0),[v,d]}var Sb=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,dS=e=>e*e*e,Wd=e=>1-Math.pow(1-e,3),fn=e=>-(Math.cos(Math.PI*e)-1)/2;function yn(e,t){let o=e.length-1,n=Ur(t)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,i=e[Math.max(0,r-1)],s=e[r],c=e[r+1],f=e[Math.min(o,r+2)],l=a*a,u=l*a;return[0,1,2].map(h=>.5*(2*s[h]+(-i[h]+c[h])*a+(2*i[h]-5*s[h]+4*c[h]-f[h])*l+(-i[h]+3*s[h]-3*c[h]+f[h])*u))}var Yt=(e,t,o,n)=>({eye:e,target:t,fov:o,roll:n||0});function Qs(e,t,o){return Yt(Io(e.eye,t.eye,o),Io(e.target,t.target,o),De(e.fov,t.fov,o),De(e.roll,t.roll,o))}var Qd=()=>Oe(.75,1.3,window.innerWidth/window.innerHeight),Nr=(e,t)=>Qs(e,t,Qd()),Yh=[7,3.95,nr.hallEnd-.05],pS=[nr.x1,2.9,nr.zc],gc=[16.75,4.55,6.75],Zd=[6.92,2.72,14.5],Oa=[7.3,.015,47.1],vS=[gc,[16.2,4,7],[15.3,3.45,6.4],[14.1,3.2,5.7],[12.2,3.35,6.6],[10,3.75,9.6],[8.2,3.8,12.2],[7.3,3.4,13.8],Zd],mS=[Zd,[7.3,4.6,19.5],[7.6,4.9,23.5],[6.6,4.3,28.5],[7.5,3.2,34],[6.8,2.1,39.5],[7.4,1,44.2],[7.2,.3,46.4],Oa],Xs=[yc[0],3,nr.z0],Ys=[yc[1],3,nr.z0],Xd=47.45,Nb=4.6,gS=13.2,xS=1.57,Hl=[7.55,1.25,46.75],Jd=[17.25,2.42,46],ep=[26.05,1.95,46],Ul=[36.15,.015,44],Jh=()=>De(6.8,6.15,Qd()),yS=[Hl,[9.6,1.65,46.2],[12.3,2.05,45.1],[14.6,2.35,44.5],[16.2,2.3,44.7],Jd],bS=[Jd,[20.2,2.05,45.6],[23.2,1.8,45],ep],Ks=[yc[2],3,nr.z0],Yd=[34.8,1.35,46],ns=[7.89,.03,19.03],Ab=.36,Tb=13.64,lr=[{side:"left",z:34.5},{side:"left",z:23.5},{side:"left",z:14.6},{side:"right",z:14.6},{side:"right",z:23.5},{side:"right",z:34.5}];function ya(e){let t=e.side==="left"?1:-1;return Io([7-t*1,3,e.z+t*.2],[7-t*.6,3.25,e.z+t*.13],Qd())}function wS(e){return e.side==="left"?Nr(Yt([8.6,3.9,e.z],[Ab,1.45,e.z],76),Yt([8,3.6,e.z+.7],[Ab,3.95,e.z-2],46,-.008)):Nr(Yt([5.4,3.9,e.z],[Tb,1.45,e.z],76),Yt([6,3.6,e.z-.7],[Tb,3.95,e.z+2],46,-.008))}var _S=()=>[Ul,[35.6,.5,44.6],[33.2,1.5,45.6],[29,2.3,46.1],[23.5,2.7,45.9],[18.5,2.9,45.4],[14.8,3.1,44.3],[11,3.3,41.8],[7.4,3.4,38.8],[5.4,3.3,36.6],ya(lr[0])],MS=()=>[ya(lr[2]),[3,3.2,13.2],[1.7,3,12],[2.6,3.2,10],[5,3.6,8.9],[7,3.8,8.6],[9,3.6,8.9],[11.4,3.2,10],[12.3,3,12],[11,3.1,13.4],ya(lr[3])],kS=()=>[ya(lr[5]),[9,3.4,31],[7.8,2.8,27.5],[6.8,1.9,24.5],[7.4,1,21],[7.75,.35,19.6],ns],Lb={2:{pos:()=>Zd,amp:[.18,.07,.12],tumble:.5},7:{pos:()=>Hl,amp:[.12,.09,.1],tumble:.55},8:{pos:()=>Jd,amp:[.1,.08,.08],tumble:.5},9:{pos:()=>ep,amp:[.09,.06,.07],tumble:.45},10:{pos:()=>Yd,amp:[.07,.04,.06],tumble:.35},12:{pos:()=>ya(lr[0]),amp:[.12,.08,.1],tumble:.5},13:{pos:()=>ya(lr[1]),amp:[.12,.08,.1],tumble:.5},14:{pos:()=>ya(lr[2]),amp:[.12,.08,.1],tumble:.5},15:{pos:()=>ya(lr[3]),amp:[.12,.08,.1],tumble:.5},16:{pos:()=>ya(lr[4]),amp:[.12,.08,.1],tumble:.5},17:{pos:()=>ya(lr[5]),amp:[.12,.08,.1],tumble:.5}},os=[{name:"corridor",ui:"intro",look:{letterbox:1,exposure:1,focus:14,aperture:.25,vignette:.1},cam(e){let t=.9*(1-Math.exp(-e/14)),o=[0,Math.sin(e*.37)*.025,Math.sin(e*.23)*.06],n=Nr(Yt([nr.x0+.9,1.85,nr.zc+.25],[nr.x1,2.85,nr.zc-.1],64),Yt([nr.x0+1.2,2,nr.zc+.35],[nr.x1,2.6,nr.zc-.15],50));return n.eye=eo(eo(n.eye,[t,0,0]),o),n}},{name:"about",ui:"about",look:{letterbox:.55,exposure:1.32,focus:2.9,aperture:.9,vignette:.12,shafts:.65},cam(e){let t=[Math.sin(e*.21)*.08,Math.sin(e*.33)*.03,-.25*(1-Math.exp(-e/12))],o=Nr(Yt([16.6,1.9,9.2],[17.3,.4,5.6],64),Yt([15,1.35,7.75],[17.55,1.05,5.5],44,-.02));return o.eye=eo(o.eye,t),o}},{name:"sky",ui:"sky",look:{letterbox:.55,exposure:1,focus:2.1,aperture:.45,vignette:.1,shafts:1},cam(e){let t=[Math.sin(e*.12)*.35,Math.sin(e*.2)*.04,(1-Math.cos(e*.12))*.25],o=Nr(Yt([7,1.35,13],[7.2,7.6,20.4],74,.05),Yt([6.6,1.5,12.6],[7.3,7.2,20.8],56,.07));return o.eye=eo(o.eye,t),o}},{name:"master",ui:"master",look:{letterbox:.55,exposure:1.12,focus:8,aperture:.6,vignette:.3,shafts:.5},cam(e){let t=[Math.sin(e*.17)*.05,Math.sin(e*.29)*.02,-.35*(1-Math.exp(-e/16))],o=Nr(Yt([7,3.6,43.7],[7,3.85,Yh[2]],74),Yt([7,3.6,41.3],[7,3.95,Yh[2]],46));return o.eye=eo(o.eye,t),o}},{name:"story",ui:"story",look:{letterbox:.55,exposure:1,focus:8.1,aperture:.9,vignette:.4,shafts:.4},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],o=Nr(Yt([7,3.9,40.3],[7,1.35,Yh[2]],76),Yt([6.3,3.6,41.2],[3.7,3.95,Yh[2]],46,-.008));return o.eye=eo(o.eye,t),o}},{name:"leaf",ui:"leaf",look:{letterbox:.55,exposure:1.15,focus:1.25,aperture:1.3,vignette:.35,shafts:.4},cam(e){let t=[Math.sin(e*.2)*.02,Math.sin(e*.3)*.006,0],o=Nr(Yt([7.15,.15,46],[7.3,.04,Oa[2]],50),Yt([7.05,.14,45.9],[7.25,.05,Oa[2]],32));return o.eye=eo(o.eye,t),o}},{name:"steps",ui:"steps",look:{letterbox:.9,exposure:1.2,focus:1.6,aperture:1.4,vignette:.4,shafts:.4},cam(e){let t=[Math.sin(e*.2)*.015,0,0],o=Nr(Yt([7.15,.1,46.3],[7.05,.1,Xd],50),Yt([7.1,.12,45.85],[7,.2,Xd],30));return o.eye=eo(o.eye,t),o}},{name:"float",ui:"float",look:{letterbox:.55,exposure:1.1,focus:2.2,aperture:.8,vignette:.3,shafts:.6},cam(e){let t=[Math.sin(e*.17)*.05,Math.sin(e*.27)*.02,0],o=Nr(Yt([7.3,.85,45.65],[7.6,1.38,47.1],64),Yt([7.25,.82,45.8],[7.65,1.35,47.1],44));return o.eye=eo(o.eye,t),o}},{name:"painting1",ui:"p1",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],o=Nr(Yt([Xs[0],2.3,46.85],[Xs[0],1.25,Xs[2]],74),Yt([Xs[0]-.6,2.55,46.85],[Xs[0]+1.9,2.9,Xs[2]],46,.008));return o.eye=eo(o.eye,t),o}},{name:"painting2",ui:"p2",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],o=Nr(Yt([Ys[0],1.95,46.85],[Ys[0],1,Ys[2]],74),Yt([Ys[0]-.6,2.1,46.85],[Ys[0]+1.9,2.75,Ys[2]],46,.008));return o.eye=eo(o.eye,t),o}},{name:"painting3",ui:"p3",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.9},cam(e){let t=[Math.sin(e*.15)*.04,Math.sin(e*.25)*.015,0],o=Nr(Yt([Ks[0],1.4,46.85],[Ks[0],.6,Ks[2]],74),Yt([Ks[0]-.6,1.45,46.85],[Ks[0]+1.9,2,Ks[2]],46,.008));return o.eye=eo(o.eye,t),o}},{name:"door",ui:"door",look:{letterbox:.8,exposure:1.05,focus:1.45,aperture:1.1,vignette:.35,shafts:1},cam(e){let t=[Math.sin(e*.2)*.02,Math.sin(e*.3)*.006,0],o=Nr(Yt([34.75,.5,44.15],[nr.x1,.8,43.95],66),Yt([34.75,.45,44.3],[nr.x1,.35,43.95],50));return o.eye=eo(o.eye,t),o}},...lr.map((e,t)=>({name:"hall"+t,ui:"h"+t,look:{letterbox:.55,exposure:1,focus:7.6,aperture:.7,vignette:.35,shafts:.7},cam(o){let n=[Math.sin(o*.15)*.04,Math.sin(o*.25)*.015,Math.sin(o*.11)*.04],r=wS(e);return r.eye=eo(r.eye,n),r}})),{name:"rest",ui:"end",look:{letterbox:.55,exposure:1.05,focus:2.4,aperture:.5,vignette:.4,shafts:1.15},cam(e){let t=e*.025,o=Nr(Yt([7.75,2.6,18.6],[7.89,0,19.08],60),Yt([7.75,2.3,18.45],[7.89,0,19.08],46)),n=o.eye[0]-ns[0],r=o.eye[2]-ns[2];return o.eye=[ns[0]+n*Math.cos(t)-r*Math.sin(t),o.eye[1],ns[2]+n*Math.sin(t)+r*Math.cos(t)],o}}],ES=[1,.96,.88];function zb(e,t){return{dur:t,cam(o,n,r){let a=fn(o),i=Qs(n,r,a),s=lr[e].side==="left"?1:-1;return i.eye=eo(i.eye,[s*.6*Math.sin(Math.PI*a),.15*Math.sin(Math.PI*a),0]),i},look(o,n,r){let a={};for(let i in r)typeof r[i]=="number"&&(a[i]=De(n[i],r[i],o));return a.aperture=De(n.aperture,r.aperture,o)*(1-.5*Math.sin(Math.PI*o)),a},leaf(o){let n=fn(o),r=ya(lr[e]),a=ya(lr[e+1]),i=lr[e].side==="left"?1:-1,s=eo(Io(r,a,.5),[i*1.2,.5,0]),c=yn([r,Io(r,s,.6),s,Io(a,s,.6),a],n);return{phase:"fly",pos:eo(c,[0,Math.sin(o*Math.PI*5)*.07*Math.sin(Math.PI*o),0]),tumble:.5+.35*Math.sin(Math.PI*o)}}}}var Vd=[{dur:6.2,cam(e,t,o){if(e<.5){let s=dS(e/.5),c=Io(t.eye,[nr.x1-3.2,2.6,nr.zc],s),f=Io(t.target,pS,Oe(0,.6,e/.5));return Yt(c,f,De(t.fov,t.fov-8,s),De(t.roll,.04,s))}let n=Wd((e-.5)/.5),r=[[ta.cx+.4,10.4,ta.zc+.6],[ta.cx-.6,7.6,ta.zc+1.3],[ta.cx-1.9,4.6,ta.zc+1.75],o.eye],a=[[ta.cx-.1,0,ta.zc-.2],[ta.cx-1,.4,ta.zc-.1],[ta.cx-1.1,.8,ta.zc-.2],o.target];return Yt(yn(r,n),yn(a,n),De(o.fov+14,o.fov,n),De(-.25,o.roll,n))},look(e,t,o){let n=Oe(.22,.5,e),r=1-Oe(.5,.74,e);return{fade:e<.5?n:r,fadeColor:ES,exposure:De(t.exposure,o.exposure,Oe(.5,.9,e))*(1+2.2*(e<.5?Oe(.15,.5,e):1-Oe(.5,.8,e))),letterbox:De(t.letterbox,o.letterbox,Oe(.3,.7,e)),aperture:e<.5?t.aperture*(1-e*2):o.aperture*Oe(.6,1,e),focus:De(4,o.focus,Oe(.5,1,e)),shafts:De(t.shafts,o.shafts,Oe(.4,.6,e)),vignette:De(t.vignette,o.vignette,e)}},leaf(){return{phase:"home"}}},{dur:9,cam(e,t,o,n){let r=[t.eye,[15.6,2.4,8.3],[15.4,2.7,7.1],[12.6,2.6,5.4],[9.6,2,7.4],[7.6,1.6,10.6],o.eye],a=yn(r,fn(e)),i=Oe(0,.12,e)*(1-Oe(.82,1,e)),s=Io(Io(t.target,o.target,Oe(.55,1,e)),n.pos,i),c=De(t.fov,o.fov,Oe(.3,1,e))-6*Math.sin(Math.PI*e),f=De(t.roll,o.roll,e)+.05*Math.sin(Math.PI*2*e);return Yt(a,s,c,f)},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{exposure:De(t.exposure,o.exposure,Oe(.25,.75,e)),letterbox:De(t.letterbox,o.letterbox,e),focus:De(a,o.focus,Oe(.8,1,e)),aperture:De(.7,o.aperture,Oe(.8,1,e)),shafts:De(t.shafts,o.shafts,Oe(.3,.8,e)),vignette:De(t.vignette,o.vignette,e)}},leaf(e){let t=Sb(e),o=Math.sin(e*Math.PI*7)*.14*Math.sin(Math.PI*e);return{phase:"fly",pos:eo(yn(vS,t),[0,Math.sin(e*Math.PI*9)*.05*Math.sin(Math.PI*e),o]),tumble:1-.5*Oe(.8,1,e)}}},{dur:11.5,cam(e,t,o,n){let r=yn([t.eye,[7,1.9,19],[7.1,1.6,27.5],[6.9,1.1,36],[7,.7,42.5],[7.05,.5,45.7]],Oe(0,.8,e)*.6+fn(Ur(e/.8))*.4),a=yn([[7.05,.5,45.7],[7,1.2,45.3],[7,2.6,43.8],o.eye],fn(Oe(.8,1,e))),i=e<.8?r:a,s=Io(Io(t.target,n.pos,Oe(.03,.22,e)),o.target,Oe(.82,1,e)),c=De(t.fov,o.fov,Oe(.15,.7,e))-6*Oe(.6,.8,e)*(1-Oe(.85,1,e)),f=De(t.roll,o.roll,Oe(0,.6,e))-.04*Math.sin(Math.PI*e);return Yt(i,s,c,f)},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{exposure:De(t.exposure,o.exposure,Oe(.5,1,e)),letterbox:De(t.letterbox,o.letterbox,e),focus:De(a,o.focus,Oe(.84,1,e)),aperture:De(1.1,o.aperture,Oe(.84,1,e)),shafts:De(t.shafts,o.shafts,Oe(.2,.9,e)),vignette:De(t.vignette,o.vignette,Oe(.5,1,e))}},leaf(e){let t=De(Sb(e),e,.35),o=yn(mS,Oe(0,.78,t)),n=Math.sin(e*Math.PI*8)*.35*(1-Oe(.55,.76,e)),r=Oe(.7,.8,e);return{phase:"fly",pos:eo(o,[n,Math.abs(Math.cos(e*Math.PI*8))*.12*(1-r),0]),tumble:1-r,swing:n}}},{dur:2.6,cam(e,t,o){let n=fn(e),r=Qs(t,o,n);return r.eye=eo(r.eye,[0,0,-.35*Math.sin(Math.PI*n)]),r},look(e,t,o){let n=fn(e),r={};for(let a in o)typeof o[a]=="number"&&(r[a]=De(t[a],o[a],n));return r},leaf(){return{phase:"floor"}}},{dur:4.5,cam(e,t,o){let n=fn(e),r=yn([t.eye,[6.9,1.7,43.9],[7.05,.45,45.4],o.eye],n),a=Io(t.target,o.target,Oe(.1,.85,e));return Yt(r,a,De(t.fov,o.fov,Oe(.2,1,e)),De(t.roll,o.roll,n))},look(e,t,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=De(t[r],o[r],Oe(.2,1,e)));return n},leaf(){return{phase:"floor"}}},{dur:5.5,cam(e,t,o){return Qs(t,o,fn(e))},look(e,t,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=De(t[r],o[r],fn(e)));return n},leaf(){return{phase:"floor"}},walker(e){return De(Nb,Jh(),e)}},{dur:11,kick:e=>Ur((e-mc())/(1-mc())),cam(e,t,o,n){let r=mc(),a=Oe(0,r,e)*(1-Oe(r+.12,r+.35,e)),i=Cb(Math.min(e,xc)),s=eo(t.target,[(i-t.target[0])*.15*a,0,0]),c=Oe(r+.12,1,e),f=yn([t.eye,t.eye,eo(t.eye,[0,.12,-.3]),o.eye],c);return s=Io(s,n.pos,Oe(r+.06,r+.24,e)*(1-Oe(.9,1,e))),s=Io(s,o.target,Oe(.88,1,e)),Yt(f,s,De(t.fov,o.fov,c),De(t.roll,o.roll,c))},look(e,t,o,n,r){let a=mc(),i=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]),s=Oe(0,.12,e)*(1-Oe(a+.25,a+.5,e));return{letterbox:De(De(t.letterbox,o.letterbox,Oe(a,1,e)),1.75,s),exposure:De(t.exposure,o.exposure,Oe(a,1,e)),focus:e<a?t.focus:De(t.focus,i,Oe(a,a+.2,e)),aperture:De(t.aperture,o.aperture,Oe(a,1,e)),vignette:De(t.vignette,o.vignette,e),shafts:De(t.shafts,o.shafts,e)}},leaf(e){let t=Ur((e-mc())/(1-mc()));if(t<=0)return{phase:"floor"};let o=Oe(0,.85,t)*.85+Wd(Oe(0,.15,t))*.15;return{phase:"fly",pos:eo(Oa,[(Hl[0]-Oa[0])*o+Math.sin(t*9)*.08*(1-t),(Hl[1]-Oa[1])*o,(Hl[2]-Oa[2])*o+Math.sin(t*7)*.06*(1-t)]),tumble:1.3-.75*t}},walker(e){return e<.985?Cb(e):null}},{dur:9,cam(e,t,o,n){let r=fn(e),a=yn([t.eye,[9.4,1.35,45.6],[12.4,2,45.9],[15,2.45,46.5],o.eye],r),i=1-Oe(.6,.92,e),s=Io(Io(t.target,n.pos,Oe(0,.15,e)),o.target,1-i),c=De(t.fov,o.fov,Oe(.3,1,e)),f=De(t.roll,o.roll,r)+.04*Math.sin(Math.PI*e);return Yt(a,s,c,f)},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:De(t.letterbox,o.letterbox,e),exposure:De(t.exposure,o.exposure,Oe(.3,.8,e)),focus:De(a,o.focus,Oe(.6,.95,e)),aperture:De(t.aperture,o.aperture,Oe(.6,1,e)),vignette:De(t.vignette,o.vignette,e),shafts:De(t.shafts,o.shafts,Oe(.3,.8,e))}},leaf(e){let t=fn(e);return{phase:"fly",pos:eo(yn(yS,t),[0,Math.sin(e*Math.PI*5)*.08*Math.sin(Math.PI*e),Math.sin(e*Math.PI*4)*.12*Math.sin(Math.PI*e)]),tumble:.55+.4*Math.sin(Math.PI*e)}}},{dur:6.5,cam(e,t,o){let n=fn(e),r=Qs(t,o,n);return r.eye=eo(r.eye,[0,.12*Math.sin(Math.PI*n),.1*Math.sin(Math.PI*n)]),r},look(e,t,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=De(t[r],o[r],e));return n.aperture=De(t.aperture,o.aperture,e)*(1-.5*Math.sin(Math.PI*e)),n},leaf(e){let t=fn(e);return{phase:"fly",pos:eo(yn(bS,t),[0,Math.sin(e*Math.PI*4)*.07*Math.sin(Math.PI*e),0]),tumble:.5+.3*Math.sin(Math.PI*e)}}},{dur:6.5,cam(e,t,o){let n=fn(e),r=Qs(t,o,n);return r.eye=eo(r.eye,[0,.1*Math.sin(Math.PI*n),.1*Math.sin(Math.PI*n)]),r},look(e,t,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=De(t[r],o[r],e));return n.aperture=De(t.aperture,o.aperture,e)*(1-.5*Math.sin(Math.PI*e)),n},leaf(e){let t=fn(e);return{phase:"fly",pos:eo(yn([ep,[29.2,1.75,45.5],[32.2,1.5,45.4],Yd],t),[0,Math.sin(e*Math.PI*4)*.06*Math.sin(Math.PI*e),0]),tumble:.45+.25*Math.sin(Math.PI*e)}}},{dur:6,cam(e,t,o,n){let r=fn(e),a=yn([t.eye,[34.2,1.15,45.6],[34.5,.7,44.8],o.eye],r),i=Oe(.05,.3,e)*(1-Oe(.8,1,e)),s=Io(Io(t.target,o.target,Oe(.6,1,e)),n.pos,i);return Yt(a,s,De(t.fov,o.fov,Oe(.2,1,e)),De(t.roll,o.roll,r))},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:De(t.letterbox,o.letterbox,e),exposure:De(t.exposure,o.exposure,e),focus:De(a,o.focus,Oe(.8,1,e)),aperture:De(.9,o.aperture,Oe(.8,1,e)),vignette:De(t.vignette,o.vignette,e),shafts:De(t.shafts,o.shafts,e)}},leaf(e){let t=yn([Yd,[35.3,.9,45.2],[35.75,.4,44.4],[36,.08,44.05],Ul],Oe(0,.85,e)),o=Math.sin(e*Math.PI*6)*.25*(1-Oe(.35,.82,e)),n=Oe(.78,.88,e);return{phase:"fly",pos:eo(t,[0,Math.abs(Math.cos(e*Math.PI*6))*.07*(1-n),o]),tumble:.7*(1-n),swing:o}}},{dur:12,door(e){let t=Ur((e-.02)/.09);return Wd(t)+.07*Math.sin(Ur((e-.08)/.18)*Math.PI)*(1-Ur((e-.08)/.3))},cam(e,t,o,n){let r=Math.sin(e*340)*.012*Oe(.02,.05,e)*(1-Oe(.08,.16,e)),a=Oe(.06,1,e),i=yn([t.eye,[34.3,1,43.6],[31.5,1.9,43.4],[26.5,2.4,43.6],[21,2.6,43.6],[16.5,2.8,43.2],[12.6,3.1,41.2],[9.6,3.4,38],o.eye],a*.55+fn(a)*.45),s=eo(n.pos,[1,-.2,-1.45]);i=Io(i,s,Oe(.1,.22,e)*(1-Oe(.52,.72,e)));let c=Oe(.06,.16,e)*(1-Oe(.86,1,e)),f=Io(t.target,n.pos,c);f=Io(f,o.target,Oe(.86,1,e));let l=De(t.fov,o.fov,Oe(.1,1,e))+6*Math.sin(Math.PI*Oe(.08,.9,e)),u=De(t.roll,o.roll,e)+.06*Math.sin(Math.PI*2*Oe(.1,.9,e))+r;return Yt(eo(i,[0,r,0]),f,l,u)},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]),i=Oe(.02,.06,e)*(1-Oe(.08,.3,e));return{letterbox:De(t.letterbox,o.letterbox,Oe(.1,.4,e)),exposure:De(t.exposure,o.exposure,e)*(1+.8*i),focus:De(a,o.focus,Oe(.86,1,e)),aperture:De(.8,o.aperture,Oe(.86,1,e)),vignette:De(t.vignette,o.vignette,e),shafts:De(t.shafts,o.shafts,e)+i}},leaf(e){let t=Ur((e-.05)/.95);if(t<=0)return{phase:"floor"};let o=yn(_S(),t*.6+fn(t)*.4),n=Math.sin(e*Math.PI*9)*.12*Math.sin(Math.PI*t);return{phase:"fly",pos:eo(o,[0,n*.6,n]),tumble:1.4-.8*t}}},...[0,1].map(e=>zb(e,7.5)),{dur:10,cam(e,t,o,n){let r=fn(e),a=yn([t.eye,[7.6,3.2,16.2],[7,2.9,17.2],[6.5,3.2,16],o.eye],r),i=Oe(0,.15,e)*(1-Oe(.85,1,e)),s=Io(Io(t.target,o.target,Oe(.5,1,e)),n.pos,i);return Yt(a,s,De(t.fov,o.fov,r)+4*Math.sin(Math.PI*r),De(t.roll,o.roll,r))},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:De(t.letterbox,o.letterbox,e),exposure:De(t.exposure,o.exposure,e),focus:De(a,o.focus,Oe(.85,1,e)),aperture:De(.6,o.aperture,Oe(.85,1,e)),vignette:De(t.vignette,o.vignette,e),shafts:De(t.shafts,o.shafts,e)}},leaf(e){let t=fn(e),o=yn(MS(),t);return{phase:"fly",pos:eo(o,[0,Math.sin(e*Math.PI*6)*.06*Math.sin(Math.PI*e),0]),tumble:.6+.4*Math.sin(Math.PI*e)}}},...[3,4].map(e=>zb(e,7.5)),{dur:10,cam(e,t,o,n){let r=fn(e),a=yn([t.eye,[7.6,4,30.5],[7.3,4.4,25.5],[7.1,4,21.8],o.eye],r),i=Oe(0,.2,e)*(1-Oe(.9,1,e)),s=Io(Io(t.target,o.target,Oe(.5,1,e)),n.pos,i);return Yt(a,s,De(t.fov,o.fov,r),De(t.roll,o.roll,r))},look(e,t,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:De(t.letterbox,o.letterbox,e),exposure:De(t.exposure,o.exposure,e),focus:De(a,o.focus,Oe(.85,1,e)),aperture:De(.7,o.aperture,Oe(.85,1,e)),vignette:De(t.vignette,o.vignette,e),shafts:De(t.shafts,o.shafts,e)}},leaf(e){let t=yn(kS(),Oe(0,.86,e)),o=Math.sin(e*Math.PI*7)*.3*(1-Oe(.4,.84,e)),n=Oe(.8,.9,e);return{phase:"fly",pos:eo(t,[o,Math.abs(Math.cos(e*Math.PI*7))*.08*(1-n),0]),tumble:.8*(1-n),swing:o}}}],Kd=9.2,xc=.72;function Cb(e){return e<xc?De(Jh(),Kd,e/xc):De(Kd,gS,(e-xc)/(1-xc))}function mc(){return xc*Ur((Oa[0]+.15-Jh())/(Kd-Jh()))}var Zh={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},Kh=e=>Object.assign({},Zh,os[e].look),SS=`
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
`;function Hr(e,t,o){let n=document.createElement(e);return t&&(n.className=t),o!==void 0&&(n.innerHTML=o),n}var Vs=e=>String(e).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function Qh(e,t,o){e.querySelectorAll(".tour-line").forEach((n,r)=>{n.style.transitionDelay=(t+r*o).toFixed(2)+"s"})}Rb.exports=function(t){let o=/tourdebug/.test(location.search),{fps:n}=t;if(!document.querySelector("link[data-tour-font]")){let U=document.createElement("link");U.rel="stylesheet",U.href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&display=swap",U.setAttribute("data-tour-font",""),document.head.appendChild(U)}let r=Fd(),a=null;fetch("res/hand.json").then(U=>U.ok?U.json():null).then(U=>{a=U}).catch(()=>{});let i=document.createElement("style");i.textContent=SS+`
	.hand-text { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); clip-path: inset(50%); white-space: normal; }
	.tour-body canvas.hand { display: block; cursor: pointer; }`,i.textContent+=`
	body.touring #museum-mobile-controls,
	body.touring .painting-plaque { display: none !important; }`,document.head.appendChild(i);let s=Hr("div","tour");s.setAttribute("role","region"),s.setAttribute("aria-label","Guided tour of the gallery. Swipe, scroll or press the arrow keys to move on.");let c=Hr("div","tour-mark",Vs(Vh.name)),f=Hr("button","tour-free","Explore freely");f.type="button";let l=Hr("div","tour-links",Ud.icons("tour-icon"));l.insertBefore(Dd()("tour-icon"),l.firstChild),l.insertBefore(Th().button("tour-icon"),l.firstChild.nextSibling);let u=Hr("button","tour-free tour-note",'<svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 4c-7 1-11.5 5.5-13 13l-1.5 3 3-1.5c7.500-1.500 12-6 13-13z"/><path d="M5.5 20L13 12.500"/></svg><span>Leave a note</span>');u.type="button",u.setAttribute("aria-label","Leave a note: go to the piano room and the confessional"),l.appendChild(u),Xh&&l.appendChild(f);let h=Hr("div","tour-progress",os.map(()=>"<i></i>").join("")),d=Hr("div","tour-hint",'<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M6 15l6-6 6 6"></path></svg><span></span>'),v=d.querySelector("span"),p=Hr("div","tour-card tour-intro",`
		<span class="tour-line tour-kicker">A virtual gallery</span>
		<span class="tour-rule"></span>
		<h1 class="tour-line tour-title">${Vs(Vh.name)}</h1>
		<span class="tour-line tour-sub tour-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</span>`);Qh(p,.4,.35);let m=Vh.text.split(/\n\s*\n/).map(U=>`<p class="tour-line">${Vs(U.trim())}</p>`).join(""),g=Hr("div","tour-card tour-about",`
		<span class="tour-line tour-kicker">The artist</span>
		<h2 class="tour-line tour-title">${Vs(Vh.title)}</h2>
		<span class="tour-rule"></span>
		${Ud.line("tour-line tour-contact")}
		${m}`);Qh(g,.25,.28);let y=Hr("div","tour-card tour-sky",`
		<span class="tour-line tour-sub">Every painting here waits for the light.</span>`);Qh(y,.6,.3);let b=Hr("div","tour-card tour-master","");function k(U){let le=Hr("div","tour-card tour-story",`
			<span class="tour-line tour-kicker"></span>
			<h2 class="tour-title tour-letters"></h2>
			<span class="tour-rule"></span>
			<span class="tour-line visit-row"></span>
			<div class="tour-body"></div>`),Be=le.querySelector(".tour-title"),ot=le.querySelector(".tour-body");return le.filled=!1,le.body=ot,le.fill=()=>{let nt=U();if(!nt||le.filled)return;le.filled=!0;let Vo=nt.title||"";le.querySelector(".tour-kicker").textContent=fS(nt)||"Oil on canvas";let Ln=le.querySelector(".visit-row");Ln.innerHTML=Bd.button(nt),Ln.hidden=!Ln.innerHTML;let gr=Ln.querySelector(".visit-btn");gr&&(gr.addEventListener("click",nn=>{nn.stopPropagation(),Bd.open(nt)}),le.warm=()=>Bd.warm(nt));let Uo=Id().button(nt);Uo&&(Ln.appendChild(Uo),Ln.hidden=!1);let Pr=0;Be.innerHTML=Vo.split(" ").map(nn=>'<span class="tour-word">'+nn.split("").map(Co=>`<span style="transition-delay:${(.35+Pr++*.045).toFixed(3)}s">${Vs(Co)}</span>`).join("")+"</span>").join(" "),Be.setAttribute("aria-label",Vo);let Zo=.35+Vo.length*.045+.2;le.querySelector(".tour-rule").style.transitionDelay=Zo.toFixed(2)+"s";let So=String(nt.description||"").split(/\n\s*\n/).filter(nn=>nn.trim());if(le.querySelector(".tour-kicker").style.transitionDelay="0.1s",a&&So.length){ot.innerHTML=So.map(Xn=>`<p class="hand-text">${Vs(Xn.trim())}</p>`).join("")+'<div class="hand-wrap"><canvas class="hand" aria-hidden="true"></canvas></div>';let nn=ot.querySelector("canvas"),Co=So.map(Xn=>Xn.trim()).join(`

`),$n=!1,xr=!1,rr=0;ot.addEventListener("wheel",()=>{$n=!0},{passive:!0}),ot.addEventListener("touchmove",()=>{$n=!0},{passive:!0});let rn=parseFloat(getComputedStyle(ot).fontSize)||17,ar=r(nn,a,{ink:"rgba(244,236,223,0.93)",shadow:"rgba(0,0,0,0.55)",shadowBlur:7,xh:Math.max(8.5,rn*.56),width:.14,speed:80,pace:.12,minDur:.022,maxTime:Xn=>3.5+Xn.length/420,seed:3+Vo.length,onPen:Xn=>{if($n)return;let co=Xn-ot.clientHeight*.55;co>ot.scrollTop+4&&(ot.scrollTop+=Math.min(16,co-ot.scrollTop))}});nn.addEventListener("click",Xn=>{Xn.stopPropagation(),clearTimeout(rr),xr?ar.finish():(xr=!0,ar.write(Co,!0))}),le.write=()=>{if(clearTimeout(rr),$n=!1,xr){ar.write(Co,!0);return}ar.write("",!0),rr=setTimeout(()=>{xr=!0,ar.write(Co)},Zo*.6*1e3)},le.stopWrite=()=>{clearTimeout(rr),ar.stop()};let yr=0;window.addEventListener("resize",()=>{clearTimeout(yr),yr=setTimeout(()=>{xr&&le.classList.contains("on")&&ar.write(Co,!0)},250)})}else ot.innerHTML=So.map(nn=>`<p class="tour-line">${Vs(nn.trim())}</p>`).join(""),ot.querySelectorAll(".tour-line").forEach((nn,Co)=>{nn.style.transitionDelay=(Zo+.3+Math.min(Co,6)*.35).toFixed(2)+"s"})},le}let E=()=>t.paintings?t.paintings():[],L=U=>E().find(le=>le.side==="corridor"&&Math.abs(le.paintingPosition[0]-U)<.5),N=k(()=>E().find(U=>U.side==="end")),W=()=>Hr("div","tour-card",""),O=k(()=>L(Xs[0])),te=k(()=>L(Ys[0])),D=k(()=>L(Ks[0])),re=lr.map(U=>k(()=>E().find(le=>le.side===U.side&&Math.abs(le.paintingPosition[2]-U.z)<.5))),q=Hr("div","tour-card tour-endcard",`
		<span class="tour-line tour-kicker">Thank you for walking with me</span>
		<span class="tour-rule"></span>
		<span class="tour-line tour-sub">${Xh?"The rest of the gallery is yours to wander.":"Swipe back to return to any painting."}</span>
		<span class="tour-line tour-sub tour-confess-line">Before you leave, the confessional is open.<br>Leave me a note; no one else will read it.</span>
		<div class="tour-line tour-end"><button type="button" class="tour-btn" data-act="confess">Leave something behind</button></div>
		${Ud.line("tour-line tour-contact")}
		<div class="tour-line tour-end">
			${Xh?'<button type="button" class="tour-btn" data-act="free">Walk the gallery</button>':""}
			<button type="button" class="tour-btn quiet" data-act="list">All paintings</button>
			<button type="button" class="tour-btn quiet" data-act="replay">Replay</button>
		</div>`);Qh(q,.5,.35);let Y=[p,g,y,b,N,W(),W(),W(),O,te,D,W(),...re,q];s.append(...Y,c,l,h,d),document.body.appendChild(s);let be=Eb()({root:s,avatar:t.avatar,glyphs:()=>a,onExit:()=>{ct=-1,lt&&(ft={start:_},lt=!1)}});document.body.classList.add("touring");let qe=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,Ae=qe?"Scroll":"Swipe",he=os.map((U,le)=>le===0?qe?"Scroll to begin":"Swipe up to begin":le===1?Ae+" to follow the leaf":le===2?Ae+" to follow the light":le===3?Ae+" for its story":le===6||le===7||le===os.length-1?"":Ae+" on"),Te=[0];Vd.forEach(U=>Te.push(Te[Te.length-1]+U.dur));let dt=Te[Te.length-1],qt=210,He=95,pt=.35,St=1.4,to=.32,ao=1,Ho=1.3,Xe=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,ht=2.2,vt=.7,Zt=.9,po=!0,Lt=0,mt=0,me=0,tt=-10,zt=!1,ct=-1,Ve=0,go=0,_=0,oo=null,Wt=Object.assign({},Kh(0)),xo=os[0].cam(0),Eo={phase:"home",pos:gc.slice(),tumble:0},hn=0,mr=U=>{let le=0;for(let Be=1;Be<Te.length;Be++)Math.abs(Te[Be]-U)<Math.abs(Te[le]-U)&&(le=Be);return le};function Dn(U){let le=Y[U];le&&le.fill&&(le.fill(),le.body.scrollTop=0,le.offsetWidth),Y.forEach((Be,ot)=>{let nt=Be.classList.contains("on");Be.classList.toggle("on",ot===U),ot===U&&!nt&&Be.write&&Be.write(),ot!==U&&nt&&Be.stopWrite&&Be.stopWrite()}),le&&le.warm&&le.warm(),v.textContent=he[U]||"",d.classList.toggle("on",!!he[U])}function Fa(){Y.forEach(U=>{U.stopWrite&&U.classList.contains("on")&&U.stopWrite(),U.classList.remove("on")}),d.classList.remove("on")}let bi=null,n0=-1;function K(U){if(be.active||!po||oo)return;let le=_-tt>pt;if(tt=_,le||!bi){let Be=0,ot=dt;for(let nt=0;nt<Te.length;nt++)if(Te[nt]<=Lt-.02&&(Be=Te[nt]),Te[nt]>=Lt+.02){ot=Te[nt];break}bi={lo:Be,hi:ot}}_<n0||(zt=!1,me=Math.max(bi.lo,Math.min(bi.hi,me+U)),me=Math.max(Lt-ht,Math.min(Lt+ht,me)))}function Ne(U){if(be.active||!po||oo)return;let le=zt?me:Lt,Be;if(U>0)Be=Te.findIndex(ot=>ot>le+.05);else{Be=-1;for(let ot=Te.length-1;ot>=0;ot--)if(Te[ot]<le-.05){Be=ot;break}}Be<0||(me=Te[Be],zt=!0,tt=_)}let Ie=null,ze=U=>U.stopPropagation();["touchstart","touchmove","touchend","mousedown","mouseup","click","contextmenu"].forEach(U=>s.addEventListener(U,ze)),s.addEventListener("pointerdown",U=>{if(U.stopPropagation(),!(U.target.closest("button, a")||U.target.closest(".tour-body"))){Ie={x:U.clientX,y:U.clientY,lx:U.clientX,ly:U.clientY,t:performance.now(),moved:0,v:0,lt:performance.now()};try{s.setPointerCapture(U.pointerId)}catch(le){}}}),s.addEventListener("pointermove",U=>{if(!Ie)return;let le=U.clientX-Ie.lx,Be=U.clientY-Ie.ly;Ie.lx=U.clientX,Ie.ly=U.clientY;let ot=Math.abs(Be)>=Math.abs(le)?-Be:-le;Ie.moved+=Math.abs(ot);let nt=performance.now(),Vo=ot/He;Ie.v=Ie.v*.6+Vo/Math.max(.008,(nt-Ie.lt)/1e3)*.4,Ie.lt=nt,Ie.moved>6&&K(Vo)});let at=U=>{let le=Ie;if(Ie=null,!!le){if(be.active){le.moved<10&&performance.now()-le.t<500?be.tap():le.y-(U?U.clientY:le.ly)>30&&be.swipe(1);return}le.moved<10&&performance.now()-le.t<500?Ne(1):performance.now()-le.lt<120&&K(Math.max(-1.6,Math.min(1.6,le.v*.22)))}};s.addEventListener("pointerup",U=>{U.stopPropagation(),at(U)}),s.addEventListener("pointercancel",()=>{Ie=null}),s.addEventListener("wheel",U=>{if(be.active){if(U.target.closest(".conf-ui"))return;U.preventDefault(),be.wheel(U.deltaY);return}if(U.target.closest(".tour-body")){let Be=U.target.closest(".tour-body"),ot=Be.scrollTop+Be.clientHeight>=Be.scrollHeight-2&&U.deltaY>0,nt=Be.scrollTop<=0&&U.deltaY<0;if(!ot&&!nt)return}U.preventDefault();let le=U.deltaMode===1?U.deltaY*16:U.deltaMode===2?U.deltaY*window.innerHeight:U.deltaY;K(le/qt)},{passive:!1}),window.addEventListener("keydown",U=>{if(!po||oo||document.body.classList.contains("visiting")||document.body.classList.contains("in-conservatory")||document.body.classList.contains("cons-asking"))return;if(be.active){if(U.stopImmediatePropagation(),U.target&&/TEXTAREA|INPUT|BUTTON/.test(U.target.tagName))return;be.key(U.key)&&U.preventDefault();return}let le=U.key;if(["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(le)>=0){if((le==="Enter"||le===" ")&&U.target&&U.target.tagName==="BUTTON")return;U.preventDefault(),U.stopImmediatePropagation(),Ne(1)}else["ArrowUp","ArrowLeft","PageUp"].indexOf(le)>=0?(U.preventDefault(),U.stopImmediatePropagation(),Ne(-1)):le==="Escape"?(U.preventDefault(),kt()):/^[wasdzq]$/i.test(le)&&U.stopImmediatePropagation()},!0),window.addEventListener("keyup",U=>{po&&!oo&&/^(Arrow|[wasdzq]$)/i.test(U.key)&&U.stopImmediatePropagation()},!0),f.addEventListener("click",U=>{U.stopPropagation(),kt()}),["mousedown","pointerdown"].forEach(U=>u.addEventListener(U,le=>le.stopPropagation())),u.addEventListener("click",U=>{U.stopPropagation(),Nt()});let Mt=Yt([8.6,1.75,44.3],[-3,1.85,44.5],55,0),bt=null,lt=!1;function Nt(){if(!po||oo||be.active||bt)return;Fa(),ct=-2;let U=xo.eye;if(U[0]>.5&&U[0]<13.5&&U[2]>36&&U[2]<50){lt=!1,be.start(xo,Wt);return}bt={t:0}}q.addEventListener("click",U=>{let le=U.target.closest("button");le&&(U.stopPropagation(),le.dataset.act==="free"&&kt(),le.dataset.act==="replay"&&Bt(),le.dataset.act==="list"&&o1().show(!1),le.dataset.act==="confess"&&(Fa(),ct=-2,be.start(xo,Wt)))});let gt=[null,[ta.zc-1.6,Math.PI/2],[11.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[42.5+yc[0]-7,0],[42.5+yc[1]-7,0],[42.5+yc[2]-7,0],[1e3,Math.PI/2],...lr.map(U=>[U.z-1.6,U.side==="left"?-Math.PI/2:Math.PI/2]),[ns[2]-1.6,Math.PI]],Ht=null,_t=0;function kt(){if(!po||oo||!Xh)return;let U=mr(Lt),le=gt[U];Ht=U<=1?{phase:"home",pos:gc.slice()}:U>=3&&U<=6?{phase:"floor",pos:Oa.slice()}:U===11?{phase:"floor",pos:Ul.slice()}:U===18?{phase:"floor",pos:ns.slice()}:null,_t=U>=12?1:0,le&&n.place&&n.place(le[0],le[1]),oo={start:_,fromCam:xo,fromLook:Object.assign({},Wt)},Fa(),s.hidden=!0,document.body.classList.remove("touring"),t.onExit&&t.onExit()}function Bt(){Lt=me=0,mt=0,zt=!1,ct=-1,Ve=0,go=0,Eo={phase:"home",pos:gc.slice(),tumble:0},ft={start:_}}let ft={start:-1},no=!1,_o=[],xt={prev:null,vel:[0,0,0],axis:[1,0,0],dir:null,bank:0,rock:0,spin:0,fresh:!0};function Po(U){hn+=U*(Eo.phase==="floor"?0:1);let le=Eo.tumble===void 0?0:Eo.tumble,Be=vc.fromTranslation(_o,Eo.pos);if(Eo.phase==="home")Be=vc.rotateY(Be,Be,2.2+Math.sin(hn*.9)*.15),Be=vc.rotateZ(Be,Be,-1+Math.sin(hn*1.3)*.12),Be=vc.rotateX(Be,Be,.4);else if(Eo.phase==="floor")Be=vc.rotateY(Be,Be,.65),Be=vc.rotateX(Be,Be,.16);else{let ot=Eo.pos;if(xt.prev&&U>0){let fr=[ot[0]-xt.prev[0],ot[1]-xt.prev[1],ot[2]-xt.prev[2]];if(Math.hypot(fr[0],fr[1],fr[2])<1.5){let Tc=Math.min(1,U*6);for(let ls=0;ls<3;ls++)xt.vel[ls]+=(fr[ls]/U-xt.vel[ls])*Tc}else xt.vel=[0,0,0]}xt.prev=ot.slice();let nt=xt.vel,Vo=Math.hypot(nt[0],nt[1],nt[2]),Ln=Oe(.25,1.4,Vo),gr=Oe(.5,2,-nt[1]),Uo=hn*.35*(.3+le)+.65,Pr=[Math.cos(Uo),0,Math.sin(Uo)];Vo>.001&&(Pr=Io(Pr,Cr(nt,-1/Vo),Ln));let Zo=Math.min(1,U*4);xt.axis=Io(xt.axis,Pr,xt.fresh?1:Zo);let So=xt.axis,nn=Math.hypot(So[0],So[1],So[2])||1;So=Cr(So,1/nn);let Co=xo.eye,$n=[Co[0]-ot[0],Co[1]-ot[1],Co[2]-ot[2]],xr=Math.hypot($n[0],$n[1],$n[2])||1,rr=De(.6,.22,Ln),rn=[$n[0]/xr*rr,1+$n[1]/xr*rr,$n[2]/xr*rr],ar=So[0]*rn[0]+So[1]*rn[1]+So[2]*rn[2];rn=jd(rn,Cr(So,ar));let yr=Math.hypot(rn[0],rn[1],rn[2])||1;rn=Cr(rn,1/yr);let Xn=[So[1]*rn[2]-So[2]*rn[1],So[2]*rn[0]-So[0]*rn[2],So[0]*rn[1]-So[1]*rn[0]],co=Math.hypot(nt[0],nt[2]),Xo=0;if(co>.15&&xt.dir&&U>0){let fr=[nt[0]/co,nt[2]/co];Xo=(xt.dir[0]*fr[1]-xt.dir[1]*fr[0])/U,xt.dir=fr}else co>.15&&(xt.dir=[nt[0]/co,nt[2]/co]);xt.bank+=(Math.max(-.8,Math.min(.8,Xo*.3))*Ln-xt.bank)*Math.min(1,U*3),xt.rock+=U*(1.5+2.4*Ln),xt.spin+=U*gr*7*(.4+le);let ra=Math.sin(xt.rock)*(.26+.45*le)*(1-.5*gr)+xt.bank+xt.spin,ss=Math.sin(xt.rock*.63+1)*(.16+.3*le)+(Eo.swing||0)*.9,Ga=Math.cos(ra),cs=Math.sin(ra),Ql=eo(Cr(rn,Ga),Cr(Xn,cs)),wi=eo(Cr(Xn,Ga),Cr(rn,-cs));Ga=Math.cos(ss),cs=Math.sin(ss);let r0=eo(Cr(So,Ga),Cr(Ql,cs)),Sc=eo(Cr(Ql,Ga),Cr(So,-cs)),ru=Math.sin(xt.rock+1.5708)*.035*(.3+le)*(1-.5*Ln),ti=eo(ot,Cr(Xn,ru)),Ac=[r0[0],r0[1],r0[2],0,Sc[0],Sc[1],Sc[2],0,wi[0],wi[1],wi[2],0,ti[0],ti[1],ti[2],1];for(let fr=0;fr<16;fr++)Be[fr]=Ac[fr];xt.fresh=!1}return Eo.phase!=="fly"&&(xt.prev=null,xt.vel=[0,0,0],xt.fresh=!0,xt.spin=0,xt.bank=0,xt.dir=null),{visible:!0,model:Be}}function na(U){for(let le in Zh)Wt[le]=U[le]!==void 0?U[le]:Zh[le]}function ei(U,le){if(U<=1)return{phase:"home",pos:gc.slice(),tumble:0};let Be=Lb[U];if(Be){let ot=Be.amp;return{phase:"fly",pos:eo(Be.pos(),[Math.sin(le*.55)*ot[0],Math.sin(le*.8)*ot[1],(1-Math.cos(le*.45))*ot[2]]),tumble:Be.tumble}}return{phase:"floor",pos:(U>=18?ns:U>=10?Ul:Oa).slice(),tumble:0}}let Kt=0,so=null;function Tn(U){let le=Math.min(.1,Math.max(0,U-Kt));if(Kt=U,_=U,no||(no=!0,ft.start=U),oo)return null;if(bt&&(bt.t+=le,bt.t>=.7&&(bt=null,lt=!0,be.start(Mt,Object.assign({},Zh,{fade:1,fadeColor:[0,0,0]})))),be.active){let co=be.update(le);return xo=co.camera,na(co.look),o&&window.__camOverride&&(xo=window.__camOverride),o&&window.__lookOverride&&Object.assign(Wt,window.__lookOverride),{camera:xo,walker:null,door:1,look:Wt,leaf:Po(le)}}if(!zt&&!Ie&&_-tt>vt){let co=mr(me);Math.abs(Te[co]-me)<Zt&&(me=Te[co])}let Be=me-Lt;if(zt){let Xo=Math.sign(Be)*Math.min(ao,Math.sqrt(2*Ho*Math.abs(Be)))-mt;mt+=Math.sign(Xo)*Math.min(Math.abs(Xo),Ho*le),Lt+=mt*le,(Be>0&&Lt>=me||Be<0&&Lt<=me||Math.abs(me-Lt)<1e-4)&&(Lt=me,mt=0,zt=!1)}else{let co=uS(Lt,me,mt,to,le,3);Lt=co[0],mt=co[1],Math.abs(me-Lt)<1e-4&&Math.abs(mt)<.001&&(Lt=me,mt=0)}let ot=0;for(;ot<Vd.length-1&&Lt>=Te[ot+1];)ot++;let nt=Vd[ot],Vo=Ur((Lt-Te[ot])/nt.dur),Ln=os[ot],gr=os[ot+1],Uo=mr(Lt);Uo!==Ve&&(Ve=Uo,go=0);let Pr=Math.abs(Lt-Te[Uo])<.02;Pr&&(go+=le);let Zo=1-Oe(0,1.2,Math.abs(Lt-Te[Uo])),So=nt.leaf(Vo);if(So.pos?Eo=Object.assign({},So):Eo=Object.assign({},So,{pos:So.phase==="home"?gc.slice():(ot>=10?Ul:Oa).slice()}),Lb[Uo]&&Zo>0){let co=ei(Uo,go);Eo.pos=Io(Eo.pos,co.pos,Zo)}let nn=nt.walker&&(Vo>.01||ot===6)?nt.walker(Vo):null;so=nn==null?null:{x:nn,z:Xd,heading:Math.PI/2,phase:(nn-Nb)/xS};let Co=nt.cam(Vo,Ln.cam(0),gr.cam(0),Eo);if(Zo>0&&go>0){let co=os[Uo],Xo=co.cam(0),ra=co.cam(go);Co=Yt(eo(Co.eye,Cr(jd(ra.eye,Xo.eye),Zo)),eo(Co.target,Cr(jd(ra.target,Xo.target),Zo)),Co.fov+(ra.fov-Xo.fov)*Zo,Co.roll+(ra.roll-Xo.roll)*Zo)}if(Zo>0&&!Xe){let co=_,Xo=.006*Zo,ra=Math.sin(co*.61)*.6+Math.sin(co*1.37+1.3)*.4,ss=Math.sin(co*.47+2.1)*.6+Math.sin(co*1.13+.4)*.4,Ga=Math.sin(co*.53+4)*.5+Math.sin(co*.97+2.6)*.5;Co=Yt(eo(Co.eye,[ra*Xo,ss*Xo*.7,Ga*Xo]),eo(Co.target,[ss*Xo*1.8,ra*Xo*1.4,0]),Co.fov,Co.roll+Ga*.0012*Zo)}xo=Co;let $n=Kh(ot),xr=Kh(ot+1),rr=Object.assign({},$n,nt.look(Vo,$n,xr,Eo,Co.eye));if(Zo>0){let co=Kh(Uo);for(let Xo in co)typeof co[Xo]=="number"&&(rr[Xo]=De(rr[Xo],co[Xo],Zo))}na(rr);let ar=Pr&&Math.abs(me-Lt)<.02?Uo:-1;ar!==ct&&(ar>=0&&(n0=_+St),ct=ar,ar>=0?Dn(ar):Fa()),h.querySelectorAll("i").forEach((co,Xo)=>co.classList.toggle("on",Xo===Uo));let yr=ct>=0?Y[ct]:null;yr&&yr.fill&&!yr.filled&&(yr.fill(),yr.filled&&(yr.classList.remove("on"),yr.offsetWidth,yr.classList.add("on")));let Xn=Ur((U-ft.start)/2.6);return Xn<1&&(Wt.fade=Math.max(Wt.fade,1-Oe(0,1,Xn)),Wt.fadeColor=[0,0,0]),o&&window.__camOverride&&(xo=window.__camOverride),o&&window.__lookOverride&&Object.assign(Wt,window.__lookOverride),{camera:xo,walker:so,door:nt.door?nt.door(Vo):ot>=12?1:0,look:bt?Object.assign(Wt,{fade:Math.max(Wt.fade||0,Ur(bt.t/.6)),fadeColor:[0,0,0]}):Wt,leaf:Po(le)}}return o&&(window.__tour={go:Ne,exit:kt,wind:K,confess(){Fa(),ct=-2,be.start(xo,Wt)},note:()=>Nt(),conf:be,paper:$h().STATE,seek(U,le){Lt=me=Te[U]+(Te[U+1]-Te[U])*le,mt=0,zt=!1,tt=_+1e6,ft.start=_-10,no=!0},jump(U){Lt=me=Te[U],mt=0,zt=!1,go=0,tt=_,ft.start=_-10,no=!0},state:()=>({current:mr(Lt),scroll:+Lt.toFixed(3),target:+me.toFixed(3),shown:ct,move:Math.abs(me-Lt)>.02?{p:Lt}:null,camNow:xo,leaf:Eo,look:Wt})}),{update:Tn,get active(){return po&&!oo},handover(U){if(!oo)return null;let le=Ur((U-oo.start)/1.8);return le>=1?(po=!1,null):{from:oo.fromCam,fromLook:oo.fromLook,k:fn(le)}},restingDoor:()=>_t,restingLeaf(){return Ht?(Eo=Ht,Po(0)):null},mix:Qs,cam:Yt}}});var AS=hm(),Ia=sa(),up=o1(),Vl=Ia.reflection,TS=!1,Qb=(e,t,o,n,r)=>n+(e-t)*(r-n)/(o-t),dp=()=>Qb(window.innerWidth/window.innerHeight,16/9,9/16,1.7,Math.PI/3);navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)&&(dp=()=>Qb(window.innerWidth/window.innerHeight,16/9,9/16,1.5,Math.PI/3));var Zb=()=>2*Math.atan(Math.tan(dp()*.5)*window.innerHeight/window.innerWidth),LS=Mm(),Xl=new LS;Xl.showPanel(0);TS&&document.body.appendChild(Xl.dom);var Qo,Ec,ap,kc,ip,on;function zS(){try{let e=document.createElement("canvas"),t=e.getContext("webgl")||e.getContext("experimental-webgl");return!!(t&&t.getExtension("OES_standard_derivatives"))}catch(e){return!1}}if(!zS())throw AS.finish(),up.show(!0),new Error("This device cannot draw the 3D gallery; showing the list instead.");Qo=km()({extensions:["OES_element_index_uint","OES_standard_derivatives"],optionalExtensions:["EXT_texture_filter_anisotropic","WEBGL_depth_texture"],attributes:{alpha:!1,antialias:!1},pixelRatio:Ia.pixelRatio});location.hash==="#list"&&up.show(!1);window.addEventListener("hashchange",()=>{location.hash==="#list"&&up.show(!1)});Ec=f2()();var CS=R1();ap=CS(Qo,Ec,Vl);kc=zg()(Qo,Ec);ip=Pg()(Qo);var Ob=Ug()(Qo,Ec),Ib=ex()(Qo),Fb=nx()(Qo),Gb=bx()(Qo),Db=Ex()(Qo),$b=zx()(Qo),as=jx()(Qo),sp=ud(),Jb=Rf(),NS=Kc(),cp=pd(),nu=Jn(),bn=fh(),lp=t3(),e5=Th(),{A:Mc}=fa();on=Fy()(Ec,Zb);var e0=Dy()(Qo,Ia),rs=By()(Qo),qb=Wy()(Qo),RS=Yy()(Qo,Ia),PS=tb()(Qo,Ia),Hb=Ni()(Qo),Ub=$h()(Qo),Bb=Oi()(Qo),o0=Id();o0.init({regl:Qo,post:e0});var _c=e=>{let t=o0.draw;t&&t(e)};_c.reflect=(e,t)=>{let o=o0.draw;o&&o.reflect(e,t)};var Ja=Pb()({fps:on,paintings:()=>kc.interactables(),avatar:as,onExit:()=>on.setPaused(!1)});on.setPaused(!0);/tourdebug/.test(location.search)&&(window.__post=e0);var Zs=[],Kl=[],ba=[7,2,1.6];Ec.viewer=ba;var OS=Qo({cull:{enable:!0,face:"back"},uniforms:{view:()=>Zs,proj:()=>Kl,yScale:1,mirrorOn:()=>Vl?1:0,night:()=>nu.night,studioBake:()=>o0.bake(),candleT:Qo.context("time"),time:Qo.context("time")}}),jb=Qo({cull:{enable:!0,face:"front"},uniforms:{yScale:-1}}),t5=document.createElement("style");t5.textContent=`

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
`;document.head.appendChild(t5);var wa=document.createElement("button");wa.className="painting-plaque";wa.type="button";wa.setAttribute("aria-label","Read painting");document.body.appendChild(wa);var Rr=document.createElement("div");Rr.className="story-overlay";Rr.innerHTML=`

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

		${Jb.line("story-contact")}

		<div class="visit-row story-visit"></div>

		<p
			class="story-body"
			id="story-body"
		></p>

	</article>
`;document.body.appendChild(Rr);var is=document.createElement("div");is.className="museum-links";is.innerHTML=Jb.icons("museum-link");is.insertBefore(Dd()("museum-link"),is.firstChild);is.insertBefore(e5.button("museum-link"),is.firstChild.nextSibling);["mousedown","pointerdown","click"].forEach(e=>is.addEventListener(e,t=>t.stopPropagation()));document.body.appendChild(is);var IS=Rr.querySelector("#story-title"),FS=Rr.querySelector("#story-body"),Wb=Rr.querySelector("#story-meta"),GS=Rr.querySelector(".story-contact"),Wl=Rr.querySelector(".story-visit");Wl.addEventListener("click",e=>{e.target.closest(".visit-btn")&&t0&&cp.open(t0)});var DS=Rr.querySelector(".story-close"),t0=null,Br={p:0,target:0,last:0},o5={title:sp.title,description:sp.text,isAbout:!0},yi=null;function pp(e){e&&(t0=e,IS.textContent=e.title||"",FS.textContent=e.description||"",Wb.textContent=e.isAbout?"":NS(e),Wb.hidden=!!e.isAbout,GS.hidden=!e.isAbout,Wl.innerHTML=e.isAbout?"":cp.button(e),Wl.hidden=!Wl.innerHTML,Wl.hidden||cp.warm(e),Rr.classList.toggle("about-mode",!!e.isAbout),Rr.classList.add("open"),Br.target=e.isAbout?1:0,yi=e,wa.classList.remove("visible"),on.setPaused(!0))}function vp(){Rr.classList.remove("open"),Br.target=0,t0=null,yi=null,on.setPaused(!1)}function n5(e){e&&(e.preventDefault(),e.stopPropagation()),yi&&pp(yi)}wa.addEventListener("pointerup",n5,!0);wa.addEventListener("touchend",n5,{passive:!1,capture:!0});wa.addEventListener("click",e=>{e&&(e.preventDefault(),e.stopPropagation()),t0===null&&yi&&pp(yi)},!0);DS.addEventListener("click",vp);Rr.addEventListener("click",e=>{e.target===Rr&&vp()});window.addEventListener("keydown",e=>{e.code==="Escape"&&Rr.classList.contains("open")&&vp()});function Vb(e,t){let o=t[0],n=t[1],r=t[2];return[e[0]*o+e[4]*n+e[8]*r+e[12],e[1]*o+e[5]*n+e[9]*r+e[13],e[2]*o+e[6]*n+e[10]*r+e[14],e[3]*o+e[7]*n+e[11]*r+e[15]]}function $S(){if(t0)return;if(Ja.active){yi=null,wa.classList.remove("visible");return}let e=kc.interactables(),t=on.forward[0],o=on.forward[2],n=Math.hypot(t,o)||1,r=null,a=1/0;for(let i of e){let s=i.paintingPosition,c=0,f=0;i.side==="left"?c=1:i.side==="right"?c=-1:i.side==="corridor"?f=1:f=-1;let l=s[0]-on.pos[0],u=s[2]-on.pos[2],h=-(l*c+u*f),d=Math.abs(l*f-u*c),v=-(t*c+o*f)/n,p=i.side==="end"?11:8,m=(i.width||2)/2;v>.9&&h>.5&&h<p&&d<m+.8&&h<a&&(r=i,a=h)}if(!r){let i=on.pos[0],s=on.pos[2];t/n>.85&&i<13.6&&s>Mc.z0-.5&&s<Mc.z1+.5&&(r=Object.assign({},o5,{plaqueTitle:sp.name}))}r?(yi=r,wa.textContent=r.isAbout?"ABOUT  \xB7  "+r.plaqueTitle:"READ  \xB7  "+r.title,wa.classList.add("visible")):(yi=null,wa.classList.remove("visible"))}var mp=U0();function qS(){let e=as.state;if(!e||!e.glowPos)return null;let t=Vb(on.view(),[e.glowPos[0],e.glowPos[1]-.08,e.glowPos[2],1]),o=Vb(on.proj(),t);return o[3]<=.05?null:[(o[0]/o[3]*.5+.5)*window.innerWidth,(.5-o[1]/o[3]*.5)*window.innerHeight,o[3]]}var fp=null;window.addEventListener("pointerdown",e=>{fp={x:e.clientX,y:e.clientY,t:performance.now()}},!0);window.addEventListener("pointerup",e=>{let t=fp;if(fp=null,!t||t0||Ja.active||!e.target||!/^(CANVAS|BODY)$/.test(e.target.tagName)||Math.hypot(e.clientX-t.x,e.clientY-t.y)>12||performance.now()-t.t>600)return;let o=qS();if(!o)return;let n=!!document.pointerLockElement,r=n?window.innerWidth/2:e.clientX,a=n?window.innerHeight/2:e.clientY,i=Math.max(e.pointerType==="touch"?60:40,260/o[2]);Math.hypot(r-o[0],a-o[1])<i&&(e.preventDefault(),e.stopPropagation(),pp(o5))},!0);function HS(e){let t=Math.min(Math.max(e-Br.last,0),.1);Br.last=e;let o=t/1.6;if(Br.p=Br.target>Br.p?Math.min(1,Br.p+o):Math.max(0,Br.p-o),Br.p<=0)return;let n=Br.p<.5?2*Br.p*Br.p:1-Math.pow(-2*Br.p+2,2)/2,r=window.innerHeight>window.innerWidth,a=as.state,i=a&&a.hipsPos?a.hipsPos[0]:Mc.cx-1.2,s=a&&a.hipsPos?a.hipsPos[2]:Mc.zc,c=r?[i-2.3,2,s-.1]:[i-1.55,1.55,s+.3],f=r?[i+.1,.2,s-.1]:[i+.1,.7,s+.6],l=on.pos,u=on.forward,h=[l[0],l[1],l[2]],d=[l[0]+u[0],l[1]+u[1],l[2]+u[2]],v=(y,b)=>y.map((k,E)=>k+(b[E]-k)*n),p=[Mc.cx-6.2,1.7,Mc.zc],m=1-n,g=h.map((y,b)=>m*m*y+2*m*n*p[b]+n*n*c[b]);mp.lookAt(on.view(),g,v(d,f),[0,1,0])}var pL=o0.PREVIEW,bc={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},Js=null,Yl=!1,eu=!1;function US(e,t,o,n){let r=[o[0]-t[0],o[1]-t[1],o[2]-t[2]],a=Math.hypot(r[0],r[1],r[2])||1,i=[-r[2]/a,0,r[0]/a],s=Math.hypot(i[0],i[2])||1;i=[i[0]/s,0,i[2]/s];let c=Math.cos(n),f=Math.sin(n);return mp.lookAt(e,t,o,[i[0]*f,c,i[2]*f])}function BS(e){let t=window.innerWidth/window.innerHeight,o=e0.shot,n=Ja.active?Ja.update(e):null,r=n?null:Ja.handover(e),a=null,i=bc;if(n){a=n.camera,i=n.look,Js=n.leaf;let s=window.__walkOverride&&/tourdebug/.test(location.search)?window.__walkOverride:n.walker||null;as.setWalk(s),Yl=!!s,rs.setOpen(n.door||0)}else Js=Ja.restingLeaf(),as.setWalk(null),Yl=!1,rs.setOpen(Ja.restingDoor());if(r){let s=on.pos,c=on.forward,f=Ja.cam([s[0],s[1],s[2]],[s[0]+c[0],s[1]+c[1],s[2]+c[2]],Zb()*180/Math.PI,0);a=Ja.mix(r.from,f,r.k),i={};for(let l in bc)i[l]=Array.isArray(bc[l])?bc[l]:r.fromLook[l]+(bc[l]-r.fromLook[l])*r.k}if(a&&n&&(a=lp.apply(a,e)),!(/tourdebug/.test(location.search)&&window.__camOverride)){let s=o0.update(e,a,i);s&&(hp=s.moving!==!1,a=s,i=s.look)}if(a)US(Zs,a.eye,a.target,a.roll||0),mp.perspective(Kl,a.fov*Math.PI/180,t,.1,700),ba[0]=a.eye[0],ba[1]=a.eye[1],ba[2]=a.eye[2];else{let s=on.view(),c=on.proj();for(let h=0;h<16;h++)Zs[h]=s[h],Kl[h]=c[h];let f=s[12],l=s[13],u=s[14];ba[0]=-(s[0]*f+s[1]*l+s[2]*u),ba[1]=-(s[4]*f+s[5]*l+s[6]*u),ba[2]=-(s[8]*f+s[9]*l+s[10]*u)}for(let s in bc)o[s]=i[s];n&&lp.pull(o,e)}var oa={wake:[[0,-50,0,0],[0,-50,0,0],[0,-50,0,0],[0,-50,0,0]],wakeDir:[0,0,1],gust:[0,0],focus:6,aperture:0},tp=[9,9,9,9],Xb=[0,0,0,0],Bl=0,op=0,wc=null,Yb=0,Kb=0,jl=0;function jS(e){let t=Math.min(.1,Math.max(0,e-Yb));Yb=e,oa.focus=e0.shot.focus,oa.aperture=Ia.post>=2?e0.shot.aperture:0;for(let i=0;i<4;i++)tp[i]+=t,oa.wake[i][3]=Xb[i]*Math.exp(-tp[i]/1.1);let o=Js&&Js.visible?Js.model:null;if(o&&t>0){let i=[o[12],o[13],o[14]];if(wc){let s=[i[0]-wc[0],i[1]-wc[1],i[2]-wc[2]],c=Math.hypot(s[0],s[1],s[2]),f=c/t;if(c<1.5&&f>.12){let l=Math.min(1,t*8);for(let h=0;h<3;h++)oa.wakeDir[h]+=(s[h]/c-oa.wakeDir[h])*l;let u=Math.hypot(oa.wakeDir[0],oa.wakeDir[1],oa.wakeDir[2])||1;for(let h=0;h<3;h++)oa.wakeDir[h]/=u;if(op+=t,op>.14){op=0;let h=oa.wake[Bl];h[0]=i[0],h[1]=i[1],h[2]=i[2],Xb[Bl]=Math.min(1,(f-.12)/1.6)*.5,tp[Bl]=0,Bl=(Bl+1)%4}}}wc=i}else o||(wc=null);let n=rs.openNow?rs.openNow():0,r=t>0?(n-Kb)/t:0;Kb=n;let a=Math.max(-1,Math.min(1,r*1.2));jl+=(a-jl)*Math.min(1,t*(Math.abs(a)>Math.abs(jl)?6:.7)),oa.gust[0]+=jl*5.5*t,oa.gust[1]=Math.abs(jl)}var np=0,tu=!1,rp=0,ou=0,hp=!0,WS=/[?&]nocap\b/.test(location.search);Qo.frame(function({time:e}){if(document.body.classList.contains("visiting")){np=0;return}if(rp++,bn.zone==="studio"&&!WS&&ou>0&&e>ou){let r=hp||!nu.settled?.03333333333333333:.041666666666666664;if(e-ou<r-.006)return}ou=e;let t=Math.max(1,rp);rp=0,Xl.begin(),nu.tick(e);let o=Ja.active&&lp.resting&&nu.settled&&(Ia.isPhone||Ia.scale<1||Ia.level>0);if(o){if(tu=!tu,tu){Xl.end();return}}else tu=!1;let n=e-np;np=e,Ia.frame(o?n/2:n/t),Vl=Ia.reflection,o0.alwaysMirror&&(Vl=!0),on.tick({time:e}),HS(e),kc.update(on.pos,on.fmouse[1],dp()),$S(),BS(e),bn.update(Zs,Kl,ba),e5.listen(ba),eu=!Yl&&bn.room("stair")&&(!bn.room("court")||ba[0]<.5||ba[2]>30),as.setPiano(eu),jS(e),e0.capture(arguments[0],{view:Zs,proj:Kl,eye:ba},()=>{OS(()=>{Vl&&bn.floor&&(bn.zone==="studio"&&_c.reflect?_c.reflect(()=>jb(()=>_c({reflected:!0})),hp?2:4):jb(()=>{bn.room("studio",!0)&&_c({reflected:!0}),bn.zone!=="studio"&&(ap(),Ob({reflected:!0}),Hb(),bn.room("stair",!0)&&(Bb({reflected:!0}),Ub({reflected:!0,view:Zs})),bn.room("court",!0)&&$b(),(eu||bn.room("court",!0)||Yl)&&as(),ip(kc.batch()),bn.room("street",!0)&&Ib(),bn.room("garden",!0)&&Gb(),bn.room("florence",!0)&&Db(),qb(Js),rs(),Fb(),rs.glass())})),bn.room("studio")&&_c(),bn.zone!=="studio"&&(ap(),Ob(),Hb(),bn.room("stair")&&(Bb(),Ub({view:Zs})),bn.room("court")&&$b(),(eu||bn.room("court")||Yl)&&as(),ip(kc.batch()),bn.room("street")&&Ib(),bn.room("garden")&&(Gb(),PS()),bn.room("florence")&&Db(),qb(Js),rs(),RS(oa),Fb(),rs.glass())})}),e0.present(),Xl.end()});})();
