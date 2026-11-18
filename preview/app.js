"use strict";(()=>{var mt=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var cm=mt((Bk,im)=>{"use strict";var Li=document.getElementById("loader"),Ti=Li&&Li.querySelector(".loader-name"),Xc=0,Rf=0,Nf=!1,m4=performance.now(),zi=.06,Ai=0,Z1=0,om=!1,g4=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;function x4(t){if(!Ti)return;let e=Ti.offsetWidth||1,n=(e*(1.14-1.28*t)-e).toFixed(1)+"px 0";Ti.style.webkitMaskPosition=n,Ti.style.maskPosition=n}function am(t){let e=Math.min(.05,Z1?(t-Z1)/1e3:.016);Z1=t;let o=Nf?.75:.22+(zi-Ai)*1.2;if(Ai=Math.min(zi,Ai+Math.max(0,o)*e),g4&&(Ai=zi),x4(Ai),Nf&&Ai>=.999){om||(om=!0,setTimeout(sm,650));return}requestAnimationFrame(am)}Ti&&requestAnimationFrame(am);function nm(){let t=Xc?Rf/Math.max(Xc,24):0;zi=Math.max(zi,Math.min(.9,.06+t*.84))}function sm(){Li&&(Li.classList.add("done"),setTimeout(()=>Li.remove(),1400))}function J1(){Nf||(Nf=!0,window.__galleryReady=!0,Li&&(zi=1,Ti||sm()))}var rm=null;function y4(){clearTimeout(rm),Rf>=Xc&&performance.now()-m4>600&&(rm=setTimeout(()=>{Rf>=Xc&&J1()},450))}setTimeout(J1,2e4);var b4=t=>/(^|\/)(res|images)\//.test(t),zf=window.fetch.bind(window);async function w4(t,e){let o=await zf(t+".gz",e);if(!o.ok)throw new Error("no .gz");let n=new Uint8Array(await o.arrayBuffer());if(!(n[0]===31&&n[1]===139))return new Response(n);let r=new Blob([n]).stream().pipeThrough(new DecompressionStream("gzip")),a=await new Response(r).arrayBuffer();return new Response(a,{status:200,headers:{"Content-Type":"application/octet-stream"}})}window.fetch=function(t,e){let o=typeof t=="string"?t:t&&t.url||"";if(!b4(o))return zf(t,e);Xc++,nm();let n=a=>(Rf++,nm(),y4(),a),r;return/\.bin$/.test(o)&&typeof DecompressionStream!="undefined"?r=w4(o,e).catch(()=>zf(t,e)):r=zf(t,e),r.then(n,a=>{throw n(),a})};im.exports={finish:J1}});var ya=mt((Uk,um)=>{"use strict";var lm=typeof navigator!="undefined"&&navigator.userAgent||"",_4=typeof window!="undefined"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches&&!window.matchMedia("(any-pointer: fine)").matches,d0=/Android|iPhone|iPad|iPod|Mobile|Silk|Kindle|webOS|BlackBerry|Opera Mini|IEMobile/i.test(lm)||/Macintosh/.test(lm)&&typeof navigator!="undefined"&&navigator.maxTouchPoints>1||_4,fm=typeof window!="undefined"&&window.devicePixelRatio||1,_o={isPhone:d0,pixelRatio:d0?Math.min(fm,1.5):Math.min(fm,2),reflection:!d0,gardenDetail:d0?0:1,leafShare:d0?.65:1,motion:!d0,post:d0?1:2,level:d0?1:0};_o.scale=1;var M4=d0?.55:.6,Yc=0,Cf=0,Kc=0,Qc=0,Ri=1,Zc=0,Of=48,Ni=null,tu=0;function S4(t){Ni={fps:t,scale:_o.scale},_o.scale>.86?_o.scale=.85:_o.reflection?_o.stepDown():_o.scale>.71?_o.scale=.7:_o.stepDown()||(_o.scale=Math.max(M4,_o.scale-.1))}var hm=!0;try{/[?&]noadapt\b/.test(location.search)&&(hm=!1)}catch(t){}_o.frame=t=>{if(!hm)return;if(!(t>0)||t>1){Yc=0,Cf=0;return}if(Yc+=t,Cf++,Yc<.75)return;let e=Cf/Yc;if(Yc=0,Cf=0,Zc>0&&(Zc-=.75,Zc<=0&&(Ri=1)),Ni){if(e<Ni.fps*1.08&&Ni.scale>_o.scale){if(++tu>=2){_o.scale=1,Ri=1,Zc=0,Of=Math.min(Of,e*.85),tu=0,Kc=0,Ni=null;return}}else tu=0;Ni=null}if(e<Of){if(Qc=0,++Kc>=2){if(Kc=0,_o.scale>.61&&_o.climbed){Ri=_o.scale-.05,Zc=40,_o.scale=Ri,_o.climbed=!1;return}S4(e)}}else e>Math.max(Of*1.15,55)?(Kc=0,++Qc>=6&&_o.scale<Ri-.001?(_o.scale=Math.min(Ri,_o.scale+.05),_o.climbed=!0,Qc=0):Qc>=6&&(_o.climbed=!1)):(Kc=0,Qc=0)};_o.stepDown=()=>{if(_o.reflection)_o.reflection=!1;else if(_o.gardenDetail>0||_o.motion)_o.gardenDetail=0,_o.motion=!1,_o.leafShare=Math.min(_o.leafShare,.65);else if(_o.post>0)_o.post--;else return!1;return _o.level++,!0};um.exports=_o});var eu=mt((jk,dm)=>{"use strict";dm.exports=[{file:"IMG_20250717_102753.jpg",slug:"love-me-like-i-am-already-dead",title:"Love me like I am Already Dead",medium:"Oil on canvas",size:[61,91],description:`We live in a world soaked in hypocrisy. We\u2019re told not to \u201Cspeak ill of the dead,\u201D yet we spend lifetimes speaking ill of the living. We judge, ignore, neglect\u2014and then pretend to mourn with grace when it\u2019s too late. People say beautiful things at funerals, but only after burying a lifetime of cruelty or silence.

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
but the loneliness of having no one willing to admit it happened.`}]});var Pf=mt((Wk,mm)=>{"use strict";var Lr={instagram:"muzammil_qureshi",email:"muzammilqureshi100@gmail.com"},pm='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/></svg>',vm='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M3.5 7l8.5 6 8.5-6"/></svg>';Lr.instagramUrl="https://instagram.com/"+Lr.instagram;Lr.mailUrl="mailto:"+Lr.email+"?subject="+encodeURIComponent("Your paintings");Lr.icons=t=>`
	<a class="${t}" href="${Lr.instagramUrl}" target="_blank" rel="noopener" aria-label="Instagram: @${Lr.instagram}" title="Instagram">${pm}</a>
	<a class="${t}" href="${Lr.mailUrl}" aria-label="Email ${Lr.email}" title="Email">${vm}</a>`;Lr.line=t=>`
	<span class="${t}">
		<a href="${Lr.instagramUrl}" target="_blank" rel="noopener">${pm}<span>@${Lr.instagram}</span></a>
		<a href="${Lr.mailUrl}">${vm}<span>${Lr.email}</span></a>
	</span>`;mm.exports=Lr});var Jc=mt((Vk,gm)=>{"use strict";gm.exports=t=>{if(!t)return"";let e=[];return t.medium&&e.push(t.medium),t.size&&t.size.length===2&&e.push(t.size[0]+" \xD7 "+t.size[1]+" cm"),e.join("  \xB7  ")}});var ou=mt((Xk,bm)=>{"use strict";var E4=eu(),k4=Pf(),xm=Jc(),A4=ya(),I0=t=>String(t).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),T4=`
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
`,zr=null;function L4(t){if(zr){zr.hidden=!1,requestAnimationFrame(()=>zr.classList.add("on"));return}let e=document.createElement("style");e.textContent=T4,document.head.appendChild(e);let o=!A4.isPhone;zr=document.createElement("div"),zr.className="plist",zr.setAttribute("role","region"),zr.setAttribute("aria-label","All paintings"),zr.innerHTML=`
		${t?"":'<button type="button" class="plist-close">Back to the gallery</button>'}
		<header class="plist-head">
			<h1>Muzammil</h1>
			<p class="plist-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</p>
			${k4.line("plist-contact")}
		</header>
		${t?'<p class="plist-note">This device could not open the 3D gallery, so here are the paintings on their own.</p>':""}
		<main class="plist-grid">
			${E4.map(r=>`
			<article class="plist-item" id="${I0(r.slug)}">
				<img loading="lazy" decoding="async" alt="${I0(r.title)}, ${I0(xm(r))}"
					src="images/web/${I0(r.slug)}${o?"":"-1024"}.webp"
					onerror="this.onerror=null;this.src='images/${I0(r.file)}'">
				<p class="plist-meta">${I0(xm(r))}</p>
				<h2>${I0(r.title)}</h2>
				<details><summary>Read its story</summary>
					${String(r.description).split(/\n\s*\n/).map(a=>`<p>${I0(a.trim())}</p>`).join("")}
				</details>
			</article>`).join("")}
		</main>`,["mousedown","pointerdown","click","wheel","touchstart","touchmove","keydown"].forEach(r=>zr.addEventListener(r,a=>a.stopPropagation(),{passive:!0}));let n=zr.querySelector(".plist-close");n&&n.addEventListener("click",ym),document.body.appendChild(zr),requestAnimationFrame(()=>zr.classList.add("on"))}function ym(){zr&&(zr.classList.remove("on"),setTimeout(()=>{zr.hidden=!0},500),location.hash==="#list"&&history.replaceState(null,"",location.pathname+location.search))}bm.exports={show:L4,hide:ym}});var wm=mt((nu,ru)=>{(function(t,e){typeof nu=="object"&&typeof ru!="undefined"?ru.exports=e():typeof define=="function"&&define.amd?define(e):t.Stats=e()})(nu,function(){var t=function(){function e(h){return r.appendChild(h.dom),h}function o(h){for(var u=0;u<r.children.length;u++)r.children[u].style.display=u===h?"block":"none";n=h}var n=0,r=document.createElement("div");r.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",r.addEventListener("click",function(h){h.preventDefault(),o(++n%r.children.length)},!1);var a=(performance||Date).now(),s=a,i=0,c=e(new t.Panel("FPS","#0ff","#002")),f=e(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var l=e(new t.Panel("MB","#f08","#201"));return o(0),{REVISION:16,dom:r,addPanel:e,showPanel:o,begin:function(){a=(performance||Date).now()},end:function(){i++;var h=(performance||Date).now();if(f.update(h-a,200),h>s+1e3&&(c.update(1e3*i/(h-s),100),s=h,i=0,l)){var u=performance.memory;l.update(u.usedJSHeapSize/1048576,u.jsHeapSizeLimit/1048576)}return h},update:function(){a=this.end()},domElement:r,setMode:o}};return t.Panel=function(e,o,n){var r=1/0,a=0,s=Math.round,i=s(window.devicePixelRatio||1),c=80*i,f=48*i,l=3*i,h=2*i,u=3*i,v=15*i,p=74*i,d=30*i,m=document.createElement("canvas");m.width=c,m.height=f,m.style.cssText="width:80px;height:48px";var g=m.getContext("2d");return g.font="bold "+9*i+"px Helvetica,Arial,sans-serif",g.textBaseline="top",g.fillStyle=n,g.fillRect(0,0,c,f),g.fillStyle=o,g.fillText(e,l,h),g.fillRect(u,v,p,d),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(u,v,p,d),{dom:m,update:function(y,b){r=Math.min(r,y),a=Math.max(a,y),g.fillStyle=n,g.globalAlpha=1,g.fillRect(0,0,c,v),g.fillStyle=o,g.fillText(s(y)+" "+e+" ("+s(r)+"-"+s(a)+")",l,h),g.drawImage(m,u+i,v,p-i,d,u,v,p-i,d),g.fillRect(u+p-i,v,i,d),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(u+p-i,v,i,s((1-y/b)*d))}}},t})});var _m=mt((au,su)=>{(function(t,e){typeof au=="object"&&typeof su!="undefined"?su.exports=e():typeof define=="function"&&define.amd?define(e):t.createREGL=e()})(au,function(){"use strict";var t=function(x){return x instanceof Uint8Array||x instanceof Uint16Array||x instanceof Uint32Array||x instanceof Int8Array||x instanceof Int16Array||x instanceof Int32Array||x instanceof Float32Array||x instanceof Float64Array||x instanceof Uint8ClampedArray},e=function(x,k){for(var C=Object.keys(k),et=0;et<C.length;++et)x[C[et]]=k[C[et]];return x},o=`
`;function n(x){return typeof atob!="undefined"?atob(x):"base64:"+x}function r(x){var k=new Error("(regl) "+x);throw console.error(k),k}function a(x,k){x||r(k)}function s(x){return x?": "+x:""}function i(x,k,C){x in k||r("unknown parameter ("+x+")"+s(C)+". possible values: "+Object.keys(k).join())}function c(x,k){t(x)||r("invalid parameter type"+s(k)+". must be a typed array")}function f(x,k){switch(k){case"number":return typeof x=="number";case"object":return typeof x=="object";case"string":return typeof x=="string";case"boolean":return typeof x=="boolean";case"function":return typeof x=="function";case"undefined":return typeof x=="undefined";case"symbol":return typeof x=="symbol"}}function l(x,k,C){f(x,k)||r("invalid parameter type"+s(C)+". expected "+k+", got "+typeof x)}function h(x,k){x>=0&&(x|0)===x||r("invalid parameter type, ("+x+")"+s(k)+". must be a nonnegative integer")}function u(x,k,C){k.indexOf(x)<0&&r("invalid value"+s(C)+". must be one of: "+k)}var v=["gl","canvas","container","attributes","pixelRatio","extensions","optionalExtensions","profile","onDone"];function p(x){Object.keys(x).forEach(function(k){v.indexOf(k)<0&&r('invalid regl constructor argument "'+k+'". must be one of '+v)})}function d(x,k){for(x=x+"";x.length<k;)x=" "+x;return x}function m(){this.name="unknown",this.lines=[],this.index={},this.hasErrors=!1}function g(x,k){this.number=x,this.line=k,this.errors=[]}function y(x,k,C){this.file=x,this.line=k,this.message=C}function b(){var x=new Error,k=(x.stack||x).toString(),C=/compileProcedure.*\n\s*at.*\((.*)\)/.exec(k);if(C)return C[1];var et=/compileProcedure.*\n\s*at\s+(.*)(\n|$)/.exec(k);return et?et[1]:"unknown"}function w(){var x=new Error,k=(x.stack||x).toString(),C=/at REGLCommand.*\n\s+at.*\((.*)\)/.exec(k);if(C)return C[1];var et=/at REGLCommand.*\n\s+at\s+(.*)\n/.exec(k);return et?et[1]:"unknown"}function _(x,k){var C=x.split(`
`),et=1,lt=0,J={unknown:new m,0:new m};J.unknown.name=J[0].name=k||b(),J.unknown.lines.push(new g(0,""));for(var nt=0;nt<C.length;++nt){var bt=C[nt],Mt=/^\s*#\s*(\w+)\s+(.+)\s*$/.exec(bt);if(Mt)switch(Mt[1]){case"line":var Tt=/(\d+)(\s+\d+)?/.exec(Mt[2]);Tt&&(et=Tt[1]|0,Tt[2]&&(lt=Tt[2]|0,lt in J||(J[lt]=new m)));break;case"define":var St=/SHADER_NAME(_B64)?\s+(.*)$/.exec(Mt[2]);St&&(J[lt].name=St[1]?n(St[2]):St[2]);break}J[lt].lines.push(new g(et++,bt))}return Object.keys(J).forEach(function(Rt){var qt=J[Rt];qt.lines.forEach(function(wt){qt.index[wt.number]=wt})}),J}function M(x){var k=[];return x.split(`
`).forEach(function(C){if(!(C.length<5)){var et=/^ERROR:\s+(\d+):(\d+):\s*(.*)$/.exec(C);et?k.push(new y(et[1]|0,et[2]|0,et[3].trim())):C.length>0&&k.push(new y("unknown",0,C))}}),k}function A(x,k){k.forEach(function(C){var et=x[C.file];if(et){var lt=et.index[C.line];if(lt){lt.errors.push(C),et.hasErrors=!0;return}}x.unknown.hasErrors=!0,x.unknown.lines[0].errors.push(C)})}function O(x,k,C,et,lt){if(!x.getShaderParameter(k,x.COMPILE_STATUS)){var J=x.getShaderInfoLog(k),nt=et===x.FRAGMENT_SHADER?"fragment":"vertex";dt(C,"string",nt+" shader source must be a string",lt);var bt=_(C,lt),Mt=M(J);A(bt,Mt),Object.keys(bt).forEach(function(Tt){var St=bt[Tt];if(!St.hasErrors)return;var Rt=[""],qt=[""];function wt(Ct,W){Rt.push(Ct),qt.push(W||"")}wt("file number "+Tt+": "+St.name+`
`,"color:red;text-decoration:underline;font-weight:bold"),St.lines.forEach(function(Ct){if(Ct.errors.length>0){wt(d(Ct.number,4)+"|  ","background-color:yellow; font-weight:bold"),wt(Ct.line+o,"color:red; background-color:yellow; font-weight:bold");var W=0;Ct.errors.forEach(function(rt){var At=rt.message,jt=/^\s*'(.*)'\s*:\s*(.*)$/.exec(At);if(jt){var pt=jt[1];switch(At=jt[2],pt){case"assign":pt="=";break}W=Math.max(Ct.line.indexOf(pt,W),0)}else W=0;wt(d("| ",6)),wt(d("^^^",W+3)+o,"font-weight:bold"),wt(d("| ",6)),wt(At+o,"font-weight:bold")}),wt(d("| ",6)+o)}else wt(d(Ct.number,4)+"|  "),wt(Ct.line+o,"color:red")}),typeof document!="undefined"&&!window.chrome?(qt[0]=Rt.join("%c"),console.log.apply(console,qt)):console.log(Rt.join(""))}),a.raise("Error compiling "+nt+" shader, "+bt[0].name)}}function R(x,k,C,et,lt){if(!x.getProgramParameter(k,x.LINK_STATUS)){var J=x.getProgramInfoLog(k),nt=_(C,lt),bt=_(et,lt),Mt='Error linking program with vertex shader, "'+bt[0].name+'", and fragment shader "'+nt[0].name+'"';typeof document!="undefined"?console.log("%c"+Mt+o+"%c"+J,"color:red;text-decoration:underline;font-weight:bold","color:red"):console.log(Mt+o+J),a.raise(Mt)}}function q(x){x._commandRef=b()}function F(x,k,C,et){q(x);function lt(Mt){return Mt?et.id(Mt):0}x._fragId=lt(x.static.frag),x._vertId=lt(x.static.vert);function J(Mt,Tt){Object.keys(Tt).forEach(function(St){Mt[et.id(St)]=!0})}var nt=x._uniformSet={};J(nt,k.static),J(nt,k.dynamic);var bt=x._attributeSet={};J(bt,C.static),J(bt,C.dynamic),x._hasCount="count"in x.static||"count"in x.dynamic||"elements"in x.static||"elements"in x.dynamic}function K(x,k){var C=w();r(x+" in command "+(k||b())+(C==="unknown"?"":" called from "+C))}function G(x,k,C){x||K(k,C||b())}function X(x,k,C,et){x in k||K("unknown parameter ("+x+")"+s(C)+". possible values: "+Object.keys(k).join(),et||b())}function dt(x,k,C,et){f(x,k)||K("invalid parameter type"+s(C)+". expected "+k+", got "+typeof x,et||b())}function Ot(x){x()}function zt(x,k,C){x.texture?u(x.texture._texture.internalformat,k,"unsupported texture format for attachment"):u(x.renderbuffer._renderbuffer.format,C,"unsupported renderbuffer format for attachment")}var gt=33071,ct=9728,Wt=9984,ze=9985,Ee=9986,Ye=9987,_e=5120,ho=5121,So=5122,Ko=5123,Jt=5124,ge=5125,Ce=5126,ro=32819,wo=32820,Oe=33635,xe=34042,yt=36193,se={};se[_e]=se[ho]=1,se[So]=se[Ko]=se[yt]=se[Oe]=se[ro]=se[wo]=2,se[Jt]=se[ge]=se[Ce]=se[xe]=4;function Pe(x,k){return x===wo||x===ro||x===Oe?2:x===xe?4:se[x]*k}function de(x){return!(x&x-1)&&!!x}function Qt(x,k,C){var et,lt=k.width,J=k.height,nt=k.channels;a(lt>0&&lt<=C.maxTextureSize&&J>0&&J<=C.maxTextureSize,"invalid texture shape"),(x.wrapS!==gt||x.wrapT!==gt)&&a(de(lt)&&de(J),"incompatible wrap mode for texture, both width and height must be power of 2"),k.mipmask===1?lt!==1&&J!==1&&a(x.minFilter!==Wt&&x.minFilter!==Ee&&x.minFilter!==ze&&x.minFilter!==Ye,"min filter requires mipmap"):(a(de(lt)&&de(J),"texture must be a square power of 2 to support mipmapping"),a(k.mipmask===(lt<<1)-1,"missing or incomplete mipmap data")),k.type===Ce&&(C.extensions.indexOf("oes_texture_float_linear")<0&&a(x.minFilter===ct&&x.magFilter===ct,"filter not supported, must enable oes_texture_float_linear"),a(!x.genMipmaps,"mipmap generation not supported with float textures"));var bt=k.images;for(et=0;et<16;++et)if(bt[et]){var Mt=lt>>et,Tt=J>>et;a(k.mipmask&1<<et,"missing mipmap data");var St=bt[et];if(a(St.width===Mt&&St.height===Tt,"invalid shape for mip images"),a(St.format===k.format&&St.internalformat===k.internalformat&&St.type===k.type,"incompatible type for mip image"),!St.compressed)if(St.data){var Rt=Math.ceil(Pe(St.type,nt)*Mt/St.unpackAlignment)*St.unpackAlignment;a(St.data.byteLength===Rt*Tt,"invalid data for image, buffer size is inconsistent with image format")}else St.element||St.copy}else x.genMipmaps||a((k.mipmask&1<<et)===0,"extra mipmap data");k.compressed&&a(!x.genMipmaps,"mipmap generation for compressed images not supported")}function Eo(x,k,C,et){var lt=x.width,J=x.height,nt=x.channels;a(lt>0&&lt<=et.maxTextureSize&&J>0&&J<=et.maxTextureSize,"invalid texture shape"),a(lt===J,"cube map must be square"),a(k.wrapS===gt&&k.wrapT===gt,"wrap mode not supported by cube map");for(var bt=0;bt<C.length;++bt){var Mt=C[bt];a(Mt.width===lt&&Mt.height===J,"inconsistent cube map face shape"),k.genMipmaps&&(a(!Mt.compressed,"can not generate mipmap for compressed textures"),a(Mt.mipmask===1,"can not specify mipmaps and generate mipmaps"));for(var Tt=Mt.images,St=0;St<16;++St){var Rt=Tt[St];if(Rt){var qt=lt>>St,wt=J>>St;a(Mt.mipmask&1<<St,"missing mipmap data"),a(Rt.width===qt&&Rt.height===wt,"invalid shape for mip images"),a(Rt.format===x.format&&Rt.internalformat===x.internalformat&&Rt.type===x.type,"incompatible type for mip image"),Rt.compressed||(Rt.data?a(Rt.data.byteLength===qt*wt*Math.max(Pe(Rt.type,nt),Rt.unpackAlignment),"invalid data for image, buffer size is inconsistent with image format"):Rt.element||Rt.copy)}}}}var E=e(a,{optional:Ot,raise:r,commandRaise:K,command:G,parameter:i,commandParameter:X,constructor:p,type:l,commandType:dt,isTypedArray:c,nni:h,oneOf:u,shaderError:O,linkError:R,callSite:w,saveCommandRef:q,saveDrawInfo:F,framebufferFormat:zt,guessCommand:b,texture2D:Qt,textureCube:Eo}),io=0,Ze=0,ko=5,Oo=6;function bn(x,k){this.id=io++,this.type=x,this.data=k}function Er(x){return x.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}function Yn(x){if(x.length===0)return[];var k=x.charAt(0),C=x.charAt(x.length-1);if(x.length>1&&k===C&&(k==='"'||k==="'"))return['"'+Er(x.substr(1,x.length-2))+'"'];var et=/\[(false|true|null|\d+|'[^']*'|"[^"]*")\]/.exec(x);if(et)return Yn(x.substr(0,et.index)).concat(Yn(et[1])).concat(Yn(x.substr(et.index+et[0].length)));var lt=x.split(".");if(lt.length===1)return['"'+Er(x)+'"'];for(var J=[],nt=0;nt<lt.length;++nt)J=J.concat(Yn(lt[nt]));return J}function Ka(x){return"["+Yn(x).join("][")+"]"}function L0(x,k){return new bn(x,Ka(k+""))}function li(x){return typeof x=="function"&&!x._reglType||x instanceof bn}function Z(x,k){if(typeof x=="function")return new bn(Ze,x);if(typeof x=="number"||typeof x=="boolean")return new bn(ko,x);if(Array.isArray(x))return new bn(Oo,x.map((C,et)=>Z(C,k+"["+et+"]")));if(x instanceof bn)return x;E(!1,"invalid option type in uniform "+k)}var Pt={DynamicVariable:bn,define:L0,isDynamic:li,unbox:Z,accessor:Ka},Dt={next:typeof requestAnimationFrame=="function"?function(x){return requestAnimationFrame(x)}:function(x){return setTimeout(x,16)},cancel:typeof cancelAnimationFrame=="function"?function(x){return cancelAnimationFrame(x)}:clearTimeout},Nt=typeof performance!="undefined"&&performance.now?function(){return performance.now()}:function(){return+new Date};function le(){var x={"":0},k=[""];return{id:function(C){var et=x[C];return et||(et=x[C]=k.length,k.push(C),et)},str:function(C){return k[C]}}}function Ae(x,k,C){var et=document.createElement("canvas");e(et.style,{border:0,margin:0,padding:0,top:0,left:0}),x.appendChild(et),x===document.body&&(et.style.position="absolute",e(x.style,{margin:0,padding:0}));function lt(){var bt=window.innerWidth,Mt=window.innerHeight;if(x!==document.body){var Tt=x.getBoundingClientRect();bt=Tt.right-Tt.left,Mt=Tt.bottom-Tt.top}et.width=C*bt,et.height=C*Mt,e(et.style,{width:bt+"px",height:Mt+"px"})}var J;x!==document.body&&typeof ResizeObserver=="function"?(J=new ResizeObserver(function(){setTimeout(lt)}),J.observe(x)):window.addEventListener("resize",lt,!1);function nt(){J?J.disconnect():window.removeEventListener("resize",lt),x.removeChild(et)}return lt(),{canvas:et,onDestroy:nt}}function Me(x,k){function C(et){try{return x.getContext(et,k)}catch(lt){return null}}return C("webgl")||C("experimental-webgl")||C("webgl-experimental")}function pe(x){return typeof x.nodeName=="string"&&typeof x.appendChild=="function"&&typeof x.getBoundingClientRect=="function"}function $e(x){return typeof x.drawArrays=="function"||typeof x.drawElements=="function"}function ye(x){return typeof x=="string"?x.split():(E(Array.isArray(x),"invalid extension array"),x)}function We(x){return typeof x=="string"?(E(typeof document!="undefined","not supported outside of DOM"),document.querySelector(x)):x}function ke(x){var k=x||{},C,et,lt,J,nt={},bt=[],Mt=[],Tt=typeof window=="undefined"?1:window.devicePixelRatio,St=!1,Rt=function(Ct){Ct&&E.raise(Ct)},qt=function(){};if(typeof k=="string"?(E(typeof document!="undefined","selector queries only supported in DOM enviroments"),C=document.querySelector(k),E(C,"invalid query string for element")):typeof k=="object"?pe(k)?C=k:$e(k)?(J=k,lt=J.canvas):(E.constructor(k),"gl"in k?J=k.gl:"canvas"in k?lt=We(k.canvas):"container"in k&&(et=We(k.container)),"attributes"in k&&(nt=k.attributes,E.type(nt,"object","invalid context attributes")),"extensions"in k&&(bt=ye(k.extensions)),"optionalExtensions"in k&&(Mt=ye(k.optionalExtensions)),"onDone"in k&&(E.type(k.onDone,"function","invalid or missing onDone callback"),Rt=k.onDone),"profile"in k&&(St=!!k.profile),"pixelRatio"in k&&(Tt=+k.pixelRatio,E(Tt>0,"invalid pixel ratio"))):E.raise("invalid arguments to regl"),C&&(C.nodeName.toLowerCase()==="canvas"?lt=C:et=C),!J){if(!lt){E(typeof document!="undefined","must manually specify webgl context outside of DOM environments");var wt=Ae(et||document.body,Rt,Tt);if(!wt)return null;lt=wt.canvas,qt=wt.onDestroy}nt.premultipliedAlpha===void 0&&(nt.premultipliedAlpha=!0),J=Me(lt,nt)}return J?{gl:J,canvas:lt,container:et,extensions:bt,optionalExtensions:Mt,pixelRatio:Tt,profile:St,onDone:Rt,onDestroy:qt}:(qt(),Rt("webgl not supported, try upgrading your browser or graphics drivers http://get.webgl.org"),null)}function Te(x,k){var C={};function et(nt){E.type(nt,"string","extension name must be string");var bt=nt.toLowerCase(),Mt;try{Mt=C[bt]=x.getExtension(bt)}catch(Tt){}return!!Mt}for(var lt=0;lt<k.extensions.length;++lt){var J=k.extensions[lt];if(!et(J))return k.onDestroy(),k.onDone('"'+J+'" extension is not supported by the current WebGL context, try upgrading your system or a different browser'),null}return k.optionalExtensions.forEach(et),{extensions:C,restore:function(){Object.keys(C).forEach(function(nt){if(C[nt]&&!et(nt))throw new Error("(regl): error restoring extension "+nt)})}}}function Ke(x,k){for(var C=Array(x),et=0;et<x;++et)C[et]=k(et);return C}var ve=5120,co=5121,Ro=5122,be=5123,Go=5124,pa=5125,l0=5126;function oo(x){for(var k=16;k<=1<<28;k*=16)if(x<=k)return k;return 0}function mo(x){var k,C;return k=(x>65535)<<4,x>>>=k,C=(x>255)<<3,x>>>=C,k|=C,C=(x>15)<<2,x>>>=C,k|=C,C=(x>3)<<1,x>>>=C,k|=C,k|x>>1}function $n(){var x=Ke(8,function(){return[]});function k(J){var nt=oo(J),bt=x[mo(nt)>>2];return bt.length>0?bt.pop():new ArrayBuffer(nt)}function C(J){x[mo(J.byteLength)>>2].push(J)}function et(J,nt){var bt=null;switch(J){case ve:bt=new Int8Array(k(nt),0,nt);break;case co:bt=new Uint8Array(k(nt),0,nt);break;case Ro:bt=new Int16Array(k(2*nt),0,nt);break;case be:bt=new Uint16Array(k(2*nt),0,nt);break;case Go:bt=new Int32Array(k(4*nt),0,nt);break;case pa:bt=new Uint32Array(k(4*nt),0,nt);break;case l0:bt=new Float32Array(k(4*nt),0,nt);break;default:return null}return bt.length!==nt?bt.subarray(0,nt):bt}function lt(J){C(J.buffer)}return{alloc:k,free:C,allocType:et,freeType:lt}}var j=$n();j.zero=$n();var ht=3408,Xt=3410,ie=3411,fe=3412,nn=3413,ar=3414,kr=3415,rn=33901,yr=33902,an=3379,po=3386,Kn=34921,Wo=36347,Fn=36348,Hr=35661,Br=35660,Uo=34930,va=36349,wn=34076,Oa=34024,Ao=7936,sn=7937,ma=7938,vs=35724,Qa=34047,ms=36063,tf=34852,z0=3553,fi=34067,Lc=34069,r1=33984,f0=6408,zc=5126,br=5121,Rc=36160,gs=36053,Z5=36064,J5=16384,tb=function(x,k){var C=1;k.ext_texture_filter_anisotropic&&(C=x.getParameter(Qa));var et=1,lt=1;k.webgl_draw_buffers&&(et=x.getParameter(tf),lt=x.getParameter(ms));var J=!!k.oes_texture_float;if(J){var nt=x.createTexture();x.bindTexture(z0,nt),x.texImage2D(z0,0,f0,1,1,0,f0,zc,null);var bt=x.createFramebuffer();if(x.bindFramebuffer(Rc,bt),x.framebufferTexture2D(Rc,Z5,z0,nt,0),x.bindTexture(z0,null),x.checkFramebufferStatus(Rc)!==gs)J=!1;else{x.viewport(0,0,1,1),x.clearColor(1,0,0,1),x.clear(J5);var Mt=j.allocType(zc,4);x.readPixels(0,0,1,1,f0,zc,Mt),x.getError()?J=!1:(x.deleteFramebuffer(bt),x.deleteTexture(nt),J=Mt[0]===1),j.freeType(Mt)}}var Tt=typeof navigator!="undefined"&&(/MSIE/.test(navigator.userAgent)||/Trident\//.test(navigator.appVersion)||/Edge/.test(navigator.userAgent)),St=!0;if(!Tt){var Rt=x.createTexture(),qt=j.allocType(br,36);x.activeTexture(r1),x.bindTexture(fi,Rt),x.texImage2D(Lc,0,f0,3,3,0,f0,br,qt),j.freeType(qt),x.bindTexture(fi,null),x.deleteTexture(Rt),St=!x.getError()}return{colorBits:[x.getParameter(Xt),x.getParameter(ie),x.getParameter(fe),x.getParameter(nn)],depthBits:x.getParameter(ar),stencilBits:x.getParameter(kr),subpixelBits:x.getParameter(ht),extensions:Object.keys(k).filter(function(wt){return!!k[wt]}),maxAnisotropic:C,maxDrawbuffers:et,maxColorAttachments:lt,pointSizeDims:x.getParameter(rn),lineWidthDims:x.getParameter(yr),maxViewportDims:x.getParameter(po),maxCombinedTextureUnits:x.getParameter(Hr),maxCubeMapSize:x.getParameter(wn),maxRenderbufferSize:x.getParameter(Oa),maxTextureUnits:x.getParameter(Uo),maxTextureSize:x.getParameter(an),maxAttributes:x.getParameter(Kn),maxVertexUniforms:x.getParameter(Wo),maxVertexTextureUnits:x.getParameter(Br),maxVaryingVectors:x.getParameter(Fn),maxFragmentUniforms:x.getParameter(va),glsl:x.getParameter(vs),renderer:x.getParameter(sn),vendor:x.getParameter(Ao),version:x.getParameter(ma),readFloat:J,npotTextureCube:St}};function Pa(x){return!!x&&typeof x=="object"&&Array.isArray(x.shape)&&Array.isArray(x.stride)&&typeof x.offset=="number"&&x.shape.length===x.stride.length&&(Array.isArray(x.data)||t(x.data))}var ea=function(x){return Object.keys(x).map(function(k){return x[k]})},ef={shape:rb,flatten:nb};function eb(x,k,C){for(var et=0;et<k;++et)C[et]=x[et]}function ob(x,k,C,et){for(var lt=0,J=0;J<k;++J)for(var nt=x[J],bt=0;bt<C;++bt)et[lt++]=nt[bt]}function pp(x,k,C,et,lt,J){for(var nt=J,bt=0;bt<k;++bt)for(var Mt=x[bt],Tt=0;Tt<C;++Tt)for(var St=Mt[Tt],Rt=0;Rt<et;++Rt)lt[nt++]=St[Rt]}function vp(x,k,C,et,lt){for(var J=1,nt=C+1;nt<k.length;++nt)J*=k[nt];var bt=k[C];if(k.length-C===4){var Mt=k[C+1],Tt=k[C+2],St=k[C+3];for(nt=0;nt<bt;++nt)pp(x[nt],Mt,Tt,St,et,lt),lt+=J}else for(nt=0;nt<bt;++nt)vp(x[nt],k,C+1,et,lt),lt+=J}function nb(x,k,C,et){var lt=1;if(k.length)for(var J=0;J<k.length;++J)lt*=k[J];else lt=0;var nt=et||j.allocType(C,lt);switch(k.length){case 0:break;case 1:eb(x,k[0],nt);break;case 2:ob(x,k[0],k[1],nt);break;case 3:pp(x,k[0],k[1],k[2],nt,0);break;default:vp(x,k,0,nt,0)}return nt}function rb(x){for(var k=[],C=x;C.length;C=C[0])k.push(C.length);return k}var a1={"[object Int8Array]":5120,"[object Int16Array]":5122,"[object Int32Array]":5124,"[object Uint8Array]":5121,"[object Uint8ClampedArray]":5121,"[object Uint16Array]":5123,"[object Uint32Array]":5125,"[object Float32Array]":5126,"[object Float64Array]":5121,"[object ArrayBuffer]":5121},ab=5120,sb=5122,ib=5124,cb=5121,lb=5123,fb=5125,hb=5126,ub=5126,xs={int8:ab,int16:sb,int32:ib,uint8:cb,uint16:lb,uint32:fb,float:hb,float32:ub},db=35048,pb=35040,of={dynamic:db,stream:pb,static:35044},s1=ef.flatten,mp=ef.shape,gp=35044,vb=35040,i1=5121,c1=5126,R0=[];R0[5120]=1,R0[5122]=2,R0[5124]=4,R0[5121]=1,R0[5123]=2,R0[5125]=4,R0[5126]=4;function nf(x){return a1[Object.prototype.toString.call(x)]|0}function xp(x,k){for(var C=0;C<k.length;++C)x[C]=k[C]}function yp(x,k,C,et,lt,J,nt){for(var bt=0,Mt=0;Mt<C;++Mt)for(var Tt=0;Tt<et;++Tt)x[bt++]=k[lt*Mt+J*Tt+nt]}function mb(x,k,C,et){var lt=0,J={};function nt(W){this.id=lt++,this.buffer=x.createBuffer(),this.type=W,this.usage=gp,this.byteLength=0,this.dimension=1,this.dtype=i1,this.persistentData=null,C.profile&&(this.stats={size:0})}nt.prototype.bind=function(){x.bindBuffer(this.type,this.buffer)},nt.prototype.destroy=function(){qt(this)};var bt=[];function Mt(W,rt){var At=bt.pop();return At||(At=new nt(W)),At.bind(),Rt(At,rt,vb,0,1,!1),At}function Tt(W){bt.push(W)}function St(W,rt,At){W.byteLength=rt.byteLength,x.bufferData(W.type,rt,At)}function Rt(W,rt,At,jt,pt,Yt){var xt;if(W.usage=At,Array.isArray(rt)){if(W.dtype=jt||c1,rt.length>0){var It;if(Array.isArray(rt[0])){xt=mp(rt);for(var vt=1,$t=1;$t<xt.length;++$t)vt*=xt[$t];W.dimension=vt,It=s1(rt,xt,W.dtype),St(W,It,At),Yt?W.persistentData=It:j.freeType(It)}else if(typeof rt[0]=="number"){W.dimension=pt;var me=j.allocType(W.dtype,rt.length);xp(me,rt),St(W,me,At),Yt?W.persistentData=me:j.freeType(me)}else t(rt[0])?(W.dimension=rt[0].length,W.dtype=jt||nf(rt[0])||c1,It=s1(rt,[rt.length,rt[0].length],W.dtype),St(W,It,At),Yt?W.persistentData=It:j.freeType(It)):E.raise("invalid buffer data")}}else if(t(rt))W.dtype=jt||nf(rt),W.dimension=pt,St(W,rt,At),Yt&&(W.persistentData=new Uint8Array(new Uint8Array(rt.buffer)));else if(Pa(rt)){xt=rt.shape;var Ie=rt.stride,Gt=rt.offset,Lt=0,ut=0,Re=0,Be=0;xt.length===1?(Lt=xt[0],ut=1,Re=Ie[0],Be=0):xt.length===2?(Lt=xt[0],ut=xt[1],Re=Ie[0],Be=Ie[1]):E.raise("invalid shape"),W.dtype=jt||nf(rt.data)||c1,W.dimension=ut;var oe=j.allocType(W.dtype,Lt*ut);yp(oe,rt.data,Lt,ut,Re,Be,Gt),St(W,oe,At),Yt?W.persistentData=oe:j.freeType(oe)}else rt instanceof ArrayBuffer?(W.dtype=i1,W.dimension=pt,St(W,rt,At),Yt&&(W.persistentData=new Uint8Array(new Uint8Array(rt)))):E.raise("invalid buffer data")}function qt(W){k.bufferCount--,et(W);var rt=W.buffer;E(rt,"buffer must not be deleted already"),x.deleteBuffer(rt),W.buffer=null,delete J[W.id]}function wt(W,rt,At,jt){k.bufferCount++;var pt=new nt(rt);J[pt.id]=pt;function Yt(vt){var $t=gp,me=null,Ie=0,Gt=0,Lt=1;return Array.isArray(vt)||t(vt)||Pa(vt)||vt instanceof ArrayBuffer?me=vt:typeof vt=="number"?Ie=vt|0:vt&&(E.type(vt,"object","buffer arguments must be an object, a number or an array"),"data"in vt&&(E(me===null||Array.isArray(me)||t(me)||Pa(me),"invalid data for buffer"),me=vt.data),"usage"in vt&&(E.parameter(vt.usage,of,"invalid buffer usage"),$t=of[vt.usage]),"type"in vt&&(E.parameter(vt.type,xs,"invalid buffer type"),Gt=xs[vt.type]),"dimension"in vt&&(E.type(vt.dimension,"number","invalid dimension"),Lt=vt.dimension|0),"length"in vt&&(E.nni(Ie,"buffer length must be a nonnegative integer"),Ie=vt.length|0)),pt.bind(),me?Rt(pt,me,$t,Gt,Lt,jt):(Ie&&x.bufferData(pt.type,Ie,$t),pt.dtype=Gt||i1,pt.usage=$t,pt.dimension=Lt,pt.byteLength=Ie),C.profile&&(pt.stats.size=pt.byteLength*R0[pt.dtype]),Yt}function xt(vt,$t){E($t+vt.byteLength<=pt.byteLength,"invalid buffer subdata call, buffer is too small.  Can't write data of size "+vt.byteLength+" starting from offset "+$t+" to a buffer of size "+pt.byteLength),x.bufferSubData(pt.type,$t,vt)}function It(vt,$t){var me=($t||0)|0,Ie;if(pt.bind(),t(vt)||vt instanceof ArrayBuffer)xt(vt,me);else if(Array.isArray(vt)){if(vt.length>0)if(typeof vt[0]=="number"){var Gt=j.allocType(pt.dtype,vt.length);xp(Gt,vt),xt(Gt,me),j.freeType(Gt)}else if(Array.isArray(vt[0])||t(vt[0])){Ie=mp(vt);var Lt=s1(vt,Ie,pt.dtype);xt(Lt,me),j.freeType(Lt)}else E.raise("invalid buffer data")}else if(Pa(vt)){Ie=vt.shape;var ut=vt.stride,Re=0,Be=0,oe=0,Je=0;Ie.length===1?(Re=Ie[0],Be=1,oe=ut[0],Je=0):Ie.length===2?(Re=Ie[0],Be=Ie[1],oe=ut[0],Je=ut[1]):E.raise("invalid shape");var Fe=Array.isArray(vt.data)?pt.dtype:nf(vt.data),Ve=j.allocType(Fe,Re*Be);yp(Ve,vt.data,Re,Be,oe,Je,vt.offset),xt(Ve,me),j.freeType(Ve)}else E.raise("invalid data for buffer subdata");return Yt}return At||Yt(W),Yt._reglType="buffer",Yt._buffer=pt,Yt.subdata=It,C.profile&&(Yt.stats=pt.stats),Yt.destroy=function(){qt(pt)},Yt}function Ct(){ea(J).forEach(function(W){W.buffer=x.createBuffer(),x.bindBuffer(W.type,W.buffer),x.bufferData(W.type,W.persistentData||W.byteLength,W.usage)})}return C.profile&&(k.getTotalBufferSize=function(){var W=0;return Object.keys(J).forEach(function(rt){W+=J[rt].stats.size}),W}),{create:wt,createStream:Mt,destroyStream:Tt,clear:function(){ea(J).forEach(qt),bt.forEach(qt)},getBuffer:function(W){return W&&W._buffer instanceof nt?W._buffer:null},restore:Ct,_initBuffer:Rt}}var gb=0,xb=0,yb=1,bb=1,wb=4,_b=4,hi={points:gb,point:xb,lines:yb,line:bb,triangles:wb,triangle:_b,"line loop":2,"line strip":3,"triangle strip":5,"triangle fan":6},Mb=0,Sb=1,Nc=4,Eb=5120,ui=5121,bp=5122,di=5123,wp=5124,ys=5125,l1=34963,kb=35040,Ab=35044;function Tb(x,k,C,et){var lt={},J=0,nt={uint8:ui,uint16:di};k.oes_element_index_uint&&(nt.uint32=ys);function bt(Ct){this.id=J++,lt[this.id]=this,this.buffer=Ct,this.primType=Nc,this.vertCount=0,this.type=0}bt.prototype.bind=function(){this.buffer.bind()};var Mt=[];function Tt(Ct){var W=Mt.pop();return W||(W=new bt(C.create(null,l1,!0,!1)._buffer)),Rt(W,Ct,kb,-1,-1,0,0),W}function St(Ct){Mt.push(Ct)}function Rt(Ct,W,rt,At,jt,pt,Yt){Ct.buffer.bind();var xt;if(W){var It=Yt;!Yt&&(!t(W)||Pa(W)&&!t(W.data))&&(It=k.oes_element_index_uint?ys:di),C._initBuffer(Ct.buffer,W,rt,It,3)}else x.bufferData(l1,pt,rt),Ct.buffer.dtype=xt||ui,Ct.buffer.usage=rt,Ct.buffer.dimension=3,Ct.buffer.byteLength=pt;if(xt=Yt,!Yt){switch(Ct.buffer.dtype){case ui:case Eb:xt=ui;break;case di:case bp:xt=di;break;case ys:case wp:xt=ys;break;default:E.raise("unsupported type for element array")}Ct.buffer.dtype=xt}Ct.type=xt,E(xt!==ys||!!k.oes_element_index_uint,"32 bit element buffers not supported, enable oes_element_index_uint first");var vt=jt;vt<0&&(vt=Ct.buffer.byteLength,xt===di?vt>>=1:xt===ys&&(vt>>=2)),Ct.vertCount=vt;var $t=At;if(At<0){$t=Nc;var me=Ct.buffer.dimension;me===1&&($t=Mb),me===2&&($t=Sb),me===3&&($t=Nc)}Ct.primType=$t}function qt(Ct){et.elementsCount--,E(Ct.buffer!==null,"must not double destroy elements"),delete lt[Ct.id],Ct.buffer.destroy(),Ct.buffer=null}function wt(Ct,W){var rt=C.create(null,l1,!0),At=new bt(rt._buffer);et.elementsCount++;function jt(pt){if(!pt)rt(),At.primType=Nc,At.vertCount=0,At.type=ui;else if(typeof pt=="number")rt(pt),At.primType=Nc,At.vertCount=pt|0,At.type=ui;else{var Yt=null,xt=Ab,It=-1,vt=-1,$t=0,me=0;Array.isArray(pt)||t(pt)||Pa(pt)?Yt=pt:(E.type(pt,"object","invalid arguments for elements"),"data"in pt&&(Yt=pt.data,E(Array.isArray(Yt)||t(Yt)||Pa(Yt),"invalid data for element buffer")),"usage"in pt&&(E.parameter(pt.usage,of,"invalid element buffer usage"),xt=of[pt.usage]),"primitive"in pt&&(E.parameter(pt.primitive,hi,"invalid element buffer primitive"),It=hi[pt.primitive]),"count"in pt&&(E(typeof pt.count=="number"&&pt.count>=0,"invalid vertex count for elements"),vt=pt.count|0),"type"in pt&&(E.parameter(pt.type,nt,"invalid buffer type"),me=nt[pt.type]),"length"in pt?$t=pt.length|0:($t=vt,me===di||me===bp?$t*=2:(me===ys||me===wp)&&($t*=4))),Rt(At,Yt,xt,It,vt,$t,me)}return jt}return jt(Ct),jt._reglType="elements",jt._elements=At,jt.subdata=function(pt,Yt){return rt.subdata(pt,Yt),jt},jt.destroy=function(){qt(At)},jt}return{create:wt,createStream:Tt,destroyStream:St,getElements:function(Ct){return typeof Ct=="function"&&Ct._elements instanceof bt?Ct._elements:null},clear:function(){ea(lt).forEach(qt)}}}var _p=new Float32Array(1),Lb=new Uint32Array(_p.buffer),zb=5123;function Mp(x){for(var k=j.allocType(zb,x.length),C=0;C<x.length;++C)if(isNaN(x[C]))k[C]=65535;else if(x[C]===1/0)k[C]=31744;else if(x[C]===-1/0)k[C]=64512;else{_p[0]=x[C];var et=Lb[0],lt=et>>>31<<15,J=(et<<1>>>24)-127,nt=et>>13&1023;if(J<-24)k[C]=lt;else if(J<-14){var bt=-14-J;k[C]=lt+(nt+1024>>bt)}else J>15?k[C]=lt+31744:k[C]=lt+(J+15<<10)+nt}return k}function vn(x){return Array.isArray(x)||t(x)}var Sp=function(x){return!(x&x-1)&&!!x},Rb=34467,Za=3553,f1=34067,rf=34069,bs=6408,h1=6406,af=6407,Cc=6409,sf=6410,Ep=32854,u1=32855,kp=36194,Nb=32819,Cb=32820,Ob=33635,Pb=34042,d1=6402,cf=34041,p1=35904,v1=35906,pi=36193,m1=33776,g1=33777,x1=33778,y1=33779,Ap=35986,Tp=35987,Lp=34798,zp=35840,Rp=35841,Np=35842,Cp=35843,Op=36196,vi=5121,b1=5123,w1=5125,Oc=5126,Ib=10242,$b=10243,Fb=10497,_1=33071,Db=33648,qb=10240,Gb=10241,M1=9728,Hb=9729,S1=9984,Pp=9985,Ip=9986,E1=9987,Bb=33170,lf=4352,Ub=4353,jb=4354,Wb=34046,Vb=3317,Xb=37440,Yb=37441,Kb=37443,$p=37444,Pc=33984,Qb=[S1,Ip,Pp,E1],ff=[0,Cc,sf,af,bs],ga={};ga[Cc]=ga[h1]=ga[d1]=1,ga[cf]=ga[sf]=2,ga[af]=ga[p1]=3,ga[bs]=ga[v1]=4;function mi(x){return"[object "+x+"]"}var Fp=mi("HTMLCanvasElement"),Dp=mi("OffscreenCanvas"),qp=mi("CanvasRenderingContext2D"),Gp=mi("ImageBitmap"),Hp=mi("HTMLImageElement"),Bp=mi("HTMLVideoElement"),Zb=Object.keys(a1).concat([Fp,Dp,qp,Gp,Hp,Bp]),gi=[];gi[vi]=1,gi[Oc]=4,gi[pi]=2,gi[b1]=2,gi[w1]=4;var sr=[];sr[Ep]=2,sr[u1]=2,sr[kp]=2,sr[cf]=4,sr[m1]=.5,sr[g1]=.5,sr[x1]=1,sr[y1]=1,sr[Ap]=.5,sr[Tp]=1,sr[Lp]=1,sr[zp]=.5,sr[Rp]=.25,sr[Np]=.5,sr[Cp]=.25,sr[Op]=.5;function Up(x){return Array.isArray(x)&&(x.length===0||typeof x[0]=="number")}function jp(x){if(!Array.isArray(x))return!1;var k=x.length;return!(k===0||!vn(x[0]))}function ws(x){return Object.prototype.toString.call(x)}function Wp(x){return ws(x)===Fp}function Vp(x){return ws(x)===Dp}function Jb(x){return ws(x)===qp}function tw(x){return ws(x)===Gp}function ew(x){return ws(x)===Hp}function ow(x){return ws(x)===Bp}function k1(x){if(!x)return!1;var k=ws(x);return Zb.indexOf(k)>=0?!0:Up(x)||jp(x)||Pa(x)}function Xp(x){return a1[Object.prototype.toString.call(x)]|0}function nw(x,k){var C=k.length;switch(x.type){case vi:case b1:case w1:case Oc:var et=j.allocType(x.type,C);et.set(k),x.data=et;break;case pi:x.data=Mp(k);break;default:E.raise("unsupported texture type, must specify a typed array")}}function Yp(x,k){return j.allocType(x.type===pi?Oc:x.type,k)}function Kp(x,k){x.type===pi?(x.data=Mp(k),j.freeType(k)):x.data=k}function rw(x,k,C,et,lt,J){for(var nt=x.width,bt=x.height,Mt=x.channels,Tt=nt*bt*Mt,St=Yp(x,Tt),Rt=0,qt=0;qt<bt;++qt)for(var wt=0;wt<nt;++wt)for(var Ct=0;Ct<Mt;++Ct)St[Rt++]=k[C*wt+et*qt+lt*Ct+J];Kp(x,St)}function hf(x,k,C,et,lt,J){var nt;if(typeof sr[x]!="undefined"?nt=sr[x]:nt=ga[x]*gi[k],J&&(nt*=6),lt){for(var bt=0,Mt=C;Mt>=1;)bt+=nt*Mt*Mt,Mt/=2;return bt}else return nt*C*et}function aw(x,k,C,et,lt,J,nt){var bt={"don't care":lf,"dont care":lf,nice:jb,fast:Ub},Mt={repeat:Fb,clamp:_1,mirror:Db},Tt={nearest:M1,linear:Hb},St=e({mipmap:E1,"nearest mipmap nearest":S1,"linear mipmap nearest":Pp,"nearest mipmap linear":Ip,"linear mipmap linear":E1},Tt),Rt={none:0,browser:$p},qt={uint8:vi,rgba4:Nb,rgb565:Ob,"rgb5 a1":Cb},wt={alpha:h1,luminance:Cc,"luminance alpha":sf,rgb:af,rgba:bs,rgba4:Ep,"rgb5 a1":u1,rgb565:kp},Ct={};k.ext_srgb&&(wt.srgb=p1,wt.srgba=v1),k.oes_texture_float&&(qt.float32=qt.float=Oc),k.oes_texture_half_float&&(qt.float16=qt["half float"]=pi),k.webgl_depth_texture&&(e(wt,{depth:d1,"depth stencil":cf}),e(qt,{uint16:b1,uint32:w1,"depth stencil":Pb})),k.webgl_compressed_texture_s3tc&&e(Ct,{"rgb s3tc dxt1":m1,"rgba s3tc dxt1":g1,"rgba s3tc dxt3":x1,"rgba s3tc dxt5":y1}),k.webgl_compressed_texture_atc&&e(Ct,{"rgb atc":Ap,"rgba atc explicit alpha":Tp,"rgba atc interpolated alpha":Lp}),k.webgl_compressed_texture_pvrtc&&e(Ct,{"rgb pvrtc 4bppv1":zp,"rgb pvrtc 2bppv1":Rp,"rgba pvrtc 4bppv1":Np,"rgba pvrtc 2bppv1":Cp}),k.webgl_compressed_texture_etc1&&(Ct["rgb etc1"]=Op);var W=Array.prototype.slice.call(x.getParameter(Rb));Object.keys(Ct).forEach(function(N){var ot=Ct[N];W.indexOf(ot)>=0&&(wt[N]=ot)});var rt=Object.keys(wt);C.textureFormats=rt;var At=[];Object.keys(wt).forEach(function(N){var ot=wt[N];At[ot]=N});var jt=[];Object.keys(qt).forEach(function(N){var ot=qt[N];jt[ot]=N});var pt=[];Object.keys(Tt).forEach(function(N){var ot=Tt[N];pt[ot]=N});var Yt=[];Object.keys(St).forEach(function(N){var ot=St[N];Yt[ot]=N});var xt=[];Object.keys(Mt).forEach(function(N){var ot=Mt[N];xt[ot]=N});var It=rt.reduce(function(N,ot){var Q=wt[ot];return Q===Cc||Q===h1||Q===Cc||Q===sf||Q===d1||Q===cf||k.ext_srgb&&(Q===p1||Q===v1)?N[Q]=Q:Q===u1||ot.indexOf("rgba")>=0?N[Q]=bs:N[Q]=af,N},{});function vt(){this.internalformat=bs,this.format=bs,this.type=vi,this.compressed=!1,this.premultiplyAlpha=!1,this.flipY=!1,this.unpackAlignment=1,this.colorSpace=$p,this.width=0,this.height=0,this.channels=0}function $t(N,ot){N.internalformat=ot.internalformat,N.format=ot.format,N.type=ot.type,N.compressed=ot.compressed,N.premultiplyAlpha=ot.premultiplyAlpha,N.flipY=ot.flipY,N.unpackAlignment=ot.unpackAlignment,N.colorSpace=ot.colorSpace,N.width=ot.width,N.height=ot.height,N.channels=ot.channels}function me(N,ot){if(!(typeof ot!="object"||!ot)){if("premultiplyAlpha"in ot&&(E.type(ot.premultiplyAlpha,"boolean","invalid premultiplyAlpha"),N.premultiplyAlpha=ot.premultiplyAlpha),"flipY"in ot&&(E.type(ot.flipY,"boolean","invalid texture flip"),N.flipY=ot.flipY),"alignment"in ot&&(E.oneOf(ot.alignment,[1,2,4,8],"invalid texture unpack alignment"),N.unpackAlignment=ot.alignment),"colorSpace"in ot&&(E.parameter(ot.colorSpace,Rt,"invalid colorSpace"),N.colorSpace=Rt[ot.colorSpace]),"type"in ot){var Q=ot.type;E(k.oes_texture_float||!(Q==="float"||Q==="float32"),"you must enable the OES_texture_float extension in order to use floating point textures."),E(k.oes_texture_half_float||!(Q==="half float"||Q==="float16"),"you must enable the OES_texture_half_float extension in order to use 16-bit floating point textures."),E(k.webgl_depth_texture||!(Q==="uint16"||Q==="uint32"||Q==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),E.parameter(Q,qt,"invalid texture type"),N.type=qt[Q]}var Zt=N.width,to=N.height,L=N.channels,S=!1;"shape"in ot?(E(Array.isArray(ot.shape)&&ot.shape.length>=2,"shape must be an array"),Zt=ot.shape[0],to=ot.shape[1],ot.shape.length===3&&(L=ot.shape[2],E(L>0&&L<=4,"invalid number of channels"),S=!0),E(Zt>=0&&Zt<=C.maxTextureSize,"invalid width"),E(to>=0&&to<=C.maxTextureSize,"invalid height")):("radius"in ot&&(Zt=to=ot.radius,E(Zt>=0&&Zt<=C.maxTextureSize,"invalid radius")),"width"in ot&&(Zt=ot.width,E(Zt>=0&&Zt<=C.maxTextureSize,"invalid width")),"height"in ot&&(to=ot.height,E(to>=0&&to<=C.maxTextureSize,"invalid height")),"channels"in ot&&(L=ot.channels,E(L>0&&L<=4,"invalid number of channels"),S=!0)),N.width=Zt|0,N.height=to|0,N.channels=L|0;var I=!1;if("format"in ot){var U=ot.format;E(k.webgl_depth_texture||!(U==="depth"||U==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),E.parameter(U,wt,"invalid texture format");var V=N.internalformat=wt[U];N.format=It[V],U in qt&&("type"in ot||(N.type=qt[U])),U in Ct&&(N.compressed=!0),I=!0}!S&&I?N.channels=ga[N.format]:S&&!I?N.channels!==ff[N.format]&&(N.format=N.internalformat=ff[N.channels]):I&&S&&E(N.channels===ga[N.format],"number of channels inconsistent with specified format")}}function Ie(N){x.pixelStorei(Xb,N.flipY),x.pixelStorei(Yb,N.premultiplyAlpha),x.pixelStorei(Kb,N.colorSpace),x.pixelStorei(Vb,N.unpackAlignment)}function Gt(){vt.call(this),this.xOffset=0,this.yOffset=0,this.data=null,this.needsFree=!1,this.element=null,this.needsCopy=!1}function Lt(N,ot){var Q=null;if(k1(ot)?Q=ot:ot&&(E.type(ot,"object","invalid pixel data type"),me(N,ot),"x"in ot&&(N.xOffset=ot.x|0),"y"in ot&&(N.yOffset=ot.y|0),k1(ot.data)&&(Q=ot.data)),E(!N.compressed||Q instanceof Uint8Array,"compressed texture data must be stored in a uint8array"),ot.copy){E(!Q,"can not specify copy and data field for the same texture");var Zt=lt.viewportWidth,to=lt.viewportHeight;N.width=N.width||Zt-N.xOffset,N.height=N.height||to-N.yOffset,N.needsCopy=!0,E(N.xOffset>=0&&N.xOffset<Zt&&N.yOffset>=0&&N.yOffset<to&&N.width>0&&N.width<=Zt&&N.height>0&&N.height<=to,"copy texture read out of bounds")}else if(!Q)N.width=N.width||1,N.height=N.height||1,N.channels=N.channels||4;else if(t(Q))N.channels=N.channels||4,N.data=Q,!("type"in ot)&&N.type===vi&&(N.type=Xp(Q));else if(Up(Q))N.channels=N.channels||4,nw(N,Q),N.alignment=1,N.needsFree=!0;else if(Pa(Q)){var L=Q.data;!Array.isArray(L)&&N.type===vi&&(N.type=Xp(L));var S=Q.shape,I=Q.stride,U,V,D,$,H,z;S.length===3?(D=S[2],z=I[2]):(E(S.length===2,"invalid ndarray pixel data, must be 2 or 3D"),D=1,z=1),U=S[0],V=S[1],$=I[0],H=I[1],N.alignment=1,N.width=U,N.height=V,N.channels=D,N.format=N.internalformat=ff[D],N.needsFree=!0,rw(N,L,$,H,z,Q.offset)}else if(Wp(Q)||Vp(Q)||Jb(Q))Wp(Q)||Vp(Q)?N.element=Q:N.element=Q.canvas,N.width=N.element.width,N.height=N.element.height,N.channels=4;else if(tw(Q))N.element=Q,N.width=Q.width,N.height=Q.height,N.channels=4;else if(ew(Q))N.element=Q,N.width=Q.naturalWidth,N.height=Q.naturalHeight,N.channels=4;else if(ow(Q))N.element=Q,N.width=Q.videoWidth,N.height=Q.videoHeight,N.channels=4;else if(jp(Q)){var P=N.width||Q[0].length,T=N.height||Q.length,B=N.channels;vn(Q[0][0])?B=B||Q[0][0].length:B=B||1;for(var Y=ef.shape(Q),st=1,ft=0;ft<Y.length;++ft)st*=Y[ft];var at=Yp(N,st);ef.flatten(Q,Y,"",at),Kp(N,at),N.alignment=1,N.width=P,N.height=T,N.channels=B,N.format=N.internalformat=ff[B],N.needsFree=!0}N.type===Oc?E(C.extensions.indexOf("oes_texture_float")>=0,"oes_texture_float extension not enabled"):N.type===pi&&E(C.extensions.indexOf("oes_texture_half_float")>=0,"oes_texture_half_float extension not enabled")}function ut(N,ot,Q){var Zt=N.element,to=N.data,L=N.internalformat,S=N.format,I=N.type,U=N.width,V=N.height;Ie(N),Zt?x.texImage2D(ot,Q,S,S,I,Zt):N.compressed?x.compressedTexImage2D(ot,Q,L,U,V,0,to):N.needsCopy?(et(),x.copyTexImage2D(ot,Q,S,N.xOffset,N.yOffset,U,V,0)):x.texImage2D(ot,Q,S,U,V,0,S,I,to||null)}function Re(N,ot,Q,Zt,to){var L=N.element,S=N.data,I=N.internalformat,U=N.format,V=N.type,D=N.width,$=N.height;Ie(N),L?x.texSubImage2D(ot,to,Q,Zt,U,V,L):N.compressed?x.compressedTexSubImage2D(ot,to,Q,Zt,I,D,$,S):N.needsCopy?(et(),x.copyTexSubImage2D(ot,to,Q,Zt,N.xOffset,N.yOffset,D,$)):x.texSubImage2D(ot,to,Q,Zt,D,$,U,V,S)}var Be=[];function oe(){return Be.pop()||new Gt}function Je(N){N.needsFree&&j.freeType(N.data),Gt.call(N),Be.push(N)}function Fe(){vt.call(this),this.genMipmaps=!1,this.mipmapHint=lf,this.mipmask=0,this.images=Array(16)}function Ve(N,ot,Q){var Zt=N.images[0]=oe();N.mipmask=1,Zt.width=N.width=ot,Zt.height=N.height=Q,Zt.channels=N.channels=4}function yo(N,ot){var Q=null;if(k1(ot))Q=N.images[0]=oe(),$t(Q,N),Lt(Q,ot),N.mipmask=1;else if(me(N,ot),Array.isArray(ot.mipmap))for(var Zt=ot.mipmap,to=0;to<Zt.length;++to)Q=N.images[to]=oe(),$t(Q,N),Q.width>>=to,Q.height>>=to,Lt(Q,Zt[to]),N.mipmask|=1<<to;else Q=N.images[0]=oe(),$t(Q,N),Lt(Q,ot),N.mipmask=1;$t(N,N.images[0]),N.compressed&&(N.internalformat===m1||N.internalformat===g1||N.internalformat===x1||N.internalformat===y1)&&E(N.width%4===0&&N.height%4===0,"for compressed texture formats, mipmap level 0 must have width and height that are a multiple of 4")}function Mn(N,ot){for(var Q=N.images,Zt=0;Zt<Q.length;++Zt){if(!Q[Zt])return;ut(Q[Zt],ot,Zt)}}var Dn=[];function ao(){var N=Dn.pop()||new Fe;vt.call(N),N.mipmask=0;for(var ot=0;ot<16;++ot)N.images[ot]=null;return N}function zn(N){for(var ot=N.images,Q=0;Q<ot.length;++Q)ot[Q]&&Je(ot[Q]),ot[Q]=null;Dn.push(N)}function Vo(){this.minFilter=M1,this.magFilter=M1,this.wrapS=_1,this.wrapT=_1,this.anisotropic=1,this.genMipmaps=!1,this.mipmapHint=lf}function Sn(N,ot){if("min"in ot){var Q=ot.min;E.parameter(Q,St),N.minFilter=St[Q],Qb.indexOf(N.minFilter)>=0&&!("faces"in ot)&&(N.genMipmaps=!0)}if("mag"in ot){var Zt=ot.mag;E.parameter(Zt,Tt),N.magFilter=Tt[Zt]}var to=N.wrapS,L=N.wrapT;if("wrap"in ot){var S=ot.wrap;typeof S=="string"?(E.parameter(S,Mt),to=L=Mt[S]):Array.isArray(S)&&(E.parameter(S[0],Mt),E.parameter(S[1],Mt),to=Mt[S[0]],L=Mt[S[1]])}else{if("wrapS"in ot){var I=ot.wrapS;E.parameter(I,Mt),to=Mt[I]}if("wrapT"in ot){var U=ot.wrapT;E.parameter(U,Mt),L=Mt[U]}}if(N.wrapS=to,N.wrapT=L,"anisotropic"in ot){var V=ot.anisotropic;E(typeof V=="number"&&V>=1&&V<=C.maxAnisotropic,"aniso samples must be between 1 and "),N.anisotropic=ot.anisotropic}if("mipmap"in ot){var D=!1;switch(typeof ot.mipmap){case"string":E.parameter(ot.mipmap,bt,"invalid mipmap hint"),N.mipmapHint=bt[ot.mipmap],N.genMipmaps=!0,D=!0;break;case"boolean":D=N.genMipmaps=ot.mipmap;break;case"object":E(Array.isArray(ot.mipmap),"invalid mipmap type"),N.genMipmaps=!1,D=!0;break;default:E.raise("invalid mipmap type")}D&&!("min"in ot)&&(N.minFilter=S1)}}function Rn(N,ot){x.texParameteri(ot,Gb,N.minFilter),x.texParameteri(ot,qb,N.magFilter),x.texParameteri(ot,Ib,N.wrapS),x.texParameteri(ot,$b,N.wrapT),k.ext_texture_filter_anisotropic&&x.texParameteri(ot,Wb,N.anisotropic),N.genMipmaps&&(x.hint(Bb,N.mipmapHint),x.generateMipmap(ot))}var Nn=0,Qn={},ir=C.maxTextureUnits,mn=Array(ir).map(function(){return null});function Ue(N){vt.call(this),this.mipmask=0,this.internalformat=bs,this.id=Nn++,this.refCount=1,this.target=N,this.texture=x.createTexture(),this.unit=-1,this.bindCount=0,this.texInfo=new Vo,nt.profile&&(this.stats={size:0})}function cr(N){x.activeTexture(Pc),x.bindTexture(N.target,N.texture)}function To(){var N=mn[0];N?x.bindTexture(N.target,N.texture):x.bindTexture(Za,null)}function we(N){var ot=N.texture;E(ot,"must not double destroy texture");var Q=N.unit,Zt=N.target;Q>=0&&(x.activeTexture(Pc+Q),x.bindTexture(Zt,null),mn[Q]=null),x.deleteTexture(ot),N.texture=null,N.params=null,N.pixels=null,N.refCount=0,delete Qn[N.id],J.textureCount--}e(Ue.prototype,{bind:function(){var N=this;N.bindCount+=1;var ot=N.unit;if(ot<0){for(var Q=0;Q<ir;++Q){var Zt=mn[Q];if(Zt){if(Zt.bindCount>0)continue;Zt.unit=-1}mn[Q]=N,ot=Q;break}ot>=ir&&E.raise("insufficient number of texture units"),nt.profile&&J.maxTextureUnits<ot+1&&(J.maxTextureUnits=ot+1),N.unit=ot,x.activeTexture(Pc+ot),x.bindTexture(N.target,N.texture)}return ot},unbind:function(){this.bindCount-=1},decRef:function(){--this.refCount<=0&&we(this)}});function no(N,ot){var Q=new Ue(Za);Qn[Q.id]=Q,J.textureCount++;function Zt(S,I){var U=Q.texInfo;Vo.call(U);var V=ao();return typeof S=="number"?typeof I=="number"?Ve(V,S|0,I|0):Ve(V,S|0,S|0):S?(E.type(S,"object","invalid arguments to regl.texture"),Sn(U,S),yo(V,S)):Ve(V,1,1),U.genMipmaps&&(V.mipmask=(V.width<<1)-1),Q.mipmask=V.mipmask,$t(Q,V),E.texture2D(U,V,C),Q.internalformat=V.internalformat,Zt.width=V.width,Zt.height=V.height,cr(Q),Mn(V,Za),Rn(U,Za),To(),zn(V),nt.profile&&(Q.stats.size=hf(Q.internalformat,Q.type,V.width,V.height,U.genMipmaps,!1)),Zt.format=At[Q.internalformat],Zt.type=jt[Q.type],Zt.mag=pt[U.magFilter],Zt.min=Yt[U.minFilter],Zt.wrapS=xt[U.wrapS],Zt.wrapT=xt[U.wrapT],Zt}function to(S,I,U,V){E(!!S,"must specify image data");var D=I|0,$=U|0,H=V|0,z=oe();return $t(z,Q),z.width=0,z.height=0,Lt(z,S),z.width=z.width||(Q.width>>H)-D,z.height=z.height||(Q.height>>H)-$,E(Q.type===z.type&&Q.format===z.format&&Q.internalformat===z.internalformat,"incompatible format for texture.subimage"),E(D>=0&&$>=0&&D+z.width<=Q.width&&$+z.height<=Q.height,"texture.subimage write out of bounds"),E(Q.mipmask&1<<H,"missing mipmap data"),E(z.data||z.element||z.needsCopy,"missing image data"),cr(Q),Re(z,Za,D,$,H),To(),Je(z),Zt}function L(S,I){var U=S|0,V=I|0||U;if(U===Q.width&&V===Q.height)return Zt;Zt.width=Q.width=U,Zt.height=Q.height=V,cr(Q);for(var D=0;Q.mipmask>>D;++D){var $=U>>D,H=V>>D;if(!$||!H)break;x.texImage2D(Za,D,Q.format,$,H,0,Q.format,Q.type,null)}return To(),nt.profile&&(Q.stats.size=hf(Q.internalformat,Q.type,U,V,!1,!1)),Zt}return Zt(N,ot),Zt.subimage=to,Zt.resize=L,Zt._reglType="texture2d",Zt._texture=Q,nt.profile&&(Zt.stats=Q.stats),Zt.destroy=function(){Q.decRef()},Zt}function vo(N,ot,Q,Zt,to,L){var S=new Ue(f1);Qn[S.id]=S,J.cubeCount++;var I=new Array(6);function U($,H,z,P,T,B){var Y,st=S.texInfo;for(Vo.call(st),Y=0;Y<6;++Y)I[Y]=ao();if(typeof $=="number"||!$){var ft=$|0||1;for(Y=0;Y<6;++Y)Ve(I[Y],ft,ft)}else if(typeof $=="object")if(H)yo(I[0],$),yo(I[1],H),yo(I[2],z),yo(I[3],P),yo(I[4],T),yo(I[5],B);else if(Sn(st,$),me(S,$),"faces"in $){var at=$.faces;for(E(Array.isArray(at)&&at.length===6,"cube faces must be a length 6 array"),Y=0;Y<6;++Y)E(typeof at[Y]=="object"&&!!at[Y],"invalid input for cube map face"),$t(I[Y],S),yo(I[Y],at[Y])}else for(Y=0;Y<6;++Y)yo(I[Y],$);else E.raise("invalid arguments to cube map");for($t(S,I[0]),C.npotTextureCube||E(Sp(S.width)&&Sp(S.height),"your browser does not support non power or two texture dimensions"),st.genMipmaps?S.mipmask=(I[0].width<<1)-1:S.mipmask=I[0].mipmask,E.textureCube(S,st,I,C),S.internalformat=I[0].internalformat,U.width=I[0].width,U.height=I[0].height,cr(S),Y=0;Y<6;++Y)Mn(I[Y],rf+Y);for(Rn(st,f1),To(),nt.profile&&(S.stats.size=hf(S.internalformat,S.type,U.width,U.height,st.genMipmaps,!0)),U.format=At[S.internalformat],U.type=jt[S.type],U.mag=pt[st.magFilter],U.min=Yt[st.minFilter],U.wrapS=xt[st.wrapS],U.wrapT=xt[st.wrapT],Y=0;Y<6;++Y)zn(I[Y]);return U}function V($,H,z,P,T){E(!!H,"must specify image data"),E(typeof $=="number"&&$===($|0)&&$>=0&&$<6,"invalid face");var B=z|0,Y=P|0,st=T|0,ft=oe();return $t(ft,S),ft.width=0,ft.height=0,Lt(ft,H),ft.width=ft.width||(S.width>>st)-B,ft.height=ft.height||(S.height>>st)-Y,E(S.type===ft.type&&S.format===ft.format&&S.internalformat===ft.internalformat,"incompatible format for texture.subimage"),E(B>=0&&Y>=0&&B+ft.width<=S.width&&Y+ft.height<=S.height,"texture.subimage write out of bounds"),E(S.mipmask&1<<st,"missing mipmap data"),E(ft.data||ft.element||ft.needsCopy,"missing image data"),cr(S),Re(ft,rf+$,B,Y,st),To(),Je(ft),U}function D($){var H=$|0;if(H!==S.width){U.width=S.width=H,U.height=S.height=H,cr(S);for(var z=0;z<6;++z)for(var P=0;S.mipmask>>P;++P)x.texImage2D(rf+z,P,S.format,H>>P,H>>P,0,S.format,S.type,null);return To(),nt.profile&&(S.stats.size=hf(S.internalformat,S.type,U.width,U.height,!1,!0)),U}}return U(N,ot,Q,Zt,to,L),U.subimage=V,U.resize=D,U._reglType="textureCube",U._texture=S,nt.profile&&(U.stats=S.stats),U.destroy=function(){S.decRef()},U}function gn(){for(var N=0;N<ir;++N)x.activeTexture(Pc+N),x.bindTexture(Za,null),mn[N]=null;ea(Qn).forEach(we),J.cubeCount=0,J.textureCount=0}nt.profile&&(J.getTotalTextureSize=function(){var N=0;return Object.keys(Qn).forEach(function(ot){N+=Qn[ot].stats.size}),N});function t0(){for(var N=0;N<ir;++N){var ot=mn[N];ot&&(ot.bindCount=0,ot.unit=-1,mn[N]=null)}ea(Qn).forEach(function(Q){Q.texture=x.createTexture(),x.bindTexture(Q.target,Q.texture);for(var Zt=0;Zt<32;++Zt)if(Q.mipmask&1<<Zt)if(Q.target===Za)x.texImage2D(Za,Zt,Q.internalformat,Q.width>>Zt,Q.height>>Zt,0,Q.internalformat,Q.type,null);else for(var to=0;to<6;++to)x.texImage2D(rf+to,Zt,Q.internalformat,Q.width>>Zt,Q.height>>Zt,0,Q.internalformat,Q.type,null);Rn(Q.texInfo,Q.target)})}function Ts(){for(var N=0;N<ir;++N){var ot=mn[N];ot&&(ot.bindCount=0,ot.unit=-1,mn[N]=null),x.activeTexture(Pc+N),x.bindTexture(Za,null),x.bindTexture(f1,null)}}return{create2D:no,createCube:vo,clear:gn,getTexture:function(N){return null},restore:t0,refresh:Ts}}var N0=36161,uf=32854,Qp=32855,Zp=36194,Jp=33189,tv=36168,ev=34041,ov=35907,nv=34836,rv=34842,av=34843,Ia=[];Ia[uf]=2,Ia[Qp]=2,Ia[Zp]=2,Ia[Jp]=2,Ia[tv]=1,Ia[ev]=4,Ia[ov]=4,Ia[nv]=16,Ia[rv]=8,Ia[av]=6;function sv(x,k,C){return Ia[x]*k*C}var sw=function(x,k,C,et,lt){var J={rgba4:uf,rgb565:Zp,"rgb5 a1":Qp,depth:Jp,stencil:tv,"depth stencil":ev};k.ext_srgb&&(J.srgba=ov),k.ext_color_buffer_half_float&&(J.rgba16f=rv,J.rgb16f=av),k.webgl_color_buffer_float&&(J.rgba32f=nv);var nt=[];Object.keys(J).forEach(function(wt){var Ct=J[wt];nt[Ct]=wt});var bt=0,Mt={};function Tt(wt){this.id=bt++,this.refCount=1,this.renderbuffer=wt,this.format=uf,this.width=0,this.height=0,lt.profile&&(this.stats={size:0})}Tt.prototype.decRef=function(){--this.refCount<=0&&St(this)};function St(wt){var Ct=wt.renderbuffer;E(Ct,"must not double destroy renderbuffer"),x.bindRenderbuffer(N0,null),x.deleteRenderbuffer(Ct),wt.renderbuffer=null,wt.refCount=0,delete Mt[wt.id],et.renderbufferCount--}function Rt(wt,Ct){var W=new Tt(x.createRenderbuffer());Mt[W.id]=W,et.renderbufferCount++;function rt(jt,pt){var Yt=0,xt=0,It=uf;if(typeof jt=="object"&&jt){var vt=jt;if("shape"in vt){var $t=vt.shape;E(Array.isArray($t)&&$t.length>=2,"invalid renderbuffer shape"),Yt=$t[0]|0,xt=$t[1]|0}else"radius"in vt&&(Yt=xt=vt.radius|0),"width"in vt&&(Yt=vt.width|0),"height"in vt&&(xt=vt.height|0);"format"in vt&&(E.parameter(vt.format,J,"invalid renderbuffer format"),It=J[vt.format])}else typeof jt=="number"?(Yt=jt|0,typeof pt=="number"?xt=pt|0:xt=Yt):jt?E.raise("invalid arguments to renderbuffer constructor"):Yt=xt=1;if(E(Yt>0&&xt>0&&Yt<=C.maxRenderbufferSize&&xt<=C.maxRenderbufferSize,"invalid renderbuffer size"),!(Yt===W.width&&xt===W.height&&It===W.format))return rt.width=W.width=Yt,rt.height=W.height=xt,W.format=It,x.bindRenderbuffer(N0,W.renderbuffer),x.renderbufferStorage(N0,It,Yt,xt),E(x.getError()===0,"invalid render buffer format"),lt.profile&&(W.stats.size=sv(W.format,W.width,W.height)),rt.format=nt[W.format],rt}function At(jt,pt){var Yt=jt|0,xt=pt|0||Yt;return Yt===W.width&&xt===W.height||(E(Yt>0&&xt>0&&Yt<=C.maxRenderbufferSize&&xt<=C.maxRenderbufferSize,"invalid renderbuffer size"),rt.width=W.width=Yt,rt.height=W.height=xt,x.bindRenderbuffer(N0,W.renderbuffer),x.renderbufferStorage(N0,W.format,Yt,xt),E(x.getError()===0,"invalid render buffer format"),lt.profile&&(W.stats.size=sv(W.format,W.width,W.height))),rt}return rt(wt,Ct),rt.resize=At,rt._reglType="renderbuffer",rt._renderbuffer=W,lt.profile&&(rt.stats=W.stats),rt.destroy=function(){W.decRef()},rt}lt.profile&&(et.getTotalRenderbufferSize=function(){var wt=0;return Object.keys(Mt).forEach(function(Ct){wt+=Mt[Ct].stats.size}),wt});function qt(){ea(Mt).forEach(function(wt){wt.renderbuffer=x.createRenderbuffer(),x.bindRenderbuffer(N0,wt.renderbuffer),x.renderbufferStorage(N0,wt.format,wt.width,wt.height)}),x.bindRenderbuffer(N0,null)}return{create:Rt,clear:function(){ea(Mt).forEach(St)},restore:qt}},h0=36160,A1=36161,_s=3553,df=34069,iv=36064,cv=36096,lv=36128,fv=33306,hv=36053,iw=36054,cw=36055,lw=36057,fw=36061,hw=36193,uw=5121,dw=5126,uv=6407,dv=6408,pw=6402,vw=[uv,dv],T1=[];T1[dv]=4,T1[uv]=3;var pf=[];pf[uw]=1,pf[dw]=4,pf[hw]=2;var mw=32854,gw=32855,xw=36194,yw=33189,bw=36168,pv=34041,ww=35907,_w=34836,Mw=34842,Sw=34843,Ew=[mw,gw,xw,ww,Mw,Sw,_w],xi={};xi[hv]="complete",xi[iw]="incomplete attachment",xi[lw]="incomplete dimensions",xi[cw]="incomplete, missing attachment",xi[fw]="unsupported";function kw(x,k,C,et,lt,J){var nt={cur:null,next:null,dirty:!1,setFBO:null},bt=["rgba"],Mt=["rgba4","rgb565","rgb5 a1"];k.ext_srgb&&Mt.push("srgba"),k.ext_color_buffer_half_float&&Mt.push("rgba16f","rgb16f"),k.webgl_color_buffer_float&&Mt.push("rgba32f");var Tt=["uint8"];k.oes_texture_half_float&&Tt.push("half float","float16"),k.oes_texture_float&&Tt.push("float","float32");function St(Gt,Lt,ut){this.target=Gt,this.texture=Lt,this.renderbuffer=ut;var Re=0,Be=0;Lt?(Re=Lt.width,Be=Lt.height):ut&&(Re=ut.width,Be=ut.height),this.width=Re,this.height=Be}function Rt(Gt){Gt&&(Gt.texture&&Gt.texture._texture.decRef(),Gt.renderbuffer&&Gt.renderbuffer._renderbuffer.decRef())}function qt(Gt,Lt,ut){if(Gt)if(Gt.texture){var Re=Gt.texture._texture,Be=Math.max(1,Re.width),oe=Math.max(1,Re.height);E(Be===Lt&&oe===ut,"inconsistent width/height for supplied texture"),Re.refCount+=1}else{var Je=Gt.renderbuffer._renderbuffer;E(Je.width===Lt&&Je.height===ut,"inconsistent width/height for renderbuffer"),Je.refCount+=1}}function wt(Gt,Lt){Lt&&(Lt.texture?x.framebufferTexture2D(h0,Gt,Lt.target,Lt.texture._texture.texture,0):x.framebufferRenderbuffer(h0,Gt,A1,Lt.renderbuffer._renderbuffer.renderbuffer))}function Ct(Gt){var Lt=_s,ut=null,Re=null,Be=Gt;typeof Gt=="object"&&(Be=Gt.data,"target"in Gt&&(Lt=Gt.target|0)),E.type(Be,"function","invalid attachment data");var oe=Be._reglType;return oe==="texture2d"?(ut=Be,E(Lt===_s)):oe==="textureCube"?(ut=Be,E(Lt>=df&&Lt<df+6,"invalid cube map target")):oe==="renderbuffer"?(Re=Be,Lt=A1):E.raise("invalid regl object for attachment"),new St(Lt,ut,Re)}function W(Gt,Lt,ut,Re,Be){if(ut){var oe=et.create2D({width:Gt,height:Lt,format:Re,type:Be});return oe._texture.refCount=0,new St(_s,oe,null)}else{var Je=lt.create({width:Gt,height:Lt,format:Re});return Je._renderbuffer.refCount=0,new St(A1,null,Je)}}function rt(Gt){return Gt&&(Gt.texture||Gt.renderbuffer)}function At(Gt,Lt,ut){Gt&&(Gt.texture?Gt.texture.resize(Lt,ut):Gt.renderbuffer&&Gt.renderbuffer.resize(Lt,ut),Gt.width=Lt,Gt.height=ut)}var jt=0,pt={};function Yt(){this.id=jt++,pt[this.id]=this,this.framebuffer=x.createFramebuffer(),this.width=0,this.height=0,this.colorAttachments=[],this.depthAttachment=null,this.stencilAttachment=null,this.depthStencilAttachment=null}function xt(Gt){Gt.colorAttachments.forEach(Rt),Rt(Gt.depthAttachment),Rt(Gt.stencilAttachment),Rt(Gt.depthStencilAttachment)}function It(Gt){var Lt=Gt.framebuffer;E(Lt,"must not double destroy framebuffer"),x.deleteFramebuffer(Lt),Gt.framebuffer=null,J.framebufferCount--,delete pt[Gt.id]}function vt(Gt){var Lt;x.bindFramebuffer(h0,Gt.framebuffer);var ut=Gt.colorAttachments;for(Lt=0;Lt<ut.length;++Lt)wt(iv+Lt,ut[Lt]);for(Lt=ut.length;Lt<C.maxColorAttachments;++Lt)x.framebufferTexture2D(h0,iv+Lt,_s,null,0);x.framebufferTexture2D(h0,fv,_s,null,0),x.framebufferTexture2D(h0,cv,_s,null,0),x.framebufferTexture2D(h0,lv,_s,null,0),wt(cv,Gt.depthAttachment),wt(lv,Gt.stencilAttachment),wt(fv,Gt.depthStencilAttachment);var Re=x.checkFramebufferStatus(h0);!x.isContextLost()&&Re!==hv&&E.raise("framebuffer configuration not supported, status = "+xi[Re]),x.bindFramebuffer(h0,nt.next?nt.next.framebuffer:null),nt.cur=nt.next,x.getError()}function $t(Gt,Lt){var ut=new Yt;J.framebufferCount++;function Re(oe,Je){var Fe;E(nt.next!==ut,"can not update framebuffer which is currently in use");var Ve=0,yo=0,Mn=!0,Dn=!0,ao=null,zn=!0,Vo="rgba",Sn="uint8",Rn=1,Nn=null,Qn=null,ir=null,mn=!1;if(typeof oe=="number")Ve=oe|0,yo=Je|0||Ve;else if(!oe)Ve=yo=1;else{E.type(oe,"object","invalid arguments for framebuffer");var Ue=oe;if("shape"in Ue){var cr=Ue.shape;E(Array.isArray(cr)&&cr.length>=2,"invalid shape for framebuffer"),Ve=cr[0],yo=cr[1]}else"radius"in Ue&&(Ve=yo=Ue.radius),"width"in Ue&&(Ve=Ue.width),"height"in Ue&&(yo=Ue.height);("color"in Ue||"colors"in Ue)&&(ao=Ue.color||Ue.colors,Array.isArray(ao)&&E(ao.length===1||k.webgl_draw_buffers,"multiple render targets not supported")),ao||("colorCount"in Ue&&(Rn=Ue.colorCount|0,E(Rn>0,"invalid color buffer count")),"colorTexture"in Ue&&(zn=!!Ue.colorTexture,Vo="rgba4"),"colorType"in Ue&&(Sn=Ue.colorType,zn?(E(k.oes_texture_float||!(Sn==="float"||Sn==="float32"),"you must enable OES_texture_float in order to use floating point framebuffer objects"),E(k.oes_texture_half_float||!(Sn==="half float"||Sn==="float16"),"you must enable OES_texture_half_float in order to use 16-bit floating point framebuffer objects")):Sn==="half float"||Sn==="float16"?(E(k.ext_color_buffer_half_float,"you must enable EXT_color_buffer_half_float to use 16-bit render buffers"),Vo="rgba16f"):(Sn==="float"||Sn==="float32")&&(E(k.webgl_color_buffer_float,"you must enable WEBGL_color_buffer_float in order to use 32-bit floating point renderbuffers"),Vo="rgba32f"),E.oneOf(Sn,Tt,"invalid color type")),"colorFormat"in Ue&&(Vo=Ue.colorFormat,bt.indexOf(Vo)>=0?zn=!0:Mt.indexOf(Vo)>=0?zn=!1:zn?E.oneOf(Ue.colorFormat,bt,"invalid color format for texture"):E.oneOf(Ue.colorFormat,Mt,"invalid color format for renderbuffer"))),("depthTexture"in Ue||"depthStencilTexture"in Ue)&&(mn=!!(Ue.depthTexture||Ue.depthStencilTexture),E(!mn||k.webgl_depth_texture,"webgl_depth_texture extension not supported")),"depth"in Ue&&(typeof Ue.depth=="boolean"?Mn=Ue.depth:(Nn=Ue.depth,Dn=!1)),"stencil"in Ue&&(typeof Ue.stencil=="boolean"?Dn=Ue.stencil:(Qn=Ue.stencil,Mn=!1)),"depthStencil"in Ue&&(typeof Ue.depthStencil=="boolean"?Mn=Dn=Ue.depthStencil:(ir=Ue.depthStencil,Mn=!1,Dn=!1))}var To=null,we=null,no=null,vo=null;if(Array.isArray(ao))To=ao.map(Ct);else if(ao)To=[Ct(ao)];else for(To=new Array(Rn),Fe=0;Fe<Rn;++Fe)To[Fe]=W(Ve,yo,zn,Vo,Sn);E(k.webgl_draw_buffers||To.length<=1,"you must enable the WEBGL_draw_buffers extension in order to use multiple color buffers."),E(To.length<=C.maxColorAttachments,"too many color attachments, not supported"),Ve=Ve||To[0].width,yo=yo||To[0].height,Nn?we=Ct(Nn):Mn&&!Dn&&(we=W(Ve,yo,mn,"depth","uint32")),Qn?no=Ct(Qn):Dn&&!Mn&&(no=W(Ve,yo,!1,"stencil","uint8")),ir?vo=Ct(ir):!Nn&&!Qn&&Dn&&Mn&&(vo=W(Ve,yo,mn,"depth stencil","depth stencil")),E(!!Nn+!!Qn+!!ir<=1,"invalid framebuffer configuration, can specify exactly one depth/stencil attachment");var gn=null;for(Fe=0;Fe<To.length;++Fe)if(qt(To[Fe],Ve,yo),E(!To[Fe]||To[Fe].texture&&vw.indexOf(To[Fe].texture._texture.format)>=0||To[Fe].renderbuffer&&Ew.indexOf(To[Fe].renderbuffer._renderbuffer.format)>=0,"framebuffer color attachment "+Fe+" is invalid"),To[Fe]&&To[Fe].texture){var t0=T1[To[Fe].texture._texture.format]*pf[To[Fe].texture._texture.type];gn===null?gn=t0:E(gn===t0,"all color attachments much have the same number of bits per pixel.")}return qt(we,Ve,yo),E(!we||we.texture&&we.texture._texture.format===pw||we.renderbuffer&&we.renderbuffer._renderbuffer.format===yw,"invalid depth attachment for framebuffer object"),qt(no,Ve,yo),E(!no||no.renderbuffer&&no.renderbuffer._renderbuffer.format===bw,"invalid stencil attachment for framebuffer object"),qt(vo,Ve,yo),E(!vo||vo.texture&&vo.texture._texture.format===pv||vo.renderbuffer&&vo.renderbuffer._renderbuffer.format===pv,"invalid depth-stencil attachment for framebuffer object"),xt(ut),ut.width=Ve,ut.height=yo,ut.colorAttachments=To,ut.depthAttachment=we,ut.stencilAttachment=no,ut.depthStencilAttachment=vo,Re.color=To.map(rt),Re.depth=rt(we),Re.stencil=rt(no),Re.depthStencil=rt(vo),Re.width=ut.width,Re.height=ut.height,vt(ut),Re}function Be(oe,Je){E(nt.next!==ut,"can not resize a framebuffer which is currently in use");var Fe=Math.max(oe|0,1),Ve=Math.max(Je|0||Fe,1);if(Fe===ut.width&&Ve===ut.height)return Re;for(var yo=ut.colorAttachments,Mn=0;Mn<yo.length;++Mn)At(yo[Mn],Fe,Ve);return At(ut.depthAttachment,Fe,Ve),At(ut.stencilAttachment,Fe,Ve),At(ut.depthStencilAttachment,Fe,Ve),ut.width=Re.width=Fe,ut.height=Re.height=Ve,vt(ut),Re}return Re(Gt,Lt),e(Re,{resize:Be,_reglType:"framebuffer",_framebuffer:ut,destroy:function(){It(ut),xt(ut)},use:function(oe){nt.setFBO({framebuffer:Re},oe)}})}function me(Gt){var Lt=Array(6);function ut(Be){var oe;E(Lt.indexOf(nt.next)<0,"can not update framebuffer which is currently in use");var Je={color:null},Fe=0,Ve=null,yo="rgba",Mn="uint8",Dn=1;if(typeof Be=="number")Fe=Be|0;else if(!Be)Fe=1;else{E.type(Be,"object","invalid arguments for framebuffer");var ao=Be;if("shape"in ao){var zn=ao.shape;E(Array.isArray(zn)&&zn.length>=2,"invalid shape for framebuffer"),E(zn[0]===zn[1],"cube framebuffer must be square"),Fe=zn[0]}else"radius"in ao&&(Fe=ao.radius|0),"width"in ao?(Fe=ao.width|0,"height"in ao&&E(ao.height===Fe,"must be square")):"height"in ao&&(Fe=ao.height|0);("color"in ao||"colors"in ao)&&(Ve=ao.color||ao.colors,Array.isArray(Ve)&&E(Ve.length===1||k.webgl_draw_buffers,"multiple render targets not supported")),Ve||("colorCount"in ao&&(Dn=ao.colorCount|0,E(Dn>0,"invalid color buffer count")),"colorType"in ao&&(E.oneOf(ao.colorType,Tt,"invalid color type"),Mn=ao.colorType),"colorFormat"in ao&&(yo=ao.colorFormat,E.oneOf(ao.colorFormat,bt,"invalid color format for texture"))),"depth"in ao&&(Je.depth=ao.depth),"stencil"in ao&&(Je.stencil=ao.stencil),"depthStencil"in ao&&(Je.depthStencil=ao.depthStencil)}var Vo;if(Ve)if(Array.isArray(Ve))for(Vo=[],oe=0;oe<Ve.length;++oe)Vo[oe]=Ve[oe];else Vo=[Ve];else{Vo=Array(Dn);var Sn={radius:Fe,format:yo,type:Mn};for(oe=0;oe<Dn;++oe)Vo[oe]=et.createCube(Sn)}for(Je.color=Array(Vo.length),oe=0;oe<Vo.length;++oe){var Rn=Vo[oe];E(typeof Rn=="function"&&Rn._reglType==="textureCube","invalid cube map"),Fe=Fe||Rn.width,E(Rn.width===Fe&&Rn.height===Fe,"invalid cube map shape"),Je.color[oe]={target:df,data:Vo[oe]}}for(oe=0;oe<6;++oe){for(var Nn=0;Nn<Vo.length;++Nn)Je.color[Nn].target=df+oe;oe>0&&(Je.depth=Lt[0].depth,Je.stencil=Lt[0].stencil,Je.depthStencil=Lt[0].depthStencil),Lt[oe]?Lt[oe](Je):Lt[oe]=$t(Je)}return e(ut,{width:Fe,height:Fe,color:Vo})}function Re(Be){var oe,Je=Be|0;if(E(Je>0&&Je<=C.maxCubeMapSize,"invalid radius for cube fbo"),Je===ut.width)return ut;var Fe=ut.color;for(oe=0;oe<Fe.length;++oe)Fe[oe].resize(Je);for(oe=0;oe<6;++oe)Lt[oe].resize(Je);return ut.width=ut.height=Je,ut}return ut(Gt),e(ut,{faces:Lt,resize:Re,_reglType:"framebufferCube",destroy:function(){Lt.forEach(function(Be){Be.destroy()})}})}function Ie(){nt.cur=null,nt.next=null,nt.dirty=!0,ea(pt).forEach(function(Gt){Gt.framebuffer=x.createFramebuffer(),vt(Gt)})}return e(nt,{getFramebuffer:function(Gt){if(typeof Gt=="function"&&Gt._reglType==="framebuffer"){var Lt=Gt._framebuffer;if(Lt instanceof Yt)return Lt}return null},create:$t,createCube:me,clear:function(){ea(pt).forEach(It)},restore:Ie})}var Aw=5126,vv=34962;function L1(){this.state=0,this.x=0,this.y=0,this.z=0,this.w=0,this.buffer=null,this.size=0,this.normalized=!1,this.type=Aw,this.offset=0,this.stride=0,this.divisor=0}function Tw(x,k,C,et,lt){for(var J=C.maxAttributes,nt=new Array(J),bt=0;bt<J;++bt)nt[bt]=new L1;var Mt=0,Tt={},St={Record:L1,scope:{},state:nt,currentVAO:null,targetVAO:null,restore:qt()?pt:function(){},createVAO:Yt,getVAO:Ct,destroyBuffer:Rt,setVAO:qt()?W:rt,clear:qt()?At:function(){}};function Rt(xt){for(var It=0;It<nt.length;++It){var vt=nt[It];vt.buffer===xt&&(x.disableVertexAttribArray(It),vt.buffer=null)}}function qt(){return k.oes_vertex_array_object}function wt(){return k.angle_instanced_arrays}function Ct(xt){return typeof xt=="function"&&xt._vao?xt._vao:null}function W(xt){if(xt!==St.currentVAO){var It=qt();xt?It.bindVertexArrayOES(xt.vao):It.bindVertexArrayOES(null),St.currentVAO=xt}}function rt(xt){if(xt!==St.currentVAO){if(xt)xt.bindAttrs();else for(var It=wt(),vt=0;vt<nt.length;++vt){var $t=nt[vt];$t.buffer?(x.enableVertexAttribArray(vt),x.vertexAttribPointer(vt,$t.size,$t.type,$t.normalized,$t.stride,$t.offfset),It&&$t.divisor&&It.vertexAttribDivisorANGLE(vt,$t.divisor)):(x.disableVertexAttribArray(vt),x.vertexAttrib4f(vt,$t.x,$t.y,$t.z,$t.w))}St.currentVAO=xt}}function At(){ea(Tt).forEach(function(xt){xt.destroy()})}function jt(){this.id=++Mt,this.attributes=[];var xt=qt();xt?this.vao=xt.createVertexArrayOES():this.vao=null,Tt[this.id]=this,this.buffers=[]}jt.prototype.bindAttrs=function(){for(var xt=wt(),It=this.attributes,vt=0;vt<It.length;++vt){var $t=It[vt];$t.buffer?(x.enableVertexAttribArray(vt),x.bindBuffer(vv,$t.buffer.buffer),x.vertexAttribPointer(vt,$t.size,$t.type,$t.normalized,$t.stride,$t.offset),xt&&$t.divisor&&xt.vertexAttribDivisorANGLE(vt,$t.divisor)):(x.disableVertexAttribArray(vt),x.vertexAttrib4f(vt,$t.x,$t.y,$t.z,$t.w))}for(var me=It.length;me<J;++me)x.disableVertexAttribArray(me)},jt.prototype.refresh=function(){var xt=qt();xt&&(xt.bindVertexArrayOES(this.vao),this.bindAttrs(),St.currentVAO=this)},jt.prototype.destroy=function(){if(this.vao){var xt=qt();this===St.currentVAO&&(St.currentVAO=null,xt.bindVertexArrayOES(null)),xt.deleteVertexArrayOES(this.vao),this.vao=null}Tt[this.id]&&(delete Tt[this.id],et.vaoCount-=1)};function pt(){var xt=qt();xt&&ea(Tt).forEach(function(It){It.refresh()})}function Yt(xt){var It=new jt;et.vaoCount+=1;function vt($t){E(Array.isArray($t),"arguments to vertex array constructor must be an array"),E($t.length<J,"too many attributes"),E($t.length>0,"must specify at least one attribute");var me={},Ie=It.attributes;Ie.length=$t.length;for(var Gt=0;Gt<$t.length;++Gt){var Lt=$t[Gt],ut=Ie[Gt]=new L1,Re=Lt.data||Lt;if(Array.isArray(Re)||t(Re)||Pa(Re)){var Be;It.buffers[Gt]&&(Be=It.buffers[Gt],t(Re)&&Be._buffer.byteLength>=Re.byteLength?Be.subdata(Re):(Be.destroy(),It.buffers[Gt]=null)),It.buffers[Gt]||(Be=It.buffers[Gt]=lt.create(Lt,vv,!1,!0)),ut.buffer=lt.getBuffer(Be),ut.size=ut.buffer.dimension|0,ut.normalized=!1,ut.type=ut.buffer.dtype,ut.offset=0,ut.stride=0,ut.divisor=0,ut.state=1,me[Gt]=1}else lt.getBuffer(Lt)?(ut.buffer=lt.getBuffer(Lt),ut.size=ut.buffer.dimension|0,ut.normalized=!1,ut.type=ut.buffer.dtype,ut.offset=0,ut.stride=0,ut.divisor=0,ut.state=1):lt.getBuffer(Lt.buffer)?(ut.buffer=lt.getBuffer(Lt.buffer),ut.size=(+Lt.size||ut.buffer.dimension)|0,ut.normalized=!!Lt.normalized||!1,"type"in Lt?(E.parameter(Lt.type,xs,"invalid buffer type"),ut.type=xs[Lt.type]):ut.type=ut.buffer.dtype,ut.offset=(Lt.offset||0)|0,ut.stride=(Lt.stride||0)|0,ut.divisor=(Lt.divisor||0)|0,ut.state=1,E(ut.size>=1&&ut.size<=4,"size must be between 1 and 4"),E(ut.offset>=0,"invalid offset"),E(ut.stride>=0&&ut.stride<=255,"stride must be between 0 and 255"),E(ut.divisor>=0,"divisor must be positive"),E(!ut.divisor||!!k.angle_instanced_arrays,"ANGLE_instanced_arrays must be enabled to use divisor")):"x"in Lt?(E(Gt>0,"first attribute must not be a constant"),ut.x=+Lt.x||0,ut.y=+Lt.y||0,ut.z=+Lt.z||0,ut.w=+Lt.w||0,ut.state=2):E(!1,"invalid attribute spec for location "+Gt)}for(var oe=0;oe<It.buffers.length;++oe)!me[oe]&&It.buffers[oe]&&(It.buffers[oe].destroy(),It.buffers[oe]=null);return It.refresh(),vt}return vt.destroy=function(){for(var $t=0;$t<It.buffers.length;++$t)It.buffers[$t]&&It.buffers[$t].destroy();It.buffers.length=0,It.destroy()},vt._vao=It,vt._reglType="vao",vt(xt)}return St}var mv=35632,Lw=35633,zw=35718,Rw=35721;function Nw(x,k,C,et){var lt={},J={};function nt(W,rt,At,jt){this.name=W,this.id=rt,this.location=At,this.info=jt}function bt(W,rt){for(var At=0;At<W.length;++At)if(W[At].id===rt.id){W[At].location=rt.location;return}W.push(rt)}function Mt(W,rt,At){var jt=W===mv?lt:J,pt=jt[rt];if(!pt){var Yt=k.str(rt);pt=x.createShader(W),x.shaderSource(pt,Yt),x.compileShader(pt),E.shaderError(x,pt,Yt,W,At),jt[rt]=pt}return pt}var Tt={},St=[],Rt=0;function qt(W,rt){this.id=Rt++,this.fragId=W,this.vertId=rt,this.program=null,this.uniforms=[],this.attributes=[],this.refCount=1,et.profile&&(this.stats={uniformsCount:0,attributesCount:0})}function wt(W,rt,At){var jt,pt,Yt=Mt(mv,W.fragId),xt=Mt(Lw,W.vertId),It=W.program=x.createProgram();if(x.attachShader(It,Yt),x.attachShader(It,xt),At)for(jt=0;jt<At.length;++jt){var vt=At[jt];x.bindAttribLocation(It,vt[0],vt[1])}x.linkProgram(It),E.linkError(x,It,k.str(W.fragId),k.str(W.vertId),rt);var $t=x.getProgramParameter(It,zw);et.profile&&(W.stats.uniformsCount=$t);var me=W.uniforms;for(jt=0;jt<$t;++jt)if(pt=x.getActiveUniform(It,jt),pt)if(pt.size>1)for(var Ie=0;Ie<pt.size;++Ie){var Gt=pt.name.replace("[0]","["+Ie+"]");bt(me,new nt(Gt,k.id(Gt),x.getUniformLocation(It,Gt),pt))}else bt(me,new nt(pt.name,k.id(pt.name),x.getUniformLocation(It,pt.name),pt));var Lt=x.getProgramParameter(It,Rw);et.profile&&(W.stats.attributesCount=Lt);var ut=W.attributes;for(jt=0;jt<Lt;++jt)pt=x.getActiveAttrib(It,jt),pt&&bt(ut,new nt(pt.name,k.id(pt.name),x.getAttribLocation(It,pt.name),pt))}et.profile&&(C.getMaxUniformsCount=function(){var W=0;return St.forEach(function(rt){rt.stats.uniformsCount>W&&(W=rt.stats.uniformsCount)}),W},C.getMaxAttributesCount=function(){var W=0;return St.forEach(function(rt){rt.stats.attributesCount>W&&(W=rt.stats.attributesCount)}),W});function Ct(){lt={},J={};for(var W=0;W<St.length;++W)wt(St[W],null,St[W].attributes.map(function(rt){return[rt.location,rt.name]}))}return{clear:function(){var W=x.deleteShader.bind(x);ea(lt).forEach(W),lt={},ea(J).forEach(W),J={},St.forEach(function(rt){x.deleteProgram(rt.program)}),St.length=0,Tt={},C.shaderCount=0},program:function(W,rt,At,jt){E.command(W>=0,"missing vertex shader",At),E.command(rt>=0,"missing fragment shader",At);var pt=Tt[rt];pt||(pt=Tt[rt]={});var Yt=pt[W];if(Yt&&(Yt.refCount++,!jt))return Yt;var xt=new qt(rt,W);return C.shaderCount++,wt(xt,At,jt),Yt||(pt[W]=xt),St.push(xt),e(xt,{destroy:function(){if(xt.refCount--,xt.refCount<=0){x.deleteProgram(xt.program);var It=St.indexOf(xt);St.splice(It,1),C.shaderCount--}pt[xt.vertId].refCount<=0&&(x.deleteShader(J[xt.vertId]),delete J[xt.vertId],delete Tt[xt.fragId][xt.vertId]),Object.keys(Tt[xt.fragId]).length||(x.deleteShader(lt[xt.fragId]),delete lt[xt.fragId],delete Tt[xt.fragId])}})},restore:Ct,shader:Mt,frag:-1,vert:-1}}var Cw=6408,Ic=5121,Ow=3333,vf=5126;function Pw(x,k,C,et,lt,J,nt){function bt(St){var Rt;k.next===null?(E(lt.preserveDrawingBuffer,'you must create a webgl context with "preserveDrawingBuffer":true in order to read pixels from the drawing buffer'),Rt=Ic):(E(k.next.colorAttachments[0].texture!==null,"You cannot read from a renderbuffer"),Rt=k.next.colorAttachments[0].texture._texture.type,J.oes_texture_float?(E(Rt===Ic||Rt===vf,"Reading from a framebuffer is only allowed for the types 'uint8' and 'float'"),Rt===vf&&E(nt.readFloat,"Reading 'float' values is not permitted in your browser. For a fallback, please see: https://www.npmjs.com/package/glsl-read-float")):E(Rt===Ic,"Reading from a framebuffer is only allowed for the type 'uint8'"));var qt=0,wt=0,Ct=et.framebufferWidth,W=et.framebufferHeight,rt=null;t(St)?rt=St:St&&(E.type(St,"object","invalid arguments to regl.read()"),qt=St.x|0,wt=St.y|0,E(qt>=0&&qt<et.framebufferWidth,"invalid x offset for regl.read"),E(wt>=0&&wt<et.framebufferHeight,"invalid y offset for regl.read"),Ct=(St.width||et.framebufferWidth-qt)|0,W=(St.height||et.framebufferHeight-wt)|0,rt=St.data||null),rt&&(Rt===Ic?E(rt instanceof Uint8Array,"buffer must be 'Uint8Array' when reading from a framebuffer of type 'uint8'"):Rt===vf&&E(rt instanceof Float32Array,"buffer must be 'Float32Array' when reading from a framebuffer of type 'float'")),E(Ct>0&&Ct+qt<=et.framebufferWidth,"invalid width for read pixels"),E(W>0&&W+wt<=et.framebufferHeight,"invalid height for read pixels"),C();var At=Ct*W*4;return rt||(Rt===Ic?rt=new Uint8Array(At):Rt===vf&&(rt=rt||new Float32Array(At))),E.isTypedArray(rt,"data buffer for regl.read() must be a typedarray"),E(rt.byteLength>=At,"data buffer for regl.read() too small"),x.pixelStorei(Ow,4),x.readPixels(qt,wt,Ct,W,Cw,Rt,rt),rt}function Mt(St){var Rt;return k.setFBO({framebuffer:St.framebuffer},function(){Rt=bt(St)}),Rt}function Tt(St){return!St||!("framebuffer"in St)?bt(St):Mt(St)}return Tt}function yi(x){return Array.prototype.slice.call(x)}function bi(x){return yi(x).join("")}function Iw(){var x=0,k=[],C=[];function et(Rt){for(var qt=0;qt<C.length;++qt)if(C[qt]===Rt)return k[qt];var wt="g"+x++;return k.push(wt),C.push(Rt),wt}function lt(){var Rt=[];function qt(){Rt.push.apply(Rt,yi(arguments))}var wt=[];function Ct(){var W="v"+x++;return wt.push(W),arguments.length>0&&(Rt.push(W,"="),Rt.push.apply(Rt,yi(arguments)),Rt.push(";")),W}return e(qt,{def:Ct,toString:function(){return bi([wt.length>0?"var "+wt.join(",")+";":"",bi(Rt)])}})}function J(){var Rt=lt(),qt=lt(),wt=Rt.toString,Ct=qt.toString;function W(rt,At){qt(rt,At,"=",Rt.def(rt,At),";")}return e(function(){Rt.apply(Rt,yi(arguments))},{def:Rt.def,entry:Rt,exit:qt,save:W,set:function(rt,At,jt){W(rt,At),Rt(rt,At,"=",jt,";")},toString:function(){return wt()+Ct()}})}function nt(){var Rt=bi(arguments),qt=J(),wt=J(),Ct=qt.toString,W=wt.toString;return e(qt,{then:function(){return qt.apply(qt,yi(arguments)),this},else:function(){return wt.apply(wt,yi(arguments)),this},toString:function(){var rt=W();return rt&&(rt="else{"+rt+"}"),bi(["if(",Rt,"){",Ct(),"}",rt])}})}var bt=lt(),Mt={};function Tt(Rt,qt){var wt=[];function Ct(){var pt="a"+wt.length;return wt.push(pt),pt}qt=qt||0;for(var W=0;W<qt;++W)Ct();var rt=J(),At=rt.toString,jt=Mt[Rt]=e(rt,{arg:Ct,toString:function(){return bi(["function(",wt.join(),"){",At(),"}"])}});return jt}function St(){var Rt=['"use strict";',bt,"return {"];Object.keys(Mt).forEach(function(Ct){Rt.push('"',Ct,'":',Mt[Ct].toString(),",")}),Rt.push("}");var qt=bi(Rt).replace(/;/g,`;
`).replace(/}/g,`}
`).replace(/{/g,`{
`),wt=Function.apply(null,k.concat(qt));return wt.apply(null,C)}return{global:bt,link:et,block:lt,proc:Tt,scope:J,cond:nt,compile:St}}var wi="xyzw".split(""),gv=5121,_i=1,z1=2,R1=0,N1=1,C1=2,O1=3,mf=4,xv=5,yv=6,bv="dither",wv="blend.enable",_v="blend.color",P1="blend.equation",I1="blend.func",Mv="depth.enable",Sv="depth.func",Ev="depth.range",kv="depth.mask",$1="colorMask",Av="cull.enable",Tv="cull.face",F1="frontFace",D1="lineWidth",Lv="polygonOffset.enable",q1="polygonOffset.offset",zv="sample.alpha",Rv="sample.enable",G1="sample.coverage",Nv="stencil.enable",Cv="stencil.mask",H1="stencil.func",B1="stencil.opFront",$c="stencil.opBack",Ov="scissor.enable",gf="scissor.box",u0="viewport",Fc="profile",Ms="framebuffer",Dc="vert",qc="frag",Ss="elements",Es="primitive",ks="count",xf="offset",yf="instances",Gc="vao",U1="Width",j1="Height",Mi=Ms+U1,Si=Ms+j1,$w=u0+U1,Fw=u0+j1,Pv="drawingBuffer",Iv=Pv+U1,$v=Pv+j1,Dw=[I1,P1,H1,B1,$c,G1,u0,gf,q1],Ei=34962,qw=34963,Gw=35632,Hw=35633,Fv=3553,Bw=34067,Uw=2884,jw=3042,Ww=3024,Vw=2960,Xw=2929,Yw=3089,Kw=32823,Qw=32926,Zw=32928,W1=5126,bf=35664,wf=35665,_f=35666,V1=5124,Mf=35667,Sf=35668,Ef=35669,X1=35670,kf=35671,Af=35672,Tf=35673,Hc=35674,Bc=35675,Uc=35676,jc=35678,Wc=35680,Dv=4,Vc=1028,As=1029,qv=2304,Y1=2305,Jw=32775,t4=32776,e4=519,C0=7680,Gv=0,Hv=1,Bv=32774,o4=513,Uv=36160,n4=36064,Ja={0:0,1:1,zero:0,one:1,"src color":768,"one minus src color":769,"src alpha":770,"one minus src alpha":771,"dst color":774,"one minus dst color":775,"dst alpha":772,"one minus dst alpha":773,"constant color":32769,"one minus constant color":32770,"constant alpha":32771,"one minus constant alpha":32772,"src alpha saturate":776},jv=["constant color, constant alpha","one minus constant color, constant alpha","constant color, one minus constant alpha","one minus constant color, one minus constant alpha","constant alpha, constant color","constant alpha, one minus constant color","one minus constant alpha, constant color","one minus constant alpha, one minus constant color"],ki={never:512,less:513,"<":513,equal:514,"=":514,"==":514,"===":514,lequal:515,"<=":515,greater:516,">":516,notequal:517,"!=":517,"!==":517,gequal:518,">=":518,always:519},O0={0:0,zero:0,keep:7680,replace:7681,increment:7682,decrement:7683,"increment wrap":34055,"decrement wrap":34056,invert:5386},Wv={frag:Gw,vert:Hw},K1={cw:qv,ccw:Y1};function Lf(x){return Array.isArray(x)||t(x)||Pa(x)}function Vv(x){return x.sort(function(k,C){return k===u0?-1:C===u0?1:k<C?-1:1})}function Ar(x,k,C,et){this.thisDep=x,this.contextDep=k,this.propDep=C,this.append=et}function P0(x){return x&&!(x.thisDep||x.contextDep||x.propDep)}function _n(x){return new Ar(!1,!1,!1,x)}function Ur(x,k){var C=x.type;if(C===R1){var et=x.data.length;return new Ar(!0,et>=1,et>=2,k)}else if(C===mf){var lt=x.data;return new Ar(lt.thisDep,lt.contextDep,lt.propDep,k)}else{if(C===xv)return new Ar(!1,!1,!1,k);if(C===yv){for(var J=!1,nt=!1,bt=!1,Mt=0;Mt<x.data.length;++Mt){var Tt=x.data[Mt];if(Tt.type===N1)bt=!0;else if(Tt.type===C1)nt=!0;else if(Tt.type===O1)J=!0;else if(Tt.type===R1){J=!0;var St=Tt.data;St>=1&&(nt=!0),St>=2&&(bt=!0)}else Tt.type===mf&&(J=J||Tt.data.thisDep,nt=nt||Tt.data.contextDep,bt=bt||Tt.data.propDep)}return new Ar(J,nt,bt,k)}else return new Ar(C===O1,C===C1,C===N1,k)}}var Xv=new Ar(!1,!1,!1,function(){});function r4(x,k,C,et,lt,J,nt,bt,Mt,Tt,St,Rt,qt,wt,Ct){var W=Tt.Record,rt={add:32774,subtract:32778,"reverse subtract":32779};C.ext_blend_minmax&&(rt.min=Jw,rt.max=t4);var At=C.angle_instanced_arrays,jt=C.webgl_draw_buffers,pt={dirty:!0,profile:Ct.profile},Yt={},xt=[],It={},vt={};function $t(L){return L.replace(".","_")}function me(L,S,I){var U=$t(L);xt.push(L),Yt[U]=pt[U]=!!I,It[U]=S}function Ie(L,S,I){var U=$t(L);xt.push(L),Array.isArray(I)?(pt[U]=I.slice(),Yt[U]=I.slice()):pt[U]=Yt[U]=I,vt[U]=S}me(bv,Ww),me(wv,jw),Ie(_v,"blendColor",[0,0,0,0]),Ie(P1,"blendEquationSeparate",[Bv,Bv]),Ie(I1,"blendFuncSeparate",[Hv,Gv,Hv,Gv]),me(Mv,Xw,!0),Ie(Sv,"depthFunc",o4),Ie(Ev,"depthRange",[0,1]),Ie(kv,"depthMask",!0),Ie($1,$1,[!0,!0,!0,!0]),me(Av,Uw),Ie(Tv,"cullFace",As),Ie(F1,F1,Y1),Ie(D1,D1,1),me(Lv,Kw),Ie(q1,"polygonOffset",[0,0]),me(zv,Qw),me(Rv,Zw),Ie(G1,"sampleCoverage",[1,!1]),me(Nv,Vw),Ie(Cv,"stencilMask",-1),Ie(H1,"stencilFunc",[e4,0,-1]),Ie(B1,"stencilOpSeparate",[Vc,C0,C0,C0]),Ie($c,"stencilOpSeparate",[As,C0,C0,C0]),me(Ov,Yw),Ie(gf,"scissor",[0,0,x.drawingBufferWidth,x.drawingBufferHeight]),Ie(u0,u0,[0,0,x.drawingBufferWidth,x.drawingBufferHeight]);var Gt={gl:x,context:qt,strings:k,next:Yt,current:pt,draw:Rt,elements:J,buffer:lt,shader:St,attributes:Tt.state,vao:Tt,uniforms:Mt,framebuffer:bt,extensions:C,timer:wt,isBufferArgs:Lf},Lt={primTypes:hi,compareFuncs:ki,blendFuncs:Ja,blendEquations:rt,stencilOps:O0,glTypes:xs,orientationType:K1};E.optional(function(){Gt.isArrayLike=vn}),jt&&(Lt.backBuffer=[As],Lt.drawBuffer=Ke(et.maxDrawbuffers,function(L){return L===0?[0]:Ke(L,function(S){return n4+S})}));var ut=0;function Re(){var L=Iw(),S=L.link,I=L.global;L.id=ut++,L.batchId="0";var U=S(Gt),V=L.shared={props:"a0"};Object.keys(Gt).forEach(function(P){V[P]=I.def(U,".",P)}),E.optional(function(){L.CHECK=S(E),L.commandStr=E.guessCommand(),L.command=S(L.commandStr),L.assert=function(P,T,B){P("if(!(",T,"))",this.CHECK,".commandRaise(",S(B),",",this.command,");")},Lt.invalidBlendCombinations=jv});var D=L.next={},$=L.current={};Object.keys(vt).forEach(function(P){Array.isArray(pt[P])&&(D[P]=I.def(V.next,".",P),$[P]=I.def(V.current,".",P))});var H=L.constants={};Object.keys(Lt).forEach(function(P){H[P]=I.def(JSON.stringify(Lt[P]))}),L.invoke=function(P,T){switch(T.type){case R1:var B=["this",V.context,V.props,L.batchId];return P.def(S(T.data),".call(",B.slice(0,Math.max(T.data.length+1,4)),")");case N1:return P.def(V.props,T.data);case C1:return P.def(V.context,T.data);case O1:return P.def("this",T.data);case mf:return T.data.append(L,P),T.data.ref;case xv:return T.data.toString();case yv:return T.data.map(function(Y){return L.invoke(P,Y)})}},L.attribCache={};var z={};return L.scopeAttrib=function(P){var T=k.id(P);if(T in z)return z[T];var B=Tt.scope[T];B||(B=Tt.scope[T]=new W);var Y=z[T]=S(B);return Y},L}function Be(L){var S=L.static,I=L.dynamic,U;if(Fc in S){var V=!!S[Fc];U=_n(function($,H){return V}),U.enable=V}else if(Fc in I){var D=I[Fc];U=Ur(D,function($,H){return $.invoke(H,D)})}return U}function oe(L,S){var I=L.static,U=L.dynamic;if(Ms in I){var V=I[Ms];return V?(V=bt.getFramebuffer(V),E.command(V,"invalid framebuffer object"),_n(function($,H){var z=$.link(V),P=$.shared;H.set(P.framebuffer,".next",z);var T=P.context;return H.set(T,"."+Mi,z+".width"),H.set(T,"."+Si,z+".height"),z})):_n(function($,H){var z=$.shared;H.set(z.framebuffer,".next","null");var P=z.context;return H.set(P,"."+Mi,P+"."+Iv),H.set(P,"."+Si,P+"."+$v),"null"})}else if(Ms in U){var D=U[Ms];return Ur(D,function($,H){var z=$.invoke(H,D),P=$.shared,T=P.framebuffer,B=H.def(T,".getFramebuffer(",z,")");E.optional(function(){$.assert(H,"!"+z+"||"+B,"invalid framebuffer object")}),H.set(T,".next",B);var Y=P.context;return H.set(Y,"."+Mi,B+"?"+B+".width:"+Y+"."+Iv),H.set(Y,"."+Si,B+"?"+B+".height:"+Y+"."+$v),B})}else return null}function Je(L,S,I){var U=L.static,V=L.dynamic;function D(z){if(z in U){var P=U[z];E.commandType(P,"object","invalid "+z,I.commandStr);var T=!0,B=P.x|0,Y=P.y|0,st,ft;return"width"in P?(st=P.width|0,E.command(st>=0,"invalid "+z,I.commandStr)):T=!1,"height"in P?(ft=P.height|0,E.command(ft>=0,"invalid "+z,I.commandStr)):T=!1,new Ar(!T&&S&&S.thisDep,!T&&S&&S.contextDep,!T&&S&&S.propDep,function(he,je){var ne=he.shared.context,Se=st;"width"in P||(Se=je.def(ne,".",Mi,"-",B));var De=ft;return"height"in P||(De=je.def(ne,".",Si,"-",Y)),[B,Y,Se,De]})}else if(z in V){var at=V[z],kt=Ur(at,function(he,je){var ne=he.invoke(je,at);E.optional(function(){he.assert(je,ne+"&&typeof "+ne+'==="object"',"invalid "+z)});var Se=he.shared.context,De=je.def(ne,".x|0"),bo=je.def(ne,".y|0"),fn=je.def('"width" in ',ne,"?",ne,".width|0:","(",Se,".",Mi,"-",De,")"),Tr=je.def('"height" in ',ne,"?",ne,".height|0:","(",Se,".",Si,"-",bo,")");return E.optional(function(){he.assert(je,fn+">=0&&"+Tr+">=0","invalid "+z)}),[De,bo,fn,Tr]});return S&&(kt.thisDep=kt.thisDep||S.thisDep,kt.contextDep=kt.contextDep||S.contextDep,kt.propDep=kt.propDep||S.propDep),kt}else return S?new Ar(S.thisDep,S.contextDep,S.propDep,function(he,je){var ne=he.shared.context;return[0,0,je.def(ne,".",Mi),je.def(ne,".",Si)]}):null}var $=D(u0);if($){var H=$;$=new Ar($.thisDep,$.contextDep,$.propDep,function(z,P){var T=H.append(z,P),B=z.shared.context;return P.set(B,"."+$w,T[2]),P.set(B,"."+Fw,T[3]),T})}return{viewport:$,scissor_box:D(gf)}}function Fe(L,S){var I=L.static,U=typeof I[qc]=="string"&&typeof I[Dc]=="string";if(U){if(Object.keys(S.dynamic).length>0)return null;var V=S.static,D=Object.keys(V);if(D.length>0&&typeof V[D[0]]=="number"){for(var $=[],H=0;H<D.length;++H)E(typeof V[D[H]]=="number","must specify all vertex attribute locations when using vaos"),$.push([V[D[H]]|0,D[H]]);return $}}return null}function Ve(L,S,I){var U=L.static,V=L.dynamic;function D(T){if(T in U){var B=k.id(U[T]);E.optional(function(){St.shader(Wv[T],B,E.guessCommand())});var Y=_n(function(){return B});return Y.id=B,Y}else if(T in V){var st=V[T];return Ur(st,function(ft,at){var kt=ft.invoke(at,st),he=at.def(ft.shared.strings,".id(",kt,")");return E.optional(function(){at(ft.shared.shader,".shader(",Wv[T],",",he,",",ft.command,");")}),he})}return null}var $=D(qc),H=D(Dc),z=null,P;return P0($)&&P0(H)?(z=St.program(H.id,$.id,null,I),P=_n(function(T,B){return T.link(z)})):P=new Ar($&&$.thisDep||H&&H.thisDep,$&&$.contextDep||H&&H.contextDep,$&&$.propDep||H&&H.propDep,function(T,B){var Y=T.shared.shader,st;$?st=$.append(T,B):st=B.def(Y,".",qc);var ft;H?ft=H.append(T,B):ft=B.def(Y,".",Dc);var at=Y+".program("+ft+","+st;return E.optional(function(){at+=","+T.command}),B.def(at+")")}),{frag:$,vert:H,progVar:P,program:z}}function yo(L,S){var I=L.static,U=L.dynamic;function V(){if(Ss in I){var T=I[Ss];Lf(T)?T=J.getElements(J.create(T,!0)):T&&(T=J.getElements(T),E.command(T,"invalid elements",S.commandStr));var B=_n(function(st,ft){if(T){var at=st.link(T);return st.ELEMENTS=at,at}return st.ELEMENTS=null,null});return B.value=T,B}else if(Ss in U){var Y=U[Ss];return Ur(Y,function(st,ft){var at=st.shared,kt=at.isBufferArgs,he=at.elements,je=st.invoke(ft,Y),ne=ft.def("null"),Se=ft.def(kt,"(",je,")"),De=st.cond(Se).then(ne,"=",he,".createStream(",je,");").else(ne,"=",he,".getElements(",je,");");return E.optional(function(){st.assert(De.else,"!"+je+"||"+ne,"invalid elements")}),ft.entry(De),ft.exit(st.cond(Se).then(he,".destroyStream(",ne,");")),st.ELEMENTS=ne,ne})}return null}var D=V();function $(){if(Es in I){var T=I[Es];return E.commandParameter(T,hi,"invalid primitve",S.commandStr),_n(function(Y,st){return hi[T]})}else if(Es in U){var B=U[Es];return Ur(B,function(Y,st){var ft=Y.constants.primTypes,at=Y.invoke(st,B);return E.optional(function(){Y.assert(st,at+" in "+ft,"invalid primitive, must be one of "+Object.keys(hi))}),st.def(ft,"[",at,"]")})}else if(D)return P0(D)?D.value?_n(function(Y,st){return st.def(Y.ELEMENTS,".primType")}):_n(function(){return Dv}):new Ar(D.thisDep,D.contextDep,D.propDep,function(Y,st){var ft=Y.ELEMENTS;return st.def(ft,"?",ft,".primType:",Dv)});return null}function H(T,B){if(T in I){var Y=I[T]|0;return E.command(!B||Y>=0,"invalid "+T,S.commandStr),_n(function(ft,at){return B&&(ft.OFFSET=Y),Y})}else if(T in U){var st=U[T];return Ur(st,function(ft,at){var kt=ft.invoke(at,st);return B&&(ft.OFFSET=kt,E.optional(function(){ft.assert(at,kt+">=0","invalid "+T)})),kt})}else if(B&&D)return _n(function(ft,at){return ft.OFFSET="0",0});return null}var z=H(xf,!0);function P(){if(ks in I){var T=I[ks]|0;return E.command(typeof T=="number"&&T>=0,"invalid vertex count",S.commandStr),_n(function(){return T})}else if(ks in U){var B=U[ks];return Ur(B,function(ft,at){var kt=ft.invoke(at,B);return E.optional(function(){ft.assert(at,"typeof "+kt+'==="number"&&'+kt+">=0&&"+kt+"===("+kt+"|0)","invalid vertex count")}),kt})}else if(D)if(P0(D)){if(D)return z?new Ar(z.thisDep,z.contextDep,z.propDep,function(ft,at){var kt=at.def(ft.ELEMENTS,".vertCount-",ft.OFFSET);return E.optional(function(){ft.assert(at,kt+">=0","invalid vertex offset/element buffer too small")}),kt}):_n(function(ft,at){return at.def(ft.ELEMENTS,".vertCount")});var Y=_n(function(){return-1});return E.optional(function(){Y.MISSING=!0}),Y}else{var st=new Ar(D.thisDep||z.thisDep,D.contextDep||z.contextDep,D.propDep||z.propDep,function(ft,at){var kt=ft.ELEMENTS;return ft.OFFSET?at.def(kt,"?",kt,".vertCount-",ft.OFFSET,":-1"):at.def(kt,"?",kt,".vertCount:-1")});return E.optional(function(){st.DYNAMIC=!0}),st}return null}return{elements:D,primitive:$(),count:P(),instances:H(yf,!1),offset:z}}function Mn(L,S){var I=L.static,U=L.dynamic,V={};return xt.forEach(function(D){var $=$t(D);function H(z,P){if(D in I){var T=z(I[D]);V[$]=_n(function(){return T})}else if(D in U){var B=U[D];V[$]=Ur(B,function(Y,st){return P(Y,st,Y.invoke(st,B))})}}switch(D){case Av:case wv:case bv:case Nv:case Mv:case Ov:case Lv:case zv:case Rv:case kv:return H(function(z){return E.commandType(z,"boolean",D,S.commandStr),z},function(z,P,T){return E.optional(function(){z.assert(P,"typeof "+T+'==="boolean"',"invalid flag "+D,z.commandStr)}),T});case Sv:return H(function(z){return E.commandParameter(z,ki,"invalid "+D,S.commandStr),ki[z]},function(z,P,T){var B=z.constants.compareFuncs;return E.optional(function(){z.assert(P,T+" in "+B,"invalid "+D+", must be one of "+Object.keys(ki))}),P.def(B,"[",T,"]")});case Ev:return H(function(z){return E.command(vn(z)&&z.length===2&&typeof z[0]=="number"&&typeof z[1]=="number"&&z[0]<=z[1],"depth range is 2d array",S.commandStr),z},function(z,P,T){E.optional(function(){z.assert(P,z.shared.isArrayLike+"("+T+")&&"+T+".length===2&&typeof "+T+'[0]==="number"&&typeof '+T+'[1]==="number"&&'+T+"[0]<="+T+"[1]","depth range must be a 2d array")});var B=P.def("+",T,"[0]"),Y=P.def("+",T,"[1]");return[B,Y]});case I1:return H(function(z){E.commandType(z,"object","blend.func",S.commandStr);var P="srcRGB"in z?z.srcRGB:z.src,T="srcAlpha"in z?z.srcAlpha:z.src,B="dstRGB"in z?z.dstRGB:z.dst,Y="dstAlpha"in z?z.dstAlpha:z.dst;return E.commandParameter(P,Ja,$+".srcRGB",S.commandStr),E.commandParameter(T,Ja,$+".srcAlpha",S.commandStr),E.commandParameter(B,Ja,$+".dstRGB",S.commandStr),E.commandParameter(Y,Ja,$+".dstAlpha",S.commandStr),E.command(jv.indexOf(P+", "+B)===-1,"unallowed blending combination (srcRGB, dstRGB) = ("+P+", "+B+")",S.commandStr),[Ja[P],Ja[B],Ja[T],Ja[Y]]},function(z,P,T){var B=z.constants.blendFuncs;E.optional(function(){z.assert(P,T+"&&typeof "+T+'==="object"',"invalid blend func, must be an object")});function Y(ne,Se){var De=P.def('"',ne,Se,'" in ',T,"?",T,".",ne,Se,":",T,".",ne);return E.optional(function(){z.assert(P,De+" in "+B,"invalid "+D+"."+ne+Se+", must be one of "+Object.keys(Ja))}),De}var st=Y("src","RGB"),ft=Y("dst","RGB");E.optional(function(){var ne=z.constants.invalidBlendCombinations;z.assert(P,ne+".indexOf("+st+'+", "+'+ft+") === -1 ","unallowed blending combination for (srcRGB, dstRGB)")});var at=P.def(B,"[",st,"]"),kt=P.def(B,"[",Y("src","Alpha"),"]"),he=P.def(B,"[",ft,"]"),je=P.def(B,"[",Y("dst","Alpha"),"]");return[at,he,kt,je]});case P1:return H(function(z){if(typeof z=="string")return E.commandParameter(z,rt,"invalid "+D,S.commandStr),[rt[z],rt[z]];if(typeof z=="object")return E.commandParameter(z.rgb,rt,D+".rgb",S.commandStr),E.commandParameter(z.alpha,rt,D+".alpha",S.commandStr),[rt[z.rgb],rt[z.alpha]];E.commandRaise("invalid blend.equation",S.commandStr)},function(z,P,T){var B=z.constants.blendEquations,Y=P.def(),st=P.def(),ft=z.cond("typeof ",T,'==="string"');return E.optional(function(){function at(kt,he,je){z.assert(kt,je+" in "+B,"invalid "+he+", must be one of "+Object.keys(rt))}at(ft.then,D,T),z.assert(ft.else,T+"&&typeof "+T+'==="object"',"invalid "+D),at(ft.else,D+".rgb",T+".rgb"),at(ft.else,D+".alpha",T+".alpha")}),ft.then(Y,"=",st,"=",B,"[",T,"];"),ft.else(Y,"=",B,"[",T,".rgb];",st,"=",B,"[",T,".alpha];"),P(ft),[Y,st]});case _v:return H(function(z){return E.command(vn(z)&&z.length===4,"blend.color must be a 4d array",S.commandStr),Ke(4,function(P){return+z[P]})},function(z,P,T){return E.optional(function(){z.assert(P,z.shared.isArrayLike+"("+T+")&&"+T+".length===4","blend.color must be a 4d array")}),Ke(4,function(B){return P.def("+",T,"[",B,"]")})});case Cv:return H(function(z){return E.commandType(z,"number",$,S.commandStr),z|0},function(z,P,T){return E.optional(function(){z.assert(P,"typeof "+T+'==="number"',"invalid stencil.mask")}),P.def(T,"|0")});case H1:return H(function(z){E.commandType(z,"object",$,S.commandStr);var P=z.cmp||"keep",T=z.ref||0,B="mask"in z?z.mask:-1;return E.commandParameter(P,ki,D+".cmp",S.commandStr),E.commandType(T,"number",D+".ref",S.commandStr),E.commandType(B,"number",D+".mask",S.commandStr),[ki[P],T,B]},function(z,P,T){var B=z.constants.compareFuncs;E.optional(function(){function at(){z.assert(P,Array.prototype.join.call(arguments,""),"invalid stencil.func")}at(T+"&&typeof ",T,'==="object"'),at('!("cmp" in ',T,")||(",T,".cmp in ",B,")")});var Y=P.def('"cmp" in ',T,"?",B,"[",T,".cmp]",":",C0),st=P.def(T,".ref|0"),ft=P.def('"mask" in ',T,"?",T,".mask|0:-1");return[Y,st,ft]});case B1:case $c:return H(function(z){E.commandType(z,"object",$,S.commandStr);var P=z.fail||"keep",T=z.zfail||"keep",B=z.zpass||"keep";return E.commandParameter(P,O0,D+".fail",S.commandStr),E.commandParameter(T,O0,D+".zfail",S.commandStr),E.commandParameter(B,O0,D+".zpass",S.commandStr),[D===$c?As:Vc,O0[P],O0[T],O0[B]]},function(z,P,T){var B=z.constants.stencilOps;E.optional(function(){z.assert(P,T+"&&typeof "+T+'==="object"',"invalid "+D)});function Y(st){return E.optional(function(){z.assert(P,'!("'+st+'" in '+T+")||("+T+"."+st+" in "+B+")","invalid "+D+"."+st+", must be one of "+Object.keys(O0))}),P.def('"',st,'" in ',T,"?",B,"[",T,".",st,"]:",C0)}return[D===$c?As:Vc,Y("fail"),Y("zfail"),Y("zpass")]});case q1:return H(function(z){E.commandType(z,"object",$,S.commandStr);var P=z.factor|0,T=z.units|0;return E.commandType(P,"number",$+".factor",S.commandStr),E.commandType(T,"number",$+".units",S.commandStr),[P,T]},function(z,P,T){E.optional(function(){z.assert(P,T+"&&typeof "+T+'==="object"',"invalid "+D)});var B=P.def(T,".factor|0"),Y=P.def(T,".units|0");return[B,Y]});case Tv:return H(function(z){var P=0;return z==="front"?P=Vc:z==="back"&&(P=As),E.command(!!P,$,S.commandStr),P},function(z,P,T){return E.optional(function(){z.assert(P,T+'==="front"||'+T+'==="back"',"invalid cull.face")}),P.def(T,'==="front"?',Vc,":",As)});case D1:return H(function(z){return E.command(typeof z=="number"&&z>=et.lineWidthDims[0]&&z<=et.lineWidthDims[1],"invalid line width, must be a positive number between "+et.lineWidthDims[0]+" and "+et.lineWidthDims[1],S.commandStr),z},function(z,P,T){return E.optional(function(){z.assert(P,"typeof "+T+'==="number"&&'+T+">="+et.lineWidthDims[0]+"&&"+T+"<="+et.lineWidthDims[1],"invalid line width")}),T});case F1:return H(function(z){return E.commandParameter(z,K1,$,S.commandStr),K1[z]},function(z,P,T){return E.optional(function(){z.assert(P,T+'==="cw"||'+T+'==="ccw"',"invalid frontFace, must be one of cw,ccw")}),P.def(T+'==="cw"?'+qv+":"+Y1)});case $1:return H(function(z){return E.command(vn(z)&&z.length===4,"color.mask must be length 4 array",S.commandStr),z.map(function(P){return!!P})},function(z,P,T){return E.optional(function(){z.assert(P,z.shared.isArrayLike+"("+T+")&&"+T+".length===4","invalid color.mask")}),Ke(4,function(B){return"!!"+T+"["+B+"]"})});case G1:return H(function(z){E.command(typeof z=="object"&&z,$,S.commandStr);var P="value"in z?z.value:1,T=!!z.invert;return E.command(typeof P=="number"&&P>=0&&P<=1,"sample.coverage.value must be a number between 0 and 1",S.commandStr),[P,T]},function(z,P,T){E.optional(function(){z.assert(P,T+"&&typeof "+T+'==="object"',"invalid sample.coverage")});var B=P.def('"value" in ',T,"?+",T,".value:1"),Y=P.def("!!",T,".invert");return[B,Y]})}}),V}function Dn(L,S){var I=L.static,U=L.dynamic,V={};return Object.keys(I).forEach(function(D){var $=I[D],H;if(typeof $=="number"||typeof $=="boolean")H=_n(function(){return $});else if(typeof $=="function"){var z=$._reglType;z==="texture2d"||z==="textureCube"?H=_n(function(P){return P.link($)}):z==="framebuffer"||z==="framebufferCube"?(E.command($.color.length>0,'missing color attachment for framebuffer sent to uniform "'+D+'"',S.commandStr),H=_n(function(P){return P.link($.color[0])})):E.commandRaise('invalid data for uniform "'+D+'"',S.commandStr)}else vn($)?H=_n(function(P){var T=P.global.def("[",Ke($.length,function(B){return E.command(typeof $[B]=="number"||typeof $[B]=="boolean","invalid uniform "+D,P.commandStr),$[B]}),"]");return T}):E.commandRaise('invalid or missing data for uniform "'+D+'"',S.commandStr);H.value=$,V[D]=H}),Object.keys(U).forEach(function(D){var $=U[D];V[D]=Ur($,function(H,z){return H.invoke(z,$)})}),V}function ao(L,S){var I=L.static,U=L.dynamic,V={};return Object.keys(I).forEach(function(D){var $=I[D],H=k.id(D),z=new W;if(Lf($))z.state=_i,z.buffer=lt.getBuffer(lt.create($,Ei,!1,!0)),z.type=0;else{var P=lt.getBuffer($);if(P)z.state=_i,z.buffer=P,z.type=0;else if(E.command(typeof $=="object"&&$,"invalid data for attribute "+D,S.commandStr),"constant"in $){var T=$.constant;z.buffer="null",z.state=z1,typeof T=="number"?z.x=T:(E.command(vn(T)&&T.length>0&&T.length<=4,"invalid constant for attribute "+D,S.commandStr),wi.forEach(function(he,je){je<T.length&&(z[he]=T[je])}))}else{Lf($.buffer)?P=lt.getBuffer(lt.create($.buffer,Ei,!1,!0)):P=lt.getBuffer($.buffer),E.command(!!P,'missing buffer for attribute "'+D+'"',S.commandStr);var B=$.offset|0;E.command(B>=0,'invalid offset for attribute "'+D+'"',S.commandStr);var Y=$.stride|0;E.command(Y>=0&&Y<256,'invalid stride for attribute "'+D+'", must be integer betweeen [0, 255]',S.commandStr);var st=$.size|0;E.command(!("size"in $)||st>0&&st<=4,'invalid size for attribute "'+D+'", must be 1,2,3,4',S.commandStr);var ft=!!$.normalized,at=0;"type"in $&&(E.commandParameter($.type,xs,"invalid type for attribute "+D,S.commandStr),at=xs[$.type]);var kt=$.divisor|0;"divisor"in $&&(E.command(kt===0||At,'cannot specify divisor for attribute "'+D+'", instancing not supported',S.commandStr),E.command(kt>=0,'invalid divisor for attribute "'+D+'"',S.commandStr)),E.optional(function(){var he=S.commandStr,je=["buffer","offset","divisor","normalized","type","size","stride"];Object.keys($).forEach(function(ne){E.command(je.indexOf(ne)>=0,'unknown parameter "'+ne+'" for attribute pointer "'+D+'" (valid parameters are '+je+")",he)})}),z.buffer=P,z.state=_i,z.size=st,z.normalized=ft,z.type=at||P.dtype,z.offset=B,z.stride=Y,z.divisor=kt}}V[D]=_n(function(he,je){var ne=he.attribCache;if(H in ne)return ne[H];var Se={isStream:!1};return Object.keys(z).forEach(function(De){Se[De]=z[De]}),z.buffer&&(Se.buffer=he.link(z.buffer),Se.type=Se.type||Se.buffer+".dtype"),ne[H]=Se,Se})}),Object.keys(U).forEach(function(D){var $=U[D];function H(z,P){var T=z.invoke(P,$),B=z.shared,Y=z.constants,st=B.isBufferArgs,ft=B.buffer;E.optional(function(){z.assert(P,T+"&&(typeof "+T+'==="object"||typeof '+T+'==="function")&&('+st+"("+T+")||"+ft+".getBuffer("+T+")||"+ft+".getBuffer("+T+".buffer)||"+st+"("+T+'.buffer)||("constant" in '+T+"&&(typeof "+T+'.constant==="number"||'+B.isArrayLike+"("+T+".constant))))",'invalid dynamic attribute "'+D+'"')});var at={isStream:P.def(!1)},kt=new W;kt.state=_i,Object.keys(kt).forEach(function(Se){at[Se]=P.def(""+kt[Se])});var he=at.buffer,je=at.type;P("if(",st,"(",T,")){",at.isStream,"=true;",he,"=",ft,".createStream(",Ei,",",T,");",je,"=",he,".dtype;","}else{",he,"=",ft,".getBuffer(",T,");","if(",he,"){",je,"=",he,".dtype;",'}else if("constant" in ',T,"){",at.state,"=",z1,";","if(typeof "+T+'.constant === "number"){',at[wi[0]],"=",T,".constant;",wi.slice(1).map(function(Se){return at[Se]}).join("="),"=0;","}else{",wi.map(function(Se,De){return at[Se]+"="+T+".constant.length>"+De+"?"+T+".constant["+De+"]:0;"}).join(""),"}}else{","if(",st,"(",T,".buffer)){",he,"=",ft,".createStream(",Ei,",",T,".buffer);","}else{",he,"=",ft,".getBuffer(",T,".buffer);","}",je,'="type" in ',T,"?",Y.glTypes,"[",T,".type]:",he,".dtype;",at.normalized,"=!!",T,".normalized;");function ne(Se){P(at[Se],"=",T,".",Se,"|0;")}return ne("size"),ne("offset"),ne("stride"),ne("divisor"),P("}}"),P.exit("if(",at.isStream,"){",ft,".destroyStream(",he,");","}"),at}V[D]=Ur($,H)}),V}function zn(L,S){var I=L.static,U=L.dynamic;if(Gc in I){var V=I[Gc];return V!==null&&Tt.getVAO(V)===null&&(V=Tt.createVAO(V)),_n(function($){return $.link(Tt.getVAO(V))})}else if(Gc in U){var D=U[Gc];return Ur(D,function($,H){var z=$.invoke(H,D);return H.def($.shared.vao+".getVAO("+z+")")})}return null}function Vo(L){var S=L.static,I=L.dynamic,U={};return Object.keys(S).forEach(function(V){var D=S[V];U[V]=_n(function($,H){return typeof D=="number"||typeof D=="boolean"?""+D:$.link(D)})}),Object.keys(I).forEach(function(V){var D=I[V];U[V]=Ur(D,function($,H){return $.invoke(H,D)})}),U}function Sn(L,S,I,U,V){var D=L.static,$=L.dynamic;E.optional(function(){var ne=[Ms,Dc,qc,Ss,Es,xf,ks,yf,Fc,Gc].concat(xt);function Se(De){Object.keys(De).forEach(function(bo){E.command(ne.indexOf(bo)>=0,'unknown parameter "'+bo+'"',V.commandStr)})}Se(D),Se($)});var H=Fe(L,S),z=oe(L,V),P=Je(L,z,V),T=yo(L,V),B=Mn(L,V),Y=Ve(L,V,H);function st(ne){var Se=P[ne];Se&&(B[ne]=Se)}st(u0),st($t(gf));var ft=Object.keys(B).length>0,at={framebuffer:z,draw:T,shader:Y,state:B,dirty:ft,scopeVAO:null,drawVAO:null,useVAO:!1,attributes:{}};if(at.profile=Be(L,V),at.uniforms=Dn(I,V),at.drawVAO=at.scopeVAO=zn(L,V),!at.drawVAO&&Y.program&&!H&&C.angle_instanced_arrays){var kt=!0,he=Y.program.attributes.map(function(ne){var Se=S.static[ne];return kt=kt&&!!Se,Se});if(kt&&he.length>0){var je=Tt.getVAO(Tt.createVAO(he));at.drawVAO=new Ar(null,null,null,function(ne,Se){return ne.link(je)}),at.useVAO=!0}}return H?at.useVAO=!0:at.attributes=ao(S,V),at.context=Vo(U,V),at}function Rn(L,S,I){var U=L.shared,V=U.context,D=L.scope();Object.keys(I).forEach(function($){S.save(V,"."+$);var H=I[$],z=H.append(L,S);Array.isArray(z)?D(V,".",$,"=[",z.join(),"];"):D(V,".",$,"=",z,";")}),S(D)}function Nn(L,S,I,U){var V=L.shared,D=V.gl,$=V.framebuffer,H;jt&&(H=S.def(V.extensions,".webgl_draw_buffers"));var z=L.constants,P=z.drawBuffer,T=z.backBuffer,B;I?B=I.append(L,S):B=S.def($,".next"),U||S("if(",B,"!==",$,".cur){"),S("if(",B,"){",D,".bindFramebuffer(",Uv,",",B,".framebuffer);"),jt&&S(H,".drawBuffersWEBGL(",P,"[",B,".colorAttachments.length]);"),S("}else{",D,".bindFramebuffer(",Uv,",null);"),jt&&S(H,".drawBuffersWEBGL(",T,");"),S("}",$,".cur=",B,";"),U||S("}")}function Qn(L,S,I){var U=L.shared,V=U.gl,D=L.current,$=L.next,H=U.current,z=U.next,P=L.cond(H,".dirty");xt.forEach(function(T){var B=$t(T);if(!(B in I.state)){var Y,st;if(B in $){Y=$[B],st=D[B];var ft=Ke(pt[B].length,function(kt){return P.def(Y,"[",kt,"]")});P(L.cond(ft.map(function(kt,he){return kt+"!=="+st+"["+he+"]"}).join("||")).then(V,".",vt[B],"(",ft,");",ft.map(function(kt,he){return st+"["+he+"]="+kt}).join(";"),";"))}else{Y=P.def(z,".",B);var at=L.cond(Y,"!==",H,".",B);P(at),B in It?at(L.cond(Y).then(V,".enable(",It[B],");").else(V,".disable(",It[B],");"),H,".",B,"=",Y,";"):at(V,".",vt[B],"(",Y,");",H,".",B,"=",Y,";")}}}),Object.keys(I.state).length===0&&P(H,".dirty=false;"),S(P)}function ir(L,S,I,U){var V=L.shared,D=L.current,$=V.current,H=V.gl;Vv(Object.keys(I)).forEach(function(z){var P=I[z];if(!(U&&!U(P))){var T=P.append(L,S);if(It[z]){var B=It[z];P0(P)?T?S(H,".enable(",B,");"):S(H,".disable(",B,");"):S(L.cond(T).then(H,".enable(",B,");").else(H,".disable(",B,");")),S($,".",z,"=",T,";")}else if(vn(T)){var Y=D[z];S(H,".",vt[z],"(",T,");",T.map(function(st,ft){return Y+"["+ft+"]="+st}).join(";"),";")}else S(H,".",vt[z],"(",T,");",$,".",z,"=",T,";")}})}function mn(L,S){At&&(L.instancing=S.def(L.shared.extensions,".angle_instanced_arrays"))}function Ue(L,S,I,U,V){var D=L.shared,$=L.stats,H=D.current,z=D.timer,P=I.profile;function T(){return typeof performance=="undefined"?"Date.now()":"performance.now()"}var B,Y;function st(ne){B=S.def(),ne(B,"=",T(),";"),typeof V=="string"?ne($,".count+=",V,";"):ne($,".count++;"),wt&&(U?(Y=S.def(),ne(Y,"=",z,".getNumPendingQueries();")):ne(z,".beginQuery(",$,");"))}function ft(ne){ne($,".cpuTime+=",T(),"-",B,";"),wt&&(U?ne(z,".pushScopeStats(",Y,",",z,".getNumPendingQueries(),",$,");"):ne(z,".endQuery();"))}function at(ne){var Se=S.def(H,".profile");S(H,".profile=",ne,";"),S.exit(H,".profile=",Se,";")}var kt;if(P){if(P0(P)){P.enable?(st(S),ft(S.exit),at("true")):at("false");return}kt=P.append(L,S),at(kt)}else kt=S.def(H,".profile");var he=L.block();st(he),S("if(",kt,"){",he,"}");var je=L.block();ft(je),S.exit("if(",kt,"){",je,"}")}function cr(L,S,I,U,V){var D=L.shared;function $(z){switch(z){case bf:case Mf:case kf:return 2;case wf:case Sf:case Af:return 3;case _f:case Ef:case Tf:return 4;default:return 1}}function H(z,P,T){var B=D.gl,Y=S.def(z,".location"),st=S.def(D.attributes,"[",Y,"]"),ft=T.state,at=T.buffer,kt=[T.x,T.y,T.z,T.w],he=["buffer","normalized","offset","stride"];function je(){S("if(!",st,".buffer){",B,".enableVertexAttribArray(",Y,");}");var Se=T.type,De;if(T.size?De=S.def(T.size,"||",P):De=P,S("if(",st,".type!==",Se,"||",st,".size!==",De,"||",he.map(function(fn){return st+"."+fn+"!=="+T[fn]}).join("||"),"){",B,".bindBuffer(",Ei,",",at,".buffer);",B,".vertexAttribPointer(",[Y,De,Se,T.normalized,T.stride,T.offset],");",st,".type=",Se,";",st,".size=",De,";",he.map(function(fn){return st+"."+fn+"="+T[fn]+";"}).join(""),"}"),At){var bo=T.divisor;S("if(",st,".divisor!==",bo,"){",L.instancing,".vertexAttribDivisorANGLE(",[Y,bo],");",st,".divisor=",bo,";}")}}function ne(){S("if(",st,".buffer){",B,".disableVertexAttribArray(",Y,");",st,".buffer=null;","}if(",wi.map(function(Se,De){return st+"."+Se+"!=="+kt[De]}).join("||"),"){",B,".vertexAttrib4f(",Y,",",kt,");",wi.map(function(Se,De){return st+"."+Se+"="+kt[De]+";"}).join(""),"}")}ft===_i?je():ft===z1?ne():(S("if(",ft,"===",_i,"){"),je(),S("}else{"),ne(),S("}"))}U.forEach(function(z){var P=z.name,T=I.attributes[P],B;if(T){if(!V(T))return;B=T.append(L,S)}else{if(!V(Xv))return;var Y=L.scopeAttrib(P);E.optional(function(){L.assert(S,Y+".state","missing attribute "+P)}),B={},Object.keys(new W).forEach(function(st){B[st]=S.def(Y,".",st)})}H(L.link(z),$(z.info.type),B)})}function To(L,S,I,U,V){for(var D=L.shared,$=D.gl,H,z=0;z<U.length;++z){var P=U[z],T=P.name,B=P.info.type,Y=I.uniforms[T],st=L.link(P),ft=st+".location",at;if(Y){if(!V(Y))continue;if(P0(Y)){var kt=Y.value;if(E.command(kt!==null&&typeof kt!="undefined",'missing uniform "'+T+'"',L.commandStr),B===jc||B===Wc){E.command(typeof kt=="function"&&(B===jc&&(kt._reglType==="texture2d"||kt._reglType==="framebuffer")||B===Wc&&(kt._reglType==="textureCube"||kt._reglType==="framebufferCube")),"invalid texture for uniform "+T,L.commandStr);var he=L.link(kt._texture||kt.color[0]._texture);S($,".uniform1i(",ft,",",he+".bind());"),S.exit(he,".unbind();")}else if(B===Hc||B===Bc||B===Uc){E.optional(function(){E.command(vn(kt),"invalid matrix for uniform "+T,L.commandStr),E.command(B===Hc&&kt.length===4||B===Bc&&kt.length===9||B===Uc&&kt.length===16,"invalid length for matrix uniform "+T,L.commandStr)});var je=L.global.def("new Float32Array(["+Array.prototype.slice.call(kt)+"])"),ne=2;B===Bc?ne=3:B===Uc&&(ne=4),S($,".uniformMatrix",ne,"fv(",ft,",false,",je,");")}else{switch(B){case W1:E.commandType(kt,"number","uniform "+T,L.commandStr),H="1f";break;case bf:E.command(vn(kt)&&kt.length===2,"uniform "+T,L.commandStr),H="2f";break;case wf:E.command(vn(kt)&&kt.length===3,"uniform "+T,L.commandStr),H="3f";break;case _f:E.command(vn(kt)&&kt.length===4,"uniform "+T,L.commandStr),H="4f";break;case X1:E.commandType(kt,"boolean","uniform "+T,L.commandStr),H="1i";break;case V1:E.commandType(kt,"number","uniform "+T,L.commandStr),H="1i";break;case kf:E.command(vn(kt)&&kt.length===2,"uniform "+T,L.commandStr),H="2i";break;case Mf:E.command(vn(kt)&&kt.length===2,"uniform "+T,L.commandStr),H="2i";break;case Af:E.command(vn(kt)&&kt.length===3,"uniform "+T,L.commandStr),H="3i";break;case Sf:E.command(vn(kt)&&kt.length===3,"uniform "+T,L.commandStr),H="3i";break;case Tf:E.command(vn(kt)&&kt.length===4,"uniform "+T,L.commandStr),H="4i";break;case Ef:E.command(vn(kt)&&kt.length===4,"uniform "+T,L.commandStr),H="4i";break}S($,".uniform",H,"(",ft,",",vn(kt)?Array.prototype.slice.call(kt):kt,");")}continue}else at=Y.append(L,S)}else{if(!V(Xv))continue;at=S.def(D.uniforms,"[",k.id(T),"]")}B===jc?(E(!Array.isArray(at),"must specify a scalar prop for textures"),S("if(",at,"&&",at,'._reglType==="framebuffer"){',at,"=",at,".color[0];","}")):B===Wc&&(E(!Array.isArray(at),"must specify a scalar prop for cube maps"),S("if(",at,"&&",at,'._reglType==="framebufferCube"){',at,"=",at,".color[0];","}")),E.optional(function(){function Tr($a,em){L.assert(S,$a,'bad data or missing for uniform "'+T+'".  '+em)}function Q1($a){E(!Array.isArray(at),"must not specify an array type for uniform"),Tr("typeof "+at+'==="'+$a+'"',"invalid type, expected "+$a)}function xa($a,em){Array.isArray(at)?E(at.length===$a,"must have length "+$a):Tr(D.isArrayLike+"("+at+")&&"+at+".length==="+$a,"invalid vector, should have length "+$a,L.commandStr)}function tm($a){E(!Array.isArray(at),"must not specify a value type"),Tr("typeof "+at+'==="function"&&'+at+'._reglType==="texture'+($a===Fv?"2d":"Cube")+'"',"invalid texture type",L.commandStr)}switch(B){case V1:Q1("number");break;case Mf:xa(2,"number");break;case Sf:xa(3,"number");break;case Ef:xa(4,"number");break;case W1:Q1("number");break;case bf:xa(2,"number");break;case wf:xa(3,"number");break;case _f:xa(4,"number");break;case X1:Q1("boolean");break;case kf:xa(2,"boolean");break;case Af:xa(3,"boolean");break;case Tf:xa(4,"boolean");break;case Hc:xa(4,"number");break;case Bc:xa(9,"number");break;case Uc:xa(16,"number");break;case jc:tm(Fv);break;case Wc:tm(Bw);break}});var Se=1;switch(B){case jc:case Wc:var De=S.def(at,"._texture");S($,".uniform1i(",ft,",",De,".bind());"),S.exit(De,".unbind();");continue;case V1:case X1:H="1i";break;case Mf:case kf:H="2i",Se=2;break;case Sf:case Af:H="3i",Se=3;break;case Ef:case Tf:H="4i",Se=4;break;case W1:H="1f";break;case bf:H="2f",Se=2;break;case wf:H="3f",Se=3;break;case _f:H="4f",Se=4;break;case Hc:H="Matrix2fv";break;case Bc:H="Matrix3fv";break;case Uc:H="Matrix4fv";break}if(S($,".uniform",H,"(",ft,","),H.charAt(0)==="M"){var bo=Math.pow(B-Hc+2,2),fn=L.global.def("new Float32Array(",bo,")");Array.isArray(at)?S("false,(",Ke(bo,function(Tr){return fn+"["+Tr+"]="+at[Tr]}),",",fn,")"):S("false,(Array.isArray(",at,")||",at," instanceof Float32Array)?",at,":(",Ke(bo,function(Tr){return fn+"["+Tr+"]="+at+"["+Tr+"]"}),",",fn,")")}else Se>1?S(Ke(Se,function(Tr){return Array.isArray(at)?at[Tr]:at+"["+Tr+"]"})):(E(!Array.isArray(at),"uniform value must not be an array"),S(at));S(");")}}function we(L,S,I,U){var V=L.shared,D=V.gl,$=V.draw,H=U.draw;function z(){var De=H.elements,bo,fn=S;return De?((De.contextDep&&U.contextDynamic||De.propDep)&&(fn=I),bo=De.append(L,fn)):bo=fn.def($,".",Ss),bo&&fn("if("+bo+")"+D+".bindBuffer("+qw+","+bo+".buffer.buffer);"),bo}function P(){var De=H.count,bo,fn=S;return De?((De.contextDep&&U.contextDynamic||De.propDep)&&(fn=I),bo=De.append(L,fn),E.optional(function(){De.MISSING&&L.assert(S,"false","missing vertex count"),De.DYNAMIC&&L.assert(fn,bo+">=0","missing vertex count")})):(bo=fn.def($,".",ks),E.optional(function(){L.assert(fn,bo+">=0","missing vertex count")})),bo}var T=z();function B(De){var bo=H[De];return bo?bo.contextDep&&U.contextDynamic||bo.propDep?bo.append(L,I):bo.append(L,S):S.def($,".",De)}var Y=B(Es),st=B(xf),ft=P();if(typeof ft=="number"){if(ft===0)return}else I("if(",ft,"){"),I.exit("}");var at,kt;At&&(at=B(yf),kt=L.instancing);var he=T+".type",je=H.elements&&P0(H.elements);function ne(){function De(){I(kt,".drawElementsInstancedANGLE(",[Y,ft,he,st+"<<(("+he+"-"+gv+")>>1)",at],");")}function bo(){I(kt,".drawArraysInstancedANGLE(",[Y,st,ft,at],");")}T?je?De():(I("if(",T,"){"),De(),I("}else{"),bo(),I("}")):bo()}function Se(){function De(){I(D+".drawElements("+[Y,ft,he,st+"<<(("+he+"-"+gv+")>>1)"]+");")}function bo(){I(D+".drawArrays("+[Y,st,ft]+");")}T?je?De():(I("if(",T,"){"),De(),I("}else{"),bo(),I("}")):bo()}At&&(typeof at!="number"||at>=0)?typeof at=="string"?(I("if(",at,">0){"),ne(),I("}else if(",at,"<0){"),Se(),I("}")):ne():Se()}function no(L,S,I,U,V){var D=Re(),$=D.proc("body",V);return E.optional(function(){D.commandStr=S.commandStr,D.command=D.link(S.commandStr)}),At&&(D.instancing=$.def(D.shared.extensions,".angle_instanced_arrays")),L(D,$,I,U),D.compile().body}function vo(L,S,I,U){mn(L,S),I.useVAO?I.drawVAO?S(L.shared.vao,".setVAO(",I.drawVAO.append(L,S),");"):S(L.shared.vao,".setVAO(",L.shared.vao,".targetVAO);"):(S(L.shared.vao,".setVAO(null);"),cr(L,S,I,U.attributes,function(){return!0})),To(L,S,I,U.uniforms,function(){return!0}),we(L,S,S,I)}function gn(L,S){var I=L.proc("draw",1);mn(L,I),Rn(L,I,S.context),Nn(L,I,S.framebuffer),Qn(L,I,S),ir(L,I,S.state),Ue(L,I,S,!1,!0);var U=S.shader.progVar.append(L,I);if(I(L.shared.gl,".useProgram(",U,".program);"),S.shader.program)vo(L,I,S,S.shader.program);else{I(L.shared.vao,".setVAO(null);");var V=L.global.def("{}"),D=I.def(U,".id"),$=I.def(V,"[",D,"]");I(L.cond($).then($,".call(this,a0);").else($,"=",V,"[",D,"]=",L.link(function(H){return no(vo,L,S,H,1)}),"(",U,");",$,".call(this,a0);"))}Object.keys(S.state).length>0&&I(L.shared.current,".dirty=true;")}function t0(L,S,I,U){L.batchId="a1",mn(L,S);function V(){return!0}cr(L,S,I,U.attributes,V),To(L,S,I,U.uniforms,V),we(L,S,S,I)}function Ts(L,S,I,U){mn(L,S);var V=I.contextDep,D=S.def(),$="a0",H="a1",z=S.def();L.shared.props=z,L.batchId=D;var P=L.scope(),T=L.scope();S(P.entry,"for(",D,"=0;",D,"<",H,";++",D,"){",z,"=",$,"[",D,"];",T,"}",P.exit);function B(he){return he.contextDep&&V||he.propDep}function Y(he){return!B(he)}if(I.needsContext&&Rn(L,T,I.context),I.needsFramebuffer&&Nn(L,T,I.framebuffer),ir(L,T,I.state,B),I.profile&&B(I.profile)&&Ue(L,T,I,!1,!0),U)I.useVAO?I.drawVAO?B(I.drawVAO)?T(L.shared.vao,".setVAO(",I.drawVAO.append(L,T),");"):P(L.shared.vao,".setVAO(",I.drawVAO.append(L,P),");"):P(L.shared.vao,".setVAO(",L.shared.vao,".targetVAO);"):(P(L.shared.vao,".setVAO(null);"),cr(L,P,I,U.attributes,Y),cr(L,T,I,U.attributes,B)),To(L,P,I,U.uniforms,Y),To(L,T,I,U.uniforms,B),we(L,P,T,I);else{var st=L.global.def("{}"),ft=I.shader.progVar.append(L,T),at=T.def(ft,".id"),kt=T.def(st,"[",at,"]");T(L.shared.gl,".useProgram(",ft,".program);","if(!",kt,"){",kt,"=",st,"[",at,"]=",L.link(function(he){return no(t0,L,I,he,2)}),"(",ft,");}",kt,".call(this,a0[",D,"],",D,");")}}function N(L,S){var I=L.proc("batch",2);L.batchId="0",mn(L,I);var U=!1,V=!0;Object.keys(S.context).forEach(function(st){U=U||S.context[st].propDep}),U||(Rn(L,I,S.context),V=!1);var D=S.framebuffer,$=!1;D?(D.propDep?U=$=!0:D.contextDep&&U&&($=!0),$||Nn(L,I,D)):Nn(L,I,null),S.state.viewport&&S.state.viewport.propDep&&(U=!0);function H(st){return st.contextDep&&U||st.propDep}Qn(L,I,S),ir(L,I,S.state,function(st){return!H(st)}),(!S.profile||!H(S.profile))&&Ue(L,I,S,!1,"a1"),S.contextDep=U,S.needsContext=V,S.needsFramebuffer=$;var z=S.shader.progVar;if(z.contextDep&&U||z.propDep)Ts(L,I,S,null);else{var P=z.append(L,I);if(I(L.shared.gl,".useProgram(",P,".program);"),S.shader.program)Ts(L,I,S,S.shader.program);else{I(L.shared.vao,".setVAO(null);");var T=L.global.def("{}"),B=I.def(P,".id"),Y=I.def(T,"[",B,"]");I(L.cond(Y).then(Y,".call(this,a0,a1);").else(Y,"=",T,"[",B,"]=",L.link(function(st){return no(Ts,L,S,st,2)}),"(",P,");",Y,".call(this,a0,a1);"))}}Object.keys(S.state).length>0&&I(L.shared.current,".dirty=true;")}function ot(L,S){var I=L.proc("scope",3);L.batchId="a2";var U=L.shared,V=U.current;Rn(L,I,S.context),S.framebuffer&&S.framebuffer.append(L,I),Vv(Object.keys(S.state)).forEach(function($){var H=S.state[$],z=H.append(L,I);vn(z)?z.forEach(function(P,T){I.set(L.next[$],"["+T+"]",P)}):I.set(U.next,"."+$,z)}),Ue(L,I,S,!0,!0),[Ss,xf,ks,yf,Es].forEach(function($){var H=S.draw[$];H&&I.set(U.draw,"."+$,""+H.append(L,I))}),Object.keys(S.uniforms).forEach(function($){var H=S.uniforms[$].append(L,I);Array.isArray(H)&&(H="["+H.join()+"]"),I.set(U.uniforms,"["+k.id($)+"]",H)}),Object.keys(S.attributes).forEach(function($){var H=S.attributes[$].append(L,I),z=L.scopeAttrib($);Object.keys(new W).forEach(function(P){I.set(z,"."+P,H[P])})}),S.scopeVAO&&I.set(U.vao,".targetVAO",S.scopeVAO.append(L,I));function D($){var H=S.shader[$];H&&I.set(U.shader,"."+$,H.append(L,I))}D(Dc),D(qc),Object.keys(S.state).length>0&&(I(V,".dirty=true;"),I.exit(V,".dirty=true;")),I("a1(",L.shared.context,",a0,",L.batchId,");")}function Q(L){if(!(typeof L!="object"||vn(L))){for(var S=Object.keys(L),I=0;I<S.length;++I)if(Pt.isDynamic(L[S[I]]))return!0;return!1}}function Zt(L,S,I){var U=S.static[I];if(!U||!Q(U))return;var V=L.global,D=Object.keys(U),$=!1,H=!1,z=!1,P=L.global.def("{}");D.forEach(function(B){var Y=U[B];if(Pt.isDynamic(Y)){typeof Y=="function"&&(Y=U[B]=Pt.unbox(Y));var st=Ur(Y,null);$=$||st.thisDep,z=z||st.propDep,H=H||st.contextDep}else{switch(V(P,".",B,"="),typeof Y){case"number":V(Y);break;case"string":V('"',Y,'"');break;case"object":Array.isArray(Y)&&V("[",Y.join(),"]");break;default:V(L.link(Y));break}V(";")}});function T(B,Y){D.forEach(function(st){var ft=U[st];if(Pt.isDynamic(ft)){var at=B.invoke(Y,ft);Y(P,".",st,"=",at,";")}})}S.dynamic[I]=new Pt.DynamicVariable(mf,{thisDep:$,contextDep:H,propDep:z,ref:P,append:T}),delete S.static[I]}function to(L,S,I,U,V){var D=Re();D.stats=D.link(V),Object.keys(S.static).forEach(function(H){Zt(D,S,H)}),Dw.forEach(function(H){Zt(D,L,H)});var $=Sn(L,S,I,U,D);return gn(D,$),ot(D,$),N(D,$),e(D.compile(),{destroy:function(){$.shader.program.destroy()}})}return{next:Yt,current:pt,procs:function(){var L=Re(),S=L.proc("poll"),I=L.proc("refresh"),U=L.block();S(U),I(U);var V=L.shared,D=V.gl,$=V.next,H=V.current;U(H,".dirty=false;"),Nn(L,S),Nn(L,I,null,!0);var z;At&&(z=L.link(At)),C.oes_vertex_array_object&&I(L.link(C.oes_vertex_array_object),".bindVertexArrayOES(null);");for(var P=0;P<et.maxAttributes;++P){var T=I.def(V.attributes,"[",P,"]"),B=L.cond(T,".buffer");B.then(D,".enableVertexAttribArray(",P,");",D,".bindBuffer(",Ei,",",T,".buffer.buffer);",D,".vertexAttribPointer(",P,",",T,".size,",T,".type,",T,".normalized,",T,".stride,",T,".offset);").else(D,".disableVertexAttribArray(",P,");",D,".vertexAttrib4f(",P,",",T,".x,",T,".y,",T,".z,",T,".w);",T,".buffer=null;"),I(B),At&&I(z,".vertexAttribDivisorANGLE(",P,",",T,".divisor);")}return I(L.shared.vao,".currentVAO=null;",L.shared.vao,".setVAO(",L.shared.vao,".targetVAO);"),Object.keys(It).forEach(function(Y){var st=It[Y],ft=U.def($,".",Y),at=L.block();at("if(",ft,"){",D,".enable(",st,")}else{",D,".disable(",st,")}",H,".",Y,"=",ft,";"),I(at),S("if(",ft,"!==",H,".",Y,"){",at,"}")}),Object.keys(vt).forEach(function(Y){var st=vt[Y],ft=pt[Y],at,kt,he=L.block();if(he(D,".",st,"("),vn(ft)){var je=ft.length;at=L.global.def($,".",Y),kt=L.global.def(H,".",Y),he(Ke(je,function(ne){return at+"["+ne+"]"}),");",Ke(je,function(ne){return kt+"["+ne+"]="+at+"["+ne+"];"}).join("")),S("if(",Ke(je,function(ne){return at+"["+ne+"]!=="+kt+"["+ne+"]"}).join("||"),"){",he,"}")}else at=U.def($,".",Y),kt=U.def(H,".",Y),he(at,");",H,".",Y,"=",at,";"),S("if(",at,"!==",kt,"){",he,"}");I(he)}),L.compile()}(),compile:to}}function a4(){return{vaoCount:0,bufferCount:0,elementsCount:0,framebufferCount:0,shaderCount:0,textureCount:0,cubeCount:0,renderbufferCount:0,maxTextureUnits:0}}var s4=34918,i4=34919,Yv=35007,c4=function(x,k){if(!k.ext_disjoint_timer_query)return null;var C=[];function et(){return C.pop()||k.ext_disjoint_timer_query.createQueryEXT()}function lt(At){C.push(At)}var J=[];function nt(At){var jt=et();k.ext_disjoint_timer_query.beginQueryEXT(Yv,jt),J.push(jt),wt(J.length-1,J.length,At)}function bt(){k.ext_disjoint_timer_query.endQueryEXT(Yv)}function Mt(){this.startQueryIndex=-1,this.endQueryIndex=-1,this.sum=0,this.stats=null}var Tt=[];function St(){return Tt.pop()||new Mt}function Rt(At){Tt.push(At)}var qt=[];function wt(At,jt,pt){var Yt=St();Yt.startQueryIndex=At,Yt.endQueryIndex=jt,Yt.sum=0,Yt.stats=pt,qt.push(Yt)}var Ct=[],W=[];function rt(){var At,jt,pt=J.length;if(pt!==0){W.length=Math.max(W.length,pt+1),Ct.length=Math.max(Ct.length,pt+1),Ct[0]=0,W[0]=0;var Yt=0;for(At=0,jt=0;jt<J.length;++jt){var xt=J[jt];k.ext_disjoint_timer_query.getQueryObjectEXT(xt,i4)?(Yt+=k.ext_disjoint_timer_query.getQueryObjectEXT(xt,s4),lt(xt)):J[At++]=xt,Ct[jt+1]=Yt,W[jt+1]=At}for(J.length=At,At=0,jt=0;jt<qt.length;++jt){var It=qt[jt],vt=It.startQueryIndex,$t=It.endQueryIndex;It.sum+=Ct[$t]-Ct[vt];var me=W[vt],Ie=W[$t];Ie===me?(It.stats.gpuTime+=It.sum/1e6,Rt(It)):(It.startQueryIndex=me,It.endQueryIndex=Ie,qt[At++]=It)}qt.length=At}}return{beginQuery:nt,endQuery:bt,pushScopeStats:wt,update:rt,getNumPendingQueries:function(){return J.length},clear:function(){C.push.apply(C,J);for(var At=0;At<C.length;At++)k.ext_disjoint_timer_query.deleteQueryEXT(C[At]);J.length=0,C.length=0},restore:function(){J.length=0,C.length=0}}},l4=16384,f4=256,h4=1024,u4=34962,Kv="webglcontextlost",Qv="webglcontextrestored",Zv=1,d4=2,p4=3;function Jv(x,k){for(var C=0;C<x.length;++C)if(x[C]===k)return C;return-1}function v4(x){var k=ke(x);if(!k)return null;var C=k.gl,et=C.getContextAttributes(),lt=C.isContextLost(),J=Te(C,k);if(!J)return null;var nt=le(),bt=a4(),Mt=J.extensions,Tt=c4(C,Mt),St=Nt(),Rt=C.drawingBufferWidth,qt=C.drawingBufferHeight,wt={tick:0,time:0,viewportWidth:Rt,viewportHeight:qt,framebufferWidth:Rt,framebufferHeight:qt,drawingBufferWidth:Rt,drawingBufferHeight:qt,pixelRatio:k.pixelRatio},Ct={},W={elements:null,primitive:4,count:-1,offset:0,instances:-1},rt=tb(C,Mt),At=mb(C,bt,k,pt),jt=Tw(C,Mt,rt,bt,At);function pt(we){return jt.destroyBuffer(we)}var Yt=Tb(C,Mt,At,bt),xt=Nw(C,nt,bt,k),It=aw(C,Mt,rt,function(){me.procs.poll()},wt,bt,k),vt=sw(C,Mt,rt,bt,k),$t=kw(C,Mt,rt,It,vt,bt),me=r4(C,nt,Mt,rt,At,Yt,It,$t,Ct,jt,xt,W,wt,Tt,k),Ie=Pw(C,$t,me.procs.poll,wt,et,Mt,rt),Gt=me.next,Lt=C.canvas,ut=[],Re=[],Be=[],oe=[k.onDestroy],Je=null;function Fe(){if(ut.length===0){Tt&&Tt.update(),Je=null;return}Je=Dt.next(Fe),ir();for(var we=ut.length-1;we>=0;--we){var no=ut[we];no&&no(wt,null,0)}C.flush(),Tt&&Tt.update()}function Ve(){!Je&&ut.length>0&&(Je=Dt.next(Fe))}function yo(){Je&&(Dt.cancel(Fe),Je=null)}function Mn(we){we.preventDefault(),lt=!0,yo(),Re.forEach(function(no){no()})}function Dn(we){C.getError(),lt=!1,J.restore(),xt.restore(),At.restore(),It.restore(),vt.restore(),$t.restore(),jt.restore(),Tt&&Tt.restore(),me.procs.refresh(),Ve(),Be.forEach(function(no){no()})}Lt&&(Lt.addEventListener(Kv,Mn,!1),Lt.addEventListener(Qv,Dn,!1));function ao(){ut.length=0,yo(),Lt&&(Lt.removeEventListener(Kv,Mn),Lt.removeEventListener(Qv,Dn)),xt.clear(),$t.clear(),vt.clear(),It.clear(),Yt.clear(),At.clear(),jt.clear(),Tt&&Tt.clear(),oe.forEach(function(we){we()})}function zn(we){E(!!we,"invalid args to regl({...})"),E.type(we,"object","invalid args to regl({...})");function no(V){var D=e({},V);delete D.uniforms,delete D.attributes,delete D.context,delete D.vao,"stencil"in D&&D.stencil.op&&(D.stencil.opBack=D.stencil.opFront=D.stencil.op,delete D.stencil.op);function $(H){if(H in D){var z=D[H];delete D[H],Object.keys(z).forEach(function(P){D[H+"."+P]=z[P]})}}return $("blend"),$("depth"),$("cull"),$("stencil"),$("polygonOffset"),$("scissor"),$("sample"),"vao"in V&&(D.vao=V.vao),D}function vo(V,D){var $={},H={};return Object.keys(V).forEach(function(z){var P=V[z];if(Pt.isDynamic(P)){H[z]=Pt.unbox(P,z);return}else if(D&&Array.isArray(P)){for(var T=0;T<P.length;++T)if(Pt.isDynamic(P[T])){H[z]=Pt.unbox(P,z);return}}$[z]=P}),{dynamic:H,static:$}}var gn=vo(we.context||{},!0),t0=vo(we.uniforms||{},!0),Ts=vo(we.attributes||{},!1),N=vo(no(we),!1),ot={gpuTime:0,cpuTime:0,count:0},Q=me.compile(N,Ts,t0,gn,ot),Zt=Q.draw,to=Q.batch,L=Q.scope,S=[];function I(V){for(;S.length<V;)S.push(null);return S}function U(V,D){var $;if(lt&&E.raise("context lost"),typeof V=="function")return L.call(this,null,V,0);if(typeof D=="function")if(typeof V=="number")for($=0;$<V;++$)L.call(this,null,D,$);else if(Array.isArray(V))for($=0;$<V.length;++$)L.call(this,V[$],D,$);else return L.call(this,V,D,0);else if(typeof V=="number"){if(V>0)return to.call(this,I(V|0),V|0)}else if(Array.isArray(V)){if(V.length)return to.call(this,V,V.length)}else return Zt.call(this,V)}return e(U,{stats:ot,destroy:function(){Q.destroy()}})}var Vo=$t.setFBO=zn({framebuffer:Pt.define.call(null,Zv,"framebuffer")});function Sn(we,no){var vo=0;me.procs.poll();var gn=no.color;gn&&(C.clearColor(+gn[0]||0,+gn[1]||0,+gn[2]||0,+gn[3]||0),vo|=l4),"depth"in no&&(C.clearDepth(+no.depth),vo|=f4),"stencil"in no&&(C.clearStencil(no.stencil|0),vo|=h4),E(!!vo,"called regl.clear with no buffer specified"),C.clear(vo)}function Rn(we){if(E(typeof we=="object"&&we,"regl.clear() takes an object as input"),"framebuffer"in we)if(we.framebuffer&&we.framebuffer_reglType==="framebufferCube")for(var no=0;no<6;++no)Vo(e({framebuffer:we.framebuffer.faces[no]},we),Sn);else Vo(we,Sn);else Sn(null,we)}function Nn(we){E.type(we,"function","regl.frame() callback must be a function"),ut.push(we);function no(){var vo=Jv(ut,we);E(vo>=0,"cannot cancel a frame twice");function gn(){var t0=Jv(ut,gn);ut[t0]=ut[ut.length-1],ut.length-=1,ut.length<=0&&yo()}ut[vo]=gn}return Ve(),{cancel:no}}function Qn(){var we=Gt.viewport,no=Gt.scissor_box;we[0]=we[1]=no[0]=no[1]=0,wt.viewportWidth=wt.framebufferWidth=wt.drawingBufferWidth=we[2]=no[2]=C.drawingBufferWidth,wt.viewportHeight=wt.framebufferHeight=wt.drawingBufferHeight=we[3]=no[3]=C.drawingBufferHeight}function ir(){wt.tick+=1,wt.time=Ue(),Qn(),me.procs.poll()}function mn(){It.refresh(),Qn(),me.procs.refresh(),Tt&&Tt.update()}function Ue(){return(Nt()-St)/1e3}mn();function cr(we,no){E.type(no,"function","listener callback must be a function");var vo;switch(we){case"frame":return Nn(no);case"lost":vo=Re;break;case"restore":vo=Be;break;case"destroy":vo=oe;break;default:E.raise("invalid event, must be one of frame,lost,restore,destroy")}return vo.push(no),{cancel:function(){for(var gn=0;gn<vo.length;++gn)if(vo[gn]===no){vo[gn]=vo[vo.length-1],vo.pop();return}}}}var To=e(zn,{clear:Rn,prop:Pt.define.bind(null,Zv),context:Pt.define.bind(null,d4),this:Pt.define.bind(null,p4),draw:zn({}),buffer:function(we){return At.create(we,u4,!1,!1)},elements:function(we){return Yt.create(we,!1)},texture:It.create2D,cube:It.createCube,renderbuffer:vt.create,framebuffer:$t.create,framebufferCube:$t.createCube,vao:jt.createVAO,attributes:et,frame:Nn,on:cr,limits:rt,hasExtension:function(we){return rt.extensions.indexOf(we.toLowerCase())>=0},read:Ie,destroy:ao,_gl:C,_refresh:mn,poll:function(){ir(),Tt&&Tt.update()},now:Ue,stats:bt});return k.onDone(null,To),To}return v4})});var Ls=mt((Yk,Mm)=>{"use strict";var p0=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],v0=(t,e)=>[t[0]+e[0],t[1]+e[1],t[2]+e[2]],e0=(t,e)=>[t[0]*e,t[1]*e,t[2]*e],If=(t,e)=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2],tl=(t,e)=>[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]],iu=t=>Math.hypot(t[0],t[1],t[2]),ba=t=>{let e=iu(t)||1;return[t[0]/e,t[1]/e,t[2]/e]};function Ci(t,e){let o=t.length-1,n=Math.min(Math.max(e,0),1)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,s=t[Math.max(0,r-1)],i=t[r],c=t[r+1],f=t[Math.min(o,r+2)],l=[0,0,0];for(let h=0;h<3;h++)l[h]=.5*(2*i[h]+(-s[h]+c[h])*a+(2*s[h]-5*i[h]+4*c[h]-f[h])*a*a+(-s[h]+3*i[h]-3*c[h]+f[h])*a*a*a);return l}function z4(t,e){return Ci(t.map(o=>[o,0,0]),e)[0]}function R4(t,e,o,n){let r={curMat:[0,0,0]},s={r:[1,0,0,0,1,0,0,0,1],t:[0,0,0],s:1},i=[];r.save=()=>{i.push({r:s.r.slice(),t:s.t.slice(),s:s.s})},r.restore=()=>{s=i.pop()};let c=(u,v)=>{let p=new Array(9);for(let d=0;d<3;d++)for(let m=0;m<3;m++)p[d*3+m]=u[d*3]*v[m]+u[d*3+1]*v[3+m]+u[d*3+2]*v[6+m];return p},f=u=>[s.r[0]*u[0]+s.r[1]*u[1]+s.r[2]*u[2],s.r[3]*u[0]+s.r[4]*u[1]+s.r[5]*u[2],s.r[6]*u[0]+s.r[7]*u[1]+s.r[8]*u[2]];r.translate=(u,v,p)=>{let d=f([u,v,p]);s.t=[s.t[0]+d[0]*s.s,s.t[1]+d[1]*s.s,s.t[2]+d[2]*s.s]},r.scale=u=>{s.s*=u},r.rotateY=u=>{let v=Math.cos(u),p=Math.sin(u);s.r=c(s.r,[v,0,p,0,1,0,-p,0,v])},r.vert=(u,v,p)=>{let d=p||r.curMat,m=f(u),g=ba(f(v));return t.push(m[0]*s.s+s.t[0],m[1]*s.s+s.t[1],m[2]*s.s+s.t[2]),e.push(g[0],g[1],g[2]),n.push(d[0],d[1],d[2]),t.length/3-1};let l=u=>[t[u*3],t[u*3+1],t[u*3+2]],h=u=>[e[u*3],e[u*3+1],e[u*3+2]];return r.tri=(u,v,p)=>{let d=l(u),m=tl(p0(l(v),d),p0(l(p),d)),g=v0(v0(h(u),h(v)),h(p));If(m,g)<0?o.push(u,p,v):o.push(u,v,p)},r.box=(u,v,p,d,m,g,y)=>{let b=[[[u,v,p],[d,v,p],[u,m,p],[d,m,p],[0,0,-1]],[[d,v,g],[u,v,g],[d,m,g],[u,m,g],[0,0,1]],[[u,v,g],[u,v,p],[u,m,g],[u,m,p],[-1,0,0]],[[d,v,p],[d,v,g],[d,m,p],[d,m,g],[1,0,0]],[[u,m,p],[d,m,p],[u,m,g],[d,m,g],[0,1,0]],[[u,v,g],[d,v,g],[u,v,p],[d,v,p],[0,-1,0]]];for(let w of b){let _=r.vert(w[0],w[4],y),M=r.vert(w[1],w[4],y),A=r.vert(w[2],w[4],y),O=r.vert(w[3],w[4],y);r.tri(_,M,A),r.tri(M,O,A)}},r.surface=(u,v,p,d)=>{d=d||{};let m=.001,g=_=>Math.min(1,Math.max(0,_)),y=[],b=[];for(let _=0;_<=v;_++){let M=[],A=[];for(let O=0;O<=p;O++){let R=_/v,q=O/p,F=u(R,q),K=Math.min(1-m,Math.max(m,R)),G=d.wrapV?q:Math.min(1-m,Math.max(m,q)),X=p0(u(g(K+m),G),u(g(K-m),G)),dt=d.wrapV?G+m:g(G+m),Ot=d.wrapV?G-m:g(G-m),zt=p0(u(K,dt),u(K,Ot)),gt=tl(X,zt);iu(gt)<1e-14&&(gt=d.inside?p0(F,d.inside(R,q)):[0,1,0]),gt=ba(gt),d.inside&&If(gt,p0(F,d.inside(R,q)))<0&&(gt=e0(gt,-1));let ct=d.mat?d.mat(R,q,F):null;M.push(r.vert(F,gt,ct)),d.double&&A.push(r.vert(F,e0(gt,-1),ct))}y.push(M),b.push(A)}let w=_=>{for(let M=0;M<v;M++)for(let A=0;A<p;A++){let O=_[M][A],R=_[M+1][A],q=_[M][A+1],F=_[M+1][A+1];r.tri(O,R,q),r.tri(R,F,q)}};w(y),d.double&&w(b)},r.ellipsoid=(u,v,p,d,m)=>{m=m||{};let g=m.warp||null;r.surface((y,b)=>{let w=y*Math.PI,_=b*Math.PI*2,M=g?g(y,b):1;return[u[0]+v[0]*M*Math.sin(w)*Math.cos(_),u[1]+v[1]*M*Math.cos(w),u[2]+v[2]*M*Math.sin(w)*Math.sin(_)]},p||10,d||14,{wrapV:!0,inside:()=>u,mat:m.mat})},r.tube=(u,v,p,d,m)=>{m=m||{};let g=40,y=[],b=null;for(let M=0;M<=g;M++){let A=M/g,O=Ci(u,Math.max(0,A-.01)),R=Ci(u,Math.min(1,A+.01)),q=ba(p0(R,O)),F;if(b)F=ba(p0(b,e0(q,If(b,q))));else{let K=Math.abs(q[1])<.9?[0,1,0]:[1,0,0];F=ba(tl(q,K))}y.push({N:F,B:ba(tl(q,F))}),b=F}let w=M=>{let A=Math.min(Math.max(M,0),1)*g,O=Math.min(g-1,Math.floor(A)),R=A-O,q=y[O],F=y[O+1];return{N:ba(v0(e0(q.N,1-R),e0(F.N,R))),B:ba(v0(e0(q.B,1-R),e0(F.B,R)))}},_=m.squash||[1,1];r.surface((M,A)=>{let O=Ci(u,M),R=w(M),q=v(M),F=A*Math.PI*2;return v0(O,v0(e0(R.N,Math.cos(F)*q*_[0]),e0(R.B,Math.sin(F)*q*_[1])))},p||12,d||8,{wrapV:!0,inside:M=>Ci(u,M),mat:m.mat})},r.lathe=(u,v,p,d,m)=>{m=m||{};let g=[];for(let y=0;y<u.length-1;y++){let b=u[y+1][0]-u[y][0],w=u[y+1][1]-u[y][1];g.push(ba([w,-b,0]))}for(let y=0;y<u.length-1;y++){let b=u[y],w=u[y+1],_=y===0||b[2]===1,M=y===u.length-2||w[2]===1,A=_?g[y]:ba(v0(g[y-1],g[y])),O=M?g[y]:ba(v0(g[y],g[y+1])),R=[],q=[];for(let F=0;F<=d;F++){let K=F/d*Math.PI*2,G=Math.cos(K),X=Math.sin(K),dt=m.mat?m.mat(K,b[1]):null,Ot=m.mat?m.mat(K,w[1]):null;R.push(r.vert([v+b[0]*G,b[1],p+b[0]*X],[A[0]*G,A[1],A[0]*X],dt)),q.push(r.vert([v+w[0]*G,w[1],p+w[0]*X],[O[0]*G,O[1],O[0]*X],Ot))}for(let F=0;F<d;F++)r.tri(R[F],R[F+1],q[F]),r.tri(R[F+1],q[F+1],q[F])}},r}Mm.exports={createBuilder:R4,catmull:Ci,curve1:z4,sub:p0,add:v0,mul:e0,dot:If,cross:tl,norm:ba,len:iu}});var Am=mt((Kk,km)=>{"use strict";var{norm:$f,add:Ff,mul:$0,sub:N4,cross:Sm}=Ls(),Em=Math.PI*2,C4=(t,e,o)=>{let n=Math.min(1,Math.max(0,(o-t)/(e-t)));return n*n*(3-2*n)};function O4(t){let e=t>>>0;return()=>{e|=0,e=e+1831565813|0;let o=Math.imul(e^e>>>15,1|e);return o=o+Math.imul(o^o>>>7,61|o)^o,((o^o>>>14)>>>0)/4294967296}}function P4(t,e,o,n,r,a){let s=(u,v)=>[7,u*a,v];t.curMat=[0,0,0],t.box(e-a*1.36,n,o-a*1.36,e+a*1.36,n+.22,o+a*1.36),t.lathe([[a*1.24,n+.22,1],[a*1.3,n+.27],[a*1.31,n+.32],[a*1.26,n+.37,1],[a*1.1,n+.4],[a*1.14,n+.44,1],[a*1.18,n+.47],[a*1.1,n+.52,1],[a*.96,n+.55]],e,o,56,{mat:s});let i=n+.55,c=r-i,f=20,l=6,h=a*.075;return t.surface((u,v)=>{let p=i+u*c,d=a*(.96-.12*u),m=v*Em,g=v*f%1,y=d-h*4*g*(1-g);return[e+y*Math.cos(m),p,o+y*Math.sin(m)]},10,f*l,{wrapV:!0,inside:u=>[e,i+u*c,o],mat:(u,v)=>[7,v*Em*a,i+u*c]}),t.lathe([[a*.8,r-.02,1],[a*.9,r+.02],[a*.9,r+.07,1],[a*.82,r+.09,1],[a*.86,r+.13],[a*1.06,r+.2],[a*1.22,r+.28],[a*1.28,r+.33,1]],e,o,56,{mat:s}),t.curMat=[0,0,0],t.box(e-a*1.42,r+.33,o-a*1.42,e+a*1.42,r+.53,o+a*1.42),r+.53}function I4(t,e,o){t.curMat=[1,0,0],t.lathe([[e*1.1,0,1],[e*1.1,o*.14,1],[e*1.04,o*.14,1],[e*1.04,o*.2],[e*.97,o*.26,1],[e*.95,o*.26,1],[e*.95,o*.8,1],[e*.98,o*.8,1],[e*1.03,o*.86],[e*1.05,o*.92,1],[e*1.05,o,1],[e*.5,o,1],[0,o]],0,0,72)}function $4(t,e,o,n,r){t.save(),t.translate(e,0,o),I4(t,n,r),t.restore()}function F4(t,e,o,n,r,a){let s=O4(n),i=a?$f([a[0],0,a[1]]):null;t.save(),t.translate(e,0,o),t.scale(r||1),t.curMat=[3,0,0],t.lathe([[.17,0,1],[.2,.02],[.28,.13],[.36,.3],[.395,.47],[.38,.62],[.32,.74],[.29,.8],[.292,.82,1],[.325,.84],[.335,.88,1],[.3,.905,1],[.275,.895,1],[.272,.85]],0,0,48),t.curMat=[5,0,0],t.lathe([[.272,.85,1],[.1,.868],[0,.872]],0,0,24);let c=11,f=.86;for(let l=0;l<c;l++){let h=l>=c-2,u=l*2.399963+s()*.5,v=[Math.cos(u),0,Math.sin(u)],p=[-Math.sin(u),0,Math.cos(u)],d=l*.618%1,m=h?.06+s()*.06:.12+.62*d,g=1;if(i){let gt=v[0]*i[0]+v[2]*i[2];g=.25+.75*C4(-.7,.5,gt),m*=g}let y=h?1.1+s()*.25:.85+.55*(1-d*.55)+s()*.15,b=h?1+s()*.2:.95+s()*.28,w=h?.055:.215+s()*.05,_=.04+s()*.05,M=[v[0]*_,f,v[2]*_],A=[M[0]+v[0]*Math.sin(m)*y*.92,M[1]+Math.cos(m)*y,M[2]+v[2]*Math.sin(m)*y*.92],O=[M[0]+v[0]*Math.sin(m*.5)*y*.45,M[1]+y*.5,M[2]+v[2]*Math.sin(m*.5)*y*.45];t.curMat=[4,0,0],t.tube([M,O,A],gt=>.02-.008*gt,8,7);let R=24,q=m*.9+.05,F=m+(h?.12:(.95+.45*d)*(.35+.65*g)),K=[A],G=[],X=A;for(let gt=0;gt<R;gt++){let ct=gt/R,Wt=q+(F-q)*ct*ct,ze=[v[0]*Math.sin(Wt),Math.cos(Wt),v[2]*Math.sin(Wt)];G.push(ze),X=Ff(X,$0(ze,b/R)),K.push(X)}G.push(G[G.length-1]);let dt=gt=>{let ct=gt*R,Wt=Math.min(R-1,Math.floor(ct)),ze=ct-Wt;return Ff($0(K[Wt],1-ze),$0(K[Wt+1],ze))},Ot=gt=>{let ct=gt*R,Wt=Math.min(R,Math.floor(ct)),ze=Math.min(R,Wt+1),Ee=ct-Wt;return $f(Ff($0(G[Wt],1-Ee),$0(G[ze],Ee)))},zt=(s()-.5)*.5;t.curMat=[2,0,0],t.surface((gt,ct)=>{let Wt=ct*2-1,ze=dt(gt),Ee=Ot(gt),Ye=zt*gt,_e=Ff($0(p,Math.cos(Ye)),$0(Sm(Ee,p),Math.sin(Ye)));_e=$f(N4(_e,$0(Ee,_e[0]*Ee[0]+_e[1]*Ee[1]+_e[2]*Ee[2])));let ho=$f(Sm(_e,Ee)),So=w*Math.pow(Math.sin(Math.PI*Math.pow(gt,.72)),.85),Ko=.3*So*Math.abs(Wt)+.012*Math.sin(gt*40+Wt*2)*Math.abs(Wt)*(h?0:1),Jt=-.1*So*Wt*Wt*Wt*Wt,ge=Ko+Jt;return[ze[0]+_e[0]*Wt*So+ho[0]*ge,ze[1]+_e[1]*Wt*So+ho[1]*ge,ze[2]+_e[2]*Wt*So+ho[2]*ge]},14,8,{double:!0,mat:(gt,ct)=>[2,ct*2-1,gt]})}t.restore()}km.exports={addFlutedColumn:P4,addStatue:$4,addPlant:F4}});var F0=mt((Qk,Rm)=>{"use strict";var _t={xc:7,r:2.5,spring:4.7};_t.x0=_t.xc-_t.r;_t.x1=_t.xc+_t.r;_t.top=_t.spring+_t.r;var Rr=.06,tn=.1,Tm=.08,Df=_t.r,qf=[_t.x0+Df/3,_t.x0+2*Df/3,_t.xc+Df/3,_t.xc+2*Df/3],Oi=.28,cu=[.95,1.65,2.35,3.05,3.75],Lm=[1.05,1.8],el=[8,0,0],oa=[0,0,0];function wa(t,e,o,n,r,a,s,i){t.box(Math.min(e,r),Math.min(o,a),Math.min(n,s),Math.max(e,r),Math.max(o,a),Math.max(n,s),i)}function Pi(t,e,o,n,r,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),f=t.vert(n,a,s),l=t.vert(r,a,s);t.tri(i,c,f),t.tri(i,f,l)}function Gf(t,e,o,n,r,a,s=48,i=0,c=Math.PI){let f=(l,h,u)=>[_t.xc+h*Math.cos(l),_t.spring+h*Math.sin(l),u];for(let l=0;l<s;l++){let h=i+(c-i)*l/s,u=i+(c-i)*(l+1)/s,v=(h+u)/2;Pi(t,f(h,e,r),f(u,e,r),f(u,o,r),f(h,o,r),[0,0,1],a),Pi(t,f(h,o,n),f(u,o,n),f(u,e,n),f(h,e,n),[0,0,-1],a),Pi(t,f(h,e,n),f(u,e,n),f(u,e,r),f(h,e,r),[-Math.cos(v),-Math.sin(v),0],a),Pi(t,f(u,o,n),f(h,o,n),f(h,o,r),f(u,o,r),[Math.cos(v),Math.sin(v),0],a)}}function D4(t){let n=a=>[_t.xc+_t.r*Math.cos(a),_t.spring+_t.r*Math.sin(a)],r=a=>{let s=Math.cos(a),i=Math.sin(a),c=Math.abs(s)>1e-6?_t.r/Math.abs(s):1/0,f=i>1e-6?(8-_t.spring)/i:1/0,l=Math.min(c,f);return[Math.min(_t.x1,Math.max(_t.x0,_t.xc+s*l)),Math.min(8,_t.spring+i*l)]};for(let a=0;a<48;a++){let s=Math.PI*a/48,i=Math.PI*(a+1)/48,c=n(s),f=n(i),l=r(s),h=r(i);for(let[v,p]of[[.35,1],[-.35,-1]])Pi(t,[c[0],c[1],v],[f[0],f[1],v],[h[0],h[1],v],[l[0],l[1],v],[0,0,p],oa);let u=(s+i)/2;Pi(t,[c[0],c[1],-.35],[f[0],f[1],-.35],[f[0],f[1],.35],[c[0],c[1],.35],[-Math.cos(u),-Math.sin(u),0],oa)}}function q4(t){wa(t,-.35,0,-.35,_t.x0,8,.35,oa),wa(t,_t.x1,0,-.35,14+.35,8,.35,oa),D4(t),zm(t)}function zm(t){wa(t,_t.x0-.32,.3,.35,_t.x0,_t.spring,.35+.07,oa),wa(t,_t.x1,.3,.35,_t.x1+.32,_t.spring,.35+.07,oa),wa(t,_t.x0-.32-.05,0,.35,_t.x0,.3,.35+.07+.04,oa),wa(t,_t.x1,0,.35,_t.x1+.32+.05,.3,.35+.07+.04,oa),wa(t,_t.x0-.32-.06,_t.spring-.12,.35,_t.x0,_t.spring,.35+.07+.05,oa),wa(t,_t.x1,_t.spring-.12,.35,_t.x1+.32+.06,_t.spring,.35+.07+.05,oa),Gf(t,_t.r,_t.r+.32,.35,.35+.07,oa),Gf(t,_t.r+.32,_t.r+.32+.06,.35,.35+.07+.03,oa),wa(t,_t.xc-.22,_t.top-.08,.35,_t.xc+.22,_t.top+.32+.12,.35+.07+.06,oa)}function G4(t,e){e=e||"all";let o=e==="all",n=o||e==="fixed",r=-Tm/2,a=Tm/2,s=(u,v,p,d,m=0)=>wa(t,u-m,v,r,p+m,d,a,el),i=u=>_t.spring+Math.sqrt(Math.max(0,_t.r*_t.r-(u-_t.xc)*(u-_t.xc))),c=e==="right"?_t.xc:_t.x0,f=e==="left"?_t.xc:_t.x1,l=u=>o||e==="left"&&u<_t.xc||e==="right"&&u>_t.xc,h=o?null:_t.spring-.06;if(n){s(_t.x0,0,_t.x0+tn,_t.spring),s(_t.x1-tn,0,_t.x1,_t.spring),Gf(t,_t.r-tn,_t.r,r,a,el,64),s(_t.x0,0,_t.x1,.05),s(_t.x0,_t.spring-.06,_t.x1,_t.spring+.06);for(let u of Lm)Gf(t,u-Rr/2,u+Rr/2,r,a,el,48)}if(o){s(_t.x0,0,_t.x1,Oi),s(_t.xc-tn/2,0,_t.xc+tn/2,_t.top-tn*.5);for(let u of qf)s(u-Rr/2,Oi,u+Rr/2,i(u)-tn*.5);for(let u of cu)s(_t.x0,u-Rr/2,_t.x1,u+Rr/2)}else if(e==="fixed"){s(_t.xc-tn/2,_t.spring+.06,_t.xc+tn/2,_t.top-tn*.5);for(let u of qf)s(u-Rr/2,_t.spring+.06,u+Rr/2,i(u)-tn*.5)}else{let u=e==="left"?_t.x0+tn:_t.x1-tn;s(Math.min(u,u+(e==="left"?tn*.8:-tn*.8)),.05,Math.max(u,u+(e==="left"?tn*.8:-tn*.8)),h),s(c,.05,f,Oi),s(c,h-.07,f,h);let v=e==="left"?_t.xc-tn/2:_t.xc;s(v,.05,v+tn/2,h);for(let p of qf)l(p)&&s(p-Rr/2,Oi,p+Rr/2,h-.07);for(let p of cu)s(c,p-Rr/2,f,p+Rr/2)}for(let u of[-1,1]){let v=_t.xc+u*.16;l(v)&&(wa(t,v-.02,1.05,a,v+.02,1.13,a+.06,el),wa(t,v-(u>0?0:.14),1.07,a+.05,v+(u>0?.14:0),1.11,a+.08,el))}}function H4(t){t=t||"all";let e=[],o=0,{x0:n,x1:r,xc:a,r:s,spring:i}=_t;if(t!=="fixed"){let f=t==="right"?a:n,l=t==="left"?a:r;if(e.push([f,0,o],[l,0,o],[l,i,o],[f,0,o],[l,i,o],[f,i,o]),t!=="all")return e}let c=48;for(let f=0;f<c;f++){let l=Math.PI*f/c,h=Math.PI*(f+1)/c;e.push([a,i,o],[a+s*Math.cos(l),i+s*Math.sin(l),o],[a+s*Math.cos(h),i+s*Math.sin(h),o])}return e}var Po=t=>t.toFixed(4);function B4(){let t=qf.map(n=>`vb = max(vb, barCover(abs(q.x - ${Po(n)}), ${Po(Rr/2)}, soft));`).join(`
		`),e=cu.map(n=>`hb = max(hb, barCover(abs(q.y - ${Po(n)}), ${Po(Rr/2)}, soft));`).join(`
		`),o=Lm.map(n=>`ab = max(ab, barCover(abs(rr - ${Po(n)}), ${Po(Rr/2)}, soft));`).join(`
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
		hb = max(hb, 1.0 - smoothstep(${Po(Oi)} - soft, ${Po(Oi)} + soft, q.y));
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
	}`}Rm.exports={addEntranceWall:q4,addSurround:zm,addFrames:G4,glassPanes:H4,doorLightGLSL:B4,DOOR:_t,WALL:.35}});var $i=mt((Zk,$m)=>{"use strict";var Rs=1.1583333333333334,Ns=(13.05-8*.16)/9,fu=Rs+.16,hu=Ns+.16,g0=14/2-7.75/2,na=15,ol=g0+7.75,m0=na+13.05,ra=.3,x0={y:8+.18,inset:.15},zs={y:8+.36,inset:ra},uu=8+.2,nl=8+.62,du=8+.9,pu=.016,Pm=.28,Im=.66,U4=(()=>{let t=[-.15,1,.3],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>o/e)})(),j4=(()=>{let t=[.42,1,-.32],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>o/e)})(),W4=[9,0,0],lr=[10,0,0];function Ii(t,e,o,n,r,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),f=t.vert(n,a,s),l=t.vert(r,a,s);t.tri(i,c,f),t.tri(i,f,l)}function Nr(t,e,o,n,r,a,s){Ii(t,[e,a,o],[n,a,o],[n,a,r],[e,a,r],[0,-1,0],s)}function lu(t,e,o,n,r,a,s,i){Ii(t,[e,a,o],[n,a,o],[n,s,o],[e,s,o],[0,0,1],i),Ii(t,[n,a,r],[e,a,r],[e,s,r],[n,s,r],[0,0,-1],i),Ii(t,[e,a,r],[e,a,o],[e,s,o],[e,s,r],[1,0,0],i),Ii(t,[n,a,o],[n,a,r],[n,s,r],[n,s,o],[-1,0,0],i)}function Nm(t,e,o,n,r){Nr(t,e[0],e[1],e[2],o[1],n,r),Nr(t,e[0],o[3],e[2],e[3],n,r),Nr(t,e[0],o[1],o[0],o[3],n,r),Nr(t,o[2],o[1],e[2],o[3],n,r)}var Cm=t=>g0+t*fu,Om=t=>na+t*hu;function V4(t,e,o=48){let n=[g0-ra,na-ra,ol+ra,m0+ra],r=(f,l)=>[f[0]+l,f[1]+l,f[2]-l,f[3]-l],a=r(n,x0.inset),s=r(n,zs.inset);Nr(t,0,0,14,n[1],8,e),Nr(t,0,n[3],14,o,8,e),Nr(t,0,n[1],n[0],n[3],8,e),Nr(t,n[2],n[1],14,n[3],8,e);let i=.06,c=.06;t.box(n[0]-i,8-c,n[1]-i,n[2]+i,8,n[1],lr),t.box(n[0]-i,8-c,n[3],n[2]+i,8,n[3]+i,lr),t.box(n[0]-i,8-c,n[1],n[0],8,n[3],lr),t.box(n[2],8-c,n[1],n[2]+i,8,n[3],lr),lu(t,...n.slice(0,2),...n.slice(2),8,x0.y,lr),Nm(t,n,a,x0.y,lr),lu(t,...a.slice(0,2),...a.slice(2),x0.y,zs.y,lr),Nm(t,a,s,zs.y,lr);for(let f=1;f<6;f++){let l=Cm(f)-.16;t.box(l,uu,na,l+.16,zs.y,m0,lr)}for(let f=1;f<9;f++){let l=Om(f)-.16;t.box(g0,uu,l,ol,zs.y,l+.16,lr)}for(let f=0;f<9;f++)for(let l=0;l<6;l++){let h=Cm(l),u=Om(f);lu(t,h,u,h+Rs,u+Ns,zs.y,du,lr),Nr(t,h,u,h+Rs,u+Ns,du,W4),X4(t,h+Rs/2,u+Ns/2,Rs/2,Ns/2)}}function X4(t,e,o,n,r){let a=nl,s=pu;Nr(t,e-n,o-s,e+n,o+s,a,lr),Nr(t,e-s,o-r,e+s,o+r,a,lr);for(let i of[1,-1]){let c=Math.hypot(n,r),f=n/c,l=i*r/c,h=-l*s,u=f*s;Ii(t,[e-f*c+h,a,o-l*c+u],[e+f*c+h,a,o+l*c+u],[e+f*c-h,a,o+l*c-u],[e-f*c-h,a,o-l*c-u],[0,-1,0],lr)}for(let i of[Pm,Im]){let c=i*n,f=i*r;Nr(t,e-c-s,o-f-s,e+c+s,o-f+s,a,lr),Nr(t,e-c-s,o+f-s,e+c+s,o+f+s,a,lr),Nr(t,e-c-s,o-f+s,e-c+s,o+f-s,a,lr),Nr(t,e+c-s,o-f+s,e+c+s,o+f-s,a,lr)}}var qe=t=>t.toFixed(4);function Y4(){return`
	// by day the sun, high and a little towards the entrance; by night
	// the moon, lower and from the other side, so its squares of light
	// reach across the floor to the foot of the wall. (When the light is
	// switched, the squares slide from one to the other.)
	const vec3 SKY_SUN_DAY = vec3(${U4.map(qe).join(", ")});
	const vec3 SKY_MOON = vec3(${j4.map(qe).join(", ")});
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
		vec2 pitch = vec2(${qe(fu)}, ${qe(hu)});
		vec2 cell = floor(rel / pitch);
		if (cell.x < 0.0 || cell.y < 0.0 || cell.x > ${qe(5)} || cell.y > ${qe(8)}) return 0.0;
		vec2 loc = rel - cell * pitch;
		return rectOpen(loc, vec4(0.0, 0.0, ${qe(Rs)}, ${qe(Ns)}), soft);
	}

	float barCov(float d, float soft) {
		return 1.0 - smoothstep(${qe(pu)} - soft, ${qe(pu)} + soft, d);
	}

	// sunlight reaching point p through the skylight, 0..1
	float skylightAt(vec3 p) {
		if (p.y > ${qe(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q0 = (p + L * ((${qe(8)} - p.y) / L.y)).xz;
		vec2 q1 = (p + L * ((${qe(x0.y)} - p.y) / L.y)).xz;
		vec2 qb = (p + L * ((${qe(uu)} - p.y) / L.y)).xz;
		vec2 q2 = (p + L * ((${qe(zs.y)} - p.y) / L.y)).xz;
		float tG = (${qe(nl)} - p.y) / L.y;
		vec2 qg = (p + L * tG).xz;
		vec2 qt = (p + L * ((${qe(du)} - p.y) / L.y)).xz;
		float soft = 0.004 + 0.007 * tG;
		float open = rectOpen(q0, vec4(${qe(g0-ra)}, ${qe(na-ra)}, ${qe(ol+ra)}, ${qe(m0+ra)}), soft)
		           * rectOpen(q1, vec4(${qe(g0-ra+x0.inset)}, ${qe(na-ra+x0.inset)}, ${qe(ol+ra-x0.inset)}, ${qe(m0+ra-x0.inset)}), soft)
		           * paneOpen(qb, soft) * paneOpen(q2, soft) * paneOpen(qt, soft);
		if (open <= 0.0) return 0.0;
		// the glazing, measured from the centre of this pane
		vec2 rel = qg - vec2(${qe(g0)}, ${qe(na)});
		vec2 pitch = vec2(${qe(fu)}, ${qe(hu)});
		vec2 paneHalf = vec2(${qe(Rs/2)}, ${qe(Ns/2)});
		vec2 c = rel - floor(rel / pitch) * pitch - paneHalf;
		vec2 ac = abs(c);
		vec2 an = ac / paneHalf;                       // 0 at the centre, 1 at the pane's edge
		float hm = min(paneHalf.x, paneHalf.y);
		float ring = max(an.x, an.y);
		float cover = max(barCov(ac.x, soft), barCov(ac.y, soft));
		cover = max(cover, barCov(abs(an.x - an.y) * hm * 0.7071, soft));
		cover = max(cover, barCov(abs(ring - ${qe(Pm)}) * hm, soft));
		cover = max(cover, barCov(abs(ring - ${qe(Im)}) * hm, soft));
		return open * (1.0 - cover * 0.9);
	}

	// the same light for the beams in the air: the whole opening glows a
	// little, and the panes and bars show in it, softly
	float skylightVol(vec3 p) {
		if (p.y > ${qe(8-.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q = (p + L * ((${qe(nl)} - p.y) / L.y)).xz;
		float open = rectOpen(q, vec4(${qe(g0)}, ${qe(na)}, ${qe(ol)}, ${qe(m0)}), 0.25);
		if (open <= 0.0) return 0.0;
		return open * (0.13 + 0.87 * skylightAt(p));
	}

	// light thrown back up by the bright squares on the floor: strongest
	// on what stands beside them and faces them (the lower walls, the
	// pillars, the statues, the ceiling above), fading with distance
	float skylightBounce(vec3 p, vec3 n) {
		if (p.x > 14.2 || p.x < -0.4) return 0.0;
		vec3 L = SKY_SUN;
		vec2 c = vec2(${qe(14/2)}, ${qe((na+m0)/2)}) - L.xz * (${qe(nl)} / L.y);
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
	}`}$m.exports={addSkylight:V4,skylightGLSL:Y4,Z_START:na,Z_END:m0,GLASS_Y:nl,HEIGHT:8}});var vr=mt((Jk,Hm)=>{"use strict";var Di=F0(),xu=8,en=.35,Bt={x0:13.65,x1:38.12,z0:41,z1:47.2,zc:44.1,hallEnd:50.65,spring:5.6,crown:xu},Fm=(Bt.z1-Bt.z0)/2,vu=Bt.crown-Bt.spring,gu=(vu*vu+Fm*Fm)/(2*vu),yu=Bt.crown-gu;function Fi(t){let e=t-Bt.zc;return yu+Math.sqrt(Math.max(0,gu*gu-e*e))}var Le={first:17.43,pitch:4.4,count:5,halfW:1.2,sill:.75,spring:4.3},Fa=Array.from({length:Le.count},(t,e)=>Le.first+e*Le.pitch),qm=Fa.slice(1).map(t=>t-Le.pitch/2),K4=[Fa[0],Fa[2],Fa[4]],Bf=[Fa[1],Fa[3]],jr={r:1.3,sill:.62,spring:3.3},Do=[0,0,0],rl=[11,0,0],D0=[10,0,0],al=[8,0,0];function Zn(t,e,o,n,r,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),f=t.vert(n,a,s),l=t.vert(r,a,s);t.tri(i,c,f),t.tri(i,f,l)}function Wr(t,e,o,n,r,a,s,i){t.box(Math.min(e,r),Math.min(o,a),Math.min(n,s),Math.max(e,r),Math.max(o,a),Math.max(n,s),i)}function sl(t,e){let{u0:o,u1:n,w0:r,w1:a,top:s,holes:i,mat:c}=e,f=new Set([o,n]);for(let d of i){f.add(d.u0),f.add(d.u1);let m=Math.max(8,Math.ceil((d.u1-d.u0)/(d.step||.08)));for(let g=1;g<m;g++)f.add(d.u0+(d.u1-d.u0)*g/m)}for(let d of e.cuts||[])f.add(d);let l=e.topStep||.5;for(let d=o;d<n;d+=l)f.add(d);let h=[...f].filter(d=>d>=o-1e-9&&d<=n+1e-9).sort((d,m)=>d-m),u=(d,m)=>d.bot?d.bot(m):d.bottom,v=(d,m)=>{let g=s(d),y=m.map(_=>[Math.max(0,u(_,d)),Math.min(_.head(d),g)]).filter(_=>_[1]>_[0]).sort((_,M)=>_[0]-M[0]),b=[],w=0;for(let _ of y)_[0]>w+1e-6&&b.push([w,_[0]]),w=Math.max(w,_[1]);return g>w+1e-6&&b.push([w,g]),b},p=(d,m,g)=>[d,m,g];for(let d=0;d<h.length-1;d++){let m=h[d],g=h[d+1],y=(m+g)/2,b=i.filter(R=>y>R.u0&&y<R.u1),w=b.length?Math.max(m,Math.max(...b.map(R=>R.u0))+1e-7):m,_=b.length?Math.min(g,Math.min(...b.map(R=>R.u1))-1e-7):g,M=v(w,b),A=v(_,b),O=Math.min(M.length,A.length);for(let R=0;R<O;R++){let[q,F]=M[R],[K,G]=A[R];F-q<1e-6&&G-K<1e-6||(Zn(t,p(m,q,a),p(g,K,a),p(g,G,a),p(m,F,a),[0,0,1],c),e.frontOnly||Zn(t,p(g,K,r),p(m,q,r),p(m,F,r),p(g,G,r),[0,0,-1],c))}}e.noEnds||(Zn(t,p(o,0,r),p(o,0,a),p(o,s(o),a),p(o,s(o),r),[-1,0,0],c),Zn(t,p(n,0,a),p(n,0,r),p(n,s(n),r),p(n,s(n),a),[1,0,0],c));for(let d of i){if(d.noReveal)continue;let m=d.mat||e.revealMat||c,g=Math.max(0,u(d,d.u0+1e-7)),y=Math.max(0,u(d,d.u1-1e-7)),b=Math.min(d.head(d.u0+1e-7),s(d.u0)),w=Math.min(d.head(d.u1-1e-7),s(d.u1));b>g+1e-6&&Zn(t,p(d.u0,g,a),p(d.u0,g,r),p(d.u0,b,r),p(d.u0,b,a),[1,0,0],m),w>y+1e-6&&Zn(t,p(d.u1,y,r),p(d.u1,y,a),p(d.u1,w,a),p(d.u1,w,r),[-1,0,0],m);let _=Math.max(8,Math.ceil((d.u1-d.u0)/(d.step||.06)));for(let M=0;M<_;M++){let A=d.u0+(d.u1-d.u0)*M/_,O=d.u0+(d.u1-d.u0)*(M+1)/_,R=Math.max(A,d.u0+1e-7),q=Math.min(O,d.u1-1e-7),F=Math.min(d.head(R),s(A)),K=Math.min(d.head(q),s(O));if(!(F>=s(A)-1e-6&&K>=s(O)-1e-6)){let dt=O-A,Ot=K-F,zt=Math.hypot(dt,Ot)||1;Zn(t,p(A,F,r),p(O,K,r),p(O,K,a),p(A,F,a),[Ot/zt,-dt/zt,0],m)}let G=u(d,R),X=u(d,q);if(G>1e-6||X>1e-6){let dt=O-A,Ot=X-G,zt=Math.hypot(dt,Ot)||1;Zn(t,p(O,X,r),p(A,G,r),p(A,G,a),p(O,X,a),[-Ot/zt,dt/zt,0],m)}}}}var mu=(t,e,o)=>n=>{let r=n-t;return o+Math.sqrt(Math.max(0,e*e-r*r))};function Q4(t,e){let o=jr.r,n=jr.sill,r=jr.spring,a=Bt.z0,s=24,i=(v,p,d)=>[e+Math.cos(v)*p,d,a-Math.sin(v)*p];for(let v=0;v<s;v++){let p=Math.PI*v/s,d=Math.PI*(v+1)/s,m=[-Math.cos(p),0,Math.sin(p)],g=[-Math.cos(d),0,Math.sin(d)],y=[t.vert(i(p,o,n),m,Do),t.vert(i(d,o,n),g,Do),t.vert(i(d,o,r),g,Do),t.vert(i(p,o,r),m,Do)];t.tri(y[0],y[1],y[2]),t.tri(y[0],y[2],y[3])}let c=12,f=(v,p)=>[e+Math.cos(v)*Math.cos(p)*o,r+Math.sin(p)*o,a-Math.sin(v)*Math.cos(p)*o],l=(v,p)=>[-Math.cos(v)*Math.cos(p),-Math.sin(p),Math.sin(v)*Math.cos(p)];for(let v=0;v<s;v++)for(let p=0;p<c;p++){let d=Math.PI*v/s,m=Math.PI*(v+1)/s,g=Math.PI/2*p/c,y=Math.PI/2*(p+1)/c,b=[t.vert(f(d,g),l(d,g),D0),t.vert(f(m,g),l(m,g),D0),t.vert(f(m,y),l(m,y),D0),t.vert(f(d,y),l(d,y),D0)];t.tri(b[0],b[1],b[2]),t.tri(b[0],b[2],b[3])}for(let v=1;v<8;v++){let p=Math.PI*v/8,d=[];for(let m=0;m<=10;m++){let g=Math.PI/2*m/10*.97;d.push(f(p,g).map((y,b)=>y-l(p,g)[b]*.02))}t.tube(d,m=>.035*(1-m*.6),12,6,{mat:()=>D0})}let h=t.vert([e,n,a],[0,1,0],Do);for(let v=0;v<s;v++){let p=Math.PI*v/s,d=Math.PI*(v+1)/s;t.tri(h,t.vert(i(p,o,n),[0,1,0],Do),t.vert(i(d,o,n),[0,1,0],Do))}Wr(t,e-o-.12,n-.1,a,e+o+.12,n+.02,a+.12,Do),Wr(t,e-o-.16,n-.2,a,e+o+.16,n-.1,a+.07,Do);let u=.16;for(let v=0;v<s;v++){let p=Math.PI*v/s,d=Math.PI*(v+1)/s,m=(g,y,b)=>[e+Math.cos(g)*y,r+Math.sin(g)*y,b];Zn(t,m(p,o,a+.05),m(d,o,a+.05),m(d,o+u,a+.05),m(p,o+u,a+.05),[0,0,1],Do),Zn(t,m(p,o+u,a),m(d,o+u,a),m(d,o+u,a+.05),m(p,o+u,a+.05),[Math.cos((p+d)/2),Math.sin((p+d)/2),0],Do),Zn(t,m(p,o,a),m(d,o,a),m(d,o,a+.05),m(p,o,a+.05),[-Math.cos((p+d)/2),-Math.sin((p+d)/2),0],Do)}for(let v of[-1,1]){let p=e+v*o,d=e+v*(o+u);Wr(t,p,n,a,d,r,a+.05,Do),Wr(t,p-v*.02,r-.12,a,d+v*.06,r,a+.09,Do)}Wr(t,e-.11,r+o-.04,a,e+.11,r+o+u+.1,a+.09,Do),t.lathe([[.66,n,1],[.66,n+.06,1],[.62,n+.1],[.6,n+.3],[.64,n+.34,1],[.64,n+.4,1],[0,n+.4]],e,a-.62,40,{mat:()=>Do})}var Z4=jr.sill+.4,J4=Bt.z0-.62;function t_(t){Zn(t,[14,0,Bt.z0-en],[Bt.x1+en,0,Bt.z0-en],[Bt.x1+en,0,Bt.z1+en],[14,0,Bt.z1+en],[0,1,0],Do),t.curMat=rl,sl(t,{u0:14+en,u1:Bt.x1+2*en,w0:Bt.z0-2*en,w1:Bt.z0,top:()=>Bt.spring,holes:Bf.map(f=>({u0:f-jr.r,u1:f+jr.r,bottom:jr.sill,head:mu(f,jr.r,jr.spring),noReveal:!0})),mat:rl,cuts:[Bt.x1]});for(let f of Bf)Q4(t,f);t.save(),t.translate(0,0,Bt.z1),t.rotateY(Math.PI),t.translate(-(Bt.x1+2*en),0,-2*en);let e=f=>Bt.x1+2*en-f;sl(t,{u0:e(Bt.x1+2*en),u1:e(13.65),w0:0,w1:2*en,top:()=>Bt.spring,holes:Fa.map(f=>({u0:e(f+Le.halfW),u1:e(f-Le.halfW),bottom:Le.sill,head:mu(e(f),Le.halfW,Le.spring)})),mat:rl,revealMat:Do}),t.restore(),t.save(),t.translate(Bt.x1,0,0),t.rotateY(-Math.PI/2);let o=Di.DOOR,n=Bt.zc,r=o.r;sl(t,{u0:Bt.z0-2*en,u1:Bt.z1+2*en,w0:-2*en,w1:0,top:f=>f<Bt.z0||f>Bt.z1?Bt.spring:Fi(f),topStep:.15,holes:[{u0:n-r,u1:n+r,bottom:0,head:mu(n,r,o.spring)}],mat:rl,revealMat:Do}),t.restore(),t.save(),t.translate(14+en,0,0),t.rotateY(-Math.PI/2),sl(t,{u0:Bt.z0,u1:Bt.z1,w0:-0,w1:2*en,top:()=>xu,topStep:.15,holes:[{u0:Bt.z0,u1:Bt.z1,bottom:0,head:f=>Fi(f)}],mat:rl,revealMat:Do}),t.restore();let a=14+en,s=Math.ceil((Bt.x1-a)/1),i=28,c=[];for(let f=0;f<=s;f++){let l=a+(Bt.x1-a)*f/s,h=[];for(let u=0;u<=i;u++){let v=Bt.z0+(Bt.z1-Bt.z0)*u/i,p=Fi(v),d=[0,yu-p,Bt.zc-v],m=Math.hypot(d[1],d[2]);h.push(t.vert([l,p,v],[0,d[1]/m,d[2]/m],D0))}c.push(h)}for(let f=0;f<s;f++)for(let l=0;l<i;l++)t.tri(c[f][l],c[f+1][l],c[f][l+1]),t.tri(c[f+1][l],c[f+1][l+1],c[f][l+1])}function Dm(t,e,o,n){let a=[];for(let s=0;s<=32;s++){let i=Bt.z0+(Bt.z1-Bt.z0)*s/32,c=Fi(i),f=yu-c,l=Bt.zc-i,h=Math.hypot(f,l),u=[c+f/h*n,i+l/h*n];a.push({y:c,z:i,iy:u[0],iz:u[1],n:[0,f/h,l/h]})}for(let s=0;s<32;s++){let i=a[s],c=a[s+1];Zn(t,[e-o,i.iy,i.iz],[e+o,i.iy,i.iz],[e+o,c.iy,c.iz],[e-o,c.iy,c.iz],i.n,Do),Zn(t,[e-o,i.y,i.z],[e-o,i.iy,i.iz],[e-o,c.iy,c.iz],[e-o,c.y,c.z],[-1,0,0],Do),Zn(t,[e+o,i.iy,i.iz],[e+o,i.y,i.z],[e+o,c.y,c.z],[e+o,c.iy,c.iz],[1,0,0],Do)}}function Hf(t,e,o,n){let s=o,i=o+n*.16;Wr(t,e-.28,0,s,e+.28,Bt.spring-.3,i,Do),Wr(t,e-.28-.06,0,s,e+.28+.06,.32,o+n*(.16+.05),Do),Wr(t,e-.28-.05,Bt.spring-.3,s,e+.28+.05,Bt.spring-.1,o+n*(.16+.05),Do),Wr(t,e-.28-.1,Bt.spring-.1,s,e+.28+.1,Bt.spring,o+n*(.16+.1),Do)}function e_(t,e){let o=Fi(Bt.zc),n=[[0,o-.13,1],[.05,o-.125],[.12,o-.1],[.16,o-.06,1],[.22,o-.05],[.3,o-.075],[.4,o-.06],[.48,o-.03,1],[.55,o-.035],[.7,o-.025],[.82,o-.012,1],[.95,o+.03]];t.lathe(n,e,Bt.zc,48,{mat:()=>D0});for(let r=0;r<8;r++){let a=r*Math.PI/4,s=e+Math.cos(a)*.32,i=Bt.zc+Math.sin(a)*.32;t.save(),t.translate(s,o-.07,i),t.rotateY(-a),t.curMat=D0,t.ellipsoid([0,0,0],[.13,.03,.06],6,10),t.restore()}}function o_(t){t.curMat=Do;for(let[e,o]of[[Bt.z0,1],[Bt.z1,-1]])Wr(t,14.35,Bt.spring-.12,e,Bt.x1,Bt.spring,e+o*.1,Do),Wr(t,14.35,Bt.spring-.04,e,Bt.x1,Bt.spring+.05,e+o*.18,Do);for(let[e,o]of[[Bt.z0,1],[Bt.z1,-1]])Wr(t,14.35,0,e,Bt.x1,.42,e+o*.12,Do),Wr(t,14.35,.42,e,Bt.x1,.5,e+o*.07,Do);for(let e of qm)Dm(t,e,.24,.16),Hf(t,e,Bt.z0,1),Hf(t,e,Bt.z1,-1);for(let e of[14.35+.28,Bt.x1-.28])Dm(t,e,.28,.22),Hf(t,e,Bt.z0,1),Hf(t,e,Bt.z1,-1);for(let e of Fa)e_(t,e)}function n_(t){let e=Bt.z1+en,o=e-.04,n=e+.04,r=(i,c,f,l)=>Wr(t,i,c,o,f,l,n,al),a=Le.halfW,s=(i,c,f,l,h,u)=>{let v=(p,d,m)=>[i+d*Math.cos(p),Le.spring+d*Math.sin(p),m];for(let p=0;p<u;p++){let d=l+(h-l)*p/u,m=l+(h-l)*(p+1)/u;Zn(t,v(d,c,o),v(m,c,o),v(m,f,o),v(d,f,o),[0,0,-1],al),Zn(t,v(d,f,n),v(m,f,n),v(m,c,n),v(d,c,n),[0,0,1],al)}};for(let i of Fa){let c=i-a,f=i+a;r(c,Le.sill,c+.07,Le.spring),r(f-.07,Le.sill,f,Le.spring),r(c,Le.sill,f,Le.sill+.07),r(c,Le.spring-.04,f,Le.spring+.04);for(let h of[-.5,0,.5])r(i+h*a-.022,Le.sill,i+h*a+.022,Le.spring);let l=6;for(let h=1;h<l;h++){let u=Le.sill+(Le.spring-Le.sill)*h/l;r(c,u-.02,f,u+.02)}s(i,a-.07,a,0,Math.PI,32),s(i,.42,.46,0,Math.PI,20);for(let h=1;h<6;h++){let u=Math.PI*h/6,v=Math.cos(u),p=Math.sin(u),d=.02,m=(g,y)=>[i+v*g-p*d*y,Le.spring+p*g+v*d*y];Zn(t,[...m(.44,-1),o],[...m(a-.05,-1),o],[...m(a-.05,1),o],[...m(.44,1),o],[0,0,-1],al),Zn(t,[...m(.44,1),n],[...m(a-.05,1),n],[...m(a-.05,-1),n],[...m(.44,-1),n],[0,0,1],al)}}}function r_(){let t=[],e=Bt.z1+en;for(let o of Fa){let n=o-Le.halfW,r=o+Le.halfW;t.push([n,Le.sill,e],[r,Le.sill,e],[r,Le.spring,e],[n,Le.sill,e],[r,Le.spring,e],[n,Le.spring,e]);for(let a=0;a<24;a++){let s=Math.PI*a/24,i=Math.PI*(a+1)/24;t.push([o,Le.spring,e],[o+Le.halfW*Math.cos(s),Le.spring+Le.halfW*Math.sin(s),e],[o+Le.halfW*Math.cos(i),Le.spring+Le.halfW*Math.sin(i),e])}}return t}function Gm(t,e){t.save(),t.translate(Bt.x1+en,0,Bt.zc-7),t.rotateY(-Math.PI/2),e(),t.restore()}function a_(t){Gm(t,()=>{Di.addSurround(t),Di.addFrames(t,"fixed")})}function s_(t){return Di.glassPanes(t||"fixed").map(([o,n,r])=>[Bt.x1+en-r,n,Bt.zc-7+o])}function i_(t){t_(t),o_(t),n_(t),a_(t),t.curMat=[0,0,0]}var c_={x:Bt.x1+en,zLo:Bt.zc-Di.DOOR.r,zHi:Bt.zc+Di.DOOR.r},go=t=>t.toFixed(4);function l_(){return`
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
		if (p.x < ${go(Bt.x0)} || p.z < ${go(Bt.z0-.1)} || p.z > ${go(Bt.z1)}) return 0.0;
		float ndl = max(dot(n, WIN_SKY), 0.0);
		if (ndl <= 0.0) return 0.0;
		float tIn = (${go(Bt.z1)} - p.z) / WIN_SKY.z;
		float tOut = (${go(Bt.z1+2*en)} - p.z) / WIN_SKY.z;
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
		${Bf.map(t=>`{ float d = abs(p.x - ${go(t)}); if (d < best) { best = d; lamp = vec3(${go(t)}, ${go(jr.spring+.55)}, ${go(Bt.z0-.15)}); } }`).join(`
		`)}
		return lamp;
	}

	float nicheLight(vec3 p, vec3 n) {
		if (p.z > ${go(Bt.z0+1.6)} || p.z < ${go(Bt.z0-jr.r-.1)} || p.x < ${go(Bt.x0)}) return 0.0;
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
		if (p.x < ${go(Bt.x0-1)}) return 0.0;
		float inC = smoothstep(${go(Bt.z0-1.5)}, ${go(Bt.z0)}, p.z) * smoothstep(${go(Bt.x0-1)}, ${go(Bt.x0+1)}, p.x);
		float near = 0.55 + 0.45 * smoothstep(${go(Bt.z0)}, ${go(Bt.z1)}, p.z);
		return inC * near;
	}`}Hm.exports={wallWithHoles:sl,windowLightGLSL:l_,addWing:i_,windowGlass:r_,farDoorGlass:s_,atFarDoor:Gm,FAR_DOOR:c_,vaultY:Fi,C:Bt,NICHE_X:Bf,NICHE:jr,NICHE_PLINTH_TOP:Z4,NICHE_STATUE_Z:J4,WIN:Le,winCentres:Fa,piers:qm,PAINTING_X:K4,HEIGHT:xu}});var _a=mt((tA,jm)=>{"use strict";var bu=vr(),Qo=8,Hi=.35,Cs=14,Gi=4,te={x0:Cs+Hi,x1:Cs+Hi+2*Gi,z0:5.9-Gi,z1:5.9+Gi,zc:5.9,cx:Cs+Hi+Gi,arch:{r:2.6,spring:4.4},dome:{r:3.3,base:Qo},oculus:3.3};te.domeTop=te.dome.base+te.dome.r;var Bi={spokes:16,ringE:[.42,.95],bar:.035},qn={sxz:1.32,sy:1.6,yaw:.6};qn.crownC=[te.cx,.4+3.4*qn.sy,te.zc];qn.crownR=[2.3*qn.sxz,1.9*qn.sy,2.3*qn.sxz];qn.trunkR=.26*qn.sxz;qn.trunkTop=.4+2.2*qn.sy;var Bm={inner:1.05,outer:1.62,seat:.48,soil:.4},Wf=(()=>{let t=[.2,1,-.15],e=Math.hypot(...t);return t.map(o=>o/e)})(),Jn=[0,0,0],qi=[11,0,0],Uf=[10,0,0],jf=[9,0,0],f_=[5,0,0],wu=[3,0,0];function y0(t,e,o,n,r,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),f=t.vert(n,a,s),l=t.vert(r,a,s);t.tri(i,c,f),t.tri(i,f,l)}function Cr(t,e,o,n,r,a,s,i){t.box(Math.min(e,r),Math.min(o,a),Math.min(n,s),Math.max(e,r),Math.max(o,a),Math.max(n,s),i)}var h_=(t,e,o)=>n=>{let r=n-t;return o+Math.sqrt(Math.max(0,e*e-r*r))};function u_(t){t.save(),t.translate(Cs+Hi,0,0),t.rotateY(-Math.PI/2),bu.wallWithHoles(t,{u0:0,u1:bu.C.z0,w0:0,w1:2*Hi,top:()=>Qo,holes:[{u0:te.zc-te.arch.r,u1:te.zc+te.arch.r,bottom:0,head:h_(te.zc,te.arch.r,te.arch.spring),step:.05}],mat:qi,revealMat:Jn,topStep:1}),t.restore();let e=Cs-Hi;for(let[s,i]of[[0,te.zc-te.arch.r],[te.zc+te.arch.r,bu.C.z0]])Cr(t,e-.12,0,s,e,.42,i,Jn),Cr(t,e-.07,.42,s,e,.5,i,Jn);let o=e,n=.24,r=40,a=(s,i,c)=>[c,te.arch.spring+Math.sin(s)*i,te.zc+Math.cos(s)*i];for(let s=0;s<r;s++){let i=Math.PI*s/r,c=Math.PI*(s+1)/r;y0(t,a(i,te.arch.r,o-.07),a(c,te.arch.r,o-.07),a(c,te.arch.r+n,o-.07),a(i,te.arch.r+n,o-.07),[-1,0,0],Jn),y0(t,a(i,te.arch.r+n,o),a(c,te.arch.r+n,o),a(c,te.arch.r+n,o-.07),a(i,te.arch.r+n,o-.07),[0,Math.sin((i+c)/2),Math.cos((i+c)/2)],Jn),y0(t,a(i,te.arch.r,o),a(c,te.arch.r,o),a(c,te.arch.r,o-.07),a(i,te.arch.r,o-.07),[0,-Math.sin((i+c)/2),-Math.cos((i+c)/2)],Jn)}Cr(t,o-.12,te.arch.spring+te.arch.r-.06,te.zc-.17,o,te.arch.spring+te.arch.r+n+.16,te.zc+.17,Jn);for(let s of[-1,1]){let i=te.zc+s*te.arch.r,c=te.zc+s*(te.arch.r+n);Cr(t,o-.07,0,i,o,te.arch.spring,c,Jn),Cr(t,o-.13,te.arch.spring-.16,i-s*.03,o,te.arch.spring,c+s*.08,Jn),Cr(t,o-.12,0,i-s*.03,o,.5,c+s*.06,Jn)}}function d_(t){let{x0:e,x1:o,z0:n,z1:r}=te;y0(t,[Cs,0,n],[o,0,n],[o,0,r],[Cs,0,r],[0,1,0],Jn),t.curMat=qi,y0(t,[o,0,n],[o,0,r],[o,Qo,r],[o,Qo,n],[-1,0,0],qi),y0(t,[e,0,n],[o,0,n],[o,Qo,n],[e,Qo,n],[0,0,1],qi),y0(t,[o,0,r],[e,0,r],[e,Qo,r],[o,Qo,r],[0,0,-1],qi),y0(t,[e,0,r],[e,0,n],[e,Qo,n],[e,Qo,r],[1,0,0],qi),Cr(t,o-.12,0,n,o,.42,r,Jn),Cr(t,e,0,n,o,.42,n+.12,Jn),Cr(t,e,0,r-.12,o,.42,r,Jn),Cr(t,o-.2,Qo-.3,n,o,Qo,r,Jn),Cr(t,e,Qo-.3,n,o,Qo,n+.2,Jn),Cr(t,e,Qo-.3,r-.2,o,Qo,r,Jn),Cr(t,e,Qo-.3,n,e+.2,Qo,r,Jn);let a=te.dome.r,s=48,i=[];for(let g=0;g<=s;g++){let y=Math.PI*2*g/s;i.push([te.cx+Math.cos(y)*a,te.zc+Math.sin(y)*a])}let c=g=>{let y=Math.abs(Math.cos(g)),b=Math.abs(Math.sin(g));return Math.min(Gi/Math.max(y,1e-6),Gi/Math.max(b,1e-6))};for(let g=0;g<s;g++){let y=Math.PI*2*g/s,b=Math.PI*2*(g+1)/s,w=c(y),_=c(b),M=[te.cx+Math.cos(y)*w,Qo,te.zc+Math.sin(y)*w],A=[te.cx+Math.cos(b)*_,Qo,te.zc+Math.sin(b)*_];y0(t,[i[g][0],Qo,i[g][1]],[i[g+1][0],Qo,i[g+1][1]],A,M,[0,-1,0],Uf)}t.lathe([[a+.02,Qo-.18,1],[a-.12,Qo-.18,1],[a-.12,Qo-.06,1],[a-.05,Qo,1],[a,Qo+.02]],te.cx,te.zc,s,{mat:()=>Jn});let f=16,l=(g,y,b)=>[te.cx+Math.cos(g)*Math.cos(y)*b,te.dome.base+Math.sin(y)*b,te.zc+Math.sin(g)*Math.cos(y)*b],h=Math.PI/2;for(let g=0;g<s;g++)for(let y=0;y<f;y++){let b=Math.PI*2*g/s,w=Math.PI*2*(g+1)/s,_=h*y/f,M=h*(y+1)/f,A=(R,q)=>[-Math.cos(R)*Math.cos(q),-Math.sin(q),-Math.sin(R)*Math.cos(q)],O=[t.vert(l(b,_,a),A(b,_),jf),t.vert(l(w,_,a),A(w,_),jf),t.vert(l(w,M,a),A(w,M),jf),t.vert(l(b,M,a),A(b,M),jf)];t.tri(O[0],O[1],O[2]),t.tri(O[0],O[2],O[3])}for(let g=0;g<Bi.spokes;g++){let y=Math.PI*2*g/Bi.spokes,b=[];for(let w=0;w<=14;w++)b.push(l(y,(h-.06)*w/14,a-.04));t.tube(b,()=>.04,20,6,{mat:()=>Uf})}for(let g of Bi.ringE){let y=Math.cos(g)*(a-.04),b=te.dome.base+Math.sin(g)*(a-.04),w=[];for(let _=0;_<=72;_++){let M=Math.PI*2*_/72;w.push([te.cx+Math.cos(M)*y,b,te.zc+Math.sin(M)*y])}t.tube(w,()=>.035,72,6,{mat:()=>Uf})}t.ellipsoid([te.cx,te.dome.base+a-.06,te.zc],[.16,.08,.16],6,12,{mat:()=>Uf});let u=.46,v=.55,p=.12,d=(g,y,b,w)=>{Cr(t,g,u-.08,y,b,u,w,wu);let _=b-g>w-y?[g+.25,b-.25]:[g+.06,b-.06],M=b-g>w-y?[y+.06,w-.06]:[y+.25,w-.25];Cr(t,_[0],0,M[0],_[1],u-.08,M[1],wu)};d(o-p-v,n+1.1,o-p,r-1.1),d(e+1,n+p,o-1.1,n+p+v),d(e+1,r-p-v,o-1.1,r-p);let m=Bm;t.lathe([[m.outer,0,1],[m.outer,m.seat-.1,1],[m.outer+.07,m.seat-.07,1],[m.outer+.07,m.seat,1],[m.inner-.05,m.seat,1],[m.inner-.05,m.seat-.06,1],[m.inner,m.seat-.08,1],[m.inner,m.soil]],te.cx,te.zc,64,{mat:()=>wu}),t.lathe([[m.inner,m.soil,1],[0,m.soil+.03]],te.cx,te.zc,48,{mat:()=>f_})}function p_(t){u_(t),d_(t),t.curMat=[0,0,0]}var qo=t=>t.toFixed(4);function Um(){let t=te.dome.r,e=Bi.ringE.map(o=>Math.cos(o)*t);return`
	const vec3 SHAFT = vec3(${qo(Wf[0])}, ${qo(Wf[1])}, ${qo(Wf[2])});

	// how much sun the glass dome lets through towards p (0..1): the round
	// opening, less the soft shadows of its ribs and rings (worked out on
	// the dome's base, where the frame is seen almost straight on)
	float oculusOpen(vec3 p) {
		float t = (${qo(te.dome.base+.6)} - p.y) / SHAFT.y;
		vec3 q = p + SHAFT * t;
		vec2 d2 = q.xz - vec2(${qo(te.cx)}, ${qo(te.zc)});
		float d = length(d2);
		float soft = 0.02 + 0.012 * t;
		float open = 1.0 - smoothstep(${qo(t-.15)} - soft, ${qo(t-.15)} + soft, d);
		float hw = ${qo(Bi.bar)};
		float cover = 0.0;
		${e.map(o=>`cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, abs(d - ${qo(o)})));`).join(`
		`)}
		float ang = atan(d2.y, d2.x);
		float stp = ${qo(Math.PI*2/Bi.spokes)};
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
			vec2 o = p.xz - vec2(${qo(te.cx)}, ${qo(te.zc)});
			vec2 dir = SHAFT.xz;
			float k = clamp(-dot(o, dir) / dot(dir, dir), 0.0, tt);
			float dist = length(o + dir * k);
			tr *= smoothstep(${qo(qn.trunkR*.7)}, ${qo(qn.trunkR*1.3)}, dist);
		}
		return tr;
	}`}function v_(){return`
	${Um()}

	// sunlight through the oculus reaching p (0..1)
	float alcoveSun(vec3 p, vec3 n) {
		if (p.x < ${qo(te.x0-.75)} || p.z < ${qo(te.z0-.5)} || p.z > ${qo(te.z1+.5)}) return 0.0;
		float ndl = max(dot(n, SHAFT), 0.0);
		if (ndl <= 0.0) return 0.0;
		return ndl * oculusOpen(p) * treeShade(p);
	}

	// soft daylight filling the court, brightest under the dome
	float alcoveGlow(vec3 p) {
		if (p.x < ${qo(te.x0-1.5)} || p.z < ${qo(te.z0-1.5)} || p.z > ${qo(te.z1+1.5)}) return 0.0;
		float inside = smoothstep(${qo(te.x0-1.2)}, ${qo(te.x0+.6)}, p.x);
		float d = length(p.xz - vec2(${qo(te.cx)}, ${qo(te.zc)}));
		return inside * (0.55 + 0.45 * smoothstep(0.0, 8.0, p.y)) * (1.0 - 0.35 * smoothstep(1.0, 5.0, d));
	}`}jm.exports={addAlcove:p_,alcoveLightGLSL:v_,oculusGLSL:Um,A:te,BENCH:Bm,SHAFT:Wf,TREE:qn}});var tr=mt((eA,Vm)=>{"use strict";var Da=0;try{let t=location.search;/[?&]night\b/.test(t)&&(Da=1)}catch(t){}var b0=Da,_u=0,Wm=[],Vf={tick(t){let e=_u?Math.min(.1,t-_u):0;if(_u=t,b0!==Da){let o=e/2.4;b0=Da>b0?Math.min(Da,b0+o):Math.max(Da,b0-o)}return Vf.night},get night(){return b0*b0*(3-2*b0)},get isNight(){return Da===1},get settled(){return b0===Da},set(t){Da=t?1:0,Wm.forEach(e=>e(Da))},toggle(){Vf.set(!Da)},onChange(t){Wm.push(t)}};Vf.GLSL=`
uniform float night;
vec3 toNight(vec3 c, float keep) {
	float l = dot(c, vec3(0.299, 0.587, 0.114));
	vec3 n = mix(vec3(l), c, 0.35) * vec3(0.55, 0.70, 1.05) * keep;
	return mix(c, n, night);
}
`;Vm.exports=Vf});var G0=mt((oA,ll)=>{"use strict";var Mu=tr(),{C:Su}=vr(),{A:Xf,BENCH:il}=_a(),Gn=Math.PI,m_=[18,29,40],Yf=.575,q0=[],cl=(t,e,o,n,r,a,s)=>q0.push(Object.assign({x:t,y:e,z:o,o:n,back:r,hw:a,s:1,k:1,range:7,mount:"wall"},s||{}));m_.forEach(t=>{cl(1.25+Yf+.48,3.25,t,[1,0],.48,Yf,{s:1.2}),cl(12.75-Yf-.48,3.25,t,[-1,0],.48,Yf,{s:1.2})});[3,11].forEach(t=>cl(t,3.45,Su.hallEnd-.5,[0,-1],.5,99,{s:1.2}));var g_=[14.63,19.63,24.03,28.43,32.83,Su.x1-.28];g_.forEach(t=>cl(t,3.15,Su.z0+.16+.44,[0,1],.44,.28));[3,8.8].forEach(t=>cl(.35+.44,2.75,t,[1,0],.44,99));{let t=(il.inner+il.outer)/2,e=Math.atan2(-1.12,-.98);q0.push({x:Xf.cx+Math.cos(e)*t,y:il.seat+.155,z:Xf.zc+Math.sin(e)*t,o:[Math.cos(e),Math.sin(e)],back:0,hw:0,ring:[Xf.cx,Xf.zc,il.outer+.07,il.seat],s:.52,k:2.2,range:3.6,mount:"table"})}var Eu=.13,Kf=.21,er=Eu/Math.cos(Gn/6),Co=t=>t.toFixed(4);function Xm(t){let o=(t||q0.map((n,r)=>r)).map(n=>{let r=q0[n],a=-r.o[1],s=r.o[0],i=r.mount==="table"?`
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
		float V = (q.y / h) * (${Co(Eu/Kf)} / cos(t));
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
	}`}var on=0,x_=1;function y_(){let t=[],e=[],o=[],n=[],r=[],a=(v,p,d,m)=>(t.push(v[0],v[1],v[2]),e.push(p[0],p[1],p[2]),o.push(d),n.push(m?m[0]:0,m?m[1]:0),t.length/3-1),s=(v,p)=>[v[0]-p[0],v[1]-p[1],v[2]-p[2]],i=(v,p)=>[v[1]*p[2]-v[2]*p[1],v[2]*p[0]-v[0]*p[2],v[0]*p[1]-v[1]*p[0]],c=v=>{let p=Math.hypot(v[0],v[1],v[2])||1;return[v[0]/p,v[1]/p,v[2]/p]};function f(v,p,d,m,g,y){let b=c(i(s(p,v),s(m,v))),w=a(v,b,g,[0,0]),_=a(p,b,g,[1,0]),M=a(d,b,g,[1,1]),A=a(m,b,g,[0,1]);r.push(w,_,M,w,M,A),y&&r.push(w,M,_,w,A,M)}function l(v,p,d){for(let y=0;y<v.length;y++){let b=v[Math.max(0,y-1)],w=v[Math.min(v.length-1,y+1)],_=c(s(w,b)),M=Math.abs(_[1])>.9?[1,0,0]:[0,1,0],A=c(i(_,M)),O=i(A,_),R=typeof p=="function"?p(y/(v.length-1)):p;for(let q=0;q<=6;q++){let F=q/6*Gn*2,K=Math.cos(F),G=Math.sin(F),X=[A[0]*K+O[0]*G,A[1]*K+O[1]*G,A[2]*K+O[2]*G];a([v[y][0]+X[0]*R,v[y][1]+X[1]*R,v[y][2]+X[2]*R],X,d)}}let g=t.length/3-v.length*7;for(let y=0;y<v.length-1;y++)for(let b=0;b<6;b++){let w=g+y*7+b,_=w+6+1;r.push(w,_,w+1,w+1,_,_+1)}}function h(v,p,d,m,g,y,b,w,_){let M=(A,O,R)=>{let q=y+Gn/6+R*Gn/3;return[v[0]+Math.cos(q)*A,O,v[2]+Math.sin(q)*A]};for(let A=0;A<6;A++)f(M(m,p,A+1),M(m,p,A),M(g,d,A),M(g,d,A+1),b);if(w&&g>0)for(let A=0;A<6;A++){let O=a([v[0],d,v[2]],[0,1,0],b),R=a(M(g,d,A),[0,1,0],b),q=a(M(g,d,A+1),[0,1,0],b);r.push(O,q,R)}if(_&&m>0)for(let A=0;A<6;A++){let O=a([v[0],p,v[2]],[0,-1,0],b),R=a(M(m,p,A),[0,-1,0],b),q=a(M(m,p,A+1),[0,-1,0],b);r.push(O,R,q)}}function u(v,p,d,m,g,y,b){let w=[];for(let M=0;M<=18;M++){let A=M/18,O=(b||0)+A*m*Gn*2,R=d*(1-.75*A);w.push([v[0]+p[0]*Math.cos(O)*R,v[1]+Math.sin(O)*R,v[2]+p[2]*Math.cos(O)*R])}l(w,g,y)}return q0.forEach(v=>{let p=v.s,d=Math.atan2(v.o[1],v.o[0]),m=[v.x,v.y,v.z],g=(w,_,M)=>[v.x+v.o[0]*w-v.o[1]*(M||0),v.y+_,v.z+v.o[1]*w+v.o[0]*(M||0)],y=v.y-Kf*p,b=v.y+Kf*p;for(let w=0;w<6;w++){let _=d+Gn/6+w*Gn/3,M=_+Gn/3,A=er*p*.97,O=[v.x+Math.cos(_)*A,y,v.z+Math.sin(_)*A],R=[v.x+Math.cos(M)*A,y,v.z+Math.sin(M)*A];f(R,O,[O[0],b,O[2]],[R[0],b,R[2]],x_,!0)}for(let w=0;w<6;w++){let _=d+Gn/6+w*Gn/3,M=er*p;l([[v.x+Math.cos(_)*M,y-.02*p,v.z+Math.sin(_)*M],[v.x+Math.cos(_)*M,b+.02*p,v.z+Math.sin(_)*M]],.011*p,on)}h(m,y-.035*p,y,er*p*1.12,er*p*1.12,d,on,!0,!0),h(m,y-.1*p,y-.035*p,er*p*.55,er*p*1,d,on,!1,!0),h(m,y-.17*p,y-.1*p,0,er*p*.55,d,on,!1,!1);for(let w=0;w<6;w++){let _=d+w*Gn/3,M=Eu*p*1.06,A=[v.x+Math.cos(_)*M,y-.06*p,v.z+Math.sin(_)*M];u(A,[-Math.sin(_),0,Math.cos(_)],.03*p,.85,.004*p,on,.3)}h(m,b,b+.03*p,er*p*1.14,er*p*1.14,d,on,!1,!0),h(m,b+.03*p,b+.2*p,er*p*1.14,er*p*.32,d,on,!1,!1),h(m,b+.2*p,b+.27*p,er*p*.34,er*p*.34,d,on,!1,!1),h(m,b+.27*p,b+.37*p,er*p*.42,0,d,on,!1,!0),l([[v.x,b+.36*p,v.z],[v.x,b+.47*p,v.z]],w=>.01*p*(1-.7*w),on),h([v.x,0,v.z],b+.44*p,b+.47*p,.018*p,0,d,on,!1,!0);for(let w=0;w<6;w++){let _=d+Gn/6+w*Gn/3,M=er*p*1.14,A=[v.x+Math.cos(_)*M,b+.03*p,v.z+Math.sin(_)*M];l([A,[A[0],A[1]+.09*p,A[2]]],O=>.008*p*(1-.8*O),on),h([A[0],0,A[2]],A[1]+.035*p,A[1]+.06*p,.014*p,.014*p,_,on,!0,!0)}if(v.mount==="wall"){let w=v.back,_=y-.32,M=g(-w,0,0);((F,K,G)=>{let X=[v.o[0],0,v.o[1]],dt=[-v.o[1],0,v.o[0]],Ot=(ct,Wt,ze)=>[M[0]+dt[0]*ct+X[0]*ze,Wt,M[2]+dt[2]*ct+X[2]*ze],zt=.03,gt=.065;f(Ot(-G,F,gt),Ot(G,F,gt),Ot(G,K,gt),Ot(-G,K,gt),on,!0),f(Ot(G,F,zt),Ot(G,F,gt),Ot(G,K,gt),Ot(G,K,zt),on,!0),f(Ot(-G,F,gt),Ot(-G,F,zt),Ot(-G,K,zt),Ot(-G,K,gt),on,!0),f(Ot(-G,K,gt),Ot(G,K,gt),Ot(G,K,zt),Ot(-G,K,zt),on,!0),f(Ot(-G,F,zt),Ot(G,F,zt),Ot(G,F,gt),Ot(-G,F,gt),on,!0),h([M[0]+X[0]*gt,0,M[2]+X[2]*gt],K,K+.05,G*.6,0,d,on,!1,!0),h([M[0]+X[0]*gt,0,M[2]+X[2]*gt],F-.05,F,0,G*.6,d,on,!1,!1)})(_-.2,_+.2,.07);let O=[];for(let F=0;F<=14;F++){let K=F/14,G=-w+.05+K*(w-.05),X=_+.04+(y-.17*p-_-.04)*Math.pow(K,2.2);O.push(g(G,X-v.y,0))}l(O,F=>.022*(1-.3*F),on);let R=[];for(let F=0;F<=10;F++){let K=F/10;R.push(g(-w+.05+K*w*.6,_-.14+K*.16+.05*Math.sin(K*Gn)-v.y,0))}l(R,.009,on);let q=R[R.length-1];u([q[0]-v.o[0]*.03,q[1]+.02,q[2]-v.o[1]*.03],[v.o[0],0,v.o[1]],.045,1.1,.007,on,-.4),[.3,.55].forEach(F=>{let K=O[Math.round(F*14)],G=R[Math.round(F/.62*10)]||R[10];l([K,G],.006,on)}),[-1,1].forEach(F=>{let K=g(-.05,-Kf*p-.2*p,0);u([K[0]-v.o[1]*F*.05,K[1],K[2]+v.o[0]*F*.05],[-v.o[1]*F,0,v.o[0]*F],.05*p,.9,.006,on,Gn)})}else for(let w=0;w<3;w++){let _=d+w*Gn*2/3,M=[v.x+Math.cos(_)*er*p*.7,y-.035*p,v.z+Math.sin(_)*er*p*.7],A=[v.x+Math.cos(_)*er*p*1.25,y-.17*p,v.z+Math.sin(_)*er*p*1.25];l([M,A],.012*p,on)}}),{pos:t,nrm:e,kind:o,uv:n,elems:r}}ll.exports=t=>{let e=y_(),o=t({vert:`
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
		${Xm()}
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
		}`,attributes:{position:e.pos,normal:e.nrm,kind:e.kind,uv:e.uv},elements:e.elems,uniforms:{time:t.context("time"),night:()=>Mu.night}}),n=[],r=[];q0.forEach((s,i)=>{[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(c=>{n.push(c[0],c[1]),r.push(s.x,s.y,s.z,s.s+i*.001)})});let a=t({vert:`
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
		}`,attributes:{corner:n,at:r},count:n.length/2,uniforms:{time:t.context("time"),night:()=>Mu.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(){o(),Mu.night>.01&&a()}};ll.exports.lanternGLSL=Xm;ll.exports.LANTERNS=q0;ll.exports.TREE_LANTERN=[q0.length-1]});var U0=mt((nA,Vr)=>{"use strict";var b_=tr(),Io=Math.PI,Hn=t=>(+t).toFixed(4),w_=t=>`vec3(${Hn(t[0])}, ${Hn(t[1])}, ${Hn(t[2])})`,Ne={x:-7,z:44.5},Qe=5.2,fr=15,re={z0:42.6,z1:46.4,zc:44.5,spring:4,r:1.9},o0={z0:42.2,z1:46.8,top:6.3,x:.35},Jf=[Ne.x-Math.sqrt(Qe*Qe-3.05*3.05),0,0],En={x0:-2.05+Jf[0],x1:Jf[0],z0:41.45,z1:47.55,top:4.3},ku=[[En.x1+.05,2.35,En.z0-.45],[En.x1+.05,2.35,En.z1+.45]].map(([t,e,o])=>{let n=Math.atan2(o-Ne.z,t-Ne.x);return[Ne.x+Math.cos(n)*(Qe-.16),e,Ne.z+Math.sin(n)*(Qe-.16)]}),Lo={ri:3.4,ro:Qe,a0:-35*Io/180,rise:.1836,step:3.6*Io/180,n:88,thick:.36};Lo.k=Lo.rise/Lo.step;var Or=t=>Lo.a0-t,B0=t=>t*Lo.k,cn={x:Ne.x+.1,z:Ne.z-.15,yaw:-Io/2,scale:1.3},w0=cn.scale/1.1,fl={keyX0:cn.x-.524*w0,keyX1:cn.x+.491*w0,keyTop:.647*w0,keyFront:cn.z+.808*w0,keyBack:cn.z+.72*w0,stoolX:cn.x-.041*w0,stoolZ:cn.z+1.122*w0,stoolFront:cn.z+.96*w0,stoolTop:.37*w0,heading:Io},Zf=[[3.6,44.5],[.6,44.5],[-2.2,44.7],[-4.5,46.5],[-7,47.2],[-9.4,46.6],[-10.5,44.9],[-10.9,43.2]];function Km(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let o=e;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}function __(t,e){let o=1e9;for(let n=0;n<Zf.length-1;n++){let[r,a]=Zf[n],[s,i]=Zf[n+1],c=s-r,f=i-a,l=Math.max(0,Math.min(1,((t-r)*c+(e-a)*f)/(c*c+f*f)));o=Math.min(o,Math.hypot(t-r-c*l,e-a-f*l))}return o}var Qf=t=>re.spring+Math.sqrt(Math.max(0,re.r*re.r-(t-re.zc)*(t-re.zc))),H0=t=>Ne.x+Math.sqrt(Math.max(0,Qe*Qe-(t-Ne.z)*(t-Ne.z)));function Ui(t,e){return Math.hypot(t-Ne.x,e-Ne.z)<Qe||t<=0&&t>Ne.x&&e>re.z0&&e<re.z1||t>En.x0&&t<En.x1&&e>En.z0&&e<En.z1}function M_(t,e){if(Math.hypot(t-Ne.x,e-Ne.z)<Lo.ri-.05)return 99;let n=Math.atan2(e-Ne.z,t-Ne.x),r=Lo.a0-n;for(;r<0;)r+=2*Io;for(;r>=2*Io;)r-=2*Io;return r>Lo.n*Lo.step?99:B0(r)-Lo.thick}function S_(){let t=[],e=Km(1729),o=(a,s,i)=>{for(let c=Math.max(0,t.length-400);c<t.length;c++){let f=t[c];if(!(f[1]>.01)&&Math.hypot(f[0]-a,f[2]-s)<i+f[3]+.012)return!0}return!1},n=(a,s)=>{let i=a-cn.x,c=s-cn.z,f=Math.cos(cn.yaw),l=Math.sin(cn.yaw),h=(f*i-l*c)/cn.scale,u=(l*i+f*c)/cn.scale;return h>-1.05&&h<1.3&&u>-.7&&u<.72},r=0;for(;t.length<980&&r<6e4;){r++;let s=e()<.55?1.25+e()*2.1:1.25+Math.sqrt(e())*(Qe-1.45),i=e()*2*Io,c=Ne.x+Math.cos(i)*s,f=Ne.z+Math.sin(i)*s;if(!Ui(c,f)||s>Qe-.18||n(c,f)||__(c,f)<.62||M_(c,f)<2.3||c<En.x1+.9)continue;let l=.022+e()*.02;if(o(c,f,l))continue;let h=e()<.15?.22+e()*.14:.05+e()*.15;t.push([c,0,f,l,h,e()*100])}for(let a=1;a<26;a++){let s=a<12?3:2;for(let i=0;i<s;i++){let c=(a+.25+e()*.5)*Lo.step,f=Or(c),l=Lo.ri+.55+e()*(Lo.ro-Lo.ri-.75),h=.022+e()*.016;t.push([Ne.x+Math.cos(f)*l,(a+1)*Lo.rise,Ne.z+Math.sin(f)*l,h,.05+e()*.14,e()*100])}}for(let a of ku)for(let[s,i,c]of[[0,0,.26],[.06,.05,.18],[-.05,-.04,.14]])t.push([a[0]+s,a[1],a[2]+i,.024,c,e()*100]);for(let a of[En.z0-.35,En.z1+.35])for(let s=0;s<9;s++){let i=En.x1+.35+e()*.5,c=a+(e()-.5)*.5;Math.hypot(i-Ne.x,c-Ne.z)>Qe-.15||t.push([i,0,c,.026+e()*.014,.18+e()*.3,e()*100])}return t}function E_(t){let o=Km(77),n=[];for(let r=0;r<14;r++){let a=t[Math.floor(o()*t.length)];n.push([a[0],a[1]+a[4],a[2]])}for(let r=0;r<12;r++){let a=n.map(()=>[0,0,0,0]);for(let s of t){let i=[s[0],s[1]+s[4],s[2]],c=0,f=1e9;n.forEach((l,h)=>{let u=(i[0]-l[0])**2+(i[1]-l[1])**2*4+(i[2]-l[2])**2;u<f&&(f=u,c=h)}),a[c][0]+=i[0],a[c][1]+=i[1],a[c][2]+=i[2],a[c][3]++}n=a.map((s,i)=>s[3]?[s[0]/s[3],s[1]/s[3],s[2]/s[3],s[3]]:n[i])}return n.filter(r=>r[3]>0).map(r=>[r[0],r[1]+.12,r[2],r[3]/t.length])}var Au=S_(),Ym=E_(Au.filter(t=>t[1]<2||t[1]>2.5)).concat(ku.map(t=>[t[0],t[1]+.35,t[2],.035]));function Qm(){return`
	vec3 roomLight(vec3 p, vec3 N, vec3 V, float gloss, out vec3 spec) {
		spec = vec3(0.0);
		vec3 col = vec3(0.0);
		float floorK = (p.y < 0.02 && N.y > 0.9) ? 1.0 : 0.0;
		${Ym.map((e,o)=>`
		{
			vec3 d = ${w_(e)} - p;
			float dd = dot(d, d);
			vec3 L = d * inversesqrt(dd);
			float fl = 0.86 + 0.08 * sin(time * ${Hn(5.3+o*.71)} + ${Hn(o*1.9)}) + 0.06 * sin(time * ${Hn(11.7+o*1.3)} + ${Hn(o*.7)});
			float w = ${Hn(e[3]*Ym.length)} * fl;
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
		float pool = 1.0 - smoothstep(0.5, 2.9, length(p.xz - vec2(${Hn(fl.stoolX)}, ${Hn(fl.keyFront+.1)})));
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
	}`}var He={FLOOR:0,WALL:1,STEP:2,SOFFIT:3,STRING:4,CEIL:5,OCULUS:6,HALLSTONE:7,IRON:8,RAILING:9,CANDLE:10};function Zm(){let t={pos:[],nrm:[],kind:[],uv:[],idx:[]};return t.v=(e,o,n,r)=>(t.pos.push(e[0],e[1],e[2]),t.nrm.push(o[0],o[1],o[2]),t.kind.push(n),t.uv.push(r?r[0]:0,r?r[1]:0),t.pos.length/3-1),t.quad=(e,o,n,r,a,s,i)=>{let c=t.v(e,a,s,i&&i[0]),f=t.v(o,a,s,i&&i[1]),l=t.v(n,a,s,i&&i[2]),h=t.v(r,a,s,i&&i[3]);t.idx.push(c,f,l,c,l,h)},t.tri=(e,o,n,r,a)=>{let s=t.v(e,r,a),i=t.v(o,r,a),c=t.v(n,r,a);t.idx.push(s,i,c)},t}function k_(){let t=Zm(),e=(n,r,a)=>[Ne.x+Math.cos(n)*r,a,Ne.z+Math.sin(n)*r],o=n=>[Math.cos(n),0,Math.sin(n)];for(let r=0;r>En.x0-.01;r-=.25)for(let a=41.2;a<47.8;a+=.2){let s=r-.25,i=r,c=a,f=a+.2;if(!(Ui(s,c)||Ui(i,c)||Ui(s,f)||Ui(i,f)||Ui((s+i)/2,(c+f)/2)))continue;let l=c,h=f;s>H0(re.z0)-.3&&(l=Math.max(l,re.z0),h=Math.min(h,re.z1),h<=l)||t.quad([s,0,l],[s,0,h],[i,0,h],[i,0,l],[0,1,0],He.FLOOR)}{for(let r=0;r<360;r++){let a=r/360*2*Io,s=(r+1)/360*2*Io,i=(a+s)/2,c=e(i,Qe,0),f=0;c[0]>Ne.x&&c[2]>re.z0-.02&&c[2]<re.z1+.02&&(f=Math.max(Qf(Math.min(Math.max(e(a,Qe,0)[2],re.z0),re.z1)),Qf(Math.min(Math.max(e(s,Qe,0)[2],re.z0),re.z1)))),c[0]<Ne.x&&c[2]>En.z0-.02&&c[2]<En.z1+.02&&(f=En.top);let l=a*Qe,h=s*Qe,u=o(a).map(d=>-d),v=o(s).map(d=>-d),p=[f];for(let d=Math.ceil(f/2.5)*2.5;d<fr;d+=2.5)d>f+.01&&p.push(d);p.push(fr);for(let d=0;d<p.length-1;d++){let m=p[d],g=p[d+1],y=t.v(e(a,Qe,m),u,He.WALL,[l,m]),b=t.v(e(s,Qe,m),v,He.WALL,[h,m]),w=t.v(e(s,Qe,g),v,He.WALL,[h,g]),_=t.v(e(a,Qe,g),u,He.WALL,[l,g]);t.idx.push(y,b,w,y,w,_)}}for(let[r,a,s]of[[6.55,.22,.07],[0,.32,.05]])for(let i=0;i<360;i++){let c=i/360*2*Io,f=(i+1)/360*2*Io,l=(c+f)/2,h=e(l,Qe,0);if(r<1&&(h[0]>Ne.x&&h[2]>re.z0&&h[2]<re.z1||h[0]<Ne.x&&h[2]>En.z0&&h[2]<En.z1))continue;let u=Qe-s;t.quad(e(c,u,r),e(f,u,r),e(f,u,r+a),e(c,u,r+a),o(l).map(v=>-v),He.WALL,[[c*Qe,r+100],[f*Qe,r+100],[f*Qe,r+a+100],[c*Qe,r+a+100]]),t.quad(e(c,u,r+a),e(f,u,r+a),e(f,Qe,r+a),e(c,Qe,r+a),[0,1,0],He.WALL,[[0,200],[0,200],[0,200],[0,200]]),r>1&&t.quad(e(c,Qe,r),e(f,Qe,r),e(f,u,r),e(c,u,r),[0,-1,0],He.WALL,[[0,200],[0,200],[0,200],[0,200]])}}{let n=o0.x;for(let[a,s]of[[re.z0,1],[re.z1,-1]]){let i=H0(a);t.quad([n,0,a],[i,0,a],[i,re.spring,a],[n,re.spring,a],[0,0,s],He.WALL,[[n,0],[i,0],[i,re.spring],[n,re.spring]])}let r=40;for(let a=0;a<r;a++){let s=a/r*Io,i=(a+1)/r*Io,c=re.zc-Math.cos(s)*re.r,f=re.zc-Math.cos(i)*re.r,l=re.spring+Math.sin(s)*re.r,h=re.spring+Math.sin(i)*re.r,u=[0,-Math.sin(s),Math.cos(s)],v=[0,-Math.sin(i),Math.cos(i)],p=t.v([n,l,c],u,He.WALL,[n,s*re.r]),d=t.v([H0(c),l,c],u,He.WALL,[H0(c),s*re.r]),m=t.v([H0(f),h,f],v,He.WALL,[H0(f),i*re.r]),g=t.v([n,h,f],v,He.WALL,[n,i*re.r]);t.idx.push(p,d,m,p,m,g)}}{let n=o0.x,r=.05;for(let f=o0.z0;f<o0.z1-1e-6;f+=r){let l=f,h=Math.min(o0.z1,f+r),v=(p=>p>re.z0&&p<re.z1)((l+h)/2)?Math.max(Qf(l),Qf(h)):0;t.quad([n,v,l],[n,v,h],[n,o0.top,h],[n,o0.top,l],[1,0,0],He.HALLSTONE,[[l,v],[h,v],[h,o0.top],[l,o0.top]])}let a=.32,s=.06,i=n+s,c=36;for(let f=0;f<c;f++){let l=f/c*Io,h=(f+1)/c*Io,u=(g,y)=>[i,re.spring+Math.sin(g)*y,re.zc-Math.cos(g)*y],v=re.r,p=re.r+a;t.quad(u(l,v),u(h,v),u(h,p),u(l,p),[1,0,0],He.HALLSTONE,[[0,300],[0,300],[1,300],[1,300]]);let d=(g,y,b)=>[b,re.spring+Math.sin(g)*y,re.zc-Math.cos(g)*y],m=[0,Math.sin((l+h)/2),-Math.cos((l+h)/2)];t.quad(d(l,p,n),d(h,p,n),d(h,p,i),d(l,p,i),m,He.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),t.quad(d(l,v,n),d(h,v,n),d(h,v,i),d(l,v,i),m.map(g=>-g),He.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}for(let[f,l,h]of[[re.z0-a,re.z0,-1],[re.z1,re.z1+a,1]]){t.quad([i,0,f],[i,0,l],[i,re.spring,l],[i,re.spring,f],[1,0,0],He.HALLSTONE,[[0,300],[1,300],[1,300],[0,300]]);let u=h<0?f:l,v=h<0?l:f;t.quad([n,0,u],[i,0,u],[i,re.spring,u],[n,re.spring,u],[0,0,h],He.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),t.quad([n,0,v],[i,0,v],[i,re.spring,v],[n,re.spring,v],[0,0,-h],He.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);let p=re.spring-.16,d=.16,m=.11,g=Math.min(f,l)-.05,y=Math.max(f,l)+.05;t.quad([n+m,p,g],[n+m,p,y],[n+m,p+d,y],[n+m,p+d,g],[1,0,0],He.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),t.quad([n,p+d,g],[n+m,p+d,g],[n+m,p+d,y],[n,p+d,y],[0,1,0],He.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]),t.quad([n,p,g],[n,p,y],[n+m,p,y],[n+m,p,g],[0,-1,0],He.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);for(let b of[g,y])t.quad([n,p,b],[n+m,p,b],[n+m,p+d,b],[n,p+d,b],[0,0,b===g?-1:1],He.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}{let f=re.spring+re.r-.05,l=re.spring+re.r+a+.12,h=.16,u=.22,v=i+.04;t.quad([v,f,re.zc-h],[v,f,re.zc+h],[v,l,re.zc+u],[v,l,re.zc-u],[1,0,0],He.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);for(let p of[-1,1])t.quad([n,f,re.zc+p*h],[v,f,re.zc+p*h],[v,l,re.zc+p*u],[n,l,re.zc+p*u],[0,0,p],He.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]]);t.quad([n,l,re.zc-u],[v,l,re.zc-u],[v,l,re.zc+u],[n,l,re.zc+u],[0,1,0],He.HALLSTONE,[[0,300],[0,300],[0,300],[0,300]])}}{let{x0:n,x1:r,z0:a,z1:s,top:i}=En;t.quad([n,0,a],[n,0,s],[n,i,s],[n,i,a],[1,0,0],He.WALL,[[a,0],[s,0],[s,i],[a,i]]);for(let[f,l]of[[a,1],[s,-1]]){let h=Ne.x-Math.sqrt(Qe*Qe-(f-Ne.z)*(f-Ne.z));t.quad([n,0,f],[h,0,f],[h,i,f],[n,i,f],[0,0,l],He.WALL,[[n,0],[h,0],[h,i],[n,i]])}let c=24;for(let f=0;f<c;f++){let l=a+(s-a)*f/c,h=a+(s-a)*(f+1)/c,u=Ne.x-Math.sqrt(Qe*Qe-(l-Ne.z)**2),v=Ne.x-Math.sqrt(Qe*Qe-(h-Ne.z)**2);t.quad([n,i,l],[u,i,l],[v,i,h],[n,i,h],[0,-1,0],He.WALL,[[0,200],[0,200],[0,200],[0,200]])}for(let f=0;f<c;f++){let l=a+(s-a)*f/c,h=a+(s-a)*(f+1)/c,u=Ne.x-Math.sqrt(Qe*Qe-(l-Ne.z)**2)+.05,v=Ne.x-Math.sqrt(Qe*Qe-(h-Ne.z)**2)+.05;t.quad([u,i-.3,l],[v,i-.3,h],[v,i,h],[u,i,l],[1,0,0],He.WALL,[[0,200],[0,200],[0,200],[0,200]])}}{let r=[1.15,1.6,2.3,3,3.35,4.2,Qe];for(let a=0;a<120;a++){let s=a/120*2*Io,i=(a+1)/120*2*Io,c=(s+i)/2;c>Io&&(c-=2*Io);for(let f=0;f<r.length-1;f++){let l=r[f],h=r[f+1],u=c*180/Io;l>=3.3&&u>8&&u<85||t.quad(e(s,l,fr),e(s,h,fr),e(i,h,fr),e(i,l,fr),[0,-1,0],He.CEIL,[[s*l,l],[s*h,h],[i*h,h],[i*l,l]])}t.quad(e(s,1.15,fr),e(i,1.15,fr),e(i,1.15,fr+.7),e(s,1.15,fr+.7),o(c).map(f=>-f),He.CEIL,[[0,400],[0,400],[0,400],[0,400]]),t.tri([Ne.x,fr+.7,Ne.z],e(i,1.15,fr+.7),e(s,1.15,fr+.7),[0,-1,0],He.OCULUS)}}{let n=Lo.ri,r=Lo.ro,a=Lo.n*Lo.step;for(let c=0;c<Lo.n;c++){let f=c*Lo.step,l=(c+1)*Lo.step,h=Or(f),u=Or(l),v=(c+1)*Lo.rise,p=c*Lo.rise,d=2;for(let y=0;y<d;y++){let b=h+(u-h)*y/d-(y===0?.004:0),w=h+(u-h)*(y+1)/d;t.quad(e(b,n,v),e(b,r,v),e(w,r,v),e(w,n,v),[0,1,0],He.STEP,[[n*b,c],[r*b,c],[r*w,c],[n*w,c]])}let m=[-Math.sin(h),0,Math.cos(h)],g=h-.004;t.quad(e(g,n,p),e(g,r,p),e(g,r,v),e(g,n,v),m,He.STEP,[[n*h,c+.5],[r*h,c+.5],[r*h,c+.5],[n*h,c+.5]]),t.quad(e(h,n,B0(f)+.06),e(u,n,B0(l)+.06),e(u,n,v),e(g,n,v),o((h+u)/2).map(y=>-y),He.STEP,[[0,500],[0,500],[0,500],[0,500]])}let s=Math.ceil(a/(1.2*Io/180)),i=[n,n+.6,n+1.2,r];for(let c=0;c<s;c++){let f=c/s*a,l=(c+1)/s*a,h=Or(f),u=Or(l),v=B0(f),p=B0(l),d=v-Lo.thick,m=p-Lo.thick,g=o(h).map(A=>-A),y=o(u).map(A=>-A),b=t.v(e(h,n,d),g,He.STRING,[f*n,0]),w=t.v(e(u,n,m),y,He.STRING,[l*n,0]),_=t.v(e(u,n,p+.06),y,He.STRING,[l*n,1]),M=t.v(e(h,n,v+.06),g,He.STRING,[f*n,1]);t.idx.push(b,w,_,b,_,M);for(let A=0;A<i.length-1;A++){let O=i[A],R=i[A+1],q=F=>{let K=o(F);return[-K[0]*.12,-.99,-K[2]*.12]};t.quad(e(h,O,d),e(h,R,d),e(u,R,m),e(u,O,m),q((h+u)/2),He.SOFFIT,[[f*O,O],[f*R,R],[l*R,R],[l*O,O]])}}}return t}function A_(){let t=Zm(),e=Lo.ri+.045,o=Lo.n*Lo.step,n=Math.ceil(o/(.8*Io/180)),r=.92,a=(c,f,l)=>[Ne.x+Math.cos(c)*f,l,Ne.z+Math.sin(c)*f],s=c=>[Math.cos(c),0,Math.sin(c)];for(let c=0;c<n;c++){let f=c/n*o,l=(c+1)/n*o,h=Or(f),u=Or(l),v=B0(f)+.06,p=B0(l)+.06,d=s(h).map(A=>-A),m=s(u).map(A=>-A),g=f*e,y=l*e,b=t.v(a(h,e,v),d,He.RAILING,[g,0]),w=t.v(a(u,e,p),m,He.RAILING,[y,0]),_=t.v(a(u,e,p+r),m,He.RAILING,[y,r]),M=t.v(a(h,e,v+r),d,He.RAILING,[g,r]);t.idx.push(b,w,_,b,_,M)}((c,f,l,h)=>{let v=d=>{let m=Or(d),g=B0(d)+.06+f,y=a(m,e+c,g),b=s(m),w=[];for(let _=0;_<8;_++){let M=_/8*2*Io,A=[b[0]*Math.cos(M),Math.sin(M),b[2]*Math.cos(M)];w.push([[y[0]+A[0]*l,y[1]+A[1]*l,y[2]+A[2]*l],A])}return w},p=v(0);for(let d=1;d<=n;d++){let m=v(d/n*o);for(let g=0;g<8;g++){let y=(g+1)%8,b=t.v(p[g][0],p[g][1],h),w=t.v(m[g][0],m[g][1],h),_=t.v(m[y][0],m[y][1],h),M=t.v(p[y][0],p[y][1],h);t.idx.push(b,w,_,b,_,M)}p=m}})(0,r+.02,.028,He.IRON);for(let c of ku){let f=Math.atan2(c[2]-Ne.z,c[0]-Ne.x),l=[Math.cos(f),0,Math.sin(f)],h=12;for(let d=0;d<h;d++){let m=d/h*2*Io,g=(d+1)/h*2*Io,y=(b,w,_)=>[c[0]+Math.cos(b)*w,_,c[2]+Math.sin(b)*w];t.quad(y(m,.16,c[1]),y(g,.16,c[1]),y(g,.13,c[1]-.05),y(m,.13,c[1]-.05),[Math.cos(m)*.6,.8,Math.sin(m)*.6],He.IRON),t.quad(y(m,.16,c[1]),y(g,.16,c[1]),y(g,0,c[1]+.002),y(m,0,c[1]+.002),[0,1,0],He.IRON)}let u=[c[0]+l[0]*.16,c[1]-.35,c[2]+l[2]*.16],v=[-l[2],0,l[0]],p=.018;t.quad([u[0]-v[0]*p,u[1],u[2]-v[2]*p],[u[0]+v[0]*p,u[1],u[2]+v[2]*p],[c[0]+v[0]*p,c[1]-.05,c[2]+v[2]*p],[c[0]-v[0]*p,c[1]-.05,c[2]-v[2]*p],[-l[0],.5,-l[2]],He.IRON)}{let c=Or(0),f=a(c,e,0),l=10;for(let h=0;h<l;h++){let u=h/l*2*Io,v=(h+1)/l*2*Io,p=(d,m,g)=>[f[0]+Math.cos(d)*m,g,f[2]+Math.sin(d)*m];t.quad(p(u,.035,0),p(v,.035,0),p(v,.035,r+.1),p(u,.035,r+.1),[Math.cos((u+v)/2),0,Math.sin((u+v)/2)],He.IRON),t.quad(p(u,.06,r+.1),p(v,.06,r+.1),p(v,.03,r+.2),p(u,.03,r+.2),[Math.cos((u+v)/2)*.8,.6,Math.sin((u+v)/2)*.8],He.IRON)}}return t}function T_(){let t=[],e=[],o=[],n=[];for(let a of Au){let[s,i,c,f,l,h]=a,u=t.length/3;for(let p=0;p<=7;p++){let d=p/7*2*Io+h,m=Math.cos(d),g=Math.sin(d);t.push(s+m*f,i,c+g*f,s+m*f,i+l,c+g*f),e.push(m,0,g,m,0,g),o.push(0,l,h,1,l,h)}for(let p=0;p<7;p++){let d=u+p*2;n.push(d,d+2,d+3,d,d+3,d+1)}let v=t.length/3;t.push(s,i+l-.006,c),e.push(0,1,0),o.push(2,l,h);for(let p=0;p<7;p++){let d=p/7*2*Io+h;t.push(s+Math.cos(d)*f,i+l,c+Math.sin(d)*f),e.push(0,1,0),o.push(1,l,h)}for(let p=0;p<7;p++)n.push(v,v+1+p,v+1+(p+1)%7)}return{pos:t,nrm:e,info:o,idx:n}}function L_(){let t=[],e=[],o=[],n=[];for(let r of Au){let[a,s,i,,c,f]=r,l=t.length/3;for(let h of[[-1,0],[1,0],[1,1],[-1,1]])t.push(a,s+c+.004,i),e.push(h[0],h[1]),o.push(f);n.push(l,l+1,l+2,l,l+2,l+3)}return{ctr:t,corner:e,ph:o,idx:n}}function z_(t){let e=new DataView(t),o=e.getUint32(4,!0),n=e.getUint32(8,!0),r=[],a=[];for(let g=0;g<3;g++)r.push(e.getFloat32(12+g*4,!0)),a.push(e.getFloat32(24+g*4,!0));let s=36,i=new Uint16Array(t,s,o*3);s+=o*6;let c=new Uint16Array(t,s,n);s+=n*2;let f=new Int8Array(t,s,o*3);s+=o*3;let l=new Uint8Array(t,s,o),h=new Float32Array(o*3),u=new Float32Array(o*3),v=new Float32Array(o),p=Math.cos(cn.yaw),d=Math.sin(cn.yaw),m=cn.scale;for(let g=0;g<o;g++){let y=(r[0]+i[g*3]/65535*a[0])*m,b=(r[1]+i[g*3+1]/65535*a[1])*m,w=(r[2]+i[g*3+2]/65535*a[2])*m;h[g*3]=cn.x+p*y+d*w,h[g*3+1]=b,h[g*3+2]=cn.z-d*y+p*w;let _=f[g*3]/127,M=f[g*3+1]/127,A=f[g*3+2]/127;u[g*3]=p*_+d*A,u[g*3+1]=M,u[g*3+2]=-d*_+p*A,v[g]=l[g]}return{pos:h,nrm:u,mat:v,idx:new Uint32Array(c)}}function R_(){let t=[],e=(h,u)=>[Ne.x+Math.cos(h)*u,Ne.z+Math.sin(h)*u];t.push([[0,re.z0],[H0(re.z0),re.z0]]),t.push([[H0(re.z1),re.z1],[0,re.z1]]);let o=Math.asin((re.z1-Ne.z)/Qe),n=72;for(let h=0;h<n;h++){let u=o+h/n*(2*Io-2*o),v=o+(h+1)/n*(2*Io-2*o);t.push([e(u,Qe-.25),e(v,Qe-.25)])}let r=Jf[0]-.55+.35;t.push([[r,En.z0],[r,En.z1]]);let a=2.4/Lo.k,s=12;for(let h=0;h<s;h++){let u=Or(h/s*a),v=Or((h+1)/s*a);t.push([e(u,Lo.ri-.2),e(v,Lo.ri-.2)])}t.push([e(Or(0),Lo.ri-.2),e(Or(0),Qe)]),t.push([e(Or(a),Lo.ri-.2),e(Or(a),Qe)]);let i=Math.cos(cn.yaw),c=Math.sin(cn.yaw),f=cn.scale,l=[[-1,-.62],[1.25,-.62],[1.25,.62],[-1,.62]].map(([h,u])=>[cn.x+(i*h+c*u)*f,cn.z+(-c*h+i*u)*f]);for(let h=0;h<4;h++)t.push([l[h],l[(h+1)%4]]);return t}Vr.exports=t=>{let e=k_(),o=A_(),n=T_(),r=L_(),a=G0(),s=`
	precision highp float;
	${b_.GLSL}
	uniform float time;
	${Qm()}
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
		}`,attributes:{position:n.pos,normal:n.nrm,info:n.info},elements:new Uint32Array(n.idx),cull:{enable:!1}}),h=t({vert:`
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
		}`,attributes:{ctr:r.ctr,corner:r.corner,ph:r.ph},elements:new Uint32Array(r.idx),uniforms:{halo:t.prop("halo")},depth:{enable:!0,mask:!1},cull:{enable:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),u=null;fetch("res/piano.bin").then(m=>{if(!m.ok)throw new Error("Could not load piano.bin");return m.arrayBuffer()}).then(m=>{let g=z_(m);u=t({vert:`
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
				}`,attributes:{position:g.pos,normal:g.nrm,mat:g.mat},elements:g.idx,cull:{enable:!1}})}).catch(m=>console.error(m));let v=(()=>{let m=[],g=[],y=[],b=[],_=[Ne.x,fr-.3,Ne.z],M=[fl.stoolX,.02,fl.keyFront+.1],A=1.25,O=2.35;for(let R=0;R<=40;R++){let q=R/40*2*Io,F=Math.cos(q),K=Math.sin(q);m.push(_[0]+F*A,_[1],_[2]+K*A,M[0]+F*O,M[1],M[2]+K*O),g.push(F,.08,K,F,.08,K),y.push(1,0)}for(let R=0;R<40;R++){let q=R*2;b.push(q,q+1,q+3,q,q+3,q+2)}return{pos:m,nrm:g,hh:y,idx:b}})(),p=t({vert:`
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
		}`,attributes:{position:v.pos,normal:v.nrm,hh:v.hh},elements:v.idx,depth:{enable:!0,mask:!1},cull:{enable:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});function d(m){let g=m&&m.reflected;c(),f(),l(),u&&u(),g||(p(),h({halo:1}),h({halo:0}))}return d};Vr.exports.C=Ne;Vr.exports.R=Qe;Vr.exports.PASS=re;Vr.exports.SURR=o0;Vr.exports.OFF=Jf;Vr.exports.BAY=En;Vr.exports.PATH=Zf;Vr.exports.PIANO=cn;Vr.exports.PLAY=fl;Vr.exports.TOP=fr;Vr.exports.roomGLSL=Qm;Vr.exports.segments=R_});var c2=mt((rA,i2)=>{"use strict";var N_=Ls(),{addFlutedColumn:Jm,addStatue:C_,addPlant:O_}=Am(),t2=F0(),P_=$i(),qa=vr(),I_=_a(),Wi=U0(),xo=14,An=qa.C.hallEnd+.35,Bo=8,No=.35,Tu=1.15,Lu=1.15,zu=[18,29,40],$_=[[[0,0],[0,Wi.PASS.z0]],[[0,Wi.PASS.z1],[0,An]],[[xo,An],[xo,0]],[[0,0],[xo,0]],[[xo,An],[0,An]]],r2=[];for(let t of zu)for(let e of[1.25,xo-1.25]){let o=Tu/2,n=Lu/2;r2.push([[e-o,t-n],[e+o,t-n]],[[e+o,t-n],[e+o,t+n]],[[e+o,t+n],[e-o,t+n]],[[e-o,t+n],[e-o,t-n]])}var eh=12,a2=2.95,s2=.62,rh=a2+s2,oh=[{file:"venus.bin",x:1.85,z:An-1.6,yaw:2.67,height:5.2,pedestal:!0,mat:1},{file:"david.bin",x:xo-2.1,z:An-1.6,yaw:-2.67,height:5.2,pedestal:!0,mat:1},{file:"pieta.bin",x:1.75,z:5.9,yaw:Math.PI/2,height:3.6,base:1,mat:1},{file:"spinario.bin",x:qa.NICHE_X[0],z:qa.NICHE_STATUE_Z,yaw:-.35,height:1.85,base:qa.NICHE_PLINTH_TOP,mat:3},{file:"charioteer.bin",x:qa.NICHE_X[1],z:qa.NICHE_STATUE_Z+.1,yaw:0,height:2.95,base:qa.NICHE_PLINTH_TOP,mat:3}],F_={x0:No,x1:3.15,z0:3.6,z1:8.2,top:1},e2=.8,ah=1.17,hl=[];[{z:10.4,dz:-.7},{z:19.2,dz:.7},{z:27.8,dz:-.7}].forEach((t,e)=>{hl.push({x:1,z:t.z,seed:11+e*7,away:[1,t.dz]}),hl.push({x:xo-1,z:t.z,seed:53+e*5,away:[-1,t.dz]})});function Ru(t,e,o,n){return[[[t-o,e-n],[t+o,e-n]],[[t+o,e-n],[t+o,e+n]],[[t+o,e+n],[t-o,e+n]],[[t-o,e+n],[t-o,e-n]]]}var sh=[];for(let t of[-1,1])sh.push(...Ru(xo/2+t*rh,eh,.85,.85));for(let t of oh.filter(e=>e.pedestal))sh.push(...Ru(t.x,t.z,ah*1.1,ah*1.1));for(let t of hl)sh.push(...Ru(t.x,t.z,.42,.42));var D_=$_.concat(r2,sh,Wi.segments());function q_(t){let o=new Map,n=(r,a,s)=>{let i=r+":"+a;o.has(i)||o.set(i,[]);let c=o.get(i);c.includes(s)||c.push(s)};for(let r of t){let a=Math.floor(Math.min(r[0][0],r[1][0])/4)-1,s=Math.floor(Math.max(r[0][0],r[1][0])/4)+1,i=Math.floor(Math.min(r[0][1],r[1][1])/4)-1,c=Math.floor(Math.max(r[0][1],r[1][1])/4)+1;for(let f=a;f<=s;f++)for(let l=i;l<=c;l++)n(f,l,r)}return{get(r,a){let s=Math.floor(r/4),i=Math.floor(a/4),c=[];for(let f=-1;f<=1;f++)for(let l=-1;l<=1;l++){let h=o.get(s+f+":"+(i+l));h&&c.push(...h)}return[...new Set(c)]}}}var nh=[],kn={curMat:[0,0,0]};function Nu(t,e,o,n,r,a,s){let i=t.length/3;t.push(...o,...n,...r,...a),e.push(...s,...s,...s,...s);let c=kn.curMat;return nh.push(...c,...c,...c,...c),[i,i+2,i+1,i+1,i+2,i+3]}function zo(t,e,o,n,r,a,s,i,c){let f=(l,h,u,v,p)=>{o.push(...Nu(t,e,l,h,u,v,p))};f([n,r,a],[s,r,a],[n,i,a],[s,i,a],[0,0,-1]),f([s,r,c],[n,r,c],[s,i,c],[n,i,c],[0,0,1]),f([n,r,c],[n,r,a],[n,i,c],[n,i,a],[-1,0,0]),f([s,r,a],[s,r,c],[s,i,a],[s,i,c],[1,0,0]),f([n,i,a],[s,i,a],[n,i,c],[s,i,c],[0,1,0]),f([n,r,c],[s,r,c],[n,r,a],[s,r,a],[0,-1,0])}function ji(t,e,o,n,r){let a=kn,s=a.vert(t,r),i=a.vert(e,r),c=a.vert(o,r),f=a.vert(n,r);a.tri(s,i,c),a.tri(i,f,c)}function o2(t,e,o,n,r,a,s){for(let i=0;i<s;i++){let c=Math.PI*i/s,f=Math.PI*(i+1)/s,l=Math.cos(c),h=Math.sin(c),u=Math.cos(f),v=Math.sin(f),p=[t+o*l,e+o*h],d=[t+o*u,e+o*v],m=[t+n*l,e+n*h],g=[t+n*u,e+n*v];ji([p[0],p[1],r],[d[0],d[1],r],[m[0],m[1],r],[g[0],g[1],r],[0,0,-1]),ji([p[0],p[1],a],[d[0],d[1],a],[m[0],m[1],a],[g[0],g[1],a],[0,0,1]);let y=(c+f)/2;ji([p[0],p[1],r],[d[0],d[1],r],[p[0],p[1],a],[d[0],d[1],a],[-Math.cos(y),-Math.sin(y),0]),ji([m[0],m[1],r],[g[0],g[1],r],[m[0],m[1],a],[g[0],g[1],a],[Math.cos(y),Math.sin(y),0])}}function G_(t,e,o,n,r,a,s){for(let i=0;i<s;i++){let c=Math.PI*i/s,f=Math.PI*(i+1)/s,l=t+o*Math.cos(c),h=e+o*Math.sin(c),u=t+o*Math.cos(f),v=e+o*Math.sin(f);ji([l,h,r],[u,v,r],[l,n,r],[u,n,r],[0,0,-1]),ji([l,h,a],[u,v,a],[l,n,a],[u,n,a],[0,0,1])}}function H_(t,e,o,n){let r=xo/2,a=a2,s=3,i=a+.42,c=i+.15,f=s2,l=rh,h=5.98,u=n-.45,v=n+.45,p=64,d=Jm(kn,r-l,n,0,h,f);Jm(kn,r+l,n,0,h,f),kn.curMat=[0,0,0],o2(r,s,a,i,u,v,p),o2(r,s,i,c,u-.07,v+.07,p),G_(r,s,c,d+.05,u,v,p);for(let g of[-1,1]){let y=r+g*(c-.02),b=r+g*l;zo(t,e,o,Math.min(y,b),s,u,Math.max(y,b),d+.05,v)}for(let g of[-1,1]){let y=r+g*(a-.05),b=r+g*(a+.85);zo(t,e,o,Math.min(y,b),s-.16,n-.6,Math.max(y,b),s,n+.6)}let m=l+f*1.42+.45;zo(t,e,o,r-m,d,n-.7,r+m,d+.44,n+.7),zo(t,e,o,r-m+.12,d+.44,n-.62,r+m-.12,d+.7,n+.62),zo(t,e,o,r-m-.1,d+.7,n-.84,r+m+.1,d+.84,n+.84),zo(t,e,o,r-m-.22,d+.84,n-.96,r+m+.22,d+1,n+.96),zo(t,e,o,r-.3,s+a-.1,n-.56,r+.3,d,n+.56)}function n2(t,e,o,n,r){zo(t,e,o,n-.72,0,r-.72,n+.72,.2,r+.72),zo(t,e,o,n-.58,.2,r-.58,n+.58,.4,r+.58),zo(t,e,o,n-Tu/2,.4,r-Lu/2,n+Tu/2,Bo-1.35,r+Lu/2),zo(t,e,o,n-.67,.42,r-.67,n+.67,.62,r+.67),zo(t,e,o,n-.67,Bo-1.58,r-.67,n+.67,Bo-1.35,r+.67),zo(t,e,o,n-.82,Bo-1.35,r-.82,n+.82,Bo-1.05,r+.82),zo(t,e,o,n-.66,Bo-1.05,r-.66,n+.66,Bo-.78,r+.66),zo(t,e,o,n-.92,Bo-.78,r-.92,n+.92,Bo-.55,r+.92),zo(t,e,o,n-.78,Bo-.55,r-.78,n+.78,Bo-.3,r+.78),zo(t,e,o,n-.92,Bo-.3,r-.92,n+.92,Bo-.1,r+.92)}function th(t,e,o,n,r){r==="left"?(zo(t,e,o,-.08,1,n-3.8/2,.14,5.7,n+3.8/2),zo(t,e,o,-.08-.04,1+.18,n-3.8/2+.18,.18,5.7-.18,n+3.8/2-.18)):(zo(t,e,o,xo-.14,1,n-3.8/2,xo+.08,5.7,n+3.8/2),zo(t,e,o,xo-.18,1+.18,n-3.8/2+.18,xo+.08+.04,5.7-.18,n+3.8/2-.18))}function B_(t,e,o,n){zo(t,e,o,.65,Bo-.16,n-1.65,.65+.22,Bo,n+1.65),zo(t,e,o,xo-.65-.22,Bo-.16,n-1.65,xo-.65,Bo,n+1.65),zo(t,e,o,.65,Bo-.16,n-1.65,xo-.65,Bo,n-1.43),zo(t,e,o,.65,Bo-.16,n+1.43,xo-.65,Bo,n+1.65),o.push(...Nu(t,e,[.65+.22,Bo-.16,n-1.43],[xo-.65-.22,Bo-.16,n-1.43],[.65+.22,Bo-.16,n+1.43],[xo-.65-.22,Bo-.16,n+1.43],[0,-1,0]))}i2.exports=function(){let t=[],e=[],o=[];nh=[],kn=N_.createBuilder(t,e,o,nh),o.push(...Nu(t,e,[0,0,0],[xo,0,0],[0,0,An],[xo,0,An],[0,1,0])),P_.addSkylight(kn,[0,0,0],An),kn.curMat=[0,0,0];{let c=Wi.SURR;zo(t,e,o,-No,0,0,No,Bo,c.z0),zo(t,e,o,-No,0,c.z1,No,Bo,An),zo(t,e,o,-No,c.top,c.z0,No,Bo,c.z1)}zo(t,e,o,xo-No,0,qa.C.z1,xo+No,Bo,An-No),zo(t,e,o,xo-No-.12,0,qa.C.z1+2*No,xo-No,.42,An-No),zo(t,e,o,xo-No-.07,.42,qa.C.z1+2*No,xo-No,.5,An-No);for(let[c,f]of[[0,Wi.SURR.z0],[Wi.SURR.z1,An-No]])zo(t,e,o,No,0,c,No+.12,.42,f),zo(t,e,o,No,.42,c,No+.07,.5,f);zo(t,e,o,No,0,An-No-.12,xo-No,.42,An-No),zo(t,e,o,No,.42,An-No-.07,xo-No,.5,An-No),t2.addEntranceWall(kn),t2.addFrames(kn),kn.curMat=[0,0,0],zo(t,e,o,-No,0,An-No,xo+No,Bo,An+No),H_(t,e,o,eh);for(let c of zu)n2(t,e,o,1.25,c),n2(t,e,o,xo-1.25,c);th(t,e,o,22,"left"),th(t,e,o,25,"right"),th(t,e,o,33,"left"),th(t,e,o,36,"right");let n=[4,9,34,39,44,49];for(let c of n)B_(t,e,o,c);qa.addWing(kn),kn.curMat=[0,0,0];for(let c of oh.filter(f=>f.pedestal))C_(kn,c.x,c.z,ah,e2);{let c=F_;kn.curMat=[0,0,0],kn.box(c.x0,0,c.z0-.08,c.x1+.08,.16,c.z1+.08,[0,0,0]),kn.box(c.x0,.16,c.z0+.04,c.x1-.04,c.top-.14,c.z1-.04,[0,0,0]),kn.box(c.x0,c.top-.14,c.z0-.02,c.x1+.03,c.top-.06,c.z1+.02,[0,0,0]),kn.box(c.x0,c.top-.06,c.z0-.06,c.x1+.07,c.top,c.z1+.06,[0,0,0])}I_.addAlcove(kn);for(let c of hl)O_(kn,c.x,c.z,c.seed,1,c.away);kn.curMat=[0,0,0];let r=[[[xo,An-.35],[0,An-.35]],[[0,3],[0,10]],[[xo,15],[xo,22]],[[0,24],[0,31]],[[xo,33],[xo,40]],[[0,41],[0,46]]],a=q_(D_),s=(c,f)=>{let l=0,h=1/0;return r.forEach((u,v)=>{let p=(u[0][0]+u[1][0])/2,d=(u[0][1]+u[1][1])/2,m=Math.hypot(c-p,f-d);m<h&&(h=m,l=v)}),l},i=[];for(let c=0;c<10;c++)i.push({c:[0,0,0,0],d:[1,0,0,0]});return{placements:r,lights:i,statues:oh,occluders:[...zu.flatMap(c=>[[1.25,c,.78],[xo-1.25,c,.78]]),[xo/2-rh,eh,.86],[xo/2+rh,eh,.86],...oh.filter(c=>c.pedestal).map(c=>[c.x,c.z,ah*1.12]),...hl.map(c=>[c.x,c.z,.34])],pedestalTop:e2,mat:nh,getAreaIndex:s,getGridSegments:(c,f)=>a.get(c,f),getGridParts:(c,f)=>a.get(c,f),position:t,normal:e,elements:o}}});var Cu=mt((aA,l2)=>{"use strict";var{doorLightGLSL:U_}=F0(),{skylightGLSL:j_}=$i(),{windowLightGLSL:W_,C:aa}=vr(),{alcoveLightGLSL:V_}=_a(),Ma=t=>t.toFixed(4),X_=(()=>{let t=[-.22,.6,-.77],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>(o/e).toFixed(4)).join(", ")})();l2.exports=(t,e,o,n)=>{let a=(e.occluders||[]).slice(0,24).map(([v,p,d])=>`ao = min(ao, contact(v_pos.xz, vec2(${v.toFixed(3)}, ${p.toFixed(3)}), ${d.toFixed(3)}));`).join(`
      `),s={c:[0,0,0,0],d:[1,0,0,0]},i=-1,c=[],f=v=>{let p=v&&v.tick!==void 0?v.tick:0;if(p!==i||c.length===0){i=p;let d=e.viewer||[7,2,20];for(c=e.lights.filter(m=>m.c[3]>.5).map(m=>({l:m,d:Math.hypot(m.c[0]-d[0],m.c[2]-d[2])})).sort((m,g)=>m.d-g.d).slice(0,8).map(m=>m.l);c.length<8;)c.push(s)}return c},l={},h="",u="";for(let v=0;v<8;v++)l["lightC"+v]=p=>f(p)[v].c,l["lightD"+v]=p=>f(p)[v].d,h+="uniform vec4 lightC"+v+", lightD"+v+`;
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

    ${h}

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

    ${U_()}

    ${j_()}

    ${W_()}

    ${V_()}

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
      ${u}

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
          float through = doorLight(v_pos, vec3(${X_}));
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
    }`,attributes:{position:e.position,normal:e.normal,a_mat:e.mat},uniforms:l,blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"zero"}},elements:new Uint32Array(e.elements),offset:n?t.prop("offset"):0,count:n?t.prop("count"):e.elements.length})}});var h2=mt((sA,f2)=>{"strict mode";var Y_="https://api.artic.edu/api/v1/artworks/search",K_=({image_id:t},e)=>`https://www.artic.edu/iiif/2/${t}/full/${e},/0/default.jpg`,Q_="?query[bool][must][][term][classification_titles.keyword]=painting&query[bool][must][][term][is_public_domain]=true",Z_="&fields=image_id,title,artist_title",J_={low:400,mid:843,high:1686};f2.exports={fetchList:async function(t,e){let o=Y_+Q_+Z_+`&from=${t}&size=${e}`;return(await fetch(o).then(r=>r.json())).data.filter(r=>r.image_id)},fetchImage:async function(t,e){let o=K_(t,J_[e]),n=await fetch(o).then(r=>r.blob());return{title:t.title+" - "+t.artist_title,image:n}}}});var p2=mt((iA,d2)=>{"use strict";var t6=eu(),e6=ya(),o6=t=>"images/web/"+t.slug+(e6.isPhone?"-1024":"")+".webp";async function u2(t){let e=await fetch(t);if(!e.ok)throw new Error("Could not load "+t);return e.blob()}d2.exports={fetchList:async function(t,e){return t6.slice(t,t+e).map((o,n)=>({...o,image_id:t+n}))},fetchImage:async function(t){let e;try{e=await u2(o6(t))}catch(o){e=await u2("images/"+t.file)}return{title:t.title,image:e}}}});var m2=mt((cA,v2)=>{"strict mode";v2.exports={default:"local",artic:h2(),local:p2()}});var Pu=mt((lA,x2)=>{"strict mode";var Os=document.createElement("canvas"),Ou=Os.width=Os.height=1024,j0=Os.getContext("2d");j0.mozImageSmoothingEnabled=!1;j0.webkitImageSmoothingEnabled=!1;j0.font="32px Verdana";j0.textBaseline="bottom";j0.fillStyle="#aaa";function g2(t,e,o,n){var r=e,a,s=0,i=0,c=e.split(" "),f,l;for(f=l=c.length;t.measureText(r).width>o&&f>1;){f--,r=a="";for(var h=0;h<l;h++)h<f?(r+=c[h],h+1<f&&(r+=" ")):(a+=c[h],h+1<l&&(a+=" "))}return n.push(r),i=t.measureText(r).width,a&&(s=g2(t,a,o,n),s>i&&(i=s)),i}x2.exports={init(t,e,o=Ou){var n=[];g2(j0,e,Math.min(o*Ou,Ou),n),j0.clearRect(0,0,Os.width,Os.height);for(var r=0;r<n.length;r++)j0.fillText(n[r],0,Os.height-(Math.max(n.length,3)-r)*32);return t({data:Os,min:"mipmap",mipmap:"nice",flipY:!0})},draw(t){return t({frag:`
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
            }`,attributes:{pos:[0,0,1,0,0,1,1,1,0,1,1,0]},uniforms:{model:t.prop("textmodel"),tex:t.prop("text")},count:6,blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}})}}});var w2=mt((fA,b2)=>{"strict mode";var Iu=m2(),n6=new URLSearchParams(window.location.search).get("api"),y2=Iu[n6]||Iu[Iu.default],r6=Pu(),$u={},Xi=[],a6=2;function s6(t){return(!navigator.connection||navigator.connection.downlink<a6)&&(t=t=="high"?"mid":"low"),t}var i6=ya(),Vi=document.createElement("canvas");Vi.width=Vi.height=i6.isPhone?1024:2048;var qu=Vi.getContext("2d");qu.imageSmoothingEnabled=!0;qu.imageSmoothingQuality="high";var Fu=!1,c6=t=>[(Xi.pop()||t.texture)([[[200,200,200]]]),e=>(Xi.pop()||t.texture)([[[0,0,0,0]]]),1];async function Du(t,e,o){Fu===!1&&(Fu=t.hasExtension("EXT_texture_filter_anisotropic")?t._gl.getParameter(t._gl.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0);let n,r;try{let a=await y2.fetchImage(e,s6(o));r=a.title,n=await createImageBitmap(a.image),qu.drawImage(n,0,0,Vi.width,Vi.height)}catch(a){return console.error(a),o=="high"?await Du(t,e,"low"):c6(t)}return[(Xi.pop()||t.texture)({data:Vi,min:"mipmap",mipmap:"nice",aniso:Fu,flipY:!0}),a=>r6.init(Xi.pop()||t.texture,r,a),n.width/n.height]}b2.exports={fetch:(t,e=10,o="low",n,r)=>{let a=Object.keys($u).length;y2.fetchList(a,e).then(s=>{e=s.length,s.map(i=>{if($u[i.image_id]){--e===0&&r();return}$u[i.image_id]=i,Du(t,i,o).then(([c,f,l])=>{n({...i,tex:c,textGen:f,aspect:l}),--e===0&&r()})})})},load:(t,e,o="low")=>{e.tex||e.loading||(e.loading=!0,Du(t,e,o).then(([n,r])=>{e.loading=!1,e.tex=n,e.text=r(e.width)}))},unload:t=>{t.tex&&(Xi.push(t.tex),t.tex=void 0),t.text&&(Xi.push(t.text),t.text=void 0)}}});var M2=mt((hA,_2)=>{_2.exports=l6;function l6(){var t=new Float32Array(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var E2=mt((uA,S2)=>{S2.exports=f6;function f6(t){var e=new Float32Array(16);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}});var A2=mt((dA,k2)=>{k2.exports=h6;function h6(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}});var Gu=mt((pA,T2)=>{T2.exports=u6;function u6(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var z2=mt((vA,L2)=>{L2.exports=d6;function d6(t,e){if(t===e){var o=e[1],n=e[2],r=e[3],a=e[6],s=e[7],i=e[11];t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=o,t[6]=e[9],t[7]=e[13],t[8]=n,t[9]=a,t[11]=e[14],t[12]=r,t[13]=s,t[14]=i}else t[0]=e[0],t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=e[1],t[5]=e[5],t[6]=e[9],t[7]=e[13],t[8]=e[2],t[9]=e[6],t[10]=e[10],t[11]=e[14],t[12]=e[3],t[13]=e[7],t[14]=e[11],t[15]=e[15];return t}});var N2=mt((mA,R2)=>{R2.exports=p6;function p6(t,e){var o=e[0],n=e[1],r=e[2],a=e[3],s=e[4],i=e[5],c=e[6],f=e[7],l=e[8],h=e[9],u=e[10],v=e[11],p=e[12],d=e[13],m=e[14],g=e[15],y=o*i-n*s,b=o*c-r*s,w=o*f-a*s,_=n*c-r*i,M=n*f-a*i,A=r*f-a*c,O=l*d-h*p,R=l*m-u*p,q=l*g-v*p,F=h*m-u*d,K=h*g-v*d,G=u*g-v*m,X=y*G-b*K+w*F+_*q-M*R+A*O;return X?(X=1/X,t[0]=(i*G-c*K+f*F)*X,t[1]=(r*K-n*G-a*F)*X,t[2]=(d*A-m*M+g*_)*X,t[3]=(u*M-h*A-v*_)*X,t[4]=(c*q-s*G-f*R)*X,t[5]=(o*G-r*q+a*R)*X,t[6]=(m*w-p*A-g*b)*X,t[7]=(l*A-u*w+v*b)*X,t[8]=(s*K-i*q+f*O)*X,t[9]=(n*q-o*K-a*O)*X,t[10]=(p*M-d*w+g*y)*X,t[11]=(h*w-l*M-v*y)*X,t[12]=(i*R-s*F-c*O)*X,t[13]=(o*F-n*R+r*O)*X,t[14]=(d*b-p*_-m*y)*X,t[15]=(l*_-h*b+u*y)*X,t):null}});var O2=mt((gA,C2)=>{C2.exports=v6;function v6(t,e){var o=e[0],n=e[1],r=e[2],a=e[3],s=e[4],i=e[5],c=e[6],f=e[7],l=e[8],h=e[9],u=e[10],v=e[11],p=e[12],d=e[13],m=e[14],g=e[15];return t[0]=i*(u*g-v*m)-h*(c*g-f*m)+d*(c*v-f*u),t[1]=-(n*(u*g-v*m)-h*(r*g-a*m)+d*(r*v-a*u)),t[2]=n*(c*g-f*m)-i*(r*g-a*m)+d*(r*f-a*c),t[3]=-(n*(c*v-f*u)-i*(r*v-a*u)+h*(r*f-a*c)),t[4]=-(s*(u*g-v*m)-l*(c*g-f*m)+p*(c*v-f*u)),t[5]=o*(u*g-v*m)-l*(r*g-a*m)+p*(r*v-a*u),t[6]=-(o*(c*g-f*m)-s*(r*g-a*m)+p*(r*f-a*c)),t[7]=o*(c*v-f*u)-s*(r*v-a*u)+l*(r*f-a*c),t[8]=s*(h*g-v*d)-l*(i*g-f*d)+p*(i*v-f*h),t[9]=-(o*(h*g-v*d)-l*(n*g-a*d)+p*(n*v-a*h)),t[10]=o*(i*g-f*d)-s*(n*g-a*d)+p*(n*f-a*i),t[11]=-(o*(i*v-f*h)-s*(n*v-a*h)+l*(n*f-a*i)),t[12]=-(s*(h*m-u*d)-l*(i*m-c*d)+p*(i*u-c*h)),t[13]=o*(h*m-u*d)-l*(n*m-r*d)+p*(n*u-r*h),t[14]=-(o*(i*m-c*d)-s*(n*m-r*d)+p*(n*c-r*i)),t[15]=o*(i*u-c*h)-s*(n*u-r*h)+l*(n*c-r*i),t}});var I2=mt((xA,P2)=>{P2.exports=m6;function m6(t){var e=t[0],o=t[1],n=t[2],r=t[3],a=t[4],s=t[5],i=t[6],c=t[7],f=t[8],l=t[9],h=t[10],u=t[11],v=t[12],p=t[13],d=t[14],m=t[15],g=e*s-o*a,y=e*i-n*a,b=e*c-r*a,w=o*i-n*s,_=o*c-r*s,M=n*c-r*i,A=f*p-l*v,O=f*d-h*v,R=f*m-u*v,q=l*d-h*p,F=l*m-u*p,K=h*m-u*d;return g*K-y*F+b*q+w*R-_*O+M*A}});var F2=mt((yA,$2)=>{$2.exports=g6;function g6(t,e,o){var n=e[0],r=e[1],a=e[2],s=e[3],i=e[4],c=e[5],f=e[6],l=e[7],h=e[8],u=e[9],v=e[10],p=e[11],d=e[12],m=e[13],g=e[14],y=e[15],b=o[0],w=o[1],_=o[2],M=o[3];return t[0]=b*n+w*i+_*h+M*d,t[1]=b*r+w*c+_*u+M*m,t[2]=b*a+w*f+_*v+M*g,t[3]=b*s+w*l+_*p+M*y,b=o[4],w=o[5],_=o[6],M=o[7],t[4]=b*n+w*i+_*h+M*d,t[5]=b*r+w*c+_*u+M*m,t[6]=b*a+w*f+_*v+M*g,t[7]=b*s+w*l+_*p+M*y,b=o[8],w=o[9],_=o[10],M=o[11],t[8]=b*n+w*i+_*h+M*d,t[9]=b*r+w*c+_*u+M*m,t[10]=b*a+w*f+_*v+M*g,t[11]=b*s+w*l+_*p+M*y,b=o[12],w=o[13],_=o[14],M=o[15],t[12]=b*n+w*i+_*h+M*d,t[13]=b*r+w*c+_*u+M*m,t[14]=b*a+w*f+_*v+M*g,t[15]=b*s+w*l+_*p+M*y,t}});var q2=mt((bA,D2)=>{D2.exports=x6;function x6(t,e,o){var n=o[0],r=o[1],a=o[2],s,i,c,f,l,h,u,v,p,d,m,g;return e===t?(t[12]=e[0]*n+e[4]*r+e[8]*a+e[12],t[13]=e[1]*n+e[5]*r+e[9]*a+e[13],t[14]=e[2]*n+e[6]*r+e[10]*a+e[14],t[15]=e[3]*n+e[7]*r+e[11]*a+e[15]):(s=e[0],i=e[1],c=e[2],f=e[3],l=e[4],h=e[5],u=e[6],v=e[7],p=e[8],d=e[9],m=e[10],g=e[11],t[0]=s,t[1]=i,t[2]=c,t[3]=f,t[4]=l,t[5]=h,t[6]=u,t[7]=v,t[8]=p,t[9]=d,t[10]=m,t[11]=g,t[12]=s*n+l*r+p*a+e[12],t[13]=i*n+h*r+d*a+e[13],t[14]=c*n+u*r+m*a+e[14],t[15]=f*n+v*r+g*a+e[15]),t}});var H2=mt((wA,G2)=>{G2.exports=y6;function y6(t,e,o){var n=o[0],r=o[1],a=o[2];return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t[3]=e[3]*n,t[4]=e[4]*r,t[5]=e[5]*r,t[6]=e[6]*r,t[7]=e[7]*r,t[8]=e[8]*a,t[9]=e[9]*a,t[10]=e[10]*a,t[11]=e[11]*a,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}});var U2=mt((_A,B2)=>{B2.exports=b6;function b6(t,e,o,n){var r=n[0],a=n[1],s=n[2],i=Math.sqrt(r*r+a*a+s*s),c,f,l,h,u,v,p,d,m,g,y,b,w,_,M,A,O,R,q,F,K,G,X,dt;return Math.abs(i)<1e-6?null:(i=1/i,r*=i,a*=i,s*=i,c=Math.sin(o),f=Math.cos(o),l=1-f,h=e[0],u=e[1],v=e[2],p=e[3],d=e[4],m=e[5],g=e[6],y=e[7],b=e[8],w=e[9],_=e[10],M=e[11],A=r*r*l+f,O=a*r*l+s*c,R=s*r*l-a*c,q=r*a*l-s*c,F=a*a*l+f,K=s*a*l+r*c,G=r*s*l+a*c,X=a*s*l-r*c,dt=s*s*l+f,t[0]=h*A+d*O+b*R,t[1]=u*A+m*O+w*R,t[2]=v*A+g*O+_*R,t[3]=p*A+y*O+M*R,t[4]=h*q+d*F+b*K,t[5]=u*q+m*F+w*K,t[6]=v*q+g*F+_*K,t[7]=p*q+y*F+M*K,t[8]=h*G+d*X+b*dt,t[9]=u*G+m*X+w*dt,t[10]=v*G+g*X+_*dt,t[11]=p*G+y*X+M*dt,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t)}});var W2=mt((MA,j2)=>{j2.exports=w6;function w6(t,e,o){var n=Math.sin(o),r=Math.cos(o),a=e[4],s=e[5],i=e[6],c=e[7],f=e[8],l=e[9],h=e[10],u=e[11];return e!==t&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[4]=a*r+f*n,t[5]=s*r+l*n,t[6]=i*r+h*n,t[7]=c*r+u*n,t[8]=f*r-a*n,t[9]=l*r-s*n,t[10]=h*r-i*n,t[11]=u*r-c*n,t}});var X2=mt((SA,V2)=>{V2.exports=_6;function _6(t,e,o){var n=Math.sin(o),r=Math.cos(o),a=e[0],s=e[1],i=e[2],c=e[3],f=e[8],l=e[9],h=e[10],u=e[11];return e!==t&&(t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=a*r-f*n,t[1]=s*r-l*n,t[2]=i*r-h*n,t[3]=c*r-u*n,t[8]=a*n+f*r,t[9]=s*n+l*r,t[10]=i*n+h*r,t[11]=c*n+u*r,t}});var K2=mt((EA,Y2)=>{Y2.exports=M6;function M6(t,e,o){var n=Math.sin(o),r=Math.cos(o),a=e[0],s=e[1],i=e[2],c=e[3],f=e[4],l=e[5],h=e[6],u=e[7];return e!==t&&(t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=a*r+f*n,t[1]=s*r+l*n,t[2]=i*r+h*n,t[3]=c*r+u*n,t[4]=f*r-a*n,t[5]=l*r-s*n,t[6]=h*r-i*n,t[7]=u*r-c*n,t}});var Z2=mt((kA,Q2)=>{Q2.exports=S6;function S6(t,e,o){var n,r,a,s=o[0],i=o[1],c=o[2],f=Math.sqrt(s*s+i*i+c*c);return Math.abs(f)<1e-6?null:(f=1/f,s*=f,i*=f,c*=f,n=Math.sin(e),r=Math.cos(e),a=1-r,t[0]=s*s*a+r,t[1]=i*s*a+c*n,t[2]=c*s*a-i*n,t[3]=0,t[4]=s*i*a-c*n,t[5]=i*i*a+r,t[6]=c*i*a+s*n,t[7]=0,t[8]=s*c*a+i*n,t[9]=i*c*a-s*n,t[10]=c*c*a+r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t)}});var tg=mt((AA,J2)=>{J2.exports=E6;function E6(t,e,o){var n=e[0],r=e[1],a=e[2],s=e[3],i=n+n,c=r+r,f=a+a,l=n*i,h=n*c,u=n*f,v=r*c,p=r*f,d=a*f,m=s*i,g=s*c,y=s*f;return t[0]=1-(v+d),t[1]=h+y,t[2]=u-g,t[3]=0,t[4]=h-y,t[5]=1-(l+d),t[6]=p+m,t[7]=0,t[8]=u+g,t[9]=p-m,t[10]=1-(l+v),t[11]=0,t[12]=o[0],t[13]=o[1],t[14]=o[2],t[15]=1,t}});var og=mt((TA,eg)=>{eg.exports=k6;function k6(t,e){return t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=e[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var rg=mt((LA,ng)=>{ng.exports=A6;function A6(t,e){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e[0],t[13]=e[1],t[14]=e[2],t[15]=1,t}});var sg=mt((zA,ag)=>{ag.exports=T6;function T6(t,e){var o=Math.sin(e),n=Math.cos(e);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=n,t[6]=o,t[7]=0,t[8]=0,t[9]=-o,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var cg=mt((RA,ig)=>{ig.exports=L6;function L6(t,e){var o=Math.sin(e),n=Math.cos(e);return t[0]=n,t[1]=0,t[2]=-o,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=o,t[9]=0,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var fg=mt((NA,lg)=>{lg.exports=z6;function z6(t,e){var o=Math.sin(e),n=Math.cos(e);return t[0]=n,t[1]=o,t[2]=0,t[3]=0,t[4]=-o,t[5]=n,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var ug=mt((CA,hg)=>{hg.exports=R6;function R6(t,e){var o=e[0],n=e[1],r=e[2],a=e[3],s=o+o,i=n+n,c=r+r,f=o*s,l=n*s,h=n*i,u=r*s,v=r*i,p=r*c,d=a*s,m=a*i,g=a*c;return t[0]=1-h-p,t[1]=l+g,t[2]=u-m,t[3]=0,t[4]=l-g,t[5]=1-f-p,t[6]=v+d,t[7]=0,t[8]=u+m,t[9]=v-d,t[10]=1-f-h,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}});var pg=mt((OA,dg)=>{dg.exports=N6;function N6(t,e,o,n,r,a,s){var i=1/(o-e),c=1/(r-n),f=1/(a-s);return t[0]=a*2*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a*2*c,t[6]=0,t[7]=0,t[8]=(o+e)*i,t[9]=(r+n)*c,t[10]=(s+a)*f,t[11]=-1,t[12]=0,t[13]=0,t[14]=s*a*2*f,t[15]=0,t}});var mg=mt((PA,vg)=>{vg.exports=C6;function C6(t,e,o,n,r){var a=1/Math.tan(e/2),s=1/(n-r);return t[0]=a/o,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(r+n)*s,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*r*n*s,t[15]=0,t}});var xg=mt((IA,gg)=>{gg.exports=O6;function O6(t,e,o,n){var r=Math.tan(e.upDegrees*Math.PI/180),a=Math.tan(e.downDegrees*Math.PI/180),s=Math.tan(e.leftDegrees*Math.PI/180),i=Math.tan(e.rightDegrees*Math.PI/180),c=2/(s+i),f=2/(r+a);return t[0]=c,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=f,t[6]=0,t[7]=0,t[8]=-((s-i)*c*.5),t[9]=(r-a)*f*.5,t[10]=n/(o-n),t[11]=-1,t[12]=0,t[13]=0,t[14]=n*o/(o-n),t[15]=0,t}});var bg=mt(($A,yg)=>{yg.exports=P6;function P6(t,e,o,n,r,a,s){var i=1/(e-o),c=1/(n-r),f=1/(a-s);return t[0]=-2*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*c,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*f,t[11]=0,t[12]=(e+o)*i,t[13]=(r+n)*c,t[14]=(s+a)*f,t[15]=1,t}});var _g=mt((FA,wg)=>{var I6=Gu();wg.exports=$6;function $6(t,e,o,n){var r,a,s,i,c,f,l,h,u,v,p=e[0],d=e[1],m=e[2],g=n[0],y=n[1],b=n[2],w=o[0],_=o[1],M=o[2];return Math.abs(p-w)<1e-6&&Math.abs(d-_)<1e-6&&Math.abs(m-M)<1e-6?I6(t):(l=p-w,h=d-_,u=m-M,v=1/Math.sqrt(l*l+h*h+u*u),l*=v,h*=v,u*=v,r=y*u-b*h,a=b*l-g*u,s=g*h-y*l,v=Math.sqrt(r*r+a*a+s*s),v?(v=1/v,r*=v,a*=v,s*=v):(r=0,a=0,s=0),i=h*s-u*a,c=u*r-l*s,f=l*a-h*r,v=Math.sqrt(i*i+c*c+f*f),v?(v=1/v,i*=v,c*=v,f*=v):(i=0,c=0,f=0),t[0]=r,t[1]=i,t[2]=l,t[3]=0,t[4]=a,t[5]=c,t[6]=h,t[7]=0,t[8]=s,t[9]=f,t[10]=u,t[11]=0,t[12]=-(r*p+a*d+s*m),t[13]=-(i*p+c*d+f*m),t[14]=-(l*p+h*d+u*m),t[15]=1,t)}});var Sg=mt((DA,Mg)=>{Mg.exports=F6;function F6(t){return"mat4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+")"}});var Yi=mt((qA,Eg)=>{Eg.exports={create:M2(),clone:E2(),copy:A2(),identity:Gu(),transpose:z2(),invert:N2(),adjoint:O2(),determinant:I2(),multiply:F2(),translate:q2(),scale:H2(),rotate:U2(),rotateX:W2(),rotateY:X2(),rotateZ:K2(),fromRotation:Z2(),fromRotationTranslation:tg(),fromScaling:og(),fromTranslation:rg(),fromXRotation:sg(),fromYRotation:cg(),fromZRotation:fg(),fromQuat:ug(),frustum:pg(),perspective:mg(),perspectiveFromFieldOfView:xg(),ortho:bg(),lookAt:_g(),str:Sg()}});var Tg=mt((GA,Ag)=>{"use strict";var kg=w2(),xn=Yi(),Ps=vr(),D6=3e3,ih="high",Hu,dl=.36,pl=13.64,Ki=Ps.C.hallEnd-.01,vl=Ps.C.z0+.01,q6=.356,G6=13.644,H6=Ps.C.hallEnd-.006,B6=Ps.C.z0+.006,U6=.12,lh=4,Qi=t=>mr[t]&&mr[t].cy||lh,Bu=.26,j6=5.6,W6=7,mr=[{side:"right",z:34.5},{side:"right",z:23.5},{side:"left",z:23.5},{side:"end",z:Ki},{side:"left",z:34.5},{side:"right",z:14.6},{side:"left",z:14.6,maxW:3.7,maxH:3.7},{side:"corridor",x:Ps.PAINTING_X[0],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:Ps.PAINTING_X[1],cy:3,maxW:3.3,maxH:3.73},{side:"corridor",x:Ps.PAINTING_X[2],cy:3,maxW:3.3,maxH:3.73}];function V6(t,e){let o=e&&e.maxH||j6,n=e&&e.maxW||W6,r=Math.min(o,n/t);return{width:r*t,height:r}}function X6(t,e,o){let n=mr[o],r=[],a=Qi(o)-e/2;return n.side==="left"?(xn.fromTranslation(r,[dl,a,n.z+t/2]),xn.rotateY(r,r,Math.PI/2)):n.side==="right"?(xn.fromTranslation(r,[pl,a,n.z-t/2]),xn.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?xn.fromTranslation(r,[n.x-t/2,a,vl]):(xn.fromTranslation(r,[7+t/2,a,Ki]),xn.rotateY(r,r,Math.PI)),xn.scale(r,r,[t,e,U6]),r}function Y6(t,e,o){let n=mr[o],r=[],a=Qi(o)-e/2;return n.side==="left"?(xn.fromTranslation(r,[dl,a,n.z+t/2]),xn.rotateY(r,r,Math.PI/2)):n.side==="right"?(xn.fromTranslation(r,[pl,a,n.z-t/2]),xn.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?xn.fromTranslation(r,[n.x-t/2,a,vl]):(xn.fromTranslation(r,[7+t/2,a,Ki]),xn.rotateY(r,r,Math.PI)),r}function K6(t,e,o){let n=mr[o],r=[],a=Qi(o)-e/2-Bu-.38;return n.side==="left"?(xn.fromTranslation(r,[q6,a,n.z+t/2]),xn.rotateY(r,r,Math.PI/2)):n.side==="right"?(xn.fromTranslation(r,[G6,a,n.z-t/2]),xn.rotateY(r,r,-Math.PI/2)):n.side==="corridor"?xn.fromTranslation(r,[n.x-t/2,a,B6]):(xn.fromTranslation(r,[7+t/2,a,H6]),xn.rotateY(r,r,Math.PI)),xn.scale(r,r,[2,2,2]),r}function Q6(t,e,o){let n=mr[o],r=Qi(o)-e/2-Bu-.38;return n.side==="left"?[dl+.55,r,n.z]:n.side==="right"?[pl-.55,r,n.z]:n.side==="corridor"?[n.x,r,vl+.55]:[7,r,Ki-.55]}var ul=.42;function ch(t,e,o,n,r,a){return[e[0]*n,e[1]*n,e[2]*n,0,0,r,0,0,o[0]*a,o[1]*a,o[2]*a,0,t[0],t[1],t[2],1]}function Z6(t,e,o){let n=mr[o],r,a,s;n.side==="left"?(r=[dl,n.z],a=[0,0,1],s=[1,0,0]):n.side==="right"?(r=[pl,n.z],a=[0,0,1],s=[-1,0,0]):n.side==="corridor"?(r=[n.x,vl],a=[1,0,0],s=[0,0,1]):(r=[7,Ki],a=[1,0,0],s=[0,0,-1]);let i=Qi(o)+e/2+Bu+.3,c=Math.min(2.4,Math.max(.9,t*.55)),f=(v,p)=>[r[0]+s[0]*v,p,r[1]+s[2]*v],l=[.075,.062,.05],h=[{fixmodel:ch(f(.014,i),a,s,.1,.13,.028),fixcol:l,fixglow:0},{fixmodel:ch(f(ul/2,i),a,s,.02,.02,ul),fixcol:l,fixglow:0},{fixmodel:ch(f(ul,i),a,s,c,.034,.05),fixcol:l,fixglow:0},{fixmodel:ch(f(ul-.012,i-.019),a,s,c*.94,.006,.028),fixcol:l,fixglow:1}],u=f(ul,i-.02);return{fixtures:h,light:{c:[u[0],u[1],u[2],1],d:[a[0],a[1],a[2],c/2]}}}Ag.exports=(t,e)=>{let o=[],n=[],r=a=>{let s=a.image_id;if(!mr[s])return;let{width:i,height:c}=V6(a.aspect,mr[s]),f=Z6(i,c,s);e&&e.lights&&s<e.lights.length&&(e.lights[s]=f.light),o.push({...a,fixtures:f.fixtures,side:mr[s].side,model:X6(i,c,s),framemodel:Y6(i,c,s),framesize:[i,c],textmodel:K6(i,c,s),text:a.textGen(i),width:i,height:c,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:Q6(i,c,s),paintingPosition:mr[s].side==="left"?[dl+.05,lh,mr[s].z]:mr[s].side==="right"?[pl-.05,lh,mr[s].z]:mr[s].side==="corridor"?[mr[s].x,Qi(s),vl+.05]:[7,lh,Ki-.05],textGen:null})};return kg.fetch(t,mr.length,ih,r,()=>{}),{update:()=>{n=o,n.forEach(a=>{kg.load(t,a,ih)}),ih="low",Hu&&clearTimeout(Hu),Hu=setTimeout(()=>{ih="high"},D6)},batch:()=>n,interactables:()=>n.map((a,s)=>({side:a.side,width:a.width,index:s,title:a.title,description:a.description,medium:a.medium,slug:a.slug,visit:a.visit,size:a.size,plaquePosition:a.plaquePosition,paintingPosition:a.paintingPosition}))}}});var Ng=mt((HA,Rg)=>{"use strict";var J6=Pu(),Lg=ya(),zg=[[-.02,.125],[-.02,.15],[.035,.15],[.07,.12],[.07,.17],[.185,.17],[.185,.19],[.215,.19],[.26,.03]];function tM(){let t=[[0,0],[1,0],[1,1],[0,1]],e=[];zg.forEach(([n,r])=>{t.forEach(([a,s])=>e.push([a,s,n,r]))});let o=[];for(let n=0;n<zg.length-1;n++)for(let r=0;r<4;r++){let a=(r+1)%4,s=n*4+r,i=n*4+a,c=(n+1)*4+r,f=(n+1)*4+a;o.push(s,i,f,s,f,c)}return{verts:e,elems:o}}var eM=`#extension GL_OES_standard_derivatives : enable
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
}`,oM=`
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
}`;Rg.exports=t=>{let e=J6.draw(t),o=t({frag:`#extension GL_OES_standard_derivatives : enable
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
	}`,attributes:{pos:[0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,-.1,-.1,0,1.1,-.1,0,-.1,1.1,0,1.1,1.1,0]},elements:[0,1,2,3,2,1,1,0,5,4,5,0,3,1,7,5,7,1,0,2,4,6,4,2,8,9,4,5,4,9,9,11,5,7,5,11,11,10,7,6,7,10,10,8,6,4,6,8],uniforms:{model:t.prop("model"),tex:t.prop("tex"),psize:t.prop("framesize"),canvasCm:(s,i)=>i.size?[i.size[1],i.size[0]]:[61,91],texel:1/(Lg.isPhone?1024:2048),detail:()=>Lg.post===0?0:1},blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:"one minus src alpha",dstRGB:"one minus src alpha",dstAlpha:1},color:[0,0,0,0]}}),n=tM(),r=t({frag:eM,vert:oM,attributes:{prof:n.verts},elements:n.elems,uniforms:{model:t.prop("framemodel"),fsize:t.prop("framesize")},cull:{enable:!1},blend:{enable:!1}}),a=t({frag:`#extension GL_OES_standard_derivatives : enable
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
}`,attributes:{pos:[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5],[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]]},elements:[0,1,2,0,2,3,4,5,6,4,6,7,0,1,5,0,5,4,2,3,7,2,7,6,0,3,7,0,7,4,1,2,6,1,6,5],uniforms:{model:t.prop("fixmodel"),fixcol:t.prop("fixcol"),fixglow:t.prop("fixglow")},cull:{enable:!1},blend:{enable:!1}});return function(s){o(s),r(s);let i=[];s.forEach(c=>{c.fixtures&&i.push(...c.fixtures)}),i.length&&a(i),e(s)}}});var bl=mt((UA,V0)=>{"use strict";var Xo=Math.PI,Et=t=>(+t).toFixed(4),Xe=[-90,0,0],Ut=16,lo=22,uo=7.8,sa=11.6,hr=.55,ia=(sa-uo)/(Ut/2),ee={c:[3.6,8.6,13.6,18.6],hw:1.3,sill:.62,spring:4.9};ee.top=ee.spring+ee.hw;var Pr={cols:[-.65,0,.65],rowH:.71,w:.055,ring:.78},Ho={rafter:lo/12,rafterW:.1,purlin:1,purlinW:.07},xl=[5.5,11,16.5],Vt={x0:Ut/2-1.9,x1:Ut/2+1.9,z0:5.6,z1:16.6,curb:.5,top:.36},Ir={x:Ut/2,z:14.9,plinth:.86,height:2.05,yaw:Xo+.35,file:"res/nymph.bin"},Uu=(()=>{let t=[-.68,.6,-.36],e=Math.hypot(t[0],t[1],t[2]);return t.map(o=>o/e)})(),ju=t=>[t[0]+Xe[0],t[1]+Xe[1],t[2]+Xe[2]];function $g(){let t=ee.c.map(o=>`
		{
			float dz = q.z - ${Et(o)};
			float inside = smoothstep(-b, b, ${Et(ee.hw)} - abs(dz)) * smoothstep(-b, b, q.y - ${Et(ee.sill)});
			float arch = smoothstep(-b, b, ${Et(ee.hw)} - length(vec2(dz, max(q.y - ${Et(ee.spring)}, 0.0))));
			o = max(o, inside * arch);
		}`).join(""),e=ee.c.map(o=>`
		{
			float dz = q.z - ${Et(o)};
			if (abs(dz) < ${Et(ee.hw+.2)}) {
				${Pr.cols.map(n=>`bar = max(bar, 1.0 - smoothstep(${Et(Pr.w*.5)} - b, ${Et(Pr.w*.5)} + b, abs(dz - ${Et(n)})));`).join(`
				`)}
				float ry = q.y - ${Et(ee.sill)};
				float tr = abs(ry - ${Et(Pr.rowH)} * floor(ry / ${Et(Pr.rowH)} + 0.5));
				if (q.y < ${Et(ee.spring+.02)}) bar = max(bar, 1.0 - smoothstep(${Et(Pr.w*.5)} - b, ${Et(Pr.w*.5)} + b, tr));
				float rr = length(vec2(dz, q.y - ${Et(ee.spring)}));
				if (q.y > ${Et(ee.spring)}) bar = max(bar, 1.0 - smoothstep(${Et(Pr.w*.5)} - b, ${Et(Pr.w*.5)} + b, abs(rr - ${Et(Pr.ring)})));
				// the frame round the opening
				bar = max(bar, 1.0 - smoothstep(0.0, b + 0.03, ${Et(ee.hw)} - max(abs(dz), q.y > ${Et(ee.spring)} ? rr : 0.0)));
			}
		}`).join("");return`
	const vec3 STUDIO_SUN = vec3(${Et(Uu[0])}, ${Et(Uu[1])}, ${Et(Uu[2])});

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
	// coordinates (centre 0, half size ${Et(Ho.purlin/2)} x ${Et(Ho.rafter/2)}),
	// b the softness. Returns how much light gets through.
	float studioRoofPattern(vec2 q, float b) {
		vec2 hs = vec2(${Et(Ho.purlin/2)}, ${Et(Ho.rafter/2)});
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
		vec3 p = pw - vec3(${Et(Xe[0])}, ${Et(Xe[1])}, ${Et(Xe[2])});
		vec3 S = STUDIO_SUN;
		// where the ray towards the sun leaves through the left wall
		float tw = (0.0 - p.x) / S.x;
		// and where it rises past the eaves
		float te = (${Et(uo)} - p.y) / S.y;
		if (tw > 0.0 && tw < te) {
			vec3 h0 = p + S * tw;
			if (h0.z < 0.0 || h0.z > ${Et(lo)}) return 0.0;
			vec3 h1 = p + S * ((${Et(-hr)} - p.x) / S.x);
			vec3 hm = p + S * ((${Et(-hr*.5)} - p.x) / S.x);
			float b = 0.006 + 0.0075 * tw;
			float open = min(studioWinOpen(h0, b), studioWinOpen(h1, b));
			if (open <= 0.0) return 0.0;
			float bar = studioWinBars(hm, b);
			return open * (1.0 - bar) * 0.92;
		}
		// up through the roof: the trusses' tie beams first
		vec3 he = p + S * max(te, 0.0);
		float vis = 1.0;
		if (p.y < ${Et(uo)}) {
			if (he.z < 0.0 || he.z > ${Et(lo)} || he.x < 0.0 || he.x > ${Et(Ut)}) return 0.0;
			float be = 0.01 + 0.008 * te;
			${xl.map(o=>`vis *= smoothstep(0.08 - be, 0.08 + be, abs(he.z - ${Et(o)}));`).join(`
			`)}
			// the bougainvillea along the tie beams
			${Ji.filter(o=>o[0]==="truss").map(([o,n,r])=>`vis *= 1.0 - studioVineShade(he.z - ${Et(n)}, he.x, he.z, ${Et(r)});`).join(`
			`)}
		}
		// then the glass: the two slopes of the roof
		float tl = (${Et(ia)} * p.x - p.y + ${Et(uo)}) / (S.y - ${Et(ia)} * S.x);
		float tr = (${Et(ia)} * (${Et(Ut)} - p.x) - p.y + ${Et(uo)}) / (S.y + ${Et(ia)} * S.x);
		float t = 1e9;
		vec3 h = vec3(0.0);
		vec3 hl = p + S * tl, hr = p + S * tr;
		if (tl > 0.0 && hl.x >= -0.01 && hl.x <= ${Et(Ut/2+.01)}) { t = tl; h = hl; }
		if (tr > 0.0 && tr < t && hr.x >= ${Et(Ut/2-.01)} && hr.x <= ${Et(Ut+.01)}) { t = tr; h = hr; }
		if (t > 1e8) return 0.0;
		if (h.z < 0.0 || h.z > ${Et(lo)}) return 0.0;
		float b = 0.008 + 0.0075 * t;
		float rz = abs(h.z - ${Et(Ho.rafter)} * floor(h.z / ${Et(Ho.rafter)} + 0.5));
		float bar = 1.0 - smoothstep(${Et(Ho.rafterW*.5)} - b, ${Et(Ho.rafterW*.5)} + b, rz);
		float ux = h.x < ${Et(Ut/2)} ? h.x : ${Et(Ut)} - h.x;
		float rx = abs(ux - ${Et(Ho.purlin)} * floor(ux / ${Et(Ho.purlin)} + 0.5));
		bar = max(bar, 1.0 - smoothstep(${Et(Ho.purlinW*.5)} - b, ${Et(Ho.purlinW*.5)} + b, rx));
		// the ridge beam
		bar = max(bar, 1.0 - smoothstep(0.14 - b, 0.14 + b, abs(h.x - ${Et(Ut/2)})));
		// the leaded pattern in the panes (its shadow is crisper than
		// the sun's disc would allow, for the drawing to read)
		vec2 pq = vec2(ux - ${Et(Ho.purlin)} * floor(ux / ${Et(Ho.purlin)}) - ${Et(Ho.purlin/2)}, h.z - ${Et(Ho.rafter)} * floor(h.z / ${Et(Ho.rafter)}) - ${Et(Ho.rafter/2)});
		float pat = studioRoofPattern(pq, 0.004 + 0.0035 * t);
		// and along the rafters and the ridge
		${Ji.filter(o=>o[0]==="rafter").map(([o,n,r])=>`pat *= 1.0 - studioVineShade(h.z - ${Et(n)}, h.x, h.z, ${Et(r)});`).join(`
		`)}
		pat *= 1.0 - studioVineShade(h.x - ${Et(Ut/2)}, h.z, h.x, 0.9);
		return vis * (1.0 - bar) * pat * 0.78;
	}`}function tc(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let o=e;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}var it={FLOOR:0,PLASTER:1,STONE:2,STEEL:3,WATER:4,PAD:5,PETAL:6,STAMEN:7,MARBLE:8,WOOD:9,GESSO:10,PAINT:11,POT:12,SHADE:13,BULB:14,NICHE:15,JAR:16,SOIL:17,BRUSH:18,TRAVERTINE:19,CLOTH:20,WMARBLE:21,REDDOOR:22,REDPANEL:23,DARKWOOD:24,BRASS:25,BRACT:26,KEYHOLE:27};function Fg(){let t={pos:[],nrm:[],kind:[],uv:[],anchor:[],idx:[]};return t.float=null,t.v=(e,o,n,r)=>(t.pos.push(e[0]+Xe[0],e[1]+Xe[1],e[2]+Xe[2]),t.nrm.push(o[0],o[1],o[2]),t.kind.push(n),t.uv.push(r?r[0]:0,r?r[1]:0),t.float?t.anchor.push(t.float[0]+Xe[0],t.float[1]+Xe[2],t.float[2],1):t.anchor.push(0,0,0,0),t.pos.length/3-1),t.quad=(e,o,n,r,a,s,i)=>{let c=t.v(e,a,s,i&&i[0]),f=t.v(o,a,s,i&&i[1]),l=t.v(n,a,s,i&&i[2]),h=t.v(r,a,s,i&&i[3]);t.idx.push(c,f,l,c,l,h)},t.box=(e,o,n,r,a,s,i,c)=>{let f=c||{};f.top||t.quad([e,a,n],[e,a,s],[r,a,s],[r,a,n],[0,1,0],i,[[e,n],[e,s],[r,s],[r,n]]),f.bottom||t.quad([e,o,n],[r,o,n],[r,o,s],[e,o,s],[0,-1,0],i,[[e,n],[r,n],[r,s],[e,s]]),f.x0||t.quad([e,o,n],[e,o,s],[e,a,s],[e,a,n],[-1,0,0],i,[[n,o],[s,o],[s,a],[n,a]]),f.x1||t.quad([r,o,s],[r,o,n],[r,a,n],[r,a,s],[1,0,0],i,[[s,o],[n,o],[n,a],[s,a]]),f.z0||t.quad([r,o,n],[e,o,n],[e,a,n],[r,a,n],[0,0,-1],i,[[r,o],[e,o],[e,a],[r,a]]),f.z1||t.quad([e,o,s],[r,o,s],[r,a,s],[e,a,s],[0,0,1],i,[[e,o],[r,o],[r,a],[e,a]])},t.tbox=(e,o,n,r,a,s,i,c,f)=>{let l=Math.cos(n),h=Math.sin(n),u=Math.cos(f||0),v=Math.sin(f||0),p=(g,y,b)=>{let w=a+(y-a)*u-b*v*0,_=b+(y-a)*v,M=a+(y-a)*u;return[e+l*g+h*_,M,o-h*g+l*_]},d=g=>{let y=g[1]*u-g[2]*v,b=g[2]*u+g[1]*v;return[l*g[0]+h*b,y,-h*g[0]+l*b]},m=(g,y,b,w,_)=>t.quad(p(...g),p(...y),p(...b),p(...w),d(_),c,[[g[0]+g[2],g[1]],[y[0]+y[2],y[1]],[b[0]+b[2],b[1]],[w[0]+w[2],w[1]]]);m([-r,s,-i],[-r,s,i],[r,s,i],[r,s,-i],[0,1,0]),m([-r,a,-i],[r,a,-i],[r,a,i],[-r,a,i],[0,-1,0]),m([-r,a,-i],[-r,a,i],[-r,s,i],[-r,s,-i],[-1,0,0]),m([r,a,i],[r,a,-i],[r,s,-i],[r,s,i],[1,0,0]),m([r,a,-i],[-r,a,-i],[-r,s,-i],[r,s,-i],[0,0,-1]),m([-r,a,i],[r,a,i],[r,s,i],[-r,s,i],[0,0,1])},t.beam=(e,o,n,r,a)=>{let s=[o[0]-e[0],o[1]-e[1],o[2]-e[2]],i=Math.hypot(...s),c=s.map(p=>p/i),f=a||(Math.abs(c[1])>.9?[1,0,0]:[0,1,0]),l=[c[1]*f[2]-c[2]*f[1],c[2]*f[0]-c[0]*f[2],c[0]*f[1]-c[1]*f[0]],h=Math.hypot(...l);l=l.map(p=>p/h),f=[l[1]*c[2]-l[2]*c[1],l[2]*c[0]-l[0]*c[2],l[0]*c[1]-l[1]*c[0]];let u=(p,d,m)=>[p[0]+l[0]*n*d+f[0]*n*m,p[1]+l[1]*n*d+f[1]*n*m,p[2]+l[2]*n*d+f[2]*n*m],v=[[[1,-1],[1,1],l],[[1,1],[-1,1],f],[[-1,1],[-1,-1],l.map(p=>-p)],[[-1,-1],[1,-1],f.map(p=>-p)]];for(let[p,d,m]of v)t.quad(u(e,...p),u(o,...p),u(o,...d),u(e,...d),m,r,[[0,0],[i,0],[i,1],[0,1]])},t.lathe=(e,o,n,r,a)=>{let s=a||32,i=n.map(([c,f],l)=>{let h=n[Math.max(0,l-1)],u=n[Math.min(n.length-1,l+1)],v=u[0]-h[0],p=u[1]-h[1],d=Math.hypot(v,p)||1,m=p/d,g=-v/d,y=[];for(let b=0;b<=s;b++){let w=b/s*2*Xo;y.push(t.v([e+Math.cos(w)*c,f,o+Math.sin(w)*c],[Math.cos(w)*m,g,Math.sin(w)*m],r,[b/s*c*2*Xo,f]))}return y});for(let c=0;c<i.length-1;c++)for(let f=0;f<s;f++){let l=i[c][f],h=i[c][f+1],u=i[c+1][f+1],v=i[c+1][f];t.idx.push(l,v,u,l,u,h)}},t}var Zi=t=>Math.abs(t)>=ee.hw?null:ee.spring+Math.sqrt(ee.hw*ee.hw-t*t),Ji=[["truss",xl[0],3.1],["truss",xl[1],5.4],["truss",xl[2],7.7],["rafter",Ho.rafter*2,1.7],["rafter",Ho.rafter*5,8.5],["rafter",Ho.rafter*8,13.6],["rafter",Ho.rafter*10,17],["ridge",Ut/2,.9]],fh=(t,e)=>.5*Math.sin(t*1.9+e)+.5*Math.sin(t*.77+e*1.3)>-.25,nM=t=>t<Ut/2?uo+ia*t:uo+ia*(Ut-t);function hh(t,e,o){return t==="truss"?[o,uo-.12,e]:t==="rafter"?[o,nM(o)-.2,e]:[e,sa-.32,o]}var uh=t=>t==="ridge"?[.4,lo-.4]:[.35,Ut-.35],Xr={w:1.72,spring:2.05,r:2.05,frame:.21,zl:lo-.05,zf:lo-.13};Xr.c=Xr.r-Xr.w/2;var Sa=(t,e)=>{let o=Xr.r+(e||0),n=Math.abs(t)+Xr.c;return n>=o?Xr.spring:Xr.spring+Math.sqrt(o*o-n*n)};Xr.top=Sa(0);function rM(t){let e=Ut/2,{w:o,frame:n,zl:r,zf:a}=Xr,s=o/2,i=s+n,c=.02;for(let M=-i;M<i-1e-6;M+=c){let A=M,O=Math.min(i,M+c),R=(A+O)/2,q=Sa(A,n),F=Sa(O,n),K=0,G=0;Math.abs(R)<s&&(K=Sa(A),G=Sa(O)),Math.abs(R)>=s;{let X=Math.abs(R)<s?K:0,dt=Math.abs(R)<s?G:0;t.quad([e+O,dt,a],[e+A,X,a],[e+A,q,a],[e+O,F,a],[0,0,-1],it.DARKWOOD,[[O,dt],[A,X],[A,q],[O,F]])}t.quad([e+A,q,a],[e+A,q,lo],[e+O,F,lo],[e+O,F,a],[0,1,0],it.DARKWOOD,[[A,0],[A,1],[O,1],[O,0]]),Math.abs(R)<s&&t.quad([e+A,K,a],[e+O,G,a],[e+O,G,r],[e+A,K,r],[0,-1,0],it.DARKWOOD,[[A,0],[O,0],[O,1],[A,1]])}for(let M of[-1,1])t.quad([e+M*i,0,a],[e+M*i,0,lo],[e+M*i,Xr.spring,lo],[e+M*i,Xr.spring,a],[M,0,0],it.DARKWOOD,[[0,0],[1,0],[1,1],[0,1]]),t.quad([e+M*s,0,a],[e+M*s,Xr.spring,a],[e+M*s,Xr.spring,r],[e+M*s,0,r],[-M,0,0],it.DARKWOOD,[[0,0],[1,0],[1,1],[0,1]]),t.box(e+M*(s+n/2)-n/2-.04,0,a-.04,e+M*(s+n/2)+n/2+.04,.42,lo,it.DARKWOOD);let f=40;for(let M=0;M<f;M++){let A=-s+2*s*M/f,O=-s+2*s*(M+1)/f;t.beam([e+A,Sa(A)+.03,a-.015],[e+O,Sa(O)+.03,a-.015],.018,it.DARKWOOD)}for(let M of[-1,1])t.beam([e+M*(s+.03),.42,a-.015],[e+M*(s+.03),Xr.spring+.02,a-.015],.018,it.DARKWOOD);for(let M=-s;M<s-1e-6;M+=c){let A=M,O=Math.min(s,M+c),R=Sa(A),q=Sa(O);t.quad([e+O,0,r],[e+A,0,r],[e+A,R,r],[e+O,q,r],[0,0,-1],it.REDDOOR,[[O,0],[A,0],[A,R],[O,q]])}let l=s-.2,h=.3,u=2.12,v=r-.006,p=.05,d=(M,A,O,R)=>t.box(e+M,A,v-.018,e+O,R,v,it.REDDOOR);d(-l,h,l,h+p),d(-l,u-p,l,u),d(-l,h,-l+p,u),d(l-p,h,l,u),t.box(e-l+.14,h+.14,v-.022,e+l-.14,u-.14,v,it.REDDOOR);let m=2.36;d(-s+.08,u+.06,s-.08,u+.12);for(let M of[-1,1]){let O=s-.17;for(let R=.07;R<O-1e-6;R+=c){let q=R,F=Math.min(O,R+c),K=Sa(q,-.18),G=Sa(F,-.18);if(K<=m+.02&&G<=m+.02)continue;let X=Ot=>e+M*Ot,dt=[[X(q),m,v+.004],[X(F),m,v+.004],[X(F),Math.max(m,G),v+.004],[X(q),Math.max(m,K),v+.004]];M>0?t.quad(dt[1],dt[0],dt[3],dt[2],[0,0,-1],it.REDPANEL,[[F,0],[q,0],[q,1],[F,1]]):t.quad(...dt,[0,0,-1],it.REDPANEL,[[q,0],[F,0],[F,1],[q,1]])}}t.beam([e,m-.02,v-.008],[e,Sa(0,-.12),v-.008],.03,it.REDDOOR),t.beam([e-s+.1,m-.01,v-.006],[e+s-.1,m-.01,v-.006],.014,it.REDDOOR);let g=e-s+.15,y=1.06,b=v-.03;t.box(g-.034,y-.2,b-.008,g+.034,y+.17,b+.012,it.BRASS);for(let[M,A]of[[y+.2,.026],[y+.235,.016],[y-.23,.026],[y-.265,.016]])t.lathe(g,b-.002,[[0,M-A],[A,M-A*.4],[A,M+A*.4],[0,M+A]],it.BRASS,12);for(let M=0;M<6;M++){let A=y-.17+M*.065;for(let O of[-1,1])t.beam([g+O*.034,A,b-.01],[g+O*.041,A+.03,b-.01],.006,it.BRASS)}let w=b-.008,_=(M,A,O)=>{for(let R=0;R<O;R++){let q=Xo*R/O,F=Xo*(R+1)/O;for(let K=0;K<16;K++){let G=2*Xo*K/16,X=2*Xo*(K+1)/16,dt=(ze,Ee)=>[g+A*Math.sin(ze)*Math.cos(Ee),y+.03+A*Math.sin(ze)*Math.sin(Ee),M-A*Math.cos(ze)],Ot=(ze,Ee)=>[Math.sin(ze)*Math.cos(Ee),Math.sin(ze)*Math.sin(Ee),-Math.cos(ze)],zt=t.v(dt(q,G),Ot(q,G),it.BRASS),gt=t.v(dt(q,X),Ot(q,X),it.BRASS),ct=t.v(dt(F,X),Ot(F,X),it.BRASS),Wt=t.v(dt(F,G),Ot(F,G),it.BRASS);t.idx.push(zt,gt,ct,zt,ct,Wt)}}};t.beam([g,y+.03,w],[g,y+.03,w-.05],.011,it.BRASS),_(w-.075,.034,10),t.box(g-.008,y-.1,b-.0125,g+.008,y-.06,b-.0085,it.KEYHOLE)}function aM(t){let e=tc(77);for(let[o,n,r]of Ji){let[a,s]=uh(o);for(let i=0;i<2;i++){let c=null;for(let f=a;f<=s;f+=.18){let l=hh(o,n,f),h=Math.sin(f*3.1+i*2+r)*.07,u=Math.cos(f*2.3+i+r)*.05,v=o==="ridge"?[l[0]+h,l[1]+u+.12,l[2]]:[l[0],l[1]+u+.12,l[2]+h];c&&(fh(f,r)||e()<.5)&&t.beam(c,v,.012+.008*e(),it.WOOD),c=v}}}}function sM(t){let e=tc(4242),o=(r,a)=>!(r>Vt.x0-Vt.curb-.1&&r<Vt.x1+Vt.curb+.1&&a>Vt.z0-Vt.curb-.1&&a<Vt.z1+Vt.curb+.1)&&r>.2&&r<Ut-.2&&a>.3&&a<lo-.4,n=(r,a,s,i)=>{let c=.022+e()*.022,f=e()*2*Xo,l=Math.cos(f),h=Math.sin(f),u=(p,d)=>[r+(p*l-d*h)*c,a+.004*p*d,s+(p*h+d*l)*c],v=i?2:0;t.quad(u(-1,-1),u(-1,1),u(1,1),u(1,-1),[0,1,0],it.BRACT,[[v,0],[v,1],[v+1,1],[v+1,0]])};for(let[r,a,s]of Ji){let[i,c]=uh(r);for(let f=i;f<=c;f+=.05){if(!fh(f,s)||e()>.55)continue;let l=hh(r,a,f),h=l[0]+(e()-.5)*1.8,u=l[2]+(e()-.5)*1.8;o(h,u)&&n(h,.004,u,e()<.18)}}for(let r=0;r<260;r++){let a=Math.floor(e()*4),s,i;a<2?(s=a?Vt.x1+Vt.curb+.12+e()*e()*.9:Vt.x0-Vt.curb-.12-e()*e()*.9,i=Vt.z0+e()*(Vt.z1-Vt.z0)):(i=a===2?Vt.z0-Vt.curb-.12-e()*e()*.9:Vt.z1+Vt.curb+.12+e()*e()*.9,s=Vt.x0+e()*(Vt.x1-Vt.x0)),o(s,i)&&n(s,.004,i,e()<.18)}for(let r=0;r<70;r++){let a=Vt.x0+.08+e()*(Vt.x1-Vt.x0-.16),s=Vt.z0+.08+e()*(Vt.z1-Vt.z0-.16);Math.hypot(a-Ir.x,s-Ir.z)<.6||(t.float=[a,s,a*5.1+s*2.9],n(a,.016,s,e()<.2),t.float=null)}}function iM(t,e,o){let n=(r,a,s,i,c)=>{let f=t.pos.length/3,l=Math.cos(s),h=Math.sin(s),u=Math.cos(i),v=Math.sin(i),p=[l,0,-h],d=[h*v,u,l*v],m=[p[1]*d[2]-p[2]*d[1],p[2]*d[0]-p[0]*d[2],p[0]*d[1]-p[1]*d[0]],g=c?.95:o()*.8;for(let[y,b]of[[0,0],[1,0],[1,1],[0,1]]){let w=(y-.5)*a,_=(b-.5)*a;t.pos.push(r[0]+p[0]*w+d[0]*_+Xe[0],r[1]+p[1]*w+d[1]*_+Xe[1],r[2]+p[2]*w+d[2]*_+Xe[2]),t.nrm.push(...m),t.uv.push(y,b),t.shade.push(g),t.flower.push(1)}t.idx.push(f,f+1,f+2,f,f+2,f+3)};for(let[r,a,s]of Ji){let[i,c]=uh(r);for(let f=i;f<=c;f+=.1){if(!fh(f,s))continue;let l=hh(r,a,f),h=()=>(o()-.5)*.7,u=4+Math.floor(o()*4);for(let v=0;v<u;v++){let p=r==="ridge"?[l[0]+h(),l[1]-o()*.25,l[2]+h()*.4]:[l[0]+h()*.4,l[1]-o()*.25,l[2]+h()];n(p,.42+o()*.4,o()*2*Xo,(o()-.5)*2.4,o()<.16)}for(let v=0;v<5;v++){let p=o()*2*Xo;e([l[0]+h()*.6,l[1]-o()*.2,l[2]+h()*.6],[Math.cos(p),-.3-o()*.5,Math.sin(p)],[-Math.sin(p),0,Math.cos(p)],.08+o()*.06,.1)}if(o()<.22){let v=.5+o()*2,p=[l[0],l[1],l[2]],d=[(o()-.5)*.08,(o()-.5)*.08];for(let m=0;m<v;m+=.13){p=[p[0]+d[0],p[1]-.13,p[2]+d[1]];let g=(.3+o()*.22)*(1-.4*m/v);if(n([p[0]+(o()-.5)*.08,p[1],p[2]+(o()-.5)*.08],g,o()*2*Xo,(o()-.5)*.8,o()<.15),o()<.6){let y=o()*2*Xo;e([p[0],p[1],p[2]],[Math.cos(y),-.6,Math.sin(y)],[-Math.sin(y),0,Math.cos(y)],.05+o()*.04,.1)}}}}}}var Cg=(()=>{let t=tc(9001),e=[],o=[];for(let[r,a,s]of Ji){let[i,c]=uh(r);for(let f=i;f<=c;f+=.1)fh(f,s)&&o.push(hh(r,a,f))}let n=o.filter(r=>r[0]>Vt.x0-.6&&r[0]<Vt.x1+.6&&r[2]>Vt.z0&&r[2]<Vt.z1);for(let r=0;r<64;r++){let a=r%2===0&&n.length?n:o,s=a[Math.floor(t()*a.length)];e.push({start:[s[0]+(t()-.5)*.4,s[1]-.25-t()*.3,s[2]+(t()-.5)*.4],period:18+t()*22,offset:t()*60,drift:[(t()-.5)*1.6,(t()-.5)*1.6],speed:.45+t()*.25,seed:t(),white:t()<.18?1:0})}return e})(),W0=[Vt.x0+.06,Vt.z0+.06,Vt.x1-.06,Vt.z1-.06];function cM(t,e){let o=e+t.offset,n=Math.floor(o/t.period),r=o-n*t.period,a=.6+.4*Math.sin(n*1.7+t.seed*5),s=t.start[0]+t.drift[0]*a,i=t.start[2]+t.drift[1]*a,c=s>W0[0]&&s<W0[2]&&i>W0[1]&&i<W0[3],f=c?.017:.006,l=(t.start[1]-f)/t.speed;return{ph:r,Tf:l,lx:s,lz:i,inPool:c}}function lM(){let t=Fg();{let e=Vt.x0-Vt.curb,o=Vt.x1+Vt.curb,n=Vt.z0-Vt.curb,r=Vt.z1+Vt.curb,a=[[0,0,Ut,n],[0,r,Ut,lo],[0,n,e,r],[o,n,Ut,r]];for(let[s,i,c,f]of a)for(let h=s;h<c-1e-6;h+=1)for(let u=i;u<f-1e-6;u+=1){let v=h,p=Math.min(c,h+1),d=u,m=Math.min(f,u+1);t.quad([v,0,d],[v,0,m],[p,0,m],[p,0,d],[0,1,0],it.FLOOR,[[v,d],[v,m],[p,m],[p,d]])}}for(let e of[0,1]){let o=e?Ut:0,n=e?Ut+hr:-hr,r=e?[-1,0,0]:[1,0,0],a=.04;for(let d=0;d<lo-1e-6;d+=a){let m=d,g=Math.min(lo,d+a),y=(m+g)/2,b=null;if(!e)for(let _ of ee.c)Zi(y-_)!==null&&(b=[ee.sill,Math.min(Zi(m-_)||ee.spring,Zi(g-_)||ee.spring)]);let w=b?[[0,b[0]],[b[1],uo]]:[[0,uo]];for(let[_,M]of w)M<=_||(e?t.quad([o,_,g],[o,_,m],[o,M,m],[o,M,g],r,it.PLASTER,[[g,_],[m,_],[m,M],[g,M]]):t.quad([o,_,m],[o,_,g],[o,M,g],[o,M,m],r,it.PLASTER,[[m,_],[g,_],[g,M],[m,M]]))}if(!e)for(let d of ee.c){for(let b of[-1,1]){let w=d+b*ee.hw,_=[0,0,-b],M=[o,ee.sill,w],A=[n,ee.sill,w],O=[n,ee.spring,w],R=[o,ee.spring,w];b>0!=!!e?t.quad(M,A,O,R,_,it.PLASTER,[[0,ee.sill],[hr,ee.sill],[hr,ee.spring],[0,ee.spring]]):t.quad(R,O,A,M,_,it.PLASTER,[[0,ee.spring],[hr,ee.spring],[hr,ee.sill],[0,ee.sill]])}let m=28;for(let b=0;b<m;b++){let w=b/m*Xo,_=(b+1)/m*Xo,M=d+Math.cos(w)*ee.hw,A=d+Math.cos(_)*ee.hw,O=ee.spring+Math.sin(w)*ee.hw,R=ee.spring+Math.sin(_)*ee.hw,q=[0,-Math.sin((w+_)/2),-Math.cos((w+_)/2)];e?t.quad([o,O,M],[n,O,M],[n,R,A],[o,R,A],q,it.PLASTER,[[0,w],[hr,w],[hr,_],[0,_]]):t.quad([o,R,A],[n,R,A],[n,O,M],[o,O,M],q,it.PLASTER,[[0,_],[hr,_],[hr,w],[0,w]])}let g=e?Ut-.08:-hr,y=e?Ut+hr:.08;t.box(g,ee.sill-.09,d-ee.hw-.12,y,ee.sill,d+ee.hw+.12,it.STONE)}let s=e?Ut:0,i=e?-1:1,c=[.6,...ee.c.slice(1).map((d,m)=>(d+ee.c[m])/2),lo-.6];for(let d of c){let m=Math.min(s,s+i*.14),g=Math.max(s,s+i*.14);t.box(m,0,d-.34,g,uo-.7,d+.34,it.STONE,{bottom:!0});let y=Math.min(s,s+i*.24),b=Math.max(s,s+i*.24);t.box(y,0,d-.44,b,.55,d+.44,it.STONE,{bottom:!0}),t.box(y,uo-.95,d-.46,b,uo-.7,d+.46,it.STONE)}let f=Math.min(s,s+i*.05),l=Math.max(s,s+i*.05);t.box(f,0,0,l,.22,lo,it.STONE,{bottom:!0});let h=Math.min(s,s+i*.32),u=Math.max(s,s+i*.32);t.box(h,uo-.55,0,u,uo-.3,lo,it.STONE);let v=Math.min(s,s+i*.42),p=Math.max(s,s+i*.42);t.box(v,uo-.3,0,p,uo-.12,lo,it.STONE)}for(let[e,o]of[[0,1],[lo,-1]]){for(let c=0;c<32;c++){let f=c/32*Ut,l=(c+1)/32*Ut,h=v=>v<Ut/2?uo+ia*v:uo+ia*(Ut-v),u=o>0?[[l,0],[f,0],[f,h(f)],[l,h(l)]]:[[f,0],[l,0],[l,h(l)],[f,h(f)]];t.quad(...u.map(([v,p])=>[v,p,e]),[0,0,o],it.PLASTER,u.map(([v,p])=>[v,p]))}let r=o>0?0:lo-.05,a=o>0?.05:lo;t.box(0,0,r,Ut,.22,a,it.STONE,{bottom:!0});let s=o>0?0:lo-.32,i=o>0?.32:lo;t.box(0,uo-.55,s,Ut,uo-.3,i,it.STONE)}{let o=Ut/2-1.1,n=Ut/2+1.1,r=3.9;t.box(o-.3,0,0,o,r+.3,.12,it.STONE),t.box(n,0,0,n+.3,r+.3,.12,it.STONE),t.box(o-.3,r,0,n+.3,r+.4,.14,it.STONE);for(let[a,s]of[[o,Ut/2-.01],[Ut/2+.01,n]])t.box(a,0,.02,s,r,.02+.06,it.WOOD),t.box(a+.12,.3,.02+.06,s-.12,1.7,.02+.09,it.WOOD),t.box(a+.12,2,.02+.06,s-.12,r-.2,.02+.09,it.WOOD)}rM(t);{let{x0:e,x1:o,z0:n,z1:r,curb:a,top:s}=Vt,i=.06,c=.08;t.box(e-a,0,n-a,e,s-c,r+a,it.WMARBLE,{bottom:!0}),t.box(o,0,n-a,o+a,s-c,r+a,it.WMARBLE,{bottom:!0}),t.box(e,0,n-a,o,s-c,n,it.WMARBLE,{bottom:!0}),t.box(e,0,r,o,s-c,r+a,it.WMARBLE,{bottom:!0}),t.box(e-a-i,s-c,n-a-i,e+i*.5,s,r+a+i,it.WMARBLE),t.box(o-i*.5,s-c,n-a-i,o+a+i,s,r+a+i,it.WMARBLE),t.box(e+i*.5,s-c,n-a-i,o-i*.5,s,n+i*.5,it.WMARBLE),t.box(e+i*.5,s-c,r-i*.5,o-i*.5,s,r+a+i,it.WMARBLE);let f=.5;for(let v=e;v<o-1e-6;v+=f)for(let p=n;p<r-1e-6;p+=f){let d=v,m=Math.min(o,v+f),g=p,y=Math.min(r,p+f);t.quad([d,0,g],[d,0,y],[m,0,y],[m,0,g],[0,1,0],it.WATER,[[d,g],[d,y],[m,y],[m,g]])}let{x:l,z:h,plinth:u}=Ir;t.box(l-.42,0,h-.42,l+.42,u-.12,h+.42,it.WMARBLE,{bottom:!0}),t.box(l-.5,u-.12,h-.5,l+.5,u,h+.5,it.WMARBLE),t.box(l-.48,0,h-.48,l+.48,.12,h+.48,it.WMARBLE,{bottom:!0})}return t}function fM(t){for(let o of[0]){let n=o?Ut+hr*.5:-hr*.5,r=.05,a=Pr.w*.5;for(let s of ee.c){for(let i of Pr.cols){let c=Zi(i)-.01;t.box(n-r,ee.sill,s+i-a,n+r,c,s+i+a,it.STEEL)}for(let i=ee.sill+Pr.rowH;i<ee.spring+.01;i+=Pr.rowH)t.box(n-r,i-a,s-ee.hw,n+r,i+a,s+ee.hw,it.STEEL);for(let[i,c]of[[ee.hw-.03,.06],[Pr.ring,a]])for(let l=0;l<24;l++){let h=l/24*Xo,u=(l+1)/24*Xo;t.beam([n,ee.spring+Math.sin(h)*i,s+Math.cos(h)*i],[n,ee.spring+Math.sin(u)*i,s+Math.cos(u)*i],c,it.STEEL,[1,0,0])}for(let i of[-1,1])t.box(n-r,ee.sill,s+i*(ee.hw-.03)-.03,n+r,ee.spring,s+i*(ee.hw-.03)+.03,it.STEEL);t.box(n-r,ee.sill,s-ee.hw,n+r,ee.sill+.06,s+ee.hw,it.STEEL)}}let e=o=>o<Ut/2?uo+ia*o:uo+ia*(Ut-o);for(let o=0;o<=12;o++){let n=o*Ho.rafter;for(let[r,a]of[[-.3,Ut/2],[Ut/2,Ut+.3]])t.beam([r,e(Math.max(0,Math.min(Ut,r)))-.1,n],[a,e(a)-.1,n],.06,it.STEEL)}for(let o=Ho.purlin;o<Ut/2-.2;o+=Ho.purlin)for(let n of[o,Ut-o])t.beam([n,e(n)-.06,-.2],[n,e(n)-.06,lo+.2],.035,it.STEEL);t.beam([Ut/2,sa-.14,-.2],[Ut/2,sa-.14,lo+.2],.12,it.STEEL);for(let o of[.05,Ut-.05])t.beam([o,uo-.05,0],[o,uo-.05,lo],.1,it.STEEL);for(let o of xl){t.box(-.05,uo-.13,o-.08,Ut+.05,uo+.13,o+.08,it.STEEL),t.beam([Ut/2,uo,o],[Ut/2,sa-.2,o],.07,it.STEEL);for(let n of[-1,1])t.beam([Ut/2+n*Ut/4,uo,o],[Ut/2,sa-.4,o],.055,it.STEEL),t.beam([Ut/2+n*Ut/4,uo,o],[Ut/2+n*Ut/4,e(Ut/2+n*Ut/4)-.2,o],.045,it.STEEL),t.beam([Ut/2+n*(Ut/2-.1),uo,o],[Ut/2+n*Ut/4,e(Ut/2+n*Ut/4)-.2,o],.045,it.STEEL);for(let n of[-1,1])t.box(Ut/2+n*Ut/4-.12,uo-.18,o-.1,Ut/2+n*Ut/4+.12,uo+.18,o+.1,it.STEEL)}}function hM(t){let e=tc(311),o=[],n=[[Vt.x0+.9,6.6,.9,10],[Vt.x1-.8,8.4,.85,9],[Vt.x0+.8,10.6,.8,8],[Vt.x1-.9,12.4,.9,10],[Vt.x0+1,13.9,.65,6],[Ut/2+.2,9.6,.5,4],[Vt.x1-.7,15.9,.55,5]];for(let[a,s,i,c]of n)for(let f=0;f<c;f++)for(let l=0;l<40;l++){let h=e()*2*Xo,u=i*Math.sqrt(e()),v=a+Math.cos(h)*u,p=s+Math.sin(h)*u,d=.15+e()*.17;if(!(v-d<Vt.x0+.04||v+d>Vt.x1-.04||p-d<Vt.z0+.04||p+d>Vt.z1-.04)&&!(Math.hypot(v-Ir.x,p-Ir.z)<.62+d)&&!o.some(m=>Math.hypot(m[0]-v,m[1]-p)<(m[2]+d)*.93)){o.push([v,p,d,e()*2*Xo,e()]);break}}for(let[a,s,i,c,f]of o){t.float=[a,s,f*7.3+i*13];let l=30,h=.34+f*.1,u=t.v([a,.012,s],[0,1,0],it.PAD,[.5,f]),v=null;for(let p=0;p<=l;p++){let d=c+h/2+(2*Xo-h)*p/l,m=i*(1+.03*Math.sin(d*7+f*10)),g=t.v([a+Math.cos(d)*m,.012+.008*Math.sin(d*3+f*9),s+Math.sin(d)*m],[0,1,0],it.PAD,[1,f]);v!==null&&t.idx.push(u,v,g),v=g}v=null;for(let p=0;p<=l;p++){let d=c+h/2+(2*Xo-h)*p/l,m=i*(1+.03*Math.sin(d*7+f*10)),g=[a+Math.cos(d)*m,.012,s+Math.sin(d)*m],y=[a+Math.cos(d)*(m+.012),.03,s+Math.sin(d)*(m+.012)],b=t.v(g,[Math.cos(d),.4,Math.sin(d)],it.PAD,[1.2,f]),w=t.v(y,[Math.cos(d),.4,Math.sin(d)],it.PAD,[1.2,f]);v&&t.idx.push(v[0],b,w,v[0],w,v[1]),v=[b,w]}}t.float=null;let r=[[Vt.x0+.75,6.9,1],[Vt.x1-.65,8.1,.85],[Vt.x1-.95,12.6,1.1],[Vt.x0+.95,10.3,.8],[Vt.x1-.55,15.6,.9],[Vt.x0+1.15,13.7,.75]];for(let[a,s,i]of r){t.float=[a,s,a*3.7+s*1.3];let c=.17;[[12,1,70],[10,.86,48],[8,.66,26]].forEach(([l,h,u],v)=>{for(let p=0;p<l;p++){let d=2*Xo*p/l+v*.33,m=(90-(90-u)*i)*Xo/180,g=6,y=4,b=[];for(let w=0;w<=g;w++){let _=w/g,M=Math.sin(Xo*Math.pow(_,.8))*.42*h*c,A=[];for(let O=0;O<=y;O++){let R=O/y*2-1,q=R*M,F=Math.abs(R)*Math.abs(R)*.12*h*c,K=_*h*c,G=K*Math.cos(m),X=K*Math.sin(m)+F,dt=a+Math.cos(d)*G-Math.sin(d)*q,Ot=s+Math.sin(d)*G+Math.cos(d)*q;A.push(t.v([dt,.03+X,Ot],[-Math.cos(d)*Math.sin(m)*.6,.8,-Math.sin(d)*Math.sin(m)*.6],it.PETAL,[_,(R+1)/2]))}b.push(A)}for(let w=0;w<g;w++)for(let _=0;_<y;_++){let M=b[w][_],A=b[w][_+1],O=b[w+1][_+1],R=b[w+1][_];t.idx.push(M,A,O,M,O,R,M,O,A,M,R,O)}}}),t.lathe(a,s,[[0,.03+.05*c*4],[.025,.03+.045*c*4],[.032,.035],[0,.03]],it.STAMEN,12)}t.float=null}function uM(t){let e=tc(907);{t.box(1.25-.48,.86-.06,11.1-1.35,1.25+.48,.86,11.1+1.35,it.WOOD);for(let i of[-1,1])for(let c of[-1,1])t.box(1.25+i*(.48-.08)-.04,0,11.1+c*(1.35-.1)-.04,1.25+i*(.48-.08)+.04,.86-.06,11.1+c*(1.35-.1)+.04,it.WOOD);t.box(1.25-.48+.06,.16,11.1-1.35+.1,1.25+.48-.06,.19,11.1+1.35-.1,it.WOOD);for(let i=0;i<11;i++){let c=1.25+(e()-.5)*.6,f=11.1+(e()-.5)*2.2,l=.035+e()*.04,h=.09+e()*.14;if(t.lathe(c,f,[[0,.86],[l,.86],[l*1.02,.86+h*.9],[l*.9,.86+h],[0,.86+h]],i%3?it.JAR:it.POT,14),i%3===0)for(let u=0;u<7;u++){let v=e()*2*Xo,p=.28+e()*.12,d=.12+e()*.2;t.beam([c,.86+.03,f],[c+Math.cos(v)*d*p,.86+.03+p,f+Math.sin(v)*d*p],.0055,it.BRUSH)}}t.box(1.25-.3,.86,11.1+.7,1.25+.15,.86+.02,11.1+1.15,it.WOOD)}for(let o=0;o<5;o++){let n=.55+e()*.6,r=.75+e()*.8,a=19.3+o*.16,s=.25+o*.07,i=.17,c=[s+r*Math.sin(i)*0,r,a];t.quad([s+.18,0,a-n/2],[s+.18,0,a+n/2],[s+.18-r*Math.sin(i),r*Math.cos(i),a+n/2],[s+.18-r*Math.sin(i),r*Math.cos(i),a-n/2],[Math.cos(i),Math.sin(i),0],o%2?it.WOOD:it.GESSO,[[0,0],[1,0],[1,1],[0,1]])}for(let o of Dg)t.beam([o[0],uo,o[2]],[o[0],o[1]+.05,o[2]],.008,it.STEEL),t.lathe(o[0],o[2],[[.04,o[1]+.06],[.06,o[1]+.02],[.16,o[1]-.09],[.29,o[1]-.22],[.33,o[1]-.28],[.32,o[1]-.285]],it.SHADE,32),t.lathe(o[0],o[2],[[0,o[1]-.25],[.06,o[1]-.2],[0,o[1]-.12]],it.BULB,12)}var Dg=[[4.2,4.6,7.33],[11.8,4.6,7.33],[4.2,4.6,16.5],[11.8,4.6,16.5]],BA=[[Vt.x0-1,Vt.z0-1,1],[Vt.x1+1,Vt.z0-1,.95],[Vt.x0-1,Vt.z1+1,1.15],[Vt.x1+1,Vt.z1+1,1.1],[.9,1.3,1.25],[Ut-.9,lo-1.2,1.3]],Og=[[0,0,.16,.5],[.16,0,.34,.4],[.35,0,.5,.36],[.5,0,.66,.38],[.68,0,.84,.42],[0,.6,.19,1],[.2,.57,.36,1],[.41,.6,.58,1]];function dM(){let t={pos:[],nrm:[],uv:[],shade:[],flower:[],idx:[]},e=tc(1213),o=(n,r,a,s,i)=>{let c=Og[Math.floor(e()*Og.length)],f=(c[2]-c[0])/(c[3]-c[1]),l=s*f*1,h=5,u=t.pos.length/3,v=.6+e()*.4;for(let p=0;p<=h;p++){let d=p/h,m=i*d*d*s,g=[n[0]+r[0]*d*s,n[1]+r[1]*d*s-m,n[2]+r[2]*d*s];for(let y of[-.5,.5]){t.pos.push(g[0]+a[0]*y*l+Xe[0],g[1]+a[1]*y*l-Math.abs(y)*.08*l+Xe[1],g[2]+a[2]*y*l+Xe[2]);let b=[r[1]*a[2]-r[2]*a[1],r[2]*a[0]-r[0]*a[2],r[0]*a[1]-r[1]*a[0]],w=Math.hypot(...b)||1;t.nrm.push(b[0]/w,Math.abs(b[1]/w)+.2,b[2]/w),t.uv.push(y<0?c[0]:c[2],c[3]-(c[3]-c[1])*d),t.shade.push(v),t.flower.push(0)}}for(let p=0;p<h;p++){let d=u+p*2;t.idx.push(d,d+1,d+3,d,d+3,d+2)}};iM(t,o,e);for(let[n,r,a]of[[Vt.x0-.3,Vt.z0-.3,-1],[Vt.x1+.3,Vt.z1+.3,1],[Vt.x0-.3,Vt.z1+.2,-1]])for(let s=0;s<26;s++){let i=e()*2*Xo,c=n+(e()-.3)*.5*-a,f=r+(e()-.5)*.8,l=Vt.top+.01-Math.max(0,Math.abs(c-n)-.1)*.6*e();o([c,Math.max(.05,l),f],[Math.cos(i),-.15,Math.sin(i)],[-Math.sin(i),0,Math.cos(i)],.08+e()*.05,.12)}return t}function pM(){let t=Fg();for(let o of[0]){let n=o?Ut+hr*.5+.01:-hr*.5-.01,r=o?[-1,0,0]:[1,0,0];for(let a of ee.c)for(let i=a-ee.hw;i<a+ee.hw-1e-6;i+=.05){let c=i,f=Math.min(a+ee.hw,i+.05),l=Zi(c-a+1e-4)||ee.spring,h=Zi(f-a-1e-4)||ee.spring;o?t.quad([n,ee.sill,f],[n,ee.sill,c],[n,l,c],[n,h,f],r,0,[[f,ee.sill],[c,ee.sill],[c,l],[f,h]]):t.quad([n,ee.sill,c],[n,ee.sill,f],[n,h,f],[n,l,c],r,0,[[c,ee.sill],[f,ee.sill],[f,h],[c,l]])}}let e=Math.hypot(ia,1);return t.quad([0,uo+.002,lo],[0,uo+.002,0],[Ut/2,sa+.002,0],[Ut/2,sa+.002,lo],[ia/e,-1/e,0].map(o=>-o).map((o,n)=>n===1?-Math.abs(o):o),1,[[0,lo],[0,0],[Ut/2,0],[Ut/2,lo]]),t.quad([Ut,uo+.002,0],[Ut,uo+.002,lo],[Ut/2,sa+.002,lo],[Ut/2,sa+.002,0],[-ia/e,-1/e,0],1,[[Ut,0],[Ut,lo],[Ut/2,lo],[Ut/2,0]]),t}var vM=`
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
`,mM=Dg.map(t=>ju([t[0],t[1]-.22,t[2]])),gl=`
	${vM}
	${$g()}

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
		vec3 p = pw - vec3(${Et(Xe[0])}, ${Et(Xe[1])}, ${Et(Xe[2])});
		float vis = studioSun(pw + N * 0.03);
		sunVis = vis;
		vec3 sunC = mix(vec3(1.0, 0.88, 0.70) * 3.9, vec3(0.50, 0.64, 1.0) * 1.35, night);
		float lam = max(dot(N, STUDIO_SUN), 0.0);
		vec3 col = sunC * vis * lam;
		vec3 Hh = normalize(STUDIO_SUN + V);
		spec = sunC * vis * pow(max(dot(N, Hh), 0.0), mix(16.0, 400.0, gloss)) * mix(0.04, 1.0, gloss) * (lam > 0.0 ? 1.0 : 0.0);

		// skylight: the roof is glass, the walls are full of windows
		float upF = 0.5 + 0.5 * N.y;
		float hgt = clamp(p.y / ${Et(uo)}, 0.0, 1.0);
		// corners and the foot of the walls get less of the sky
		float dw = min(min(p.x, ${Et(Ut)} - p.x), min(p.z, ${Et(lo)} - p.z));
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
			${mM.map(t=>`
			{
				vec3 d = vec3(${Et(t[0])}, ${Et(t[1])}, ${Et(t[2])}) - pw;
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
`;function gM(t){let e=new DataView(t),o=e.getUint32(4,!0),n=e.getUint32(8,!0),r=[],a=[];for(let l=0;l<3;l++)r.push(e.getFloat32(12+l*4,!0)),a.push(e.getFloat32(24+l*4,!0));let s=36,i=new Uint16Array(t,s,o*3);s+=o*6;let c=new Uint16Array(t,s,n);s+=n*2;let f=new Int8Array(t,s,o*3);return{nV:o,nI:n,mn:r,sz:a,pos:i,idx:c,nrm:f}}function xM(t,e){let o=t.texture({data:[[[0,0,0,0]]],min:"linear",mag:"linear"}),n={tex:o,ready:!1};return fetch(e).then(r=>{if(!r.ok)throw new Error("Could not load "+e);return r.blob()}).then(r=>createImageBitmap(r,{premultiplyAlpha:"none"}).catch(()=>new Promise((a,s)=>{let i=new Image;i.onload=()=>a(i),i.onerror=s,i.src=URL.createObjectURL(r)}))).then(r=>{o({data:r,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear"}),n.ready=!0}).catch(r=>console.error(r)),n}var yl=8,yM=.3,Wu=`
	uniform float stime;
	uniform vec4 ripples[${yl}];
	// the height of the water at world xz (metres, tiny)
	float poolHeight(vec2 xz) {
		float h = 0.0025 * sin(xz.x * 2.1 + stime * 0.55) * sin(xz.y * 1.7 - stime * 0.43)
		        + 0.0015 * sin(xz.x * 3.7 - xz.y * 2.9 + stime * 0.8);
		for (int i = 0; i < ${yl}; i++) {
			vec4 r = ripples[i];
			if (r.w <= 0.0) continue;
			float d = length(xz - r.xy);
			float x = d - r.z * ${Et(yM)};
			// a packet of a few rings, fading as it spreads
			float env = exp(-x * x * 30.0) * exp(-r.z * 0.38) * r.w / (1.0 + d * 3.0);
			h += 0.009 * sin(x * 42.0) * env;
		}
		return h;
	}
`,Pg=`
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
	${Wu}
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
	}`,bM=`
	precision highp float;
	uniform float night, time, yScale, mirrorOn;
	${Wu}
	varying vec3 v_pos, v_nrm, v_eye;
	varying float v_kind;
	varying vec2 v_uv;
	${gl}

	bool is(float k) { return abs(v_kind - k) < 0.5; }

	void main() {
		vec3 pw = v_pos;
		vec3 p = pw - vec3(${Et(Xe[0])}, ${Et(Xe[1])}, ${Et(Xe[2])});
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
			base *= mix(1.0, 0.9, smoothstep(${Et(uo-2)}, ${Et(uo)}, p.y));
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
			vec2 tq = mat2(0.70711, 0.70711, -0.70711, 0.70711) * (p.xz - vec2(${Et(Ut/2)}, 0.0));
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
			aoK = mix(0.62, 1.0, smoothstep(0.0, 0.9, min(min(p.x, ${Et(Ut)} - p.x), min(p.z, ${Et(lo)} - p.z))));
			// the curb throws a soft shadow round the pool
			vec2 dq = max(vec2(${Et(Vt.x0-Vt.curb)} - p.x, p.x - ${Et(Vt.x1+Vt.curb)}), vec2(${Et(Vt.z0-Vt.curb)} - p.z, p.z - ${Et(Vt.z1+Vt.curb)}));
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
			base *= mix(0.84, 1.0, smoothstep(${Et(Ir.plinth)}, ${Et(Ir.plinth+.5)}, p.y));
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
			base = mix(vec3(0.42, 0.10, 0.06), vec3(0.75, 0.62, 0.38), step(${Et(.86+.24)}, p.y));
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
			float side = clamp(dot(grad, normalize(V.xz + vec2(1e-4))) * 14.0, -1.0, 1.0);
			vec3 hi = studioSky(Rw) * mix(0.55, 0.30, night) + light * 0.04;
			vec3 lo = vec3(0.008, 0.011, 0.010);
			vec3 ringC = mix(lo, hi, 0.5 + 0.5 * side);
			col = mix(col, ringC, stir * 0.85);
			col = studioAir(col, pw, v_eye);
			alpha = 1.0 - refl * mirrorOn * (1.0 - stir * 0.85);
			alpha = max(alpha, glint);
			if (mirrorOn < 0.5) { col = mix(col, studioSky(Rw) * 0.35, F); alpha = 1.0; }
		}

		col = max(col, vec3(0.0));
		gl_FragColor = vec4(sqrt(col), alpha);
	}`;V0.exports=function(t){let e=lM();fM(e),hM(e),uM(e),aM(e),sM(e);let o={enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"zero"}},n=performance.now(),r={t:0,ripples:[]};for(let w=0;w<yl;w++)r.ripples.push([0,0,0,0]);let a=()=>{r.t=(performance.now()-n)/1e3;let w=[];for(let R of Cg){let q=cM(R,r.t),F=q.ph-q.Tf;q.inPool&&F>=0&&F<9&&w.push([q.lx+Xe[0],q.lz+Xe[2],F,1])}let _=Math.floor(r.t/11),M=r.t-_*11,A=Math.sin(_*12.9898)*43758.5453,O=Math.sin(_*78.233)*12345.678;w.push([Vt.x0+.3+(A-Math.floor(A))*(Vt.x1-Vt.x0-.6)+Xe[0],Vt.z0+.4+(O-Math.floor(O))*(Vt.z1-Vt.z0-.8)+Xe[2],M,.5]),w.sort((R,q)=>R[2]-q[2]);for(let R=0;R<yl;R++)r.ripples[R]=w[R]||[0,0,0,0]},s={stime:()=>r.t};typeof location!="undefined"&&/tourdebug/.test(location.search)&&(window.__studioClock=r);for(let w=0;w<yl;w++)s["ripples["+w+"]"]=()=>r.ripples[w];let i=(w,_)=>t({vert:Pg,frag:bM,attributes:{position:w.pos,normal:w.nrm,kind:w.kind,uv:w.uv,anchor:w.anchor&&w.anchor.length?w.anchor:new Float32Array(w.pos.length/3*4)},elements:new Uint32Array(w.idx),count:_||w.idx.length,uniforms:s,cull:{enable:!1},blend:o}),c=i(e),f=null;fetch(Ir.file).then(w=>{if(!w.ok)throw new Error("Could not load "+Ir.file);return w.arrayBuffer()}).then(w=>{let _=gM(w),M={pos:[],nrm:[],kind:[],uv:[],anchor:null,idx:[]},A=Ir.height,O=Math.cos(Ir.yaw),R=Math.sin(Ir.yaw);for(let q=0;q<_.nV;q++){let F=(_.mn[0]+_.pos[q*3]/65535*_.sz[0])*A,K=(_.mn[1]+_.pos[q*3+1]/65535*_.sz[1])*A,G=(_.mn[2]+_.pos[q*3+2]/65535*_.sz[2])*A;M.pos.push(Ir.x+O*F+R*G+Xe[0],Ir.plinth+K+Xe[1],Ir.z-R*F+O*G+Xe[2]);let X=_.nrm[q*3]/127,dt=_.nrm[q*3+1]/127,Ot=_.nrm[q*3+2]/127;M.nrm.push(O*X+R*Ot,dt,-R*X+O*Ot),M.kind.push(it.MARBLE),M.uv.push(0,0)}for(let q=0;q<_.nI;q++)M.idx.push(_.idx[q]);f=i(M)}).catch(w=>console.error(w));let l=xM(t,"res/tree/leaves.webp"),h=dM(),u=t({vert:`
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
		${gl}
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
		}`,attributes:{position:h.pos,normal:h.nrm,uv:h.uv,shade:h.shade,flower:h.flower},elements:new Uint32Array(h.idx),uniforms:{tex:l.tex},cull:{enable:!1}}),v=(()=>{let w={corner:[],start:[],par:[],misc:[],idx:[]};return Cg.forEach((_,M)=>{for(let A of[[-1,-1],[1,-1],[1,1],[-1,1]])w.corner.push(A[0],A[1]),w.start.push(_.start[0]+Xe[0],_.start[1],_.start[2]+Xe[2]),w.par.push(_.period,_.offset,_.drift[0],_.drift[1]),w.misc.push(_.speed,_.seed,_.white);w.idx.push(M*4,M*4+1,M*4+2,M*4,M*4+2,M*4+3)}),w})(),p=t({vert:`
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
		${Wu}
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
			vec2 lq = land - vec2(${Et(Xe[0])}, ${Et(Xe[2])});
			bool inPool = lq.x > ${Et(W0[0])} && lq.x < ${Et(W0[2])} && lq.y > ${Et(W0[1])} && lq.y < ${Et(W0[3])};
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
		${gl}
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
		}`,attributes:{corner:v.corner,start:v.start,par:v.par,misc:v.misc},elements:new Uint32Array(v.idx),uniforms:s,cull:{enable:!1}}),d=pM(),m=t({vert:Pg,frag:`
		precision highp float;
		uniform float night, time;
		varying vec3 v_pos, v_nrm, v_eye;
		varying float v_kind;
		varying vec2 v_uv;
		${gl}
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			vec3 N = normalize(v_nrm);
			if (dot(N, V) < 0.0) N = -N;
			float F = 0.04 + 0.96 * pow(1.0 - max(dot(N, V), 0.0), 5.0);
			vec3 p = v_pos - vec3(${Et(Xe[0])}, ${Et(Xe[1])}, ${Et(Xe[2])});
			float dust = fbm3(p * vec3(1.5, 3.0, 1.5)) * (v_kind > 0.5 ? 1.0 : 0.6);
			// streaks where old rain has run down the roof
			float streak = v_kind > 0.5 ? smoothstep(0.55, 0.9, vnoise3(vec3(p.z * 9.0, p.x * 0.6, 0.0))) * 0.5 : 0.0;
			vec3 c = mix(vec3(0.85, 0.80, 0.72), vec3(0.12, 0.13, 0.17), night) * (dust * 0.5 + streak);
			float a = clamp(0.05 + dust * 0.16 + streak * 0.2 + F * 0.4, 0.0, 0.6);
			vec3 col = mix(c, studioSky(reflect(-V, N)), F / max(a, 0.01) * 0.4);
			// the roof's leaded pattern: dark cames, frosted rondels lit
			// from behind by the sky
			if (v_kind > 0.5) {
				float ux = p.x < ${Et(Ut/2)} ? p.x : ${Et(Ut)} - p.x;
				vec2 pq = vec2(ux - ${Et(Ho.purlin)} * floor(ux / ${Et(Ho.purlin)}) - ${Et(Ho.purlin/2)}, p.z - ${Et(Ho.rafter)} * floor(p.z / ${Et(Ho.rafter)}) - ${Et(Ho.rafter/2)});
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
		}`,attributes:{position:d.pos,normal:d.nrm,kind:d.kind,uv:d.uv,anchor:d.anchor},uniforms:s,elements:new Uint32Array(d.idx),cull:{enable:!1},depth:{mask:!1},blend:o}),g=(()=>{let w={pos:[],idx:[]},_=300,M=24,A=12;for(let O=0;O<=A;O++){let R=-.25*Xo+O/A*.75*Xo;for(let q=0;q<=M;q++){let F=q/M*2*Xo;w.pos.push(Xe[0]+Ut/2+_*Math.cos(R)*Math.cos(F),_*Math.sin(R),Xe[2]+lo/2+_*Math.cos(R)*Math.sin(F))}}for(let O=0;O<A;O++)for(let R=0;R<M;R++){let q=O*(M+1)+R,F=q+1,K=q+M+2,G=q+M+1;w.idx.push(q,F,K,q,K,G)}return w})(),y=t({vert:`
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
		${gl}
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
		void main() {`),attributes:{position:g.pos},elements:new Uint32Array(g.idx),cull:{enable:!1}});function b(w){w&&w.reflected||a(),y(),c(),f&&f(),u(),p(),w&&w.reflected||m()}return b};var Ig=[{from:[12.6,1.65,.9],to:[11.4,1.75,2.6],at:[6.2,2.6,15.5],fov:60},{from:[8,1.45,1.4],to:[8,1.25,4.4],at:[8,1.7,16],fov:50},{from:[7.2,1.6,3.8],to:[8.3,1.55,5.2],at:[13,1.4,10.4],fov:52},{from:[6.2,1.45,10.4],to:[7,1.75,11.6],at:[8,2.3,15.2],fov:44},{from:[2.6,1.5,2.6],to:[3.6,1.6,4.4],at:[7,6.8,12],fov:62}],ml=11;function wM(t){let e=Ig.length,o=Math.floor(t/ml)%e,n=t%ml/ml,r=n*n*(3-2*n),a=Ig[o],s=a.from.map((c,f)=>c+(a.to[f]-c)*r),i=Math.max(0,1-Math.min(n*ml,(1-n)*ml)/.7);return{eye:ju(s),target:ju(a.at),fov:a.fov,roll:0,fade:i}}V0.exports.previewCam=wM;V0.exports.sunGLSL=$g;V0.exports.O=Xe;V0.exports.SIZE={W:Ut,L:lo,H:uo,RIDGE:sa};V0.exports.BOX=[Xe[0]-.8,0,Xe[2]-.8,Xe[0]+Ut+.8,sa+.5,Xe[2]+lo+.8];V0.exports.AIR_BOX=[Xe[0],0,Xe[2],Xe[0]+Ut,sa,Xe[2]+lo]});var ph=mt((jA,jg)=>{"use strict";var{A:ur}=_a(),{C:Cn}=vr(),{DOOR:ec}=F0(),or=U0(),oc=bl(),Hg=Cn.hallEnd+.35,Bg={arch:[13.6,0,ur.zc-ur.arch.r-.3,14.4,ur.arch.spring+ur.arch.r+.3,ur.zc+ur.arch.r+.3],mouth:[13.3,0,Cn.z0-.3,14.3,8.2,Cn.z1+.3],stair:[-.5,0,or.SURR.z0-.2,.5,or.SURR.top+.3,or.SURR.z1+.2],door:[ec.x0-.4,0,-.5,ec.x1+.4,ec.top+.4,.5],windows:[15.6,.4,Cn.z1-.2,36.9,6.4,Cn.z1+.9],farDoor:[Cn.x1-.2,0,Cn.zc-ec.r-.4,Cn.x1+.9,ec.top+.4,Cn.zc+ec.r+.4]},_0={court:[ur.x0-.4,0,ur.z0-.3,ur.x1+.3,ur.domeTop+.5,ur.z1+.3],stair:[or.C.x-or.R-2.6,0,or.C.z-or.R-1.5,.5,15.6,or.C.z+or.R+1.5],street:[-60,-1,-140,74,60,.6],garden:[10,-1,Cn.z1,46,60,Cn.z1+110],florence:[Cn.x1,-1,Cn.zc-30,Cn.x1+80,60,Cn.zc+30],studio:oc.BOX},_M=[[0,0,0,14,0,Hg],[13.6,0,Cn.z0,Cn.x1+.4,0,Cn.z1],[ur.x0-.4,0,ur.z0,ur.x1,0,ur.z1],[or.C.x-or.R-2.6,0,or.C.z-or.R,.4,0,or.C.z+or.R],[oc.BOX[0],0,oc.BOX[2],oc.BOX[3],0,oc.BOX[5]]],MM={hall:{court:["arch"],stair:["stair"],street:["door"],garden:["mouth","windows"],florence:["mouth","farDoor"]},wing:{court:["mouth","arch"],stair:["mouth","stair"],street:["mouth","door"],garden:["windows"],florence:["farDoor"]},court:{stair:["arch","stair"],street:["arch","door"],garden:["arch","mouth","windows"],florence:["arch","mouth","farDoor"]},stair:{court:["stair","arch"],street:["stair","door"],garden:["stair","mouth","windows"],florence:["stair","mouth","farDoor"]}},Ml=new Float64Array(24),Ga=[7,2,2],Ug=0,M0="out",dh=!0;try{/[?&]nocull\b/.test(location.search)&&(dh=!1)}catch(t){}var wl={court:!0,stair:!0,street:!0,garden:!0,florence:!0,studio:!1},_l={court:!0,stair:!0,street:!0,garden:!0,florence:!0,studio:!1},qg=!0;function SM(t){let e=i=>[t[i],t[4+i],t[8+i],t[12+i]],o=e(0),n=e(1),r=e(2),a=e(3),s=(i,c,f,l)=>{for(let h=0;h<4;h++)Ml[i*4+h]=c[h]+f*l[h]};s(0,a,1,o),s(1,a,-1,o),s(2,a,1,n),s(3,a,-1,n),s(4,a,1,r),s(5,a,-1,r)}function X0(t,e){if(!dh)return!0;let o=e?-t[4]:t[1],n=e?-t[1]:t[4];for(let r=0;r<6;r++){let a=Ml[r*4],s=Ml[r*4+1],i=Ml[r*4+2],c=Ml[r*4+3],f=a>0?t[3]:t[0],l=s>0?n:o,h=i>0?t[5]:t[2];if(a*f+s*l+i*h+c<0)return!1}return!0}var Vu=(t,e)=>Ga[0]>t[0]-e&&Ga[0]<t[3]+e&&Ga[2]>t[2]-e&&Ga[2]<t[5]+e;function EM(t){if(Vu(t,.6))return null;let e=1/0,o=-1/0;for(let n=0;n<4;n++){let r=(n&1?t[3]:t[0])-Ga[0],a=(n&2?t[5]:t[2])-Ga[2],s=Math.atan2(r,a)-Ug;s-=Math.round(s/(2*Math.PI))*2*Math.PI,e=Math.min(e,s),o=Math.max(o,s)}return o-e>Math.PI?null:[e,o]}function Gg(t,e,o){let n=-Math.PI,r=Math.PI,a=s=>{let i=EM(s);return i?(n=Math.max(n,i[0]-.03),r=Math.min(r,i[1]+.03),n<=r):!0};for(let s of t){let i=Bg[s];if(!Vu(i,.6)&&(!X0(i,o)||!a(i)))return!1}return X0(e,o)&&a(e)}function kM(){let t=Ga[0],e=Ga[2],o=oc.BOX;return t>o[0]&&t<o[3]&&e>o[2]&&e<o[5]?"studio":t<0&&e>or.C.z-or.R-1.5&&t>or.C.x-or.R-2.6?"stair":t>14.1&&e>ur.z0-.3&&e<ur.z1+.3&&t<ur.x1+.3?"court":t>13.9&&e>Cn.z0-.4&&e<Cn.z1+.1&&t<Cn.x1+.3?"wing":t>=0&&t<=14.1&&e>.3&&e<Hg?"hall":"out"}var AM={PORTAL:Bg,ROOM:_0,update(t,e,o){let n=new Array(16);for(let r=0;r<4;r++)for(let a=0;a<4;a++){let s=0;for(let i=0;i<4;i++)s+=e[i*4+a]*t[r*4+i];n[r*4+a]=s}SM(n),Ga[0]=o[0],Ga[1]=o[1],Ga[2]=o[2],Ug=Math.atan2(-t[2],-t[10]),M0=kM();for(let r in _0){if(r==="studio"||M0==="studio"){wl[r]=_l[r]=r==="studio"&&M0==="studio";continue}if(!dh||M0==="out"||M0===r||Vu(_0[r],.3))wl[r]=X0(_0[r],!1)||M0===r,_l[r]=X0(_0[r],!0)||M0===r;else{let a=MM[M0][r];wl[r]=a?Gg(a,_0[r],!1):X0(_0[r],!1),_l[r]=a?Gg(a,_0[r],!0):X0(_0[r],!0)}}qg=!dh||_M.some(r=>X0(r,!1))},get zone(){return M0},room(t,e){return e?_l[t]:wl[t]},box(t,e,o){return o&&!(e?_l[o]:wl[o])?!1:X0(t,e)},get floor(){return qg}};jg.exports=AM});var Vg=mt((WA,Wg)=>{"use strict";var TM=Cu(),LM=ph();function zM(t){let e=new DataView(t);if(String.fromCharCode(e.getUint8(0),e.getUint8(1),e.getUint8(2),e.getUint8(3))!=="STAT")throw new Error("Not a statue file");let n=e.getUint32(4,!0),r=e.getUint32(8,!0),a=[],s=[];for(let h=0;h<3;h++)a.push(e.getFloat32(12+h*4,!0)),s.push(e.getFloat32(24+h*4,!0));let i=36,c=new Uint16Array(t,i,n*3);i+=n*6;let f=new Uint16Array(t,i,r);i+=r*2;let l=new Int8Array(t,i,n*3);return{nV:n,nI:r,mn:a,sz:s,pos:c,idx:f,nrm:l}}Wg.exports=(t,e)=>{let o=[],n=[],r=[],a=[],s=null,i=e.statues.length,c=[],f=(h,u)=>{let v=o.length/3,p=u.height*.75,d=u.base!==void 0?u.base:e.pedestalTop;c.push({offset:a.length,count:h.nI,box:[u.x-p,d-.1,u.z-p,u.x+p,d+u.height+.2,u.z+p]});let m=u.height,g=Math.cos(u.yaw),y=Math.sin(u.yaw),b=u.base!==void 0?u.base:e.pedestalTop;for(let w=0;w<h.nV;w++){let _=(h.mn[0]+h.pos[w*3]/65535*h.sz[0])*m,M=(h.mn[1]+h.pos[w*3+1]/65535*h.sz[1])*m,A=(h.mn[2]+h.pos[w*3+2]/65535*h.sz[2])*m;o.push(u.x+g*_+y*A,b+M,u.z-y*_+g*A);let O=h.nrm[w*3]/127,R=h.nrm[w*3+1]/127,q=h.nrm[w*3+2]/127;n.push(g*O+y*q,R,-y*O+g*q),r.push(u.mat||1,0,0)}for(let w=0;w<h.nI;w++)a.push(v+h.idx[w])},l=()=>{a.length!==0&&(s=TM(t,{position:o,normal:n,mat:r,elements:a,lights:e.lights,get viewer(){return e.viewer}},!1,!0))};return e.statues.forEach(h=>{fetch("res/"+h.file).then(u=>{if(!u.ok)throw new Error("Could not load "+h.file);return u.arrayBuffer()}).then(u=>f(zM(u),h)).catch(u=>console.error(u)).then(()=>{--i===0&&l()})}),function(h){if(!s)return;let u=!!(h&&h.reflected),v=c.filter(p=>LM.box(p.box,u));v.length&&s(v)}}});var r3=mt((VA,Yu)=>{"use strict";var RM=Ls(),Bn=1.29032,$s=[9.2968,2,5.9],NM=[[.767398,.00185,-.10827],[.010515,.769952,.087681],[-.107774,.08829,-.762374]],vh=2147.64,Xg=725,Yg=1288,Kg=1450,Qg=2576,Yr=-5.197,Ds=3.865,Y0=10.135,qs=-14.679,Sl=-30.229,El=7.232,Zg=-45.713,nc=17.1*Bn,Fs=16.6*Bn,kl=16.6*Bn,Jg=[6.9,17.1],mh=[2.95,16.6],CM=1.6,OM=0,PM=1,t3=2,Xu=3,e3=4,o3=5,IM=6;function $M(){let t=[],e=[],o=[],n=[],r=RM.createBuilder(t,e,o,n),a=(f,l,h,u,v,p,d=1,m=1)=>{let g=[];for(let y=0;y<=d;y++){let b=[];for(let w=0;w<=m;w++){let _=[f[0]+l[0]*y/d+h[0]*w/m,f[1]+l[1]*y/d+h[1]*w/m,f[2]+l[2]*y/d+h[2]*w/m],M=p(_);b.push(r.vert(_,u,[v,M[0],M[1]]))}g.push(b)}for(let y=0;y<d;y++)for(let b=0;b<m;b++)r.tri(g[y][b],g[y+1][b],g[y][b+1]),r.tri(g[y+1][b],g[y+1][b+1],g[y][b+1])},s=f=>l=>[($s[2]-l[2])/Bn-f,l[1]/Bn];a([-60,0,-.36],[130,0,0],[0,0,-140],[0,1,0],OM,f=>[f[0]/Bn,f[2]/Bn],13,14),a([Ds,0,Yr],[0,0,qs-Yr],[0,nc,0],[1,0,0],PM,s(8.6),6,6),a([-40,0,Yr],[Ds+40,0,0],[0,nc,0],[0,0,1],t3,f=>[(Ds-f[0])/Bn,f[1]/Bn],8,4),a([-40,0,-.36],[0,0,Yr+.36],[0,nc,0],[1,0,0],t3,f=>[-f[2]/Bn,f[1]/Bn]),a([Y0,0,-80],[0,0,Yr+80],[0,Fs,0],[-1,0,0],e3,s(8.6),12,6),a([Y0,0,Yr],[60,0,0],[0,Fs,0],[0,0,1],o3,f=>[(f[0]-Y0)/Bn,f[1]/Bn],8,4),a([70,0,Yr],[0,0,-.36-Yr],[0,Fs,0],[-1,0,0],o3,f=>[-f[2]/Bn,f[1]/Bn]);let i=f=>[(f[0]-$s[0])/Bn+4.18,f[1]/Bn];a([-20,0,Sl],[El+20,0,0],[0,kl,0],[0,0,1],Xu,i,8,6),a([El,0,Sl],[0,0,Zg-Sl],[0,kl,0],[1,0,0],Xu,s(28),4,4),a([El,0,Zg],[Y0-El,0,0],[0,Fs,0],[0,0,1],e3,f=>[(f[0]-$s[0])/Bn,f[1]/Bn],2,4),a([-20,0,qs],[0,0,Sl-qs],[0,kl,0],[1,0,0],Xu,s(16),4,4);let c=(f,l,h,u)=>a(f,l,h,u,IM,()=>[0,0],4,4);return c([-300,-20,-300],[600,0,0],[0,320,0],[0,0,1]),c([-300,300,-300],[600,0,0],[0,0,300],[0,-1,0]),c([-300,-20,0],[0,0,-300],[0,320,0],[1,0,0]),c([300,-20,-300],[0,0,300],[0,320,0],[-1,0,0]),{position:t,normal:e,elements:o,attr:n}}function Is(t,e,o,n){let r=t.texture({data:[[n]],...o,min:"linear",mag:"linear"});return fetch(e).then(a=>{if(!a.ok)throw new Error("Could not load "+e);return a.blob()}).then(a=>createImageBitmap(a)).then(a=>{r({data:a,...o,min:"mipmap",mipmap:"nice",mag:"linear"})}).catch(a=>console.error(a)),r}var Ha=t=>"vec3("+t.map(e=>e.toFixed(4)).join(", ")+")",FM=[[[-.35,0,-.35],[14.35,9.2,50]],[[-40,0,qs],[Ds,nc,Yr]],[[Y0,0,-80],[70,Fs,Yr]],[[-20,0,-80],[El,kl,Sl]],[[-40,0,-80],[-20,kl,qs]]],DM=FM.map(t=>`if (hitBox(ro, rd, ${Ha(t[0])}, ${Ha(t[1])}, 1e4) ) return 0.0;`).join(`
		`),n3="mat3("+[0,1,2].map(t=>[0,1,2].map(e=>NM[e][t].toFixed(6)).join(", ")).join(", ")+")",qM=`
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
	${DM}
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
	vec3 ro = ${Ha($s)};
	vec3 rd = p - ro;
	if (hitBox(ro, rd, ${Ha([-40,0,qs])}, ${Ha([Ds-.02,nc,Yr])}, 0.995)) return false;
	if (hitBox(ro, rd, ${Ha([Y0+.02,0,-80])}, ${Ha([70,Fs,Yr])}, 0.995)) return false;
	return true;
}

// is this point sky in the photo? (only meaningful inside the photo)
bool photoSky(vec3 p) {
	vec3 pc = ${n3} * (p - ${Ha($s)});
	if (pc.z < 0.2) return false;
	vec2 uv = vec2(
		(${Xg.toFixed(2)} + ${vh.toFixed(3)} * pc.x / pc.z) / ${Kg.toFixed(1)},
		(${Yg.toFixed(2)} - ${vh.toFixed(3)} * pc.y / pc.z) / ${Qg.toFixed(1)}
	);
	if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) return false;
	return texture2D(photoMask, uv).r < 0.5;
}

// photo colour and how much to trust it (0..1)
vec4 photoAt(vec3 p, vec3 n, vec3 eye) {
	vec3 pc = ${n3} * (p - ${Ha($s)});
	if (pc.z < 0.2) return vec4(0.0);
	vec2 uv = vec2(
		(${Xg.toFixed(2)} + ${vh.toFixed(3)} * pc.x / pc.z) / ${Kg.toFixed(1)},
		(${Yg.toFixed(2)} - ${vh.toFixed(3)} * pc.y / pc.z) / ${Qg.toFixed(1)}
	);
	vec2 e = min(uv, 1.0 - uv);
	float w = smoothstep(0.002, 0.02, min(e.x, e.y));
	if (w <= 0.0) return vec4(0.0);
	w *= smoothstep(0.35, 0.75, texture2D(photoMask, uv).r);
	if (w <= 0.0) return vec4(0.0);
	if (!photoSees(p)) return vec4(0.0);
	// if we see this surface much more square-on than the photo did,
	// the photo would look smeared: hand over to the painted facade
	float camCos = abs(dot(normalize(p - ${Ha($s)}), n));
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
		base = texture2D(cobbleTex, fuv / ${CM.toFixed(2)}).rgb;
	} else if (kind < 2.5) {
		base = texture2D(pinkTex, vec2(fuv.x / ${Jg[0].toFixed(2)}, 1.0 - fuv.y / ${Jg[1].toFixed(2)})).rgb;
	} else if (kind < 3.5) {
		base = texture2D(yellowTex, vec2(fuv.x / ${mh[0].toFixed(2)}, 1.0 - fuv.y / ${mh[1].toFixed(2)})).rgb;
	} else {
		base = texture2D(creamTex, vec2(fuv.x / ${mh[0].toFixed(2)}, 1.0 - fuv.y / ${mh[1].toFixed(2)})).rgb;
	}

	// ---------- the photograph, where it can be trusted ----------
	bool projectable = kind < 0.5 || (kind > 0.5 && kind < 1.5) || (kind > 2.5 && kind < 4.5);
	if (kind < 0.5) {
		// the photo only shows ground inside the alley, or beyond its corners
		bool inAlley = v_pos.x > ${(Ds-.05).toFixed(3)} && v_pos.x < ${(Y0+.05).toFixed(3)};
		projectable = inAlley || v_pos.z < ${qs.toFixed(3)};
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
}`,GM=`
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
}`,HM=tr();Yu.exports=t=>{let e=$M(),o={wrapS:"clamp",wrapT:"clamp",flipY:!1},n={wrapS:"mirror",wrapT:"clamp",flipY:!1},r={wrapS:"repeat",wrapT:"repeat",flipY:!1},a=Is(t,"res/street/photo.jpg",o,[190,160,120]),s=Is(t,"res/street/photo_night.jpg",o,[12,14,22]),i=Is(t,"res/street/photo_mask.png",o,[255,255,255]),c=Is(t,"res/street/facade_pink.jpg",n,[200,150,135]),f=Is(t,"res/street/facade_yellow.jpg",n,[225,180,95]),l=Is(t,"res/street/facade_cream.jpg",n,[215,200,175]),h=Is(t,"res/street/cobbles.jpg",r,[95,95,95]),u=Date.now(),v=t({frag:qM,vert:GM,attributes:{position:e.position,normal:e.normal,attr:e.attr},elements:new Uint32Array(e.elements),uniforms:{photo:a,photoMask:i,pinkTex:c,yellowTex:f,creamTex:l,cobbleTex:h,photoNight:s,night:()=>HM.night,time:()=>(Date.now()-u)/1e3}});return function(){v()}};Yu.exports.layout={MOUTH_Z:Yr,PINK_X:Ds,RIGHT_X:Y0,PINK_H:nc,CREAM_H:Fs,S:Bn}});var i3=mt((XA,s3)=>{"use strict";var BM=tr().GLSL,{glassPanes:UM}=F0(),a3=vr();function jM(){let t=[],e=[],o=(n,r)=>{for(let a of n)t.push(a),e.push(r)};return o(UM(),[0,0,1]),o(a3.windowGlass(),[0,0,1]),o(a3.farDoorGlass(),[1,0,0]),{position:t,normal:e}}s3.exports=t=>{let e=jM(),o=t({frag:`
		precision highp float;
		${BM}
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
		}`,attributes:{position:e.position,normal:e.normal},count:e.position.length,cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}});return function(){o()}}});var S3=mt((YA,td)=>{"use strict";var d3=tr().GLSL,WM=Ls(),Ku=ya(),{wallWithHoles:VM,C:Z0}=vr(),ce=.28,tt={westBack:14.4,westCol:15-ce,eastCol:37.4+ce,eastBack:41.8,south:Z0.z1+.7,northCol:Z0.z1+.7+16,northBack:Z0.z1+.7+19,cx:(15+37.4)/2,cz:(Z0.z1+.7+Z0.z1+.7+16-ce)/2},$o={x0:tt.westCol+ce,x1:tt.eastCol-ce,z0:tt.south,z1:tt.northCol-ce},wr=3.3,Ll=.92,J0=5.6,c3=6,Ea=11.9,Q0=9.6,fo={x0:tt.cx-2.9,x1:tt.cx+2.9,top:14.4},Mh=7,p3=4,Zu=(tt.eastCol-tt.westCol)/Mh,XM=(tt.northCol-tt.south)/p3,v3=3,Rl=.26,Us=1.4,Hs=1.1,xh=3,n0=(()=>{let t=[.3,.82,-.49],e=Math.hypot(...t);return t.map(o=>o/e)})(),Kt={GROUND:0,BRICK:1,STONE:2,MARBLE:3,HEDGE:4,POT:5,ROOF:6,SHUTTER:7,PANE:8,PLASTER:9,BARK:10,IRON:11,SKY:12,LEAD:13,FARBRICK:14,DARK:15,SOIL:16},r0=[],m3=(t,e,o)=>[tt.cx+t,e,tt.cz+o],yh=m3(-5.9,0,3.4),ts=.85,K0={c:[yh[0],4.6*ts+.5,yh[2]],r:[5*ts,3.6*ts,4.5*ts]},g3=[{d:[0,4.4,0],r:[3.9,2.6,3.6],n:230},{d:[-2.7,4,-1.2],r:[2.6,2.1,2.4],n:105},{d:[2.7,4.5,-1.6],r:[2.5,2.2,2.3],n:105},{d:[.8,6.9,.8],r:[2.6,2,2.5],n:105},{d:[-1.6,6.1,2],r:[2.2,1.9,2],n:80},{d:[2.3,3.4,1.8],r:[2,1.5,1.9],n:60}].map(t=>({c:[yh[0]+t.d[0]*ts,t.d[1]*ts+.5,yh[2]+t.d[2]*ts],r:t.r.map(e=>e*ts),n:t.n}));for(let t of g3)r0.push({...t,cell:0,leaf:[.5,.7,.46],bloom:[1,1,1],size:[.95,1.35],magnolia:1,shadow:1});var YM=[3.6,6.3,9];for(let t of YM){let e=8.6+t%1.7*.6;r0.push({c:m3(t,e/2+.5,5.2),r:[.9,e/2,.9],cell:1,leaf:[.5,.64,.5],bloom:[1,1,1],n:180,size:[.72,.98],spindle:1,shadow:1})}var KM=[{d:[-8.4,-4],bloom:[1,.62,.78]},{d:[-3.6,-4.6],bloom:[1,.98,.94]},{d:[3.8,-4.3],bloom:[1,.98,.94]},{d:[8.5,-4],bloom:[1,.58,.72]}].map(t=>({x:tt.cx+t.d[0],z:tt.cz+t.d[1],bloom:t.bloom}));for(let t of KM)r0.push({c:[t.x,.95,t.z],r:[1.25,.95,1.1],cell:3,leaf:[.7,.86,.58],bloom:t.bloom,n:80,size:[.55,.8],shadow:1});var Ju=[45,135,225,315].map(t=>{let e=t*Math.PI/180;return[tt.cx+Math.cos(e)*2.3,tt.cz+Math.sin(e)*2.3]});for(let[t,e]of Ju)r0.push({c:[t,1.85,e],r:[.62,.55,.62],cell:3,leaf:[.78,.95,.55],bloom:[1.25,1,.25],n:36,size:[.32,.42],shadow:1});var x3=[];{let t=(o,n,r,a,s,i)=>{let c=Math.hypot(r-o,a-n),f=Math.floor(c/.9);for(let l=0;l<=f;l++){let h=l/f,u=o+(r-o)*h,v=n+(a-n)*h;s!==void 0&&Math.abs((r!==o?u:v)-s)<i||x3.push([u,v])}};t($o.x0+.45,$o.z0+1.2,$o.x0+.45,$o.z1-.45,tt.cz,1),t($o.x1-.45,$o.z0+1.2,$o.x1-.45,$o.z1-.45,tt.cz,1),t($o.x0+.45,$o.z1-.45,$o.x1-.45,$o.z1-.45,tt.cx,1.9)}var QM=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],bh=t=>{let e=Math.hypot(t[0],t[1],t[2])||1;return[t[0]/e,t[1]/e,t[2]/e]};function ac(t,e,o,n,r,a,s){let i=t.vert(e,a,s),c=t.vert(o,a,s),f=t.vert(n,a,s),l=t.vert(r,a,s);t.tri(i,c,f),t.tri(i,f,l)}function Un(t,e,o,n,r,a,s,i){t.box(Math.min(e,r),Math.min(o,a),Math.min(n,s),Math.max(e,r),Math.max(o,a),Math.max(n,s),[i,0,0])}function ZM(t,e,o){return{vert:(n,r,a)=>t.vert(e(n),o(r),a),tri:t.tri}}var JM={north:[t=>[t[0],t[1],tt.northCol-t[2]],t=>[t[0],t[1],-t[2]]],west:[t=>[tt.westCol+t[2],t[1],t[0]],t=>[t[2],t[1],t[0]]],east:[t=>[tt.eastCol-t[2],t[1],t[0]],t=>[-t[2],t[1],t[0]]]};function y3(t,e,o,n,r){let a=[];for(let s=0;s<o;s++){let i=t+s*e+(s===0?n:.02),c=t+(s+1)*e-(s===o-1?r:.02);a.push([i,c,t+(s+.5)*e])}return a}var t8=y3(tt.westCol,Zu,Mh,ce+Rl,ce+Rl),l3=y3(tt.south,XM,p3,.32,ce+Rl),rc=[tt.cx-32.35,tt.northCol-77],e8=Array.from({length:Mh-1},(t,e)=>tt.westCol+(e+1)*Zu),b3=t=>(t[1]-t[0])/2-.2,zl=t=>(t[0]+t[1])/2;function o8(t,e){let o=zl(t),n=b3(t);return{u0:t[0],u1:t[1],bottom:e?0:Ll,head:r=>{let a=Math.abs(r-o);return a<n?wr+Math.sqrt(n*n-a*a):wr},step:.05}}function n8(t,e,o){return{u0:t-o,u1:t+o,bot:n=>e-Math.sqrt(Math.max(0,o*o-(n-t)*(n-t))),head:n=>e+Math.sqrt(Math.max(0,o*o-(n-t)*(n-t))),step:.04,mat:[Kt.STONE,0,0]}}function r8(t,e,o,n){return{u0:t-e/2,u1:t+e/2,bottom:o,head:()=>n,step:.5,mat:[Kt.STONE,0,0]}}function f3(t,e,o){let[n,r]=JM[e],a=ZM(t,n,r),s=[];o.arches.forEach((l,h)=>s.push(o8(l,h===o.open)));let i=[];for(let l of o.bays||o.arches){let h=zl(l);o.oculi&&s.push(n8(h,6.85,.3)),i.push({c:h,y0:o.win[0],y1:o.win[1],w:1.05})}for(let l of o.extraWindows||[])i.push(l);for(let l of i)s.push(r8(l.c,l.w,l.y0,l.y1));for(let l of o.extraHoles||[])s.push(l);VM(a,{u0:o.u0,u1:o.u1,w0:-ce,w1:ce,top:o.top,holes:s,mat:[Kt.BRICK,0,0],revealMat:[Kt.BRICK,0,0],noEnds:o.noEnds,cuts:o.cuts,topStep:.25});let c=(l,h,u,v,p,d,m)=>{let g=n([l,h,u]),y=n([v,p,d]);Un(t,g[0],g[1],g[2],y[0],y[1],y[2],m)},f=(l,h,u,v,p,d)=>ac(a,l,h,u,v,p,[d,0,0]);for(let l of o.arches){let h=zl(l),u=b3(l),v=28;for(let p of[ce,-ce]){let d=p>0?1:-1,m=p+d*.025;for(let g=0;g<v;g++){let y=Math.PI*g/v,b=Math.PI*(g+1)/v,w=(F,K)=>[h+Math.cos(F)*K,wr+Math.sin(F)*K],_=w(y,u),M=w(b,u),A=w(y,u+.26),O=w(b,u+.26);f([_[0],_[1],m],[M[0],M[1],m],[O[0],O[1],m],[A[0],A[1],m],[0,0,d],Kt.STONE);let R=Math.cos((y+b)/2),q=Math.sin((y+b)/2);f([A[0],A[1],p],[O[0],O[1],p],[O[0],O[1],m],[A[0],A[1],m],[R,q,0],Kt.STONE)}}}if(o.arches.forEach((l,h)=>{h!==o.open&&c(l[0]-.02,Ll,-ce-.05,l[1]+.02,Ll+.09,ce+.05,Kt.STONE)}),c(o.u0,c3,-ce,o.u1,c3+.18,ce+.09,Kt.STONE),c(o.u0,o.win[0]-.12,ce-.01,o.u1,o.win[0],ce+.06,Kt.STONE),o.cornice)for(let[l,h,u]of o.cornice)c(l,u-.22,ce-.01,h,u,ce+.16,Kt.STONE),c(l,u,ce-.01,h,u+.16,ce+.42,Kt.STONE);for(let{c:l,y0:h,y1:u,w:v,door:p}of i){let d=v/2;if(f([l-d-.01,h,.06],[l+d+.01,h,.06],[l+d+.01,u,.06],[l-d-.01,u,.06],[0,0,1],p?Kt.DARK:Kt.PANE),p){c(l-d-.16,0,ce-.01,l-d,u+.16,ce+.07,Kt.STONE),c(l+d,0,ce-.01,l+d+.16,u+.16,ce+.07,Kt.STONE),c(l-d-.16,u,ce-.01,l+d+.16,u+.2,ce+.09,Kt.STONE),c(l-d,0,.07,l+d,u-.02,.12,Kt.SHUTTER),c(l-.012,0,.12,l+.012,u-.02,.14,Kt.DARK);continue}for(let m of[-1,1]){let g=l+m*d;c(g+m*.02,h+.02,ce+.02,g+m*(d+.025),u-.02,ce+.06,Kt.SHUTTER)}c(l-d-.09,u,ce-.01,l+d+.09,u+.16,ce+.05,Kt.STONE),c(l-d-.09,h-.1,ce-.01,l+d+.09,h,ce+.09,Kt.STONE),c(l-.015,h,.06,l+.015,u,.09,Kt.SHUTTER),c(l-d,(h+u)/2-.015,.06,l+d,(h+u)/2+.015,.09,Kt.SHUTTER)}if(o.oculi)for(let l of o.bays||o.arches){let h=zl(l);f([h-.31,6.54,0],[h+.31,6.54,0],[h+.31,7.16,0],[h-.31,7.16,0],[0,0,1],Kt.DARK)}for(let l of o.cols){let h=Ll+.09,u=n([l,0,0]);Un(t,u[0]-.24,h,u[2]-.24,u[0]+.24,h+.12,u[2]+.24,Kt.MARBLE),t.lathe([[.23,h+.12,1],[.24,h+.17],[.2,h+.24],[.215,h+.28],[.17,h+.34,1],[.165,h+.6],[.155,wr-.5],[.15,wr-.38,1],[.175,wr-.34,1],[.17,wr-.3],[.2,wr-.22],[.27,wr-.15],[.29,wr-.12,1]],u[0],u[2],18,{mat:()=>[Kt.MARBLE,0,0]}),Un(t,u[0]-.29,wr-.12,u[2]-.29,u[0]+.29,wr+.01,u[2]+.29,Kt.STONE)}o.walk&&o.walk(t)}function a8(t){let e=[-1,0,1].map(r=>{let a=tt.cx+r*1.7;return{u0:a-.6,u1:a+.6,bottom:11,head:s=>12.9+Math.sqrt(Math.max(0,.36-(s-a)*(s-a))),step:.04,mat:[Kt.STONE,0,0]}});f3(t,"north",{u0:tt.westCol-ce,u1:tt.eastCol+ce,top:r=>r>fo.x0+1e-6&&r<fo.x1-1e-6?fo.top:Ea,cuts:[fo.x0,fo.x0+1e-5,fo.x1-1e-5,fo.x1],arches:t8,open:v3,cols:e8,oculi:!0,win:[8,9.9],extraHoles:e,cornice:[[tt.westCol-ce-3.3,fo.x0,Ea],[fo.x1,tt.eastCol+ce+3.3,Ea],[fo.x0-.2,fo.x1+.2,fo.top]],walk:r=>{Un(r,$o.x0,J0,tt.northCol+ce,$o.x1,J0+.2,tt.northBack,Kt.PLASTER),Un(r,$o.x0,0,tt.northBack,$o.x1,J0,tt.northBack+.3,Kt.PLASTER);for(let a of[tt.cx-7.2,tt.cx,tt.cx+7.2])ac(r,[a-.8,0,tt.northBack-.01],[a+.8,0,tt.northBack-.01],[a+.8,2.9,tt.northBack-.01],[a-.8,2.9,tt.northBack-.01],[0,0,-1],[Kt.DARK,0,0]),Un(r,a-.98,0,tt.northBack-.06,a+.98,3.12,tt.northBack,Kt.STONE),ac(r,[a-.8,0,tt.northBack-.07],[a+.8,0,tt.northBack-.07],[a+.8,2.9,tt.northBack-.07],[a-.8,2.9,tt.northBack-.07],[0,0,-1],[Kt.DARK,0,0])}}),ac(t,[fo.x0,11,tt.northCol+.2],[fo.x1,11,tt.northCol+.2],[fo.x1,13.6,tt.northCol+.2],[fo.x0,13.6,tt.northCol+.2],[0,0,-1],[Kt.DARK,0,0]),Un(t,fo.x0+.3,10.88,tt.northCol-ce-.06,fo.x1-.3,11,tt.northCol-ce+.1,Kt.STONE),Un(t,tt.westBack,J0+.2,tt.northBack,tt.eastBack,Ea,tt.northBack+3.4,Kt.BRICK),Un(t,tt.westBack,Q0,tt.northCol-ce,tt.westCol-ce,Ea,tt.northCol+ce,Kt.BRICK),Un(t,tt.eastCol+ce,Q0,tt.northCol-ce,tt.eastBack,Ea,tt.northCol+ce,Kt.BRICK),Un(t,tt.westBack,J0+.2,tt.northCol+ce+.12,tt.eastBack,Ea,tt.northBack,Kt.BRICK),Al(t,[tt.westBack-.5,Ea+.16,tt.northCol-ce-.42],[fo.x0-tt.westBack+.5,0,0],[0,2.6,4.4],Kt.ROOF),Al(t,[fo.x1,Ea+.16,tt.northCol-ce-.42],[tt.eastBack+.5-fo.x1,0,0],[0,2.6,4.4],Kt.ROOF),Al(t,[fo.x0-.3,fo.top+.16,tt.northCol-ce-.42],[fo.x1-fo.x0+.6,0,0],[0,1.4,3],Kt.ROOF),h3(t,[fo.x0-.3,fo.top+.16,tt.northCol-ce-.42],[fo.x0-.3,fo.top+1.56,tt.northCol-ce+2.58],[fo.x0-.3,fo.top+.16,tt.northCol-ce+2.58],[-1,0,0],Kt.BRICK),h3(t,[fo.x1+.3,fo.top+.16,tt.northCol-ce-.42],[fo.x1+.3,fo.top+1.56,tt.northCol-ce+2.58],[fo.x1+.3,fo.top+.16,tt.northCol-ce+2.58],[1,0,0],Kt.BRICK),Un(t,fo.x0,Ea,tt.northCol+ce,fo.x1,fo.top,tt.northCol+2.6,Kt.BRICK);for(let[r,a]of[[tt.cx-9.8,tt.northBack+.6],[tt.cx+9.4,tt.northBack+.4],[tt.cx-4.6,tt.northBack+1]])Un(t,r-.4,12.5,a-.4,r+.4,15.4,a+.4,Kt.BRICK),Un(t,r-.52,15.4,a-.52,r+.52,15.62,a+.52,Kt.STONE);let o=(r,a,s)=>{let i=r==="west"?-1:1,c=[];l3.forEach((h,u)=>{let v=zl(h);u===1?c.push({c:v,y0:0,y1:2.9,w:1.4,door:!0}):c.push({c:v,y0:1,y1:2.75,w:1.05}),c.push({c:v,y0:3.85,y1:5.45,w:1.05})}),f3(t,r,{u0:tt.south,u1:tt.northCol-ce,top:()=>Q0,arches:[],bays:l3,cols:[],win:[7.45,8.85],extraWindows:c,noEnds:!0,cornice:[[tt.south,tt.northCol-ce,Q0]]}),Un(t,a,0,tt.south,s+i*(ce+.12),Q0,tt.northBack+.3,Kt.BRICK);let f=s-i*ce;Un(t,f,0,tt.south,f-i*.06,.55,tt.northCol-ce,Kt.STONE);let l=s-i*(ce+.42);Al(t,[l,Q0+.16,tt.south],[0,0,tt.northCol-ce-tt.south],[a-l+i*.4,1.9,0],Kt.ROOF)};o("west",tt.westBack,tt.westCol),o("east",tt.eastBack,tt.eastCol);let n=Z0.x1+.7;Un(t,13.65,7.4,tt.south-.02,n,7.62,tt.south+.14,Kt.STONE),Un(t,13.65,10.4,tt.south-.02,n,10.6,tt.south+.38,Kt.STONE),Al(t,[13.65,10.6,tt.south+.38],[n-13.65,0,0],[0,2.2,-5],Kt.ROOF)}function h3(t,e,o,n,r,a){let s=[a,0,0];t.tri(t.vert(e,r,s),t.vert(o,r,s),t.vert(n,r,s))}function Al(t,e,o,n,r){let a=bh([o[1]*n[2]-o[2]*n[1],o[2]*n[0]-o[0]*n[2],o[0]*n[1]-o[1]*n[0]]),s=a[1]<0?a.map(f=>-f):a,i=(f,l)=>[e[0]+o[0]*f+n[0]*l,e[1]+o[1]*f+n[1]*l,e[2]+o[2]*f+n[2]*l];ac(t,i(0,0),i(1,0),i(1,1),i(0,1),s,[r,0,0]);let c=.08;ac(t,i(0,0),i(1,0),[i(1,0)[0],i(1,0)[1]-c,i(1,0)[2]],[i(0,0)[0],i(0,0)[1]-c,i(0,0)[2]],bh([-n[0],0,-n[2]]),[r,0,0])}function s8(t){let e=tt.westBack,o=tt.eastBack,n=tt.south,r=tt.northBack,a=36,s=22,i=[];for(let c=0;c<=a;c++){i.push([]);for(let f=0;f<=s;f++){let l=[e+(o-e)*c/a,0,n+(r-n)*f/s];i[c].push(t.vert(l,[0,1,0],[Kt.GROUND,0,0]))}}for(let c=0;c<a;c++)for(let f=0;f<s;f++)t.tri(i[c][f],i[c+1][f],i[c+1][f+1]),t.tri(i[c][f],i[c+1][f+1],i[c][f+1])}var Tl=.46,Bs=.58,Gs=[[-.5,0],[-.52,.45],[-.46,.78],[-.3,.95],[0,1],[.3,.95],[.46,.78],[.52,.45],[.5,0]];function i8(t,e,o){let n=Hs+o,r=(t>0?$o.x1-tt.cx:tt.cx-$o.x0)-Us-o,a=Hs+o,s=(e>0?$o.z1-tt.cz:tt.cz-$o.z0)-Us-o,i=xh+o,c=Math.sqrt(i*i-n*n),f=Math.sqrt(i*i-a*a),l=[[n,c],[n,s],[r,s],[r,a],[f,a]],h=Math.atan2(a,f),u=Math.atan2(c,n);for(let v=1;v<10;v++){let p=h+(u-h)*v/10;l.push([Math.cos(p)*i,Math.sin(p)*i])}return l.map(([v,p])=>[tt.cx+t*v,tt.cz+e*p])}function c8(t,e,o){let n=o[0]-e[0],r=o[1]-e[1],a=Math.hypot(n,r),s=n/a,i=r/a,c=-i,f=s,l=Tl*.5,h=-l,u=a+l,v=[],p=Math.max(1,Math.ceil((u-h)/1));for(let d=0;d<=p;d++){let m=h+(u-h)*d/p,g=[];for(let y=0;y<Gs.length;y++){let[b,w]=Gs[y],_=Math.min(Gs.length-2,y),M=Gs[Math.max(0,y-1)],A=Gs[Math.min(Gs.length-1,y+1)],O=(A[0]-M[0])*Tl,q=(A[1]-M[1])*Bs,F=-O,K=Math.hypot(q,F)||1,G=[e[0]+s*m+c*b*Tl,w*Bs,e[1]+i*m+f*b*Tl],X=[c*(-q/K),-F/K,f*(-q/K)];g.push(t.vert(G,X[1]<-.2?[c*Math.sign(b),.3,f*Math.sign(b)]:X,[Kt.HEDGE,0,0]))}v.push(g)}for(let d=0;d<p;d++)for(let m=0;m<Gs.length-1;m++)t.tri(v[d][m],v[d+1][m],v[d+1][m+1]),t.tri(v[d][m],v[d+1][m+1],v[d][m+1]);for(let[d,m]of[[0,-1],[p,1]]){let g=v[d],y=t.vert([e[0]+s*(d?u:h),Bs*.5,e[1]+i*(d?u:h)],[s*m,0,i*m],[Kt.HEDGE,0,0]);for(let b=0;b<g.length-1;b++)t.tri(y,g[b],g[b+1])}}function l8(t){for(let e of[-1,1])for(let o of[-1,1]){let n=i8(e,o,.3);for(let r=0;r<n.length;r++)c8(t,n[r],n[(r+1)%n.length])}}function f8(t){let e=tt.cx,o=tt.cz,n=()=>[Kt.STONE,0,0];t.lathe([[1.45,0,1],[1.45,.14,1],[1.12,.14,1],[1.12,.3,1],[0,.3]],e,o,8,{mat:n}),t.lathe([[.76,.3,1],[.8,.38,1],[.74,.44],[.76,.7],[.82,.9],[.8,1.02,1],[.88,1.06,1],[.88,1.18,1],[.6,1.18,1],[.6,.98]],e,o,24,{mat:n}),t.lathe([[.6,.98,1],[0,.98]],e,o,16,{mat:()=>[Kt.DARK,0,0]});let r={mat:()=>[Kt.IRON,0,0]};t.tube([[e-.72,1.1,o],[e-.72,1.9,o],[e-.7,2.3,o]],()=>.035,8,6,r),t.tube([[e+.72,1.1,o],[e+.72,1.9,o],[e+.7,2.3,o]],()=>.035,8,6,r);let a=[];for(let s=0;s<=10;s++){let i=Math.PI*s/10;a.push([e-Math.cos(i)*.7,2.3+Math.sin(i)*.45,o])}t.tube(a,()=>.03,20,6,r),t.tube([[e-.45,2.25,o],[e,2.38,o],[e+.45,2.25,o]],()=>.02,8,5,r),t.ellipsoid([e,2.32,o],[.03,.13,.13],6,10,r);for(let s of[-1,1]){let i=[];for(let c=0;c<=12;c++){let f=c/12*Math.PI*1.6,l=.16*(1-c/16);i.push([e+s*(.72-.18+Math.cos(f)*l*s*-1+0),1.95+Math.sin(f)*l,o])}t.tube(i,()=>.016,16,5,r)}}function h8(t){for(let[e,o]of Ju)t.lathe([[.26,0,1],[.3,.06],[.36,.42],[.38,.5,1],[.44,.52,1],[.44,.64,1],[.38,.66,1],[.37,.6]],e,o,20,{mat:()=>[Kt.POT,0,0]}),t.lathe([[.37,.6,1],[0,.6]],e,o,12,{mat:()=>[Kt.SOIL,0,0]}),t.tube([[e,.6,o],[e+.02,1,o-.01],[e-.01,1.45,o+.02]],n=>.045-n*.02,6,6,{mat:()=>[Kt.BARK,0,0]})}function u8(t){let[e,,o]=K0.c,n=_3(7),r=[[-1.8,.4,3.6],[1.6,-.9,3.9],[.4,1.9,3.4],[-.6,-1.7,4.2],[2.1,1.2,3.2]];for(let[a,s,i]of r){let c=[[e+a*.05,0,o+s*.05],[e+a*.25,i*.35,o+s*.25],[e+a*.6,i*.7,o+s*.6],[e+a,i,o+s],[e+a*1.35+(n()-.5),i+1.4,o+s*1.35+(n()-.5)]];t.tube(c,f=>.2*(1-f*.75),14,9,{mat:()=>[Kt.BARK,0,0]});for(let f=0;f<2;f++){let l=.55+f*.2,h=[e+a*l,i*l,o+s*l],u=n()*Math.PI*2;t.tube([h,[h[0]+Math.cos(u)*1.3,h[1]+.9,h[2]+Math.sin(u)*1.3],[h[0]+Math.cos(u)*2.3,h[1]+1.4+n(),h[2]+Math.sin(u)*2.3]],v=>.08*(1-v*.7),8,6,{mat:()=>[Kt.BARK,0,0]})}}for(let a of r0.filter(s=>s.spindle))t.tube([[a.c[0],0,a.c[2]],[a.c[0],1.4,a.c[2]]],()=>.12,3,7,{mat:()=>[Kt.BARK,0,0]})}function d8(t){let e=()=>[Kt.FARBRICK,0,0],o=()=>[Kt.LEAD,0,0],n=(a,s,i,c,f,l)=>{t.lathe([[i+.3,20,1],[i+.3,c-1.2,1],[i+.8,c-.9,1],[i+.8,c,1],[i,c,1]],a,s,28,{mat:e});let h=[];for(let v=0;v<=12;v++){let p=v/12*Math.PI/2,d=Math.cos(p)*i,m=Math.sin(p)*f;l&&(d*=1-.18*Math.sin(p*2)),h.push([Math.max(d,i*.12),c+m])}t.lathe(h,a,s,28,{mat:o});let u=c+f;t.lathe([[i*.13,u-.2,1],[i*.13,u+3,1],[i*.18,u+3.2,1],[i*.02,u+6.4]],a,s,10,{mat:o})};Un(t,14,0,104,52,26,150,Kt.FARBRICK),t.lathe([[3,26],[.1,32]],33,108,4,{mat:e}),n(26,124,7.2,33,9.5,!0),n(40.5,116,6,31,8,!0),n(16.5,117,5.5,30,7.2,!0),t.lathe([[6.4,20,1],[6.4,34,1],[6.9,34.4,1],[6,34.4,1],[.6,46.5,1],[.15,50]],33,132,24,{mat:o});let r=(a,s,i)=>{Un(t,a-1.8,0,s-1.8,a+1.8,i,s+1.8,Kt.FARBRICK),t.lathe([[1.9,i,1],[1.6,i+3.5,1],[1.2,i+3.5,1],[1.2,i+6,1],[.9,i+6.2,1],[.05,i+13]],a,s,8,{mat:e})};r(20.5,109,36),r(46.5,112,38)}function p8(t){let o=[tt.cx,0,tt.cz],n=24,r=10,a=[];for(let s=0;s<=n;s++){a.push([]);let i=-Math.PI*.62+Math.PI*1.24*s/n;for(let c=0;c<=r;c++){let f=Math.PI/2*(c/r)-.05,l=[Math.sin(i)*Math.cos(f),Math.sin(f),Math.cos(i)*Math.cos(f)],h=[o[0]+l[0]*420,o[1]+l[1]*420,o[2]+l[2]*420];a[s].push(t.vert(h,[-l[0],-l[1],-l[2]],[Kt.SKY,0,0]))}}for(let s=0;s<n;s++)for(let i=0;i<r;i++)t.tri(a[s][i],a[s+1][i],a[s+1][i+1]),t.tri(a[s][i],a[s+1][i+1],a[s][i+1])}function v8(){let t=[],e=[],o=[],n=[],r=WM.createBuilder(t,e,o,n);return s8(r),a8(r),l8(r),f8(r),h8(r),u8(r),r.save(),r.translate(rc[0],0,rc[1]),d8(r),r.restore(),p8(r),{position:t,normal:e,elements:o,attr:n}}var w3=[[[13.65,0,Z0.z0-.7],[Z0.x1+.7,10.6,tt.south]],[[tt.westBack,J0,tt.northCol-ce],[tt.eastBack,Ea,tt.northBack+3.4]],[[fo.x0,Ea,tt.northCol-ce],[fo.x1,fo.top,tt.northCol+2.6]],[[tt.westBack,0,tt.south],[tt.westCol+ce,Q0,tt.northBack+.3]],[[tt.eastCol-ce,0,tt.south],[tt.eastBack,Q0,tt.northBack+.3]],[[14+rc[0],0,104+rc[1]],[52+rc[0],26,150+rc[1]]]];function m8(t,e,o,n){let r=.001,a=1e9;for(let s=0;s<3;s++){if(Math.abs(e[s])<1e-9){if(t[s]<o[s]||t[s]>n[s])return!1;continue}let i=(o[s]-t[s])/e[s],c=(n[s]-t[s])/e[s];if(i>c&&([i,c]=[c,i]),r=Math.max(r,i),a=Math.min(a,c),r>a)return!1}return!0}function gh(t,e,o,n){let r=[(t[0]-o[0])/n[0],(t[1]-o[1])/n[1],(t[2]-o[2])/n[2]],a=[e[0]/n[0],e[1]/n[1],e[2]/n[2]],s=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],i=r[0]*a[0]+r[1]*a[1]+r[2]*a[2],c=r[0]*r[0]+r[1]*r[1]+r[2]*r[2]-1,f=i*i-s*c;if(f<=0)return 0;let l=Math.sqrt(f),h=Math.max(0,(-i-l)/s),u=(-i+l)/s;return Math.max(0,u-h)}function Qu(t){for(let[e,o]of w3)if(m8(t,n0,e,o))return 0;return 1}function _3(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let o=e;return o=Math.imul(o^o>>>15,o|1),o^=o+Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296}}function g8(){let t=[],e=[],o=[],n=[],r=[],a=[],s=[],i=_3(21),c=(p,d,m,g,y,b,w)=>{let _=t.length/3;for(let[M,A]of[[-1,-1],[1,-1],[1,1],[-1,1]])t.push(...p),e.push(M,A),o.push(d,m,g),n.push(...y),r.push(...b),a.push(...w);s.push(_,_+1,_+2,_,_+2,_+3)},f=(p,d)=>{let m=1;for(let g of r0){if(g===d||!g.shadow)continue;let y=gh(p,n0,g.c,g.r);y>0&&(m*=Math.exp(-y*.9))}return m},l=r0.map(p=>({...p,pts:null}));for(let p of l)for(let d=0;d<p.n;d++){let m;do m=[i()*2-1,i()*2-1,i()*2-1];while(m[0]*m[0]+m[1]*m[1]+m[2]*m[2]>1);let g=Math.hypot(m[0],m[1],m[2])||1,y=Math.pow(i(),.35)*.98,b=[m[0]/g*y,m[1]/g*y,m[2]/g*y];if(p.spindle){let G=b[1],X=Math.sqrt(Math.max(.02,1-G*G))*(G>0?1-G*.55:1+G*.25),dt=Math.hypot(b[0],b[2])||1,Ot=X*Math.min(1,dt*1.4);b=[b[0]/dt*Ot,G,b[2]/dt*Ot]}p.magnolia&&b[1]<-.55&&(b[1]=-.55+(b[1]+.55)*.35);let w=[p.c[0]+b[0]*p.r[0],p.c[1]+b[1]*p.r[1],p.c[2]+b[2]*p.r[2]],_,M;if(p.magnolia){let G=0;for(let Ot of g3)G=Math.max(G,gh(w,n0,Ot.c,Ot.r));_=Math.exp(-G*1.1);let X=1;for(let Ot of r0)if(!Ot.magnolia&&Ot.shadow){let zt=gh(w,n0,Ot.c,Ot.r);zt>0&&(X*=Math.exp(-zt*.9))}_*=Qu(w)*X;let dt=QM(w,K0.c);M=bh([dt[0]/K0.r[0]+b[0]*.5,dt[1]/K0.r[1]+b[1]*.5,dt[2]/K0.r[2]+b[2]*.5]),y=Math.min(1,Math.hypot(dt[0]/K0.r[0],dt[1]/K0.r[1],dt[2]/K0.r[2])*.6+y*.4)}else{let G=gh(w,n0,p.c,p.r);_=Math.exp(-G*(p.spindle?2.2:1.25)),_*=Qu(w)*f(w,r0[l.indexOf(p)]),M=bh([b[0]/p.r[0],b[1]/p.r[1],b[2]/p.r[2]])}let A=Math.max(0,M[0]*n0[0]+M[1]*n0[1]+M[2]*n0[2]),O=.25+.75*Math.pow(y,1.5)*(.65+.35*(M[1]*.5+.5)),R=p.size[0]+(p.size[1]-p.size[0])*i(),q=.85+i()*.3,F=p.leaf.map(G=>G*q),K=p.cell;p.cell===3&&i()<.35&&(K=2),c(w,R,K,i()*Math.PI*2,[_,O,.35+.65*A],F,p.bloom)}for(let[p,d]of x3){let m=i()<.5;for(let g=0;g<3;g++){let y=[p+(i()-.5)*.7,.28+i()*.22,d+(i()-.5)*.5],b=Qu(y)*f(y,null);c(y,.32+i()*.12,i()<.7?3:2,i()*6.28,[b,.6+i()*.3,.8],[.75,.9,.6],m?[1,.55,.75]:[.85,.8,1.15])}}let h=s.length/6,u=Array.from({length:h},(p,d)=>d);for(let p=h-1;p>0;p--){let d=Math.floor(i()*(p+1));[u[p],u[d]]=[u[d],u[p]]}let v=[];for(let p of u)for(let d=0;d<6;d++)v.push(s[p*6+d]);return{center:t,corner:e,par:o,light:n,tint:r,bloom:a,elements:v}}var ae=t=>t.toFixed(4),Nl=t=>`vec3(${ae(t[0])}, ${ae(t[1])}, ${ae(t[2])})`,M3=`
const vec3 SUN = ${Nl(n0)};
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
`,x8=w3.map(([t,e])=>`if (hitBox(ro, SUN, ${Nl(t)}, ${Nl(e)})) return 0.0;`).join(`
	`),y8=r0.filter(t=>t.shadow).map(t=>`tr *= crownShade(ro, ${Nl(t.c)}, ${Nl(t.r)}, ${t.spindle?"1.8":"1.0"});`).join(`
	`),b8=(t,e,o,n,r,a,s,i,c)=>`
	{
		float t = (${ae(e)} - ro.${t}) / SUN.${t};
		if (t > 0.0) {
			vec3 q = ro + SUN * t;
			float u = q.${t==="z"?"x":"z"};
			if (q.y < ${ae(J0)} && u > ${ae(o-ce)} && u < ${ae(o+n*r+ce)}) {
				float k = floor((u - ${ae(o)}) / ${ae(n)});
				float a = ${ae(o)} + k * ${ae(n)} + (k < 0.5 ? ${ae(a)} : 0.02);
				float b = ${ae(o)} + (k + 1.0) * ${ae(n)} - (k > ${ae(r-1.5)} ? ${ae(s)} : 0.02);
				float c = 0.5 * (a + b), r = 0.5 * (b - a) - 0.2;
				float d = abs(u - c);
				float sill = abs(k - ${ae(i)}) < 0.5 ? 0.0 : ${ae(Ll+.09)};
				bool hole = (q.y > sill && q.y < ${ae(wr)} && u > a && u < b && d < 0.5 * (b - a) - 0.17)
					|| (q.y >= ${ae(wr)} && d * d + (q.y - ${ae(wr)}) * (q.y - ${ae(wr)}) < r * r);
				if (!hole && ${c}) return 0.0;
			}
		}
	}`,wh=Hs+.3,_h=Hs+.3,Cl=xh+.3,u3=$o.x1-tt.cx-Us-.3,w8=$o.z1-tt.cz-Us-.3,_8=tt.cz-$o.z0-Us-.3,M8=Math.sqrt(Cl*Cl-wh*wh),S8=Math.sqrt(Cl*Cl-_h*_h),E8=[[tt.cx,tt.cz,.86,1.18],[tt.cx,tt.cz,1.25,.3],...Ju.map(([t,e])=>[t,e,.42,.65])].map(([t,e,o,n])=>`if (hitCyl(ro, vec2(${ae(t)}, ${ae(e)}), ${ae(o)}, ${ae(n)})) return 0.0;`).join(`
	`),k8=`
float segDist(vec2 p, vec2 a, vec2 b) {
	vec2 pa = p - a, ba = b - a;
	float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
	return length(pa - ba * h);
}

// distance to the nearest hedge line
float hedgeDist(vec2 xz) {
	vec2 q = abs(xz - vec2(${ae(tt.cx)}, ${ae(tt.cz)}));
	float b1 = xz.y > ${ae(tt.cz)} ? ${ae(w8)} : ${ae(_8)};
	vec2 A = vec2(${ae(wh)}, ${ae(M8)}), Bp = vec2(${ae(wh)}, b1), C = vec2(${ae(u3)}, b1);
	vec2 D = vec2(${ae(u3)}, ${ae(_h)}), E = vec2(${ae(S8)}, ${ae(_h)});
	float d = min(min(segDist(q, A, Bp), segDist(q, Bp, C)), min(segDist(q, C, D), segDist(q, D, E)));
	float ang = atan(q.y, q.x);
	if (ang > atan(E.y, E.x) && ang < atan(A.y, A.x)) d = min(d, abs(length(q) - ${ae(Cl)}));
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
	${x8}
	${b8("z",tt.northCol,tt.westCol,Zu,Mh,ce+Rl,ce+Rl,v3,"ro.z > "+ae(tt.northCol-ce))}
	// on lighter settings only the buildings cast shadows
	if (gardenDetail < 0.5) return 1.0;
	${E8}
	if (ro.y < ${ae(Bs)} && ro.x > ${ae($o.x0)} && ro.x < ${ae($o.x1)}) {
		for (int i = 1; i <= 4; i++) {
			float t = float(i) / 4.0 * (${ae(Bs)} - ro.y) / SUN.y;
			vec3 q = ro + SUN * t;
			float w = ${ae(Tl*.5)} * sqrt(max(0.0, 1.0 - pow(q.y / ${ae(Bs)}, 4.0)));
			if (hedgeDist(q.xz) < w) return 0.0;
		}
	}
	float tr = 1.0;
	${y8}
	return tr;
}
`,A8=`
precision highp float;
${d3}
varying vec3 v_pos, v_normal, v_attr, v_eye;
uniform float time, gardenDetail;
${M3}
${k8}

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
			} else if (rc < ${ae(xh)}) {
				// brick in rings round the wellhead
				float ang = atan(P.z - ${ae(tt.cz)}, P.x - ${ae(tt.cx)});
				vec2 q = vec2(ang * rc, rc);
				base = brick(q * vec2(1.0, 2.6), 0.5) * 0.92;
				if (abs(rc - ${ae(xh)}) < 0.1) base = vec3(0.70, 0.66, 0.60);
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
	bool walk = (P.x < ${ae(tt.westCol)} || P.x > ${ae(tt.eastCol)} || P.z > ${ae(tt.northCol)}) && P.y < ${ae(J0+.05)} && P.z > ${ae(tt.south-.1)} && P.z < ${ae(tt.northBack+.5)};
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
}`,T8=`
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
}`,L8=`
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
}`,z8=`
precision highp float;
${d3}
uniform sampler2D leaves;
varying vec2 v_uv;
varying vec3 v_light, v_tint, v_bloom, v_pos;
${M3}
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
}`;function R8(t,e,o){let n=t.texture({data:[[o]],min:"linear",mag:"linear"});return fetch(e).then(r=>{if(!r.ok)throw new Error("Could not load "+e);return r.blob()}).then(r=>createImageBitmap(r,{premultiplyAlpha:"none"})).then(r=>n({data:r,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(r=>console.error(r)),n}td.exports=t=>{let e=v8(),o=g8(),n=R8(t,"res/garden/foliage.webp",[0,0,0,0]),r=Date.now(),a=()=>Ku.motion?window.__streetClock!==void 0?window.__streetClock:(Date.now()-r)/1e3:20,s=t({frag:A8,vert:T8,attributes:{position:e.position,normal:e.normal,attr:e.attr},elements:new Uint32Array(e.elements),uniforms:{time:a,gardenDetail:()=>Ku.gardenDetail}}),i=t({frag:z8,vert:L8,attributes:{center:o.center,corner:o.corner,par:o.par,light:o.light,tint:o.tint,bloom:o.bloom},elements:new Uint32Array(o.elements),uniforms:{leaves:n,time:a},cull:{enable:!1},count:()=>Math.floor(o.elements.length*Ku.leafShare/6)*6});return function(){s(),i()}};td.exports.layout={G:tt,YARD:$o,SUN:n0}});var L3=mt((KA,T3)=>{"use strict";var N8=tr().GLSL,C8=Ls(),{C:A3}=vr(),_r=A3.x1+.35,rd=A3.zc,ed=[_r-7.3,2,rd],E3=5.2*Math.PI/180,k3=2100,O8=725,P8=1288,I8=1450,$8=2576,S0=rd-3.2,kh=rd+3.3,od=_r+5,nd=_r+11.7,sc=3.9,Ol=_r+22.7,Sh=40;function F8(){let t=[],e=[],o=[],n=[],r=C8.createBuilder(t,e,o,n),a=(l,h,u,v,p,d)=>{let m=[];for(let g=0;g<=p;g++){m.push([]);for(let y=0;y<=d;y++){let b=[0,1,2].map(w=>l[w]+h[w]*g/p+u[w]*y/d);m[g].push(r.vert(b,v,[0,0,0]))}}for(let g=0;g<p;g++)for(let y=0;y<d;y++)r.tri(m[g][y],m[g+1][y],m[g+1][y+1]),r.tri(m[g][y],m[g+1][y+1],m[g][y+1])},s=kh-S0,i=.7;a([_r-i,0,S0],[od-_r+i,0,0],[0,0,s],[0,1,0],6,4);let c=nd-od,f=Math.hypot(c,sc);return a([od,0,S0],[c,sc,0],[0,0,s],[-sc/f,c/f,0],6,4),a([nd,sc,S0],[Ol-nd,0,0],[0,0,s],[0,1,0],6,4),a([_r-i,0,S0],[Ol-_r+i,0,0],[0,Sh,0],[0,0,1],12,12),a([_r-i,0,kh],[Ol-_r+i,0,0],[0,Sh,0],[0,0,-1],12,12),a([Ol,0,S0],[0,Sh,0],[0,0,s],[-1,0,0],8,4),a([_r-i,Sh,S0],[Ol-_r+i,0,0],[0,0,s],[0,-1,0],6,4),{position:t,normal:e,elements:o,attr:n}}var $r=t=>t.toFixed(5),Eh=[[_r+3.4,3.7,S0+.01,1],[_r+8.6,4.1,kh-.01,-1],[_r+14.8,sc+3.3,S0+.01,1],[_r+19.6,sc+3.6,kh-.01,-1]],D8=`
precision highp float;
${N8}
uniform sampler2D photo;
uniform float time;
varying vec3 v_pos;
varying vec3 v_normal;
const int NLAMP = ${Eh.length};
vec4 LAMP[NLAMP];

void main() {
	${Eh.map((t,e)=>`LAMP[${e}] = vec4(${$r(t[0])}, ${$r(t[1])}, ${$r(t[2])}, ${$r(t[3])});`).join(`
	`)}
	vec3 d = v_pos - vec3(${$r(ed[0])}, ${$r(ed[1])}, ${$r(ed[2])});
	float c = ${$r(Math.cos(E3))}, s = ${$r(Math.sin(E3))};
	float fw = d.x * c + d.y * s;
	float up = -d.x * s + d.y * c;
	fw = max(fw, 0.05);
	vec2 px = vec2(${$r(O8)} + ${$r(k3)} * d.z / fw, ${$r(P8)} - ${$r(k3)} * up / fw);
	vec2 uv = px / vec2(${$r(I8)}, ${$r($8)});
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
	for (int i = 0; i < ${Eh.length}; i++) {
		vec4 L = LAMP[i];                       // x, y, z, side (+1 left wall, -1 right)
		vec3 d = L.xyz - v_pos;
		float dd = dot(d, d);
		float fl = 0.92 + 0.05 * sin(time * 7.3 + float(i) * 2.1) + 0.03 * sin(time * 17.0 + float(i));
		// the wall it hangs on is lit across, the paving from above
		float face = v_normal.y > 0.5 ? max(normalize(d).y, 0.0) : 0.35 + 0.65 * max(dot(v_normal, normalize(d)), 0.0);
		lit += albedo * vec3(1.0, 0.62, 0.30) * face * fl * lampK * 3.2 / (0.6 + dd * 0.45);
	}
	gl_FragColor = vec4(lit, 1.0);
}`,q8=`
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
}`;T3.exports=t=>{let e=F8(),o=t.texture({data:[[[120,105,85]]],min:"linear",mag:"linear"});fetch("res/florence/photo.jpg").then(i=>{if(!i.ok)throw new Error("Could not load the Florence photo");return i.blob()}).then(i=>createImageBitmap(i)).then(i=>o({data:i,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(i=>console.error(i));let n=t({frag:D8,vert:q8,attributes:{position:e.position,normal:e.normal},elements:new Uint32Array(e.elements),uniforms:{photo:o},cull:{enable:!1}}),r={pos:[],nrm:[],k:[],idx:[]},a=(i,c,f)=>{let[l,h,u]=i,v=[[[1,0,0],[0,1,0],[0,0,1]],[[-1,0,0],[0,1,0],[0,0,-1]],[[0,0,1],[0,1,0],[-1,0,0]],[[0,0,-1],[0,1,0],[1,0,0]],[[0,1,0],[0,0,1],[1,0,0]],[[0,-1,0],[0,0,1],[-1,0,0]]];for(let[p,d,m]of v){let g=r.pos.length/3;for(let[y,b]of[[-1,-1],[1,-1],[1,1],[-1,1]])r.pos.push(l+p[0]*c[0]+d[0]*y*c[0]+m[0]*b*c[0],h+p[1]*c[1]+d[1]*y*c[1]+m[1]*b*c[1],u+p[2]*c[2]+d[2]*y*c[2]+m[2]*b*c[2]),r.nrm.push(...p),r.k.push(f);r.idx.push(g,g+1,g+2,g,g+2,g+3)}};for(let i of Eh){let c=i[3],f=i[2]+c*.42;a([i[0],i[1],f],[.11,.17,.11],1);for(let l of[-1,1])for(let h of[-1,1])a([i[0]+l*.11,i[1],f+h*.11],[.014,.18,.014],0);a([i[0],i[1]+.2,f],[.15,.03,.15],0),a([i[0],i[1]+.27,f],[.05,.05,.05],0),a([i[0],i[1]-.19,f],[.09,.025,.09],0),a([i[0],i[1]+.34,i[2]+c*.21],[.015,.015,.21],0),a([i[0],i[1]+.15,i[2]+c*.03],[.04,.24,.03],0)}let s=t({vert:`
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
		}`,attributes:{position:r.pos,normal:r.nrm,k:r.k},elements:new Uint16Array(r.idx),cull:{enable:!1}});return function(){n(),s()}}});var O3=mt((QA,C3)=>{"use strict";var G8=tr().GLSL,{A:Th,BENCH:sd,SHAFT:ad,TREE:Pl,oculusGLSL:H8}=_a(),B8=ya(),Ah=Pl.sxz,z3=Pl.sy,R3=Pl.yaw;function U8(t){let e=new DataView(t),o=e.getUint32(4,!0),n=e.getUint32(8,!0),r=e.getUint32(12,!0),a=[0,1,2].map(u=>e.getFloat32(16+u*4,!0)),s=[0,1,2].map(u=>e.getFloat32(28+u*4,!0)),i=40,c=new Uint16Array(t,i,o*3);i+=o*6;let f=new Uint16Array(t,i,o*2);i+=o*4;let l=new Int8Array(t,i,o*3);i+=o*3,i=i+3&-4;let h=new Uint32Array(t,i,r);return{nV:o,nWood:n,nI:r,mn:a,sz:s,pos:c,uv:f,nrm:l,idx:h}}function j8(t){let e=new Float32Array(t.nV*3),o=new Float32Array(t.nV*3),n=new Float32Array(t.nV*2),r=new Float32Array(t.nV),a=Math.cos(R3),s=Math.sin(R3);for(let i=0;i<t.nV;i++){let c=(t.mn[0]+t.pos[i*3]/65535*t.sz[0])*Ah,f=(t.mn[1]+t.pos[i*3+1]/65535*t.sz[1])*z3,l=(t.mn[2]+t.pos[i*3+2]/65535*t.sz[2])*Ah;e[i*3]=Th.cx+a*c+s*l,e[i*3+1]=sd.soil+.02+f,e[i*3+2]=Th.zc-s*c+a*l;let h=t.nrm[i*3]/127/Ah,u=t.nrm[i*3+1]/127/z3,v=t.nrm[i*3+2]/127/Ah,p=Math.hypot(h,u,v)||1;h/=p,u/=p,v/=p,o[i*3]=a*h+s*v,o[i*3+1]=u,o[i*3+2]=-s*h+a*v,n[i*2]=t.uv[i*2]/65535,n[i*2+1]=t.uv[i*2+1]/65535,r[i]=i>=t.nWood?1:0}return{position:e,normal:o,uv:n,leaf:r,elements:t.idx}}function N3(t,e,o,n){let r=t.texture({data:[[n]],min:"linear",mag:"linear"});return fetch(e).then(a=>{if(!a.ok)throw new Error("Could not load "+e);return a.blob()}).then(a=>createImageBitmap(a,{premultiplyAlpha:"none"}).catch(()=>new Promise((s,i)=>{let c=new Image;c.onload=()=>s(c),c.onerror=i,c.src=URL.createObjectURL(a)}))).then(a=>r({data:a,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",...o})).catch(a=>console.error(a)),r}var nr=t=>t.toFixed(4),ic=Pl.crownC,cc=Pl.crownR,W8=`
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

const vec3 SHAFT = vec3(${nr(ad[0])}, ${nr(ad[1])}, ${nr(ad[2])});

void main() {
	vec3 p = position;
	// the air in the court is never quite still. The whole tree leans
	// with it, slowly, more the higher and the further out on a limb
	// (wood and leaves together, so every leaf stays on its twig) ...
	float h = max(p.y - 1.2, 0.0);
	vec2 out2 = p.xz - vec2(${nr(Th.cx)}, ${nr(Th.zc)});
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
	vec3 cc = vec3(${nr(ic[0])}, ${nr(ic[1])}, ${nr(ic[2])});
	vec3 cr = vec3(${nr(cc[0])}, ${nr(cc[1])}, ${nr(cc[2])});
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
}`,es=G0(),V8=`
precision highp float;
${G8}
uniform float time;
${es.lanternGLSL(es.TREE_LANTERN)}
const vec3 LANTERN_POS = vec3(${es.LANTERNS[es.TREE_LANTERN[0]].x.toFixed(3)}, ${es.LANTERNS[es.TREE_LANTERN[0]].y.toFixed(3)}, ${es.LANTERNS[es.TREE_LANTERN[0]].z.toFixed(3)});
uniform sampler2D leaves, bark;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_leaf, v_shade;
varying vec3 v_eye;

${H8()}

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
	vec3 rel = (v_pos - vec3(${nr(ic[0])}, ${nr(ic[1])}, ${nr(ic[2])})) / vec3(${nr(cc[0])}, ${nr(cc[1])}, ${nr(cc[2])});
	float outer = clamp(length(rel), 0.0, 1.0);
	float ao = mix(0.38, 1.0, outer * outer) * (0.75 + 0.25 * smoothstep(0.4, 2.0, v_pos.y));
	// and the trunk darkens where it meets the soil
	ao *= 0.6 + 0.4 * smoothstep(${nr(sd.soil)}, ${nr(sd.soil+.5)}, v_pos.y);

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
}`;C3.exports=t=>{let e=null,o=N3(t,"res/tree/leaves.webp",{wrapS:"clamp",wrapT:"clamp"},[60,80,40,0]),n=N3(t,"res/tree/bark.jpg",{wrapS:"repeat",wrapT:"repeat"},[90,80,70]),r=Date.now();return fetch("res/tree.bin").then(a=>{if(!a.ok)throw new Error("Could not load the tree");return a.arrayBuffer()}).then(a=>{let s=j8(U8(a));e=t({vert:W8,frag:V8,attributes:{position:s.position,normal:s.normal,uv:s.uv,leaf:s.leaf},elements:s.elements,uniforms:{leaves:o,bark:n,time:()=>B8.motion?typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-r)/1e3:0},cull:{enable:!1}})}).catch(a=>console.error(a)),function(){e&&e()}}});var Nh=mt((ZA,F3)=>{"use strict";var lc=U0(),X8="res/audio/go-tomorrow.mp3",Y8="res/audio/go-tomorrow.json",I3="gallery-sound",Lh=[lc.PIANO.x,1,lc.PIANO.z],K8=lc.R,Kr=!0;try{localStorage.getItem(I3)==="off"&&(Kr=!1)}catch(t){}var Tn=null,gr=null,Il=null,$l=null,os=null,E0=null,js=!1,zh=null,P3=[],Q8=(typeof performance!="undefined"?performance.now():0)/1e3;function Z8(t){let e=Math.floor(t.sampleRate*2.6),o=t.createBuffer(2,e,t.sampleRate),n=12345,r=()=>(n=n*16807%2147483647,n/10737418235e-1-1);for(let a=0;a<2;a++){let s=o.getChannelData(a),i=0;for(let c=0;c<e;c++){let f=c/t.sampleRate,l=.25+.6*Math.exp(-f*2.2);i+=(r()-i)*l,s[c]=i*Math.pow(1-c/e,2.2)*Math.exp(-f*1.5)*(f<.012?f/.012:1)}}return o}function J8(){if(Tn)return;Tn=new Audio,Tn.src=X8,Tn.loop=!0,Tn.preload="auto",Tn.crossOrigin="anonymous";let t=window.AudioContext||window.webkitAudioContext;if(!t){Tn.volume=.2;return}try{gr=new t;let e=gr.createMediaElementSource(Tn);os=gr.createBiquadFilter(),os.type="lowpass",os.frequency.value=1500,os.Q.value=.4,Il=gr.createGain(),Il.gain.value=0,$l=gr.createGain(),$l.gain.value=0;let o=gr.createConvolver();o.buffer=Z8(gr),E0=gr.createGain(),E0.gain.value=Kr?1:0,e.connect(os),os.connect(Il),Il.connect(E0),os.connect(o),o.connect($l),$l.connect(E0),E0.connect(gr.destination)}catch(e){gr=null,Tn.volume=.2}}function $3(){if(js||!Kr)return;J8();let t=()=>Tn.play().then(()=>{js=!0}).catch(()=>{});gr&&gr.state==="suspended"?gr.resume().then(t,t):t()}typeof window!="undefined"&&(["pointerdown","pointerup","touchend","keydown","click"].forEach(t=>window.addEventListener(t,$3,{capture:!0,passive:!0})),document.addEventListener("visibilitychange",()=>{!Tn||!js||(document.hidden?Tn.pause():Kr&&Tn.play().catch(()=>{}))}),fetch(Y8).then(t=>t.ok?t.json():null).then(t=>{if(!t)return;let e=o=>{let n=o.map(s=>s[2]).sort((s,i)=>s-i),r=n[Math.floor(n.length*.03)]||0,a=n[Math.floor(n.length*.97)]||1;return o.map(s=>({t:s[0],w:s[1],x:Math.max(0,Math.min(1,(s[2]-r)/Math.max(a-r,.001)))}))};zh={left:e(t.l),right:e(t.r),level:t.e,dur:t.d}}).catch(()=>{}));var Rh={AT:Lh,listen(t){if(!gr||!js)return;let e=t[0]-Lh[0],o=t[2]-Lh[2],n=Math.hypot(e,o,(t[1]-Lh[1])*.5),r=Math.hypot(t[0]-lc.C.x,t[2]-lc.C.z)<K8+.4||t[0]<-.2&&Math.abs(t[2]-lc.C.z)<4,a,s,i;if(r){let f=Math.max(0,Math.min(1,(n-1.2)/5));a=1-.3*f,s=.22+.16*f,i=16e3}else{let f=5.5/Math.max(n,5.5),l=t[0]>14.2&&t[2]<12?.6:1;a=.5*Math.pow(f,1.5)*l,s=.34*Math.pow(f,.95)*l,i=(650+9e3*Math.pow(f,1.3))*(l<1?.7:1)}let c=gr.currentTime;Il.gain.setTargetAtTime(a,c,.35),$l.gain.setTargetAtTime(s,c,.35),os.frequency.setTargetAtTime(i,c,.35)},time(){let t=zh&&zh.dur||158;return Tn&&js&&!Tn.paused||Tn&&js?Tn.currentTime%t:((performance.now()/1e3-Q8)%t+t)%t},get cues(){return zh},get on(){return Kr},set(t){Kr=!!t;try{localStorage.setItem(I3,Kr?"on":"off")}catch(e){}Kr?($3(),Tn&&js&&Tn.play().catch(()=>{}),E0&&E0.gain.setTargetAtTime(1,gr.currentTime,.2)):E0?E0.gain.setTargetAtTime(0,gr.currentTime,.15):Tn&&Tn.pause(),P3.forEach(e=>e(Kr))},toggle(){Rh.set(!Kr)},onChange(t){P3.push(t)},button(t){let e='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="M15.5 9a4.2 4.2 0 0 1 0 6M18 6.5a7.8 7.8 0 0 1 0 11"/></svg>',o='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="M16 9.5l5 5M21 9.5l-5 5"/></svg>',n=document.createElement("button");n.type="button",n.className=t+" sound-toggle";let r=()=>{n.innerHTML=Kr?e:o,n.setAttribute("aria-label",Kr?"Turn the music off":"Turn the music on"),n.title=Kr?"Music on":"Music off",n.setAttribute("aria-pressed",Kr?"true":"false")};return r(),Rh.onChange(r),["mousedown","pointerdown"].forEach(a=>n.addEventListener(a,s=>s.stopPropagation())),n.addEventListener("click",a=>{a.stopPropagation(),Rh.toggle()}),n}};F3.exports=Rh});var Y3=mt((JA,hd)=>{"use strict";var ld=tr().GLSL,{A:D3,BENCH:j3,oculusGLSL:W3}=_a(),q3=ya(),V3=U0(),G3=Nh(),tS=1.74,eS=1.877,Mr=tS/eS,Vs={x:D3.cx-1.22,z:D3.zc+.02,hipY:j3.seat+.115},Zo=(t,e)=>[t[3]*e[0]+t[0]*e[3]+t[1]*e[2]-t[2]*e[1],t[3]*e[1]-t[0]*e[2]+t[1]*e[3]+t[2]*e[0],t[3]*e[2]+t[0]*e[1]-t[1]*e[0]+t[2]*e[3],t[3]*e[3]-t[0]*e[0]-t[1]*e[1]-t[2]*e[2]],Ba=t=>[-t[0],-t[1],-t[2],t[3]],rs=(t,e)=>{let o=Math.hypot(t[0],t[1],t[2])||1,n=Math.sin(e/2);return[t[0]/o*n,t[1]/o*n,t[2]/o*n,Math.cos(e/2)]},Ch=(t,e,o)=>Zo(rs([0,0,1],o*Math.PI/180),Zo(rs([0,1,0],e*Math.PI/180),rs([1,0,0],t*Math.PI/180))),fd=t=>{let e=Math.hypot(...t)||1;return t.map(o=>o/e)},a0=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],Dl=(t,e)=>[t[0]+e[0],t[1]+e[1],t[2]+e[2]],ns=(t,e)=>[t[0]*e,t[1]*e,t[2]*e],cd=(t,e)=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2],Ph=t=>Math.hypot(t[0],t[1],t[2]),Fl=t=>{let e=Ph(t)||1;return[t[0]/e,t[1]/e,t[2]/e]},$h=(t,e)=>[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]],oS=(t,e)=>{let o=[t[0],t[1],t[2]],n=ns($h(o,e),2);return Dl(Dl(e,ns(n,t[3])),$h(o,n))},nS=(t,e)=>{let o=$h(t,e),n=1+cd(t,e);return n<1e-6?[0,0,1,0]:fd([o[0],o[1],o[2],n])};function ca(t,e,o){let[n,r,a,s]=e,i=n*n,c=r*r,f=a*a,l=n*r,h=n*a,u=r*a,v=s*n,p=s*r,d=s*a;return[(1-2*(c+f))*o[0],2*(l+d)*o[0],2*(h-p)*o[0],0,2*(l-d)*o[1],(1-2*(i+f))*o[1],2*(u+v)*o[1],0,2*(h+p)*o[2],2*(u-v)*o[2],(1-2*(i+c))*o[2],0,t[0],t[1],t[2],1]}function jn(t,e){let o=new Array(16);for(let n=0;n<4;n++)for(let r=0;r<4;r++)o[n*4+r]=t[r]*e[n*4]+t[4+r]*e[n*4+1]+t[8+r]*e[n*4+2]+t[12+r]*e[n*4+3];return o}function id(t){let e=Math.hypot(t[0],t[1],t[2]),o=Math.hypot(t[4],t[5],t[6]),n=Math.hypot(t[8],t[9],t[10]),r=t[0]/e,a=t[1]/e,s=t[2]/e,i=t[4]/o,c=t[5]/o,f=t[6]/o,l=t[8]/n,h=t[9]/n,u=t[10]/n,v=r+c+u,p;if(v>0){let d=Math.sqrt(v+1)*2;p=[(f-h)/d,(l-s)/d,(a-i)/d,d/4]}else if(r>c&&r>u){let d=Math.sqrt(1+r-c-u)*2;p=[d/4,(i+a)/d,(l+s)/d,(f-h)/d]}else if(c>u){let d=Math.sqrt(1+c-r-u)*2;p=[(i+a)/d,d/4,(h+f)/d,(l-s)/d]}else{let d=Math.sqrt(1+u-r-c)*2;p=[(l+s)/d,(h+f)/d,d/4,(a-i)/d]}return fd(p)}var Ih={LeftUpLeg:[-62,10,0],LeftLeg:[122,0,0],LeftFoot:[30,0,0],RightUpLeg:[0,-3,-2],RightLeg:[4,0,0],RightFoot:[35,-12,0],Neck:[10,0,0],Head:[6,0,0],LeftShoulder:[0,0,6],LeftArm:[-112.4,3.4,62.5],LeftForeArm:[0,-122.6,0],LeftHand:[0,0,-10],RightShoulder:[0,0,0],RightArm:[0,78,-8],RightForeArm:[0,14,0],RightHand:[0,0,0]};for(let t of["Left","Right"]){let e=t==="Left"?-1:1,o=t==="Left"?1:.35;["Index","Middle","Ring","Pinky"].forEach((n,r)=>{Ih[t+"Hand"+n+"1"]=[0,0,e*(18+r*6)*o],Ih[t+"Hand"+n+"2"]=[0,0,e*(26+r*6)*o],Ih[t+"Hand"+n+"3"]=[0,0,e*16*o]})}function Ws(t,e,o){let n=t-e;return n-=Math.round(n),Math.exp(-(n/o)*(n/o))}function H3(t){let e=9+20*Math.cos(2*Math.PI*t),o=4+13*Ws(t,.14,.07)+57*Ws(t,.72,.12),n=5*Ws(t,.06,.04)-9*Ws(t,.42,.12)+17*Ws(t,.62,.05)-3*Ws(t,.85,.1),r=-26*Ws(t,.58,.06);return{hip:e,knee:o,ankle:n,toe:r}}function rS(t){let e=(t%1+1)%1,o=H3(e),n=H3(e+.5),r=Math.cos(2*Math.PI*e),a=Math.sin(2*Math.PI*e);return{swing:{LeftArm:[16*r,0,0],RightArm:[-16*r,0,0],LeftForeArm:[0,-14-8*Math.max(0,-r),0],RightForeArm:[0,14+8*Math.max(0,r),0]},pose:{Hips:[0,5*a,1.5*Math.cos(4*Math.PI*e)],Spine1:[3,-4*a,0],LeftUpLeg:[-o.hip,0,0],LeftLeg:[o.knee,0,0],LeftFoot:[o.ankle,0,0],LeftToeBase:[o.toe,0,0],RightUpLeg:[-n.hip,0,0],RightLeg:[n.knee,0,0],RightFoot:[n.ankle,0,0],RightToeBase:[n.toe,0,0],LeftArm:[0,0,-78],RightArm:[0,0,78],LeftHand:[0,0,-8],RightHand:[0,0,8]},sway:.022*r}}var B3=`
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
}`,Fh=G0(),U3=`#extension GL_OES_standard_derivatives : enable
precision highp float;
${ld}
uniform float time;
${V3.roomGLSL()}
${Fh.lanternGLSL(Fh.TREE_LANTERN)}
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
${W3()}
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
}`;function aS(t,e){let o=t.texture({data:[[[120,100,90,255]]],min:"linear",mag:"linear"});return fetch(e).then(n=>{if(!n.ok)throw new Error("Could not load "+e);return n.blob()}).then(n=>createImageBitmap(n,{premultiplyAlpha:"none"}).catch(()=>new Promise((r,a)=>{let s=new Image;s.onload=()=>r(s),s.onerror=a,s.src=URL.createObjectURL(n)}))).then(n=>o({data:n,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrapS:"clamp",wrapT:"clamp"})).catch(n=>console.error(n)),o}var X3={w:.13,h:.2},Oh=t=>.011*(1-Math.pow(1-t,3));function sS(){let t=[],e=[],o=[],n=[],r=[],a=(d,m,g,y,b,w,_)=>{let M=t.length/3;[d,m,g,y].forEach((A,O)=>{t.push(...A),e.push(...b),o.push(..._[O]),n.push(w)}),r.push(M,M+1,M+2,M,M+2,M+3)},{w:s,h:i}=X3,c=i/2,f=[[0,1],[1,1],[1,0],[0,0]],l=-.006,h=s+.001,u=c+.001;a([0,l,-u],[h,l,-u],[h,l,u],[0,l,u],[0,-1,0],1,[[0,1],[1,1],[1,0],[0,0]]),a([0,l+.001,-u],[0,l+.001,u],[h,l+.001,u],[h,l+.001,-u],[0,1,0],2,f),a([-h,l,-u],[0,l,-u],[0,l,u],[-h,l,u],[0,-1,0],2,f),a([-h,l+.001,-u],[-h,l+.001,u],[0,l+.001,u],[0,l+.001,-u],[0,1,0],2,f);let v=8;for(let d of[1,-1]){for(let g=0;g<v;g++){let y=g/v,b=(g+1)/v,w=(.002+y*(s-.002))*d,_=(.002+b*(s-.002))*d,M=Oh(y),A=Oh(b),O=d>0?y:1-y,R=d>0?b:1-b,q=1,F=-(A-M)/(_-w);a([w,M,-c],[_,A,-c],[_,A,c],[w,M,c],[F,q,0],3,[[O,1],[R,1],[R,0],[O,0]]),a([w,l+.001,c],[_,l+.001,c],[_,A,c],[w,M,c],[0,0,1],4,f),a([w,M,-c],[_,A,-c],[_,l+.001,-c],[w,l+.001,-c],[0,0,-1],4,f)}let m=s*d;a([m,l+.001,-c],[m,Oh(1),-c],[m,Oh(1),c],[m,l+.001,c],[d,0,0],4,f)}let p=10;for(let d=0;d<p;d++){let m=d/p,g=(d+1)/p,y=t.length/3;for(let[b,w]of[[m,-c],[g,-c],[g,c],[m,c]])t.push(b,0,w),e.push(0,1,0),o.push(b,(w+c)/i),n.push(5);r.push(y,y+1,y+2,y,y+2,y+3)}return{pos:t,nrm:e,uv:o,kind:n,idx:r}}function iS(){if(typeof document=="undefined")return null;let t=document.createElement("canvas");t.width=512,t.height=768;let e=t.getContext("2d");e.fillStyle="#ebe5d8",e.fillRect(0,0,512,768);let o=7,n=()=>(o=o*16807%2147483647,o/2147483647),r=(s,i,c,f,l,h,u)=>{for(let v=0;v<h;v++){let p=s+(n()-.5)*c*2,d=i+(n()-.5)*f*2,m=20+n()*60,g=e.createRadialGradient(p,d,0,p,d,m);g.addColorStop(0,`rgba(${l},${u})`),g.addColorStop(1,`rgba(${l},0)`),e.fillStyle=g,e.fillRect(p-m,d-m,m*2,m*2)}},a=e.createRadialGradient(236,280,10,256,300,125);a.addColorStop(0,"#3d4866"),a.addColorStop(1,"#232a3d"),e.fillStyle=a,e.beginPath(),e.arc(256,300,122,0,Math.PI*2),e.fill(),e.fillStyle="#b8873f",e.beginPath(),e.moveTo(64,452);for(let s=64;s<=448;s+=16)e.lineTo(s,446+n()*4);for(let s=448;s>=64;s-=16)e.lineTo(s,466+n()*4);e.fill(),e.strokeStyle="#2b2f3a",e.lineCap="round",[[120,392,500,5],[160,352,530,4],[205,307,558,3]].forEach(([s,i,c,f])=>{e.lineWidth=f,e.beginPath(),e.moveTo(s,c),e.lineTo(i,c),e.stroke()});for(let s=0;s<9e3;s++)e.fillStyle=`rgba(90,80,60,${n()*.05})`,e.fillRect(n()*512,n()*768,1,1);return t}var cS=`
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
		float r = u * ${X3.w.toFixed(3)};
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
}`,lS=`
precision highp float;
${ld}
uniform float time;
${Fh.lanternGLSL(Fh.TREE_LANTERN)}
uniform sampler2D cover;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_kind;
${W3()}
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
}`;function fS(){let t=[],e=[],o=[],n=[],r=[],a=[.36,.11,.07],s=[.1,.07,.05],i=[.78,.76,.72],c=[.55,.41,.26],f=[.8,.55,.22],l=[[0,-.15,f,2],[.0012,-.147,f,2],[.004,-.138,f,2],[.0058,-.125,c,2],[.0064,-.112,c,2],[.006,-.104,c,2],[.0066,-.102,i,1],[.0066,-.08,i,1],[.0062,-.074,i,1],[.0068,-.072,i,1],[.007,-.066,i,1],[.0058,-.064,a,0],[.0062,-.04,a,0],[.0058,0,a,0],[.0046,.06,a,0],[.0036,.11,a,0],[.003,.13,s,0],[.0026,.136,s,0],[0,.139,s,0]],h=16;for(let u=0;u<l.length;u++){let[v,p,d,m]=l[u],g=m===2?.45:1;for(let y=0;y<=h;y++){let b=y/h*Math.PI*2;t.push(Math.cos(b)*v,p,Math.sin(b)*v*g);let w=Math.max(u-1,0),_=Math.min(u+1,l.length-1),M=l[_][0]-l[w][0],A=l[_][1]-l[w][1],O=Math.hypot(M,A)||1;e.push(Math.cos(b)*A/O,-M/O,Math.sin(b)*A/O/g),o.push(...d),n.push(m)}}for(let u=0;u<l.length-1;u++)for(let v=0;v<h;v++){let p=u*(h+1)+v,d=p+h+1;r.push(p,d,p+1,p+1,d,d+1)}return{pos:t,nrm:e,col:o,mat:n,idx:r}}var hS=`
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
}`,uS=`
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
}`,dS=`
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
}`,pS=`
precision highp float;
uniform float pulse;
varying vec2 v_c;
void main() {
	float d = length(v_c);
	float g = exp(-d * d * 6.0) * 0.10 + exp(-d * d * 30.0) * 0.08;
	gl_FragColor = vec4(vec3(1.0, 0.80, 0.45) * g * (0.75 + 0.25 * pulse), 1.0);
}`;hd.exports=t=>{let e="res/avatar/",o=null,n=Date.now(),r=()=>typeof window!="undefined"&&window.__streetClock!==void 0?window.__streetClock:(Date.now()-n)/1e3,a={glowPos:[Vs.x,1.9,Vs.z],glow:0};Promise.all([fetch(e+"avatar.json").then(R=>R.json()),fetch(e+"avatar.bin").then(R=>R.arrayBuffer())]).then(([R,q])=>{o=f(R,q)}).catch(R=>console.error(R));let s=null;Promise.all([fetch(e+"motion.json").then(R=>R.ok?R.json():null),fetch(e+"motion.bin").then(R=>R.ok?R.arrayBuffer():null)]).then(([R,q])=>{if(!R||!q)return;let F={};for(let K in R.clips){let G=R.clips[K],X=G.bones.length,dt=new Float32Array(q,G.mean,X*4),Ot={};G.bones.forEach((zt,gt)=>{Ot[zt]=[dt[gt*4],dt[gt*4+1],dt[gt*4+2],dt[gt*4+3]]}),F[K]=Object.assign({},G,{Q:new Int16Array(q,G.q,G.frames*X*4),H:new Float32Array(q,G.hips,G.frames*3),meanQ:Ot})}s=F}).catch(()=>{});function i(R,q){let F=R.frames,K=R.bones.length,G=(q%F+F)%F,X=Math.floor(G)%F,dt=(X+1)%F,Ot=G-Math.floor(G),zt={};for(let Wt=0;Wt<K;Wt++){let ze=(X*K+Wt)*4,Ee=(dt*K+Wt)*4,Ye=R.Q[ze],_e=R.Q[ze+1],ho=R.Q[ze+2],So=R.Q[ze+3],Ko=R.Q[Ee],Jt=R.Q[Ee+1],ge=R.Q[Ee+2],Ce=R.Q[Ee+3];Ye*Ko+_e*Jt+ho*ge+So*Ce<0&&(Ko=-Ko,Jt=-Jt,ge=-ge,Ce=-Ce),zt[R.bones[Wt]]=fd([Ye+(Ko-Ye)*Ot,_e+(Jt-_e)*Ot,ho+(ge-ho)*Ot,So+(Ce-So)*Ot])}let gt=X*3,ct=dt*3;return{q:zt,hips:[R.H[gt]+(R.H[ct]-R.H[gt])*Ot,R.H[gt+1]+(R.H[ct+1]-R.H[gt+1])*Ot,R.H[gt+2]+(R.H[ct+2]-R.H[gt+2])*Ot]}}let c=t.texture({data:[[[255,255,255,255]]]});function f(R,q){let F=(Z,Pt)=>new Float32Array(q,Z,Pt),K=R.bones,G=K.length,X={};K.forEach((Z,Pt)=>{X[Z.name]=Pt});let dt=[];for(let Z=0;Z<G;Z++)dt.push(Array.from(F(R.ibm+Z*64,16)));let Ot=K.map(Z=>ca(Z.t,Z.r,Z.s)),zt=[];for(let Z=0;Z<G;Z++){let Pt=K[Z].parent;zt[Z]=Pt<0?Ot[Z]:jn(zt[Pt],Ot[Z])}let gt=zt.map(id),ct=R.meshes.map(Z=>{let Pt=F(Z.pos,Z.n*3),Dt=F(Z.nrm,Z.n*3),Nt=F(Z.uv,Z.n*2),le=new Uint8Array(q,Z.jnt,Z.n*4),Ae=F(Z.wgt,Z.n*4),Me=new Uint16Array(q,Z.idx,Z.ni),pe={};for(let be in Z.morphs){let Go=Z.morphs[be];pe[be]={idx:new Uint16Array(q,Go.idx,Go.n),d:F(Go.d,Go.n*3)}}let $e=new Float32Array(Z.n*3),ye=new Float32Array(Z.n*3),We=new Float32Array(Z.n*3),ke=t.buffer({data:$e,usage:"dynamic"}),Te=t.buffer({data:ye,usage:"dynamic"}),Ke=/avaturn_hair/.test(Z.name),ve=/EyeAO|Eyelash/.test(Z.name),co=/Body|Head/.test(Z.name),Ro=Z.kind||0;return{m:Z,pos:Pt,nrm:Dt,uv:Nt,jnt:le,wgt:Ae,idx:Me,morphs:pe,outP:$e,outN:ye,work:We,pb:ke,nbuf:Te,tex:Z.tex?aS(t,e+Z.tex):c,kind:Ro,alphaScale:/EyeAO/.test(Z.name)?.25:1,blend:Z.blend||Ke,alphaCut:Ke?.35:ve?.02:0,skin:co?1:0}}),Wt=t({vert:B3,frag:U3,attributes:{position:t.prop("pb"),normal:t.prop("nb"),uv:t.prop("uv")},elements:t.prop("el"),uniforms:{tex:t.prop("tex"),alphaCut:t.prop("alphaCut"),skin:t.prop("skin"),kind:t.prop("kind"),alphaScale:t.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow,boothLamp:()=>M&&!A?M.lamp:[0,0,0,0],court:()=>M||A?0:1,candle:()=>A?1:0},cull:{enable:!1}}),ze=t({vert:B3,frag:U3,attributes:{position:t.prop("pb"),normal:t.prop("nb"),uv:t.prop("uv")},elements:t.prop("el"),uniforms:{tex:t.prop("tex"),alphaCut:t.prop("alphaCut"),skin:t.prop("skin"),kind:t.prop("kind"),alphaScale:t.prop("alphaScale"),glowPos:()=>a.glowPos,glowLight:()=>a.glow,boothLamp:()=>M&&!A?M.lamp:[0,0,0,0],court:()=>M||A?0:1,candle:()=>A?1:0},cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"one minus src alpha"}}}),Ee=.3;for(let Z of ct)if(Z.uvBuf=t.buffer(Z.uv),/Body/.test(Z.m.name)){let Pt=[],Dt=[];for(let Nt=0;Nt<Z.idx.length;Nt+=3){let le=Z.idx[Nt],Ae=Z.idx[Nt+1],Me=Z.idx[Nt+2];(Z.pos[le*3+1]<Ee&&Z.pos[Ae*3+1]<Ee&&Z.pos[Me*3+1]<Ee?Dt:Pt).push(le,Ae,Me)}Z.el=t.elements({data:new Uint16Array(Pt),type:"uint16"}),Dt.length&&(Z.sockEl=t.elements({data:new Uint16Array(Dt),type:"uint16"}))}else Z.el=t.elements({data:Z.idx,type:"uint16"});let Ye=zt[X.Hips],_e=rs([1,0,0],-Math.PI/2),ho=jn(ca([Vs.x-Ye[12]*Mr,Vs.hipY-Ye[14]*Mr,Vs.z+Ye[13]*Mr],_e,[1,1,1]),ca([0,0,0],[0,0,0,1],[Mr,Mr,Mr])),So=new Array(G),Ko=-1,Jt=(Z,Pt,Dt)=>jn(ca([Z,0,Pt],rs([0,1,0],Dt),[1,1,1]),ca([0,0,0],[0,0,0,1],[Mr,Mr,Mr])),ge=["LeftFoot","RightFoot","LeftToeBase","RightToeBase"].map(Z=>X[Z]),Ce=ge.map(Z=>zt[Z][13]*Mr);function ro(Z){if(s&&s.walk)return wo(Z);let Pt=rS(Z.phase),Dt={},Nt=ye=>{for(let We in ye){let ke=ye[We],Te=Ch(ke[0],ke[1],ke[2]);Dt[We]=Dt[We]?Zo(Dt[We],Te):Te}};Nt(Pt.swing),Nt(Pt.pose);let le=Math.cos(Z.heading),Ae=-Math.sin(Z.heading),Me=Jt(Z.x+le*Pt.sway,Z.z+Ae*Pt.sway,Z.heading),pe=new Array(G);for(let ye=0;ye<G;ye++){let We=K[ye],ke=Ot[ye],Te=Dt[We.name];if(Te){let Ke=gt[ye],ve=Zo(Ba(Ke),Zo(Te,Ke));ke=ca(We.t,Zo(We.r,ve),We.s)}pe[ye]=We.parent<0?jn(Me,ke):jn(pe[We.parent],ke)}let $e=1/0;ge.forEach((ye,We)=>{$e=Math.min($e,pe[ye][13]-Ce[We])});for(let ye=0;ye<G;ye++)pe[ye]=pe[ye].slice(),pe[ye][13]-=$e,So[ye]=jn(pe[ye],dt[ye]);return{blink:0}}function wo(Z){let Pt=s.walk,Dt=i(Pt,(Z.phase+Pt.phase0)*Pt.frames),Nt=Jt(Z.x,Z.z,Z.heading),le=new Array(G),Ae=X.Hips;for(let pe=0;pe<G;pe++){let $e=K[pe],ye=Ot[pe],We=Dt.q[$e.name];if(We){let ke=gt[pe],Te=Zo(Ba(ke),Zo(We,ke)),Ke=pe===Ae?[$e.t[0]+Dt.hips[0],$e.t[1]+Dt.hips[1],$e.t[2]+Dt.hips[2]]:$e.t;ye=ca(Ke,Zo($e.r,Te),$e.s)}le[pe]=$e.parent<0?jn(Nt,ye):jn(le[$e.parent],ye)}let Me=1/0;ge.forEach((pe,$e)=>{Me=Math.min(Me,le[pe][13]-Ce[$e])});for(let pe=0;pe<G;pe++)le[pe]=le[pe].slice(),le[pe][13]-=Me,So[pe]=jn(le[pe],dt[pe]);return{blink:0}}function Oe(Z,Pt){let Dt=Math.sin(Z*2*Math.PI/4.6),Nt=Math.sin(Z*.37)*.6+Math.sin(Z*.83+1)*.4,le={LeftUpLeg:[-86,-6,0],RightUpLeg:[-84,7,0],LeftLeg:[88,0,0],RightLeg:[82,0,0],LeftFoot:[-4,0,0],RightFoot:[-2,0,0],Spine:[6,0,0],Spine1:[5+Dt*.8,0,0],Spine2:[4+Dt*.6,0,0],Neck:[10,0,0],Head:[12+Nt*2,Nt*2.5,0],LeftArm:[0,0,-72],RightArm:[0,0,72],LeftForeArm:[0,-62,0],RightForeArm:[0,62,0],LeftHand:[0,0,-10],RightHand:[0,0,10]},Ae={};for(let ke in le){let Te=le[ke];Ae[ke]=Ch(Te[0],Te[1],Te[2])}let Me=Jt(Pt.x,Pt.z,Pt.heading),pe=new Array(G);for(let ke=0;ke<G;ke++){let Te=K[ke],Ke=Ot[ke],ve=Ae[Te.name];if(ve){let co=gt[ke],Ro=Zo(Ba(co),Zo(ve,co));Ke=ca(Te.t,Zo(Te.r,Ro),Te.s)}pe[ke]=Te.parent<0?jn(Me,Ke):jn(pe[Te.parent],Ke)}let ye=pe[X.Hips][13]-(Pt.y+.1);for(let ke=0;ke<G;ke++)pe[ke]=pe[ke].slice(),pe[ke][13]-=ye,So[ke]=jn(pe[ke],dt[ke]);let We=Z%4.1;return{blink:We<.16?Math.sin(We/.16*Math.PI):0}}let xe=Z=>[zt[Z][12],zt[Z][13],zt[Z][14]],yt=(Z,Pt)=>{let Dt=Fl(Z),Nt=Fl(a0(Pt,ns(Dt,cd(Pt,Dt)))),le=$h(Dt,Nt);return id([Dt[0],Dt[1],Dt[2],0,Nt[0],Nt[1],Nt[2],0,le[0],le[1],le[2],0,0,0,0,1])},se={};for(let Z of["Left","Right"]){let Pt=X[Z+"Arm"],Dt=X[Z+"ForeArm"],Nt=X[Z+"Hand"],le=X[Z+"HandMiddle1"];se[Z]={a:Pt,f:Dt,h:Nt,upper:Ph(a0(xe(Dt),xe(Pt)))*Mr,fore:Ph(a0(xe(Nt),xe(Dt)))*Mr,dir0:Fl(a0(xe(Dt),xe(Pt))),qf0:yt(a0(xe(Nt),xe(Dt)),[0,1,0]),qh0:yt(a0(xe(le),xe(Nt)),[0,1,0])}}let Pe={};for(let Z of["Left","Right"])Pe[se[Z].a]={side:Z,part:0},Pe[se[Z].f]={side:Z,part:1},Pe[se[Z].h]={side:Z,part:2};function de(Z,Pt,Dt){if(!Z||!Z.length)return{x:.5,lift:0,press:0,finger:1,busy:0};let Nt=0,le=Z.length-1,Ae=-1;for(;Nt<=le;){let Go=Nt+le>>1;Z[Go].t<=Pt?(Ae=Go,Nt=Go+1):le=Go-1}let Me=Z[Z.length-1],pe=Z[0],$e=Ae>=0?Z[Ae]:{t:Me.t-Dt,x:Me.x,w:Me.w},ye=Ae+1<Z.length?Z[Ae+1]:{t:pe.t+Dt,x:pe.x,w:pe.w},We=Math.max(.05,ye.t-$e.t),ke=Math.min(.14,We*.45),Te=Math.max(0,Math.min(1,(Pt-$e.t-ke)/Math.max(We-ke-.03,.02))),Ke=Te*Te*(3-2*Te),ve=Pt-$e.t,co=(.55+.45*$e.w)*Math.exp(-ve/.11),Ro=ye.t-Pt,be=Ro<.05?(.55+.45*ye.w)*(1-Ro/.05):0;return{x:$e.x+(ye.x-$e.x)*Ke,lift:Math.sin(Math.PI*Te)*Math.min(.05,.012+We*.03)*(We>2.5?.4:1),press:Math.max(co,be),finger:be>co?((Ae+1)*7+3)%4:(Math.max(Ae,0)*7+3)%4,busy:Math.exp(-ve/.9)}}let Qt={lean:0,turn:0,nod:0,pedal:0,last:-1},Eo=["Index","Middle","Ring","Pinky"];function E(Z){let Pt=V3.PLAY,Dt=G3.cues,Nt=G3.time(),le=Dt&&Dt.dur||158,Ae={Left:de(Dt&&Dt.left,Nt,le),Right:de(Dt&&Dt.right,Nt,le)},Me=.35;if(Dt&&Dt.level&&Dt.level.length){let oo=Nt*8,mo=Math.floor(oo)%Dt.level.length,$n=(mo+1)%Dt.level.length;Me=Dt.level[mo]+(Dt.level[$n]-Dt.level[mo])*(oo-Math.floor(oo))}let pe=Qt.last<0?0:Math.min(.1,Math.max(0,Z-Qt.last));Qt.last=Z;let $e=oo=>Math.min(1,pe*oo);Qt.lean+=(Me-Qt.lean)*$e(1.2),Qt.turn+=(Ae.Right.busy-Ae.Left.busy-Qt.turn)*$e(1.5),Qt.nod+=(Math.max(Ae.Right.press,Ae.Left.press*.7)-Qt.nod)*$e(6),Qt.pedal+=((Ae.Left.busy>.35?1:.15)-Qt.pedal)*$e(5);let ye=Math.sin(Z*2*Math.PI/4.6),We=Math.sin(Nt*.41)*.6+Math.sin(Nt*.17+1)*.4,ke={LeftUpLeg:[-80,-9,0],RightUpLeg:[-77,9,0],LeftLeg:[86,0,0],RightLeg:[64,0,0],LeftFoot:[-2,0,0],RightFoot:[12-10*Qt.pedal,0,0],Spine:[9+3.5*Qt.lean+We*1.6,Qt.turn*2.5,-Qt.turn*1.6],Spine1:[7+ye*.8+2.5*Qt.lean,Qt.turn*2.5,-Qt.turn*1.2],Spine2:[6+ye*.6+We*.8,Qt.turn*1.5,0],Neck:[13+3*Qt.lean,Qt.turn*3,0],Head:[15+Qt.nod*3.5+We*1.5,Qt.turn*5,We*1.5]};for(let oo of["Left","Right"]){let mo=oo==="Left"?-1:1,$n=Ae[oo];Eo.forEach((j,ht)=>{let Xt=ht===$n.finger?$n.press:$n.press*.2;ke[oo+"Hand"+j+"1"]=[0,0,mo*(20+3*ht+20*Xt)],ke[oo+"Hand"+j+"2"]=[0,0,mo*(26+4*ht-6*Xt)],ke[oo+"Hand"+j+"3"]=[0,0,mo*14]}),ke[oo+"HandThumb1"]=[0,mo*-18,mo*10]}let Te={};for(let oo in ke){let mo=ke[oo];Te[oo]=Ch(mo[0],mo[1],mo[2])}let Ke=zt[X.Hips][13]*Mr,ve=jn(ca([Pt.stoolX,Pt.stoolTop+.1-Ke,Pt.stoolFront+.15],rs([0,1,0],Pt.heading),[1,1,1]),ca([0,0,0],[0,0,0,1],[Mr,Mr,Mr])),co=(Pt.keyX0+Pt.keyX1)/2,Ro={};for(let oo of["Left","Right"]){let mo=Ae[oo],$n=oo==="Left"?co-.4+.33*mo.x:co+.07+.33*mo.x;Ro[oo]=[$n,Pt.keyTop+.062+mo.lift-mo.press*.012,Pt.keyFront+.075]}let be=new Array(G),Go={},pa=[0,1,0];for(let oo=0;oo<G;oo++){let mo=K[oo],$n=Ot[oo],j=Te[mo.name],ht=Pe[oo];if(ht){let Xt=se[ht.side];if(ht.part===0){let ie=be[mo.parent],fe=jn(ie,Ot[oo]),nn=[fe[12],fe[13],fe[14]],ar=Zo(id(ie),Ba(gt[mo.parent])),kr=a0(Ro[ht.side],nn),rn=Ph(kr),yr=(Xt.upper+Xt.fore)*.995;rn>yr&&(kr=ns(kr,yr/rn),rn=yr);let an=ns(kr,1/rn),po=(Xt.upper*Xt.upper-Xt.fore*Xt.fore+rn*rn)/(2*rn),Kn=Math.sqrt(Math.max(0,Xt.upper*Xt.upper-po*po)),Wo=[ht.side==="Left"?-.6:.6,-.8,.3];Wo=Fl(a0(Wo,ns(an,cd(Wo,an))));let Fn=Dl(nn,Dl(ns(an,po),ns(Wo,Kn)));Xt.T=Dl(nn,kr),Xt.elbow=Fn;let Hr=Fl(a0(Fn,nn)),Br=Zo(nS(oS(ar,Xt.dir0),Hr),ar);Go[oo]=Br,j=Zo(Ba(ar),Br)}else if(ht.part===1){let ie=Zo(yt(a0(Xt.T,Xt.elbow),pa),Ba(Xt.qf0));Go[oo]=ie,j=Zo(Ba(Go[mo.parent]),ie)}else{let ie=Ae[ht.side],fe=Zo(yt([ht.side==="Left"?.12:-.12,-.2-.1*ie.press,-1],pa),Ba(Xt.qh0));Go[oo]=fe,j=Zo(Ba(Go[mo.parent]),fe)}}if(j){let Xt=gt[oo],ie=Zo(Ba(Xt),Zo(j,Xt));$n=ca(mo.t,Zo(mo.r,ie),mo.s)}be[oo]=mo.parent<0?jn(ve,$n):jn(be[mo.parent],$n)}for(let oo=0;oo<G;oo++)So[oo]=jn(be[oo],dt[oo]);a.pianist={head:[be[X.Head][12],be[X.Head][13],be[X.Head][14]]};let l0=Z%4.3;return{blink:l0<.16?Math.sin(l0/.16*Math.PI):0}}function io(Z,Pt){if(A)return E(Z);if(M)return Oe(Z,M);if(Pt)return ro(Pt);let Dt=Math.sin(Z*2*Math.PI/4.2),Nt=Z%3.7,le=Nt<.16?Math.sin(Nt/.16*Math.PI):0,Ae=Math.sin(Z*.45),Me=Math.sin(Z*.31+.8),pe=Math.max(0,Math.sin(Z*.085)-.75)*4,$e={RightArm:[0,-22*pe,11*Ae],RightForeArm:[0,8+26*pe,0],RightHand:[38*Me,0,6*Math.sin(Z*.7)],LeftUpLeg:[0,0,3.2*Math.sin(Z*.36)],RightFoot:[5*Math.sin(Z*.52+.4),0,0],Head:[0,1.6*Math.sin(Z*.21),0]};["Index","Middle","Ring","Pinky"].forEach((ve,co)=>{let Ro=Math.sin(Z*1.1-co*.5);$e["RightHand"+ve+"1"]=[0,0,8+12*Ro],$e["RightHand"+ve+"2"]=[0,0,6+10*Ro]});let ye={},We=(ve,co)=>{for(let Ro in ve){let be=ve[Ro],Go=Ch(be[0]*co,be[1]*co,be[2]*co);ye[Ro]=ye[Ro]?Zo(ye[Ro],Go):Go}};We(Ih,1),We({Spine1:[Dt*.8,0,0],Spine2:[Dt*.6,0,0]},1),We($e,1);let ke=new Array(G),Te=new Array(G);for(let ve=0;ve<G;ve++){let co=K[ve],Ro=Ot[ve],be=ye[co.name];if(be){let Go=gt[ve],pa=Zo(Ba(Go),Zo(be,Go));Ro=ca(co.t,Zo(co.r,pa),co.s)}ke[ve]=co.parent<0?jn(ho,Ro):jn(ke[co.parent],Ro),Te[ve]=null}for(let ve=0;ve<G;ve++)So[ve]=jn(ke[ve],dt[ve]);let Ke=ve=>[ve[12],ve[13],ve[14]];return a.headPos=Ke(ke[X.Head]),a.hipsPos=Ke(ke[X.Hips]),a.headM=ke[X.Head],{blink:le}}function Ze(Z,Pt){let{pos:Dt,nrm:Nt,jnt:le,wgt:Ae,outP:Me,outN:pe,work:$e,m:ye}=Z,We=ye.n,ke=Dt;if(Pt){$e.set(Dt);for(let Te in Z.morphs){let Ke=Pt[Te]||0;if(Ke<=0)continue;let ve=Z.morphs[Te];for(let co=0;co<ve.idx.length;co++){let Ro=ve.idx[co]*3;$e[Ro]+=ve.d[co*3]*Ke,$e[Ro+1]+=ve.d[co*3+1]*Ke,$e[Ro+2]+=ve.d[co*3+2]*Ke}}ke=$e}for(let Te=0;Te<We;Te++){let Ke=ke[Te*3],ve=ke[Te*3+1],co=ke[Te*3+2],Ro=Nt[Te*3],be=Nt[Te*3+1],Go=Nt[Te*3+2],pa=0,l0=0,oo=0,mo=0,$n=0,j=0;for(let Xt=0;Xt<4;Xt++){let ie=Ae[Te*4+Xt];if(ie===0)continue;let fe=So[le[Te*4+Xt]];pa+=ie*(fe[0]*Ke+fe[4]*ve+fe[8]*co+fe[12]),l0+=ie*(fe[1]*Ke+fe[5]*ve+fe[9]*co+fe[13]),oo+=ie*(fe[2]*Ke+fe[6]*ve+fe[10]*co+fe[14]),mo+=ie*(fe[0]*Ro+fe[4]*be+fe[8]*Go),$n+=ie*(fe[1]*Ro+fe[5]*be+fe[9]*Go),j+=ie*(fe[2]*Ro+fe[6]*be+fe[10]*Go)}Me[Te*3]=pa,Me[Te*3+1]=l0,Me[Te*3+2]=oo;let ht=Math.hypot(mo,$n,j)||1;pe[Te*3]=mo/ht,pe[Te*3+1]=$n/ht,pe[Te*3+2]=j/ht}ye.grid&&!Oo&&!M&&!A&&ko(Z),Z.sway&&L0(Z),Z.pb.subdata(Me),Z.nbuf.subdata(pe)}function ko(Z){let[Pt,Dt]=Z.m.grid,Nt=Z.outP,le=Z.outN,Ae=j3.seat+.012;for(let Me=1;Me<Pt;Me++){let pe=Math.pow(1-Me/(Pt-1),1.5);for(let $e=0;$e<Dt;$e++){let ye=(Me*Dt+$e)*3;Nt[ye+1]>Ae?Nt[ye+1]=Ae+(Nt[ye+1]-Ae)*Math.max(pe,.15):Nt[ye+1]=Ae}}for(let Me=0;Me<le.length;Me+=3)le[Me]=0,le[Me+1]=1,le[Me+2]=0}let Oo=!1,bn=(Z,Pt,Dt,Nt,le)=>({bone:X[Z],rate:Pt,damp:Dt,drag:Nt,most:le,x:[0,0,0],v:[0,0,0],p:null,vel:[0,0,0]}),Er={head:bn("Head",15,.32,.012,.035),chest:bn("Spine2",9,.38,.03,.1),hips:bn("Hips",7,.42,.045,.16)},Yn=-1;function Ka(Z){let Pt=Yn<0?0:Z-Yn;Yn=Z;for(let Dt in Er){let Nt=Er[Dt],le=So[Nt.bone],Ae=zt[Nt.bone],Me=Ae[12],pe=Ae[13],$e=Ae[14],ye=[le[0]*Me+le[4]*pe+le[8]*$e+le[12],le[1]*Me+le[5]*pe+le[9]*$e+le[13],le[2]*Me+le[6]*pe+le[10]*$e+le[14]];if(!Nt.p||!(Pt>0)||Pt>.25||Math.hypot(ye[0]-Nt.p[0],ye[1]-Nt.p[1],ye[2]-Nt.p[2])>.5){Nt.p=ye,Nt.x=[0,0,0],Nt.v=[0,0,0],Nt.vel=[0,0,0];continue}let We=[(ye[0]-Nt.p[0])/Pt,(ye[1]-Nt.p[1])/Pt,(ye[2]-Nt.p[2])/Pt],ke=Math.max(1,Math.ceil(Pt/.016)),Te=Pt/ke;for(let ve=0;ve<3;ve++){let co=Math.max(-30,Math.min(30,(We[ve]-Nt.vel[ve])/Pt)),Ro=-We[ve]*Nt.drag;for(let be=0;be<ke;be++)Nt.v[ve]+=((Ro-Nt.x[ve])*Nt.rate*Nt.rate-2*Nt.damp*Nt.rate*Nt.v[ve]-co)*Te,Nt.x[ve]+=Nt.v[ve]*Te}let Ke=Math.hypot(Nt.x[0],Nt.x[1],Nt.x[2]);if(Ke>Nt.most){let ve=Nt.most/Ke;Nt.x=[Nt.x[0]*ve,Nt.x[1]*ve,Nt.x[2]*ve]}Nt.p=ye,Nt.vel=We}}for(let Z of ct){let Pt=Z.m,Dt=Pt.n,Nt=null,le=null;if(Pt.kind===9){le="head",Nt=new Float32Array(Dt);for(let Ae=0;Ae<Dt;Ae++){let Me=Z.uv[Ae*2]<-.5?0:Z.uv[Ae*2+1];Nt[Ae]=Me*Me}}else if(Pt.name==="scarf"){le="chest",Nt=new Float32Array(Dt);for(let Ae=0;Ae<Dt;Ae++)Nt[Ae]=l(1.52,1.12,Z.pos[Ae*3+1])}else if(Pt.grid){le="hips",Nt=new Float32Array(Dt);let Ae=Pt.grid[0],Me=Pt.grid[1];for(let pe=0;pe<Dt;pe++)Nt[pe]=Math.pow(Math.floor(pe/Me)/(Ae-1),1.6)}Nt&&(Z.sway=Nt,Z.spring=Er[le],Z.loose=le)}function L0(Z){if(!Oo&&!A&&!M)return;let Pt=Z.spring.x,Dt=Z.sway,Nt=Z.outP;if(!(Math.abs(Pt[0])+Math.abs(Pt[1])+Math.abs(Pt[2])<1e-5))for(let le=0,Ae=Dt.length;le<Ae;le++){let Me=Dt[le];Me>0&&(Nt[le*3]+=Pt[0]*Me,Nt[le*3+1]+=Pt[1]*Me,Nt[le*3+2]+=Pt[2]*Me)}}function li(Z,Pt){Oo=!!Pt;let Dt=io(Z,Pt);Ka(Z);let Nt={eyeBlinkLeft:Dt.blink,eyeBlinkRight:Dt.blink};for(let le of ct)Ze(le,Object.keys(le.morphs).length?Nt:null);a.pose=Dt}return{parts:ct,update:li,drawOpaque:Wt,drawBlend:ze,state:a}}function l(R,q,F){let K=Math.min(1,Math.max(0,(F-R)/(q-R)));return K*K*(3-2*K)}let h=sS(),u=iS(),v=u?t.texture({data:u,flipY:!1,min:"linear",mag:"linear"}):c,p=t({vert:cS,frag:lS,attributes:{position:h.pos,normal:h.nrm,uv:h.uv,kind:h.kind},elements:new Uint16Array(h.idx),uniforms:{model:t.prop("model"),turn:0,fold:1.12,cover:v},cull:{enable:!1}}),d=fS(),m=t({vert:hS,frag:uS,attributes:{position:d.pos,normal:d.nrm,color:d.col,mat:d.mat},elements:new Uint16Array(d.idx),uniforms:{model:t.prop("model"),pulse:t.prop("pulse")},cull:{enable:!1}}),g=t({vert:dS,frag:pS,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{center:t.prop("center"),size:t.prop("size"),pulse:t.prop("pulse")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});function y(R){let q=R.headM,F=ct=>{let Wt=Math.hypot(...ct)||1;return ct.map(ze=>ze/Wt)},K=F([q[4],q[5],q[6]]),G=F([q[8],q[9],q[10]]),X=K,dt=G.map(ct=>-ct),Ot=[dt[1]*X[2]-dt[2]*X[1],dt[2]*X[0]-dt[0]*X[2],dt[0]*X[1]-dt[1]*X[0]],zt=R.headPos,gt=[0,1,2].map(ct=>zt[ct]+K[ct]*.06+G[ct]*.185);return[Ot[0],Ot[1],Ot[2],0,dt[0],dt[1],dt[2],0,X[0],X[1],X[2],0,gt[0],gt[1],gt[2],1]}let b=-1,w="",_=null,M=null,A=!1;function O(R){if(!o)return;let q=(q3.motion,r()),F=_?[_.x,_.z,_.heading,_.phase].map(G=>G.toFixed(4)).join():"";(M||A||F!==w||!_&&Math.abs(q-b)>(q3.isPhone?1/30:0))&&(o.update(q,_),b=q,w=F);for(let G of o.parts)G.blend||(o.drawOpaque({pb:G.pb,nb:G.nbuf,uv:G.uvBuf,el:G.el,tex:G.tex,alphaCut:G.alphaCut,skin:G.skin,kind:G.kind,alphaScale:G.alphaScale}),G.sockEl&&o.drawOpaque({pb:G.pb,nb:G.nbuf,uv:G.uvBuf,el:G.sockEl,tex:c,alphaCut:0,skin:0,kind:8,alphaScale:1}));let K=o.state;if(K.headM&&!_&&!M&&!A){p({model:y(K)});let G=K.headPos,X=Math.sin(q*1.3)*.02,dt=[G[0],G[1]+.62+X,G[2]+.05],Ot=q*.6,zt=ca(dt,Zo(rs([0,1,0],Ot),rs([0,0,1],.18)),[1.2,1.2,1.2]),gt=.5+.5*Math.sin(q*2);m({model:zt,pulse:gt}),a.glowPos=dt,a.glow=.06+.03*gt,g({center:[dt[0],dt[1]-.12,dt[2]],size:.1,pulse:gt})}for(let G of o.parts)G.blend&&o.drawBlend({pb:G.pb,nb:G.nbuf,uv:G.uvBuf,el:G.el,tex:G.tex,alphaCut:G.alphaCut,skin:G.skin,kind:G.kind,alphaScale:G.alphaScale})}return O.state=a,O.place=Vs,O.setWalk=R=>{_=R||null,_&&(a.glow=0)},O.setSeat=R=>{M=R||null,a.glow=M?0:a.glow,b=-1},O.setPiano=R=>{R=!!R,R!==A&&(A=R,A&&(a.glow=0),b=-1)},O};hd.exports.PLACE=Vs});var ud=mt((tT,K3)=>{"use strict";K3.exports={name:"Muzammil",title:"Hi, I\u2019m Muzammil.",text:`I\u2019m a self-taught artist. I paint emotions. Grief, longing, love, and the quiet ways we keep holding on. I borrow the light and stillness of the Renaissance to talk about very modern feelings.

This gallery is my portfolio, built brick by pixel, so my work has a home that never closes. Every painting comes with a few words, because some feelings need both a frame and a sentence.

You\u2019ll find me in the tree court, catching sunlight and trying not to get too absorbed. Wander the halls, stay as long as you like, and don\u2019t worry about the time. In here, the only thing that\u2019s drying is the paint.`}});var pd=mt((eT,ox)=>{"use strict";var tx=ya(),Q3=Jc(),as=t=>String(t).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function dd(){return tx.isPhone||!window.matchMedia||!window.matchMedia("(pointer: fine)").matches?!1:window.innerWidth>=900&&window.innerHeight>=520}var vS=`
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
`,Z3=!1;function ex(){if(Z3)return;Z3=!0;let t=document.createElement("style");t.textContent=vS,document.head.appendChild(t)}var mS='<svg class="visit-play" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="10.2"/><path d="M10 8.4l6 3.6-6 3.6z" fill="currentColor" stroke="none"/></svg>';function gS(t){return!t||!t.visit||!dd()?"":(ex(),`<button type="button" class="visit-btn" data-visit="${as(t.slug||"")}" aria-label="Visit what remained: watch ${as(t.title)} come to life">${mS}<span>Visit what remained</span></button>`)}function xS(t){let e=t.getContext("2d");t.width=t.height=160;let o=e.createImageData(160,160),n=!0,r=0;return function a(s){if(n){if(s-r>70){r=s;let i=o.data;for(let c=0;c<i.length;c+=4){let f=Math.random()*255;i[c]=i[c+1]=i[c+2]=f,i[c+3]=255}e.putImageData(o,0,0),t.style.transform=`translate(${(Math.random()*6-3).toFixed(1)}%, ${(Math.random()*6-3).toFixed(1)}%)`}requestAnimationFrame(a)}}(0),()=>{n=!1}}var ql=null;function yS(t){if(ql||!t||!t.visit)return;ex();let e=document.activeElement;document.body.classList.add("visiting");let o="images/web/"+t.slug+(tx.isPhone?"-1024":"")+".webp",n=document.createElement("div");n.className="visit",n.setAttribute("role","dialog"),n.setAttribute("aria-modal","true"),n.setAttribute("aria-label","Visiting "+t.title),n.innerHTML=`
		<video muted playsinline preload="auto" ${t.visit.poster?`poster="${as(t.visit.poster)}"`:""}></video>
		<img class="visit-art" alt="${as(t.title)}, ${as(Q3(t))}" src="${as(o)}">
		<canvas class="visit-grain" aria-hidden="true"></canvas>
		<div class="visit-vignette" aria-hidden="true"></div>
		<div class="visit-bar top" aria-hidden="true"></div>
		<div class="visit-bar bottom" aria-hidden="true"></div>
		<div class="visit-title">
			<span class="visit-kicker">A visit</span>
			<span class="visit-name">${as(t.title)}</span>
			<span class="visit-meta">${as(Q3(t))}</span>
		</div>
		<button type="button" class="visit-close" aria-label="Return to the gallery">\xD7</button>
		<button type="button" class="visit-skip">Skip</button>
		<div class="visit-end">
			<button type="button" class="primary" data-act="back">Return to the gallery</button>
			<button type="button" data-act="again">Watch again</button>
		</div>`,document.body.appendChild(n);let r=n.querySelector("video"),a=n.querySelector(".visit-title"),s=xS(n.querySelector(".visit-grain")),i=[],c=(m,g)=>i.push(setTimeout(m,g)),f=m=>m.stopPropagation();["mousedown","pointerdown","click","wheel","touchstart","touchmove"].forEach(m=>n.addEventListener(m,f));let l=m=>{m.key==="Escape"?(m.preventDefault(),d()):m.key===" "&&!(m.target&&m.target.tagName==="BUTTON")&&(m.preventDefault(),v()),m.stopImmediatePropagation()};window.addEventListener("keydown",l,!0);let h=m=>m.stopImmediatePropagation();window.addEventListener("keyup",h,!0);let u=!1;function v(){u||(u=!0,a.classList.add("on"),n.classList.add("resolved"),c(()=>{let m=n.querySelector('[data-act="back"]');m&&m.focus({preventScroll:!0})},1300))}function p(){u=!1,n.classList.remove("resolved"),a.classList.remove("on");try{r.currentTime=0}catch(g){}let m=r.play();m&&m.catch&&m.catch(()=>v()),n.classList.add("playing"),c(()=>{u||a.classList.add("on")},1600),c(()=>{u||a.classList.remove("on")},6200)}r.addEventListener("timeupdate",()=>{r.duration&&r.currentTime>r.duration-1.2&&v()}),r.addEventListener("ended",v),r.addEventListener("error",v);function d(){if(ql){ql=null,i.forEach(clearTimeout),n.classList.remove("on");try{r.pause()}catch(m){}window.removeEventListener("keydown",l,!0),window.removeEventListener("keyup",h,!0),document.body.classList.remove("visiting"),setTimeout(()=>{s(),n.remove(),e&&e.focus&&e.focus({preventScroll:!0})},1150)}}n.querySelector(".visit-close").addEventListener("click",d),n.querySelector(".visit-skip").addEventListener("click",()=>{try{r.pause()}catch(m){}v()}),n.querySelector(".visit-end").addEventListener("click",m=>{let g=m.target.closest("button");g&&(g.dataset.act==="back"&&d(),g.dataset.act==="again"&&(i.forEach(clearTimeout),p()))}),r.src=t.visit.video,ql={close:d},requestAnimationFrame(()=>{n.classList.add("on"),c(p,1300)})}var J3={};function bS(t){if(!t||!t.visit||J3[t.visit.video]||!dd())return;J3[t.visit.video]=!0;let e=document.createElement("link");e.rel="preload",e.as="video",e.href=t.visit.video,document.head.appendChild(e)}ox.exports={available:dd,button:gS,open:yS,warm:bS,get active(){return!!ql}}});var ax=mt((oT,rx)=>{"use strict";var wS=ya(),pc=[0,0],fc=[0,0],k0=null,md=0;if(typeof window!="undefined"){window.addEventListener("pointermove",e=>{e.pointerType!=="touch"&&(pc[0]=Math.max(-1,Math.min(1,e.clientX/window.innerWidth*2-1)),pc[1]=Math.max(-1,Math.min(1,e.clientY/window.innerHeight*2-1)),md=performance.now())},{passive:!0});let t=()=>{md=performance.now()};["wheel","touchstart","touchmove","keydown","pointerdown"].forEach(e=>window.addEventListener(e,t,{passive:!0,capture:!0})),window.addEventListener("deviceorientation",e=>{e.gamma===null||e.beta===null||(k0||(k0=[e.gamma,e.beta]),k0[0]+=(e.gamma-k0[0])*.01,k0[1]+=(e.beta-k0[1])*.01,pc[0]=Math.max(-1,Math.min(1,(e.gamma-k0[0])/14)),pc[1]=Math.max(-1,Math.min(1,(e.beta-k0[1])/14)))},{passive:!0})}var nx=0,hc=null,Dh=null,s0=[0,0,0],vd=0,uc=null,dc=0,Xs={eye:[0,0,0],target:[0,0,0],fov:50,roll:0},_S={apply(t,e){let o=Math.min(.1,Math.max(0,e-nx));nx=e;let n=t.eye,r=t.target,a=[r[0]-n[0],r[1]-n[1],r[2]-n[2]],s=Math.hypot(a[0],a[1],a[2])||1;a=[a[0]/s,a[1]/s,a[2]/s];let i=[-a[2],0,a[0]],c=Math.hypot(i[0],i[2])||1;i=[i[0]/c,0,i[2]/c];let f=[i[1]*a[2]-i[2]*a[1],i[2]*a[0]-i[0]*a[2],i[0]*a[1]-i[1]*a[0]],l=!hc;if(hc&&o>0){let b=[n[0]-hc[0],n[1]-hc[1],n[2]-hc[2]],w=Math.hypot(b[0],b[1],b[2]);if(w>2.5)l=!0;else{let M=Math.min(1,o*5);for(let A=0;A<3;A++)s0[A]+=(b[A]/o-s0[A])*M}let _=Math.hypot(r[0]-Dh[0],r[1]-Dh[1],r[2]-Dh[2]);dc=w/o<.12&&_/o<.2?dc+o:0}l&&(s0[0]=s0[1]=s0[2]=0,dc=0),hc=n.slice(),Dh=r.slice(),vd=Math.hypot(s0[0],s0[1],s0[2]);let h=Math.min(1,o*2.6);fc[0]+=(pc[0]-fc[0])*h,fc[1]+=(pc[1]-fc[1])*h;let u=Math.max(.03,Math.min(.32,s*.05)),v=(wS.isPhone&&!k0?1.5:1)*Math.min(1,dc/2.5),p=(Math.sin(e*.131)*.55+Math.sin(e*.071+1.3)*.45)*u*.55*v,d=Math.sin(e*.097+.6)*u*.16*v,m=fc[0]*u+p,g=-fc[1]*u*.45+d;for(let b=0;b<3;b++)Xs.eye[b]=n[b]+i[b]*m+f[b]*g,Xs.target[b]=r[b]+(i[b]*m+f[b]*g)*.12;n[1]>.05&&(Xs.eye[1]=Math.max(.05,Xs.eye[1]));let y=s0[0]*i[0]+s0[2]*i[2];return Xs.fov=t.fov+Math.min(3.5,vd*.55),Xs.roll=(t.roll||0)+Math.max(-.035,Math.min(.035,-y*.006)),Xs},pull(t,e){(uc===null||!(Math.abs(t.focus-uc)<40))&&(uc=t.focus);let o=1/60;uc+=(t.focus-uc)*Math.min(1,o*3.2),t.focus=uc,t.aperture>0&&(t.aperture*=1+.25*Math.min(1,dc/3))},get speed(){return vd},get resting(){return dc>2&&performance.now()-md>2e3}};rx.exports=_S});var gd=mt((nT,sx)=>{sx.exports=1e-6});var xd=mt((rT,ix)=>{ix.exports=MS;function MS(){var t=new Float32Array(3);return t[0]=0,t[1]=0,t[2]=0,t}});var lx=mt((aT,cx)=>{cx.exports=SS;function SS(t){var e=new Float32Array(3);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}});var yd=mt((sT,fx)=>{fx.exports=ES;function ES(t,e,o){var n=new Float32Array(3);return n[0]=t,n[1]=e,n[2]=o,n}});var bd=mt((iT,hx)=>{hx.exports=kS;function kS(t,e){var o=e[0],n=e[1],r=e[2],a=o*o+n*n+r*r;return a>0&&(a=1/Math.sqrt(a),t[0]=e[0]*a,t[1]=e[1]*a,t[2]=e[2]*a),t}});var wd=mt((cT,ux)=>{ux.exports=AS;function AS(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}});var mx=mt((lT,vx)=>{vx.exports=LS;var dx=yd(),px=bd(),TS=wd();function LS(t,e){var o=dx(t[0],t[1],t[2]),n=dx(e[0],e[1],e[2]);px(o,o),px(n,n);var r=TS(o,n);return r>1?0:Math.acos(r)}});var xx=mt((fT,gx)=>{gx.exports=zS;function zS(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}});var bx=mt((hT,yx)=>{yx.exports=RS;function RS(t,e,o,n){return t[0]=e,t[1]=o,t[2]=n,t}});var _x=mt((uT,wx)=>{wx.exports=NS;var _d=gd();function NS(t,e){var o=t[0],n=t[1],r=t[2],a=e[0],s=e[1],i=e[2];return Math.abs(o-a)<=_d*Math.max(1,Math.abs(o),Math.abs(a))&&Math.abs(n-s)<=_d*Math.max(1,Math.abs(n),Math.abs(s))&&Math.abs(r-i)<=_d*Math.max(1,Math.abs(r),Math.abs(i))}});var Sx=mt((dT,Mx)=>{Mx.exports=CS;function CS(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]}});var kx=mt((pT,Ex)=>{Ex.exports=OS;function OS(t,e,o){return t[0]=e[0]+o[0],t[1]=e[1]+o[1],t[2]=e[2]+o[2],t}});var Md=mt((vT,Ax)=>{Ax.exports=PS;function PS(t,e,o){return t[0]=e[0]-o[0],t[1]=e[1]-o[1],t[2]=e[2]-o[2],t}});var Lx=mt((mT,Tx)=>{Tx.exports=Md()});var Sd=mt((gT,zx)=>{zx.exports=IS;function IS(t,e,o){return t[0]=e[0]*o[0],t[1]=e[1]*o[1],t[2]=e[2]*o[2],t}});var Nx=mt((xT,Rx)=>{Rx.exports=Sd()});var Ed=mt((yT,Cx)=>{Cx.exports=$S;function $S(t,e,o){return t[0]=e[0]/o[0],t[1]=e[1]/o[1],t[2]=e[2]/o[2],t}});var Px=mt((bT,Ox)=>{Ox.exports=Ed()});var $x=mt((wT,Ix)=>{Ix.exports=FS;function FS(t,e,o){return t[0]=Math.min(e[0],o[0]),t[1]=Math.min(e[1],o[1]),t[2]=Math.min(e[2],o[2]),t}});var Dx=mt((_T,Fx)=>{Fx.exports=DS;function DS(t,e,o){return t[0]=Math.max(e[0],o[0]),t[1]=Math.max(e[1],o[1]),t[2]=Math.max(e[2],o[2]),t}});var Gx=mt((MT,qx)=>{qx.exports=qS;function qS(t,e){return t[0]=Math.floor(e[0]),t[1]=Math.floor(e[1]),t[2]=Math.floor(e[2]),t}});var Bx=mt((ST,Hx)=>{Hx.exports=GS;function GS(t,e){return t[0]=Math.ceil(e[0]),t[1]=Math.ceil(e[1]),t[2]=Math.ceil(e[2]),t}});var jx=mt((ET,Ux)=>{Ux.exports=HS;function HS(t,e){return t[0]=Math.round(e[0]),t[1]=Math.round(e[1]),t[2]=Math.round(e[2]),t}});var Vx=mt((kT,Wx)=>{Wx.exports=BS;function BS(t,e,o){return t[0]=e[0]*o,t[1]=e[1]*o,t[2]=e[2]*o,t}});var Yx=mt((AT,Xx)=>{Xx.exports=US;function US(t,e,o,n){return t[0]=e[0]+o[0]*n,t[1]=e[1]+o[1]*n,t[2]=e[2]+o[2]*n,t}});var kd=mt((TT,Kx)=>{Kx.exports=jS;function jS(t,e){var o=e[0]-t[0],n=e[1]-t[1],r=e[2]-t[2];return Math.sqrt(o*o+n*n+r*r)}});var Zx=mt((LT,Qx)=>{Qx.exports=kd()});var Ad=mt((zT,Jx)=>{Jx.exports=WS;function WS(t,e){var o=e[0]-t[0],n=e[1]-t[1],r=e[2]-t[2];return o*o+n*n+r*r}});var ey=mt((RT,ty)=>{ty.exports=Ad()});var Td=mt((NT,oy)=>{oy.exports=VS;function VS(t){var e=t[0],o=t[1],n=t[2];return Math.sqrt(e*e+o*o+n*n)}});var ry=mt((CT,ny)=>{ny.exports=Td()});var Ld=mt((OT,ay)=>{ay.exports=XS;function XS(t){var e=t[0],o=t[1],n=t[2];return e*e+o*o+n*n}});var iy=mt((PT,sy)=>{sy.exports=Ld()});var ly=mt((IT,cy)=>{cy.exports=YS;function YS(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t}});var hy=mt(($T,fy)=>{fy.exports=KS;function KS(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t}});var dy=mt((FT,uy)=>{uy.exports=QS;function QS(t,e,o){var n=e[0],r=e[1],a=e[2],s=o[0],i=o[1],c=o[2];return t[0]=r*c-a*i,t[1]=a*s-n*c,t[2]=n*i-r*s,t}});var vy=mt((DT,py)=>{py.exports=ZS;function ZS(t,e,o,n){var r=e[0],a=e[1],s=e[2];return t[0]=r+n*(o[0]-r),t[1]=a+n*(o[1]-a),t[2]=s+n*(o[2]-s),t}});var gy=mt((qT,my)=>{my.exports=JS;function JS(t,e){e=e||1;var o=Math.random()*2*Math.PI,n=Math.random()*2-1,r=Math.sqrt(1-n*n)*e;return t[0]=Math.cos(o)*r,t[1]=Math.sin(o)*r,t[2]=n*e,t}});var yy=mt((GT,xy)=>{xy.exports=tE;function tE(t,e,o){var n=e[0],r=e[1],a=e[2],s=o[3]*n+o[7]*r+o[11]*a+o[15];return s=s||1,t[0]=(o[0]*n+o[4]*r+o[8]*a+o[12])/s,t[1]=(o[1]*n+o[5]*r+o[9]*a+o[13])/s,t[2]=(o[2]*n+o[6]*r+o[10]*a+o[14])/s,t}});var wy=mt((HT,by)=>{by.exports=eE;function eE(t,e,o){var n=e[0],r=e[1],a=e[2];return t[0]=n*o[0]+r*o[3]+a*o[6],t[1]=n*o[1]+r*o[4]+a*o[7],t[2]=n*o[2]+r*o[5]+a*o[8],t}});var My=mt((BT,_y)=>{_y.exports=oE;function oE(t,e,o){var n=e[0],r=e[1],a=e[2],s=o[0],i=o[1],c=o[2],f=o[3],l=f*n+i*a-c*r,h=f*r+c*n-s*a,u=f*a+s*r-i*n,v=-s*n-i*r-c*a;return t[0]=l*f+v*-s+h*-c-u*-i,t[1]=h*f+v*-i+u*-s-l*-c,t[2]=u*f+v*-c+l*-i-h*-s,t}});var Ey=mt((UT,Sy)=>{Sy.exports=nE;function nE(t,e,o,n){var r=o[1],a=o[2],s=e[1]-r,i=e[2]-a,c=Math.sin(n),f=Math.cos(n);return t[0]=e[0],t[1]=r+s*f-i*c,t[2]=a+s*c+i*f,t}});var Ay=mt((jT,ky)=>{ky.exports=rE;function rE(t,e,o,n){var r=o[0],a=o[2],s=e[0]-r,i=e[2]-a,c=Math.sin(n),f=Math.cos(n);return t[0]=r+i*c+s*f,t[1]=e[1],t[2]=a+i*f-s*c,t}});var Ly=mt((WT,Ty)=>{Ty.exports=aE;function aE(t,e,o,n){var r=o[0],a=o[1],s=e[0]-r,i=e[1]-a,c=Math.sin(n),f=Math.cos(n);return t[0]=r+s*f-i*c,t[1]=a+s*c+i*f,t[2]=e[2],t}});var Ry=mt((VT,zy)=>{zy.exports=sE;var ss=xd()();function sE(t,e,o,n,r,a){var s,i;for(e||(e=3),o||(o=0),n?i=Math.min(n*e+o,t.length):i=t.length,s=o;s<i;s+=e)ss[0]=t[s],ss[1]=t[s+1],ss[2]=t[s+2],r(ss,ss,a),t[s]=ss[0],t[s+1]=ss[1],t[s+2]=ss[2];return t}});var Cy=mt((XT,Ny)=>{Ny.exports={EPSILON:gd(),create:xd(),clone:lx(),angle:mx(),fromValues:yd(),copy:xx(),set:bx(),equals:_x(),exactEquals:Sx(),add:kx(),subtract:Md(),sub:Lx(),multiply:Sd(),mul:Nx(),divide:Ed(),div:Px(),min:$x(),max:Dx(),floor:Gx(),ceil:Bx(),round:jx(),scale:Vx(),scaleAndAdd:Yx(),distance:kd(),dist:Zx(),squaredDistance:Ad(),sqrDist:ey(),length:Td(),len:ry(),squaredLength:Ld(),sqrLen:iy(),negate:ly(),inverse:hy(),normalize:bd(),dot:wd(),cross:dy(),lerp:vy(),random:gy(),transformMat4:yy(),transformMat3:wy(),transformQuat:My(),rotateX:Ey(),rotateY:Ay(),rotateZ:Ly(),forEach:Ry()}});var Iy=mt((YT,Py)=>{"use strict";function Oy(){let t={};return{on(e,o){return(t[e]=t[e]||[]).push(o),this},emit(e,o){(t[e]||[]).slice().forEach(n=>n(o))}}}Py.exports=function(e){let o=e.ownerDocument||document,n=Oy(),r=null,a={dx:0,dy:0,dt:0},s=0,i=()=>o.pointerLockElement||o.webkitPointerLockElement||null,c=()=>{if(i())return;let l=e.requestPointerLock||e.webkitRequestPointerLock;if(l)try{let h=l.call(e);h&&h.catch&&h.catch(()=>{})}catch(h){}};e.addEventListener("mousedown",c,!1);let f=()=>{if(!i()){r&&(n.emit("release"),r.emit("end"),r=null);return}r=Oy(),s=Date.now(),n.emit("attain",r)};return o.addEventListener("pointerlockchange",f),o.addEventListener("webkitpointerlockchange",f),o.addEventListener("pointerlockerror",()=>n.emit("error")),(o.body||e).addEventListener("mousemove",l=>{r&&(a.dx=l.movementX||l.webkitMovementX||0,a.dy=l.movementY||l.webkitMovementY||0,a.dt=Date.now()-s,n.emit("data",a),r.emit("data",a))},!1),n.request=c,n.target=i,n.release=()=>{i()&&(o.exitPointerLock||o.webkitExitPointerLock).call(o)},n}});var Gy=mt((ZT,qy)=>{"use strict";var Ys=Yi(),Ks=Cy(),iE=Iy(),KT=Math.PI/4,QT=Math.PI/6,$y=2,cE=1,lE=2.4,fE=2.4,hE=1e3,uE=5,dE=7,zd=vr().C,Gl=[[7,1.6],[7,zd.zc],[zd.x1-2.95,zd.zc]],is=Gl.slice(1).map((t,e)=>{let o=Gl[e],n=t[0]-o[0],r=t[1]-o[1],a=Math.hypot(n,r);return{a:o,len:a,dir:[n/a,r/a]}}),Rd=is.reduce((t,e)=>t+e.len,0);function Fy(t){let e=Math.max(0,Math.min(Rd,t));for(let n of is){if(e<=n.len)return[n.a[0]+n.dir[0]*e,n.a[1]+n.dir[1]*e];e-=n.len}let o=Gl[Gl.length-1];return[o[0],o[1]]}function pE(t){let e=0;for(let n=0;n<is.length;n++){let r=is[n],a=e+r.len;if(t<a-1e-4||n===is.length-1){let s=r.dir,c=t<=e+1e-4&&n>0?is[n-1].dir:r.dir;return{ahead:s,back:[-c[0],-c[1]]}}e=a}let o=is[is.length-1].dir;return{ahead:o,back:[-o[0],-o[1]]}}var vE=Math.PI/4,mE=7,gE=140,xE=70,Dy=(t,e,o)=>(1-t)*e+t*o,yE=t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2;qy.exports=function({getGridSegments:t,getGridParts:e},o){var n=[0,Math.PI],r=[0,Math.PI],a=0,s=[0,0,0],i=[dE,$y,Gl[0][1]],c=0,f=1,l=0,h=[.707,0,.707],u=[0,1,0],v=[0,0,0],p=.5,d=Ys.identity([]),m=Ys.identity([]),g=!1,y=[0,0,0],b=[0,0,0],w=1,_=!1;let M=Jt=>{n[1]+=Jt*vE},A=(Jt,ge,Ce)=>{if(Jt=Math.max(Math.min(Jt,100),-100),ge=Math.max(Math.min(ge,100),-100),n[0]=0,_){a=0;return}for(a+=Jt;a>=Ce;)M(1),a-=Ce;for(;a<=-Ce;)M(-1),a+=Ce};iE(document.body).on("attain",Jt=>{Jt.on("data",ge=>{A(ge.dx,ge.dy,gE)})});let R=null,q=null,F=0,K={x:0,y:0},G=58,X=document.createElement("div");X.id="museum-mobile-controls",X.innerHTML=`

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
	`,document.body.appendChild(X);let dt=X.querySelector("#museum-joystick"),Ot=X.querySelector("#museum-joystick-knob"),zt=()=>{Ot.style.transform="translate(-50%, -50%)",s[0]=0,s[2]=0},gt=Jt=>{let ge=Jt.clientX-K.x,Ce=Jt.clientY-K.y,ro=Math.hypot(ge,Ce);if(ro>G&&(ge=ge/ro*G,Ce=Ce/ro*G),Ot.style.transform=`translate(
				calc(-50% + ${ge}px),
				calc(-50% + ${Ce}px)
			)`,ro<10){s[0]=0,s[2]=0;return}let Oe=ge/G,xe=Ce/G;s[0]=0,s[2]=Math.abs(xe)>.15?xe:0},ct=(Jt,ge)=>{for(let Ce=0;Ce<Jt.length;Ce++)if(Jt[Ce].identifier===ge)return Jt[Ce];return null},Wt=Jt=>!!(Jt&&Jt.closest&&Jt.closest(".painting-plaque, .story-overlay, .story-card, .story-close, button")),ze=Jt=>{if(!Wt(Jt.target)&&(Jt.cancelable&&Jt.preventDefault(),!_))for(let ge=0;ge<Jt.changedTouches.length;ge++){let Ce=Jt.changedTouches[ge];if(R===null&&Ce.clientX<window.innerWidth*.48){R=Ce.identifier;let ro=dt.getBoundingClientRect();K.x=ro.left+ro.width/2,K.y=ro.top+ro.height/2,gt(Ce)}else q===null&&Ce.clientX>=window.innerWidth*.48&&(q=Ce.identifier,F=Ce.clientX,a=0)}},Ee=Jt=>{if(Wt(Jt.target)||(Jt.cancelable&&Jt.preventDefault(),_))return;let ge=R===null?null:ct(Jt.touches,R);ge&&gt(ge);let Ce=q===null?null:ct(Jt.touches,q);if(Ce){let ro=Ce.clientX-F;F=Ce.clientX,A(ro,0,xE)}},Ye=Jt=>{if(!Wt(Jt.target)){Jt.cancelable&&Jt.preventDefault();for(let ge=0;ge<Jt.changedTouches.length;ge++){let Ce=Jt.changedTouches[ge];Ce.identifier===R&&(R=null,zt()),Ce.identifier===q&&(q=null)}}};document.addEventListener("touchstart",ze,{passive:!1}),document.addEventListener("touchmove",Ee,{passive:!1}),document.addEventListener("touchend",Ye,{passive:!1}),document.addEventListener("touchcancel",Ye,{passive:!1});let _e=document.createElement("style");_e.textContent=`

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
	`,document.head.appendChild(_e);var ho={};let So=Jt=>{if(Jt.defaultPrevented||Jt.ctrlKey||Jt.altKey||Jt.metaKey)return;let ge=Jt.type==="keydown";ho[Jt.code]=ge,ge&&!Jt.repeat&&!_&&((Jt.code==="KeyA"||Jt.code==="ArrowLeft")&&M(-1),(Jt.code==="KeyD"||Jt.code==="ArrowRight")&&M(1)),g=!1;let Ce=ho.KeyW||ho.ArrowUp?1:0;s=[0,0,(ho.KeyS||ho.ArrowDown?1:0)-Ce],Jt.preventDefault()};window.addEventListener("keydown",So),window.addEventListener("keyup",So);var Ko=0;return{pos:i,fmouse:r,forward:h,up:u,setPaused:Jt=>{_=!!Jt,_&&(s[0]=0,s[2]=0,zt())},place:(Jt,ge)=>{c=Math.max(0,Math.min(Rd,Jt));let Ce=Fy(c);i[0]=Ce[0],i[2]=Ce[1],n[1]=ge,r[1]=ge,a=0,f=1},view:()=>d,proj:()=>(Ys.perspective(m,o(),window.innerWidth/window.innerHeight,.1,700),m),tick:({time:Jt})=>{let ge=Jt-Ko;Ko=Jt;let Ce=[0,0,0],ro=[];Ks.set(h,Math.sin(r[1]),0,-Math.cos(r[1])),Ks.set(u,0,1,0);let wo=g?fE:lE,Oe=Math.sin(n[1]),xe=-Math.cos(n[1]),yt=pE(c),se=Oe*yt.ahead[0]+xe*yt.ahead[1],Pe=Oe*yt.back[0]+xe*yt.back[1],de=f;Math.max(se,Pe)>.3&&(de=se>=Pe?1:-1);let Qt=_?0:-s[2]*wo;l+=(Qt-l)*(1-Math.exp(-Math.min(ge,.1)*5.5)),Qt===0&&Math.abs(l)<.01&&(l=0);let Eo=l*de*Math.min(ge,.1);_&&(s[0]=0,s[2]=0,Eo=0,l=0),Eo!==0&&(f=Math.sign(Eo)*Math.sign(-s[2]||1)),c=Math.max(0,Math.min(Rd,c+Eo));let E=Fy(c);Ks.set(v,E[0]-i[0],0,E[1]-i[2]);let io=Ks.len(v);io===0&&p!==.25&&(p=(Math.abs((p+.5)%1-.5)-.25)*.8+.25,(p+.01)%.25<.02&&(p=.25));let Ze=p;if(p+=io/(g?uE:hE),i[1]=$y,Ks.add(i,i,v),w<1){w+=ge/cE,w=Math.min(w,1);let ko=yE(w);Ks.set(i,Dy(ko,y[0],b[0]),i[1],Dy(ko,y[2],b[2]))}r[0]=0,r[1]+=(n[1]-r[1])*Math.min(1,Math.min(ge,.1)*mE),Math.abs(n[1]-r[1])<5e-4&&(r[1]=n[1]),Ys.identity(d),Ys.rotateX(d,d,0),Ys.rotateY(d,d,r[1]),Ys.translate(d,d,Ks.scale(Ce,i,-1))}}}});var Uy=mt((JT,By)=>{"use strict";var{skylightGLSL:bE,Z_START:wE,Z_END:_E,GLASS_Y:ME}=$i(),{oculusGLSL:SE,A:Qs}=_a(),{windowLightGLSL:EE,C:qh}=vr(),{doorLightGLSL:kE}=F0(),Gh=tr(),Hl=ph(),Hy=bl(),ka=t=>t.toFixed(4),Nd=.1,Cd=700,vc={exposure:.88,shafts:1,bloom:1,vignette:.42,grain:.032};function AE(t,e){let o=e[0],n=e[1],r=e[2],a=e[3],s=e[4],i=e[5],c=e[6],f=e[7],l=e[8],h=e[9],u=e[10],v=e[11],p=e[12],d=e[13],m=e[14],g=e[15],y=o*i-n*s,b=o*c-r*s,w=o*f-a*s,_=n*c-r*i,M=n*f-a*i,A=r*f-a*c,O=l*d-h*p,R=l*m-u*p,q=l*g-v*p,F=h*m-u*d,K=h*g-v*d,G=u*g-v*m,X=y*G-b*K+w*F+_*q-M*R+A*O;return X?(X=1/X,t[0]=(i*G-c*K+f*F)*X,t[1]=(r*K-n*G-a*F)*X,t[2]=(d*A-m*M+g*_)*X,t[3]=(u*M-h*A-v*_)*X,t[4]=(c*q-s*G-f*R)*X,t[5]=(o*G-r*q+a*R)*X,t[6]=(m*w-p*A-g*b)*X,t[7]=(l*A-u*w+v*b)*X,t[8]=(s*K-i*q+f*O)*X,t[9]=(n*q-o*K-a*O)*X,t[10]=(p*M-d*w+g*y)*X,t[11]=(h*w-l*M-v*y)*X,t[12]=(i*R-s*F-c*O)*X,t[13]=(o*F-n*R+r*O)*X,t[14]=(d*b-p*_-m*y)*X,t[15]=(l*_-h*b+u*y)*X,t):null}function TE(t,e,o){let n=new Array(16);for(let r=0;r<4;r++)for(let a=0;a<4;a++){let s=0;for(let i=0;i<4;i++)s+=e[i*4+a]*o[r*4+i];n[r*4+a]=s}for(let r=0;r<16;r++)t[r]=n[r];return t}var LE=`
precision highp float;
attribute vec2 position;
varying vec2 uv;
void main() {
	uv = position * 0.5 + 0.5;
	gl_Position = vec4(position, 0.0, 1.0);
}`;By.exports=(t,e)=>{let o=!!e.isPhone,n=t.hasExtension("webgl_depth_texture"),r=o?10:18,a=()=>e.post>=2?2:4,s=ct=>t.texture(Object.assign({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"},ct||{})),i=()=>t.framebuffer({color:s(),depth:!1}),c=s(),f=n?t.texture({width:4,height:4,format:"depth",type:"uint32"}):null,l=t.framebuffer({color:c,depth:f||!0}),h=[i(),i()],u=[i(),i()],v=[i(),i()],p=[i(),i()],d=new Array(16).fill(0),m=new Array(16).fill(0),g=[0,0,0],y={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},b={position:[-1,-1,3,-1,-1,3]},w=(ct,Wt,ze)=>t(Object.assign({vert:LE,frag:ct,attributes:b,count:3,depth:{enable:!1,mask:!1},cull:{enable:!1},blend:{enable:!1},uniforms:Wt,framebuffer:t.prop("out")},ze||{})),_=[2.6,0,wE-3.2,12.6,ME,_E+.4],M=[Qs.x0-.2,0,Qs.z0,Qs.x1,Qs.domeTop,Qs.z1],A=[qh.x0,0,qh.z0,qh.x1,7.6,qh.z1],O=[.35,0,.35,13.65,7.6,9],R=Hy.AIR_BOX,q=ct=>`vec3(${ka(ct[0])}, ${ka(ct[1])}, ${ka(ct[2])}), vec3(${ka(ct[3])}, ${ka(ct[4])}, ${ka(ct[5])})`,F=w(`
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

	${bE()}
	${SE()}
	${EE()}
	${kE()}
	${Hy.sunGLSL()}

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
			vec2 t = hitBox(eye, rd, ${q(_)});
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
			vec2 t = hitBox(eye, rd, ${q(M)});
			t.y = min(t.y, len);
			if (t.y > t.x) {
				float st = (t.y - t.x) / float(N);
				float acc = 0.0;
				for (int i = 0; i < N; i++) {
					vec3 p = eye + rd * (t.x + (float(i) + jit) * st);
					if (p.y < ${ka(Qs.dome.base)} && p.x > ${ka(Qs.x0-.1)}) acc += oculusOpen(p) * treeShade(p) * air(p);
				}
				float ph = phase(dot(rd, SHAFT), 0.6) + 0.05;
				sum += mix(vec3(1.0, 0.88, 0.68), vec3(0.62, 0.74, 1.0) * 1.2, night) * acc * st * ph * strength.y;
			}
		}

		// the corridor windows
		if (strength.z > 0.0) {
			vec2 t = hitBox(eye, rd, ${q(A)});
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
			vec2 t = hitBox(eye, rd, ${q(O)});
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
			vec2 t = hitBox(eye, rd, ${q(R)});
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
	}`,{depthTex:()=>f,invVP:()=>d,eye:()=>g,time:t.context("time"),night:()=>Gh.night,strength:()=>K,strength5:()=>G}),K=[0,0,0,0],G=0;function X(){let ct=vc.shafts*y.shafts,Wt=Gh.night;return K[0]=Hl.box(_)?.06*ct*(1+.9*Wt):0,K[1]=Hl.box(M,!1,"court")?.1*ct*(1+.9*Wt):0,K[2]=Hl.box(A)?.07*ct*(1+.4*Wt):0,K[3]=Hl.box(O)?.04*ct*(1-.75*Wt):0,Hl.zone==="studio"?(K[0]=K[1]=K[2]=K[3]=0,G=.03*ct*(1+1.3*Wt)):G=0,K[0]+K[1]+K[2]+K[3]+G>5e-4}let dt=w(`
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
	}`,{src:t.prop("src"),dir:(ct,Wt)=>[Wt.dir[0]/Wt.size[0],Wt.dir[1]/Wt.size[1]]}),Ot=w(`
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
	}`,{src:t.prop("src"),texel:(ct,Wt)=>[.5/Wt.size[0],.5/Wt.size[1]],threshold:t.prop("threshold")}),zt=w(`
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
		return 2.0 * ${ka(Nd)} * ${ka(Cd)} / (${ka(Cd+Nd)} - z * ${ka(Cd-Nd)});
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
	}`,{scene:()=>c,depthTex:()=>f||c,soft:()=>h[0],bloomA:()=>u[0],bloomB:()=>v[0],shafts:()=>p[0],res:()=>[l.width,l.height],time:t.context("time"),exposure:()=>vc.exposure*y.exposure,vignette:()=>Math.min(1,vc.vignette+y.vignette+.22*Gh.night),night:()=>Gh.night,grain:()=>vc.grain,bloomK:()=>vc.bloom,letterbox:()=>y.letterbox,fade:()=>y.fade,fadeColor:()=>y.fadeColor,aperture:()=>e.post>=2?y.aperture:0,focus:()=>y.focus,hasDepth:n?1:0},{framebuffer:null}),gt=t({framebuffer:()=>l});return{shot:y,look:vc,hasDepth:n,capture(ct,Wt,ze){let Ee=Math.max(.4,Math.min(1,e.scale||1)),Ye=Math.max(2,Math.round(ct.drawingBufferWidth*Ee/2)*2),_e=Math.max(2,Math.round(ct.drawingBufferHeight*Ee/2)*2);(l.width!==Ye||l.height!==_e)&&l.resize(Ye,_e);let ho=Math.max(1,Math.ceil(Ye/2)),So=Math.max(1,Math.ceil(_e/2));h.forEach(Ko=>Ko.resize(ho,So)),u.forEach(Ko=>Ko.resize(Math.max(1,Math.ceil(Ye/4)),Math.max(1,Math.ceil(_e/4)))),v.forEach(Ko=>Ko.resize(Math.max(1,Math.ceil(Ye/8)),Math.max(1,Math.ceil(_e/8)))),p.forEach(Ko=>Ko.resize(Math.max(1,Math.ceil(Ye/a())),Math.max(1,Math.ceil(_e/a())))),TE(m,Wt.proj,Wt.view),AE(d,m),g[0]=Wt.eye[0],g[1]=Wt.eye[1],g[2]=Wt.eye[2],gt(()=>{t.clear({color:[0,0,0,1],depth:1}),ze()})},present(){let ct=Wt=>[Wt.width,Wt.height];n&&e.post>=1&&X()?(F({out:p[0]}),dt({out:p[1],src:p[0],dir:[1,0],size:ct(p[0])}),dt({out:p[0],src:p[1],dir:[0,1],size:ct(p[0])})):t.clear({color:[0,0,0,1],framebuffer:p[0]}),Ot({out:h[0],src:c,size:[l.width,l.height],threshold:0}),dt({out:h[1],src:h[0],dir:[1,0],size:ct(h[0])}),dt({out:h[0],src:h[1],dir:[0,1],size:ct(h[0])}),Ot({out:u[0],src:h[0],size:ct(h[0]),threshold:.42}),dt({out:u[1],src:u[0],dir:[1,0],size:ct(u[0])}),dt({out:u[0],src:u[1],dir:[0,1],size:ct(u[0])}),Ot({out:v[0],src:u[0],size:ct(u[0]),threshold:0}),dt({out:v[1],src:v[0],dir:[1.5,0],size:ct(v[0])}),dt({out:v[0],src:v[1],dir:[0,1.5],size:ct(v[0])}),zt({out:null})}}}});var Yy=mt((tL,Xy)=>{"use strict";var jy=tr().GLSL,zE=Ls(),Od=F0(),{C:RE,FAR_DOOR:NE}=vr(),CE=100*Math.PI/180,Wy=t=>[NE.x-t[2],t[1],RE.zc-7+t[0]],Vy=t=>[-t[2],t[1],t[0]];function OE(t){let e=[],o=[],n=[],r=[],a=zE.createBuilder(e,o,n,r);Od.addFrames(a,t);let s=Od.glassPanes(t),i=c=>{let f=[];for(let l=0;l<c.length;l+=3)f.push([c[l],c[l+1],c[l+2]]);return f};return{position:i(e),normal:i(o),elements:n,glass:s}}Xy.exports=t=>{let e=Od.DOOR,o=["left","right"].map(l=>{let h=OE(l),u=h.position.length;return{part:l,hinge:l==="left"?e.x0:e.x1,sign:l==="left"?-1:1,src:h.position.map(v=>v.slice()),srcN:h.normal.map(v=>v.slice()),srcG:h.glass.map(v=>v.slice()),pos:t.buffer({data:new Float32Array(u*3),usage:"dynamic"}),nrm:t.buffer({data:new Float32Array(u*3),usage:"dynamic"}),gpos:t.buffer({data:new Float32Array(h.glass.length*3),usage:"dynamic"}),gnrm:t.buffer({data:new Float32Array(h.glass.length*3),usage:"dynamic"}),el:t.elements({data:new Uint32Array(h.elements),type:"uint32"}),glassCount:h.glass.length,outP:new Float32Array(u*3),outN:new Float32Array(u*3),outG:new Float32Array(h.glass.length*3),outGN:new Float32Array(h.glass.length*3)}}),n=null;function r(l){if(l!==n){n=l;for(let h of o){let u=h.sign*l,v=Math.cos(u),p=Math.sin(u),d=y=>{let b=y[0]-h.hinge,w=y[2];return[h.hinge+b*v+w*p,y[1],-b*p+w*v]},m=y=>[y[0]*v+y[2]*p,y[1],-y[0]*p+y[2]*v];h.src.forEach((y,b)=>{let w=Wy(d(y));h.outP.set(w,b*3),h.outN.set(Vy(m(h.srcN[b])),b*3)});let g=Vy(m([0,0,1]));h.srcG.forEach((y,b)=>{h.outG.set(Wy(d(y)),b*3),h.outGN.set(g,b*3)}),h.pos.subdata(h.outP),h.nrm.subdata(h.outN),h.gpos.subdata(h.outG),h.gnrm.subdata(h.outGN)}}}r(0);let a=`
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
		${jy}
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
		${jy}
		varying vec3 v_pos, v_n, v_eye;
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			float c = abs(dot(V, normalize(v_n)));
			float fres = pow(1.0 - c, 3.0);
			float d = (v_pos.x + v_pos.z) * 0.55 + v_pos.y * 0.85;
			float sheen = smoothstep(0.35, 0.0, abs(fract(d * 0.22) - 0.5)) * 0.05;
			float a = 0.05 + 0.32 * fres + sheen;
			gl_FragColor = vec4(toNight(mix(vec3(0.80, 0.86, 0.90), vec3(1.0, 0.95, 0.86), 0.4), 0.22), a);
		}`,attributes:{position:t.prop("pos"),normal:t.prop("nrm")},count:t.prop("count"),cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"zero",dstAlpha:"one"}}}),c=0,f=()=>{r(c*CE);for(let l of o)s({pos:l.pos,nrm:l.nrm,el:l.el})};return f.glass=()=>{for(let l of o)i({pos:l.gpos,nrm:l.gnrm,count:l.glassCount})},f.setOpen=l=>{c=l||0},f.openNow=()=>c,f}});var Qy=mt((eL,Ky)=>{"use strict";var PE=tr().GLSL,{skylightGLSL:IE}=$i(),{oculusGLSL:$E}=_a(),{windowLightGLSL:FE}=vr(),Ua=.22;function DE(){let t=[],e=[],o=[],n=[],s=(l,h)=>{let u=Ua*.2*Math.pow(Math.sin(Math.PI*Math.pow(l,.85)),.9)*(h>0?1.06:.94),v=l*Ua-Ua*.12,p=h*u,d=Math.abs(h)*u*.42-.14*l*l*Ua;d+=Math.sin(l*17+(h>0?0:2.1))*.012*Ua*h*h;let m=(l-.3)*.55,g=Math.cos(m),y=Math.sin(m),b=d*g-p*y,w=d*y+p*g;return[v,b,w+.05*Ua*l*l]},i=(l,h)=>{let v=s(Math.min(1,l+.01),h),p=s(Math.max(0,l-.01),h),d=s(l,Math.min(1,h+.01)),m=s(l,Math.max(-1,h-.01)),g=[v[0]-p[0],v[1]-p[1],v[2]-p[2]],y=[d[0]-m[0],d[1]-m[1],d[2]-m[2]],b=[y[1]*g[2]-y[2]*g[1],y[2]*g[0]-y[0]*g[2],y[0]*g[1]-y[1]*g[0]],w=Math.hypot(b[0],b[1],b[2])||1,_=b[1]<0?-1:1;return[b[0]/w*_,b[1]/w*_,b[2]/w*_]};for(let l=0;l<=18;l++){let h=l/18;for(let u=0;u<=5*2;u++){let v=u/5-1;t.push(s(h,v)),e.push(i(Math.min(.97,Math.max(.03,h)),v)),o.push([h,v])}}let c=5*2+1;for(let l=0;l<18;l++)for(let h=0;h<c-1;h++){let u=l*c+h,v=u+1,p=u+c,d=p+1;n.push([u,p,v],[v,p,d])}let f=t.length;return t.push([-Ua*.12,0,-.003],[-Ua*.12,0,.003],[-Ua*.24,-.01,.0015],[-Ua*.24,-.01,-.0015]),e.push([0,1,0],[0,1,0],[0,1,0],[0,1,0]),o.push([0,0],[0,0],[-.1,0],[-.1,0]),n.push([f,f+2,f+1],[f,f+3,f+2]),{pos:t,nrm:e,uv:o,idx:n}}Ky.exports=t=>{let e=DE(),o=t({vert:`
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
		${PE}
		uniform float time;
		uniform float yScale, visible;
		varying vec3 v_pos, v_normal;
		varying vec2 v_uv;
		varying vec3 v_eye;

		${IE()}
		${$E()}
		${FE()}

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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{model:t.prop("model"),night:()=>n.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(a){a&&a.visible&&(o({model:a.model}),n.night>.01&&r({model:a.model}))}}});var t5=mt((oL,Jy)=>{"use strict";var{skylightGLSL:qE,Z_START:Zy,Z_END:GE}=$i(),{oculusGLSL:HE,A:mc}=_a(),{windowLightGLSL:BE,C:Zs}=vr();Jy.exports=(t,e)=>{let o=e.isPhone?900:2600,n=e.isPhone?350:900,r=e.isPhone?450:1300,a=e.isPhone?13:22,s=7,i=()=>(s=s*16807%2147483647,(s-1)/2147483646),c=Zs.x0+.6,f=Zs.x1-.3,l=[];for(let p=0;p<o;p++)l.push([2.5+i()*10.5,.3+i()*8,Zy-3.5+i()*(GE-Zy+4.5),i()]);for(let p=0;p<n;p++)l.push([mc.x0+.3+i()*(mc.x1-mc.x0-.6),.3+i()*7.5,mc.z0+.3+i()*(mc.z1-mc.z0-.6),i()]);for(let p=0;p<r;p++)l.push([c+i()*(f-c),.2+i()*5.6,Zs.z0+.25+i()*(Zs.z1-Zs.z0-.5),i()]);let h=p=>p.toFixed(4),u=[[0,-50,0,0],[0,-50,0,0],[0,-50,0,0],[0,-50,0,0]],v=t({vert:`
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

		${qE()}
		${HE()}
		${BE()}

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
				p.x = ${h(c)} + mod(p.x - ${h(c)} - gust.x * (0.55 + 0.9 * seed.w), ${h(f-c)});
				p.y += sin(time * 5.0 + s * 11.0) * 0.22 * gust.y;
				p.z += cos(time * 4.3 + s * 13.0) * 0.30 * gust.y;
				p.z = clamp(p.z, ${h(Zs.z0+.1)}, ${h(Zs.z1-.1)});
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
			float size = sharp + blur * ${h(a)} * (0.6 + 0.4 * seed.w);
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
		}`,attributes:{seed:l},count:l.length,primitive:"points",uniforms:{time:t.context("time"),pixelScale:p=>p.viewportHeight*.006,focus:(p,d)=>d&&d.focus||6,aperture:(p,d)=>d&&d.aperture||0,wake0:(p,d)=>(d&&d.wake||u)[0],wake1:(p,d)=>(d&&d.wake||u)[1],wake2:(p,d)=>(d&&d.wake||u)[2],wake3:(p,d)=>(d&&d.wake||u)[3],wakeDir:(p,d)=>d&&d.wakeDir||[0,0,1],gust:(p,d)=>d&&d.gust||[0,0]},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});return p=>v(p||{})}});var s5=mt((nL,a5)=>{"use strict";var{C:r5}=vr(),e5=tr(),o5=15.3,UE=37.1,n5=r5.z1+.9,jE=r5.z1+.7+16-.6;a5.exports=(t,e)=>{let o=e.isPhone?36:80,n=11,r=()=>(n=n*16807%2147483647,(n-1)/2147483646),a=[];for(let f=0;f<o;f++){let l=.35+Math.pow(r(),1.8)*2.4;a.push([o5+r()*(UE-o5),l,n5+r()*(jE-n5),r()])}let s=[],i=[];a.forEach(f=>{[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(l=>{s.push(l[0],l[1]),i.push(...f)})});let c=t({vert:`
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
		}`,attributes:{corner:s,seed:i},count:s.length/2,uniforms:{time:t.context("time"),night:()=>e5.night},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}});return function(){e5.night>.01&&c()}}});var Uh=mt((rL,ha)=>{"use strict";var i5=tr(),i0=U0(),WE=Yi(),ls=Math.PI,ue=t=>(+t).toFixed(4),ja=t=>`vec3(${ue(t[0])}, ${ue(t[1])}, ${ue(t[2])})`,Yo={x0:-2.05,z0:41.45,z1:47.55,top:5.1},Mo=-.55,Vn=-2,hn=42.25,Pn=43.65,La=45.35,Fr=46.75,rr=2.75,la=.12,VE=(Mo+Vn)/2,Fo={x:-1.3,y:1.42,w:.42,h:.52,z:Pn,cell:.026},Ge={x0:-1.85,x1:-.75,top:.98,z0:Pn-.3,z1:Pn-.02},Aa={x0:-1.44,x1:-1.16,y0:Ge.top-.002,y1:Ge.top+.018},fa={cx:-1.3,cz:Pn-.165,w:.2,d:.255,y:Ge.top+.0012},dr={x:-1.03,z:Pn-.14,r:.042,h:.075},Jo={x:-.86,z:Pn-.12,h:.085,r:.019};Jo.flame=[Jo.x,Ge.top+.012+Jo.h+.028,Jo.z];var Bh={a:[dr.x-.004,Ge.top+.03,dr.z+.004],b:[dr.x-.13,Ge.top+.34,dr.z-.12]},un=[-1.5,2.42,44.66],On=[-1.78,1.95,hn+.09],Ta={x:-1.32,z:44.08,y:.64,heading:.32},f5={window:{eye:[-1.3,1.33,42.8],target:[Fo.x,1.37,Pn],fov:54},paper:{eye:[-1.3,1.4,43.23],target:[fa.cx,Ge.top,fa.cz+.01],fov:40},front:{eye:[1.6,1.62,43],target:[-.9,1.35,43],fov:55},bay:{eye:[4.2,2.1,44.6],target:[-1,1.9,44.5],fov:55}},Sr={z0:(hn+Pn)/2+.03,z1:(hn+Pn)/2+.56,y0:.98,y1:1.78,x:Mo+.03,cell:.047};f5.peek={eye:[-1.2,1.42,42.95],target:[i0.PLAY.stoolX-i0.OFF[0],.85,i0.PLAY.keyFront+.2],fov:30};var cs={ink:null,inkDirty:!1,fold:0,slide:0,shown:!0,active:!1};function c5(){return`
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
		vec3 qa = ${ja(Bh.a)}, qb = ${ja(Bh.b)};
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
	}`}var Wn={WOOD:0,CARVED:1,VELVET:2,CUSHION:3,BRASS:4,INKGLASS:5,QUILL:6,LAMPGLASS:7,DARKWOOD:8};function h5(){let t=[],e=[],o=[],n=[],r=[],a=(f,l)=>[f[0]-l[0],f[1]-l[1],f[2]-l[2]],s=(f,l)=>[f[1]*l[2]-f[2]*l[1],f[2]*l[0]-f[0]*l[2],f[0]*l[1]-f[1]*l[0]],i=f=>{let l=Math.hypot(f[0],f[1],f[2])||1;return[f[0]/l,f[1]/l,f[2]/l]},c={pos:t,nrm:e,kind:o,uv:n,idx:r,norm:i,cross:s,sub:a};return c.v=(f,l,h,u)=>(t.push(f[0],f[1],f[2]),e.push(l[0],l[1],l[2]),o.push(h),n.push(u?u[0]:0,u?u[1]:0),t.length/3-1),c.quad=(f,l,h,u,v,p)=>{let d=i(s(a(l,f),a(u,f)));p=p||[[0,0],[1,0],[1,1],[0,1]];let m=c.v(f,d,v,p[0]),g=c.v(l,d,v,p[1]),y=c.v(h,d,v,p[2]),b=c.v(u,d,v,p[3]);r.push(m,g,y,m,y,b)},c.box=(f,l,h,u,v,p,d)=>{let m=(g,y,b,w,_,M,A,O)=>c.quad(g,y,b,w,d,[[_,A],[M,A],[M,O],[_,O]]);m([u,l,h],[u,l,p],[u,v,p],[u,v,h],h,p,l,v),m([f,l,p],[f,l,h],[f,v,h],[f,v,p],p,h,l,v),m([f,v,h],[u,v,h],[u,v,p],[f,v,p],f,u,h,p),m([f,l,p],[u,l,p],[u,l,h],[f,l,h],f,u,p,h),m([f,l,p],[u,l,p],[u,v,p],[f,v,p],f,u,l,v),m([u,l,h],[f,l,h],[f,v,h],[u,v,h],u,f,l,v)},c.tube=(f,l,h,u)=>{u=u||6;let v=t.length/3;for(let p=0;p<f.length;p++){let d=f[Math.max(0,p-1)],m=f[Math.min(f.length-1,p+1)],g=i(a(m,d)),y=Math.abs(g[1])>.9?[1,0,0]:[0,1,0],b=i(s(g,y)),w=s(b,g),_=typeof l=="function"?l(p/(f.length-1)):l;for(let M=0;M<=u;M++){let A=M/u*ls*2,O=Math.cos(A),R=Math.sin(A),q=[b[0]*O+w[0]*R,b[1]*O+w[1]*R,b[2]*O+w[2]*R];c.v([f[p][0]+q[0]*_,f[p][1]+q[1]*_,f[p][2]+q[2]*_],q,h,[p/(f.length-1),M/u])}}for(let p=0;p<f.length-1;p++)for(let d=0;d<u;d++){let m=v+p*(u+1)+d,g=m+u+1;r.push(m,m+1,g,m+1,g+1,g)}},c.lathe=(f,l,h,u,v)=>{v=v||20;let p=t.length/3;for(let d=0;d<h.length;d++){let[m,g]=h[d],y=h[Math.max(0,d-1)],b=h[Math.min(h.length-1,d+1)],w=b[0]-y[0],_=b[1]-y[1];for(let M=0;M<=v;M++){let A=M/v*ls*2,O=Math.cos(A),R=Math.sin(A),q=i([_*O,-w,_*R]);c.v([f+O*m,g,l+R*m],q,u,[M/v,d/(h.length-1)])}}for(let d=0;d<h.length-1;d++)for(let m=0;m<v;m++){let g=p+d*(v+1)+m,y=g+v+1;r.push(g,y,g+1,g+1,y,y+1)}},c.spire=(f,l,h,u,v,p)=>{let d=[[-u,-u],[u,-u],[u,u],[-u,u]];for(let m=0;m<4;m++){let g=d[m],y=d[(m+1)%4],b=[f+g[0],h,l+g[1]],w=[f+y[0],h,l+y[1]],_=[f,v,l],M=i(s(a(_,b),a(w,b))),A=c.v(b,M,p,[0,0]),O=c.v(w,M,p,[1,0]),R=c.v(_,M,p,[.5,1]);r.push(A,R,O)}},c.orient=()=>{for(let f=0;f<r.length;f+=3){let[l,h,u]=[r[f],r[f+1],r[f+2]],v=m=>[t[m*3],t[m*3+1],t[m*3+2]],p=s(a(v(h),v(l)),a(v(u),v(l))),d=[0,1,2].map(m=>e[l*3+m]+e[h*3+m]+e[u*3+m]);p[0]*d[0]+p[1]*d[1]+p[2]*d[2]<0&&(r[f+1]=u,r[f+2]=h)}return c},c}function Hh(t,e,o,n){if(t<=e)return o;let r=t-e;return r>=n?0:Math.max(0,Math.sqrt(n*n-r*r)-(n-o))}var ln={ys:1.78,a:.56,r:.78};ln.apex=ln.ys+Math.sqrt(ln.r*ln.r-(ln.r-ln.a)*(ln.r-ln.a));function XE(){let t=h5(),e=Wn.WOOD,o=Wn.CARVED,n=Wn.DARKWOOD,r=.06;t.box(Vn,0,hn,Mo+.08,la,Fr,n),t.box(Vn,rr-.06,hn-.04,Mo+.1,rr,Fr+.04,e),t.box(Mo,rr-.2,hn-.06,Mo+.12,rr-.06,Fr+.06,e),t.box(Mo+.02,rr,hn-.08,Mo+.14,rr+.07,Fr+.08,n),t.box(Vn,la,hn,Vn+.04,rr-.06,Fr,e);for(let[l,h,u]of[[hn-r,hn,-1],[Fr,Fr+r,1]]){t.box(Vn,0,l,Mo+.08,rr,h,e);let v=u<0?l-.018:h;t.box(Vn+.18,.45,Math.min(v,v+.018),Mo-.12,2.35,Math.max(v,v+.018),n),t.box(Vn+.26,.55,Math.min(v,v+.03*u),Mo-.2,2.25,Math.max(v,v+.03*u),e)}{let l=Pn-.02,h=Pn+.02,u=Fo.x-Fo.w/2,v=Fo.x+Fo.w/2,p=Fo.y-Fo.h/2,d=Fo.y+Fo.h/2;t.box(Vn,la,l,Mo,Aa.y0,h,e),t.box(Vn,Aa.y0,l,Aa.x0,Aa.y1,h,e),t.box(Aa.x1,Aa.y0,l,Mo,Aa.y1,h,e),t.box(Vn,Aa.y1,l,Mo,p,h,e),t.box(Vn,p,l,u,d,h,e),t.box(v,p,l,Mo,d,h,e),t.box(Vn,d,l,Mo,rr-.06,h,e);let m=.05,g=l-.025;t.box(u-m,p-m,g,v+m,p,l,n),t.box(u-m,d,g,v+m,d+m,l,n),t.box(u-m,p,g,u,d,l,n),t.box(v,p,g,v+m,d,l,n),t.box(u-m-.02,d+m,g-.015,v+m+.02,d+m+.03,l,e),t.box(Aa.x0-.01,Aa.y1,l-.006,Aa.x1+.01,Aa.y1+.008,l,Wn.BRASS)}{let l=Sr,h=Mo+.008,u=Mo+.052;t.box(h,l.y0,l.z0-.035,u,l.y1,l.z0,n),t.box(h,l.y0,l.z0,u,l.y0+.04,l.z1,n),t.box(h,l.y1-.04,l.z0,u,l.y1,l.z1,n),t.box(h+.008,la,l.z0-.035,u-.008,l.y0,l.z1,e),t.box(u-.008,la+.12,l.z0+.03,u,l.y0-.08,l.z1-.06,n),t.box(h-.004,l.y0-.012,l.z0-.045,u+.012,l.y0,l.z1,Wn.BRASS)}t.box(Vn,la,La-.02,Mo,rr-.06,La+.02,e),t.box(Ge.x0,Ge.top-.035,Ge.z0,Ge.x1,Ge.top,Ge.z1,e),t.tube([[Ge.x0,Ge.top-.018,Ge.z0],[Ge.x1,Ge.top-.018,Ge.z0]],.02,e,8);for(let l of[Ge.x0+.1,Ge.x1-.1]){let h=[];for(let u=0;u<=8;u++){let v=u/8;h.push([l,Ge.top-.04-.22*v,Ge.z1-.02-.22*Math.cos(v*ls/2)])}t.tube(h,.018,n,6)}t.box(Vn+.06,.12,hn,Mo-.1,.44,hn+.42,n),t.box(Vn+.08,.44,hn+.01,Mo-.12,.52,hn+.41,Wn.CUSHION),t.box(Vn+.06,.12,Fr-.42,Mo-.1,.44,Fr,n),t.box(On[0]-.05,On[1]-.16,hn,On[0]+.05,On[1]-.02,hn+.012,Wn.BRASS),t.tube([[On[0],On[1]-.09,hn+.012],[On[0],On[1]-.09,On[2]-.01],[On[0],On[1]-.05,On[2]]],.006,Wn.BRASS,6),t.lathe(On[0],On[2],[[0,On[1]-.05],[.028,On[1]-.035],[.034,On[1]+.01],[.024,On[1]+.06],[.026,On[1]+.065]],Wn.LAMPGLASS,16),t.box(Ta.x-.22,.12,Ta.z-.24,Ta.x+.22,Ta.y-.05,Ta.z+.16,n),t.box(Ta.x-.24,Ta.y-.05,Ta.z-.26,Ta.x+.24,Ta.y,Ta.z+.18,Wn.CUSHION),t.tube([[un[0],rr-.06,un[2]],[un[0],un[1]+.07,un[2]]],.005,Wn.BRASS,5),t.lathe(un[0],un[2],[[0,un[1]+.09],[.03,un[1]+.08],[.02,un[1]+.06]],Wn.BRASS,12),t.lathe(un[0],un[2],[[0,un[1]-.06],[.035,un[1]-.04],[.045,un[1]],[.035,un[1]+.05],[.018,un[1]+.07]],Wn.LAMPGLASS,16);let a=Mo,s=Mo+r;function i(l,h,u){let v=(l+h)/2,p=40,d=[];for(let g=0;g<=p;g++)d.push(la+(rr-.2-la)*g/p);let m=[];d.forEach(g=>m.push(g));for(let g=1;g<24;g++)m.push(ln.ys+(ln.apex-ln.ys)*g/24);m.sort((g,y)=>g-y);for(let g=0;g<m.length-1;g++){let y=m[g],b=m[g+1];if(b-y<1e-4)continue;let w=u?Hh(y,ln.ys,ln.a,ln.r):0,_=u?Hh(b,ln.ys,ln.a,ln.r):0,M=(A,O)=>[A,O];t.quad([s,y,v-w],[s,y,l],[s,b,l],[s,b,v-_],e,[M(v-w,y),M(l,y),M(l,b),M(v-_,b)]),t.quad([s,y,h],[s,y,v+w],[s,b,v+_],[s,b,h],e,[M(h,y),M(v+w,y),M(v+_,b),M(h,b)]),(w>0||_>0)&&(t.quad([a,y,v-w],[s,y,v-w],[s,b,v-_],[a,b,v-_],n),t.quad([s,y,v+w],[a,y,v+w],[a,b,v+_],[s,b,v+_],n),t.quad([a,y,l],[a,y,v-w],[a,b,v-_],[a,b,l],e),t.quad([a,y,v+w],[a,y,h],[a,b,h],[a,b,v+_],e))}if(t.box(a,rr-.2,l,s,rr-.06,h,e),t.box(s,rr-.42,l+.05,s+.012,rr-.24,h-.05,o),u){let g=[];for(let y=0;y<=30;y++){let b=y/30,w=b<.5?la+(ln.apex-la)*(b*2):ln.apex-(ln.apex-la)*((b-.5)*2),_=b<.5?-1:1;g.push([s+.01,Math.min(w,ln.apex-.002),v+_*(Hh(w,ln.ys,ln.a,ln.r)+.03)])}t.tube(g,.022,n,6)}}i(hn,Pn,!0),i(La,Fr,!0);{let l=Pn,h=La,u=(l+h)/2;t.box(a,la,l,s,rr-.06,h,e);let v={ys:1.85,a:.55,r:.8},p=[];for(let d=0;d<=40;d++){let m=d/40,g=v.ys+Math.sqrt(v.r*v.r-(v.r-v.a)*(v.r-v.a)),y=m<.5?.35+(g-.35)*(m*2):g-(g-.35)*((m-.5)*2),b=m<.5?-1:1;p.push([s+.012,Math.min(y,g-.002),u+b*Hh(y,v.ys,v.a,v.r)])}p.push(p[0]),t.tube(p,.02,n,6),t.box(s,.95,u-.22,s+.015,1.3,u+.22,o),t.box(s,.35,u-.42,s+.01,.75,u+.42,n),t.tube([[s+.03,1.12,h-.13],[s+.06,1.12,h-.13],[s+.06,1.12,h-.2]],.009,Wn.BRASS,6)}[hn-.02,Pn,La,Fr+.02].forEach((l,h)=>{let u=h===1||h===2,v=.075,p=rr+(u?.62:.4);t.box(Mo+.06,0,l-v,Mo+.06+2*v,p,l+v,e),t.box(Mo+.04,p-.04,l-v-.02,Mo+.08+2*v,p,l+v+.02,n);let d=Mo+.06+v,m=u?.62:.5;t.spire(d,l,p,v*.95,p+m,e);for(let g=1;g<=3;g++){let y=p+m*g/4.2,b=v*.95*(1-g/4.2)+.02;for(let[w,_]of[[1,0],[-1,0],[0,1],[0,-1]])t.tube([[d+w*(b-.02),y-.02,l+_*(b-.02)],[d+w*(b+.015),y+.03,l+_*(b+.015)]],.008,n,4)}t.lathe(d,l,[[0,p+m-.02],[.03,p+m+.03],[.022,p+m+.07],[0,p+m+.1]],e,10)});let f=(l,h,u)=>{let v=(l+h)/2,p=Mo+.075,d=rr+.07,m=d+u,g=[1,0,0],y=t.v([p,d,l],g,o,[l,d]),b=t.v([p,d,h],g,o,[h,d]),w=t.v([p,m,v],g,o,[v,m]);t.idx.push(y,b,w);let _=t.v([p-.04,d,l],[-1,0,0],e),M=t.v([p-.04,d,h],[-1,0,0],e),A=t.v([p-.04,m,v],[-1,0,0],e);t.idx.push(_,A,M);let O=[],R=[];for(let G=0;G<=10;G++){let X=G/10;O.push([p+.02,d+u*X,l+(v-l)*X]),R.push([p+.02,d+u*X,h+(v-h)*X])}t.tube(O,.022,n,6),t.tube(R,.022,n,6);for(let G=2;G<=8;G+=2)for(let X of[O[G],R[G]])t.tube([X,[X[0]+.01,X[1]+.06,X[2]+(X===O[G]?-.02:.02)]],.01,n,4);t.lathe(p,v,[[0,m],[.035,m+.06],[.022,m+.12],[0,m+.16]].map(([G,X])=>[G,X]),e,10);let q=Math.min(.17,u*.32),F=d+u*.38,K=[];for(let G=0;G<=24;G++){let X=G/24*ls*2;K.push([p+.012,F+Math.sin(X)*q,v+Math.cos(X)*q])}t.tube(K,.012,n,5)};f(hn-.02,Pn,.52),f(Pn,La,.82),f(La,Fr+.02,.52),t.lathe(dr.x,dr.z,[[0,Ge.top],[.036,Ge.top+.001],[dr.r,Ge.top+.012],[dr.r*1.02,Ge.top+.035],[.036,Ge.top+.052],[.02,Ge.top+.062],[.016,Ge.top+.068]],Wn.INKGLASS,24),t.lathe(dr.x,dr.z,[[.016,Ge.top+.064],[.021,Ge.top+.066],[.022,Ge.top+.075],[.016,Ge.top+.076],[0,Ge.top+.072]],Wn.BRASS,20);{let l=Bh.a,h=Bh.b,u=26,v=y=>{let b=Math.sin(y*ls)*.025;return[l[0]+(h[0]-l[0])*y+b*.6,l[1]+(h[1]-l[1])*y+b*.4,l[2]+(h[2]-l[2])*y+b]},p=[];for(let y=0;y<=u;y++)p.push(v(y/u));t.tube(p,y=>.0028*(1-.7*y)+6e-4,Wn.QUILL,5);let d=t.norm(t.sub(h,l)),m=t.norm(t.cross(d,[.2,1,.1])),g=t.cross(m,d);for(let y of[-1,1]){let b=t.pos.length/3;for(let w=0;w<=u;w++){let _=w/u,M=v(_),A=_<.28?0:(y>0?.03:.02)*Math.sin(ls*Math.pow((_-.28)/.72,.75)),O=A*.25,R=[M[0]+m[0]*y*A-g[0]*O,M[1]+m[1]*y*A-g[1]*O,M[2]+m[2]*y*A-g[2]*O];t.v(M,g,Wn.QUILL,[_,0]),t.v(R,g,Wn.QUILL,[_,y])}for(let w=0;w<u;w++){let _=b+w*2;t.idx.push(_,_+2,_+1,_+1,_+2,_+3)}}}return t.orient()}function YE(t,e){let n=Yo.top,r=Yo.x0;t(r-.35,0,Yo.z0-.35,r,n+.35,Yo.z1+.35),t(r,0,Yo.z0-.35,-.35,n,Yo.z0),t(r,0,Yo.z1,-.35,n,Yo.z1+.35),t(r,n,Yo.z0,-.35,n+.35,Yo.z1),t(.35,0,Yo.z0-.42,.35+.16,n,Yo.z0),t(.35,0,Yo.z1,.35+.16,n,Yo.z1+.42),t(.35,n,Yo.z0-.5,.35+.18,n+.42,Yo.z1+.5),t(.35,n+.42,Yo.z0-.6,.35+.26,n+.52,Yo.z1+.6),t(.35,0,Yo.z0-.5,.35+.22,.42,Yo.z0),t(.35,0,Yo.z1,.35+.22,.42,Yo.z1+.5),t(-.35-.01,0,Yo.z0,.35+.12,.02,Yo.z1),e(r,Yo.z0,-.35,Yo.z1)}ha.exports=t=>{let e=G0(),o=i5.GLSL,n=XE(),r=`
	precision highp float;
	${o}
	uniform float time;
	${e.lanternGLSL()}
	${i0.roomGLSL()}
	${c5()}
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
		}`,attributes:{position:n.pos,normal:n.nrm,kind:n.kind,uv:n.uv},elements:n.idx});function i(zt,gt,ct,Wt){let ze=[],Ee=[],Ye=[],_e=[],ho=[],Jt=Mo-.02,ge=ln.apex+.08,Ce=la+.015;for(let ro=0;ro<=40;ro++){let wo=ro/40,Oe=ge+(Ce-ge)*wo;for(let xe=0;xe<=90;xe++){let yt=xe/90,se=ct?.2+.13*wo*wo:gt-zt,Pe=zt+yt*se,de=ct?.05+.02*wo:.035+.01*Math.sin(yt*7),Qt=yt*Wt*ls*2+Math.sin(wo*2+yt*5)*.6,Eo=Jt-de*(.5+.5*Math.sin(Qt))-(ct?.02*wo:0),io=[1,0,-(-de*.5*Math.cos(Qt)*Wt*ls*2/se)],Ze=Math.hypot(io[0],io[1],io[2]);ze.push(Eo,Oe,Pe),Ee.push(io[0]/Ze,0,io[2]/Ze),Ye.push(2),_e.push(Math.sin(Qt),wo)}}for(let ro=0;ro<40;ro++)for(let wo=0;wo<90;wo++){let Oe=ro*91+wo,xe=Oe+90+1;ho.push(Oe,xe,Oe+1,Oe+1,xe,xe+1)}for(let ro=0;ro<ho.length;ro+=3){let[wo,Oe,xe]=[ho[ro],ho[ro+1],ho[ro+2]],yt=Qt=>[ze[Qt*3],ze[Qt*3+1],ze[Qt*3+2]],se=[0,1,2].map(Qt=>yt(Oe)[Qt]-yt(wo)[Qt]),Pe=[0,1,2].map(Qt=>yt(xe)[Qt]-yt(wo)[Qt]);se[1]*Pe[2]-se[2]*Pe[1]<0&&(ho[ro+1]=xe,ho[ro+2]=Oe)}return{pos:ze,nrm:Ee,kind:Ye,uv:_e,idx:ho}}let c=i(hn+.02,hn+.4,!0,6),f=i(La+.04,Fr-.04,!1,9),l={pos:c.pos.concat(f.pos),nrm:c.nrm.concat(f.nrm),kind:c.kind.concat(f.kind),uv:c.uv.concat(f.uv),idx:c.idx.concat(f.idx.map(zt=>zt+c.pos.length/3))},h=t({vert:`
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
			vec3 p = vec3(${ue(Sr.x)}, ${ue((Sr.y0+Sr.y1)/2)} + corner.y * ${ue((Sr.y1-Sr.y0)/2-.04)}, ${ue((Sr.z0+Sr.z1)/2)} + corner.x * ${ue((Sr.z1-Sr.z0)/2)});
			v_pos = p; v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`${r}
		varying vec3 v_pos, v_eye;
		void main() {
			vec2 g = (v_pos.zy - vec2(${ue((Sr.z0+Sr.z1)/2)}, ${ue((Sr.y0+Sr.y1)/2)})) * ${ue(Fo.cell/Sr.cell)};
			float hole = grilleHole(g);
			if (hole > 0.5) discard;
			vec3 N = vec3(v_eye.x < ${ue(Sr.x)} ? -1.0 : 1.0, 0.0, 0.0);
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),d=14,m=[];for(let zt=0;zt<d;zt++)[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]].forEach(gt=>m.push(gt[0],gt[1],(zt+.5)/d));let g=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec3 c;
		varying vec3 v_pos;
		void main() {
			// slices across the booth, from the window back towards the bench
			vec3 p = vec3(${ue(VE)} + c.x * ${ue((Mo-Vn)/2-.02)}, 0.9 + (c.y + 1.0) * 0.8, ${ue(Pn-.03)} - c.z * 1.25);
			v_pos = p;
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,frag:`
		precision highp float;
		uniform float night, time;
		${c5().split("// the candle's light is hidden")[0]}
		varying vec3 v_pos;
		void main() {
			float T = throughGrille(v_pos, 0.0);
			float d = length(v_pos - ${ja(un)});
			// dust drifting in the beam
			float dust = 0.65 + 0.35 * sin(v_pos.x * 23.0 + time * 0.3) * sin(v_pos.y * 17.0 - time * 0.21) * sin(v_pos.z * 19.0 + time * 0.17);
			vec3 col = vec3(1.0, 0.68, 0.36) * T * dust * 0.035 / (0.4 + d * d * 0.5) * mix(1.0, 0.7, night);
			gl_FragColor = vec4(col, 1.0);
		}`.replace("float grilleHole","float grilleHole"),attributes:{c:{buffer:t.buffer(m),size:3}},count:m.length/3,depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}}),y=(()=>{if(typeof document=="undefined")return null;let zt=document.createElement("canvas");zt.width=512,zt.height=652;let gt=zt.getContext("2d");gt.fillStyle="#cdb38a",gt.fillRect(0,0,zt.width,zt.height);let ct=7,Wt=()=>(ct=ct*1664525+1013904223>>>0,ct/4294967296);for(let Ee=0;Ee<2400;Ee++){gt.fillStyle=`rgba(${Wt()<.5?"90,62,30":"245,230,200"},${.03+Wt()*.05})`;let Ye=Wt()*zt.width,_e=Wt()*zt.height;gt.fillRect(Ye,_e,1+Wt()*14,1)}for(let Ee=0;Ee<26;Ee++){let Ye=Wt()*zt.width,_e=Wt()*zt.height,ho=20+Wt()*90,So=gt.createRadialGradient(Ye,_e,0,Ye,_e,ho);So.addColorStop(0,`rgba(120,80,35,${.04+Wt()*.06})`),So.addColorStop(1,"rgba(120,80,35,0)"),gt.fillStyle=So,gt.fillRect(Ye-ho,_e-ho,ho*2,ho*2)}let ze=gt.createRadialGradient(zt.width/2,zt.height/2,zt.width*.3,zt.width/2,zt.height/2,zt.height*.72);return ze.addColorStop(0,"rgba(110,70,30,0)"),ze.addColorStop(1,"rgba(110,70,30,0.38)"),gt.fillStyle=ze,gt.fillRect(0,0,zt.width,zt.height),zt})(),b=y?t.texture({data:y,min:"linear",mag:"linear",flipY:!1}):t.texture(),w=t.texture({shape:[8,8],data:new Uint8Array(8*8*4)}),_=[18,24],M=[],A=[];for(let zt=0;zt<=_[1];zt++)for(let gt=0;gt<=_[0];gt++)M.push(gt/_[0],zt/_[1]);for(let zt=0;zt<_[1];zt++)for(let gt=0;gt<_[0];gt++){let ct=zt*(_[0]+1)+gt,Wt=ct+_[0]+1;A.push(ct,ct+1,Wt,ct+1,Wt+1,Wt)}let O=t({vert:`
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
		}`,attributes:{st:{buffer:t.buffer(M),size:2}},elements:A,uniforms:{fold:()=>cs.fold,slide:()=>cs.slide,paperTex:b,inkTex:w},cull:{enable:!1}}),R=h5();R.lathe(Jo.x,Jo.z,[[0,Ge.top],[.048,Ge.top+.002],[.052,Ge.top+.012],[.046,Ge.top+.014],[.022,Ge.top+.012],[0,Ge.top+.012]],Wn.BRASS,24),R.lathe(Jo.x,Jo.z,[[0,Ge.top+.012],[Jo.r,Ge.top+.012],[Jo.r*1.02,Ge.top+.012+Jo.h*.6],[Jo.r,Ge.top+.012+Jo.h],[Jo.r*.75,Ge.top+.012+Jo.h-.004],[0,Ge.top+.012+Jo.h-.008]],9,20),R.tube([[Jo.x,Ge.top+.012+Jo.h-.008,Jo.z],[Jo.x+.001,Ge.top+.012+Jo.h+.012,Jo.z]],.0012,8,4),R.orient();let q=t({vert:a,frag:`${r}
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
		}`,attributes:{position:R.pos,normal:R.nrm,kind:R.kind,uv:R.uv},elements:R.idx}),F=t({vert:`
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
		}`,attributes:{corner:[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]]},count:6,uniforms:{halo:t.prop("halo")},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}}}),K=[0,0],G=t({uniforms:{view:t.prop("view")}}),X=new Float32Array(16);function dt(zt){WE.translate(X,zt.view,i0.OFF),G({view:X},()=>Ot(zt))}function Ot(zt){let gt=zt&&zt.reflected;if(s(),h(),u(),v(),cs.ink&&cs.inkDirty){let ct=cs.ink;K[0]!==ct.width||K[1]!==ct.height?(w({data:ct,min:"linear",mag:"linear",flipY:!1}),K=[ct.width,ct.height]):w.subimage(ct),cs.inkDirty=!1}cs.shown&&O(),i5.night>.01&&(q(),gt||(F({halo:1}),F({halo:0}))),gt||(p(),g())}return dt};ha.exports.addBay=YE;ha.exports.BAY=Yo;ha.exports.OFF=i0.OFF;ha.exports.STATE=cs;var l5=t=>[t[0]+i0.OFF[0],t[1]+i0.OFF[1],t[2]+i0.OFF[2]];ha.exports.SHOTS=Object.fromEntries(Object.entries(f5).map(([t,e])=>[t,Object.assign({},e,{eye:l5(e.eye),target:l5(e.target)})]));ha.exports.SEAT=Ta;ha.exports.LAMP=un;ha.exports.SCONCE=On;ha.exports.GRILLE=Fo;ha.exports.PAPER=fa;ha.exports.ZONE={FRONT:Mo,BACK:Vn,ZA:hn,ZB:Pn,ZC:La,ZD:Fr}});var Pd=mt((aL,d5)=>{"use strict";function KE(t){let e=t>>>0||1;return function(){return e=e*1664525+1013904223>>>0,e/4294967296}}var u5={stroke:.05,letter:.045,word:.15,comma:.28,stop:.45,line:.25,para:.6},QE=["th","ng","er"];function ZE(t,e,o){o=Object.assign({ink:"#2a1d12",xh:14,speed:23,lineHeight:2.85,seed:7,width:.12,pace:.45},o||{});let n=t.getContext("2d"),r={};Object.keys(u5).forEach(d=>{r[d]=u5[d]*o.pace});let a=[],s=0,i=0,c=0,f=[];function l(d,m){let g=KE(o.seed),y=o.xh,b={},w=X=>{let dt=e[X];if(!dt)return null;let Ot=Math.floor(g()*dt.length);return dt.length>1&&Ot===b[X]&&(Ot=(Ot+1)%dt.length),b[X]=Ot,dt[Ot]},_=X=>{if(e[X])return{g:w(X),sc:1};let dt=X.toLowerCase();return e[dt]?{g:w(dt),sc:/[A-Z]/.test(X)?1.32:1}:null},M=[],A=.15,O=0,R=0,q=(g()-.5)*.02,F=m/y,K=d.split(/\n\s*\n/);K.forEach((X,dt)=>{X.replace(/\s+/g," ").trim().split(" ").forEach(zt=>{let gt=[];for(let Ee=0;Ee<zt.length;Ee++){let Ye=zt.substr(Ee,2).toLowerCase();if(QE.indexOf(Ye)>=0&&e[Ye]&&g()<.55&&zt[Ee]===zt[Ee].toLowerCase()){gt.push({ch:Ye,gl:{g:w(Ye),sc:1}}),Ee++;continue}let _e=_(zt[Ee]);_e&&_e.g&&gt.push({ch:zt[Ee],gl:_e})}let ct=gt.map(()=>.17+g()*.07),Wt=gt.reduce((Ee,Ye,_e)=>Ee+Ye.gl.g.w*Ye.gl.sc+ct[_e],0);O>0&&O+Wt>F&&(O=0,R++,A+=r.line,q=(g()-.5)*.02),gt.forEach((Ee,Ye)=>{let _e=Ee.gl.g,ho=Ee.gl.sc*(.95+g()*.1),So=(g()-.5)*.06,Ko=(g()-.5)*.08+q*O,Jt=O,ge=R*o.lineHeight+1.9+Ko,Ce=Math.cos(So),ro=Math.sin(So),wo=xe=>[(Jt+(xe[0]*Ce-xe[1]*ro)*ho)*y,(ge+(xe[0]*ro+xe[1]*Ce)*ho)*y],Oe=(xe,yt)=>{let se=0;for(let de=1;de<xe.length;de++)se+=Math.hypot(xe[de][0]-xe[de-1][0],xe[de][1]-xe[de-1][1]);let Pe=Math.max(o.minDur||(yt?.06:.07),se/(o.speed*y));M.push({pts:xe,L:se,start:A,dur:Pe,dot:yt}),A+=Pe};if(_e.s.forEach((xe,yt)=>{yt>0&&(A+=r.stroke),Oe(xe.map(wo),!1)}),_e.dot){let xe=_e.s[0][0];_e.s.forEach(se=>se.forEach(Pe=>{Pe[1]<xe[1]&&(xe=Pe)}));let yt=wo([xe[0]+.1,-1.36]);A+=r.stroke*1.4,Oe([yt,[yt[0]+y*.05,yt[1]+y*.03]],!0)}A+=r.letter*(.6+g()*.8),O+=_e.w*ho+ct[Ye]});let ze=zt[zt.length-1];A+=/[.!?]/.test(ze)?r.stop:/[,;:]/.test(ze)?r.comma:r.word,O+=.55+g()*.2}),dt<K.length-1&&(O=0,R+=1.6,A+=r.para)});let G=(R+1)*o.lineHeight*y+y*1.55;return{strokes:M,total:A,height:G}}function h(d,m){if(o.fixed){let g=o.fixed;n.setTransform(1,0,0,1,g.mx,g.my),n.clearRect(-g.mx,-g.my,t.width,t.height)}else{let g=Math.min(window.devicePixelRatio||1,2);t.width=Math.round(d*g),t.height=Math.round(m*g),t.style.height=m+"px",t.style.width=d+"px",n.setTransform(g,0,0,g,0,0),n.clearRect(0,0,d,m)}n.strokeStyle=o.ink,n.fillStyle=o.ink,n.lineCap="round",n.lineJoin="round",o.shadow&&(n.shadowColor=o.shadow,n.shadowBlur=o.shadowBlur||6)}let u=d=>d<.5?2*d*d:1-Math.pow(-2*d+2,2)/2;function v(d,m){let g=f[d.i]||0;if(m<=g)return;let y=o.width*o.xh,b=0;for(let w=1;w<d.pts.length;w++){let _=d.pts[w-1],M=d.pts[w],A=Math.hypot(M[0]-_[0],M[1]-_[1]),O=b,R=b+A;if(b=R,R<=g||A===0)continue;if(O>=m)break;let q=Math.max(0,(g-O)/A),F=Math.min(1,(m-O)/A),K=[_[0]+(M[0]-_[0])*q,_[1]+(M[1]-_[1])*q],G=[_[0]+(M[0]-_[0])*F,_[1]+(M[1]-_[1])*F],X=(O+R)/2/(d.L||1),dt=.72+.28*Math.sin(Math.PI*Math.min(1,Math.max(0,X)));n.lineWidth=y*dt,n.globalAlpha=.86+.14*dt,n.beginPath(),n.moveTo(K[0],K[1]),n.lineTo(G[0],G[1]),n.stroke()}d.dot&&g===0&&(n.globalAlpha=1,n.beginPath(),n.arc(d.pts[0][0],d.pts[0][1],y*.75,0,Math.PI*2),n.fill()),f[d.i]=m}function p(d){let m=(d-c)/1e3;for(let g=0;g<a.length;g++){let y=a[g];if(y.start>m)break;let b=Math.min(1,(m-y.start)/y.dur);v(y,u(b)*y.L)}if(o.onPen){let g=0;for(;g+1<a.length&&a[g+1].start<=m;)g++;a[g]&&o.onPen(a[g].pts[0][1])}m<s?i=requestAnimationFrame(p):o.onDone&&o.onDone()}return{write(d,m){cancelAnimationFrame(i);let g=o.fixed?t.width-2*o.fixed.mx:t.parentElement.clientWidth,y=l(d,g);a=y.strokes,s=y.total;let b=typeof o.maxTime=="function"?o.maxTime(d):o.maxTime;if(b&&s>b){let _=b/s;a.forEach(M=>{M.start*=_,M.dur*=_}),s=b}a.forEach((_,M)=>{_.i=M}),f=[],h(g,y.height);let w=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(m||w){a.forEach(_=>v(_,_.L));return}return c=performance.now(),i=requestAnimationFrame(p),s},finish(){cancelAnimationFrame(i),a.forEach(d=>v(d,d.L)),o.onDone&&o.onDone()},stop(){cancelAnimationFrame(i)}}}d5.exports=ZE});var $d=mt((sL,p5)=>{"use strict";var Id=tr(),JE='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M5.5 18.5l1.7-1.7M16.8 7.2l1.7-1.7"/></svg>',tk='<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M19.5 14.6A8 8 0 0 1 9.4 4.5a8 8 0 1 0 10.1 10.1z"/></svg>';p5.exports=function(e){let o=document.createElement("button");o.type="button",o.className=e+" light-toggle";let n=()=>{let r=Id.isNight;o.innerHTML=r?JE:tk,o.setAttribute("aria-label",r?"Switch to day":"Switch to night"),o.title=r?"Day":"Night",o.setAttribute("aria-pressed",r?"true":"false")};return n(),Id.onChange(n),["mousedown","pointerdown"].forEach(r=>o.addEventListener(r,a=>a.stopPropagation())),o.addEventListener("click",r=>{r.stopPropagation(),Id.toggle()}),o}});var x5=mt((iL,g5)=>{"use strict";var In=Uh(),ek=U0(),ok=Pd(),nk="81efb912-50a2-4fcd-b5e8-c3a28eecbe93",v5=100,A0=t=>Math.max(0,Math.min(1,t)),Qr=(t,e,o)=>{let n=A0((o-t)/(e-t));return n*n*(3-2*n)},Wa=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,za=(t,e,o)=>t+(e-t)*o,Ul=(t,e,o)=>[za(t[0],e[0],o),za(t[1],e[1],o),za(t[2],e[2],o)];function Js(t,e){let o=t.length-1,n=A0(e)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,s=t[Math.max(0,r-1)],i=t[r],c=t[r+1],f=t[Math.min(o,r+2)];return[0,1,2].map(l=>.5*(2*i[l]+(-s[l]+c[l])*a+(2*s[l]-5*i[l]+4*c[l]-f[l])*a*a+(-s[l]+3*i[l]-3*c[l]+f[l])*a*a*a))}var jh=t=>({eye:t.eye.slice(),target:t.target.slice(),fov:t.fov,roll:0});function Fd(t,e,o){return{eye:Ul(t.eye,e.eye,o),target:Ul(t.target,e.target,o),fov:za(t.fov,e.fov,o),roll:za(t.roll||0,e.roll||0,o)}}var jl=ek.PLAY,Va=[jl.stoolX,1,jl.keyFront+.25],Wh=[jl.stoolX,jl.keyTop+.03,jl.keyFront-.05],qd=t=>{let e=(15+110*t)*Math.PI/180,o=2.1+.4*t;return[Va[0]+Math.cos(e)*o,1.15+.4*t,Va[2]+Math.sin(e)*o]},gc=[{eye:qd(1),target:[Va[0],.92,Va[2]-.15],fov:46,aperture:.6},{eye:[-6.93,3.2,45.85],target:[-6.93,.77,45.3],fov:34,aperture:.6,to:Wh},{eye:[Va[0]+1,1.14,Va[2]+1.72],target:[Wh[0]+.05,.8,Wh[2]+.05],fov:40,aperture:1,to:Wh}],m5=(t,e)=>Math.hypot(t[0]-e[0],t[1]-e[1],t[2]-e[2]),Vh=t=>({fade:0,letterbox:.55,exposure:1.3,focus:m5(t.eye,t.to||Va),aperture:t.aperture,vignette:.42,shafts:0}),Dd={fade:0,letterbox:.55,exposure:2.1,focus:6.2,aperture:.55,vignette:.45,shafts:0},xc={fade:0,letterbox:.55,exposure:2,focus:.82,aperture:1.1,vignette:.48,shafts:0},Bl={fade:0,letterbox:.55,exposure:1.8,focus:.42,aperture:1.3,vignette:.5,shafts:0},rk=`
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
`;g5.exports=function(e){let{root:o,avatar:n}=e,r=document.createElement("style");r.textContent=rk,document.head.appendChild(r);let a=document.createElement("div");a.className="conf-ui",a.innerHTML=`
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
		</div>`,o.appendChild(a);let s=a.querySelector(".conf-write"),i=a.querySelector("textarea"),c=a.querySelector('[data-act="send"]'),f=a.querySelector(".conf-hint"),l=a.querySelector(".conf-close"),h=a.querySelector(".conf-final"),u=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,v=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;i.addEventListener("input",()=>{let yt=i.value.match(new RegExp("^\\s*(\\S+\\s+){0,"+(v5-1)+"}\\S+"));(i.value.trim()?i.value.trim().split(/\s+/).length:0)>v5&&yt&&(i.value=yt[0]),c.disabled=!i.value.trim()}),["keydown","keyup","keypress"].forEach(yt=>i.addEventListener(yt,se=>se.stopPropagation())),a.addEventListener("pointerdown",yt=>yt.stopPropagation()),a.addEventListener("click",yt=>{let se=yt.target.closest("button");se&&(yt.stopPropagation(),se.dataset.act==="send"&&dt(),se.dataset.act==="leave"&&gt())});let p=!1,d="",m=0,g=null,y=null,b="",w=null,_=0,M="",A=document.createElement("canvas");A.width=512,A.height=652;function O(yt){yt!==M&&(M=yt,s.classList.toggle("on",yt==="write"),f.classList.toggle("on",yt==="hint"),l.classList.toggle("on",p&&yt==="hint"&&(d==="room"||d==="peek")),h.classList.toggle("on",yt==="final"),yt==="write"&&setTimeout(()=>{if(d==="write")try{i.focus({preventScroll:!0})}catch(se){}},900))}function R(yt){d=yt,m=0}function q(yt,se){if(p)return;p=!0,g={eye:yt.eye.slice(),target:yt.target.slice(),fov:yt.fov,roll:yt.roll||0},y=Object.assign({},se),b="",i.value="",c.disabled=!0,In.STATE.fold=0,In.STATE.slide=0,In.STATE.shown=!0,In.STATE.active=!0;let Pe=A.getContext("2d");Pe.setTransform(1,0,0,1,0,0),Pe.clearRect(0,0,A.width,A.height),In.STATE.ink=A,In.STATE.inkDirty=!0,document.body.classList.add("confessing");let de=gc[0],Qt=v?.3:5.5,Eo=v?.3:3.6;F.i=0,F.u=0,F.T=Qt+Eo,F.moving=!0,F.rest=0,F.raw=!0,F.lookFrom=y,F.lookTo=Vh(de);let E=[g.eye,[3.4,1.75,44.5],[.3,1.72,44.7],[-2.8,1.5,45.4],qd(0)],io=[g.target,[-3,1.9,44.5],[-6.5,1.3,44.9],[Va[0],1,Va[2]-.1],de.target];F.path=Ze=>{let ko=Ze*(Qt+Eo);if(ko<Qt){let Er=ko/Qt,Yn=1-Math.cos(Er*Math.PI/2);return{eye:Js(E,Yn),target:Js(io,Qr(0,1,Yn*1.05)),fov:za(g.fov,52,Qr(.4,1,Yn)),roll:(g.roll||0)*(1-Yn)}}let Oo=(ko-Qt)/Eo,bn=1-Math.pow(1-Oo,2.4);return{eye:qd(bn),target:de.target,fov:za(52,de.fov,bn),roll:.05*Math.sin(Math.PI*bn)}},R("room"),O("")}let F={i:0,u:0,T:1,moving:!1,rest:0,raw:!1,path:null,lookFrom:null,lookTo:null},K=()=>u?"Scroll on":"Swipe up";function G(yt){let se=ze,Pe=gc[yt],de={eye:se.eye.slice(),target:se.target.slice(),fov:se.fov,roll:se.roll||0},Qt=Ul(de.eye,Pe.eye,.5),Eo=[Qt[0]-Va[0],0,Qt[2]-Va[2]],E=Math.hypot(Eo[0],Eo[2])||1,io=[Qt[0]+Eo[0]/E*.6,Qt[1]+.3,Qt[2]+Eo[2]/E*.6];F.path=Ze=>{let ko=1-Ze;return{eye:[0,1,2].map(Oo=>ko*ko*de.eye[Oo]+2*ko*Ze*io[Oo]+Ze*Ze*Pe.eye[Oo]),target:Ul(de.target,Pe.target,Qr(0,1,Ze)),fov:za(de.fov,Pe.fov,Ze),roll:de.roll*ko}},F.lookFrom=X||Vh(gc[F.i]),F.lookTo=Vh(Pe),F.i=yt,F.u=0,F.moving=!0,F.rest=0,F.raw=!1,F.T=v?.4:Math.max(2.8,Math.min(4.4,m5(de.eye,Pe.eye)*1+1.6)),O("")}let X=null;function dt(){if(d!=="write"||(b=i.value.trim(),!b))return;i.blur(),O("");let yt=Math.max(10,Math.min(22,24-b.length/28));w=ok(A,e.glyphs(),{ink:"rgba(30,16,8,0.97)",xh:yt,width:.15,seed:11+b.length,speed:60,pace:.2,minDur:.03,maxTime:se=>2.4+se.length/160,fixed:{mx:46,my:40},onPen:()=>{In.STATE.inkDirty=!0},onDone:()=>{In.STATE.inkDirty=!0}}),R("down")}function Ot(){try{let yt={access_key:nk,subject:"A note left in the confessional",from_name:"Your gallery",message:b,page:location.href,when:new Date().toString()};fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(yt),keepalive:!0}).catch(()=>{})}catch(yt){}}function zt(){d==="ready"&&(Ot(),R("fold"),O(""))}function gt(){!p||d==="leave"||(O(""),i.blur(),ct=ze,Wt=X,R("leave"))}let ct=null,Wt=null,ze=null,Ee=In.SHOTS.window,Ye=In.OFF,_e=yt=>[yt[0]+Ye[0],yt[1],yt[2]],ho=[[3.4,1.75,44.5],[.3,1.72,44.5],[-2.5,1.66,45],[-4.6,1.6,46.55],[-7,1.58,47.15],[-9.3,1.55,46.4],_e([1.25,1.5,43.25]),_e([-.55,1.36,42.92])],So=[[-3,1.9,44.5],[-6.5,1.5,44.6],[-7,1,44.4],[-7.6,.95,44],[-10.5,1.5,44.6],_e([-1,1.55,43.6]),_e([-1.4,1.35,43.1]),_e([-1.5,1.33,43.3])];function Ko(yt){let se=Wa(A0(yt)),Pe=[g.eye,...ho,Ee.eye],de=[g.target,...So,Ee.target];return{eye:Js(Pe,se),target:Js(de,Qr(0,1,se*1.03)),fov:za(g.fov,Ee.fov,Qr(.6,.97,se)),roll:(g.roll||0)*(1-se)}}function Jt(yt,se){if(v)return yt;let Pe=performance.now()/1e3,de=.004*se,Qt=Math.sin(Pe*.61)*.6+Math.sin(Pe*1.37+1.3)*.4,Eo=Math.sin(Pe*.47+2.1)*.6+Math.sin(Pe*1.13+.4)*.4;return{eye:[yt.eye[0]+Qt*de,yt.eye[1]+Eo*de*.7,yt.eye[2]],target:[yt.target[0]+Eo*de*1.5,yt.target[1]+Qt*de,yt.target[2]],fov:yt.fov,roll:yt.roll}}function ge(yt,se,Pe){let de={};for(let Qt in se)de[Qt]=typeof se[Qt]=="number"&&typeof yt[Qt]=="number"?za(yt[Qt],se[Qt],Pe):se[Qt];return de}function Ce(yt){yt*=window.__confSpeed||1,m+=yt;let se=jh(Ee),Pe=jh(In.SHOTS.paper),de,Qt,Eo=jh(In.SHOTS.peek);if(d==="room")F.moving?(F.u=Math.min(1,F.u+yt/F.T),de=F.path(F.raw?F.u:Wa(F.u)),Qt=ge(F.lookFrom,F.lookTo,Qr(.1,.9,F.u)),F.raw&&(Qt.fade=(y.fade||0)*(1-Qr(0,.12,F.u))),F.u>=1&&(F.moving=!1,F.rest=0,f.textContent=K(),O("hint"))):(F.rest+=yt,de=Jt(jh(gc[F.i]),2.5),Qt=Vh(gc[F.i]));else if(d==="enter"){let io=A0(m/(v?.6:9)),Ze=Wa(io),ko=[ro.eye,[-7.6,1.9,47.6],[-9.6,1.85,45.6],_e([.75,1.5,42.95]),_e([-.25,1.42,42.82]),_e([-.9,1.42,42.82]),Eo.eye];de={eye:Js(ko,Ze),target:Ul(ro.target,Eo.target,Qr(0,.35,Ze)),fov:za(ro.fov,Eo.fov,Qr(.3,1,Ze)),roll:0},Qt=ge(wo,Dd,Qr(.2,.9,io)),io>=1&&R("peek")}else if(d==="peek")de=Jt(Eo,1.5),Qt=Dd,m>(v?.5:3.2)&&R("turn");else if(d==="turn"){let E=A0(m/(v?.4:3.2));de=Fd(Eo,se,Wa(E)),Qt=ge(Dd,xc,Wa(E)),E>=1&&(R("write"),O("write"))}else if(d==="write")de=Jt(se,1),Qt=xc;else if(d==="down"){let E=A0(m/(v?.4:2));de=Fd(se,Pe,Wa(E)),Qt=ge(xc,Bl,Wa(E)),E>=1&&(_=w.write(b,v)||0,In.STATE.inkDirty=!0,R("writing"))}else if(d==="writing")de=Jt(Pe,.6),Qt=Bl,m>_+.8&&(R("ready"),f.textContent=u?"Scroll to fold it and pass it through":"Swipe up to fold it and pass it through",O("hint"));else if(d==="ready")de=Jt(Pe,.6),Qt=Bl;else if(d==="fold"){let E=A0(m/(v?.3:1.5));In.STATE.fold=Wa(E),de=Jt(Pe,.6),Qt=Bl,E>=1&&R("slide")}else if(d==="slide"){let io=A0(m/(v?.6:3.4));In.STATE.slide=Wa(Qr(0,.7,io));let Ze=Wa(Qr(.35,1,io));de=Fd(Pe,se,Ze),Qt=ge(Bl,xc,Ze),io>=1&&(In.STATE.shown=!1,R("final"),O("final"))}else if(d==="final")de=Jt(se,1),Qt=xc;else if(d==="leave"){let E=v?.6:ct.eye[0]<Ye[0]-.3?12:7,io=A0(m/E),Ze={eye:g.eye,target:g.target,fov:g.fov,roll:g.roll},ko=Wa(io),Oo=ct.eye[0]<Ye[0]-.3,bn=Oo?[ct.eye,_e([-.55,1.4,42.8]),_e([1.4,1.55,43.3]),[-9.3,1.58,46.4],[-7,1.6,47.15],[-4.6,1.62,46.55],[-2.2,1.68,44.8],[.6,1.72,44.5],Ze.eye]:[ct.eye,[-3.4,1.7,46.2],[-1.2,1.7,44.8],[.6,1.72,44.5],Ze.eye],Er=Oo?[ct.target,_e([1.5,1.45,43.4]),[-7,1.2,44.6],[-4,1.5,47],[-1.5,1.7,45.5],[1,1.8,44.5],[4,1.8,44.5],[7,1.9,44.2],Ze.target]:[ct.target,[-1.5,1.7,45.2],[2,1.8,44.5],[6,1.9,44.3],Ze.target];if(de={eye:Js(bn,ko),target:Js(Er,ko),fov:za(ct.fov,Ze.fov,ko),roll:Ze.roll*ko},Qt=ge(Wt||xc,y,Qr(.1,.7,io)),Qt.fade=(y.fade||0)*Qr(.82,1,io),io>=1){p=!1,In.STATE.active=!1,In.STATE.shown=!0,In.STATE.fold=0,In.STATE.slide=0;let Yn=A.getContext("2d");Yn.setTransform(1,0,0,1,0,0),Yn.clearRect(0,0,A.width,A.height),In.STATE.inkDirty=!0,document.body.classList.remove("confessing"),e.onExit&&e.onExit()}}return ze=de,X=Qt,{camera:de,look:Qt}}let ro=null,wo=null;function Oe(){if(d==="room"){if(F.moving||F.rest<.4)return;F.i<gc.length-1?G(F.i+1):(ro=ze,wo=X,O(""),R("enter"));return}if(d==="peek"){m>.4&&R("turn");return}d==="ready"?zt():d==="writing"&&w&&(w.finish(),m=Math.max(m,_))}function xe(){d==="room"&&!F.moving&&F.rest>.4&&F.i>0&&G(F.i-1)}return{start:q,update:Ce,leave:gt,get active(){return p},get stage(){return d},wheel(yt){yt>8?Oe():yt<-8&&xe()},swipe(yt){yt>0?Oe():yt<0&&xe()},tap(){Oe()},key(yt){return["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(yt)>=0?(Oe(),!0):["ArrowUp","ArrowLeft","PageUp"].indexOf(yt)>=0?(xe(),!0):yt==="Escape"?(gt(),!0):!1},_setNote(yt){i.value=yt,i.dispatchEvent(new Event("input"))}}}});var A5=mt((cL,k5)=>{"use strict";var yc=Yi(),Xh=ud(),Gd=Pf(),ak=Jc(),Hd=pd(),sk=ya(),Yh=!sk.isPhone&&!!(window.matchMedia&&window.matchMedia("(pointer: fine)").matches),{A:ua}=_a(),{C:pr,PAINTING_X:Mc}=vr(),Jr=t=>Math.max(0,Math.min(1,t)),Ht=(t,e,o)=>t+(e-t)*o,jo=(t,e,o)=>[Ht(t[0],e[0],o),Ht(t[1],e[1],o),Ht(t[2],e[2],o)],so=(t,e)=>[t[0]+e[0],t[1]+e[1],t[2]+e[2]],Bd=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],Dr=(t,e)=>[t[0]*e,t[1]*e,t[2]*e],Ft=(t,e,o)=>{let n=Jr((o-t)/(e-t));return n*n*(3-2*n)};function ik(t,e,o,n,r,a){if(r<=0)return[t,o];let s=2/n,i=s*r,c=1/(1+i+.48*i*i+.235*i*i*i),f=a*n,l=Math.max(-f,Math.min(f,t-e)),h=t-l,u=(o+s*l)*r,v=(o-s*u)*c,p=h+(l+u)*c;return e-t>0==p>e&&(p=e,v=0),[p,v]}var y5=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,ck=t=>t*t*t,Ud=t=>1-Math.pow(1-t,3),yn=t=>-(Math.cos(Math.PI*t)-1)/2;function Ln(t,e){let o=t.length-1,n=Jr(e)*o,r=Math.min(o-1,Math.floor(n)),a=n-r,s=t[Math.max(0,r-1)],i=t[r],c=t[r+1],f=t[Math.min(o,r+2)],l=a*a,h=l*a;return[0,1,2].map(u=>.5*(2*i[u]+(-s[u]+c[u])*a+(2*s[u]-5*i[u]+4*c[u]-f[u])*l+(-s[u]+3*i[u]-3*c[u]+f[u])*h))}var eo=(t,e,o,n)=>({eye:t,target:e,fov:o,roll:n||0});function ri(t,e,o){return eo(jo(t.eye,e.eye,o),jo(t.target,e.target,o),Ht(t.fov,e.fov,o),Ht(t.roll,e.roll,o))}var Yd=()=>Ft(.75,1.3,window.innerWidth/window.innerHeight),qr=(t,e)=>ri(t,e,Yd()),Kh=[7,3.95,pr.hallEnd-.05],lk=[pr.x1,2.9,pr.zc],wc=[16.75,4.55,6.75],Kd=[6.92,2.72,14.5],Xa=[7.3,.015,47.1],fk=[wc,[16.2,4,7],[15.3,3.45,6.4],[14.1,3.2,5.7],[12.2,3.35,6.6],[10,3.75,9.6],[8.2,3.8,12.2],[7.3,3.4,13.8],Kd],hk=[Kd,[7.3,4.6,19.5],[7.6,4.9,23.5],[6.6,4.3,28.5],[7.5,3.2,34],[6.8,2.1,39.5],[7.4,1,44.2],[7.2,.3,46.4],Xa],ei=[Mc[0],3,pr.z0],oi=[Mc[1],3,pr.z0],Wd=47.45,E5=4.6,uk=13.2,dk=1.57,Wl=[7.55,1.25,46.75],Qd=[17.25,2.42,46],Zd=[26.05,1.95,46],Vl=[36.15,.015,44],t1=()=>Ht(6.8,6.15,Yd()),pk=[Wl,[9.6,1.65,46.2],[12.3,2.05,45.1],[14.6,2.35,44.5],[16.2,2.3,44.7],Qd],vk=[Qd,[20.2,2.05,45.6],[23.2,1.8,45],Zd],ni=[Mc[2],3,pr.z0],Vd=[34.8,1.35,46],hs=[7.89,.03,19.03],b5=.36,w5=13.64,xr=[{side:"left",z:34.5},{side:"left",z:23.5},{side:"left",z:14.6},{side:"right",z:14.6},{side:"right",z:23.5},{side:"right",z:34.5}];function Ra(t){let e=t.side==="left"?1:-1;return jo([7-e*1,3,t.z+e*.2],[7-e*.6,3.25,t.z+e*.13],Yd())}function mk(t){return t.side==="left"?qr(eo([8.6,3.9,t.z],[b5,1.45,t.z],76),eo([8,3.6,t.z+.7],[b5,3.95,t.z-2],46,-.008)):qr(eo([5.4,3.9,t.z],[w5,1.45,t.z],76),eo([6,3.6,t.z-.7],[w5,3.95,t.z+2],46,-.008))}var gk=()=>[Vl,[35.6,.5,44.6],[33.2,1.5,45.6],[29,2.3,46.1],[23.5,2.7,45.9],[18.5,2.9,45.4],[14.8,3.1,44.3],[11,3.3,41.8],[7.4,3.4,38.8],[5.4,3.3,36.6],Ra(xr[0])],xk=()=>[Ra(xr[2]),[3,3.2,13.2],[1.7,3,12],[2.6,3.2,10],[5,3.6,8.9],[7,3.8,8.6],[9,3.6,8.9],[11.4,3.2,10],[12.3,3,12],[11,3.1,13.4],Ra(xr[3])],yk=()=>[Ra(xr[5]),[9,3.4,31],[7.8,2.8,27.5],[6.8,1.9,24.5],[7.4,1,21],[7.75,.35,19.6],hs],_5={2:{pos:()=>Kd,amp:[.18,.07,.12],tumble:.5},7:{pos:()=>Wl,amp:[.12,.09,.1],tumble:.55},8:{pos:()=>Qd,amp:[.1,.08,.08],tumble:.5},9:{pos:()=>Zd,amp:[.09,.06,.07],tumble:.45},10:{pos:()=>Vd,amp:[.07,.04,.06],tumble:.35},12:{pos:()=>Ra(xr[0]),amp:[.12,.08,.1],tumble:.5},13:{pos:()=>Ra(xr[1]),amp:[.12,.08,.1],tumble:.5},14:{pos:()=>Ra(xr[2]),amp:[.12,.08,.1],tumble:.5},15:{pos:()=>Ra(xr[3]),amp:[.12,.08,.1],tumble:.5},16:{pos:()=>Ra(xr[4]),amp:[.12,.08,.1],tumble:.5},17:{pos:()=>Ra(xr[5]),amp:[.12,.08,.1],tumble:.5}},fs=[{name:"corridor",ui:"intro",look:{letterbox:1,exposure:1,focus:14,aperture:.25,vignette:.1},cam(t){let e=.9*(1-Math.exp(-t/14)),o=[0,Math.sin(t*.37)*.025,Math.sin(t*.23)*.06],n=qr(eo([pr.x0+.9,1.85,pr.zc+.25],[pr.x1,2.85,pr.zc-.1],64),eo([pr.x0+1.2,2,pr.zc+.35],[pr.x1,2.6,pr.zc-.15],50));return n.eye=so(so(n.eye,[e,0,0]),o),n}},{name:"about",ui:"about",look:{letterbox:.55,exposure:1.32,focus:2.9,aperture:.9,vignette:.12,shafts:.65},cam(t){let e=[Math.sin(t*.21)*.08,Math.sin(t*.33)*.03,-.25*(1-Math.exp(-t/12))],o=qr(eo([16.6,1.9,9.2],[17.3,.4,5.6],64),eo([15,1.35,7.75],[17.55,1.05,5.5],44,-.02));return o.eye=so(o.eye,e),o}},{name:"sky",ui:"sky",look:{letterbox:.55,exposure:1,focus:2.1,aperture:.45,vignette:.1,shafts:1},cam(t){let e=[Math.sin(t*.12)*.35,Math.sin(t*.2)*.04,(1-Math.cos(t*.12))*.25],o=qr(eo([7,1.35,13],[7.2,7.6,20.4],74,.05),eo([6.6,1.5,12.6],[7.3,7.2,20.8],56,.07));return o.eye=so(o.eye,e),o}},{name:"master",ui:"master",look:{letterbox:.55,exposure:1.12,focus:8,aperture:.6,vignette:.3,shafts:.5},cam(t){let e=[Math.sin(t*.17)*.05,Math.sin(t*.29)*.02,-.35*(1-Math.exp(-t/16))],o=qr(eo([7,3.6,43.7],[7,3.85,Kh[2]],74),eo([7,3.6,41.3],[7,3.95,Kh[2]],46));return o.eye=so(o.eye,e),o}},{name:"story",ui:"story",look:{letterbox:.55,exposure:1,focus:8.1,aperture:.9,vignette:.4,shafts:.4},cam(t){let e=[Math.sin(t*.15)*.04,Math.sin(t*.25)*.015,0],o=qr(eo([7,3.9,40.3],[7,1.35,Kh[2]],76),eo([6.3,3.6,41.2],[3.7,3.95,Kh[2]],46,-.008));return o.eye=so(o.eye,e),o}},{name:"leaf",ui:"leaf",look:{letterbox:.55,exposure:1.15,focus:1.25,aperture:1.3,vignette:.35,shafts:.4},cam(t){let e=[Math.sin(t*.2)*.02,Math.sin(t*.3)*.006,0],o=qr(eo([7.15,.15,46],[7.3,.04,Xa[2]],50),eo([7.05,.14,45.9],[7.25,.05,Xa[2]],32));return o.eye=so(o.eye,e),o}},{name:"steps",ui:"steps",look:{letterbox:.9,exposure:1.2,focus:1.6,aperture:1.4,vignette:.4,shafts:.4},cam(t){let e=[Math.sin(t*.2)*.015,0,0],o=qr(eo([7.15,.1,46.3],[7.05,.1,Wd],50),eo([7.1,.12,45.85],[7,.2,Wd],30));return o.eye=so(o.eye,e),o}},{name:"float",ui:"float",look:{letterbox:.55,exposure:1.1,focus:2.2,aperture:.8,vignette:.3,shafts:.6},cam(t){let e=[Math.sin(t*.17)*.05,Math.sin(t*.27)*.02,0],o=qr(eo([7.3,.85,45.65],[7.6,1.38,47.1],64),eo([7.25,.82,45.8],[7.65,1.35,47.1],44));return o.eye=so(o.eye,e),o}},{name:"painting1",ui:"p1",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(t){let e=[Math.sin(t*.15)*.04,Math.sin(t*.25)*.015,0],o=qr(eo([ei[0],2.3,46.85],[ei[0],1.25,ei[2]],74),eo([ei[0]-.6,2.55,46.85],[ei[0]+1.9,2.9,ei[2]],46,.008));return o.eye=so(o.eye,e),o}},{name:"painting2",ui:"p2",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.8},cam(t){let e=[Math.sin(t*.15)*.04,Math.sin(t*.25)*.015,0],o=qr(eo([oi[0],1.95,46.85],[oi[0],1,oi[2]],74),eo([oi[0]-.6,2.1,46.85],[oi[0]+1.9,2.75,oi[2]],46,.008));return o.eye=so(o.eye,e),o}},{name:"painting3",ui:"p3",look:{letterbox:.55,exposure:1,focus:5.8,aperture:.7,vignette:.32,shafts:.9},cam(t){let e=[Math.sin(t*.15)*.04,Math.sin(t*.25)*.015,0],o=qr(eo([ni[0],1.4,46.85],[ni[0],.6,ni[2]],74),eo([ni[0]-.6,1.45,46.85],[ni[0]+1.9,2,ni[2]],46,.008));return o.eye=so(o.eye,e),o}},{name:"door",ui:"door",look:{letterbox:.8,exposure:1.05,focus:1.45,aperture:1.1,vignette:.35,shafts:1},cam(t){let e=[Math.sin(t*.2)*.02,Math.sin(t*.3)*.006,0],o=qr(eo([34.75,.5,44.15],[pr.x1,.8,43.95],66),eo([34.75,.45,44.3],[pr.x1,.35,43.95],50));return o.eye=so(o.eye,e),o}},...xr.map((t,e)=>({name:"hall"+e,ui:"h"+e,look:{letterbox:.55,exposure:1,focus:7.6,aperture:.7,vignette:.35,shafts:.7},cam(o){let n=[Math.sin(o*.15)*.04,Math.sin(o*.25)*.015,Math.sin(o*.11)*.04],r=mk(t);return r.eye=so(r.eye,n),r}})),{name:"rest",ui:"end",look:{letterbox:.55,exposure:1.05,focus:2.4,aperture:.5,vignette:.4,shafts:1.15},cam(t){let e=t*.025,o=qr(eo([7.75,2.6,18.6],[7.89,0,19.08],60),eo([7.75,2.3,18.45],[7.89,0,19.08],46)),n=o.eye[0]-hs[0],r=o.eye[2]-hs[2];return o.eye=[hs[0]+n*Math.cos(e)-r*Math.sin(e),o.eye[1],hs[2]+n*Math.sin(e)+r*Math.cos(e)],o}}],bk=[1,.96,.88];function M5(t,e){return{dur:e,cam(o,n,r){let a=yn(o),s=ri(n,r,a),i=xr[t].side==="left"?1:-1;return s.eye=so(s.eye,[i*.6*Math.sin(Math.PI*a),.15*Math.sin(Math.PI*a),0]),s},look(o,n,r){let a={};for(let s in r)typeof r[s]=="number"&&(a[s]=Ht(n[s],r[s],o));return a.aperture=Ht(n.aperture,r.aperture,o)*(1-.5*Math.sin(Math.PI*o)),a},leaf(o){let n=yn(o),r=Ra(xr[t]),a=Ra(xr[t+1]),s=xr[t].side==="left"?1:-1,i=so(jo(r,a,.5),[s*1.2,.5,0]),c=Ln([r,jo(r,i,.6),i,jo(a,i,.6),a],n);return{phase:"fly",pos:so(c,[0,Math.sin(o*Math.PI*5)*.07*Math.sin(Math.PI*o),0]),tumble:.5+.35*Math.sin(Math.PI*o)}}}}var jd=[{dur:6.2,cam(t,e,o){if(t<.5){let i=ck(t/.5),c=jo(e.eye,[pr.x1-3.2,2.6,pr.zc],i),f=jo(e.target,lk,Ft(0,.6,t/.5));return eo(c,f,Ht(e.fov,e.fov-8,i),Ht(e.roll,.04,i))}let n=Ud((t-.5)/.5),r=[[ua.cx+.4,10.4,ua.zc+.6],[ua.cx-.6,7.6,ua.zc+1.3],[ua.cx-1.9,4.6,ua.zc+1.75],o.eye],a=[[ua.cx-.1,0,ua.zc-.2],[ua.cx-1,.4,ua.zc-.1],[ua.cx-1.1,.8,ua.zc-.2],o.target];return eo(Ln(r,n),Ln(a,n),Ht(o.fov+14,o.fov,n),Ht(-.25,o.roll,n))},look(t,e,o){let n=Ft(.22,.5,t),r=1-Ft(.5,.74,t);return{fade:t<.5?n:r,fadeColor:bk,exposure:Ht(e.exposure,o.exposure,Ft(.5,.9,t))*(1+2.2*(t<.5?Ft(.15,.5,t):1-Ft(.5,.8,t))),letterbox:Ht(e.letterbox,o.letterbox,Ft(.3,.7,t)),aperture:t<.5?e.aperture*(1-t*2):o.aperture*Ft(.6,1,t),focus:Ht(4,o.focus,Ft(.5,1,t)),shafts:Ht(e.shafts,o.shafts,Ft(.4,.6,t)),vignette:Ht(e.vignette,o.vignette,t)}},leaf(){return{phase:"home"}}},{dur:9,cam(t,e,o,n){let r=[e.eye,[15.6,2.4,8.3],[15.4,2.7,7.1],[12.6,2.6,5.4],[9.6,2,7.4],[7.6,1.6,10.6],o.eye],a=Ln(r,yn(t)),s=Ft(0,.12,t)*(1-Ft(.82,1,t)),i=jo(jo(e.target,o.target,Ft(.55,1,t)),n.pos,s),c=Ht(e.fov,o.fov,Ft(.3,1,t))-6*Math.sin(Math.PI*t),f=Ht(e.roll,o.roll,t)+.05*Math.sin(Math.PI*2*t);return eo(a,i,c,f)},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{exposure:Ht(e.exposure,o.exposure,Ft(.25,.75,t)),letterbox:Ht(e.letterbox,o.letterbox,t),focus:Ht(a,o.focus,Ft(.8,1,t)),aperture:Ht(.7,o.aperture,Ft(.8,1,t)),shafts:Ht(e.shafts,o.shafts,Ft(.3,.8,t)),vignette:Ht(e.vignette,o.vignette,t)}},leaf(t){let e=y5(t),o=Math.sin(t*Math.PI*7)*.14*Math.sin(Math.PI*t);return{phase:"fly",pos:so(Ln(fk,e),[0,Math.sin(t*Math.PI*9)*.05*Math.sin(Math.PI*t),o]),tumble:1-.5*Ft(.8,1,t)}}},{dur:11.5,cam(t,e,o,n){let r=Ln([e.eye,[7,1.9,19],[7.1,1.6,27.5],[6.9,1.1,36],[7,.7,42.5],[7.05,.5,45.7]],Ft(0,.8,t)*.6+yn(Jr(t/.8))*.4),a=Ln([[7.05,.5,45.7],[7,1.2,45.3],[7,2.6,43.8],o.eye],yn(Ft(.8,1,t))),s=t<.8?r:a,i=jo(jo(e.target,n.pos,Ft(.03,.22,t)),o.target,Ft(.82,1,t)),c=Ht(e.fov,o.fov,Ft(.15,.7,t))-6*Ft(.6,.8,t)*(1-Ft(.85,1,t)),f=Ht(e.roll,o.roll,Ft(0,.6,t))-.04*Math.sin(Math.PI*t);return eo(s,i,c,f)},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{exposure:Ht(e.exposure,o.exposure,Ft(.5,1,t)),letterbox:Ht(e.letterbox,o.letterbox,t),focus:Ht(a,o.focus,Ft(.84,1,t)),aperture:Ht(1.1,o.aperture,Ft(.84,1,t)),shafts:Ht(e.shafts,o.shafts,Ft(.2,.9,t)),vignette:Ht(e.vignette,o.vignette,Ft(.5,1,t))}},leaf(t){let e=Ht(y5(t),t,.35),o=Ln(hk,Ft(0,.78,e)),n=Math.sin(t*Math.PI*8)*.35*(1-Ft(.55,.76,t)),r=Ft(.7,.8,t);return{phase:"fly",pos:so(o,[n,Math.abs(Math.cos(t*Math.PI*8))*.12*(1-r),0]),tumble:1-r,swing:n}}},{dur:2.6,cam(t,e,o){let n=yn(t),r=ri(e,o,n);return r.eye=so(r.eye,[0,0,-.35*Math.sin(Math.PI*n)]),r},look(t,e,o){let n=yn(t),r={};for(let a in o)typeof o[a]=="number"&&(r[a]=Ht(e[a],o[a],n));return r},leaf(){return{phase:"floor"}}},{dur:4.5,cam(t,e,o){let n=yn(t),r=Ln([e.eye,[6.9,1.7,43.9],[7.05,.45,45.4],o.eye],n),a=jo(e.target,o.target,Ft(.1,.85,t));return eo(r,a,Ht(e.fov,o.fov,Ft(.2,1,t)),Ht(e.roll,o.roll,n))},look(t,e,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=Ht(e[r],o[r],Ft(.2,1,t)));return n},leaf(){return{phase:"floor"}}},{dur:5.5,cam(t,e,o){return ri(e,o,yn(t))},look(t,e,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=Ht(e[r],o[r],yn(t)));return n},leaf(){return{phase:"floor"}},walker(t){return Ht(E5,t1(),t)}},{dur:11,kick:t=>Jr((t-bc())/(1-bc())),cam(t,e,o,n){let r=bc(),a=Ft(0,r,t)*(1-Ft(r+.12,r+.35,t)),s=S5(Math.min(t,_c)),i=so(e.target,[(s-e.target[0])*.15*a,0,0]),c=Ft(r+.12,1,t),f=Ln([e.eye,e.eye,so(e.eye,[0,.12,-.3]),o.eye],c);return i=jo(i,n.pos,Ft(r+.06,r+.24,t)*(1-Ft(.9,1,t))),i=jo(i,o.target,Ft(.88,1,t)),eo(f,i,Ht(e.fov,o.fov,c),Ht(e.roll,o.roll,c))},look(t,e,o,n,r){let a=bc(),s=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]),i=Ft(0,.12,t)*(1-Ft(a+.25,a+.5,t));return{letterbox:Ht(Ht(e.letterbox,o.letterbox,Ft(a,1,t)),1.75,i),exposure:Ht(e.exposure,o.exposure,Ft(a,1,t)),focus:t<a?e.focus:Ht(e.focus,s,Ft(a,a+.2,t)),aperture:Ht(e.aperture,o.aperture,Ft(a,1,t)),vignette:Ht(e.vignette,o.vignette,t),shafts:Ht(e.shafts,o.shafts,t)}},leaf(t){let e=Jr((t-bc())/(1-bc()));if(e<=0)return{phase:"floor"};let o=Ft(0,.85,e)*.85+Ud(Ft(0,.15,e))*.15;return{phase:"fly",pos:so(Xa,[(Wl[0]-Xa[0])*o+Math.sin(e*9)*.08*(1-e),(Wl[1]-Xa[1])*o,(Wl[2]-Xa[2])*o+Math.sin(e*7)*.06*(1-e)]),tumble:1.3-.75*e}},walker(t){return t<.985?S5(t):null}},{dur:9,cam(t,e,o,n){let r=yn(t),a=Ln([e.eye,[9.4,1.35,45.6],[12.4,2,45.9],[15,2.45,46.5],o.eye],r),s=1-Ft(.6,.92,t),i=jo(jo(e.target,n.pos,Ft(0,.15,t)),o.target,1-s),c=Ht(e.fov,o.fov,Ft(.3,1,t)),f=Ht(e.roll,o.roll,r)+.04*Math.sin(Math.PI*t);return eo(a,i,c,f)},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:Ht(e.letterbox,o.letterbox,t),exposure:Ht(e.exposure,o.exposure,Ft(.3,.8,t)),focus:Ht(a,o.focus,Ft(.6,.95,t)),aperture:Ht(e.aperture,o.aperture,Ft(.6,1,t)),vignette:Ht(e.vignette,o.vignette,t),shafts:Ht(e.shafts,o.shafts,Ft(.3,.8,t))}},leaf(t){let e=yn(t);return{phase:"fly",pos:so(Ln(pk,e),[0,Math.sin(t*Math.PI*5)*.08*Math.sin(Math.PI*t),Math.sin(t*Math.PI*4)*.12*Math.sin(Math.PI*t)]),tumble:.55+.4*Math.sin(Math.PI*t)}}},{dur:6.5,cam(t,e,o){let n=yn(t),r=ri(e,o,n);return r.eye=so(r.eye,[0,.12*Math.sin(Math.PI*n),.1*Math.sin(Math.PI*n)]),r},look(t,e,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=Ht(e[r],o[r],t));return n.aperture=Ht(e.aperture,o.aperture,t)*(1-.5*Math.sin(Math.PI*t)),n},leaf(t){let e=yn(t);return{phase:"fly",pos:so(Ln(vk,e),[0,Math.sin(t*Math.PI*4)*.07*Math.sin(Math.PI*t),0]),tumble:.5+.3*Math.sin(Math.PI*t)}}},{dur:6.5,cam(t,e,o){let n=yn(t),r=ri(e,o,n);return r.eye=so(r.eye,[0,.1*Math.sin(Math.PI*n),.1*Math.sin(Math.PI*n)]),r},look(t,e,o){let n={};for(let r in o)typeof o[r]=="number"&&(n[r]=Ht(e[r],o[r],t));return n.aperture=Ht(e.aperture,o.aperture,t)*(1-.5*Math.sin(Math.PI*t)),n},leaf(t){let e=yn(t);return{phase:"fly",pos:so(Ln([Zd,[29.2,1.75,45.5],[32.2,1.5,45.4],Vd],e),[0,Math.sin(t*Math.PI*4)*.06*Math.sin(Math.PI*t),0]),tumble:.45+.25*Math.sin(Math.PI*t)}}},{dur:6,cam(t,e,o,n){let r=yn(t),a=Ln([e.eye,[34.2,1.15,45.6],[34.5,.7,44.8],o.eye],r),s=Ft(.05,.3,t)*(1-Ft(.8,1,t)),i=jo(jo(e.target,o.target,Ft(.6,1,t)),n.pos,s);return eo(a,i,Ht(e.fov,o.fov,Ft(.2,1,t)),Ht(e.roll,o.roll,r))},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:Ht(e.letterbox,o.letterbox,t),exposure:Ht(e.exposure,o.exposure,t),focus:Ht(a,o.focus,Ft(.8,1,t)),aperture:Ht(.9,o.aperture,Ft(.8,1,t)),vignette:Ht(e.vignette,o.vignette,t),shafts:Ht(e.shafts,o.shafts,t)}},leaf(t){let e=Ln([Vd,[35.3,.9,45.2],[35.75,.4,44.4],[36,.08,44.05],Vl],Ft(0,.85,t)),o=Math.sin(t*Math.PI*6)*.25*(1-Ft(.35,.82,t)),n=Ft(.78,.88,t);return{phase:"fly",pos:so(e,[0,Math.abs(Math.cos(t*Math.PI*6))*.07*(1-n),o]),tumble:.7*(1-n),swing:o}}},{dur:12,door(t){let e=Jr((t-.02)/.09);return Ud(e)+.07*Math.sin(Jr((t-.08)/.18)*Math.PI)*(1-Jr((t-.08)/.3))},cam(t,e,o,n){let r=Math.sin(t*340)*.012*Ft(.02,.05,t)*(1-Ft(.08,.16,t)),a=Ft(.06,1,t),s=Ln([e.eye,[34.3,1,43.6],[31.5,1.9,43.4],[26.5,2.4,43.6],[21,2.6,43.6],[16.5,2.8,43.2],[12.6,3.1,41.2],[9.6,3.4,38],o.eye],a*.55+yn(a)*.45),i=so(n.pos,[1,-.2,-1.45]);s=jo(s,i,Ft(.1,.22,t)*(1-Ft(.52,.72,t)));let c=Ft(.06,.16,t)*(1-Ft(.86,1,t)),f=jo(e.target,n.pos,c);f=jo(f,o.target,Ft(.86,1,t));let l=Ht(e.fov,o.fov,Ft(.1,1,t))+6*Math.sin(Math.PI*Ft(.08,.9,t)),h=Ht(e.roll,o.roll,t)+.06*Math.sin(Math.PI*2*Ft(.1,.9,t))+r;return eo(so(s,[0,r,0]),f,l,h)},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]),s=Ft(.02,.06,t)*(1-Ft(.08,.3,t));return{letterbox:Ht(e.letterbox,o.letterbox,Ft(.1,.4,t)),exposure:Ht(e.exposure,o.exposure,t)*(1+.8*s),focus:Ht(a,o.focus,Ft(.86,1,t)),aperture:Ht(.8,o.aperture,Ft(.86,1,t)),vignette:Ht(e.vignette,o.vignette,t),shafts:Ht(e.shafts,o.shafts,t)+s}},leaf(t){let e=Jr((t-.05)/.95);if(e<=0)return{phase:"floor"};let o=Ln(gk(),e*.6+yn(e)*.4),n=Math.sin(t*Math.PI*9)*.12*Math.sin(Math.PI*e);return{phase:"fly",pos:so(o,[0,n*.6,n]),tumble:1.4-.8*e}}},...[0,1].map(t=>M5(t,7.5)),{dur:10,cam(t,e,o,n){let r=yn(t),a=Ln([e.eye,[7.6,3.2,16.2],[7,2.9,17.2],[6.5,3.2,16],o.eye],r),s=Ft(0,.15,t)*(1-Ft(.85,1,t)),i=jo(jo(e.target,o.target,Ft(.5,1,t)),n.pos,s);return eo(a,i,Ht(e.fov,o.fov,r)+4*Math.sin(Math.PI*r),Ht(e.roll,o.roll,r))},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:Ht(e.letterbox,o.letterbox,t),exposure:Ht(e.exposure,o.exposure,t),focus:Ht(a,o.focus,Ft(.85,1,t)),aperture:Ht(.6,o.aperture,Ft(.85,1,t)),vignette:Ht(e.vignette,o.vignette,t),shafts:Ht(e.shafts,o.shafts,t)}},leaf(t){let e=yn(t),o=Ln(xk(),e);return{phase:"fly",pos:so(o,[0,Math.sin(t*Math.PI*6)*.06*Math.sin(Math.PI*t),0]),tumble:.6+.4*Math.sin(Math.PI*t)}}},...[3,4].map(t=>M5(t,7.5)),{dur:10,cam(t,e,o,n){let r=yn(t),a=Ln([e.eye,[7.6,4,30.5],[7.3,4.4,25.5],[7.1,4,21.8],o.eye],r),s=Ft(0,.2,t)*(1-Ft(.9,1,t)),i=jo(jo(e.target,o.target,Ft(.5,1,t)),n.pos,s);return eo(a,i,Ht(e.fov,o.fov,r),Ht(e.roll,o.roll,r))},look(t,e,o,n,r){let a=Math.hypot(n.pos[0]-r[0],n.pos[1]-r[1],n.pos[2]-r[2]);return{letterbox:Ht(e.letterbox,o.letterbox,t),exposure:Ht(e.exposure,o.exposure,t),focus:Ht(a,o.focus,Ft(.85,1,t)),aperture:Ht(.7,o.aperture,Ft(.85,1,t)),vignette:Ht(e.vignette,o.vignette,t),shafts:Ht(e.shafts,o.shafts,t)}},leaf(t){let e=Ln(yk(),Ft(0,.86,t)),o=Math.sin(t*Math.PI*7)*.3*(1-Ft(.4,.84,t)),n=Ft(.8,.9,t);return{phase:"fly",pos:so(e,[o,Math.abs(Math.cos(t*Math.PI*7))*.08*(1-n),0]),tumble:.8*(1-n),swing:o}}}],Xd=9.2,_c=.72;function S5(t){return t<_c?Ht(t1(),Xd,t/_c):Ht(Xd,uk,(t-_c)/(1-_c))}function bc(){return _c*Jr((Xa[0]+.15-t1())/(Xd-t1()))}var Jh={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},Qh=t=>Object.assign({},Jh,fs[t].look),wk=`
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
`;function Zr(t,e,o){let n=document.createElement(t);return e&&(n.className=e),o!==void 0&&(n.innerHTML=o),n}var ti=t=>String(t).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function Zh(t,e,o){t.querySelectorAll(".tour-line").forEach((n,r)=>{n.style.transitionDelay=(e+r*o).toFixed(2)+"s"})}k5.exports=function(e){let o=/tourdebug/.test(location.search),{fps:n}=e;if(!document.querySelector("link[data-tour-font]")){let j=document.createElement("link");j.rel="stylesheet",j.href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&display=swap",j.setAttribute("data-tour-font",""),document.head.appendChild(j)}let r=Pd(),a=null;fetch("res/hand.json").then(j=>j.ok?j.json():null).then(j=>{a=j}).catch(()=>{});let s=document.createElement("style");s.textContent=wk+`
	.hand-text { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); clip-path: inset(50%); white-space: normal; }
	.tour-body canvas.hand { display: block; cursor: pointer; }`,s.textContent+=`
	body.touring #museum-mobile-controls,
	body.touring .painting-plaque { display: none !important; }`,document.head.appendChild(s);let i=Zr("div","tour");i.setAttribute("role","region"),i.setAttribute("aria-label","Guided tour of the gallery. Swipe, scroll or press the arrow keys to move on.");let c=Zr("div","tour-mark",ti(Xh.name)),f=Zr("button","tour-free","Explore freely");f.type="button";let l=Zr("div","tour-links",Gd.icons("tour-icon"));l.insertBefore($d()("tour-icon"),l.firstChild),l.insertBefore(Nh().button("tour-icon"),l.firstChild.nextSibling);let h=Zr("button","tour-free tour-note",'<svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 4c-7 1-11.5 5.5-13 13l-1.5 3 3-1.5c7.500-1.500 12-6 13-13z"/><path d="M5.5 20L13 12.500"/></svg><span>Leave a note</span>');h.type="button",h.setAttribute("aria-label","Leave a note: go to the piano room and the confessional"),l.appendChild(h),Yh&&l.appendChild(f);let u=Zr("div","tour-progress",fs.map(()=>"<i></i>").join("")),v=Zr("div","tour-hint",'<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M6 15l6-6 6 6"></path></svg><span></span>'),p=v.querySelector("span"),d=Zr("div","tour-card tour-intro",`
		<span class="tour-line tour-kicker">A virtual gallery</span>
		<span class="tour-rule"></span>
		<h1 class="tour-line tour-title">${ti(Xh.name)}</h1>
		<span class="tour-line tour-sub tour-motto">I don\u2019t paint what happened.<br>I paint what remained<br>after it happened</span>`);Zh(d,.4,.35);let m=Xh.text.split(/\n\s*\n/).map(j=>`<p class="tour-line">${ti(j.trim())}</p>`).join(""),g=Zr("div","tour-card tour-about",`
		<span class="tour-line tour-kicker">The artist</span>
		<h2 class="tour-line tour-title">${ti(Xh.title)}</h2>
		<span class="tour-rule"></span>
		${Gd.line("tour-line tour-contact")}
		${m}`);Zh(g,.25,.28);let y=Zr("div","tour-card tour-sky",`
		<span class="tour-line tour-sub">Every painting here waits for the light.</span>`);Zh(y,.6,.3);let b=Zr("div","tour-card tour-master","");function w(j){let ht=Zr("div","tour-card tour-story",`
			<span class="tour-line tour-kicker"></span>
			<h2 class="tour-title tour-letters"></h2>
			<span class="tour-rule"></span>
			<span class="tour-line visit-row"></span>
			<div class="tour-body"></div>`),Xt=ht.querySelector(".tour-title"),ie=ht.querySelector(".tour-body");return ht.filled=!1,ht.body=ie,ht.fill=()=>{let fe=j();if(!fe||ht.filled)return;ht.filled=!0;let nn=fe.title||"";ht.querySelector(".tour-kicker").textContent=ak(fe)||"Oil on canvas";let ar=ht.querySelector(".visit-row");ar.innerHTML=Hd.button(fe),ar.hidden=!ar.innerHTML;let kr=ar.querySelector(".visit-btn");kr&&(kr.addEventListener("click",po=>{po.stopPropagation(),Hd.open(fe)}),ht.warm=()=>Hd.warm(fe));let rn=0;Xt.innerHTML=nn.split(" ").map(po=>'<span class="tour-word">'+po.split("").map(Kn=>`<span style="transition-delay:${(.35+rn++*.045).toFixed(3)}s">${ti(Kn)}</span>`).join("")+"</span>").join(" "),Xt.setAttribute("aria-label",nn);let yr=.35+nn.length*.045+.2;ht.querySelector(".tour-rule").style.transitionDelay=yr.toFixed(2)+"s";let an=String(fe.description||"").split(/\n\s*\n/).filter(po=>po.trim());if(ht.querySelector(".tour-kicker").style.transitionDelay="0.1s",a&&an.length){ie.innerHTML=an.map(wn=>`<p class="hand-text">${ti(wn.trim())}</p>`).join("")+'<div class="hand-wrap"><canvas class="hand" aria-hidden="true"></canvas></div>';let po=ie.querySelector("canvas"),Kn=an.map(wn=>wn.trim()).join(`

`),Wo=!1,Fn=!1,Hr=0;ie.addEventListener("wheel",()=>{Wo=!0},{passive:!0}),ie.addEventListener("touchmove",()=>{Wo=!0},{passive:!0});let Br=parseFloat(getComputedStyle(ie).fontSize)||17,Uo=r(po,a,{ink:"rgba(244,236,223,0.93)",shadow:"rgba(0,0,0,0.55)",shadowBlur:7,xh:Math.max(8.5,Br*.56),width:.14,speed:80,pace:.12,minDur:.022,maxTime:wn=>3.5+wn.length/420,seed:3+nn.length,onPen:wn=>{if(Wo)return;let Oa=wn-ie.clientHeight*.55;Oa>ie.scrollTop+4&&(ie.scrollTop+=Math.min(16,Oa-ie.scrollTop))}});po.addEventListener("click",wn=>{wn.stopPropagation(),clearTimeout(Hr),Fn?Uo.finish():(Fn=!0,Uo.write(Kn,!0))}),ht.write=()=>{if(clearTimeout(Hr),Wo=!1,Fn){Uo.write(Kn,!0);return}Uo.write("",!0),Hr=setTimeout(()=>{Fn=!0,Uo.write(Kn)},yr*.6*1e3)},ht.stopWrite=()=>{clearTimeout(Hr),Uo.stop()};let va=0;window.addEventListener("resize",()=>{clearTimeout(va),va=setTimeout(()=>{Fn&&ht.classList.contains("on")&&Uo.write(Kn,!0)},250)})}else ie.innerHTML=an.map(po=>`<p class="tour-line">${ti(po.trim())}</p>`).join(""),ie.querySelectorAll(".tour-line").forEach((po,Kn)=>{po.style.transitionDelay=(yr+.3+Math.min(Kn,6)*.35).toFixed(2)+"s"})},ht}let _=()=>e.paintings?e.paintings():[],M=j=>_().find(ht=>ht.side==="corridor"&&Math.abs(ht.paintingPosition[0]-j)<.5),A=w(()=>_().find(j=>j.side==="end")),O=()=>Zr("div","tour-card",""),R=w(()=>M(ei[0])),q=w(()=>M(oi[0])),F=w(()=>M(ni[0])),K=xr.map(j=>w(()=>_().find(ht=>ht.side===j.side&&Math.abs(ht.paintingPosition[2]-j.z)<.5))),G=Zr("div","tour-card tour-endcard",`
		<span class="tour-line tour-kicker">Thank you for walking with me</span>
		<span class="tour-rule"></span>
		<span class="tour-line tour-sub">${Yh?"The rest of the gallery is yours to wander.":"Swipe back to return to any painting."}</span>
		<span class="tour-line tour-sub tour-confess-line">Before you leave, the confessional is open.<br>Leave me a note; no one else will read it.</span>
		<div class="tour-line tour-end"><button type="button" class="tour-btn" data-act="confess">Leave something behind</button></div>
		${Gd.line("tour-line tour-contact")}
		<div class="tour-line tour-end">
			${Yh?'<button type="button" class="tour-btn" data-act="free">Walk the gallery</button>':""}
			<button type="button" class="tour-btn quiet" data-act="list">All paintings</button>
			<button type="button" class="tour-btn quiet" data-act="replay">Replay</button>
		</div>`);Zh(G,.5,.35);let X=[d,g,y,b,A,O(),O(),O(),R,q,F,O(),...K,G];i.append(...X,c,l,u,v),document.body.appendChild(i);let dt=x5()({root:i,avatar:e.avatar,glyphs:()=>a,onExit:()=>{de=-1,pe&&(ve={start:E},pe=!1)}});document.body.classList.add("touring");let Ot=window.matchMedia&&window.matchMedia("(pointer: fine)").matches,zt=Ot?"Scroll":"Swipe",gt=fs.map((j,ht)=>ht===0?Ot?"Scroll to begin":"Swipe up to begin":ht===1?zt+" to follow the leaf":ht===2?zt+" to follow the light":ht===3?zt+" for its story":ht===6||ht===7||ht===fs.length-1?"":zt+" on"),ct=[0];jd.forEach(j=>ct.push(ct[ct.length-1]+j.dur));let Wt=ct[ct.length-1],ze=210,Ee=95,Ye=.35,_e=1.4,ho=.32,So=1,Ko=1.3,Jt=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,ge=2.2,Ce=.7,ro=.9,wo=!0,Oe=0,xe=0,yt=0,se=-10,Pe=!1,de=-1,Qt=0,Eo=0,E=0,io=null,Ze=Object.assign({},Qh(0)),ko=fs[0].cam(0),Oo={phase:"home",pos:wc.slice(),tumble:0},bn=0,Er=j=>{let ht=0;for(let Xt=1;Xt<ct.length;Xt++)Math.abs(ct[Xt]-j)<Math.abs(ct[ht]-j)&&(ht=Xt);return ht};function Yn(j){let ht=X[j];ht&&ht.fill&&(ht.fill(),ht.body.scrollTop=0,ht.offsetWidth),X.forEach((Xt,ie)=>{let fe=Xt.classList.contains("on");Xt.classList.toggle("on",ie===j),ie===j&&!fe&&Xt.write&&Xt.write(),ie!==j&&fe&&Xt.stopWrite&&Xt.stopWrite()}),ht&&ht.warm&&ht.warm(),p.textContent=gt[j]||"",v.classList.toggle("on",!!gt[j])}function Ka(){X.forEach(j=>{j.stopWrite&&j.classList.contains("on")&&j.stopWrite(),j.classList.remove("on")}),v.classList.remove("on")}let L0=null,li=-1;function Z(j){if(dt.active||!wo||io)return;let ht=E-se>Ye;if(se=E,ht||!L0){let Xt=0,ie=Wt;for(let fe=0;fe<ct.length;fe++)if(ct[fe]<=Oe-.02&&(Xt=ct[fe]),ct[fe]>=Oe+.02){ie=ct[fe];break}L0={lo:Xt,hi:ie}}E<li||(Pe=!1,yt=Math.max(L0.lo,Math.min(L0.hi,yt+j)),yt=Math.max(Oe-ge,Math.min(Oe+ge,yt)))}function Pt(j){if(dt.active||!wo||io)return;let ht=Pe?yt:Oe,Xt;if(j>0)Xt=ct.findIndex(ie=>ie>ht+.05);else{Xt=-1;for(let ie=ct.length-1;ie>=0;ie--)if(ct[ie]<ht-.05){Xt=ie;break}}Xt<0||(yt=ct[Xt],Pe=!0,se=E)}let Dt=null,Nt=j=>j.stopPropagation();["touchstart","touchmove","touchend","mousedown","mouseup","click","contextmenu"].forEach(j=>i.addEventListener(j,Nt)),i.addEventListener("pointerdown",j=>{if(j.stopPropagation(),!(j.target.closest("button, a")||j.target.closest(".tour-body"))){Dt={x:j.clientX,y:j.clientY,lx:j.clientX,ly:j.clientY,t:performance.now(),moved:0,v:0,lt:performance.now()};try{i.setPointerCapture(j.pointerId)}catch(ht){}}}),i.addEventListener("pointermove",j=>{if(!Dt)return;let ht=j.clientX-Dt.lx,Xt=j.clientY-Dt.ly;Dt.lx=j.clientX,Dt.ly=j.clientY;let ie=Math.abs(Xt)>=Math.abs(ht)?-Xt:-ht;Dt.moved+=Math.abs(ie);let fe=performance.now(),nn=ie/Ee;Dt.v=Dt.v*.6+nn/Math.max(.008,(fe-Dt.lt)/1e3)*.4,Dt.lt=fe,Dt.moved>6&&Z(nn)});let le=j=>{let ht=Dt;if(Dt=null,!!ht){if(dt.active){ht.moved<10&&performance.now()-ht.t<500?dt.tap():ht.y-(j?j.clientY:ht.ly)>30&&dt.swipe(1);return}ht.moved<10&&performance.now()-ht.t<500?Pt(1):performance.now()-ht.lt<120&&Z(Math.max(-1.6,Math.min(1.6,ht.v*.22)))}};i.addEventListener("pointerup",j=>{j.stopPropagation(),le(j)}),i.addEventListener("pointercancel",()=>{Dt=null}),i.addEventListener("wheel",j=>{if(dt.active){if(j.target.closest(".conf-ui"))return;j.preventDefault(),dt.wheel(j.deltaY);return}if(j.target.closest(".tour-body")){let Xt=j.target.closest(".tour-body"),ie=Xt.scrollTop+Xt.clientHeight>=Xt.scrollHeight-2&&j.deltaY>0,fe=Xt.scrollTop<=0&&j.deltaY<0;if(!ie&&!fe)return}j.preventDefault();let ht=j.deltaMode===1?j.deltaY*16:j.deltaMode===2?j.deltaY*window.innerHeight:j.deltaY;Z(ht/ze)},{passive:!1}),window.addEventListener("keydown",j=>{if(!wo||io||document.body.classList.contains("visiting"))return;if(dt.active){if(j.stopImmediatePropagation(),j.target&&/TEXTAREA|INPUT|BUTTON/.test(j.target.tagName))return;dt.key(j.key)&&j.preventDefault();return}let ht=j.key;if(["ArrowDown","ArrowRight","PageDown"," ","Enter"].indexOf(ht)>=0){if((ht==="Enter"||ht===" ")&&j.target&&j.target.tagName==="BUTTON")return;j.preventDefault(),j.stopImmediatePropagation(),Pt(1)}else["ArrowUp","ArrowLeft","PageUp"].indexOf(ht)>=0?(j.preventDefault(),j.stopImmediatePropagation(),Pt(-1)):ht==="Escape"?(j.preventDefault(),Te()):/^[wasdzq]$/i.test(ht)&&j.stopImmediatePropagation()},!0),window.addEventListener("keyup",j=>{wo&&!io&&/^(Arrow|[wasdzq]$)/i.test(j.key)&&j.stopImmediatePropagation()},!0),f.addEventListener("click",j=>{j.stopPropagation(),Te()}),["mousedown","pointerdown"].forEach(j=>h.addEventListener(j,ht=>ht.stopPropagation())),h.addEventListener("click",j=>{j.stopPropagation(),$e()});let Ae=eo([8.6,1.75,44.3],[-3,1.85,44.5],55,0),Me=null,pe=!1;function $e(){if(!wo||io||dt.active||Me)return;Ka(),de=-2;let j=ko.eye;if(j[0]>.5&&j[0]<13.5&&j[2]>36&&j[2]<50){pe=!1,dt.start(ko,Ze);return}Me={t:0}}G.addEventListener("click",j=>{let ht=j.target.closest("button");ht&&(j.stopPropagation(),ht.dataset.act==="free"&&Te(),ht.dataset.act==="replay"&&Ke(),ht.dataset.act==="list"&&ou().show(!1),ht.dataset.act==="confess"&&(Ka(),de=-2,dt.start(ko,Ze)))});let ye=[null,[ua.zc-1.6,Math.PI/2],[11.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[39.4,Math.PI],[42.5+Mc[0]-7,0],[42.5+Mc[1]-7,0],[42.5+Mc[2]-7,0],[1e3,Math.PI/2],...xr.map(j=>[j.z-1.6,j.side==="left"?-Math.PI/2:Math.PI/2]),[hs[2]-1.6,Math.PI]],We=null,ke=0;function Te(){if(!wo||io||!Yh)return;let j=Er(Oe),ht=ye[j];We=j<=1?{phase:"home",pos:wc.slice()}:j>=3&&j<=6?{phase:"floor",pos:Xa.slice()}:j===11?{phase:"floor",pos:Vl.slice()}:j===18?{phase:"floor",pos:hs.slice()}:null,ke=j>=12?1:0,ht&&n.place&&n.place(ht[0],ht[1]),io={start:E,fromCam:ko,fromLook:Object.assign({},Ze)},Ka(),i.hidden=!0,document.body.classList.remove("touring"),e.onExit&&e.onExit()}function Ke(){Oe=yt=0,xe=0,Pe=!1,de=-1,Qt=0,Eo=0,Oo={phase:"home",pos:wc.slice(),tumble:0},ve={start:E}}let ve={start:-1},co=!1,Ro=[],be={prev:null,vel:[0,0,0],axis:[1,0,0],dir:null,bank:0,rock:0,spin:0,fresh:!0};function Go(j){bn+=j*(Oo.phase==="floor"?0:1);let ht=Oo.tumble===void 0?0:Oo.tumble,Xt=yc.fromTranslation(Ro,Oo.pos);if(Oo.phase==="home")Xt=yc.rotateY(Xt,Xt,2.2+Math.sin(bn*.9)*.15),Xt=yc.rotateZ(Xt,Xt,-1+Math.sin(bn*1.3)*.12),Xt=yc.rotateX(Xt,Xt,.4);else if(Oo.phase==="floor")Xt=yc.rotateY(Xt,Xt,.65),Xt=yc.rotateX(Xt,Xt,.16);else{let ie=Oo.pos;if(be.prev&&j>0){let br=[ie[0]-be.prev[0],ie[1]-be.prev[1],ie[2]-be.prev[2]];if(Math.hypot(br[0],br[1],br[2])<1.5){let Rc=Math.min(1,j*6);for(let gs=0;gs<3;gs++)be.vel[gs]+=(br[gs]/j-be.vel[gs])*Rc}else be.vel=[0,0,0]}be.prev=ie.slice();let fe=be.vel,nn=Math.hypot(fe[0],fe[1],fe[2]),ar=Ft(.25,1.4,nn),kr=Ft(.5,2,-fe[1]),rn=bn*.35*(.3+ht)+.65,yr=[Math.cos(rn),0,Math.sin(rn)];nn>.001&&(yr=jo(yr,Dr(fe,-1/nn),ar));let an=Math.min(1,j*4);be.axis=jo(be.axis,yr,be.fresh?1:an);let po=be.axis,Kn=Math.hypot(po[0],po[1],po[2])||1;po=Dr(po,1/Kn);let Wo=ko.eye,Fn=[Wo[0]-ie[0],Wo[1]-ie[1],Wo[2]-ie[2]],Hr=Math.hypot(Fn[0],Fn[1],Fn[2])||1,Br=Ht(.6,.22,ar),Uo=[Fn[0]/Hr*Br,1+Fn[1]/Hr*Br,Fn[2]/Hr*Br],va=po[0]*Uo[0]+po[1]*Uo[1]+po[2]*Uo[2];Uo=Bd(Uo,Dr(po,va));let wn=Math.hypot(Uo[0],Uo[1],Uo[2])||1;Uo=Dr(Uo,1/wn);let Oa=[po[1]*Uo[2]-po[2]*Uo[1],po[2]*Uo[0]-po[0]*Uo[2],po[0]*Uo[1]-po[1]*Uo[0]],Ao=Math.hypot(fe[0],fe[2]),sn=0;if(Ao>.15&&be.dir&&j>0){let br=[fe[0]/Ao,fe[2]/Ao];sn=(be.dir[0]*br[1]-be.dir[1]*br[0])/j,be.dir=br}else Ao>.15&&(be.dir=[fe[0]/Ao,fe[2]/Ao]);be.bank+=(Math.max(-.8,Math.min(.8,sn*.3))*ar-be.bank)*Math.min(1,j*3),be.rock+=j*(1.5+2.4*ar),be.spin+=j*kr*7*(.4+ht);let ma=Math.sin(be.rock)*(.26+.45*ht)*(1-.5*kr)+be.bank+be.spin,vs=Math.sin(be.rock*.63+1)*(.16+.3*ht)+(Oo.swing||0)*.9,Qa=Math.cos(ma),ms=Math.sin(ma),tf=so(Dr(Uo,Qa),Dr(Oa,ms)),z0=so(Dr(Oa,Qa),Dr(Uo,-ms));Qa=Math.cos(vs),ms=Math.sin(vs);let fi=so(Dr(po,Qa),Dr(tf,ms)),Lc=so(Dr(tf,Qa),Dr(po,-ms)),r1=Math.sin(be.rock+1.5708)*.035*(.3+ht)*(1-.5*ar),f0=so(ie,Dr(Oa,r1)),zc=[fi[0],fi[1],fi[2],0,Lc[0],Lc[1],Lc[2],0,z0[0],z0[1],z0[2],0,f0[0],f0[1],f0[2],1];for(let br=0;br<16;br++)Xt[br]=zc[br];be.fresh=!1}return Oo.phase!=="fly"&&(be.prev=null,be.vel=[0,0,0],be.fresh=!0,be.spin=0,be.bank=0,be.dir=null),{visible:!0,model:Xt}}function pa(j){for(let ht in Jh)Ze[ht]=j[ht]!==void 0?j[ht]:Jh[ht]}function l0(j,ht){if(j<=1)return{phase:"home",pos:wc.slice(),tumble:0};let Xt=_5[j];if(Xt){let ie=Xt.amp;return{phase:"fly",pos:so(Xt.pos(),[Math.sin(ht*.55)*ie[0],Math.sin(ht*.8)*ie[1],(1-Math.cos(ht*.45))*ie[2]]),tumble:Xt.tumble}}return{phase:"floor",pos:(j>=18?hs:j>=10?Vl:Xa).slice(),tumble:0}}let oo=0,mo=null;function $n(j){let ht=Math.min(.1,Math.max(0,j-oo));if(oo=j,E=j,co||(co=!0,ve.start=j),io)return null;if(Me&&(Me.t+=ht,Me.t>=.7&&(Me=null,pe=!0,dt.start(Ae,Object.assign({},Jh,{fade:1,fadeColor:[0,0,0]})))),dt.active){let Ao=dt.update(ht);return ko=Ao.camera,pa(Ao.look),o&&window.__camOverride&&(ko=window.__camOverride),o&&window.__lookOverride&&Object.assign(Ze,window.__lookOverride),{camera:ko,walker:null,door:1,look:Ze,leaf:Go(ht)}}if(!Pe&&!Dt&&E-se>Ce){let Ao=Er(yt);Math.abs(ct[Ao]-yt)<ro&&(yt=ct[Ao])}let Xt=yt-Oe;if(Pe){let sn=Math.sign(Xt)*Math.min(So,Math.sqrt(2*Ko*Math.abs(Xt)))-xe;xe+=Math.sign(sn)*Math.min(Math.abs(sn),Ko*ht),Oe+=xe*ht,(Xt>0&&Oe>=yt||Xt<0&&Oe<=yt||Math.abs(yt-Oe)<1e-4)&&(Oe=yt,xe=0,Pe=!1)}else{let Ao=ik(Oe,yt,xe,ho,ht,3);Oe=Ao[0],xe=Ao[1],Math.abs(yt-Oe)<1e-4&&Math.abs(xe)<.001&&(Oe=yt,xe=0)}let ie=0;for(;ie<jd.length-1&&Oe>=ct[ie+1];)ie++;let fe=jd[ie],nn=Jr((Oe-ct[ie])/fe.dur),ar=fs[ie],kr=fs[ie+1],rn=Er(Oe);rn!==Qt&&(Qt=rn,Eo=0);let yr=Math.abs(Oe-ct[rn])<.02;yr&&(Eo+=ht);let an=1-Ft(0,1.2,Math.abs(Oe-ct[rn])),po=fe.leaf(nn);if(po.pos?Oo=Object.assign({},po):Oo=Object.assign({},po,{pos:po.phase==="home"?wc.slice():(ie>=10?Vl:Xa).slice()}),_5[rn]&&an>0){let Ao=l0(rn,Eo);Oo.pos=jo(Oo.pos,Ao.pos,an)}let Kn=fe.walker&&(nn>.01||ie===6)?fe.walker(nn):null;mo=Kn==null?null:{x:Kn,z:Wd,heading:Math.PI/2,phase:(Kn-E5)/dk};let Wo=fe.cam(nn,ar.cam(0),kr.cam(0),Oo);if(an>0&&Eo>0){let Ao=fs[rn],sn=Ao.cam(0),ma=Ao.cam(Eo);Wo=eo(so(Wo.eye,Dr(Bd(ma.eye,sn.eye),an)),so(Wo.target,Dr(Bd(ma.target,sn.target),an)),Wo.fov+(ma.fov-sn.fov)*an,Wo.roll+(ma.roll-sn.roll)*an)}if(an>0&&!Jt){let Ao=E,sn=.006*an,ma=Math.sin(Ao*.61)*.6+Math.sin(Ao*1.37+1.3)*.4,vs=Math.sin(Ao*.47+2.1)*.6+Math.sin(Ao*1.13+.4)*.4,Qa=Math.sin(Ao*.53+4)*.5+Math.sin(Ao*.97+2.6)*.5;Wo=eo(so(Wo.eye,[ma*sn,vs*sn*.7,Qa*sn]),so(Wo.target,[vs*sn*1.8,ma*sn*1.4,0]),Wo.fov,Wo.roll+Qa*.0012*an)}ko=Wo;let Fn=Qh(ie),Hr=Qh(ie+1),Br=Object.assign({},Fn,fe.look(nn,Fn,Hr,Oo,Wo.eye));if(an>0){let Ao=Qh(rn);for(let sn in Ao)typeof Ao[sn]=="number"&&(Br[sn]=Ht(Br[sn],Ao[sn],an))}pa(Br);let va=yr&&Math.abs(yt-Oe)<.02?rn:-1;va!==de&&(va>=0&&(li=E+_e),de=va,va>=0?Yn(va):Ka()),u.querySelectorAll("i").forEach((Ao,sn)=>Ao.classList.toggle("on",sn===rn));let wn=de>=0?X[de]:null;wn&&wn.fill&&!wn.filled&&(wn.fill(),wn.filled&&(wn.classList.remove("on"),wn.offsetWidth,wn.classList.add("on")));let Oa=Jr((j-ve.start)/2.6);return Oa<1&&(Ze.fade=Math.max(Ze.fade,1-Ft(0,1,Oa)),Ze.fadeColor=[0,0,0]),o&&window.__camOverride&&(ko=window.__camOverride),o&&window.__lookOverride&&Object.assign(Ze,window.__lookOverride),{camera:ko,walker:mo,door:fe.door?fe.door(nn):ie>=12?1:0,look:Me?Object.assign(Ze,{fade:Math.max(Ze.fade||0,Jr(Me.t/.6)),fadeColor:[0,0,0]}):Ze,leaf:Go(ht)}}return o&&(window.__tour={go:Pt,exit:Te,wind:Z,confess(){Ka(),de=-2,dt.start(ko,Ze)},note:()=>$e(),conf:dt,paper:Uh().STATE,seek(j,ht){Oe=yt=ct[j]+(ct[j+1]-ct[j])*ht,xe=0,Pe=!1,se=E+1e6,ve.start=E-10,co=!0},jump(j){Oe=yt=ct[j],xe=0,Pe=!1,Eo=0,se=E,ve.start=E-10,co=!0},state:()=>({current:Er(Oe),scroll:+Oe.toFixed(3),target:+yt.toFixed(3),shown:de,move:Math.abs(yt-Oe)>.02?{p:Oe}:null,camNow:ko,leaf:Oo,look:Ze})}),{update:$n,get active(){return wo&&!io},handover(j){if(!io)return null;let ht=Jr((j-io.start)/1.8);return ht>=1?(wo=!1,null):{from:io.fromCam,fromLook:io.fromLook,k:yn(ht)}},restingDoor:()=>ke,restingLeaf(){return We?(Oo=We,Go(0)):null},mix:ri,cam:eo}}});var _k=cm(),Ya=ya(),lp=ou(),n1=Ya.reflection,Mk=!1,U5=(t,e,o,n,r)=>n+(t-e)*(r-n)/(o-e),fp=()=>U5(window.innerWidth/window.innerHeight,16/9,9/16,1.7,Math.PI/3);navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)&&(fp=()=>U5(window.innerWidth/window.innerHeight,16/9,9/16,1.5,Math.PI/3));var j5=()=>2*Math.atan(Math.tan(fp()*.5)*window.innerHeight/window.innerWidth),Sk=wm(),Ql=new Sk;Ql.showPanel(0);Mk&&document.body.appendChild(Ql.dom);var pn,Tc,op,kc,np,dn;function Ek(){try{let t=document.createElement("canvas"),e=t.getContext("webgl")||t.getContext("experimental-webgl");return!!(e&&e.getExtension("OES_standard_derivatives"))}catch(t){return!1}}if(!Ek())throw _k.finish(),lp.show(!0),new Error("This device cannot draw the 3D gallery; showing the list instead.");pn=_m()({extensions:["OES_element_index_uint","OES_standard_derivatives"],optionalExtensions:["EXT_texture_filter_anisotropic","WEBGL_depth_texture"],attributes:{alpha:!1,antialias:!1},pixelRatio:Ya.pixelRatio});location.hash==="#list"&&lp.show(!1);window.addEventListener("hashchange",()=>{location.hash==="#list"&&lp.show(!1)});Tc=c2()();var kk=Cu();op=kk(pn,Tc,n1);kc=Tg()(pn,Tc);np=Ng()(pn);var T5=Vg()(pn,Tc),L5=r3()(pn),z5=i3()(pn),R5=S3()(pn),N5=L3()(pn),C5=O3()(pn),ds=Y3()(pn),rp=ud(),W5=Pf(),Ak=Jc(),ap=pd(),sp=tr(),Xn=ph(),ip=ax(),V5=Nh(),{A:Ec}=_a();dn=Gy()(Tc,j5);var Ac=Uy()(pn,Ya),us=Yy()(pn),O5=Qy()(pn),Tk=t5()(pn,Ya),Lk=s5()(pn,Ya),P5=G0()(pn),I5=Uh()(pn),$5=U0()(pn),F5=bl()(pn),c0=A5()({fps:dn,paintings:()=>kc.interactables(),avatar:ds,onExit:()=>dn.setPaused(!1)});dn.setPaused(!0);/tourdebug/.test(location.search)&&(window.__post=Ac);var si=[],Jl=[],Na=[7,2,1.6];Tc.viewer=Na;var zk=pn({cull:{enable:!0,face:"back"},uniforms:{view:()=>si,proj:()=>Jl,yScale:1,mirrorOn:()=>n1?1:0,night:()=>sp.night,time:pn.context("time")}}),Rk=pn({cull:{enable:!0,face:"front"},uniforms:{yScale:-1}}),X5=document.createElement("style");X5.textContent=`

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
`;document.head.appendChild(X5);var Ca=document.createElement("button");Ca.className="painting-plaque";Ca.type="button";Ca.setAttribute("aria-label","Read painting");document.body.appendChild(Ca);var Gr=document.createElement("div");Gr.className="story-overlay";Gr.innerHTML=`

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

		${W5.line("story-contact")}

		<div class="visit-row story-visit"></div>

		<p
			class="story-body"
			id="story-body"
		></p>

	</article>
`;document.body.appendChild(Gr);var ps=document.createElement("div");ps.className="museum-links";ps.innerHTML=W5.icons("museum-link");ps.insertBefore($d()("museum-link"),ps.firstChild);ps.insertBefore(V5.button("museum-link"),ps.firstChild.nextSibling);["mousedown","pointerdown","click"].forEach(t=>ps.addEventListener(t,e=>e.stopPropagation()));document.body.appendChild(ps);var Nk=Gr.querySelector("#story-title"),Ck=Gr.querySelector("#story-body"),D5=Gr.querySelector("#story-meta"),Ok=Gr.querySelector(".story-contact"),Kl=Gr.querySelector(".story-visit");Kl.addEventListener("click",t=>{t.target.closest(".visit-btn")&&ci&&ap.open(ci)});var Pk=Gr.querySelector(".story-close"),ci=null,ta={p:0,target:0,last:0},Y5={title:rp.title,description:rp.text,isAbout:!0},T0=null;function hp(t){t&&(ci=t,Nk.textContent=t.title||"",Ck.textContent=t.description||"",D5.textContent=t.isAbout?"":Ak(t),D5.hidden=!!t.isAbout,Ok.hidden=!t.isAbout,Kl.innerHTML=t.isAbout?"":ap.button(t),Kl.hidden=!Kl.innerHTML,Kl.hidden||ap.warm(t),Gr.classList.toggle("about-mode",!!t.isAbout),Gr.classList.add("open"),ta.target=t.isAbout?1:0,T0=t,Ca.classList.remove("visible"),dn.setPaused(!0))}function up(){Gr.classList.remove("open"),ta.target=0,ci=null,T0=null,dn.setPaused(!1)}function K5(t){t&&(t.preventDefault(),t.stopPropagation()),T0&&hp(T0)}Ca.addEventListener("pointerup",K5,!0);Ca.addEventListener("touchend",K5,{passive:!1,capture:!0});Ca.addEventListener("click",t=>{t&&(t.preventDefault(),t.stopPropagation()),ci===null&&T0&&hp(T0)},!0);Pk.addEventListener("click",up);Gr.addEventListener("click",t=>{t.target===Gr&&up()});window.addEventListener("keydown",t=>{t.code==="Escape"&&Gr.classList.contains("open")&&up()});function q5(t,e){let o=e[0],n=e[1],r=e[2];return[t[0]*o+t[4]*n+t[8]*r+t[12],t[1]*o+t[5]*n+t[9]*r+t[13],t[2]*o+t[6]*n+t[10]*r+t[14],t[3]*o+t[7]*n+t[11]*r+t[15]]}function Ik(){if(ci)return;if(c0.active){T0=null,Ca.classList.remove("visible");return}let t=kc.interactables(),e=dn.forward[0],o=dn.forward[2],n=Math.hypot(e,o)||1,r=null,a=1/0;for(let s of t){let i=s.paintingPosition,c=0,f=0;s.side==="left"?c=1:s.side==="right"?c=-1:s.side==="corridor"?f=1:f=-1;let l=i[0]-dn.pos[0],h=i[2]-dn.pos[2],u=-(l*c+h*f),v=Math.abs(l*f-h*c),p=-(e*c+o*f)/n,d=s.side==="end"?11:8,m=(s.width||2)/2;p>.9&&u>.5&&u<d&&v<m+.8&&u<a&&(r=s,a=u)}if(!r){let s=dn.pos[0],i=dn.pos[2];e/n>.85&&s<13.6&&i>Ec.z0-.5&&i<Ec.z1+.5&&(r=Object.assign({},Y5,{plaqueTitle:rp.name}))}r?(T0=r,Ca.textContent=r.isAbout?"ABOUT  \xB7  "+r.plaqueTitle:"READ  \xB7  "+r.title,Ca.classList.add("visible")):(T0=null,Ca.classList.remove("visible"))}var dp=Yi();function $k(){let t=ds.state;if(!t||!t.glowPos)return null;let e=q5(dn.view(),[t.glowPos[0],t.glowPos[1]-.08,t.glowPos[2],1]),o=q5(dn.proj(),e);return o[3]<=.05?null:[(o[0]/o[3]*.5+.5)*window.innerWidth,(.5-o[1]/o[3]*.5)*window.innerHeight,o[3]]}var cp=null;window.addEventListener("pointerdown",t=>{cp={x:t.clientX,y:t.clientY,t:performance.now()}},!0);window.addEventListener("pointerup",t=>{let e=cp;if(cp=null,!e||ci||c0.active||!t.target||!/^(CANVAS|BODY)$/.test(t.target.tagName)||Math.hypot(t.clientX-e.x,t.clientY-e.y)>12||performance.now()-e.t>600)return;let o=$k();if(!o)return;let n=!!document.pointerLockElement,r=n?window.innerWidth/2:t.clientX,a=n?window.innerHeight/2:t.clientY,s=Math.max(t.pointerType==="touch"?60:40,260/o[2]);Math.hypot(r-o[0],a-o[1])<s&&(t.preventDefault(),t.stopPropagation(),hp(Y5))},!0);function Fk(t){let e=Math.min(Math.max(t-ta.last,0),.1);ta.last=t;let o=e/1.6;if(ta.p=ta.target>ta.p?Math.min(1,ta.p+o):Math.max(0,ta.p-o),ta.p<=0)return;let n=ta.p<.5?2*ta.p*ta.p:1-Math.pow(-2*ta.p+2,2)/2,r=window.innerHeight>window.innerWidth,a=ds.state,s=a&&a.hipsPos?a.hipsPos[0]:Ec.cx-1.2,i=a&&a.hipsPos?a.hipsPos[2]:Ec.zc,c=r?[s-2.3,2,i-.1]:[s-1.55,1.55,i+.3],f=r?[s+.1,.2,i-.1]:[s+.1,.7,i+.6],l=dn.pos,h=dn.forward,u=[l[0],l[1],l[2]],v=[l[0]+h[0],l[1]+h[1],l[2]+h[2]],p=(y,b)=>y.map((w,_)=>w+(b[_]-w)*n),d=[Ec.cx-6.2,1.7,Ec.zc],m=1-n,g=u.map((y,b)=>m*m*y+2*m*n*d[b]+n*n*c[b]);dp.lookAt(dn.view(),g,p(v,f),[0,1,0])}var Q5=/[?&]studio\b/.test(location.search);if(Q5){let t=document.createElement("style");t.textContent=".tour, #museum-mobile-controls, .painting-plaque { display: none !important; }",document.head.appendChild(t),window.addEventListener("pointerdown",()=>tr().toggle()),window.addEventListener("keydown",e=>{(e.key==="n"||e.key===" ")&&tr().toggle()})}var ai={fade:0,fadeColor:[0,0,0],letterbox:0,focus:6,aperture:0,exposure:1,shafts:1,vignette:0},ii=null,Zl=!1,e1=!1;function Dk(t,e,o,n){let r=[o[0]-e[0],o[1]-e[1],o[2]-e[2]],a=Math.hypot(r[0],r[1],r[2])||1,s=[-r[2]/a,0,r[0]/a],i=Math.hypot(s[0],s[2])||1;s=[s[0]/i,0,s[2]/i];let c=Math.cos(n),f=Math.sin(n);return dp.lookAt(t,e,o,[s[0]*f,c,s[2]*f])}function qk(t){let e=window.innerWidth/window.innerHeight,o=Ac.shot,n=c0.active?c0.update(t):null,r=n?null:c0.handover(t),a=null,s=ai;if(n){a=n.camera,s=n.look,ii=n.leaf;let i=window.__walkOverride&&/tourdebug/.test(location.search)?window.__walkOverride:n.walker||null;ds.setWalk(i),Zl=!!i,us.setOpen(n.door||0)}else ii=c0.restingLeaf(),ds.setWalk(null),Zl=!1,us.setOpen(c0.restingDoor());if(r){let i=dn.pos,c=dn.forward,f=c0.cam([i[0],i[1],i[2]],[i[0]+c[0],i[1]+c[1],i[2]+c[2]],j5()*180/Math.PI,0);a=c0.mix(r.from,f,r.k),s={};for(let l in ai)s[l]=Array.isArray(ai[l])?ai[l]:r.fromLook[l]+(ai[l]-r.fromLook[l])*r.k}if(a&&n&&(a=ip.apply(a,t)),Q5&&!(/tourdebug/.test(location.search)&&window.__camOverride)){let i=bl().previewCam(t);a=i,s=Object.assign({},ai,{fade:i.fade,focus:8})}if(a)Dk(si,a.eye,a.target,a.roll||0),dp.perspective(Jl,a.fov*Math.PI/180,e,.1,700),Na[0]=a.eye[0],Na[1]=a.eye[1],Na[2]=a.eye[2];else{let i=dn.view(),c=dn.proj();for(let u=0;u<16;u++)si[u]=i[u],Jl[u]=c[u];let f=i[12],l=i[13],h=i[14];Na[0]=-(i[0]*f+i[1]*l+i[2]*h),Na[1]=-(i[4]*f+i[5]*l+i[6]*h),Na[2]=-(i[8]*f+i[9]*l+i[10]*h)}for(let i in ai)o[i]=s[i];n&&ip.pull(o,t)}var da={wake:[[0,-50,0,0],[0,-50,0,0],[0,-50,0,0],[0,-50,0,0]],wakeDir:[0,0,1],gust:[0,0],focus:6,aperture:0},Jd=[9,9,9,9],G5=[0,0,0,0],Xl=0,tp=0,Sc=null,H5=0,B5=0,Yl=0;function Gk(t){let e=Math.min(.1,Math.max(0,t-H5));H5=t,da.focus=Ac.shot.focus,da.aperture=Ya.post>=2?Ac.shot.aperture:0;for(let s=0;s<4;s++)Jd[s]+=e,da.wake[s][3]=G5[s]*Math.exp(-Jd[s]/1.1);let o=ii&&ii.visible?ii.model:null;if(o&&e>0){let s=[o[12],o[13],o[14]];if(Sc){let i=[s[0]-Sc[0],s[1]-Sc[1],s[2]-Sc[2]],c=Math.hypot(i[0],i[1],i[2]),f=c/e;if(c<1.5&&f>.12){let l=Math.min(1,e*8);for(let u=0;u<3;u++)da.wakeDir[u]+=(i[u]/c-da.wakeDir[u])*l;let h=Math.hypot(da.wakeDir[0],da.wakeDir[1],da.wakeDir[2])||1;for(let u=0;u<3;u++)da.wakeDir[u]/=h;if(tp+=e,tp>.14){tp=0;let u=da.wake[Xl];u[0]=s[0],u[1]=s[1],u[2]=s[2],G5[Xl]=Math.min(1,(f-.12)/1.6)*.5,Jd[Xl]=0,Xl=(Xl+1)%4}}}Sc=s}else o||(Sc=null);let n=us.openNow?us.openNow():0,r=e>0?(n-B5)/e:0;B5=n;let a=Math.max(-1,Math.min(1,r*1.2));Yl+=(a-Yl)*Math.min(1,e*(Math.abs(a)>Math.abs(Yl)?6:.7)),da.gust[0]+=Yl*5.5*e,da.gust[1]=Math.abs(Yl)}var ep=0,o1=!1;pn.frame(function({time:t}){if(document.body.classList.contains("visiting")){ep=0;return}Ql.begin(),sp.tick(t);let e=c0.active&&ip.resting&&sp.settled&&(Ya.isPhone||Ya.scale<1||Ya.level>0);if(e){if(o1=!o1,o1){Ql.end();return}}else o1=!1;let o=t-ep;ep=t,Ya.frame(e?o/2:o),n1=Ya.reflection,dn.tick({time:t}),Fk(t),kc.update(dn.pos,dn.fmouse[1],fp()),Ik(),qk(t),Xn.update(si,Jl,Na),V5.listen(Na),e1=!Zl&&Xn.room("stair")&&(!Xn.room("court")||Na[0]<.5||Na[2]>30),ds.setPiano(e1),Gk(t),Ac.capture(arguments[0],{view:si,proj:Jl,eye:Na},()=>{zk(()=>{n1&&Xn.floor&&Rk(()=>{Xn.room("studio",!0)&&F5({reflected:!0}),Xn.zone!=="studio"&&(op(),T5({reflected:!0}),P5(),Xn.room("stair",!0)&&($5({reflected:!0}),I5({reflected:!0,view:si})),Xn.room("court",!0)&&C5(),(e1||Xn.room("court",!0)||Zl)&&ds(),np(kc.batch()),Xn.room("street",!0)&&L5(),Xn.room("garden",!0)&&R5(),Xn.room("florence",!0)&&N5(),O5(ii),us(),z5(),us.glass())}),Xn.room("studio")&&F5(),Xn.zone!=="studio"&&(op(),T5(),P5(),Xn.room("stair")&&($5(),I5({view:si})),Xn.room("court")&&C5(),(e1||Xn.room("court")||Zl)&&ds(),np(kc.batch()),Xn.room("street")&&L5(),Xn.room("garden")&&(R5(),Lk()),Xn.room("florence")&&N5(),O5(ii),us(),Tk(da),z5(),us.glass())})}),Ac.present(),Ql.end()});})();
