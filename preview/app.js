"use strict";(()=>{var xt=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var lm=xt((VE,cm)=>{"use strict";var zi=document.getElementById("loader"),Ti=zi&&zi.querySelector(".loader-name"),Yc=0,Cf=0,Of=!1,g4=performance.now(),Li=.06,Ai=0,tu=0,nm=!1,x4=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;function y4(t){if(!Ti)return;let e=Ti.offsetWidth||1,n=(e*(1.14-1.28*t)-e).toFixed(1)+"px 0";Ti.style.webkitMaskPosition=n,Ti.style.maskPosition=n}function sm(t){let e=Math.min(.05,tu?(t-tu)/1e3:.016);tu=t;let o=Of?.75:.22+(Li-Ai)*1.2;if(Ai=Math.min(Li,Ai+Math.max(0,o)*e),x4&&(Ai=Li),y4(Ai),Of&&Ai>=.999){nm||(nm=!0,setTimeout(im,650));return}requestAnimationFrame(sm)}Ti&&requestAnimationFrame(sm);function rm(){let t=Yc?Cf/Math.max(Yc,24):0;Li=Math.max(Li,Math.min(.9,.06+t*.84))}function im(){zi&&(zi.classList.add("done"),setTimeout(()=>zi.remove(),1400))}function eu(){Of||(Of=!0,window.__galleryReady=!0,zi&&(Li=1,Ti||im()))}var am=null;function b4(){clearTimeout(am),Cf>=Yc&&performance.now()-g4>600&&(am=setTimeout(()=>{Cf>=Yc&&eu()},450))}setTimeout(eu,2e4);var w4=t=>/(^|\/)(res|images)\//.test(t),Rf=window.fetch.bind(window);async function _4(t,e){let o=await Rf(t+".gz",e);if(!o.ok)throw new Error("no .gz");let n=new Uint8Array(await o.arrayBuffer());if(!(n[0]===31&&n[1]===139))return new Response(n);let r=new Blob([n]).stream().pipeThrough(new DecompressionStream("gzip")),a=await new Response(r).arrayBuffer();return new Response(a,{status:200,headers:{"Content-Type":"application/octet-stream"}})}window.fetch=function(t,e){let o=typeof t=="string"?t:t&&t.url||"";if(!w4(o))return Rf(t,e);Yc++,rm();let n=a=>(Cf++,rm(),b4(),a),r;return/\.bin$/.test(o)&&typeof DecompressionStream!="undefined"?r=_4(o,e).catch(()=>Rf(t,e)):r=Rf(t,e),r.then(n,a=>{throw n(),a})};cm.exports={finish:eu}});var y0=xt((XE,dm)=>{"use strict";var fm=typeof navigator!="undefined"&&navigator.userAgent||"",M4=typeof window!="undefined"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches&&!window.matchMedia("(any-pointer: fine)").matches,da=/Android|iPhone|iPad|iPod|Mobile|Silk|Kindle|webOS|BlackBerry|Opera Mini|IEMobile/i.test(fm)||/Macintosh/.test(fm)&&typeof navigator!="undefined"&&navigator.maxTouchPoints>1||M4,hm=typeof window!="undefined"&&window.devicePixelRatio||1,_o={isPhone:da,pixelRatio:da?Math.min(hm,1.5):Math.min(hm,2),reflection:!da,gardenDetail:da?0:1,leafShare:da?.65:1,motion:!da,post:da?1:2,level:da?1:0};_o.scale=1;var k4=da?.55:.6,Kc=0,Pf=0,Qc=0,Zc=0,Ni=1,Jc=0,If=48,Ri=null,ou=0;function S4(t){Ri={fps:t,scale:_o.scale},_o.scale>.86?_o.scale=.85:_o.reflection?_o.stepDown():_o.scale>.71?_o.scale=.7:_o.stepDown()||(_o.scale=Math.max(k4,_o.scale-.1))}var um=!0;try{/[?&]noadapt\b/.test(location.search)&&(um=!1)}catch(t){}_o.frame=t=>{if(!um)return;if(!(t>0)||t>1){Kc=0,Pf=0;return}if(Kc+=t,Pf++,Kc<.75)return;let e=Pf/Kc;if(Kc=0,Pf=0,Jc>0&&(Jc-=.75,Jc<=0&&(Ni=1)),Ri){if(e<Ri.fps*1.08&&Ri.scale>_o.scale){if(++ou>=2){_o.scale=1,Ni=1,Jc=0,If=Math.min(If,e*.85),ou=0,Qc=0,Ri=null;return}}else ou=0;Ri=null}if(e<If){if(Zc=0,++Qc>=2){if(Qc=0,_o.scale>.61&&_o.climbed){Ni=_o.scale-.05,Jc=40,_o.scale=Ni,_o.climbed=!1;return}S4(e)}}else e>Math.max(If*1.15,55)?(Qc=0,++Zc>=6&&_o.scale<Ni-.001?(_o.scale=Math.min(Ni,_o.scale+.05),_o.climbed=!0,Zc=0):Zc>=6&&(_o.climbed=!1)):(Qc=0,Zc=0)};_o.stepDown=()=>{if(_o.reflection)_o.reflection=!1;else if(_o.gardenDetail>0||_o.motion)_o.gardenDetail=0,_o.motion=!1,_o.leafShare=Math.min(_o.leafShare,.65);else if(_o.post>0)_o.post--;else return!1;return _o.level++,!0};dm.exports=_o});var nu=xt((YE,pm)=>{"use strict";pm.exports=[{file:"IMG_20250717_102753.jpg",slug:"love-me-like-i-am-already-dead",title:"Love me like I am Already Dead",medium:"Oil on canvas",size:[61,91],description:`We live in a world soaked in hypocrisy. We\u2019re told not to \u201Cspeak ill of the dead,\u201D yet we spend lifetimes speaking ill of the living. We judge, ignore, neglect\u2014and then pretend to mourn with grace when it\u2019s too late. People say beautiful things at funerals, but only after burying a lifetime of cruelty or silence.

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
but the loneliness of having no one willing to admit it happened.`}]});var $f=xt((KE,gm)=>{"use strict";var Lr={instagram:"muzammil_qureshi",email:"muzammilqureshi100@gmail.com"},vm='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/></svg>',mm='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M3.5 7l8.5 6 8.5-6"/></svg>';Lr.instagramUrl="https://instagram.com/"+Lr.instagram;Lr.mailUrl="mailto:"+Lr.email+"?subject="+encodeURIComponent("Your paintings");Lr.icons=t=>`
	<a class="${t}" href="${Lr.instagramUrl}" target="_blank" rel="noopener" aria-label="Instagram: @${Lr.instagram}" title="Instagram">${vm}</a>
	<a class="${t}" href="${Lr.mailUrl}" aria-label="Email ${Lr.email}" title="Email">${mm}</a>`;Lr.line=t=>`
	<span class="${t}">
		<a href="${Lr.instagramUrl}" target="_blank" rel="noopener">${vm}<span>@${Lr.instagram}</span></a>
		<a href="${Lr.mailUrl}">${mm}<span>${Lr.email}</span></a>
	</span>`;gm.exports=Lr});var tl=xt((QE,xm)=>{"use strict";xm.exports=t=>{if(!t)return"";let e=[];return t.medium&&e.push(t.medium),t.size&&t.size.length===2&&e.push(t.size[0]+" \xD7 "+t.size[1]+" cm"),e.join("  \xB7  ")}});var ru=xt((ZE,wm)=>{"use strict";var E4=nu(),A4=$f(),ym=tl(),T4=y0(),Ia=t=>String(t).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),z4=`
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
`,Nr=null;function L4(t){if(Nr){Nr.hidden=!1,requestAnimationFrame(()=>Nr.classList.add("on"));return}let e=document.createElement("style");e.textContent=z4,document.head.appendChild(e);let o=!T4.isPhone;Nr=document.createElement("div"),Nr.className="plist",Nr.setAttribute("role","region"),Nr.setAttribute("aria-label","All paintings"),Nr.innerHTML=`
		${t?"":'<button type="button" class="plist-close">Back to the gallery</button>'}
		<header class="plist-head">
			<h1>Muzammil</h1>
			<p class="plist-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</p>
			${A4.line("plist-contact")}
		</header>
		${t?'<p class="plist-note">This device could not open the 3D gallery, so here are the paintings on their own.</p>':""}
		<main class="plist-grid">
			${E4.map(r=>`
			<article class="plist-item" id="${Ia(r.slug)}">
				<img loading="lazy" decoding="async" alt="${Ia(r.title)}, ${Ia(ym(r))}"
					src="images/web/${Ia(r.slug)}${o?"":"-1024"}.webp"
					onerror="this.onerror=null;this.src='images/${Ia(r.file)}'">
				<p class="plist-meta">${Ia(ym(r))}</p>
				<h2>${Ia(r.title)}</h2>
				<details><summary>Read its story</summary>
					${String(r.description).split(/\n\s*\n/).map(a=>`<p>${Ia(a.trim())}</p>`).join("")}
				</details>
			</article>`).join("")}
		</main>`,["mousedown","pointerdown","click","wheel","touchstart","touchmove","keydown"].forEach(r=>Nr.addEventListener(r,a=>a.stopPropagation(),{passive:!0}));let n=Nr.querySelector(".plist-close");n&&n.addEventListener("click",bm),document.body.appendChild(Nr),requestAnimationFrame(()=>Nr.classList.add("on"))}function bm(){Nr&&(Nr.classList.remove("on"),setTimeout(()=>{Nr.hidden=!0},500),location.hash==="#list"&&history.replaceState(null,"",location.pathname+location.search))}wm.exports={show:L4,hide:bm}});var _m=xt((au,su)=>{(function(t,e){typeof au=="object"&&typeof su!="undefined"?su.exports=e():typeof define=="function"&&define.amd?define(e):t.Stats=e()})(au,function(){var t=function(){function e(v){return r.appendChild(v.dom),v}function o(v){for(var h=0;h<r.children.length;h++)r.children[h].style.display=h===v?"block":"none";n=v}var n=0,r=document.createElement("div");r.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",r.addEventListener("click",function(v){v.preventDefault(),o(++n%r.children.length)},!1);var a=(performance||Date).now(),s=a,i=0,c=e(new t.Panel("FPS","#0ff","#002")),f=e(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var l=e(new t.Panel("MB","#f08","#201"));return o(0),{REVISION:16,dom:r,addPanel:e,showPanel:o,begin:function(){a=(performance||Date).now()},end:function(){i++;var v=(performance||Date).now();if(f.update(v-a,200),v>s+1e3&&(c.update(1e3*i/(v-s),100),s=v,i=0,l)){var h=performance.memory;l.update(h.usedJSHeapSize/1048576,h.jsHeapSizeLimit/1048576)}return v},update:function(){a=this.end()},domElement:r,setMode:o}};return t.Panel=function(e,o,n){var r=1/0,a=0,s=Math.round,i=s(window.devicePixelRatio||1),c=80*i,f=48*i,l=3*i,v=2*i,h=3*i,u=15*i,p=74*i,d=30*i,m=document.createElement("canvas");m.width=c,m.height=f,m.style.cssText="width:80px;height:48px";var g=m.getContext("2d");return g.font="bold "+9*i+"px Helvetica,Arial,sans-serif",g.textBaseline="top",g.fillStyle=n,g.fillRect(0,0,c,f),g.fillStyle=o,g.fillText(e,l,v),g.fillRect(h,u,p,d),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(h,u,p,d),{dom:m,update:function(x,b){r=Math.min(r,x),a=Math.max(a,x),g.fillStyle=n,g.globalAlpha=1,g.fillRect(0,0,c,u),g.fillStyle=o,g.fillText(s(x)+" "+e+" ("+s(r)+"-"+s(a)+")",l,v),g.drawImage(m,h+i,u,p-i,d,h,u,p-i,d),g.fillRect(h+p-i,u,i,d),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(h+p-i,u,i,s((1-x/b)*d))}}},t})});var Mm=xt((iu,cu)=>{(function(t,e){typeof iu=="object"&&typeof cu!="undefined"?cu.exports=e():typeof define=="function"&&define.amd?define(e):t.createREGL=e()})(iu,function(){"use strict";var t=function(y){return y instanceof Uint8Array||y instanceof Uint16Array||y instanceof Uint32Array||y instanceof Int8Array||y instanceof Int16Array||y instanceof Int32Array||y instanceof Float32Array||y instanceof Float64Array||y instanceof Uint8ClampedArray},e=function(y,E){for(var O=Object.keys(E),et=0;et<O.length;++et)y[O[et]]=E[O[et]];return y},o=`
`;function n(y){return typeof atob!="undefined"?atob(y):"base64:"+y}function r(y){var E=new Error("(regl) "+y);throw console.error(E),E}function a(y,E){y||r(E)}function s(y){return y?": "+y:""}function i(y,E,O){y in E||r("unknown parameter ("+y+")"+s(O)+". possible values: "+Object.keys(E).join())}function c(y,E){t(y)||r("invalid parameter type"+s(E)+". must be a typed array")}function f(y,E){switch(E){case"number":return typeof y=="number";case"object":return typeof y=="object";case"string":return typeof y=="string";case"boolean":return typeof y=="boolean";case"function":return typeof y=="function";case"undefined":return typeof y=="undefined";case"symbol":return typeof y=="symbol"}}function l(y,E,O){f(y,E)||r("invalid parameter type"+s(O)+". expected "+E+", got "+typeof y)}function v(y,E){y>=0&&(y|0)===y||r("invalid parameter type, ("+y+")"+s(E)+". must be a nonnegative integer")}function h(y,E,O){E.indexOf(y)<0&&r("invalid value"+s(O)+". must be one of: "+E)}var u=["gl","canvas","container","attributes","pixelRatio","extensions","optionalExtensions","profile","onDone"];function p(y){Object.keys(y).forEach(function(E){u.indexOf(E)<0&&r('invalid regl constructor argument "'+E+'". must be one of '+u)})}function d(y,E){for(y=y+"";y.length<E;)y=" "+y;return y}function m(){this.name="unknown",this.lines=[],this.index={},this.hasErrors=!1}function g(y,E){this.number=y,this.line=E,this.errors=[]}function x(y,E,O){this.file=y,this.line=E,this.message=O}function b(){var y=new Error,E=(y.stack||y).toString(),O=/compileProcedure.*\n\s*at.*\((.*)\)/.exec(E);if(O)return O[1];var et=/compileProcedure.*\n\s*at\s+(.*)(\n|$)/.exec(E);return et?et[1]:"unknown"}function w(){var y=new Error,E=(y.stack||y).toString(),O=/at REGLCommand.*\n\s+at.*\((.*)\)/.exec(E);if(O)return O[1];var et=/at REGLCommand.*\n\s+at\s+(.*)\n/.exec(E);return et?et[1]:"unknown"}function _(y,E){var O=y.split(`
`),et=1,ht=0,J={unknown:new m,0:new m};J.unknown.name=J[0].name=E||b(),J.unknown.lines.push(new g(0,""));for(var rt=0;rt<O.length;++rt){var _t=O[rt],St=/^\s*#\s*(\w+)\s+(.+)\s*$/.exec(_t);if(St)switch(St[1]){case"line":var Lt=/(\d+)(\s+\d+)?/.exec(St[2]);Lt&&(et=Lt[1]|0,Lt[2]&&(ht=Lt[2]|0,ht in J||(J[ht]=new m)));break;case"define":var Et=/SHADER_NAME(_B64)?\s+(.*)$/.exec(St[2]);Et&&(J[ht].name=Et[1]?n(Et[2]):Et[2]);break}J[ht].lines.push(new g(et++,_t))}return Object.keys(J).forEach(function(Rt){var Gt=J[Rt];Gt.lines.forEach(function(Mt){Gt.index[Mt.number]=Mt})}),J}function M(y){var E=[];return y.split(`
`).forEach(function(O){if(!(O.length<5)){var et=/^ERROR:\s+(\d+):(\d+):\s*(.*)$/.exec(O);et?E.push(new x(et[1]|0,et[2]|0,et[3].trim())):O.length>0&&E.push(new x("unknown",0,O))}}),E}function A(y,E){E.forEach(function(O){var et=y[O.file];if(et){var ht=et.index[O.line];if(ht){ht.errors.push(O),et.hasErrors=!0;return}}y.unknown.hasErrors=!0,y.unknown.lines[0].errors.push(O)})}function $(y,E,O,et,ht){if(!y.getShaderParameter(E,y.COMPILE_STATUS)){var J=y.getShaderInfoLog(E),rt=et===y.FRAGMENT_SHADER?"fragment":"vertex";nt(O,"string",rt+" shader source must be a string",ht);var _t=_(O,ht),St=M(J);A(_t,St),Object.keys(_t).forEach(function(Lt){var Et=_t[Lt];if(!Et.hasErrors)return;var Rt=[""],Gt=[""];function Mt(Ot,X){Rt.push(Ot),Gt.push(X||"")}Mt("file number "+Lt+": "+Et.name+`
`,"color:red;text-decoration:underline;font-weight:bold"),Et.lines.forEach(function(Ot){if(Ot.errors.length>0){Mt(d(Ot.number,4)+"|  ","background-color:yellow; font-weight:bold"),Mt(Ot.line+o,"color:red; background-color:yellow; font-weight:bold");var X=0;Ot.errors.forEach(function(at){var zt=at.message,Wt=/^\s*'(.*)'\s*:\s*(.*)$/.exec(zt);if(Wt){var mt=Wt[1];switch(zt=Wt[2],mt){case"assign":mt="=";break}X=Math.max(Ot.line.indexOf(mt,X),0)}else X=0;Mt(d("| ",6)),Mt(d("^^^",X+3)+o,"font-weight:bold"),Mt(d("| ",6)),Mt(zt+o,"font-weight:bold")}),Mt(d("| ",6)+o)}else Mt(d(Ot.number,4)+"|  "),Mt(Ot.line+o,"color:red")}),typeof document!="undefined"&&!window.chrome?(Gt[0]=Rt.join("%c"),console.log.apply(console,Gt)):console.log(Rt.join(""))}),a.raise("Error compiling "+rt+" shader, "+_t[0].name)}}function R(y,E,O,et,ht){if(!y.getProgramParameter(E,y.LINK_STATUS)){var J=y.getProgramInfoLog(E),rt=_(O,ht),_t=_(et,ht),St='Error linking program with vertex shader, "'+_t[0].name+'", and fragment shader "'+rt[0].name+'"';typeof document!="undefined"?console.log("%c"+St+o+"%c"+J,"color:red;text-decoration:underline;font-weight:bold","color:red"):console.log(St+o+J),a.raise(St)}}function W(y){y._commandRef=b()}function H(y,E,O,et){W(y);function ht(St){return St?et.id(St):0}y._fragId=ht(y.static.frag),y._vertId=ht(y.static.vert);function J(St,Lt){Object.keys(Lt).forEach(function(Et){St[et.id(Et)]=!0})}var rt=y._uniformSet={};J(rt,E.static),J(rt,E.dynamic);var _t=y._attributeSet={};J(_t,O.static),J(_t,O.dynamic),y._hasCount="count"in y.static||"count"in y.dynamic||"elements"in y.static||"elements"in y.dynamic}function D(y,E){var O=w();r(y+" in command "+(E||b())+(O==="unknown"?"":" called from "+O))}function C(y,E,O){y||D(E,O||b())}function P(y,E,O,et){y in E||D("unknown parameter ("+y+")"+s(O)+". possible values: "+Object.keys(E).join(),et||b())}function nt(y,E,O,et){f(y,E)||D("invalid parameter type"+s(O)+". expected "+E+", got "+typeof y,et||b())}function yt(y){y()}function vt(y,E,O){y.texture?h(y.texture._texture.internalformat,E,"unsupported texture format for attachment"):h(y.renderbuffer._renderbuffer.format,O,"unsupported renderbuffer format for attachment")}var st=33071,it=9728,qt=9984,se=9985,ge=9986,Ve=9987,ye=5120,ho=5121,ko=5122,Ko=5123,Jt=5124,be=5125,Ce=5126,ro=32819,wo=32820,Oe=33635,we=34042,wt=36193,ie={};ie[ye]=ie[ho]=1,ie[ko]=ie[Ko]=ie[wt]=ie[Oe]=ie[ro]=ie[wo]=2,ie[Jt]=ie[be]=ie[Ce]=ie[we]=4;function Pe(y,E){return y===wo||y===ro||y===Oe?2:y===we?4:ie[y]*E}function pe(y){return!(y&y-1)&&!!y}function Qt(y,E,O){var et,ht=E.width,J=E.height,rt=E.channels;a(ht>0&&ht<=O.maxTextureSize&&J>0&&J<=O.maxTextureSize,"invalid texture shape"),(y.wrapS!==st||y.wrapT!==st)&&a(pe(ht)&&pe(J),"incompatible wrap mode for texture, both width and height must be power of 2"),E.mipmask===1?ht!==1&&J!==1&&a(y.minFilter!==qt&&y.minFilter!==ge&&y.minFilter!==se&&y.minFilter!==Ve,"min filter requires mipmap"):(a(pe(ht)&&pe(J),"texture must be a square power of 2 to support mipmapping"),a(E.mipmask===(ht<<1)-1,"missing or incomplete mipmap data")),E.type===Ce&&(O.extensions.indexOf("oes_texture_float_linear")<0&&a(y.minFilter===it&&y.magFilter===it,"filter not supported, must enable oes_texture_float_linear"),a(!y.genMipmaps,"mipmap generation not supported with float textures"));var _t=E.images;for(et=0;et<16;++et)if(_t[et]){var St=ht>>et,Lt=J>>et;a(E.mipmask&1<<et,"missing mipmap data");var Et=_t[et];if(a(Et.width===St&&Et.height===Lt,"invalid shape for mip images"),a(Et.format===E.format&&Et.internalformat===E.internalformat&&Et.type===E.type,"incompatible type for mip image"),!Et.compressed)if(Et.data){var Rt=Math.ceil(Pe(Et.type,rt)*St/Et.unpackAlignment)*Et.unpackAlignment;a(Et.data.byteLength===Rt*Lt,"invalid data for image, buffer size is inconsistent with image format")}else Et.element||Et.copy}else y.genMipmaps||a((E.mipmask&1<<et)===0,"extra mipmap data");E.compressed&&a(!y.genMipmaps,"mipmap generation for compressed images not supported")}function So(y,E,O,et){var ht=y.width,J=y.height,rt=y.channels;a(ht>0&&ht<=et.maxTextureSize&&J>0&&J<=et.maxTextureSize,"invalid texture shape"),a(ht===J,"cube map must be square"),a(E.wrapS===st&&E.wrapT===st,"wrap mode not supported by cube map");for(var _t=0;_t<O.length;++_t){var St=O[_t];a(St.width===ht&&St.height===J,"inconsistent cube map face shape"),E.genMipmaps&&(a(!St.compressed,"can not generate mipmap for compressed textures"),a(St.mipmask===1,"can not specify mipmaps and generate mipmaps"));for(var Lt=St.images,Et=0;Et<16;++Et){var Rt=Lt[Et];if(Rt){var Gt=ht>>Et,Mt=J>>Et;a(St.mipmask&1<<Et,"missing mipmap data"),a(Rt.width===Gt&&Rt.height===Mt,"invalid shape for mip images"),a(Rt.format===y.format&&Rt.internalformat===y.internalformat&&Rt.type===y.type,"incompatible type for mip image"),Rt.compressed||(Rt.data?a(Rt.data.byteLength===Gt*Mt*Math.max(Pe(Rt.type,rt),Rt.unpackAlignment),"invalid data for image, buffer size is inconsistent with image format"):Rt.element||Rt.copy)}}}}var S=e(a,{optional:yt,raise:r,commandRaise:D,command:C,parameter:i,commandParameter:P,constructor:p,type:l,commandType:nt,isTypedArray:c,nni:v,oneOf:h,shaderError:$,linkError:R,callSite:w,saveCommandRef:W,saveDrawInfo:H,framebufferFormat:vt,guessCommand:b,texture2D:Qt,textureCube:So}),io=0,Ze=0,Eo=5,Oo=6;function bn(y,E){this.id=io++,this.type=y,this.data=E}function Er(y){return y.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}function Yn(y){if(y.length===0)return[];var E=y.charAt(0),O=y.charAt(y.length-1);if(y.length>1&&E===O&&(E==='"'||E==="'"))return['"'+Er(y.substr(1,y.length-2))+'"'];var et=/\[(false|true|null|\d+|'[^']*'|"[^"]*")\]/.exec(y);if(et)return Yn(y.substr(0,et.index)).concat(Yn(et[1])).concat(Yn(y.substr(et.index+et[0].length)));var ht=y.split(".");if(ht.length===1)return['"'+Er(y)+'"'];for(var J=[],rt=0;rt<ht.length;++rt)J=J.concat(Yn(ht[rt]));return J}function K0(y){return"["+Yn(y).join("][")+"]"}function za(y,E){return new bn(y,K0(E+""))}function li(y){return typeof y=="function"&&!y._reglType||y instanceof bn}function Z(y,E){if(typeof y=="function")return new bn(Ze,y);if(typeof y=="number"||typeof y=="boolean")return new bn(Eo,y);if(Array.isArray(y))return new bn(Oo,y.map((O,et)=>Z(O,E+"["+et+"]")));if(y instanceof bn)return y;S(!1,"invalid option type in uniform "+E)}var Pt={DynamicVariable:bn,define:za,isDynamic:li,unbox:Z,accessor:K0},Dt={next:typeof requestAnimationFrame=="function"?function(y){return requestAnimationFrame(y)}:function(y){return setTimeout(y,16)},cancel:typeof cancelAnimationFrame=="function"?function(y){return cancelAnimationFrame(y)}:clearTimeout},Ct=typeof performance!="undefined"&&performance.now?function(){return performance.now()}:function(){return+new Date};function fe(){var y={"":0},E=[""];return{id:function(O){var et=y[O];return et||(et=y[O]=E.length,E.push(O),et)},str:function(O){return E[O]}}}function Te(y,E,O){var et=document.createElement("canvas");e(et.style,{border:0,margin:0,padding:0,top:0,left:0}),y.appendChild(et),y===document.body&&(et.style.position="absolute",e(y.style,{margin:0,padding:0}));function ht(){var _t=window.innerWidth,St=window.innerHeight;if(y!==document.body){var Lt=y.getBoundingClientRect();_t=Lt.right-Lt.left,St=Lt.bottom-Lt.top}et.width=O*_t,et.height=O*St,e(et.style,{width:_t+"px",height:St+"px"})}var J;y!==document.body&&typeof ResizeObserver=="function"?(J=new ResizeObserver(function(){setTimeout(ht)}),J.observe(y)):window.addEventListener("resize",ht,!1);function rt(){J?J.disconnect():window.removeEventListener("resize",ht),y.removeChild(et)}return ht(),{canvas:et,onDestroy:rt}}function Se(y,E){function O(et){try{return y.getContext(et,E)}catch(ht){return null}}return O("webgl")||O("experimental-webgl")||O("webgl-experimental")}function ve(y){return typeof y.nodeName=="string"&&typeof y.appendChild=="function"&&typeof y.getBoundingClientRect=="function"}function $e(y){return typeof y.drawArrays=="function"||typeof y.drawElements=="function"}function _e(y){return typeof y=="string"?y.split():(S(Array.isArray(y),"invalid extension array"),y)}function Xe(y){return typeof y=="string"?(S(typeof document!="undefined","not supported outside of DOM"),document.querySelector(y)):y}function Ae(y){var E=y||{},O,et,ht,J,rt={},_t=[],St=[],Lt=typeof window=="undefined"?1:window.devicePixelRatio,Et=!1,Rt=function(Ot){Ot&&S.raise(Ot)},Gt=function(){};if(typeof E=="string"?(S(typeof document!="undefined","selector queries only supported in DOM enviroments"),O=document.querySelector(E),S(O,"invalid query string for element")):typeof E=="object"?ve(E)?O=E:$e(E)?(J=E,ht=J.canvas):(S.constructor(E),"gl"in E?J=E.gl:"canvas"in E?ht=Xe(E.canvas):"container"in E&&(et=Xe(E.container)),"attributes"in E&&(rt=E.attributes,S.type(rt,"object","invalid context attributes")),"extensions"in E&&(_t=_e(E.extensions)),"optionalExtensions"in E&&(St=_e(E.optionalExtensions)),"onDone"in E&&(S.type(E.onDone,"function","invalid or missing onDone callback"),Rt=E.onDone),"profile"in E&&(Et=!!E.profile),"pixelRatio"in E&&(Lt=+E.pixelRatio,S(Lt>0,"invalid pixel ratio"))):S.raise("invalid arguments to regl"),O&&(O.nodeName.toLowerCase()==="canvas"?ht=O:et=O),!J){if(!ht){S(typeof document!="undefined","must manually specify webgl context outside of DOM environments");var Mt=Te(et||document.body,Rt,Lt);if(!Mt)return null;ht=Mt.canvas,Gt=Mt.onDestroy}rt.premultipliedAlpha===void 0&&(rt.premultipliedAlpha=!0),J=Se(ht,rt)}return J?{gl:J,canvas:ht,container:et,extensions:_t,optionalExtensions:St,pixelRatio:Lt,profile:Et,onDone:Rt,onDestroy:Gt}:(Gt(),Rt("webgl not supported, try upgrading your browser or graphics drivers http://get.webgl.org"),null)}function ze(y,E){var O={};function et(rt){S.type(rt,"string","extension name must be string");var _t=rt.toLowerCase(),St;try{St=O[_t]=y.getExtension(_t)}catch(Lt){}return!!St}for(var ht=0;ht<E.extensions.length;++ht){var J=E.extensions[ht];if(!et(J))return E.onDestroy(),E.onDone('"'+J+'" extension is not supported by the current WebGL context, try upgrading your system or a different browser'),null}return E.optionalExtensions.forEach(et),{extensions:O,restore:function(){Object.keys(O).forEach(function(rt){if(O[rt]&&!et(rt))throw new Error("(regl): error restoring extension "+rt)})}}}function Ke(y,E){for(var O=Array(y),et=0;et<y;++et)O[et]=E(et);return O}var me=5120,co=5121,No=5122,Me=5123,Go=5124,p0=5125,la=5126;function oo(y){for(var E=16;E<=1<<28;E*=16)if(y<=E)return E;return 0}function mo(y){var E,O;return E=(y>65535)<<4,y>>>=E,O=(y>255)<<3,y>>>=O,E|=O,O=(y>15)<<2,y>>>=O,E|=O,O=(y>3)<<1,y>>>=O,E|=O,E|y>>1}function $n(){var y=Ke(8,function(){return[]});function E(J){var rt=oo(J),_t=y[mo(rt)>>2];return _t.length>0?_t.pop():new ArrayBuffer(rt)}function O(J){y[mo(J.byteLength)>>2].push(J)}function et(J,rt){var _t=null;switch(J){case me:_t=new Int8Array(E(rt),0,rt);break;case co:_t=new Uint8Array(E(rt),0,rt);break;case No:_t=new Int16Array(E(2*rt),0,rt);break;case Me:_t=new Uint16Array(E(2*rt),0,rt);break;case Go:_t=new Int32Array(E(4*rt),0,rt);break;case p0:_t=new Uint32Array(E(4*rt),0,rt);break;case la:_t=new Float32Array(E(4*rt),0,rt);break;default:return null}return _t.length!==rt?_t.subarray(0,rt):_t}function ht(J){O(J.buffer)}return{alloc:E,free:O,allocType:et,freeType:ht}}var V=$n();V.zero=$n();var dt=3408,Xt=3410,ce=3411,he=3412,nn=3413,ar=3414,Ar=3415,rn=33901,br=33902,an=3379,po=3386,Kn=34921,Wo=36347,Fn=36348,Hr=35661,Br=35660,Uo=34930,v0=36349,wn=34076,O0=34024,Ao=7936,sn=7937,m0=7938,vs=35724,Q0=34047,ms=36063,of=34852,La=3553,fi=34067,Lc=34069,s1=33984,fa=6408,Nc=5126,wr=5121,Rc=36160,gs=36053,J5=36064,tb=16384,eb=function(y,E){var O=1;E.ext_texture_filter_anisotropic&&(O=y.getParameter(Q0));var et=1,ht=1;E.webgl_draw_buffers&&(et=y.getParameter(of),ht=y.getParameter(ms));var J=!!E.oes_texture_float;if(J){var rt=y.createTexture();y.bindTexture(La,rt),y.texImage2D(La,0,fa,1,1,0,fa,Nc,null);var _t=y.createFramebuffer();if(y.bindFramebuffer(Rc,_t),y.framebufferTexture2D(Rc,J5,La,rt,0),y.bindTexture(La,null),y.checkFramebufferStatus(Rc)!==gs)J=!1;else{y.viewport(0,0,1,1),y.clearColor(1,0,0,1),y.clear(tb);var St=V.allocType(Nc,4);y.readPixels(0,0,1,1,fa,Nc,St),y.getError()?J=!1:(y.deleteFramebuffer(_t),y.deleteTexture(rt),J=St[0]===1),V.freeType(St)}}var Lt=typeof navigator!="undefined"&&(/MSIE/.test(navigator.userAgent)||/Trident\//.test(navigator.appVersion)||/Edge/.test(navigator.userAgent)),Et=!0;if(!Lt){var Rt=y.createTexture(),Gt=V.allocType(wr,36);y.activeTexture(s1),y.bindTexture(fi,Rt),y.texImage2D(Lc,0,fa,3,3,0,fa,wr,Gt),V.freeType(Gt),y.bindTexture(fi,null),y.deleteTexture(Rt),Et=!y.getError()}return{colorBits:[y.getParameter(Xt),y.getParameter(ce),y.getParameter(he),y.getParameter(nn)],depthBits:y.getParameter(ar),stencilBits:y.getParameter(Ar),subpixelBits:y.getParameter(dt),extensions:Object.keys(E).filter(function(Mt){return!!E[Mt]}),maxAnisotropic:O,maxDrawbuffers:et,maxColorAttachments:ht,pointSizeDims:y.getParameter(rn),lineWidthDims:y.getParameter(br),maxViewportDims:y.getParameter(po),maxCombinedTextureUnits:y.getParameter(Hr),maxCubeMapSize:y.getParameter(wn),maxRenderbufferSize:y.getParameter(O0),maxTextureUnits:y.getParameter(Uo),maxTextureSize:y.getParameter(an),maxAttributes:y.getParameter(Kn),maxVertexUniforms:y.getParameter(Wo),maxVertexTextureUnits:y.getParameter(Br),maxVaryingVectors:y.getParameter(Fn),maxFragmentUniforms:y.getParameter(v0),glsl:y.getParameter(vs),renderer:y.getParameter(sn),vendor:y.getParameter(Ao),version:y.getParameter(m0),readFloat:J,npotTextureCube:Et}};function P0(y){return!!y&&typeof y=="object"&&Array.isArray(y.shape)&&Array.isArray(y.stride)&&typeof y.offset=="number"&&y.shape.length===y.stride.length&&(Array.isArray(y.data)||t(y.data))}var e0=function(y){return Object.keys(y).map(function(E){return y[E]})},nf={shape:ab,flatten:rb};function ob(y,E,O){for(var et=0;et<E;++et)O[et]=y[et]}function nb(y,E,O,et){for(var ht=0,J=0;J<E;++J)for(var rt=y[J],_t=0;_t<O;++_t)et[ht++]=rt[_t]}function vp(y,E,O,et,ht,J){for(var rt=J,_t=0;_t<E;++_t)for(var St=y[_t],Lt=0;Lt<O;++Lt)for(var Et=St[Lt],Rt=0;Rt<et;++Rt)ht[rt++]=Et[Rt]}function mp(y,E,O,et,ht){for(var J=1,rt=O+1;rt<E.length;++rt)J*=E[rt];var _t=E[O];if(E.length-O===4){var St=E[O+1],Lt=E[O+2],Et=E[O+3];for(rt=0;rt<_t;++rt)vp(y[rt],St,Lt,Et,et,ht),ht+=J}else for(rt=0;rt<_t;++rt)mp(y[rt],E,O+1,et,ht),ht+=J}function rb(y,E,O,et){var ht=1;if(E.length)for(var J=0;J<E.length;++J)ht*=E[J];else ht=0;var rt=et||V.allocType(O,ht);switch(E.length){case 0:break;case 1:ob(y,E[0],rt);break;case 2:nb(y,E[0],E[1],rt);break;case 3:vp(y,E[0],E[1],E[2],rt,0);break;default:mp(y,E,0,rt,0)}return rt}function ab(y){for(var E=[],O=y;O.length;O=O[0])E.push(O.length);return E}var i1={"[object Int8Array]":5120,"[object Int16Array]":5122,"[object Int32Array]":5124,"[object Uint8Array]":5121,"[object Uint8ClampedArray]":5121,"[object Uint16Array]":5123,"[object Uint32Array]":5125,"[object Float32Array]":5126,"[object Float64Array]":5121,"[object ArrayBuffer]":5121},sb=5120,ib=5122,cb=5124,lb=5121,fb=5123,hb=5125,ub=5126,db=5126,xs={int8:sb,int16:ib,int32:cb,uint8:lb,uint16:fb,uint32:hb,float:ub,float32:db},pb=35048,vb=35040,rf={dynamic:pb,stream:vb,static:35044},c1=nf.flatten,gp=nf.shape,xp=35044,mb=35040,l1=5121,f1=5126,Na=[];Na[5120]=1,Na[5122]=2,Na[5124]=4,Na[5121]=1,Na[5123]=2,Na[5125]=4,Na[5126]=4;function af(y){return i1[Object.prototype.toString.call(y)]|0}function yp(y,E){for(var O=0;O<E.length;++O)y[O]=E[O]}function bp(y,E,O,et,ht,J,rt){for(var _t=0,St=0;St<O;++St)for(var Lt=0;Lt<et;++Lt)y[_t++]=E[ht*St+J*Lt+rt]}function gb(y,E,O,et){var ht=0,J={};function rt(X){this.id=ht++,this.buffer=y.createBuffer(),this.type=X,this.usage=xp,this.byteLength=0,this.dimension=1,this.dtype=l1,this.persistentData=null,O.profile&&(this.stats={size:0})}rt.prototype.bind=function(){y.bindBuffer(this.type,this.buffer)},rt.prototype.destroy=function(){Gt(this)};var _t=[];function St(X,at){var zt=_t.pop();return zt||(zt=new rt(X)),zt.bind(),Rt(zt,at,mb,0,1,!1),zt}function Lt(X){_t.push(X)}function Et(X,at,zt){X.byteLength=at.byteLength,y.bufferData(X.type,at,zt)}function Rt(X,at,zt,Wt,mt,Yt){var bt;if(X.usage=zt,Array.isArray(at)){if(X.dtype=Wt||f1,at.length>0){var It;if(Array.isArray(at[0])){bt=gp(at);for(var gt=1,$t=1;$t<bt.length;++$t)gt*=bt[$t];X.dimension=gt,It=c1(at,bt,X.dtype),Et(X,It,zt),Yt?X.persistentData=It:V.freeType(It)}else if(typeof at[0]=="number"){X.dimension=mt;var xe=V.allocType(X.dtype,at.length);yp(xe,at),Et(X,xe,zt),Yt?X.persistentData=xe:V.freeType(xe)}else t(at[0])?(X.dimension=at[0].length,X.dtype=Wt||af(at[0])||f1,It=c1(at,[at.length,at[0].length],X.dtype),Et(X,It,zt),Yt?X.persistentData=It:V.freeType(It)):S.raise("invalid buffer data")}}else if(t(at))X.dtype=Wt||af(at),X.dimension=mt,Et(X,at,zt),Yt&&(X.persistentData=new Uint8Array(new Uint8Array(at.buffer)));else if(P0(at)){bt=at.shape;var Ie=at.stride,Ht=at.offset,Nt=0,pt=0,Ne=0,Be=0;bt.length===1?(Nt=bt[0],pt=1,Ne=Ie[0],Be=0):bt.length===2?(Nt=bt[0],pt=bt[1],Ne=Ie[0],Be=Ie[1]):S.raise("invalid shape"),X.dtype=Wt||af(at.data)||f1,X.dimension=pt;var oe=V.allocType(X.dtype,Nt*pt);bp(oe,at.data,Nt,pt,Ne,Be,Ht),Et(X,oe,zt),Yt?X.persistentData=oe:V.freeType(oe)}else at instanceof ArrayBuffer?(X.dtype=l1,X.dimension=mt,Et(X,at,zt),Yt&&(X.persistentData=new Uint8Array(new Uint8Array(at)))):S.raise("invalid buffer data")}function Gt(X){E.bufferCount--,et(X);var at=X.buffer;S(at,"buffer must not be deleted already"),y.deleteBuffer(at),X.buffer=null,delete J[X.id]}function Mt(X,at,zt,Wt){E.bufferCount++;var mt=new rt(at);J[mt.id]=mt;function Yt(gt){var $t=xp,xe=null,Ie=0,Ht=0,Nt=1;return Array.isArray(gt)||t(gt)||P0(gt)||gt instanceof ArrayBuffer?xe=gt:typeof gt=="number"?Ie=gt|0:gt&&(S.type(gt,"object","buffer arguments must be an object, a number or an array"),"data"in gt&&(S(xe===null||Array.isArray(xe)||t(xe)||P0(xe),"invalid data for buffer"),xe=gt.data),"usage"in gt&&(S.parameter(gt.usage,rf,"invalid buffer usage"),$t=rf[gt.usage]),"type"in gt&&(S.parameter(gt.type,xs,"invalid buffer type"),Ht=xs[gt.type]),"dimension"in gt&&(S.type(gt.dimension,"number","invalid dimension"),Nt=gt.dimension|0),"length"in gt&&(S.nni(Ie,"buffer length must be a nonnegative integer"),Ie=gt.length|0)),mt.bind(),xe?Rt(mt,xe,$t,Ht,Nt,Wt):(Ie&&y.bufferData(mt.type,Ie,$t),mt.dtype=Ht||l1,mt.usage=$t,mt.dimension=Nt,mt.byteLength=Ie),O.profile&&(mt.stats.size=mt.byteLength*Na[mt.dtype]),Yt}function bt(gt,$t){S($t+gt.byteLength<=mt.byteLength,"invalid buffer subdata call, buffer is too small.  Can't write data of size "+gt.byteLength+" starting from offset "+$t+" to a buffer of size "+mt.byteLength),y.bufferSubData(mt.type,$t,gt)}function It(gt,$t){var xe=($t||0)|0,Ie;if(mt.bind(),t(gt)||gt instanceof ArrayBuffer)bt(gt,xe);else if(Array.isArray(gt)){if(gt.length>0)if(typeof gt[0]=="number"){var Ht=V.allocType(mt.dtype,gt.length);yp(Ht,gt),bt(Ht,xe),V.freeType(Ht)}else if(Array.isArray(gt[0])||t(gt[0])){Ie=gp(gt);var Nt=c1(gt,Ie,mt.dtype);bt(Nt,xe),V.freeType(Nt)}else S.raise("invalid buffer data")}else if(P0(gt)){Ie=gt.shape;var pt=gt.stride,Ne=0,Be=0,oe=0,Je=0;Ie.length===1?(Ne=Ie[0],Be=1,oe=pt[0],Je=0):Ie.length===2?(Ne=Ie[0],Be=Ie[1],oe=pt[0],Je=pt[1]):S.raise("invalid shape");var Fe=Array.isArray(gt.data)?mt.dtype:af(gt.data),Ye=V.allocType(Fe,Ne*Be);bp(Ye,gt.data,Ne,Be,oe,Je,gt.offset),bt(Ye,xe),V.freeType(Ye)}else S.raise("invalid data for buffer subdata");return Yt}return zt||Yt(X),Yt._reglType="buffer",Yt._buffer=mt,Yt.subdata=It,O.profile&&(Yt.stats=mt.stats),Yt.destroy=function(){Gt(mt)},Yt}function Ot(){e0(J).forEach(function(X){X.buffer=y.createBuffer(),y.bindBuffer(X.type,X.buffer),y.bufferData(X.type,X.persistentData||X.byteLength,X.usage)})}return O.profile&&(E.getTotalBufferSize=function(){var X=0;return Object.keys(J).forEach(function(at){X+=J[at].stats.size}),X}),{create:Mt,createStream:St,destroyStream:Lt,clear:function(){e0(J).forEach(Gt),_t.forEach(Gt)},getBuffer:function(X){return X&&X._buffer instanceof rt?X._buffer:null},restore:Ot,_initBuffer:Rt}}var xb=0,yb=0,bb=1,wb=1,_b=4,Mb=4,hi={points:xb,point:yb,lines:bb,line:wb,triangles:_b,triangle:Mb,"line loop":2,"line strip":3,"triangle strip":5,"triangle fan":6},kb=0,Sb=1,Cc=4,Eb=5120,ui=5121,wp=5122,di=5123,_p=5124,ys=5125,h1=34963,Ab=35040,Tb=35044;function zb(y,E,O,et){var ht={},J=0,rt={uint8:ui,uint16:di};E.oes_element_index_uint&&(rt.uint32=ys);function _t(Ot){this.id=J++,ht[this.id]=this,this.buffer=Ot,this.primType=Cc,this.vertCount=0,this.type=0}_t.prototype.bind=function(){this.buffer.bind()};var St=[];function Lt(Ot){var X=St.pop();return X||(X=new _t(O.create(null,h1,!0,!1)._buffer)),Rt(X,Ot,Ab,-1,-1,0,0),X}function Et(Ot){St.push(Ot)}function Rt(Ot,X,at,zt,Wt,mt,Yt){Ot.buffer.bind();var bt;if(X){var It=Yt;!Yt&&(!t(X)||P0(X)&&!t(X.data))&&(It=E.oes_element_index_uint?ys:di),O._initBuffer(Ot.buffer,X,at,It,3)}else y.bufferData(h1,mt,at),Ot.buffer.dtype=bt||ui,Ot.buffer.usage=at,Ot.buffer.dimension=3,Ot.buffer.byteLength=mt;if(bt=Yt,!Yt){switch(Ot.buffer.dtype){case ui:case Eb:bt=ui;break;case di:case wp:bt=di;break;case ys:case _p:bt=ys;break;default:S.raise("unsupported type for element array")}Ot.buffer.dtype=bt}Ot.type=bt,S(bt!==ys||!!E.oes_element_index_uint,"32 bit element buffers not supported, enable oes_element_index_uint first");var gt=Wt;gt<0&&(gt=Ot.buffer.byteLength,bt===di?gt>>=1:bt===ys&&(gt>>=2)),Ot.vertCount=gt;var $t=zt;if(zt<0){$t=Cc;var xe=Ot.buffer.dimension;xe===1&&($t=kb),xe===2&&($t=Sb),xe===3&&($t=Cc)}Ot.primType=$t}function Gt(Ot){et.elementsCount--,S(Ot.buffer!==null,"must not double destroy elements"),delete ht[Ot.id],Ot.buffer.destroy(),Ot.buffer=null}function Mt(Ot,X){var at=O.create(null,h1,!0),zt=new _t(at._buffer);et.elementsCount++;function Wt(mt){if(!mt)at(),zt.primType=Cc,zt.vertCount=0,zt.type=ui;else if(typeof mt=="number")at(mt),zt.primType=Cc,zt.vertCount=mt|0,zt.type=ui;else{var Yt=null,bt=Tb,It=-1,gt=-1,$t=0,xe=0;Array.isArray(mt)||t(mt)||P0(mt)?Yt=mt:(S.type(mt,"object","invalid arguments for elements"),"data"in mt&&(Yt=mt.data,S(Array.isArray(Yt)||t(Yt)||P0(Yt),"invalid data for element buffer")),"usage"in mt&&(S.parameter(mt.usage,rf,"invalid element buffer usage"),bt=rf[mt.usage]),"primitive"in mt&&(S.parameter(mt.primitive,hi,"invalid element buffer primitive"),It=hi[mt.primitive]),"count"in mt&&(S(typeof mt.count=="number"&&mt.count>=0,"invalid vertex count for elements"),gt=mt.count|0),"type"in mt&&(S.parameter(mt.type,rt,"invalid buffer type"),xe=rt[mt.type]),"length"in mt?$t=mt.length|0:($t=gt,xe===di||xe===wp?$t*=2:(xe===ys||xe===_p)&&($t*=4))),Rt(zt,Yt,bt,It,gt,$t,xe)}return Wt}return Wt(Ot),Wt._reglType="elements",Wt._elements=zt,Wt.subdata=function(mt,Yt){return at.subdata(mt,Yt),Wt},Wt.destroy=function(){Gt(zt)},Wt}return{create:Mt,createStream:Lt,destroyStream:Et,getElements:function(Ot){return typeof Ot=="function"&&Ot._elements instanceof _t?Ot._elements:null},clear:function(){e0(ht).forEach(Gt)}}}var Mp=new Float32Array(1),Lb=new Uint32Array(Mp.buffer),Nb=5123;function kp(y){for(var E=V.allocType(Nb,y.length),O=0;O<y.length;++O)if(isNaN(y[O]))E[O]=65535;else if(y[O]===1/0)E[O]=31744;else if(y[O]===-1/0)E[O]=64512;else{Mp[0]=y[O];var et=Lb[0],ht=et>>>31<<15,J=(et<<1>>>24)-127,rt=et>>13&1023;if(J<-24)E[O]=ht;else if(J<-14){var _t=-14-J;E[O]=ht+(rt+1024>>_t)}else J>15?E[O]=ht+31744:E[O]=ht+(J+15<<10)+rt}return E}function vn(y){return Array.isArray(y)||t(y)}var Sp=function(y){return!(y&y-1)&&!!y},Rb=34467,Z0=3553,u1=34067,sf=34069,bs=6408,d1=6406,cf=6407,Oc=6409,lf=6410,Ep=32854,p1=32855,Ap=36194,Cb=32819,Ob=32820,Pb=33635,Ib=34042,v1=6402,ff=34041,m1=35904,g1=35906,pi=36193,x1=33776,y1=33777,b1=33778,w1=33779,Tp=35986,zp=35987,Lp=34798,Np=35840,Rp=35841,Cp=35842,Op=35843,Pp=36196,vi=5121,_1=5123,M1=5125,Pc=5126,$b=10242,Fb=10243,qb=10497,k1=33071,Db=33648,Gb=10240,Hb=10241,S1=9728,Bb=9729,E1=9984,Ip=9985,$p=9986,A1=9987,Ub=33170,hf=4352,jb=4353,Wb=4354,Vb=34046,Xb=3317,Yb=37440,Kb=37441,Qb=37443,Fp=37444,Ic=33984,Zb=[E1,$p,Ip,A1],uf=[0,Oc,lf,cf,bs],g0={};g0[Oc]=g0[d1]=g0[v1]=1,g0[ff]=g0[lf]=2,g0[cf]=g0[m1]=3,g0[bs]=g0[g1]=4;function mi(y){return"[object "+y+"]"}var qp=mi("HTMLCanvasElement"),Dp=mi("OffscreenCanvas"),Gp=mi("CanvasRenderingContext2D"),Hp=mi("ImageBitmap"),Bp=mi("HTMLImageElement"),Up=mi("HTMLVideoElement"),Jb=Object.keys(i1).concat([qp,Dp,Gp,Hp,Bp,Up]),gi=[];gi[vi]=1,gi[Pc]=4,gi[pi]=2,gi[_1]=2,gi[M1]=4;var sr=[];sr[Ep]=2,sr[p1]=2,sr[Ap]=2,sr[ff]=4,sr[x1]=.5,sr[y1]=.5,sr[b1]=1,sr[w1]=1,sr[Tp]=.5,sr[zp]=1,sr[Lp]=1,sr[Np]=.5,sr[Rp]=.25,sr[Cp]=.5,sr[Op]=.25,sr[Pp]=.5;function jp(y){return Array.isArray(y)&&(y.length===0||typeof y[0]=="number")}function Wp(y){if(!Array.isArray(y))return!1;var E=y.length;return!(E===0||!vn(y[0]))}function ws(y){return Object.prototype.toString.call(y)}function Vp(y){return ws(y)===qp}function Xp(y){return ws(y)===Dp}function tw(y){return ws(y)===Gp}function ew(y){return ws(y)===Hp}function ow(y){return ws(y)===Bp}function nw(y){return ws(y)===Up}function T1(y){if(!y)return!1;var E=ws(y);return Jb.indexOf(E)>=0?!0:jp(y)||Wp(y)||P0(y)}function Yp(y){return i1[Object.prototype.toString.call(y)]|0}function rw(y,E){var O=E.length;switch(y.type){case vi:case _1:case M1:case Pc:var et=V.allocType(y.type,O);et.set(E),y.data=et;break;case pi:y.data=kp(E);break;default:S.raise("unsupported texture type, must specify a typed array")}}function Kp(y,E){return V.allocType(y.type===pi?Pc:y.type,E)}function Qp(y,E){y.type===pi?(y.data=kp(E),V.freeType(E)):y.data=E}function aw(y,E,O,et,ht,J){for(var rt=y.width,_t=y.height,St=y.channels,Lt=rt*_t*St,Et=Kp(y,Lt),Rt=0,Gt=0;Gt<_t;++Gt)for(var Mt=0;Mt<rt;++Mt)for(var Ot=0;Ot<St;++Ot)Et[Rt++]=E[O*Mt+et*Gt+ht*Ot+J];Qp(y,Et)}function df(y,E,O,et,ht,J){var rt;if(typeof sr[y]!="undefined"?rt=sr[y]:rt=g0[y]*gi[E],J&&(rt*=6),ht){for(var _t=0,St=O;St>=1;)_t+=rt*St*St,St/=2;return _t}else return rt*O*et}function sw(y,E,O,et,ht,J,rt){var _t={"don't care":hf,"dont care":hf,nice:Wb,fast:jb},St={repeat:qb,clamp:k1,mirror:Db},Lt={nearest:S1,linear:Bb},Et=e({mipmap:A1,"nearest mipmap nearest":E1,"linear mipmap nearest":Ip,"nearest mipmap linear":$p,"linear mipmap linear":A1},Lt),Rt={none:0,browser:Fp},Gt={uint8:vi,rgba4:Cb,rgb565:Pb,"rgb5 a1":Ob},Mt={alpha:d1,luminance:Oc,"luminance alpha":lf,rgb:cf,rgba:bs,rgba4:Ep,"rgb5 a1":p1,rgb565:Ap},Ot={};E.ext_srgb&&(Mt.srgb=m1,Mt.srgba=g1),E.oes_texture_float&&(Gt.float32=Gt.float=Pc),E.oes_texture_half_float&&(Gt.float16=Gt["half float"]=pi),E.webgl_depth_texture&&(e(Mt,{depth:v1,"depth stencil":ff}),e(Gt,{uint16:_1,uint32:M1,"depth stencil":Ib})),E.webgl_compressed_texture_s3tc&&e(Ot,{"rgb s3tc dxt1":x1,"rgba s3tc dxt1":y1,"rgba s3tc dxt3":b1,"rgba s3tc dxt5":w1}),E.webgl_compressed_texture_atc&&e(Ot,{"rgb atc":Tp,"rgba atc explicit alpha":zp,"rgba atc interpolated alpha":Lp}),E.webgl_compressed_texture_pvrtc&&e(Ot,{"rgb pvrtc 4bppv1":Np,"rgb pvrtc 2bppv1":Rp,"rgba pvrtc 4bppv1":Cp,"rgba pvrtc 2bppv1":Op}),E.webgl_compressed_texture_etc1&&(Ot["rgb etc1"]=Pp);var X=Array.prototype.slice.call(y.getParameter(Rb));Object.keys(Ot).forEach(function(N){var ot=Ot[N];X.indexOf(ot)>=0&&(Mt[N]=ot)});var at=Object.keys(Mt);O.textureFormats=at;var zt=[];Object.keys(Mt).forEach(function(N){var ot=Mt[N];zt[ot]=N});var Wt=[];Object.keys(Gt).forEach(function(N){var ot=Gt[N];Wt[ot]=N});var mt=[];Object.keys(Lt).forEach(function(N){var ot=Lt[N];mt[ot]=N});var Yt=[];Object.keys(Et).forEach(function(N){var ot=Et[N];Yt[ot]=N});var bt=[];Object.keys(St).forEach(function(N){var ot=St[N];bt[ot]=N});var It=at.reduce(function(N,ot){var Q=Mt[ot];return Q===Oc||Q===d1||Q===Oc||Q===lf||Q===v1||Q===ff||E.ext_srgb&&(Q===m1||Q===g1)?N[Q]=Q:Q===p1||ot.indexOf("rgba")>=0?N[Q]=bs:N[Q]=cf,N},{});function gt(){this.internalformat=bs,this.format=bs,this.type=vi,this.compressed=!1,this.premultiplyAlpha=!1,this.flipY=!1,this.unpackAlignment=1,this.colorSpace=Fp,this.width=0,this.height=0,this.channels=0}function $t(N,ot){N.internalformat=ot.internalformat,N.format=ot.format,N.type=ot.type,N.compressed=ot.compressed,N.premultiplyAlpha=ot.premultiplyAlpha,N.flipY=ot.flipY,N.unpackAlignment=ot.unpackAlignment,N.colorSpace=ot.colorSpace,N.width=ot.width,N.height=ot.height,N.channels=ot.channels}function xe(N,ot){if(!(typeof ot!="object"||!ot)){if("premultiplyAlpha"in ot&&(S.type(ot.premultiplyAlpha,"boolean","invalid premultiplyAlpha"),N.premultiplyAlpha=ot.premultiplyAlpha),"flipY"in ot&&(S.type(ot.flipY,"boolean","invalid texture flip"),N.flipY=ot.flipY),"alignment"in ot&&(S.oneOf(ot.alignment,[1,2,4,8],"invalid texture unpack alignment"),N.unpackAlignment=ot.alignment),"colorSpace"in ot&&(S.parameter(ot.colorSpace,Rt,"invalid colorSpace"),N.colorSpace=Rt[ot.colorSpace]),"type"in ot){var Q=ot.type;S(E.oes_texture_float||!(Q==="float"||Q==="float32"),"you must enable the OES_texture_float extension in order to use floating point textures."),S(E.oes_texture_half_float||!(Q==="half float"||Q==="float16"),"you must enable the OES_texture_half_float extension in order to use 16-bit floating point textures."),S(E.webgl_depth_texture||!(Q==="uint16"||Q==="uint32"||Q==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),S.parameter(Q,Gt,"invalid texture type"),N.type=Gt[Q]}var Zt=N.width,to=N.height,z=N.channels,k=!1;"shape"in ot?(S(Array.isArray(ot.shape)&&ot.shape.length>=2,"shape must be an array"),Zt=ot.shape[0],to=ot.shape[1],ot.shape.length===3&&(z=ot.shape[2],S(z>0&&z<=4,"invalid number of channels"),k=!0),S(Zt>=0&&Zt<=O.maxTextureSize,"invalid width"),S(to>=0&&to<=O.maxTextureSize,"invalid height")):("radius"in ot&&(Zt=to=ot.radius,S(Zt>=0&&Zt<=O.maxTextureSize,"invalid radius")),"width"in ot&&(Zt=ot.width,S(Zt>=0&&Zt<=O.maxTextureSize,"invalid width")),"height"in ot&&(to=ot.height,S(to>=0&&to<=O.maxTextureSize,"invalid height")),"channels"in ot&&(z=ot.channels,S(z>0&&z<=4,"invalid number of channels"),k=!0)),N.width=Zt|0,N.height=to|0,N.channels=z|0;var F=!1;if("format"in ot){var j=ot.format;S(E.webgl_depth_texture||!(j==="depth"||j==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),S.parameter(j,Mt,"invalid texture format");var Y=N.internalformat=Mt[j];N.format=It[Y],j in Gt&&("type"in ot||(N.type=Gt[j])),j in Ot&&(N.compressed=!0),F=!0}!k&&F?N.channels=g0[N.format]:k&&!F?N.channels!==uf[N.format]&&(N.format=N.internalformat=uf[N.channels]):F&&k&&S(N.channels===g0[N.format],"number of channels inconsistent with specified format")}}function Ie(N){y.pixelStorei(Yb,N.flipY),y.pixelStorei(Kb,N.premultiplyAlpha),y.pixelStorei(Qb,N.colorSpace),y.pixelStorei(Xb,N.unpackAlignment)}function Ht(){gt.call(this),this.xOffset=0,this.yOffset=0,this.data=null,this.needsFree=!1,this.element=null,this.needsCopy=!1}function Nt(N,ot){var Q=null;if(T1(ot)?Q=ot:ot&&(S.type(ot,"object","invalid pixel data type"),xe(N,ot),"x"in ot&&(N.xOffset=ot.x|0),"y"in ot&&(N.yOffset=ot.y|0),T1(ot.data)&&(Q=ot.data)),S(!N.compressed||Q instanceof Uint8Array,"compressed texture data must be stored in a uint8array"),ot.copy){S(!Q,"can not specify copy and data field for the same texture");var Zt=ht.viewportWidth,to=ht.viewportHeight;N.width=N.width||Zt-N.xOffset,N.height=N.height||to-N.yOffset,N.needsCopy=!0,S(N.xOffset>=0&&N.xOffset<Zt&&N.yOffset>=0&&N.yOffset<to&&N.width>0&&N.width<=Zt&&N.height>0&&N.height<=to,"copy texture read out of bounds")}else if(!Q)N.width=N.width||1,N.height=N.height||1,N.channels=N.channels||4;else if(t(Q))N.channels=N.channels||4,N.data=Q,!("type"in ot)&&N.type===vi&&(N.type=Yp(Q));else if(jp(Q))N.channels=N.channels||4,rw(N,Q),N.alignment=1,N.needsFree=!0;else if(P0(Q)){var z=Q.data;!Array.isArray(z)&&N.type===vi&&(N.type=Yp(z));var k=Q.shape,F=Q.stride,j,Y,G,q,B,L;k.length===3?(G=k[2],L=F[2]):(S(k.length===2,"invalid ndarray pixel data, must be 2 or 3D"),G=1,L=1),j=k[0],Y=k[1],q=F[0],B=F[1],N.alignment=1,N.width=j,N.height=Y,N.channels=G,N.format=N.internalformat=uf[G],N.needsFree=!0,aw(N,z,q,B,L,Q.offset)}else if(Vp(Q)||Xp(Q)||tw(Q))Vp(Q)||Xp(Q)?N.element=Q:N.element=Q.canvas,N.width=N.element.width,N.height=N.element.height,N.channels=4;else if(ew(Q))N.element=Q,N.width=Q.width,N.height=Q.height,N.channels=4;else if(ow(Q))N.element=Q,N.width=Q.naturalWidth,N.height=Q.naturalHeight,N.channels=4;else if(nw(Q))N.element=Q,N.width=Q.videoWidth,N.height=Q.videoHeight,N.channels=4;else if(Wp(Q)){var I=N.width||Q[0].length,T=N.height||Q.length,U=N.channels;vn(Q[0][0])?U=U||Q[0][0].length:U=U||1;for(var K=nf.shape(Q),lt=1,ut=0;ut<K.length;++ut)lt*=K[ut];var ct=Kp(N,lt);nf.flatten(Q,K,"",ct),Qp(N,ct),N.alignment=1,N.width=I,N.height=T,N.channels=U,N.format=N.internalformat=uf[U],N.needsFree=!0}N.type===Pc?S(O.extensions.indexOf("oes_texture_float")>=0,"oes_texture_float extension not enabled"):N.type===pi&&S(O.extensions.indexOf("oes_texture_half_float")>=0,"oes_texture_half_float extension not enabled")}function pt(N,ot,Q){var Zt=N.element,to=N.data,z=N.internalformat,k=N.format,F=N.type,j=N.width,Y=N.height;Ie(N),Zt?y.texImage2D(ot,Q,k,k,F,Zt):N.compressed?y.compressedTexImage2D(ot,Q,z,j,Y,0,to):N.needsCopy?(et(),y.copyTexImage2D(ot,Q,k,N.xOffset,N.yOffset,j,Y,0)):y.texImage2D(ot,Q,k,j,Y,0,k,F,to||null)}function Ne(N,ot,Q,Zt,to){var z=N.element,k=N.data,F=N.internalformat,j=N.format,Y=N.type,G=N.width,q=N.height;Ie(N),z?y.texSubImage2D(ot,to,Q,Zt,j,Y,z):N.compressed?y.compressedTexSubImage2D(ot,to,Q,Zt,F,G,q,k):N.needsCopy?(et(),y.copyTexSubImage2D(ot,to,Q,Zt,N.xOffset,N.yOffset,G,q)):y.texSubImage2D(ot,to,Q,Zt,G,q,j,Y,k)}var Be=[];function oe(){return Be.pop()||new Ht}function Je(N){N.needsFree&&V.freeType(N.data),Ht.call(N),Be.push(N)}function Fe(){gt.call(this),this.genMipmaps=!1,this.mipmapHint=hf,this.mipmask=0,this.images=Array(16)}function Ye(N,ot,Q){var Zt=N.images[0]=oe();N.mipmask=1,Zt.width=N.width=ot,Zt.height=N.height=Q,Zt.channels=N.channels=4}function yo(N,ot){var Q=null;if(T1(ot))Q=N.images[0]=oe(),$t(Q,N),Nt(Q,ot),N.mipmask=1;else if(xe(N,ot),Array.isArray(ot.mipmap))for(var Zt=ot.mipmap,to=0;to<Zt.length;++to)Q=N.images[to]=oe(),$t(Q,N),Q.width>>=to,Q.height>>=to,Nt(Q,Zt[to]),N.mipmask|=1<<to;else Q=N.images[0]=oe(),$t(Q,N),Nt(Q,ot),N.mipmask=1;$t(N,N.images[0]),N.compressed&&(N.internalformat===x1||N.internalformat===y1||N.internalformat===b1||N.internalformat===w1)&&S(N.width%4===0&&N.height%4===0,"for compressed texture formats, mipmap level 0 must have width and height that are a multiple of 4")}function Mn(N,ot){for(var Q=N.images,Zt=0;Zt<Q.length;++Zt){if(!Q[Zt])return;pt(Q[Zt],ot,Zt)}}var qn=[];function ao(){var N=qn.pop()||new Fe;gt.call(N),N.mipmask=0;for(var ot=0;ot<16;++ot)N.images[ot]=null;return N}function Ln(N){for(var ot=N.images,Q=0;Q<ot.length;++Q)ot[Q]&&Je(ot[Q]),ot[Q]=null;qn.push(N)}function Vo(){this.minFilter=S1,this.magFilter=S1,this.wrapS=k1,this.wrapT=k1,this.anisotropic=1,this.genMipmaps=!1,this.mipmapHint=hf}function kn(N,ot){if("min"in ot){var Q=ot.min;S.parameter(Q,Et),N.minFilter=Et[Q],Zb.indexOf(N.minFilter)>=0&&!("faces"in ot)&&(N.genMipmaps=!0)}if("mag"in ot){var Zt=ot.mag;S.parameter(Zt,Lt),N.magFilter=Lt[Zt]}var to=N.wrapS,z=N.wrapT;if("wrap"in ot){var k=ot.wrap;typeof k=="string"?(S.parameter(k,St),to=z=St[k]):Array.isArray(k)&&(S.parameter(k[0],St),S.parameter(k[1],St),to=St[k[0]],z=St[k[1]])}else{if("wrapS"in ot){var F=ot.wrapS;S.parameter(F,St),to=St[F]}if("wrapT"in ot){var j=ot.wrapT;S.parameter(j,St),z=St[j]}}if(N.wrapS=to,N.wrapT=z,"anisotropic"in ot){var Y=ot.anisotropic;S(typeof Y=="number"&&Y>=1&&Y<=O.maxAnisotropic,"aniso samples must be between 1 and "),N.anisotropic=ot.anisotropic}if("mipmap"in ot){var G=!1;switch(typeof ot.mipmap){case"string":S.parameter(ot.mipmap,_t,"invalid mipmap hint"),N.mipmapHint=_t[ot.mipmap],N.genMipmaps=!0,G=!0;break;case"boolean":G=N.genMipmaps=ot.mipmap;break;case"object":S(Array.isArray(ot.mipmap),"invalid mipmap type"),N.genMipmaps=!1,G=!0;break;default:S.raise("invalid mipmap type")}G&&!("min"in ot)&&(N.minFilter=E1)}}function Nn(N,ot){y.texParameteri(ot,Hb,N.minFilter),y.texParameteri(ot,Gb,N.magFilter),y.texParameteri(ot,$b,N.wrapS),y.texParameteri(ot,Fb,N.wrapT),E.ext_texture_filter_anisotropic&&y.texParameteri(ot,Vb,N.anisotropic),N.genMipmaps&&(y.hint(Ub,N.mipmapHint),y.generateMipmap(ot))}var Rn=0,Qn={},ir=O.maxTextureUnits,mn=Array(ir).map(function(){return null});function Ue(N){gt.call(this),this.mipmask=0,this.internalformat=bs,this.id=Rn++,this.refCount=1,this.target=N,this.texture=y.createTexture(),this.unit=-1,this.bindCount=0,this.texInfo=new Vo,rt.profile&&(this.stats={size:0})}function cr(N){y.activeTexture(Ic),y.bindTexture(N.target,N.texture)}function To(){var N=mn[0];N?y.bindTexture(N.target,N.texture):y.bindTexture(Z0,null)}function ke(N){var ot=N.texture;S(ot,"must not double destroy texture");var Q=N.unit,Zt=N.target;Q>=0&&(y.activeTexture(Ic+Q),y.bindTexture(Zt,null),mn[Q]=null),y.deleteTexture(ot),N.texture=null,N.params=null,N.pixels=null,N.refCount=0,delete Qn[N.id],J.textureCount--}e(Ue.prototype,{bind:function(){var N=this;N.bindCount+=1;var ot=N.unit;if(ot<0){for(var Q=0;Q<ir;++Q){var Zt=mn[Q];if(Zt){if(Zt.bindCount>0)continue;Zt.unit=-1}mn[Q]=N,ot=Q;break}ot>=ir&&S.raise("insufficient number of texture units"),rt.profile&&J.maxTextureUnits<ot+1&&(J.maxTextureUnits=ot+1),N.unit=ot,y.activeTexture(Ic+ot),y.bindTexture(N.target,N.texture)}return ot},unbind:function(){this.bindCount-=1},decRef:function(){--this.refCount<=0&&ke(this)}});function no(N,ot){var Q=new Ue(Z0);Qn[Q.id]=Q,J.textureCount++;function Zt(k,F){var j=Q.texInfo;Vo.call(j);var Y=ao();return typeof k=="number"?typeof F=="number"?Ye(Y,k|0,F|0):Ye(Y,k|0,k|0):k?(S.type(k,"object","invalid arguments to regl.texture"),kn(j,k),yo(Y,k)):Ye(Y,1,1),j.genMipmaps&&(Y.mipmask=(Y.width<<1)-1),Q.mipmask=Y.mipmask,$t(Q,Y),S.texture2D(j,Y,O),Q.internalformat=Y.internalformat,Zt.width=Y.width,Zt.height=Y.height,cr(Q),Mn(Y,Z0),Nn(j,Z0),To(),Ln(Y),rt.profile&&(Q.stats.size=df(Q.internalformat,Q.type,Y.width,Y.height,j.genMipmaps,!1)),Zt.format=zt[Q.internalformat],Zt.type=Wt[Q.type],Zt.mag=mt[j.magFilter],Zt.min=Yt[j.minFilter],Zt.wrapS=bt[j.wrapS],Zt.wrapT=bt[j.wrapT],Zt}function to(k,F,j,Y){S(!!k,"must specify image data");var G=F|0,q=j|0,B=Y|0,L=oe();return $t(L,Q),L.width=0,L.height=0,Nt(L,k),L.width=L.width||(Q.width>>B)-G,L.height=L.height||(Q.height>>B)-q,S(Q.type===L.type&&Q.format===L.format&&Q.internalformat===L.internalformat,"incompatible format for texture.subimage"),S(G>=0&&q>=0&&G+L.width<=Q.width&&q+L.height<=Q.height,"texture.subimage write out of bounds"),S(Q.mipmask&1<<B,"missing mipmap data"),S(L.data||L.element||L.needsCopy,"missing image data"),cr(Q),Ne(L,Z0,G,q,B),To(),Je(L),Zt}function z(k,F){var j=k|0,Y=F|0||j;if(j===Q.width&&Y===Q.height)return Zt;Zt.width=Q.width=j,Zt.height=Q.height=Y,cr(Q);for(var G=0;Q.mipmask>>G;++G){var q=j>>G,B=Y>>G;if(!q||!B)break;y.texImage2D(Z0,G,Q.format,q,B,0,Q.format,Q.type,null)}return To(),rt.profile&&(Q.stats.size=df(Q.internalformat,Q.type,j,Y,!1,!1)),Zt}return Zt(N,ot),Zt.subimage=to,Zt.resize=z,Zt._reglType="texture2d",Zt._texture=Q,rt.profile&&(Zt.stats=Q.stats),Zt.destroy=function(){Q.decRef()},Zt}function vo(N,ot,Q,Zt,to,z){var k=new Ue(u1);Qn[k.id]=k,J.cubeCount++;var F=new Array(6);function j(q,B,L,I,T,U){var K,lt=k.texInfo;for(Vo.call(lt),K=0;K<6;++K)F[K]=ao();if(typeof q=="number"||!q){var ut=q|0||1;for(K=0;K<6;++K)Ye(F[K],ut,ut)}else if(typeof q=="object")if(B)yo(F[0],q),yo(F[1],B),yo(F[2],L),yo(F[3],I),yo(F[4],T),yo(F[5],U);else if(kn(lt,q),xe(k,q),"faces"in q){var ct=q.faces;for(S(Array.isArray(ct)&&ct.length===6,"cube faces must be a length 6 array"),K=0;K<6;++K)S(typeof ct[K]=="object"&&!!ct[K],"invalid input for cube map face"),$t(F[K],k),yo(F[K],ct[K])}else for(K=0;K<6;++K)yo(F[K],q);else S.raise("invalid arguments to cube map");for($t(k,F[0]),O.npotTextureCube||S(Sp(k.width)&&Sp(k.height),"your browser does not support non power or two texture dimensions"),lt.genMipmaps?k.mipmask=(F[0].width<<1)-1:k.mipmask=F[0].mipmask,S.textureCube(k,lt,F,O),k.internalformat=F[0].internalformat,j.width=F[0].width,j.height=F[0].height,cr(k),K=0;K<6;++K)Mn(F[K],sf+K);for(Nn(lt,u1),To(),rt.profile&&(k.stats.size=df(k.internalformat,k.type,j.width,j.height,lt.genMipmaps,!0)),j.format=zt[k.internalformat],j.type=Wt[k.type],j.mag=mt[lt.magFilter],j.min=Yt[lt.minFilter],j.wrapS=bt[lt.wrapS],j.wrapT=bt[lt.wrapT],K=0;K<6;++K)Ln(F[K]);return j}function Y(q,B,L,I,T){S(!!B,"must specify image data"),S(typeof q=="number"&&q===(q|0)&&q>=0&&q<6,"invalid face");var U=L|0,K=I|0,lt=T|0,ut=oe();return $t(ut,k),ut.width=0,ut.height=0,Nt(ut,B),ut.width=ut.width||(k.width>>lt)-U,ut.height=ut.height||(k.height>>lt)-K,S(k.type===ut.type&&k.format===ut.format&&k.internalformat===ut.internalformat,"incompatible format for texture.subimage"),S(U>=0&&K>=0&&U+ut.width<=k.width&&K+ut.height<=k.height,"texture.subimage write out of bounds"),S(k.mipmask&1<<lt,"missing mipmap data"),S(ut.data||ut.element||ut.needsCopy,"missing image data"),cr(k),Ne(ut,sf+q,U,K,lt),To(),Je(ut),j}function G(q){var B=q|0;if(B!==k.width){j.width=k.width=B,j.height=k.height=B,cr(k);for(var L=0;L<6;++L)for(var I=0;k.mipmask>>I;++I)y.texImage2D(sf+L,I,k.format,B>>I,B>>I,0,k.format,k.type,null);return To(),rt.profile&&(k.stats.size=df(k.internalformat,k.type,j.width,j.height,!1,!0)),j}}return j(N,ot,Q,Zt,to,z),j.subimage=Y,j.resize=G,j._reglType="textureCube",j._texture=k,rt.profile&&(j.stats=k.stats),j.destroy=function(){k.decRef()},j}function gn(){for(var N=0;N<ir;++N)y.activeTexture(Ic+N),y.bindTexture(Z0,null),mn[N]=null;e0(Qn).forEach(ke),J.cubeCount=0,J.textureCount=0}rt.profile&&(J.getTotalTextureSize=function(){var N=0;return Object.keys(Qn).forEach(function(ot){N+=Qn[ot].stats.size}),N});function ta(){for(var N=0;N<ir;++N){var ot=mn[N];ot&&(ot.bindCount=0,ot.unit=-1,mn[N]=null)}e0(Qn).forEach(function(Q){Q.texture=y.createTexture(),y.bindTexture(Q.target,Q.texture);for(var Zt=0;Zt<32;++Zt)if(Q.mipmask&1<<Zt)if(Q.target===Z0)y.texImage2D(Z0,Zt,Q.internalformat,Q.width>>Zt,Q.height>>Zt,0,Q.internalformat,Q.type,null);else for(var to=0;to<6;++to)y.texImage2D(sf+to,Zt,Q.internalformat,Q.width>>Zt,Q.height>>Zt,0,Q.internalformat,Q.type,null);Nn(Q.texInfo,Q.target)})}function Ts(){for(var N=0;N<ir;++N){var ot=mn[N];ot&&(ot.bindCount=0,ot.unit=-1,mn[N]=null),y.activeTexture(Ic+N),y.bindTexture(Z0,null),y.bindTexture(u1,null)}}return{create2D:no,createCube:vo,clear:gn,getTexture:function(N){return null},restore:ta,refresh:Ts}}var Ra=36161,pf=32854,Zp=32855,Jp=36194,tv=33189,ev=36168,ov=34041,nv=35907,rv=34836,av=34842,sv=34843,I0=[];I0[pf]=2,I0[Zp]=2,I0[Jp]=2,I0[tv]=2,I0[ev]=1,I0[ov]=4,I0[nv]=4,I0[rv]=16,I0[av]=8,I0[sv]=6;function iv(y,E,O){return I0[y]*E*O}var iw=function(y,E,O,et,ht){var J={rgba4:pf,rgb565:Jp,"rgb5 a1":Zp,depth:tv,stencil:ev,"depth stencil":ov};E.ext_srgb&&(J.srgba=nv),E.ext_color_buffer_half_float&&(J.rgba16f=av,J.rgb16f=sv),E.webgl_color_buffer_float&&(J.rgba32f=rv);var rt=[];Object.keys(J).forEach(function(Mt){var Ot=J[Mt];rt[Ot]=Mt});var _t=0,St={};function Lt(Mt){this.id=_t++,this.refCount=1,this.renderbuffer=Mt,this.format=pf,this.width=0,this.height=0,ht.profile&&(this.stats={size:0})}Lt.prototype.decRef=function(){--this.refCount<=0&&Et(this)};function Et(Mt){var Ot=Mt.renderbuffer;S(Ot,"must not double destroy renderbuffer"),y.bindRenderbuffer(Ra,null),y.deleteRenderbuffer(Ot),Mt.renderbuffer=null,Mt.refCount=0,delete St[Mt.id],et.renderbufferCount--}function Rt(Mt,Ot){var X=new Lt(y.createRenderbuffer());St[X.id]=X,et.renderbufferCount++;function at(Wt,mt){var Yt=0,bt=0,It=pf;if(typeof Wt=="object"&&Wt){var gt=Wt;if("shape"in gt){var $t=gt.shape;S(Array.isArray($t)&&$t.length>=2,"invalid renderbuffer shape"),Yt=$t[0]|0,bt=$t[1]|0}else"radius"in gt&&(Yt=bt=gt.radius|0),"width"in gt&&(Yt=gt.width|0),"height"in gt&&(bt=gt.height|0);"format"in gt&&(S.parameter(gt.format,J,"invalid renderbuffer format"),It=J[gt.format])}else typeof Wt=="number"?(Yt=Wt|0,typeof mt=="number"?bt=mt|0:bt=Yt):Wt?S.raise("invalid arguments to renderbuffer constructor"):Yt=bt=1;if(S(Yt>0&&bt>0&&Yt<=O.maxRenderbufferSize&&bt<=O.maxRenderbufferSize,"invalid renderbuffer size"),!(Yt===X.width&&bt===X.height&&It===X.format))return at.width=X.width=Yt,at.height=X.height=bt,X.format=It,y.bindRenderbuffer(Ra,X.renderbuffer),y.renderbufferStorage(Ra,It,Yt,bt),S(y.getError()===0,"invalid render buffer format"),ht.profile&&(X.stats.size=iv(X.format,X.width,X.height)),at.format=rt[X.format],at}function zt(Wt,mt){var Yt=Wt|0,bt=mt|0||Yt;return Yt===X.width&&bt===X.height||(S(Yt>0&&bt>0&&Yt<=O.maxRenderbufferSize&&bt<=O.maxRenderbufferSize,"invalid renderbuffer size"),at.width=X.width=Yt,at.height=X.height=bt,y.bindRenderbuffer(Ra,X.renderbuffer),y.renderbufferStorage(Ra,X.format,Yt,bt),S(y.getError()===0,"invalid render buffer format"),ht.profile&&(X.stats.size=iv(X.format,X.width,X.height))),at}return at(Mt,Ot),at.resize=zt,at._reglType="renderbuffer",at._renderbuffer=X,ht.profile&&(at.stats=X.stats),at.destroy=function(){X.decRef()},at}ht.profile&&(et.getTotalRenderbufferSize=function(){var Mt=0;return Object.keys(St).forEach(function(Ot){Mt+=St[Ot].stats.size}),Mt});function Gt(){e0(St).forEach(function(Mt){Mt.renderbuffer=y.createRenderbuffer(),y.bindRenderbuffer(Ra,Mt.renderbuffer),y.renderbufferStorage(Ra,Mt.format,Mt.width,Mt.height)}),y.bindRenderbuffer(Ra,null)}return{create:Rt,clear:function(){e0(St).forEach(Et)},restore:Gt}},ha=36160,z1=36161,_s=3553,vf=34069,cv=36064,lv=36096,fv=36128,hv=33306,uv=36053,cw=36054,lw=36055,fw=36057,hw=36061,uw=36193,dw=5121,pw=5126,dv=6407,pv=6408,vw=6402,mw=[dv,pv],L1=[];L1[pv]=4,L1[dv]=3;var mf=[];mf[dw]=1,mf[pw]=4,mf[uw]=2;var gw=32854,xw=32855,yw=36194,bw=33189,ww=36168,vv=34041,_w=35907,Mw=34836,kw=34842,Sw=34843,Ew=[gw,xw,yw,_w,kw,Sw,Mw],xi={};xi[uv]="complete",xi[cw]="incomplete attachment",xi[fw]="incomplete dimensions",xi[lw]="incomplete, missing attachment",xi[hw]="unsupported";function Aw(y,E,O,et,ht,J){var rt={cur:null,next:null,dirty:!1,setFBO:null},_t=["rgba"],St=["rgba4","rgb565","rgb5 a1"];E.ext_srgb&&St.push("srgba"),E.ext_color_buffer_half_float&&St.push("rgba16f","rgb16f"),E.webgl_color_buffer_float&&St.push("rgba32f");var Lt=["uint8"];E.oes_texture_half_float&&Lt.push("half float","float16"),E.oes_texture_float&&Lt.push("float","float32");function Et(Ht,Nt,pt){this.target=Ht,this.texture=Nt,this.renderbuffer=pt;var Ne=0,Be=0;Nt?(Ne=Nt.width,Be=Nt.height):pt&&(Ne=pt.width,Be=pt.height),this.width=Ne,this.height=Be}function Rt(Ht){Ht&&(Ht.texture&&Ht.texture._texture.decRef(),Ht.renderbuffer&&Ht.renderbuffer._renderbuffer.decRef())}function Gt(Ht,Nt,pt){if(Ht)if(Ht.texture){var Ne=Ht.texture._texture,Be=Math.max(1,Ne.width),oe=Math.max(1,Ne.height);S(Be===Nt&&oe===pt,"inconsistent width/height for supplied texture"),Ne.refCount+=1}else{var Je=Ht.renderbuffer._renderbuffer;S(Je.width===Nt&&Je.height===pt,"inconsistent width/height for renderbuffer"),Je.refCount+=1}}function Mt(Ht,Nt){Nt&&(Nt.texture?y.framebufferTexture2D(ha,Ht,Nt.target,Nt.texture._texture.texture,0):y.framebufferRenderbuffer(ha,Ht,z1,Nt.renderbuffer._renderbuffer.renderbuffer))}function Ot(Ht){var Nt=_s,pt=null,Ne=null,Be=Ht;typeof Ht=="object"&&(Be=Ht.data,"target"in Ht&&(Nt=Ht.target|0)),S.type(Be,"function","invalid attachment data");var oe=Be._reglType;return oe==="texture2d"?(pt=Be,S(Nt===_s)):oe==="textureCube"?(pt=Be,S(Nt>=vf&&Nt<vf+6,"invalid cube map target")):oe==="renderbuffer"?(Ne=Be,Nt=z1):S.raise("invalid regl object for attachment"),new Et(Nt,pt,Ne)}function X(Ht,Nt,pt,Ne,Be){if(pt){var oe=et.create2D({width:Ht,height:Nt,format:Ne,type:Be});return oe._texture.refCount=0,new Et(_s,oe,null)}else{var Je=ht.create({width:Ht,height:Nt,format:Ne});return Je._renderbuffer.refCount=0,new Et(z1,null,Je)}}function at(Ht){return Ht&&(Ht.texture||Ht.renderbuffer)}function zt(Ht,Nt,pt){Ht&&(Ht.texture?Ht.texture.resize(Nt,pt):Ht.renderbuffer&&Ht.renderbuffer.resize(Nt,pt),Ht.width=Nt,Ht.height=pt)}var Wt=0,mt={};function Yt(){this.id=Wt++,mt[this.id]=this,this.framebuffer=y.createFramebuffer(),this.width=0,this.height=0,this.colorAttachments=[],this.depthAttachment=null,this.stencilAttachment=null,this.depthStencilAttachment=null}function bt(Ht){Ht.colorAttachments.forEach(Rt),Rt(Ht.depthAttachment),Rt(Ht.stencilAttachment),Rt(Ht.depthStencilAttachment)}function It(Ht){var Nt=Ht.framebuffer;S(Nt,"must not double destroy framebuffer"),y.deleteFramebuffer(Nt),Ht.framebuffer=null,J.framebufferCount--,delete mt[Ht.id]}function gt(Ht){var Nt;y.bindFramebuffer(ha,Ht.framebuffer);var pt=Ht.colorAttachments;for(Nt=0;Nt<pt.length;++Nt)Mt(cv+Nt,pt[Nt]);for(Nt=pt.length;Nt<O.maxColorAttachments;++Nt)y.framebufferTexture2D(ha,cv+Nt,_s,null,0);y.framebufferTexture2D(ha,hv,_s,null,0),y.framebufferTexture2D(ha,lv,_s,null,0),y.framebufferTexture2D(ha,fv,_s,null,0),Mt(lv,Ht.depthAttachment),Mt(fv,Ht.stencilAttachment),Mt(hv,Ht.depthStencilAttachment);var Ne=y.checkFramebufferStatus(ha);!y.isContextLost()&&Ne!==uv&&S.raise("framebuffer configuration not supported, status = "+xi[Ne]),y.bindFramebuffer(ha,rt.next?rt.next.framebuffer:null),rt.cur=rt.next,y.getError()}function $t(Ht,Nt){var pt=new Yt;J.framebufferCount++;function Ne(oe,Je){var Fe;S(rt.next!==pt,"can not update framebuffer which is currently in use");var Ye=0,yo=0,Mn=!0,qn=!0,ao=null,Ln=!0,Vo="rgba",kn="uint8",Nn=1,Rn=null,Qn=null,ir=null,mn=!1;if(typeof oe=="number")Ye=oe|0,yo=Je|0||Ye;else if(!oe)Ye=yo=1;else{S.type(oe,"object","invalid arguments for framebuffer");var Ue=oe;if("shape"in Ue){var cr=Ue.shape;S(Array.isArray(cr)&&cr.length>=2,"invalid shape for framebuffer"),Ye=cr[0],yo=cr[1]}else"radius"in Ue&&(Ye=yo=Ue.radius),"width"in Ue&&(Ye=Ue.width),"height"in Ue&&(yo=Ue.height);("color"in Ue||"colors"in Ue)&&(ao=Ue.color||Ue.colors,Array.isArray(ao)&&S(ao.length===1||E.webgl_draw_buffers,"multiple render targets not supported")),ao||("colorCount"in Ue&&(Nn=Ue.colorCount|0,S(Nn>0,"invalid color buffer count")),"colorTexture"in Ue&&(Ln=!!Ue.colorTexture,Vo="rgba4"),"colorType"in Ue&&(kn=Ue.colorType,Ln?(S(E.oes_texture_float||!(kn==="float"||kn==="float32"),"you must enable OES_texture_float in order to use floating point framebuffer objects"),S(E.oes_texture_half_float||!(kn==="half float"||kn==="float16"),"you must enable OES_texture_half_float in order to use 16-bit floating point framebuffer objects")):kn==="half float"||kn==="float16"?(S(E.ext_color_buffer_half_float,"you must enable EXT_color_buffer_half_float to use 16-bit render buffers"),Vo="rgba16f"):(kn==="float"||kn==="float32")&&(S(E.webgl_color_buffer_float,"you must enable WEBGL_color_buffer_float in order to use 32-bit floating point renderbuffers"),Vo="rgba32f"),S.oneOf(kn,Lt,"invalid color type")),"colorFormat"in Ue&&(Vo=Ue.colorFormat,_t.indexOf(Vo)>=0?Ln=!0:St.indexOf(Vo)>=0?Ln=!1:Ln?S.oneOf(Ue.colorFormat,_t,"invalid color format for texture"):S.oneOf(Ue.colorFormat,St,"invalid color format for renderbuffer"))),("depthTexture"in Ue||"depthStencilTexture"in Ue)&&(mn=!!(Ue.depthTexture||Ue.depthStencilTexture),S(!mn||E.webgl_depth_texture,"webgl_depth_texture extension not supported")),"depth"in Ue&&(typeof Ue.depth=="boolean"?Mn=Ue.depth:(Rn=Ue.depth,qn=!1)),"stencil"in Ue&&(typeof Ue.stencil=="boolean"?qn=Ue.stencil:(Qn=Ue.stencil,Mn=!1)),"depthStencil"in Ue&&(typeof Ue.depthStencil=="boolean"?Mn=qn=Ue.depthStencil:(ir=Ue.depthStencil,Mn=!1,qn=!1))}var To=null,ke=null,no=null,vo=null;if(Array.isArray(ao))To=ao.map(Ot);else if(ao)To=[Ot(ao)];else for(To=new Array(Nn),Fe=0;Fe<Nn;++Fe)To[Fe]=X(Ye,yo,Ln,Vo,kn);S(E.webgl_draw_buffers||To.length<=1,"you must enable the WEBGL_draw_buffers extension in order to use multiple color buffers."),S(To.length<=O.maxColorAttachments,"too many color attachments, not supported"),Ye=Ye||To[0].width,yo=yo||To[0].height,Rn?ke=Ot(Rn):Mn&&!qn&&(ke=X(Ye,yo,mn,"depth","uint32")),Qn?no=Ot(Qn):qn&&!Mn&&(no=X(Ye,yo,!1,"stencil","uint8")),ir?vo=Ot(ir):!Rn&&!Qn&&qn&&Mn&&(vo=X(Ye,yo,mn,"depth stencil","depth stencil")),S(!!Rn+!!Qn+!!ir<=1,"invalid framebuffer configuration, can specify exactly one depth/stencil attachment");var gn=null;for(Fe=0;Fe<To.length;++Fe)if(Gt(To[Fe],Ye,yo),S(!To[Fe]||To[Fe].texture&&mw.indexOf(To[Fe].texture._texture.format)>=0||To[Fe].renderbuffer&&Ew.indexOf(To[Fe].renderbuffer._renderbuffer.format)>=0,"framebuffer color attachment "+Fe+" is invalid"),To[Fe]&&To[Fe].texture){var ta=L1[To[Fe].texture._texture.format]*mf[To[Fe].texture._texture.type];gn===null?gn=ta:S(gn===ta,"all color attachments much have the same number of bits per pixel.")}return Gt(ke,Ye,yo),S(!ke||ke.texture&&ke.texture._texture.format===vw||ke.renderbuffer&&ke.renderbuffer._renderbuffer.format===bw,"invalid depth attachment for framebuffer object"),Gt(no,Ye,yo),S(!no||no.renderbuffer&&no.renderbuffer._renderbuffer.format===ww,"invalid stencil attachment for framebuffer object"),Gt(vo,Ye,yo),S(!vo||vo.texture&&vo.texture._texture.format===vv||vo.renderbuffer&&vo.renderbuffer._renderbuffer.format===vv,"invalid depth-stencil attachment for framebuffer object"),bt(pt),pt.width=Ye,pt.height=yo,pt.colorAttachments=To,pt.depthAttachment=ke,pt.stencilAttachment=no,pt.depthStencilAttachment=vo,Ne.color=To.map(at),Ne.depth=at(ke),Ne.stencil=at(no),Ne.depthStencil=at(vo),Ne.width=pt.width,Ne.height=pt.height,gt(pt),Ne}function Be(oe,Je){S(rt.next!==pt,"can not resize a framebuffer which is currently in use");var Fe=Math.max(oe|0,1),Ye=Math.max(Je|0||Fe,1);if(Fe===pt.width&&Ye===pt.height)return Ne;for(var yo=pt.colorAttachments,Mn=0;Mn<yo.length;++Mn)zt(yo[Mn],Fe,Ye);return zt(pt.depthAttachment,Fe,Ye),zt(pt.stencilAttachment,Fe,Ye),zt(pt.depthStencilAttachment,Fe,Ye),pt.width=Ne.width=Fe,pt.height=Ne.height=Ye,gt(pt),Ne}return Ne(Ht,Nt),e(Ne,{resize:Be,_reglType:"framebuffer",_framebuffer:pt,destroy:function(){It(pt),bt(pt)},use:function(oe){rt.setFBO({framebuffer:Ne},oe)}})}function xe(Ht){var Nt=Array(6);function pt(Be){var oe;S(Nt.indexOf(rt.next)<0,"can not update framebuffer which is currently in use");var Je={color:null},Fe=0,Ye=null,yo="rgba",Mn="uint8",qn=1;if(typeof Be=="number")Fe=Be|0;else if(!Be)Fe=1;else{S.type(Be,"object","invalid arguments for framebuffer");var ao=Be;if("shape"in ao){var Ln=ao.shape;S(Array.isArray(Ln)&&Ln.length>=2,"invalid shape for framebuffer"),S(Ln[0]===Ln[1],"cube framebuffer must be square"),Fe=Ln[0]}else"radius"in ao&&(Fe=ao.radius|0),"width"in ao?(Fe=ao.width|0,"height"in ao&&S(ao.height===Fe,"must be square")):"height"in ao&&(Fe=ao.height|0);("color"in ao||"colors"in ao)&&(Ye=ao.color||ao.colors,Array.isArray(Ye)&&S(Ye.length===1||E.webgl_draw_buffers,"multiple render targets not supported")),Ye||("colorCount"in ao&&(qn=ao.colorCount|0,S(qn>0,"invalid color buffer count")),"colorType"in ao&&(S.oneOf(ao.colorType,Lt,"invalid color type"),Mn=ao.colorType),"colorFormat"in ao&&(yo=ao.colorFormat,S.oneOf(ao.colorFormat,_t,"invalid color format for texture"))),"depth"in ao&&(Je.depth=ao.depth),"stencil"in ao&&(Je.stencil=ao.stencil),"depthStencil"in ao&&(Je.depthStencil=ao.depthStencil)}var Vo;if(Ye)if(Array.isArray(Ye))for(Vo=[],oe=0;oe<Ye.length;++oe)Vo[oe]=Ye[oe];else Vo=[Ye];else{Vo=Array(qn);var kn={radius:Fe,format:yo,type:Mn};for(oe=0;oe<qn;++oe)Vo[oe]=et.createCube(kn)}for(Je.color=Array(Vo.length),oe=0;oe<Vo.length;++oe){var Nn=Vo[oe];S(typeof Nn=="function"&&Nn._reglType==="textureCube","invalid cube map"),Fe=Fe||Nn.width,S(Nn.width===Fe&&Nn.height===Fe,"invalid cube map shape"),Je.color[oe]={target:vf,data:Vo[oe]}}for(oe=0;oe<6;++oe){for(var Rn=0;Rn<Vo.length;++Rn)Je.color[Rn].target=vf+oe;oe>0&&(Je.depth=Nt[0].depth,Je.stencil=Nt[0].stencil,Je.depthStencil=Nt[0].depthStencil),Nt[oe]?Nt[oe](Je):Nt[oe]=$t(Je)}return e(pt,{width:Fe,height:Fe,color:Vo})}function Ne(Be){var oe,Je=Be|0;if(S(Je>0&&Je<=O.maxCubeMapSize,"invalid radius for cube fbo"),Je===pt.width)return pt;var Fe=pt.color;for(oe=0;oe<Fe.length;++oe)Fe[oe].resize(Je);for(oe=0;oe<6;++oe)Nt[oe].resize(Je);return pt.width=pt.height=Je,pt}return pt(Ht),e(pt,{faces:Nt,resize:Ne,_reglType:"framebufferCube",destroy:function(){Nt.forEach(function(Be){Be.destroy()})}})}function Ie(){rt.cur=null,rt.next=null,rt.dirty=!0,e0(mt).forEach(function(Ht){Ht.framebuffer=y.createFramebuffer(),gt(Ht)})}return e(rt,{getFramebuffer:function(Ht){if(typeof Ht=="function"&&Ht._reglType==="framebuffer"){var Nt=Ht._framebuffer;if(Nt instanceof Yt)return Nt}return null},create:$t,createCube:xe,clear:function(){e0(mt).forEach(It)},restore:Ie})}var Tw=5126,mv=34962;function N1(){this.state=0,this.x=0,this.y=0,this.z=0,this.w=0,this.buffer=null,this.size=0,this.normalized=!1,this.type=Tw,this.offset=0,this.stride=0,this.divisor=0}function zw(y,E,O,et,ht){for(var J=O.maxAttributes,rt=new Array(J),_t=0;_t<J;++_t)rt[_t]=new N1;var St=0,Lt={},Et={Record:N1,scope:{},state:rt,currentVAO:null,targetVAO:null,restore:Gt()?mt:function(){},createVAO:Yt,getVAO:Ot,destroyBuffer:Rt,setVAO:Gt()?X:at,clear:Gt()?zt:function(){}};function Rt(bt){for(var It=0;It<rt.length;++It){var gt=rt[It];gt.buffer===bt&&(y.disableVertexAttribArray(It),gt.buffer=null)}}function Gt(){return E.oes_vertex_array_object}function Mt(){return E.angle_instanced_arrays}function Ot(bt){return typeof bt=="function"&&bt._vao?bt._vao:null}function X(bt){if(bt!==Et.currentVAO){var It=Gt();bt?It.bindVertexArrayOES(bt.vao):It.bindVertexArrayOES(null),Et.currentVAO=bt}}function at(bt){if(bt!==Et.currentVAO){if(bt)bt.bindAttrs();else for(var It=Mt(),gt=0;gt<rt.length;++gt){var $t=rt[gt];$t.buffer?(y.enableVertexAttribArray(gt),y.vertexAttribPointer(gt,$t.size,$t.type,$t.normalized,$t.stride,$t.offfset),It&&$t.divisor&&It.vertexAttribDivisorANGLE(gt,$t.divisor)):(y.disableVertexAttribArray(gt),y.vertexAttrib4f(gt,$t.x,$t.y,$t.z,$t.w))}Et.currentVAO=bt}}function zt(){e0(Lt).forEach(function(bt){bt.destroy()})}function Wt(){this.id=++St,this.attributes=[];var bt=Gt();bt?this.vao=bt.createVertexArrayOES():this.vao=null,Lt[this.id]=this,this.buffers=[]}Wt.prototype.bindAttrs=function(){for(var bt=Mt(),It=this.attributes,gt=0;gt<It.length;++gt){var $t=It[gt];$t.buffer?(y.enableVertexAttribArray(gt),y.bindBuffer(mv,$t.buffer.buffer),y.vertexAttribPointer(gt,$t.size,$t.type,$t.normalized,$t.stride,$t.offset),bt&&$t.divisor&&bt.vertexAttribDivisorANGLE(gt,$t.divisor)):(y.disableVertexAttribArray(gt),y.vertexAttrib4f(gt,$t.x,$t.y,$t.z,$t.w))}for(var xe=It.length;xe<J;++xe)y.disableVertexAttribArray(xe)},Wt.prototype.refresh=function(){var bt=Gt();bt&&(bt.bindVertexArrayOES(this.vao),this.bindAttrs(),Et.currentVAO=this)},Wt.prototype.destroy=function(){if(this.vao){var bt=Gt();this===Et.currentVAO&&(Et.currentVAO=null,bt.bindVertexArrayOES(null)),bt.deleteVertexArrayOES(this.vao),this.vao=null}Lt[this.id]&&(delete Lt[this.id],et.vaoCount-=1)};function mt(){var bt=Gt();bt&&e0(Lt).forEach(function(It){It.refresh()})}function Yt(bt){var It=new Wt;et.vaoCount+=1;function gt($t){S(Array.isArray($t),"arguments to vertex array constructor must be an array"),S($t.length<J,"too many attributes"),S($t.length>0,"must specify at least one attribute");var xe={},Ie=It.attributes;Ie.length=$t.length;for(var Ht=0;Ht<$t.length;++Ht){var Nt=$t[Ht],pt=Ie[Ht]=new N1,Ne=Nt.data||Nt;if(Array.isArray(Ne)||t(Ne)||P0(Ne)){var Be;It.buffers[Ht]&&(Be=It.buffers[Ht],t(Ne)&&Be._buffer.byteLength>=Ne.byteLength?Be.subdata(Ne):(Be.destroy(),It.buffers[Ht]=null)),It.buffers[Ht]||(Be=It.buffers[Ht]=ht.create(Nt,mv,!1,!0)),pt.buffer=ht.getBuffer(Be),pt.size=pt.buffer.dimension|0,pt.normalized=!1,pt.type=pt.buffer.dtype,pt.offset=0,pt.stride=0,pt.divisor=0,pt.state=1,xe[Ht]=1}else ht.getBuffer(Nt)?(pt.buffer=ht.getBuffer(Nt),pt.size=pt.buffer.dimension|0,pt.normalized=!1,pt.type=pt.buffer.dtype,pt.offset=0,pt.stride=0,pt.divisor=0,pt.state=1):ht.getBuffer(Nt.buffer)?(pt.buffer=ht.getBuffer(Nt.buffer),pt.size=(+Nt.size||pt.buffer.dimension)|0,pt.normalized=!!Nt.normalized||!1,"type"in Nt?(S.parameter(Nt.type,xs,"invalid buffer type"),pt.type=xs[Nt.type]):pt.type=pt.buffer.dtype,pt.offset=(Nt.offset||0)|0,pt.stride=(Nt.stride||0)|0,pt.divisor=(Nt.divisor||0)|0,pt.state=1,S(pt.size>=1&&pt.size<=4,"size must be between 1 and 4"),S(pt.offset>=0,"invalid offset"),S(pt.stride>=0&&pt.stride<=255,"stride must be between 0 and 255"),S(pt.divisor>=0,"divisor must be positive"),S(!pt.divisor||!!E.angle_instanced_arrays,"ANGLE_instanced_arrays must be enabled to use divisor")):"x"in Nt?(S(Ht>0,"first attribute must not be a constant"),pt.x=+Nt.x||0,pt.y=+Nt.y||0,pt.z=+Nt.z||0,pt.w=+Nt.w||0,pt.state=2):S(!1,"invalid attribute spec for location "+Ht)}for(var oe=0;oe<It.buffers.length;++oe)!xe[oe]&&It.buffers[oe]&&(It.buffers[oe].destroy(),It.buffers[oe]=null);return It.refresh(),gt}return gt.destroy=function(){for(var $t=0;$t<It.buffers.length;++$t)It.buffers[$t]&&It.buffers[$t].destroy();It.buffers.length=0,It.destroy()},gt._vao=It,gt._reglType="vao",gt(bt)}return Et}var gv=35632,Lw=35633,Nw=35718,Rw=35721;function Cw(y,E,O,et){var ht={},J={};function rt(X,at,zt,Wt){this.name=X,this.id=at,this.location=zt,this.info=Wt}function _t(X,at){for(var zt=0;zt<X.length;++zt)if(X[zt].id===at.id){X[zt].location=at.location;return}X.push(at)}function St(X,at,zt){var Wt=X===gv?ht:J,mt=Wt[at];if(!mt){var Yt=E.str(at);mt=y.createShader(X),y.shaderSource(mt,Yt),y.compileShader(mt),S.shaderError(y,mt,Yt,X,zt),Wt[at]=mt}return mt}var Lt={},Et=[],Rt=0;function Gt(X,at){this.id=Rt++,this.fragId=X,this.vertId=at,this.program=null,this.uniforms=[],this.attributes=[],this.refCount=1,et.profile&&(this.stats={uniformsCount:0,attributesCount:0})}function Mt(X,at,zt){var Wt,mt,Yt=St(gv,X.fragId),bt=St(Lw,X.vertId),It=X.program=y.createProgram();if(y.attachShader(It,Yt),y.attachShader(It,bt),zt)for(Wt=0;Wt<zt.length;++Wt){var gt=zt[Wt];y.bindAttribLocation(It,gt[0],gt[1])}y.linkProgram(It),S.linkError(y,It,E.str(X.fragId),E.str(X.vertId),at);var $t=y.getProgramParameter(It,Nw);et.profile&&(X.stats.uniformsCount=$t);var xe=X.uniforms;for(Wt=0;Wt<$t;++Wt)if(mt=y.getActiveUniform(It,Wt),mt)if(mt.size>1)for(var Ie=0;Ie<mt.size;++Ie){var Ht=mt.name.replace("[0]","["+Ie+"]");_t(xe,new rt(Ht,E.id(Ht),y.getUniformLocation(It,Ht),mt))}else _t(xe,new rt(mt.name,E.id(mt.name),y.getUniformLocation(It,mt.name),mt));var Nt=y.getProgramParameter(It,Rw);et.profile&&(X.stats.attributesCount=Nt);var pt=X.attributes;for(Wt=0;Wt<Nt;++Wt)mt=y.getActiveAttrib(It,Wt),mt&&_t(pt,new rt(mt.name,E.id(mt.name),y.getAttribLocation(It,mt.name),mt))}et.profile&&(O.getMaxUniformsCount=function(){var X=0;return Et.forEach(function(at){at.stats.uniformsCount>X&&(X=at.stats.uniformsCount)}),X},O.getMaxAttributesCount=function(){var X=0;return Et.forEach(function(at){at.stats.attributesCount>X&&(X=at.stats.attributesCount)}),X});function Ot(){ht={},J={};for(var X=0;X<Et.length;++X)Mt(Et[X],null,Et[X].attributes.map(function(at){return[at.location,at.name]}))}return{clear:function(){var X=y.deleteShader.bind(y);e0(ht).forEach(X),ht={},e0(J).forEach(X),J={},Et.forEach(function(at){y.deleteProgram(at.program)}),Et.length=0,Lt={},O.shaderCount=0},program:function(X,at,zt,Wt){S.command(X>=0,"missing vertex shader",zt),S.command(at>=0,"missing fragment shader",zt);var mt=Lt[at];mt||(mt=Lt[at]={});var Yt=mt[X];if(Yt&&(Yt.refCount++,!Wt))return Yt;var bt=new Gt(at,X);return O.shaderCount++,Mt(bt,zt,Wt),Yt||(mt[X]=bt),Et.push(bt),e(bt,{destroy:function(){if(bt.refCount--,bt.refCount<=0){y.deleteProgram(bt.program);var It=Et.indexOf(bt);Et.splice(It,1),O.shaderCount--}mt[bt.vertId].refCount<=0&&(y.deleteShader(J[bt.vertId]),delete J[bt.vertId],delete Lt[bt.fragId][bt.vertId]),Object.keys(Lt[bt.fragId]).length||(y.deleteShader(ht[bt.fragId]),delete ht[bt.fragId],delete Lt[bt.fragId])}})},restore:Ot,shader:St,frag:-1,vert:-1}}var Ow=6408,$c=5121,Pw=3333,gf=5126;function Iw(y,E,O,et,ht,J,rt){function _t(Et){var Rt;E.next===null?(S(ht.preserveDrawingBuffer,'you must create a webgl context with "preserveDrawingBuffer":true in order to read pixels from the drawing buffer'),Rt=$c):(S(E.next.colorAttachments[0].texture!==null,"You cannot read from a renderbuffer"),Rt=E.next.colorAttachments[0].texture._texture.type,J.oes_texture_float?(S(Rt===$c||Rt===gf,"Reading from a framebuffer is only allowed for the types 'uint8' and 'float'"),Rt===gf&&S(rt.readFloat,"Reading 'float' values is not permitted in your browser. For a fallback, please see: https://www.npmjs.com/package/glsl-read-float")):S(Rt===$c,"Reading from a framebuffer is only allowed for the type 'uint8'"));var Gt=0,Mt=0,Ot=et.framebufferWidth,X=et.framebufferHeight,at=null;t(Et)?at=Et:Et&&(S.type(Et,"object","invalid arguments to regl.read()"),Gt=Et.x|0,Mt=Et.y|0,S(Gt>=0&&Gt<et.framebufferWidth,"invalid x offset for regl.read"),S(Mt>=0&&Mt<et.framebufferHeight,"invalid y offset for regl.read"),Ot=(Et.width||et.framebufferWidth-Gt)|0,X=(Et.height||et.framebufferHeight-Mt)|0,at=Et.data||null),at&&(Rt===$c?S(at instanceof Uint8Array,"buffer must be 'Uint8Array' when reading from a framebuffer of type 'uint8'"):Rt===gf&&S(at instanceof Float32Array,"buffer must be 'Float32Array' when reading from a framebuffer of type 'float'")),S(Ot>0&&Ot+Gt<=et.framebufferWidth,"invalid width for read pixels"),S(X>0&&X+Mt<=et.framebufferHeight,"invalid height for read pixels"),O();var zt=Ot*X*4;return at||(Rt===$c?at=new Uint8Array(zt):Rt===gf&&(at=at||new Float32Array(zt))),S.isTypedArray(at,"data buffer for regl.read() must be a typedarray"),S(at.byteLength>=zt,"data buffer for regl.read() too small"),y.pixelStorei(Pw,4),y.readPixels(Gt,Mt,Ot,X,Ow,Rt,at),at}function St(Et){var Rt;return E.setFBO({framebuffer:Et.framebuffer},function(){Rt=_t(Et)}),Rt}function Lt(Et){return!Et||!("framebuffer"in Et)?_t(Et):St(Et)}return Lt}function yi(y){return Array.prototype.slice.call(y)}function bi(y){return yi(y).join("")}function $w(){var y=0,E=[],O=[];function et(Rt){for(var Gt=0;Gt<O.length;++Gt)if(O[Gt]===Rt)return E[Gt];var Mt="g"+y++;return E.push(Mt),O.push(Rt),Mt}function ht(){var Rt=[];function Gt(){Rt.push.apply(Rt,yi(arguments))}var Mt=[];function Ot(){var X="v"+y++;return Mt.push(X),arguments.length>0&&(Rt.push(X,"="),Rt.push.apply(Rt,yi(arguments)),Rt.push(";")),X}return e(Gt,{def:Ot,toString:function(){return bi([Mt.length>0?"var "+Mt.join(",")+";":"",bi(Rt)])}})}function J(){var Rt=ht(),Gt=ht(),Mt=Rt.toString,Ot=Gt.toString;function X(at,zt){Gt(at,zt,"=",Rt.def(at,zt),";")}return e(function(){Rt.apply(Rt,yi(arguments))},{def:Rt.def,entry:Rt,exit:Gt,save:X,set:function(at,zt,Wt){X(at,zt),Rt(at,zt,"=",Wt,";")},toString:function(){return Mt()+Ot()}})}function rt(){var Rt=bi(arguments),Gt=J(),Mt=J(),Ot=Gt.toString,X=Mt.toString;return e(Gt,{then:function(){return Gt.apply(Gt,yi(arguments)),this},else:function(){return Mt.apply(Mt,yi(arguments)),this},toString:function(){var at=X();return at&&(at="else{"+at+"}"),bi(["if(",Rt,"){",Ot(),"}",at])}})}var _t=ht(),St={};function Lt(Rt,Gt){var Mt=[];function Ot(){var mt="a"+Mt.length;return Mt.push(mt),mt}Gt=Gt||0;for(var X=0;X<Gt;++X)Ot();var at=J(),zt=at.toString,Wt=St[Rt]=e(at,{arg:Ot,toString:function(){return bi(["function(",Mt.join(),"){",zt(),"}"])}});return Wt}function Et(){var Rt=['"use strict";',_t,"return {"];Object.keys(St).forEach(function(Ot){Rt.push('"',Ot,'":',St[Ot].toString(),",")}),Rt.push("}");var Gt=bi(Rt).replace(/;/g,`;
`).replace(/}/g,`}
`).replace(/{/g,`{
`),Mt=Function.apply(null,E.concat(Gt));return Mt.apply(null,O)}return{global:_t,link:et,block:ht,proc:Lt,scope:J,cond:rt,compile:Et}}var wi="xyzw".split(""),xv=5121,_i=1,R1=2,C1=0,O1=1,P1=2,I1=3,xf=4,yv=5,bv=6,wv="dither",_v="blend.enable",Mv="blend.color",$1="blend.equation",F1="blend.func",kv="depth.enable",Sv="depth.func",Ev="depth.range",Av="depth.mask",q1="colorMask",Tv="cull.enable",zv="cull.face",D1="frontFace",G1="lineWidth",Lv="polygonOffset.enable",H1="polygonOffset.offset",Nv="sample.alpha",Rv="sample.enable",B1="sample.coverage",Cv="stencil.enable",Ov="stencil.mask",U1="stencil.func",j1="stencil.opFront",Fc="stencil.opBack",Pv="scissor.enable",yf="scissor.box",ua="viewport",qc="profile",Ms="framebuffer",Dc="vert",Gc="frag",ks="elements",Ss="primitive",Es="count",bf="offset",wf="instances",Hc="vao",W1="Width",V1="Height",Mi=Ms+W1,ki=Ms+V1,Fw=ua+W1,qw=ua+V1,Iv="drawingBuffer",$v=Iv+W1,Fv=Iv+V1,Dw=[F1,$1,U1,j1,Fc,B1,ua,yf,H1],Si=34962,Gw=34963,Hw=35632,Bw=35633,qv=3553,Uw=34067,jw=2884,Ww=3042,Vw=3024,Xw=2960,Yw=2929,Kw=3089,Qw=32823,Zw=32926,Jw=32928,X1=5126,_f=35664,Mf=35665,kf=35666,Y1=5124,Sf=35667,Ef=35668,Af=35669,K1=35670,Tf=35671,zf=35672,Lf=35673,Bc=35674,Uc=35675,jc=35676,Wc=35678,Vc=35680,Dv=4,Xc=1028,As=1029,Gv=2304,Q1=2305,t4=32775,e4=32776,o4=519,Ca=7680,Hv=0,Bv=1,Uv=32774,n4=513,jv=36160,r4=36064,J0={0:0,1:1,zero:0,one:1,"src color":768,"one minus src color":769,"src alpha":770,"one minus src alpha":771,"dst color":774,"one minus dst color":775,"dst alpha":772,"one minus dst alpha":773,"constant color":32769,"one minus constant color":32770,"constant alpha":32771,"one minus constant alpha":32772,"src alpha saturate":776},Wv=["constant color, constant alpha","one minus constant color, constant alpha","constant color, one minus constant alpha","one minus constant color, one minus constant alpha","constant alpha, constant color","constant alpha, one minus constant color","one minus constant alpha, constant color","one minus constant alpha, one minus constant color"],Ei={never:512,less:513,"<":513,equal:514,"=":514,"==":514,"===":514,lequal:515,"<=":515,greater:516,">":516,notequal:517,"!=":517,"!==":517,gequal:518,">=":518,always:519},Oa={0:0,zero:0,keep:7680,replace:7681,increment:7682,decrement:7683,"increment wrap":34055,"decrement wrap":34056,invert:5386},Vv={frag:Hw,vert:Bw},Z1={cw:Gv,ccw:Q1};function Nf(y){return Array.isArray(y)||t(y)||P0(y)}function Xv(y){return y.sort(function(E,O){return E===ua?-1:O===ua?1:E<O?-1:1})}function Tr(y,E,O,et){this.thisDep=y,this.contextDep=E,this.propDep=O,this.append=et}function Pa(y){return y&&!(y.thisDep||y.contextDep||y.propDep)}function _n(y){return new Tr(!1,!1,!1,y)}function Ur(y,E){var O=y.type;if(O===C1){var et=y.data.length;return new Tr(!0,et>=1,et>=2,E)}else if(O===xf){var ht=y.data;return new Tr(ht.thisDep,ht.contextDep,ht.propDep,E)}else{if(O===yv)return new Tr(!1,!1,!1,E);if(O===bv){for(var J=!1,rt=!1,_t=!1,St=0;St<y.data.length;++St){var Lt=y.data[St];if(Lt.type===O1)_t=!0;else if(Lt.type===P1)rt=!0;else if(Lt.type===I1)J=!0;else if(Lt.type===C1){J=!0;var Et=Lt.data;Et>=1&&(rt=!0),Et>=2&&(_t=!0)}else Lt.type===xf&&(J=J||Lt.data.thisDep,rt=rt||Lt.data.contextDep,_t=_t||Lt.data.propDep)}return new Tr(J,rt,_t,E)}else return new Tr(O===I1,O===P1,O===O1,E)}}var Yv=new Tr(!1,!1,!1,function(){});function a4(y,E,O,et,ht,J,rt,_t,St,Lt,Et,Rt,Gt,Mt,Ot){var X=Lt.Record,at={add:32774,subtract:32778,"reverse subtract":32779};O.ext_blend_minmax&&(at.min=t4,at.max=e4);var zt=O.angle_instanced_arrays,Wt=O.webgl_draw_buffers,mt={dirty:!0,profile:Ot.profile},Yt={},bt=[],It={},gt={};function $t(z){return z.replace(".","_")}function xe(z,k,F){var j=$t(z);bt.push(z),Yt[j]=mt[j]=!!F,It[j]=k}function Ie(z,k,F){var j=$t(z);bt.push(z),Array.isArray(F)?(mt[j]=F.slice(),Yt[j]=F.slice()):mt[j]=Yt[j]=F,gt[j]=k}xe(wv,Vw),xe(_v,Ww),Ie(Mv,"blendColor",[0,0,0,0]),Ie($1,"blendEquationSeparate",[Uv,Uv]),Ie(F1,"blendFuncSeparate",[Bv,Hv,Bv,Hv]),xe(kv,Yw,!0),Ie(Sv,"depthFunc",n4),Ie(Ev,"depthRange",[0,1]),Ie(Av,"depthMask",!0),Ie(q1,q1,[!0,!0,!0,!0]),xe(Tv,jw),Ie(zv,"cullFace",As),Ie(D1,D1,Q1),Ie(G1,G1,1),xe(Lv,Qw),Ie(H1,"polygonOffset",[0,0]),xe(Nv,Zw),xe(Rv,Jw),Ie(B1,"sampleCoverage",[1,!1]),xe(Cv,Xw),Ie(Ov,"stencilMask",-1),Ie(U1,"stencilFunc",[o4,0,-1]),Ie(j1,"stencilOpSeparate",[Xc,Ca,Ca,Ca]),Ie(Fc,"stencilOpSeparate",[As,Ca,Ca,Ca]),xe(Pv,Kw),Ie(yf,"scissor",[0,0,y.drawingBufferWidth,y.drawingBufferHeight]),Ie(ua,ua,[0,0,y.drawingBufferWidth,y.drawingBufferHeight]);var Ht={gl:y,context:Gt,strings:E,next:Yt,current:mt,draw:Rt,elements:J,buffer:ht,shader:Et,attributes:Lt.state,vao:Lt,uniforms:St,framebuffer:_t,extensions:O,timer:Mt,isBufferArgs:Nf},Nt={primTypes:hi,compareFuncs:Ei,blendFuncs:J0,blendEquations:at,stencilOps:Oa,glTypes:xs,orientationType:Z1};S.optional(function(){Ht.isArrayLike=vn}),Wt&&(Nt.backBuffer=[As],Nt.drawBuffer=Ke(et.maxDrawbuffers,function(z){return z===0?[0]:Ke(z,function(k){return r4+k})}));var pt=0;function Ne(){var z=$w(),k=z.link,F=z.global;z.id=pt++,z.batchId="0";var j=k(Ht),Y=z.shared={props:"a0"};Object.keys(Ht).forEach(function(I){Y[I]=F.def(j,".",I)}),S.optional(function(){z.CHECK=k(S),z.commandStr=S.guessCommand(),z.command=k(z.commandStr),z.assert=function(I,T,U){I("if(!(",T,"))",this.CHECK,".commandRaise(",k(U),",",this.command,");")},Nt.invalidBlendCombinations=Wv});var G=z.next={},q=z.current={};Object.keys(gt).forEach(function(I){Array.isArray(mt[I])&&(G[I]=F.def(Y.next,".",I),q[I]=F.def(Y.current,".",I))});var B=z.constants={};Object.keys(Nt).forEach(function(I){B[I]=F.def(JSON.stringify(Nt[I]))}),z.invoke=function(I,T){switch(T.type){case C1:var U=["this",Y.context,Y.props,z.batchId];return I.def(k(T.data),".call(",U.slice(0,Math.max(T.data.length+1,4)),")");case O1:return I.def(Y.props,T.data);case P1:return I.def(Y.context,T.data);case I1:return I.def("this",T.data);case xf:return T.data.append(z,I),T.data.ref;case yv:return T.data.toString();case bv:return T.data.map(function(K){return z.invoke(I,K)})}},z.attribCache={};var L={};return z.scopeAttrib=function(I){var T=E.id(I);if(T in L)return L[T];var U=Lt.scope[T];U||(U=Lt.scope[T]=new X);var K=L[T]=k(U);return K},z}function Be(z){var k=z.static,F=z.dynamic,j;if(qc in k){var Y=!!k[qc];j=_n(function(q,B){return Y}),j.enable=Y}else if(qc in F){var G=F[qc];j=Ur(G,function(q,B){return q.invoke(B,G)})}return j}function oe(z,k){var F=z.static,j=z.dynamic;if(Ms in F){var Y=F[Ms];return Y?(Y=_t.getFramebuffer(Y),S.command(Y,"invalid framebuffer object"),_n(function(q,B){var L=q.link(Y),I=q.shared;B.set(I.framebuffer,".next",L);var T=I.context;return B.set(T,"."+Mi,L+".width"),B.set(T,"."+ki,L+".height"),L})):_n(function(q,B){var L=q.shared;B.set(L.framebuffer,".next","null");var I=L.context;return B.set(I,"."+Mi,I+"."+$v),B.set(I,"."+ki,I+"."+Fv),"null"})}else if(Ms in j){var G=j[Ms];return Ur(G,function(q,B){var L=q.invoke(B,G),I=q.shared,T=I.framebuffer,U=B.def(T,".getFramebuffer(",L,")");S.optional(function(){q.assert(B,"!"+L+"||"+U,"invalid framebuffer object")}),B.set(T,".next",U);var K=I.context;return B.set(K,"."+Mi,U+"?"+U+".width:"+K+"."+$v),B.set(K,"."+ki,U+"?"+U+".height:"+K+"."+Fv),U})}else return null}function Je(z,k,F){var j=z.static,Y=z.dynamic;function G(L){if(L in j){var I=j[L];S.commandType(I,"object","invalid "+L,F.commandStr);var T=!0,U=I.x|0,K=I.y|0,lt,ut;return"width"in I?(lt=I.width|0,S.command(lt>=0,"invalid "+L,F.commandStr)):T=!1,"height"in I?(ut=I.height|0,S.command(ut>=0,"invalid "+L,F.commandStr)):T=!1,new Tr(!T&&k&&k.thisDep,!T&&k&&k.contextDep,!T&&k&&k.propDep,function(ue,je){var ne=ue.shared.context,Ee=lt;"width"in I||(Ee=je.def(ne,".",Mi,"-",U));var qe=ut;return"height"in I||(qe=je.def(ne,".",ki,"-",K)),[U,K,Ee,qe]})}else if(L in Y){var ct=Y[L],Tt=Ur(ct,function(ue,je){var ne=ue.invoke(je,ct);S.optional(function(){ue.assert(je,ne+"&&typeof "+ne+'==="object"',"invalid "+L)});var Ee=ue.shared.context,qe=je.def(ne,".x|0"),bo=je.def(ne,".y|0"),fn=je.def('"width" in ',ne,"?",ne,".width|0:","(",Ee,".",Mi,"-",qe,")"),zr=je.def('"height" in ',ne,"?",ne,".height|0:","(",Ee,".",ki,"-",bo,")");return S.optional(function(){ue.assert(je,fn+">=0&&"+zr+">=0","invalid "+L)}),[qe,bo,fn,zr]});return k&&(Tt.thisDep=Tt.thisDep||k.thisDep,Tt.contextDep=Tt.contextDep||k.contextDep,Tt.propDep=Tt.propDep||k.propDep),Tt}else return k?new Tr(k.thisDep,k.contextDep,k.propDep,function(ue,je){var ne=ue.shared.context;return[0,0,je.def(ne,".",Mi),je.def(ne,".",ki)]}):null}var q=G(ua);if(q){var B=q;q=new Tr(q.thisDep,q.contextDep,q.propDep,function(L,I){var T=B.append(L,I),U=L.shared.context;return I.set(U,"."+Fw,T[2]),I.set(U,"."+qw,T[3]),T})}return{viewport:q,scissor_box:G(yf)}}function Fe(z,k){var F=z.static,j=typeof F[Gc]=="string"&&typeof F[Dc]=="string";if(j){if(Object.keys(k.dynamic).length>0)return null;var Y=k.static,G=Object.keys(Y);if(G.length>0&&typeof Y[G[0]]=="number"){for(var q=[],B=0;B<G.length;++B)S(typeof Y[G[B]]=="number","must specify all vertex attribute locations when using vaos"),q.push([Y[G[B]]|0,G[B]]);return q}}return null}function Ye(z,k,F){var j=z.static,Y=z.dynamic;function G(T){if(T in j){var U=E.id(j[T]);S.optional(function(){Et.shader(Vv[T],U,S.guessCommand())});var K=_n(function(){return U});return K.id=U,K}else if(T in Y){var lt=Y[T];return Ur(lt,function(ut,ct){var Tt=ut.invoke(ct,lt),ue=ct.def(ut.shared.strings,".id(",Tt,")");return S.optional(function(){ct(ut.shared.shader,".shader(",Vv[T],",",ue,",",ut.command,");")}),ue})}return null}var q=G(Gc),B=G(Dc),L=null,I;return Pa(q)&&Pa(B)?(L=Et.program(B.id,q.id,null,F),I=_n(function(T,U){return T.link(L)})):I=new Tr(q&&q.thisDep||B&&B.thisDep,q&&q.contextDep||B&&B.contextDep,q&&q.propDep||B&&B.propDep,function(T,U){var K=T.shared.shader,lt;q?lt=q.append(T,U):lt=U.def(K,".",Gc);var ut;B?ut=B.append(T,U):ut=U.def(K,".",Dc);var ct=K+".program("+ut+","+lt;return S.optional(function(){ct+=","+T.command}),U.def(ct+")")}),{frag:q,vert:B,progVar:I,program:L}}function yo(z,k){var F=z.static,j=z.dynamic;function Y(){if(ks in F){var T=F[ks];Nf(T)?T=J.getElements(J.create(T,!0)):T&&(T=J.getElements(T),S.command(T,"invalid elements",k.commandStr));var U=_n(function(lt,ut){if(T){var ct=lt.link(T);return lt.ELEMENTS=ct,ct}return lt.ELEMENTS=null,null});return U.value=T,U}else if(ks in j){var K=j[ks];return Ur(K,function(lt,ut){var ct=lt.shared,Tt=ct.isBufferArgs,ue=ct.elements,je=lt.invoke(ut,K),ne=ut.def("null"),Ee=ut.def(Tt,"(",je,")"),qe=lt.cond(Ee).then(ne,"=",ue,".createStream(",je,");").else(ne,"=",ue,".getElements(",je,");");return S.optional(function(){lt.assert(qe.else,"!"+je+"||"+ne,"invalid elements")}),ut.entry(qe),ut.exit(lt.cond(Ee).then(ue,".destroyStream(",ne,");")),lt.ELEMENTS=ne,ne})}return null}var G=Y();function q(){if(Ss in F){var T=F[Ss];return S.commandParameter(T,hi,"invalid primitve",k.commandStr),_n(function(K,lt){return hi[T]})}else if(Ss in j){var U=j[Ss];return Ur(U,function(K,lt){var ut=K.constants.primTypes,ct=K.invoke(lt,U);return S.optional(function(){K.assert(lt,ct+" in "+ut,"invalid primitive, must be one of "+Object.keys(hi))}),lt.def(ut,"[",ct,"]")})}else if(G)return Pa(G)?G.value?_n(function(K,lt){return lt.def(K.ELEMENTS,".primType")}):_n(function(){return Dv}):new Tr(G.thisDep,G.contextDep,G.propDep,function(K,lt){var ut=K.ELEMENTS;return lt.def(ut,"?",ut,".primType:",Dv)});return null}function B(T,U){if(T in F){var K=F[T]|0;return S.command(!U||K>=0,"invalid "+T,k.commandStr),_n(function(ut,ct){return U&&(ut.OFFSET=K),K})}else if(T in j){var lt=j[T];return Ur(lt,function(ut,ct){var Tt=ut.invoke(ct,lt);return U&&(ut.OFFSET=Tt,S.optional(function(){ut.assert(ct,Tt+">=0","invalid "+T)})),Tt})}else if(U&&G)return _n(function(ut,ct){return ut.OFFSET="0",0});return null}var L=B(bf,!0);function I(){if(Es in F){var T=F[Es]|0;return S.command(typeof T=="number"&&T>=0,"invalid vertex count",k.commandStr),_n(function(){return T})}else if(Es in j){var U=j[Es];return Ur(U,function(ut,ct){var Tt=ut.invoke(ct,U);return S.optional(function(){ut.assert(ct,"typeof "+Tt+'==="number"&&'+Tt+">=0&&"+Tt+"===("+Tt+"|0)","invalid vertex count")}),Tt})}else if(G)if(Pa(G)){if(G)return L?new Tr(L.thisDep,L.contextDep,L.propDep,function(ut,ct){var Tt=ct.def(ut.ELEMENTS,".vertCount-",ut.OFFSET);return S.optional(function(){ut.assert(ct,Tt+">=0","invalid vertex offset/element buffer too small")}),Tt}):_n(function(ut,ct){return ct.def(ut.ELEMENTS,".vertCount")});var K=_n(function(){return-1});return S.optional(function(){K.MISSING=!0}),K}else{var lt=new Tr(G.thisDep||L.thisDep,G.contextDep||L.contextDep,G.propDep||L.propDep,function(ut,ct){var Tt=ut.ELEMENTS;return ut.OFFSET?ct.def(Tt,"?",Tt,".vertCount-",ut.OFFSET,":-1"):ct.def(Tt,"?",Tt,".vertCount:-1")});return S.optional(function(){lt.DYNAMIC=!0}),lt}return null}return{elements:G,primitive:q(),count:I(),instances:B(wf,!1),offset:L}}function Mn(z,k){var F=z.static,j=z.dynamic,Y={};return bt.forEach(function(G){var q=$t(G);function B(L,I){if(G in F){var T=L(F[G]);Y[q]=_n(function(){return T})}else if(G in j){var U=j[G];Y[q]=Ur(U,function(K,lt){return I(K,lt,K.invoke(lt,U))})}}switch(G){case Tv:case _v:case wv:case Cv:case kv:case Pv:case Lv:case Nv:case Rv:case Av:return B(function(L){return S.commandType(L,"boolean",G,k.commandStr),L},function(L,I,T){return S.optional(function(){L.assert(I,"typeof "+T+'==="boolean"',"invalid flag "+G,L.commandStr)}),T});case Sv:return B(function(L){return S.commandParameter(L,Ei,"invalid "+G,k.commandStr),Ei[L]},function(L,I,T){var U=L.constants.compareFuncs;return S.optional(function(){L.assert(I,T+" in "+U,"invalid "+G+", must be one of "+Object.keys(Ei))}),I.def(U,"[",T,"]")});case Ev:return B(function(L){return S.command(vn(L)&&L.length===2&&typeof L[0]=="number"&&typeof L[1]=="number"&&L[0]<=L[1],"depth range is 2d array",k.commandStr),L},function(L,I,T){S.optional(function(){L.assert(I,L.shared.isArrayLike+"("+T+")&&"+T+".length===2&&typeof "+T+'[0]==="number"&&typeof '+T+'[1]==="number"&&'+T+"[0]<="+T+"[1]","depth range must be a 2d array")});var U=I.def("+",T,"[0]"),K=I.def("+",T,"[1]");return[U,K]});case F1:return B(function(L){S.commandType(L,"object","blend.func",k.commandStr);var I="srcRGB"in L?L.srcRGB:L.src,T="srcAlpha"in L?L.srcAlpha:L.src,U="dstRGB"in L?L.dstRGB:L.dst,K="dstAlpha"in L?L.dstAlpha:L.dst;return S.commandParameter(I,J0,q+".srcRGB",k.commandStr),S.commandParameter(T,J0,q+".srcAlpha",k.commandStr),S.commandParameter(U,J0,q+".dstRGB",k.commandStr),S.commandParameter(K,J0,q+".dstAlpha",k.commandStr),S.command(Wv.indexOf(I+", "+U)===-1,"unallowed blending combination (srcRGB, dstRGB) = ("+I+", "+U+")",k.commandStr),[J0[I],J0[U],J0[T],J0[K]]},function(L,I,T){var U=L.constants.blendFuncs;S.optional(function(){L.assert(I,T+"&&typeof "+T+'==="object"',"invalid blend func, must be an object")});function K(ne,Ee){var qe=I.def('"',ne,Ee,'" in ',T,"?",T,".",ne,Ee,":",T,".",ne);return S.optional(function(){L.assert(I,qe+" in "+U,"invalid "+G+"."+ne+Ee+", must be one of "+Object.keys(J0))}),qe}var lt=K("src","RGB"),ut=K("dst","RGB");S.optional(function(){var ne=L.constants.invalidBlendCombinations;L.assert(I,ne+".indexOf("+lt+'+", "+'+ut+") === -1 ","unallowed blending combination for (srcRGB, dstRGB)")});var ct=I.def(U,"[",lt,"]"),Tt=I.def(U,"[",K("src","Alpha"),"]"),ue=I.def(U,"[",ut,"]"),je=I.def(U,"[",K("dst","Alpha"),"]");return[ct,ue,Tt,je]});case $1:return B(function(L){if(typeof L=="string")return S.commandParameter(L,at,"invalid "+G,k.commandStr),[at[L],at[L]];if(typeof L=="object")return S.commandParameter(L.rgb,at,G+".rgb",k.commandStr),S.commandParameter(L.alpha,at,G+".alpha",k.commandStr),[at[L.rgb],at[L.alpha]];S.commandRaise("invalid blend.equation",k.commandStr)},function(L,I,T){var U=L.constants.blendEquations,K=I.def(),lt=I.def(),ut=L.cond("typeof ",T,'==="string"');return S.optional(function(){function ct(Tt,ue,je){L.assert(Tt,je+" in "+U,"invalid "+ue+", must be one of "+Object.keys(at))}ct(ut.then,G,T),L.assert(ut.else,T+"&&typeof "+T+'==="object"',"invalid "+G),ct(ut.else,G+".rgb",T+".rgb"),ct(ut.else,G+".alpha",T+".alpha")}),ut.then(K,"=",lt,"=",U,"[",T,"];"),ut.else(K,"=",U,"[",T,".rgb];",lt,"=",U,"[",T,".alpha];"),I(ut),[K,lt]});case Mv:return B(function(L){return S.command(vn(L)&&L.length===4,"blend.color must be a 4d array",k.commandStr),Ke(4,function(I){return+L[I]})},function(L,I,T){return S.optional(function(){L.assert(I,L.shared.isArrayLike+"("+T+")&&"+T+".length===4","blend.color must be a 4d array")}),Ke(4,function(U){return I.def("+",T,"[",U,"]")})});case Ov:return B(function(L){return S.commandType(L,"number",q,k.commandStr),L|0},function(L,I,T){return S.optional(function(){L.assert(I,"typeof "+T+'==="number"',"invalid stencil.mask")}),I.def(T,"|0")});case U1:return B(function(L){S.commandType(L,"object",q,k.commandStr);var I=L.cmp||"keep",T=L.ref||0,U="mask"in L?L.mask:-1;return S.commandParameter(I,Ei,G+".cmp",k.commandStr),S.commandType(T,"number",G+".ref",k.commandStr),S.commandType(U,"number",G+".mask",k.commandStr),[Ei[I],T,U]},function(L,I,T){var U=L.constants.compareFuncs;S.optional(function(){function ct(){L.assert(I,Array.prototype.join.call(arguments,""),"invalid stencil.func")}ct(T+"&&typeof ",T,'==="object"'),ct('!("cmp" in ',T,")||(",T,".cmp in ",U,")")});var K=I.def('"cmp" in ',T,"?",U,"[",T,".cmp]",":",Ca),lt=I.def(T,".ref|0"),ut=I.def('"mask" in ',T,"?",T,".mask|0:-1");return[K,lt,ut]});case j1:case Fc:return B(function(L){S.commandType(L,"object",q,k.commandStr);var I=L.fail||"keep",T=L.zfail||"keep",U=L.zpass||"keep";return S.commandParameter(I,Oa,G+".fail",k.commandStr),S.commandParameter(T,Oa,G+".zfail",k.commandStr),S.commandParameter(U,Oa,G+".zpass",k.commandStr),[G===Fc?As:Xc,Oa[I],Oa[T],Oa[U]]},function(L,I,T){var U=L.constants.stencilOps;S.optional(function(){L.assert(I,T+"&&typeof "+T+'==="object"',"invalid "+G)});function K(lt){return S.optional(function(){L.assert(I,'!("'+lt+'" in '+T+")||("+T+"."+lt+" in "+U+")","invalid "+G+"."+lt+", must be one of "+Object.keys(Oa))}),I.def('"',lt,'" in ',T,"?",U,"[",T,".",lt,"]:",Ca)}return[G===Fc?As:Xc,K("fail"),K("zfail"),K("zpass")]});case H1:return B(function(L){S.commandType(L,"object",q,k.commandStr);var I=L.factor|0,T=L.units|0;return S.commandType(I,"number",q+".factor",k.commandStr),S.commandType(T,"number",q+".units",k.commandStr),[I,T]},function(L,I,T){S.optional(function(){L.assert(I,T+"&&typeof "+T+'==="object"',"invalid "+G)});var U=I.def(T,".factor|0"),K=I.def(T,".units|0");return[U,K]});case zv:return B(function(L){var I=0;return L==="front"?I=Xc:L==="back"&&(I=As),S.command(!!I,q,k.commandStr),I},function(L,I,T){return S.optional(function(){L.assert(I,T+'==="front"||'+T+'==="back"',"invalid cull.face")}),I.def(T,'==="front"?',Xc,":",As)});case G1:return B(function(L){return S.command(typeof L=="number"&&L>=et.lineWidthDims[0]&&L<=et.lineWidthDims[1],"invalid line width, must be a positive number between "+et.lineWidthDims[0]+" and "+et.lineWidthDims[1],k.commandStr),L},function(L,I,T){return S.optional(function(){L.assert(I,"typeof "+T+'==="number"&&'+T+">="+et.lineWidthDims[0]+"&&"+T+"<="+et.lineWidthDims[1],"invalid line width")}),T});case D1:return B(function(L){return S.commandParameter(L,Z1,q,k.commandStr),Z1[L]},function(L,I,T){return S.optional(function(){L.assert(I,T+'==="cw"||'+T+'==="ccw"',"invalid frontFace, must be one of cw,ccw")}),I.def(T+'==="cw"?'+Gv+":"+Q1)});case q1:return B(function(L){return S.command(vn(L)&&L.length===4,"color.mask must be length 4 array",k.commandStr),L.map(function(I){return!!I})},function(L,I,T){return S.optional(function(){L.assert(I,L.shared.isArrayLike+"("+T+")&&"+T+".length===4","invalid color.mask")}),Ke(4,function(U){return"!!"+T+"["+U+"]"})});case B1:return B(function(L){S.command(typeof L=="object"&&L,q,k.commandStr);var I="value"in L?L.value:1,T=!!L.invert;return S.command(typeof I=="number"&&I>=0&&I<=1,"sample.coverage.value must be a number between 0 and 1",k.commandStr),[I,T]},function(L,I,T){S.optional(function(){L.assert(I,T+"&&typeof "+T+'==="object"',"invalid sample.coverage")});var U=I.def('"value" in ',T,"?+",T,".value:1"),K=I.def("!!",T,".invert");return[U,K]})}}),Y}function qn(z,k){var F=z.static,j=z.dynamic,Y={};return Object.keys(F).forEach(function(G){var q=F[G],B;if(typeof q=="number"||typeof q=="boolean")B=_n(function(){return q});else if(typeof q=="function"){var L=q._reglType;L==="texture2d"||L==="textureCube"?B=_n(function(I){return I.link(q)}):L==="framebuffer"||L==="framebufferCube"?(S.command(q.color.length>0,'missing color attachment for framebuffer sent to uniform "'+G+'"',k.commandStr),B=_n(function(I){return I.link(q.color[0])})):S.commandRaise('invalid data for uniform "'+G+'"',k.commandStr)}else vn(q)?B=_n(function(I){var T=I.global.def("[",Ke(q.length,function(U){return S.command(typeof q[U]=="number"||typeof q[U]=="boolean","invalid uniform "+G,I.commandStr),q[U]}),"]");return T}):S.commandRaise('invalid or missing data for uniform "'+G+'"',k.commandStr);B.value=q,Y[G]=B}),Object.keys(j).forEach(function(G){var q=j[G];Y[G]=Ur(q,function(B,L){return B.invoke(L,q)})}),Y}function ao(z,k){var F=z.static,j=z.dynamic,Y={};return Object.keys(F).forEach(function(G){var q=F[G],B=E.id(G),L=new X;if(Nf(q))L.state=_i,L.buffer=ht.getBuffer(ht.create(q,Si,!1,!0)),L.type=0;else{var I=ht.getBuffer(q);if(I)L.state=_i,L.buffer=I,L.type=0;else if(S.command(typeof q=="object"&&q,"invalid data for attribute "+G,k.commandStr),"constant"in q){var T=q.constant;L.buffer="null",L.state=R1,typeof T=="number"?L.x=T:(S.command(vn(T)&&T.length>0&&T.length<=4,"invalid constant for attribute "+G,k.commandStr),wi.forEach(function(ue,je){je<T.length&&(L[ue]=T[je])}))}else{Nf(q.buffer)?I=ht.getBuffer(ht.create(q.buffer,Si,!1,!0)):I=ht.getBuffer(q.buffer),S.command(!!I,'missing buffer for attribute "'+G+'"',k.commandStr);var U=q.offset|0;S.command(U>=0,'invalid offset for attribute "'+G+'"',k.commandStr);var K=q.stride|0;S.command(K>=0&&K<256,'invalid stride for attribute "'+G+'", must be integer betweeen [0, 255]',k.commandStr);var lt=q.size|0;S.command(!("size"in q)||lt>0&&lt<=4,'invalid size for attribute "'+G+'", must be 1,2,3,4',k.commandStr);var ut=!!q.normalized,ct=0;"type"in q&&(S.commandParameter(q.type,xs,"invalid type for attribute "+G,k.commandStr),ct=xs[q.type]);var Tt=q.divisor|0;"divisor"in q&&(S.command(Tt===0||zt,'cannot specify divisor for attribute "'+G+'", instancing not supported',k.commandStr),S.command(Tt>=0,'invalid divisor for attribute "'+G+'"',k.commandStr)),S.optional(function(){var ue=k.commandStr,je=["buffer","offset","divisor","normalized","type","size","stride"];Object.keys(q).forEach(function(ne){S.command(je.indexOf(ne)>=0,'unknown parameter "'+ne+'" for attribute pointer "'+G+'" (valid parameters are '+je+")",ue)})}),L.buffer=I,L.state=_i,L.size=lt,L.normalized=ut,L.type=ct||I.dtype,L.offset=U,L.stride=K,L.divisor=Tt}}Y[G]=_n(function(ue,je){var ne=ue.attribCache;if(B in ne)return ne[B];var Ee={isStream:!1};return Object.keys(L).forEach(function(qe){Ee[qe]=L[qe]}),L.buffer&&(Ee.buffer=ue.link(L.buffer),Ee.type=Ee.type||Ee.buffer+".dtype"),ne[B]=Ee,Ee})}),Object.keys(j).forEach(function(G){var q=j[G];function B(L,I){var T=L.invoke(I,q),U=L.shared,K=L.constants,lt=U.isBufferArgs,ut=U.buffer;S.optional(function(){L.assert(I,T+"&&(typeof "+T+'==="object"||typeof '+T+'==="function")&&('+lt+"("+T+")||"+ut+".getBuffer("+T+")||"+ut+".getBuffer("+T+".buffer)||"+lt+"("+T+'.buffer)||("constant" in '+T+"&&(typeof "+T+'.constant==="number"||'+U.isArrayLike+"("+T+".constant))))",'invalid dynamic attribute "'+G+'"')});var ct={isStream:I.def(!1)},Tt=new X;Tt.state=_i,Object.keys(Tt).forEach(function(Ee){ct[Ee]=I.def(""+Tt[Ee])});var ue=ct.buffer,je=ct.type;I("if(",lt,"(",T,")){",ct.isStream,"=true;",ue,"=",ut,".createStream(",Si,",",T,");",je,"=",ue,".dtype;","}else{",ue,"=",ut,".getBuffer(",T,");","if(",ue,"){",je,"=",ue,".dtype;",'}else if("constant" in ',T,"){",ct.state,"=",R1,";","if(typeof "+T+'.constant === "number"){',ct[wi[0]],"=",T,".constant;",wi.slice(1).map(function(Ee){return ct[Ee]}).join("="),"=0;","}else{",wi.map(function(Ee,qe){return ct[Ee]+"="+T+".constant.length>"+qe+"?"+T+".constant["+qe+"]:0;"}).join(""),"}}else{","if(",lt,"(",T,".buffer)){",ue,"=",ut,".createStream(",Si,",",T,".buffer);","}else{",ue,"=",ut,".getBuffer(",T,".buffer);","}",je,'="type" in ',T,"?",K.glTypes,"[",T,".type]:",ue,".dtype;",ct.normalized,"=!!",T,".normalized;");function ne(Ee){I(ct[Ee],"=",T,".",Ee,"|0;")}return ne("size"),ne("offset"),ne("stride"),ne("divisor"),I("}}"),I.exit("if(",ct.isStream,"){",ut,".destroyStream(",ue,");","}"),ct}Y[G]=Ur(q,B)}),Y}function Ln(z,k){var F=z.static,j=z.dynamic;if(Hc in F){var Y=F[Hc];return Y!==null&&Lt.getVAO(Y)===null&&(Y=Lt.createVAO(Y)),_n(function(q){return q.link(Lt.getVAO(Y))})}else if(Hc in j){var G=j[Hc];return Ur(G,function(q,B){var L=q.invoke(B,G);return B.def(q.shared.vao+".getVAO("+L+")")})}return null}function Vo(z){var k=z.static,F=z.dynamic,j={};return Object.keys(k).forEach(function(Y){var G=k[Y];j[Y]=_n(function(q,B){return typeof G=="number"||typeof G=="boolean"?""+G:q.link(G)})}),Object.keys(F).forEach(function(Y){var G=F[Y];j[Y]=Ur(G,function(q,B){return q.invoke(B,G)})}),j}function kn(z,k,F,j,Y){var G=z.static,q=z.dynamic;S.optional(function(){var ne=[Ms,Dc,Gc,ks,Ss,bf,Es,wf,qc,Hc].concat(bt);function Ee(qe){Object.keys(qe).forEach(function(bo){S.command(ne.indexOf(bo)>=0,'unknown parameter "'+bo+'"',Y.commandStr)})}Ee(G),Ee(q)});var B=Fe(z,k),L=oe(z,Y),I=Je(z,L,Y),T=yo(z,Y),U=Mn(z,Y),K=Ye(z,Y,B);function lt(ne){var Ee=I[ne];Ee&&(U[ne]=Ee)}lt(ua),lt($t(yf));var ut=Object.keys(U).length>0,ct={framebuffer:L,draw:T,shader:K,state:U,dirty:ut,scopeVAO:null,drawVAO:null,useVAO:!1,attributes:{}};if(ct.profile=Be(z,Y),ct.uniforms=qn(F,Y),ct.drawVAO=ct.scopeVAO=Ln(z,Y),!ct.drawVAO&&K.program&&!B&&O.angle_instanced_arrays){var Tt=!0,ue=K.program.attributes.map(function(ne){var Ee=k.static[ne];return Tt=Tt&&!!Ee,Ee});if(Tt&&ue.length>0){var je=Lt.getVAO(Lt.createVAO(ue));ct.drawVAO=new Tr(null,null,null,function(ne,Ee){return ne.link(je)}),ct.useVAO=!0}}return B?ct.useVAO=!0:ct.attributes=ao(k,Y),ct.context=Vo(j,Y),ct}function Nn(z,k,F){var j=z.shared,Y=j.context,G=z.scope();Object.keys(F).forEach(function(q){k.save(Y,"."+q);var B=F[q],L=B.append(z,k);Array.isArray(L)?G(Y,".",q,"=[",L.join(),"];"):G(Y,".",q,"=",L,";")}),k(G)}function Rn(z,k,F,j){var Y=z.shared,G=Y.gl,q=Y.framebuffer,B;Wt&&(B=k.def(Y.extensions,".webgl_draw_buffers"));var L=z.constants,I=L.drawBuffer,T=L.backBuffer,U;F?U=F.append(z,k):U=k.def(q,".next"),j||k("if(",U,"!==",q,".cur){"),k("if(",U,"){",G,".bindFramebuffer(",jv,",",U,".framebuffer);"),Wt&&k(B,".drawBuffersWEBGL(",I,"[",U,".colorAttachments.length]);"),k("}else{",G,".bindFramebuffer(",jv,",null);"),Wt&&k(B,".drawBuffersWEBGL(",T,");"),k("}",q,".cur=",U,";"),j||k("}")}function Qn(z,k,F){var j=z.shared,Y=j.gl,G=z.current,q=z.next,B=j.current,L=j.next,I=z.cond(B,".dirty");bt.forEach(function(T){var U=$t(T);if(!(U in F.state)){var K,lt;if(U in q){K=q[U],lt=G[U];var ut=Ke(mt[U].length,function(Tt){return I.def(K,"[",Tt,"]")});I(z.cond(ut.map(function(Tt,ue){return Tt+"!=="+lt+"["+ue+"]"}).join("||")).then(Y,".",gt[U],"(",ut,");",ut.map(function(Tt,ue){return lt+"["+ue+"]="+Tt}).join(";"),";"))}else{K=I.def(L,".",U);var ct=z.cond(K,"!==",B,".",U);I(ct),U in It?ct(z.cond(K).then(Y,".enable(",It[U],");").else(Y,".disable(",It[U],");"),B,".",U,"=",K,";"):ct(Y,".",gt[U],"(",K,");",B,".",U,"=",K,";")}}}),Object.keys(F.state).length===0&&I(B,".dirty=false;"),k(I)}function ir(z,k,F,j){var Y=z.shared,G=z.current,q=Y.current,B=Y.gl;Xv(Object.keys(F)).forEach(function(L){var I=F[L];if(!(j&&!j(I))){var T=I.append(z,k);if(It[L]){var U=It[L];Pa(I)?T?k(B,".enable(",U,");"):k(B,".disable(",U,");"):k(z.cond(T).then(B,".enable(",U,");").else(B,".disable(",U,");")),k(q,".",L,"=",T,";")}else if(vn(T)){var K=G[L];k(B,".",gt[L],"(",T,");",T.map(function(lt,ut){return K+"["+ut+"]="+lt}).join(";"),";")}else k(B,".",gt[L],"(",T,");",q,".",L,"=",T,";")}})}function mn(z,k){zt&&(z.instancing=k.def(z.shared.extensions,".angle_instanced_arrays"))}function Ue(z,k,F,j,Y){var G=z.shared,q=z.stats,B=G.current,L=G.timer,I=F.profile;function T(){return typeof performance=="undefined"?"Date.now()":"performance.now()"}var U,K;function lt(ne){U=k.def(),ne(U,"=",T(),";"),typeof Y=="string"?ne(q,".count+=",Y,";"):ne(q,".count++;"),Mt&&(j?(K=k.def(),ne(K,"=",L,".getNumPendingQueries();")):ne(L,".beginQuery(",q,");"))}function ut(ne){ne(q,".cpuTime+=",T(),"-",U,";"),Mt&&(j?ne(L,".pushScopeStats(",K,",",L,".getNumPendingQueries(),",q,");"):ne(L,".endQuery();"))}function ct(ne){var Ee=k.def(B,".profile");k(B,".profile=",ne,";"),k.exit(B,".profile=",Ee,";")}var Tt;if(I){if(Pa(I)){I.enable?(lt(k),ut(k.exit),ct("true")):ct("false");return}Tt=I.append(z,k),ct(Tt)}else Tt=k.def(B,".profile");var ue=z.block();lt(ue),k("if(",Tt,"){",ue,"}");var je=z.block();ut(je),k.exit("if(",Tt,"){",je,"}")}function cr(z,k,F,j,Y){var G=z.shared;function q(L){switch(L){case _f:case Sf:case Tf:return 2;case Mf:case Ef:case zf:return 3;case kf:case Af:case Lf:return 4;default:return 1}}function B(L,I,T){var U=G.gl,K=k.def(L,".location"),lt=k.def(G.attributes,"[",K,"]"),ut=T.state,ct=T.buffer,Tt=[T.x,T.y,T.z,T.w],ue=["buffer","normalized","offset","stride"];function je(){k("if(!",lt,".buffer){",U,".enableVertexAttribArray(",K,");}");var Ee=T.type,qe;if(T.size?qe=k.def(T.size,"||",I):qe=I,k("if(",lt,".type!==",Ee,"||",lt,".size!==",qe,"||",ue.map(function(fn){return lt+"."+fn+"!=="+T[fn]}).join("||"),"){",U,".bindBuffer(",Si,",",ct,".buffer);",U,".vertexAttribPointer(",[K,qe,Ee,T.normalized,T.stride,T.offset],");",lt,".type=",Ee,";",lt,".size=",qe,";",ue.map(function(fn){return lt+"."+fn+"="+T[fn]+";"}).join(""),"}"),zt){var bo=T.divisor;k("if(",lt,".divisor!==",bo,"){",z.instancing,".vertexAttribDivisorANGLE(",[K,bo],");",lt,".divisor=",bo,";}")}}function ne(){k("if(",lt,".buffer){",U,".disableVertexAttribArray(",K,");",lt,".buffer=null;","}if(",wi.map(function(Ee,qe){return lt+"."+Ee+"!=="+Tt[qe]}).join("||"),"){",U,".vertexAttrib4f(",K,",",Tt,");",wi.map(function(Ee,qe){return lt+"."+Ee+"="+Tt[qe]+";"}).join(""),"}")}ut===_i?je():ut===R1?ne():(k("if(",ut,"===",_i,"){"),je(),k("}else{"),ne(),k("}"))}j.forEach(function(L){var I=L.name,T=F.attributes[I],U;if(T){if(!Y(T))return;U=T.append(z,k)}else{if(!Y(Yv))return;var K=z.scopeAttrib(I);S.optional(function(){z.assert(k,K+".state","missing attribute "+I)}),U={},Object.keys(new X).forEach(function(lt){U[lt]=k.def(K,".",lt)})}B(z.link(L),q(L.info.type),U)})}function To(z,k,F,j,Y){for(var G=z.shared,q=G.gl,B,L=0;L<j.length;++L){var I=j[L],T=I.name,U=I.info.type,K=F.uniforms[T],lt=z.link(I),ut=lt+".location",ct;if(K){if(!Y(K))continue;if(Pa(K)){var Tt=K.value;if(S.command(Tt!==null&&typeof Tt!="undefined",'missing uniform "'+T+'"',z.commandStr),U===Wc||U===Vc){S.command(typeof Tt=="function"&&(U===Wc&&(Tt._reglType==="texture2d"||Tt._reglType==="framebuffer")||U===Vc&&(Tt._reglType==="textureCube"||Tt._reglType==="framebufferCube")),"invalid texture for uniform "+T,z.commandStr);var ue=z.link(Tt._texture||Tt.color[0]._texture);k(q,".uniform1i(",ut,",",ue+".bind());"),k.exit(ue,".unbind();")}else if(U===Bc||U===Uc||U===jc){S.optional(function(){S.command(vn(Tt),"invalid matrix for uniform "+T,z.commandStr),S.command(U===Bc&&Tt.length===4||U===Uc&&Tt.length===9||U===jc&&Tt.length===16,"invalid length for matrix uniform "+T,z.commandStr)});var je=z.global.def("new Float32Array(["+Array.prototype.slice.call(Tt)+"])"),ne=2;U===Uc?ne=3:U===jc&&(ne=4),k(q,".uniformMatrix",ne,"fv(",ut,",false,",je,");")}else{switch(U){case X1:S.commandType(Tt,"number","uniform "+T,z.commandStr),B="1f";break;case _f:S.command(vn(Tt)&&Tt.length===2,"uniform "+T,z.commandStr),B="2f";break;case Mf:S.command(vn(Tt)&&Tt.length===3,"uniform "+T,z.commandStr),B="3f";break;case kf:S.command(vn(Tt)&&Tt.length===4,"uniform "+T,z.commandStr),B="4f";break;case K1:S.commandType(Tt,"boolean","uniform "+T,z.commandStr),B="1i";break;case Y1:S.commandType(Tt,"number","uniform "+T,z.commandStr),B="1i";break;case Tf:S.command(vn(Tt)&&Tt.length===2,"uniform "+T,z.commandStr),B="2i";break;case Sf:S.command(vn(Tt)&&Tt.length===2,"uniform "+T,z.commandStr),B="2i";break;case zf:S.command(vn(Tt)&&Tt.length===3,"uniform "+T,z.commandStr),B="3i";break;case Ef:S.command(vn(Tt)&&Tt.length===3,"uniform "+T,z.commandStr),B="3i";break;case Lf:S.command(vn(Tt)&&Tt.length===4,"uniform "+T,z.commandStr),B="4i";break;case Af:S.command(vn(Tt)&&Tt.length===4,"uniform "+T,z.commandStr),B="4i";break}k(q,".uniform",B,"(",ut,",",vn(Tt)?Array.prototype.slice.call(Tt):Tt,");")}continue}else ct=K.append(z,k)}else{if(!Y(Yv))continue;ct=k.def(G.uniforms,"[",E.id(T),"]")}U===Wc?(S(!Array.isArray(ct),"must specify a scalar prop for textures"),k("if(",ct,"&&",ct,'._reglType==="framebuffer"){',ct,"=",ct,".color[0];","}")):U===Vc&&(S(!Array.isArray(ct),"must specify a scalar prop for cube maps"),k("if(",ct,"&&",ct,'._reglType==="framebufferCube"){',ct,"=",ct,".color[0];","}")),S.optional(function(){function zr($0,om){z.assert(k,$0,'bad data or missing for uniform "'+T+'".  '+om)}function J1($0){S(!Array.isArray(ct),"must not specify an array type for uniform"),zr("typeof "+ct+'==="'+$0+'"',"invalid type, expected "+$0)}function x0($0,om){Array.isArray(ct)?S(ct.length===$0,"must have length "+$0):zr(G.isArrayLike+"("+ct+")&&"+ct+".length==="+$0,"invalid vector, should have length "+$0,z.commandStr)}function em($0){S(!Array.isArray(ct),"must not specify a value type"),zr("typeof "+ct+'==="function"&&'+ct+'._reglType==="texture'+($0===qv?"2d":"Cube")+'"',"invalid texture type",z.commandStr)}switch(U){case Y1:J1("number");break;case Sf:x0(2,"number");break;case Ef:x0(3,"number");break;case Af:x0(4,"number");break;case X1:J1("number");break;case _f:x0(2,"number");break;case Mf:x0(3,"number");break;case kf:x0(4,"number");break;case K1:J1("boolean");break;case Tf:x0(2,"boolean");break;case zf:x0(3,"boolean");break;case Lf:x0(4,"boolean");break;case Bc:x0(4,"number");break;case Uc:x0(9,"number");break;case jc:x0(16,"number");break;case Wc:em(qv);break;case Vc:em(Uw);break}});var Ee=1;switch(U){case Wc:case Vc:var qe=k.def(ct,"._texture");k(q,".uniform1i(",ut,",",qe,".bind());"),k.exit(qe,".unbind();");continue;case Y1:case K1:B="1i";break;case Sf:case Tf:B="2i",Ee=2;break;case Ef:case zf:B="3i",Ee=3;break;case Af:case Lf:B="4i",Ee=4;break;case X1:B="1f";break;case _f:B="2f",Ee=2;break;case Mf:B="3f",Ee=3;break;case kf:B="4f",Ee=4;break;case Bc:B="Matrix2fv";break;case Uc:B="Matrix3fv";break;case jc:B="Matrix4fv";break}if(k(q,".uniform",B,"(",ut,","),B.charAt(0)==="M"){var bo=Math.pow(U-Bc+2,2),fn=z.global.def("new Float32Array(",bo,")");Array.isArray(ct)?k("false,(",Ke(bo,function(zr){return fn+"["+zr+"]="+ct[zr]}),",",fn,")"):k("false,(Array.isArray(",ct,")||",ct," instanceof Float32Array)?",ct,":(",Ke(bo,function(zr){return fn+"["+zr+"]="+ct+"["+zr+"]"}),",",fn,")")}else Ee>1?k(Ke(Ee,function(zr){return Array.isArray(ct)?ct[zr]:ct+"["+zr+"]"})):(S(!Array.isArray(ct),"uniform value must not be an array"),k(ct));k(");")}}function ke(z,k,F,j){var Y=z.shared,G=Y.gl,q=Y.draw,B=j.draw;function L(){var qe=B.elements,bo,fn=k;return qe?((qe.contextDep&&j.contextDynamic||qe.propDep)&&(fn=F),bo=qe.append(z,fn)):bo=fn.def(q,".",ks),bo&&fn("if("+bo+")"+G+".bindBuffer("+Gw+","+bo+".buffer.buffer);"),bo}function I(){var qe=B.count,bo,fn=k;return qe?((qe.contextDep&&j.contextDynamic||qe.propDep)&&(fn=F),bo=qe.append(z,fn),S.optional(function(){qe.MISSING&&z.assert(k,"false","missing vertex count"),qe.DYNAMIC&&z.assert(fn,bo+">=0","missing vertex count")})):(bo=fn.def(q,".",Es),S.optional(function(){z.assert(fn,bo+">=0","missing vertex count")})),bo}var T=L();function U(qe){var bo=B[qe];return bo?bo.contextDep&&j.contextDynamic||bo.propDep?bo.append(z,F):bo.append(z,k):k.def(q,".",qe)}var K=U(Ss),lt=U(bf),ut=I();if(typeof ut=="number"){if(ut===0)return}else F("if(",ut,"){"),F.exit("}");var ct,Tt;zt&&(ct=U(wf),Tt=z.instancing);var ue=T+".type",je=B.elements&&Pa(B.elements);function ne(){function qe(){F(Tt,".drawElementsInstancedANGLE(",[K,ut,ue,lt+"<<(("+ue+"-"+xv+")>>1)",ct],");")}function bo(){F(Tt,".drawArraysInstancedANGLE(",[K,lt,ut,ct],");")}T?je?qe():(F("if(",T,"){"),qe(),F("}else{"),bo(),F("}")):bo()}function Ee(){function qe(){F(G+".drawElements("+[K,ut,ue,lt+"<<(("+ue+"-"+xv+")>>1)"]+");")}function bo(){F(G+".drawArrays("+[K,lt,ut]+");")}T?je?qe():(F("if(",T,"){"),qe(),F("}else{"),bo(),F("}")):bo()}zt&&(typeof ct!="number"||ct>=0)?typeof ct=="string"?(F("if(",ct,">0){"),ne(),F("}else if(",ct,"<0){"),Ee(),F("}")):ne():Ee()}function no(z,k,F,j,Y){var G=Ne(),q=G.proc("body",Y);return S.optional(function(){G.commandStr=k.commandStr,G.command=G.link(k.commandStr)}),zt&&(G.instancing=q.def(G.shared.extensions,".angle_instanced_arrays")),z(G,q,F,j),G.compile().body}function vo(z,k,F,j){mn(z,k),F.useVAO?F.drawVAO?k(z.shared.vao,".setVAO(",F.drawVAO.append(z,k),");"):k(z.shared.vao,".setVAO(",z.shared.vao,".targetVAO);"):(k(z.shared.vao,".setVAO(null);"),cr(z,k,F,j.attributes,function(){return!0})),To(z,k,F,j.uniforms,function(){return!0}),ke(z,k,k,F)}function gn(z,k){var F=z.proc("draw",1);mn(z,F),Nn(z,F,k.context),Rn(z,F,k.framebuffer),Qn(z,F,k),ir(z,F,k.state),Ue(z,F,k,!1,!0);var j=k.shader.progVar.append(z,F);if(F(z.shared.gl,".useProgram(",j,".program);"),k.shader.program)vo(z,F,k,k.shader.program);else{F(z.shared.vao,".setVAO(null);");var Y=z.global.def("{}"),G=F.def(j,".id"),q=F.def(Y,"[",G,"]");F(z.cond(q).then(q,".call(this,a0);").else(q,"=",Y,"[",G,"]=",z.link(function(B){return no(vo,z,k,B,1)}),"(",j,");",q,".call(this,a0);"))}Object.keys(k.state).length>0&&F(z.shared.current,".dirty=true;")}function ta(z,k,F,j){z.batchId="a1",mn(z,k);function Y(){return!0}cr(z,k,F,j.attributes,Y),To(z,k,F,j.uniforms,Y),ke(z,k,k,F)}function Ts(z,k,F,j){mn(z,k);var Y=F.contextDep,G=k.def(),q="a0",B="a1",L=k.def();z.shared.props=L,z.batchId=G;var I=z.scope(),T=z.scope();k(I.entry,"for(",G,"=0;",G,"<",B,";++",G,"){",L,"=",q,"[",G,"];",T,"}",I.exit);function U(ue){return ue.contextDep&&Y||ue.propDep}function K(ue){return!U(ue)}if(F.needsContext&&Nn(z,T,F.context),F.needsFramebuffer&&Rn(z,T,F.framebuffer),ir(z,T,F.state,U),F.profile&&U(F.profile)&&Ue(z,T,F,!1,!0),j)F.useVAO?F.drawVAO?U(F.drawVAO)?T(z.shared.vao,".setVAO(",F.drawVAO.append(z,T),");"):I(z.shared.vao,".setVAO(",F.drawVAO.append(z,I),");"):I(z.shared.vao,".setVAO(",z.shared.vao,".targetVAO);"):(I(z.shared.vao,".setVAO(null);"),cr(z,I,F,j.attributes,K),cr(z,T,F,j.attributes,U)),To(z,I,F,j.uniforms,K),To(z,T,F,j.uniforms,U),ke(z,I,T,F);else{var lt=z.global.def("{}"),ut=F.shader.progVar.append(z,T),ct=T.def(ut,".id"),Tt=T.def(lt,"[",ct,"]");T(z.shared.gl,".useProgram(",ut,".program);","if(!",Tt,"){",Tt,"=",lt,"[",ct,"]=",z.link(function(ue){return no(ta,z,F,ue,2)}),"(",ut,");}",Tt,".call(this,a0[",G,"],",G,");")}}function N(z,k){var F=z.proc("batch",2);z.batchId="0",mn(z,F);var j=!1,Y=!0;Object.keys(k.context).forEach(function(lt){j=j||k.context[lt].propDep}),j||(Nn(z,F,k.context),Y=!1);var G=k.framebuffer,q=!1;G?(G.propDep?j=q=!0:G.contextDep&&j&&(q=!0),q||Rn(z,F,G)):Rn(z,F,null),k.state.viewport&&k.state.viewport.propDep&&(j=!0);function B(lt){return lt.contextDep&&j||lt.propDep}Qn(z,F,k),ir(z,F,k.state,function(lt){return!B(lt)}),(!k.profile||!B(k.profile))&&Ue(z,F,k,!1,"a1"),k.contextDep=j,k.needsContext=Y,k.needsFramebuffer=q;var L=k.shader.progVar;if(L.contextDep&&j||L.propDep)Ts(z,F,k,null);else{var I=L.append(z,F);if(F(z.shared.gl,".useProgram(",I,".program);"),k.shader.program)Ts(z,F,k,k.shader.program);else{F(z.shared.vao,".setVAO(null);");var T=z.global.def("{}"),U=F.def(I,".id"),K=F.def(T,"[",U,"]");F(z.cond(K).then(K,".call(this,a0,a1);").else(K,"=",T,"[",U,"]=",z.link(function(lt){return no(Ts,z,k,lt,2)}),"(",I,");",K,".call(this,a0,a1);"))}}Object.keys(k.state).length>0&&F(z.shared.current,".dirty=true;")}function ot(z,k){var F=z.proc("scope",3);z.batchId="a2";var j=z.shared,Y=j.current;Nn(z,F,k.context),k.framebuffer&&k.framebuffer.append(z,F),Xv(Object.keys(k.state)).forEach(function(q){var B=k.state[q],L=B.append(z,F);vn(L)?L.forEach(function(I,T){F.set(z.next[q],"["+T+"]",I)}):F.set(j.next,"."+q,L)}),Ue(z,F,k,!0,!0),[ks,bf,Es,wf,Ss].forEach(function(q){var B=k.draw[q];B&&F.set(j.draw,"."+q,""+B.append(z,F))}),Object.keys(k.uniforms).forEach(function(q){var B=k.uniforms[q].append(z,F);Array.isArray(B)&&(B="["+B.join()+"]"),F.set(j.uniforms,"["+E.id(q)+"]",B)}),Object.keys(k.attributes).forEach(function(q){var B=k.attributes[q].append(z,F),L=z.scopeAttrib(q);Object.keys(new X).forEach(function(I){F.set(L,"."+I,B[I])})}),k.scopeVAO&&F.set(j.vao,".targetVAO",k.scopeVAO.append(z,F));function G(q){var B=k.shader[q];B&&F.set(j.shader,"."+q,B.append(z,F))}G(Dc),G(Gc),Object.keys(k.state).length>0&&(F(Y,".dirty=true;"),F.exit(Y,".dirty=true;")),F("a1(",z.shared.context,",a0,",z.batchId,");")}function Q(z){if(!(typeof z!="object"||vn(z))){for(var k=Object.keys(z),F=0;F<k.length;++F)if(Pt.isDynamic(z[k[F]]))return!0;return!1}}function Zt(z,k,F){var j=k.static[F];if(!j||!Q(j))return;var Y=z.global,G=Object.keys(j),q=!1,B=!1,L=!1,I=z.global.def("{}");G.forEach(function(U){var K=j[U];if(Pt.isDynamic(K)){typeof K=="function"&&(K=j[U]=Pt.unbox(K));var lt=Ur(K,null);q=q||lt.thisDep,L=L||lt.propDep,B=B||lt.contextDep}else{switch(Y(I,".",U,"="),typeof K){case"number":Y(K);break;case"string":Y('"',K,'"');break;case"object":Array.isArray(K)&&Y("[",K.join(),"]");break;default:Y(z.link(K));break}Y(";")}});function T(U,K){G.forEach(function(lt){var ut=j[lt];if(Pt.isDynamic(ut)){var ct=U.invoke(K,ut);K(I,".",lt,"=",ct,";")}})}k.dynamic[F]=new Pt.DynamicVariable(xf,{thisDep:q,contextDep:B,propDep:L,ref:I,append:T}),delete k.static[F]}function to(z,k,F,j,Y){var G=Ne();G.stats=G.link(Y),Object.keys(k.static).forEach(function(B){Zt(G,k,B)}),Dw.forEach(function(B){Zt(G,z,B)});var q=kn(z,k,F,j,G);return gn(G,q),ot(G,q),N(G,q),e(G.compile(),{destroy:function(){q.shader.program.destroy()}})}return{next:Yt,current:mt,procs:function(){var z=Ne(),k=z.proc("poll"),F=z.proc("refresh"),j=z.block();k(j),F(j);var Y=z.shared,G=Y.gl,q=Y.next,B=Y.current;j(B,".dirty=false;"),Rn(z,k),Rn(z,F,null,!0);var L;zt&&(L=z.link(zt)),O.oes_vertex_array_object&&F(z.link(O.oes_vertex_array_object),".bindVertexArrayOES(null);");for(var I=0;I<et.maxAttributes;++I){var T=F.def(Y.attributes,"[",I,"]"),U=z.cond(T,".buffer");U.then(G,".enableVertexAttribArray(",I,");",G,".bindBuffer(",Si,",",T,".buffer.buffer);",G,".vertexAttribPointer(",I,",",T,".size,",T,".type,",T,".normalized,",T,".stride,",T,".offset);").else(G,".disableVertexAttribArray(",I,");",G,".vertexAttrib4f(",I,",",T,".x,",T,".y,",T,".z,",T,".w);",T,".buffer=null;"),F(U),zt&&F(L,".vertexAttribDivisorANGLE(",I,",",T,".divisor);")}return F(z.shared.vao,".currentVAO=null;",z.shared.vao,".setVAO(",z.shared.vao,".targetVAO);"),Object.keys(It).forEach(function(K){var lt=It[K],ut=j.def(q,".",K),ct=z.block();ct("if(",ut,"){",G,".enable(",lt,")}else{",G,".disable(",lt,")}",B,".",K,"=",ut,";"),F(ct),k("if(",ut,"!==",B,".",K,"){",ct,"}")}),Object.keys(gt).forEach(function(K){var lt=gt[K],ut=mt[K],ct,Tt,ue=z.block();if(ue(G,".",lt,"("),vn(ut)){var je=ut.length;ct=z.global.def(q,".",K),Tt=z.global.def(B,".",K),ue(Ke(je,function(ne){return ct+"["+ne+"]"}),");",Ke(je,function(ne){return Tt+"["+ne+"]="+ct+"["+ne+"];"}).join("")),k("if(",Ke(je,function(ne){return ct+"["+ne+"]!=="+Tt+"["+ne+"]"}).join("||"),"){",ue,"}")}else ct=j.def(q,".",K),Tt=j.def(B,".",K),ue(ct,");",B,".",K,"=",ct,";"),k("if(",ct,"!==",Tt,"){",ue,"}");F(ue)}),z.compile()}(),compile:to}}function s4(){return{vaoCount:0,bufferCount:0,elementsCount:0,framebufferCount:0,shaderCount:0,textureCount:0,cubeCount:0,renderbufferCount:0,maxTextureUnits:0}}var i4=34918,c4=34919,Kv=35007,l4=function(y,E){if(!E.ext_disjoint_timer_query)return null;var O=[];function et(){return O.pop()||E.ext_disjoint_timer_query.createQueryEXT()}function ht(zt){O.push(zt)}var J=[];function rt(zt){var Wt=et();E.ext_disjoint_timer_query.beginQueryEXT(Kv,Wt),J.push(Wt),Mt(J.length-1,J.length,zt)}function _t(){E.ext_disjoint_timer_query.endQueryEXT(Kv)}function St(){this.startQueryIndex=-1,this.endQueryIndex=-1,this.sum=0,this.stats=null}var Lt=[];function Et(){return Lt.pop()||new St}function Rt(zt){Lt.push(zt)}var Gt=[];function Mt(zt,Wt,mt){var Yt=Et();Yt.startQueryIndex=zt,Yt.endQueryIndex=Wt,Yt.sum=0,Yt.stats=mt,Gt.push(Yt)}var Ot=[],X=[];function at(){var zt,Wt,mt=J.length;if(mt!==0){X.length=Math.max(X.length,mt+1),Ot.length=Math.max(Ot.length,mt+1),Ot[0]=0,X[0]=0;var Yt=0;for(zt=0,Wt=0;Wt<J.length;++Wt){var bt=J[Wt];E.ext_disjoint_timer_query.getQueryObjectEXT(bt,c4)?(Yt+=E.ext_disjoint_timer_query.getQueryObjectEXT(bt,i4),ht(bt)):J[zt++]=bt,Ot[Wt+1]=Yt,X[Wt+1]=zt}for(J.length=zt,zt=0,Wt=0;Wt<Gt.length;++Wt){var It=Gt[Wt],gt=It.startQueryIndex,$t=It.endQueryIndex;It.sum+=Ot[$t]-Ot[gt];var xe=X[gt],Ie=X[$t];Ie===xe?(It.stats.gpuTime+=It.sum/1e6,Rt(It)):(It.startQueryIndex=xe,It.endQueryIndex=Ie,Gt[zt++]=It)}Gt.length=zt}}return{beginQuery:rt,endQuery:_t,pushScopeStats:Mt,update:at,getNumPendingQueries:function(){return J.length},clear:function(){O.push.apply(O,J);for(var zt=0;zt<O.length;zt++)E.ext_disjoint_timer_query.deleteQueryEXT(O[zt]);J.length=0,O.length=0},restore:function(){J.length=0,O.length=0}}},f4=16384,h4=256,u4=1024,d4=34962,Qv="webglcontextlost",Zv="webglcontextrestored",Jv=1,p4=2,v4=3;function tm(y,E){for(var O=0;O<y.length;++O)if(y[O]===E)return O;return-1}function m4(y){var E=Ae(y);if(!E)return null;var O=E.gl,et=O.getContextAttributes(),ht=O.isContextLost(),J=ze(O,E);if(!J)return null;var rt=fe(),_t=s4(),St=J.extensions,Lt=l4(O,St),Et=Ct(),Rt=O.drawingBufferWidth,Gt=O.drawingBufferHeight,Mt={tick:0,time:0,viewportWidth:Rt,viewportHeight:Gt,framebufferWidth:Rt,framebufferHeight:Gt,drawingBufferWidth:Rt,drawingBufferHeight:Gt,pixelRatio:E.pixelRatio},Ot={},X={elements:null,primitive:4,count:-1,offset:0,instances:-1},at=eb(O,St),zt=gb(O,_t,E,mt),Wt=zw(O,St,at,_t,zt);function mt(ke){return Wt.destroyBuffer(ke)}var Yt=zb(O,St,zt,_t),bt=Cw(O,rt,_t,E),It=sw(O,St,at,function(){xe.procs.poll()},Mt,_t,E),gt=iw(O,St,at,_t,E),$t=Aw(O,St,at,It,gt,_t),xe=a4(O,rt,St,at,zt,Yt,It,$t,Ot,Wt,bt,X,Mt,Lt,E),Ie=Iw(O,$t,xe.procs.poll,Mt,et,St,at),Ht=xe.next,Nt=O.canvas,pt=[],Ne=[],Be=[],oe=[E.onDestroy],Je=null;function Fe(){if(pt.length===0){Lt&&Lt.update(),Je=null;return}Je=Dt.next(Fe),ir();for(var ke=pt.length-1;ke>=0;--ke){var no=pt[ke];no&&no(Mt,null,0)}O.flush(),Lt&&Lt.update()}function Ye(){!Je&&pt.length>0&&(Je=Dt.next(Fe))}function yo(){Je&&(Dt.cancel(Fe),Je=null)}function Mn(ke){ke.preventDefault(),ht=!0,yo(),Ne.forEach(function(no){no()})}function qn(ke){O.getError(),ht=!1,J.restore(),bt.restore(),zt.restore(),It.restore(),gt.restore(),$t.restore(),Wt.restore(),Lt&&Lt.restore(),xe.procs.refresh(),Ye(),Be.forEach(function(no){no()})}Nt&&(Nt.addEventListener(Qv,Mn,!1),Nt.addEventListener(Zv,qn,!1));function ao(){pt.length=0,yo(),Nt&&(Nt.removeEventListener(Qv,Mn),Nt.removeEventListener(Zv,qn)),bt.clear(),$t.clear(),gt.clear(),It.clear(),Yt.clear(),zt.clear(),Wt.clear(),Lt&&Lt.clear(),oe.forEach(function(ke){ke()})}function Ln(ke){S(!!ke,"invalid args to regl({...})"),S.type(ke,"object","invalid args to regl({...})");function no(Y){var G=e({},Y);delete G.uniforms,delete G.attributes,delete G.context,delete G.vao,"stencil"in G&&G.stencil.op&&(G.stencil.opBack=G.stencil.opFront=G.stencil.op,delete G.stencil.op);function q(B){if(B in G){var L=G[B];delete G[B],Object.keys(L).forEach(function(I){G[B+"."+I]=L[I]})}}return q("blend"),q("depth"),q("cull"),q("stencil"),q("polygonOffset"),q("scissor"),q("sample"),"vao"in Y&&(G.vao=Y.vao),G}function vo(Y,G){var q={},B={};return Object.keys(Y).forEach(function(L){var I=Y[L];if(Pt.isDynamic(I)){B[L]=Pt.unbox(I,L);return}else if(G&&Array.isArray(I)){for(var T=0;T<I.length;++T)if(Pt.isDynamic(I[T])){B[L]=Pt.unbox(I,L);return}}q[L]=I}),{dynamic:B,static:q}}var gn=vo(ke.context||{},!0),ta=vo(ke.uniforms||{},!0),Ts=vo(ke.attributes||{},!1),N=vo(no(ke),!1),ot={gpuTime:0,cpuTime:0,count:0},Q=xe.compile(N,Ts,ta,gn,ot),Zt=Q.draw,to=Q.batch,z=Q.scope,k=[];function F(Y){for(;k.length<Y;)k.push(null);return k}function j(Y,G){var q;if(ht&&S.raise("context lost"),typeof Y=="function")return z.call(this,null,Y,0);if(typeof G=="function")if(typeof Y=="number")for(q=0;q<Y;++q)z.call(this,null,G,q);else if(Array.isArray(Y))for(q=0;q<Y.length;++q)z.call(this,Y[q],G,q);else return z.call(this,Y,G,0);else if(typeof Y=="number"){if(Y>0)return to.call(this,F(Y|0),Y|0)}else if(Array.isArray(Y)){if(Y.length)return to.call(this,Y,Y.length)}else return Zt.call(this,Y)}return e(j,{stats:ot,destroy:function(){Q.destroy()}})}var Vo=$t.setFBO=Ln({framebuffer:Pt.define.call(null,Jv,"framebuffer")});function kn(ke,no){var vo=0;xe.procs.poll();var gn=no.color;gn&&(O.clearColor(+gn[0]||0,+gn[1]||0,+gn[2]||0,+gn[3]||0),vo|=f4),"depth"in no&&(O.clearDepth(+no.depth),vo|=h4),"stencil"in no&&(O.clearStencil(no.stencil|0),vo|=u4),S(!!vo,"called regl.clear with no buffer specified"),O.clear(vo)}function Nn(ke){if(S(typeof ke=="object"&&ke,"regl.clear() takes an object as input"),"framebuffer"in ke)if(ke.framebuffer&&ke.framebuffer_reglType==="framebufferCube")for(var no=0;no<6;++no)Vo(e({framebuffer:ke.framebuffer.faces[no]},ke),kn);else Vo(ke,kn);else kn(null,ke)}function Rn(ke){S.type(ke,"function","regl.frame() callback must be a function"),pt.push(ke);function no(){var vo=tm(pt,ke);S(vo>=0,"cannot cancel a frame twice");function gn(){var ta=tm(pt,gn);pt[ta]=pt[pt.length-1],pt.length-=1,pt.length<=0&&yo()}pt[vo]=gn}return Ye(),{cancel:no}}function Qn(){var ke=Ht.viewport,no=Ht.scissor_box;ke[0]=ke[1]=no[0]=no[1]=0,Mt.viewportWidth=Mt.framebufferWidth=Mt.drawingBufferWidth=ke[2]=no[2]=O.drawingBufferWidth,Mt.viewportHeight=Mt.framebufferHeight=Mt.drawingBufferHeight=ke[3]=no[3]=O.drawingBufferHeight}function ir(){Mt.tick+=1,Mt.time=Ue(),Qn(),xe.procs.poll()}function mn(){It.refresh(),Qn(),xe.procs.refresh(),Lt&&Lt.update()}function Ue(){return(Ct()-Et)/1e3}mn();function cr(ke,no){S.type(no,"function","listener callback must be a function");var vo;switch(ke){case"frame":return Rn(no);case"lost":vo=Ne;break;case"restore":vo=Be;break;case"destroy":vo=oe;break;default:S.raise("invalid event, must be one of frame,lost,restore,destroy")}return vo.push(no),{cancel:function(){for(var gn=0;gn<vo.length;++gn)if(vo[gn]===no){vo[gn]=vo[vo.length-1],vo.pop();return}}}}var To=e(Ln,{clear:Nn,prop:Pt.define.bind(null,Jv),context:Pt.define.bind(null,p4),this:Pt.define.bind(null,v4),draw:Ln({}),buffer:function(ke){return zt.create(ke,d4,!1,!1)},elements:function(ke){return Yt.create(ke,!1)},texture:It.create2D,cube:It.createCube,renderbuffer:gt.create,framebuffer:$t.create,framebufferCube:$t.createCube,vao:Wt.createVAO,attributes:et,frame:Rn,on:cr,limits:at,hasExtension:function(ke){return at.extensions.indexOf(ke.toLowerCase())>=0},read:Ie,destroy:ao,_gl:O,_refresh:mn,poll:function(){ir(),Lt&&Lt.update()},now:Ue,stats:_t});return E.onDone(null,To),To}return m4})});var zs=xt((JE,km)=>{"use strict";var pa=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],va=(t,e)=>[t[0]+e[0],t[1]+e[1],t[2]+e[2]],ea=(t,e)=>[t[0]*e,t[1]*e,t[2]*e],Ff=(t,e)=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2],el=(t,e)=>[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]],lu=t=>Math.hypot(t[0],t[1],t[2]),b0=t=>{let e=lu(t)||1;return[t[0]/e,t[1]/e,t[2]/e]};function Ci(t,e){let o=t.length-1,n=Math.min(Math.max(e,0),1)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,s=t[Math.max(0,r-1)],i=t[r],c=t[r+1],f=t[Math.min(o,r+2)],l=[0,0,0];for(let v=0;v<3;v++)l[v]=.5*(2*i[v]+(-s[v]+c[v])*a+(2*s[v]-5*i[v]+4*c[v]-f[v])*a*a+(-s[v]+3*i[v]-3*c[v]+f[v])*a*a*a);return l}function N4(t,e){return Ci(t.map(o=>[o,0,0]),e)[0]}function R4(t,e,o,n){let r={curMat:[0,0,0]},s={r:[1,0,0,0,1,0,0,0,1],t:[0,0,0],s:1},i=[];r.save=()=>{i.push({r:s.r.slice(),t:s.t.slice(),s:s.s})},r.restore=()=>{s=i.pop()};let c=(h,u)=>{let p=new Array(9);for(let d=0;d<3;d++)for(let m=0;m<3;m++)p[d*3+m]=h[d*3]*u[m]+h[d*3+1]*u[3+m]+h[d*3+2]*u[6+m];return p},f=h=>[s.r[0]*h[0]+s.r[1]*h[1]+s.r[2]*h[2],s.r[3]*h[0]+s.r[4]*h[1]+s.r[5]*h[2],s.r[6]*h[0]+s.r[7]*h[1]+s.r[8]*h[2]];r.translate=(h,u,p)=>{let d=f([h,u,p]);s.t=[s.t[0]+d[0]*s.s,s.t[1]+d[1]*s.s,s.t[2]+d[2]*s.s]},r.scale=h=>{s.s*=h},r.rotateY=h=>{let u=Math.cos(h),p=Math.sin(h);s.r=c(s.r,[u,0,p,0,1,0,-p,0,u])},r.vert=(h,u,p)=>{let d=p||r.curMat,m=f(h),g=b0(f(u));return t.push(m[0]*s.s+s.t[0],m[1]*s.s+s.t[1],m[2]*s.s+s.t[2]),e.push(g[0],g[1],g[2]),n.push(d[0],d[1],d[2]),t.length/3-1};let l=h=>[t[h*3],t[h*3+1],t[h*3+2]],v=h=>[e[h*3],e[h*3+1],e[h*3+2]];return r.tri=(h,u,p)=>{let d=l(h),m=el(pa(l(u),d),pa(l(p),d)),g=va(va(v(h),v(u)),v(p));Ff(m,g)<0?o.push(h,p,u):o.push(h,u,p)},r.box=(h,u,p,d,m,g,x)=>{let b=[[[h,u,p],[d,u,p],[h,m,p],[d,m,p],[0,0,-1]],[[d,u,g],[h,u,g],[d,m,g],[h,m,g],[0,0,1]],[[h,u,g],[h,u,p],[h,m,g],[h,m,p],[-1,0,0]],[[d,u,p],[d,u,g],[d,m,p],[d,m,g],[1,0,0]],[[h,m,p],[d,m,p],[h,m,g],[d,m,g],[0,1,0]],[[h,u,g],[d,u,g],[h,u,p],[d,u,p],[0,-1,0]]];for(let w of b){let _=r.vert(w[0],w[4],x),M=r.vert(w[1],w[4],x),A=r.vert(w[2],w[4],x),$=r.vert(w[3],w[4],x);r.tri(_,M,A),r.tri(M,$,A)}},r.surface=(h,u,p,d)=>{d=d||{};let m=.001,g=_=>Math.min(1,Math.max(0,_)),x=[],b=[];for(let _=0;_<=u;_++){let M=[],A=[];for(let $=0;$<=p;$++){let R=_/u,W=$/p,H=h(R,W),D=Math.min(1-m,Math.max(m,R)),C=d.wrapV?W:Math.min(1-m,Math.max(m,W)),P=pa(h(g(D+m),C),h(g(D-m),C)),nt=d.wrapV?C+m:g(C+m),yt=d.wrapV?C-m:g(C-m),vt=pa(h(D,nt),h(D,yt)),st=el(P,vt);lu(st)<1e-14&&(st=d.inside?pa(H,d.inside(R,W)):[0,1,0]),st=b0(st),d.inside&&Ff(st,pa(H,d.inside(R,W)))<0&&(st=ea(st,-1));let it=d.mat?d.mat(R,W,H):null;M.push(r.vert(H,st,it)),d.double&&A.push(r.vert(H,ea(st,-1),it))}x.push(M),b.push(A)}let w=_=>{for(let M=0;M<u;M++)for(let A=0;A<p;A++){let $=_[M][A],R=_[M+1][A],W=_[M][A+1],H=_[M+1][A+1];r.tri($,R,W),r.tri(R,H,W)}};w(x),d.double&&w(b)},r.ellipsoid=(h,u,p,d,m)=>{m=m||{};let g=m.warp||null;r.surface((x,b)=>{let w=x*Math.PI,_=b*Math.PI*2,M=g?g(x,b):1;return[h[0]+u[0]*M*Math.sin(w)*Math.cos(_),h[1]+u[1]*M*Math.cos(w),h[2]+u[2]*M*Math.sin(w)*Math.sin(_)]},p||10,d||14,{wrapV:!0,inside:()=>h,mat:m.mat})},r.tube=(h,u,p,d,m)=>{m=m||{};let g=40,x=[],b=null;for(let M=0;M<=g;M++){let A=M/g,$=Ci(h,Math.max(0,A-.01)),R=Ci(h,Math.min(1,A+.01)),W=b0(pa(R,$)),H;if(b)H=b0(pa(b,ea(W,Ff(b,W))));else{let D=Math.abs(W[1])<.9?[0,1,0]:[1,0,0];H=b0(el(W,D))}x.push({N:H,B:b0(el(W,H))}),b=H}let w=M=>{let A=Math.min(Math.max(M,0),1)*g,$=Math.min(g-1,Math.floor(A)),R=A-$,W=x[$],H=x[$+1];return{N:b0(va(ea(W.N,1-R),ea(H.N,R))),B:b0(va(ea(W.B,1-R),ea(H.B,R)))}},_=m.squash||[1,1];r.surface((M,A)=>{let $=Ci(h,M),R=w(M),W=u(M),H=A*Math.PI*2;return va($,va(ea(R.N,Math.cos(H)*W*_[0]),ea(R.B,Math.sin(H)*W*_[1])))},p||12,d||8,{wrapV:!0,inside:M=>Ci(h,M),mat:m.mat})},r.lathe=(h,u,p,d,m)=>{m=m||{};let g=[];for(let x=0;x<h.length-1;x++){let b=h[x+1][0]-h[x][0],w=h[x+1][1]-h[x][1];g.push(b0([w,-b,0]))}for(let x=0;x<h.length-1;x++){let b=h[x],w=h[x+1],_=x===0||b[2]===1,M=x===h.length-2||w[2]===1,A=_?g[x]:b0(va(g[x-1],g[x])),$=M?g[x]:b0(va(g[x],g[x+1])),R=[],W=[];for(let H=0;H<=d;H++){let D=H/d*Math.PI*2,C=Math.cos(D),P=Math.sin(D),nt=m.mat?m.mat(D,b[1]):null,yt=m.mat?m.mat(D,w[1]):null;R.push(r.vert([u+b[0]*C,b[1],p+b[0]*P],[A[0]*C,A[1],A[0]*P],nt)),W.push(r.vert([u+w[0]*C,w[1],p+w[0]*P],[$[0]*C,$[1],$[0]*P],yt))}for(let H=0;H<d;H++)r.tri(R[H],R[H+1],W[H]),r.tri(R[H+1],W[H+1],W[H])}},r}km.exports={createBuilder:R4,catmull:Ci,curve1:N4,sub:pa,add:va,mul:ea,dot:Ff,cross:el,norm:b0,len:lu}});var Tm=xt((tA,Am)=>{"use strict";var{norm:qf,add:Df,mul:$a,sub:C4,cross:Sm}=zs(),Em=Math.PI*2,O4=(t,e,o)=>{let n=Math.min(1,Math.max(0,(o-t)/(e-t)));return n*n*(3-2*n)};function P4(t){let e=t>>>0;return()=>{e|=0,e=e+1831565813|0;let o=Math.imul(e^e>>>15,1|e);return o=o+Math.imul(o^o>>>7,61|o)^o,((o^o>>>14)>>>0)/4294967296}}function I4(t,e,o,n,r,a){let s=(h,u)=>[7,h*a,u];t.curMat=[0,0,0],t.box(e-a*1.36,n,o-a*1.36,e+a*1.36,n+.22,o+a*1.36),t.lathe([[a*1.24,n+.22,1],[a*1.3,n+.27],[a*1.31,n+.32],[a*1.26,n+.37,1],[a*1.1,n+.4],[a*1.14,n+.44,1],[a*1.18,n+.47],[a*1.1,n+.52,1],[a*.96,n+.55]],e,o,56,{mat:s});let i=n+.55,c=r-i,f=20,l=6,v=a*.075;return t.surface((h,u)=>{let p=i+h*c,d=a*(.96-.12*h),m=u*Em,g=u*f%1,x=d-v*4*g*(1-g);return[e+x*Math.cos(m),p,o+x*Math.sin(m)]},10,f*l,{wrapV:!0,inside:h=>[e,i+h*c,o],mat:(h,u)=>[7,u*Em*a,i+h*c]}),t.lathe([[a*.8,r-.02,1],[a*.9,r+.02],[a*.9,r+.07,1],[a*.82,r+.09,1],[a*.86,r+.13],[a*1.06,r+.2],[a*1.22,r+.28],[a*1.28,r+.33,1]],e,o,56,{mat:s}),t.curMat=[0,0,0],t.box(e-a*1.42,r+.33,o-a*1.42,e+a*1.42,r+.53,o+a*1.42),r+.53}function $4(t,e,o){t.curMat=[1,0,0],t.lathe([[e*1.1,0,1],[e*1.1,o*.14,1],[e*1.04,o*.14,1],[e*1.04,o*.2],[e*.97,o*.26,1],[e*.95,o*.26,1],[e*.95,o*.8,1],[e*.98,o*.8,1],[e*1.03,o*.86],[e*1.05,o*.92,1],[e*1.05,o,1],[e*.5,o,1],[0,o]],0,0,72)}function F4(t,e,o,n,r){t.save(),t.translate(e,0,o),$4(t,n,r),t.restore()}function q4(t,e,o,n,r,a){let s=P4(n),i=a?qf([a[0],0,a[1]]):null;t.save(),t.translate(e,0,o),t.scale(r||1),t.curMat=[3,0,0],t.lathe([[.17,0,1],[.2,.02],[.28,.13],[.36,.3],[.395,.47],[.38,.62],[.32,.74],[.29,.8],[.292,.82,1],[.325,.84],[.335,.88,1],[.3,.905,1],[.275,.895,1],[.272,.85]],0,0,48),t.curMat=[5,0,0],t.lathe([[.272,.85,1],[.1,.868],[0,.872]],0,0,24);let c=11,f=.86;for(let l=0;l<c;l++){let v=l>=c-2,h=l*2.399963+s()*.5,u=[Math.cos(h),0,Math.sin(h)],p=[-Math.sin(h),0,Math.cos(h)],d=l*.618%1,m=v?.06+s()*.06:.12+.62*d,g=1;if(i){let st=u[0]*i[0]+u[2]*i[2];g=.25+.75*O4(-.7,.5,st),m*=g}let x=v?1.1+s()*.25:.85+.55*(1-d*.55)+s()*.15,b=v?1+s()*.2:.95+s()*.28,w=v?.055:.215+s()*.05,_=.04+s()*.05,M=[u[0]*_,f,u[2]*_],A=[M[0]+u[0]*Math.sin(m)*x*.92,M[1]+Math.cos(m)*x,M[2]+u[2]*Math.sin(m)*x*.92],$=[M[0]+u[0]*Math.sin(m*.5)*x*.45,M[1]+x*.5,M[2]+u[2]*Math.sin(m*.5)*x*.45];t.curMat=[4,0,0],t.tube([M,$,A],st=>.02-.008*st,8,7);let R=24,W=m*.9+.05,H=m+(v?.12:(.95+.45*d)*(.35+.65*g)),D=[A],C=[],P=A;for(let st=0;st<R;st++){let it=st/R,qt=W+(H-W)*it*it,se=[u[0]*Math.sin(qt),Math.cos(qt),u[2]*Math.sin(qt)];C.push(se),P=Df(P,$a(se,b/R)),D.push(P)}C.push(C[C.length-1]);let nt=st=>{let it=st*R,qt=Math.min(R-1,Math.floor(it)),se=it-qt;return Df($a(D[qt],1-se),$a(D[qt+1],se))},yt=st=>{let it=st*R,qt=Math.min(R,Math.floor(it)),se=Math.min(R,qt+1),ge=it-qt;return qf(Df($a(C[qt],1-ge),$a(C[se],ge)))},vt=(s()-.5)*.5;t.curMat=[2,0,0],t.surface((st,it)=>{let qt=it*2-1,se=nt(st),ge=yt(st),Ve=vt*st,ye=Df($a(p,Math.cos(Ve)),$a(Sm(ge,p),Math.sin(Ve)));ye=qf(C4(ye,$a(ge,ye[0]*ge[0]+ye[1]*ge[1]+ye[2]*ge[2])));let ho=qf(Sm(ye,ge)),ko=w*Math.pow(Math.sin(Math.PI*Math.pow(st,.72)),.85),Ko=.3*ko*Math.abs(qt)+.012*Math.sin(st*40+qt*2)*Math.abs(qt)*(v?0:1),Jt=-.1*ko*qt*qt*qt*qt,be=Ko+Jt;return[se[0]+ye[0]*qt*ko+ho[0]*be,se[1]+ye[1]*qt*ko+ho[1]*be,se[2]+ye[2]*qt*ko+ho[2]*be]},14,8,{double:!0,mat:(st,it)=>[2,it*2-1,st]})}t.restore()}Am.exports={addFlutedColumn:I4,addStatue:F4,addPlant:q4}});var Fa=xt((eA,Rm)=>{"use strict";var kt={xc:7,r:2.5,spring:4.7};kt.x0=kt.xc-kt.r;kt.x1=kt.xc+kt.r;kt.top=kt.spring+kt.r;var Rr=.06,tn=.1,zm=.08,Gf=kt.r,Hf=[kt.x0+Gf/3,kt.x0+2*Gf/3,kt.xc+Gf/3,kt.xc+2*Gf/3],Oi=.28,fu=[.95,1.65,2.35,3.05,3.75],Lm=[1.05,1.8],ol=[8,0,0],o0=[0,0,0];function w0(t,e,o,n,r,a,s,i){t.box(Math.min(e,r),Math.min(o,a),Math.min(n,s),Math.max(e,r),Math.max(o,a),Math.max(n,s),i)}function Pi(t,e,o,n,r,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),f=t.vert(n,a,s),l=t.vert(r,a,s);t.tri(i,c,f),t.tri(i,f,l)}function Bf(t,e,o,n,r,a,s=48,i=0,c=Math.PI){let f=(l,v,h)=>[kt.xc+v*Math.cos(l),kt.spring+v*Math.sin(l),h];for(let l=0;l<s;l++){let v=i+(c-i)*l/s,h=i+(c-i)*(l+1)/s,u=(v+h)/2;Pi(t,f(v,e,r),f(h,e,r),f(h,o,r),f(v,o,r),[0,0,1],a),Pi(t,f(v,o,n),f(h,o,n),f(h,e,n),f(v,e,n),[0,0,-1],a),Pi(t,f(v,e,n),f(h,e,n),f(h,e,r),f(v,e,r),[-Math.cos(u),-Math.sin(u),0],a),Pi(t,f(h,o,n),f(v,o,n),f(v,o,r),f(h,o,r),[Math.cos(u),Math.sin(u),0],a)}}function D4(t){let n=a=>[kt.xc+kt.r*Math.cos(a),kt.spring+kt.r*Math.sin(a)],r=a=>{let s=Math.cos(a),i=Math.sin(a),c=Math.abs(s)>1e-6?kt.r/Math.abs(s):1/0,f=i>1e-6?(8-kt.spring)/i:1/0,l=Math.min(c,f);return[Math.min(kt.x1,Math.max(kt.x0,kt.xc+s*l)),Math.min(8,kt.spring+i*l)]};for(let a=0;a<48;a++){let s=Math.PI*a/48,i=Math.PI*(a+1)/48,c=n(s),f=n(i),l=r(s),v=r(i);for(let[u,p]of[[.35,1],[-.35,-1]])Pi(t,[c[0],c[1],u],[f[0],f[1],u],[v[0],v[1],u],[l[0],l[1],u],[0,0,p],o0);let h=(s+i)/2;Pi(t,[c[0],c[1],-.35],[f[0],f[1],-.35],[f[0],f[1],.35],[c[0],c[1],.35],[-Math.cos(h),-Math.sin(h),0],o0)}}function G4(t){w0(t,-.35,0,-.35,kt.x0,8,.35,o0),w0(t,kt.x1,0,-.35,14+.35,8,.35,o0),D4(t),Nm(t)}function Nm(t){w0(t,kt.x0-.32,.3,.35,kt.x0,kt.spring,.35+.07,o0),w0(t,kt.x1,.3,.35,kt.x1+.32,kt.spring,.35+.07,o0),w0(t,kt.x0-.32-.05,0,.35,kt.x0,.3,.35+.07+.04,o0),w0(t,kt.x1,0,.35,kt.x1+.32+.05,.3,.35+.07+.04,o0),w0(t,kt.x0-.32-.06,kt.spring-.12,.35,kt.x0,kt.spring,.35+.07+.05,o0),w0(t,kt.x1,kt.spring-.12,.35,kt.x1+.32+.06,kt.spring,.35+.07+.05,o0),Bf(t,kt.r,kt.r+.32,.35,.35+.07,o0),Bf(t,kt.r+.32,kt.r+.32+.06,.35,.35+.07+.03,o0),w0(t,kt.xc-.22,kt.top-.08,.35,kt.xc+.22,kt.top+.32+.12,.35+.07+.06,o0)}function H4(t,e){e=e||"all";let o=e==="all",n=o||e==="fixed",r=-zm/2,a=zm/2,s=(h,u,p,d,m=0)=>w0(t,h-m,u,r,p+m,d,a,ol),i=h=>kt.spring+Math.sqrt(Math.max(0,kt.r*kt.r-(h-kt.xc)*(h-kt.xc))),c=e==="right"?kt.xc:kt.x0,f=e==="left"?kt.xc:kt.x1,l=h=>o||e==="left"&&h<kt.xc||e==="right"&&h>kt.xc,v=o?null:kt.spring-.06;if(n){s(kt.x0,0,kt.x0+tn,kt.spring),s(kt.x1-tn,0,kt.x1,kt.spring),Bf(t,kt.r-tn,kt.r,r,a,ol,64),s(kt.x0,0,kt.x1,.05),s(kt.x0,kt.spring-.06,kt.x1,kt.spring+.06);for(let h of Lm)Bf(t,h-Rr/2,h+Rr/2,r,a,ol,48)}if(o){s(kt.x0,0,kt.x1,Oi),s(kt.xc-tn/2,0,kt.xc+tn/2,kt.top-tn*.5);for(let h of Hf)s(h-Rr/2,Oi,h+Rr/2,i(h)-tn*.5);for(let h of fu)s(kt.x0,h-Rr/2,kt.x1,h+Rr/2)}else if(e==="fixed"){s(kt.xc-tn/2,kt.spring+.06,kt.xc+tn/2,kt.top-tn*.5);for(let h of Hf)s(h-Rr/2,kt.spring+.06,h+Rr/2,i(h)-tn*.5)}else{let h=e==="left"?kt.x0+tn:kt.x1-tn;s(Math.min(h,h+(e==="left"?tn*.8:-tn*.8)),.05,Math.max(h,h+(e==="left"?tn*.8:-tn*.8)),v),s(c,.05,f,Oi),s(c,v-.07,f,v);let u=e==="left"?kt.xc-tn/2:kt.xc;s(u,.05,u+tn/2,v);for(let p of Hf)l(p)&&s(p-Rr/2,Oi,p+Rr/2,v-.07);for(let p of fu)s(c,p-Rr/2,f,p+Rr/2)}for(let h of[-1,1]){let u=kt.xc+h*.16;l(u)&&(w0(t,u-.02,1.05,a,u+.02,1.13,a+.06,ol),w0(t,u-(h>0?0:.14),1.07,a+.05,u+(h>0?.14:0),1.11,a+.08,ol))}}function B4(t){t=t||"all";let e=[],o=0,{x0:n,x1:r,xc:a,r:s,spring:i}=kt;if(t!=="fixed"){let f=t==="right"?a:n,l=t==="left"?a:r;if(e.push([f,0,o],[l,0,o],[l,i,o],[f,0,o],[l,i,o],[f,i,o]),t!=="all")return e}let c=48;for(let f=0;f<c;f++){let l=Math.PI*f/c,v=Math.PI*(f+1)/c;e.push([a,i,o],[a+s*Math.cos(l),i+s*Math.sin(l),o],[a+s*Math.cos(v),i+s*Math.sin(v),o])}return e}var Po=t=>t.toFixed(4);function U4(){let t=Hf.map(n=>`vb = max(vb, barCover(abs(q.x - ${Po(n)}), ${Po(Rr/2)}, soft));`).join(`
		`),e=fu.map(n=>`hb = max(hb, barCover(abs(q.y - ${Po(n)}), ${Po(Rr/2)}, soft));`).join(`
		`),o=Lm.map(n=>`ab = max(ab, barCover(abs(rr - ${Po(n)}), ${Po(Rr/2)}, soft));`).join(`
		`);return`
	float barCover(float d, float hw, float soft) {
		return 1.0 - smoothstep(hw - soft, hw + soft, d);
	}

	// how open the doorway is at a point (x, y) on a plane, 0..1
	float doorOpen(vec2 q, float soft) {
		float side = smoothstep(${Po(kt.x0)} - soft, ${Po(kt.x0)} + soft, q.x)
		           * (1.0 - smoothstep(${Po(kt.x1)} - soft, ${Po(kt.x1)} + soft, q.x));
		float above = smoothstep(-soft, soft, q.y);
		float rr = length(q - vec2(${Po(kt.xc)}, ${Po(kt.spring)}));
		float arch = q.y < ${Po(kt.spring)} ? 1.0 : 1.0 - smoothstep(${Po(kt.r)} - soft, ${Po(kt.r)} + soft, rr);
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
		float rr = length(q - vec2(${Po(kt.xc)}, ${Po(kt.spring)}));
		float vb = barCover(abs(q.x - ${Po(kt.xc)}), ${Po(tn/2)}, soft);
		${t}
		float hb = barCover(abs(q.y - ${Po(kt.spring)}), 0.06, soft);
		hb = max(hb, 1.0 - smoothstep(${Po(Oi)} - soft, ${Po(Oi)} + soft, q.y));
		float hRows = 0.0;
		{
			float hb2 = 0.0;
			${e.replace(/hb = max\(hb,/g,"hb2 = max(hb2,")}
			hRows = q.y < ${Po(kt.spring)} ? hb2 : 0.0;
		}
		float ab = 0.0;
		${o}
		ab = q.y > ${Po(kt.spring)} ? ab : 0.0;
		float frame = max(
			barCover(abs(q.x - ${Po(kt.x0+tn/2)}), ${Po(tn/2)}, soft),
			barCover(abs(q.x - ${Po(kt.x1-tn/2)}), ${Po(tn/2)}, soft));
		frame = q.y < ${Po(kt.spring)} ? frame : barCover(abs(rr - ${Po(kt.r-tn/2)}), ${Po(tn/2)}, soft);
		float cover = max(max(max(vb, hb), max(hRows, ab)), frame);
		return open * (1.0 - cover * 0.92);
	}`}Rm.exports={addEntranceWall:G4,addSurround:Nm,addFrames:H4,glassPanes:B4,doorLightGLSL:U4,DOOR:kt,WALL:.35}});var $i=xt((oA,Fm)=>{"use strict";var Ns=1.1583333333333334,Rs=(13.05-8*.16)/9,uu=Ns+.16,du=Rs+.16,ga=14/2-7.75/2,n0=15,nl=ga+7.75,ma=n0+13.05,r0=.3,xa={y:8+.18,inset:.15},Ls={y:8+.36,inset:r0},pu=8+.2,rl=8+.62,vu=8+.9,mu=.016,Im=.28,$m=.66,j4=(()=>{let t=[-.15,1,.3],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>o/e)})(),W4=(()=>{let t=[.42,1,-.32],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>o/e)})(),V4=[9,0,0],lr=[10,0,0];function Ii(t,e,o,n,r,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),f=t.vert(n,a,s),l=t.vert(r,a,s);t.tri(i,c,f),t.tri(i,f,l)}function Cr(t,e,o,n,r,a,s){Ii(t,[e,a,o],[n,a,o],[n,a,r],[e,a,r],[0,-1,0],s)}function hu(t,e,o,n,r,a,s,i){Ii(t,[e,a,o],[n,a,o],[n,s,o],[e,s,o],[0,0,1],i),Ii(t,[n,a,r],[e,a,r],[e,s,r],[n,s,r],[0,0,-1],i),Ii(t,[e,a,r],[e,a,o],[e,s,o],[e,s,r],[1,0,0],i),Ii(t,[n,a,o],[n,a,r],[n,s,r],[n,s,o],[-1,0,0],i)}function Cm(t,e,o,n,r){Cr(t,e[0],e[1],e[2],o[1],n,r),Cr(t,e[0],o[3],e[2],e[3],n,r),Cr(t,e[0],o[1],o[0],o[3],n,r),Cr(t,o[2],o[1],e[2],o[3],n,r)}var Om=t=>ga+t*uu,Pm=t=>n0+t*du;function X4(t,e,o=48){let n=[ga-r0,n0-r0,nl+r0,ma+r0],r=(f,l)=>[f[0]+l,f[1]+l,f[2]-l,f[3]-l],a=r(n,xa.inset),s=r(n,Ls.inset);Cr(t,0,0,14,n[1],8,e),Cr(t,0,n[3],14,o,8,e),Cr(t,0,n[1],n[0],n[3],8,e),Cr(t,n[2],n[1],14,n[3],8,e);let i=.06,c=.06;t.box(n[0]-i,8-c,n[1]-i,n[2]+i,8,n[1],lr),t.box(n[0]-i,8-c,n[3],n[2]+i,8,n[3]+i,lr),t.box(n[0]-i,8-c,n[1],n[0],8,n[3],lr),t.box(n[2],8-c,n[1],n[2]+i,8,n[3],lr),hu(t,...n.slice(0,2),...n.slice(2),8,xa.y,lr),Cm(t,n,a,xa.y,lr),hu(t,...a.slice(0,2),...a.slice(2),xa.y,Ls.y,lr),Cm(t,a,s,Ls.y,lr);for(let f=1;f<6;f++){let l=Om(f)-.16;t.box(l,pu,n0,l+.16,Ls.y,ma,lr)}for(let f=1;f<9;f++){let l=Pm(f)-.16;t.box(ga,pu,l,nl,Ls.y,l+.16,lr)}for(let f=0;f<9;f++)for(let l=0;l<6;l++){let v=Om(l),h=Pm(f);hu(t,v,h,v+Ns,h+Rs,Ls.y,vu,lr),Cr(t,v,h,v+Ns,h+Rs,vu,V4),Y4(t,v+Ns/2,h+Rs/2,Ns/2,Rs/2)}}function Y4(t,e,o,n,r){let a=rl,s=mu;Cr(t,e-n,o-s,e+n,o+s,a,lr),Cr(t,e-s,o-r,e+s,o+r,a,lr);for(let i of[1,-1]){let c=Math.hypot(n,r),f=n/c,l=i*r/c,v=-l*s,h=f*s;Ii(t,[e-f*c+v,a,o-l*c+h],[e+f*c+v,a,o+l*c+h],[e+f*c-v,a,o+l*c-h],[e-f*c-v,a,o-l*c-h],[0,-1,0],lr)}for(let i of[Im,$m]){let c=i*n,f=i*r;Cr(t,e-c-s,o-f-s,e+c+s,o-f+s,a,lr),Cr(t,e-c-s,o+f-s,e+c+s,o+f+s,a,lr),Cr(t,e-c-s,o-f+s,e-c+s,o+f-s,a,lr),Cr(t,e+c-s,o-f+s,e+c+s,o+f-s,a,lr)}}var De=t=>t.toFixed(4);function K4(){return`
	// by day the sun, high and a little towards the entrance; by night
	// the moon, lower and from the other side, so its squares of light
	// reach across the floor to the foot of the wall. (When the light is
	// switched, the squares slide from one to the other.)
	const vec3 SKY_SUN_DAY = vec3(${j4.map(De).join(", ")});
	const vec3 SKY_MOON = vec3(${W4.map(De).join(", ")});
	vec3 skySun() { return normalize(mix(SKY_SUN_DAY, SKY_MOON, night)); }
	#define SKY_SUN skySun()

	float rectOpen(vec2 q, vec4 r, float soft) {
		vec2 lo = smoothstep(r.xy - soft, r.xy + soft, q);
		vec2 hi = 1.0 - smoothstep(r.zw - soft, r.zw + soft, q);
		return lo.x * lo.y * hi.x * hi.y;
	}

	// inside a pane (not on a beam)? 0..1
	float paneOpen(vec2 q, float soft) {
		vec2 rel = q - vec2(${De(ga)}, ${De(n0)});
		vec2 pitch = vec2(${De(uu)}, ${De(du)});
		vec2 cell = floor(rel / pitch);
		if (cell.x < 0.0 || cell.y < 0.0 || cell.x > ${De(5)} || cell.y > ${De(8)}) return 0.0;
		vec2 loc = rel - cell * pitch;
		return rectOpen(loc, vec4(0.0, 0.0, ${De(Ns)}, ${De(Rs)}), soft);
	}

	float barCov(float d, float soft) {
		return 1.0 - smoothstep(${De(mu)} - soft, ${De(mu)} + soft, d);
	}

	// sunlight reaching point p through the skylight, 0..1
	float skylightAt(vec3 p) {
		if (p.y > ${De(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q0 = (p + L * ((${De(8)} - p.y) / L.y)).xz;
		vec2 q1 = (p + L * ((${De(xa.y)} - p.y) / L.y)).xz;
		vec2 qb = (p + L * ((${De(pu)} - p.y) / L.y)).xz;
		vec2 q2 = (p + L * ((${De(Ls.y)} - p.y) / L.y)).xz;
		float tG = (${De(rl)} - p.y) / L.y;
		vec2 qg = (p + L * tG).xz;
		vec2 qt = (p + L * ((${De(vu)} - p.y) / L.y)).xz;
		float soft = 0.004 + 0.007 * tG;
		float open = rectOpen(q0, vec4(${De(ga-r0)}, ${De(n0-r0)}, ${De(nl+r0)}, ${De(ma+r0)}), soft)
		           * rectOpen(q1, vec4(${De(ga-r0+xa.inset)}, ${De(n0-r0+xa.inset)}, ${De(nl+r0-xa.inset)}, ${De(ma+r0-xa.inset)}), soft)
		           * paneOpen(qb, soft) * paneOpen(q2, soft) * paneOpen(qt, soft);
		if (open <= 0.0) return 0.0;
		// the glazing, measured from the centre of this pane
		vec2 rel = qg - vec2(${De(ga)}, ${De(n0)});
		vec2 pitch = vec2(${De(uu)}, ${De(du)});
		vec2 paneHalf = vec2(${De(Ns/2)}, ${De(Rs/2)});
		vec2 c = rel - floor(rel / pitch) * pitch - paneHalf;
		vec2 ac = abs(c);
		vec2 an = ac / paneHalf;                       // 0 at the centre, 1 at the pane's edge
		float hm = min(paneHalf.x, paneHalf.y);
		float ring = max(an.x, an.y);
		float cover = max(barCov(ac.x, soft), barCov(ac.y, soft));
		cover = max(cover, barCov(abs(an.x - an.y) * hm * 0.7071, soft));
		cover = max(cover, barCov(abs(ring - ${De(Im)}) * hm, soft));
		cover = max(cover, barCov(abs(ring - ${De($m)}) * hm, soft));
		return open * (1.0 - cover * 0.9);
	}

	// the same light for the beams in the air: the whole opening glows a
	// little, and the panes and bars show in it, softly
	float skylightVol(vec3 p) {
		if (p.y > ${De(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q = (p + L * ((${De(rl)} - p.y) / L.y)).xz;
		float open = rectOpen(q, vec4(${De(ga)}, ${De(n0)}, ${De(nl)}, ${De(ma)}), 0.25);
		if (open <= 0.0) return 0.0;
		return open * (0.13 + 0.87 * skylightAt(p));
	}

	// light thrown back up by the bright squares on the floor: strongest
	// on what stands beside them and faces them (the lower walls, the
	// pillars, the statues, the ceiling above), fading with distance
	float skylightBounce(vec3 p, vec3 n) {
		if (p.x > 14.2 || p.x < -0.4) return 0.0;
		vec3 L = SKY_SUN;
		vec2 c = vec2(${De(14/2)}, ${De((n0+ma)/2)}) - L.xz * (${De(rl)} / L.y);
		vec2 d = max(abs(p.xz - c) - vec2(${De(7.75/2)}, ${De(13.05/2)}), 0.0);
		float fall = 1.0 / (1.0 + 0.09 * (dot(d, d) + p.y * p.y * 0.6));
		vec3 to = normalize(vec3(c.x, -0.4, c.y) - p);
		return fall * (0.3 + 0.7 * max(dot(n, to), 0.0));
	}

	// a soft daylight glow under the lantern
	float skylightGlow(vec3 p) {
		float z = smoothstep(${De(n0-3)}, ${De(n0+2)}, p.z)
		        * (1.0 - smoothstep(${De(ma-2)}, ${De(ma+3)}, p.z));
		float x = 1.0 - 0.35 * smoothstep(${De(7.75/2)}, ${De(14/2)}, abs(p.x - ${De(14/2)}));
		return z * x;
	}`}Fm.exports={addSkylight:X4,skylightGLSL:K4,Z_START:n0,Z_END:ma,GLASS_Y:rl,HEIGHT:8}});var vr=xt((nA,Bm)=>{"use strict";var qi=Fa(),bu=8,en=.35,jt={x0:13.65,x1:38.12,z0:41,z1:47.2,zc:44.1,hallEnd:50.65,spring:5.6,crown:bu},qm=(jt.z1-jt.z0)/2,gu=jt.crown-jt.spring,yu=(gu*gu+qm*qm)/(2*gu),wu=jt.crown-yu;function Fi(t){let e=t-jt.zc;return wu+Math.sqrt(Math.max(0,yu*yu-e*e))}var Le={first:17.43,pitch:4.4,count:5,halfW:1.2,sill:.75,spring:4.3},F0=Array.from({length:Le.count},(t,e)=>Le.first+e*Le.pitch),Gm=F0.slice(1).map(t=>t-Le.pitch/2),Q4=[F0[0],F0[2],F0[4]],jf=[F0[1],F0[3]],jr={r:1.3,sill:.62,spring:3.3},qo=[0,0,0],al=[11,0,0],qa=[10,0,0],sl=[8,0,0];function Zn(t,e,o,n,r,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),f=t.vert(n,a,s),l=t.vert(r,a,s);t.tri(i,c,f),t.tri(i,f,l)}function Wr(t,e,o,n,r,a,s,i){t.box(Math.min(e,r),Math.min(o,a),Math.min(n,s),Math.max(e,r),Math.max(o,a),Math.max(n,s),i)}function il(t,e){let{u0:o,u1:n,w0:r,w1:a,top:s,holes:i,mat:c}=e,f=new Set([o,n]);for(let d of i){f.add(d.u0),f.add(d.u1);let m=Math.max(8,Math.ceil((d.u1-d.u0)/(d.step||.08)));for(let g=1;g<m;g++)f.add(d.u0+(d.u1-d.u0)*g/m)}for(let d of e.cuts||[])f.add(d);let l=e.topStep||.5;for(let d=o;d<n;d+=l)f.add(d);let v=[...f].filter(d=>d>=o-1e-9&&d<=n+1e-9).sort((d,m)=>d-m),h=(d,m)=>d.bot?d.bot(m):d.bottom,u=(d,m)=>{let g=s(d),x=m.map(_=>[Math.max(0,h(_,d)),Math.min(_.head(d),g)]).filter(_=>_[1]>_[0]).sort((_,M)=>_[0]-M[0]),b=[],w=0;for(let _ of x)_[0]>w+1e-6&&b.push([w,_[0]]),w=Math.max(w,_[1]);return g>w+1e-6&&b.push([w,g]),b},p=(d,m,g)=>[d,m,g];for(let d=0;d<v.length-1;d++){let m=v[d],g=v[d+1],x=(m+g)/2,b=i.filter(R=>x>R.u0&&x<R.u1),w=b.length?Math.max(m,Math.max(...b.map(R=>R.u0))+1e-7):m,_=b.length?Math.min(g,Math.min(...b.map(R=>R.u1))-1e-7):g,M=u(w,b),A=u(_,b),$=Math.min(M.length,A.length);for(let R=0;R<$;R++){let[W,H]=M[R],[D,C]=A[R];H-W<1e-6&&C-D<1e-6||(Zn(t,p(m,W,a),p(g,D,a),p(g,C,a),p(m,H,a),[0,0,1],c),e.frontOnly||Zn(t,p(g,D,r),p(m,W,r),p(m,H,r),p(g,C,r),[0,0,-1],c))}}e.noEnds||(Zn(t,p(o,0,r),p(o,0,a),p(o,s(o),a),p(o,s(o),r),[-1,0,0],c),Zn(t,p(n,0,a),p(n,0,r),p(n,s(n),r),p(n,s(n),a),[1,0,0],c));for(let d of i){if(d.noReveal)continue;let m=d.mat||e.revealMat||c,g=Math.max(0,h(d,d.u0+1e-7)),x=Math.max(0,h(d,d.u1-1e-7)),b=Math.min(d.head(d.u0+1e-7),s(d.u0)),w=Math.min(d.head(d.u1-1e-7),s(d.u1));b>g+1e-6&&Zn(t,p(d.u0,g,a),p(d.u0,g,r),p(d.u0,b,r),p(d.u0,b,a),[1,0,0],m),w>x+1e-6&&Zn(t,p(d.u1,x,r),p(d.u1,x,a),p(d.u1,w,a),p(d.u1,w,r),[-1,0,0],m);let _=Math.max(8,Math.ceil((d.u1-d.u0)/(d.step||.06)));for(let M=0;M<_;M++){let A=d.u0+(d.u1-d.u0)*M/_,$=d.u0+(d.u1-d.u0)*(M+1)/_,R=Math.max(A,d.u0+1e-7),W=Math.min($,d.u1-1e-7),H=Math.min(d.head(R),s(A)),D=Math.min(d.head(W),s($));if(!(H>=s(A)-1e-6&&D>=s($)-1e-6)){let nt=$-A,yt=D-H,vt=Math.hypot(nt,yt)||1;Zn(t,p(A,H,r),p($,D,r),p($,D,a),p(A,H,a),[yt/vt,-nt/vt,0],m)}let C=h(d,R),P=h(d,W);if(C>1e-6||P>1e-6){let nt=$-A,yt=P-C,vt=Math.hypot(nt,yt)||1;Zn(t,p($,P,r),p(A,C,r),p(A,C,a),p($,P,a),[-yt/vt,nt/vt,0],m)}}}}var xu=(t,e,o)=>n=>{let r=n-t;return o+Math.sqrt(Math.max(0,e*e-r*r))};function Z4(t,e){let o=jr.r,n=jr.sill,r=jr.spring,a=jt.z0,s=24,i=(u,p,d)=>[e+Math.cos(u)*p,d,a-Math.sin(u)*p];for(let u=0;u<s;u++){let p=Math.PI*u/s,d=Math.PI*(u+1)/s,m=[-Math.cos(p),0,Math.sin(p)],g=[-Math.cos(d),0,Math.sin(d)],x=[t.vert(i(p,o,n),m,qo),t.vert(i(d,o,n),g,qo),t.vert(i(d,o,r),g,qo),t.vert(i(p,o,r),m,qo)];t.tri(x[0],x[1],x[2]),t.tri(x[0],x[2],x[3])}let c=12,f=(u,p)=>[e+Math.cos(u)*Math.cos(p)*o,r+Math.sin(p)*o,a-Math.sin(u)*Math.cos(p)*o],l=(u,p)=>[-Math.cos(u)*Math.cos(p),-Math.sin(p),Math.sin(u)*Math.cos(p)];for(let u=0;u<s;u++)for(let p=0;p<c;p++){let d=Math.PI*u/s,m=Math.PI*(u+1)/s,g=Math.PI/2*p/c,x=Math.PI/2*(p+1)/c,b=[t.vert(f(d,g),l(d,g),qa),t.vert(f(m,g),l(m,g),qa),t.vert(f(m,x),l(m,x),qa),t.vert(f(d,x),l(d,x),qa)];t.tri(b[0],b[1],b[2]),t.tri(b[0],b[2],b[3])}for(let u=1;u<8;u++){let p=Math.PI*u/8,d=[];for(let m=0;m<=10;m++){let g=Math.PI/2*m/10*.97;d.push(f(p,g).map((x,b)=>x-l(p,g)[b]*.02))}t.tube(d,m=>.035*(1-m*.6),12,6,{mat:()=>qa})}let v=t.vert([e,n,a],[0,1,0],qo);for(let u=0;u<s;u++){let p=Math.PI*u/s,d=Math.PI*(u+1)/s;t.tri(v,t.vert(i(p,o,n),[0,1,0],qo),t.vert(i(d,o,n),[0,1,0],qo))}Wr(t,e-o-.12,n-.1,a,e+o+.12,n+.02,a+.12,qo),Wr(t,e-o-.16,n-.2,a,e+o+.16,n-.1,a+.07,qo);let h=.16;for(let u=0;u<s;u++){let p=Math.PI*u/s,d=Math.PI*(u+1)/s,m=(g,x,b)=>[e+Math.cos(g)*x,r+Math.sin(g)*x,b];Zn(t,m(p,o,a+.05),m(d,o,a+.05),m(d,o+h,a+.05),m(p,o+h,a+.05),[0,0,1],qo),Zn(t,m(p,o+h,a),m(d,o+h,a),m(d,o+h,a+.05),m(p,o+h,a+.05),[Math.cos((p+d)/2),Math.sin((p+d)/2),0],qo),Zn(t,m(p,o,a),m(d,o,a),m(d,o,a+.05),m(p,o,a+.05),[-Math.cos((p+d)/2),-Math.sin((p+d)/2),0],qo)}for(let u of[-1,1]){let p=e+u*o,d=e+u*(o+h);Wr(t,p,n,a,d,r,a+.05,qo),Wr(t,p-u*.02,r-.12,a,d+u*.06,r,a+.09,qo)}Wr(t,e-.11,r+o-.04,a,e+.11,r+o+h+.1,a+.09,qo),t.lathe([[.66,n,1],[.66,n+.06,1],[.62,n+.1],[.6,n+.3],[.64,n+.34,1],[.64,n+.4,1],[0,n+.4]],e,a-.62,40,{mat:()=>qo})}var J4=jr.sill+.4,t_=jt.z0-.62;function e_(t){Zn(t,[14,0,jt.z0-en],[jt.x1+en,0,jt.z0-en],[jt.x1+en,0,jt.z1+en],[14,0,jt.z1+en],[0,1,0],qo),t.curMat=al,il(t,{u0:14+en,u1:jt.x1+2*en,w0:jt.z0-2*en,w1:jt.z0,top:()=>jt.spring,holes:jf.map(f=>({u0:f-jr.r,u1:f+jr.r,bottom:jr.sill,head:xu(f,jr.r,jr.spring),noReveal:!0})),mat:al,cuts:[jt.x1]});for(let f of jf)Z4(t,f);t.save(),t.translate(0,0,jt.z1),t.rotateY(Math.PI),t.translate(-(jt.x1+2*en),0,-2*en);let e=f=>jt.x1+2*en-f;il(t,{u0:e(jt.x1+2*en),u1:e(13.65),w0:0,w1:2*en,top:()=>jt.spring,holes:F0.map(f=>({u0:e(f+Le.halfW),u1:e(f-Le.halfW),bottom:Le.sill,head:xu(e(f),Le.halfW,Le.spring)})),mat:al,revealMat:qo}),t.restore(),t.save(),t.translate(jt.x1,0,0),t.rotateY(-Math.PI/2);let o=qi.DOOR,n=jt.zc,r=o.r;il(t,{u0:jt.z0-2*en,u1:jt.z1+2*en,w0:-2*en,w1:0,top:f=>f<jt.z0||f>jt.z1?jt.spring:Fi(f),topStep:.15,holes:[{u0:n-r,u1:n+r,bottom:0,head:xu(n,r,o.spring)}],mat:al,revealMat:qo}),t.restore(),t.save(),t.translate(14+en,0,0),t.rotateY(-Math.PI/2),il(t,{u0:jt.z0,u1:jt.z1,w0:-0,w1:2*en,top:()=>bu,topStep:.15,holes:[{u0:jt.z0,u1:jt.z1,bottom:0,head:f=>Fi(f)}],mat:al,revealMat:qo}),t.restore();let a=14+en,s=Math.ceil((jt.x1-a)/1),i=28,c=[];for(let f=0;f<=s;f++){let l=a+(jt.x1-a)*f/s,v=[];for(let h=0;h<=i;h++){let u=jt.z0+(jt.z1-jt.z0)*h/i,p=Fi(u),d=[0,wu-p,jt.zc-u],m=Math.hypot(d[1],d[2]);v.push(t.vert([l,p,u],[0,d[1]/m,d[2]/m],qa))}c.push(v)}for(let f=0;f<s;f++)for(let l=0;l<i;l++)t.tri(c[f][l],c[f+1][l],c[f][l+1]),t.tri(c[f+1][l],c[f+1][l+1],c[f][l+1])}function Dm(t,e,o,n){let a=[];for(let s=0;s<=32;s++){let i=jt.z0+(jt.z1-jt.z0)*s/32,c=Fi(i),f=wu-c,l=jt.zc-i,v=Math.hypot(f,l),h=[c+f/v*n,i+l/v*n];a.push({y:c,z:i,iy:h[0],iz:h[1],n:[0,f/v,l/v]})}for(let s=0;s<32;s++){let i=a[s],c=a[s+1];Zn(t,[e-o,i.iy,i.iz],[e+o,i.iy,i.iz],[e+o,c.iy,c.iz],[e-o,c.iy,c.iz],i.n,qo),Zn(t,[e-o,i.y,i.z],[e-o,i.iy,i.iz],[e-o,c.iy,c.iz],[e-o,c.y,c.z],[-1,0,0],qo),Zn(t,[e+o,i.iy,i.iz],[e+o,i.y,i.z],[e+o,c.y,c.z],[e+o,c.iy,c.iz],[1,0,0],qo)}}function Uf(t,e,o,n){let s=o,i=o+n*.16;Wr(t,e-.28,0,s,e+.28,jt.spring-.3,i,qo),Wr(t,e-.28-.06,0,s,e+.28+.06,.32,o+n*(.16+.05),qo),Wr(t,e-.28-.05,jt.spring-.3,s,e+.28+.05,jt.spring-.1,o+n*(.16+.05),qo),Wr(t,e-.28-.1,jt.spring-.1,s,e+.28+.1,jt.spring,o+n*(.16+.1),qo)}function o_(t,e){let o=Fi(jt.zc),n=[[0,o-.13,1],[.05,o-.125],[.12,o-.1],[.16,o-.06,1],[.22,o-.05],[.3,o-.075],[.4,o-.06],[.48,o-.03,1],[.55,o-.035],[.7,o-.025],[.82,o-.012,1],[.95,o+.03]];t.lathe(n,e,jt.zc,48,{mat:()=>qa});for(let r=0;r<8;r++){let a=r*Math.PI/4,s=e+Math.cos(a)*.32,i=jt.zc+Math.sin(a)*.32;t.save(),t.translate(s,o-.07,i),t.rotateY(-a),t.curMat=qa,t.ellipsoid([0,0,0],[.13,.03,.06],6,10),t.restore()}}function n_(t){t.curMat=qo;for(let[e,o]of[[jt.z0,1],[jt.z1,-1]])Wr(t,14.35,jt.spring-.12,e,jt.x1,jt.spring,e+o*.1,qo),Wr(t,14.35,jt.spring-.04,e,jt.x1,jt.spring+.05,e+o*.18,qo);for(let[e,o]of[[jt.z0,1],[jt.z1,-1]])Wr(t,14.35,0,e,jt.x1,.42,e+o*.12,qo),Wr(t,14.35,.42,e,jt.x1,.5,e+o*.07,qo);for(let e of Gm)Dm(t,e,.24,.16),Uf(t,e,jt.z0,1),Uf(t,e,jt.z1,-1);for(let e of[14.35+.28,jt.x1-.28])Dm(t,e,.28,.22),Uf(t,e,jt.z0,1),Uf(t,e,jt.z1,-1);for(let e of F0)o_(t,e)}function r_(t){let e=jt.z1+en,o=e-.04,n=e+.04,r=(i,c,f,l)=>Wr(t,i,c,o,f,l,n,sl),a=Le.halfW,s=(i,c,f,l,v,h)=>{let u=(p,d,m)=>[i+d*Math.cos(p),Le.spring+d*Math.sin(p),m];for(let p=0;p<h;p++){let d=l+(v-l)*p/h,m=l+(v-l)*(p+1)/h;Zn(t,u(d,c,o),u(m,c,o),u(m,f,o),u(d,f,o),[0,0,-1],sl),Zn(t,u(d,f,n),u(m,f,n),u(m,c,n),u(d,c,n),[0,0,1],sl)}};for(let i of F0){let c=i-a,f=i+a;r(c,Le.sill,c+.07,Le.spring),r(f-.07,Le.sill,f,Le.spring),r(c,Le.sill,f,Le.sill+.07),r(c,Le.spring-.04,f,Le.spring+.04);for(let v of[-.5,0,.5])r(i+v*a-.022,Le.sill,i+v*a+.022,Le.spring);let l=6;for(let v=1;v<l;v++){let h=Le.sill+(Le.spring-Le.sill)*v/l;r(c,h-.02,f,h+.02)}s(i,a-.07,a,0,Math.PI,32),s(i,.42,.46,0,Math.PI,20);for(let v=1;v<6;v++){let h=Math.PI*v/6,u=Math.cos(h),p=Math.sin(h),d=.02,m=(g,x)=>[i+u*g-p*d*x,Le.spring+p*g+u*d*x];Zn(t,[...m(.44,-1),o],[...m(a-.05,-1),o],[...m(a-.05,1),o],[...m(.44,1),o],[0,0,-1],sl),Zn(t,[...m(.44,1),n],[...m(a-.05,1),n],[...m(a-.05,-1),n],[...m(.44,-1),n],[0,0,1],sl)}}}function a_(){let t=[],e=jt.z1+en;for(let o of F0){let n=o-Le.halfW,r=o+Le.halfW;t.push([n,Le.sill,e],[r,Le.sill,e],[r,Le.spring,e],[n,Le.sill,e],[r,Le.spring,e],[n,Le.spring,e]);for(let a=0;a<24;a++){let s=Math.PI*a/24,i=Math.PI*(a+1)/24;t.push([o,Le.spring,e],[o+Le.halfW*Math.cos(s),Le.spring+Le.halfW*Math.sin(s),e],[o+Le.halfW*Math.cos(i),Le.spring+Le.halfW*Math.sin(i),e])}}return t}function Hm(t,e){t.save(),t.translate(jt.x1+en,0,jt.zc-7),t.rotateY(-Math.PI/2),e(),t.restore()}function s_(t){Hm(t,()=>{qi.addSurround(t),qi.addFrames(t,"fixed")})}function i_(t){return qi.glassPanes(t||"fixed").map(([o,n,r])=>[jt.x1+en-r,n,jt.zc-7+o])}function c_(t){e_(t),n_(t),r_(t),s_(t),t.curMat=[0,0,0]}var l_={x:jt.x1+en,zLo:jt.zc-qi.DOOR.r,zHi:jt.zc+qi.DOOR.r},go=t=>t.toFixed(4);function f_(){return`
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
		float k = floor((q.x - ${go(Le.first)}) / ${go(Le.pitch)} + 0.5);
		if (k < 0.0 || k > ${go(Le.count-1)}) return 0.0;
		float dx = q.x - (${go(Le.first)} + k * ${go(Le.pitch)});
		float side = 1.0 - smoothstep(${go(Le.halfW)} - soft, ${go(Le.halfW)} + soft, abs(dx));
		float sill = smoothstep(${go(Le.sill)} - soft, ${go(Le.sill)} + soft, q.y);
		float r = length(vec2(dx, q.y - ${go(Le.spring)}));
		float head = q.y < ${go(Le.spring)} ? 1.0 : 1.0 - smoothstep(${go(Le.halfW)} - soft, ${go(Le.halfW)} + soft, r);
		float open = side * sill * head;
		// the black glazing bars, softly
		float cover = 0.0;
		cover = max(cover, winBar(abs(dx), 0.022, soft));
		cover = max(cover, winBar(abs(abs(dx) - ${go(Le.halfW*.5)}), 0.022, soft));
		float rowH = ${go((Le.spring-Le.sill)/6)};
		float ry = (q.y - ${go(Le.sill)}) / rowH;
		cover = max(cover, q.y < ${go(Le.spring)} ? winBar(abs(fract(ry + 0.5) - 0.5) * rowH, 0.02, soft) : 0.0);
		cover = max(cover, q.y > ${go(Le.spring)} ? winBar(abs(r - 0.44), 0.02, soft) : 0.0);
		return open * (1.0 - cover * 0.75);
	}

	// daylight reaching point p from the windows
	float windowLight(vec3 p, vec3 n) {
		if (p.x < ${go(jt.x0)} || p.z < ${go(jt.z0-.1)} || p.z > ${go(jt.z1)}) return 0.0;
		float ndl = max(dot(n, WIN_SKY), 0.0);
		if (ndl <= 0.0) return 0.0;
		float tIn = (${go(jt.z1)} - p.z) / WIN_SKY.z;
		float tOut = (${go(jt.z1+2*en)} - p.z) / WIN_SKY.z;
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
		${jf.map(t=>`{ float d = abs(p.x - ${go(t)}); if (d < best) { best = d; lamp = vec3(${go(t)}, ${go(jr.spring+.55)}, ${go(jt.z0-.15)}); } }`).join(`
		`)}
		return lamp;
	}

	float nicheLight(vec3 p, vec3 n) {
		if (p.z > ${go(jt.z0+1.6)} || p.z < ${go(jt.z0-jr.r-.1)} || p.x < ${go(jt.x0)}) return 0.0;
		vec3 lamp = nicheLamp(p);
		vec3 d = lamp - p;
		float dist = length(d);
		vec3 L = d / dist;
		// a cone pointing down into the niche
		float cone = smoothstep(0.35, 0.75, dot(-L, normalize(vec3(0.0, -1.0, 0.35))));
		float inside = 1.0 - smoothstep(${go(jr.r)}, ${go(jr.r+.5)}, abs(p.x - lamp.x));
		return max(dot(n, L), 0.0) * cone * inside / (1.0 + 0.35 * dist * dist);
	}

	// soft general daylight in the corridor, strongest near the glass
	float corridorGlow(vec3 p) {
		if (p.x < ${go(jt.x0-1)}) return 0.0;
		float inC = smoothstep(${go(jt.z0-1.5)}, ${go(jt.z0)}, p.z) * smoothstep(${go(jt.x0-1)}, ${go(jt.x0+1)}, p.x);
		float near = 0.55 + 0.45 * smoothstep(${go(jt.z0)}, ${go(jt.z1)}, p.z);
		return inC * near;
	}`}Bm.exports={wallWithHoles:il,windowLightGLSL:f_,addWing:c_,windowGlass:a_,farDoorGlass:i_,atFarDoor:Hm,FAR_DOOR:l_,vaultY:Fi,C:jt,NICHE_X:jf,NICHE:jr,NICHE_PLINTH_TOP:J4,NICHE_STATUE_Z:t_,WIN:Le,winCentres:F0,piers:Gm,PAINTING_X:Q4,HEIGHT:bu}});var _0=xt((rA,Wm)=>{"use strict";var _u=vr(),Qo=8,Hi=.35,Cs=14,Gi=4,te={x0:Cs+Hi,x1:Cs+Hi+2*Gi,z0:5.9-Gi,z1:5.9+Gi,zc:5.9,cx:Cs+Hi+Gi,arch:{r:2.6,spring:4.4},dome:{r:3.3,base:Qo},oculus:3.3};te.domeTop=te.dome.base+te.dome.r;var Bi={spokes:16,ringE:[.42,.95],bar:.035},Dn={sxz:1.32,sy:1.6,yaw:.6};Dn.crownC=[te.cx,.4+3.4*Dn.sy,te.zc];Dn.crownR=[2.3*Dn.sxz,1.9*Dn.sy,2.3*Dn.sxz];Dn.trunkR=.26*Dn.sxz;Dn.trunkTop=.4+2.2*Dn.sy;var Um={inner:1.05,outer:1.62,seat:.48,soil:.4},Xf=(()=>{let t=[.2,1,-.15],e=Math.hypot(...t);return t.map(o=>o/e)})(),Jn=[0,0,0],Di=[11,0,0],Wf=[10,0,0],Vf=[9,0,0],h_=[5,0,0],Mu=[3,0,0];function ya(t,e,o,n,r,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),f=t.vert(n,a,s),l=t.vert(r,a,s);t.tri(i,c,f),t.tri(i,f,l)}function Or(t,e,o,n,r,a,s,i){t.box(Math.min(e,r),Math.min(o,a),Math.min(n,s),Math.max(e,r),Math.max(o,a),Math.max(n,s),i)}var u_=(t,e,o)=>n=>{let r=n-t;return o+Math.sqrt(Math.max(0,e*e-r*r))};function d_(t){t.save(),t.translate(Cs+Hi,0,0),t.rotateY(-Math.PI/2),_u.wallWithHoles(t,{u0:0,u1:_u.C.z0,w0:0,w1:2*Hi,top:()=>Qo,holes:[{u0:te.zc-te.arch.r,u1:te.zc+te.arch.r,bottom:0,head:u_(te.zc,te.arch.r,te.arch.spring),step:.05}],mat:Di,revealMat:Jn,topStep:1}),t.restore();let e=Cs-Hi;for(let[s,i]of[[0,te.zc-te.arch.r],[te.zc+te.arch.r,_u.C.z0]])Or(t,e-.12,0,s,e,.42,i,Jn),Or(t,e-.07,.42,s,e,.5,i,Jn);let o=e,n=.24,r=40,a=(s,i,c)=>[c,te.arch.spring+Math.sin(s)*i,te.zc+Math.cos(s)*i];for(let s=0;s<r;s++){let i=Math.PI*s/r,c=Math.PI*(s+1)/r;ya(t,a(i,te.arch.r,o-.07),a(c,te.arch.r,o-.07),a(c,te.arch.r+n,o-.07),a(i,te.arch.r+n,o-.07),[-1,0,0],Jn),ya(t,a(i,te.arch.r+n,o),a(c,te.arch.r+n,o),a(c,te.arch.r+n,o-.07),a(i,te.arch.r+n,o-.07),[0,Math.sin((i+c)/2),Math.cos((i+c)/2)],Jn),ya(t,a(i,te.arch.r,o),a(c,te.arch.r,o),a(c,te.arch.r,o-.07),a(i,te.arch.r,o-.07),[0,-Math.sin((i+c)/2),-Math.cos((i+c)/2)],Jn)}Or(t,o-.12,te.arch.spring+te.arch.r-.06,te.zc-.17,o,te.arch.spring+te.arch.r+n+.16,te.zc+.17,Jn);for(let s of[-1,1]){let i=te.zc+s*te.arch.r,c=te.zc+s*(te.arch.r+n);Or(t,o-.07,0,i,o,te.arch.spring,c,Jn),Or(t,o-.13,te.arch.spring-.16,i-s*.03,o,te.arch.spring,c+s*.08,Jn),Or(t,o-.12,0,i-s*.03,o,.5,c+s*.06,Jn)}}function p_(t){let{x0:e,x1:o,z0:n,z1:r}=te;ya(t,[Cs,0,n],[o,0,n],[o,0,r],[Cs,0,r],[0,1,0],Jn),t.curMat=Di,ya(t,[o,0,n],[o,0,r],[o,Qo,r],[o,Qo,n],[-1,0,0],Di),ya(t,[e,0,n],[o,0,n],[o,Qo,n],[e,Qo,n],[0,0,1],Di),ya(t,[o,0,r],[e,0,r],[e,Qo,r],[o,Qo,r],[0,0,-1],Di),ya(t,[e,0,r],[e,0,n],[e,Qo,n],[e,Qo,r],[1,0,0],Di),Or(t,o-.12,0,n,o,.42,r,Jn),Or(t,e,0,n,o,.42,n+.12,Jn),Or(t,e,0,r-.12,o,.42,r,Jn),Or(t,o-.2,Qo-.3,n,o,Qo,r,Jn),Or(t,e,Qo-.3,n,o,Qo,n+.2,Jn),Or(t,e,Qo-.3,r-.2,o,Qo,r,Jn),Or(t,e,Qo-.3,n,e+.2,Qo,r,Jn);let a=te.dome.r,s=48,i=[];for(let g=0;g<=s;g++){let x=Math.PI*2*g/s;i.push([te.cx+Math.cos(x)*a,te.zc+Math.sin(x)*a])}let c=g=>{let x=Math.abs(Math.cos(g)),b=Math.abs(Math.sin(g));return Math.min(Gi/Math.max(x,1e-6),Gi/Math.max(b,1e-6))};for(let g=0;g<s;g++){let x=Math.PI*2*g/s,b=Math.PI*2*(g+1)/s,w=c(x),_=c(b),M=[te.cx+Math.cos(x)*w,Qo,te.zc+Math.sin(x)*w],A=[te.cx+Math.cos(b)*_,Qo,te.zc+Math.sin(b)*_];ya(t,[i[g][0],Qo,i[g][1]],[i[g+1][0],Qo,i[g+1][1]],A,M,[0,-1,0],Wf)}t.lathe([[a+.02,Qo-.18,1],[a-.12,Qo-.18,1],[a-.12,Qo-.06,1],[a-.05,Qo,1],[a,Qo+.02]],te.cx,te.zc,s,{mat:()=>Jn});let f=16,l=(g,x,b)=>[te.cx+Math.cos(g)*Math.cos(x)*b,te.dome.base+Math.sin(x)*b,te.zc+Math.sin(g)*Math.cos(x)*b],v=Math.PI/2;for(let g=0;g<s;g++)for(let x=0;x<f;x++){let b=Math.PI*2*g/s,w=Math.PI*2*(g+1)/s,_=v*x/f,M=v*(x+1)/f,A=(R,W)=>[-Math.cos(R)*Math.cos(W),-Math.sin(W),-Math.sin(R)*Math.cos(W)],$=[t.vert(l(b,_,a),A(b,_),Vf),t.vert(l(w,_,a),A(w,_),Vf),t.vert(l(w,M,a),A(w,M),Vf),t.vert(l(b,M,a),A(b,M),Vf)];t.tri($[0],$[1],$[2]),t.tri($[0],$[2],$[3])}for(let g=0;g<Bi.spokes;g++){let x=Math.PI*2*g/Bi.spokes,b=[];for(let w=0;w<=14;w++)b.push(l(x,(v-.06)*w/14,a-.04));t.tube(b,()=>.04,20,6,{mat:()=>Wf})}for(let g of Bi.ringE){let x=Math.cos(g)*(a-.04),b=te.dome.base+Math.sin(g)*(a-.04),w=[];for(let _=0;_<=72;_++){let M=Math.PI*2*_/72;w.push([te.cx+Math.cos(M)*x,b,te.zc+Math.sin(M)*x])}t.tube(w,()=>.035,72,6,{mat:()=>Wf})}t.ellipsoid([te.cx,te.dome.base+a-.06,te.zc],[.16,.08,.16],6,12,{mat:()=>Wf});let h=.46,u=.55,p=.12,d=(g,x,b,w)=>{Or(t,g,h-.08,x,b,h,w,Mu);let _=b-g>w-x?[g+.25,b-.25]:[g+.06,b-.06],M=b-g>w-x?[x+.06,w-.06]:[x+.25,w-.25];Or(t,_[0],0,M[0],_[1],h-.08,M[1],Mu)};d(o-p-u,n+1.1,o-p,r-1.1),d(e+1,n+p,o-1.1,n+p+u),d(e+1,r-p-u,o-1.1,r-p);let m=Um;t.lathe([[m.outer,0,1],[m.outer,m.seat-.1,1],[m.outer+.07,m.seat-.07,1],[m.outer+.07,m.seat,1],[m.inner-.05,m.seat,1],[m.inner-.05,m.seat-.06,1],[m.inner,m.seat-.08,1],[m.inner,m.soil]],te.cx,te.zc,64,{mat:()=>Mu}),t.lathe([[m.inner,m.soil,1],[0,m.soil+.03]],te.cx,te.zc,48,{mat:()=>h_})}function v_(t){d_(t),p_(t),t.curMat=[0,0,0]}var Do=t=>t.toFixed(4);function jm(){let t=te.dome.r,e=Bi.ringE.map(o=>Math.cos(o)*t);return`
	const vec3 SHAFT = vec3(${Do(Xf[0])}, ${Do(Xf[1])}, ${Do(Xf[2])});

	// how much sun the glass dome lets through towards p (0..1): the round
	// opening, less the soft shadows of its ribs and rings (worked out on
	// the dome's base, where the frame is seen almost straight on)
	float oculusOpen(vec3 p) {
		float t = (${Do(te.dome.base+.6)} - p.y) / SHAFT.y;
		vec3 q = p + SHAFT * t;
		vec2 d2 = q.xz - vec2(${Do(te.cx)}, ${Do(te.zc)});
		float d = length(d2);
		float soft = 0.02 + 0.012 * t;
		float open = 1.0 - smoothstep(${Do(t-.15)} - soft, ${Do(t-.15)} + soft, d);
		float hw = ${Do(Bi.bar)};
		float cover = 0.0;
		${e.map(o=>`cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, abs(d - ${Do(o)})));`).join(`
		`)}
		float ang = atan(d2.y, d2.x);
		float stp = ${Do(Math.PI*2/Bi.spokes)};
		float da = abs(mod(ang + stp * 0.5, stp) - stp * 0.5);
		cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, d * sin(da)));
		cover = max(cover, 1.0 - smoothstep(0.16 - soft, 0.16 + soft, d));
		return open * (1.0 - cover * 0.85);
	}

	// the tree's own shade: its crown lets dappled light through, its
	// trunk blocks it
	float treeShade(vec3 p) {
		vec3 c = vec3(${Do(Dn.crownC[0])}, ${Do(Dn.crownC[1])}, ${Do(Dn.crownC[2])});
		vec3 r = vec3(${Do(Dn.crownR[0])}, ${Do(Dn.crownR[1])}, ${Do(Dn.crownR[2])});
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
		float tt = (${Do(Dn.trunkTop)} - p.y) / SHAFT.y;
		if (tt > 0.0) {
			vec2 o = p.xz - vec2(${Do(te.cx)}, ${Do(te.zc)});
			vec2 dir = SHAFT.xz;
			float k = clamp(-dot(o, dir) / dot(dir, dir), 0.0, tt);
			float dist = length(o + dir * k);
			tr *= smoothstep(${Do(Dn.trunkR*.7)}, ${Do(Dn.trunkR*1.3)}, dist);
		}
		return tr;
	}`}function m_(){return`
	${jm()}

	// sunlight through the oculus reaching p (0..1)
	float alcoveSun(vec3 p, vec3 n) {
		if (p.x < ${Do(te.x0-.75)} || p.z < ${Do(te.z0-.5)} || p.z > ${Do(te.z1+.5)}) return 0.0;
		float ndl = max(dot(n, SHAFT), 0.0);
		if (ndl <= 0.0) return 0.0;
		return ndl * oculusOpen(p) * treeShade(p);
	}

	// soft daylight filling the court, brightest under the dome
	float alcoveGlow(vec3 p) {
		if (p.x < ${Do(te.x0-1.5)} || p.z < ${Do(te.z0-1.5)} || p.z > ${Do(te.z1+1.5)}) return 0.0;
		float inside = smoothstep(${Do(te.x0-1.2)}, ${Do(te.x0+.6)}, p.x);
		float d = length(p.xz - vec2(${Do(te.cx)}, ${Do(te.zc)}));
		return inside * (0.55 + 0.45 * smoothstep(0.0, 8.0, p.y)) * (1.0 - 0.35 * smoothstep(1.0, 5.0, d));
	}`}Wm.exports={addAlcove:v_,alcoveLightGLSL:m_,oculusGLSL:jm,A:te,BENCH:Um,SHAFT:Xf,TREE:Dn}});var tr=xt((aA,Xm)=>{"use strict";var q0=0;try{let t=location.search;/[?&]night\b/.test(t)&&(q0=1)}catch(t){}var ba=q0,ku=0,Vm=[],Yf={tick(t){let e=ku?Math.min(.1,t-ku):0;if(ku=t,ba!==q0){let o=e/2.4;ba=q0>ba?Math.min(q0,ba+o):Math.max(q0,ba-o)}return Yf.night},get night(){return ba*ba*(3-2*ba)},get isNight(){return q0===1},get settled(){return ba===q0},set(t){q0=t?1:0,Vm.forEach(e=>e(q0))},toggle(){Yf.set(!q0)},onChange(t){Vm.push(t)}};Yf.GLSL=`
uniform float night;
vec3 toNight(vec3 c, float keep) {
	float l = dot(c, vec3(0.299, 0.587, 0.114));
	vec3 n = mix(vec3(l), c, 0.35) * vec3(0.55, 0.70, 1.05) * keep;
	return mix(c, n, night);
}
`;Xm.exports=Yf});var Ga=xt((sA,fl)=>{"use strict";var Su=tr(),{C:Eu}=vr(),{A:Kf,BENCH:cl}=_0(),Gn=Math.PI,g_=[18,29,40],Qf=.575,Da=[],ll=(t,e,o,n,r,a,s)=>Da.push(Object.assign({x:t,y:e,z:o,o:n,back:r,hw:a,s:1,k:1,range:7,mount:"wall"},s||{}));g_.forEach(t=>{ll(1.25+Qf+.48,3.25,t,[1,0],.48,Qf,{s:1.2}),ll(12.75-Qf-.48,3.25,t,[-1,0],.48,Qf,{s:1.2})});[3,11].forEach(t=>ll(t,3.45,Eu.hallEnd-.5,[0,-1],.5,99,{s:1.2}));var x_=[14.63,19.63,24.03,28.43,32.83,Eu.x1-.28];x_.forEach(t=>ll(t,3.15,Eu.z0+.16+.44,[0,1],.44,.28));[3,8.8].forEach(t=>ll(.35+.44,2.75,t,[1,0],.44,99));{let t=(cl.inner+cl.outer)/2,e=Math.atan2(-1.12,-.98);Da.push({x:Kf.cx+Math.cos(e)*t,y:cl.seat+.155,z:Kf.zc+Math.sin(e)*t,o:[Math.cos(e),Math.sin(e)],back:0,hw:0,ring:[Kf.cx,Kf.zc,cl.outer+.07,cl.seat],s:.52,k:2.2,range:3.6,mount:"table"})}var Au=.13,Zf=.21,er=Au/Math.cos(Gn/6),Co=t=>t.toFixed(4);function Ym(t){let o=(t||Da.map((n,r)=>r)).map(n=>{let r=Da[n],a=-r.o[1],s=r.o[0],i=r.mount==="table"?`
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
		float V = (q.y / h) * (${Co(Au/Zf)} / cos(t));
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
	}`}var on=0,y_=1;function b_(){let t=[],e=[],o=[],n=[],r=[],a=(u,p,d,m)=>(t.push(u[0],u[1],u[2]),e.push(p[0],p[1],p[2]),o.push(d),n.push(m?m[0]:0,m?m[1]:0),t.length/3-1),s=(u,p)=>[u[0]-p[0],u[1]-p[1],u[2]-p[2]],i=(u,p)=>[u[1]*p[2]-u[2]*p[1],u[2]*p[0]-u[0]*p[2],u[0]*p[1]-u[1]*p[0]],c=u=>{let p=Math.hypot(u[0],u[1],u[2])||1;return[u[0]/p,u[1]/p,u[2]/p]};function f(u,p,d,m,g,x){let b=c(i(s(p,u),s(m,u))),w=a(u,b,g,[0,0]),_=a(p,b,g,[1,0]),M=a(d,b,g,[1,1]),A=a(m,b,g,[0,1]);r.push(w,_,M,w,M,A),x&&r.push(w,M,_,w,A,M)}function l(u,p,d){for(let x=0;x<u.length;x++){let b=u[Math.max(0,x-1)],w=u[Math.min(u.length-1,x+1)],_=c(s(w,b)),M=Math.abs(_[1])>.9?[1,0,0]:[0,1,0],A=c(i(_,M)),$=i(A,_),R=typeof p=="function"?p(x/(u.length-1)):p;for(let W=0;W<=6;W++){let H=W/6*Gn*2,D=Math.cos(H),C=Math.sin(H),P=[A[0]*D+$[0]*C,A[1]*D+$[1]*C,A[2]*D+$[2]*C];a([u[x][0]+P[0]*R,u[x][1]+P[1]*R,u[x][2]+P[2]*R],P,d)}}let g=t.length/3-u.length*7;for(let x=0;x<u.length-1;x++)for(let b=0;b<6;b++){let w=g+x*7+b,_=w+6+1;r.push(w,_,w+1,w+1,_,_+1)}}function v(u,p,d,m,g,x,b,w,_){let M=(A,$,R)=>{let W=x+Gn/6+R*Gn/3;return[u[0]+Math.cos(W)*A,$,u[2]+Math.sin(W)*A]};for(let A=0;A<6;A++)f(M(m,p,A+1),M(m,p,A),M(g,d,A),M(g,d,A+1),b);if(w&&g>0)for(let A=0;A<6;A++){let $=a([u[0],d,u[2]],[0,1,0],b),R=a(M(g,d,A),[0,1,0],b),W=a(M(g,d,A+1),[0,1,0],b);r.push($,W,R)}if(_&&m>0)for(let A=0;A<6;A++){let $=a([u[0],p,u[2]],[0,-1,0],b),R=a(M(m,p,A),[0,-1,0],b),W=a(M(m,p,A+1),[0,-1,0],b);r.push($,R,W)}}function h(u,p,d,m,g,x,b){let w=[];for(let M=0;M<=18;M++){let A=M/18,$=(b||0)+A*m*Gn*2,R=d*(1-.75*A);w.push([u[0]+p[0]*Math.cos($)*R,u[1]+Math.sin($)*R,u[2]+p[2]*Math.cos($)*R])}l(w,g,x)}return Da.forEach(u=>{let p=u.s,d=Math.atan2(u.o[1],u.o[0]),m=[u.x,u.y,u.z],g=(w,_,M)=>[u.x+u.o[0]*w-u.o[1]*(M||0),u.y+_,u.z+u.o[1]*w+u.o[0]*(M||0)],x=u.y-Zf*p,b=u.y+Zf*p;for(let w=0;w<6;w++){let _=d+Gn/6+w*Gn/3,M=_+Gn/3,A=er*p*.97,$=[u.x+Math.cos(_)*A,x,u.z+Math.sin(_)*A],R=[u.x+Math.cos(M)*A,x,u.z+Math.sin(M)*A];f(R,$,[$[0],b,$[2]],[R[0],b,R[2]],y_,!0)}for(let w=0;w<6;w++){let _=d+Gn/6+w*Gn/3,M=er*p;l([[u.x+Math.cos(_)*M,x-.02*p,u.z+Math.sin(_)*M],[u.x+Math.cos(_)*M,b+.02*p,u.z+Math.sin(_)*M]],.011*p,on)}v(m,x-.035*p,x,er*p*1.12,er*p*1.12,d,on,!0,!0),v(m,x-.1*p,x-.035*p,er*p*.55,er*p*1,d,on,!1,!0),v(m,x-.17*p,x-.1*p,0,er*p*.55,d,on,!1,!1);for(let w=0;w<6;w++){let _=d+w*Gn/3,M=Au*p*1.06,A=[u.x+Math.cos(_)*M,x-.06*p,u.z+Math.sin(_)*M];h(A,[-Math.sin(_),0,Math.cos(_)],.03*p,.85,.004*p,on,.3)}v(m,b,b+.03*p,er*p*1.14,er*p*1.14,d,on,!1,!0),v(m,b+.03*p,b+.2*p,er*p*1.14,er*p*.32,d,on,!1,!1),v(m,b+.2*p,b+.27*p,er*p*.34,er*p*.34,d,on,!1,!1),v(m,b+.27*p,b+.37*p,er*p*.42,0,d,on,!1,!0),l([[u.x,b+.36*p,u.z],[u.x,b+.47*p,u.z]],w=>.01*p*(1-.7*w),on),v([u.x,0,u.z],b+.44*p,b+.47*p,.018*p,0,d,on,!1,!0);for(let w=0;w<6;w++){let _=d+Gn/6+w*Gn/3,M=er*p*1.14,A=[u.x+Math.cos(_)*M,b+.03*p,u.z+Math.sin(_)*M];l([A,[A[0],A[1]+.09*p,A[2]]],$=>.008*p*(1-.8*$),on),v([A[0],0,A[2]],A[1]+.035*p,A[1]+.06*p,.014*p,.014*p,_,on,!0,!0)}if(u.mount==="wall"){let w=u.back,_=x-.32,M=g(-w,0,0);((H,D,C)=>{let P=[u.o[0],0,u.o[1]],nt=[-u.o[1],0,u.o[0]],yt=(it,qt,se)=>[M[0]+nt[0]*it+P[0]*se,qt,M[2]+nt[2]*it+P[2]*se],vt=.03,st=.065;f(yt(-C,H,st),yt(C,H,st),yt(C,D,st),yt(-C,D,st),on,!0),f(yt(C,H,vt),yt(C,H,st),yt(C,D,st),yt(C,D,vt),on,!0),f(yt(-C,H,st),yt(-C,H,vt),yt(-C,D,vt),yt(-C,D,st),on,!0),f(yt(-C,D,st),yt(C,D,st),yt(C,D,vt),yt(-C,D,vt),on,!0),f(yt(-C,H,vt),yt(C,H,vt),yt(C,H,st),yt(-C,H,st),on,!0),v([M[0]+P[0]*st,0,M[2]+P[2]*st],D,D+.05,C*.6,0,d,on,!1,!0),v([M[0]+P[0]*st,0,M[2]+P[2]*st],H-.05,H,0,C*.6,d,on,!1,!1)})(_-.2,_+.2,.07);let $=[];for(let H=0;H<=14;H++){let D=H/14,C=-w+.05+D*(w-.05),P=_+.04+(x-.17*p-_-.04)*Math.pow(D,2.2);$.push(g(C,P-u.y,0))}l($,H=>.022*(1-.3*H),on);let R=[];for(let H=0;H<=10;H++){let D=H/10;R.push(g(-w+.05+D*w*.6,_-.14+D*.16+.05*Math.sin(D*Gn)-u.y,0))}l(R,.009,on);let W=R[R.length-1];h([W[0]-u.o[0]*.03,W[1]+.02,W[2]-u.o[1]*.03],[u.o[0],0,u.o[1]],.045,1.1,.007,on,-.4),[.3,.55].forEach(H=>{let D=$[Math.round(H*14)],C=R[Math.round(H/.62*10)]||R[10];l([D,C],.006,on)}),[-1,1].forEach(H=>{let D=g(-.05,-Zf*p-.2*p,0);h([D[0]-u.o[1]*H*.05,D[1],D[2]+u.o[0]*H*.05],[-u.o[1]*H,0,u.o[0]*H],.05*p,.9,.006,on,Gn)})}else for(let w=0;w<3;w++){let _=d+w*Gn*2/3,M=[u.x+Math.cos(_)*er*p*.7,x-.035*p,u.z+Math.sin(_)*er*p*.7],A=[u.x+Math.cos(_)*er*p*1.25,x-.17*p,u.z+Math.sin(_)*er*p*1.25];l([M,A],.012*p,on)}}),{pos:t,nrm:e,kind:o,uv:n,elems:r}}fl.exports=t=>{let e=b_(),o=t({vert:`
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
		${Ym()}
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
		}`,attributes:{position:e.pos,normal:e.nrm,kind:e.kind,uv:e.uv},elements:e.elems,uniforms:{time:t.context("time"),night:()=>Su.night}}),n=[],r=[];Da.forEach((s,i)=>{[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(c=>{n.push(c[0],c[1]),r.push(s.x,s.y,s.z,s.s+i*.001)})});let a=t({vert:`
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
		}`,attributes:{corner:n,at:r},count:n.length/2,uniforms:{time:t.context("time"),night:()=>Su.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(){o(),Su.night>.01&&a()}};fl.exports.lanternGLSL=Ym;fl.exports.LANTERNS=Da;fl.exports.TREE_LANTERN=[Da.length-1]});var Ua=xt((iA,Vr)=>{"use strict";var w_=tr(),Io=Math.PI,Hn=t=>(+t).toFixed(4),__=t=>`vec3(${Hn(t[0])}, ${Hn(t[1])}, ${Hn(t[2])})`,Re={x:-7,z:44.5},Qe=5.2,fr=15,re={z0:42.6,z1:46.4,zc:44.5,spring:4,r:1.9},oa={z0:42.2,z1:46.8,top:6.3,x:.35},eh=[Re.x-Math.sqrt(Qe*Qe-3.05*3.05),0,0],Sn={x0:-2.05+eh[0],x1:eh[0],z0:41.45,z1:47.55,top:4.3},Tu=[[Sn.x1+.05,2.35,Sn.z0-.45],[Sn.x1+.05,2.35,Sn.z1+.45]].map(([t,e,o])=>{let n=Math.atan2(o-Re.z,t-Re.x);return[Re.x+Math.cos(n)*(Qe-.16),e,Re.z+Math.sin(n)*(Qe-.16)]}),zo={ri:3.4,ro:Qe,a0:-35*Io/180,rise:.1836,step:3.6*Io/180,n:88,thick:.36};zo.k=zo.rise/zo.step;var Pr=t=>zo.a0-t,Ba=t=>t*zo.k,cn={x:Re.x+.1,z:Re.z-.15,yaw:-Io/2,scale:1.3},wa=cn.scale/1.1,hl={keyX0:cn.x-.524*wa,keyX1:cn.x+.491*wa,keyTop:.647*wa,keyFront:cn.z+.808*wa,keyBack:cn.z+.72*wa,stoolX:cn.x-.041*wa,stoolZ:cn.z+1.122*wa,stoolFront:cn.z+.96*wa,stoolTop:.37*wa,heading:Io},th=[[3.6,44.5],[.6,44.5],[-2.2,44.7],[-4.5,46.5],[-7,47.2],[-9.4,46.6],[-10.5,44.9],[-10.9,43.2]];function Qm(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let o=e;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}function M_(t,e){let o=1e9;for(let n=0;n<th.length-1;n++){let[r,a]=th[n],[s,i]=th[n+1],c=s-r,f=i-a,l=Math.max(0,Math.min(1,((t-r)*c+(e-a)*f)/(c*c+f*f)));o=Math.min(o,Math.hypot(t-r-c*l,e-a-f*l))}return o}var Jf=t=>re.spring+Math.sqrt(Math.max(0,re.r*re.r-(t-re.zc)*(t-re.zc))),Ha=t=>Re.x+Math.sqrt(Math.max(0,Qe*Qe-(t-Re.z)*(t-Re.z)));function Ui(t,e){return Math.hypot(t-Re.x,e-Re.z)<Qe||t<=0&&t>Re.x&&e>re.z0&&e<re.z1||t>Sn.x0&&t<Sn.x1&&e>Sn.z0&&e<Sn.z1}function k_(t,e){if(Math.hypot(t-Re.x,e-Re.z)<zo.ri-.05)return 99;let n=Math.atan2(e-Re.z,t-Re.x),r=zo.a0-n;for(;r<0;)r+=2*Io;for(;r>=2*Io;)r-=2*Io;return r>zo.n*zo.step?99:Ba(r)-zo.thick}function S_(){let t=[],e=Qm(1729),o=(a,s,i)=>{for(let c=Math.max(0,t.length-400);c<t.length;c++){let f=t[c];if(!(f[1]>.01)&&Math.hypot(f[0]-a,f[2]-s)<i+f[3]+.012)return!0}return!1},n=(a,s)=>{let i=a-cn.x,c=s-cn.z,f=Math.cos(cn.yaw),l=Math.sin(cn.yaw),v=(f*i-l*c)/cn.scale,h=(l*i+f*c)/cn.scale;return v>-1.05&&v<1.3&&h>-.7&&h<.72},r=0;for(;t.length<980&&r<6e4;){r++;let s=e()<.55?1.25+e()*2.1:1.25+Math.sqrt(e())*(Qe-1.45),i=e()*2*Io,c=Re.x+Math.cos(i)*s,f=Re.z+Math.sin(i)*s;if(!Ui(c,f)||s>Qe-.18||n(c,f)||M_(c,f)<.62||k_(c,f)<2.3||c<Sn.x1+.9)continue;let l=.022+e()*.02;if(o(c,f,l))continue;let v=e()<.15?.22+e()*.14:.05+e()*.15;t.push([c,0,f,l,v,e()*100])}for(let a=1;a<26;a++){let s=a<12?3:2;for(let i=0;i<s;i++){let c=(a+.25+e()*.5)*zo.step,f=Pr(c),l=zo.ri+.55+e()*(zo.ro-zo.ri-.75),v=.022+e()*.016;t.push([Re.x+Math.cos(f)*l,(a+1)*zo.rise,Re.z+Math.sin(f)*l,v,.05+e()*.14,e()*100])}}for(let a of Tu)for(let[s,i,c]of[[0,0,.26],[.06,.05,.18],[-.05,-.04,.14]])t.push([a[0]+s,a[1],a[2]+i,.024,c,e()*100]);for(let a of[Sn.z0-.35,Sn.z1+.35])for(let s=0;s<9;s++){let i=Sn.x1+.35+e()*.5,c=a+(e()-.5)*.5;Math.hypot(i-Re.x,c-Re.z)>Qe-.15||t.push([i,0,c,.026+e()*.014,.18+e()*.3,e()*100])}return t}function E_(t){let o=Qm(77),n=[];for(let r=0;r<14;r++){let a=t[Math.floor(o()*t.length)];n.push([a[0],a[1]+a[4],a[2]])}for(let r=0;r<12;r++){let a=n.map(()=>[0,0,0,0]);for(let s of t){let i=[s[0],s[1]+s[4],s[2]],c=0,f=1e9;n.forEach((l,v)=>{let h=(i[0]-l[0])**2+(i[1]-l[1])**2*4+(i[2]-l[2])**2;h<f&&(f=h,c=v)}),a[c][0]+=i[0],a[c][1]+=i[1],a[c][2]+=i[2],a[c][3]++}n=a.map((s,i)=>s[3]?[s[0]/s[3],s[1]/s[3],s[2]/s[3],s[3]]:n[i])}return n.filter(r=>r[3]>0).map(r=>[r[0],r[1]+.12,r[2],r[3]/t.length])}var zu=S_(),Km=E_(zu.filter(t=>t[1]<2||t[1]>2.5)).concat(Tu.map(t=>[t[0],t[1]+.35,t[2],.035]));function Zm(){return`
	vec3 roomLight(vec3 p, vec3 N, vec3 V, float gloss, out vec3 spec) {
		spec = vec3(0.0);
		vec3 col = vec3(0.0);
		float floorK = (p.y < 0.02 && N.y > 0.9) ? 1.0 : 0.0;
		${Km.map((e,o)=>`
		{
			vec3 d = ${__(e)} - p;
			float dd = dot(d, d);
			vec3 L = d * inversesqrt(dd);
			float fl = 0.86 + 0.08 * sin(time * ${Hn(5.3+o*.71)} + ${Hn(o*1.9)}) + 0.06 * sin(time * ${Hn(11.7+o*1.3)} + ${Hn(o*.7)});
			float w = ${Hn(e[3]*Km.length)} * fl;
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
		col += sky * (0.35 + 0.65 * up) * (0.55 + 0.45 * max(N.y, 0.0)) * (0.6 + 0.4 * max(-dot(N, normalize(p - vec3(${Hn(Re.x)}, ${Hn(fr)}, ${Hn(Re.z)}))), 0.0));
		// and straight down from it a soft pool falls on the piano and
		// whoever is playing it: it catches his shoulders, his hair, the
		// edge of the lid, and lifts them out of the dark
		float pool = 1.0 - smoothstep(0.5, 2.9, length(p.xz - vec2(${Hn(hl.stoolX)}, ${Hn(hl.keyFront+.1)})));
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
	}`}var He={FLOOR:0,WALL:1,STEP:2,SOFFIT:3,STRING:4,CEIL:5,OCULUS:6,HALLSTONE:7,IRON:8,RAILING:9,CANDLE:10};function Jm(){let t={pos:[],nrm:[],kind:[],uv:[],idx:[]};return t.v=(e,o,n,r)=>(t.pos.push(e[0],e[1],e[2]),t.nrm.push(o[0],o[1],o[2]),t.kind.push(n),t.uv.push(r?r[0]:0,r?r[1]:0),t.pos.length/3-1),t.quad=(e,o,n,r,a,s,i)=>{let c=t.v(e,a,s,i&&i[0]),f=t.v(o,a,s,i&&i[1]),l=t.v(n,a,s,i&&i[2]),v=t.v(r,a,s,i&&i[3]);t.idx.push(c,f,l,c,l,v)},t.tri=(e,o,n,r,a)=>{let s=t.v(e,r,a),i=t.v(o,r,a),c=t.v(n,r,a);t.idx.push(s,i,c)},t}function A_(){let t=Jm(),e=(n,r,a)=>[Re.x+Math.cos(n)*r,a,Re.z+Math.sin(n)*r],o=n=>[Math.cos(n),0,Math.sin(n)];for(let r=0;r>Sn.x0-.01;r-=.25)for(let a=41.2;a<47.8;a+=.2){let s=r-.25,i=r,c=a,f=a+.2;if(!(Ui(s,c)||Ui(i,c)||Ui(s,f)||Ui(i,f)||Ui((s+i)/2,(c+f)/2)))continue;let l=c,v=f;s>Ha(re.z0)-.3&&(l=Math.max(l,re.z0),v=Math.min(v,re.z1),v<=l)||t.quad([s,0,l],[s,0,v],[i,0,v],[i,0,l],[0,1,0],He.FLOOR)}{for(let r=0;r<360;r++){let a=r/360*2*Io,s=(r+1)/360*2*Io,i=(a+s)/2,c=e(i,Qe,0),f=0;c[0]>Re.x&&c[2]>re.z0-.02&&c[2]<re.z1+.02&&(f=Math.max(Jf(Math.min(Math.max(e(a,Qe,0)[2],re.z0),re.z1)),Jf(Math.min(Math.max(e(s,Qe,0)[2],re.z0),re.z1)))),c[0]<Re.x&&c[2]>Sn.z0-.02&&c[2]<Sn.z1+.02&&(f=Sn.top);let l=a*Qe,v=s*Qe,h=o(a).map(d=>-d),u=o(s).map(d=>-d),p=[f];for(let d=Math.ceil(f/2.5)*2.5;d<fr;d+=2.5)d>f+.01&&p.push(d);p.push(fr);for(let d=0;d<p.length-1;d++){let m=p[d],g=p[d+1],x=t.v(e(a,Qe,m),h,He.WALL,[l,m]),b=t.v(e(s,Qe,m),u,He.WALL,[v,m]),w=t.v(e(s,Qe,g),u,He.WALL,[v,g]),_=t.v(e(a,Qe,g),h,He.WALL,[l,g]);t.idx.push(x,b,w,x,w,_)}}for(let[r,a,s]of[[6.55,.22,.07],[0,.32,.05]])for(let i=0;i<360;i++){let c=i/360*2*Io,f=(i+1)/360*2*Io,l=(c+f)/2,v=e(l,Qe,0);if(r<1&&(v[0]>Re.x&&v[2]>re.z0&&v[2]<re.z1||v[0]<Re.x&&v[2]>Sn.z0&&v[2]<Sn.z1))continue;let h=Qe-s;t.quad(e(c,h,r),e(f,h,r),e(f,h,r+a),e(c,h,r+a),o(l).map(u=>-u),He.WALL,[[c*Qe,r+100],[f*Qe,r+100],[f*Qe,r+a+100],[c*Qe,r+a+100]]),t.quad(e(c,h,r+a),e(f,h,r+a),e(f,Qe,r+a),e(c,Qe,r+a),[0,1,0],He.WALL,[[0,200],[0,200],[0,200],[0,200]]),r>1&&t.quad(e(c,Qe,r),e(f,Qe,r),e(f,h,r),e(c,h,r),[0,-1,0],He.WALL,[[0,200],[0,200],[0,200],[0,200]])}}{let n=oa.x;for(let[a,s]of[[re.z0,1],[re.z1,-1]]){let i=Ha(a);t.quad([n,0,a],[i,0,a],[i,re.spring,a],[n,re.spring,a],[0,0,s],He.WALL,[[n,0],[i,0],[i,re.spring],[n,re.spring]])}let r=40;for(let a=0;a<r;a++){let s=a/r*Io,i=(a+1)/r*Io,c=re.zc-Math.cos(s)*re.r,f=re.zc-Math.cos(i)*re.r,l=re.spring+Math.sin(s)*re.r,v=re.spring+Math.sin(i)*re.r,h=[0,-Math.sin(s),Math.cos(s)],u=[0,-Math.sin(i),Math.cos(i)],p=t.v([n,l,c],h,He.WALL,[n,s*re.r]),d=t.v([Ha(c),l,c],h,He.WALL,[Ha(c),s*re.r]),m=t.v([Ha(f),v,f],u,He.WALL,[Ha(f),i*re.r]),g=t.v([n,v,f],u,He.WALL,[n,i*re.r]);t.idx.push(p,d,m,p,m,g)}}{let n=oa.x,r=.05;for(let f=oa.z0;f<oa.z1-1e-6;f+=r){let l=f,v=Math.min(oa.z1,f+r),u=(p=>p>re.z0&&p<re.z1)((l+v)/2)?Math.max(Jf(l),Jf(v)):0;t.quad([n,u,l],[n,u,v],[n,oa.top,v],[n,oa.top,l],[1,0,0],He.HALLSTONE,[[l,u],[v,u],[v,oa.top],[l,oa.top]])}let a=.32,s=.06,i=n+s,c=36;for(let f=0;f<c;f++){let l=f/c*Io,v=(f+1)/c*Io,h=(g,x)=>[i,re.spring+Math.sin(g)*x,re.zc-Math.cos(g)*x],u=re.r,p=re.r+a;t.quad(h(l,u),h(v,u),h(v,p),h(l,p),[1,0,0],He.HALLSTONE,[[0,300],[0,300],[1,300],[1,300]]);let d=(g,x,b)=>[b,re.spring+Math.sin(g)*x,re.zc-Math.cos(g)*x],m=[0,Math.sin((l+v)/2),-Math.cos((l+v)/2)];t.quad(d(l,p,n),d(v,p,n),d(v,p,i),d(l,p,i),m,He.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),t.quad(d(l,u,n),d(v,u,n),d(v,u,i),d(l,u,i),m.map(g=>-g),He.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}for(let[f,l,v]of[[re.z0-a,re.z0,-1],[re.z1,re.z1+a,1]]){t.quad([i,0,f],[i,0,l],[i,re.spring,l],[i,re.spring,f],[1,0,0],He.HALLSTONE,[[0,300],[1,300],[1,300],[0,300]]);let h=v<0?f:l,u=v<0?l:f;t.quad([n,0,h],[i,0,h],[i,re.spring,h],[n,re.spring,h],[0,0,v],He.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),t.quad([n,0,u],[i,0,u],[i,re.spring,u],[n,re.spring,u],[0,0,-v],He.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);let p=re.spring-.16,d=.16,m=.11,g=Math.min(f,l)-.05,x=Math.max(f,l)+.05;t.quad([n+m,p,g],[n+m,p,x],[n+m,p+d,x],[n+m,p+d,g],[1,0,0],He.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),t.quad([n,p+d,g],[n+m,p+d,g],[n+m,p+d,x],[n,p+d,x],[0,1,0],He.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),t.quad([n,p,g],[n,p,x],[n+m,p,x],[n+m,p,g],[0,-1,0],He.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);for(let b of[g,x])t.quad([n,p,b],[n+m,p,b],[n+m,p+d,b],[n,p+d,b],[0,0,b===g?-1:1],He.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}{let f=re.spring+re.r-.05,l=re.spring+re.r+a+.12,v=.16,h=.22,u=i+.04;t.quad([u,f,re.zc-v],[u,f,re.zc+v],[u,l,re.zc+h],[u,l,re.zc-h],[1,0,0],He.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);for(let p of[-1,1])t.quad([n,f,re.zc+p*v],[u,f,re.zc+p*v],[u,l,re.zc+p*h],[n,l,re.zc+p*h],[0,0,p],He.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);t.quad([n,l,re.zc-h],[u,l,re.zc-h],[u,l,re.zc+h],[n,l,re.zc+h],[0,1,0],He.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}}{let{x0:n,x1:r,z0:a,z1:s,top:i}=Sn;t.quad([n,0,a],[n,0,s],[n,i,s],[n,i,a],[1,0,0],He.WALL,[[a,0],[s,0],[s,i],[a,i]]);for(let[f,l]of[[a,1],[s,-1]]){let v=Re.x-Math.sqrt(Qe*Qe-(f-Re.z)*(f-Re.z));t.quad([n,0,f],[v,0,f],[v,i,f],[n,i,f],[0,0,l],He.WALL,[[n,0],[v,0],[v,i],[n,i]])}let c=24;for(let f=0;f<c;f++){let l=a+(s-a)*f/c,v=a+(s-a)*(f+1)/c,h=Re.x-Math.sqrt(Qe*Qe-(l-Re.z)**2),u=Re.x-Math.sqrt(Qe*Qe-(v-Re.z)**2);t.quad([n,i,l],[h,i,l],[u,i,v],[n,i,v],[0,-1,0],He.WALL,[[0,200],[0,200],[0,200],[0,200]])}for(let f=0;f<c;f++){let l=a+(s-a)*f/c,v=a+(s-a)*(f+1)/c,h=Re.x-Math.sqrt(Qe*Qe-(l-Re.z)**2)+.05,u=Re.x-Math.sqrt(Qe*Qe-(v-Re.z)**2)+.05;t.quad([h,i-.3,l],[u,i-.3,v],[u,i,v],[h,i,l],[1,0,0],He.WALL,[[0,200],[0,200],[0,200],[0,200]])}}{let r=[1.15,1.6,2.3,3,3.35,4.2,Qe];for(let a=0;a<120;a++){let s=a/120*2*Io,i=(a+1)/120*2*Io,c=(s+i)/2;c>Io&&(c-=2*Io);for(let f=0;f<r.length-1;f++){let l=r[f],v=r[f+1],h=c*180/Io;l>=3.3&&h>8&&h<85||t.quad(e(s,l,fr),e(s,v,fr),e(i,v,fr),e(i,l,fr),[0,-1,0],He.CEIL,[[s*l,l],[s*v,v],[i*v,v],[i*l,l]])}t.quad(e(s,1.15,fr),e(i,1.15,fr),e(i,1.15,fr+.7),e(s,1.15,fr+.7),o(c).map(f=>-f),He.CEIL,[[0,400],[0,400],[0,400],[0,400]]),t.tri([Re.x,fr+.7,Re.z],e(i,1.15,fr+.7),e(s,1.15,fr+.7),[0,-1,0],He.OCULUS)}}{let n=zo.ri,r=zo.ro,a=zo.n*zo.step;for(let c=0;c<zo.n;c++){let f=c*zo.step,l=(c+1)*zo.step,v=Pr(f),h=Pr(l),u=(c+1)*zo.rise,p=c*zo.rise,d=2;for(let x=0;x<d;x++){let b=v+(h-v)*x/d-(x===0?.004:0),w=v+(h-v)*(x+1)/d;t.quad(e(b,n,u),e(b,r,u),e(w,r,u),e(w,n,u),[0,1,0],He.STEP,[[n*b,c],[r*b,c],[r*w,c],[n*w,c]])}let m=[-Math.sin(v),0,Math.cos(v)],g=v-.004;t.quad(e(g,n,p),e(g,r,p),e(g,r,u),e(g,n,u),m,He.STEP,[[n*v,c+.5],[r*v,c+.5],[r*v,c+.5],[n*v,c+.5]]),t.quad(e(v,n,Ba(f)+.06),e(h,n,Ba(l)+.06),e(h,n,u),e(g,n,u),o((v+h)/2).map(x=>-x),He.STEP,[[0,500],[0,500],[0,500],[0,500]])}let s=Math.ceil(a/(1.2*Io/180)),i=[n,n+.6,n+1.2,r];for(let c=0;c<s;c++){let f=c/s*a,l=(c+1)/s*a,v=Pr(f),h=Pr(l),u=Ba(f),p=Ba(l),d=u-zo.thick,m=p-zo.thick,g=o(v).map(A=>-A),x=o(h).map(A=>-A),b=t.v(e(v,n,d),g,He.STRING,[f*n,0]),w=t.v(e(h,n,m),x,He.STRING,[l*n,0]),_=t.v(e(h,n,p+.06),x,He.STRING,[l*n,1]),M=t.v(e(v,n,u+.06),g,He.STRING,[f*n,1]);t.idx.push(b,w,_,b,_,M);for(let A=0;A<i.length-1;A++){let $=i[A],R=i[A+1],W=H=>{let D=o(H);return[-D[0]*.12,-.99,-D[2]*.12]};t.quad(e(v,$,d),e(v,R,d),e(h,R,m),e(h,$,m),W((v+h)/2),He.SOFFIT,[[f*$,$],[f*R,R],[l*R,R],[l*$,$]])}}}return t}function T_(){let t=Jm(),e=zo.ri+.045,o=zo.n*zo.step,n=Math.ceil(o/(.8*Io/180)),r=.92,a=(c,f,l)=>[Re.x+Math.cos(c)*f,l,Re.z+Math.sin(c)*f],s=c=>[Math.cos(c),0,Math.sin(c)];for(let c=0;c<n;c++){let f=c/n*o,l=(c+1)/n*o,v=Pr(f),h=Pr(l),u=Ba(f)+.06,p=Ba(l)+.06,d=s(v).map(A=>-A),m=s(h).map(A=>-A),g=f*e,x=l*e,b=t.v(a(v,e,u),d,He.RAILING,[g,0]),w=t.v(a(h,e,p),m,He.RAILING,[x,0]),_=t.v(a(h,e,p+r),m,He.RAILING,[x,r]),M=t.v(a(v,e,u+r),d,He.RAILING,[g,r]);t.idx.push(b,w,_,b,_,M)}((c,f,l,v)=>{let u=d=>{let m=Pr(d),g=Ba(d)+.06+f,x=a(m,e+c,g),b=s(m),w=[];for(let _=0;_<8;_++){let M=_/8*2*Io,A=[b[0]*Math.cos(M),Math.sin(M),b[2]*Math.cos(M)];w.push([[x[0]+A[0]*l,x[1]+A[1]*l,x[2]+A[2]*l],A])}return w},p=u(0);for(let d=1;d<=n;d++){let m=u(d/n*o);for(let g=0;g<8;g++){let x=(g+1)%8,b=t.v(p[g][0],p[g][1],v),w=t.v(m[g][0],m[g][1],v),_=t.v(m[x][0],m[x][1],v),M=t.v(p[x][0],p[x][1],v);t.idx.push(b,w,_,b,_,M)}p=m}})(0,r+.02,.028,He.IRON);for(let c of Tu){let f=Math.atan2(c[2]-Re.z,c[0]-Re.x),l=[Math.cos(f),0,Math.sin(f)],v=12;for(let d=0;d<v;d++){let m=d/v*2*Io,g=(d+1)/v*2*Io,x=(b,w,_)=>[c[0]+Math.cos(b)*w,_,c[2]+Math.sin(b)*w];t.quad(x(m,.16,c[1]),x(g,.16,c[1]),x(g,.13,c[1]-.05),x(m,.13,c[1]-.05),[Math.cos(m)*.6,.8,Math.sin(m)*.6],He.IRON),t.quad(x(m,.16,c[1]),x(g,.16,c[1]),x(g,0,c[1]+.002),x(m,0,c[1]+.002),[0,1,0],He.IRON)}let h=[c[0]+l[0]*.16,c[1]-.35,c[2]+l[2]*.16],u=[-l[2],0,l[0]],p=.018;t.quad([h[0]-u[0]*p,h[1],h[2]-u[2]*p],[h[0]+u[0]*p,h[1],h[2]+u[2]*p],[c[0]+u[0]*p,c[1]-.05,c[2]+u[2]*p],[c[0]-u[0]*p,c[1]-.05,c[2]-u[2]*p],[-l[0],.5,-l[2]],He.IRON)}{let c=Pr(0),f=a(c,e,0),l=10;for(let v=0;v<l;v++){let h=v/l*2*Io,u=(v+1)/l*2*Io,p=(d,m,g)=>[f[0]+Math.cos(d)*m,g,f[2]+Math.sin(d)*m];t.quad(p(h,.035,0),p(u,.035,0),p(u,.035,r+.1),p(h,.035,r+.1),[Math.cos((h+u)/2),0,Math.sin((h+u)/2)],He.IRON),t.quad(p(h,.06,r+.1),p(u,.06,r+.1),p(u,.03,r+.2),p(h,.03,r+.2),[Math.cos((h+u)/2)*.8,.6,Math.sin((h+u)/2)*.8],He.IRON)}}return t}function z_(){let t=[],e=[],o=[],n=[];for(let a of zu){let[s,i,c,f,l,v]=a,h=t.length/3;for(let p=0;p<=7;p++){let d=p/7*2*Io+v,m=Math.cos(d),g=Math.sin(d);t.push(s+m*f,i,c+g*f,s+m*f,i+l,c+g*f),e.push(m,0,g,m,0,g),o.push(0,l,v,1,l,v)}for(let p=0;p<7;p++){let d=h+p*2;n.push(d,d+2,d+3,d,d+3,d+1)}let u=t.length/3;t.push(s,i+l-.006,c),e.push(0,1,0),o.push(2,l,v);for(let p=0;p<7;p++){let d=p/7*2*Io+v;t.push(s+Math.cos(d)*f,i+l,c+Math.sin(d)*f),e.push(0,1,0),o.push(1,l,v)}for(let p=0;p<7;p++)n.push(u,u+1+p,u+1+(p+1)%7)}return{pos:t,nrm:e,info:o,idx:n}}function L_(){let t=[],e=[],o=[],n=[];for(let r of zu){let[a,s,i,,c,f]=r,l=t.length/3;for(let v of[[-1,0],[1,0],[1,1],[-1,1]])t.push(a,s+c+.004,i),e.push(v[0],v[1]),o.push(f);n.push(l,l+1,l+2,l,l+2,l+3)}return{ctr:t,corner:e,ph:o,idx:n}}function N_(t){let e=new DataView(t),o=e.getUint32(4,!0),n=e.getUint32(8,!0),r=[],a=[];for(let g=0;g<3;g++)r.push(e.getFloat32(12+g*4,!0)),a.push(e.getFloat32(24+g*4,!0));let s=36,i=new Uint16Array(t,s,o*3);s+=o*6;let c=new Uint16Array(t,s,n);s+=n*2;let f=new Int8Array(t,s,o*3);s+=o*3;let l=new Uint8Array(t,s,o),v=new Float32Array(o*3),h=new Float32Array(o*3),u=new Float32Array(o),p=Math.cos(cn.yaw),d=Math.sin(cn.yaw),m=cn.scale;for(let g=0;g<o;g++){let x=(r[0]+i[g*3]/65535*a[0])*m,b=(r[1]+i[g*3+1]/65535*a[1])*m,w=(r[2]+i[g*3+2]/65535*a[2])*m;v[g*3]=cn.x+p*x+d*w,v[g*3+1]=b,v[g*3+2]=cn.z-d*x+p*w;let _=f[g*3]/127,M=f[g*3+1]/127,A=f[g*3+2]/127;h[g*3]=p*_+d*A,h[g*3+1]=M,h[g*3+2]=-d*_+p*A,u[g]=l[g]}return{pos:v,nrm:h,mat:u,idx:new Uint32Array(c)}}function R_(){let t=[],e=(v,h)=>[Re.x+Math.cos(v)*h,Re.z+Math.sin(v)*h];t.push([[0,re.z0],[Ha(re.z0),re.z0]]),t.push([[Ha(re.z1),re.z1],[0,re.z1]]);let o=Math.asin((re.z1-Re.z)/Qe),n=72;for(let v=0;v<n;v++){let h=o+v/n*(2*Io-2*o),u=o+(v+1)/n*(2*Io-2*o);t.push([e(h,Qe-.25),e(u,Qe-.25)])}let r=eh[0]-.55+.35;t.push([[r,Sn.z0],[r,Sn.z1]]);let a=2.4/zo.k,s=12;for(let v=0;v<s;v++){let h=Pr(v/s*a),u=Pr((v+1)/s*a);t.push([e(h,zo.ri-.2),e(u,zo.ri-.2)])}t.push([e(Pr(0),zo.ri-.2),e(Pr(0),Qe)]),t.push([e(Pr(a),zo.ri-.2),e(Pr(a),Qe)]);let i=Math.cos(cn.yaw),c=Math.sin(cn.yaw),f=cn.scale,l=[[-1,-.62],[1.25,-.62],[1.25,.62],[-1,.62]].map(([v,h])=>[cn.x+(i*v+c*h)*f,cn.z+(-c*v+i*h)*f]);for(let v=0;v<4;v++)t.push([l[v],l[(v+1)%4]]);return t}Vr.exports=t=>{let e=A_(),o=T_(),n=z_(),r=L_(),a=Ga(),s=`
	precision highp float;
	${w_.GLSL}
	uniform float time;
	${Zm()}
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
				float r = length(v_pos.xz - vec2(${Hn(Re.x)}, ${Hn(Re.z)}));
				base = limestone(v_pos.xz * 1.4 + v_uv * 0.3) * vec3(0.90, 0.88, 0.86);
				base *= 1.0 + 0.10 * (1.0 - smoothstep(0.0, 0.6, abs(r - ${Hn((zo.ri+zo.ro)/2)})));
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
				vec2 q = v_pos.xz - vec2(${Hn(Re.x)}, ${Hn(Re.z)});
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
		}`,attributes:{position:n.pos,normal:n.nrm,info:n.info},elements:new Uint32Array(n.idx),cull:{enable:!1}}),v=t({vert:`
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
		}`,attributes:{ctr:r.ctr,corner:r.corner,ph:r.ph},elements:new Uint32Array(r.idx),uniforms:{halo:t.prop("halo")},depth:{enable:!0,mask:!1},cull:{enable:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),h=null;fetch("res/piano.bin").then(m=>{if(!m.ok)throw new Error("Could not load piano.bin");return m.arrayBuffer()}).then(m=>{let g=N_(m);h=t({vert:`
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
				}`,attributes:{position:g.pos,normal:g.nrm,mat:g.mat},elements:g.idx,cull:{enable:!1}})}).catch(m=>console.error(m));let u=(()=>{let m=[],g=[],x=[],b=[],_=[Re.x,fr-.3,Re.z],M=[hl.stoolX,.02,hl.keyFront+.1],A=1.25,$=2.35;for(let R=0;R<=40;R++){let W=R/40*2*Io,H=Math.cos(W),D=Math.sin(W);m.push(_[0]+H*A,_[1],_[2]+D*A,M[0]+H*$,M[1],M[2]+D*$),g.push(H,.08,D,H,.08,D),x.push(1,0)}for(let R=0;R<40;R++){let W=R*2;b.push(W,W+1,W+3,W,W+3,W+2)}return{pos:m,nrm:g,hh:x,idx:b}})(),p=t({vert:`
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
		}`,attributes:{position:u.pos,normal:u.nrm,hh:u.hh},elements:u.idx,depth:{enable:!0,mask:!1},cull:{enable:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});function d(m){let g=m&&m.reflected;c(),f(),l(),h&&h(),g||(p(),v({halo:1}),v({halo:0}))}return d};Vr.exports.C=Re;Vr.exports.R=Qe;Vr.exports.PASS=re;Vr.exports.SURR=oa;Vr.exports.OFF=eh;Vr.exports.BAY=Sn;Vr.exports.PATH=th;Vr.exports.PIANO=cn;Vr.exports.PLAY=hl;Vr.exports.TOP=fr;Vr.exports.roomGLSL=Zm;Vr.exports.segments=R_});var l2=xt((cA,c2)=>{"use strict";var C_=zs(),{addFlutedColumn:t2,addStatue:O_,addPlant:P_}=Tm(),e2=Fa(),I_=$i(),D0=vr(),$_=_0(),Wi=Ua(),xo=14,An=D0.C.hallEnd+.35,Bo=8,Ro=.35,Lu=1.15,Nu=1.15,Ru=[18,29,40],F_=[[[0,0],[0,Wi.PASS.z0]],[[0,Wi.PASS.z1],[0,An]],[[xo,An],[xo,0]],[[0,0],[xo,0]],[[xo,An],[0,An]]],a2=[];for(let t of Ru)for(let e of[1.25,xo-1.25]){let o=Lu/2,n=Nu/2;a2.push([[e-o,t-n],[e+o,t-n]],[[e+o,t-n],[e+o,t+n]],[[e+o,t+n],[e-o,t+n]],[[e-o,t+n],[e-o,t-n]])}var nh=12,s2=2.95,i2=.62,sh=s2+i2,rh=[{file:"venus.bin",x:1.85,z:An-1.6,yaw:2.67,height:5.2,pedestal:!0,mat:1},{file:"david.bin",x:xo-2.1,z:An-1.6,yaw:-2.67,height:5.2,pedestal:!0,mat:1},{file:"pieta.bin",x:1.75,z:5.9,yaw:Math.PI/2,height:3.6,base:1,mat:1},{file:"spinario.bin",x:D0.NICHE_X[0],z:D0.NICHE_STATUE_Z,yaw:-.35,height:1.85,base:D0.NICHE_PLINTH_TOP,mat:3},{file:"charioteer.bin",x:D0.NICHE_X[1],z:D0.NICHE_STATUE_Z+.1,yaw:0,height:2.95,base:D0.NICHE_PLINTH_TOP,mat:3}],q_={x0:Ro,x1:3.15,z0:3.6,z1:8.2,top:1},o2=.8,ih=1.17,ul=[];[{z:10.4,dz:-.7},{z:19.2,dz:.7},{z:27.8,dz:-.7}].forEach((t,e)=>{ul.push({x:1,z:t.z,seed:11+e*7,away:[1,t.dz]}),ul.push({x:xo-1,z:t.z,seed:53+e*5,away:[-1,t.dz]})});function Cu(t,e,o,n){return[[[t-o,e-n],[t+o,e-n]],[[t+o,e-n],[t+o,e+n]],[[t+o,e+n],[t-o,e+n]],[[t-o,e+n],[t-o,e-n]]]}var ch=[];for(let t of[-1,1])ch.push(...Cu(xo/2+t*sh,nh,.85,.85));for(let t of rh.filter(e=>e.pedestal))ch.push(...Cu(t.x,t.z,ih*1.1,ih*1.1));for(let t of ul)ch.push(...Cu(t.x,t.z,.42,.42));var D_=F_.concat(a2,ch,Wi.segments());function G_(t){let o=new Map,n=(r,a,s)=>{let i=r+":"+a;o.has(i)||o.set(i,[]);let c=o.get(i);c.includes(s)||c.push(s)};for(let r of t){let a=Math.floor(Math.min(r[0][0],r[1][0])/4)-1,s=Math.floor(Math.max(r[0][0],r[1][0])/4)+1,i=Math.floor(Math.min(r[0][1],r[1][1])/4)-1,c=Math.floor(Math.max(r[0][1],r[1][1])/4)+1;for(let f=a;f<=s;f++)for(let l=i;l<=c;l++)n(f,l,r)}return{get(r,a){let s=Math.floor(r/4),i=Math.floor(a/4),c=[];for(let f=-1;f<=1;f++)for(let l=-1;l<=1;l++){let v=o.get(s+f+":"+(i+l));v&&c.push(...v)}return[...new Set(c)]}}}var ah=[],En={curMat:[0,0,0]};function Ou(t,e,o,n,r,a,s){let i=t.length/3;t.push(...o,...n,...r,...a),e.push(...s,...s,...s,...s);let c=En.curMat;return ah.push(...c,...c,...c,...c),[i,i+2,i+1,i+1,i+2,i+3]}function Lo(t,e,o,n,r,a,s,i,c){let f=(l,v,h,u,p)=>{o.push(...Ou(t,e,l,v,h,u,p))};f([n,r,a],[s,r,a],[n,i,a],[s,i,a],[0,0,-1]),f([s,r,c],[n,r,c],[s,i,c],[n,i,c],[0,0,1]),f([n,r,c],[n,r,a],[n,i,c],[n,i,a],[-1,0,0]),f([s,r,a],[s,r,c],[s,i,a],[s,i,c],[1,0,0]),f([n,i,a],[s,i,a],[n,i,c],[s,i,c],[0,1,0]),f([n,r,c],[s,r,c],[n,r,a],[s,r,a],[0,-1,0])}function ji(t,e,o,n,r){let a=En,s=a.vert(t,r),i=a.vert(e,r),c=a.vert(o,r),f=a.vert(n,r);a.tri(s,i,c),a.tri(i,f,c)}function n2(t,e,o,n,r,a,s){for(let i=0;i<s;i++){let c=Math.PI*i/s,f=Math.PI*(i+1)/s,l=Math.cos(c),v=Math.sin(c),h=Math.cos(f),u=Math.sin(f),p=[t+o*l,e+o*v],d=[t+o*h,e+o*u],m=[t+n*l,e+n*v],g=[t+n*h,e+n*u];ji([p[0],p[1],r],[d[0],d[1],r],[m[0],m[1],r],[g[0],g[1],r],[0,0,-1]),ji([p[0],p[1],a],[d[0],d[1],a],[m[0],m[1],a],[g[0],g[1],a],[0,0,1]);let x=(c+f)/2;ji([p[0],p[1],r],[d[0],d[1],r],[p[0],p[1],a],[d[0],d[1],a],[-Math.cos(x),-Math.sin(x),0]),ji([m[0],m[1],r],[g[0],g[1],r],[m[0],m[1],a],[g[0],g[1],a],[Math.cos(x),Math.sin(x),0])}}function H_(t,e,o,n,r,a,s){for(let i=0;i<s;i++){let c=Math.PI*i/s,f=Math.PI*(i+1)/s,l=t+o*Math.cos(c),v=e+o*Math.sin(c),h=t+o*Math.cos(f),u=e+o*Math.sin(f);ji([l,v,r],[h,u,r],[l,n,r],[h,n,r],[0,0,-1]),ji([l,v,a],[h,u,a],[l,n,a],[h,n,a],[0,0,1])}}function B_(t,e,o,n){let r=xo/2,a=s2,s=3,i=a+.42,c=i+.15,f=i2,l=sh,v=5.98,h=n-.45,u=n+.45,p=64,d=t2(En,r-l,n,0,v,f);t2(En,r+l,n,0,v,f),En.curMat=[0,0,0],n2(r,s,a,i,h,u,p),n2(r,s,i,c,h-.07,u+.07,p),H_(r,s,c,d+.05,h,u,p);for(let g of[-1,1]){let x=r+g*(c-.02),b=r+g*l;Lo(t,e,o,Math.min(x,b),s,h,Math.max(x,b),d+.05,u)}for(let g of[-1,1]){let x=r+g*(a-.05),b=r+g*(a+.85);Lo(t,e,o,Math.min(x,b),s-.16,n-.6,Math.max(x,b),s,n+.6)}let m=l+f*1.42+.45;Lo(t,e,o,r-m,d,n-.7,r+m,d+.44,n+.7),Lo(t,e,o,r-m+.12,d+.44,n-.62,r+m-.12,d+.7,n+.62),Lo(t,e,o,r-m-.1,d+.7,n-.84,r+m+.1,d+.84,n+.84),Lo(t,e,o,r-m-.22,d+.84,n-.96,r+m+.22,d+1,n+.96),Lo(t,e,o,r-.3,s+a-.1,n-.56,r+.3,d,n+.56)}function r2(t,e,o,n,r){Lo(t,e,o,n-.72,0,r-.72,n+.72,.2,r+.72),Lo(t,e,o,n-.58,.2,r-.58,n+.58,.4,r+.58),Lo(t,e,o,n-Lu/2,.4,r-Nu/2,n+Lu/2,Bo-1.35,r+Nu/2),Lo(t,e,o,n-.67,.42,r-.67,n+.67,.62,r+.67),Lo(t,e,o,n-.67,Bo-1.58,r-.67,n+.67,Bo-1.35,r+.67),Lo(t,e,o,n-.82,Bo-1.35,r-.82,n+.82,Bo-1.05,r+.82),Lo(t,e,o,n-.66,Bo-1.05,r-.66,n+.66,Bo-.78,r+.66),Lo(t,e,o,n-.92,Bo-.78,r-.92,n+.92,Bo-.55,r+.92),Lo(t,e,o,n-.78,Bo-.55,r-.78,n+.78,Bo-.3,r+.78),Lo(t,e,o,n-.92,Bo-.3,r-.92,n+.92,Bo-.1,r+.92)}function oh(t,e,o,n,r){r==="left"?(Lo(t,e,o,-.08,1,n-3.8/2,.14,5.7,n+3.8/2),Lo(t,e,o,-.08-.04,1+.18,n-3.8/2+.18,.18,5.7-.18,n+3.8/2-.18)):(Lo(t,e,o,xo-.14,1,n-3.8/2,xo+.08,5.7,n+3.8/2),Lo(t,e,o,xo-.18,1+.18,n-3.8/2+.18,xo+.08+.04,5.7-.18,n+3.8/2-.18))}function U_(t,e,o,n){Lo(t,e,o,.65,Bo-.16,n-1.65,.65+.22,Bo,n+1.65),Lo(t,e,o,xo-.65-.22,Bo-.16,n-1.65,xo-.65,Bo,n+1.65),Lo(t,e,o,.65,Bo-.16,n-1.65,xo-.65,Bo,n-1.43),Lo(t,e,o,.65,Bo-.16,n+1.43,xo-.65,Bo,n+1.65),o.push(...Ou(t,e,[.65+.22,Bo-.16,n-1.43],[xo-.65-.22,Bo-.16,n-1.43],[.65+.22,Bo-.16,n+1.43],[xo-.65-.22,Bo-.16,n+1.43],[0,-1,0]))}c2.exports=function(){let t=[],e=[],o=[];ah=[],En=C_.createBuilder(t,e,o,ah),o.push(...Ou(t,e,[0,0,0],[xo,0,0],[0,0,An],[xo,0,An],[0,1,0])),I_.addSkylight(En,[0,0,0],An),En.curMat=[0,0,0];{let c=Wi.SURR;Lo(t,e,o,-Ro,0,0,Ro,Bo,c.z0),Lo(t,e,o,-Ro,0,c.z1,Ro,Bo,An),Lo(t,e,o,-Ro,c.top,c.z0,Ro,Bo,c.z1)}Lo(t,e,o,xo-Ro,0,D0.C.z1,xo+Ro,Bo,An-Ro),Lo(t,e,o,xo-Ro-.12,0,D0.C.z1+2*Ro,xo-Ro,.42,An-Ro),Lo(t,e,o,xo-Ro-.07,.42,D0.C.z1+2*Ro,xo-Ro,.5,An-Ro);for(let[c,f]of[[0,Wi.SURR.z0],[Wi.SURR.z1,An-Ro]])Lo(t,e,o,Ro,0,c,Ro+.12,.42,f),Lo(t,e,o,Ro,.42,c,Ro+.07,.5,f);Lo(t,e,o,Ro,0,An-Ro-.12,xo-Ro,.42,An-Ro),Lo(t,e,o,Ro,.42,An-Ro-.07,xo-Ro,.5,An-Ro),e2.addEntranceWall(En),e2.addFrames(En),En.curMat=[0,0,0],Lo(t,e,o,-Ro,0,An-Ro,xo+Ro,Bo,An+Ro),B_(t,e,o,nh);for(let c of Ru)r2(t,e,o,1.25,c),r2(t,e,o,xo-1.25,c);oh(t,e,o,22,"left"),oh(t,e,o,25,"right"),oh(t,e,o,33,"left"),oh(t,e,o,36,"right");let n=[4,9,34,39,44,49];for(let c of n)U_(t,e,o,c);D0.addWing(En),En.curMat=[0,0,0];for(let c of rh.filter(f=>f.pedestal))O_(En,c.x,c.z,ih,o2);{let c=q_;En.curMat=[0,0,0],En.box(c.x0,0,c.z0-.08,c.x1+.08,.16,c.z1+.08,[0,0,0]),En.box(c.x0,.16,c.z0+.04,c.x1-.04,c.top-.14,c.z1-.04,[0,0,0]),En.box(c.x0,c.top-.14,c.z0-.02,c.x1+.03,c.top-.06,c.z1+.02,[0,0,0]),En.box(c.x0,c.top-.06,c.z0-.06,c.x1+.07,c.top,c.z1+.06,[0,0,0])}$_.addAlcove(En);for(let c of ul)P_(En,c.x,c.z,c.seed,1,c.away);En.curMat=[0,0,0];let r=[[[xo,An-.35],[0,An-.35]],[[0,3],[0,10]],[[xo,15],[xo,22]],[[0,24],[0,31]],[[xo,33],[xo,40]],[[0,41],[0,46]]],a=G_(D_),s=(c,f)=>{let l=0,v=1/0;return r.forEach((h,u)=>{let p=(h[0][0]+h[1][0])/2,d=(h[0][1]+h[1][1])/2,m=Math.hypot(c-p,f-d);m<v&&(v=m,l=u)}),l},i=[];for(let c=0;c<10;c++)i.push({c:[0,0,0,0],d:[1,0,0,0]});return{placements:r,lights:i,statues:rh,occluders:[...Ru.flatMap(c=>[[1.25,c,.78],[xo-1.25,c,.78]]),[xo/2-sh,nh,.86],[xo/2+sh,nh,.86],...rh.filter(c=>c.pedestal).map(c=>[c.x,c.z,ih*1.12]),...ul.map(c=>[c.x,c.z,.34])],pedestalTop:o2,mat:ah,getAreaIndex:s,getGridSegments:(c,f)=>a.get(c,f),getGridParts:(c,f)=>a.get(c,f),position:t,normal:e,elements:o}}});var Pu=xt((lA,f2)=>{"use strict";var{doorLightGLSL:j_}=Fa(),{skylightGLSL:W_}=$i(),{windowLightGLSL:V_,C:a0}=vr(),{alcoveLightGLSL:X_}=_0(),M0=t=>t.toFixed(4),Y_=(()=>{let t=[-.22,.6,-.77],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>(o/e).toFixed(4)).join(", ")})();f2.exports=(t,e,o,n)=>{let a=(e.occluders||[]).slice(0,24).map(([u,p,d])=>`ao = min(ao, contact(v_pos.xz, vec2(${u.toFixed(3)}, ${p.toFixed(3)}), ${d.toFixed(3)}));`).join(`
      `),s={c:[0,0,0,0],d:[1,0,0,0]},i=-1,c=[],f=u=>{let p=u&&u.tick!==void 0?u.tick:0;if(p!==i||c.length===0){i=p;let d=e.viewer||[7,2,20];for(c=e.lights.filter(m=>m.c[3]>.5).map(m=>({l:m,d:Math.hypot(m.c[0]-d[0],m.c[2]-d[2])})).sort((m,g)=>m.d-g.d).slice(0,8).map(m=>m.l);c.length<8;)c.push(s)}return c},l={},v="",h="";for(let u=0;u<8;u++)l["lightC"+u]=p=>f(p)[u].c,l["lightD"+u]=p=>f(p)[u].d,v+="uniform vec4 lightC"+u+", lightD"+u+`;
`,h+="pic += pictureLight(lightC"+u+", lightD"+u+`, v_pos, N);
`;return t({frag:`
    precision highp float;

    uniform float yScale;
    uniform float mirrorOn;
    uniform float night;   // 0 by day, 1 at night
    uniform float time;
    ${Ga().lanternGLSL()}

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

    ${j_()}

    ${W_()}

    ${V_()}

    ${X_()}

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
        step(abs(v_pos.z - ${M0(a0.hallEnd)}), 0.02) * step(0.5, -N.z) +
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
                 + exp(-pow((v_pos.z - ${M0((a0.z0+a0.z1)/2)}) / 1.3, 2.0)) * step(14.0, v_pos.x);
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
      light += (1.0 - smoothstep(2.0, 16.0, abs(v_pos.z - ${M0(a0.hallEnd-1.6)}))) * 0.09 * (1.0 - smoothstep(14.5, 18.0, v_pos.x));

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
          float through = doorLight(v_pos, vec3(${Y_}));
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
        if (v_pos.x < 14.0) wallD = min(wallD, ${M0(a0.hallEnd)} - v_pos.z);
        if (v_pos.x < 14.0 && (v_pos.z < ${M0(a0.z0)} || v_pos.z > ${M0(a0.z1)})) wallD = min(wallD, 13.65 - v_pos.x);
        if (v_pos.x > 13.65 && v_pos.z > ${M0(a0.z0-1)}) wallD = min(min(min(wallD, v_pos.z - ${M0(a0.z0)}), ${M0(a0.z1)} - v_pos.z), ${M0(a0.x1)} - v_pos.x);
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
        if (v_pos.z < ${M0(a0.z0+.3)} && v_pos.x > ${M0(a0.x0)}) {
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
    }`,attributes:{position:e.position,normal:e.normal,a_mat:e.mat},uniforms:l,blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"zero"}},elements:new Uint32Array(e.elements),offset:n?t.prop("offset"):0,count:n?t.prop("count"):e.elements.length})}});var u2=xt((fA,h2)=>{"strict mode";var K_="https://api.artic.edu/api/v1/artworks/search",Q_=({image_id:t},e)=>`https://www.artic.edu/iiif/2/${t}/full/${e},/0/default.jpg`,Z_="?query[bool][must][][term][classification_titles.keyword]=painting&query[bool][must][][term][is_public_domain]=true",J_="&fields=image_id,title,artist_title",t6={low:400,mid:843,high:1686};h2.exports={fetchList:async function(t,e){let o=K_+Z_+J_+`&from=${t}&size=${e}`;return(await fetch(o).then(r=>r.json())).data.filter(r=>r.image_id)},fetchImage:async function(t,e){let o=Q_(t,t6[e]),n=await fetch(o).then(r=>r.blob());return{title:t.title+" - "+t.artist_title,image:n}}}});var v2=xt((hA,p2)=>{"use strict";var e6=nu(),o6=y0(),n6=t=>"images/web/"+t.slug+(o6.isPhone?"-1024":"")+".webp";async function d2(t){let e=await fetch(t);if(!e.ok)throw new Error("Could not load "+t);return e.blob()}p2.exports={fetchList:async function(t,e){return e6.slice(t,t+e).map((o,n)=>({...o,image_id:t+n}))},fetchImage:async function(t){let e;try{e=await d2(n6(t))}catch(o){e=await d2("images/"+t.file)}return{title:t.title,image:e}}}});var g2=xt((uA,m2)=>{"strict mode";m2.exports={default:"local",artic:u2(),local:v2()}});var $u=xt((dA,y2)=>{"strict mode";var Os=document.createElement("canvas"),Iu=Os.width=Os.height=1024,ja=Os.getContext("2d");ja.mozImageSmoothingEnabled=!1;ja.webkitImageSmoothingEnabled=!1;ja.font="32px Verdana";ja.textBaseline="bottom";ja.fillStyle="#aaa";function x2(t,e,o,n){var r=e,a,s=0,i=0,c=e.split(" "),f,l;for(f=l=c.length;t.measureText(r).width>o&&f>1;){f--,r=a="";for(var v=0;v<l;v++)v<f?(r+=c[v],v+1<f&&(r+=" ")):(a+=c[v],v+1<l&&(a+=" "))}return n.push(r),i=t.measureText(r).width,a&&(s=x2(t,a,o,n),s>i&&(i=s)),i}y2.exports={init(t,e,o=Iu){var n=[];x2(ja,e,Math.min(o*Iu,Iu),n),ja.clearRect(0,0,Os.width,Os.height);for(var r=0;r<n.length;r++)ja.fillText(n[r],0,Os.height-(Math.max(n.length,3)-r)*32);return t({data:Os,min:"mipmap",mipmap:"nice",flipY:!0})},draw(t){return t({frag:`
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
            }`,attributes:{pos:[0,0,1,0,0,1,1,1,0,1,1,0]},uniforms:{model:t.prop("textmodel"),tex:t.prop("text")},count:6,blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}})}}});var _2=xt((pA,w2)=>{"strict mode";var Fu=g2(),r6=new URLSearchParams(window.location.search).get("api"),b2=Fu[r6]||Fu[Fu.default],a6=$u(),qu={},Xi=[],s6=2;function i6(t){return(!navigator.connection||navigator.connection.downlink<s6)&&(t=t=="high"?"mid":"low"),t}var c6=y0(),Vi=document.createElement("canvas");Vi.width=Vi.height=c6.isPhone?1024:2048;var Hu=Vi.getContext("2d");Hu.imageSmoothingEnabled=!0;Hu.imageSmoothingQuality="high";var Du=!1,l6=t=>[(Xi.pop()||t.texture)([[[200,200,200]]]),e=>(Xi.pop()||t.texture)([[[0,0,0,0]]]),1];async function Gu(t,e,o){Du===!1&&(Du=t.hasExtension("EXT_texture_filter_anisotropic")?t._gl.getParameter(t._gl.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0);let n,r;try{let a=await b2.fetchImage(e,i6(o));r=a.title,n=await createImageBitmap(a.image),Hu.drawImage(n,0,0,Vi.width,Vi.height)}catch(a){return console.error(a),o=="high"?await Gu(t,e,"low"):l6(t)}return[(Xi.pop()||t.texture)({data:Vi,min:"mipmap",mipmap:"nice",aniso:Du,flipY:!0}),a=>a6.init(Xi.pop()||t.texture,r,a),n.width/n.height]}w2.exports={fetch:(t,e=10,o="low",n,r)=>{let a=Object.keys(qu).length;b2.fetchList(a,e).then(s=>{e=s.length,s.map(i=>{if(qu[i.image_id]){--e===0&&r();return}qu[i.image_id]=i,Gu(t,i,o).then(([c,f,l])=>{n({...i,tex:c,textGen:f,aspect:l}),--e===0&&r()})})})},load:(t,e,o="low")=>{e.tex||e.loading||(e.loading=!0,Gu(t,e,o).then(([n,r])=>{e.loading=!1,e.tex=n,e.text=r(e.width)}))},unload:t=>{t.tex&&(Xi.push(t.tex),t.tex=void 0),t.text&&(Xi.push(t.text),t.text=void 0)}}});var k2=xt((vA,M2)=>{M2.exports=f6;function f6(){var t=new Float32Array(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var E2=xt((mA,S2)=>{S2.exports=h6;function h6(t){var e=new Float32Array(16);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}});var T2=xt((gA,A2)=>{A2.exports=u6;function u6(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}});var Bu=xt((xA,z2)=>{z2.exports=d6;function d6(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var N2=xt((yA,L2)=>{L2.exports=p6;function p6(t,e){if(t===e){var o=e[1],n=e[2],r=e[3],a=e[6],s=e[7],i=e[11];t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=o,t[6]=e[9],t[7]=e[13],t[8]=n,t[9]=a,t[11]=e[14],t[12]=r,t[13]=s,t[14]=i}else t[0]=e[0],t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=e[1],t[5]=e[5],t[6]=e[9],t[7]=e[13],t[8]=e[2],t[9]=e[6],t[10]=e[10],t[11]=e[14],t[12]=e[3],t[13]=e[7],t[14]=e[11],t[15]=e[15];return t}});var C2=xt((bA,R2)=>{R2.exports=v6;function v6(t,e){var o=e[0],n=e[1],r=e[2],a=e[3],s=e[4],i=e[5],c=e[6],f=e[7],l=e[8],v=e[9],h=e[10],u=e[11],p=e[12],d=e[13],m=e[14],g=e[15],x=o*i-n*s,b=o*c-r*s,w=o*f-a*s,_=n*c-r*i,M=n*f-a*i,A=r*f-a*c,$=l*d-v*p,R=l*m-h*p,W=l*g-u*p,H=v*m-h*d,D=v*g-u*d,C=h*g-u*m,P=x*C-b*D+w*H+_*W-M*R+A*$;return P?(P=1/P,t[0]=(i*C-c*D+f*H)*P,t[1]=(r*D-n*C-a*H)*P,t[2]=(d*A-m*M+g*_)*P,t[3]=(h*M-v*A-u*_)*P,t[4]=(c*W-s*C-f*R)*P,t[5]=(o*C-r*W+a*R)*P,t[6]=(m*w-p*A-g*b)*P,t[7]=(l*A-h*w+u*b)*P,t[8]=(s*D-i*W+f*$)*P,t[9]=(n*W-o*D-a*$)*P,t[10]=(p*M-d*w+g*x)*P,t[11]=(v*w-l*M-u*x)*P,t[12]=(i*R-s*H-c*$)*P,t[13]=(o*H-n*R+r*$)*P,t[14]=(d*b-p*_-m*x)*P,t[15]=(l*_-v*b+h*x)*P,t):null}});var P2=xt((wA,O2)=>{O2.exports=m6;function m6(t,e){var o=e[0],n=e[1],r=e[2],a=e[3],s=e[4],i=e[5],c=e[6],f=e[7],l=e[8],v=e[9],h=e[10],u=e[11],p=e[12],d=e[13],m=e[14],g=e[15];return t[0]=i*(h*g-u*m)-v*(c*g-f*m)+d*(c*u-f*h),t[1]=-(n*(h*g-u*m)-v*(r*g-a*m)+d*(r*u-a*h)),t[2]=n*(c*g-f*m)-i*(r*g-a*m)+d*(r*f-a*c),t[3]=-(n*(c*u-f*h)-i*(r*u-a*h)+v*(r*f-a*c)),t[4]=-(s*(h*g-u*m)-l*(c*g-f*m)+p*(c*u-f*h)),t[5]=o*(h*g-u*m)-l*(r*g-a*m)+p*(r*u-a*h),t[6]=-(o*(c*g-f*m)-s*(r*g-a*m)+p*(r*f-a*c)),t[7]=o*(c*u-f*h)-s*(r*u-a*h)+l*(r*f-a*c),t[8]=s*(v*g-u*d)-l*(i*g-f*d)+p*(i*u-f*v),t[9]=-(o*(v*g-u*d)-l*(n*g-a*d)+p*(n*u-a*v)),t[10]=o*(i*g-f*d)-s*(n*g-a*d)+p*(n*f-a*i),t[11]=-(o*(i*u-f*v)-s*(n*u-a*v)+l*(n*f-a*i)),t[12]=-(s*(v*m-h*d)-l*(i*m-c*d)+p*(i*h-c*v)),t[13]=o*(v*m-h*d)-l*(n*m-r*d)+p*(n*h-r*v),t[14]=-(o*(i*m-c*d)-s*(n*m-r*d)+p*(n*c-r*i)),t[15]=o*(i*h-c*v)-s*(n*h-r*v)+l*(n*c-r*i),t}});var $2=xt((_A,I2)=>{I2.exports=g6;function g6(t){var e=t[0],o=t[1],n=t[2],r=t[3],a=t[4],s=t[5],i=t[6],c=t[7],f=t[8],l=t[9],v=t[10],h=t[11],u=t[12],p=t[13],d=t[14],m=t[15],g=e*s-o*a,x=e*i-n*a,b=e*c-r*a,w=o*i-n*s,_=o*c-r*s,M=n*c-r*i,A=f*p-l*u,$=f*d-v*u,R=f*m-h*u,W=l*d-v*p,H=l*m-h*p,D=v*m-h*d;return g*D-x*H+b*W+w*R-_*$+M*A}});var q2=xt((MA,F2)=>{F2.exports=x6;function x6(t,e,o){var n=e[0],r=e[1],a=e[2],s=e[3],i=e[4],c=e[5],f=e[6],l=e[7],v=e[8],h=e[9],u=e[10],p=e[11],d=e[12],m=e[13],g=e[14],x=e[15],b=o[0],w=o[1],_=o[2],M=o[3];return t[0]=b*n+w*i+_*v+M*d,t[1]=b*r+w*c+_*h+M*m,t[2]=b*a+w*f+_*u+M*g,t[3]=b*s+w*l+_*p+M*x,b=o[4],w=o[5],_=o[6],M=o[7],t[4]=b*n+w*i+_*v+M*d,t[5]=b*r+w*c+_*h+M*m,t[6]=b*a+w*f+_*u+M*g,t[7]=b*s+w*l+_*p+M*x,b=o[8],w=o[9],_=o[10],M=o[11],t[8]=b*n+w*i+_*v+M*d,t[9]=b*r+w*c+_*h+M*m,t[10]=b*a+w*f+_*u+M*g,t[11]=b*s+w*l+_*p+M*x,b=o[12],w=o[13],_=o[14],M=o[15],t[12]=b*n+w*i+_*v+M*d,t[13]=b*r+w*c+_*h+M*m,t[14]=b*a+w*f+_*u+M*g,t[15]=b*s+w*l+_*p+M*x,t}});var G2=xt((kA,D2)=>{D2.exports=y6;function y6(t,e,o){var n=o[0],r=o[1],a=o[2],s,i,c,f,l,v,h,u,p,d,m,g;return e===t?(t[12]=e[0]*n+e[4]*r+e[8]*a+e[12],t[13]=e[1]*n+e[5]*r+e[9]*a+e[13],t[14]=e[2]*n+e[6]*r+e[10]*a+e[14],t[15]=e[3]*n+e[7]*r+e[11]*a+e[15]):(s=e[0],i=e[1],c=e[2],f=e[3],l=e[4],v=e[5],h=e[6],u=e[7],p=e[8],d=e[9],m=e[10],g=e[11],t[0]=s,t[1]=i,t[2]=c,t[3]=f,t[4]=l,t[5]=v,t[6]=h,t[7]=u,t[8]=p,t[9]=d,t[10]=m,t[11]=g,t[12]=s*n+l*r+p*a+e[12],t[13]=i*n+v*r+d*a+e[13],t[14]=c*n+h*r+m*a+e[14],t[15]=f*n+u*r+g*a+e[15]),t}});var B2=xt((SA,H2)=>{H2.exports=b6;function b6(t,e,o){var n=o[0],r=o[1],a=o[2];return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t[3]=e[3]*n,t[4]=e[4]*r,t[5]=e[5]*r,t[6]=e[6]*r,t[7]=e[7]*r,t[8]=e[8]*a,t[9]=e[9]*a,t[10]=e[10]*a,t[11]=e[11]*a,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}});var j2=xt((EA,U2)=>{U2.exports=w6;function w6(t,e,o,n){var r=n[0],a=n[1],s=n[2],i=Math.sqrt(r*r+a*a+s*s),c,f,l,v,h,u,p,d,m,g,x,b,w,_,M,A,$,R,W,H,D,C,P,nt;return Math.abs(i)<1e-6?null:(i=1/i,r*=i,a*=i,s*=i,c=Math.sin(o),f=Math.cos(o),l=1-f,v=e[0],h=e[1],u=e[2],p=e[3],d=e[4],m=e[5],g=e[6],x=e[7],b=e[8],w=e[9],_=e[10],M=e[11],A=r*r*l+f,$=a*r*l+s*c,R=s*r*l-a*c,W=r*a*l-s*c,H=a*a*l+f,D=s*a*l+r*c,C=r*s*l+a*c,P=a*s*l-r*c,nt=s*s*l+f,t[0]=v*A+d*$+b*R,t[1]=h*A+m*$+w*R,t[2]=u*A+g*$+_*R,t[3]=p*A+x*$+M*R,t[4]=v*W+d*H+b*D,t[5]=h*W+m*H+w*D,t[6]=u*W+g*H+_*D,t[7]=p*W+x*H+M*D,t[8]=v*C+d*P+b*nt,t[9]=h*C+m*P+w*nt,t[10]=u*C+g*P+_*nt,t[11]=p*C+x*P+M*nt,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t)}});var V2=xt((AA,W2)=>{W2.exports=_6;function _6(t,e,o){var n=Math.sin(o),r=Math.cos(o),a=e[4],s=e[5],i=e[6],c=e[7],f=e[8],l=e[9],v=e[10],h=e[11];return e!==t&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[4]=a*r+f*n,t[5]=s*r+l*n,t[6]=i*r+v*n,t[7]=c*r+h*n,t[8]=f*r-a*n,t[9]=l*r-s*n,t[10]=v*r-i*n,t[11]=h*r-c*n,t}});var Y2=xt((TA,X2)=>{X2.exports=M6;function M6(t,e,o){var n=Math.sin(o),r=Math.cos(o),a=e[0],s=e[1],i=e[2],c=e[3],f=e[8],l=e[9],v=e[10],h=e[11];return e!==t&&(t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=a*r-f*n,t[1]=s*r-l*n,t[2]=i*r-v*n,t[3]=c*r-h*n,t[8]=a*n+f*r,t[9]=s*n+l*r,t[10]=i*n+v*r,t[11]=c*n+h*r,t}});var Q2=xt((zA,K2)=>{K2.exports=k6;function k6(t,e,o){var n=Math.sin(o),r=Math.cos(o),a=e[0],s=e[1],i=e[2],c=e[3],f=e[4],l=e[5],v=e[6],h=e[7];return e!==t&&(t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=a*r+f*n,t[1]=s*r+l*n,t[2]=i*r+v*n,t[3]=c*r+h*n,t[4]=f*r-a*n,t[5]=l*r-s*n,t[6]=v*r-i*n,t[7]=h*r-c*n,t}});var J2=xt((LA,Z2)=>{Z2.exports=S6;function S6(t,e,o){var n,r,a,s=o[0],i=o[1],c=o[2],f=Math.sqrt(s*s+i*i+c*c);return Math.abs(f)<1e-6?null:(f=1/f,s*=f,i*=f,c*=f,n=Math.sin(e),r=Math.cos(e),a=1-r,t[0]=s*s*a+r,t[1]=i*s*a+c*n,t[2]=c*s*a-i*n,t[3]=0,t[4]=s*i*a-c*n,t[5]=i*i*a+r,t[6]=c*i*a+s*n,t[7]=0,t[8]=s*c*a+i*n,t[9]=i*c*a-s*n,t[10]=c*c*a+r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t)}});var eg=xt((NA,tg)=>{tg.exports=E6;function E6(t,e,o){var n=e[0],r=e[1],a=e[2],s=e[3],i=n+n,c=r+r,f=a+a,l=n*i,v=n*c,h=n*f,u=r*c,p=r*f,d=a*f,m=s*i,g=s*c,x=s*f;return t[0]=1-(u+d),t[1]=v+x,t[2]=h-g,t[3]=0,t[4]=v-x,t[5]=1-(l+d),t[6]=p+m,t[7]=0,t[8]=h+g,t[9]=p-m,t[10]=1-(l+u),t[11]=0,t[12]=o[0],t[13]=o[1],t[14]=o[2],t[15]=1,t}});var ng=xt((RA,og)=>{og.exports=A6;function A6(t,e){return t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=e[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var ag=xt((CA,rg)=>{rg.exports=T6;function T6(t,e){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e[0],t[13]=e[1],t[14]=e[2],t[15]=1,t}});var ig=xt((OA,sg)=>{sg.exports=z6;function z6(t,e){var o=Math.sin(e),n=Math.cos(e);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=n,t[6]=o,t[7]=0,t[8]=0,t[9]=-o,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var lg=xt((PA,cg)=>{cg.exports=L6;function L6(t,e){var o=Math.sin(e),n=Math.cos(e);return t[0]=n,t[1]=0,t[2]=-o,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=o,t[9]=0,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var hg=xt((IA,fg)=>{fg.exports=N6;function N6(t,e){var o=Math.sin(e),n=Math.cos(e);return t[0]=n,t[1]=o,t[2]=0,t[3]=0,t[4]=-o,t[5]=n,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var dg=xt(($A,ug)=>{ug.exports=R6;function R6(t,e){var o=e[0],n=e[1],r=e[2],a=e[3],s=o+o,i=n+n,c=r+r,f=o*s,l=n*s,v=n*i,h=r*s,u=r*i,p=r*c,d=a*s,m=a*i,g=a*c;return t[0]=1-v-p,t[1]=l+g,t[2]=h-m,t[3]=0,t[4]=l-g,t[5]=1-f-p,t[6]=u+d,t[7]=0,t[8]=h+m,t[9]=u-d,t[10]=1-f-v,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var vg=xt((FA,pg)=>{pg.exports=C6;function C6(t,e,o,n,r,a,s){var i=1/(o-e),c=1/(r-n),f=1/(a-s);return t[0]=a*2*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a*2*c,t[6]=0,t[7]=0,t[8]=(o+e)*i,t[9]=(r+n)*c,t[10]=(s+a)*f,t[11]=-1,t[12]=0,t[13]=0,t[14]=s*a*2*f,t[15]=0,t}});var gg=xt((qA,mg)=>{mg.exports=O6;function O6(t,e,o,n,r){var a=1/Math.tan(e/2),s=1/(n-r);return t[0]=a/o,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(r+n)*s,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*r*n*s,t[15]=0,t}});var yg=xt((DA,xg)=>{xg.exports=P6;function P6(t,e,o,n){var r=Math.tan(e.upDegrees*Math.PI/180),a=Math.tan(e.downDegrees*Math.PI/180),s=Math.tan(e.leftDegrees*Math.PI/180),i=Math.tan(e.rightDegrees*Math.PI/180),c=2/(s+i),f=2/(r+a);return t[0]=c,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=f,t[6]=0,t[7]=0,t[8]=-((s-i)*c*.5),t[9]=(r-a)*f*.5,t[10]=n/(o-n),t[11]=-1,t[12]=0,t[13]=0,t[14]=n*o/(o-n),t[15]=0,t}});var wg=xt((GA,bg)=>{bg.exports=I6;function I6(t,e,o,n,r,a,s){var i=1/(e-o),c=1/(n-r),f=1/(a-s);return t[0]=-2*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*c,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*f,t[11]=0,t[12]=(e+o)*i,t[13]=(r+n)*c,t[14]=(s+a)*f,t[15]=1,t}});var Mg=xt((HA,_g)=>{var $6=Bu();_g.exports=F6;function F6(t,e,o,n){var r,a,s,i,c,f,l,v,h,u,p=e[0],d=e[1],m=e[2],g=n[0],x=n[1],b=n[2],w=o[0],_=o[1],M=o[2];return Math.abs(p-w)<1e-6&&Math.abs(d-_)<1e-6&&Math.abs(m-M)<1e-6?$6(t):(l=p-w,v=d-_,h=m-M,u=1/Math.sqrt(l*l+v*v+h*h),l*=u,v*=u,h*=u,r=x*h-b*v,a=b*l-g*h,s=g*v-x*l,u=Math.sqrt(r*r+a*a+s*s),u?(u=1/u,r*=u,a*=u,s*=u):(r=0,a=0,s=0),i=v*s-h*a,c=h*r-l*s,f=l*a-v*r,u=Math.sqrt(i*i+c*c+f*f),u?(u=1/u,i*=u,c*=u,f*=u):(i=0,c=0,f=0),t[0]=r,t[1]=i,t[2]=l,t[3]=0,t[4]=a,t[5]=c,t[6]=v,t[7]=0,t[8]=s,t[9]=f,t[10]=h,t[11]=0,t[12]=-(r*p+a*d+s*m),t[13]=-(i*p+c*d+f*m),t[14]=-(l*p+v*d+h*m),t[15]=1,t)}});var Sg=xt((BA,kg)=>{kg.exports=q6;function q6(t){return"mat4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+")"}});var Yi=xt((UA,Eg)=>{Eg.exports={create:k2(),clone:E2(),copy:T2(),identity:Bu(),transpose:N2(),invert:C2(),adjoint:P2(),determinant:$2(),multiply:q2(),translate:G2(),scale:B2(),rotate:j2(),rotateX:V2(),rotateY:Y2(),rotateZ:Q2(),fromRotation:J2(),fromRotationTranslation:eg(),fromScaling:ng(),fromTranslation:ag(),fromXRotation:ig(),fromYRotation:lg(),fromZRotation:hg(),fromQuat:dg(),frustum:vg(),perspective:gg(),perspectiveFromFieldOfView:yg(),ortho:wg(),lookAt:Mg(),str:Sg()}});var zg=xt((jA,Tg)=>{"use strict";var Ag=_2(),xn=Yi(),Ps=vr(),D6=3e3,lh="high",Uu,pl=.36,vl=13.64,Ki=Ps.C.hallEnd-.01,ml=Ps.C.z0+.01,G6=.356,H6=13.644,B6=Ps.C.hallEnd-.006,U6=Ps.C.z0+.006,j6=.12,hh=4,Qi=t=>mr[t]&&mr[t].cy||hh,ju=.26,W6=5.6,V6=7,mr=[{side:"right",z:34.5},{side:"right",z:23.5},{side:"left",z:23.5},{side:"end",z:Ki},{side:"left",z:34.5},{side:"right",z:14.6},{side:"left",z:14.6,maxW:3.7,maxH:3.7},{side:"corridor",x:Ps.PAINTING_X[0],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:Ps.PAINTING_X[1],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:Ps.PAINTING_X[2],cy:3,maxW:3.3,maxH:3.73}];function X6(t,e){let o=e&&e.maxH||W6,n=e&&e.maxW||V6,r=Math.min(o,n/t);return{width:r*t,height:r}}function Y6(t,e,o){let n=mr[o],r=[],a=Qi(o)-e/2;return n.side==="left"?(xn.fromTranslation(r,[pl,a,n.z+t/2]),xn.rotateY(r,r,Math.PI/2)):n.side==="right"?(xn.fromTranslation(r,[vl,a,n.z-t/2]),xn.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?xn.fromTranslation(r,[n.x-t/2,a,ml]):(xn.fromTranslation(r,[7+t/2,a,Ki]),xn.rotateY(r,r,Math.PI)),xn.scale(r,r,[t,e,j6]),r}function K6(t,e,o){let n=mr[o],r=[],a=Qi(o)-e/2;return n.side==="left"?(xn.fromTranslation(r,[pl,a,n.z+t/2]),xn.rotateY(r,r,Math.PI/2)):n.side==="right"?(xn.fromTranslation(r,[vl,a,n.z-t/2]),xn.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?xn.fromTranslation(r,[n.x-t/2,a,ml]):(xn.fromTranslation(r,[7+t/2,a,Ki]),xn.rotateY(r,r,Math.PI)),r}function Q6(t,e,o){let n=mr[o],r=[],a=Qi(o)-e/2-ju-.38;return n.side==="left"?(xn.fromTranslation(r,[G6,a,n.z+t/2]),xn.rotateY(r,r,Math.PI/2)):n.side==="right"?(xn.fromTranslation(r,[H6,a,n.z-t/2]),xn.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?xn.fromTranslation(r,[n.x-t/2,a,U6]):(xn.fromTranslation(r,[7+t/2,a,B6]),xn.rotateY(r,r,Math.PI)),xn.scale(r,r,[2,2,2]),r}function Z6(t,e,o){let n=mr[o],r=Qi(o)-e/2-ju-.38;return n.side==="left"?[pl+.55,r,n.z]:n.side==="right"?[vl-.55,r,n.z]:n.side==="corridor"?[n.x,r,ml+.55]:[7,r,Ki-.55]}var dl=.42;function fh(t,e,o,n,r,a){return[e[0]*n,e[1]*n,e[2]*n,0,0,r,0,0,o[0]*a,o[1]*a,o[2]*a,0,t[0],t[1],t[2],1]}function J6(t,e,o){let n=mr[o],r,a,s;n.side==="left"?(r=[pl,n.z],a=[0,0,1],s=[1,0,0]):n.side==="right"?(r=[vl,n.z],a=[0,0,1],s=[-1,0,0]):n.side==="corridor"?(r=[n.x,ml],a=[1,0,0],s=[0,0,1]):(r=[7,Ki],a=[1,0,0],s=[0,0,-1]);let i=Qi(o)+e/2+ju+.3,c=Math.min(2.4,Math.max(.9,t*.55)),f=(u,p)=>[r[0]+s[0]*u,p,r[1]+s[2]*u],l=[.075,.062,.05],v=[{fixmodel:fh(f(.014,i),a,s,.1,.13,.028),fixcol:l,fixglow:0},{fixmodel:fh(f(dl/2,i),a,s,.02,.02,dl),fixcol:l,fixglow:0},{fixmodel:fh(f(dl,i),a,s,c,.034,.05),fixcol:l,fixglow:0},{fixmodel:fh(f(dl-.012,i-.019),a,s,c*.94,.006,.028),fixcol:l,fixglow:1}],h=f(dl,i-.02);return{fixtures:v,light:{c:[h[0],h[1],h[2],1],d:[a[0],a[1],a[2],c/2]}}}Tg.exports=(t,e)=>{let o=[],n=[],r=a=>{let s=a.image_id;if(!mr[s])return;let{width:i,height:c}=X6(a.aspect,mr[s]),f=J6(i,c,s);e&&e.lights&&s<e.lights.length&&(e.lights[s]=f.light),o.push({...a,fixtures:f.fixtures,side:mr[s].side,model:Y6(i,c,s),framemodel:K6(i,c,s),framesize:[i,c],textmodel:Q6(i,c,s),text:a.textGen(i),width:i,height:c,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:Z6(i,c,s),paintingPosition:mr[s].side==="left"?[pl+.05,hh,mr[s].z]:mr[s].side==="right"?[vl-.05,hh,mr[s].z]:mr[s].side==="corridor"?[mr[s].x,Qi(s),ml+.05]:[7,hh,Ki-.05],textGen:null})};return Ag.fetch(t,mr.length,lh,r,()=>{}),{update:()=>{n=o,n.forEach(a=>{Ag.load(t,a,lh)}),lh="low",Uu&&clearTimeout(Uu),Uu=setTimeout(()=>{lh="high"},D6)},batch:()=>n,interactables:()=>n.map((a,s)=>({side:a.side,width:a.width,index:s,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:a.plaquePosition,paintingPosition:a.paintingPosition}))}}});var Cg=xt((WA,Rg)=>{"use strict";var tM=$u(),Lg=y0(),Ng=[[-.02,.125],[-.02,.15],[.035,.15],[.07,.12],[.07,.17],[.185,.17],[.185,.19],[.215,.19],[.26,.03]];function eM(){let t=[[0,0],[1,0],[1,1],[0,1]],e=[];Ng.forEach(([n,r])=>{t.forEach(([a,s])=>e.push([a,s,n,r]))});let o=[];for(let n=0;n<Ng.length-1;n++)for(let r=0;r<4;r++){let a=(r+1)%4,s=n*4+r,i=n*4+a,c=(n+1)*4+r,f=(n+1)*4+a;o.push(s,i,f,s,f,c)}return{verts:e,elems:o}}var oM=`#extension GL_OES_standard_derivatives : enable
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
}`,nM=`
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
}`;Rg.exports=t=>{let e=tM.draw(t),o=t({frag:`#extension GL_OES_standard_derivatives : enable
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
	${Ga().lanternGLSL()}
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
	}`,attributes:{pos:[0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,-.1,-.1,0,1.1,-.1,0,-.1,1.1,0,1.1,1.1,0]},elements:[0,1,2,3,2,1,1,0,5,4,5,0,3,1,7,5,7,1,0,2,4,6,4,2,8,9,4,5,4,9,9,11,5,7,5,11,11,10,7,6,7,10,10,8,6,4,6,8],uniforms:{model:t.prop("model"),tex:t.prop("tex"),psize:t.prop("framesize"),canvasCm:(s,i)=>i.size?[i.size[1],i.size[0]]:[61,91],texel:1/(Lg.isPhone?1024:2048),detail:()=>Lg.post===0?0:1},blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}}),n=eM(),r=t({frag:oM,vert:nM,attributes:{prof:n.verts},elements:n.elems,uniforms:{model:t.prop("framemodel"),fsize:t.prop("framesize")},cull:{enable:!1},blend:{enable:!1}}),a=t({frag:`#extension GL_OES_standard_derivatives : enable
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
}`,attributes:{pos:[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5],[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]]},elements:[0,1,2,0,2,3,4,5,6,4,6,7,0,1,5,0,5,4,2,3,7,2,7,6,0,3,7,0,7,4,1,2,6,1,6,5],uniforms:{model:t.prop("fixmodel"),fixcol:t.prop("fixcol"),fixglow:t.prop("fixglow")},cull:{enable:!1},blend:{enable:!1}});return function(s){o(s),r(s);let i=[];s.forEach(c=>{c.fixtures&&i.push(...c.fixtures)}),i.length&&a(i),e(s)}}});var _l=xt((XA,Va)=>{"use strict";var Xo=Math.PI,At=t=>(+t).toFixed(4),We=[-90,0,0],Bt=16,lo=22,uo=7.8,s0=11.6,hr=.55,i0=(s0-uo)/(Bt/2),ee={c:[3.6,8.6,13.6,18.6],hw:1.3,sill:.62,spring:4.9};ee.top=ee.spring+ee.hw;var Ir={cols:[-.65,0,.65],rowH:.71,w:.055,ring:.78},Ho={rafter:lo/12,rafterW:.1,purlin:1,purlinW:.07},yl=[5.5,11,16.5],Vt={x0:Bt/2-1.9,x1:Bt/2+1.9,z0:5.6,z1:16.6,curb:.5,top:.36},gr={x:Bt/2,z:14.9,plinth:.86,height:2.05,yaw:Xo+.35,file:"res/nymph.bin"},Wu=(()=>{let t=[-.68,.6,-.36],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>o/e)})(),Vu=t=>[t[0]+We[0],t[1]+We[1],t[2]+We[2]];function Fg(){let t=ee.c.map(o=>`
		{
			float dz = q.z - ${At(o)};
			float inside = smoothstep(-b, b, ${At(ee.hw)} - abs(dz)) * smoothstep(-b, b, q.y - ${At(ee.sill)});
			float arch = smoothstep(-b, b, ${At(ee.hw)} - length(vec2(dz, max(q.y - ${At(ee.spring)}, 0.0))));
			o = max(o, inside * arch);
		}`).join(""),e=ee.c.map(o=>`
		{
			float dz = q.z - ${At(o)};
			if (abs(dz) < ${At(ee.hw+.2)}) {
				${Ir.cols.map(n=>`bar = max(bar, 1.0 - smoothstep(${At(Ir.w*.5)} - b, ${At(Ir.w*.5)} + b, abs(dz - ${At(n)})));`).join(`
				`)}
				float ry = q.y - ${At(ee.sill)};
				float tr = abs(ry - ${At(Ir.rowH)} * floor(ry / ${At(Ir.rowH)} + 0.5));
				if (q.y < ${At(ee.spring+.02)}) bar = max(bar, 1.0 - smoothstep(${At(Ir.w*.5)} - b, ${At(Ir.w*.5)} + b, tr));
				float rr = length(vec2(dz, q.y - ${At(ee.spring)}));
				if (q.y > ${At(ee.spring)}) bar = max(bar, 1.0 - smoothstep(${At(Ir.w*.5)} - b, ${At(Ir.w*.5)} + b, abs(rr - ${At(Ir.ring)})));
				// the frame round the opening
				bar = max(bar, 1.0 - smoothstep(0.0, b + 0.03, ${At(ee.hw)} - max(abs(dz), q.y > ${At(ee.spring)} ? rr : 0.0)));
			}
		}`).join("");return`
	const vec3 STUDIO_SUN = vec3(${At(Wu[0])}, ${At(Wu[1])}, ${At(Wu[2])});

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
	// coordinates (centre 0, half size ${At(Ho.purlin/2)} x ${At(Ho.rafter/2)}),
	// b the softness. Returns how much light gets through.
	float studioRoofPattern(vec2 q, float b) {
		vec2 hs = vec2(${At(Ho.purlin/2)}, ${At(Ho.rafter/2)});
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
		vec3 p = pw - vec3(${At(We[0])}, ${At(We[1])}, ${At(We[2])});
		vec3 S = STUDIO_SUN;
		// where the ray towards the sun leaves through the left wall
		float tw = (0.0 - p.x) / S.x;
		// and where it rises past the eaves
		float te = (${At(uo)} - p.y) / S.y;
		if (tw > 0.0 && tw < te) {
			vec3 h0 = p + S * tw;
			if (h0.z < 0.0 || h0.z > ${At(lo)}) return 0.0;
			vec3 h1 = p + S * ((${At(-hr)} - p.x) / S.x);
			vec3 hm = p + S * ((${At(-hr*.5)} - p.x) / S.x);
			float b = 0.006 + 0.0075 * tw;
			float open = min(studioWinOpen(h0, b), studioWinOpen(h1, b));
			if (open <= 0.0) return 0.0;
			float bar = studioWinBars(hm, b);
			return open * (1.0 - bar) * 0.92;
		}
		// up through the roof: the trusses' tie beams first
		vec3 he = p + S * max(te, 0.0);
		float vis = 1.0;
		if (p.y < ${At(uo)}) {
			if (he.z < 0.0 || he.z > ${At(lo)} || he.x < 0.0 || he.x > ${At(Bt)}) return 0.0;
			float be = 0.01 + 0.008 * te;
			${yl.map(o=>`vis *= smoothstep(0.08 - be, 0.08 + be, abs(he.z - ${At(o)}));`).join(`
			`)}
			// the bougainvillea along the tie beams
			${tc.filter(o=>o[0]==="truss").map(([o,n,r])=>`vis *= 1.0 - studioVineShade(he.z - ${At(n)}, he.x, he.z, ${At(r)});`).join(`
			`)}
		}
		// then the glass: the two slopes of the roof
		float tl = (${At(i0)} * p.x - p.y + ${At(uo)}) / (S.y - ${At(i0)} * S.x);
		float tr = (${At(i0)} * (${At(Bt)} - p.x) - p.y + ${At(uo)}) / (S.y + ${At(i0)} * S.x);
		float t = 1e9;
		vec3 h = vec3(0.0);
		vec3 hl = p + S * tl, hr = p + S * tr;
		if (tl > 0.0 && hl.x >= -0.01 && hl.x <= ${At(Bt/2+.01)}) { t = tl; h = hl; }
		if (tr > 0.0 && tr < t && hr.x >= ${At(Bt/2-.01)} && hr.x <= ${At(Bt+.01)}) { t = tr; h = hr; }
		if (t > 1e8) return 0.0;
		if (h.z < 0.0 || h.z > ${At(lo)}) return 0.0;
		float b = 0.008 + 0.0075 * t;
		float rz = abs(h.z - ${At(Ho.rafter)} * floor(h.z / ${At(Ho.rafter)} + 0.5));
		float bar = 1.0 - smoothstep(${At(Ho.rafterW*.5)} - b, ${At(Ho.rafterW*.5)} + b, rz);
		float ux = h.x < ${At(Bt/2)} ? h.x : ${At(Bt)} - h.x;
		float rx = abs(ux - ${At(Ho.purlin)} * floor(ux / ${At(Ho.purlin)} + 0.5));
		bar = max(bar, 1.0 - smoothstep(${At(Ho.purlinW*.5)} - b, ${At(Ho.purlinW*.5)} + b, rx));
		// the ridge beam
		bar = max(bar, 1.0 - smoothstep(0.14 - b, 0.14 + b, abs(h.x - ${At(Bt/2)})));
		// the leaded pattern in the panes (its shadow is crisper than
		// the sun's disc would allow, for the drawing to read)
		vec2 pq = vec2(ux - ${At(Ho.purlin)} * floor(ux / ${At(Ho.purlin)}) - ${At(Ho.purlin/2)}, h.z - ${At(Ho.rafter)} * floor(h.z / ${At(Ho.rafter)}) - ${At(Ho.rafter/2)});
		float pat = studioRoofPattern(pq, 0.004 + 0.0035 * t);
		// and along the rafters and the ridge
		${tc.filter(o=>o[0]==="rafter").map(([o,n,r])=>`pat *= 1.0 - studioVineShade(h.z - ${At(n)}, h.x, h.z, ${At(r)});`).join(`
		`)}
		pat *= 1.0 - studioVineShade(h.x - ${At(Bt/2)}, h.z, h.x, 0.9);
		return vis * (1.0 - bar) * pat * 0.78;
	}`}function ec(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let o=e;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}var ft={FLOOR:0,PLASTER:1,STONE:2,STEEL:3,WATER:4,PAD:5,PETAL:6,STAMEN:7,MARBLE:8,WOOD:9,GESSO:10,PAINT:11,POT:12,SHADE:13,BULB:14,NICHE:15,JAR:16,SOIL:17,BRUSH:18,TRAVERTINE:19,CLOTH:20,WMARBLE:21,REDDOOR:22,REDPANEL:23,DARKWOOD:24,BRASS:25,BRACT:26,KEYHOLE:27};function qg(){let t={pos:[],nrm:[],kind:[],uv:[],anchor:[],idx:[]};return t.float=null,t.v=(e,o,n,r)=>(t.pos.push(e[0]+We[0],e[1]+We[1],e[2]+We[2]),t.nrm.push(o[0],o[1],o[2]),t.kind.push(n),t.uv.push(r?r[0]:0,r?r[1]:0),t.float?t.anchor.push(t.float[0]+We[0],t.float[1]+We[2],t.float[2],1):t.anchor.push(0,0,0,0),t.pos.length/3-1),t.quad=(e,o,n,r,a,s,i)=>{let c=t.v(e,a,s,i&&i[0]),f=t.v(o,a,s,i&&i[1]),l=t.v(n,a,s,i&&i[2]),v=t.v(r,a,s,i&&i[3]);t.idx.push(c,f,l,c,l,v)},t.box=(e,o,n,r,a,s,i,c)=>{let f=c||{};f.top||t.quad([e,a,n],[e,a,s],[r,a,s],[r,a,n],[0,1,0],i,[[e,n],[e,s],[r,s],[r,n]]),f.bottom||t.quad([e,o,n],[r,o,n],[r,o,s],[e,o,s],[0,-1,0],i,[[e,n],[r,n],[r,s],[e,s]]),f.x0||t.quad([e,o,n],[e,o,s],[e,a,s],[e,a,n],[-1,0,0],i,[[n,o],[s,o],[s,a],[n,a]]),f.x1||t.quad([r,o,s],[r,o,n],[r,a,n],[r,a,s],[1,0,0],i,[[s,o],[n,o],[n,a],[s,a]]),f.z0||t.quad([r,o,n],[e,o,n],[e,a,n],[r,a,n],[0,0,-1],i,[[r,o],[e,o],[e,a],[r,a]]),f.z1||t.quad([e,o,s],[r,o,s],[r,a,s],[e,a,s],[0,0,1],i,[[e,o],[r,o],[r,a],[e,a]])},t.tbox=(e,o,n,r,a,s,i,c,f)=>{let l=Math.cos(n),v=Math.sin(n),h=Math.cos(f||0),u=Math.sin(f||0),p=(g,x,b)=>{let w=a+(x-a)*h-b*u*0,_=b+(x-a)*u,M=a+(x-a)*h;return[e+l*g+v*_,M,o-v*g+l*_]},d=g=>{let x=g[1]*h-g[2]*u,b=g[2]*h+g[1]*u;return[l*g[0]+v*b,x,-v*g[0]+l*b]},m=(g,x,b,w,_)=>t.quad(p(...g),p(...x),p(...b),p(...w),d(_),c,[[g[0]+g[2],g[1]],[x[0]+x[2],x[1]],[b[0]+b[2],b[1]],[w[0]+w[2],w[1]]]);m([-r,s,-i],[-r,s,i],[r,s,i],[r,s,-i],[0,1,0]),m([-r,a,-i],[r,a,-i],[r,a,i],[-r,a,i],[0,-1,0]),m([-r,a,-i],[-r,a,i],[-r,s,i],[-r,s,-i],[-1,0,0]),m([r,a,i],[r,a,-i],[r,s,-i],[r,s,i],[1,0,0]),m([r,a,-i],[-r,a,-i],[-r,s,-i],[r,s,-i],[0,0,-1]),m([-r,a,i],[r,a,i],[r,s,i],[-r,s,i],[0,0,1])},t.beam=(e,o,n,r,a)=>{let s=[o[0]-e[0],o[1]-e[1],o[2]-e[2]],i=Math.hypot(...s),c=s.map(p=>p/i),f=a||(Math.abs(c[1])>.9?[1,0,0]:[0,1,0]),l=[c[1]*f[2]-c[2]*f[1],c[2]*f[0]-c[0]*f[2],c[0]*f[1]-c[1]*f[0]],v=Math.hypot(...l);l=l.map(p=>p/v),f=[l[1]*c[2]-l[2]*c[1],l[2]*c[0]-l[0]*c[2],l[0]*c[1]-l[1]*c[0]];let h=(p,d,m)=>[p[0]+l[0]*n*d+f[0]*n*m,p[1]+l[1]*n*d+f[1]*n*m,p[2]+l[2]*n*d+f[2]*n*m],u=[[[1,-1],[1,1],l],[[1,1],[-1,1],f],[[-1,1],[-1,-1],l.map(p=>-p)],[[-1,-1],[1,-1],f.map(p=>-p)]];for(let[p,d,m]of u)t.quad(h(e,...p),h(o,...p),h(o,...d),h(e,...d),m,r,[[0,0],[i,0],[i,1],[0,1]])},t.lathe=(e,o,n,r,a)=>{let s=a||32,i=n.map(([c,f],l)=>{let v=n[Math.max(0,l-1)],h=n[Math.min(n.length-1,l+1)],u=h[0]-v[0],p=h[1]-v[1],d=Math.hypot(u,p)||1,m=p/d,g=-u/d,x=[];for(let b=0;b<=s;b++){let w=b/s*2*Xo;x.push(t.v([e+Math.cos(w)*c,f,o+Math.sin(w)*c],[Math.cos(w)*m,g,Math.sin(w)*m],r,[b/s*c*2*Xo,f]))}return x});for(let c=0;c<i.length-1;c++)for(let f=0;f<s;f++){let l=i[c][f],v=i[c][f+1],h=i[c+1][f+1],u=i[c+1][f];t.idx.push(l,u,h,l,h,v)}},t}var Ji=t=>Math.abs(t)>=ee.hw?null:ee.spring+Math.sqrt(ee.hw*ee.hw-t*t),tc=[["truss",yl[0],3.1],["truss",yl[1],5.4],["truss",yl[2],7.7],["rafter",Ho.rafter*2,1.7],["rafter",Ho.rafter*5,8.5],["rafter",Ho.rafter*8,13.6],["rafter",Ho.rafter*10,17],["ridge",Bt/2,.9]],uh=(t,e)=>.5*Math.sin(t*1.9+e)+.5*Math.sin(t*.77+e*1.3)>-.25,rM=t=>t<Bt/2?uo+i0*t:uo+i0*(Bt-t);function dh(t,e,o){return t==="truss"?[o,uo-.12,e]:t==="rafter"?[o,rM(o)-.2,e]:[e,s0-.32,o]}var ph=t=>t==="ridge"?[.4,lo-.4]:[.35,Bt-.35],Xr={w:1.72,spring:2.05,r:2.05,frame:.21,zl:lo-.05,zf:lo-.13};Xr.c=Xr.r-Xr.w/2;var k0=(t,e)=>{let o=Xr.r+(e||0),n=Math.abs(t)+Xr.c;return n>=o?Xr.spring:Xr.spring+Math.sqrt(o*o-n*n)};Xr.top=k0(0);function aM(t){let e=Bt/2,{w:o,frame:n,zl:r,zf:a}=Xr,s=o/2,i=s+n,c=.02;for(let M=-i;M<i-1e-6;M+=c){let A=M,$=Math.min(i,M+c),R=(A+$)/2,W=k0(A,n),H=k0($,n),D=0,C=0;Math.abs(R)<s&&(D=k0(A),C=k0($)),Math.abs(R)>=s;{let P=Math.abs(R)<s?D:0,nt=Math.abs(R)<s?C:0;t.quad([e+$,nt,a],[e+A,P,a],[e+A,W,a],[e+$,H,a],[0,0,-1],ft.DARKWOOD,[[$,nt],[A,P],[A,W],[$,H]])}t.quad([e+A,W,a],[e+A,W,lo],[e+$,H,lo],[e+$,H,a],[0,1,0],ft.DARKWOOD,[[A,0],[A,1],[$,1],[$,0]]),Math.abs(R)<s&&t.quad([e+A,D,a],[e+$,C,a],[e+$,C,r],[e+A,D,r],[0,-1,0],ft.DARKWOOD,[[A,0],[$,0],[$,1],[A,1]])}for(let M of[-1,1])t.quad([e+M*i,0,a],[e+M*i,0,lo],[e+M*i,Xr.spring,lo],[e+M*i,Xr.spring,a],[M,0,0],ft.DARKWOOD,[[0,0],[1,0],[1,1],[0,1]]),t.quad([e+M*s,0,a],[e+M*s,Xr.spring,a],[e+M*s,Xr.spring,r],[e+M*s,0,r],[-M,0,0],ft.DARKWOOD,[[0,0],[1,0],[1,1],[0,1]]),t.box(e+M*(s+n/2)-n/2-.04,0,a-.04,e+M*(s+n/2)+n/2+.04,.42,lo,ft.DARKWOOD);let f=40;for(let M=0;M<f;M++){let A=-s+2*s*M/f,$=-s+2*s*(M+1)/f;t.beam([e+A,k0(A)+.03,a-.015],[e+$,k0($)+.03,a-.015],.018,ft.DARKWOOD)}for(let M of[-1,1])t.beam([e+M*(s+.03),.42,a-.015],[e+M*(s+.03),Xr.spring+.02,a-.015],.018,ft.DARKWOOD);for(let M=-s;M<s-1e-6;M+=c){let A=M,$=Math.min(s,M+c),R=k0(A),W=k0($);t.quad([e+$,0,r],[e+A,0,r],[e+A,R,r],[e+$,W,r],[0,0,-1],ft.REDDOOR,[[$,0],[A,0],[A,R],[$,W]])}let l=s-.2,v=.3,h=2.12,u=r-.006,p=.05,d=(M,A,$,R)=>t.box(e+M,A,u-.018,e+$,R,u,ft.REDDOOR);d(-l,v,l,v+p),d(-l,h-p,l,h),d(-l,v,-l+p,h),d(l-p,v,l,h),t.box(e-l+.14,v+.14,u-.022,e+l-.14,h-.14,u,ft.REDDOOR);let m=2.36;d(-s+.08,h+.06,s-.08,h+.12);for(let M of[-1,1]){let $=s-.17;for(let R=.07;R<$-1e-6;R+=c){let W=R,H=Math.min($,R+c),D=k0(W,-.18),C=k0(H,-.18);if(D<=m+.02&&C<=m+.02)continue;let P=yt=>e+M*yt,nt=[[P(W),m,u+.004],[P(H),m,u+.004],[P(H),Math.max(m,C),u+.004],[P(W),Math.max(m,D),u+.004]];M>0?t.quad(nt[1],nt[0],nt[3],nt[2],[0,0,-1],ft.REDPANEL,[[H,0],[W,0],[W,1],[H,1]]):t.quad(...nt,[0,0,-1],ft.REDPANEL,[[W,0],[H,0],[H,1],[W,1]])}}t.beam([e,m-.02,u-.008],[e,k0(0,-.12),u-.008],.03,ft.REDDOOR),t.beam([e-s+.1,m-.01,u-.006],[e+s-.1,m-.01,u-.006],.014,ft.REDDOOR);let g=e-s+.15,x=1.06,b=u-.03;t.box(g-.034,x-.2,b-.008,g+.034,x+.17,b+.012,ft.BRASS);for(let[M,A]of[[x+.2,.026],[x+.235,.016],[x-.23,.026],[x-.265,.016]])t.lathe(g,b-.002,[[0,M-A],[A,M-A*.4],[A,M+A*.4],[0,M+A]],ft.BRASS,12);for(let M=0;M<6;M++){let A=x-.17+M*.065;for(let $ of[-1,1])t.beam([g+$*.034,A,b-.01],[g+$*.041,A+.03,b-.01],.006,ft.BRASS)}let w=b-.008,_=(M,A,$)=>{for(let R=0;R<$;R++){let W=Xo*R/$,H=Xo*(R+1)/$;for(let D=0;D<16;D++){let C=2*Xo*D/16,P=2*Xo*(D+1)/16,nt=(se,ge)=>[g+A*Math.sin(se)*Math.cos(ge),x+.03+A*Math.sin(se)*Math.sin(ge),M-A*Math.cos(se)],yt=(se,ge)=>[Math.sin(se)*Math.cos(ge),Math.sin(se)*Math.sin(ge),-Math.cos(se)],vt=t.v(nt(W,C),yt(W,C),ft.BRASS),st=t.v(nt(W,P),yt(W,P),ft.BRASS),it=t.v(nt(H,P),yt(H,P),ft.BRASS),qt=t.v(nt(H,C),yt(H,C),ft.BRASS);t.idx.push(vt,st,it,vt,it,qt)}}};t.beam([g,x+.03,w],[g,x+.03,w-.05],.011,ft.BRASS),_(w-.075,.034,10),t.box(g-.008,x-.1,b-.0125,g+.008,x-.06,b-.0085,ft.KEYHOLE)}function sM(t){let e=ec(77);for(let[o,n,r]of tc){let[a,s]=ph(o);for(let i=0;i<2;i++){let c=null;for(let f=a;f<=s;f+=.18){let l=dh(o,n,f),v=Math.sin(f*3.1+i*2+r)*.07,h=Math.cos(f*2.3+i+r)*.05,u=o==="ridge"?[l[0]+v,l[1]+h+.12,l[2]]:[l[0],l[1]+h+.12,l[2]+v];c&&(uh(f,r)||e()<.5)&&t.beam(c,u,.012+.008*e(),ft.WOOD),c=u}}}}function iM(t){let e=ec(4242),o=(r,a)=>!(r>Vt.x0-Vt.curb-.1&&r<Vt.x1+Vt.curb+.1&&a>Vt.z0-Vt.curb-.1&&a<Vt.z1+Vt.curb+.1)&&r>.2&&r<Bt-.2&&a>.3&&a<lo-.4,n=(r,a,s,i)=>{let c=.022+e()*.022,f=e()*2*Xo,l=Math.cos(f),v=Math.sin(f),h=(p,d)=>[r+(p*l-d*v)*c,a+.004*p*d,s+(p*v+d*l)*c],u=i?2:0;t.quad(h(-1,-1),h(-1,1),h(1,1),h(1,-1),[0,1,0],ft.BRACT,[[u,0],[u,1],[u+1,1],[u+1,0]])};for(let[r,a,s]of tc){let[i,c]=ph(r);for(let f=i;f<=c;f+=.05){if(!uh(f,s)||e()>.55)continue;let l=dh(r,a,f),v=l[0]+(e()-.5)*1.8,h=l[2]+(e()-.5)*1.8;o(v,h)&&n(v,.004,h,e()<.18)}}for(let r=0;r<260;r++){let a=Math.floor(e()*4),s,i;a<2?(s=a?Vt.x1+Vt.curb+.12+e()*e()*.9:Vt.x0-Vt.curb-.12-e()*e()*.9,i=Vt.z0+e()*(Vt.z1-Vt.z0)):(i=a===2?Vt.z0-Vt.curb-.12-e()*e()*.9:Vt.z1+Vt.curb+.12+e()*e()*.9,s=Vt.x0+e()*(Vt.x1-Vt.x0)),o(s,i)&&n(s,.004,i,e()<.18)}for(let r=0;r<70;r++){let a=Vt.x0+.08+e()*(Vt.x1-Vt.x0-.16),s=Vt.z0+.08+e()*(Vt.z1-Vt.z0-.16);Math.hypot(a-gr.x,s-gr.z)<.6||(t.float=[a,s,a*5.1+s*2.9],n(a,.016,s,e()<.2),t.float=null)}}function cM(t,e,o){let n=(r,a,s,i,c)=>{let f=t.pos.length/3,l=Math.cos(s),v=Math.sin(s),h=Math.cos(i),u=Math.sin(i),p=[l,0,-v],d=[v*u,h,l*u],m=[p[1]*d[2]-p[2]*d[1],p[2]*d[0]-p[0]*d[2],p[0]*d[1]-p[1]*d[0]],g=c?.95:o()*.8;for(let[x,b]of[[0,0],[1,0],[1,1],[0,1]]){let w=(x-.5)*a,_=(b-.5)*a;t.pos.push(r[0]+p[0]*w+d[0]*_+We[0],r[1]+p[1]*w+d[1]*_+We[1],r[2]+p[2]*w+d[2]*_+We[2]),t.nrm.push(...m),t.uv.push(x,b),t.shade.push(g),t.flower.push(1)}t.idx.push(f,f+1,f+2,f,f+2,f+3)};for(let[r,a,s]of tc){let[i,c]=ph(r);for(let f=i;f<=c;f+=.1){if(!uh(f,s))continue;let l=dh(r,a,f),v=()=>(o()-.5)*.7,h=4+Math.floor(o()*4);for(let u=0;u<h;u++){let p=r==="ridge"?[l[0]+v(),l[1]-o()*.25,l[2]+v()*.4]:[l[0]+v()*.4,l[1]-o()*.25,l[2]+v()];n(p,.42+o()*.4,o()*2*Xo,(o()-.5)*2.4,o()<.16)}for(let u=0;u<5;u++){let p=o()*2*Xo;e([l[0]+v()*.6,l[1]-o()*.2,l[2]+v()*.6],[Math.cos(p),-.3-o()*.5,Math.sin(p)],[-Math.sin(p),0,Math.cos(p)],.08+o()*.06,.1)}if(o()<.22){let u=.5+o()*2,p=[l[0],l[1],l[2]],d=[(o()-.5)*.08,(o()-.5)*.08];for(let m=0;m<u;m+=.13){p=[p[0]+d[0],p[1]-.13,p[2]+d[1]];let g=(.3+o()*.22)*(1-.4*m/u);if(n([p[0]+(o()-.5)*.08,p[1],p[2]+(o()-.5)*.08],g,o()*2*Xo,(o()-.5)*.8,o()<.15),o()<.6){let x=o()*2*Xo;e([p[0],p[1],p[2]],[Math.cos(x),-.6,Math.sin(x)],[-Math.sin(x),0,Math.cos(x)],.05+o()*.04,.1)}}}}}}var Og=(()=>{let t=ec(9001),e=[],o=[];for(let[r,a,s]of tc){let[i,c]=ph(r);for(let f=i;f<=c;f+=.1)uh(f,s)&&o.push(dh(r,a,f))}let n=o.filter(r=>r[0]>Vt.x0-.6&&r[0]<Vt.x1+.6&&r[2]>Vt.z0&&r[2]<Vt.z1);for(let r=0;r<64;r++){let a=r%2===0&&n.length?n:o,s=a[Math.floor(t()*a.length)];e.push({start:[s[0]+(t()-.5)*.4,s[1]-.25-t()*.3,s[2]+(t()-.5)*.4],period:18+t()*22,offset:t()*60,drift:[(t()-.5)*1.6,(t()-.5)*1.6],speed:.45+t()*.25,seed:t(),white:t()<.18?1:0})}return e})(),Wa=[Vt.x0+.06,Vt.z0+.06,Vt.x1-.06,Vt.z1-.06];function lM(t,e){let o=e+t.offset,n=Math.floor(o/t.period),r=o-n*t.period,a=.6+.4*Math.sin(n*1.7+t.seed*5),s=t.start[0]+t.drift[0]*a,i=t.start[2]+t.drift[1]*a,c=s>Wa[0]&&s<Wa[2]&&i>Wa[1]&&i<Wa[3],f=c?.017:.006,l=(t.start[1]-f)/t.speed;return{ph:r,Tf:l,lx:s,lz:i,inPool:c}}var xl=[{at:[Bt/2-.8,7.4],dir:.9,len:.52,kind:0,f:[.31,.17,.07],sip:21,first:9},{at:[Bt/2+.9,11.6],dir:3.6,len:.46,kind:1,f:[.23,.13,.05],sip:29,first:17},{at:[Bt/2-.3,12.8],dir:5.2,len:.41,kind:2,f:[.37,.11,.09],sip:25,first:4}],fM=[Vt.x0+.38,Vt.z0+.38,Vt.x1-.38,gr.z-.95];function hM(){let t=xl.map((a,s)=>({k:a,x:a.at[0],z:a.at[1],th:a.dir,w:0,v:.12,y:-.15,ph:s*2.1,pitch:0,nextSip:a.first,sipT:-1,kappa:0})),e=[],o=0,n=a=>Math.atan2(Math.sin(a),Math.cos(a));return{fish:t,events:e,step:a=>{o+=a;let s=o;for(let i of t){let{k:c}=i,f=.38*Math.sin(s*c.f[0]+c.dir*3)+.22*Math.sin(s*c.f[1]*2.3+1.7*c.kind)+.12*Math.sin(s*1.1+c.dir),l=.55+i.v*2.5,v=i.x+Math.cos(i.th)*l,h=i.z+Math.sin(i.th)*l,[u,p,d,m]=fM,g=Math.max(u-v,v-d,p-h,h-m,0);if(g>0){let _=(u+d)/2+Math.sin(s*.07+c.kind)*.6,M=(p+m)/2+Math.sin(s*.05+c.kind*2)*2,A=Math.atan2(M-i.z,_-i.x);f+=Math.sign(n(A-i.th))*Math.min(g*3,1.3)}for(let _ of t){if(_===i)continue;let M=_.x-i.x,A=_.z-i.z,$=Math.hypot(M,A);if($<.6){let R=Math.sign(n(Math.atan2(A,M)-i.th))||1;f-=R*(.6-$)*2*Math.max(0,Math.cos(Math.atan2(A,M)-i.th)+.3)}}f=Math.max(-1.3,Math.min(1.3,f)),i.w+=(f-i.w)*Math.min(a*1.6,1),i.th+=i.w*a;let x=.11+.08*Math.sin(s*c.f[2]+c.dir)+.05*Math.max(0,Math.sin(s*.19+c.kind*4)-.6)*4;i.sipT<0&&s>i.nextSip&&(i.sipT=0,i.nextSip=s+c.sip*(.7+.6*(Math.sin(s*12.9898+c.kind)*43758.5%1+1)%1));let b=-(.1+.09*(.5+.5*Math.sin(s*.043+c.dir*2)));if(i.sipT>=0){let _=i.sipT;i.sipT+=a;let M=Math.min(1,_/1.4)*(1-Math.max(0,Math.min(1,(_-2.4)/1.4)));b=b+(-.04-b)*M,x*=1-.65*M,_<1.5&&i.sipT>=1.5&&e.push([i.x+Math.cos(i.th)*.02,i.z+Math.sin(i.th)*.02,s,.9]),_<2.2&&i.sipT>=2.2&&e.push([i.x,i.z,s,.55]),i.sipT>3.8&&(i.sipT=-1)}i.v+=(Math.max(x,.03)-i.v)*Math.min(a*.9,1),i.x+=Math.cos(i.th)*i.v*a,i.z+=Math.sin(i.th)*i.v*a,i.x=Math.max(Vt.x0+.12,Math.min(Vt.x1-.12,i.x)),i.z=Math.max(Vt.z0+.12,Math.min(gr.z-.62,i.z));let w=(b-i.y)*Math.min(a*1.2,1);i.y+=w,i.pitch+=(Math.max(-.5,Math.min(.5,w/a/Math.max(i.v,.05)))-i.pitch)*Math.min(a*3,1),i.kappa=Math.max(-3.2,Math.min(3.2,i.w/Math.max(i.v,.09))),i.ph+=a*(3.2+32*i.v+2.5*Math.abs(i.w))}for(;e.length&&s-e[0][2]>10;)e.shift()},get t(){return o}}}function uM(){let t={loc:[],nrm:[],part:[],body:[],fins:[]},e=(h,u,p,d,m)=>(t.loc.push(h,u,p),t.nrm.push(d[0],d[1],d[2]),t.part.push(m),t.loc.length/3-1),o=.86,n=h=>{let u=Math.min(Math.max(h/o,0),1);return Math.pow(u,.42)*Math.pow(1-u*.93,.85)},r=0;for(let h=0;h<=100;h++)r=Math.max(r,n(h/100*o));let a=h=>.118*n(h)/r+.005,s=h=>.102*n(h)/r+.005,i=26,c=18,f=[];for(let h=0;h<=i;h++){let u=o*Math.pow(h/i,1.15),p=[];for(let d=0;d<c;d++){let m=d/c*Math.PI*2,g=Math.cos(m),x=Math.sin(m),b=a(u),w=s(u)*(x<0?.88:1),M=[-((a(u+.01)-a(Math.max(u-.01,0)))/.02)*.8,g/b,x/w],A=Math.hypot(M[0],M[1],M[2]);p.push(e(u,g*b,x*w,[M[0]/A,M[1]/A,M[2]/A],0))}f.push(p)}let l=e(-.006,0,0,[-1,0,0],0);for(let h=0;h<c;h++)t.body.push(l,f[0][(h+1)%c],f[0][h]);for(let h=0;h<i;h++)for(let u=0;u<c;u++){let p=f[h][u],d=f[h][(u+1)%c],m=f[h+1][(u+1)%c],g=f[h+1][u];t.body.push(p,d,m,p,m,g)}let v=(h,u,p,d)=>{let m=t.loc.length/3;for(let g=0;g<=u;g++)for(let x=0;x<=p;x++){let b=d(g/u,x/p);e(b[0],b[1],b[2],b[3],h)}for(let g=0;g<u;g++)for(let x=0;x<p;x++){let b=m+g*(p+1)+x,w=b+1,_=b+p+2,M=b+p+1;t.fins.push(b,w,_,b,_,M)}};v(1,8,10,(h,u)=>{let p=u*2-1;return[.8+h*(.25+.09*p*p),0,p*(.02+h*.13),[0,1,0]]}),v(2,10,3,(h,u)=>{let p=.3+h*.4,d=s(p);return[p+u*.05,0,d-.004+u*.055*Math.sin(Math.PI*Math.pow(h,.7))*(1.15-h*.6),[0,1,0]]});for(let h of[-1,1])v(3,4,4,(u,p)=>[.2+p*.07+u*.08,h*(a(.22)*.8+u*.12),-s(.22)*.55-u*.035,[0,0,1]]);for(let h of[-1,1])v(4,3,3,(u,p)=>[.5+p*.05+u*.06,h*(a(.5)*.45+u*.05),-s(.5)*.85-u*.03,[0,0,1]]);return t}function dM(){let t=qg();{let e=Vt.x0-Vt.curb,o=Vt.x1+Vt.curb,n=Vt.z0-Vt.curb,r=Vt.z1+Vt.curb,a=[[0,0,Bt,n],[0,r,Bt,lo],[0,n,e,r],[o,n,Bt,r]];for(let[s,i,c,f]of a)for(let v=s;v<c-1e-6;v+=1)for(let h=i;h<f-1e-6;h+=1){let u=v,p=Math.min(c,v+1),d=h,m=Math.min(f,h+1);t.quad([u,0,d],[u,0,m],[p,0,m],[p,0,d],[0,1,0],ft.FLOOR,[[u,d],[u,m],[p,m],[p,d]])}}for(let e of[0,1]){let o=e?Bt:0,n=e?Bt+hr:-hr,r=e?[-1,0,0]:[1,0,0],a=.04;for(let d=0;d<lo-1e-6;d+=a){let m=d,g=Math.min(lo,d+a),x=(m+g)/2,b=null;if(!e)for(let _ of ee.c)Ji(x-_)!==null&&(b=[ee.sill,Math.min(Ji(m-_)||ee.spring,Ji(g-_)||ee.spring)]);let w=b?[[0,b[0]],[b[1],uo]]:[[0,uo]];for(let[_,M]of w)M<=_||(e?t.quad([o,_,g],[o,_,m],[o,M,m],[o,M,g],r,ft.PLASTER,[[g,_],[m,_],[m,M],[g,M]]):t.quad([o,_,m],[o,_,g],[o,M,g],[o,M,m],r,ft.PLASTER,[[m,_],[g,_],[g,M],[m,M]]))}if(!e)for(let d of ee.c){for(let b of[-1,1]){let w=d+b*ee.hw,_=[0,0,-b],M=[o,ee.sill,w],A=[n,ee.sill,w],$=[n,ee.spring,w],R=[o,ee.spring,w];b>0!=!!e?t.quad(M,A,$,R,_,ft.PLASTER,[[0,ee.sill],[hr,ee.sill],[hr,ee.spring],[0,ee.spring]]):t.quad(R,$,A,M,_,ft.PLASTER,[[0,ee.spring],[hr,ee.spring],[hr,ee.sill],[0,ee.sill]])}let m=28;for(let b=0;b<m;b++){let w=b/m*Xo,_=(b+1)/m*Xo,M=d+Math.cos(w)*ee.hw,A=d+Math.cos(_)*ee.hw,$=ee.spring+Math.sin(w)*ee.hw,R=ee.spring+Math.sin(_)*ee.hw,W=[0,-Math.sin((w+_)/2),-Math.cos((w+_)/2)];e?t.quad([o,$,M],[n,$,M],[n,R,A],[o,R,A],W,ft.PLASTER,[[0,w],[hr,w],[hr,_],[0,_]]):t.quad([o,R,A],[n,R,A],[n,$,M],[o,$,M],W,ft.PLASTER,[[0,_],[hr,_],[hr,w],[0,w]])}let g=e?Bt-.08:-hr,x=e?Bt+hr:.08;t.box(g,ee.sill-.09,d-ee.hw-.12,x,ee.sill,d+ee.hw+.12,ft.STONE)}let s=e?Bt:0,i=e?-1:1,c=[.6,...ee.c.slice(1).map((d,m)=>(d+ee.c[m])/2),lo-.6];for(let d of c){let m=Math.min(s,s+i*.14),g=Math.max(s,s+i*.14);t.box(m,0,d-.34,g,uo-.7,d+.34,ft.STONE,{bottom:!0});let x=Math.min(s,s+i*.24),b=Math.max(s,s+i*.24);t.box(x,0,d-.44,b,.55,d+.44,ft.STONE,{bottom:!0}),t.box(x,uo-.95,d-.46,b,uo-.7,d+.46,ft.STONE)}let f=Math.min(s,s+i*.05),l=Math.max(s,s+i*.05);t.box(f,0,0,l,.22,lo,ft.STONE,{bottom:!0});let v=Math.min(s,s+i*.32),h=Math.max(s,s+i*.32);t.box(v,uo-.55,0,h,uo-.3,lo,ft.STONE);let u=Math.min(s,s+i*.42),p=Math.max(s,s+i*.42);t.box(u,uo-.3,0,p,uo-.12,lo,ft.STONE)}for(let[e,o]of[[0,1],[lo,-1]]){for(let c=0;c<32;c++){let f=c/32*Bt,l=(c+1)/32*Bt,v=u=>u<Bt/2?uo+i0*u:uo+i0*(Bt-u),h=o>0?[[l,0],[f,0],[f,v(f)],[l,v(l)]]:[[f,0],[l,0],[l,v(l)],[f,v(f)]];t.quad(...h.map(([u,p])=>[u,p,e]),[0,0,o],ft.PLASTER,h.map(([u,p])=>[u,p]))}let r=o>0?0:lo-.05,a=o>0?.05:lo;t.box(0,0,r,Bt,.22,a,ft.STONE,{bottom:!0});let s=o>0?0:lo-.32,i=o>0?.32:lo;t.box(0,uo-.55,s,Bt,uo-.3,i,ft.STONE)}{let o=Bt/2-1.1,n=Bt/2+1.1,r=3.9;t.box(o-.3,0,0,o,r+.3,.12,ft.STONE),t.box(n,0,0,n+.3,r+.3,.12,ft.STONE),t.box(o-.3,r,0,n+.3,r+.4,.14,ft.STONE);for(let[a,s]of[[o,Bt/2-.01],[Bt/2+.01,n]])t.box(a,0,.02,s,r,.02+.06,ft.WOOD),t.box(a+.12,.3,.02+.06,s-.12,1.7,.02+.09,ft.WOOD),t.box(a+.12,2,.02+.06,s-.12,r-.2,.02+.09,ft.WOOD)}aM(t);{let{x0:e,x1:o,z0:n,z1:r,curb:a,top:s}=Vt,i=.06,c=.08;t.box(e-a,0,n-a,e,s-c,r+a,ft.WMARBLE,{bottom:!0}),t.box(o,0,n-a,o+a,s-c,r+a,ft.WMARBLE,{bottom:!0}),t.box(e,0,n-a,o,s-c,n,ft.WMARBLE,{bottom:!0}),t.box(e,0,r,o,s-c,r+a,ft.WMARBLE,{bottom:!0}),t.box(e-a-i,s-c,n-a-i,e+i*.5,s,r+a+i,ft.WMARBLE),t.box(o-i*.5,s-c,n-a-i,o+a+i,s,r+a+i,ft.WMARBLE),t.box(e+i*.5,s-c,n-a-i,o-i*.5,s,n+i*.5,ft.WMARBLE),t.box(e+i*.5,s-c,r-i*.5,o-i*.5,s,r+a+i,ft.WMARBLE);let f=.5;for(let u=e;u<o-1e-6;u+=f)for(let p=n;p<r-1e-6;p+=f){let d=u,m=Math.min(o,u+f),g=p,x=Math.min(r,p+f);t.quad([d,0,g],[d,0,x],[m,0,x],[m,0,g],[0,1,0],ft.WATER,[[d,g],[d,x],[m,x],[m,g]])}let{x:l,z:v,plinth:h}=gr;t.box(l-.42,0,v-.42,l+.42,h-.12,v+.42,ft.WMARBLE,{bottom:!0}),t.box(l-.5,h-.12,v-.5,l+.5,h,v+.5,ft.WMARBLE),t.box(l-.48,0,v-.48,l+.48,.12,v+.48,ft.WMARBLE,{bottom:!0})}return t}function pM(t){for(let o of[0]){let n=o?Bt+hr*.5:-hr*.5,r=.05,a=Ir.w*.5;for(let s of ee.c){for(let i of Ir.cols){let c=Ji(i)-.01;t.box(n-r,ee.sill,s+i-a,n+r,c,s+i+a,ft.STEEL)}for(let i=ee.sill+Ir.rowH;i<ee.spring+.01;i+=Ir.rowH)t.box(n-r,i-a,s-ee.hw,n+r,i+a,s+ee.hw,ft.STEEL);for(let[i,c]of[[ee.hw-.03,.06],[Ir.ring,a]])for(let l=0;l<24;l++){let v=l/24*Xo,h=(l+1)/24*Xo;t.beam([n,ee.spring+Math.sin(v)*i,s+Math.cos(v)*i],[n,ee.spring+Math.sin(h)*i,s+Math.cos(h)*i],c,ft.STEEL,[1,0,0])}for(let i of[-1,1])t.box(n-r,ee.sill,s+i*(ee.hw-.03)-.03,n+r,ee.spring,s+i*(ee.hw-.03)+.03,ft.STEEL);t.box(n-r,ee.sill,s-ee.hw,n+r,ee.sill+.06,s+ee.hw,ft.STEEL)}}let e=o=>o<Bt/2?uo+i0*o:uo+i0*(Bt-o);for(let o=0;o<=12;o++){let n=o*Ho.rafter;for(let[r,a]of[[-.3,Bt/2],[Bt/2,Bt+.3]])t.beam([r,e(Math.max(0,Math.min(Bt,r)))-.1,n],[a,e(a)-.1,n],.06,ft.STEEL)}for(let o=Ho.purlin;o<Bt/2-.2;o+=Ho.purlin)for(let n of[o,Bt-o])t.beam([n,e(n)-.06,-.2],[n,e(n)-.06,lo+.2],.035,ft.STEEL);t.beam([Bt/2,s0-.14,-.2],[Bt/2,s0-.14,lo+.2],.12,ft.STEEL);for(let o of[.05,Bt-.05])t.beam([o,uo-.05,0],[o,uo-.05,lo],.1,ft.STEEL);for(let o of yl){t.box(-.05,uo-.13,o-.08,Bt+.05,uo+.13,o+.08,ft.STEEL),t.beam([Bt/2,uo,o],[Bt/2,s0-.2,o],.07,ft.STEEL);for(let n of[-1,1])t.beam([Bt/2+n*Bt/4,uo,o],[Bt/2,s0-.4,o],.055,ft.STEEL),t.beam([Bt/2+n*Bt/4,uo,o],[Bt/2+n*Bt/4,e(Bt/2+n*Bt/4)-.2,o],.045,ft.STEEL),t.beam([Bt/2+n*(Bt/2-.1),uo,o],[Bt/2+n*Bt/4,e(Bt/2+n*Bt/4)-.2,o],.045,ft.STEEL);for(let n of[-1,1])t.box(Bt/2+n*Bt/4-.12,uo-.18,o-.1,Bt/2+n*Bt/4+.12,uo+.18,o+.1,ft.STEEL)}}function vM(t){let e=ec(311),o=[],n=[[Vt.x0+.9,6.6,.9,10],[Vt.x1-.8,8.4,.85,9],[Vt.x0+.8,10.6,.8,8],[Vt.x1-.9,12.4,.9,10],[Vt.x0+1,13.9,.65,6],[Bt/2+.2,9.6,.5,4],[Vt.x1-.7,15.9,.55,5]];for(let[a,s,i,c]of n)for(let f=0;f<c;f++)for(let l=0;l<40;l++){let v=e()*2*Xo,h=i*Math.sqrt(e()),u=a+Math.cos(v)*h,p=s+Math.sin(v)*h,d=.15+e()*.17;if(!(u-d<Vt.x0+.04||u+d>Vt.x1-.04||p-d<Vt.z0+.04||p+d>Vt.z1-.04)&&!(Math.hypot(u-gr.x,p-gr.z)<.62+d)&&!o.some(m=>Math.hypot(m[0]-u,m[1]-p)<(m[2]+d)*.93)){o.push([u,p,d,e()*2*Xo,e()]);break}}for(let[a,s,i,c,f]of o){t.float=[a,s,f*7.3+i*13];let l=30,v=.34+f*.1,h=t.v([a,.012,s],[0,1,0],ft.PAD,[.5,f]),u=null;for(let p=0;p<=l;p++){let d=c+v/2+(2*Xo-v)*p/l,m=i*(1+.03*Math.sin(d*7+f*10)),g=t.v([a+Math.cos(d)*m,.012+.008*Math.sin(d*3+f*9),s+Math.sin(d)*m],[0,1,0],ft.PAD,[1,f]);u!==null&&t.idx.push(h,u,g),u=g}u=null;for(let p=0;p<=l;p++){let d=c+v/2+(2*Xo-v)*p/l,m=i*(1+.03*Math.sin(d*7+f*10)),g=[a+Math.cos(d)*m,.012,s+Math.sin(d)*m],x=[a+Math.cos(d)*(m+.012),.03,s+Math.sin(d)*(m+.012)],b=t.v(g,[Math.cos(d),.4,Math.sin(d)],ft.PAD,[1.2,f]),w=t.v(x,[Math.cos(d),.4,Math.sin(d)],ft.PAD,[1.2,f]);u&&t.idx.push(u[0],b,w,u[0],w,u[1]),u=[b,w]}}t.float=null;let r=[[Vt.x0+.75,6.9,1],[Vt.x1-.65,8.1,.85],[Vt.x1-.95,12.6,1.1],[Vt.x0+.95,10.3,.8],[Vt.x1-.55,15.6,.9],[Vt.x0+1.15,13.7,.75]];for(let[a,s,i]of r){t.float=[a,s,a*3.7+s*1.3];let c=.17;[[12,1,70],[10,.86,48],[8,.66,26]].forEach(([l,v,h],u)=>{for(let p=0;p<l;p++){let d=2*Xo*p/l+u*.33,m=(90-(90-h)*i)*Xo/180,g=6,x=4,b=[];for(let w=0;w<=g;w++){let _=w/g,M=Math.sin(Xo*Math.pow(_,.8))*.42*v*c,A=[];for(let $=0;$<=x;$++){let R=$/x*2-1,W=R*M,H=Math.abs(R)*Math.abs(R)*.12*v*c,D=_*v*c,C=D*Math.cos(m),P=D*Math.sin(m)+H,nt=a+Math.cos(d)*C-Math.sin(d)*W,yt=s+Math.sin(d)*C+Math.cos(d)*W;A.push(t.v([nt,.03+P,yt],[-Math.cos(d)*Math.sin(m)*.6,.8,-Math.sin(d)*Math.sin(m)*.6],ft.PETAL,[_,(R+1)/2]))}b.push(A)}for(let w=0;w<g;w++)for(let _=0;_<x;_++){let M=b[w][_],A=b[w][_+1],$=b[w+1][_+1],R=b[w+1][_];t.idx.push(M,A,$,M,$,R,M,$,A,M,R,$)}}}),t.lathe(a,s,[[0,.03+.05*c*4],[.025,.03+.045*c*4],[.032,.035],[0,.03]],ft.STAMEN,12)}t.float=null}function mM(t){let e=ec(907);{t.box(1.25-.48,.86-.06,11.1-1.35,1.25+.48,.86,11.1+1.35,ft.WOOD);for(let i of[-1,1])for(let c of[-1,1])t.box(1.25+i*(.48-.08)-.04,0,11.1+c*(1.35-.1)-.04,1.25+i*(.48-.08)+.04,.86-.06,11.1+c*(1.35-.1)+.04,ft.WOOD);t.box(1.25-.48+.06,.16,11.1-1.35+.1,1.25+.48-.06,.19,11.1+1.35-.1,ft.WOOD);for(let i=0;i<11;i++){let c=1.25+(e()-.5)*.6,f=11.1+(e()-.5)*2.2,l=.035+e()*.04,v=.09+e()*.14;if(t.lathe(c,f,[[0,.86],[l,.86],[l*1.02,.86+v*.9],[l*.9,.86+v],[0,.86+v]],i%3?ft.JAR:ft.POT,14),i%3===0)for(let h=0;h<7;h++){let u=e()*2*Xo,p=.28+e()*.12,d=.12+e()*.2;t.beam([c,.86+.03,f],[c+Math.cos(u)*d*p,.86+.03+p,f+Math.sin(u)*d*p],.0055,ft.BRUSH)}}t.box(1.25-.3,.86,11.1+.7,1.25+.15,.86+.02,11.1+1.15,ft.WOOD)}for(let o=0;o<5;o++){let n=.55+e()*.6,r=.75+e()*.8,a=19.3+o*.16,s=.25+o*.07,i=.17,c=[s+r*Math.sin(i)*0,r,a];t.quad([s+.18,0,a-n/2],[s+.18,0,a+n/2],[s+.18-r*Math.sin(i),r*Math.cos(i),a+n/2],[s+.18-r*Math.sin(i),r*Math.cos(i),a-n/2],[Math.cos(i),Math.sin(i),0],o%2?ft.WOOD:ft.GESSO,[[0,0],[1,0],[1,1],[0,1]])}for(let o of Dg)t.beam([o[0],uo,o[2]],[o[0],o[1]+.05,o[2]],.008,ft.STEEL),t.lathe(o[0],o[2],[[.04,o[1]+.06],[.06,o[1]+.02],[.16,o[1]-.09],[.29,o[1]-.22],[.33,o[1]-.28],[.32,o[1]-.285]],ft.SHADE,32),t.lathe(o[0],o[2],[[0,o[1]-.25],[.06,o[1]-.2],[0,o[1]-.12]],ft.BULB,12)}var Dg=[[4.2,4.6,7.33],[11.8,4.6,7.33],[4.2,4.6,16.5],[11.8,4.6,16.5]],VA=[[Vt.x0-1,Vt.z0-1,1],[Vt.x1+1,Vt.z0-1,.95],[Vt.x0-1,Vt.z1+1,1.15],[Vt.x1+1,Vt.z1+1,1.1],[.9,1.3,1.25],[Bt-.9,lo-1.2,1.3]],Pg=[[0,0,.16,.5],[.16,0,.34,.4],[.35,0,.5,.36],[.5,0,.66,.38],[.68,0,.84,.42],[0,.6,.19,1],[.2,.57,.36,1],[.41,.6,.58,1]];function gM(){let t={pos:[],nrm:[],uv:[],shade:[],flower:[],idx:[]},e=ec(1213),o=(n,r,a,s,i)=>{let c=Pg[Math.floor(e()*Pg.length)],f=(c[2]-c[0])/(c[3]-c[1]),l=s*f*1,v=5,h=t.pos.length/3,u=.6+e()*.4;for(let p=0;p<=v;p++){let d=p/v,m=i*d*d*s,g=[n[0]+r[0]*d*s,n[1]+r[1]*d*s-m,n[2]+r[2]*d*s];for(let x of[-.5,.5]){t.pos.push(g[0]+a[0]*x*l+We[0],g[1]+a[1]*x*l-Math.abs(x)*.08*l+We[1],g[2]+a[2]*x*l+We[2]);let b=[r[1]*a[2]-r[2]*a[1],r[2]*a[0]-r[0]*a[2],r[0]*a[1]-r[1]*a[0]],w=Math.hypot(...b)||1;t.nrm.push(b[0]/w,Math.abs(b[1]/w)+.2,b[2]/w),t.uv.push(x<0?c[0]:c[2],c[3]-(c[3]-c[1])*d),t.shade.push(u),t.flower.push(0)}}for(let p=0;p<v;p++){let d=h+p*2;t.idx.push(d,d+1,d+3,d,d+3,d+2)}};cM(t,o,e);for(let[n,r,a]of[[Vt.x0-.3,Vt.z0-.3,-1],[Vt.x1+.3,Vt.z1+.3,1],[Vt.x0-.3,Vt.z1+.2,-1]])for(let s=0;s<26;s++){let i=e()*2*Xo,c=n+(e()-.3)*.5*-a,f=r+(e()-.5)*.8,l=Vt.top+.01-Math.max(0,Math.abs(c-n)-.1)*.6*e();o([c,Math.max(.05,l),f],[Math.cos(i),-.15,Math.sin(i)],[-Math.sin(i),0,Math.cos(i)],.08+e()*.05,.12)}return t}function xM(){let t=qg();for(let o of[0]){let n=o?Bt+hr*.5+.01:-hr*.5-.01,r=o?[-1,0,0]:[1,0,0];for(let a of ee.c)for(let i=a-ee.hw;i<a+ee.hw-1e-6;i+=.05){let c=i,f=Math.min(a+ee.hw,i+.05),l=Ji(c-a+1e-4)||ee.spring,v=Ji(f-a-1e-4)||ee.spring;o?t.quad([n,ee.sill,f],[n,ee.sill,c],[n,l,c],[n,v,f],r,0,[[f,ee.sill],[c,ee.sill],[c,l],[f,v]]):t.quad([n,ee.sill,c],[n,ee.sill,f],[n,v,f],[n,l,c],r,0,[[c,ee.sill],[f,ee.sill],[f,v],[c,l]])}}let e=Math.hypot(i0,1);return t.quad([0,uo+.002,lo],[0,uo+.002,0],[Bt/2,s0+.002,0],[Bt/2,s0+.002,lo],[i0/e,-1/e,0].map(o=>-o).map((o,n)=>n===1?-Math.abs(o):o),1,[[0,lo],[0,0],[Bt/2,0],[Bt/2,lo]]),t.quad([Bt,uo+.002,0],[Bt,uo+.002,lo],[Bt/2,s0+.002,lo],[Bt/2,s0+.002,0],[-i0/e,-1/e,0],1,[[Bt,0],[Bt,lo],[Bt/2,lo],[Bt/2,0]]),t}var yM=`
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
`,bM=Dg.map(t=>Vu([t[0],t[1]-.22,t[2]])),Zi=`
	${yM}
	${Fg()}

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
		vec3 p = pw - vec3(${At(We[0])}, ${At(We[1])}, ${At(We[2])});
		float vis = studioSun(pw + N * 0.03);
		sunVis = vis;
		vec3 sunC = mix(vec3(1.0, 0.88, 0.70) * 3.9, vec3(0.50, 0.64, 1.0) * 1.35, night);
		float lam = max(dot(N, STUDIO_SUN), 0.0);
		vec3 col = sunC * vis * lam;
		vec3 Hh = normalize(STUDIO_SUN + V);
		spec = sunC * vis * pow(max(dot(N, Hh), 0.0), mix(16.0, 400.0, gloss)) * mix(0.04, 1.0, gloss) * (lam > 0.0 ? 1.0 : 0.0);

		// skylight: the roof is glass, the walls are full of windows
		float upF = 0.5 + 0.5 * N.y;
		float hgt = clamp(p.y / ${At(uo)}, 0.0, 1.0);
		// corners and the foot of the walls get less of the sky
		float dw = min(min(p.x, ${At(Bt)} - p.x), min(p.z, ${At(lo)} - p.z));
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
			${bM.map(t=>`
			{
				vec3 d = vec3(${At(t[0])}, ${At(t[1])}, ${At(t[2])}) - pw;
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
`;function wM(t){let e=new DataView(t),o=e.getUint32(4,!0),n=e.getUint32(8,!0),r=[],a=[];for(let l=0;l<3;l++)r.push(e.getFloat32(12+l*4,!0)),a.push(e.getFloat32(24+l*4,!0));let s=36,i=new Uint16Array(t,s,o*3);s+=o*6;let c=new Uint16Array(t,s,n);s+=n*2;let f=new Int8Array(t,s,o*3);return{nV:o,nI:n,mn:r,sz:a,pos:i,idx:c,nrm:f}}function _M(t,e){let o=t.texture({data:[[[0,0,0,0]]],min:"linear",mag:"linear"}),n={tex:o,ready:!1};return fetch(e).then(r=>{if(!r.ok)throw new Error("Could not load "+e);return r.blob()}).then(r=>createImageBitmap(r,{premultiplyAlpha:"none"}).catch(()=>new Promise((a,s)=>{let i=new Image;i.onload=()=>a(i),i.onerror=s,i.src=URL.createObjectURL(r)}))).then(r=>{o({data:r,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear"}),n.ready=!0}).catch(r=>console.error(r)),n}var bl=8,MM=.3,wl=`
	uniform float stime;
	uniform vec4 ripples[${bl}];
	// the height of the water at world xz (metres, tiny)
	float poolHeight(vec2 xz) {
		float h = 0.0025 * sin(xz.x * 2.1 + stime * 0.55) * sin(xz.y * 1.7 - stime * 0.43)
		        + 0.0015 * sin(xz.x * 3.7 - xz.y * 2.9 + stime * 0.8);
		for (int i = 0; i < ${bl}; i++) {
			vec4 r = ripples[i];
			if (r.w <= 0.0) continue;
			float d = length(xz - r.xy);
			float x = d - r.z * ${At(MM)};
			// a packet of a few rings, fading as it spreads
			float env = exp(-x * x * 30.0) * exp(-r.z * 0.38) * r.w / (1.0 + d * 3.0);
			h += 0.009 * sin(x * 42.0) * env;
		}
		return h;
	}
`,Ig=`
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
	${wl}
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
	}`,kM=`
	precision highp float;
	uniform float night, time, yScale, mirrorOn;
	${wl}
	varying vec3 v_pos, v_nrm, v_eye;
	varying float v_kind;
	varying vec2 v_uv;
	${Zi}

	bool is(float k) { return abs(v_kind - k) < 0.5; }

	void main() {
		vec3 pw = v_pos;
		vec3 p = pw - vec3(${At(We[0])}, ${At(We[1])}, ${At(We[2])});
		vec3 V = normalize(v_eye - pw);
		vec3 N = normalize(v_nrm);
		if (dot(N, V) < 0.0 && !is(${ft.PETAL}.0)) N = -N;
		if (is(${ft.PETAL}.0) && dot(N, V) < 0.0) N = -N;

		// in the reflection under the floor, the floor and the water are not drawn
		bool floorish = is(${ft.FLOOR}.0) || is(${ft.WATER}.0);
		if (yScale < 0.0 && floorish) discard;

		// fallen bracts: little papery hearts, pink or white
		if (is(${ft.BRACT}.0)) {
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

		if (is(${ft.PLASTER}.0) || is(${ft.NICHE}.0)) {
			// old lime plaster: warm, patchy, with a soft trowelled bloom
			float big = fbm3(p * vec3(0.35, 0.45, 0.35));
			float mid = fbm3(p * 1.6 + 3.0);
			float fine = vnoise3(p * 14.0);
			vec3 a = vec3(0.70, 0.60, 0.47), b = vec3(0.84, 0.76, 0.63);
			base = mix(a, b, smoothstep(0.3, 0.7, big));
			base *= 0.86 + 0.22 * mid + 0.05 * fine;
			// damp stains low down, soot high up
			base *= mix(0.86, 1.0, smoothstep(0.0, 1.4, p.y + 0.6 * mid));
			base *= mix(1.0, 0.9, smoothstep(${At(uo-2)}, ${At(uo)}, p.y));
			// where the plaster has come away, old brick shows through
			float bare = smoothstep(0.70, 0.74, fbm3(p * vec3(0.5, 0.8, 0.5) + 11.0)) * smoothstep(0.4, 1.6, p.y) * 0.85;
			vec2 bk = (abs(N.x) > 0.5 ? p.zy : p.xy) * vec2(1.0 / 0.23, 1.0 / 0.075);
			bk.x += floor(bk.y) * 0.5;
			float mortar = max(smoothstep(0.9, 0.97, fract(bk.x)), smoothstep(0.82, 0.92, fract(bk.y)));
			vec3 brick = mix(vec3(0.55, 0.30, 0.20), vec3(0.42, 0.25, 0.18), vnoise3(vec3(floor(bk), 0.0) * 0.7)) * (0.85 + 0.3 * hash13(vec3(floor(bk), 1.0)));
			brick = mix(brick, vec3(0.62, 0.58, 0.52), mortar);
			base = mix(base, brick, bare);
			if (is(${ft.NICHE}.0)) base *= 0.55;
			gloss = 0.04;
		} else if (is(${ft.STONE}.0)) {
			float n = fbm3(p * vec3(1.2, 2.5, 1.2));
			base = mix(vec3(0.72, 0.66, 0.56), vec3(0.84, 0.79, 0.70), n) * (0.92 + 0.12 * vnoise3(p * 20.0));
			gloss = 0.12;
		} else if (is(${ft.TRAVERTINE}.0)) {
			// travertine: bands, little holes, a warm cream
			float band = fbm3(vec3(p.x * 0.4, p.y * 9.0 + fbm3(p * 1.5) * 2.0, p.z * 0.4));
			base = mix(vec3(0.73, 0.65, 0.53), vec3(0.88, 0.82, 0.72), band);
			float pit = smoothstep(0.84, 0.9, vnoise3(p * 55.0));
			base *= 1.0 - pit * 0.18;
			// wet and darker just above the water
			base *= mix(0.78, 1.0, smoothstep(0.0, 0.12, p.y));
			gloss = 0.18;
		} else if (is(${ft.STEEL}.0)) {
			base = vec3(0.035, 0.036, 0.038) * (0.8 + 0.4 * vnoise3(p * 3.0));
			gloss = 0.45;
		} else if (is(${ft.FLOOR}.0)) {
			// the gallery's own floor: polished chequered marble, black and
			// dark cream, laid on the diagonal, with fine veins and hair-line
			// grout, the polish duller where people walk
			vec2 tq = mat2(0.70711, 0.70711, -0.70711, 0.70711) * (p.xz - vec2(${At(Bt/2)}, 0.0));
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
			aoK = mix(0.62, 1.0, smoothstep(0.0, 0.9, min(min(p.x, ${At(Bt)} - p.x), min(p.z, ${At(lo)} - p.z))));
			// the curb throws a soft shadow round the pool
			vec2 dq = max(vec2(${At(Vt.x0-Vt.curb)} - p.x, p.x - ${At(Vt.x1+Vt.curb)}), vec2(${At(Vt.z0-Vt.curb)} - p.z, p.z - ${At(Vt.z1+Vt.curb)}));
			float dpool = max(max(dq.x, dq.y), 0.0);
			aoK *= mix(0.7, 1.0, smoothstep(0.0, 0.4, dpool));
		} else if (is(${ft.WMARBLE}.0)) {
			// white statuary marble, polished: a soft grey cloud and fine veins
			float cl = fbm3(p * 1.4 + 2.0);
			float v1 = abs(sin(p.x * 3.1 + p.z * 1.7 + p.y * 5.0 + cl * 7.0));
			float vein = (1.0 - smoothstep(0.0, 0.05, v1)) * 0.7 + (1.0 - smoothstep(0.0, 0.02, abs(sin(p.z * 6.3 - p.x * 2.2 + cl * 11.0)))) * 0.3;
			base = mix(vec3(0.68, 0.68, 0.66), vec3(0.76, 0.76, 0.74), cl);
			base = mix(base, vec3(0.50, 0.51, 0.52), vein * 0.45);
			base *= mix(0.8, 1.0, smoothstep(0.0, 0.1, p.y));
			gloss = 0.88;
		} else if (is(${ft.REDDOOR}.0) || is(${ft.REDPANEL}.0)) {
			// deep crimson paint over wood: a soft sheen, the grain just showing
			float grain = vnoise3(vec3(p.x * 40.0, p.y * 2.0, p.z * 40.0));
			base = vec3(0.30, 0.022, 0.026) * (0.88 + 0.2 * grain);
			if (is(${ft.REDPANEL}.0)) base *= 0.55;
			gloss = 0.62;
		} else if (is(${ft.DARKWOOD}.0)) {
			float grain = vnoise3(vec3(p.x * 3.0, p.y * 45.0, p.z * 3.0));
			base = mix(vec3(0.030, 0.019, 0.014), vec3(0.062, 0.040, 0.028), grain);
			gloss = 0.35;
		} else if (is(${ft.BRASS}.0)) {
			base = vec3(0.60, 0.44, 0.17) * (0.85 + 0.25 * vnoise3(p * 90.0));
			gloss = 0.78;
		} else if (is(${ft.KEYHOLE}.0)) {
			base = vec3(0.004);
		} else if (is(${ft.BRACT}.0)) {
			float white = step(1.5, v_uv.x);
			base = mix(vec3(0.62, 0.03, 0.22), vec3(0.86, 0.80, 0.80), white) * (0.8 + 0.3 * hash13(floor(p * 30.0)));
			sss = 0.5;
		} else if (is(${ft.WATER}.0)) {
			base = vec3(0.012, 0.018, 0.014);
			gloss = 1.0;
		} else if (is(${ft.PAD}.0)) {
			float sh = v_uv.y;
			vec2 q = (p.xz) * 9.0;
			float veins = smoothstep(0.85, 1.0, abs(sin(atan(q.y, q.x) * 9.0)));
			base = mix(vec3(0.10, 0.20, 0.05), vec3(0.28, 0.36, 0.10), sh) * (0.85 + 0.25 * vnoise3(vec3(p.xz * 18.0, sh)));
			base = mix(base, vec3(0.45, 0.22, 0.10), smoothstep(1.1, 1.2, v_uv.x) * 0.7);
			base *= 1.0 - veins * 0.12;
			gloss = 0.55;
		} else if (is(${ft.PETAL}.0)) {
			base = mix(vec3(0.98, 0.90, 0.92), vec3(0.86, 0.36, 0.62), smoothstep(0.2, 1.0, v_uv.x));
			sss = 0.6;
			gloss = 0.25;
		} else if (is(${ft.STAMEN}.0)) {
			base = vec3(0.95, 0.66, 0.12);
			gloss = 0.2;
		} else if (is(${ft.MARBLE}.0)) {
			// warm white marble with faint grey veins
			float v = fbm3(p * 2.2);
			float vein = 1.0 - smoothstep(0.0, 0.035, abs(sin((p.y * 3.0 + p.x * 2.0 + v * 6.0))) - 0.0) ;
			base = mix(vec3(0.86, 0.83, 0.77), vec3(0.93, 0.91, 0.86), v) * (1.0 - 0.06 * vein);
			// a little grime in the folds, darker at the foot
			base *= mix(0.84, 1.0, smoothstep(${At(gr.plinth)}, ${At(gr.plinth+.5)}, p.y));
			sss = 0.18;
			gloss = 0.32;
		} else if (is(${ft.WOOD}.0)) {
			float g = vnoise3(vec3(p.x * 2.0, p.y * 30.0, p.z * 2.0));
			base = mix(vec3(0.26, 0.15, 0.08), vec3(0.42, 0.27, 0.15), g) * (0.85 + 0.2 * vnoise3(p * 5.0));
			gloss = 0.2;
		} else if (is(${ft.GESSO}.0)) {
			base = vec3(0.86, 0.83, 0.76) * (0.95 + 0.08 * vnoise3(p * 30.0));
		} else if (is(${ft.PAINT}.0)) {
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
		} else if (is(${ft.POT}.0)) {
			base = vec3(0.025, 0.025, 0.028);
			gloss = 0.85;
		} else if (is(${ft.SOIL}.0)) {
			base = vec3(0.10, 0.07, 0.05) * (0.7 + 0.5 * vnoise3(p * 40.0));
		} else if (is(${ft.SHADE}.0)) {
			base = vec3(0.03);
			gloss = 0.6;
		} else if (is(${ft.BULB}.0)) {
			vec3 glow = mix(vec3(0.75, 0.70, 0.62) * 0.35, vec3(1.0, 0.75, 0.45) * 3.5, night);
			gl_FragColor = vec4(sqrt(glow), 1.0);
			return;
		} else if (is(${ft.JAR}.0)) {
			base = mix(vec3(0.55, 0.42, 0.25), vec3(0.75, 0.70, 0.62), hash13(floor(p * 3.0)));
			gloss = 0.7;
		} else if (is(${ft.BRUSH}.0)) {
			base = mix(vec3(0.42, 0.10, 0.06), vec3(0.75, 0.62, 0.38), step(${At(.86+.24)}, p.y));
			gloss = 0.5;
		} else if (is(${ft.CLOTH}.0)) {
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
		if (is(${ft.POT}.0) || is(${ft.STEEL}.0) || is(${ft.SHADE}.0) || is(${ft.JAR}.0)) {
			col += env * (0.04 + 0.6 * fres) * gloss * 1.2;
		}
		if (is(${ft.BRASS}.0)) {
			col = base * light * 0.35 + spec * base * 2.5 + env * base * 1.6;
		}
		if (is(${ft.REDDOOR}.0) || is(${ft.REDPANEL}.0) || is(${ft.WMARBLE}.0)) {
			col += env * (0.03 + 0.5 * fres) * gloss;
		}

		col = studioAir(col, pw, v_eye);

		float alpha = 1.0;
		if (is(${ft.FLOOR}.0)) {
			// as polished as the gallery's: a clear reflection even looking
			// down, a mirror at grazing angles, more on the black tiles
			float cosV = clamp(V.y, 0.0, 1.0);
			float refl = 0.16 + 0.58 * pow(1.0 - cosV, 3.0);
			refl *= mix(0.72, 1.0, checker);
			refl *= gloss;
			alpha = 1.0 - refl * mirrorOn;
			alpha = mix(alpha, 1.0, clamp(sunVis * 0.4, 0.0, 0.45));
		}
		if (is(${ft.WATER}.0)) {
			// still, dark water: almost a mirror, the sky's light on it, a
			// very slow breath of ripples
			// the moving surface: its slope from the swell and the rings
			float e = 0.012;
			float h0 = poolHeight(pw.xz);
			vec2 grad = vec2(poolHeight(pw.xz + vec2(e, 0.0)) - h0, poolHeight(pw.xz + vec2(0.0, e)) - h0) / e;
			vec3 Nw = normalize(vec3(-grad.x, 1.0, -grad.y));
			float stir = clamp(length(grad) * 9.0, 0.0, 1.0);
			float cosV = clamp(dot(Nw, V), 0.0, 1.0);
			float F = 0.02 + 0.98 * pow(1.0 - cosV, 5.0);
			float refl = mix(0.30, 0.95, F);
			// the sun (or the moon) glinting on the moving water
			vec3 Rw = reflect(-V, Nw);
			float glint = pow(max(dot(Rw, STUDIO_SUN), 0.0), 900.0) * sunVis;
			vec3 glintC = mix(vec3(1.0, 0.92, 0.78) * 9.0, vec3(0.75, 0.85, 1.0) * 3.0, night);
			col = base * light * 0.35 + glintC * glint;
			// where the rings pass, the mirror breaks into bands: crests tipped
			// away from you catch the bright roof, troughs show the dark depth
			float side = clamp(dot(grad, normalize(V.xz + vec2(1e-4))) * 9.0, -1.0, 1.0);
			vec3 hi = studioSky(Rw) * mix(0.55, 0.30, night) + light * 0.04;
			vec3 lo = vec3(0.008, 0.011, 0.010);
			vec3 ringC = mix(lo, hi, 0.5 + 0.5 * side);
			col = mix(col, ringC, stir * 0.6);
			col = studioAir(col, pw, v_eye);
			alpha = 1.0 - refl * mirrorOn * (1.0 - stir * 0.6);
			alpha = max(alpha, glint);
			if (mirrorOn < 0.5) { col = mix(col, studioSky(Rw) * 0.35, F); alpha = 1.0; }
		}

		col = max(col, vec3(0.0));
		gl_FragColor = vec4(sqrt(col), alpha);
	}`;Va.exports=function(t){let e=dM();pM(e),vM(e),mM(e),sM(e),iM(e);let o={enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"zero"}},n=performance.now(),r={t:0,ripples:[]};for(let D=0;D<bl;D++)r.ripples.push([0,0,0,0]);let a=()=>{r.t=(performance.now()-n)/1e3,typeof window!="undefined"&&window.__studioFreeze!=null&&(r.t=window.__studioFreeze);let D=[];for(let P of Og){let nt=lM(P,r.t),yt=nt.ph-nt.Tf;nt.inPool&&yt>=0&&yt<9&&D.push([nt.lx+We[0],nt.lz+We[2],yt,1])}let C=r.t-g.sim.t;for((C<0||C>120)&&(C=Math.min(Math.max(C,0),120));C>1e-6;){let P=Math.min(C,.05);g.sim.step(P),C-=P}for(let P of g.sim.events){let nt=r.t-P[2];nt>=0&&nt<9&&D.push([P[0]+We[0],P[1]+We[2],nt,P[3]])}D.sort((P,nt)=>P[2]-nt[2]);for(let P=0;P<bl;P++)r.ripples[P]=D[P]||[0,0,0,0]},s={stime:()=>r.t};typeof location!="undefined"&&/tourdebug/.test(location.search)&&(window.__studioClock=r);for(let D=0;D<bl;D++)s["ripples["+D+"]"]=()=>r.ripples[D];let i=(D,C)=>t({vert:Ig,frag:kM,attributes:{position:D.pos,normal:D.nrm,kind:D.kind,uv:D.uv,anchor:D.anchor&&D.anchor.length?D.anchor:new Float32Array(D.pos.length/3*4)},elements:new Uint32Array(D.idx),count:C||D.idx.length,uniforms:s,cull:{enable:!1},blend:o}),c=i(e),f=null;fetch(gr.file).then(D=>{if(!D.ok)throw new Error("Could not load "+gr.file);return D.arrayBuffer()}).then(D=>{let C=wM(D),P={pos:[],nrm:[],kind:[],uv:[],anchor:null,idx:[]},nt=gr.height,yt=Math.cos(gr.yaw),vt=Math.sin(gr.yaw);for(let st=0;st<C.nV;st++){let it=(C.mn[0]+C.pos[st*3]/65535*C.sz[0])*nt,qt=(C.mn[1]+C.pos[st*3+1]/65535*C.sz[1])*nt,se=(C.mn[2]+C.pos[st*3+2]/65535*C.sz[2])*nt;P.pos.push(gr.x+yt*it+vt*se+We[0],gr.plinth+qt+We[1],gr.z-vt*it+yt*se+We[2]);let ge=C.nrm[st*3]/127,Ve=C.nrm[st*3+1]/127,ye=C.nrm[st*3+2]/127;P.nrm.push(yt*ge+vt*ye,Ve,-vt*ge+yt*ye),P.kind.push(ft.MARBLE),P.uv.push(0,0)}for(let st=0;st<C.nI;st++)P.idx.push(C.idx[st]);f=i(P)}).catch(D=>console.error(D));let l=_M(t,"res/tree/leaves.webp"),v=gM(),h=t({vert:`
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
		${Zi}
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
		}`,attributes:{position:v.pos,normal:v.nrm,uv:v.uv,shade:v.shade,flower:v.flower},elements:new Uint32Array(v.idx),uniforms:{tex:l.tex},cull:{enable:!1}}),u=(()=>{let D={corner:[],start:[],par:[],misc:[],idx:[]};return Og.forEach((C,P)=>{for(let nt of[[-1,-1],[1,-1],[1,1],[-1,1]])D.corner.push(nt[0],nt[1]),D.start.push(C.start[0]+We[0],C.start[1],C.start[2]+We[2]),D.par.push(C.period,C.offset,C.drift[0],C.drift[1]),D.misc.push(C.speed,C.seed,C.white);D.idx.push(P*4,P*4+1,P*4+2,P*4,P*4+2,P*4+3)}),D})(),p=t({vert:`
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
		${wl}
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
			vec2 lq = land - vec2(${At(We[0])}, ${At(We[2])});
			bool inPool = lq.x > ${At(Wa[0])} && lq.x < ${At(Wa[2])} && lq.y > ${At(Wa[1])} && lq.y < ${At(Wa[3])};
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
		}`,frag:`
		precision highp float;
		uniform float night, time;
		varying vec3 v_pos, v_nrm, v_eye;
		varying vec2 v_uv;
		varying float v_white, v_fade;
		${Zi}
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
		}`,attributes:{corner:u.corner,start:u.start,par:u.par,misc:u.misc},elements:new Uint32Array(u.idx),uniforms:s,cull:{enable:!1}}),d=uM(),m=d.loc.length/3;{let D=d.loc,C=d.body;for(let P=0;P<C.length;P+=3){let nt=[0,1,2].map(se=>[D[C[P+se]*3],D[C[P+se]*3+1],D[C[P+se]*3+2]]),yt=nt[1].map((se,ge)=>se-nt[0][ge]),vt=nt[2].map((se,ge)=>se-nt[0][ge]),st=[yt[1]*vt[2]-yt[2]*vt[1],yt[2]*vt[0]-yt[0]*vt[2],yt[0]*vt[1]-yt[1]*vt[0]],it=[0,1,2].map(se=>(nt[0][se]+nt[1][se]+nt[2][se])/3),qt=[it[0]<.01?-1:0,it[1],it[2]];if(st[0]*qt[0]+st[1]*qt[1]+st[2]*qt[2]>0){let se=C[P+1];C[P+1]=C[P+2],C[P+2]=se}}}let g={loc:[],nrm:[],km:[],body:[],fins:[],sim:hM()};xl.forEach((D,C)=>{for(let P=0;P<m;P++)g.loc.push(d.loc[P*3],d.loc[P*3+1],d.loc[P*3+2]),g.nrm.push(d.nrm[P*3],d.nrm[P*3+1],d.nrm[P*3+2]),g.km.push(D.len,D.kind,d.part[P],C);for(let P of d.fins)g.fins.push(P+C*m);for(let P of d.body)g.body.push(P+C*m)});let x={};for(let D of["loc","nrm","km"])x[D]=t.buffer(new Float32Array(g[D]));let b={fins:t.elements({data:new Uint32Array(g.fins),type:"uint32"}),body:t.elements({data:new Uint32Array(g.body),type:"uint32"})},w=Object.assign({},s);xl.forEach((D,C)=>{w["koiA["+C+"]"]=()=>{let P=g.sim.fish[C];return[P.x+We[0],P.y,P.z+We[2],P.th]},w["koiB["+C+"]"]=()=>{let P=g.sim.fish[C];return[P.kappa,P.ph,P.v,P.pitch]}}),typeof location!="undefined"&&/tourdebug/.test(location.search)&&(window.__koi=g.sim);let _=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform vec4 koiA[${xl.length}], koiB[${xl.length}];
		attribute vec3 loc, nrm;
		attribute vec4 km;
		varying vec3 v_pos, v_nrm, v_eye, v_loc;
		varying float v_kind, v_part, v_depth;
		${wl}
		void main() {
			float len = km.x, part = km.z;
			vec4 A = koiA[0], B = koiB[0];
			if (km.w > 0.5) { A = koiA[1]; B = koiB[1]; }
			if (km.w > 1.5) { A = koiA[2]; B = koiB[2]; }
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
			float amp = (0.012 + 0.11 * u * u) * (0.35 + 0.5 * min(pace, 1.3) + 0.25 * min(abs(kap), 1.0));
			float sway = amp * sin(ph - 6.0 * u);
			float dsway = amp * cos(ph - 6.0 * u) * -6.0;
			vec3 L = loc;
			if (part > 2.5 && part < 3.5) {
				// the pectoral fins paddle slowly, and fold back when it hurries
				float root = clamp((abs(L.y) - 0.06) / 0.12, 0.0, 1.0);
				L.z += root * 0.05 * sin(ph * 0.45 + sign(L.y) * 0.9);
				L.y *= 1.0 - 0.35 * root * smoothstep(0.7, 1.5, pace);
				L.x += root * 0.05 * smoothstep(0.7, 1.5, pace);
			}
			if (part > 3.5) L.z += 0.012 * sin(ph * 0.6);
			vec3 q = P + Sd * (L.y + sway) * len + Up * L.z * len - F * (L.x - u) * len;
			vec3 n = normalize(F * (nrm.x - nrm.y * dsway) + Sd * nrm.y + Up * nrm.z);
			// seen through the moving surface, it wavers a little
			float h0 = poolHeight(q.xz);
			vec2 grad = vec2(poolHeight(q.xz + vec2(0.02, 0.0)) - h0, poolHeight(q.xz + vec2(0.0, 0.02)) - h0) / 0.02;
			q.xz -= grad * (-q.y) * 1.3;
			q.y = min(q.y, -0.006);
			v_pos = q; v_nrm = n; v_loc = vec3(u, L.y, L.z); v_kind = km.y; v_part = part; v_depth = max(-q.y, 0.0);
			vec3 tr = view[3].xyz;
			vec3 eye = -vec3(dot(view[0].xyz, tr), dot(view[1].xyz, tr), dot(view[2].xyz, tr));
			v_eye = eye;
			vec4 cq = proj * view * vec4(q, 1.0);
			// put it at the depth of the water where we see it through
			vec3 sp = eye + (q - eye) * (eye.y / max(eye.y - q.y, 1e-4));
			vec4 cs = proj * view * vec4(sp, 1.0);
			gl_Position = cq;
			gl_Position.z = (cs.z / cs.w - 3e-5) * cq.w;
		}`,frag:`
		precision highp float;
		uniform float night, time;
		varying vec3 v_pos, v_nrm, v_eye, v_loc;
		varying float v_kind, v_part, v_depth;
		${wl}
		${Zi}
		float kh(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
		float kn(vec2 p) {
			vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
			return mix(mix(kh(i), kh(i + vec2(1.0, 0.0)), f.x), mix(kh(i + vec2(0.0, 1.0)), kh(i + vec2(1.0, 1.0)), f.x), f.y);
		}
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
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			vec3 N = normalize(v_nrm);
			bool fin = v_part > 0.5;
			if (fin && dot(N, V) < 0.0) N = -N;
			float u = v_loc.x, lat = v_loc.y, up = v_loc.z;
			// the pattern, fixed to the fish
			vec3 orange = vec3(0.95, 0.36, 0.035), gold = vec3(0.98, 0.58, 0.10), white = vec3(0.86, 0.85, 0.80);
			float blot = kn(vec2(u * 7.0, lat * 9.0 + up * 6.0) + v_kind * 13.0) * 0.65 + kn(vec2(u * 15.0, (lat + up) * 18.0)) * 0.35;
			vec3 base;
			float gloss = 0.5;
			if (v_kind < 0.5) {
				// yamabuki: metallic orange gold all over
				base = mix(orange, gold, 0.45 + 0.4 * blot);
				gloss = 0.85;
			} else if (v_kind < 1.5) {
				// kohaku: white, with deep orange-red patches over the back
				float red = smoothstep(0.50, 0.56, blot + 0.18 * smoothstep(-0.02, 0.05, up)) * smoothstep(0.03, 0.12, u) * (1.0 - smoothstep(0.78, 0.86, u));
				base = mix(white, vec3(0.90, 0.20, 0.03), red);
			} else {
				// orange with a net of darker-edged scales
				base = mix(orange, vec3(0.99, 0.48, 0.07), blot * 0.5);
				vec2 sg = vec2(u * 34.0 + up * 17.0, u * 34.0 - up * 17.0 + lat * 20.0);
				float edge = smoothstep(0.32, 0.5, max(abs(fract(sg.x) - 0.5), abs(fract(sg.y) - 0.5)));
				base *= 1.0 - 0.28 * edge * smoothstep(-0.02, 0.04, up) * step(0.1, u);
			}
			// pale belly, and the scales catching the light along the flank
			base = mix(base, white * 0.95, smoothstep(0.0, -0.06, up) * 0.55 * (v_part < 0.5 ? 1.0 : 0.0));
			float scale = kh(floor(vec2(u * 42.0, (lat + up) * 50.0)));
			// the fins: paler, see-through, with fine rays
			float a = 1.0;
			if (fin) {
				float ray = v_part < 1.5 ? atan(up, u - 0.78) : (v_part < 2.5 ? u * 1.0 : length(vec2(lat, up)));
				float rays = 0.75 + 0.25 * sin(ray * (v_part < 2.5 ? 70.0 : 120.0));
				base = mix(base, gold * vec3(1.0, 0.9, 0.85), 0.5) * rays;
				if (v_kind > 0.5 && v_kind < 1.5) base = mix(base, white, 0.6);
				a = 0.62;
				// the forked edge of the tail
				if (v_part < 1.5 && u > 0.80 + (0.25 + 0.09 * pow(up / 0.15, 2.0)) * 0.97 - 0.06 * (1.0 - min(abs(up) / 0.1, 1.0))) discard;
			}
			// the eyes
			float ed = length(vec2((u - 0.085) * 1.0, up - 0.022));
			if (!fin && ed < 0.016 && abs(lat) > 0.025) { base = mix(vec3(0.02), vec3(0.75, 0.6, 0.3), smoothstep(0.016, 0.011, ed) * smoothstep(0.004, 0.008, ed) * 0.5); gloss = 0.95; }

			vec3 spec; float sv;
			vec3 light = studioLight(vec3(v_pos.x, 0.02, v_pos.z), N, V, gloss, spec, sv);
			// light comes down through the water: dimmer with depth, and
			// gathered into wandering bright threads
			float att = exp(-v_depth * 0.8);
			vec3 sunC = mix(vec3(1.0, 0.88, 0.70) * 3.9, vec3(0.50, 0.64, 1.0) * 1.35, night);
			float ca = caustic(v_pos.xz, stime) * sv * max(N.y, 0.0);
			light = light * att + sunC * ca * 0.22 * att;
			vec3 col = base * light;
			float metal = v_kind < 0.5 ? 1.0 : 0.4;
			col += spec * (0.2 + 0.8 * metal) * (0.6 + 0.8 * scale) * att * (fin ? 0.3 : 1.0) * base * 1.6;
			// the water's green-brown takes the colour away with depth
			vec3 tr = exp(-v_depth * vec3(1.9, 1.15, 1.3));
			col = col * tr + vec3(0.010, 0.016, 0.012) * (1.0 - tr) * mix(1.0, 0.1, night);
			col = studioAir(col, v_pos, v_eye);
			// how much shows through: less at grazing angles, where the
			// surface mirrors the room, and less the deeper it swims
			float cosV = clamp(V.y, 0.0, 1.0);
			float Fr = 0.02 + 0.98 * pow(1.0 - cosV, 5.0);
			a *= (1.0 - mix(0.04, 0.92, Fr)) * exp(-v_depth * 0.5);
			gl_FragColor = vec4(sqrt(max(col, 0.0)), a);
		}`,attributes:x,elements:t.prop("els"),uniforms:w,cull:{enable:t.prop("cull"),face:"front"},depth:{enable:!0,mask:!1,func:"less"},blend:o}),M=()=>{_({els:b.fins,cull:!1}),_({els:b.body,cull:!0})},A=xM(),$=t({vert:Ig,frag:`
		precision highp float;
		uniform float night, time;
		varying vec3 v_pos, v_nrm, v_eye;
		varying float v_kind;
		varying vec2 v_uv;
		${Zi}
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			vec3 N = normalize(v_nrm);
			if (dot(N, V) < 0.0) N = -N;
			float F = 0.04 + 0.96 * pow(1.0 - max(dot(N, V), 0.0), 5.0);
			vec3 p = v_pos - vec3(${At(We[0])}, ${At(We[1])}, ${At(We[2])});
			float dust = fbm3(p * vec3(1.5, 3.0, 1.5)) * (v_kind > 0.5 ? 1.0 : 0.6);
			// streaks where old rain has run down the roof
			float streak = v_kind > 0.5 ? smoothstep(0.55, 0.9, vnoise3(vec3(p.z * 9.0, p.x * 0.6, 0.0))) * 0.5 : 0.0;
			vec3 c = mix(vec3(0.85, 0.80, 0.72), vec3(0.12, 0.13, 0.17), night) * (dust * 0.5 + streak);
			float a = clamp(0.05 + dust * 0.16 + streak * 0.2 + F * 0.4, 0.0, 0.6);
			vec3 col = mix(c, studioSky(reflect(-V, N)), F / max(a, 0.01) * 0.4);
			// the roof's leaded pattern: dark cames, frosted rondels lit
			// from behind by the sky
			if (v_kind > 0.5) {
				float ux = p.x < ${At(Bt/2)} ? p.x : ${At(Bt)} - p.x;
				vec2 pq = vec2(ux - ${At(Ho.purlin)} * floor(ux / ${At(Ho.purlin)}) - ${At(Ho.purlin/2)}, p.z - ${At(Ho.rafter)} * floor(p.z / ${At(Ho.rafter)}) - ${At(Ho.rafter/2)});
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
		}`,attributes:{position:A.pos,normal:A.nrm,kind:A.kind,uv:A.uv,anchor:A.anchor},uniforms:s,elements:new Uint32Array(A.idx),cull:{enable:!1},depth:{mask:!1},blend:o}),R=(()=>{let D={pos:[],idx:[]},C=300,P=24,nt=12;for(let yt=0;yt<=nt;yt++){let vt=-.25*Xo+yt/nt*.75*Xo;for(let st=0;st<=P;st++){let it=st/P*2*Xo;D.pos.push(We[0]+Bt/2+C*Math.cos(vt)*Math.cos(it),C*Math.sin(vt),We[2]+lo/2+C*Math.cos(vt)*Math.sin(it))}}for(let yt=0;yt<nt;yt++)for(let vt=0;vt<P;vt++){let st=yt*(P+1)+vt,it=st+1,qt=st+P+2,se=st+P+1;D.idx.push(st,it,qt,st,qt,se)}return D})(),W=t({vert:`
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
		${Zi}
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
		void main() {`),attributes:{position:R.pos},elements:new Uint32Array(R.idx),cull:{enable:!1}});function H(D){D&&D.reflected||a(),W(),c(),D&&D.reflected||M(),f&&f(),h(),p(),D&&D.reflected||$()}return H};var $g=[{from:[12.6,1.65,.9],to:[11.4,1.75,2.6],at:[6.2,2.6,15.5],fov:60},{from:[8,1.45,1.4],to:[8,1.25,4.4],at:[8,1.7,16],fov:50},{from:[7.2,1.6,3.8],to:[8.3,1.55,5.2],at:[13,1.4,10.4],fov:52},{from:[6.2,1.45,10.4],to:[7,1.75,11.6],at:[8,2.3,15.2],fov:44},{from:[2.6,1.5,2.6],to:[3.6,1.6,4.4],at:[7,6.8,12],fov:62}],gl=11;function SM(t){let e=$g.length,o=Math.floor(t/gl)%e,n=t%gl/gl,r=n*n*(3-2*n),a=$g[o],s=a.from.map((c,f)=>c+(a.to[f]-c)*r),i=Math.max(0,1-Math.min(n*gl,(1-n)*gl)/.7);return{eye:Vu(s),target:Vu(a.at),fov:a.fov,roll:0,fade:i}}Va.exports.previewCam=SM;Va.exports.sunGLSL=Fg;Va.exports.O=We;Va.exports.SIZE={W:Bt,L:lo,H:uo,RIDGE:s0};Va.exports.BOX=[We[0]-.8,0,We[2]-.8,We[0]+Bt+.8,s0+.5,We[2]+lo+.8];Va.exports.AIR_BOX=[We[0],0,We[2],We[0]+Bt,s0,We[2]+lo]});var mh=xt((YA,Wg)=>{"use strict";var{A:ur}=_0(),{C:Cn}=vr(),{DOOR:oc}=Fa(),or=Ua(),nc=_l(),Bg=Cn.hallEnd+.35,Ug={arch:[13.6,0,ur.zc-ur.arch.r-.3,14.4,ur.arch.spring+ur.arch.r+.3,ur.zc+ur.arch.r+.3],mouth:[13.3,0,Cn.z0-.3,14.3,8.2,Cn.z1+.3],stair:[-.5,0,or.SURR.z0-.2,.5,or.SURR.top+.3,or.SURR.z1+.2],door:[oc.x0-.4,0,-.5,oc.x1+.4,oc.top+.4,.5],windows:[15.6,.4,Cn.z1-.2,36.9,6.4,Cn.z1+.9],farDoor:[Cn.x1-.2,0,Cn.zc-oc.r-.4,Cn.x1+.9,oc.top+.4,Cn.zc+oc.r+.4]},_a={court:[ur.x0-.4,0,ur.z0-.3,ur.x1+.3,ur.domeTop+.5,ur.z1+.3],stair:[or.C.x-or.R-2.6,0,or.C.z-or.R-1.5,.5,15.6,or.C.z+or.R+1.5],street:[-60,-1,-140,74,60,.6],garden:[10,-1,Cn.z1,46,60,Cn.z1+110],florence:[Cn.x1,-1,Cn.zc-30,Cn.x1+80,60,Cn.zc+30],studio:nc.BOX},EM=[[0,0,0,14,0,Bg],[13.6,0,Cn.z0,Cn.x1+.4,0,Cn.z1],[ur.x0-.4,0,ur.z0,ur.x1,0,ur.z1],[or.C.x-or.R-2.6,0,or.C.z-or.R,.4,0,or.C.z+or.R],[nc.BOX[0],0,nc.BOX[2],nc.BOX[3],0,nc.BOX[5]]],AM={hall:{court:["arch"],stair:["stair"],street:["door"],garden:["mouth","windows"],florence:["mouth","farDoor"]},wing:{court:["mouth","arch"],stair:["mouth","stair"],street:["mouth","door"],garden:["windows"],florence:["farDoor"]},court:{stair:["arch","stair"],street:["arch","door"],garden:["arch","mouth","windows"],florence:["arch","mouth","farDoor"]},stair:{court:["stair","arch"],street:["stair","door"],garden:["stair","mouth","windows"],florence:["stair","mouth","farDoor"]}},Sl=new Float64Array(24),G0=[7,2,2],jg=0,Ma="out",vh=!0;try{/[?&]nocull\b/.test(location.search)&&(vh=!1)}catch(t){}var Ml={court:!0,stair:!0,street:!0,garden:!0,florence:!0,studio:!1},kl={court:!0,stair:!0,street:!0,garden:!0,florence:!0,studio:!1},Gg=!0;function TM(t){let e=i=>[t[i],t[4+i],t[8+i],t[12+i]],o=e(0),n=e(1),r=e(2),a=e(3),s=(i,c,f,l)=>{for(let v=0;v<4;v++)Sl[i*4+v]=c[v]+f*l[v]};s(0,a,1,o),s(1,a,-1,o),s(2,a,1,n),s(3,a,-1,n),s(4,a,1,r),s(5,a,-1,r)}function Xa(t,e){if(!vh)return!0;let o=e?-t[4]:t[1],n=e?-t[1]:t[4];for(let r=0;r<6;r++){let a=Sl[r*4],s=Sl[r*4+1],i=Sl[r*4+2],c=Sl[r*4+3],f=a>0?t[3]:t[0],l=s>0?n:o,v=i>0?t[5]:t[2];if(a*f+s*l+i*v+c<0)return!1}return!0}var Xu=(t,e)=>G0[0]>t[0]-e&&G0[0]<t[3]+e&&G0[2]>t[2]-e&&G0[2]<t[5]+e;function zM(t){if(Xu(t,.6))return null;let e=1/0,o=-1/0;for(let n=0;n<4;n++){let r=(n&1?t[3]:t[0])-G0[0],a=(n&2?t[5]:t[2])-G0[2],s=Math.atan2(r,a)-jg;s-=Math.round(s/(2*Math.PI))*2*Math.PI,e=Math.min(e,s),o=Math.max(o,s)}return o-e>Math.PI?null:[e,o]}function Hg(t,e,o){let n=-Math.PI,r=Math.PI,a=s=>{let i=zM(s);return i?(n=Math.max(n,i[0]-.03),r=Math.min(r,i[1]+.03),n<=r):!0};for(let s of t){let i=Ug[s];if(!Xu(i,.6)&&(!Xa(i,o)||!a(i)))return!1}return Xa(e,o)&&a(e)}function LM(){let t=G0[0],e=G0[2],o=nc.BOX;return t>o[0]&&t<o[3]&&e>o[2]&&e<o[5]?"studio":t<0&&e>or.C.z-or.R-1.5&&t>or.C.x-or.R-2.6?"stair":t>14.1&&e>ur.z0-.3&&e<ur.z1+.3&&t<ur.x1+.3?"court":t>13.9&&e>Cn.z0-.4&&e<Cn.z1+.1&&t<Cn.x1+.3?"wing":t>=0&&t<=14.1&&e>.3&&e<Bg?"hall":"out"}var NM={PORTAL:Ug,ROOM:_a,update(t,e,o){let n=new Array(16);for(let r=0;r<4;r++)for(let a=0;a<4;a++){let s=0;for(let i=0;i<4;i++)s+=e[i*4+a]*t[r*4+i];n[r*4+a]=s}TM(n),G0[0]=o[0],G0[1]=o[1],G0[2]=o[2],jg=Math.atan2(-t[2],-t[10]),Ma=LM();for(let r in _a){if(r==="studio"||Ma==="studio"){Ml[r]=kl[r]=r==="studio"&&Ma==="studio";continue}if(!vh||Ma==="out"||Ma===r||Xu(_a[r],.3))Ml[r]=Xa(_a[r],!1)||Ma===r,kl[r]=Xa(_a[r],!0)||Ma===r;else{let a=AM[Ma][r];Ml[r]=a?Hg(a,_a[r],!1):Xa(_a[r],!1),kl[r]=a?Hg(a,_a[r],!0):Xa(_a[r],!0)}}Gg=!vh||EM.some(r=>Xa(r,!1))},get zone(){return Ma},room(t,e){return e?kl[t]:Ml[t]},box(t,e,o){return o&&!(e?kl[o]:Ml[o])?!1:Xa(t,e)},get floor(){return Gg}};Wg.exports=NM});var Xg=xt((KA,Vg)=>{"use strict";var RM=Pu(),CM=mh();function OM(t){let e=new DataView(t);if(String.fromCharCode(e.getUint8(0),e.getUint8(1),e.getUint8(2),e.getUint8(3))!=="STAT")throw new Error("Not a statue file");let n=e.getUint32(4,!0),r=e.getUint32(8,!0),a=[],s=[];for(let v=0;v<3;v++)a.push(e.getFloat32(12+v*4,!0)),s.push(e.getFloat32(24+v*4,!0));let i=36,c=new Uint16Array(t,i,n*3);i+=n*6;let f=new Uint16Array(t,i,r);i+=r*2;let l=new Int8Array(t,i,n*3);return{nV:n,nI:r,mn:a,sz:s,pos:c,idx:f,nrm:l}}Vg.exports=(t,e)=>{let o=[],n=[],r=[],a=[],s=null,i=e.statues.length,c=[],f=(v,h)=>{let u=o.length/3,p=h.height*.75,d=h.base!==void 0?h.base:e.pedestalTop;c.push({offset:a.length,count:v.nI,box:[h.x-p,d-.1,h.z-p,h.x+p,d+h.height+.2,h.z+p]});let m=h.height,g=Math.cos(h.yaw),x=Math.sin(h.yaw),b=h.base!==void 0?h.base:e.pedestalTop;for(let w=0;w<v.nV;w++){let _=(v.mn[0]+v.pos[w*3]/65535*v.sz[0])*m,M=(v.mn[1]+v.pos[w*3+1]/65535*v.sz[1])*m,A=(v.mn[2]+v.pos[w*3+2]/65535*v.sz[2])*m;o.push(h.x+g*_+x*A,b+M,h.z-x*_+g*A);let $=v.nrm[w*3]/127,R=v.nrm[w*3+1]/127,W=v.nrm[w*3+2]/127;n.push(g*$+x*W,R,-x*$+g*W),r.push(h.mat||1,0,0)}for(let w=0;w<v.nI;w++)a.push(u+v.idx[w])},l=()=>{a.length!==0&&(s=RM(t,{position:o,normal:n,mat:r,elements:a,lights:e.lights,get viewer(){return e.viewer}},!1,!0))};return e.statues.forEach(v=>{fetch("res/"+v.file).then(h=>{if(!h.ok)throw new Error("Could not load "+v.file);return h.arrayBuffer()}).then(h=>f(OM(h),v)).catch(h=>console.error(h)).then(()=>{--i===0&&l()})}),function(v){if(!s)return;let h=!!(v&&v.reflected),u=c.filter(p=>CM.box(p.box,h));u.length&&s(u)}}});var a3=xt((QA,Ku)=>{"use strict";var PM=zs(),Bn=1.29032,$s=[9.2968,2,5.9],IM=[[.767398,.00185,-.10827],[.010515,.769952,.087681],[-.107774,.08829,-.762374]],gh=2147.64,Yg=725,Kg=1288,Qg=1450,Zg=2576,Yr=-5.197,qs=3.865,Ya=10.135,Ds=-14.679,El=-30.229,Al=7.232,Jg=-45.713,rc=17.1*Bn,Fs=16.6*Bn,Tl=16.6*Bn,t3=[6.9,17.1],xh=[2.95,16.6],$M=1.6,FM=0,qM=1,e3=2,Yu=3,o3=4,n3=5,DM=6;function GM(){let t=[],e=[],o=[],n=[],r=PM.createBuilder(t,e,o,n),a=(f,l,v,h,u,p,d=1,m=1)=>{let g=[];for(let x=0;x<=d;x++){let b=[];for(let w=0;w<=m;w++){let _=[f[0]+l[0]*x/d+v[0]*w/m,f[1]+l[1]*x/d+v[1]*w/m,f[2]+l[2]*x/d+v[2]*w/m],M=p(_);b.push(r.vert(_,h,[u,M[0],M[1]]))}g.push(b)}for(let x=0;x<d;x++)for(let b=0;b<m;b++)r.tri(g[x][b],g[x+1][b],g[x][b+1]),r.tri(g[x+1][b],g[x+1][b+1],g[x][b+1])},s=f=>l=>[($s[2]-l[2])/Bn-f,l[1]/Bn];a([-60,0,-.36],[130,0,0],[0,0,-140],[0,1,0],FM,f=>[f[0]/Bn,f[2]/Bn],13,14),a([qs,0,Yr],[0,0,Ds-Yr],[0,rc,0],[1,0,0],qM,s(8.6),6,6),a([-40,0,Yr],[qs+40,0,0],[0,rc,0],[0,0,1],e3,f=>[(qs-f[0])/Bn,f[1]/Bn],8,4),a([-40,0,-.36],[0,0,Yr+.36],[0,rc,0],[1,0,0],e3,f=>[-f[2]/Bn,f[1]/Bn]),a([Ya,0,-80],[0,0,Yr+80],[0,Fs,0],[-1,0,0],o3,s(8.6),12,6),a([Ya,0,Yr],[60,0,0],[0,Fs,0],[0,0,1],n3,f=>[(f[0]-Ya)/Bn,f[1]/Bn],8,4),a([70,0,Yr],[0,0,-.36-Yr],[0,Fs,0],[-1,0,0],n3,f=>[-f[2]/Bn,f[1]/Bn]);let i=f=>[(f[0]-$s[0])/Bn+4.18,f[1]/Bn];a([-20,0,El],[Al+20,0,0],[0,Tl,0],[0,0,1],Yu,i,8,6),a([Al,0,El],[0,0,Jg-El],[0,Tl,0],[1,0,0],Yu,s(28),4,4),a([Al,0,Jg],[Ya-Al,0,0],[0,Fs,0],[0,0,1],o3,f=>[(f[0]-$s[0])/Bn,f[1]/Bn],2,4),a([-20,0,Ds],[0,0,El-Ds],[0,Tl,0],[1,0,0],Yu,s(16),4,4);let c=(f,l,v,h)=>a(f,l,v,h,DM,()=>[0,0],4,4);return c([-300,-20,-300],[600,0,0],[0,320,0],[0,0,1]),c([-300,300,-300],[600,0,0],[0,0,300],[0,-1,0]),c([-300,-20,0],[0,0,-300],[0,320,0],[1,0,0]),c([300,-20,-300],[0,0,300],[0,320,0],[-1,0,0]),{position:t,normal:e,elements:o,attr:n}}function Is(t,e,o,n){let r=t.texture({data:[[n]],...o,min:"linear",mag:"linear"});return fetch(e).then(a=>{if(!a.ok)throw new Error("Could not load "+e);return a.blob()}).then(a=>createImageBitmap(a)).then(a=>{r({data:a,...o,min:"mipmap",mipmap:"nice",mag:"linear"})}).catch(a=>console.error(a)),r}var H0=t=>"vec3("+t.map(e=>e.toFixed(4)).join(", ")+")",HM=[[[-.35,0,-.35],[14.35,9.2,50]],[[-40,0,Ds],[qs,rc,Yr]],[[Ya,0,-80],[70,Fs,Yr]],[[-20,0,-80],[Al,Tl,El]],[[-40,0,-80],[-20,Tl,Ds]]],BM=HM.map(t=>`if (hitBox(ro, rd, ${H0(t[0])}, ${H0(t[1])}, 1e4) ) return 0.0;`).join(`
		`),r3="mat3("+[0,1,2].map(t=>[0,1,2].map(e=>IM[e][t].toFixed(6)).join(", ")).join(", ")+")",UM=`
precision highp float;

uniform sampler2D photo, photoNight, photoMask, pinkTex, yellowTex, creamTex, cobbleTex;
uniform float time;
uniform float night;   // 0 by day, 1 at night

varying vec3 v_pos;
varying vec3 v_normal;
varying vec3 v_attr;
varying vec3 v_eye;

const vec3 SUN = ${H0([-.25,.4,.88].map(t=>t/Math.hypot(-.25,.4,.88)))};

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
	${BM}
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
	vec3 ro = ${H0($s)};
	vec3 rd = p - ro;
	if (hitBox(ro, rd, ${H0([-40,0,Ds])}, ${H0([qs-.02,rc,Yr])}, 0.995)) return false;
	if (hitBox(ro, rd, ${H0([Ya+.02,0,-80])}, ${H0([70,Fs,Yr])}, 0.995)) return false;
	return true;
}

// is this point sky in the photo? (only meaningful inside the photo)
bool photoSky(vec3 p) {
	vec3 pc = ${r3} * (p - ${H0($s)});
	if (pc.z < 0.2) return false;
	vec2 uv = vec2(
		(${Yg.toFixed(2)} + ${gh.toFixed(3)} * pc.x / pc.z) / ${Qg.toFixed(1)},
		(${Kg.toFixed(2)} - ${gh.toFixed(3)} * pc.y / pc.z) / ${Zg.toFixed(1)}
	);
	if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) return false;
	return texture2D(photoMask, uv).r < 0.5;
}

// photo colour and how much to trust it (0..1)
vec4 photoAt(vec3 p, vec3 n, vec3 eye) {
	vec3 pc = ${r3} * (p - ${H0($s)});
	if (pc.z < 0.2) return vec4(0.0);
	vec2 uv = vec2(
		(${Yg.toFixed(2)} + ${gh.toFixed(3)} * pc.x / pc.z) / ${Qg.toFixed(1)},
		(${Kg.toFixed(2)} - ${gh.toFixed(3)} * pc.y / pc.z) / ${Zg.toFixed(1)}
	);
	vec2 e = min(uv, 1.0 - uv);
	float w = smoothstep(0.002, 0.02, min(e.x, e.y));
	if (w <= 0.0) return vec4(0.0);
	w *= smoothstep(0.35, 0.75, texture2D(photoMask, uv).r);
	if (w <= 0.0) return vec4(0.0);
	if (!photoSees(p)) return vec4(0.0);
	// if we see this surface much more square-on than the photo did,
	// the photo would look smeared: hand over to the painted facade
	float camCos = abs(dot(normalize(p - ${H0($s)}), n));
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
		base = texture2D(cobbleTex, fuv / ${$M.toFixed(2)}).rgb;
	} else if (kind < 2.5) {
		base = texture2D(pinkTex, vec2(fuv.x / ${t3[0].toFixed(2)}, 1.0 - fuv.y / ${t3[1].toFixed(2)})).rgb;
	} else if (kind < 3.5) {
		base = texture2D(yellowTex, vec2(fuv.x / ${xh[0].toFixed(2)}, 1.0 - fuv.y / ${xh[1].toFixed(2)})).rgb;
	} else {
		base = texture2D(creamTex, vec2(fuv.x / ${xh[0].toFixed(2)}, 1.0 - fuv.y / ${xh[1].toFixed(2)})).rgb;
	}

	// ---------- the photograph, where it can be trusted ----------
	bool projectable = kind < 0.5 || (kind > 0.5 && kind < 1.5) || (kind > 2.5 && kind < 4.5);
	if (kind < 0.5) {
		// the photo only shows ground inside the alley, or beyond its corners
		bool inAlley = v_pos.x > ${(qs-.05).toFixed(3)} && v_pos.x < ${(Ya+.05).toFixed(3)};
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
}`,jM=`
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
}`,WM=tr();Ku.exports=t=>{let e=GM(),o={wrapS:"clamp",wrapT:"clamp",flipY:!1},n={wrapS:"mirror",wrapT:"clamp",flipY:!1},r={wrapS:"repeat",wrapT:"repeat",flipY:!1},a=Is(t,"res/street/photo.jpg",o,[190,160,120]),s=Is(t,"res/street/photo_night.jpg",o,[12,14,22]),i=Is(t,"res/street/photo_mask.png",o,[255,255,255]),c=Is(t,"res/street/facade_pink.jpg",n,[200,150,135]),f=Is(t,"res/street/facade_yellow.jpg",n,[225,180,95]),l=Is(t,"res/street/facade_cream.jpg",n,[215,200,175]),v=Is(t,"res/street/cobbles.jpg",r,[95,95,95]),h=Date.now(),u=t({frag:UM,vert:jM,attributes:{position:e.position,normal:e.normal,attr:e.attr},elements:new Uint32Array(e.elements),uniforms:{photo:a,photoMask:i,pinkTex:c,yellowTex:f,creamTex:l,cobbleTex:v,photoNight:s,night:()=>WM.night,time:()=>(Date.now()-h)/1e3}});return function(){u()}};Ku.exports.layout={MOUTH_Z:Yr,PINK_X:qs,RIGHT_X:Ya,PINK_H:rc,CREAM_H:Fs,S:Bn}});var c3=xt((ZA,i3)=>{"use strict";var VM=tr().GLSL,{glassPanes:XM}=Fa(),s3=vr();function YM(){let t=[],e=[],o=(n,r)=>{for(let a of n)t.push(a),e.push(r)};return o(XM(),[0,0,1]),o(s3.windowGlass(),[0,0,1]),o(s3.farDoorGlass(),[1,0,0]),{position:t,normal:e}}i3.exports=t=>{let e=YM(),o=t({frag:`
		precision highp float;
		${VM}
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
		}`,attributes:{position:e.position,normal:e.normal},count:e.position.length,cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}});return function(){o()}}});var S3=xt((JA,ed)=>{"use strict";var p3=tr().GLSL,KM=zs(),Qu=y0(),{wallWithHoles:QM,C:Za}=vr(),le=.28,tt={westBack:14.4,westCol:15-le,eastCol:37.4+le,eastBack:41.8,south:Za.z1+.7,northCol:Za.z1+.7+16,northBack:Za.z1+.7+19,cx:(15+37.4)/2,cz:(Za.z1+.7+Za.z1+.7+16-le)/2},$o={x0:tt.westCol+le,x1:tt.eastCol-le,z0:tt.south,z1:tt.northCol-le},_r=3.3,Nl=.92,Ja=5.6,l3=6,S0=11.9,Qa=9.6,fo={x0:tt.cx-2.9,x1:tt.cx+2.9,top:14.4},Sh=7,v3=4,Ju=(tt.eastCol-tt.westCol)/Sh,ZM=(tt.northCol-tt.south)/v3,m3=3,Cl=.26,Us=1.4,Hs=1.1,bh=3,na=(()=>{let t=[.3,.82,-.49],e=Math.hypot(...t);return t.map(o=>o/e)})(),Kt={GROUND:0,BRICK:1,STONE:2,MARBLE:3,HEDGE:4,POT:5,ROOF:6,SHUTTER:7,PANE:8,PLASTER:9,BARK:10,IRON:11,SKY:12,LEAD:13,FARBRICK:14,DARK:15,SOIL:16},ra=[],g3=(t,e,o)=>[tt.cx+t,e,tt.cz+o],wh=g3(-5.9,0,3.4),ts=.85,Ka={c:[wh[0],4.6*ts+.5,wh[2]],r:[5*ts,3.6*ts,4.5*ts]},x3=[{d:[0,4.4,0],r:[3.9,2.6,3.6],n:230},{d:[-2.7,4,-1.2],r:[2.6,2.1,2.4],n:105},{d:[2.7,4.5,-1.6],r:[2.5,2.2,2.3],n:105},{d:[.8,6.9,.8],r:[2.6,2,2.5],n:105},{d:[-1.6,6.1,2],r:[2.2,1.9,2],n:80},{d:[2.3,3.4,1.8],r:[2,1.5,1.9],n:60}].map(t=>({c:[wh[0]+t.d[0]*ts,t.d[1]*ts+.5,wh[2]+t.d[2]*ts],r:t.r.map(e=>e*ts),n:t.n}));for(let t of x3)ra.push({...t,cell:0,leaf:[.5,.7,.46],bloom:[1,1,1],size:[.95,1.35],magnolia:1,shadow:1});var JM=[3.6,6.3,9];for(let t of JM){let e=8.6+t%1.7*.6;ra.push({c:g3(t,e/2+.5,5.2),r:[.9,e/2,.9],cell:1,leaf:[.5,.64,.5],bloom:[1,1,1],n:180,size:[.72,.98],spindle:1,shadow:1})}var t8=[{d:[-8.4,-4],bloom:[1,.62,.78]},{d:[-3.6,-4.6],bloom:[1,.98,.94]},{d:[3.8,-4.3],bloom:[1,.98,.94]},{d:[8.5,-4],bloom:[1,.58,.72]}].map(t=>({x:tt.cx+t.d[0],z:tt.cz+t.d[1],bloom:t.bloom}));for(let t of t8)ra.push({c:[t.x,.95,t.z],r:[1.25,.95,1.1],cell:3,leaf:[.7,.86,.58],bloom:t.bloom,n:80,size:[.55,.8],shadow:1});var td=[45,135,225,315].map(t=>{let e=t*Math.PI/180;return[tt.cx+Math.cos(e)*2.3,tt.cz+Math.sin(e)*2.3]});for(let[t,e]of td)ra.push({c:[t,1.85,e],r:[.62,.55,.62],cell:3,leaf:[.78,.95,.55],bloom:[1.25,1,.25],n:36,size:[.32,.42],shadow:1});var y3=[];{let t=(o,n,r,a,s,i)=>{let c=Math.hypot(r-o,a-n),f=Math.floor(c/.9);for(let l=0;l<=f;l++){let v=l/f,h=o+(r-o)*v,u=n+(a-n)*v;s!==void 0&&Math.abs((r!==o?h:u)-s)<i||y3.push([h,u])}};t($o.x0+.45,$o.z0+1.2,$o.x0+.45,$o.z1-.45,tt.cz,1),t($o.x1-.45,$o.z0+1.2,$o.x1-.45,$o.z1-.45,tt.cz,1),t($o.x0+.45,$o.z1-.45,$o.x1-.45,$o.z1-.45,tt.cx,1.9)}var e8=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],_h=t=>{let e=Math.hypot(t[0],t[1],t[2])||1;return[t[0]/e,t[1]/e,t[2]/e]};function sc(t,e,o,n,r,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),f=t.vert(n,a,s),l=t.vert(r,a,s);t.tri(i,c,f),t.tri(i,f,l)}function Un(t,e,o,n,r,a,s,i){t.box(Math.min(e,r),Math.min(o,a),Math.min(n,s),Math.max(e,r),Math.max(o,a),Math.max(n,s),[i,0,0])}function o8(t,e,o){return{vert:(n,r,a)=>t.vert(e(n),o(r),a),tri:t.tri}}var n8={north:[t=>[t[0],t[1],tt.northCol-t[2]],t=>[t[0],t[1],-t[2]]],west:[t=>[tt.westCol+t[2],t[1],t[0]],t=>[t[2],t[1],t[0]]],east:[t=>[tt.eastCol-t[2],t[1],t[0]],t=>[-t[2],t[1],t[0]]]};function b3(t,e,o,n,r){let a=[];for(let s=0;s<o;s++){let i=t+s*e+(s===0?n:.02),c=t+(s+1)*e-(s===o-1?r:.02);a.push([i,c,t+(s+.5)*e])}return a}var r8=b3(tt.westCol,Ju,Sh,le+Cl,le+Cl),f3=b3(tt.south,ZM,v3,.32,le+Cl),ac=[tt.cx-32.35,tt.northCol-77],a8=Array.from({length:Sh-1},(t,e)=>tt.westCol+(e+1)*Ju),w3=t=>(t[1]-t[0])/2-.2,Rl=t=>(t[0]+t[1])/2;function s8(t,e){let o=Rl(t),n=w3(t);return{u0:t[0],u1:t[1],bottom:e?0:Nl,head:r=>{let a=Math.abs(r-o);return a<n?_r+Math.sqrt(n*n-a*a):_r},step:.05}}function i8(t,e,o){return{u0:t-o,u1:t+o,bot:n=>e-Math.sqrt(Math.max(0,o*o-(n-t)*(n-t))),head:n=>e+Math.sqrt(Math.max(0,o*o-(n-t)*(n-t))),step:.04,mat:[Kt.STONE,0,0]}}function c8(t,e,o,n){return{u0:t-e/2,u1:t+e/2,bottom:o,head:()=>n,step:.5,mat:[Kt.STONE,0,0]}}function h3(t,e,o){let[n,r]=n8[e],a=o8(t,n,r),s=[];o.arches.forEach((l,v)=>s.push(s8(l,v===o.open)));let i=[];for(let l of o.bays||o.arches){let v=Rl(l);o.oculi&&s.push(i8(v,6.85,.3)),i.push({c:v,y0:o.win[0],y1:o.win[1],w:1.05})}for(let l of o.extraWindows||[])i.push(l);for(let l of i)s.push(c8(l.c,l.w,l.y0,l.y1));for(let l of o.extraHoles||[])s.push(l);QM(a,{u0:o.u0,u1:o.u1,w0:-le,w1:le,top:o.top,holes:s,mat:[Kt.BRICK,0,0],revealMat:[Kt.BRICK,0,0],noEnds:o.noEnds,cuts:o.cuts,topStep:.25});let c=(l,v,h,u,p,d,m)=>{let g=n([l,v,h]),x=n([u,p,d]);Un(t,g[0],g[1],g[2],x[0],x[1],x[2],m)},f=(l,v,h,u,p,d)=>sc(a,l,v,h,u,p,[d,0,0]);for(let l of o.arches){let v=Rl(l),h=w3(l),u=28;for(let p of[le,-le]){let d=p>0?1:-1,m=p+d*.025;for(let g=0;g<u;g++){let x=Math.PI*g/u,b=Math.PI*(g+1)/u,w=(H,D)=>[v+Math.cos(H)*D,_r+Math.sin(H)*D],_=w(x,h),M=w(b,h),A=w(x,h+.26),$=w(b,h+.26);f([_[0],_[1],m],[M[0],M[1],m],[$[0],$[1],m],[A[0],A[1],m],[0,0,d],Kt.STONE);let R=Math.cos((x+b)/2),W=Math.sin((x+b)/2);f([A[0],A[1],p],[$[0],$[1],p],[$[0],$[1],m],[A[0],A[1],m],[R,W,0],Kt.STONE)}}}if(o.arches.forEach((l,v)=>{v!==o.open&&c(l[0]-.02,Nl,-le-.05,l[1]+.02,Nl+.09,le+.05,Kt.STONE)}),c(o.u0,l3,-le,o.u1,l3+.18,le+.09,Kt.STONE),c(o.u0,o.win[0]-.12,le-.01,o.u1,o.win[0],le+.06,Kt.STONE),o.cornice)for(let[l,v,h]of o.cornice)c(l,h-.22,le-.01,v,h,le+.16,Kt.STONE),c(l,h,le-.01,v,h+.16,le+.42,Kt.STONE);for(let{c:l,y0:v,y1:h,w:u,door:p}of i){let d=u/2;if(f([l-d-.01,v,.06],[l+d+.01,v,.06],[l+d+.01,h,.06],[l-d-.01,h,.06],[0,0,1],p?Kt.DARK:Kt.PANE),p){c(l-d-.16,0,le-.01,l-d,h+.16,le+.07,Kt.STONE),c(l+d,0,le-.01,l+d+.16,h+.16,le+.07,Kt.STONE),c(l-d-.16,h,le-.01,l+d+.16,h+.2,le+.09,Kt.STONE),c(l-d,0,.07,l+d,h-.02,.12,Kt.SHUTTER),c(l-.012,0,.12,l+.012,h-.02,.14,Kt.DARK);continue}for(let m of[-1,1]){let g=l+m*d;c(g+m*.02,v+.02,le+.02,g+m*(d+.025),h-.02,le+.06,Kt.SHUTTER)}c(l-d-.09,h,le-.01,l+d+.09,h+.16,le+.05,Kt.STONE),c(l-d-.09,v-.1,le-.01,l+d+.09,v,le+.09,Kt.STONE),c(l-.015,v,.06,l+.015,h,.09,Kt.SHUTTER),c(l-d,(v+h)/2-.015,.06,l+d,(v+h)/2+.015,.09,Kt.SHUTTER)}if(o.oculi)for(let l of o.bays||o.arches){let v=Rl(l);f([v-.31,6.54,0],[v+.31,6.54,0],[v+.31,7.16,0],[v-.31,7.16,0],[0,0,1],Kt.DARK)}for(let l of o.cols){let v=Nl+.09,h=n([l,0,0]);Un(t,h[0]-.24,v,h[2]-.24,h[0]+.24,v+.12,h[2]+.24,Kt.MARBLE),t.lathe([[.23,v+.12,1],[.24,v+.17],[.2,v+.24],[.215,v+.28],[.17,v+.34,1],[.165,v+.6],[.155,_r-.5],[.15,_r-.38,1],[.175,_r-.34,1],[.17,_r-.3],[.2,_r-.22],[.27,_r-.15],[.29,_r-.12,1]],h[0],h[2],18,{mat:()=>[Kt.MARBLE,0,0]}),Un(t,h[0]-.29,_r-.12,h[2]-.29,h[0]+.29,_r+.01,h[2]+.29,Kt.STONE)}o.walk&&o.walk(t)}function l8(t){let e=[-1,0,1].map(r=>{let a=tt.cx+r*1.7;return{u0:a-.6,u1:a+.6,bottom:11,head:s=>12.9+Math.sqrt(Math.max(0,.36-(s-a)*(s-a))),step:.04,mat:[Kt.STONE,0,0]}});h3(t,"north",{u0:tt.westCol-le,u1:tt.eastCol+le,top:r=>r>fo.x0+1e-6&&r<fo.x1-1e-6?fo.top:S0,cuts:[fo.x0,fo.x0+1e-5,fo.x1-1e-5,fo.x1],arches:r8,open:m3,cols:a8,oculi:!0,win:[8,9.9],extraHoles:e,cornice:[[tt.westCol-le-3.3,fo.x0,S0],[fo.x1,tt.eastCol+le+3.3,S0],[fo.x0-.2,fo.x1+.2,fo.top]],walk:r=>{Un(r,$o.x0,Ja,tt.northCol+le,$o.x1,Ja+.2,tt.northBack,Kt.PLASTER),Un(r,$o.x0,0,tt.northBack,$o.x1,Ja,tt.northBack+.3,Kt.PLASTER);for(let a of[tt.cx-7.2,tt.cx,tt.cx+7.2])sc(r,[a-.8,0,tt.northBack-.01],[a+.8,0,tt.northBack-.01],[a+.8,2.9,tt.northBack-.01],[a-.8,2.9,tt.northBack-.01],[0,0,-1],[Kt.DARK,0,0]),Un(r,a-.98,0,tt.northBack-.06,a+.98,3.12,tt.northBack,Kt.STONE),sc(r,[a-.8,0,tt.northBack-.07],[a+.8,0,tt.northBack-.07],[a+.8,2.9,tt.northBack-.07],[a-.8,2.9,tt.northBack-.07],[0,0,-1],[Kt.DARK,0,0])}}),sc(t,[fo.x0,11,tt.northCol+.2],[fo.x1,11,tt.northCol+.2],[fo.x1,13.6,tt.northCol+.2],[fo.x0,13.6,tt.northCol+.2],[0,0,-1],[Kt.DARK,0,0]),Un(t,fo.x0+.3,10.88,tt.northCol-le-.06,fo.x1-.3,11,tt.northCol-le+.1,Kt.STONE),Un(t,tt.westBack,Ja+.2,tt.northBack,tt.eastBack,S0,tt.northBack+3.4,Kt.BRICK),Un(t,tt.westBack,Qa,tt.northCol-le,tt.westCol-le,S0,tt.northCol+le,Kt.BRICK),Un(t,tt.eastCol+le,Qa,tt.northCol-le,tt.eastBack,S0,tt.northCol+le,Kt.BRICK),Un(t,tt.westBack,Ja+.2,tt.northCol+le+.12,tt.eastBack,S0,tt.northBack,Kt.BRICK),zl(t,[tt.westBack-.5,S0+.16,tt.northCol-le-.42],[fo.x0-tt.westBack+.5,0,0],[0,2.6,4.4],Kt.ROOF),zl(t,[fo.x1,S0+.16,tt.northCol-le-.42],[tt.eastBack+.5-fo.x1,0,0],[0,2.6,4.4],Kt.ROOF),zl(t,[fo.x0-.3,fo.top+.16,tt.northCol-le-.42],[fo.x1-fo.x0+.6,0,0],[0,1.4,3],Kt.ROOF),u3(t,[fo.x0-.3,fo.top+.16,tt.northCol-le-.42],[fo.x0-.3,fo.top+1.56,tt.northCol-le+2.58],[fo.x0-.3,fo.top+.16,tt.northCol-le+2.58],[-1,0,0],Kt.BRICK),u3(t,[fo.x1+.3,fo.top+.16,tt.northCol-le-.42],[fo.x1+.3,fo.top+1.56,tt.northCol-le+2.58],[fo.x1+.3,fo.top+.16,tt.northCol-le+2.58],[1,0,0],Kt.BRICK),Un(t,fo.x0,S0,tt.northCol+le,fo.x1,fo.top,tt.northCol+2.6,Kt.BRICK);for(let[r,a]of[[tt.cx-9.8,tt.northBack+.6],[tt.cx+9.4,tt.northBack+.4],[tt.cx-4.6,tt.northBack+1]])Un(t,r-.4,12.5,a-.4,r+.4,15.4,a+.4,Kt.BRICK),Un(t,r-.52,15.4,a-.52,r+.52,15.62,a+.52,Kt.STONE);let o=(r,a,s)=>{let i=r==="west"?-1:1,c=[];f3.forEach((v,h)=>{let u=Rl(v);h===1?c.push({c:u,y0:0,y1:2.9,w:1.4,door:!0}):c.push({c:u,y0:1,y1:2.75,w:1.05}),c.push({c:u,y0:3.85,y1:5.45,w:1.05})}),h3(t,r,{u0:tt.south,u1:tt.northCol-le,top:()=>Qa,arches:[],bays:f3,cols:[],win:[7.45,8.85],extraWindows:c,noEnds:!0,cornice:[[tt.south,tt.northCol-le,Qa]]}),Un(t,a,0,tt.south,s+i*(le+.12),Qa,tt.northBack+.3,Kt.BRICK);let f=s-i*le;Un(t,f,0,tt.south,f-i*.06,.55,tt.northCol-le,Kt.STONE);let l=s-i*(le+.42);zl(t,[l,Qa+.16,tt.south],[0,0,tt.northCol-le-tt.south],[a-l+i*.4,1.9,0],Kt.ROOF)};o("west",tt.westBack,tt.westCol),o("east",tt.eastBack,tt.eastCol);let n=Za.x1+.7;Un(t,13.65,7.4,tt.south-.02,n,7.62,tt.south+.14,Kt.STONE),Un(t,13.65,10.4,tt.south-.02,n,10.6,tt.south+.38,Kt.STONE),zl(t,[13.65,10.6,tt.south+.38],[n-13.65,0,0],[0,2.2,-5],Kt.ROOF)}function u3(t,e,o,n,r,a){let s=[a,0,0];t.tri(t.vert(e,r,s),t.vert(o,r,s),t.vert(n,r,s))}function zl(t,e,o,n,r){let a=_h([o[1]*n[2]-o[2]*n[1],o[2]*n[0]-o[0]*n[2],o[0]*n[1]-o[1]*n[0]]),s=a[1]<0?a.map(f=>-f):a,i=(f,l)=>[e[0]+o[0]*f+n[0]*l,e[1]+o[1]*f+n[1]*l,e[2]+o[2]*f+n[2]*l];sc(t,i(0,0),i(1,0),i(1,1),i(0,1),s,[r,0,0]);let c=.08;sc(t,i(0,0),i(1,0),[i(1,0)[0],i(1,0)[1]-c,i(1,0)[2]],[i(0,0)[0],i(0,0)[1]-c,i(0,0)[2]],_h([-n[0],0,-n[2]]),[r,0,0])}function f8(t){let e=tt.westBack,o=tt.eastBack,n=tt.south,r=tt.northBack,a=36,s=22,i=[];for(let c=0;c<=a;c++){i.push([]);for(let f=0;f<=s;f++){let l=[e+(o-e)*c/a,0,n+(r-n)*f/s];i[c].push(t.vert(l,[0,1,0],[Kt.GROUND,0,0]))}}for(let c=0;c<a;c++)for(let f=0;f<s;f++)t.tri(i[c][f],i[c+1][f],i[c+1][f+1]),t.tri(i[c][f],i[c+1][f+1],i[c][f+1])}var Ll=.46,Bs=.58,Gs=[[-.5,0],[-.52,.45],[-.46,.78],[-.3,.95],[0,1],[.3,.95],[.46,.78],[.52,.45],[.5,0]];function h8(t,e,o){let n=Hs+o,r=(t>0?$o.x1-tt.cx:tt.cx-$o.x0)-Us-o,a=Hs+o,s=(e>0?$o.z1-tt.cz:tt.cz-$o.z0)-Us-o,i=bh+o,c=Math.sqrt(i*i-n*n),f=Math.sqrt(i*i-a*a),l=[[n,c],[n,s],[r,s],[r,a],[f,a]],v=Math.atan2(a,f),h=Math.atan2(c,n);for(let u=1;u<10;u++){let p=v+(h-v)*u/10;l.push([Math.cos(p)*i,Math.sin(p)*i])}return l.map(([u,p])=>[tt.cx+t*u,tt.cz+e*p])}function u8(t,e,o){let n=o[0]-e[0],r=o[1]-e[1],a=Math.hypot(n,r),s=n/a,i=r/a,c=-i,f=s,l=Ll*.5,v=-l,h=a+l,u=[],p=Math.max(1,Math.ceil((h-v)/1));for(let d=0;d<=p;d++){let m=v+(h-v)*d/p,g=[];for(let x=0;x<Gs.length;x++){let[b,w]=Gs[x],_=Math.min(Gs.length-2,x),M=Gs[Math.max(0,x-1)],A=Gs[Math.min(Gs.length-1,x+1)],$=(A[0]-M[0])*Ll,W=(A[1]-M[1])*Bs,H=-$,D=Math.hypot(W,H)||1,C=[e[0]+s*m+c*b*Ll,w*Bs,e[1]+i*m+f*b*Ll],P=[c*(-W/D),-H/D,f*(-W/D)];g.push(t.vert(C,P[1]<-.2?[c*Math.sign(b),.3,f*Math.sign(b)]:P,[Kt.HEDGE,0,0]))}u.push(g)}for(let d=0;d<p;d++)for(let m=0;m<Gs.length-1;m++)t.tri(u[d][m],u[d+1][m],u[d+1][m+1]),t.tri(u[d][m],u[d+1][m+1],u[d][m+1]);for(let[d,m]of[[0,-1],[p,1]]){let g=u[d],x=t.vert([e[0]+s*(d?h:v),Bs*.5,e[1]+i*(d?h:v)],[s*m,0,i*m],[Kt.HEDGE,0,0]);for(let b=0;b<g.length-1;b++)t.tri(x,g[b],g[b+1])}}function d8(t){for(let e of[-1,1])for(let o of[-1,1]){let n=h8(e,o,.3);for(let r=0;r<n.length;r++)u8(t,n[r],n[(r+1)%n.length])}}function p8(t){let e=tt.cx,o=tt.cz,n=()=>[Kt.STONE,0,0];t.lathe([[1.45,0,1],[1.45,.14,1],[1.12,.14,1],[1.12,.3,1],[0,.3]],e,o,8,{mat:n}),t.lathe([[.76,.3,1],[.8,.38,1],[.74,.44],[.76,.7],[.82,.9],[.8,1.02,1],[.88,1.06,1],[.88,1.18,1],[.6,1.18,1],[.6,.98]],e,o,24,{mat:n}),t.lathe([[.6,.98,1],[0,.98]],e,o,16,{mat:()=>[Kt.DARK,0,0]});let r={mat:()=>[Kt.IRON,0,0]};t.tube([[e-.72,1.1,o],[e-.72,1.9,o],[e-.7,2.3,o]],()=>.035,8,6,r),t.tube([[e+.72,1.1,o],[e+.72,1.9,o],[e+.7,2.3,o]],()=>.035,8,6,r);let a=[];for(let s=0;s<=10;s++){let i=Math.PI*s/10;a.push([e-Math.cos(i)*.7,2.3+Math.sin(i)*.45,o])}t.tube(a,()=>.03,20,6,r),t.tube([[e-.45,2.25,o],[e,2.38,o],[e+.45,2.25,o]],()=>.02,8,5,r),t.ellipsoid([e,2.32,o],[.03,.13,.13],6,10,r);for(let s of[-1,1]){let i=[];for(let c=0;c<=12;c++){let f=c/12*Math.PI*1.6,l=.16*(1-c/16);i.push([e+s*(.72-.18+Math.cos(f)*l*s*-1+0),1.95+Math.sin(f)*l,o])}t.tube(i,()=>.016,16,5,r)}}function v8(t){for(let[e,o]of td)t.lathe([[.26,0,1],[.3,.06],[.36,.42],[.38,.5,1],[.44,.52,1],[.44,.64,1],[.38,.66,1],[.37,.6]],e,o,20,{mat:()=>[Kt.POT,0,0]}),t.lathe([[.37,.6,1],[0,.6]],e,o,12,{mat:()=>[Kt.SOIL,0,0]}),t.tube([[e,.6,o],[e+.02,1,o-.01],[e-.01,1.45,o+.02]],n=>.045-n*.02,6,6,{mat:()=>[Kt.BARK,0,0]})}function m8(t){let[e,,o]=Ka.c,n=M3(7),r=[[-1.8,.4,3.6],[1.6,-.9,3.9],[.4,1.9,3.4],[-.6,-1.7,4.2],[2.1,1.2,3.2]];for(let[a,s,i]of r){let c=[[e+a*.05,0,o+s*.05],[e+a*.25,i*.35,o+s*.25],[e+a*.6,i*.7,o+s*.6],[e+a,i,o+s],[e+a*1.35+(n()-.5),i+1.4,o+s*1.35+(n()-.5)]];t.tube(c,f=>.2*(1-f*.75),14,9,{mat:()=>[Kt.BARK,0,0]});for(let f=0;f<2;f++){let l=.55+f*.2,v=[e+a*l,i*l,o+s*l],h=n()*Math.PI*2;t.tube([v,[v[0]+Math.cos(h)*1.3,v[1]+.9,v[2]+Math.sin(h)*1.3],[v[0]+Math.cos(h)*2.3,v[1]+1.4+n(),v[2]+Math.sin(h)*2.3]],u=>.08*(1-u*.7),8,6,{mat:()=>[Kt.BARK,0,0]})}}for(let a of ra.filter(s=>s.spindle))t.tube([[a.c[0],0,a.c[2]],[a.c[0],1.4,a.c[2]]],()=>.12,3,7,{mat:()=>[Kt.BARK,0,0]})}function g8(t){let e=()=>[Kt.FARBRICK,0,0],o=()=>[Kt.LEAD,0,0],n=(a,s,i,c,f,l)=>{t.lathe([[i+.3,20,1],[i+.3,c-1.2,1],[i+.8,c-.9,1],[i+.8,c,1],[i,c,1]],a,s,28,{mat:e});let v=[];for(let u=0;u<=12;u++){let p=u/12*Math.PI/2,d=Math.cos(p)*i,m=Math.sin(p)*f;l&&(d*=1-.18*Math.sin(p*2)),v.push([Math.max(d,i*.12),c+m])}t.lathe(v,a,s,28,{mat:o});let h=c+f;t.lathe([[i*.13,h-.2,1],[i*.13,h+3,1],[i*.18,h+3.2,1],[i*.02,h+6.4]],a,s,10,{mat:o})};Un(t,14,0,104,52,26,150,Kt.FARBRICK),t.lathe([[3,26],[.1,32]],33,108,4,{mat:e}),n(26,124,7.2,33,9.5,!0),n(40.5,116,6,31,8,!0),n(16.5,117,5.5,30,7.2,!0),t.lathe([[6.4,20,1],[6.4,34,1],[6.9,34.4,1],[6,34.4,1],[.6,46.5,1],[.15,50]],33,132,24,{mat:o});let r=(a,s,i)=>{Un(t,a-1.8,0,s-1.8,a+1.8,i,s+1.8,Kt.FARBRICK),t.lathe([[1.9,i,1],[1.6,i+3.5,1],[1.2,i+3.5,1],[1.2,i+6,1],[.9,i+6.2,1],[.05,i+13]],a,s,8,{mat:e})};r(20.5,109,36),r(46.5,112,38)}function x8(t){let o=[tt.cx,0,tt.cz],n=24,r=10,a=[];for(let s=0;s<=n;s++){a.push([]);let i=-Math.PI*.62+Math.PI*1.24*s/n;for(let c=0;c<=r;c++){let f=Math.PI/2*(c/r)-.05,l=[Math.sin(i)*Math.cos(f),Math.sin(f),Math.cos(i)*Math.cos(f)],v=[o[0]+l[0]*420,o[1]+l[1]*420,o[2]+l[2]*420];a[s].push(t.vert(v,[-l[0],-l[1],-l[2]],[Kt.SKY,0,0]))}}for(let s=0;s<n;s++)for(let i=0;i<r;i++)t.tri(a[s][i],a[s+1][i],a[s+1][i+1]),t.tri(a[s][i],a[s+1][i+1],a[s][i+1])}function y8(){let t=[],e=[],o=[],n=[],r=KM.createBuilder(t,e,o,n);return f8(r),l8(r),d8(r),p8(r),v8(r),m8(r),r.save(),r.translate(ac[0],0,ac[1]),g8(r),r.restore(),x8(r),{position:t,normal:e,elements:o,attr:n}}var _3=[[[13.65,0,Za.z0-.7],[Za.x1+.7,10.6,tt.south]],[[tt.westBack,Ja,tt.northCol-le],[tt.eastBack,S0,tt.northBack+3.4]],[[fo.x0,S0,tt.northCol-le],[fo.x1,fo.top,tt.northCol+2.6]],[[tt.westBack,0,tt.south],[tt.westCol+le,Qa,tt.northBack+.3]],[[tt.eastCol-le,0,tt.south],[tt.eastBack,Qa,tt.northBack+.3]],[[14+ac[0],0,104+ac[1]],[52+ac[0],26,150+ac[1]]]];function b8(t,e,o,n){let r=.001,a=1e9;for(let s=0;s<3;s++){if(Math.abs(e[s])<1e-9){if(t[s]<o[s]||t[s]>n[s])return!1;continue}let i=(o[s]-t[s])/e[s],c=(n[s]-t[s])/e[s];if(i>c&&([i,c]=[c,i]),r=Math.max(r,i),a=Math.min(a,c),r>a)return!1}return!0}function yh(t,e,o,n){let r=[(t[0]-o[0])/n[0],(t[1]-o[1])/n[1],(t[2]-o[2])/n[2]],a=[e[0]/n[0],e[1]/n[1],e[2]/n[2]],s=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],i=r[0]*a[0]+r[1]*a[1]+r[2]*a[2],c=r[0]*r[0]+r[1]*r[1]+r[2]*r[2]-1,f=i*i-s*c;if(f<=0)return 0;let l=Math.sqrt(f),v=Math.max(0,(-i-l)/s),h=(-i+l)/s;return Math.max(0,h-v)}function Zu(t){for(let[e,o]of _3)if(b8(t,na,e,o))return 0;return 1}function M3(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let o=e;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}function w8(){let t=[],e=[],o=[],n=[],r=[],a=[],s=[],i=M3(21),c=(p,d,m,g,x,b,w)=>{let _=t.length/3;for(let[M,A]of[[-1,-1],[1,-1],[1,1],[-1,1]])t.push(...p),e.push(M,A),o.push(d,m,g),n.push(...x),r.push(...b),a.push(...w);s.push(_,_+1,_+2,_,_+2,_+3)},f=(p,d)=>{let m=1;for(let g of ra){if(g===d||!g.shadow)continue;let x=yh(p,na,g.c,g.r);x>0&&(m*=Math.exp(-x*.9))}return m},l=ra.map(p=>({...p,pts:null}));for(let p of l)for(let d=0;d<p.n;d++){let m;do m=[i()*2-1,i()*2-1,i()*2-1];while(m[0]*m[0]+m[1]*m[1]+m[2]*m[2]>1);let g=Math.hypot(m[0],m[1],m[2])||1,x=Math.pow(i(),.35)*.98,b=[m[0]/g*x,m[1]/g*x,m[2]/g*x];if(p.spindle){let C=b[1],P=Math.sqrt(Math.max(.02,1-C*C))*(C>0?1-C*.55:1+C*.25),nt=Math.hypot(b[0],b[2])||1,yt=P*Math.min(1,nt*1.4);b=[b[0]/nt*yt,C,b[2]/nt*yt]}p.magnolia&&b[1]<-.55&&(b[1]=-.55+(b[1]+.55)*.35);let w=[p.c[0]+b[0]*p.r[0],p.c[1]+b[1]*p.r[1],p.c[2]+b[2]*p.r[2]],_,M;if(p.magnolia){let C=0;for(let yt of x3)C=Math.max(C,yh(w,na,yt.c,yt.r));_=Math.exp(-C*1.1);let P=1;for(let yt of ra)if(!yt.magnolia&&yt.shadow){let vt=yh(w,na,yt.c,yt.r);vt>0&&(P*=Math.exp(-vt*.9))}_*=Zu(w)*P;let nt=e8(w,Ka.c);M=_h([nt[0]/Ka.r[0]+b[0]*.5,nt[1]/Ka.r[1]+b[1]*.5,nt[2]/Ka.r[2]+b[2]*.5]),x=Math.min(1,Math.hypot(nt[0]/Ka.r[0],nt[1]/Ka.r[1],nt[2]/Ka.r[2])*.6+x*.4)}else{let C=yh(w,na,p.c,p.r);_=Math.exp(-C*(p.spindle?2.2:1.25)),_*=Zu(w)*f(w,ra[l.indexOf(p)]),M=_h([b[0]/p.r[0],b[1]/p.r[1],b[2]/p.r[2]])}let A=Math.max(0,M[0]*na[0]+M[1]*na[1]+M[2]*na[2]),$=.25+.75*Math.pow(x,1.5)*(.65+.35*(M[1]*.5+.5)),R=p.size[0]+(p.size[1]-p.size[0])*i(),W=.85+i()*.3,H=p.leaf.map(C=>C*W),D=p.cell;p.cell===3&&i()<.35&&(D=2),c(w,R,D,i()*Math.PI*2,[_,$,.35+.65*A],H,p.bloom)}for(let[p,d]of y3){let m=i()<.5;for(let g=0;g<3;g++){let x=[p+(i()-.5)*.7,.28+i()*.22,d+(i()-.5)*.5],b=Zu(x)*f(x,null);c(x,.32+i()*.12,i()<.7?3:2,i()*6.28,[b,.6+i()*.3,.8],[.75,.9,.6],m?[1,.55,.75]:[.85,.8,1.15])}}let v=s.length/6,h=Array.from({length:v},(p,d)=>d);for(let p=v-1;p>0;p--){let d=Math.floor(i()*(p+1));[h[p],h[d]]=[h[d],h[p]]}let u=[];for(let p of h)for(let d=0;d<6;d++)u.push(s[p*6+d]);return{center:t,corner:e,par:o,light:n,tint:r,bloom:a,elements:u}}var ae=t=>t.toFixed(4),Ol=t=>`vec3(${ae(t[0])}, ${ae(t[1])}, ${ae(t[2])})`,k3=`
const vec3 SUN = ${Ol(na)};
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
`,_8=_3.map(([t,e])=>`if (hitBox(ro, SUN, ${Ol(t)}, ${Ol(e)})) return 0.0;`).join(`
	`),M8=ra.filter(t=>t.shadow).map(t=>`tr *= crownShade(ro, ${Ol(t.c)}, ${Ol(t.r)}, ${t.spindle?"1.8":"1.0"});`).join(`
	`),k8=(t,e,o,n,r,a,s,i,c)=>`
	{
		float t = (${ae(e)} - ro.${t}) / SUN.${t};
		if (t > 0.0) {
			vec3 q = ro + SUN * t;
			float u = q.${t==="z"?"x":"z"};
			if (q.y < ${ae(Ja)} && u > ${ae(o-le)} && u < ${ae(o+n*r+le)}) {
				float k = floor((u - ${ae(o)}) / ${ae(n)});
				float a = ${ae(o)} + k * ${ae(n)} + (k < 0.5 ? ${ae(a)} : 0.02);
				float b = ${ae(o)} + (k + 1.0) * ${ae(n)} - (k > ${ae(r-1.5)} ? ${ae(s)} : 0.02);
				float c = 0.5 * (a + b), r = 0.5 * (b - a) - 0.2;
				float d = abs(u - c);
				float sill = abs(k - ${ae(i)}) < 0.5 ? 0.0 : ${ae(Nl+.09)};
				bool hole = (q.y > sill && q.y < ${ae(_r)} && u > a && u < b && d < 0.5 * (b - a) - 0.17)
					|| (q.y >= ${ae(_r)} && d * d + (q.y - ${ae(_r)}) * (q.y - ${ae(_r)}) < r * r);
				if (!hole && ${c}) return 0.0;
			}
		}
	}`,Mh=Hs+.3,kh=Hs+.3,Pl=bh+.3,d3=$o.x1-tt.cx-Us-.3,S8=$o.z1-tt.cz-Us-.3,E8=tt.cz-$o.z0-Us-.3,A8=Math.sqrt(Pl*Pl-Mh*Mh),T8=Math.sqrt(Pl*Pl-kh*kh),z8=[[tt.cx,tt.cz,.86,1.18],[tt.cx,tt.cz,1.25,.3],...td.map(([t,e])=>[t,e,.42,.65])].map(([t,e,o,n])=>`if (hitCyl(ro, vec2(${ae(t)}, ${ae(e)}), ${ae(o)}, ${ae(n)})) return 0.0;`).join(`
	`),L8=`
float segDist(vec2 p, vec2 a, vec2 b) {
	vec2 pa = p - a, ba = b - a;
	float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
	return length(pa - ba * h);
}

// distance to the nearest hedge line
float hedgeDist(vec2 xz) {
	vec2 q = abs(xz - vec2(${ae(tt.cx)}, ${ae(tt.cz)}));
	float b1 = xz.y > ${ae(tt.cz)} ? ${ae(S8)} : ${ae(E8)};
	vec2 A = vec2(${ae(Mh)}, ${ae(A8)}), Bp = vec2(${ae(Mh)}, b1), C = vec2(${ae(d3)}, b1);
	vec2 D = vec2(${ae(d3)}, ${ae(kh)}), E = vec2(${ae(T8)}, ${ae(kh)});
	float d = min(min(segDist(q, A, Bp), segDist(q, Bp, C)), min(segDist(q, C, D), segDist(q, D, E)));
	float ang = atan(q.y, q.x);
	if (ang > atan(E.y, E.x) && ang < atan(A.y, A.x)) d = min(d, abs(length(q) - ${ae(Pl)}));
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
	${_8}
	${k8("z",tt.northCol,tt.westCol,Ju,Sh,le+Cl,le+Cl,m3,"ro.z > "+ae(tt.northCol-le))}
	// on lighter settings only the buildings cast shadows
	if (gardenDetail < 0.5) return 1.0;
	${z8}
	if (ro.y < ${ae(Bs)} && ro.x > ${ae($o.x0)} && ro.x < ${ae($o.x1)}) {
		for (int i = 1; i <= 4; i++) {
			float t = float(i) / 4.0 * (${ae(Bs)} - ro.y) / SUN.y;
			vec3 q = ro + SUN * t;
			float w = ${ae(Ll*.5)} * sqrt(max(0.0, 1.0 - pow(q.y / ${ae(Bs)}, 4.0)));
			if (hedgeDist(q.xz) < w) return 0.0;
		}
	}
	float tr = 1.0;
	${M8}
	return tr;
}
`,N8=`
precision highp float;
${p3}
varying vec3 v_pos, v_normal, v_attr, v_eye;
uniform float time, gardenDetail;
${k3}
${L8}

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

	if (kind == ${Kt.SKY}.0) {
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

	if (kind == ${Kt.GROUND}.0) {
		bool yard = P.x > ${ae($o.x0)} && P.x < ${ae($o.x1)} && P.z < ${ae($o.z1)};
		if (!yard) {
			// stone slabs under the arcades
			vec2 g = P.xz / 0.62;
			vec2 fg = fract(g);
			float h = hash(floor(g));
			base = mix(vec3(0.66, 0.60, 0.52), vec3(0.76, 0.70, 0.62), h);
			base *= 1.0 - 0.25 * (step(fg.x, 0.03) + step(fg.y, 0.03)) * (1.0 - lod);
			spec = 0.15;
		} else {
			float ex = min(P.x - ${ae($o.x0)}, ${ae($o.x1)} - P.x);
			float ez = min(P.z - ${ae($o.z0)}, ${ae($o.z1)} - P.z);
			float edge = min(ex, ez);
			float dx = abs(P.x - ${ae(tt.cx)}), dz = abs(P.z - ${ae(tt.cz)});
			float rc = length(vec2(dx, dz));
			if (edge < ${ae(Us)}) {
				// brick path laid in rows, with a stone kerb
				vec2 q = ex < ez ? P.zx : P.xz;
				base = brick(q * vec2(1.0, 2.6), 0.4) * 0.9;
				if (abs(edge - ${ae(Us)}) < 0.08) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (rc < ${ae(bh)}) {
				// brick in rings round the wellhead
				float ang = atan(P.z - ${ae(tt.cz)}, P.x - ${ae(tt.cx)});
				vec2 q = vec2(ang * rc, rc);
				base = brick(q * vec2(1.0, 2.6), 0.5) * 0.92;
				if (abs(rc - ${ae(bh)}) < 0.1) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (dx < ${ae(Hs)} || dz < ${ae(Hs)}) {
				// pale gravel
				float g = noise(P.xz * 40.0) * 0.6 + noise(P.xz * 9.0) * 0.4;
				base = mix(vec3(0.66, 0.58, 0.46), vec3(0.86, 0.79, 0.66), mix(g, 0.5, lod));
				base *= 0.94 + 0.12 * noise(P.xz * 1.3);
				float e = min(${ae(Hs)} - min(dx, dz), 1.0);
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
			ao *= 0.6 + 0.4 * smoothstep(0.85, 1.6, length(P.xz - vec2(${ae(tt.cx)}, ${ae(tt.cz)})));
		}
	} else if (kind == ${Kt.BRICK}.0) {
		float pink = smoothstep(0.4, 0.6, noise(wq * 0.05 + 7.0));
		base = mix(brick(wq, 0.25 * pink), vec3(0.68, 0.46, 0.33), lod * 0.6);
		base *= 1.0 - 0.18 * smoothstep(0.0, 1.5, 1.6 - P.y) * noise(wq * 1.5);
		ao *= 0.78 + 0.22 * smoothstep(0.0, 1.2, P.y);
	} else if (kind == ${Kt.STONE}.0) {
		float n = noise(wq * 3.0) * 0.5 + noise(wq * 0.7) * 0.5;
		base = mix(vec3(0.74, 0.70, 0.62), vec3(0.86, 0.83, 0.76), n);
		spec = 0.1;
	} else if (kind == ${Kt.MARBLE}.0) {
		// red Verona marble
		float n = noise3(P * vec3(5.0, 1.5, 5.0)) * 0.6 + noise3(P * 14.0) * 0.4;
		base = mix(vec3(0.56, 0.32, 0.25), vec3(0.68, 0.42, 0.33), n);
		base = mix(base, vec3(0.80, 0.66, 0.56), smoothstep(0.66, 0.74, noise3(P * 9.0 + 3.0)) * 0.35);
		spec = 0.35;
	} else if (kind == ${Kt.HEDGE}.0) {
		float n = noise3(P * 9.0) * 0.55 + noise3(P * 2.5) * 0.45;
		base = mix(vec3(0.05, 0.16, 0.04), vec3(0.22, 0.38, 0.10), n);
		ao *= 0.55 + 0.45 * smoothstep(0.0, ${ae(Bs)}, P.y) * (0.6 + 0.4 * n);
		N = normalize(N + vec3(noise3(P * 13.0) - 0.5, 0.0, noise3(P * 13.0 + 5.0) - 0.5) * 0.9);
	} else if (kind == ${Kt.POT}.0) {
		base = mix(vec3(0.66, 0.34, 0.20), vec3(0.75, 0.44, 0.28), noise(wq * 6.0));
	} else if (kind == ${Kt.SOIL}.0) {
		base = vec3(0.20, 0.14, 0.09);
	} else if (kind == ${Kt.ROOF}.0) {
		// rows of curved clay tiles
		float along = abs(N.x) > abs(N.z) ? P.z : P.x;
		float rib = abs(fract(along / 0.24) - 0.5) * 2.0;
		float h = hash(vec2(floor(along / 0.24), floor(P.y / 0.42)));
		base = mix(vec3(0.58, 0.30, 0.20), vec3(0.72, 0.44, 0.30), h);
		base = mix(base, vec3(0.45, 0.42, 0.36), smoothstep(0.55, 0.85, noise(P.xz * 0.6)) * 0.4);
		base *= mix(0.62 + 0.38 * (1.0 - rib * rib), 0.85, lod);
	} else if (kind == ${Kt.SHUTTER}.0) {
		float slat = fract(P.y / 0.07);
		base = vec3(0.17, 0.30, 0.20) * (0.75 + 0.25 * smoothstep(0.1, 0.5, slat));
	} else if (kind == ${Kt.PANE}.0) {
		vec3 R = reflect(-V, N);
		base = vec3(0.03, 0.035, 0.04);
		vec3 refl = skyColor(normalize(vec3(R.x, abs(R.y), R.z))) * 0.25;
		gl_FragColor = vec4(toNight(tonemap(base + refl * (0.4 + 0.6 * pow(1.0 - abs(dot(N, V)), 3.0))), 0.45), 1.0);
		return;
	} else if (kind == ${Kt.PLASTER}.0) {
		base = mix(vec3(0.82, 0.76, 0.64), vec3(0.88, 0.83, 0.72), noise(wq * 1.3));
		// a darker dado on the back walls
		if (abs(N.y) < 0.5 && P.y < 1.1) base *= 0.82;
	} else if (kind == ${Kt.BARK}.0) {
		base = mix(vec3(0.30, 0.27, 0.24), vec3(0.45, 0.42, 0.38), noise3(P * vec3(8.0, 2.0, 8.0)));
	} else if (kind == ${Kt.IRON}.0) {
		base = vec3(0.07, 0.07, 0.07);
		spec = 0.4;
	} else if (kind == ${Kt.LEAD}.0) {
		base = mix(vec3(0.30, 0.33, 0.35), vec3(0.40, 0.43, 0.45), noise(P.xy * 0.5));
		// ribs on the domes
		float a = atan(P.z - floor(P.z / 50.0) * 50.0, 1.0);
		base *= 0.9 + 0.1 * step(0.5, fract(a * 6.0));
		far = 1.0;
	} else if (kind == ${Kt.FARBRICK}.0) {
		base = mix(vec3(0.66, 0.46, 0.34), vec3(0.74, 0.54, 0.40), noise(P.xy * 0.3));
		// a row of small arches under the eaves and some dark windows
		far = 1.0;
	} else if (kind == ${Kt.DARK}.0) {
		base = vec3(0.025, 0.022, 0.02);
	}

	// ---------- light ----------

	// in the arcade walks the sky is mostly hidden
	bool walk = (P.x < ${ae(tt.westCol)} || P.x > ${ae(tt.eastCol)} || P.z > ${ae(tt.northCol)}) && P.y < ${ae(Ja+.05)} && P.z > ${ae(tt.south-.1)} && P.z < ${ae(tt.northBack+.5)};
	float skyVis = 0.55 + 0.45 * N.y;
	if (walk) {
		float depth = P.z > ${ae(tt.northCol)} ? P.z - ${ae(tt.northCol)} : (P.x < ${ae(tt.westCol)} ? ${ae(tt.westCol)} - P.x : P.x - ${ae(tt.eastCol)});
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
}`,R8=`
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
}`,C8=`
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
}`,O8=`
precision highp float;
${p3}
uniform sampler2D leaves;
varying vec2 v_uv;
varying vec3 v_light, v_tint, v_bloom, v_pos;
${k3}
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
}`;function P8(t,e,o){let n=t.texture({data:[[o]],min:"linear",mag:"linear"});return fetch(e).then(r=>{if(!r.ok)throw new Error("Could not load "+e);return r.blob()}).then(r=>createImageBitmap(r,{premultiplyAlpha:"none"})).then(r=>n({data:r,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(r=>console.error(r)),n}ed.exports=t=>{let e=y8(),o=w8(),n=P8(t,"res/garden/foliage.webp",[0,0,0,0]),r=Date.now(),a=()=>Qu.motion?window.__streetClock!==void 0?window.__streetClock:(Date.now()-r)/1e3:20,s=t({frag:N8,vert:R8,attributes:{position:e.position,normal:e.normal,attr:e.attr},elements:new Uint32Array(e.elements),uniforms:{time:a,gardenDetail:()=>Qu.gardenDetail}}),i=t({frag:O8,vert:C8,attributes:{center:o.center,corner:o.corner,par:o.par,light:o.light,tint:o.tint,bloom:o.bloom},elements:new Uint32Array(o.elements),uniforms:{leaves:n,time:a},cull:{enable:!1},count:()=>Math.floor(o.elements.length*Qu.leafShare/6)*6});return function(){s(),i()}};ed.exports.layout={G:tt,YARD:$o,SUN:na}});var L3=xt((tT,z3)=>{"use strict";var I8=tr().GLSL,$8=zs(),{C:T3}=vr(),Mr=T3.x1+.35,ad=T3.zc,od=[Mr-7.3,2,ad],E3=5.2*Math.PI/180,A3=2100,F8=725,q8=1288,D8=1450,G8=2576,ka=ad-3.2,Th=ad+3.3,nd=Mr+5,rd=Mr+11.7,ic=3.9,Il=Mr+22.7,Eh=40;function H8(){let t=[],e=[],o=[],n=[],r=$8.createBuilder(t,e,o,n),a=(l,v,h,u,p,d)=>{let m=[];for(let g=0;g<=p;g++){m.push([]);for(let x=0;x<=d;x++){let b=[0,1,2].map(w=>l[w]+v[w]*g/p+h[w]*x/d);m[g].push(r.vert(b,u,[0,0,0]))}}for(let g=0;g<p;g++)for(let x=0;x<d;x++)r.tri(m[g][x],m[g+1][x],m[g+1][x+1]),r.tri(m[g][x],m[g+1][x+1],m[g][x+1])},s=Th-ka,i=.7;a([Mr-i,0,ka],[nd-Mr+i,0,0],[0,0,s],[0,1,0],6,4);let c=rd-nd,f=Math.hypot(c,ic);return a([nd,0,ka],[c,ic,0],[0,0,s],[-ic/f,c/f,0],6,4),a([rd,ic,ka],[Il-rd,0,0],[0,0,s],[0,1,0],6,4),a([Mr-i,0,ka],[Il-Mr+i,0,0],[0,Eh,0],[0,0,1],12,12),a([Mr-i,0,Th],[Il-Mr+i,0,0],[0,Eh,0],[0,0,-1],12,12),a([Il,0,ka],[0,Eh,0],[0,0,s],[-1,0,0],8,4),a([Mr-i,Eh,ka],[Il-Mr+i,0,0],[0,0,s],[0,-1,0],6,4),{position:t,normal:e,elements:o,attr:n}}var $r=t=>t.toFixed(5),Ah=[[Mr+3.4,3.7,ka+.01,1],[Mr+8.6,4.1,Th-.01,-1],[Mr+14.8,ic+3.3,ka+.01,1],[Mr+19.6,ic+3.6,Th-.01,-1]],B8=`
precision highp float;
${I8}
uniform sampler2D photo;
uniform float time;
varying vec3 v_pos;
varying vec3 v_normal;
const int NLAMP = ${Ah.length};
vec4 LAMP[NLAMP];

void main() {
	${Ah.map((t,e)=>`LAMP[${e}] = vec4(${$r(t[0])}, ${$r(t[1])}, ${$r(t[2])}, ${$r(t[3])});`).join(`
	`)}
	vec3 d = v_pos - vec3(${$r(od[0])}, ${$r(od[1])}, ${$r(od[2])});
	float c = ${$r(Math.cos(E3))}, s = ${$r(Math.sin(E3))};
	float fw = d.x * c + d.y * s;
	float up = -d.x * s + d.y * c;
	fw = max(fw, 0.05);
	vec2 px = vec2(${$r(F8)} + ${$r(A3)} * d.z / fw, ${$r(q8)} - ${$r(A3)} * up / fw);
	vec2 uv = px / vec2(${$r(D8)}, ${$r(G8)});
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
	for (int i = 0; i < ${Ah.length}; i++) {
		vec4 L = LAMP[i];                       // x, y, z, side (+1 left wall, -1 right)
		vec3 d = L.xyz - v_pos;
		float dd = dot(d, d);
		float fl = 0.92 + 0.05 * sin(time * 7.3 + float(i) * 2.1) + 0.03 * sin(time * 17.0 + float(i));
		// the wall it hangs on is lit across, the paving from above
		float face = v_normal.y > 0.5 ? max(normalize(d).y, 0.0) : 0.35 + 0.65 * max(dot(v_normal, normalize(d)), 0.0);
		lit += albedo * vec3(1.0, 0.62, 0.30) * face * fl * lampK * 3.2 / (0.6 + dd * 0.45);
	}
	gl_FragColor = vec4(lit, 1.0);
}`,U8=`
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
}`;z3.exports=t=>{let e=H8(),o=t.texture({data:[[[120,105,85]]],min:"linear",mag:"linear"});fetch("res/florence/photo.jpg").then(i=>{if(!i.ok)throw new Error("Could not load the Florence photo");return i.blob()}).then(i=>createImageBitmap(i)).then(i=>o({data:i,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(i=>console.error(i));let n=t({frag:B8,vert:U8,attributes:{position:e.position,normal:e.normal},elements:new Uint32Array(e.elements),uniforms:{photo:o},cull:{enable:!1}}),r={pos:[],nrm:[],k:[],idx:[]},a=(i,c,f)=>{let[l,v,h]=i,u=[[[1,0,0],[0,1,0],[0,0,1]],[[-1,0,0],[0,1,0],[0,0,-1]],[[0,0,1],[0,1,0],[-1,0,0]],[[0,0,-1],[0,1,0],[1,0,0]],[[0,1,0],[0,0,1],[1,0,0]],[[0,-1,0],[0,0,1],[-1,0,0]]];for(let[p,d,m]of u){let g=r.pos.length/3;for(let[x,b]of[[-1,-1],[1,-1],[1,1],[-1,1]])r.pos.push(l+p[0]*c[0]+d[0]*x*c[0]+m[0]*b*c[0],v+p[1]*c[1]+d[1]*x*c[1]+m[1]*b*c[1],h+p[2]*c[2]+d[2]*x*c[2]+m[2]*b*c[2]),r.nrm.push(...p),r.k.push(f);r.idx.push(g,g+1,g+2,g,g+2,g+3)}};for(let i of Ah){let c=i[3],f=i[2]+c*.42;a([i[0],i[1],f],[.11,.17,.11],1);for(let l of[-1,1])for(let v of[-1,1])a([i[0]+l*.11,i[1],f+v*.11],[.014,.18,.014],0);a([i[0],i[1]+.2,f],[.15,.03,.15],0),a([i[0],i[1]+.27,f],[.05,.05,.05],0),a([i[0],i[1]-.19,f],[.09,.025,.09],0),a([i[0],i[1]+.34,i[2]+c*.21],[.015,.015,.21],0),a([i[0],i[1]+.15,i[2]+c*.03],[.04,.24,.03],0)}let s=t({vert:`
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
		}`,attributes:{position:r.pos,normal:r.nrm,k:r.k},elements:new Uint16Array(r.idx),cull:{enable:!1}});return function(){n(),s()}}});var P3=xt((eT,O3)=>{"use strict";var j8=tr().GLSL,{A:Lh,BENCH:id,SHAFT:sd,TREE:$l,oculusGLSL:W8}=_0(),V8=y0(),zh=$l.sxz,N3=$l.sy,R3=$l.yaw;function X8(t){let e=new DataView(t),o=e.getUint32(4,!0),n=e.getUint32(8,!0),r=e.getUint32(12,!0),a=[0,1,2].map(h=>e.getFloat32(16+h*4,!0)),s=[0,1,2].map(h=>e.getFloat32(28+h*4,!0)),i=40,c=new Uint16Array(t,i,o*3);i+=o*6;let f=new Uint16Array(t,i,o*2);i+=o*4;let l=new Int8Array(t,i,o*3);i+=o*3,i=i+3&-4;let v=new Uint32Array(t,i,r);return{nV:o,nWood:n,nI:r,mn:a,sz:s,pos:c,uv:f,nrm:l,idx:v}}function Y8(t){let e=new Float32Array(t.nV*3),o=new Float32Array(t.nV*3),n=new Float32Array(t.nV*2),r=new Float32Array(t.nV),a=Math.cos(R3),s=Math.sin(R3);for(let i=0;i<t.nV;i++){let c=(t.mn[0]+t.pos[i*3]/65535*t.sz[0])*zh,f=(t.mn[1]+t.pos[i*3+1]/65535*t.sz[1])*N3,l=(t.mn[2]+t.pos[i*3+2]/65535*t.sz[2])*zh;e[i*3]=Lh.cx+a*c+s*l,e[i*3+1]=id.soil+.02+f,e[i*3+2]=Lh.zc-s*c+a*l;let v=t.nrm[i*3]/127/zh,h=t.nrm[i*3+1]/127/N3,u=t.nrm[i*3+2]/127/zh,p=Math.hypot(v,h,u)||1;v/=p,h/=p,u/=p,o[i*3]=a*v+s*u,o[i*3+1]=h,o[i*3+2]=-s*v+a*u,n[i*2]=t.uv[i*2]/65535,n[i*2+1]=t.uv[i*2+1]/65535,r[i]=i>=t.nWood?1:0}return{position:e,normal:o,uv:n,leaf:r,elements:t.idx}}function C3(t,e,o,n){let r=t.texture({data:[[n]],min:"linear",mag:"linear"});return fetch(e).then(a=>{if(!a.ok)throw new Error("Could not load "+e);return a.blob()}).then(a=>createImageBitmap(a,{premultiplyAlpha:"none"}).catch(()=>new Promise((s,i)=>{let c=new Image;c.onload=()=>s(c),c.onerror=i,c.src=URL.createObjectURL(a)}))).then(a=>r({data:a,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",...o})).catch(a=>console.error(a)),r}var nr=t=>t.toFixed(4),cc=$l.crownC,lc=$l.crownR,K8=`
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

const vec3 SHAFT = vec3(${nr(sd[0])}, ${nr(sd[1])}, ${nr(sd[2])});

void main() {
	vec3 p = position;
	// the air in the court is never quite still. The whole tree leans
	// with it, slowly, more the higher and the further out on a limb
	// (wood and leaves together, so every leaf stays on its twig) ...
	float h = max(p.y - 1.2, 0.0);
	vec2 out2 = p.xz - vec2(${nr(Lh.cx)}, ${nr(Lh.zc)});
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
	vec3 cc = vec3(${nr(cc[0])}, ${nr(cc[1])}, ${nr(cc[2])});
	vec3 cr = vec3(${nr(lc[0])}, ${nr(lc[1])}, ${nr(lc[2])});
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
}`,es=Ga(),Q8=`
precision highp float;
${j8}
uniform float time;
${es.lanternGLSL(es.TREE_LANTERN)}
const vec3 LANTERN_POS = vec3(${es.LANTERNS[es.TREE_LANTERN[0]].x.toFixed(3)}, ${es.LANTERNS[es.TREE_LANTERN[0]].y.toFixed(3)}, ${es.LANTERNS[es.TREE_LANTERN[0]].z.toFixed(3)});
uniform sampler2D leaves, bark;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_leaf, v_shade;
varying vec3 v_eye;

${W8()}

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
	vec3 rel = (v_pos - vec3(${nr(cc[0])}, ${nr(cc[1])}, ${nr(cc[2])})) / vec3(${nr(lc[0])}, ${nr(lc[1])}, ${nr(lc[2])});
	float outer = clamp(length(rel), 0.0, 1.0);
	float ao = mix(0.38, 1.0, outer * outer) * (0.75 + 0.25 * smoothstep(0.4, 2.0, v_pos.y));
	// and the trunk darkens where it meets the soil
	ao *= 0.6 + 0.4 * smoothstep(${nr(id.soil)}, ${nr(id.soil+.5)}, v_pos.y);

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
}`;O3.exports=t=>{let e=null,o=C3(t,"res/tree/leaves.webp",{wrapS:"clamp",wrapT:"clamp"},[60,80,40,0]),n=C3(t,"res/tree/bark.jpg",{wrapS:"repeat",wrapT:"repeat"},[90,80,70]),r=Date.now();return fetch("res/tree.bin").then(a=>{if(!a.ok)throw new Error("Could not load the tree");return a.arrayBuffer()}).then(a=>{let s=Y8(X8(a));e=t({vert:K8,frag:Q8,attributes:{position:s.position,normal:s.normal,uv:s.uv,leaf:s.leaf},elements:s.elements,uniforms:{leaves:o,bark:n,time:()=>V8.motion?typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-r)/1e3:0},cull:{enable:!1}})}).catch(a=>console.error(a)),function(){e&&e()}}});var Oh=xt((oT,q3)=>{"use strict";var fc=Ua(),Z8="res/audio/go-tomorrow.mp3",J8="res/audio/go-tomorrow.json",$3="gallery-sound",Nh=[fc.PIANO.x,1,fc.PIANO.z],tk=fc.R,Kr=!0;try{localStorage.getItem($3)==="off"&&(Kr=!1)}catch(t){}var Tn=null,xr=null,Fl=null,ql=null,os=null,Sa=null,js=!1,Rh=null,I3=[],ek=(typeof performance!="undefined"?performance.now():0)/1e3;function ok(t){let e=Math.floor(t.sampleRate*2.6),o=t.createBuffer(2,e,t.sampleRate),n=12345,r=()=>(n=n*16807%2147483647,n/10737418235e-1-1);for(let a=0;a<2;a++){let s=o.getChannelData(a),i=0;for(let c=0;c<e;c++){let f=c/t.sampleRate,l=.25+.6*Math.exp(-f*2.2);i+=(r()-i)*l,s[c]=i*Math.pow(1-c/e,2.2)*Math.exp(-f*1.5)*(f<.012?f/.012:1)}}return o}function nk(){if(Tn)return;Tn=new Audio,Tn.src=Z8,Tn.loop=!0,Tn.preload="auto",Tn.crossOrigin="anonymous";let t=window.AudioContext||window.webkitAudioContext;if(!t){Tn.volume=.2;return}try{xr=new t;let e=xr.createMediaElementSource(Tn);os=xr.createBiquadFilter(),os.type="lowpass",os.frequency.value=1500,os.Q.value=.4,Fl=xr.createGain(),Fl.gain.value=0,ql=xr.createGain(),ql.gain.value=0;let o=xr.createConvolver();o.buffer=ok(xr),Sa=xr.createGain(),Sa.gain.value=Kr?1:0,e.connect(os),os.connect(Fl),Fl.connect(Sa),os.connect(o),o.connect(ql),ql.connect(Sa),Sa.connect(xr.destination)}catch(e){xr=null,Tn.volume=.2}}function F3(){if(js||!Kr)return;nk();let t=()=>Tn.play().then(()=>{js=!0}).catch(()=>{});xr&&xr.state==="suspended"?xr.resume().then(t,t):t()}typeof window!="undefined"&&(["pointerdown","pointerup","touchend","keydown","click"].forEach(t=>window.addEventListener(t,F3,{capture:!0,passive:!0})),document.addEventListener("visibilitychange",()=>{!Tn||!js||(document.hidden?Tn.pause():Kr&&Tn.play().catch(()=>{}))}),fetch(J8).then(t=>t.ok?t.json():null).then(t=>{if(!t)return;let e=o=>{let n=o.map(s=>s[2]).sort((s,i)=>s-i),r=n[Math.floor(n.length*.03)]||0,a=n[Math.floor(n.length*.97)]||1;return o.map(s=>({t:s[0],w:s[1],x:Math.max(0,Math.min(1,(s[2]-r)/Math.max(a-r,.001)))}))};Rh={left:e(t.l),right:e(t.r),level:t.e,dur:t.d}}).catch(()=>{}));var Ch={AT:Nh,listen(t){if(!xr||!js)return;let e=t[0]-Nh[0],o=t[2]-Nh[2],n=Math.hypot(e,o,(t[1]-Nh[1])*.5),r=Math.hypot(t[0]-fc.C.x,t[2]-fc.C.z)<tk+.4||t[0]<-.2&&Math.abs(t[2]-fc.C.z)<4,a,s,i;if(r){let f=Math.max(0,Math.min(1,(n-1.2)/5));a=1-.3*f,s=.22+.16*f,i=16e3}else{let f=5.5/Math.max(n,5.5),l=t[0]>14.2&&t[2]<12?.6:1;a=.5*Math.pow(f,1.5)*l,s=.34*Math.pow(f,.95)*l,i=(650+9e3*Math.pow(f,1.3))*(l<1?.7:1)}let c=xr.currentTime;Fl.gain.setTargetAtTime(a,c,.35),ql.gain.setTargetAtTime(s,c,.35),os.frequency.setTargetAtTime(i,c,.35)},time(){let t=Rh&&Rh.dur||158;return Tn&&js&&!Tn.paused||Tn&&js?Tn.currentTime%t:((performance.now()/1e3-ek)%t+t)%t},get cues(){return Rh},get on(){return Kr},set(t){Kr=!!t;try{localStorage.setItem($3,Kr?"on":"off")}catch(e){}Kr?(F3(),Tn&&js&&Tn.play().catch(()=>{}),Sa&&Sa.gain.setTargetAtTime(1,xr.currentTime,.2)):Sa?Sa.gain.setTargetAtTime(0,xr.currentTime,.15):Tn&&Tn.pause(),I3.forEach(e=>e(Kr))},toggle(){Ch.set(!Kr)},onChange(t){I3.push(t)},button(t){let e='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="M15.5 9a4.2 4.2 0 0 1 0 6M18 6.5a7.8 7.8 0 0 1 0 11"/></svg>',o='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="M16 9.5l5 5M21 9.5l-5 5"/></svg>',n=document.createElement("button");n.type="button",n.className=t+" sound-toggle";let r=()=>{n.innerHTML=Kr?e:o,n.setAttribute("aria-label",Kr?"Turn the music off":"Turn the music on"),n.title=Kr?"Music on":"Music off",n.setAttribute("aria-pressed",Kr?"true":"false")};return r(),Ch.onChange(r),["mousedown","pointerdown"].forEach(a=>n.addEventListener(a,s=>s.stopPropagation())),n.addEventListener("click",a=>{a.stopPropagation(),Ch.toggle()}),n}};q3.exports=Ch});var K3=xt((nT,ud)=>{"use strict";var fd=tr().GLSL,{A:D3,BENCH:W3,oculusGLSL:V3}=_0(),G3=y0(),X3=Ua(),H3=Oh(),rk=1.74,ak=1.877,kr=rk/ak,Vs={x:D3.cx-1.22,z:D3.zc+.02,hipY:W3.seat+.115},Zo=(t,e)=>[t[3]*e[0]+t[0]*e[3]+t[1]*e[2]-t[2]*e[1],t[3]*e[1]-t[0]*e[2]+t[1]*e[3]+t[2]*e[0],t[3]*e[2]+t[0]*e[1]-t[1]*e[0]+t[2]*e[3],t[3]*e[3]-t[0]*e[0]-t[1]*e[1]-t[2]*e[2]],B0=t=>[-t[0],-t[1],-t[2],t[3]],rs=(t,e)=>{let o=Math.hypot(t[0],t[1],t[2])||1,n=Math.sin(e/2);return[t[0]/o*n,t[1]/o*n,t[2]/o*n,Math.cos(e/2)]},Ph=(t,e,o)=>Zo(rs([0,0,1],o*Math.PI/180),Zo(rs([0,1,0],e*Math.PI/180),rs([1,0,0],t*Math.PI/180))),hd=t=>{let e=Math.hypot(...t)||1;return t.map(o=>o/e)},aa=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],Gl=(t,e)=>[t[0]+e[0],t[1]+e[1],t[2]+e[2]],ns=(t,e)=>[t[0]*e,t[1]*e,t[2]*e],ld=(t,e)=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2],$h=t=>Math.hypot(t[0],t[1],t[2]),Dl=t=>{let e=$h(t)||1;return[t[0]/e,t[1]/e,t[2]/e]},qh=(t,e)=>[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]],sk=(t,e)=>{let o=[t[0],t[1],t[2]],n=ns(qh(o,e),2);return Gl(Gl(e,ns(n,t[3])),qh(o,n))},ik=(t,e)=>{let o=qh(t,e),n=1+ld(t,e);return n<1e-6?[0,0,1,0]:hd([o[0],o[1],o[2],n])};function c0(t,e,o){let[n,r,a,s]=e,i=n*n,c=r*r,f=a*a,l=n*r,v=n*a,h=r*a,u=s*n,p=s*r,d=s*a;return[(1-2*(c+f))*o[0],2*(l+d)*o[0],2*(v-p)*o[0],0,2*(l-d)*o[1],(1-2*(i+f))*o[1],2*(h+u)*o[1],0,2*(v+p)*o[2],2*(h-u)*o[2],(1-2*(i+c))*o[2],0,t[0],t[1],t[2],1]}function jn(t,e){let o=new Array(16);for(let n=0;n<4;n++)for(let r=0;r<4;r++)o[n*4+r]=t[r]*e[n*4]+t[4+r]*e[n*4+1]+t[8+r]*e[n*4+2]+t[12+r]*e[n*4+3];return o}function cd(t){let e=Math.hypot(t[0],t[1],t[2]),o=Math.hypot(t[4],t[5],t[6]),n=Math.hypot(t[8],t[9],t[10]),r=t[0]/e,a=t[1]/e,s=t[2]/e,i=t[4]/o,c=t[5]/o,f=t[6]/o,l=t[8]/n,v=t[9]/n,h=t[10]/n,u=r+c+h,p;if(u>0){let d=Math.sqrt(u+1)*2;p=[(f-v)/d,(l-s)/d,(a-i)/d,d/4]}else if(r>c&&r>h){let d=Math.sqrt(1+r-c-h)*2;p=[d/4,(i+a)/d,(l+s)/d,(f-v)/d]}else if(c>h){let d=Math.sqrt(1+c-r-h)*2;p=[(i+a)/d,d/4,(v+f)/d,(l-s)/d]}else{let d=Math.sqrt(1+h-r-c)*2;p=[(l+s)/d,(v+f)/d,d/4,(a-i)/d]}return hd(p)}var Fh={LeftUpLeg:[-62,10,0],LeftLeg:[122,0,0],LeftFoot:[30,0,0],RightUpLeg:[0,-3,-2],RightLeg:[4,0,0],RightFoot:[35,-12,0],Neck:[10,0,0],Head:[6,0,0],LeftShoulder:[0,0,6],LeftArm:[-112.4,3.4,62.5],LeftForeArm:[0,-122.6,0],LeftHand:[0,0,-10],RightShoulder:[0,0,0],RightArm:[0,78,-8],RightForeArm:[0,14,0],RightHand:[0,0,0]};for(let t of["Left","Right"]){let e=t==="Left"?-1:1,o=t==="Left"?1:.35;["Index","Middle","Ring","Pinky"].forEach((n,r)=>{Fh[t+"Hand"+n+"1"]=[0,0,e*(18+r*6)*o],Fh[t+"Hand"+n+"2"]=[0,0,e*(26+r*6)*o],Fh[t+"Hand"+n+"3"]=[0,0,e*16*o]})}function Ws(t,e,o){let n=t-e;return n-=Math.round(n),Math.exp(-(n/o)*(n/o))}function B3(t){let e=9+20*Math.cos(2*Math.PI*t),o=4+13*Ws(t,.14,.07)+57*Ws(t,.72,.12),n=5*Ws(t,.06,.04)-9*Ws(t,.42,.12)+17*Ws(t,.62,.05)-3*Ws(t,.85,.1),r=-26*Ws(t,.58,.06);return{hip:e,knee:o,ankle:n,toe:r}}function ck(t){let e=(t%1+1)%1,o=B3(e),n=B3(e+.5),r=Math.cos(2*Math.PI*e),a=Math.sin(2*Math.PI*e);return{swing:{LeftArm:[16*r,0,0],RightArm:[-16*r,0,0],LeftForeArm:[0,-14-8*Math.max(0,-r),0],RightForeArm:[0,14+8*Math.max(0,r),0]},pose:{Hips:[0,5*a,1.5*Math.cos(4*Math.PI*e)],Spine1:[3,-4*a,0],LeftUpLeg:[-o.hip,0,0],LeftLeg:[o.knee,0,0],LeftFoot:[o.ankle,0,0],LeftToeBase:[o.toe,0,0],RightUpLeg:[-n.hip,0,0],RightLeg:[n.knee,0,0],RightFoot:[n.ankle,0,0],RightToeBase:[n.toe,0,0],LeftArm:[0,0,-78],RightArm:[0,0,78],LeftHand:[0,0,-8],RightHand:[0,0,8]},sway:.022*r}}var U3=`
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
}`,Dh=Ga(),j3=`#extension GL_OES_standard_derivatives : enable
precision highp float;
${fd}
uniform float time;
${X3.roomGLSL()}
${Dh.lanternGLSL(Dh.TREE_LANTERN)}
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
${V3()}
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
}`;function lk(t,e){let o=t.texture({data:[[[120,100,90,255]]],min:"linear",mag:"linear"});return fetch(e).then(n=>{if(!n.ok)throw new Error("Could not load "+e);return n.blob()}).then(n=>createImageBitmap(n,{premultiplyAlpha:"none"}).catch(()=>new Promise((r,a)=>{let s=new Image;s.onload=()=>r(s),s.onerror=a,s.src=URL.createObjectURL(n)}))).then(n=>o({data:n,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(n=>console.error(n)),o}var Y3={w:.13,h:.2},Ih=t=>.011*(1-Math.pow(1-t,3));function fk(){let t=[],e=[],o=[],n=[],r=[],a=(d,m,g,x,b,w,_)=>{let M=t.length/3;[d,m,g,x].forEach((A,$)=>{t.push(...A),e.push(...b),o.push(..._[$]),n.push(w)}),r.push(M,M+1,M+2,M,M+2,M+3)},{w:s,h:i}=Y3,c=i/2,f=[[0,1],[1,1],[1,0],[0,0]],l=-.006,v=s+.001,h=c+.001;a([0,l,-h],[v,l,-h],[v,l,h],[0,l,h],[0,-1,0],1,[[0,1],[1,1],[1,0],[0,0]]),a([0,l+.001,-h],[0,l+.001,h],[v,l+.001,h],[v,l+.001,-h],[0,1,0],2,f),a([-v,l,-h],[0,l,-h],[0,l,h],[-v,l,h],[0,-1,0],2,f),a([-v,l+.001,-h],[-v,l+.001,h],[0,l+.001,h],[0,l+.001,-h],[0,1,0],2,f);let u=8;for(let d of[1,-1]){for(let g=0;g<u;g++){let x=g/u,b=(g+1)/u,w=(.002+x*(s-.002))*d,_=(.002+b*(s-.002))*d,M=Ih(x),A=Ih(b),$=d>0?x:1-x,R=d>0?b:1-b,W=1,H=-(A-M)/(_-w);a([w,M,-c],[_,A,-c],[_,A,c],[w,M,c],[H,W,0],3,[[$,1],[R,1],[R,0],[$,0]]),a([w,l+.001,c],[_,l+.001,c],[_,A,c],[w,M,c],[0,0,1],4,f),a([w,M,-c],[_,A,-c],[_,l+.001,-c],[w,l+.001,-c],[0,0,-1],4,f)}let m=s*d;a([m,l+.001,-c],[m,Ih(1),-c],[m,Ih(1),c],[m,l+.001,c],[d,0,0],4,f)}let p=10;for(let d=0;d<p;d++){let m=d/p,g=(d+1)/p,x=t.length/3;for(let[b,w]of[[m,-c],[g,-c],[g,c],[m,c]])t.push(b,0,w),e.push(0,1,0),o.push(b,(w+c)/i),n.push(5);r.push(x,x+1,x+2,x,x+2,x+3)}return{pos:t,nrm:e,uv:o,kind:n,idx:r}}function hk(){if(typeof document=="undefined")return null;let t=document.createElement("canvas");t.width=512,t.height=768;let e=t.getContext("2d");e.fillStyle="#ebe5d8",e.fillRect(0,0,512,768);let o=7,n=()=>(o=o*16807%2147483647,o/2147483647),r=(s,i,c,f,l,v,h)=>{for(let u=0;u<v;u++){let p=s+(n()-.5)*c*2,d=i+(n()-.5)*f*2,m=20+n()*60,g=e.createRadialGradient(p,d,0,p,d,m);g.addColorStop(0,`rgba(${l},${h})`),g.addColorStop(1,`rgba(${l},0)`),e.fillStyle=g,e.fillRect(p-m,d-m,m*2,m*2)}},a=e.createRadialGradient(236,280,10,256,300,125);a.addColorStop(0,"#3d4866"),a.addColorStop(1,"#232a3d"),e.fillStyle=a,e.beginPath(),e.arc(256,300,122,0,Math.PI*2),e.fill(),e.fillStyle="#b8873f",e.beginPath(),e.moveTo(64,452);for(let s=64;s<=448;s+=16)e.lineTo(s,446+n()*4);for(let s=448;s>=64;s-=16)e.lineTo(s,466+n()*4);e.fill(),e.strokeStyle="#2b2f3a",e.lineCap="round",[[120,392,500,5],[160,352,530,4],[205,307,558,3]].forEach(([s,i,c,f])=>{e.lineWidth=f,e.beginPath(),e.moveTo(s,c),e.lineTo(i,c),e.stroke()});for(let s=0;s<9e3;s++)e.fillStyle=`rgba(90,80,60,${n()*.05})`,e.fillRect(n()*512,n()*768,1,1);return t}var uk=`
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
		float r = u * ${Y3.w.toFixed(3)};
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
}`,dk=`
precision highp float;
${fd}
uniform float time;
${Dh.lanternGLSL(Dh.TREE_LANTERN)}
uniform sampler2D cover;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_kind;
${V3()}
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
}`;function pk(){let t=[],e=[],o=[],n=[],r=[],a=[.36,.11,.07],s=[.1,.07,.05],i=[.78,.76,.72],c=[.55,.41,.26],f=[.8,.55,.22],l=[[0,-.15,f,2],[.0012,-.147,f,2],[.004,-.138,f,2],[.0058,-.125,c,2],[.0064,-.112,c,2],[.006,-.104,c,2],[.0066,-.102,i,1],[.0066,-.08,i,1],[.0062,-.074,i,1],[.0068,-.072,i,1],[.007,-.066,i,1],[.0058,-.064,a,0],[.0062,-.04,a,0],[.0058,0,a,0],[.0046,.06,a,0],[.0036,.11,a,0],[.003,.13,s,0],[.0026,.136,s,0],[0,.139,s,0]],v=16;for(let h=0;h<l.length;h++){let[u,p,d,m]=l[h],g=m===2?.45:1;for(let x=0;x<=v;x++){let b=x/v*Math.PI*2;t.push(Math.cos(b)*u,p,Math.sin(b)*u*g);let w=Math.max(h-1,0),_=Math.min(h+1,l.length-1),M=l[_][0]-l[w][0],A=l[_][1]-l[w][1],$=Math.hypot(M,A)||1;e.push(Math.cos(b)*A/$,-M/$,Math.sin(b)*A/$/g),o.push(...d),n.push(m)}}for(let h=0;h<l.length-1;h++)for(let u=0;u<v;u++){let p=h*(v+1)+u,d=p+v+1;r.push(p,d,p+1,p+1,d,d+1)}return{pos:t,nrm:e,col:o,mat:n,idx:r}}var vk=`
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
}`,mk=`
precision highp float;
${fd}
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
}`,gk=`
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
}`,xk=`
precision highp float;
uniform float pulse;
varying vec2 v_c;
void main() {
	float d = length(v_c);
	float g = exp(-d * d * 6.0) * 0.10 + exp(-d * d * 30.0) * 0.08;
	gl_FragColor = vec4(vec3(1.0, 0.80, 0.45) * g * (0.75 + 0.25 * pulse), 1.0);
}`;ud.exports=t=>{let e="res/avatar/",o=null,n=Date.now(),r=()=>typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-n)/1e3,a={glowPos:[Vs.x,1.9,Vs.z],glow:0};Promise.all([fetch(e+"avatar.json").then(R=>R.json()),fetch(e+"avatar.bin").then(R=>R.arrayBuffer())]).then(([R,W])=>{o=f(R,W)}).catch(R=>console.error(R));let s=null;Promise.all([fetch(e+"motion.json").then(R=>R.ok?R.json():null),fetch(e+"motion.bin").then(R=>R.ok?R.arrayBuffer():null)]).then(([R,W])=>{if(!R||!W)return;let H={};for(let D in R.clips){let C=R.clips[D],P=C.bones.length,nt=new Float32Array(W,C.mean,P*4),yt={};C.bones.forEach((vt,st)=>{yt[vt]=[nt[st*4],nt[st*4+1],nt[st*4+2],nt[st*4+3]]}),H[D]=Object.assign({},C,{Q:new Int16Array(W,C.q,C.frames*P*4),H:new Float32Array(W,C.hips,C.frames*3),meanQ:yt})}s=H}).catch(()=>{});function i(R,W){let H=R.frames,D=R.bones.length,C=(W%H+H)%H,P=Math.floor(C)%H,nt=(P+1)%H,yt=C-Math.floor(C),vt={};for(let qt=0;qt<D;qt++){let se=(P*D+qt)*4,ge=(nt*D+qt)*4,Ve=R.Q[se],ye=R.Q[se+1],ho=R.Q[se+2],ko=R.Q[se+3],Ko=R.Q[ge],Jt=R.Q[ge+1],be=R.Q[ge+2],Ce=R.Q[ge+3];Ve*Ko+ye*Jt+ho*be+ko*Ce<0&&(Ko=-Ko,Jt=-Jt,be=-be,Ce=-Ce),vt[R.bones[qt]]=hd([Ve+(Ko-Ve)*yt,ye+(Jt-ye)*yt,ho+(be-ho)*yt,ko+(Ce-ko)*yt])}let st=P*3,it=nt*3;return{q:vt,hips:[R.H[st]+(R.H[it]-R.H[st])*yt,R.H[st+1]+(R.H[it+1]-R.H[st+1])*yt,R.H[st+2]+(R.H[it+2]-R.H[st+2])*yt]}}let c=t.texture({data:[[[255,255,255,255]]]});function f(R,W){let H=(Z,Pt)=>new Float32Array(W,Z,Pt),D=R.bones,C=D.length,P={};D.forEach((Z,Pt)=>{P[Z.name]=Pt});let nt=[];for(let Z=0;Z<C;Z++)nt.push(Array.from(H(R.ibm+Z*64,16)));let yt=D.map(Z=>c0(Z.t,Z.r,Z.s)),vt=[];for(let Z=0;Z<C;Z++){let Pt=D[Z].parent;vt[Z]=Pt<0?yt[Z]:jn(vt[Pt],yt[Z])}let st=vt.map(cd),it=R.meshes.map(Z=>{let Pt=H(Z.pos,Z.n*3),Dt=H(Z.nrm,Z.n*3),Ct=H(Z.uv,Z.n*2),fe=new Uint8Array(W,Z.jnt,Z.n*4),Te=H(Z.wgt,Z.n*4),Se=new Uint16Array(W,Z.idx,Z.ni),ve={};for(let Me in Z.morphs){let Go=Z.morphs[Me];ve[Me]={idx:new Uint16Array(W,Go.idx,Go.n),d:H(Go.d,Go.n*3)}}let $e=new Float32Array(Z.n*3),_e=new Float32Array(Z.n*3),Xe=new Float32Array(Z.n*3),Ae=t.buffer({data:$e,usage:"dynamic"}),ze=t.buffer({data:_e,usage:"dynamic"}),Ke=/avaturn_hair/.test(Z.name),me=/EyeAO|Eyelash/.test(Z.name),co=/Body|Head/.test(Z.name),No=Z.kind||0;return{m:Z,pos:Pt,nrm:Dt,uv:Ct,jnt:fe,wgt:Te,idx:Se,morphs:ve,outP:$e,outN:_e,work:Xe,pb:Ae,nbuf:ze,tex:Z.tex?lk(t,e+Z.tex):c,kind:No,alphaScale:/EyeAO/.test(Z.name)?.25:1,blend:Z.blend||Ke,alphaCut:Ke?.35:me?.02:0,skin:co?1:0}}),qt=t({vert:U3,frag:j3,attributes:{position:t.prop("pb"),normal:t.prop("nb"),uv:t.prop("uv")},elements:t.prop("el"),uniforms:{tex:t.prop("tex"),alphaCut:t.prop("alphaCut"),skin:t.prop("skin"),kind:t.prop("kind"),alphaScale:t.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow,boothLamp:()=>M&&!A?M.lamp:[0,0,0,0],court:()=>M||A?0:1,candle:()=>A?1:0},cull:{enable:!1}}),se=t({vert:U3,frag:j3,attributes:{position:t.prop("pb"),normal:t.prop("nb"),uv:t.prop("uv")},elements:t.prop("el"),uniforms:{tex:t.prop("tex"),alphaCut:t.prop("alphaCut"),skin:t.prop("skin"),kind:t.prop("kind"),alphaScale:t.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow,boothLamp:()=>M&&!A?M.lamp:[0,0,0,0],court:()=>M||A?0:1,candle:()=>A?1:0},cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"one minus src alpha"}}}),ge=.3;for(let Z of it)if(Z.uvBuf=t.buffer(Z.uv),/Body/.test(Z.m.name)){let Pt=[],Dt=[];for(let Ct=0;Ct<Z.idx.length;Ct+=3){let fe=Z.idx[Ct],Te=Z.idx[Ct+1],Se=Z.idx[Ct+2];(Z.pos[fe*3+1]<ge&&Z.pos[Te*3+1]<ge&&Z.pos[Se*3+1]<ge?Dt:Pt).push(fe,Te,Se)}Z.el=t.elements({data:new Uint16Array(Pt),type:"uint16"}),Dt.length&&(Z.sockEl=t.elements({data:new Uint16Array(Dt),type:"uint16"}))}else Z.el=t.elements({data:Z.idx,type:"uint16"});let Ve=vt[P.Hips],ye=rs([1,0,0],-Math.PI/2),ho=jn(c0([Vs.x-Ve[12]*kr,Vs.hipY-Ve[14]*kr,Vs.z+Ve[13]*kr],ye,[1,1,1]),c0([0,0,0],[0,0,0,1],[kr,kr,kr])),ko=new Array(C),Ko=-1,Jt=(Z,Pt,Dt)=>jn(c0([Z,0,Pt],rs([0,1,0],Dt),[1,1,1]),c0([0,0,0],[0,0,0,1],[kr,kr,kr])),be=["LeftFoot","RightFoot","LeftToeBase","RightToeBase"].map(Z=>P[Z]),Ce=be.map(Z=>vt[Z][13]*kr);function ro(Z){if(s&&s.walk)return wo(Z);let Pt=ck(Z.phase),Dt={},Ct=_e=>{for(let Xe in _e){let Ae=_e[Xe],ze=Ph(Ae[0],Ae[1],Ae[2]);Dt[Xe]=Dt[Xe]?Zo(Dt[Xe],ze):ze}};Ct(Pt.swing),Ct(Pt.pose);let fe=Math.cos(Z.heading),Te=-Math.sin(Z.heading),Se=Jt(Z.x+fe*Pt.sway,Z.z+Te*Pt.sway,Z.heading),ve=new Array(C);for(let _e=0;_e<C;_e++){let Xe=D[_e],Ae=yt[_e],ze=Dt[Xe.name];if(ze){let Ke=st[_e],me=Zo(B0(Ke),Zo(ze,Ke));Ae=c0(Xe.t,Zo(Xe.r,me),Xe.s)}ve[_e]=Xe.parent<0?jn(Se,Ae):jn(ve[Xe.parent],Ae)}let $e=1/0;be.forEach((_e,Xe)=>{$e=Math.min($e,ve[_e][13]-Ce[Xe])});for(let _e=0;_e<C;_e++)ve[_e]=ve[_e].slice(),ve[_e][13]-=$e,ko[_e]=jn(ve[_e],nt[_e]);return{blink:0}}function wo(Z){let Pt=s.walk,Dt=i(Pt,(Z.phase+Pt.phase0)*Pt.frames),Ct=Jt(Z.x,Z.z,Z.heading),fe=new Array(C),Te=P.Hips;for(let ve=0;ve<C;ve++){let $e=D[ve],_e=yt[ve],Xe=Dt.q[$e.name];if(Xe){let Ae=st[ve],ze=Zo(B0(Ae),Zo(Xe,Ae)),Ke=ve===Te?[$e.t[0]+Dt.hips[0],$e.t[1]+Dt.hips[1],$e.t[2]+Dt.hips[2]]:$e.t;_e=c0(Ke,Zo($e.r,ze),$e.s)}fe[ve]=$e.parent<0?jn(Ct,_e):jn(fe[$e.parent],_e)}let Se=1/0;be.forEach((ve,$e)=>{Se=Math.min(Se,fe[ve][13]-Ce[$e])});for(let ve=0;ve<C;ve++)fe[ve]=fe[ve].slice(),fe[ve][13]-=Se,ko[ve]=jn(fe[ve],nt[ve]);return{blink:0}}function Oe(Z,Pt){let Dt=Math.sin(Z*2*Math.PI/4.6),Ct=Math.sin(Z*.37)*.6+Math.sin(Z*.83+1)*.4,fe={LeftUpLeg:[-86,-6,0],RightUpLeg:[-84,7,0],LeftLeg:[88,0,0],RightLeg:[82,0,0],LeftFoot:[-4,0,0],RightFoot:[-2,0,0],Spine:[6,0,0],Spine1:[5+Dt*.8,0,0],Spine2:[4+Dt*.6,0,0],Neck:[10,0,0],Head:[12+Ct*2,Ct*2.5,0],LeftArm:[0,0,-72],RightArm:[0,0,72],LeftForeArm:[0,-62,0],RightForeArm:[0,62,0],LeftHand:[0,0,-10],RightHand:[0,0,10]},Te={};for(let Ae in fe){let ze=fe[Ae];Te[Ae]=Ph(ze[0],ze[1],ze[2])}let Se=Jt(Pt.x,Pt.z,Pt.heading),ve=new Array(C);for(let Ae=0;Ae<C;Ae++){let ze=D[Ae],Ke=yt[Ae],me=Te[ze.name];if(me){let co=st[Ae],No=Zo(B0(co),Zo(me,co));Ke=c0(ze.t,Zo(ze.r,No),ze.s)}ve[Ae]=ze.parent<0?jn(Se,Ke):jn(ve[ze.parent],Ke)}let _e=ve[P.Hips][13]-(Pt.y+.1);for(let Ae=0;Ae<C;Ae++)ve[Ae]=ve[Ae].slice(),ve[Ae][13]-=_e,ko[Ae]=jn(ve[Ae],nt[Ae]);let Xe=Z%4.1;return{blink:Xe<.16?Math.sin(Xe/.16*Math.PI):0}}let we=Z=>[vt[Z][12],vt[Z][13],vt[Z][14]],wt=(Z,Pt)=>{let Dt=Dl(Z),Ct=Dl(aa(Pt,ns(Dt,ld(Pt,Dt)))),fe=qh(Dt,Ct);return cd([Dt[0],Dt[1],Dt[2],0,Ct[0],Ct[1],Ct[2],0,fe[0],fe[1],fe[2],0,0,0,0,1])},ie={};for(let Z of["Left","Right"]){let Pt=P[Z+"Arm"],Dt=P[Z+"ForeArm"],Ct=P[Z+"Hand"],fe=P[Z+"HandMiddle1"];ie[Z]={a:Pt,f:Dt,h:Ct,upper:$h(aa(we(Dt),we(Pt)))*kr,fore:$h(aa(we(Ct),we(Dt)))*kr,dir0:Dl(aa(we(Dt),we(Pt))),qf0:wt(aa(we(Ct),we(Dt)),[0,1,0]),qh0:wt(aa(we(fe),we(Ct)),[0,1,0])}}let Pe={};for(let Z of["Left","Right"])Pe[ie[Z].a]={side:Z,part:0},Pe[ie[Z].f]={side:Z,part:1},Pe[ie[Z].h]={side:Z,part:2};function pe(Z,Pt,Dt){if(!Z||!Z.length)return{x:.5,lift:0,press:0,finger:1,busy:0};let Ct=0,fe=Z.length-1,Te=-1;for(;Ct<=fe;){let Go=Ct+fe>>1;Z[Go].t<=Pt?(Te=Go,Ct=Go+1):fe=Go-1}let Se=Z[Z.length-1],ve=Z[0],$e=Te>=0?Z[Te]:{t:Se.t-Dt,x:Se.x,w:Se.w},_e=Te+1<Z.length?Z[Te+1]:{t:ve.t+Dt,x:ve.x,w:ve.w},Xe=Math.max(.05,_e.t-$e.t),Ae=Math.min(.14,Xe*.45),ze=Math.max(0,Math.min(1,(Pt-$e.t-Ae)/Math.max(Xe-Ae-.03,.02))),Ke=ze*ze*(3-2*ze),me=Pt-$e.t,co=(.55+.45*$e.w)*Math.exp(-me/.11),No=_e.t-Pt,Me=No<.05?(.55+.45*_e.w)*(1-No/.05):0;return{x:$e.x+(_e.x-$e.x)*Ke,lift:Math.sin(Math.PI*ze)*Math.min(.05,.012+Xe*.03)*(Xe>2.5?.4:1),press:Math.max(co,Me),finger:Me>co?((Te+1)*7+3)%4:(Math.max(Te,0)*7+3)%4,busy:Math.exp(-me/.9)}}let Qt={lean:0,turn:0,nod:0,pedal:0,last:-1},So=["Index","Middle","Ring","Pinky"];function S(Z){let Pt=X3.PLAY,Dt=H3.cues,Ct=H3.time(),fe=Dt&&Dt.dur||158,Te={Left:pe(Dt&&Dt.left,Ct,fe),Right:pe(Dt&&Dt.right,Ct,fe)},Se=.35;if(Dt&&Dt.level&&Dt.level.length){let oo=Ct*8,mo=Math.floor(oo)%Dt.level.length,$n=(mo+1)%Dt.level.length;Se=Dt.level[mo]+(Dt.level[$n]-Dt.level[mo])*(oo-Math.floor(oo))}let ve=Qt.last<0?0:Math.min(.1,Math.max(0,Z-Qt.last));Qt.last=Z;let $e=oo=>Math.min(1,ve*oo);Qt.lean+=(Se-Qt.lean)*$e(1.2),Qt.turn+=(Te.Right.busy-Te.Left.busy-Qt.turn)*$e(1.5),Qt.nod+=(Math.max(Te.Right.press,Te.Left.press*.7)-Qt.nod)*$e(6),Qt.pedal+=((Te.Left.busy>.35?1:.15)-Qt.pedal)*$e(5);let _e=Math.sin(Z*2*Math.PI/4.6),Xe=Math.sin(Ct*.41)*.6+Math.sin(Ct*.17+1)*.4,Ae={LeftUpLeg:[-80,-9,0],RightUpLeg:[-77,9,0],LeftLeg:[86,0,0],RightLeg:[64,0,0],LeftFoot:[-2,0,0],RightFoot:[12-10*Qt.pedal,0,0],Spine:[9+3.5*Qt.lean+Xe*1.6,Qt.turn*2.5,-Qt.turn*1.6],Spine1:[7+_e*.8+2.5*Qt.lean,Qt.turn*2.5,-Qt.turn*1.2],Spine2:[6+_e*.6+Xe*.8,Qt.turn*1.5,0],Neck:[13+3*Qt.lean,Qt.turn*3,0],Head:[15+Qt.nod*3.5+Xe*1.5,Qt.turn*5,Xe*1.5]};for(let oo of["Left","Right"]){let mo=oo==="Left"?-1:1,$n=Te[oo];So.forEach((V,dt)=>{let Xt=dt===$n.finger?$n.press:$n.press*.2;Ae[oo+"Hand"+V+"1"]=[0,0,mo*(20+3*dt+20*Xt)],Ae[oo+"Hand"+V+"2"]=[0,0,mo*(26+4*dt-6*Xt)],Ae[oo+"Hand"+V+"3"]=[0,0,mo*14]}),Ae[oo+"HandThumb1"]=[0,mo*-18,mo*10]}let ze={};for(let oo in Ae){let mo=Ae[oo];ze[oo]=Ph(mo[0],mo[1],mo[2])}let Ke=vt[P.Hips][13]*kr,me=jn(c0([Pt.stoolX,Pt.stoolTop+.1-Ke,Pt.stoolFront+.15],rs([0,1,0],Pt.heading),[1,1,1]),c0([0,0,0],[0,0,0,1],[kr,kr,kr])),co=(Pt.keyX0+Pt.keyX1)/2,No={};for(let oo of["Left","Right"]){let mo=Te[oo],$n=oo==="Left"?co-.4+.33*mo.x:co+.07+.33*mo.x;No[oo]=[$n,Pt.keyTop+.062+mo.lift-mo.press*.012,Pt.keyFront+.075]}let Me=new Array(C),Go={},p0=[0,1,0];for(let oo=0;oo<C;oo++){let mo=D[oo],$n=yt[oo],V=ze[mo.name],dt=Pe[oo];if(dt){let Xt=ie[dt.side];if(dt.part===0){let ce=Me[mo.parent],he=jn(ce,yt[oo]),nn=[he[12],he[13],he[14]],ar=Zo(cd(ce),B0(st[mo.parent])),Ar=aa(No[dt.side],nn),rn=$h(Ar),br=(Xt.upper+Xt.fore)*.995;rn>br&&(Ar=ns(Ar,br/rn),rn=br);let an=ns(Ar,1/rn),po=(Xt.upper*Xt.upper-Xt.fore*Xt.fore+rn*rn)/(2*rn),Kn=Math.sqrt(Math.max(0,Xt.upper*Xt.upper-po*po)),Wo=[dt.side==="Left"?-.6:.6,-.8,.3];Wo=Dl(aa(Wo,ns(an,ld(Wo,an))));let Fn=Gl(nn,Gl(ns(an,po),ns(Wo,Kn)));Xt.T=Gl(nn,Ar),Xt.elbow=Fn;let Hr=Dl(aa(Fn,nn)),Br=Zo(ik(sk(ar,Xt.dir0),Hr),ar);Go[oo]=Br,V=Zo(B0(ar),Br)}else if(dt.part===1){let ce=Zo(wt(aa(Xt.T,Xt.elbow),p0),B0(Xt.qf0));Go[oo]=ce,V=Zo(B0(Go[mo.parent]),ce)}else{let ce=Te[dt.side],he=Zo(wt([dt.side==="Left"?.12:-.12,-.2-.1*ce.press,-1],p0),B0(Xt.qh0));Go[oo]=he,V=Zo(B0(Go[mo.parent]),he)}}if(V){let Xt=st[oo],ce=Zo(B0(Xt),Zo(V,Xt));$n=c0(mo.t,Zo(mo.r,ce),mo.s)}Me[oo]=mo.parent<0?jn(me,$n):jn(Me[mo.parent],$n)}for(let oo=0;oo<C;oo++)ko[oo]=jn(Me[oo],nt[oo]);a.pianist={head:[Me[P.Head][12],Me[P.Head][13],Me[P.Head][14]]};let la=Z%4.3;return{blink:la<.16?Math.sin(la/.16*Math.PI):0}}function io(Z,Pt){if(A)return S(Z);if(M)return Oe(Z,M);if(Pt)return ro(Pt);let Dt=Math.sin(Z*2*Math.PI/4.2),Ct=Z%3.7,fe=Ct<.16?Math.sin(Ct/.16*Math.PI):0,Te=Math.sin(Z*.45),Se=Math.sin(Z*.31+.8),ve=Math.max(0,Math.sin(Z*.085)-.75)*4,$e={RightArm:[0,-22*ve,11*Te],RightForeArm:[0,8+26*ve,0],RightHand:[38*Se,0,6*Math.sin(Z*.7)],LeftUpLeg:[0,0,3.2*Math.sin(Z*.36)],RightFoot:[5*Math.sin(Z*.52+.4),0,0],Head:[0,1.6*Math.sin(Z*.21),0]};["Index","Middle","Ring","Pinky"].forEach((me,co)=>{let No=Math.sin(Z*1.1-co*.5);$e["RightHand"+me+"1"]=[0,0,8+12*No],$e["RightHand"+me+"2"]=[0,0,6+10*No]});let _e={},Xe=(me,co)=>{for(let No in me){let Me=me[No],Go=Ph(Me[0]*co,Me[1]*co,Me[2]*co);_e[No]=_e[No]?Zo(_e[No],Go):Go}};Xe(Fh,1),Xe({Spine1:[Dt*.8,0,0],Spine2:[Dt*.6,0,0]},1),Xe($e,1);let Ae=new Array(C),ze=new Array(C);for(let me=0;me<C;me++){let co=D[me],No=yt[me],Me=_e[co.name];if(Me){let Go=st[me],p0=Zo(B0(Go),Zo(Me,Go));No=c0(co.t,Zo(co.r,p0),co.s)}Ae[me]=co.parent<0?jn(ho,No):jn(Ae[co.parent],No),ze[me]=null}for(let me=0;me<C;me++)ko[me]=jn(Ae[me],nt[me]);let Ke=me=>[me[12],me[13],me[14]];return a.headPos=Ke(Ae[P.Head]),a.hipsPos=Ke(Ae[P.Hips]),a.headM=Ae[P.Head],{blink:fe}}function Ze(Z,Pt){let{pos:Dt,nrm:Ct,jnt:fe,wgt:Te,outP:Se,outN:ve,work:$e,m:_e}=Z,Xe=_e.n,Ae=Dt;if(Pt){$e.set(Dt);for(let ze in Z.morphs){let Ke=Pt[ze]||0;if(Ke<=0)continue;let me=Z.morphs[ze];for(let co=0;co<me.idx.length;co++){let No=me.idx[co]*3;$e[No]+=me.d[co*3]*Ke,$e[No+1]+=me.d[co*3+1]*Ke,$e[No+2]+=me.d[co*3+2]*Ke}}Ae=$e}for(let ze=0;ze<Xe;ze++){let Ke=Ae[ze*3],me=Ae[ze*3+1],co=Ae[ze*3+2],No=Ct[ze*3],Me=Ct[ze*3+1],Go=Ct[ze*3+2],p0=0,la=0,oo=0,mo=0,$n=0,V=0;for(let Xt=0;Xt<4;Xt++){let ce=Te[ze*4+Xt];if(ce===0)continue;let he=ko[fe[ze*4+Xt]];p0+=ce*(he[0]*Ke+he[4]*me+he[8]*co+he[12]),la+=ce*(he[1]*Ke+he[5]*me+he[9]*co+he[13]),oo+=ce*(he[2]*Ke+he[6]*me+he[10]*co+he[14]),mo+=ce*(he[0]*No+he[4]*Me+he[8]*Go),$n+=ce*(he[1]*No+he[5]*Me+he[9]*Go),V+=ce*(he[2]*No+he[6]*Me+he[10]*Go)}Se[ze*3]=p0,Se[ze*3+1]=la,Se[ze*3+2]=oo;let dt=Math.hypot(mo,$n,V)||1;ve[ze*3]=mo/dt,ve[ze*3+1]=$n/dt,ve[ze*3+2]=V/dt}_e.grid&&!Oo&&!M&&!A&&Eo(Z),Z.sway&&za(Z),Z.pb.subdata(Se),Z.nbuf.subdata(ve)}function Eo(Z){let[Pt,Dt]=Z.m.grid,Ct=Z.outP,fe=Z.outN,Te=W3.seat+.012;for(let Se=1;Se<Pt;Se++){let ve=Math.pow(1-Se/(Pt-1),1.5);for(let $e=0;$e<Dt;$e++){let _e=(Se*Dt+$e)*3;Ct[_e+1]>Te?Ct[_e+1]=Te+(Ct[_e+1]-Te)*Math.max(ve,.15):Ct[_e+1]=Te}}for(let Se=0;Se<fe.length;Se+=3)fe[Se]=0,fe[Se+1]=1,fe[Se+2]=0}let Oo=!1,bn=(Z,Pt,Dt,Ct,fe)=>({bone:P[Z],rate:Pt,damp:Dt,drag:Ct,most:fe,x:[0,0,0],v:[0,0,0],p:null,vel:[0,0,0]}),Er={head:bn("Head",15,.32,.012,.035),chest:bn("Spine2",9,.38,.03,.1),hips:bn("Hips",7,.42,.045,.16)},Yn=-1;function K0(Z){let Pt=Yn<0?0:Z-Yn;Yn=Z;for(let Dt in Er){let Ct=Er[Dt],fe=ko[Ct.bone],Te=vt[Ct.bone],Se=Te[12],ve=Te[13],$e=Te[14],_e=[fe[0]*Se+fe[4]*ve+fe[8]*$e+fe[12],fe[1]*Se+fe[5]*ve+fe[9]*$e+fe[13],fe[2]*Se+fe[6]*ve+fe[10]*$e+fe[14]];if(!Ct.p||!(Pt>0)||Pt>.25||Math.hypot(_e[0]-Ct.p[0],_e[1]-Ct.p[1],_e[2]-Ct.p[2])>.5){Ct.p=_e,Ct.x=[0,0,0],Ct.v=[0,0,0],Ct.vel=[0,0,0];continue}let Xe=[(_e[0]-Ct.p[0])/Pt,(_e[1]-Ct.p[1])/Pt,(_e[2]-Ct.p[2])/Pt],Ae=Math.max(1,Math.ceil(Pt/.016)),ze=Pt/Ae;for(let me=0;me<3;me++){let co=Math.max(-30,Math.min(30,(Xe[me]-Ct.vel[me])/Pt)),No=-Xe[me]*Ct.drag;for(let Me=0;Me<Ae;Me++)Ct.v[me]+=((No-Ct.x[me])*Ct.rate*Ct.rate-2*Ct.damp*Ct.rate*Ct.v[me]-co)*ze,Ct.x[me]+=Ct.v[me]*ze}let Ke=Math.hypot(Ct.x[0],Ct.x[1],Ct.x[2]);if(Ke>Ct.most){let me=Ct.most/Ke;Ct.x=[Ct.x[0]*me,Ct.x[1]*me,Ct.x[2]*me]}Ct.p=_e,Ct.vel=Xe}}for(let Z of it){let Pt=Z.m,Dt=Pt.n,Ct=null,fe=null;if(Pt.kind===9){fe="head",Ct=new Float32Array(Dt);for(let Te=0;Te<Dt;Te++){let Se=Z.uv[Te*2]<-.5?0:Z.uv[Te*2+1];Ct[Te]=Se*Se}}else if(Pt.name==="scarf"){fe="chest",Ct=new Float32Array(Dt);for(let Te=0;Te<Dt;Te++)Ct[Te]=l(1.52,1.12,Z.pos[Te*3+1])}else if(Pt.grid){fe="hips",Ct=new Float32Array(Dt);let Te=Pt.grid[0],Se=Pt.grid[1];for(let ve=0;ve<Dt;ve++)Ct[ve]=Math.pow(Math.floor(ve/Se)/(Te-1),1.6)}Ct&&(Z.sway=Ct,Z.spring=Er[fe],Z.loose=fe)}function za(Z){if(!Oo&&!A&&!M)return;let Pt=Z.spring.x,Dt=Z.sway,Ct=Z.outP;if(!(Math.abs(Pt[0])+Math.abs(Pt[1])+Math.abs(Pt[2])<1e-5))for(let fe=0,Te=Dt.length;fe<Te;fe++){let Se=Dt[fe];Se>0&&(Ct[fe*3]+=Pt[0]*Se,Ct[fe*3+1]+=Pt[1]*Se,Ct[fe*3+2]+=Pt[2]*Se)}}function li(Z,Pt){Oo=!!Pt;let Dt=io(Z,Pt);K0(Z);let Ct={eyeBlinkLeft:Dt.blink,eyeBlinkRight:Dt.blink};for(let fe of it)Ze(fe,Object.keys(fe.morphs).length?Ct:null);a.pose=Dt}return{parts:it,update:li,drawOpaque:qt,drawBlend:se,state:a}}function l(R,W,H){let D=Math.min(1,Math.max(0,(H-R)/(W-R)));return D*D*(3-2*D)}let v=fk(),h=hk(),u=h?t.texture({data:h,flipY:!1,min:"linear",mag:"linear"}):c,p=t({vert:uk,frag:dk,attributes:{position:v.pos,normal:v.nrm,uv:v.uv,kind:v.kind},elements:new Uint16Array(v.idx),uniforms:{model:t.prop("model"),turn:0,fold:1.12,cover:u},cull:{enable:!1}}),d=pk(),m=t({vert:vk,frag:mk,attributes:{position:d.pos,normal:d.nrm,color:d.col,mat:d.mat},elements:new Uint16Array(d.idx),uniforms:{model:t.prop("model"),pulse:t.prop("pulse")},cull:{enable:!1}}),g=t({vert:gk,frag:xk,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{center:t.prop("center"),size:t.prop("size"),pulse:t.prop("pulse")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});function x(R){let W=R.headM,H=it=>{let qt=Math.hypot(...it)||1;return it.map(se=>se/qt)},D=H([W[4],W[5],W[6]]),C=H([W[8],W[9],W[10]]),P=D,nt=C.map(it=>-it),yt=[nt[1]*P[2]-nt[2]*P[1],nt[2]*P[0]-nt[0]*P[2],nt[0]*P[1]-nt[1]*P[0]],vt=R.headPos,st=[0,1,2].map(it=>vt[it]+D[it]*.06+C[it]*.185);return[yt[0],yt[1],yt[2],0,nt[0],nt[1],nt[2],0,P[0],P[1],P[2],0,st[0],st[1],st[2],1]}let b=-1,w="",_=null,M=null,A=!1;function $(R){if(!o)return;let W=(G3.motion,r()),H=_?[_.x,_.z,_.heading,_.phase].map(C=>C.toFixed(4)).join():"";(M||A||H!==w||!_&&Math.abs(W-b)>(G3.isPhone?1/30:0))&&(o.update(W,_),b=W,w=H);for(let C of o.parts)C.blend||(o.drawOpaque({pb:C.pb,nb:C.nbuf,uv:C.uvBuf,el:C.el,tex:C.tex,alphaCut:C.alphaCut,skin:C.skin,kind:C.kind,alphaScale:C.alphaScale}),C.sockEl&&o.drawOpaque({pb:C.pb,nb:C.nbuf,uv:C.uvBuf,el:C.sockEl,tex:c,alphaCut:0,skin:0,kind:8,alphaScale:1}));let D=o.state;if(D.headM&&!_&&!M&&!A){p({model:x(D)});let C=D.headPos,P=Math.sin(W*1.3)*.02,nt=[C[0],C[1]+.62+P,C[2]+.05],yt=W*.6,vt=c0(nt,Zo(rs([0,1,0],yt),rs([0,0,1],.18)),[1.2,1.2,1.2]),st=.5+.5*Math.sin(W*2);m({model:vt,pulse:st}),a.glowPos=nt,a.glow=.06+.03*st,g({center:[nt[0],nt[1]-.12,nt[2]],size:.1,pulse:st})}for(let C of o.parts)C.blend&&o.drawBlend({pb:C.pb,nb:C.nbuf,uv:C.uvBuf,el:C.el,tex:C.tex,alphaCut:C.alphaCut,skin:C.skin,kind:C.kind,alphaScale:C.alphaScale})}return $.state=a,$.place=Vs,$.setWalk=R=>{_=R||null,_&&(a.glow=0)},$.setSeat=R=>{M=R||null,a.glow=M?0:a.glow,b=-1},$.setPiano=R=>{R=!!R,R!==A&&(A=R,A&&(a.glow=0),b=-1)},$};ud.exports.PLACE=Vs});var dd=xt((rT,Q3)=>{"use strict";Q3.exports={name:"Muzammil",title:"Hi, I\u2019m Muzammil.",text:`I\u2019m a self-taught artist. I paint emotions. Grief, longing, love, and the quiet ways we keep holding on. I borrow the light and stillness of the Renaissance to talk about very modern feelings.

This gallery is my portfolio, built brick by pixel, so my work has a home that never closes. Every painting comes with a few words, because some feelings need both a frame and a sentence.

You\u2019ll find me in the tree court, catching sunlight and trying not to get too absorbed. Wander the halls, stay as long as you like, and don\u2019t worry about the time. In here, the only thing that\u2019s drying is the paint.`}});var vd=xt((aT,nx)=>{"use strict";var ex=y0(),Z3=tl(),as=t=>String(t).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function pd(){return ex.isPhone||!window.matchMedia||!window.matchMedia("(pointer: fine)").matches?!1:window.innerWidth>=900&&window.innerHeight>=520}var yk=`
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
`,J3=!1;function ox(){if(J3)return;J3=!0;let t=document.createElement("style");t.textContent=yk,document.head.appendChild(t)}var bk='<svg class="visit-play" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="10.2"/><path d="M10 8.4l6 3.6-6 3.6z" fill="currentColor" stroke="none"/></svg>';function wk(t){return!t||!t.visit||!pd()?"":(ox(),`<button type="button" class="visit-btn" data-visit="${as(t.slug||"")}" aria-label="Visit what remained: watch ${as(t.title)} come to life">${bk}<span>Visit what remained</span></button>`)}function _k(t){let e=t.getContext("2d");t.width=t.height=160;let o=e.createImageData(160,160),n=!0,r=0;return function a(s){if(n){if(s-r>70){r=s;let i=o.data;for(let c=0;c<i.length;c+=4){let f=Math.random()*255;i[c]=i[c+1]=i[c+2]=f,i[c+3]=255}e.putImageData(o,0,0),t.style.transform=`translate(${(Math.random()*6-3).toFixed(1)}%, ${(Math.random()*6-3).toFixed(1)}%)`}requestAnimationFrame(a)}}(0),()=>{n=!1}}var Hl=null;function Mk(t){if(Hl||!t||!t.visit)return;ox();let e=document.activeElement;document.body.classList.add("visiting");let o="images/web/"+t.slug+(ex.isPhone?"-1024":"")+".webp",n=document.createElement("div");n.className="visit",n.setAttribute("role","dialog"),n.setAttribute("aria-modal","true"),n.setAttribute("aria-label","Visiting "+t.title),n.innerHTML=`
		<video muted playsinline preload="auto" ${t.visit.poster?`poster="${as(t.visit.poster)}"`:""}></video>
		<img class="visit-art" alt="${as(t.title)}, ${as(Z3(t))}" src="${as(o)}">
		<canvas class="visit-grain" aria-hidden="true"></canvas>
		<div class="visit-vignette" aria-hidden="true"></div>
		<div class="visit-bar top" aria-hidden="true"></div>
		<div class="visit-bar bottom" aria-hidden="true"></div>
		<div class="visit-title">
			<span class="visit-kicker">A visit</span>
			<span class="visit-name">${as(t.title)}</span>
			<span class="visit-meta">${as(Z3(t))}</span>
		</div>
		<button type="button" class="visit-close" aria-label="Return to the gallery">\xD7</button>
		<button type="button" class="visit-skip">Skip</button>
		<div class="visit-end">
			<button type="button" class="primary" data-act="back">Return to the gallery</button>
			<button type="button" data-act="again">Watch again</button>
		</div>`,document.body.appendChild(n);let r=n.querySelector("video"),a=n.querySelector(".visit-title"),s=_k(n.querySelector(".visit-grain")),i=[],c=(m,g)=>i.push(setTimeout(m,g)),f=m=>m.stopPropagation();["mousedown","pointerdown","click","wheel","touchstart","touchmove"].forEach(m=>n.addEventListener(m,f));let l=m=>{m.key==="Escape"?(m.preventDefault(),d()):m.key===" "&&!(m.target&&m.target.tagName==="BUTTON")&&(m.preventDefault(),u()),m.stopImmediatePropagation()};window.addEventListener("keydown",l,!0);let v=m=>m.stopImmediatePropagation();window.addEventListener("keyup",v,!0);let h=!1;function u(){h||(h=!0,a.classList.add("on"),n.classList.add("resolved"),c(()=>{let m=n.querySelector('[data-act="back"]');m&&m.focus({preventScroll:!0})},1300))}function p(){h=!1,n.classList.remove("resolved"),a.classList.remove("on");try{r.currentTime=0}catch(g){}let m=r.play();m&&m.catch&&m.catch(()=>u()),n.classList.add("playing"),c(()=>{h||a.classList.add("on")},1600),c(()=>{h||a.classList.remove("on")},6200)}r.addEventListener("timeupdate",()=>{r.duration&&r.currentTime>r.duration-1.2&&u()}),r.addEventListener("ended",u),r.addEventListener("error",u);function d(){if(Hl){Hl=null,i.forEach(clearTimeout),n.classList.remove("on");try{r.pause()}catch(m){}window.removeEventListener("keydown",l,!0),window.removeEventListener("keyup",v,!0),document.body.classList.remove("visiting"),setTimeout(()=>{s(),n.remove(),e&&e.focus&&e.focus({preventScroll:!0})},1150)}}n.querySelector(".visit-close").addEventListener("click",d),n.querySelector(".visit-skip").addEventListener("click",()=>{try{r.pause()}catch(m){}u()}),n.querySelector(".visit-end").addEventListener("click",m=>{let g=m.target.closest("button");g&&(g.dataset.act==="back"&&d(),g.dataset.act==="again"&&(i.forEach(clearTimeout),p()))}),r.src=t.visit.video,Hl={close:d},requestAnimationFrame(()=>{n.classList.add("on"),c(p,1300)})}var tx={};function kk(t){if(!t||!t.visit||tx[t.visit.video]||!pd())return;tx[t.visit.video]=!0;let e=document.createElement("link");e.rel="preload",e.as="video",e.href=t.visit.video,document.head.appendChild(e)}nx.exports={available:pd,button:wk,open:Mk,warm:kk,get active(){return!!Hl}}});var sx=xt((sT,ax)=>{"use strict";var Sk=y0(),vc=[0,0],hc=[0,0],Ea=null,gd=0;if(typeof window!="undefined"){window.addEventListener("pointermove",e=>{e.pointerType!=="touch"&&(vc[0]=Math.max(-1,Math.min(1,e.clientX/window.innerWidth*2-1)),vc[1]=Math.max(-1,Math.min(1,e.clientY/window.innerHeight*2-1)),gd=performance.now())},{passive:!0});let t=()=>{gd=performance.now()};["wheel","touchstart","touchmove","keydown","pointerdown"].forEach(e=>window.addEventListener(e,t,{passive:!0,capture:!0})),window.addEventListener("deviceorientation",e=>{e.gamma===null||e.beta===null||(Ea||(Ea=[e.gamma,e.beta]),Ea[0]+=(e.gamma-Ea[0])*.01,Ea[1]+=(e.beta-Ea[1])*.01,vc[0]=Math.max(-1,Math.min(1,(e.gamma-Ea[0])/14)),vc[1]=Math.max(-1,Math.min(1,(e.beta-Ea[1])/14)))},{passive:!0})}var rx=0,uc=null,Gh=null,sa=[0,0,0],md=0,dc=null,pc=0,Xs={eye:[0,0,0],target:[0,0,0],fov:50,roll:0},Ek={apply(t,e){let o=Math.min(.1,Math.max(0,e-rx));rx=e;let n=t.eye,r=t.target,a=[r[0]-n[0],r[1]-n[1],r[2]-n[2]],s=Math.hypot(a[0],a[1],a[2])||1;a=[a[0]/s,a[1]/s,a[2]/s];let i=[-a[2],0,a[0]],c=Math.hypot(i[0],i[2])||1;i=[i[0]/c,0,i[2]/c];let f=[i[1]*a[2]-i[2]*a[1],i[2]*a[0]-i[0]*a[2],i[0]*a[1]-i[1]*a[0]],l=!uc;if(uc&&o>0){let b=[n[0]-uc[0],n[1]-uc[1],n[2]-uc[2]],w=Math.hypot(b[0],b[1],b[2]);if(w>2.5)l=!0;else{let M=Math.min(1,o*5);for(let A=0;A<3;A++)sa[A]+=(b[A]/o-sa[A])*M}let _=Math.hypot(r[0]-Gh[0],r[1]-Gh[1],r[2]-Gh[2]);pc=w/o<.12&&_/o<.2?pc+o:0}l&&(sa[0]=sa[1]=sa[2]=0,pc=0),uc=n.slice(),Gh=r.slice(),md=Math.hypot(sa[0],sa[1],sa[2]);let v=Math.min(1,o*2.6);hc[0]+=(vc[0]-hc[0])*v,hc[1]+=(vc[1]-hc[1])*v;let h=Math.max(.03,Math.min(.32,s*.05)),u=(Sk.isPhone&&!Ea?1.5:1)*Math.min(1,pc/2.5),p=(Math.sin(e*.131)*.55+Math.sin(e*.071+1.3)*.45)*h*.55*u,d=Math.sin(e*.097+.6)*h*.16*u,m=hc[0]*h+p,g=-hc[1]*h*.45+d;for(let b=0;b<3;b++)Xs.eye[b]=n[b]+i[b]*m+f[b]*g,Xs.target[b]=r[b]+(i[b]*m+f[b]*g)*.12;n[1]>.05&&(Xs.eye[1]=Math.max(.05,Xs.eye[1]));let x=sa[0]*i[0]+sa[2]*i[2];return Xs.fov=t.fov+Math.min(3.5,md*.55),Xs.roll=(t.roll||0)+Math.max(-.035,Math.min(.035,-x*.006)),Xs},pull(t,e){(dc===null||!(Math.abs(t.focus-dc)<40))&&(dc=t.focus);let o=1/60;dc+=(t.focus-dc)*Math.min(1,o*3.2),t.focus=dc,t.aperture>0&&(t.aperture*=1+.25*Math.min(1,pc/3))},get speed(){return md},get resting(){return pc>2&&performance.now()-gd>2e3}};ax.exports=Ek});var xd=xt((iT,ix)=>{ix.exports=1e-6});var yd=xt((cT,cx)=>{cx.exports=Ak;function Ak(){var t=new Float32Array(3);return t[0]=0,t[1]=0,t[2]=0,t}});var fx=xt((lT,lx)=>{lx.exports=Tk;function Tk(t){var e=new Float32Array(3);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}});var bd=xt((fT,hx)=>{hx.exports=zk;function zk(t,e,o){var n=new Float32Array(3);return n[0]=t,n[1]=e,n[2]=o,n}});var wd=xt((hT,ux)=>{ux.exports=Lk;function Lk(t,e){var o=e[0],n=e[1],r=e[2],a=o*o+n*n+r*r;return a>0&&(a=1/Math.sqrt(a),t[0]=e[0]*a,t[1]=e[1]*a,t[2]=e[2]*a),t}});var _d=xt((uT,dx)=>{dx.exports=Nk;function Nk(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}});var gx=xt((dT,mx)=>{mx.exports=Ck;var px=bd(),vx=wd(),Rk=_d();function Ck(t,e){var o=px(t[0],t[1],t[2]),n=px(e[0],e[1],e[2]);vx(o,o),vx(n,n);var r=Rk(o,n);return r>1?0:Math.acos(r)}});var yx=xt((pT,xx)=>{xx.exports=Ok;function Ok(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}});var wx=xt((vT,bx)=>{bx.exports=Pk;function Pk(t,e,o,n){return t[0]=e,t[1]=o,t[2]=n,t}});var Mx=xt((mT,_x)=>{_x.exports=Ik;var Md=xd();function Ik(t,e){var o=t[0],n=t[1],r=t[2],a=e[0],s=e[1],i=e[2];return Math.abs(o-a)<=Md*Math.max(1,Math.abs(o),Math.abs(a))&&Math.abs(n-s)<=Md*Math.max(1,Math.abs(n),Math.abs(s))&&Math.abs(r-i)<=Md*Math.max(1,Math.abs(r),Math.abs(i))}});var Sx=xt((gT,kx)=>{kx.exports=$k;function $k(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]}});var Ax=xt((xT,Ex)=>{Ex.exports=Fk;function Fk(t,e,o){return t[0]=e[0]+o[0],t[1]=e[1]+o[1],t[2]=e[2]+o[2],t}});var kd=xt((yT,Tx)=>{Tx.exports=qk;function qk(t,e,o){return t[0]=e[0]-o[0],t[1]=e[1]-o[1],t[2]=e[2]-o[2],t}});var Lx=xt((bT,zx)=>{zx.exports=kd()});var Sd=xt((wT,Nx)=>{Nx.exports=Dk;function Dk(t,e,o){return t[0]=e[0]*o[0],t[1]=e[1]*o[1],t[2]=e[2]*o[2],t}});var Cx=xt((_T,Rx)=>{Rx.exports=Sd()});var Ed=xt((MT,Ox)=>{Ox.exports=Gk;function Gk(t,e,o){return t[0]=e[0]/o[0],t[1]=e[1]/o[1],t[2]=e[2]/o[2],t}});var Ix=xt((kT,Px)=>{Px.exports=Ed()});var Fx=xt((ST,$x)=>{$x.exports=Hk;function Hk(t,e,o){return t[0]=Math.min(e[0],o[0]),t[1]=Math.min(e[1],o[1]),t[2]=Math.min(e[2],o[2]),t}});var Dx=xt((ET,qx)=>{qx.exports=Bk;function Bk(t,e,o){return t[0]=Math.max(e[0],o[0]),t[1]=Math.max(e[1],o[1]),t[2]=Math.max(e[2],o[2]),t}});var Hx=xt((AT,Gx)=>{Gx.exports=Uk;function Uk(t,e){return t[0]=Math.floor(e[0]),t[1]=Math.floor(e[1]),t[2]=Math.floor(e[2]),t}});var Ux=xt((TT,Bx)=>{Bx.exports=jk;function jk(t,e){return t[0]=Math.ceil(e[0]),t[1]=Math.ceil(e[1]),t[2]=Math.ceil(e[2]),t}});var Wx=xt((zT,jx)=>{jx.exports=Wk;function Wk(t,e){return t[0]=Math.round(e[0]),t[1]=Math.round(e[1]),t[2]=Math.round(e[2]),t}});var Xx=xt((LT,Vx)=>{Vx.exports=Vk;function Vk(t,e,o){return t[0]=e[0]*o,t[1]=e[1]*o,t[2]=e[2]*o,t}});var Kx=xt((NT,Yx)=>{Yx.exports=Xk;function Xk(t,e,o,n){return t[0]=e[0]+o[0]*n,t[1]=e[1]+o[1]*n,t[2]=e[2]+o[2]*n,t}});var Ad=xt((RT,Qx)=>{Qx.exports=Yk;function Yk(t,e){var o=e[0]-t[0],n=e[1]-t[1],r=e[2]-t[2];return Math.sqrt(o*o+n*n+r*r)}});var Jx=xt((CT,Zx)=>{Zx.exports=Ad()});var Td=xt((OT,ty)=>{ty.exports=Kk;function Kk(t,e){var o=e[0]-t[0],n=e[1]-t[1],r=e[2]-t[2];return o*o+n*n+r*r}});var oy=xt((PT,ey)=>{ey.exports=Td()});var zd=xt((IT,ny)=>{ny.exports=Qk;function Qk(t){var e=t[0],o=t[1],n=t[2];return Math.sqrt(e*e+o*o+n*n)}});var ay=xt(($T,ry)=>{ry.exports=zd()});var Ld=xt((FT,sy)=>{sy.exports=Zk;function Zk(t){var e=t[0],o=t[1],n=t[2];return e*e+o*o+n*n}});var cy=xt((qT,iy)=>{iy.exports=Ld()});var fy=xt((DT,ly)=>{ly.exports=Jk;function Jk(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t}});var uy=xt((GT,hy)=>{hy.exports=tS;function tS(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t}});var py=xt((HT,dy)=>{dy.exports=eS;function eS(t,e,o){var n=e[0],r=e[1],a=e[2],s=o[0],i=o[1],c=o[2];return t[0]=r*c-a*i,t[1]=a*s-n*c,t[2]=n*i-r*s,t}});var my=xt((BT,vy)=>{vy.exports=oS;function oS(t,e,o,n){var r=e[0],a=e[1],s=e[2];return t[0]=r+n*(o[0]-r),t[1]=a+n*(o[1]-a),t[2]=s+n*(o[2]-s),t}});var xy=xt((UT,gy)=>{gy.exports=nS;function nS(t,e){e=e||1;var o=Math.random()*2*Math.PI,n=Math.random()*2-1,r=Math.sqrt(1-n*n)*e;return t[0]=Math.cos(o)*r,t[1]=Math.sin(o)*r,t[2]=n*e,t}});var by=xt((jT,yy)=>{yy.exports=rS;function rS(t,e,o){var n=e[0],r=e[1],a=e[2],s=o[3]*n+o[7]*r+o[11]*a+o[15];return s=s||1,t[0]=(o[0]*n+o[4]*r+o[8]*a+o[12])/s,t[1]=(o[1]*n+o[5]*r+o[9]*a+o[13])/s,t[2]=(o[2]*n+o[6]*r+o[10]*a+o[14])/s,t}});var _y=xt((WT,wy)=>{wy.exports=aS;function aS(t,e,o){var n=e[0],r=e[1],a=e[2];return t[0]=n*o[0]+r*o[3]+a*o[6],t[1]=n*o[1]+r*o[4]+a*o[7],t[2]=n*o[2]+r*o[5]+a*o[8],t}});var ky=xt((VT,My)=>{My.exports=sS;function sS(t,e,o){var n=e[0],r=e[1],a=e[2],s=o[0],i=o[1],c=o[2],f=o[3],l=f*n+i*a-c*r,v=f*r+c*n-s*a,h=f*a+s*r-i*n,u=-s*n-i*r-c*a;return t[0]=l*f+u*-s+v*-c-h*-i,t[1]=v*f+u*-i+h*-s-l*-c,t[2]=h*f+u*-c+l*-i-v*-s,t}});var Ey=xt((XT,Sy)=>{Sy.exports=iS;function iS(t,e,o,n){var r=o[1],a=o[2],s=e[1]-r,i=e[2]-a,c=Math.sin(n),f=Math.cos(n);return t[0]=e[0],t[1]=r+s*f-i*c,t[2]=a+s*c+i*f,t}});var Ty=xt((YT,Ay)=>{Ay.exports=cS;function cS(t,e,o,n){var r=o[0],a=o[2],s=e[0]-r,i=e[2]-a,c=Math.sin(n),f=Math.cos(n);return t[0]=r+i*c+s*f,t[1]=e[1],t[2]=a+i*f-s*c,t}});var Ly=xt((KT,zy)=>{zy.exports=lS;function lS(t,e,o,n){var r=o[0],a=o[1],s=e[0]-r,i=e[1]-a,c=Math.sin(n),f=Math.cos(n);return t[0]=r+s*f-i*c,t[1]=a+s*c+i*f,t[2]=e[2],t}});var Ry=xt((QT,Ny)=>{Ny.exports=fS;var ss=yd()();function fS(t,e,o,n,r,a){var s,i;for(e||(e=3),o||(o=0),n?i=Math.min(n*e+o,t.length):i=t.length,s=o;s<i;s+=e)ss[0]=t[s],ss[1]=t[s+1],ss[2]=t[s+2],r(ss,ss,a),t[s]=ss[0],t[s+1]=ss[1],t[s+2]=ss[2];return t}});var Oy=xt((ZT,Cy)=>{Cy.exports={EPSILON:xd(),create:yd(),clone:fx(),angle:gx(),fromValues:bd(),copy:yx(),set:wx(),equals:Mx(),exactEquals:Sx(),add:Ax(),subtract:kd(),sub:Lx(),multiply:Sd(),mul:Cx(),divide:Ed(),div:Ix(),min:Fx(),max:Dx(),floor:Hx(),ceil:Ux(),round:Wx(),scale:Xx(),scaleAndAdd:Kx(),distance:Ad(),dist:Jx(),squaredDistance:Td(),sqrDist:oy(),length:zd(),len:ay(),squaredLength:Ld(),sqrLen:cy(),negate:fy(),inverse:uy(),normalize:wd(),dot:_d(),cross:py(),lerp:my(),random:xy(),transformMat4:by(),transformMat3:_y(),transformQuat:ky(),rotateX:Ey(),rotateY:Ty(),rotateZ:Ly(),forEach:Ry()}});var $y=xt((JT,Iy)=>{"use strict";function Py(){let t={};return{on(e,o){return(t[e]=t[e]||[]).push(o),this},emit(e,o){(t[e]||[]).slice().forEach(n=>n(o))}}}Iy.exports=function(e){let o=e.ownerDocument||document,n=Py(),r=null,a={dx:0,dy:0,dt:0},s=0,i=()=>o.pointerLockElement||o.webkitPointerLockElement||null,c=()=>{if(i())return;let l=e.requestPointerLock||e.webkitRequestPointerLock;if(l)try{let v=l.call(e);v&&v.catch&&v.catch(()=>{})}catch(v){}};e.addEventListener("mousedown",c,!1);let f=()=>{if(!i()){r&&(n.emit("release"),r.emit("end"),r=null);return}r=Py(),s=Date.now(),n.emit("attain",r)};return o.addEventListener("pointerlockchange",f),o.addEventListener("webkitpointerlockchange",f),o.addEventListener("pointerlockerror",()=>n.emit("error")),(o.body||e).addEventListener("mousemove",l=>{r&&(a.dx=l.movementX||l.webkitMovementX||0,a.dy=l.movementY||l.webkitMovementY||0,a.dt=Date.now()-s,n.emit("data",a),r.emit("data",a))},!1),n.request=c,n.target=i,n.release=()=>{i()&&(o.exitPointerLock||o.webkitExitPointerLock).call(o)},n}});var Hy=xt((oz,Gy)=>{"use strict";var Ys=Yi(),Ks=Oy(),hS=$y(),tz=Math.PI/4,ez=Math.PI/6,Fy=2,uS=1,dS=2.4,pS=2.4,vS=1e3,mS=5,gS=7,Nd=vr().C,Bl=[[7,1.6],[7,Nd.zc],[Nd.x1-2.95,Nd.zc]],is=Bl.slice(1).map((t,e)=>{let o=Bl[e],n=t[0]-o[0],r=t[1]-o[1],a=Math.hypot(n,r);return{a:o,len:a,dir:[n/a,r/a]}}),Rd=is.reduce((t,e)=>t+e.len,0);function qy(t){let e=Math.max(0,Math.min(Rd,t));for(let n of is){if(e<=n.len)return[n.a[0]+n.dir[0]*e,n.a[1]+n.dir[1]*e];e-=n.len}let o=Bl[Bl.length-1];return[o[0],o[1]]}function xS(t){let e=0;for(let n=0;n<is.length;n++){let r=is[n],a=e+r.len;if(t<a-1e-4||n===is.length-1){let s=r.dir,c=t<=e+1e-4&&n>0?is[n-1].dir:r.dir;return{ahead:s,back:[-c[0],-c[1]]}}e=a}let o=is[is.length-1].dir;return{ahead:o,back:[-o[0],-o[1]]}}var yS=Math.PI/4,bS=7,wS=140,_S=70,Dy=(t,e,o)=>(1-t)*e+t*o,MS=t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2;Gy.exports=function({getGridSegments:t,getGridParts:e},o){var n=[0,Math.PI],r=[0,Math.PI],a=0,s=[0,0,0],i=[gS,Fy,Bl[0][1]],c=0,f=1,l=0,v=[.707,0,.707],h=[0,1,0],u=[0,0,0],p=.5,d=Ys.identity([]),m=Ys.identity([]),g=!1,x=[0,0,0],b=[0,0,0],w=1,_=!1;let M=Jt=>{n[1]+=Jt*yS},A=(Jt,be,Ce)=>{if(Jt=Math.max(Math.min(Jt,100),-100),be=Math.max(Math.min(be,100),-100),n[0]=0,_){a=0;return}for(a+=Jt;a>=Ce;)M(1),a-=Ce;for(;a<=-Ce;)M(-1),a+=Ce};hS(document.body).on("attain",Jt=>{Jt.on("data",be=>{A(be.dx,be.dy,wS)})});let R=null,W=null,H=0,D={x:0,y:0},C=58,P=document.createElement("div");P.id="museum-mobile-controls",P.innerHTML=`

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
	`,document.body.appendChild(P);let nt=P.querySelector("#museum-joystick"),yt=P.querySelector("#museum-joystick-knob"),vt=()=>{yt.style.transform="translate(-50%, -50%)",s[0]=0,s[2]=0},st=Jt=>{let be=Jt.clientX-D.x,Ce=Jt.clientY-D.y,ro=Math.hypot(be,Ce);if(ro>C&&(be=be/ro*C,Ce=Ce/ro*C),yt.style.transform=`translate(
				calc(-50% + ${be}px),
				calc(-50% + ${Ce}px)
			)`,ro<10){s[0]=0,s[2]=0;return}let Oe=be/C,we=Ce/C;s[0]=0,s[2]=Math.abs(we)>.15?we:0},it=(Jt,be)=>{for(let Ce=0;Ce<Jt.length;Ce++)if(Jt[Ce].identifier===be)return Jt[Ce];return null},qt=Jt=>!!(Jt&&Jt.closest&&Jt.closest(".painting-plaque, .story-overlay, .story-card, .story-close, button")),se=Jt=>{if(!qt(Jt.target)&&(Jt.cancelable&&Jt.preventDefault(),!_))for(let be=0;be<Jt.changedTouches.length;be++){let Ce=Jt.changedTouches[be];if(R===null&&Ce.clientX<window.innerWidth*.48){R=Ce.identifier;let ro=nt.getBoundingClientRect();D.x=ro.left+ro.width/2,D.y=ro.top+ro.height/2,st(Ce)}else W===null&&Ce.clientX>=window.innerWidth*.48&&(W=Ce.identifier,H=Ce.clientX,a=0)}},ge=Jt=>{if(qt(Jt.target)||(Jt.cancelable&&Jt.preventDefault(),_))return;let be=R===null?null:it(Jt.touches,R);be&&st(be);let Ce=W===null?null:it(Jt.touches,W);if(Ce){let ro=Ce.clientX-H;H=Ce.clientX,A(ro,0,_S)}},Ve=Jt=>{if(!qt(Jt.target)){Jt.cancelable&&Jt.preventDefault();for(let be=0;be<Jt.changedTouches.length;be++){let Ce=Jt.changedTouches[be];Ce.identifier===R&&(R=null,vt()),Ce.identifier===W&&(W=null)}}};document.addEventListener("touchstart",se,{passive:!1}),document.addEventListener("touchmove",ge,{passive:!1}),document.addEventListener("touchend",Ve,{passive:!1}),document.addEventListener("touchcancel",Ve,{passive:!1});let ye=document.createElement("style");ye.textContent=`

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
	`,document.head.appendChild(ye);var ho={};let ko=Jt=>{if(Jt.defaultPrevented||Jt.ctrlKey||Jt.altKey||Jt.metaKey)return;let be=Jt.type==="keydown";ho[Jt.code]=be,be&&!Jt.repeat&&!_&&((Jt.code==="KeyA"||Jt.code==="ArrowLeft")&&M(-1),(Jt.code==="KeyD"||Jt.code==="ArrowRight")&&M(1)),g=!1;let Ce=ho.KeyW||ho.ArrowUp?1:0;s=[0,0,(ho.KeyS||ho.ArrowDown?1:0)-Ce],Jt.preventDefault()};window.addEventListener("keydown",ko),window.addEventListener("keyup",ko);var Ko=0;return{pos:i,fmouse:r,forward:v,up:h,setPaused:Jt=>{_=!!Jt,_&&(s[0]=0,s[2]=0,vt())},place:(Jt,be)=>{c=Math.max(0,Math.min(Rd,Jt));let Ce=qy(c);i[0]=Ce[0],i[2]=Ce[1],n[1]=be,r[1]=be,a=0,f=1},view:()=>d,proj:()=>(Ys.perspective(m,o(),window.innerWidth/window.innerHeight,.1,700),m),tick:({time:Jt})=>{let be=Jt-Ko;Ko=Jt;let Ce=[0,0,0],ro=[];Ks.set(v,Math.sin(r[1]),0,-Math.cos(r[1])),Ks.set(h,0,1,0);let wo=g?pS:dS,Oe=Math.sin(n[1]),we=-Math.cos(n[1]),wt=xS(c),ie=Oe*wt.ahead[0]+we*wt.ahead[1],Pe=Oe*wt.back[0]+we*wt.back[1],pe=f;Math.max(ie,Pe)>.3&&(pe=ie>=Pe?1:-1);let Qt=_?0:-s[2]*wo;l+=(Qt-l)*(1-Math.exp(-Math.min(be,.1)*5.5)),Qt===0&&Math.abs(l)<.01&&(l=0);let So=l*pe*Math.min(be,.1);_&&(s[0]=0,s[2]=0,So=0,l=0),So!==0&&(f=Math.sign(So)*Math.sign(-s[2]||1)),c=Math.max(0,Math.min(Rd,c+So));let S=qy(c);Ks.set(u,S[0]-i[0],0,S[1]-i[2]);let io=Ks.len(u);io===0&&p!==.25&&(p=(Math.abs((p+.5)%1-.5)-.25)*.8+.25,(p+.01)%.25<.02&&(p=.25));let Ze=p;if(p+=io/(g?mS:vS),i[1]=Fy,Ks.add(i,i,u),w<1){w+=be/uS,w=Math.min(w,1);let Eo=MS(w);Ks.set(i,Dy(Eo,x[0],b[0]),i[1],Dy(Eo,x[2],b[2]))}r[0]=0,r[1]+=(n[1]-r[1])*Math.min(1,Math.min(be,.1)*bS),Math.abs(n[1]-r[1])<5e-4&&(r[1]=n[1]),Ys.identity(d),Ys.rotateX(d,d,0),Ys.rotateY(d,d,r[1]),Ys.translate(d,d,Ks.scale(Ce,i,-1))}}}});var jy=xt((nz,Uy)=>{"use strict";var{skylightGLSL:kS,Z_START:SS,Z_END:ES,GLASS_Y:AS}=$i(),{oculusGLSL:TS,A:Qs}=_0(),{windowLightGLSL:zS,C:Hh}=vr(),{doorLightGLSL:LS}=Fa(),Bh=tr(),Ul=mh(),By=_l(),E0=t=>t.toFixed(4),Cd=.1,Od=700,mc={exposure:.88,shafts:1,bloom:1,vignette:.42,grain:.032};function NS(t,e){let o=e[0],n=e[1],r=e[2],a=e[3],s=e[4],i=e[5],c=e[6],f=e[7],l=e[8],v=e[9],h=e[10],u=e[11],p=e[12],d=e[13],m=e[14],g=e[15],x=o*i-n*s,b=o*c-r*s,w=o*f-a*s,_=n*c-r*i,M=n*f-a*i,A=r*f-a*c,$=l*d-v*p,R=l*m-h*p,W=l*g-u*p,H=v*m-h*d,D=v*g-u*d,C=h*g-u*m,P=x*C-b*D+w*H+_*W-M*R+A*$;return P?(P=1/P,t[0]=(i*C-c*D+f*H)*P,t[1]=(r*D-n*C-a*H)*P,t[2]=(d*A-m*M+g*_)*P,t[3]=(h*M-v*A-u*_)*P,t[4]=(c*W-s*C-f*R)*P,t[5]=(o*C-r*W+a*R)*P,t[6]=(m*w-p*A-g*b)*P,t[7]=(l*A-h*w+u*b)*P,t[8]=(s*D-i*W+f*$)*P,t[9]=(n*W-o*D-a*$)*P,t[10]=(p*M-d*w+g*x)*P,t[11]=(v*w-l*M-u*x)*P,t[12]=(i*R-s*H-c*$)*P,t[13]=(o*H-n*R+r*$)*P,t[14]=(d*b-p*_-m*x)*P,t[15]=(l*_-v*b+h*x)*P,t):null}function RS(t,e,o){let n=new Array(16);for(let r=0;r<4;r++)for(let a=0;a<4;a++){let s=0;for(let i=0;i<4;i++)s+=e[i*4+a]*o[r*4+i];n[r*4+a]=s}for(let r=0;r<16;r++)t[r]=n[r];return t}var CS=`
precision highp float;
attribute vec2 position;
varying vec2 uv;
void main() {
	uv = position * 0.5 + 0.5;
	gl_Position = vec4(position, 0.0, 1.0);
}`;Uy.exports=(t,e)=>{let o=!!e.isPhone,n=t.hasExtension("webgl_depth_texture"),r=o?10:18,a=()=>e.post>=2?2:4,s=it=>t.texture(Object.assign({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"},it||{})),i=()=>t.framebuffer({color:s(),depth:!1}),c=s(),f=n?t.texture({width:4,height:4,format:"depth",type:"uint32"}):null,l=t.framebuffer({color:c,depth:f||!0}),v=[i(),i()],h=[i(),i()],u=[i(),i()],p=[i(),i()],d=new Array(16).fill(0),m=new Array(16).fill(0),g=[0,0,0],x={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},b={position:[-1,-1,3,-1,-1,3]},w=(it,qt,se)=>t(Object.assign({vert:CS,frag:it,attributes:b,count:3,depth:{enable:!1,mask:!1},cull:{enable:!1},blend:{enable:!1},uniforms:qt,framebuffer:t.prop("out")},se||{})),_=[2.6,0,SS-3.2,12.6,AS,ES+.4],M=[Qs.x0-.2,0,Qs.z0,Qs.x1,Qs.domeTop,Qs.z1],A=[Hh.x0,0,Hh.z0,Hh.x1,7.6,Hh.z1],$=[.35,0,.35,13.65,7.6,9],R=By.AIR_BOX,W=it=>`vec3(${E0(it[0])}, ${E0(it[1])}, ${E0(it[2])}), vec3(${E0(it[3])}, ${E0(it[4])}, ${E0(it[5])})`,H=w(`
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

	${kS()}
	${TS()}
	${zS()}
	${LS()}
	${By.sunGLSL()}

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
			vec2 t = hitBox(eye, rd, ${W(_)});
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
			vec2 t = hitBox(eye, rd, ${W(M)});
			t.y = min(t.y, len);
			if (t.y > t.x) {
				float st = (t.y - t.x) / float(N);
				float acc = 0.0;
				for (int i = 0; i < N; i++) {
					vec3 p = eye + rd * (t.x + (float(i) + jit) * st);
					if (p.y < ${E0(Qs.dome.base)} && p.x > ${E0(Qs.x0-.1)}) acc += oculusOpen(p) * treeShade(p) * air(p);
				}
				float ph = phase(dot(rd, SHAFT), 0.6) + 0.05;
				sum += mix(vec3(1.0, 0.88, 0.68), vec3(0.62, 0.74, 1.0) * 1.2, night) * acc * st * ph * strength.y;
			}
		}

		// the corridor windows
		if (strength.z > 0.0) {
			vec2 t = hitBox(eye, rd, ${W(A)});
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
			vec2 t = hitBox(eye, rd, ${W($)});
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
			vec2 t = hitBox(eye, rd, ${W(R)});
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
	}`,{depthTex:()=>f,invVP:()=>d,eye:()=>g,time:t.context("time"),night:()=>Bh.night,strength:()=>D,strength5:()=>C}),D=[0,0,0,0],C=0;function P(){let it=mc.shafts*x.shafts,qt=Bh.night;return D[0]=Ul.box(_)?.06*it*(1+.9*qt):0,D[1]=Ul.box(M,!1,"court")?.1*it*(1+.9*qt):0,D[2]=Ul.box(A)?.07*it*(1+.4*qt):0,D[3]=Ul.box($)?.04*it*(1-.75*qt):0,Ul.zone==="studio"?(D[0]=D[1]=D[2]=D[3]=0,C=.03*it*(1+1.3*qt)):C=0,D[0]+D[1]+D[2]+D[3]+C>5e-4}let nt=w(`
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
	}`,{src:t.prop("src"),dir:(it,qt)=>[qt.dir[0]/qt.size[0],qt.dir[1]/qt.size[1]]}),yt=w(`
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
	}`,{src:t.prop("src"),texel:(it,qt)=>[.5/qt.size[0],.5/qt.size[1]],threshold:t.prop("threshold")}),vt=w(`
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
		return 2.0 * ${E0(Cd)} * ${E0(Od)} / (${E0(Od+Cd)} - z * ${E0(Od-Cd)});
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
	}`,{scene:()=>c,depthTex:()=>f||c,soft:()=>v[0],bloomA:()=>h[0],bloomB:()=>u[0],shafts:()=>p[0],res:()=>[l.width,l.height],time:t.context("time"),exposure:()=>mc.exposure*x.exposure,vignette:()=>Math.min(1,mc.vignette+x.vignette+.22*Bh.night),night:()=>Bh.night,grain:()=>mc.grain,bloomK:()=>mc.bloom,letterbox:()=>x.letterbox,fade:()=>x.fade,fadeColor:()=>x.fadeColor,aperture:()=>e.post>=2?x.aperture:0,focus:()=>x.focus,hasDepth:n?1:0},{framebuffer:null}),st=t({framebuffer:()=>l});return{shot:x,look:mc,hasDepth:n,capture(it,qt,se){let ge=Math.max(.4,Math.min(1,e.scale||1)),Ve=Math.max(2,Math.round(it.drawingBufferWidth*ge/2)*2),ye=Math.max(2,Math.round(it.drawingBufferHeight*ge/2)*2);(l.width!==Ve||l.height!==ye)&&l.resize(Ve,ye);let ho=Math.max(1,Math.ceil(Ve/2)),ko=Math.max(1,Math.ceil(ye/2));v.forEach(Ko=>Ko.resize(ho,ko)),h.forEach(Ko=>Ko.resize(Math.max(1,Math.ceil(Ve/4)),Math.max(1,Math.ceil(ye/4)))),u.forEach(Ko=>Ko.resize(Math.max(1,Math.ceil(Ve/8)),Math.max(1,Math.ceil(ye/8)))),p.forEach(Ko=>Ko.resize(Math.max(1,Math.ceil(Ve/a())),Math.max(1,Math.ceil(ye/a())))),RS(m,qt.proj,qt.view),NS(d,m),g[0]=qt.eye[0],g[1]=qt.eye[1],g[2]=qt.eye[2],st(()=>{t.clear({color:[0,0,0,1],depth:1}),se()})},present(){let it=qt=>[qt.width,qt.height];n&&e.post>=1&&P()?(H({out:p[0]}),nt({out:p[1],src:p[0],dir:[1,0],size:it(p[0])}),nt({out:p[0],src:p[1],dir:[0,1],size:it(p[0])})):t.clear({color:[0,0,0,1],framebuffer:p[0]}),yt({out:v[0],src:c,size:[l.width,l.height],threshold:0}),nt({out:v[1],src:v[0],dir:[1,0],size:it(v[0])}),nt({out:v[0],src:v[1],dir:[0,1],size:it(v[0])}),yt({out:h[0],src:v[0],size:it(v[0]),threshold:.42}),nt({out:h[1],src:h[0],dir:[1,0],size:it(h[0])}),nt({out:h[0],src:h[1],dir:[0,1],size:it(h[0])}),yt({out:u[0],src:h[0],size:it(h[0]),threshold:0}),nt({out:u[1],src:u[0],dir:[1.5,0],size:it(u[0])}),nt({out:u[0],src:u[1],dir:[0,1.5],size:it(u[0])}),vt({out:null})}}}});var Ky=xt((rz,Yy)=>{"use strict";var Wy=tr().GLSL,OS=zs(),Pd=Fa(),{C:PS,FAR_DOOR:IS}=vr(),$S=100*Math.PI/180,Vy=t=>[IS.x-t[2],t[1],PS.zc-7+t[0]],Xy=t=>[-t[2],t[1],t[0]];function FS(t){let e=[],o=[],n=[],r=[],a=OS.createBuilder(e,o,n,r);Pd.addFrames(a,t);let s=Pd.glassPanes(t),i=c=>{let f=[];for(let l=0;l<c.length;l+=3)f.push([c[l],c[l+1],c[l+2]]);return f};return{position:i(e),normal:i(o),elements:n,glass:s}}Yy.exports=t=>{let e=Pd.DOOR,o=["left","right"].map(l=>{let v=FS(l),h=v.position.length;return{part:l,hinge:l==="left"?e.x0:e.x1,sign:l==="left"?-1:1,src:v.position.map(u=>u.slice()),srcN:v.normal.map(u=>u.slice()),srcG:v.glass.map(u=>u.slice()),pos:t.buffer({data:new Float32Array(h*3),usage:"dynamic"}),nrm:t.buffer({data:new Float32Array(h*3),usage:"dynamic"}),gpos:t.buffer({data:new Float32Array(v.glass.length*3),usage:"dynamic"}),gnrm:t.buffer({data:new Float32Array(v.glass.length*3),usage:"dynamic"}),el:t.elements({data:new Uint32Array(v.elements),type:"uint32"}),glassCount:v.glass.length,outP:new Float32Array(h*3),outN:new Float32Array(h*3),outG:new Float32Array(v.glass.length*3),outGN:new Float32Array(v.glass.length*3)}}),n=null;function r(l){if(l!==n){n=l;for(let v of o){let h=v.sign*l,u=Math.cos(h),p=Math.sin(h),d=x=>{let b=x[0]-v.hinge,w=x[2];return[v.hinge+b*u+w*p,x[1],-b*p+w*u]},m=x=>[x[0]*u+x[2]*p,x[1],-x[0]*p+x[2]*u];v.src.forEach((x,b)=>{let w=Vy(d(x));v.outP.set(w,b*3),v.outN.set(Xy(m(v.srcN[b])),b*3)});let g=Xy(m([0,0,1]));v.srcG.forEach((x,b)=>{v.outG.set(Vy(d(x)),b*3),v.outGN.set(g,b*3)}),v.pos.subdata(v.outP),v.nrm.subdata(v.outN),v.gpos.subdata(v.outG),v.gnrm.subdata(v.outGN)}}}r(0);let a=`
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
		${Wy}
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
		${Wy}
		varying vec3 v_pos, v_n, v_eye;
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			float c = abs(dot(V, normalize(v_n)));
			float fres = pow(1.0 - c, 3.0);
			float d = (v_pos.x + v_pos.z) * 0.55 + v_pos.y * 0.85;
			float sheen = smoothstep(0.35, 0.0, abs(fract(d * 0.22) - 0.5)) * 0.05;
			float a = 0.05 + 0.32 * fres + sheen;
			gl_FragColor = vec4(toNight(mix(vec3(0.80, 0.86, 0.90), vec3(1.0, 0.95, 0.86), 0.4), 0.22), a);
		}`,attributes:{position:t.prop("pos"),normal:t.prop("nrm")},count:t.prop("count"),cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}}),c=0,f=()=>{r(c*$S);for(let l of o)s({pos:l.pos,nrm:l.nrm,el:l.el})};return f.glass=()=>{for(let l of o)i({pos:l.gpos,nrm:l.gnrm,count:l.glassCount})},f.setOpen=l=>{c=l||0},f.openNow=()=>c,f}});var Zy=xt((az,Qy)=>{"use strict";var qS=tr().GLSL,{skylightGLSL:DS}=$i(),{oculusGLSL:GS}=_0(),{windowLightGLSL:HS}=vr(),U0=.22;function BS(){let t=[],e=[],o=[],n=[],s=(l,v)=>{let h=U0*.2*Math.pow(Math.sin(Math.PI*Math.pow(l,.85)),.9)*(v>0?1.06:.94),u=l*U0-U0*.12,p=v*h,d=Math.abs(v)*h*.42-.14*l*l*U0;d+=Math.sin(l*17+(v>0?0:2.1))*.012*U0*v*v;let m=(l-.3)*.55,g=Math.cos(m),x=Math.sin(m),b=d*g-p*x,w=d*x+p*g;return[u,b,w+.05*U0*l*l]},i=(l,v)=>{let u=s(Math.min(1,l+.01),v),p=s(Math.max(0,l-.01),v),d=s(l,Math.min(1,v+.01)),m=s(l,Math.max(-1,v-.01)),g=[u[0]-p[0],u[1]-p[1],u[2]-p[2]],x=[d[0]-m[0],d[1]-m[1],d[2]-m[2]],b=[x[1]*g[2]-x[2]*g[1],x[2]*g[0]-x[0]*g[2],x[0]*g[1]-x[1]*g[0]],w=Math.hypot(b[0],b[1],b[2])||1,_=b[1]<0?-1:1;return[b[0]/w*_,b[1]/w*_,b[2]/w*_]};for(let l=0;l<=18;l++){let v=l/18;for(let h=0;h<=5*2;h++){let u=h/5-1;t.push(s(v,u)),e.push(i(Math.min(.97,Math.max(.03,v)),u)),o.push([v,u])}}let c=5*2+1;for(let l=0;l<18;l++)for(let v=0;v<c-1;v++){let h=l*c+v,u=h+1,p=h+c,d=p+1;n.push([h,p,u],[u,p,d])}let f=t.length;return t.push([-U0*.12,0,-.003],[-U0*.12,0,.003],[-U0*.24,-.01,.0015],[-U0*.24,-.01,-.0015]),e.push([0,1,0],[0,1,0],[0,1,0],[0,1,0]),o.push([0,0],[0,0],[-.1,0],[-.1,0]),n.push([f,f+2,f+1],[f,f+3,f+2]),{pos:t,nrm:e,uv:o,idx:n}}Qy.exports=t=>{let e=BS(),o=t({vert:`
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
		${qS}
		uniform float time;
		uniform float yScale, visible;
		varying vec3 v_pos, v_normal;
		varying vec2 v_uv;
		varying vec3 v_eye;

		${DS()}
		${GS()}
		${HS()}

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
			vec3 c = (model * vec4(${(U0*.35).toFixed(3)}, 0.0, 0.0, 1.0)).xyz;
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{model:t.prop("model"),night:()=>n.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(a){a&&a.visible&&(o({model:a.model}),n.night>.01&&r({model:a.model}))}}});var e5=xt((sz,t5)=>{"use strict";var{skylightGLSL:US,Z_START:Jy,Z_END:jS}=$i(),{oculusGLSL:WS,A:gc}=_0(),{windowLightGLSL:VS,C:Zs}=vr();t5.exports=(t,e)=>{let o=e.isPhone?900:2600,n=e.isPhone?350:900,r=e.isPhone?450:1300,a=e.isPhone?13:22,s=7,i=()=>(s=s*16807%2147483647,(s-1)/2147483646),c=Zs.x0+.6,f=Zs.x1-.3,l=[];for(let p=0;p<o;p++)l.push([2.5+i()*10.5,.3+i()*8,Jy-3.5+i()*(jS-Jy+4.5),i()]);for(let p=0;p<n;p++)l.push([gc.x0+.3+i()*(gc.x1-gc.x0-.6),.3+i()*7.5,gc.z0+.3+i()*(gc.z1-gc.z0-.6),i()]);for(let p=0;p<r;p++)l.push([c+i()*(f-c),.2+i()*5.6,Zs.z0+.25+i()*(Zs.z1-Zs.z0-.5),i()]);let v=p=>p.toFixed(4),h=[[0,-50,0,0],[0,-50,0,0],[0,-50,0,0],[0,-50,0,0]],u=t({vert:`
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

		${US()}
		${WS()}
		${VS()}

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
				p.z = clamp(p.z, ${v(Zs.z0+.1)}, ${v(Zs.z1-.1)});
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
		}`,attributes:{seed:l},count:l.length,primitive:"points",uniforms:{time:t.context("time"),pixelScale:p=>p.viewportHeight*.006,focus:(p,d)=>d&&d.focus||6,aperture:(p,d)=>d&&d.aperture||0,wake0:(p,d)=>(d&&d.wake||h)[0],wake1:(p,d)=>(d&&d.wake||h)[1],wake2:(p,d)=>(d&&d.wake||h)[2],wake3:(p,d)=>(d&&d.wake||h)[3],wakeDir:(p,d)=>d&&d.wakeDir||[0,0,1],gust:(p,d)=>d&&d.gust||[0,0]},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});return p=>u(p||{})}});var i5=xt((iz,s5)=>{"use strict";var{C:a5}=vr(),o5=tr(),n5=15.3,XS=37.1,r5=a5.z1+.9,YS=a5.z1+.7+16-.6;s5.exports=(t,e)=>{let o=e.isPhone?36:80,n=11,r=()=>(n=n*16807%2147483647,(n-1)/2147483646),a=[];for(let f=0;f<o;f++){let l=.35+Math.pow(r(),1.8)*2.4;a.push([n5+r()*(XS-n5),l,r5+r()*(YS-r5),r()])}let s=[],i=[];a.forEach(f=>{[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(l=>{s.push(l[0],l[1]),i.push(...f)})});let c=t({vert:`
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
		}`,attributes:{corner:s,seed:i},count:s.length/2,uniforms:{time:t.context("time"),night:()=>o5.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(){o5.night>.01&&c()}}});var Wh=xt((cz,h0)=>{"use strict";var c5=tr(),ia=Ua(),KS=Yi(),ls=Math.PI,de=t=>(+t).toFixed(4),j0=t=>`vec3(${de(t[0])}, ${de(t[1])}, ${de(t[2])})`,Yo={x0:-2.05,z0:41.45,z1:47.55,top:5.1},Mo=-.55,Vn=-2,hn=42.25,Pn=43.65,z0=45.35,Fr=46.75,rr=2.75,l0=.12,QS=(Mo+Vn)/2,Fo={x:-1.3,y:1.42,w:.42,h:.52,z:Pn,cell:.026},Ge={x0:-1.85,x1:-.75,top:.98,z0:Pn-.3,z1:Pn-.02},A0={x0:-1.44,x1:-1.16,y0:Ge.top-.002,y1:Ge.top+.018},f0={cx:-1.3,cz:Pn-.165,w:.2,d:.255,y:Ge.top+.0012},dr={x:-1.03,z:Pn-.14,r:.042,h:.075},Jo={x:-.86,z:Pn-.12,h:.085,r:.019};Jo.flame=[Jo.x,Ge.top+.012+Jo.h+.028,Jo.z];var jh={a:[dr.x-.004,Ge.top+.03,dr.z+.004],b:[dr.x-.13,Ge.top+.34,dr.z-.12]},un=[-1.5,2.42,44.66],On=[-1.78,1.95,hn+.09],T0={x:-1.32,z:44.08,y:.64,heading:.32},h5={window:{eye:[-1.3,1.33,42.8],target:[Fo.x,1.37,Pn],fov:54},paper:{eye:[-1.3,1.4,43.23],target:[f0.cx,Ge.top,f0.cz+.01],fov:40},front:{eye:[1.6,1.62,43],target:[-.9,1.35,43],fov:55},bay:{eye:[4.2,2.1,44.6],target:[-1,1.9,44.5],fov:55}},Sr={z0:(hn+Pn)/2+.03,z1:(hn+Pn)/2+.56,y0:.98,y1:1.78,x:Mo+.03,cell:.047};h5.peek={eye:[-1.2,1.42,42.95],target:[ia.PLAY.stoolX-ia.OFF[0],.85,ia.PLAY.keyFront+.2],fov:30};var cs={ink:null,inkDirty:!1,fold:0,slide:0,shown:!0,active:!1};function l5(){return`
	// a quatrefoil hole in the brass (g: metres across the window from its centre)
	float grilleHole(vec2 g) {
		vec2 q = fract(g / ${de(Fo.cell)} + 0.5) - 0.5;
		float d = min(min(length(q - vec2(0.17, 0.0)), length(q + vec2(0.17, 0.0))),
		              min(length(q - vec2(0.0, 0.17)), length(q + vec2(0.0, 0.17))));
		d = min(d, length(q) - 0.04);
		return 1.0 - smoothstep(0.15, 0.19, d);
	}
	// how much of the lamp's light reaches p (on the penitent's side) through the window
	float throughGrille(vec3 p, float soft) {
		vec3 d = p - ${j0(un)};
		if (d.z > -0.001) return 0.0;
		float t = (${de(Fo.z)} - ${de(un[2])}) / d.z;
		vec2 g = (${j0(un)} + d * t).xy - vec2(${de(Fo.x)}, ${de(Fo.y)});
		float inWin = (1.0 - smoothstep(${de(Fo.w/2-.01)}, ${de(Fo.w/2)} + soft, abs(g.x))) *
		              (1.0 - smoothstep(${de(Fo.h/2-.01)}, ${de(Fo.h/2)} + soft, abs(g.y)));
		// the lamp is not a point: the pattern blurs the further it falls
		// from the brass
		float pen = 0.045 * abs(p.z - ${de(Fo.z)}) / abs(${de(Fo.z)} - ${de(un[2])}) / ${de(Fo.cell)};
		vec2 qc = fract(g / ${de(Fo.cell)} + 0.5) - 0.5;
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
		vec3 c = ${j0(Jo.flame)};
		vec3 d = c - p;
		float s = 1.0;
		// the pot: a short upright cylinder
		vec2 a = vec2(${de(dr.x)}, ${de(dr.z)}) - p.xz;
		vec2 dd = d.xz;
		float t = clamp(dot(a, dd) / max(dot(dd, dd), 1e-5), 0.0, 1.0);
		float r = length(p.xz + dd * t - vec2(${de(dr.x)}, ${de(dr.z)}));
		float y = p.y + d.y * t;
		s *= mix(1.0, 0.25, (1.0 - smoothstep(${de(dr.r*.7)}, ${de(dr.r*1.6)}, r)) * (1.0 - smoothstep(${de(Ge.top+dr.h*.8)}, ${de(Ge.top+dr.h*1.3)}, y)));
		// the quill: a thin capsule
		vec3 qa = ${j0(jh.a)}, qb = ${j0(jh.b)};
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
		bool inB1 = p.z < ${de(Pn)} && p.z > ${de(hn-.04)} && p.x < ${de(Mo+.02)};
		bool inPriest = p.z >= ${de(Pn)} && p.z < ${de(z0)} && p.x < ${de(Mo)};
		bool inB2 = p.z >= ${de(z0)} && p.z < ${de(Fr+.04)} && p.x < ${de(Mo)};
		// how open to the hall it is
		float open = 1.0;
		if (inB1) open = mix(0.7, 1.1, smoothstep(${de(Vn)}, ${de(Mo)}, p.x));
		if (inPriest) open = 0.16;
		if (inB2) open = 0.10;
		// deeper into the bay, a little less of the hall's light
		open *= mix(0.62, 1.0, smoothstep(${de(Yo.x0)}, 0.3, p.x));
		// the stair hall's candlelight (it stands there now: see stairhall.js)
		vec3 rs;
		vec3 col = roomLight(p + ${j0(ia.OFF)}, N, V, gloss, rs) * 1.25 * open;
		spec += rs * open;
		// the lamp, warm, behind the brass
		vec3 Ld = ${j0(un)} - p;
		float dl = length(Ld);
		vec3 L = Ld / dl;
		float T = inPriest ? 1.0 : (inB1 ? throughGrille(p, 0.0) : 0.0);
		vec3 lampCol = vec3(1.0, 0.70, 0.40) * mix(3.2, 1.0, night);
		vec3 lamp = lampCol * T * max(dot(N, L), 0.0) / (1.0 + dl * dl * 1.6);
		col += lamp;
		spec += lampCol * T * pow(max(dot(N, normalize(L + V)), 0.0), mix(8.0, 60.0, gloss)) * gloss / (1.0 + dl * dl * 1.6);
		// the little lamp in the open booth
		if (inB1) {
			vec3 Sd = ${j0(On)} - p;
			float ds = length(Sd);
			vec3 Ls = Sd / ds;
			vec3 sc = vec3(1.0, 0.72, 0.42) * mix(1.5, 0.35, night);
			col += sc * (max(dot(N, Ls), 0.0) * 0.8 + 0.2) / (0.15 + ds * ds * 1.6);
			spec += sc * pow(max(dot(N, normalize(Ls + V)), 0.0), mix(8.0, 60.0, gloss)) * gloss * 0.6 / (0.15 + ds * ds * 1.6);
		}
		// the candle
		if (night > 0.01) {
			vec3 Cd = ${j0(Jo.flame)} - p;
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
	}`}var Wn={WOOD:0,CARVED:1,VELVET:2,CUSHION:3,BRASS:4,INKGLASS:5,QUILL:6,LAMPGLASS:7,DARKWOOD:8};function u5(){let t=[],e=[],o=[],n=[],r=[],a=(f,l)=>[f[0]-l[0],f[1]-l[1],f[2]-l[2]],s=(f,l)=>[f[1]*l[2]-f[2]*l[1],f[2]*l[0]-f[0]*l[2],f[0]*l[1]-f[1]*l[0]],i=f=>{let l=Math.hypot(f[0],f[1],f[2])||1;return[f[0]/l,f[1]/l,f[2]/l]},c={pos:t,nrm:e,kind:o,uv:n,idx:r,norm:i,cross:s,sub:a};return c.v=(f,l,v,h)=>(t.push(f[0],f[1],f[2]),e.push(l[0],l[1],l[2]),o.push(v),n.push(h?h[0]:0,h?h[1]:0),t.length/3-1),c.quad=(f,l,v,h,u,p)=>{let d=i(s(a(l,f),a(h,f)));p=p||[[0,0],[1,0],[1,1],[0,1]];let m=c.v(f,d,u,p[0]),g=c.v(l,d,u,p[1]),x=c.v(v,d,u,p[2]),b=c.v(h,d,u,p[3]);r.push(m,g,x,m,x,b)},c.box=(f,l,v,h,u,p,d)=>{let m=(g,x,b,w,_,M,A,$)=>c.quad(g,x,b,w,d,[[_,A],[M,A],[M,$],[_,$]]);m([h,l,v],[h,l,p],[h,u,p],[h,u,v],v,p,l,u),m([f,l,p],[f,l,v],[f,u,v],[f,u,p],p,v,l,u),m([f,u,v],[h,u,v],[h,u,p],[f,u,p],f,h,v,p),m([f,l,p],[h,l,p],[h,l,v],[f,l,v],f,h,p,v),m([f,l,p],[h,l,p],[h,u,p],[f,u,p],f,h,l,u),m([h,l,v],[f,l,v],[f,u,v],[h,u,v],h,f,l,u)},c.tube=(f,l,v,h)=>{h=h||6;let u=t.length/3;for(let p=0;p<f.length;p++){let d=f[Math.max(0,p-1)],m=f[Math.min(f.length-1,p+1)],g=i(a(m,d)),x=Math.abs(g[1])>.9?[1,0,0]:[0,1,0],b=i(s(g,x)),w=s(b,g),_=typeof l=="function"?l(p/(f.length-1)):l;for(let M=0;M<=h;M++){let A=M/h*ls*2,$=Math.cos(A),R=Math.sin(A),W=[b[0]*$+w[0]*R,b[1]*$+w[1]*R,b[2]*$+w[2]*R];c.v([f[p][0]+W[0]*_,f[p][1]+W[1]*_,f[p][2]+W[2]*_],W,v,[p/(f.length-1),M/h])}}for(let p=0;p<f.length-1;p++)for(let d=0;d<h;d++){let m=u+p*(h+1)+d,g=m+h+1;r.push(m,m+1,g,m+1,g+1,g)}},c.lathe=(f,l,v,h,u)=>{u=u||20;let p=t.length/3;for(let d=0;d<v.length;d++){let[m,g]=v[d],x=v[Math.max(0,d-1)],b=v[Math.min(v.length-1,d+1)],w=b[0]-x[0],_=b[1]-x[1];for(let M=0;M<=u;M++){let A=M/u*ls*2,$=Math.cos(A),R=Math.sin(A),W=i([_*$,-w,_*R]);c.v([f+$*m,g,l+R*m],W,h,[M/u,d/(v.length-1)])}}for(let d=0;d<v.length-1;d++)for(let m=0;m<u;m++){let g=p+d*(u+1)+m,x=g+u+1;r.push(g,x,g+1,g+1,x,x+1)}},c.spire=(f,l,v,h,u,p)=>{let d=[[-h,-h],[h,-h],[h,h],[-h,h]];for(let m=0;m<4;m++){let g=d[m],x=d[(m+1)%4],b=[f+g[0],v,l+g[1]],w=[f+x[0],v,l+x[1]],_=[f,u,l],M=i(s(a(_,b),a(w,b))),A=c.v(b,M,p,[0,0]),$=c.v(w,M,p,[1,0]),R=c.v(_,M,p,[.5,1]);r.push(A,R,$)}},c.orient=()=>{for(let f=0;f<r.length;f+=3){let[l,v,h]=[r[f],r[f+1],r[f+2]],u=m=>[t[m*3],t[m*3+1],t[m*3+2]],p=s(a(u(v),u(l)),a(u(h),u(l))),d=[0,1,2].map(m=>e[l*3+m]+e[v*3+m]+e[h*3+m]);p[0]*d[0]+p[1]*d[1]+p[2]*d[2]<0&&(r[f+1]=h,r[f+2]=v)}return c},c}function Uh(t,e,o,n){if(t<=e)return o;let r=t-e;return r>=n?0:Math.max(0,Math.sqrt(n*n-r*r)-(n-o))}var ln={ys:1.78,a:.56,r:.78};ln.apex=ln.ys+Math.sqrt(ln.r*ln.r-(ln.r-ln.a)*(ln.r-ln.a));function ZS(){let t=u5(),e=Wn.WOOD,o=Wn.CARVED,n=Wn.DARKWOOD,r=.06;t.box(Vn,0,hn,Mo+.08,l0,Fr,n),t.box(Vn,rr-.06,hn-.04,Mo+.1,rr,Fr+.04,e),t.box(Mo,rr-.2,hn-.06,Mo+.12,rr-.06,Fr+.06,e),t.box(Mo+.02,rr,hn-.08,Mo+.14,rr+.07,Fr+.08,n),t.box(Vn,l0,hn,Vn+.04,rr-.06,Fr,e);for(let[l,v,h]of[[hn-r,hn,-1],[Fr,Fr+r,1]]){t.box(Vn,0,l,Mo+.08,rr,v,e);let u=h<0?l-.018:v;t.box(Vn+.18,.45,Math.min(u,u+.018),Mo-.12,2.35,Math.max(u,u+.018),n),t.box(Vn+.26,.55,Math.min(u,u+.03*h),Mo-.2,2.25,Math.max(u,u+.03*h),e)}{let l=Pn-.02,v=Pn+.02,h=Fo.x-Fo.w/2,u=Fo.x+Fo.w/2,p=Fo.y-Fo.h/2,d=Fo.y+Fo.h/2;t.box(Vn,l0,l,Mo,A0.y0,v,e),t.box(Vn,A0.y0,l,A0.x0,A0.y1,v,e),t.box(A0.x1,A0.y0,l,Mo,A0.y1,v,e),t.box(Vn,A0.y1,l,Mo,p,v,e),t.box(Vn,p,l,h,d,v,e),t.box(u,p,l,Mo,d,v,e),t.box(Vn,d,l,Mo,rr-.06,v,e);let m=.05,g=l-.025;t.box(h-m,p-m,g,u+m,p,l,n),t.box(h-m,d,g,u+m,d+m,l,n),t.box(h-m,p,g,h,d,l,n),t.box(u,p,g,u+m,d,l,n),t.box(h-m-.02,d+m,g-.015,u+m+.02,d+m+.03,l,e),t.box(A0.x0-.01,A0.y1,l-.006,A0.x1+.01,A0.y1+.008,l,Wn.BRASS)}{let l=Sr,v=Mo+.008,h=Mo+.052;t.box(v,l.y0,l.z0-.035,h,l.y1,l.z0,n),t.box(v,l.y0,l.z0,h,l.y0+.04,l.z1,n),t.box(v,l.y1-.04,l.z0,h,l.y1,l.z1,n),t.box(v+.008,l0,l.z0-.035,h-.008,l.y0,l.z1,e),t.box(h-.008,l0+.12,l.z0+.03,h,l.y0-.08,l.z1-.06,n),t.box(v-.004,l.y0-.012,l.z0-.045,h+.012,l.y0,l.z1,Wn.BRASS)}t.box(Vn,l0,z0-.02,Mo,rr-.06,z0+.02,e),t.box(Ge.x0,Ge.top-.035,Ge.z0,Ge.x1,Ge.top,Ge.z1,e),t.tube([[Ge.x0,Ge.top-.018,Ge.z0],[Ge.x1,Ge.top-.018,Ge.z0]],.02,e,8);for(let l of[Ge.x0+.1,Ge.x1-.1]){let v=[];for(let h=0;h<=8;h++){let u=h/8;v.push([l,Ge.top-.04-.22*u,Ge.z1-.02-.22*Math.cos(u*ls/2)])}t.tube(v,.018,n,6)}t.box(Vn+.06,.12,hn,Mo-.1,.44,hn+.42,n),t.box(Vn+.08,.44,hn+.01,Mo-.12,.52,hn+.41,Wn.CUSHION),t.box(Vn+.06,.12,Fr-.42,Mo-.1,.44,Fr,n),t.box(On[0]-.05,On[1]-.16,hn,On[0]+.05,On[1]-.02,hn+.012,Wn.BRASS),t.tube([[On[0],On[1]-.09,hn+.012],[On[0],On[1]-.09,On[2]-.01],[On[0],On[1]-.05,On[2]]],.006,Wn.BRASS,6),t.lathe(On[0],On[2],[[0,On[1]-.05],[.028,On[1]-.035],[.034,On[1]+.01],[.024,On[1]+.06],[.026,On[1]+.065]],Wn.LAMPGLASS,16),t.box(T0.x-.22,.12,T0.z-.24,T0.x+.22,T0.y-.05,T0.z+.16,n),t.box(T0.x-.24,T0.y-.05,T0.z-.26,T0.x+.24,T0.y,T0.z+.18,Wn.CUSHION),t.tube([[un[0],rr-.06,un[2]],[un[0],un[1]+.07,un[2]]],.005,Wn.BRASS,5),t.lathe(un[0],un[2],[[0,un[1]+.09],[.03,un[1]+.08],[.02,un[1]+.06]],Wn.BRASS,12),t.lathe(un[0],un[2],[[0,un[1]-.06],[.035,un[1]-.04],[.045,un[1]],[.035,un[1]+.05],[.018,un[1]+.07]],Wn.LAMPGLASS,16);let a=Mo,s=Mo+r;function i(l,v,h){let u=(l+v)/2,p=40,d=[];for(let g=0;g<=p;g++)d.push(l0+(rr-.2-l0)*g/p);let m=[];d.forEach(g=>m.push(g));for(let g=1;g<24;g++)m.push(ln.ys+(ln.apex-ln.ys)*g/24);m.sort((g,x)=>g-x);for(let g=0;g<m.length-1;g++){let x=m[g],b=m[g+1];if(b-x<1e-4)continue;let w=h?Uh(x,ln.ys,ln.a,ln.r):0,_=h?Uh(b,ln.ys,ln.a,ln.r):0,M=(A,$)=>[A,$];t.quad([s,x,u-w],[s,x,l],[s,b,l],[s,b,u-_],e,[M(u-w,x),M(l,x),M(l,b),M(u-_,b)]),t.quad([s,x,v],[s,x,u+w],[s,b,u+_],[s,b,v],e,[M(v,x),M(u+w,x),M(u+_,b),M(v,b)]),(w>0||_>0)&&(t.quad([a,x,u-w],[s,x,u-w],[s,b,u-_],[a,b,u-_],n),t.quad([s,x,u+w],[a,x,u+w],[a,b,u+_],[s,b,u+_],n),t.quad([a,x,l],[a,x,u-w],[a,b,u-_],[a,b,l],e),t.quad([a,x,u+w],[a,x,v],[a,b,v],[a,b,u+_],e))}if(t.box(a,rr-.2,l,s,rr-.06,v,e),t.box(s,rr-.42,l+.05,s+.012,rr-.24,v-.05,o),h){let g=[];for(let x=0;x<=30;x++){let b=x/30,w=b<.5?l0+(ln.apex-l0)*(b*2):ln.apex-(ln.apex-l0)*((b-.5)*2),_=b<.5?-1:1;g.push([s+.01,Math.min(w,ln.apex-.002),u+_*(Uh(w,ln.ys,ln.a,ln.r)+.03)])}t.tube(g,.022,n,6)}}i(hn,Pn,!0),i(z0,Fr,!0);{let l=Pn,v=z0,h=(l+v)/2;t.box(a,l0,l,s,rr-.06,v,e);let u={ys:1.85,a:.55,r:.8},p=[];for(let d=0;d<=40;d++){let m=d/40,g=u.ys+Math.sqrt(u.r*u.r-(u.r-u.a)*(u.r-u.a)),x=m<.5?.35+(g-.35)*(m*2):g-(g-.35)*((m-.5)*2),b=m<.5?-1:1;p.push([s+.012,Math.min(x,g-.002),h+b*Uh(x,u.ys,u.a,u.r)])}p.push(p[0]),t.tube(p,.02,n,6),t.box(s,.95,h-.22,s+.015,1.3,h+.22,o),t.box(s,.35,h-.42,s+.01,.75,h+.42,n),t.tube([[s+.03,1.12,v-.13],[s+.06,1.12,v-.13],[s+.06,1.12,v-.2]],.009,Wn.BRASS,6)}[hn-.02,Pn,z0,Fr+.02].forEach((l,v)=>{let h=v===1||v===2,u=.075,p=rr+(h?.62:.4);t.box(Mo+.06,0,l-u,Mo+.06+2*u,p,l+u,e),t.box(Mo+.04,p-.04,l-u-.02,Mo+.08+2*u,p,l+u+.02,n);let d=Mo+.06+u,m=h?.62:.5;t.spire(d,l,p,u*.95,p+m,e);for(let g=1;g<=3;g++){let x=p+m*g/4.2,b=u*.95*(1-g/4.2)+.02;for(let[w,_]of[[1,0],[-1,0],[0,1],[0,-1]])t.tube([[d+w*(b-.02),x-.02,l+_*(b-.02)],[d+w*(b+.015),x+.03,l+_*(b+.015)]],.008,n,4)}t.lathe(d,l,[[0,p+m-.02],[.03,p+m+.03],[.022,p+m+.07],[0,p+m+.1]],e,10)});let f=(l,v,h)=>{let u=(l+v)/2,p=Mo+.075,d=rr+.07,m=d+h,g=[1,0,0],x=t.v([p,d,l],g,o,[l,d]),b=t.v([p,d,v],g,o,[v,d]),w=t.v([p,m,u],g,o,[u,m]);t.idx.push(x,b,w);let _=t.v([p-.04,d,l],[-1,0,0],e),M=t.v([p-.04,d,v],[-1,0,0],e),A=t.v([p-.04,m,u],[-1,0,0],e);t.idx.push(_,A,M);let $=[],R=[];for(let C=0;C<=10;C++){let P=C/10;$.push([p+.02,d+h*P,l+(u-l)*P]),R.push([p+.02,d+h*P,v+(u-v)*P])}t.tube($,.022,n,6),t.tube(R,.022,n,6);for(let C=2;C<=8;C+=2)for(let P of[$[C],R[C]])t.tube([P,[P[0]+.01,P[1]+.06,P[2]+(P===$[C]?-.02:.02)]],.01,n,4);t.lathe(p,u,[[0,m],[.035,m+.06],[.022,m+.12],[0,m+.16]].map(([C,P])=>[C,P]),e,10);let W=Math.min(.17,h*.32),H=d+h*.38,D=[];for(let C=0;C<=24;C++){let P=C/24*ls*2;D.push([p+.012,H+Math.sin(P)*W,u+Math.cos(P)*W])}t.tube(D,.012,n,5)};f(hn-.02,Pn,.52),f(Pn,z0,.82),f(z0,Fr+.02,.52),t.lathe(dr.x,dr.z,[[0,Ge.top],[.036,Ge.top+.001],[dr.r,Ge.top+.012],[dr.r*1.02,Ge.top+.035],[.036,Ge.top+.052],[.02,Ge.top+.062],[.016,Ge.top+.068]],Wn.INKGLASS,24),t.lathe(dr.x,dr.z,[[.016,Ge.top+.064],[.021,Ge.top+.066],[.022,Ge.top+.075],[.016,Ge.top+.076],[0,Ge.top+.072]],Wn.BRASS,20);{let l=jh.a,v=jh.b,h=26,u=x=>{let b=Math.sin(x*ls)*.025;return[l[0]+(v[0]-l[0])*x+b*.6,l[1]+(v[1]-l[1])*x+b*.4,l[2]+(v[2]-l[2])*x+b]},p=[];for(let x=0;x<=h;x++)p.push(u(x/h));t.tube(p,x=>.0028*(1-.7*x)+6e-4,Wn.QUILL,5);let d=t.norm(t.sub(v,l)),m=t.norm(t.cross(d,[.2,1,.1])),g=t.cross(m,d);for(let x of[-1,1]){let b=t.pos.length/3;for(let w=0;w<=h;w++){let _=w/h,M=u(_),A=_<.28?0:(x>0?.03:.02)*Math.sin(ls*Math.pow((_-.28)/.72,.75)),$=A*.25,R=[M[0]+m[0]*x*A-g[0]*$,M[1]+m[1]*x*A-g[1]*$,M[2]+m[2]*x*A-g[2]*$];t.v(M,g,Wn.QUILL,[_,0]),t.v(R,g,Wn.QUILL,[_,x])}for(let w=0;w<h;w++){let _=b+w*2;t.idx.push(_,_+2,_+1,_+1,_+2,_+3)}}}return t.orient()}function JS(t,e){let n=Yo.top,r=Yo.x0;t(r-.35,0,Yo.z0-.35,r,n+.35,Yo.z1+.35),t(r,0,Yo.z0-.35,-.35,n,Yo.z0),t(r,0,Yo.z1,-.35,n,Yo.z1+.35),t(r,n,Yo.z0,-.35,n+.35,Yo.z1),t(.35,0,Yo.z0-.42,.35+.16,n,Yo.z0),t(.35,0,Yo.z1,.35+.16,n,Yo.z1+.42),t(.35,n,Yo.z0-.5,.35+.18,n+.42,Yo.z1+.5),t(.35,n+.42,Yo.z0-.6,.35+.26,n+.52,Yo.z1+.6),t(.35,0,Yo.z0-.5,.35+.22,.42,Yo.z0),t(.35,0,Yo.z1,.35+.22,.42,Yo.z1+.5),t(-.35-.01,0,Yo.z0,.35+.12,.02,Yo.z1),e(r,Yo.z0,-.35,Yo.z1)}h0.exports=t=>{let e=Ga(),o=c5.GLSL,n=ZS(),r=`
	precision highp float;
	${o}
	uniform float time;
	${e.lanternGLSL()}
	${ia.roomGLSL()}
	${l5()}
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
		}`,attributes:{position:n.pos,normal:n.nrm,kind:n.kind,uv:n.uv},elements:n.idx});function i(vt,st,it,qt){let se=[],ge=[],Ve=[],ye=[],ho=[],Jt=Mo-.02,be=ln.apex+.08,Ce=l0+.015;for(let ro=0;ro<=40;ro++){let wo=ro/40,Oe=be+(Ce-be)*wo;for(let we=0;we<=90;we++){let wt=we/90,ie=it?.2+.13*wo*wo:st-vt,Pe=vt+wt*ie,pe=it?.05+.02*wo:.035+.01*Math.sin(wt*7),Qt=wt*qt*ls*2+Math.sin(wo*2+wt*5)*.6,So=Jt-pe*(.5+.5*Math.sin(Qt))-(it?.02*wo:0),io=[1,0,-(-pe*.5*Math.cos(Qt)*qt*ls*2/ie)],Ze=Math.hypot(io[0],io[1],io[2]);se.push(So,Oe,Pe),ge.push(io[0]/Ze,0,io[2]/Ze),Ve.push(2),ye.push(Math.sin(Qt),wo)}}for(let ro=0;ro<40;ro++)for(let wo=0;wo<90;wo++){let Oe=ro*91+wo,we=Oe+90+1;ho.push(Oe,we,Oe+1,Oe+1,we,we+1)}for(let ro=0;ro<ho.length;ro+=3){let[wo,Oe,we]=[ho[ro],ho[ro+1],ho[ro+2]],wt=Qt=>[se[Qt*3],se[Qt*3+1],se[Qt*3+2]],ie=[0,1,2].map(Qt=>wt(Oe)[Qt]-wt(wo)[Qt]),Pe=[0,1,2].map(Qt=>wt(we)[Qt]-wt(wo)[Qt]);ie[1]*Pe[2]-ie[2]*Pe[1]<0&&(ho[ro+1]=we,ho[ro+2]=Oe)}return{pos:se,nrm:ge,kind:Ve,uv:ye,idx:ho}}let c=i(hn+.02,hn+.4,!0,6),f=i(z0+.04,Fr-.04,!1,9),l={pos:c.pos.concat(f.pos),nrm:c.nrm.concat(f.nrm),kind:c.kind.concat(f.kind),uv:c.uv.concat(f.uv),idx:c.idx.concat(f.idx.map(vt=>vt+c.pos.length/3))},v=t({vert:`
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
		}`,attributes:{position:l.pos,normal:l.nrm,uv:l.uv},elements:l.idx}),h=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec2 corner;
		varying vec3 v_pos, v_eye;
		void main() {
			vec3 p = vec3(${de(Fo.x)} + corner.x * ${de(Fo.w/2)}, ${de(Fo.y)} + corner.y * ${de(Fo.h/2)}, ${de(Fo.z)});
			v_pos = p; v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`${r}
		varying vec3 v_pos, v_eye;
		void main() {
			vec2 g = v_pos.xy - vec2(${de(Fo.x)}, ${de(Fo.y)});
			float hole = grilleHole(g);
			if (hole > 0.5) discard;
			vec3 N = vec3(0.0, 0.0, v_eye.z < ${de(Fo.z)} ? -1.0 : 1.0);
			vec3 V = normalize(v_eye - v_pos);
			vec3 spec;
			vec3 light = boothLight(v_pos + N * 0.01, N, V, 0.8, spec);
			// dark old bronze, its edges catching the lamp behind it
			vec3 base = vec3(0.16, 0.10, 0.05);
			vec3 col = base * light + spec * 0.6;
			float edge = smoothstep(0.25, 0.5, hole);
			col += vec3(1.0, 0.66, 0.34) * edge * mix(0.35, 0.22, night);
			gl_FragColor = vec4(col, 1.0);
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,cull:{enable:!1}}),u=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec2 corner;
		varying vec3 v_pos, v_eye;
		void main() {
			vec3 p = vec3(${de(Sr.x)}, ${de((Sr.y0+Sr.y1)/2)} + corner.y * ${de((Sr.y1-Sr.y0)/2-.04)}, ${de((Sr.z0+Sr.z1)/2)} + corner.x * ${de((Sr.z1-Sr.z0)/2)});
			v_pos = p; v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`${r}
		varying vec3 v_pos, v_eye;
		void main() {
			vec2 g = (v_pos.zy - vec2(${de((Sr.z0+Sr.z1)/2)}, ${de((Sr.y0+Sr.y1)/2)})) * ${de(Fo.cell/Sr.cell)};
			float hole = grilleHole(g);
			if (hole > 0.5) discard;
			vec3 N = vec3(v_eye.x < ${de(Sr.x)} ? -1.0 : 1.0, 0.0, 0.0);
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
			vec3 p = vec3(${de(Fo.x)} + corner.x * 0.75, ${de(Fo.y)} + corner.y * 0.9, ${de(z0-.03)});
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),d=14,m=[];for(let vt=0;vt<d;vt++)[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(st=>m.push(st[0],st[1],(vt+.5)/d));let g=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec3 c;
		varying vec3 v_pos;
		void main() {
			// slices across the booth, from the window back towards the bench
			vec3 p = vec3(${de(QS)} + c.x * ${de((Mo-Vn)/2-.02)}, 0.9 + (c.y + 1.0) * 0.8, ${de(Pn-.03)} - c.z * 1.25);
			v_pos = p;
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`
		precision highp float;
		uniform float night, time;
		${l5().split("// the candle's light is hidden")[0]}
		varying vec3 v_pos;
		void main() {
			float T = throughGrille(v_pos, 0.0);
			float d = length(v_pos - ${j0(un)});
			// dust drifting in the beam
			float dust = 0.65 + 0.35 * sin(v_pos.x * 23.0 + time * 0.3) * sin(v_pos.y * 17.0 - time * 0.21) * sin(v_pos.z * 19.0 + time * 0.17);
			vec3 col = vec3(1.0, 0.68, 0.36) * T * dust * 0.035 / (0.4 + d * d * 0.5) * mix(1.0, 0.7, night);
			gl_FragColor = vec4(col, 1.0);
		}`.replace("float grilleHole","float grilleHole"),attributes:{c:{buffer:t.buffer(m),size:3}},count:m.length/3,depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}}),x=(()=>{if(typeof document=="undefined")return null;let vt=document.createElement("canvas");vt.width=512,vt.height=652;let st=vt.getContext("2d");st.fillStyle="#cdb38a",st.fillRect(0,0,vt.width,vt.height);let it=7,qt=()=>(it=it*1664525+1013904223>>>0,it/4294967296);for(let ge=0;ge<2400;ge++){st.fillStyle=`rgba(${qt()<.5?"90,62,30":"245,230,200"},${.03+qt()*.05})`;let Ve=qt()*vt.width,ye=qt()*vt.height;st.fillRect(Ve,ye,1+qt()*14,1)}for(let ge=0;ge<26;ge++){let Ve=qt()*vt.width,ye=qt()*vt.height,ho=20+qt()*90,ko=st.createRadialGradient(Ve,ye,0,Ve,ye,ho);ko.addColorStop(0,`rgba(120,80,35,${.04+qt()*.06})`),ko.addColorStop(1,"rgba(120,80,35,0)"),st.fillStyle=ko,st.fillRect(Ve-ho,ye-ho,ho*2,ho*2)}let se=st.createRadialGradient(vt.width/2,vt.height/2,vt.width*.3,vt.width/2,vt.height/2,vt.height*.72);return se.addColorStop(0,"rgba(110,70,30,0)"),se.addColorStop(1,"rgba(110,70,30,0.38)"),st.fillStyle=se,st.fillRect(0,0,vt.width,vt.height),vt})(),b=x?t.texture({data:x,min:"linear",mag:"linear",flipY:!1}):t.texture(),w=t.texture({shape:[8,8],data:new Uint8Array(8*8*4)}),_=[18,24],M=[],A=[];for(let vt=0;vt<=_[1];vt++)for(let st=0;st<=_[0];st++)M.push(st/_[0],vt/_[1]);for(let vt=0;vt<_[1];vt++)for(let st=0;st<_[0];st++){let it=vt*(_[0]+1)+st,qt=it+_[0]+1;A.push(it,it+1,qt,it+1,qt+1,qt)}let $=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale, fold, slide;
		attribute vec2 st;
		varying vec3 v_pos, v_n, v_eye;
		varying vec2 v_st;
		void main() {
			// s across (texture left = +x), t from the near edge (0) to the far (1)
			float s = st.x, t = st.y;
			float x = ${de(f0.cx+f0.w/2)} - s * ${de(f0.w)};
			float zNear = ${de(f0.cz-f0.d/2)};
			vec3 p = vec3(x, ${de(f0.y)}, zNear + t * ${de(f0.d)});
			vec3 n = vec3(0.0, 1.0, 0.0);
			// a slight cockle
			p.y += 0.0012 * sin(s * 7.0 + t * 3.0) * sin(t * 5.0);
			// the near half folds up and over onto the far half
			if (t < 0.5) {
				float a = fold * 3.14159 * 0.985;
				float dd = (0.5 - t) * ${de(f0.d)};
				float zf = zNear + 0.5 * ${de(f0.d)};
				p.z = zf - dd * cos(a);
				p.y = ${de(f0.y)} + dd * sin(a) + 0.0016 * fold;
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
			if (v_pos.z > ${de(Pn+.015)}) discard;
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
		}`,attributes:{st:{buffer:t.buffer(M),size:2}},elements:A,uniforms:{fold:()=>cs.fold,slide:()=>cs.slide,paperTex:b,inkTex:w},cull:{enable:!1}}),R=u5();R.lathe(Jo.x,Jo.z,[[0,Ge.top],[.048,Ge.top+.002],[.052,Ge.top+.012],[.046,Ge.top+.014],[.022,Ge.top+.012],[0,Ge.top+.012]],Wn.BRASS,24),R.lathe(Jo.x,Jo.z,[[0,Ge.top+.012],[Jo.r,Ge.top+.012],[Jo.r*1.02,Ge.top+.012+Jo.h*.6],[Jo.r,Ge.top+.012+Jo.h],[Jo.r*.75,Ge.top+.012+Jo.h-.004],[0,Ge.top+.012+Jo.h-.008]],9,20),R.tube([[Jo.x,Ge.top+.012+Jo.h-.008,Jo.z],[Jo.x+.001,Ge.top+.012+Jo.h+.012,Jo.z]],.0012,8,4),R.orient();let W=t({vert:a,frag:`${r}
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
				float up = smoothstep(${de(Ge.top+Jo.h*.4)}, ${de(Ge.top+.012+Jo.h)}, v_pos.y);
				col += vec3(1.0, 0.55, 0.22) * up * 0.22 * candleFlicker();
			}
			gl_FragColor = vec4(col * night, 1.0);
		}`,attributes:{position:R.pos,normal:R.nrm,kind:R.kind,uv:R.uv},elements:R.idx}),H=t({vert:`
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
			vec3 p = ${j0(Jo.flame)} + right * corner.x * size.x + vec3(0.0, 1.0, 0.0) * corner.y * size.y;
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{halo:t.prop("halo")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),D=[0,0],C=t({uniforms:{view:t.prop("view")}}),P=new Float32Array(16);function nt(vt){KS.translate(P,vt.view,ia.OFF),C({view:P},()=>yt(vt))}function yt(vt){let st=vt&&vt.reflected;if(s(),v(),h(),u(),cs.ink&&cs.inkDirty){let it=cs.ink;D[0]!==it.width||D[1]!==it.height?(w({data:it,min:"linear",mag:"linear",flipY:!1}),D=[it.width,it.height]):w.subimage(it),cs.inkDirty=!1}cs.shown&&$(),c5.night>.01&&(W(),st||(H({halo:1}),H({halo:0}))),st||(p(),g())}return nt};h0.exports.addBay=JS;h0.exports.BAY=Yo;h0.exports.OFF=ia.OFF;h0.exports.STATE=cs;var f5=t=>[t[0]+ia.OFF[0],t[1]+ia.OFF[1],t[2]+ia.OFF[2]];h0.exports.SHOTS=Object.fromEntries(Object.entries(h5).map(([t,e])=>[t,Object.assign({},e,{eye:f5(e.eye),target:f5(e.target)})]));h0.exports.SEAT=T0;h0.exports.LAMP=un;h0.exports.SCONCE=On;h0.exports.GRILLE=Fo;h0.exports.PAPER=f0;h0.exports.ZONE={FRONT:Mo,BACK:Vn,ZA:hn,ZB:Pn,ZC:z0,ZD:Fr}});var Id=xt((lz,p5)=>{"use strict";function tE(t){let e=t>>>0||1;return function(){return e=e*1664525+1013904223>>>0,e/4294967296}}var d5={stroke:.05,letter:.045,word:.15,comma:.28,stop:.45,line:.25,para:.6},eE=["th","ng","er"];function oE(t,e,o){o=Object.assign({ink:"#2a1d12",xh:14,speed:23,lineHeight:2.85,seed:7,width:.12,pace:.45},o||{});let n=t.getContext("2d"),r={};Object.keys(d5).forEach(d=>{r[d]=d5[d]*o.pace});let a=[],s=0,i=0,c=0,f=[];function l(d,m){let g=tE(o.seed),x=o.xh,b={},w=P=>{let nt=e[P];if(!nt)return null;let yt=Math.floor(g()*nt.length);return nt.length>1&&yt===b[P]&&(yt=(yt+1)%nt.length),b[P]=yt,nt[yt]},_=P=>{if(e[P])return{g:w(P),sc:1};let nt=P.toLowerCase();return e[nt]?{g:w(nt),sc:/[A-Z]/.test(P)?1.32:1}:null},M=[],A=.15,$=0,R=0,W=(g()-.5)*.02,H=m/x,D=d.split(/\n\s*\n/);D.forEach((P,nt)=>{P.replace(/\s+/g," ").trim().split(" ").forEach(vt=>{let st=[];for(let ge=0;ge<vt.length;ge++){let Ve=vt.substr(ge,2).toLowerCase();if(eE.indexOf(Ve)>=0&&e[Ve]&&g()<.55&&vt[ge]===vt[ge].toLowerCase()){st.push({ch:Ve,gl:{g:w(Ve),sc:1}}),ge++;continue}let ye=_(vt[ge]);ye&&ye.g&&st.push({ch:vt[ge],gl:ye})}let it=st.map(()=>.17+g()*.07),qt=st.reduce((ge,Ve,ye)=>ge+Ve.gl.g.w*Ve.gl.sc+it[ye],0);$>0&&$+qt>H&&($=0,R++,A+=r.line,W=(g()-.5)*.02),st.forEach((ge,Ve)=>{let ye=ge.gl.g,ho=ge.gl.sc*(.95+g()*.1),ko=(g()-.5)*.06,Ko=(g()-.5)*.08+W*$,Jt=$,be=R*o.lineHeight+1.9+Ko,Ce=Math.cos(ko),ro=Math.sin(ko),wo=we=>[(Jt+(we[0]*Ce-we[1]*ro)*ho)*x,(be+(we[0]*ro+we[1]*Ce)*ho)*x],Oe=(we,wt)=>{let ie=0;for(let pe=1;pe<we.length;pe++)ie+=Math.hypot(we[pe][0]-we[pe-1][0],we[pe][1]-we[pe-1][1]);let Pe=Math.max(o.minDur||(wt?.06:.07),ie/(o.speed*x));M.push({pts:we,L:ie,start:A,dur:Pe,dot:wt}),A+=Pe};if(ye.s.forEach((we,wt)=>{wt>0&&(A+=r.stroke),Oe(we.map(wo),!1)}),ye.dot){let we=ye.s[0][0];ye.s.forEach(ie=>ie.forEach(Pe=>{Pe[1]<we[1]&&(we=Pe)}));let wt=wo([we[0]+.1,-1.36]);A+=r.stroke*1.4,Oe([wt,[wt[0]+x*.05,wt[1]+x*.03]],!0)}A+=r.letter*(.6+g()*.8),$+=ye.w*ho+it[Ve]});let se=vt[vt.length-1];A+=/[.!?]/.test(se)?r.stop:/[,;:]/.test(se)?r.comma:r.word,$+=.55+g()*.2}),nt<D.length-1&&($=0,R+=1.6,A+=r.para)});let C=(R+1)*o.lineHeight*x+x*1.55;return{strokes:M,total:A,height:C}}function v(d,m){if(o.fixed){let g=o.fixed;n.setTransform(1,0,0,1,g.mx,g.my),n.clearRect(-g.mx,-g.my,t.width,t.height)}else{let g=Math.min(window.devicePixelRatio||1,2);t.width=Math.round(d*g),t.height=Math.round(m*g),t.style.height=m+"px",t.style.width=d+"px",n.setTransform(g,0,0,g,0,0),n.clearRect(0,0,d,m)}n.strokeStyle=o.ink,n.fillStyle=o.ink,n.lineCap="round",n.lineJoin="round",o.shadow&&(n.shadowColor=o.shadow,n.shadowBlur=o.shadowBlur||6)}let h=d=>d<.5?2*d*d:1-Math.pow(-2*d+2,2)/2;function u(d,m){let g=f[d.i]||0;if(m<=g)return;let x=o.width*o.xh,b=0;for(let w=1;w<d.pts.length;w++){let _=d.pts[w-1],M=d.pts[w],A=Math.hypot(M[0]-_[0],M[1]-_[1]),$=b,R=b+A;if(b=R,R<=g||A===0)continue;if($>=m)break;let W=Math.max(0,(g-$)/A),H=Math.min(1,(m-$)/A),D=[_[0]+(M[0]-_[0])*W,_[1]+(M[1]-_[1])*W],C=[_[0]+(M[0]-_[0])*H,_[1]+(M[1]-_[1])*H],P=($+R)/2/(d.L||1),nt=.72+.28*Math.sin(Math.PI*Math.min(1,Math.max(0,P)));n.lineWidth=x*nt,n.globalAlpha=.86+.14*nt,n.beginPath(),n.moveTo(D[0],D[1]),n.lineTo(C[0],C[1]),n.stroke()}d.dot&&g===0&&(n.globalAlpha=1,n.beginPath(),n.arc(d.pts[0][0],d.pts[0][1],x*.75,0,Math.PI*2),n.fill()),f[d.i]=m}function p(d){let m=(d-c)/1e3;for(let g=0;g<a.length;g++){let x=a[g];if(x.start>m)break;let b=Math.min(1,(m-x.start)/x.dur);u(x,h(b)*x.L)}if(o.onPen){let g=0;for(;g+1<a.length&&a[g+1].start<=m;)g++;a[g]&&o.onPen(a[g].pts[0][1])}m<s?i=requestAnimationFrame(p):o.onDone&&o.onDone()}return{write(d,m){cancelAnimationFrame(i);let g=o.fixed?t.width-2*o.fixed.mx:t.parentElement.clientWidth,x=l(d,g);a=x.strokes,s=x.total;let b=typeof o.maxTime=="function"?o.maxTime(d):o.maxTime;if(b&&s>b){let _=b/s;a.forEach(M=>{M.start*=_,M.dur*=_}),s=b}a.forEach((_,M)=>{_.i=M}),f=[],v(g,x.height);let w=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(m||w){a.forEach(_=>u(_,_.L));return}return c=performance.now(),i=requestAnimationFrame(p),s},finish(){cancelAnimationFrame(i),a.forEach(d=>u(d,d.L)),o.onDone&&o.onDone()},stop(){cancelAnimationFrame(i)}}}p5.exports=oE});var Fd=xt((fz,v5)=>{"use strict";var $d=tr(),nE='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M5.5 18.5l1.7-1.7M16.8 7.2l1.7-1.7"/></svg>',rE='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M19.5 14.6A8 8 0 0 1 9.4 4.5a8 8 0 1 0 10.1 10.1z"/></svg>';v5.exports=function(e){let o=document.createElement("button");o.type="button",o.className=e+" light-toggle";let n=()=>{let r=$d.isNight;o.innerHTML=r?nE:rE,o.setAttribute("aria-label",r?"Switch to day":"Switch to night"),o.title=r?"Day":"Night",o.setAttribute("aria-pressed",r?"true":"false")};return n(),$d.onChange(n),["mousedown","pointerdown"].forEach(r=>o.addEventListener(r,a=>a.stopPropagation())),o.addEventListener("click",r=>{r.stopPropagation(),$d.toggle()}),o}});var y5=xt((hz,x5)=>{"use strict";var In=Wh(),aE=Ua(),sE=Id(),iE="81efb912-50a2-4fcd-b5e8-c3a28eecbe93",m5=100,Aa=t=>Math.max(0,Math.min(1,t)),Qr=(t,e,o)=>{let n=Aa((o-t)/(e-t));return n*n*(3-2*n)},W0=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,L0=(t,e,o)=>t+(e-t)*o,Wl=(t,e,o)=>[L0(t[0],e[0],o),L0(t[1],e[1],o),L0(t[2],e[2],o)];function Js(t,e){let o=t.length-1,n=Aa(e)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,s=t[Math.max(0,r-1)],i=t[r],c=t[r+1],f=t[Math.min(o,r+2)];return[0,1,2].map(l=>.5*(2*i[l]+(-s[l]+c[l])*a+(2*s[l]-5*i[l]+4*c[l]-f[l])*a*a+(-s[l]+3*i[l]-3*c[l]+f[l])*a*a*a))}var Vh=t=>({eye:t.eye.slice(),target:t.target.slice(),fov:t.fov,roll:0});function qd(t,e,o){return{eye:Wl(t.eye,e.eye,o),target:Wl(t.target,e.target,o),fov:L0(t.fov,e.fov,o),roll:L0(t.roll||0,e.roll||0,o)}}var Vl=aE.PLAY,V0=[Vl.stoolX,1,Vl.keyFront+.25],Xh=[Vl.stoolX,Vl.keyTop+.03,Vl.keyFront-.05],Gd=t=>{let e=(15+110*t)*Math.PI/180,o=2.1+.4*t;return[V0[0]+Math.cos(e)*o,1.15+.4*t,V0[2]+Math.sin(e)*o]},xc=[{eye:Gd(1),target:[V0[0],.92,V0[2]-.15],fov:46,aperture:.6},{eye:[-6.93,3.2,45.85],target:[-6.93,.77,45.3],fov:34,aperture:.6,to:Xh},{eye:[V0[0]+1,1.14,V0[2]+1.72],target:[Xh[0]+.05,.8,Xh[2]+.05],fov:40,aperture:1,to:Xh}],g5=(t,e)=>Math.hypot(t[0]-e[0],t[1]-e[1],t[2]-e[2]),Yh=t=>({fade:0,letterbox:.55,exposure:1.3,focus:g5(t.eye,t.to||V0),aperture:t.aperture,vignette:.42,shafts:0}),Dd={fade:0,letterbox:.55,exposure:2.1,focus:6.2,aperture:.55,vignette:.45,shafts:0},yc={fade:0,letterbox:.55,exposure:2,focus:.82,aperture:1.1,vignette:.48,shafts:0},jl={fade:0,letterbox:.55,exposure:1.8,focus:.42,aperture:1.3,vignette:.5,shafts:0},cE=`
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
`;x5.exports=function(e){let{root:o,avatar:n}=e,r=document.createElement("style");r.textContent=cE,document.head.appendChild(r);let a=document.createElement("div");a.className="conf-ui",a.innerHTML=`
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
		</div>`,o.appendChild(a);let s=a.querySelector(".conf-write"),i=a.querySelector("textarea"),c=a.querySelector('[data-act="send"]'),f=a.querySelector(".conf-hint"),l=a.querySelector(".conf-close"),v=a.querySelector(".conf-final"),h=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,u=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;i.addEventListener("input",()=>{let wt=i.value.match(new RegExp("^\\s*(\\S+\\s+){0,"+(m5-1)+"}\\S+"));(i.value.trim()?i.value.trim().split(/\s+/).length:0)>m5&&wt&&(i.value=wt[0]),c.disabled=!i.value.trim()}),["keydown","keyup","keypress"].forEach(wt=>i.addEventListener(wt,ie=>ie.stopPropagation())),a.addEventListener("pointerdown",wt=>wt.stopPropagation()),a.addEventListener("click",wt=>{let ie=wt.target.closest("button");ie&&(wt.stopPropagation(),ie.dataset.act==="send"&&nt(),ie.dataset.act==="leave"&&st())});let p=!1,d="",m=0,g=null,x=null,b="",w=null,_=0,M="",A=document.createElement("canvas");A.width=512,A.height=652;function $(wt){wt!==M&&(M=wt,s.classList.toggle("on",wt==="write"),f.classList.toggle("on",wt==="hint"),l.classList.toggle("on",p&&wt==="hint"&&(d==="room"||d==="peek")),v.classList.toggle("on",wt==="final"),wt==="write"&&setTimeout(()=>{if(d==="write")try{i.focus({preventScroll:!0})}catch(ie){}},900))}function R(wt){d=wt,m=0}function W(wt,ie){if(p)return;p=!0,g={eye:wt.eye.slice(),target:wt.target.slice(),fov:wt.fov,roll:wt.roll||0},x=Object.assign({},ie),b="",i.value="",c.disabled=!0,In.STATE.fold=0,In.STATE.slide=0,In.STATE.shown=!0,In.STATE.active=!0;let Pe=A.getContext("2d");Pe.setTransform(1,0,0,1,0,0),Pe.clearRect(0,0,A.width,A.height),In.STATE.ink=A,In.STATE.inkDirty=!0,document.body.classList.add("confessing");let pe=xc[0],Qt=u?.3:5.5,So=u?.3:3.6;H.i=0,H.u=0,H.T=Qt+So,H.moving=!0,H.rest=0,H.raw=!0,H.lookFrom=x,H.lookTo=Yh(pe);let S=[g.eye,[3.4,1.75,44.5],[.3,1.72,44.7],[-2.8,1.5,45.4],Gd(0)],io=[g.target,[-3,1.9,44.5],[-6.5,1.3,44.9],[V0[0],1,V0[2]-.1],pe.target];H.path=Ze=>{let Eo=Ze*(Qt+So);if(Eo<Qt){let Er=Eo/Qt,Yn=1-Math.cos(Er*Math.PI/2);return{eye:Js(S,Yn),target:Js(io,Qr(0,1,Yn*1.05)),fov:L0(g.fov,52,Qr(.4,1,Yn)),roll:(g.roll||0)*(1-Yn)}}let Oo=(Eo-Qt)/So,bn=1-Math.pow(1-Oo,2.4);return{eye:Gd(bn),target:pe.target,fov:L0(52,pe.fov,bn),roll:.05*Math.sin(Math.PI*bn)}},R("room"),$("")}let H={i:0,u:0,T:1,moving:!1,rest:0,raw:!1,path:null,lookFrom:null,lookTo:null},D=()=>h?"Scroll on":"Swipe up";function C(wt){let ie=se,Pe=xc[wt],pe={eye:ie.eye.slice(),target:ie.target.slice(),fov:ie.fov,roll:ie.roll||0},Qt=Wl(pe.eye,Pe.eye,.5),So=[Qt[0]-V0[0],0,Qt[2]-V0[2]],S=Math.hypot(So[0],So[2])||1,io=[Qt[0]+So[0]/S*.6,Qt[1]+.3,Qt[2]+So[2]/S*.6];H.path=Ze=>{let Eo=1-Ze;return{eye:[0,1,2].map(Oo=>Eo*Eo*pe.eye[Oo]+2*Eo*Ze*io[Oo]+Ze*Ze*Pe.eye[Oo]),target:Wl(pe.target,Pe.target,Qr(0,1,Ze)),fov:L0(pe.fov,Pe.fov,Ze),roll:pe.roll*Eo}},H.lookFrom=P||Yh(xc[H.i]),H.lookTo=Yh(Pe),H.i=wt,H.u=0,H.moving=!0,H.rest=0,H.raw=!1,H.T=u?.4:Math.max(2.8,Math.min(4.4,g5(pe.eye,Pe.eye)*1+1.6)),$("")}let P=null;function nt(){if(d!=="write"||(b=i.value.trim(),!b))return;i.blur(),$("");let wt=Math.max(10,Math.min(22,24-b.length/28));w=sE(A,e.glyphs(),{ink:"rgba(30,16,8,0.97)",xh:wt,width:.15,seed:11+b.length,speed:60,pace:.2,minDur:.03,maxTime:ie=>2.4+ie.length/160,fixed:{mx:46,my:40},onPen:()=>{In.STATE.inkDirty=!0},onDone:()=>{In.STATE.inkDirty=!0}}),R("down")}function yt(){try{let wt={access_key:iE,subject:"A note left in the confessional",from_name:"Your gallery",message:b,page:location.href,when:new Date().toString()};fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(wt),keepalive:!0}).catch(()=>{})}catch(wt){}}function vt(){d==="ready"&&(yt(),R("fold"),$(""))}function st(){!p||d==="leave"||($(""),i.blur(),it=se,qt=P,R("leave"))}let it=null,qt=null,se=null,ge=In.SHOTS.window,Ve=In.OFF,ye=wt=>[wt[0]+Ve[0],wt[1],wt[2]],ho=[[3.4,1.75,44.5],[.3,1.72,44.5],[-2.5,1.66,45],[-4.6,1.6,46.55],[-7,1.58,47.15],[-9.3,1.55,46.4],ye([1.25,1.5,43.25]),ye([-.55,1.36,42.92])],ko=[[-3,1.9,44.5],[-6.5,1.5,44.6],[-7,1,44.4],[-7.6,.95,44],[-10.5,1.5,44.6],ye([-1,1.55,43.6]),ye([-1.4,1.35,43.1]),ye([-1.5,1.33,43.3])];function Ko(wt){let ie=W0(Aa(wt)),Pe=[g.eye,...ho,ge.eye],pe=[g.target,...ko,ge.target];return{eye:Js(Pe,ie),target:Js(pe,Qr(0,1,ie*1.03)),fov:L0(g.fov,ge.fov,Qr(.6,.97,ie)),roll:(g.roll||0)*(1-ie)}}function Jt(wt,ie){if(u)return wt;let Pe=performance.now()/1e3,pe=.004*ie,Qt=Math.sin(Pe*.61)*.6+Math.sin(Pe*1.37+1.3)*.4,So=Math.sin(Pe*.47+2.1)*.6+Math.sin(Pe*1.13+.4)*.4;return{eye:[wt.eye[0]+Qt*pe,wt.eye[1]+So*pe*.7,wt.eye[2]],target:[wt.target[0]+So*pe*1.5,wt.target[1]+Qt*pe,wt.target[2]],fov:wt.fov,roll:wt.roll}}function be(wt,ie,Pe){let pe={};for(let Qt in ie)pe[Qt]=typeof ie[Qt]=="number"&&typeof wt[Qt]=="number"?L0(wt[Qt],ie[Qt],Pe):ie[Qt];return pe}function Ce(wt){wt*=window.__confSpeed||1,m+=wt;let ie=Vh(ge),Pe=Vh(In.SHOTS.paper),pe,Qt,So=Vh(In.SHOTS.peek);if(d==="room")H.moving?(H.u=Math.min(1,H.u+wt/H.T),pe=H.path(H.raw?H.u:W0(H.u)),Qt=be(H.lookFrom,H.lookTo,Qr(.1,.9,H.u)),H.raw&&(Qt.fade=(x.fade||0)*(1-Qr(0,.12,H.u))),H.u>=1&&(H.moving=!1,H.rest=0,f.textContent=D(),$("hint"))):(H.rest+=wt,pe=Jt(Vh(xc[H.i]),2.5),Qt=Yh(xc[H.i]));else if(d==="enter"){let io=Aa(m/(u?.6:9)),Ze=W0(io),Eo=[ro.eye,[-7.6,1.9,47.6],[-9.6,1.85,45.6],ye([.75,1.5,42.95]),ye([-.25,1.42,42.82]),ye([-.9,1.42,42.82]),So.eye];pe={eye:Js(Eo,Ze),target:Wl(ro.target,So.target,Qr(0,.35,Ze)),fov:L0(ro.fov,So.fov,Qr(.3,1,Ze)),roll:0},Qt=be(wo,Dd,Qr(.2,.9,io)),io>=1&&R("peek")}else if(d==="peek")pe=Jt(So,1.5),Qt=Dd,m>(u?.5:3.2)&&R("turn");else if(d==="turn"){let S=Aa(m/(u?.4:3.2));pe=qd(So,ie,W0(S)),Qt=be(Dd,yc,W0(S)),S>=1&&(R("write"),$("write"))}else if(d==="write")pe=Jt(ie,1),Qt=yc;else if(d==="down"){let S=Aa(m/(u?.4:2));pe=qd(ie,Pe,W0(S)),Qt=be(yc,jl,W0(S)),S>=1&&(_=w.write(b,u)||0,In.STATE.inkDirty=!0,R("writing"))}else if(d==="writing")pe=Jt(Pe,.6),Qt=jl,m>_+.8&&(R("ready"),f.textContent=h?"Scroll to fold it and pass it through":"Swipe up to fold it and pass it through",$("hint"));else if(d==="ready")pe=Jt(Pe,.6),Qt=jl;else if(d==="fold"){let S=Aa(m/(u?.3:1.5));In.STATE.fold=W0(S),pe=Jt(Pe,.6),Qt=jl,S>=1&&R("slide")}else if(d==="slide"){let io=Aa(m/(u?.6:3.4));In.STATE.slide=W0(Qr(0,.7,io));let Ze=W0(Qr(.35,1,io));pe=qd(Pe,ie,Ze),Qt=be(jl,yc,Ze),io>=1&&(In.STATE.shown=!1,R("final"),$("final"))}else if(d==="final")pe=Jt(ie,1),Qt=yc;else if(d==="leave"){let S=u?.6:it.eye[0]<Ve[0]-.3?12:7,io=Aa(m/S),Ze={eye:g.eye,target:g.target,fov:g.fov,roll:g.roll},Eo=W0(io),Oo=it.eye[0]<Ve[0]-.3,bn=Oo?[it.eye,ye([-.55,1.4,42.8]),ye([1.4,1.55,43.3]),[-9.3,1.58,46.4],[-7,1.6,47.15],[-4.6,1.62,46.55],[-2.2,1.68,44.8],[.6,1.72,44.5],Ze.eye]:[it.eye,[-3.4,1.7,46.2],[-1.2,1.7,44.8],[.6,1.72,44.5],Ze.eye],Er=Oo?[it.target,ye([1.5,1.45,43.4]),[-7,1.2,44.6],[-4,1.5,47],[-1.5,1.7,45.5],[1,1.8,44.5],[4,1.8,44.5],[7,1.9,44.2],Ze.target]:[it.target,[-1.5,1.7,45.2],[2,1.8,44.5],[6,1.9,44.3],Ze.target];if(pe={eye:Js(bn,Eo),target:Js(Er,Eo),fov:L0(it.fov,Ze.fov,Eo),roll:Ze.roll*Eo},Qt=be(qt||yc,x,Qr(.1,.7,io)),Qt.fade=(x.fade||0)*Qr(.82,1,io),io>=1){p=!1,In.STATE.active=!1,In.STATE.shown=!0,In.STATE.fold=0,In.STATE.slide=0;let Yn=A.getContext("2d");Yn.setTransform(1,0,0,1,0,0),Yn.clearRect(0,0,A.width,A.height),In.STATE.inkDirty=!0,document.body.classList.remove("confessing"),e.onExit&&e.onExit()}}return se=pe,P=Qt,{camera:pe,look:Qt}}let ro=null,wo=null;function Oe(){if(d==="room"){if(H.moving||H.rest<.4)return;H.i<xc.length-1?C(H.i+1):(ro=se,wo=P,$(""),R("enter"));return}if(d==="peek"){m>.4&&R("turn");return}d==="ready"?vt():d==="writing"&&w&&(w.finish(),m=Math.max(m,_))}function we(){d==="room"&&!H.moving&&H.rest>.4&&H.i>0&&C(H.i-1)}return{start:W,update:Ce,leave:st,get active(){return p},get stage(){return d},wheel(wt){wt>8?Oe():wt<-8&&we()},swipe(wt){wt>0?Oe():wt<0&&we()},tap(){Oe()},key(wt){return["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(wt)>=0?(Oe(),!0):["ArrowUp","ArrowLeft","PageUp"].indexOf(wt)>=0?(we(),!0):wt==="Escape"?(st(),!0):!1},_setNote(wt){i.value=wt,i.dispatchEvent(new Event("input"))}}}});var T5=xt((uz,A5)=>{"use strict";var bc=Yi(),Kh=dd(),Hd=$f(),lE=tl(),Bd=vd(),fE=y0(),Qh=!fE.isPhone&&!!(window.matchMedia&&window.matchMedia("(pointer: fine)").matches),{A:u0}=_0(),{C:pr,PAINTING_X:kc}=vr(),Jr=t=>Math.max(0,Math.min(1,t)),Ut=(t,e,o)=>t+(e-t)*o,jo=(t,e,o)=>[Ut(t[0],e[0],o),Ut(t[1],e[1],o),Ut(t[2],e[2],o)],so=(t,e)=>[t[0]+e[0],t[1]+e[1],t[2]+e[2]],Ud=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],qr=(t,e)=>[t[0]*e,t[1]*e,t[2]*e],Ft=(t,e,o)=>{let n=Jr((o-t)/(e-t));return n*n*(3-2*n)};function hE(t,e,o,n,r,a){if(r<=0)return[t,o];let s=2/n,i=s*r,c=1/(1+i+.48*i*i+.235*i*i*i),f=a*n,l=Math.max(-f,Math.min(f,t-e)),v=t-l,h=(o+s*l)*r,u=(o-s*h)*c,p=v+(l+h)*c;return e-t>0==p>e&&(p=e,u=0),[p,u]}var b5=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,uE=t=>t*t*t,jd=t=>1-Math.pow(1-t,3),yn=t=>-(Math.cos(Math.PI*t)-1)/2;function zn(t,e){let o=t.length-1,n=Jr(e)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,s=t[Math.max(0,r-1)],i=t[r],c=t[r+1],f=t[Math.min(o,r+2)],l=a*a,v=l*a;return[0,1,2].map(h=>.5*(2*i[h]+(-s[h]+c[h])*a+(2*s[h]-5*i[h]+4*c[h]-f[h])*l+(-s[h]+3*i[h]-3*c[h]+f[h])*v))}var eo=(t,e,o,n)=>({eye:t,target:e,fov:o,roll:n||0});function ri(t,e,o){return eo(jo(t.eye,e.eye,o),jo(t.target,e.target,o),Ut(t.fov,e.fov,o),Ut(t.roll,e.roll,o))}var Kd=()=>Ft(.75,1.3,window.innerWidth/window.innerHeight),Dr=(t,e)=>ri(t,e,Kd()),Zh=[7,3.95,pr.hallEnd-.05],dE=[pr.x1,2.9,pr.zc],_c=[16.75,4.55,6.75],Qd=[6.92,2.72,14.5],X0=[7.3,.015,47.1],pE=[_c,[16.2,4,7],[15.3,3.45,6.4],[14.1,3.2,5.7],[12.2,3.35,6.6],[10,3.75,9.6],[8.2,3.8,12.2],[7.3,3.4,13.8],Qd],vE=[Qd,[7.3,4.6,19.5],[7.6,4.9,23.5],[6.6,4.3,28.5],[7.5,3.2,34],[6.8,2.1,39.5],[7.4,1,44.2],[7.2,.3,46.4],X0],ei=[kc[0],3,pr.z0],oi=[kc[1],3,pr.z0],Vd=47.45,E5=4.6,mE=13.2,gE=1.57,Xl=[7.55,1.25,46.75],Zd=[17.25,2.42,46],Jd=[26.05,1.95,46],Yl=[36.15,.015,44],o1=()=>Ut(6.8,6.15,Kd()),xE=[Xl,[9.6,1.65,46.2],[12.3,2.05,45.1],[14.6,2.35,44.5],[16.2,2.3,44.7],Zd],yE=[Zd,[20.2,2.05,45.6],[23.2,1.8,45],Jd],ni=[kc[2],3,pr.z0],Xd=[34.8,1.35,46],hs=[7.89,.03,19.03],w5=.36,_5=13.64,yr=[{side:"left",z:34.5},{side:"left",z:23.5},{side:"left",z:14.6},{side:"right",z:14.6},{side:"right",z:23.5},{side:"right",z:34.5}];function N0(t){let e=t.side==="left"?1:-1;return jo([7-e*1,3,t.z+e*.2],[7-e*.6,3.25,t.z+e*.13],Kd())}function bE(t){return t.side==="left"?Dr(eo([8.6,3.9,t.z],[w5,1.45,t.z],76),eo([8,3.6,t.z+.7],[w5,3.95,t.z-2],46,-.008)):Dr(eo([5.4,3.9,t.z],[_5,1.45,t.z],76),eo([6,3.6,t.z-.7],[_5,3.95,t.z+2],46,-.008))}var wE=()=>[Yl,[35.6,.5,44.6],[33.2,1.5,45.6],[29,2.3,46.1],[23.5,2.7,45.9],[18.5,2.9,45.4],[14.8,3.1,44.3],[11,3.3,41.8],[7.4,3.4,38.8],[5.4,3.3,36.6],N0(yr[0])],_E=()=>[N0(yr[2]),[3,3.2,13.2],[1.7,3,12],[2.6,3.2,10],[5,3.6,8.9],[7,3.8,8.6],[9,3.6,8.9],[11.4,3.2,10],[12.3,3,12],[11,3.1,13.4],N0(yr[3])],ME=()=>[N0(yr[5]),[9,3.4,31],[7.8,2.8,27.5],[6.8,1.9,24.5],[7.4,1,21],[7.75,.35,19.6],hs],M5={2:{pos:()=>Qd,amp:[.18,.07,.12],tumble:.5},7:{pos:()=>Xl,amp:[.12,.09,.1],tumble:.55},8:{pos:()=>Zd,amp:[.1,.08,.08],tumble:.5},9:{pos:()=>Jd,amp:[.09,.06,.07],tumble:.45},10:{pos:()=>Xd,amp:[.07,.04,.06],tumble:.35},12:{pos:()=>N0(yr[0]),amp:[.12,.08,.1],tumble:.5},13:{pos:()=>N0(yr[1]),amp:[.12,.08,.1],tumble:.5},14:{pos:()=>N0(yr[2]),amp:[.12,.08,.1],tumble:.5},15:{pos:()=>N0(yr[3]),amp:[.12,.08,.1],tumble:.5},16:{pos:()=>N0(yr[4]),amp:[.12,.08,.1],tumble:.5},17:{pos:()=>N0(yr[5]),amp:[.12,.08,.1],tumble:.5}},fs=[{name:"corridor",ui:"intro",look:{letterbox:1,exposure:1,focus:14,aperture:.25,vignette:.1},cam(t){let e=.9*(1-Math.exp(-t/14)),o=[0,Math.sin(t*.37)*.025,Math.sin(t*.23)*.06],n=Dr(eo([pr.x0+.9,1.85,pr.zc+.25],[pr.x1,2.85,pr.zc-.1],64),eo([pr.x0+1.2,2,pr.zc+.35],[pr.x1,2.6,pr.zc-.15],50));return n.eye=so(so(n.eye,[e,0,0]),o),n}},{name:"about",ui:"about",look:{letterbox:.55,exposure:1.32,focus:2.9,aperture:.9,vignette:.12,shafts:.65},cam(t){let e=[Math.sin(t*.21)*.08,Math.sin(t*.33)*.03,-.25*(1-Math.exp(-t/12))],o=Dr(eo([16.6,1.9,9.2],[17.3,.4,5.6],64),eo([15,1.35,7.75],[17.55,1.05,5.5],44,-.02));return o.eye=so(o.eye,e),o}},{name:"sky",ui:"sky",look:{letterbox:.55,exposure:1,focus:2.1,aperture:.45,vignette:.1,shafts:1},cam(t){let e=[Math.sin(t*.12)*.35,Math.sin(t*.2)*.04,(1-Math.cos(t*.12))*.25],o=Dr(eo([7,1.35,13],[7.2,7.6,20.4],74,.05),eo([6.6,1.5,12.6],[7.3,7.2,20.8],56,.07));return o.eye=so(o.eye,e),o}},{name:"master",ui:"master",look:{letterbox:.55,exposure:1.12,focus:8,aperture:.6,vignette:.3,shafts:.5},cam(t){let e=[Math.sin(t*.17)*.05,Math.sin(t*.29)*.02,-.35*(1-Math.exp(-t/16))],o=Dr(eo([7,3.6,43.7],[7,3.85,Zh[2]],74),eo([7,3.6,41.3],[7,3.95,Zh[2]],46));return o.eye=so(o.eye,e),o}},{name:"story",ui:"story",look:{letterbox:.55,exposure:1,focus:8.1,aperture:.9,vignette:.4,shafts:.4},cam(t){let e=[Math.sin(t*.15)*.04,Math.sin(t*.25)*.015,0],o=Dr(eo([7,3.9,40.3],[7,1.35,Zh[2]],76),eo([6.3,3.6,41.2],[3.7,3.95,Zh[2]],46,-.008));return o.eye=so(o.eye,e),o}},{name:"leaf",ui:"leaf",look:{letterbox:.55,exposure:1.15,focus:1.25,aperture:1.3,vignette:.35,shafts:.4},cam(t){let e=[Math.sin(t*.2)*.02,Math.sin(t*.3)*.006,0],o=Dr(eo([7.15,.15,46],[7.3,.04,X0[2]],50),eo([7.05,.14,45.9],[7.25,.05,X0[2]],32));return o.eye=so(o.eye,e),o}},{name:"steps",ui:"steps",look:{letterbox:.9,exposure:1.2,focus:1.6,aperture:1.4,vignette:.4,shafts:.4},cam(t){let e=[Math.sin(t*.2)*.015,0,0],o=Dr(eo([7.15,.1,46.3],[7.05,.1,Vd],50),eo([7.1,.12,45.85],[7,.2,Vd],30));return o.eye=so(o.eye,e),o}},{name:"float",ui:"float",look:{letterbox:.55,exposure:1.1,focus:2.2,aperture:.8,vignette:.3,shafts:.6},cam(t){let e=[Math.sin(t*.17)*.05,Math.sin(t*.27)*.02,0],o=Dr(eo([7.3,.85,45.65],[7.6,1.38,47.1],64),eo([7.25,.82,45.8],[7.65,1.35,47.1],44));return o.eye=so(o.eye,e),o}},{name:"painting1",ui:"p1",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(t){let e=[Math.sin(t*.15)*.04,Math.sin(t*.25)*.015,0],o=Dr(eo([ei[0],2.3,46.85],[ei[0],1.25,ei[2]],74),eo([ei[0]-.6,2.55,46.85],[ei[0]+1.9,2.9,ei[2]],46,.008));return o.eye=so(o.eye,e),o}},{name:"painting2",ui:"p2",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(t){let e=[Math.sin(t*.15)*.04,Math.sin(t*.25)*.015,0],o=Dr(eo([oi[0],1.95,46.85],[oi[0],1,oi[2]],74),eo([oi[0]-.6,2.1,46.85],[oi[0]+1.9,2.75,oi[2]],46,.008));return o.eye=so(o.eye,e),o}},{name:"painting3",ui:"p3",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.9},cam(t){let e=[Math.sin(t*.15)*.04,Math.sin(t*.25)*.015,0],o=Dr(eo([ni[0],1.4,46.85],[ni[0],.6,ni[2]],74),eo([ni[0]-.6,1.45,46.85],[ni[0]+1.9,2,ni[2]],46,.008));return o.eye=so(o.eye,e),o}},{name:"door",ui:"door",look:{letterbox:.8,exposure:1.05,focus:1.45,aperture:1.1,vignette:.35,shafts:1},cam(t){let e=[Math.sin(t*.2)*.02,Math.sin(t*.3)*.006,0],o=Dr(eo([34.75,.5,44.15],[pr.x1,.8,43.95],66),eo([34.75,.45,44.3],[pr.x1,.35,43.95],50));return o.eye=so(o.eye,e),o}},...yr.map((t,e)=>({name:"hall"+e,ui:"h"+e,look:{letterbox:.55,exposure:1,focus:7.6,aperture:.7,vignette:.35,shafts:.7},cam(o){let n=[Math.sin(o*.15)*.04,Math.sin(o*.25)*.015,Math.sin(o*.11)*.04],r=bE(t);return r.eye=so(r.eye,n),r}})),{name:"rest",ui:"end",look:{letterbox:.55,exposure:1.05,focus:2.4,aperture:.5,vignette:.4,shafts:1.15},cam(t){let e=t*.025,o=Dr(eo([7.75,2.6,18.6],[7.89,0,19.08],60),eo([7.75,2.3,18.45],[7.89,0,19.08],46)),n=o.eye[0]-hs[0],r=o.eye[2]-hs[2];return o.eye=[hs[0]+n*Math.cos(e)-r*Math.sin(e),o.eye[1],hs[2]+n*Math.sin(e)+r*Math.cos(e)],o}}],kE=[1,.96,.88];function k5(t,e){return{dur:e,cam(o,n,r){let a=yn(o),s=ri(n,r,a),i=yr[t].side==="left"?1:-1;return s.eye=so(s.eye,[i*.6*Math.sin(Math.PI*a),.15*Math.sin(Math.PI*a),0]),s},look(o,n,r){let a={};for(let s in r)typeof r[s]=="number"&&(a[s]=Ut(n[s],r[s],o));return a.aperture=Ut(n.aperture,r.aperture,o)*(1-.5*Math.sin(Math.PI*o)),a},leaf(o){let n=yn(o),r=N0(yr[t]),a=N0(yr[t+1]),s=yr[t].side==="left"?1:-1,i=so(jo(r,a,.5),[s*1.2,.5,0]),c=zn([r,jo(r,i,.6),i,jo(a,i,.6),a],n);return{phase:"fly",pos:so(c,[0,Math.sin(o*Math.PI*5)*.07*Math.sin(Math.PI*o),0]),tumble:.5+.35*Math.sin(Math.PI*o)}}}}var Wd=[{dur:6.2,cam(t,e,o){if(t<.5){let i=uE(t/.5),c=jo(e.eye,[pr.x1-3.2,2.6,pr.zc],i),f=jo(e.target,dE,Ft(0,.6,t/.5));return eo(c,f,Ut(e.fov,e.fov-8,i),Ut(e.roll,.04,i))}let n=jd((t-.5)/.5),r=[[u0.cx+.4,10.4,u0.zc+.6],[u0.cx-.6,7.6,u0.zc+1.3],[u0.cx-1.9,4.6,u0.zc+1.75],o.eye],a=[[u0.cx-.1,0,u0.zc-.2],[u0.cx-1,.4,u0.zc-.1],[u0.cx-1.1,.8,u0.zc-.2],o.target];return eo(zn(r,n),zn(a,n),Ut(o.fov+14,o.fov,n),Ut(-.25,o.roll,n))},look(t,e,o){let n=Ft(.22,.5,t),r=1-Ft(.5,.74,t);return{fade:t<.5?n:r,fadeColor:kE,exposure:Ut(e.exposure,o.exposure,Ft(.5,.9,t))*(1+2.2*(t<.5?Ft(.15,.5,t):1-Ft(.5,.8,t))),letterbox:Ut(e.letterbox,o.letterbox,Ft(.3,.7,t)),aperture:t<.5?e.aperture*(1-t*2):o.aperture*Ft(.6,1,t),focus:Ut(4,o.focus,Ft(.5,1,t)),shafts:Ut(e.shafts,o.shafts,Ft(.4,.6,t)),vignette:Ut(e.vignette,o.vignette,t)}},leaf(){return{phase:"home"}}},{dur:9,cam(t,e,o,n){let r=[e.eye,[15.6,2.4,8.3],[15.4,2.7,7.1],[12.6,2.6,5.4],[9.6,2,7.4],[7.6,1.6,10.6],o.eye],a=zn(r,yn(t)),s=Ft(0,.12,t)*(1-Ft(.82,1,t)),i=jo(jo(e.target,o.target,Ft(.55,1,t)),n.pos,s),c=Ut(e.fov,o.fov,Ft(.3,1,t))-6*Math.sin(Math.PI*t),f=Ut(e.roll,o.roll,t)+.05*Math.sin(Math.PI*2*t);return eo(a,i,c,f)},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{exposure:Ut(e.exposure,o.exposure,Ft(.25,.75,t)),letterbox:Ut(e.letterbox,o.letterbox,t),focus:Ut(a,o.focus,Ft(.8,1,t)),aperture:Ut(.7,o.aperture,Ft(.8,1,t)),shafts:Ut(e.shafts,o.shafts,Ft(.3,.8,t)),vignette:Ut(e.vignette,o.vignette,t)}},leaf(t){let e=b5(t),o=Math.sin(t*Math.PI*7)*.14*Math.sin(Math.PI*t);return{phase:"fly",pos:so(zn(pE,e),[0,Math.sin(t*Math.PI*9)*.05*Math.sin(Math.PI*t),o]),tumble:1-.5*Ft(.8,1,t)}}},{dur:11.5,cam(t,e,o,n){let r=zn([e.eye,[7,1.9,19],[7.1,1.6,27.5],[6.9,1.1,36],[7,.7,42.5],[7.05,.5,45.7]],Ft(0,.8,t)*.6+yn(Jr(t/.8))*.4),a=zn([[7.05,.5,45.7],[7,1.2,45.3],[7,2.6,43.8],o.eye],yn(Ft(.8,1,t))),s=t<.8?r:a,i=jo(jo(e.target,n.pos,Ft(.03,.22,t)),o.target,Ft(.82,1,t)),c=Ut(e.fov,o.fov,Ft(.15,.7,t))-6*Ft(.6,.8,t)*(1-Ft(.85,1,t)),f=Ut(e.roll,o.roll,Ft(0,.6,t))-.04*Math.sin(Math.PI*t);return eo(s,i,c,f)},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{exposure:Ut(e.exposure,o.exposure,Ft(.5,1,t)),letterbox:Ut(e.letterbox,o.letterbox,t),focus:Ut(a,o.focus,Ft(.84,1,t)),aperture:Ut(1.1,o.aperture,Ft(.84,1,t)),shafts:Ut(e.shafts,o.shafts,Ft(.2,.9,t)),vignette:Ut(e.vignette,o.vignette,Ft(.5,1,t))}},leaf(t){let e=Ut(b5(t),t,.35),o=zn(vE,Ft(0,.78,e)),n=Math.sin(t*Math.PI*8)*.35*(1-Ft(.55,.76,t)),r=Ft(.7,.8,t);return{phase:"fly",pos:so(o,[n,Math.abs(Math.cos(t*Math.PI*8))*.12*(1-r),0]),tumble:1-r,swing:n}}},{dur:2.6,cam(t,e,o){let n=yn(t),r=ri(e,o,n);return r.eye=so(r.eye,[0,0,-.35*Math.sin(Math.PI*n)]),r},look(t,e,o){let n=yn(t),r={};for(let a in o)typeof o[a]=="number"&&(r[a]=Ut(e[a],o[a],n));return r},leaf(){return{phase:"floor"}}},{dur:4.5,cam(t,e,o){let n=yn(t),r=zn([e.eye,[6.9,1.7,43.9],[7.05,.45,45.4],o.eye],n),a=jo(e.target,o.target,Ft(.1,.85,t));return eo(r,a,Ut(e.fov,o.fov,Ft(.2,1,t)),Ut(e.roll,o.roll,n))},look(t,e,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=Ut(e[r],o[r],Ft(.2,1,t)));return n},leaf(){return{phase:"floor"}}},{dur:5.5,cam(t,e,o){return ri(e,o,yn(t))},look(t,e,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=Ut(e[r],o[r],yn(t)));return n},leaf(){return{phase:"floor"}},walker(t){return Ut(E5,o1(),t)}},{dur:11,kick:t=>Jr((t-wc())/(1-wc())),cam(t,e,o,n){let r=wc(),a=Ft(0,r,t)*(1-Ft(r+.12,r+.35,t)),s=S5(Math.min(t,Mc)),i=so(e.target,[(s-e.target[0])*.15*a,0,0]),c=Ft(r+.12,1,t),f=zn([e.eye,e.eye,so(e.eye,[0,.12,-.3]),o.eye],c);return i=jo(i,n.pos,Ft(r+.06,r+.24,t)*(1-Ft(.9,1,t))),i=jo(i,o.target,Ft(.88,1,t)),eo(f,i,Ut(e.fov,o.fov,c),Ut(e.roll,o.roll,c))},look(t,e,o,n,r){let a=wc(),s=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]),i=Ft(0,.12,t)*(1-Ft(a+.25,a+.5,t));return{letterbox:Ut(Ut(e.letterbox,o.letterbox,Ft(a,1,t)),1.75,i),exposure:Ut(e.exposure,o.exposure,Ft(a,1,t)),focus:t<a?e.focus:Ut(e.focus,s,Ft(a,a+.2,t)),aperture:Ut(e.aperture,o.aperture,Ft(a,1,t)),vignette:Ut(e.vignette,o.vignette,t),shafts:Ut(e.shafts,o.shafts,t)}},leaf(t){let e=Jr((t-wc())/(1-wc()));if(e<=0)return{phase:"floor"};let o=Ft(0,.85,e)*.85+jd(Ft(0,.15,e))*.15;return{phase:"fly",pos:so(X0,[(Xl[0]-X0[0])*o+Math.sin(e*9)*.08*(1-e),(Xl[1]-X0[1])*o,(Xl[2]-X0[2])*o+Math.sin(e*7)*.06*(1-e)]),tumble:1.3-.75*e}},walker(t){return t<.985?S5(t):null}},{dur:9,cam(t,e,o,n){let r=yn(t),a=zn([e.eye,[9.4,1.35,45.6],[12.4,2,45.9],[15,2.45,46.5],o.eye],r),s=1-Ft(.6,.92,t),i=jo(jo(e.target,n.pos,Ft(0,.15,t)),o.target,1-s),c=Ut(e.fov,o.fov,Ft(.3,1,t)),f=Ut(e.roll,o.roll,r)+.04*Math.sin(Math.PI*t);return eo(a,i,c,f)},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:Ut(e.letterbox,o.letterbox,t),exposure:Ut(e.exposure,o.exposure,Ft(.3,.8,t)),focus:Ut(a,o.focus,Ft(.6,.95,t)),aperture:Ut(e.aperture,o.aperture,Ft(.6,1,t)),vignette:Ut(e.vignette,o.vignette,t),shafts:Ut(e.shafts,o.shafts,Ft(.3,.8,t))}},leaf(t){let e=yn(t);return{phase:"fly",pos:so(zn(xE,e),[0,Math.sin(t*Math.PI*5)*.08*Math.sin(Math.PI*t),Math.sin(t*Math.PI*4)*.12*Math.sin(Math.PI*t)]),tumble:.55+.4*Math.sin(Math.PI*t)}}},{dur:6.5,cam(t,e,o){let n=yn(t),r=ri(e,o,n);return r.eye=so(r.eye,[0,.12*Math.sin(Math.PI*n),.1*Math.sin(Math.PI*n)]),r},look(t,e,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=Ut(e[r],o[r],t));return n.aperture=Ut(e.aperture,o.aperture,t)*(1-.5*Math.sin(Math.PI*t)),n},leaf(t){let e=yn(t);return{phase:"fly",pos:so(zn(yE,e),[0,Math.sin(t*Math.PI*4)*.07*Math.sin(Math.PI*t),0]),tumble:.5+.3*Math.sin(Math.PI*t)}}},{dur:6.5,cam(t,e,o){let n=yn(t),r=ri(e,o,n);return r.eye=so(r.eye,[0,.1*Math.sin(Math.PI*n),.1*Math.sin(Math.PI*n)]),r},look(t,e,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=Ut(e[r],o[r],t));return n.aperture=Ut(e.aperture,o.aperture,t)*(1-.5*Math.sin(Math.PI*t)),n},leaf(t){let e=yn(t);return{phase:"fly",pos:so(zn([Jd,[29.2,1.75,45.5],[32.2,1.5,45.4],Xd],e),[0,Math.sin(t*Math.PI*4)*.06*Math.sin(Math.PI*t),0]),tumble:.45+.25*Math.sin(Math.PI*t)}}},{dur:6,cam(t,e,o,n){let r=yn(t),a=zn([e.eye,[34.2,1.15,45.6],[34.5,.7,44.8],o.eye],r),s=Ft(.05,.3,t)*(1-Ft(.8,1,t)),i=jo(jo(e.target,o.target,Ft(.6,1,t)),n.pos,s);return eo(a,i,Ut(e.fov,o.fov,Ft(.2,1,t)),Ut(e.roll,o.roll,r))},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:Ut(e.letterbox,o.letterbox,t),exposure:Ut(e.exposure,o.exposure,t),focus:Ut(a,o.focus,Ft(.8,1,t)),aperture:Ut(.9,o.aperture,Ft(.8,1,t)),vignette:Ut(e.vignette,o.vignette,t),shafts:Ut(e.shafts,o.shafts,t)}},leaf(t){let e=zn([Xd,[35.3,.9,45.2],[35.75,.4,44.4],[36,.08,44.05],Yl],Ft(0,.85,t)),o=Math.sin(t*Math.PI*6)*.25*(1-Ft(.35,.82,t)),n=Ft(.78,.88,t);return{phase:"fly",pos:so(e,[0,Math.abs(Math.cos(t*Math.PI*6))*.07*(1-n),o]),tumble:.7*(1-n),swing:o}}},{dur:12,door(t){let e=Jr((t-.02)/.09);return jd(e)+.07*Math.sin(Jr((t-.08)/.18)*Math.PI)*(1-Jr((t-.08)/.3))},cam(t,e,o,n){let r=Math.sin(t*340)*.012*Ft(.02,.05,t)*(1-Ft(.08,.16,t)),a=Ft(.06,1,t),s=zn([e.eye,[34.3,1,43.6],[31.5,1.9,43.4],[26.5,2.4,43.6],[21,2.6,43.6],[16.5,2.8,43.2],[12.6,3.1,41.2],[9.6,3.4,38],o.eye],a*.55+yn(a)*.45),i=so(n.pos,[1,-.2,-1.45]);s=jo(s,i,Ft(.1,.22,t)*(1-Ft(.52,.72,t)));let c=Ft(.06,.16,t)*(1-Ft(.86,1,t)),f=jo(e.target,n.pos,c);f=jo(f,o.target,Ft(.86,1,t));let l=Ut(e.fov,o.fov,Ft(.1,1,t))+6*Math.sin(Math.PI*Ft(.08,.9,t)),v=Ut(e.roll,o.roll,t)+.06*Math.sin(Math.PI*2*Ft(.1,.9,t))+r;return eo(so(s,[0,r,0]),f,l,v)},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]),s=Ft(.02,.06,t)*(1-Ft(.08,.3,t));return{letterbox:Ut(e.letterbox,o.letterbox,Ft(.1,.4,t)),exposure:Ut(e.exposure,o.exposure,t)*(1+.8*s),focus:Ut(a,o.focus,Ft(.86,1,t)),aperture:Ut(.8,o.aperture,Ft(.86,1,t)),vignette:Ut(e.vignette,o.vignette,t),shafts:Ut(e.shafts,o.shafts,t)+s}},leaf(t){let e=Jr((t-.05)/.95);if(e<=0)return{phase:"floor"};let o=zn(wE(),e*.6+yn(e)*.4),n=Math.sin(t*Math.PI*9)*.12*Math.sin(Math.PI*e);return{phase:"fly",pos:so(o,[0,n*.6,n]),tumble:1.4-.8*e}}},...[0,1].map(t=>k5(t,7.5)),{dur:10,cam(t,e,o,n){let r=yn(t),a=zn([e.eye,[7.6,3.2,16.2],[7,2.9,17.2],[6.5,3.2,16],o.eye],r),s=Ft(0,.15,t)*(1-Ft(.85,1,t)),i=jo(jo(e.target,o.target,Ft(.5,1,t)),n.pos,s);return eo(a,i,Ut(e.fov,o.fov,r)+4*Math.sin(Math.PI*r),Ut(e.roll,o.roll,r))},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:Ut(e.letterbox,o.letterbox,t),exposure:Ut(e.exposure,o.exposure,t),focus:Ut(a,o.focus,Ft(.85,1,t)),aperture:Ut(.6,o.aperture,Ft(.85,1,t)),vignette:Ut(e.vignette,o.vignette,t),shafts:Ut(e.shafts,o.shafts,t)}},leaf(t){let e=yn(t),o=zn(_E(),e);return{phase:"fly",pos:so(o,[0,Math.sin(t*Math.PI*6)*.06*Math.sin(Math.PI*t),0]),tumble:.6+.4*Math.sin(Math.PI*t)}}},...[3,4].map(t=>k5(t,7.5)),{dur:10,cam(t,e,o,n){let r=yn(t),a=zn([e.eye,[7.6,4,30.5],[7.3,4.4,25.5],[7.1,4,21.8],o.eye],r),s=Ft(0,.2,t)*(1-Ft(.9,1,t)),i=jo(jo(e.target,o.target,Ft(.5,1,t)),n.pos,s);return eo(a,i,Ut(e.fov,o.fov,r),Ut(e.roll,o.roll,r))},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:Ut(e.letterbox,o.letterbox,t),exposure:Ut(e.exposure,o.exposure,t),focus:Ut(a,o.focus,Ft(.85,1,t)),aperture:Ut(.7,o.aperture,Ft(.85,1,t)),vignette:Ut(e.vignette,o.vignette,t),shafts:Ut(e.shafts,o.shafts,t)}},leaf(t){let e=zn(ME(),Ft(0,.86,t)),o=Math.sin(t*Math.PI*7)*.3*(1-Ft(.4,.84,t)),n=Ft(.8,.9,t);return{phase:"fly",pos:so(e,[o,Math.abs(Math.cos(t*Math.PI*7))*.08*(1-n),0]),tumble:.8*(1-n),swing:o}}}],Yd=9.2,Mc=.72;function S5(t){return t<Mc?Ut(o1(),Yd,t/Mc):Ut(Yd,mE,(t-Mc)/(1-Mc))}function wc(){return Mc*Jr((X0[0]+.15-o1())/(Yd-o1()))}var e1={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},Jh=t=>Object.assign({},e1,fs[t].look),SE=`
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
`;function Zr(t,e,o){let n=document.createElement(t);return e&&(n.className=e),o!==void 0&&(n.innerHTML=o),n}var ti=t=>String(t).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function t1(t,e,o){t.querySelectorAll(".tour-line").forEach((n,r)=>{n.style.transitionDelay=(e+r*o).toFixed(2)+"s"})}A5.exports=function(e){let o=/tourdebug/.test(location.search),{fps:n}=e;if(!document.querySelector("link[data-tour-font]")){let V=document.createElement("link");V.rel="stylesheet",V.href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&display=swap",V.setAttribute("data-tour-font",""),document.head.appendChild(V)}let r=Id(),a=null;fetch("res/hand.json").then(V=>V.ok?V.json():null).then(V=>{a=V}).catch(()=>{});let s=document.createElement("style");s.textContent=SE+`
	.hand-text { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); clip-path: inset(50%); white-space: normal; }
	.tour-body canvas.hand { display: block; cursor: pointer; }`,s.textContent+=`
	body.touring #museum-mobile-controls,
	body.touring .painting-plaque { display: none !important; }`,document.head.appendChild(s);let i=Zr("div","tour");i.setAttribute("role","region"),i.setAttribute("aria-label","Guided tour of the gallery. Swipe, scroll or press the arrow keys to move on.");let c=Zr("div","tour-mark",ti(Kh.name)),f=Zr("button","tour-free","Explore freely");f.type="button";let l=Zr("div","tour-links",Hd.icons("tour-icon"));l.insertBefore(Fd()("tour-icon"),l.firstChild),l.insertBefore(Oh().button("tour-icon"),l.firstChild.nextSibling);let v=Zr("button","tour-free tour-note",'<svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 4c-7 1-11.5 5.5-13 13l-1.5 3 3-1.5c7.500-1.500 12-6 13-13z"/><path d="M5.5 20L13 12.500"/></svg><span>Leave a note</span>');v.type="button",v.setAttribute("aria-label","Leave a note: go to the piano room and the confessional"),l.appendChild(v),Qh&&l.appendChild(f);let h=Zr("div","tour-progress",fs.map(()=>"<i></i>").join("")),u=Zr("div","tour-hint",'<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M6 15l6-6 6 6"></path></svg><span></span>'),p=u.querySelector("span"),d=Zr("div","tour-card tour-intro",`
		<span class="tour-line tour-kicker">A virtual gallery</span>
		<span class="tour-rule"></span>
		<h1 class="tour-line tour-title">${ti(Kh.name)}</h1>
		<span class="tour-line tour-sub tour-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</span>`);t1(d,.4,.35);let m=Kh.text.split(/\n\s*\n/).map(V=>`<p class="tour-line">${ti(V.trim())}</p>`).join(""),g=Zr("div","tour-card tour-about",`
		<span class="tour-line tour-kicker">The artist</span>
		<h2 class="tour-line tour-title">${ti(Kh.title)}</h2>
		<span class="tour-rule"></span>
		${Hd.line("tour-line tour-contact")}
		${m}`);t1(g,.25,.28);let x=Zr("div","tour-card tour-sky",`
		<span class="tour-line tour-sub">Every painting here waits for the light.</span>`);t1(x,.6,.3);let b=Zr("div","tour-card tour-master","");function w(V){let dt=Zr("div","tour-card tour-story",`
			<span class="tour-line tour-kicker"></span>
			<h2 class="tour-title tour-letters"></h2>
			<span class="tour-rule"></span>
			<span class="tour-line visit-row"></span>
			<div class="tour-body"></div>`),Xt=dt.querySelector(".tour-title"),ce=dt.querySelector(".tour-body");return dt.filled=!1,dt.body=ce,dt.fill=()=>{let he=V();if(!he||dt.filled)return;dt.filled=!0;let nn=he.title||"";dt.querySelector(".tour-kicker").textContent=lE(he)||"Oil on canvas";let ar=dt.querySelector(".visit-row");ar.innerHTML=Bd.button(he),ar.hidden=!ar.innerHTML;let Ar=ar.querySelector(".visit-btn");Ar&&(Ar.addEventListener("click",po=>{po.stopPropagation(),Bd.open(he)}),dt.warm=()=>Bd.warm(he));let rn=0;Xt.innerHTML=nn.split(" ").map(po=>'<span class="tour-word">'+po.split("").map(Kn=>`<span style="transition-delay:${(.35+rn++*.045).toFixed(3)}s">${ti(Kn)}</span>`).join("")+"</span>").join(" "),Xt.setAttribute("aria-label",nn);let br=.35+nn.length*.045+.2;dt.querySelector(".tour-rule").style.transitionDelay=br.toFixed(2)+"s";let an=String(he.description||"").split(/\n\s*\n/).filter(po=>po.trim());if(dt.querySelector(".tour-kicker").style.transitionDelay="0.1s",a&&an.length){ce.innerHTML=an.map(wn=>`<p class="hand-text">${ti(wn.trim())}</p>`).join("")+'<div class="hand-wrap"><canvas class="hand" aria-hidden="true"></canvas></div>';let po=ce.querySelector("canvas"),Kn=an.map(wn=>wn.trim()).join(`

`),Wo=!1,Fn=!1,Hr=0;ce.addEventListener("wheel",()=>{Wo=!0},{passive:!0}),ce.addEventListener("touchmove",()=>{Wo=!0},{passive:!0});let Br=parseFloat(getComputedStyle(ce).fontSize)||17,Uo=r(po,a,{ink:"rgba(244,236,223,0.93)",shadow:"rgba(0,0,0,0.55)",shadowBlur:7,xh:Math.max(8.5,Br*.56),width:.14,speed:80,pace:.12,minDur:.022,maxTime:wn=>3.5+wn.length/420,seed:3+nn.length,onPen:wn=>{if(Wo)return;let O0=wn-ce.clientHeight*.55;O0>ce.scrollTop+4&&(ce.scrollTop+=Math.min(16,O0-ce.scrollTop))}});po.addEventListener("click",wn=>{wn.stopPropagation(),clearTimeout(Hr),Fn?Uo.finish():(Fn=!0,Uo.write(Kn,!0))}),dt.write=()=>{if(clearTimeout(Hr),Wo=!1,Fn){Uo.write(Kn,!0);return}Uo.write("",!0),Hr=setTimeout(()=>{Fn=!0,Uo.write(Kn)},br*.6*1e3)},dt.stopWrite=()=>{clearTimeout(Hr),Uo.stop()};let v0=0;window.addEventListener("resize",()=>{clearTimeout(v0),v0=setTimeout(()=>{Fn&&dt.classList.contains("on")&&Uo.write(Kn,!0)},250)})}else ce.innerHTML=an.map(po=>`<p class="tour-line">${ti(po.trim())}</p>`).join(""),ce.querySelectorAll(".tour-line").forEach((po,Kn)=>{po.style.transitionDelay=(br+.3+Math.min(Kn,6)*.35).toFixed(2)+"s"})},dt}let _=()=>e.paintings?e.paintings():[],M=V=>_().find(dt=>dt.side==="corridor"&&Math.abs(dt.paintingPosition[0]-V)<.5),A=w(()=>_().find(V=>V.side==="end")),$=()=>Zr("div","tour-card",""),R=w(()=>M(ei[0])),W=w(()=>M(oi[0])),H=w(()=>M(ni[0])),D=yr.map(V=>w(()=>_().find(dt=>dt.side===V.side&&Math.abs(dt.paintingPosition[2]-V.z)<.5))),C=Zr("div","tour-card tour-endcard",`
		<span class="tour-line tour-kicker">Thank you for walking with me</span>
		<span class="tour-rule"></span>
		<span class="tour-line tour-sub">${Qh?"The rest of the gallery is yours to wander.":"Swipe back to return to any painting."}</span>
		<span class="tour-line tour-sub tour-confess-line">Before you leave, the confessional is open.<br>Leave me a note; no one else will read it.</span>
		<div class="tour-line tour-end"><button type="button" class="tour-btn" data-act="confess">Leave something behind</button></div>
		${Hd.line("tour-line tour-contact")}
		<div class="tour-line tour-end">
			${Qh?'<button type="button" class="tour-btn" data-act="free">Walk the gallery</button>':""}
			<button type="button" class="tour-btn quiet" data-act="list">All paintings</button>
			<button type="button" class="tour-btn quiet" data-act="replay">Replay</button>
		</div>`);t1(C,.5,.35);let P=[d,g,x,b,A,$(),$(),$(),R,W,H,$(),...D,C];i.append(...P,c,l,h,u),document.body.appendChild(i);let nt=y5()({root:i,avatar:e.avatar,glyphs:()=>a,onExit:()=>{pe=-1,ve&&(me={start:S},ve=!1)}});document.body.classList.add("touring");let yt=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,vt=yt?"Scroll":"Swipe",st=fs.map((V,dt)=>dt===0?yt?"Scroll to begin":"Swipe up to begin":dt===1?vt+" to follow the leaf":dt===2?vt+" to follow the light":dt===3?vt+" for its story":dt===6||dt===7||dt===fs.length-1?"":vt+" on"),it=[0];Wd.forEach(V=>it.push(it[it.length-1]+V.dur));let qt=it[it.length-1],se=210,ge=95,Ve=.35,ye=1.4,ho=.32,ko=1,Ko=1.3,Jt=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,be=2.2,Ce=.7,ro=.9,wo=!0,Oe=0,we=0,wt=0,ie=-10,Pe=!1,pe=-1,Qt=0,So=0,S=0,io=null,Ze=Object.assign({},Jh(0)),Eo=fs[0].cam(0),Oo={phase:"home",pos:_c.slice(),tumble:0},bn=0,Er=V=>{let dt=0;for(let Xt=1;Xt<it.length;Xt++)Math.abs(it[Xt]-V)<Math.abs(it[dt]-V)&&(dt=Xt);return dt};function Yn(V){let dt=P[V];dt&&dt.fill&&(dt.fill(),dt.body.scrollTop=0,dt.offsetWidth),P.forEach((Xt,ce)=>{let he=Xt.classList.contains("on");Xt.classList.toggle("on",ce===V),ce===V&&!he&&Xt.write&&Xt.write(),ce!==V&&he&&Xt.stopWrite&&Xt.stopWrite()}),dt&&dt.warm&&dt.warm(),p.textContent=st[V]||"",u.classList.toggle("on",!!st[V])}function K0(){P.forEach(V=>{V.stopWrite&&V.classList.contains("on")&&V.stopWrite(),V.classList.remove("on")}),u.classList.remove("on")}let za=null,li=-1;function Z(V){if(nt.active||!wo||io)return;let dt=S-ie>Ve;if(ie=S,dt||!za){let Xt=0,ce=qt;for(let he=0;he<it.length;he++)if(it[he]<=Oe-.02&&(Xt=it[he]),it[he]>=Oe+.02){ce=it[he];break}za={lo:Xt,hi:ce}}S<li||(Pe=!1,wt=Math.max(za.lo,Math.min(za.hi,wt+V)),wt=Math.max(Oe-be,Math.min(Oe+be,wt)))}function Pt(V){if(nt.active||!wo||io)return;let dt=Pe?wt:Oe,Xt;if(V>0)Xt=it.findIndex(ce=>ce>dt+.05);else{Xt=-1;for(let ce=it.length-1;ce>=0;ce--)if(it[ce]<dt-.05){Xt=ce;break}}Xt<0||(wt=it[Xt],Pe=!0,ie=S)}let Dt=null,Ct=V=>V.stopPropagation();["touchstart","touchmove","touchend","mousedown","mouseup","click","contextmenu"].forEach(V=>i.addEventListener(V,Ct)),i.addEventListener("pointerdown",V=>{if(V.stopPropagation(),!(V.target.closest("button, a")||V.target.closest(".tour-body"))){Dt={x:V.clientX,y:V.clientY,lx:V.clientX,ly:V.clientY,t:performance.now(),moved:0,v:0,lt:performance.now()};try{i.setPointerCapture(V.pointerId)}catch(dt){}}}),i.addEventListener("pointermove",V=>{if(!Dt)return;let dt=V.clientX-Dt.lx,Xt=V.clientY-Dt.ly;Dt.lx=V.clientX,Dt.ly=V.clientY;let ce=Math.abs(Xt)>=Math.abs(dt)?-Xt:-dt;Dt.moved+=Math.abs(ce);let he=performance.now(),nn=ce/ge;Dt.v=Dt.v*.6+nn/Math.max(.008,(he-Dt.lt)/1e3)*.4,Dt.lt=he,Dt.moved>6&&Z(nn)});let fe=V=>{let dt=Dt;if(Dt=null,!!dt){if(nt.active){dt.moved<10&&performance.now()-dt.t<500?nt.tap():dt.y-(V?V.clientY:dt.ly)>30&&nt.swipe(1);return}dt.moved<10&&performance.now()-dt.t<500?Pt(1):performance.now()-dt.lt<120&&Z(Math.max(-1.6,Math.min(1.6,dt.v*.22)))}};i.addEventListener("pointerup",V=>{V.stopPropagation(),fe(V)}),i.addEventListener("pointercancel",()=>{Dt=null}),i.addEventListener("wheel",V=>{if(nt.active){if(V.target.closest(".conf-ui"))return;V.preventDefault(),nt.wheel(V.deltaY);return}if(V.target.closest(".tour-body")){let Xt=V.target.closest(".tour-body"),ce=Xt.scrollTop+Xt.clientHeight>=Xt.scrollHeight-2&&V.deltaY>0,he=Xt.scrollTop<=0&&V.deltaY<0;if(!ce&&!he)return}V.preventDefault();let dt=V.deltaMode===1?V.deltaY*16:V.deltaMode===2?V.deltaY*window.innerHeight:V.deltaY;Z(dt/se)},{passive:!1}),window.addEventListener("keydown",V=>{if(!wo||io||document.body.classList.contains("visiting"))return;if(nt.active){if(V.stopImmediatePropagation(),V.target&&/TEXTAREA|INPUT|BUTTON/.test(V.target.tagName))return;nt.key(V.key)&&V.preventDefault();return}let dt=V.key;if(["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(dt)>=0){if((dt==="Enter"||dt===" ")&&V.target&&V.target.tagName==="BUTTON")return;V.preventDefault(),V.stopImmediatePropagation(),Pt(1)}else["ArrowUp","ArrowLeft","PageUp"].indexOf(dt)>=0?(V.preventDefault(),V.stopImmediatePropagation(),Pt(-1)):dt==="Escape"?(V.preventDefault(),ze()):/^[wasdzq]$/i.test(dt)&&V.stopImmediatePropagation()},!0),window.addEventListener("keyup",V=>{wo&&!io&&/^(Arrow|[wasdzq]$)/i.test(V.key)&&V.stopImmediatePropagation()},!0),f.addEventListener("click",V=>{V.stopPropagation(),ze()}),["mousedown","pointerdown"].forEach(V=>v.addEventListener(V,dt=>dt.stopPropagation())),v.addEventListener("click",V=>{V.stopPropagation(),$e()});let Te=eo([8.6,1.75,44.3],[-3,1.85,44.5],55,0),Se=null,ve=!1;function $e(){if(!wo||io||nt.active||Se)return;K0(),pe=-2;let V=Eo.eye;if(V[0]>.5&&V[0]<13.5&&V[2]>36&&V[2]<50){ve=!1,nt.start(Eo,Ze);return}Se={t:0}}C.addEventListener("click",V=>{let dt=V.target.closest("button");dt&&(V.stopPropagation(),dt.dataset.act==="free"&&ze(),dt.dataset.act==="replay"&&Ke(),dt.dataset.act==="list"&&ru().show(!1),dt.dataset.act==="confess"&&(K0(),pe=-2,nt.start(Eo,Ze)))});let _e=[null,[u0.zc-1.6,Math.PI/2],[11.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[42.5+kc[0]-7,0],[42.5+kc[1]-7,0],[42.5+kc[2]-7,0],[1e3,Math.PI/2],...yr.map(V=>[V.z-1.6,V.side==="left"?-Math.PI/2:Math.PI/2]),[hs[2]-1.6,Math.PI]],Xe=null,Ae=0;function ze(){if(!wo||io||!Qh)return;let V=Er(Oe),dt=_e[V];Xe=V<=1?{phase:"home",pos:_c.slice()}:V>=3&&V<=6?{phase:"floor",pos:X0.slice()}:V===11?{phase:"floor",pos:Yl.slice()}:V===18?{phase:"floor",pos:hs.slice()}:null,Ae=V>=12?1:0,dt&&n.place&&n.place(dt[0],dt[1]),io={start:S,fromCam:Eo,fromLook:Object.assign({},Ze)},K0(),i.hidden=!0,document.body.classList.remove("touring"),e.onExit&&e.onExit()}function Ke(){Oe=wt=0,we=0,Pe=!1,pe=-1,Qt=0,So=0,Oo={phase:"home",pos:_c.slice(),tumble:0},me={start:S}}let me={start:-1},co=!1,No=[],Me={prev:null,vel:[0,0,0],axis:[1,0,0],dir:null,bank:0,rock:0,spin:0,fresh:!0};function Go(V){bn+=V*(Oo.phase==="floor"?0:1);let dt=Oo.tumble===void 0?0:Oo.tumble,Xt=bc.fromTranslation(No,Oo.pos);if(Oo.phase==="home")Xt=bc.rotateY(Xt,Xt,2.2+Math.sin(bn*.9)*.15),Xt=bc.rotateZ(Xt,Xt,-1+Math.sin(bn*1.3)*.12),Xt=bc.rotateX(Xt,Xt,.4);else if(Oo.phase==="floor")Xt=bc.rotateY(Xt,Xt,.65),Xt=bc.rotateX(Xt,Xt,.16);else{let ce=Oo.pos;if(Me.prev&&V>0){let wr=[ce[0]-Me.prev[0],ce[1]-Me.prev[1],ce[2]-Me.prev[2]];if(Math.hypot(wr[0],wr[1],wr[2])<1.5){let Rc=Math.min(1,V*6);for(let gs=0;gs<3;gs++)Me.vel[gs]+=(wr[gs]/V-Me.vel[gs])*Rc}else Me.vel=[0,0,0]}Me.prev=ce.slice();let he=Me.vel,nn=Math.hypot(he[0],he[1],he[2]),ar=Ft(.25,1.4,nn),Ar=Ft(.5,2,-he[1]),rn=bn*.35*(.3+dt)+.65,br=[Math.cos(rn),0,Math.sin(rn)];nn>.001&&(br=jo(br,qr(he,-1/nn),ar));let an=Math.min(1,V*4);Me.axis=jo(Me.axis,br,Me.fresh?1:an);let po=Me.axis,Kn=Math.hypot(po[0],po[1],po[2])||1;po=qr(po,1/Kn);let Wo=Eo.eye,Fn=[Wo[0]-ce[0],Wo[1]-ce[1],Wo[2]-ce[2]],Hr=Math.hypot(Fn[0],Fn[1],Fn[2])||1,Br=Ut(.6,.22,ar),Uo=[Fn[0]/Hr*Br,1+Fn[1]/Hr*Br,Fn[2]/Hr*Br],v0=po[0]*Uo[0]+po[1]*Uo[1]+po[2]*Uo[2];Uo=Ud(Uo,qr(po,v0));let wn=Math.hypot(Uo[0],Uo[1],Uo[2])||1;Uo=qr(Uo,1/wn);let O0=[po[1]*Uo[2]-po[2]*Uo[1],po[2]*Uo[0]-po[0]*Uo[2],po[0]*Uo[1]-po[1]*Uo[0]],Ao=Math.hypot(he[0],he[2]),sn=0;if(Ao>.15&&Me.dir&&V>0){let wr=[he[0]/Ao,he[2]/Ao];sn=(Me.dir[0]*wr[1]-Me.dir[1]*wr[0])/V,Me.dir=wr}else Ao>.15&&(Me.dir=[he[0]/Ao,he[2]/Ao]);Me.bank+=(Math.max(-.8,Math.min(.8,sn*.3))*ar-Me.bank)*Math.min(1,V*3),Me.rock+=V*(1.5+2.4*ar),Me.spin+=V*Ar*7*(.4+dt);let m0=Math.sin(Me.rock)*(.26+.45*dt)*(1-.5*Ar)+Me.bank+Me.spin,vs=Math.sin(Me.rock*.63+1)*(.16+.3*dt)+(Oo.swing||0)*.9,Q0=Math.cos(m0),ms=Math.sin(m0),of=so(qr(Uo,Q0),qr(O0,ms)),La=so(qr(O0,Q0),qr(Uo,-ms));Q0=Math.cos(vs),ms=Math.sin(vs);let fi=so(qr(po,Q0),qr(of,ms)),Lc=so(qr(of,Q0),qr(po,-ms)),s1=Math.sin(Me.rock+1.5708)*.035*(.3+dt)*(1-.5*ar),fa=so(ce,qr(O0,s1)),Nc=[fi[0],fi[1],fi[2],0,Lc[0],Lc[1],Lc[2],0,La[0],La[1],La[2],0,fa[0],fa[1],fa[2],1];for(let wr=0;wr<16;wr++)Xt[wr]=Nc[wr];Me.fresh=!1}return Oo.phase!=="fly"&&(Me.prev=null,Me.vel=[0,0,0],Me.fresh=!0,Me.spin=0,Me.bank=0,Me.dir=null),{visible:!0,model:Xt}}function p0(V){for(let dt in e1)Ze[dt]=V[dt]!==void 0?V[dt]:e1[dt]}function la(V,dt){if(V<=1)return{phase:"home",pos:_c.slice(),tumble:0};let Xt=M5[V];if(Xt){let ce=Xt.amp;return{phase:"fly",pos:so(Xt.pos(),[Math.sin(dt*.55)*ce[0],Math.sin(dt*.8)*ce[1],(1-Math.cos(dt*.45))*ce[2]]),tumble:Xt.tumble}}return{phase:"floor",pos:(V>=18?hs:V>=10?Yl:X0).slice(),tumble:0}}let oo=0,mo=null;function $n(V){let dt=Math.min(.1,Math.max(0,V-oo));if(oo=V,S=V,co||(co=!0,me.start=V),io)return null;if(Se&&(Se.t+=dt,Se.t>=.7&&(Se=null,ve=!0,nt.start(Te,Object.assign({},e1,{fade:1,fadeColor:[0,0,0]})))),nt.active){let Ao=nt.update(dt);return Eo=Ao.camera,p0(Ao.look),o&&window.__camOverride&&(Eo=window.__camOverride),o&&window.__lookOverride&&Object.assign(Ze,window.__lookOverride),{camera:Eo,walker:null,door:1,look:Ze,leaf:Go(dt)}}if(!Pe&&!Dt&&S-ie>Ce){let Ao=Er(wt);Math.abs(it[Ao]-wt)<ro&&(wt=it[Ao])}let Xt=wt-Oe;if(Pe){let sn=Math.sign(Xt)*Math.min(ko,Math.sqrt(2*Ko*Math.abs(Xt)))-we;we+=Math.sign(sn)*Math.min(Math.abs(sn),Ko*dt),Oe+=we*dt,(Xt>0&&Oe>=wt||Xt<0&&Oe<=wt||Math.abs(wt-Oe)<1e-4)&&(Oe=wt,we=0,Pe=!1)}else{let Ao=hE(Oe,wt,we,ho,dt,3);Oe=Ao[0],we=Ao[1],Math.abs(wt-Oe)<1e-4&&Math.abs(we)<.001&&(Oe=wt,we=0)}let ce=0;for(;ce<Wd.length-1&&Oe>=it[ce+1];)ce++;let he=Wd[ce],nn=Jr((Oe-it[ce])/he.dur),ar=fs[ce],Ar=fs[ce+1],rn=Er(Oe);rn!==Qt&&(Qt=rn,So=0);let br=Math.abs(Oe-it[rn])<.02;br&&(So+=dt);let an=1-Ft(0,1.2,Math.abs(Oe-it[rn])),po=he.leaf(nn);if(po.pos?Oo=Object.assign({},po):Oo=Object.assign({},po,{pos:po.phase==="home"?_c.slice():(ce>=10?Yl:X0).slice()}),M5[rn]&&an>0){let Ao=la(rn,So);Oo.pos=jo(Oo.pos,Ao.pos,an)}let Kn=he.walker&&(nn>.01||ce===6)?he.walker(nn):null;mo=Kn==null?null:{x:Kn,z:Vd,heading:Math.PI/2,phase:(Kn-E5)/gE};let Wo=he.cam(nn,ar.cam(0),Ar.cam(0),Oo);if(an>0&&So>0){let Ao=fs[rn],sn=Ao.cam(0),m0=Ao.cam(So);Wo=eo(so(Wo.eye,qr(Ud(m0.eye,sn.eye),an)),so(Wo.target,qr(Ud(m0.target,sn.target),an)),Wo.fov+(m0.fov-sn.fov)*an,Wo.roll+(m0.roll-sn.roll)*an)}if(an>0&&!Jt){let Ao=S,sn=.006*an,m0=Math.sin(Ao*.61)*.6+Math.sin(Ao*1.37+1.3)*.4,vs=Math.sin(Ao*.47+2.1)*.6+Math.sin(Ao*1.13+.4)*.4,Q0=Math.sin(Ao*.53+4)*.5+Math.sin(Ao*.97+2.6)*.5;Wo=eo(so(Wo.eye,[m0*sn,vs*sn*.7,Q0*sn]),so(Wo.target,[vs*sn*1.8,m0*sn*1.4,0]),Wo.fov,Wo.roll+Q0*.0012*an)}Eo=Wo;let Fn=Jh(ce),Hr=Jh(ce+1),Br=Object.assign({},Fn,he.look(nn,Fn,Hr,Oo,Wo.eye));if(an>0){let Ao=Jh(rn);for(let sn in Ao)typeof Ao[sn]=="number"&&(Br[sn]=Ut(Br[sn],Ao[sn],an))}p0(Br);let v0=br&&Math.abs(wt-Oe)<.02?rn:-1;v0!==pe&&(v0>=0&&(li=S+ye),pe=v0,v0>=0?Yn(v0):K0()),h.querySelectorAll("i").forEach((Ao,sn)=>Ao.classList.toggle("on",sn===rn));let wn=pe>=0?P[pe]:null;wn&&wn.fill&&!wn.filled&&(wn.fill(),wn.filled&&(wn.classList.remove("on"),wn.offsetWidth,wn.classList.add("on")));let O0=Jr((V-me.start)/2.6);return O0<1&&(Ze.fade=Math.max(Ze.fade,1-Ft(0,1,O0)),Ze.fadeColor=[0,0,0]),o&&window.__camOverride&&(Eo=window.__camOverride),o&&window.__lookOverride&&Object.assign(Ze,window.__lookOverride),{camera:Eo,walker:mo,door:he.door?he.door(nn):ce>=12?1:0,look:Se?Object.assign(Ze,{fade:Math.max(Ze.fade||0,Jr(Se.t/.6)),fadeColor:[0,0,0]}):Ze,leaf:Go(dt)}}return o&&(window.__tour={go:Pt,exit:ze,wind:Z,confess(){K0(),pe=-2,nt.start(Eo,Ze)},note:()=>$e(),conf:nt,paper:Wh().STATE,seek(V,dt){Oe=wt=it[V]+(it[V+1]-it[V])*dt,we=0,Pe=!1,ie=S+1e6,me.start=S-10,co=!0},jump(V){Oe=wt=it[V],we=0,Pe=!1,So=0,ie=S,me.start=S-10,co=!0},state:()=>({current:Er(Oe),scroll:+Oe.toFixed(3),target:+wt.toFixed(3),shown:pe,move:Math.abs(wt-Oe)>.02?{p:Oe}:null,camNow:Eo,leaf:Oo,look:Ze})}),{update:$n,get active(){return wo&&!io},handover(V){if(!io)return null;let dt=Jr((V-io.start)/1.8);return dt>=1?(wo=!1,null):{from:io.fromCam,fromLook:io.fromLook,k:yn(dt)}},restingDoor:()=>Ae,restingLeaf(){return Xe?(Oo=Xe,Go(0)):null},mix:ri,cam:eo}}});var EE=lm(),Y0=y0(),fp=ru(),a1=Y0.reflection,AE=!1,j5=(t,e,o,n,r)=>n+(t-e)*(r-n)/(o-e),hp=()=>j5(window.innerWidth/window.innerHeight,16/9,9/16,1.7,Math.PI/3);navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)&&(hp=()=>j5(window.innerWidth/window.innerHeight,16/9,9/16,1.5,Math.PI/3));var W5=()=>2*Math.atan(Math.tan(hp()*.5)*window.innerHeight/window.innerWidth),TE=_m(),Jl=new TE;Jl.showPanel(0);AE&&document.body.appendChild(Jl.dom);var pn,zc,np,Ac,rp,dn;function zE(){try{let t=document.createElement("canvas"),e=t.getContext("webgl")||t.getContext("experimental-webgl");return!!(e&&e.getExtension("OES_standard_derivatives"))}catch(t){return!1}}if(!zE())throw EE.finish(),fp.show(!0),new Error("This device cannot draw the 3D gallery; showing the list instead.");pn=Mm()({extensions:["OES_element_index_uint","OES_standard_derivatives"],optionalExtensions:["EXT_texture_filter_anisotropic","WEBGL_depth_texture"],attributes:{alpha:!1,antialias:!1},pixelRatio:Y0.pixelRatio});location.hash==="#list"&&fp.show(!1);window.addEventListener("hashchange",()=>{location.hash==="#list"&&fp.show(!1)});zc=l2()();var LE=Pu();np=LE(pn,zc,a1);Ac=zg()(pn,zc);rp=Cg()(pn);var z5=Xg()(pn,zc),L5=a3()(pn),N5=c3()(pn),R5=S3()(pn),C5=L3()(pn),O5=P3()(pn),ds=K3()(pn),ap=dd(),V5=$f(),NE=tl(),sp=vd(),ip=tr(),Xn=mh(),cp=sx(),X5=Oh(),{A:Ec}=_0();dn=Hy()(zc,W5);var Tc=jy()(pn,Y0),us=Ky()(pn),P5=Zy()(pn),RE=e5()(pn,Y0),CE=i5()(pn,Y0),I5=Ga()(pn),$5=Wh()(pn),F5=Ua()(pn),q5=_l()(pn),ca=T5()({fps:dn,paintings:()=>Ac.interactables(),avatar:ds,onExit:()=>dn.setPaused(!1)});dn.setPaused(!0);/tourdebug/.test(location.search)&&(window.__post=Tc);var si=[],ef=[],R0=[7,2,1.6];zc.viewer=R0;var OE=pn({cull:{enable:!0,face:"back"},uniforms:{view:()=>si,proj:()=>ef,yScale:1,mirrorOn:()=>a1?1:0,night:()=>ip.night,time:pn.context("time")}}),PE=pn({cull:{enable:!0,face:"front"},uniforms:{yScale:-1}}),Y5=document.createElement("style");Y5.textContent=`

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
`;document.head.appendChild(Y5);var C0=document.createElement("button");C0.className="painting-plaque";C0.type="button";C0.setAttribute("aria-label","Read painting");document.body.appendChild(C0);var Gr=document.createElement("div");Gr.className="story-overlay";Gr.innerHTML=`

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

		${V5.line("story-contact")}

		<div class="visit-row story-visit"></div>

		<p
			class="story-body"
			id="story-body"
		></p>

	</article>
`;document.body.appendChild(Gr);var ps=document.createElement("div");ps.className="museum-links";ps.innerHTML=V5.icons("museum-link");ps.insertBefore(Fd()("museum-link"),ps.firstChild);ps.insertBefore(X5.button("museum-link"),ps.firstChild.nextSibling);["mousedown","pointerdown","click"].forEach(t=>ps.addEventListener(t,e=>e.stopPropagation()));document.body.appendChild(ps);var IE=Gr.querySelector("#story-title"),$E=Gr.querySelector("#story-body"),D5=Gr.querySelector("#story-meta"),FE=Gr.querySelector(".story-contact"),Zl=Gr.querySelector(".story-visit");Zl.addEventListener("click",t=>{t.target.closest(".visit-btn")&&ci&&sp.open(ci)});var qE=Gr.querySelector(".story-close"),ci=null,t0={p:0,target:0,last:0},K5={title:ap.title,description:ap.text,isAbout:!0},Ta=null;function up(t){t&&(ci=t,IE.textContent=t.title||"",$E.textContent=t.description||"",D5.textContent=t.isAbout?"":NE(t),D5.hidden=!!t.isAbout,FE.hidden=!t.isAbout,Zl.innerHTML=t.isAbout?"":sp.button(t),Zl.hidden=!Zl.innerHTML,Zl.hidden||sp.warm(t),Gr.classList.toggle("about-mode",!!t.isAbout),Gr.classList.add("open"),t0.target=t.isAbout?1:0,Ta=t,C0.classList.remove("visible"),dn.setPaused(!0))}function dp(){Gr.classList.remove("open"),t0.target=0,ci=null,Ta=null,dn.setPaused(!1)}function Q5(t){t&&(t.preventDefault(),t.stopPropagation()),Ta&&up(Ta)}C0.addEventListener("pointerup",Q5,!0);C0.addEventListener("touchend",Q5,{passive:!1,capture:!0});C0.addEventListener("click",t=>{t&&(t.preventDefault(),t.stopPropagation()),ci===null&&Ta&&up(Ta)},!0);qE.addEventListener("click",dp);Gr.addEventListener("click",t=>{t.target===Gr&&dp()});window.addEventListener("keydown",t=>{t.code==="Escape"&&Gr.classList.contains("open")&&dp()});function G5(t,e){let o=e[0],n=e[1],r=e[2];return[t[0]*o+t[4]*n+t[8]*r+t[12],t[1]*o+t[5]*n+t[9]*r+t[13],t[2]*o+t[6]*n+t[10]*r+t[14],t[3]*o+t[7]*n+t[11]*r+t[15]]}function DE(){if(ci)return;if(ca.active){Ta=null,C0.classList.remove("visible");return}let t=Ac.interactables(),e=dn.forward[0],o=dn.forward[2],n=Math.hypot(e,o)||1,r=null,a=1/0;for(let s of t){let i=s.paintingPosition,c=0,f=0;s.side==="left"?c=1:s.side==="right"?c=-1:s.side==="corridor"?f=1:f=-1;let l=i[0]-dn.pos[0],v=i[2]-dn.pos[2],h=-(l*c+v*f),u=Math.abs(l*f-v*c),p=-(e*c+o*f)/n,d=s.side==="end"?11:8,m=(s.width||2)/2;p>.9&&h>.5&&h<d&&u<m+.8&&h<a&&(r=s,a=h)}if(!r){let s=dn.pos[0],i=dn.pos[2];e/n>.85&&s<13.6&&i>Ec.z0-.5&&i<Ec.z1+.5&&(r=Object.assign({},K5,{plaqueTitle:ap.name}))}r?(Ta=r,C0.textContent=r.isAbout?"ABOUT  \xB7  "+r.plaqueTitle:"READ  \xB7  "+r.title,C0.classList.add("visible")):(Ta=null,C0.classList.remove("visible"))}var pp=Yi();function GE(){let t=ds.state;if(!t||!t.glowPos)return null;let e=G5(dn.view(),[t.glowPos[0],t.glowPos[1]-.08,t.glowPos[2],1]),o=G5(dn.proj(),e);return o[3]<=.05?null:[(o[0]/o[3]*.5+.5)*window.innerWidth,(.5-o[1]/o[3]*.5)*window.innerHeight,o[3]]}var lp=null;window.addEventListener("pointerdown",t=>{lp={x:t.clientX,y:t.clientY,t:performance.now()}},!0);window.addEventListener("pointerup",t=>{let e=lp;if(lp=null,!e||ci||ca.active||!t.target||!/^(CANVAS|BODY)$/.test(t.target.tagName)||Math.hypot(t.clientX-e.x,t.clientY-e.y)>12||performance.now()-e.t>600)return;let o=GE();if(!o)return;let n=!!document.pointerLockElement,r=n?window.innerWidth/2:t.clientX,a=n?window.innerHeight/2:t.clientY,s=Math.max(t.pointerType==="touch"?60:40,260/o[2]);Math.hypot(r-o[0],a-o[1])<s&&(t.preventDefault(),t.stopPropagation(),up(K5))},!0);function HE(t){let e=Math.min(Math.max(t-t0.last,0),.1);t0.last=t;let o=e/1.6;if(t0.p=t0.target>t0.p?Math.min(1,t0.p+o):Math.max(0,t0.p-o),t0.p<=0)return;let n=t0.p<.5?2*t0.p*t0.p:1-Math.pow(-2*t0.p+2,2)/2,r=window.innerHeight>window.innerWidth,a=ds.state,s=a&&a.hipsPos?a.hipsPos[0]:Ec.cx-1.2,i=a&&a.hipsPos?a.hipsPos[2]:Ec.zc,c=r?[s-2.3,2,i-.1]:[s-1.55,1.55,i+.3],f=r?[s+.1,.2,i-.1]:[s+.1,.7,i+.6],l=dn.pos,v=dn.forward,h=[l[0],l[1],l[2]],u=[l[0]+v[0],l[1]+v[1],l[2]+v[2]],p=(x,b)=>x.map((w,_)=>w+(b[_]-w)*n),d=[Ec.cx-6.2,1.7,Ec.zc],m=1-n,g=h.map((x,b)=>m*m*x+2*m*n*d[b]+n*n*c[b]);pp.lookAt(dn.view(),g,p(u,f),[0,1,0])}var Z5=/[?&]studio\b/.test(location.search);if(Z5){let t=document.createElement("style");t.textContent=".tour, #museum-mobile-controls, .painting-plaque { display: none !important; }",document.head.appendChild(t),window.addEventListener("pointerdown",()=>tr().toggle()),window.addEventListener("keydown",e=>{(e.key==="n"||e.key===" ")&&tr().toggle()})}var ai={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},ii=null,tf=!1,n1=!1;function BE(t,e,o,n){let r=[o[0]-e[0],o[1]-e[1],o[2]-e[2]],a=Math.hypot(r[0],r[1],r[2])||1,s=[-r[2]/a,0,r[0]/a],i=Math.hypot(s[0],s[2])||1;s=[s[0]/i,0,s[2]/i];let c=Math.cos(n),f=Math.sin(n);return pp.lookAt(t,e,o,[s[0]*f,c,s[2]*f])}function UE(t){let e=window.innerWidth/window.innerHeight,o=Tc.shot,n=ca.active?ca.update(t):null,r=n?null:ca.handover(t),a=null,s=ai;if(n){a=n.camera,s=n.look,ii=n.leaf;let i=window.__walkOverride&&/tourdebug/.test(location.search)?window.__walkOverride:n.walker||null;ds.setWalk(i),tf=!!i,us.setOpen(n.door||0)}else ii=ca.restingLeaf(),ds.setWalk(null),tf=!1,us.setOpen(ca.restingDoor());if(r){let i=dn.pos,c=dn.forward,f=ca.cam([i[0],i[1],i[2]],[i[0]+c[0],i[1]+c[1],i[2]+c[2]],W5()*180/Math.PI,0);a=ca.mix(r.from,f,r.k),s={};for(let l in ai)s[l]=Array.isArray(ai[l])?ai[l]:r.fromLook[l]+(ai[l]-r.fromLook[l])*r.k}if(a&&n&&(a=cp.apply(a,t)),Z5&&!(/tourdebug/.test(location.search)&&window.__camOverride)){let i=_l().previewCam(t);a=i,s=Object.assign({},ai,{fade:i.fade,focus:8})}if(a)BE(si,a.eye,a.target,a.roll||0),pp.perspective(ef,a.fov*Math.PI/180,e,.1,700),R0[0]=a.eye[0],R0[1]=a.eye[1],R0[2]=a.eye[2];else{let i=dn.view(),c=dn.proj();for(let h=0;h<16;h++)si[h]=i[h],ef[h]=c[h];let f=i[12],l=i[13],v=i[14];R0[0]=-(i[0]*f+i[1]*l+i[2]*v),R0[1]=-(i[4]*f+i[5]*l+i[6]*v),R0[2]=-(i[8]*f+i[9]*l+i[10]*v)}for(let i in ai)o[i]=s[i];n&&cp.pull(o,t)}var d0={wake:[[0,-50,0,0],[0,-50,0,0],[0,-50,0,0],[0,-50,0,0]],wakeDir:[0,0,1],gust:[0,0],focus:6,aperture:0},tp=[9,9,9,9],H5=[0,0,0,0],Kl=0,ep=0,Sc=null,B5=0,U5=0,Ql=0;function jE(t){let e=Math.min(.1,Math.max(0,t-B5));B5=t,d0.focus=Tc.shot.focus,d0.aperture=Y0.post>=2?Tc.shot.aperture:0;for(let s=0;s<4;s++)tp[s]+=e,d0.wake[s][3]=H5[s]*Math.exp(-tp[s]/1.1);let o=ii&&ii.visible?ii.model:null;if(o&&e>0){let s=[o[12],o[13],o[14]];if(Sc){let i=[s[0]-Sc[0],s[1]-Sc[1],s[2]-Sc[2]],c=Math.hypot(i[0],i[1],i[2]),f=c/e;if(c<1.5&&f>.12){let l=Math.min(1,e*8);for(let h=0;h<3;h++)d0.wakeDir[h]+=(i[h]/c-d0.wakeDir[h])*l;let v=Math.hypot(d0.wakeDir[0],d0.wakeDir[1],d0.wakeDir[2])||1;for(let h=0;h<3;h++)d0.wakeDir[h]/=v;if(ep+=e,ep>.14){ep=0;let h=d0.wake[Kl];h[0]=s[0],h[1]=s[1],h[2]=s[2],H5[Kl]=Math.min(1,(f-.12)/1.6)*.5,tp[Kl]=0,Kl=(Kl+1)%4}}}Sc=s}else o||(Sc=null);let n=us.openNow?us.openNow():0,r=e>0?(n-U5)/e:0;U5=n;let a=Math.max(-1,Math.min(1,r*1.2));Ql+=(a-Ql)*Math.min(1,e*(Math.abs(a)>Math.abs(Ql)?6:.7)),d0.gust[0]+=Ql*5.5*e,d0.gust[1]=Math.abs(Ql)}var op=0,r1=!1;pn.frame(function({time:t}){if(document.body.classList.contains("visiting")){op=0;return}Jl.begin(),ip.tick(t);let e=ca.active&&cp.resting&&ip.settled&&(Y0.isPhone||Y0.scale<1||Y0.level>0);if(e){if(r1=!r1,r1){Jl.end();return}}else r1=!1;let o=t-op;op=t,Y0.frame(e?o/2:o),a1=Y0.reflection,dn.tick({time:t}),HE(t),Ac.update(dn.pos,dn.fmouse[1],hp()),DE(),UE(t),Xn.update(si,ef,R0),X5.listen(R0),n1=!tf&&Xn.room("stair")&&(!Xn.room("court")||R0[0]<.5||R0[2]>30),ds.setPiano(n1),jE(t),Tc.capture(arguments[0],{view:si,proj:ef,eye:R0},()=>{OE(()=>{a1&&Xn.floor&&PE(()=>{Xn.room("studio",!0)&&q5({reflected:!0}),Xn.zone!=="studio"&&(np(),z5({reflected:!0}),I5(),Xn.room("stair",!0)&&(F5({reflected:!0}),$5({reflected:!0,view:si})),Xn.room("court",!0)&&O5(),(n1||Xn.room("court",!0)||tf)&&ds(),rp(Ac.batch()),Xn.room("street",!0)&&L5(),Xn.room("garden",!0)&&R5(),Xn.room("florence",!0)&&C5(),P5(ii),us(),N5(),us.glass())}),Xn.room("studio")&&q5(),Xn.zone!=="studio"&&(np(),z5(),I5(),Xn.room("stair")&&(F5(),$5({view:si})),Xn.room("court")&&O5(),(n1||Xn.room("court")||tf)&&ds(),rp(Ac.batch()),Xn.room("street")&&L5(),Xn.room("garden")&&(R5(),CE()),Xn.room("florence")&&C5(),P5(ii),us(),RE(d0),N5(),us.glass())})}),Tc.present(),Jl.end()});})();
